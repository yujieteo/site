import { chromium, type BrowserContext, type Page } from "playwright-core";
import { browserPath } from "./browser";

const WATCH = 'window.__errors = []; addEventListener("error", (e) => __errors.push(String(e.message))); addEventListener("unhandledrejection", (e) => __errors.push(String(e.reason)));';
const PHONE = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true };
const DESKTOP = { viewport: { width: 1280, height: 800 } };

function check(ok: boolean, claim: string): void {
  if (!ok) throw new Error(`FAIL ${claim}`);
  console.log(`PASS ${claim}`);
}

async function overflow(page: Page, limit: number): Promise<number> {
  return Number(await page.evaluate(`document.documentElement.scrollWidth - ${limit}`));
}

async function strike(page: Page): Promise<void> {
  await page.waitForSelector("#fire:not([disabled])", { timeout: 90000 });
  await page.click("#fire");
  await page.waitForSelector("#verdict:not([hidden])", { timeout: 180000 });
  const verdict = await page.innerText("#verdict");
  check(verdict.length > 0, "the strike ends with a verdict");
}

async function explorer(page: Page, limit: number): Promise<void> {
  await page.waitForFunction("document.getElementById('recs').children.length > 0", undefined, { timeout: 90000 });
  await page.getByText("Catalog and scores").first().click();
  await page.waitForSelector("#catalog-body tr");
  check((await overflow(page, limit)) <= 0, "the explorer catalog does not scroll sideways");
  const all = await page.locator("#catalog-body tr").count();
  await page.fill("#q", "pythagorean");
  await page.waitForTimeout(500);
  const some = await page.locator("#catalog-body tr").count();
  check(some > 0 && some < all, "the explorer search narrows the catalog");
}

async function learner(page: Page): Promise<void> {
  await page.waitForSelector("#pick", { timeout: 90000 });
  await page.waitForTimeout(1000);
  await page.fill("#pick", "Pythagorean theorem");
  await page.keyboard.press("Enter");
  await page.waitForFunction("document.body.innerText.includes('Pythagorean theorem')", undefined, { timeout: 15000 });
  check(true, "the learner opens the chosen theorem");
}

async function exercise(page: Page, tool: string, limit: number): Promise<void> {
  if (tool.startsWith("goosestrike")) await strike(page);
  if (tool.startsWith("theorems/explorer")) await explorer(page, limit);
  if (tool.startsWith("theorems/learner")) await learner(page);
}

async function visit(context: BrowserContext, base: string, tool: string, label: string, limit: number, full: boolean): Promise<void> {
  const page = await context.newPage();
  const started = Date.now();
  await page.goto(`${base}/play/${tool}`, { waitUntil: "load", timeout: 120000 });
  const over = await overflow(page, limit);
  check(over <= 0, `${tool} does not scroll sideways at ${label} (${over} px too wide)`);
  if (full) await exercise(page, tool, limit);
  const errors = String(await page.evaluate("JSON.stringify(window.__errors)"));
  check(errors === "[]", `${tool} raises no errors at ${label} ${errors}`);
  console.log(`INFO ${tool} ready at ${label} in ${Date.now() - started} ms`);
  await page.close();
}

async function serverPort(output: ReadableStream<Uint8Array>): Promise<string> {
  let text = "";
  for await (const chunk of output) {
    text += new TextDecoder().decode(chunk);
    if (!text.includes("\n")) continue;
    const port = /port (\d+)/.exec(text)?.[1];
    if (port === undefined) throw new Error(`The local server did not start: ${text}`);
    return port;
  }
  throw new Error("The local server exited before it was ready");
}

async function main(): Promise<void> {
  const [dir = "dist", tool = "", label = "phone"] = process.argv.slice(2);
  const phone = label === "phone";
  const browser = await chromium.launch({ executablePath: browserPath() });
  const server = Bun.spawn(["python3", "-u", "-m", "http.server", "0", "--bind", "127.0.0.1", "-d", dir], { stdout: "pipe", stderr: "inherit" });
  try {
    const port = await serverPort(server.stdout);
    const context = await browser.newContext(phone ? PHONE : DESKTOP);
    await context.addInitScript({ content: WATCH });
    await visit(context, `http://127.0.0.1:${port}`, tool, phone ? "390 px phone" : "1280 px desktop", phone ? 390 : 1280, phone);
  } finally {
    await browser.close();
    server.kill();
  }
}

await main();
