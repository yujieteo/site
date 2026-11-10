source: https://ncatlab.org/nlab/files/PedrotticECohomology2018.pdf
slogan: One class on infinite complex projective space gives a cohomology theory Chern classes, and one Thom class per bundle gives it a Thom isomorphism.
basis: the introduction and the main theorem statements

## Before you start

These are 29 pages of seminar notes that follow Kochman's book. The feeling they may raise is tedium at the start: page after page of definitions of spectra before anything happens. You can be bored by that. If you want to see why K-theory and bordism have characteristic classes just as ordinary cohomology does, Section 2 shows it with one spectral sequence argument. Start where it gets interesting for you. Nothing obliges you to read from page 1.

## The story

In ordinary cohomology, H<sup>\*</sup>(ℂP<sup>∞</sup>) is a polynomial ring on one class, and Chern classes and the Thom isomorphism follow. People wanted the same tools for K-theory, complex bordism MU and other theories. What do you need to assume? The answer is small. Ask only for one class x in the reduced E-cohomology of ℂP<sup>∞</sup>, in degree 2, that restricts to the canonical generator on ℂP<sup>1</sup> = S<sup>2</sup>. Then the Atiyah-Hirzebruch spectral sequence collapses, because the powers of x are permanent cycles. You get E<sup>\*</sup>(ℂP<sup>∞</sup>) as a power series ring and classes in E<sup>\*</sup>(BU(n)). The second half does the same for bundles: a Thom class for E gives a Thom isomorphism for E, and E-characteristic numbers that can detect bordism classes.

## Main definitions

**Ring spectrum.** A spectrum E with a product E ∧ E → E and a unit S → E from the sphere spectrum that are associative and unital up to homotopy. Its homotopy groups π<sub>\*</sub>E form a graded ring.

**Oriented spectrum (Definition 2.0.2).** A ring spectrum E, with π<sub>\*</sub>E bounded below, together with a class x<sup>E</sup> in the reduced group E<sup>2</sup>(ℂP<sup>∞</sup>) whose restriction to ℂP<sup>1</sup> is the suspended unit, the canonical generator.
- Examples: Eilenberg-MacLane spectra, complex K-theory and MU.

**(B, f)-structure and Thom spectrum.** A (B, f)-structure is a compatible family of spaces B<sub>n</sub> with maps f<sub>n</sub> : B<sub>n</sub> → BO(n). A B-structure on a manifold is a lift of the classifying map of its normal bundle to B. The Thom spectrum MB is built from the Thom spaces of the pulled-back universal bundles.
- Pontrjagin-Thom: bordism classes of manifolds with B-structure form the homotopy groups π<sub>\*</sub>(MB) (Theorem 3.0.16).

**E-oriented bundle (Definition 5.0.5).** A k-dimensional vector bundle ξ over Y is E-oriented if there is a Thom class U in the reduced group E<sup>k</sup> of the Thom space M(ξ) that restricts on each fibre to a generator of the reduced E<sup>\*</sup>(S<sup>k</sup>) over π<sub>\*</sub>E.

## Main results

**Theorem (projective spaces; Proposition 2.0.4).** Let (E, x<sup>E</sup>) be an oriented spectrum and write y for the image of x<sup>E</sup> in unreduced cohomology. Then E<sup>\*</sup>(ℂP<sup>n</sup>) ≅ π<sub>\*</sub>E[y]/(y<sup>n+1</sup>) and E<sup>\*</sup>(ℂP<sup>∞</sup>) ≅ π<sub>\*</sub>E[[y]]. The E-homology of ℂP<sup>∞</sup> is free over π<sub>\*</sub>E on the dual basis to the powers of y.
- Step 1: the Atiyah-Hirzebruch spectral sequence has E<sub>2</sub> page H<sup>\*</sup>(ℂP<sup>n</sup>; π<sub>\*</sub>E), and y is a permanent cycle.
- Step 2: the spectral sequence is multiplicative, so all differentials vanish. Pass to the limit over n.

**Theorem (Conner-Floyd classes; Proposition 2.0.14).** For an oriented spectrum E there are classes cf<sub>k</sub> ∈ E<sup>2k</sup>(BU(n)), 1 ≤ k ≤ n, with E<sup>\*</sup>(BU(n)) ≅ π<sub>\*</sub>E[[cf<sub>1</sub>, ..., cf<sub>n</sub>]]. Also E<sup>\*</sup>(BU) is a power series ring on all the cf<sub>k</sub>, and E<sub>\*</sub>(BU) is a polynomial ring over π<sub>\*</sub>E.
- Step 1: induct on n, starting from BU(1) ≃ ℂP<sup>∞</sup>.
- Step 2: use the map BU(1)<sup>n</sup> → BU(n) and naturality to show the spectral sequence collapses.

**Theorem (Thom isomorphism; Proposition 6.0.2).** Let E be a connective ring spectrum and ξ : X → Y an E-oriented n-dimensional vector bundle with Thom class u. Cap product with u gives an isomorphism from the reduced E<sub>t+n</sub>(Mξ) to E<sub>t</sub>(Y). If Y is a finite-dimensional CW complex, w ↦ u ∪ ξ<sup>\*</sup>(w) gives an isomorphism from E<sup>t</sup>(Y) to the reduced E<sup>t+n</sup>(Mξ).
- Step 1: the map induces a map of Atiyah-Hirzebruch spectral sequences.
- Step 2: on E<sub>2</sub> pages it is the classical Thom isomorphism, so it is an isomorphism in the limit.

**Corollary (characteristic numbers detect bordism; Corollary 6.0.8).** Let B be an E-oriented (B, f)-structure. Suppose the Hurewicz map π<sub>\*</sub>(MB) → E<sub>\*</sub>(MB) is injective, and so is the map from E<sub>\*</sub>(B) to the π<sub>\*</sub>E-dual of E<sup>\*</sup>(B). Then a closed manifold with B-structure bounds a compact one if and only if all its E-characteristic numbers vanish.

## Note, then ignore

- Polynomial or power series: Remark 2.0.5 explains why ℤ[[y]] here does not contradict the usual ℤ[y]. It is a choice between direct sum and direct product of the graded pieces, and safe to skip.
- Cofinal subspectra: morphisms of spectra are defined on cofinal subspectra, in Adams's style. It makes the category work and is safe to skip.
- Bounded below and connective: the notes assume π<sub>\*</sub>E bounded below for orientations and E connective for the Thom isomorphism. These make the spectral sequences converge in the notes' arguments. Safe to skip at first.
- Finite-dimensional base: the cohomology Thom isomorphism is stated only for such Y. It is a convergence hypothesis and safe to skip.
- Section 4: the crash course on spectral sequences is reference material. Skip it if you know the Atiyah-Hirzebruch spectral sequence.

## One next step

Open the notes at Definition 2.0.2 on page 5 and read on through Example 2.0.3. That gives you the definition and three examples.
