import { hydrate } from "../lazy.ts";
import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { tradeFigure, tradeSvg } from "../trade.ts";

function wireTrade(figure: Element): void {
  hydrate(figure, tradeFigure);
  const buttons = figure.querySelectorAll("button[data-view]");
  let view = "step";
  const draw = (width: number): void => {
    hideTooltips(figure);
    swapChart(figure, tradeSvg(width, view));
  };
  for (const button of buttons) {
    button.addEventListener("click", () => {
      view = button.getAttribute("data-view") ?? "step";
      for (const other of buttons) other.setAttribute("data-active", String(other === button));
      draw(plotWidth(figure));
    });
  }
  watch(figure, draw);
  wireTooltips(figure);
}

for (const figure of document.querySelectorAll("figure[data-kind=trade]")) wireTrade(figure);
