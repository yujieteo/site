source: https://arxiv.org/pdf/2304.01655
slogan: The number of buckyballs with 2n carbon atoms is given by an exact formula in Eisenstein series, so counting reduces to factoring n.
basis: the introduction and the main theorem statements

## Before you start

You may feel a small suspicion that this is a curiosity: a chemistry count dressed up with modular forms. You may also feel lost at "complex hyperbolic ball quotient". Both reactions are fine. If you like seeing a hands-on object, a football pattern of pentagons and hexagons, answered by number theory, the first five pages are the whole plot. Read those for pleasure. The later pages are bookkeeping, and you can leave them.

## The story

A fullerene is a trivalent graph on the sphere with only pentagonal and hexagonal faces. Chemists wanted to know how many exist with a given number of atoms, and for decades they counted by computer search. Thurston found a way in from geometry. Dualise to a triangulation, make every triangle equilateral, and you get a flat sphere with cone points. He showed these triangulations are the positive-norm vectors of one lattice, up to symmetry. In 2017 Engel and Smillie used this to count triangulations exactly, but with weights. The honest count has no weights and excludes degenerate shapes. The new idea: each stratum, by curvature and by symmetry group, has its own weighted count that is again modular. Inclusion and exclusion then gives the honest count.

## Main definitions

**Convex triangulation and curvature.** A triangulation of S<sup>2</sup> is convex if every vertex has valence at most 6. The curvature of a vertex is 6 minus its valence. Euler's formula forces the curvatures to sum to 12.
- Fullerene case: exactly 12 vertices of curvature 1. The dual graph is a fullerene.

**BB(q).** BB(q) = Σ BB<sub>n</sub> q<sup>n</sup>, where BB<sub>n</sub> is the number of oriented fullerenes with 2n vertices. Mirror images count as different. It begins q<sup>10</sup> + q<sup>12</sup> + q<sup>13</sup> + 3q<sup>14</sup> + ...

**Mass.** The mass of a convex triangulation T is 1/|Aut<sup>+</sup>(T)| times a factor depending on its curvatures. Equivalently it is 1 over the order of the stabiliser of the lattice vector of T.

**Eisenstein lattice.** A free module ℤ[ζ<sub>6</sub>]<sup>k</sup> with a non-degenerate Hermitian form valued in ℤ[ζ<sub>6</sub>]. Its signature is that of the form over ℂ.

## Main results

**Theorem (Thurston; Theorem 1.2).** There is an Eisenstein lattice Λ of signature (1, 9) such that convex triangulations of the sphere, up to oriented isomorphism, correspond bijectively to orbits of positive-norm vectors under Γ = U(Λ). The number of triangles is a fixed multiple of the norm of the vector.
- Consequence: the number of fullerenes with 2n vertices grows like O(n<sup>9</sup>).

**Theorem (weighted count; Theorem 1.4, from the authors' 2017 paper).** The sum of the masses of all convex triangulations with 2n triangles is 809/(2<sup>15</sup> 3<sup>13</sup> 5<sup>2</sup>) · Σ<sub>d | n</sub> d<sup>9</sup>.
- Step 1: integrate a Siegel theta function over the ball quotient and differentiate nine times. The result is a modular form of weight 10 for SL<sub>2</sub>(ℤ).
- Step 2: that space is spanned by E<sub>10</sub>. One small count fixes the constant.

**Theorem (exact count; Theorem 1.6, made explicit in Theorem 3.26).** BB(q) is an explicit linear combination of Eisenstein series of weight at most 10, with levels in {1, 2, 3, 4, 5, 6, 9, 12, 15, 18}.
- Step 1: for each curvature profile and automorphism group, a suitably weighted count is a modular or quasimodular form of lower weight and higher level. Möbius inversion over strata writes BB(q) as a combination of these, inside a space of dimension 152.
- Step 2: the program buckygen supplies 200 coefficients of BB(q). That is more than 152, so a linear solve determines the combination.

## Note, then ignore

- Oriented count only. The formula counts mirror-image fullerenes separately. The authors leave the unoriented count for later work. Safe to skip, but remember it when comparing with chemistry tables.
- Computer input. The coefficients are found by solving a linear system against buckygen data, not derived by hand. The proof that the formula lives in a finite-dimensional space is mathematical. Skip the worry on a first reading.
- Quasimodular terms. Some strata give quasimodular forms, not modular ones. This changes the ambient space, not the idea. Skip it.
- Orbitriangulations. Quotients by symmetry groups are orbifolds, so Section 2 introduces triangulations of orbifolds. It is needed only for the symmetric strata. Skip it.
- Missing icosahedral term. One expected series, for the icosahedral stratum, cancels out of the final formula. The authors say they do not know why. Enjoy it and move on.

## One next step

Read Section 1.3, "Main results", on pages 4 and 5. It is one page and ends with Theorem 1.6.
