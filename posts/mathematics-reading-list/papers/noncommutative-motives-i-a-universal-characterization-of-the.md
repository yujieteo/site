source: https://arxiv.org/pdf/1206.3645
slogan: Motivic stable homotopy is the universal home where ℙ<sup>1</sup> becomes invertible, so a realisation functor needs only three checks on smooth schemes.
basis: the introduction and the main theorem statements

## Before you start

This paper runs to about 135 pages, and the first 65 are a digest of higher category theory. The likely feeling is shame at not knowing the ∞-categorical background. That feeling is allowed. Nothing here requires you to clear it first. If you want to know why realisation functors on motives exist at all, the answer sits in one corollary. Read for the pleasure of that one statement. Finishing can wait.

## The story

Morel and Voevodsky built the motivic stable homotopy category SH(S) in two moves. First they copied the homotopy theory of spaces on smooth schemes, with the affine line 𝔸<sup>1</sup> as the interval. Then they forced the Tate object, coming from ℙ<sup>1</sup>, to be invertible under the tensor product. They used model categories and Hovey's symmetric spectra. It works, but maps out of it, such as Betti or de Rham realisation, were built by hand, and making them respect tensor products was hard. Robalo rewrites it in the language of symmetric monoidal (∞,1)-categories. There, "invert an object" has a universal meaning, and he shows that symmetric spectra compute it. So SH(S) gets a universal property, and monoidal realisations come for free. The same recipe builds motives for Kontsevich's noncommutative spaces.

## Main definitions

**Formal inversion of an object.** Let C be a symmetric monoidal (∞,1)-category and X an object. The formal inversion is a symmetric monoidal (∞,1)-category with a monoidal functor from C that sends X to a ⊗-invertible object, and that is universal among such functors.
- Small case: defined first for small C (Section 4.1).
- Presentable case: then extended to presentable C, where functors must also preserve colimits.

**SH(S).** For a base scheme S, this is the (∞,1)-category underlying the Morel–Voevodsky stable motivic homotopy theory. Start with presheaves of spaces on smooth separated finite-type S-schemes. Impose Nisnevich descent and 𝔸<sup>1</sup>-invariance. Pass to pointed objects and invert ℙ<sup>1</sup> pointed at ∞.

**Noncommutative space.** Over a ring k, a smooth noncommutative space is an object of the opposite of the (∞,1)-category of idempotent-complete dg-categories of finite type, in the sense of Toën and Vaquié. A scheme X gives one, namely its dg-category of perfect complexes L<sub>pe</sub>(X).

## Main results

**Theorem (symmetric spectra are formal inversion; Insight 1.1, made precise as Theorem 4.29).** Let V be a combinatorial simplicial symmetric monoidal model category with cofibrant unit, and X a cofibrant object. Assume the cyclic permutation of X ⊗ X ⊗ X is homotopic to the identity. Then the symmetric monoidal (∞,1)-category underlying Hovey's symmetric spectra Sp<sup>Σ</sup>(V, X) is the formal inversion of X in the (∞,1)-category underlying V.
- Step 1: under the cyclic condition, formal inversion agrees with ordinary spectra built by a colimit along tensoring with X (Corollary 4.24).
- Step 2: Hovey's comparison of ordinary and symmetric spectra then carries the result over.

**Theorem (universal property of SH(S); Corollary 1.2, which is Corollary 5.11).** SH(S) is stable and presentable with a symmetric monoidal structure. Let D be any pointed presentable symmetric monoidal (∞,1)-category. Then colimit-preserving monoidal functors SH(S) → D are the same as monoidal functors from smooth S-schemes (with cartesian product) to D that satisfy Nisnevich descent, are 𝔸<sup>1</sup>-invariant, and send the cofibre of the point at ∞, S → ℙ<sup>1</sup>, to an invertible object. Any D that receives such a functor is stable.
- Case 1: for a field k of characteristic zero, X ↦ Σ<sup>∞</sup>X(ℂ) extends to a monoidal functor SH(k) → spectra.
- Case 2: the de Rham complex X ↦ C<sub>DR</sub>(X) extends to a monoidal functor SH(k) → D(k).

**Theorem (bridge to noncommutative motives; Section 6, stated in the introduction).** There is a stable presentable symmetric monoidal (∞,1)-category SH<sub>nc</sub>(k), built from noncommutative spaces with a noncommutative version of the Nisnevich topology. The functor X ↦ L<sub>pe</sub>(X) extends to a monoidal colimit-preserving functor SH(k) → SH<sub>nc</sub>(k). I did not read the hypotheses of Section 6 in detail, so take this at the level of the introduction.

## Note, then ignore

- The cyclic permutation condition. It is needed to compare formal inversion with spectra, and Voevodsky and Hovey already used it. The author believes the theorem holds without it (Remark 4.30). Safe to skip on a first reading.
- Universes. Section 2 fixes Grothendieck universes to handle large categories. It is bookkeeping and safe to skip.
- Quasi-categories. The paper uses Joyal and Lurie's model of (∞,1)-categories. Any other model gives the same statements, so skip the choice on a first reading.
- Two titles. The arXiv version read here (v3) carries the subtitle "From Commutative to Noncommutative Motives". The reading list gives a different subtitle for the same arXiv number. Safe to skip.
- "Homological" versus "cohomological" motives. Tabuada and Cisinski have other motivic theories for dg-categories. The comparison is left for later parts, so skip it for now.

## One next step

Open the paper at page 5 and read only Corollary 1.2 and the two examples after it.
