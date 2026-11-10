source: https://arxiv.org/pdf/1910.10321
slogan: In depth up to 4, the Galois symmetries of the line minus N-th roots of unity match the cohomology of congruence subgroups of GL<sub>m</sub>(ℤ).
basis: the introduction and the main theorem statements

## Before you start

This paper is 72 pages and leans on twenty years of the author's earlier work: mixed Tate motives, motivic correlators, modular complexes. The likely feeling is overwhelm, plus a suspicion that you missed the prequels. Both are reasonable, and neither needs fixing before you begin. The main statements fit in one table on page 8, and they tie polylogarithms at roots of unity to modular curves and their GL<sub>3</sub> and GL<sub>4</sub> cousins. Read for the surprise of that table. The rest can wait.

## The story

Take the line with 0 and the N-th roots of unity removed. Its fundamental group, made motivic, carries an action of a motivic Galois group, and the image of that action controls multiple polylogarithms at roots of unity. People want its size and structure. The image has a second grading, the depth m, and in depth 1 Borel's computation of K-theory gives the answer. Goncharov's idea is that depth m is governed by GL<sub>m</sub>. For m = 2 the relevant complex is the classical triangulation of the upper half plane by ideal triangles. For higher m he uses a combinatorial "modular complex" and compares it with Voronoi's cell decomposition of the symmetric space. The comparison works for m ≤ 4, and the m = 4 case is new here.

## Main definitions

**Cyclotomic Lie coalgebra (Definition 1.1).** The motivic fundamental group π<sub>1</sub><sup>M</sup>(G<sub>m</sub> − μ<sub>N</sub>, v<sub>0</sub>) is a pro-Lie algebra in mixed Tate motives over S<sub>N</sub> = Spec ℤ[ζ<sub>N</sub>][1/N]. The fundamental Lie algebra of that category acts on it. Take the image of the action and pass to the associated graded for the depth filtration. The result C<sub>•,•</sub>(μ<sub>N</sub>) is a Lie algebra bigraded by weight w and depth m, with w ≥ m ≥ 1. Its graded dual is the cyclotomic Lie coalgebra.
- Depth 1: the weight w part is K<sub>2w−1</sub>(S<sub>N</sub>) ⊗ ℚ.
- Extended version Ĉ: add one extra generator in bidegree (1, 1), with zero coproduct. The diagonal part Ĉ<sub>•</sub> keeps only w = m.

**Modular manifold.** Γ<sub>1</sub>(m; N) is the subgroup of GL<sub>m</sub>(ℤ) fixing the vector (0, ..., 0, 1) modulo N. The modular manifold Y<sub>1</sub>(m; N) is the quotient of the symmetric space GL<sub>m</sub>(ℝ)/O<sub>m</sub> · ℝ<sup>\*</sup><sub>+</sub> by Γ<sub>1</sub>(m; N). It parametrises rank m lattices with a point of order N and a positive definite quadratic form up to scale.
- m = 2: a modular curve, up to the action of complex conjugation. For m > 2 the space is not an algebraic variety.

**Modular complex.** A complex M<sup>•</sup><sub>(m)</sub> of GL<sub>m</sub>(ℤ)-modules in degrees 1 to m, defined combinatorially in the author's 1998 work. For m = 2 it is the chain complex of the triangulation of the hyperbolic plane by the GL<sub>2</sub>(ℤ)-translates of the ideal triangle with vertices ∞, 0, 1.

## Main results

**Theorem (a map from modular complexes; Theorem 1.6).** Fix a primitive N-th root of unity. Tensor the modular complexes over Γ<sub>1</sub>(m; N) with the symmetric powers S<sup>w−m</sup>V<sub>m</sub> and sum over w ≥ m ≥ 1. The result is a commutative dg-algebra (Theorem 1.5), and there is a canonical surjective map of dg-algebras from it to the cochain complex of Ĉ<sub>•,•</sub>(μ<sub>N</sub>).
- Step 1: send generators of the modular complex to motivic correlators at N-th roots of unity.
- Step 2: the check that this respects the differential and product uses the second shuffle relations for motivic correlators, proved by Malkin.

**Theorem (modular complexes compute group cohomology; Theorem 1.7).** Let Γ be a finite index subgroup of GL<sub>m</sub>(ℤ) and V a GL<sub>m</sub>-module. The i-th cohomology of M<sup>•</sup><sub>(m)</sub> ⊗<sub>Γ</sub> V is H<sup>i−1</sup>(Γ, V ⊗ ε) for m = 2 and i = 1, 2. It is H<sup>i</sup>(Γ, V) for m = 3 and 1 ≤ i ≤ 3. It is H<sup>i+2</sup>(Γ, V ⊗ ε) for m = 4 and 1 ≤ i ≤ 4. Here ε is the determinant character. For every m ≥ 2 the top group, in degree m, is H<sup>m(m−1)/2</sup>(Γ, V ⊗ ε<sup>m−1</sup>).
- Method: relate the modular complex to the Voronoi complex of the symmetric space, for m = 2, 3, 4 in turn.

**Theorem (level p, weight at most 4; Theorems 1.2 and 1.3).** Let p be prime. The weight m cohomology of the diagonal coalgebra Ĉ<sub>•</sub>(μ<sub>p</sub>) is H<sup>i−1</sup>(Γ<sub>1</sub>(2; p), ε) for m = 2, and H<sup>i</sup>(Γ<sub>1</sub>(3; p), ℚ) for m = 3. For m = 4 it is H<sup>i+2</sup>(Γ<sub>1</sub>(4; p), ε) when i = 2, 3, 4, and a quotient of that group when i = 1. For every m ≥ 2 the top degree group is canonically H<sup>m(m−1)/2</sup>(Γ<sub>1</sub>(m; p), ε<sup>m−1</sup>).

**Conjecture (Conjecture 1.4).** The degree 1, weight 4 cohomology of the non-extended diagonal coalgebra C<sub>•</sub>(μ<sub>p</sub>) is canonically H<sup>1</sup>(Γ<sub>1</sub>(2; p), S<sup>2</sup>V<sub>2</sub> ⊗ ε).

## Note, then ignore

- Cuspidal range. For m ≤ 4 the groups in the main table contain all the cuspidal cohomology of Γ<sub>1</sub>(m; p), which is why the author stops to list degrees. Safe to skip.
- Tangential base point. The base point v<sub>0</sub> is a tangent vector at the removed point 0, which keeps everything defined over the cyclotomic integers. Safe to skip on a first reading.
- Weight against depth. The cleanest statements are on the diagonal, weight = depth, since cuspidal cohomology needs a self-dual coefficient module and S<sup>w−m</sup>V<sub>m</sub> is self-dual only for w = m. Off the diagonal you may ignore things at first.
- No explanation yet. The author says he does not know why the two sides agree for m > 2. Do not look for a conceptual reason in the text.

## One next step

Open the PDF at page 7, read Theorem 1.3, and look at Table 1 on page 8. Then look at Figure 1 on page 9.
