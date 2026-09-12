<#
.SYNOPSIS
    Submit URLs to IndexNow for the zydsign.com site.

.DESCRIPTION
    Reads the IndexNow key from the local key file in public/, verifies that the
    same key file is publicly reachable in production (must return HTTP 200 with
    the key as body), optionally verifies each target URL returns HTTP 200, then
    POSTs the payload to https://api.indexnow.org/indexnow and prints the REAL
    HTTP status code and response body.

    Safety rules:
      * Fails hard (exit 2) if the production key file is not HTTP 200 + correct body.
      * Fails hard (exit 3) if any target URL is not HTTP 200, unless -Force is used.
      * Never fabricates a result: if the request cannot be made, it reports the error.

.PARAMETER Urls
    One or more absolute URLs to submit. Must use the same host as -HostName.

.PARAMETER UrlsFile
    Path to a text file with one URL per line. Blank lines and lines starting
    with '#' are ignored.

.PARAMETER HostName
    IndexNow host. Default: www.zydsign.com (the apex domain 308-redirects).

.PARAMETER Key
    Override the key. Normally omitted so the key is read from the key file.

.PARAMETER KeyFile
    Path to the local IndexNow key file. Default: auto-discovered from public/.

.PARAMETER Force
    Skip the per-URL HTTP 200 pre-check and submit the given list as-is.
    The production key-file check is NEVER skipped.

.PARAMETER DryRun
    Run all pre-checks and print the payload, but do not POST.

.PARAMETER TimeoutSec
    Per-request timeout in seconds. Default: 60.

.EXAMPLE
    powershell -File scripts/indexnow-submit.ps1 -Urls "https://www.zydsign.com/guides/front-lit-vs-halo-lit-channel-letters"

.EXAMPLE
    powershell -File scripts/indexnow-submit.ps1 -UrlsFile scripts/indexnow-urls.txt

.NOTES
    Exit codes:
      0 = submission accepted (HTTP 200 or 202)
      2 = production key-file pre-check failed (do NOT retry until deployed)
      3 = one or more target URLs were not HTTP 200
      4 = IndexNow API returned a non-2xx status
      5 = input error (no URLs, bad key, host mismatch)
#>
[CmdletBinding()]
param(
    [string[]]$Urls,
    [string]$UrlsFile,
    [string]$HostName = "www.zydsign.com",
    [string]$Key,
    [string]$KeyFile,
    [switch]$Force,
    [switch]$DryRun,
    [int]$TimeoutSec = 60
)

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$ErrorActionPreference = "Stop"

$ApiEndpoint = "https://api.indexnow.org/indexnow"
$RepoRoot    = Split-Path -Parent $PSScriptRoot

function Write-Step  { param([string]$m) Write-Host "==> $m" -ForegroundColor Cyan }
function Write-Ok    { param([string]$m) Write-Host "  OK   $m" -ForegroundColor Green }
function Write-Warn2 { param([string]$m) Write-Host "  WARN $m" -ForegroundColor Yellow }
function Write-Err   { param([string]$m) Write-Host "  FAIL $m" -ForegroundColor Red }

function Get-HttpStatus {
    param([string]$Uri, [string]$Method = "Get")
    try {
        $r = Invoke-WebRequest -Uri $Uri -Method $Method -UseBasicParsing -TimeoutSec $TimeoutSec
        return [pscustomobject]@{ Status = [int]$r.StatusCode; Body = $r.Content; Error = $null }
    } catch {
        $resp = $_.Exception.Response
        if ($resp) {
            $code = [int]$resp.StatusCode
            $body = ""
            try {
                $sr = New-Object System.IO.StreamReader($resp.GetResponseStream())
                $body = $sr.ReadToEnd()
            } catch { }
            $loc = $null
            try { $loc = $resp.Headers["Location"] } catch { }
            return [pscustomobject]@{ Status = $code; Body = $body; Error = $null; Location = $loc }
        }
        return [pscustomobject]@{ Status = $null; Body = $null; Error = $_.Exception.Message }
    }
}

