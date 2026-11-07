import { svgHead } from "./scale.ts";
import { AXES, LAYERS, PARADIGMS, TEN, ZERO } from "./stack-data.ts";

const CELL = 20;
const HEAD = 76;
const RIGHT = 64;
export const NO_SORT = -1;

export function matrixOrder(sort: number): number[] {
  const order = PARADIGMS.map((_, i) => i);
  if (sort < 0) return order;
  return order.toSorted((a, b) => (PARADIGMS[b]?.scores[sort] ?? 0) - (PARADIGMS[a]?.scores[sort] ?? 0) || a - b);
}

const NARROW = 480;
const CODES = ["DI", "IS", "DO", "RF", "HP", "BS", "CI", "DS"];
function head(chart: number): number {
  return chart < NARROW ? 26 : HEAD;
}
export function matrixLeft(chart: number): number {
  if (chart < NARROW) return chart - AXES.length * 24;
  return Math.round(Math.min(Math.max(chart - RIGHT - AXES.length * (CELL + 4), 130), 260));
}

function header(chart: number, sort: number): string {
  const left = matrixLeft(chart);
  const narrow = chart < NARROW;
  const step = (chart - left - (narrow ? 0 : RIGHT)) / AXES.length;
  return AXES.map((name, j) => {
    const x = left + step * j + step / 2;
    const tip = narrow ? `${name}. Press to sort by it.` : `${name}. 0: ${ZERO[j] ?? ""} 10: ${TEN[j] ?? ""} Press to sort by it.`;
    const place = narrow ? `x="${x}" y="16" text-anchor="middle"` : `transform="translate(${x + 4} ${HEAD - 8}) rotate(-40)"`;
    return `<text class="colhead" ${place} role="button" tabindex="0" aria-pressed="${j === sort}" aria-label="${tip}" data-col="${j}" data-on="${j === sort}" data-tip="${tip}">${narrow ? (CODES[j] ?? "") : name}</text>`;
  }).join("");
}

function fit(name: string, left: number): string {
  const room = Math.floor((left - 24) / 6.6);
  return name.length <= room ? name : `${name.slice(0, room - 1)}…`;
}

function line(chart: number, rank: number, index: number): string {
  const left = matrixLeft(chart);
  const step = (chart - left - (chart < NARROW ? 0 : RIGHT)) / AXES.length;
  const p = PARADIGMS[index];
  const y = head(chart) + rank * CELL;
  const cells = AXES.map((axis, j) => {
    const v = p?.scores[j] ?? 0;
    return `<rect class="cell" x="${left + step * j + 1}" y="${y + 1}" width="${step - 2}" height="${CELL - 2}" rx="3" style="--v:${v / 10}" data-tip="${p?.name ?? ""}: ${v} of 10 on ${axis}"/><text class="num" x="${left + step * j + step / 2}" y="${y + 14}" text-anchor="middle" data-v="${v}">${v}</text>`;
  }).join("");
  return `<circle class="pt l${p?.layer ?? 0}" cx="6" cy="${y + CELL / 2}" r="5" data-tip="${LAYERS[p?.layer ?? 0] ?? ""}"/><text class="name" x="18" y="${y + 14}" data-tip="${p?.name ?? ""}">${fit(p?.name ?? "", left)}</text>${cells}`;
}

export function matrixHeight(chart: number): number {
  return head(chart) + PARADIGMS.length * CELL + 4;
}

export function matrixSvg(chart: number, sort: number): string {
  const body = matrixOrder(sort).map((index, rank) => line(chart, rank, index)).join("");
  return `${svgHead(chart, matrixHeight(chart))}${header(chart, sort)}${body}</svg>`;
}

function codeKey(chart: number): string {
  return chart < NARROW ? ` Columns: ${AXES.map((name, j) => `${CODES[j] ?? ""} ${name}`).join(", ")}.` : "";
}

export function matrixNote(sort: number, chart: number): string {
  const first = sort < 0 ? "Press a column name to sort the 27 paradigms by that axis." : `Sorted by ${AXES[sort] ?? ""}, highest first. Ties keep the order of the data.`;
  return `${first}${codeKey(chart)}`;
}

export function matrixFigure(_id: string, chart: number): string {
  return `${matrixSvg(chart, NO_SORT)}<div class="controls"><button class="button" type="button" data-reset>Original order</button></div><p class="note" data-note aria-live="polite">${matrixNote(NO_SORT, chart)}</p>`;
}
