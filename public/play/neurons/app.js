// The page: the snapshot of the sweep, the model in a worker, the layers,
// steering, the Jacobian lens, the swap, Claude through the visitor's own OpenRouter key,
// and the rooms that a share link opens.
import { createLayers } from "./art.js";
import { joinRoom, newId, roomOfHash } from "./room.js";
import { createTokenizer } from "./tokenizer.js";

const MAX_READS = 1e6;         // reads of the stream of an answer, at most

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function $(id) {
  assert(typeof id === "string" && id.length > 0, "an element id is a name");
  const e = document.getElementById(id);
  assert(e !== null, `the page has an element #${id}`);
  return e;
}

function el(tag, props = {}, ...kids) {
  assert(typeof tag === "string", "a tag is a name");
  assert(props !== null && typeof props === "object", "the props are an object");
  const e = Object.assign(document.createElement(tag), props);
  e.append(...kids);
  return e;
}

function fmt(x, d = 2) {
  assert(typeof x === "number", "fmt formats a number");
  assert(Number.isInteger(d) && d >= 0 && d <= 20, "fmt takes a digit count");
  return (Math.abs(x) >= 100 ? x.toFixed(0) : x.toFixed(d)).replace("-", "−");
}

function show(t) {
  assert(typeof t === "string", "show takes text");
  assert(t.length < 1e6, "a token is short");
  return t.replace(/\n/g, "↵").replace(/\t/g, "⇥");
}

// ---- the snapshot ----
async function loadSnapshot() {
  const [snap, bin] = await Promise.all([
    fetch("snapshot/explored.json").then((r) => r.json()),
    fetch("snapshot/neurons.bin").then((r) => r.arrayBuffer()),
  ]);
  assert(Array.isArray(snap.neurons), "the snapshot lists its neurons");
  assert(bin.byteLength > 0, "the snapshot has neuron statistics");
  return { snap, bin };
}

const { snap, bin } = await loadSnapshot();
const L = snap.meta.layers, F = snap.meta.neurons_per_layer, N = L * F;
const stats = new Float32Array(bin, 0, N * 3);            // [mean, std, max] per neuron
const topIds = new Uint16Array(bin, N * 12, N * 3);       // three peak tokens per neuron
const explored = new Map(snap.neurons.map((n) => [`${n.layer}.${n.index}`, n]));
const per = L * F;

function statAt(l, f, k) {
  assert(Number.isInteger(l) && l >= 0 && l < L, "a layer is in the model");
  assert(Number.isInteger(f) && f >= 0 && f < F, "a neuron is in its layer");
  return stats[(l * F + f) * 3 + k];
}

function mean(l, f) {
  assert(typeof statAt === "function", "the statistics can be read");
  assert(l < L && f < F, "the neuron is in the model");
  return statAt(l, f, 0);
}

function std(l, f) {
  assert(typeof statAt === "function", "the statistics can be read");
  assert(l < L && f < F, "the neuron is in the model");
  return statAt(l, f, 1);
}

function largest(l, f) {
  assert(typeof statAt === "function", "the statistics can be read");
  assert(l < L && f < F, "the neuron is in the model");
  return statAt(l, f, 2);
}

function zOf(l, f, v) {
  assert(typeof v === "number", "a value is a number");
  assert(l < L && f < F, "the neuron is in the model");
  return (v - mean(l, f)) / (std(l, f) || 1);
}

function peakTokens(l, f) {
  assert(l >= 0 && l < L && f >= 0 && f < F, "the neuron is in the model");
  const ids = new Set(Array.from(topIds.subarray((l * F + f) * 3, (l * F + f) * 3 + 3)));
  assert(ids.size >= 1 && ids.size <= 3, "a neuron has one to three peak tokens");
  return [...ids].map((id) => {
    assert(snap.vocab[id] !== undefined, "a peak token is in the vocabulary");
    assert(typeof snap.vocab[id] === "string", "a vocabulary entry is text");
    return snap.vocab[id];
  });
}

function showTotals() {
  assert($("nTotal") instanceof HTMLElement, "the total exists");
  assert($("nTokens") instanceof HTMLElement, "the token count exists");
  assert($("nExplored") instanceof HTMLElement, "the explored count exists");
  assert(N > 0, "the model has neurons");
  assert(snap.meta.tokens > 0, "the sweep read tokens");
  $("nTotal").textContent = N.toLocaleString("en");
  $("nTokens").textContent = `${(snap.meta.tokens / 1e6).toLocaleString("en", { maximumFractionDigits: 1 })} million`;
  $("nExplored").textContent = snap.neurons.length.toLocaleString("en");
}

// ---- state ----
// selected: { layer, index }. live: { text, ids, pieces, record }. lastSteer: { prompt, value, base,
// steered } of the last Generate. busy: the worker runs a call of the page.
let selected = null, live = null, livePos = 0, tokenizer = null, maxTokens = 128, lastSteer = null, busy = false;

function liveValue(p, l, f) {
  assert(live !== null && live.record !== null, "the text has run");
  assert(p >= 0 && p < live.ids.length, "a position is in the text");
  return live.record[p * per + l * F + f];
}

const layers = createLayers($("layers"), L, (layer, index) => select(layer, index));

// ---- the model ----
// The model buttons: Run needs the model, Generate a neuron too, and the lens
// and the swap also a run of your text.
function buttons() {
  assert(typeof busy === "boolean", "busy is a flag");
  assert(selected === null || typeof selected.layer === "number", "a selection is a neuron or nothing");
  $("run").disabled = busy || !tokenizer;
  $("generate").disabled = busy || !tokenizer || !selected;
  $("lens").disabled = $("swap").disabled = busy || !tokenizer || !selected || !live?.record;
}

const worker = new Worker(new URL("worker.js", import.meta.url), { type: "module" });
let onToken = null, onDone = null, onFail = null, onResult = null;

function onWorkerMessage({ data }) {
  assert(typeof setTimeout === "function", "timers exist");
  assert(typeof applyRoomView === "function", "the room view can be applied");
  assert(typeof buttons === "function", "the buttons can be set");
  assert(worker !== null, "the worker exists");
  assert(typeof busy === "boolean", "busy is a flag");
  assert(data !== null && typeof data === "object", "a worker message is an object");
  assert(typeof data.type === "string", "a worker message has a type");
  if (data.type === "progress") {
    $("modelStatus").textContent = `Loading the model: ${(data.bytes / 1e6).toFixed(0)} of ${(data.total / 1e6).toFixed(0)} MB`;
  } else if (data.type === "ready") {
    tokenizer = createTokenizer(data.tokenizer);
    maxTokens = data.maxTokens;
    $("modelStatus").textContent = `The model is ready. It runs in this tab, on the ${data.path === "gpu" ? "GPU (WebGPU)" : "CPU (WebAssembly)"}.`;
    $("load").hidden = true;
    buttons();
  } else if (data.type === "record") {
    onRecord(data);
  } else if (data.type === "token") {
    onToken?.(data.token);
  } else if (data.type === "done") {
    onDone?.();
  } else if (data.type === "lens" || data.type === "swap") {
    onResult?.(data);
  } else if (data.type === "error") {
    $("modelStatus").textContent = `Error: ${data.message}`;
    onFail?.();
    $("load").disabled = !!tokenizer;
    busy = false;
    buttons();
  }
  // The view of the room can need the model, a run or a free worker.
  if (room) setTimeout(applyRoomView);
}

