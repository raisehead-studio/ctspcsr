<#
  中科 (CTSP) 靜態網站部署腳本 — 在中科 VPS 上執行（Citrix 內）。

  設計原則：Citrix 畫面又慢又難操作，所以這支腳本要能「雙擊執行、全程不打字」。
  每次部署只會做三件事：
    1. git pull 取得 Mac 端建置好的靜態檔（只傳差異，不是整包 339MB）
    2. 把現行站台備份到 backup\yyyyMMdd-HHmmss
    3. robocopy /MIR 覆蓋 IIS 根目錄

  伺服器上不建置、不需要 Node.js — 只需要 Git。

  一次性安裝請先跑 setup-once.ps1。
#>

param(
  # 本機 git 工作副本（存放建置後的靜態檔，不是 IIS 根目錄）
  [string]$RepoPath = 'C:\deploy\ctsp-static',
  # IIS 網站根目錄
  [string]$SitePath = 'C:\inetpub\wwwroot\ctsp',
  # 備份保留份數
  [int]$KeepBackups = 5,
  [string]$Branch = 'static'
)

$ErrorActionPreference = 'Stop'
$stamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$backupRoot = Join-Path (Split-Path $RepoPath -Parent) 'backup'
$logDir = Join-Path (Split-Path $RepoPath -Parent) 'logs'
New-Item -ItemType Directory -Force -Path $backupRoot, $logDir | Out-Null
$log = Join-Path $logDir "deploy-$stamp.log"

function Say($msg, $color = 'White') {
  Write-Host $msg -ForegroundColor $color
  Add-Content -Path $log -Value "[$(Get-Date -Format 'HH:mm:ss')] $msg"
}

try {
  Say "=== 中科網站部署 $stamp ===" 'Cyan'

  # --- 1. 取得最新靜態檔 --------------------------------------------------
  Say "`n[1/3] 從 GitHub 取得最新版本…" 'Yellow'
  if (-not (Test-Path $RepoPath)) {
    throw "找不到 $RepoPath — 請先執行 setup-once.ps1"
  }
  git -C $RepoPath fetch --prune origin $Branch 2>&1 | ForEach-Object { Say "  $_" }
  $before = (git -C $RepoPath rev-parse HEAD)
  # reset --hard：伺服器端永遠不改檔案，直接對齊遠端，避免任何 merge 衝突
  git -C $RepoPath reset --hard "origin/$Branch" 2>&1 | ForEach-Object { Say "  $_" }
  git -C $RepoPath clean -fd 2>&1 | ForEach-Object { Say "  $_" }
  $after = (git -C $RepoPath rev-parse HEAD)

  if ($before -eq $after) {
    Say "  已是最新版本（$($after.Substring(0,7)))，沒有新內容。" 'Gray'
  } else {
    Say "  更新：$($before.Substring(0,7)) → $($after.Substring(0,7))" 'Green'
  }
  Say "  版本說明：$(git -C $RepoPath log -1 --pretty=format:'%s')"

  # --- 2. 備份現行站台 ----------------------------------------------------
  Say "`n[2/3] 備份現行站台…" 'Yellow'
  if (Test-Path $SitePath) {
    $backup = Join-Path $backupRoot $stamp
    robocopy $SitePath $backup /E /NFL /NDL /NJH /NJS /R:1 /W:1 | Out-Null
    Say "  已備份到 $backup" 'Green'

    # 只留最近幾份，避免磁碟被吃光（中科主機空間有限）
    Get-ChildItem $backupRoot -Directory |
      Sort-Object Name -Descending |
      Select-Object -Skip $KeepBackups |
      ForEach-Object { Say "  清除舊備份 $($_.Name)" 'Gray'; Remove-Item $_.FullName -Recurse -Force }
  } else {
    Say "  $SitePath 不存在，略過備份（首次部署）" 'Gray'
  }

  # --- 3. 覆蓋 IIS 根目錄 -------------------------------------------------
  Say "`n[3/3] 更新網站檔案…" 'Yellow'
  # /MIR 會讓目標和來源完全一致（含刪除已移除的檔案）。
  # dist 內已含 web.config，所以不需要排除任何檔案。
  $rc = robocopy $RepoPath $SitePath /MIR /XD '.git' /NFL /NDL /NJH /R:2 /W:2
  $code = $LASTEXITCODE
  # robocopy 0-7 都算成功（8 以上才是錯誤）
  if ($code -ge 8) { throw "robocopy 失敗，代碼 $code" }
  Say "  完成（robocopy 代碼 $code）" 'Green'

  Say "`n✅ 部署完成。請開網站確認：" 'Cyan'
  Say "   紀錄檔：$log" 'Gray'
}
catch {
  Say "`n❌ 部署失敗：$_" 'Red'
  Say "   站台檔案未變更或可從 $backupRoot\$stamp 還原" 'Red'
  exit 1
}
finally {
  Write-Host "`n按任意鍵關閉…" -ForegroundColor DarkGray
  $null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')
}
