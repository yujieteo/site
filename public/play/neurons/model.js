// The Goose engine with a model loaded: weights from a safetensors file,
// streamed into WebAssembly memory as f32, and calls that run it.

// The engine's weight layout (offset_of in engine/llama.goose): kind 0 is the
// embedding, 1 to 9 are per layer, 10 is the final norm.
function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const KINDS = {
  "input_layernorm.weight": 1, "self_attn.q_proj.weight": 2, "self_attn.k_proj.weight": 3,
  "self_attn.v_proj.weight": 4, "self_attn.o_proj.weight": 5, "post_attention_layernorm.weight": 6,
  "mlp.gate_proj.weight": 7, "mlp.up_proj.weight": 8, "mlp.down_proj.weight": 9,
};

export function tensorPlace(name) {
  assert(typeof name === "string", "a tensor name is text");
  if (name === "model.embed_tokens.weight") return [0, 0];
  if (name === "model.norm.weight") return [10, 0];
  const m = /^model\.layers\.(\d+)\.(.+)$/.exec(name);
  if (m && KINDS[m[2]]) return [KINDS[m[2]], Number(m[1])];
  assert(m === null || KINDS[m[2]] === undefined, "a layer tensor is known or unknown");
  return null;
}

// Converts the bytes of `count` elements of `dtype` at src to f32 at dst.
function convert(dtype, src, dst) {
  assert(typeof dtype === "string", "a data type is text");
  assert(src instanceof Uint8Array, "the source is bytes");
  if (dtype === "BF16") {
    assert(dst.length >= src.length >> 1, "the destination holds every element");
    const s = new Uint16Array(src.buffer, src.byteOffset, src.length >> 1);
    for (let i = 0; i < s.length; i++) dst[i] = s[i] << 16;
  } else {
    throw new Error(`weights of type ${dtype} are not supported`);
  }
}

// Starts a GPU call, and waits for the GPU to finish it. refused is the
// error if the engine refuses the call.
function onGpu(m, start, refused) {
  assert(typeof start === "function", "a GPU call starts");
  assert(typeof refused === "string", "a refusal has a message");
  return new Promise((resolve, reject) => {
    assert(typeof m === "object", "the engine module is an object");
    assert(typeof resolve === "function" && typeof reject === "function", "a promise can settle");
    m.gpuDone = (ok) => {
      assert(typeof resolve === "function", "the call can resolve");
      assert(typeof reject === "function", "the call can reject");
      return ok ? resolve() : reject(new Error("the GPU failed"));
    };
    if (!start()) reject(new Error(refused));
  });
}

// The slice of the weights that the engine takes as an argument.
function weightSlice(m, st, slicePtr) {
  assert(st.weights > 0, "the weights are in memory");
  assert(st.nWeights > 0, "the weights have a length");
  const dv = new DataView(m.HEAPU8.buffer, slicePtr, 12);
  dv.setUint32(0, st.weights, true);
  dv.setBigInt64(4, BigInt(st.nWeights), true);
  return slicePtr;
}

// A typed array over a buffer of the engine: fn writes the byte length at lenPtr.
function viewOf(m, lenPtr, fn, Type) {
  assert(typeof fn === "function", "a buffer export is a function");
  assert(Type.BYTES_PER_ELEMENT > 0, "the type has an element size");
  const ptr = fn(lenPtr);
  const len = Number(new BigInt64Array(m.HEAPU8.buffer, lenPtr, 1)[0]);
  assert(len >= 0, "a buffer has a length");
  return new Type(m.HEAPU8.buffer, ptr, len / Type.BYTES_PER_ELEMENT);
}

