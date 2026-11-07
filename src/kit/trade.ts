import { at, PHONE, scale, svgHead, type Scale } from "./scale.ts";

interface View {
  key: string;
  title: string;
  unit: string;
  cpu: readonly (number | null)[];
  gpu: readonly number[];
  low: number;
  high: number;
}

const STEP_VIEW: View = { key: "step", title: "Time for one step", unit: "ms", cpu: [18.2, 76.7, 146, 288], gpu: [0.99, 1.51, 1.64, 2.25], low: -1, high: 3 };
const RUN_VIEW: View = { key: "run", title: "Time for the whole 3 ms strike", unit: "s", cpu: [65, 301, 1085, null], gpu: [0.9, 3.6, 9.7, 20.9], low: -1, high: 4 };
export const VIEWS: readonly View[] = [STEP_VIEW, RUN_VIEW];

const MESHES: readonly string[] = ["9 mm", "6 mm", "4.5 mm", "3.5 mm"];
const LEFT = 52;
const EDGE = 12;
const TOP = 24;
const BOTTOM = 250;
const HEIGHT = 290;

function up(v: View): Scale {
  return scale(v.low, v.high, BOTTOM, TOP);
}

function label(value: number, unit: string): string {
  return `${value >= 100 ? value.toFixed(0) : value >= 10 ? value.toFixed(1) : value.toFixed(2)} ${unit}`;
}

function bar(v: View, x: number, w: number, value: number | null, cls: string, mesh: string): string {
  if (value === null) return `<text x="${x + w / 2}" y="${BOTTOM - 8}" text-anchor="middle" class="note">not run</text>`;
  const y = at(up(v), Math.log10(value));
  const tip = `${mesh} mesh, ${cls === "cpu" ? "CPU" : "GPU"}: ${label(value, v.unit)}`;
  return `<rect class="bar ${cls}" x="${x}" y="${y}" width="${w}" height="${BOTTOM - y}" rx="3" tabindex="0" data-tip="${tip}"/><text x="${x + w / 2}" y="${y - 6}" text-anchor="middle">${label(value, v.unit)}</text>`;
}

function grid(v: View, right: number): string {
  const out: string[] = [];
  for (let k = v.low; k <= v.high; k++) {
    const y = at(up(v), k);
    out.push(`<line class="grid" x1="${LEFT}" x2="${right}" y1="${y}" y2="${y}"/><text x="${LEFT - 8}" y="${y + 4}" text-anchor="end">${10 ** k}</text>`);
  }
  return out.join("");
}

export function tradeSvg(chart: number, view: string): string {
  const v = view === "run" ? RUN_VIEW : STEP_VIEW;
  const right = chart - EDGE;
  const slot = (right - LEFT) / MESHES.length;
  const w = Math.min(46, slot / 2.6);
  const parts: string[] = [grid(v, right)];
  MESHES.forEach((m, i) => {
    const centre = LEFT + slot * (i + 0.5);
    parts.push(bar(v, centre - w - 2, w, v.cpu[i] ?? null, "cpu", m), bar(v, centre + 2, w, v.gpu[i] ?? 0, "gpu", m));
    parts.push(`<text x="${centre}" y="${BOTTOM + 18}" text-anchor="middle">${m}</text>`);
  });
  const near = chart < PHONE;
  const key = `<text x="${near ? 0 : LEFT}" y="10" class="key cpu">CPU (one core, WebAssembly)</text><text x="${near ? chart : LEFT + 200}" y="10"${near ? ' text-anchor="end"' : ""} class="key gpu">GPU (WebGPU)</text>`;
  return `${svgHead(chart, HEIGHT)}${key}${parts.join("")}<line class="base" x1="${LEFT}" x2="${right}" y1="${BOTTOM}" y2="${BOTTOM}"/><text x="${right}" y="${BOTTOM + 36}" text-anchor="end">bird spacing, finer to the right →</text></svg>`;
}

export function tradeFigure(_id: string, chart: number): string {
  const buttons = VIEWS.map((v, i) => `<button class="button" type="button" data-view="${v.key}" data-active="${i === 0}">${v.title}</button>`).join("");
  return `${tradeSvg(chart, "step")}<div class="controls">${buttons}</div>`;
}
