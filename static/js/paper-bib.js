// BibTeX export on the Paper Links page. Each link the filter renders gets a
// Cite checkbox; the selection survives filtering and paging. The panel the
// build renders (scripts/pages.py) copies or downloads a .bib of the selected
// links, or of every link matching the current filters, built in the browser
// from the Published Corpus by static/js/bibtex.js, so it works offline.
import { renderBib } from "./bibtex.js";
import { showFallback, writeToClipboard } from "./copy-markdown.js";
import { loadCorpus, searchAll } from "./corpus.js";
/** @import { CorpusRecord } from "./corpus.js" */
/** @import { FilterState } from "./filter.js" */

const panel = /** @type {HTMLElement | null} */ (document.querySelector("[data-bib-export]"));
const list = /** @type {HTMLElement | null} */ (document.querySelector("[data-entry-list]"));
const form = /** @type {(HTMLFormElement & { filterState?: FilterState }) | null} */ (
  document.querySelector("[data-filter-form]"));
if (panel && list && form) {
  // scripts/pages.py renders all of these with the panel.
  const selectedCount = /** @type {HTMLElement} */ (panel.querySelector("[data-bib-selected-count]"));
  const status = /** @type {HTMLElement} */ (panel.querySelector("[data-bib-status]"));
  const clearButton = /** @type {HTMLButtonElement} */ (panel.querySelector("[data-bib-clear]"));
  /** @type {NodeListOf<HTMLButtonElement & { dataset: { bibScope: string, bibAction: string } }>} */
  const actions = panel.querySelectorAll("button[data-bib-action]");
  /** Ids of the selected paper records. @type {Set<string>} */
  const selected = new Set();

  const sync = () => {
    const filtered = Boolean(form.filterState?.filtered);
    selectedCount.textContent = `${selected.size} selected`;
    clearButton.disabled = selected.size === 0;
    actions.forEach((button) => {
      button.disabled = button.dataset.bibScope === "selected" ? selected.size === 0 : !filtered;
    });
  };

  // A Cite checkbox on every rendered paper link, ticked when it is already selected.
  const addCheckboxes = () => {
    list.querySelectorAll("article.entry[data-id]").forEach((article) => {
      if (article.querySelector("[data-bib-pick]")) return;
      const id = /** @type {string} */ (/** @type {HTMLElement} */ (article).dataset.id);
      const title = article.querySelector(".entry-title")?.textContent?.trim() || "this link";
      const label = document.createElement("label");
      label.className = "bib-pick";
      const box = document.createElement("input");
      box.type = "checkbox";
      box.value = id;
      box.dataset.bibPick = "";
      box.checked = selected.has(id);
      box.setAttribute("aria-label", `Cite ${title}`);
      label.append(box, " Cite");
      article.append(label);
    });
  };

  /**
   * The records to export, in corpus order for selections so their keys are stable.
   * @param {string} scope
   * @returns {Promise<CorpusRecord[]>}
   */
  const recordsFor = async (scope) => {
    const corpus = await loadCorpus();
    if (scope === "selected") return corpus.records.filter((record) => selected.has(record.id));
    const state = /** @type {FilterState} */ (form.filterState);
    return searchAll(corpus, { text: state.text, kind: state.kind, tagGroups: state.tagGroups });
  };

  /** @param {string} text @param {string} name */
  const download = (text, name) => {
    const url = URL.createObjectURL(new Blob([text], { type: "application/x-bibtex" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  /** @param {string} message */
  const announce = (message) => {
    // Empty first so the same message is announced again on a repeat click.
    status.textContent = "";
    setTimeout(() => { status.textContent = message; }, 50);
  };

  list.addEventListener("change", (event) => {
    const box = /** @type {HTMLInputElement} */ (event.target);
    if (!box.matches("[data-bib-pick]")) return;
    if (box.checked) selected.add(box.value);
    else selected.delete(box.value);
    sync();
  });
  clearButton.addEventListener("click", () => {
    selected.clear();
    list.querySelectorAll("[data-bib-pick]").forEach((box) => { /** @type {HTMLInputElement} */ (box).checked = false; });
    sync();
    announce("Selection cleared");
  });
  actions.forEach((button) => button.addEventListener("click", async () => {
    const { bibScope: scope, bibAction: action } = button.dataset;
    let records;
    try {
      records = await recordsFor(scope);
    } catch (error) {
      announce(/** @type {Error} */ (error).message);
      return;
    }
    const text = renderBib(records);
    const entries = `${records.length} ${records.length === 1 ? "entry" : "entries"}`;
    if (action === "download") {
      download(text, scope === "selected" ? "paper-links-selected.bib" : "paper-links-filtered.bib");
      announce(`Downloaded ${entries}`);
    } else if (await writeToClipboard(text, navigator.clipboard)) {
      announce(`Copied ${entries}`);
    } else {
      showFallback(button, text, document);
      announce(`Could not copy automatically; the ${entries} are selected below.`);
    }
  }));
  document.addEventListener("entries-rendered", addCheckboxes);
  document.addEventListener("filters-changed", sync);

  addCheckboxes();
  sync();
  panel.hidden = false;
}
