source: https://arxiv.org/pdf/1411.3585
slogan: A divergent perturbation series already encodes its missing exponentially small terms, and the singularities of its Borel transform tell you where to find them.
basis: the introduction and the main theorem statements

## Before you start

The title has three unfamiliar terms, and "alien calculus" sounds like a private language. A natural feeling is suspicion that this is physics folklore dressed as mathematics, and that your time will be wasted. Keep the suspicion. It is a fair guard. The notes are 45 pages and built from worked examples. If divergent series such as Σ (−1)<sup>n</sup> n! have ever bothered you, Example 1 sums one in a page. Play with that example first. Finishing the notes matters less.

## The story

Perturbation theory writes an observable as a power series in a small coupling. In quantum mechanics and field theory the coefficients grow like n!, so the series diverges for every non-zero coupling. Borel's method divides the n-th coefficient by n!, sums the new series to a function, and integrates it back with a Laplace transform. The block is that this function often has singularities on the integration path. You can pass above or below them, and the two answers differ by terms like e<sup>−z</sup>, which no power series in 1/z can see. Écalle's idea is that this failure carries information. Near each singularity the function looks like the Borel transform of another series, the one that multiplies the missing exponential. So the series are tied together. Collect them into a trans-series, and one balanced choice of path gives a real answer with no ambiguity.

## Main definitions

**Borel transform and Laplace transform.** For a formal series φ̃(z) = Σ c<sub>n</sub> z<sup>−n−1</sup>, the Borel transform is φ̂(ζ) = Σ c<sub>n</sub> ζ<sup>n</sup>/n!. The Laplace transform in direction θ is the integral of e<sup>−zζ</sup> φ̂(ζ) along the ray from 0 to e<sup>iθ</sup>∞. The Borel sum is the Laplace transform of the Borel transform.
- Here z = 1/g, where g is the coupling. Products of series become convolutions of Borel transforms.

**Simple resurgent function.** A germ φ̂ at the origin that continues analytically along every path of finite length avoiding a finite set of singular points, and that near each singular point ω has the form α/(2πi(ζ − ω)) + (1/2πi) Φ̂(ζ − ω) log(ζ − ω) + regular, with Φ̂ analytic at 0.

**Stokes automorphism and alien derivative.** Let S<sub>θ</sub><sup>+</sup> and S<sub>θ</sub><sup>−</sup> be the lateral Borel sums that pass above and below all singularities on the ray θ. The Stokes automorphism 𝔖<sub>θ</sub> is defined by S<sub>θ</sub><sup>+</sup> = S<sub>θ</sub><sup>−</sup> ∘ 𝔖<sub>θ</sub>. The alien derivatives Δ<sub>ω</sub> are defined by 𝔖<sub>θ</sub> = exp(Σ e<sup>−ωz</sup> Δ<sub>ω</sub>), summed over the singular points ω on the ray.
- For one simple singularity, Δ<sub>ω</sub>φ̃ is read off from the residue α and the series whose Borel transform is Φ̂.

**Trans-series.** A formal sum Σ c<sub>n</sub><sup>(0)</sup> g<sup>n</sup> + Σ<sub>i</sub> e<sup>−S<sub>i</sub>/g</sup> Σ c<sub>n</sub><sup>(i)</sup> g<sup>n</sup>. The first part is perturbation theory. Each further part is a series around another saddle point, such as an instanton with action S<sub>i</sub>.

## Main results

**Proposition (when the Borel transform converges; Proposition 1).** The Borel transform of Σ c<sub>n</sub> z<sup>−n−1</sup> has a positive radius of convergence if and only if the series is of Gevrey-1 type, that is |c<sub>n</sub>| = O(C<sup>n</sup> n!).
- Example: for c<sub>n</sub> = (−1)<sup>n</sup> n! the Borel transform is 1/(1 + ζ), and the Borel sum is e<sup>z</sup>Γ(0; z).
- Example: for c<sub>n</sub> = n! it is 1/(1 − ζ), and the two lateral sums differ by 2πi e<sup>−z</sup>.

**Proposition (resurgent functions form an algebra; Proposition 2).** Simple resurgent functions, with a multiple of the δ-function added as unit, form a subalgebra of the convolution algebra. So sums and products of resurgent series are again resurgent. The notes state this without proof and cite Sauzin for the details.

**Claim (Écalle's bridge equation; equation (6.13)).** Let Φ(z, σ) be a trans-series solution, with parameter σ, of a non-linear problem with instanton action S<sub>0</sub>. Then e<sup>−kS<sub>0</sub>z</sup>Δ<sub>kS<sub>0</sub></sub>Φ = A<sub>k</sub>(σ) ∂<sub>σ</sub>Φ for some A<sub>k</sub>(σ). The notes argue this for first-order equations, with a Riccati equation as the worked case.
- Step 1: the dotted alien derivative commutes with ∂<sub>z</sub>, so the left side solves the linearised equation.
- Step 2: ∂<sub>σ</sub>Φ solves the same first-order linear equation, so the two are proportional.

**Claim (median resummation; Definition 14 and equation (7.38)).** Define S<sub>med</sub> = S<sub>0</sub><sup>−</sup> ∘ 𝔖<sub>0</sub><sup>−1/2</sup> = S<sub>0</sub><sup>+</sup> ∘ 𝔖<sub>0</sub><sup>1/2</sup>. It sums series with real coefficients to functions that are real for z > 0. In a zero-dimensional toy integral it agrees with the decomposition of the integration contour into steepest-descent paths (Lefschetz thimbles).

## Note, then ignore

- No constant term. Series start at z<sup>−1</sup> so that the Borel transform is a function. A constant is added back later as a multiple of δ. Safe to skip.
- Multiplicative and convolutive models. These are names for working with φ̃ or with φ̂. Table 1 translates between them. Safe to skip.
- Endless continuability. Écalle's definition is more general than the one used here. The notes say the simpler one suffices. Safe to skip.
- Faster growth. If c<sub>n</sub> grows like (2n)!, a change of variable z → w<sup>2</sup> brings it back to Gevrey-1. Safe to skip.
- Why observables are resurgent. Section 8 offers a path-integral reason and calls it speculation. In quantum field theory this is not a theorem. Safe to skip on a first reading.

## One next step

Open the notes at pages 14 and 15 and read only Example 4, where the series Σ n! z<sup>−n−1</sup> gives two sums that differ by 2πi e<sup>−z</sup>.
