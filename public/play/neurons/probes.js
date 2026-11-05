// The Jacobian lens and the neuron swap (README, Lens and swap), on an
// engine of model.js. Both change one neuron at one token: they run the text
// up to that token, then run that token again with the neuron set.

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

// Runs ids[0..pos] with recording on. Returns the logits at pos and the
// neuron values at pos, [layer][neuron]. The key-value cache then holds the
// positions before pos, unchanged by any later call at pos.
async function runTo(engine, ids, pos) {
  assert(Number.isInteger(pos) && pos >= 0, "a position is a whole number");
  assert(pos < ids.length, "the position is inside the text");
  engine.setSteer([]);
  engine.setRecord(true);
  const logits = (await engine.forward(ids.slice(0, pos + 1), 0)).slice();
  assert(logits.length === engine.config.vocab_size, "a logit for each token");
  return { logits, neurons: engine.neuronsAt(pos) };
}

// Runs token ids[pos] at pos again, with neuron (layer, index) set to value
// at that token only.
async function runSet(engine, ids, pos, layer, index, value) {
  assert(Number.isInteger(pos) && pos >= 0 && pos < ids.length, "the position is inside the text");
  assert(typeof value === "number", "a neuron value is a number");
  assert(Number.isInteger(layer) && Number.isInteger(index), "a neuron has a layer and an index");
  engine.setSteer([{ layer, index, value }]);
  engine.setRecord(true);
  const logits = (await engine.forward([ids[pos]], pos)).slice();
  const neurons = engine.neuronsAt(pos);
  engine.setSteer([]);
  engine.setRecord(false);
  assert(neurons.length === engine.config.num_hidden_layers * engine.config.intermediate_size, "a value for each neuron");
  return { logits, neurons };
}

// The Jacobian lens of neuron (layer, index) at token pos of ids: the
// derivatives of the logits at pos (dLogits, [vocab]) and of the neuron
// values at pos (dNeurons, [layer][neuron]) with respect to the neuron's
// value at pos, by central differences with step h. Also the logits and the
// neuron values at pos without the change.
export async function jacobianLens(engine, ids, pos, layer, index, h) {
  assert(h > 0, "the step is positive");
  assert(layer >= 0 && layer < engine.config.num_hidden_layers, "the layer exists");
  assert(index >= 0 && index < engine.config.intermediate_size, "the neuron exists");
  const base = await runTo(engine, ids, pos);
  const value = base.neurons[layer * engine.config.intermediate_size + index];
  // The steps that the engine uses, as f32.
  const up = Math.fround(value + h), down = Math.fround(value - h);
  const plus = await runSet(engine, ids, pos, layer, index, up);
  const minus = await runSet(engine, ids, pos, layer, index, down);
  assert(up > down, "the steps differ");
  const diff = (a, b) => {
    assert(a.length === b.length, "the two runs have the same length");
    assert(up !== down, "the steps differ");
    return a.map((x, i) => (x - b[i]) / (up - down));
  };
  return { value, logits: base.logits, neurons: base.neurons,
    dLogits: diff(plus.logits, minus.logits), dNeurons: diff(plus.neurons, minus.neurons) };
}

// The neuron swap of neuron (layer, index) between token pos of a and the
// last token of b: each runs with the neuron set to its value in the other.
// Returns for each text the neuron's value, and the logits without and with
// the swap.
export async function neuronSwap(engine, a, pos, b, layer, index) {
  assert(b.length > 0, "the second text has a token");
  assert(pos >= 0 && pos < a.length, "the position is inside the first text");
  const at = (r) => {
    assert(r.neurons.length > 0, "a run has neuron values");
    assert(layer * engine.config.intermediate_size + index < r.neurons.length, "the neuron is in the run");
    return r.neurons[layer * engine.config.intermediate_size + index];
  };
  const last = b.length - 1;
  const baseB = await runTo(engine, b, last);
  const baseA = await runTo(engine, a, pos);
  const swappedA = await runSet(engine, a, pos, layer, index, at(baseB));
  await runTo(engine, b, last);
  const swappedB = await runSet(engine, b, last, layer, index, at(baseA));
  return {
    a: { value: at(baseA), logits: baseA.logits, swapped: swappedA.logits },
    b: { value: at(baseB), logits: baseB.logits, swapped: swappedB.logits },
  };
}
