source: https://people.reed.edu/~jerry/361/lectures/feqn.pdf
slogan: Write zeta as an integral of a theta function, and Poisson summation hands you the continuation and the symmetry s ↦ 1 − s.
basis: the full text

## Before you start

These are 18 pages of careful course notes, and every step is a small computation with π, Γ and powers of t. The likely feeling is impatience, or a fear of losing a factor and getting stuck. That is a fair thing to feel. The notes keep each normalisation in view so you do not have to hold it in your head. If you want to see why ζ(−1) = −1/12 is a real statement, it is here. Read for the one trick. Finishing is optional.

## The story

The sum Σ n<sup>−s</sup> defines ζ(s) only for Re(s) > 1. People want it on the whole plane, with a symmetry between s and 1 − s. The sum itself cannot be pushed left. Riemann's idea is to stop using the sum. Multiply ζ by π<sup>−s/2</sup>Γ(s/2). The product Z(s) is an integral of the theta function θ(t) = Σ e<sup>−πn²t</sup> against t<sup>s/2</sup>. Poisson summation gives θ(1/t) = t<sup>1/2</sup>θ(t). Fold the bad half of the integral, from 0 to 1, onto the good half, from 1 to ∞. The result converges for every s and is visibly unchanged under s ↦ 1 − s. Part 2 repeats the plot for Dirichlet L-functions. A Gauss sum does the extra work.

## Main definitions

**Theta function.** θ(t) = Σ<sub>n∈ℤ</sub> e<sup>−πn²t</sup> for t > 0. It tends quickly to 1 as t grows.
- For a primitive Dirichlet character χ of conductor N: θ(χ, t) = Σ<sub>n∈ℤ</sub> n<sup>δ</sup> χ(n) e<sup>−πn²t/N</sup>, with δ = 0 if χ is even and δ = 1 if χ is odd.

**Mellin transform.** The Mellin transform of f on the positive reals is ∫<sub>0</sub><sup>∞</sup> f(t) t<sup>s</sup> dt/t, where it converges. The measure dt/t is the Haar measure of the multiplicative group.

**Completed functions.** Z(s) = π<sup>−s/2</sup> Γ(s/2) ζ(s), and Λ(χ, s) = (π/N)<sup>−(s+δ)/2</sup> Γ((s+δ)/2) L(χ, s).
- Each is half the Mellin transform of its theta function, at s/2 or (s+δ)/2. For zeta, use θ(t) − 1.

**Gauss sum and root number.** τ(χ) = Σ<sub>m mod N</sub> χ(m) e<sup>2πim/N</sup>, and W(χ) = τ(χ)/(i<sup>δ</sup> N<sup>1/2</sup>). For primitive χ, |τ(χ)| = N<sup>1/2</sup>, so |W(χ)| = 1.

## Main results

**Theorem (theta transformation; Section 4).** For t > 0, θ(1/t) = t<sup>1/2</sup> θ(t).
- Step 1: The Gaussian e<sup>−πx²</sup> is its own Fourier transform, and dilating by r scales the transform by 1/r.
- Step 2: Poisson summation, Σ f(n) = Σ (Ff)(n), applied to the dilated Gaussian.

**Theorem (zeta; Section 6).** Z(s) extends to a meromorphic function on ℂ. Its only poles are simple poles at s = 0 and s = 1, and Z(1 − s) = Z(s).
- Step 1: For Re(s) > 1, Z(s) = ½ ∫<sub>0</sub><sup>∞</sup> (θ(t) − 1) t<sup>s/2</sup> dt/t.
- Step 2: Substitute t ↦ 1/t on (0, 1] and use the theta law. This gives ½ ∫<sub>1</sub><sup>∞</sup> (θ(t) − 1)(t<sup>s/2</sup> + t<sup>(1−s)/2</sup>) dt/t − 1/s − 1/(1 − s), which is entire apart from the two fractions.

**Theorem (Dirichlet L-functions; Sections 13 and 14).** Let χ be a nontrivial primitive Dirichlet character of conductor N. Then θ(χ, 1/t) = W(χ) t<sup>1/2+δ</sup> θ(χ̄, t). The function Λ(χ, s) extends to an entire function, and Λ(χ, s) = W(χ) Λ(χ̄, 1 − s).
- Step 1: Finite Fourier analysis on ℤ/Nℤ writes χ(n) as a Gauss sum times a sum of χ̄(m) e<sup>2πinm/N</sup>. Poisson summation with a shift x = m/N then applies.
- Step 2: θ(χ, t) decays fast at both 0 and ∞, so the Mellin integral converges for all s. No pole terms appear.

**Theorem (special values; Section 7).** ζ(1 − s) = 2(2π)<sup>−s</sup> Γ(s) cos(πs/2) ζ(s). Hence ζ(0) = −1/2, ζ(−1) = −1/12, and ζ(1 − k) = −B<sub>k</sub>/k for even k ≥ 2. The only zeros of ζ with Re(s) &lt; 0 are simple zeros at −2, −4, −6, and so on.

## Note, then ignore

- Which functions satisfy Poisson summation. The notes state a sufficient condition and say Fourier inversion is nontrivial. Gaussians satisfy everything. Safe to skip.
- The sign in the Gauss sum. τ<sub>n</sub>(χ) is the finite Fourier transform of χ at frequency −n, not n. This is a convention about conjugates. Safe to skip.
- Primitive versus general characters. The identity χ̄(n)τ(χ) = τ<sub>n</sub>(χ) needs χ primitive when gcd(n, N) > 1. The notes only treat primitive χ. Safe to skip.
- Conjugates in the functional equation. The right side carries χ̄, and W(χ)W(χ̄) = 1. The bars are easy to lose in a PDF copy. Safe to skip on a first pass.
- Sections 15 to 17. They show W(χ) = 1 for quadratic χ, rewrite the completed functions as products of local integrals over ℝ and ℚ<sub>p</sub>, and derive a cyclotomic conductor-discriminant formula. They are consequences, not part of the main argument. Safe to skip.

## One next step

Open the PDF at Section 6, on page 6, and follow the four-line computation that folds the integral from 0 to 1 onto 1 to ∞.
