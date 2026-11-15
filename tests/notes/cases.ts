import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import * as life from "../../src/kit/life.ts";
import { loadNotes } from "../../src/notes.ts";

export interface Case {
  part: string;
  expect: string; // for gaps.txt this is the observed behaviour
  why: string;
  setup: { part: string; line: string }[];
  line: string;
}

// Blocks are split by a blank line. Do not trim: a CRLF case ends in a real \r.
export function readCases(file: string): Case[] {
  const cases: Case[] = [];
  const text = readFileSync(join(import.meta.dir, file), "utf8");
  for (const block of text.split("\n\n")) {
    const lines = block.split("\n").filter((l, i, all) => !(l === "" && i === all.length - 1));
    const c: Case = { part: "", expect: "", why: "", setup: [], line: "" };
    let pending = "";
    let seen = false;
    for (const l of lines) {
      if (l.startsWith("# part: ")) c.part = l.slice(8);
      else if (l.startsWith("# expect: ")) c.expect = l.slice(10);
      else if (l.startsWith("# observed: ")) c.expect = l.slice(12);
      else if (l.startsWith("# why: ")) c.why = l.slice(7);
      else if (l.startsWith("# setup: ")) pending = l.slice(9);
      else if (pending) {
        c.setup.push({ part: pending, line: l });
        pending = "";
      } else {
        c.line = l;
        seen = true;
      }
    }
    if (seen) cases.push(c);
  }
  return cases;
}

// Writes the setup lines and then the line into <tmp>/notes/<part>.tsv, loads the notes like the build does, and
// also draws the products list, which runs shelfOf with the loaded products. Throws what the build throws.
export function build(c: Case): void {
  const root = mkdtempSync(join(tmpdir(), "notes-"));
  try {
    const dir = join(root, "notes");
    mkdirSync(dir, { recursive: true });
    const files = new Map<string, string[]>();
    for (const s of c.setup) files.set(s.part, [...(files.get(s.part) ?? []), s.line]);
    files.set(c.part, [...(files.get(c.part) ?? []), c.line]);
    for (const [part, lines] of files) writeFileSync(join(dir, `${part}.tsv`), `${lines.join("\n")}\n`);
    const all = loadNotes(dir, join(root, "out"));
    life.useLifeNotes({ checks: all.checks ?? [], products: all.products ?? [], advice: all.advice ?? [] });
    // src/ is being edited: productsList was renamed productRows. Use whichever exists.
    const draw = (life as Record<string, unknown>).productsList ?? (life as Record<string, unknown>).productRows;
    if (typeof draw !== "function") throw new Error("tests/notes: life.ts exports neither productsList nor productRows");
    draw();
  } finally {
    life.useLifeNotes({ checks: [], products: [], advice: [] });
    rmSync(root, { recursive: true, force: true });
  }
}

export function message(c: Case): string | undefined {
  try {
    build(c);
  } catch (e) {
    return e instanceof Error ? e.message : String(e);
  }
  return undefined;
}
