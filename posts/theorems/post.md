---
title: What should I learn next?
date: 2026-11-07
draft: true
budget_kb: 80
summary: A score is a choice, not a law.
summary: What you know changes the path to a result.
summary: A proof is a chain of small moves.
summary: A name in a paper is a clue, not a measure of truth.
---

There are too many things to learn. A list can help. But a list also hides a choice: what did its maker care about?

I built two tools to look at this choice. The first ranks results and maps what they need. The second breaks proofs into steps. Here I take a small slice of both.

## A score is a choice

The first tool gives each result seven scores. They ask how much a result helps, where it is used, and how hard it is to work with. Each score runs from zero to four. A judge gave the scores; they are not facts of math.

The sliders start at the tool's default weights. Move one. The top ten can change. This list draws from just 60 results, not the full set. It is a sample picked for high scores, so it is not a fair sample of all math.

::figure kind=theorem-rank alt="Seven weight sliders change a list of ten results and their scores." caption="The top ten of 60 scored results. Each slider is a share of the sum of all seven."

A weight has no force on its own. It matters next to the rest. Here the weights are scaled to sum to one as you move them. For score <math aria-label="score s out of 100"><mi>s</mi></math> and weights <math aria-label="weights w"><mi>w</mi></math>, we use <math aria-label="s equals 100 times the sum of weight times score, divided by four times the sum of weights"><mi>s</mi><mo>=</mo><mn>100</mn><mo>×</mo><mfrac><mrow><mo>∑</mo><msub><mi>w</mi><mi>i</mi></msub><msub><mi>x</mi><mi>i</mi></msub></mrow><mrow><mn>4</mn><mo>∑</mo><msub><mi>w</mi><mi>i</mi></msub></mrow></mfrac></math>. The full tool asks you to make them sum to 100 yourself. If they do not, it leaves the score blank.

A high place does not mean you should start there. It says only that the result does well on this scale. Change the scale and you change the question.

## A path depends on you

A result may need other ideas first. The tree shows a few paths from the source data. Pick a root and set how far down to look. Mark an item you know. Its branch stops, so you can focus on what is left.

::figure kind=theorem-tree alt="A tree of judged prerequisites has a root choice, depth slider and known checkboxes." caption="A path through judged links. Mark a known item to stop its branch."

A link is a judgment, not a law. A proof may use a different route. A tree can also leave out a useful idea. It is a map for a first look, not a course plan.

## A proof has parts

Take the claim that each whole number above one has one prime factor list, up to order. The proof has two jobs. It must show that a list exists. Then it must show that no other list can differ.

Press Next to follow four moves. The first two build the list. A third move proves a tool about prime divisors: if a prime <math aria-label="p divides a times b"><mi>p</mi><mo>∣</mo><mi>a</mi><mi>b</mi></math>, then <math aria-label="p divides a or p divides b"><mi>p</mi><mo>∣</mo><mi>a</mi><mtext> or </mtext><mi>p</mi><mo>∣</mo><mi>b</mi></math>. The last move uses it to match and cancel the primes.

::figure kind=schematic src=proof.svg alt="Four proof steps join least divisor and existence with Euclid's lemma and matching by cancellation." caption="A proof of unique prime factors, shown one move at a time."

The source links this route to a proof in mathlib. But its own notes say the prose has not been checked against Lean. A link to a formal proof is not the same as a checked prose proof.

## A name in a paper

A name can tell us where an idea shows up. It cannot tell us how well it was used. These curves count names in arXiv titles and abstracts, not full papers. The source groups years in pairs. Pick a result and a field to see the rate.

::figure kind=theorem-trend alt="A line chart shows the rate of names in arXiv papers by two-year period, with result and field choices." caption="Names per 10,000 papers in the chosen field, from 1991 to 2020. Gaps mark small samples."

A rise may mean an idea is used more. It may also mean that the words for it changed, or that a field grew. The data ends in 2020. It is a slice of a much larger story.

## What the tools leave out

The rank, tree, proof, and chart are four views of one question. None can pick a path for you. The rank has human or model judgments. The tree has gaps. The proof has a source and a scope. The chart counts words, not use.

That is still useful. Once the choices are in view, you can change them. You can ask what stays true when they change. You can also see what to check next.

## Source notes

The data comes from [Theorems](https://github.com/yujieteo/theorems) at commit `c404347027f03c133ea25350a9b0e0406ca21433`.
The rank and tree use `viz/theorem-explorer/raw.json`, core pack.
The chart uses the same file, popularity pack.
The proof uses `viz/theorem-learner/data/learning/theorems/part-000.json`.
The source counts names in titles and abstracts through August 2020.
The rank sample takes the top ten under each single score and the default score, then fills to 60 by the default score.