async function loadWeights(m, st, slicePtr, cfg, chunks, onBytes) {
  assert(cfg !== null && typeof cfg === "object", "the config is an object");
  assert(typeof onBytes === "function", "progress is reported");
  const n = m._init_model(cfg.vocab_size, cfg.hidden_size, cfg.intermediate_size,
    cfg.num_hidden_layers, cfg.num_attention_heads, cfg.num_key_value_heads,
    cfg.rope_theta, cfg.rms_norm_eps);
  if (!n) throw new Error("the model does not fit the engine's capacities");
  if (cfg.tie_word_embeddings === false) throw new Error("the engine needs tied embeddings");
  if (st.weights) m._free(st.weights);
  st.weights = m._malloc(4 * n);
  if (!st.weights) throw new Error("not enough memory for the weights");
  st.nWeights = n;
  st.config = cfg;
  await readSafetensors(chunks, onBytes, (name, dtype, shape, bytes) => {
    const place = tensorPlace(name);
    if (!place) throw new Error(`unknown tensor ${name}`);
    const off = m._offset_of(place[0], place[1]);
    const count = shape.reduce((a, b) => {
      assert(Number.isInteger(b) && b > 0, "a dimension is a positive whole number");
      assert(Number.isInteger(a), "the product is a whole number");
      return a * b;
    }, 1);
    assert(Number.isInteger(off) && off >= 0, "a tensor has an offset");
    assert(off + count <= n, "a tensor fits the weights");
    convert(dtype, bytes, new Uint32Array(m.HEAPU8.buffer, st.weights + 4 * off, count));
  });
  if (st.gpu) st.gpu = await onGpu(m, () => m._init_gpu(weightSlice(m, st, slicePtr)), "the GPU path cannot take these weights").then(
    () => {
      assert(st.gpu, "the GPU took the weights");
      assert(st.weights > 0, "the weights are in memory");
      return true;
    }, (e) => {
      assert(e instanceof Error, "a failure is an error");
      assert(typeof e.message === "string", "an error has a message");
      console.warn(`${e.message}: the model runs on the CPU`);
      return false;
    });
}

function neuronsOf(m, st, lenPtr, pos) {
  assert(st.config !== null, "the model is loaded");
  assert(Number.isInteger(pos) && pos >= 0, "a position is a whole number");
  const stride = st.config.num_hidden_layers * st.config.intermediate_size;
  return viewOf(m, lenPtr, m._buf_record, Float32Array).slice(pos * stride, (pos + 1) * stride);
}

function ignoreBytes(n) {
  assert(Number.isFinite(n) && n >= 0, "progress is a byte count");
  assert(typeof n === "number", "progress is a number");
}

async function runForward(m, st, ptrs, ids, start) {
  assert(st.config !== null, "the model is loaded");
  assert(ids.length >= 0, "the tokens are a list");
  new Int32Array(m.HEAPU8.buffer, m._buf_tokens(ptrs.len), ids.length).set(ids);
  if (st.gpu) await onGpu(m, () => m._forward_gpu(ids.length, start), "forward does not fit");
  else if (!m._forward(weightSlice(m, st, ptrs.slice), ids.length, start)) throw new Error("forward does not fit");
  return viewOf(m, ptrs.len, m._buf_logits, Float32Array).subarray(0, st.config.vocab_size);
}

// With a WebGPU device, the engine runs forward on the GPU (engine/gpu.c);
// without one, or if the GPU fails to take the weights, on the CPU in
// WebAssembly.
export async function createEngine(createModule, device = null) {
  assert(typeof createModule === "function", "the engine module is made by a function");
  const m = await createModule(device ? { preinitializedWebGPUDevice: device } : {});
  m._goose_init(0, 0);
  const lenPtr = m._malloc(8);
  const slicePtr = m._malloc(12);   // sl_f32 of gen/llama.h: packed { float *data; int64_t len; }
  const st = { weights: 0, nWeights: 0, config: null, gpu: device !== null };
  assert(lenPtr > 0 && slicePtr > 0, "the engine gave memory");

  return {
    // Reads a safetensors file from a stream of Uint8Array chunks into the
    // engine. config is the model's config.json. onBytes(n) reports progress.
    async load(cfg, chunks, onBytes = ignoreBytes) {
      assert(cfg !== null && typeof cfg === "object", "the config is an object");
      await loadWeights(m, st, slicePtr, cfg, chunks, onBytes);
    },
    get config() {
      assert(typeof st === "object", "the state is kept");
      assert(st.config === null || typeof st.config === "object", "the config is an object or nothing");
      return st.config;
    },
    get path() {
      assert(typeof st.gpu === "boolean", "gpu is a flag");
      assert(typeof st === "object", "the state is kept");
      return st.gpu ? "gpu" : "cpu";
    },
    maxTokens: () => {
      assert(typeof m._max_tokens === "function", "the engine has a token limit");
      assert(typeof m._max_context === "function", "the engine has a context limit");
      return m._max_tokens();
    },
    maxContext: () => {
      assert(typeof m._max_context === "function", "the engine has a context limit");
      assert(typeof m._max_tokens === "function", "the engine has a token limit");
      return m._max_context();
    },
    // Runs ids at positions start.. and returns the logits of the last one.
    async forward(ids, start) {
      assert(Number.isInteger(start) && start >= 0, "a position is a whole number");
      return runForward(m, st, { len: lenPtr, slice: slicePtr }, ids, start);
    },
    setRecord: (on) => {
      assert(on === true || on === false, "recording is on or off");
      assert(typeof m._set_record === "function", "the engine records");
      return m._set_record(on ? 1 : 0);
    },
    // The neuron values at position pos, [layer][neuron], from the last
    // forward calls with recording on.
    neuronsAt(pos) {
      return neuronsOf(m, st, lenPtr, pos);
    },
    // steer: a list of { layer, index, value }
    setSteer(steer) {
      assert(Array.isArray(steer), "the steer is a list");
      assert(typeof m._clear_steer === "function", "the engine can clear the steer");
      m._clear_steer();
      for (const s of steer) if (!m._add_steer(s.layer, s.index, s.value)) throw new Error("cannot steer that neuron");
    },
  };
}

