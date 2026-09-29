// Global site search in the header of every page. It searches the whole
// Published Corpus with the same loader and ranking as the per-page filters
// (corpus.js), fetching corpus.json only on first focus or keystroke.
import { loadCorpus, searchSite } from "./corpus.js";
import { cancelFade, fadeIn, fadeOut } from "./fade.js";

const form = document.querySelector("[data-site-search]");
if (form) {
  const input = form.querySelector(".site-search-input");
  const panel = form.querySelector("[data-site-search-panel]");
  const list = form.querySelector(".site-search-results");
  const status = form.querySelector("[data-site-search-status]");
  const live = form.querySelector("[data-site-search-live]");
  const corpusUrl = new URL(
    document.querySelector('meta[name="site-corpus"]')?.content || "corpus.json",
    document.baseURI,
  );
  const limit = 8;
  const kindLabels = {
    profile: "Profile", about: "About", resource: "Resource", paper: "Paper",
    note: "Note", blog: "Blog", visualization: "Visual", podcast: "Podcast", video: "Video",
  };
  let active = -1;
  let requestId = 0;
  let debounce;

  const escapeHtml = (value) => String(value ?? "").replace(
    /[&<>"']/g,
    (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character],
  );
  const shorten = (value, length) => {
    const text = String(value ?? "").replace(/\s+/g, " ").trim();
    return text.length > length ? `${text.slice(0, length - 1).trimEnd()}…` : text;
  };
  // Corpus URLs are relative to corpus.json (the site root), not to this page.
  const resolve = (url) => new URL(url, corpusUrl).href;
  const options = () => [...list.querySelectorAll('[role="option"]')];

  const setActive = (index) => {
    const items = options();
    active = items.length ? (index + items.length) % items.length : -1;
    items.forEach((item, position) => item.setAttribute("aria-selected", String(position === active)));
    if (active >= 0) {
      input.setAttribute("aria-activedescendant", items[active].id);
      items[active].scrollIntoView({ block: "nearest" });
    } else {
      input.removeAttribute("aria-activedescendant");
    }
  };

  let closing = 0;
  const open = () => {
    if (input.getAttribute("aria-expanded") === "true") return;
    closing += 1;
    cancelFade(panel);
    panel.inert = false;
    panel.hidden = false;
    input.setAttribute("aria-expanded", "true");
  };
  const close = () => {
    if (panel.hidden || input.getAttribute("aria-expanded") === "false") return;
    setActive(-1);
    input.setAttribute("aria-expanded", "false");
    // Inert while fading so the fading results cannot be focused or read.
    panel.inert = true;
    const current = ++closing;
    fadeOut(panel).then((finished) => {
      if (!finished || current !== closing) return;
      panel.hidden = true;
      panel.inert = false;
      cancelFade(panel);
    });
  };

  const resultHtml = (record, index) => {
    const summary = shorten(record.summary || record.content, 140);
    const title = shorten(record.title, 100) || "Untitled";
    const meta = [kindLabels[record.kind] || record.kind, record.date,
      record.readingMinutes ? `${Number(record.readingMinutes)} min read` : ""]
      .filter(Boolean).map(escapeHtml).join(" &middot; ");
    const showSummary = summary && !summary.startsWith(title.replace(/…$/, ""));
    return `<li role="option" id="site-search-option-${index}" aria-selected="false">`
      + `<a class="site-search-result" href="${escapeHtml(resolve(record.url))}" tabindex="-1">`
      + `<span class="site-search-meta">${meta}</span>`
      + `<span class="site-search-title">${escapeHtml(title)}</span>`
      + (showSummary ? `<span class="site-search-summary">${escapeHtml(summary)}</span>` : "")
      + "</a></li>";
  };

  const render = async () => {
    const text = input.value.trim();
    const current = ++requestId;
    if (!text) {
      list.innerHTML = "";
      live.textContent = "";
      close();
      return;
    }
    let result;
    try {
      const corpus = await loadCorpus();
      if (current !== requestId) return;
      result = searchSite(corpus, { text, limit });
    } catch (error) {
      if (current !== requestId) return;
      list.innerHTML = "";
      status.textContent = "Search is unavailable right now.";
      live.textContent = status.textContent;
      open();
      return;
    }
    list.innerHTML = result.items.filter((record) => record.url).map(resultHtml).join("");
    const shown = options().length;
    status.textContent = result.total
      ? `${result.total} ${result.total === 1 ? "result" : "results"}`
        + (result.total > shown ? `, showing the top ${shown}` : "")
      : `No results for “${text}”`;
    live.textContent = status.textContent;
    fadeIn(status);
    document.dispatchEvent(new CustomEvent("site-search-rendered", { detail: { target: list } }));
    open();
    setActive(-1);
  };

  const go = (index) => {
    const link = options()[index]?.querySelector("a");
    if (link) window.location.assign(link.href);
  };

  // Lazy-load: start fetching the corpus the first time the box is used.
  input.addEventListener("focus", () => { loadCorpus().catch(() => {}); }, { once: true });
  input.addEventListener("focus", () => { if (input.value.trim() && list.children.length) open(); });
  input.addEventListener("input", () => {
    clearTimeout(debounce);
    debounce = setTimeout(render, 120);
  });
  input.addEventListener("keydown", (event) => {
    const count = options().length;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      if (!count) return;
      event.preventDefault();
      open();
      setActive(event.key === "ArrowDown" ? active + 1 : (active < 0 ? count - 1 : active - 1));
    } else if (event.key === "Escape") {
      if (!panel.hidden) close();
      else input.value = "";
      event.preventDefault();
    } else if (event.key === "Enter") {
      event.preventDefault();
      clearTimeout(debounce);
      if (active >= 0) go(active);
      else render().then(() => { if (options().length) go(0); });
    }
  });
  form.addEventListener("submit", (event) => event.preventDefault());
  list.addEventListener("mousemove", (event) => {
    const option = event.target.closest('[role="option"]');
    if (option) setActive(options().indexOf(option));
  });
  // Keep focus in the input when choosing with the mouse.
  list.addEventListener("mousedown", (event) => event.preventDefault());
  document.addEventListener("pointerdown", (event) => {
    if (!form.contains(event.target)) close();
  });
  form.addEventListener("focusout", (event) => {
    if (!form.contains(event.relatedTarget)) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
    const target = event.target;
    if (target.closest?.("input, textarea, select, [contenteditable]")) return;
    event.preventDefault();
    input.focus();
    input.select();
  });
}
