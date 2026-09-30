/* Verification set (spec section 10), shared by the in-app "Run verification"
 * panel and the Node test suite so both run exactly the same cases.
 *
 * Hand-calculation cases are in N-mm with uniform fasteners (ks = ka = 1).
 * Closed-form expectations use a 1e-9 relative tolerance; values the spec
 * quotes rounded use its stated absolute tolerance.
 */

import { examplePattern } from "./model.mjs";
import { solve } from "./solve.mjs";
import { solveScale } from "./interaction.mjs";

export const VERIFICATION_SET = "M2";
export const REL_TOL = 1e-9;

function pattern(points, load = {}) {
  const p = examplePattern("N-mm");
  p.name = "verification";
  p.fasteners = points.map(([x, y], i) => ({ id: `F${i + 1}`, label: "", x, y, overrides: {} }));
  p.load = { appliedPlate: "P1", point: { x: 0, y: 0, z: 0 }, Fx: 0, Fy: 0, Fz: 0, Mx: 0, My: 0, Mz: 0, ...load };
  return p;
}

const RECT = [[50, 30], [50, -30], [-50, 30], [-50, -30]];
const circle = (n, r, start = 0) => Array.from({ length: n }, (_, i) => {
  const t = (start + 360 * i / n) * Math.PI / 180;
  return [r * Math.cos(t), r * Math.sin(t)];
});

/* A check passes when |actual − expected| ≤ abs, or ≤ rel·max(|expected|, scale). */
function check(label, actual, expected, { rel = REL_TOL, abs = 0, scale = 0 } = {}) {
  const err = Math.abs(actual - expected);
  const pass = Number.isFinite(actual) && (err <= abs || err <= rel * Math.max(Math.abs(expected), scale));
  return { label, actual, expected, tol: abs ? `±${abs}` : `${rel} rel`, pass };
}
const truth = (label, ok, detail = "") => ({ label, actual: detail, expected: "", tol: "", pass: !!ok });

const byId = (r, id) => r.fasteners.find((f) => f.id === id);
const at = (r, x, y) => r.fasteners.find((f) => Math.abs(f.x - x) < 1e-9 && Math.abs(f.y - y) < 1e-9);

function solved(p) {
  const r = solve(p);
  if (!r.ok) throw new Error(`solve failed: ${r.issues.filter((i) => i.tier === "error").map((i) => `${i.id} ${i.detail}`).join("; ")}`);
  return r;
}

