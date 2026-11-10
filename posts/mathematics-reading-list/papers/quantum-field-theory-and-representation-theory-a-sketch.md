source: https://www.math.columbia.edu/~woit/sketch.pdf
slogan: Irreducible representations of a compact group are indices of Dirac operators on G/T, which hints that path integrals compute representations of gauge groups.
basis: the introduction and the main theorem statements

## Before you start

This is a 50-page sketch that runs from Borel-Weil to equivariant K-theory to the standard model, and the author warns that signs and factors may be wrong. You may feel suspicious, or impatient with a text that will not commit to precise statements. Both reactions are fair. If you want one story that links highest weights, spinors and the Dirac operator, Section 2 gives it in under twenty pages. Read that part for pleasure. The speculative half is optional.

## The story

Quantum mechanics and representation theory have been tied together from the start: the Hilbert space is a representation of the symmetries. Geometric quantisation makes this precise for a compact group G by quantising the flag manifold G/T. Physicists ignore it, because it seems to say nothing about gauge fields, spinors or path integrals. Woit retells the compact story in three steps. First, holomorphic sections of a line bundle give each irreducible representation. Second, Lie algebra cohomology explains what happens for the other complex structures. Third, a Dirac operator on spinors removes the choice of complex structure. The last version is an index, so it lives in equivariant K-theory. He then guesses that the standard model path integral is the same construction for an infinite-dimensional gauge group.

## Main definitions

**Line bundle L<sub>λ</sub>.** For a compact connected Lie group G with maximal torus T and a weight λ of T, L<sub>λ</sub> = G ×<sub>T</sub> ℂ over G/T. Its sections are the functions on G that transform by the inverse of the character of λ under right translation by T.

**The subalgebra n<sub>−</sub>.** A choice of positive roots splits (g/t) ⊗ ℂ into n<sub>+</sub> ⊕ n<sub>−</sub>. This makes G/T a complex manifold and L<sub>λ</sub> a holomorphic line bundle.
- The choices correspond to the elements of the Weyl group W(G, T).
- Holomorphic sections are the sections killed by right translation along n<sub>−</sub>.

**Lie algebra cohomology.** H<sup>m</sup>(g, V) is the cohomology of the complex Λ<sup>m</sup>(g) ⊗ V with the standard differential. In degree 0 it is the space of invariants V<sup>g</sup>.

**Spinor module for g/t.** The spinor representation S of the Clifford algebra of the even-dimensional real space g/t. As a T-representation it differs from Λ<sup>\*</sup>(n<sub>−</sub>) by a square root of the top exterior power of n<sub>−</sub>. That square root is the source of the shift by δ, half the sum of the positive roots.

## Main results

**Theorem (Borel-Weil; Theorem 2).** If λ is dominant, the space of holomorphic sections H<sup>0</sup>(G/T, O(L<sub>λ</sub>)) is the irreducible representation of G with highest weight λ. If λ is not dominant, the space is zero. Every finite-dimensional irreducible representation arises this way.
- Step 1: the Peter-Weyl theorem splits sections of L<sub>λ</sub> into matrix coefficients.
- Step 2: the n<sub>−</sub> condition keeps only the representation with highest weight λ.

**Theorem (Borel-Weil-Bott-Kostant; Theorem 4).** For a weight λ, the cohomology H<sup>\*</sup>(G/T, O(L<sub>λ</sub>)) is non-zero only in the degree l(w), the length of the Weyl group element w that makes w(λ + δ) dominant. There it is the irreducible representation with highest weight w(λ + δ) − δ.
- Step 1: the Dolbeault complex of L<sub>λ</sub> reduces to Lie algebra cohomology of n<sub>−</sub>.
- Step 2: Kostant's theorem (Theorem 3) gives H<sup>\*</sup>(n<sub>−</sub>, V<sub>λ</sub>) as one T-weight w(λ + δ) − δ for each w, in degree l(w).

**Theorem (Landweber; Theorem 6).** Let H ⊂ G have the same rank, and let U<sub>λ</sub> be an irreducible representation of H. There is a Dirac operator on G/H, twisted by U<sub>λ</sub>, whose G-equivariant index is plus or minus one irreducible representation of G. Its highest weight is w(λ + ρ<sub>H</sub>) − ρ<sub>G</sub>, for the Weyl group element w that makes this weight dominant. No complex structure on G/H is needed.

**Conjecture (page 4).** The quantum field theory of the standard model can be understood purely through the representation theory of the automorphism group of some geometric structure. The paper offers analogies as evidence, not a proof.

## Note, then ignore

- The author's warning. The introduction says that factors of 2, π and i may be wrong and that precision is loose. Check any formula against a textbook before using it. Safe to set aside while reading for the story.
- Singular weights. The source does not spell out the case where no w makes λ + δ strictly dominant. The standard theorem gives zero cohomology there. Safe to skip.
- Lowest versus highest. The n<sub>−</sub> condition selects a lowest weight in the dual representation, which is a highest weight in the original. Safe to skip on a first reading.
- Completion. The K-theory of BG gives the representation ring completed at the identity, not the ring itself. This matters in Section 4 only. Safe to skip.
- Freed-Hopkins-Teleman (Theorem 8). The Verlinde algebra as twisted equivariant K-homology is quoted as the best evidence in two dimensions. It is not needed for Section 2. Safe to skip.

## One next step

Open the PDF at Section 2.1 (page 5) and read down to Theorem 2 on page 9, skipping the displayed formulas the first time.
