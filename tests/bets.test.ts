import { expect, test } from "bun:test";
import { scoreBets } from "../src/bets.ts";
import type { Note } from "../src/notes.ts";

function bet(id: string, made: string, by: string, market: string, outcome = "yes"): Note {
  return {
    id, points: 0, text: `quote ${id}`,
    fields: { made: `2026-01-${made}T00:00:00Z`, by, market, outcome, side: "yes", price: "0.5", fermi: "none" },
  };
}

const one = "https://example.invalid/one";
const two = "https://example.invalid/two";

test("a later claim by the same person on the same market keeps its quote but is neutral", () => {
  const first = bet("first", "01", "A", one);
  const later = bet("later", "03", "A", one);
  later.fields.revises = first.id;
  const [a, b] = scoreBets([later, first]);
  expect(a?.note).toBe(first);
  expect(a?.factor).toBe(1.5);
  expect(a?.repeatOf).toBeNull();
  expect(a?.running).toBe(1.5);
  expect(b?.note).toBe(later);
  expect(b?.factor).toBe(1);
  expect(b?.repeatOf).toBe(first.id);
  expect(b?.running).toBe(1.5);
});

test("distinct people or distinct market URLs are scored separately", () => {
  const [a1, b1, a2] = scoreBets([
    bet("first", "01", "A", one), bet("other-person", "02", "B", one),
    bet("other-market", "03", "A", two),
  ]);
  expect([a1?.repeatOf, b1?.repeatOf, a2?.repeatOf]).toEqual([null, null, null]);
  expect([a1?.factor, b1?.factor, a2?.factor]).toEqual([1.5, 1.5, 1.5]);
  expect([a1?.running, b1?.running, a2?.running]).toEqual([1.5, 1.5, 2.25]);
});

test("open or void rows keep an empty factor and still reserve the first occurrence", () => {
  const [first, repeat, other] = scoreBets([
    bet("open-first", "01", "A", one, "open"), bet("second", "02", "A", one),
    bet("void-other", "03", "A", two, "void"),
  ]);
  expect([first?.repeatOf, repeat?.repeatOf, other?.repeatOf]).toEqual([null, "open-first", null]);
  expect([first?.factor, repeat?.factor, other?.factor]).toEqual([null, 1, null]);
  expect([first?.running, repeat?.running, other?.running]).toEqual([1, 1, 1]);
});

test("the row ID breaks ties at an identical posting time", () => {
  const [a, b] = scoreBets([bet("b", "01", "A", one), bet("a", "01", "A", one)]);
  expect([a?.note.id, a?.factor, b?.note.id, b?.factor]).toEqual(["a", 1.5, "b", 1]);
});

test("every limit in src/kit/limits.ts matches its row in research/bets/limits.tsv", async () => {
  const { readFileSync } = await import("node:fs");
  const { LIMITS } = await import("../src/kit/limits.ts");
  const [head = "", ...lines] = readFileSync("research/bets/limits.tsv", "utf8").trimEnd().split("\n");
  const names = head.split("\t");
  const rows = new Map(lines.map((line) => {
    const cells = line.split("\t");
    const row = Object.fromEntries(names.map((name, i) => [name, cells[i] ?? ""]));
    return [row.key ?? "", row];
  }));
  for (const [key, limit] of Object.entries(LIMITS)) {
    const row = rows.get(key);
    expect(row, `${key} is not in limits.tsv`).toBeDefined();
    expect(Number(row?.value), key).toBe(limit.value);
    expect(Number(row?.year), key).toBe(limit.year);
    expect(row?.source_url, key).toBe(limit.url);
  }
});
