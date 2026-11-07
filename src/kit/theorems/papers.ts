import { CANDIDATES } from "./data-scores.ts";
import { PAPERS } from "./data-papers.ts";
import { addStyle, choices, escapeText, head, mount, setActive, stat, whole } from "./look.ts";
import { plotWidth, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { at, PHONE, scale, svgHead, ticks } from "../scale.ts";

const CSS = `
.p-dots circle { fill: var(--muted); fill-opacity: 0.28; stroke: none; outline: none; }
.p-dots circle[data-lit] { fill: var(--fig); fill-opacity: 1; stroke: var(--card); stroke-width: 1.5; }
.p-dots circle:focus-visible { stroke: var(--ink); stroke-width: 2; }
.chart text.p-label { fill: var(--ink); font-weight: 500; }
.chart .p-lead { stroke: var(--underline); }
`;

const HEIGHT = 380;
const TOP = 14;
const BASE = 340;
const LEFT = 48;
const RIGHT = 14;
const LOW = 30;
const STEP = 1.25;
const Y_LOW = 5;
const Y_HIGH = 3000;
const LABELLED = new Set<string>(["central limit theorem", "Markov's inequality", "Bessel inequality", "Singular Value decomposition"]);
const TOP_TEN = new Set<string>(CANDIDATES.map((c) => c[0]));

function ranks(values: readonly number[]): number[] {
  const order: [number, number][] = values.map((v, i): [number, number] => [v, i]);
  order.sort((a, b) => a[0] - b[0]);
  const out = values.map(() => 0);
  let i = 0;
  while (i < order.length) {
    let j = i;
    while (j + 1 < order.length && order[j + 1]?.[0] === order[i]?.[0]) j++;
    for (let k = i; k <= j; k++) out[order[k]?.[1] ?? 0] = (i + j) / 2;
    i = j + 1;
  }
  return out;
}

export function spearman(xs: readonly number[], ys: readonly number[]): number {
  const a = ranks(xs);
  const b = ranks(ys);
  const ma = a.reduce((s, v) => s + v, 0) / a.length;
  const mb = b.reduce((s, v) => s + v, 0) / b.length;
  let top = 0;
  let da = 0;
  let db = 0;
  for (let i = 0; i < a.length; i++) {
    const u = (a[i] ?? 0) - ma;
    const v = (b[i] ?? 0) - mb;
    top += u * v;
    da += u * u;
    db += v * v;
  }
  return da > 0 && db > 0 ? top / Math.sqrt(da * db) : 0;
}

export function papersSpearman(): number {
  return spearman(PAPERS.map((p) => p[1]), PAPERS.map((p) => p[2]));
}

function jitter(i: number): number {
  return (((i * 2654435761) % 1000) / 1000 - 0.5) * 0.8;
}

function lit(name: string, score: number, mode: number): boolean {
  return mode === 0 ? score >= 100 : TOP_TEN.has(name);
}

function axes(width: number): string {
  const y = scale(Math.log10(Y_LOW), Math.log10(Y_HIGH), BASE, TOP);
  const parts: string[] = [];
  for (const v of [5, 10, 30, 100, 300, 1000, 3000]) {
    const py = at(y, Math.log10(v));
    parts.push(`<line class="grid" x1="${LEFT}" x2="${width - RIGHT}" y1="${py}" y2="${py}"/><text x="${LEFT - 8}" y="${py + 4}" text-anchor="end">${whole(v)}</text>`);
  }
  const x = scale(LOW, 100, LEFT, width - RIGHT);
  for (const v of ticks(LOW, 100, Math.max(3, Math.floor((width - LEFT) / 80)))) parts.push(`<text x="${at(x, v)}" y="${BASE + 18}" text-anchor="middle">${v}</text>`);
  parts.push(`<text x="${LEFT}" y="${TOP - 2}">arXiv papers naming it</text><text x="${width - RIGHT}" y="${BASE + 34}" text-anchor="end">Balanced score</text>`);
  return parts.join("");
}

function dots(width: number, mode: number): string {
  const x = scale(LOW, 100, LEFT, width - RIGHT);
  const y = scale(Math.log10(Y_LOW), Math.log10(Y_HIGH), BASE, TOP);
  const back: string[] = [];
  const front: string[] = [];
  const labels: string[] = [];
  PAPERS.forEach(([name, step, count], i) => {
    const score = (step * 5) / 4;
    const px = at(x, score + jitter(i) * STEP);
    const py = at(y, Math.log10(count));
    const on = lit(name, score, mode);
    const dot = `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${on ? 4.5 : 3}" tabindex="0"${on ? " data-lit" : ""} data-tip="${escapeText(name)}: score ${score.toFixed(1)}, ${whole(count)} papers"/>`;
    (on ? front : back).push(dot);
    if (LABELLED.has(name)) labels.push(label(name, px, py, width));
  });
  return `<g class="p-dots">${back.join("")}${front.join("")}</g>${labels.join("")}`;
}

function label(name: string, px: number, py: number, width: number): string {
  const left = px > width - 190;
  const tx = left ? px - 10 : px + 10;
  const ty = width < PHONE ? Math.max(py - 14, TOP + 18) : py - 14;
  return `<line class="p-lead" x1="${px}" y1="${py}" x2="${tx}" y2="${ty + 2}"/><text class="p-label" x="${tx + (left ? -2 : 2)}" y="${ty}" text-anchor="${left ? "end" : "start"}">${escapeText(name)}</text>`;
}

function chart(width: number, mode: number): string {
  return `${svgHead(width, HEIGHT)}${axes(width)}${dots(width, mode)}</svg>`.replace("ALT", "Scatter of balanced score against arXiv papers naming each result");
}

export function show(figure: HTMLElement): void {
  addStyle("theorem-papers", CSS);
  const rho = papersSpearman();
  const stats = `<div class="t-stats">${stat(whole(PAPERS.length), "results named in at least five arXiv papers")}${stat(rho.toFixed(2), "rank correlation between score and papers")}${stat(whole(PAPERS.find((p) => p[0] === "Bessel inequality")?.[2] ?? 0), "papers name Bessel's inequality, a perfect score")}</div>`;
  const html = `${head("Scores and papers", "The scores and the papers barely agree")}${stats}${choices("mode", ["Perfect scores", `The ${TOP_TEN.size} that can reach the top ten`], 0)}<div data-chart></div>`;
  const root = mount(figure, 1, html);
  const slot = root?.querySelector("[data-chart]");
  if (!root || !slot) return;
  let mode = 0;
  let width = plotWidth(figure);
  const draw = (): void => {
    hideTooltips(figure);
    slot.innerHTML = chart(width, mode);
  };
  root.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("[data-mode]") : null;
    if (!button) return;
    mode = Number(button.getAttribute("data-mode"));
    setActive(root, "mode", mode);
    draw();
  });
  watch(figure, (next) => {
    width = next;
    draw();
  });
  draw();
  wireTooltips(figure);
}
