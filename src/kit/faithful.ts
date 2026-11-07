import { ERUPTIONS, WAITS } from "./faithful-data.ts";
import { countPeaks, fillBins } from "./stats.hot.ts";

const LEFT = 52;
const RIGHT = 620;
const X_LOW = 0.4;
const X_HIGH = 6;
const HIST_TOP = 28;
const HIST_BOTTOM = 176;
const DENSITY_TOP = 1;
const DOT_TOP = 214;
const DOT_BOTTOM = 374;
const WAIT_LOW = 40;
const WAIT_HIGH = 100;
const FIRST = 1.6;

export const START_WIDTH = 0.5;
export const START_SHIFT = 0;
const counts = new Float64Array(160);

function sx(minutes: number): number {
  return LEFT + ((minutes - X_LOW) / (X_HIGH - X_LOW)) * (RIGHT - LEFT);
}

function sy(wait: number): number {
  return DOT_BOTTOM - ((wait - WAIT_LOW) / (WAIT_HIGH - WAIT_LOW)) * (DOT_BOTTOM - DOT_TOP);
}

function bar(left: number, width: number, count: number): string {
  const h = (count / (ERUPTIONS.length * width) / DENSITY_TOP) * (HIST_BOTTOM - HIST_TOP);
  const x0 = sx(left) + 1;
  const w = Math.max(sx(left + width) - sx(left) - 2, 0.5);
  const tip = `<title>${count} eruptions from ${left.toFixed(2)} to ${(left + width).toFixed(2)} min</title>`;
  const edge = `<line x1="${x0 - 1}" x2="${x0 - 1}" y1="${DOT_TOP}" y2="${DOT_BOTTOM}"/>`;
  return `<rect x="${x0}" y="${HIST_BOTTOM - h}" width="${w}" height="${h}" rx="${Math.min(2, w / 2)}">${tip}</rect>${edge}`;
}

export function faithfulBins(width: number, shift: number): { svg: string; note: string } {
  const origin = FIRST - shift * width - 1e-9;
  const bins = fillBins(counts, ERUPTIONS, origin, width);
  const parts: string[] = [];
  for (let i = 0; i < bins; i++) parts.push(bar(origin + i * width, width, counts[i] ?? 0));
  const peaks = countPeaks(counts, bins);
  return { svg: parts.join(""), note: `${width.toFixed(2)} min wide: ${peaks} peak${peaks === 1 ? "" : "s"}` };
}

function dots(): string {
  const out: string[] = [];
  for (let i = 0; i < ERUPTIONS.length; i++) out.push(`<circle cx="${sx(ERUPTIONS[i] ?? 0).toFixed(1)}" cy="${sy(WAITS[i] ?? 0).toFixed(1)}" r="3"/>`);
  return out.join("");
}

function axes(): string {
  const out: string[] = [];
  for (const m of [1, 2, 3, 4, 5, 6]) out.push(`<text x="${sx(m)}" y="${DOT_BOTTOM + 18}" text-anchor="middle">${m}</text>`);
  for (const w of [50, 70, 90]) out.push(`<line class="grid" x1="${LEFT}" x2="${RIGHT}" y1="${sy(w)}" y2="${sy(w)}"/><text x="${LEFT - 8}" y="${sy(w) + 4}" text-anchor="end">${w}</text>`);
  out.push(`<line class="base" x1="${LEFT}" x2="${RIGHT}" y1="${HIST_BOTTOM}" y2="${HIST_BOTTOM}"/>`);
  out.push(`<text x="${RIGHT}" y="${DOT_BOTTOM + 36}" text-anchor="end">eruption length, minutes →</text>`);
  out.push(`<text x="${LEFT}" y="12">how many eruptions last this long</text>`);
  out.push(`<text x="${LEFT}" y="${DOT_TOP - 8}">each eruption, by the wait until the next one (min)</text>`);
  return out.join("");
}

export function faithfulFigure(id: string): string {
  const first = faithfulBins(START_WIDTH, START_SHIFT);
  const clip = `<clipPath id="${id}-clip"><rect x="${LEFT}" y="${HIST_TOP - 12}" width="${RIGHT - LEFT}" height="${DOT_BOTTOM - HIST_TOP + 12}"/></clipPath>`;
  const svg = `<svg class="chart" viewBox="0 0 640 418" width="640" role="img" aria-label="ALT">${clip}${axes()}<g class="bins" clip-path="url(#${id}-clip)" data-bins>${first.svg}</g><g class="dots">${dots()}</g></svg>`;
  const width = `<span class="control"><label for="${id}-width">Bin width</label><input id="${id}-width" type="range" min="0.05" max="1.5" step="0.05" value="${START_WIDTH}" data-faithful-width></span>`;
  const shift = `<span class="control"><label for="${id}-shift">Shift</label><input id="${id}-shift" type="range" min="0" max="0.95" step="0.05" value="${START_SHIFT}" data-faithful-shift></span>`;
  return `${svg}<div class="controls">${width}${shift}<output for="${id}-width ${id}-shift">${first.note}</output></div>`;
}
