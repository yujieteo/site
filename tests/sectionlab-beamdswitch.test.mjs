import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { assertSharedTemplate, checkDeckPlots, parseDeck } from "./beamdswitch-deck-checks.mjs";

const require = createRequire(import.meta.url);
const L = require("../visuals/sectionlab/src/engine.js");
const T = require("../visuals/sectionlab/beamdswitch.js");
const RAW = require("../visuals/sectionlab/raw.json");
const ACCURACY = require("../visuals/sectionlab/reference/torsion-accuracy.json");
const R = L.report, fmt = R.fmt;

const clone = (x) => JSON.parse(JSON.stringify(x));
/* Every preset, plus bending about other axes, the fixed-axis mode and a polygon. */
const CASES = [
  ...RAW.presets.map((p) => [p.id, p.model]),
  ["ipe about y, fixed axis", { ...clone(RAW.presets.find((p) => p.id === "ipe").model), plastic: { axis: "y", N: 0, solve: "fixed-axis" } }],
  ["angle about the major axis", { ...clone(RAW.presets.find((p) => p.id === "angle").model), plastic: { axis: "major", N: 0, solve: "zero-cross" } }],
  ["turned hexagon", { sectionlab: 1, title: "Hexagon", materials: [clone(RAW.materials[2])], E_base: RAW.materials[2].E,
    parts: [{ id: "hex", shape: "polygon", dims: { n: 6, d: 100 }, x: 10, y: -5, orientation: 90, material: RAW.materials[2].id }] }],
].map(([what, model]) => {
  const result = L.compute(model, { accuracy: ACCURACY });
  return { what, result, md: T.deck(L.buildBeamdswitch(result)) };
});

test("the Sectionlab page inlines the site's shared beamdswitch template unchanged", () => {
  assertSharedTemplate("sectionlab");
});

test("every section's deck opens in beamdswitch as the standard template, narrated on every slide", () => {
  for (const { what, result, md } of CASES) {
    const { deck } = checkDeckPlots(md, what);
    assert.equal(deck.meta.title, `Section analysis: ${result.model.title || "Section"}`, what);
  }
});

test("the numbers are the report object's, so the deck agrees with the page's tables and the other exports", () => {
  for (const { what, result, md } of CASES) {
    const rep = L.buildReport(result), markdown = R.markdown(rep, result.model);
    // Every table in the deck is a table of the Markdown export, row for row (the section
    // properties are split over three slides, so only their values are compared, below).
    for (const s of rep.sections.filter((x) => x.title !== "M–κ curve")) {
      const rows = markdown.split(`## ${s.title}\n`)[1].split("\n## ")[0].split("\n").filter((l) => l.startsWith("| ") && !/^\| -/.test(l)).slice(1);
      for (const row of rows) assert.ok(md.includes(`${row}\n`) || s.title === "Section properties", `${what}: ${s.title}: ${row}`);
    }
    const p = result.props;
    assert.ok(parseDeck(md).frames.some((f) => f.title === `Area A = ${fmt(p.A)} mm², centroid (${fmt(p.cx)}, ${fmt(p.cy)}) mm`), `${what}: area frame`);
    for (const sym of ["Ix", "Iy", "Ixy", "I1", "I2", "Ip", "Sx_top", "Sx_bottom", "rx", "ry", "Qx", "Qy"]) assert.ok(md.includes(` ${fmt(p[sym])} | mm`), `${what}: ${sym}`);
    const t = result.torsion;
    assert.ok(md.includes(t.available ? `## Torsion constant J = ${fmt(t.J)} mm⁴` : "## Torsion constant J: n/a"), `${what}: torsion`);
    const pl = result.plastic;
    if (pl && !pl.error) assert.ok(md.includes(`## Allowable moment M_lim = ${fmt(pl.limit.M)} N·mm at κ_lim = ${fmt(pl.limit.kappa)} 1/mm`), `${what}: M_lim`);
  }
});

test("the plotted M–κ curve passes through every point the engine computed", () => {
  for (const { what, result, md } of CASES) {
    const pl = result.plastic;
    const { plots } = checkDeckPlots(md, what);
    if (!pl || pl.error) { assert.equal(plots.length, 0, what); continue; }
    const [{ spec }] = plots, scale = Math.max(...pl.curve.map((s) => Math.abs(s.M)));
    assert.equal(spec.x[1], +pl.limit.kappa.toPrecision(12), what);
    for (const s of pl.curve) assert.ok(Math.abs(spec.curves[0].f(s.kappa) - s.M) <= 1e-9 * scale, `${what}: M(${s.kappa}) = ${spec.curves[0].f(s.kappa)} vs ${s.M}`);
  }
});

test("the narration names the parts and reads the numbers in mm, N and MPa", () => {
  const said = (id) => parseDeck(CASES.find((c) => c.what === id).md).frames.map((f) => f.narration).join(" ");
  const tee = said("tee-hole");
  assert.match(tee, /The section is built from two parts, with one hole cut out\./);
  assert.match(tee, /Flange, a rectangle in Carbon steel S355, with width 200 millimetres and height 20 millimetres, centred at x 0 millimetres and y 110 millimetres\./);
  assert.match(tee, /A circle void, hole, with diameter 6 millimetres, at x 0 millimetres and y minus 40 millimetres\./);
  assert.match(tee, /second moment of area is 2\.59209 times ten to the 7 millimetres to the fourth about x/);
  assert.match(said("rhs"), /The torsion constant is .+ millimetres to the fourth, from the Bredt–Batho \(thin wall\) formula/);
  assert.match(said("turned hexagon"), /with 6 sides and across corners 100 millimetres, centred at x 10 millimetres and y minus 5 millimetres, turned 90 degrees\./);
});
