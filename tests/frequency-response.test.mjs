import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const html = await readFile(new URL("../visuals/frequency-response/index.html", import.meta.url), "utf8");
const engineSrc = /<script id="fr-engine">([\s\S]*?)<\/script>/.exec(html)[1];
const load = (ctx = {}) => { vm.createContext(ctx); vm.runInContext(engineSrc, ctx); return ctx.FreqResponse; };
const F = load();

const close = (actual, expected, tol, label) =>
  assert.ok(Math.abs(actual - expected) <= tol, `${label}: ${actual} vs ${expected} (±${tol})`);
const third = (K, extra = {}) => ({ plant: { form: "tf", num: [1], den: [1, 3, 2, 0] }, K, ...extra });

test("in-page self-tests (spec section 11, phase 1) all pass", () => {
  const t = F.selfTests();
  assert.ok(t.length >= 30);
  assert.equal(t.filter((x) => !x.pass).map((x) => `${x.name}: ${x.detail}`).join("\n"), "");
  assert.ok(t.every((x) => x.tolerance), "every self-test states its tolerance");
});

test("K/(s(s+1)(s+2)): critical gain 6 at √2 rad/s, stable below and unstable above", () => {
  const r6 = F.analyze(third(6));
  assert.equal(r6.margins.phaseCrossovers.length, 1);
  close(r6.margins.phaseCrossovers[0].w, Math.SQRT2, 1e-9, "ω_pc");
  close(r6.margins.phaseCrossovers[0].gmDb, 0, 1e-9, "GM at K = 6");
  assert.equal(r6.checks.find((c) => c.id === "gm").pass, false);
  assert.equal(r6.closedLoop.verdict, "marginal");
  for (const [K, unstable] of [[1, 0], [3, 0], [5.9, 0], [6.1, 2], [9, 2], [60, 2]]) {
    assert.equal(F.analyze(third(K)).closedLoop.unstable, unstable, `K = ${K}`);
  }
  const r3 = F.analyze(third(3));
  close(r3.margins.governing.gmUpper.dB, 20 * Math.log10(2), 1e-9, "GM at K = 3");
  assert.ok(r3.margins.governing.pm.deg > 0);
});

test("phase and delay margins match closed forms", () => {
  // L = 1/s: ω_gc = 1, PM = 90°, delay margin π/2.
  const r = F.analyze({ plant: { form: "tf", num: [1], den: [1, 0] }, K: 1 });
  close(r.margins.governing.pm.w, 1, 1e-12, "ω_gc");
  close(r.margins.governing.pm.deg, 90, 1e-9, "PM");
  close(r.margins.governing.delayMargin.seconds, Math.PI / 2, 1e-9, "DM");
  // L = 2/(s + 1): ω_gc = √3, PM = 180° − atan(√3) = 120°; with τ equal to the delay margin, PM → 0.
  const a = F.analyze({ plant: { form: "tf", num: [2], den: [1, 1] }, K: 1 });
  close(a.margins.governing.pm.deg, 120, 1e-9, "PM of 2/(s+1)");
  const dm = a.margins.governing.delayMargin.seconds;
  close(dm, (120 * Math.PI) / 180 / Math.sqrt(3), 1e-12, "DM of 2/(s+1)");
  const b = F.analyze({ plant: { form: "tf", num: [2], den: [1, 1] }, K: 1, delay: dm });
  close(b.margins.governing.pm.deg, 0, 1e-7, "PM with τ = DM");
});

