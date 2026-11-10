source: https://www.maths.ed.ac.uk/~cbarwick/papers/gamma-text.pdf
slogan: The Gamma factor in the zeta function is the Euler factor at infinity, and geometry over the field with one element tries to explain why.
basis: the introduction and the main theorem statements

## Before you start

These notes may stir up frustration at gaps. They run 70 pages, many proofs are sketched or left out on purpose, and the last chapter jumps from first-year analysis to topological Hochschild homology. Wanting every step and not getting it is annoying, and you may feel that. The notes begin with integrals an engineer already knows, the Mellin transform and Γ, and ask one honest question about them. Stay with Chapter 1 as long as it is fun. The later chapters can wait.

## The story

Multiply the Riemann zeta function by π<sup>−s/2</sup> Γ(s/2) and it becomes symmetric under s ↦ 1 − s. Each prime gives zeta one Euler factor. The Gamma factor acts like one more, for the "prime at infinity". But Γ comes from calculus. Why does it complete a function from number theory? Barwick takes three passes. First, analysis: Γ is the Mellin transform of exp(−t), and Tate's thesis shows the Gamma factor is the same kind of integral over ℝ that gives the Euler factor over ℚ<sub>p</sub>. Second, geometry: treat ℤ as a curve over a "field with one element", made precise by Borger through Frobenius lifts. Third, cohomology: Deninger writes local factors as regularised determinants, and Connes and Consani realise this with cyclic homology.

## Main definitions

**Mellin transform (1.1.2).** For f on the positive reals with f(t) = O(t<sup>−α</sup>) as t → 0 and f(t) = O(t<sup>−β</sup>) as t → ∞, set M{f}(s) = ∫ t<sup>s</sup> f(t) d log t. It is holomorphic on the strip α &lt; Re(s) &lt; β. It is the Fourier transform on the multiplicative group of positive reals.

**Gamma function (1.2.1).** Γ(s) = M{exp(−t)}(s) = ∫ t<sup>s</sup> exp(−t) d log t for Re(s) > 0.
- Real and complex factors: Γ<sub>ℝ</sub>(s) = π<sup>−s/2</sup> Γ(s/2) and Γ<sub>ℂ</sub>(s) = 2(2π)<sup>−s</sup> Γ(s).

**𝔽<sub>1</sub>-algebra (Borger; 2.1.17).** A Λ-algebra, that is, a commutative ring with a Λ-ring structure. Forgetting the structure is base change from 𝔽<sub>1</sub> to ℤ, and its right adjoint is the big Witt vector functor.
- For a ring flat over ℤ: this is the same as commuting maps ψ<sub>p</sub>, one for each prime, each lifting Frobenius modulo p.

**Regularised determinant (2.3.3).** For an endomorphism Θ with eigenvalues λ<sub>n</sub>, form the Dirichlet series Σ λ<sub>n</sub><sup>−s</sup>, continue it to s = 0, and define the determinant as exp(−ζ′(0)). It replaces an infinite product that does not converge.

## Main results

**Theorem (continuation of Γ; Theorem 1.2.2).** Γ extends to a meromorphic function on ℂ. Its only poles are simple poles at s = −n for n = 0, 1, 2, …, with residue (−1)<sup>n</sup>/n!.
- Step 1: for smooth, rapidly decaying f with expansion Σ a<sub>m</sub> x<sup>m</sup> at 0, M{f} has simple poles at s = −n with residue a<sub>n</sub> (Proposition 1.1.16).
- Step 2: apply this to exp(−x).

**Theorem (Tate's global functional equation; Theorem 1.7.5).** For a number field K, a Schwartz function f on the adeles and a quasicharacter ψ of the idele classes, the integral Z(f, ψ) = ∫ f ψ over the ideles converges for Re(ψ) > 1. It continues meromorphically, with poles only at two points, and Z(f, ψ) = Z(f̂, ψ̂), where ψ̂ = |x|/ψ.
- Step 1: slice the ideles by norm and sum over K<sup>×</sup> on each slice.
- Step 2: apply Poisson summation on the adeles to swap t and 1/t.

**Theorem (Wilkerson; Theorem 2.1.15).** Let R be a ring flat over ℤ with commuting operations ψ<sub>n</sub> such that ψ<sub>p</sub>(x) ≡ x<sup>p</sup> mod pR for every prime p. Then R has exactly one Λ-algebra structure with these Adams operations.

**Theorem (Beilinson; Theorem 3.2.7).** For a smooth projective variety X over a global field and an archimedean place v, the order of the pole of the Gamma factor L<sub>v</sub>(H<sup>w</sup>(X), s) at s = m equals the real dimension of the Deligne cohomology group H<sup>w+1</sup><sub>D</sub>(X<sub>v</sub>, ℝ(w + 1 − m)). I did not check the range of m for which the notes intend this.

## Note, then ignore

- The measure d log t: the notes write Mellin integrals with t<sup>s</sup> d log t where most books write t<sup>s−1</sup> dt. They are equal. Safe to skip on a first reading.
- Strip notation: ⟩α, β⟨ means the open strip α &lt; Re(s) &lt; β. Safe to skip.
- Typos: these are course notes and some displayed formulas have slips, for example in the proof of the Beta formula. Trust the statements over the algebra. Safe to skip.
- Choice of additive character: the local theory fixes a character of each local field. The author himself wonders how much depends on it. Safe to skip.
- Plethories: Section 2.1 sets up Λ-algebras through comonads on rings. The Frobenius-lift description is enough at first. Safe to skip.

## One next step

Read the Introduction on page 5. It is one page and states the question the whole course tries to answer.
