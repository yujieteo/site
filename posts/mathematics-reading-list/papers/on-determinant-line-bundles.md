source: https://web.ma.utexas.edu/users/dafr/detsur.pdf
slogan: A family of Dirac operators has no determinant function, but it has a determinant line bundle whose curvature and holonomy you can compute.
basis: the introduction and the main theorem statements

## Before you start

This survey runs to 38 pages and assumes spinors, Dirac operators, ζ-functions and the index theorem for families. The likely feeling is shame at not having all that background. It is fine to feel that. Nothing here needs you to fix it first. If you want to see how an index theorem turns into geometry on a line bundle, section 1 shows it. Read for the pleasure of the construction. Finishing can wait.

## The story

For a linear map between finite-dimensional spaces of equal dimension, the determinant is an element of a line: the top exterior power of the source, dualised, tensored with the top exterior power of the target. Quillen used this to attach a holomorphic line bundle, with a metric and a curvature formula, to a family of Cauchy-Riemann operators on a Riemann surface. Physicists met the same bundle in anomalies. Freed surveys any family of Dirac operators on a compact manifold. The block is infinite dimension and kernels whose dimension jumps. The idea is to cut the spectrum below a level a, work with the finite-dimensional low eigenspaces, and patch. A ζ-function corrects the metric and the connection so that the patches agree. Curvature and holonomy then have exact formulas.

## Main definitions

**Geometric data (1.1).** A smooth fibration π : Z → Y with compact fibre X and a spin structure on the vertical tangent bundle T(Z/Y), a metric on T(Z/Y), a projection TZ → T(Z/Y), a complex representation ρ of Spin(n), and a Hermitian bundle E → Z with a compatible connection. This gives a chiral Dirac operator D<sub>y</sub> on each fibre, from positive to negative spinor fields.

**Determinant line.** For one operator, L<sub>y</sub> = (det ker D<sub>y</sub>)\* ⊗ det coker D<sub>y</sub>, where det means the top exterior power.
- Step 1: on the open set U<sup>(a)</sup> where a is not an eigenvalue of D\*D, let H<sub>±</sub><sup>(a)</sup> be the sum of eigenspaces below a, and set L<sup>(a)</sup> = (det H<sub>+</sub><sup>(a)</sup>)\* ⊗ det H<sub>−</sub><sup>(a)</sup>.
- Step 2: on overlaps, glue L<sup>(a)</sup> to L<sup>(b)</sup> by tensoring with the determinant of D on the eigenspaces between a and b.

**Quillen metric.** The L<sup>2</sup> metric on L<sup>(a)</sup>, multiplied by the ζ-regularised product of the eigenvalues of D\*D above a, defined as exp(−ζ′(0)) for ζ(s) = Σ λ<sup>−s</sup>.

**The invariant ξ.** For a self-adjoint Dirac operator A, the η-invariant is the value at s = 0 of the continued sum Σ sgn(λ)|λ|<sup>−s</sup> over nonzero eigenvalues. Then ξ = (η + dim ker A)/2.

## Main results

**Theorem (the bundle exists; Theorem 1.12, Bismut and Freed).** The geometric data determine a smooth line bundle L → Y with a Hermitian metric (the Quillen metric) and a unitary connection. Over components of Y where D has index zero there is a canonical section det D. It is nonzero exactly where D is invertible.
- Step 1: the regularised product over eigenvalues above a changes by the finite product between a and b, so the corrected metrics agree on overlaps.
- Step 2: the connection gets a similar correction, the finite part at s = 0 of a regularised trace of (∇D)D<sup>−1</sup>.

**Theorem (curvature; Theorem 1.30, Bismut and Freed).** The curvature of L is the 2-form part of 2πi ∫<sub>Z/Y</sub> Â(Ω<sup>Z/Y</sup>) ch(ρ) ch(E), where the Â and Chern character forms are built from the curvatures in the data and the integral runs over the fibres.

**Theorem (holonomy; Theorem 1.31, Witten, Bismut and Freed).** Pull the family back over a loop γ to get an (n+1)-manifold fibred over the circle. Scale the circle metric by 1/ε<sup>2</sup> and let ξ<sub>ε</sub> be the invariant above for its Dirac operator. Then the holonomy of L around γ is the limit of exp(−2πi ξ<sub>ε</sub>) as ε → 0.

**Theorem (holomorphic families; Theorem 2.1, Bismut, Gillet and Soulé).** Let π : Z → Y be a holomorphic fibration with smooth fibres. Suppose Z carries a closed (1,1)-form that restricts to a Kähler form on each fibre, and E is holomorphic Hermitian. Then L for the relative ∂̄ complex has a holomorphic structure, the canonical connection is the Hermitian connection of the Quillen metric, and the section det ∂̄<sub>E</sub> is holomorphic.

## Note, then ignore

- Hilbert bundles are only continuous. The L<sup>2</sup> spaces do not form smooth bundles, so the paper differentiates only smooth sections and finite-rank pieces. Safe to skip on a first reading.
- The 1-form γ in (1.4). It corrects the vertical connection for the change of fibre volume, so that the induced connections are unitary. It vanishes in the Kähler case. Safe to skip.
- Spin structure on the circle. Theorem 1.31 uses the bounding spin structure. The original paper used the other one and got the opposite sign. Safe to skip.
- Index not zero. On such components det D is set to zero by decree. Safe to skip.
- Square roots. Section 3 builds a square root of L and a Pfaffian section when the fibre has dimension 8k + 2 and the data are real (Theorem 3.1). Safe to skip at first.

## One next step

Open the PDF at the foot of page 5 and read only the definition of L<sub>y</sub> and, at the top of page 6, the statement of Theorem 1.12.
