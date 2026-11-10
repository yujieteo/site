source: https://arxiv.org/pdf/math/0606419
slogan: Every period integral on the moduli space of marked spheres is a combination of multiple zeta values, and Stokes' theorem computes it.
basis: the introduction and the main theorem statements

## Before you start

This is a doctoral thesis of about 110 pages, with eight sections and an index of notations. The likely feeling is overwhelm: so many pages, and each section builds its own machine. You are allowed to feel that, and it does not need to be argued away. The thesis is also said by its author to be almost self-contained, and its introduction tells the whole plot in nine pages. If you want to know why multiple zeta values keep turning up in integrals, the answer is here. Read the introduction for pleasure and let the rest wait.

## The story

Goncharov and Manin showed that every multiple zeta value is an integral over a region in M<sub>0,n</sub>, the moduli space of spheres with n marked points. They conjectured the converse: every such period integral is a combination of multiple zeta values. The obstacle is that the integrals are hard to compute directly. Brown's idea is to integrate one variable at a time with Stokes' theorem. The real points of M<sub>0,n</sub> are tiled by cells, and the closure of each cell is an associahedron. Each face is a product of two smaller associahedra. So take a primitive of the integrand, restrict it to the faces, and repeat. For this to work, primitives must exist in a fixed algebra of polylogarithm functions. Each step lowers the dimension by one and raises the weight by one. At the end you evaluate at a point and get multiple zeta values.

## Main definitions

**Multiple zeta value.** For positive integers n<sub>1</sub>, ..., n<sub>r</sub> with n<sub>r</sub> ≥ 2, ζ(n<sub>1</sub>, ..., n<sub>r</sub>) = Σ 1/(k<sub>1</sub><sup>n<sub>1</sub></sup> ... k<sub>r</sub><sup>n<sub>r</sub></sup>) over 0 &lt; k<sub>1</sub> &lt; ... &lt; k<sub>r</sub>. Its weight is n<sub>1</sub> + ... + n<sub>r</sub>. The number 2πi has weight 1.

**Dihedral coordinates.** Fix a dihedral structure δ, an arrangement of the n marked points as the sides of an n-gon. Each chord {i, j} of the n-gon gives a cross-ratio function u<sub>ij</sub> from M<sub>0,n</sub> to ℙ<sup>1</sup> minus {0, 1, ∞}.
- The cell: X<sub>δ</sub> is the region where all u<sub>ij</sub> lie strictly between 0 and 1. The cells for different δ tile M<sub>0,n</sub>(ℝ).
- The chart: the closure of the image of M<sub>0,n</sub> under all u<sub>ij</sub> is an affine scheme M<sup>δ</sup><sub>0,n</sub> over ℤ, in which the closed cell {0 ≤ u<sub>ij</sub> ≤ 1} is an associahedron.

**Bar construction B(M).** Let M be the complement of hyperplanes in affine space over a field of characteristic 0, with logarithmic 1-forms ω<sub>i</sub>. B(M) is spanned over the regular functions by combinations of words [ω<sub>i1</sub>|...|ω<sub>im</sub>] that satisfy an integrability condition. Iterated integration turns each element into a many-valued function that depends only on the homotopy class of the path.

**Period integral.** Let ℓ = n − 3. Take A and B, two sets of boundary divisors of the compactified moduli space with no common component. A period is I = ∫<sub>X</sub> ω, where ω is an algebraic ℓ-form with singularities in A and X is a real compact ℓ-dimensional region with boundary in B that does not meet A.

## Main results

**Theorem (periods; Theorem 1.1).** The integral I is a ℚ[2πi]-linear combination of multiple zeta values of weight at most ℓ. This proves a conjecture of Goncharov and Manin.
- Step 1: reduce to a single cell and write I as an integral of a product of powers of the u<sub>ij</sub> against one canonical ℓ-form.
- Step 2: apply Stokes' theorem on the associahedron repeatedly, using Theorems 1.3 and 1.6 at each stage.

**Theorem (primitives exist; Theorems 1.2 and 1.3).** For a hyperplane complement M, B(M) is a differential algebra with constants k, no non-trivial differential ideals, and vanishing first de Rham cohomology. For M<sub>0,n</sub> the de Rham cohomology of B vanishes in every degree i ≥ 1.
- Why: the map M<sub>0,n</sub> → M<sub>0,n−1</sub> that forgets a point is a fibration by punctured lines, and B splits as a tensor product of free shuffle algebras along it.

**Theorem (associator; Theorems 1.4 and 1.5).** At each vertex v of the associahedron, the formal equation dL = ΩL, with Ω = Σ δ<sub>ij</sub> d log u<sub>ij</sub>, has a unique solution of the form (holomorphic function equal to 1 at v) × exp(Σ δ<sub>ij</sub> log u<sub>ij</sub>), the sum over faces through v. The ratio of the solutions at two vertices is a constant series whose coefficients are multiple zeta values.

**Theorem (restriction to faces; Theorem 1.6).** The regularised restriction of the polylogarithm algebra to a face F<sub>ij</sub> is the tensor product of the polylogarithm algebras of the two smaller moduli spaces, after extending scalars to the algebra of multiple zeta values.

## Note, then ignore

- Three coordinate systems. Simplicial coordinates t<sub>i</sub>, cubical coordinates x<sub>i</sub> and dihedral coordinates u<sub>ij</sub> describe the same space. Each suits a different computation. Safe to skip on a first reading.
- Regularisation. Iterated integrals from a boundary point diverge logarithmically. Section 4 develops a several-variable Fuchs theorem to tame all of them at once. Safe to skip.
- Poles of primitives. A primitive is not unique and a careless choice has poles on the boundary. Brown shows a choice without poles exists. Safe to skip.
- Shuffle and stuffle. Both product rules for multiple zeta values come from maps between moduli spaces (Section 7.5). A good detour, not needed for Theorem 1.1. Safe to skip.
- Coefficients ℚ[2πi]. The constant 2πi enters with weight 1, so the theorem is not a statement about real multiple zeta values alone. Safe to skip.

## One next step

Open the thesis at page 4 and study Figure 1 with its caption: the triangle 0 &lt; t<sub>1</sub> &lt; t<sub>2</sub> &lt; 1 becoming a pentagon in M<sub>0,5</sub>.
