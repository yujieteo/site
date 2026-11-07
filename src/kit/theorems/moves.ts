import { KINDS, MOVES, PROOFS } from "./data-moves.ts";
import { addStyle, escapeText, head, mount, stat, whole } from "./look.ts";
import { plotWidth, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { at, scale, svgHead } from "../scale.ts";

const CSS = `
.m-bars .bar { fill: color-mix(in srgb, var(--fig) 45%, var(--card)); cursor: pointer; outline: none; }
.m-bars .bar[data-lit] { fill: var(--fig); }
.m-bars .bar:focus-visible { stroke: var(--ink); stroke-width: 1.5; }
.m-bars .who { fill: var(--ink); }
.m-bars .cum { fill: none; stroke: var(--ink); stroke-width: 1.5; }
.m-bars .cumdot { fill: var(--card); stroke: var(--ink); stroke-width: 1.5; }
.m-bars .cumlab { fill: var(--ink); font-weight: 550; }
.m-bars .grid { stroke: var(--line); stroke-width: 1; }
.m-pick { margin: 14px 0 0; padding: 12px 14px; border-radius: var(--radius); background: var(--fig-soft); font-size: 0.875rem; line-height: 1.5; }
.m-pick b { font-weight: 600; }
.m-pick span { display: block; color: var(--muted); font-size: 0.8125rem; }
`;

const ROW = 21;
const TOP = 26;

export function coverage(k: number): number {
  return (MOVES[k - 1]?.[3] ?? 0) / PROOFS;
}

function fit(text: string, room: number): string {
  const most = Math.floor(room / 6.4);
  return text.length <= most ? text : `${text.slice(0, Math.max(1, most - 1))}…`;
}

function coverPanel(c0: number, c1: number): string {
  const c = scale(0, 1, c0, c1);
  const line = MOVES.map(([, , , covered], i) => `${at(c, covered / PROOFS)},${TOP + i * ROW + 10}`);
  const marks = [4, 9, 19].map((k) => {
    const covered = MOVES[k]?.[3] ?? 0;
    const y = TOP + k * ROW + 10;
    return `<circle class="cumdot" cx="${at(c, covered / PROOFS)}" cy="${y}" r="3.5"/><text class="cumlab" x="${at(c, covered / PROOFS) - 8}" y="${y + 4}" text-anchor="end">top ${k + 1}: ${Math.round((100 * covered) / PROOFS)}%</text>`;
  });
  const grid = [0, 0.5, 1].map((v) => `<line class="grid" x1="${at(c, v)}" x2="${at(c, v)}" y1="${TOP}" y2="${TOP + MOVES.length * ROW}"/><text x="${at(c, v)}" y="${TOP + MOVES.length * ROW + 14}" text-anchor="middle">${100 * v}%</text>`);
  return `<text x="${c1}" y="14" text-anchor="end">share of proofs the top k cover</text>${grid.join("")}<polyline class="cum" points="${line.join(" ")}"/>${marks.join("")}`;
}

function chart(width: number, lit: number): string {
  const wide = width >= 560;
  const left = Math.min(210, width * 0.42);
  const end = wide ? left + (width - left) * 0.5 : width - 34;
  const x = scale(0, MOVES[0]?.[2] ?? 1, left, end);
  const height = TOP + MOVES.length * ROW + 20;
  const out = MOVES.map(([name, , n], i) => {
    const y = TOP + i * ROW;
    const label = `<text class="who" x="${left - 8}" y="${y + 13}" text-anchor="end">${escapeText(fit(name, left - 8))}</text>`;
    const bar = `<rect class="bar"${i === lit ? " data-lit" : ""} x="${left}" y="${y + 3}" width="${at(x, n) - left}" height="${ROW - 7}" rx="2" tabindex="0" data-move="${i}" data-tip="${escapeText(name)}: ${whole(n)} proofs"/>`;
    return `${label}${bar}<text x="${at(x, n) + 5}" y="${y + 13}">${whole(n)}</text>`;
  });
  const cover = wide ? coverPanel(end + 56, width - 8) : "";
  return `${svgHead(width, height)}<g class="m-bars"><text x="${left}" y="14">proofs that use each move</text>${out.join("")}${cover}</g></svg>`.replace("ALT", "Bars for the twenty most used proof moves, with a line for the share of proofs they cover together");
}

function pick(i: number): string {
  const move = MOVES[i];
  if (!move) return "";
  const [name, slogan, n, , examples] = move;
  return `<b>${escapeText(name)}</b>, in ${whole(n)} of ${whole(PROOFS)} proofs (${Math.round((100 * n) / PROOFS)}%). ${escapeText(slogan)}<span>For example: ${examples.map(escapeText).join(", ")}.</span>`;
}

function draw(figure: HTMLElement, root: Element, lit: number): void {
  const slot = root.querySelector("[data-chart]");
  const note = root.querySelector("[data-pick]");
  if (!slot || !note) return;
  hideTooltips(figure);
  slot.innerHTML = chart(plotWidth(figure), lit);
  note.innerHTML = pick(lit);
}

export function show(figure: HTMLElement): void {
  addStyle("theorem-moves", CSS);
  const stats = `<div class="t-stats">${stat(whole(PROOFS), "proofs in the learner")}${stat(String(KINDS), "named moves they are built from")}${stat(`${Math.round(100 * coverage(10))}%`, "of proofs use at least one of the ten most common")}</div>`;
  const html = `${head("Proof moves", "Ten moves reach three proofs in four, and the most common move is to cite a bigger theorem")}${stats}<div data-chart></div><p class="m-pick" data-pick aria-live="polite"></p>`;
  const root = mount(figure, 2, html);
  if (!root) return;
  let lit = 0;
  const choose = (event: Event): void => {
    const bar = event.target instanceof Element ? event.target.closest("[data-move]") : null;
    if (!bar) return;
    lit = Number(bar.getAttribute("data-move"));
    draw(figure, root, lit);
    root.querySelector<SVGElement>(`[data-move="${lit}"]`)?.focus();
  };
  root.addEventListener("click", choose);
  root.addEventListener("keydown", (event) => {
    if (event instanceof KeyboardEvent && (event.key === "Enter" || event.key === " ")) choose(event);
  });
  watch(figure, () => {
    draw(figure, root, lit);
  });
  draw(figure, root, lit);
  wireTooltips(figure);
}
