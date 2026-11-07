import { at, PHONE, scale, svgHead } from "./scale.ts";
import { AXES, LAYERS, PARADIGMS, TEN, ZERO } from "./stack-data.ts";

const ROW = 34;
const TOP = 28;
const EDGE = 40;

export interface Pick {
  index: number;
  cls: string;
}

export function leftMargin(chart: number): number {
  return Math.round(Math.min(Math.max(chart * 0.34, 96), 170));
}

function spread(picks: readonly Pick[], axis: number): { low: number; high: number } {
  let low = 10;
  let high = 0;
  for (const p of picks) {
    const v = PARADIGMS[p.index]?.scores[axis] ?? 0;
    low = Math.min(low, v);
    high = Math.max(high, v);
  }
  return { low, high };
}

export function gaps(picks: readonly Pick[]): number[] {
  return AXES.map((_, a) => {
    const s = spread(picks, a);
    return picks.length < 2 ? 0 : s.high - s.low;
  });
}

function rowStep(chart: number): number {
  return chart < PHONE ? 50 : ROW;
}
function trackLeft(chart: number): number {
  return chart < PHONE ? 6 : leftMargin(chart);
}
function row(chart: number, picks: readonly Pick[], axis: number): string {
  const left = trackLeft(chart);
  const x = scale(0, 10, left, chart - EDGE);
  const y = TOP + (chart < PHONE ? 18 : 0) + axis * rowStep(chart);
  const s = spread(picks, axis);
  const tip = `${AXES[axis] ?? ""}. 0: ${ZERO[axis] ?? ""} 10: ${TEN[axis] ?? ""}`;
  const track = `<line class="grid" x1="${left}" x2="${chart - EDGE}" y1="${y}" y2="${y}"/>`;
  const label = `<text class="axis" x="${chart < PHONE ? 0 : left - 10}" y="${chart < PHONE ? y - 14 : y + 4}" text-anchor="${chart < PHONE ? "start" : "end"}" tabindex="0" data-tip="${tip}">${AXES[axis] ?? ""}</text>`;
  const span = picks.length > 1 ? `<line class="range" x1="${at(x, s.low)}" x2="${at(x, s.high)}" y1="${y}" y2="${y}"/>` : "";
  const dots = picks.map((p) => `<circle class="dot ${p.cls}" cx="${at(x, PARADIGMS[p.index]?.scores[axis] ?? 0)}" cy="${y}" r="6" data-tip="${PARADIGMS[p.index]?.name ?? ""}: ${PARADIGMS[p.index]?.scores[axis] ?? 0} of 10"/>`).join("");
  const gap = picks.length > 1 ? `<text class="gap" x="${chart - EDGE + 10}" y="${y + 4}">${s.high - s.low}</text>` : "";
  return `${track}${label}${span}${dots}${gap}`;
}

export function gapHeight(chart: number): number {
  return TOP + (chart < PHONE ? 18 : 0) + AXES.length * rowStep(chart) - 6;
}

export function gapSvg(chart: number, picks: readonly Pick[]): string {
  const left = trackLeft(chart);
  const head = `<text x="${left}" y="10">0</text><text x="${chart - EDGE}" y="10" text-anchor="end">10</text><text x="${chart - EDGE + 10}" y="10">gap</text>`;
  return `${svgHead(chart, gapHeight(chart))}${head}${AXES.map((_, a) => row(chart, picks, a)).join("")}</svg>`;
}

export function euclid(picks: readonly Pick[]): number {
  const a = PARADIGMS[picks[0]?.index ?? 0]?.scores ?? [];
  const b = PARADIGMS[picks[1]?.index ?? 0]?.scores ?? [];
  return Math.sqrt(a.reduce((sum, v, j) => sum + (v - (b[j] ?? 0)) ** 2, 0));
}

export function gapNote(picks: readonly Pick[]): string {
  if (picks.length < 2) return "Pick two or more paradigms to see where they differ.";
  const g = gaps(picks);
  let widest = 0;
  for (let a = 0; a < g.length; a++) if ((g[a] ?? 0) > (g[widest] ?? 0)) widest = a;
  const total = g.reduce((s, v) => s + v, 0);
  const dist = picks.length === 2 ? `Distance ${euclid(picks).toFixed(1)}. ` : "";
  return `${dist}Gaps add up to ${total}. Widest: ${AXES[widest] ?? ""} (${g[widest] ?? 0}).`;
}

export function options(chosen: number, layer: number): string {
  const list = PARADIGMS.map((p, i) => ({ p, i })).filter(({ p }) => layer < 0 || p.layer === layer);
  const none = layer < 0 ? "" : `<option value="-1"${chosen < 0 ? " selected" : ""}>none</option>`;
  return none + list.map(({ p, i }) => `<option value="${i}"${i === chosen ? " selected" : ""}>${p.name}</option>`).join("");
}

export function layerName(layer: number): string {
  return LAYERS[layer] ?? "";
}

export function select(id: string, label: string, chosen: number, layer: number, cls: string): string {
  return `<span class="control"><label for="${id}">${label}</label><select id="${id}" data-pick data-cls="${cls}">${options(chosen, layer)}</select></span>`;
}

export function paradigmIndex(name: string): number {
  return PARADIGMS.findIndex((p) => p.name === name);
}
