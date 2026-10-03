/**
 * @typedef {"profile" | "about" | "resource" | "paper" | "note" | "blog" | "visualization" | "podcast"
 *   | "video" | "calibration"} RecordKind
 * @typedef {"resolves" | "extends" | "uses" | "related" | "resolvedBy" | "extendedBy" | "usedBy"} LinkRel
 * One published item, as schema/generated/corpus.schema.json defines it.
 * @typedef {object} CorpusRecord
 * @property {string} id
 * @property {RecordKind} kind
 * @property {string} revision
 * @property {string} [title]
 * @property {string} [url]
 * @property {string} [date]
 * @property {string[]} [tags]
 * @property {string} [category]
 * @property {string} [summary]
 * @property {string} [content]
 * @property {string} [contentHtml]
 * @property {string} [dataUrl]
 * @property {string} [audioUrl]
 * @property {string} [videoUrl]
 * @property {string} [captionsUrl]
 * @property {string} [posterUrl]
 * @property {number} [durationSeconds]
 * @property {number} [readingMinutes]
 * @property {string} [fetched]
 * @property {string[]} [webmcpTools]
 * @property {Citation} [citation]
 * @property {{ rel: LinkRel, target: string }[]} [links]
 * A paper link's citation metadata, for its BibTeX entry (static/js/bibtex.js).
 * @typedef {object} Citation
 * @property {string[]} [authors]
 * @property {number} [year]
 * @property {string} [title] the official title, when it differs from the record's
 * @property {string} [eprint] the arXiv id
 * @property {string} [primaryClass]
 * @property {string} [doi]
 * @property {string} [journalRef]
 * @typedef {{ schemaVersion: 1, revision: string, records: CorpusRecord[] }} Corpus
 * @typedef {"relevance" | "newest" | "oldest"} SortOrder
 * A search as callers (and WebMCP agents) send it; searchSite checks every field.
 * @typedef {object} SearchInput
 * @property {string} [text]
 * @property {string} [kind]
 * @property {string[]} [tags]
 * @property {string[][]} [tagGroups]
 * @property {number} [limit]
 * @property {string | null} [cursor]
 * @property {string} [sort]
 * @typedef {{ items: CorpusRecord[], nextCursor: string | null, total: number }} SearchResult
 */

const SCHEMA_VERSION = 1;
const ALLOWED_QUERY_FIELDS = new Set(["text", "kind", "tags", "tagGroups", "limit", "cursor", "sort"]);
/** @type {Promise<Corpus> | undefined} */
let corpusPromise;

/** @param {unknown} value */
const normalize = (value) => String(value ?? "").normalize("NFKC").toLowerCase();
/** @param {unknown} value */
const terms = (value) => normalize(value).trim().split(/\s+/).filter(Boolean);

/** @param {unknown} value */
const fingerprint = (value) => {
  let hash = 2166136261;
  for (const character of JSON.stringify(value)) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16);
};

/** @param {number} offset @param {string} queryFingerprint */
const encodeCursor = (offset, queryFingerprint) =>
  btoa(JSON.stringify({ offset, queryFingerprint }));

/**
 * @param {string | null | undefined} cursor
 * @param {string} queryFingerprint
 * @returns {number}
 */
const decodeCursor = (cursor, queryFingerprint) => {
  if (!cursor) return 0;
  try {
    const decoded = JSON.parse(atob(cursor));
    if (!Number.isInteger(decoded.offset) || decoded.offset < 0
        || decoded.queryFingerprint !== queryFingerprint) throw new Error();
    return decoded.offset;
  } catch {
    throw new Error("Invalid cursor for this query");
  }
};

/** @param {CorpusRecord} record */
const searchableText = (record) => normalize([
  record.title, record.summary, record.content, record.category,
  ...(record.tags || []), record.date,
].filter(Boolean).join(" "));

/**
 * @param {CorpusRecord} record
 * @param {string[]} queryTerms
 * @returns {number | null} the score, or null when the record misses a term
 */
const scoreRecord = (record, queryTerms) => {
  if (!queryTerms.length) return 0;
  const title = normalize(record.title);
  const tags = normalize((record.tags || []).join(" "));
  const summary = normalize(record.summary);
  const content = searchableText(record);
  if (!queryTerms.every((term) => content.includes(term))) return null;
  return queryTerms.reduce((score, term) => score
    + (title.includes(term) ? 8 : 0)
    + (tags.includes(term) ? 5 : 0)
    + (summary.includes(term) ? 2 : 0)
    + 1, 0);
};

