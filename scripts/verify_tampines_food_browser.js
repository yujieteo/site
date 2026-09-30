await page.open('http://127.0.0.1:8744/visuals/tampines-food/');
const results = await page.eval(async () => {
  const D = JSON.parse(document.getElementById('dataset').textContent);
  const checks = [];
  function check(ok, message) { if (!ok) throw new Error(message); checks.push(message); }
  const clickChip = (key) => document.querySelector(`.chip[data-key="${key}"]`).click();
  const reset = () => { clickChip('cuisine:'); clickChip('mall:'); };
  const verifyRows = (rows, label) => {
    check(document.querySelectorAll('.map-rank').length === rows.length, label + ': floor directory count');
    check(document.querySelectorAll('#rank-list > li[id]').length === rows.length, label + ': ranked list count');
    const estimates = rows.filter(o => o.nutrition.status !== 'not_estimable').length;
    check(document.querySelectorAll('.bar-row').length === estimates, label + ': bar count');
    check(document.querySelectorAll('#cal-table tbody tr').length === estimates, label + ': table count');
    check(document.documentElement.scrollWidth === innerWidth, label + ': no horizontal overflow');
  };
  reset(); verifyRows(D.outlets, 'All');
  check(document.querySelectorAll('.map-marker').length === 3, 'Exactly three sourced geographic markers, no Hub coordinate');
  for (const cuisine of [null, ...D.cuisines.map(c => c.id)]) {
    for (const mall of [null, ...D.malls.map(m => m.id)]) {
      reset();
      if (cuisine) clickChip('cuisine:' + cuisine);
      const rows = D.outlets.filter(o => (!cuisine || o.cuisine === cuisine) && (!mall || o.mall === mall));
      if (mall) {
        const marker = document.querySelector(`[data-map-mall="${mall}"]`);
        if (marker) marker.dispatchEvent(new MouseEvent('click', {bubbles:true}));
        else if (rows.length) clickChip('mall:' + mall);
        else { check(document.querySelector(`.chip[data-key="mall:${mall}"]`).disabled, `${cuisine}/${mall}: unavailable chip disabled`); continue; }
      }
      verifyRows(rows, `${cuisine || 'all'}/${mall || 'all'}`);
      const anyButton = document.querySelector('.map-rank');
      if (anyButton) {
        anyButton.click();
        const selected = rows.find(o => o.id === anyButton.dataset.outlet);
        const panel = document.getElementById('map-detail').textContent;
        check(panel.includes(selected.name) && panel.includes(selected.dish), 'Selected outlet retains name and signature dish');
        check(panel.includes(selected.nutrition.status === 'not_estimable' ? 'Not estimable' : String(selected.nutrition.energy_kcal)), 'Selected nutrition is original estimate or explicit unknown');
        document.activeElement.dispatchEvent(new KeyboardEvent('keydown', {key:'Escape',bubbles:true}));
        check(document.getElementById('map-detail').textContent === '', 'Escape clears persistent map details');
        check(document.activeElement.id === 'map-rank-' + selected.id, 'Escape restores directory keyboard focus');
      }
    }
  }
  reset();
  const noEstimate = D.outlets.find(o => o.nutrition.status === 'not_estimable');
  document.getElementById('map-rank-' + noEstimate.id).click();
  check(!document.getElementById('map-detail').textContent.includes('kcal'), 'Not-estimable map selection invents no calories');
  const anotherMall = D.malls.find(m => m.id !== noEstimate.mall).id;
  clickChip('mall:' + anotherMall);
  check(document.getElementById('map-detail').textContent === '', 'Filter clears incompatible map selection');
  reset();
  const first = D.outlets[0];
  document.getElementById('map-rank-' + first.id).click();
  document.querySelector('#map-detail a').click();
  check(document.querySelector('#outlet-' + first.id + ' details').open, 'Map opens original ranked entry and guide sources');
  reset();
  const originalBar = document.querySelector('.bar-row'); originalBar.click();
  check(document.querySelector('.bar-row[aria-expanded="true"]') !== null, 'Original tap-to-open calorie detail still works');
  document.querySelector('[data-sort="rank"]').click();
  check(document.querySelector('.bar-row .bar-label span').textContent.startsWith('#1 '), 'Original rank sorting still works');
  check([...document.querySelectorAll('.map-rank')].every(b => { const r=b.getBoundingClientRect();return r.width >=44 && r.height>=44; }), 'Every directory target is at least 44px square');
  reset();
  document.activeElement.dispatchEvent(new KeyboardEvent('keydown', {key:'Escape',bubbles:true}));
  document.getElementById('map-rank-' + first.id).click();
  const mapWrap = document.querySelector('.map-wrap');
  const settleResize = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  const controls = [
    ...document.querySelectorAll('.map-rank'),
    ...document.querySelectorAll('#map-detail a, #map-detail button'),
    ...document.querySelectorAll('.map-marker')
  ];
  for (const control of controls) {
    const mall = control.dataset.mapMall;
    (mall ? document.querySelector(`[data-map-mall="${mall}"]`) : control).focus();
    for (const [width, height] of [['80%', 'auto'], ['100%', 'auto'], ['100%', '600px'], ['100%', 'auto']]) {
      mapWrap.style.width = width;
      mapWrap.style.height = height;
      await settleResize();
      check(mall ? document.activeElement.dataset.mapMall === mall : document.activeElement === control,
        `${control.getAttribute('aria-label') || control.textContent}: ${width}/${height} resize retains focus`);
      check(document.getElementById('map-detail').textContent.includes(first.name), 'Resize preserves selected details');
    }
  }
  mapWrap.style.removeProperty('width');
  mapWrap.style.removeProperty('height');
  await settleResize();
  for (const selector of ['.bar-row', '.chip[data-key="cuisine:"]', '[data-sort="rank"]', '#outlet-' + first.id + ' summary']) {
    if (!document.getElementById('map-detail').textContent) document.getElementById('map-rank-' + first.id).click();
    const control = document.querySelector(selector);
    control.focus();
    control.dispatchEvent(new KeyboardEvent('keydown', {key:'Escape',bubbles:true}));
    check(document.activeElement === control, selector + ': outside-map Escape retains focus');
    check(document.getElementById('map-detail').textContent === '', 'Outside-map Escape clears map details');
    check(document.getElementById('tip').getAttribute('aria-hidden') === 'true', 'Escape hides tooltip');
  }
  for (const selector of ['#map-rank-' + first.id, '#map-detail a', '#map-detail button', '.map-marker']) {
    document.getElementById('map-rank-' + first.id).click();
    const control = document.querySelector(selector);
    control.focus();
    control.dispatchEvent(new KeyboardEvent('keydown', {key:'Escape',bubbles:true}));
    check(document.activeElement.id === 'map-rank-' + first.id, selector + ': map-origin Escape restores directory focus');
    check(document.getElementById('map-detail').textContent === '', 'Map-origin Escape clears map details');
  }
  document.getElementById('map-rank-' + first.id).click();
  document.querySelector('#map-detail button').click();
  check(document.activeElement.id === 'map-rank-' + first.id && !document.getElementById('map-detail').textContent,
    'Close action clears details and restores directory focus');
  reset();
  return {viewport:innerWidth, checks:checks.length, result:'PASS', assertions:checks};
});
console.log(JSON.stringify(results));
await page.open('http://127.0.0.1:8744/visuals/tampines-food/');
await page.eval(() => document.querySelector('[data-map-mall="tampines-1"]').focus());
await page.press('Space');
if (!(await page.eval(() => document.getElementById('status').textContent.includes('16 of 50')))) throw new Error('SVG keyboard activation failed');
console.log('PASS: real SVG marker keyboard activation');
await page.click('.chip[data-key="mall:"]');
await page.click('#map-rank-' + (await page.eval(() => JSON.parse(document.getElementById('dataset').textContent).outlets[0].id)));
await page.press('Escape');
if (!(await page.eval(() => document.getElementById('map-detail').textContent === ''))) throw new Error('Escape did not close directory details');
console.log('PASS: real directory click and Escape');
await page.eval(() => document.querySelector('.bar-row').focus());
await page.press('Escape');
if (!(await page.eval(() => document.activeElement.matches('.bar-row')))) throw new Error('Escape moved focus without a map selection');
await page.click('#map-rank-' + (await page.eval(() => JSON.parse(document.getElementById('dataset').textContent).outlets[0].id)));
await page.eval(() => document.querySelector('.bar-row').focus());
await page.press('Escape');
if (!(await page.eval(() => document.activeElement.matches('.bar-row') && !document.getElementById('map-detail').textContent))) throw new Error('Outside-map Escape stole focus');
console.log('PASS: real calorie-bar Escape preserves focus with and without map selection');
console.log(await page.eval(async () => {
  const frame = document.createElement('iframe');
  const html = await (await fetch(location.href)).text();
  const loaded = new Promise(resolve => frame.addEventListener('load', resolve, {once:true}));
  frame.srcdoc = `<script>window.registeredTools = new Map(); Object.defineProperty(document, 'modelContext', {value: {registerTool(tool) { window.registeredTools.set(tool.name, tool); }}});</script>` + html;
  document.body.append(frame);
  try {
    await loaded;
    const data = JSON.parse(frame.contentDocument.getElementById('dataset').textContent);
    const response = await frame.contentWindow.registeredTools.get('get_metadata').execute({});
    const metadata = JSON.parse(response.content[0].text);
    const expected = {title:data.title, as_of:data.as_of, method:data.method, calorie_method:data.calorie_method,
      cuisines:data.cuisines, malls:data.malls, sources:data.sources, truncated:false};
    if (JSON.stringify(metadata) !== JSON.stringify(expected)) throw new Error('get_metadata changed its pre-existing response contract');
    if (frame.contentDocument.querySelectorAll('.map-marker').length !== 3) throw new Error('Local map rendering lost geometry');
    return 'PASS: executed WebMCP metadata contract and retained local map rendering';
  } finally { frame.remove(); }
}));