test("a delay adds exactly −ωτ of phase and every phase crossover is found even when the phase moves fast", () => {
  const tau = 0.5;
  const r = F.analyze(third(3, { delay: tau, range: { auto: false, wMin: 0.01, wMax: 1000, pointsPerDecade: 50 } }));
  assert.equal(r.closedLoop.available, false);
  assert.match(r.closedLoop.message, /delay/);
  // Phase of 3/(jω(jω+1)(jω+2)) − ωτ is monotone, so it crosses each −180° + k·360° once up to its value at ω_max.
  const end = F.responseAt(third(3, { delay: tau }), 1000).phaseDeg;
  const expected = Math.floor((-180 - end) / 360) + 1;
  assert.equal(r.margins.phaseCrossovers.length, expected);
  for (const c of r.margins.phaseCrossovers) close(F.responseAt(third(3, { delay: tau }), c.w).phaseDeg, c.phaseDeg, 1e-6, `crossover at ${c.w}`);
  for (const w of [0.3, 3, 30]) {
    const d = F.responseAt(third(3, { delay: tau }), w).phaseDeg - F.responseAt(third(3), w).phaseDeg;
    close(d, (-w * tau * 180) / Math.PI, 1e-9, `delay phase at ${w}`);
  }
});

test("a conditionally stable loop reports an upper and a lower gain margin and checks both", () => {
  const cond = (K) => ({ plant: { form: "zpk", zeros: [{ re: -0.1, im: 0 }, { re: -0.1, im: 0 }], poles: [{ re: 0, im: 0 }, { re: 0, im: 0 }, { re: 0, im: 0 }, { re: -10, im: 0 }, { re: -20, im: 0 }], gain: 1 }, K });
  for (const K of [200, 400]) {
    const r = F.analyze(cond(K));
    assert.equal(r.closedLoop.verdict, "stable", `K = ${K}`);
    const { gmUpper, gmLower } = r.margins.governing;
    assert.ok(gmUpper.dB > 6 && gmLower.dB < -6, `K = ${K}: upper ${gmUpper.dB}, lower ${gmLower.dB}`);
    assert.equal(r.checks.find((c) => c.id === "gm").pass, true, `K = ${K}`);
    for (const g of [gmUpper, gmLower]) close(-20 * Math.log10(F.responseAt(cond(K), g.w).mag), g.dB, 1e-9, `GM at ${g.w}`);
    const md = F.toMarkdown(cond(K), r);
    assert.match(md, /\| Upper gain margin \(gain increase\) \| \d/);
    assert.match(md, /\| Lower gain margin \(gain reduction\) \| −\d/);
  }
  const at200 = F.analyze(cond(200)).margins.governing;
  close(at200.gmLower.dB, -25.76, 0.01, "lower margin at K = 200");
  close(at200.gmUpper.dB, 29.28, 0.01, "upper margin at K = 200");
  // Scaling K by the lower margin puts the loop on the boundary.
  assert.equal(F.analyze(cond(200 * Math.pow(10, at200.gmLower.dB / 20))).closedLoop.verdict, "marginal");
  // A lower margin inside the threshold fails the check.
  assert.equal(F.analyze({ ...cond(200), thresholds: { gmDb: 30, pmDeg: 45, ms: 2 } }).checks.find((c) => c.id === "gm").pass, false);
});

test("a finite negative real DC gain is a phase crossover at ω = 0", () => {
  const r = F.analyze({ plant: { form: "tf", num: [2], den: [1, -1] }, K: 1 });
  assert.equal(r.closedLoop.verdict, "stable");
  assert.deepEqual([...r.margins.phaseCrossovers.map((c) => c.w)], [0]);
  close(r.margins.governing.gmLower.dB, -20 * Math.log10(2), 1e-12, "lower GM of 2/(s − 1)");
  assert.equal(r.margins.governing.gmUpper, null);
  assert.equal(r.checks.find((c) => c.id === "gm").pass, true);
  assert.equal(F.analyze({ plant: { form: "tf", num: [2], den: [1, -1] }, K: 0.5 }).closedLoop.verdict, "marginal");
  const neg = F.analyze({ plant: { form: "tf", num: [1], den: [1, 1] }, K: -0.5 });
  assert.equal(neg.margins.phaseCrossovers[0].w, 0);
  close(neg.margins.governing.gmUpper.dB, 20 * Math.log10(2), 1e-12, "upper GM of −0.5/(s + 1)");
  // Biproper loop with L(∞) real negative: the crossover sits at ω = ∞.
  const bi = F.analyze({ plant: { form: "tf", num: [-0.5, -2], den: [1, 1] }, K: 1 });
  assert.equal(bi.margins.governing.gmUpper.w, Infinity);
  close(bi.margins.governing.gmUpper.dB, 20 * Math.log10(2), 1e-12, "upper GM of L(∞) = −0.5");
});

