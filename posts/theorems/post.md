---
title: Only Forty-One Theorems Can Win
date: 2026-11-07
draft: true
budget_kb: 80
summary: I built a machine to tell me which theorem to learn next. It scored 2,740 results on seven dials. Only 41 of them can ever reach its top ten, whatever weights you choose.
summary: Five perfect scores sit in every top ten. The weights only ever fight over the other five seats, and ties at the cutoff are settled by the alphabet.
summary: Asked twice, the same judge changed 27% of its scores. Almost every change went down.
summary: A score is not a job. On a real question, the perfect-scoring result gives the weakest answer, and the best answer comes from a result scored lower.
summary: The useful output was never the list. It was the shape of the disagreement, and what you already know.
---

## The Short Version

I wanted a machine to tell me what to learn next.

There is too much mathematics. Every field has a hundred named results that everyone seems to know, and I know some of them. So I built two tools. The first, the Theorem Explorer, scores 2,740 named results on seven dials and ranks them. The second, the Theorem Learner, takes 2,055 theorems apart into 2,203 short proofs, three to seven steps each, so you can walk through them one move at a time.

I expected the ranking to be the point. It was the least useful thing the tools made.

Here is what I found when I looked closely at my own data. Each claim comes with a figure you can move, and every number in this essay is computed from the tools' own files.

1. **Only 41 results can ever reach the top ten.** Not 41 under the default weights: 41 under any weights at all. The other 2,699 are beaten by at least ten results on every dial at once, so no choice of weights can lift them.

2. **Half the top ten is fixed.** Five results score a perfect 4 on all seven dials. They sit in every top ten, whatever you do. The sliders only ever decide the other five seats, and when results tie for the last seat, the alphabet decides.

3. **The judge does not agree with itself.** For 57 results, the same model scored everything twice. It gave a different score on 27% of the dials. When it changed its mind, it went down nine times out of ten.

4. **A score is not a job.** The explorer ships a worked case: bound the chance of 60 or more heads in 100 coin flips. The one perfect-scoring result in that case gives the weakest bound. The best bound comes from a result that scores lower than three of the others.

5. **The weak result is inside the strong one.** That same weak result is the engine of the strong ones. Walk through the proof of Hoeffding's inequality and its third step is the perfect-scoring result, applied to an exponential.

6. **What to learn next depends mostly on you.** A result is ready when you know what it needs. In one small corner of the map, marking four foundations as known changes which results are ready more than any slider does.

None of this means the scores are worthless. It means a score is a lens, and a lens is most useful when you can see where it blurs. The rest of this essay is a walk through the blur.

## Two Tools

The explorer started as a pile of names. I pulled every candidate I could find from seven sources: Wikidata, nLab, arXiv, mathlib's docstrings, survey pages, an undergraduate list and Freek Wiedijk's list of 100 theorems. That gave 4,375 candidates. Many were the same result under two names, so merging left 3,103 records.

Then I asked language models to read the evidence for each record and judge it. Three models did the work: Claude Opus 5.5 judged 2,320 records, GPT-6.1 Terra judged 763 and DeepSeek Flash judged 20.[^judges] The judges threw out 363 records that are not results at all: definitions, concepts, laws of physics, open conjectures, lists and methods. The other 2,740 got scores.

Press Next to walk through the pipeline.

::figure kind=schematic src=pipeline.svg alt="A flow diagram: seven sources give 4,375 candidate names, merging leaves 3,103 named records, 363 are left out as not results, three model judges score the rest, and 2,740 scored results form the Theorem Explorer. mathlib's 241,706 formal theorems link to 1,512 names. The Theorem Learner holds 2,203 proofs in 10,727 steps, none checked in Lean." caption="How 4,375 names became 2,740 scores and 2,203 proofs. Each press of Next shows one stage."

The learner came second. For each theorem it writes a statement, the hypotheses, and one or more proofs as small graphs of steps. Each step has a slogan, a longer detail and a list of the earlier results it uses. Each proof also names its moves: induction, contradiction, an explicit construction, and so on.

