(() => {
  const form = document.querySelector("[data-notes-filter-form]");
  if (!form) return;

  const search = form.querySelector(".search-box");
  const tagSearch = form.querySelector(".tag-search-box");
  const menu = form.querySelector(".filters-menu");
  const tagBar = form.querySelector("[data-tag-bar]");
  const entries = [...document.querySelectorAll("[data-note-entry]")];
  const days = [...document.querySelectorAll("[data-note-day]")];
  const empty = document.querySelector("[data-no-results]");
  const count = form.querySelector("[data-result-count]");
  let activeTag = "__all__";

  const render = () => {
    const query = search.value.trim().toLowerCase();
    let matches = 0;

    entries.forEach((entry) => {
      const tags = entry.dataset.tags.split(",").filter(Boolean);
      const visible = (activeTag === "__all__" || tags.includes(activeTag))
        && (!query || entry.dataset.search.includes(query));
      entry.hidden = !visible;
      if (visible) matches += 1;
    });
    days.forEach((day) => {
      day.hidden = !day.querySelector("[data-note-entry]:not([hidden])");
    });

    empty.hidden = matches !== 0;
    count.textContent = `${matches} ${matches === 1 ? "note" : "notes"}`;
  };

  const selectTag = (tag) => {
    activeTag = tag;
    tagBar.querySelectorAll("button.tag").forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.tag === tag ? "true" : "false");
    });
    render();
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
    render();
  });
  search.addEventListener("input", render);
  tagSearch.addEventListener("input", filterTags);
  tagBar.addEventListener("click", (event) => {
    const button = event.target.closest("button.tag");
    if (!button) return;
    selectTag(button.dataset.tag);
    menu.open = false;
  });
  document.querySelector(".notes-list").addEventListener("click", (event) => {
    const button = event.target.closest("button.tag[data-tag]");
    if (!button) return;
    selectTag(button.dataset.tag);
    search.focus();
    form.scrollIntoView({ block: "start" });
  });

  render();
  filterTags();
})();
