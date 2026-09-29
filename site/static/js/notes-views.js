// Notes page views: Timeline (the default) and List, over the same notes.
// Without JavaScript both views show, timeline first. The choice lives in the
// URL (?view=list), and a link to a note or a date (#note:…, #2026-09-24)
// always opens the list. The timeline follows the page filters from
// filter.js, matching notes with the same search as the list.
import { loadCorpus, searchSite } from "./corpus.js";
import { fadeIn } from "./fade.js";

const switcher = document.querySelector("[data-view-switch]");
const panels = new Map(
  [...document.querySelectorAll("[data-view-panel]")].map((panel) => [panel.dataset.viewPanel, panel]),
);
if (switcher && panels.size === 2) {
  const timeline = panels.get("timeline");
  const timelineEmpty = timeline.querySelector("[data-timeline-empty]");
  const items = [...timeline.querySelectorAll(".timeline-item")];
  const months = [...timeline.querySelectorAll(".timeline-month")];
  const initiallyOpen = new Set(months.filter((month) => month.open));
  let filterId = 0;

  const show = (view, { updateUrl = true } = {}) => {
    panels.forEach((panel, name) => { panel.hidden = name !== view; });
    fadeIn(panels.get(view));
    switcher.querySelectorAll("[data-view]").forEach((button) => {
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
  const reveal = (id) => {
    show("list");
    let target = document.getElementById(id);
    if (!target || !panels.get("list").contains(target)) {
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
    const button = event.target.closest("[data-view]");
    if (button) show(button.dataset.view);
  });
  timeline.addEventListener("click", (event) => {
    const link = event.target.closest("a.timeline-link");
    if (!link) return;
    event.preventDefault();
    const id = decodeURIComponent(link.hash.slice(1));
    history.pushState(history.state, "", link.hash);
    reveal(id);
  });
  window.addEventListener("hashchange", () => { if (hashTarget()) reveal(hashTarget()); });

  // The timeline shows only the notes the current filters match.
  const applyFilters = async ({ text, tagGroups, kind, filtered }) => {
    const current = ++filterId;
    let matches = null;
    if (filtered) {
      try {
        const corpus = await loadCorpus();
        if (current !== filterId) return;
        matches = new Set();
        let cursor = null;
        do {
          const result = searchSite(corpus, { text, kind, tagGroups, limit: 100, cursor });
          result.items.forEach((record) => matches.add(record.id));
          cursor = result.nextCursor;
        } while (cursor);
      } catch {
        return;
      }
    }
    items.forEach((item) => { item.hidden = matches !== null && !matches.has(item.dataset.noteId); });
    months.forEach((month) => {
      const shown = month.querySelectorAll(".timeline-item:not([hidden])").length;
      const label = month.querySelector("[data-month-count]");
      const total = Number(label.dataset.total);
      label.textContent = matches === null
        ? `${total} ${total === 1 ? "note" : "notes"}`
        : `${shown} of ${total} ${total === 1 ? "note" : "notes"}`;
      month.hidden = shown === 0;
      month.open = matches === null ? initiallyOpen.has(month) : shown > 0;
    });
    timeline.querySelectorAll(".timeline-year").forEach((year) => {
      year.hidden = !year.querySelector(".timeline-month:not([hidden])");
    });
    timelineEmpty.hidden = matches === null || matches.size > 0;
  };
  document.addEventListener("filters-changed", (event) => applyFilters(event.detail));
  const filterState = document.querySelector("[data-filter-form]")?.filterState;
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
