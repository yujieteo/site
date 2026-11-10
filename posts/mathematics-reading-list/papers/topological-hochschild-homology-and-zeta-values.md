source: https://arxiv.org/pdf/2011.11549
slogan: Replacing the base ring ℤ by the sphere spectrum in de Rham cohomology produces exactly the factorials that zeta value formulas were missing.
basis: the introduction and the main theorem statements

## Before you start

This paper is 44 pages and uses ∞-categories, topological cyclic homology, prismatic cohomology and Weil-étale cohomology. Its reputation is "homotopy theory meets zeta values", and each half can make the other half's readers feel unqualified. Overwhelm is a fair response and you are allowed to feel it. If you have ever wondered why odd factors like (n−1)! show up in formulas for ζ(n), the introduction gives a structural reason in seven pages. Read those for the idea and enjoy it. The filtration machinery can stay closed.

## The story

Flach and Morin conjectured a formula for the leading term ζ\*(X, n) of the zeta function of a regular scheme X, proper over ℤ. It uses two complexes: Weil-étale cohomology, and derived de Rham cohomology of X over ℤ modulo the n-th Hodge step. The formula is off by a rational correction factor. For the ring of integers of an abelian number field F and n ≥ 2 the factor is (n−1)!<sup>−[F:ℚ]</sup>. Morin's idea is that the de Rham complex is taken over the wrong base. Over the sphere spectrum 𝕊, Hochschild homology becomes topological Hochschild homology, and π<sub>∗</sub>THH(ℤ) contains finite cyclic groups. He builds a "motivic" filtration on THH and its relatives over ℤ, and defines de Rham cohomology relative to 𝕊 from its graded pieces. The orders of the extra finite groups account for the correction factor.

## Main definitions

**THH, TC<sup>−</sup>, TP, TC<sup>+</sup>.** THH(A) is Hochschild homology of A with base the sphere spectrum 𝕊 instead of ℤ. It carries a circle action. TC<sup>−</sup>(A) is its homotopy fixed points, TP(A) its Tate construction, TC<sup>+</sup>(A) its homotopy orbits. The cofibre of TC<sup>−</sup>(A) → TP(A) is the double suspension Σ<sup>2</sup>TC<sup>+</sup>(A).

**The filtration F<sup>∗</sup> (Definition 1.1).** Let A be a commutative ring with bounded torsion whose cotangent complex over ℤ has Tor-amplitude in [−1, 0]. F<sup>∗</sup>THH(A) is the pull-back of two known filtrations: the HKR filtration on HH(A), and the product over all primes p of the Bhatt-Morrow-Scholze filtrations on p-completed THH.
- The same recipe defines F<sup>∗</sup>TP(A) and F<sup>∗</sup>TC<sup>−</sup>(A), using Antieau's filtration on HP and HC<sup>−</sup>.
- After p-completion, F<sup>∗</sup> gives back the Bhatt-Morrow-Scholze filtration.

**De Rham cohomology relative to 𝕊 (Definition 1.5).** LΩ<sup>&lt;n</sup><sub>A/𝕊</sub> is the n-th graded piece of F<sup>∗</sup>Σ<sup>2</sup>TC<sup>+</sup>(A), shifted by −2n. For a scheme X, RΓ(X, LΩ<sup>&lt;n</sup><sub>X/𝕊</sub>) is defined by Zariski descent. Rationally it agrees with the usual LΩ<sup>&lt;n</sup> of X<sub>ℚ</sub> over ℚ.

## Main results

