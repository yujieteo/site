source: https://archive.mpim-bonn.mpg.de/id/eprint/2346/1/preprint_1992_50.pdf
slogan: Adding the zeros of two zeta functions gives a tensor product, so Spec ℤ × Spec ℤ gets a zeta function before it gets a definition.
basis: the introduction and the main theorem statements

## Before you start

These notes are openly speculative, and that can raise unease: you may not be able to tell which statements are proved and which are hopes. That unease is a fair response, and Manin shares it in print. He calls absolute motives "mythical animals". If you want to see where the phrase "field with one element" earns its keep, this is an early source. Read it as a story first. Sorting theorem from dream can wait.

## The story

A curve over 𝔽<sub>q</sub> has a zeta function that splits by weight. The numerator is a determinant of Frobenius on H<sup>1</sup>. The denominator comes from H<sup>0</sup> and H<sup>2</sup>. Deninger wrote the completed Riemann zeta function in the same shape: a regularised product over the zeros on top, and the two factors s/2π and (s−1)/2π below. So Spec ℤ looks like a curve. Then what is the surface Spec ℤ × Spec ℤ? No such product exists. Kurokawa's idea is to skip the space and build its zeta function directly. Over 𝔽<sub>q</sub>, a tensor product of motives multiplies Frobenius eigenvalues, so zeros add. Do the same to the zeros of ζ. Manin turns this into rules for "absolute motives", known only through their zeta functions, and finds an absolute Tate motive 𝕋 with zeta function (s−1)/2π.

## Main definitions

**Zeta-regularised product.** For a family of non-zero complex numbers λ with chosen arguments, form the Dirichlet series Σ λ<sup>−z</sup>. If it converges for large Re(z) and continues holomorphically to a neighbourhood of z = 0, the regularised product of the λ is exp of minus the derivative at z = 0. For an operator Φ with spectrum Λ, DET(s − Φ) means the regularised product of the s − λ.

**Kurokawa tensor product.** Given two functions with zero sets {x<sub>i</sub>} and {y<sub>j</sub>} and multiplicities m<sub>i</sub>, n<sub>j</sub>, their tensor product is the function whose zeros are the sums x<sub>i</sub> + y<sub>j</sub> with multiplicities m<sub>i</sub>n<sub>j</sub>, taken up to a factor without zeros.
- Additive case: zeros add. This is the rule for global zetas in the variable s.
- Multiplicative case: zeros multiply. This is the usual rule for Frobenius eigenvalues in the variable q<sup>−s</sup>.

**Left directed family.** A discrete set Λ ⊂ ℂ with multiplicities such that only finitely many points lie to the right of any vertical line, and the total multiplicity in Re(λ) ≥ −H grows at most like a power of H. Its theta function is θ(t) = Σ m<sub>λ</sub> e<sup>λt</sup>, which converges for all t > 0.

**Absolute motive (rules of the game).** An object M known only through an entire or meromorphic function Z(M, s). The rules are Z(M ⊕ N) = Z(M)·Z(N), Z(M ⊗ N) = Z(M) ⊗ Z(N) in Kurokawa's sense, and Z of the dual is Z(M, −s). M is pure of absolute weight w if its zeros lie on Re(s) = w/2.

## Main results

**Claim (Deninger's formula, quoted as (1.5)).** Up to an elementary factor, the Riemann zeta function completed by its Gamma factor equals the regularised product of (s−ρ)/2π over the non-trivial zeros ρ, divided by (s/2π)·((s−1)/2π). Manin says the equality with the regularised product is a theorem of Deninger for large Re(s). Reading the product as DET of an "absolute Frobenius" on a new cohomology theory is a conjecture.

**Proposition (Tate twist; Proposition 1.6.1).** Define the absolute Tate motive by Z(𝕋, s) = (s−1)/2π. For a Grothendieck motive over 𝔽<sub>q</sub> or a Deligne motive over ℚ, a Tate twist of M corresponds to tensoring its absolute motive with a power of 𝕋.
- Step 1: a Tate twist by n shifts the variable: Z(M(n), s) = Z(M, s+n).
- Step 2: tensoring with a function that has one zero shifts all zeros, by the additive rule.

**Proposition (tensor products exist; Proposition 2.2.3).** If two families are left directed, their tensor product is defined and left directed. Its theta function is the product of the two theta functions.

**Theorem (continuation; Theorem 2.7).** Let Λ be a left directed family whose theta function has an asymptotic expansion as t → 0 in powers of t with polynomial coefficients in log t. Then the two-variable zeta function Σ (s−λ)<sup>−z</sup> continues meromorphically in z, for s outside horizontal cuts to the left of the points of Λ. I did not check the exact form of the pole conditions.
- Step 1: write the zeta function as a Mellin transform of e<sup>−st</sup>θ(t).
- Step 2: read off poles in z from the expansion of θ at t = 0.

## Note, then ignore

- Choice of arguments. A regularised product depends on the branch chosen for each λ<sup>−z</sup>. Changing finitely many branches changes nothing. Safe to skip on a first reading.
- "Equal up to a factor". Functions are compared up to exponentials of polynomials, since these have no zeros. Safe to skip.
- Zeros of ζ ⊗ ζ. The naive rule fails here because ρ and 1−ρ are both zeros, so a sum can arise in infinitely many ways. Kurokawa modifies the rule. Safe to skip at first.
- Logarithms in the expansion. Manin allows log t terms because his examples need them. This is a technical widening of earlier work. Safe to skip.
- Gamma factors are not pure. The archimedean factors involve infinitely many negative weights, and Manin only speculates on why. Safe to skip.

## One next step

Open the PDF and read §1.1 only, up to the sentence that introduces the absolute Tate motive. Compare formulas (1.4) and (1.5) side by side.
