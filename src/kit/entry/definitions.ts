// The list on "Definitions that make theorems easy". The build writes a small index of every entry (data/entries.json)
// and the Markdown of each subject (data/md/<subject>.md) next to the page. This draws the list with its filters and
// keeps the filters in the address. An entry's full text loads from its subject page when the reader first opens it,
// so the page itself stays small. "Copy as notes" fetches the Markdown of only the subjects it needs.
// The order is the index order: subject, then level, then the finer code, then the title. Every filter keeps it.

type Entry = [subject: number, title: string, remember: string, kind: number, level: number, msc: string, arxiv: string, sources: number];

interface Data {
  subjects: [id: string, title: string][];
  msc: Record<string, string>;
  arxiv: Record<string, string>;
  levels: Record<string, string>;
  entries: Entry[];
}

interface Row {
  entry: Entry;
  item: HTMLLIElement;
  details: HTMLDetailsElement;
  // The place of the entry among its subject's entries: its h3 on the subject page, and its chunk in the Markdown.
  place: number;
  words: string;
  loaded: boolean;
}

const KINDS = [
  { key: "by-definition", label: "By definition", title: "True by definition" },
  { key: "excludes-counterexamples", label: "Counterexamples", title: "Rules out counterexamples" },
  { key: "makes-it-statable", label: "Clean statement", title: "Makes the theorem clean to state or prove" },
];
const SOURCES = [
  { key: "nlab", label: "nLab", bit: 1 },
  { key: "wikipedia", label: "Wikipedia", bit: 2 },
  { key: "ts", label: "Papers, ProofWiki, Stacks", bit: 4 },
];
const PLURAL = new Intl.PluralRules("en");

// The site's stylesheet has a size budget, and the server's policy blocks <style> blocks, so the list brings its own
// rules as a constructed stylesheet.
const RULES = `
.defs-tools { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 8px; }
.defs-tools input[type=search] { flex: 1 1 100%; width: auto; min-width: 0; }
.defs-tools select { flex: 1 1 200px; min-width: 0; max-width: 100%; text-overflow: ellipsis; }
.defs-tools .button { font-size: var(--small); }
.defs-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 6px; vertical-align: 0.05em; flex: none; }
.defs-k0 { background: var(--blue); } .defs-k1 { background: var(--orange); } .defs-k2 { background: var(--violet); }
.defs-kind[data-active=false] .defs-dot { opacity: 0.3; }
.defs-count { margin: 8px 0 4px; font-size: var(--small); color: var(--ink); }
.defs-order { margin: 0 0 16px; font-size: var(--small); color: var(--muted); }
.defs-list { list-style: none; padding: 0; margin: 0; }
.defs-list > li { border-bottom: 1px solid var(--line); content-visibility: auto; contain-intrinsic-size: auto 72px; }
.defs-list > li.defs-subject { border-bottom: 0; padding: 28px 0 6px; font-weight: 550; contain-intrinsic-size: auto 56px; }
.defs-list summary { list-style: none; cursor: pointer; padding: 10px 0; display: grid; grid-template-columns: 14px 1fr; column-gap: 6px; }
.defs-list summary::-webkit-details-marker { display: none; }
.defs-list summary .defs-dot { grid-column: 1; margin-top: 0.55em; }
.defs-list summary b { grid-column: 2; font-weight: 550; }
.defs-list summary span:not(.defs-dot) { grid-column: 2; font-size: var(--small); line-height: var(--leading); color: var(--muted); }
.defs-body { padding: 0 0 16px 20px; }
.defs-notes { width: 100%; min-height: 160px; font: 12px/1.5 ui-monospace, monospace; }
.defs [hidden] { display: none !important; }
`;

function count(n: number, one: string, many: string): string {
  return `${n.toLocaleString("en-US")} ${PLURAL.select(n) === "one" ? one : many}`;
}

function make<K extends keyof HTMLElementTagNameMap>(tag: K, className = "", text = ""): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className !== "") node.className = className;
  if (text !== "") node.textContent = text;
  return node;
}

function option(value: string, label: string): HTMLOptionElement {
  const node = make("option", "", label);
  node.value = value;
  return node;
}