function onRecord(data) {
  assert(data.record instanceof Float32Array || Array.isArray(data.record), "the record is numbers");
  assert(data.type === "record", "the message is a record");
  assert(typeof pickToken === "function", "a token can be picked");
  assert(live.ids.length > 0, "the text has tokens");
  assert(busy === true, "the run held the worker");
  assert(typeof runFromRoom === "boolean", "the flag is set");
  assert(live !== null, "a run was asked for");
  assert(data.record.length === live.ids.length * per, "a value for each neuron at each token");
  live.record = data.record;
  busy = false;
  buttons();
  // A run for the room does not send its token back to the room.
  applying = runFromRoom;
  runFromRoom = false;
  try { pickToken(live.ids.length - 1); } finally { applying = false; }
}

worker.onmessage = onWorkerMessage;

function loadModel() {
  assert(typeof $ === "function", "the page can find elements");
  assert($("load") instanceof HTMLElement, "the load button exists");
  assert($("modelStatus") instanceof HTMLElement, "the status exists");
  assert(tokenizer === null, "no tokenizer yet");
  assert(!tokenizer, "the model is not loaded yet");
  assert(typeof worker.postMessage === "function", "the worker takes messages");
  $("load").disabled = true;
  $("modelStatus").textContent = "Loading the model…";
  worker.postMessage({ type: "load" });
}

// The text that ran goes into the view of the room, so it stays within the
// 2,048 bytes of a view (README.md, Protocol), with 100 bytes for the other fields.
function fitsView(text) {
  assert(typeof text === "string", "the text is a string");
  assert(typeof TextEncoder === "function", "the page can encode text");
  return new TextEncoder().encode(JSON.stringify(text)).length <= 1948;
}

// text: the text of the room, or null for the text in the box.
function runText(text = null) {
  assert(Number.isInteger(maxTokens) && maxTokens > 0, "the text limit is a count");
  assert(typeof tokenizer.encode === "function", "the tokenizer encodes");
  assert(typeof tokenizer.decode === "function", "the tokenizer decodes");
  assert(typeof fitsView === "function", "the view size can be checked");
  assert(text === null || typeof text === "string", "the text is a string or the box");
  assert(tokenizer !== null, "the model is loaded");
  const ids = tokenizer.encode(text ?? $("text").value).slice(0, maxTokens);
  if (text === null) while (ids.length && !fitsView(tokenizer.decode(ids))) ids.pop();
  if (!ids.length) return;
  live = { text: text ?? tokenizer.decode(ids), ids, pieces: ids.map((id) => tokenizer.decode([id])), record: null };
  busy = true;
  buttons();
  worker.postMessage({ type: "run", ids });
}

// ---- your text ----
function neuronValues(p) {
  assert(Number.isInteger(p), "a position is a whole number");
  assert(live.record.length === live.ids.length * per, "a value for each neuron at each token");
  assert(per > 0, "the model has neurons");
  assert(typeof zOf === "function", "z-scores can be found");
  assert(live !== null && live.record, "the text has run");
  assert(p >= 0 && p < live.ids.length, "a position is in the text");
  const zs = new Float32Array(per);
  for (let l = 0; l < L; l++) for (let f = 0; f < F; f++) zs[l * F + f] = zOf(l, f, liveValue(p, l, f));
  return zs;
}

// The strongest neurons of each layer at a token, as the points and the path of the layers.
function layerPoints(zs) {
  assert(zs instanceof Float32Array, "the z-scores are floats");
  assert(F >= 6, "a layer has six neurons");
  assert(typeof explored.has === "function", "explored neurons can be found");
  assert(explored instanceof Map, "explored neurons are a map");
  assert(zs.length === per, "a z-score for each neuron");
  assert(L > 0, "the model has layers");
  const points = [], path = [];
  for (let l = 0; l < L; l++) {
    const best = Array.from({ length: F }, (_, f) => f).sort((a, b) => zs[l * F + b] - zs[l * F + a]).slice(0, 6);
    for (const f of best) points.push({ layer: l, index: f, z: zs[l * F + f], mark: explored.has(`${l}.${f}`) });
    path.push({ layer: l, index: best[0], z: zs[l * F + best[0]] });
  }
  assert(path.length === L, "a path point for each layer");
  return { points, path };
}

function pickToken(p) {
  assert(Number.isInteger(p) && p >= 0, "a position is a whole number");
  assert(live !== null && live.record, "the text has run");
  livePos = p;
  renderTokens();
  assert(p < live.ids.length, "the position is in the text");
  assert(live.pieces.length === live.ids.length, "a piece for each token");
  assert(live.record.length === live.ids.length * per, "a value for each neuron at each token");
  assert(layers !== null, "the layers are drawn");
  assert(typeof tokenizer === "object", "the tokenizer is loaded");
  assert(livePos === p, "the position is kept");
  assert(L > 0 && F > 0, "the model has neurons");
  assert(per === L * F, "a layer has its neurons");
  // The strongest neurons at the token: by z-score, over all layers.
  const zs = neuronValues(p);
  const order = Array.from(zs.keys()).sort((a, b) => zs[b] - zs[a]);
  const { points, path } = layerPoints(zs);
  layers.show(points, path, layers.bins(zs));
  $("layersCaption").textContent = `The neurons at “${show(live.pieces[p])}”. Each rule is a layer, from the first `
    + "at the left. Its six strongest neurons are points, as high as their value stands above their mean in the sweep, in the accent if Claude explored them. "
    + "The path runs through the strongest neuron of each layer. At the right, all the values against the normal density.";
  $("topTitle").hidden = false;
  $("topToken").textContent = show(live.pieces[p]);
  fillList($("top"), order.slice(0, 12).map((i) => neuronItem(Math.floor(i / F), i % F, `z ${fmt(zs[i], 1)}`)));
  if (selected) {
    renderNeuron();
    layers.select({ ...selected, z: zs[selected.layer * F + selected.index] });
  }
  assert(order.length === per, "every neuron is ranked");
  assert(points.length === L * 6, "six points for each layer");
  assert(path.length === L, "a path point for each layer");
  assert(livePos === p, "the position holds");
  assert(typeof $("topToken").textContent === "string", "the token is shown");
  assert(zs.length === per, "a z-score for each neuron");
  assert(live.record !== null, "the record is kept");
  assert(selected === null || selected.layer < L, "the selection is in the model");
  share();
}