There is one more source in the background, and it matters more than it looks. mathlib, the library of formal mathematics for the Lean prover, holds 241,706 theorems. Only 1,512 of them link to one of my named results. That gap, between the mathematics people name and the mathematics a machine has checked, comes back at the end.

## Seven Dials

A score in the explorer is not one number. It is seven, each from 0 to 4, and each answers a question.

- **Effectiveness:** how fully does the result achieve its stated goal?
- **Research influence:** which later results and questions does the evidence connect to it?
- **Practical impact:** which documented applications does it support?
- **Reach:** across which problems, fields and levels does it give value?
- **Low hypothesis burden:** how broadly do its conditions permit use?
- **Proof simplicity:** how much machinery does the chosen proof need?
- **Application simplicity:** how much effort does a stated use take?

The rubric gives each dial anchors. A 0 on effectiveness means "no contribution to the specified goal"; a 4 means "achieves the full specified goal". Scores of 1 and 3 sit between the anchors.

Here is how the judges used the dials.

::figure kind=theorem-dials alt="Seven stacked bars, one for each rubric dial, show how many of the 2,740 scored results got each score from 0 to 4. Effectiveness is mostly 4. Practical impact and research influence are spread across all five scores." caption="How 2,740 results were scored on each dial. Hover a segment for its count. Darker means a higher score."

The first bar is the one to stare at. Effectiveness gives 1,752 of 2,740 results a perfect 4. That is almost two in three. It is the dial with the most weight in the default settings, 25 of 100, and it barely separates anything. A dial that says 4 to most results is less a measurement than a constant added to everyone.

I don't think the judges were wrong to do this. The question asks whether a result achieves *its own* stated goal, and most named results do. That is why they have names. A theorem that only half proves what it says is rarely famous. But it means the dial that sounds most important is the one that matters least to the ranking.

The dials that spread out are the ones with small weights or awkward questions. Practical impact runs the whole range: 277 results score 0 and 409 score 4. Research influence is nearly flat across 1, 2 and 3. Those are the dials doing the sorting, and they are also the hardest to judge from the evidence.

## Only Forty-One Can Win

The overall score combines the seven dials with weights. The default weights are 25, 25, 20, 15, 5, 5 and 5. The tool turns them into a score out of 100:

<math display="block" aria-label="score equals 100 times the sum over i of w i times x i, divided by 4 times the sum of w i"><mi>score</mi><mo>=</mo><mn>100</mn><mo>×</mo><mfrac><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>w</mi><mi>i</mi></msub><msub><mi>x</mi><mi>i</mi></msub></mrow><mrow><mn>4</mn><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>w</mi><mi>i</mi></msub></mrow></mfrac></math>

Here <math><msub><mi>x</mi><mi>i</mi></msub></math> is the score on dial <math><mi>i</mi></math> and <math><msub><mi>w</mi><mi>i</mi></msub></math> is its weight. The original tool asks you to make the weights add up to 100 yourself, and it leaves the score blank if they don't. In the figure below I divide by their total instead, so you can move one slider at a time and see what it does.[^weights]

My plan was to show you how the top ten moves as you change what you care about. Try it. Pick a preset, or drag a slider all the way down.

::figure kind=theorem-rank wide=true alt="Seven weight sliders and three preset buttons control a ranked list of ten results with their scores, and a histogram of all 2,740 scores with a dashed line at the score of the tenth seat. Five results with perfect scores are marked with a dot." caption="The top ten under the weights you choose, ranked out of the 41 results that can ever enter it. The histogram shows all 2,740 scores; the dashed line is the tenth seat. A dot marks a perfect score."

The list moves less than I hoped, and for a reason that took me a while to see.

Five results score 4 on every dial: Bayes rule, Bessel's inequality, the Cauchy–Schwarz inequality, Markov's inequality and a probabilistic form of Cauchy–Schwarz. A perfect score stays perfect under any weights. So those five are in every top ten you can make. The sliders never touch them.

