source: https://arxiv.org/pdf/0903.2472
slogan: Four methods compute every loop of complex Chern-Simons theory on a hyperbolic 3-manifold, and the coefficients appear to be algebraic numbers.
basis: the introduction and the main theorem statements

## Before you start

This is a 60-page physics paper with path integrals, Feynman diagrams and quantum dilogarithms. You may feel uneasy that the central objects are not rigorously defined, and unsure how much to trust. Keep that unease while you read. If you want to see a quantum field theory produce numbers in a number field from a knot complement, this paper does it by hand for the figure-eight knot. Read it as a set of worked experiments.

## The story

Chern-Simons theory with a compact gauge group gives the Jones polynomial and finite-type invariants, with rational perturbative coefficients. Replace SU(2) by SL(2, ℂ) and the theory changes character. The Hilbert spaces become infinite-dimensional, and the natural saddle point on a hyperbolic 3-manifold is the flat connection that encodes the hyperbolic metric. Nobody had a practical way to compute the loop corrections around that connection, because Feynman diagrams become unmanageable. The authors line up four routes to the same series: diagrams, quantisation of the moduli space of flat connections, analytic continuation of the coloured Jones polynomial, and a new integral built from an ideal triangulation. Used together they give all loop orders. For the figure-eight knot they reach eight loops.

## Main definitions

**Perturbative partition function.** For a 3-manifold M and a homomorphism ρ : π<sub>1</sub>(M) → G<sub>ℂ</sub>, the series Z<sup>(ρ)</sup>(M; ħ) = exp( S<sub>0</sub>/ħ − (δ/2) log ħ + Σ<sub>n≥0</sub> S<sub>n+1</sub> ħ<sup>n</sup> ). Here ħ = 2πi/t, with t the coupling, and S<sub>n</sub> is the sum of n-loop Feynman diagrams around the flat connection given by ρ.

**Geometric representation.** For a complete hyperbolic 3-manifold M = H<sup>3</sup>/Γ of finite volume, the discrete faithful representation π<sub>1</sub>(M) → PSL(2, ℂ) with image Γ. Its flat connection is built from the vielbein and spin connection of the hyperbolic metric.

**Arithmetic quantum field theory.** A perturbative theory is arithmetic if, for all n > 1, the coefficients S<sub>n</sub> lie in one algebraic number field K, and S<sub>1</sub> lies in ℚ·log K.

**State integral model.** A finite-dimensional integral attached to an ideal triangulation of M. The integrand is a product of quantum dilogarithms, one per tetrahedron, times the exponential of a quadratic polynomial in the integration variables.
- It replaces the state sum of the compact theory, because the labels are now continuous.

## Main results

**Claim (physics argument; shape of the expansion, equations 1.8 and 2.2).** The leading term S<sub>0</sub> is the classical Chern-Simons functional of the flat connection. The integer δ equals h<sup>1</sup> − h<sup>0</sup>, the difference of dimensions of the cohomology of M with coefficients in the flat bundle. The one-loop term S<sub>1</sub> is expressed through the Ray-Singer torsion.
- The perturbative series also factorises into a holomorphic part in t and an antiholomorphic part in t̄ (equation 1.5). The exact partition function does not.

**Claim (physics argument; state integral, equation 1.18).** For a hyperbolic 3-manifold with an ideal triangulation, the state integral model computes Z<sup>(ρ)</sup>(M; ħ) to all orders. The construction builds on Hikami's invariant and is stated for SL(2, ℂ) and hyperbolic M only.
- Step 1: assign a quantum dilogarithm to each tetrahedron, with its shape parameter as argument.
- Step 2: integrate over the internal variables along a contour chosen by ρ, then expand by stationary phase.

**Conjecture (arithmeticity; Conjecture 1).** Let M be a geodesically complete hyperbolic 3-manifold of finite volume and ρ the geometric representation. Then perturbative Chern-Simons theory with gauge group PSL(2, ℂ) or SL(2, ℂ) around ρ is arithmetic. The authors add the sharper guess that K is the trace field ℚ(tr Γ). The evidence is numerical.

**Claim (figure-eight knot; Section 4, Table 2).** For the complement of the figure-eight knot the authors compute S<sub>n</sub> up to eight loops in more than one way, and the answers agree. Its trace field is ℚ(√−3).
- The comparison with the coloured Jones polynomial is the generalised volume conjecture (equation 1.15), itself a conjecture.

## Note, then ignore

- Normalisation of ħ. Rescaling ħ by λ multiplies S<sub>n</sub> by λ<sup>1−n</sup>, so arithmeticity is only meaningful with ħ fixed up to rational factors. Safe to skip on a first reading.
- The two couplings t and t̄. They need not be complex conjugates, and consistency puts conditions on them. Perturbation theory uses only t, so you can skip this.
- The trivial connection. Around ρ = 0 the complex theory reproduces the compact theory with ħ made complex. It is the non-abelian ρ that is new. Safe to skip.
- Normalising by S<sup>3</sup>. Some formulas divide by the partition function of the 3-sphere. This changes only the low-order terms. Safe to skip.
- Periods. The authors first argue that S<sub>n</sub> should be periods, then conjecture the stronger algebraic statement. The weaker claim is safe to skip.

## One next step

Open the paper at Section 2.1 (page 12) and read only the Definition of an arithmetic theory and Conjecture 1 below it.
