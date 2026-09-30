(function (root) {
  'use strict';
  function filterEntries(data, filters = {}) {
    for (const key of ['category', 'subsidiser', 'depth', 'stage']) {
      if (filters[key] && !Object.hasOwn(data.vocabulary[key], filters[key])) {
        throw new Error(`Unknown ${key}: ${filters[key]}`);
      }
    }
    if (filters.q != null && typeof filters.q !== 'string') throw new Error('Search must be text');
    const query = (filters.q || '').trim().toLocaleLowerCase();
    return data.entries.filter(entry => {
      if (!filters.includeHistorical && entry.stage === 'historical') return false;
      if (filters.category && !entry.categories.includes(filters.category)) return false;
      if (['subsidiser', 'depth', 'stage'].some(key => filters[key] && entry[key] !== filters[key])) return false;
      const text = [entry.name, entry.metric, entry.evidence.text, entry.caution.text,
        ...entry.categories.map(key => data.vocabulary.category[key]), data.vocabulary.subsidiser[entry.subsidiser]].join(' ').toLocaleLowerCase();
      return !query || text.includes(query);
    });
  }
  function matrix(data, entries) {
    return Object.keys(data.vocabulary.stage).flatMap(stage =>
      Object.keys(data.vocabulary.depth).map(depth => ({stage, depth,
        ids: entries.filter(entry => entry.stage === stage && entry.depth === depth).map(entry => entry.id)})));
  }
  function getProduct(data, id) {
    return data.entries.find(entry => entry.id === id) || data.forecasts.find(entry => entry.id === id) || null;
  }
  const api = {filterEntries, matrix, getProduct};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.SubsidyAtlas = api;
  if (typeof document === 'undefined') return;
  const data = JSON.parse(document.getElementById('atlas-data').textContent);
  const form = document.getElementById('filters');
  const field = name => form.elements.namedItem(name);
  const readFilters = () => ({q: field('q').value, category: field('category').value,
    subsidiser: field('subsidiser').value, depth: field('depth').value,
    stage: field('stage').value, includeHistorical: field('includeHistorical').checked});
  const cards = [...document.querySelectorAll('[data-product]')];
  const chart = document.getElementById('matrix');
  function render() {
    const filters = readFilters();
    const entries = filterEntries(data, filters);
    const ids = new Set(entries.map(entry => entry.id));
    cards.forEach(card => { card.hidden = !ids.has(card.dataset.product); });
    document.getElementById('count').textContent = `${entries.length} of ${data.entries.length} records · ${entries.filter(entry => entry.stage !== 'historical').length} current programmes / reported incentives`;
    document.getElementById('empty').hidden = entries.length > 0;
    const cells = matrix(data, entries);
    for (const button of chart.querySelectorAll('button')) {
      const cell = cells.find(cell => cell.depth === button.dataset.depth && cell.stage === button.dataset.stage);
      button.textContent = cell.ids.length || '—';
      button.disabled = cell.ids.length === 0;
      button.setAttribute('aria-label', `${data.vocabulary.stage[cell.stage]}, ${data.vocabulary.depth[cell.depth]}: ${cell.ids.length} records. Filter catalogue.`);
    }
    chart.querySelector('[data-history-row]').hidden = !filters.includeHistorical;
    chart.hidden = false;
  }
  form.addEventListener('input', event => {
    if (event.target.name === 'stage' && field('stage').value === 'historical') field('includeHistorical').checked = true;
    if (event.target.name === 'includeHistorical' && !field('includeHistorical').checked && field('stage').value === 'historical') field('stage').value = '';
    render();
  });
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('reset', () => { setTimeout(render, 0); });
  document.querySelectorAll('[data-preset]').forEach(button => button.addEventListener('click', () => {
    form.reset();
    const preset = button.dataset.preset;
    if (preset === 'llm') field('category').value = 'llm';
    if (preset === 'free') field('depth').value = 'free';
    if (preset === 'policy') field('stage').value = 'tapering';
    if (preset === 'history') { field('stage').value = 'historical'; field('includeHistorical').checked = true; }
    render();
  }));
  chart.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;
    field('depth').value = button.dataset.depth;
    field('stage').value = button.dataset.stage;
    render();
    document.getElementById('catalogue').focus();
  });
  function registerTools() {
    const mc = navigator.modelContext;
    if (!mc?.registerTool) return;
    const tools = [
      {name: 'get_metadata', description: 'Get the Subsidy Atlas date, vocabulary and sources. Depth is not a comparable cost percentage.',
        inputSchema: {type: 'object', properties: {}, additionalProperties: false},
        execute: async () => ({as_of: data.as_of, vocabulary: data.vocabulary, sources: data.sources})},
      {name: 'search_products', description: 'Search evidenced products. Historical evidence excluded unless includeHistorical is true. Forecasts are separate.',
        inputSchema: {type: 'object', properties: {q: {type: 'string'}, includeHistorical: {type: 'boolean'},
          ...Object.fromEntries(['category', 'subsidiser', 'depth', 'stage'].map(key => [key, {type: 'string', enum: Object.keys(data.vocabulary[key])}]))}, additionalProperties: false},
        execute: async filters => ({as_of: data.as_of, entries: filterEntries(data, filters)})},
      {name: 'get_product', description: 'Get one evidenced product or explicitly speculative forecast by its ID, with source references.',
        inputSchema: {type: 'object', properties: {id: {type: 'string'}}, required: ['id'], additionalProperties: false},
        execute: async ({id}) => ({as_of: data.as_of, product: getProduct(data, id), sources: data.sources})},
    ];
    for (const tool of tools) mc.registerTool({...tool, annotations: {readOnlyHint: true},
      execute: async args => ({content: [{type: 'text', text: JSON.stringify(await tool.execute(args))}]})});
  }
  registerTools();
  render();
})(typeof globalThis === 'undefined' ? this : globalThis);