That leaves five seats. Who can sit there? I expected the answer to be "almost anyone, with the right weights". It is not. A result can only reach the top ten if fewer than ten other results beat it, or tie it, on every single dial. If ten results are at least as good on all seven dials and better on one, no weighting can lift it past them.[^dominance] I counted. Of 2,740 results, only 41 pass that test. The figure ranks those 41, and it gives the same top ten you would get from all 2,740.

Look at the histogram under the list. The scores pile up near the top. Under the default weights, 255 results score 90 or more, and the scores can only take 58 different values. With seven dials of five steps each and a handful of weights, there just aren't many numbers to go around. So the tenth seat is usually a tie, and the tool breaks ties by name. Under the default weights, seven results tie for seats six to ten at 98.8. Under other weights it is worse: twelve results share the score string 4, 3, 4, 4, 4, 4, 4, including the Pythagorean theorem, Euler's formula, the binomial theorem and the fundamental theorem of arithmetic. Which of them you see depends on where its name falls in the alphabet.

### A lottery for the last five seats

If the sliders don't matter much, maybe the question is how often each result wins when you don't know what you want. So here is a lottery. Each draw picks a random set of weights, every set equally likely, ranks the 41 results and counts who made the top ten.

::figure kind=theorem-lottery alt="Bars for the 41 results that can reach the top ten show how often each made it across random weightings. Five perfect scores are at 100 percent. A button draws 1,000 weightings as an animation that can be paused." caption="Press Draw to rank the 41 under 1,000 random weightings, one at a time. The five perfect scores are in every draw. The rest share five seats."

Run it a few times. The five perfect scores are always at the top, at 100%. Below them, about a dozen results share the other five seats fairly evenly, each winning a quarter to two fifths of the draws: the binomial theorem, Cartan's magic formula, the diagonalization of self-adjoint maps, Chebyshev's inequality, the Abel summation formula. Then the tail drops fast. In 20,000 draws, only 29 of the 41 ever appear, and twelve never do.

Look for Bayes' theorem in that tail. It wins about one draw in fifteen. Its twin, Bayes rule, wins every draw. They are the same result, and I'll come back to why they score differently.

This is when I stopped thinking of the ranking as an answer. A ranking of 2,740 things with seven coarse dials is mostly ties at the top, with the order inside each tie set by the alphabet. The interesting information is not in the order. It is in the dials.

## Asking Twice

If a ranking rests on judgments, the first thing to check is whether the judgments hold still.

For 57 results, the build ran a second assessment: the same model, the same rubric, the same evidence, a second time.[^second] Each result has seven dials, so that is 399 pairs of scores. Here they are, one row per result and one cell per dial.

::figure kind=theorem-retest wide=true alt="A grid of 57 results by seven dials. Each cell is coloured by how the second score differs from the first: grey for the same, orange for lower and blue for higher. Most changes are orange. The effectiveness column is all grey." caption="The same judge, asked twice, for 57 results. Grey cells agree. Orange cells went down the second time, darker for two steps. Blue cells went up. Hover a cell for both scores."

Three things jump out.

First, the judge agreed with itself on 292 of 399 cells, which is 73%. That sounds decent until you remember the scale only has five steps, and most scores sit at 3 or 4. Two coins that each land on 3 or 4 would agree half the time by chance.

Second, the changes almost all go one way. Of 107 changed cells, 97 went down the second time and only 10 went up. I don't know why. The second pass may have read the evidence more strictly, or seen the first scores, or simply been a different session in a different mood.[^why] Whatever the cause, it is a drift, not noise. Noise would go both ways.

Third, look at which dials moved. Effectiveness never changed, not once in 57 results. Application simplicity changed the most, 23 times. The dial that barely separates results is the one the judge is surest of. The dials that do the separating are the ones it can't hold still.

