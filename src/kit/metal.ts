import { at, centred, keep, scale, svgHead, type Scale } from "./scale.ts";

interface Alloy {
  name: string;
  modulus: number;
  yield: number;
  ultimate: number;
  elongation: number;
  cls: string;
}

export const ALLOYS: readonly Alloy[] = [
  { name: "2024-T3 skin", modulus: 73.1, yield: 345, ultimate: 483, elongation: 0.18, cls: "skin" },
  { name: "7075-T6 stiffeners", modulus: 71.7, yield: 503, ultimate: 572, elongation: 0.11, cls: "stiff" },
];

const LEFT = 52;
const EDGE = 16;
const TOP = 20;
const BOTTOM = 270;
const HEIGHT = 312;
const STRAIN_HIGH = 0.2;
const STRESS_HIGH = 600;
export const START_STRAIN = 0.1;

function across(chart: number): Scale {
  return scale(0, STRAIN_HIGH * 100, LEFT, chart - EDGE);
}

function up(): Scale {
  return scale(0, STRESS_HIGH, BOTTOM, TOP);
}

export function stress(a: Alloy, strain: number): number {
  const knee = a.yield / (a.modulus * 1000);
  if (strain <= knee) return a.modulus * 1000 * strain;
  if (strain >= a.elongation) return a.ultimate;
  return a.yield + ((strain - knee) / (a.elongation - knee)) * (a.ultimate - a.yield);
}

export function erosion(a: Alloy): number {
  return a.elongation - a.ultimate / (a.modulus * 1000);
}

function path(x: Scale, a: Alloy): string {
  const knee = a.yield / (a.modulus * 1000);
  const pts = [[0, 0], [knee, a.yield], [a.elongation, a.ultimate]];
  return pts.map(([e, s]) => `${at(x, (e ?? 0) * 100).toFixed(1)},${at(up(), s ?? 0).toFixed(1)}`).join(" ");
}

function axes(x: Scale): string {
  const out: string[] = [];
  for (let s = 0; s <= STRESS_HIGH; s += 200) {
    const y = at(up(), s);
    out.push(`<line class="grid" x1="${x.r0}" x2="${x.r1}" y1="${y}" y2="${y}"/><text x="${x.r0 - 8}" y="${y + 4}" text-anchor="end">${s}</text>`);
  }
  const marks = [0, 5, 10, 15, 20];
  const shown = keep(marks.map((m) => centred(at(x, m), `${m}%`)), 6);
  marks.forEach((m, i) => {
    if (shown[i] === true) out.push(`<text x="${at(x, m)}" y="${BOTTOM + 18}" text-anchor="middle">${m}%</text>`);
  });
  return `${out.join("")}<line class="base" x1="${x.r0}" x2="${x.r1}" y1="${BOTTOM}" y2="${BOTTOM}"/><text x="${x.r1}" y="${BOTTOM + 36}" text-anchor="end">strain →</text><text x="${x.r0}" y="10">stress, MPa</text>`;
}

function ends(x: Scale): string {
  const out: string[] = [];
  for (const a of ALLOYS) {
    const e = erosion(a);
    const tip = `${a.name}: elements erode at a plastic strain of ${(e * 100).toFixed(1)}%`;
    out.push(`<circle class="hit ${a.cls}" cx="${at(x, a.elongation * 100)}" cy="${at(up(), a.ultimate)}" r="6" data-tip="${tip}"/>`);
  }
  return out.join("");
}

export function metalCursor(chart: number, strain: number): string {
  const x = across(chart);
  const px = at(x, strain * 100);
  const dots = ALLOYS.map((a) => `<circle class="dot ${a.cls}" cx="${px}" cy="${at(up(), stress(a, strain))}" r="5"/>`).join("");
  return `<line class="cursor" x1="${px}" x2="${px}" y1="${TOP}" y2="${BOTTOM}"/>${dots}`;
}

export function metalNote(strain: number): string {
  const parts = ALLOYS.map((a) => {
    const gone = strain >= a.elongation;
    return `${a.name.split("-")[0]}: ${gone ? "eroded" : `${stress(a, strain).toFixed(0)} MPa`}`;
  });
  return `${(strain * 100).toFixed(1)}% strain · ${parts.join(" · ")}`;
}

export function metalSvg(chart: number, strain: number): string {
  const x = across(chart);
  const lines = ALLOYS.map((a) => `<polyline class="line ${a.cls}" points="${path(x, a)}"/>`).join("");
  const names = ALLOYS.map((a) => `<text class="key ${a.cls}" x="${x.r1 - 6}" y="${at(up(), a.ultimate) - 10}" text-anchor="end">${a.name}</text>`).join("");
  return `${svgHead(chart, HEIGHT)}${axes(x)}${lines}${names}<g data-marker>${metalCursor(chart, strain)}</g>${ends(x)}</svg>`;
}

export function metalFigure(id: string, chart: number): string {
  const slider = `<span class="control"><label for="${id}-strain">Strain</label><input id="${id}-strain" type="range" min="0" max="${STRAIN_HIGH * 100}" step="0.5" value="${START_STRAIN * 100}" data-metal></span>`;
  return `${metalSvg(chart, START_STRAIN)}<div class="controls">${slider}<output for="${id}-strain">${metalNote(START_STRAIN)}</output></div>`;
}
