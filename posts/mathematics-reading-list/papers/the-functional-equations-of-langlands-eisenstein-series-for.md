source: https://arxiv.org/pdf/2310.06284
slogan: Each Fourier coefficient of an SL(n,ℤ) Eisenstein series is a divisor sum times a Whittaker function, and both visibly carry the functional equations.
basis: the introduction and the main theorem statements

## Before you start

Langlands Eisenstein series have a reputation for heavy machinery, and the feeling this may raise is dread of notation: parabolics, partitions, shifts by ρ. It is fine to feel that. The paper is 19 pages and was written to be elementary, with SL(2) and SL(3) worked out before the general case. If you want to see a functional equation with your own eyes, not take it on trust, this helps. Start with the SL(2) example for fun, and stop wherever the fun stops.

## The story

Maass proved the functional equation of the classical Eisenstein series from its Fourier expansion: every non-constant coefficient is σ<sub>2s</sub>(m)|m|<sup>−s</sup>√y K<sub>s</sub>(2π|m|y), which is plainly invariant under s ↦ −s. Selberg and Langlands later proved the general case by a different route, through spectral theory and constant terms. Sarnak asked whether Maass's direct method could work for SL(n,ℤ). Goldfeld, Stade and Woodbury show how far it goes. Earlier work gives the coefficients explicitly. After multiplying by a product of completed Rankin-Selberg L-functions, each coefficient is a divisor-type sum times a Whittaker function. Permuting the variables s<sub>1</sub>, ..., s<sub>r</sub> together with the blocks leaves both factors unchanged. So the functional equations of Langlands can be read off the coefficients. The authors call this derivation heuristic, since Langlands's theorem is still what proves the equations.

## Main definitions

**Power function.** Fix a partition n = n<sub>1</sub> + ... + n<sub>r</sub>, written P, and s = (s<sub>1</sub>, ..., s<sub>r</sub>) in ℂ<sup>r</sup> with Σ n<sub>i</sub>s<sub>i</sub> = 0. For a block upper triangular matrix with diagonal blocks m<sub>i</sub>, set |m|<sub>P</sub><sup>s</sup> = Π |det m<sub>i</sub>|<sup>s<sub>i</sub></sup>. The condition on s makes it invariant under the centre.

**Langlands Eisenstein series (Definition 4.6).** Let Φ = φ<sub>1</sub> ⊗ ... ⊗ φ<sub>r</sub>, where φ<sub>j</sub> is a Maass form for SL(n<sub>j</sub>,ℤ), or the constant 1 if n<sub>j</sub> = 1. Then E<sub>P,Φ</sub>(g, s) = Σ Φ(γg) |γg|<sub>P</sub><sup>s+ρ<sub>P</sub></sup>, summed over γ in (Γ<sub>n</sub> ∩ P)∖Γ<sub>n</sub> with Γ<sub>n</sub> = SL(n,ℤ).
- Case 2 = 1 + 1: the classical series Σ Im(γz)<sup>s<sub>1</sub>+1/2</sup>.
- Case 3 = 1 + 2: the series for SL(3,ℤ) twisted by a Maass form for SL(2,ℤ).

**Normalised series.** E\*<sub>P,Φ</sub>(g, s) = Π<sub>j&lt;ℓ</sub> L\*(1 + s<sub>j</sub> − s<sub>ℓ</sub>, φ<sub>j</sub> × φ<sub>ℓ</sub>) · E<sub>P,Φ</sub>(g, s), a product of completed Rankin-Selberg L-functions. For the Borel case 1 + 1 + ... + 1 the factors are completed zeta values ζ\*(1 + s<sub>j</sub> − s<sub>ℓ</sub>).

## Main results

**Theorem (coefficients are symmetric; Theorem 6.3).** Let M = (m, 1, ..., 1). The M-th Fourier-Whittaker coefficient FW<sub>P,Φ</sub>(g, M, s) of E\*<sub>P,Φ</sub> satisfies FW<sub>P,Φ</sub>(g, M, s) = FW<sub>σP,σΦ</sub>(g, M, σs) for every σ in S<sub>r</sub>, where σ permutes the blocks of P, the factors of Φ and the entries of s together.
- Step 1: by Proposition 6.1 the coefficient is a product of adjoint L-values at 1, a sum of λ<sub>φ<sub>1</sub></sub>(c<sub>1</sub>)...λ<sub>φ<sub>r</sub></sub>(c<sub>r</sub>) c<sub>1</sub><sup>s<sub>1</sub></sup>...c<sub>r</sub><sup>s<sub>r</sub></sup> over c<sub>1</sub>...c<sub>r</sub> = m, and a Whittaker function.
- Step 2: σ only permutes the Langlands parameter of the Whittaker function, and Whittaker functions are invariant under such permutations.

**Theorem (functional equations; Theorem 6.8).** E\*<sub>P,Φ</sub>(g, s) = E\*<sub>σP,σΦ</sub>(g, σs) for all σ in S<sub>r</sub>. The proof is due to Langlands. The paper checks that his equations match those of the coefficients in Theorem 6.3.

**Conjecture (uniqueness; Conjecture 7.1).** If E\*<sub>P,Φ</sub>(g, s) = E\*<sub>σ′P,σ′Φ</sub>(g, μ(s)) for a real affine map μ, then μ is a permutation σ with σP = σ′P and σΦ = σ′Φ.
- Proved case (Proposition 7.7): all φ<sub>j</sub> equal.
- Conditional case (Proposition 7.10): μ linear, assuming Conjecture 7.8, that distinct Maass forms have distinct non-zero Hecke eigenvalues at some prime.

## Note, then ignore

- The shift by ρ<sub>P</sub>. The exponent is s + ρ<sub>P</sub>, not s, so that the functional equations become plain permutations. Safe to skip.
- Why normalise. The L-function product is not itself permutation invariant, which is exactly why multiplying by it fixes the coefficients. Note it, then move on.
- Constant term. The symmetry argument covers non-constant coefficients of type (m, 1, ..., 1) only. The authors conjecture that the constant term plus coefficients (1, ..., p, ..., 1) would suffice for a new proof. Safe to skip on a first reading.
- Convention for blocks of size 1. If n<sub>j</sub> = 1 the Langlands parameter of φ<sub>j</sub> is set to 0. Safe to skip.
- Non-unique matrices. A linear μ has several matrix representations because of the relation on s (Remark 7.16). Safe to skip.

## One next step

Read Example 3.1 on page 5, through the line E\*(g, s) = E\*(g, −s). It is the whole method in the SL(2,ℤ) case.
