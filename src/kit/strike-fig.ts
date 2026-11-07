import { BIRD, CURVE_DEFLECTION, CURVE_FORCE, CURVE_US, FRAME_US, PROFILE } from "./strike-data.ts";
import { at, PHONE, scale, svgHead, type Scale } from "./scale.ts";

export interface Live {
  us: number[];
  deflection: number[];
}

const LEFT = 48;
const EDGE = 16;
const HALF_SPAN = 533.4;
const Z_LOW = -190;
const Z_HIGH = 250;
const CURVE_H = 130;
const CURVE_GAP = 56;
const T_END = 3000;
const FORCE_HIGH = 260;
const DEFLECTION_HIGH = 160;
const TENTH = 10;
export const FRAMES: number = FRAME_US.length;

function headroom(chart: number): number {
  return chart < PHONE ? 38 : 20;
}

function gap(chart: number): number {
  return chart < PHONE ? 76 : CURVE_GAP;
}

function sideHeight(chart: number): number {
  return Math.round(((chart - LEFT - EDGE) / (2 * HALF_SPAN)) * (Z_HIGH - Z_LOW)) + headroom(chart);
}

function sideScales(chart: number): { x: Scale; z: Scale } {
  const h = sideHeight(chart);
  return { x: scale(-HALF_SPAN, HALF_SPAN, LEFT, chart - EDGE), z: scale(Z_LOW, Z_HIGH, h, headroom(chart)) };
}

export function nearest(us: number): number {
  let best = 0;
  for (let i = 0; i < CURVE_US.length; i++) if ((CURVE_US[i] ?? 0) <= us) best = i;
  return best;
}

export function strikeNote(frame: number): string {
  const i = nearest(FRAME_US[frame] ?? 0);
  return `t = ${FRAME_US[frame]} µs · deflection ${((CURVE_DEFLECTION[i] ?? 0) / TENTH).toFixed(1)} mm · contact force ${CURVE_FORCE[i]} kN`;
}

export function sideParts(chart: number, frame: number): string {
  const { x, z } = sideScales(chart);
  const profile = PROFILE[frame] ?? [];
  const last = profile.length - 1;
  const skin = profile.map((v, i) => `${at(x, -HALF_SPAN + (2 * HALF_SPAN * i) / last).toFixed(1)},${at(z, v / TENTH).toFixed(1)}`).join(" ");
  const bird = BIRD[frame] ?? [];
  const dots: string[] = [];
  for (let i = 0; i < bird.length; i += 2) dots.push(`<circle cx="${at(x, bird[i] ?? 0).toFixed(1)}" cy="${at(z, bird[i + 1] ?? 0).toFixed(1)}" r="2.4"/>`);
  return `<g class="goose">${dots.join("")}</g><polyline class="line skin" points="${skin}"/>`;
}

function curveScales(chart: number): { t: Scale; d: Scale; f: Scale } {
  const top = sideHeight(chart) + gap(chart);
  const t = scale(0, T_END, LEFT, chart - EDGE);
  return { t, d: scale(0, DEFLECTION_HIGH, top + CURVE_H, top), f: scale(0, FORCE_HIGH, top + CURVE_H, top) };
}

function trace(t: Scale, y: Scale, us: readonly number[], values: readonly number[], div: number): string {
  return us.map((u, i) => `${at(t, u).toFixed(1)},${at(y, (values[i] ?? 0) / div).toFixed(1)}`).join(" ");
}

export function cursorPart(chart: number, frame: number): string {
  const { t, d } = curveScales(chart);
  const x = at(t, FRAME_US[frame] ?? 0);
  const value = (CURVE_DEFLECTION[nearest(FRAME_US[frame] ?? 0)] ?? 0) / TENTH;
  return `<line class="cursor" x1="${x}" x2="${x}" y1="${d.r1}" y2="${d.r0}"/><circle class="dot shock" cx="${x}" cy="${at(d, value)}" r="5"/>`;
}

