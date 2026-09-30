/* Per-fastener checks and the governing margin (spec 5.5 and 5.10).
 *
 * Each mode gives one result per fastener: { mode, label, status, ms, ... }.
 * status "ok" carries a margin; "not-evaluated" means an allowable was not
 * entered and never shows a number; "not-computed" means the solve failed
 * (W-008) or preload alone exceeds the allowable (W-017); "unloaded" means
 * no load reaches the fastener (MS = ∞). The governing MS of a fastener is
 * the minimum across its evaluated modes, and the critical fastener is the
 * one with the lowest governing MS.
 */

import { solveScale } from "./interaction.mjs";
import { issue } from "./warnings.mjs";

export const MODES = { interaction: "Shear-tension interaction" };

const isNum = (v) => typeof v === "number" && Number.isFinite(v);

/* Settings and allowable checks that need no solve: E-002, E-008, W-006, W-007. */
export function validateCheckInputs(pattern, resolved) {
  const issues = [];
  const it = pattern.settings?.interaction || {};
  for (const key of ["a", "b"]) {
    const v = it[key];
    const field = `settings.interaction.${key}`;
    if (!isNum(v)) issues.push(issue("E-002", `Interaction exponent ${key} is ${v === null || v === undefined || v === "" ? "missing" : `not a number (“${v}”)`}.`, { field }));
    else if (v <= 0) issues.push(issue("E-008", `Interaction exponent ${key} = ${v}; exponents must be greater than zero.`, { field }));
    else if (v < 1) issues.push(issue("W-007", `Interaction exponent ${key} = ${v} gives a non-convex, unconservative interaction curve.`, { field }));
  }
  if (isNum(it.a) && isNum(it.b) && it.a > 0 && it.b > 0 && !(it.a === 1 && it.b === 1)) {
    issues.push(issue("W-006", `Exponents (a, b) = (${it.a}, ${it.b}): MS is the exact load scale factor k* − 1 at which IF(k*) = 1, not the 1/IF − 1 convention.`, { field: "settings.interaction" }));
  }
  const allowable = (value, label, field, fastener = null) => {
    if (value === null || value === undefined) return;
    if (!isNum(value)) issues.push(issue("E-002", `${label} is not a number (“${value}”).`, { field, fastener }));
    else if (!(value > 0)) issues.push(issue("E-002", `${label} must be greater than zero (is ${value}).`, { field, fastener }));
  };
  allowable(pattern.defaults?.shearAllowable, "Default shear allowable Fs", "defaults.shearAllowable");
  allowable(pattern.defaults?.tensionAllowable, "Default tension allowable Ft", "defaults.tensionAllowable");
  for (const f of pattern.fasteners || []) {
    const o = f.overrides || {};
    if ("shearAllowable" in o) allowable(o.shearAllowable, `${f.id} Fs`, "shearAllowable", f.id);
    if ("tensionAllowable" in o) allowable(o.tensionAllowable, `${f.id} Ft`, "tensionAllowable", f.id);
  }
  return issues;
}

/*
 * `fasteners`: solve() fastener results (resolved properties plus shear and
 * axial). Tension feeding the interaction is the positive part of T;
 * unloading counts as zero (N-006). Rs and T within zeroTol of the largest
 * |Rs| and |T| in the group are round-off and count as zero.
 */
