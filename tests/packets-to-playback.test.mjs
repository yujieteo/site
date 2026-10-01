import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import { assertButtonsExport, assertInlined, assertStandardDeck, assertTemplateCopy, openPage, read } from "./data-visuals-beamdswitch.mjs";

const html = read("visuals/packets-to-playback/index.html");
const engine = /<script id="packets-to-playback-engine">\n([\s\S]*?)<\/script>/.exec(html)[1];
const load = () => { const ctx = {}; ctx.self = ctx; vm.runInNewContext(engine, ctx); return ctx.PacketsPlayback; };
const P = load();
const T = (await import("node:module")).createRequire(import.meta.url)("../templates/beamdswitch.js");
const plain = (v) => JSON.parse(JSON.stringify(v));
const close = (a, b, tol, what) => assert.ok(Math.abs(a - b) <= tol, `${what}: ${a} vs ${b} (tolerance ${tol})`);

/* Every number reachable from a value is finite: no NaN or Infinity anywhere (null is allowed). */
function finite(v, path = "") {
  if (typeof v === "number") assert.ok(Number.isFinite(v), `${path} is ${v}`);
  else if (ArrayBuffer.isView(v)) v.forEach((x, i) => finite(x, `${path}[${i}]`));
  else if (Array.isArray(v)) v.forEach((x, i) => finite(x, `${path}[${i}]`));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) finite(x, `${path}.${k}`);
}

test("special functions match reference values", () => {
  close(P.Phi(0), 0.5, 1e-7, "Φ(0)");
  close(P.Phi(1.959963985), 0.975, 1e-7, "Φ(1.96)");
  close(P.Phi(-6), 9.865876e-10, 1e-15, "Φ(−6) far in the tail");
  for (const p of [1e-6, 0.01, 0.3, 0.5, 0.9, 0.999]) close(P.Phi(P.PhiInv(p)), p, p * 1e-6, `Φ(Φ⁻¹(${p}))`);
  close(P.studentCdf(2.776445, 4), 0.975, 1e-6, "t₄ 97.5% point");
  close(P.studentCdf(-12.7062, 1), 0.025, 1e-6, "Cauchy 2.5% point");
  close(P.studentTail(1, 4), 0.1869505, 1e-6, "t₄ upper tail at 1");
  close(P.lgamma(5), Math.log(24), 1e-10, "log Γ(5)");
});

test("the default live football decision is 1080p with finite, ordered outputs", () => {
  const e = P.evaluate(P.defaults());
  assert.equal(e.s.preset, "football");
  assert.equal(e.best.id, "1080p");
  assert.equal(P.headline(e).verb, "Stay at 1080p");
  finite(plain(e));
  for (let i = 1; i < e.rungs.length; i++) {
    assert.ok(e.rungs[i - 1].stall >= e.rungs[i].stall, "a higher bitrate never stalls less");
    assert.ok(e.rungs[i - 1].quality > e.rungs[i].quality, "a higher bitrate always looks better");
    assert.ok(e.rungs[i - 1].tMedian > e.rungs[i].tMedian);
  }
  for (const r of e.rungs) close(r.utility, r.quality - e.s.alpha * r.stall - e.s.beta * r.latency, 1e-12, `U(${r.label})`);
  assert.equal(P.describe(e), `Live football. Recommended next quality 1080p. At 1080p: segment time about ${P.secs(e.best.tMedian)}, stall probability ${P.pct(e.best.stall, 4096)}, expected live delay ${P.secs(e.best.latency)}.`);
});

test("the three presets weigh quality, stalls and latency differently", () => {
  const movie = P.evaluate({ preset: "movie" }), call = P.evaluate({ preset: "call" }), live = P.evaluate({ preset: "football" });
  assert.equal(movie.best.id, "2160p", "a 30 s buffer makes 4K safe enough");
  assert.equal(call.best.id, "480p", "a call sacrifices quality for continuity");
  assert.ok(call.s.beta > live.s.beta && live.s.beta > movie.s.beta);
  assert.deepEqual(plain(P.RUNGS.map((r) => r.mbps)), [18, 7, 4, 2]);
});

