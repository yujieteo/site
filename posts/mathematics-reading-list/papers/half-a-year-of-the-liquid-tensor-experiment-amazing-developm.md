source: https://xenaproject.wordpress.com/2021/06/05/half-a-year-of-the-liquid-tensor-experiment-amazing-developments/
slogan: Lean checked the one step of the liquid proof its author doubted, so a hard research argument now rests on a machine-verified core.
basis: the page itself

## Before you start

This is a blog post in question-and-answer form, and it reads in ten minutes. The feeling it may raise is a quiet worry: that you need to know Lean, or condensed mathematics, to have any right to an opinion. You can let that worry sit there. The post asks for neither. If you want to know what a proof assistant can do for a working mathematician, this is a first-hand report. Read it for the story. Finishing is optional.

## The story

In December 2020 Peter Scholze posted a challenge on the Xena blog: formalise a hard foundational theorem from his Analytic Geometry lecture notes, joint work with Dustin Clausen. He was not fully sure of the proof. Six months later he writes this guest post. The Lean community, led by Johan Commelin, has formalised Theorem 9.4 of the notes, the technical heart of the argument and the only part Scholze doubted. The work did not start from a carefully digested human proof. People typed the notes into Lean lemma by lemma, and Lean kept track of the current goal. Along the way the formalisers found small gaps, replaced a non-explicit tool with an explicit one, and helped Scholze see why the proof works. The full challenge is about half done.

## Main definitions

**Liquid Tensor Experiment.** The project to formalise, in the Lean proof assistant with its library mathlib, the main theorem on liquid vector spaces from Scholze's Analytic Geometry notes.
- Step: by 14 January 2021 Commelin had formalised the statement of Theorem 9.4.
- Step: the proof of Theorem 9.4 was completed on 28 May 2021.

**Theorem 9.4 of the notes.** A very technical statement about normed groups that contains the hard estimates of the liquid proof. It uses no condensed mathematics itself. The main theorem follows from it by more standard machinery: condensed abelian groups and Ext groups in abelian categories.

**Breen-Deligne resolution.** A resolution, built in the 1970s, used to compute the Ext groups in the proof. Its existence rests on facts from stable homotopy theory, and it is not explicit.
- In the formalisation: only its key structural properties were written down as axioms.

**Blueprint.** A human-readable write-up of the proof, linked to the Lean code. Here it was mostly written after each lemma was formalised, not before.

## Main results

**Claim (the doubtful part is verified).** The proof of Theorem 9.4 is formalised in Lean and checked. Scholze says he has no remaining doubts about the main proof, though the challenge as posed is not complete.
- Step 1: Commelin attacked the proof directly and handed self-contained lemmas to the community.
- Step 2: the remaining half is the condensed and homological layer above Theorem 9.4.

**Claim (the notes were correct up to small slips).** Formalisation found an issue with quotient norms, where an infimum need not be a minimum, an issue with the third hypothesis of Lemma 9.6, and some imprecision around Proposition 8.17. All were fixed quickly with minor changes.

**Claim (an explicit replacement for Breen-Deligne).** Commelin found a completely explicit object that satisfies the axioms used. This removes stable homotopy theory from the proof and makes the rest more elementary.

**Claim (what the proof does).** Formalising convex geometry for Gordan's lemma led Scholze to see the key move as a reduction from a non-convex problem over the reals to a convex problem over the integers. The formalisation also answered Question 9.9 of the notes: the constants grow roughly doubly exponentially.

## Note, then ignore

- Authorship. The post sits on Kevin Buzzard's Xena blog, but the text is a guest post by Peter Scholze. This matters only for citation, so skip it on a first reading.
- Theorem numbers. Numbers such as 9.4, 9.6 and 8.17 refer to the version of the lecture notes used at the time, and a later version may number things differently. Safe to skip.
- The de Bruijn factor. The Lean proof is about 20 times as long as the human one, and the blueprint about 2.5 times as long as the relevant part of the notes. The exact figure depends on how you count, so skip it.
- Reading Lean. Scholze says he can read the Lean definitions and theorem statements but not the proofs. You do not need to read any Lean to follow the post, so skip the code links.
- mathlib drift. The library keeps changing, so the project code needs steady small repairs until its general parts move into mathlib. This is upkeep, not mathematics. Skip it.

## One next step

Open the post and read only the answer to "Interesting! What else did you learn?", where Scholze explains the move from a non-convex real problem to a convex integer one.
