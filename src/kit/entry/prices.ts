import { plotWidth, swapChart, watch } from "../redraw.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { findWord, firstIn, priceNote, priceSvg, wordsIn } from "../price-chart.ts";
import { CATEGORIES, PRICES } from "../price-data.ts";

const SKIPPED = new Set(["or", "and", "the", "of", "for"]);
const FOUND_LIMIT = 5;

function tokens(text: string): string[] {
  const words = text.toLowerCase().replace(/['’]/g, "").split(/[^a-z0-9]+/);
  return words.filter((word) => word !== "" && !SKIPPED.has(word)).map((word) => (word.length > 3 && word.endsWith("s") ? word.slice(0, -1) : word));
}

function near(a: string, b: string): boolean {
  return a === b || (Math.min(a.length, b.length) >= 4 && (a.startsWith(b) || b.startsWith(a)));
}

function within(part: string[], whole: string[]): boolean {
  return part.length > 0 && part.every((a) => whole.some((b) => near(a, b)));
}

// A shop row matches when its item and the word name the same thing. A move matches when it uses the word.
function matches(word: string[], row: Element): boolean {
  if (row.classList.contains("life-series")) return false;
  const shop = row.classList.contains("life-buy") || row.querySelector("details.life-item") !== null;
  const name = tokens(row.querySelector("b")?.textContent ?? "");
  if (shop) return within(word, name) || within(name, word);
  const text = tokens(row.textContent ?? "");
  return word.some((a) => text.some((b) => near(a, b)));
}

function copyOf(row: Element): Element {
  const copy = row.cloneNode(true);
  if (!(copy instanceof Element)) return row;
  for (const hid of [copy, ...copy.querySelectorAll("[hidden]")]) hid.removeAttribute("hidden");
  for (const details of copy.querySelectorAll("details")) {
    details.open = true;
    details.removeAttribute("data-auto");
  }
  return copy;
}

// The chart's own figure holds no shop prices. It copies the rows that the daily-life list drew lower on
// the page, so a word such as "taxi" shows its index, its moves and its shop prices in one place.
function showFound(figure: Element, word: string, category: number): void {
  const box = figure.querySelector("[data-found]");
  if (!box) return;
  const groups = [...document.querySelectorAll<HTMLDetailsElement>("details.life-cat")];
  const home = groups.find((group) => group.dataset.cat === CATEGORIES[category]);
  if (!home) {
    box.replaceChildren();
    return;
  }
  const wanted = tokens(word);
  const pick = (group: HTMLDetailsElement): Element[] => [...group.querySelectorAll(".life-open > section > .life-rows > li")].filter((row) => matches(wanted, row));
  let from = home;
  let rows = pick(home);
  for (const group of groups) {
    if (rows.length > 0) break;
    from = group;
    rows = pick(group);
  }
  if (rows.length === 0) from = home;
  const title = document.createElement("h4");
  title.textContent = `${from.dataset.cat ?? ""} · what to do and shop prices`;
  const list = document.createElement("ol");
  list.className = "life-rows";
  list.append(...rows.slice(0, FOUND_LIMIT).map(copyOf));
  const more = document.createElement("a");
  more.className = "button";
  more.href = `#${from.id}`;
  more.textContent = `Open all of ${from.dataset.cat ?? ""}`;
  box.replaceChildren(...(rows.length > 0 ? [title, list, more] : [more]));
}

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
    showFound(figure, word, found[0]);
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
