import { cpSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { chromium } from "playwright-core";
import { browserPath } from "./browser";

function stage(built: string, copy: string): void {
  rmSync(copy, { recursive: true, force: true });
  cpSync(built, copy, { recursive: true });
  for (const slug of readdirSync(`${copy}/essays`)) {
    const file = `${copy}/essays/${slug}/index.html`;
    const page = readFileSync(file, "utf8").split('="/').join('="../../');
    writeFileSync(file, page);
  }
  writeFileSync(`${copy}/kit/kit.js`, readFileSync(`${copy}/kit/kit.js`, "utf8").split("`/kit/").join("`./"));
  writeFileSync(`${copy}/style.css`, readFileSync(`${copy}/style.css`, "utf8").split("url(/").join("url("));
}

async function main(): Promise<void> {
  const built = Bun.argv[2] ?? "dist";
  const copy = `${built}-press`;
  const bundle = await Bun.build({ entrypoints: ["src/kit/press-check.ts"], target: "browser", format: "iife" });
  stage(built, copy);
  const browser = await chromium.launch({ executablePath: browserPath(), args: ["--allow-file-access-from-files"] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`file://${copy}/essays/snowmobile/index.html`);
    await page.evaluate('document.querySelector("figure[data-kind=map]").scrollIntoView({ block: "center" })');
    await page.locator("figure[data-kind=map] [data-i]").first().waitFor();
    await page.evaluate("document.fonts.ready");
    await page.addScriptTag({ content: (await bundle.outputs[0]?.text()) ?? "" });
    const lines: unknown = JSON.parse((await page.locator("#press-result").textContent()) ?? "[]");
    const list = Array.isArray(lines) ? lines.join("; ") : "";
    console.log(list === "" ? "OK" : list);
  } finally {
    await browser.close();
    rmSync(copy, { recursive: true, force: true });
  }
}

await main();
