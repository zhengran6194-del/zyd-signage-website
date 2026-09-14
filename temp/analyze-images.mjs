// Analyzer v2: boundary-aware reference detection.
// Catches both "/assets/images/foo.webp" and bare "foo.webp" used in data arrays
// that are resolved at render time via `/assets/images/${x}`.
// Usage: node temp/analyze-images.mjs
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = process.cwd();
const IMG_DIR = path.join(ROOT, "public", "assets", "images");
const SRC_DIR = path.join(ROOT, "src");

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const disk = walk(IMG_DIR).map((p) => {
  const buf = fs.readFileSync(p);
  return {
    rel: path.relative(ROOT, p).split(path.sep).join("/"),
    base: path.basename(p),
    bytes: buf.length,
    md5: crypto.createHash("md5").update(buf).digest("hex"),
  };
});
const diskByName = new Map(disk.map((d) => [d.base, d]));

// one text blob of all src files, plus per-file index for reporting
const srcFiles = walk(SRC_DIR);
const blob = srcFiles.map((f) => fs.readFileSync(f, "utf8")).join("\n");

function esc(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// boundary-aware: not preceded by word char or hyphen (avoids cat-metal.webp matching metal.webp)
function isReferenced(base) {
  const re = new RegExp(`(?<![\\w.-])${esc(base)}(?![\\w])`);
  return re.test(blob);
}

function findSources(base) {
  const re = new RegExp(`(?<![\\w.-])${esc(base)}(?![\\w])`);
  const hits = [];
  for (const f of srcFiles) {
    const text = fs.readFileSync(f, "utf8");
    if (re.test(text)) hits.push(path.relative(ROOT, f).split(path.sep).join("/"));
  }
  return hits;
}

// every image-like token mentioned in src/
const tokenRe = /(?<![\w.-])([A-Za-z0-9][A-Za-z0-9._-]*\.(?:png|jpe?g|webp|svg|avif|gif))(?![\w])/g;
const tokens = new Set();
let m;
while ((m = tokenRe.exec(blob)) !== null) tokens.add(m[1]);

const referenced = [];
const orphans = [];
for (const d of disk) {
  if (isReferenced(d.base)) referenced.push({ ...d, sources: findSources(d.base) });
  else orphans.push(d);
}

// tokens mentioned in src/ with no matching file on disk
const missingTokens = [...tokens].filter((t) => !diskByName.has(t)).sort();

const mb = (b) => Math.round((b / 1048576) * 100) / 100;

const byMd5 = new Map();
for (const o of orphans) {
  if (!byMd5.has(o.md5)) byMd5.set(o.md5, []);
  byMd5.get(o.md5).push(o.base);
}
const dupGroups = [...byMd5.entries()].filter(([, v]) => v.length > 1);

const report = {
  totals: {
    diskFiles: disk.length,
    diskMB: mb(disk.reduce((s, d) => s + d.bytes, 0)),
    referencedFiles: referenced.length,
    referencedMB: mb(referenced.reduce((s, d) => s + d.bytes, 0)),
    orphanFiles: orphans.length,
    orphanMB: mb(orphans.reduce((s, d) => s + d.bytes, 0)),
    srcImageTokens: tokens.size,
    tokensMissingOnDisk: missingTokens.length,
  },
  tokensMissingOnDisk: missingTokens,
  orphanDigestGroups: dupGroups.map(([md5, names]) => ({ md5, count: names.length, names })),
  orphans: orphans.sort((a, b) => b.bytes - a.bytes).map((o) => ({ base: o.base, mb: mb(o.bytes), md5: o.md5.slice(0, 8) })),
  referenced: referenced.sort((a, b) => b.bytes - a.bytes).map((r) => ({ base: r.base, mb: mb(r.bytes), sources: r.sources })),
};

fs.writeFileSync(path.join(ROOT, "temp", "image-report.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report.totals, null, 2));
console.log("\n-- referenced (sorted by size) --");
report.referenced.forEach((r) => console.log(`${String(r.mb).padStart(8)} MB  ${r.base}`));
console.log("\n-- tokens referenced in src but MISSING on disk --");
console.log(missingTokens.length ? missingTokens.join("\n") : "(none)");
