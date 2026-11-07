import { cpSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const FLAGS = ["--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files", "--window-size=1440,900", "--virtual-time-budget=60000", "--dump-dom"];

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

async function main(): Promise<void> {
  const built = Bun.argv[2] ?? "dist";
  const copy = `${built}-press`;
  const bundle = await Bun.build({ entrypoints: ["src/kit/press-check.ts"], target: "browser", format: "iife" });
  stage(built, copy, (await bundle.outputs[0]?.text()) ?? "");
  const profile = `${copy}-profile`;
  const run = Bun.spawnSync([process.env["CHROMIUM"] ?? "chromium", ...FLAGS, `--user-data-dir=${profile}`, `file://${copy}/essays/snowmobile/index.html`]);
  rmSync(profile, { recursive: true, force: true });
  rmSync(copy, { recursive: true, force: true });
  const found = /<pre id="press-result">(.*?)<\/pre>/s.exec(run.stdout.toString());
  const lines: unknown = JSON.parse((found?.[1] ?? '["the check did not finish"]').split("&quot;").join('"'));
  const list = Array.isArray(lines) ? lines.join("; ") : "";
  console.log(list === "" ? "OK" : list);
}

await main();
