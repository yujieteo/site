import { ERUPTIONS, WAITS } from "./faithful-data.ts";
import { at, centred, fitCount, keep, pick, scale, svgHead, ticks, type Scale } from "./scale.ts";
import { countPeaks, fillBins } from "./stats.hot.ts";

const LEFT = 44;
const EDGE = 14;
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
const HEIGHT = 418;

export const START_WIDTH = 0.5;
export const START_SHIFT = 0;
const counts = new Float64Array(160);

function across(chart: number): Scale {
  return scale(X_LOW, X_HIGH, LEFT, chart - EDGE);
}

function sy(wait: number): number {
  return at(scale(WAIT_LOW, WAIT_HIGH, DOT_BOTTOM, DOT_TOP), wait);
}

function bar(x: Scale, left: number, width: number, count: number): string {
  const h = (count / (ERUPTIONS.length * width) / DENSITY_TOP) * (HIST_BOTTOM - HIST_TOP);
  const x0 = at(x, left) + 1;
  const w = Math.max(at(x, left + width) - at(x, left) - 2, 0.5);
  const tip = `${count} eruptions from ${left.toFixed(2)} to ${(left + width).toFixed(2)} min`;
  const edge = `<line x1="${x0 - 1}" x2="${x0 - 1}" y1="${DOT_TOP}" y2="${DOT_BOTTOM}"/>`;
  return `<rect x="${x0}" y="${HIST_BOTTOM - h}" width="${w}" height="${h}" rx="${Math.min(2, w / 2)}" data-tip="${tip}"></rect>${edge}`;
}

export function faithfulBins(width: number, shift: number, chart: number): { svg: string; note: string } {
  const x = across(chart);
  const origin = FIRST - shift * width - 1e-9;
  const bins = fillBins(counts, ERUPTIONS, origin, width);
  const parts: string[] = [];
  for (let i = 0; i < bins; i++) parts.push(bar(x, origin + i * width, width, counts[i] ?? 0));
  const peaks = countPeaks(counts, bins);
  return { svg: parts.join(""), note: `${width.toFixed(2)} min wide: ${peaks} peak${peaks === 1 ? "" : "s"}` };
}

function dots(x: Scale): string {
  const out: string[] = [];
  for (let i = 0; i < ERUPTIONS.length; i++) {
    out.push(`<circle cx="${at(x, ERUPTIONS[i] ?? 0).toFixed(1)}" cy="${sy(WAITS[i] ?? 0).toFixed(1)}" r="3"/>`);
  }
  return out.join("");
}

function xLabels(x: Scale): string {
  const marks = ticks(X_LOW, X_HIGH, fitCount(x.r1 - x.r0, "6"));
  const shown = keep(marks.map((m) => centred(at(x, m), String(m))), 4);
  const out: string[] = [];
  for (let i = 0; i < marks.length; i++) {
    if (shown[i] === true) out.push(`<text x="${at(x, marks[i] ?? 0)}" y="${DOT_BOTTOM + 18}" text-anchor="middle">${marks[i]}</text>`);
  }
  return out.join("");
}

function yLabels(x: Scale): string {
  const out: string[] = [];
  for (const w of ticks(WAIT_LOW, WAIT_HIGH, 4)) {
    out.push(`<line class="grid" x1="${x.r0}" x2="${x.r1}" y1="${sy(w)}" y2="${sy(w)}"/><text x="${x.r0 - 8}" y="${sy(w) + 4}" text-anchor="end">${w}</text>`);
  }
  return out.join("");
}

function axes(x: Scale): string {
  const room = x.r1 - x.r0;
  const top = pick(room, ["how many eruptions last this long", "eruptions of this length"]);
  const mid = pick(room, ["each eruption, by the wait until the next one (min)", "wait until the next eruption (min)", "wait (min)"]);
  const bottom = pick(room, ["eruption length, minutes →", "minutes →"]);
  const base = `<line class="base" x1="${x.r0}" x2="${x.r1}" y1="${HIST_BOTTOM}" y2="${HIST_BOTTOM}"/>`;
  const names = `<text x="${x.r1}" y="${DOT_BOTTOM + 36}" text-anchor="end">${bottom}</text><text x="${x.r0}" y="12">${top}</text><text x="${x.r0}" y="${DOT_TOP - 8}">${mid}</text>`;
  return `${xLabels(x)}${yLabels(x)}${base}${names}`;
}

export function faithfulSvg(id: string, chart: number, binWidth: number, shift: number): string {
  const x = across(chart);
  const first = faithfulBins(binWidth, shift, chart);
  const clip = `<clipPath id="${id}-clip"><rect x="${x.r0}" y="${HIST_TOP - 12}" width="${x.r1 - x.r0}" height="${DOT_BOTTOM - HIST_TOP + 12}"/></clipPath>`;
  return `${svgHead(chart, HEIGHT)}${clip}${axes(x)}<g class="bins" clip-path="url(#${id}-clip)" data-bins>${first.svg}</g><g class="dots">${dots(x)}</g></svg>`;
}

export function faithfulFigure(id: string, chart: number): string {
  const first = faithfulBins(START_WIDTH, START_SHIFT, chart);
  const width = `<span class="control"><label for="${id}-width">Bin width</label><input id="${id}-width" type="range" min="0.05" max="1.5" step="0.05" value="${START_WIDTH}" data-faithful-width></span>`;
  const shift = `<span class="control"><label for="${id}-shift">Shift</label><input id="${id}-shift" type="range" min="0" max="0.95" step="0.05" value="${START_SHIFT}" data-faithful-shift></span>`;
  return `${faithfulSvg(id, chart, START_WIDTH, START_SHIFT)}<div class="controls">${width}${shift}<output for="${id}-width ${id}-shift">${first.note}</output></div>`;
}