test("outputs are deterministic for the fixed seed", () => {
  const Q = load(), x = { family: "pareto", param: 2.4, rho: 0.9, mbps: 6 };
  assert.deepEqual(plain(Q.evaluate(x)), plain(P.evaluate(x)), "a fresh engine gives the same decision");
  assert.deepEqual(Array.from(Q.trace(Q.family(x), 256)), Array.from(P.trace(P.family(x), 256)), "the same trace");
  const strip = (f) => f.levels.map(({ data, ...rest }) => rest);
  assert.deepEqual(plain(strip(Q.flow(x))), plain(strip(P.flow(x))), "the same RG flow");
  assert.deepEqual(plain(Q.bottleneck(x).candidates), plain(P.bottleneck(x).candidates), "the same bottleneck estimates");
  assert.deepEqual(plain(Q.playback(x, "1080p")), plain(P.playback(x, "1080p")));
});

test("edge cases give finite numbers and say what is happening", () => {
  const cases = [
    [{ cv: 0 }, "deterministic"], [{ buffer: 0 }, "buffer"], [{ mbps: 0.1 }, "no-safe"], [{ mbps: 500 }, "all-safe"],
    [{ family: "pareto", param: 2.1 }, "unstable"], [{ family: "student", param: 2.1, rho: 0.98 }, "unstable"],
    [{ loss: 0.2, buffer: 0.01, latency: 120 }, null], [{ rho: 5, cv: -1, mbps: "abc", buffer: "1e9", family: "toString", preset: "__proto__" }, null],
  ];
  for (const [x, note] of cases) {
    const e = P.evaluate(x), what = JSON.stringify(x);
    finite(plain(e), what);
    if (note) assert.ok(e.notes.some((n) => n.kind === note), `${what} notes ${note}`);
    finite(plain(P.truncatedStall(x, 3, "1080p")), what);
    finite(plain(P.flow(x).levels.map(({ data, g2, gGrad, ...r }) => ({ ...r, g2: g2 ?? 0, gGrad: gGrad ?? 0 }))), what);
    finite(plain(P.tilt(x, -2)), what); finite(plain(P.tilt(x, 3)), what);
    finite(plain(P.scaling(x)), what);
    finite(plain(P.playback(x, "2160p")), what);
    finite(plain(P.packets(x)), what);
    finite(plain(P.clt(x).levels.map(({ data, ...r }) => r)), what);
    finite(plain(P.bottleneck(x).candidates), what);
    assert.ok(T.deck(P.report(x)).length > 0, what);
  }
  const det = P.evaluate({ cv: 0 });
  assert.ok(det.rungs.every((r) => r.stall === 0 || r.stall === 1), "a deterministic network either always or never stalls");
  assert.equal(P.flow({ cv: 0 }).levels[0].g2, null, "zero variance: no division by zero, the coupling is undefined");
  assert.ok(P.evaluate({ buffer: 0 }).rungs.every((r) => r.stall === 1), "an empty buffer stalls every rung");
  const low = P.evaluate({ mbps: 0.1 });
  assert.ok(low.rungs.at(-1).stall > 0.25 && low.best.id === "480p", "very low bandwidth: the least bad rung, flagged as unsafe");
  const high = P.evaluate({ mbps: 500 });
  assert.equal(high.best.id, "2160p", "very high bandwidth: quality decides");
  assert.equal(P.scenario({ rho: 5 }).rho, 0.98, "persistence is kept below 1");
  assert.equal(P.scenario({ family: "student", param: 1 }).param, 2.1, "the tail keeps a finite variance");
  assert.equal(P.quartic(Infinity).lambda, 0);
});

