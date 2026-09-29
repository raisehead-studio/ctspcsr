<#
  CTSP - page view counter from the IIS logs.

  The host may not run an application, and the client does not want a
  database, so the counter is built the cheap way: read the W3C logs IIS
  already writes, aggregate them, and drop a small JSON file into the site
  root. The page fetches that file and prints the number.

    C:\inetpub\logs\LogFiles\W3SVC1\u_exYYMMDD.log
      -> this script (scheduled, hourly)
      -> D:\ctspcsr\out\visits.json
      -> footer of every page

  Nothing is stored about individual visitors. Client IPs are only used
  in-memory to de-duplicate today's visitors; they are never written out.

  State lives in <StateDir>\visits-state.json and records how many lines of
  each log file have already been counted, so re-runs never double count and
  the running total survives log rotation.

  ASCII only: this host runs Windows PowerShell 5.1 with a Big5 console,
  which mis-parses UTF-8 source. Do not add non-ASCII characters.

  Usage
    powershell -ExecutionPolicy Bypass -File count-visits.ps1
    powershell -ExecutionPolicy Bypass -File count-visits.ps1 -WhatIf
#>

param(
  [string]$LogDir   = 'C:\inetpub\logs\LogFiles\W3SVC1',
  [string]$SitePath = 'D:\ctspcsr\out',
  [string]$StateDir = "$env:USERPROFILE\ctsp-deploy",
  # Added to the computed total. Use it if the count must continue from an
  # older counter rather than from whatever logs are still on disk.
  [long]$Seed       = 0,
  # Report what would be written without touching the site.
  [switch]$WhatIf
)

$ErrorActionPreference = 'Stop'
New-Item -ItemType Directory -Force -Path $StateDir | Out-Null
$stateFile = Join-Path $StateDir 'visits-state.json'
$logFile   = Join-Path $StateDir ("visits-{0}.log" -f (Get-Date -Format 'yyyyMM'))

function Write-Log($msg) {
  $line = "[{0}] {1}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $msg
  Write-Host $line
  Add-Content -Path $logFile -Value $line
}

# A request counts as a page view when it is a successful GET for a page --
# not an image, stylesheet, script, font or PDF -- and the user agent does not
# look like a crawler or an uptime monitor.
$BOT = 'bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora|pinterest|' +
       'vkshare|outbrain|monitor|uptime|curl|wget|python-requests|httpclient|headless|' +
       'lighthouse|pagespeed|ahrefs|semrush|mj12|dotbot|petalbot|yandex|applebot|duckduck'
$ASSET = '\.(png|jpe?g|gif|webp|svg|ico|css|js|mjs|map|woff2?|ttf|eot|pdf|xml|txt|json|zip|mp4)$'

function Read-Log([string]$path, [int]$skip) {
  <#
    Returns @{ Views; Ips; Lines } for one W3C log, ignoring the first $skip
    data lines. The field order is taken from the '#Fields:' header rather
    than assumed, because IIS sites can be configured differently.
  #>
  $views = 0
  $ips = New-Object System.Collections.Generic.HashSet[string]
  $idx = @{}
  $n = 0

  $reader = [System.IO.StreamReader]::new(
    [System.IO.File]::Open($path, 'Open', 'Read', 'ReadWrite'))
  try {
    while ($null -ne ($line = $reader.ReadLine())) {
      if ($line.StartsWith('#')) {
        if ($line.StartsWith('#Fields:')) {
          $names = ($line -replace '^#Fields:\s*', '') -split '\s+'
          $idx = @{}
          for ($i = 0; $i -lt $names.Count; $i++) { $idx[$names[$i]] = $i }
        }
        continue
      }
      $n++
      if ($n -le $skip) { continue }
      if ($idx.Count -eq 0) { continue }

      $f = $line -split ' '
      $get = if ($idx.ContainsKey('cs-method')) { $f[$idx['cs-method']] } else { 'GET' }
      if ($get -ne 'GET') { continue }

      $status = if ($idx.ContainsKey('sc-status')) { $f[$idx['sc-status']] } else { '200' }
      if ($status -notin @('200', '304')) { continue }

      $uri = if ($idx.ContainsKey('cs-uri-stem')) { $f[$idx['cs-uri-stem']] } else { '' }
      if ($uri -match $ASSET) { continue }

      $ua = if ($idx.ContainsKey('cs(User-Agent)')) { $f[$idx['cs(User-Agent)']] } else { '' }
      if ($ua -match $BOT) { continue }

      $views++
      if ($idx.ContainsKey('c-ip')) { [void]$ips.Add($f[$idx['c-ip']]) }
    }
  }
  finally { $reader.Dispose() }

  return @{ Views = $views; Ips = $ips; Lines = $n }
}

# ------------------------------------------------------------------ state
$state = @{ total = 0; files = @{} }
if (Test-Path $stateFile) {
  try {
    $raw = Get-Content $stateFile -Raw | ConvertFrom-Json
    $state.total = [long]$raw.total
    $files = @{}
    foreach ($p in $raw.files.PSObject.Properties) { $files[$p.Name] = [int]$p.Value }
    $state.files = $files
  } catch { Write-Log "state file unreadable, starting over: $_" }
}

if (-not (Test-Path $LogDir)) { Write-Log "log directory not found: $LogDir"; exit 1 }

# ------------------------------------------------------------------ counting
$today = (Get-Date).ToUniversalTime().ToString('yyMMdd')   # IIS names logs in UTC
$todayViews = 0
$todayIps = New-Object System.Collections.Generic.HashSet[string]
$monthPrefix = (Get-Date).ToUniversalTime().ToString('yyMM')
$monthViews = 0
$added = 0

foreach ($log in Get-ChildItem $LogDir -Filter 'u_ex*.log' | Sort-Object Name) {
  $skip = 0
  if ($state.files.ContainsKey($log.Name)) { $skip = $state.files[$log.Name] }

  $r = Read-Log $log.FullName $skip
  $added += $r.Views
  $state.files[$log.Name] = $r.Lines

  # today's / this month's figures are recomputed from scratch each run, so
  # they stay correct no matter how often the script fires
  if ($log.Name -eq "u_ex$today.log") {
    $full = Read-Log $log.FullName 0
    $todayViews = $full.Views
    $todayIps = $full.Ips
  }
  if ($log.Name -like "u_ex$monthPrefix*.log") {
    $full = if ($log.Name -eq "u_ex$today.log") { @{ Views = $todayViews } } else { Read-Log $log.FullName 0 }
    $monthViews += $full.Views
  }
}

$state.total += $added
$total = $state.total + $Seed

Write-Log ("new page views this run: {0}   running total: {1}   today: {2}   today visitors: {3}   this month: {4}" -f `
  $added, $total, $todayViews, $todayIps.Count, $monthViews)

# ------------------------------------------------------------------ output
$payload = [ordered]@{
  total          = $total          # cumulative page views (the number shown)
  today          = $todayViews     # page views so far today (stored, not shown)
  todayVisitors  = $todayIps.Count # distinct client IPs today (stored, not shown)
  month          = $monthViews     # page views this calendar month (stored)
  updated        = (Get-Date).ToString('s')
}
$json = ($payload | ConvertTo-Json -Compress)

if ($WhatIf) {
  Write-Log "WhatIf - would write $SitePath\visits.json"
  Write-Log $json
  exit 0
}

Set-Content -Path $stateFile -Value (@{ total = $state.total; files = $state.files } | ConvertTo-Json -Depth 4)
Set-Content -Path (Join-Path $SitePath 'visits.json') -Value $json -Encoding UTF8
Write-Log ("wrote {0}\visits.json" -f $SitePath)
