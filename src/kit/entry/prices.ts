import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { findWord, firstIn, priceNote, priceSvg, wordsIn } from "../price-chart.ts";
import { PRICES } from "../price-data.ts";

function fill(list: HTMLDataListElement, category: number): void {
  const options: HTMLOptionElement[] = [];
  for (const word of wordsIn(category)) {
    const option = document.createElement("option");
    option.value = word;
    options.push(option);
  }
  list.replaceChildren(...options);
}

function wirePrices(figure: Element): void {
  const box = figure.querySelector<HTMLInputElement>("input[data-item]");
  const menu = figure.querySelector<HTMLSelectElement>("select[data-cat]");
  const list = figure.querySelector("datalist");
  const note = figure.querySelector("[data-note]");
  if (!box || !menu || !list) return;
  let chart = plotWidth(figure);
  let index = Math.max(0, PRICES.findIndex((item) => item.name.startsWith("Hen Eggs")));
  let word = "";
  const draw = (): void => {
    if (chart <= 0) return;
    hideTooltips(figure);
    swapChart(figure, priceSvg(index, chart));
    if (note) note.textContent = priceNote(index, word);
  };
  const show = (found: readonly [number, string, number] | undefined): boolean => {
    if (!found) return false;
    index = found[2];
    word = found[1];
    draw();
    return true;
  };
  const category = (): number => Number(menu.value);
  fill(list, -1);
  box.addEventListener("input", () => show(findWord(box.value, category(), true)));
  box.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    if (show(findWord(box.value, category(), false))) box.value = word;
    else if (note) note.textContent = `No match for "${box.value}". Try a simpler word, such as shoes or rice.`;
  });
  menu.addEventListener("change", () => {
    fill(list, category());
    box.value = "";
    show(firstIn(category()));
  });
  watch(figure, (width) => {
    chart = width;
    draw();
  });
  wireTooltips(figure);
}

for (const figure of document.querySelectorAll("figure[data-kind=prices]")) wirePrices(figure);
