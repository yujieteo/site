source: https://arxiv.org/pdf/2102.11507
slogan: The infinitely many conformal symmetries of the plane do not vanish in higher dimensions. They move to cohomological degree one, as deformations.
basis: the introduction and the main theorem statements

## Before you start

The title joins two things that seem far apart, and "derived geometry" has a reputation for needing years of preparation. You may feel a small dread that the paper will ask for all of it. That feeling is welcome to stay. The note is short and it uses only sheaf cohomology, a Čech computation and some Schur functors. If you have ever wondered why dimension 2 is so special for conformal maps, this gives an answer you can hold. Read for that pleasure first.

## The story

In the plane, every holomorphic function is a conformal map, so local conformal maps form an infinite-dimensional family. Liouville proved that in dimension n ≥ 3 they all come from the finite-dimensional group O(n+1, 1). Where did the infinite family go? Kapranov compares this with Hartogs' theorem. Functions on ℂ minus the origin include polar parts z<sup>−k</sup>. On ℂ<sup>n</sup> minus the origin, n ≥ 2, every function extends, and the polar parts seem lost. They are not lost. They sit in the cohomology group H<sup>n−1</sup>. The same trick works for conformal maps. Conformal vector fields are sections of a line bundle κ on the space L(M) of null-geodesics. Take all cohomology of κ, not only H<sup>0</sup>. The missing infinite part appears in H<sup>1</sup>, as deformations of the conformal structure.

## Main definitions

**Holomorphic conformal manifold.** A complex manifold M of dimension n with a holomorphic family of non-degenerate quadratic cones C<sub>x</sub> ⊂ T<sub>x</sub>M, the null-cones. Equivalently, a holomorphic metric up to multiplication by a nowhere zero function. A conformal Killing field is a holomorphic vector field that preserves the cones. These fields form the Lie algebra conf(M).
- Model: the quadric Q ⊂ ℙ<sup>n+1</sup>, with conf(Q) = so(n+2, ℂ). Flat ℂ<sup>n</sup> is Q minus a tangent cone.

**Space of null-geodesics L(M).** The space of leaves of the null-geodesic foliation on the bundle of null directions. It has dimension 2n − 3 and a natural holomorphic contact structure. The paper assumes M is "civilized", which means that L(M) exists as a Hausdorff manifold and no null-geodesic passes twice through a point.
- Through each x ∈ M: the null-geodesics through x form a quadric L<sub>x</sub> of dimension n − 2 inside L(M). These compact pieces are the source of higher cohomology.

**Derived conformal algebra.** Let κ = T<sub>L</sub>/Θ be the quotient of the tangent bundle of L(M) by the contact distribution Θ. Contact vector fields correspond to sections of κ. Define Rconf(M) = RΓ(L(M), κ), a dg-Lie algebra (Definition 4.3).
- H<sup>0</sup> = conf(M).
- H<sup>1</sup> = infinitesimal deformations of L(M) as a contact manifold, which are infinitesimal deformations of the conformal structure of M.

## Main results

**Proposition (Hartogs repaired; Proposition 2.1).** For n ≥ 2, the cohomology H<sup>i</sup>(𝔸<sup>n</sup> minus 0, 𝒪) is ℂ[z<sub>1</sub>, …, z<sub>n</sub>] for i = 0. For i = n − 1 it is the space of polar parts, spanned by monomials with all exponents negative. It is zero otherwise.
- Proof: a Čech computation with the cover by the sets z<sub>i</sub> ≠ 0.

**Theorem (ambitwistor dictionary; Theorem 3.10 and Corollary 4.2).** For civilized M<sub>1</sub>, M<sub>2</sub> of dimension n, conformal maps M<sub>1</sub> → M<sub>2</sub> taking x<sub>1</sub> to x<sub>2</sub> correspond to contact maps L(M<sub>1</sub>) → L(M<sub>2</sub>) taking L<sub>x1</sub> to L<sub>x2</sub>. Infinitesimally, conf(M) ≅ H<sup>0</sup>(L(M), κ) as Lie algebras. The paper quotes the first statement from LeBrun and others.

**Theorem (flat space; Theorem 5.3).** Let n ≥ 3 and M = ℂ<sup>n</sup> with a non-degenerate quadratic form q, treated algebraically as 𝔸<sup>n</sup>. Then Rconf(𝔸<sup>n</sup>) has H<sup>0</sup> = so(n+2), the usual conformal algebra. It has H<sup>1</sup> = ⊕<sub>d≥2</sub> Coker(y<sub>d,q</sub>), where y<sub>d,q</sub> : S<sup>d</sup>(M<sup>\*</sup>) → Σ<sup>d,2</sup>(M<sup>\*</sup>) is Young multiplication by q and is injective. It has H<sup>i</sup> = 0 for i ≥ 2.
- Step 1: L(𝔸<sup>n</sup>) is the total space of a vector bundle over the quadric Q<sup>n−2</sup>, and κ is the pullback of 𝒪(1).
- Step 2: compute the cohomology on projective space with Borel–Weil–Bott, then restrict to the quadric.

## Note, then ignore

- Complex, not real. Everything is holomorphic, so the real group O(n+1, 1) becomes O(n+2, ℂ). The author says a smooth version may exist by other means. Safe to skip on a first reading.
- Lie algebra first. The paper treats the Lie algebra. It only remarks that one can integrate to a derived group, since the new part sits in odd degree 1. Safe to skip.
- Polynomials, not power series. Theorem 5.3 uses the algebraic variety 𝔸<sup>n</sup> and the Zariski topology, to get an "algebraic skeleton". Safe to skip.
- Reading H<sup>1</sup>. The spaces Σ<sup>d,2</sup> are Taylor coefficients of metrics modulo coordinate changes. Σ<sup>2,2</sup> holds the values of the Riemann curvature tensor. Dividing by the image of y removes rescalings. Useful later, safe to skip now.
- The case n = 2. There y<sub>d,q</sub> is surjective with a two-dimensional kernel in each degree, which recovers the two copies of ℂ[z]∂<sub>z</sub> (Remark 5.6). Safe to skip.

## One next step

Open the paper and read Proposition 2.1 and the paragraph after it. Then jump to Theorem 5.3 and compare the two statements line by line.
