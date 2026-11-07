import { gapNote, gapSvg, type Pick } from "./gap.ts";
import { hydrate } from "./lazy.ts";
import { plotWidth, swapChart, watch } from "./redraw.ts";
import { hideTooltips, wireTooltips } from "./tooltip.ts";

function picksOf(figure: Element): Pick[] {
  const picks: Pick[] = [];
  for (const box of figure.querySelectorAll<HTMLSelectElement>("select[data-pick]")) {
    const index = Number(box.value);
    if (index >= 0) picks.push({ index, cls: box.getAttribute("data-cls") ?? "a" });
  }
  return picks;
}

export function wireGap(figure: Element, build: (id: string, width: number) => string): void {
  hydrate(figure, build);
  let chart = plotWidth(figure);
  const note = figure.querySelector("[data-note]");
  const draw = (): void => {
    const picks = picksOf(figure);
    hideTooltips(figure);
    swapChart(figure, gapSvg(chart, picks));
    if (note) note.textContent = gapNote(picks);
  };
  figure.addEventListener("change", draw);
  watch(figure, (width) => {
    chart = width;
    draw();
  });
  wireTooltips(figure);
}
