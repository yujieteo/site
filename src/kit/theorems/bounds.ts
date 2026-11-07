import { BOUNDS } from "./data-bounds.ts";
import { addStyle, escapeText, head, mount, stat } from "./look.ts";
import { plotWidth, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { at, scale, svgHead } from "../scale.ts";

const CSS = `
.b-bars .bar { fill: var(--fig); }
.b-bars .bar[data-useless] { fill: var(--underline); }
.b-bars .track { fill: var(--fig-soft); }
.b-bars .exact { stroke: var(--ink); stroke-width: 1.5; stroke-dasharray: 4 3; }
.b-bars .who { fill: var(--ink); font-weight: 550; paint-order: stroke; stroke: var(--card); stroke-width: 4px; stroke-linejoin: round; }
.b-bars .who .val { font-weight: 400; }
.b-bars .val { fill: var(--muted); }
.b-bars .ex { fill: var(--ink); font-weight: 550; }
.t-row > .t-row { margin: 0; }
`;

const P = 0.5;
const ROW = 46;
const TOP = 34;
const FLOOR = -30;

export interface Bound {
  name: string;
  score: number;
  value: number;
}

function kl(a: number, p: number): number {
  return a * Math.log(a / p) + (1 - a) * Math.log((1 - a) / (1 - p));
}

function formula(kind: string, n: number, t: number): number {
  const c = Math.max(P, 1 - P);
  if (kind === "markov") return (n * P) / (n * P + t);
  if (kind === "chebyshev") return (n * P * (1 - P)) / t ** 2;
  if (kind === "chernoff_kl") return P + t / n >= 1 ? P ** n : Math.exp(-n * kl(P + t / n, P));
  if (kind === "hoeffding") return Math.exp((-2 * t ** 2) / n);
  return Math.exp(-(t ** 2) / (2 * n * c ** 2));
}

export function exactTail(n: number, t: number): number {
  let sum = 0;
  let log = 0;
  const from = Math.ceil(n * P + t);
  for (let k = 0; k <= n; k++) {
    if (k > 0) log += Math.log(n - k + 1) - Math.log(k);
    if (k >= from) sum += Math.exp(log + n * Math.log(P));
  }
  return sum;
}

export function bounds(n: number, t: number): Bound[] {
  return BOUNDS.map(([name, kind, score]) => ({ name, score, value: formula(kind, n, t) }));
}

function label(value: number): string {
  if (value >= 1) return "useless (≥ 1)";
  if (value >= 0.001) return value.toPrecision(3);
  return value.toExponential(2);
}

function floorOf(values: readonly number[]): number {
  const least = Math.min(...values.map((v) => Math.log10(Math.max(v, 1e-300))));
  return Math.max(FLOOR, Math.floor(least) - 1);
}

const SUPER = new Map([["-", "⁻"], ["0", "⁰"], ["1", "¹"], ["2", "²"], ["3", "³"], ["4", "⁴"], ["5", "⁵"], ["6", "⁶"], ["7", "⁷"], ["8", "⁸"], ["9", "⁹"]]);

export function power(exponent: number): string {
  return `10${String(exponent).split("").map((c) => SUPER.get(c) ?? c).join("")}`;
}

function row(r: Bound, y: number, left: number, width: number, end: number, tail: number): [string, string] {
  const narrow = left === 0;
  const top = narrow ? y + 20 : y + 2;
  const who = narrow ? `<text class="who" x="0" y="${y + 13}">${escapeText(r.name)}<tspan class="val" dx="6">score ${r.score.toFixed(1)}</tspan></text>` : `<text class="who" x="0" y="${y + 13}">${escapeText(r.name)}</text><text x="0" y="${y + 29}">rubric score ${r.score.toFixed(1)}</text>`;
  const useless = r.value >= 1 ? " data-useless" : "";
  const bar = `<rect class="track" x="${left}" y="${top}" width="${width - 12 - left}" height="18" rx="3"/><rect class="bar"${useless} x="${left}" y="${top}" width="${Math.max(2, end - left)}" height="18" rx="3" tabindex="0" data-tip="${escapeText(r.name)}: P(S ≥ ${tail}) ≤ ${label(r.value)}"/>`;
  return [who, `${bar}<text class="val" x="${left + 4}" y="${top + 34}">${label(r.value)}</text>`];
}

function chart(width: number, n: number, t: number): string {
  const rows = bounds(n, t);
  const exact = exactTail(n, t);
  const low = floorOf([...rows.map((r) => r.value), exact]);
  const left = width < 560 ? 0 : Math.min(220, Math.max(140, width * 0.3));
  const step = left === 0 ? ROW + 16 : ROW;
  const x = scale(low, 0, left, width - 12);
  const height = TOP + rows.length * step + 28;
  const drawn = rows.map((r, i) => row(r, TOP + i * step, left, width, at(x, Math.min(0, Math.log10(Math.max(r.value, 10 ** low)))), n / 2 + t));
  const out = drawn.map((d) => d[1]);
  const ex = at(x, Math.log10(Math.max(exact, 10 ** low)));
  out.push(`<line class="exact" x1="${ex}" x2="${ex}" y1="${TOP - 14}" y2="${height - 24}"/><text class="ex" x="${Math.min(ex, width - 110)}" y="${TOP - 18}">exact ${label(exact)}</text>`);
  out.push(...drawn.map((d) => d[0]));
  const middle = left === 0 ? "" : `<text x="${(left + width) / 2}" y="${height - 6}" text-anchor="middle">bound on P(S ≥ n/2 + t), log scale</text>`;
  out.push(`<text x="${left}" y="${height - 6}">${power(low)}</text><text x="${width - 12}" y="${height - 6}" text-anchor="end">1</text>${middle}`);
  return `${svgHead(width, height)}<g class="b-bars">${out.join("")}</g></svg>`.replace("ALT", "Five tail bounds against the exact probability on a log scale");
}

function controls(): string {
  return `<div class="t-row"><span class="t-row"><label for="b-n">Flips n</label><input id="b-n" type="range" min="10" max="1000" step="10" value="100" data-n><output data-n-out>100</output></span><span class="t-row"><label for="b-t">Excess t</label><input id="b-t" type="range" min="1" max="50" value="10" data-t><output data-t-out>10</output></span></div>`;
}

function fill(root: Element, n: number, t: number): void {
  const rows = bounds(n, t);
  const values: readonly (readonly [string, string])[] = [["exact", label(exactTail(n, t))], ["k", String(n / 2 + t)], ["n", String(n)], ["markov", label(rows[0]?.value ?? 1)], ["chernoff", label(rows[2]?.value ?? 1)]];
  for (const [key, text] of values) {
    const node = root.querySelector(`[data-s-${key}]`);
    if (node) node.textContent = text;
  }
}

function draw(figure: HTMLElement, root: Element): void {
  const nIn = root.querySelector("input[data-n]");
  const tIn = root.querySelector("input[data-t]");
  const slot = root.querySelector("[data-chart]");
  const note = root.querySelector("[data-note]");
  if (!(nIn instanceof HTMLInputElement) || !(tIn instanceof HTMLInputElement) || !slot || !note) return;
  const n = Number(nIn.value);
  tIn.max = String(n / 2);
  const t = Math.min(Number(tIn.value), n / 2);
  const nOut = root.querySelector("[data-n-out]");
  const tOut = root.querySelector("[data-t-out]");
  if (nOut) nOut.textContent = String(n);
  if (tOut) tOut.textContent = String(t);
  hideTooltips(figure);
  slot.innerHTML = chart(plotWidth(figure), n, t);
  fill(root, n, t);
  const rows = bounds(n, t).toSorted((a, b) => a.value - b.value);
  note.innerHTML = `With ${n} flips, at least <b>${n / 2 + t}</b> heads has probability <b>${label(exactTail(n, t))}</b>. Tightest bound: <b>${escapeText(rows[0]?.name ?? "")}</b>. Loosest: <b>${escapeText(rows.at(-1)?.name ?? "")}</b>.`;
}

export function show(figure: HTMLElement): void {
  addStyle("theorem-bounds", CSS);
  const stats = `<div class="t-stats">${stat("<output data-s-exact></output>", "exact chance of <output data-s-k></output> or more heads in <output data-s-n></output> flips")}${stat("<output data-s-markov></output>", "Markov's bound, from a perfect rubric score")}${stat("<output data-s-chernoff></output>", "Chernoff's bound, from a score of 92.5")}</div>`;
  const html = `${head("One job, five tools", "The perfect-scoring result gives the weakest bound")}${stats}${controls()}<div data-chart></div><p class="t-note" data-note aria-live="polite"></p>`;
  const root = mount(figure, 3, html);
  if (!root) return;
  root.addEventListener("input", () => {
    draw(figure, root);
  });
  watch(figure, () => {
    draw(figure, root);
  });
  draw(figure, root);
  wireTooltips(figure);
}
