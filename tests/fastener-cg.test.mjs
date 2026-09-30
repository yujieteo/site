import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { runVerification, HAND_CASES, PROPERTY_CASES } from "../visuals/fastener-cg/src/core/verify.mjs";
import { solve } from "../visuals/fastener-cg/src/core/solve.mjs";
import { examplePattern, addFastener, resolveFastener, clone } from "../visuals/fastener-cg/src/core/model.mjs";
import { convertPattern, convertValue, MM_PER_IN, N_PER_LBF } from "../visuals/fastener-cg/src/core/units.mjs";
import { toJSON, parseJSON, toMarkdown, parseMarkdown, parsePatternFile, normalizePattern } from "../visuals/fastener-cg/src/core/persist.mjs";
import { rectangularArray, staggeredRows, boltCircle, mirror } from "../visuals/fastener-cg/src/core/generators.mjs";
import { buildScene } from "../visuals/fastener-cg/src/core/scene.mjs";
import { fmt } from "../visuals/fastener-cg/src/core/format.mjs";
import { CATALOG } from "../visuals/fastener-cg/src/core/warnings.mjs";
import { registerTools } from "../visuals/fastener-cg/src/ui/webmcp.mjs";
import { brent, solveScale, interactionValue } from "../visuals/fastener-cg/src/core/interaction.mjs";
import { render, bundle } from "../visuals/fastener-cg/build.mjs";

