source: https://arxiv.org/pdf/1509.01734
slogan: Stable holomorphic bundles on a curve are the connections of constant central curvature, so an algebraic moduli space becomes a symplectic quotient.
basis: the introduction and the main theorem statements

## Before you start

At 46 pages with exercises, these notes are friendly, yet they sit under the shadow of Atiyah and Bott's 1983 paper. The feeling to expect is a low dread that this is only the foothill of something far larger. That dread is welcome to come along. If you want to see curvature act as a momentum map, these notes get you there in two sections. Take the parts you enjoy. Whether you reach Donaldson's theorem matters less.

## The story

People want to classify holomorphic vector bundles on a compact Riemann surface. Rank and degree fix the smooth bundle E, so the question is how many holomorphic structures E carries. Taken all together they form no reasonable space, and Mumford's stability condition picks out the ones that do. The idea of Atiyah and Bott is to stop moving the bundle and move an operator instead. A holomorphic structure is the same as a Dolbeault operator. Once you fix a Hermitian metric, that is the same as a unitary connection. The space of unitary connections is an infinite-dimensional affine space with a symplectic form, the gauge group acts on it, and the momentum map is the curvature. Donaldson's theorem then says that stable bundles are exactly the orbits that meet a fixed level set of the curvature.

## Main definitions

**Dolbeault operator (Definition 1.14).** A ℂ-linear map from smooth sections of E to (0,1)-forms with values in E that satisfies the Leibniz rule with respect to the Cauchy–Riemann operator on functions. On a Riemann surface every Dolbeault operator comes from a unique holomorphic structure, whose holomorphic sections are its local solutions (Theorem 1.16).

**Unitary connection and the Atiyah–Bott form.** For a Hermitian bundle (E, h), a unitary connection is a linear connection that preserves h. The space A(E, h) of these is affine over the 1-forms with values in skew-Hermitian endomorphisms.
- Dictionary (Corollary 2.6): sending a connection to its (0,1)-part identifies A(E, h) with the space of Dolbeault operators.
- Symplectic form (Proposition 2.7): ω(a, b) is the integral over the surface of κ(a ∧ b), for an invariant pairing κ.

**Slope and stability (Definitions 3.4 and 3.5).** The slope is μ(E) = deg(E)/rk(E). A holomorphic bundle E is stable if μ(F) &lt; μ(E) for every non-trivial holomorphic sub-bundle F, and semi-stable if μ(F) ≤ μ(E).
- Line bundles are stable.
- If rank and degree are coprime, semi-stable implies stable.

**Poly-stable bundle and S-equivalence.** A poly-stable bundle is a direct sum of stable bundles of the same slope. Two semi-stable bundles are S-equivalent if the graded bundles of their Jordan–Hölder filtrations are isomorphic.

## Main results

**Theorem (curvature is a momentum map; Atiyah–Bott; Theorem 2.13).** The map F that sends a unitary connection A on (E, h) to its curvature F<sub>A</sub>, a 2-form with values in skew-Hermitian endomorphisms, is an equivariant momentum map for the action of the unitary gauge group on A(E, h).
- Step 1: F<sub>A+b</sub> equals F<sub>A</sub> plus d<sub>A</sub>b plus a term quadratic in b, so the derivative of F at A is d<sub>A</sub>.
- Step 2: integrate by parts on the closed surface (Stokes) to match this with the vector field of an infinitesimal gauge transformation.

**Theorem (Harder–Narasimhan filtration; Theorem 3.20).** Every holomorphic vector bundle on a compact connected Riemann surface has a unique filtration by holomorphic sub-bundles whose successive quotients are semi-stable with strictly decreasing slopes.

**Theorem (moduli varieties; Mumford and Seshadri; Theorem 3.19).** Let g ≥ 2, r ≥ 1 and d ∈ ℤ. The set of isomorphism classes of stable bundles of rank r and degree d is a smooth complex quasi-projective variety of dimension r<sup>2</sup>(g − 1) + 1. The set M(r, d) of S-equivalence classes of semi-stable bundles is a complex projective variety of the same dimension and contains the first as an open dense subset. The notes quote this without proof.

**Theorem (Donaldson; Theorem 4.5).** Fix a smooth Hermitian bundle (E, h) of rank r and degree d. A holomorphic bundle of that type is stable if and only if its orbit of unitary connections, under the complex gauge group, contains a connection A whose stabiliser in the complex gauge group is ℂ<sup>∗</sup> and whose curvature is F<sub>A</sub> = ∗ i 2π (d/r) Id<sub>E</sub>. Such an A is unique up to the unitary gauge group. The notes state this and do not prove it.
- Consequence (Narasimhan–Seshadri; Corollary 4.6): M(r, d) is in bijection with the level set F<sup>−1</sup>(∗ i 2π (d/r) Id<sub>E</sub>) modulo the unitary gauge group.

## Note, then ignore

- Infinite dimensions. A(E, h) and the gauge group are infinite-dimensional, so a rigorous treatment needs Sobolev completions. The notes say so and then work informally. This is safe to skip on a first reading.
- The constant in the curvature. The value 2π d/r is tied to the slope of E. The sign and the factor of i depend on conventions. Skip them.
- Why S-equivalence. Isomorphism classes of semi-stable bundles do not form a variety in general, so non-isomorphic bundles with the same graded object are identified. Note it and move on.
- Kähler reduction. Theorem 4.2 is proved in finite dimensions, for a compact group acting freely on a level set. The gauge-theory case is used as an analogy. Skip the proof.
- Genus at least 2. Theorem 3.19 assumes g ≥ 2. Low genus behaves differently and is not needed for the story.

## One next step

Open the PDF at page 21 and read only Theorem 2.13 and Lemma 2.14 just below it.
