import { ANSCOMBE_X, ANSCOMBE_Y } from "./datasets.ts";
import { FIT_INTERCEPT, FIT_N, FIT_R, FIT_SLOPE, fitLine } from "./stats.hot.ts";

const PANEL_W = 292;
const PANEL_H = 176;
const GAP_X = 40;
const GAP_Y = 64;
const PAD = 8;
const X_LOW = 2;
const X_HIGH = 20;
const Y_LOW = 2;
const Y_HIGH = 14;
const NAMES = ["I", "II", "III", "IV"];
const fit = new Float64Array(4);

function origin(set: number): { x: number; y: number } {
  return { x: PAD + (set % 2) * (PANEL_W + GAP_X), y: 24 + Math.floor(set / 2) * (PANEL_H + GAP_Y) };
}

function px(set: number, x: number): number {
  return origin(set).x + ((x - X_LOW) / (X_HIGH - X_LOW)) * PANEL_W;
}

function py(set: number, y: number): number {
  return origin(set).y + PANEL_H - ((y - Y_LOW) / (Y_HIGH - Y_LOW)) * PANEL_H;
}

export function anscombeFit(set: number, kept: Uint8Array): { line: string; note: string } {
  const xs = ANSCOMBE_X[set] ?? [];
  fitLine(fit, xs, ANSCOMBE_Y[set] ?? [], kept);
  const n = fit[FIT_N] ?? 0;
  const slope = fit[FIT_SLOPE] ?? 0;
  const b = fit[FIT_INTERCEPT] ?? 0;
  if (!Number.isFinite(slope)) return { line: "", note: `n ${n} · every x is the same: no line fits` };
  const line = `<line x1="${px(set, X_LOW)}" y1="${py(set, b + slope * X_LOW)}" x2="${px(set, X_HIGH)}" y2="${py(set, b + slope * X_HIGH)}"/>`;
  return { line, note: `n ${n} · r ${(fit[FIT_R] ?? 0).toFixed(2)} · y = ${b.toFixed(2)} + ${slope.toFixed(2)}x` };
}

export function allKept(): Uint8Array {
  return new Uint8Array(11).fill(1);
}

function points(set: number): string {
  const xs = ANSCOMBE_X[set] ?? [];
  const ys = ANSCOMBE_Y[set] ?? [];
  const out: string[] = [];
  for (let i = 0; i < xs.length; i++) {
    const tip = `<title>(${xs[i] ?? 0}, ${ys[i] ?? 0}): click to drop or keep</title>`;
    out.push(`<circle class="pt" cx="${px(set, xs[i] ?? 0)}" cy="${py(set, ys[i] ?? 0)}" r="5" tabindex="0" aria-pressed="false" data-i="${i}">${tip}</circle>`);
  }
  return out.join("");
}

function panel(id: string, set: number): string {
  const o = origin(set);
  const clip = `<clipPath id="${id}-${set}"><rect x="${o.x}" y="${o.y}" width="${PANEL_W}" height="${PANEL_H}"/></clipPath>`;
  const first = anscombeFit(set, allKept());
  const frame = `<rect class="plot" x="${o.x}" y="${o.y}" width="${PANEL_W}" height="${PANEL_H}" rx="6"/>`;
  const name = `<text class="name" x="${o.x}" y="${o.y - 8}">${NAMES[set] ?? ""}</text>`;
  const note = `<text class="note" x="${o.x}" y="${o.y + PANEL_H + 20}" data-note>${first.note}</text>`;
  return `<g data-set="${set}">${clip}${frame}${name}<g class="fit" clip-path="url(#${id}-${set})" data-fit>${first.line}</g>${points(set)}${note}</g>`;
}

export function anscombeFigure(id: string): string {
  const panels: string[] = [];
  for (let set = 0; set < 4; set++) panels.push(panel(id, set));
  const svg = `<svg class="chart" viewBox="0 0 640 500" width="640" role="img" aria-label="ALT">${panels.join("")}</svg>`;
  return `${svg}<div class="controls"><button class="button" type="button" data-anscombe-reset>Keep every point</button></div>`;
}
