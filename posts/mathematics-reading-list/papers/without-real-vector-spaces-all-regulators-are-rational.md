source: https://arxiv.org/pdf/2510.10816
slogan: Remove the real line from locally compact abelian groups and every determinant functor can only rescale by rational numbers.
basis: the introduction and the main theorem statements

## Before you start

The title sounds like a joke, and the author says the result "will not shock anyone". You may feel a small doubt about whether it is worth your time, or unease when K-theory spectra appear in the proof. Both are fine. The paper is about 20 pages, and the statement needs only Haar measure and exact sequences. If you have wondered why regulators are transcendental, this isolates where that comes from. Enjoy the overview, and let the K-theory computation be optional.

## The story

Special value conjectures compare determinant lines of several kinds: p-adic, real and rational. The regulator is the mismatch between them, and it is usually transcendental. Braunling asks where the transcendence can enter. Every locally compact abelian (LCA) group has a Haar measure, unique up to a positive real scalar. Clausen showed that this is the universal determinant functor on LCA groups. Now forbid groups with a real line ℝ as a direct summand. Tori, p-adic fields, discrete and compact groups all stay. Each remaining group has a compact open subgroup, and you can give it volume 1. Different choices change the measure by a finite index, which is rational. Braunling proves this rational Haar torsor is universal. So any determinant functor on such groups compares measures only up to rational factors.

## Main definitions

**LCA and LCA<sub>vf</sub>.** LCA is the category of locally compact Hausdorff abelian groups with continuous homomorphisms. LCA<sub>vf</sub> ("vector-free") is the full subcategory of groups with no direct summand ℝ. Exact sequences are closed injections followed by closed surjections.
- Structure theorem: every LCA group is G<sub>0</sub> ⊕ ℝ<sup>n</sup>, where G<sub>0</sub> has a compact open subgroup with discrete quotient.

**Determinant functor (Deligne).** For an exact category C and a Picard groupoid P, a determinant functor is a functor D from the isomorphisms of C to P, with an isomorphism D(G) ≅ D(G′) ⊗ D(G″) for each exact sequence G′ → G → G″. These must be compatible with two-step filtrations and with swapping direct summands. D is universal if every determinant functor factors through it, uniquely up to equivalence.

**Haar functor Ha and its rational form.** Ha sends an LCA group to its set of Haar measures, a torsor under the positive reals. For an exact sequence, measures on subgroup and quotient fix the measure on the middle by an iterated integral. For X in LCA<sub>vf</sub>, Ha<sub>ℚ</sub>(X) is the set of positive rational multiples of the "root measure".
- Root measure: pick a compact open C ⊂ X, give C volume 1 and X/C the counting measure.
- A smaller choice C′ ⊂ C changes the measure by the index [C : C′].

## Main results

**Theorem (rational universality; Theorems 1.1 and 6.6).** The Haar functor restricted to LCA<sub>vf</sub> takes values in torsors under ℚ<sup>×</sup><sub>>0</sub>. This functor Ha<sub>ℚ</sub> is the universal determinant functor of LCA<sub>vf</sub>. Every determinant functor D from LCA<sub>vf</sub> to a Picard groupoid P factors as a symmetric monoidal functor applied to Ha<sub>ℚ</sub>.
- Step 1: by Deligne, the universal determinant is fixed by the K-theory spectrum in degrees 0 and 1, with its k-invariant.
- Step 2: compute those groups, then match the abstract ℚ<sup>×</sup><sub>>0</sub> with the Haar rescaling factor.

**Theorem (K-groups; Theorem 6.1).** K<sub>1</sub>(LCA<sub>vf</sub>) ≅ ℚ<sup>×</sup><sub>>0</sub> and K<sub>1</sub>(LCA) ≅ ℝ<sup>×</sup><sub>>0</sub>, and the inclusion of categories induces the inclusion of the rationals in the reals. Both K<sub>0</sub> groups vanish.
- The real case is credited to Clausen.

**Corollary (whole spectrum; Corollary 5.5).** The non-connective K-theory of LCA<sub>vf</sub> is the suspension of the K-theory of finite abelian groups.
- Step 1: compact groups and discrete groups each have vanishing K-theory by an Eilenberg swindle.
- Step 2: the quotient of LCA<sub>vf</sub> by compact groups is equivalent to abelian groups modulo finite groups.

## Note, then ignore

- Not closed under extensions. The sequence ℤ → ℝ → ℝ/ℤ shows LCA<sub>vf</sub> is not a fully exact subcategory of LCA. This is why it needs its own treatment. Safe to skip on a first reading.
- Discrete ℝ is allowed. The real numbers with the discrete topology are vector-free. Their Haar measure is counting measure, so no lengths can be compared. Safe to skip.
- The p-adic logarithm example. Multiplying ℚ<sub>p</sub> by a transcendental p-adic number changes Haar measure only by a power of p. The finer p-adic determinant line does not extend to all of LCA<sub>vf</sub>. Safe to note and move on.
- Free normalisation. You may still set the volume of ℤ<sub>p</sub> to be ζ(3). The theorem only limits how two normalisations of one group can differ. Safe to skip.
- No motives used. The title mentions regulators, but the paper proves a statement about LCA groups only. The link to L-value conjectures is the remark that their lines come from determinant functors.

## One next step

Open the paper at Section 4 and read Step 1 and Step 2 of the construction of the root measure, up to Example 4.2.