const VIZ = new URL("../visuals/fastener-cg/", import.meta.url);
const close = (a, b, tol = 1e-9, label = "") => assert.ok(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${label} ${a} vs ${b}`);
const ids = (issues) => issues.map((i) => i.id);

function pattern(points, load = {}) {
  const p = examplePattern("N-mm");
  p.fasteners = points.map(([x, y], i) => ({ id: `F${i + 1}`, label: "", x, y, overrides: {} }));
  p.load = { appliedPlate: "P1", point: { x: 0, y: 0, z: 0 }, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, ...load };
  return p;
}

test("the whole in-app verification set passes", () => {
  const v = runVerification();
  for (const r of v.results) assert.ok(r.pass, `${r.id} ${r.error || r.checks.filter((c) => !c.pass).map((c) => `${c.label}: ${c.actual} vs ${c.expected}`).join("; ")}`);
  assert.deepEqual(v.results.map((r) => r.id), ["VC-01", "VC-02", "VC-03", "VC-04", "VC-05", "VC-06", "VC-07", "VC-09", "P-01", "P-02", "P-03", "P-04", "P-05", "P-06", "P-07", "P-08", "P-09"]);
  assert.equal(HAND_CASES.length + PROPERTY_CASES.length, v.results.length);
});

test("VC-01 independently: 2×2 bracket, Fy = −10 000 N at (150, 0, 0)", () => {
  const r = solve(examplePattern("N-mm"));
  assert.ok(r.ok);
  assert.equal(r.props.J, 13600);
  assert.equal(r.reduced.shear.Mz, -1.5e6);
  const at = (x, y) => r.fasteners.find((f) => f.x === x && f.y === y);
  // (50, 30): Rtx = 1.5e6·30/13600, Rty = −1.5e6·50/13600, Rdy = −2500
  close(at(50, 30).shear.Rtx, 1.5e6 * 30 / 13600);
  close(at(50, 30).shear.Rty, -1.5e6 * 50 / 13600);
  close(at(50, 30).shear.Rs, Math.hypot(1.5e6 * 30 / 13600, -2500 - 1.5e6 * 50 / 13600));
  assert.ok(Math.abs(at(50, 30).shear.Rs - 8670.8) <= 0.1);
  assert.ok(Math.abs(at(-50, -30).shear.Rs - 4476.2) <= 0.1);
});

test("load reduction carries the zp terms into the bending moments", () => {
  // Fy at height zp gives Mx,a = −zp·Fy; Fz at an offset gives both bending moments.
  const r = solve(pattern([[50, 30], [50, -30], [-50, 30], [-50, -30]], { point: { x: 20, y: -10, z: 40 }, Fx: 100, Fy: 300, Fz: 500, Mx: 7, My: 11, Mz: 13 }));
  assert.ok(r.ok);
  close(r.reduced.axial.Mx, 7 + (-10) * 500 - 40 * 300);
  close(r.reduced.axial.My, 11 + 40 * 100 - 20 * 500);
  close(r.reduced.shear.Mz, 13 + 20 * 300 - (-10) * 100);
});

test("stiffness weights separate the three centroids and weight J and I", () => {
  const p = pattern([[0, 0], [100, 0], [0, 60]]);
  p.fasteners[1].overrides = { ks: 3 };
  p.fasteners[2].overrides = { ka: 2, area: 300 };
  const r = solve(p);
  assert.ok(r.ok);
  close(r.props.Cs.x, 300 / 5); close(r.props.Cs.y, 60 / 5);
  close(r.props.Ca.x, 100 / 4); close(r.props.Ca.y, 120 / 4);
  const A = 113.1;
  close(r.props.Cg.x, (100 * A) / (2 * A + 300)); close(r.props.Cg.y, (60 * 300) / (2 * A + 300));
  const Cs = r.props.Cs, Ca = r.props.Ca;
  close(r.props.J, [[0, 0, 1], [100, 0, 3], [0, 60, 1]].reduce((s, [x, y, k]) => s + k * ((x - Cs.x) ** 2 + (y - Cs.y) ** 2), 0));
  close(r.props.Ixx, [[0, 0, 1], [100, 0, 1], [0, 60, 2]].reduce((s, [, y, k]) => s + k * (y - Ca.y) ** 2, 0));
  assert.ok(ids(r.issues).includes("N-002"));
  assert.ok(r.props.centroids.every((c) => c.coincidentWith.length === 0));
  assert.ok(r.closure.pass);
});

test("coincident centroids stay three named items with a coincident tag", () => {
  const r = solve(examplePattern("N-mm"));
  assert.deepEqual(r.props.centroids.map((c) => c.key), ["Cs", "Ca", "Cg"]);
  assert.deepEqual(r.props.centroids.map((c) => c.coincidentWith), [["Ca", "Cg"], ["Cs", "Cg"], ["Cs", "Ca"]]);
  assert.ok(!ids(r.issues).includes("N-002"));
});

test("principal axes of a rotated rectangle", () => {
  const t = 30 * Math.PI / 180;
  const pts = [[60, 20], [60, -20], [-60, 20], [-60, -20]].map(([x, y]) => [x * Math.cos(t) - y * Math.sin(t), x * Math.sin(t) + y * Math.cos(t)]);
  const r = solve(pattern(pts));
  close(r.props.principal.I1, 4 * 3600);
  close(r.props.principal.I2, 4 * 400);
  // I1 (larger) is about the axis the fasteners are farthest from: perpendicular to the long side.
  close(r.props.principal.thetaDeg, -60); // 120° is the same line; angles are reported in (−90°, 90°]
});

test("errors block results and name the field or fastener", () => {
  const empty = pattern([]);
  let r = solve(empty);
  assert.equal(r.ok, false);
  assert.deepEqual(ids(r.issues.filter((i) => i.tier === "error")), ["E-001"]);
  assert.equal(r.props, undefined);

  const p = examplePattern("N-mm");
  p.fasteners[1].x = "12a";
  p.fasteners[2].overrides.ks = 0;
  p.load.Fz = null;
  p.defaults.ka = -1;
  r = solve(p);
  assert.equal(r.ok, false);
  const e2 = r.issues.filter((i) => i.id === "E-002");
  assert.deepEqual(e2.map((i) => [i.fastener, i.field]), [["F2", "x"], [null, "load.Fz"]]);
  const e3 = r.issues.filter((i) => i.id === "E-003");
  assert.deepEqual(e3.map((i) => [i.fastener, i.field]), [[null, "defaults.ka"], ["F3", "ks"]]);
});

test("single fastener: W-001, and torsion it cannot resist fails closure (E-010)", () => {
  let r = solve(pattern([[10, 10]], { point: { x: 10, y: 10, z: 0 }, Fy: 100 }));
  assert.ok(r.ok);
  assert.ok(ids(r.issues).includes("W-001"));
  r = solve(pattern([[10, 10]], { point: { x: 50, y: 10, z: 0 }, Fy: 100 }));
  assert.equal(r.ok, false);
  assert.ok(ids(r.issues).includes("E-010"));
  assert.match(r.issues.find((i) => i.id === "E-010").detail, /J = 0/);
});

test("collinear patterns: W-002 when the unresolved moment is zero, E-011 when it is not", () => {
  const line = [[-60, 0], [0, 0], [60, 0]];
  let r = solve(pattern(line, { My: 36000 }));
  assert.ok(r.ok);
  assert.ok(ids(r.issues).includes("W-002"));
  close(r.fasteners[0].axial.T, 36000 * 60 / 7200);
  close(r.fasteners[2].axial.T, -36000 * 60 / 7200);
  assert.ok(r.closure.pass);
  r = solve(pattern(line, { Mx: 1000 }));
  assert.equal(r.ok, false);
  assert.ok(ids(r.issues).includes("E-011"));
  // A load above the line in y transfers Fz into Mx about the line: also unresolved.
  r = solve(pattern(line, { point: { x: 0, y: 25, z: 0 }, Fz: 100 }));
  assert.ok(ids(r.issues).includes("E-011"));
  // Diagonal line: bending about the perpendicular axis is fine.
  const diag = [[-30, -30], [0, 0], [30, 30]];
  r = solve(pattern(diag, { Mx: -500, My: 500 }));
  assert.ok(r.ok, JSON.stringify(r.issues));
  assert.ok(r.closure.pass);
});

test("load warnings and notes: W-003, W-004, W-005, W-016, N-001, W-019", () => {
  let r = solve(pattern([[0, 10], [0, -10], [10, 0]]));
  assert.ok(ids(r.issues).includes("W-003"));
  r = solve(pattern([[0, 0], [20000, 0], [0, 20000]], { Fy: 5 }));
  assert.ok(ids(r.issues).includes("W-004"));
  r = solve(pattern([[50, 30], [50, -30], [-50, 30], [-50, -30]], { Fy: 5 }));
  assert.ok(ids(r.issues).includes("N-001"));
  assert.ok(!ids(r.issues).includes("W-005"));
  r = solve(pattern([[50, 30], [50, -30], [-50, 30], [-50, -30]], { Mx: 12000 }));
  assert.ok(ids(r.issues).includes("W-005"));
  assert.ok(ids(r.issues).includes("W-016"));
  assert.deepEqual(r.fasteners.filter((f) => f.axial.unloading).map((f) => f.id), ["F2", "F4"]);
  r = solve(pattern([[50, 30], [50, -30], [-50, 30], [-50, -30]], { Fz: 400 }));
  assert.ok(!ids(r.issues).includes("W-016"));
  const many = pattern(Array.from({ length: 201 }, (_, i) => [i % 20 * 10, Math.floor(i / 20) * 10]), { Fy: 1 });
  assert.ok(ids(solve(many).issues).includes("W-019"));
});

test("every issue id raised by the core is in the catalogue", () => {
  const seen = new Set();
  for (const c of [...HAND_CASES]) c.run();
  for (const p of [pattern([]), pattern([[1, 1]], { Mz: 5 }), pattern([[-1, 0], [1, 0]], { Mx: 1 })]) for (const i of solve(p).issues) seen.add(i.id);
  for (const id of seen) assert.ok(id in CATALOG, id);
  assert.equal(Object.keys(CATALOG).length, 14 + 20 + 8);
});

test("unit switching converts in place to 12 significant figures and round-trips", () => {
  const p = examplePattern("N-mm");
  const q = convertPattern(p, "in-lbf");
  assert.equal(q.unitSystem, "in-lbf");
  assert.equal(q.fasteners[0].x, Number((50 / MM_PER_IN).toPrecision(12)));
  assert.equal(q.load.Fy, Number((-10000 / N_PER_LBF).toPrecision(12)));
  assert.equal(q.defaults.area, Number((113.1 / MM_PER_IN ** 2).toPrecision(12)));
  assert.equal(q.defaults.icr.mu, Number((0.3937 * MM_PER_IN).toPrecision(12)));
  assert.equal(q.defaults.ks, 1);
  assert.equal(convertValue(1, "stress", "N-mm", "in-lbf"), Number((MM_PER_IN ** 2 / N_PER_LBF).toPrecision(12)));
  const back = convertPattern(q, "N-mm");
  close(back.fasteners[0].x, 50, 1e-11);
  close(back.load.Fy, -10000, 1e-11);
  // Results are physically identical: stresses in the new units, same ratios.
  const a = solve(p), b = solve(q);
  close(b.fasteners[0].shear.Rs * N_PER_LBF, a.fasteners[0].shear.Rs, 1e-10);
  close(b.props.J * MM_PER_IN ** 2, a.props.J, 1e-10);
});

test("JSON round-trips inputs exactly and stores no results", () => {
  const p = examplePattern("N-mm");
  p.fasteners[2].overrides = { ks: 2.5, icr: { rult: 5000 } };
  p.fasteners[2].label = "top | left";
  addFastener(p, 1 / 3, -7.25);
  const text = toJSON(p);
  const parsed = parseJSON(text);
  assert.deepEqual(parsed.issues, []);
  assert.equal(toJSON(parsed.pattern), text);
  assert.equal(parsed.pattern.fasteners[4].x, 1 / 3);
  assert.ok(!/"results"|"props"/.test(text));
  assert.equal(resolveFastener(parsed.pattern, parsed.pattern.fasteners[2]).icr.mu, 0.3937);
});

test("fastener ids are never reused within a pattern", () => {
  const p = examplePattern("N-mm");
  const a = addFastener(p, 0, 0);
  p.fasteners = p.fasteners.filter((f) => f.id !== a.id);
  const b = addFastener(p, 1, 1);
  assert.equal(a.id, "F5");
  assert.equal(b.id, "F6");
  const reloaded = parseJSON(toJSON(p)).pattern;
  assert.equal(addFastener(reloaded, 2, 2).id, "F7");
});

test("import: newer schema refused (E-013), every problem listed, optional fields defaulted (W-018)", () => {
  const newer = parseJSON(JSON.stringify({ ...JSON.parse(toJSON(examplePattern())), schemaVersion: 2 }));
  assert.equal(newer.pattern, null);
  assert.deepEqual(ids(newer.issues), ["E-013"]);
  assert.match(newer.issues[0].detail, /newer/);

  const bad = JSON.parse(toJSON(examplePattern()));
  bad.fasteners[0].x = "left";
  bad.fasteners[1].id = "F1";
  bad.unitSystem = "furlongs";
  bad.settings.axialMethod = "magic";
  const r = parseJSON(JSON.stringify(bad));
  assert.equal(r.pattern, null);
  assert.equal(r.errors.length, 4, r.errors.join("\n"));

  const sparse = { schemaVersion: 1, unitSystem: "in-lbf", fasteners: [{ id: "A", x: 1, y: 2 }, { id: "B", x: -1, y: 2 }], load: { Fy: -100 } };
  const s = parseJSON(JSON.stringify(sparse));
  assert.ok(s.pattern);
  assert.equal(s.pattern.unitSystem, "in-lbf");
  assert.equal(s.pattern.fasteners[0].x, 1, "no silent unit conversion");
  assert.equal(s.pattern.defaults.diameter, Number((12 / MM_PER_IN).toPrecision(12)), "app defaults expressed in the file's units");
  const w = s.issues.find((i) => i.id === "W-018");
  assert.match(w.detail, /settings/);
  assert.match(w.detail, /load\.point/);
  assert.equal(parseJSON("{nope").issues[0].id, "E-013");
  assert.equal(normalizePattern([]).issues[0].id, "E-013");
});

test("the autosaved working pattern restores blank and out-of-range fields as entered; file import stays strict", () => {
  const p = examplePattern("N-mm");
  p.fasteners[0].x = null;
  p.fasteners[1].y = "abc";
  p.fasteners[2].overrides = { area: null };
  p.load.Fx = null;
  p.settings.precision = 20;
  const saved = toJSON(p);
  assert.equal(parseJSON(saved).pattern, null, "file import rejects it");

  const restored = parseJSON(saved, { lenient: true });
  assert.ok(restored.pattern, restored.errors.join("\n"));
  assert.deepEqual(restored.pattern, JSON.parse(saved));
  const flagged = solve(restored.pattern).issues.filter((i) => i.id === "E-002").map((i) => i.field);
  for (const field of ["x", "y", "area", "load.Fx"]) assert.ok(flagged.includes(field), `E-002 for ${field}`);

  assert.ok(normalizePattern(JSON.parse(saved), { lenient: true }).pattern, "library entries restore too");
  assert.equal(parseJSON("{nope", { lenient: true }).pattern, null);
  const corrupt = JSON.parse(saved);
  corrupt.load = [];
  assert.equal(parseJSON(JSON.stringify(corrupt), { lenient: true }).pattern, null);
});

test("Markdown export holds readable tables and one checksummed JSON block that import prefers", () => {
  const p = examplePattern("N-mm");
  p.fasteners[0].overrides = { ka: 2 };
  p.settings.interaction = { a: 1.5, b: 2.5 };
  const md = toMarkdown(p, solve(p), { version: "test" });
  assert.equal((md.match(/```json/g) || []).length, 1);
  assert.match(md, /## Fasteners/);
  assert.match(md, /## Centroids/);
  assert.match(md, /Preliminary sizing — verify against the governing specification\./);
  const back = parseMarkdown(md);
  assert.equal(back.source, "json");
  assert.deepEqual(back.issues, []);
  assert.equal(toJSON(back.pattern), toJSON(p));
  assert.equal(parsePatternFile(md, "x.md").source, "json");
  assert.equal(parsePatternFile(md.replace(/\n/g, "\r\n"), "x.md").source, "json");
});

