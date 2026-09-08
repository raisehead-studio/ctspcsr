<#
  中科 (CTSP) 自動部署常駐服務 — 每隔幾分鐘檢查 GitHub 有沒有新版，有就自動部署。

  設計成「裝一次就不用再進 Citrix」：
    - 用 git ls-remote 比對遠端 SHA（很輕，不會拉整包）
    - 只有 SHA 變了才 fetch → reset → 備份 → robocopy
    - 有 lock 檔避免重疊執行；出錯只記 log 不會中斷輪詢
    - 每次動作都寫進 logs\，之後要查是誰、什麼時候部署了什麼都有紀錄

  安裝成開機自動執行請跑 install-watcher.ps1。
  手動測試：powershell -ExecutionPolicy Bypass -File watch-deploy.ps1 -Once
#>

param(
  [string]$RepoPath   = 'C:\deploy\ctsp-static',
  [string]$SitePath   = 'D:\ctspcsr\out',
  [string]$Branch     = 'static',
  [int]$IntervalSec   = 300,
  [int]$KeepBackups   = 5,
  # 只跑一輪就結束（測試用，也可以配合 Windows 排程器每 N 分鐘叫一次）
  [switch]$Once
)

$ErrorActionPreference = 'Stop'
$root       = Split-Path $RepoPath -Parent
$logDir     = Join-Path $root 'logs'
$backupRoot = Join-Path $root 'backup'
$lockFile   = Join-Path $root 'watch-deploy.lock'
$stateFile  = Join-Path $root 'watch-deploy.state'
New-Item -ItemType Directory -Force -Path $logDir, $backupRoot | Out-Null

function Log($msg, $level = 'INFO') {
  $line = "[{0}] [{1}] {2}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $level, $msg
  Write-Host $line
  Add-Content -Path (Join-Path $logDir ("watch-{0}.log" -f (Get-Date -Format 'yyyyMM'))) -Value $line
}

function Get-RemoteSha {
  # ls-remote 只問一顆 SHA，幾 KB 而已，5 分鐘問一次對網路沒有負擔
  $out = git -C $RepoPath ls-remote origin "refs/heads/$Branch" 2>&1
  if ($LASTEXITCODE -ne 0) { throw "ls-remote 失敗：$out" }
  if ($out -match '^([0-9a-f]{40})') { return $Matches[1] }
  throw "遠端沒有 $Branch 分支"
}

function Invoke-Deploy {
  $stamp = Get-Date -Format 'yyyyMMdd-HHmmss'

  Log "取得新版本…"
  git -C $RepoPath fetch --prune origin $Branch 2>&1 | Out-Null
  git -C $RepoPath reset --hard "origin/$Branch" 2>&1 | Out-Null
  git -C $RepoPath clean -fd 2>&1 | Out-Null
  $sha = (git -C $RepoPath rev-parse HEAD).Trim()
  $subject = (git -C $RepoPath log -1 --pretty=format:'%s').Trim()
  Log "版本 $($sha.Substring(0,7))：$subject"

  if (Test-Path $SitePath) {
    $backup = Join-Path $backupRoot $stamp
    robocopy $SitePath $backup /E /NFL /NDL /NJH /NJS /R:1 /W:1 | Out-Null
    Log "已備份現行站台 → $backup"
    Get-ChildItem $backupRoot -Directory |
      Sort-Object Name -Descending | Select-Object -Skip $KeepBackups |
      ForEach-Object { Remove-Item $_.FullName -Recurse -Force; Log "清除舊備份 $($_.Name)" }
  }

  robocopy $RepoPath $SitePath /MIR /XD '.git' /NFL /NDL /NJH /R:2 /W:2 | Out-Null
  if ($LASTEXITCODE -ge 8) { throw "robocopy 失敗，代碼 $LASTEXITCODE" }

  Set-Content -Path $stateFile -Value $sha
  Log "✅ 部署完成：$($sha.Substring(0,7))" 'OK'
}

function Invoke-Cycle {
  try {
    $remote = Get-RemoteSha
    $local  = if (Test-Path $stateFile) { (Get-Content $stateFile -Raw).Trim() } else { '' }
    if ($remote -eq $local) {
      Log "無更新（$($remote.Substring(0,7))）" 'SKIP'
      return
    }
    Log "偵測到新版本 $($remote.Substring(0,7))（本機 $(if($local){$local.Substring(0,7)}else{'無'})）"
    Invoke-Deploy
  }
  catch {
    # 網路斷線、GitHub 暫時連不上都會走到這裡 —— 記下來，下一輪再試就好
    Log "本輪失敗：$_" 'ERROR'
  }
}

# --- lock：避免上一輪還沒跑完又被叫起來 ------------------------------------
if (Test-Path $lockFile) {
  $age = (Get-Date) - (Get-Item $lockFile).LastWriteTime
  if ($age.TotalMinutes -lt 30) { Log '已有另一個部署程序在執行，跳過' 'SKIP'; exit 0 }
  Log '發現逾時的 lock 檔，清除後繼續' 'WARN'
  Remove-Item $lockFile -Force
}
New-Item -ItemType File -Path $lockFile -Force | Out-Null

try {
  if (-not (Test-Path (Join-Path $RepoPath '.git'))) {
    throw "找不到 $RepoPath 的 git 工作副本 — 請先執行 setup-once.ps1"
  }

  if ($Once) {
    Invoke-Cycle
  } else {
    Log "=== 自動部署監看啟動（每 $IntervalSec 秒檢查一次）===" 'OK'
    Log "    來源：$Branch 分支　目標：$SitePath"
    while ($true) {
      Invoke-Cycle
      # 每輪都摸一下 lock 檔，讓它的時間戳保持新鮮
      (Get-Item $lockFile).LastWriteTime = Get-Date
      Start-Sleep -Seconds $IntervalSec
    }
  }
}
finally {
  Remove-Item $lockFile -Force -ErrorAction SilentlyContinue
}
