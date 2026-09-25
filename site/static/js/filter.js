import { loadCorpus, searchSite } from "./corpus.js";

const form = document.querySelector("[data-filter-form]");
if (form) {
  const search = form.querySelector(".search-box");
  const tagSearch = form.querySelector(".tag-search-box");
  const menu = form.querySelector(".filters-menu");
  const tagBar = form.querySelector("[data-tag-bar]");
  const list = document.querySelector("[data-entry-list]");
  const empty = document.querySelector("[data-no-results]");
  const count = form.querySelector("[data-result-count]");
  const pager = document.querySelector("[data-pager]");
  const pageSize = 10;
  let activeTag = "__all__";
  let cursor = null;
  let previousCursors = [];

  const escapeHtml = (value) => String(value ?? "").replace(
    /[&<>"']/g,
    (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character],
  );

  const entryHtml = (entry) => {
    const date = entry.date
      ? `<time class="entry-date" datetime="${escapeHtml(entry.date)}">${escapeHtml(entry.date)}</time>`
      : "";
    const tags = (entry.tags || []).map((tag) => (
      `<button type="button" class="tag" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`
    )).join("");
    if (entry.kind === "note") {
      return `<article class="note-item entry" id="${escapeHtml(entry.id)}">${date}`
        + `<div class="note-body">${entry.contentHtml || ""}</div>`
        + `<div class="entry-tags" aria-label="Tags">${tags}</div></article>`;
    }
    const title = entry.url
      ? `<a href="${escapeHtml(entry.url)}">${escapeHtml(entry.title)}</a>`
      : escapeHtml(entry.title);
    const summary = entry.summary ? `<p class="entry-abstract">${escapeHtml(entry.summary)}</p>` : "";
    return `<article class="entry">${date}<h2 class="entry-title" tabindex="-1">${title}</h2>`
      + `${summary}<div class="entry-tags" aria-label="Tags">${tags}</div></article>`;
  };

  const shouldShow = () => form.dataset.defaultShow === "true"
    || search.value.trim() !== "" || activeTag !== "__all__";

  const render = async () => {
    if (!shouldShow()) {
      list.innerHTML = "";
      empty.hidden = true;
      pager.hidden = true;
      count.textContent = "Search to show entries";
      return;
    }
    try {
      const result = searchSite(await loadCorpus(), {
        text: search.value,
        kind: form.dataset.kind,
        tags: activeTag === "__all__" ? [] : [activeTag],
        limit: pageSize,
        cursor,
      });
      list.innerHTML = result.items.map(entryHtml).join("");
      document.dispatchEvent(new CustomEvent("entries-rendered", { detail: { target: list } }));
      empty.hidden = result.total !== 0;
      count.textContent = result.total ? `${result.total} ${result.total === 1 ? "match" : "matches"}` : "0 matches";
      pager.hidden = !result.nextCursor && previousCursors.length === 0;
      pager.innerHTML = pager.hidden ? "" : `
        <button type="button" class="pager-btn" data-direction="previous"${previousCursors.length ? "" : " disabled"}>Previous</button>
        <button type="button" class="pager-btn" data-direction="next"${result.nextCursor ? "" : " disabled"}>Next</button>`;
      pager.dataset.nextCursor = result.nextCursor || "";
    } catch (error) {
      empty.hidden = false;
      empty.textContent = error.message;
      count.textContent = "Search unavailable";
      pager.hidden = true;
    }
  };

  const restart = () => { cursor = null; previousCursors = []; render(); };
  const selectTag = (tag) => {
    activeTag = tag;
    tagBar.querySelectorAll("button.tag").forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.tag === tag ? "true" : "false");
    });
    restart();
  };
  const filterTags = () => {
    const query = tagSearch.value.trim().toLowerCase();
    tagBar.querySelectorAll("button.tag[data-tag]").forEach((button) => {
      if (button.dataset.tag !== "__all__") {
        button.hidden = query ? !button.textContent.toLowerCase().includes(query)
          : button.classList.contains("tag-extra");
      }
    });
    const hint = tagBar.querySelector(".tag-more-hint");
    if (hint) hint.hidden = query !== "";
  };

  form.addEventListener("submit", (event) => { event.preventDefault(); restart(); });
  search.addEventListener("input", restart);
  tagSearch.addEventListener("input", filterTags);
  tagBar.addEventListener("click", (event) => {
    const button = event.target.closest("button.tag");
    if (!button) return;
    selectTag(button.dataset.tag);
    menu.open = false;
  });
  list.addEventListener("click", (event) => {
    const button = event.target.closest("button.tag[data-tag]");
    if (!button) return;
    selectTag(button.dataset.tag);
    search.focus();
    form.scrollIntoView({ block: "start" });
  });
  pager.addEventListener("click", (event) => {
    const button = event.target.closest("button.pager-btn");
    if (!button || button.disabled) return;
    if (button.dataset.direction === "next") {
      previousCursors.push(cursor);
      cursor = pager.dataset.nextCursor;
    } else {
      cursor = previousCursors.pop() || null;
    }
    render().then(() => list.scrollIntoView({ block: "start" }));
  });

  render();
  filterTags();
}
