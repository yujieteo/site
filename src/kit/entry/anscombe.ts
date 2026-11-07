import { allKept, anscombeFit, anscombeSvg } from "../anscombe.ts";
import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";

function redrawSet(group: Element, kept: Uint8Array, chart: number): void {
  const next = anscombeFit(Number(group.getAttribute("data-set")), kept, chart);
  const fit = group.querySelector("[data-fit]");
  const note = group.querySelector("[data-note]");
  if (fit) fit.innerHTML = next.line;
  if (note) note.textContent = next.note;
  for (const point of group.querySelectorAll(".pt")) {
    const dropped = kept[Number(point.getAttribute("data-i"))] !== 1;
    point.setAttribute("data-dropped", String(dropped));
    point.setAttribute("aria-pressed", String(dropped));
  }
}

function pointOf(event: Event): Element | null {
  return event.target instanceof Element ? event.target.closest(".pt") : null;
}

function wireAnscombe(figure: Element): void {
  const kept = [allKept(), allKept(), allKept(), allKept()];
  let chart = plotWidth(figure);
  const sync = (): void => {
    for (const group of figure.querySelectorAll("g[data-set]")) redrawSet(group, kept[Number(group.getAttribute("data-set"))] ?? allKept(), chart);
  };
  const toggle = (point: Element): void => {
    const own = kept[Number(point.closest("g[data-set]")?.getAttribute("data-set"))];
    const i = Number(point.getAttribute("data-i"));
    if (own) own[i] = own[i] === 1 ? 0 : 1;
    sync();
  };
  figure.addEventListener("click", (event) => {
    const point = pointOf(event);
    if (point) toggle(point);
  });
  figure.addEventListener("keydown", (event) => {
    const point = pointOf(event);
    if (!point || !(event instanceof KeyboardEvent) || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    toggle(point);
  });
  figure.querySelector("[data-anscombe-reset]")?.addEventListener("click", () => {
    for (const own of kept) own.fill(1);
    sync();
  });
  watch(figure, (next) => {
    chart = next;
    hideTooltips(figure);
    swapChart(figure, anscombeSvg(figure.id, chart, kept));
  });
  wireTooltips(figure);
}

for (const figure of document.querySelectorAll("figure[data-kind=anscombe]")) wireAnscombe(figure);
