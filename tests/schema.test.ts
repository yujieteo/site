import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { CHANGELOG, SCHEMA_VERSION } from "../src/api.ts";
import { FEEDS, tables } from "../src/tables.ts";
import { loadNotes, deals, today } from "../src/notes.ts";
import { scoreBets } from "../src/bets.ts";
import { useLifeNotes } from "../src/kit/life.ts";

// Columns are only ever added. Each table must start with exactly the columns frozen in
// tests/schema-frozen.json, in order and with the same type. To add a column, append it to the table in
// src/tables.ts, raise SCHEMA_VERSION's minor number, add a CHANGELOG entry, and append it here.

const frozen = JSON.parse(readFileSync("tests/schema-frozen.json", "utf8")) as { version: string; resources: Record<string, [string, string][]> };

function current(): Record<string, [string, string][]> {
  const notes = loadNotes("notes", `${process.env.TMPDIR ?? "/tmp"}/schema-test-out`);
  useLifeNotes({ checks: notes.checks ?? [], products: notes.products ?? [], advice: notes.advice ?? [] });
  const all = tables({ calls: notes.calls ?? [], outcomes: notes.outcomes ?? [], seen: deals(notes.prices ?? [], today()), bets: scoreBets(notes.forecasts ?? []) });
  const out: Record<string, [string, string][]> = {};
  for (const table of all) out[table.name] = table.columns.map((c) => [c.name, c.type]);
  for (const feed of FEEDS) out[feed.name] = feed.columns.map((c) => [c.name, c.type]);
  return out;
}

test("no frozen table or column is removed, renamed, moved or retyped", () => {
  const now = current();
  for (const [name, columns] of Object.entries(frozen.resources)) {
    expect(now[name], `table ${name} was removed`).toBeDefined();
    expect(now[name]?.slice(0, columns.length), `table ${name}`).toEqual(columns);
  }
});

test("a new column raises the version and has a changelog entry", () => {
  const now = current();
  const grew = Object.entries(now).some(([name, columns]) => columns.length > (frozen.resources[name]?.length ?? 0));
  if (grew) {
    expect(SCHEMA_VERSION, "raise SCHEMA_VERSION when adding a column").not.toBe(frozen.version);
    expect(CHANGELOG.some((entry) => entry.version === SCHEMA_VERSION), "add a CHANGELOG entry for the new version").toBe(true);
  }
  expect(CHANGELOG[0]?.version).toBe(SCHEMA_VERSION);
});

test("every deployed table has as_of, and a source or url column", () => {
  for (const [name, columns] of Object.entries(current())) {
    if (FEEDS.some((feed) => feed.name === name)) continue;
    const names = columns.map(([n]) => n);
    expect(names, name).toContain("as_of");
    expect(names.includes("source") || names.includes("url"), `${name} has no source`).toBe(true);
  }
});
