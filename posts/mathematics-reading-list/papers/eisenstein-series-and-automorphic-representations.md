source: https://arxiv.org/pdf/1511.04265
slogan: Lift an Eisenstein series to the adeles and its Fourier coefficients split into one easy integral per prime.
basis: the introduction and the main theorem statements

## Before you start

This is a book of more than 300 pages with a reference list of 30 more. The likely feeling is overwhelm, plus some unease that it mixes Lie theory, p-adic analysis and string theory. That feeling makes sense, and you can let it be there. If you want to see why ζ appears in the constant term of an Eisenstein series, this book shows the computation in full. Read for the pleasure of one worked example. Finishing can wait.

## The story

The authors are physicists who met Eisenstein series on exceptional Lie groups in string theory and had to compute their Fourier coefficients. For SL(2) there is a classical trick. Write the series as a sum over a lattice and apply Poisson resummation. Out come zeta values, divisor sums and Bessel functions. For a general group G there is often no lattice sum, so the trick fails. The way out is to move from G(ℤ)\G(ℝ) to G(ℚ)\G(𝔸), where 𝔸 is the ring of adeles. Every integral then factors into one piece over ℝ and one piece over each ℚ<sub>p</sub>. The p-adic pieces are short computations. Their product over all primes rebuilds ζ through its Euler product. The book works this out for SL(2), then for all split groups, with many examples.

## Main definitions

**Automorphic form.** A function f on a Lie group G that is invariant under a discrete subgroup Γ, is an eigenfunction of the G-invariant differential operators, and grows at most polynomially. The book mostly takes f also invariant on the right under the maximal compact subgroup K.
- Model case: G = SL(2, ℝ), Γ = SL(2, ℤ), K = SO(2), so f lives on the upper half plane.

**Eisenstein series.** For a character χ of the Borel subgroup B, set E(χ, g) = Σ χ(γg), the sum over γ in B(ℤ)\G(ℤ). The character is fixed by a weight λ of the Lie algebra.
- For SL(2): χ<sub>s</sub>(z) = y<sup>s</sup> and E(χ<sub>s</sub>, z) = Σ Im(γz)<sup>s</sup>, which converges for Re(s) > 1.
- The lattice sum Σ y<sup>s</sup>/|cz + d|<sup>2s</sup> over nonzero (c, d) equals 2ζ(2s) E(χ<sub>s</sub>, z).

**Adeles.** The ring 𝔸 is the restricted product of ℝ and all ℚ<sub>p</sub>. An adele is a tuple (a<sub>∞</sub>; a<sub>2</sub>, a<sub>3</sub>, a<sub>5</sub>, ...) with almost all a<sub>p</sub> in ℤ<sub>p</sub>. Strong approximation lets you view an automorphic form on G(ℤ)\G(ℝ)/K as a function on G(ℚ)\G(𝔸).

**Constant term and Whittaker coefficient.** Let N be the maximal unipotent subgroup. The constant term is the integral of E(λ, ng) over N(ℤ)\N(ℝ). A Whittaker coefficient is the same integral weighted by a unitary character ψ of N.

## Main results

Write ξ(s) = π<sup>−s/2</sup> Γ(s/2) ζ(s) for the completed zeta function.

**Theorem (Fourier expansion for SL(2); Theorem 1.1).** For g in SL(2, ℝ), the series E(χ<sub>s</sub>, g) equals y<sup>s</sup> + (ξ(2s−1)/ξ(2s)) y<sup>1−s</sup> plus a sum over m ≠ 0 of terms (2y<sup>1/2</sup>/ξ(2s)) |m|<sup>s−1/2</sup> σ<sub>1−2s</sub>(m) K<sub>s−1/2</sub>(2π|m|y) e<sup>2πimx</sup>. It also satisfies E(χ<sub>s</sub>, g) = (ξ(2s−1)/ξ(2s)) E(χ<sub>1−s</sub>, g).
- Step 1: the Bruhat decomposition splits the integral into a trivial and a non-trivial Weyl element.
- Step 2: the Bessel function comes from the factor at ℝ and the divisor sum σ comes from the p-adic factors.

**Theorem (Langlands constant term formula; Theorem 1.2).** Let G be a split semi-simple group over ℚ with Weyl group W, and let ρ be the Weyl vector. The constant term of E(λ, g) at a torus element a is the sum over w in W of a<sup>wλ+ρ</sup> times the product of ξ(⟨λ|α⟩)/ξ(1 + ⟨λ|α⟩) over positive roots α with wα negative.
- Step 1: parametrise the integral by Bruhat cells and reduce it by induction on the length of w.
- Step 2: evaluate each rank one integral at ℝ and at ℚ<sub>p</sub>. This is the Gindikin–Karpelevich formula.

**Theorem (Casselman–Shalika formula; Theorem 1.3).** For a finite prime p and an unramified character ψ of N(ℚ<sub>p</sub>), the spherical Whittaker function on G(ℚ<sub>p</sub>) is an explicit signed sum over the Weyl group. I do not reproduce the formula, because my extracted text of it was garbled.
- Step 1: prove a functional relation for the local Whittaker function under simple reflections.
- Step 2: form a Weyl-invariant combination and fix it by one special coefficient.

**Theorem (degenerate Whittaker coefficients; Theorem 1.4).** For a degenerate character ψ supported on a subgroup G′, the Whittaker coefficient of the Eisenstein series on G(𝔸) is a finite sum of Whittaker functions on G′(𝔸), each multiplied by an explicit factor. The full statement is in section 10.5.

## Note, then ignore

- Convergence. The authors say they often manipulate sums and integrals formally and then rely on analytic continuation. Safe to skip on a first reading.
- Split groups over ℚ only. Every group is a split real form and the adeles are those of ℚ. This keeps the root-system bookkeeping light. Safe to skip.
- Starred sections. Sections marked with an asterisk go beyond the main line. Safe to skip, as the authors intend.
- Chapter 2 on string theory. It explains why physicists care, and the later mathematics does not depend on it. Safe to skip if you want only the mathematics.
- Non-abelian coefficients. For a general G the group N is not abelian, so Whittaker coefficients do not capture the whole series. Safe to skip until chapter 7.

## One next step

Open the book at section 1.3.2 and read the two factorisations (1.20) and (1.22), where the SL(2) coefficients split into a product over primes.
