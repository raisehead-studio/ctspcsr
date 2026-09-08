<#
  CTSP static site auto-deploy watcher.

  Polls the GitHub 'static' branch and mirrors it into the IIS site directory
  whenever the remote SHA changes, so publishing no longer requires a VPN +
  Citrix session.

    - git ls-remote compares one SHA (a few KB); nothing happens when unchanged
    - on change: fetch -> reset --hard -> back up the live site -> robocopy /MIR
    - a lock file prevents overlapping runs; a failed cycle is logged, not fatal
    - every action is appended to <WorkRoot>\logs\watch-YYYYMM.log

  ASCII only, on purpose: the CTSP host runs Windows PowerShell 5.1 with a
  Big5 console, which mis-parses UTF-8 source and breaks the script. Do not
  add non-ASCII characters to this file.

  Manual run:
    powershell -ExecutionPolicy Bypass -File watch-deploy.ps1 `
      -RepoPath "D:\ctsp-static" -SitePath "D:\ctspcsr\out" -Once
#>

param(
  [string]$RepoPath   = 'D:\ctsp-static',
  [string]$SitePath   = 'D:\ctspcsr\out',
  [string]$Branch     = 'static',
  [int]$IntervalSec   = 300,
  [int]$KeepBackups   = 5,
  # Backups / logs / lock / state live here. Defaults to the user profile
  # because D:\ root is not writable for the deploy account on this host.
  [string]$WorkRoot   = "$env:USERPROFILE\ctsp-deploy",
  # Run a single cycle and exit (for testing, or for a Task Scheduler trigger).
  [switch]$Once
)

$ErrorActionPreference = 'Stop'
$logDir     = Join-Path $WorkRoot 'logs'
$backupRoot = Join-Path $WorkRoot 'backup'
$lockFile   = Join-Path $WorkRoot 'watch-deploy.lock'
$stateFile  = Join-Path $WorkRoot 'watch-deploy.state'
New-Item -ItemType Directory -Force -Path $WorkRoot, $logDir, $backupRoot | Out-Null

function Invoke-Git {
  # git writes progress ("From https://github.com/...") to stderr. With
  # $ErrorActionPreference = 'Stop' PowerShell turns that into a terminating
  # NativeCommandError, so native calls run with it relaxed and are checked
  # via $LASTEXITCODE instead.
  param([Parameter(ValueFromRemainingArguments = $true)][string[]]$GitArgs)
  $prev = $ErrorActionPreference
  $ErrorActionPreference = 'Continue'
  try { $out = & git @GitArgs 2>&1 | Out-String }
  finally { $ErrorActionPreference = $prev }
  return @{ Output = $out; Code = $LASTEXITCODE }
}

function Write-Log($msg, $level = 'INFO') {
  $line = "[{0}] [{1}] {2}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $level, $msg
  Write-Host $line
  Add-Content -Path (Join-Path $logDir ("watch-{0}.log" -f (Get-Date -Format 'yyyyMM'))) -Value $line
}

function Get-RemoteSha {
  $r = Invoke-Git -C $RepoPath ls-remote origin "refs/heads/$Branch"
  if ($r.Code -ne 0) { throw ("ls-remote failed: " + $r.Output) }
  if ($r.Output -match '([0-9a-f]{40})') { return $Matches[1] }
  throw "remote branch '$Branch' not found"
}

function Invoke-Deploy {
  $stamp = Get-Date -Format 'yyyyMMdd-HHmmss'

  Write-Log 'Fetching latest build...'
  $r = Invoke-Git -C $RepoPath fetch --prune origin $Branch
  if ($r.Code -ne 0) { throw ("fetch failed: " + $r.Output) }
  $r = Invoke-Git -C $RepoPath reset --hard "origin/$Branch"
  if ($r.Code -ne 0) { throw ("reset failed: " + $r.Output) }
  Invoke-Git -C $RepoPath clean -fd | Out-Null
  $sha = (Invoke-Git -C $RepoPath rev-parse HEAD).Output.Trim()
  Write-Log ("Checked out {0}" -f $sha.Substring(0, 7))

  if (Test-Path $SitePath) {
    $backup = Join-Path $backupRoot $stamp
    $prev = $ErrorActionPreference; $ErrorActionPreference = 'Continue'
    robocopy $SitePath $backup /E /NFL /NDL /NJH /NJS /R:1 /W:1 | Out-Null
    $ErrorActionPreference = $prev
    Write-Log "Backed up live site to $backup"
    Get-ChildItem $backupRoot -Directory |
      Sort-Object Name -Descending | Select-Object -Skip $KeepBackups |
      ForEach-Object {
        Remove-Item $_.FullName -Recurse -Force
        Write-Log ("Pruned old backup {0}" -f $_.Name)
      }
  }

  # /E copies and overwrites but does not purge. /MIR would be tidier, but on
  # this host the legacy files under the site root were created by another
  # account and ap1 cannot delete them, so /MIR fails on thousands of entries.
  # web.config is excluded for the same reason - it is not writable, and the
  # site deliberately ships no .webp so the missing MIME map does not matter.
  $prev = $ErrorActionPreference; $ErrorActionPreference = 'Continue'
  robocopy $RepoPath $SitePath /E /XD '.git' /XF 'web.config' /NFL /NDL /NJH /R:2 /W:2 | Out-Null
  $code = $LASTEXITCODE
  $ErrorActionPreference = $prev
  # robocopy: 0-7 are success codes, 8 and above are real failures
  if ($code -ge 8) { throw "robocopy failed with code $code" }

  Set-Content -Path $stateFile -Value $sha
  Write-Log ("Deploy complete: {0}" -f $sha.Substring(0, 7)) 'OK'
}

function Invoke-Cycle {
  try {
    $remote = Get-RemoteSha
    $local  = ''
    if (Test-Path $stateFile) { $local = (Get-Content $stateFile -Raw).Trim() }
    if ($remote -eq $local) {
      Write-Log ("No change ({0})" -f $remote.Substring(0, 7)) 'SKIP'
      return
    }
    $localShort = 'none'
    if ($local) { $localShort = $local.Substring(0, 7) }
    Write-Log ("New version {0} (local {1})" -f $remote.Substring(0, 7), $localShort)
    Invoke-Deploy
  }
  catch {
    # Network hiccups and transient GitHub errors land here; try again next cycle.
    Write-Log "Cycle failed: $_" 'ERROR'
  }
}

if (Test-Path $lockFile) {
  $age = (Get-Date) - (Get-Item $lockFile).LastWriteTime
  if ($age.TotalMinutes -lt 30) { Write-Log 'Another run is in progress, skipping' 'SKIP'; exit 0 }
  Write-Log 'Stale lock file found, clearing it' 'WARN'
  Remove-Item $lockFile -Force
}
New-Item -ItemType File -Path $lockFile -Force | Out-Null

try {
  if (-not (Test-Path (Join-Path $RepoPath '.git'))) {
    throw "no git working copy at $RepoPath - clone the static branch first"
  }

  if ($Once) {
    Invoke-Cycle
  }
  else {
    Write-Log ("Watcher started, polling every {0}s" -f $IntervalSec) 'OK'
    Write-Log ("Source: {0} branch  Target: {1}" -f $Branch, $SitePath)
    while ($true) {
      Invoke-Cycle
      (Get-Item $lockFile).LastWriteTime = Get-Date
      Start-Sleep -Seconds $IntervalSec
    }
  }
}
finally {
  Remove-Item $lockFile -Force -ErrorAction SilentlyContinue
}
