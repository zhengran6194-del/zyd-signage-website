// Phase 1: move unreferenced images OUT of public/ into a local archive.
// Nothing is deleted; originals also remain recoverable from git history.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const IMG_DIR = path.join(ROOT, "public", "assets", "images");
const ARCHIVE = path.join(ROOT, "zyd-static-backup", "orphan-images-20260914");

const report = JSON.parse(fs.readFileSync(path.join(ROOT, "temp", "image-report.json"), "utf8"));

// safety: the images dir must be flat, otherwise basenames could collide
const subdirs = fs.readdirSync(IMG_DIR, { withFileTypes: true }).filter((e) => e.isDirectory());
if (subdirs.length) {
  console.error("ABORT: public/assets/images contains subdirectories:", subdirs.map((d) => d.name));
  process.exit(1);
}

fs.mkdirSync(ARCHIVE, { recursive: true });

const moved = [];
for (const o of report.orphans) {
  const from = path.join(IMG_DIR, o.base);
  const to = path.join(ARCHIVE, o.base);
  if (!fs.existsSync(from)) {
    console.error(`ABORT: expected orphan not found: ${from}`);
    process.exit(1);
  }
  if (fs.existsSync(to)) {
    console.error(`ABORT: archive target already exists: ${to}`);
    process.exit(1);
  }
  const bytes = fs.statSync(from).size;
  fs.renameSync(from, to);
  moved.push({ base: o.base, bytes, md5: o.md5 });
}

const mb = (b) => Math.round((b / 1048576) * 100) / 100;

// manifests
const csv = ["filename,mb,md5_prefix", ...moved.map((m) => `${m.base},${mb(m.bytes)},${m.md5}`)].join("\n");
fs.writeFileSync(path.join(ARCHIVE, "manifest.csv"), csv + "\n");

const md = [
  "# Archived orphan images (2026-09-14)",
  "",
  "These files were moved out of `public/assets/images/` because no source file in `src/`",
  "references them. They were **moved, not deleted**, and are also recoverable from git history.",
  "",
  `- Files: ${moved.length}`,
  `- Size: ${mb(moved.reduce((s, m) => s + m.bytes, 0))} MB`,
  "- Restore: move the file back into `public/assets/images/`",
  "",
  "| File | MB |",
  "|---|---|",
  ...moved.map((m) => `| ${m.base} | ${mb(m.bytes)} |`),
  "",
  "Note: `zyd-static-backup/` is gitignored, so this archive is local-only and never deployed.",
].join("\n");
fs.writeFileSync(path.join(ARCHIVE, "MANIFEST.md"), md + "\n");

console.log(`moved ${moved.length} files, ${mb(moved.reduce((s, m) => s + m.bytes, 0))} MB`);
console.log(`archive: ${path.relative(ROOT, ARCHIVE)}`);

const left = fs.readdirSync(IMG_DIR).length;
const leftBytes = fs.readdirSync(IMG_DIR).reduce((s, n) => s + fs.statSync(path.join(IMG_DIR, n)).size, 0);
console.log(`remaining in public/assets/images: ${left} files, ${mb(leftBytes)} MB`);
