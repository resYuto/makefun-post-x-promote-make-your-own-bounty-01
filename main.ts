// Copies POST.json from the repository to the output directory; the grader reads the post itself.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repo = process.env.MAKEFUN_BOT_DIR ?? ".";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(out, { recursive: true });
copyFileSync(join(repo, "POST.json"), join(out, "POST.json"));
