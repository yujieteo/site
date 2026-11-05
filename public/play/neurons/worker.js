// The model in a worker, so that the page stays responsive while it runs.
// Messages in: { type: "load" }, { type: "run", ids }, { type: "generate",
// ids, steer, n }, { type: "lens", ids, pos, layer, index, h }, { type:
// "swap", a, pos, b, layer, index }. Messages out: progress, ready, record,
// token, done, lens, swap, error.
// The model runs on the GPU (WebGPU) if the browser has an adapter that
// takes the weights, else on the CPU (WebAssembly).
import createModule from "./engine.js";
import { createEngine, MODEL_URL } from "./model.js";
import { jacobianLens, neuronSwap } from "./probes.js";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const CACHE = "neurons-smollm2-135m";
const MAX_CHUNKS = 1e7;
let engine = null;

// The response from the Cache API, else from the network, with a copy into
// the cache. Without a Cache API (some private windows) each visit fetches.
async function cached(url) {
  assert(typeof url === "string", "an address is text");
  assert(url.startsWith("https://"), "the model comes over https");
  let cache = null;
  try {
    cache = await caches.open(CACHE);
    const hit = await cache.match(url);
    if (hit) return hit;
  } catch {
    cache = null;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  if (cache) {
    cache.put(url, res.clone()).catch((e) => {
      assert(e !== undefined, "a failure has a reason");
      assert(cache !== null, "the cache exists");
    });
  }
  assert(res.ok, "the response is ok");
  return res;
}

async function* body(res) {
  assert(res.body !== null, "the response has a body");
  assert(typeof res.body.getReader === "function", "the body can be read");
  const reader = res.body.getReader();
  for (let chunk = 0; chunk < MAX_CHUNKS; chunk++) {
    const { done, value } = await reader.read();
    if (done) return;
    yield value;
  }
  throw new Error("the model came in too many chunks");
}

function argmax(xs) {
  assert(xs.length > 0, "there is a logit");
  assert(typeof xs[0] === "number", "logits are numbers");
  let best = 0;
  for (let i = 1; i < xs.length; i++) if (xs[i] > xs[best]) best = i;
  assert(best >= 0 && best < xs.length, "the best is a logit");
  return best;
}

// A WebGPU device if the browser has an adapter, else null (the CPU path).
async function gpuDevice() {
  assert(typeof navigator === "object", "the worker has a navigator");
  assert(engine === null, "the device is asked for before the engine exists");
  try {
    const adapter = await navigator.gpu?.requestAdapter();
    return adapter ? await adapter.requestDevice() : null;
  } catch {
    return null;
  }
}

async function load() {
  assert(typeof MODEL_URL === "string", "the model has an address");
  assert(MODEL_URL.endsWith("/"), "the model address is a folder");
  const config = await (await cached(MODEL_URL + "config.json")).json();
  const tokenizer = await (await cached(MODEL_URL + "tokenizer.json")).json();
  const res = await cached(MODEL_URL + "model.safetensors");
  const total = Number(res.headers.get("content-length")) || 269060552;
  engine = await createEngine(createModule, await gpuDevice());
  assert(total > 0, "the model has a size");
  await engine.load(config, body(res), (bytes) => {
    assert(typeof bytes === "number", "progress is a byte count");
    assert(bytes >= 0, "progress is not negative");
    postMessage({ type: "progress", bytes, total });
  });
  postMessage({ type: "ready", config, tokenizer, path: engine.path,
    maxTokens: engine.maxTokens(), maxContext: engine.maxContext() });
}

// One message at a time: a GPU forward waits for the GPU, and the next
// message must not start in that wait.
let queue = Promise.resolve();
onmessage = ({ data }) => {
  assert(data !== null && typeof data === "object", "a message is an object");
  assert(typeof data.type === "string", "a message has a type");
  queue = queue.then(() => handle(data));
};

async function handle(data) {
  assert(typeof data.type === "string", "a message has a type");
  try {
    if (data.type === "load") await load();
    else if (data.type === "run") {
      // The neuron values of every position, [position][layer][neuron].
      assert(engine !== null, "the model is loaded");
      assert(data.ids.length > 0, "there are tokens to run");
      engine.setSteer([]);
      engine.setRecord(true);
      await engine.forward(data.ids, 0);
      engine.setRecord(false);
      const per = engine.config.num_hidden_layers * engine.config.intermediate_size;
      const record = new Float32Array(data.ids.length * per);
      for (let p = 0; p < data.ids.length; p++) record.set(engine.neuronsAt(p), p * per);
      assert(record.length === data.ids.length * per, "a value for each neuron at each token");
      postMessage({ type: "record", record }, [record.buffer]);
    } else if (data.type === "generate") {
      // Greedy tokens after ids, with the steered neurons set at every position.
      assert(engine !== null, "the model is loaded");
      assert(Array.isArray(data.steer), "the steer is a list");
      engine.setSteer(data.steer);
      let logits = await engine.forward(data.ids, 0);
      let pos = data.ids.length;
      for (let k = 0; k < data.n && pos < engine.maxContext(); k++) {
        const next = argmax(logits);
        postMessage({ type: "token", token: next });
        if (k + 1 < data.n) logits = await engine.forward([next], pos++);
      }
      assert(pos <= engine.maxContext() || data.ids.length > engine.maxContext(), "the text stays in the context");
      postMessage({ type: "done" });
    } else if (data.type === "lens") {
      assert(engine !== null, "the model is loaded");
      assert(data.ids.length > 0, "there are tokens to run");
      const { value, dLogits, dNeurons } = await jacobianLens(engine, data.ids, data.pos, data.layer, data.index, data.h);
      postMessage({ type: "lens", value, dLogits, dNeurons }, [dLogits.buffer, dNeurons.buffer]);
    } else if (data.type === "swap") {
      assert(engine !== null, "the model is loaded");
      assert(data.b.length > 0, "the second text has a token");
      const { a, b } = await neuronSwap(engine, data.a, data.pos, data.b, data.layer, data.index);
      postMessage({ type: "swap", a, b });
    }
  } catch (e) {
    postMessage({ type: "error", message: String(e.message || e) });
  }
}
