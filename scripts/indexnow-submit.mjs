#!/usr/bin/env node
/**
 * Submit URLs to IndexNow for the zydsign.com site.
 *
 * Reads the IndexNow key from the local key file in public/, verifies that the
 * same key file is publicly reachable in production (must return HTTP 200 with
 * the key as body), optionally verifies each target URL returns HTTP 200, then
 * POSTs the payload to https://api.indexnow.org/indexnow and prints the REAL
 * HTTP status code and response body.
 *
 * Safety rules:
 *   * Fails hard (exit 2) if the production key file is not HTTP 200 + correct body.
 *   * Fails hard (exit 3) if any target URL is not HTTP 200, unless --force is used.
 *   * Never fabricates a result: if the request cannot be made, it reports the error.
 *
 * Options:
 *   --urls <url[,url...]>  One or more absolute URLs to submit. May be repeated.
 *                          Must use the same host as --host.
 *   --urls-file <path>     Path to a text file with one URL per line. Blank lines
 *                          and lines starting with '#' are ignored.
 *   --host <name>          IndexNow host. Default: www.zydsign.com (the apex
 *                          domain 308-redirects).
 *   --key <key>            Override the key. Normally omitted so the key is read
 *                          from the key file.
 *   --key-file <path>      Path to the local IndexNow key file. Default:
 *                          auto-discovered from public/.
 *   --force                Skip the per-URL HTTP 200 pre-check and submit the
 *                          given list as-is. The production key-file check is
 *                          NEVER skipped.
 *   --dry-run              Run all pre-checks and print the payload, but do not POST.
 *   --timeout <seconds>    Per-request timeout. Default: 60.
 *
 * Examples:
 *   node scripts/indexnow-submit.mjs --urls https://www.zydsign.com/guides/front-lit-vs-halo-lit-channel-letters
 *   node scripts/indexnow-submit.mjs --urls-file scripts/indexnow-urls.txt
 *
 * Exit codes:
 *   0 = submission accepted (HTTP 200 or 202)
 *   2 = production key-file pre-check failed (do NOT retry until deployed)
 *   3 = one or more target URLs were not HTTP 200
 *   4 = IndexNow API returned a non-2xx status
 *   5 = input error (no URLs, bad key, host mismatch)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Node negotiates TLS 1.2+ by default, so the old ServicePointManager pin is unnecessary.
const API_ENDPOINT = "https://api.indexnow.org/indexnow";
const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_HOST = "www.zydsign.com";
const DEFAULT_TIMEOUT_SEC = 60;
const KEY_PATTERN = /^[0-9a-fA-F]{32}$/;

// Output mirrors the original PowerShell host stream: everything goes to stdout so
// a redirected run captures the status codes for the SOP record table. Colours are
// emitted only on a TTY, so piped output stays plain text.
const useColor = Boolean(process.stdout.isTTY) && !process.env.NO_COLOR;
const paint = (code, text) => (useColor ? `\u001b[${code}m${text}\u001b[0m` : text);

const step = (m) => console.log(paint(36, `==> ${m}`));
const ok = (m) => console.log(paint(32, `  OK   ${m}`));
const warn = (m) => console.log(paint(33, `  WARN ${m}`));
const fail = (m) => console.log(paint(31, `  FAIL ${m}`));

function usage() {
  console.log("Usage: node scripts/indexnow-submit.mjs [options]");
  console.log("");
  console.log("  --urls <url[,url...]>   URLs to submit (repeatable)");
  console.log("  --urls-file <path>      File with one URL per line ('#' comments ignored)");
  console.log(`  --host <name>           IndexNow host (default: ${DEFAULT_HOST})`);
  console.log("  --key <key>             Override the key instead of reading the key file");
  console.log("  --key-file <path>       Local key file (default: auto-discovered from public/)");
  console.log("  --force                 Skip the per-URL HTTP 200 pre-check");
  console.log("  --dry-run               Pre-checks and payload only; no POST");
  console.log(`  --timeout <seconds>     Per-request timeout (default: ${DEFAULT_TIMEOUT_SEC})`);
  console.log("  --help                  Show this help");
}

function parseArgs(argv) {
  const opts = { urls: [], force: false, dryRun: false, timeoutSec: DEFAULT_TIMEOUT_SEC, hostName: DEFAULT_HOST };
  let i = 0;
  // Consumes the token after a flag, so a flag value is never mistaken for a flag.
  const next = (flag) => {
    const value = argv[++i];
    if (value === undefined) {
      fail(`Missing value for ${flag}`);
      process.exit(5);
    }
    return value;
  };

  for (; i < argv.length; i++) {
    const arg = argv[i];
    switch (arg) {
      case "--urls":
        for (const u of next(arg).split(",")) {
          if (u.trim()) opts.urls.push(u.trim());
        }
        break;
      case "--urls-file":
        opts.urlsFile = next(arg);
        break;
      case "--host":
        opts.hostName = next(arg);
        break;
      case "--key":
        opts.key = next(arg);
        break;
      case "--key-file":
        opts.keyFile = next(arg);
        break;
      case "--force":
        opts.force = true;
        break;
      case "--dry-run":
        opts.dryRun = true;
        break;
      case "--timeout": {
        const raw = next(arg);
        const parsed = Number(raw);
        if (!Number.isFinite(parsed) || parsed <= 0) {
          fail(`--timeout must be a positive number, got '${raw}'`);
          process.exit(5);
        }
        opts.timeoutSec = parsed;
        break;
      }
      case "--help":
      case "-h":
        usage();
        process.exit(0);
        break;
      default:
        fail(`Unknown option: ${arg}`);
        usage();
        process.exit(5);
    }
  }

  return opts;
}

/**
 * fetch() collapses every transport failure into a bare "fetch failed", which is
 * useless for diagnosing DNS/TLS/timeout problems. The real reason lives on `cause`.
 */
