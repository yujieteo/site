source: https://arxiv.org/pdf/2506.18174
slogan: The twist in Poincaré duality for a p-adic Lie group is the sphere of its adjoint representation, as the tangent bundle is for manifolds.
basis: the introduction and the main theorem statements

## Before you start

This is 131 pages, and the language is light condensed anima, six functor formalisms and spectra. The likely feeling is shame at not owning that background. Let it be there. The author himself says the choice of framework was close to arbitrary, and that the technical part is cited from others. If you want to see why a totally disconnected group can behave like a manifold, the introduction alone gives it. Read for the picture, and stop when it stops being fun.

## The story

For a compact real manifold M, Atiyah duality says that homology with sphere-spectrum coefficients equals cohomology twisted by the fibrewise one-point compactification of the tangent bundle. Lazard found a parallel fact for compact p-adic Lie groups: their continuous cohomology with p-adic coefficients satisfies Poincaré duality, with a twist governed by the adjoint representation. But Lazard's method inverts p and passes to the Lie algebra, and that destroys all information over the sphere spectrum. So the spectrum-level twist stayed unknown, although chromatic homotopy theory needs it. Clausen's idea is to deform the group to its Lie algebra in a family over ℚ<sub>p</sub>, and then to compare the fibre at 1 (the group) with the fibre at 0 (the Lie algebra). The comparison needs a "path" from 0 to 1 in a totally disconnected space. He builds one.

## Main definitions

**Six functor formalism of étale sheaves.** To each light condensed anima X the paper attaches a category Sh<sub>et</sub>(X; Sp<sub>p</sub>) of sheaves of p-complete spectra, with pullbacks f<sup>\*</sup>, pushforwards, and exceptional functors f<sub>!</sub> and f<sup>!</sup>. The construction rests on general results of Heyer and Mann.
- A map f is smooth if f<sup>!</sup> is f<sup>\*</sup> tensored with an invertible object, the dualising object f<sup>!</sup>(unit).

**Classifying stack BG.** For a p-adic Lie group G, BG is the quotient ∗/G, viewed as a sheaf on p-adic manifolds and then as a light condensed anima. Sheaves on BG play the role of p-complete spectra with continuous G-action.

**The sphere of a vector bundle (Definitions 10.1 and 10.12).** For a real vector bundle V → X with zero section e and projection f, set S<sup>V</sup> = e<sup>\*</sup>f<sup>!</sup>S. It is the suspension spectrum of the fibrewise one-point compactification.
- Real case: defined directly from V → X.
- p-adic case: ℚ<sub>p</sub> → ∗ is not smooth, so S<sup>V</sup> is defined instead from X → BV → X, using the classifying stack of the additive group V.

**Deformation to the tangent bundle.** For a manifold M over a complete valued field F, a family DM → F whose fibre over t ≠ 0 is M × M and whose fibre over 0 is the tangent bundle TM. Applied at the identity of a Lie group, it gives a family of groups, equivariant for scaling by F<sup>×</sup>, with fibre G at 1 and the Lie algebra (as an additive group) at 0.

## Main results

**Theorem (linearisation; Theorem 10.14).** Let G be a p-adic Lie group and f: BG → ∗. Then the dualising object f<sup>!</sup> of the p-complete sphere is the sphere S<sup>ad G</sup> of the adjoint representation, viewed as a vector bundle on BG.
- Step 1: Rewrite f<sup>!</sup> through the diagonal BG → BG × BG, which is the relative classifying stack of G acting on itself by conjugation.
- Step 2: Deform that family of groups to its Lie algebra and compare the fibres at 1 and 0 (Lemma 10.13).

**Theorem (nonstandard paths; Theorem 9.13).** Let F be a local field and p a prime. Let 𝓕 be a sheaf of p-complete spectra on X × (F/F<sup>×</sup>) whose restriction to each point of X is a colimit of dualisable objects. Then the fibres of 𝓕 at 0 and at 1 are naturally isomorphic.
- Step 1: Build a compact Hausdorff space, a variant of the topologist's sine curve that ends in a solenoid, with a map to F/F<sup>×</sup> hitting 0 and 1.
- Step 2: Show this space looks contractible to p-complete spectra, so sheaves pulled back to it are constant.

**Theorem (Atiyah duality; Theorem 10.7).** For a representable submersion f: X → Y of real manifolds (or sheaves on them), f<sup>!</sup>S ≃ S<sup>T<sub>f</sub></sup>, with T<sub>f</sub> the relative tangent bundle. The same deformation argument proves it, and for a real Lie group gives f<sup>!</sup>S ≃ S<sup>−ad G</sup> on BG (Theorem 10.9).

## Note, then ignore

- Sign of the twist. The real statement has S<sup>−ad G</sup> and the p-adic one S<sup>ad G</sup>, because the p-adic sphere is defined through BV rather than V. Safe to skip on a first reading.
- "Light" condensed anima. The word fixes a countability bound that makes the set theory clean. Skip it.
- !-good stacks. A technical class of p-adic stacks for which the exceptional functors exist. It is needed to run the proofs, not to read the statements.
- Sections 11 to 14. These treat J-homomorphisms, Morava E-theory and solid refinements. They are applications. Skip them at first.
- The 2018 announcement. The author says the results were announced then and written up only now. Nothing in the statements depends on this.

## One next step

Open the paper and read Example 1.2 and Remark 1.3 on page 2, which show the duality for ℤ<sub>p</sub><sup>d</sup> as that of a torus and say why Lazard's method cannot reach the sphere.
