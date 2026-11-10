source: https://arxiv.org/pdf/2511.22755
slogan: Finitely many primes build a self-adjoint operator, so its eigenvalues are real, and numerically they land on the first zeros of zeta.
basis: the introduction and the main theorem statements

## Before you start

The abstract says "a strategy toward a proof of the Riemann Hypothesis", and that phrase can raise suspicion, or a fear of being taken in. That wariness is fair, and you can keep it. The authors list the missing steps themselves in Section 8. What you may want is smaller and solid: a finite matrix, built from the primes up to 13, whose eigenvalues you could compute. Enjoy that picture first. Finishing can wait.

## The story

People have long wanted a self-adjoint operator whose eigenvalues are the imaginary parts of the zeros of ζ. Self-adjoint operators have real spectrum, so that would put every zero on the critical line. Nobody has one. The authors take Weil's quadratic form, and restrict it to functions living on the interval [λ<sup>−1</sup>, λ]. Then only prime powers up to λ<sup>2</sup> enter. They cut down to dimension 2N + 1 and take the eigenvector ξ of the smallest eigenvalue. Correcting the scaling operator by a rank-one term built from ξ gives a self-adjoint operator. Its spectrum is the zero set of the Fourier transform of ξ. With primes up to 13, the first 50 eigenvalues match the first 50 zeta zeros to between 55 and 3 decimal places.

## Main definitions

**Weil quadratic form QW<sub>λ</sub>.** Weil's explicit formula defines a functional Ψ on test functions on ℝ<sub>+</sub><sup>×</sup>: a term from the pole, minus an archimedean term, minus one term for each prime. The form is QW(f, g) = Ψ(f<sup>\*</sup> ∗ g), with convolution on the multiplicative group. QW<sub>λ</sub> is its restriction to L<sup>2</sup> of the interval [λ<sup>−1</sup>, λ].
- Finite primes: on this interval only the prime powers n ≤ λ<sup>2</sup> contribute.
- Bounded below: QW<sub>λ</sub> is lower bounded and lower semi-continuous, so it comes from a self-adjoint operator A<sub>λ</sub>.

**Scaling operator and the space E<sub>N</sub>.** D<sub>log</sub><sup>(λ)</sup> is the scaling operator on [λ<sup>−1</sup>, λ] with periodic boundary conditions. Put L = 2 log λ. Its eigenfunctions are V<sub>n</sub>(u) = L<sup>−1/2</sup> exp(2πin log(λu)/L) for n ∈ ℤ. E<sub>N</sub> is the span of the V<sub>n</sub> with |n| ≤ N, extended by zero outside the interval.

**Even-simple.** The restriction QW<sub>λ</sub><sup>N</sup> of the form to E<sub>N</sub> is even-simple when its smallest eigenvalue ε<sub>N</sub> is simple and the eigenvector ξ is invariant under u ↦ u<sup>−1</sup>.

**Dirichlet kernel vector δ<sub>N</sub>.** The vector in E<sub>N</sub> that represents the Dirichlet kernel. It approximates evaluation at the boundary of the interval. The eigenvector ξ is normalised by δ<sub>N</sub>(ξ) = 1.

## Main results

**Theorem (the perturbed operator; Theorem 1.1, proved as Theorem 5.10).** Assume ε<sub>N</sub> is simple and ξ is even, with δ<sub>N</sub>(ξ) = 1. Let D<sub>log</sub><sup>(λ,N)</sup> = D<sub>log</sub><sup>(λ)</sup> − |D<sub>log</sub><sup>(λ)</sup>ξ⟩⟨δ<sub>N</sub>|. Then this operator is self-adjoint on E′<sub>N</sub> ⊕ E<sub>N</sub><sup>⊥</sup>, where E′<sub>N</sub> = E<sub>N</sub>/ℂξ carries the inner product QW<sub>λ</sub><sup>N</sup> − ε<sub>N</sub>⟨ | ⟩. Its regularised determinant equals −i λ<sup>−iz</sup> ξ̂(z), where ξ̂ is the Fourier transform of ξ. The function ξ̂ is entire, all its zeros are real, and they are exactly the spectrum.
- Step 1: the commutator of the diagonal scaling matrix with the Weil matrix has rank two, which makes the rank-one correction natural.
- Step 2: self-adjointness rests on an extension of the Carathéodory–Fejér theorem for Toeplitz matrices, taken from an earlier paper.

**Theorem (discrete spectrum; Theorem 3.6 and Corollary 3.8).** The self-adjoint operator A<sub>λ</sub> attached to QW<sub>λ</sub> has discrete spectrum, bounded below. Its lowest eigenvalue μ<sub>λ</sub> decreases as λ grows. If μ<sub>λ</sub> tends to 0 as λ → ∞, then the Riemann Hypothesis holds.
- Step 1: the prime terms and the pole term are bounded, so only the archimedean term matters.
- Step 2: in Fourier space that term is multiplication by a function growing like log |t|, which gives a compact embedding.

**Claim (numerical evidence; Section 6).** Using only the primes ≤ 13, the spectrum reproduces the first 50 zeros of ζ(1/2 + is). The error runs from about 2.5 × 10<sup>−55</sup> for the first zero to about 10<sup>−3</sup> for the fiftieth.

**Conjecture (convergence; Sections 7 and 8).** As N and λ tend to ∞, the spectra converge to the zeros of ζ(1/2 + is), and the normalised determinants converge to Riemann's Ξ function. A proof would give the Riemann Hypothesis. The authors do not have one. They name two missing steps: show the even-simple condition for QW<sub>λ</sub>, and show that a function built from prolate wave functions approximates ξ well enough.

## Note, then ignore

- Changed inner product. The operator is self-adjoint for an inner product built from the Weil form, not for the usual L<sup>2</sup> one. This is what makes the theorem work. Safe to skip on a first reading.
- Antilinear in the first slot. The paper takes inner products antilinear in the first variable, which fixes the order in f<sup>\*</sup> ∗ g. Safe to skip.
- Section 4 formulas. The matrix of the form is written with hypergeometric, digamma and Hurwitz–Lerch functions so that it can be computed to high precision. Safe to skip.
- "Spectral triple" and "infrared". These are terms from noncommutative geometry for an operator with its algebra and Hilbert space, and for the low part of its spectrum. Safe to skip.
- Prolate wave operator. It enters only in Sections 7 and 8, as a tool for the unproved convergence. Safe to skip.

## One next step

Open the paper at page 2 and read Theorem 1.1 with the paragraph just before it, which says what E<sub>N</sub>, ξ and δ<sub>N</sub> are.
