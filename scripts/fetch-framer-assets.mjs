// Downloads the live site's images from Framer's CDN into src/assets/framer/.
// Usage: node scripts/fetch-framer-assets.mjs
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';

const dir = new URL('../src/assets/framer/', import.meta.url);
const manifest = await readFile(new URL('manifest.ts', dir), 'utf8');
const files = [...manifest.matchAll(/file: '([^']+)'/g)].map((m) => m[1]);
await mkdir(dir, { recursive: true });

let failed = 0;
for (const file of files) {
  const target = new URL(file, dir);
  try {
    await access(target);
    console.log(`skip  ${file} (already downloaded)`);
    continue;
  } catch {}
  const res = await fetch(`https://framerusercontent.com/images/${file}`);
  if (!res.ok) {
    console.error(`FAIL  ${file}: HTTP ${res.status}`);
    failed++;
    continue;
  }
  await writeFile(target, Buffer.from(await res.arrayBuffer()));
  console.log(`saved ${file}`);
}
if (failed) {
  console.error(`${failed} of ${files.length} downloads failed`);
  process.exit(1);
}
console.log(`done: ${files.length} images in src/assets/framer/`);
