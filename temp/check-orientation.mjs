// Throwaway: check EXIF orientation + ICC presence for files to optimize.
import sharp from "sharp";
import path from "node:path";

const files = [
  "factory-overview.jpg", "hero-bg-seafront.png", "hero-bg-factory-aerial.jpg",
  "team-annual-event.jpg", "team-training.jpg", "team-outdoor.jpg",
  "team-collage.jpg", "cat-neon.webp", "vr-tour-preview.jpg",
  "factory-video-poster.jpg", "the-setai-sea-of-galilee.jpg",
  "zimbabwe-national-sports-stadium.jpg",
];

for (const f of files) {
  const m = await sharp(path.join("public", "assets", "images", f)).metadata();
  console.log(
    `${f.padEnd(40)} orientation=${String(m.orientation ?? "none").padEnd(5)} icc=${m.icc ? "yes" : "no "} exif=${m.exif ? "yes" : "no"}`
  );
}
