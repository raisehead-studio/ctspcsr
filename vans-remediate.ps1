<#
  CTSP host - VANS remediation (September 2026 report, items 4 and 5)

    item 4  Node.js 18.20.6  -> remove
    item 5  Git 2.47.1.2     -> upgrade to the latest Git for Windows

  Why Node.js can go: it existed only for the old deploy task
  (D:\git-auto-pull.ps1 -> npm install -> npm run build). That task was
  retired on 2026-09-08; the site is now built off-host and synced as static
  files, so nothing on this machine runs Node any more.

  Why Git must stay: the auto-deploy scheduled task uses it to pull the built
  site. Upgrade it, never remove it. The task is located by its action (an
  argument containing watch-deploy.ps1) rather than by name, because its name
  is Chinese and this file has to stay ASCII.

  ASCII only, on purpose: this host runs Windows PowerShell 5.1 with a Big5
  console, which mis-parses UTF-8 source. Do not add non-ASCII characters.

  Usage
    1) dry run  (default, changes nothing):
         powershell -ExecutionPolicy Bypass -File vans-remediate.ps1
    2) apply    (needs an elevated shell):
         powershell -ExecutionPolicy Bypass -File vans-remediate.ps1 -Apply

  A transcript is written to <LogDir>\vans-remediate-<timestamp>.log so the
  result can be pasted straight into the VANS reply form.
#>

param(
  # Without this the script only reports what it would do.
  [switch]$Apply,
  # Leftovers from the retired build flow.
  [string]$NodeModulesPath = 'D:\ctspcsr\node_modules',
  # Matched against each task's action arguments to find the deploy task.
  [string]$DeployTaskMatch = 'watch-deploy.ps1',
  [string]$LogDir          = "$env:USERPROFILE\ctsp-deploy\logs"
)

$ErrorActionPreference = 'Stop'
New-Item -ItemType Directory -Force -Path $LogDir | Out-Null
$logFile = Join-Path $LogDir ("vans-remediate-{0}.log" -f (Get-Date -Format 'yyyyMMdd-HHmmss'))
$script:findings = @()

function Say($msg, $color = 'Gray') {
  $line = "[{0}] {1}" -f (Get-Date -Format 'HH:mm:ss'), $msg
  Write-Host $line -ForegroundColor $color
  Add-Content -Path $logFile -Value $line
}
function Head($msg) { Write-Host ''; Say ("=== " + $msg + " ===") 'Cyan' }
function Note($msg) { $script:findings += $msg }

function Test-Admin {
  $id = [Security.Principal.WindowsIdentity]::GetCurrent()
  (New-Object Security.Principal.WindowsPrincipal $id).IsInRole(
    [Security.Principal.WindowsBuiltInRole]::Administrator)
}

# Native commands write progress to stderr; with ErrorActionPreference = Stop
# PowerShell turns that into a terminating error, so relax it around them.
function Invoke-Native {
  param([scriptblock]$Block)
  $prev = $ErrorActionPreference
  $ErrorActionPreference = 'Continue'
  try { & $Block 2>&1 | Out-String }
  finally { $ErrorActionPreference = $prev }
}