// Calls onTensor(name, dtype, shape, bytes) for each tensor of a safetensors
// stream, in file order, with the bytes copied out of the chunks.
export async function readSafetensors(chunks, onBytes, onTensor) {
  assert(typeof onBytes === "function", "progress is reported");
  assert(typeof onTensor === "function", "each tensor is reported");
  // The chunks not yet used, and their total length. take(n) joins only the
  // n bytes it returns, so each byte is copied once.
  const queue = [];
  let queued = 0, seen = 0, pos = 0, tensors = null, next = 0;
  const take = (n) => {
    assert(Number.isInteger(n) && n >= 0, "a count is a whole number");
    assert(n <= queued, "the queue holds n bytes");
    const out = new Uint8Array(n);
    for (let k = 0; k < n;) {
      const c = queue[0], m = Math.min(c.length, n - k);
      out.set(c.subarray(0, m), k);
      k += m;
      if (m === c.length) queue.shift(); else queue[0] = c.subarray(m);
    }
    queued -= n; pos += n;
    assert(queued >= 0, "the queue length is not negative");
    return out;
  };
  for await (const chunk of chunks) {
    seen += chunk.length;
    onBytes(seen);
    queue.push(chunk);
    queued += chunk.length;
    if (!tensors) {
      if (queued < 8) continue;
      if (queue[0].length < 8) { const all = take(queued); queue.push(all); queued = all.length; }
      const n = Number(new DataView(queue[0].buffer, queue[0].byteOffset, 8).getBigUint64(0, true));
      if (queued < 8 + n) continue;
      take(8);
      const header = JSON.parse(new TextDecoder().decode(take(n)));
      delete header.__metadata__;
      tensors = Object.entries(header).sort((a, b) => {
        assert(a[1].data_offsets.length === 2, "a tensor has two offsets");
        assert(b[1].data_offsets.length === 2, "a tensor has two offsets");
        return a[1].data_offsets[0] - b[1].data_offsets[0];
      });
      pos = 0;
    }
    while (next < tensors.length) {
      const [name, t] = tensors[next];
      const [s, e] = t.data_offsets;
      assert(e >= s, "a tensor ends after it starts");
      assert(s >= 0, "a tensor starts in the file");
      if (pos < s) { take(Math.min(s - pos, queued)); if (pos < s) break; }
      if (queued < e - s) break;
      onTensor(name, t.dtype, t.shape, take(e - s));
      next++;
    }
  }
  if (!tensors || next < tensors.length) throw new Error("the weights file ended early");
  assert(queued >= 0, "the queue length is not negative");
}

// The model the page runs: SmolLM2-135M (Apache-2.0) at a fixed revision of
// its Hugging Face repository.
export const MODEL_URL = "https://huggingface.co/HuggingFaceTB/SmolLM2-135M/resolve/93efa2f097d58c2a74874c7e644dbc9b0cee75a2/";
