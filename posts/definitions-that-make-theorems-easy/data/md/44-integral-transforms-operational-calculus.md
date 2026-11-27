### Laplace transforms turn oscillations into algebra

**Remember:** The exponential weight turns derivatives into powers and initial values.

*True by definition.* MSC 44A10 (Laplace transform), 34A25. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The one-sided Laplace transform of x is X(s) = ∫₀∞ exp(−st)x(t) dt when this integral converges.

**Problem.** Suppose x″ + kx = 0 with real constant k. For all sufficiently large real s, its transform satisfies (s² + k)X(s) = sx(0) + x′(0).

**How the definition helps.** The exponential weight reproduces itself under differentiation, so integration by parts turns derivatives of x into algebraic terms. In our own derivation, integrating twice leaves the initial data at zero. The oscillator solutions and their derivatives grow at most exponentially, so the upper boundary terms vanish for sufficiently large s. Recovering x requires inversion.

**Wikipedia:** [Laplace transform](https://en.wikipedia.org/wiki/Laplace_transform). It says: “which incorporates the initial conditions x(0) and x′(0), and can be solved for the unknown function X(s).”

**Sources:** none listed. No primary source with a working link was found.

### Hyperplane integrals give Fourier slices

**Remember:** Integrate across the plane, then transform along its normal.

*True by definition.* MSC 44A12 (Radon transform). arXiv math.CA, math.AP. Level 2: later undergraduate.

**Definition.** Project each point x onto the coordinate s = x · θ for a unit vector θ. Define the Radon transform in direction θ as the density of the projected mass f(x) dx. Slicing space into hyperplanes identifies this density with the usual integral over each slice, for almost every s.

**Problem.** For integrable input, the Fourier transform of Radon data at a fixed normal equals the full Fourier transform on that normal line.

**How the definition helps.** Projection preserves the integral of every test function of x · θ, including the Fourier exponential (our own). This gives the Fourier slice formula using the same exponential convention in both transforms (our own). Fubini’s theorem identifies the projected density with the hyperplane integrals (our own).

**nLab:** [Radon transform](https://ncatlab.org/nlab/show/Radon+transform). It says: “It corresponds to pull-push through the incidence correspondence of points and hyperplanes.”

**Wikipedia:** [Projection-slice theorem](https://en.wikipedia.org/wiki/Projection-slice_theorem). It says: “Take that same function, but do a two-dimensional Fourier transform first, and then slice the function through its origin, parallel to the projection line.”

**Sources:** none listed. No primary source with a working link was found.

### Bounded support ensures moment uniqueness

**Remember:** On a bounded interval, polynomials approximate every continuous test.

*Rules out counterexamples.* MSC 44A60 (Moment problems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Hausdorff moment problem asks for a finite positive measure on a fixed closed bounded interval. Its moments are the integrals of all nonnegative integer powers, including the constant 1. The Stieltjes problem allows support on the whole nonnegative half-line.

**Problem.** A solvable Hausdorff moment problem has exactly one solution. The same conclusion need not hold on the nonnegative half-line.

**How the definition helps.** Agreement on moments gives agreement on polynomials, which approximate every continuous function uniformly on the closed bounded interval. Finite measures therefore agree on continuous tests, which determine the measure (our own). On the half-line, a lognormal distribution has the same moments as some other distributions.

**Wikipedia:** [Moment problem](https://en.wikipedia.org/wiki/Moment_problem). It says: “The uniqueness of μ in the Hausdorff moment problem follows from the Weierstrass approximation theorem”

**Sources:** none listed. No primary source with a working link was found.

### Convergence regions distinguish Laplace signals

**Remember:** The same fraction can describe opposite sides of time.

*Rules out counterexamples.* MSC 44A10 (Laplace transform). arXiv math.CA. Level 3: graduate.

**Definition.** For a two-sided Laplace transform, record the complex values s where the defining integral converges absolutely, together with its value there.

**Problem.** Suppose both two-sided transforms converge absolutely on one vertical line and agree there. Then their inputs agree almost everywhere. The formula 1/s alone admits two different inputs.

**How the definition helps.** The region tells us which vertical line to invert, so our own proof uses Fourier uniqueness after damping. Our own counterexample is the positive-time unit step and minus the negative-time unit step. Both give 1/s, but their convergence regions are opposite half-planes (our own).

**Wikipedia:** [Laplace transform](https://en.wikipedia.org/wiki/Laplace_transform). It says: “In the two-sided case, it is sometimes called the strip of absolute convergence.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier inversion recovers Laplace inputs

**Remember:** On a vertical line, Laplace inversion is Fourier inversion with damping removed.

*True by definition.* MSC 44A10 (Laplace transform). arXiv math.CA. Level 3: graduate.

**Definition.** Extend a function f on the positive half-line by zero. Define its Laplace transform on c + iξ as the Fourier transform of the damped function exp(−ct)f(t). The usual definition gives a single complex integral.

**Problem.** Suppose the damped function and its Fourier transform are integrable. Fourier inversion of the vertical-line data, followed by multiplication by exp(ct), recovers f at its continuity points.

**How the definition helps.** The definition gives ordinary Fourier data on each vertical line, so our own proof uses Fourier inversion there. The work moves to the Fourier inversion theorem and checking that damping makes the input integrable (our own).

**nLab:** [Laplace transform](https://ncatlab.org/nlab/show/Laplace+transform). It says: “For imaginary numbers a, this is the Fourier transform.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithms turn Mellin norm preservation into Fourier norm preservation

**Remember:** The logarithm turns the weighted Mellin norm into an ordinary Fourier norm.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.CA, math.AP. Level 3: graduate.

**Definition.** Write r = exp(x) and fix a real c. Set g(x) = exp(cx)f(exp(x)). Define the normalized Mellin transform at c + iξ as the unitary Fourier transform of g at −ξ. The usual Mellin integral uses powers of r directly.

**Problem.** Suppose ∫₀∞ \|f(r)\|² exp(2c log r) dr/r is finite. The integral of the squared transform over ξ equals this same number.

**How the definition helps.** The substitution r = exp(x) turns the weighted input integral into ∫ \|g(x)\|² dx (our own). Fourier Plancherel says the unitary Fourier transform preserves this integral (our own). Substitution in the ordinary Mellin integral identifies the two transforms, first on smooth inputs of compact support (our own).

**Paper or page:** [Well-Posedness and Regularity of the Heat Equation with Robin Boundary Conditions in the Two-Dimensional Wedge](https://arxiv.org/abs/2411.04651v2). It says: “For every $\\beta \\in \\mathbb {R}$ the map \\eqref{mellin-iso} is an isometric isomorphism.”

**Sources:**

- [Well-Posedness and Regularity of the Heat Equation with Robin Boundary Conditions in the Two-Dimensional Wedge](https://arxiv.org/abs/2411.04651v2)

### Radial Fourier transforms explain Hankel inversion

**Remember:** Reflection leaves every radial function unchanged.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** Fix a dimension d ≥ 2. Define the radial Hankel transform by applying the unitary Fourier transform to a function that depends only on distance from the origin. Keep only the resulting function of radius. The usual integral formula uses a Bessel function of order d/2 − 1.

**Problem.** Applying this transform twice recovers every radial profile square-integrable with respect to r to the power d − 1 times dr.

**How the definition helps.** Two Fourier transforms reflect the input, and our own observation is that reflection leaves radial functions unchanged. The work moves to Fourier inversion and to identifying the radial Fourier kernel with the Bessel formula (our own).

**Wikipedia:** [Hankel transform](https://en.wikipedia.org/wiki/Hankel_transform). It says: “The Hankel transform appears when one writes the multidimensional Fourier transform in hyperspherical coordinates”

**Paper or page:** [The Wˢ,ᵖ-boundedness of stationary wave operators for the Schrödinger operator with inverse-square potential](https://arxiv.org/abs/2110.01969v2). It says: “\\mathscr H<sub>\\nu k</sub>\\mathscr H{\\nu \_k}&amp; =I”

**Sources:** none listed. No primary source with a working link was found.

### Convolution quotients make integration invertible

**Remember:** Taking fractions gives integration an inverse and gives convolution a unit.

*True by definition.* MSC 44A40 (Calculus of Mikusi?ski and other operational calculi). arXiv math.CA. Level 3: graduate.

**Definition.** For continuous functions on nonnegative time, convolution integrates f(t − s)g(s) from 0 to t. Form fractions with a nonzero function as denominator, using convolution as multiplication. Identify fractions when their cross-products agree. Convolution with the constant function 1 integrates its input from zero to t.

**Problem.** The constant kernel 1 has an inverse in the convolution fraction field. Its product with that inverse is the unit, even though no continuous convolution kernel acts as the unit.

**How the definition helps.** The fraction construction gives every nonzero kernel an inverse, including the constant kernel that represents integration (our own). Titchmarsh’s convolution theorem supplies cancellation, which makes these fractions well defined (our own). No continuous kernel acts as the identity because convolution always gives zero at time zero (our own).

**Wikipedia:** [Convolution quotient](https://en.wikipedia.org/wiki/Convolution_quotient). It says: “a convolution quotient is to the operation of convolution as a quotient of integers is to multiplication”

**Sources:** none listed. No primary source with a working link was found.

### Compact support removes light ray ambiguity

**Remember:** Compact support lets visible Fourier data determine the missing frequencies.

*Rules out counterexamples.* MSC 44A12 (Radon transform). arXiv math.AP, math.CA. Level 4: research.

**Definition.** In at least two space dimensions, define the scalar light ray transform by integrating along every straight spacetime line with unit spatial speed. Restrict the input to smooth functions that vanish outside a bounded set.

**Problem.** All light ray integrals together determine a smooth compactly supported function. The same data need not determine a smooth rapidly decreasing function.

**How the definition helps.** Compact support gives a real analytic Fourier transform, so its values on any open frequency region determine it everywhere (our own). Fourier transformation of the line integrals gives those values where the absolute time frequency is less than the spatial frequency length (our own). For our own counterexample, choose a nonzero smooth frequency bump supported where the reverse strict inequality holds. Its inverse Fourier transform decays rapidly and has zero line integrals (our own).

**Paper or page:** [The Momentum Light Ray Transform](https://arxiv.org/abs/2510.18450v1). It says: “Let $n\\ge 2$, $m\\geq 0$, and $f<sup>(m)</sup>\\in C<sub>c</sub><sup>\\infty </sup>(\\mathbb {R}<sup>1+n</sup>;S<sup>m</sup>)$. Suppose that $ \\Tilde {L}<sup>m,m</sup>f<sup>(m)</sup>((t,x),\\omega )=0 \\quad \\forall \\omega \\in \\S <sup>n-1</sup>, (t,x) \\in \\mathbb {R}<sup>1+n</sup>,$ then\\begin{align\*}  f<sup>(m)</sup>&amp; =\\begin{cases}  i\_{g\_{\\frac{1}{c}}}f<sup>(m-2)</sup> \\quad \\mbox{for some} \\quad f<sup>(m-2)</sup> \\in C<sub>c</sub><sup>\\infty </sup>(\\mathbb {R}<sup>1+n</sup>;S<sup>m-2</sup>) \\quad \\mbox{when $m\\ge 2$,} \\\\ 0 \\hspace{1.4cm}\\quad \\mbox{when}\\quad m=0,1. \\end{cases}\\end{align\*}”

**Sources:**

- [The Momentum Light Ray Transform, Theorem 2 (2025)](https://arxiv.org/abs/2510.18450v1)
