import { at, centred, keep, scale, svgHead, type Scale } from "./scale.ts";

const RHO = 950;
const C0 = 1480;
const GAMMA = 7;
const LEFT = 52;
const EDGE = 16;
const TOP = 20;
const BOTTOM = 270;
const HEIGHT = 312;
const V_LOW = 20;
const V_HIGH = 250;
const LOG_LOW = -1;
const LOG_HIGH = 3;
const STEP = 5;
export const V_C = 180.06;
export const START_SPEED: number = V_C;

export function hugoniot(v: number): number {
  const b = (RHO * C0 * C0) / GAMMA;
  let lo = RHO * 1.000001;
  let hi = RHO * 2;
  for (let i = 0; i < 200; i++) {
    const mid = (lo + hi) / 2;
    const f = b * (mid / RHO) ** GAMMA - b - (RHO * v * v * mid) / (mid - RHO);
    if (f > 0) hi = mid;
    else lo = mid;
  }
  const rho = (lo + hi) / 2;
  return (RHO * ((v * rho) / (rho - RHO)) * v) / 1e6;
}

export function stagnation(v: number): number {
  return (0.5 * RHO * v * v) / 1e6;
}

function across(chart: number): Scale {
  return scale(V_LOW, V_HIGH, LEFT, chart - EDGE);
}

function up(): Scale {
  return scale(LOG_LOW, LOG_HIGH, BOTTOM, TOP);
}

function sy(pressure: number): number {
  return at(up(), Math.log10(pressure));
}

function curve(x: Scale, pressure: (v: number) => number): string {
  const points: string[] = [];
  for (let v = V_LOW; v <= V_HIGH; v += STEP) points.push(`${at(x, v).toFixed(1)},${sy(pressure(v)).toFixed(1)}`);
  return points.join(" ");
}

function grid(x: Scale): string {
  const out: string[] = [];
  for (let k = LOG_LOW; k <= LOG_HIGH; k++) {
    const y = at(up(), k);
    out.push(`<line class="grid" x1="${x.r0}" x2="${x.r1}" y1="${y}" y2="${y}"/><text x="${x.r0 - 8}" y="${y + 4}" text-anchor="end">${10 ** k}</text>`);
  }
  const marks: number[] = [];
  for (let v = 50; v <= V_HIGH; v += 50) marks.push(v);
  const shown = keep(marks.map((m) => centred(at(x, m), String(m))), 6);
  marks.forEach((m, i) => {
    if (shown[i] === true) out.push(`<text x="${at(x, m)}" y="${BOTTOM + 18}" text-anchor="middle">${m}</text>`);
  });
  return `${out.join("")}<line class="base" x1="${x.r0}" x2="${x.r1}" y1="${BOTTOM}" y2="${BOTTOM}"/><text x="${x.r1}" y="${BOTTOM + 36}" text-anchor="end">bird speed, m/s →</text><text x="${x.r0}" y="10">pressure at the centre, MPa (log scale)</text>`;
}

function hits(x: Scale): string {
  const out: string[] = [];
  for (let v = 50; v <= V_HIGH; v += 50) {
    const tip = `At ${v} m/s: shock ${hugoniot(v).toFixed(0)} MPa, steady flow ${stagnation(v).toFixed(1)} MPa`;
    out.push(`<circle class="hit" cx="${at(x, v)}" cy="${sy(hugoniot(v))}" r="5" data-tip="${tip}"/><circle class="hit" cx="${at(x, v)}" cy="${sy(stagnation(v))}" r="5" data-tip="${tip}"/>`);
  }
  return out.join("");
}

export function marker(chart: number, v: number): string {
  const x = at(across(chart), v);
  const hi = sy(hugoniot(v));
  const lo = sy(stagnation(v));
  const anchor = x > chart - 120 ? "end" : "start";
  const dx = anchor === "end" ? -10 : 10;
  return `<line class="cursor" x1="${x}" x2="${x}" y1="${TOP}" y2="${BOTTOM}"/><circle class="dot shock" cx="${x}" cy="${hi}" r="5"/><circle class="dot steady" cx="${x}" cy="${lo}" r="5"/><text class="key shock" x="${x + dx}" y="${hi - 10}" text-anchor="${anchor}">${hugoniot(v).toFixed(0)} MPa</text><text class="key steady" x="${x + dx}" y="${lo - 10}" text-anchor="${anchor}">${stagnation(v).toFixed(1)} MPa</text>`;
}

export function wilbeckNote(v: number): string {
  return `${v.toFixed(0)} m/s: the shock is ${(hugoniot(v) / stagnation(v)).toFixed(0)} times the steady pressure`;
}

export function wilbeckSvg(chart: number, v: number): string {
  const x = across(chart);
  const ref = at(x, V_C);
  const shock = `<polyline class="line shock" points="${curve(x, hugoniot)}"/>`;
  const steady = `<polyline class="line steady" points="${curve(x, stagnation)}"/>`;
  const cruise = `<line class="ref" x1="${ref}" x2="${ref}" y1="${TOP}" y2="${BOTTOM}"/><text x="${ref}" y="${BOTTOM - 6}" text-anchor="middle">V<tspan dy="3" font-size="9">C</tspan></text>`;
  return `${svgHead(chart, HEIGHT)}${grid(x)}${cruise}${shock}${steady}<g data-marker>${marker(chart, v)}</g>${hits(x)}</svg>`;
}

export function wilbeckFigure(id: string, chart: number): string {
  const slider = `<span class="control"><label for="${id}-speed">Bird speed</label><input id="${id}-speed" type="range" min="${V_LOW}" max="${V_HIGH}" step="1" value="${Math.round(START_SPEED)}" data-wilbeck></span>`;
  return `${wilbeckSvg(chart, START_SPEED)}<div class="controls">${slider}<output for="${id}-speed">${wilbeckNote(START_SPEED)}</output></div>`;
}
