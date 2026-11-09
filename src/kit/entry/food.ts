import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { bestRows, countLine, findRows, MAP_HINT, mapDots, mapSvg, PAGE, pickHtml, scatterSvg, spreadSvg, type BestSort, type Filter } from "../food.ts";

const REACH = 28;

function onPick(group: Element, pick: (value: string) => void): void {
  group.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("button[data-value]") : null;
    if (!button) return;
    for (const other of group.querySelectorAll("button[data-value]")) {
      other.setAttribute("data-active", String(other === button));
      other.setAttribute("aria-pressed", String(other === button));
    }
    pick(button.getAttribute("data-value") ?? "");
  });
}

function wireBest(figure: Element): void {
  const group = figure.querySelector(".food-tools");
  const rows = figure.querySelector("[data-rows]");
  if (!group || !rows) return;
  onPick(group, (value) => {
    rows.innerHTML = bestRows(value as BestSort);
  });
}

function wireChart(figure: Element, draw: (width: number) => string): void {
  watch(figure, (width) => {
    hideTooltips(figure);
    swapChart(figure, draw(width));
  });
  wireTooltips(figure);
}

function wireMap(figure: Element): void {
  const group = figure.querySelector(".food-tools");
  const frame = figure.querySelector(".frame");
  const note = figure.querySelector("[data-pick]");
  if (!group || !frame || !note) return;
  let kind = "all";
  let chosen = "";
  let width = plotWidth(figure);
  const draw = (): void => swapChart(figure, mapSvg(width, kind, chosen));
  onPick(group, (value) => {
    kind = value;
    chosen = "";
    note.textContent = MAP_HINT;
    draw();
  });
  frame.addEventListener("click", (event) => {
    const svg = event.target instanceof Element ? event.target.closest("svg.chart") : null;
    if (!svg || !(event instanceof MouseEvent)) return;
    const box = svg.getBoundingClientRect();
    const x = event.clientX - box.left;
    const y = event.clientY - box.top;
    let best = REACH * REACH;
    let found = "";
    let html = MAP_HINT;
    for (const dot of mapDots(width, kind)) {
      const distance = (dot.x - x) ** 2 + (dot.y - y) ** 2;
      if (distance >= best) continue;
      best = distance;
      found = dot.place.id;
      html = pickHtml(dot.place);
    }
    chosen = found;
    note.innerHTML = html;
    draw();
  });
  watch(figure, (next) => {
    width = next;
    draw();
  });
}

function wireFind(figure: Element): void {
  const box = figure.querySelector<HTMLInputElement>("[data-q]");
  const rows = figure.querySelector("[data-rows]");
  const count = figure.querySelector("[data-count]");
  const more = figure.querySelector<HTMLButtonElement>("[data-more]");
  const groups = figure.querySelectorAll(".food-tools");
  const kinds = groups[0];
  const budgets = groups[1];
  if (!box || !rows || !count || !more || !kinds || !budgets) return;
  const filter: Filter = { words: "", kind: "all", budget: 0 };
  let shown = PAGE;
  const draw = (): void => {
    const found = findRows(filter, shown);
    rows.innerHTML = found.html;
    count.textContent = countLine(shown, found.total);
    more.hidden = shown >= found.total;
  };
  const fresh = (): void => {
    shown = PAGE;
    draw();
  };
  box.addEventListener("input", () => {
    filter.words = box.value;
    fresh();
  });
  onPick(kinds, (value) => {
    filter.kind = value;
    fresh();
  });
  onPick(budgets, (value) => {
    filter.budget = Number(value);
    fresh();
  });
  more.addEventListener("click", () => {
    shown += PAGE;
    draw();
  });
}

for (const figure of document.querySelectorAll("figure[data-kind=food]")) {
  const view = figure.getAttribute("data-view");
  if (view === "best") wireBest(figure);
  if (view === "scatter") wireChart(figure, scatterSvg);
  if (view === "spread") wireChart(figure, spreadSvg);
  if (view === "map") wireMap(figure);
  if (view === "find") wireFind(figure);
}
