import { PATH } from "./data-path.ts";
import { addStyle, escapeText, head, mount, refocus, stat } from "./look.ts";
import { plotWidth, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { PHONE, svgHead } from "../scale.ts";

const CSS = `
.p-map .edge { fill: none; stroke: var(--underline-hover); stroke-width: 1.25; pointer-events: none; }
.p-map .edge[data-judged] { stroke: var(--underline); stroke-dasharray: 3 3; }
.p-map .node rect { fill: var(--card); stroke: var(--line); stroke-width: 1; }
.p-map .node { cursor: pointer; outline: none; }
.p-map .name { pointer-events: none; }
.p-map .node text { fill: var(--ink); font-size: 12px; paint-order: stroke; stroke: var(--card); stroke-width: 4px; stroke-linejoin: round; }
.p-map .node[data-ready] text { stroke: var(--fig-soft); }
.p-map .node[data-known] text { stroke: var(--fig); }
.p-map .node .un { fill: var(--muted); font-size: 10.5px; }
.p-map .node[data-ready] rect { fill: var(--fig-soft); stroke: var(--fig); stroke-width: 1.5; }
.p-map .node[data-known] rect { fill: var(--fig); stroke: var(--fig); }
.p-map .node[data-known] text { fill: var(--card); }
.p-map .node:focus-visible rect { stroke: var(--ink); stroke-width: 2; }
.p-map .col { fill: var(--muted); font: 500 10.5px var(--mono); letter-spacing: 0.06em; }
.p-keys { margin: 10px 0 0; }
.p-scroll { overflow-x: auto; overscroll-behavior-x: contain; }
figure[data-kind^=theorem] .p-scroll svg.chart { max-width: none; }
.p-keys .solid, .p-keys .dash { width: 18px; height: 0; border-radius: 0; border-top: 1.5px solid var(--underline-hover); }
.p-keys .dash { border-top: 1.5px dashed var(--underline); }
.p-list { display: grid; gap: 6px; }
.p-layer { margin: 12px 0 0; font: 500 11px var(--mono); letter-spacing: 0.06em; color: var(--muted); }
.p-row { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 2px 8px; padding: 8px 10px; border-radius: 6px; box-shadow: inset 0 0 0 1px var(--line); background: var(--card); font-size: 0.8125rem; line-height: 1.3; cursor: pointer; outline: none; }
.p-row:focus-visible { box-shadow: inset 0 0 0 2px var(--ink); }
.p-row .pre, .p-row .un { font-size: 11px; color: var(--muted); }
.p-row .pre { grid-column: 1 / -1; }
.p-row[data-ready] { background: var(--fig-soft); box-shadow: inset 0 0 0 1.5px var(--fig); }
.p-row[data-known] { background: var(--fig); color: var(--card); }
.p-row[data-known] .pre, .p-row[data-known] .un { color: var(--card); }
@media (max-width: 560px) { .p-keys .t-key:has(.solid), .p-keys .t-key:has(.dash) { display: none; } }
.p-keys .known { background: var(--fig); }
.p-keys .ready { background: var(--fig-soft); box-shadow: inset 0 0 0 1.5px var(--fig); }
`;

const SHORT = new Map<string, string>([
  ["Azuma-Hoeffding inequality", "Azuma–Hoeffding"], ["Bergelson Intersectivity Lemma", "Bergelson's lemma"], ["characterization of convexity", "Convexity test"],
  ["Chebyshev's inequality", "Chebyshev"], ["Doob's maximal inequality", "Doob's maximal"], ["Hoeffding inequality", "Hoeffding"], ["Markov's inequality", "Markov"],
  ["First mean value theorem for interval integrals (arbitrary measure, a.e. nonnegativity)", "Mean value (integral, a.e.)"],
  ["First mean value theorem for interval integrals (arbitrary measure, nonnegativity)", "Mean value (integral)"],
  ["First mean value theorem for set integrals (a.e. nonnegativity)", "Mean value (set, a.e.)"], ["First mean value theorem for set integrals (pointwise nonnegativity)", "Mean value (set)"],
  ["Second mean value theorem for interval integrals", "Second mean value"], ["image of a segment", "Image of a segment"], ["L’Hopital’s Rule", "L'Hôpital's rule"],
  ["Laws of Large Numbers", "Law of large numbers"], ["mean value theorem", "Mean value theorem"], ["intermediate value theorem", "Intermediate value"],
  ["Heine–Borel theorem", "Heine–Borel"], ["Kirszbraun theorem", "Kirszbraun"], ["Bolzano–Weierstrass theorem", "Bolzano–Weierstrass"], ["Glivenko–Cantelli theorem", "Glivenko–Cantelli"],
  ["extreme value theorem", "Extreme value"], ["Whitney extension theorem", "Whitney extension"], ["Sharkovskii's theorem", "Sharkovskii"],
]);

const NODE_H = 30;
const GAP_Y = 14;
const TOP = 30;
const MIN_WIDTH = 820;

export function columns(): number[] {
  const col = PATH.map(() => 0);
  for (let pass = 0; pass < PATH.length; pass++) {
    PATH.forEach(([, pre], v) => {
      for (const [p] of pre) col[v] = Math.max(col[v] ?? 0, (col[p] ?? 0) + 1);
    });
  }
  return col;
}

function mean(values: readonly number[], fallback: number): number {
  return values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : fallback;
}

function layout(): { col: number[]; row: number[] } {
  const col = columns();
  const row = PATH.map((_, v) => v);
  const most = Math.max(...col);
  for (let pass = 0; pass < 4; pass++) {
    for (let c = 0; c <= most; c++) {
      const ids = PATH.map((_, v) => v).filter((v) => col[v] === c);
      const key = ids.map((v) => {
        const pre = (PATH[v]?.[1] ?? []).map(([p]) => row[p] ?? 0);
        const post = PATH.map((_, u) => u).filter((u) => (PATH[u]?.[1] ?? []).some(([p]) => p === v)).map((u) => row[u] ?? 0);
        return { v, k: mean(pass % 2 === 0 ? pre : post, mean(pre.concat(post), row[v] ?? 0)) };
      });
      key.sort((a, b) => a.k - b.k || a.v - b.v);
      key.forEach(({ v }, i) => { row[v] = i; });
    }
  }
  return { col, row };
}

export function state(known: ReadonlySet<number>): { ready: Set<number>; unlocks: number[] } {
  const ready = new Set<number>();
  const unlocks = PATH.map(() => 0);
  PATH.forEach(([, pre], v) => {
    if (known.has(v)) return;
    const missing = pre.filter(([p]) => !known.has(p));
    if (missing.length === 0) ready.add(v);
    if (missing.length === 1) unlocks[missing[0]?.[0] ?? 0] = (unlocks[missing[0]?.[0] ?? 0] ?? 0) + 1;
  });
  return { ready, unlocks };
}

function fit(text: string, room: number): string {
  const most = Math.floor(room / 6);
  return text.length <= most ? text : `${text.slice(0, Math.max(1, most - 1))}…`;
}

function node(v: number, x: number, y: number, w: number, known: ReadonlySet<number>, s: ReturnType<typeof state>): [string, string] {
  const full = PATH[v]?.[0] ?? "";
  const name = SHORT.get(full) ?? full;
  const flag = known.has(v) ? " data-known" : s.ready.has(v) ? " data-ready" : "";
  const un = s.unlocks[v] ?? 0;
  const tip = `${full}${known.has(v) ? ": known" : un > 0 ? `: knowing it makes ${un} more ready` : ""}`;
  const extra = !known.has(v) && un > 0 ? `<text class="un" x="${x + w - 6}" y="${y + 19}" text-anchor="end">+${un}</text>` : "";
  const box = `<g class="node"${flag} tabindex="0" role="button" aria-pressed="${known.has(v)}" aria-label="${escapeText(full)}" data-node="${v}" data-tip="${escapeText(tip)}"><rect x="${x}" y="${y}" width="${w}" height="${NODE_H}" rx="6"/></g>`;
  return [box, `<g class="node name"${flag}><text x="${x + 8}" y="${y + 19}">${escapeText(fit(name, w - (extra ? 32 : 12)))}</text>${extra}</g>`];
}

function rows(known: ReadonlySet<number>): string {
  const { col, row } = layout();
  const most = Math.max(...col);
  const s = state(known);
  const out: string[] = [];
  for (let c = 0; c <= most; c++) {
    out.push(`<p class="p-layer">${c === 0 ? "FOUNDATIONS" : c === most ? "LONGEST CHAINS" : `STEP ${c + 1}`}</p>`);
    const ids = PATH.map((_, v) => v).filter((v) => col[v] === c).sort((a, b) => (row[a] ?? 0) - (row[b] ?? 0));
    for (const v of ids) out.push(listRow(v, known, s));
  }
  return `<div class="p-list">${out.join("")}</div>`;
}

function listRow(v: number, known: ReadonlySet<number>, s: ReturnType<typeof state>): string {
  const full = PATH[v]?.[0] ?? "";
  const flag = known.has(v) ? " data-known" : s.ready.has(v) ? " data-ready" : "";
  const un = s.unlocks[v] ?? 0;
  const needs = (PATH[v]?.[1] ?? []).map(([p]) => SHORT.get(PATH[p]?.[0] ?? "") ?? PATH[p]?.[0] ?? "").join(", ");
  const more = !known.has(v) && un > 0 ? `<span class="un">+${un}</span>` : "";
  return `<div class="p-row"${flag} role="button" tabindex="0" aria-pressed="${known.has(v)}" data-node="${v}"><span>${escapeText(SHORT.get(full) ?? full)}</span>${more}${needs === "" ? "" : `<span class="pre">needs ${escapeText(needs)}</span>`}</div>`;
}

function chart(width: number, known: ReadonlySet<number>): string {
  const { col, row } = layout();
  const cols = Math.max(...col) + 1;
  const step = (width + 28) / cols;
  const w = step - 28;
  const count = PATH.map((_, c) => col.filter((k) => k === c).length);
  const band = Math.max(...count) * (NODE_H + GAP_Y);
  const height = TOP + band;
  const xy = (v: number): [number, number] => [(col[v] ?? 0) * step, TOP + (((row[v] ?? 0) + 0.5) * band) / (count[col[v] ?? 0] ?? 1) - NODE_H / 2];
  const s = state(known);
  const edges: string[] = [];
  const over: string[] = [];
  PATH.forEach(([, pre], v) => {
    const [x2, y2] = xy(v);
    for (const [p, ok] of pre) {
      const [x1, y1] = xy(p);
      const a = x1 + w;
      const m = (a + x2) / 2;
      ((col[v] ?? 0) - (col[p] ?? 0) > 1 ? over : edges).push(`<path class="edge"${ok === 1 ? "" : " data-judged"} d="M${a} ${y1 + NODE_H / 2} C${m} ${y1 + NODE_H / 2} ${m} ${y2 + NODE_H / 2} ${x2} ${y2 + NODE_H / 2}"/>`);
    }
  });
  const heads = [`<text class="col" x="0" y="14">FOUNDATIONS</text>`, `<text class="col" x="${width}" y="14" text-anchor="end">LONGEST CHAINS</text>`];
  const nodes = PATH.map((_, v) => node(v, ...xy(v), w, known, s));
  return `${svgHead(width, height)}<g class="p-map">${heads.join("")}${edges.join("")}${nodes.map((n) => n[0]).join("")}${over.join("")}${nodes.map((n) => n[1]).join("")}</g></svg>`.replace("ALT", "A map of 31 results joined by prerequisite links, foundations on the left");
}

function supported(): number {
  return PATH.reduce((n, [, pre]) => n + pre.filter(([, ok]) => ok === 1).length, 0);
}

function draw(figure: HTMLElement, root: Element, known: ReadonlySet<number>): void {
  const slot = root.querySelector("[data-chart]");
  const k = root.querySelector("[data-known-n]");
  const r = root.querySelector("[data-ready-n]");
  if (!slot) return;
  hideTooltips(figure);
  const width = plotWidth(figure);
  slot.innerHTML = width < PHONE ? rows(known) : chart(Math.max(MIN_WIDTH, width), known);
  if (k) k.textContent = String(known.size);
  if (r) r.textContent = String(state(known).ready.size);
}

function toggle(known: Set<number>, v: number): void {
  if (known.has(v)) known.delete(v);
  else known.add(v);
}

function redraw(figure: HTMLElement, root: Element, known: ReadonlySet<number>): void {
  const had = document.activeElement;
  draw(figure, root, known);
  refocus(root, had);
}

export function show(figure: HTMLElement): void {
  addStyle("theorem-path", CSS);
  const edges = PATH.reduce((n, [, pre]) => n + pre.length, 0);
  const stats = `<div class="t-stats">${stat('<output data-known-n>0</output>', "results you marked known")}${stat('<output data-ready-n>0</output>', "results ready now: every prerequisite known")}${stat(`${supported()} of ${edges}`, "links also backed by a formal proof in mathlib")}</div>`;
  const buttons = `<div class="t-seg"><button class="button" type="button" data-base>Mark the foundations known</button><button class="button" type="button" data-clear>Clear</button></div>`;
  const keys = `<p class="p-keys"><span class="t-key"><i class="known"></i>known</span><span class="t-key"><i class="ready"></i>ready</span><span class="t-key"><i class="solid"></i>formal link</span><span class="t-key"><i class="dash"></i>judged link</span><span class="t-key">+N: results it would make ready</span></p>`;
  const html = `${head("Prerequisites", "What is next depends on what you already know")}${stats}${buttons}<div class="p-scroll" data-chart></div>${keys}`;
  const root = mount(figure, 1, html);
  if (!root) return;
  const known = new Set<number>();
  root.addEventListener("click", (event) => {
    const t = event.target instanceof Element ? event.target : null;
    const hit = t?.closest("[data-node]");
    if (hit) toggle(known, Number(hit.getAttribute("data-node")));
    if (t?.closest("[data-clear]")) known.clear();
    if (t?.closest("[data-base]")) PATH.forEach(([, pre], v) => { if (pre.length === 0) known.add(v); });
    if (!hit && !t?.closest("button")) return;
    redraw(figure, root, known);
  });
  root.addEventListener("keydown", (event) => {
    const hit = event.target instanceof Element ? event.target.closest("[data-node]") : null;
    if (!hit || !(event instanceof KeyboardEvent) || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    toggle(known, Number(hit.getAttribute("data-node")));
    redraw(figure, root, known);
  });
  watch(figure, () => { redraw(figure, root, known); });
  draw(figure, root, known);
  wireTooltips(figure);
}
