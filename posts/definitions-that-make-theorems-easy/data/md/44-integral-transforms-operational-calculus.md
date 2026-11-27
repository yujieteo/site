### Laplace transforms turn oscillations into algebra

**Remember:** The exponential weight turns derivatives into powers and initial values.

*True by definition.* MSC 44A10 (Laplace transform), 34A25. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The one-sided Laplace transform of x is X(s) = ∫₀∞ exp(−st)x(t) dt when this integral converges.

**Problem.** Suppose x″ + kx = 0 with real constant k. For all sufficiently large real s, its transform satisfies (s² + k)X(s) = sx(0) + x′(0).

**How the definition helps.** The exponential weight reproduces itself under differentiation, so integration by parts turns derivatives of x into algebraic terms. In our own derivation, integrating twice leaves the initial data at zero. The oscillator solutions and their derivatives grow at most exponentially, so the upper boundary terms vanish for sufficiently large s. Recovering x requires inversion.

**Wikipedia:** [Laplace transform](https://en.wikipedia.org/wiki/Laplace_transform). It says: “which incorporates the initial conditions x(0) and x′(0), and can be solved for the unknown function X(s).”

**Sources:** none listed. No primary source with a working link was found.

### Point masses evaluate Laplace kernels

**Remember:** A unit impulse just evaluates the kernel.

*True by definition.* MSC 44A10 (Laplace transform). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A unit impulse at time a is the measure assigning mass one to the point a. For a finite measure on \[0,∞), define its Laplace transform by integrating exp(−st) against it for Re s ≥ 0.

**Problem.** For a ≥ 0, the Laplace transform of the unit impulse at time a is exp(−sa).

**How the definition helps.** Integration against a point mass evaluates the kernel at a (our own). This definition replaces a limit of narrow pulses with unit area (our own). To justify that replacement, show that their integrals approach evaluation at a for each bounded continuous kernel (our own).

**Paper or page:** [Laplace Transform of Shifted Dirac Delta Function](https://proofwiki.org/wiki/Laplace_Transform_of_Shifted_Dirac_Delta_Function). It says: “ℒ(δ(t − a)) = e⁻ᵃˢ”

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

### Formal Z transforms solve recurrences

**Remember:** A delay is multiplication by the series variable.

*True by definition.* MSC 44A55 (Discrete operational calculus). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a sequence zero at negative indices, form the formal series whose coefficient of wⁿ is x\[n\] for n ≥ 0. Here w = 1/z. The formal definition uses coefficients without requiring the numerical Z-transform to converge.

**Problem.** Let g vanish at negative indices and let a₁,…,aₘ be constants. The recurrence x\[n\] − ∑ aⱼx\[n − j\] = g\[n\] for n ≥ 0 has one solution vanishing at negative indices. Its series is G(w)/(1 − ∑ aⱼwʲ), where G represents g and both sums run from 1 to m.

**How the definition helps.** Delays become powers, so the recurrence is one multiplication by a polynomial (our own). A formal series with nonzero constant term has a unique reciprocal, constructed one coefficient at a time (our own). Any claim about analytic convergence needs separate growth estimates (our own).

**Wikipedia:** [Z-transform](https://en.wikipedia.org/wiki/Z-transform). It says: “the formal power series X(z)”

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

### Gamma averages invert Laplace transforms

**Remember:** High Laplace derivatives average with weights that concentrate near t.

*True by definition.* MSC 44A10 (Laplace transform). arXiv math.CA. Level 3: graduate.

**Definition.** Let F(s) be the integral of f(u) exp(−su) over nonnegative u. For t &gt; 0 and integer n ≥ 1, define a probability density proportional to uⁿ exp(−nu/t). Set Aₙ(t) equal to the average of f against this density.

**Problem.** For bounded continuous f, Aₙ(t) tends to f(t). This average equals the nth derivative of F at n/t multiplied by (−1)ⁿ(n/t)ⁿ⁺¹/n!.

**How the definition helps.** The probability density turns inversion by high derivatives into averaging near t (our own). The gamma density has mean (n + 1)t/n and variance (n + 1)t²/n², so by Chebyshev's inequality its mass outside any fixed neighborhood of t tends to zero (our own). Continuity controls the average inside that neighborhood, and boundedness controls the rest (our own). Differentiating under the Laplace integral identifies the average with the derivative formula (our own).

**Paper or page:** [Multidimensional vector-valued Laplace transform and applications](https://arxiv.org/abs/2506.18909v1). It says: “Then the following Post-Widder inversion formula holds”

**Sources:**

- [Multidimensional vector-valued Laplace transform and applications](https://arxiv.org/abs/2506.18909v1)

### Zero extension absorbs initial values

**Remember:** The jump at zero carries the initial value.

*True by definition.* MSC 44A10 (Laplace transform), 44A45. arXiv math.CA. Level 3: graduate.

**Definition.** Extend f by zero from nonnegative to negative time. Define its distributional derivative by integrating the extension against the negative derivative of each smooth compactly supported test function.

**Problem.** Assume f is continuously differentiable on \[0,∞) and \|f(t)\| + \|f′(t)\| ≤ M exp(ωt). For Re s &gt; ω, the Laplace transform of the extended function’s distributional derivative equals s times the transform of f.

**How the definition helps.** The distribution derivative transfers the derivative to the exponential, which gives the factor s (our own). The work is to justify the pairing with the exponential by cutoffs and identify the term at zero (our own). Integration by parts shows that term is a point mass with weight f(0), which cancels the usual subtraction (our own).

**Paper or page:** [Laplace Transform of Derivative](https://proofwiki.org/wiki/Laplace_Transform_of_Derivative). It says: “ℒ(f′(t)) = sℒ(f(t)) − f(0)”

**Sources:** none listed. No primary source with a working link was found.

### Backprojection transposes Radon integration

**Remember:** Integrate over the same point and plane pairs in reverse order.

*True by definition. Confidence: medium.* MSC 44A12 (Radon transform). arXiv math.FA. Level 3: graduate.

**Definition.** The Radon transform R integrates f over the hyperplane x · θ = t, where θ is a unit normal. Define the backprojection Bg at x by averaging g(θ, x · θ) over directions with uniform probability.

**Problem.** For real smooth compactly supported f and g, integrating (Rf)g over directions and offsets gives the same value as integrating f(Bg) over space.

**How the definition helps.** Backprojection averages over precisely the hyperplanes through x, so both integrals count the same point and plane pairs (our own). In orthogonal coordinates, volume splits into distance along θ and volume on each perpendicular plane (our own). Fubini’s theorem then identifies the geometric average with the adjoint, the operator defined by the pairing identity (our own).

**nLab:** [Radon transform](https://ncatlab.org/nlab/show/Radon+transform). It says: “It corresponds to pull-push through the incidence correspondence of points and hyperplanes.”

**Sources:** none listed. No primary source with a working link was found.

### Compact support restores limited-angle Radon uniqueness

**Remember:** Compact support lets the measured Fourier wedge determine the rest.

*Rules out counterexamples. Confidence: medium.* MSC 44A12 (Radon transform). arXiv math.CA. Level 3: graduate.

**Definition.** The planar Radon transform integrates a function along lines. Fix a nonempty open arc of unit normals shorter than a semicircle. Keep all line integrals with normals in that arc, and restrict inputs to smooth functions that vanish outside a compact set.

**Problem.** In the plane, Radon data in any such nonempty arc determine a compactly supported smooth input uniquely.

**How the definition helps.** Compact support makes the Fourier transform locally equal to its power series, so values on an open wedge determine it everywhere (our own). The Fourier slice theorem gives those values by taking the one-dimensional Fourier transform of the measured line integrals in each direction. Without compact support, choose a nonzero smooth Fourier transform supported in a small disk outside both measured wedges (our own). Its inverse transform decreases faster than every inverse power and has zero measured line integrals (our own).

**nLab:** [Radon transform](https://ncatlab.org/nlab/show/Radon+transform). It says: “The Radon transform converts between functions on ℝⁿ which are integrable on all hyperplanes and functions on the space of all hyperplanes of ℝⁿ.”

**Wikipedia:** [Projection-slice theorem](https://en.wikipedia.org/wiki/Projection-slice_theorem). It says: “F₁P₁ = S₁F₂.”

**Sources:** none listed. No primary source with a working link was found.

### Evenness makes Funk data injective

**Remember:** Opposite points cancel odd inputs but agree on even inputs.

*Rules out counterexamples.* MSC 44A12 (Radon transform). arXiv math.FA. Level 3: graduate.

**Definition.** The Funk transform integrates a function on the unit sphere in ℝ³ over each great circle. Restrict its domain to even functions, whose values agree at opposite points.

**Problem.** The Funk transform is injective on even continuous functions. On all continuous functions its null space consists of the odd functions.

**How the definition helps.** Each great circle contains antipodal pairs, so odd functions cancel under integration. The height coordinate gives our own example. For injectivity, expand an even function in spherical harmonics, the sphere’s analogues of Fourier modes (our own). In even degree the multiplier is proportional to a Legendre polynomial evaluated at zero and never vanishes (our own).

**Wikipedia:** [Funk transform](https://en.wikipedia.org/wiki/Funk_transform). It says: “The Funk transform annihilates all odd functions, and so it is natural to confine attention to the case when ƒ is even.”

**Sources:** none listed. No primary source with a working link was found.

### Frequency correction inverts Radon backprojection

**Remember:** Backproject first, then restore the lost high frequencies.

*Makes the theorem clean to state or prove.* MSC 44A12 (Radon transform), 45Q05. arXiv math.CA. Level 3: graduate.

**Definition.** The Radon transform integrates a function over each hyperplane. Its dual, called backprojection, averages hyperplane data over the directions of all hyperplanes through each point.

**Problem.** Let f be smooth and rapidly decreasing on ℝⁿ, with n ≥ 2. At each frequency ξ ≠ 0, backprojecting its Radon transform multiplies its Fourier transform by C/\|ξ\|ⁿ⁻¹. Here C is a positive normalization constant, and dividing by this factor recovers f by Fourier inversion.

**How the definition helps.** Backprojection turns the data into a function on the original space where a single frequency correction can act (our own). The work is to show that the composition averages along hyperplanes to give convolution with a constant times 1/\|x\| (our own). The Fourier transform of that kernel gives the multiplier (our own).

**Wikipedia:** [Radon transform](https://en.wikipedia.org/wiki/Radon_transform). It says: “Explicit and computationally efficient inversion formulas for the Radon transform and its dual are available.”

**Sources:**

- [Sigurdur Helgason, The Radon Transform, second edition (1999)](https://doi.org/10.1007/978-1-4757-1463-0)

### Radon offset moments are polynomials

**Remember:** Integrating powers of offset gives powers of the dot product.

*Makes the theorem clean to state or prove.* MSC 44A12 (Radon transform). arXiv math.CA. Level 3: graduate.

**Definition.** The Radon transform Rf(θ,t) integrates f over the hyperplane x · θ = t. The unit normal θ fixes a direction, and the signed offset t distinguishes slices on opposite sides of the origin.

**Problem.** Let f be smooth and rapidly decreasing on ℝⁿ. For each integer k ≥ 0, integrating tᵏRf(θ,t) over t gives a homogeneous polynomial of degree k evaluated at θ. In particular, the zeroth moment is constant.

**How the definition helps.** The signed offset turns tᵏ into (x · θ)ᵏ everywhere on the slice (our own). Integrating across slices gives the integral of (x · θ)ᵏf(x) over space, a polynomial in θ (our own). For n ≥ 2, the data θ₁² exp(−t²) respect simultaneous sign reversal but have a nonconstant zeroth moment (our own).

**Wikipedia:** [Radon transform](https://en.wikipedia.org/wiki/Radon_transform). It says: “There are also conditions on the moments of the Radon transform.”

**Sources:** none listed. No primary source with a working link was found.

### Radon projections preserve convolution

**Remember:** Projection preserves sums, so it preserves convolution.

*True by definition. Confidence: medium.* MSC 44A12 (Radon transform). arXiv math.CA. Level 3: graduate.

**Definition.** Fix a unit vector θ. To project a measure, send each point x and its mass to the real number x · θ. Define its Radon data in direction θ as this projected measure.

**Problem.** For two finite measures, projecting their convolution gives the convolution of their projections.

**How the definition helps.** With the projection definition, both sides send each pair (x, y) to the same number (our own). Convolving measures sends their product measure through addition, and (x + y) · θ equals x · θ + y · θ (our own). The usual definition integrates a density over each perpendicular hyperplane. Fubini’s theorem in orthogonal coordinates identifies these slice integrals with the projected density almost everywhere (our own).

**nLab:** [Radon transform](https://ncatlab.org/nlab/show/Radon+transform). It says: “It corresponds to pull-push through the incidence correspondence of points and hyperplanes.”

**Sources:** none listed. No primary source with a working link was found.

### Hermite phases add transform orders

**Remember:** Multiplying the phases adds the orders.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** The normalized Hermite functions form an orthonormal basis of square-integrable functions on ℝ, indexed by n starting at zero. Define the fractional Fourier transform of real order α by multiplying coefficient n by exp(−iπαn/2). The alternative integral formula uses an oscillating kernel.

**Problem.** Each transform is unitary, meaning that it preserves lengths and maps onto the whole space. Composing orders α and β gives order α + β. Order one gives the unitary Fourier transform with kernel exp(−ixξ)/√(2π).

**How the definition helps.** The same basis diagonalizes every order, so multiplying the phases adds the orders (our own). Each phase has absolute value one, so the coefficient norm stays fixed (our own). The work lies in proving the Hermite basis theorem and matching its Fourier eigenvalues and the integral kernel (our own).

**Paper or page:** [Fractional Fourier transforms, harmonic oscillator propagators and Strichartz estimates on Pilipovic and modulation spaces](https://arxiv.org/abs/2111.09575v5). It says: “𝓕ᵨ₁ ∘ 𝓕ᵨ₂ = 𝓕ᵨ₁₊ᵨ₂”

**Sources:**

- [Fractional Fourier transforms, harmonic oscillator propagators and Strichartz estimates on Pilipovic and modulation spaces](https://arxiv.org/abs/2111.09575v5)

### Kernel subtraction repairs Hilbert tails

**Remember:** Subtract the distant tail without changing the local singularity.

*Rules out counterexamples.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** The modified Hilbert transform of f at x integrates f(t) against (1/π)(1/(x − t) + 1/t) for \|t\| &gt; 1 and against (1/π)·1/(x − t) for \|t\| ≤ 1. The integral is a principal value: a symmetric interval about x is omitted, and its width tends to zero.

**Problem.** For every bounded, locally Hölder continuous function f on ℝ, the modified Hilbert transform exists at every x.

**How the definition helps.** Adding 1/t makes the distant kernel decay quadratically, so bounded inputs give integrable tails (our own). Near x, symmetric integration cancels the constant f(x), and the Hölder bound makes the remainder integrable (our own). For f(t) = tanh(t), the uncorrected integrand at x = 0 behaves like −1/\|t\| at both ends (our own).

**Wikipedia:** [Hilbert transform](https://en.wikipedia.org/wiki/Hilbert_transform). It says: “with u = sgn(x), the integral defining H(u) diverges almost everywhere to ±∞.”

**Sources:**

- [Charles Fefferman, Characterizations of bounded mean oscillation (1971)](https://doi.org/10.1090/S0002-9904-1971-12763-5)

### Logarithms turn Mellin norm preservation into Fourier norm preservation

**Remember:** The logarithm turns the weighted Mellin norm into an ordinary Fourier norm.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.CA, math.AP. Level 3: graduate.

**Definition.** Write r = exp(x) and fix a real c. Set g(x) = exp(cx)f(exp(x)). Define the normalized Mellin transform at c + iξ as the unitary Fourier transform of g at −ξ. The usual Mellin integral uses powers of r directly.

**Problem.** Suppose ∫₀∞ \|f(r)\|² exp(2c log r) dr/r is finite. The integral of the squared transform over ξ equals this same number.

**How the definition helps.** The substitution r = exp(x) turns the weighted input integral into ∫ \|g(x)\|² dx (our own). Fourier Plancherel says the unitary Fourier transform preserves this integral (our own). Substitution in the ordinary Mellin integral identifies the two transforms, first on smooth inputs of compact support (our own).

**Paper or page:** [Well-Posedness and Regularity of the Heat Equation with Robin Boundary Conditions in the Two-Dimensional Wedge](https://arxiv.org/abs/2411.04651v2). It says: “For every $\\beta \\in \\mathbb {R}$ the map \\eqref{mellin-iso} is an isometric isomorphism.”

**Sources:**

- [Well-Posedness and Regularity of the Heat Equation with Robin Boundary Conditions in the Two-Dimensional Wedge](https://arxiv.org/abs/2411.04651v2)

### Matching bases makes Bargmann unitary

**Remember:** Match orthonormal bases to preserve lengths.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** Use entire functions, meaning functions analytic on the whole complex plane. Integrate their squared absolute values against plane area with density exp(−\|z\|²)/π. Define the Bargmann transform by sending normalized Hermite function n on ℝ to zⁿ/√(n!), starting at n = 0. Its usual definition uses a Gaussian integral kernel.

**Problem.** The Bargmann transform is a unitary map onto the space of entire functions square integrable for the complex Gaussian weight.

**How the definition helps.** The two bases give the same squared norm as a sum of squared coefficients (our own). The work lies in proving that both systems are complete and that the Gaussian integral acts this way on Hermite functions (our own).

**nLab:** [Bargmann-Segal transform](https://ncatlab.org/nlab/show/Bargmann-Segal+transform). It says: “The classical Bargmann-Segal transform is a unitary transformation from the Hilbert space of Lebesgue square integrable functions L²(ℝⁿ) to the Bargmann-Fock space of analytic functions with certain growth condition.”

**Sources:**

- [Valentine Bargmann, On a Hilbert space of analytic functions and an associated integral transform, part I (1961)](https://doi.org/10.1002/cpa.3160140303)

### Radial Fourier transforms explain Hankel inversion

**Remember:** Reflection leaves every radial function unchanged.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** Fix a dimension d ≥ 2. Define the radial Hankel transform by applying the unitary Fourier transform to a function that depends only on distance from the origin. Keep only the resulting function of radius. The usual integral formula uses a Bessel function of order d/2 − 1.

**Problem.** Applying this transform twice recovers every radial profile square-integrable with respect to r to the power d − 1 times dr.

**How the definition helps.** Two Fourier transforms reflect the input, and our own observation is that reflection leaves radial functions unchanged. The work moves to Fourier inversion and to identifying the radial Fourier kernel with the Bessel formula (our own).

**Wikipedia:** [Hankel transform](https://en.wikipedia.org/wiki/Hankel_transform). It says: “The Hankel transform appears when one writes the multidimensional Fourier transform in hyperspherical coordinates”

**Paper or page:** [The Wˢ,ᵖ-boundedness of stationary wave operators for the Schrödinger operator with inverse-square potential](https://arxiv.org/abs/2110.01969v2). It says: “\\mathscr H<sub>\\nu k</sub>\\mathscr H{\\nu \_k}&amp; =I”

**Sources:** none listed. No primary source with a working link was found.

### Stieltjes boundary values recover atoms

**Remember:** The scaled kernel tends to the indicator of a single point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)), 44A60. arXiv math.CA. Level 3: graduate.

**Definition.** For a finite positive measure on ℝ, define its Stieltjes transform by integrating 1/(t − z) against the measure for nonreal z. This includes measures assigning positive mass to individual points, called atoms.

**Problem.** As ε decreases to zero, ε times the imaginary part of the transform at x + iε tends to the mass at x. This holds even at a nonisolated point of the support.

**How the definition helps.** Allowing measures makes the mass at a single point visible in the transform (our own). At z = x + iε, the imaginary part of the kernel times ε equals ε²/((t − x)² + ε²) (our own). As ε decreases to zero, this quantity stays between zero and one and tends to the indicator of {x} (our own). Dominated convergence gives the result (our own).

**Wikipedia:** [Stieltjes transformation](https://en.wikipedia.org/wiki/Stieltjes_transformation). It says: “If instead the measure has a point mass at x, then the limit as ε → 0⁺ of the integral diverges”

**Sources:** none listed. No primary source with a working link was found.

### Stieltjes imaginary parts smooth measures

**Remember:** The negative imaginary part divided by π gives a unit-mass averaging kernel.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** Define G(z) by integrating 1/(z − t) against a finite positive measure μ on the real line. For ε &gt; 0, set pε(x) = −Im G(x + iε)/π.

**Problem.** The measures with density pε approach μ as ε decreases to zero. This means their integrals against every continuous compactly supported function approach its integral against μ.

**How the definition helps.** Keeping a positive height turns boundary inversion into averaging with a probability density (our own). The negative imaginary part divided by π gives the Poisson kernel ε/\[π((x − t)² + ε²)\]. This kernel has integral one in x, and its mass outside every fixed neighborhood of t tends to zero (our own). Thus averaging a continuous compactly supported function recovers its value at t (our own). Fubini’s theorem and bounded convergence give the asserted convergence of measures (our own).

**Wikipedia:** [Stieltjes transformation](https://en.wikipedia.org/wiki/Stieltjes_transformation). It says: “the smaller the value of ε, the less smoothing is applied.”

**Sources:**

- [Matthew J. Colbrook, Computing Spectral Measures and Spectral Types (2021)](https://doi.org/10.1007/s00220-021-04072-4)

### Product grids preserve Laplace uniqueness

**Remember:** Independent sample coordinates let you apply one-variable uniqueness repeatedly.

*Makes the theorem clean to state or prove.* MSC 44A30 (Multiple integral transforms). arXiv math.FA. Level 3: graduate.

**Definition.** Choose a countable sequence of complex numbers with positive real parts for each coordinate. The product grid contains every tuple formed by choosing one number from each sequence. Call samples determining if their Laplace transform values distinguish integrable functions up to equality almost everywhere.

**Problem.** On a finite product of nonnegative half-lines, the grid is determining exactly when every coordinate sequence is determining on its half-line.

**How the definition helps.** Independent coordinate choices let us test one variable while keeping all other samples fixed (our own). The exponential weight factors, so Fubini’s theorem gives successive one-variable integrals (our own). Countability lets us discard one null set for all remaining sample choices at each step (our own). If one sequence fails, multiply its undetected function by nonzero integrable functions of the other variables (our own).

**Paper or page:** [Uniqueness sequences for multidimensional vector-valued Laplace transform](https://arxiv.org/abs/2510.17485v1). It says: “are the uniqueness sequences for the one-dimensional Laplace transform if and only if”

**Sources:**

- [Uniqueness sequences for multidimensional vector-valued Laplace transform](https://arxiv.org/abs/2510.17485v1)

### Logarithms transfer Young’s inequality

**Remember:** The logarithm turns division into subtraction and dx/x into ordinary length.

*True by definition.* MSC 44A35 (Convolution as an integral transform). arXiv math.CA. Level 3: graduate.

**Definition.** Define the Mellin convolution h(x) by integrating f(x/y)g(y) against dy/y over positive y. Compute each integral norm with the same measure dx/x.

**Problem.** Let f and g be smooth with compact support in (0, ∞). Choose finite p, q, r ≥ 1 with 1/r = 1/p + 1/q − 1. The r-norm of h is at most the p-norm of f times the q-norm of g.

**How the definition helps.** Choosing dx/x makes logarithmic coordinates preserve both convolution and all three norms (our own). Indeed, u = log x gives du = dx/x and turns division into subtraction (our own). Young’s inequality for ordinary convolution on the real line supplies the bound (our own).

**Paper or page:** [From Schwartz space to Mellin transform](https://arxiv.org/abs/2207.10706v1). It says: “Let p, q, r ∈ \[1, ∞) be such that 1/r = 1/p + 1/q − 1.”

**Sources:**

- [From Schwartz space to Mellin transform](https://arxiv.org/abs/2207.10706v1)

### Quadratic-phase convolution becomes multiplication

**Remember:** Put the same phase into both inputs before convolving.

*True by definition.* MSC 44A35 (Convolution as an integral transform), 44A15. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** Let q(x) = exp(iax²) for real a. Define Tf(ξ) by integrating q(x)f(x)exp(−ixξ) over ℝ. Define the adapted convolution of f and g as the ordinary convolution of qf and qg divided pointwise by q.

**Problem.** For integrable f and g on ℝ, applying T to their adapted convolution gives the pointwise product of Tf and Tg.

**How the definition helps.** Applying T restores the phase removed by the adapted convolution (our own). The ordinary Fourier convolution theorem then turns convolution into multiplication (our own). Our own convention omits the paper’s output phase and uses an unscaled Fourier integral. Those choices account for the extra factor in the quoted formula.

**Paper or page:** [The windowed quadratic phase Fourier transform: structure, convolution theorem and application](https://arxiv.org/abs/2507.03911v2). It says: “(𝒬Λ(f ⊗ₐ g))(ω) = e⁻ⁱ⁽ᶜω²⁺ᵉω⁾ F̃(ω) G̃(ω)”

**Sources:** none listed. No primary source with a working link was found.

### Convolution quotients make integration invertible

**Remember:** Taking fractions gives integration an inverse and gives convolution a unit.

*True by definition.* MSC 44A40 (Calculus of Mikusi?ski and other operational calculi). arXiv math.CA. Level 3: graduate.

**Definition.** For continuous functions on nonnegative time, convolution integrates f(t − s)g(s) from 0 to t. Form fractions with a nonzero function as denominator, using convolution as multiplication. Identify fractions when their cross-products agree. Convolution with the constant function 1 integrates its input from zero to t.

**Problem.** The constant kernel 1 has an inverse in the convolution fraction field. Its product with that inverse is the unit, even though no continuous convolution kernel acts as the unit.

**How the definition helps.** The fraction construction gives every nonzero kernel an inverse, including the constant kernel that represents integration (our own). Titchmarsh’s convolution theorem supplies cancellation, which makes these fractions well defined (our own). No continuous kernel acts as the identity because convolution always gives zero at time zero (our own).

**Wikipedia:** [Convolution quotient](https://en.wikipedia.org/wiki/Convolution_quotient). It says: “a convolution quotient is to the operation of convolution as a quotient of integers is to multiplication”

**Sources:** none listed. No primary source with a working link was found.

### Exponential moments ensure moment uniqueness

**Remember:** Exponential control lets the moment series identify the law.

*Rules out counterexamples.* MSC 44A60 (Moment problems), 44A10. arXiv math.CA. Level 3: graduate.

**Definition.** Require the integral of exp(ε\|x\|) against the probability measure to be finite for some ε &gt; 0. This is stronger than requiring every polynomial moment to be finite.

**Problem.** If a probability measure on ℝ has an exponential moment, its nonnegative integer moments determine it among all probability measures on ℝ.

**How the definition helps.** Exponential integrability gives a convergent power series for the Laplace transform near zero (our own). A second measure with the same moments also integrates cosh(εx), by its series of nonnegative even powers (our own). The transforms agree near zero and hence throughout their common vertical strip by analytic continuation (our own). On the imaginary axis, Fourier uniqueness identifies the measures (our own). The lognormal distribution, the law of the exponential of a nonconstant normal variable, has all moments but shares them with other distributions.

**Wikipedia:** [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution). It says: “However, the log-normal distribution is not determined by its moments.”

**Sources:**

- [C. C. Heyde, On a Property of the Lognormal Distribution (1963)](https://doi.org/10.1111/j.2517-6161.1963.tb00521.x)

### Shifted moments detect negative support

**Remember:** Test squares after multiplying by the support coordinate.

*Rules out counterexamples.* MSC 44A60 (Moment problems). arXiv math.CA. Level 3: graduate.

**Definition.** For a real sequence starting with m₀ = 1, set L(xⁿ) = mₙ and extend L linearly to polynomials. Test both L(p²) and L(xp²) for every nonzero real polynomial p.

**Problem.** The sequence gives the moments of a probability measure with infinite support in \[0,∞) exactly when both tests are strictly positive.

**How the definition helps.** The second test puts the sign of x into an integral of a square (our own). A uniform measure on \[−2,−1\] passes every first test but gives L(x) &lt; 0 (our own). The two tests assert positive definiteness of the ordinary and shifted moment matrices (our own). The Stieltjes existence theorem supplies the measure.

**Wikipedia:** [Stieltjes moment problem](https://en.wikipedia.org/wiki/Stieltjes_moment_problem). It says: “det(Δₙ) &gt; 0 and det(Δₙ⁽¹⁾) &gt; 0.”

**Sources:** none listed. No primary source with a working link was found.

### Unit-interval moments have nonnegative differences

**Remember:** On the unit interval, taking a moment difference inserts a nonnegative factor.

*Rules out counterexamples.* MSC 44A60 (Moment problems). arXiv math.CA. Level 3: graduate.

**Definition.** A Hausdorff moment sequence consists of the integrals of 1, x, x², and all higher powers against one finite positive measure on \[0, 1\]. Form a difference sequence by subtracting each term’s successor from that term.

**Problem.** A real sequence is a Hausdorff moment sequence exactly when every term of every difference sequence is nonnegative. Include the original sequence as the difference of order zero.

**How the definition helps.** Restricting x to \[0, 1\] makes every difference insert the nonnegative factor 1 − x into the moment integral (our own). A unit mass at 2 gives first difference 1 − 2, so the half-line permits a counterexample (our own). The converse needs a separate theorem. Bernstein polynomial approximation and the representation of positive linear functionals by measures provide the reverse implication (our own).

**Paper or page:** [Chapter 12: The moment problem on compact semi-algebraic sets (revised version)](https://arxiv.org/abs/2309.10052v1). It says: “s is a Hausdorff moment sequence on \[0, 1\]ᵈ.”

**Sources:**

- [Chapter 12: The moment problem on compact semi-algebraic sets (revised version)](https://arxiv.org/abs/2309.10052v1)
- [Felix Hausdorff, Summationsmethoden und Momentfolgen. I (1921)](https://doi.org/10.1007/BF01378337)

### Compact support removes light ray ambiguity

**Remember:** Compact support lets visible Fourier data determine the missing frequencies.

*Rules out counterexamples.* MSC 44A12 (Radon transform). arXiv math.AP, math.CA. Level 4: research.

**Definition.** In at least two space dimensions, define the scalar light ray transform by integrating along every straight spacetime line with unit spatial speed. Restrict the input to smooth functions that vanish outside a bounded set.

**Problem.** All light ray integrals together determine a smooth compactly supported function. The same data need not determine a smooth rapidly decreasing function.

**How the definition helps.** Compact support gives a real analytic Fourier transform, so its values on any open frequency region determine it everywhere (our own). Fourier transformation of the line integrals gives those values where the absolute time frequency is less than the spatial frequency length (our own). For our own counterexample, choose a nonzero smooth frequency bump supported where the reverse strict inequality holds. Its inverse Fourier transform decays rapidly and has zero line integrals (our own).

**Paper or page:** [The Momentum Light Ray Transform](https://arxiv.org/abs/2510.18450v1). It says: “Let $n\\ge 2$, $m\\geq 0$, and $f<sup>(m)</sup>\\in C<sub>c</sub><sup>\\infty </sup>(\\mathbb {R}<sup>1+n</sup>;S<sup>m</sup>)$. Suppose that $ \\Tilde {L}<sup>m,m</sup>f<sup>(m)</sup>((t,x),\\omega )=0 \\quad \\forall \\omega \\in \\S <sup>n-1</sup>, (t,x) \\in \\mathbb {R}<sup>1+n</sup>,$ then\\begin{align\*}  f<sup>(m)</sup>&amp; =\\begin{cases}  i\_{g\_{\\frac{1}{c}}}f<sup>(m-2)</sup> \\quad \\mbox{for some} \\quad f<sup>(m-2)</sup> \\in C<sub>c</sub><sup>\\infty </sup>(\\mathbb {R}<sup>1+n</sup>;S<sup>m-2</sup>) \\quad \\mbox{when $m\\ge 2$,} \\\\ 0 \\hspace{1.4cm}\\quad \\mbox{when}\\quad m=0,1. \\end{cases}\\end{align\*}”

**Sources:**

- [The Momentum Light Ray Transform, Theorem 2 (2025)](https://arxiv.org/abs/2510.18450v1)

### Filtered Radon data localize ridges

**Remember:** Opposite directions share the profile, with reversed offsets.

*True by definition.* MSC 44A12 (Radon transform). arXiv math.FA. Level 4: research.

**Definition.** A ridge with unit direction θ has the form r(x · θ), where its one-dimensional profile r may be a finite measure. Interpret a measure profile by integrating test functions over perpendicular hyperplanes before applying r to their offsets. Define the filtered transform by testing the ridge against the inverse Radon transform of smooth, rapidly decreasing Radon data.

**Problem.** For a finite measure profile, the filtered transform has an even measure representation. It places half the profile at θ and half its reflection at −θ.

**How the definition helps.** Testing through the inverse transform recovers the data at the ridge direction without integrating the ridge over hyperplanes (our own). Reversing both direction and offset describes the same hyperplane, so averaging the two descriptions gives the even measure (our own). The work lies in characterizing which smooth data arise from hyperplane integrals and inverting the transform there (our own).

**Paper or page:** [Ridges, Neural Networks, and the Radon Transform](https://arxiv.org/abs/2203.02543v1). It says: “be the ridge with profile r ∈ 𝒮′(ℝ) and direction ξ₀ ∈ 𝕊ᵈ⁻¹.”

**Sources:**

- [Ridges, Neural Networks, and the Radon Transform](https://arxiv.org/abs/2203.02543v1)

### Positive backprojections transfer Radon bounds

**Remember:** Pull the positive test back to the measured side.

*Makes the theorem clean to state or prove.* MSC 44A12 (Radon transform). arXiv math.FA. Level 4: research.

**Definition.** The Radon transform Rh integrates h over each hyperplane in ℝⁿ. A positive backprojection represents a weight w by a nonnegative measure on hyperplanes. For every nonnegative measurable h, integrating wh over space must equal integrating Rh against that measure.

**Problem.** Let p &gt; 1 and let φ and ψ be continuous, even, nonnegative functions in L¹ and Lᵖ on ℝⁿ. Suppose Rφ ≤ Rψ on every hyperplane and φᵖ⁻¹ has a positive backprojection representation. Then ‖φ‖ₚ ≤ ‖ψ‖ₚ.

**How the definition helps.** The representation turns an inequality on hyperplanes into a comparison of ordinary integrals (our own). Testing with φ and ψ gives ∫φᵖ ≤ ∫φᵖ⁻¹ψ, and Hölder’s inequality gives the norm bound (our own). Finding a positive representation for a particular function remains a separate problem (our own).

**Paper or page:** [Comparison Problems for Radon Transforms](https://arxiv.org/abs/2305.17796v1). It says: “if p &gt; 1 and φᵖ⁻¹ is an intersection function”

**Sources:**

- [Comparison Problems for Radon Transforms](https://arxiv.org/abs/2305.17796v1)

### Reflections select Hilbert modes

**Remember:** Odd and even reflections select exactly the required half-integer modes.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)), 42A50. arXiv math.CA, math.FA. Level 4: research.

**Definition.** Extend a function on (0, T), with T &gt; 0, by odd reflection about zero and even reflection about T. Repeat with period 4T. Apply the periodic Hilbert transform, which shifts each positive-frequency sine to minus its cosine. Negate the result and restrict it to (0, T).

**Problem.** This reflected transform sends each sine with frequency (j + ½)π/T to the cosine of the same frequency, for every nonnegative integer j.

**How the definition helps.** The reflection leaves each stated sine unchanged as a periodic sine on the extended interval (our own). The negative periodic Hilbert transform therefore gives its cosine (our own). The usual series definition replaces every sine in this interval basis by its cosine (our own). Completeness of the basis and boundedness of the periodic transform identify the two definitions for all square-integrable inputs (our own).

**Paper or page:** [Some properties of a modified Hilbert transform](https://arxiv.org/abs/2404.02609v1). It says: “where φ̃ is the periodic reflection”

**Sources:**

- [Some properties of a modified Hilbert transform](https://arxiv.org/abs/2404.02609v1)

### Stieltjes products add orders

**Remember:** Multiply the transforms and add their orders.

*Makes the theorem clean to state or prove.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.CA. Level 4: research.

**Definition.** Fix α &gt; 0 and a finite positive measure on \[0,∞). Its Stieltjes transform of order α integrates the reciprocal αth power of z + t against that measure in t, for z &gt; 0.

**Problem.** On positive real arguments, the product of two generalized Stieltjes transforms of finite positive measures is another such transform. Its order is the sum of the two orders.

**How the definition helps.** Allowing every positive order gives the product a place in the same family (our own). The beta integral expresses the product of two kernels as an average of kernels of the summed order (our own). Integrating that average against both measures gives the new finite positive measure (our own).

**Paper or page:** [To the theory of generalized Stieltjes transforms](https://arxiv.org/abs/2210.03474v2). It says: “If μ₁ and μ₂ are positive, then μ is positive too.”

**Sources:**

- [To the theory of generalized Stieltjes transforms](https://arxiv.org/abs/2210.03474v2)