export const HAND_CASES = [
  {
    id: "VC-01", title: "2×2 rectangle, Fy = −10 000 N at (150, 0, 0)",
    run() {
      const r = solved(pattern(RECT, { point: { x: 150, y: 0, z: 0 }, Fy: -10000 }));
      return [
        check("Cs.x", r.props.Cs.x, 0, { scale: 50 }), check("Cs.y", r.props.Cs.y, 0, { scale: 50 }),
        check("Ca.x", r.props.Ca.x, 0, { scale: 50 }), check("Ca.y", r.props.Ca.y, 0, { scale: 50 }),
        check("J", r.props.J, 13600),
        check("Mz,s", r.reduced.shear.Mz, -1.5e6),
        ...r.fasteners.map((f) => check(`Rdy ${f.id}`, f.shear.Rdy, -2500)),
        check("Rs at (50, 30)", at(r, 50, 30).shear.Rs, 8670.8, { abs: 0.1 }),
        check("Rs at (50, −30)", at(r, 50, -30).shear.Rs, 8670.8, { abs: 0.1 }),
        check("Rs at (−50, 30)", at(r, -50, 30).shear.Rs, 4476.2, { abs: 0.1 }),
        check("Rs at (−50, −30)", at(r, -50, -30).shear.Rs, 4476.2, { abs: 0.1 }),
        truth("equilibrium closure", r.closure.pass),
      ];
    },
  },
  {
    id: "VC-02", title: "L-shape (0, 0), (100, 0), (0, 100)",
    run() {
      const r = solved(pattern([[0, 0], [100, 0], [0, 100]]));
      const p = r.props;
      return [
        check("centroid x", p.Cs.x, 100 / 3), check("centroid y", p.Cs.y, 100 / 3),
        check("Ixx", p.Ixx, 20000 / 3), check("Iyy", p.Iyy, 20000 / 3), check("Ixy", p.Ixy, -10000 / 3),
        check("J", p.J, 40000 / 3),
        check("I1", p.principal.I1, 10000), check("I2", p.principal.I2, 10000 / 3),
        check("θp (°)", p.principal.thetaDeg, 45),
      ];
    },
  },
  {
    id: "VC-03", title: "6-fastener bolt circle, R = 50 mm, 60° spacing",
    run() {
      const r = solved(pattern(circle(6, 50)));
      const p = r.props;
      return [
        check("J", p.J, 15000), check("Ixx", p.Ixx, 7500), check("Iyy", p.Iyy, 7500),
        check("Ixy", p.Ixy, 0, { scale: 7500 }),
        check("centroid x", p.Cs.x, 0, { scale: 50 }), check("centroid y", p.Cs.y, 0, { scale: 50 }),
      ];
    },
  },
  {
    id: "VC-04", title: "VC-01 pattern, Mx,a = 12 000 N·mm",
    run() {
      const r = solved(pattern(RECT, { Mx: 12000 }));
      return [
        check("Mx,a", r.reduced.axial.Mx, 12000),
        ...r.fasteners.map((f) => check(`T ${f.id} (y = ${f.y})`, f.axial.T, f.y > 0 ? 100 : -100)),
      ];
    },
  },
  {
    id: "VC-05", title: "VC-01 pattern, My,a = 20 000 N·mm",
    run() {
      const r = solved(pattern(RECT, { My: 20000 }));
      return [
        check("My,a", r.reduced.axial.My, 20000),
        ...r.fasteners.map((f) => check(`T ${f.id} (x = ${f.x})`, f.axial.T, f.x > 0 ? -100 : 100)),
      ];
    },
  },
  {
    id: "VC-06", title: "VC-01 pattern, Fx = 1 000 N at (0, 0, zp = 50)",
    run() {
      const r = solved(pattern(RECT, { point: { x: 0, y: 0, z: 50 }, Fx: 1000 }));
      return [
        check("My,a", r.reduced.axial.My, 50000),
        ...r.fasteners.map((f) => check(`T ${f.id} (x = ${f.x})`, f.axial.T, f.x > 0 ? -250 : 250)),
      ];
    },
  },
  {
    id: "VC-07", title: "Interaction, Rs/Fs = 0.6, Rt/Ft = 0.5; a = b = 2 and a = b = 1",
    run() {
      // One fastener carrying Rs = 600 N and T = 500 N against Fs = Ft = 1000 N.
      const run = (a, b) => {
        const p = pattern([[0, 0]], { Fy: -600, Fz: 500 });
        p.defaults.shearAllowable = 1000;
        p.defaults.tensionAllowable = 1000;
        p.settings.interaction = { a, b };
        const r = solved(p);
        return { r, m: r.fasteners[0].checks.modes.find((x) => x.mode === "interaction") };
      };
      const e = run(2, 2), l = run(1, 1);
      const ids = (r) => r.issues.map((i) => i.id);
      return [
        check("IF(1), a = b = 2", e.m.IF1, 0.61),
        check("MS, a = b = 2 (exact 1/√0.61 − 1)", e.m.ms, 1 / Math.sqrt(0.61) - 1),
        check("MS, a = b = 2 (spec, ±5e-5)", e.m.ms, 0.2804, { abs: 5e-5 }),
        check("IF(k*) = 1", Math.pow(e.m.kStar * 0.6, 2) + Math.pow(e.m.kStar * 0.5, 2), 1),
        truth("W-006 raised for (2, 2)", ids(e.r).includes("W-006")),
        check("IF(1), a = b = 1", l.m.IF1, 1.1),
        check("MS, a = b = 1 (exact 1/1.1 − 1)", l.m.ms, 1 / 1.1 - 1),
        check("MS, a = b = 1 (spec, ±5e-5)", l.m.ms, -0.0909, { abs: 5e-5 }),
        check("MS = 1/IF − 1 when a = b = 1", l.m.ms, 1 / l.m.IF1 - 1),
        truth("no W-006 for (1, 1)", !ids(l.r).includes("W-006")),
        truth("critical fastener named with its mode", e.r.critical?.id === "F1" && e.r.critical.mode === "interaction"),
      ];
    },
  },
  {
    id: "VC-09", title: "Circle group, pure Mz",
    run() {
      const N = 8, R = 60, Mz = 48000;
      const r = solved(pattern(circle(N, R, 10), { Mz }));
      const expected = Mz / (N * R);
      return r.fasteners.flatMap((f) => {
        const tangent = Math.atan2(f.y, f.x) + Math.PI / 2;
        const along = f.shear.Rx * Math.cos(tangent) + f.shear.Ry * Math.sin(tangent);
        return [check(`tangential ${f.id}`, along, expected), check(`magnitude ${f.id}`, f.shear.Rs, expected)];
      });
    },
  },
];