function renderTokens() {
  const box = $("tokens");
  assert(box instanceof HTMLElement, "the tokens have a box");
  assert(Array.isArray(live?.pieces) || live === null, "the pieces are a list");
  assert(selected === null || selected.index < F, "the selection is in its layer");
  assert(livePos < 1e6, "the position is small");
  assert(typeof show === "function", "tokens can be shown");
  assert(livePos >= 0, "the position is not negative");
  if (!live?.record) { box.replaceChildren(); return; }
  const s = selected;
  const scale = s ? Math.max(largest(s.layer, s.index), 1e-6) : 1;
  box.replaceChildren(...live.pieces.map((piece, p) => {
    assert(typeof piece === "string", "a piece is text");
    assert(p < live.ids.length, "a piece has a position");
    const b = el("button", { className: "tok" + (p === livePos ? " at" : ""), textContent: show(piece) });
    if (s) {
      const v = liveValue(p, s.layer, s.index);
      b.style.setProperty("--a", Math.max(0, Math.min(1, v / scale)).toFixed(3));
      b.title = `value ${fmt(v)}`;
    }
    b.onclick = () => pickToken(p);
    return b;
  }));
}

// ---- neurons ----
function neuronItem(l, f, extra) {
  assert(Number.isInteger(l) && l >= 0 && l < L, "a layer is in the model");
  assert(Number.isInteger(f) && f >= 0 && f < F, "a neuron is in its layer");
  const n = explored.get(`${l}.${f}`);
  const b = el("button", { className: "item" + (n ? " known" : ""), tabIndex: -1 },
    el("span", { className: "id", textContent: `${l}.${f}` }),
    el("span", { className: "what", textContent: n ? n.label : peakTokens(l, f).map((t) => `“${show(t)}”`).join(" ") }),
    extra ? el("span", { className: "z", textContent: extra }) : "");
  b.onclick = () => select(l, f);
  return el("li", {}, b);
}

// A neuron list is one Tab stop (a roving tabindex): Up, Down, Home and End move the focus
// in the list, and the row that has the focus last is the Tab stop.
function fillList(list, items) {
  assert(items.length < 1e5, "the list is not huge");
  assert(items.every((i) => i instanceof HTMLElement), "an item is an element");
  assert(Array.isArray(items), "the items are a list");
  assert(list instanceof HTMLElement, "a list is an element");
  list.replaceChildren(...items);
  if (items.length) items[0].firstChild.tabIndex = 0;
  return list;
}

function rowOf(e) {
  assert(e.target !== null, "an event has a target");
  assert(typeof e.type === "string", "an event has a type");
  return e.target.closest?.(".neuronlist .item");
}

function rowsOf(b) {
  assert(b instanceof Element, "a row is an element");
  assert(b.closest(".neuronlist") !== null, "a row is in a list");
  return [...b.closest(".neuronlist").querySelectorAll(".item")];
}

function onFocusIn(e) {
  const b = rowOf(e);
  if (b) {
    for (const r of rowsOf(b)) {
      assert(r instanceof HTMLElement, "a row is an element");
      r.tabIndex = r === b ? 0 : -1;
    }
  }
}

function onListKey(e) {
  const b = rowOf(e);
  if (!b || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
  const rows = rowsOf(b), i = rows.indexOf(b);
  assert(i >= 0, "the row is in its list");
  const to = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: rows.length - 1 }[e.key];
  if (to === undefined) return;
  e.preventDefault();
  rows[Math.max(0, Math.min(rows.length - 1, to))].focus();
}

function contextLine(tokens, values, peak, scale) {
  assert(Array.isArray(tokens), "the tokens are a list");
  assert(scale > 0, "the scale is positive");
  assert(Number.isInteger(peak), "the peak is a whole number");
  assert(typeof fmt === "function", "values can be formatted");
  assert(tokens.length === values.length, "a value for each token");
  assert(peak >= 0 && peak < tokens.length, "the peak is a token");
  return el("li", {}, el("span", { className: "v", textContent: fmt(values[peak]) }),
    el("span", { className: "ctx" }, ...tokens.map((t, i) => {
      assert(typeof t === "string", "a token is text");
      assert(typeof values[i] === "number", "a value is a number");
      const s = el("span", { textContent: show(t), title: fmt(values[i]) });
      s.style.setProperty("--a", Math.max(0, Math.min(1, values[i] / scale)).toFixed(3));
      if (i === peak) s.className = "peak";
      return s;
    })));
}

function select(layer, index, scroll = true) {
  assert(Number.isInteger(layer) && layer >= 0 && layer < L, "a layer is in the model");
  assert(Number.isInteger(index) && index >= 0 && index < F, "a neuron is in its layer");
  selected = { layer, index };
  assert(selected.layer === layer, "the layer is kept");
  assert(selected.index === index, "the neuron is kept");
  assert(typeof layers.select === "function", "the layers can select");
  assert(layer * F + index < N, "the neuron is in the sweep");
  assert(largest(layer, index) >= 0, "a largest value is not negative");
  assert(std(layer, index) >= 0, "a deviation is not negative");
  assert(livePos >= 0, "the position is not negative");
  assert(typeof scroll === "boolean", "scroll is a flag");
  if (!room) location.hash = `${layer}.${index}`;
  renderNeuron();
  renderTokens();
  layers.select({ layer, index, z: live?.record ? zOf(layer, index, liveValue(livePos, layer, index)) : zOf(layer, index, largest(layer, index)) });
  buttons();
  const box = document.querySelector(".neuron").getBoundingClientRect();
  if (scroll && (box.top < 0 || box.top > innerHeight)) document.querySelector(".neuron").scrollIntoView({ block: "start" });
  share();
}

// The table of the steered continuations of an explored neuron.
function steerTable(n) {
  assert(typeof n.max === "number", "a neuron has a largest value");
  assert(Array.isArray(snap.meta.prompts), "the prompts are a list");
  assert(Array.isArray(snap.meta.baseline), "the baselines are a list");
  assert(typeof el === "function", "elements can be made");
  assert(Array.isArray(n.steer), "a neuron has steered continuations");
  assert(snap.meta.prompts.length === snap.meta.baseline.length, "a baseline for each prompt");
  return el("table", {},
    el("thead", {}, el("tr", {}, el("th", { textContent: "Value" }), el("th", { textContent: "Continuation" }))),
    el("tbody", {}, ...snap.meta.prompts.map((p, i) => el("tr", {}, el("td", { textContent: "none" }),
      el("td", {}, el("b", { textContent: p }), document.createTextNode(snap.meta.baseline[i])))),
    ...n.steer.map((s) => el("tr", {}, el("td", { textContent: `${s.strength} × ${fmt(n.max)}` }),
      el("td", {}, el("b", { textContent: s.prompt }), document.createTextNode(s.text))))));
}

function renderNeuron() {
  assert(selected !== null, "a neuron is selected");
  const { layer, index } = selected, n = explored.get(`${layer}.${index}`);
  $("nId").textContent = `Layer ${layer} · neuron ${index}`;
  $("nLabel").textContent = n ? n.label : "Not explored";
  $("nDesc").textContent = n ? n.description
    : `Claude did not explore this neuron. Its strongest tokens in the sweep: ${peakTokens(layer, index).map((t) => `“${show(t)}”`).join(", ")}. Run your own text, steer it, or ask Claude about it.`;
  $("nStats").textContent = `Largest value ${fmt(largest(layer, index))}, mean ${fmt(mean(layer, index), 3)}, `
    + `standard deviation ${fmt(std(layer, index), 3)} over the sweep.`;
  if (live?.record) {
    $("nLive").replaceChildren(el("h3", { textContent: "On your text" }),
      el("ol", { className: "contexts" }, contextLine(live.pieces,
        live.pieces.map((_, p) => liveValue(p, layer, index)), livePos, Math.max(largest(layer, index), 1e-6))));
  } else $("nLive").replaceChildren();
  const scale = n ? n.max : 1;
  $("nExamples").replaceChildren(...(n ? n.examples.map((e) => contextLine(e.tokens, e.values, e.peak, scale))
    : [el("li", { className: "note hint", textContent: "The snapshot keeps contexts for the explored neurons only." })]));
  $("nSteer").replaceChildren(...(n ? [steerTable(n)] : []));
  $("lensOut").replaceChildren();
  $("swapOut").replaceChildren();
  lensShown = false;
  updateSteerOut();
  renderNote();
}

