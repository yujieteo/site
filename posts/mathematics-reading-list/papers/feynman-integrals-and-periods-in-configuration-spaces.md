source: https://www.its.caltech.edu/~matilde/FeynmanConfigMZV.pdf
slogan: Feynman integrals in position space live on blown-up configuration spaces whose motives are mixed Tate, so their regularised values are periods of such motives.
basis: the introduction and the main theorem statements

## Before you start

This paper runs to 54 pages and uses several toolkits at once: Gegenbauer polynomials, wonderful compactifications, residue currents, deformation to the normal cone. That mix can bring a sense of being scattered, of not knowing which thread matters. The feeling is fair, since the paper offers several routes to one goal. If you want to see why zeta values turn up in physics, any one route will show you. Pick the one you enjoy and leave the rest.

## The story

Physicists compute Feynman integrals and keep finding multiple zeta values. Number theorists want a reason: the integrals should be periods of mixed Tate motives. In momentum space the integrand is algebraic, but it is singular along graph hypersurfaces whose motives are hard to control. The authors work in position space instead, on the product of one copy of spacetime per vertex of the graph. They choose a propagator that is singular only where two vertices collide, along diagonals. The price is that the form is smooth but not algebraic. The gain is that the geometry is simple. Blow up the diagonals in the right order and you get a compactification whose motive is mixed Tate whenever the motive of spacetime is. The paper then shows three ways to regularise the integral and land on periods.

## Main definitions

**Feynman amplitude in configuration space (Definition 2.1).** Let X be a smooth projective variety of even dimension D = 2λ + 2 that contains a dense affine space, for example projective space. For a graph Γ with no looping edges, the amplitude ω<sub>Γ</sub> is the form on X<sup>V<sub>Γ</sub></sup> given by the product over edges e of 1/‖x<sub>s(e)</sub> − x<sub>t(e)</sub>‖<sup>2λ</sup>, times the volume form in all vertex variables.
- Chain of integration: the real points X(ℝ)<sup>V<sub>Γ</sub></sup>.
- Singular locus: the diagonals Δ<sub>e</sub> where the two ends of an edge coincide.

**Complexified amplitude (Definition 2.6).** Replace X by Z = X × X and use the form with 1/‖x<sub>s(e)</sub> − x<sub>t(e)</sub>‖<sup>2D−2</sup> on each edge and dx ∧ dx̄ at each vertex. This form is closed, so cohomological arguments apply.

**Wonderful compactification Z[Γ].** The iterated blow-up of Z<sup>V<sub>Γ</sub></sup> along the diagonals of the biconnected induced subgraphs of Γ, starting with the deepest diagonal. The diagonals become divisors D<sub>γ</sub> that cross transversely.
- Nest: a set of biconnected induced subgraphs whose divisors have non-empty common intersection.

## Main results

**Theorem (x-space expansion; Theorem 4.4 and Proposition 4.6).** In even dimension, the integral of ω<sub>Γ</sub> over the real locus splits into a sum over acyclic orientations of Γ, each an integral of radial variables against angular integrals of Gegenbauer polynomials. For a polygon with k edges in dimension 4, the integrand is the polylogarithm Li<sub>k−2</sub> of a ratio of squared radii.
- Consequence: the paper says that after a cut-off these polygon integrals give zeta values, with coefficients rational combinations of powers of 2πi.

**Proposition (the motive stays mixed Tate; Proposition 5.5 and Corollary 5.6).** For X smooth projective, the Voevodsky motive of Z[Γ] is a direct sum of Tate twists and shifts of motives of products of copies of X. So if the motive of X is mixed Tate, so are the motives of Z[Γ], of the divisors D<sub>γ</sub> and of their intersections.
- Step 1: write Z[Γ] as an iterated blow-up along smooth centres.
- Step 2: apply the blow-up formula for Voevodsky motives at each stage.

**Proposition (ambiguities are residues; Proposition 6.6).** Regularise the pulled-back amplitude on Z[Γ] as a principal value current. Its ambiguities are iterated residue currents supported on the intersections of the divisors D<sub>γ</sub> over the nests of Γ. The introduction states that, paired with algebraic test forms, these take values that are periods of mixed Tate motives.

**Proposition (regularising by deformation; Propositions 7.5, 7.8 and 7.9).** Deform Z[Γ] to the normal cone of the diagonals. If the motive of X is mixed Tate, the motive of the deformation space is too. The proper transform of the chain of integration no longer meets the divergence locus of the form, and the resulting integral converges at infinity when D > 2.

## Note, then ignore

- Norm squared, not algebraic square. The propagator uses ‖x − y‖<sup>2</sup>, which agrees with the usual (x − y)<sup>2</sup> on real points only. This is the choice that keeps the singularities on diagonals. Safe to skip on a first reading.
- Three versions of the amplitude. Forms (2.2), (2.9) and (2.12) serve different sections. Safe to skip, as long as you know which one a section uses.
- Section 3. The link with Green functions and the Bochner–Martinelli kernel can be read alone, and the authors say readers after the period results may skip it.
- Multiple edges. They do not change the diagonals but do change the power of the propagator. Safe to skip.
- From mixed Tate to multiple zeta values. That last step uses a cited result on mixed Tate motives over ℤ, not this paper. Safe to skip.

## One next step

Open the paper at page 5 and read Definition 2.1 and Remark 2.3. Those two items explain the whole change of strategy.
