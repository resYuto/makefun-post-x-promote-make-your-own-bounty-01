// Copies POST.json from the repository to the output directory; the grader reads the post itself.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repo = process.env.MAKEFUN_BOT_DIR ?? ".";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const post = join(repo, "POST.json");

// Fail loudly on a malformed POST.json instead of handing the grader an invalid entry.
const { url } = JSON.parse(readFileSync(post, "utf8"));
if (!/^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/\w+\/status\/\d+$/.test(url)) {
  throw new Error(`POST.json url is not an X post address: ${url}`);
}

mkdirSync(out, { recursive: true });
copyFileSync(post, join(out, "POST.json"));
