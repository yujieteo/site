// The site's integration of the Toulmin port (visuals/toulmin/) with the beamdswitch build the site vendors
// at visuals/beamdswitch/: the engine's narration timing and sentence splitting must match that build.
// Toulmin's own logic tests develop and run in yujieteo/toulmin.
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const read = (p) => readFile(new URL(p, import.meta.url), "utf8");
const html = await read("../visuals/toulmin/index.html");
const ctx = {};
vm.createContext(ctx);
vm.runInContext(/<script id="toulmin-engine">([\s\S]*?)<\/script>/.exec(html)[1], ctx);
const T = ctx.Toulmin;
const J = (x) => JSON.parse(JSON.stringify(x));

const beam = await read("../visuals/beamdswitch/index.html");
function vendoredSplit() {
  const at = beam.indexOf("e\\.g|i\\.e|etc|vs|cf|Fig|Eq|Dr|Mr|Mrs|Ms|Prof|No|approx");
  const start = beam.lastIndexOf("function ", beam.lastIndexOf("String(", at));
  const end = beam.indexOf("return i.trim()&&n.push(i.trim()),n}", at) + "return i.trim()&&n.push(i.trim()),n}".length;
  assert.ok(start > 0 && end > at, "beamdswitch's sentence splitter is in the vendored build");
  const fn = beam.slice(start, end);
  const name = /^function (\w+)/.exec(fn)[1];
  const c = {};
  vm.createContext(c);
  vm.runInContext(fn + `;globalThis.split=${name};`, c);
  return c.split;
}

test("constants equal the vendored beamdswitch build: 130 wpm, 0.8 s floor, 0.35 s lead, 0.25 s gap, 0.6 s tail", () => {
  const wpm = /var (\w+)=(\d+);function \w+\(\w\)\{let \w=String\(\w\)\.split\(\/\\s\+\/\)\.filter\(Boolean\)\.length;return Math\.max\(([\d.]+),\w\*60\/\1\)\}/.exec(beam);
  assert.ok(wpm, "estimateSeconds found");
  assert.equal(+wpm[2], T.TIMING.wpm);
  assert.equal(Math.round(+wpm[3] * 1000), T.TIMING.minSentenceMs);
  const plan = /\{lead:\w=([\d.]+),gap:\w=([\d.]+),tail:\w=([\d.]+)\}=\{\}/.exec(beam);
  assert.ok(plan, "the frame plan's lead, gap and tail found");
  assert.deepEqual([plan[1], plan[2], plan[3]].map((x) => Math.round(+x * 1000)), [T.TIMING.leadMs, T.TIMING.gapMs, T.TIMING.tailMs]);
  assert.deepEqual(J(T.TIMING), { wpm: 130, minSentenceMs: 800, leadMs: 350, gapMs: 250, tailMs: 600 });
});

test("sentence splitting is the vendored beamdswitch build's, exactly", () => {
  const vendored = vendoredSplit();
  const cases = [
    "Major complications fell from 11.0% to 7.0% in the same study.",
    "Deaths fell from 1.5 percent to 0.8 percent. Then they rose.",
    "Use a checklist, e.g. the WHO one. It helps.",
    "Dr. Haynes led it. Mr. Smith did not.",
    "See Fig. 2 and No. 5. Then stop!",
    "J. R. R. Tolkien wrote it. Fine.",
    "He said \"stop.\" Then went (quietly.) Done?",
    "...leading dots. And a trailing ellipsis...",
    "no terminator at all",
    "   ",
    "A.B. Cd. Ef! Gh? Ij?! Kl.",
    T.exportDeck(T.TEMPLATE).frames.map((f) => f.narration).join(" "),
  ];
  for (const s of cases) assert.deepEqual(J(T.splitSentences(s)), J(vendored(s)), s);
});
