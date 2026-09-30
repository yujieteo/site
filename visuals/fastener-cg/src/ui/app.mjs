/* Page controller: state, inputs, table, canvas, results, warnings,
 * library and files. Calculations all come from ../core. */

import { examplePattern, addFastener, clone } from "../core/model.mjs";
import { solve } from "../core/solve.mjs";
import { convertPattern, unitLabel, round12, UNIT_SYSTEMS } from "../core/units.mjs";
import { fmt } from "../core/format.mjs";
import { buildScene, CENTROID_STYLE } from "../core/scene.mjs";
import { rectangularArray, staggeredRows, boltCircle, mirror } from "../core/generators.mjs";
import { toJSON, toMarkdown, parseJSON, normalizePattern, parsePatternFile } from "../core/persist.mjs";
import { runVerification } from "../core/verify.mjs";
import { sortIssues } from "../core/warnings.mjs";
import { marginText } from "../core/checks.mjs";
import { PRESETS } from "../core/interaction.mjs";
import { TOOL_VERSION } from "../core/meta.mjs";
import { paint, palette, hitTest, centroidPath } from "./canvas.mjs";
import { readLibrary, writeLibrary, readWorking, writeWorking, uniqueName, StorageFullError } from "./storage.mjs";
import { registerTools } from "./webmcp.mjs";

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const SNAP_DEFAULT = { "N-mm": 5, "in-lbf": 0.25 };
const DEBOUNCE_AFTER_MS = 50;

const state = {
  pattern: null,
  result: null,
  selected: null,
  snap: { on: true, step: 5 },
  importIssues: [],
  lastSolveMs: 0,
  scene: null,
  drag: null,
};

/* ---------- model helpers ---------- */

function getPath(obj, path) {
  return path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
}
function setPath(obj, path, value) {
  const keys = path.split(".");
  let o = obj;
  for (const k of keys.slice(0, -1)) o = o[k] ??= {};
  o[keys.at(-1)] = value;
}
/* '' → null; numbers → number; anything else is kept as typed so E-002 can name it. */
function parseInput(text) {
  const t = String(text).trim();
  if (t === "") return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : t;
}
const inputText = (v) => (v === null || v === undefined ? "" : String(v));
const units = (kind) => unitLabel(state.pattern.unitSystem, kind);
const precision = () => {
  const p = state.pattern.settings?.precision;
  return Number.isInteger(p) && p >= 1 && p <= 15 ? p : 4;
};
const f = (v, scale = 0) => fmt(v, precision(), scale);
const snapValue = (v) => (state.snap.on && state.snap.step > 0 ? round12(Math.round(v / state.snap.step) * state.snap.step) : round12(v));

/* ---------- recalculation ---------- */

let timer = 0;
function changed({ structure = false } = {}) {
  if (structure) renderStructure();
  clearTimeout(timer);
  if (state.lastSolveMs > DEBOUNCE_AFTER_MS) timer = setTimeout(recompute, 120);
  else recompute();
}

function recompute() {
  const t0 = performance.now();
  state.result = solve(state.pattern);
  state.lastSolveMs = performance.now() - t0;
  renderResults();
  renderIssues();
  markInvalid();
  renderInline();
  renderPresets();
  draw();
  autosave();
}

function autosave() {
  try {
    writeWorking(toJSON(state.pattern));
  } catch (e) {
    storageProblem(e);
  }
}

function storageProblem(e) {
  const banner = $("#storage-banner");
  if (!e) { banner.hidden = true; return; }
  $("#storage-message").textContent = e instanceof StorageFullError ? e.message : `Could not save in this browser: ${e.message}`;
  banner.hidden = false;
}

/* ---------- rendering: inputs ---------- */

function renderUnits() {
  for (const el of $$("[data-unit]")) el.textContent = units(el.dataset.unit);
  for (const b of $$("[data-units]")) b.setAttribute("aria-pressed", String(b.dataset.units === state.pattern.unitSystem));
}

function renderInputs() {
  $("#name").value = state.pattern.name;
  $("#precision").value = state.pattern.settings.precision;
  const plates = state.pattern.plates;
  $("#applied-plate").innerHTML = plates.map((p) => `<option value="${esc(p.id)}">${esc(p.id)}</option>`).join("") || `<option value="">(none)</option>`;
  for (const el of $$("[data-path]")) {
    const v = getPath(state.pattern, el.dataset.path);
    el.value = inputText(v);
  }
  $("#snap").setAttribute("aria-pressed", String(state.snap.on));
  $("#snap-step").value = state.snap.step;
  renderPlates();
}

function renderPlates() {
  $("#plates").innerHTML = state.pattern.plates.map((p, i) => `
    <div class="row three" data-plate="${i}">
      ${["xMin", "xMax", "thickness", "yMin", "yMax"].map((k) => `<label class="f"><span>${esc(p.id)} ${k} (${units("length")})</span><input type="number" step="any" data-plate-key="${k}" value="${esc(inputText(p[k]))}"></label>`).join("")}
    </div>`).join("");
}

