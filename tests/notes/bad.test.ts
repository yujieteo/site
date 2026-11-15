import { describe, expect, test } from "bun:test";
import { build, message, readCases } from "./cases.ts";

// Every case in bad.txt must stop the build with the expected message. gaps.txt holds the rules that
// src/notes.ts does not enforce yet: it is not run here.
describe("bad notes lines fail the build", () => {
  const cases = readCases("bad.txt");
  test("the fixture is not empty", () => expect(cases.length).toBeGreaterThan(50));
  cases.forEach((c, i) => {
    test(`${i + 1}. ${c.part}: ${c.expect} (${c.why})`, () => {
      const got = message(c);
      expect(got).toBeDefined();
      expect(got).toContain(c.expect);
    });
  });
});

describe("valid lines load", () => {
  for (const c of readCases("good.txt")) {
    test(`${c.part}: ${c.line.slice(0, 50).replace(/\t/g, " ")}`, () => {
      expect(() => build(c)).not.toThrow();
    });
  }
});
