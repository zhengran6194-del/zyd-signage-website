// Throwaway: report real format, alpha channel, and density for files to optimize.
import sharp from "sharp";
import path from "node:path";

const files = [
  "factory-overview.jpg",
  "hero-bg-seafront.png",
  "hero-bg-factory-aerial.jpg",
  "team-annual-event.jpg",
  "team-training.jpg",
  "team-outdoor.jpg",
  "team-collage.jpg",
  "cat-neon.webp",
  "vr-tour-preview.jpg",
  "factory-video-poster.jpg",
  "the-setai-sea-of-galilee.jpg",
  "zimbabwe-national-sports-stadium.jpg",
  "logo-correct.jpg",
  "hero-wayfinding.png",
];

for (const f of files) {
  const p = path.join("public", "assets", "images", f);
  const m = await sharp(p).metadata();
  console.log(
    `${f.padEnd(42)} decl=${path.extname(f).slice(1).padEnd(4)} real=${String(m.format).padEnd(4)} ` +
    `${m.width}x${m.height}  alpha=${m.hasAlpha}  chromaSub=${m.chromaSubsampling}  ` +
    `space=${m.space}  depth=${m.depth}`
  );
}