That pattern is the most useful thing I learned from the whole project, so let me say it plainly. **The dials that decide the ranking are the dials the judge is least sure of.** The ranking is most sensitive exactly where the measurement is weakest.

### The same theorem, twice

There is a second, accidental experiment hiding in the catalog. Merging names is hard, and some results slipped through twice. The Perron–Frobenius theorem, about the largest eigenvalue of a positive matrix, has two records. One came from nLab as "Frobenius-Perron theorem"; Claude Opus 5.5 judged it and gave it 97.5. The other came from Wikidata as "Perron–Frobenius theorem"; GPT-6.1 Terra judged it and gave it 82.5. Same theorem. Fifteen points apart. One ties for 13th place; the other sits near 550th.

Bayes is the same story. "Bayes rule", from nLab, is one of the five perfect scores. "Bayes' theorem", from Wikidata, scores 97.5 and is a different record. Cauchy–Schwarz has a probabilistic twin. The halting problem and the halting theorem are both there, with different scores. None of this is a bug in the scores. It is what happens when a list is built from sources that name things differently, and it is one more reason to look at the dials rather than the rank.

## High Confidence, Thin Evidence

Each score also carries a confidence label, and each record carries a grade for how much evidence stood behind it. The rubric defines the labels carefully. High means "statement complete in a source, several independent sources, scores consistent with the second assessment where one ran". Low means "thin evidence (one passage or a formal record only)". It also warns that labels describe evidence and consistency. They are not probabilities.

Here are the two side by side.

::figure kind=theorem-evidence alt="A three by three grid crosses confidence labels low, medium and high with evidence grades thin, partial and broad. Square area shows the count. The largest square is high confidence with thin evidence, 1,054 results." caption="Confidence label against evidence grade for 2,740 scored results. Square area is the number of results. The lit square is high confidence resting on thin evidence."

The biggest square is the one that should not be there. 1,054 results are labelled high confidence while their evidence is graded thin. That is more than half of all high-confidence results.

I can think of two readings, and I don't know which is right. Maybe the two words measure different things: the evidence grade counts how many kinds of source mention the result, while confidence asks whether the statement is complete and the scores consistent. A famous result can have one perfect source. Or maybe the label drifted, the way the retest scores drifted, and "high" became the default. The rubric's own wording for low confidence begins with "thin evidence", which points to the second reading. Either way, a reader who filters for high confidence is not getting what the word suggests.[^confidence]

## What the Papers Say

If judges are shaky, maybe the world can vote. The explorer counts how often each result's name appears in arXiv titles and abstracts from 1991 to 2020. It is a crude measure: it counts words, not use, and it misses every paper that uses a result without naming it. But it is a measure nobody judged.

So I put the two side by side. Each dot is a result with at least five mentions.

::figure kind=theorem-papers wide=true alt="A scatter plot of 1,001 results: the overall score on the horizontal axis, from about 40 to 100, against arXiv mentions on a log scale from 5 to about 3,000. The cloud rises only a little from left to right. Perfect scores are lit; the central limit theorem and Bell's theorem sit far above the rest." caption="Score against arXiv mentions, for results named in at least five titles or abstracts. The vertical axis is logarithmic. Hover a dot for its name."

The cloud tilts up, but only a little. For results named at least five times, the rank correlation is about 0.21. Results the judges loved are mentioned more, on average, but you could not predict one from the other.

The extremes tell the story better than the average. The central limit theorem has 2,789 mentions, more than any other result, and a score of 92.5. Bell's theorem has 2,198 mentions, almost all in quantum physics, and scores 88.8. Meanwhile Bessel's inequality, one of the five perfect scores, has 13 mentions in thirty years. Markov's inequality, another perfect score, has 32.

That isn't a contradiction. Bessel's inequality is a tool you use without naming, the way you use a screwdriver without writing "screwdriver" in your report. Bell's theorem is the subject of papers. Mentions measure what people write *about*, and the judges were asked about what results *do*. Both are real. Neither is "importance".

