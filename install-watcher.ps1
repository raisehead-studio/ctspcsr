<#
  把 watch-deploy.ps1 註冊成 Windows 排程工作，讓中科主機自己定時檢查並部署。
  裝完之後就不必再為了上稿專程連 VPN + Citrix。

  兩種模式：
    -Mode Service（預設，需要管理員）
        開機自動啟動，常駐輪詢。機器重開也會自己回來。
    -Mode Interval（不需要管理員也可能可行）
        由排程器每 N 分鐘叫一次 watch-deploy.ps1 -Once，跑完就結束。

  移除：Unregister-ScheduledTask -TaskName 'CTSP-AutoDeploy' -Confirm:$false
#>

param(
  [ValidateSet('Service', 'Interval')]
  [string]$Mode        = 'Service',
  [string]$RepoPath    = 'C:\deploy\ctsp-static',
  [string]$SitePath    = 'D:\ctspcsr\out',
  [string]$Branch      = 'static',
  [int]$IntervalMin    = 5,
  [string]$TaskName    = 'CTSP-AutoDeploy'
)

$ErrorActionPreference = 'Stop'
$root   = Split-Path $RepoPath -Parent
$script = Join-Path $root 'watch-deploy.ps1'

Write-Host '=== 安裝中科自動部署排程 ===' -ForegroundColor Cyan

# 把腳本放到固定位置，排程才不會因為來源資料夾被移動而失效
$src = Join-Path $PSScriptRoot 'watch-deploy.ps1'
if (Test-Path $src) { Copy-Item $src $script -Force }
if (-not (Test-Path $script)) { throw "找不到 $script，請先把 watch-deploy.ps1 放到 $root" }

$isAdmin = ([Security.Principal.WindowsPrincipal] `
  [Security.Principal.WindowsIdentity]::GetCurrent()
).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if ($Mode -eq 'Service' -and -not $isAdmin) {
  Write-Host '  目前不是系統管理員，改用 Interval 模式（由排程器定時叫起來）' -ForegroundColor Yellow
  $Mode = 'Interval'
}

$common = "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$script`" " +
          "-RepoPath `"$RepoPath`" -SitePath `"$SitePath`" -Branch `"$Branch`""

if ($Mode -eq 'Service') {
  $action  = New-ScheduledTaskAction -Execute 'powershell.exe' `
             -Argument "$common -IntervalSec $($IntervalMin * 60)"
  $trigger = New-ScheduledTaskTrigger -AtStartup
  # 用 SYSTEM 跑，機器沒人登入也會運作 —— 這是「不用再連進來」的關鍵
  $principal = New-ScheduledTaskPrincipal -UserId 'SYSTEM' -LogonType ServiceAccount -RunLevel Highest
  $settings  = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries `
               -DontStopIfGoingOnBatteries -RestartCount 3 -RestartInterval (New-TimeSpan -Minutes 5) `
               -ExecutionTimeLimit ([TimeSpan]::Zero)
  Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger `
    -Principal $principal -Settings $settings -Force | Out-Null
  Start-ScheduledTask -TaskName $TaskName
  Write-Host "  已註冊常駐服務（開機啟動，每 $IntervalMin 分鐘檢查）" -ForegroundColor Green
}
else {
  $action  = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument "$common -Once"
  $trigger = New-ScheduledTaskTrigger -Once -At (Get-Date).AddMinutes(1) `
             -RepetitionInterval (New-TimeSpan -Minutes $IntervalMin)
  $settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries `
              -DontStopIfGoingOnBatteries -ExecutionTimeLimit (New-TimeSpan -Minutes 30)
  Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $trigger `
    -Settings $settings -Force | Out-Null
  Write-Host "  已註冊定時工作（每 $IntervalMin 分鐘檢查一次）" -ForegroundColor Green
  Write-Host '  注意：此模式需要該使用者帳號登入時才會執行' -ForegroundColor Yellow
}

Write-Host "`n檢查狀態：" -ForegroundColor Cyan
Write-Host "  Get-ScheduledTask -TaskName '$TaskName' | Format-List TaskName,State"
Write-Host "  Get-Content '$root\logs\watch-$(Get-Date -Format yyyyMM).log' -Tail 30"
Write-Host "`n移除：" -ForegroundColor Cyan
Write-Host "  Unregister-ScheduledTask -TaskName '$TaskName' -Confirm:`$false"
Write-Host "`n按任意鍵關閉…" -ForegroundColor DarkGray
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')
