### One representative per frequency class makes discrete interpolation unique

**Remember:** Keep one wave from each class of indistinguishable sample patterns.

*Rules out counterexamples.* MSC 42A15 (Trigonometric interpolation), 65T50. arXiv math.CA. Level 2: later undergraduate.

**Definition.** On the grid of N points 2πj/N, for j from 0 to N − 1, the waves exp(ikt) and exp(i(k + N)t) take the same values. So keep one frequency from each class modulo N, namely 0 through N − 1.

**Problem.** Every list of N complex samples has exactly one interpolating trigonometric polynomial using these frequencies.

**How the definition helps.** With one wave from each class, the N sampled waves are orthogonal, so the inverse discrete Fourier transform gives exactly one list of coefficients (our own). Without the restriction, 1 and exp(iNt) give the same samples, so the interpolant is not unique (our own).

**Wikipedia:** [Discrete Fourier transform](https://en.wikipedia.org/wiki/Discrete_Fourier_transform). It says: “aliasing implies that one could add N to any of the complex-sinusoid frequencies”

**Sources:** none listed. No primary source with a working link was found.

### Even reflection cancels sines

**Remember:** Even reflection keeps cosines and cancels sines.

*True by definition.* MSC 42A16 (Fourier coefficients, Fourier series of functions with special properties, special Fourier series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The even extension of an integrable f on \[0, L\] to \[−L, L\] sets f(−x) = f(x). Each sine integrand f(x)sin(nπx/L) then becomes odd, and each cosine integrand becomes even.

**Problem.** The reflected function has zero sine coefficients. Its cosine coefficients are twice the corresponding half-interval integral divided by L.

**How the definition helps.** An odd integrand integrates to zero over \[−L, L\], and an even one gives twice its integral over \[0, L\] (our own). Pointwise recovery of f is a separate question for the Fourier convergence theorem (our own).

**Paper or page:** [Fourier Series for Even Function over Symmetric Range](https://proofwiki.org/wiki/Fourier_Series_for_Even_Function_over_Symmetric_Range). It says: “Let f(x) be an even real function defined on the interval (−λ, λ).”

**Sources:** none listed. No primary source with a working link was found.

### Fourier modes turn periodic heat flow into scalar decay

**Remember:** Heat damps each nonconstant frequency at a rate set by its square.

*Makes the theorem clean to state or prove.* MSC 42A16 (Fourier coefficients, Fourier series of functions with special properties, special Fourier series), 35K05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a smooth 2π-periodic initial temperature f, the Fourier heat evolution multiplies the coefficient of exp(inx) by exp(−n²t), because exp(inx) has second derivative −n² times itself (our own). The coefficient is the average of f(x)exp(−inx) over one period.

**Problem.** For t ≥ 0, the resulting Fourier series gives the unique smooth periodic solution of the heat equation uₜ = uₓₓ with initial temperature f.

**How the definition helps.** In a solution, each coefficient must satisfy c′ = −n²c with the coefficient of f as its initial value, so it equals that value times exp(−n²t) (our own). Smooth data have coefficients that decay faster than any power, which allows termwise differentiation and recovery of f at t = 0 (our own).

**Wikipedia:** [Fourier series](https://en.wikipedia.org/wiki/Fourier_series). It says: “This application is possible because the derivatives of trigonometric functions fall into simple patterns.”

**Sources:** none listed. No primary source with a working link was found.

### Odd reflection turns half-range sine coefficients into full-range coefficients

**Remember:** Reflect with a sign change to keep only sine terms.

*True by definition.* MSC 42A16 (Fourier coefficients, Fourier series of functions with special properties, special Fourier series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The odd extension of an integrable f on (0, L) sets g(x) = f(x) and g(−x) = −f(x) for 0 &lt; x &lt; L, with g(0) = g(L) = 0, and repeats with period 2L. Each cosine integrand of g is then odd, and each sine integrand is even (our own).

**Problem.** The Fourier series of g has only sine terms. Their coefficients are twice the integrals of f(x) sin(nπx/L) over (0,L), divided by L.

**How the definition helps.** Odd integrands integrate to zero over a period, and even ones give twice the integral over (0, L) (our own). Pointwise recovery of f needs a separate convergence theorem (our own).

**Paper or page:** [Extension of Half-Range Fourier Sine Function to Symmetric Range](https://proofwiki.org/wiki/Extension_of_Half-Range_Fourier_Sine_Function_to_Symmetric_Range). It says: “bₙ = (2/λ) ∫₀<sup>λ</sup> f(x) sin(nπx/λ) dx”

**Sources:** none listed. No primary source with a working link was found.

### Periodic complex waves turn differentiation into frequency multiplication

**Remember:** Average against the opposite wave, whose derivative brings down the frequency.

*True by definition.* MSC 42A16 (Fourier coefficients, Fourier series of functions with special properties, special Fourier series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For an integrable 2π-periodic function f, its Fourier coefficient at an integer n is the average of f(x)exp(−inx) over one period. The wave exp(inx) has derivative in times itself (our own).

**Problem.** For a continuously differentiable 2π-periodic function f, the coefficient of f′ at n equals the coefficient of f at n times i·n.

**How the definition helps.** Integration by parts moves the derivative from f onto exp(−inx), which brings out the factor in, and periodicity cancels the boundary term (our own).

**nLab:** [Fourier transform](https://ncatlab.org/nlab/show/Fourier+transform). It says: “The Fourier transform replaces the operator of differentiation d/dt by the operator of multiplication by the series {2πin}ₙ∈ℤ.”

**Sources:** none listed. No primary source with a working link was found.

### Projecting onto complex waves recovers Fourier coefficients

**Remember:** Average against the opposite wave to pick out one frequency.

*True by definition.* MSC 42A16 (Fourier coefficients, Fourier series of functions with special properties, special Fourier series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For an integrable 2π-periodic function f, its Fourier coefficient at an integer n is the average of f(x)exp(−inx) over one period. Multiplying exp(imx) by exp(−inx) gives exp(i(m − n)x), which has average zero unless m = n (our own).

**Problem.** In a finite sum of waves exp(imx) with distinct integer frequencies m, the coefficient at n equals the multiplier of exp(inx). It is zero if that wave is absent.

**How the definition helps.** Averaging the finite sum term by term leaves only the term with m = n, whose average is its multiplier (our own).

**nLab:** [Fourier transform](https://ncatlab.org/nlab/show/Fourier+transform). It says: “form an orthonormal basis of L₂(S¹, dt)”

**Sources:** none listed. No primary source with a working link was found.

### Reducing frequencies modulo the sample count gives the alias sum

**Remember:** Frequencies that match on the grid add their coefficients.

*True by definition.* MSC 42A16 (Fourier coefficients, Fourier series of functions with special properties, special Fourier series), 65T50. arXiv math.CA. Level 2: later undergraduate.

**Definition.** On the grid x = 2πj/N for j from 0 through N − 1, the discrete coefficient at k is the average of the samples times exp(−ikx). Waves whose frequencies differ by a multiple of N take the same values on this grid, so the discrete coefficient cannot tell them apart.

**Problem.** For samples of the sum of an absolutely convergent Fourier series, the discrete coefficient at k equals the sum of coefficients in its group.

**How the definition helps.** Absolute convergence lets us regroup the series by frequency classes modulo N, and all waves in one class have the same samples (our own). The N distinct sampled waves are orthogonal, so the discrete coefficient at k picks out the class of k (our own).

**Wikipedia:** [Discrete Fourier transform](https://en.wikipedia.org/wiki/Discrete_Fourier_transform). It says: “changing e⁻ⁱᵗ to e<sup>(i(N−1)t)</sup>”

**Sources:** none listed. No primary source with a working link was found.

### Zero mean removes the constant that breaks Wirtinger’s inequality

**Remember:** Remove the constant so every remaining frequency costs derivative energy.

*Rules out counterexamples.* MSC 42A16 (Fourier coefficients, Fourier series of functions with special properties, special Fourier series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A 2π-periodic function has zero mean if its integral over one period is zero, which means its Fourier coefficient at frequency zero vanishes. This removes the constants, the only periodic functions with zero derivative (our own).

**Problem.** A real continuously differentiable 2π-periodic function with zero mean has ∫f² ≤ ∫(f′)² over one period. Equality holds exactly for linear combinations of sin x and cos x.

**How the definition helps.** Parseval’s identity turns ∫(f′)² into the sum of n² times the squared coefficients, and ∫f² into the same sum without the weights (our own). With frequency zero gone, every weight n² is at least one, and only n = ±1 has weight one (our own).

**Wikipedia:** [Wirtinger's inequality for functions](https://en.wikipedia.org/wiki/Wirtinger%27s_inequality_for_functions). It says: “and the fact that the average value of y is zero means that a₀ = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Rescaling the distance to a jump gives the Gibbs profile

**Remember:** Zoom by the number of terms to see the same overshoot profile.

*Makes the theorem clean to state or prove.* MSC 42A20 (Convergence and absolute convergence of Fourier and trigonometric series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Take the 2π-periodic square wave equal to 1 on (0, π) and −1 on (−π, 0), and the sum of its first N odd sine terms. Measure distance from the jump at 0 in the unit t = 2Nx, so the overshoot stays at a fixed t as N grows.

**Problem.** At each fixed t ≥ 0, the sum at x = t/(2N) tends to (2/π) times the integral of sin(u)/u from 0 to t. At t = π the overshoot approaches about nine percent of the full jump.

**How the definition helps.** The sine coefficients are 4/(πk) for odd k, so at x = t/(2N) the partial sum is a midpoint Riemann sum for (2/π) times the integral of sin(u)/u from 0 to t (our own). At t = π this limit is about 1.18, an overshoot of about nine percent of the jump 2 (our own).

**Wikipedia:** [Gibbs phenomenon](https://en.wikipedia.org/wiki/Gibbs_phenomenon). It says: “this approximation error approaches a limit of about 9% of the jump”

**Sources:** none listed. No primary source with a working link was found.

### Summable coefficients ensure uniform convergence

**Remember:** Every exponential has modulus one, so the same tail bound works everywhere.

*Rules out counterexamples.* MSC 42A20 (Convergence and absolute convergence of Fourier and trigonometric series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Wiener algebra on the circle consists of the continuous functions whose Fourier coefficients have a finite sum of absolute values. Since each wave has modulus one, the tail of the Fourier series is then bounded at every point by the same tail of that sum.

**Problem.** A continuous circle function in the Wiener algebra has a uniformly convergent Fourier series. Its sum is the original function.

**How the definition helps.** The Weierstrass M-test gives uniform convergence to a continuous sum (our own). Termwise integration shows that the sum has the same coefficients as f, so Fourier uniqueness makes them equal (our own). The condition excludes du Bois-Reymond’s continuous function whose Fourier series diverges at a point (our own).

**Wikipedia:** [Convergence of Fourier series](https://en.wikipedia.org/wiki/Convergence_of_Fourier_series). It says: “If f is continuous and its Fourier coefficients are absolutely summable, then the Fourier series converges uniformly.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Fejér kernel as a square makes it nonnegative

**Remember:** Square the magnitude of n consecutive waves and divide by n.

*True by definition.* MSC 42A24 (Summability and absolute summability of Fourier and trigonometric series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For each integer n ≥ 1, the nth Fejér kernel is Fₙ(x) = \|∑ₖ₌₀ⁿ⁻¹ exp(ikx)\|²/n for real x, the squared size of the sum of n consecutive waves, divided by n.

**Problem.** Each Fejér kernel is nonnegative everywhere, and its average over one period is one.

**How the definition helps.** A squared modulus is never negative (our own). Expanding the square gives n diagonal terms equal to one and off-diagonal waves of nonzero frequency, which have average zero, so the average is n/n = 1 (our own).

**Wikipedia:** [Fejér kernel](https://en.wikipedia.org/wiki/Fej%C3%A9r_kernel). It says: “The Fejér kernel is a positive summability kernel.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Poisson kernel by Fourier coefficients makes radii multiply

**Remember:** Convolution multiplies Fourier coefficients, so the radii multiply.

*True by definition.* MSC 42A24 (Summability and absolute summability of Fourier and trigonometric series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For 0 &lt; r &lt; 1, define the circle Poisson kernel Pᵣ by its Fourier coefficients: r to the power \|k\| at each frequency k.

**Problem.** For 0 &lt; r, s &lt; 1, the convolution of Pᵣ and Pₛ over the circle, with normalized measure, is the kernel at radius rs.

**How the definition helps.** Convolution with normalized measure multiplies Fourier coefficients, as the source says. So the convolution of Pᵣ and Pₛ has coefficient r to the \|k\| times s to the \|k\|, which is (rs) to the \|k\|, the coefficient of the kernel at radius rs (our own). Fourier uniqueness then gives equality (our own).

**Wikipedia:** [Poisson kernel](https://en.wikipedia.org/wiki/Poisson_kernel). It says: “After the Fourier transform, convolution with Pᵣ(θ) becomes multiplication by the sequence”

**Sources:** none listed. No primary source with a working link was found.

### Even Fejér kernels give both sides of a jump equal weight

**Remember:** An even kernel splits its weight equally across the jump.

*True by definition.* MSC 42A24 (Summability and absolute summability of Fourier and trigonometric series), 42A20. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Nth Fejér mean of f averages its Fourier partial sums of orders 0 through N − 1. It is the average of translates of f weighted by the Fejér kernel \|∑ⱼ₌₀ᴺ⁻¹ exp(ijt)\|²/N, which is even, nonnegative and of mass one in circle measure of total mass one (our own).

**Problem.** For an integrable periodic function with finite left and right limits at x, its Fejér means converge there to the average of those limits.

**How the definition helps.** Evenness gives each side of the jump half the kernel mass, so pairing f(x + t) with f(x − t) gives the average of the two limits (our own). Away from zero the kernel is at most a constant divided by Nt², so the distant part of the integral vanishes for integrable f (our own).

**Wikipedia:** [Fejér's theorem](https://en.wikipedia.org/wiki/Fej%C3%A9r%27s_theorem). It says: “σₙ(x₀) → ½(f(x₀+0)+f(x₀−0)).”

**Sources:** none listed. No primary source with a working link was found.

### Poisson smoothing recovers continuous functions

**Remember:** Poisson averaging keeps its mass while narrowing to the starting point.

*Rules out counterexamples.* MSC 42A24 (Summability and absolute summability of Fourier and trigonometric series). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Abel mean of a Fourier series at radius r, with 0 &lt; r &lt; 1, multiplies the coefficient at frequency k by r to the power \|k\|. It is convolution with the Poisson kernel (1 − r²)/(1 − 2r cos θ + r²), which is positive, has mean one, and concentrates at zero as r tends to one.

**Problem.** The Abel means of every continuous circle function converge to it uniformly as r tends to one.

**How the definition helps.** A positive kernel of mean one that concentrates at zero recovers every continuous function uniformly, because uniform continuity controls the nearby translates (our own). Ordinary partial sums lack such a kernel, and du Bois-Reymond’s continuous function has a Fourier series that diverges at a point (our own).

**Wikipedia:** [Poisson kernel](https://en.wikipedia.org/wiki/Poisson_kernel). It says: “the functions Pᵣ(θ) form an approximate unit in the convolution algebra L¹(T).”

**Sources:** none listed. No primary source with a working link was found.

### Band limits make sampling injective

**Remember:** Samples are Fourier coefficients of the spectrum on one frequency interval.

*Rules out counterexamples.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 94A20. arXiv math.CA. Level 2: later undergraduate.

**Definition.** An L² signal is bandlimited to \[−½, ½\] if its Fourier transform, with kernel exp(−2πitξ), vanishes almost everywhere outside that interval; use the continuous version given by the inverse transform over the interval. Its value at an integer n is then the integral of the transform times exp(2πinξ) over \[−½, ½\], a Fourier coefficient of the spectrum.

**Problem.** If the transform is supported in \[−½,½\], the signal is uniquely determined by its values at the integers.

**How the definition helps.** The integer samples give all Fourier coefficients of the spectrum on \[−½, ½\], and these coefficients determine an L² function on that interval (our own). Without the band limit, multiplication by exp(2πit) keeps the integer samples but shifts the spectrum outside the interval (our own).

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “Then f can be reconstructed from its samples on ℤ by the formula”

**Sources:**

- [C. E. Shannon, Communication in the Presence of Noise (1949)](https://doi.org/10.1109/jrproc.1949.232969)

### Complex exponentials swap differentiation and multiplication under the Fourier transform

**Remember:** Differentiate the exponential in one variable to multiply by the other.

*True by definition.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For integrable f on ℝ and real ξ, f̂(ξ) is the integral of f(x)exp(−2πixξ) over ℝ. The wave exp(−2πixξ) has x-derivative −2πiξ times itself and ξ-derivative −2πix times itself.

**Problem.** For a smooth rapidly decreasing function f with rapidly decreasing derivatives, the transform of f′ is 2πiξf̂(ξ). The derivative of f̂ is the transform of −2πixf(x).

**How the definition helps.** Integration by parts moves the x-derivative from f onto the wave, which gives the factor 2πiξ, and the decay of f removes the boundary terms (our own). Differentiating under the integral in ξ brings down −2πix, and an integrable bound justifies this (our own).

**nLab:** [Fourier transform](https://ncatlab.org/nlab/show/Fourier+transform). It says: “interchanging coordinate multiplication with partial derivatives”

**Sources:** none listed. No primary source with a working link was found.

### Complex waves turn translation into multiplication by a phase

**Remember:** A shift in one domain multiplies by a wave in the other.

*True by definition.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For integrable f on ℝ and real ξ, f̂(ξ) is the integral of f(x)exp(−2πixξ) over ℝ. Because the exponential turns sums into products, the wave at x + a is the wave at x times the constant phase exp(−2πiaξ) (our own).

**Problem.** For integrable f, the transform of f(x−a) is exp(−2πiaξ)f̂(ξ). The transform of exp(2πiax)f(x) is f̂(ξ−a).

**How the definition helps.** Substituting x + a for x in the transform of f(x − a) pulls out the phase exp(−2πiaξ) (our own). Multiplying f by exp(2πiax) combines with the wave to give exp(−2πix(ξ − a)), so the transform shifts by a (our own).

**Paper or page:** [Properties of Fourier Transform/Translation](https://proofwiki.org/wiki/Properties_of_Fourier_Transform/Translation). It says: “Then: ĥ(s) = e<sup>(−2πix₀s)</sup> f̂(s)”

**Sources:** none listed. No primary source with a working link was found.

### Ignoring sets of measure zero makes the Fourier transform injective

**Remember:** An integral cannot see a change on a set of measure zero.

*Rules out counterexamples.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** In L¹ of the real line, two integrable functions are the same element if they agree almost everywhere, that is, outside a set of measure zero. Integrals, and so Fourier transforms, cannot see changes on such a set (our own).

**Problem.** Two L¹ functions with the same Fourier transform are equal as L¹ elements.

**How the definition helps.** Without this identification the claim fails, since the indicator of a single point has the same transform as zero (our own). With it, Fourier inversion after Gaussian averaging shows that a function with zero transform is zero almost everywhere (our own).

**Paper or page:** [Injectivity of Fourier transform over Lebesgue integrable functions](https://proofwiki.org/wiki/Injectivity_of_Fourier_transform_over_Lebesgue_integrable_functions). It says: “Fourier transform is injective over the space L¹(ℝᴺ)”

**Sources:** none listed. No primary source with a working link was found.

### Integrable transforms invert absolutely

**Remember:** Both integrals are ordinary absolute integrals when both functions are integrable.

*Rules out counterexamples.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Take f on ℝ with finite integral of \|f\| whose Fourier transform also has finite integral of its absolute value. Then the inverse transform integral converges absolutely at every point, since its wave has modulus one, and defines a continuous function (our own).

**Problem.** An integrable function with integrable Fourier transform equals its absolutely convergent inverse transform almost everywhere. Equality holds wherever the original function is continuous.

**How the definition helps.** Fourier inversion identifies this continuous function with f almost everywhere, and so at each point where f is continuous (our own). The condition excludes the indicator of \[−1, 1\], whose transform sin(2πξ)/(πξ) has infinite absolute integral (our own).

**Wikipedia:** [Fourier inversion theorem](https://en.wikipedia.org/wiki/Fourier_inversion_theorem). It says: “Furthermore, we assume that the Fourier transform is also integrable.”

**Sources:** none listed. No primary source with a working link was found.

### Opposite signs make the two Fourier integrals adjoints

**Remember:** Conjugation swaps the signs and puts the transform in the other slot.

*True by definition.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For integrable f on ℝ, Ff and Gf integrate f(x) against exp(−2πixξ) and exp(2πixξ), respectively, over ℝ. The two waves are complex conjugates (our own), which matters for ⟨f, g⟩, the integral of f times the complex conjugate of g.

**Problem.** For smooth functions f and g that decay rapidly with all derivatives, ⟨Ff,g⟩ = ⟨f,Gg⟩. This says that G is the adjoint of F on these functions.

**How the definition helps.** Write ⟨Ff, g⟩ as a double integral and exchange the order of integration, which absolute integrability allows (our own). The conjugate of g’s integral against exp(2πixξ) is the conjugate of Gg, so the double integral is ⟨f, Gg⟩ (our own).

**nLab:** [Fourier transform](https://ncatlab.org/nlab/show/Fourier+transform). It says: “∫\[k ∈ ℝⁿ\] f̂(k) · g(k) dⁿk = ∫\[x ∈ ℝⁿ\] f(x) · ĝ(x) dⁿx”

**Sources:** none listed. No primary source with a working link was found.

### Periodization gives Poisson summation

**Remember:** Fold the line into one period, then read its Fourier coefficients.

*True by definition.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 42A16. arXiv math.CA. Level 2: later undergraduate.

**Definition.** To periodize f, add all its integer translates f(x + n). When this sum converges absolutely, it has period one, and its Fourier coefficient at each integer k is f̂(k), because the translates of the unit interval cover ℝ.

**Problem.** Suppose f and all its derivatives decay faster than every inverse power at infinity, and use the Fourier kernel exp(−2πixξ). Then the sums of f and of its Fourier transform over the integers agree.

**How the definition helps.** Rapid decay of f and its derivatives makes the periodized function smooth, so its Fourier series converges absolutely (our own). Its value at zero is the sum of the f(n), and its Fourier series there gives the sum of the f̂(k) (our own).

**Wikipedia:** [Poisson summation formula](https://en.wikipedia.org/wiki/Poisson_summation_formula). It says: “the Fourier series coefficients of \\(s<sub>P</sub>(x)\\) are \\(\\frac{1}{P} S\\left(\\frac{k}{P}\\right)\\)”

**Paper or page:** [Poisson Summation Formula](https://proofwiki.org/wiki/Poisson_Summation_Formula). It says: “Then: ∑ₙ∈ℤ f(n) = ∑ₘ∈ℤ f̂(m)”

**Sources:** none listed. No primary source with a working link was found.

### Squared distances give the Fourier uncertainty inequality

**Remember:** Spreads are L² norms, so Cauchy–Schwarz bounds their product.

*Makes the theorem clean to state or prove.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The spread of a density w on ℝ with integral one and finite second moment is the square root of ∫(x − μ)²w(x) dx, where μ = ∫xw(x) dx is its mean. The position and frequency spreads use w = \|f\|² and w = \|f̂\|², with Fourier kernel exp(−2πixξ), so they are L² norms of f and f̂ multiplied by the centered variable (our own).

**Problem.** Suppose f is smooth, f and all its derivatives decrease rapidly, and ∫\|f\|² = 1. The product of its position and frequency spreads is at least 1/(4π).

**How the definition helps.** After a shift and a phase factor center both densities at zero, Plancherel turns the frequency spread into ‖f′‖₂/(2π) (our own). Integration by parts gives 2 Re ⟨xf, f′⟩ = −1, and Cauchy–Schwarz turns this into the bound 1/(4π) (our own).

**Wikipedia:** [Uncertainty principle](https://en.wikipedia.org/wiki/Uncertainty_principle). It says: “A nonzero function and its Fourier transform cannot both be sharply localized at the same time.”

**Sources:** none listed. No primary source with a working link was found.

### The Gaussian scale makes theta reciprocity a Poisson summation identity

**Remember:** Poisson summation trades the Gaussian scale for its reciprocal.

*True by definition.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For t &gt; 0, Θ(t) is the sum of exp(−πtn²) over all integers n. With the Fourier kernel exp(−2πixξ), the Gaussian exp(−πtx²) has transform exp(−πξ²/t)/√t, a Gaussian with the reciprocal parameter 1/t (our own).

**Problem.** The theta sum satisfies Θ(t) = Θ(1/t)/√t for every t &gt; 0.

**How the definition helps.** Poisson summation equates the sum of exp(−πtn²) over the integers with the sum of its transform, which is Θ(1/t)/√t (our own). The factor π in the exponent makes the new parameter exactly 1/t; without it a factor π² appears (our own).

**Wikipedia:** [Poisson summation formula](https://en.wikipedia.org/wiki/Poisson_summation_formula). It says: “One important such use of Poisson summation concerns theta functions: periodic summations of Gaussians.”

**Sources:** none listed. No primary source with a working link was found.

### Unit complex waves make Fourier transforms uniformly continuous

**Remember:** The phase change depends on the frequency step, not the frequency.

*True by definition.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For integrable f on ℝ and real ξ, f̂(ξ) is the integral of f(x)exp(−2πixξ) over ℝ. Moving ξ by h multiplies each wave by exp(−2πixh), a factor that does not depend on ξ (our own).

**Problem.** The Fourier transform of an integrable function on the real line is uniformly continuous.

**How the definition helps.** So \|f̂(ξ + h) − f̂(ξ)\| is at most the integral of \|f(x)\|\|exp(−2πixh) − 1\|, a bound that does not depend on ξ (our own). Dominated convergence sends this bound to zero as h tends to zero (our own).

**Wikipedia:** [Fourier transform](https://en.wikipedia.org/wiki/Fourier_transform). It says: “f̂ ∈ L∞ ∩ C₀(ℝ) is bounded, uniformly continuous”

**Sources:** none listed. No primary source with a working link was found.

### Unit-mass Gaussian scaling gives a Fourier fixed point

**Remember:** Use π in the Gaussian and 2π in the Fourier wave.

*True by definition.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Use the Fourier transform with wave exp(−2πixξ), and take the Gaussian g(x) = exp(−πx²), whose integral is one. It satisfies g′(x) = −2πxg(x), and the Fourier differentiation rules turn this into the same equation for ĝ (our own).

**Problem.** The Fourier transform of exp(−πx²) is exp(−πξ²).

**How the definition helps.** The rules turn g′ = −2πxg into ĝ′(ξ) = −2πξĝ(ξ) (our own). Both functions solve this equation with value one at zero, since ĝ(0) is the integral of g, so they are equal (our own).

**Paper or page:** [Fourier Transform of Normal Function](https://proofwiki.org/wiki/Fourier_Transform_of_Normal_Function). It says: “Then: f̂(s) = √π e<sup>(−(πs)²)</sup>”

**Sources:** none listed. No primary source with a working link was found.

### Dirichlet convolution makes convergence local

**Remember:** Away from the point, only a fast oscillation remains in the kernel.

*True by definition.* MSC 42A63 (Uniqueness of trigonometric expansions, uniqueness of Fourier expansions, Riemann theory, localization). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Dirichlet kernel Dₙ(t) is the sum of exp(ikt) for integers k from −n to n, which equals sin((n + ½)t)/sin(t/2). The nth Fourier partial sum at x is the integral of f(x − t)Dₙ(t) in normalized circle measure, so only this oscillating kernel depends on n (our own).

**Problem.** If two integrable circle functions agree near a point, the difference of their Fourier partial sums tends to zero at that point.

**How the definition helps.** The difference of the two partial sums is the integral of their difference g(x − t) times Dₙ(t), and g(x − t) vanishes for small t (our own). So g(x − t)/sin(t/2) is integrable, and the Riemann–Lebesgue lemma sends its integral against sin((n + ½)t) to zero (our own).

**Wikipedia:** [Dirichlet kernel](https://en.wikipedia.org/wiki/Dirichlet_kernel). It says: “The convolution of Dₙ(x) with any function f of period 2π is the nth-degree Fourier series approximation to f”

**Sources:** none listed. No primary source with a working link was found.

### Positive kernels that concentrate recover functions in norm

**Remember:** Average small translations and let the weight of large ones vanish.

*Makes the theorem clean to state or prove.* MSC 42A85 (Convolution, factorization for one variable harmonic analysis), 42A20. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A positive approximate identity on the circle is a family of nonnegative kernels with integral one whose mass outside each fixed neighborhood of zero tends to zero. So the averages of translates that they define put almost all weight on small shifts (our own).

**Problem.** For 1 ≤ p &lt; ∞, averaging translates against these kernels recovers every function of finite Lᵖ norm in that norm. In particular, integrable functions with identical Fourier coefficients agree almost everywhere.

**How the definition helps.** Small shifts change an Lᵖ function little in norm, and large shifts get little weight, so the averaging error tends to zero in Lᵖ (our own). The Fejér kernels form such a family. Matching Fourier coefficients give equal Fejér averages and therefore the same L¹ limit (our own).

**Wikipedia:** [Approximate identity](https://en.wikipedia.org/wiki/Approximate_identity). It says: “For example, the Fejér kernels of Fourier series theory give rise to an approximate identity.”

**Sources:** none listed. No primary source with a working link was found.

### Projections give Fourier slices

**Remember:** The projected coordinate is the only coordinate the Fourier kernel reads.

*True by definition.* MSC 42B10 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 44A12. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The projection density of an integrable function on the plane is its integral along each line perpendicular to the projection axis, as a function of position on that axis. A Fourier wave pointing along the axis is constant on each of those lines.

**Problem.** The one-dimensional Fourier transform of the projection density is the restriction of the two-dimensional transform to the projection axis.

**How the definition helps.** The two-dimensional transform at a frequency on the axis integrates the function against a wave that is constant on each perpendicular line (our own). Fubini’s theorem integrates along those lines first, which leaves the one-dimensional transform of the projection density (our own).

**Wikipedia:** [Projection-slice theorem](https://en.wikipedia.org/wiki/Projection-slice_theorem). It says: “Take that same function, but do a two-dimensional Fourier transform first, and then slice the function through its origin, parallel to the projection line.”

**Sources:** none listed. No primary source with a working link was found.

### Parseval frames reconstruct directly

**Remember:** If taking coefficients preserves lengths, its adjoint puts the vector back.

*True by definition.* MSC 42C15 (General harmonic expansions, frames). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A countable family (uⱼ) in a Hilbert space is a Parseval frame if ∑ⱼ\|⟨v, uⱼ⟩\|² = ‖v‖² for every vector v, so the map from v to its coefficients ⟨v, uⱼ⟩ preserves lengths. The inner product is linear in its first argument.

**Problem.** Every vector is the norm-convergent sum of its Parseval frame coefficients times the corresponding frame vectors.

**How the definition helps.** A linear map that preserves lengths also preserves inner products, by polarization, so its adjoint undoes it (our own). The adjoint sends the coefficients to ∑ⱼ⟨v, uⱼ⟩uⱼ, which therefore converges in norm to v (our own).

**Paper or page:** [Hilbert space models and Blaschke frames](https://arxiv.org/abs/2510.18816v2). It says: “is a Parseval frame and the frame operator is the identity operator on ℋ.”

**Sources:** none listed. No primary source with a working link was found.

### Zero moments cancel polynomials

**Remember:** Cancel each power and every polynomial built from those powers disappears.

*True by definition.* MSC 42C40 (Nontrigonometric harmonic analysis involving wavelets and other special systems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A compactly supported wavelet ψ has M vanishing moments if ∫xᵏψ(x) dx = 0 for k = 0, …, M − 1. So ψ has zero integral against every polynomial of degree below M.

**Problem.** Every translate and dilation of this wavelet has zero integral against each polynomial of degree less than M.

**How the definition helps.** Substituting y = (x − b)/a turns the integral against a translate and dilation into a constant times the integral of ψ against a polynomial in y of the same degree (our own). That integral is zero by the moment conditions (our own).

**Wikipedia:** [Wavelet](https://en.wikipedia.org/wiki/Wavelet). It says: “to be a continuous function with a higher number M of vanishing moments”

**Sources:** none listed. No primary source with a working link was found.

### Frequency plateaus give near-best approximation

**Remember:** Average partial sums n to 2n−1; every degree-n polynomial stays fixed.

*True by definition. Confidence: medium.* MSC 42A10 (Trigonometric approximation), 42A24. arXiv math.CA. Level 3: graduate.

**Definition.** The de la Vallée Poussin mean Vₙ averages the Fourier partial sums of orders n through 2n − 1, so Vₙ = 2F₂ₙ₋₁ − Fₙ₋₁, where the Fejér mean Fₖ averages the partial sums of orders 0 through k. Each partial sum in the average leaves every trigonometric polynomial of degree at most n unchanged, so Vₙ does too.

**Problem.** For a continuous periodic function f, the uniform error of Vₙf is at most four times the best uniform error by trigonometric polynomials of degree at most n.

**How the definition helps.** Vₙ fixes each polynomial p of degree at most n and has norm at most 3, so ‖f − Vₙf‖ = ‖(I − Vₙ)(f − p)‖ ≤ 4‖f − p‖ (our own). The norm bound holds because each Fejér mean has a positive kernel of mass one and hence norm one (our own).

**Paper or page:** [Weighted norm inequalities in Lebesgue spaces with Muckenhoupt weights and some applications to operators](https://arxiv.org/abs/1709.02928v5), [Weighted norm inequalities in Lebesgue spaces with Muckenhoupt weights and some applications to operators](https://arxiv.org/abs/1709.02928v5). It says: “Fₙ(f,·) := 1/(n+1){S₀(·,f)+S₁(·,f)+...+Sₙ(·,f)}”

**Sources:** none listed. No primary source with a working link was found.

### Wiener reciprocals retain summable coefficients

**Remember:** The algebra only sees point values, so nowhere zero means invertible.

*Makes the theorem clean to state or prove.* MSC 42A20 (Convergence and absolute convergence of Fourier and trigonometric series), 46J10. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** The Wiener algebra is the complete normed algebra of functions on the circle with absolutely summable Fourier coefficients, under pointwise product. Its norm is the sum of the absolute coefficients, so the coordinate z and its inverse 1/z both have norm one.

**Problem.** A function in the Wiener algebra has its reciprocal in that algebra if it is nowhere zero on the circle.

**How the definition helps.** By Gelfand theory, an element is invertible when every character, a nonzero multiplicative linear functional, is nonzero on it. Characters have norm at most one, so each sends z to a point ζ of the circle and, by density of trigonometric polynomials, is evaluation at ζ. No character vanishes on a nowhere-zero f, so f has an inverse, which is 1/f (our own).

**Wikipedia:** [Wiener algebra](https://en.wikipedia.org/wiki/Wiener_algebra). It says: “if f has absolutely convergent Fourier series and is never zero, then its reciprocal 1/f also has an absolutely convergent Fourier series.”

**Sources:**

- [N. Wiener, Tauberian Theorems (1932)](https://doi.org/10.2307/1968102)
- [D. J. Newman, Shorter Notes: A Simple Proof of Wiener’s 1/f Theorem (1975)](https://doi.org/10.2307/2040730)

### Adjoint synthesis inverts the short-time Fourier transform

**Remember:** Synthesis is the adjoint, and an isometry's adjoint undoes it.

*True by definition.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 42C20. arXiv math.CA. Level 3: graduate.

**Definition.** Fix a window g in L²(ℝ) with norm one. The short-time Fourier transform V records, for each time x and frequency ω, the inner product of the signal with g shifted by x and modulated by ω, and synthesis is its adjoint V\*.

**Problem.** Synthesis with the same unit window recovers every square-integrable input from its short-time Fourier transform.

**How the definition helps.** For a unit window, the orthogonality relations say that V preserves inner products, which means V\*V is the identity (our own). So synthesis applied to Vf returns f (our own). Pairing the usual reconstruction integral of shifted, modulated windows with a test signal shows that it equals V\* (our own).

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1), [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “Then we have for all f ∈ L²(ℝᵈ) f = 1/⟨g̃, g⟩ ∬ℝ²ᵈ Vg f(x, ω) Mω Tx g̃ d(x, ω).”

**Sources:**

- [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1)

### Extending by continuity defines the Fourier transform on all of L²

**Remember:** Norm-preserving on a dense subspace, so it extends by continuity.

*Makes the theorem clean to state or prove.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 46E30. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** The Fourier transform on L²(ℝ) is the unique continuous extension of the Fourier integral ∫f(x)exp(−2πixξ)dx from the dense subspace L¹∩L², where the integral converges and preserves the L² norm.

**Problem.** The Fourier transform is a unitary map of L²(ℝ) onto itself, even when the Fourier integral of an L² function fails to converge.

**How the definition helps.** An isometry on a dense subspace extends uniquely to an isometry on the whole space (our own explanation). Its range is closed and contains the dense Schwartz class by Fourier inversion, so the extension is onto and hence unitary.

**Wikipedia:** [Plancherel theorem](https://en.wikipedia.org/wiki/Plancherel_theorem). It says: “In effect, this makes it possible to speak of Fourier transforms of L² functions.”

**Sources:**

- [Plancherel, M. (1910). Contribution à l'étude de la représentation d'une fonction arbitraire par des intégrales définies. Rendiconti del Circolo Matematico di Palermo 30(1), 289–335.](https://doi.org/10.1007/BF03014877)

### Interior support prevents Fourier aliasing

**Remember:** Keep support away from the seam to test nonperiodic waves.

*Rules out counterexamples. Confidence: medium.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 42A16. arXiv math.CA. Level 3: graduate.

**Definition.** Consider finite positive measures supported in a fixed closed interval strictly inside (−½, ½), with Fourier transform ν̂(ξ) = ∫exp(−2πixξ)dν(x). The gap before the endpoints lets each wave exp(−2πixξ), restricted to that interval, extend to a continuous function of period one (our own).

**Problem.** For such measures with uniformly bounded masses, convergence of ν̂ at every integer frequency implies convergence at every real frequency. This fails if the endpoints ±½ are allowed.

**How the definition helps.** The periodic extension is a uniform limit of trigonometric polynomials, whose integrals converge by hypothesis, and the common mass bound controls the error (our own). Unit masses alternating between −½ and ½ have the same transform at every integer frequency but alternate in sign at frequency ½.

**Paper or page:** [Sharpness of the Mockenhaupt-Mitsis-Bak-Seeger Fourier restriction theorem in all dimensions](https://arxiv.org/abs/2505.19526v1). It says: “If (ν̂ₖ(s)) converges for each s ∈ ℤᵈ, then (ν̂ₖ(ξ)) converges for each ξ ∈ ℝᵈ.”

**Sources:** none listed. No primary source with a working link was found.

### Multiplier symbols give Laurent norms

**Remember:** Convolution becomes multiplication, whose norm is the largest value.

*True by definition.* MSC 42A45 (Multipliers in one variable harmonic analysis), 42A16. arXiv math.CA. Level 3: graduate.

**Definition.** The Laurent operator of a continuous function m on the circle acts on square-summable sequences indexed by ℤ by convolution with the Fourier coefficients of m. Under the Fourier series map it becomes multiplication by m.

**Problem.** The operator norm of the Laurent operator on square-summable sequences equals the supremum of \|m\|.

**How the definition helps.** Parseval's identity makes the Fourier series map unitary, so the norm equals that of multiplication by m on L² of the circle (our own). Multiplication has norm at most max\|m\|, and functions concentrated on short arcs near a maximum point give the reverse inequality (our own).

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “‖L(m)‖ₒₚ = ‖m‖∞”

**Sources:**

- [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1)

### Tapered cutoffs give integrable kernels

**Remember:** Taper the band edge to replace the nonintegrable sinc tail.

*Rules out counterexamples.* MSC 42A45 (Multipliers in one variable harmonic analysis), 42A38. arXiv math.CA. Level 3: graduate.

**Definition.** The Bochner–Riesz mean of order δ &gt; 0 at radius R multiplies the Fourier transform by the cutoff (1 − (ξ/R)²)₊ᵟ, which tapers to zero at \|ξ\| = R instead of jumping. Its kernel then decays like \|x\|⁻¹⁻ᵟ and is integrable, and changing R does not change its L¹ norm (our own).

**Problem.** These Bochner–Riesz means are uniformly bounded on L¹ as R varies. The sharp interval cutoff does not give a bounded L¹ operator.

**How the definition helps.** A convolution with an integrable kernel is bounded on L¹ by the kernel's L¹ norm, which here does not depend on R (our own). The sharp cutoff gives a rescaled sinc kernel, which has infinite L¹ norm. A bound for it, applied to approximate identities of unit mass, would put that kernel in L¹ by Fatou's lemma.

**Wikipedia:** [Bochner–Riesz mean](https://en.wikipedia.org/wiki/Bochner%E2%80%93Riesz_mean). It says: “may be written as convolution operators, where the convolution kernel is an approximate identity.”

**Sources:** none listed. No primary source with a working link was found.

### The Hilbert transform multiplier squares to minus one

**Remember:** Two quarter turns make a half turn and negate the function.

*True by definition.* MSC 42A50 (Conjugate functions, conjugate series, singular integrals), 42B10. arXiv math.CA. Level 3: graduate.

**Definition.** On square-integrable functions on ℝ, the Hilbert transform H multiplies the Fourier transform by −i at positive frequencies and by i at negative frequencies.

**Problem.** For every square-integrable u on the real line, H(H(u)) = −u. The inverse of H is therefore −H.

**How the definition helps.** Applying H twice multiplies by (−i)² or i², which is −1 at almost every frequency. This multiplier agrees with the principal value integral with kernel 1/(πt), and proving that agreement is where the analysis lies (our own).

**Wikipedia:** [Hilbert transform](https://en.wikipedia.org/wiki/Hilbert_transform). It says: “The signal is negated; i.e., H(H(u)) = −u”

**Sources:**

- [M. Riesz (1928), Sur les fonctions conjuguées, Mathematische Zeitschrift](https://doi.org/10.1007/BF01171098)

### The Bohr compactification turns almost periodic means into Haar integrals

**Remember:** Almost periodic functions live on a compact group; average with Haar.

*True by definition. Confidence: medium.* MSC 42A75 (Classical almost periodic functions, mean periodic functions), 43A60, 28C10. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** A uniformly almost periodic function on ℝ is the restriction of a continuous function on the Bohr compactification bℝ, a compact group into which ℝ maps densely by a continuous homomorphism. Equivalently, it is a uniform limit of finite sums of waves a·exp(iλx) with λ real.

**Problem.** For a uniformly almost periodic function, the averages over \[−T, T\] converge as T tends to infinity. Their limit is translation invariant and equals the integral of the extension to bℝ.

**How the definition helps.** Haar probability measure on bℝ gives a translation-invariant integral of the continuous extension (our own). For each wave exp(iλx), both the Haar integral and the limit of the interval averages equal 1 if λ = 0 and 0 otherwise. Both are bounded by the uniform norm, so uniform approximation by sums of waves gives the formula.

**Wikipedia:** [Almost periodic function](https://en.wikipedia.org/wiki/Almost_periodic_function). It says: “The space of uniform almost periodic functions on G can be identified with the space of all continuous functions on the Bohr compactification of G.”

**Sources:**

- [H. Bohr, Zur Theorie der fast periodischen Funktionen I, Acta Mathematica 45 (1925)](https://doi.org/10.1007/BF02395468)

### Uniform trigonometric approximation makes almost periodic functions an algebra

**Remember:** Waves multiply to waves, and uniform limits keep sums and products.

*True by definition.* MSC 42A75 (Classical almost periodic functions, mean periodic functions), 43A60. arXiv math.CA. Level 3: graduate.

**Definition.** A complex function on ℝ is uniformly almost periodic if it is a uniform limit of finite sums of waves a·exp(iλx) with real λ, that is, if it lies in the uniform closure of the trigonometric polynomials.

**Problem.** Sums, products and uniform limits of uniformly almost periodic functions remain uniformly almost periodic.

**How the definition helps.** Trigonometric polynomials form an algebra because the product of two waves is a wave whose frequency is the sum of theirs (our own). Sums and products of bounded functions are continuous under uniform convergence, so the uniform closure is again an algebra, and a closure is closed under uniform limits.

**Wikipedia:** [Almost periodic function](https://en.wikipedia.org/wiki/Almost_periodic_function). It says: “Bohr (1925) defined the uniformly almost-periodic functions as the closure of the trigonometric polynomials with respect to the uniform norm”

**Sources:**

- [H. Bohr, Zur Theorie der fast periodischen Funktionen I, Acta Mathematica 45 (1925)](https://doi.org/10.1007/BF02395468)

### Continuity excludes Bochner counterexamples

**Remember:** Every difference matrix positive semidefinite, plus continuity at zero.

*Rules out counterexamples.* MSC 42A82 (Positive definite functions in one variable harmonic analysis), 43A35. arXiv math.FA. Level 3: graduate.

**Definition.** A function f from ℝ to ℂ is positive definite if the matrix \[f(xᵢ − xⱼ)\] is positive semidefinite for every finite list of real points x₁,…,xₙ. The class for this theorem also requires f to be continuous at 0, and the matrix test then spreads this continuity to every point (our own).

**Problem.** A positive definite function on ℝ continuous at zero is the Fourier transform of a finite positive measure.

**How the definition helps.** Bochner's theorem gives the measure for continuous positive definite functions, and the matrix test gives \|f(x+h) − f(x)\|² ≤ 2f(0)(f(0) − Re f(h)), so continuity at 0 suffices. Continuity is needed because the Fourier transform of a finite measure is continuous. The indicator of {0} is positive definite but is not such a transform (our own).

**Wikipedia:** [Positive-definite function](https://en.wikipedia.org/wiki/Positive-definite_function). It says: “any continuous positive-definite function on the real line is the Fourier transform of a (positive) measure.”

**Sources:**

- [Salomon Bochner, Monotone Funktionen, Stieltjessche Integrale und harmonische Analyse (1933)](https://doi.org/10.1007/bf01452844)

### Alternation makes symplectic transforms involutive

**Remember:** Swapping inputs negates σ, so the transform is its own inverse.

*True by definition.* MSC 42B10 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 3: graduate.

**Definition.** On ℝ²ᵈ put σ((x,ξ),(y,η)) = ξ·y − x·η, which changes sign when its two arguments swap. The symplectic Fourier transform sends f to the function whose value at z is ∫f(w)exp(−2πiσ(z,w))dw, extended from L¹∩L² to L² by continuity.

**Problem.** Applying the symplectic Fourier transform twice gives the original function in square-integral norm.

**How the definition helps.** The inverse of a unitary integral transform has the kernel with arguments swapped and the exponential conjugated (our own). Antisymmetry of σ makes that kernel equal to the original one, so the transform is its own inverse (our own). Unitarity follows from ordinary Plancherel, because σ(z,w) = z·Jw for the measure-preserving map J(y,η) = (−η,y) (our own).

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596). It says: “The symplectic Fourier transform is unitary and involutive”

**Sources:** none listed. No primary source with a working link was found.

### Small tails force large supports

**Remember:** Small tails mean cutting twice keeps most of the signal.

*Makes the theorem clean to state or prove.* MSC 42B10 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type). arXiv math.CA. Level 3: graduate.

**Definition.** A square-integrable signal on ℝᵈ is ε-concentrated on a measurable set T if its L² norm outside T is at most ε times its total norm. So a signal concentrated on T, with Fourier transform concentrated on Ω, changes little when cut first to T and then in frequency to Ω (our own).

**Problem.** Let a unit signal be ε-concentrated on T, with Fourier transform (kernel exp(−2πix·ξ)) δ-concentrated on Ω, and ε + δ ≤ 1. Then \|T\|\|Ω\| ≥ (1 − ε − δ)² whenever the product of the volumes is defined.

**How the definition helps.** Cutting to T and then to Ω changes the unit signal by at most ε + δ, so the twice-cut signal has norm at least 1 − ε − δ (our own). The operator that makes both cuts has a kernel of modulus one on Ω × T and zero elsewhere (our own). Cauchy–Schwarz bounds its norm by √(\|T\|\|Ω\|), which gives the inequality (our own).

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596). It says: “Let f ∈ L²(ℝᵈ) (not the zero-function) be εₜ-concentrated on T ⊂ ℝᵈ”

**Sources:**

- [David L. Donoho and Philip B. Stark, Uncertainty Principles and Signal Recovery (1989)](https://doi.org/10.1137/0149053)

### The Leray multiplier projects vector fields onto divergence-free fields

**Remember:** Remove the part of the vector that points along its frequency.

*True by definition.* MSC 42B15 (Multipliers for harmonic analysis in several variables), 35Q30, 76D05. arXiv math.AP. Level 3: graduate.

**Definition.** The Leray map P multiplies the Fourier transform of a square-integrable vector field on ℝⁿ by I − ξξᵀ/\|ξ\|², which at each frequency ξ ≠ 0 removes the component along ξ. Zero divergence means exactly that the Fourier transform is perpendicular to ξ, and a gradient has Fourier transform parallel to ξ.

**Problem.** The Leray map is the orthogonal projection onto the fields with zero divergence. It sends ∇φ to zero for every smooth φ of compact support.

**How the definition helps.** At almost every frequency the multiplier is the orthogonal projection onto the vectors perpendicular to ξ (our own). These are the values allowed for divergence-free fields, and gradients point along ξ, so P keeps the first and kills the second. Plancherel turns this frequency-wise projection into the orthogonal projection on L².

**Wikipedia:** [Leray projection](https://en.wikipedia.org/wiki/Leray_projection). It says: “This definition must be understood in the sense of pseudo-differential operators: its matrix valued Fourier multiplier m(ξ) is given by”

**Sources:** none listed. No primary source with a working link was found.

### Cube averages give singular-integral cancellation

**Remember:** Remove the cube average to leave a remainder with integral zero.

*True by definition.* MSC 42B20 (Singular and oscillatory integrals (Calderón-Zygmund, etc.)), 42B25. arXiv math.CA. Level 3: graduate.

**Definition.** For integrable f and λ &gt; 0, take the maximal dyadic cubes Q on which the average of \|f\| exceeds λ. On each such Q the bad part is f minus its average over Q, and it is zero outside Q, so its integral is zero.

**Problem.** Each bad part has integral zero. Away from its cube, a singular integral can subtract the kernel value at the cube center without changing its output.

**How the definition helps.** The integral is zero because the cube average is subtracted (our own). At a point outside the cube, the kernel value at the cube's center is constant in the integration variable, so its integral against the bad part vanishes. Hence that value can be subtracted from the kernel without changing the output.

**Wikipedia:** [Calderón–Zygmund lemma](https://en.wikipedia.org/wiki/Calder%C3%B3n%E2%80%93Zygmund_lemma). It says: “has the beneficial property that its average value is zero on each of these cubes.”

**Paper or page:** [Twisted bilinear spherical maximal functions](https://arxiv.org/abs/2410.17583v1). It says: “∫ over Qᵢ,ᵧ hᵢ(x,y) dx = 0”

**Sources:**

- [Alberto P. Calderón and Antoni Zygmund, On the existence of certain singular integrals (1952)](https://doi.org/10.1007/bf02392130)

### Riesz transform multipliers recover second derivatives from the Laplacian

**Remember:** Each Riesz transform multiplies by −i times one unit-frequency coordinate.

*True by definition. Confidence: medium.* MSC 42B20 (Singular and oscillatory integrals (Calderón-Zygmund, etc.)), 35J05. arXiv math.CA, math.AP. Level 3: graduate.

**Definition.** The j-th Riesz transform Rⱼ on square-integrable functions on ℝⁿ multiplies the Fourier transform by −iξⱼ/\|ξ\| for ξ ≠ 0, a multiplier of size at most one.

**Problem.** For every smooth, rapidly decreasing u, ∂ᵢ∂ⱼu = −RᵢRⱼΔu. The square-integral norm of ∂ᵢ∂ⱼu is at most that of Δu.

**How the definition helps.** With the kernel exp(−ix·ξ), both ∂ᵢ∂ⱼu and −RᵢRⱼΔu have Fourier transform −ξᵢξⱼû (our own). The product of two Riesz multipliers has size at most one, so Plancherel bounds the norm of ∂ᵢ∂ⱼu by that of Δu.

**Wikipedia:** [Riesz transform](https://en.wikipedia.org/wiki/Riesz_transform). It says: “The Riesz transforms are given by a Fourier multiplier.”

**Sources:**

- [A. P. Calderón and A. Zygmund (1952), On the existence of certain singular integrals, Acta Mathematica](https://doi.org/10.1007/BF02392130)

### Disjoint bands preserve energy

**Remember:** Every frequency contributes to exactly one squared term.

*True by definition.* MSC 42B25 (Maximal functions, Littlewood-Paley theory). arXiv math.CA. Level 3: graduate.

**Definition.** Split the unitary Fourier transform of f ∈ L²(ℝᵈ) over the disjoint dyadic rings 2ʲ ≤ \|ξ\| &lt; 2ʲ⁺¹, and let fⱼ be the inverse transform of the piece on the j-th ring. The square function is (∑ⱼ\|fⱼ\|²)¹ᐟ², and the rings cover every frequency except 0 exactly once (our own).

**Problem.** The square-integral norm of this square function equals the square-integral norm of the original signal.

**How the definition helps.** Plancherel gives ‖fⱼ‖² as the integral of \|f̂\|² over the j-th ring (our own). Summing over the rings, which miss only the null set {0}, gives ∑ⱼ‖fⱼ‖² = ‖f̂‖² = ‖f‖², and this sum is the squared norm of the square function (our own).

**Wikipedia:** [Littlewood–Paley theory](https://en.wikipedia.org/wiki/Littlewood%E2%80%93Paley_theory). It says: “this gives a so-called "dyadic decomposition" of f”

**Sources:** none listed. No primary source with a working link was found.

### Dual weights preserve Muckenhoupt bounds

**Remember:** Swap the two weights and raise the old test to q/p.

*True by definition.* MSC 42B25 (Maximal functions, Littlewood-Paley theory). arXiv math.CA. Level 3: graduate.

**Definition.** Fix 1 &lt; p &lt; ∞ and q = p/(p−1), and give a positive locally integrable weight w the dual weight v = w⁻ᑫ⁄ᵖ, whose own dual weight at q is w again. The Aₚ constant of w is \[w\]ₚ = sup over balls B of avg<sub>B</sub>(w)·avg<sub>B</sub>(v)ᵖ⁄ᑫ, where avg<sub>B</sub> is the average over B.

**Problem.** The weight w is in Aₚ exactly when v is in A<sub>q</sub>. In that case \[v\]<sub>q</sub> = \[w\]ₚ<sup>(q/p)</sup>.

**How the definition helps.** Raising avg<sub>B</sub>(w)·avg<sub>B</sub>(v)ᵖ⁄ᑫ to the power q/p gives avg<sub>B</sub>(v)·avg<sub>B</sub>(w)<sup>(q/p)</sup>, the A<sub>q</sub> expression for v (our own). Taking suprema over balls gives the formula for the constants.

**Wikipedia:** [Muckenhoupt weights](https://en.wikipedia.org/wiki/Muckenhoupt_weights). It says: “(1/\|B\| ∫ over B ω(x) dx)(1/\|B\| ∫ over B ω(x)⁻ᑫ⁄ᵖ dx)ᵖ⁄ᑫ ≤ C &lt; ∞”

**Sources:**

- [Benjamin Muckenhoupt, Weighted norm inequalities for the Hardy maximal function (1972)](https://doi.org/10.1090/S0002-9947-1972-0293384-6)

### Maximal control extends pointwise convergence

**Remember:** Control every error at once, then approximate by a dense class.

*Makes the theorem clean to state or prove.* MSC 42B25 (Maximal functions, Littlewood-Paley theory). arXiv math.CA. Level 3: graduate.

**Definition.** The maximal operator of a sequence of linear operators Tₙ takes, at each point, the supremum of \|Tₙf\| over n. It has a weak L¹ bound if the set where it exceeds λ has measure at most C‖f‖₁/λ, for every integrable f and λ &gt; 0, with one constant C.

**Problem.** Suppose the operators converge to their inputs almost everywhere on a dense subset of L¹. If the maximal operator has a weak L¹ bound, convergence holds almost everywhere on all of L¹.

**How the definition helps.** The weak bound controls, for all n at once, the error from replacing f by a nearby g in the dense class (our own). Where Tₙg → g, the limit superior of \|Tₙf − f\| is at most the maximal function of f − g plus \|f − g\|, and each exceeds λ only on a set of measure at most a constant times ‖f − g‖₁/λ. Letting ‖f − g‖₁ tend to zero shows that the limit superior is zero almost everywhere.

**Paper or page:** [Bounded operators on Martingale Hardy spaces](https://arxiv.org/abs/2201.12134v3). It says: “then Tₙf → f, a.e. for every f ∈ L₁(Gₘ).”

**Sources:**

- [Bounded operators on Martingale Hardy spaces](https://arxiv.org/abs/2201.12134v3)

### Nested cubes give sharp bounds

**Remember:** Meeting dyadic cubes are nested, so the largest bad cubes are disjoint.

*True by definition. Confidence: medium.* MSC 42B25 (Maximal functions, Littlewood-Paley theory). arXiv math.CA. Level 3: graduate.

**Definition.** The dyadic maximal function of f takes, at each point, the supremum of the averages of \|f\| over the half-open dyadic cubes containing it. Two dyadic cubes that meet are nested, so the maximal cubes with average above λ are disjoint (our own).

**Problem.** For integrable f and λ &gt; 0, the volume where the dyadic maximal function exceeds λ is at most ‖f‖₁/λ. The constant one is sharp.

**How the definition helps.** These maximal cubes exist because large cubes have small average, and they cover the set where the function exceeds λ (our own). Each has volume less than its integral of \|f\| divided by λ, and summing over the disjoint cubes gives the bound ‖f‖₁/λ. The indicator of one dyadic cube shows sharpness as λ rises to one.

**Paper or page:** [Muckenhoupt-type weights and the intrinsic structure in Bessel Setting](https://arxiv.org/abs/2304.07986v3), [An alternative approach to sharp L¹ estimates for the dyadic maximal operator](https://arxiv.org/abs/2104.03585v2). It says: “The dyadic maximal function is of weak (1,1)”

**Sources:** none listed. No primary source with a working link was found.

### The Muckenhoupt condition is exactly what weighted maximal function bounds need

**Remember:** Test the maximal inequality on one cube and you get Aₚ.

*Makes the theorem clean to state or prove.* MSC 42B25 (Maximal functions, Littlewood-Paley theory). arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** For 1 &lt; p &lt; ∞, a positive locally integrable weight w on ℝⁿ is in Aₚ if avg<sub>Q</sub>(w)·avg<sub>Q</sub>(w⁻¹ᐟ⁽ᵖ⁻¹⁾)ᵖ⁻¹ ≤ C for every cube Q, with one finite C. It is in A₁ if avg<sub>Q</sub>(w) ≤ C·w(x) for almost every x in every cube Q. Each condition is what the weak maximal inequality says when tested on functions living on a single cube (our own).

**Problem.** Let 1 ≤ p &lt; ∞, and let M be the Hardy–Littlewood maximal operator over cubes. Then w({Mf &gt; λ}) ≤ (C/λᵖ)∫\|f\|ᵖw for all f and λ &gt; 0 exactly when w is in Aₚ.

**How the definition helps.** The Aₚ condition is the inequality tested on single cubes, so necessity takes a few lines and sufficiency is Muckenhoupt's weighted maximal theorem. For p &gt; 1, test on the dual weight w<sup>(−1/(p−1))</sup> restricted to a cube, truncated if needed. For p = 1, test on indicators of subsets of a cube.

**Paper or page:** [Weighted weak (1,1) estimate for non-commutative square function](https://arxiv.org/abs/2410.00987v3). It says: “For 1≤p&lt;∞, the weak type (p,p) inequality … is true if and only if w satisfies the Muckenhoupt's Aₚ condition.”

**Sources:**

- [Weighted weak (1,1) estimate for non-commutative square function, arXiv:2410.00987 (2024)](https://arxiv.org/abs/2410.00987v3)
- [B. Muckenhoupt, Weighted norm inequalities for the Hardy maximal function, Trans. Amer. Math. Soc. 165 (1972), p. 207](https://doi.org/10.1090/s0002-9947-1972-0293384-6)

### Atom cancellation makes Hilbert transforms integrable

**Remember:** Small atoms cancel their means, and their coefficients sum absolutely.

*Rules out counterexamples.* MSC 42B30 (\\(H<sup>p\\</sup>)-spaces), 42A50. arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** An atom on ℝ is a function supported in a bounded interval I, bounded by 1/\|I\|, and of integral zero, so it cancels against any function that is nearly constant on I (our own). Atomic H¹ consists of sums ∑cⱼaⱼ of atoms with ∑\|cⱼ\| &lt; ∞, normed by the infimum of ∑\|cⱼ\|.

**Problem.** The Hilbert transform, the principal value convolution with 1/(πx), maps H¹ boundedly into the integrable functions on the line.

**How the definition helps.** Summing the atoms reduces the theorem to a uniform L¹ bound on the transform of one atom. Outside twice I, zero mean lets one subtract the kernel value at the center (our own), which leaves decay \|I\|/x²; inside, Cauchy–Schwarz and L² boundedness apply. The indicator of \[0,1\] has no cancellation, and its transform has a nonintegrable 1/\|x\| tail.

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “When 0 &lt; p ≤ 1, any element f of Hᵖ has an atomic decomposition as a convergent infinite combination of Hᵖ-atoms,”

**Sources:** none listed. No primary source with a working link was found.

### Hardy atoms force zero mean

**Remember:** Mean zero survives any sum that converges in the integral norm.

*True by definition.* MSC 42B30 (\\(H<sup>p\\</sup>)-spaces). arXiv math.CA. Level 3: graduate.

**Definition.** A real H¹ atom on Euclidean space is supported in a ball, bounded by one over the ball's volume, and has integral zero. Real H¹ is the set of sums ∑cⱼaⱼ of atoms with ∑\|cⱼ\| &lt; ∞, which converge in L¹ because each atom has L¹ norm at most one.

**Problem.** Every function in real H¹ on Euclidean space has integral zero. The indicator of the unit ball is integrable but is not in H¹.

**How the definition helps.** Every atom has integral zero, and integration is continuous in the L¹ norm, so every such sum has integral zero (our own). The indicator of the unit ball has integral equal to the ball's volume, so it is not in H¹. The atomic decomposition theorem identifies this space with the usual H¹ defined by maximal functions.

**Wikipedia:** [Hardy space](https://en.wikipedia.org/wiki/Hardy_space). It says: “any element f of Hᵖ has an atomic decomposition as a convergent infinite combination of Hᵖ-atoms”

**Sources:**

- [Robert Latter, A characterization of Hᵖ(ℝⁿ) in terms of atoms (1978)](https://doi.org/10.4064/sm-62-1-93-101)

### Adjacent averages detect hidden oscillation

**Remember:** Two neighboring grid intervals catch what one grid interval misses.

*Rules out counterexamples.* MSC 42B35 (Function spaces arising in harmonic analysis). arXiv math.CA. Level 3: graduate.

**Definition.** A locally integrable function on ℝ has bounded mean oscillation if its average absolute deviation from its mean is uniformly bounded over all bounded intervals. The dyadic test checks only the intervals \[k2ʲ,(k+1)2ʲ), and the extra condition bounds the difference of the means on any two adjacent dyadic intervals of equal length, which controls oscillation across a dyadic boundary (our own).

**Problem.** On ℝ, the dyadic deviation bound together with the adjacent mean bound implies bounded mean oscillation over all intervals.

**How the definition helps.** Any interval I lies in two adjacent dyadic intervals of equal length with total length less than 4\|I\| (our own). The two bounds keep f close in average to the first mean on their union, and passing to I costs at most a factor four. The function log x on x &gt; 0 and zero elsewhere passes the dyadic test, but adjacent means across zero differ without bound.

**Wikipedia:** [Bounded mean oscillation](https://en.wikipedia.org/wiki/Bounded_mean_oscillation). It says: “is a function that is in dyadic BMO but not in BMO.”

**Sources:**

- [Fritz John and Louis Nirenberg, On functions of bounded mean oscillation (1961)](https://doi.org/10.1002/cpa.3160140317)

### Defining polynomials by orthogonality makes the three-term recurrence a short argument

**Remember:** Move the factor x across the inner product to the lower degree side.

*True by definition. Confidence: medium.* MSC 42C05 (Orthogonal functions and polynomials, general theory of nontrigonometric harmonic analysis). arXiv math.CA. Level 3: graduate.

**Definition.** Fix a positive measure on ℝ with infinite support and all moments finite, so multiplication by x is symmetric: ⟨xf,g⟩ = ⟨f,xg⟩. The monic orthogonal polynomial pₙ has degree n, leading coefficient one, and zero inner product with every polynomial of lower degree.

**Problem.** For n≥0, xpₙ=pₙ₊₁+bₙpₙ+aₙpₙ₋₁ with bₙ real, aₙ positive, and p₋₁=0.

**How the definition helps.** Expand xpₙ in the basis p₀,…,pₙ₊₁; symmetry gives ⟨xpₙ,pₖ⟩ = ⟨pₙ,xpₖ⟩ = 0 for k &lt; n − 1, since xpₖ has degree below n (our own). Monicity makes the coefficient of pₙ₊₁ one, and bₙ = ⟨xpₙ,pₙ⟩/‖pₙ‖² is real. The same symmetry gives aₙ = ‖pₙ‖²/‖pₙ₋₁‖² &gt; 0 for n ≥ 1, while a₀ multiplies p₋₁ = 0 and can be any positive number.

**Wikipedia:** [Orthogonal polynomials](https://en.wikipedia.org/wiki/Orthogonal_polynomials). It says: “These recurrence relations are key for deriving properties of orthogonal polynomials.”

**Sources:** none listed. No primary source with a working link was found.

### Jacobi matrices supply orthogonality measures

**Remember:** The recurrence carries the first coordinate to every other coordinate.

*True by definition.* MSC 42C05 (Orthogonal functions and polynomials, general theory of nontrigonometric harmonic analysis), 47B36. arXiv math.CA. Level 3: graduate.

**Definition.** Let J be a self-adjoint tridiagonal operator on ℓ² of the positive integers, with positive off-diagonal entries and every coordinate vector eₙ in its domain. Its spectral measure ρ at e₁ gives each Borel set B the mass ‖1<sub>B</sub>(J)e₁‖², so that ∫p·q̄ dρ = ⟨p(J)e₁, q(J)e₁⟩ for polynomials p and q.

**Problem.** Run the three-term recurrence read from the rows of J, starting from the constant polynomial one. The resulting polynomials form an orthonormal basis of L² of the spectral measure.

**How the definition helps.** The spectral measure turns integrals of polynomial products into inner products of the vectors p(J)e₁. The recurrence makes the n-th polynomial send e₁ to eₙ₊₁, so the polynomials map to the orthonormal coordinate vectors (our own). These vectors span ℓ², so the spectral theorem makes the polynomials complete in L²(ρ) (our own).

**Paper or page:** [Spectral analysis of Jacobi operators and asymptotic behavior of orthogonal polynomials](https://arxiv.org/abs/2202.02087v1). It says: “The polynomials Pₙ(λ) are orthogonal and normalized in the spaces L²(ℝ; dρ<sub>J</sub>)”

**Sources:**

- [D. R. Yafaev. Spectral analysis of Jacobi operators and asymptotic behavior of orthogonal polynomials](https://arxiv.org/abs/2202.02087v1)

### Matched weights simplify Hilbert recurrences

**Remember:** Match the weights so orthogonality erases every positive-degree mean.

*True by definition.* MSC 42C05 (Orthogonal functions and polynomials, general theory of nontrigonometric harmonic analysis), 45E05. arXiv math.CA, math.NA. Level 3: graduate.

**Definition.** On \[−1,1\] take the weight w(x) = (1−x)ᵅ(1+x)ᵝ with α, β &gt; −1 and its orthonormal polynomials pₙ. The transform of pₙ at an interior point t is the principal value integral of pₙ(x)w(x)/(x − t), using the same weight w.

**Problem.** From degree one onward, the transformed polynomials follow the same homogeneous three-term recurrence as the original polynomials.

**How the definition helps.** The transformed recurrence differs from the original by a constant times ∫pₙw, and with matched weights this integral is zero for n ≥ 1 by orthogonality to constants (our own). A transform weight chosen independently need not cancel this term.

**Paper or page:** [Filtered integration rules for finite Hilbert transforms](https://arxiv.org/abs/2109.10634v1). It says: “satisfy the following three-term recurrence relation”

**Sources:**

- [D. Occorsio, M. G. Russo, W. Themistoclakis. Filtered integration rules for finite Hilbert transforms](https://arxiv.org/abs/2109.10634v1)

### Positive weights force simple roots

**Remember:** Positive weight: a one-signed product cannot integrate to zero.

*Rules out counterexamples.* MSC 42C05 (Orthogonal functions and polynomials, general theory of nontrigonometric harmonic analysis). arXiv math.CA. Level 3: graduate.

**Definition.** Take a positive measure on ℝ with infinite support and all moments finite. A monic real polynomial P of degree n is orthogonal if ∫PQ = 0 for every polynomial Q of lower degree, while positivity gives nonzero integral to any polynomial of one sign that is not zero on the whole support (our own).

**Problem.** P has n distinct simple roots in the interior of the smallest interval containing the support.

**How the definition helps.** Let Q be the product of the linear factors at the sign changes of P inside the interval, so PQ has one sign on the support (our own). Infinite support makes ∫PQ ≠ 0, so orthogonality forces deg Q ≥ n, and P has n distinct interior roots. The signed weights 1, −4, 1 at −1, 0, 1 make the rootless x² + 1 orthogonal to 1 and x.

**Wikipedia:** [Orthogonal polynomials](https://en.wikipedia.org/wiki/Orthogonal_polynomials). It says: “If the measure dα is supported on an interval \[a,b\], all the zeros of Pₙ lie in \[a,b\].”

**Sources:** none listed. No primary source with a working link was found.

### Raising operators give Fourier eigenfunctions

**Remember:** Each raising step multiplies the Fourier eigenvalue by −i.

*True by definition.* MSC 42C05 (Orthogonal functions and polynomials, general theory of nontrigonometric harmonic analysis), 42A38. arXiv math.CA. Level 3: graduate.

**Definition.** Start with the Gaussian exp(−πx²), which the Fourier transform fixes, and apply the raising operator h ↦ xh − h′/(2π) repeatedly; the n-th result is the Hermite function of degree n, up to a constant factor. The Fourier transform turns this raising operator into −i times itself (our own).

**Problem.** With exponential kernel exp(−2πixξ), the Hermite function of degree n has Fourier eigenvalue (−i)ⁿ.

**How the definition helps.** By induction from the Gaussian, whose eigenvalue is one, the degree-n Hermite function has eigenvalue (−i)ⁿ (our own). The intertwining follows from the Fourier rules for multiplication by x and for differentiation (our own).

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596). It says: “The Hermite functions are eigenfunctions of the Fourier transform”

**Sources:** none listed. No primary source with a working link was found.

### Defining Walsh functions as group characters makes their orthogonality automatic

**Remember:** Characters of a compact group: a sign-flipping translation forces zero integral.

*True by definition. Confidence: medium.* MSC 42C10 (Fourier series in special orthogonal functions (Legendre polynomials, Walsh functions, etc.)), 43A40. arXiv math.CA. Level 3: graduate.

**Definition.** Let 𝔻 be the group of infinite binary sequences under digitwise addition modulo two, with the product measure of fair digits. The Walsh functions are its characters, the continuous homomorphisms to the unit circle, read on \[0,1) through binary expansion.

**Problem.** Distinct Walsh functions are orthogonal for uniform measure on \[0, 1).

**How the definition helps.** Two distinct characters χ and ψ differ at some point t, so translation by t multiplies χψ̄ by a constant c ≠ 1 (our own). Translation preserves the measure, so ∫χψ̄ = c∫χψ̄, which forces the integral to be zero. Binary expansion carries this measure to uniform measure on \[0,1), away from a null set.

**Wikipedia:** [Walsh function](https://en.wikipedia.org/wiki/Walsh_function). It says: “Elements of 𝔻̂ are readily identified with Walsh functions.”

**Sources:** none listed. No primary source with a working link was found.

### Canonical duals keep Gabor shifts

**Remember:** The inverse frame operator commutes with every lattice shift.

*True by definition.* MSC 42C15 (General harmonic expansions, frames). arXiv math.FA. Level 3: graduate.

**Definition.** The shifts gⱼ of one window g along a lattice of time–frequency shifts form a Gabor frame if A‖f‖² ≤ ∑ⱼ\|⟨f,gⱼ⟩\|² ≤ B‖f‖² for every f, with fixed 0 &lt; A ≤ B &lt; ∞. The frame operator Sf = ∑ⱼ⟨f,gⱼ⟩gⱼ is then invertible and commutes with every lattice shift (our own), and the canonical dual is the family S⁻¹gⱼ.

**Problem.** The canonical dual of a lattice Gabor frame is another Gabor frame on the same lattice.

**How the definition helps.** A lattice shift permutes the frame vectors up to phases, which cancel in S, so S and S⁻¹ commute with it (our own). So S⁻¹ applied to a shift of g is the same shift of S⁻¹g.

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “there exists a dual window g̃ ∈ L²(ℝᵈ) such that the canonical dual frame of 𝒢(g, ℒ) is 𝒢(g̃, ℒ).”

**Sources:** none listed. No primary source with a working link was found.

### Real phase retrieval works exactly when every split leaves a spanning part

**Remember:** However you split the measurements, one side still spans.

*Rules out counterexamples.* MSC 42C15 (General harmonic expansions, frames), 94A12. arXiv cs.LG, math.FA. Level 3: graduate.

**Definition.** A family of measurement vectors in ℝⁿ has the complement property if, for every split of the family into two parts, at least one part spans ℝⁿ. This is the right test because \|⟨φ,x⟩\| = \|⟨φ,y⟩\| says φ is perpendicular to x − y or to x + y, which splits the family in two (our own).

**Problem.** A finite real measurement family determines every vector up to sign from its absolute inner products exactly when it has the complement property.

**How the definition helps.** If one part spans, the vector it is perpendicular to is zero, so x = ±y (our own). If neither part spans, pick nonzero u and v perpendicular to the spans of the two parts. Then u + v and u − v have equal measurements, yet neither equals the other or its negative.

**Paper or page:** [Optimal lower Lipschitz bounds for ReLU layers, saturation, and phase retrieval](https://arxiv.org/abs/2502.09898v1). It says: “For any J ⊆ I, either (φᵢ)ᵢ∈J or (φᵢ)ᵢ∈Jᶜ is a frame for ℝⁿ.”

**Sources:**

- [Daniel Freeman, Daniel Haider, Optimal lower Lipschitz bounds for ReLU layers, saturation, and phase retrieval, arXiv:2502.09898v1 (2025)](https://arxiv.org/abs/2502.09898v1)
- [Radu Balan, Pete Casazza, Dan Edidin, On signal reconstruction without phase, Applied and Computational Harmonic Analysis 20(3), 345–356 (2006)](https://doi.org/10.1016/j.acha.2005.07.001)

### Short windows flatten spectral energy

**Remember:** Nonoverlapping window translates kill the nonconstant Fourier coefficients.

*Rules out counterexamples.* MSC 42C15 (General harmonic expansions, frames), 42A38. arXiv math.CA. Level 3: graduate.

**Definition.** Fix P &gt; 0 and a window g ∈ L²(ℝ) that vanishes outside an interval of length at most 1/P, so it does not overlap its translates by nonzero multiples of 1/P. Its periodized spectral energy is ∑ₙ\|ĝ(y+nP)\|², with Fourier kernel exp(−2πixξ).

**Problem.** The periodized energy equals ‖g‖₂²/P almost everywhere. This can fail for longer windows.

**How the definition helps.** By Plancherel, the Fourier coefficients of the periodized energy are the inner products of g with these translates, divided by P (our own). No overlap leaves only the constant coefficient ‖g‖₂²/P, and Fourier uniqueness gives the identity. For P = 1, the indicator of \[0,2\] overlaps its translate by one, which gives a counterexample (our own).

**Paper or page:** [Frequency-dependent stability for Gabor frames](https://arxiv.org/abs/2410.01681v2). It says: “∑ₙ \|ĝ(y + Pn)\|² = (1/P) ‖g‖₂².”

**Sources:**

- [Frequency-dependent stability for Gabor frames](https://arxiv.org/abs/2410.01681v2)

### Zak zeros prevent Gabor frames

**Remember:** At critical spacing, a Zak zero kills the lower bound.

*Rules out counterexamples.* MSC 42C15 (General harmonic expansions, frames), 42C40. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** The Zak transform of g ∈ L²(ℝ) is Zg(x,ω) = ∑ₖ g(x−k)exp(2πikω), an L² function on the unit square that turns the integer time and frequency shifts of g into multiplication by exponentials (our own). The family g(t−m)exp(2πint), m, n ∈ ℤ, is a frame if its squared coefficient sum lies between fixed positive multiples of ‖f‖² for every f.

**Problem.** On the integer time and frequency lattice, a continuous Zak transform with a zero cannot give a Gabor frame. In particular, a Gaussian window fails on this lattice.

**How the definition helps.** The frame bounds of this family are the essential infimum and supremum of \|Zg\|², so a frame needs \|Zg\| bounded below almost everywhere. A continuous Zg with a zero is arbitrarily small on sets of positive area (our own). For the centered Gaussian the series converges uniformly, and terms k and 1 − k cancel at (½, ½) (our own).

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “0 &lt; a ≤ \|Zg(x,ω)\| ≤ b &lt; ∞”

**Sources:** none listed. No primary source with a working link was found.

### Admissibility gives wavelet reconstruction

**Remember:** An admissible wavelet gives every nonzero frequency the same total weight.

*Rules out counterexamples.* MSC 42C40 (Nontrigonometric harmonic analysis involving wavelets and other special systems). arXiv math.CA, math.FA. Level 3: graduate.

**Definition.** A nonzero real ψ ∈ L²(ℝ) is admissible if ∫\|ψ̂(ω)\|²/\|ω\| dω is finite. Then integrating \|ψ̂(aω)\|² over all scales a &gt; 0 against da/a gives every nonzero frequency ω the same finite weight, half that integral (our own).

**Problem.** Compare a signal with translates of ψ dilated by positive scales and normalized in L², weighting translation b and scale a by db da/a². For admissible ψ, the adjoint of this coefficient map recovers the signal up to a fixed positive factor.

**How the definition helps.** Plancherel in b and the equal scale weight make the squared norm of the coefficients a fixed positive multiple of ‖f‖² (our own). Polarization turns this into reconstruction by the adjoint up to that factor. A Gaussian is not admissible because its transform is positive at zero.

**Wikipedia:** [Continuous wavelet transform](https://en.wikipedia.org/wiki/Continuous_wavelet_transform). It says: “A wavelet whose admissible constant satisfies \\(0&lt;C\_\\psi&lt;\\infty\\) is called an admissible wavelet.”

**Sources:**

- [A. Grossmann and J. Morlet, Decomposition of Hardy Functions into Square Integrable Wavelets of Constant Shape (1984)](https://doi.org/10.1137/0515056)

### Orthogonal details build wavelet bases

**Remember:** Each detail space contains exactly what the coarser space missed.

*True by definition.* MSC 42C40 (Nontrigonometric harmonic analysis involving wavelets and other special systems). arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** Let (Vⱼ)ⱼ∈ℤ be increasing closed subspaces of a Hilbert space with dense union and intersection {0}. The detail space Wⱼ is the orthogonal complement of Vⱼ inside Vⱼ₊₁, so details at different scales are perpendicular.

**Problem.** Putting together orthonormal bases of all detail spaces gives an orthonormal basis of the full space.

**How the definition helps.** Details at different scales are perpendicular because Wᵢ lies in Vⱼ for i &lt; j while Wⱼ is perpendicular to Vⱼ (our own). Splitting Vⱼ₊₁ = Vⱼ ⊕ Wⱼ repeatedly writes each space as a coarser one plus details (our own). The projections onto Vⱼ tend to zero as j → −∞ and to the identity as j → ∞, which gives completeness.

**Paper or page:** [A characterization of wavelet sets on Vilenkin groups with its application to construction of MRA wavelets](https://arxiv.org/abs/2405.04220v1). It says: “forms an orthonormal basis of L²(G).”

**Sources:**

- [S. G. Mallat, A theory for multiresolution signal decomposition: the wavelet representation (1989)](https://doi.org/10.1109/34.192463)

### Smoothing counts approximate additive relations

**Remember:** A short interval cannot distinguish nearly equal sums.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 42A05 (Trigonometric polynomials, inequalities, extremal problems), 11B30. arXiv math.CA, math.NT. Level 4: research.

**Definition.** For a finite set W of real numbers and η &gt; 0, the additive energy at scale η counts the ordered quadruples (a,b,c,d) in W⁴ with \|a + b − c − d\| ≤ η, so nearly equal sums count as equal.

**Problem.** Put P(v) = ∑ exp(iav), summing over a in W. On any interval of length H &gt; 0, the integral of \|P(v)\|⁴ is at most CH times the energy at scale 1/H, with C absolute.

**How the definition helps.** A scaled (sin x / x)² majorizes the interval's indicator, and its Fourier transform vanishes outside \[−1/H, 1/H\] with size at most CH (our own). Expanding \|P\|⁴ as a sum of waves exp(i(a+b−c−d)v) then keeps only quadruples with \|a + b − c − d\| ≤ 1/H, each contributing at most CH (our own).

**Paper or page:** [New large value estimates for Dirichlet polynomials](https://arxiv.org/abs/2405.20552). It says: “\|R(v)\|⁴ dv ⪅ E(W).”

**Sources:**

- [Larry Guth, James Maynard, New large value estimates for Dirichlet polynomials](https://arxiv.org/abs/2405.20552)

### Fourier decay gives positive-volume sumsets

**Remember:** Decay beyond half makes the self-convolution square-integrable.

*Rules out counterexamples. Confidence: medium.* MSC 42A38 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 28A80. arXiv math.CA. Level 4: research.

**Definition.** The Fourier dimension of a compact set E ⊂ ℝ is the supremum of s ∈ \[0,1\] for which E carries a probability measure μ with \|μ̂(ξ)\| ≤ C(1+\|ξ\|)⁻ˢᐟ² for all real ξ and some finite C. When s &gt; ½ this decay makes μ̂² square-integrable (our own).

**Problem.** If a compact set has Fourier dimension greater than one half, the set of all sums of two of its points has positive length.

**How the definition helps.** μ∗μ is a probability measure on E + E with Fourier transform μ̂², which is square-integrable when s &gt; ½ (our own). Plancherel gives it an L² density, so E + E has positive length. Base-nine digits 0 to 3 give a set of Hausdorff dimension log 4/log 9 &gt; ½ whose sums use only digits 0 to 6 and have zero length.

**Paper or page:** [Fourier Dimension and Translation Invariant Linear Equations](https://arxiv.org/abs/2411.06302v1). It says: “Let E ⊂ \[0,1\] be a closed set and μ be a probability measure supported on E satisfying \|μ̂(ξ)\| ≤ C (1+\|ξ\|)⁻ᵝ for some finite positive constant C and β &gt; 1/4.”

**Sources:** none listed. No primary source with a working link was found.

### Tile counts give lattice spectra

**Remember:** Dual-lattice waves are periodic, so they read the covering count.

*Makes the theorem clean to state or prove.* MSC 42B10 (Fourier and Fourier-Stieltjes transforms and other transforms of Fourier type), 42B05. arXiv math.CA. Level 4: research.

**Definition.** For a full-rank lattice L ⊂ ℝᵈ, the dual lattice L\* consists of the ξ with ξ·v ∈ ℤ for all v ∈ L, so its waves exp(2πiξ·x) are exactly the L-periodic ones. L\* is a spectrum for E if these waves form an orthogonal basis of L²(E), and E tiles by L if almost every point lies in exactly one translate E + v.

**Problem.** A measurable set of finite positive volume tiles by a lattice exactly when its dual lattice is a spectrum.

**How the definition helps.** The inner products of these waves on E are the Fourier coefficients, on one cell of L, of the number of translates covering each point (our own). Orthogonality makes every nonconstant coefficient vanish, so the count is constant, and completeness forces it to be one. Conversely, a tile is one cell cut up and moved by L, and periodic waves cannot see the move, so the cell's Fourier basis carries over (our own).

**Paper or page:** [Orthogonal Fourier Analysis on Domains](https://arxiv.org/abs/2408.15361v3). It says: “Then E tiles ℝᵈ when translated by the lattice L if and only if the dual lattice L\* of L is a spectrum of E.”

**Sources:**

- [Bent Fuglede, Commuting self-adjoint partial differential operators and a group theoretic problem (1974)](https://doi.org/10.1016/0022-1236(74)90072-x)

### Weak porosity is exactly what makes a distance weight an A₁ weight

**Remember:** In every cube, near-largest holes cover a fixed fraction.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 42B25 (Maximal functions, Littlewood-Paley theory), 28A75. arXiv math.CA. Level 4: research.

**Definition.** A set E ⊂ ℝⁿ is weakly porous if, in every cube, the dyadic subcubes that miss E and are nearly as large as the largest such hole cover a fixed fraction of the cube. Precisely, let M be the largest volume of a dyadic subcube of Q disjoint from E, which must exist; there are fixed c, δ ∈ (0,1) such that disjoint such subcubes of volume ≥ δM cover at least c\|Q\| for every cube Q.

**Problem.** Let E ⊂ ℝⁿ be nonempty with E ≠ ℝⁿ. The distance weight dist(x, E)⁻ᵅ is in A₁ for some α &gt; 0 exactly when E is weakly porous.

**How the definition helps.** A₁ means the maximal function of the weight is at most a fixed multiple of the weight almost everywhere, and on a cube this compares the average of an inverse distance power with its value near the largest hole (our own). Weak porosity says that holes comparable to the largest one fill a fixed fraction, which is what keeps that average under control (our own). The quoted characterization theorem proves the equivalence.

**Paper or page:** [Weakly porous sets and Muckenhoupt Aₚ distance functions](https://arxiv.org/abs/2209.06284v2). It says: “As our first main result we show that the distance weight w(x)=dist(x,E)⁻ᵅ belongs to the Muckenhoupt class A₁, for some α&gt;0, if and only if E⊂ℝⁿ is weakly porous.”

**Sources:**

- [Theresa C. Anderson, Juha Lehrbäck, Carlos Mudarra, Antti V. Vähäkangas, Weakly porous sets and Muckenhoupt Aₚ distance functions, arXiv:2209.06284 (2022)](https://arxiv.org/abs/2209.06284v2)

### Gaussian modulation norms survive Fourier transformation

**Remember:** The Gaussian window is its own transform; one exponent survives swapping.

*True by definition.* MSC 42B35 (Function spaces arising in harmonic analysis), 42A38. arXiv math.CA. Level 4: research.

**Definition.** With waves exp(−2πix·ξ), take the Gaussian window g(x) = exp(−π\|x\|²), which the Fourier transform leaves unchanged. Multiply f by the window translated by x, and take the Fourier transform of the product at ξ. The modulation norm of f is the Lᵖ norm of these values over all positions x and frequencies ξ together.

**Problem.** For 1 ≤ p ≤ ∞, the Fourier transform preserves this norm on Schwartz functions, the smooth functions whose derivatives all decay faster than every inverse power.

**How the definition helps.** Because the window is its own transform, the short-time transform of f̂ is that of f with position and frequency exchanged, one sign reversed and a factor of size one (our own). A single Lᵖ norm over both variables does not change under that change of variables (our own). With separate exponents for position and frequency, the exchange can change the norm.

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1), [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “If p = q, then Mᵖ˒ᑫ(ℝᵈ) is invariant under the Fourier transform.”

**Sources:**

- [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1)

### Irrational angles determine signals up to phase

**Remember:** Two reflections make a rotation, and an irrational rotation is dense.

*Rules out counterexamples.* MSC 42C15 (General harmonic expansions, frames), 42A38. arXiv math.CA. Level 4: research.

**Definition.** For f ∈ L²(ℝ) let V(f)(x,ξ) = ∫f(t)exp(−π(t−x)²)exp(−2πitξ)dt, the Gaussian short-time transform. Measure \|V(f)\| on the horizontal axis and on the line through the origin at angle θ, with θ/π irrational, so reflections in the two lines generate a rotation by 2θ whose powers are dense.

**Problem.** Two square-integrable signals with identical measurements differ only by a constant factor of magnitude one. This can fail at rational multiples of π.

**How the definition helps.** The Bargmann transform turns the measurements into magnitudes of entire functions on the two lines, and reflection in either line sends the quotient of two transforms to its conjugate reciprocal (our own). Two reflections make the rotation by 2θ, whose dense powers force the quotient to be a constant of size one. At θ = π/m, zᵐ + i and zᵐ − i have equal magnitudes on both lines.

**Paper or page:** [Phase retrieval of entire functions and its implications for Gabor phase retrieval](https://arxiv.org/abs/2202.03733v5). It says: “Then, there exists an α ∈ ℝ such that f = eⁱᵅ g.”

**Sources:**

- [Phase retrieval of entire functions and its implications for Gabor phase retrieval](https://arxiv.org/abs/2202.03733v5)

### Metaplectic operators preserve Gabor frame bounds

**Remember:** Transform the window and the grid together to keep the bounds.

*True by definition.* MSC 42C15 (General harmonic expansions, frames). arXiv math.CA. Level 4: research.

**Definition.** Let π(z) be the time–frequency shift by z = (x, ξ). A unitary U is covariant for a symplectic map S if Uπ(z)U⁻¹ = c(z)π(Sz) with \|c(z)\| = 1 for every z, so U sends each shift of a window g to a shift of Ug up to phase; every metaplectic operator for S is such a U.

**Problem.** Applying a metaplectic operator to the window and its symplectic map to the grid preserves both frame bounds.

**How the definition helps.** The frame vector π(Sz)Ug equals Uπ(z)g up to a phase, so its coefficient against f has the same size as that of π(z)g against U⁻¹f (our own). Since ‖U⁻¹f‖ = ‖f‖, both frame bounds carry over.

**Paper or page:** [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1), [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1). It says: “In this case, both systems possess the same frame bounds.”

**Sources:**

- [Time-Frequency Analysis (Lecture Notes)](https://arxiv.org/abs/2204.01596v1)

### Frequency tiles give wavelet bases

**Remember:** Dilates tile frequency space; each tile folds onto one standard cell.

*Makes the theorem clean to state or prove.* MSC 42C40 (Nontrigonometric harmonic analysis involving wavelets and other special systems), 43A70. arXiv math.CA, math.FA. Level 4: research.

**Definition.** On the dual Vilenkin group, let D be the dilation that shifts digit positions, and give each nonzero digit j a measurable set Eⱼ whose indicator has inverse Fourier transform a wavelet. The conditions are that the dilates DᵏEⱼ, k ∈ ℤ, partition frequency space, and that each Eⱼ cuts into pieces whose digit translates partition the standard frequency cell, both up to null sets.

**Problem.** The frequency sets satisfy these two conditions exactly when the associated wavelet translates and dilates form an orthonormal basis.

**How the definition helps.** The first partition gives orthogonality across scales, and the second gives a basis within each tile, because translating the pieces carries the standard cell's character basis to each set (our own). Plancherel moves this basis to the group, and the cited wavelet-set characterization gives the converse.

**Paper or page:** [A characterization of wavelet sets on Vilenkin groups with its application to construction of MRA wavelets](https://arxiv.org/abs/2405.04220v1). It says: “Then Ω is a wavelet set if and only if both of the following conditions hold true:”

**Sources:**

- [J. Liu and C. Zhang, A characterization of wavelet sets on Vilenkin groups with its application to construction of MRA wavelets (2024)](https://arxiv.org/abs/2405.04220v1)

### Matching grids cancel wavelet moments

**Remember:** Matching moments cancel when the fine grid subtracts the coarse grid.

*True by definition.* MSC 42C40 (Nontrigonometric harmonic analysis involving wavelets and other special systems), 41A10. arXiv math.NA. Level 4: research.

**Definition.** Let Bⱼ and Cₗ be the de la Vallée Poussin interpolation bases of filter width m on 3n and on n Chebyshev zeros, the fine and the coarse grid. At a fine node yⱼ off the coarse grid, ψⱼ = Bⱼ − ∑ₗ Cₗ(yⱼ)Bᵢ₍ₗ₎, where i(l) indexes coarse node xₗ on the fine grid. Against the Chebyshev weight, each fine basis function integrates a polynomial q of degree at most n − m to π/(3n) times q at its node (our own).

**Problem.** Fix an integer filter width m with 1 ≤ m &lt; n. Every resulting polynomial has zero integral against each monomial through degree n − m with weight 1/√(1 − x²) on (−1, 1).

**How the definition helps.** The subtracted sum integrates q to π/(3n) times ∑ₗ Cₗ(yⱼ)q(xₗ), and coarse interpolation reproduces q, so this equals πq(yⱼ)/(3n) (our own). That is also the integral of Bⱼq, so the moment of ψⱼ is zero.

**Paper or page:** [A free parameter depending family of polynomial wavelets on a compact interval](https://arxiv.org/abs/2503.12397v1). It says: “the first n − m moments of the interpolating wavelets ψₙ,ₖᵐ are zero”

**Sources:**

- [A free parameter depending family of polynomial wavelets on a compact interval](https://arxiv.org/abs/2503.12397v1)
