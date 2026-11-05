// The byte-level BPE tokenizer of SmolLM2 (a tokenizer.json of the Hugging
// Face tokenizers format): added tokens split first, then each digit alone,
// then the GPT-2 split into words, then the merges inside each word.

const WORDS = /'s|'t|'re|'ve|'m|'ll|'d| ?\p{L}+| ?\p{N}+| ?[^\s\p{L}\p{N}]+|\s+(?!\S)|\s+/gu;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

// GPT-2's map from bytes to printable characters, and back.
function byteChars() {
  const keep = [];
  for (let b = 33; b <= 126; b++) keep.push(b);
  for (let b = 161; b <= 172; b++) keep.push(b);
  for (let b = 174; b <= 255; b++) keep.push(b);
  const map = new Array(256);
  let extra = 0;
  for (let b = 0; b < 256; b++) map[b] = String.fromCharCode(keep.includes(b) ? b : 256 + extra++);
  assert(keep.length + extra === 256, "every byte has a character");
  assert(map.length === 256, "the map has 256 entries");
  return map;
}

function escapeRegex(s) {
  assert(typeof s === "string", "an added token is text");
  assert(s.length > 0, "an added token is not empty");
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildTables(json) {
  assert(json.model && json.model.vocab, "the tokenizer has a vocabulary");
  assert(Array.isArray(json.model.merges) && Array.isArray(json.added_tokens), "merges and added tokens are lists");
  const vocab = new Map(Object.entries(json.model.vocab));
  const ranks = new Map(json.model.merges.map((m, i) => {
    assert(typeof m === "string" || Array.isArray(m), "a merge is text or a pair");
    assert(Number.isInteger(i), "a merge has a rank");
    return [typeof m === "string" ? m : m.join(" "), i];
  }));
  const added = json.added_tokens.map((t) => {
    assert(typeof t.content === "string", "an added token has content");
    assert(Number.isInteger(t.id), "an added token has an id");
    return t.content;
  });
  for (const t of json.added_tokens) vocab.set(t.content, t.id);
  const pieces = [];
  for (const [s, id] of vocab) pieces[id] = s;
  const toChar = byteChars();
  const toByte = new Map(toChar.map((c, b) => {
    assert(c.length === 1, "a byte character is one character");
    assert(b >= 0 && b < 256, "a byte is 0 to 255");
    return [c, b];
  }));
  const special = added.length
    ? new RegExp(`(${added.map(escapeRegex).join("|")})`)
    : null;
  return { vocab, ranks, added, pieces, toChar, toByte, special };
}

// The merges of one word, as a list of parts. Each round that merges makes
// the list shorter, so a word of n characters takes n rounds at most.
function mergeWord(word, ranks) {
  assert(typeof word === "string", "a word is text");
  assert(ranks instanceof Map, "the ranks are a map");
  let parts = Array.from(word);
  const cap = parts.length;
  for (let round = 0; round <= cap; round++) {
    let best = -1, rank = Infinity;
    for (let i = 0; i + 1 < parts.length; i++) {
      const r = ranks.get(parts[i] + " " + parts[i + 1]);
      if (r !== undefined && r < rank) { rank = r; best = i; }
    }
    if (best < 0) return parts;
    const a = parts[best], b = parts[best + 1], merged = [];
    for (let i = 0; i < parts.length; i++) {
      if (i + 1 < parts.length && parts[i] === a && parts[i + 1] === b) { merged.push(a + b); i++; }
      else merged.push(parts[i]);
    }
    assert(merged.length < parts.length, "a merge makes the word shorter");
    parts = merged;
  }
  throw new Error("a word merged more often than it has characters");
}

function bpe(t, cache, word) {
  assert(cache instanceof Map, "the cache is a map");
  assert(typeof word === "string", "a word is text");
  assert(word.length > 0, "a word has characters");
  if (cache.has(word)) return cache.get(word);
  assert(t.vocab instanceof Map, "the vocabulary is a map");
  const ids = mergeWord(word, t.ranks).map((p) => {
    assert(typeof p === "string", "a part is text");
    assert(t.vocab instanceof Map, "the vocabulary is a map");
    return t.vocab.get(p);
  });
  cache.set(word, ids);
  return ids;
}

function encodeText(t, cache, encoder, text, ids) {
  assert(Array.isArray(ids), "the ids are a list");
  assert(typeof text === "string", "the text is a string");
  for (const piece of text.split(/(\p{N})/u)) {
    if (!piece) continue;
    for (const [w] of piece.matchAll(WORDS)) {
      let chars = "";
      for (const b of encoder.encode(w)) chars += t.toChar[b];
      assert(chars.length >= 1, "a word has characters");
      ids.push(...bpe(t, cache, chars));
    }
  }
}

export function createTokenizer(json) {
  const t = buildTables(json);
  const encoder = new TextEncoder();
  const cache = new Map();
  assert(t.pieces.length > 0, "the tokenizer has pieces");
  assert(t.vocab.size > 0, "the tokenizer has a vocabulary");
  assert(t.toChar.length === 256, "every byte has a character");

  return {
    encode(text) {
      assert(typeof text === "string", "the text is a string");
      const ids = [];
      const parts = t.special ? text.split(t.special) : [text];
      for (let i = 0; i < parts.length; i++) {
        if (i % 2) ids.push(t.vocab.get(parts[i]));
        else if (parts[i]) encodeText(t, cache, encoder, parts[i], ids);
      }
      return ids;
    },
    // The bytes of one token; a token can hold part of a UTF-8 character.
    bytes(id) {
      assert(Number.isInteger(id) && id >= 0, "a token id is a whole number");
      const p = t.pieces[id] ?? "";
      if (t.added.includes(p)) return encoder.encode(p);
      return Uint8Array.from(Array.from(p), (c) => {
        assert(typeof c === "string", "a piece character is text");
        assert(c.length >= 1, "a piece character is not empty");
        return t.toByte.get(c);
      });
    },
    decode(ids) {
      assert(typeof ids.map === "function", "the ids are a list");
      const parts = ids.map((id) => {
        assert(typeof this.bytes === "function", "the tokenizer gives bytes");
        assert(typeof id === "number", "a token id is a number");
        return this.bytes(id);
      });
      const all = new Uint8Array(parts.reduce((n, p) => {
        assert(typeof n === "number", "the length is a number");
        assert(p.length >= 0, "a token has bytes");
        return n + p.length;
      }, 0));
      let k = 0;
      for (const p of parts) { all.set(p, k); k += p.length; }
      assert(k === all.length, "every byte was placed");
      return new TextDecoder().decode(all);
    },
    size: t.pieces.length,
  };
}