function renderTable() {
  const d = state.pattern.defaults;
  const cell = (fa, key) => {
    const has = fa.overrides && key in fa.overrides;
    return `<td><input type="number" step="any" aria-label="${esc(fa.id)} ${key}" data-id="${esc(fa.id)}" data-key="${key}" class="${has ? "override" : ""}" value="${has ? esc(inputText(fa.overrides[key])) : ""}" placeholder="${esc(d[key] === null || d[key] === undefined ? "—" : inputText(d[key]))}"></td>`;
  };
  $("#fastener-rows").innerHTML = state.pattern.fasteners.map((fa) => `
    <tr data-row="${esc(fa.id)}" class="${fa.id === state.selected ? "selected" : ""}">
      <th scope="row">${esc(fa.id)}</th>
      <td><input type="text" aria-label="${esc(fa.id)} label" data-id="${esc(fa.id)}" data-key="label" value="${esc(fa.label)}"></td>
      <td><input type="number" step="any" aria-label="${esc(fa.id)} x" data-id="${esc(fa.id)}" data-key="x" value="${esc(inputText(fa.x))}"></td>
      <td><input type="number" step="any" aria-label="${esc(fa.id)} y" data-id="${esc(fa.id)}" data-key="y" value="${esc(inputText(fa.y))}"></td>
      ${cell(fa, "area")}${cell(fa, "ks")}${cell(fa, "ka")}${cell(fa, "diameter")}${cell(fa, "shearAllowable")}${cell(fa, "tensionAllowable")}
      <td><button class="btn danger" type="button" data-remove="${esc(fa.id)}" aria-label="Remove ${esc(fa.id)}">×</button></td>
    </tr>`).join("") || `<tr><td colspan="11" class="muted">No fasteners. Click the canvas, use a generator or “+ Fastener”.</td></tr>`;
}

function renderLibrary() {
  const lib = readLibrary();
  const names = Object.keys(lib).sort((a, b) => a.localeCompare(b));
  $("#library").innerHTML = names.length
    ? names.map((n) => `<option value="${esc(n)}">${esc(n)}</option>`).join("")
    : `<option value="">(empty)</option>`;
  $("#lib-load").disabled = $("#lib-delete").disabled = !names.length;
}

function renderSelection() {
  for (const tr of $$("#fastener-rows tr[data-row]")) tr.classList.toggle("selected", tr.dataset.row === state.selected);
  $("#delete-fastener").disabled = !state.selected;
}

function renderStructure() {
  renderUnits();
  renderInputs();
  renderTable();
  renderSelection();
}

function renderAll() {
  renderStructure();
  renderLibrary();
  renderLegend();
  recompute();
}

/* Flag inputs named by error issues. */
function markInvalid() {
  for (const el of $$("[aria-invalid]")) el.removeAttribute("aria-invalid");
  for (const i of state.result.issues) {
    if (i.tier !== "error") continue;
    if (i.fastener && i.field) $(`#fastener-rows input[data-id="${CSS.escape(i.fastener)}"][data-key="${CSS.escape(i.field)}"]`)?.setAttribute("aria-invalid", "true");
    else if (i.field) $(`[data-path="${CSS.escape(i.field)}"]`)?.setAttribute("aria-invalid", "true");
  }
  const p = state.pattern.settings.precision;
  if (!(Number.isInteger(p) && p >= 1 && p <= 15)) $("#precision").setAttribute("aria-invalid", "true");
}

/* ---------- rendering: canvas ---------- */

const canvas = () => $("#canvas");

function draw() {
  const el = canvas();
  const rect = el.getBoundingClientRect();
  const width = Math.max(1, rect.width), height = Math.max(1, rect.height);
  const dpr = window.devicePixelRatio || 1;
  if (el.width !== Math.round(width * dpr) || el.height !== Math.round(height * dpr)) {
    el.width = Math.round(width * dpr);
    el.height = Math.round(height * dpr);
  }
  const ctx = el.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  // Keep the view fixed while dragging so the pattern does not slide under the pointer.
  const frozen = state.drag && state.drag.moved ? state.drag.transform : null;
  state.scene = buildScene(state.pattern, state.result, { width, height }, { selected: state.selected, transform: frozen });
  paint(ctx, state.scene, palette(el), { snapOn: state.snap.on, snapStep: state.snap.step });
}

function legendIcon(entry, colours) {
  const c = colours[entry.colour] || colours.fg;
  if (entry.shape === "arrow") return `<svg width="22" height="12" aria-hidden="true"><line x1="1" y1="6" x2="15" y2="6" stroke="${c}" stroke-width="2"/><path d="M21 6L14 2V10z" fill="${c}"/></svg>`;
  if (entry.shape === "cross") return `<svg width="14" height="14" aria-hidden="true"><path d="M2 2L12 12M12 2L2 12" stroke="${c}" stroke-width="2"/></svg>`;
  return centroidSvg(entry.key, c);
}

function centroidSvg(key, colour) {
  const s = CENTROID_STYLE[key];
  if (s.shape === "ring") return `<svg width="22" height="22" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="${colour}" stroke-width="2"/><path d="M1 11H21M11 1V21" stroke="${colour}" stroke-width="2"/></svg>`;
  if (s.shape === "diamond") return `<svg width="16" height="16" aria-hidden="true"><path d="M8 1L15 8L8 15L1 8z" fill="none" stroke="${colour}" stroke-width="2"/></svg>`;
  return `<svg width="10" height="10" aria-hidden="true"><rect x="1" y="1" width="8" height="8" fill="${colour}"/></svg>`;
}

function renderLegend() {
  const colours = palette(canvas());
  const scene = buildScene(state.pattern, null, { width: 100, height: 100 });
  $("#legend").innerHTML = scene.legend.map((e) => `<li>${legendIcon(e, colours)}<span>${esc(e.label)}</span></li>`).join("")
    + `<li><svg width="14" height="14" aria-hidden="true"><circle cx="7" cy="7" r="5.5" fill="${colours.tension}" fill-opacity=".35" stroke="${colours.fg}" stroke-width="1.5"/></svg><span>Fastener in tension</span></li>`
    + `<li><svg width="14" height="14" aria-hidden="true"><circle cx="7" cy="7" r="5.5" fill="none" stroke="${colours.fg}" stroke-width="1.5" stroke-dasharray="3 2"/></svg><span>Unloading (clamp-up)</span></li>`;
}

