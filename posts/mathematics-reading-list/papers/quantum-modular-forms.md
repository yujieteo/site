source: https://people.mpim-bonn.mpg.de/zagier/files/qmf/fulltext.pdf
slogan: A function on the rationals can fail to be modular and fail to be continuous, yet the two failures cancel into a smooth function.
basis: the introduction and the main theorem statements

## Before you start

The feeling here may be unease at vagueness. Zagier says his definition is "purposely a little vague", and the examples jump from Dedekind sums to q-series to knot invariants. You may worry that you are missing the real definition. You are not. There is no hidden one, and it is fine to feel unsettled by that. If you like seeing a new kind of object born from examples, this paper is that. Pick the example you enjoy most and stay with it. Reading all five is optional.

## The story

A modular form lives on the upper half-plane and transforms exactly under SL(2, ℤ). Zagier asks what a modular object on the boundary, the rational numbers, could be. Two obvious demands fail. Continuity means nothing, since the cusps carry only the discrete topology. Exact invariance is empty, since the group acts transitively on the cusps.

His idea is to ask that the two defects offset each other. Take a function f on ℚ and form the error f − f|γ. The function f may jump wildly from one rational to the next, but the error should be smooth, even real-analytic, on the real line minus a few points. The paper then shows five examples. Some come from q-series that terminate at roots of unity. Others come from quantum invariants of knots and 3-manifolds.

## Main definitions

**Quantum modular form of weight k.** A function f: ℚ → ℂ, perhaps undefined at finitely many points, such that for each γ in a group Γ commensurable with SL(2, ℤ) the function h<sub>γ</sub>(x) = f(x) − (f|<sub>k</sub>γ)(x) extends to a real-analytic function on the real projective line minus a finite set. Here (f|<sub>k</sub>γ)(x) = (cx + d)<sup>−k</sup> f((ax + b)/(cx + d)).
- It is enough to check generators of Γ, because γ ↦ h<sub>γ</sub> is a cocycle.

**Strong quantum modular form.** The same, but f attaches to each rational x a formal power series, written f(x + iε), and the equation f − f|<sub>k</sub>γ = h<sub>γ</sub> holds as an identity of power series at every rational point.

**Leaking through the rationals.** In the known strong examples, f extends to a function analytic on the upper and lower half-planes whose asymptotic expansion at each rational, approached vertically, is the given power series.

## Main results

**Lemma (Cohen; Example 1).** Let σ(q) be Ramanujan's q-series from the Lost Notebook and σ\*(q) its partner. Both have expressions that terminate when q is a root of unity. With those values, σ(q) = −σ\*(q<sup>−1</sup>) for every root of unity q.
- Step 1: a recursion gives a finite polynomial identity for each truncation.
- Step 2: one side vanishes once the truncation passes the order of q.

**Proposition (Example 1).** Put f(x) = q<sup>1/24</sup>σ(q) with q = e<sup>2πix</sup> for rational x. Then f(x + 1) = e<sup>2πi/24</sup> f(x). Under x ↦ x/(2x + 1), with weight 1, f changes by the same root of unity plus an error h(x). The error h is smooth on ℝ and real-analytic away from x = −1/2. So f is a quantum modular form of weight 1 on Γ<sub>0</sub>(2).
- Step 1: extend f to both half-planes using the coefficients T(n) of a Maass wave form found by Cohen.
- Step 2: the Maass form's invariance turns the error into an integral that is visibly analytic.

**Claim (Kontsevich's function; Example 3).** The series F(q) = Σ (1 − q)(1 − q²)···(1 − q<sup>m</sup>) converges on no open set but terminates at roots of unity. The function φ(x) = q<sup>1/24</sup>F(q) on ℚ is a quantum modular form whose transformation under x ↦ −1/x has weight 3/2. The explanation runs through the Dedekind eta function and is proved in Zagier's earlier paper on this function.

**Conjecture (figure-eight knot; Example 5).** Let J(x) be the function J<sub>0</sub> built from the coloured Jones polynomials of the figure-eight knot, evaluated at q = e<sup>2πix</sup>. For γ ∈ SL(2, ℤ), the ratio J(γ(X))/J(X) has an explicit asymptotic expansion as X → ∞ through rationals with bounded denominators. This is supported by numerical data, not proved in the paper.

## Note, then ignore

- Example 0, the Dedekind sum. It nearly fits, but an extra term 1/(Num·Den) spoils it, because the weight 2 Eisenstein series is only quasimodular. Safe to skip on a first reading.
- Multipliers. Roots of unity such as e<sup>2πi/24</sup> appear in the transformation laws, as for the eta function. Safe to skip.
- Non-uniqueness of the extension. The analytic extension off ℚ is not canonical, since you can add a function vanishing to infinite order at all rationals. Safe to skip.
- Example 5 breaks the definition. Its cocycle is not even continuous, so it is a quantum modular form only in a looser sense. Safe to skip.
- The Habiro ring. Several examples live in this ring of functions on roots of unity. Zagier mentions it only in passing. Safe to skip.

## One next step

Open the PDF at page 6 and look only at Figures 1 and 2: the erratic graph of f beside the smooth graph of h.
