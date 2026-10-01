/* Every beamdswitch deck the site's visualisations export names its narrator, so narration plays
   without the reader picking a voice: British female bf_emma unless the visualisation picks another. */
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import { parseDeck } from "./fixtures/beamdswitch/deck.mjs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const TEMPLATE = read("templates/beamdswitch.js");
const load = (src, name) => { const ctx = {}; vm.createContext(ctx); ctx.self = ctx; vm.runInContext(src, ctx); return ctx[name]; };
const B = load(TEMPLATE, "Beamdswitch");

const frame = (title, key) => ({ title, body: "- A point.", narration: "One sentence.", ...(key ? { key: "The takeaway." } : {}) });
const report = (meta) => ({
  meta: { title: "A report", ...meta }, narration: "The title slide.",
  setup: [frame("Set-up")], method: [frame("Method")], results: [frame("Results")], checks: [frame("Checks", true)],
});
const frontMatter = (md) => /^---\n([\s\S]*?)\n---\n/.exec(md)[1].split("\n");

test("a deck built with no meta.voice declares voice: bf_emma", () => {
  assert.equal(B.DEFAULT_VOICE, "bf_emma");
  for (const voice of [undefined, null, "", "   "]) {
    const md = B.deck(report({ subtitle: "Sub", voice }));
    assert.deepEqual(frontMatter(md), ["title: A report", "subtitle: Sub", "voice: bf_emma"], `meta.voice = ${JSON.stringify(voice)}`);
    assert.equal(parseDeck(md).meta.voice, "bf_emma");
  }
  assert.deepEqual(frontMatter(B.deck({ ...report(), meta: { title: "A report" } })).at(-1), "voice: bf_emma");
});

test("a visualisation's own voice is kept", () => {
  assert.deepEqual(frontMatter(B.deck(report({ date: "1 October 2026", voice: "bf_isabella" }))), ["title: A report", "date: 1 October 2026", "voice: bf_isabella"]);
});

test("every visualisation on the shared template ships the template that always declares a voice", () => {
  const pages = readdirSync(new URL("../visuals/", import.meta.url)).filter((slug) => {
    try { return !!read(`visuals/${slug}/beamdswitch.js`); } catch { return false; }
  });
  assert.ok(pages.length > 0);
  for (const slug of pages) assert.equal(read(`visuals/${slug}/beamdswitch.js`), TEMPLATE, `visuals/${slug}/beamdswitch.js is the shared template`);
});

test("Phasors and Toulmin export their default decks with voice bf_emma", () => {
  const html = (slug) => read(`visuals/${slug}/index.html`);
  const script = (slug, id) => new RegExp(`<script id="${id}">([\\s\\S]*?)</script>`).exec(html(slug))[1];
  const P = load(script("phasors", "ph-engine"), "Phasors");
  assert.equal(parseDeck(P.buildDeck(P.defaultState())).meta.voice, "bf_emma");
  const T = load(script("toulmin", "toulmin-engine"), "Toulmin");
  const d = T.exportDeck(T.clone(T.TEMPLATE));
  assert.equal(d.ok, true);
  assert.equal(parseDeck(d.text).meta.voice, "bf_emma");
});
