import { CANDIDATES, DIALS, PRESETS, SCORED } from "./data-scores.ts";
import { addStyle, choices, escapeText, head, mount, setActive, stat, whole } from "./look.ts";
import { groups, perfect, ranked, weighted, type Row } from "./scores.ts";
import { plotWidth, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { at, scale, svgHead } from "../scale.ts";

const CSS = `
.r-dials { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 10px 20px; margin: 0 0 20px; }
.r-dials label { display: grid; grid-template-columns: 1fr auto; gap: 2px 8px; font-size: 0.8125rem; line-height: 1.3; }
.r-dials input { grid-column: 1 / -1; width: 100%; accent-color: var(--fig); margin: 0; }
.r-dials output { color: var(--muted); font-variant-numeric: tabular-nums; }
.r-top { list-style: none; margin: 0 0 20px; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 2px 24px; counter-reset: none; }
.r-top li { display: grid; grid-template-columns: 2.2em 1fr auto; align-items: baseline; gap: 6px; padding: 5px 0; border-bottom: 1px solid var(--line); font-size: 0.875rem; }
.r-top .n { color: var(--muted); font-variant-numeric: tabular-nums; font-size: 0.75rem; }
.r-top .s { font-variant-numeric: tabular-nums; color: var(--muted); }
.r-top li[data-perfect] .name::after { content: ""; display: inline-block; width: 7px; height: 7px; margin-left: 6px; border-radius: 50%; background: var(--fig); vertical-align: 1px; }
.r-hist rect { fill: var(--underline); }
.r-hist rect[data-top] { fill: var(--fig); }
.r-hist .cut { stroke: var(--fig); stroke-dasharray: 3 3; }
`;

const HEIGHT = 170;
const TOP = 16;
const BASE = 140;
const BIN = 2.5;
const BINS = 40;
const LEFT = 8;

function sliders(weights: readonly number[]): string {
  const out: string[] = [];
  for (let i = 0; i < DIALS.length; i++) {
    const name = DIALS[i]?.[0] ?? "";
    out.push(`<label>${name}<output data-out="${i}"></output><input type="range" min="0" max="100" value="${weights[i] ?? 0}" data-weight="${i}" aria-label="Weight on ${name}"></label>`);
  }
  return `<div class="r-dials">${out.join("")}</div>`;
}

function topTen(rows: readonly Row[]): string {
  const out: string[] = [];
  for (let i = 0; i < 10; i++) {
    const row = rows[i];
    if (!row) break;
    const tied = i > 0 && Math.abs((rows[i - 1]?.score ?? -1) - row.score) < 1e-9;
    out.push(`<li${perfect(row) ? " data-perfect" : ""}><span class="n">${tied ? "=" : String(i + 1)}</span><span class="name">${escapeText(row.name)}</span><span class="s">${row.score.toFixed(1)}</span></li>`);
  }
  return out.join("");
}

function histogram(width: number, weights: readonly number[], cut: number): string {
  const counts = Array.from({ length: BINS }, () => 0);
  for (const g of groups()) {
    const bin = Math.min(BINS - 1, Math.floor(weighted(g.digits, weights) / BIN));
    counts[bin] = (counts[bin] ?? 0) + g.count;
  }
  const most = Math.max(1, ...counts);
  const x = scale(0, 100, LEFT, width - LEFT);
  const bars: string[] = [];
  for (let b = 0; b < BINS; b++) {
    const n = counts[b] ?? 0;
    const h = (n / most) * (BASE - TOP);
    const top = (b + 1) * BIN > cut;
    bars.push(`<rect x="${at(x, b * BIN) + 1}" y="${BASE - h}" width="${Math.max(1, at(x, BIN) - at(x, 0) - 2)}" height="${h}" rx="1.5"${top ? " data-top" : ""} tabindex="0" data-tip="${whole(n)} results score ${(b * BIN).toFixed(1)} to ${((b + 1) * BIN).toFixed(1)}"/>`);
  }
  const line = `<line class="cut" x1="${at(x, cut)}" x2="${at(x, cut)}" y1="${TOP - 8}" y2="${BASE}"/>`;
  const labels = `<text x="${LEFT}" y="${BASE + 18}">0</text><text x="${width / 2}" y="${BASE + 18}" text-anchor="middle">50</text><text x="${width - LEFT}" y="${BASE + 18}" text-anchor="end">100</text>`;
  return `${svgHead(width, HEIGHT)}<g class="r-hist">${bars.join("")}${line}</g>${labels}</svg>`.replace("ALT", "Histogram of all scored results under these weights");
}

function readWeights(root: Element): number[] {
  const out: number[] = [];
  for (const input of root.querySelectorAll("input[data-weight]")) out.push(input instanceof HTMLInputElement ? Number(input.value) : 0);
  return out;
}

function shares(root: Element, weights: readonly number[]): void {
  const total = weights.reduce((a, b) => a + b, 0);
  for (const out of root.querySelectorAll("[data-out]")) {
    const i = Number(out.getAttribute("data-out"));
    out.textContent = total > 0 ? `${Math.round((100 * (weights[i] ?? 0)) / total)}%` : "0%";
  }
}

function summary(rows: readonly Row[], weights: readonly number[]): string {
  const cut = rows[9]?.score ?? 0;
  const fixed = rows.slice(0, 10).filter(perfect).length;
  let tied = 0;
  for (const g of groups()) if (Math.abs(weighted(g.digits, weights) - cut) < 1e-9) tied += g.count;
  return `<b>${fixed}</b> of the ten are perfect scores, marked with a dot. The tenth seat scores <b>${cut.toFixed(1)}</b>, and <b>${tied}</b> results tie at that score. The tool breaks a tie by the default score first, then by name.`;
}

function draw(figure: HTMLElement, root: Element): void {
  const weights = readWeights(root);
  shares(root, weights);
  const total = weights.reduce((a, b) => a + b, 0);
  const list = root.querySelector("[data-list]");
  const note = root.querySelector("[data-note]");
  const chart = root.querySelector("[data-chart]");
  if (!list || !note || !chart) return;
  if (total === 0) {
    note.textContent = "Every weight is zero, so nothing can be ranked. Move any slider.";
    list.innerHTML = "";
    chart.innerHTML = "";
    hideTooltips(figure);
    return;
  }
  const rows = ranked(weights);
  list.innerHTML = topTen(rows);
  note.innerHTML = summary(rows, weights);
  hideTooltips(figure);
  chart.innerHTML = histogram(plotWidth(figure), weights, rows[9]?.score ?? 0);
}

function wire(figure: HTMLElement, root: Element): void {
  root.addEventListener("input", () => {
    setActive(root, "preset", -1);
    draw(figure, root);
  });
  root.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("[data-preset]") : null;
    if (!button) return;
    const preset = PRESETS[Number(button.getAttribute("data-preset"))];
    const inputs = root.querySelectorAll("input[data-weight]");
    inputs.forEach((input, i) => {
      if (input instanceof HTMLInputElement) input.value = String(preset?.[1][i] ?? 0);
    });
    setActive(root, "preset", Number(button.getAttribute("data-preset")));
    draw(figure, root);
  });
  watch(figure, () => {
    draw(figure, root);
  });
}

export function show(figure: HTMLElement): void {
  addStyle("theorem-rank", CSS);
  const start = PRESETS[0]?.[1] ?? [];
  const stats = `<div class="t-stats">${stat(whole(SCORED), "results scored on seven dials")}${stat(String(CANDIDATES.length), "can ever reach the top ten, under any weights")}${stat("5", "are perfect, and are in every top ten")}</div>`;
  const html = `${head("The weights", "Five of the ten seats are taken before you touch a slider")}${stats}${choices("preset", PRESETS.map((p) => p[0]), 0)}${sliders(start)}<ol class="r-top" data-list></ol><div data-chart></div><p class="t-note" data-note aria-live="polite"></p>`;
  const root = mount(figure, 1, html);
  if (!root) return;
  wire(figure, root);
  draw(figure, root);
  wireTooltips(figure);
}
