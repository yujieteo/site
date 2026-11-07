import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { chromium, type Page, type Route } from "playwright-core";
import { browserPath } from "./browser";

const SLUG = "states";
const FIGURES = [
  'kind=orbit alt="Orbit." caption="C."',
  'kind=faithful alt="Bins." caption="C."',
  'kind=mix alt="Mix." caption="C."',
  'kind=anscombe alt="Pairs." caption="C."',
  'kind=theorem-rank alt="Rank." caption="C."',
  'kind=map lazy=true wide=true alt="Map one." caption="C."',
  'kind=map lazy=true wide=true alt="Map two." caption="C."',
  'kind=matrix lazy=true wide=true alt="Matrix." caption="C."',
];
const TAIL = 'kind=wilbeck lazy=true alt="Pressure." caption="C."';
const TIP = "figure[data-kind=faithful] [data-tip]";
const problems: string[] = [];
let wilbeckRequests = 0;

function writePost(dir: string): void {
  let filler = "";
  for (let i = 0; i < 250; i++) filler += `Filler line ${i} to push the last figure far below the first screen.\n\n`;
  const lines = ["---", "title: States", "date: 2026-01-01", "summary: S", "budget_kb: 900", "---", "", "A note.[^1]", "", "[^1]: The note text.", ""];
  for (const figure of FIGURES) lines.push(`::figure ${figure}`, "");
  lines.push(filler, `::figure ${TAIL}`, "");
  mkdirSync(`${dir}/posts/${SLUG}`, { recursive: true });
  writeFileSync(`${dir}/posts/${SLUG}/post.md`, lines.join("\n"));
}

function serve(root: string): ReturnType<typeof Bun.serve> {
  return Bun.serve({
    port: 0,
    async fetch(request) {
      const path = new URL(request.url).pathname;
      const file = Bun.file(`${root}${path.endsWith("/") ? `${path}index.html` : path}`);
      return (await file.exists()) ? new Response(file) : new Response("missing", { status: 404 });
    },
  });
}

async function wilbeckRoute(route: Route): Promise<void> {
  wilbeckRequests++;
  if (wilbeckRequests === 1) await route.fulfill({ status: 500, body: "broken" });
  else await route.continue();
}

function expect(ok: boolean, message: string): void {
  if (!ok) problems.push(message);
}

async function lazyRetry(page: Page): Promise<void> {
  await page.route("**/kit/wilbeck.js", wilbeckRoute);
  await page.evaluate('document.querySelector("figure[data-kind=wilbeck]").scrollIntoView()');
  await page.waitForTimeout(600);
  await page.evaluate("window.scrollTo(0, 0)");
  await page.waitForTimeout(600);
  await page.evaluate('document.querySelector("figure[data-kind=wilbeck]").scrollIntoView()');
  let done = true;
  try {
    await page.locator("figure[data-kind=wilbeck] svg").first().waitFor({ timeout: 4000 });
  } catch {
    done = false;
  }
  expect(done, "a lazy figure whose first import failed was never retried");
}

async function footnoteEscape(page: Page): Promise<void> {
  await page.evaluate("window.scrollTo(0, 0)");
  await page.locator(".fn-ref").first().click();
  await page.mouse.move(2, 2);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
  const shown = await page.evaluate('getComputedStyle(document.querySelector(".fn-note")).display');
  expect(shown === "none", `Escape left the footnote ${String(shown)}`);
}

async function orbitMotion(page: Page): Promise<void> {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.reload();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForTimeout(200);
  const paused = await page.evaluate('document.querySelector("figure[data-kind=orbit]").hasAttribute("data-paused")');
  expect(paused === true, "the orbit kept spinning after the system asked for reduced motion");
}

async function touch(page: Page, selector: string): Promise<void> {
  await page.evaluate(`document.querySelector(${JSON.stringify(selector)}).dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, pointerType: "touch" }))`);
}

async function openTips(page: Page): Promise<number> {
  return Number(await page.evaluate('document.querySelectorAll(".tip[data-open]").length'));
}

async function tooltipStates(page: Page): Promise<void> {
  await page.evaluate('document.querySelector("figure[data-kind=faithful]").scrollIntoView()');
  await touch(page, TIP);
  await touch(page, "figure[data-kind=anscombe] [data-tip]");
  expect((await openTips(page)) === 1, `a tap in a second figure left ${await openTips(page)} tooltips open`);
  await page.evaluate("document.body.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerType: 'touch' }))");
  await touch(page, TIP);
  await page.locator("figure[data-kind=faithful] input[data-faithful-width]").focus();
  await page.keyboard.press("ArrowRight");
  expect((await openTips(page)) === 0, "a keyboard change to the bin width left the old tooltip open");
}

