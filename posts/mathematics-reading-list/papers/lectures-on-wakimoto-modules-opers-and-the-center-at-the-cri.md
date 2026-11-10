source: https://arxiv.org/pdf/math/0210029
slogan: At the critical level an affine Kac–Moody algebra gains a large centre, and that centre is the functions on opers for the Langlands dual group.
basis: the introduction and the main theorem statements

## Before you start

These are 85 pages of vertex algebras, normal ordering and Lie algebra cohomology, and they lean on Frenkel and Ben-Zvi's book for background. The likely feeling is shame at meeting a formula whose every symbol needs a definition from elsewhere. That is a fair thing to feel. The reward is concrete: if you want to see a Langlands dual group appear from pure algebra, the centre at the critical level is where it happens. Read Section 1, the finite-dimensional warm-up, for pleasure. Whether you reach Section 12 is a separate matter.

## The story

A simple Lie algebra 𝔤 acts on its flag manifold, so it acts by vector fields on the big cell, an affine space. That gives formulas for 𝔤 in coordinates and derivatives. Feigin and Frenkel wanted the same for the affine algebra ĝ, using loops into the big cell. The naive formulas need normal ordering, which produces an anomaly: a 2-cocycle. It turns out to be the Kac–Moody cocycle at one special level, the critical level κ<sub>c</sub>. So free-field formulas exist, with the level shifted by κ<sub>c</sub>. The resulting modules are the Wakimoto modules. At κ<sub>c</sub> itself the vertex algebra of ĝ has a large centre. The Wakimoto formulas embed that centre in a polynomial algebra, and the image is the algebra of functions on a space of differential operators called opers.

## Main definitions

**Critical level.** A level is an invariant inner product κ on 𝔤. It defines the central extension ĝ<sub>κ</sub> of 𝔤((t)) and the vacuum vertex algebra V<sub>κ</sub>(𝔤). The critical level is κ<sub>c</sub> = −½ κ<sub>K</sub>, where κ<sub>K</sub> is the Killing form.

**Centre.** The centre 𝔷(ĝ) of V<sub>κ<sub>c</sub></sub>(𝔤) is the space of vectors invariant under 𝔤[[t]]. It is a commutative vertex algebra. For κ ≠ κ<sub>c</sub> the centre of V<sub>κ</sub>(𝔤) is spanned by the vacuum vector alone.

**Wakimoto module.** M<sub>𝔤</sub> is the vertex algebra of the Weyl algebra on loops into the big cell, with fields a<sub>α</sub>(z) and a<sup>\*</sup><sub>α</sub>(z) for each positive root α. π<sub>0</sub><sup>κ−κ<sub>c</sub></sup> is the Heisenberg vertex algebra of the Cartan subalgebra at the shifted level. A Wakimoto module is M<sub>𝔤</sub> ⊗ N, with N a module over the Heisenberg algebra, and ĝ acts through the homomorphism of Theorem 5.1.
- At the critical level the Heisenberg algebra is commutative, and N can be a one-dimensional module given by a character χ(t) ∈ 𝔥<sup>\*</sup>((t)).

**Oper.** Let G be a simple group of adjoint type with Borel subgroup B and unipotent radical N. A G-oper on the disc D = Spec ℂ[[t]] is an operator ∂<sub>t</sub> + Σ f<sub>i</sub> + v(t) with v(t) ∈ 𝔟[[t]], taken up to gauge transformations by N[[t]]. Here the f<sub>i</sub> are the negative simple root generators.
- For 𝔰𝔩<sub>2</sub> an oper is an operator ∂<sub>t</sub><sup>2</sup> − v(t), a projective connection.
- A Miura oper is an oper with a second reduction to B that the connection preserves. For 𝔰𝔩<sub>2</sub> the Miura map is u ↦ v = ¼u<sup>2</sup> + ½∂<sub>t</sub>u.

## Main results

**Theorem (Wakimoto realisation; Theorems 4.7 and 5.1, Proposition 5.2).** For every level κ there is a homomorphism of vertex algebras w<sub>κ</sub> : V<sub>κ</sub>(𝔤) → M<sub>𝔤</sub> ⊗ π<sub>0</sub><sup>κ−κ<sub>c</sub></sup>, given on the generators e<sub>i</sub>(z), h<sub>i</sub>(z), f<sub>i</sub>(z) by explicit formulas. It is injective.
- Step 1: the loop algebra acts on loops into the big cell by vector fields. Lifting to differential operators meets a 2-cocycle.
- Step 2: in a small local complex that cocycle equals the Kac–Moody cocycle of level κ<sub>c</sub> (Theorem 3.7).

**Theorem (Kac–Kazhdan conjecture; Theorem 4.8).** For a generic weight λ of critical level, the character of the irreducible ĝ-module L<sub>λ</sub> is e<sup>λ</sup> Π (1 − e<sup>−α</sup>)<sup>−1</sup>, the product taken over the positive real roots α of ĝ.
- Step: the Wakimoto module for a generic character χ(t) is irreducible and has this character.

**Theorem (centre and opers on the disc; Theorems 9.6, 9.8 and 11.3).** The centre 𝔷(ĝ) is isomorphic to the classical W-algebra of the Langlands dual Lie algebra <sup>L</sup>𝔤, and so to the algebra of functions on <sup>L</sup>G-opers on D. The isomorphism preserves the vertex Poisson structures and the action of changes of coordinate.
- Step 1: w<sub>κ<sub>c</sub></sub> sends 𝔷(ĝ) into π<sub>0</sub>, and the image is the joint kernel of screening operators, one for each simple root.
- Step 2: under π<sub>0</sub> ≅ functions on Miura opers, the embedding is the Miura map (Theorem 11.3).

**Theorem (centre of the completed enveloping algebra; Theorem 12.4).** The centre Z(ĝ) of the completed universal enveloping algebra of ĝ at the critical level is isomorphic, as a Poisson algebra, to the functions on <sup>L</sup>G-opers on the punctured disc. Drinfeld conjectured this.

## Note, then ignore

- Coordinate independence. Much of Sections 5 and 10 tracks the action of Aut O, so that everything makes sense on a curve with no chosen coordinate. Safe to skip on a first reading.
- Two kinds of screening operators. Frenkel uses the second kind because its limit as κ → κ<sub>c</sub> is easier. Safe to skip.
- The levels κ<sub>0</sub> and κ<sub>0</sub><sup>∨</sup>. They label which Poisson structure is used on each side, and the two must be matched. Safe to skip.
- Parabolic induction. Section 6 repeats the construction for any parabolic subalgebra. The main theorems use it only to reduce to 𝔰𝔩<sub>2</sub>. Safe to skip.
- Different proof. The route to the centre here differs from the original Feigin–Frenkel proof. The statement is the same. Safe to skip.

## One next step

Open Section 1.1 and read up to the Lie algebra homomorphism 𝔤 → Vect N<sub>+</sub>. For 𝔰𝔩<sub>2</sub> you can write the three vector fields on a line yourself.
