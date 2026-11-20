// make.fun entry — "Sum up 19 November's world news in one image".
// The image (entry.png, 1024x1024) is committed next to this file.
// The grader runs with no network, so this program only copies bytes
// into the output directory: deterministic, no dependencies, Node 22
// standard library only. It writes exactly one file,
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR/entry.png locally).

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const srcPath = new URL('./entry.png', import.meta.url);

// Perbaikan #2 — validasi SEBELUM copy: sumber harus ada dan tidak kosong.
let preCopySize;
try {
  preCopySize = statSync(srcPath).size;
} catch {
  throw new Error('entry.png not found next to main.ts — cannot copy');
}
if (preCopySize === 0) {
  throw new Error('entry.png is empty (0 bytes) — cannot copy');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.png');
copyFileSync(srcPath, outPath);

// Perbaikan #1 — verifikasi integritas sesudah copy: ukuran + isi byte
// output harus sama persis dengan sumber; bila beda, gagal keras.
const srcStat = statSync(srcPath);
const outStat = statSync(outPath);
if (srcStat.size !== outStat.size) {
  throw new Error(`integrity check failed: size mismatch (source ${srcStat.size} bytes, output ${outStat.size} bytes)`);
}
if (!readFileSync(srcPath).equals(readFileSync(outPath))) {
  throw new Error('integrity check failed: output bytes differ from source entry.png');
}

console.log(`copied ${outStat.size} bytes to ${outPath}`);
