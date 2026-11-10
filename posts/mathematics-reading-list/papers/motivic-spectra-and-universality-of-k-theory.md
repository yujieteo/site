source: https://ryomei.com/papers/MotSp.pdf
slogan: Invert the projective line without assuming 𝔸<sup>1</sup>-invariance, and algebraic K-theory becomes the universal theory with line bundles and a projective bundle formula.
basis: the introduction and the main theorem statements

## Before you start

The first pages speak in ∞-categories, presentable symmetric monoidal structures and 𝔼<sub>∞</sub>-algebras. If that language is not yours yet, you may feel shut out before the mathematics starts. That reaction is reasonable and you can read on with it. The main theorem can be said in one line about line bundles and projective space. If you want to know what K-theory is "for" among cohomology theories, that line is the answer. Read the introduction for that, and enjoy it.

## The story

Snaith showed that topological K-theory comes from the classifying space of line bundles, ℂℙ<sup>∞</sup>, by inverting the Bott element. Algebraic versions existed, but only inside Voevodsky's motivic homotopy theory, where the affine line 𝔸<sup>1</sup> is forced to be contractible. K-theory of singular schemes is not 𝔸<sup>1</sup>-invariant, so the true statement was out of reach. The authors rebuild motivic spectra with one requirement only: the projective line ℙ<sup>1</sup> is invertible. Two problems appear. The category of such spectra may not be stable, and it may not be a simple sequential colimit. They cut out "fundamental" spectra, those that satisfy an analogue of Bass's fundamental exact sequence, and prove stability there. Then a Chern class computation on the stack of vector bundles gives the universal property of K-theory.

## Main definitions

**Stacks and the Picard stack.** St is the ∞-topos of Zariski sheaves of anima (spaces) on smooth schemes. Pic is the moduli stack of line bundles, a commutative monoid under tensor product. Its stabilisation 𝕊[Pic] is an 𝔼<sub>∞</sub>-algebra in Sp(St), the sheaves of spectra.

**Motivic spectrum.** An object of Sp<sub>ℙ<sup>1</sup></sub> = St<sub>\*</sub>[(ℙ<sup>1</sup>)<sup>−1</sup>], the universal presentably symmetric monoidal ∞-category under pointed stacks in which ℙ<sup>1</sup>, pointed at ∞, is invertible.
- Model: symmetric ℙ<sup>1</sup>-spectra. The naive telescope, a colimit of repeated ℙ<sup>1</sup> ⊗ −, need not agree with it.

**Fundamental and orientable.** A motivic spectrum E is fundamental if the canonical map ℙ<sup>1</sup> ⊗ E → S<sup>1</sup> ⊗ 𝔾<sub>m</sub> ⊗ E has a retraction. It is orientable if the map ℙ<sup>1</sup> ⊗ E → Pic ⊗ E given by the class of O(1) has a retraction.
- Relation: orientable implies fundamental.

**Projective bundle formula.** An 𝕊[Pic]-module E satisfies it if, for every n ≥ 1 and every smooth X, the sum of the maps β<sup>i</sup> for i = 0, ..., n from n + 1 copies of E(X) to E(ℙ<sup>n</sup><sub>X</sub>) is an equivalence. Here β = 1 − [O(−1)] is the Bott element.

## Main results

**Theorem (universality of K-theory; Theorem 0.1.1, in general Theorem 5.3.3).** Let L<sub>pbf</sub> be the localisation of 𝕊[Pic]-modules onto those that satisfy the projective bundle formula. Then the canonical map L<sub>pbf</sub> 𝕊[Pic] → K is an equivalence of 𝔼<sub>∞</sub>-algebras in Sp(St), where K is non-connective K-theory. The body proves this over every quasi-compact quasi-separated derived scheme S.
- Step 1: show K is the colimit of desuspensions of Σ<sup>∞</sup>Ω<sup>∞</sup>K along the Bott map, so maps out of K are a limit of maps out of the K-theory stack.
- Step 2: compute each term with the next theorem.

**Theorem (fundamental stability; Theorem 0.2.1, in general Theorem 2.4.5).** The adjunction between motivic spectra and motivic spectra in sheaves of spectra restricts to an equivalence on fundamental objects. So a fundamental motivic spectrum has a unique infinite delooping.
- Idea: the Bass construction, as used by Thomason and Trobaugh for non-connective K-theory.

**Theorem (cohomology of the stack of vector bundles; Theorem 0.2.2).** Let E be a homotopy commutative oriented motivic ring spectrum that satisfies the projective bundle formula. Then for every quasi-compact quasi-separated scheme S, the ring E<sup>\*,\*</sup>(Vect<sub>n,S</sub>) is the power series ring E<sup>\*,\*</sup>(S)[[c<sub>1</sub>, ..., c<sub>n</sub>]] in Chern classes.

**Theorem (Selmer K-theory; Theorem 5.4.4).** The same universal property holds for Selmer K-theory, with the localisation that also imposes étale descent.

## Note, then ignore

- Spectra against telescopes. Section 1 separates symmetric ℙ<sup>1</sup>-spectra from the sequential colimit. They agree when the cyclic permutation on three copies of the object is trivial. Safe to skip on a first reading.
- Compactness hypotheses. The paper assumes compact generation only so that Brown representability holds in the proof of Theorem 2.4.5. Safe to skip.
- Zariski or Nisnevich. This paper uses the Zariski topology. The authors now prefer Nisnevich in later work, and say the results hold either way. Safe to skip.
- Section 4 is partly superseded. Section 0.5 says a later paper with Hoyois proves Gr<sub>n</sub> ≃ Vect<sub>n</sub> without orientation, which replaces part of the argument. Safe to skip.
- Credit. The authors say the formulation of the main theorem is due to Dustin Clausen. Safe to skip.

## One next step

Open the paper at page 2 and read Section 0.1 down to Theorem 0.1.1. It is half a page.