function clean(text: string): string {
  return text.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/['’]/g, "").replace(/\s+/g, " ");
}

// The Markdown escapes <, > and & as HTML entities for the page. Notes are plain Markdown, so they get the characters back.
function unescape(text: string): string {
  return text.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#39;", "'").replaceAll("&amp;", "&");
}

function tally(values: string[]): Map<string, number> {
  const found = new Map<string, number>();
  for (const v of values) found.set(v, (found.get(v) ?? 0) + 1);
  return found;
}

function mscCodes(entry: Entry): string[] {
  const codes: string[] = [];
  for (const code of entry[5].split(" ")) for (const part of [code.slice(0, 2), code.slice(0, 3)]) if (!codes.includes(part)) codes.push(part);
  return codes;
}

async function wire(figure: HTMLElement): Promise<void> {
  const box = figure.querySelector<HTMLElement>(".defs");
  const base = figure.dataset.data ?? "";
  if (!box || base === "") return;
  const post = base.replace(/data\/$/, "");
  let data: Data;
  try {
    const answer = await fetch(`${base}entries.json`);
    if (!answer.ok) throw new Error(String(answer.status));
    data = (await answer.json()) as Data;
  } catch {
    const wait = box.querySelector(".defs-wait");
    if (wait) wait.textContent = "The list did not load. Every entry is also on its subject page, listed under Sections below.";
    return;
  }

  // The controls.
  const tools = make("div", "defs-tools");
  const search = make("input");
  search.type = "search";
  search.placeholder = `Search ${data.entries.length.toLocaleString("en-US")} entries: prime, stack, 54D30, math.GN…`;
  search.setAttribute("aria-label", "Search the entries");
  search.autocomplete = "off";
  const msc = make("select");
  msc.setAttribute("aria-label", "MSC2020 subject");
  msc.append(option("", "All MSC subjects"));
  const mscCount = tally(data.entries.flatMap(mscCodes));
  for (const code of Object.keys(data.msc).sort()) {
    const n = mscCount.get(code) ?? 0;
    if (n === 0) continue;
    const label = code.length === 2 ? `${code} ${data.msc[code]} (${n})` : ` ${code} ${data.msc[code]} (${n})`;
    msc.append(option(code, label));
  }
  const arxiv = make("select");
  arxiv.setAttribute("aria-label", "arXiv category");
  arxiv.append(option("", "All arXiv categories"));
  const arxivCount = tally(data.entries.flatMap((e) => e[6].split(" ")));
  for (const cat of Object.keys(data.arxiv).sort()) arxiv.append(option(cat, `${cat} ${data.arxiv[cat]} (${arxivCount.get(cat) ?? 0})`));
  const level = make("select");
  level.setAttribute("aria-label", "Level");
  level.append(option("", "All levels"));
  const levelCount = tally(data.entries.map((e) => String(e[4])));
  for (const [n, name] of Object.entries(data.levels)) level.append(option(n, `${n} ${name} (${levelCount.get(n) ?? 0})`));
  const source = make("select");
  source.setAttribute("aria-label", "Source");
  source.append(option("", "All sources"));
  for (const s of SOURCES) source.append(option(s.key, s.label));
  const kinds = KINDS.map((k, i) => {
    const button = make("button", "button defs-kind");
    button.type = "button";
    button.title = k.title;
    button.append(make("span", `defs-dot defs-k${i}`), document.createTextNode(k.label));
    return button;
  });
  const random = make("button", "button", "Random");
  random.type = "button";
  const copy = make("button", "button", "Copy as notes");
  copy.type = "button";
  copy.title = "Copy the entries that match, in page order, as Markdown notes";
  tools.append(search, msc, arxiv, level, source, ...kinds, random, copy);
  const shown = make("p", "defs-count");
  shown.setAttribute("aria-live", "polite");
  const order = make("p", "defs-order", "Sorted by MSC subject, then level, then the finer MSC code, then title. Every filter keeps this order.");
  const notes = make("textarea", "defs-notes");
  notes.hidden = true;
  notes.readOnly = true;
  notes.setAttribute("aria-label", "Notes to copy");

  // The rows, with a heading for each subject.
  const list = make("ol", "defs-list");
  const heads: HTMLLIElement[] = data.subjects.map(([, title]) => make("li", "defs-subject", title));
  const rows: Row[] = [];
  const places = new Map<number, number>();
  let last = -1;
  for (const entry of data.entries) {
    const subject = entry[0];
    if (subject !== last) {
      const head = heads[subject];
      if (head) list.append(head);
      last = subject;
    }
    const place = places.get(subject) ?? 0;
    places.set(subject, place + 1);
    const item = make("li");
    const details = make("details");
    const summary = make("summary");
    summary.append(make("span", `defs-dot defs-k${entry[3]}`), make("b", "", entry[1]), make("span", "", entry[2]), make("span", "", `MSC ${entry[5].replaceAll(" ", ", ")} · ${entry[6].replaceAll(" ", ", ")} · Level ${entry[4]}`));
    details.append(summary, make("div", "defs-body"));
    item.append(details);
    list.append(item);
    const words = clean(`${entry[1]} ${entry[2]} ${entry[5]} ${entry[6]} ${data.subjects[subject]?.[1] ?? ""}`);
    rows.push({ entry, item, details, place, words, loaded: false });
  }
  box.replaceChildren(tools, shown, order, notes, list);

  // The filters, read from and written to the address.
  const params = new URLSearchParams(location.search);
  search.value = params.get("q") ?? "";
  for (const [select, key] of [[msc, "msc"], [arxiv, "arxiv"], [level, "level"], [source, "src"]] as const) {
    const value = params.get(key) ?? "";
    if ([...select.options].some((o) => o.value === value)) select.value = value;
  }
  const hide = params.get("hide") ?? "";
  const off = new Set(hide === "" ? [] : hide.split(",").map(Number).filter((n) => Number.isInteger(n) && n >= 0 && n < KINDS.length));
  function paintKinds(): void {
    kinds.forEach((button, i) => {
      button.dataset.active = String(!off.has(i));
      button.setAttribute("aria-pressed", String(!off.has(i)));
    });
  }
  paintKinds();

  function visible(): Row[] {
    return rows.filter((row) => !row.item.hidden);
  }

  function apply(): void {
    const words = clean(search.value).split(" ").filter((w) => w !== "");
    const bit = SOURCES.find((s) => s.key === source.value)?.bit ?? 0;
    const open = new Set<number>();
    let n = 0;
    for (const row of rows) {
      const e = row.entry;
      const show = !off.has(e[3]) && (level.value === "" || String(e[4]) === level.value) && (bit === 0 || (e[7] & bit) !== 0)
        && (msc.value === "" || mscCodes(e).includes(msc.value)) && (arxiv.value === "" || e[6].split(" ").includes(arxiv.value))
        && words.every((w) => row.words.includes(w));
      row.item.hidden = !show;
      if (show) {
        n++;
        open.add(e[0]);
      }
    }
    heads.forEach((head, i) => (head.hidden = !open.has(i)));
    shown.textContent = n === rows.length ? `All ${count(n, "entry", "entries")}.` : `${count(n, "entry", "entries")} of ${rows.length.toLocaleString("en-US")} match, in ${count(open.size, "subject", "subjects")}.`;
    copy.disabled = n === 0;
    random.disabled = n === 0;
    const next = new URLSearchParams();
    if (search.value.trim() !== "") next.set("q", search.value.trim());
    if (msc.value !== "") next.set("msc", msc.value);
    if (arxiv.value !== "") next.set("arxiv", arxiv.value);
    if (level.value !== "") next.set("level", level.value);
    if (source.value !== "") next.set("src", source.value);
    if (off.size > 0) next.set("hide", [...off].sort().join(","));
    const query = next.toString();
    history.replaceState(null, "", `${location.pathname}${query === "" ? "" : `?${query}`}${location.hash}`);
  }

  let typing: ReturnType<typeof setTimeout> | undefined;
  search.addEventListener("input", () => {
    clearTimeout(typing);
    typing = setTimeout(apply, 120);
  });
  for (const select of [msc, arxiv, level, source]) select.addEventListener("change", apply);
  kinds.forEach((button, i) =>
    button.addEventListener("click", () => {
      if (off.has(i)) off.delete(i);
      else off.add(i);
      paintKinds();
      apply();
    }),
  );

  // An entry's full text: the h3 at its place on the subject page and everything up to the next h3.
  const pages = new Map<number, Promise<Document>>();
  function subjectPage(subject: number): Promise<Document> {
    let page = pages.get(subject);
    if (page === undefined) {
      page = fetch(`${post}${data.subjects[subject]?.[0] ?? ""}/`).then(async (answer) => {
        if (!answer.ok) throw new Error(String(answer.status));
        return new DOMParser().parseFromString(await answer.text(), "text/html");
      });
      page.catch(() => pages.delete(subject));
      pages.set(subject, page);
    }
    return page;
  }

  async function load(row: Row): Promise<void> {
    if (row.loaded) return;
    row.loaded = true;
    const body = row.details.querySelector<HTMLElement>(".defs-body");
    if (!body) return;
    const href = `${post}${data.subjects[row.entry[0]]?.[0] ?? ""}/`;
    body.replaceChildren(make("p", "muted", "Loading…"));
    try {
      const page = await subjectPage(row.entry[0]);
      const head = page.querySelectorAll("article h3")[row.place];
      if (!head) throw new Error("no entry");
      const parts: Node[] = [];
      for (let node = head.nextElementSibling; node && !/^(H2|H3|NAV)$/.test(node.tagName); node = node.nextElementSibling) parts.push(document.importNode(node, true));
      const link = make("a", "", "Open on its subject page");
      link.href = `${href}#${head.id}`;
      const foot = make("p", "muted");
      foot.append(link);
      body.replaceChildren(...parts, foot);
    } catch {
      row.loaded = false;
      const link = make("a", "", "its subject page");
      link.href = href;
      const p = make("p", "muted", "This entry did not load. Read it on ");
      p.append(link, document.createTextNode("."));
      body.replaceChildren(p);
    }
  }

  list.addEventListener("toggle", (event) => {
    const details = event.target;
    if (!(details instanceof HTMLDetailsElement) || !details.open) return;
    const row = rows.find((r) => r.details === details);
    if (row) void load(row);
  }, true);

  random.addEventListener("click", () => {
    const pool = visible();
    const row = pool[Math.floor(Math.random() * pool.length)];
    if (!row) return;
    row.details.open = true;
    row.details.scrollIntoView({ block: "start" });
  });

  // Notes: the Markdown of each matching entry, grouped under its subject, in page order.
  const markdown = new Map<number, Promise<string[]>>();
  function subjectNotes(subject: number): Promise<string[]> {
    let chunks = markdown.get(subject);
    if (chunks === undefined) {
      chunks = fetch(`${base}md/${data.subjects[subject]?.[0] ?? ""}.md`).then(async (answer) => {
        if (!answer.ok) throw new Error(String(answer.status));
        return unescape(await answer.text()).split(/\n(?=### )/).map((chunk) => chunk.trim());
      });
      chunks.catch(() => markdown.delete(subject));
      markdown.set(subject, chunks);
    }
    return chunks;
  }

  function describe(): string {
    const parts: string[] = [];
    if (search.value.trim() !== "") parts.push(`search "${search.value.trim()}"`);
    for (const select of [msc, arxiv, level, source]) if (select.value !== "") parts.push((select.selectedOptions[0]?.textContent ?? "").replace(/\s*\(\d+\)$/, "").trim());
    if (off.size > 0) parts.push(`kinds: ${KINDS.filter((_, i) => !off.has(i)).map((k) => k.title).join(", ")}`);
    return parts.length === 0 ? "all entries" : parts.join("; ");
  }

  copy.addEventListener("click", async () => {
    const pool = visible();
    const label = copy.textContent;
    copy.disabled = true;
    copy.textContent = "Preparing…";
    try {
      const subjects = [...new Set(pool.map((row) => row.entry[0]))];
      const chunks = new Map<number, string[]>();
      await Promise.all(subjects.map(async (s) => chunks.set(s, await subjectNotes(s))));
      const lines = [`# Definitions that make theorems easy`, "", `${count(pool.length, "entry", "entries")}: ${describe()}.`, `From ${location.href}`, ""];
      let subject = -1;
      for (const row of pool) {
        if (row.entry[0] !== subject) {
          subject = row.entry[0];
          lines.push(`## ${data.subjects[subject]?.[1] ?? ""}`, "");
        }
        lines.push(chunks.get(subject)?.[row.place] ?? `### ${row.entry[1]}`, "");
      }
      const text = `${lines.join("\n").trim()}\n`;
      try {
        await navigator.clipboard.writeText(text);
        notes.hidden = true;
        copy.textContent = `Copied ${count(pool.length, "entry", "entries")}`;
      } catch {
        notes.value = text;
        notes.hidden = false;
        notes.select();
        copy.textContent = "Select all and copy below";
      }
    } catch {
      copy.textContent = "Could not load the notes";
    }
    setTimeout(() => {
      copy.textContent = label;
      copy.disabled = visible().length === 0;
    }, 2500);
  });

  apply();
}

const sheet = new CSSStyleSheet();
sheet.replaceSync(RULES);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
for (const figure of document.querySelectorAll<HTMLElement>("figure[data-kind=definitions]")) void wire(figure);

export {};
