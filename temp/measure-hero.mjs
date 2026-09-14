// Throwaway: measure encoded size for a grid of hero settings (nothing is written).
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

sharp.cache(false);

const DIR = "zyd-static-backup/pre-optimize-originals-20260914"; // true originals
const files = ["hero-bg-factory-aerial.jpg", "hero-bg-seafront.png"];
const grid = [
  [1920, 85, "4:4:4"], [1920, 85, "4:2:0"], [1920, 83, "4:2:0"], [1920, 82, "4:2:0"],
  [1920, 80, "4:2:0"], [1728, 85, "4:2:0"], [1728, 82, "4:2:0"], [1600, 82, "4:2:0"],
  [1600, 85, "4:2:0"], [1440, 85, "4:2:0"], [1440, 82, "4:2:0"],
];

for (const f of files) {
  const buf = fs.readFileSync(path.join(DIR, f));
  const meta = await sharp(buf).metadata();
  console.log(`\n=== ${f}  (source ${meta.width}x${meta.height}, chroma ${meta.chromaSubsampling || "n/a"}) ===`);
  for (const [edge, q, chroma] of grid) {
    const out = await sharp(buf)
      .resize({ width: edge, height: edge, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: q, mozjpeg: true, progressive: true, chromaSubsampling: chroma })
      .toBuffer();
    const m = await sharp(out).metadata();
    const mark = out.length <= 300 * 1024 ? "  <=300KB" : "";
    console.log(`  edge=${String(edge).padEnd(5)} q=${String(q).padEnd(3)} ${chroma}  ->  ${String(m.width)}x${m.height}  ${Math.round(out.length / 1024)}KB${mark}`);
  }
}
