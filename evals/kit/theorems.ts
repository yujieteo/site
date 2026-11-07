import { BALANCED, groups, perfect, ranked, weighted } from "../../src/kit/theorems/scores.ts";
import { drawWeights, mulberry32 } from "../../src/kit/theorems/lottery.ts";
import { bounds, exactTail } from "../../src/kit/theorems/bounds.ts";
import { state } from "../../src/kit/theorems/path.ts";
import { retestStats } from "../../src/kit/theorems/retest.ts";
import { PATH } from "../../src/kit/theorems/data-path.ts";

function check(ok: boolean, claim: string): void {
  if (!ok) throw new Error(`The essay claims ${claim}, but the data disagrees`);
}

function tenthOfAll(weights: readonly number[]): number {
  const scores: number[] = [];
  for (const group of groups()) for (let i = 0; i < group.count; i++) scores.push(weighted(group.digits, weights));
  const sorted = Float64Array.from(scores).toSorted();
  return sorted[sorted.length - 10] ?? 0;
}

const next = mulberry32(11);
for (let draw = 0; draw < 200; draw++) {
  const weights = drawWeights(next);
  const top = ranked(weights).slice(0, 10);
  check(top[9]?.score === tenthOfAll(weights), "that the 41 candidates give the same top ten as all 2,740 results");
  let perfects = 0;
  for (const row of top) if (perfect(row)) perfects++;
  check(perfects === 5, "that the five perfect scores sit in every top ten");
}
check(ranked(BALANCED).length === 41, "that 41 results can reach the top ten");

const coin = bounds(100, 10);
check(coin[0]?.name === "Markov's inequality" && coin[0].score === 100, "that Markov's inequality scores 100");
let best = coin[0];
for (const bound of coin) if (best === undefined || bound.value < best.value) best = bound;
check(best?.name === "Chernoff bound", "that the Chernoff bound is best on 60 heads in 100 flips");
check(Math.abs(exactTail(100, 10) - 0.0284) < 0.0001, "that the exact chance of 60 heads or more is about 2.8%");

function node(name: string): number {
  for (let i = 0; i < PATH.length; i++) if (PATH[i]?.[0] === name) return i;
  return -1;
}

const markov = node("Markov's inequality");
const ready = state(new Set([markov])).ready;
const chebyshev = node("Chebyshev's inequality");
const chernoff = node("Chernoff bound");
check(ready.has(chebyshev) && ready.has(chernoff), "that knowing Markov's inequality makes Chebyshev and Chernoff ready");

const retest = retestStats();
check(retest.cells === 399 && retest.same === 292 && retest.lower === 97, "that the judge kept 292 of 399 scores and lowered 97");
console.log("Theorems essay claims passed");
