source: https://publications.mfo.de/bitstream/handle/mfo/4331/OWR_2025_18.pdf?sequence=1&isAllowed=y
slogan: Periods and L-functions are two boundary conditions matched by one duality, so a period formula becomes a prediction you can read off a dual space.
basis: the introduction and the main theorem statements

## Before you start

This report is 72 pages of talk abstracts by nearly twenty speakers, each with its own notation. The likely feeling is disorientation: no single voice, and a new language every four pages. That reaction fits the material, and you can let it be. If you want to know why integrals of automorphic forms keep producing L-values, this is a short map. Read the talks that please you. Nobody reads a workshop report in order.

## The story

Number theorists have long known that a period, an integral of an automorphic form, often equals a special value of an L-function. Each case had its own proof, and no rule said which period goes with which L-function. The workshop studies the proposal of Ben-Zvi, Sakellaridis and Venkatesh. A period comes from a Hamiltonian space M with an action of a group G. An L-function comes from a Hamiltonian space M̌ with an action of the dual group Ǧ. The two spaces are dual to each other. The organising picture is a four-dimensional topological field theory: the Langlands correspondence is an equivalence of two such theories, and M and M̌ give matching boundary theories. Tate's thesis is the first example: G = 𝔾<sub>m</sub> acting on the line gives the zeta function.

## Main definitions

**Boundary theory.** A topological field theory Z assigns numbers, vector spaces and categories to manifolds of decreasing dimension. A boundary theory for Z assigns to each manifold M a distinguished object or vector inside Z(M), compatibly with gluing.
- Toy case: for a finite group G, a G-set X gives a boundary theory of two-dimensional G-gauge theory, with value ℂ[X] on a point.
- Arithmetic case: a curve over 𝔽<sub>q</sub> plays the part of a 3-manifold, and a G-variety X gives a vector in the space of automorphic functions.

**Theta series and period.** Let Σ be a smooth projective curve over 𝔽<sub>q</sub> and X a G-variety. The theta series Θ<sub>X</sub> is the function on Bun<sub>G</sub>(𝔽<sub>q</sub>) that counts the sections of the X-bundle attached to a G-bundle. The X-period of an automorphic function φ is the pairing ⟨Θ<sub>X</sub>, φ⟩.
- Homogeneous case: for X = H\G and φ unramified, the pairing is the integral of φ over H(F)\H(𝔸).

**Hyperspherical variety.** Work over an algebraically closed field of characteristic 0. A hyperspherical G-variety is a smooth, irreducible, affine, graded Hamiltonian G-space M such that the G-invariant rational functions Poisson-commute, the image of the moment map meets the nilpotent cone, generic stabilisers are connected, and the grading is "neutral".
- Main example: the cotangent bundle of a suitable spherical variety.

**L-function of a local system.** For a local system L on Σ, L(s, L) is the graded determinant of 1 − q<sup>−s</sup>Frob on the cohomology of Σ over the algebraic closure, inverted. A Ǧ-local system needs a representation of Ǧ before it has an L-function.

## Main results

**Claim (Tate's thesis as a period; talks of Kaletha and Lai).** Take G = 𝔾<sub>m</sub> acting on X = 𝔸<sup>1</sup> over a function field. Then Θ<sub>X</sub> at a line bundle is its number of global sections, and after regularising a divergent term, ⟨Θ<sub>X</sub>, q<sup>−s·deg</sup>⟩ = L(s, 1), the zeta function of the curve.
- Step 1: non-zero sections up to scalars are effective divisors, so the pairing becomes a sum over effective divisors.
- Step 2: that sum factors as an Euler product over closed points.

**Theorem (structure of hyperspherical varieties; Theorem 3.2 in Kubrak's talk, quoting the BZSV paper).** Every hyperspherical G-variety M is isomorphic, uniquely once a base point is fixed, to the Whittaker induction of a symplectic representation S of a subgroup H along a homomorphism H × SL<sub>2</sub> → G.
- Step 1: M has a unique closed orbit for G times the grading group. H is the stabiliser of a point x on it.
- Step 2: the moment map sends x to a nilpotent element, which gives the SL<sub>2</sub>. S is the symplectic normal space to the orbit at x.

**Conjecture (local geometric duality; Gannon's talk).** For M = T<sup>∗</sup>X with dual M̌, the category of sheaves on the loop space of X, equivariant for the arc group of G, is equivalent to a sheared category of Ǧ-equivariant quasi-coherent sheaves on M̌. The equivalence respects the action of the spherical Hecke category through derived Satake.
- Known case: X a point, where M̌ is the Whittaker cotangent bundle T<sup>∗</sup>(Ǧ/(Ň, ψ)).

**Conjecture (global numerical duality; Lin's talk).** For an everywhere unramified, tempered, cuspidal form f with parameter φ, suppose the fixed points of φ on X̌ form a finite reduced set. Then the normalised X-period of f equals an explicit constant times the sum, over those fixed points x, of L-values of φ on the tangent space T<sub>x</sub>X̌. I did not check the normalising constants.

## Note, then ignore

- Metaphor, not theorem. The field theory language organises the statements, and nobody has constructed the arithmetic theory. Safe to skip on a first reading.
- Shearing. The spectral side mixes cohomological degree with a grading, written with a slanted arrow. It makes degrees match. Safe to skip.
- Sheaf theory on loop spaces. Gannon's talk says the foundations for sheaves on X(D°) are not settled. Safe to skip.
- The "norm" decorations. Periods and L-functions carry twists by square roots of the canonical bundle and of q. The report itself says to drop them at first. Safe to skip.
- Function fields only. The global statements are for curves over finite fields and unramified forms. Safe to skip.

## One next step

Open the report and read the organisers' introduction on pages 811 and 812, stopping after the paragraph on boundary theories.