/* ---- Property tests ---- */

const ASYM = [[0, 0], [120, 10], [30, 80], [-40, 55], [75, -35]];
const ASYM_LOAD = { point: { x: 210, y: -40, z: 35 }, Fx: 1800, Fy: -5200, Fz: 2600, Mx: 41000, My: -23000, Mz: 150000 };
const withOverrides = (p) => {
  p.fasteners[1].overrides = { ks: 2.5, ka: 0.6 };
  p.fasteners[3].overrides = { ks: 0.7, ka: 1.8, area: 200 };
  return p;
};
const base = () => withOverrides(pattern(ASYM, ASYM_LOAD));
const scaleOf = (r) => Math.max(...r.fasteners.map((f) => Math.max(f.shear.Rs, Math.abs(f.axial.T))));

function transform(p, fn, { rotateLoad = null, mirrorLoad = null } = {}) {
  const q = JSON.parse(JSON.stringify(p));
  q.fasteners.forEach((f) => Object.assign(f, fn(f.x, f.y)));
  const P = q.load.point;
  Object.assign(P, fn(P.x, P.y));
  if (rotateLoad) Object.assign(q.load, rotateLoad(q.load));
  if (mirrorLoad) Object.assign(q.load, mirrorLoad(q.load));
  return q;
}

export const PROPERTY_CASES = [
  {
    id: "P-01", title: "Translation invariance",
    run() {
      const p = base();
      const a = solved(p), b = solved(transform(p, (x, y) => ({ x: x + 1234.5, y: y - 678.25 })));
      const S = scaleOf(a);
      return a.fasteners.flatMap((f, i) => [
        check(`Rx ${f.id}`, b.fasteners[i].shear.Rx, f.shear.Rx, { scale: S }),
        check(`Ry ${f.id}`, b.fasteners[i].shear.Ry, f.shear.Ry, { scale: S }),
        check(`T ${f.id}`, b.fasteners[i].axial.T, f.axial.T, { scale: S }),
      ]);
    },
  },
  {
    id: "P-02", title: "Rotation invariance (37° about the origin)",
    run() {
      const t = 37 * Math.PI / 180, c = Math.cos(t), s = Math.sin(t);
      const rot = (x, y) => ({ x: c * x - s * y, y: s * x + c * y });
      const p = base();
      const q = transform(p, rot, {
        rotateLoad: (L) => {
          const F = rot(L.Fx, L.Fy), M = rot(L.Mx, L.My);
          return { Fx: F.x, Fy: F.y, Mx: M.x, My: M.y };
        },
      });
      const a = solved(p), b = solved(q);
      const S = scaleOf(a);
      return a.fasteners.flatMap((f, i) => {
        const g = b.fasteners[i], R = rot(f.shear.Rx, f.shear.Ry);
        return [
          check(`|R| ${f.id}`, g.shear.Rs, f.shear.Rs, { scale: S }),
          check(`Rx rotated ${f.id}`, g.shear.Rx, R.x, { scale: S }),
          check(`Ry rotated ${f.id}`, g.shear.Ry, R.y, { scale: S }),
          check(`T ${f.id}`, g.axial.T, f.axial.T, { scale: S }),
        ];
      });
    },
  },
  {
    id: "P-03", title: "Mirror symmetry about x = 0",
    run() {
      const p = pattern([[40, 20], [-40, 20], [70, -30], [-70, -30]], { point: { x: 0, y: 90, z: 20 }, Fy: -3000, Fz: 1500, Mx: 25000 });
      const r = solved(p);
      const S = scaleOf(r);
      const pairs = [["F1", "F2"], ["F3", "F4"]];
      return pairs.flatMap(([a, b]) => {
        const A = byId(r, a), B = byId(r, b);
        return [
          check(`Rx ${a} = −Rx ${b}`, A.shear.Rx, -B.shear.Rx, { scale: S }),
          check(`Ry ${a} = Ry ${b}`, A.shear.Ry, B.shear.Ry, { scale: S }),
          check(`T ${a} = T ${b}`, A.axial.T, B.axial.T, { scale: S }),
        ];
      });
    },
  },
  {
    id: "P-04", title: "Linear scaling (doubling the load doubles elastic results)",
    run() {
      const p = base();
      const q = JSON.parse(JSON.stringify(p));
      for (const k of ["Fx", "Fy", "Fz", "Mx", "My", "Mz"]) q.load[k] *= 2;
      const a = solved(p), b = solved(q);
      const S = 2 * scaleOf(a);
      return a.fasteners.flatMap((f, i) => [
        check(`Rs ${f.id}`, b.fasteners[i].shear.Rs, 2 * f.shear.Rs, { scale: S }),
        check(`T ${f.id}`, b.fasteners[i].axial.T, 2 * f.axial.T, { scale: S }),
      ]);
    },
  },
  {
    id: "P-05", title: "Equilibrium closure (asymmetric, weighted, full 3D load)",
    run() {
      const r = solved(base());
      return r.closure.checks.map((c) => truth(c.name, c.pass, `relative residual ${c.relative.toExponential(2)}`));
    },
  },
  {
    id: "P-06", title: "Sign convention (VC-04 to VC-06)",
    run() {
      const cases = HAND_CASES.filter((c) => ["VC-04", "VC-05", "VC-06"].includes(c.id));
      return cases.map((c) => truth(c.id, c.run().every((x) => x.pass)));
    },
  },
];

