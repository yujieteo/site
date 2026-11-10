source: https://arxiv.org/pdf/math/0405138
slogan: One family of q-polynomials becomes the real Grassmannian theory at q = 1 and the p-adic one at q = 0, so one formula serves all places.
basis: the introduction and the main theorem statements

## Before you start

The paper is only 24 pages, but its middle is a wall of q-shifted factorials, Selberg measures and Macdonald polynomials. That can raise a fear of drowning in indices. The fear is fair, and you may keep it. If you have wondered whether ℝ and ℚ<sub>p</sub> are two faces of one object, here is a place where the answer is a formula you can check. Enjoy the rank one example first. The general case can wait.

## The story

A number field has real and p-adic completions, and they look nothing alike. One is connected, the other totally disconnected. Take the maximal compact subgroup K of GL<sub>n</sub>(F) and let it act on functions on the Grassmannian of m-planes in F<sup>n</sup>. For every F the irreducible pieces carry the same labels: partitions with at most m parts. Onn shows this is no coincidence. The quantum Grassmannian has its own spherical functions, with a parameter q. Let q → 1 and they become the real or complex ones. Substitute powers of p, let q → 0, and they become the p-adic ones. The picture: a discrete set of points q<sup>λ</sup> in a simplex, which fills the simplex as q → 1 and freezes to the points p<sup>−λ</sup> as q → 0.

## Main definitions

**Grassmann representation.** Let F be a local field and X = Gr(m, n, F). Let K be O(n) for F = ℝ, U(n) for F = ℂ, and GL<sub>n</sub>(O) for a non-Archimedean F with ring of integers O. K acts on L<sup>2</sup>(X) by (g·f)(x) = f(g<sup>−1</sup>x).

**Hecke algebra and its triple.** H<sub>m</sub><sup>F</sup> is the convolution algebra of smooth functions on X × X that are invariant under the diagonal action of K. It is commutative. It is described by a triple: the orbit space Ω = X ×<sub>K</sub> X, the measure dh pushed down from Haar measure, and the minimal idempotents e<sub>λ</sub>.
- Over ℝ or ℂ: Ω is the set of m critical angles between two planes, in coordinates u<sub>i</sub> = sin<sup>2</sup>θ<sub>i</sub>, and dh is a Selberg measure.
- Over a p-adic field: Ω is the set of points p<sup>−λ</sup>, where λ records the type of the intersection of two submodules.

**Quantum triple.** The space is the set of points q<sup>λ</sup>t<sup>ρ</sup> with λ a partition and ρ = (m−1, …, 0). The measure is the q-Selberg measure with parameters a, b, t. The functions are the multivariable little q-Jacobi polynomials E<sub>λ</sub><sup>q</sup> of Stokman, which are orthogonal for that measure. They are the zonal spherical functions of the quantum Grassmannian.

**The two limits.** Both remove q and replace (a, b, t) by exponents (α, β, γ).
- Archimedean: put (a, b, t) = (q<sup>α/2</sup>, q<sup>β/2</sup>, q<sup>γ/2</sup>) and let q → 1.
- Non-Archimedean: put (a, b, t) = (p<sup>−α</sup>, p<sup>−β</sup>, p<sup>−γ</sup>), evaluate at q<sup>λ</sup>p<sup>−γρ</sup>, and let q → 0.

## Main results

**Theorem (same labels at every place; Theorem 1, due to James–Constantine and Hill).** For any local field F and m ≤ [n/2], the Grassmann representation is a multiplicity-free direct sum of irreducible representations of K. They are indexed by the partitions with at most m parts.
- Step 1: the Hecke algebra is commutative, which gives multiplicity one.
- Step 2: its minimal idempotents were computed in both settings, and both lists are indexed by the same partitions.

**Theorem (limit of the measure; Theorem 8).** For any local field F, the measure dh on X ×<sub>K</sub> X is a limit of the q-Selberg measure. The parameters are (α, β, γ) = r(n − 2m + 1, 1, 1), with r = 1 for ℝ, r = 2 for ℂ, and r the degree of the residue field over 𝔽<sub>p</sub> in the p-adic case.
- Archimedean case: the atomic q-measure converges weakly to the Selberg measure. Onn quotes this from Stokman.
- Non-Archimedean case: Onn substitutes and sets q = 0. The result matches his explicit formula for dh (Proposition 3).

**Theorem (limit of the idempotents; Theorem 10).** For any local field F, the idempotents e<sub>λ</sub> of the Hecke algebra are limits of the polynomials E<sub>λ</sub><sup>q</sup>.
- Step 1: both sides come from Gram–Schmidt on one flag of polynomials, and the inner product converges by Theorem 8.
- Step 2: in the p-adic case a second basis C<sub>λ</sub><sup>q</sup>, built from shifted Macdonald polynomials, spans the same flag and converges to the known cellular basis (Proposition 9).

## Note, then ignore

- sin<sup>2</sup> and not cos<sup>2</sup>. Onn picks u<sub>i</sub> = sin<sup>2</sup>θ<sub>i</sub> so that the origin is the trivial relative position for every field. Safe to skip on a first reading.
- Normalisation of the Jacobi polynomials. It differs from the older literature, so that the polynomials are idempotents on the nose. Safe to skip.
- Infinite parts. The p-adic orbit space allows partitions with parts equal to ∞, but the measure vanishes there. Safe to skip.
- Two partial orders. The proofs use both inclusion of Young diagrams and dominance order, and refine them to one total order. Safe to skip.
- The bound m ≤ [n/2]. Theorem 1 assumes it, and the whole paper works under it. Safe to skip.

## One next step

Open the paper at Section 4, the one-dimensional case, and read only the three triples for m = 1: Archimedean, non-Archimedean and quantum.
