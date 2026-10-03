// Per-page list filter: a text box plus tag facets (tags in one facet are
// OR'd, facets are AND'd), all searched with the shared corpus loader. The
// filter state lives in the URL (?q=…&subject=mathematics&tool=lean) so a
// filtered view can be shared. With no filter, a list the build rendered
// (the notes) is left as it is, so its anchors keep working.
import { getItem, loadCorpus, searchSite } from "./corpus.js";
import { noteCopyControlHtml } from "./copy-markdown.js";
import { fadeIn } from "./fade.js";
/** @import { Corpus, CorpusRecord } from "./corpus.js" */

/**
 * The filters as they stand, announced in a filters-changed event and kept on the form as filterState.
 * @typedef {{ text: string, tagGroups: string[][], kind: string | undefined, filtered: boolean }} FilterState
 */

const form = /** @type {(HTMLFormElement & { filterState?: FilterState }) | null} */ (
  document.querySelector("[data-filter-form]"));
if (form) {
  // scripts/filter_lists.py renders all of these with the form; only the tag search is optional.
  const search = /** @type {HTMLInputElement} */ (form.querySelector(".search-box"));
  const tagSearch = /** @type {HTMLInputElement | null} */ (form.querySelector(".tag-search-box"));
  const menuButton = /** @type {HTMLButtonElement} */ (form.querySelector("[data-filters-toggle]"));
  const tagBar = /** @type {HTMLElement} */ (form.querySelector("[data-tag-bar]"));
  const activeCount = /** @type {HTMLElement} */ (form.querySelector("[data-active-count]"));
  const activeBar = /** @type {HTMLElement} */ (document.querySelector("[data-active-filters]"));
  const activeList = /** @type {HTMLElement} */ (document.querySelector("[data-active-filter-list]"));
  const clearButton = /** @type {HTMLButtonElement} */ (document.querySelector("[data-clear-filters]"));
  const list = /** @type {HTMLElement} */ (document.querySelector("[data-entry-list]"));
  const empty = /** @type {HTMLElement} */ (document.querySelector("[data-no-results]"));
  const count = /** @type {HTMLElement} */ (form.querySelector("[data-result-count]"));
  const pager = /** @type {HTMLElement} */ (document.querySelector("[data-pager]"));
  const pageSize = 10;
  const noun = form.dataset.noun || "entries";
  const headingTag = form.dataset.entryHeading === "h3" ? "h3" : "h2";
  const initialHtml = list.innerHTML.trim();
  /** The facet buttons; each carries data-tag and data-facet. */
  const facetButtons = () => /** @type {NodeListOf<HTMLButtonElement & { dataset: { tag: string, facet: string } }>} */ (
    tagBar.querySelectorAll("button.tag[data-facet]"));
  const facetOf = new Map([...facetButtons()].map((button) => [button.dataset.tag, button.dataset.facet]));
  const facetOrder = [...new Set(facetOf.values())];
  /** @type {Map<string, Set<string>>} */
  const selected = new Map(facetOrder.map((facet) => [facet, new Set()]));
  // Every facet a tag button names is in `selected`.
  const selectedIn = (/** @type {string} */ facet) => /** @type {Set<string>} */ (selected.get(facet));
  /** @type {string | null} */
  let cursor = null;
  /** @type {(string | null)[]} */
  let previousCursors = [];
  let renderId = 0;
  // Corpus URLs are relative to the site root; pages below it (visuals/index.html)
  // reach that root through the same prefix as their corpus link.
  const corpusHref = /** @type {HTMLMetaElement | null} */ (document.querySelector('meta[name="site-corpus"]'))?.content || "";
  const rootPrefix = corpusHref.slice(0, corpusHref.lastIndexOf("/") + 1);
  /** @param {string} url */
  const siteHref = (url) => (/^[a-z][a-z0-9+.-]*:|^[/#]/i.test(url) ? url : `${rootPrefix}${url}`);

  /** @param {unknown} value */
  const escapeHtml = (value) => String(value ?? "").replace(
    /[&<>"']/g,
    (character) => /** @type {Record<string, string>} */ ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character],
  );

  /** @type {Record<string, string>} */
  const linkLabels = {
    resolves: "Resolves", resolvedBy: "Resolved by", extends: "Extends", extendedBy: "Extended by",
    uses: "Uses", usedBy: "Used by", related: "Related",
  };
  /** @type {Record<string, string>} */
  const kindLabels = {
    note: "Note", blog: "Post", visualization: "Visual", podcast: "Episode", video: "Video",
    paper: "Paper link", resource: "Resource", about: "Page", profile: "Page", calibration: "Calibration",
  };
  /** @param {CorpusRecord} entry @param {Corpus} corpus */
  const relatedHtml = (entry, corpus) => {
    const items = (entry.links || []).flatMap((link) => {
      let target;
      try { target = getItem(corpus, link.target); } catch { return []; }
      const label = target.kind === "note"
        ? `Note, ${target.date} — ${String(target.summary || "").split(/(?<=[.!?])\s/)[0]}`
        : `${kindLabels[target.kind] || target.kind} — ${target.title}`;
      // scripts/published_corpus.py gives every record a url.
      return [`<li><span class="related-rel">${escapeHtml(linkLabels[link.rel] || link.rel)}</span> `
        + `<a href="${escapeHtml(siteHref(/** @type {string} */ (target.url)))}">${escapeHtml(label)}</a></li>`];
    });
    return items.length
      ? `<ul class="related-list related-compact" aria-label="Related items">${items.join("")}</ul>`
      : "";
  };

  /** @param {CorpusRecord} entry @param {Corpus} corpus */
  const entryHtml = (entry, corpus) => {
    // Visuals are dated by when their data was fetched.
    const dateValue = entry.date || entry.fetched;
    const time = dateValue
      ? `${entry.date ? "" : "Fetched "}<time datetime="${escapeHtml(dateValue)}">${escapeHtml(dateValue)}</time>`
      : "";
    const reading = entry.readingMinutes
      ? `<span class="reading-time">${Number(entry.readingMinutes)} min read</span>`
      : "";
    const date = time || reading
      ? `<div class="entry-date">${[time, reading].filter(Boolean).join(" &middot; ")}</div>`
      : "";
    const tags = (entry.tags || []).map((tag) => (
      `<button type="button" class="tag" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`
    )).join("");
    const related = relatedHtml(entry, corpus);
    if (entry.kind === "note") {
      return `<article class="note-item entry" id="${escapeHtml(entry.id)}" data-copy-scope>${date}`
        + `<div class="note-body">${entry.contentHtml || ""}</div>`
        + `<div class="entry-tags" aria-label="Tags">${tags}</div>${related}`
        + `${noteCopyControlHtml(entry.id, entry.date, entry.summary || "")}</article>`;
    }
    const title = entry.url
      ? `<a href="${escapeHtml(siteHref(entry.url))}">${escapeHtml(entry.title)}</a>`
      : escapeHtml(entry.title);
    const summary = entry.summary ? `<p class="entry-abstract">${escapeHtml(entry.summary)}</p>` : "";
    return `<article class="entry">${date}<${headingTag} class="entry-title" tabindex="-1">${title}</${headingTag}>`
      + `${summary}<div class="entry-tags" aria-label="Tags">${tags}</div>${related}</article>`;
  };

  const tagGroups = () => facetOrder.map((facet) => [...selectedIn(facet)]).filter((group) => group.length);
  const activeTags = () => facetOrder.flatMap((facet) => [...selectedIn(facet)].map((tag) => [facet, tag]));
  const isFiltered = () => search.value.trim() !== "" || activeTags().length > 0;
  const shouldShow = () => form.dataset.defaultShow === "true" || isFiltered();

  const writeUrl = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("q");
    facetOrder.forEach((facet) => params.delete(facet));
    if (search.value.trim()) params.set("q", search.value.trim());
    activeTags().forEach(([facet, tag]) => params.append(facet, tag));
    const query = params.toString();
    history.replaceState(history.state, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  };

  const readUrl = () => {
    const params = new URLSearchParams(window.location.search);
    search.value = params.get("q") || "";
    facetOrder.forEach((facet) => {
      selectedIn(facet).clear();
      params.getAll(facet).forEach((tag) => { if (facetOf.get(tag) === facet) selectedIn(facet).add(tag); });
    });
  };

  const syncControls = () => {
    facetButtons().forEach((button) => {
      const pressed = selectedIn(button.dataset.facet).has(button.dataset.tag);
      button.setAttribute("aria-pressed", String(pressed));
      // A selected tag stays visible even when its facet is collapsed.
      if (pressed) button.hidden = false;
    });
    const active = activeTags();
    activeCount.hidden = active.length === 0;
    activeCount.textContent = active.length ? ` (${active.length})` : "";
    activeList.innerHTML = active.map(([facet, tag]) => (
      `<li><button type="button" class="active-filter" data-facet="${escapeHtml(facet)}" data-tag="${escapeHtml(tag)}" `
      + `aria-label="Remove filter ${escapeHtml(tag)}">${escapeHtml(tag)}<span aria-hidden="true">×</span></button></li>`
    )).join("");
    const wasHidden = activeBar.hidden;
    activeBar.hidden = !isFiltered();
    if (wasHidden && !activeBar.hidden) fadeIn(activeBar);
  };

  /** @param {string} text */
  const setCount = (text) => {
    if (count.textContent === text) return;
    count.textContent = text;
    fadeIn(count);
  };

  // Other scripts (the notes timeline) follow the filters; the latest state is
  // also kept on the form for scripts that load after the first change.
  const announce = () => {
    form.filterState = {
      text: search.value.trim(), tagGroups: tagGroups(), kind: form.dataset.kind, filtered: isFiltered(),
    };
    document.dispatchEvent(new CustomEvent("filters-changed", { detail: form.filterState }));
  };

  const render = async () => {
    const current = ++renderId;
    syncControls();
    announce();
    if (!shouldShow()) {
      list.innerHTML = "";
      empty.hidden = true;
      pager.hidden = true;
      setCount(`${form.dataset.total} ${noun} · type or pick a filter to show them`);
      return;
    }
    if (!isFiltered() && initialHtml) {
      if (list.innerHTML.trim() !== initialHtml) list.innerHTML = initialHtml;
      empty.hidden = true;
      pager.hidden = true;
      setCount(`${form.dataset.total} ${noun}`);
      return;
    }
    try {
      const corpus = await loadCorpus();
      if (current !== renderId) return;
      const result = searchSite(corpus, {
        text: search.value,
        kind: form.dataset.kind,
        tagGroups: tagGroups(),
        limit: pageSize,
        cursor,
      });
      list.innerHTML = result.items.map((entry) => entryHtml(entry, corpus)).join("");
      document.dispatchEvent(new CustomEvent("entries-rendered", { detail: { target: list } }));
      empty.hidden = result.total !== 0;
      setCount(isFiltered()
        ? `${result.total} ${result.total === 1 ? "match" : "matches"}`
        : `${result.total} ${noun}`);
      pager.hidden = !result.nextCursor && previousCursors.length === 0;
      pager.innerHTML = pager.hidden ? "" : `
        <button type="button" class="pager-btn" data-direction="previous"${previousCursors.length ? "" : " disabled"}>Previous</button>
        <button type="button" class="pager-btn" data-direction="next"${result.nextCursor ? "" : " disabled"}>Next</button>`;
      pager.dataset.nextCursor = result.nextCursor || "";
    } catch (error) {
      if (current !== renderId) return;
      empty.hidden = false;
      empty.textContent = /** @type {Error} */ (error).message;
      setCount("Filtering unavailable");
      pager.hidden = true;
    }
  };

  /** @param {boolean} open */
  const setMenu = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    tagBar.hidden = !open;
    if (open) fadeIn(tagBar);
  };

  const restart = () => { cursor = null; previousCursors = []; writeUrl(); render(); };
  /** @param {string} tag @param {string | undefined} facet */
  const toggleTag = (tag, facet = facetOf.get(tag)) => {
    if (!facet) return;
    const tags = selectedIn(facet);
    if (tags.has(tag)) tags.delete(tag);
    else tags.add(tag);
    restart();
  };
  const clearAll = () => {
    search.value = "";
    selected.forEach((tags) => tags.clear());
    restart();
  };

  const filterTags = () => {
    const query = (tagSearch?.value || "").trim().toLowerCase();
    /** @type {NodeListOf<HTMLFieldSetElement>} */ (tagBar.querySelectorAll(".facet")).forEach((fieldset) => {
      const expanded = fieldset.querySelector(".facet-more")?.getAttribute("aria-expanded") === "true";
      let visible = 0;
      /** @type {NodeListOf<HTMLButtonElement & { dataset: { tag: string } }>} */ (
        fieldset.querySelectorAll("button.tag[data-facet]")).forEach((button) => {
        const pressed = button.getAttribute("aria-pressed") === "true";
        button.hidden = query
          ? !button.dataset.tag.toLowerCase().includes(query)
          : !(pressed || expanded || !button.classList.contains("tag-extra"));
        if (!button.hidden) visible += 1;
      });
      fieldset.hidden = query !== "" && visible === 0;
      const more = /** @type {HTMLButtonElement | null} */ (fieldset.querySelector(".facet-more"));
      if (more) more.hidden = query !== "";
    });
  };

  form.addEventListener("submit", (event) => { event.preventDefault(); restart(); });
  menuButton.addEventListener("click", () => setMenu(Boolean(tagBar.hidden)));
  search.addEventListener("input", restart);
  tagSearch?.addEventListener("input", filterTags);
  tagBar.addEventListener("click", (event) => {
    const target = /** @type {Element} */ (event.target);
    const more = /** @type {HTMLButtonElement | null} */ (target.closest(".facet-more"));
    if (more) {
      const expanded = more.getAttribute("aria-expanded") !== "true";
      more.setAttribute("aria-expanded", String(expanded));
      more.textContent = expanded ? "Show fewer" : /** @type {string} */ (more.dataset.showLabel);
      filterTags();
      return;
    }
    const button = /** @type {HTMLButtonElement | null} */ (target.closest("button.tag[data-facet]"));
    if (button) toggleTag(/** @type {string} */ (button.dataset.tag), button.dataset.facet);
  });
  activeList.addEventListener("click", (event) => {
    const button = /** @type {HTMLButtonElement | null} */ (/** @type {Element} */ (event.target).closest(".active-filter"));
    if (!button) return;
    toggleTag(/** @type {string} */ (button.dataset.tag), button.dataset.facet);
    (/** @type {HTMLButtonElement | null} */ (activeList.querySelector(".active-filter")) || search).focus();
  });
  clearButton.addEventListener("click", () => { clearAll(); search.focus(); });
  document.addEventListener("filters-clear", clearAll);
  // Tag chips on entries (and on the notes timeline) add that tag as a filter.
  document.querySelector("main")?.addEventListener("click", (event) => {
    const button = /** @type {HTMLButtonElement | null} */ (/** @type {Element} */ (event.target).closest("button.tag[data-tag]"));
    if (!button || tagBar.contains(button)) return;
    const tag = /** @type {string} */ (button.dataset.tag);
    const facet = facetOf.get(tag);
    if (!facet) return;
    if (!selectedIn(facet).has(tag)) toggleTag(tag, facet);
    form.scrollIntoView({ block: "start" });
  });
  pager.addEventListener("click", (event) => {
    const button = /** @type {HTMLButtonElement | null} */ (/** @type {Element} */ (event.target).closest("button.pager-btn"));
    if (!button || button.disabled) return;
    if (button.dataset.direction === "next") {
      previousCursors.push(cursor);
      cursor = /** @type {string} */ (pager.dataset.nextCursor);
    } else {
      cursor = previousCursors.pop() || null;
    }
    render().then(() => list.scrollIntoView({ block: "start" }));
  });

  readUrl();
  render();
  filterTags();
}
