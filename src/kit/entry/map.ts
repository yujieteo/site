import { hydrate } from "../lazy.ts";
import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { allOn, mapFigure, mapNote, mapSvg, refit } from "../map.ts";

function keepOne(on: Uint8Array, box: HTMLInputElement): void {
  if (!on.every((v) => v === 0)) return;
  on[Number(box.getAttribute("data-axis"))] = 1;
  box.checked = true;
}

function wireChoose(figure: Element, choose: (target: EventTarget | null) => void): void {
  figure.addEventListener("click", (event) => choose(event.target));
  figure.addEventListener("keydown", (event) => {
    if (!(event instanceof KeyboardEvent) || (event.key !== "Enter" && event.key !== " ")) return;
    if (!(event.target instanceof Element) || !event.target.closest("[data-i]")) return;
    event.preventDefault();
    choose(event.target);
  });
}

function wireMap(figure: Element): void {
  hydrate(figure, mapFigure);
  const on = allOn();
  let selected = -1;
  let chart = plotWidth(figure);
  const note = figure.querySelector("[data-note]");
  const draw = (): void => {
    hideTooltips(figure);
    refit(on);
    swapChart(figure, mapSvg(chart, on, selected));
    if (note) note.textContent = mapNote(on, selected);
  };
  figure.addEventListener("change", (event) => {
    const box = event.target;
    if (!(box instanceof HTMLInputElement) || !box.hasAttribute("data-axis")) return;
    on[Number(box.getAttribute("data-axis"))] = box.checked ? 1 : 0;
    keepOne(on, box);
    draw();
  });
  const choose = (target: EventTarget | null): void => {
    const point = target instanceof Element ? target.closest("[data-i]") : null;
    if (!point) return;
    const i = Number(point.getAttribute("data-i"));
    selected = selected === i ? -1 : i;
    draw();
    figure.querySelector<SVGElement>(`[data-i="${i}"]`)?.focus();
  };
  wireChoose(figure, choose);
  watch(figure, (width) => {
    chart = width;
    draw();
  });
  wireTooltips(figure);
}

for (const figure of document.querySelectorAll("figure[data-kind=map]")) wireMap(figure);