/** @returns {Promise<Corpus>} */
export async function loadCorpus() {
  if (corpusPromise) return corpusPromise;
  corpusPromise = (async () => {
    const url = /** @type {HTMLMetaElement | null} */ (document.querySelector('meta[name="site-corpus"]'))?.content;
    if (!url) throw new Error("Published corpus metadata is missing");
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("Published corpus is unavailable");
    const corpus = await response.json();
    if (corpus.schemaVersion !== SCHEMA_VERSION) throw new Error("Published corpus version is unsupported");
    return corpus;
  })();
  corpusPromise.catch(() => { corpusPromise = undefined; });
  return corpusPromise;
}

/**
 * Checks every field of a search and fills in its defaults.
 * @param {SearchInput} input
 */
const parseQuery = (input) => {
  for (const field of Object.keys(input)) {
    if (!ALLOWED_QUERY_FIELDS.has(field)) throw new Error(`Unknown search field: ${field}`);
  }
  const query = {
    text: String(input.text || "").trim(),
    kind: input.kind ? String(input.kind) : "",
    tags: [...new Set((input.tags || []).map((tag) => normalize(tag)).filter(Boolean))],
    // Each group is OR'd internally and AND'd with the others (one group per facet).
    tagGroups: (input.tagGroups || [])
      .map((group) => [...new Set((group || []).map((tag) => normalize(tag)).filter(Boolean))])
      .filter((group) => group.length),
    limit: Number(input.limit ?? 10),
    sort: input.sort || (String(input.text || "").trim() ? "relevance" : "newest"),
  };
  if (!Number.isInteger(query.limit) || query.limit < 1 || query.limit > 100) {
    throw new Error("limit must be an integer from 1 to 100");
  }
  if (!["relevance", "newest", "oldest"].includes(query.sort)) {
    throw new Error("sort must be relevance, newest, or oldest");
  }
  return query;
};

/**
 * Every record matching the query, in result order.
 * @param {Corpus} corpus
 * @param {ReturnType<typeof parseQuery>} query
 * @returns {CorpusRecord[]}
 */
const rankRecords = (corpus, query) => {
  const queryTerms = terms(query.text);
  const ranked = corpus.records.flatMap((record, index) => {
    if (query.kind && record.kind !== query.kind) return [];
    const recordTags = (record.tags || []).map(normalize);
    if (!query.tags.every((tag) => recordTags.includes(tag))) return [];
    if (!query.tagGroups.every((group) => group.some((tag) => recordTags.includes(tag)))) return [];
    const score = scoreRecord(record, queryTerms);
    return score === null ? [] : [{ record, score, index }];
  });
  ranked.sort((left, right) => {
    if (query.sort === "relevance" && right.score !== left.score) return right.score - left.score;
    const dateOrder = String(right.record.date || "").localeCompare(String(left.record.date || ""));
    if (query.sort === "newest" && dateOrder) return dateOrder;
    if (query.sort === "oldest" && dateOrder) return -dateOrder;
    return left.index - right.index;
  });
  return ranked.map(({ record }) => record);
};

/**
 * @param {Corpus} corpus
 * @param {SearchInput} [input]
 * @returns {SearchResult}
 */
export function searchSite(corpus, input = {}) {
  const query = parseQuery(input);
  const ranked = rankRecords(corpus, query);
  const queryFingerprint = fingerprint(query);
  const offset = decodeCursor(input.cursor, queryFingerprint);
  const page = ranked.slice(offset, offset + query.limit);
  const nextOffset = offset + page.length;
  return {
    items: page,
    nextCursor: nextOffset < ranked.length ? encodeCursor(nextOffset, queryFingerprint) : null,
    total: ranked.length,
  };
}

/**
 * Every record searchSite pages through for the same search, in the same order.
 * @param {Corpus} corpus
 * @param {Omit<SearchInput, "limit" | "cursor">} [input]
 * @returns {CorpusRecord[]}
 */
export function searchAll(corpus, input = {}) {
  return rankRecords(corpus, parseQuery(input));
}

/**
 * @param {Corpus} corpus
 * @param {string} id
 * @returns {CorpusRecord}
 */
export function getItem(corpus, id) {
  const record = corpus.records.find((item) => item.id === id);
  if (!record) throw new Error(`No published item has id ${id}`);
  return record;
}
