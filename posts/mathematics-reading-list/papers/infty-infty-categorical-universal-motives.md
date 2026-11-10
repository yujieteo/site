source: https://arxiv.org/pdf/2412.12055
slogan: Functors from a space into higher categories, localised twice, give one proposed home for motives of schemes, topological spaces and topoi alike.
basis: the introduction and the main theorem statements

## Before you start

This one is likely to raise overwhelm, and some doubt about your own footing. It runs past 120 pages, stacks gestalten on ultracategories on prismatization, and states many results in notation it defines only later. Feeling lost in it is a fair reaction to the text, not a verdict on you. If you want a map of where six-functor formalisms are heading in p-adic geometry, the introduction gives one. Browse for the vocabulary you enjoy. Finishing is optional.

## The story

Motivic homotopy theory lets you study schemes by homotopy methods, and topologists gained from it in return. The author asks for more: a motivic six-functor formalism for every topological space and every Grothendieck topos, including p-adic Lie groups and p-adic analytic spaces. The text says such questions usually have a negative answer in the classical setting, which is what led to condensed mathematics. The proposal here is to stop asking for one category of motives. Take all functors from X, viewed over the sphere spectrum, into presentable (∞,∞)-categories. Localise twice, as in motivic homotopy theory. Pair this with Lurie's ultrafunctors on models of X. The pair is called a universal motivic gestalt. The six operations are pulled back from the gestalten formalism of an earlier cited work. The rest of the paper applies this language to p-adic Hodge theory and the p-adic local Langlands programme.

## Main definitions

**(∞,∞)-gestalt.** Following the paper's reference [4S5], a sequence (A<sub>0</sub>, A<sub>1</sub>, ...) in which A<sub>n</sub> is an (∞,n)-categorical object and a symmetric monoidal module over the ring object A<sub>n−1</sub>, inside presentable ∞-categories. The author leaves the precise model of (∞,∞)-categories open and treats them as colimits of (∞,n)-categories.
- E<sub>1</sub> version: A<sub>0</sub> may be a non-commutative monoidal object.

**Universal motivic gestalten formalism (Definition 1).** For X over the sphere spectrum, the gestalten attached to two (∞,∞)-categories: Fun(X, Cat<sub>∞,∞</sub>) and UltraFun(Model(X), Cat<sub>∞,∞</sub>), each localised twice.
- First localisation: homotopy localisation with respect to the bigraded motivic sphere.
- Second localisation: stabilisation by infinite loop space functors.

**De Rham prismatization and de Rham-Robba stackification.** Two stacks attached to a small v-stack or small arc-stack S over ℚ<sub>p</sub> or over 𝔽<sub>p</sub>((u)). One comes from prismatization, the other from Robba rings and Fargues-Fontaine stacks. Each carries a stable ∞-category of solid quasicoherent sheaves.

**(F,Γ)-complex.** For a module F with Frobenius and Γ-action over a Robba-type ring with coefficients in a rigid affinoid X, the complex C<sub>F,Γ</sub>(F) computes its cohomology. A companion complex C<sub>W</sub>(F) uses the operators W<sub>i</sub> = φ<sub>i</sub><sup>−1</sup>.

## Main results

I state these as the introduction does. Several hypotheses are fixed only by the author's "general setting", which I could not check in full, so read them as the author's claims in the author's terms.

**Theorem (finiteness; Theorems 1 and 2).** The complex C<sub>F,Γ</sub>(F) lies in the bounded derived (∞,1)-category of perfect complexes over X. The same holds in ind-Banach modules and in solid (condensed) modules. The introduction adds "where X is just ℚ<sub>p</sub>".
- Point: the stable ∞-categories of ind-Banach and solid modules avoid the lack of projective resolutions over Fréchet-Stein algebras.

**Theorem (two stackifications agree; Theorems 3 and 4).** After adjoining an element b<sup>1/2</sup>, the de Rham-Robba and de Rham-prismatization stackifications are equivalent for small v-stacks over Spd ℚ<sub>p</sub> and over Spd 𝔽<sub>p</sub>((t)), in the v-topology. The induced functor on solid quasicoherent sheaves is an equivalence of stable symmetric monoidal ∞-categories.

**Theorem (arc-stacks; Theorems 5 and 6).** For a small arc-stack S, the functor from solid quasicoherent sheaves on the de Rham prismatization of S to those on the de Rham-Robba stack of the associated v-stack is a symmetric monoidal functor, and it is fully faithful.

**Conjecture (after Sorensen; Conjecture 1).** For a compact p-adic Lie group G and a p-adic formal ℤ<sub>p</sub>-algebra X<sup>+</sup>, the derived ∞-category of a minimal derived E<sub>1</sub> model of the Hecke algebra should be equivalent to the derived ∞-category of smooth G-modules over X<sup>+</sup>.

## Note, then ignore

- Seven versions. The arXiv file is version 7, dated December 2025, and the scope grew between versions. Safe to skip on a first reading.
- No fixed model of (∞,∞)-categories. Remark 2 declines to choose one, which keeps statements flexible. Safe to skip.
- The element b<sup>1/2</sup>. It is adjoined in the "general setting" to make the comparison of stackifications work. Safe to skip.
- Citation codes. Labels such as [4S5] and [5Lu3] are the paper's reference keys, grouped by topic. Safe to skip.
- The belief statement. The abstract calls the framework a grand unified theory. That is an opinion of the author, not a theorem. Safe to skip.

## One next step

Open the paper at Section 1.1 and read only Questions 1 and 2 and Definition 1. That is one page and it holds the whole proposal.
