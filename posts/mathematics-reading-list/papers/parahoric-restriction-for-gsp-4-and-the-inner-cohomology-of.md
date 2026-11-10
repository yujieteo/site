source: https://d-nb.info/1180615417/34
slogan: Tables record what every representation of p-adic GSp(4) leaves behind at each parahoric level, and they settle conjectures on level two Siegel threefolds.
basis: the introduction and the main theorem statements

## Before you start

This is a doctoral thesis of well over a hundred pages, and much of it is tables indexed by Roman numerals from someone else's classification. Boredom is the likely feeling, with a little guilt for feeling it about careful work. Both can stay. A table is not meant to be read through. If you want to see how local representation theory turns into a count of cohomology classes, one worked example shows it. Look for something you enjoy looking at. Finishing is not the point of a reference text.

## The story

The cohomology of a Siegel modular threefold carries a Galois action and a Hecke action. Bergström, Faber and van der Geer counted points on genus two curves over finite fields and guessed exact formulas for this cohomology at levels 1 and 2. Level 1 was proved by others. At level 2 the finite group GSp(4, 𝔽<sub>2</sub>), which is the symmetric group on six letters, also acts, and the formulas must say how. Automorphic theory writes inner cohomology as a sum over cuspidal representations π. The missing local input was this: which representation of the finite group does each π<sub>p</sub> leave on its vectors fixed by the principal congruence subgroup? Rösner answers that for every irreducible representation of GSp(4, F) and every parahoric subgroup. He then assembles the answers into a proof of the level 2 conjectures.

## Main definitions

**Parahoric subgroup.** Let F be a finite extension of ℚ<sub>p</sub> with residue field of order q. A parahoric subgroup P of G = GSp(4, F) is a compact open subgroup coming from Bruhat-Tits theory. It has a pro-unipotent radical P<sup>+</sup>, and the Levi quotient P/P<sup>+</sup> is a reductive group over the residue field.
- Maximal ones: the hyperspecial K, with quotient GSp(4, 𝔽<sub>q</sub>), and the paramodular J.
- Non-maximal ones, up to conjugacy: the Iwahori B, the Klingen parahoric Q and the Siegel parahoric P.

**Parahoric restriction.** For an admissible representation (π, V) of G, r<sub>P</sub>(π) is the representation of the finite group P/P<sup>+</sup> on the invariants V<sup>P<sup>+</sup></sup>. It is the analogue of the Jacquet functor, with a parahoric in place of a parabolic.

**Inner cohomology.** For a local system V<sub>λ</sub> on the Siegel threefold, H<sub>!</sub> is the image of compactly supported cohomology in ordinary cohomology. Under spectral decomposition it has a weak endoscopic part and a Saito-Kurokawa part, among others.
- Endoscopic group: M = GL(2) × GL(2) / GL(1). An endoscopic lift is a character lift r from representations of M to GSp(4).

## Main results

**Theorem (hyperspecial restriction; Theorem 3.2).** For a non-cuspidal irreducible admissible representation ρ of GSp(4, F) with depth zero induction data, r<sub>K</sub>(ρ) is given by Table 3.1. For induction data of positive depth, r<sub>K</sub>(ρ) = 0.
- Other parahorics: Theorem 3.4 and Table 3.2 treat B, P and Q. Theorem 3.7 and Table 3.3 treat the paramodular J.
- Cuspidal case: r<sub>K</sub>(π) is a cuspidal representation σ when π is compactly induced from an extension of σ, and zero otherwise (Lemma 3.1).

**Theorem (endoscopic lifts; Theorem 4.9 and Corollary 4.10).** For an irreducible admissible σ of M of depth zero, r<sub>K</sub>(r(σ)) is given by Table 4.3, and it is zero for σ of positive depth. For every admissible σ, dim r<sub>K<sub>G</sub></sub>(r(σ)) = (q² + 1) · dim r<sub>K<sub>M</sub></sub>(σ) at hyperspecial parahorics.

**Theorem (global decomposition; Theorems 5.4 and 5.8).** Take a level K that is the pro-unipotent radical P<sub>v</sub><sup>+</sup> at finitely many places v and hyperspecial elsewhere. Then the Saito-Kurokawa part (for λ = (k − 3, k − 3), k ≥ 3) and the weak endoscopic part of the cohomology are explicit direct sums, over automorphic data on GL(2) or on M, of (𝔤, K)-cohomology tensored with the local parahoric restrictions r<sub>P<sub>v</sub></sub>(π<sub>v</sub>).

**Theorem (level two; Theorems 5.13 and 5.17).** For the moduli space A<sub>2,2</sub> of principally polarised abelian surfaces with level 2 structure, the semisimplified endoscopic and Saito-Kurokawa parts of the inner cohomology are given as explicit sums of products: a representation of Sp(4, 𝔽<sub>2</sub>) times a space of elliptic cusp forms of level 1, 2 or 4. The thesis states that this proves the conjectures of Bergström, Faber and van der Geer at level 2, with corrections.
- Correction: Remarks 5.16 and 5.18 and Corollary 5.19 say Conjecture 7.2 of their paper does not hold literally, and give the closest true statement.

## Note, then ignore

- Roman numeral types. Types I to XI follow the Sally-Tadić classification as tabulated by Roberts and Schmidt. They are labels, nothing more. Safe to skip on a first reading.
- Even and odd q. The character tables of GSp(4, 𝔽<sub>q</sub>) differ for even and odd q, so several tables have two columns. Safe to skip.
- Partition labels. Notation such as s[4, 2] names a representation of the symmetric group on six letters through GSp(4, 𝔽<sub>2</sub>) (Section 5.5.5). Safe to skip.
- Semisimplification. The level 2 statements describe Galois representations only up to semisimplification. Safe to skip.
- Squarefree level. The global results need level structure of the stated parahoric kind, which covers principal congruence subgroups of squarefree level. Safe to skip.

## One next step

Open the thesis at Example 5.5 (thesis page 91), which works out the Saito-Kurokawa cohomology for prime level p, and read only that example.
