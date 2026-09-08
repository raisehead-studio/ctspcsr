<#
  中科 (CTSP) 部署環境一次性安裝 — 只需在中科 VPS 上跑一次。

  做四件事：
    1. 確認 Git 可用
    2. clone 靜態檔 repo 到 C:\deploy\ctsp-static（--depth 1，不拉整段歷史）
    3. 把 deploy.ps1 放到 C:\deploy\
    4. 在桌面建立捷徑，之後每次部署只要雙擊

  首次 clone 約 300–400 MB，會跑一陣子；之後每次 pull 只傳差異。
#>

param(
  [string]$RepoUrl = 'https://github.com/raisehead-studio/ctspcsr.git',
  [string]$Branch = 'static',
  [string]$RepoPath = 'C:\deploy\ctsp-static',
  [string]$SitePath = 'C:\inetpub\wwwroot\ctsp'
)

$ErrorActionPreference = 'Stop'
$root = Split-Path $RepoPath -Parent

Write-Host '=== 中科部署環境安裝 ===' -ForegroundColor Cyan

# 1. Git
Write-Host "`n[1/4] 檢查 Git…" -ForegroundColor Yellow
$git = Get-Command git -ErrorAction SilentlyContinue
if (-not $git) { throw ' 找不到 git，請先安裝 Git for Windows' }
Write-Host "  $(git --version)" -ForegroundColor Green

# 2. Clone
Write-Host "`n[2/4] 取得靜態檔（首次約 300-400 MB，請耐心等）…" -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path $root | Out-Null
if (Test-Path (Join-Path $RepoPath '.git')) {
  Write-Host '  已存在，略過 clone' -ForegroundColor Gray
} else {
  git clone --branch $Branch --depth 1 $RepoUrl $RepoPath
  Write-Host '  完成' -ForegroundColor Green
}

# 3. 部署腳本
Write-Host "`n[3/4] 安裝部署腳本…" -ForegroundColor Yellow
$src = Join-Path $PSScriptRoot 'deploy.ps1'
$dst = Join-Path $root 'deploy.ps1'
if (Test-Path $src) { Copy-Item $src $dst -Force; Write-Host "  已放到 $dst" -ForegroundColor Green }
else { Write-Host "  找不到 deploy.ps1，請手動複製到 $dst" -ForegroundColor Red }

# 4. 桌面捷徑 — 之後部署只要雙擊這個
Write-Host "`n[4/4] 建立桌面捷徑…" -ForegroundColor Yellow
$lnk = Join-Path ([Environment]::GetFolderPath('Desktop')) '部署中科網站.lnk'
$sh = New-Object -ComObject WScript.Shell
$s = $sh.CreateShortcut($lnk)
$s.TargetPath = 'powershell.exe'
$s.Arguments = "-NoProfile -ExecutionPolicy Bypass -File `"$dst`" -RepoPath `"$RepoPath`" -SitePath `"$SitePath`""
$s.WorkingDirectory = $root
$s.IconLocation = 'shell32.dll,46'
$s.Description = '從 GitHub 取得最新版中科永續發展網並更新 IIS 站台'
$s.Save()
Write-Host "  已建立：$lnk" -ForegroundColor Green

Write-Host "`n✅ 安裝完成。以後部署只要雙擊桌面的「部署中科網站」。" -ForegroundColor Cyan
Write-Host "   靜態檔工作目錄：$RepoPath"
Write-Host "   IIS 站台目錄　：$SitePath"
Write-Host "`n請確認上面的 IIS 站台目錄正確；不對的話用 -SitePath 參數重跑一次。" -ForegroundColor Yellow
Write-Host "`n按任意鍵關閉…" -ForegroundColor DarkGray
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')
