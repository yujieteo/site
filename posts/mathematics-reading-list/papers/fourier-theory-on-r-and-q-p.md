source: https://shmakov.us/docs/Slides/Fourier.pdf
slogan: Each factor of the completed zeta function is one integral of a Gaussian, over ℝ or over ℚ<sub>p</sub>.
basis: the full text

## Before you start

These are 37 slides, and about half repeat the slide before with one more line. So the length is no threat. What may come up is impatience, or a small worry that p-adic integration is a subject you were meant to know already. Either feeling is welcome. If you want Tate's view of ζ without the measure theory, these slides compute every piece by hand. Enjoy one computation. Whether you reach the last slide matters less.

## The story

The completed zeta function is π<sup>−s/2</sup> Γ(s/2) ζ(s). It has a functional equation under s ↦ 1 − s. The Euler product gives ζ one factor 1/(1 − p<sup>−s</sup>) for each prime, and the Gamma factor looks like an intruder. The slides show it is the factor for the real numbers. Take the Gaussian e<sup>−πx<sup>2</sup></sup> on ℝ. It is its own Fourier transform, and its integral against |x|<sup>s</sup> is π<sup>−s/2</sup> Γ(s/2). Now take the indicator function of ℤ<sub>p</sub> on ℚ<sub>p</sub>. It is also its own Fourier transform, and the same integral gives 1/(1 − p<sup>−s</sup>). Multiply over all places and you get the completed zeta function as one integral over the ideles. The same method explains the Fourier coefficients of the non-holomorphic Eisenstein series.

## Main definitions

**Fourier transform on ℝ.** For a Schwartz function f on ℝ, the transform is f̂(u) = ∫ f(x) e<sup>−2πiux</sup> dx. The group ℝ is its own Pontryagin dual.

**Fourier transform on ℚ<sub>p</sub>.** Normalise Haar measure so that ℤ<sub>p</sub> has volume 1. Write [x]<sub>p</sub> for the fractional part of x, the terms of its p-adic expansion with negative powers of p. For a locally constant function f with compact support, f̂(u) = ∫ f(x) e<sup>−2πi[ux]<sub>p</sub></sup> dx.
- Such functions are called Bruhat–Schwartz functions. They play the role of Schwartz functions.

**p-adic Gaussian.** γ<sub>p</sub> is the indicator function of ℤ<sub>p</sub>. It equals 1 on ℤ<sub>p</sub> and 0 elsewhere.

**Zeta integral.** For a function f at one place, Z<sub>f</sub>(s) = ∫ |x|<sup>s</sup> f(x) d<sup>×</sup>x, where d<sup>×</sup>x is the multiplicative Haar measure.
- Over ℝ: d<sup>×</sup>x = dx/|x|.
- Over ℚ<sub>p</sub>: d<sup>×</sup>x = (p/(p − 1)) dx/|x|<sub>p</sub>, so that the units ℤ<sub>p</sub><sup>×</sup> have volume 1.

## Main results

**Claim (the factor at ℝ).** The Gaussian f(x) = e<sup>−πx<sup>2</sup></sup> satisfies f̂ = f, and Z<sub>f</sub>(s) = π<sup>−s/2</sup> Γ(s/2).
- Step 1: the transform of e<sup>−cx<sup>2</sup></sup> is (π/c)<sup>1/2</sup> e<sup>−π<sup>2</sup>u<sup>2</sup>/c</sup>. Put c = π.
- Step 2: substitute in the integral that defines Γ.

**Claim (the factor at p).** The function γ<sub>p</sub> satisfies γ̂<sub>p</sub> = γ<sub>p</sub>, and its zeta integral is 1/(1 − p<sup>−s</sup>).
- Step 1: split ℤ<sub>p</sub> minus 0 into the shells p<sup>k</sup>ℤ<sub>p</sub><sup>×</sup> for k ≥ 0.
- Step 2: each shell contributes p<sup>−ks</sup>, and the geometric series sums to the Euler factor.

**Claim (global zeta integral).** For a product function f = Π f<sub>v</sub> on the adeles of ℚ, with f<sub>v</sub> = γ<sub>p</sub> at all but finitely many primes, the integral of |x|<sup>s</sup> f(x) over the ideles is the product of the local zeta integrals for Re(s) > 1. For the global Gaussian this product is the completed zeta function.

**Claim (Eisenstein series).** In the Fourier expansion of the non-holomorphic Eisenstein series E<sub>s</sub>(z), the Bessel function K<sub>s−1/2</sub> is an inverse Fourier transform of (1 + u<sup>2</sup>)<sup>−s</sup> over ℝ. The divisor sum σ<sub>1−2s</sub>(n) is a product over p of inverse Fourier transforms of max(1, |u|<sub>p</sub>)<sup>−2s</sup> over ℚ<sub>p</sub>.

## Note, then ignore

- No proof of the functional equation. The slides state it on the first page as motivation and then build the local pieces. They stop before the Poisson summation step that proves it. Safe to know and move on.
- Fractional part. The character on ℚ<sub>p</sub> uses [x]<sub>p</sub> so that a rational number minus all its p-adic fractional parts is an integer. This makes the characters fit together on the adeles. Safe to skip on a first reading.
- Regions of convergence. Each p-adic integral holds only in a half plane, such as Re(s) > −1. Safe to skip, since the final formulas continue analytically.
- Repeated slides. Many slides are builds of the previous one. Safe to page past them.

## One next step

Open the slides at the one headed "Fourier Theory over ℚ<sub>p</sub>" with the example "Local factor ζ<sub>p</sub>(s)", around page 28, and check the geometric series yourself.
