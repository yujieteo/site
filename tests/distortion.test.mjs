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

test("a 45° patch under pure shear has one stretching and one shortening diagonal", () => {
  // Torsion of the tube puts its skin in pure shear.
  const m = D.buildModel("tube"), signs = [];
  for (const torsion of [0.6, -0.6]) {
    const st = state("tube", { torsion });
    const P = D.prepare(m, st);
    const at0 = D.patchStrain(P, D.placePatch(m, { ...D.defaultPatch("tube"), angle: 0 }));
    assert.ok(Math.abs(at0.shearAngle) > 0.01, "the unrotated patch shears");
    const r = D.patchStrain(P, D.placePatch(m, { ...D.defaultPatch("tube"), angle: 45 }));
    const { e11, e22, e12 } = r.patch;
    assert.ok(Math.sign(e11) === -Math.sign(e22) && Math.min(Math.abs(e11), Math.abs(e22)) > 0.005, `${e11}, ${e22}`);
    assert.ok(Math.abs(e12) < 0.05 * Math.abs(e11), "the 45° patch barely shears");
    assert.ok(Math.abs(r.shearAngle) < 0.05 * Math.abs(at0.shearAngle));
    signs.push(Math.sign(e11));
    // principal directions: the tension one lies along a1 (0°) or a2 (90°)
    const tension = r.principal[0];
    assert.ok(tension.value > 0 && tension.value > -r.principal[1].value * 0.9);
  }
  assert.equal(signs[0], -signs[1], "reversing the torque swaps the diagonals");
});

test("the patch stays on its wall and the patch sliders round-trip", () => {
  for (const s of D.STRUCTURES) {
    const m = D.buildModel(s);
    for (const [along, around, angle] of [[0, 0, 0], [1, 1, 45], [0.3, 0.52, 90], [0.7, 0.2, 30]]) {
      const p = D.patchFromSliders(m, along, around, angle), w = m.walls[p.wall];
      assert.ok(p.u > w.u0 && p.u < w.u1);
      for (const line of D.patchParamLines(m, p)) for (const [u, v] of line) {
        assert.ok(u >= w.u0 - 1e-9 && u <= w.u1 + 1e-9, `${s}: u ${u}`);
        if (!w.closed) assert.ok(v >= w.v0 - 1e-9 && v <= w.v1 + 1e-9, `${s}: v ${v} outside ${w.v0}..${w.v1}`);
      }
      const back = D.patchFromSliders(m, ...Object.values(D.slidersFromPatch(m, p)));
      assert.ok(Math.abs(back.u - p.u) < 1e-9 && Math.abs(back.v - p.v) < 1e-9 && back.wall === p.wall, `${s} ${along} ${around}`);
    }
  }
});
