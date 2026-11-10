source: https://annals.math.princeton.edu/2021/193-3/p03
slogan: Two rival axioms that each give exactly ℵ<sub>2</sub> real numbers turn out to agree: the stronger forcing axiom proves Woodin's axiom (∗).
basis: the introduction and the main theorem statements

## Before you start

This is a research paper in set theory, and its statement alone uses forcing, stationary sets, determinacy and L(ℝ). The likely feeling is shame at not having the background, as if you had no right to open it. You can feel that and still read the introduction, which is written as history and asks for little. If you have ever wondered whether the continuum problem could have an answer, this is where one proposed answer got firmer. Read for the story. Understanding the proof is optional.

## The story

Cantor asked how many real numbers there are. Gödel and Cohen showed that the usual axioms, ZFC, cannot decide. So set theorists looked for natural new axioms. Two families grew up. Forcing axioms say that the universe already contains the objects that suitable forcings would add. The strongest of them is Martin's Maximum. Woodin's axiom (∗) says instead that the subsets of ω<sub>1</sub> all come from one special generic extension of L(ℝ). Each axiom implies that there are ℵ<sub>2</sub> reals. Each has a claim to be "the" maximality principle. For about 25 years nobody knew whether they were even compatible. Asperó and Schindler build one forcing that preserves stationary sets and adds a witness for each requirement of (∗). Martin's Maximum<sup>++</sup> then pulls the witness back into the universe.

## Main definitions

**Martin's Maximum<sup>++</sup> (MM<sup>++</sup>; Definition 2.1).** Let P be a forcing that preserves stationary subsets of ω<sub>1</sub>. Given ℵ<sub>1</sub> dense subsets of P and ℵ<sub>1</sub> P-names for stationary subsets of ω<sub>1</sub>, there is a filter g ⊂ P that meets every one of the dense sets and interprets every one of the names as a stationary set.
- Without the names, this is Martin's Maximum (MM), due to Foreman, Magidor and Shelah.

**ℙ<sub>max</sub> (Definition 2.2).** Woodin's forcing. Its conditions are countable transitive models (M; ∈, I, a) of enough set theory, with I a normal uniform ideal on ω<sub>1</sub> of M, that are generically iterable. A condition N is stronger than M when N contains a generic iteration of M of length ω<sub>1</sub><sup>N</sup> + 1 whose last model matches N's ideal and N's set.

**Axiom (∗) (Definition 2.3).** Two statements together.
- The Axiom of Determinacy holds in L(ℝ).
- There is a filter g, ℙ<sub>max</sub>-generic over L(ℝ), such that every subset of ω<sub>1</sub> lies in L(ℝ)[g].

## Main results

**Theorem (main theorem; Theorem 1.2).** Assume MM<sup>++</sup>. Then (∗) holds.
- Step 1: a lemma (Lemma 2.14) shows that for each dense open set D of ℙ<sub>max</sub> in L(ℝ), some stationary set preserving forcing adds a condition in D with a generic iteration that ends at the true non-stationary ideal and a fixed set A ⊂ ω<sub>1</sub>. The lemma assumes only that the non-stationary ideal is saturated, plus conditions on the sets of reals in play.
- Step 2: the existence of such a condition is a Σ<sub>1</sub> statement over H<sub>ω<sub>2</sub></sub> with predicates, so MM<sup>++</sup> gives one in the universe already. Determinacy in L(ℝ) comes from a theorem of Steel under the weaker axiom PFA.

**Corollary (compatibility with large cardinals; stated after Theorem 1.2).** If κ is supercompact, the standard forcing for MM<sup>++</sup> gives a model of (∗), and all large cardinals above κ survive. So (∗) is consistent with large cardinals beyond Woodin cardinals, if those cardinals are consistent with a supercompact below them.

**Theorem (a forcing-style form of (∗); Theorem 1.3).** Assume there is a supercompact cardinal. Then (∗) is equivalent to this: every Π<sub>2</sub> sentence about the structure (H<sub>ω<sub>2</sub></sub>; ∈, NS<sub>ω<sub>1</sub></sub>, A : A a set of reals in L(ℝ)) that holds after some stationary set preserving forcing is already true.

## Note, then ignore

- The two plus signs. MM<sup>++</sup> adds the clause about ℵ<sub>1</sub> names for stationary sets. Larson showed that a version with only countably many names does not imply (∗), so the clause is needed. Safe to skip on a first reading.
- Amenable versus "I ∈ M". The authors' ℙ<sub>max</sub> is slightly larger than Woodin's. They note that Woodin's is dense in theirs, so the two forcings are equivalent. Safe to skip.
- Generic iterations, not mice. The iterations here are repeated generic ultrapowers by an ideal on ω<sub>1</sub>. They are not the iterations of inner model theory. Safe to skip.
- Bounded version suffices. The proof uses only a bounded form of MM<sup>++</sup> (Definition 2.15). This sharpens the result but does not change it. Safe to skip.
- Journal and arXiv versions. I read the arXiv version 1906.10213v2. Theorem numbers may differ in the Annals printing. Safe to skip.

## One next step

Open the arXiv version of the paper and read only Section 1.4, "Unifying forcing axioms and (∗)", through Theorem 1.2 and the paragraph after it.
