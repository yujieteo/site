import { describe, expect, test } from "bun:test";
import { eggCount, packSize } from "../scripts/prices/history.ts";

// A small seeded generator, so a failing case gives the same inputs on every run.
function random(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const UNITS: readonly (readonly [string, string, number])[] = [
  ["g", "kg", 0.001], ["gm", "kg", 0.001], ["kg", "kg", 1], ["ml", "L", 0.001], ["l", "L", 1], ["ltr", "L", 1],
];
const RUNS = 500;

function cases(seed: number): { amount: string; value: number; unit: readonly [string, string, number]; n: number; m: number }[] {
  const next = random(seed);
  const pick = (k: number) => Math.floor(next() * k);
  return Array.from({ length: RUNS }, () => {
    const cents = 1 + pick(99999);
    const amount = pick(2) === 0 ? String(Math.ceil(cents / 100)) : (cents / 100).toFixed(2);
    return { amount, value: Number(amount), unit: UNITS[pick(UNITS.length)] ?? ["g", "kg", 0.001], n: 1 + pick(48), m: 1 + pick(12) };
  });
}

function expectSize(text: string, unit: string, size: number): void {
  const found = packSize(text);
  expect(found?.unit, text).toBe(unit);
  expect(found?.size ?? NaN, text).toBeCloseTo(size, 9);
}

describe("packSize", () => {
  test("reads the examples in its comment and other fixed cases", () => {
    expectSize("5 KG", "kg", 5);
    expectSize("1.89L", "L", 1.89);
    expectSize("20 x 16g", "kg", 0.32);
    expectSize("13 + 3 x 31.6g", "kg", 0.5056);
    expectSize("5L + 1L", "L", 6);
    expectSize("550g (10 per pack)", "kg", 0.55);
    expectSize("2 × 500ml", "L", 1);
    expectSize("1,5 Ltr", "L", 1.5);
    expectSize("Rice   10   KG", "kg", 10);
    expectSize("250gm", "kg", 0.25);
  });

  test("gives no size when the text has none, or mixes units", () => {
    for (const text of ["", "Large Eggs", "10 per pack", "Pack of 6", "5gms", "1kg + 500ml"]) expect(packSize(text), text).toBeUndefined();
  });

  test("one amount gives that amount in kg or L", () => {
    for (const { amount, value, unit } of cases(1)) expectSize(`${amount}${unit[0]}`, unit[1], value * unit[2]);
  });

  test("case and spaces do not change the result", () => {
    for (const { amount, unit } of cases(2)) {
      const plain = packSize(`${amount}${unit[0]}`);
      expect(packSize(`  ${amount} ${unit[0].toUpperCase()}  `), amount + unit[0]).toEqual(plain);
    }
  });

  test("n x amount is n times the amount, with x or ×", () => {
    for (const { amount, value, unit, n } of cases(3)) {
      expectSize(`${n} x ${amount}${unit[0]}`, unit[1], n * value * unit[2]);
      expectSize(`${n}×${amount}${unit[0]}`, unit[1], n * value * unit[2]);
    }
  });

  test("n + m x amount counts the free packs", () => {
    for (const { amount, value, unit, n, m } of cases(4)) expectSize(`${n} + ${m} x ${amount}${unit[0]}`, unit[1], (n + m) * value * unit[2]);
  });

  test("two amounts in one unit add up", () => {
    const pairs = cases(5);
    for (const [i, { amount, value, unit }] of pairs.entries()) {
      const other = pairs[(i + 1) % pairs.length] ?? { amount, value };
      expectSize(`${amount}${unit[0]} + ${other.amount}${unit[0]}`, unit[1], (value + other.value) * unit[2]);
    }
  });
});

describe("eggCount", () => {
  test("reads fixed cases", () => {
    expect(eggCount("Fresh Eggs 10s")).toBe(10);
    expect(eggCount("Eggs 10's")).toBe(10);
    expect(eggCount("Large eggs 30 pcs")).toBe(30);
    expect(eggCount("Kampong 6 pieces")).toBe(6);
    expect(eggCount("15 eggs")).toBe(15);
    expect(eggCount("Omega eggs (15)")).toBe(15);
    expect(eggCount("Brown eggs 10 per pack")).toBe(10);
    expect(eggCount("Large Eggs")).toBeUndefined();
    expect(eggCount("Eggs 600g")).toBeUndefined();
  });

  test("every form of a count gives that count, in any case", () => {
    for (const { n, m } of cases(6)) {
      const count = n * m;
      for (const text of [`${count} per pack`, `${count}pcs`, `${count} pieces`, `${count} eggs`, `${count}s`, `${count}'s`, `(${count})`]) {
        expect(eggCount(`Eggs ${text}`), text).toBe(count);
        expect(eggCount(`EGGS ${text.toUpperCase()}`), text).toBe(count);
      }
    }
  });
});