# ---------------------------------------------------------------- pre-flight
Head 'Pre-flight'
$isAdmin = Test-Admin
Say ("Administrator : {0}" -f $isAdmin) $(if ($isAdmin) { 'Green' } else { 'Yellow' })
Say ("Mode          : {0}" -f $(if ($Apply) { 'APPLY (will change the system)' } else { 'DRY RUN (no changes)' })) `
   $(if ($Apply) { 'Yellow' } else { 'Green' })
Say ("Log file      : {0}" -f $logFile)

if ($Apply -and -not $isAdmin) {
  Say 'Apply mode needs an elevated PowerShell. Re-run as Administrator.' 'Red'
  exit 1
}

$node = Get-Command node -ErrorAction SilentlyContinue
$npm  = Get-Command npm  -ErrorAction SilentlyContinue
$git  = Get-Command git  -ErrorAction SilentlyContinue
Say ("node : {0}" -f $(if ($node) { "$($node.Source)  $((Invoke-Native { node --version }).Trim())" } else { 'not found' }))
Say ("npm  : {0}" -f $(if ($npm)  { $npm.Source } else { 'not found' }))
Say ("git  : {0}" -f $(if ($git)  { "$($git.Source)  $((Invoke-Native { git --version }).Trim())" } else { 'NOT FOUND' }))

if (-not $git) {
  Say 'git is missing - the deploy task cannot work. Stopping.' 'Red'
  exit 1
}

# ------------------------------------------------- safety: is Node still used?
Head 'Safety check - is Node.js still needed?'
$oldTask = Get-ScheduledTask -ErrorAction SilentlyContinue |
           Where-Object { $_.TaskName -match 'git.*auto.*pull' }
if ($oldTask) {
  Say ("The old build task still exists: '{0}'. It runs npm build." -f $oldTask.TaskName) 'Red'
  Say 'Remove or repoint that task before uninstalling Node.js. Stopping.' 'Red'
  exit 1
}
Say 'Old npm-build scheduled task: gone (good)' 'Green'

if (Test-Path 'D:\git-auto-pull.ps1') {
  Say 'D:\git-auto-pull.ps1 still present - it is inert without its task, but consider removing it.' 'Yellow'
  Note 'D:\git-auto-pull.ps1 still on disk (inert)'
}

$deploy = Get-ScheduledTask -ErrorAction SilentlyContinue | Where-Object {
  ($_.Actions | ForEach-Object { $_.Arguments }) -join ' ' -match [regex]::Escape($DeployTaskMatch)
} | Select-Object -First 1
if ($deploy) { Say ("Deploy task   : found (state {0})" -f $deploy.State) 'Green' }
else { Say ("No scheduled task runs {0} - the post-check will be skipped." -f $DeployTaskMatch) 'Yellow' }

# --------------------------------------------------------- item 4: Node.js
Head 'Item 4 - remove Node.js'
$keys = @(
  'HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\*',
  'HKLM:\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*'
)
$installed = Get-ItemProperty $keys -ErrorAction SilentlyContinue |
             Where-Object { $_.DisplayName -like 'Node.js*' }

if (-not $installed) {
  Say 'No Node.js entry found in the uninstall registry.' 'Yellow'
  if ($node) { Note 'node.exe on PATH but no uninstall entry - may be a portable copy; remove by hand' }
} else {
  foreach ($p in $installed) {
    Say ("Found: {0} {1}  ({2})" -f $p.DisplayName, $p.DisplayVersion, $p.PSChildName)
    if (-not $Apply) { Say '  would run: msiexec /x <ProductCode> /qn /norestart'; continue }
    $code = $p.PSChildName
    Say '  uninstalling...' 'Yellow'
    $r = Start-Process msiexec.exe -ArgumentList "/x `"$code`" /qn /norestart" -Wait -PassThru
    if ($r.ExitCode -eq 0 -or $r.ExitCode -eq 3010) { Say ("  done (exit {0})" -f $r.ExitCode) 'Green' }
    else { Say ("  FAILED (exit {0})" -f $r.ExitCode) 'Red'; Note ("Node.js uninstall returned {0}" -f $r.ExitCode) }
  }
}

# leftovers
$leftovers = @(
  'C:\Program Files\nodejs',
  'C:\Program Files (x86)\nodejs',
  (Join-Path $env:APPDATA 'npm'),
  (Join-Path $env:APPDATA 'npm-cache'),
  $NodeModulesPath
) | Where-Object { $_ -and (Test-Path $_) }

foreach ($p in $leftovers) {
  $mb = [math]::Round(((Get-ChildItem $p -Recurse -File -ErrorAction SilentlyContinue |
        Measure-Object -Property Length -Sum).Sum / 1MB), 1)
  if (-not $Apply) { Say ("  would delete: {0}  ({1} MB)" -f $p, $mb); continue }
  try { Remove-Item $p -Recurse -Force -ErrorAction Stop; Say ("  deleted {0}  ({1} MB freed)" -f $p, $mb) 'Green' }
  catch { Say ("  could not delete {0}: {1}" -f $p, $_) 'Yellow'; Note ("leftover not deleted: " + $p) }
}
if (-not $leftovers) { Say 'No Node/npm leftover directories found.' 'Green' }