export function fastenerChecks(fasteners, settings, zeroTol) {
  const { a, b } = settings.interaction;
  const issues = [];
  const shearFloor = zeroTol * Math.max(...fasteners.map((f) => Math.abs(f.shear.Rs)), 0);
  const tensionFloor = zeroTol * Math.max(...fasteners.map((f) => Math.abs(f.axial.T)), 0);
  const results = fasteners.map((f) => {
    const Rs = f.shear.Rs > shearFloor ? f.shear.Rs : 0;
    const Rt = f.axial.T > tensionFloor ? f.axial.T : 0;
    const Fs = f.shearAllowable, Ft = f.tensionAllowable;
    const missing = [Fs === null || Fs === undefined ? "Fs" : null, Ft === null || Ft === undefined ? "Ft" : null].filter(Boolean);
    let interaction;
    if (missing.length) {
      interaction = { mode: "interaction", label: MODES.interaction, status: "not-evaluated", ms: null, missing, Rs, Rt, a, b };
    } else {
      // Tension scales with the load; the prying and preload chain (M3) plugs in here.
      const tensionAt = (k) => k * Rt;
      const s = solveScale({ Rs, tensionAt, Fs, Ft, a, b });
      interaction = { mode: "interaction", label: MODES.interaction, ...s, Rs, Rt, Fs, Ft, a, b, shearRatio: Rs / Fs, tensionRatio: Rt / Ft };
      if (s.status === "not-computed") issues.push(issue("W-008", `${f.id}: ${s.reason}. MS not computed.`, { fastener: f.id }));
      if (s.status === "preload") issues.push(issue("W-017", `${f.id}: IF(0) = ${s.IF0.toPrecision(4)} ≥ 1. MS not computed.`, { fastener: f.id }));
    }
    const modes = [interaction];
    const evaluated = modes.filter((m) => m.status === "ok" || m.status === "unloaded");
    const blocked = modes.filter((m) => m.status === "not-computed" || m.status === "preload");
    let governing = null;
    if (evaluated.length) {
      const g = evaluated.reduce((lo, m) => (m.ms < lo.ms ? m : lo));
      governing = { mode: g.mode, label: g.label, ms: g.ms };
    }
    return { id: f.id, modes, governing, blocked: blocked.map((m) => m.mode), unloadingCountedZero: f.axial.unloading && !missing.length };
  });
  const zeroed = results.filter((r) => r.unloadingCountedZero).map((r) => r.id);
  if (zeroed.length) issues.push(issue("N-006", `Unloading fasteners enter the interaction with zero tension: ${zeroed.join(", ")}.`, { fasteners: zeroed }));
  const withMargin = results.filter((r) => r.governing && Number.isFinite(r.governing.ms));
  const critical = withMargin.length ? withMargin.reduce((lo, r) => (r.governing.ms < lo.governing.ms ? r : lo)) : null;
  return {
    fasteners: results,
    critical: critical ? { id: critical.id, ms: critical.governing.ms, mode: critical.governing.mode, label: critical.governing.label } : null,
    evaluatedCount: results.filter((r) => r.governing).length,
    issues,
  };
}

/*
 * Why no fastener has a finite margin (critical is null): ids with no
 * allowable entered, unloaded (MS = ∞), and not computed (W-008 or W-017).
 */
export function noMarginSummary(results) {
  const ids = (...statuses) => results.filter((r) => r.modes.some((m) => statuses.includes(m.status))).map((r) => r.id);
  const missing = ids("not-evaluated"), unloaded = ids("unloaded"), blocked = ids("not-computed", "preload");
  const parts = [];
  if (unloaded.length) parts.push(`unloaded (MS = ∞): ${unloaded.join(", ")}`);
  if (blocked.length) parts.push(`MS not computed: ${blocked.join(", ")}`);
  if (missing.length) parts.push(`no allowables entered: ${missing.join(", ")}`);
  const text = unloaded.length || blocked.length ? `No finite margin — ${parts.join("; ")}.` : "No margin evaluated: no allowables entered.";
  return { missing, unloaded, blocked, text };
}

/* Display text for one mode's margin; `num` formats a finite number. */
export function marginText(m, num = String) {
  if (!m) return "—";
  if (m.status === "ok") return num(m.ms);
  if (m.status === "unloaded") return "∞ (no load on this fastener)";
  if (m.status === "not-evaluated") return `not evaluated (no allowable entered: ${m.missing.join(", ")})`;
  if (m.status === "preload") return "MS not computed (preload alone exceeds the allowable, W-017)";
  return "MS not computed (W-008)";
}
