import { cpSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const WIDTHS = [320, 390];
const POSTS = ["snowmobile", "goosestrike", "theorems"];
const FLAGS = ["--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files", "--virtual-time-budget=120000", "--dump-dom"];

function stage(built: string, copy: string, driver: string): void {
  rmSync(copy, { recursive: true, force: true });
  cpSync(built, copy, { recursive: true });
  for (const slug of readdirSync(`${copy}/essays`)) {
    const file = `${copy}/essays/${slug}/index.html`;
    const page = readFileSync(file, "utf8").split('="/').join('="../../');
    writeFileSync(file, page.replace("</body>", `<script>${driver}</script></body>`));
  }
  writeFileSync(`${copy}/kit/kit.js`, readFileSync(`${copy}/kit/kit.js`, "utf8").split("`/kit/").join("`./"));
  writeFileSync(`${copy}/style.css`, readFileSync(`${copy}/style.css`, "utf8").split("url(/").join("url("));
}

function problems(copy: string, post: string, width: number): string[] {
  const profile = `${copy}-profile`;
  const run = Bun.spawnSync([process.env["CHROMIUM"] ?? "chromium", ...FLAGS, `--user-data-dir=${profile}`, `file://${copy}/essays/${post}/index.html?w=${width}`]);
  rmSync(profile, { recursive: true, force: true });
  const found = /<pre id="phone-result">(.*?)<\/pre>/s.exec(run.stdout.toString());
  if (!found) return [`${post} at ${width}px: the check did not finish`];
  const lines: unknown = JSON.parse((found[1] ?? "[]").split("&quot;").join('"'));
  const out: string[] = [];
  if (Array.isArray(lines)) for (const line of lines) out.push(String(line));
  return out;
}

async function main(): Promise<void> {
  const built = Bun.argv[2] ?? "dist";
  const bundle = await Bun.build({ entrypoints: ["src/kit/phone-check.ts"], target: "browser", format: "iife" });
  const driver = (await bundle.outputs[0]?.text()) ?? "";
  const all: string[] = [];
  for (const width of WIDTHS) {
    const copy = `${built}-phone-${width}`;
    stage(built, copy, driver);
    for (const post of POSTS) all.push(...problems(copy, post, width));
    rmSync(copy, { recursive: true, force: true });
  }
  for (const line of all) console.log(line);
  console.log(all.length === 0 ? "OK" : `${all.length} problem(s)`);
}

await main();
