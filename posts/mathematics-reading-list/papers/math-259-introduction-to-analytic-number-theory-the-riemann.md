source: http://people.math.harvard.edu/~elkies/M259.02/zeta1.pdf
slogan: Poisson summation makes the theta function symmetric, and that symmetry hands ζ its continuation to the whole plane and its functional equation.
basis: the full text

## Before you start

This is an eight-page lecture handout from Elkies's Harvard course, and half of it is exercises. The likely feeling is impatience, or a touch of embarrassment: the functional equation is so famous that you may think you ought to know the proof already. It is fine not to. If you want to see where the symmetry s ↔ 1−s comes from, the proof here takes one page. Read it for the enjoyment of the trick. The exercises are optional.

## The story

Euler's product ties ζ(s) to the primes, but the sum Σ n<sup>-s</sup> converges only for real part σ > 1. The zeros that govern the primes lie further left. Riemann wanted ζ on all of ℂ. A direct comparison of the sum with an integral reaches σ > 0, and each further step left costs more work. Riemann's idea gets everything at once. Multiply ζ by a Gamma factor and write the product ξ(s) as an integral of the theta function θ(u) against a power of u. Poisson summation shows that θ(1/u) = u<sup>1/2</sup>θ(u). Split the integral at u = 1 and flip the lower half with u ↦ 1/u. The result is a formula that is visibly unchanged by s ↦ 1−s, and it converges for every s.

## Main definitions

**Zeta function.** For σ > 1, ζ(s) = Σ n<sup>-s</sup> over n ≥ 1, which equals the product of 1/(1 − p<sup>-s</sup>) over primes p. Here s = σ + it.

**Gamma function.** For σ > 0, Γ(s) = ∫ x<sup>s</sup> e<sup>-x</sup> dx/x over x from 0 to ∞. It satisfies sΓ(s) = Γ(s+1).
- Continuation: the recursion extends Γ to a meromorphic function on ℂ with simple poles at 0, −1, −2, ...
- Zeros: Γ has none.

**Completed zeta function.** ξ(s) = π<sup>-s/2</sup> Γ(s/2) ζ(s).

**Theta function.** For Re(u) > 0, θ(u) = Σ exp(−πn<sup>2</sup>u) over all integers n. For σ > 0, 2ξ(s) = ∫ (θ(u) − 1) u<sup>s/2</sup> du/u over u from 0 to ∞.

## Main results

**Theorem (Riemann; stated on page 2).** The function ξ extends to a meromorphic function on ℂ. Its only poles are simple poles at s = 0 and s = 1, and ξ(s) = ξ(1−s). So ζ extends to a meromorphic function on ℂ whose only pole is a simple pole at s = 1. It has simple zeros at −2, −4, −6, ... and no other zeros outside the closed strip 0 ≤ σ ≤ 1.
- Step 1: split the theta integral at u = 1 and apply θ(1/u) = u<sup>1/2</sup>θ(u) to the part from 0 to 1.
- Step 2: this gives ξ(s) + 1/s + 1/(1−s) = ½ ∫ (θ(u) − 1)(u<sup>s/2</sup> + u<sup>(1−s)/2</sup>) du/u over u from 1 to ∞, which is symmetric and converges for all s.

**Lemma (theta inversion; equation (5)).** For Re(u) > 0, θ(1/u) = u<sup>1/2</sup> θ(u).
- Step 1: apply Poisson summation to f(x) = exp(−πux<sup>2</sup>).
- Step 2: the Fourier transform of f is u<sup>-1/2</sup> exp(−πy<sup>2</sup>/u), by the Gauss integral.

**Theorem (Poisson summation; equation (6)).** Let f : ℝ → ℂ be twice continuously differentiable, with (|x|<sup>r</sup> + 1)(|f(x)| + |f″(x)|) bounded for some r > 1. Let f̂ be its Fourier transform. Then Σ f(m) = Σ f̂(n), both sums over all integers and both absolutely convergent.
- Step 1: sum the translates f(x + m) to get a function F on ℝ/ℤ.
- Step 2: expand F in its Fourier series and set x = 0.

**Claim (number fields; a remark, not proved in the notes).** For a number field K with r<sub>1</sub> real and r<sub>2</sub> complex embeddings, degree n and discriminant d, set ξ<sub>K</sub>(s) = Γ(s/2)<sup>r<sub>1</sub></sup> Γ(s)<sup>r<sub>2</sub></sup> (4<sup>-r<sub>2</sub></sup> π<sup>-n</sup> |d|)<sup>s/2</sup> ζ<sub>K</sub>(s). Then ξ<sub>K</sub>(s) = ξ<sub>K</sub>(1−s). The notes point to Tate's thesis for a proof.

## Note, then ignore

- Two meanings of ξ. Some books multiply ξ by s<sup>2</sup> − s, or by half of that, to remove the poles. Elkies keeps the poles at 0 and 1. The functional equation is the same either way. Safe to skip.
- Sign in the Fourier transform. The notes use exp(2πixy), with a plus sign. For Poisson summation the sign makes no difference. Safe to skip.
- Hypotheses of Poisson summation. The smoothness and decay conditions are stronger than needed, and the notes say so. The Gaussian satisfies them with room to spare. Safe to skip.
- Jacobi's theta functions. Jacobi had four, in two variables. The θ here is his θ<sub>3</sub> at z = 0. Only this one is used. Safe to skip.
- Euler's Π notation. Euler wrote Π(s−1) for what is now Γ(s). It is a historical footnote. Safe to skip.

## One next step

Open the PDF at page 3 and read from "Assume this for the time being" to the displayed formula for ξ(s) + 1/s + 1/(1−s).
