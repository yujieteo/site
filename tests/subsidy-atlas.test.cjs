const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {filterEntries, matrix, getProduct} = require('../visuals/subsidy-atlas/engine.js');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../visuals/subsidy-atlas/raw.json'), 'utf8'));

function loadBrowserAtlas(modelContext) {
  const fields = Object.fromEntries(['q', 'category', 'subsidiser', 'depth', 'stage', 'includeHistorical']
    .map(name => [name, {value: '', checked: false}]));
  const cards = data.entries.map(entry => ({dataset: {product: entry.id}}));
  const nodes = {
    'atlas-data': {textContent: JSON.stringify(data)},
    filters: {elements: {namedItem: name => fields[name]}, addEventListener() {}},
    matrix: {querySelectorAll: () => [], querySelector: () => nodes.history, addEventListener() {}},
    history: {}, count: {}, empty: {},
  };
  const document = {
    modelContext,
    getElementById: id => nodes[id],
    querySelectorAll: selector => selector === '[data-product]' ? cards : [],
  };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../visuals/subsidy-atlas/engine.js'), 'utf8'),
    {document, navigator: {}});
  return {cards, nodes};
}

test('document WebMCP registers and executes all three read-only tools without navigator WebMCP', async () => {
  const tools = new Map();
  const modelContext = {
    registerTool(tool) {
      assert.equal(this, modelContext);
      assert.ok(!tools.has(tool.name));
      tools.set(tool.name, tool);
    },
  };
  const {cards} = loadBrowserAtlas(modelContext);
  assert.deepEqual([...tools.keys()].sort(), ['get_metadata', 'get_product', 'search_products']);
  for (const tool of tools.values()) assert.equal(tool.annotations.readOnlyHint, true);
  const execute = async (name, input) => {
    const result = await tools.get(name).execute(input);
    assert.equal(result.content.length, 1);
    assert.equal(result.content[0].type, 'text');
    return JSON.parse(result.content[0].text);
  };
  assert.deepEqual(await execute('get_metadata', {}),
    {as_of: data.as_of, vocabulary: data.vocabulary, sources: data.sources});
  const current = await execute('search_products', {});
  assert.deepEqual(current.entries, filterEntries(data));
  assert.equal(current.as_of, data.as_of);
  assert.deepEqual(cards.filter(card => !card.hidden).map(card => card.dataset.product),
    current.entries.map(entry => entry.id));
  assert.deepEqual((await execute('search_products', {q: 'ChatGPT Pro'})).entries, []);
  assert.deepEqual((await execute('search_products', {q: 'ChatGPT Pro', includeHistorical: true})).entries
    .map(entry => entry.id), ['pro-2025']);
  for (const id of ['gemini-free', data.forecasts[0].id, 'missing']) {
    assert.deepEqual(await execute('get_product', {id}),
      {as_of: data.as_of, product: getProduct(data, id), sources: data.sources});
  }
  await assert.rejects(() => execute('search_products', {depth: 'made-up'}), /Unknown depth/);
});

test('catalogue renders when document WebMCP is unavailable', () => {
  const {cards, nodes} = loadBrowserAtlas(undefined);
  assert.deepEqual(cards.filter(card => !card.hidden).map(card => card.dataset.product),
    filterEntries(data).map(entry => entry.id));
  assert.equal(nodes.matrix.hidden, false);
  assert.equal(nodes.history.hidden, true);
  assert.equal(nodes.empty.hidden, true);
});

test('current catalogue excludes old loss reports and forecasts', () => {
  const result = filterEntries(data);
  assert.ok(result.length > 0);
  assert.ok(result.every(entry => entry.stage !== 'historical' && entry.speculative === false));
  assert.equal(filterEntries(data, {q: 'ChatGPT Pro'}).length, 0);
  assert.equal(filterEntries(data, {q: 'CHATGPT PRO', includeHistorical: true})[0].id, 'pro-2025');
  assert.equal(filterEntries(data, {includeHistorical: true}).length, data.entries.length);
});

test('search combines category, payer, depth and stage and handles two-category products', () => {
  assert.deepEqual(filterEntries(data, {q: '  gemini ', category: 'llm', depth: 'free',
    subsidiser: 'cross-subsidy', stage: 'acquisition'}).map(entry => entry.id), ['gemini-free']);
  for (const category of ['delivery', 'transport']) {
    assert.deepEqual(filterEntries(data, {category}).map(entry => entry.id), ['grab-promos']);
  }
  assert.equal(filterEntries(data, {q: 'Gemini', subsidiser: 'government'}).length, 0);
  assert.equal(filterEntries(data, {q: '<script>'}).length, 0);
  assert.equal(filterEntries(data, {stage: 'historical'}).length, 0);
});

test('all fixed vocabularies reject unsupported filter values', () => {
  for (const key of ['category', 'subsidiser', 'depth', 'stage']) {
    assert.throws(() => filterEntries(data, {[key]: 'made-up'}), /Unknown/);
  }
  assert.throws(() => filterEntries(data, {q: 12}), /text/);
});

test('overview assigns each matching entry exactly once and drilldown preserves counts', () => {
  for (const filters of [{}, {category: 'llm', includeHistorical: true}, {includeHistorical: true}, {q: 'not-a-product'}]) {
    const entries = filterEntries(data, filters);
    const cells = matrix(data, entries);
    assert.equal(cells.length, 16);
    assert.deepEqual(cells.flatMap(cell => cell.ids).sort(), entries.map(entry => entry.id).sort());
    for (const cell of cells) {
      const narrowed = filterEntries(data, {...filters, depth: cell.depth, stage: cell.stage});
      assert.deepEqual(narrowed.map(entry => entry.id).sort(), cell.ids.slice().sort());
    }
  }
});

test('details retain cited evidence and explicit speculation labels', () => {
  assert.equal(getProduct(data, 'missing'), null);
  assert.equal(getProduct(data, 'gemini-free').evidence.sources[0], 'gemini');
  for (const forecast of data.forecasts) {
    const result = getProduct(data, forecast.id);
    assert.equal(result.speculative, true);
    assert.ok(result.signals.every(signal => signal.sources.length > 0));
  }
});