**Theorem (graded pieces; Theorem 1.2).** For A as in Definition 1.1, there is a second filtration Z<sup>∗</sup> on each F<sup>∗</sup>, functorial, multiplicative, complete and exhaustive, with these graded pieces for j ≥ 0 and all n. Write ε<sub>j</sub> = min(1, j), and read ℤ/0 as ℤ.
- gr<sup>j</sup><sub>Z</sub> gr<sup>n</sup><sub>F</sub> THH(A) ≃ (LΛ<sup>n−j</sup> L<sub>A/ℤ</sub>) ⊗ ℤ/j, shifted by n + j − ε<sub>j</sub>.
- gr<sup>j</sup><sub>Z</sub> gr<sup>n</sup><sub>F</sub> Σ<sup>2</sup>TC<sup>+</sup>(A) ≃ LΩ<sup>&lt;n−j</sup><sub>A/ℤ</sub> ⊗ ℤ/j, shifted by 2n − ε<sub>j</sub>. For TP and TC<sup>−</sup> the same holds with the Hodge-completed derived de Rham complex and its step ≥ n − j.

The tensor products are derived. The proof uses the known computation of π<sub>∗</sub>THH(ℤ) and the fact that, p-adically and locally in the quasi-syntomic topology, everything sits in even degrees.

**Corollary (number rings; Corollary 1.4).** For a number field F, F<sup>∗</sup>THH(O<sub>F</sub>) is the truncation τ<sub>≥2∗−1</sub>THH(O<sub>F</sub>), and the same holds for Σ<sup>2</sup>TC<sup>+</sup>(O<sub>F</sub>).

**Corollary (the correction factor; Corollary 1.6).** Let X be regular and proper over Spec ℤ. Then RΓ(X, LΩ<sup>&lt;n</sup><sub>X/𝕊</sub>) is a perfect complex of abelian groups. It maps to RΓ(X, LΩ<sup>&lt;n</sup><sub>X/ℤ</sub>) with a fibre whose cohomology groups are finite, and the alternating product of their orders is C<sub>∞</sub>(X, n)<sup>−1</sup>. Here C<sub>∞</sub>(X, n) is the explicit product of factorials (n − 1 − i)! weighted by Hodge numbers of X<sub>ℚ</sub>.

**Theorem (shadow of the functional equation; Theorem 1.8, joint with Flach).** Let X be regular, connected, of dimension d, proper over Spec ℤ. A determinant built from LΩ<sup>&lt;n</sup><sub>X/𝕊</sub>, LΩ<sup>&lt;d−n</sup><sub>X/𝕊</sub> and the Weil-étale cohomology of the archimedean fibre in twists n and d − n equals ± A(X)<sup>n−d/2</sup> · ζ\*(X<sub>∞</sub>, n)/ζ\*(X<sub>∞</sub>, d − n). Here A(X) is the Bloch conductor and ζ(X<sub>∞</sub>, s) the archimedean Euler factor.

**Conjecture (Conjecture 1.9, joint with Flach).** Under the assumptions that define Weil-étale cohomology with compact support, the trivialisation λ sends ζ\*(X, n)<sup>−1</sup>·ℤ onto det RΓ<sub>W,c</sub>(X, ℤ(n)) ⊗ det RΓ(X, LΩ<sup>&lt;n</sup><sub>X/𝕊</sub>). No correction factor appears.

## Note, then ignore

- Two correction factors. C(X, n) comes from p-adic Hodge theory and C<sub>∞</sub>(X, n) is the explicit one. The paper expects C<sub>∞</sub> = C<sup>−1</sup> but does not prove it. Safe to skip.
- Theorem 1.3. It is the p-adic version of Theorem 1.2 with more general base rings, and serves as a step in the proof. Skip on a first reading.
- Bounded torsion and Tor-amplitude. These hypotheses make the filtrations exist. Left Kan extension then extends LΩ<sup>&lt;n</sup><sub>−/𝕊</sub> to all commutative rings (Corollary 4.17).
- Finite fields. For X smooth and proper over 𝔽<sub>q</sub>, the same complex recovers Milne's correcting factor (Corollary 1.7). It is a consistency check.
- Signs. Every zeta value statement here is up to ±.

## One next step

Open the paper at page 1 and read from the start of the introduction to formula (2) and the sentence after it.
