import { at, scale, svgHead } from "./scale.ts";
import { DIMS, fitPca, INFO_L1, INFO_L2, INFO_LOADINGS, INFO_SIZE, INFO_TOTAL, WORK_SIZE } from "./pca.hot.ts";
import { AXES, LAYERS, PARADIGMS, REPOS } from "./stack-data.ts";

const EDGE = 28;
const TOP = 44;
const FOOT = 40;
const COUNT = PARADIGMS.length + REPOS.length;
const rows = new Float64Array(COUNT * DIMS);
const work = new Float64Array(WORK_SIZE);
export const info: Float64Array = new Float64Array(INFO_SIZE);
export const proj: Float64Array = new Float64Array(2 * COUNT);
for (let i = 0; i < COUNT; i++) rows.set((PARADIGMS[i] ?? REPOS[i - PARADIGMS.length])?.scores ?? [], i * DIMS);

export function allOn(): Uint8Array {
  return new Uint8Array(DIMS).fill(1);
}

export function refit(on: Uint8Array): void {
  fitPca(work, info, proj, rows, COUNT, PARADIGMS.length, on);
}

export function pointAt(i: number): { name: string; layer: number; repo: boolean } {
  const p = PARADIGMS[i] ?? REPOS[i - PARADIGMS.length];
  return { name: p?.name ?? "", layer: p?.layer ?? 0, repo: i >= PARADIGMS.length };
}

export function distance(a: number, b: number, on: Uint8Array): number {
  let sum = 0;
  for (let j = 0; j < DIMS; j++) if (on[j] === 1) sum += ((rows[a * DIMS + j] ?? 0) - (rows[b * DIMS + j] ?? 0)) ** 2;
  return Math.sqrt(sum);
}

export function nearest(from: number, on: Uint8Array, howMany: number): number[] {
  const order: number[] = [];
  for (let i = 0; i < PARADIGMS.length; i++) if (i !== from) order.push(i);
  order.sort((a, b) => distance(from, a, on) - distance(from, b, on));
  return order.slice(0, howMany);
}

export function leaning(on: Uint8Array): string {
  const parts: string[] = [];
  for (let c = 0; c < 2; c++) {
    const loads: number[] = [];
    for (let j = 0; j < DIMS; j++) loads.push(on[j] === 1 ? (info[INFO_LOADINGS + c * DIMS + j] ?? 0) : 0);
    const order = loads.map((_, j) => j).toSorted((a, b) => Math.abs(loads[b] ?? 0) - Math.abs(loads[a] ?? 0));
    const first = order[0] ?? 0;
    const second = order[1] ?? 0;
    const sign = (j: number): string => ((loads[j] ?? 0) >= 0 ? "more" : "less");
    parts.push(`${c === 0 ? "Across" : "Up"}: ${sign(first)} ${AXES[first] ?? ""}, ${sign(second)} ${AXES[second] ?? ""}`);
  }
  return parts.join(" · ");
}

export function kept(): string {
  const total = info[INFO_TOTAL] ?? 0;
  if (total <= 0) return "";
  const a = ((info[INFO_L1] ?? 0) / total) * 100;
  const b = ((info[INFO_L2] ?? 0) / total) * 100;
  return `The two directions keep ${(a + b).toFixed(0)}% of the spread (${a.toFixed(0)}% and ${b.toFixed(0)}%).`;
}

export function mapHeight(chart: number): number {
  return Math.round(Math.min(Math.max(chart * 0.78, 300), 460));
}

function spans(chart: number): { x: ReturnType<typeof scale>; y: ReturnType<typeof scale> } {
  let lowX = Infinity;
  let highX = -Infinity;
  let lowY = Infinity;
  let highY = -Infinity;
  for (let i = 0; i < COUNT; i++) {
    lowX = Math.min(lowX, proj[2 * i] ?? 0);
    highX = Math.max(highX, proj[2 * i] ?? 0);
    lowY = Math.min(lowY, proj[2 * i + 1] ?? 0);
    highY = Math.max(highY, proj[2 * i + 1] ?? 0);
  }
  const padX = Math.max((highX - lowX) * 0.06, 0.01);
  const padY = Math.max((highY - lowY) * 0.06, 0.01);
  return { x: scale(lowX - padX, highX + padX, EDGE, chart - EDGE), y: scale(lowY - padY, highY + padY, mapHeight(chart) - FOOT, TOP) };
}

