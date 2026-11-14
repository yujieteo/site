import { plotWidth, swapChart, watch } from "../redraw.ts";
import { applyCss } from "../css.ts";
import { hideTooltips, wireTooltips } from "../tooltip.ts";
import { countLine, findRows, listRows, MAP_HINT, mapSvg, markers, PAGE, pickHtml, spreadSvg, ZOOM_HINT, type FindState, type ListState, type Marker, type Sort } from "../food.ts";

const REACH = 28;

function onPick(figure: Element, name: string, pick: (value: string) => void): void {
  const group = figure.querySelector(`[data-group=${name}]`);
  group?.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest("button[data-value]") : null;
    if (!button) return;
    for (const other of group.querySelectorAll("button[data-value]")) {
      other.setAttribute("data-active", String(other === button));
      other.setAttribute("aria-pressed", String(other === button));
    }
    pick(button.getAttribute("data-value") ?? "");
  });
}

function wireRows(figure: Element, read: (shown: number) => { html: string; total: number }): (reset: boolean) => void {
  const rows = figure.querySelector("[data-rows]");
  const count = figure.querySelector("[data-count]");
  const more = figure.querySelector<HTMLButtonElement>("[data-more]");
  let shown = PAGE;
  const draw = (reset: boolean): void => {
    if (reset) shown = PAGE;
    const found = read(shown);
    if (rows) {
      rows.innerHTML = found.html;
      applyCss(rows);
    }
    if (count) count.textContent = countLine(shown, found.total);
    if (more) more.hidden = shown >= found.total;
  };
  more?.addEventListener("click", () => {
    shown += PAGE;
    draw(false);
  });
  return draw;
}

function wireList(figure: Element): void {
  const state: ListState = { sort: "cuisine", group: "meal", cuisine: "all", shown: PAGE };
  const draw = wireRows(figure, (shown) => listRows({ ...state, shown }));
  figure.querySelector<HTMLSelectElement>("[data-sort]")?.addEventListener("change", (event) => {
    state.sort = (event.target as HTMLSelectElement).value as Sort;
    draw(true);
  });
  figure.querySelector<HTMLSelectElement>("[data-group]")?.addEventListener("change", (event) => {
    state.group = (event.target as HTMLSelectElement).value;
    draw(true);
  });
  figure.querySelector<HTMLSelectElement>("[data-cuisine]")?.addEventListener("change", (event) => {
    state.cuisine = (event.target as HTMLSelectElement).value;
    draw(true);
  });
  draw(true);
}

function wireFind(figure: Element): void {
  const state: FindState = { words: "", kind: "all", budget: 0, cuisine: "all", shown: PAGE };
  const draw = wireRows(figure, (shown) => findRows({ ...state, shown }));
  figure.querySelector<HTMLInputElement>("[data-q]")?.addEventListener("input", (event) => {
    state.words = (event.target as HTMLInputElement).value;
    draw(true);
  });
  onPick(figure, "kind", (value) => {
    state.kind = value;
    draw(true);
  });
  onPick(figure, "budget", (value) => {
    state.budget = Number(value);
    draw(true);
  });
  figure.querySelector<HTMLSelectElement>("[data-cuisine]")?.addEventListener("change", (event) => {
    state.cuisine = (event.target as HTMLSelectElement).value;
    draw(true);
  });
  draw(true);
}

function wireChart(figure: Element, draw: (width: number) => string): void {
  watch(figure, (width) => {
    hideTooltips(figure);
    swapChart(figure, draw(width));
  });
  wireTooltips(figure);
}

function nearestIndex(list: Marker[], x: number, y: number): number {
  let best = REACH * REACH;
  let chosen = -1;
  list.forEach((marker, index) => {
    const distance = (marker.x - x) ** 2 + (marker.y - y) ** 2;
    if (distance < best) {
      best = distance;
      chosen = index;
    }
  });
  return chosen;
}

function wireMap(figure: Element): void {
  const frame = figure.querySelector(".frame");
  const note = figure.querySelector("[data-pick]");
  const areaBox = figure.querySelector<HTMLSelectElement>("[data-area]");
  const typeBox = figure.querySelector<HTMLSelectElement>("[data-type]");
  const back = figure.querySelector<HTMLButtonElement>("[data-back]");
  if (!frame || !note || !areaBox || !typeBox || !back) return;
  let width = plotWidth(figure);
  const list = (): Marker[] => markers(width, areaBox.value, typeBox.value);
  const draw = (zoom = false): void => {
    figure.toggleAttribute("data-zoom", zoom);
    swapChart(figure, mapSvg(width, areaBox.value, typeBox.value, true));
    note.textContent = areaBox.value === "all" ? MAP_HINT : ZOOM_HINT;
    back.hidden = areaBox.value === "all";
  };
  const mark = (name: string, index: number): void => {
    for (const held of figure.querySelectorAll(`g[${name}]`)) held.removeAttribute(name);
    if (index >= 0) figure.querySelector(`g[data-i="${index}"]`)?.setAttribute(name, "");
  };
  const activate = (index: number, pointer: boolean): void => {
    const marker = list()[index];
    if (marker && marker.area !== "") {
      areaBox.value = marker.area;
      draw(pointer);
      return;
    }
    mark("data-on", marker ? index : -1);
    if (marker) note.innerHTML = pickHtml(marker);
    else note.textContent = ZOOM_HINT;
  };
  const indexAt = (event: MouseEvent): number => {
    const svg = event.target instanceof Element ? event.target.closest("svg.chart") : null;
    if (!svg) return -1;
    const box = svg.getBoundingClientRect();
    return nearestIndex(list(), event.clientX - box.left, event.clientY - box.top);
  };
  areaBox.addEventListener("change", () => draw());
  typeBox.addEventListener("change", () => draw());
  back.addEventListener("click", (event) => {
    areaBox.value = "all";
    draw(event.detail > 0);
  });
  frame.addEventListener("pointerdown", (event) => {
    if (event instanceof PointerEvent) mark("data-pressed", indexAt(event));
  });
  for (const end of ["pointerup", "pointercancel", "pointerleave"]) frame.addEventListener(end, () => mark("data-pressed", -1));
  frame.addEventListener("click", (event) => {
    if (event instanceof MouseEvent && event.detail > 0) activate(indexAt(event), true);
  });
  frame.addEventListener("keydown", (event) => {
    if (!(event instanceof KeyboardEvent) || (event.key !== "Enter" && event.key !== " ")) return;
    const held = event.target instanceof Element ? event.target.closest("g[data-i]") : null;
    if (!held) return;
    event.preventDefault();
    activate(Number(held.getAttribute("data-i")), false);
  });
  watch(figure, (next) => {
    width = next;
    draw();
  });
  draw();
}

for (const figure of document.querySelectorAll("figure[data-kind=food]")) {
  const view = figure.getAttribute("data-view");
  if (view === "list") wireList(figure);
  if (view === "spread") wireChart(figure, spreadSvg);
  if (view === "map") wireMap(figure);
  if (view === "find") wireFind(figure);
}
