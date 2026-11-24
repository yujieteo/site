import { expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

test("a failed rebuild preserves the last preview and unrelated directories", () => {
  const dir = mkdtempSync(join(tmpdir(), "site-build-"));
  try {
    const posts = join(dir, "posts");
    const source = join(posts, "example");
    const preview = join(dir, "preview");
    const build = (out: string) => Bun.spawnSync([process.execPath, "src/build.ts", "--posts", posts, "--out", out]);
    mkdirSync(source, { recursive: true });
    const text = ["---", "title: Example", "date: 2026-01-01", "summary: Example post", "---", "## Introduction", "Example body", ""].join("\r\n");
    const postFile = join(source, "post.md");
    writeFileSync(postFile, text);
    expect(build(source).exitCode).toBe(1);
    expect(readFileSync(postFile, "utf8")).toBe(text);
    expect(build(preview).exitCode).toBe(0);
    const page = join(preview, "essays/example/index.html");
    const previous = readFileSync(page, "utf8");
    expect(previous).toContain("Example body");
    writeFileSync(postFile, text + "::figure kind=unknown\n");
    expect(build(preview).exitCode).toBe(1);
    expect(readFileSync(page, "utf8")).toBe(previous);
    expect(existsSync(join(preview, ".site-build"))).toBe(false);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// Release checks on a full build of the site. The paths below are served by the server's own jobs, not built here:
// see etc/httpd.conf in the server repo.
const SERVER_PATHS = ["/reading.html", "/reading.txt", "/forecasters.html", "/forecasters.txt", "/forecasters.xml", "/feed.xml", "/feeds-manifest.json", "/edmw.xml",
  "/singapore-policy-actionables.html", "/singapore-policy-actionables.txt", "/singapore-policy-actionables.xml", "/contact.gpg", "/health.txt"];
// The served style.css on 2026-11-21. The CSS must not grow.
const CSS_LIMIT = 25679;

test("the built site passes the release checks", () => {
  const out = mkdtempSync(join(tmpdir(), "site-release-"));
  try {
    const built = Bun.spawnSync([process.execPath, "src/build.ts", "--out", out]);
    expect(built.exitCode).toBe(0);
    expect(Bun.file(join(out, "style.css")).size).toBeLessThanOrEqual(CSS_LIMIT);
    const pages = [...new Bun.Glob("**/*.html").scanSync(out)].filter((page) => !page.startsWith("errdocs/"));
    const ids = new Map<string, Set<string>>();
    const html = new Map<string, string>();
    for (const page of pages) {
      const text = readFileSync(join(out, page), "utf8");
      html.set(page, text);
      ids.set(page, new Set([...text.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1] ?? "")));
    }
    const problems: string[] = [];
    for (const [page, text] of html) {
      if ((text.match(/<h1[\s>]/g) ?? []).length !== 1) problems.push(`${page}: needs exactly one h1`);
      if (!/<html lang="[a-z]/.test(text)) problems.push(`${page}: no lang`);
      if (!/<title>[^<]+<\/title>/.test(text)) problems.push(`${page}: no title`);
      for (const m of text.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
        const link = (m[1] ?? "").replaceAll("&amp;", "&");
        if (/^(?:[a-z]+:|\/\/)/i.test(link)) continue;
        const [path = "", fragment] = link.split("#");
        const base = `/${page}`.replace(/[^/]*$/, "");
        const target = path === "" ? `/${page}` : new URL(path, `https://site${base}`).pathname;
        if (SERVER_PATHS.includes(target) || target.startsWith("/f/")) continue;
        const file = target.endsWith("/") ? `${target}index.html` : target;
        if (!existsSync(join(out, decodeURIComponent(file)))) {
          problems.push(`${page}: broken link ${link}`);
          continue;
        }
        if (fragment && file.endsWith(".html") && !ids.get(file.slice(1))?.has(decodeURIComponent(fragment))) problems.push(`${page}: no id for ${link}`);
      }
    }
    expect(problems).toEqual([]);
  } finally {
    rmSync(out, { recursive: true, force: true });
  }
});

test("number columns line up on the right, and only number columns", async () => {
  const { markTables } = await import("../src/pages.ts");
  const table = "<table><thead><tr><th>Good</th><th>Miss</th><th>Lag</th><th>Month</th></tr></thead><tbody>" +
    "<tr><td>Eggs</td><td>2.49% → 2.25%</td><td>9 months</td><td>2026-12</td></tr><tr><td>Rice</td><td>S$1,404</td><td></td><td>2027-01</td></tr></tbody></table>";
  expect(markTables(table)).toBe("<table tabindex=\"0\"><thead><tr><th>Good</th><th class=\"num\">Miss</th><th>Lag</th><th>Month</th></tr></thead><tbody>" +
    "<tr><td>Eggs</td><td class=\"num\">2.49% → 2.25%</td><td>9 months</td><td>2026-12</td></tr><tr><td>Rice</td><td class=\"num\">S$1,404</td><td></td><td>2027-01</td></tr></tbody></table>");
  const call = "The CPI for bread in 2026-12 will be between 103.5 and 106.0.";
  expect(markTables(`<table><tr><th>Call</th><th>Outcome</th></tr><tr><td>${call}</td><td>open</td></tr></table>`))
    .toBe(`<table tabindex="0"><tr><th class="long">Call</th><th>Outcome</th></tr><tr><td class="long">${call}</td><td>open</td></tr></table>`);
});

test("a section file that would overwrite a table stops the build", async () => {
  const { checkApiPaths } = await import("../src/api.ts");
  const post = { slug: "tampines-food" } as Parameters<typeof checkApiPaths>[0][number]["post"];
  const table = { path: "api/tampines-food/places.txt" } as Parameters<typeof checkApiPaths>[1][number];
  const part = (file: string) => ({ file, label: file, depth: 2 as const, text: "" });
  expect(() => checkApiPaths([{ post, asOf: "2026-11-25", parts: [part("places.txt")] }], [table])).toThrow("is also a table");
  expect(() => checkApiPaths([{ post, asOf: "2026-11-25", parts: [part("menus.txt")] }], [table])).not.toThrow();
});

test("a good with no good-deal price has an empty cell and is never a good deal", async () => {
  const { deals, priceRows } = await import("../src/notes.ts");
  const diesel = priceRows().find((row) => row.id === "diesel-per-litre");
  expect(diesel?.deal).toBeNull();
  const note = { id: "diesel-per-litre", points: 0, text: "Diesel", fields: { price: "0.01", shop: "Shop", date: "2026-11-25", url: "https://example.invalid/" } };
  expect(deals([note], "2026-11-25")[0]?.good).toBe(false);
});