# ---------------------------------------------------------------- resolve key
Write-Step "Resolving IndexNow key"

if (-not $Key) {
    if (-not $KeyFile) {
        $publicDir = Join-Path $RepoRoot "public"
        if (-not (Test-Path $publicDir)) { Write-Err "public/ directory not found at $publicDir"; exit 5 }
        $candidate = Get-ChildItem -Path $publicDir -Filter "*.txt" -File |
                     Where-Object { $_.BaseName -match '^[0-9a-fA-F]{32}$' } |
                     Select-Object -First 1
        if (-not $candidate) { Write-Err "No 32-hex key file found in public/. Pass -KeyFile or -Key."; exit 5 }
        $KeyFile = $candidate.FullName
    }
    if (-not (Test-Path $KeyFile)) { Write-Err "Key file not found: $KeyFile"; exit 5 }

    $fileKey = (Get-Content -Path $KeyFile -Raw).Trim()
    $nameKey = [System.IO.Path]::GetFileNameWithoutExtension($KeyFile)
    if ($fileKey -ne $nameKey) {
        Write-Err "Key file content does not match its filename. Filename='$nameKey' Content='$fileKey'"
        exit 5
    }
    $Key = $fileKey
    Write-Ok "Key file: $KeyFile"
}

if ($Key -notmatch '^[0-9a-fA-F]{32}$') { Write-Err "Key is not 32 hex chars: '$Key'"; exit 5 }
Write-Ok "Key: $Key"

$keyLocation = "https://$HostName/$Key.txt"
Write-Ok "keyLocation: $keyLocation"

# ------------------------------------------- pre-check: production key file
Write-Step "Pre-check 1/2: production key file reachability (hard requirement)"
$keyCheck = Get-HttpStatus -Uri $keyLocation -Method Get

if ($null -eq $keyCheck.Status) {
    Write-Err "Could not reach $keyLocation : $($keyCheck.Error)"
    Write-Err "Aborting. No submission was made."
    exit 2
}
if ($keyCheck.Status -ne 200) {
    Write-Err "$keyLocation returned HTTP $($keyCheck.Status) (expected 200)."
    if ($keyCheck.Location) { Write-Err "Redirect Location: $($keyCheck.Location)" }
    Write-Err "Aborting. The key file must be deployed and publicly reachable before submitting."
    Write-Err "See INDEXNOW-SOP.md section 6 (post-deploy acceptance). No submission was made."
    exit 2
}
$remoteKey = ($keyCheck.Body -as [string]).Trim()
if ($remoteKey -ne $Key) {
    Write-Err "Production key file body does not match the key."
    Write-Err "  expected: $Key"
    Write-Err "  actual  : $remoteKey"
    Write-Err "Aborting. No submission was made."
    exit 2
}
Write-Ok "Production key file is HTTP 200 and body matches the key."

# ------------------------------------------------------------ collect urls
Write-Step "Collecting target URLs"
$targetUrls = New-Object System.Collections.Generic.List[string]

if ($Urls) { foreach ($u in $Urls) { if ($u -and $u.Trim()) { $targetUrls.Add($u.Trim()) } } }

if ($UrlsFile) {
    if (-not (Test-Path $UrlsFile)) { Write-Err "UrlsFile not found: $UrlsFile"; exit 5 }
    foreach ($line in (Get-Content -Path $UrlsFile -Encoding UTF8)) {
        $t = $line.Trim()
        if ($t -and -not $t.StartsWith("#")) { $targetUrls.Add($t) }
    }
}

if ($targetUrls.Count -eq 0) {
    Write-Err "No URLs supplied. Use -Urls or -UrlsFile."
    exit 5
}

$badHost = @()
foreach ($u in $targetUrls) {
    if ($u -notmatch '^https://') { $badHost += $u; continue }
    try { $h = ([Uri]$u).Host } catch { $badHost += $u; continue }
    if ($h -ne $HostName) { $badHost += $u }
}
if ($badHost.Count -gt 0) {
    Write-Err "These URLs do not use host '$HostName' (apex redirects with 308, so keep www):"
    $badHost | ForEach-Object { Write-Err "  $_" }
    exit 5
}
Write-Ok "$($targetUrls.Count) URL(s) to submit."

