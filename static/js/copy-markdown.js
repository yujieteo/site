// Copy Markdown buttons. Each [data-copy-markdown] button names an entry in the
// page's #markdown-sources JSON, embedded at build time with relative links
// already made absolute. Copying uses the Clipboard API; when that is missing
// or refused, the Markdown is shown selected in a read-only textarea to copy
// by hand. Status text goes to the button's [data-copy-status] live region.

const HINT = "Press Ctrl/⌘+C to copy.";
const fallbacks = new WeakMap();
let fallbackCount = 0;

const escapeAttribute = (value) => String(value).replace(
  /[&<>"']/g,
  (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character],
);

const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

// "2026-01-02" as "2 January 2026", the notes page's display date.
const displayDate = (isoDate) => {
  const [, year, month, day] = String(isoDate).match(/^(\d{4})-(\d{2})-(\d{2})$/) ?? [];
  return year && MONTHS[month - 1] ? `${Number(day)} ${MONTHS[month - 1]} ${year}` : String(isoDate);
};

// The per-note copy control, for notes the browser renders after filtering;
// its label matches the one the build gives the same note.
export function noteCopyControlHtml(id, isoDate, plainText) {
  const excerpt = [...String(plainText)].slice(0, 40).join("").trim();
  const label = `Copy Markdown of note from ${displayDate(isoDate)}: ${excerpt}`;
  return '<div class="note-actions" data-copy-control>'
    + `<button type="button" class="copy-note" data-copy-markdown="${escapeAttribute(id)}" `
    + `aria-label="${escapeAttribute(label)}">Copy Markdown</button>`
    + '<span class="page-action-status" data-copy-status aria-live="polite"></span></div>';
}

// Resolves true once the text is on the clipboard, false if it could not be.
export async function writeToClipboard(text, clipboard) {
  if (!clipboard || typeof clipboard.writeText !== "function") return false;
  try {
    await clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

// Shows (or reuses) the button's read-only textarea with all the text selected.
export function showFallback(button, text, doc) {
  let area = fallbacks.get(button);
  if (!area) {
    const box = doc.createElement("div");
    box.className = "copy-fallback";
    const label = doc.createElement("label");
    label.className = "copy-fallback-hint";
    area = doc.createElement("textarea");
    area.id = `copy-fallback-${++fallbackCount}`;
    label.htmlFor = area.id;
    label.textContent = HINT;
    area.className = "copy-fallback-text";
    area.readOnly = true;
    area.rows = 8;
    area.spellcheck = false;
    box.append(label, area);
    (button.closest("[data-copy-scope]") ?? button.parentElement).append(box);
    fallbacks.set(button, area);
  }
  area.value = text;
  area.focus();
  area.select();
  return area;
}

export function setupCopyButtons(doc, clipboard) {
  const source = doc.getElementById("markdown-sources");
  if (!source) return;
  const sources = JSON.parse(source.textContent);
  const timers = new WeakMap();
  const announce = (status, message, clearAfter) => {
    if (!status) return;
    clearTimeout(timers.get(status));
    // Empty first so the same message is announced again on a repeat click.
    status.textContent = "";
    setTimeout(() => {
      status.textContent = message;
      if (clearAfter) timers.set(status, setTimeout(() => { status.textContent = ""; }, clearAfter));
    }, 50);
  };
  doc.addEventListener("click", async (event) => {
    const button = event.target.closest?.("[data-copy-markdown]");
    if (!button) return;
    const text = sources[button.dataset.copyMarkdown];
    if (typeof text !== "string") return;
    const status = button.closest("[data-copy-control]")?.querySelector("[data-copy-status]");
    if (await writeToClipboard(text, clipboard)) {
      announce(status, "Copied", 2000);
    } else {
      showFallback(button, text, doc);
      announce(status, "Could not copy automatically; the Markdown is selected below.", 0);
    }
  });
}

if (typeof document !== "undefined") setupCopyButtons(document, navigator.clipboard);
