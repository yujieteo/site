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