# ------------------------------------------- pre-check: target URL status
Write-Step "Pre-check 2/2: target URL reachability"
$notOk = @()
foreach ($u in $targetUrls) {
    $c = Get-HttpStatus -Uri $u -Method Get
    if ($c.Status -eq 200) {
        Write-Ok "200  $u"
    } else {
        Write-Warn2 "$($c.Status)  $u"
        $notOk += $u
    }
}

if ($notOk.Count -gt 0) {
    if (-not $Force) {
        Write-Err "$($notOk.Count) URL(s) did not return HTTP 200. Aborting; no submission was made."
        Write-Err "Deploy the missing pages first, or re-run with -Force to submit the list as-is."
        exit 3
    }
    Write-Warn2 "-Force set: submitting the list as-is, including the non-200 URL(s) above."
}

# ------------------------------------------------------------- build payload
$payload = @{
    host        = $HostName
    key         = $Key
    keyLocation = $keyLocation
    urlList     = $targetUrls.ToArray()
}
$json = $payload | ConvertTo-Json -Depth 5

Write-Step "Payload"
Write-Host $json

if ($DryRun) {
    Write-Step "-DryRun set: no request sent."
    exit 0
}

# JSON must be written without a BOM; a BOM can make the API return 400.
$bodyFile = Join-Path $env:TEMP ("indexnow-submit-{0}.json" -f $PID)
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($bodyFile, $json, $utf8NoBom)

# ---------------------------------------------------------------------- POST
Write-Step "POST $ApiEndpoint"
try {
    $r = Invoke-WebRequest -Uri $ApiEndpoint -Method Post `
         -ContentType "application/json; charset=utf-8" `
         -InFile $bodyFile -UseBasicParsing -TimeoutSec $TimeoutSec
    $status = [int]$r.StatusCode
    Write-Host "HTTP_STATUS=$status" -ForegroundColor Green
    Write-Host "RESPONSE_BODY=[$($r.Content)]"
    $ref = $null
    try { $ref = $r.Headers["X-MSEdge-Ref"] } catch { }
    if ($ref) { Write-Host "X-MSEdge-Ref=$ref" }
} catch {
    $resp = $_.Exception.Response
    if ($resp) {
        $status = [int]$resp.StatusCode
        $body = ""
        try { $sr = New-Object System.IO.StreamReader($resp.GetResponseStream()); $body = $sr.ReadToEnd() } catch { }
        Write-Host "HTTP_STATUS=$status" -ForegroundColor Red
        Write-Host "RESPONSE_BODY=[$body]"
    } else {
        Write-Err "Request failed before receiving a response: $($_.Exception.Message)"
        Write-Err "No HTTP status code was returned."
        exit 4
    }
} finally {
    Remove-Item -Path $bodyFile -Force -ErrorAction SilentlyContinue
}

Write-Step "Result"
if ($status -eq 200) {
    Write-Ok "HTTP 200: URL(s) submitted and accepted by IndexNow."
    Write-Host "  Reminder: acceptance is NOT indexing. Confirm in Bing Webmaster Tools." -ForegroundColor Yellow
    exit 0
}
elseif ($status -eq 202) {
    Write-Ok "HTTP 202: request accepted into the processing queue."
    Write-Host "  Reminder: 202 means queued, NOT indexed. Confirm in Bing Webmaster Tools." -ForegroundColor Yellow
    exit 0
}
elseif ($status -eq 403) {
    Write-Err "HTTP 403: key validation failed (key file unreachable or content mismatch)."
    exit 4
}
elseif ($status -eq 422) {
    Write-Err "HTTP 422: URL(s) not belonging to host '$HostName', or malformed."
    exit 4
}
elseif ($status -eq 429) {
    Write-Err "HTTP 429: too many requests. Do not retry in a loop; wait until the next working day."
    exit 4
}
else {
    Write-Err "HTTP $status : unexpected response. See INDEXNOW-SOP.md section 3 for status meanings."
    exit 4
}
