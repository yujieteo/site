### Lagrange basis functions separate interpolation data

**Remember:** Each basis polynomial reads one data value and ignores the others.

*True by definition.* MSC 41A05 (Interpolation in approximation theory), 15A03. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For n + 1 distinct nodes, the Lagrange basis polynomial of the node xᵢ is the product of (x − xⱼ)/(xᵢ − xⱼ) over the other nodes xⱼ. It has degree n and equals 1 at xᵢ, and it equals 0 at every other node (our own).

**Problem.** For n + 1 distinct real nodes and arbitrary real values there, exactly one polynomial of degree at most n takes those values.

**How the definition helps.** The sum of aᵢ times the ith basis polynomial takes the value aᵢ at xᵢ, since every other term vanishes there (our own). Two solutions differ by a polynomial of degree at most n with n + 1 roots, which must be zero (our own).

**Paper or page:** [Lagrange Interpolation Formula/Formulation 1](https://proofwiki.org/wiki/Lagrange_Interpolation_Formula/Formulation_1). It says: “Then there exists a unique polynomial P ∈ ℝ\[X\] of degree at most n such that: P(xᵢ) = aᵢ for all i ∈ {0, 1, …, n}”

**Sources:** none listed. No primary source with a working link was found.

### Rational polynomials give a countable dense set of approximants

**Remember:** First approximate by a polynomial, then round its finitely many coefficients.

*Makes the theorem clean to state or prove.* MSC 41A10 (Approximation by polynomials), 54C35. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A space of functions is separable in the uniform norm if some countable set of its functions approximates every function. Each approximation must hold to within any ε &gt; 0 at all points of the interval at once.

**Problem.** The space of continuous real functions on a closed bounded interval is separable in the uniform norm. Polynomials with rational coefficients form a countable dense subset.

**How the definition helps.** The Weierstrass approximation theorem gives a polynomial within ε/2 of each continuous function. Each power of x is bounded on the interval, so rounding the finitely many coefficients to rationals moves the polynomial by less than ε/2 everywhere. Polynomials with rational coefficients form a countable set.

**Wikipedia:** [Stone–Weierstrass theorem](https://en.wikipedia.org/wiki/Stone%E2%80%93Weierstrass_theorem). It says: “each polynomial function can be uniformly approximated by one with rational coefficients”

**Sources:** none listed. No primary source with a working link was found.

### Bernstein averages do not amplify uniform error

**Remember:** A weighted average cannot amplify the largest sample error.

*True by definition.* MSC 41A36 (Approximation by positive operators), 41A10. arXiv math.CA. Level 1: early undergraduate.

**Definition.** The nth Bernstein polynomial of f at x in \[0, 1\] is a weighted average of the samples f(k/n), 0 ≤ k ≤ n. The weight on f(k/n) is the probability of exactly k successes in n independent trials with success probability x, so the weights are nonnegative and total one.

**Problem.** Applying Bernstein approximation of the same degree to two continuous functions on \[0, 1\] cannot increase their uniform distance.

**How the definition helps.** The difference of the two Bernstein polynomials is the same weighted average of the sample differences. Its absolute value is at most the largest sample difference, which is at most the uniform distance of the two functions.

**Wikipedia:** [Bernstein polynomial](https://en.wikipedia.org/wiki/Bernstein_polynomial). It says: “The Bernstein basis polynomials of degree n form a partition of unity”

**Sources:** none listed. No primary source with a working link was found.

### Relative error lets asymptotic equivalents multiply and divide

**Remember:** Ratios near one are safe to multiply and divide.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Two functions are asymptotically equivalent, written f ∼ g, if g is eventually nonzero and the ratio f/g tends to 1. All limits are taken at the same point or at infinity.

**Problem.** If f ∼ g and u ∼ v, then fu ∼ gv and f/u ∼ g/v.

**How the definition helps.** Ratios obey the limit laws: (fu)/(gv) = (f/g)(u/v) and (f/u)/(g/v) = (f/g)/(u/v) both tend to 1, since u and v are eventually nonzero (our own). A definition by absolute difference would fail, because 2/x − 1/x → 0 at infinity while the ratio stays 2.

**Wikipedia:** [Asymptotic analysis](https://en.wikipedia.org/wiki/Asymptotic_analysis). It says: “asymptotically equivalent functions to be freely exchanged in many algebraic expressions”

**Sources:** none listed. No primary source with a working link was found.

### Uniform little o lets a growing sum preserve a small error

**Remember:** One bound for a whole row also bounds its average.

*Rules out counterexamples.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The entries r(n,k), 1 ≤ k ≤ n, of a triangular array are uniformly o(1) if the largest \|r(n,k)\| in row n tends to zero as n grows.

**Problem.** If r(n,k) is uniformly o(1) for 1 ≤ k ≤ n, the row sum divided by n tends to zero.

**How the definition helps.** The row average has absolute value at most the largest entry in its row, so it tends to zero. Smallness in each column is not enough. Our own example is 1 where k &gt; n/2 and 0 elsewhere: its columns tend to zero, but its row averages approach ½.

**nLab:** [uniform convergence](https://ncatlab.org/nlab/show/uniform+convergence). It says: “the bound N(ε) is required to work for all x ∈ X”

**Sources:** none listed. No primary source with a working link was found.

### Unit-interval errors give a bound for the harmonic remainder

**Remember:** Each step overshoots the area under 1/x by a sliver.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)), 40A25. arXiv math.CA. Level 1: early undergraduate.

**Definition.** Let e(k) = 1/k − log((k + 1)/k), the amount by which the rectangle of height 1/k over \[k, k + 1\] exceeds the area under 1/x there. Define γ as the sum of all e(k); since 1/x decreases, each e(k) lies strictly between 0 and 1/k − 1/(k + 1).

**Problem.** For the nth harmonic number Hₙ = 1 + ½ + ⋯ + 1/n, the difference Hₙ−log n−γ lies strictly between 0 and 1/n.

**How the definition helps.** The tail sum of e(k) for k ≥ n equals 1/n − (Hₙ − log n − γ) (our own). Each tail term is positive and the upper bounds telescope to 1/n, so the tail lies strictly between 0 and 1/n.

**Paper or page:** [Harmonic Number is Greater than Logarithm plus Gamma](https://proofwiki.org/wiki/Harmonic_Number_is_Greater_than_Logarithm_plus_Gamma). It says: “Hₙ &gt; ln n + γ”

**Sources:** none listed. No primary source with a working link was found.

### Chebyshev grids nest under refinement

**Remember:** The old angles become the even indices.

*True by definition.* MSC 41A05 (Interpolation in approximation theory), 65D05. arXiv math.NA. Level 2: later undergraduate.

**Definition.** The Chebyshev grid with n + 1 points takes xₖ = cos(kπ/n) for k = 0, …, n, the cosines of equally spaced angles from 0 to π. Doubling n halves the angle spacing, so each old angle kπ/n reappears as 2kπ/(2n) (our own).

**Problem.** For n ≥ 1, the n + 1 Chebyshev grid points all occur in the refined grid with 2n + 1 points.

**How the definition helps.** Each old point cos(kπ/n) equals the refined point with index 2k, so the old grid lies inside the new one (our own).

**Wikipedia:** [Chebyshev nodes](https://en.wikipedia.org/wiki/Chebyshev_nodes). It says: “xₖ = cos(kπ/n), k = 0, …, n.”

**Sources:** none listed. No primary source with a working link was found.

### The Hermite–Genocchi integral makes divided differences continuous at repeated nodes

**Remember:** Integrate the nth derivative over all weighted means of the nodes.

*True by definition. Confidence: medium.* MSC 41A05 (Interpolation in approximation theory), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For nodes x₀, …, xₙ where f has n continuous derivatives, the order n divided difference integrates f⁽ⁿ⁾(∑tᵢxᵢ) over all weights tᵢ ≥ 0 with ∑tᵢ = 1. Volume is measured in t₁, …, tₙ, so this simplex of weights has volume 1/n!.

**Problem.** Let f have n continuous derivatives on an interval. Its order n divided difference extends continuously to repeated nodes, with value f⁽ⁿ⁾(x)/n! when all n + 1 nodes equal x.

**How the definition helps.** The integrand depends continuously on the nodes and the simplex is compact, so the integral is continuous in the nodes (our own). When all nodes equal x, the integrand is the constant f⁽ⁿ⁾(x), so the integral is f⁽ⁿ⁾(x)/n! (our own). The work is the proof that the integral obeys the divided-difference recursion at distinct nodes (our own).

**Wikipedia:** [Divided differences](https://en.wikipedia.org/wiki/Divided_differences). It says: “the divided difference can be expressed as an integral over a n-simplex Δₙ:”

**Sources:** none listed. No primary source with a working link was found.

### Binomial averages give uniform polynomial approximation

**Remember:** A random sample point clusters at x, so averages approach f(x).

*Makes the theorem clean to state or prove.* MSC 41A10 (Approximation by polynomials), 41A36. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Bernstein polynomial of f at x in \[0, 1\] is the expected value of f(K/n), where K counts successes in n independent trials with success probability x. The sample point K/n has variance x(1 − x)/n ≤ 1/(4n), so it concentrates near x as n grows.

**Problem.** The Bernstein polynomials of every continuous real function on \[0, 1\] converge uniformly to that function. By rescaling the interval, this gives the Weierstrass approximation theorem on any closed bounded interval.

**How the definition helps.** Split the error at x into samples near x and samples far from x. Uniform continuity makes near samples close to f(x), and Chebyshev's inequality makes far samples improbable uniformly in x, while f is bounded (our own).

**Wikipedia:** [Bernstein polynomial](https://en.wikipedia.org/wiki/Bernstein_polynomial). It says: “Bernstein polynomials look like Binomial expectations.”

**Paper or page:** [Weierstrass Approximation Theorem](https://proofwiki.org/wiki/Weierstrass_Approximation_Theorem). It says: “Then f can be uniformly approximated on 𝕀 by a polynomial function to any given degree of accuracy.”

**Sources:**

- [S. Bernstein, Démonstration du théorème de Weierstrass fondée sur le calcul des probabilités (1912)](https://www.mn.uio.no/math/english/people/aca/michaelf/translations/bernstein_english.pdf)

### Positive Chebyshev tails peak together

**Remember:** Every discarded cosine reaches one at the same endpoint.

*True by definition.* MSC 41A10 (Approximation by polynomials), 41A25. arXiv math.NA. Level 2: later undergraduate.

**Definition.** For 0 ≤ k ≤ n, expand xⁿ in the Chebyshev polynomials Tⱼ, defined by Tⱼ(cos θ) = cos(jθ), and keep the terms with j ≤ k. Each Tⱼ lies between −1 and 1 on \[−1, 1\] and equals 1 at x = 1.

**Problem.** On \[−1, 1\], the maximum absolute error of this truncation of xⁿ equals the sum of the discarded Chebyshev coefficients.

**How the definition helps.** The binomial expansion of cosⁿθ into cosines gives xⁿ nonnegative Chebyshev coefficients (our own). Each discarded term is at most its coefficient in absolute value, and all reach that bound together at x = 1 (our own). So the maximum error is their sum.

**Paper or page:** [Approximating monomials using Chebyshev polynomials](https://arxiv.org/abs/2101.06818v1). It says: “The error in the polynomial approximation φₖ(x) satisfies ‖xⁿ − φₖ(x)‖∞ = pₙ,ₖ.”

**Sources:** none listed. No primary source with a working link was found.

### Distinct hinges make distinct corners

**Remember:** One nonzero hinge at each location gives one visible corner.

*Rules out counterexamples.* MSC 41A15 (Spline approximation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** A hinge at b is max(0, x − b), whose slope jumps by 1 at b. Write a continuous piecewise linear function as a line plus hinges with distinct locations and nonzero weights, so the slope jumps by each weight at its location (our own).

**Problem.** A line plus n such hinges on the real line has exactly n breakpoints, meaning points where its slope changes.

**How the definition helps.** Near each hinge location the other summands are linear, so the slope changes there by the nonzero weight (our own). Away from the locations the function is linear, so it has exactly n breakpoints. Distinct locations matter: two hinges at 0 with weights 1 and −1 cancel and leave no breakpoint (our own).

**Paper or page:** [Spline Representation and Redundancies of One-Dimensional ReLU Neural Network Models](https://arxiv.org/abs/2207.14609v1). It says: “Moreover, f₂ is a CPL spline with exactly n active breakpoints,”

**Sources:**

- [Gerlind Plonka, Yannick Riebe, Yurii Kolomoitsev, Spline Representation and Redundancies of One-Dimensional ReLU Neural Network Models](https://arxiv.org/abs/2207.14609v1)

### Matching endpoint second derivatives reproduces quadratics

**Remember:** Match endpoint second derivatives to recover the quadratic everywhere.

*True by definition. Confidence: medium.* MSC 41A15 (Spline approximation), 65D07. arXiv math.NA. Level 2: later undergraduate.

**Definition.** A cubic spline on knots a = x₀ &lt; ⋯ &lt; xₙ = b, with n ≥ 1, is twice continuously differentiable and a polynomial of degree at most three between knots. The interpolant with prescribed endpoint second derivatives has s(xᵢ) = f(xᵢ) at every knot, s″(a) = f″(a) and s″(b) = f″(b). The natural spline instead has s″(a) = s″(b) = 0.

**Problem.** Prescribing the correct endpoint second derivatives makes the cubic spline interpolant reproduce every quadratic exactly. The natural spline fails even for f(x) = x².

**How the definition helps.** A quadratic f is itself a cubic spline that meets all these conditions, so uniqueness of the spline interpolant makes the interpolant equal f (our own). The natural spline has zero endpoint second derivatives, but x² has second derivative 2, so it cannot equal x² (our own).

**Paper or page:** [Cubic spline functions revisited](https://arxiv.org/abs/2507.05083v1). It says: “the error of the natural spline s (with s″(x₀) = s″(xₙ) = 0) is of the exact order h² when \|f″(x₀)\| + \|f″(xₙ)\| &gt; 0.”

**Sources:**

- [Florian Jarre, Cubic spline functions revisited](https://arxiv.org/abs/2507.05083v1)

### Step functions preserve jumps

**Remember:** Give each jump to a step and leave the spline continuous.

*Rules out counterexamples.* MSC 41A15 (Spline approximation), 65D07. arXiv math.NA. Level 2: later undergraduate.

**Definition.** Let f be continuous on its interval except at finitely many interior jumps, where it is left-continuous. Subtract the step function J, the sum over jumps b of (f(b+) − f(b)) times the indicator of x &gt; b. Approximate the remainder f − J, which is continuous (our own), by a continuous spline, then add J back.

**Problem.** The resulting approximant has exactly the same jumps as the input. On an interval, no sequence of continuous splines alone can approximate a unit step uniformly.

**How the definition helps.** Each step carries exactly one jump of f, so f − J is continuous and the approximant's only jumps are those of J (our own). A continuous function must miss one side of a unit jump by at least ½, so continuous splines alone cannot approximate a step uniformly (our own).

**Paper or page:** [A B-spline-Heaviside collocation method for solving Fredholm integral equations with piecewise Holder-continuous right-hand sides](https://arxiv.org/abs/2511.06590v1). It says: “is a finite linear combination of Heaviside step functions located at the discontinuity points.”

**Sources:**

- [Maria Capcelea, Titu Capcelea, A B-spline-Heaviside collocation method for solving Fredholm integral equations with piecewise Holder-continuous right-hand sides (2025)](https://arxiv.org/abs/2511.06590v1)

### Padé degree bounds force uniqueness

**Remember:** The required zero is one order beyond the available degree.

*True by definition.* MSC 41A21 (Padé approximation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** A Padé approximant of type (m, n) is a ratio p/q with deg p ≤ m, deg q ≤ n and q nonzero at the expansion point. Its Taylor expansion matches the target's first m + n + 1 coefficients.

**Problem.** If a Padé approximant exists with these degree bounds and matching conditions, it is unique as a rational function.

**How the definition helps.** Two such approximants p/q and p′/q′ differ by (pq′ − p′q)/(qq′), whose numerator has degree at most m + n (our own). That numerator vanishes to order m + n + 1 at the expansion point, because both fractions match the same coefficients. Only the zero polynomial does both, so the fractions agree.

**Wikipedia:** [Padé approximant](https://en.wikipedia.org/wiki/Pad%C3%A9_approximant). It says: “When it exists, the Padé approximant is unique as a formal power series for the given m and n.”

**Sources:** none listed. No primary source with a working link was found.

### Concave moduli bound Bernstein error

**Remember:** Use a concave modulus to replace many sample distances by one.

*True by definition. Confidence: medium.* MSC 41A25 (Rate of convergence, degree of approximation), 41A36. arXiv math.NA. Level 2: later undergraduate.

**Definition.** A concave modulus for f on \[0, 1\] is a concave bound on how much f can change over a distance. It is a nondecreasing concave function ω on \[0, 1\] with ω(0) = 0 and ω(δ) → 0 as δ ↓ 0. It must satisfy \|f(s) − f(t)\| ≤ ω(\|s − t\|) for all s, t in \[0, 1\].

**Problem.** At x in \[0, 1\], the degree n Bernstein polynomial averages f(K/n), where K counts successes in n independent trials with success probability x. For n ≥ 1, the absolute error is at most ω(√(x(1 − x)/n)).

**How the definition helps.** The error is at most the mean of ω(\|K/n − x\|), and concavity bounds this by ω of the mean distance, by Jensen's inequality (our own). Cauchy–Schwarz bounds the mean distance by the standard deviation √(x(1 − x)/n), and ω is nondecreasing (our own).

**Wikipedia:** [Modulus of continuity](https://en.wikipedia.org/wiki/Modulus_of_continuity). It says: “A special role is played by concave moduli of continuity, especially in connection with extension properties, and with approximation of uniformly continuous functions.”

**Sources:** none listed. No primary source with a working link was found.

### Common trials preserve Bernstein monotonicity

**Remember:** Use the same draws so a higher input can only add successes.

*True by definition.* MSC 41A36 (Approximation by positive operators). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Draw n independent uniform numbers on \[0, 1\] once, and for each x let K(x) count those at most x. The nth Bernstein approximation at x is the expected value of f(K(x)/n). With the same draws for every x, K(x) can only grow as x grows (our own).

**Problem.** The Bernstein approximation of any nondecreasing function on \[0,1\] is nondecreasing.

**How the definition helps.** For nondecreasing f and each fixed draw, f(K(x)/n) never falls as x increases, so its expectation never falls (our own). K(x) has the binomial distribution with n trials and success probability x, so this expectation is the usual Bernstein polynomial.

**Wikipedia:** [Bernstein polynomial](https://en.wikipedia.org/wiki/Bernstein_polynomial). It says: “Suppose K is a random variable distributed as the number of successes in n independent Bernoulli trials with probability x of success on each trial”

**Sources:** none listed. No primary source with a working link was found.

### Defining Bernstein polynomials as binomial expectations makes them fix affine functions

**Remember:** The expected success fraction is the success probability x.

*True by definition. Confidence: medium.* MSC 41A36 (Approximation by positive operators), 41A10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The nth Bernstein polynomial of f at x is the expected value of f(K/n), where K counts successes in n independent trials with success probability x. Expanding this expectation gives the usual sum of f(k/n)C(n, k)xᵏ(1 − x)ⁿ⁻ᵏ over k from 0 to n.

**Problem.** For n ≥ 1 and all real a and b, the Bernstein polynomial of a + bx is a + bx on \[0, 1\].

**How the definition helps.** Linearity of expectation gives E\[a + bK/n\] = a + bE\[K\]/n (our own). Each trial adds x to E\[K\], so E\[K\] = nx and the result is a + bx.

**Wikipedia:** [Bernstein polynomial](https://en.wikipedia.org/wiki/Bernstein_polynomial). It says: “Here, we take advantage of the fact that Bernstein polynomials look like Binomial expectations.”

**Sources:** none listed. No primary source with a working link was found.

### The cosine definition makes monic Chebyshev polynomials minimize the maximum

**Remember:** Equal alternating peaks stop any monic rival from lowering them all.

*True by definition.* MSC 41A50 (Best approximation, Chebyshev systems), 33C45. arXiv math.CA, math.NA. Level 2: later undergraduate.

**Definition.** The Chebyshev polynomial Tₙ is defined by Tₙ(cos θ) = cos(nθ). So on \[−1, 1\] it stays between −1 and 1 and takes the values ±1 alternately at the n + 1 points cos(kπ/n) (our own). For n ≥ 1 its leading coefficient is 2ⁿ⁻¹, so 2¹⁻ⁿTₙ is monic.

**Problem.** For n ≥ 1, among monic polynomials of degree n, 2¹⁻ⁿTₙ has the smallest maximum absolute value on \[−1, 1\]. That maximum is 2¹⁻ⁿ.

**How the definition helps.** If a monic rival p had maximum below 2¹⁻ⁿ, then 2¹⁻ⁿTₙ − p would alternate in sign at the n + 1 points cos(kπ/n) (our own). It would then have n zeros, but its leading terms cancel, so its degree is below n. Hence it would be zero, which contradicts its nonzero values at those points.

**Wikipedia:** [Chebyshev polynomials](https://en.wikipedia.org/wiki/Chebyshev_polynomials). It says: “is the one of which the maximal absolute value on the interval \[−1, 1\] is minimal.”

**Sources:** none listed. No primary source with a working link was found.

### Taylor polynomials as best local approximations compose by substitution and truncation

**Remember:** Substitute the inner polynomial into the outer one, then drop high powers.

*True by definition. Confidence: medium.* MSC 41A58 (Series expansions (e.g., Taylor, Lidstone series, but not Fourier series)), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** An order n approximation to f at c is a polynomial P of degree at most n with f(x) − P(x) = o(\|x − c\|ⁿ) as x → c. By Taylor's theorem with Peano remainder, the order n Taylor polynomial is the only such polynomial.

**Problem.** Let g be smooth near c and f smooth near g(c), with order n Taylor polynomials Q at c and P at g(c). Then the order n Taylor polynomial of f ∘ g at c is P(Q(x)) with powers of (x − c) above n dropped.

**How the definition helps.** So it suffices to show that the truncated P(Q(x)) approximates f(g(x)) to order n (our own). Since g is locally Lipschitz, f(g(x)) − P(g(x)) is o(\|x − c\|ⁿ), and P has bounded slope near g(c), so P(g(x)) − P(Q(x)) is too. Truncation adds only O(\|x − c\|ⁿ⁺¹).

**nLab:** [Taylor's theorem](https://ncatlab.org/nlab/show/Taylor%27s+theorem). It says: “whose derivatives at c match those of f up to order k.”

**Wikipedia:** [Taylor's theorem](https://en.wikipedia.org/wiki/Taylor%27s_theorem). It says: “The Taylor polynomial is the unique "asymptotic best fit" polynomial”

**Sources:** none listed. No primary source with a working link was found.

### Treating Taylor polynomials as classes modulo (x − c)ⁿ⁺¹ makes products truncate

**Remember:** Work modulo (x − c)ⁿ⁺¹, where products truncate cleanly.

*True by definition. Confidence: medium.* MSC 41A58 (Series expansions (e.g., Taylor, Lidstone series, but not Fourier series)), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Two smooth functions agree to order n at c if their difference is (x − c)ⁿ⁺¹ times a smooth function near c. This agreement is preserved by sums and products, and the order n Taylor polynomial is the unique polynomial of degree at most n agreeing with the function.

**Problem.** For smooth f and g near c, the order n Taylor polynomial of fg is the truncated product of their order n Taylor polynomials. Truncation discards all powers of (x−c) above n.

**How the definition helps.** The identity fg − PQ = f(g − Q) + Q(f − P) shows that fg agrees with PQ to order n (our own). Dropping powers of (x − c) above n changes PQ by a multiple of (x − c)ⁿ⁺¹, so the truncated product is the Taylor polynomial of fg. Iterating Hadamard's lemma matches this notion with the usual Taylor polynomial.

**nLab:** [Hadamard lemma](https://ncatlab.org/nlab/show/Hadamard+lemma). It says: “the Taylor series of a smooth function on the real line around the origin has a remainder at order n”

**Sources:** none listed. No primary source with a working link was found.

### A Laplace kernel gives Stirling’s first correction

**Remember:** Large n sees only the kernel's value at zero, one twelfth.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)), 33B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For n ≥ 1, Stirling's logarithmic remainder is log(n!/Aₙ), with Aₙ = √(2πn)(n/e)ⁿ. Binet's formula writes it as ∫₀∞ exp(−nt)K(t) dt with K(t) = (½ − 1/t + 1/(exp(t) − 1))/t, so for large n only K near t = 0 matters.

**Problem.** The logarithmic remainder is 1/(12n)+O(1/n³). The ratio of the factorial to its leading Stirling approximation is 1+1/(12n)+O(1/n²).

**How the definition helps.** Expanding exp(t) gives K(t) = 1/12 + O(t²) near zero (our own). Integrating against exp(−nt) gives 1/(12n) + O(1/n³), since K is bounded and the part away from zero decays exponentially. Exponentiating gives the factorial ratio.

**Paper or page:** [Binet's Formula for Logarithm of Gamma Function/Formulation 1](https://proofwiki.org/wiki/Binet's_Formula_for_Logarithm_of_Gamma_Function/Formulation_1), [Stirling's Formula/Refinement](https://proofwiki.org/wiki/Stirling's_Formula/Refinement). It says: “A refinement of Stirling's Formula is:”

**Sources:** none listed. No primary source with a working link was found.

### A phase-gap coordinate gives Laplace’s endpoint term

**Remember:** Use the increase in the exponent as the distance from the endpoint.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** When h has a continuous derivative near the left endpoint a with h′(a) &gt; 0, measure distance from a by the exponent gap s = h(x) − h(a). In this coordinate exp(−λh(x)) is exactly exp(−λh(a))exp(−λs), and dx = ds/h′(x).

**Problem.** Let h be continuously differentiable on \[a,b\], with its unique minimum at a and h′(a)&gt;0. For continuous g with g(a)≠0, ∫ₐᵇ exp(−λh(x))g(x) dx is asymptotic to exp(−λh(a))g(a)/(λh′(a)) as λ→∞.

**How the definition helps.** Near a the integral becomes exp(−λh(a)) times an integral of exp(−λs) against a weight that tends to g(a)/h′(a) at s = 0 (our own). Substituting u = λs and applying dominated convergence gives the factor 1/λ. Away from a, h stays a fixed amount above h(a), so that part is exponentially smaller.

**Wikipedia:** [Watson's lemma](https://en.wikipedia.org/wiki/Watson%27s_lemma). It says: “Γ(a+1)/xᵃ⁺¹”

**Sources:** none listed. No primary source with a working link was found.

### A square-root coordinate gives the Gaussian factor in Laplace’s method

**Remember:** Measure the height above the minimum in square roots.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Near a strict minimum x₀ of h with h″(x₀) &gt; 0, use the coordinate u = ±√(2(h(x) − h(x₀))), negative left of x₀ and positive right of it. Then h(x) = h(x₀) + u²/2 exactly, so the exponential in the integrand is a Gaussian in u.

**Problem.** Suppose h has two continuous derivatives on \[a,b\] and its unique minimum is at x₀ inside this interval, with h″(x₀)&gt;0. For continuous g with g(x₀)≠0, ∫ₐᵇ exp(−λh(x))g(x) dx is asymptotic to exp(−λh(x₀))g(x₀)√(2π/(λh″(x₀))) as λ→∞.

**How the definition helps.** Taylor's theorem gives dx/du = 1/√h″(x₀) at u = 0 (our own). Rescaling u by √λ and integrating the Gaussian gives √(2π/λ) times g(x₀)/√h″(x₀). Outside a neighborhood of x₀, h exceeds its minimum by a fixed amount, so that part is exponentially smaller.

**Paper or page:** [Cyclicity in Poletsky-Stessin Weighted Bergman Spaces](https://arxiv.org/abs/2507.03767v1). It says: “Assume that h ∈ C²\[a,b\] and h ≥ 0 has a unique global minimum at x₀ ∈ (a,b)”

**Sources:** none listed. No primary source with a working link was found.

### Ordered scales make asymptotic coefficients unique

**Remember:** Each scale function dwarfs the next, and each remainder is negligible.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** An asymptotic scale is a list of eventually nonzero functions φ₀, φ₁, …, each negligible against the one before: φₖ₊₁/φₖ → 0 along the given limit. Coefficients aₖ give an expansion of f if, for every N ≥ 0, the remainder f − ∑ₖ₌₀ᴺ aₖφₖ is negligible against φ<sub>N</sub>.

**Problem.** For a fixed scale, limit point and region, a function has at most one list of asymptotic coefficients.

**How the definition helps.** Take two expansions that first differ at index N, and subtract their truncations at N (our own). The difference (a<sub>N</sub> − b<sub>N</sub>)φ<sub>N</sub> must be negligible against φ<sub>N</sub>, so a<sub>N</sub> = b<sub>N</sub>, a contradiction.

**nLab:** [asymptotic expansion](https://ncatlab.org/nlab/show/asymptotic+expansion). It says: “This definition makes no statement about the behaviour as n → ∞.”

**Wikipedia:** [Asymptotic expansion](https://en.wikipedia.org/wiki/Asymptotic_expansion). It says: “The asymptotic expansion of a function f(x) is unique for a specific region, scale and limit.”

**Sources:** none listed. No primary source with a working link was found.

### Shifting the exponential integral gives factorial terms and a remainder bound

**Remember:** Move the endpoint to zero and expand the reciprocal.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)), 33B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x &gt; 0, the normalized exponential integral F(x) = exp(x)E₁(x), with E₁(x) = ∫ₓ∞ exp(−t)/t dt, equals ∫₀∞ exp(−u)/(x + u) du after u = t − x. Now x appears only in the factor 1/(x + u), which has an exact finite geometric expansion in u/x.

**Problem.** As x→∞, the normalized integral has asymptotic terms (−1)ᵏk!/xᵏ⁺¹ for every integer k≥0. Each truncation error has the first omitted term’s sign and smaller absolute value.

**How the definition helps.** Expanding 1/(x + u) to k terms and integrating uᵏexp(−u) gives the terms (−1)ᵏk!/xᵏ⁺¹ (our own). The exact remainder is the first omitted term's integral with an extra factor 1/(1 + u/x), which lies strictly between 0 and 1 for u &gt; 0. So each error has the sign of the first omitted term and a smaller size.

**Paper or page:** [Asymptotic Expansion for Exponential Integral Function/Formulation 1](https://proofwiki.org/wiki/Asymptotic_Expansion_for_Exponential_Integral_Function/Formulation_1). It says: “1 − 1!/x + 2!/x² − 3!/x³ + ⋯”

**Sources:** none listed. No primary source with a working link was found.

### The gamma integral turns Stirling’s formula into Laplace’s method

**Remember:** Write the factorial as an integral and find its peak.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)), 33B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Write the factorial as the gamma integral n! = Γ(n + 1) = ∫₀∞ tⁿexp(−t) dt. The substitution t = nx turns it into nⁿ⁺¹ times ∫₀∞ exp(−n(x − log x)) dx, a Laplace integral whose exponent has a single peak at x = 1.

**Problem.** As n tends to infinity, n! is asymptotic to √(2πn) times (n/e) raised to n.

**How the definition helps.** The exponent function x − log x has its unique minimum 1 at x = 1, with second derivative 1, so Laplace's method gives nⁿ⁺¹e⁻ⁿ√(2π/n) = √(2πn)(n/e)ⁿ (our own). Integration by parts gives Γ(n + 1) = n! (our own). Outside a fixed neighborhood of 1, the positive gap above 1 and integrability of x exp(−x) bound the tails.

**nLab:** [Gamma function](https://ncatlab.org/nlab/show/Gamma+function). It says: “Γ(x) = ∫₀∞ tˣ e⁻ᵗ dt/t”

**Paper or page:** [Stirling's Formula](https://proofwiki.org/wiki/Stirling's_Formula). It says: “The factorial function can be approximated by the formula:”

**Sources:** none listed. No primary source with a working link was found.

### Truncated asymptotic expansions multiply like formal power series

**Remember:** Truncate, multiply polynomials, and the errors stay below the last power.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A power series ∑aₖxᵏ is an asymptotic expansion of f at zero if, for every N ≥ 0, f minus the truncation at degree N is o(xᴺ) as x → 0. The condition uses only finite truncations, so it needs no convergence.

**Problem.** If f and g have power asymptotic expansions at zero, then fg has the expansion obtained by multiplying their formal series. This holds even if the series do not converge.

**How the definition helps.** Write f = P<sub>N</sub> + o(xᴺ) and g = Q<sub>N</sub> + o(xᴺ), with P<sub>N</sub> and Q<sub>N</sub> the truncations, all bounded near zero (our own). Then fg = P<sub>N</sub> Q<sub>N</sub> + o(xᴺ), and the terms of P<sub>N</sub> Q<sub>N</sub> above degree N are also o(xᴺ). What remains is the degree N truncation of the formal product.

**nLab:** [asymptotic expansion](https://ncatlab.org/nlab/show/asymptotic+expansion). It says: “the truncation of the series at any finite order still provides a controlled approximation”

**Sources:** none listed. No primary source with a working link was found.

### Writing the endpoint weight as a power gives Watson’s expansion

**Remember:** Peel off the endpoint power before expanding the smooth factor.

*Makes the theorem clean to state or prove.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)), 33B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Laplace integral with endpoint power α &gt; −1 is ∫₀ᵀ exp(−xt)tᵅg(t) dt, with g continuous on \[0, T\] and N + 1 times continuously differentiable near t = 0. Each Taylor term cₖtᵏ of g then gives tᵅ⁺ᵏ, whose integral against exp(−xt) over (0, ∞) is Γ(α + k + 1)/xᵅ⁺ᵏ⁺¹.

**Problem.** Fix T &gt; 0 and let g be continuous on \[0,T\], with N+1 continuous derivatives near zero and Taylor coefficients cₖ there. As x→∞, ∫₀ᵀ exp(−xt)tᵅg(t) dt equals ∑ₖ₌₀ᴺ cₖΓ(α+k+1)/xᵅ⁺ᵏ⁺¹ plus O(x⁻ᵅ⁻ᴺ⁻²).

**How the definition helps.** Separating the power tᵅ leaves the factor g, whose Taylor terms each give one gamma integral (our own). The Taylor error times tᵅ is at most a constant times tᵅ⁺ᴺ⁺¹ near zero, which gives O(x⁻ᵅ⁻ᴺ⁻²). Away from zero, and in the gamma-integral tails beyond T, the exponential makes the contribution exponentially small.

**Wikipedia:** [Watson's lemma](https://en.wikipedia.org/wiki/Watson%27s_lemma). It says: “Γ(a+1)/xᵃ⁺¹”

**Sources:** none listed. No primary source with a working link was found.

### Chebyshev grids prevent Runge divergence

**Remember:** Space the angles evenly, not the points.

*Rules out counterexamples.* MSC 41A05 (Interpolation in approximation theory). arXiv math.NA. Level 3: graduate.

**Definition.** The n + 1 Chebyshev nodes are the cosines of the midpoints of n + 1 equal subintervals of \[0, π\]. Equal angle spacing crowds the nodes near ±1, where equally spaced nodes let interpolation errors grow (our own).

**Problem.** Suppose f extends analytically to a complex neighborhood of \[−1, 1\]. Its degree-n interpolants at Chebyshev nodes converge uniformly with error at most Cρ⁻ⁿ for some C &gt; 0 and ρ &gt; 1.

**How the definition helps.** The node polynomial, the product of x minus each node, equals 2⁻ⁿT<sub>n+1</sub>, so its absolute value is at most 2⁻ⁿ on \[−1, 1\] (our own). The analytic neighborhood contains an ellipse with foci ±1, and the standard Chebyshev estimate on it gives error at most Cρ⁻ⁿ (our own). On equally spaced nodes, Runge's function 1/(1 + 25x²) has divergent interpolants.

**Wikipedia:** [Runge's phenomenon](https://en.wikipedia.org/wiki/Runge%27s_phenomenon). It says: “A standard example of such a set of nodes is Chebyshev nodes, for which the maximum error in approximating the Runge function is guaranteed to diminish with increasing polynomial order.”

**Paper or page:** [On polynomial interpolation in the monomial basis](https://arxiv.org/abs/2212.10519v5). It says: “{\\lVert F-P<sub>N</sub> \\rVert } \_{L<sup>\\infty </sup>(\[a,b\])}\\leq \\frac{4M}{\\rho -1}\\rho <sup>-N</sup>”

**Sources:**

- [On polynomial interpolation in the monomial basis](https://arxiv.org/abs/2212.10519v5)

### Discrete projections match all samples

**Remember:** M orthogonal directions fill M dimensions, so nothing is lost.

*True by definition.* MSC 41A05 (Interpolation in approximation theory), 65D05. arXiv math.NA. Level 3: graduate.

**Definition.** Represent each function by its values at M distinct points, with inner product ⟨u, v⟩ = ∑ⱼwⱼuⱼvⱼ for fixed weights wⱼ &gt; 0. The discrete fit projects the data onto the sample vectors of M basis functions that are nonzero and mutually orthogonal. These vectors span all of the M-dimensional space (our own).

**Problem.** The projection formed from the M discrete inner products matches the data at all M sample points.

**How the definition helps.** Projecting onto the whole space leaves the data vector unchanged, so the fit matches every sample (our own). The work is finding basis functions orthogonal at the chosen points.

**Paper or page:** [Orthogonal polynomials on planar cubic curves](https://arxiv.org/abs/2011.10884v1). It says: “interpolates f(x,y) at (xⱼ,yⱼ)”

**Sources:**

- [Marco Fasondini, Sheehan Olver, Yuan Xu. Orthogonal polynomials on planar cubic curves (2020).](https://arxiv.org/abs/2011.10884v1)

### Fekete points bound basis polynomials

**Remember:** No single point can move to raise the determinant.

*True by definition.* MSC 41A05 (Interpolation in approximation theory), 65D05. arXiv math.NA. Level 3: graduate.

**Definition.** Fix a basis of the polynomials of degree below r, where r ≥ 1. Fekete points are r points of a compact interval of positive length that maximize \|det A\|, where row i of A lists the basis values at point i. So moving any one point can never raise \|det A\|.

**Problem.** Each Lagrange basis polynomial for Fekete points has maximum absolute value one on the interval.

**How the definition helps.** Moving point i to x and dividing the new determinant by the old one gives the ith Lagrange polynomial, since this ratio has degree below r, equals one at point i and is zero at the other points (our own). Maximality bounds the ratio by one, and it reaches one at point i (our own).

**Paper or page:** [The Fekete problem in segmental polynomial interpolation](https://arxiv.org/abs/2403.09378v1). It says: “Then ‖ℓ\[ξᵢ\]‖ = max (x ∈ I) \|ℓ\[ξᵢ\](x)\| = 1 for each i ∈ {1, …, r}.”

**Sources:**

- [Ludovico Bruni Bruno and Wolfgang Erb. The Fekete problem in segmental polynomial interpolation (2024).](https://doi.org/10.1007/s10543-024-01047-4)

### Sample signs attain interpolation norms

**Remember:** The worst input takes each sample with its basis polynomial's sign.

*True by definition.* MSC 41A05 (Interpolation in approximation theory). arXiv math.NA. Level 3: graduate.

**Definition.** For distinct nodes in a compact real interval, the Lebesgue constant is the largest value over the interval of the sum of the absolute values of the Lagrange basis polynomials. These are the polynomials of degree below the node count that equal one at one node and zero at the others.

**Problem.** This constant equals the largest possible maximum absolute value of the interpolant when the continuous input function has absolute value at most one.

**How the definition helps.** The interpolant is the sum of the samples times the basis polynomials, so the triangle inequality bounds it by this sum (our own). At a point where the sum is largest, give each sample the sign of its basis polynomial there, join the samples by straight lines, and keep the input constant beyond the outer nodes (our own). This continuous input of maximum one attains the bound (our own).

**Paper or page:** [Order of uniform approximation by polynomial interpolation in the complex plane and beyond](https://arxiv.org/abs/2209.07101v3). It says: “L\_{{\\bf {z}}<sub>n</sub>}= \\max <sub>z\\in X</sub> \\, \\sum <sup>n</sup><sub>j=0</sub> \|\\ell \_ {n,j}(z)\|”

**Sources:**

- [Order of uniform approximation by polynomial interpolation in the complex plane and beyond](https://arxiv.org/abs/2209.07101v3)

### Polynomial kernels give polynomial averages

**Remember:** A polynomial bump that narrows gives averages that are polynomials.

*True by definition. Confidence: medium.* MSC 41A10 (Approximation by polynomials). arXiv math.NA. Level 3: graduate.

**Definition.** The Landau kernels are the polynomials (1 − t²)ⁿ on \[−1, 1\], scaled to integral 1 and set to zero outside; they concentrate at 0 as n grows. Approximate a function on \[0, 1\] by convolving its zero extension with these kernels.

**Problem.** For 1 ≤ p &lt; ∞, every function in Lᵖ(\[0, 1\]) has polynomial averages that converge to it in the Lᵖ norm.

**How the definition helps.** The averages are polynomials because, for x and y in \[0, 1\], the kernel at x − y is a polynomial in x (our own). They converge because the unit-mass kernels concentrate at zero and translation is continuous in Lᵖ (our own).

**nLab:** [approximation of the identity](https://ncatlab.org/nlab/show/approximation+of+the+identity). It says: “Hence f ∗ pₙ is polynomial.”

**Sources:** none listed. No primary source with a working link was found.

### Box averages preserve spline unity

**Remember:** Average the unit box once per degree; averages keep the sum one.

*True by definition.* MSC 41A15 (Spline approximation). arXiv math.NA. Level 3: graduate.

**Definition.** The cardinal B-spline of degree p, for an integer p ≥ 0, is the convolution of p + 1 copies of the indicator of \[0, 1). Each new convolution averages the previous function over a unit interval (our own).

**Problem.** For each degree, all the integer translates of the cardinal B-spline sum to 1 at every real x.

**How the definition helps.** Averaging the constant function 1 gives 1, and convolution with the box commutes with summing integer translates (our own). The translates of \[0, 1) tile the line, so the sum is 1 at degree zero (our own). Compact support leaves finitely many terms on each bounded interval, which justifies the exchange (our own).

**Wikipedia:** [B-spline](https://en.wikipedia.org/wiki/B-spline). It says: “by iterative filtering with a rectangle function, higher-order interpolation is obtained.”

**Sources:** none listed. No primary source with a working link was found.

### Box convolutions simplify spline derivatives

**Remember:** A moving unit-window average differentiates to front value minus back value.

*True by definition.* MSC 41A15 (Spline approximation), 65D07. arXiv math.NA. Level 3: graduate.

**Definition.** The cardinal B-spline of degree p is the convolution of p + 1 copies of the box that equals one on \[0, 1\] and zero elsewhere. So it is the spline of degree p − 1 averaged over the window \[x − 1, x\].

**Problem.** For p ≥ 1, the derivative at x equals the lower-degree spline at x minus its value at x − 1. This holds away from knots and under integration against smooth test functions across knots.

**How the definition helps.** The fundamental theorem of calculus differentiates this window average: the derivative is the value at the front end x minus the value at the back end x − 1 (our own). This holds wherever the lower-degree spline is continuous at x and x − 1 (our own). Across knots, the derivative of the box is a point mass at 0 minus one at 1, which gives the same rule against test functions (our own).

**Paper or page:** [Energy minimisation using overlapping tensor-product free-knot B-splines](https://arxiv.org/abs/2508.17705v2). It says: “∂ₓ B₀(τ) = δ₍τ₁₎ − δ₍τ₂₎,”

**Sources:**

- [Alexandre Magueresse, Santiago Badia, Energy minimisation using overlapping tensor-product free-knot B-splines](https://arxiv.org/abs/2508.17705v2)

### Defining cardinal B-splines by convolution makes their two-scale relation binomial

**Remember:** Split one box into two half boxes, then expand the convolution power.

*True by definition. Confidence: medium.* MSC 41A15 (Spline approximation). arXiv math.CA. Level 3: graduate.

**Definition.** Let χ be the indicator of \[0, 1). The cardinal B-spline B of degree p is the convolution of p + 1 copies of χ, and χ splits into two half boxes, χ(x) = χ(2x) + χ(2x − 1).

**Problem.** For every real x, B(x)=2⁻ᵖ∑ⱼ₌₀ᵖ⁺¹ C(p+1,j)B(2x−j), where C(p+1,j) is a binomial coefficient.

**How the definition helps.** Substitute the split into each factor and expand the (p + 1)-fold convolution by the binomial theorem (our own). The term with j shifted half boxes is a convolution of p + 1 half boxes shifted by j/2, which equals 2⁻ᵖB(2x − j) (our own).

**Wikipedia:** [B-spline](https://en.wikipedia.org/wiki/B-spline). It says: “A cardinal B-spline has uniformly spaced knots, therefore interpolation between the knots equals convolution with a smoothing kernel.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the spline by least bending gives zero end curvature for free

**Remember:** Free end slopes force zero end curvature at a minimizer.

*True by definition. Confidence: medium.* MSC 41A15 (Spline approximation), 49K05. arXiv math.NA. Level 3: graduate.

**Definition.** Fix real data at nodes x₀ &lt; ⋯ &lt; xₙ with n ≥ 1. The least-bending interpolant minimizes the integral of \|s″\|² over \[x₀, xₙ\] among functions through the data with absolutely continuous first derivative and square-integrable second derivative. The slopes at the two ends are left free.

**Problem.** The minimizer s has zero second derivative at x₀ and at xₙ.

**How the definition helps.** Because the end slopes are free, a change of slope at an end must give no first-order gain, and that gain is s″ at the end (our own). In detail, ∫s″h″ = 0 for every h vanishing at the nodes; this makes each piece cubic, and integration by parts leaves only the end terms ±s″h′ (our own). A variation with nonzero slope at one end then forces s″ = 0 there (our own).

**Wikipedia:** [Spline (mathematics)](https://en.wikipedia.org/wiki/Spline_%28mathematics%29). It says: “Spline functions for interpolation are normally determined as the minimizers of suitable measures of roughness (for example integral squared curvature) subject to the interpolation constraints.”

**Sources:**

- [John C. Holladay, A smoothest curve approximation (1957)](https://doi.org/10.1090/S0025-5718-1957-0093894-6)

### Natural splines solve smoothing

**Remember:** Fix the fitted values; only the bending is left.

*True by definition.* MSC 41A15 (Spline approximation). arXiv math.NA. Level 3: graduate.

**Definition.** The smoothing spline minimizes the sum of squared data errors plus a positive multiple of ∫(f″)², over functions on the interval between the outer data sites with absolutely continuous f′ and square-integrable f″. Once the fitted values at the sites are fixed, only the bending term ∫(f″)² is left to minimize.

**Problem.** With at least two distinct sites, the unique minimizer is a natural cubic spline. Its cubic pieces join with two continuous derivatives at data sites, and its second derivative vanishes at both ends.

**How the definition helps.** For fixed fitted values, the natural cubic interpolant of those values uniquely minimizes the bending term, so any minimizer is a natural cubic spline. The remaining problem in the finitely many fitted values is strictly convex and grows without bound, so it has exactly one minimum (our own).

**Wikipedia:** [Smoothing spline](https://en.wikipedia.org/wiki/Smoothing_spline). It says: “It remains only to minimize ∫ f̂″(x)² dx, and the minimizer is a natural cubic spline”

**Sources:** none listed. No primary source with a working link was found.

### Imaginary-axis interpolation forces unit modulus

**Remember:** Modulus one at 2n+1 imaginary points spreads along the whole axis.

*True by definition.* MSC 41A20 (Approximation by rational functions), 41A05. arXiv math.NA. Level 3: graduate.

**Definition.** Take a rational function with numerator and denominator degrees at most n that equals the exponential at 2n + 1 distinct points of the imaginary axis where it has no pole. At those points it has modulus one, as the exponential does there.

**Problem.** Any such rational function has absolute value one on the imaginary axis wherever it is defined.

**How the definition helps.** Write the function in lowest terms as P/Q and set D(t) = \|P(it)\|² − \|Q(it)\|² for real t, a polynomial of degree at most 2n (our own). Each match gives D = 0 because \|exp(it)\| = 1 (our own). So D has 2n + 1 zeros and vanishes identically, which gives \|P/Q\| = 1 wherever Q(it) ≠ 0 (our own).

**Paper or page:** [The error of Chebyshev approximations on shrinking domains](https://arxiv.org/abs/2410.04885v1). It says: “An (n,n)-rational function is unitary if and only if it interpolates the exponential function at ≥ 2n+1 nodes on the imaginary axis, counting multiplicity.”

**Sources:** none listed. No primary source with a working link was found.

### Alternating extremes certify optimality

**Remember:** Errors peaking n+2 times with alternating signs cannot be beaten.

*True by definition.* MSC 41A50 (Best approximation, Chebyshev systems). arXiv math.NA. Level 3: graduate.

**Definition.** A polynomial p of degree at most n has alternating extremes for a continuous real function f on a compact interval if the error f − p reaches its largest absolute value at n + 2 increasing points, with alternating signs.

**Problem.** A candidate with alternating extremes minimizes the maximum absolute error among all real polynomials of degree at most n.

**How the definition helps.** If some q of degree at most n had smaller maximum error, then q − p = (f − p) − (f − q) would have the sign of f − p at each of the n + 2 points (our own). So q − p would change sign n + 1 times and have n + 1 zeros, which no nonzero polynomial of degree at most n has (our own).

**Wikipedia:** [Equioscillation theorem](https://en.wikipedia.org/wiki/Equioscillation_theorem). It says: “Define an alternating set (given polynomial g and function f) to be a set of ordered points x₀, …, xₙ in \[a,b\]”

**Sources:** none listed. No primary source with a working link was found.

### Normalized kernels minimize squared norm

**Remember:** The shortest polynomial with value one points along its kernel.

*True by definition. Confidence: medium.* MSC 41A50 (Best approximation, Chebyshev systems). arXiv math.NA. Level 3: graduate.

**Definition.** Let p₀, …, pₙ be the orthonormal polynomials of a finite positive measure μ with infinite support on a compact real interval. The kernel K(a, x) = p₀(a)p₀(x) + ⋯ + pₙ(a)pₙ(x) reproduces evaluation at a: every polynomial q of degree at most n has q(a) = ∫q(x)K(a, x) dμ(x). At a real point a, the normalized kernel is K(a, x)/K(a, a), where K(a, a) &gt; 0.

**Problem.** Among polynomials of degree at most n that have value 1 at a, the normalized kernel uniquely minimizes the integral of the squared polynomial.

**How the definition helps.** If q has value 1 at a, reproduction shows that q minus the normalized kernel is orthogonal to the normalized kernel (our own). Pythagoras then shows that the normalized kernel has the least squared integral, with equality only when q equals it (our own).

**Wikipedia:** [Christoffel–Darboux formula](https://en.wikipedia.org/wiki/Christoffel%E2%80%93Darboux_formula). It says: “In other words, the kernel is an integral operator that orthogonally projects each polynomial to the space of polynomials of degree up to n.”

**Sources:** none listed. No primary source with a working link was found.

### Flat norm faces permit ties

**Remember:** Two tied closest points would have a strictly closer midpoint.

*Rules out counterexamples. Confidence: medium.* MSC 41A52 (Uniqueness of best approximation). arXiv math.NA. Level 3: graduate.

**Definition.** A norm is strictly convex if the midpoint of two distinct unit vectors has norm less than one, so the unit sphere has no flat piece. The permitted approximants form a convex set, so the midpoint of two approximants is again an approximant.

**Problem.** A point has at most one closest point in a convex set under a strictly convex norm.

**How the definition helps.** If two different approximants were both closest, at distance d &gt; 0, their midpoint would be strictly closer, by strict convexity applied to the two error vectors divided by d (our own). Convexity makes this midpoint an approximant, which is a contradiction (our own). Under the maximum norm in the plane, every point of \[−1, 1\] × {0} is closest to (0, 1) (our own).

**Wikipedia:** [Strictly convex space](https://en.wikipedia.org/wiki/Strictly_convex_space). It says: “the segment joining x and y meets ∂B only at x and y.”

**Sources:** none listed. No primary source with a working link was found.

### Haar systems give unique fits

**Remember:** Every set of r rows determines the coefficients.

*Rules out counterexamples.* MSC 41A52 (Uniqueness of best approximation), 41A50. arXiv math.NA. Level 3: graduate.

**Definition.** The columns of a real matrix with n rows and r columns, where n &gt; r ≥ 1, form a Haar system if every choice of r rows gives an invertible matrix. So any r rows on which two fits agree force equal coefficients.

**Problem.** For a real Haar matrix, every data vector has a unique fit that minimizes the largest absolute residual.

**How the definition helps.** A best fit exists because full column rank makes the largest residual grow without bound (our own). The midpoint of two best fits is also best, and its largest residual is attained on at least r rows, since otherwise a small correction would reduce it; both fits agree on those rows, so the Haar condition makes them equal (our own). The column (1, 0) fails the condition and gives tied fits to the data (0, 1) (our own).

**Paper or page:** [On the algorithm of best approximation by low rank matrices in the Chebyshev norm](https://arxiv.org/abs/2201.12301v1). It says: “Then, for any vector a ∈ ℂⁿ the solution is unique if and only if the columns of the matrix V form a Chebyshev system.”

**Sources:**

- [Stanislav Morozov, Nikolai Zamarashkin, Eugene Tyrtyshnikov, On the algorithm of best approximation by low rank matrices in the Chebyshev norm (2022)](https://arxiv.org/abs/2201.12301v1)

### Peano kernels isolate quadrature error

**Remember:** Apply the error to truncated powers once, then reuse the kernel.

*Makes the theorem clean to state or prove.* MSC 41A80 (Remainders in approximation formulas), 65D32. arXiv math.NA. Level 3: graduate.

**Definition.** Let L be the error of a quadrature rule, the integral minus the weighted sum, and suppose L vanishes on all polynomials of degree at most ν, where ν ≥ 1. Its Peano kernel K(θ) is L applied to the truncated power x ↦ max(x − θ, 0) to the power ν, the building block of the Taylor remainder.

**Problem.** Suppose the function has ν + 1 continuous derivatives on the interval. The error is the integral of its last derivative times the Peano kernel, divided by ν factorial.

**How the definition helps.** Taylor’s formula writes f as a polynomial of degree ν plus the integral of the derivative of order ν + 1 at θ times the truncated power, divided by ν factorial (our own). L kills the polynomial, and applying L inside the integral turns each truncated power into K(θ) (our own). The exchange is valid because L is an integral minus a finite sum and the derivative is continuous (our own).

**Wikipedia:** [Peano kernel theorem](https://en.wikipedia.org/wiki/Peano_kernel_theorem). It says: “to annihilate all but the final term on the right-hand side”

**Sources:** none listed. No primary source with a working link was found.

### Disjoint triangles give a sharp interpolation bound

**Remember:** Disjoint triangles let each average choose its own sign.

*Rules out counterexamples.* MSC 41A05 (Interpolation in approximation theory), 41A63, 65D05. arXiv math.NA. Level 4: research.

**Definition.** Take triangles of positive area with disjoint interiors in a compact polygon, and a polynomial space in which every list of triangle averages comes from exactly one polynomial. The ith basis polynomial has average one on triangle i and zero on the others. Disjoint interiors let a continuous input choose each triangle average almost independently.

**Problem.** Among continuous inputs of maximum absolute value at most one, take the supremum of the maximum absolute fitted value. It equals the largest pointwise sum of absolute basis values.

**How the definition helps.** The fitted polynomial is the sum of the input averages times the basis polynomials, so the triangle inequality gives the upper bound (our own). At a point where the basis sum is largest, let the input equal the sign of each basis value inside its triangle and taper to zero near the edges; its averages approach those signs (our own). For line fits on the overlapping intervals \[0, 2\] and \[1, 3\], shared samples keep the factor at two, although an endpoint basis sum is three (our own).

**Paper or page:** [Bivariate polynomial histopolation techniques on Padua, Fekete and Leja triangles](https://arxiv.org/abs/2506.03025v1). It says: “Then, the operator norm of the respective histopolation operator Πₘ satisfies ‖Πₘ‖ₒₚ = ℒₘ(𝒯ₘ).”

**Sources:**

- [Ludovico Bruni Bruno, Francesco Dell'Accio, Wolfgang Erb, Federico Nudo. Bivariate polynomial histopolation techniques on Padua, Fekete and Leja triangles (2025).](https://arxiv.org/abs/2506.03025v1)

### Parity preserves disk coordinates

**Remember:** Both flips preserve the even part and negate the odd part.

*True by definition.* MSC 41A05 (Interpolation in approximation theory). arXiv math.NA. Level 4: research.

**Definition.** Signed polar coordinates allow −1 ≤ r ≤ 1 with angles modulo 2π, so (r, θ) and (−r, θ + π) name the same point. Write the interpolant as E + O, where E is unchanged and O changes sign under each of the moves r ↦ −r and θ ↦ θ + π.

**Problem.** The interpolant E + O takes the same value at (r, θ) and (−r, θ + π). At the center it has a single value if E is independent of θ at r = 0.

**How the definition helps.** The double move changes the sign of O twice and leaves E fixed, so both names of a point give one value (our own). At r = 0 the move r ↦ −r changes nothing, so O = −O = 0 there, and only E remains (our own).

**Paper or page:** [Barycentric interpolation formulas for the sphere and the disk](https://arxiv.org/abs/2410.05439v1). It says: “If f⁺ is furthermore constant for all φ when ρ = 0, then f̃ is a BMC-II function.”

**Sources:**

- [Barycentric interpolation formulas for the sphere and the disk](https://arxiv.org/abs/2410.05439v1)

### Reflected poles bound modulus

**Remember:** Left of the axis, every point is nearer the mirrored zeros.

*True by definition.* MSC 41A20 (Approximation by rational functions). arXiv math.NA. Level 4: research.

**Definition.** A reflected-pole product has the form c∏ⱼ(z + s̄ⱼ)/(z − sⱼ), where \|c\| = 1, each sⱼ lies off the imaginary axis, and the bar denotes complex conjugation. Each zero −s̄ⱼ is the mirror image of its pole sⱼ across the imaginary axis, so each factor has modulus equal to the ratio of the distances from z to these two points (our own).

**Problem.** Take the best uniform approximation to exp(iωx) on \[−1, 1\] by such functions evaluated at ix, with numerator and denominator degrees at most n. For n ≥ 1 and 0 &lt; ω &lt; (n + 1)π, its modulus is below one throughout the open left half-plane.

**How the definition helps.** The paper proves that all n poles of the best approximation lie in the open right half-plane. A point in the open left half-plane is then closer to each mirrored zero than to its pole, so every factor and the product have modulus below one (our own).

**Paper or page:** [Unitary rational best approximations to the exponential function](https://arxiv.org/abs/2312.13809v1). It says: “the poles s₁,…,sₙ of the unitary best approximation r(ix) ≈ exp(iωx), r ∈ 𝒰ₙ, are located in the right complex plane”

**Sources:**

- [Unitary rational best approximations to the exponential function](https://arxiv.org/abs/2312.13809v1)

### Angular differences commute with smoothing

**Remember:** Rotations stay on the cone and commute with its polynomial smoothing.

*True by definition.* MSC 41A25 (Rate of convergence, degree of approximation), 41A63. arXiv math.CA. Level 4: research.

**Definition.** Fix a height parameter 0 &lt; t ≤ 1 and two spatial axes of the cone. Let R be the rotation of the plane of those axes by the angle θ/√t, which maps the cone to itself, acting on functions by composition. For a positive integer r, the angular difference is (I − R)ʳ, with I the identity.

**Problem.** At positive heights up to one, the paper’s polynomial smoothing operator commutes with these angular differences. Its error satisfies the same angular smoothness bound as the input, up to a constant.

**How the definition helps.** R preserves the smoothing kernel and the integration measure, so it commutes with the polynomial smoothing operator L, and so does D = (I − R)ʳ (our own). Then D(f − Lf) = (I − L)Df, which bounds the error by (1 + ‖L‖)‖Df‖ in any rotation-invariant norm where L is uniformly bounded (our own).

**Paper or page:** [Best approximation by polynomials on the conic domains](https://arxiv.org/abs/2506.22916v1). It says: “For 1 ≤ p ≤ ∞, 1 ≤ i ≠ j ≤ d, and t ∈ (0, 1\], Δʳᵢ,ⱼ,θ/√t Lₙᵞ f = Lₙᵞ(Δʳᵢ,ⱼ,θ/√t f).”

**Sources:**

- [Yan Ge, Yuan Xu, Best approximation by polynomials on the conic domains](https://arxiv.org/abs/2506.22916v1)

### Reproduction cancels Taylor terms

**Remember:** Weights reproduce polynomials, so only small Taylor remainders survive.

*True by definition.* MSC 41A25 (Rate of convergence, degree of approximation). arXiv math.NA. Level 4: research.

**Definition.** Let X be a finite sample set in a bounded domain Ω, and let h = supₓ∈Ω minᵧ∈X \|x − y\|, the largest distance from a point to its nearest sample. A weighted sum ∑ᵧwᵧ(x)f(y) reproduces degree m if it returns p(x) for every polynomial p of degree at most m. Its weights must also satisfy ∑ᵧ\|wᵧ(x)\|\|x − y\|ᵐ⁺¹ ≤ Chᵐ⁺¹, with one constant C for all x and all sample sets considered.

**Problem.** Suppose f has bounded continuous derivatives through order m + 1 on a neighborhood of the closed convex hull of the domain and samples. Then the maximum error is at most a constant times hᵐ⁺¹.

**How the definition helps.** Reproduction lets us subtract the Taylor polynomial of f at x, so only Taylor remainders enter the sum, each at most a constant times \|x − y\|ᵐ⁺¹ (our own). The weighted distance bound then gives the estimate (our own).

**Paper or page:** [Fast-Decaying Polynomial Reproduction](https://arxiv.org/abs/2411.14933v1). It says: “\\\| f-z<sub>f,X</sub>\\\| \_{L<sup>\\infty </sup>(\\Omega )} \\leq K h<sub>X,\\Omega </sub><sup>m+1</sup>\\\| f\\\| \_{\\mathcal{C}<sup>m+1</sup>(\\Omega ^\*)}”

**Sources:**

- [Fast-Decaying Polynomial Reproduction](https://arxiv.org/abs/2411.14933v1)

### Degree bounds bracket filter error

**Remember:** Unchanged low terms and absent high terms bound the error.

*True by definition.* MSC 41A81 (Weighted approximation). arXiv math.NA. Level 4: research.

**Definition.** On the positive half-line, use the norm ‖g‖ = supₓ w(x)\|g(x)\| with a fixed positive weight w. For integers 1 ≤ m &lt; n, a Laguerre filter T is a bounded linear operator that leaves every polynomial of degree at most n − m unchanged and whose outputs are polynomials of degree below n + m.

**Problem.** Let Eₖ(f) be the least weighted error of f by polynomials of degree at most k, and let ‖T‖ be the operator norm of T. Then E<sub>n+m−1</sub>(f) ≤ ‖f − Tf‖ ≤ (1 + ‖T‖)E<sub>n−m</sub>(f) for every f in the weighted space.

**How the definition helps.** The output Tf is itself a polynomial of degree at most n + m − 1, which gives the lower bound (our own). For a polynomial q of degree at most n − m, Tq = q gives f − Tf = (f − q) − T(f − q), so the error is at most (1 + ‖T‖)‖f − q‖ (our own).

**Paper or page:** [De la Vallée Poussin filtered polynomial approximation on the half line](https://arxiv.org/abs/2402.08358v1). It says: “E<sub>n+m-1</sub>(f)<sub>u</sub>\\le \\\| \[f-\\mathcal{V}n<sup>m</sup>(w\\alpha ,f)\]u\\\| \\le {\\mathcal{C}}E<sub>n-m</sub>(f)<sub>u</sub>”

**Sources:**

- [De la Vallée Poussin filtered polynomial approximation on the half line](https://arxiv.org/abs/2402.08358v1)