test("Markdown fallback: a hand-edited JSON block falls back to the tables and lists what was lost", () => {
  const p = examplePattern("N-mm");
  p.fasteners[3].overrides = { area: 50 };
  p.settings.interaction = { a: 1, b: 1 };
  const md = toMarkdown(p, solve(p)).replace('"name": "Bracket A - 2x2"', '"name": "Edited"');
  const r = parseMarkdown(md);
  assert.equal(r.source, "tables");
  assert.ok(r.pattern);
  assert.equal(r.pattern.name, "Bracket A - 2x2");
  assert.deepEqual(r.pattern.fasteners.map((f) => [f.id, f.x, f.y]), p.fasteners.map((f) => [f.id, f.x, f.y]));
  assert.deepEqual(r.pattern.fasteners[3].overrides, { area: 50 });
  assert.equal(r.pattern.load.Fy, -10000);
  assert.equal(r.pattern.load.point.x, 150);
  assert.equal(r.pattern.settings.interaction.a, 2, "settings revert to app defaults");
  const w = r.issues.find((i) => i.id === "W-018");
  assert.match(w.detail, /checksum mismatch/);
  assert.match(w.detail, /interaction/);
  // No block and no tables: refused.
  assert.equal(parseMarkdown("# nothing here").issues[0].id, "E-013");
  // No JSON block at all: tables only.
  const noBlock = md.replace(/<!--[\s\S]*$/, "");
  assert.equal(parseMarkdown(noBlock).source, "tables");
});

