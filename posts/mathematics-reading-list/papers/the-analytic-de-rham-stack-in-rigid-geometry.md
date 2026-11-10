source: https://arxiv.org/pdf/2401.07738
slogan: Quotient a rigid space by "infinitely near in the p-adic sense" and D-modules become plain sheaves on a stack, with six functors for free.
basis: the abstract and introduction

## Before you start

This is 110 pages, and it leans on analytic stacks, solid modules, six-functor formalisms and adic spaces all at once. The natural feeling is overwhelm, with some shame about the prerequisites. You are allowed to feel both. The introduction runs to eight pages and states every main result. If you want to know how a differential equation turns into geometry, its first two pages answer with one worked example. Read for that example. Going further is a separate question.

## The story

A D-module is a sheaf with an action of differential operators. Simpson said this geometrically in characteristic 0. Define X<sub>dR</sub>(R) = X(R<sub>red</sub>), so that points differing by a nilpotent are identified. Quasi-coherent sheaves on X<sub>dR</sub> are then D-modules on X. In p-adic geometry, Ardakov and Wadsley use a larger ring of infinite-order differential operators, and Simpson's recipe does not produce it. The line shows what to change. Its algebraic de Rham stack is 𝔾<sub>a</sub> modulo the formal completion at 0. The analytic one must be 𝔾<sub>a</sub> modulo 𝔾<sub>a</sub><sup>†</sup>, the germ of all small discs around 0, because that germ is Cartier dual to the analytic affine line where the symbol ∂ lives. So replace "nilpotent" by "smaller than every power of p". Analytic stacks make that precise.

## Main definitions

**Bounded affinoid ring (Definition 2.6.10).** An analytic ring over R = ℤ((π)), in the sense of Clausen and Scholze, in which every element is bounded: any map from ℤ[T] extends to a Tate algebra R⟨π<sup>n</sup>T⟩ for some n. These form a full subcategory of analytic R-algebras that contains Tate Huber pairs fully faithfully. I give the informal description from the introduction. The precise definition is in Section 2.6.
- Gluing: a derived Tate adic space is a sheaf that is covered, in the analytic topology, by spectra of bounded affinoid rings.

**†-nilradical.** For a bounded affinoid ring A, Nil<sup>†</sup>(A) is the ideal whose S-points, for S profinite, are the maps S → A that are overconvergently close to zero. Informally, elements a with |a| ≤ |p<sup>n</sup>| for all n. The †-reduction is A<sup>†-red</sup> = A / Nil<sup>†</sup>(A).
- Compare: the ordinary condensed nilradical Nil(A) collects the uniformly nilpotent maps and gives A<sub>red</sub>.

**Analytic de Rham stack (Definition 5.2.2, stated as 1.0.11).** For a derived Tate adic space X over ℚ<sub>p</sub>, the prestack A ↦ X(A<sup>†-red</sup>) on bounded affinoid rings over ℚ<sub>p</sub>, sheafified in the D-topology. Its quasi-coherent sheaves are, by definition, the analytic D-modules on X.
- Relative version: X<sub>dR,Y</sub> is the pullback of X<sub>dR</sub> → Y<sub>dR</sub> along Y → Y<sub>dR</sub>.

## Main results

**Theorem (bounded affinoid rings; Theorem 1.0.1).** For a bounded affinoid ring A there is a spectral space Spa A with a basis of rational subsets, extending Huber's construction. Spa A is unchanged by passing to A<sub>red</sub> or A<sup>†-red</sup>, and solid A-modules satisfy descent for the analytic topology of Spa A.

**Theorem (analytic Cartier duality; Theorem 1.0.8 and Corollary 1.0.9).** Let X be a derived Tate adic space over ℚ<sub>p</sub> and F a vector bundle of rank d on X. Write V(F)<sup>an</sup> for its analytic total space and V(F)<sup>†</sup> for the overconvergent neighbourhood of the zero section. Then Fourier–Mukai transforms give equivalences of stable ∞-categories of solid quasi-coherent sheaves:
- Mod(V(F)<sup>†</sup>) ≃ Mod(X / V(F<sup>∨</sup>)<sup>an</sup>).
- Mod(V(F)<sup>an</sup>) ≃ Mod(X / V(F<sup>∨</sup>)<sup>†</sup>).

**Theorem (de Rham stacks; Theorem 1.0.12, selected parts).** Let f : X → Y be a morphism of derived Tate adic spaces locally of solid finite presentation. Then f<sub>dR</sub> : X<sub>dR</sub> → Y<sub>dR</sub> admits !-functors. If f is solid smooth of relative dimension d, then f<sub>dR</sub> is cohomologically smooth and f<sub>dR</sub><sup>!</sup> of the unit is the unit shifted by 2d, which is Poincaré duality for analytic D-modules. If X is a rigid space over a non-archimedean extension K of ℚ<sub>p</sub>, sheaves on X<sub>dR,K</sub> descend along X → X<sub>dR,K</sub>.
- Kashiwara: for a Zariski closed immersion X → Y, the de Rham stack of X equals that of the overconvergent neighbourhood of X in Y.
- Comparison: for f solid smooth, analytic D-modules embed fully faithfully in algebraic ones, and both give the same de Rham cohomology with its Hodge filtration.

**Proposition (p-adic Lie groups; Proposition 1.0.14).** For a p-adic Lie group G, the analytic de Rham stack of G with locally analytic functions is G with locally constant functions. So (∗/G<sup>la</sup>)<sub>dR</sub> = ∗/G<sup>sm</sup>: applying "de Rham" to locally analytic representations gives smooth representations.

## Note, then ignore

- Two de Rham stacks. The paper also defines an algebraic de Rham stack on the same rings, using uniformly nilpotent ideals, and proves most statements for both. Safe to skip on a first reading.
- The D-topology. Stacks are sheaves for a topology defined by descent of the six-functor formalism, following Mann and Scholze. It replaces the étale topology of Simpson's definition. Safe to skip.
- Base ℤ((π)) versus ℚ<sub>p</sub>. The general theory of Sections 2 and 3 is over ℤ((π)). Cartier duality and the analytic de Rham stack are done over ℚ<sub>p</sub> for technical reasons. Safe to skip.
- Filtered variants. The proof of the main theorem uses filtered stacks X<sub>dR<sup>+</sup></sub> that carry the Hodge filtration (Remark 1.0.13). Safe to skip.
- Coadmissible modules. The exact relation to the Ardakov–Wadsley category is discussed in the body, which I did not read. Safe to skip.

## One next step

Open the paper at the heading "Motivation" on page 2 and read to the displayed formula 𝔾<sub>a,dR</sub> = 𝔾<sub>a</sub> / 𝔾<sub>a</sub><sup>†</sup> on page 3.
