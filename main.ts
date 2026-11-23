// News-image entry, version 2 (Node 22, standard library only).
// The image ships beside this file as entry.png; this program places a
// copy of it where the grader looks: /output/entry.png. When I run it
// myself, MAKEFUN_OUTPUT_DIR takes the place of /output.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const targetDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
mkdirSync(targetDir, { recursive: true });
// A plain byte copy: the image is never re-encoded, so both grader runs
// write exactly the file the repository holds.
copyFileSync(source, join(targetDir, 'entry.png'));