### Where results live

The same data splits by field, and here it gets more interesting, because a result's importance is not one number even inside mathematics.

::figure kind=theorem-trend wide=true alt="A line chart of mentions per 10,000 arXiv papers from 1991 to 2020 in two-year bins. Buttons choose one of eight fields; four lines show the four most-mentioned results in that field." caption="The four most-named results in each field, per 10,000 papers in that field, in two-year bins. Gaps mark bins with fewer than 100 papers. Choose a field to compare."

In probability, the central limit theorem is in roughly one paper in twenty-two, decade after decade. In machine learning, the singular value decomposition leads, and the central limit theorem is a minor character. In quantum physics, Bell's theorem dominates and then slowly fades, as the field moves from asking whether entanglement is real to building with it. In high-energy theory, the uncertainty principle climbs steadily.

A single score can't hold this. A result can be central to one field and absent from the next, and the explorer's own weights have no idea which field you work in. The tool has a relevance term for exactly this reason, and it turns out to matter more than the dials. I'll come back to it.

## A Score Is Not a Job

Here is the moment the ranking really broke for me.

The explorer ships a few worked cases, where it doesn't score results in the abstract but asks them to do a job.[^cases] The first case is a coin. Flip a fair coin 100 times. How likely is it that you get 60 heads or more?

You can compute this exactly. The answer is about 2.8%. But suppose you couldn't, and you only had theorems that bound the chance from above. The case lists five such results. Here is what each one gives, and you can change the number of flips and the threshold.

::figure kind=theorem-bounds wide=true alt="Horizontal bars on a log scale show the upper bound each of five results gives on the chance of many heads in n fair coin flips: Markov, Chebyshev, Chernoff, Hoeffding and Azuma. A vertical line marks the exact chance. Sliders change the number of flips and how far above half the threshold is. Each bar is labelled with the result's overall score." caption="Five theorems bound the same chance. Shorter bars are better; the line is the exact answer. The number beside each name is its overall score. At 100 flips and 60 heads, the perfect score gives the worst bound."

At 100 flips and 60 heads, Markov's inequality gives 0.83. That is a true statement, and it is almost useless: it says the chance is below 83%. Chebyshev's inequality gives 0.25. Hoeffding's inequality gives 0.135, and the Chernoff bound gives 0.134, the best of the five.

Now look at the scores. Markov's inequality is one of the five perfect results. It scores 100. Chebyshev scores 98.8, Hoeffding 97.5, Chernoff 92.5 and Azuma 88.8. Order them by score and you get Markov, Chebyshev, Hoeffding, Chernoff, Azuma. Order them by how well they do this job and you get nearly the reverse.

Now drag the flips up to 1,000 and the excess up to 100, so you still ask for 60% heads. The gap explodes. Markov stays at 0.83 forever, because it only knows the average. Chebyshev shrinks slowly, like one over the number of flips. Hoeffding and Chernoff fall off a cliff: their bounds shrink exponentially, like

<math display="block" aria-label="the chance that S minus n p is at least t is at most e to the minus 2 t squared over n"><mi>P</mi><mo>(</mo><mi>S</mi><mo>−</mo><mi>n</mi><mi>p</mi><mo>≥</mo><mi>t</mi><mo>)</mo><mo>≤</mo><msup><mi>e</mi><mrow><mo>−</mo><mn>2</mn><msup><mi>t</mi><mn>2</mn></msup><mo>/</mo><mi>n</mi></mrow></msup></math>

which is Hoeffding's form.

So was the judge wrong to give Markov a perfect score? I don't think so, and this is the subtle part. Markov's inequality needs almost nothing: a variable that can't go negative and has a finite average. That is why it scores 4 on hypothesis burden, proof simplicity and application simplicity. It applies everywhere. Hoeffding needs independence and bounded variables. Chernoff needs the whole moment generating function. On this coin, all of those hold, so the stronger tools win. On a messier problem, they might not apply at all, and Markov would be the only thing standing.

