import { chromium, type Page } from "playwright-core";
import { mkdtempSync, copyFileSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { browserPath } from "./browser";

const ASSETS = ".claude/skills/vision/assets";
const CARDS = "{ id:'H-1', title:'One', body:'b', tests:'t', why:'w' }, { id:'H-2', title:'Two', body:'b', tests:'t', why:'w' },";
const BRIDGES: Record<string, string> = {
  none: "",
  rejecting: "window.lavish = { queuePrompt() {}, sendQueuedPrompts() { return Promise.reject(new Error('offline')); } };",
  working: "window.lavish = { queuePrompt() {}, sendQueuedPrompts() { return Promise.resolve(); } };",
};

function pageFile(): string {
  const dir = mkdtempSync(join(tmpdir(), "vision-"));
  copyFileSync(`${ASSETS}/review.css`, join(dir, "review.css"));
  const html = readFileSync(`${ASSETS}/review-template.html`, "utf8").replace(/\/\/ \{\{CARDS\}\}.*/, CARDS).replace("{{DRAFT_MARKDOWN}}", "# Draft").replace(/\{\{PROJECT\}\}/g, "p").replace("{{RUN_NOTE}}", "n");
  writeFileSync(join(dir, "index.html"), html);
  return `file://${join(dir, "index.html")}`;
}

async function answer(page: Page, index: number): Promise<void> {
  await page.evaluate(`document.querySelector('#vrc-${index} .vr-verdicts button').click(); document.querySelector('#vrc-${index} .vr-commit').click();`);
  await page.waitForTimeout(450);
}

async function doubleCommit(page: Page): Promise<string> {
  await page.evaluate("document.querySelector('#vrc-0 .vr-verdicts button').click(); const b = document.querySelector('#vrc-0 .vr-commit'); b.click(); b.click();");
  await page.waitForTimeout(450);
  const entries = await page.evaluate("ledger.length");
  const progress = await page.innerText("#vr-progress");
  return `${entries}:${progress}`;
}

async function send(page: Page, bridge: string): Promise<string> {
  await page.addInitScript(BRIDGES[bridge] ?? "");
  await page.goto(pageFile());
  await answer(page, 0);
  await answer(page, 1);
  await page.click("#vr-send");
  await page.waitForTimeout(100);
  const sent = (await page.innerText("#vr-sent")).startsWith("Sent");
  const label = await page.innerText("#vr-send");
  const disabled = await page.isDisabled("#vr-send");
  return `${sent}:${label === "Sent for the next round"}:${disabled}`;
}

const mode = process.argv[2] ?? "";
const browser = await chromium.launch({ executablePath: browserPath() });
const page = await browser.newPage();
if (mode === "double") {
  await page.goto(pageFile());
  console.log(await doubleCommit(page));
} else console.log(await send(page, mode));
await browser.close();
