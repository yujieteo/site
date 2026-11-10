source: https://arxiv.org/pdf/2406.12734
slogan: One Pfaffian differential form on positive definite matrices yields new cohomology classes for GL<sub>2n</sub>(ℤ) and, integrated over graphs, cocycles in the odd graph complex.
basis: the introduction and the main theorem statements

## Before you start

Seventy-eight pages, four families of forms with similar names, and an appendix of integrals with polylogarithms. The likely feeling is overwhelm at the bookkeeping, more than at any one idea. That is a reasonable thing to feel in front of this much notation. Underneath, the paper rests on one explicit formula that you can write on a card, and you may enjoy seeing a differential form do two jobs. Read for that pleasure. Getting to the end is a bonus.

## The story

Borel computed the stable cohomology of GL(ℤ) with invariant forms β on the space of positive definite matrices. Outside the stable range, little is known. Kontsevich's graph complexes are just as hard, and the odd one, GC<sub>3</sub>, had no explicit cocycles from geometry. The authors write down one new form, built from the Pfaffian. It exists only in even rank 2n, and GL<sub>2n</sub>(ℤ) preserves it up to the sign of the determinant. Wedge it with Borel's forms. Some of the products extend to a compactification and give compactly supported twisted classes for GL<sub>2n</sub>(ℤ). The others do not, but a graph with ℓ loops gives a family of ℓ × ℓ positive definite matrices in its edge lengths, and integrating the forms over edge lengths assigns a number to each graph. These numbers form cocycles.

## Main definitions

**Invariant Pfaffian form.** On the space P<sub>2n</sub> of positive definite symmetric 2n × 2n matrices X, set φ<sup>2n</sup> = Pf(dX · X<sup>−1</sup> · dX) / √det(X). It is a closed form of degree 2n, invariant under positive scaling, and it changes by sgn(det P) under X ↦ P<sup>T</sup>XP.
- Consequence: it is a form on P<sub>2n</sub>/GL<sub>2n</sub>(ℤ) with coefficients in the orientation bundle O. The paper calls this an orientation form.

**Canonical forms.** β<sup>4k+1</sup> = tr((X<sup>−1</sup>dX)<sup>4k+1</sup>) for k ≥ 1. They are closed and GL-invariant.
- Compact type: products β ∧ … ∧ β<sup>4n−3</sup> ∧ φ<sup>2n</sup> that contain the top form β<sup>4n−3</sup>, together with φ<sup>2</sup>. They span Ω<sub>c</sub>\[φ\](2n).

**Odd graph complex.** The chain complex GC<sup>3</sup> is spanned over ℚ by oriented connected graphs. A graph with m edges and ℓ loops has degree m − 3ℓ, and the boundary contracts edges. GC<sub>3</sub> is the dual cochain complex, with coboundary δ and a Lie bracket.

**Canonical integral.** For a graph G with ℓ loops and a polynomial ω in the β forms, I<sub>G</sub>(ω) is (−2π)<sup>−ℓ/2</sup> times the integral of ω ∧ φ over the simplex of edge lengths, after pulling back along the dual graph Laplacian.

## Main results

**Theorem (unstable classes; Theorem 1.1).** For all n > 1 there is a canonical injective map of graded vector spaces from Ω<sub>c</sub>\[φ\](2n) to the compactly supported cohomology of P<sub>2n</sub>/GL<sub>2n</sub>(ℤ) with coefficients in O. For n = 1 the class of φ<sup>2</sup> generates H<sub>c</sub><sup>3</sup>(P<sub>2</sub>/GL<sub>2</sub>(ℤ); O) ≅ ℝ.
- Step 1: show β<sup>4n−3</sup> ∧ φ<sup>2n</sup> extends to a version of the Borel–Serre compactification and vanishes on the boundary.
- Step 2: pair with the known classes of Borel's forms under Poincaré duality.

**Theorem (symmetric algebra; Theorem 1.2).** The symmetric algebra on the sum over n of Ω<sub>c</sub>\[φ\](2n), tensored with ℝ, embeds as a bigraded vector space into the sum over n of H<sub>c</sub><sup>•</sup>(P<sub>2n</sub>/GL<sub>2n</sub>(ℤ); O).
- Step 1: the compact type classes are primitive for the Hopf algebra structure introduced in the cited paper [AMP24].
- Step 2: apply the Milnor–Moore and Poincaré–Birkhoff–Witt theorems.

**Theorem (Stokes relation and cocycles; Theorems 1.3 and 1.4, Corollary 1.6).** The integrals I<sub>G</sub>(ω) converge absolutely and define cochains I(ω) on the odd graph complex. They satisfy 0 = δI(ω) + [I(ω), m] + ½ Σ ±[I(ω″), I(ω′)], where m is a weighted sum of the dipole graphs with even loop number and the sum runs over the reduced coproduct of ω. For ω of degree d, the part of I(ω) in loop number 2 + 2⌈d/4⌉ is a δ-cocycle.

**Theorem (first non-trivial class; Theorem 1.7).** The class of the loop number 6 part of I(β<sup>5</sup>) in H<sup>−6</sup>(GC<sub>3</sub>) ⊗ ℝ is non-zero. The proof evaluates it on an explicit cycle of 20 graphs with 12 edges.

## Note, then ignore

- Upper and lower 3. GC<sup>3</sup> is the chain complex of graphs and GC<sub>3</sub> its dual. Safe to skip on a first reading.
- Compact against non-compact type. The forms that give GL<sub>2n</sub>(ℤ) classes and those that give graph cocycles are different sets, with φ<sup>2</sup> the one overlap. Safe to skip.
- Numerical step. Some integrals behind Theorem 1.7 were evaluated numerically, and the closed form 2π<sup>2</sup> ln 2 − 13ζ(3) is confirmed to 40 digits. Non-vanishing needs two digits. Safe to skip.
- Choice in Theorem 1.2. The embedding depends on a splitting from the Poincaré–Birkhoff–Witt theorem. Safe to skip.
- Sign conventions. The orientation of a graph fixes the sign of the Pfaffian form and of the simplex. Safe to skip.

## One next step

Open the paper at Section 1 (page 2) and read the first formula, the one defining the Pfaffian form, and the paragraph up to equation (1.1).
