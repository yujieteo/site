/* One calculation: validate, resolve properties, reduce the load, distribute
 * it, raise the catalogue issues and check equilibrium closure.
 *
 * Returns { ok, issues, ... }. When any error is raised `ok` is false and
 * no result fields are present, so nothing downstream can show numbers the
 * checks have rejected.
 */

import { resolveFastener, validateInputs } from "./model.mjs";
import { sectionProperties } from "./geometry.mjs";
import { reduceLoad } from "./loads.mjs";
import { elasticShear, elasticAxialCentroid } from "./elastic.mjs";
import { issue, hasErrors, sortIssues } from "./warnings.mjs";

export const EXTENT_WARNING = 1e4;
export const CLOSURE_TOL = 1e-9;
export const ZERO_TOL = 1e-9;

const sum = (xs) => xs.reduce((a, b) => a + b, 0);

/* Equilibrium closure, per basis: ΣR = F and ΣM = M about the reduction point. */
export function closure(shear, axial, red, props) {
  const forceScale = Math.hypot(red.Fx, red.Fy, red.Fz) + sum(shear.map((r) => r.Rs)) + sum(axial.map((t) => Math.abs(t.T)));
  const lever = Math.max(props.extent, 1e-300);
  const momentScale = Math.hypot(red.axial.Mx, red.axial.My, red.shear.Mz) + forceScale * lever;
  const checks = [
    { name: "ΣRx = Fx", residual: sum(shear.map((r) => r.Rx)) - red.Fx, scale: forceScale },
    { name: "ΣRy = Fy", residual: sum(shear.map((r) => r.Ry)) - red.Fy, scale: forceScale },
    { name: "Σ(u·Ry − v·Rx) = Mz,s", residual: sum(shear.map((r) => r.u * r.Ry - r.v * r.Rx)) - red.shear.Mz, scale: momentScale },
    { name: "ΣT = Fz", residual: sum(axial.map((t) => t.T)) - red.Fz, scale: forceScale },
    { name: "ΣT·q = Mx,a", residual: sum(axial.map((t) => t.T * t.q)) - red.axial.Mx, scale: momentScale },
    { name: "Σ(−T·p) = My,a", residual: sum(axial.map((t) => -t.T * t.p)) - red.axial.My, scale: momentScale },
  ];
  for (const c of checks) {
    c.relative = c.scale > 0 ? Math.abs(c.residual) / c.scale : Math.abs(c.residual);
    c.pass = c.relative <= CLOSURE_TOL;
  }
  return { tol: CLOSURE_TOL, checks, pass: checks.every((c) => c.pass) };
}

export function solve(pattern) {
  const issues = validateInputs(pattern);
  if (hasErrors(issues)) return { ok: false, issues: sortIssues(issues) };

  const settings = pattern.settings || {};
  const fasteners = pattern.fasteners.map((f) => resolveFastener(pattern, f));
  const props = sectionProperties(fasteners);
  const load = pattern.load;
  const red = reduceLoad(load, props.Cs, props.Ca);

  const n = fasteners.length;
  if (n === 1) issues.push(issue("W-001", "One fastener cannot resist torsion.", { fastener: fasteners[0].id }));
  if (props.extent > EXTENT_WARNING) {
    issues.push(issue("W-004", `The pattern spans ${props.extent.toPrecision(4)} ${pattern.unitSystem === "in-lbf" ? "in" : "mm"}; check the unit system.`));
  }
  const loadZero = ["Fx", "Fy", "Fz", "Mx", "My", "Mz"].every((k) => load[k] === 0);
  if (loadZero) issues.push(issue("W-003", "All six load components are zero."));

  const Fin = Math.hypot(red.Fx, red.Fy);
  if (Fin > 0 && Math.abs(red.shear.Mz) <= ZERO_TOL * Fin * Math.max(props.extent, Math.hypot(red.shear.rx, red.shear.ry), 1)) {
    issues.push(issue("N-001", "Mz,s = 0: in-plane shear is direct only."));
  }
  const differ = props.centroids.filter((c) => c.coincidentWith.length < 2);
  if (differ.length) {
    issues.push(issue("N-002", "Torsion and J use the shear centroid Cs (ks); out-of-plane bending, Ixx, Iyy and Ixy use the axial centroid Ca (ka); the area centroid Cg (A) is a geometric reference only."));
  }

  const shear = elasticShear(fasteners, props, red);
  const axialMethod = settings.axialMethod || "centroid";
  const axial = elasticAxialCentroid(fasteners, props, red);

  if (axial.mode !== "general") {
    const scale = Math.hypot(red.axial.Mx, red.axial.My) + Math.abs(red.Fz) * props.extent;
    const unresolved = Math.abs(axial.unresolved.moment);
    const where = axial.mode === "collinear"
      ? `about the pattern line (${axial.unresolved.axisDeg.toPrecision(4)}° from +x)`
      : "(all fasteners at one point)";
    if (unresolved > ZERO_TOL * scale) {
      issues.push(issue("E-011", `Bending ${where} is ${unresolved.toPrecision(4)} and cannot be resisted.`, { field: "load" }));
    } else if (n > 1) {
      issues.push(issue("W-002", `All fasteners lie on one line; bending ${where} cannot be resisted (it is zero here).`));
    }
  }

  if (axialMethod === "centroid" && (red.Fz !== 0 || red.axial.Mx !== 0 || red.axial.My !== 0)) {
    issues.push(issue("W-005", "Method (a) keeps the neutral axis at Ca and assumes the plates stay in contact everywhere."));
  }
  const tensionScale = Math.max(...axial.T.map((t) => Math.abs(t.T)), 0);
  const unloading = axial.T.filter((t) => t.T < -ZERO_TOL * tensionScale);
  for (const t of axial.T) t.unloading = unloading.includes(t);
  if (unloading.length) {
    issues.push(issue("W-016", `Unloading (clamp-up) under method (a): ${unloading.map((t) => t.id).join(", ")}. The contact-edge method (b) is recommended.`, { fastener: unloading[0].id }));
  }

  if (hasErrors(issues)) return { ok: false, issues: sortIssues(issues) };

  const close = closure(shear, axial.T, red, props);
  if (!close.pass) {
    const failed = close.checks.filter((c) => !c.pass);
    const why = props.J === 0 && red.shear.Mz !== 0 ? ` Torsion Mz,s = ${red.shear.Mz.toPrecision(4)} with J = 0 cannot be resisted.` : "";
    issues.push(issue("E-010", `${failed.map((c) => `${c.name} (residual ${c.residual.toPrecision(3)})`).join("; ")}.${why}`));
    return { ok: false, issues: sortIssues(issues), closure: close };
  }

  const fastenerResults = fasteners.map((f, i) => ({ ...f, shear: shear[i], axial: axial.T[i] }));
  return {
    ok: true,
    issues: sortIssues(issues),
    unitSystem: pattern.unitSystem,
    props,
    reduced: red,
    axial: { method: axialMethod, mode: axial.mode, thetaX: axial.thetaX, thetaY: axial.thetaY, D: axial.D },
    fasteners: fastenerResults,
    closure: close,
  };
}