function eventPoint(e) {
  const r = canvas().getBoundingClientRect();
  return { x: e.clientX - r.left, y: e.clientY - r.top };
}

function announce(text) {
  $("#canvas-status").textContent = text;
}

function select(id, { scroll = false } = {}) {
  state.selected = id;
  renderSelection();
  draw();
  if (scroll && id) $(`#fastener-rows tr[data-row="${CSS.escape(id)}"]`)?.scrollIntoView({ block: "nearest" });
}

function moveFastener(id, x, y) {
  const fa = state.pattern.fasteners.find((q) => q.id === id);
  if (!fa) return;
  fa.x = x; fa.y = y;
  for (const key of ["x", "y"]) {
    const input = $(`#fastener-rows input[data-id="${CSS.escape(id)}"][data-key="${key}"]`);
    if (input && document.activeElement !== input) input.value = inputText(fa[key]);
  }
  changed();
}

function removeFastener(id) {
  state.pattern.fasteners = state.pattern.fasteners.filter((q) => q.id !== id);
  if (state.selected === id) state.selected = null;
  announce(`Removed ${id}.`);
  changed({ structure: true });
}

function bindCanvas() {
  const el = canvas();
  el.addEventListener("pointerdown", (e) => {
    if (e.button !== 0 || !state.scene) return;
    const pt = eventPoint(e);
    const hit = hitTest(state.scene, pt);
    state.drag = { hit, start: pt, moved: false, transform: state.scene.transform };
    el.setPointerCapture(e.pointerId);
    if (hit?.kind === "fastener") select(hit.id); // no scrolling: the canvas must stay under the pointer
  });
  el.addEventListener("pointermove", (e) => {
    const pt = eventPoint(e);
    const d = state.drag;
    if (!d) {
      const hit = state.scene && hitTest(state.scene, pt);
      el.style.cursor = hit ? "move" : "crosshair";
      return;
    }
    if (!d.moved && Math.hypot(pt.x - d.start.x, pt.y - d.start.y) < 3) return;
    d.moved = true;
    if (!d.hit) return;
    const { scale, ox, oy } = d.transform;
    const w = { x: snapValue((pt.x - ox) / scale), y: snapValue((oy - pt.y) / scale) };
    if (d.hit.kind === "fastener") moveFastener(d.hit.id, w.x, w.y);
    else if (d.hit.kind === "load") {
      state.pattern.load.point.x = w.x; state.pattern.load.point.y = w.y;
      $('[data-path="load.point.x"]').value = w.x; $('[data-path="load.point.y"]').value = w.y;
      changed();
    }
  });
  const end = (e) => {
    const d = state.drag;
    state.drag = null;
    if (!d) return;
    if (!d.hit && !d.moved && e.type === "pointerup") {
      const { scale, ox, oy } = d.transform;
      const w = { x: snapValue((d.start.x - ox) / scale), y: snapValue((oy - d.start.y) / scale) };
      const fa = addFastener(state.pattern, w.x, w.y);
      state.selected = fa.id;
      announce(`Added ${fa.id} at (${f(w.x)}, ${f(w.y)}).`);
      changed({ structure: true });
    } else if (!d.hit && !d.moved) {
      // cancelled
    } else if (!d.hit) {
      select(null);
    } else {
      draw(); // re-fit the view now the drag is over
    }
  };
  el.addEventListener("pointerup", end);
  el.addEventListener("pointercancel", end);
  el.addEventListener("keydown", (e) => {
    const id = state.selected;
    const ids = state.pattern.fasteners.map((q) => q.id);
    if (e.key === "Tab") return;
    if ((e.key === "n" || e.key === "p") && ids.length) {
      const i = ids.indexOf(id), n = ids.length;
      select(e.key === "n" ? ids[(i + 1) % n] : ids[(i - 1 + n) % n]);
      announce(`Selected ${state.selected}.`);
      e.preventDefault();
      return;
    }
    if (!id) return;
    const fa = state.pattern.fasteners.find((q) => q.id === id);
    const step = (state.snap.step > 0 ? state.snap.step : 1) * (e.shiftKey ? 10 : 1);
    const moves = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, step], ArrowDown: [0, -step] };
    if (moves[e.key] && typeof fa.x === "number" && typeof fa.y === "number") {
      moveFastener(id, round12(fa.x + moves[e.key][0]), round12(fa.y + moves[e.key][1]));
      announce(`${id} at (${f(fa.x)}, ${f(fa.y)}).`);
      e.preventDefault();
    } else if (e.key === "Delete" || e.key === "Backspace") {
      removeFastener(id);
      e.preventDefault();
    } else if (e.key === "Escape") {
      select(null);
    }
  });
  new ResizeObserver(() => draw()).observe(el);
  matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", () => { renderLegend(); draw(); });
}

/* ---------- rendering: results ---------- */