test("cumulants from the derivatives of W match direct moments", () => {
  for (const x of [{}, { family: "gaussian", rho: 0.3 }, { family: "pareto" }, { family: "lognormal", cv: 0.6 }]) {
    const t0 = P.tilt(x, 0), xs = t0.xs, n = xs.length, mean = xs.reduce((a, b) => a + b, 0) / n;
    const v = xs.reduce((a, b) => a + (b - mean) ** 2, 0) / n, k3 = xs.reduce((a, b) => a + (b - mean) ** 3, 0) / n;
    close(t0.W, 0, 1e-12, "W(0) = log 1");
    close(t0.dW, mean, 1e-9, "W′(0) is the mean");
    close(t0.d2W, v, 1e-9, "W″(0) is the variance");
    close(t0.d3W, k3, 1e-6 * Math.abs(k3) + 1e-9, "W‴(0) is the third cumulant");
    for (const js of [-2, -0.5, 1, 2.5]) {
      const t = P.tilt(x, js), h = 1e-4 / t.sd;
      close((P.W(xs, t.j + h) - P.W(xs, t.j - h)) / (2 * h), t.dW, 1e-5 * t.sd, `W′(J) = ⟨X⟩_J at Jσ = ${js}`);
      close((P.W(xs, t.j + h) - 2 * t.W + P.W(xs, t.j - h)) / (h * h), t.d2W, 1e-3 * t.d2W, `W″(J) = Var_J(X) at Jσ = ${js}`);
      // Direct tilted moments, independently of cumulantsAt.
      const w = xs.map((y) => Math.exp(t.j * (y - mean))), z = w.reduce((a, b) => a + b, 0), m1 = xs.reduce((a, y, i) => a + w[i] * y, 0) / z;
      close(t.dW, m1, 1e-9 * Math.abs(m1), "tilted mean");
    }
  }
  const g = P.tilt({ family: "gaussian", rho: 0, cv: 0.2 }, 0);
  assert.ok(Math.abs(g.d3W) < 0.2 * g.d2W ** 1.5, "a Gaussian has almost no third cumulant");
  assert.ok(P.tilt({ family: "lognormal" }, 1).populationInfinite, "lognormal: the population Z[J] is infinite for J > 0, and the page says so");
  assert.ok(!P.tilt({ family: "gaussian" }, -1).floorBound, "a Gaussian needs no floor warning");
});

test("the Gaussian AR(1) action is exactly g₂ Σ y² + g∇ Σ (Δy)²", () => {
  const r = P.rng(7);
  for (const [sigma, rho] of [[1, 0], [2.5, 0.6], [0.3, 0.95], [1, -0.4]]) {
    const y = Array.from({ length: 50 }, () => r() * 4 - 2), g = P.gaussianCouplings(sigma, rho);
    close(P.ringAction(y, g.g2, g.gGrad), P.ringAR1(y, sigma, rho), 1e-9, `σ = ${sigma}, ρ = ${rho}`);
    if (rho > 0) { const inv = P.couplingsInverse(g.g2, g.gGrad); close(inv.rho, rho, 1e-9, "ρ back"); close(inv.sigma, sigma, 1e-9, "σ back"); }
  }
  assert.equal(P.gaussianCouplings(0, 0.5).deterministic, true);
});

test("Gaussian block aggregation stays Gaussian (CLT as RG); a heavy tail does not", () => {
  const g = P.clt({ family: "gaussian" }, "finite");
  for (const l of g.levels) {
    assert.ok(Math.abs(l.exkurt) < 0.25 && Math.abs(l.skew) < 0.25, `level ${l.level}: kurtosis ${l.exkurt}, skew ${l.skew}`);
    close(l.sd, 1, 0.08, `level ${l.level}: the √2 normalisation keeps unit variance`);
  }
  const flow = P.flow({ family: "gaussian", rho: 0 }).levels;
  for (const l of flow) assert.ok(l.kl < 3 * l.klFloor + 0.01, `independent Gaussian windows: KL ${l.kl} within the noise floor ${l.klFloor}`);
  const t = P.clt({ family: "student", param: 4 }, "finite");
  assert.ok(t.levels[0].exkurt > 2 && t.levels[5].exkurt < 0.5, "finite variance: kurtosis flows toward 0");
  const st = P.clt({}, "stable");
  for (const l of st.levels) assert.ok(l.tailFraction > 100 * st.gaussianTailFraction, `level ${l.level}: the α = 1.5 tail survives (${l.tailFraction})`);
  assert.ok(P.flow({ family: "pareto" }).levels[0].kl > 5 * P.flow({ family: "pareto" }).levels[0].klFloor, "the truncated projection misses a heavy tail");
});

