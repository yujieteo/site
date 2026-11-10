source: https://ctnt-summer.math.uconn.edu/wp-content/uploads/sites/1632/2016/02/Conradproject.pdf
slogan: The weight 2 Eisenstein series fails modularity by one explicit term, and the functional equation of ζ produces that term through a contour shift.
basis: the full text

## Before you start

This is a three-page project sheet, not a paper. It states the result and then hands you six exercises. The feeling it may raise is a small dread of being tested: the proof is yours to write, and nobody shows the answer. That is a natural reaction to a problem sheet, and there is no need to talk yourself out of it. The sheet shows where the odd extra term in E<sub>2</sub> comes from, which textbooks tend to hide in a convergence trick. Read it for the plan first. Working the exercises can wait, or never happen.

## The story

For even k ≥ 4 the Eisenstein series E<sub>k</sub> is a modular form. Its q-expansion suggests a weight 2 version, E<sub>2</sub>(τ) = 1 − 24 Σ σ<sub>1</sub>(n)q<sup>n</sup>. This function is holomorphic and periodic, but it cannot be modular, because SL<sub>2</sub>(ℤ) has no non-zero modular forms of weight 2. The failure is exact: one extra term linear in τ. Textbooks prove this by rearranging a double series that does not converge absolutely, or by Hecke summation. The sheet takes another road. Attach to E<sub>2</sub> its Dirichlet series, which is a product of two zeta functions. Recover E<sub>2</sub> on the imaginary axis from that series by Mellin inversion. Move the contour to the left. The functional equation of ζ turns the moved integral back into E<sub>2</sub> at i/y, and the residues crossed on the way are the extra term.

## Main definitions

**Fake Eisenstein series of weight 2.** E<sub>2</sub>(τ) = 1 − 24 Σ<sub>n≥1</sub> σ<sub>1</sub>(n)q<sup>n</sup>, with q = e<sup>2πiτ</sup> and σ<sub>1</sub>(n) the sum of the divisors of n. It is holomorphic on the upper half-plane, satisfies E<sub>2</sub>(τ + 1) = E<sub>2</sub>(τ), and tends to 1 as τ → i∞.

**Completed zeta function.** Z(s) = π<sup>−s/2</sup>Γ(s/2)ζ(s). It satisfies Z(s) = Z(1 − s) for all complex s.

**The pair g and h.** For coefficients a<sub>n</sub> of polynomial growth, a<sub>n</sub> = O(n<sup>r</sup>), set h(y) = Σ a<sub>n</sub>e<sup>−2πny</sup> for y > 0 and g(s) = (2π)<sup>−s</sup>Γ(s) Σ a<sub>n</sub>n<sup>−s</sup> for Re(s) > r + 1.
- Step 1: g is the Mellin transform of h, that is, g(s) = ∫<sub>0</sub><sup>∞</sup> h(t)t<sup>s</sup> dt/t.
- Step 2: Fourier inversion gives h(y) back as (1/2πi) times the integral of g(s)y<sup>−s</sup> along a vertical line Re(s) = c with c > r + 1.

## Main results

**Theorem (transformation law; formula (1.1)).** For all τ in the upper half-plane, E<sub>2</sub>(−1/τ) = τ<sup>2</sup>E<sub>2</sub>(τ) − (6i/π)τ.
- Step 1: both sides are holomorphic, so it is enough to prove the identity on the positive imaginary axis.
- Step 2: with τ = iy it reads E<sub>2</sub>(i/y) = −y<sup>2</sup>E<sub>2</sub>(iy) + (6/π)y for all y > 0, which is formula (1.2).

**Claim (the Dirichlet series; exercise 3).** Take h(y) = E<sub>2</sub>(iy) − 1. Then for Re(s) > 3, g(s) = −24(2π)<sup>−s</sup>Γ(s)ζ(s)ζ(s − 1) = −(6/π)(s − 1)Z(s)Z(s − 1). The functional equation of Z then gives g(2 − s) = −g(s) for all s.
- Step 1: the Dirichlet series of σ<sub>1</sub>(n) is ζ(s)ζ(s − 1).
- Step 2: the duplication formula for Γ rewrites the Gamma factor in terms of Z(s) and Z(s − 1).

**Claim (the contour shift; exercises 4 to 6).** The function g has exactly three poles. Moving the line of integration from Re(s) = 4 to Re(s) = −2 gives E<sub>2</sub>(iy) = 6/(πy) − 1/y<sup>2</sup> + (1/2πi)∫ g(s)y<sup>−s</sup> ds along Re(s) = −2. The relation g(2 − s) = −g(s) turns this into E<sub>2</sub>(iy) = 6/(πy) − (1/y<sup>2</sup>)E<sub>2</sub>(i/y).
- Step 1: the residue theorem supplies the terms 6/(πy) and −1/y<sup>2</sup>, and cancels the constant 1.
- Step 2: substitute s ↦ 2 − s in the remaining integral to recognise −(1/y<sup>2</sup>)(E<sub>2</sub>(i/y) − 1).

The sheet states these as exercises and gives no written proofs.

## Note, then ignore

- Fourier convention. The sheet puts the plus sign in the transform and the minus sign in the inversion formula. Other books differ, and the choice only affects intermediate lines. Safe to skip on a first reading.
- Decay on vertical lines. Moving the contour needs g to decay far from the real axis. The sheet points to the complex Stirling formula for this. Safe to skip.
- Sign errors in residues. The sheet warns about them because the three residues must combine exactly. It matters when you compute, not when you read. Safe to skip.
- Riemann hypothesis. It is mentioned in the background and the sheet says it is not needed. Safe to skip.
- Growth bound. The estimate σ<sub>1</sub>(n) = O(n<sup>2</sup>) is crude. It only fixes a half-plane where everything converges. Safe to skip.

## One next step

Open the sheet and read only the Introduction on page 1, down to formula (1.2). Then glance at exercise 3 on page 3 to see the two zeta functions appear.
