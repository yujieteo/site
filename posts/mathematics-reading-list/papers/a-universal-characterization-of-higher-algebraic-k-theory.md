source: https://arxiv.org/pdf/1001.2282
slogan: K-theory is the universal invariant of stable ∞-categories that splits exact sequences, so maps out of K-theory can be counted by one evaluation.
basis: the abstract and introduction

## Before you start

The paper is 80 pages and written in stable ∞-categories, spectral categories and Morita theory. The likely feeling is fear of being too slow: a sense that you must absorb Lurie's books before the first theorem will mean anything. That fear is a fair reaction to the notation. The main statements fit on two pages of the introduction and can be read with the ∞-categories as black boxes. If you have wondered what K-theory "really is", the answer here is short. Read those two pages for the pleasure of it. The other 78 can stay closed.

## The story

Grothendieck defined K<sub>0</sub> by a universal property: it is the universal target for Euler characteristics, functions with χ(Y) = χ(X) + χ(Z) for every exact sequence X → Y → Z. Quillen and Waldhausen built higher K-theory as a spectrum, but by a construction, with no universal property. Waldhausen's additivity theorem hinted at one. What blocked a precise statement was the lack of a setting for homotopy theory of categories. Stable ∞-categories supply it. The authors build a category of "non-commutative motives" by forcing additivity, in the way one builds K<sub>0</sub> by forcing a relation. In it, K-theory of A is the spectrum of maps from the motive of finite spectra to the motive of A. The Yoneda lemma then classifies all natural maps out of K-theory.

## Main definitions

**Morita equivalence.** An exact functor A → B of small stable ∞-categories is a Morita equivalence if it becomes an equivalence after idempotent completion. Equivalently, it induces an equivalence on module categories.

**Exact and split-exact sequence.** A sequence A → B → C of idempotent-complete small stable ∞-categories is exact if the composite is zero, A → B is fully faithful, and the quotient B/A → C is an equivalence. It is split-exact if both functors have adjoints that split it.
- Example: perfect complexes supported on a closed subset, on the whole scheme, and on the open complement.

**Additive invariant.** A functor E from small stable ∞-categories to a stable presentable ∞-category D that inverts Morita equivalences, preserves filtered colimits, and sends split-exact sequences to split cofibre sequences.
- Example: connective K-theory. The third condition is Waldhausen's additivity theorem.

**Localising invariant.** An additive invariant that sends every exact sequence to a cofibre sequence.
- Examples: non-connective K-theory and topological Hochschild homology (THH).
- Non-example: connective K-theory is additive but not localising.

## Main results

**Theorem (universal invariants exist; Theorem 1.1).** There are stable presentable ∞-categories M<sub>add</sub> and M<sub>loc</sub> with functors U<sub>add</sub> and U<sub>loc</sub> from small stable ∞-categories. For every stable presentable D, composing with U<sub>add</sub> gives an equivalence between colimit-preserving functors M<sub>add</sub> → D and additive invariants with values in D. The same holds for U<sub>loc</sub> and localising invariants.
- How: the introduction says only that both categories come from universal constructions on presheaf categories, with no K-theory put in by hand.

**Theorem (K-theory is corepresentable; Theorem 1.3).** Let A be an idempotent-complete small stable ∞-category and let S<sup>ω</sup> be the category of compact spectra. Then Map(U<sub>add</sub>(S<sup>ω</sup>), U<sub>add</sub>(A)) ≃ K(A), the connective K-theory spectrum, and Map(U<sub>loc</sub>(S<sup>ω</sup>), U<sub>loc</sub>(A)) is the non-connective K-theory spectrum of A.
- Step 1: Waldhausen's S<sub>•</sub> construction acts as suspension in M<sub>add</sub> and in M<sub>loc</sub>, by a path-fibration argument.
- Step 2: a comparison with spectral categories (Theorem 1.10) reduces the claim to classical Waldhausen K-theory.

**Theorem (maps out of K-theory; Theorem 1.12 and Corollary 1.13).** For an additive invariant E with values in spectra, the spectrum of natural transformations of additive invariants K → E is equivalent to E(S<sup>ω</sup>). For E = THH this gives π<sub>0</sub> Map(K, THH) ≅ ℤ, and the topological Dennis trace is the transformation that corresponds to 1 ∈ ℤ.

**Theorem (negative K-groups; Theorem 9.53, as described in the introduction).** For a connective ring spectrum R, the negative K-groups of R agree with those of the ordinary ring π<sub>0</sub>R.

## Note, then ignore

- Idempotent completion. Inverting Morita equivalences means K<sub>0</sub> here is that of the idempotent completion. Safe to skip on a first reading.
- Filtered colimits. The condition makes the universal category presentable, and it is part of the definition, not a consequence. Safe to skip.
- Spectral categories. Half the paper compares stable ∞-categories with categories enriched in spectra, so that classical theorems apply. Safe to skip.
- Derivators and dg-categories. Cisinski and Tabuada proved analogues earlier for dg-categories, and the argument here follows the same outline. Safe to skip.
- Stronger corepresentability. Remark 1.8 replaces S<sup>ω</sup> by any compact B in the additive case, and by any smooth and proper B in the localising case. Safe to skip.

## One next step

Open the paper at Section 1.1 on page 3 and read from the definition of an additive invariant to the end of Theorem 1.3.
