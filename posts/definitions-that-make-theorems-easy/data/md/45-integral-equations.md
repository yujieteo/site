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

### Frequency halves invert Hilbert equations

**Remember:** Divide separately on the two frequency halves.

*True by definition.* MSC 45E05 (Integral equations with kernels of Cauchy type), 44A15. arXiv math.FA. Level 3: graduate.

**Definition.** Define the Hilbert transform H on square-integrable functions by multiplying Fourier coefficients by −i at positive frequencies and i at negative frequencies. The usual integral definition removes a symmetric interval around the singularity before taking a limit.

**Problem.** Take complex constants a and b and consider aI + bH on square-integrable functions on the line. It is invertible exactly when a − ib and a + ib are both nonzero.

**How the definition helps.** The multiplier definition splits the equation into two scalar equations (our own). When both scalars are nonzero, their reciprocals give a bounded inverse (our own). A zero scalar kills every function supported in frequency on that half-line (our own). The work lies in proving the integral and multiplier definitions agree and that the Fourier transform preserves the norm (our own).

**Wikipedia:** [Hilbert transform](https://en.wikipedia.org/wiki/Hilbert_transform). It says: “the phase of the negative frequency components of u(t) by +90°”

**Sources:** none listed. No primary source with a working link was found.

### Sonine pairs invert convolution

**Remember:** One partner undoes the other after one ordinary derivative.

*True by definition.* MSC 45E10 (Integral equations of the convolution type (Abel, Picard, Toeplitz and Wiener-Hopf type)). arXiv math.CA. Level 3: graduate.

**Definition.** For positive time, convolution of k and h means integrating k(t − s)h(s) from 0 to t. Call the kernels Sonine partners if their convolution equals 1 almost everywhere. The unknown input enters the integral equation through convolution with k.

**Problem.** Assume both kernels and the input are integrable on every interval \[0,T\]. Convolving the output with h and differentiating its absolutely continuous representative recovers the input almost everywhere.

**How the definition helps.** The two kernels combine to ordinary integration, so our own proof ends by differentiating that integral. The work moves to finding a partner and justifying associativity by Fubini's theorem (our own).

**Paper or page:** [Trends, Directions for Further Research, and Some Open Problems of Fractional Calculus](https://arxiv.org/abs/2108.04241v1). It says: “\\begin{equation}   (\\mathbb {D}<sub>(k)</sub>\\,  \\mathbb {I}<sub>(\\kappa )</sub>\\,  f) (t) = f(t),\\  f\\in C<sub>-1</sub>(0,+\\infty ),\\  t&gt;0,\\end{equation}”

**Sources:** none listed. No primary source with a working link was found.

### Squared radii simplify Abel inversion

**Remember:** Two half integrals give one ordinary integral.

*True by definition.* MSC 45E10 (Integral equations of the convolution type (Abel, Picard, Toeplitz and Wiener-Hopf type)), 44A15. arXiv math.CA. Level 3: graduate.

**Definition.** Write u = r² and let h(u) be the radial profile at radius √u. In squared distance v, define Ah(v) by integrating h(u)/√(u − v) over u &gt; v. This replaces the radial kernel containing both r and the observation radius.

**Problem.** For smooth compactly supported h, applying A twice gives π times the integral of h over \[v,∞). Differentiating and multiplying by −1/π recovers h(v).

**How the definition helps.** Squaring the radius turns the kernel into a function of one difference (our own). Fubini’s theorem reduces its double application to the beta integral, whose value is π (our own). The remaining work is matching the radial projection to this kernel by the squared-radius change of variable (our own).

**Wikipedia:** [Abel transform](https://en.wikipedia.org/wiki/Abel_transform). It says: “The Abel transform of a function f(r) is given by”

**Sources:** none listed. No primary source with a working link was found.

### Schur weights handle divergent rows

**Remember:** Measure each row and column against a weight it can integrate.

*Makes the theorem clean to state or prove.* MSC 45P05 (Integral operators). arXiv math.FA. Level 3: graduate.

**Definition.** Let K(x,y) ≥ 0 and choose strictly positive weights p(x) and q(y). Require ∫K(x,y)q(y)dy ≤ Ap(x) and ∫K(x,y)p(x)dx ≤ Bq(y) almost everywhere, with finite constants A and B.

**Problem.** Integrating K(x,y)f(y) in y defines an operator of norm at most √(AB) on square-integrable functions. For K(x,y) = 1/(x + y) on the positive half-line, choose p(x) = 1/√x and q(y) = 1/√y.

**How the definition helps.** Weights make finite estimates possible even where unweighted row or column integrals diverge (our own). Weighted Cauchy–Schwarz and Tonelli’s theorem prove the bound (our own). The work in the example is evaluating the weighted integral by scaling, which gives A = B = π (our own).

**Wikipedia:** [Schur test](https://en.wikipedia.org/wiki/Schur_test). It says: “Such functions p(x), q(y) are called the Schur test functions.”

**Sources:**

- [Issai Schur, Bemerkungen zur Theorie der beschränkten Bilinearformen mit unendlich vielen Veränderlichen (1911)](https://doi.org/10.1515/crll.1911.140.1)

### Nonzero diagonals ensure Abel uniqueness

**Remember:** Keep the diagonal so differentiation can expose the input.

*Rules out counterexamples.* MSC 45E10 (Integral equations of the convolution type (Abel, Picard, Toeplitz and Wiener-Hopf type)), 45D05. arXiv math.FA. Level 4: research.

**Definition.** Fix finite a &lt; b and 0 &lt; β &lt; 1. For a ≤ p ≤ b, integrate K(p,t)f(t)/(p − t)ᵝ from a to p. Require K and ∂K/∂p to be continuous for a ≤ t ≤ p ≤ b. Require K(p,p) ≠ 0 for every p.

**Problem.** These integrals determine any square-integrable solution up to equality almost everywhere.

**How the definition helps.** A second integration and one differentiation expose f(p) with a nonzero coefficient proportional to K(p,p). Dividing by that coefficient leaves an equation involving only earlier values, for which the standard uniqueness theorem applies. For our own counterexample, let K(p,t) equal a smooth function of t that vanishes on a subinterval. Every input supported there gives zero data.

**Paper or page:** [Generalized Abel equations and applications to translation invariant Radon transforms](https://arxiv.org/abs/2306.08180v1). It says: “K(p,p) is non-zero, for p ∈ \[a,b\].”

**Sources:**

- [Generalized Abel equations and applications to translation invariant Radon transforms](https://arxiv.org/abs/2306.08180v1)
