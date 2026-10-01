import test from "node:test";
import assert from "node:assert/strict";

import { noteCopyControlHtml, setupCopyButtons, showFallback, writeToClipboard } from "../static/js/copy-markdown.js";

// Just enough DOM for copy-markdown.js: elements with children, attributes,
// closest() over data-* selectors, and a document that dispatches clicks.
class FakeElement {
  constructor(tagName, attributes = {}) {
    this.tagName = tagName.toUpperCase();
    this.attributes = { ...attributes };
    this.children = [];
    this.parentElement = null;
    this.textContent = "";
    this.dataset = {};
    if ("data-copy-markdown" in attributes) this.dataset.copyMarkdown = attributes["data-copy-markdown"];
    this.focused = false;
    this.selected = false;
  }
  append(...children) {
    for (const child of children) {
      child.parentElement = this;
      this.children.push(child);
    }
  }
  matches(selector) {
    const name = selector.match(/^\[([\w-]+)\]$/)?.[1];
    return name !== undefined && name in this.attributes;
  }
  closest(selector) {
    for (let node = this; node; node = node.parentElement) if (node.matches(selector)) return node;
    return null;
  }
  querySelector(selector) {
    for (const child of this.children) {
      if (child.matches(selector)) return child;
      const found = child.querySelector(selector);
      if (found) return found;
    }
    return null;
  }
  focus() { this.focused = true; }
  select() { this.selected = true; }
}

class FakeDocument {
  constructor(sources) {
    this.listeners = [];
    this.execCommandCalls = [];
    this.source = new FakeElement("script");
    this.source.textContent = JSON.stringify(sources);
  }
  execCommand(...args) { this.execCommandCalls.push(args); return true; }
  getElementById(id) { return id === "markdown-sources" ? this.source : null; }
  createElement(tag) { return new FakeElement(tag); }
  addEventListener(type, listener) { if (type === "click") this.listeners.push(listener); }
  async click(target) { for (const listener of this.listeners) await listener({ target }); }
}

function copyControl(key) {
  const scope = new FakeElement("article", { "data-copy-scope": "" });
  const control = new FakeElement("div", { "data-copy-control": "" });
  const button = new FakeElement("button", { "data-copy-markdown": key });
  const status = new FakeElement("span", { "data-copy-status": "" });
  control.append(button, status);
  scope.append(control);
  return { scope, button, status };
}

const settle = () => new Promise((resolve) => setTimeout(resolve, 80));

test("writeToClipboard reports success, refusal and absence", async () => {
  const written = [];
  assert.equal(await writeToClipboard("# A", { writeText: async (text) => { written.push(text); } }), true);
  assert.deepEqual(written, ["# A"]);
  assert.equal(await writeToClipboard("# A", { writeText: async () => { throw new Error("denied"); } }), false);
  assert.equal(await writeToClipboard("# A", undefined), false);
  assert.equal(await writeToClipboard("# A", {}), false);
});

test("a click copies that button's Markdown and confirms in the live region", async () => {
  const written = [];
  const doc = new FakeDocument({ "note:a": "First [x](https://teoyujie.org/a)\n", "note:b": "Second\n" });
  setupCopyButtons(doc, { writeText: async (text) => { written.push(text); } });
  const { scope, button, status } = copyControl("note:b");
  await doc.click(button);
  await settle();
  assert.deepEqual(written, ["Second\n"]);
  assert.equal(status.textContent, "Copied");
  assert.equal(scope.children.length, 1);
});

test("without the Clipboard API the Markdown is shown selected in a read-only textarea", async () => {
  const doc = new FakeDocument({ page: "# Title\n\n$$x^2$$\n" });
  setupCopyButtons(doc, undefined);
  const { scope, button, status } = copyControl("page");
  await doc.click(button);
  await settle();
  const box = scope.children[1];
  assert.equal(box.className, "copy-fallback");
  const [label, area] = box.children;
  assert.equal(area.tagName, "TEXTAREA");
  assert.equal(area.readOnly, true);
  assert.equal(area.value, "# Title\n\n$$x^2$$\n");
  assert.ok(area.focused && area.selected);
  assert.equal(label.htmlFor, area.id);
  assert.match(label.textContent, /Ctrl\/⌘\+C/);
  assert.match(status.textContent, /selected below/);
});

test("a refused write falls back too, and a second click reuses the same textarea", async () => {
  const doc = new FakeDocument({ page: "# Title\n" });
  setupCopyButtons(doc, { writeText: async () => { throw new DOMException("denied", "NotAllowedError"); } });
  const { scope, button } = copyControl("page");
  await doc.click(button);
  await doc.click(button);
  assert.equal(scope.children.length, 2);
  assert.equal(scope.children[1].children[1].value, "# Title\n");
});

test("showFallback attaches to the button's parent when there is no copy scope", () => {
  const parent = new FakeElement("div");
  const button = new FakeElement("button", { "data-copy-markdown": "page" });
  parent.append(button);
  const area = showFallback(button, "text", new FakeDocument({}));
  assert.equal(area.parentElement.parentElement, parent);
});

test("neither the clipboard nor the fallback path fetches or uses execCommand", async (t) => {
  const fetchCalls = [];
  t.mock.method(globalThis, "fetch", async (...args) => { fetchCalls.push(args); return new Response(""); });
  for (const clipboard of [{ writeText: async () => {} }, undefined]) {
    const doc = new FakeDocument({ page: "# Title\n" });
    setupCopyButtons(doc, clipboard);
    const { button, status } = copyControl("page");
    await doc.click(button);
    await settle();
    assert.ok(status.textContent);
    assert.deepEqual(doc.execCommandCalls, []);
  }
  assert.deepEqual(fetchCalls, []);
});

test("the note copy control filtered notes render names that note and has a live status", () => {
  const html = noteCopyControlHtml("note:a\"b", "Copy Markdown of note from 2026-01-02");
  const button = html.match(/<button ([^>]*)>Copy Markdown<\/button>/)[1];
  const attributes = Object.fromEntries([...button.matchAll(/([\w-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
  assert.equal(attributes.class, "copy-note");
  assert.equal(attributes["data-copy-markdown"], "note:a&quot;b");
  assert.equal(attributes["aria-label"], "Copy Markdown of note from 2026-01-02");
  assert.match(html, /^<div class="note-actions" data-copy-control>/);
  assert.match(html, /<span class="page-action-status" data-copy-status aria-live="polite"><\/span><\/div>$/);
});
