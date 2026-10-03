import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
/** @import { CorpusRecord } from "../static/js/corpus.js" */

const source = await readFile(new URL("../static/js/bibtex.js", import.meta.url), "utf8");
/** @type {typeof import("../static/js/bibtex.js")} */
const { bibEntry, escapeText, renderBib } = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);

/** A paper record as the corpus publishes it; search fields the formatter never reads are left out. @param {Omit<CorpusRecord, "id" | "kind" | "revision">} fields */
const paper = (fields) => /** @type {CorpusRecord} */ ({ id: `paper:${fields.title}`, kind: "paper", revision: "", ...fields });

test("escapes BibTeX specials but keeps $...$ math", () => {
  assert.equal(escapeText("a $x_1^2$ b_c 50% & #1"), String.raw`a $x_1^2$ b\_c 50\% \& \#1`);
  assert.equal(escapeText("x^2"), String.raw`x\textasciicircum{}2`);
  assert.equal(escapeText("cost $5"), String.raw`cost \$5`);
  assert.equal(escapeText("a } b {"), String.raw`a \} b {}`);
  assert.equal(escapeText(String.raw`\alpha ends \ `), String.raw`\alpha ends \ `);
  assert.equal(escapeText("trailing \\"), String.raw`trailing \textbackslash{}`);
});

test("arXiv links get eprint, archivePrefix and primaryClass", () => {
  const entry = bibEntry(paper({
    title: "Small Gaps Between Primes", url: "https://arxiv.org/abs/1311.4600",
    tags: ["math.NT", "number-theory"], content: "Sieve  weights,\n 100%.",
    citation: { authors: ["James Maynard"], year: 2013, eprint: "1311.4600", primaryClass: "math.NT" },
  }), new Set());
  assert.equal(entry, [
    "@misc{maynard2013small,",
    "  title         = {{Small Gaps Between Primes}},",
    "  author        = {James Maynard},",
    "  year          = {2013},",
    "  eprint        = {1311.4600},",
    "  archivePrefix = {arXiv},",
    "  primaryClass  = {math.NT},",
    "  url           = {https://arxiv.org/abs/1311.4600},",
    String.raw`  howpublished  = {\url{https://arxiv.org/abs/1311.4600}},`,
    "  keywords      = {math.NT, number-theory},",
    String.raw`  abstract      = {Sieve weights, 100\%.}`,
    "}",
  ].join("\n"));
});

test("cached metadata wins, and author-less links get a sort key", () => {
  const cached = bibEntry(paper({
    title: "Maynard primes", url: "https://arxiv.org/abs/1311.4600",
    citation: { authors: ["Physics Collaboration", "et al."], title: "Small gaps between primes", doi: "10.4007/annals.2015.181.1.7", journalRef: "Ann. Math. 181 & 1" },
  }), new Set());
  assert.match(cached, /title += \{\{Small gaps between primes\}\}/);
  assert.match(cached, /author += \{\{Physics Collaboration\} and others\}/);
  assert.match(cached, /doi += \{10\.4007\/annals\.2015\.181\.1\.7\}/);
  assert.match(cached, /note += \{Ann\. Math\. 181 \\& 1\}/);
  assert.doesNotMatch(cached, /eprint/);

  const plain = bibEntry(paper({ title: "Notes on the 50% rule", url: "https://example.org/a{b}#c" }), new Set());
  assert.match(plain, /^@misc\{notes50rule,/);
  assert.match(plain, /key += \{Notes on the 50\\% rule\}/);
  assert.match(plain, /url += \{https:\/\/example\.org\/a%7Bb%7D#c\}/);
  assert.match(plain, /howpublished += \{\\url\{https:\/\/example\.org\/a\\%7Bb\\%7D\\#c\}\}/);
});

test("keys stay unique within one file", () => {
  const twin = { url: "https://arxiv.org/abs/1311.4600", citation: { authors: ["James Maynard"], year: 2013 } };
  const bib = renderBib([
    paper({ title: "Small Gaps", ...twin }), paper({ title: "Small gaps II", ...twin }), paper({ title: "Small", ...twin }),
  ]);
  assert.deepEqual([...bib.matchAll(/^@misc\{([^,]+),/gm)].map((match) => match[1]),
    ["maynard2013small", "maynard2013smalla", "maynard2013smallb"]);
  assert.match(bib, /^% Exported from the Paper Links page[^\n]*\n% 3 entries\./);
});
