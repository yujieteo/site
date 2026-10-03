// Global site search: a Search button in the header of every page opens a
// modal <dialog> that searches the whole Published Corpus with the same
// loader and ranking as the per-page filters (corpus.js). The corpus is
// fetched on first open. Cmd+K (Mac) / Ctrl+K elsewhere, or "/" outside a
// text field, toggles it on devices with a fine pointer; touch devices get
// only the button, and the key hints are hidden there by CSS.
import { loadCorpus, searchSite } from "./corpus.js";
import { cancelFade, fadeIn, fadeOut } from "./fade.js";
/** @import { CorpusRecord, SearchResult } from "./corpus.js" */

const root = document.querySelector("[data-site-search]");
const dialog = root?.querySelector("dialog");
if (root && dialog && typeof dialog.showModal === "function") {
  // templates/base.html renders all of these with the dialog.
  const trigger = /** @type {HTMLButtonElement} */ (root.querySelector("[data-site-search-open]"));
  const shortcutLabel = root.querySelector("[data-site-search-shortcut]");
  const form = /** @type {HTMLFormElement} */ (dialog.querySelector("[data-site-search-form]"));
  const input = /** @type {HTMLInputElement} */ (dialog.querySelector(".site-search-input"));
  const closeButton = /** @type {HTMLButtonElement} */ (dialog.querySelector("[data-site-search-close]"));
  const list = /** @type {HTMLElement} */ (dialog.querySelector(".site-search-results"));
  const status = /** @type {HTMLElement} */ (dialog.querySelector("[data-site-search-status]"));
  const emptyMessage = /** @type {string} */ (status.textContent);
  const corpusUrl = new URL(
    /** @type {HTMLMetaElement | null} */ (document.querySelector('meta[name="site-corpus"]'))?.content || "corpus.json",
    document.baseURI,
  );
  // User-Agent Client Hints are not in every browser, nor yet in TypeScript's DOM types.
  const { userAgentData } = /** @type {Navigator & { userAgentData?: { platform: string } }} */ (navigator);
  const platform = userAgentData?.platform || navigator.platform || "";
  const isMac = /mac|iphone|ipad|ipod/i.test(platform);
  const coarsePointer = window.matchMedia("(pointer: coarse)");
  const limit = 20;
  /** @type {Record<string, string>} */
  const kindLabels = {
    profile: "Profile", about: "About", resource: "Resource", paper: "Paper",
    note: "Note", blog: "Blog", visualization: "Visual", podcast: "Podcast", video: "Video",
    calibration: "Calibration",
  };
  let active = -1;
  let requestId = 0;
  let closing = 0;
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let debounce;
  /** @type {HTMLElement | null} */
  let returnFocus = null;

  if (shortcutLabel) shortcutLabel.textContent = isMac ? "⌘K" : "Ctrl K";
  if (!coarsePointer.matches) trigger.setAttribute("aria-keyshortcuts", isMac ? "Meta+K" : "Control+K");

  /** @param {unknown} value */
  const escapeHtml = (value) => String(value ?? "").replace(
    /[&<>"']/g,
    (character) => /** @type {Record<string, string>} */ ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character],
  );
  /** @param {unknown} value @param {number} length */
  const shorten = (value, length) => {
    const text = String(value ?? "").replace(/\s+/g, " ").trim();
    return text.length > length ? `${text.slice(0, length - 1).trimEnd()}…` : text;
  };
  // Corpus URLs are relative to corpus.json (the site root), not to this page.
  /** @param {string} url */
  const resolve = (url) => new URL(url, corpusUrl).href;
  const options = () => [...list.querySelectorAll('[role="option"]')];

  /** @param {number} index */
  const setActive = (index) => {
    const items = options();
    active = items.length && index >= 0 ? Math.min(index, items.length - 1) : -1;
    items.forEach((item, position) => item.setAttribute("aria-selected", String(position === active)));
    if (active >= 0) {
      input.setAttribute("aria-activedescendant", items[active].id);
      items[active].scrollIntoView({ block: "nearest" });
    } else {
      input.removeAttribute("aria-activedescendant");
    }
  };

  /** @param {CorpusRecord} record @param {number} index */
  const resultHtml = (record, index) => {
    const title = shorten(record.title, 100) || "Untitled";
    const summary = shorten(record.summary || record.content, 150);
    const meta = [record.date, record.readingMinutes ? `${Number(record.readingMinutes)} min read` : ""]
      .filter(Boolean).map(escapeHtml).join(" &middot; ");
    const showSummary = summary && !summary.startsWith(title.replace(/…$/, ""));
    return `<li role="option" id="site-search-option-${index}" aria-selected="false">`
      + `<a class="site-search-result" href="${escapeHtml(resolve(/** @type {string} */ (record.url)))}" tabindex="-1">`
      + `<span class="site-search-kind" data-kind="${escapeHtml(record.kind)}">`
      + `${escapeHtml(kindLabels[record.kind] || record.kind)}</span>`
      + `<span class="site-search-text"><span class="site-search-title">${escapeHtml(title)}</span>`
      + (showSummary ? `<span class="site-search-summary">${escapeHtml(summary)}</span>` : "")
      + (meta ? `<span class="site-search-meta">${meta}</span>` : "")
      + "</span></a></li>";
  };

  /** @param {string} text */
  const setStatus = (text) => {
    if (status.textContent === text) return;
    status.textContent = text;
    fadeIn(status);
  };

  const render = async () => {
    const text = input.value.trim();
    const current = ++requestId;
    if (!text) {
      list.innerHTML = "";
      input.setAttribute("aria-expanded", "false");
      setActive(-1);
      setStatus(emptyMessage);
      return;
    }
    /** @type {SearchResult} */
    let result;
    try {
      const corpus = await loadCorpus();
      if (current !== requestId) return;
      result = searchSite(corpus, { text, limit });
    } catch {
      if (current !== requestId) return;
      list.innerHTML = "";
      setActive(-1);
      setStatus("Search is unavailable right now. Please try again.");
      return;
    }
    list.innerHTML = result.items.filter((record) => record.url).map(resultHtml).join("");
    const shown = options().length;
    input.setAttribute("aria-expanded", String(shown > 0));
    setStatus(result.total
      ? `${result.total} ${result.total === 1 ? "result" : "results"}`
        + (result.total > shown ? `, showing the top ${shown}` : "")
      : `No results for “${text}”. Try fewer or different words.`);
    setActive(shown ? 0 : -1);
  };

  const open = () => {
    closing += 1;
    cancelFade(dialog);
    dialog.inert = false;
    if (!dialog.open) {
      returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : trigger;
      dialog.showModal();
      loadCorpus().catch(() => {});
    }
    input.focus();
    input.select();
  };

  const close = () => {
    if (!dialog.open || dialog.inert) return;
    // Inert while fading so nothing in the fading popup can be used.
    dialog.inert = true;
    const current = ++closing;
    Promise.all([
      fadeOut(dialog),
      fadeOut(dialog, { pseudoElement: "::backdrop" }),
    ]).then((finished) => {
      if (current !== closing || !finished.every(Boolean)) return;
      dialog.close();
    });
  };

  dialog.addEventListener("close", () => {
    closing += 1;
    dialog.inert = false;
    cancelFade(dialog);
    (returnFocus && returnFocus.isConnected ? returnFocus : trigger).focus();
    returnFocus = null;
  });

  /** @param {number} index */
  const go = (index) => {
    const link = options()[index]?.querySelector("a");
    if (link) window.location.assign(link.href);
  };

  trigger.addEventListener("click", open);
  closeButton.addEventListener("click", close);
  // Escape fades the popup out instead of closing it abruptly.
  dialog.addEventListener("cancel", (event) => { event.preventDefault(); close(); });
  // A click on the backdrop lands on the dialog itself, outside its box.
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    const inside = event.clientX >= box.left && event.clientX <= box.right
      && event.clientY >= box.top && event.clientY <= box.bottom;
    if (!inside) close();
  });
  form.addEventListener("submit", (event) => event.preventDefault());
  input.addEventListener("input", () => {
    clearTimeout(debounce);
    debounce = setTimeout(render, 100);
  });
  input.addEventListener("keydown", (event) => {
    const count = options().length;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!count) return;
      const step = event.key === "ArrowDown" ? 1 : -1;
      setActive(active < 0 ? (step > 0 ? 0 : count - 1) : (active + step + count) % count);
    } else if ((event.key === "Home" || event.key === "End") && event.ctrlKey && count) {
      event.preventDefault();
      setActive(event.key === "Home" ? 0 : count - 1);
    } else if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "Enter" && !event.isComposing) {
      event.preventDefault();
      clearTimeout(debounce);
      if (active >= 0) go(active);
      else render().then(() => { if (options().length) go(0); });
    }
  });
  list.addEventListener("mousemove", (event) => {
    const option = /** @type {Element} */ (event.target).closest('[role="option"]');
    if (option) {
      const index = options().indexOf(option);
      if (index !== active) setActive(index);
    }
  });
  // Keep focus in the input when choosing with the mouse.
  list.addEventListener("mousedown", (event) => event.preventDefault());

  /** @param {EventTarget | null} element */
  const isTextField = (element) => element instanceof HTMLElement && (
    element.isContentEditable || element.matches("textarea, select, input:not([type=button], "
      + "[type=checkbox], [type=radio], [type=submit], [type=reset], [type=range], [type=color])"));

  // Keyboard shortcuts only where there is a keyboard-first pointer.
  if (!coarsePointer.matches) {
    document.addEventListener("keydown", (event) => {
      const modifier = isMac ? event.metaKey && !event.ctrlKey : event.ctrlKey && !event.metaKey;
      if (modifier && !event.altKey && !event.shiftKey && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (dialog.open && !dialog.inert) close();
        else open();
      } else if (event.key === "/" && !event.metaKey && !event.ctrlKey && !event.altKey
          && !dialog.open && !isTextField(event.target)) {
        event.preventDefault();
        open();
      }
    });
  }
}
