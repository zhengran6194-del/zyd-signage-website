// Throwaway: search the whole repo for bare basename mentions of given names.
// Usage: node temp/find-basename-refs.mjs name1 name2 ...
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const names = process.argv.slice(2);
const SKIP_DIRS = new Set([
  "node_modules", ".next", ".git", "zyd-static-backup", "temp",
  "Downloads", "audit", "baseline", "out", "dist",
]);
const TEXT_EXT = new Set([
  ".tsx", ".ts", ".jsx", ".js", ".mjs", ".cjs", ".css", ".scss",
  ".md", ".mdx", ".json", ".xml", ".html", ".txt", ".yml", ".yaml",
]);

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (SKIP_DIRS.has(e.name)) continue;
      walk(path.join(dir, e.name), out);
    } else if (TEXT_EXT.has(path.extname(e.name).toLowerCase())) {
      out.push(path.join(dir, e.name));
    }
  }
  return out;
}

const files = walk(ROOT);
console.log(`scanned text files: ${files.length}`);

for (const n of names) {
  const hits = [];
  for (const f of files) {
    const text = fs.readFileSync(f, "utf8");
    if (text.includes(n)) {
      const lines = text.split(/\r?\n/);
      lines.forEach((l, i) => {
        if (l.includes(n)) hits.push(`${path.relative(ROOT, f)}:${i + 1}: ${l.trim().slice(0, 160)}`);
      });
    }
  }
  console.log(`\n=== ${n} === (${hits.length} hits)`);
  for (const h of hits.slice(0, 12)) console.log("   " + h);
}
