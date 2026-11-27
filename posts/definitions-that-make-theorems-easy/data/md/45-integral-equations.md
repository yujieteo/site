### Volterra integration limits give uniqueness at every coupling

**Remember:** Past-only integration puts a factorial under each iterate.

*Rules out counterexamples.* MSC 45D05 (Volterra integral equations). arXiv math.CA, math.AP. Level 2: later undergraduate.

**Definition.** A linear Volterra equation of the second kind writes u(t) as a known function plus λ times the integral of K(t,s)u(s) from 0 to t. The kernel K supplies the integration weights. A Fredholm equation uses fixed integration limits.

**Problem.** On \[0,T\], assume the known function is continuous and K is continuous for 0 ≤ s ≤ t ≤ T. Each scalar λ gives exactly one continuous solution.

**How the definition helps.** The ordered integration times give each power of the integral operator a factorial denominator (our own). Our own proof uses this bound to sum the series for the inverse at every coupling. Our own counterexample is the fixed-limit equation u(x) − ∫₀¹ u(y) dy = 0, which every constant solves.

**Wikipedia:** [Volterra integral equation](https://en.wikipedia.org/wiki/Volterra_integral_equation). It says: “A linear Volterra equation of the second kind is x(t) = f(t) + ∫ₐᵗ K(t,s)x(s) ds.”

**Paper or page:** [The Non-zonal Rossby-Haurwitz Solutions of the 2D Euler Equations on a Rotating Ellipsoid](https://arxiv.org/abs/2310.17854v1). It says: “Then the unique solution g ∈ C(\[−π/2, 0\]) of the Volterra integral equation”

**Sources:** none listed. No primary source with a working link was found.

### Finite-rank Fredholm series terminate

**Remember:** A sampled kernel cannot have more rank than its separated terms.

*True by definition.* MSC 45B05 (Fredholm integral equations). arXiv math.CA. Level 3: graduate.

**Definition.** Define the Fredholm determinant by its integral series in λ. Its coefficient of degree n integrates the determinant of the matrix with entries K(xᵢ,xⱼ), divided by n!. A kernel has separated rank at most r if it sums at most r products a(x)b(y).

**Problem.** For a continuous separated kernel of rank at most r on a compact interval, the Fredholm determinant is a polynomial of degree at most r.

**How the definition helps.** Each product contributes a matrix of rank at most one, so every coefficient above degree r vanishes (our own). The eigenvalue definition gives another proof by counting nonzero eigenvalues with multiplicity (our own). Fredholm’s solvability theorem identifies what the zeros of this series mean for the integral equation (our own).

**nLab:** [Fredholm determinant](https://ncatlab.org/nlab/show/Fredholm+determinant). It says: “d is an entire function of λ such that d(λ) ≠ 0 iff the integral equation has a unique solution.”

**Sources:**

- [Ivar Fredholm, Sur une classe d’équations fonctionnelles (1903)](https://doi.org/10.1007/BF02421317)

### Resolvent kernels handle every forcing

**Remember:** Find one kernel and reuse it for every forcing.

*True by definition.* MSC 45D05 (Volterra integral equations). arXiv math.CA, math.AP. Level 3: graduate.

**Definition.** Write j ∗ u for the integral of j(t − s)u(s) from 0 to t. In the equation u + j ∗ u = g, the known function g may vary. Define one resolvent kernel r by r + j ∗ r = j.

**Problem.** Assume j, r and g are integrable on every interval \[0,T\]. Then g − r ∗ g solves the equation and is unique up to equality almost everywhere.

**How the definition helps.** The equation for r makes convolution by j and subtraction of convolution by r cancel in the composed rules (our own). Our own proof checks the composition in both orders by associativity. The work moves to proving that the resolvent exists and finding when it is integrable on the entire half-line (our own).

**Paper or page:** [Comparison between the Cauchy problem and the scattering problem for the Landau damping in the Vlasov-HMF equation](https://arxiv.org/abs/2103.15932v2). It says: “The solution f is then given by f(t) = g(t) − r ∗ g(t).”

**Sources:** none listed. No primary source with a working link was found.

### Sonine pairs invert convolution

**Remember:** One partner undoes the other after one ordinary derivative.

*True by definition.* MSC 45E10 (Integral equations of the convolution type (Abel, Picard, Toeplitz and Wiener-Hopf type)). arXiv math.CA. Level 3: graduate.

**Definition.** For positive time, convolution of k and h means integrating k(t − s)h(s) from 0 to t. Call the kernels Sonine partners if their convolution equals 1 almost everywhere. The unknown input enters the integral equation through convolution with k.

**Problem.** Assume both kernels and the input are integrable on every interval \[0,T\]. Convolving the output with h and differentiating its absolutely continuous representative recovers the input almost everywhere.

**How the definition helps.** The two kernels combine to ordinary integration, so our own proof ends by differentiating that integral. The work moves to finding a partner and justifying associativity by Fubini's theorem (our own).

**Paper or page:** [Trends, Directions for Further Research, and Some Open Problems of Fractional Calculus](https://arxiv.org/abs/2108.04241v1). It says: “\\begin{equation}   (\\mathbb {D}<sub>(k)</sub>\\,  \\mathbb {I}<sub>(\\kappa )</sub>\\,  f) (t) = f(t),\\  f\\in C<sub>-1</sub>(0,+\\infty ),\\  t&gt;0,\\end{equation}”

**Sources:** none listed. No primary source with a working link was found.
