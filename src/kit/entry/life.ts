// The daily-life list. The build has already drawn every row. This filters them as the reader types, and it
// opens a group when a link points at it. A keyboard action has no animation, so the filter swaps at once.

const SHORTEST = 2;
const OPENED_ITEMS = 4;
const PLURAL = new Intl.PluralRules("en");

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

function wireLife(figure: Element): void {
  const box = figure.querySelector<HTMLInputElement>("input[data-q]");
  const note = figure.querySelector("[data-count]");
  if (!box || !note) return;
  const idle = note.textContent ?? "";
  const groups = [...figure.querySelectorAll<HTMLDetailsElement>("details.life-cat")];
  const texts = new Map<Element, string>();
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
    const items: HTMLDetailsElement[] = [];
    let rows = 0;
    let found = 0;
    for (const group of groups) {
      const whole = clean(group.dataset.cat ?? "").includes(wanted);
      let hits = 0;
      for (const section of group.querySelectorAll(".life-open > section")) {
        let shown = 0;
        for (const row of section.querySelectorAll(":scope > ol > li")) {
          const hit = whole || textOf(row).includes(wanted);
          row.toggleAttribute("hidden", !hit);
          if (!hit) continue;
          shown++;
          const item = row.querySelector<HTMLDetailsElement>("details.life-item");
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
    if (items.length <= OPENED_ITEMS) items.forEach(openAuto);
    note.textContent = rows === 0 ? `Nothing matches "${box.value.trim()}". Try a simpler word, such as shoes or rent.` : `${count(rows, "row matches", "rows match")} in ${count(found, "group", "groups")}.`;
  };
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
    const group = event.target;
    if (!(group instanceof HTMLDetailsElement) || !group.classList.contains("life-cat") || group.open) return;
    if (document.activeElement !== box && group.getBoundingClientRect().top < 0) group.scrollIntoView();
  }, true);
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