// ---- steering ----
function updateSteerOut() {
  assert($("steerValue") instanceof HTMLElement, "the steer value exists");
  assert($("steerOut") instanceof HTMLElement, "the steer output exists");
  const k = Number($("steerValue").value);
  assert(Number.isFinite(k), "the steer value is a number");
  assert(selected === null || selected.layer < L, "a selection is in the model");
  $("steerOut").textContent = selected ? `${k.toFixed(1)} × ${fmt(largest(selected.layer, selected.index))} = ${fmt(k * largest(selected.layer, selected.index))}` : "";
}

function generate(ids, steer, out) {
  assert(out instanceof HTMLElement, "the output is an element");
  assert(tokenizer !== null, "the model is loaded");
  assert(ids.every(Number.isInteger), "the ids are whole numbers");
  assert(typeof worker.postMessage === "function", "the worker takes messages");
  assert(Array.isArray(steer), "the steer is a list");
  assert(ids.length > 0, "there are tokens to continue");
  return new Promise((resolve, reject) => {
    const got = [];
    onToken = (t) => {
      assert(Number.isInteger(t), "a token is an id");
      assert(Array.isArray(got), "the tokens are a list");
      got.push(t); out.textContent = tokenizer.decode(got);
    };
    onDone = () => {
      assert(got.length > 0, "the model gave a token");
      resolve(tokenizer.decode(got));
    };
    onFail = reject;
    worker.postMessage({ type: "generate", ids, steer, n: 32 });
  });
}

async function onGenerate() {
  assert(typeof generate === "function", "generation is defined");
  assert(!busy, "no call is running");
  assert(Number.isFinite(Number($("steerValue").value)), "the steer value is a number");
  assert(typeof $("steerPrompt").value === "string", "the prompt is text");
  assert(selected !== null, "a neuron is selected");
  assert(tokenizer !== null, "the model is loaded");
  const { layer, index } = selected;
  const value = Number($("steerValue").value) * largest(layer, index);
  const prompt = $("steerPrompt").value;
  const ids = tokenizer.encode(prompt).slice(0, maxTokens);
  if (!ids.length) return;
  busy = true;
  buttons();
  $("genBase").textContent = $("genSteer").textContent = "";
  try {
    const base = await generate(ids, [], $("genBase"));
    const steered = await generate(ids, [{ layer, index, value }], $("genSteer"));
    lastSteer = { layer, index, prompt, value, base, steered };
    busy = false;
    buttons();
  } catch {}
}

// ---- the Jacobian lens and the swap ----
// Posts a lens or swap call. Resolves with its result, or with null if the
// selected neuron or token changed before it came.
function probe(message) {
  assert(typeof message === "object" && message !== null, "a probe is an object");
  assert(live !== null && live.record !== null, "the text has run");
  assert(livePos >= 0 && livePos < live.ids.length, "the token is in the text");
  assert(!busy, "no call is running");
  assert(message.type === "lens" || message.type === "swap", "a probe is a lens or a swap");
  assert(selected !== null, "a neuron is selected");
  const at = `${selected.layer}.${selected.index}@${livePos}`;
  busy = true;
  buttons();
  return new Promise((resolve) => {
    onResult = (data) => {
      assert(data.type === message.type, "the result answers the probe");
      assert(typeof resolve === "function", "the probe can resolve");
      busy = false;
      buttons();
      resolve(at === `${selected.layer}.${selected.index}@${livePos}` ? data : null);
    };
    onFail = () => resolve(null);
    worker.postMessage(message);
  });
}

// The indices of the n largest xs by key.
function topBy(xs, n, key) {
  assert(xs.length >= 0, "the list has a length");
  assert(typeof xs.keys === "function", "the list has keys");
  assert(Number.isInteger(n) && n >= 0, "n is a count");
  assert(typeof key === "function", "the key is a function");
  return Array.from(xs.keys()).sort((a, b) => key(xs[b]) - key(xs[a])).slice(0, n);
}

function probabilities(logits) {
  assert(logits.length > 0, "there are logits");
  assert(typeof logits[0] === "number", "logits are numbers");
  let mx = -Infinity, sum = 0;
  for (const x of logits) mx = Math.max(mx, x);
  const p = logits.map((x) => Math.exp(x - mx));
  for (const x of p) sum += x;
  assert(sum >= 1, "the largest logit gives a weight of one");
  return p.map((x) => x / sum);
}

function tokenRows(ids, ...columns) {
  assert(columns.every((c) => typeof c === "function"), "a column is a function");
  assert(tokenizer !== null, "the model is loaded");
  assert(ids.length <= 64, "the table is short");
  assert(Array.isArray(ids), "the ids are a list");
  assert(columns.length > 0, "there is a column");
  return ids.map((id) => el("tr", {}, el("td", { textContent: `“${show(tokenizer.decode([id]))}”` }),
    ...columns.map((c) => el("td", { textContent: c(id) }))));
}

// One column of the lens: the tokens that the neuron raises or lowers.
function lensColumn(d, title, ids) {
  assert(d.dLogits.length > 0, "the lens has logits");
  assert(ids.every((id) => id < d.dLogits.length), "a token is in the vocabulary");
  assert(typeof title === "string", "a column has a title");
  assert(ids.length > 0, "a column has tokens");
  return el("table", { className: "probe" },
    el("thead", {}, el("tr", {}, el("th", { textContent: title }), el("th", { textContent: "∂ logit" }))),
    el("tbody", {}, ...tokenRows(ids, (id) => fmt(d.dLogits[id], 3))));
}

// fromRoom: the room asked for the lens, so the page does not send it back.
async function computeLens(fromRoom) {
  assert(typeof fromRoom === "boolean", "fromRoom is a flag");
  assert(livePos < live.ids.length, "the token is in the text");
  assert(tokenizer !== null, "the model is loaded");
  assert(typeof probe === "function", "the probe is defined");
  assert(selected !== null, "a neuron is selected");
  assert(live !== null && live.record, "the text has run");
  const { layer, index } = selected;
  // The step: the neuron's standard deviation in the sweep (README, Lens and swap).
  const h = std(layer, index) || 1;
  const d = await probe({ type: "lens", ids: live.ids, pos: livePos, layer, index, h });
  if (!d) return;
  const later = topBy(d.dNeurons.subarray((layer + 1) * F), 10, Math.abs).map((i) => i + (layer + 1) * F);
  $("lensOut").replaceChildren(
    el("p", { className: "hint", textContent: `At “${show(live.pieces[livePos])}” the neuron's value is ${fmt(d.value, 3)}. `
      + `The derivatives are central differences with a step of ${fmt(h, 3)}, its standard deviation in the sweep.` }),
    el("div", { className: "pair" }, lensColumn(d, "Raises", topBy(d.dLogits, 8, (x) => x)), lensColumn(d, "Lowers", topBy(d.dLogits, 8, (x) => -x))),
    ...(later.length ? [el("h3", { textContent: "Later neurons it moves most" }),
      fillList(el("ol", { className: "neuronlist" }), later.map((i) => neuronItem(Math.floor(i / F), i % F, `∂ ${fmt(d.dNeurons[i], 3)}`)))] : []));
  lensShown = true;
  if (!fromRoom) share();
}

