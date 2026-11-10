source: https://arxiv.org/pdf/2602.15941
slogan: Let divisors on Spec ℤ have infinite coefficients, and the trivial class group grows into a monoid whose points are adele classes.
basis: the introduction and the main theorem statements

## Before you start

Forty-eight pages, nine sections and two appendices, with adeles on every page. The likely feeling is overwhelm at the size, mixed with doubt about whether adeles are yours to use. Both are understandable, and neither has to go away. Section 2 needs no adeles. It classifies subgroups of ℚ by the powers of each prime allowed in a denominator. If you want to know what a line bundle on Spec ℤ could be, start there and enjoy it.

## The story

Spec ℤ looks like a curve of genus zero, because its class group is trivial. Yet the zeros of ζ and the explicit formulas suggest a curve of infinite genus. The authors resolve the clash by enlarging what a divisor is. A coefficient may be +∞, and the support may be infinite. Such divisors correspond exactly to rank-1 subgroups of ℚ, and ∞·[p] corresponds to ℤ[1/p]. Divisor classes are then isomorphism classes of torsion-free rank-1 groups, which form a large monoid under tensor product. Adding a norm at the archimedean place gives a Picard monoid of the completed curve. It equals a quotient of the adele class space. The Abel–Jacobi map sends p to ℤ[1/p], and pulling adelic covers back along it gives the periodic orbits of length log p.

## Main definitions

**Arithmetic divisor on Spec ℤ.** A formal sum D = Σ n<sub>p</sub>[p] with n<sub>p</sub> ∈ ℤ ∪ {+∞} and n<sub>p</sub> &lt; 0 for at most finitely many p. Its sections are L(D) = {x ∈ ℚ : v<sub>p</sub>(x) ≥ −n<sub>p</sub> for all p}.
- Classical case: finite support and integer coefficients give the fractional ideals of ℤ.
- New case: ∞·[p] gives ℤ[1/p], with poles of any order at p.

**Picard monoid.** Pic(Spec ℤ) is the divisors modulo principal divisors div(q), q ∈ ℚ<sup>×</sup>. It is a monoid under addition of divisors, not a group.

**Arithmetic divisor on the completed curve.** A pair (L, ‖·‖) with L a torsion-free abelian group of rank 1 and ‖·‖ a semi-norm on L ⊗ ℝ, proportional to the absolute value. The zero semi-norm is allowed. Classes up to isometric isomorphism form the arithmetic Picard monoid, with product the tensor product.
- Jacobian: the arithmetic Jacobian is this monoid divided by ℝ<sub>+</sub><sup>×</sup>, which rescales the norm.

**Riemann sector.** X<sub>ℚ</sub> = ℚ<sup>×</sup>\𝔸/Ẑ<sup>×</sup>, the quotient of the adele class space Y<sub>ℚ</sub> = ℚ<sup>×</sup>\𝔸 by the maximal compact subgroup of the idele class group C<sub>ℚ</sub>.

## Main results

**Proposition (divisors are subgroups of ℚ; Propositions 2.4, 2.7 and 2.11).** D ↦ L(D) is a bijection from arithmetic divisors to rank-1 subgroups of ℚ. It induces a bijection from Pic(Spec ℤ) to isomorphism classes of torsion-free rank-1 groups, and L(D<sub>1</sub> + D<sub>2</sub>) ≅ L(D<sub>1</sub>) ⊗ L(D<sub>2</sub>). There is a monoid isomorphism Pic(Spec ℤ) ≅ ℚ<sup>×</sup>\𝔸<sub>f</sub>/Ẑ<sup>×</sup>.
- Step 1: recover n<sub>p</sub> as −inf v<sub>p</sub>(x) over x in the subgroup.
- Step 2: send a finite adele to its valuations, with v<sub>p</sub>(0) = ∞.

**Theorem (the Riemann sector is a Picard monoid; Theorem 1.1, proved as Theorem 3.4).** Send an adele a = (a<sub>f</sub>, a<sub>∞</sub>) to the group L<sub>a</sub> = {q ∈ ℚ : a<sub>f</sub>q ∈ Ẑ} with semi-norm |a<sub>∞</sub>|·|v|. This induces a monoid isomorphism from X<sub>ℚ</sub> to the arithmetic Picard monoid of the completed curve.

**Theorem (fibres over Spec ℤ; Theorem 1.3).** The extended Abel–Jacobi map Θ sends p to (ℤ[1/p], non-zero norm), ∞ to (ℤ, zero norm) and the generic point η to (ℤ, non-zero norm). Pull the adelic covers back along Θ. The monoid structure makes each fibre a group.
- Riemann sector: the fibre is ℝ<sub>+</sub><sup>×</sup> over η, the periodic orbit C<sub>p</sub> ≅ ℝ/ℤ log p over p, and one point over ∞.
- Universal cover: the fibre is C<sub>ℚ</sub> over η, C<sub>ℚ</sub>/ℚ<sub>p</sub><sup>×</sup> over p, and Ẑ<sup>×</sup> ≅ Gal(ℚ<sup>ab</sup>/ℚ) over ∞.

**Theorem (uniformisation of the adele class space; Theorem 1.4, proved as Theorem 8.15).** Y<sub>ℚ</sub> is isomorphic as a monoid to the moduli of framed arithmetic divisors (L, ξ, τ), with ξ a frame at the finite places (a generator of a rank-one Ẑ-module attached to L) and τ : L → ℝ a homomorphism. The product of adeles becomes the tensor product. A duality identifies framed divisors with rooted ones, where ξ is replaced by a homomorphism from ℚ/ℤ to the torsion of Hom(L, ℚ/ℤ).

## Note, then ignore

- Two meanings of "arithmetic divisor". Section 2 uses formal sums on Spec ℤ. Section 3 onward uses pairs (L, ‖·‖) on the completed curve. The PDF shows the difference only by a bar over Spec ℤ. Safe to skip once noticed.
- Standard group theory. The classification of rank-1 groups by "types" is classical, and the paper cites Rotman for it. The proofs are included for convenience. Safe to skip.
- No real invariants. Remark 2.8 says linear equivalence is ergodic, so no measurable real-valued function separates the classes. Safe to skip.
- Monoid, not group. Classes such as ℤ[1/p] are idempotent under ⊗. The Abel–Jacobi map lands on these boundary points. Safe to skip the general theory.
- "Infinite genus". This is a guiding heuristic. The paper does not define a genus. Section 9, which reads Weil's explicit formula as a trace formula, is likewise interpretive. Safe to skip.

## One next step

Open the paper at Section 2.2 and read Definition 2.3 and Proposition 2.4 with its short proof.
