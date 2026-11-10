source: https://arxiv.org/pdf/2111.06645
slogan: Put a knot's Kashaev invariant into a matrix, and its ragged modular defect becomes a smooth function on the real line.
basis: the introduction and the main theorem statements

## Before you start

This paper runs to 87 pages, and by the authors' own account most of its statements are conjectures resting on numerical experiment. The likely feeling is unease: there is no clean theorem to hold on to, and it is hard to know what counts as understood. That unease is reasonable, and you can keep it with you while you read. What the paper offers is a rare view of mathematics being found by computing and plotting. Two pictures in the introduction carry the whole idea. Look at them for fun before deciding whether to go further.

## The story

The Kashaev invariant of a knot gives a number at each root of unity, so a function J on ℚ. Its graph is a cloud of points with no continuous extension. Zagier found that J(x)/J(−1/x) behaves better, and conjectured a precise asymptotic law, quantum modularity, governed by divergent power series Φ<sub>α</sub>(h). But the ratio still jumps at infinitely many points. The new idea is that J is one entry of a square matrix **J**. Rows and columns are indexed by the boundary parabolic SL<sub>2</sub>(ℂ) representations of the knot group. For the figure 8 knot the matrix is 3 × 3. Form the matrix product **J**(−1/x)<sup>−1</sup> j(x) **J**(x) with an elementary diagonal factor j. The plots of its entries are smooth curves. The same matrix turns the divergent series into actual functions.

## Main definitions

**Kashaev invariant and J.** For a knot K and each N ≥ 1, the Kashaev invariant ⟨K⟩<sub>N</sub> is an element of ℤ[e<sup>2πi/N</sup>]. Its absolute value is conjectured to grow like e<sup>cN</sup>, with c the hyperbolic volume divided by 2π. Galois conjugation extends it to a function J on ℚ/ℤ with algebraic values.

**The matrix Φ<sub>α</sub>(h).** For each α in ℚ/ℤ, a square matrix of formal power series in h, indexed by the finite set P<sub>K</sub> of boundary parabolic representations, with the trivial one listed first.
- First column: (1, 0, …, 0).
- Second column: its top entry is the expansion of the Kashaev invariant near e<sup>2πiα</sup>, taken in the Habiro ring. The other entries are the perturbative series of Dimofte and Garoufalidis, computed from a triangulation of the knot complement.

**The cocycle W<sub>γ</sub>.** For γ in SL<sub>2</sub>(ℤ), set W<sub>γ</sub>(x) = **J**(γx)<sup>−1</sup> j<sub>γ</sub>(x) **J**(x) for rational x, where **J**(α) = Φ<sub>α</sub>(0) and j<sub>γ</sub> is an explicit diagonal automorphy factor (a slight variant of the one in the conjecture below). It satisfies W<sub>γγ′</sub>(x) = W<sub>γ</sub>(γ′x) W<sub>γ′</sub>(x).

## Main results

**Conjecture (quantum modularity; from Zagier's earlier paper).** For γ in SL<sub>2</sub>(ℤ) with bottom row (c, d), as X → ∞ with bounded denominator, J(γX) ≈ (cX + d)<sup>3/2</sup> J(X) Φ̂<sub>a/c</sub>(2πi/(c(cX + d))) to all orders in 1/X. Here Φ̂ is Φ times an explicit exponential in 1/h.

**Conjecture (refined quantum modularity; equation (4.12)).** The same relation holds for the whole matrix: **J**(γX) ≈ j<sub>γ</sub>(X) **J**(X) Φ̂<sub>a/c</sub>(2πi/(c(cX + d))), with j<sub>γ</sub> diagonal. Its first entry is (cX + d)<sup>3/2</sup> and the others are pure exponentials.
- Case checked: the figure 8 knot, the 5<sub>2</sub> knot and the (−2, 3, 7) pretzel knot, numerically and in detail.
- Meaning: the matrix adds exponentially small corrections to a divergent series, which only makes sense after a careful truncation rule.

**Conjecture (smoothness; Conjectures 5.1 and 5.4).** W<sub>γ</sub>, defined on rational numbers, extends to a C<sup>∞</sup> function on ℝ minus the point γ<sup>−1</sup>(∞). More strongly, it extends to a real-analytic function there, and on each of the two half-lines it continues to a holomorphic function on a cut plane.
- Consequence: making the asymptotic relation exact defines functions whose Taylor series are the divergent Φ<sub>α</sub>(h).

**Theorem (denominators; Theorem 9.1).** For the series defined by Gaussian integrals, which excludes the trivial representation, the n-th coefficient of Φ<sub>α</sub>(h) becomes integral after multiplying by an explicit number D<sub>n</sub> that does not depend on the knot. The exceptions are a finite set of primes depending only on the knot, and the primes dividing the denominator of α. This summary does not reproduce the formula for D<sub>n</sub> or the normalisation of the coefficients.

## Note, then ignore

- Smoothed optimal truncation. To add exponentially small terms to a divergent series, the authors cut it off near its smallest term and then smooth the cut. The details are in a separate paper. Safe to skip on a first reading.
- The level N. For the pretzel knot the matrices have period 2 in α and modularity holds only for a congruence subgroup. For the other two examples the level is 1. Safe to skip.
- Completions. Φ̂ differs from Φ by an exponential in 1/h and, in the top row, a half-integral power of h. Safe to skip.
- "Functions near ℚ". The authors package all Φ<sub>α</sub> into one object defined infinitesimally near every rational. It tidies statements and changes none. Safe to skip.
- The companion paper. A second paper realises the same matrix as q-series with integer coefficients. It also predicted the smoothness found here, but you can read this paper without it. Safe to skip.

## One next step

Open the paper at page 2 and compare Figure 1 with Figure 2 on page 3. Read only the paragraph between them.