test("heavy tails and persistence raise stall risk where it matters", () => {
  const rows = Object.fromEntries(P.compareFamilies({}).map((r) => [r.family, r]));
  assert.ok(rows.student.stall[1] > rows.gaussian.stall[1] && rows.pareto.stall[1] > rows.student.stall[1], "1080p: heavier tail, more stalls");
  assert.ok(rows.pareto.sd > rows.gaussian.sd, "same middle half, larger variance from the tail");
  assert.ok(P.evaluate({ rho: 0.95 }).rungs[1].stall > 10 * P.evaluate({ rho: 0.3 }).rungs[1].stall, "persistent dips do not average out");
  for (const r of P.compareFamilies({ family: "pareto", param: 3 })) if (r.family === "pareto") assert.equal(r.param, 3, "the scenario's own parameter is used");
});

test("the truncated projection is exact for second-order statistics of a Gaussian AR(1) and labelled an approximation", () => {
  const rho = 0.8, lv = P.flow({ family: "gaussian", rho, cv: 0.2 }).levels;
  // One step from the AR(1) windows is exact for the variance and lag-1 correlation.
  close(lv[1].rho, lv[0].predicted.rho, 0.03, "lag-1 correlation after one step");
  close(lv[1].sd, lv[0].predicted.sd, 0.03 * lv[0].sd, "sd after one step");
  // After that the blocks are no longer AR(1): the exact lag-1 correlation of 4-window and 8-window means
  // differs from what the truncated projection predicts, and the data follow the exact value.
  const exact = (b) => { let v = 0, c = 0; for (let i = 0; i < b; i++) for (let j = 0; j < b; j++) { v += rho ** Math.abs(i - j); c += rho ** (b + j - i); } return c / v; };
  for (const l of [2, 3]) {
    close(lv[l].rho, exact(2 ** l), 0.04, `level ${l} follows the exact aggregation`);
    assert.ok(Math.abs(lv[l - 1].predicted.rho - exact(2 ** l)) > 0.04, `level ${l}: the AR(1) projection misses (${lv[l - 1].predicted.rho} vs ${exact(2 ** l)})`);
  }
  const heavy = P.flow({}).levels;
  assert.ok(heavy[0].exkurt > 1 && heavy.slice(0, -1).every((l) => l.predicted.exkurt === 0), "the projection carries no tail at all");
  const near = P.truncatedStall({}, 0, "1080p").stall, full = P.evaluate({}).rungs[1].stall;
  assert.ok(near < full, "dropping the tail understates the risk");
  assert.ok(P.truncatedStall({}, 6, "1080p").coarser && P.truncatedStall({}, 6, "1080p").stall < near, "coarser than a segment: the risk is understated further");
  assert.match(html, /Truncated projection/);
  assert.match(html, /not the true marginal/);
});

test("scaling: mean relevant, variance marginal, skew and kurtosis irrelevant around the Gaussian", () => {
  assert.deepEqual([1, 2, 3, 4].map((n) => P.classify(P.eigen(n))), ["relevant", "marginal", "irrelevant", "irrelevant"]);
  const sc = Object.fromEntries(P.scaling({ family: "student", rho: 0 }).map((o) => [o.id, o]));
  assert.equal(sc.kurtosis.measuredClass, "irrelevant", "independent windows: kurtosis halves per step");
  assert.equal(sc.variance.measuredClass, "marginal");
  const pers = Object.fromEntries(P.scaling({}).map((o) => [o.id, o]));
  assert.equal(pers.variance.measuredClass, "relevant", "persistence: block variance falls slower than 1/n");
  assert.ok(pers.kurtosis.measured > sc.kurtosis.measured, "persistence slows the decay of the tail");
});

