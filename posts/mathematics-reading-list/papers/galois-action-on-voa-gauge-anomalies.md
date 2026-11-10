source: https://arxiv.org/pdf/1811.06495
slogan: Galois conjugation acts on a vertex algebra's gauge anomaly by its square, so anomalies of rationally defined symmetries have order dividing 24.
basis: the introduction and the main theorem statements

## Before you start

This is a short paper, about 17 pages, but it assumes vertex operator algebras, modular tensor categories and group cohomology all at once. You may feel shame at holding only one of the three. Let that be so. Section 1 tells the whole story again for matrix algebras and the Brauer group, where you need only linear algebra. If you want to see why the number 24 keeps turning up around the Monster, that is the reward. Read section 1 for pleasure.

## The story

A finite group G acts on a holomorphic vertex operator algebra V. To gauge the action, that is, to build the orbifold, an obstruction must vanish. It is a class α in H<sup>3</sup>(G; ℂ<sup>×</sup>), called the gauge anomaly. For the Monster acting on the moonshine module, people wanted the order of α. Johnson-Freyd asks how α moves when you twist V by a field automorphism γ of ℂ. For matrix algebras the analogous class in H<sup>2</sup> moves to γ(α), with no surprise. For vertex algebras the answer is γ<sup>2</sup>(α). Now use a fact about 24: every unit n satisfies n<sup>2</sup> ≡ 1 modulo 24. So if V and the action are defined over ℚ, then α is fixed by all squares, and 24α = 0.

## Main definitions

**Holomorphic VOA.** A vertex operator algebra V whose category of admissible modules is equivalent to vector spaces. It is the analogue of a central simple (Azumaya) algebra.

**Regularity Assumption.** For V holomorphic and G a finite group of automorphisms, the fixed subalgebra V<sup>G</sup> is regular: C<sub>2</sub>-cofinite, with a semisimple module category that has finitely many simple objects. It is widely believed, and known for solvable G.

**Gauge anomaly.** For each g in G the g-twisted V-modules form a category equivalent to vector spaces. Their direct sum over G is a G-pointed fusion category. Its associator is a class α in H<sup>3</sup>(G; ℂ<sup>×</sup>).
- Coefficients: for finite G, H<sup>3</sup>(G; μ) → H<sup>3</sup>(G; ℂ<sup>×</sup>) is an isomorphism, where μ is the group of roots of unity.
- Gauging: an orbifold of V by G exists once α is trivialised.

**Galois conjugate.** For a field automorphism γ of ℂ, the VOA <sup>γ</sup>V equals V over ℚ, with the ℂ-structure twisted by γ. The automorphism γ acts on μ as multiplication by a unit n of the profinite integers.

## Main results

**Theorem (Main Theorem; section 3).** Let V be a holomorphic VOA over ℂ, G a finite group of automorphisms of V, and γ a field automorphism of ℂ. Assume the Regularity Assumption. If G acts on V with anomaly α, then G acts on <sup>γ</sup>V with anomaly γ<sup>2</sup>(α), that is, n<sup>2</sup>α.
- Step 1: non-anomalous actions stay non-anomalous, and anomalies add under tensor product. So it is enough to check one VOA for each pair (G, α).
- Step 2: check it on the examples of Evans and Gannon, which are orbifolds by an abelian group A. There the twist is explicit: conjugating by γ replaces the gauging datum β by n<sup>2</sup>β.

**Corollary (bound of 24; section 4.1).** Suppose the action of G on V preserves a K-form for a field K ⊂ ℂ. Then α is invariant under the absolute Galois group of K acting on H<sup>3</sup>(G; μ<sup>⊗2</sup>). For K = ℚ this forces 24α = 0.

**Corollary (the Monster; section 4.1).** Assume the Regularity Assumption. The anomaly of the Monster acting on the moonshine VOA has order exactly 24. The upper bound comes from the corollary above and the ℚ-form of Dong and Griess. The lower bound comes from an unpublished computation of Mason.

**Conjecture (vertex Brauer group; section 4).** Each field K has a group of Morita classes of holomorphic VOAs over K, taken modulo tensoring with the E<sub>8</sub> level 1 VOA. In characteristic 0 it is isomorphic to H<sup>3</sup>(Gal(K̄/K); μ<sup>⊗2</sup>). The paper offers this as speculation with an outline, not a proof.

## Note, then ignore

- Conditional results. Everything rests on the Regularity Assumption. Safe to skip on a first reading, as long as you remember it is there.
- Additive notation. The paper writes μ additively as ℚ/ℤ, so γ<sup>2</sup>(α) appears as n<sup>2</sup>α. Safe to skip.
- Line operators. Section 2 defines the anomaly with topological line operators, in physics language. Results of Kirillov make it rigorous under the assumption. Safe to skip.
- Earlier proof. The order 24 for the Monster was first found by the same author with conformal nets, where regularity is known. Safe to skip.
- Standing hypotheses. All VOAs here are simple, self-dual and graded by non-negative integers. Safe to skip.

## One next step

Open the paper at section 1.3 and read the last construction, where the commutant of the fixed subalgebra A<sup>G</sup> turns out to be a twisted group algebra.