export function livePart(chart: number, live: Live | null): string {
  if (!live || live.us.length < 2) return "";
  const { t, d } = curveScales(chart);
  return `<polyline class="line live" points="${trace(t, d, live.us, live.deflection, 1)}"/>`;
}

function curveAxes(chart: number): string {
  const { t, d } = curveScales(chart);
  const out: string[] = [`<line class="base" x1="${t.r0}" x2="${t.r1}" y1="${d.r0}" y2="${d.r0}"/>`];
  for (let us = 0; us <= T_END; us += 1000) out.push(`<text x="${at(t, us)}" y="${d.r0 + 18}" text-anchor="middle">${us / 1000} ms</text>`);
  for (let mm = 0; mm <= DEFLECTION_HIGH; mm += 80) out.push(`<line class="grid" x1="${t.r0}" x2="${t.r1}" y1="${at(d, mm)}" y2="${at(d, mm)}"/><text x="${t.r0 - 8}" y="${at(d, mm) + 4}" text-anchor="end">${mm}</text>`);
  const blue = `deflection in mm <tspan class="shock">(blue, recorded)</tspan>,`;
  const orange = `contact force <tspan class="steady">(orange, 0 to ${FORCE_HIGH} kN)</tspan>`;
  if (chart < PHONE) out.push(`<text x="${t.r0}" y="${d.r1 - 28}">${blue}<tspan x="${t.r0}" dy="16">${orange}</tspan></text>`);
  else out.push(`<text x="${t.r0}" y="${d.r1 - 12}">${blue} ${orange}</text>`);
  return out.join("");
}

export function strikeSvg(chart: number, frame: number, live: Live | null): string {
  const { t, d, f } = curveScales(chart);
  const height = sideHeight(chart) + gap(chart) + CURVE_H + 30;
  const recorded = `<polyline class="line shock" points="${trace(t, d, CURVE_US, CURVE_DEFLECTION, TENTH)}"/><polyline class="line steady" points="${trace(t, f, CURVE_US, CURVE_FORCE, 1)}"/>`;
  const edges = scaleEdges(chart);
  return `${svgHead(chart, height)}${edges}<g data-side>${sideParts(chart, frame)}</g>${curveAxes(chart)}${recorded}<g data-live>${livePart(chart, live)}</g><g data-cursor>${cursorPart(chart, frame)}</g></svg>`;
}

function sideTitle(chart: number, x: number): string {
  if (chart < PHONE) return `<text x="${x}" y="12">side view along the panel,<tspan x="${x}" dy="16">bird in grey (one 9 mm slice)</tspan></text>`;
  return `<text x="${x}" y="12">side view along the panel, bird in grey (one 9 mm slice)</text>`;
}

function scaleEdges(chart: number): string {
  const { x, z } = sideScales(chart);
  const y = at(z, 0);
  const clamp = (cx: number): string => `<rect class="clamp" x="${cx - 5}" y="${y - 10}" width="10" height="20" rx="2"/>`;
  return `<line class="base" x1="${x.r0}" x2="${x.r1}" y1="${y}" y2="${y}" stroke-dasharray="3 4"/>${clamp(x.r0)}${clamp(x.r1)}${sideTitle(chart, x.r0)}`;
}

export function strikeFigure(id: string, chart: number): string {
  const scrub = `<span class="control"><button class="button" type="button" data-play aria-pressed="false">Play</button><label for="${id}-t">Time</label><input id="${id}-t" type="range" min="0" max="${FRAMES - 1}" step="1" value="0" data-scrub></span>`;
  const live = `<span class="control"><label for="${id}-skin">Skin</label><input id="${id}-skin" type="range" min="0.8" max="3.2" step="0.4" value="1.6" data-skin><output data-skin-out>1.6 mm</output><button class="button" type="button" data-run>Run it yourself</button></span>`;
  return `${strikeSvg(chart, 0, null)}<div class="controls">${scrub}<output data-note>${strikeNote(0)}</output></div><div class="controls">${live}</div><p class="step-label" aria-live="polite" data-status>Recorded from the same solver. The button runs it in your browser: 9 mm bird spacing, about 10 seconds.</p>`;
}