test("a gain crossover with PM ≤ 0 leaves a delay margin of 0", () => {
  const r = F.analyze({ plant: { form: "zpk", zeros: [], poles: [{ re: 0, im: 1 }, { re: 0, im: -1 }], gain: 1 }, K: 0.5 });
  assert.equal(r.margins.gainCrossovers.length, 2);
  assert.equal(r.closedLoop.verdict, "marginal");
  const dm = r.margins.governing.delayMargin;
  assert.equal(dm.seconds, 0);
  close(dm.w, Math.sqrt(1.5), 1e-9, "zero-PM crossover");
  assert.match(dm.message, /PM ≤ 0/);
  assert.match(F.toMarkdown({ plant: { form: "zpk", zeros: [], poles: [{ re: 0, im: 1 }, { re: 0, im: -1 }], gain: 1 }, K: 0.5 }, r), /\| Delay margin \| 0 s \(A gain crossover/);
});

test("|T(0)| cancels common origin zeros and poles", () => {
  // PI(1, 1)·s/(s + 1) = 1, so T = 1/2 at every frequency.
  const x = { plant: { form: "tf", num: [1, 0], den: [1, 1] }, controller: { form: "preset", preset: "pi", params: { kp: 1, ti: 1 } }, K: 1 };
  const r = F.analyze(x);
  close(F.responseAt(x, 1).T, 0.5, 1e-12, "|T|");
  assert.equal(r.margins.resonance.ok, true);
  close(r.margins.resonance.mrDb, 0, 1e-9, "Mr");
});

test("sensitivity peaks, vector margin and bandwidth are consistent with the response", () => {
  const x = third(3);
  const r = F.analyze(x);
  const { Ms, Mt, vectorMargin, bandwidth } = r.margins;
  assert.ok(Ms.ok && Mt.ok && bandwidth.ok);
  close(vectorMargin.value, 1 / Ms.value, 1e-15, "VM = 1/Ms");
  close(F.responseAt(x, Ms.w).S, Ms.value, 1e-12, "|S| at its peak");
  for (const f of [0.9, 1.1]) assert.ok(F.responseAt(x, Ms.w * f).S < Ms.value);
  // Type-1 loop: |T(0)| = 1, so the bandwidth is where |T| = 1/√2.
  close(F.responseAt(x, bandwidth.w).T, Math.SQRT1_2, 1e-9, "|T| at the bandwidth");
});

test("validation blocks bad input with a message and flags soft warnings", () => {
  const bad = F.analyze({ plant: { form: "tf", num: [NaN], den: [0, 0] }, K: 0, delay: -1, range: { auto: false, wMin: 10, wMax: 1, pointsPerDecade: 200 } });
  assert.equal(bad.ok, false);
  const text = bad.errors.map((e) => e.message).join("\n");
  for (const re of [/K must be a non-zero/, /Delay τ must be/, /ω_min must be less than ω_max/, /numerator coefficients/]) assert.match(text, re);
  assert.equal(F.analyze({ plant: { form: "tf", num: [1], den: [0, 0] } }).errors[0].field, "plant.den");
  assert.match(F.analyze({ plant: { form: "zpk", zeros: [{ re: -1, im: 1 }], poles: [], gain: 1 } }).errors[0].message, /conjugate pairs/);
  assert.match(F.analyze({ timeDomain: "discrete" }).errors[0].message, /phase 2/);
  const codes = (x) => F.analyze(x).warnings.map((w) => w.code);
  assert.ok(codes({ plant: { form: "tf", num: [1, 0, 0], den: [1, 1] } }).includes("improper"));
  assert.ok(codes({ plant: { form: "tf", num: [1], den: [1, -1] }, K: 2 }).includes("rhp-pole"));
  assert.ok(codes({ plant: { form: "tf", num: [1, 1], den: [1, 3, 2] } }).includes("cancellation"));
  assert.ok(codes({ plant: { form: "preset", preset: "second-order", params: { k: 1, wn: 1, zeta: 0 } }, K: 0.5 }).includes("axis-pole"));
  assert.ok(codes(third(3, { delay: 0.1 })).includes("delay-no-poles"));
  assert.ok(codes(third(9)).includes("cl-unstable"));
  const cond = { plant: { form: "zpk", zeros: [{ re: -0.1, im: 0 }, { re: -0.1, im: 0 }], poles: [{ re: 0, im: 0 }, { re: 0, im: 0 }, { re: 0, im: 0 }, { re: -10, im: 0 }, { re: -20, im: 0 }], gain: 1 }, K: 200 };
  assert.ok(codes(cond).includes("conditional"));
});

test("presets and the three input forms describe the same loop", () => {
  const pid = { form: "preset", preset: "pid", params: { kp: 2, ti: 1.5, td: 0.4, n: 8 } };
  const asTf = F.blockTf(pid), asZpk = F.blockZpk(pid);
  const plant = { form: "tf", num: [1], den: [1, 2, 1, 0] };
  const rs = [pid, asTf, asZpk].map((controller) => F.analyze({ plant, controller, K: 1 }));
  for (const r of rs.slice(1)) {
    close(r.margins.governing.pm.deg, rs[0].margins.governing.pm.deg, 1e-9, "PM");
    close(r.margins.Ms.value, rs[0].margins.Ms.value, 1e-9, "Ms");
  }
  for (const [name, p] of Object.entries(F.PRESETS)) {
    const r = F.analyze({ plant: { form: "preset", preset: name, params: p.params }, K: 1 });
    assert.equal(r.ok, true, name);
  }
});

test("exports carry the disclaimer, use canonical units and round-trip through import", () => {
  const x = F.normalise({ plant: { form: "zpk", zeros: [{ re: -2, im: 0 }], poles: [{ re: -1, im: 3 }, { re: -1, im: -3 }, { re: 0, im: 0 }], gain: 5 }, K: 1.2, delay: 0.02, displayUnits: { freq: "Hz", mag: "abs", phase: "rad", wrapPhase: true } });
  const r = F.analyze(x);
  const md = F.toMarkdown(x, r), res = F.toResultsJSON(x, r), inp = F.toInputsJSON(x), csv = F.toCSV(x);
  for (const text of [md, res, inp, csv]) assert.ok(text.includes(F.DISCLAIMER));
  assert.match(md, /unsourced default/);
  assert.match(md, /## Conventions/);
  const parsed = JSON.parse(res);
  assert.equal(parsed.schemaVersion, F.SCHEMA_VERSION);
  assert.deepEqual(parsed.results.loop.poles[0], { re: -1, im: 3 });
  assert.equal(parsed.displayUnits.freq, "Hz");
  // CSV stays in rad/s and degrees whatever the display toggles say.
  const line = csv.split("\n")[3].split(",").map(Number);
  close(line[1], line[0] / (2 * Math.PI), 1e-12, "Hz column");
  close(line[4], F.responseAt(x, line[0]).phaseDeg, 1e-9, "phase column in unwrapped degrees");
  for (const text of [res, inp]) {
    const back = F.importJSON(text);
    assert.equal(F.canonicalJSON(back), F.canonicalJSON(x));
    assert.equal(F.canonicalJSON(F.analyze(back)), F.canonicalJSON(r));
  }
  assert.throws(() => F.importJSON("{"), /Not valid JSON/);
  assert.throws(() => F.importJSON(JSON.stringify({ schemaVersion: 99 })), /newer/);
  assert.equal(F.importJSON(JSON.stringify({ K: 4 })).K, 4, "a bare inputs object imports too");
});

test("raw.json is the published metadata and default example of the page", async () => {
  const raw = JSON.parse(await readFile(new URL("../visuals/frequency-response/raw.json", import.meta.url), "utf8"));
  const { schemaVersion, example, ...meta } = raw;
  assert.equal(schemaVersion, F.SCHEMA_VERSION);
  assert.deepEqual(example, JSON.parse(JSON.stringify(F.defaultInputs())));
  assert.deepEqual(meta, JSON.parse(JSON.stringify(F.META)));
});

test("the engine runs without DOM, storage, clock or randomness and is deterministic", () => {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(`
    for (const name of ["document", "window", "localStorage", "location", "navigator"])
      Object.defineProperty(globalThis, name, { get() { throw new Error(name + " touched"); } });
    Math.random = () => { throw new Error("Math.random touched"); };
    Date = new Proxy(Date, { get() { throw new Error("Date touched"); }, construct() { throw new Error("Date touched"); } });
    var self = globalThis;`, ctx);
  const G = load(ctx);
  const run = (api) => JSON.stringify([api.analyze(api.defaultInputs()), api.toCSV(third(3, { delay: 0.1 })), api.selfTests()]);
  assert.equal(run(G), run(G));
  assert.equal(run(G), run(F));
});

// The stub is flat YAML: one `key: value` per line, values plain, double-quoted or a flow list.
const parseStub = (text) => Object.fromEntries(text.split("\n").filter((l) => l.trim() && !l.startsWith("#")).map((l) => {
  const i = l.indexOf(": "), v = l.slice(i + 2).trim();
  return [l.slice(0, i), v.startsWith("[") ? v.slice(1, -1).split(",").map((s) => s.trim()) : v.startsWith('"') ? JSON.parse(v) : v];
}));

test("the delivered page is a single file that loads no external resources", () => {
  assert.doesNotMatch(html, /<script[^>]+src=|<link[^>]+stylesheet|https?:\/\/(?!www\.w3\.org)/);
});

test("page registers the WebMCP tools its site stub declares", async () => {
  const stub = parseStub(await readFile(new URL("../data/visuals/frequency-response.yaml", import.meta.url), "utf8"));
  assert.equal(stub.html_path, "visuals/frequency-response/index.html");
  const names = stub.webmcp_tools;
  const inert = () => new Proxy(function () {}, {
    get: (t, k) => (k === "modelContext" ? undefined : k === Symbol.iterator ? [][Symbol.iterator] : k === Symbol.toPrimitive ? () => 0 : inert()),
    set: () => true, apply: () => inert(), construct: () => inert(),
  });
  const tools = [];
  const ctx = vm.createContext({
    document: inert(), addEventListener() {}, requestAnimationFrame() {}, cancelAnimationFrame() {}, getComputedStyle: inert(),
    navigator: { modelContext: { registerTool: (t) => tools.push(t) } }, Blob: function () {}, URL: inert(),
  });
  ctx.self = ctx; ctx.window = ctx;
  for (const m of html.matchAll(/<script id="[^"]+">([\s\S]*?)<\/script>/g)) vm.runInContext(m[1], ctx);
  assert.deepEqual(tools.map((t) => t.name), names);
  const call = async (name, input) => JSON.parse((await tools.find((t) => t.name === name).execute(input)).content[0].text);
  const a = await call("analyze_loop", third(6));
  close(a.phase_crossovers[0].gmDb, 0, 1e-9, "analyze_loop GM");
  close(a.phase_crossovers[0].w, Math.SQRT2, 1e-9, "analyze_loop ω_pc");
  assert.match((await call("analyze_loop", { K: 0 })).errors[0].message, /non-zero/);
  const cur = await call("get_current_system", {});
  assert.equal(cur.inputs.K, 3);
  assert.equal(cur.closed_loop.verdict, "stable");
  const t = await call("run_self_tests", {});
  assert.equal(t.passed, t.total);
  const meta = await call("get_metadata", {});
  assert.match(meta.disclaimer, /EXPLORATION ONLY/);
  assert.equal(meta.thresholdDefaults.source, "unsourced default");
});
