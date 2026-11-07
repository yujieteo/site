import { at, panelColumns, scale, svgHead } from "./scale.ts";

interface Metric {
  name: string;
  unit: string;
  values: readonly number[];
  verdict: string;
  cls: string;
  low: number;
  high: number;
  digits: number;
}

export const SPACINGS: readonly string[] = ["9 mm", "6 mm", "4.5 mm", "3.5 mm"];

export const METRICS: readonly Metric[] = [
  { name: "Plateau pressure vs steady flow", unit: "%", values: [25.8, 27.7, 13.1, 3.2], verdict: "converges", cls: "good", low: 0, high: 30, digits: 1 },
  { name: "Peak pressure vs shock", unit: "%", values: [-42.6, 0.9, 2.7, 11.3], verdict: "wanders", cls: "bad", low: -45, high: 15, digits: 1 },
  { name: "Maximum deflection", unit: "mm", values: [150.8, 152.1, 152.9, 228.1], verdict: "steady, then the skin tears", cls: "mid", low: 140, high: 240, digits: 1 },
  { name: "Skin shells eroded", unit: "", values: [0, 8, 25, 249], verdict: "never settles", cls: "bad", low: 0, high: 260, digits: 0 },
  { name: "Peak contact force", unit: "kN", values: [240.1, 229.3, 209.1, 203.7], verdict: "drifts down", cls: "mid", low: 190, high: 250, digits: 1 },
  { name: "Energy balance error", unit: "%", values: [0.32, 0.2, 0.11, 0.08], verdict: "always small", cls: "good", low: 0, high: 0.4, digits: 2 },
];

const LEFT = 8;
const GAP = 24;
const PANEL_H = 110;
const ROW_GAP = 34;
const PAD_Y = 44;
const MIN_PANEL = 220;

function number(m: Metric, i: number): string {
  const v = m.values[i] ?? 0;
  const sign = m.unit === "%" && v > 0 && m.name.includes("vs") ? "+" : "";
  return `${sign}${v.toFixed(m.digits)}${m.unit === "" ? "" : ` ${m.unit}`}`;
}

function panel(m: Metric, x0: number, y0: number, w: number, pick: number): string {
  const xs = scale(0, 3, x0 + 14, x0 + w - 14);
  const ys = scale(m.low, m.high, y0 + PANEL_H, y0 + 6);
  const pts = m.values.map((v, i) => `${at(xs, i).toFixed(1)},${at(ys, v).toFixed(1)}`).join(" ");
  const dots = m.values.map((v, i) => `<circle class="pt ${m.cls}" data-on="${i === pick}" cx="${at(xs, i)}" cy="${at(ys, v)}" r="${i === pick ? 7 : 5}" tabindex="0" data-tip="${SPACINGS[i]}: ${number(m, i)}"/>`).join("");
  const zero = m.low < 0 ? `<line class="grid" x1="${xs.r0}" x2="${xs.r1}" y1="${at(ys, 0)}" y2="${at(ys, 0)}"/>` : "";
  const head = `<text class="name" x="${x0}" y="${y0 - 22}">${m.name}</text><text x="${x0}" y="${y0 - 8}" class="verdict ${m.cls}">${m.verdict}</text>`;
  return `${head}<rect class="plot" x="${x0}" y="${y0}" width="${w}" height="${PANEL_H}" rx="6"/>${zero}<polyline class="line ${m.cls}" points="${pts}"/>${dots}`;
}

function ticks(x0: number, y: number, w: number): string {
  const xs = scale(0, 3, x0 + 14, x0 + w - 14);
  return SPACINGS.map((s, i) => `<text x="${at(xs, i)}" y="${y + PANEL_H + 16}" text-anchor="middle">${s}</text>`).join("");
}

export function convergeSvg(chart: number, pick: number): string {
  const cols = panelColumns(chart - LEFT, MIN_PANEL, GAP);
  const w = (chart - LEFT - GAP * (cols - 1)) / cols;
  const rows = Math.ceil(METRICS.length / cols);
  const parts: string[] = [];
  METRICS.forEach((m, i) => {
    const x0 = LEFT + (i % cols) * (w + GAP);
    const y0 = PAD_Y + Math.floor(i / cols) * (PANEL_H + ROW_GAP + 26);
    parts.push(panel(m, x0, y0, w, pick), ticks(x0, y0, w));
  });
  const height = PAD_Y + rows * (PANEL_H + ROW_GAP + 26);
  return `${svgHead(chart, height)}${parts.join("")}</svg>`;
}

export function convergeNote(pick: number): string {
  return `${SPACINGS[pick]} mesh: ${METRICS.map((m) => `${m.name.split(" ")[0]?.toLowerCase()} ${number(m, pick)}`).join(" · ")}`;
}

export function convergeFigure(id: string, chart: number): string {
  const slider = `<span class="control"><label for="${id}-mesh">Bird spacing</label><input id="${id}-mesh" type="range" min="0" max="3" step="1" value="1" data-converge></span>`;
  return `${convergeSvg(chart, 1)}<div class="controls">${slider}<output for="${id}-mesh">${convergeNote(1)}</output></div>`;
}