// A table of the next-token probabilities of one text, before and after the swap.
function swapTable(title, r) {
  assert(r.logits.length > 0, "the swap has logits");
  assert(typeof tokenizer.decode === "function", "the tokenizer decodes");
  assert(typeof title === "string", "a table has a title");
  assert(r.logits.length === r.swapped.length, "the logits match");
  const before = probabilities(r.logits), after = probabilities(r.swapped);
  const ids = [...new Set([...topBy(before, 5, (x) => x), ...topBy(after, 5, (x) => x)])].sort((a, b) => after[b] - after[a]);
  const pct = (p) => {
    assert(typeof p === "number", "a probability is a number");
    assert(p >= 0 && p <= 1.000001, "a probability is a fraction");
    return `${(100 * p).toFixed(1)} %`;
  };
  return el("table", { className: "probe" },
    el("thead", {}, el("tr", {}, el("th", { textContent: title }), el("th", { textContent: "Before" }), el("th", { textContent: "After" }))),
    el("tbody", {}, ...tokenRows(ids, (id) => pct(before[id]), (id) => pct(after[id]))));
}

async function onSwap() {
  assert(tokenizer !== null, "the model is loaded");
  assert(livePos < live.ids.length, "the token is in the text");
  assert(typeof $("swapText").value === "string", "the other text is text");
  assert(!busy, "no call is running");
  assert(selected !== null, "a neuron is selected");
  assert(live !== null && live.record, "the text has run");
  const { layer, index } = selected;
  const other = tokenizer.encode($("swapText").value).slice(0, maxTokens);
  if (!other.length) return;
  const d = await probe({ type: "swap", a: live.ids, pos: livePos, b: other, layer, index });
  if (!d) return;
  $("swapOut").replaceChildren(
    el("p", { className: "hint", textContent: `The value ${fmt(d.a.value, 3)} at “${show(live.pieces[livePos])}” of your text and `
      + `the value ${fmt(d.b.value, 3)} at “${show(tokenizer.decode(other.slice(-1)))}” of the other text change places. `
      + "The next-token probabilities before and after:" }),
    el("div", { className: "pair" }, swapTable("Your text", d.a), swapTable("Other text", d.b)));
}

// ---- search ----
function search() {
  assert($("search") instanceof HTMLElement, "the search box exists");
  assert($("results") instanceof HTMLElement, "the results list exists");
  assert(snap.neurons.length > 0, "the snapshot has neurons");
  assert(L > 0 && F > 0, "the model has neurons");
  const q = $("search").value.trim();
  const ql = q.toLowerCase();
  let items;
  const id = /^(\d+)\s*[.:,\s]\s*(\d+)$/.exec(q);
  if (id && +id[1] < L && +id[2] < F) items = [[+id[1], +id[2]]];
  else if (!q) items = snap.neurons.map((n) => [n.layer, n.index]);
  else {
    items = snap.neurons.filter((n) => (n.label + " " + n.description).toLowerCase().includes(ql)).map((n) => [n.layer, n.index]);
    // Then any neuron whose peak tokens hold the query as a whole token.
    for (let l = 0; l < L && items.length < 200; l++) for (let f = 0; f < F; f++) {
      if (!explored.has(`${l}.${f}`) && peakTokens(l, f).some((t) => t.trim().toLowerCase() === ql)) items.push([l, f]);
    }
  }
  assert(Array.isArray(items), "the search found a list");
  fillList($("results"), items.slice(0, 200).map(([l, f]) => neuronItem(l, f)));
}

// ---- Ask Claude ----
// The lines of the evidence about the explored neuron n.
function exploredEvidence(n) {
  assert(typeof n.label === "string", "a neuron has a label");
  assert(typeof n.description === "string", "a neuron has a description");
  assert(typeof n.max === "number", "a neuron has a largest value");
  assert(Array.isArray(snap.meta.baseline), "the baselines are a list");
  assert(Array.isArray(n.examples), "an explored neuron has contexts");
  assert(Array.isArray(n.steer), "an explored neuron has steered continuations");
  const mark = (tokens, peak) => tokens.map((t, i) => (i === peak ? `[[${t}]]` : t)).join("");
  const lines = [`Earlier label: ${n.label}. ${n.description}`, "", "Top contexts (value, then the text with the peak token in [[ ]]):"];
  for (const e of n.examples) lines.push(`${fmt(e.values[e.peak])}  ${JSON.stringify(mark(e.tokens, e.peak))}`);
  lines.push("", "Steering (the neuron set to the value at every position; greedy continuation):");
  snap.meta.prompts.forEach((p, i) => lines.push(`unsteered: ${JSON.stringify(p)} -> ${JSON.stringify(snap.meta.baseline[i])}`));
  for (const s of n.steer) lines.push(`value ${fmt(s.strength * n.max)}: ${JSON.stringify(s.prompt)} -> ${JSON.stringify(s.text)}`);
  return lines;
}

function evidence() {
  assert(typeof exploredEvidence === "function", "the evidence helper exists");
  assert(selected.layer < L && selected.index < F, "the neuron is in the model");
  assert(typeof snap.meta.tokens === "number", "the sweep counts tokens");
  assert(typeof lastSteer === "object", "the last steer is an object or nothing");
  assert(selected !== null, "a neuron is selected");
  const { layer, index } = selected, n = explored.get(`${layer}.${index}`);
  const lines = [
    `Model: SmolLM2-135M, ${L} layers, ${F} MLP neurons per layer. A neuron is one element of silu(gate_proj(x)) * up_proj(x), the input of down_proj.`,
    `Neuron: layer ${layer}, index ${index}. Over ${snap.meta.tokens} tokens of FineWeb-Edu and Cosmopedia: mean ${fmt(mean(layer, index), 4)}, standard deviation ${fmt(std(layer, index), 4)}, largest value ${fmt(largest(layer, index))}.`,
    `Most frequent tokens at its top contexts: ${peakTokens(layer, index).map((t) => JSON.stringify(t)).join(", ")}.`,
  ];
  if (n) lines.push(...exploredEvidence(n));
  if (live?.record) {
    lines.push("", "The visitor's text, each token with this neuron's value:");
    lines.push(live.pieces.map((t, p) => `${JSON.stringify(t)}:${fmt(liveValue(p, layer, index))}`).join(" "));
  }
  if (lastSteer && lastSteer.layer === layer && lastSteer.index === index) {
    lines.push("", `The visitor steered it to ${fmt(lastSteer.value)}: ${JSON.stringify(lastSteer.prompt)}`,
      `unsteered -> ${JSON.stringify(lastSteer.base)}`, `steered -> ${JSON.stringify(lastSteer.steered)}`);
  }
  assert(lines.length >= 3, "the evidence has its header");
  return lines.join("\n");
}

