import { hydrate } from "../lazy.ts";
import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { problemsFigure, problemsList, problemsSvg, START_PROBLEM } from "../problems.ts";

function wireProblems(figure: Element): void {
  hydrate(figure, problemsFigure);
  let selected = START_PROBLEM;
  let chart = plotWidth(figure);
  const list = figure.querySelector("[data-list]");
  const draw = (): void => {
    hideTooltips(figure);
    swapChart(figure, problemsSvg(chart, selected));
    if (list) list.innerHTML = problemsList(selected);
  };
  const choose = (target: EventTarget | null): void => {
    const row = target instanceof Element ? target.closest(".row[data-i]") : null;
    if (!row) return;
    selected = Number(row.getAttribute("data-i"));
    draw();
    figure.querySelector<SVGElement>(`.row[data-i="${selected}"]`)?.focus();
  };
  figure.addEventListener("click", (event) => choose(event.target));
  figure.addEventListener("keydown", (event) => {
    if (!(event instanceof KeyboardEvent) || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    choose(event.target);
  });
  watch(figure, (width) => {
    chart = width;
    draw();
  });
  wireTooltips(figure);
}

for (const figure of document.querySelectorAll("figure[data-kind=problems]")) wireProblems(figure);
