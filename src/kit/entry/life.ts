import { wireTooltips } from "../tooltip.ts";

// The list of groups. The build has already drawn every row. This filters them as the reader types, opens a
// group when a link points at it, and draws the full chart of a price when its row first opens. The chart code
// and its data are large, so they load only when the reader first opens a price row or uses the Find box.
// A keyboard action has no animation, so the filter swaps at once.

type Charts = typeof import("../price-chart.ts");

const SHORTEST = 2;
const OPENED_ITEMS = 4;
const PLURAL = new Intl.PluralRules("en");
let charts: Promise<Charts> | undefined;

function loadCharts(): Promise<Charts> {
  charts ??= import("../price-chart.ts");
  return charts;
}

function clean(text: string): string {
  return text.toLowerCase().replace(/['’]/g, "").replace(/\s+/g, " ").trim();
}

function count(n: number, one: string, many: string): string {
  return `${n} ${PLURAL.select(n) === "one" ? one : many}`;
}

function openAuto(details: HTMLDetailsElement): void {
  if (details.open) return;
  details.open = true;
  details.setAttribute("data-auto", "");
}

function escapeAttribute(text: string): string {
  return text.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

async function drawChart(row: HTMLDetailsElement): Promise<void> {
  const box = row.querySelector<HTMLElement>(".life-chart");
  if (!box || box.hasAttribute("data-drawn")) return;
  const { priceNote, priceSvg } = await loadCharts();
  const index = Number(row.dataset.s);
  const name = row.querySelector("summary b")?.textContent ?? "";
  const svg = priceSvg(index, Math.floor(box.clientWidth)).replace('aria-label="ALT"', `aria-label="${escapeAttribute(`Monthly price of ${name} from 2015, with a forecast to September 2027 and its month pattern`)}"`);
  box.innerHTML = svg;
  const note = document.createElement("p");
  note.className = "note";
  note.textContent = priceNote(index);
  box.append(note);
  box.setAttribute("data-drawn", "");
}

function wireLife(figure: Element): void {
  const box = figure.querySelector<HTMLInputElement>("input[data-q]");
  const note = figure.querySelector("[data-count]");
  if (!box || !note) return;
  const idle = note.textContent ?? "";
  const groups = [...figure.querySelectorAll<HTMLDetailsElement>("details.life-cat")];
  const areas = [...figure.querySelectorAll<HTMLElement>("li.life-area")];
  const texts = new Map<Element, string>();
  let series: (text: string) => number[] = () => [];
  const textOf = (row: Element): string => {
    const known = texts.get(row) ?? clean(row.textContent ?? "");
    texts.set(row, known);
    return known;
  };
  const reset = (): void => {
    for (const hid of figure.querySelectorAll("[hidden]")) hid.removeAttribute("hidden");
    for (const details of figure.querySelectorAll<HTMLDetailsElement>("details[data-auto]")) {
      details.open = false;
      details.removeAttribute("data-auto");
    }
    note.textContent = idle;
  };
  const filter = (): void => {
    const wanted = clean(box.value);
    reset();
    if (wanted.length < SHORTEST) return;
    const meant = series(wanted);
    const items: HTMLDetailsElement[] = [];
    let rows = 0;
    let found = 0;
    for (const group of groups) {
      const whole = clean(group.querySelector("summary b")?.textContent ?? "").includes(wanted);
      let hits = 0;
      for (const section of group.querySelectorAll(".life-open > section")) {
        let shown = 0;
        for (const row of section.querySelectorAll(":scope > ol > li")) {
          const price = row.querySelector<HTMLDetailsElement>("details.life-price");
          const hit = whole || textOf(row).includes(wanted) || (price !== null && meant.includes(Number(price.dataset.s)));
          row.toggleAttribute("hidden", !hit);
          if (!hit) continue;
          shown++;
          const item = row.querySelector<HTMLDetailsElement>("details.life-item:not(.life-price)");
          if (item && !whole) items.push(item);
        }
        section.toggleAttribute("hidden", shown === 0);
        hits += shown;
      }
      group.parentElement?.toggleAttribute("hidden", hits === 0);
      if (hits === 0) continue;
      rows += hits;
      found++;
      openAuto(group);
    }
    for (const area of areas) {
      let next = area.nextElementSibling;
      let any = false;
      for (; next && !next.classList.contains("life-area"); next = next.nextElementSibling) any ||= !next.hasAttribute("hidden");
      area.toggleAttribute("hidden", !any);
    }
    if (items.length <= OPENED_ITEMS) items.forEach(openAuto);
    note.textContent = rows === 0 ? `Nothing matches "${box.value.trim()}". Try a simpler word, such as shoes or rent.` : `${count(rows, "row matches", "rows match")} in ${count(found, "group", "groups")}.`;
  };
  // The words that point at an official price ("sofa", "Grab") come with the chart code. Fetch it when the reader
  // first comes to the box, and filter again once it is here.
  const learn = (): void => {
    box.removeEventListener("focus", learn);
    box.removeEventListener("input", learn);
    void loadCharts().then((loaded) => {
      series = loaded.seriesFor;
      if (box.value !== "") filter();
    });
  };
  box.addEventListener("focus", learn);
  box.addEventListener("input", learn);
  box.addEventListener("input", filter);
  box.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    if (matchMedia("(pointer: coarse)").matches) box.blur();
  });
  figure.addEventListener("life-clear", () => {
    box.value = "";
    filter();
  });
  // The name of an open group stays at the top of the screen. When the reader closes the group from there,
  // the page would be left far below it, so bring the group back. This is a jump: the reader asked for it.
  figure.addEventListener("toggle", (event) => {
    const row = event.target;
    if (!(row instanceof HTMLDetailsElement)) return;
    if (row.classList.contains("life-price") && row.open) void drawChart(row);
    if (!row.classList.contains("life-cat") || row.open) return;
    if (document.activeElement !== box && row.getBoundingClientRect().top < 0) row.scrollIntoView();
  }, true);
  wireTooltips(figure);
}

// A link to a group opens it. The browser does the scroll.
function openTarget(hash: string): void {
  const target = hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
  if (!(target instanceof HTMLDetailsElement) || !target.classList.contains("life-cat")) return;
  if (target.closest("li[hidden]")) target.closest("figure")?.dispatchEvent(new Event("life-clear"));
  target.open = true;
}

for (const figure of document.querySelectorAll("figure[data-kind=life]")) wireLife(figure);
window.addEventListener("hashchange", () => openTarget(location.hash));
document.addEventListener("click", (event) => {
  const link = event.target instanceof Element ? event.target.closest("a[href^='#']") : null;
  if (link) openTarget(link.getAttribute("href") ?? "");
});
openTarget(location.hash);
