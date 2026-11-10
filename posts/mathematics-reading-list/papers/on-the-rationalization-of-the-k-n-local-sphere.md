source: https://arxiv.org/pdf/2402.00960
slogan: Tensored with ℚ, the K(n)-local sphere has an exterior algebra on n classes as homotopy, proved by trading Lubin–Tate space for Drinfeld's half-space.
basis: the introduction and the main theorem statements

## Before you start

This paper needs chromatic homotopy theory and p-adic Hodge theory at once, over 68 pages. Almost nobody arrives knowing both, and the natural feeling is shame at the half you lack. The authors expect this. They wrote background sections for each audience. So the feeling is allowed, and it is shared by most readers. If you want to see number theory settle a fifty-year-old question about spheres, the first three pages give the whole plot. Read them for enjoyment. The rest is optional.

## The story

The stable homotopy groups of spheres split, one prime at a time, into layers called K(n)-local spheres. Computing a layer in full is out of reach beyond n = 2. A softer question dates from Morava's work in the 1970s: what is left after tensoring with ℚ? A spectral sequence reduces this to the continuous cohomology of the Morava stabiliser group G<sub>n</sub> acting on the Lubin–Tate ring A. That action is hard to write down. The new idea comes from arithmetic geometry. Faltings, and later Scholze and Weinstein, showed that the Lubin–Tate tower and the Drinfeld tower are isomorphic. So the opaque action of G<sub>n</sub> on Lubin–Tate space becomes the plain action of GL<sub>n</sub>(ℤ<sub>p</sub>) on Drinfeld's symmetric space. The answer is an exterior algebra on n generators.

## Main definitions

**Lubin–Tate ring A.** Fix a one-dimensional formal group Γ<sub>n</sub> of height n over the algebraic closure of 𝔽<sub>p</sub>, and let W be the Witt vectors of that field. The ring A classifies deformations of Γ<sub>n</sub>, and A ≅ W[[u<sub>1</sub>, …, u<sub>n−1</sub>]].

**Morava stabiliser group G<sub>n</sub>.** The automorphism group of Γ<sub>n</sub> as a functor on 𝔽<sub>p</sub>-algebras. It is an extension of the Galois group of 𝔽<sub>p</sub> by the automorphisms of Γ<sub>n</sub> over the algebraic closure. It acts continuously on A, and on W through the Galois quotient.

**Devinatz–Hopkins spectral sequence.** It starts from the continuous cohomology H<sup>s</sup>(G<sub>n</sub>, A<sub>t</sub>) and converges to π<sub>t−s</sub> of the K(n)-local sphere. Here A<sub>t</sub> is the graded ring built from A and powers of the invariant differentials.

**Drinfeld symmetric space H.** Rigid-analytic projective space of dimension n − 1 over ℚ<sub>p</sub> with all ℚ<sub>p</sub>-rational hyperplanes removed. GL<sub>n</sub>(ℤ<sub>p</sub>) acts on it.

## Main results

**Theorem (rational homotopy; Theorem A).** For every height n and every prime p, ℚ ⊗ π<sub>∗</sub>L<sub>K(n)</sub>S<sup>0</sup> is isomorphic, as a graded ℚ-algebra, to the exterior algebra over ℚ<sub>p</sub> on generators ζ<sub>1</sub>, …, ζ<sub>n</sub> with ζ<sub>i</sub> in degree 1 − 2i.
- Step 1: Lazard's theorem gives H<sup>•</sup>(G<sub>n</sub>, W) ⊗ ℚ<sub>p</sub> as an exterior algebra on classes of degree 2i − 1.
- Step 2: Theorem B moves this to coefficients in A, and the spectral sequence finishes.

**Theorem (stabiliser cohomology; Theorem B).** For every s ≥ 0, the inclusion W → A induces a split injection H<sup>s</sup>(G<sub>n</sub>, W) → H<sup>s</sup>(G<sub>n</sub>, A) on continuous cohomology, and a power of p kills the complement. So the map is an isomorphism after inverting p.
- Step 1: the splitting comes from power operations in Morava E-theory (Proposition 2.5.1, Corollary 2.5.9).
- Step 2: the isomorphism of stacks [LT<sub>K</sub>/G<sub>n</sub>] ≅ [H/GL<sub>n</sub>(ℤ<sub>p</sub>)] (Theorem 3.9.1) lets both sides be compared through pro-étale cohomology.

**Theorem (integral Tate; Theorem C, proved as Theorem 4.0.4).** Let K be a local field of characteristic (0, p) and C the completion of its algebraic closure. The continuous Galois cohomology of the valuation ring O<sub>C</sub> is O<sub>K</sub>[ε] ⊕ T as a graded O<sub>K</sub>-module. Here ε has degree 1 and square zero, and T is killed by p<sup>N</sup> with N independent of p and K. The paper says N = 5 suffices.

**Theorem (semistable case; Theorem D, proved as Corollary 5.6.9).** Let X be the rigid generic fibre of a quasi-separated semistable formal scheme over O<sub>K</sub>. After tensoring with K, the pro-étale cohomology of the completed integral structure sheaf is the coherent cohomology of O tensored with K[ε].

## Note, then ignore

- Chromatic splitting. Theorem A is the rational part of Hopkins' chromatic splitting conjecture (Conjecture 2.4.2). The full conjecture stays open. Safe to skip on a first reading.
- Vanishing conjecture. Beaudry, Goerss and Henn predict the complement in Theorem B is zero (Conjecture 2.4.4). The paper proves only bounded p-power torsion. Safe to skip.
- Diamonds and v-stacks. The groups are profinite, so the quotient stacks live on the pro-étale or v-site. This is the language of the tower isomorphism. Safe to skip.
- Condensed and solid modules. Continuous cohomology is handled in the condensed setting (Section 3). It is bookkeeping for topologies. Safe to skip.
- The power of p. The authors do not make the exponent in Theorem B explicit. Safe to skip.

## One next step

Open the paper at Section 1 (page 2) and read to the end of Theorem B on page 3.
