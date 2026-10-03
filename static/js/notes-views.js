// Notes page views: Timeline (the default) and List, over the same notes.
// Without JavaScript both views show, timeline first. The choice lives in the
// URL (?view=list), and a link to a note or a date (#note:…, #2026-09-24)
// always opens the list. The timeline follows the page filters from
// filter.js, matching notes with the same search as the list.
import { loadCorpus, searchSite } from "./corpus.js";
import { fadeIn } from "./fade.js";
/** @import { FilterState } from "./filter.js" */

const switcher = document.querySelector("[data-view-switch]");
const panels = new Map(
  [.../** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll("[data-view-panel]"))]
    .map((panel) => [panel.dataset.viewPanel, panel]),
);
const timeline = panels.get("timeline");
const listPanel = panels.get("list");
if (switcher instanceof HTMLElement && panels.size === 2 && timeline && listPanel) {
  const timelineEmpty = /** @type {HTMLElement} */ (timeline.querySelector("[data-timeline-empty]"));
  const items = [.../** @type {NodeListOf<HTMLElement>} */ (timeline.querySelectorAll(".timeline-item"))];
  const months = [.../** @type {NodeListOf<HTMLDetailsElement>} */ (timeline.querySelectorAll(".timeline-month"))];
  const initiallyOpen = new Set(months.filter((month) => month.open));
  let filterId = 0;

  /** @param {string | undefined} view */
  const show = (view, { updateUrl = true } = {}) => {
    panels.forEach((panel, name) => { panel.hidden = name !== view; });
    fadeIn(panels.get(view));
    /** @type {NodeListOf<HTMLElement>} */ (switcher.querySelectorAll("[data-view]")).forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.view === view));
    });
    if (!updateUrl) return;
    const params = new URLSearchParams(window.location.search);
    if (view === "list") params.set("view", "list");
    else params.delete("view");
    const query = params.toString();
    history.replaceState(history.state, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  };

  // Show the list and scroll to a note or date, clearing filters if they hide it.
  /** @param {string} id */
  const reveal = (id) => {
    show("list");
    let target = document.getElementById(id);
    if (!target || !listPanel.contains(target)) {
      document.dispatchEvent(new CustomEvent("filters-clear"));
      target = document.getElementById(id);
    }
    target?.scrollIntoView({ block: "start" });
    target?.setAttribute("tabindex", "-1");
    target?.focus({ preventScroll: true });
  };

  const hashTarget = () => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    return id && id !== "main-content" ? id : "";
  };

  switcher.hidden = false;
  switcher.addEventListener("click", (event) => {
    const button = /** @type {HTMLElement | null} */ (/** @type {Element} */ (event.target).closest("[data-view]"));
    if (button) show(button.dataset.view);
  });
  timeline.addEventListener("click", (event) => {
    const link = /** @type {HTMLAnchorElement | null} */ (/** @type {Element} */ (event.target).closest("a.timeline-link"));
    if (!link) return;
    event.preventDefault();
    const id = decodeURIComponent(link.hash.slice(1));
    history.pushState(history.state, "", link.hash);
    reveal(id);
  });
  window.addEventListener("hashchange", () => { if (hashTarget()) reveal(hashTarget()); });

  // The timeline shows only the notes the current filters match.
  /** @param {FilterState} state */
  const applyFilters = async ({ text, tagGroups, kind, filtered }) => {
    const current = ++filterId;
    /** @type {Set<string> | null} */
    let matches = null;
    if (filtered) {
      try {
        const corpus = await loadCorpus();
        if (current !== filterId) return;
        /** @type {Set<string>} */
        const found = new Set();
        /** @type {string | null} */
        let cursor = null;
        do {
          const result = searchSite(corpus, { text, kind, tagGroups, limit: 100, cursor });
          result.items.forEach((record) => found.add(record.id));
          cursor = result.nextCursor;
        } while (cursor);
        matches = found;
      } catch {
        return;
      }
    }
    items.forEach((item) => { item.hidden = matches !== null && !matches.has(/** @type {string} */ (item.dataset.noteId)); });
    months.forEach((month) => {
      const shown = month.querySelectorAll(".timeline-item:not([hidden])").length;
      const label = /** @type {HTMLElement} */ (month.querySelector("[data-month-count]"));
      const total = Number(label.dataset.total);
      label.textContent = matches === null
        ? `${total} ${total === 1 ? "note" : "notes"}`
        : `${shown} of ${total} ${total === 1 ? "note" : "notes"}`;
      month.hidden = shown === 0;
      month.open = matches === null ? initiallyOpen.has(month) : shown > 0;
    });
    /** @type {NodeListOf<HTMLElement>} */ (timeline.querySelectorAll(".timeline-year")).forEach((year) => {
      year.hidden = !year.querySelector(".timeline-month:not([hidden])");
    });
    timelineEmpty.hidden = matches === null || matches.size > 0;
  };
  document.addEventListener("filters-changed", (event) => applyFilters(/** @type {CustomEvent<FilterState>} */ (event).detail));
  const filterForm = /** @type {(HTMLFormElement & { filterState?: FilterState }) | null} */ (document.querySelector("[data-filter-form]"));
  const filterState = filterForm?.filterState;
  if (filterState) applyFilters(filterState);

  const params = new URLSearchParams(window.location.search);
  if (hashTarget() && document.getElementById(hashTarget())) {
    show("list", { updateUrl: false });
    // Wait a frame so the list is laid out before scrolling to the note.
    requestAnimationFrame(() => reveal(hashTarget()));
  } else {
    show(params.get("view") === "list" ? "list" : "timeline", { updateUrl: false });
  }
}
