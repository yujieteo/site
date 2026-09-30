const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {filterEntries, matrix, getProduct} = require('../visuals/subsidy-atlas/engine.js');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../visuals/subsidy-atlas/raw.json'), 'utf8'));

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
