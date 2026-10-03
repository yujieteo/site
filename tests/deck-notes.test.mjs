import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import vm from "node:vm";

// Runs every deck's own scripts in a stand-in browser and records what they fetch. The DOM is a stub
// that answers every property and call with another stub (a list holds one stub element), except the
// embedded data blocks (<script type="application/json"> and friends), which return their real text.
const DECKS = new URL("../data/decks/", import.meta.url);

/** @param {Record<PropertyKey, unknown>} [own] @returns {any} */
const stub = (own = {}) => new Proxy(function () {}, {
  get(_, key) {
    if (key in own) return own[key];
    if (key === Symbol.toPrimitive) return (/** @type {string} */ hint) => (hint === "number" ? 0 : "");
    if (key === Symbol.iterator) return function* () { yield stub(); };
    if (key === "then") return undefined;
    return stub();
  },
  apply: () => stub(),
  construct: () => stub(),
  set: () => true,
});

/**
 * Loads a deck page from the given origin and returns the URLs its scripts fetch.
 * @param {string} slug @param {string} origin
 */
async function fetchesOf(slug, origin) {
  const html = readFileSync(new URL(`${slug}/index.html`, DECKS), "utf8");
  /** @type {Record<string, string>} */
  const blocks = {};
  for (const [, id, text] of html.matchAll(/<script\b[^>]*\bid="([^"]+)"[^>]*>([\s\S]*?)<\/script>/g)) blocks[id] = text;
  const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
    .filter(([tag]) => !/^<script[^>]*\btype="(?!(?:text|application)\/javascript")/.test(tag))
    .map(([, code]) => code);
  /** @param {string} id */
  const element = (id) => (id in blocks ? stub({ textContent: blocks[id] }) : stub());
  /** @type {string[]} */
  const fetched = [];
  const location = new URL(`/decks/${slug}/index.html`, origin);
  const context = vm.createContext({
    document: stub({
      getElementById: element,
      querySelector: (/** @type {string} */ s) => (s.startsWith("#") ? element(s.slice(1)) : stub()),
    }),
    location, history: stub(), navigator: stub(), localStorage: stub(), Image: stub(), BroadcastChannel: stub(), ResizeObserver: stub(),
    getComputedStyle: stub(), matchMedia: stub(), requestAnimationFrame: () => 0,
    setInterval: () => 0, setTimeout: () => 0, clearTimeout: () => {}, addEventListener: () => {},
    innerWidth: 1920, innerHeight: 1080, URL, URLSearchParams, Blob,
    fetch: (/** @type {string} */ url) => {
      fetched.push(new URL(url, location).pathname);
      return Promise.resolve({ ok: false, text: async () => "" });
    },
  });
  context.window = context;
  for (const code of scripts) vm.runInContext(code, context);
  await new Promise((resolve) => setImmediate(resolve));
  return fetched;
}

const slugs = readdirSync(DECKS, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name).sort();

test("a deck requests its private notes.md only from a local preview server", async () => {
  /** @type {string[]} */
  const withNotes = [];
  for (const slug of slugs) {
    const local = await fetchesOf(slug, "http://localhost:8000");
    if (local.includes(`/decks/${slug}/notes.md`)) withNotes.push(slug);
    assert.deepEqual(await fetchesOf(slug, "https://teoyujie.org"), [], slug);
  }
  assert.deepEqual(withNotes, ["fpl-early-season", "indeterminate-beams"]);
});