test("generators", () => {
  assert.deepEqual(rectangularArray({ nx: 2, ny: 2, sx: 100, sy: 60 }), [{ x: -50, y: 30 }, { x: 50, y: 30 }, { x: -50, y: -30 }, { x: 50, y: -30 }]);
  const circle = boltCircle({ n: 6, r: 50 });
  assert.equal(circle.length, 6);
  for (const p of circle) close(Math.hypot(p.x, p.y), 50, 1e-11);
  const r = solve(pattern(circle.map((p) => [p.x, p.y])));
  close(r.props.J, 15000, 1e-10);
  const st = staggeredRows({ rows: 2, perRow: 3, sx: 60, sy: 40 });
  assert.equal(st.length, 6);
  close(st.reduce((s, p) => s + p.x, 0) / 6, 0, 1e-12);
  assert.equal(st[3].x - st[0].x, 30);
  const m = mirror([{ x: 10, y: 5 }, { x: 0, y: 7 }], { axis: "x", c: 0 });
  assert.deepEqual(m, [{ x: -10, y: 5 }], "the image on the mirror line coincides with its source and is skipped");
  assert.deepEqual(mirror([{ x: 10, y: 5 }], { axis: "y", c: 1, existing: [] }), [{ x: 10, y: -3 }]);
  assert.throws(() => rectangularArray({ nx: 0, ny: 2, sx: 1, sy: 1 }));
});