function table(head, rows, { numeric = [] } = {}) {
  return `<div class="table-wrap"><table><thead><tr>${head.map((h, i) => `<th scope="col" class="${numeric.includes(i) ? "num" : ""}">${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td class="${numeric.includes(i) ? "num" : ""}">${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
}

function renderResults() {
  const r = state.result;
  const out = $("#results");
  if (!r.ok) {
    const n = r.issues.filter((i) => i.tier === "error").length;
    out.innerHTML = `<p class="blocked">No results: ${n} error${n === 1 ? "" : "s"} must be fixed first (see Warnings). Errors block every result so no number is shown that the checks rejected.</p>`;
    return;
  }
  const colours = palette(canvas());
  const p = r.props, red = r.reduced;
  const L = units("length"), F = units("force"), M = units("moment"), S = units("section");
  const lenScale = Math.max(p.extent, 1);
  const forceScale = Math.max(...r.fasteners.map((q) => Math.max(q.shear.Rs, Math.abs(q.axial.T))), Math.hypot(red.Fx, red.Fy, red.Fz), 0);
  const momScale = Math.max(Math.abs(red.shear.Mz), Math.hypot(red.axial.Mx, red.axial.My), forceScale * lenScale);
  const secScale = Math.max(p.J, p.Ixx + p.Iyy);

  const centroids = table(["", "Centroid", `x (${L})`, `y (${L})`, "Weight", "Used for"],
    p.centroids.map((c) => [
      centroidSvg(c.key, colours[CENTROID_STYLE[c.key].colour]),
      `${esc(c.name)} <b>${c.key}</b>${c.key === "Cs" ? ' <span class="tag">CG</span>' : ""}${c.coincidentWith.length ? ` <span class="tag">coincident with ${c.coincidentWith.join(", ")}</span>` : ""}`,
      f(c.x, lenScale), f(c.y, lenScale), c.weight, esc(c.usedFor),
    ]), { numeric: [2, 3] });

  const props = table(["Property", "Value", "Unit"], [
    ["J about Cs", f(p.J, secScale), S], ["Ixx about Ca", f(p.Ixx, secScale), S], ["Iyy about Ca", f(p.Iyy, secScale), S],
    ["Ixy about Ca", f(p.Ixy, secScale), S], ["I₁ (major)", f(p.principal.I1, secScale), S], ["I₂ (minor)", f(p.principal.I2, secScale), S],
    ["θp, CCW from +x to the I₁ axis", f(p.principal.thetaDeg, 360), "°"], ["Σks", f(p.Ks), ""], ["Σka", f(p.Ka), ""],
  ], { numeric: [1] });

  const reduced = table(["Component", "Value", "Unit", "Reduced to", "Transfer"], [
    ["Fx", f(red.Fx, forceScale), F, "", ""], ["Fy", f(red.Fy, forceScale), F, "", ""], ["Fz", f(red.Fz, forceScale), F, "", ""],
    ["Mz,s", f(red.shear.Mz, momScale), M, `Cs (${f(red.shear.Q.x, lenScale)}, ${f(red.shear.Q.y, lenScale)}, 0)`, `Mz + rx·Fy − ry·Fx; rx = ${f(red.shear.rx, lenScale)}, ry = ${f(red.shear.ry, lenScale)}`],
    ["Mx,a", f(red.axial.Mx, momScale), M, `Ca (${f(red.axial.Q.x, lenScale)}, ${f(red.axial.Q.y, lenScale)}, 0)`, `Mx + ry·Fz − zp·Fy; ry = ${f(red.axial.ry, lenScale)}, zp = ${f(red.axial.zp, lenScale)}`],
    ["My,a", f(red.axial.My, momScale), M, `Ca (${f(red.axial.Q.x, lenScale)}, ${f(red.axial.Q.y, lenScale)}, 0)`, `My + zp·Fx − rx·Fz; rx = ${f(red.axial.rx, lenScale)}, zp = ${f(red.axial.zp, lenScale)}`],
  ], { numeric: [1] });

  const maxRs = Math.max(...r.fasteners.map((q) => q.shear.Rs));
  const maxT = Math.max(...r.fasteners.map((q) => q.axial.T));
  const per = table(["Fastener", `Rdx (${F})`, `Rdy (${F})`, `Rtx (${F})`, `Rty (${F})`, `Rs (${F})`, "Direction", `T (${F})`, "State"],
    r.fasteners.map((q) => {
      const tags = [];
      if (q.shear.Rs === maxRs && maxRs > 0) tags.push('<span class="tag">max shear</span>');
      if (q.axial.T === maxT && maxT > 0) tags.push('<span class="tag tension">max tension</span>');
      const st = q.axial.unloading ? '<span class="tag unloading">unloading</span>' : q.axial.T > 1e-9 * forceScale ? "tension" : "—";
      return [`<button class="btn" type="button" data-select="${esc(q.id)}">${esc(q.id)}</button> ${tags.join("")}`,
        f(q.shear.Rdx, forceScale), f(q.shear.Rdy, forceScale), f(q.shear.Rtx, forceScale), f(q.shear.Rty, forceScale),
        `<b>${f(q.shear.Rs, forceScale)}</b>`, q.shear.Rs > 0 ? `${f(q.shear.angleDeg, 360)}°` : "—", f(q.axial.T, forceScale), st];
    }), { numeric: [1, 2, 3, 4, 5, 6, 7] });

  const ms = (m) => (m.status === "ok" ? `<span class="${m.ms < 0 ? "ms-neg" : ""}">${f(m.ms)}</span>` : `<span class="muted">${esc(marginText(m))}</span>`);
  const checks = table(["Fastener", `Rs (${F})`, `Rt (${F})`, `Fs (${F})`, `Ft (${F})`, "IF(1)", "k*", "MS interaction", "Governing MS"],
    r.fasteners.map((q) => {
      const m = q.checks.modes.find((x) => x.mode === "interaction");
      const crit = r.critical && r.critical.id === q.id ? ' <span class="tag unloading">critical</span>' : "";
      const zero = q.axial.unloading ? ' <span class="tag">T counted as 0</span>' : "";
      const evaluated = m.status !== "not-evaluated";
      return [`<button class="btn" type="button" data-select="${esc(q.id)}">${esc(q.id)}</button>${crit}`,
        f(m.Rs, forceScale), `${f(m.Rt, forceScale)}${zero}`, evaluated ? f(m.Fs) : "—", evaluated ? f(m.Ft) : "—",
        evaluated && Number.isFinite(m.IF1) ? f(m.IF1) : "—", m.status === "ok" ? f(m.kStar) : "—", ms(m),
        q.checks.governing ? `<b>${Number.isFinite(q.checks.governing.ms) ? f(q.checks.governing.ms) : "∞"}</b> <span class="muted">(${esc(q.checks.governing.label)})</span>` : '<span class="muted">—</span>'];
    }), { numeric: [1, 2, 3, 4, 5, 6] });
  const it = r.interaction;
  const crit = r.critical
    ? `<p class="critical">Critical fastener <b>${esc(r.critical.id)}</b>: governing MS <b class="ms ${r.critical.ms < 0 ? "ms-neg" : ""}">${f(r.critical.ms)}</b> — ${esc(r.critical.label)}${(it.a !== 1 || it.b !== 1) ? ` <span class="muted">(exact load scale factor, not 1/IF − 1; W-006)</span>` : ""}.</p>`
    : `<p class="critical muted">No margin evaluated: enter shear and tension allowables Fs and Ft (group defaults or per-fastener overrides). A check without its allowable shows “not evaluated” and never a margin.</p>`;

  const closure = table(["Equilibrium check", "Residual", "Relative", ""],
    r.closure.checks.map((c) => [esc(c.name), fmt(c.residual, 3), c.relative.toExponential(1), c.pass ? '<span class="pass">pass</span>' : '<span class="fail">fail</span>']),
    { numeric: [1, 2] });

  const axialNote = r.axial.mode === "general"
    ? `Method (a): D = ${f(r.axial.D, secScale * secScale)}, θx = ${f(r.axial.thetaX)}, θy = ${f(r.axial.thetaY)}.`
    : r.axial.mode === "collinear" ? "Method (a), collinear pattern: bending resisted about the pattern's major principal axis only." : "Method (a): all fasteners at one point; only Fz is resisted.";

  out.innerHTML = `
    <div class="results-grid">
      <div><h3>Centroids</h3>${centroids}</div>
      <div><h3>Section properties</h3>${props}</div>
    </div>
    <h3 style="margin-top:1.25rem">Reduced load</h3>${reduced}
    <h3 style="margin-top:1.25rem">Fastener loads — elastic</h3>
    <p class="note">In-plane: direct Rd plus torsional Rt about Cs, resultant Rs and its direction CCW from +x. Out-of-plane: T by ${esc(axialNote)} Positive T is tension; unloading fasteners are shown as computed.</p>
    ${per}
    <h3 style="margin-top:1.25rem">Margins of safety — elastic basis, exponents (a, b) = (${f(it.a)}, ${f(it.b)})</h3>
    ${crit}
    <p class="note">IF(1) is the plain interaction value at the applied load; k* is the load multiplier at which IF(k*) = 1, and MS = k* − 1. Rt is the positive tension; unloading counts as zero.</p>
    ${checks}
    <h3 style="margin-top:1.25rem">Equilibrium closure (tolerance ${r.closure.tol} relative)</h3>${closure}`;
}

function renderIssues() {
  const issues = sortIssues([...state.importIssues, ...state.result.issues]);
  const count = (t) => issues.filter((i) => i.tier === t).length;
  $("#issue-counts").innerHTML = `<span>${count("error")} errors</span><span>${count("warning")} warnings</span><span>${count("note")} notes</span>`;
  $("#issues").innerHTML = issues.length ? issues.map((i) => `
    <li class="${i.tier}"><span class="id">${i.id}</span><b>${esc(i.title)}</b>${i.fasteners?.length ? ` — ${i.fasteners.map((id) => `<button class="link" type="button" data-select="${esc(id)}">${esc(id)}</button>`).join(", ")}` : ""}${i.field && !i.fastener ? ` — <code>${esc(i.field)}</code>` : ""}${i.fastener && i.field ? ` <code>${esc(i.field)}</code>` : ""}
    <span class="detail">${esc(i.detail)}</span></li>`).join("") : `<li class="note">No warnings.</li>`;
}

/* Issue ids beside the field or fastener they name (every tier also appears in the list above). */
function renderInline() {
  for (const el of $$(".inline-issue")) el.remove();
  const issues = [...state.importIssues, ...state.result.issues];
  const badge = (i) => `<span class="inline-issue ${i.tier}" title="${esc(`${i.title}: ${i.detail}`)}">${i.id}</span>`;
  const add = (target, i) => {
    if (!target || target.querySelector(`.inline-issue[data-id="${i.id}"]`)) return;
    target.insertAdjacentHTML("beforeend", badge(i).replace("<span ", `<span data-id="${i.id}" `));
  };
  for (const i of issues) {
    if (i.fasteners?.length) {
      for (const id of i.fasteners) add($(`#fastener-rows tr[data-row="${CSS.escape(id)}"] th`), i);
    } else if (i.field) {
      const input = $(`[data-path="${CSS.escape(i.field)}"]`);
      const target = input ? input.closest("label")?.querySelector("span") : i.field === "settings.interaction" ? $("#interaction-card h3") : null;
      add(target, i);
    }
  }
}

function renderPresets() {
  const it = state.pattern.settings.interaction || {};
  for (const b of $$("[data-preset]")) {
    const p = PRESETS[b.dataset.preset];
    b.setAttribute("aria-pressed", String(it.a === p.a && it.b === p.b));
  }
}

/* ---------- verification ---------- */

function renderVerification() {
  const v = runVerification();
  const passed = v.results.filter((r) => r.pass).length;
  $("#verify-results").innerHTML = `
    <p><span class="${v.pass ? "pass" : "fail"}">${passed} of ${v.results.length} cases pass</span> · set ${esc(v.set)} · closed-form tolerance ${v.tol} relative (or the stated ± where the specification rounds) · tool ${esc(TOOL_VERSION)}</p>
    ${v.results.map((r) => `<details class="verify-case"><summary><span class="${r.pass ? "pass" : "fail"}">${r.pass ? "pass" : "fail"}</span> <b>${esc(r.id)}</b> ${esc(r.title)}</summary>
      ${r.error ? `<p class="fail">${esc(r.error)}</p>` : table(["Check", "Actual", "Expected", "Tolerance", ""], r.checks.map((c) => [
        esc(c.label), typeof c.actual === "number" ? String(Number(c.actual.toPrecision(10))) : esc(c.actual),
        typeof c.expected === "number" ? String(Number(c.expected.toPrecision(10))) : esc(c.expected), esc(c.tol), c.pass ? '<span class="pass">pass</span>' : '<span class="fail">fail</span>']), { numeric: [1, 2] })}
    </details>`).join("")}`;
}

/* ---------- generators ---------- */

const GEN_FIELDS = {
  rect: [["nx", "Columns", 2], ["ny", "Rows", 2], ["sx", "Column pitch", 100, "length"], ["sy", "Row pitch", 60, "length"], ["cx", "Centre x", 0, "length"], ["cy", "Centre y", 0, "length"]],
  stagger: [["rows", "Rows", 2], ["perRow", "Per row", 3], ["sx", "Pitch", 60, "length"], ["sy", "Gauge (row spacing)", 40, "length"], ["cx", "Centre x", 0, "length"], ["cy", "Centre y", 0, "length"]],
  circle: [["n", "Fasteners", 6], ["r", "Radius", 50, "length"], ["startDeg", "First at (° from +x)", 0], ["cx", "Centre x", 0, "length"], ["cy", "Centre y", 0, "length"]],
  mirror: [["c", "Line position", 0, "length"]],
};
const genValues = {};

function renderGenerator() {
  const kind = $("#gen-kind").value;
  const fields = GEN_FIELDS[kind];
  const vals = genValues[kind] ??= Object.fromEntries(fields.map(([k, , v]) => [k, v]));
  $("#gen-fields").innerHTML = `
    ${kind === "mirror" ? `<div class="row"><label class="f"><span>Mirror about</span><select id="gen-axis"><option value="x">vertical line x = c</option><option value="y">horizontal line y = c</option></select></label>
      <label class="f"><span>Mirror</span><select id="gen-scope"><option value="all">all fasteners</option><option value="selected">selected fastener</option></select></label></div>` : ""}
    <div class="row three">${fields.map(([k, label, , kindU]) => `<label class="f"><span>${esc(label)}${kindU ? ` (${units(kindU)})` : ""}</span><input type="number" step="any" data-gen="${k}" value="${esc(vals[k])}"></label>`).join("")}</div>`;
  if (kind === "mirror") {
    $("#gen-axis").value = vals.axis || "x";
    $("#gen-scope").value = vals.scope || "all";
  }
  $("#gen-replace").hidden = kind === "mirror";
  $("#gen-append").textContent = kind === "mirror" ? "Add mirror images" : "Add to pattern";
  $("#gen-error").textContent = "";
}

function runGenerator(replace) {
  const kind = $("#gen-kind").value;
  const vals = genValues[kind];
  for (const el of $$("[data-gen]")) vals[el.dataset.gen] = Number(el.value);
  if (kind === "mirror") { vals.axis = $("#gen-axis").value; vals.scope = $("#gen-scope").value; }
  const intKeys = ["nx", "ny", "rows", "perRow", "n"];
  try {
    for (const k of intKeys) if (k in vals && !Number.isInteger(vals[k])) throw new Error("Counts must be whole numbers.");
    let points, sources = null;
    if (kind === "rect") points = rectangularArray(vals);
    else if (kind === "stagger") points = staggeredRows(vals);
    else if (kind === "circle") points = boltCircle(vals);
    else {
      sources = state.pattern.fasteners.filter((q) => typeof q.x === "number" && typeof q.y === "number" && (vals.scope === "all" || q.id === state.selected));
      if (!sources.length) throw new Error(vals.scope === "all" ? "There are no fasteners to mirror." : "Select a fastener to mirror.");
      const imgs = sources.map((q) => mirror([q], { axis: vals.axis, c: vals.c, existing: [] })[0]);
      const taken = state.pattern.fasteners.filter((q) => typeof q.x === "number").map((q) => ({ x: q.x, y: q.y }));
      points = [];
      imgs.forEach((p, i) => {
        if (taken.some((t) => Math.hypot(t.x - p.x, t.y - p.y) <= 1e-9 * Math.max(1, Math.abs(p.x), Math.abs(p.y)))) return;
        taken.push(p);
        points.push({ ...p, from: sources[i] });
      });
      if (!points.length) throw new Error("Every mirror image lands on an existing fastener.");
    }
    if (replace) state.pattern.fasteners = [];
    for (const p of points) {
      addFastener(state.pattern, p.x, p.y, p.from ? { label: p.from.label, overrides: clone(p.from.overrides || {}) } : {});
    }
    state.selected = null;
    $("#gen-error").textContent = `${replace ? "Replaced the pattern with" : "Added"} ${points.length} fastener${points.length === 1 ? "" : "s"}.`;
    changed({ structure: true });
  } catch (e) {
    $("#gen-error").textContent = e.message;
  }
}

/* ---------- files and library ---------- */

function slug(name) {
  return (name || "pattern").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "pattern";
}

function download(text, filename, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const exportJSON = () => download(toJSON(state.pattern), `${slug(state.pattern.name)}.json`, "application/json");
const markdownOf = (pattern = state.pattern, result = state.result) => toMarkdown(pattern, result, { version: TOOL_VERSION, date: new Date().toISOString().slice(0, 10) });
const exportMarkdown = () => download(markdownOf(), `${slug(state.pattern.name)}.md`, "text/markdown");

/* Resolve a library name collision: "overwrite", "keep" or "cancel". */
function askCollision(name) {
  const dialog = $("#collision");
  $("#collision-text").textContent = `“${name}” is already in the library. Overwrite it, keep both (the new one gets a numbered name), or cancel?`;
  if (typeof dialog.showModal !== "function") {
    return Promise.resolve(confirm(`“${name}” is already in the library. OK overwrites it; Cancel keeps both.`) ? "overwrite" : "keep");
  }
  return new Promise((resolve) => {
    dialog.addEventListener("close", () => resolve(dialog.returnValue || "cancel"), { once: true });
    dialog.returnValue = "";
    dialog.showModal();
  });
}

/* Put `pattern` in the library under its name, asking on a collision. Returns the stored name or null. */
async function saveToLibrary(pattern) {
  const lib = readLibrary();
  let name = pattern.name;
  if (name in lib) {
    const choice = await askCollision(name);
    if (choice === "cancel") return null;
    if (choice === "keep") name = uniqueName(name, Object.keys(lib));
  }
  const stored = { ...clone(pattern), name };
  lib[name] = { pattern: JSON.parse(toJSON(stored)), saved: new Date().toISOString() };
  try {
    writeLibrary(lib);
    storageProblem(null);
  } catch (e) {
    storageProblem(e);
    return null;
  }
  return name;
}

function loadPattern(pattern, issues = []) {
  state.pattern = pattern;
  state.selected = null;
  state.importIssues = issues;
  if (!Number.isFinite(state.snap.step) || state.snap.unitSystem !== pattern.unitSystem) {
    state.snap = { on: state.snap.on, step: SNAP_DEFAULT[pattern.unitSystem], unitSystem: pattern.unitSystem };
  }
  renderAll();
  renderGenerator();
}

async function importFile(file) {
  const text = await file.text();
  const parsed = parsePatternFile(text, file.name);
  if (!parsed.pattern) {
    state.importIssues = parsed.issues.map((i) => ({ ...i, detail: `${file.name}: ${i.detail}${/not loaded/.test(i.detail) ? "" : " The file was not loaded."}` }));
    renderIssues();
    $("#warnings-h").scrollIntoView({ block: "start" });
    return;
  }
  const name = await saveToLibrary(parsed.pattern);
  if (name === null) {
    if (!$("#storage-banner").hidden) loadPattern(parsed.pattern, parsed.issues); // storage failed: still open it
    return;
  }
  parsed.pattern.name = name;
  loadPattern(parsed.pattern, parsed.issues.map((i) => ({ ...i, detail: `${file.name}: ${i.detail}` })));
  renderLibrary();
  $("#library").value = name;
}

/* ---------- bindings ---------- */

function bind() {
  $("#name").addEventListener("input", (e) => { state.pattern.name = e.target.value; autosave(); });
  $("#precision").addEventListener("input", (e) => {
    const v = parseInput(e.target.value);
    state.pattern.settings.precision = typeof v === "number" ? v : state.pattern.settings.precision;
    changed();
  });
  for (const b of $$("[data-units]")) {
    b.addEventListener("click", () => {
      const to = b.dataset.units;
      if (to === state.pattern.unitSystem || !UNIT_SYSTEMS.includes(to)) return;
      state.pattern = convertPattern(state.pattern, to);
      state.snap = { on: state.snap.on, step: SNAP_DEFAULT[to], unitSystem: to };
      changed({ structure: true });
      renderGenerator();
    });
  }
  $("#new-example").addEventListener("click", () => loadPattern(examplePattern(state.pattern.unitSystem)));

  for (const el of $$("[data-path]")) {
    const handler = () => {
      const isSelect = el.tagName === "SELECT";
      setPath(state.pattern, el.dataset.path, isSelect ? el.value : parseInput(el.value));
      changed();
    };
    el.addEventListener(el.tagName === "SELECT" ? "change" : "input", handler);
  }
  $("#plates").addEventListener("input", (e) => {
    const key = e.target.dataset.plateKey;
    const i = Number(e.target.closest("[data-plate]")?.dataset.plate);
    if (!key || !state.pattern.plates[i]) return;
    state.pattern.plates[i][key] = parseInput(e.target.value);
    changed();
  });

  const rows = $("#fastener-rows");
  rows.addEventListener("input", (e) => {
    const { id, key } = e.target.dataset;
    const fa = state.pattern.fasteners.find((q) => q.id === id);
    if (!fa || !key) return;
    if (key === "label") fa.label = e.target.value;
    else if (key === "x" || key === "y") fa[key] = parseInput(e.target.value);
    else {
      const v = parseInput(e.target.value);
      fa.overrides ??= {};
      if (v === null) delete fa.overrides[key];
      else fa.overrides[key] = v;
      e.target.classList.toggle("override", v !== null);
    }
    changed();
  });
  rows.addEventListener("focusin", (e) => {
    const id = e.target.dataset?.id;
    if (id && id !== state.selected) select(id);
  });
  rows.addEventListener("click", (e) => {
    const id = e.target.closest("[data-remove]")?.dataset.remove;
    if (id) removeFastener(id);
  });
  document.addEventListener("click", (e) => {
    const id = e.target.closest("[data-select]")?.dataset.select;
    if (!id) return;
    select(id, { scroll: true });
    $(`#fastener-rows input[data-id="${CSS.escape(id)}"][data-key="x"]`)?.focus();
  });

  $("#add-fastener").addEventListener("click", () => {
    const xs = state.pattern.fasteners.filter((q) => typeof q.x === "number");
    const x = xs.length ? snapValue(Math.max(...xs.map((q) => q.x)) + (state.snap.step || 10) * 4) : 0;
    const y = xs.length ? xs[xs.length - 1].y : 0;
    const fa = addFastener(state.pattern, x, y);
    state.selected = fa.id;
    changed({ structure: true });
    $(`#fastener-rows input[data-id="${CSS.escape(fa.id)}"][data-key="x"]`)?.focus();
  });
  $("#delete-fastener").addEventListener("click", () => state.selected && removeFastener(state.selected));
  $("#fit-plate").addEventListener("click", () => {
    const pts = state.pattern.fasteners.filter((q) => typeof q.x === "number" && typeof q.y === "number");
    if (!pts.length || !state.pattern.plates.length) return;
    const D = state.pattern.defaults.diameter;
    const m = typeof D === "number" && D > 0 ? 2 * D : 0.1 * Math.max(1, ...pts.map((q) => Math.hypot(q.x, q.y)));
    Object.assign(state.pattern.plates[0], {
      xMin: round12(Math.min(...pts.map((q) => q.x)) - m), xMax: round12(Math.max(...pts.map((q) => q.x)) + m),
      yMin: round12(Math.min(...pts.map((q) => q.y)) - m), yMax: round12(Math.max(...pts.map((q) => q.y)) + m),
    });
    changed({ structure: true });
  });
  $("#snap").addEventListener("click", () => { state.snap.on = !state.snap.on; $("#snap").setAttribute("aria-pressed", String(state.snap.on)); draw(); });
  $("#snap-step").addEventListener("input", (e) => {
    const v = Number(e.target.value);
    if (Number.isFinite(v) && v >= 0) { state.snap.step = v; e.target.removeAttribute("aria-invalid"); draw(); }
    else e.target.setAttribute("aria-invalid", "true");
  });

  $("#gen-kind").addEventListener("change", renderGenerator);
  $("#gen-replace").addEventListener("click", () => runGenerator(true));
  $("#gen-append").addEventListener("click", () => runGenerator(false));

  $("#export-json").addEventListener("click", exportJSON);
  $("#storage-export").addEventListener("click", exportJSON);
  $("#export-md").addEventListener("click", exportMarkdown);
  $("#import").addEventListener("click", () => $("#import-file").click());
  $("#import-file").addEventListener("change", async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (file) await importFile(file);
  });
  $("#lib-save").addEventListener("click", async () => {
    const name = await saveToLibrary(state.pattern);
    if (name === null) return;
    state.pattern.name = name;
    $("#name").value = name;
    autosave();
    renderLibrary();
    $("#library").value = name;
  });
  $("#lib-load").addEventListener("click", () => {
    const entry = readLibrary()[$("#library").value];
    if (!entry) return;
    const parsed = normalizePattern(entry.pattern, { lenient: true });
    if (parsed.pattern) loadPattern(parsed.pattern, parsed.issues);
    else { state.importIssues = parsed.issues; renderIssues(); }
  });
  $("#lib-delete").addEventListener("click", () => {
    const name = $("#library").value;
    const lib = readLibrary();
    if (!(name in lib) || !confirm(`Delete “${name}” from the library?`)) return;
    delete lib[name];
    try { writeLibrary(lib); } catch (e) { storageProblem(e); }
    renderLibrary();
  });
  $("#run-verify").addEventListener("click", renderVerification);
  for (const b of $$("[data-preset]")) {
    b.addEventListener("click", () => {
      const p = PRESETS[b.dataset.preset];
      state.pattern.settings.interaction = { a: p.a, b: p.b };
      $('[data-path="settings.interaction.a"]').value = p.a;
      $('[data-path="settings.interaction.b"]').value = p.b;
      changed();
    });
  }
}

/* ---------- start ---------- */

function initialPattern() {
  const saved = readWorking();
  if (saved) {
    const parsed = parseJSON(saved, { lenient: true });
    if (parsed.pattern) return parsed.pattern;
  }
  return examplePattern("N-mm");
}

export function start() {
  const pattern = initialPattern();
  state.snap = { on: true, step: SNAP_DEFAULT[pattern.unitSystem], unitSystem: pattern.unitSystem };
  state.pattern = pattern;
  bind();
  bindCanvas();
  renderGenerator();
  renderAll();
  registerTools({
    current: () => ({ pattern: state.pattern, result: state.result }),
    markdown: (pattern) => markdownOf(pattern, solve(pattern)),
  });
}
