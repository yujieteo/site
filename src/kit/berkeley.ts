import { DEPARTMENTS, MEN_ADMITTED, MEN_APPLIED, WOMEN_ADMITTED, WOMEN_APPLIED } from "./datasets.ts";
import { mixedRate } from "./stats.hot.ts";

const LEFT = 132;
const RIGHT = 616;
const DOT_SCALE = 12 / Math.sqrt(825);

function rx(rate: number): number {
  return LEFT + rate * (RIGHT - LEFT);
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

function dot(who: string, y: number, admitted: number, applied: number, where: string): string {
  const r = radius(applied);
  const tip = `<title>${where}, ${who}: ${admitted} of ${applied} admitted (${pct(admitted / applied)})</title>`;
  return `<circle class="${who}" cx="${rx(admitted / applied).toFixed(1)}" cy="${y}" r="${r.toFixed(1)}">${tip}</circle>`;
}

function row(y: number, label: string, men: readonly [number, number], women: readonly [number, number]): string {
  const name = `<text x="${LEFT - 16}" y="${y + 4}" text-anchor="end">${label}</text>`;
  const rule = `<line class="grid" x1="${LEFT}" x2="${RIGHT}" y1="${y}" y2="${y}"/>`;
  return `${name}${rule}${dot("men", y, men[0], men[1], label)}${dot("women", y, women[0], women[1], label)}`;
}

function axis(y: number): string {
  const out: string[] = [];
  for (const t of [0, 0.25, 0.5, 0.75, 1]) out.push(`<text x="${rx(t)}" y="${y}" text-anchor="middle">${t * 100}%</text>`);
  return out.join("");
}

function key(who: string, rate: number, y: number, gap: number, left: boolean): string {
  const x = rx(rate) + (left ? -gap : gap);
  return `<text class="key" x="${x.toFixed(1)}" y="${y + 4}" text-anchor="${left ? "end" : "start"}">${who} ${pct(rate)}</text>`;
}

export function keys(y: number, men: number, women: number, menGap: number, womenGap: number): string {
  return `${key("men", men, y, menGap, men < women)}${key("women", women, y, womenGap, women <= men)}`;
}

function radius(applied: number): number {
  return Math.max(3, Math.sqrt(applied) * DOT_SCALE);
}

function pooledRow(y: number): string {
  const women = total(WOMEN_ADMITTED) / total(WOMEN_APPLIED);
  const labels = keys(y, MEN_RATE, women, radius(total(MEN_APPLIED)) + 6, radius(total(WOMEN_APPLIED)) + 6);
  return `${row(y, "All six", [total(MEN_ADMITTED), total(MEN_APPLIED)], [total(WOMEN_ADMITTED), total(WOMEN_APPLIED)])}${labels}`;
}

export function berkeleyFigure(): string {
  const rows: string[] = [];
  for (let i = 0; i < DEPARTMENTS.length; i++) {
    const men: readonly [number, number] = [MEN_ADMITTED[i] ?? 0, MEN_APPLIED[i] ?? 1];
    rows.push(row(150 + i * 44, `Department ${DEPARTMENTS[i] ?? ""}`, men, [WOMEN_ADMITTED[i] ?? 0, WOMEN_APPLIED[i] ?? 1]));
  }
  const svg = `<svg class="chart" viewBox="0 0 640 432" width="640" role="img" aria-label="ALT"><g class="split" data-view="pooled">${axis(20)}${pooledRow(72)}<g class="depts">${rows.join("")}</g>${axis(420)}</g></svg>`;
  const pooled = `<button class="button" type="button" data-active="true" data-berkeley="pooled">All six together</button>`;
  return `${svg}<div class="controls" role="group" aria-label="View">${pooled}<button class="button" type="button" data-active="false" data-berkeley="split">By department</button></div>`;
}

function segments(applied: readonly number[], y: number): string {
  const sum = total(applied);
  const out: string[] = [];
  let at = 0;
  for (let i = 0; i < applied.length; i++) {
    const share = (applied[i] ?? 0) / sum;
    const w = Math.max(share * (RIGHT - LEFT) - 2, 0);
    const shade = (MEN_ADMITTED[i] ?? 0) + (WOMEN_ADMITTED[i] ?? 0);
    const rate = shade / ((MEN_APPLIED[i] ?? 0) + (WOMEN_APPLIED[i] ?? 0));
    const text = w > 22 ? `<text x="${(rx(at) + w / 2).toFixed(1)}" y="${y + 18}" text-anchor="middle" class="${rate > 0.4 ? "on-dark" : ""}">${DEPARTMENTS[i] ?? ""}</text>` : "";
    out.push(`<rect x="${rx(at).toFixed(1)}" y="${y}" width="${w.toFixed(1)}" height="28" rx="3" fill-opacity="${(0.12 + rate * 0.85).toFixed(2)}"><title>Department ${DEPARTMENTS[i] ?? ""}: ${pct(share)} of these applicants; ${pct(rate)} admitted overall</title></rect>${text}`);
    at += share;
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

export function mixParts(t: number): { bar: string; rate: number; dot: string } {
  const rate = mixedRate(WOMEN_RATES, WOMEN_APPLIED, MEN_APPLIED, t);
  const marks = `<circle class="women" cx="${rx(rate).toFixed(1)}" cy="196" r="7"/>${keys(196, MEN_RATE, rate, 13, 13)}`;
  return { bar: segments(mixedApplied(t), 92), rate, dot: marks };
}

export function mixFigure(id: string): string {
  const first = mixParts(0);
  const labels = `<text x="${LEFT - 16}" y="${30 + 18}" text-anchor="end">Men applied to</text><text x="${LEFT - 16}" y="${92 + 18}" text-anchor="end">Women applied to</text><text x="${LEFT - 16}" y="200" text-anchor="end">Pooled admit rate</text>`;
  const men = `<circle class="men" cx="${rx(MEN_RATE).toFixed(1)}" cy="196" r="7"/>`;
  const svg = `<svg class="chart" viewBox="0 0 640 250" width="640" role="img" aria-label="ALT">${labels}<g class="mix">${segments(MEN_APPLIED, 30)}</g><g class="mix" data-mix-bar>${first.bar}</g><line class="grid" x1="${LEFT}" x2="${RIGHT}" y1="196" y2="196"/>${axis(246)}${men}<g data-mix-dot>${first.dot}</g></svg>`;
  const slider = `<label for="${id}-mix">Women apply like</label><input id="${id}-mix" type="range" min="0" max="1" step="0.05" value="0" data-mix><output for="${id}-mix">themselves</output>`;
  return `${svg}<div class="controls">${slider}</div>`;
}