// Reads the stream of the answer into the box, one paragraph for each blank line.
async function streamAnswer(res, answer) {
  assert(typeof res.ok === "boolean", "the answer says if it is ok");
  assert(typeof TextDecoderStream === "function", "the page can decode streams");
  assert(res.body !== null, "the answer has a body");
  assert(answer instanceof HTMLElement, "the answer goes in an element");
  const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
  let buf = "", text = "";
  for (let reads = 0; reads < MAX_READS; reads++) {
    const { done, value } = await reader.read();
    if (done) return;
    buf += value;
    const lines = buf.split("\n");
    buf = lines.pop();
    for (const line of lines) {
      if (!line.startsWith("data: ") || line === "data: [DONE]") continue;
      const msg = JSON.parse(line.slice(6));
      if (msg.error) throw new Error(msg.error.message);
      text += msg.choices?.[0]?.delta?.content ?? "";
      answer.replaceChildren(...text.split(/\n{2,}/).map((p) => el("p", { textContent: p })));
    }
  }
  throw new Error("the answer did not end");
}

async function onAsk() {
  assert($("key") instanceof HTMLElement, "the key box exists");
  assert($("answer") instanceof HTMLElement, "the answer box exists");
  assert($("ask") instanceof HTMLElement, "the ask button exists");
  assert(typeof fetch === "function", "the page can fetch");
  const key = $("key").value.trim(), answer = $("answer");
  if (!selected) { answer.textContent = "Select a neuron first."; return; }
  if (!key) { answer.textContent = "Put your OpenRouter key in first."; return; }
  try { sessionStorage.setItem("openrouter-key", key); } catch { /* no storage */ }
  $("ask").disabled = true;
  answer.textContent = "";
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${key}`, "Content-Type": "application/json", "X-Title": "Neurons" },
      body: JSON.stringify({
        model: $("askModel").value, stream: true, max_tokens: 1200,
        messages: [
          { role: "system", content: "You interpret neurons of a small language model from evidence. Be concrete and brief. Say what the evidence does not show." },
          { role: "user", content: `${evidence()}\n\nQuestion: ${$("question").value}` },
        ],
      }),
    });
    if (!res.ok) throw new Error(`OpenRouter: HTTP ${res.status} ${(await res.text()).slice(0, 300)}`);
    await streamAnswer(res, answer);
  } catch (e) {
    answer.textContent = String(e.message || e);
  } finally {
    $("ask").disabled = false;
  }
}

// ---- rooms ----
// In a room, the view (the neuron, the text that ran, the token and the lens)
// and the notes on neurons are the same for all members (README.md, Rooms).
// The last view that comes to the relay wins. A note changes only from the
// version that its writer saw.
// room: the joined room. roomReady: the first reply of the room came. roomView: the view of the
// room, as the relay last gave it. roomViewBy: the member who sent it. roomText: the text of the
// room that the page last put in the box. roomNotes: "layer.index" -> { neuron, text, by, version }.
// applying: the page applies the view of the room, so it does not send it back. runFromRoom: the
// run in the worker is for the view of the room. lensShown: the lens of the selected neuron and
// token is on the page. drafts: "layer.index" -> { text, base } of a note that the member did not save.
let room = null, roomId = null, roomReady = false, roomView = null, roomViewBy = "", roomText = null;
let roomNotes = new Map(), applying = false, runFromRoom = false, lensShown = false;
let noteFor = null, noteBase = 0, noteDirty = false;
const ROOM_URL = new URL("room", location.href).href, drafts = new Map();

function share() {
  assert(typeof roomReady === "boolean", "the ready flag is set");
  assert(typeof applying === "boolean", "the applying flag is set");
  assert(typeof lensShown === "boolean", "the lens flag is set");
  assert(livePos >= 0, "the position is not negative");
  if (!room || !roomReady || applying || !selected) return;
  // A page with no run keeps the text, the token and the lens of the room.
  const own = !!live?.record, v = roomView;
  // The view that this page sends is the view of the room until a reply comes.
  roomView = { layer: selected.layer, index: selected.index, text: own ? live.text : v?.text ?? null,
    token: own ? livePos : v?.token ?? null, lens: own ? lensShown : !!v?.lens };
  assert(typeof roomView.layer === "number", "a view names a layer");
  room.setView(roomView);
}

// Makes the page show the view of the room, as far as it can now. The worker
// messages call it again, so a run or a lens that must wait comes later.
function applyRoomView() {
  assert(typeof applying === "boolean", "the applying flag is set");
  assert(typeof lensShown === "boolean", "the lens flag is set");
  assert(typeof runFromRoom === "boolean", "the run flag is set");
  assert(roomView === null || typeof roomView === "object", "a view is an object or nothing");
  const v = roomView;
  if (!v || applying) return;
  applying = true;
  try {
    const ok = (x, n) => {
      assert(typeof n === "number" && n > 0, "a bound is positive");
      assert(typeof x !== "function", "a view field is data");
      return Number.isInteger(x) && x >= 0 && x < n;
    };
    if (ok(v.layer, L) && ok(v.index, F) && (selected?.layer !== v.layer || selected?.index !== v.index)) select(v.layer, v.index, false);
    if (typeof v.text !== "string") return;
    if (live?.text !== v.text) {
      if (roomText !== v.text) { roomText = v.text; $("text").value = v.text; }
      if (tokenizer && !busy) { runFromRoom = true; runText(v.text); }
      return;
    }
    if (!live.record) return;
    if (ok(v.token, live.ids.length) && v.token !== livePos) pickToken(v.token);
    if (v.lens && !lensShown && !busy) computeLens(true);
  } finally {
    applying = false;
  }
}

function roomName() {
  assert($("roomName") instanceof HTMLElement, "the name box exists");
  assert(typeof $("roomName").value === "string", "the name is text");
  let name = $("roomName").value.replace(/[\u0000-\u001f\u007f]/g, "").trim() || "Visitor";
  while (new TextEncoder().encode(name).length > 32) name = name.slice(0, -1);
  assert(name.length > 0, "a member has a name");
  return name;
}

function showPeople(s) {
  assert($("roomPeople") instanceof HTMLElement, "the people line exists");
  assert(s.members.every((m) => typeof m.name === "string"), "a member has a name");
  assert(typeof roomViewBy === "string", "the author is text");
  assert(Array.isArray(s.members), "a room state lists its members");
  assert(typeof s.expires === "number", "a room state says when it ends");
  const names = s.members.map((m) => (m.you ? `${m.name} (you)` : m.name));
  const ends = new Date(s.expires * 1000).toLocaleString("en-GB", { dateStyle: "long", timeStyle: "short" });
  $("roomPeople").textContent = `In the room: ${names.join(", ")}. The room ends on ${ends}.`
    + (roomViewBy ? ` The last change of the view was by ${roomViewBy}.` : "");
}

function renderRoomNotes() {
  assert($("roomNotes") instanceof HTMLElement, "the notes list exists");
  assert($("roomNotesTitle") instanceof HTMLElement, "the notes title exists");
  assert(typeof L === "number", "the layers are counted");
  assert(roomNotes instanceof Map, "the notes are a map");
  const notes = [...roomNotes.values()].map((n) => ({ ...n, at: n.neuron.split(".").map(Number) }))
    .filter((n) => n.at[0] < L && n.at[1] < F).sort((a, b) => a.at[0] - b.at[0] || a.at[1] - b.at[1]);
  $("roomNotesTitle").hidden = !notes.length;
  fillList($("roomNotes"), notes.map((n) => {
    assert(n.at.length === 2, "a note names a layer and a neuron");
    assert(typeof n.text === "string", "a note is text");
    const li = neuronItem(n.at[0], n.at[1], n.by);
    li.querySelector(".what").textContent = n.text.split("\n")[0];
    return li;
  }));
}

// The note box of the selected neuron. A note that the member edits stays as
// it is when the note of the room changes; the save then gives a conflict.
function renderNote() {
  assert($("noteBox") instanceof HTMLElement, "the note box exists");
  assert(drafts instanceof Map, "the drafts are a map");
  assert(roomNotes instanceof Map, "the notes are a map");
  assert(typeof noteDirty === "boolean", "the dirty flag is set");
  $("noteBox").hidden = !room || !selected;
  if ($("noteBox").hidden) return;
  const key = `${selected.layer}.${selected.index}`, n = roomNotes.get(key);
  if (noteFor !== key) {
    if (noteDirty) drafts.set(noteFor, { text: $("note").value, base: noteBase });
    const d = drafts.get(key);
    drafts.delete(key);
    noteFor = key;
    noteDirty = !!d;
    $("noteStatus").textContent = d ? "Your note is not saved." : "";
    if (d) { $("note").value = d.text; noteBase = d.base; }
  }
  if (noteDirty) return;
  $("note").value = n?.text ?? "";
  noteBase = n?.version ?? 0;
  $("noteStatus").textContent = n ? `Note by ${n.by}.` : "";
}

function saveNote() {
  assert(drafts instanceof Map, "the drafts are a map");
  assert($("note") instanceof HTMLElement, "the note box exists");
  assert(Number.isInteger(noteBase) && noteBase >= 0, "the base is a version");
  assert(room !== null, "the member is in a room");
  assert(noteFor !== null, "a note box is open");
  const text = $("note").value.trim();
  if (new TextEncoder().encode(text).length > 500) { $("noteStatus").textContent = "The note is too long: 500 bytes at most."; return; }
  room.note(noteFor, text, noteBase);
  noteDirty = false;
  $("noteStatus").textContent = "Saving…";
}

function onConflict(neuron, text, s) {
  assert(typeof text === "string", "the text is text");
  assert(room !== null, "the member is in a room");
  assert(noteDirty === false || noteFor !== null, "a dirty note has a neuron");
  assert(typeof neuron === "string", "a conflict names a neuron");
  assert(Array.isArray(s.notes), "a conflict comes with the notes");
  const theirs = s.notes.find((n) => n.neuron === neuron);
  const said = theirs ? `${theirs.by} changed this note before your save came. Their note: “${theirs.text}”.`
    : "Someone deleted this note before your save came.";
  keepNote(neuron, text, theirs?.version ?? 0, `${said} Your text is still in the box. Save again to put it in place of theirs.`);
}

// Keeps the text of a note that was not saved: in the box, or as a draft when
// another neuron is selected now.
function keepNote(neuron, text, base, message) {
  assert(typeof text === "string", "the text is text");
  assert(Number.isInteger(base) && base >= 0, "the base is a version");
  assert(drafts instanceof Map, "the drafts are a map");
  assert(typeof neuron === "string", "a note names a neuron");
  assert(typeof message === "string", "a note has a message");
  if (neuron !== noteFor) {
    if (!drafts.has(neuron)) drafts.set(neuron, { text, base });
    $("roomStatus").textContent = `Your note on ${neuron} was not saved. ${message}`;
    return;
  }
  $("note").value = text;
  noteDirty = true;
  noteBase = base;
  $("noteStatus").textContent = message;
}

function onState(s) {
  assert(typeof roomViewBy === "string", "the author is text");
  assert(roomNotes instanceof Map, "the notes are a map");
  assert($("roomStatus") instanceof HTMLElement, "the status exists");
  assert(s !== null && typeof s === "object", "a room state is an object");
  assert(room !== null, "the member is in a room");
  roomReady = true;
  $("roomStatus").textContent = "";
  if (s.view_by !== undefined) roomViewBy = s.view_by;
  showPeople(s);
  if (s.notes) {
    roomNotes = new Map(s.notes.map((n) => [n.neuron, n]));
    renderRoomNotes();
    renderNote();
  }
  // A view of this page that waits to go out is newer than the view in the reply.
  if (s.view === undefined || room.viewPending()) return;
  if (!s.view) { share(); return; }       // a new room takes the view of this page
  try { roomView = JSON.parse(s.view); } catch { roomView = null; }
  applyRoomView();
}

function onRoomError(e) {
  assert(typeof exitRoom === "function", "a room can be left");
  assert(typeof keepNote === "function", "a note can be kept");
  assert($("roomStatus") instanceof HTMLElement, "the status exists");
  assert(e !== null && typeof e === "object", "a room error is an object");
  assert(typeof e.op === "string" || e.op === undefined, "an error names its operation");
  if (["gone", "full", "exists"].includes(e.error)) exitRoom(e.message);
  else if (e.op === "note") keepNote(e.fields.neuron, e.fields.text, e.fields.base, e.message);
  else $("roomStatus").textContent = e.message || "The room gave an error.";
}

function enterRoom(id, create) {
  assert(typeof ROOM_URL === "string", "the room has a url");
  assert($("roomBox") instanceof HTMLElement, "the room box exists");
  assert($("roomLink") instanceof HTMLElement, "the link box exists");
  assert(typeof joinRoom === "function", "rooms can be joined");
  assert(typeof newId === "function", "ids can be made");
  assert(typeof id === "string" && id.length > 0, "a room has an id");
  assert(typeof create === "boolean", "create is a flag");
  roomId = id;
  roomView = roomText = null;
  roomReady = false;
  history.replaceState(null, "", `#room=${id}`);
  $("roomLink").value = `${location.origin}${location.pathname}#room=${id}`;
  $("roomBox").hidden = false;
  $("share").hidden = true;
  $("roomStatus").textContent = create ? "Making the room…" : "Coming into the room…";
  room = joinRoom({
    url: ROOM_URL, room: id, member: newId(9), name: roomName, secret: () => $("key").value.trim(), create,
    onState, onConflict, onError: onRoomError,
  });
  renderNote();
}