const withAllowables = (p, Fs, Ft, a, b) => {
  p.defaults.shearAllowable = Fs;
  p.defaults.tensionAllowable = Ft;
  p.settings.interaction = { a, b };
  return p;
};
const interactionOf = (f) => f.checks.modes.find((m) => m.mode === "interaction");

PROPERTY_CASES.push(
  {
    id: "P-07", title: "Load scaling: k* at λ × load is k* / λ (no preload)",
    run() {
      const lam = 2.5;
      const p = withAllowables(base(), 9000, 12000, 2.3, 1.7);
      const q = JSON.parse(JSON.stringify(p));
      for (const k of ["Fx", "Fy", "Fz", "Mx", "My", "Mz"]) q.load[k] *= lam;
      const a = solved(p), b = solved(q);
      return a.fasteners.map((f, i) => check(`k* ${f.id}`, interactionOf(b.fasteners[i]).kStar, interactionOf(f).kStar / lam));
    },
  },
  {
    id: "P-08", title: "Exact-k solution satisfies IF(k*) = 1 for unequal exponents",
    run() {
      const cases = [[2, 2], [1, 1], [3, 1.5], [1.2, 2.8], [0.8, 2]];
      return cases.flatMap(([a, b]) => {
        const Rs = 700, Rt = 450, Fs = 1000, Ft = 900;
        const s = solveScale({ Rs, tensionAt: (k) => k * Rt, Fs, Ft, a, b });
        const at = Math.pow(s.kStar * Rs / Fs, a) + Math.pow(s.kStar * Rt / Ft, b);
        return [check(`IF(k*) (a = ${a}, b = ${b})`, at, 1), truth(`status ok (a = ${a}, b = ${b})`, s.status === "ok")];
      });
    },
  },
  {
    id: "P-09", title: "Governing MS and critical fastener",
    run() {
      const p = withAllowables(base(), 9000, 12000, 2, 2);
      const r = solved(p);
      const min = Math.min(...r.fasteners.map((f) => f.checks.governing.ms));
      return [
        check("critical MS is the lowest governing MS", r.critical.ms, min),
        truth("critical fastener has that MS", r.fasteners.find((f) => f.id === r.critical.id).checks.governing.ms === min),
        truth("no margin without allowables", solved(base()).fasteners.every((f) => f.checks.governing === null && f.checks.modes[0].status === "not-evaluated")),
      ];
    },
  },
);

export const ALL_CASES = [...HAND_CASES, ...PROPERTY_CASES];

/* Run every case; a case that throws fails with the message. */
export function runVerification(cases = ALL_CASES) {
  const results = cases.map((c) => {
    try {
      const checks = c.run();
      return { id: c.id, title: c.title, checks, pass: checks.length > 0 && checks.every((x) => x.pass) };
    } catch (e) {
      return { id: c.id, title: c.title, checks: [], pass: false, error: e.message };
    }
  });
  return { set: VERIFICATION_SET, tol: REL_TOL, results, pass: results.every((r) => r.pass) };
}
