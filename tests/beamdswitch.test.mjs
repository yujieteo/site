import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, linkSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const VIZ = join(ROOT, "visuals/beamdswitch");
const raw = JSON.parse(await readFile(join(VIZ, "raw.json"), "utf8"));
const PYTHON = process.env.PYTHON || (existsSync(join(ROOT, ".venv/bin/python")) ? join(ROOT, ".venv/bin/python") : "python3");
// The catalogue stub as the build reads it.
const catalogue = JSON.parse(execFileSync(PYTHON, ["-c", [
  "import json, sys; sys.path.insert(0, 'scripts')",
  "from build import load_visualizations",
  "print(json.dumps(next(v for v in load_visualizations() if v['slug'] == 'beamdswitch'), default=str))",
].join("\n")], { cwd: ROOT, encoding: "utf8" }));
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const SITE_BLOCK = /<!-- teoyujie\.org additions: begin[^\n]*-->\n[\s\S]*?<!-- teoyujie\.org additions: end -->\n/;

test("index.html is the vendored beamdswitch.html plus only the marked site block", async () => {
  const html = await readFile(join(VIZ, "index.html"));
  const text = html.toString("latin1");
  const block = text.match(SITE_BLOCK);
  assert.ok(block, "site block present");
  assert.equal(text.match(new RegExp(SITE_BLOCK, "g")).length, 1);
  const upstream = Buffer.from(text.replace(SITE_BLOCK, ""), "latin1");
  assert.equal(upstream.length, raw.upstream.bytes);
  assert.equal(sha256(upstream), raw.upstream.sha256);
  assert.match(raw.upstream.commit, /^[0-9a-f]{40}$/);
  // The service worker script comes first, so it registers before the app boots,
  // and the block loads only files published beside the page.
  const scripts = [...block[0].matchAll(/<script src="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(scripts, ["coi-serviceworker.js", "site.js"]);
  assert.ok(text.indexOf("<body>") < text.indexOf(block[0]), "site block opens the body, outside the app's head");
  assert.ok(text.indexOf(block[0]) < text.indexOf("<script>"), "site block precedes the app's scripts");
  // The notice is static and styled inline, so it depends on no id or class of the app.
  assert.doesNotMatch(block[0], /\s(id|class)=/);
  const MiB = 1048576, voice = raw.downloads.find((d) => d.loaded === "voice").bytes;
  const firstLoad = (kinds) => Math.round((raw.downloads.filter((d) => kinds.includes(d.loaded)).reduce((n, d) => n + d.bytes, 0) + voice) / MiB);
  const sizes = block[0].match(/about (\d+) MB for WASM or (\d+) MB for WebGPU/);
  assert.ok(sizes, "notice states the first-load sizes");
  assert.deepEqual([Number(sizes[1]), Number(sizes[2])], [firstLoad(["narration", "wasm"]), firstLoad(["narration", "webgpu"])]);
  assert.match(block[0], /service worker/);
});

test("every Kokoro file is pinned to an exact URL and sha256, and none is committed", () => {
  const paths = raw.downloads.map((d) => d.path);
  assert.equal(new Set(paths).size, paths.length);
  for (const d of raw.downloads) {
    assert.match(d.path, /^kokoro\/[A-Za-z0-9._/-]+$/);
    assert.ok(!d.path.split("/").includes(".."));
    assert.match(d.sha256, /^[0-9a-f]{64}$/);
    assert.ok(Number.isInteger(d.bytes) && d.bytes > 0);
    assert.ok(d.loaded in raw.loaded, d.path);
    // Immutable sources only: a Hugging Face commit, or an exact npm version.
    assert.match(d.url, /^https:\/\/(huggingface\.co\/onnx-community\/Kokoro-82M-v1\.0-ONNX\/resolve\/[0-9a-f]{40}\/|cdn\.jsdelivr\.net\/npm\/(@[a-z-]+\/)?[a-z-]+@\d+\.\d+\.\d+\/)/, d.url);
  }
  const committed = execFileSync("git", ["ls-files", "visuals/beamdswitch"], { cwd: ROOT, encoding: "utf8" }).split("\n");
  assert.deepEqual(committed.filter((f) => /\.(onnx|wasm|bin|mjs)$|kokoro/.test(f)), []);
  assert.equal(catalogue.downloads, "visuals/beamdswitch/raw.json");
  assert.equal(catalogue.data_path, "visuals/beamdswitch/raw.json");
});

// ---------------------------------------------------------------- service worker
const swSource = await readFile(join(VIZ, "coi-serviceworker.js"), "utf8");

function serviceWorker() {
  const listeners = {};
  const self = { location: new URL("https://teoyujie.org/visuals/beamdswitch/coi-serviceworker.js"), addEventListener: (type, fn) => { listeners[type] = fn; } };
  vm.runInNewContext(swSource, { self, Headers, Response, URL, fetch: undefined });
  return listeners;
}

test("the service worker isolates same-origin responses and types .mjs and .wasm", async () => {
  const listeners = serviceWorker();
  assert.deepEqual(Object.keys(listeners).sort(), ["activate", "fetch", "install"]);
  // The handler calls the global fetch; give the sandbox one per request.
  const run = async (url, response) => {
    const context = vm.createContext({ Headers, Response, URL, fetch: async () => response });
    const captured = {};
    context.self = { location: new URL("https://teoyujie.org/visuals/beamdswitch/coi-serviceworker.js"), addEventListener: (t, fn) => { captured[t] = fn; } };
    vm.runInContext(swSource, context);
    let responded = null;
    captured.fetch({ request: { url, cache: "default", mode: "cors" }, respondWith: (p) => { responded = p; } });
    return responded && await responded;
  };
  const mjs = await run("https://teoyujie.org/visuals/beamdswitch/kokoro/ort/ort-wasm-simd-threaded.jsep.mjs",
    new Response("export default 1", { headers: { "Content-Type": "application/octet-stream" } }));
  assert.equal(mjs.headers.get("Content-Type"), "text/javascript");
  assert.equal(mjs.headers.get("Cross-Origin-Embedder-Policy"), "require-corp");
  assert.equal(mjs.headers.get("Cross-Origin-Opener-Policy"), "same-origin");
  assert.equal(await mjs.text(), "export default 1");
  const wasm = await run("https://teoyujie.org/visuals/beamdswitch/kokoro/ort/x.wasm", new Response("", { headers: { "Content-Type": "application/octet-stream" } }));
  assert.equal(wasm.headers.get("Content-Type"), "application/wasm");
  const page = await run("https://teoyujie.org/visuals/beamdswitch/index.html", new Response("<p>", { headers: { "Content-Type": "text/html" } }));
  assert.equal(page.headers.get("Content-Type"), "text/html");
  assert.equal(page.headers.get("Cross-Origin-Opener-Policy"), "same-origin");
  const missing = await run("https://teoyujie.org/visuals/beamdswitch/nope.mjs", new Response("", { status: 404, headers: { "Content-Type": "text/html" } }));
  assert.equal(missing.status, 404);
  assert.equal(missing.headers.get("Content-Type"), "text/html");
  assert.equal(await run("https://huggingface.co/x.onnx", new Response("")), null, "cross-origin requests are not handled");
});

function pageSide({ isolated = false, controller = null, active = true, flag = null } = {}) {
  const storage = new Map(flag ? [["beamdswitch-coi-reload", flag]] : []);
  const calls = { reloads: 0, registered: null, listeners: {} };
  const registration = { active: active ? {} : null };
  const window = { crossOriginIsolated: isolated, isSecureContext: true };
  const context = {
    window, URL, console: { warn() {} },
    document: { currentScript: { src: "https://teoyujie.org/visuals/beamdswitch/coi-serviceworker.js" } },
    location: { reload: () => { calls.reloads++; } },
    sessionStorage: { getItem: (k) => storage.get(k) ?? null, setItem: (k, v) => storage.set(k, v), removeItem: (k) => storage.delete(k) },
    navigator: { serviceWorker: { controller, register: (src) => { calls.registered = src; return Promise.resolve(registration); }, addEventListener: (t, fn) => { calls.listeners[t] = fn; } } },
  };
  vm.runInNewContext(swSource, context);
  return { calls, storage };
}

test("the page registers the worker in its own directory and reloads at most once", async () => {
  const first = pageSide();
  await new Promise((r) => setImmediate(r));
  assert.equal(first.calls.registered, "https://teoyujie.org/visuals/beamdswitch/coi-serviceworker.js");
  assert.equal(first.calls.reloads, 1);
  assert.ok(first.calls.listeners.controllerchange);
  const again = pageSide({ flag: "1" });
  await new Promise((r) => setImmediate(r));
  assert.equal(again.calls.reloads, 0, "no reload loop when isolation did not take");
  const controlled = pageSide({ controller: {} });
  await new Promise((r) => setImmediate(r));
  assert.equal(controlled.calls.reloads, 0);
  const isolated = pageSide({ isolated: true, flag: "1" });
  assert.equal(isolated.calls.registered, null);
  assert.equal(isolated.storage.size, 0, "success clears the reload guard");
});

// ---------------------------------------------------------------- site.js
async function siteTools({ isolated = true, controller = {} } = {}) {
  const tools = {};
  const frames = [
    { index: 0, kind: "title", title: "Beams", section: "", steps: 1, notes: "", narration: "Beams." },
    { index: 1, kind: "frame", title: "Compatibility", section: "Method", steps: 3, notes: "n", narration: "a. b. c." },
  ];
  const ctx = { deck: { meta: { title: "Beams" }, frames }, i: 0, step: 0, go(i, s) { this.i = i; this.step = s; }, engine: { stats: { device: "wasm", dtype: "q8", loadMs: 5, sentences: 2, genMs: 9, audioSec: 3 } } };
  const window = { crossOriginIsolated: isolated, beamdswitch: ctx };
  const document = { baseURI: "https://teoyujie.org/visuals/beamdswitch/index.html", modelContext: { registerTool: (t) => { tools[t.name] = t; } } };
  const fetchStub = async (url) => {
    assert.equal(String(url), "https://teoyujie.org/visuals/beamdswitch/data.json");
    return { ok: true, json: async () => raw };
  };
  vm.runInNewContext(await readFile(join(VIZ, "site.js"), "utf8"), {
    window, document, fetch: fetchStub, URL, navigator: { serviceWorker: { controller } },
  });
  const call = async (name, input) => JSON.parse((await tools[name].execute(input)).content[0].text);
  return { tools, call, ctx };
}

test("site.js registers the WebMCP tools the catalogue lists", async () => {
  const { tools, call, ctx } = await siteTools();
  const listed = catalogue.webmcp_tools;
  assert.deepEqual(Object.keys(tools).sort(), [...listed].sort());
  assert.ok(listed.length >= 3);
  const meta = await call("get_metadata");
  const sum = (kinds) => raw.downloads.filter((d) => kinds.includes(d.loaded)).reduce((n, d) => n + d.bytes, 0) + 522240;
  assert.deepEqual(meta.first_load_bytes, { page: raw.upstream.bytes, wasm: sum(["narration", "wasm"]), webgpu: sum(["narration", "webgpu"]), voice: 522240 });
  assert.equal(meta.upstream.commit, raw.upstream.commit);
  const deck = await call("get_deck");
  assert.equal(deck.frames.length, 2);
  assert.deepEqual(deck.current, { frame: 1, step: 1 });
  const moved = await call("go_to_frame", { frame: 2, step: 9 });
  assert.deepEqual(moved.current, { frame: 2, step: 3 });
  assert.equal(ctx.i, 1);
  await assert.rejects(tools.go_to_frame.execute({ frame: 3 }), /frame must be 1 to 2/);
  const status = await call("get_narration_status");
  assert.equal(status.narration, "threads");
  assert.equal(status.kokoro_loaded, true);
});

test("site.js reports single-threaded and unavailable narration", async () => {
  assert.equal((await (await siteTools({ isolated: false })).call("get_narration_status")).narration, "single");
  assert.equal((await (await siteTools({ isolated: false, controller: null })).call("get_narration_status")).narration, "none");
});

// ---------------------------------------------------------------- deploy

test("site_diff lists new and changed large files but not hard-linked unchanged ones", () => {
  const dir = mkdtempSync(join(tmpdir(), "bd-diff-"));
  try {
    const before = join(dir, "before"), after = join(dir, "after");
    for (const root of [before, after]) mkdirSync(join(root, "visuals/beamdswitch/kokoro/model/onnx"), { recursive: true });
    const weights = join(dir, "cache-weights");
    writeFileSync(weights, Buffer.alloc(4 << 20, 7));
    linkSync(weights, join(before, "visuals/beamdswitch/kokoro/model/onnx/model.onnx"));
    linkSync(weights, join(after, "visuals/beamdswitch/kokoro/model/onnx/model.onnx"));
    writeFileSync(join(before, "visuals/beamdswitch/kokoro/model/onnx/model_quantized.onnx"), Buffer.alloc(1 << 20, 1));
    writeFileSync(join(after, "visuals/beamdswitch/kokoro/model/onnx/model_quantized.onnx"), Buffer.alloc(1 << 20, 2));
    writeFileSync(join(after, "visuals/beamdswitch/kokoro/kokoro.web.js"), "x");
    writeFileSync(join(before, "corpus.json"), "{}");
    writeFileSync(join(after, "corpus.json"), "{\"a\":1}");
    const rows = execFileSync(PYTHON, ["-c", [
      "import sys; sys.path.insert(0, 'scripts')",
      "from pathlib import Path; from site_diff import changes",
      "print('\\n'.join(f'{s} {p}' for s, p in changes(Path(sys.argv[1]), Path(sys.argv[2]))))",
    ].join("\n"), before, after], { cwd: ROOT, encoding: "utf8" }).trim().split("\n");
    assert.deepEqual(rows, [
      "M corpus.json",
      "A visuals/beamdswitch/kokoro/kokoro.web.js",
      "M visuals/beamdswitch/kokoro/model/onnx/model_quantized.onnx",
    ]);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