function describeError(err) {
  const message = err?.message ?? String(err);
  const cause = err?.cause?.message ?? err?.cause?.code;
  return cause ? `${message}: ${cause}` : message;
}

/**
 * Returns { status, body, error }. A transport failure yields status = null so the
 * caller can distinguish "got a non-200" from "never got a response".
 */
async function getHttpStatus(uri, timeoutSec, method = "GET") {
  try {
    const res = await fetch(uri, {
      method,
      redirect: "follow",
      signal: AbortSignal.timeout(timeoutSec * 1000),
    });
    return {
      status: res.status,
      body: await res.text(),
      error: null,
      location: res.headers.get("location"),
      finalUrl: res.url,
    };
  } catch (err) {
    return { status: null, body: null, error: describeError(err) };
  }
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));

  // ------------------------------------------------------------- resolve key
  step("Resolving IndexNow key");

  let key = opts.key;
  if (!key) {
    let keyFilePath = opts.keyFile;
    if (!keyFilePath) {
      const publicDir = path.join(REPO_ROOT, "public");
      if (!fs.existsSync(publicDir)) {
        fail(`public/ directory not found at ${publicDir}`);
        process.exit(5);
      }
      // Sorted so the pick is deterministic; matches Get-ChildItem's name order.
      const candidate = fs
        .readdirSync(publicDir)
        .filter((name) => name.toLowerCase().endsWith(".txt"))
        .map((name) => path.join(publicDir, name))
        .filter((full) => KEY_PATTERN.test(path.basename(full, ".txt")))
        .sort()[0];
      if (!candidate) {
        fail("No 32-hex key file found in public/. Pass --key-file or --key.");
        process.exit(5);
      }
      keyFilePath = candidate;
    }
    if (!fs.existsSync(keyFilePath)) {
      fail(`Key file not found: ${keyFilePath}`);
      process.exit(5);
    }

    const fileKey = fs.readFileSync(keyFilePath, "utf8").trim();
    const nameKey = path.basename(keyFilePath, ".txt");
    if (fileKey !== nameKey) {
      fail(`Key file content does not match its filename. Filename='${nameKey}' Content='${fileKey}'`);
      process.exit(5);
    }
    key = fileKey;
    ok(`Key file: ${keyFilePath}`);
  }

  if (!KEY_PATTERN.test(key)) {
    fail(`Key is not 32 hex chars: '${key}'`);
    process.exit(5);
  }
  ok(`Key: ${key}`);

  const keyLocation = `https://${opts.hostName}/${key}.txt`;
  ok(`keyLocation: ${keyLocation}`);

  // ----------------------------------------- pre-check: production key file
  step("Pre-check 1/2: production key file reachability (hard requirement)");
  const keyCheck = await getHttpStatus(keyLocation, opts.timeoutSec);

  if (keyCheck.status === null) {
    fail(`Could not reach ${keyLocation} : ${keyCheck.error}`);
    fail("Aborting. No submission was made.");
    process.exit(2);
  }
  if (keyCheck.status !== 200) {
    fail(`${keyLocation} returned HTTP ${keyCheck.status} (expected 200).`);
    if (keyCheck.location) fail(`Redirect Location: ${keyCheck.location}`);
    if (keyCheck.finalUrl && keyCheck.finalUrl !== keyLocation) {
      fail(`Final URL after redirects: ${keyCheck.finalUrl}`);
    }
    fail("Aborting. The key file must be deployed and publicly reachable before submitting.");
    fail("See INDEXNOW-SOP.md section 6 (post-deploy acceptance). No submission was made.");
    process.exit(2);
  }
  const remoteKey = String(keyCheck.body ?? "").trim();
  if (remoteKey !== key) {
    fail("Production key file body does not match the key.");
    fail(`  expected: ${key}`);
    fail(`  actual  : ${remoteKey}`);
    fail("Aborting. No submission was made.");
    process.exit(2);
  }
  ok("Production key file is HTTP 200 and body matches the key.");

  // ---------------------------------------------------------- collect urls
  step("Collecting target URLs");
  const targetUrls = [...opts.urls];

  if (opts.urlsFile) {
    if (!fs.existsSync(opts.urlsFile)) {
      fail(`UrlsFile not found: ${opts.urlsFile}`);
      process.exit(5);
    }
    const lines = fs.readFileSync(opts.urlsFile, "utf8").split(/\r?\n/);
    for (const line of lines) {
      const t = line.trim();
      if (t && !t.startsWith("#")) targetUrls.push(t);
    }
  }

  if (targetUrls.length === 0) {
    fail("No URLs supplied. Use --urls or --urls-file.");
    process.exit(5);
  }

  const badHost = targetUrls.filter((u) => {
    if (!/^https:\/\//i.test(u)) return true;
    try {
      return new URL(u).hostname !== opts.hostName;
    } catch {
      return true;
    }
  });
  if (badHost.length > 0) {
    fail(`These URLs do not use host '${opts.hostName}' (apex redirects with 308, so keep www):`);
    for (const u of badHost) fail(`  ${u}`);
    process.exit(5);
  }
  ok(`${targetUrls.length} URL(s) to submit.`);

  // ----------------------------------------- pre-check: target URL status
  step("Pre-check 2/2: target URL reachability");
  const notOk = [];
  for (const u of targetUrls) {
    const c = await getHttpStatus(u, opts.timeoutSec);
    if (c.status === 200) {
      ok(`200  ${u}`);
    } else {
      warn(`${c.status}  ${u}`);
      notOk.push(u);
    }
  }

  if (notOk.length > 0) {
    if (!opts.force) {
      fail(`${notOk.length} URL(s) did not return HTTP 200. Aborting; no submission was made.`);
      fail("Deploy the missing pages first, or re-run with --force to submit the list as-is.");
      process.exit(3);
    }
    warn("--force set: submitting the list as-is, including the non-200 URL(s) above.");
  }

  // ----------------------------------------------------------- build payload
  const payload = {
    host: opts.hostName,
    key,
    keyLocation,
    urlList: targetUrls,
  };
  const json = JSON.stringify(payload, null, 4);

  step("Payload");
  console.log(json);

  if (opts.dryRun) {
    step("--dry-run set: no request sent.");
    process.exit(0);
  }

  // -------------------------------------------------------------------- POST
  // The JSON body is sent as a JS string, which fetch encodes as UTF-8 with no
  // BOM -- the old temp-file dance existed only to control the BOM.
  step(`POST ${API_ENDPOINT}`);
  let status;
  try {
    const res = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: json,
      redirect: "follow",
      signal: AbortSignal.timeout(opts.timeoutSec * 1000),
    });
    status = res.status;
    console.log(paint(32, `HTTP_STATUS=${status}`));
    console.log(`RESPONSE_BODY=[${await res.text()}]`);
    const ref = res.headers.get("x-msedge-ref");
    if (ref) console.log(`X-MSEdge-Ref=${ref}`);
  } catch (err) {
    fail(`Request failed before receiving a response: ${describeError(err)}`);
    fail("No HTTP status code was returned.");
    process.exit(4);
  }

  step("Result");
  if (status === 200) {
    ok("HTTP 200: URL(s) submitted and accepted by IndexNow.");
    console.log(paint(33, "  Reminder: acceptance is NOT indexing. Confirm in Bing Webmaster Tools."));
    process.exit(0);
  } else if (status === 202) {
    ok("HTTP 202: request accepted into the processing queue.");
    console.log(paint(33, "  Reminder: 202 means queued, NOT indexed. Confirm in Bing Webmaster Tools."));
    process.exit(0);
  } else if (status === 403) {
    fail("HTTP 403: key validation failed (key file unreachable or content mismatch).");
    process.exit(4);
  } else if (status === 422) {
    fail(`HTTP 422: URL(s) not belonging to host '${opts.hostName}', or malformed.`);
    process.exit(4);
  } else if (status === 429) {
    fail("HTTP 429: too many requests. Do not retry in a loop; wait until the next working day.");
    process.exit(4);
  } else {
    fail(`HTTP ${status} : unexpected response. See INDEXNOW-SOP.md section 3 for status meanings.`);
    process.exit(4);
  }
}

main().catch((err) => {
  fail(`Unexpected error: ${err?.stack ?? err}`);
  process.exit(1);
});
