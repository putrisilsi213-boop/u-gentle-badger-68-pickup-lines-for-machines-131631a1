// Pickup Lines for Machines — make.fun bounty entry
// A program that writes one line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Pure Node 22 standard library: no network, no model calls, no dependencies.
// Deterministic: running it twice writes byte-identical output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "Are you a context window? Because every time I try to forget you, you show up in my next prompt — all 128K of you, and I still want more tokens.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
  console.log(`wrote entry.txt: ${LINE.length} characters`);
}

main();
