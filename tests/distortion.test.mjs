import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const D = require("../visuals/distortion/kinematics.js");
const { buildPage } = await import("../visuals/distortion/build.mjs");
const INDEX = new URL("../visuals/distortion/index.html", import.meta.url);

const state = (structure, loads = {}, extra = {}) => {
  const s = D.defaultState();
  s.structure = structure;
  Object.assign(s.loads, loads);
  return Object.assign(s, extra);
};
const sub = (a, b) => a.map((x, i) => x - b[i]);
const norm = (a) => Math.hypot(...a);

/* Displacement of the wall point (u, v, zeta) under `st`. */
function displacement(model, st, wall, u, v, zeta = 0) {
  const P = D.prepare(model, st), w = model.walls[wall];
  const r = D.reference(w, u, v, zeta);
  return sub(D.deform(P, w, u, v, zeta), [r.x, r.y, r.z]);
}

test("no load leaves every structure undeformed", () => {
  for (const s of D.STRUCTURES) {
    const m = D.buildModel(s);
    for (const w of m.walls) for (const [u, f] of [[0, 0], [3, 0.3], [6, 0.9]]) {
      const d = displacement(m, state(s), w.id, u, w.v0 + f * (w.v1 - w.v0), w.t / 2);
      assert.ok(norm(d) < 1e-9, `${s} ${w.name}: ${d}`);
    }
  }
});

test("the clamped end does not move under bending, shear or torsion", () => {
  for (const s of D.STRUCTURES) {
    const m = D.buildModel(s);
    for (const w of m.walls) {
      const d = displacement(m, state(s, { bending: 1, shear: 0, torsion: 1 }), w.id, 0, w.v0 + 0.3 * (w.v1 - w.v0));
      assert.ok(norm(d) < 1e-9, `${s} ${w.name}: ${d}`);
    }
  }
});

test("tube torsion is a helical twist with negligible axial movement", () => {
  const m = D.buildModel("tube"), st = state("tube", { torsion: 1 });
  for (const v of [0, 0.7, 1.9, 3.1]) {
    const d = displacement(m, st, 0, 4, v, D.GEOM.tube.t / 2);
    const lateral = Math.hypot(d[1], d[2]);
    assert.ok(lateral > 0.1, `twist moves the skin sideways (${lateral})`);
    assert.ok(Math.abs(d[0]) < 1e-3 * lateral, `axial ${d[0]} vs lateral ${lateral}`);
  }
});

test("axial tension stretches and thins; compression shortens and swells (Poisson)", () => {
  const m = D.buildModel("tube"), R = D.GEOM.tube.R;
  const radius = (loads) => { const P = D.prepare(m, state("tube", loads)); const p = D.deform(P, m.walls[0], 3, 0, 0); return Math.hypot(p[1], p[2]); };
  const tip = (loads) => D.deform(D.prepare(m, state("tube", loads)), m.walls[0], 6, 0, 0)[0];
  assert.ok(tip({ axial: 1 }) > 6 && tip({ axial: -1 }) < 6);
  assert.ok(radius({ axial: 1 }) < R && radius({ axial: -1 }) > R);
});

test("bending keeps plane sections plane and bends the tip the right way", () => {
  const m = D.buildModel("box"), P = D.prepare(m, state("box", { bending: 1 }));
  const tip = D.axisPoint(P, 6);
  assert.ok(tip[1] > 0.3, "tip up");
  // points of one section stay on a line normal to the bent axis
  const w = m.walls[0], pts = [0, 0.5, 1.2, 2.0, 3.1].map((v) => D.deform(P, w, 4, v, 0));
  const t = [Math.cos(D.axisPoint(P, 4)[3]), Math.sin(D.axisPoint(P, 4)[3])];
  const along = pts.map((p) => p[0] * t[0] + p[1] * t[1]);
  assert.ok(Math.max(...along) - Math.min(...along) < 1e-6, `section stays plane: ${along}`);
});

test("transverse shear drifts the sections; the tube does not warp but the I-beam web does", () => {
  const tube = D.buildModel("tube"), ib = D.buildModel("ibeam");
  const dT = displacement(tube, state("tube", { shear: 1 }), 0, 6, 0.9);
  assert.ok(dT[1] > 0.1, "tube tip drifts up");
  for (const v of [0, 0.5, 1.3, 2.2]) assert.ok(Math.abs(displacement(tube, state("tube", { shear: 1 }), 0, 4, v)[0]) < 1e-6);
  const st = state("ibeam", { shear: 1 }), web = ib.walls[1];
  const upper = displacement(ib, st, 1, 4, web.path.length * 0.75)[0], lower = displacement(ib, st, 1, 4, web.path.length * 0.25)[0];
  assert.ok(Math.abs(upper) > 1e-4 && Math.sign(upper) === -Math.sign(lower), `S-shaped web warping: ${upper}, ${lower}`);
});

test("index.html is the current build of its sources", async () => {
  assert.equal(await readFile(INDEX, "utf8"), buildPage(), "run node visuals/distortion/build.mjs");
});