A score answers "how good is this result in general". A job asks "what does this result do for me, here". Those are different questions, and the explorer's own cases show the answers can run backwards.

## The Weakest Result Does the Heavy Lifting

There is a twist, and the learner is where I found it.

Here are three proofs from the learner: Markov's inequality, Hoeffding's inequality and the fundamental theorem of arithmetic. Step through each one. Click a hypothesis to see which steps use it.

::figure kind=theorem-proof wide=true alt="A proof walker. Buttons choose one of three proofs. Each proof is drawn as a small graph of four steps with its hypotheses as chips. Next and Back move through the steps, lighting the current one and showing its text. Clicking a hypothesis lights the steps that use it." caption="Three proofs from the learner, one step at a time. Click a hypothesis to light the steps that need it. In Hoeffding's proof, the third step is Markov's inequality."

Look at the third step of Hoeffding's proof. To bound the chance that a sum strays far from its mean, the proof first bounds the moment generating function of each term, multiplies those bounds using independence, and then applies Markov's inequality, not to the sum itself, but to its exponential:

<math display="block" aria-label="the chance that S minus E S is at least epsilon is at most e to the minus t epsilon times the expectation of e to the t times S minus E S"><mi>P</mi><mo>(</mo><mi>S</mi><mo>−</mo><mi>E</mi><mi>S</mi><mo>≥</mo><mi>ε</mi><mo>)</mo><mo>≤</mo><msup><mi>e</mi><mrow><mo>−</mo><mi>t</mi><mi>ε</mi></mrow></msup><mspace width="0.2em"/><mi>E</mi><mo>[</mo><msup><mi>e</mi><mrow><mi>t</mi><mo>(</mo><mi>S</mi><mo>−</mo><mi>E</mi><mi>S</mi><mo>)</mo></mrow></msup><mo>]</mo></math>

Then it picks the best <math><mi>t</mi></math>. That's the whole trick. The result that gave the worst bound on the coin is the engine inside the one that gave nearly the best. Markov is weak on its own because it only sees the average. Feed it the exponential of the sum, and the average of that exponential carries information about every moment at once.

So the judge was right, in a way the ranking can't show. Markov's inequality scores perfectly not because it answers questions well, but because it is used to build the things that do. Its research influence is real. It just flows through other results.

This is what I mean when I say the useful output was never the list. "Learn Markov's inequality" is good advice. But the reason is invisible in its score. You only see it when you walk through a proof and notice the same move turning up inside something stronger.

The learner has a quieter honesty problem too. Each proof names a source: 605 follow a Lean proof in mathlib, 538 cite a deep result, 1,050 were written by the model and 10 come from the web. The learner's own records say that none of the 2,203 prose proofs has been checked against Lean.[^lean] A proof that cites a Lean declaration is pointing at a checked proof. It is not itself checked.

## Proofs Are Made of a Few Moves

Once I started reading proofs as moves, I wanted to know how many moves there are. The learner tags each proof with the moves it makes. There are 112 kinds. But they are not used equally.

::figure kind=theorem-moves alt="Horizontal bars for the twenty most common proof moves across 2,203 proofs, with a running total of how many proofs the top moves cover. The first bar, cited deep result, is lit. Selecting a bar shows its slogan and example theorems." caption="The twenty most used proof moves. The running line shows how many proofs use at least one of the moves so far. Select a bar for its one-line slogan and five examples."

Five moves appear in 60% of all proofs. Ten moves reach 73%. The top of the list is a little deflating: the single most common move, in 542 proofs, is "cited deep result", which means "reduce the statement to a major theorem and cite that theorem". A quarter of all proofs in the learner lean on a black box.

That is not a flaw in the learner so much as a fact about mathematics. Research-level results are built on other research-level results, and nobody reproves the whole tower each time. But it changes what "learn this proof" means. For a quarter of the catalog, learning the proof means learning which deep result it stands on, and then deciding whether to go and learn that.

