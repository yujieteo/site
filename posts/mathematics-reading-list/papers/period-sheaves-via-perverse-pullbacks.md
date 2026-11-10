source: https://www.preschema.com/papers/pervpull2.pdf
slogan: A perverse pullback along a shifted symplectic map builds the period sheaf of any Hamiltonian space, so the sheaf depends only on the symplectic data.
basis: the abstract and introduction

## Before you start

This paper stands on three large bodies of work at once: shifted symplectic geometry, cohomological Donaldson–Thomas theory and geometric Langlands. Few readers know all three, and the gap can feel like a verdict on you. It is not one. Let the feeling be there. If you want to see how a symplectic structure can fix a failing pullback of sheaves, the first three pages show it. Read those for interest. The other 46 pages can wait.

## The story

In the relative Langlands programme of Ben-Zvi, Sakellaridis and Venkatesh, a space X with an action of a group G gives a "period sheaf" on the stack Bun<sub>G</sub> of G-bundles on a curve. They conjectured that this sheaf depends only on the Hamiltonian space M = T<sup>\*</sup>X, and that it should exist for Hamiltonian spaces M that are not cotangent bundles. The obstacle is that the natural construction pulls sheaves back along a map that is not smooth, and ordinary pullbacks then spoil perversity. The authors had earlier built a "perverse pullback" for maps that carry a relative (−1)-shifted symplectic structure. Here they apply it to the stack of twisted maps from the curve to M/G. They prove that the result agrees with the known sheaves in the cotangent case and the Whittaker case.

## Main definitions

**Relative exact (−1)-shifted symplectic structure.** For a map π: X → B of derived Artin stacks, locally of finite presentation, an exact 2-form of degree −1 that identifies the relative tangent complex T<sub>X/B</sub> with L<sub>X/B</sub>[−1]. Locally such an X is a derived critical locus of a function on a smooth scheme over B.
- Orientation: a choice of square root of the line bundle K<sub>X/B</sub> = det L<sub>X/B</sub>.
- Moment map: the structure is the same data as an exact Lagrangian structure on a map μ: X → T<sup>\*</sup>B.

**Perverse pullback.** For π with such a structure and an orientation, the earlier paper defines a functor π<sup>φ</sup> from constructible complexes on B to those on X, exact for the perverse t-structure.
- Case X = B: vanishing cycles.
- Case B a point: π<sup>φ</sup> of the constant sheaf is the Donaldson–Thomas sheaf φ<sub>X</sub>.

**Induction functor and period sheaf.** For a Hamiltonian G-space M, let Bun<sub>G</sub><sup>M</sup>(Σ) be the stack of twisted maps from the curve Σ to M/G. The functor ind<sub>M</sub> is the perverse pullback along Bun<sub>G</sub><sup>M</sup>(Σ) → Bun<sub>G</sub>(Σ), followed by pushforward with compact supports to a point. Self-duality of the sheaf category turns this functor into the period sheaf.

## Main results

**Theorem (support estimate; Theorem A, Proposition 2.3).** Let π: X → B be locally of finite presentation with an oriented exact relative (−1)-shifted symplectic structure and moment map μ: X → T<sup>\*</sup>B. If a complex F on B has microsupport in Λ ⊂ T<sup>\*</sup>B, then π<sup>φ</sup>(F) is supported on μ<sup>−1</sup>(Λ).

**Theorem (dimensional reduction; Theorem B, Theorem 4.1).** Let g: Y → B be a map of derived Artin stacks, locally of finite presentation. Let π: T<sup>\*</sup>[−1](Y/B) → B and let τ: T<sup>\*</sup>[−1](Y/B) → Y be the projection. Then τ<sub>!</sub> π<sup>φ</sup> ≅ g<sup>\*</sup>[dim(Y/B)] and τ<sub>\*</sub> π<sup>φ</sup> ≅ g<sup>!</sup>[−dim(Y/B)].
- Step 1: deformation to the normal cone reduces to the linear case.
- Step 2: in the linear case g is the zero section of a perfect complex, and one computes there.

**Theorem (period sheaves exist; Theorem C, combining Theorem 5.9 and Definition 5.12).** Let G = G<sub>1</sub> × G<sub>2</sub> be connected reductive over ℂ. Let M be a quasi-separated smooth complex symplectic scheme with an action of G × 𝔾<sub>m</sub>, where G preserves the form and 𝔾<sub>m</sub> scales it with weight 2. Let Σ be a connected smooth projective curve with a chosen square root of K<sub>Σ</sub>. Choose an anomaly trivialisation. Then there is an induction functor from sheaves on Bun<sub>G<sub>1</sub></sub>(Σ) to sheaves on Bun<sub>G<sub>2</sub></sub>(Σ), both with microsupport in the global nilpotent cone.
- Case M = T<sup>\*</sup>X: by Theorem B it recovers the normalised period sheaf of Ben-Zvi, Sakellaridis and Venkatesh (Proposition 5.17).
- Case M = G × S with S the Kostant slice: by Theorem A it recovers the Whittaker functional and Whittaker sheaf (Theorem 5.21).

## Note, then ignore

- Exactness of the form. "Exact" means the 2-form comes with a primitive, here a function of degree n with a nullhomotopy of its differential. The perverse pullback is defined for exact structures. Safe to skip on a first reading.
- Spin structure and anomaly. Theorem C asks for a square root of K<sub>Σ</sub> and an anomaly trivialisation, for example a trivialisation of an étale second Chern class. These are extra choices in the input, and I did not read how Section 5 uses them. Safe to skip.
- Higher Artin stacks. Theorem B holds beyond quasi-smooth maps and 1-Artin stacks, which matters for moduli of perfect complexes. Safe to skip.
- Coefficients. Everything is over ℂ, with sheaf coefficients in a fixed field R. Safe to skip.
- Coulomb branches. The authors say their theory does not yet cover that case, because the relevant stack is not locally of finite presentation. Safe to skip.

## One next step

Open the paper at page 2 and read Theorem B and the paragraph after it. It says in two formulas that the new pullback contains both old ones.