function exitRoom(message = "") {
  assert($("roomBox") instanceof HTMLElement, "the room box exists");
  assert($("share") instanceof HTMLElement, "the share button exists");
  assert(drafts instanceof Map, "the drafts are a map");
  assert(typeof history.replaceState === "function", "the history can change");
  assert(typeof message === "string", "the message is text");
  room?.leave();
  room = roomId = roomView = null;
  roomViewBy = "";
  roomReady = false;
  roomNotes = new Map();
  drafts.clear();
  noteFor = null;
  noteDirty = false;
  $("roomBox").hidden = true;
  $("share").hidden = false;
  $("roomNotes").replaceChildren();
  $("roomStatus").textContent = message;
  history.replaceState(null, "", selected ? `#${selected.layer}.${selected.index}` : location.pathname);
  renderNote();
}

async function copyLink() {
  assert(typeof navigator === "object", "the page has a navigator");
  assert($("roomStatus") instanceof HTMLElement, "the status exists");
  assert(room !== null, "the member is in a room");
  assert($("roomLink").value.length > 0, "the room has a link");
  assert(roomId !== null, "the member is in a room");
  try { await navigator.clipboard.writeText($("roomLink").value); $("roomStatus").textContent = "The link is copied."; }
  catch { $("roomLink").select(); }
}

