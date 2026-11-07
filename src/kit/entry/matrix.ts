import { hydrate } from "../lazy.ts";
import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { matrixFigure, matrixNote, matrixSvg, NO_SORT } from "../matrix.ts";

function wireMatrix(figure: Element): void {
  hydrate(figure, matrixFigure);
  let sort = NO_SORT;
  let chart = plotWidth(figure);
  const note = figure.querySelector("[data-note]");
  const draw = (): void => {
    hideTooltips(figure);
    swapChart(figure, matrixSvg(chart, sort));
    if (note) note.textContent = matrixNote(sort);
  };
  const choose = (target: EventTarget | null): void => {
    const head = target instanceof Element ? target.closest("[data-col]") : null;
    if (!head) return;
    sort = Number(head.getAttribute("data-col"));
    draw();
    figure.querySelector<SVGElement>(`[data-col="${sort}"]`)?.focus();
  };
  figure.addEventListener("click", (event) => choose(event.target));
  figure.addEventListener("keydown", (event) => {
    if (!(event instanceof KeyboardEvent) || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    choose(event.target);
  });
  figure.querySelector("[data-reset]")?.addEventListener("click", () => {
    sort = NO_SORT;
    draw();
  });
  watch(figure, (width) => {
    chart = width;
    draw();
  });
  wireTooltips(figure);
}

for (const figure of document.querySelectorAll("figure[data-kind=matrix]")) wireMatrix(figure);
