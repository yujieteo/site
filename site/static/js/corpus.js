const SCHEMA_VERSION = 1;
const ALLOWED_QUERY_FIELDS = new Set(["text", "kind", "tags", "limit", "cursor", "sort"]);
let corpusPromise;

const normalize = (value) => String(value ?? "").normalize("NFKC").toLowerCase();
const terms = (value) => normalize(value).trim().split(/\s+/).filter(Boolean);

const fingerprint = (value) => {
  let hash = 2166136261;
  for (const character of JSON.stringify(value)) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16);
};

const encodeCursor = (offset, queryFingerprint) =>
  btoa(JSON.stringify({ offset, queryFingerprint }));

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

const searchableText = (record) => normalize([
  record.title, record.summary, record.content, record.category,
  ...(record.tags || []), record.date,
].filter(Boolean).join(" "));

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

export async function loadCorpus() {
  if (corpusPromise) return corpusPromise;
  corpusPromise = (async () => {
    const url = document.querySelector('meta[name="site-corpus"]')?.content;
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

export function searchSite(corpus, input = {}) {
  for (const field of Object.keys(input)) {
    if (!ALLOWED_QUERY_FIELDS.has(field)) throw new Error(`Unknown search field: ${field}`);
  }
  const query = {
    text: String(input.text || "").trim(),
    kind: input.kind ? String(input.kind) : "",
    tags: [...new Set((input.tags || []).map((tag) => normalize(tag)).filter(Boolean))],
    limit: Number(input.limit ?? 10),
    sort: input.sort || (String(input.text || "").trim() ? "relevance" : "newest"),
  };
  if (!Number.isInteger(query.limit) || query.limit < 1 || query.limit > 100) {
    throw new Error("limit must be an integer from 1 to 100");
  }
  if (!["relevance", "newest", "oldest"].includes(query.sort)) {
    throw new Error("sort must be relevance, newest, or oldest");
  }
  const queryTerms = terms(query.text);
  const ranked = corpus.records.flatMap((record, index) => {
    if (query.kind && record.kind !== query.kind) return [];
    const recordTags = (record.tags || []).map(normalize);
    if (!query.tags.every((tag) => recordTags.includes(tag))) return [];
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
  const queryFingerprint = fingerprint(query);
  const offset = decodeCursor(input.cursor, queryFingerprint);
  const page = ranked.slice(offset, offset + query.limit).map(({ record }) => record);
  const nextOffset = offset + page.length;
  return {
    items: page,
    nextCursor: nextOffset < ranked.length ? encodeCursor(nextOffset, queryFingerprint) : null,
    total: ranked.length,
  };
}

export function getItem(corpus, id) {
  const record = corpus.records.find((item) => item.id === id);
  if (!record) throw new Error(`No published item has id ${id}`);
  return record;
}
