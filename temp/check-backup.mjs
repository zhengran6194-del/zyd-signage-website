// Throwaway: does the legacy static backup depend on public/assets/images?
import fs from "node:fs";

const html = fs.readFileSync("zyd-static-backup/index.html", "utf8");
const names = [...new Set([...html.matchAll(/assets\/images\/([^"'\s)\\,;>`]+)/g)].map((m) => m[1]))];
const dir = "zyd-static-backup/assets/images";
const have = new Set(fs.readdirSync(dir));
const missing = names.filter((n) => !have.has(n));

console.log(`backup index.html references: ${names.length}`);
console.log(`present in backup's own dir : ${names.length - missing.length}`);
console.log(`MISSING from backup dir     : ${missing.length}`);
if (missing.length) console.log(missing.join("\n"));
