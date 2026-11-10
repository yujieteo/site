source: https://math.uchicago.edu/~emerton/pdffiles/IHES2022padicstacks.pdf
slogan: Smooth p-adic representations of GL<sub>d</sub>(F) should embed into coherent sheaves on a moduli stack of Galois parameters, and for GL<sub>2</sub>(ℚ<sub>p</sub>) this is nearly proved.
basis: the introduction and the main theorem statements

## Before you start

These are 239 pages of summer school notes on a field the authors themselves call "still in its infancy". Most of the main statements are conjectures, and the prerequisites run from (φ, Γ)-modules to derived categories. The feeling to expect is a kind of vertigo: how do you learn something that is not settled? That is a fair thing to feel, and the authors seem to share it. If you want to know where the p-adic Langlands programme is heading, the introduction says so in ten readable pages. Read them with curiosity. Nothing obliges you to continue.

## The story

For a prime ℓ ≠ p, Fargues and Scholze turned the local Langlands correspondence into geometry. One consequence should be a fully faithful functor from smooth ℓ-adic representations of G(F) to quasicoherent sheaves on a stack of Galois parameters. The notes ask for the same when ℓ = p. This is harder on both sides. Irreducible mod p representations of GL<sub>2</sub>(F) are classified only for F = ℚ<sub>p</sub>. The parameter stacks are no longer zero-dimensional. Their dimension grows with [F : ℚ<sub>p</sub>], and they have few global functions. The authors' guide is Taylor-Wiles patching. A patched module looks like the pullback of a sheaf that should exist on the whole stack. So they conjecture a functor given by one kernel sheaf L<sub>∞</sub>, in a "Banach" and an "analytic" version, and report a proof in progress for GL<sub>2</sub>(ℚ<sub>p</sub>).

## Main definitions

**The stack 𝒳<sub>d</sub> (Emerton-Gee).** Fix a finite extension F of ℚ<sub>p</sub> and a coefficient ring 𝒪, the integers of a large enough finite extension of ℚ<sub>p</sub>. 𝒳<sub>d</sub> is the moduli stack of projective étale (φ, Γ)-modules of rank d over F.
- On a finite 𝒪-algebra A, its points are the continuous representations Gal<sub>F</sub> → GL<sub>d</sub>(A).
- On a larger A, such as k[X], a point need not come from a Galois representation. This is why the stack has more geometry than Galois deformation rings.

**Banach case and analytic case.** The Banach case concerns smooth representations of G = GL<sub>d</sub>(F) on p-power torsion 𝒪-modules, and their limits. The analytic case concerns locally analytic representations, and uses a rigid analytic stack of (φ, Γ)-modules over the Robba ring.

**D<sup>b</sup><sub>f.p.</sub>(sm. G).** The bounded derived category of smooth 𝒪-linear G-representations whose cohomologies are finitely presented modules over the completed group ring 𝒪[[G]].

## Main results

**Theorem (Emerton-Gee; Theorem 4.1.3).** 𝒳<sub>d</sub> is a Noetherian formal algebraic stack. Its underlying reduced substack is an algebraic stack of finite type over 𝔽<sub>p</sub>, equidimensional of dimension [F : ℚ<sub>p</sub>]d(d − 1)/2, and its irreducible components are labelled by Serre weights.

**Conjecture (Banach case; Conjecture 6.1.14).** Assume that the category of smooth 𝒪-linear G-representations is locally coherent (Conjecture 6.1.4). Then there is an 𝒪-linear, exact, fully faithful functor 𝔄: D<sup>b</sup><sub>f.p.</sub>(sm. G) → D<sup>b</sup><sub>coh</sub>(𝒳<sub>d</sub>) of bounded amplitude.
- Kernel: L<sub>∞</sub> = 𝔄(𝒪[[G]]) is a pro-coherent sheaf in degree 0.
- Locally algebraic vectors: for a regular Hodge type λ and inertial type τ, the image of a matching compact induction has support equal to the crystalline substack of type (λ, τ).

**Expected Theorem (Dotto-Emerton-Gee; Expected Theorem 7.2.1).** Let p ≥ 5 and G = PGL<sub>2</sub>(ℚ<sub>p</sub>). There is a pro-coherent sheaf L<sub>∞</sub> of 𝒪[[G]]-modules on the stack 𝒳 of rank 2 (φ, Γ)-modules with fixed determinant such that π ↦ L<sub>∞</sub> ⊗ π (derived tensor product over 𝒪[[G]]) is an exact fully faithful functor D<sup>b</sup><sub>f.p.</sub>(sm. G) → D<sup>b</sup><sub>coh</sub>(𝒳). The notes label this as work in progress.
- Ingredient (Theorem 7.2.3): the reduced stack maps to an explicit chain of projective lines X, and sm. G localises to a stack of abelian categories over X.

**Conjecture (analytic case; Conjecture 6.2.4).** There is an exact functor from the finitely presented derived category of locally analytic G-representations to coherent complexes on the analytic stack, compatible with the smooth case. I did not check its full list of conditions.

## Note, then ignore

- Fully faithful, not an equivalence. The authors expect equivalences once p-adic sheaves on Bun<sub>G</sub> are defined, but no precise conjecture exists yet (Remark 1.4.6). Safe to skip on a first reading.
- Derived structure. The stacks should a priori be derived stacks. The authors expect them to be classical. Safe to skip.
- Local coherence. Conjecture 6.1.4 is known for d = 1 and nearly for d = 2. For d > 2 the ring 𝒪[[G]] is not coherent, so the conjecture needs another route. Safe to skip.
- Only GL<sub>d</sub>. Other groups would need C-groups and parameter stacks that have not been built for ℓ = p (Remark 1.4.7). Safe to skip.
- Condensed mathematics. Remark 1.9.1 says the theory will probably be rewritten with solid modules. The notes mostly avoid them. Safe to skip.

## One next step

Open the PDF at Section 1.4 (page 6) and read Conjecture 1.4.3 and the paragraph before it. That is the whole programme in rough form.
