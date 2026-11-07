import { spawn, type ChildProcess } from "node:child_process";
import { cpSync, readdirSync, readFileSync, writeFileSync } from "node:fs";

interface Message {
  id?: number;
  result?: Record<string, unknown>;
  error?: { message: string };
}

export interface Browser {
  child: ChildProcess;
  read: AsyncIterator<Buffer>;
  buffer: string;
  id: number;
  session: string;
  root: string;
  results: Map<number, Message>;
}

export function stage(built: string, copy: string): void {
  cpSync(built, copy, { recursive: true });
  for (const slug of readdirSync(`${copy}/essays`)) {
    const file = `${copy}/essays/${slug}/index.html`;
    writeFileSync(file, readFileSync(file, "utf8").split('="/').join('="../../'));
  }
  writeFileSync(`${copy}/kit/kit.js`, readFileSync(`${copy}/kit/kit.js`, "utf8").split("`/kit/").join("`./"));
  writeFileSync(`${copy}/style.css`, readFileSync(`${copy}/style.css`, "utf8").split("url(/").join("url("));
}

function write(b: Browser, method: string, params: object): number {
  b.id++;
  (b.child.stdio[3] as NodeJS.WritableStream).write(`${JSON.stringify({ id: b.id, method, params, sessionId: b.session === "" ? undefined : b.session })}\0`);
  return b.id;
}

async function pump(b: Browser): Promise<void> {
  const at = b.buffer.indexOf("\0");
  if (at < 0) {
    const next = await b.read.next();
    b.buffer += (next.value as Buffer).toString();
    return;
  }
  const message = JSON.parse(b.buffer.slice(0, at)) as Message;
  b.buffer = b.buffer.slice(at + 1);
  if (message.id !== undefined) b.results.set(message.id, message);
}

export async function send(b: Browser, method: string, params: object = {}): Promise<Record<string, unknown>> {
  const want = write(b, method, params);
  while (!b.results.has(want)) await pump(b);
  const message = b.results.get(want) ?? {};
  b.results.delete(want);
  if (message.error) throw new Error(`${method}: ${message.error.message}`);
  return message.result ?? {};
}

export async function launch(profile: string, root: string): Promise<Browser> {
  const args = ["--headless=new", "--no-sandbox", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files", "--remote-debugging-pipe", `--user-data-dir=${profile}`, "about:blank"];
  const child = spawn(process.env.CHROMIUM ?? "chromium", args, { stdio: ["ignore", "ignore", "ignore", "pipe", "pipe"] });
  const read = (child.stdio[4] as AsyncIterable<Buffer>)[Symbol.asyncIterator]();
  const b: Browser = { child, read, buffer: "", id: 0, session: "", root, results: new Map() };
  const made = await send(b, "Target.createTarget", { url: "about:blank" });
  const attached = await send(b, "Target.attachToTarget", { targetId: made.targetId, flatten: true });
  b.session = String(attached.sessionId);
  await send(b, "Page.enable");
  return b;
}

export async function phone(b: Browser, width: number, height: number): Promise<void> {
  await send(b, "Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 2, mobile: true });
}

export async function evaluate(b: Browser, expression: string): Promise<unknown> {
  const got = await send(b, "Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  const failed = got.exceptionDetails as { text: string; exception?: { description?: string } } | undefined;
  if (failed) throw new Error(`${failed.text} ${failed.exception?.description ?? ""}`);
  return (got.result as { value: unknown }).value;
}

export async function open(b: Browser, path: string): Promise<void> {
  await send(b, "Page.navigate", { url: `file://${b.root}${path}index.html` });
  for (let i = 0; i < 200; i++) {
    if ((await evaluate(b, "document.readyState")) === "complete") return;
    await Bun.sleep(50);
  }
  throw new Error(`${path} did not load`);
}

export async function shot(b: Browser, path: string, clip: { x: number; y: number; width: number; height: number }): Promise<void> {
  const got = await send(b, "Page.captureScreenshot", { format: "png", clip: { ...clip, scale: 1 }, captureBeyondViewport: true });
  await Bun.write(path, Buffer.from(String(got.data), "base64"));
}

export function close(b: Browser): void {
  b.child.kill();
}
