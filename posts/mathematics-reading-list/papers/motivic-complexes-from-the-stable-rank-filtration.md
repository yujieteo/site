source: https://www.mn.uio.no/math/personer/vit/rognes/papers/bergen10.pdf
slogan: Filtering the K-theory of a field by the dimension of vector spaces gives explicit complexes that may compute motivic cohomology.
basis: the introduction and the main theorem statements

## Before you start

These are twenty pages of talk notes, with open questions left in double brackets and several conjectures stacked on each other. That can stir unease: you may not be sure what is proved, and that can feel like your own failure to follow. The feeling is reasonable, and the notes cause it, not you. If you have met the Bloch group and the dilogarithm and wondered where they come from in K-theory, Section 8 shows one answer. Read for that picture and enjoy it. The conjectures can stay open.

## The story

The Beilinson–Soulé conjecture says that the motivic cohomology of a field vanishes in negative degrees. Bloch's cycle complex defines motivic cohomology, but vanishing is not visible from it. Beilinson and Lichtenbaum asked for complexes Γ(t, F) that sit in degrees 1 to t and compute the same groups. Then vanishing would be automatic. Rognes proposes a source. Filter the K-theory spectrum K(F) by the dimension of the vector spaces used. The k-th layer is the homotopy orbits of GL<sub>k</sub>(F) acting on a "stable building". If that building has homology in one degree only, the spectral sequence of the filtration has rows concentrated in the right range. Rank 1 gives the homology of F<sup>×</sup> and Milnor K-theory. Rank 2 gives the Bloch group and the dilogarithm.

## Main definitions

**Stable rank filtration.** A sequence of spectra F<sub>1</sub>K(F) → F<sub>2</sub>K(F) → ... → K(F). The k-th term uses, in Waldhausen's iterated S<sub>•</sub>-construction, only diagrams of vector spaces of dimension at most k.
- First term: F<sub>1</sub>K(F) is the suspension spectrum of BF<sup>×</sup> with a disjoint base point.

**Common basis complex D′(F<sup>k</sup>).** A simplicial complex whose vertices are the proper non-zero subspaces of F<sup>k</sup>. A set of vertices spans a simplex when one basis of F<sup>k</sup> has a subset spanning each of them.
- It contains the Tits building, where the subspaces must form a flag.
- The layer F<sub>k</sub>K(F)/F<sub>k−1</sub>K(F) is the suspension spectrum of ΣD′(F<sup>k</sup>), taken modulo GL<sub>k</sub>(F) in the homotopy sense (Proposition 4.4.2).

**Rank complex Γ<sub>rk</sub>(t, F).** The t-th row of the E<sup>1</sup> page of the homology spectral sequence of the filtration, with the d<sup>1</sup> differential. Its cohomology is called rank cohomology H<sub>rk</sub>(F; ℤ(t)).
- If the connectivity conjecture holds, its terms are group homology H<sub>t−s</sub>(GL<sub>s+1</sub>(F); Δ<sub>s+1</sub>(F)), where Δ<sub>k</sub>(F) is the top homology of D′(F<sup>k</sup>).

## Main results

**Conjecture (connectivity; Conjecture 4.6.1).** For every field F and every k ≥ 1, the reduced homology of D′(F<sup>k</sup>) is concentrated in degree 2k − 3.
- Proved for k ≤ 3 (Theorem 4.5.1, with Lemmas 9.3.1 and 9.4.1).
- For k = 2 the complex is the complete graph on the points of the projective line, so the claim is direct.

**Conjecture (stable rank; Conjecture 5.3.1).** The rank spectral sequence and the motivic spectral sequence are rationally isomorphic from the E<sup>2</sup> page on. So rank cohomology would be rationally equal to motivic cohomology.
- Together with connectivity, this would give the weak form of Beilinson–Soulé vanishing (Section 5.5). The full form needs also that the coinvariants H<sub>0</sub>(GL<sub>k</sub>(F); Δ<sub>k</sub>(F)) are torsion for k ≥ 2 (Conjecture 4.6.3).

**Theorem (the vertical axis; Theorem 7.2.1).** The two spectral sequences are rationally isomorphic on the column s = 0, from E<sup>2</sup> on. The map from the exterior algebra on F<sup>×</sup> to H<sub>\*</sub>(F<sup>×</sup>) induces a rational isomorphism from Milnor K-theory to that column of the rank E<sup>2</sup> page.
- Step 1: elements x ∧ y with x + y = 1 die, because F<sub>2</sub>K(F) → K(F) is 3-connected.
- Step 2: Milnor K-theory injects rationally into K-theory, which forces the comparison map to be a rational isomorphism.

**Proposition (rank two; Proposition 8.3.2).** H<sub>0</sub>(GL<sub>2</sub>(F); Δ<sub>2</sub>(F)) ≅ ℤ/2, and H<sub>1</sub>(GL<sub>2</sub>(F); Δ<sub>2</sub>(F)) maps onto a quotient of the pre-Bloch group by a rational isomorphism.
- The proof resolves Δ<sub>2</sub>(F) by tuples of distinct points of the projective line. Cross-ratios appear, and the five-term relation comes from five points.

## Note, then ignore

- Bracketed remarks. Text in double square brackets marks unfinished points and questions by the author. Section 6 is entirely such a remark. Safe to skip on a first reading.
- Spectrum homology, not homotopy. The rank spectral sequence converges to H<sub>\*</sub>K(F). The Hurewicz map makes this rationally the same as K<sub>\*</sub>(F). Safe to skip.
- Two buildings. D(F<sup>k</sup>) is a spectrum and D′(F<sup>k</sup>) a simplicial complex. They agree up to one suspension, so degrees shift by one. Safe to skip.
- Rational versus integral vanishing. By the proved Bloch–Kato conjecture, the Beilinson–Soulé conjecture is the same rationally and integrally. The notes work rationally. Safe to skip.
- An unresolved edge map. The claim that the dilogarithm on the rank-two term gives the Borel regulator (Proposition 8.5.1) carries a bracketed warning about a possible differential. Treat it as provisional. Safe to skip.

## One next step

Open the PDF at Section 5.2 and look at the diagram of the expected E<sup>1</sup> page next to the motivic diagram in Section 2.3.
