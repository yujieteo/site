source: https://shmakov.us/docs/Slides/Tate.pdf
slogan: Do Riemann's theta-function proof once on the adeles, and every zeta and Hecke L-function gets its functional equation from one integral.
basis: the full text

## Before you start

These are slides, 35 pages with many repeats, and they move from ℤ to adeles in a few frames. The likely feeling is a fear of being too slow for the pace, since slides leave out the talking. That feeling makes sense. Nothing here needs to be absorbed at slide speed. If you want to know why the Γ-factors and the discriminant sit where they do in a functional equation, this deck shows it. Enjoy the single computation in the middle. The rest can wait.

## The story

Riemann, Dedekind and Dirichlet each have a completed L-function with a functional equation under s ↦ 1 − s. Each classical proof uses its own theta function, and the Γ-factors and discriminant powers look ad hoc. Tate's idea is to run the proof once, on the adele ring A<sub>K</sub> of a number field K. The adeles are self-dual, so Fourier analysis and Poisson summation over K ⊂ A<sub>K</sub> work as they do for ℤ ⊂ ℝ. A zeta integral over the ideles replaces the Mellin transform. Split the ideles into norm ≥ 1 and norm ≤ 1, flip the second part with Poisson summation, and the functional equation falls out. The Γ-factors are then just the local integrals at the real and complex places.

## Main definitions

**Adeles and ideles.** A<sub>K</sub> is the restricted product of all completions K<sub>v</sub>: families (x<sub>v</sub>) with x<sub>v</sub> in the local integers O<sub>v</sub> for all but finitely many finite v. The idele group I<sub>K</sub> is its unit group, with x<sub>v</sub> a local unit for almost all v. K sits diagonally in A<sub>K</sub>, and K<sup>×</sup> in I<sub>K</sub>.

**Schwartz-Bruhat functions.** S(A<sub>K</sub>) is the span of products f = Π f<sub>v</sub>.
- At an Archimedean place, f<sub>v</sub> is smooth with rapid decay.
- At a finite place, f<sub>v</sub> is locally constant with compact support, and equals the indicator of O<sub>v</sub> for almost all v.

**Fourier transform and theta function.** Fix a nontrivial character of A<sub>K</sub>/K. The Fourier transform f̂ is the integral of f against it. The theta function is θ<sub>f</sub>(x) = Σ<sub>α∈K</sub> f(αx) for an idele x.

**Zeta integral.** For a Hecke character χ of I<sub>K</sub>/K<sup>×</sup> and f in S(A<sub>K</sub>), Z<sub>f</sub>(χ, s) = ∫<sub>I<sub>K</sub></sub> |x|<sup>s</sup> χ(x) f(x) d<sup>×</sup>x for Re(s) > 1. For a product f it factors into local zeta integrals over the K<sub>v</sub><sup>×</sup>.

## Main results

**Theorem (global Poisson summation; stated on the slides).** For f in S(A<sub>K</sub>), Σ<sub>x∈K</sub> f(x) = Σ<sub>ξ∈K</sub> f̂(ξ). As a consequence, θ<sub>f</sub>(x) = |x|<sup>−1</sup> θ<sub>f̂</sub>(1/x).

**Theorem (functional equation of zeta integrals).** For f in S(A<sub>K</sub>) and a Hecke character χ, Z<sub>f</sub>(χ, s) continues analytically, with pole terms κ<sub>K</sub> f̂(0)/(s − 1) − κ<sub>K</sub> f(0)/s, and Z<sub>f</sub>(χ, s) = Z<sub>f̂</sub>(χ<sup>−1</sup>, 1 − s).
- Step 1: Unfold over K<sup>×</sup> to get an integral of θ<sub>f</sub> − f(0) over I<sub>K</sub>/K<sup>×</sup>. Split into |x| ≥ 1 and |x| ≤ 1. The first part is entire.
- Step 2: On |x| ≤ 1 substitute x ↦ 1/x and apply the theta equation. The result is symmetric under s ↦ 1 − s, f ↦ f̂, χ ↦ χ<sup>−1</sup>.

**Theorem (Riemann and Dedekind zeta recovered).** Take χ trivial, the Gaussian at each Archimedean place and the indicator of O<sub>v</sub> at each finite place.
- Over ℚ: the local integrals are π<sup>−s/2</sup>Γ(s/2) and 1/(1 − p<sup>−s</sup>), so Z<sub>f</sub>(s) = π<sup>−s/2</sup>Γ(s/2)ζ(s), and f̂ = f.
- Over K: the test function at a ramified place is not self-dual. Comparing Z<sub>f</sub> with Z<sub>f̂</sub> produces the power of |Δ<sub>K</sub>| in |Δ<sub>K</sub>|<sup>s/2</sup> Γ<sub>ℝ</sub>(s)<sup>r<sub>1</sub></sup> Γ<sub>ℂ</sub>(s)<sup>r<sub>2</sub></sup> ζ<sub>K</sub>(s), which is invariant under s ↦ 1 − s.

**Theorem (volume of norm-one idele classes; quoted).** I<sub>K</sub><sup>1</sup>/K<sup>×</sup> is compact, and its volume is κ<sub>K</sub> = 2<sup>r<sub>1</sub></sup>(2π)<sup>r<sub>2</sub></sup> h<sub>K</sub> R<sub>K</sub> / (w<sub>K</sub> |Δ<sub>K</sub>|<sup>1/2</sup>). This is the residue in the class number formula.

## Note, then ignore

- Haar measure normalisations. The slides normalise several measures in passing, and the stated normalisations do not all sit together cleanly. They only change constants such as κ<sub>K</sub>. Safe to skip on a first reading.
- Sign of the discriminant exponent. The motivation slide writes |Δ<sub>K</sub>|<sup>−s/2</sup> in the completed Dedekind zeta. The standard form has |Δ<sub>K</sub>|<sup>s/2</sup>. Treat it as a slip. Safe to skip.
- Pole terms and χ. The slides write the two pole terms without saying for which χ they survive. For the zeta examples χ is trivial, so the question does not arise. Safe to skip.
- The condition on χ at infinity. χ is assumed trivial on the positive reals embedded in the Archimedean places. This fixes the choice of s. Safe to skip.
- Compactness lemma. Compactness of I<sub>K</sub><sup>1</sup>/K<sup>×</sup> is credited to Fujisaki and implies finiteness of the class number and the unit theorem. It is used here only to make an integral finite. Safe to skip.

## One next step

Open the slides and go to the frame titled "Zeta Integrals: Functional Equation" that begins "Putting it all together". Read that one frame.
