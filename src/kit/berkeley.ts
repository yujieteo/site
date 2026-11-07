import { DEPARTMENTS, MEN_ADMITTED, MEN_APPLIED, WOMEN_ADMITTED, WOMEN_APPLIED } from "./datasets.ts";
import { at, centred, fitCount, keep, scale, svgHead, textWidth, ticks, type Scale } from "./scale.ts";
import { mixedRate } from "./stats.hot.ts";

const EDGE = 16;
const NARROW = 460;
const DOT_SCALE = 12 / Math.sqrt(825);
const ROW_TOP = 150;
const ROW_STEP = 44;

export interface Layout {
  across: Scale;
  narrow: boolean;
}

interface Key {
  x: number;
  text: string;
  left: boolean;
  w: number;
}

export function layout(width: number): Layout {
  const narrow = width < NARROW;
  return { across: scale(0, 1, narrow ? 28 : 132, width - EDGE), narrow };
}

function total(xs: readonly number[]): number {
  let sum = 0;
  for (const x of xs) sum += x;
  return sum;
}

function rates(admitted: readonly number[], applied: readonly number[]): number[] {
  const out: number[] = [];
  for (let i = 0; i < applied.length; i++) out.push((admitted[i] ?? 0) / (applied[i] ?? 1));
  return out;
}

export const WOMEN_RATES: readonly number[] = rates(WOMEN_ADMITTED, WOMEN_APPLIED);
export const MEN_RATE: number = total(MEN_ADMITTED) / total(MEN_APPLIED);

function pct(rate: number): string {
  return `${(rate * 100).toFixed(1)}%`;
}

function radius(applied: number): number {
  return Math.max(3, Math.sqrt(applied) * DOT_SCALE);
}

function dot(l: Layout, who: string, y: number, admitted: number, applied: number, where: string): string {
  const tip = `${where}, ${who}: ${admitted} of ${applied} admitted (${pct(admitted / applied)})`;
  return `<circle class="${who}" cx="${at(l.across, admitted / applied).toFixed(1)}" cy="${y}" r="${radius(applied).toFixed(1)}" data-tip="${tip}"></circle>`;
}

function row(l: Layout, y: number, label: string, men: readonly [number, number], women: readonly [number, number]): string {
  const short = label.startsWith("Department ") && l.narrow ? label.slice(11) : label;
  const name = `<text x="${l.across.r0 - (l.narrow ? 12 : 16)}" y="${y + 4}" text-anchor="end">${short}</text>`;
  const rule = `<line class="grid" x1="${l.across.r0}" x2="${l.across.r1}" y1="${y}" y2="${y}"/>`;
  return `${name}${rule}${dot(l, "men", y, men[0], men[1], label)}${dot(l, "women", y, women[0], women[1], label)}`;
}

function axis(l: Layout, y: number): string {
  const marks = ticks(0, 1, fitCount(l.across.r1 - l.across.r0, "100%"));
  const shown = keep(marks.map((t) => centred(at(l.across, t), `${Math.round(t * 100)}%`)), 4);
  const out: string[] = [];
  for (let i = 0; i < marks.length; i++) {
    if (shown[i] === true) out.push(`<text x="${at(l.across, marks[i] ?? 0)}" y="${y}" text-anchor="middle">${Math.round((marks[i] ?? 0) * 100)}%</text>`);
  }
  return out.join("");
}

function keyBox(l: Layout, who: string, rate: number, gap: number, left: boolean): Key {
  const text = `${who} ${pct(rate)}`;
  const w = textWidth(text);
  const side = left && at(l.across, rate) - gap - w >= 0;
  return { x: at(l.across, rate) + (side ? -gap : gap), text, left: side, w };
}

function keyText(k: Key, y: number): string {
  return `<text class="key" x="${k.x.toFixed(1)}" y="${y}" text-anchor="${k.left ? "end" : "start"}">${k.text}</text>`;
}

export function keys(l: Layout, y: number, men: number, women: number, menGap: number, womenGap: number): string {
  const a = keyBox(l, "men", men, menGap, men < women);
  const b = keyBox(l, "women", women, womenGap, women <= men);
  const spans = [a, b].map((k) => ({ x: k.left ? k.x - k.w : k.x, w: k.w }));
  const lift = keep(spans, 6)[1] === true ? 0 : 16;
  return `${keyText(a, y + 4)}${keyText(b, y + 4 + lift)}`;
}

function pooledRow(l: Layout, y: number): string {
  const women = total(WOMEN_ADMITTED) / total(WOMEN_APPLIED);
  const labels = keys(l, y, MEN_RATE, women, radius(total(MEN_APPLIED)) + 6, radius(total(WOMEN_APPLIED)) + 6);
  return `${row(l, y, "All six", [total(MEN_ADMITTED), total(MEN_APPLIED)], [total(WOMEN_ADMITTED), total(WOMEN_APPLIED)])}${labels}`;
}