function legend(chart: number): string {
  const per = Math.max(1, Math.min(4, Math.floor(chart / 110)));
  const out: string[] = [];
  for (let k = 0; k < LAYERS.length; k++) {
    const x = EDGE + (k % per) * Math.floor((chart - 2 * EDGE) / per);
    const y = 12 + Math.floor(k / per) * 18;
    out.push(`<circle class="pt l${k}" cx="${x}" cy="${y - 4}" r="5"/><text x="${x + 10}" y="${y}">${LAYERS[k] ?? ""}</text>`);
  }
  out.push(`<circle class="repo" cx="${chart - EDGE - 70}" cy="8" r="7"/><text x="${chart - EDGE - 59}" y="12">a real repo</text>`);
  return out.join("");
}

function dots(chart: number, selected: number, near: readonly number[]): string {
  const s = spans(chart);
  const out: string[] = [];
  for (let i = 0; i < COUNT; i++) {
    const p = pointAt(i);
    const x = at(s.x, proj[2 * i] ?? 0).toFixed(1);
    const y = at(s.y, proj[2 * i + 1] ?? 0).toFixed(1);
    const tip = `${p.name} (${p.repo ? "repo, " : ""}${LAYERS[p.layer] ?? ""}). Press to see its nearest neighbours.`;
    const mark = i === selected ? "self" : near.includes(i) ? "near" : "";
    const ring = p.repo ? `<circle class="repo" cx="${x}" cy="${y}" r="9"/>` : "";
    out.push(`${ring}<circle class="pt l${p.layer}" cx="${x}" cy="${y}" r="5.5" tabindex="0" role="button" aria-label="${tip}" data-i="${i}" data-mark="${mark}" data-tip="${tip}"/>`);
  }
  return out.join("");
}

function labels(chart: number, selected: number, near: readonly number[]): string {
  const s = spans(chart);
  const out: string[] = [];
  for (const i of selected < 0 ? [] : [selected, ...near]) {
    const x = at(s.x, proj[2 * i] ?? 0);
    const anchor = x > chart / 2 ? "end" : "start";
    out.push(`<text class="name${i === selected ? "" : " soft"}" x="${x + (anchor === "end" ? -10 : 10)}" y="${at(s.y, proj[2 * i + 1] ?? 0) - 9}" text-anchor="${anchor}">${pointAt(i).name}</text>`);
  }
  return out.join("");
}

export function mapSvg(chart: number, on: Uint8Array, selected: number): string {
  const h = mapHeight(chart);
  const near = selected < 0 ? [] : nearest(selected, on, 3);
  const frame = `<rect class="plot" x="${EDGE - 8}" y="${TOP - 8}" width="${chart - 2 * EDGE + 16}" height="${h - FOOT - TOP + 16}" rx="6"/>`;
  const foot = `<text x="${EDGE - 8}" y="${h - 6}">across: first direction</text><text x="${chart - EDGE + 8}" y="${h - 6}" text-anchor="end">up: second direction</text>`;
  return `${svgHead(chart, h)}${legend(chart)}${frame}${foot}${dots(chart, selected, near)}${labels(chart, selected, near)}</svg>`;
}

export function mapNote(on: Uint8Array, selected: number): string {
  if (selected < 0) return `${kept()} ${leaning(on)}.`;
  const list = nearest(selected, on, 3).map((i) => `${pointAt(i).name} (${distance(selected, i, on).toFixed(1)})`);
  return `Nearest to ${pointAt(selected).name}: ${list.join(", ")}. Distance is on the ${on.reduce((a, b) => a + b, 0)} axes you keep.`;
}

export function mapFigure(_id: string, chart: number): string {
  const on = allOn();
  refit(on);
  const boxes = AXES.map((name, j) => `<label class="check"><input type="checkbox" data-axis="${j}" checked> ${name}</label>`).join("");
  return `${mapSvg(chart, on, -1)}<div class="controls axes" role="group" aria-label="Axes to keep">${boxes}</div><p class="note" data-note aria-live="polite">${mapNote(on, -1)}</p>`;
}
