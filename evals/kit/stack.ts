import { ok, strictEqual } from "node:assert/strict";
import { gapNote, gaps, paradigmIndex } from "../../src/kit/gap.ts";
import { distance, info, kept, leaning, nearest, proj, refit } from "../../src/kit/map.ts";
import { matrixOrder } from "../../src/kit/matrix.ts";
import { DIMS, INFO_LOADINGS } from "../../src/kit/pca.hot.ts";
import { LINKS, PROBLEMS, RESPONDENTS, SEEDS } from "../../src/kit/problem-data.ts";
import { START_STACK } from "../../src/kit/stack.ts";
import { AXES, PARADIGMS, REPOS } from "../../src/kit/stack-data.ts";

const all = new Uint8Array(DIMS).fill(1);
const noImmutable = new Uint8Array(DIMS).fill(1);
noImmutable[1] = 0;
function name(i: number): string {
  return PARADIGMS[i]?.name ?? "";
}

function names(list: number[]): string {
  let out = "";
  for (const i of list) out += (out ? ", " : "") + name(i);
  return out;
}

function near(of: string, on: Uint8Array): string {
  const from = paradigmIndex(of);
  let out = "";
  for (const i of nearest(from, on, 3)) out += (out ? ", " : "") + `${name(i)} ${distance(from, i, on).toFixed(1)}`;
  return out;
}

function sumScores(axis: number, layer: number): { total: number; rows: number } {
  let total = 0;
  let rows = 0;
  for (const p of PARADIGMS) {
    if (layer >= 0 && p.layer !== layer) continue;
    total += p.scores[axis] ?? 0;
    rows++;
  }
  return { total, rows };
}

function layerMean(layer: number, axis: number): string {
  const { total, rows } = sumScores(axis, layer);
  return (total / rows).toFixed(1);
}

function spread(axis: number): string {
  const { total, rows } = sumScores(axis, -1);
  const mean = total / rows;
  let sq = 0;
  for (const p of PARADIGMS) sq += ((p.scores[axis] ?? 0) - mean) ** 2;
  return (sq / (rows - 1)).toFixed(1);
}

function countScores(test: number, axis: number): number {
  let n = 0;
  for (const p of PARADIGMS) for (let a = 0; a < p.scores.length; a++) if (p.scores[a] === test && (axis < 0 || a === axis)) n++;
  return n;
}

function countLinks(problem: number, reduces: boolean, layer: number): number {
  let n = 0;
  for (const l of LINKS) {
    if (problem >= 0 && l.problem !== problem) continue;
    if (l.reduces !== reduces) continue;
    if (layer >= 0 && SEEDS[l.paradigm]?.layer !== layer) continue;
    n++;
  }
  return n;
}

function uniqueParadigms(): number {
  const seen = new Set<number>();
  for (const l of LINKS) seen.add(l.paradigm);
  return seen.size;
}

strictEqual(PARADIGMS.length, 27);
strictEqual(REPOS.length, 11);
strictEqual(AXES.length * PARADIGMS.length, 216);
strictEqual(countScores(5, -1), 20);
strictEqual(countScores(0, 2), 16);
console.log("PASS the data has 27 paradigms, 11 repositories, 216 scores, 20 fives and 16 zeros on distributed operation");

strictEqual([layerMean(3, 2), layerMean(0, 2), layerMean(1, 2), layerMean(1, 4)].join(" "), "6.3 1.7 1.7 10.0");
console.log("PASS layer means on distributed operation are 6.3, 1.7 and 1.7, and hardware is 10.0 on hardware proximity");

strictEqual([spread(7), spread(2), spread(6)].join(" "), "20.3 19.4 8.7");
console.log("PASS the variances of durable state, distributed operation and component isolation are 20.3, 19.4 and 8.7");

