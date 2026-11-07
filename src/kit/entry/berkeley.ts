import { berkeleySvg } from "../berkeley.ts";
import { swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";

function wireBerkeley(figure: Element): void {
  const buttons = figure.querySelectorAll("button[data-berkeley]");
  let view = "pooled";
  for (const button of buttons) {
    button.addEventListener("click", () => {
      view = button.getAttribute("data-berkeley") ?? "pooled";
      figure.querySelector("[data-view]")?.setAttribute("data-view", view);
      for (const other of buttons) other.setAttribute("data-active", String(other === button));
    });
  }
  watch(figure, (width) => {
    hideTooltips(figure);
    swapChart(figure, berkeleySvg(width, view));
  });
  wireTooltips(figure);
}

for (const figure of document.querySelectorAll("figure[data-kind=berkeley]")) wireBerkeley(figure);
