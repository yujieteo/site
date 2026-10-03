/* Every beamdswitch deck the site's visualisations export names its narrator, so narration plays
   without the reader picking a voice: British female bf_emma unless the visualisation picks another. */
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import { visualsUrl } from "./visuals-repo.mjs";
import { parseDeck } from "./fixtures/beamdswitch/deck.mjs";

/**
 * templates/beamdswitch.js's API, which it sets on the global object.
 * @typedef {{ DEFAULT_VOICE: string, SECTIONS: [string, string][], deck(report: object): string }} BeamdswitchApi
 */

/** @param {string} path */
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
// The yujieteo/visuals checkout the build reads.
const VISUALS = visualsUrl();
/** @param {string} path */
const readVisuals = (path) => readFileSync(new URL(path, VISUALS), "utf8");
const TEMPLATE = read("templates/beamdswitch.js");
/**
 * Run a script and return the global it defines; any, as each caller states the API it expects.
 * @param {string} src @param {string} name @returns {any}
 */
const load = (src, name) => { const ctx = vm.createContext({}); ctx.self = ctx; vm.runInContext(src, ctx); return ctx[name]; };
/** @type {BeamdswitchApi} */
const B = load(TEMPLATE, "Beamdswitch");

/** @param {string} title @param {boolean} [key] */
const frame = (title, key) => ({ title, body: "- A point.", narration: "One sentence.", ...(key ? { key: "The takeaway." } : {}) });
/** @param {object} [meta] */
const report = (meta) => ({
  meta: { title: "A report", ...meta }, narration: "The title slide.",
  setup: [frame("Set-up")], method: [frame("Method")], results: [frame("Results")], checks: [frame("Checks", true)],
});
/** @param {string} md */
const frontMatter = (md) => /^---\n([\s\S]*?)\n---\n/.exec(md)?.[1].split("\n");

test("a deck built with no meta.voice declares voice: bf_emma", () => {
  assert.equal(B.DEFAULT_VOICE, "bf_emma");
  for (const voice of [undefined, null, "", "   "]) {
    const md = B.deck(report({ subtitle: "Sub", voice }));
    assert.deepEqual(frontMatter(md), ["title: A report", "subtitle: Sub", "voice: bf_emma"], `meta.voice = ${JSON.stringify(voice)}`);
    assert.equal(parseDeck(md).meta.voice, "bf_emma");
  }
  assert.deepEqual(frontMatter(B.deck({ ...report(), meta: { title: "A report" } }))?.at(-1), "voice: bf_emma");
});

test("a visualisation's own voice is kept", () => {
  assert.deepEqual(frontMatter(B.deck(report({ date: "1 October 2026", voice: "bf_isabella" }))), ["title: A report", "date: 1 October 2026", "voice: bf_isabella"]);
});

test("every visualisation on the shared template ships the template that always declares a voice", () => {
  // This repository's own folders (visuals/<slug>/) and the visuals repository's (viz/<slug>/).
  /** @param {(path: string) => string} reader @param {string} folder */
  const copies = (reader, folder) => readdirSync(new URL(folder, folder === "visuals/" ? new URL("../", import.meta.url) : VISUALS))
    .map((slug) => ({ slug, path: `${folder}${slug}/beamdswitch.js`, reader }))
    .filter(({ path }) => { try { return !!reader(path); } catch { return false; } });
  const pages = [...copies(read, "visuals/"), ...copies(readVisuals, "viz/")];
  assert.ok(pages.length > 0);
  // Every page, or only those a pull request changes (SITE_TEST_VISUALS; see tests/visual_selection.py).
  const selected = process.env.SITE_TEST_VISUALS?.split(",");
  for (const { path, reader } of pages.filter(({ slug }) => !selected || selected.includes(slug))) assert.equal(reader(path), TEMPLATE, `${path} is the shared template`);
});
