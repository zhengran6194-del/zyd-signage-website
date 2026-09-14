// Throwaway: report every "assets/images/<name>" mention outside src/ so that
// archiving files cannot silently break non-src references.
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SKIP = new Set(["node_modules", ".next", ".git", "temp", "Downloads", "audit", "baseline", "out", "dist"]);

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (SKIP.has(e.name)) continue;
      walk(path.join(dir, e.name), out);
    } else {
      out.push(path.join(dir, e.name));
    }
  }
  return out;
}

const RE = /assets\/images\/([^"'\s)\\,;>`]+)/g;
const byFile = [];

for (const f of walk(ROOT)) {
  const rel = path.relative(ROOT, f).split(path.sep).join("/");
  if (rel.startsWith("src/")) continue;                 // already handled
  if (rel.startsWith("public/assets/images/")) continue; // the images themselves
  if (!/\.(ts|tsx|js|jsx|mjs|cjs|json|md|mdx|css|html|xml|txt|yml|yaml)$/i.test(rel)) continue;

  const text = fs.readFileSync(f, "utf8");
  const names = new Set();
  let m;
  while ((m = RE.exec(text)) !== null) names.add(m[1]);
  if (names.size) byFile.push({ file: rel, names: [...names] });
}

console.log("files OUTSIDE src/ mentioning assets/images/<name>:");
for (const b of byFile) console.log(`  ${b.file}\n     ${b.names.join(", ")}`);
if (!byFile.length) console.log("  (none)");
