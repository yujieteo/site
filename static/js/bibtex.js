// BibTeX for paper links, built in the browser from their Published Corpus
// records. Every link becomes one @misc entry with title, url, keywords (its
// tags) and abstract (its note); arXiv links also get eprint, archivePrefix
// and primaryClass, and links with known authors or year get author and year.
// The build resolves that metadata, preferring cached arXiv metadata, into
// each record's citation (scripts/paper_tags.py citation); this module only
// formats it. It touches no DOM, so Node tests import it directly.
/** @import { CorpusRecord } from "./corpus.js" */

const STOP_WORDS = new Set(["a", "an", "the", "on", "of", "and", "for", "in", "to", "via", "with", "from", "by", "at"]);

/**
 * Make free text safe inside a BibTeX field while keeping $...$ math.
 *
 * `%`, `#` and `&` are escaped everywhere (`%` would start a comment in the
 * .bbl file); `_` and `^` only outside math. An unmatched `$` is escaped, and
 * an unmatched `{` is closed and an unmatched `}` is written as a command.
 * @param {unknown} value
 * @returns {string}
 */
export function escapeText(value) {
  let text = String(value);
  const dollars = [...text.matchAll(/(?<!\\)\$/g)].map((match) => /** @type {number} */ (match.index));
  if (dollars.length % 2) {
    const last = /** @type {number} */ (dollars.at(-1));
    text = `${text.slice(0, last)}\\${text.slice(last)}`;
  }
  let out = "";
  let inMath = false;
  let depth = 0;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === "\\") {
      out += i + 1 < text.length ? text.slice(i, i + 2) : "\\textbackslash{}";
      i += 1;
    } else if (char === "$") {
      inMath = !inMath;
      out += char;
    } else if ("%#&".includes(char)) {
      out += `\\${char}`;
    } else if (char === "_" && !inMath) {
      out += "\\_";
    } else if (char === "^" && !inMath) {
      out += "\\textasciicircum{}";
    } else if (char === "{") {
      depth += 1;
      out += char;
    } else if (char === "}") {
      if (depth === 0) {
        // BibTeX counts braces even after a backslash, so \} would not do.
        out += "\\textbraceright{}";
      } else {
        depth -= 1;
        out += char;
      }
    } else {
      out += char;
    }
  }
  return out + "}".repeat(depth);
}

/** @param {string} url */
const urlField = (url) => url.replaceAll("{", "%7B").replaceAll("}", "%7D");

/**
 * Escape a URL for use inside \url{...} in another field's argument.
 * @param {string} url
 */
export const escapeUrlArgument = (url) => urlField(url).replace(/([%#])/g, "\\$1");

/** @param {string} name */
export function formatAuthor(name) {
  const trimmed = name.trim();
  if (trimmed === "et al." || trimmed === "others") return "others";
  const escaped = escapeText(trimmed);
  // Corporate authors stay one unit.
  if (/\b(?:community|team|group|collaboration|consortium)\b/i.test(trimmed)) return `{${escaped}}`;
  return escaped;
}

/**
 * The key suffix for the nth repeat of a base key: a to z, then aa, ab, ...
 * @param {number} n
 */
const keySuffix = (n) => (n >= 26 ? keySuffix(Math.floor(n / 26) - 1) : "") + String.fromCharCode(97 + (n % 26));

/** @param {string} text */
const ascii = (text) => text.normalize("NFKD").replace(/[^\x00-\x7f]/g, "");

/**
 * A citation key (lastname, year, first title word) not yet in `used`, which it joins.
 * @param {string} title
 * @param {string[]} authors
 * @param {number | undefined} year
 * @param {Set<string>} used
 */
export function citationKey(title, authors, year, used) {
  const titleWords = (ascii(title).match(/[A-Za-z0-9]+/g) || []).filter((word) => !STOP_WORDS.has(word.toLowerCase()));
  const firstWord = titleWords.length ? titleWords[0].toLowerCase() : "untitled";
  let base;
  if (authors.length && authors[0] !== "et al." && authors[0] !== "others") {
    const last = authors[0].replace(/[{}]/g, "").split(/\s+/).filter(Boolean).at(-1) || "";
    base = `${ascii(last).replace(/[^A-Za-z0-9]/g, "").toLowerCase()}${year || ""}${firstWord}`;
  } else {
    base = titleWords.slice(0, 3).map((word) => word.toLowerCase()).join("") || "untitled";
    if (year) base += String(year);
  }
  base = base || "entry";
  let key = base;
  for (let n = 0; used.has(key); n += 1) key = `${base}${keySuffix(n)}`;
  used.add(key);
  return key;
}

/**
 * One @misc entry for a paper record; its key is unique among those in `used`.
 * @param {CorpusRecord} record
 * @param {Set<string>} used
 * @returns {string}
 */
export function bibEntry(record, used) {
  const meta = record.citation || {};
  const authors = meta.authors || [];
  const url = String(record.url || "");
  const recordTitle = String(record.title || "");
  const tags = record.tags || [];
  const note = String(record.content || "").split(/\s+/).filter(Boolean).join(" ");

  const key = citationKey(recordTitle, authors, meta.year, used);
  /** @type {[string, string][]} */
  const fields = [["title", `{${escapeText(meta.title || recordTitle)}}`]];
  if (authors.length) {
    fields.push(["author", authors.map(formatAuthor).join(" and ")]);
  } else {
    // Sort key for author-less entries in BibTeX styles such as plain.
    fields.push(["key", escapeText(meta.title || recordTitle)]);
  }
  if (meta.year) fields.push(["year", String(meta.year)]);
  if (meta.eprint) {
    fields.push(["eprint", meta.eprint], ["archivePrefix", "arXiv"]);
    if (meta.primaryClass) fields.push(["primaryClass", meta.primaryClass]);
  }
  if (meta.doi) fields.push(["doi", meta.doi]);
  if (meta.journalRef) fields.push(["note", escapeText(meta.journalRef)]);
  fields.push(["url", urlField(url)], ["howpublished", `\\url{${escapeUrlArgument(url)}}`]);
  if (tags.length) fields.push(["keywords", escapeText(tags.join(", "))]);
  if (note) fields.push(["abstract", escapeText(note)]);

  const width = Math.max(...fields.map(([name]) => name.length));
  const body = fields.map(([name, value]) => `  ${name.padEnd(width)} = {${value}}`).join(",\n");
  return `@misc{${key},\n${body}\n}`;
}

/**
 * A .bib file of the given paper records, in their order, with unique keys.
 * @param {CorpusRecord[]} records
 * @returns {string}
 */
export function renderBib(records) {
  const used = new Set();
  const header = "% Exported from the Paper Links page of this site.\n"
    + `% ${records.length} ${records.length === 1 ? "entry" : "entries"}. `
    + "Encoding: UTF-8 (use biber, or \\usepackage[utf8]{inputenc} with bibtex).\n";
  return `${header}\n${records.map((record) => bibEntry(record, used)).join("\n\n")}\n`;
}