async function pendingTip(page: Page): Promise<void> {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.evaluate('document.querySelector("figure[data-kind=mix]").scrollIntoView()');
  await page.evaluate(`document.querySelector("figure[data-kind=mix] [data-tip]").dispatchEvent(new PointerEvent("pointerover", { bubbles: true, pointerType: "mouse" }))`);
  await page.setViewportSize({ width: 420, height: 900 });
  await page.waitForTimeout(500);
  expect((await openTips(page)) === 0, "a tooltip that was still waiting to open appeared after the chart was redrawn");
}

async function zeroWeights(page: Page): Promise<void> {
  await page.evaluate('document.querySelector("figure[data-kind=theorem-rank]").scrollIntoView()');
  await page.locator("figure[data-kind=theorem-rank] input[data-weight]").first().waitFor();
  await page.evaluate('for (const i of document.querySelectorAll("figure[data-kind=theorem-rank] input[data-weight]")) { i.value = "0"; i.dispatchEvent(new Event("input", { bubbles: true })); }');
  const left = await page.evaluate('document.querySelector("figure[data-kind=theorem-rank] [data-list]").children.length + document.querySelector("figure[data-kind=theorem-rank] [data-chart]").children.length');
  expect(left === 0, "the old top ten and histogram stayed after every weight went to 0");
}

async function mapKeys(page: Page): Promise<void> {
  const map = "#states-6";
  await page.evaluate(`document.querySelector("${map}").scrollIntoView()`);
  await page.locator(`${map} [data-i]`).first().waitFor();
  const box = page.locator(`${map} input[data-axis]`).first();
  const before = await box.isChecked();
  await box.focus();
  await page.keyboard.press("Space");
  expect((await box.isChecked()) !== before, "Space did not toggle a map axis box");
  await page.locator(`${map} [data-i="0"]`).focus();
  await page.keyboard.press("Enter");
  await page.keyboard.press("Enter");
  const held = await page.evaluate(`document.activeElement?.closest("[data-i]") !== null`);
  expect(held === true, "deselecting a map point with Enter dropped keyboard focus");
}

async function twoMaps(page: Page): Promise<void> {
  const one = "#states-6";
  const first = page.locator(one).locator('[data-i="0"]');
  await first.waitFor();
  const before = await first.getAttribute("cx");
  await page.locator("#states-7").locator("input[data-axis]").nth(1).uncheck();
  await page.locator(one).locator('[data-i="5"]').focus();
  await page.keyboard.press("Enter");
  const after = await first.getAttribute("cx");
  expect(before === after, "fitting the second map moved the dots of the first");
}

async function resetBy(page: Page, key: string): Promise<void> {
  const matrix = "figure[data-kind=matrix]";
  await page.locator(`${matrix} [data-col="2"]`).focus();
  await page.keyboard.press("Enter");
  const sorted = await page.evaluate(`document.querySelector("${matrix} [data-note]").textContent`);
  expect(String(sorted).includes("Sorted by"), "Enter on a matrix column name did not sort");
  await page.locator(`${matrix} [data-reset]`).focus();
  await page.keyboard.press(key);
  const note = await page.evaluate(`document.querySelector("${matrix} [data-note]").textContent`);
  expect(!String(note).includes("Sorted by"), `${key} on Original order did not reset the sort`);
}

async function matrixKeys(page: Page): Promise<void> {
  await page.evaluate('document.querySelector("figure[data-kind=matrix]").scrollIntoView()');
  await page.locator("figure[data-kind=matrix] [data-col]").first().waitFor();
  await resetBy(page, "Enter");
  await resetBy(page, "Space");
}

async function main(): Promise<void> {
  const dir = `${process.env["TMPDIR"] ?? "/tmp"}/states-${process.pid}`;
  writePost(dir);
  const built = Bun.spawnSync(["bun", "src/build.ts", "--posts", `${dir}/posts`, "--out", `${dir}/out`]);
  if (built.exitCode !== 0) throw new Error(`the fixture post did not build: ${built.stderr.toString()}`);
  const server = serve(`${dir}/out`);
  const browser = await chromium.launch({ executablePath: browserPath() });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`http://localhost:${server.port}/essays/${SLUG}/`);
    await footnoteEscape(page);
    await orbitMotion(page);
    await tooltipStates(page);
    await pendingTip(page);
    await zeroWeights(page);
    await mapKeys(page);
    await twoMaps(page);
    await matrixKeys(page);
    await lazyRetry(page);
  } finally {
    await browser.close();
    await server.stop(true);
    rmSync(dir, { recursive: true, force: true });
  }
  console.log(problems.length === 0 ? "OK" : problems.join("\n"));
}

await main();
