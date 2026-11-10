source: https://people.maths.ox.ac.uk/beem/papers/jones_polynomial_witten.pdf
slogan: The Jones polynomial is the expectation value of a Wilson loop in Chern–Simons gauge theory, so it needs no planar picture of the knot.
basis: the introduction and the main theorem statements

## Before you start

This paper has a reputation, and it argues with a path integral that has no rigorous definition. Reading alone, you may feel unsure what counts as proved, and a little like a trespasser in physics. That unease is fine to carry along. If you ever wanted to see why a knot polynomial belongs to three dimensions, the argument for the skein relation fits on a few pages. Read for the pictures in Section 4. Completeness is a lower priority.

## The story

The Jones polynomial is an invariant of knots in three-space. Yet every early definition used a flat picture: draw a projection, compute, then prove the answer did not depend on the drawing. Atiyah asked for a definition that lives in three dimensions. Witten gives one. Take a gauge field on a 3-manifold with the Chern–Simons action, which uses no metric. The observables are Wilson loops: traces of the holonomy round a knot. Their expectation values use no metric, so they are topological invariants. To compute them, cut the manifold along a surface. The path integral on each piece gives a vector in a finite-dimensional space of conformal blocks. Near a crossing that space has dimension 2, so three vectors in it satisfy a linear relation. That relation is the skein relation.

## Main definitions

**Chern–Simons action.** For a connection A on a G-bundle over an oriented 3-manifold M, with G compact and simple, the action is (k/4π) ∫<sub>M</sub> Tr(A ∧ dA + (2/3) A ∧ A ∧ A). No metric appears.
- The level k must be an integer, since the action shifts by a multiple of 2π under large gauge transformations and only exp(i × action) must be single-valued.

**Wilson line.** For an oriented closed curve C in M and an irreducible representation R of G, W<sub>R</sub>(C) is the trace in R of the holonomy of A round C.

**Partition function.** Z(M; L) is the path integral of exp(i × action) times the product of the W<sub>R<sub>i</sub></sub>(C<sub>i</sub>) over the components of a link L, taken over all connections modulo gauge transformations. The normalised expectation value of a link in S<sup>3</sup> is ⟨L⟩ = Z(S<sup>3</sup>; L)/Z(S<sup>3</sup>).

**Framing.** A framing of a knot is a normal vector field along it, up to homotopy. A framing of M is a trivialisation of its tangent bundle, up to homotopy. Z depends on both, by an explicit phase.

## Main results

All of these are physics arguments, not proofs. Witten assumes that the path integral exists and obeys the usual cutting and gluing rules.

**Claim (physics argument; skein relation, equation 4.22).** Let G = SU(N), with every component of the link in the defining N-dimensional representation, and put q = exp(2πi/(N + k)). Then for links in S<sup>3</sup> with standard framing, −q<sup>N/2</sup> L<sub>+</sub> + (q<sup>1/2</sup> − q<sup>−1/2</sup>) L<sub>0</sub> + q<sup>−N/2</sup> L<sub>−</sub> = 0, where L<sub>+</sub>, L<sub>0</sub>, L<sub>−</sub> differ at one crossing. The unknot has ⟨C⟩ = (q<sup>N/2</sup> − q<sup>−N/2</sup>)/(q<sup>1/2</sup> − q<sup>−1/2</sup>) (equation 4.23).
- Step 1: cut out a ball round the crossing. Its boundary is a sphere with four marked points, and the physical Hilbert space there has dimension 2.
- Step 2: the three ways to fill the ball differ by a half-twist B of the boundary. B satisfies its characteristic equation, and its eigenvalues come from conformal field theory.

**Claim (physics argument; connected sums, equation 4.1).** If M is the connected sum of M<sub>1</sub> and M<sub>2</sub>, then Z(M) Z(S<sup>3</sup>) = Z(M<sub>1</sub>) Z(M<sub>2</sub>). The reason is that the Hilbert space of a sphere with no marked points has dimension 1.

**Claim (physics argument; surgery formula, equation 4.27).** If M′ comes from M by surgery on a circle C with gluing map K, then Z(M′) = Σ<sub>j</sub> K<sub>0</sub><sup>j</sup> Z(M; R<sub>j</sub>). The sum runs over the integrable representations of the loop group at level k, and Z(M; R<sub>j</sub>) has an extra Wilson line on C in R<sub>j</sub>. The matrix K is the action of the gluing map on the characters of those representations. Since every closed oriented 3-manifold comes from S<sup>3</sup> by surgery, Z is computable.
- Example: Z(S<sup>2</sup> × S<sup>1</sup>) = 1 and Z(S<sup>3</sup>) = S<sub>00</sub>, an entry of the modular S-matrix.

**Claim (physics argument; Section 3).** Canonical quantisation on Σ × ℝ gives a finite-dimensional Hilbert space. It is the space of conformal blocks of the current algebra of G at level k on the surface Σ, with one marked point for each Wilson line that crosses Σ.

## Note, then ignore

- Framing of knots. The self-linking of a Wilson line needs a regulator, and the framing supplies it. A twist by one unit multiplies Z by a known phase. For knots in S<sup>3</sup> there is a standard framing. Safe to skip on a first reading.
- Framing of M. The phase of Z shifts by a multiple of 2πc/24 when the framing changes, with c the central charge. Safe to skip.
- Section 2. The large k expansion, with Ray–Singer torsion and the eta invariant, checks that the theory makes sense. Witten says its technicalities are not essential at first. Safe to skip.
- The shift k → k + N. The variable q uses N + k and not k. This comes out of the conformal field theory input. Safe to skip.
- Two variables. N and k, continued to complex values, give the two-variable generalisation of the Jones polynomial. Safe to skip.

## One next step

Open Section 4.1, "Knots in S<sup>3</sup>", and look only at the figure where a ball is cut out round one crossing, with the paragraph beside it.