function onHashChange() {
  assert(typeof location.hash === "string", "the hash is text");
  assert(typeof enterRoom === "function", "a room can be entered");
  assert(typeof exitRoom === "function", "a room can be left");
  const id = roomOfHash(location.hash);
  assert(id === null || id.length === 22, "a room id has 22 characters");
  if (id && id !== roomId) { exitRoom(); enterRoom(id, false); }
}

// A heading link scrolls only: the hash keeps the neuron or the room.
function onDocumentClick(e) {
  assert(e.target !== null, "a click has a target");
  assert(typeof e.preventDefault === "function", "a click can be stopped");
  assert(typeof e.metaKey === "boolean", "a click says about the meta key");
  assert(typeof e.button === "number", "a click has a button");
  const link = e.target.closest?.("h2 a");
  if (!link || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  link.parentElement.scrollIntoView({ block: "start" });
}

// ---- start ----
function idleLayers() {
  assert(L > 0, "the model has layers");
  assert($("layersCaption") instanceof HTMLElement, "the caption exists");
  assert(typeof layers.show === "function", "the layers can show");
  assert(explored.size === snap.neurons.length, "an explored neuron for each entry");
  assert(snap.neurons.length > 0, "the snapshot has neurons");
  const points = snap.neurons.map((n) => ({ layer: n.layer, index: n.index, z: zOf(n.layer, n.index, n.max), mark: false }));
  const path = [];
  for (let l = 0; l < L; l++) {
    const best = points.filter((p) => p.layer === l).sort((a, b) => b.z - a.z)[0];
    if (best) path.push(best);
  }
  layers.show(points, path, null);
  $("layersCaption").textContent = "Each rule is a layer, from the first at the left. Each point is an explored neuron, "
    + "as high as its largest value stands above its mean in the sweep. Select one to open it, "
    + "or run your own text to see the neurons at a token.";
}

// The fields that remember the visitor: the key for this tab and the name for the rooms.
function restoreFields() {
  assert($("key") instanceof HTMLElement, "the key box exists");
  assert($("roomName") instanceof HTMLElement, "the name box exists");
  assert(typeof sessionStorage === "object", "the page has session storage");
  assert(typeof localStorage === "object", "the page has local storage");
  try { $("key").value = sessionStorage.getItem("openrouter-key") || ""; } catch { /* no storage */ }
  $("key").onchange = () => {
    assert(typeof $("key").value === "string", "the key is text");
    try { sessionStorage.setItem("openrouter-key", $("key").value.trim()); } catch { /* no storage */ }
  };
  try { $("roomName").value = localStorage.getItem("room-name") || ""; } catch { /* no storage */ }
  if (!$("roomName").value) $("roomName").value = `Visitor ${10 + Math.floor(Math.random() * 90)}`;
  $("roomName").onchange = () => {
    assert(typeof $("roomName").value === "string", "the name is text");
    try { localStorage.setItem("room-name", roomName()); } catch { /* no storage */ }
  };
}

function bindButtons() {
  assert($("run") instanceof HTMLElement, "the run button exists");
  assert($("lens") instanceof HTMLElement, "the lens button exists");
  assert($("swap") instanceof HTMLElement, "the swap button exists");
  assert($("generate") instanceof HTMLElement, "the generate button exists");
  assert(typeof $("load").onclick !== "function", "the buttons are not bound yet");
  $("load").onclick = loadModel;
  $("run").onclick = () => {
    assert(tokenizer !== null, "the model is loaded");
    runText();
  };
  $("lens").onclick = () => {
    assert(selected !== null, "a neuron is selected");
    return computeLens(false);
  };
  $("swap").onclick = onSwap;
  $("generate").onclick = onGenerate;
  $("ask").onclick = onAsk;
  $("search").oninput = search;
  $("steerValue").oninput = updateSteerOut;
}

function bindRoom() {
  assert($("saveNote") instanceof HTMLElement, "the save button exists");
  assert($("share") instanceof HTMLElement, "the share button exists");
  assert($("leave") instanceof HTMLElement, "the leave button exists");
  assert($("copyLink") instanceof HTMLElement, "the copy button exists");
  assert(typeof $("note").oninput !== "function", "the room is not bound yet");
  $("note").oninput = () => {
    assert(room !== null, "the member is in a room");
    noteDirty = true;
  };
  $("saveNote").onclick = saveNote;
  $("share").onclick = () => enterRoom(newId(16), true);
  $("leave").onclick = () => exitRoom("You left the room. The link still works for 3 days from when the room was made.");
  $("copyLink").onclick = copyLink;
  addEventListener("hashchange", onHashChange);
  addEventListener("pagehide", () => {
    assert(typeof roomId === "string" || roomId === null, "the room id is text or nothing");
    room?.leave();
  });
  addEventListener("pageshow", (e) => {
    assert(typeof e.persisted === "boolean", "a page show says if it was kept");
    if (e.persisted && roomId) enterRoom(roomId, false);
  });
}

function bindDocument() {
  assert(typeof document.addEventListener === "function", "the document takes listeners");
  assert(typeof onFocusIn === "function", "the focus handler exists");
  assert(typeof onListKey === "function", "the key handler exists");
  assert(typeof onDocumentClick === "function", "the click handler exists");
  document.addEventListener("focusin", onFocusIn);
  document.addEventListener("keydown", onListKey);
  document.addEventListener("click", onDocumentClick);
}

function start() {
  assert(snap.neurons.length > 0, "the snapshot has neurons");
  assert(selected === null, "nothing is selected yet");
  assert(live === null, "no text has run yet");
  assert(room === null, "no room is joined yet");
  showTotals();
  restoreFields();
  bindButtons();
  bindRoom();
  bindDocument();
  idleLayers();
  search();
  // A room link joins the room first, so that the room gives the view.
  if (roomOfHash(location.hash)) enterRoom(roomOfHash(location.hash), false);
  const hash = /^#(\d+)\.(\d+)$/.exec(location.hash);
  if (hash && +hash[1] < L && +hash[2] < F) select(+hash[1], +hash[2], false);
  else select(snap.neurons[0].layer, snap.neurons[0].index, false);
}

start();
