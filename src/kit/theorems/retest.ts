import { DIALS } from "./data-scores.ts";
import { RETEST } from "./data-retest.ts";
import { addStyle, choices, escapeText, head, mount, setActive, stat, whole } from "./look.ts";
import { plotWidth } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";

const CSS = `
.rt-blocks { display: grid; gap: 0 28px; }
.rt-head, .rt-row { display: grid; grid-template-columns: minmax(0, 1fr) repeat(7, 16px); gap: 3px; align-items: center; }
.rt-head { font: 500 0.625rem/1 var(--mono); color: var(--muted); padding: 0 0 6px; border-bottom: 1px solid var(--line); margin-bottom: 4px; text-align: center; }
.rt-head span:first-child { text-align: left; }
.rt-row { padding: 1.5px 0; }
.rt-row b { font-weight: 400; font-size: 0.75rem; line-height: 16px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.rt-row i { display: block; width: 16px; height: 16px; border-radius: 3px; background: var(--chip); box-shadow: inset 0 0 0 1px var(--line); outline: none; }
.rt-row i:focus-visible { box-shadow: inset 0 0 0 2px var(--ink); }
.rt-row i[data-d="-1"] { background: color-mix(in srgb, var(--series-2) 40%, var(--card)); box-shadow: none; }
.rt-row i[data-d="-2"] { background: var(--series-2); box-shadow: none; }
.rt-row i[data-d="1"] { background: color-mix(in srgb, var(--series-1) 45%, var(--card)); box-shadow: none; }
.rt-keys { margin: 14px 0 0; }
.rt-keys i[data-d="0"] { background: var(--chip); box-shadow: inset 0 0 0 1px var(--line); }
.rt-keys i[data-d="-1"] { background: color-mix(in srgb, var(--series-2) 40%, var(--card)); }
.rt-keys i[data-d="-2"] { background: var(--series-2); }
.rt-keys i[data-d="1"] { background: color-mix(in srgb, var(--series-1) 45%, var(--card)); }
`;

const SHORT: readonly string[] = ["Ef", "Re", "Pr", "Rc", "Hy", "Pf", "Ap"];

export interface RetestStats {
  cells: number;
  same: number;
  lower: number;
  higher: number;
  identical: number;
  moved: number[];
}

export function retestStats(): RetestStats {
  const s: RetestStats = { cells: 0, same: 0, lower: 0, higher: 0, identical: 0, moved: [0, 0, 0, 0, 0, 0, 0] };
  for (const [, first, second] of RETEST) {
    if (first === second) s.identical++;
    for (let i = 0; i < 7; i++) {
      const d = Number(second[i] ?? "0") - Number(first[i] ?? "0");
      s.cells++;
      if (d === 0) s.same++;
      else s.moved[i] = (s.moved[i] ?? 0) + 1;
      if (d < 0) s.lower++;
      if (d > 0) s.higher++;
    }
  }
  return s;
}

function changes(first: string, second: string): number {
  let n = 0;
  for (let i = 0; i < 7; i++) n += Math.abs(Number(second[i] ?? "0") - Number(first[i] ?? "0"));
  return n;
}

function row(name: string, first: string, second: string): string {
  const cells: string[] = [];
  for (let i = 0; i < 7; i++) {
    const a = first[i] ?? "";
    const b = second[i] ?? "";
    cells.push(`<i tabindex="0" data-d="${Number(b) - Number(a)}" data-tip="${escapeText(name)}, ${DIALS[i]?.[0] ?? ""}: ${a} then ${b}"></i>`);
  }
  return `<div class="rt-row"><b title="${escapeText(name)}">${escapeText(name)}</b>${cells.join("")}</div>`;
}

function blocks(width: number, order: number): string {
  const rows = [...RETEST];
  if (order === 0) rows.sort((a, b) => a[0].localeCompare(b[0]));
  else rows.sort((a, b) => changes(b[1], b[2]) - changes(a[1], a[2]) || a[0].localeCompare(b[0]));
  const columns = width >= 860 ? 3 : width >= 560 ? 2 : 1;
  const per = Math.ceil(rows.length / columns);
  const header = `<div class="rt-head"><span>Result</span>${SHORT.map((s) => `<span>${s}</span>`).join("")}</div>`;
  const out: string[] = [];
  for (let c = 0; c < columns; c++) out.push(`<div>${header}${rows.slice(c * per, (c + 1) * per).map((r) => row(r[0], r[1], r[2])).join("")}</div>`);
  return `<div class="rt-blocks" style="grid-template-columns:repeat(${columns}, minmax(0, 1fr))">${out.join("")}</div>`;
}

function keys(): string {
  const names = DIALS.map((d, i) => `${SHORT[i] ?? ""} ${d[0].toLowerCase()}`).join(" · ");
  const swatch = [["0", "Same"], ["-1", "One lower"], ["-2", "Two lower"], ["1", "One higher"]].map(([d, label]) => `<span class="t-key"><i data-d="${d ?? ""}"></i>${label ?? ""}</span>`).join("");
  return `<p class="t-note rt-keys">${swatch}</p><p class="t-note">${names}</p>`;
}

function statRow(): string {
  const s = retestStats();
  const changed = s.cells - s.same;
  const eff = s.moved[0] === 0 ? "effectiveness never moved" : `effectiveness moved ${String(s.moved[0] ?? 0)} times`;
  return `<div class="t-stats">${stat(`${Math.round((100 * s.same) / s.cells)}%`, `of ${whole(s.cells)} dial scores came back the same`)}${stat(`${s.lower} of ${changed}`, "changes were lower the second time")}${stat(`${s.identical} of ${RETEST.length}`, `results came back identical; ${eff}`)}</div>`;
}

export function show(figure: HTMLElement): void {
  addStyle("theorem-retest", CSS);
  const html = `${head("The same judge, twice", "Asked again, the judge mostly agreed with itself, and when it did not, it was harsher")}${statRow()}${choices("order", ["By name", "Most changed first"], 0)}<div data-grid></div>${keys()}`;
  const root = mount(figure, 2, html);
  const grid = root?.querySelector("[data-grid]");
  if (!root || !grid) return;
  let order = 0;
  let width = plotWidth(figure);
  const draw = (): void => {
    hideTooltips(figure);
    grid.innerHTML = blocks(width, order);
  };
  root.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("[data-order]") : null;
    if (!button) return;
    order = Number(button.getAttribute("data-order"));
    setActive(root, "order", order);
    draw();
  });
  new ResizeObserver(() => {
    const next = plotWidth(figure);
    if (next === width) return;
    width = next;
    draw();
  }).observe(root);
  draw();
  wireTooltips(figure);
}
