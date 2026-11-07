import { chmodSync, mkdirSync, mkdtempSync, readdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { ServerWebSocket } from "bun";
import { launch, serve } from "../../.claude/skills/schematic-figure/foundation/tools/lib/cdp.ts";

const CASES = ["routes", "exception", "silent", "dropped", "launch"];
const EXPRESSIONS: Record<string, string> = { exception: "throw", silent: "silent", dropped: "drop" };

function reply(id: number, expression: string): string | null {
  if (expression === "silent") return null;
  if (expression === "throw") return JSON.stringify({ id, result: { result: { type: "object" }, exceptionDetails: { text: "Uncaught", exception: { description: "Error: x" } } } });
  return JSON.stringify({ id, result: { result: { type: "number", value: 1 } } });
}

function onMessage(ws: ServerWebSocket, data: string | Buffer): void {
  const text = String(data);
  const id = Number(/"id":(\d+)/.exec(text)?.[1] ?? 0);
  const expression = /"expression":"([^"]*)"/.exec(text)?.[1] ?? "";
  if (expression === "drop") ws.close();
  const out = reply(id, expression);
  if (out !== null) ws.send(out);
}

function onFetch(req: Request, server: { port: number | undefined; upgrade(r: Request): boolean }): Response | undefined {
  if (req.url.endsWith("/json/list")) {
    const pages = process.env["FAKE_PAGES"] === "1";
    return Response.json(pages ? [{ type: "page", webSocketDebuggerUrl: `ws://127.0.0.1:${server.port}/page` }] : []);
  }
  return server.upgrade(req) ? undefined : new Response("no", { status: 400 });
}

function fakeChrome(dir: string, port: number): string {
  const path = join(dir, "chrome");
  writeFileSync(path, `#!/bin/sh\necho $$ > ${dir}/pid\necho "DevTools listening on ws://127.0.0.1:${port}/devtools/browser/x" >&2\nexec sleep 60\n`);
  chmodSync(path, 0o755);
  return path;
}

function profiles(): number {
  let count = 0;
  for (const name of readdirSync(tmpdir())) if (name.startsWith("schem-cdp-")) count++;
  return count;
}

async function outcome(work: Promise<unknown>): Promise<string> {
  try {
    await work;
    return "resolved";
  } catch (e) {
    return String(e);
  }
}

async function routes(): Promise<void> {
  const dir = mkdtempSync(join(tmpdir(), "cdp-routes-"));
  for (const n of ["a", "b"]) {
    mkdirSync(join(dir, n));
    writeFileSync(join(dir, n, "id.txt"), n);
  }
  const a = await serve(join(dir, "a"), null, null);
  const b = await serve(join(dir, "b"), null, null);
  const got = [await (await fetch(`http://127.0.0.1:${a.port}/id.txt`)).text(), await (await fetch(`http://127.0.0.1:${b.port}/id.txt`)).text()];
  a.srv.close();
  b.srv.close();
  console.log(got.join(","));
}

async function failedLaunch(dir: string, before: number): Promise<void> {
  const result = await outcome(launch());
  const pid = Number(await Bun.file(join(dir, "pid")).text());
  await Bun.sleep(300);
  let alive = true;
  try {
    process.kill(pid, 0);
  } catch {
    alive = false;
  }
  console.log(`${result !== "resolved"}:${profiles() - before}:${alive}`);
}

async function session(name: string): Promise<void> {
  const dir = mkdtempSync(join(tmpdir(), "cdp-fake-"));
  const server = Bun.serve({ port: 0, fetch: onFetch, websocket: { message: onMessage } });
  process.env["CHROME"] = fakeChrome(dir, server.port ?? 0);
  process.env["FAKE_PAGES"] = name === "launch" ? "0" : "1";
  process.env["CDP_CALL_TIMEOUT_MS"] = "400";
  const before = profiles();
  if (name === "launch") await failedLaunch(dir, before);
  else {
    const cdp = await launch();
    console.log(await outcome(cdp.evaluate(EXPRESSIONS[name] ?? "ok")));
    cdp.close();
  }
  await server.stop(true);
}

const name = process.argv[2] ?? "";
if (!CASES.includes(name)) throw new Error(`case: ${CASES.join("|")}`);
if (name === "routes") await routes();
else await session(name);
process.exit(0);
