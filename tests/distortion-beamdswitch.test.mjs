import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { assertSharedTemplate, checkDeckPlots, parseDeck } from "./beamdswitch-deck-checks.mjs";

const require = createRequire(import.meta.url);
const D = require("../visuals/distortion/kinematics.js");
const T = require("../visuals/distortion/beamdswitch.js");
const META = require("../visuals/distortion/raw.json");

/* The default view, every preset, and every structure under every load alone and all loads at once. */
const CASES = [
  { what: "default", state: D.defaultState(), contour: "none" },
  ...D.PRESETS.map((p) => { const r = D.presetState(p.id); return { what: p.id, state: r.state, contour: r.contour }; }),
  ...D.STRUCTURES.flatMap((s) => [...D.LOADS.map((k) => [k, { [k]: -0.9 }]), ["all", { axial: 0.5, shear: -0.4, torsion: 0.7, bending: 0.3, inplane: 0.6 }]].map(([k, loads]) => {
    const state = { ...D.defaultState(), structure: s, patch: D.defaultPatch(s), warpingRestraint: true, stringers: false };
    Object.assign(state.loads, loads);
    return { what: `${s} ${k}`, state, contour: "shear" };
  })),
].map((c) => ({ ...c, model: D.buildModel(c.state.structure) }));
const deckFor = (c) => T.deck(D.report(c.model, c.state, META, { colourMap: c.contour }));

test("the Distortion page inlines the site's shared beamdswitch template unchanged", () => {
  assertSharedTemplate("distortion");
});

test("every view's deck opens in beamdswitch as the standard template, narrated on every slide", () => {
  for (const c of CASES) {
    const md = deckFor(c), { deck, plots } = checkDeckPlots(md, c.what);
    assert.equal(deck.meta.title, `Structural distortion: ${META.structures.find((s) => s.id === c.state.structure).label}`, c.what);
    assert.equal(plots.length, 0, `${c.what}: a qualitative view has nothing to plot`);
    // Unit-free: the deck states no measured number beyond the page's own words and the exaggeration.
    assert.ok(md.includes(META.disclaimer), c.what);
  }
});

test("the deck says what the page says: its load words, buckling status, effects and patch inset", () => {
  for (const c of CASES) {
    const md = deckFor(c), P = D.prepare(c.model, c.state), st = c.state.structure;
    for (const k of D.LOADS) assert.ok(md.includes(`| ${D.LOAD_UI[k].label} | ${D.APPLIES[k].includes(st) ? D.loadText(k, c.state.loads[k]) : "not used here"} |`), `${c.what}: ${k}`);
    assert.ok(md.includes(`Exaggeration ${Number(c.state.exaggeration).toFixed(1)}×`), c.what);
    // The buckling status line under the sliders.
    const buckled = [...new Set(D.bucklingState(P).filter((b) => b.buckled).map((b) => b.name))];
    assert.ok(md.includes(st === "tube" ? "The tube stays smooth: its buckling is not modelled." : buckled.length ? `## Buckled: ${buckled.join(", ")}` : "## No buckling"), `${c.what}: buckling`);
    // Each slider's ▲ onset, as the slider announces it.
    const crit = D.criticalLoads(c.model, c.state);
    for (const k of D.LOADS) { const t = D.onsetText(crit, k); if (t) assert.ok(md.includes(`- ${D.LOAD_UI[k].label}: ${t} (this load alone)`), `${c.what}: onset ${k}`); }
    // The effects legend, each labelled as raw.json labels it.
    for (const e of D.activeEffects(P)) {
      const m = META.effects.find((x) => x.id === e.id);
      assert.ok(md.includes(`- **${m.label}** (${m.basis === "analytic" ? "analytic" : "assumed shape"}): ${m.note}`), `${c.what}: ${e.id}`);
      assert.equal(e.basis, m.basis, `${c.what}: ${e.id}`);
    }
    // The inset's words for the patch.
    const s = D.patchStrain(P, c.state.patch);
    assert.ok(md.includes(`- Along the patch edge a1: ${D.strainWord(s.patch.e11)}. Across, a2: ${D.strainWord(s.patch.e22)}.`), `${c.what}: inset`);
    assert.ok(md.includes(`- Shear angle γ: ${D.shearWord(s.shearAngle)}.`), `${c.what}: shear angle`);
  }
});

test("the narration speaks the loads and the patch in words", () => {
  const said = (id) => parseDeck(deckFor(CASES.find((c) => c.what === id))).frames.map((f) => f.narration).join(" ");
  const tt = said("tension-torsion");
  assert.match(tt, /The loads are moderate axial tension and moderate torsion anticlockwise\./);
  assert.match(tt, /The page draws axial stretch or shortening, Poisson contraction or swell and Saint-Venant torsion from analytic solutions\./);
  assert.match(tt, /The tube never buckles here, because its buckling is not modelled\./);
  assert.match(said("compression"), /The top flange and bottom flange have passed their threshold and wrinkled\./);
  assert.match(said("default"), /No load is applied, so the structure keeps its shape\./);
});