# PATH cleanup
foreach ($scope in 'Machine', 'User') {
  $path = [Environment]::GetEnvironmentVariable('Path', $scope)
  if (-not $path) { continue }
  $parts = $path -split ';' | Where-Object { $_ -ne '' }
  $keep  = $parts | Where-Object { $_ -notmatch 'nodejs|\\npm($|\\)' }
  if ($keep.Count -eq $parts.Count) { Say ("PATH ({0}): nothing to remove" -f $scope); continue }
  $drop = $parts | Where-Object { $_ -match 'nodejs|\\npm($|\\)' }
  Say ("PATH ({0}): removing {1}" -f $scope, ($drop -join ', ')) 'Yellow'
  if ($Apply) {
    [Environment]::SetEnvironmentVariable('Path', ($keep -join ';'), $scope)
    Say '  updated' 'Green'
  } else { Say '  would update' }
}

# --------------------------------------------------------------- item 5: Git
Head 'Item 5 - upgrade Git'
$before = (Invoke-Native { git --version }).Trim()
Say ("Current: {0}" -f $before)

$latest = $null
try {
  $rel = Invoke-RestMethod -Uri 'https://api.github.com/repos/git-for-windows/git/releases/latest' `
                           -UseBasicParsing -TimeoutSec 30
  $latest = $rel.tag_name
  Say ("Latest : {0}  ({1})" -f $latest, $rel.published_at)
} catch {
  Say ("Could not reach the GitHub release API: {0}" -f $_) 'Yellow'
}

if (-not $Apply) {
  Say 'would run: git update-git-for-windows -g   (falls back to the installer)'
} else {
  Say 'Upgrading via the built-in updater...' 'Yellow'
  $out = Invoke-Native { git update-git-for-windows -g }
  Say ($out.Trim())
  $after = (Invoke-Native { git --version }).Trim()
  if ($after -eq $before) {
    Say 'Built-in updater did not change the version; downloading the installer instead.' 'Yellow'
    try {
      $asset = $rel.assets | Where-Object { $_.name -match '64-bit\.exe$' } | Select-Object -First 1
      if (-not $asset) { throw 'no 64-bit installer asset in the latest release' }
      $exe = Join-Path $env:TEMP $asset.name
      Say ("  downloading {0}" -f $asset.name)
      Invoke-WebRequest -Uri $asset.browser_download_url -OutFile $exe -UseBasicParsing
      Say '  installing silently...'
      $r = Start-Process $exe -ArgumentList '/VERYSILENT /NORESTART /NOCANCEL /SP-' -Wait -PassThru
      Say ("  installer exit {0}" -f $r.ExitCode)
      Remove-Item $exe -Force -ErrorAction SilentlyContinue
    } catch {
      Say ("  installer route failed: {0}" -f $_) 'Red'
      Note 'Git upgrade failed - do it by hand from git-scm.com'
    }
  }
}

# ------------------------------------------------------------- post-check
Head 'Post-check'
$git2 = Get-Command git -ErrorAction SilentlyContinue
if ($git2) { Say ("git : {0}  {1}" -f $git2.Source, (Invoke-Native { git --version }).Trim()) 'Green' }
else { Say 'git : NOT FOUND - the deploy task will fail. Fix this before finishing.' 'Red'; Note 'git missing after upgrade' }

$node2 = Get-Command node -ErrorAction SilentlyContinue
if ($node2) { Say ("node: still present at {0}" -f $node2.Source) 'Yellow'; Note 'node still on PATH (a reboot or new shell may be needed)' }
else { Say 'node: gone' 'Green' }

if ($Apply -and $deploy) {
  Say 'Running the deploy task once to confirm the pipeline still works...' 'Yellow'
  try {
    Start-ScheduledTask -TaskName $deploy.TaskName -TaskPath $deploy.TaskPath
    Start-Sleep -Seconds 25
    $watch = Join-Path $LogDir ("watch-{0}.log" -f (Get-Date -Format 'yyyyMM'))
    if (Test-Path $watch) { Get-Content $watch -Tail 5 | ForEach-Object { Say ("  " + $_) } }
    else { Say '  watcher log not found yet - check again in a few minutes.' 'Yellow' }
  } catch { Say ("  could not start the task: {0}" -f $_) 'Yellow' }
}

Head 'Summary'
if ($script:findings.Count -eq 0) { Say 'No outstanding issues.' 'Green' }
else { foreach ($f in $script:findings) { Say ("- " + $f) 'Yellow' } }
Say ("Full log: {0}" -f $logFile) 'Cyan'
if (-not $Apply) { Write-Host ''; Say 'This was a DRY RUN. Re-run with -Apply in an elevated shell to make the changes.' 'Cyan' }

Write-Host ''
Write-Host 'Press any key to close...' -ForegroundColor DarkGray
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')
