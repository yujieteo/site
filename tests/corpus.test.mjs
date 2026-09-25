import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../static/js/corpus.js", import.meta.url), "utf8");
const { getItem, loadCorpus, searchSite } = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);

const corpus = {
  records: [
    { id: "note:new", kind: "note", title: "Algebraic geometry", content: "Moduli spaces", date: "2026-09-25", tags: ["math.ag"] },
    { id: "note:old", kind: "note", title: "Geometry", content: "Curves", date: "2026-09-20", tags: ["math.ag"] },
    { id: "paper:x", kind: "paper", title: "Algebra", content: "Groups", tags: ["algebra"] },
  ],
};

test("loads a compatible corpus after a partial site publish", async () => {
  globalThis.document = {
    querySelector(selector) {
      const metadata = {
        'meta[name="site-corpus"]': { content: "corpus.json" },
        'meta[name="site-corpus-revision"]': { content: "older-page-revision" },
      };
      return metadata[selector];
    },
  };
  globalThis.fetch = async () => ({
    ok: true,
    json: async () => ({ ...corpus, schemaVersion: 1, revision: "newer-corpus-revision" }),
  });

  assert.equal((await loadCorpus()).revision, "newer-corpus-revision");
});

test("searches all terms and filters by kind and tag", () => {
  const result = searchSite(corpus, { text: "algebraic moduli", kind: "note", tags: ["math.ag"] });
  assert.deepEqual(result.items.map((item) => item.id), ["note:new"]);
});

test("sorts and paginates with query-bound cursors", () => {
  const first = searchSite(corpus, { kind: "note", sort: "oldest", limit: 1 });
  assert.equal(first.items[0].id, "note:old");
  const second = searchSite(corpus, { kind: "note", sort: "oldest", limit: 1, cursor: first.nextCursor });
  assert.equal(second.items[0].id, "note:new");
  assert.throws(() => searchSite(corpus, { kind: "paper", limit: 1, cursor: first.nextCursor }), /Invalid cursor/);
});

test("retrieves exact items and rejects missing IDs", () => {
  assert.equal(getItem(corpus, "paper:x").title, "Algebra");
  assert.throws(() => getItem(corpus, "missing"), /No published item/);
});