test("the quartic expansion agrees with exact integration at small coupling", () => {
  const q = P.quartic(0);
  close(q.x2, 1, 1e-9, "Gaussian variance"); close(q.k4, 0, 1e-8, "no connected four-point function");
  for (const l of [0.01, 0.05]) {
    const r = P.quartic(l);
    assert.ok(Math.abs(r.x2 - r.x2First) < l * l, `⟨x²⟩ to first order at λ = ${l}`);
    assert.ok(Math.abs(r.k4 - r.k4First) < 5 * l * l, `κ₄ to first order at λ = ${l}`);
  }
});

test("the bottleneck trades bits kept for bits predicted", () => {
  const ib = P.bottleneck({});
  assert.equal(ib.candidates.length, 5);
  const [z1, z2, z3, , z5] = ib.candidates;
  assert.ok(z1.iZX < z2.iZX && z2.iZX < z3.iZX && z3.iZX < z5.iZX, "richer summaries keep more bits");
  for (const c of ib.candidates) { assert.ok(c.iZX <= c.maxZX + 0.01, `${c.id}: H(Z) ≤ log₂ states`); assert.ok(c.iZY <= ib.hY + 0.01, `${c.id}: I(Z;Y) ≤ H(Y)`); }
  assert.ok(z5.iZY > z1.iZY, "the most recent half second predicts the next segment");
  assert.equal(P.ibChoice(ib, 0).id, "Z1", "at β = 0 the bottleneck keeps the least");
  assert.equal(P.ibChoice(ib, 1e4).id, ib.candidates.reduce((a, b) => (b.iZY > a.iZY ? b : a)).id, "at large β it keeps the most predictive");
  assert.deepEqual(plain(P.yBins(P.scenario({})).labels), ["fast", "keeps up", "drains the buffer", "stall"]);
});

test("raw.json and the catalogue stub match the engine", () => {
  const raw = JSON.parse(read("visuals/packets-to-playback/raw.json"));
  assert.deepEqual(raw.initial, plain(P.defaults()));
  for (const [k, v] of Object.entries({ rungs: P.RUNGS, variability: P.VARIABILITY, persistence: P.PERSISTENCE, tails: P.TAILS, families: P.FAMILIES, presets: P.PRESETS, limits: P.LIMITS, model: P.MODEL, operators: P.OPERATORS, regimes: P.REGIMES, bottleneck_candidates: P.CANDIDATES, assumptions: P.ASSUMPTIONS }))
    assert.deepEqual(raw[k], plain(v), k);
  assert.equal(raw.window_seconds, P.WINDOW);
  const stub = read("data/visuals/packets-to-playback.yaml");
  assert.match(stub, /^webmcp_tools: \[get_metadata, get_current_state, evaluate_bitrate, get_rg_flow\]$/m);
  assert.match(stub, /^html_path: visuals\/packets-to-playback\/index\.html$/m);
  assert.match(stub, /^data_path: visuals\/packets-to-playback\/raw\.json$/m);
});

