### Laplace transforms turn oscillations into algebra

**Remember:** The exponential weight turns derivatives into powers and initial values.

*True by definition.* MSC 44A10 (Laplace transform), 34A25. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The one-sided Laplace transform of x is X(s) = ∫ exp(−st)x(t) dt over t ≥ 0, where this integral converges. Integration by parts turns a derivative into multiplication by s minus the initial value: x′ becomes sX(s) − x(0).

**Problem.** Suppose x″ + kx = 0 with real constant k. For all sufficiently large real s, its transform satisfies (s² + k)X(s) = sx(0) + x′(0).

**How the definition helps.** Using the derivative rule twice turns x″ into s²X − sx(0) − x′(0), so the equation becomes (s² + k)X = sx(0) + x′(0) (our own). Oscillator solutions and their derivatives grow at most exponentially, so the boundary terms at infinity vanish for large real s.

**Wikipedia:** [Laplace transform](https://en.wikipedia.org/wiki/Laplace_transform). It says: “which incorporates the initial conditions x(0) and x′(0), and can be solved for the unknown function X(s).”

**Sources:** none listed. No primary source with a working link was found.

### Point masses evaluate Laplace kernels

**Remember:** A unit impulse just evaluates the kernel.

*True by definition.* MSC 44A10 (Laplace transform). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The unit impulse at a ≥ 0 is the point mass that gives mass one to every Borel set containing a and zero to the others, so integrating against it evaluates at a (our own). The Laplace transform of a finite measure μ on \[0,∞) is ∫ exp(−st) dμ(t) for Re s ≥ 0.

**Problem.** For a ≥ 0, the Laplace transform of the unit impulse at time a is exp(−sa).

**How the definition helps.** Integrating exp(−st) against the point mass evaluates it at t = a (our own). This measure replaces a limit of narrow pulses of unit area, whose integrals tend to evaluation at a for every bounded continuous kernel (our own).

**Paper or page:** [Laplace Transform of Shifted Dirac Delta Function](https://proofwiki.org/wiki/Laplace_Transform_of_Shifted_Dirac_Delta_Function). It says: “ℒ(δ(t − a)) = e⁻ᵃˢ”

**Sources:** none listed. No primary source with a working link was found.

### Hyperplane integrals give Fourier slices

**Remember:** Integrate across the plane, then transform along its normal.

*True by definition.* MSC 44A12 (Radon transform). arXiv math.CA, math.AP. Level 2: later undergraduate.

**Definition.** For a unit vector θ, the Radon transform of an integrable f in direction θ is the density of the mass f(x) dx pushed onto the line by x ↦ x·θ. For almost every s this density equals the integral of f over the hyperplane x·θ = s.

**Problem.** For integrable f and a unit vector θ, the Fourier transform of the Radon data in direction θ equals the Fourier transform of f on the line through 0 along θ.

**How the definition helps.** Pushing mass forward preserves the integral of every function of x·θ, including the Fourier exponential, which gives the slice formula (our own). Both transforms must use the same exponential convention, and Fubini's theorem identifies the density with the hyperplane integrals (our own).

**nLab:** [Radon transform](https://ncatlab.org/nlab/show/Radon+transform). It says: “It corresponds to pull-push through the incidence correspondence of points and hyperplanes.”

**Wikipedia:** [Projection-slice theorem](https://en.wikipedia.org/wiki/Projection-slice_theorem). It says: “Take that same function, but do a two-dimensional Fourier transform first, and then slice the function through its origin, parallel to the projection line.”

**Sources:** none listed. No primary source with a working link was found.

### Formal Z transforms solve recurrences

**Remember:** A delay is multiplication by the series variable.

*True by definition.* MSC 44A55 (Discrete operational calculus). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a sequence x vanishing at negative indices, the formal Z-transform is the power series X(w) = ∑ x\[n\]wⁿ over n ≥ 0, with w = 1/z. No convergence is needed. A delay by j steps multiplies the series by wʲ.

**Problem.** Let g vanish at negative indices and let a₁,…,aₘ be constants. The recurrence x\[n\] − ∑ aⱼx\[n − j\] = g\[n\] for n ≥ 0 has one solution vanishing at negative indices. Its series is G(w)/(1 − ∑ aⱼwʲ), where G represents g and both sums run from 1 to m.

**How the definition helps.** The recurrence becomes (1 − ∑ aⱼwʲ)X(w) = G(w), one multiplication by a polynomial (our own). That polynomial has constant term one, so it has a unique formal reciprocal, built one coefficient at a time (our own). Analytic convergence needs separate growth estimates (our own).

**Wikipedia:** [Z-transform](https://en.wikipedia.org/wiki/Z-transform). It says: “the formal power series X(z)”

**Sources:** none listed. No primary source with a working link was found.

### Bounded support ensures moment uniqueness

**Remember:** On a bounded interval, polynomials approximate every continuous test.

*Rules out counterexamples.* MSC 44A60 (Moment problems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Hausdorff moment problem asks for a finite positive measure on a fixed closed bounded interval with given moments, the integrals of 1, t, t², and so on. The moments fix the integral of every polynomial, and on such an interval polynomials approximate every continuous function uniformly.

**Problem.** A solvable Hausdorff moment problem has exactly one solution. The same conclusion need not hold on the nonnegative half-line.

**How the definition helps.** By the Weierstrass approximation theorem, two solutions agree on all continuous functions, and these integrals determine a finite measure (our own). On the half-line this fails: a lognormal distribution shares its moments with other distributions.

**Wikipedia:** [Moment problem](https://en.wikipedia.org/wiki/Moment_problem). It says: “The uniqueness of μ in the Hausdorff moment problem follows from the Weierstrass approximation theorem”

**Sources:** none listed. No primary source with a working link was found.

### Convergence regions distinguish Laplace signals

**Remember:** The same fraction can describe opposite sides of time.

*Rules out counterexamples.* MSC 44A10 (Laplace transform). arXiv math.CA. Level 3: graduate.

**Definition.** The two-sided Laplace transform of a measurable f on ℝ is the formula F(s) = ∫ exp(−st)f(t) dt together with its region of absolute convergence. This region consists of the complex s with ∫ \|exp(−st)f(t)\| dt finite, and it says which vertical lines carry valid data (our own).

**Problem.** Suppose both two-sided transforms converge absolutely on one vertical line and agree there. Then their inputs agree almost everywhere. The formula 1/s alone admits two different inputs.

**How the definition helps.** On a vertical line Re s = c inside the region, F is the Fourier transform of exp(−ct)f(t), so Fourier uniqueness determines f almost everywhere (our own). The positive-time unit step and minus the negative-time unit step both give 1/s, on the opposite half-planes Re s &gt; 0 and Re s &lt; 0 (our own).

**Wikipedia:** [Laplace transform](https://en.wikipedia.org/wiki/Laplace_transform). It says: “In the two-sided case, it is sometimes called the strip of absolute convergence.”

**Sources:** none listed. No primary source with a working link was found.

### Fourier inversion recovers Laplace inputs

**Remember:** On a vertical line, Laplace inversion is Fourier inversion with damping removed.

*True by definition.* MSC 44A10 (Laplace transform). arXiv math.CA. Level 3: graduate.

**Definition.** Extend f on the positive half-line by zero. On the vertical line s = c + iξ, its Laplace transform is the Fourier transform in ξ of the damped function exp(−ct)f(t).

**Problem.** Suppose the damped function and its Fourier transform are integrable. Fourier inversion of the vertical-line data, followed by multiplication by exp(ct), recovers f at its continuity points.

**How the definition helps.** Fourier inversion of the line data recovers exp(−ct)f(t) at continuity points, and multiplying by exp(ct) gives f (our own). The only work is the Fourier inversion theorem under the stated integrability (our own).

**nLab:** [Laplace transform](https://ncatlab.org/nlab/show/Laplace+transform). It says: “For imaginary numbers a, this is the Fourier transform.”

**Sources:** none listed. No primary source with a working link was found.

### Gamma averages invert Laplace transforms

**Remember:** High Laplace derivatives average with weights that concentrate near t.

*True by definition.* MSC 44A10 (Laplace transform). arXiv math.CA. Level 3: graduate.

**Definition.** For t &gt; 0 and n ≥ 1, let Aₙ(t) average f against the gamma probability density proportional to uⁿexp(−nu/t) on u ≥ 0, which piles up near t. Differentiating the Laplace transform F of f n times at s = n/t gives the same integral up to a constant factor.

**Problem.** For bounded continuous f, Aₙ(t) tends to f(t). This average equals the nth derivative of F at n/t multiplied by (−1)ⁿ(n/t)ⁿ⁺¹/n!.

**How the definition helps.** The density has mean (n+1)t/n → t and variance (n+1)t²/n² → 0, so Chebyshev's inequality makes its mass outside any neighbourhood of t small (our own). Continuity of f controls the error near t, and boundedness controls the rest. Differentiating under the integral gives the derivative formula.

**Paper or page:** [Multidimensional vector-valued Laplace transform and applications](https://arxiv.org/abs/2506.18909v1). It says: “Then the following Post-Widder inversion formula holds”

**Sources:**

- [Multidimensional vector-valued Laplace transform and applications](https://arxiv.org/abs/2506.18909v1)

### Zero extension absorbs initial values

**Remember:** The jump at zero carries the initial value.

*True by definition.* MSC 44A10 (Laplace transform), 44A45. arXiv math.CA. Level 3: graduate.

**Definition.** Extend f by zero to negative time, so the extension jumps by f(0) at t = 0. Its distributional derivative, defined by pairing with minus the derivative of each test function, is f′ on t &gt; 0 plus a point mass of weight f(0) at zero.

**Problem.** Assume f is continuously differentiable on \[0,∞) and \|f(t)\| + \|f′(t)\| ≤ M exp(ωt). For Re s &gt; ω, the Laplace transform of the extended function’s distributional derivative equals s times the transform of f.

**How the definition helps.** Pairing with exp(−st) moves the derivative onto the exponential, which gives the factor s (our own). Equivalently, the point mass adds f(0) to the usual transform sF − f(0) of f′ (our own). Justifying the pairing with the exponential, which lacks compact support, needs cutoffs and the growth bound (our own).

**Paper or page:** [Laplace Transform of Derivative](https://proofwiki.org/wiki/Laplace_Transform_of_Derivative). It says: “ℒ(f′(t)) = sℒ(f(t)) − f(0)”

**Sources:** none listed. No primary source with a working link was found.

### Backprojection transposes Radon integration

**Remember:** Integrate over the same point and plane pairs in reverse order.

*True by definition. Confidence: medium.* MSC 44A12 (Radon transform). arXiv math.FA. Level 3: graduate.

**Definition.** The Radon transform Rf(θ,t) integrates f over the hyperplane x·θ = t, for unit normals θ. The backprojection Bg(x) averages g(θ, x·θ) over directions θ with uniform probability, so it collects g over exactly the hyperplanes through x (our own).

**Problem.** For real smooth compactly supported f and g, integrating (Rf)g over offsets and over directions with uniform probability gives the same value as integrating f·Bg over space.

**How the definition helps.** Both integrals sum f(x)g(θ,t) over the same pairs of a point and a hyperplane through it, in opposite orders (our own). For each θ, volume splits into the offset x·θ and volume on the perpendicular hyperplane, so Fubini's theorem gives equality (our own).

**nLab:** [Radon transform](https://ncatlab.org/nlab/show/Radon+transform). It says: “It corresponds to pull-push through the incidence correspondence of points and hyperplanes.”

**Sources:** none listed. No primary source with a working link was found.

### Compact support restores limited-angle Radon uniqueness

**Remember:** Analytic Fourier transform: one open wedge fixes all frequencies.

*Rules out counterexamples. Confidence: medium.* MSC 44A12 (Radon transform). arXiv math.CA. Level 3: graduate.

**Definition.** Limited-angle Radon data keep only the line integrals of a planar function whose unit normals lie in a fixed nonempty open arc shorter than a semicircle. The inputs are smooth functions that vanish outside a bounded set, so their Fourier transforms are real analytic (our own).

**Problem.** Limited-angle Radon data determine every smooth compactly supported function on the plane uniquely.

**How the definition helps.** The Fourier slice theorem turns the measured line integrals into values of the Fourier transform on an open double wedge, and an analytic function is fixed by its values on an open set (our own). Without compact support the result fails. A nonzero rapidly decreasing function whose Fourier transform is a smooth bump outside the double wedge has zero measured line integrals (our own).

**nLab:** [Radon transform](https://ncatlab.org/nlab/show/Radon+transform). It says: “The Radon transform converts between functions on ℝⁿ which are integrable on all hyperplanes and functions on the space of all hyperplanes of ℝⁿ.”

**Wikipedia:** [Projection-slice theorem](https://en.wikipedia.org/wiki/Projection-slice_theorem). It says: “F₁P₁ = S₁F₂.”

**Sources:** none listed. No primary source with a working link was found.

### Evenness makes Funk data injective

**Remember:** Great circles pair opposite points, so only the even part survives.

*Rules out counterexamples.* MSC 44A12 (Radon transform). arXiv math.FA. Level 3: graduate.

**Definition.** The Funk transform integrates a function on the unit sphere in ℝ³ over each great circle. Each great circle contains every one of its points together with the opposite point, so the transform sees only the even part of a function, the part whose values agree at opposite points.

**Problem.** The Funk transform is injective on even continuous functions. On all continuous functions its null space consists of the odd functions.

**How the definition helps.** Odd functions cancel on each great circle, so the null space contains them, for example the height coordinate (our own). On even functions, expand in spherical harmonics, the sphere’s analogues of Fourier modes; in even degree n the transform multiplies by a constant times the Legendre value Pₙ(0), which is never zero (our own).

**Wikipedia:** [Funk transform](https://en.wikipedia.org/wiki/Funk_transform). It says: “The Funk transform annihilates all odd functions, and so it is natural to confine attention to the case when ƒ is even.”

**Sources:** none listed. No primary source with a working link was found.

### Frequency correction inverts Radon backprojection

**Remember:** Backprojection blurs by 1/\|x\|; sharpen each frequency by \|ξ\|ⁿ⁻¹.

*Makes the theorem clean to state or prove.* MSC 44A12 (Radon transform), 45Q05. arXiv math.CA. Level 3: graduate.

**Definition.** The Radon transform integrates a function over each hyperplane in ℝⁿ. Backprojection, its dual, sends hyperplane data to the function whose value at x is the average of the data over all hyperplanes through x. Backprojection after the Radon transform commutes with translations and rotations, so it is convolution with a radial kernel (our own).

**Problem.** Let f be smooth and rapidly decreasing on ℝⁿ, with n ≥ 2. Backprojecting its Radon transform multiplies the Fourier transform of f by C/\|ξ\|ⁿ⁻¹ at each frequency ξ ≠ 0, for a positive constant C, so dividing by this factor recovers f by Fourier inversion.

**How the definition helps.** The composition of backprojection with the Radon transform is convolution with a constant times 1/\|x\| (our own). The Fourier transform of 1/\|x\| on ℝⁿ is a constant times 1/\|ξ\|ⁿ⁻¹, which gives the multiplier (our own).

**Wikipedia:** [Radon transform](https://en.wikipedia.org/wiki/Radon_transform). It says: “Explicit and computationally efficient inversion formulas for the Radon transform and its dual are available.”

**Sources:**

- [Sigurdur Helgason, The Radon Transform, second edition (1999)](https://doi.org/10.1007/978-1-4757-1463-0)

### Radon offset moments are polynomials

**Remember:** On each slice, the offset is the dot product.

*True by definition.* MSC 44A12 (Radon transform). arXiv math.CA. Level 3: graduate.

**Definition.** The Radon transform Rf(θ,t) integrates f over the hyperplane x · θ = t, where θ is a unit normal and t is a signed offset. So on that slice the offset t equals the dot product x · θ.

**Problem.** Let f be smooth and rapidly decreasing on ℝⁿ. For each integer k ≥ 0, integrating tᵏRf(θ,t) over t gives a homogeneous polynomial of degree k evaluated at θ. In particular, the zeroth moment is constant.

**How the definition helps.** On each slice tᵏ equals (x · θ)ᵏ, so integrating tᵏRf(θ,t) over t gives the integral of (x · θ)ᵏf(x) over ℝⁿ, a homogeneous polynomial of degree k in θ (our own). For n ≥ 2, the function θ₁² exp(−t²) is unchanged under (θ,t) ↦ (−θ,−t) but has a nonconstant zeroth moment, so it is not Radon data (our own).

**Wikipedia:** [Radon transform](https://en.wikipedia.org/wiki/Radon_transform). It says: “There are also conditions on the moments of the Radon transform.”

**Sources:** none listed. No primary source with a working link was found.

### Radon projections preserve convolution

**Remember:** Projection is linear, so it carries sums, hence convolutions.

*True by definition. Confidence: medium.* MSC 44A12 (Radon transform). arXiv math.CA. Level 3: graduate.

**Definition.** For a finite Borel measure μ on ℝⁿ and a unit vector θ, the projected measure Pθμ on ℝ is the image of μ under the linear map x ↦ x · θ. So (Pθμ)(E) = μ({x : x · θ ∈ E}) for every Borel set E, and these are the Radon data in direction θ.

**Problem.** For two finite Borel measures and each unit vector θ, projecting their convolution gives the convolution of their projections.

**How the definition helps.** Convolution is the image of the product measure under addition, and x ↦ x · θ sends x + y to x · θ + y · θ (our own). So both sides are the image of the product measure under (x,y) ↦ x · θ + y · θ (our own). For measures with densities, Fubini’s theorem matches this with the usual hyperplane-integral definition almost everywhere (our own).

**nLab:** [Radon transform](https://ncatlab.org/nlab/show/Radon+transform). It says: “It corresponds to pull-push through the incidence correspondence of points and hyperplanes.”

**Sources:** none listed. No primary source with a working link was found.

### Hermite phases add transform orders

**Remember:** One basis, one phase per mode, so orders add.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** The fractional Fourier transform of real order α keeps the normalized Hermite basis of L²(ℝ), indexed by n ≥ 0, and multiplies the coefficient of the nth Hermite function by exp(−iπαn/2).

**Problem.** Each transform is unitary, meaning that it preserves lengths and maps onto the whole space, and composing orders α and β gives order α + β. Order one gives the unitary Fourier transform with kernel exp(−ixξ)/√(2π).

**How the definition helps.** Every order is diagonal in the same basis, so the phases multiply and the orders add, and each phase has absolute value one, so lengths are kept (our own). Order one matches the Fourier transform because the nth Hermite function is a Fourier eigenfunction with eigenvalue (−i)ⁿ = exp(−iπn/2) (our own).

**Paper or page:** [Fractional Fourier transforms, harmonic oscillator propagators and Strichartz estimates on Pilipovic and modulation spaces](https://arxiv.org/abs/2111.09575v5). It says: “𝓕ᵨ₁ ∘ 𝓕ᵨ₂ = 𝓕ᵨ₁₊ᵨ₂”

**Sources:**

- [Fractional Fourier transforms, harmonic oscillator propagators and Strichartz estimates on Pilipovic and modulation spaces](https://arxiv.org/abs/2111.09575v5)

### Kernel subtraction repairs Hilbert tails

**Remember:** Subtract the far tail of the kernel; keep the local pole.

*Rules out counterexamples.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** Set c(t) = 1/t for \|t\| &gt; 1 and c(t) = 0 otherwise. The modified Hilbert transform integrates f(t)(1/(x − t) + c(t))/π over ℝ as a principal value, omitting \|t − x\| ≤ ε and letting ε decrease to zero. The added term makes the kernel decay like 1/t² at infinity, while the pole at t = x stays the same (our own).

**Problem.** For every bounded, locally Hölder continuous function f on ℝ, the modified Hilbert transform exists at every x.

**How the definition helps.** The 1/t² decay makes the tails integrable for bounded f, and near x the symmetric cut cancels f(x) while the Hölder bound makes the remainder integrable (our own). Without the correction, f(t) = tanh(t) at x = 0 gives an integrand like −1/\|t\| at both ends, so the integral diverges (our own).

**Wikipedia:** [Hilbert transform](https://en.wikipedia.org/wiki/Hilbert_transform). It says: “with u = sgn(x), the integral defining H(u) diverges almost everywhere to ±∞.”

**Sources:**

- [Charles Fefferman, Characterizations of bounded mean oscillation (1971)](https://doi.org/10.1090/S0002-9904-1971-12763-5)

### Logarithms turn Mellin norm preservation into Fourier norm preservation

**Remember:** Mellin is Fourier in logarithmic coordinates.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.CA, math.AP. Level 3: graduate.

**Definition.** The normalized Mellin transform on the line Re s = c is the unitary Fourier transform after the substitution r = exp(x). Precisely, set g(x) = exp(cx)f(exp(x)), and let the transform at c + iξ be the Fourier transform of g at −ξ.

**Problem.** Suppose ∫₀<sup>∞</sup> \|f(r)\|² r²ᶜ dr/r is finite. Then the integral over ξ of the squared transform equals this number.

**How the definition helps.** The substitution r = exp(x) turns the weighted integral of \|f\|² into ∫ \|g(x)\|² dx (our own). Plancherel’s theorem says the unitary Fourier transform keeps that integral (our own). On smooth compactly supported f, the same substitution matches this with the usual Mellin integral (our own).

**Paper or page:** [Well-Posedness and Regularity of the Heat Equation with Robin Boundary Conditions in the Two-Dimensional Wedge](https://arxiv.org/abs/2411.04651v2). It says: “For every $\\beta \\in \\mathbb {R}$ the map \\eqref{mellin-iso} is an isometric isomorphism.”

**Sources:**

- [Well-Posedness and Regularity of the Heat Equation with Robin Boundary Conditions in the Two-Dimensional Wedge](https://arxiv.org/abs/2411.04651v2)

### Matching bases makes Bargmann unitary

**Remember:** Hermite functions go to normalized monomials, basis to basis.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** The Bargmann transform sends the nth normalized Hermite function to zⁿ/√(n!), for n ≥ 0, and extends linearly. These monomials form an orthonormal basis of the Bargmann–Fock space, the entire functions square integrable for exp(−\|z\|²) dA(z)/π, where dA is area.

**Problem.** The Bargmann transform is a unitary map onto the space of entire functions square integrable for the complex Gaussian weight.

**How the definition helps.** The transform sends one orthonormal basis onto another, so it keeps sums of squared coefficients and maps onto the whole space (our own). The work is proving that both systems are complete and that the usual Gaussian integral formula acts this way on Hermite functions (our own).

**nLab:** [Bargmann-Segal transform](https://ncatlab.org/nlab/show/Bargmann-Segal+transform). It says: “The classical Bargmann-Segal transform is a unitary transformation from the Hilbert space of Lebesgue square integrable functions L²(ℝⁿ) to the Bargmann-Fock space of analytic functions with certain growth condition.”

**Sources:**

- [Valentine Bargmann, On a Hilbert space of analytic functions and an associated integral transform, part I (1961)](https://doi.org/10.1002/cpa.3160140303)

### Radial Fourier transforms explain Hankel inversion

**Remember:** Radial functions ignore the reflection that two Fourier transforms make.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** Fix an integer d ≥ 2. The radial Hankel transform of a profile h on (0,∞), square-integrable against rᵈ⁻¹ dr, is the profile of the unitary Fourier transform of the radial function x ↦ h(\|x\|) on ℝᵈ, which is again radial.

**Problem.** Applying this transform twice recovers every profile that is square-integrable against rᵈ⁻¹ dr.

**How the definition helps.** Applying the Fourier transform twice sends f(x) to f(−x), and a radial function is unchanged by x ↦ −x (our own). The remaining work is Fourier inversion on L² and the identification of the radial Fourier kernel with the Bessel formula (our own).

**Wikipedia:** [Hankel transform](https://en.wikipedia.org/wiki/Hankel_transform). It says: “The Hankel transform appears when one writes the multidimensional Fourier transform in hyperspherical coordinates”

**Paper or page:** [The Wˢ,ᵖ-boundedness of stationary wave operators for the Schrödinger operator with inverse-square potential](https://arxiv.org/abs/2110.01969v2). It says: “\\mathscr H<sub>\\nu k</sub>\\mathscr H{\\nu \_k}&amp; =I”

**Sources:** none listed. No primary source with a working link was found.

### Stieltjes boundary values recover atoms

**Remember:** Scaled by ε, the kernel shrinks to a point indicator.

*True by definition. Confidence: medium.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)), 44A60. arXiv math.CA. Level 3: graduate.

**Definition.** The Stieltjes transform of a finite positive measure μ on ℝ, atoms included, is the integral of 1/(t − z) dμ(t) for nonreal z. At z = x + iε, ε times its imaginary part integrates ε²/((t − x)² + ε²), a kernel between 0 and 1 that equals 1 at t = x (our own).

**Problem.** As ε decreases to zero, ε times the imaginary part of the transform at x + iε tends to μ({x}), the mass at x. This holds even when x is not an isolated point of the support.

**How the definition helps.** As ε decreases to zero the kernel tends to the indicator of {x}, so dominated convergence gives the mass at x (our own).

**Wikipedia:** [Stieltjes transformation](https://en.wikipedia.org/wiki/Stieltjes_transformation). It says: “If instead the measure has a point mass at x, then the limit as ε → 0⁺ of the integral diverges”

**Sources:** none listed. No primary source with a working link was found.

### Stieltjes imaginary parts smooth measures

**Remember:** Minus the imaginary part over π is μ blurred by Poisson.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.CA. Level 3: graduate.

**Definition.** Let G(z) integrate 1/(z − t) against a finite positive measure μ on ℝ. For ε &gt; 0, pε(x) = −Im G(x + iε)/π is the convolution of μ with the Poisson kernel ε/(π(u² + ε²)) (our own), a probability density that concentrates at zero as ε shrinks.

**Problem.** The measures with density pε approach μ as ε decreases to zero. This means their integrals against every continuous compactly supported function approach its integral against μ.

**How the definition helps.** Since pε is μ smoothed by a probability density whose mass leaves every neighborhood of zero, the Poisson averages of a continuous compactly supported test function converge to it pointwise with a uniform bound. Fubini’s theorem and bounded convergence then give convergence of the integrals against μ.

**Wikipedia:** [Stieltjes transformation](https://en.wikipedia.org/wiki/Stieltjes_transformation). It says: “the smaller the value of ε, the less smoothing is applied.”

**Sources:**

- [Matthew J. Colbrook, Computing Spectral Measures and Spectral Types (2021)](https://doi.org/10.1007/s00220-021-04072-4)

### Product grids preserve Laplace uniqueness

**Remember:** Grid samples test one coordinate at a time.

*Makes the theorem clean to state or prove.* MSC 44A30 (Multiple integral transforms). arXiv math.FA. Level 3: graduate.

**Definition.** A set of sample points is determining if the Laplace transform values there distinguish integrable functions up to equality almost everywhere. A product grid picks a countable sequence of complex numbers with positive real parts for each coordinate and takes every tuple with one entry from each sequence.

**Problem.** On a finite product of nonnegative half-lines, the grid is determining exactly when every coordinate sequence is determining on its half-line.

**How the definition helps.** On a grid one coordinate can vary while the others stay fixed, and the exponential weight factors, so Fubini’s theorem reduces uniqueness to one variable at a time (our own). Countability lets one discard a single null set at each step (our own). If one sequence fails, multiply its undetected function by a nonzero integrable function of the other variables (our own).

**Paper or page:** [Uniqueness sequences for multidimensional vector-valued Laplace transform](https://arxiv.org/abs/2510.17485v1). It says: “are the uniqueness sequences for the one-dimensional Laplace transform if and only if”

**Sources:**

- [Uniqueness sequences for multidimensional vector-valued Laplace transform](https://arxiv.org/abs/2510.17485v1)

### Logarithms transfer Young’s inequality

**Remember:** The logarithm turns division into subtraction and dx/x into ordinary length.

*True by definition.* MSC 44A35 (Convolution as an integral transform). arXiv math.CA. Level 3: graduate.

**Definition.** Mellin convolution is h(x) = ∫₀<sup>∞</sup> f(x/y)g(y) dy/y on (0,∞), and every norm here uses the measure dx/x. Under u = log x, dx/x becomes du and division becomes subtraction, so this is ordinary convolution on ℝ (our own).

**Problem.** Let f and g be smooth with compact support in (0,∞), and let p, q, r ∈ \[1,∞) satisfy 1/r = 1/p + 1/q − 1. Then the r-norm of h is at most the p-norm of f times the q-norm of g.

**How the definition helps.** In logarithmic coordinates the statement becomes Young’s inequality for ordinary convolution on ℝ, with all three norms unchanged (our own).

**Paper or page:** [From Schwartz space to Mellin transform](https://arxiv.org/abs/2207.10706v1). It says: “Let p, q, r ∈ \[1, ∞) be such that 1/r = 1/p + 1/q − 1.”

**Sources:**

- [From Schwartz space to Mellin transform](https://arxiv.org/abs/2207.10706v1)

### Quadratic-phase convolution becomes multiplication

**Remember:** Put the phase on both inputs, convolve, then remove it.

*True by definition.* MSC 44A35 (Convolution as an integral transform), 44A15. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** Let q(x) = exp(iax²) for real a, and let T be the Fourier transform after multiplying by q: Tf(ξ) = ∫ q(x)f(x)exp(−ixξ) dx. The adapted convolution of f and g is (qf ∗ qg)/q, the ordinary convolution of the phased inputs with the phase removed afterward.

**Problem.** For integrable f and g on ℝ, applying T to their adapted convolution gives the pointwise product of Tf and Tg.

**How the definition helps.** T multiplies by q before the Fourier transform, which cancels the division by q, so T of the adapted convolution is the Fourier transform of qf ∗ qg (our own). The Fourier convolution theorem turns this into the product of Tf and Tg (our own). The quoted formula has an extra phase because the paper adds an output phase and scales the Fourier integral, which our own convention omits.

**Paper or page:** [The windowed quadratic phase Fourier transform: structure, convolution theorem and application](https://arxiv.org/abs/2507.03911v2). It says: “(𝒬Λ(f ⊗ₐ g))(ω) = e⁻ⁱ⁽ᶜω²⁺ᵉω⁾ F̃(ω) G̃(ω)”

**Sources:** none listed. No primary source with a working link was found.

### Convolution quotients make integration invertible

**Remember:** Taking fractions gives integration an inverse and gives convolution a unit.

*True by definition.* MSC 44A40 (Calculus of Mikusi?ski and other operational calculi). arXiv math.CA. Level 3: graduate.

**Definition.** Convolution fractions are formal quotients f/g of continuous functions on \[0,∞), with g not identically zero, under the convolution (f∗g)(t) = ∫₀ᵗ f(t − s)g(s) ds. As with fractions of integers, f/g = h/k when f∗k = h∗g, and products convolve numerators and denominators.

**Problem.** The constant kernel 1 has an inverse in the convolution fraction field. Its product with that inverse is the unit, even though no continuous convolution kernel acts as the unit.

**How the definition helps.** In a field of fractions every nonzero element has an inverse, so the constant kernel 1, which represents integration, has one (our own). Titchmarsh’s theorem, that convolution has no zero divisors, makes the fractions well defined (our own). No continuous kernel is a unit, because every convolution vanishes at time zero (our own).

**Wikipedia:** [Convolution quotient](https://en.wikipedia.org/wiki/Convolution_quotient). It says: “a convolution quotient is to the operation of convolution as a quotient of integers is to multiplication”

**Sources:** none listed. No primary source with a working link was found.

### Exponential moments ensure moment uniqueness

**Remember:** Exponential tails make the moment series analytic, so moments fix the law.

*Rules out counterexamples.* MSC 44A60 (Moment problems), 44A10. arXiv math.CA. Level 3: graduate.

**Definition.** A probability measure μ on ℝ has an exponential moment if ∫ exp(ε\|x\|) dμ(x) is finite for some ε &gt; 0. Then its transform ∫ exp(zx) dμ(x) is analytic on the strip \|Re z\| &lt; ε, with Taylor coefficients at zero given by the moments (our own).

**Problem.** If a probability measure on ℝ has an exponential moment, its nonnegative integer moments determine it among all probability measures on ℝ.

**How the definition helps.** A measure with the same moments also integrates cosh(εx), by monotone convergence on its Taylor series, so both transforms are analytic on the strip with the same Taylor series at zero (our own). Analytic continuation makes them agree on the imaginary axis, and Fourier uniqueness identifies the laws. Without an exponential moment this fails: the lognormal law shares all its moments with other laws.

**Wikipedia:** [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution). It says: “However, the log-normal distribution is not determined by its moments.”

**Sources:**

- [C. C. Heyde, On a Property of the Lognormal Distribution (1963)](https://doi.org/10.1111/j.2517-6161.1963.tb00521.x)

### Shifted moments detect negative support

**Remember:** Squares test positivity; x times squares tests the half-line.

*Rules out counterexamples.* MSC 44A60 (Moment problems). arXiv math.CA. Level 3: graduate.

**Definition.** For a real sequence with m₀ = 1, extend L(xⁿ) = mₙ linearly to real polynomials. The sequence passes the two Stieltjes tests when L(p²) &gt; 0 and L(xp²) &gt; 0 for every nonzero real polynomial p, just as p² and xp² are nonnegative on \[0,∞) (our own).

**Problem.** The sequence is the moment sequence of a probability measure with infinite support in \[0,∞) exactly when it passes both tests.

**How the definition helps.** On \[0,∞) the functions p² and xp² are nonnegative and vanish at only finitely many points, so the moments of a measure with infinite support pass both tests (our own). Conversely, the two tests make the ordinary and shifted moment matrices positive definite (our own), and the Stieltjes existence theorem builds the measure from them. The uniform measure on \[−2,−1\] passes the first test but gives L(x) &lt; 0 (our own).

**Wikipedia:** [Stieltjes moment problem](https://en.wikipedia.org/wiki/Stieltjes_moment_problem). It says: “det(Δₙ) &gt; 0 and det(Δₙ⁽¹⁾) &gt; 0.”

**Sources:** none listed. No primary source with a working link was found.

### Unit-interval moments have nonnegative differences

**Remember:** Each difference multiplies by 1 − x, nonnegative on \[0,1\].

*Rules out counterexamples.* MSC 44A60 (Moment problems). arXiv math.CA. Level 3: graduate.

**Definition.** A Hausdorff moment sequence is mₙ = ∫₀¹ xⁿ dμ for one finite positive measure μ on \[0,1\]. Taking differences mₙ − mₙ₊₁ repeatedly, k times, gives ∫ xⁿ(1 − x)ᵏ dμ, which is nonnegative because x lies in \[0,1\] (our own).

**Problem.** A real sequence is a Hausdorff moment sequence exactly when all its iterated differences, including the sequence itself, have only nonnegative terms.

**How the definition helps.** Each difference inserts the factor 1 − x, which is nonnegative on \[0,1\], so necessity holds (our own). A unit mass at 2 has first difference 1 − 2 &lt; 0, so the interval matters (our own). The converse uses Bernstein polynomial approximation and the representation of positive linear functionals by measures (our own).

**Paper or page:** [Chapter 12: The moment problem on compact semi-algebraic sets (revised version)](https://arxiv.org/abs/2309.10052v1). It says: “s is a Hausdorff moment sequence on \[0, 1\]ᵈ.”

**Sources:**

- [Chapter 12: The moment problem on compact semi-algebraic sets (revised version)](https://arxiv.org/abs/2309.10052v1)
- [Felix Hausdorff, Summationsmethoden und Momentfolgen. I (1921)](https://doi.org/10.1007/BF01378337)

### Compact support removes light ray ambiguity

**Remember:** Analytic Fourier transforms let visible frequencies fix the hidden ones.

*Rules out counterexamples.* MSC 44A12 (Radon transform). arXiv math.AP, math.CA. Level 4: research.

**Definition.** The scalar light ray transform integrates a function on spacetime ℝ¹⁺ⁿ, with n ≥ 2, along every straight line that moves at unit spatial speed. The inputs are smooth functions that vanish outside a bounded set, so their Fourier transforms are real analytic (our own).

**Problem.** All light ray integrals together determine a smooth compactly supported function. The same data need not determine a smooth rapidly decreasing function.

**How the definition helps.** The Fourier transforms of the line integrals give the Fourier transform of f where the absolute time frequency is less than the length of the spatial frequency, an open region, and an analytic function is fixed by its values there (our own). For rapidly decreasing inputs this fails. A nonzero smooth frequency bump where the reverse strict inequality holds has a rapidly decreasing inverse Fourier transform with zero line integrals (our own).

**Paper or page:** [The Momentum Light Ray Transform](https://arxiv.org/abs/2510.18450v1). It says: “Let $n\\ge 2$, $m\\geq 0$, and $f<sup>(m)</sup>\\in C<sub>c</sub><sup>\\infty </sup>(\\mathbb {R}<sup>1+n</sup>;S<sup>m</sup>)$. Suppose that $ \\Tilde {L}<sup>m,m</sup>f<sup>(m)</sup>((t,x),\\omega )=0 \\quad \\forall \\omega \\in \\S <sup>n-1</sup>, (t,x) \\in \\mathbb {R}<sup>1+n</sup>,$ then\\begin{align\*}  f<sup>(m)</sup>&amp; =\\begin{cases}  i\_{g\_{\\frac{1}{c}}}f<sup>(m-2)</sup> \\quad \\mbox{for some} \\quad f<sup>(m-2)</sup> \\in C<sub>c</sub><sup>\\infty </sup>(\\mathbb {R}<sup>1+n</sup>;S<sup>m-2</sup>) \\quad \\mbox{when $m\\ge 2$,} \\\\ 0 \\hspace{1.4cm}\\quad \\mbox{when}\\quad m=0,1. \\end{cases}\\end{align\*}”

**Sources:**

- [The Momentum Light Ray Transform, Theorem 2 (2025)](https://arxiv.org/abs/2510.18450v1)

### Filtered Radon data localize ridges

**Remember:** Opposite directions share the profile, with reversed offsets.

*True by definition.* MSC 44A12 (Radon transform). arXiv math.FA. Level 4: research.

**Definition.** A ridge distribution u in direction θ with finite measure profile r acts on a Schwartz function f by ⟨u,f⟩ = ∫ Rf(θ,t) dr(t), where Rf integrates f over the hyperplane x · θ = t. Its filtered Radon data act on each range function g = Rf by ⟨u,R⁻¹g⟩ = ∫ g(θ,t) dr(t).

**Problem.** For a finite measure profile, the filtered transform has an even measure representation. It places half the profile at θ and half its reflection at −θ.

**How the definition helps.** Testing through R⁻¹ reads off the data at direction θ against the profile (our own). Since (θ,t) and (−θ,−t) describe the same hyperplane, every range function satisfies g(θ,t) = g(−θ,−t), so averaging the two descriptions gives the even representation (our own). The work lies in characterizing the range of R and inverting R there (our own).

**Paper or page:** [Ridges, Neural Networks, and the Radon Transform](https://arxiv.org/abs/2203.02543v1). It says: “be the ridge with profile r ∈ 𝒮′(ℝ) and direction ξ₀ ∈ 𝕊ᵈ⁻¹.”

**Sources:**

- [Ridges, Neural Networks, and the Radon Transform](https://arxiv.org/abs/2203.02543v1)

### Positive backprojections transfer Radon bounds

**Remember:** Write the weight as hyperplanes, and hyperplane inequalities pass to integrals.

*True by definition.* MSC 44A12 (Radon transform). arXiv math.FA. Level 4: research.

**Definition.** A weight w has a positive backprojection if a nonnegative measure ν on hyperplanes in ℝⁿ satisfies ∫ wh dx = ∫ Rh dν for every nonnegative measurable h, where Rh integrates h over each hyperplane. So integrals against w are positive combinations of hyperplane integrals, and inequalities between hyperplane integrals pass to them (our own).

**Problem.** Let p &gt; 1, and let φ and ψ be continuous, even, nonnegative functions in both L¹ and Lᵖ on ℝⁿ with Rφ ≤ Rψ on every hyperplane. If φᵖ⁻¹ has a positive backprojection, then ‖φ‖ₚ ≤ ‖ψ‖ₚ.

**How the definition helps.** Using the measure for w = φᵖ⁻¹ with h = φ and h = ψ gives ∫ φᵖ ≤ ∫ φᵖ⁻¹ψ (our own). Hölder’s inequality bounds the right side by ‖φ‖ₚᵖ⁻¹‖ψ‖ₚ, which gives the result (our own).

**Paper or page:** [Comparison Problems for Radon Transforms](https://arxiv.org/abs/2305.17796v1). It says: “if p &gt; 1 and φᵖ⁻¹ is an intersection function”

**Sources:**

- [Comparison Problems for Radon Transforms](https://arxiv.org/abs/2305.17796v1)

### Reflections select Hilbert modes

**Remember:** Odd and even reflections select exactly the required half-integer modes.

*True by definition.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)), 42A50. arXiv math.CA, math.FA. Level 4: research.

**Definition.** Extend f on (0,T) to a 4T-periodic function that is odd about 0 and even about T, apply minus the periodic Hilbert transform, and restrict to (0,T). Here the periodic Hilbert transform sends each positive-frequency sine to minus its cosine. The functions with both symmetries are spanned by the sines sin((j + ½)πx/T) with j ≥ 0 (our own).

**Problem.** This reflected transform sends each sine with frequency (j + ½)π/T to the cosine of the same frequency, for every nonnegative integer j.

**How the definition helps.** Each sine sin((j + ½)πx/T) already has both symmetries, so the extension leaves it unchanged, and minus the periodic Hilbert transform gives its cosine (our own). Completeness of these sines and boundedness of the periodic transform extend this to all square-integrable inputs and match the usual series definition (our own).

**Paper or page:** [Some properties of a modified Hilbert transform](https://arxiv.org/abs/2404.02609v1). It says: “where φ̃ is the periodic reflection”

**Sources:**

- [Some properties of a modified Hilbert transform](https://arxiv.org/abs/2404.02609v1)

### Stieltjes products add orders

**Remember:** Products of powers of z + t average into one power.

*Makes the theorem clean to state or prove.* MSC 44A15 (Special integral transforms (Legendre, Hilbert, etc.)). arXiv math.CA. Level 4: research.

**Definition.** For α &gt; 0 and a finite positive measure μ on \[0,∞), the Stieltjes transform of order α is ∫ (z + t)⁻ᵅ dμ(t) for z &gt; 0. Its kernel is a power of z + t, and a product of two such powers is an average of single powers with the orders added (our own).

**Problem.** On positive real arguments, the product of two generalized Stieltjes transforms of finite positive measures is another such transform. Its order is the sum of the two orders.

**How the definition helps.** The beta integral writes (z + s)⁻ᵅ(z + t)⁻ᵝ as an average over u ∈ \[0,1\] of (z + us + (1 − u)t)⁻⁽ᵅ⁺ᵝ⁾ (our own). Integrating against both measures pushes this average forward to one finite positive measure on \[0,∞), whose transform of order α + β is the product (our own).

**Paper or page:** [To the theory of generalized Stieltjes transforms](https://arxiv.org/abs/2210.03474v2). It says: “If μ₁ and μ₂ are positive, then μ is positive too.”

**Sources:**

- [To the theory of generalized Stieltjes transforms](https://arxiv.org/abs/2210.03474v2)
