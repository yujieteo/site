import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import { gzipSync } from "node:zlib";
import ts from "typescript-scanner";

const ROOT = resolve("public");
const SERVER_MADE_PATHS: readonly string[] = ["/log", "/log/feed.xml"];
const POLICY_PAGE_MAX_BYTES = 6000;
const WKD_KEY = "dj3498u4hyyarh35rkjfnghbjxug6b19";
const EXPLORATION_KINDS: readonly string[] = ["Experiment", "Project", "Essay"];
const GZIP_LEVEL = 9;

interface Budget {
  name: string;
  pages: (page: string) => boolean;
  bytes: number;
}

const BUDGETS: readonly Budget[] = [
  { name: "home page", pages: (page) => page === "/index.html", bytes: 102400 },
  { name: "beam page", pages: (page) => page === "/play/beamdiag/index.html", bytes: 604160 },
  { name: "policy and support pages", pages: (page) => /^\/(lullapixie|marklove)\//.test(page), bytes: 102400 },
  { name: "essays", pages: (page) => page.startsWith("/essays/"), bytes: 102400 },
  { name: "log template", pages: (page) => page === "/log/template.html", bytes: 102400 },
  { name: "goosestrike page", pages: (page) => page === "/play/goosestrike/index.html", bytes: 122880 },
  { name: "marklove editor", pages: (page) => page === "/play/marklove/index.html", bytes: 563200 },
  { name: "neurons page", pages: (page) => page === "/play/neurons/index.html", bytes: 112640 },
  { name: "theorem explorer page", pages: (page) => page === "/play/theorem-explorer/index.html", bytes: 7362560 },
  { name: "theorem learner page", pages: (page) => page === "/play/theorem-learner/index.html", bytes: 7362560 },
  { name: "wallpaper page", pages: (page) => page === "/play/wallpaper/index.html", bytes: 133120 },
];
const DEFAULT_BUDGET: Budget = { name: "default", pages: () => true, bytes: 102400 };

const failures: string[] = [];

function fail(message: string): void {
  failures.push(message);
}

function read(path: string): string {
  return readFileSync(path, "utf8");
}

const isExternal = (url: string): boolean => /^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith("//");

function pathOf(url: string): string {
  const end = url.search(/[?#]/);
  return decodeURIComponent(end < 0 ? url : url.slice(0, end));
}

function pagesIn(folder: string): string[] {
  return [...new Bun.Glob("**/*.html").scanSync({ cwd: folder })].sort().map((name) => resolve(folder, name));
}

async function attributes(html: string, selector: string, names: readonly string[]): Promise<string[]> {
  const found: string[] = [];
  await new HTMLRewriter().on(selector, {
    element(element) {
      for (const name of names) {
        const value = element.getAttribute(name);
        if (value) found.push(value);
      }
    },
  }).transform(new Response(html)).text();
  return found;
}

function linksOf(html: string): Promise<string[]> {
  return attributes(html, "[href], [src]", ["href", "src"]);
}

function targetOf(page: string, url: string): string | null {
  if (isExternal(url)) return null;
  const path = pathOf(url);
  if (!path || SERVER_MADE_PATHS.includes(path)) return null;
  const target = path.startsWith("/") ? resolve(ROOT, `.${path}`) : resolve(dirname(page), path);
  if (target !== ROOT && !target.startsWith(ROOT + sep)) throw new Error(`link leaves public: ${url} in ${page}`);
  return existsSync(target) && statSync(target).isDirectory() ? resolve(target, "index.html") : target;
}

function fileFromPage(page: string, url: string): string {
  return url.startsWith("/") ? resolve(ROOT, `.${url}`) : resolve(dirname(page), url);
}

async function firstLoadFiles(page: string): Promise<string[]> {
  const html = read(page);
  const queue: string[] = [];
  for (const url of await attributes(html, "link[href]", ["href"])) queue.push(url);
  for (const url of await attributes(html, "script[src], img[src]", ["src"])) queue.push(url);
  const referenced = queue.filter((url) => !isExternal(url) && !SERVER_MADE_PATHS.includes(pathOf(url)) && !url.startsWith("data:") && !url.startsWith("#"));
  const fetched = [...html.matchAll(/(?:fetch\(|\.href=|\.src=)"([^":]*)"/g)].map((match) => match[1] ?? "");
  const files = [...referenced, ...fetched].map((url) => fileFromPage(page, pathOf(url)));
  const loaded: string[] = [page];
  while (files.length > 0) {
    const file = files.shift();
    if (file === undefined || loaded.includes(file)) continue;
    loaded.push(file);
    if (file.endsWith(".css")) {
      for (const match of read(file).matchAll(/url\(([^)]+)\)/g)) {
        const url = (match[1] ?? "").trim().replace(/^['"]|['"]$/g, "");
        if (!isExternal(url)) files.push(url.startsWith("/") ? resolve(ROOT, `.${url}`) : resolve(dirname(file), url));
      }
    }
  }
  return loaded;
}

function gzippedSize(file: string): number {
  const bytes = readFileSync(file);
  return file.endsWith(".gz") ? bytes.length : gzipSync(bytes, { level: GZIP_LEVEL }).length;
}

async function firstLoadBytes(page: string): Promise<number> {
  return (await firstLoadFiles(page)).reduce((total, file) => total + gzippedSize(file), 0);
}

interface Exploration {
  kind: string;
  title: string;
  href: string;
}

async function explorationsOf(html: string): Promise<Exploration[]> {
  const entries: { kind: string; title: string; href: string }[] = [];
  const last = (): { kind: string; title: string; href: string } => {
    const entry = entries[entries.length - 1];
    if (!entry) throw new Error("home page exploration field outside an entry");
    return entry;
  };
  await new HTMLRewriter()
    .on("ol.featured > li", { element() { entries.push({ kind: "", title: "", href: "" }); } })
    .on("ol.featured a", { element(element) { last().href = element.getAttribute("href") ?? ""; } })
    .on("ol.featured h3", { text(chunk) { last().title += chunk.text; } })
    .on("ol.featured .kind", { text(chunk) { last().kind += chunk.text; } })
    .transform(new Response(html)).text();
  return entries;
}

async function checkFiles(): Promise<string[]> {
  const fixed = read("fixed-urls.txt").split(/\s+/).filter(Boolean);
  const pages = fixed.map((url) => url.replace(/^\//, "") + (url.endsWith("/") ? "index.html" : ""));
  const required = ["index.html", "style.css", "log/template.html", ...pages,
    `.well-known/openpgpkey/hu/${WKD_KEY}`, `.well-known/openpgpkey/teoyujie.org/hu/${WKD_KEY}`];
  for (const name of required) {
    if (!existsSync(resolve(ROOT, name)) || statSync(resolve(ROOT, name)).size === 0) fail(`missing or empty: ${name}`);
  }
  for (const name of pages) {
    if (name.endsWith(".html") && !name.includes("beamdiag") && statSync(resolve(ROOT, name)).size > POLICY_PAGE_MAX_BYTES) {
      fail(`policy or support page over ${POLICY_PAGE_MAX_BYTES} bytes: ${name}`);
    }
  }
  return pages;
}

async function checkLinks(): Promise<void> {
  for (const page of pagesIn(ROOT)) {
    for (const url of await linksOf(read(page))) {
      const target = targetOf(page, url);
      if (target !== null && !(existsSync(target) && statSync(target).isFile())) fail(`broken link in ${relative(ROOT, page)}: ${url}`);
    }
  }
}

async function checkHome(): Promise<void> {
  const slots = read(resolve(ROOT, "log/template.html")).split("<!-- pond:entries -->").length - 1;
  if (slots !== 1) fail("log template needs one <!-- pond:entries -->");
  const home = read(resolve(ROOT, "index.html"));
  for (const path of ["/lullapixie/privacy.html", "/lullapixie/support.html", "/marklove/privacy.html",
    "/marklove/support.html", "/contact.asc", "mailto:contact@teoyujie.org"]) {
    if (!home.includes(`href="${path}"`)) fail(`home page has no link to ${path}`);
  }
  const entries = await explorationsOf(home);
  if (entries.length === 0) fail("home page has no selected explorations");
  for (const entry of entries) {
    const kind = entry.kind.split(" · ")[0] ?? "";
    if (!EXPLORATION_KINDS.includes(kind)) fail(`bad kind: ${JSON.stringify(entry)}`);
    if (!entry.title.trim() || !entry.href) fail(`no title or link: ${JSON.stringify(entry)}`);
    if (kind === "Project" && !entry.href.startsWith("https://")) fail(`project is not a link to its repository: ${JSON.stringify(entry)}`);
  }
}

async function checkBudgets(): Promise<void> {
  const totals = new Map<string, number>();
  for (const page of pagesIn(ROOT)) totals.set("/" + relative(ROOT, page), await firstLoadBytes(page));
  for (const [page, total] of totals) {
    const budget = BUDGETS.find((candidate) => candidate.pages(page)) ?? DEFAULT_BUDGET;
    if (total > budget.bytes) fail(`${page} first load is ${total} bytes gzipped, over the ${budget.name} budget of ${budget.bytes}`);
  }
  for (const budget of [...BUDGETS, DEFAULT_BUDGET]) {
    const largest = Math.max(0, ...[...totals].filter(([page]) => (budget === DEFAULT_BUDGET ? !BUDGETS.some((other) => other.pages(page)) : budget.pages(page))).map(([, total]) => total));
    console.log(`check: ${budget.name}: largest first load ${largest} of ${budget.bytes} bytes gzipped`);
  }
}
async function checkEssays(): Promise<void> {
  for (const page of pagesIn(resolve(ROOT, "essays"))) {
    const html = read(page);
    for (const figure of html.matchAll(/<figure>(.*?)<\/figure>/gs)) {
      const body = figure[1] ?? "";
      if (!body.includes("<figcaption>")) fail(`figure without caption in ${relative(ROOT, page)}`);
      if (!/<svg[^>]*role="img"[^>]*aria-label="[^"]+"/.test(body)) fail(`figure svg without alt text in ${relative(ROOT, page)}`);
    }
  }
}

const OWN_TYPESCRIPT_FILES = ["beamdiag/**/*.ts", "wallpaper/**/*.ts", "scripts/**/*.ts"];
const SOURCE_CREDIT = /https:\/\//;

function ownTypescriptFiles(): string[] {
  return OWN_TYPESCRIPT_FILES.flatMap((pattern) => [...new Bun.Glob(pattern).scanSync({ cwd: ".", dot: false })]).sort();
}

function commentsOf(file: string, source: string): string[] {
  const sourceFile = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  const seen = new Set<number>();
  const found: string[] = [];
  const visit = (node: ts.Node): void => {
    if (!seen.has(node.pos)) {
      seen.add(node.pos);
      for (const range of [...(ts.getLeadingCommentRanges(source, node.pos) ?? []), ...(ts.getTrailingCommentRanges(source, node.pos) ?? [])]) {
        if (seen.has(-range.pos - 1)) continue;
        seen.add(-range.pos - 1);
        const text = source.slice(range.pos, range.end);
        if (!SOURCE_CREDIT.test(text)) found.push(`${file}:${sourceFile.getLineAndCharacterOfPosition(range.pos).line + 1}: ${text.split("\n")[0] ?? ""}`);
      }
    }
    node.getChildren(sourceFile).forEach(visit);
  };
  visit(sourceFile);
  return found;
}

function escapesOf(file: string, source: string): string[] {
  const found: string[] = [];
  const sourceFile = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true);
  const visit = (node: ts.Node): void => {
    const where = `${file}:${sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1}`;
    if (node.kind === ts.SyntaxKind.AnyKeyword) found.push(`${where}: any`);
    else if (ts.isNonNullExpression(node)) found.push(`${where}: non-null assertion`);
    else if (ts.isTypeAssertionExpression(node)) found.push(`${where}: type assertion`);
    else if (ts.isAsExpression(node) && !(ts.isTypeReferenceNode(node.type) && node.type.typeName.getText() === "const")) found.push(`${where}: as cast`);
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return found;
}

function checkTypescriptSources(): void {
  for (const file of ownTypescriptFiles()) {
    const source = read(file);
    for (const comment of commentsOf(file, source)) fail(`comment without an outside source: ${comment}`);
    for (const escape of escapesOf(file, source)) fail(`type escape hatch: ${escape}`);
  }
}

checkTypescriptSources();
await checkFiles();
await checkLinks();
await checkHome();
await checkBudgets();
await checkEssays();
if (failures.length > 0) {
  console.error(failures.map((message) => `check: ${message}`).join("\n"));
  process.exit(1);
}