strictEqual(distance(paradigmIndex("Functional programming"), paradigmIndex("Actor model"), all).toFixed(1), "13.9");
strictEqual(distance(paradigmIndex("Functional programming"), paradigmIndex("Logic programming"), all).toFixed(1), "6.2");
strictEqual(distance(paradigmIndex("Functional programming"), paradigmIndex("Constraint programming"), all).toFixed(1), "12.3");
let low = 99;
let high = 0;
for (let a = 0; a < PARADIGMS.length; a++) {
  for (let b = a + 1; b < PARADIGMS.length; b++) {
    low = Math.min(low, distance(a, b, all));
    high = Math.max(high, distance(a, b, all));
  }
}
strictEqual([low.toFixed(1), high.toFixed(1)].join(" "), "4.2 23.7");
console.log("PASS pair distances are 13.9, 6.2 and 12.3 and the closest and farthest pairs are 4.2 and 23.7 apart");

strictEqual(near("Functional programming", all), "Logic programming 6.2, Event sourcing 11.7, Embedded database 12.0");
strictEqual(near("Functional programming", noImmutable), "Logic programming 1.4, Concatenative programming 9.3, Embedded database 9.7");
strictEqual(near("Embedded database", all), "Logic programming 10.6, Event sourcing 11.0, Functional programming 12.0");
strictEqual(near("Embedded database", noImmutable), "Event sourcing 7.5, Functional programming 9.7, Logic programming 10.6");
console.log("PASS leaving out immutable state changes the neighbours of the functional language and the embedded database");

refit(all);
strictEqual(kept(), "The two directions keep 61% of the spread (41% and 20%).");
strictEqual(leaning(all), "Across: more Distributed operation, more Durable state · Up: more Immutable state, more Declarative interface");
let dot = 0;
for (let j = 0; j < DIMS; j++) dot += (info[INFO_LOADINGS + j] ?? 0) * (info[INFO_LOADINGS + DIMS + j] ?? 0);
ok(Math.abs(dot) < 1e-6, "the two directions are at a right angle");
const ends = [0, 0, 0, 0];
for (let i = 1; i < PARADIGMS.length; i++) {
  if ((proj[2 * i] ?? 0) < (proj[2 * (ends[0] ?? 0)] ?? 0)) ends[0] = i;
  if ((proj[2 * i] ?? 0) > (proj[2 * (ends[1] ?? 0)] ?? 0)) ends[1] = i;
  if ((proj[2 * i + 1] ?? 0) > (proj[2 * (ends[2] ?? 0) + 1] ?? 0)) ends[2] = i;
  if ((proj[2 * i + 1] ?? 0) < (proj[2 * (ends[3] ?? 0) + 1] ?? 0)) ends[3] = i;
}
strictEqual(names(ends), "Separation kernel, Peer-to-peer, Constraint programming, Cluster (warehouse-scale computer)");
console.log("PASS the fitted map keeps 61% of the spread and puts the separation kernel, peer-to-peer, constraint programming and the cluster at its four edges");

strictEqual(names(matrixOrder(7).slice(0, 4)), "Embedded database, Functional package management, Single-level store, Cluster (warehouse-scale computer)");
console.log("PASS sorting the grid by durable state puts the embedded database first");

const g = gaps(START_STACK);
let sum = 0;
for (const v of g) sum += v;
strictEqual(sum, 52);
strictEqual(gapNote(START_STACK), "Gaps add up to 52. Widest: Durable state (10).");
strictEqual([g[4], g[5]].join(" "), "9 9");
console.log("PASS the stack on screen has gaps that add up to 52, widest 10 on durable state");

strictEqual(LINKS.length, 73);
strictEqual(uniqueParadigms(), 46);
strictEqual(SEEDS.length, 49);
strictEqual(RESPONDENTS, 28251);
let shares = "";
for (let i = 0; i < PROBLEMS.length; i++) shares += `${i ? ", " : ""}${PROBLEMS[i]?.percent} ${countLinks(i, true, -1)}/${countLinks(i, false, -1)}`;
strictEqual(shares, "62.4 16/6, 32.9 1/4, 32.3 4/4, 31.5 23/15");
strictEqual(countLinks(-1, true, -1), 44);
strictEqual(`${countLinks(-1, false, 1)} ${countLinks(-1, true, 1)}`, "9 3");
console.log("PASS the survey shares and the 73 links give 44 reduces, 29 worsens, and 9 and 3 for hardware");