test("scene model places centroids, load point and vectors through one transform", () => {
  const p = examplePattern("N-mm");
  const r = solve(p);
  const s = buildScene(p, r, { width: 800, height: 500 });
  const { scale, ox, oy } = s.transform;
  const scr = (w) => ({ x: ox + scale * w.x, y: oy - scale * w.y });
  for (const c of s.centroids) assert.deepEqual(c.screen, scr(c.world));
  assert.deepEqual(s.load.screen, scr({ x: 150, y: 0 }));
  for (const v of s.vectors) {
    assert.deepEqual(v.screen.from, scr(v.world.from));
    assert.deepEqual(v.screen.to, scr(v.world.to));
  }
  const reactions = s.vectors.filter((v) => v.kind === "reaction");
  assert.equal(reactions.length, 4);
  // Reaction vectors are parallel to the fastener load and scale with it.
  for (const v of reactions) {
    const f = r.fasteners.find((q) => q.id === v.id);
    const dx = v.world.to.x - v.world.from.x, dy = v.world.to.y - v.world.from.y;
    close(dx * f.shear.Ry - dy * f.shear.Rx, 0, 1e-9);
  }
  assert.deepEqual(s.centroids.map((c) => c.key), ["Cs", "Ca", "Cg"]);
  const pinned = buildScene(p, r, { width: 800, height: 500 }, { transform: { scale: 2, ox: 10, oy: 20 } });
  assert.deepEqual(pinned.load.screen, { x: 310, y: 20 });
});

