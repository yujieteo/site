import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

function page() {
  const elements = new Map(), created = [], tools = [], paths = [];
  function element() {
    const classes = new Set(), handlers = new Map();
    const target = {
      value: "", textContent: "", disabled: false, dataset: {}, clientWidth: 700,
      classList: { add: (x) => classes.add(x), remove: (x) => classes.delete(x), contains: (x) => classes.has(x) },
      addEventListener: (name, fn) => handlers.set(name, fn),
      dispatch: (name) => handlers.get(name)?.({}),
      setAttribute: (name, value) => { if (name === "d") paths.push(value); },
      querySelector: () => null, querySelectorAll: () => [], closest: () => null,
      getBoundingClientRect: () => ({ left: 0, width: 700 }),
      replaceChildren() { this.textContent = ""; },
    };
    const el = new Proxy(target, { get: (t, k) => k in t ? t[k] : () => {} });
    created.push(el);
    return el;
  }
  const document = {
    getElementById: (id) => { if (!elements.has(id)) elements.set(id, element()); return elements.get(id); },
    createElement: element, createElementNS: element, createTextNode: (text) => text,
    querySelectorAll: (selector) => selector === "[data-add]" ? ["point", "moment", "dist"].map((kind) => {
      const el = document.getElementById(`add-${kind}`); el.dataset.add = kind; return el;
    }) : [],
    querySelector: (selector) => created.findLast((el) => selector === `[data-field="${el.dataset.field}"]`) ?? null,
    activeElement: null,
  };
  const ctx = vm.createContext({ document, Option: function () { return element(); }, navigator: { modelContext: { registerTool: (tool) => tools.push(tool) } }, requestAnimationFrame: () => 0, cancelAnimationFrame() {} });
  const html = fs.readFileSync(new URL("../visuals/beamdiag/index.html", import.meta.url), "utf8");
  for (const script of html.matchAll(/<script>([\s\S]*?)<\/script>/g)) vm.runInContext(script[1], ctx);
  const get = document.getElementById;
  const edit = (el, value) => { el.value = String(value); el.dispatch("input"); };
  return {
    ctx, get, edit, paths,
    field: (name) => document.querySelector(`[data-field="${name}"]`),
    current: async () => JSON.parse((await tools.find((t) => t.name === "get_current_beam").execute({})).content[0].text),
  };
}

test("invalid edits invalidate exports and mark all retained results stale, then recover", () => {
  const p = page();
  assert.ok(p.get("deck").textContent.includes("BEGIN BULK"));
  for (const [field, value, restore] of [["supports.1.x", 7, 6], ["section.b", -1, 100]]) {
    p.edit(p.field(field), value);
    assert.equal(p.get("deck").textContent, "");
    assert.equal(p.get("download").disabled, true);
    assert.equal(p.get("copy").disabled, true);
    for (const id of ["plots", "stats", "table"]) assert.equal(p.get(id).classList.contains("stale"), true);
    assert.match(p.get("export-status").textContent, /stale/);
    p.edit(p.field(field), restore);
    assert.ok(p.get("deck").textContent.includes("BEGIN BULK"));
    assert.equal(p.get("download").disabled, false);
    assert.equal(p.get("copy").disabled, false);
    for (const id of ["plots", "stats", "table"]) assert.equal(p.get(id).classList.contains("stale"), false);
  }
});

test("incomplete length edits preserve support, force, couple and distributed-end attachments", async () => {
  const p = page();
  const original = (await p.current()).model;
  for (const kind of ["point", "moment"]) {
    p.get(`add-${kind}`).dispatch("click");
    const model = (await p.current()).model;
    p.edit(p.field(`loads.${model.loads.length - 1}.x`), original.length);
  }
  for (const value of ["", "0", "-1", "8"]) p.edit(p.get("length"), value);
  const model = (await p.current()).model;
  assert.equal(model.supports[1].x, 8);
  for (const load of model.loads) {
    if (load.kind === "dist") { assert.equal(load.x1, 0); assert.equal(load.x2, 8); }
    else assert.equal(load.x, 8);
  }
  p.get("preset").value = "pin-pin-udl";
  p.get("preset").dispatch("change");
  p.edit(p.get("length"), "");
  p.edit(p.get("length"), "10");
  assert.equal((await p.current()).model.supports[1].x, 10);
  assert.equal(p.get("download").disabled, false);
});

test("all diagram axes render sample counts beyond JavaScript argument limits", () => {
  const p = page();
  vm.runInContext(`BeamDiag.diagram = () => Array.from({ length: 300000 }, (_, i) => ({ x: i / 299999 * 6, V: i % 2 ? 2000 : -1000, M: i % 2 ? 3000 : -2000, v: i % 2 ? 0.004 : -0.003 }));`, p.ctx);
  p.paths.length = 0;
  p.edit(p.get("divisions"), 4);
  const diagrams = p.paths.filter((path) => path.startsWith("M") && (path.match(/L/g) || []).length >= 299999);
  assert.equal(diagrams.length, 5);
  for (const path of diagrams) assert.doesNotMatch(path, /NaN|Infinity/);
  assert.ok(p.get("deck").textContent.includes("BEGIN BULK"));
  assert.equal(p.get("download").disabled, false);
});