The other common moves are the ones you would expect from a first course: an algebraic identity, contradiction, induction, an explicit construction, case analysis. I find that encouraging. If you know ten moves well, you can follow the skeleton of most proofs here, even when the flesh is unfamiliar.

## What You Know Changes the Answer

The explorer's real recommendation is not the score. It is a different formula, which the tool calls the learning priority:

<math display="block" aria-label="priority equals 100 times 0.35 value plus 0.25 relevance plus 0.15 accessibility plus 0.15 future access plus 0.10 effort fit"><mi>priority</mi><mo>=</mo><mn>100</mn><mo>(</mo><mn>0.35</mn><mi>v</mi><mo>+</mo><mn>0.25</mn><mi>r</mi><mo>+</mo><mn>0.15</mn><mi>a</mi><mo>+</mo><mn>0.15</mn><mi>f</mi><mo>+</mo><mn>0.10</mn><mi>e</mi><mo>)</mo></math>

The score is only the first term, <math><mi>v</mi></math>, for value. The rest are about you. Relevance <math><mi>r</mi></math> asks whether the result is in a field you care about. Accessibility <math><mi>a</mi></math> is the share of its prerequisites you already know. Future access <math><mi>f</mi></math> rewards a result that is the last missing piece for other results. Effort fit <math><mi>e</mi></math> compares the judged study time to your budget.

Two thirds of the formula is about the reader. And the reader is the part a ranking leaves out.

Here is one corner of the prerequisite map: 31 results from analysis and probability, joined by the explorer's prerequisite links. Foundations are on the left. Click a result to mark it as known.

::figure kind=theorem-path wide=true alt="A layered graph of 31 results joined by prerequisite links, with foundations such as Markov's inequality, the intermediate value theorem and the Heine–Borel theorem on the left and Hoeffding's inequality on the right. Clicking a result marks it known; results whose prerequisites are all known become ready. Solid edges are backed by a formal proof dependency, dashed edges are judged." caption="One corner of the prerequisite map. Click a result to mark it known. A ring marks a result that is ready, because you know everything it needs. Solid links are backed by mathlib; dashed links are a model's judgment."

Start with nothing known, and the only ready results are the foundations. Mark Markov's inequality, and Chebyshev's inequality and the Chernoff bound light up at once. Mark the intermediate value theorem and Heine–Borel, and a whole column of calculus becomes ready. Follow Hoeffding's inequality back to its roots and the chain is surprisingly long: Hoeffding's lemma, Taylor's theorem, the mean value theorem, Rolle's theorem, the extreme value theorem, and finally Heine–Borel. To learn a bound about coin flips, the map sends you through first-year calculus.

That is the kind of thing a ranking can never tell you, because it depends on you. Two people with different backgrounds should get different answers to "what next?", and both answers can be right.

The dashed lines deserve a warning. Every one of the explorer's 750 prerequisite links is a judgment. For only 121 of them, about one in six, does a formal proof in mathlib also join the same two results. Some judged links are lovely. Some I'd argue with: the map says the Kirszbraun theorem, about extending Lipschitz maps, needs the Whitney extension theorem first, and I don't think most people learn them that way. A path through the map is a first draft of a curriculum, not a curriculum.[^gateways]

## Zooming Out

### What I mean by "learn next"

I started out wanting an oracle. I ended up with something better: a microscope with known flaws.

The ranking tells you which results are uncontroversially good, and there are only a few dozen of those. Below that, the ranking is mostly ties. The dials tell you *why* a result is good, and that is useful exactly where the judge is steady. The retest tells you where it isn't. The cases tell you that "good in general" and "good for this job" can run in opposite directions. The proofs tell you which results are hidden engines. And the prerequisite map tells you that the next step depends mostly on where you stand.

If I had to compress it into advice, it would be this. **Don't ask a ranking what to learn. Ask it where its judges disagree, and look there.** The disagreements are where the interesting mathematics is. A result that scores 100 on one dial and 1 on another is telling you something specific. A result that two judges score 15 points apart is a result whose importance depends on what you want from it.

