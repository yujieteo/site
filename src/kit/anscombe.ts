import { ANSCOMBE_X, ANSCOMBE_Y } from "./datasets.ts";
import { at, centred, fitCount, keep, panelColumns, pick, scale, svgHead, ticks, type Scale } from "./scale.ts";
import { FIT_INTERCEPT, FIT_N, FIT_R, FIT_SLOPE, fitLine } from "./stats.hot.ts";

const GAP_X = 40;
const GAP_Y = 64;
const LEAST = 220;
const LEFT = 26;
const FOOT = 18;
const X_LOW = 2;
const X_HIGH = 20;
const Y_LOW = 2;
const Y_HIGH = 14;
const NAMES = ["I", "II", "III", "IV"];
const fit = new Float64Array(4);

export interface Panel {
  x: number;
  y: number;
  w: number;
  h: number;
  across: Scale;
  up: Scale;
}

export function panel(set: number, chart: number): Panel {
  const cols = panelColumns(chart, LEAST, GAP_X);
  const w = Math.floor((chart - (cols - 1) * GAP_X) / cols);
  const h = Math.round(w * 0.6);
  const x = (set % cols) * (w + GAP_X);
  const y = 24 + Math.floor(set / cols) * (h + GAP_Y);
  return { x, y, w, h, across: scale(X_LOW, X_HIGH, x + LEFT, x + w), up: scale(Y_LOW, Y_HIGH, y + h - FOOT, y) };
}

export function anscombeHeight(chart: number): number {
  const last = panel(3, chart);
  return last.y + last.h + 28;
}

export function anscombeFit(set: number, kept: Uint8Array, chart: number): { line: string; note: string } {
  const p = panel(set, chart);
  const xs = ANSCOMBE_X[set] ?? [];
  fitLine(fit, xs, ANSCOMBE_Y[set] ?? [], kept);
  const n = fit[FIT_N] ?? 0;
  const slope = fit[FIT_SLOPE] ?? 0;
  const b = fit[FIT_INTERCEPT] ?? 0;
  const room = p.w;
  if (!Number.isFinite(slope)) return { line: "", note: pick(room, [`n ${n} · every x is the same: no line fits`, `n ${n} · no line fits`]) };
  const line = `<line x1="${at(p.across, X_LOW)}" y1="${at(p.up, b + slope * X_LOW)}" x2="${at(p.across, X_HIGH)}" y2="${at(p.up, b + slope * X_HIGH)}"/>`;
  const r = (fit[FIT_R] ?? 0).toFixed(2);
  return { line, note: pick(room, [`n ${n} · r ${r} · y = ${b.toFixed(2)} + ${slope.toFixed(2)}x`, `n ${n} · r ${r}`]) };
}

export function allKept(): Uint8Array {
  return new Uint8Array(11).fill(1);
}

function points(set: number, kept: Uint8Array, chart: number): string {
  const p = panel(set, chart);
  const xs = ANSCOMBE_X[set] ?? [];
  const ys = ANSCOMBE_Y[set] ?? [];
  const out: string[] = [];
  for (let i = 0; i < xs.length; i++) {
    const tip = `(${xs[i] ?? 0}, ${ys[i] ?? 0}): click to drop or keep`;
    const dropped = kept[i] !== 1;
    out.push(`<circle class="pt" cx="${at(p.across, xs[i] ?? 0)}" cy="${at(p.up, ys[i] ?? 0)}" r="5" tabindex="0" aria-pressed="${dropped}" aria-label="${tip}" data-dropped="${dropped}" data-i="${i}" data-tip="${tip}"></circle>`);
  }
  return out.join("");
}

function gridlines(p: Panel): string {
  const out: string[] = [];
  const xs = ticks(X_LOW, X_HIGH, fitCount(p.w - LEFT, "20"));
  const shown = keep(xs.map((t) => centred(at(p.across, t), String(t))), 4);
  for (let i = 0; i < xs.length; i++) if (shown[i] === true) out.push(`<text x="${at(p.across, xs[i] ?? 0)}" y="${p.y + p.h - 2}" text-anchor="middle">${xs[i]}</text>`);
  const ys = ticks(Y_LOW, Y_HIGH, Math.max(2, Math.floor(p.h / 36)));
  for (const t of ys) out.push(`<line class="grid" x1="${p.x + LEFT}" x2="${p.x + p.w}" y1="${at(p.up, t)}" y2="${at(p.up, t)}"/><text x="${p.x + LEFT - 6}" y="${at(p.up, t) + 4}" text-anchor="end">${t}</text>`);
  return out.join("");
}

function group(id: string, set: number, kept: Uint8Array, chart: number): string {
  const p = panel(set, chart);
  const clip = `<clipPath id="${id}-${set}"><rect x="${p.x + LEFT}" y="${p.y}" width="${p.w - LEFT}" height="${p.h - FOOT}"/></clipPath>`;
  const first = anscombeFit(set, kept, chart);
  const frame = `<rect class="plot" x="${p.x + LEFT}" y="${p.y}" width="${p.w - LEFT}" height="${p.h - FOOT}" rx="6"/>`;
  const name = `<text class="name" x="${p.x}" y="${p.y - 8}">${NAMES[set] ?? ""}</text>`;
  const note = `<text class="note" x="${p.x}" y="${p.y + p.h + 20}" data-note>${first.note}</text>`;
  return `<g data-set="${set}">${clip}${frame}${gridlines(p)}${name}<g class="fit" clip-path="url(#${id}-${set})" data-fit>${first.line}</g>${points(set, kept, chart)}${note}</g>`;
}

export function anscombeSvg(id: string, chart: number, kept: readonly Uint8Array[]): string {
  const groups: string[] = [];
  for (let set = 0; set < 4; set++) groups.push(group(id, set, kept[set] ?? allKept(), chart));
  return `${svgHead(chart, anscombeHeight(chart))}${groups.join("")}</svg>`;
}

export function anscombeFigure(id: string, chart: number): string {
  const all = [allKept(), allKept(), allKept(), allKept()];
  return `${anscombeSvg(id, chart, all)}<div class="controls"><button class="button" type="button" data-anscombe-reset>Keep every point</button></div>`;
}
