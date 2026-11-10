source: http://javier.fresan.perso.math.cnrs.fr/mzv.pdf
slogan: Multiple zeta values of weight k span a space of dimension at most d<sub>k</sub>, and those with only 2s and 3s span everything.
basis: the introduction and the main theorem statements

## Before you start

The book has 557 pages, and the two theorems it aims at arrive in Chapter 5, after page 399. The likely feeling is overwhelm, with a fear that you must climb the whole thing before anything pays off. You may feel that. The book does not ask it of you: Chapter 1 needs little background and already holds the main conjectures. If you want motives introduced through one concrete family of numbers, this is that book. Read the parts that please you.

## The story

Multiple zeta values satisfy many linear relations over ℚ. Zagier conjectured that the weight k values span a space Z<sub>k</sub> of dimension d<sub>k</sub>, where d<sub>k</sub> = d<sub>k−2</sub> + d<sub>k−3</sub>. That is far smaller than the 2<sup>k−2</sup> convergent sums. Lower bounds need transcendence, and nobody can even show dim Z<sub>k</sub> &gt; 1 for a single k. Upper bounds are within reach. Kontsevich wrote each value as an iterated integral of dt/t and dt/(1−t) over a simplex. So the values are periods of ℙ<sup>1</sup> minus {0, 1, ∞}. Periods come from motives, and for mixed Tate motives over ℤ there is an unconditional theory resting on Borel's computation of K-groups. Its symmetry group gives an algebra H of "motivic" multiple zeta values with dim H<sub>k</sub> = d<sub>k</sub>, mapping onto Z.

## Main definitions

**Multiple zeta value.** For integers s<sub>i</sub> ≥ 1 with s<sub>1</sub> ≥ 2, ζ(s<sub>1</sub>, ..., s<sub>ℓ</sub>) is the sum over n<sub>1</sub> &gt; n<sub>2</sub> &gt; ... &gt; n<sub>ℓ</sub> ≥ 1 of 1/(n<sub>1</sub><sup>s<sub>1</sub></sup> ⋯ n<sub>ℓ</sub><sup>s<sub>ℓ</sub></sup>). The weight is s<sub>1</sub> + ... + s<sub>ℓ</sub>. Z is the ℚ-span of all of them inside ℝ, and Z<sub>k</sub> the span of those of weight k.
- Series form: gives the stuffle product, for example ζ(a)ζ(b) = ζ(a, b) + ζ(b, a) + ζ(a + b).
- Integral form: gives the shuffle product, from cutting a product of two simplices into simplices.

**The numbers d<sub>k</sub>.** d<sub>0</sub> = 1, d<sub>1</sub> = 0, d<sub>2</sub> = 1 and d<sub>k</sub> = d<sub>k−2</sub> + d<sub>k−3</sub> for k ≥ 3. The generating series is 1/(1 − t<sup>2</sup> − t<sup>3</sup>).

**Mixed Tate motives over ℤ.** MT(ℚ) is the Tannakian category of mixed Tate motives over ℚ, extracted from Voevodsky's triangulated category by means of Borel's theorem. MT(ℤ) is the full subcategory of everywhere unramified objects: no subquotient is a non-split extension of ℚ(n) by ℚ(n+1) (Definition 4.149).

**Motivic multiple zeta value.** H is the graded algebra of functions on a scheme built from the Tannaka group of MT(ℤ) and the motivic fundamental groupoid of ℙ<sup>1</sup> minus {0, 1, ∞} (Definition 5.10). It contains elements ζ<sup>m</sup>(s), and a period map per: H → ℝ sends ζ<sup>m</sup>(s) to ζ(s) (Definition 5.33).

## Main results

**Theorem (upper bound; Theorem A, due to Deligne and Goncharov, and to Terasoma).** For every k ≥ 0, dim Z<sub>k</sub> ≤ d<sub>k</sub>.
- Step 1: the period map H → Z is surjective and respects the weight.
- Step 2: the structure of the Tannaka group of MT(ℤ) gives dim H<sub>k</sub> ≤ d<sub>k</sub> (Corollary 5.21 and the lines after it).

**Theorem (Brown; Theorem B).** Every multiple zeta value is a ℚ-linear combination of values ζ(s<sub>1</sub>, ..., s<sub>ℓ</sub>) with every s<sub>i</sub> in {2, 3}.
- Step 1: the motivic coaction, through the maps D<sub>2r+1</sub> of Definition 5.39, detects elements of H. Theorem 5.45 says that the common kernel in weight N is spanned by ζ<sup>m</sup>(N).
- Step 2: Zagier's formula for ζ(2, ..., 2, 3, 2, ..., 2) as a combination of products ζ(2r+1) times a power of π (Theorem 5.71) supplies the arithmetic input.

**Conjecture (Zagier).** Z is the direct sum of the Z<sub>k</sub>, and dim Z<sub>k</sub> = d<sub>k</sub>. Hoffman's conjecture says that the values with entries in {2, 3} form a basis of Z. Neither is proved. The preface notes that Zagier's conjecture, given Theorems A and B, implies that π, ζ(3), ζ(5), ... are algebraically independent.

**Theorem (Euler; Theorem 1.3).** For k ≥ 1, ζ(2k) = (−1)<sup>k−1</sup> (2π)<sup>2k</sup> B<sub>2k</sub> / (2 (2k)!), with B<sub>2k</sub> the Bernoulli numbers.

## Note, then ignore

- Order of indices. This book sums over n<sub>1</sub> &gt; n<sub>2</sub> &gt; ..., with s<sub>1</sub> ≥ 2. Brown and others use the opposite order. The preface warns about it. Safe to skip on a first reading.
- Borel's theorem as a black box. The rational K-theory of number fields is used and not proved, since a proof would add about a hundred pages. Safe to skip.
- Tangential base points. The path from 0 to 1 ends at missing points, so base points are tangent vectors. Safe to skip.
- Regularisation. Divergent sums with s<sub>1</sub> = 1 get finite values in two ways, to capture relations such as ζ(3) = ζ(2, 1). It matters for Section 1.7 only. Safe to skip.
- The appendix. About 100 pages of homological algebra for reference. Safe to skip.

## One next step

Open the PDF at the Preface and read the paragraph headed "Plan", which states Theorem A and Theorem B.
