// Browser check of the Paper Links BibTeX export (static/js/paper-bib.js) on a built site/. Serve it with
//   python3 -m http.server 8744 --bind 127.0.0.1 --directory site
// then run: chrome-devtools-axi run < scripts/verify_paper_bib_browser.js
await page.open('http://127.0.0.1:8744/papers.html?q=prime');
await page.wait('[data-bib-pick]');
console.log(await page.eval(async () => {
  /** @type {string[]} */
  const checks = [];
  /** @param {unknown} ok @param {string} message */
  const check = (ok, message) => { if (!ok) throw new Error(message); checks.push(`PASS: ${message}`); };
  /** @param {string} selector */
  const button = (selector) => /** @type {HTMLButtonElement} */ (document.querySelector(selector));
  // Copy writes to this stand-in clipboard, so the check reads exactly the text a reader would paste.
  let copied = '';
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true, value: { writeText: async (/** @type {string} */ text) => { copied = text; } },
  });
  /** @param {string} selector */
  const copy = async (selector) => {
    copied = '';
    button(selector).click();
    for (let tries = 0; !copied && tries < 100; tries += 1) await new Promise((resolve) => setTimeout(resolve, 50));
    return copied;
  };
  const keys = () => [...copied.matchAll(/^@misc\{([^,]+),$/gm)].map((match) => match[1]);

  const selectedCopy = '[data-bib-scope="selected"][data-bib-action="copy"]';
  check(button(selectedCopy).disabled, 'Copy of the selection is disabled while nothing is selected');
  const boxes = /** @type {HTMLInputElement[]} */ ([...document.querySelectorAll('[data-bib-pick]')]);
  check(boxes.length > 2, 'every rendered paper link has a Cite checkbox');
  boxes.slice(0, 2).forEach((box) => box.click());
  const urls = boxes.slice(0, 2).map((box) => /** @type {Element} */ (box.closest('article')).querySelector('.entry-title a')?.getAttribute('href'));
  check(/** @type {HTMLElement} */ (document.querySelector('[data-bib-selected-count]')).textContent === '2 selected', 'the panel counts two selected links');

  await copy(selectedCopy);
  check(keys().length === 2 && new Set(keys()).size === 2, 'selecting two links yields exactly two entries, with distinct keys');
  check(urls.every((url) => url && copied.includes(`= {${url}},`)), 'the two entries are the two selected links');
  check(/^% 2 entries\./m.test(copied), 'the header counts two entries');

  await copy('[data-bib-scope="filtered"][data-bib-action="copy"]');
  const total = Number((/** @type {HTMLElement} */ (document.querySelector('[data-result-count]')).textContent || '').match(/\d+/)?.[0]);
  check(total > 10 && keys().length === total, `the filtered export has one entry per match (${total})`);

  button('[data-bib-clear]').click();
  check(boxes.every((box) => !box.checked) && button(selectedCopy).disabled, 'Clear selection unticks every link');
  return checks.join('\n');
}));