export function berkeleySvg(width: number, view: string): string {
  const l = layout(width);
  const rows: string[] = [];
  for (let i = 0; i < DEPARTMENTS.length; i++) {
    const men: readonly [number, number] = [MEN_ADMITTED[i] ?? 0, MEN_APPLIED[i] ?? 1];
    rows.push(row(l, ROW_TOP + i * ROW_STEP, `Department ${DEPARTMENTS[i] ?? ""}`, men, [WOMEN_ADMITTED[i] ?? 0, WOMEN_APPLIED[i] ?? 1]));
  }
  return `${svgHead(width, 432)}<g class="split" data-view="${view}">${axis(l, 20)}${pooledRow(l, 72)}<g class="depts">${rows.join("")}</g>${axis(l, 420)}</g></svg>`;
}

export function berkeleyFigure(width: number): string {
  const pooled = `<button class="button" type="button" data-active="true" data-berkeley="pooled">All six together</button>`;
  return `${berkeleySvg(width, "pooled")}<div class="controls" role="group" aria-label="View">${pooled}<button class="button" type="button" data-active="false" data-berkeley="split">By department</button></div>`;
}

function segments(l: Layout, applied: readonly number[], y: number): string {
  const sum = total(applied);
  const out: string[] = [];
  let from = 0;
  for (let i = 0; i < applied.length; i++) {
    const share = (applied[i] ?? 0) / sum;
    const w = Math.max(share * (l.across.r1 - l.across.r0) - 2, 0);
    const rate = ((MEN_ADMITTED[i] ?? 0) + (WOMEN_ADMITTED[i] ?? 0)) / ((MEN_APPLIED[i] ?? 0) + (WOMEN_APPLIED[i] ?? 0));
    const x = at(l.across, from);
    const tip = `Department ${DEPARTMENTS[i] ?? ""}: ${pct(share)} of these applicants; ${pct(rate)} admitted overall`;
    const text = w > 22 ? `<text x="${(x + w / 2).toFixed(1)}" y="${y + 18}" text-anchor="middle" class="${rate > 0.4 ? "on-dark" : ""}">${DEPARTMENTS[i] ?? ""}</text>` : "";
    out.push(`<rect x="${x.toFixed(1)}" y="${y}" width="${w.toFixed(1)}" height="28" rx="3" fill-opacity="${(0.12 + rate * 0.85).toFixed(2)}" data-tip="${tip}"></rect>${text}`);
    from += share;
  }
  return out.join("");
}

export function mixedApplied(t: number): number[] {
  const men = total(MEN_APPLIED);
  const women = total(WOMEN_APPLIED);
  const out: number[] = [];
  for (let i = 0; i < WOMEN_APPLIED.length; i++) out.push((1 - t) * ((WOMEN_APPLIED[i] ?? 0) / women) + t * ((MEN_APPLIED[i] ?? 0) / men));
  return out;
}

function rowsAt(l: Layout): { men: number; women: number; dot: number; axis: number; height: number } {
  return l.narrow ? { men: 22, women: 86, dot: 172, axis: 222, height: 232 } : { men: 30, women: 92, dot: 196, axis: 246, height: 250 };
}

export function mixParts(t: number, width: number): { bar: string; rate: number; dot: string } {
  const l = layout(width);
  const r = rowsAt(l);
  const rate = mixedRate(WOMEN_RATES, WOMEN_APPLIED, MEN_APPLIED, t);
  const tip = `women, pooled: ${pct(rate)} admitted`;
  const marks = `<circle class="women" cx="${at(l.across, rate).toFixed(1)}" cy="${r.dot}" r="7" data-tip="${tip}"></circle>${keys(l, r.dot, MEN_RATE, rate, 13, 13)}`;
  return { bar: segments(l, mixedApplied(t), r.women), rate, dot: marks };
}

function mixLabels(l: Layout, r: ReturnType<typeof rowsAt>): string {
  const names = ["Men applied to", "Women applied to", "Pooled admit rate"];
  const ys = [r.men, r.women, r.dot];
  const out: string[] = [];
  for (let i = 0; i < names.length; i++) {
    const y = l.narrow ? (ys[i] ?? 0) - (i === 2 ? 14 : 6) : (ys[i] ?? 0) + (i === 2 ? 4 : 18);
    out.push(`<text x="${l.narrow ? l.across.r0 : l.across.r0 - 16}" y="${y}" text-anchor="${l.narrow ? "start" : "end"}">${names[i] ?? ""}</text>`);
  }
  return out.join("");
}

export function mixSvg(width: number, t: number): string {
  const l = layout(width);
  const r = rowsAt(l);
  const first = mixParts(t, width);
  const men = `<circle class="men" cx="${at(l.across, MEN_RATE).toFixed(1)}" cy="${r.dot}" r="7" data-tip="men, pooled: ${pct(MEN_RATE)} admitted"></circle>`;
  const rule = `<line class="grid" x1="${l.across.r0}" x2="${l.across.r1}" y1="${r.dot}" y2="${r.dot}"/>`;
  return `${svgHead(width, r.height)}${mixLabels(l, r)}<g class="mix">${segments(l, MEN_APPLIED, r.men)}</g><g class="mix" data-mix-bar>${first.bar}</g>${rule}${axis(l, r.axis)}${men}<g data-mix-dot>${first.dot}</g></svg>`;
}

export function mixFigure(id: string, width: number): string {
  const slider = `<label for="${id}-mix">Women apply like</label><input id="${id}-mix" type="range" min="0" max="1" step="0.05" value="0" data-mix><output for="${id}-mix">themselves</output>`;
  return `${mixSvg(width, 0)}<div class="controls">${slider}</div>`;
}