test("display formatting", () => {
  assert.equal(fmt(8670.8123), "8671");
  assert.equal(fmt(-1.5e6), "−1500000");
  assert.equal(fmt(1e-12, 4, 1000), "0");
  assert.equal(fmt(0.000012345, 3), "1.23e-5");
  assert.equal(fmt(NaN), "—");
});

test("WebMCP tools answer from the same core", async () => {
  const tools = [];
  globalThis.document = { modelContext: { registerTool: (t) => tools.push(t) } };
  try {
    const p = examplePattern("N-mm");
    const ok = registerTools({ current: () => ({ pattern: p, result: solve(p) }), markdown: (q) => toMarkdown(q, solve(q)) });
    assert.ok(ok);
    assert.deepEqual(tools.map((t) => t.name), ["get_metadata", "get_current_pattern", "analyze_pattern", "export_markdown"]);
    const call = async (name, input) => JSON.parse((await tools.find((t) => t.name === name).execute(input)).content[0].text);
    const meta = await call("get_metadata", {});
    assert.equal(meta.warnings["E-011"], CATALOG["E-011"]);
    const cur = await call("get_current_pattern", {});
    assert.equal(cur.results.section.J, 13600);
    const q = clone(p);
    q.fasteners.pop();
    const an = await call("analyze_pattern", { pattern: q });
    assert.equal(an.results.fasteners.length, 3);
    const bad = await call("analyze_pattern", { pattern: { schemaVersion: 9 } });
    assert.equal(bad.issues[0].id, "E-013");
    const md = await call("export_markdown", {});
    assert.match(md.markdown, /```json/);
  } finally {
    delete globalThis.document;
  }
});

test("the published page and data are built from the current sources", async () => {
  const outputs = await render();
  assert.equal(await readFile(new URL("index.html", VIZ), "utf8"), outputs["index.html"], "run node visuals/fastener-cg/build.mjs");
  assert.equal(await readFile(new URL("raw.json", VIZ), "utf8"), outputs["raw.json"], "run node visuals/fastener-cg/build.mjs");
  const script = bundle();
  assert.ok(!/^\s*(import|export)\b/m.test(script));
  assert.doesNotThrow(() => new Function(`return () => { ${script} }`));
  const html = outputs["index.html"];
  assert.ok(!/<script[^>]+src=|<link[^>]+stylesheet|https?:\/\/(?!www\.w3\.org)/.test(html.replace(/<a [^>]*>/g, "")), "offline: no external scripts, styles or fetches");
  const raw = JSON.parse(outputs["raw.json"]);
  assert.equal(raw.warnings.length, Object.keys(CATALOG).length);
  assert.ok(raw.verification.cases.length >= 17);
});

/* ---- M2: allowables, interaction, exact-k MS ---- */

function loaded(Fs, Ft, a = 2, b = 2) {
  const p = pattern([[50, 30], [50, -30], [-50, 30], [-50, -30]], { point: { x: 150, y: 0, z: 20 }, Fy: -10000, Fz: 6000, Mx: 90000 });
  p.defaults.shearAllowable = Fs;
  p.defaults.tensionAllowable = Ft;
  p.settings.interaction = { a, b };
  return p;
}
const interactionOf = (f) => f.checks.modes.find((m) => m.mode === "interaction");

test("VC-07 through the solver: exact k*, IF(1) and the W-006 reconciliation", () => {
  const run = (a, b) => {
    const p = pattern([[0, 0]], { Fy: -600, Fz: 500 });
    p.defaults.shearAllowable = 1000;
    p.defaults.tensionAllowable = 1000;
    p.settings.interaction = { a, b };
    return solve(p);
  };
  const e = run(2, 2);
  const m = interactionOf(e.fasteners[0]);
  close(m.IF1, 0.61, 1e-12);
  close(m.kStar, 1 / Math.sqrt(0.61), 1e-12);
  assert.equal(Number(m.ms.toFixed(4)), 0.2804);
  assert.ok(ids(e.issues).includes("W-006"));
  assert.notEqual(Number(m.ms.toFixed(3)), Number((1 / 0.61 - 1).toFixed(3)), "not the 1/IF − 1 convention (0.639)");
  const l = run(1, 1);
  const n = interactionOf(l.fasteners[0]);
  close(n.IF1, 1.1, 1e-12);
  close(n.ms, 1 / 1.1 - 1, 1e-12);
  assert.equal(Number(n.ms.toFixed(4)), -0.0909);
  assert.ok(!ids(l.issues).includes("W-006"));
});

test("Brent solve matches closed forms and reports iterations", () => {
  const r = brent((x) => x * x - 2, 0, 2);
  assert.ok(r.converged);
  close(r.root, Math.SQRT2, 1e-12);
  assert.ok(r.iterations > 0 && r.iterations < 60);
  assert.equal(brent((x) => x * x + 1, 0, 2).converged, false, "no sign change: no root, no number");
  // Unequal exponents: bisect independently and compare.
  const input = { Rs: 830, tensionAt: (k) => k * 410, Fs: 1000, Ft: 700, a: 2.4, b: 1.3 };
  const s = solveScale(input);
  let lo = 0, hi = 10;
  for (let i = 0; i < 200; i++) { const mid = (lo + hi) / 2; if (interactionValue(mid, input) < 1) lo = mid; else hi = mid; }
  close(s.kStar, (lo + hi) / 2, 1e-10);
  assert.equal(s.status, "ok");
});

test("preload that alone exceeds the allowable and zero-load fasteners are not given fake margins", () => {
  const pre = solveScale({ Rs: 100, tensionAt: (k) => 1200 + k * 50, Fs: 1000, Ft: 1000, a: 2, b: 2 });
  assert.equal(pre.status, "preload");
  assert.equal(pre.ms, null);
  const idle = solveScale({ Rs: 0, tensionAt: () => 0, Fs: 1000, Ft: 1000, a: 2, b: 2 });
  assert.equal(idle.status, "unloaded");
  assert.equal(idle.ms, Infinity);
  const bad = solveScale({ Rs: NaN, tensionAt: (k) => k, Fs: 1, Ft: 1, a: 2, b: 2 });
  assert.equal(bad.status, "not-computed");
  assert.equal(bad.ms, null);
});

test("interaction uses positive tension only and flags unloading as zero (N-006)", () => {
  const r = solve(loaded(8000, 9000));
  assert.ok(r.ok);
  for (const f of r.fasteners) {
    const m = interactionOf(f);
    assert.equal(m.Rt, Math.max(f.axial.T, 0));
    close(m.IF1, (f.shear.Rs / 8000) ** 2 + (Math.max(f.axial.T, 0) / 9000) ** 2, 1e-12);
    close((m.kStar * f.shear.Rs / 8000) ** 2 + (m.kStar * m.Rt / 9000) ** 2, 1, 1e-10);
  }
  assert.ok(r.fasteners.some((f) => f.axial.T < 0));
  assert.ok(ids(r.issues).includes("N-006"));
});

test("allowables: group defaults, sparse per-fastener overrides, and 'not evaluated' without them", () => {
  const p = loaded(8000, 9000);
  p.fasteners[2].overrides = { shearAllowable: 4000 };
  p.fasteners[3].overrides = { tensionAllowable: null };
  const r = solve(p);
  assert.equal(interactionOf(r.fasteners[0]).Fs, 8000);
  assert.equal(interactionOf(r.fasteners[2]).Fs, 4000);
  const none = interactionOf(r.fasteners[3]);
  assert.equal(none.status, "not-evaluated");
  assert.deepEqual(none.missing, ["Ft"]);
  assert.equal(none.ms, null);
  assert.equal(r.fasteners[3].checks.governing, null);
  const min = Math.min(...r.fasteners.filter((f) => f.checks.governing).map((f) => f.checks.governing.ms));
  assert.equal(r.critical.ms, min);
  assert.equal(r.critical.mode, "interaction");
  // No allowables at all: nothing is evaluated and there is no critical fastener.
  const bare = solve(loaded(null, null));
  assert.equal(bare.critical, null);
  assert.ok(bare.fasteners.every((f) => interactionOf(f).status === "not-evaluated"));
});

test("round-off loads on the neutral axis or at Cs count as zero: no spurious W-008 or N-006", () => {
  const grid = [];
  for (const y of [0.1, 0.2, 0.3]) for (const x of [0.1, 0.2, 0.3]) grid.push([x, y]);
  const run = (load) => {
    const p = pattern(grid, load);
    p.defaults.shearAllowable = 1000;
    p.defaults.tensionAllowable = 1000;
    return solve(p);
  };
  // Ca.x computes to 0.2 + 4e-17, so under My the middle column carries T ≈ ±4.6e-13.
  const middle = ["F2", "F5", "F8"];
  for (const My of [-1000, 1000]) {
    const r = run({ point: { x: 0.2, y: 0.2, z: 0 }, My });
    assert.ok(r.ok);
    assert.ok(!ids(r.issues).includes("W-008"));
    for (const id of middle) {
      const f = r.fasteners.find((q) => q.id === id);
      assert.ok(f.axial.T !== 0 && Math.abs(f.axial.T) < 1e-9, `${id} T = ${f.axial.T} should be round-off`);
      const m = interactionOf(f);
      assert.equal(m.Rt, 0);
      assert.equal(m.status, "unloaded");
    }
    const zeroed = r.fasteners.filter((f) => f.checks.unloadingCountedZero).map((f) => f.id);
    assert.deepEqual(zeroed, r.fasteners.filter((f) => f.axial.unloading).map((f) => f.id));
    const n006 = r.issues.find((i) => i.id === "N-006");
    const w016 = r.issues.find((i) => i.id === "W-016");
    assert.deepEqual(n006?.fasteners, w016?.fasteners);
  }
  const t = run({ point: { x: 0.2, y: 0.2, z: 0 }, Mz: 1000 });
  assert.ok(t.ok);
  assert.ok(!ids(t.issues).includes("W-008"));
  const centre = interactionOf(t.fasteners.find((f) => f.id === "F5"));
  assert.equal(centre.Rs, 0);
  assert.equal(centre.status, "unloaded");
});

test("no finite margin: the UI and Markdown say why (no allowables, all unloaded, all not computed)", () => {
  const markdownLine = (p) => toMarkdown(p, solve(p)).split("\n").find((l) => l.startsWith("No "));
  const bare = loaded(null, null);
  assert.equal(markdownLine(bare), "No margin evaluated: no allowables entered.");
  const idle = pattern([[50, 30], [50, -30], [-50, 30], [-50, -30]]);
  idle.defaults.shearAllowable = 8000;
  idle.defaults.tensionAllowable = 9000;
  const r = solve(idle);
  assert.equal(r.critical, null);
  assert.ok(r.evaluatedCount > 0);
  assert.equal(markdownLine(idle), "No finite margin — unloaded (MS = ∞): F1, F2, F3, F4.");
  const huge = loaded(1e30, 1e30);
  const h = solve(huge);
  assert.equal(h.critical, null);
  assert.ok(h.fasteners.every((f) => interactionOf(f).status === "not-computed"));
  assert.equal(markdownLine(huge), "No finite margin — MS not computed: F1, F2, F3, F4.");
});

test("exponent and allowable input errors: E-008, E-002, W-007", () => {
  let r = solve(loaded(8000, 9000, 0, 2));
  assert.equal(r.ok, false);
  assert.deepEqual(r.issues.filter((i) => i.id === "E-008").map((i) => i.field), ["settings.interaction.a"]);
  r = solve(loaded(8000, 9000, 2, -1));
  assert.deepEqual(r.issues.filter((i) => i.id === "E-008").map((i) => i.field), ["settings.interaction.b"]);
  r = solve(loaded(8000, 9000, 0.5, 2));
  assert.ok(r.ok);
  assert.ok(ids(r.issues).includes("W-007"));
  assert.ok(ids(r.issues).includes("W-006"));
  r = solve(loaded(8000, 9000, "two", 2));
  assert.deepEqual(r.issues.filter((i) => i.tier === "error").map((i) => [i.id, i.field]), [["E-002", "settings.interaction.a"]]);
  const p = loaded(-5, 9000);
  p.fasteners[1].overrides = { tensionAllowable: 0 };
  r = solve(p);
  assert.deepEqual(r.issues.filter((i) => i.tier === "error").map((i) => [i.id, i.fastener, i.field]),
    [["E-002", null, "defaults.shearAllowable"], ["E-002", "F2", "tensionAllowable"]]);
});

test("Markdown carries the margins and W-006, and the table fallback keeps per-fastener allowables", () => {
  const p = loaded(8000, 9000);
  p.fasteners[1].overrides = { shearAllowable: 5000 };
  const md = toMarkdown(p, solve(p));
  assert.match(md, /## Margins of safety/);
  assert.match(md, /Critical fastener: \*\*F\d\*\*/);
  assert.match(md, /\| W-006 \|/);
  assert.equal(toJSON(parseMarkdown(md).pattern), toJSON(p));
  const fallback = parseMarkdown(md.replace('"Fy": -10000', '"Fy": -1'));
  assert.equal(fallback.source, "tables");
  assert.deepEqual(fallback.pattern.fasteners[1].overrides, { shearAllowable: 5000, tensionAllowable: 9000 });
  assert.equal(fallback.pattern.defaults.shearAllowable, null, "defaults revert to the app's (none shipped)");
});
