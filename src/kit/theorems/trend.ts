import { TRENDS } from "./data-trends.ts";
import { addStyle, choices, escapeText, head, mount, setActive } from "./look.ts";
import { plotWidth, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { at, centred, keep, scale, svgHead, tickStep, ticks } from "../scale.ts";

const CSS = `
.tr-line { fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.tr-dot { stroke: var(--card); stroke-width: 1.5; outline: none; }
.tr-dot:focus-visible { stroke: var(--ink); stroke-width: 2; }
.tr-keys { margin: 0 0 12px; }
`;

const HEIGHT = 300;
const TOP = 20;
const BASE = 264;
const LEFT = 48;
const RIGHT = 16;
const BINS = 15;
const FIRST = 1991;

export function fieldPeak(field: number): { name: string; rate: number } {
  let best = { name: "", rate: 0 };
  for (const [name, rates] of TRENDS[field]?.[1] ?? []) for (const r of rates) if (r !== null && r > best.rate) best = { name, rate: r };
  return best;
}

function span(bin: number): string {
  return `${FIRST + 2 * bin}–${FIRST + 2 * bin + 1}`;
}

function series(field: number, k: number, width: number, top: number): string {
  const item = TRENDS[field]?.[1][k];
  if (!item) return "";
  const x = scale(0, BINS - 1, LEFT, width - RIGHT);
  const y = scale(0, top, BASE, TOP);
  const colour = `var(--series-${k + 1})`;
  const runs: string[] = [];
  const dots: string[] = [];
  let path = "";
  item[1].forEach((r, b) => {
    if (r === null) {
      path = path === "" ? "" : `${path}|`;
      return;
    }
    const px = at(x, b).toFixed(1);
    const py = at(y, r).toFixed(1);
    path += path === "" || path.endsWith("|") ? `M${px} ${py}` : `L${px} ${py}`;
    dots.push(`<circle class="tr-dot" cx="${px}" cy="${py}" r="3.5" fill="${colour}" tabindex="0" data-tip="${span(b)}, ${TRENDS[field]?.[0] ?? ""}: ${escapeText(item[0])}, ${r.toFixed(1)} per 10,000 papers"/>`);
  });
  for (const part of path.split("|")) if (part !== "") runs.push(`<path class="tr-line" stroke="${colour}" d="${part}"/>`);
  return `${runs.join("")}${dots.join("")}`;
}

function axes(width: number, top: number): string {
  const x = scale(0, BINS - 1, LEFT, width - RIGHT);
  const y = scale(0, top, BASE, TOP);
  const parts: string[] = [];
  for (const v of ticks(0, top, 5)) parts.push(`<line class="grid" x1="${LEFT}" x2="${width - RIGHT}" y1="${at(y, v)}" y2="${at(y, v)}"/><text x="${LEFT - 8}" y="${at(y, v) + 4}" text-anchor="end">${v}</text>`);
  const years: string[] = [];
  for (let b = 0; b < BINS; b++) years.push(String(FIRST + 2 * b));
  years[BINS - 1] = "2020";
  const order = [0, BINS - 1, ...years.map((_, b) => b).slice(1, BINS - 1)];
  const shown = keep(order.map((b) => centred(at(x, b), years[b] ?? "")), 24);
  order.forEach((b, i) => {
    if (shown[i] === true) parts.push(`<text x="${at(x, b)}" y="${BASE + 18}" text-anchor="${b === 0 ? "start" : b === BINS - 1 ? "end" : "middle"}">${years[b] ?? ""}</text>`);
  });
  parts.push(`<text x="${LEFT}" y="${TOP - 8}">Papers naming it, per 10,000 in the field</text>`);
  return parts.join("");
}

function chart(width: number, field: number): string {
  const peak = Math.max(1, fieldPeak(field).rate);
  const step = tickStep(peak, 5);
  const top = Math.ceil(peak / step) * step;
  const lines: string[] = [];
  for (let k = 0; k < 4; k++) lines.push(series(field, k, width, top));
  return `${svgHead(width, HEIGHT)}${axes(width, top)}${lines.join("")}</svg>`.replace("ALT", `Rates of four results in ${TRENDS[field]?.[0] ?? ""} papers from 1991 to 2020`);
}

function keys(field: number): string {
  return (TRENDS[field]?.[1] ?? []).map((item, k) => `<span class="t-key"><i style="background:var(--series-${k + 1})"></i>${escapeText(item[0])}</span>`).join("");
}

export function show(figure: HTMLElement): void {
  addStyle("theorem-trend", CSS);
  const html = `${head("Names in papers", "Each field has its own short list, and most fields lean on one result")}${choices("field", TRENDS.map((t) => t[0]), 0)}<p class="tr-keys" data-keys></p><div data-chart></div><p class="t-note">Two-year bins. A gap means the field had fewer than 100 papers in that bin.</p>`;
  const root = mount(figure, 3, html);
  const slot = root?.querySelector("[data-chart]");
  const key = root?.querySelector("[data-keys]");
  if (!root || !slot || !key) return;
  let field = 0;
  let width = plotWidth(figure);
  const draw = (): void => {
    hideTooltips(figure);
    slot.innerHTML = chart(width, field);
    key.innerHTML = keys(field);
  };
  root.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("[data-field]") : null;
    if (!button) return;
    field = Number(button.getAttribute("data-field"));
    setActive(root, "field", field);
    draw();
  });
  watch(figure, (next) => {
    width = next;
    draw();
  });
  draw();
  wireTooltips(figure);
}