test("the page is one offline file with the metadata and fallback it promises", () => {
  assert.match(html, /<title>From Packets to Playback — Probability, Information and Renormalisation<\/title>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/teoyujie\.org\/visuals\/packets-to-playback">/);
  assert.match(html, /<meta property="og:url" content="https:\/\/teoyujie\.org\/visuals\/packets-to-playback">/);
  assert.match(html, /<meta property="og:title" content="[^"]+">/);
  assert.match(html, /<meta name="description" content="Explore probability, information theory and renormalisation by deciding how a live video stream should adapt to a noisy network\.">/);
  assert.doesNotMatch(html, /<script[^>]+src=|<link[^>]+rel="stylesheet"|@import|fetch\(|XMLHttpRequest|type="module"|serviceWorker|<iframe|<video|<img[^>]+src="http|og:image/);
  assert.match(html, /prefers-reduced-motion/);
  assert.match(html, /prefers-color-scheme:dark/);
  assert.match(html, /<a href="\.\.\/\.\.\/visuals\.html">Visuals<\/a>/, "the site's back link");
  const nojs = /<div id="nojs">([\s\S]*?)\n<\/div>/.exec(html)[1];
  assert.match(nojs, /<i>p<\/i>\(<i>x<\/i>\) = <i>Z<\/i><sup>−1<\/sup> e<sup>−<i>S<\/i>\(<i>x<\/i>\)<\/sup>/, "the identity without JavaScript");
  for (const t of [/need JavaScript/, /What information|<i>P<\/i>\(<i>T<\/i> &gt; <i>B<\/i>\)/, /Coarse-graining/, /RG and the information bottleneck/]) assert.match(nojs, t);
  assert.match(html, /<div id="app" hidden>/, "controls stay hidden without JavaScript");
  assert.match(html, /<\/div>\n\n<section id="dict"/, "the dictionary is static HTML outside the app, so it shows without JavaScript");
  for (const k of ["action", "Z", "W", "J", "cumulant", "cov", "kernel", "marg", "cg", "fixed", "relevant", "irrelevant", "marginal", "kl"]) assert.match(html, new RegExp(`<tr data-key="${k}">`), k);
  assert.ok(Buffer.byteLength(html) < 200 * 1024, `about 200 kB or less (${Buffer.byteLength(html)} bytes)`);
});

const decks = [{}, { preset: "movie" }, { preset: "call" }, { family: "pareto", param: 2.2 }, { family: "lognormal", rho: 0.3 }, { cv: 0 }, { buffer: 0 }, { mbps: 0.1 }, { mbps: 500 }];
test("every scenario's deck opens in beamdswitch as the standard narrated template", () => {
  assertTemplateCopy("packets-to-playback");
  assertInlined(html, "beamdswitch", read("templates/beamdswitch.js"), "packets-to-playback");
  for (const x of decks) {
    const md = T.deck(P.report(x)), what = JSON.stringify(x);
    assertStandardDeck(md, what);
    assert.ok(md.includes(`Recommended: ${P.evaluate(x).best.label}`), what);
  }
});

test("the page boots, its WebMCP tools answer, Reset restores the default, and the deck buttons export the page as set", async () => {
  const page = await openPage("packets-to-playback");
  const tools = page.run("PacketsPlaybackTools");
  assert.deepEqual(plain(tools.map((t) => t.name)), ["get_metadata", "get_current_state", "evaluate_bitrate", "get_rg_flow"]);
  for (const t of tools) assert.equal(t.annotations.readOnlyHint, true);
  const call = async (name, args = {}) => JSON.parse((await tools.find((t) => t.name === name).execute(args)).content[0].text);
  assert.equal((await call("get_current_state")).recommended, "1080p");
  assert.equal((await call("evaluate_bitrate", { preset: "movie" })).recommended, "2160p");
  assert.equal((await call("evaluate_bitrate", { mbps: 0.1 })).rungs.at(-1).stall_probability > 0.25, true);
  const flow = await call("get_rg_flow", {});
  assert.equal(flow.length, 7);
  assert.match(flow[0].approximation, /not the exact marginal/);
  assert.equal((await call("get_metadata")).url, "https://teoyujie.org/visuals/packets-to-playback");
  // Change the throughput through the page's own input handler, then export.
  page.run(`document.getElementById("app").listeners.input[0]({ target: { type: "number", value: "12", dataset: { k: "mbps" } } })`);
  await assertButtonsExport(page, "packets-to-playback", T.deck(P.report({ ...P.defaults(), mbps: 12 })));
  // Reset through the page's own click handler.
  page.run(`document.getElementById("app").listeners.click[0]({ target: { closest: () => ({ dataset: { act: "reset" }, id: "" }) } })`);
  assert.deepEqual((await call("get_current_state")).scenario, plain(P.defaults()));
});
