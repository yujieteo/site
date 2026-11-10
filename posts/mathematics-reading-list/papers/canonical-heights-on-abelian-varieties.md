source: https://swc-math.github.io/aws/2024/2024SilvermanNotes.pdf
slogan: Repeated doubling turns a height with an error term into an exact quadratic form, so rational points of an abelian variety form a lattice.
basis: the introduction and the main theorem statements

## Before you start

These are 86 pages of lecture notes, and the first 22 are background: divisors, abelian varieties, the Weil height machine. The likely feeling is impatience mixed with doubt, a sense that you must clear the background before you have earned the main part. You have not failed if that weighs on you. The notes are built so that Section 5 can be read with the earlier theorems taken on trust. If you want to know how one measures the size of a rational point, the answer is on four pages. Enjoy those four. The other 82 are there when you want them.

## The story

A Weil height h<sub>D</sub> measures the arithmetic size of a point on a variety, relative to a divisor D. It behaves well under maps, but only up to a bounded error O(1). On an abelian variety A, doubling a point multiplies the height by 4 for a symmetric D, again up to O(1). Tate's idea is to use that. Apply doubling n times, divide by 4<sup>n</sup>, and let n grow. The errors shrink like a geometric series, and the limit ĥ<sub>D</sub> satisfies the doubling rule exactly. The limit turns out to be a quadratic form, zero exactly on torsion points. So A(K) modulo torsion sits inside a Euclidean space as a lattice. Counting points, bounding small points from below, and following points through a family all become questions about that lattice.

## Main definitions

**Symmetric and anti-symmetric divisors (Definition 5.1).** A divisor D on an abelian variety A is symmetric if [−1]\*D is linearly equivalent to D, and anti-symmetric if [−1]\*D is linearly equivalent to −D.
- Consequence of the theorem of the cube: [2]\*D ∼ 4D in the symmetric case and [2]\*D ∼ 2D in the anti-symmetric case.

**Weil height.** For a smooth projective variety X over a number field or function field K and a divisor D, a function h<sub>X,D</sub> on the points of X over the algebraic closure, defined up to a bounded function. It is additive in D, compatible with pullback, and for ample D only finitely many points of bounded degree have bounded height (Theorem 4.8).

**Canonical height (Theorem 5.2 and Definition 5.3).** For symmetric D, ĥ<sub>A,D</sub>(P) is the limit of 4<sup>−n</sup> h<sub>A,D</sub>([2<sup>n</sup>]P) as n → ∞. For anti-symmetric D, replace 4<sup>−n</sup> by 2<sup>−n</sup>.
- General D: write [−1]\*D as D<sup>−</sup> and set ĥ<sub>D</sub> = ½ ĥ<sub>D+D⁻</sub> + ½ ĥ<sub>D−D⁻</sub>.

## Main results

**Theorem (Néron and Tate, construction; Theorem 5.2).** Let A be an abelian variety over a number field or function field K, and let D be symmetric or anti-symmetric. The limit above exists. It differs from h<sub>A,D</sub> by a bounded amount, depends only on the linear equivalence class of D, and satisfies ĥ([m]P) = m<sup>2</sup> ĥ(P) for symmetric D and ĥ([m]P) = m ĥ(P) for anti-symmetric D.
- Step 1: the height machine gives |h([2]Q) − 4h(Q)| ≤ C for all Q.
- Step 2: a telescoping sum shows that the sequence is Cauchy.

**Theorem (Néron and Tate, quadratic form; Theorem 5.4).** For symmetric D, ĥ<sub>A,D</sub> is a quadratic form on the points of A over the algebraic closure. If K is a number field and D is also ample, then ĥ ≥ 0, ĥ(P) = 0 exactly when P is torsion, and ĥ extends to a positive definite quadratic form on A(K) ⊗ ℝ.
- Step 1: the theorem of the cube gives bilinearity up to O(1), and the limit removes the O(1).
- Step 2: if ĥ(P) = 0, the multiples of P have bounded height, so by finiteness two of them coincide.

**Theorem (counting points; Theorem 6.1, Néron).** Let D be ample and symmetric and let r be the rank of A(K). The number of points P in A(K) with h<sub>A,D</sub>(P) ≤ T equals α T<sup>r/2</sup> + O(T<sup>(r−1)/2</sup>) for a constant α > 0.

**Theorem (heights in a family; Theorem 9.3 and Corollary 9.6).** Let A be an abelian variety over the function field K(C) of a curve C over a number field K, with fibres A<sub>t</sub>, and let P be a point of A over K(C). Then ĥ on A<sub>t</sub> of the specialised point P<sub>t</sub>, divided by h<sub>C</sub>(t), tends to ĥ<sub>A,D</sub>(P) as h<sub>C</sub>(t) → ∞.
- Consequence: the set of t where the specialisation map on points, taken modulo the constant part, fails to be injective has bounded height. Over any fixed finite extension of K it is finite.

## Note, then ignore

- Function fields and the trace. Over K = k(C), points of height zero also come from the part of A defined over k, called the K/k-trace. Each statement gains a clause for it. Safe to skip on a first reading.
- Positive definite on A(K) ⊗ ℝ. This does not follow at once from positive definiteness on A(K) modulo torsion. The notes cite a reference for it and set an exercise on the gap. Safe to skip.
- Local heights. Section 7 splits ĥ into a sum of Néron's local functions, one for each absolute value. This is needed for computation and for the lower bounds. Safe to skip.
- Lehmer-type questions. Section 8 asks how small ĥ(P) can be for non-torsion P. Conjecture 8.7 predicts a bound C/[K(P) : K]<sup>1/g</sup>. Masser's theorem gives exponent 2g + 1 + ε instead. Safe to skip.
- Supplementary material. Paragraphs in small type cover advanced generalisations, and the notes themselves say to pass over them. Safe to skip.

## One next step

Open the notes at page 23 and read the statement of Theorem 5.2, then the first ten lines of its proof, up to inequality (5.4).