### What would change my mind

I am fairly confident about the arithmetic: 41 results can enter the top ten, five are fixed, ties are settled by the alphabet. Those follow from the scores. I am less confident about the judges. The retest covers only 57 results, all of them scoring 77.5 or more, and all by the same two models. A wider retest across the whole range might show steadier scores lower down, where there is more room to move. I also don't know why the second pass went down. If it was because the second pass saw more evidence, the drift would be a sign of care, not of noise.

I am least confident about the papers. Name counts in abstracts are a narrow window, and the data ends in 2020, before a large share of today's machine learning work.

### What I would build next

Three things.

First, a retest of the whole catalog, by more than one model, with the disagreement shown as a first-class number beside each score. A result's spread is as informative as its mean.

Second, more cases. The coin case did more to change my thinking than all 2,740 scores. A dozen worked jobs, each comparing results on a concrete task, would be worth more than another dial.

Third, closing the formal gap. Only 1,512 of mathlib's 241,706 theorems link to a named result, and none of the learner's prose proofs is checked. Linking the names people use to the proofs a machine has checked would turn the dashed lines solid, and it would tell us, for the first time, which of the judged links are real.

## Source notes

Every figure's data comes from [Theorems](https://github.com/yujieteo/theorems) at commit `c404347027f03c133ea25350a9b0e0406ca21433`.
The explorer data is `viz/theorem-explorer/raw.json`: the rubric, presets and worked cases are in its top level; scores, confidence, evidence grades, prerequisite links and relations are in its core pack; arXiv counts are in its popularity pack.
The learner data is `viz/theorem-learner/raw.json`, core pack, for the proof moves and the verification counts, and `viz/theorem-learner/data/learning/theorems/part-000.json`, `part-007.json` and `batch-00.json` for the three proofs.
The arXiv counts cover titles and abstracts through August 2020, in two-year bins; rates use bins with at least 100 papers.
The 41 results are those that fewer than ten results match or beat on all seven dials at once.

[^judges]: Claude Opus 5.5 judged in the same session that built the catalog, with no API call. GPT-6.1 Terra ran through the Codex tool at low reasoning effort. DeepSeek Flash ran through its API with thinking turned off. The three never judged the same record, so their scores can't be compared directly, except by accident, as in the duplicate records below.
[^weights]: Dividing by the total changes nothing when the weights already add to 100. It only lets a single slider move without the others. The original tool's insistence on 100 is a reasonable guard: it makes you notice that raising one weight means lowering another.
[^dominance]: The figure breaks ties first by the default score and then by name, which makes the 41 exact: a result with ten dominators always ranks below all ten of them, under any weights with a positive total. If you break ties some other way, a few results at the edge can swap.
[^second]: The second assessment ran on 58 results; one of them, Fourier series, is marked not applicable on every dial both times, which leaves 57. Each result was rescored by the same model that scored it first: Claude Opus 5.5 for 45 of them and GPT-6.1 Terra for 12.
[^why]: A plain explanation is anchoring: if the second pass could see the first, a judge asked "are you sure?" tends to hedge downward. The data doesn't say whether it could.
[^confidence]: There is a third possibility: the evidence grade is computed from the sources the pipeline found, while the judge's confidence also draws on what the model already knows. A model can be confident about the Pythagorean theorem with no evidence at all. That would be honest, but it would not be what the rubric says.
[^cases]: The cases are written by the judge. The formulas are the standard statements of the cited results, and the tool computes each bound from them, so the numbers are guarantees, not measurements. The dates of the original papers are the judge's citations, not retrieved from a source.
[^lean]: The verification record counts 2,203 authored proofs, 0 with a checked correspondence to Lean and 0 checked by Lean.
[^gateways]: Across the whole catalog, the largest gateway is Zorn's lemma. It is the only missing prerequisite for 14 other results, which is what the future access term rewards.
