(() => {
  const form = document.querySelector("[data-filter-form]");
  if (!form) return;

  const search = form.querySelector(".search-box");
  const tagSearch = form.querySelector(".tag-search-box");
  const menu = form.querySelector(".filters-menu");
  const tagBar = form.querySelector("[data-tag-bar]");
  const list = document.querySelector("[data-entry-list]");
  const empty = document.querySelector("[data-no-results]");
  const count = form.querySelector("[data-result-count]");
  const pager = document.querySelector("[data-pager]");
  const entries = JSON.parse(document.querySelector("[data-entry-data]").textContent)
    .map((entry) => ({
      ...entry,
      search: [entry.title, entry.note, entry.category, ...entry.tags, entry.date]
        .join(" ").toLowerCase(),
    }));

  const pageSize = 10;
  let activeTag = "__all__";
  let page = 1;

  const escapeHtml = (value) => String(value ?? "").replace(
    /[&<>"']/g,
    (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character],
  );

  const entryHtml = (entry) => {
    const date = entry.date
      ? `<time class="entry-date" datetime="${escapeHtml(entry.date)}">${escapeHtml(entry.date)}</time>`
      : "";
    const title = entry.url
      ? `<a href="${escapeHtml(entry.url)}">${escapeHtml(entry.title)}</a>`
      : escapeHtml(entry.title);
    const note = entry.note ? `<p class="entry-abstract">${escapeHtml(entry.note)}</p>` : "";
    const tags = entry.tags.map((tag) => (
      `<button type="button" class="tag" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`
    )).join("");

    return `<article class="entry">${date}<h2 class="entry-title" tabindex="-1">${title}</h2>${note}`
      + `<div class="entry-tags" aria-label="Tags">${tags}</div></article>`;
  };

  const matchingEntries = () => {
    const query = search.value.trim().toLowerCase();
    return entries.filter((entry) => (
      (activeTag === "__all__" || entry.tags.includes(activeTag))
      && (!query || entry.search.includes(query))
    ));
  };

  const render = () => {
    const showEntries = form.dataset.defaultShow === "true"
      || search.value.trim() !== ""
      || activeTag !== "__all__";
    const matches = matchingEntries();
    const pageCount = Math.max(1, Math.ceil(matches.length / pageSize));
    page = Math.min(page, pageCount);
    const start = (page - 1) * pageSize;

    list.innerHTML = showEntries
      ? matches.slice(start, start + pageSize).map(entryHtml).join("")
      : "";
    document.dispatchEvent(new CustomEvent("entries-rendered", { detail: { target: list } }));
    empty.hidden = !(showEntries && matches.length === 0);

    if (!showEntries) count.textContent = "Search to show entries";
    else if (!matches.length) count.textContent = "0 matches";
    else count.textContent = `${start + 1}-${Math.min(start + pageSize, matches.length)} / ${matches.length} matches`;

    pager.hidden = !showEntries || pageCount <= 1;
    pager.innerHTML = pager.hidden ? "" : `
      <button type="button" class="pager-btn" data-direction="previous"${page <= 1 ? " disabled" : ""}>Previous</button>
      <span class="pager-label">Page ${page} / ${pageCount}</span>
      <button type="button" class="pager-btn" data-direction="next"${page >= pageCount ? " disabled" : ""}>Next</button>`;
  };

  const searchEntries = () => {
    page = 1;
    render();
  };

  const selectTag = (tag) => {
    activeTag = tag;
    tagBar.querySelectorAll("button.tag").forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.tag === tag ? "true" : "false");
    });
    searchEntries();
  };

  const filterTags = () => {
    const query = tagSearch.value.trim().toLowerCase();
    tagBar.querySelectorAll("button.tag[data-tag]").forEach((button) => {
      if (button.dataset.tag !== "__all__") {
        button.hidden = query
          ? !button.textContent.toLowerCase().includes(query)
          : button.classList.contains("tag-extra");
      }
    });
    const hint = tagBar.querySelector(".tag-more-hint");
    if (hint) hint.hidden = query !== "";
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    searchEntries();
  });
  tagSearch.addEventListener("input", filterTags);
  tagBar.addEventListener("click", (event) => {
    const button = event.target.closest("button.tag");
    if (!button) return;
    selectTag(button.dataset.tag);
    menu.open = false;
    menu.firstElementChild.focus();
  });
  list.addEventListener("click", (event) => {
    const button = event.target.closest("button.tag[data-tag]");
    if (!button) return;
    selectTag(button.dataset.tag);
    search.focus();
    window.scrollTo({ top: 0 });
  });
  pager.addEventListener("click", (event) => {
    const button = event.target.closest("button.pager-btn");
    if (!button || button.disabled) return;
    page += button.dataset.direction === "next" ? 1 : -1;
    render();
    list.querySelector(".entry-title").focus({ preventScroll: true });
    list.scrollIntoView({ block: "start" });
  });
  document.addEventListener("click", (event) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      menu.firstElementChild.focus();
    }
  });

  searchEntries();
  filterTags();
})();
