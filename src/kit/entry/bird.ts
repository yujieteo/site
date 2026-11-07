import { birdFigure, birdNote, birdSvg } from "../bird.ts";
import { hydrate } from "../lazy.ts";
import { plotWidth, swapChart, watch } from "../redraw.ts";

function wireBird(figure: Element): void {
  hydrate(figure, birdFigure);
  const input = figure.querySelector("input[data-bird]");
  const out = figure.querySelector("output");
  if (!(input instanceof HTMLInputElement) || !out) return;
  const draw = (width: number): void => {
    swapChart(figure, birdSvg(width, Number(input.value)));
    out.textContent = birdNote(Number(input.value));
  };
  input.addEventListener("input", () => draw(plotWidth(figure)));
  watch(figure, draw);
}

for (const figure of document.querySelectorAll("figure[data-kind=bird]")) wireBird(figure);
