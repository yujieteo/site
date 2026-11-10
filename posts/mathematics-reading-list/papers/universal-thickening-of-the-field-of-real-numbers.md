source: https://alainconnes.org/wp-content/uploads/Universal-thickening-of-the-field-of-real-numbers-2015.pdf
slogan: The real analogues of p-adic period rings are algebras of Laplace transforms, where a Teichmüller lift is the function z ↦ |x|<sup>z</sup>.
basis: the introduction and the main theorem statements

## Before you start

This is the 2015 version of the Connes–Consani paper, 58 pages, and it has the same content as the arXiv text. The likely feeling is a mild dread of duplication: two entries, one paper, and no clear reason to open the second. That feeling is accurate, and you may simply have it. If you care about how classical analysis sits inside the analogy with p-adic Hodge theory, this page takes the analytic half as its subject. Read it for the surprise of meeting Laplace transforms there. Finishing is not the point.

## The story

Fontaine's rings of p-adic periods come from three steps: perfection, Witt vectors, completion. Connes and Consani carry each step to the real place. Perfection of ℝ gives the tropical real hyperfield ℝ<sup>♭</sup>, where addition picks the larger term and x + (−x) is an interval. The Witt step gives a field built from the group ring of the positive reals. The third step is where analysis enters. In the p-adic theory every element is a series Σ [x<sub>n</sub>]π<sup>n</sup> of Teichmüller lifts. Over ℝ the sum becomes an integral ∫ [f<sub>s</sub>] e<sup>−s</sup> ds, and the lift [x] becomes the function z ↦ sign(x)|x|<sup>z</sup>. The completed ring is the algebra of Laplace transforms of finite measures on the half-line. Frobenius becomes the scaling z ↦ λz.

## Main definitions

**Tropical real hyperfield ℝ<sup>♭</sup>.** The set ℝ with ordinary multiplication and a multivalued sum: x ⌣ y is the summand of larger absolute value, x if x = y, and the interval [−x, x] if y = −x.
- Maximal compact part: the interval [−1, 1] is a sub-hyperring O, the analogue of the ring of integers.

**Teichmüller lift.** The multiplicative section τ(x) = [x] from ℝ<sup>♭</sup> into its universal W-model, the field Frac(ℚ[ℝ<sub>+</sub><sup>×</sup>]). The ring map θ sends [x] back to x.
- As a function: for x in [−1, 1], [x] is z ↦ sign(x)|x|<sup>z</sup> on the half-plane Re(z) > 0, and θ is evaluation at z = 1.

**The algebra B<sub>∞</sub><sup>b,+</sup> (Definition 5).** The space of real functions of the form ∫<sub>0</sub><sup>V</sup> [x<sub>u</sub>] du with V finite, where u ↦ x<sub>u</sub> ∈ [−1, 1] is measurable and x<sub>u</sub> ⌣ x<sub>v</sub> = x<sub>u</sub> for u ≤ v. It is the real analogue of the p-adic ring B<sup>b,+</sup>.

## Main results

**Theorem (Banach algebra; Theorem 5).** B<sub>∞</sub><sup>b,+</sup> with pointwise operations and the norm ‖f‖<sub>0</sub> = sup{u : x<sub>u</sub> ≠ 0} is a real Banach algebra. Its elements are exactly the Laplace transforms f(z) = ∫<sub>0</sub><sup>∞</sup> e<sup>−ξz</sup> dμ(ξ) of finite real Borel measures on [0, ∞), so it is the convolution algebra of such measures.
- Why: the norm ‖f‖<sub>0</sub> equals the total variation |μ|([0, ∞)).

**Theorem (canonical form; Theorem 6).** Every f in B<sub>∞</sub><sup>b,+</sup> can be written as f = ∫<sub>s<sub>0</sub></sub><sup>∞</sup> [f<sub>s</sub>] e<sup>−s</sup> ds for some real s<sub>0</sub> and a measurable function s ↦ f<sub>s</sub> ∈ [−1, 1] \ {0} with f<sub>s</sub> ⌣ f<sub>t</sub> = f<sub>s</sub> for s ≤ t. The function f<sub>s</sub> is unique up to a set of measure zero.
- Example from the introduction: for Euler's divergent series Σ (−1)<sup>n</sup> n! z<sup>−n</sup> the canonical form is f<sub>s</sub> = exp(1 − e<sup>s</sup>), which converges fast.

**Theorem (Gelfand spectrum; Theorem 8).** Let B<sub>ℂ,0</sub><sup>+</sup> be the Fréchet algebra obtained by completing with respect to the real analogues of the p-adic norms ‖·‖<sub>ρ</sub>. Its Gelfand spectrum is the one-point compactification of the open half-plane {Re(z) > 0}. The automorphisms F<sub>λ</sub> act by z ↦ λz and fix the point at infinity.
- Consequence: these algebras are faithfully represented as algebras of holomorphic functions of z.

**Theorem (the algebraic input; Theorems 1 to 4).** The perfection of ℝ is ℝ<sup>♭</sup>. Its universal W-model is Frac(ℚ[ℝ<sub>+</sub><sup>×</sup>]). The Ker(θ)-adic completion ℝ<sub>∞</sub> maps onto real power series in many ways, and Ker(θ)/Ker(θ)<sup>2</sup> is an infinite-dimensional real vector space.

## Note, then ignore

- Numbering. This version numbers theorems 1 to 10 in one run. The arXiv version numbers them by section, so Theorem 6 here is Theorem 5.4 there. Safe to ignore.
- The norms ‖·‖<sub>ρ</sub>. For ρ > 0 they are weighted total variations ∫ e<sup>−ξα</sup> |dφ(ξ)| with α = −1/log ρ. They exist to mirror the p-adic definitions. Safe to skip on a first reading.
- Mikusinski field. The paper embeds its algebra in the field of fractions of the convolution algebra, using Titchmarsh's theorem to show the leading term f<sub>s<sub>0</sub></sub> is multiplicative. Safe to skip.
- Borel transform. The link between the expansion of f in powers of 1/z and the Taylor series of the measure's density is the Borel transform. Safe to skip at first.
- Complex case. Section 7 treats ℂ and the Airy integral as a toy model. Safe to skip.

## One next step

Open the PDF at Appendix 1 near the end and read the table that lists each real object next to its p-adic counterpart.
