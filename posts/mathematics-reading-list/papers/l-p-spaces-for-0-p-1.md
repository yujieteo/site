source: https://kconrad.math.uconn.edu/blurbs/analysis/lpspace.pdf
slogan: For p below 1, the space of p-integrable functions on [0, 1] has no continuous linear functionals except zero, and a halving trick shows why.
basis: the introduction and the main theorem statements

## Before you start

This is a 15-page handout at the level of a first measure theory course. The likely feeling is mild boredom: L<sup>p</sup> with p &lt; 1 sounds like a corner case that nobody uses. That reaction is fine. If you have ever wondered what the Hahn-Banach theorem really buys you, here is a space where it buys nothing. The proof of Theorem 2.21 is half a page. Enjoy that, and treat the rest as optional.

## The story

In a Banach space, continuous linear functionals separate points. The same holds in every locally convex space. Take functions on [0, 1] with ∫|f|<sup>p</sup> finite, for 0 &lt; p &lt; 1. The distance ∫|f − g|<sup>p</sup> makes this a metric vector space, but its balls are far from convex. Average n functions of small size supported on disjoint intervals, and the average has size growing like n<sup>1−p</sup>. A functional φ has no room to live. Split f into two halves of equal size, double the half on which φ is larger, and repeat. The size shrinks to 0 while φ stays at least 1. Conrad then asks which measure spaces allow this halving, and the answer is a clean fact about nonatomic measures.

## Main definitions

**Topological vector space (Definition 2.10).** A real vector space with a Hausdorff topology in which addition and scalar multiplication are continuous. Its dual V\* is the space of continuous linear maps V → ℝ.

**Locally convex (Definition 2.14).** The convex open sets form a base for the topology. By translation it is enough to check this at 0.

**L<sup>p</sup>(μ) for 0 &lt; p &lt; 1 (Definition 3.1).** Measurable functions f with ∫|f|<sup>p</sup> dμ finite, taken up to equality almost everywhere, with metric d(f, g) = ∫|f − g|<sup>p</sup> dμ.
- No p-th root: the triangle inequality holds because (a + b)<sup>p</sup> ≤ a<sup>p</sup> + b<sup>p</sup> for a, b ≥ 0.

**Atom, nonatomic.** An atom is a measurable set of positive measure whose measurable subsets each have measure 0 or the full measure. A measure space is nonatomic if it has no atoms.

## Main results

**Theorem (zero dual on the interval; Theorem 2.21).** For 0 &lt; p &lt; 1, the only continuous linear map L<sup>p</sup>[0, 1] → ℝ is 0.
- Step 1: given |φ(f)| ≥ 1, pick s by the intermediate value theorem so that [0, s] carries half of ∫|f|<sup>p</sup>. One of the two pieces g has |φ(g)| ≥ 1/2.
- Step 2: replace f by 2g. Then |φ| is still at least 1 and ∫|f|<sup>p</sup> is multiplied by 2<sup>p−1</sup> &lt; 1. Iterating contradicts continuity.

**Theorem (when it is locally convex; Theorem 3.2).** For 0 &lt; p &lt; 1, L<sup>p</sup>(μ) is locally convex if and only if μ takes only finitely many values. In that case the space is a finite-dimensional Euclidean space.

**Theorem (zero dual in general; Theorem 3.5).** If (X, μ) is nonatomic and 0 &lt; p &lt; 1, then L<sup>p</sup>(μ)\* = 0. In the other direction, an atom of finite measure gives a nonzero continuous functional (Theorem 3.3).
- Step 1: for f in L<sup>p</sup>(μ), the measure |f|<sup>p</sup> dμ is finite and nonatomic (Lemma 4.1).
- Step 2: Theorem 4.2 supplies a set carrying exactly half of it, and the halving argument runs as before.

**Theorem (values of a measure; Theorem 4.2).** If ν is a finite nonatomic measure on X, then every t in [0, ν(X)] equals ν(A) for some measurable A.

## Note, then ignore

- Hausdorff is built in. The definition of a topological vector space here includes the Hausdorff condition. Safe to skip on a first reading.
- Two metrics. For p ≥ 1 the metric uses the p-th root of the integral, and for p &lt; 1 it does not. The appendix explains the choice. Safe to skip.
- Real scalars. The handout uses real vector spaces and says the complex case needs minimal change. Safe to skip.
- Atoms of infinite measure. Integrable functions vanish on them, so the handout assumes there are none. Safe to skip.
- Sequence spaces. The space ℓ<sup>p</sup> for p &lt; 1 is not locally convex, yet its dual is ℓ<sup>∞</sup>, because counting measure has atoms (Example 3.4). Safe to skip.

## One next step

Open the PDF at page 4 and read only Theorem 2.21 and its proof. It is about fifteen lines.
