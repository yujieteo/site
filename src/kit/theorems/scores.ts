import { CANDIDATES, SCORES } from "./data-scores.ts";

export interface Row {
  name: string;
  digits: number[];
  score: number;
  balanced: number;
}

export const BALANCED: readonly number[] = [25, 25, 20, 15, 5, 5, 5];
const DIALS = 7;

export function digitsOf(text: string): number[] {
  const out: number[] = [];
  for (let i = 0; i < DIALS; i++) out.push(Number(text[i] ?? "0"));
  return out;
}

export function weighted(digits: readonly number[], weights: readonly number[]): number {
  let sum = 0;
  let total = 0;
  for (let i = 0; i < DIALS; i++) {
    sum += (weights[i] ?? 0) * (digits[i] ?? 0);
    total += weights[i] ?? 0;
  }
  return total > 0 ? (100 * sum) / (4 * total) : 0;
}

export function groups(): { digits: number[]; count: number }[] {
  const out: { digits: number[]; count: number }[] = [];
  for (const item of SCORES.split(" ")) out.push({ digits: digitsOf(item), count: Number(item.slice(DIALS)) });
  return out;
}

export function ranked(weights: readonly number[]): Row[] {
  const rows: Row[] = [];
  for (const [name, text] of CANDIDATES) {
    const digits = digitsOf(text);
    rows.push({ name, digits, score: weighted(digits, weights), balanced: weighted(digits, BALANCED) });
  }
  rows.sort((a, b) => b.score - a.score || b.balanced - a.balanced || a.name.localeCompare(b.name));
  return rows;
}

export function perfect(row: Row): boolean {
  return row.digits.every((d) => d === 4);
}
