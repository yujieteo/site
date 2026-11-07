import { at, scale, svgHead } from "./scale.ts";
import { LINKS, PROBLEMS, RESPONDENTS, SEEDS } from "./problem-data.ts";
import { LAYERS } from "./stack-data.ts";

const ROW = 52;
const TOP = 8;
const EDGE = 56;
const BAR = 18;
const TOP_PERCENT = 70;
export const START_PROBLEM = 0;

export function problemsHeight(): number {
  return TOP + PROBLEMS.length * ROW;
}

function bar(chart: number, i: number, selected: number): string {
  const p = PROBLEMS[i];
  const x = scale(0, TOP_PERCENT, 0, chart - EDGE);
  const y = TOP + i * ROW;
  const count = (reduces: boolean): number => LINKS.filter((l) => l.problem === i && l.reduces === reduces).length;
  const tip = `${p?.name ?? ""}: ${p?.percent ?? 0}% of ${RESPONDENTS.toLocaleString("en-US")} developers. ${count(true)} links say a paradigm reduces it, ${count(false)} say a paradigm worsens it.`;
  const width = at(x, p?.percent ?? 0);
  return `<g class="row" role="button" tabindex="0" aria-pressed="${i === selected}" aria-label="${tip}" data-i="${i}" data-on="${i === selected}" data-tip="${tip}"><rect class="hitrow" x="0" y="${y - 4}" width="${chart}" height="${ROW - 6}" rx="6"/><text class="name" x="4" y="${y + 12}">${p?.name ?? ""}</text><rect class="bar prob" x="4" y="${y + 20}" width="${width}" height="${BAR}" rx="4"/><text x="${width + 12}" y="${y + 34}">${p?.percent ?? 0}%</text></g>`;
}

export function problemsSvg(chart: number, selected: number): string {
  const bars = PROBLEMS.map((_, i) => bar(chart, i, selected)).join("");
  return `${svgHead(chart, problemsHeight())}${bars}</svg>`;
}

function names(problem: number, reduces: boolean): string {
  const found = [...new Set(LINKS.filter((l) => l.problem === problem && l.reduces === reduces).map((l) => l.paradigm))].map((i) => SEEDS[i]);
  if (found.length === 0) return "none in the data";
  return found.map((s) => `<span class="chip l${s?.layer ?? 0}" title="${LAYERS[s?.layer ?? 0] ?? ""}">${s?.name ?? ""}</span>`).join(" ");
}

export function problemsList(problem: number): string {
  const p = PROBLEMS[problem];
  const up = LINKS.filter((l) => l.problem === problem && l.reduces).length;
  const down = LINKS.filter((l) => l.problem === problem && !l.reduces).length;
  const head = `<strong>${p?.name ?? ""}</strong>: ${up} sourced links where a paradigm reduces it, ${down} where one worsens it.`;
  return `<p>${head}</p><p><span class="tag good">Reduces</span> ${names(problem, true)}</p><p><span class="tag bad">Worsens</span> ${names(problem, false)}</p>`;
}

export function problemsFigure(_id: string, chart: number): string {
  return `${problemsSvg(chart, START_PROBLEM)}<div class="readout" data-list aria-live="polite">${problemsList(START_PROBLEM)}</div>`;
}
