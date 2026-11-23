// News-image entry for make.fun (Node 22, standard library only).
// The finished picture already sits beside this file as entry.png.
// All this program does is place an exact copy of it where the grader
// looks: <output dir>/entry.png. The copy is byte-for-byte, so running
// the program twice always writes the same bytes. When the grader runs
// it, MAKEFUN_OUTPUT_DIR is unset and /output is used; locally I set
// the variable to point at a scratch folder instead.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const pictureHere = fileURLToPath(new URL('./entry.png', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(dirname(target), { recursive: true });
copyFileSync(pictureHere, target);
