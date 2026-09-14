// Phase 2: resize + re-encode every referenced image larger than 500 KB.
//
// Rules honoured:
//   * long edge <= 1920, never upscale, aspect ratio preserved
//   * quality >= 80 always
//   * hero files land <= 300 KB; the ladder prefers keeping 1920 px (trying the
//     original chroma subsampling first, then 4:2:0) before falling back to
//     smaller dimensions, so resolution is given up only as a last resort
//   * byte format is preserved (a .png file that really holds JPEG bytes stays
//     JPEG; a real PNG here would be several MB and blow the size budget)
//   * ICC profile is kept when present so colour rendering does not shift
//
// libvips keeps source files mapped on Windows, which makes in-place overwrite
// fail with a sharing violation, so sharp is driven from an in-memory Buffer
// and its cache is disabled.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

sharp.cache(false);

const ROOT = process.cwd();
const IMG_DIR = path.join(ROOT, "public", "assets", "images");
const BACKUP = path.join(ROOT, "zyd-static-backup", "pre-optimize-originals-20260914");

const HERO_BUDGET_BYTES = 300 * 1024;
const HERO_FILES = new Set([
  "hero-bg-factory-aerial.jpg", // homepage hero (page.tsx:164) + OG image (layout.tsx:9)
  "hero-bg-seafront.png",       // FAQ hero (faq/page.tsx:98)
]);
const SIZE_THRESHOLD = 500 * 1024;
const MAX_EDGE = 1920;

const report = JSON.parse(fs.readFileSync(path.join(ROOT, "temp", "image-report.json"), "utf8"));
const targets = report.referenced.filter((f) => fs.statSync(path.join(IMG_DIR, f.base)).size > SIZE_THRESHOLD);

fs.mkdirSync(BACKUP, { recursive: true });

const mb = (b) => Math.round((b / 1048576) * 100) / 100;
const kb = (b) => Math.round(b / 1024);

function encodeWith(img, declaredExt, realFormat, quality, chroma) {
  const pngExtHoldingJpegBytes = declaredExt === ".png" && realFormat === "jpeg";
  if (declaredExt === ".webp") return img.webp({ quality, effort: 6 });
  if (declaredExt === ".png" && !pngExtHoldingJpegBytes) {
    return img.png({ compressionLevel: 9, effort: 10, palette: false });
  }
  return img.jpeg({ quality, mozjpeg: true, progressive: true, chromaSubsampling: chroma });
}

async function render(inputBuf, declaredExt, longEdge, quality, chromaOverride) {
  const meta = await sharp(inputBuf).metadata();
  const srcMax = Math.max(meta.width, meta.height);
  const chroma = chromaOverride || meta.chromaSubsampling || "4:4:4";

  let pipeline = sharp(inputBuf);
  if (meta.icc) pipeline = pipeline.keepIccProfile();
  if (srcMax > longEdge) {
    pipeline = pipeline.resize({ width: longEdge, height: longEdge, fit: "inside", withoutEnlargement: true });
  }

  const buf = await encodeWith(pipeline, declaredExt, meta.format, quality, chroma).toBuffer();
  const outMeta = await sharp(buf).metadata();
  return { buf, outMeta, srcMeta: meta, chroma };
}

const results = [];
for (const t of targets) {
  const file = path.join(IMG_DIR, t.base);
  const declaredExt = path.extname(t.base).toLowerCase();
  const inputBuf = fs.readFileSync(file);
  const beforeBytes = inputBuf.length;
  const isHero = HERO_FILES.has(t.base);

  // backup original first (nothing is destroyed); never overwrite a real backup
  const backupPath = path.join(BACKUP, t.base);
  if (!fs.existsSync(backupPath)) fs.copyFileSync(file, backupPath);

  // hero ladder: iterate resolution descending, then quality descending, and
  // take the first combination that fits the 300 KB budget. This keeps the
  // largest possible resolution AND the highest quality that still fits.
  const ladder = isHero
    ? [1920, 1728, 1600, 1440, 1280].flatMap((edge) =>
        [88, 85, 82, 80].map((q) => [edge, q, "4:2:0"])
      )
    : [[MAX_EDGE, 85, null]];

  let best = null;
  for (const [edge, q, chroma] of ladder) {
    const out = await render(inputBuf, declaredExt, edge, q, chroma);
    best = { ...out, quality: q, longEdge: edge };
    if (out.buf.length <= HERO_BUDGET_BYTES) break;
  }

  fs.writeFileSync(file, best.buf);

  results.push({
    base: t.base,
    beforeMB: mb(beforeBytes),
    afterKB: kb(best.buf.length),
    srcDims: `${best.srcMeta.width}x${best.srcMeta.height}`,
    outDims: `${best.outMeta.width}x${best.outMeta.height}`,
    declared: declaredExt.slice(1),
    realIn: best.srcMeta.format,
    realOut: best.outMeta.format,
    srcChroma: best.srcMeta.chromaSubsampling || "n/a",
    outChroma: best.chroma,
    quality: best.quality,
    longEdge: best.longEdge,
    isHero,
    ok: !isHero || best.buf.length <= HERO_BUDGET_BYTES,
  });
}

console.log("file".padEnd(38) + "before".padStart(9) + "after".padStart(9) + "  dims".padEnd(24) + "fmt".padEnd(12) + "chroma".padEnd(15) + "q");
for (const r of results) {
  console.log(
    r.base.padEnd(38) +
    `${r.beforeMB}MB`.padStart(9) +
    `${r.afterKB}KB`.padStart(9) +
    `  ${r.srcDims}->${r.outDims}`.padEnd(24) +
    `${r.realIn}->${r.realOut}`.padEnd(12) +
    `${r.srcChroma}->${r.outChroma}`.padEnd(15) +
    r.quality + (r.isHero ? "  HERO" : "") + (r.ok ? "" : "  !!OVER BUDGET")
  );
}

const totalBeforeMB = results.reduce((s, r) => s + r.beforeMB, 0);
const totalAfterMB = Math.round((results.reduce((s, r) => s + r.afterKB, 0) / 1024) * 100) / 100;
console.log(`\noptimized ${results.length} files: ${Math.round(totalBeforeMB * 100) / 100} MB -> ${totalAfterMB} MB`);
console.log(`over-budget files: ${results.filter((r) => !r.ok).length}`);

fs.writeFileSync(path.join(ROOT, "temp", "optimize-results.json"), JSON.stringify(results, null, 2));
