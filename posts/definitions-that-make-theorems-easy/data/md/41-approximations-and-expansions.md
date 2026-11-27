### Lagrange basis functions separate interpolation data

**Remember:** Each basis polynomial reads one data value and ignores the others.

*True by definition.* MSC 41A05 (Interpolation in approximation theory), 15A03. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For n + 1 distinct nodes, define one basis polynomial for each node. Multiply the factors x minus each of the other nodes, then scale the product to give one at the chosen node. The monomial basis instead uses successive powers of x.

**Problem.** For n + 1 distinct real nodes and arbitrary real values there, exactly one polynomial of degree at most n takes those values.

**How the definition helps.** At any node, only its own basis polynomial contributes, so the weighted sum takes the prescribed value (our own). The work moves to proving that these polynomials form a basis (our own). Evaluating a linear combination at each node proves independence, and the number of polynomials equals the dimension (our own).

**Paper or page:** [Lagrange Interpolation Formula/Formulation 1](https://proofwiki.org/wiki/Lagrange_Interpolation_Formula/Formulation_1). It says: “Then there exists a unique polynomial P ∈ ℝ\[X\] of degree at most n such that: P(xᵢ) = aᵢ for all i ∈ {0, 1, …, n}”

**Sources:** none listed. No primary source with a working link was found.

### Rational polynomials give a countable dense set of approximants

**Remember:** First approximate by a polynomial, then round its finitely many coefficients.

*Makes the theorem clean to state or prove.* MSC 41A10 (Approximation by polynomials), 54C35. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A space is separable if it has a countable dense subset. In the uniform norm, dense means every function can be approximated to any error measured over the whole interval.

**Problem.** The space of continuous real functions on a closed bounded interval is separable in the uniform norm. Polynomials with rational coefficients form a countable dense subset.

**How the definition helps.** Rational coefficients give a countable collection that can approximate every real polynomial on the interval. Each power of x in a fixed polynomial is bounded there, so small coefficient changes give small uniform errors. The Weierstrass approximation theorem supplies the polynomial for each continuous function.

**Wikipedia:** [Stone–Weierstrass theorem](https://en.wikipedia.org/wiki/Stone%E2%80%93Weierstrass_theorem). It says: “each polynomial function can be uniformly approximated by one with rational coefficients”

**Sources:** none listed. No primary source with a working link was found.

### Bernstein averages do not amplify uniform error

**Remember:** A weighted average cannot amplify the largest sample error.

*True by definition.* MSC 41A36 (Approximation by positive operators), 41A10. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For x in \[0, 1\] and a positive integer n, the nth Bernstein polynomial averages the samples f(k/n) for 0 ≤ k ≤ n. Each weight is the probability of exactly k successes in n independent trials with success probability x.

**Problem.** Applying Bernstein approximation of the same degree to two continuous functions on \[0, 1\] cannot increase their uniform distance.

**How the definition helps.** The probability definition expresses the difference of the two polynomials as a weighted average of sample differences, with nonnegative weights totaling one. Its absolute value is at most the largest absolute sample difference. Our own proof uses the binomial theorem to verify that the weights in the usual polynomial formula sum to one.

**Wikipedia:** [Bernstein polynomial](https://en.wikipedia.org/wiki/Bernstein_polynomial). It says: “The Bernstein basis polynomials of degree n form a partition of unity”

**Sources:** none listed. No primary source with a working link was found.

### Relative error lets asymptotic equivalents multiply and divide

**Remember:** Ratios near one are safe to multiply and divide.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)). arXiv math.CA. Level 1: early undergraduate.

**Definition.** Two functions f and g are asymptotically equivalent, written f ∼ g, if g is eventually nonzero and f/g tends to 1. Take all limits at the same point or at infinity.

**Problem.** If f ∼ g and u ∼ v, then fu ∼ gv and f/u ∼ g/v.

**How the definition helps.** The relative definition turns multiplication and division into the familiar limit laws for ratios. In our own calculation, f/g and u/v both approach 1, so their product and quotient do too. Both u and v are eventually nonzero. Measuring absolute differences would identify 2/x with 1/x at infinity, although their ratio stays at 2.

**Wikipedia:** [Asymptotic analysis](https://en.wikipedia.org/wiki/Asymptotic_analysis). It says: “asymptotically equivalent functions to be freely exchanged in many algebraic expressions”

**Sources:** none listed. No primary source with a working link was found.

### Uniform little o lets a growing sum preserve a small error

**Remember:** One bound for a whole row also bounds its average.

*Rules out counterexamples.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)). arXiv math.CA. Level 1: early undergraduate.

**Definition.** In row n of a triangular array, the entries are r(n,k) for k from 1 through n. They are uniformly o(1) if their largest absolute value tends to zero as n grows.

**Problem.** If r(n,k) is uniformly o(1) for 1 ≤ k ≤ n, the row sum divided by n tends to zero.

**How the definition helps.** One bound on the row controls its average because the absolute value of the average cannot exceed the largest absolute entry. In our own example, put 1 wherever k &gt; n/2 and 0 elsewhere. Each fixed column eventually contains only zeros, but the row averages approach ½.

**nLab:** [uniform convergence](https://ncatlab.org/nlab/show/uniform+convergence). It says: “the bound N(ε) is required to work for all x ∈ X”

**Sources:** none listed. No primary source with a working link was found.

### Unit-interval errors give a bound for the harmonic remainder

**Remember:** Subtract one logarithm per term and bound the tail.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)), 40A25. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For each positive integer k, let e(k) equal 1/k minus the integral of 1/x from k to k+1. Define the Euler–Mascheroni constant γ as the sum of all e(k).

**Problem.** For the nth harmonic number Hₙ = 1 + ½ + ⋯ + 1/n, the difference Hₙ−log n−γ lies strictly between 0 and 1/n.

**How the definition helps.** In our own proof, the sum from k = n onward equals γ−Hₙ+log n+1/n. Since 1/x decreases, each e(k) lies strictly between zero and 1/k−1/(k+1). Adding the upper bounds cancels consecutive fractions and gives 1/n. The resulting bound also identifies γ with the usual limit of Hₙ−log n.

**Paper or page:** [Harmonic Number is Greater than Logarithm plus Gamma](https://proofwiki.org/wiki/Harmonic_Number_is_Greater_than_Logarithm_plus_Gamma). It says: “Hₙ &gt; ln n + γ”

**Sources:** none listed. No primary source with a working link was found.

### Chebyshev grids nest under refinement

**Remember:** The old angles become the even indices.

*True by definition.* MSC 41A05 (Interpolation in approximation theory), 65D05. arXiv math.NA. Level 2: later undergraduate.

**Definition.** Define the endpoint-including Chebyshev grid by taking cosines of equally spaced angles from zero to π. Doubling the number of subintervals means halving the angular spacing.

**Problem.** For n ≥ 1, the n + 1 Chebyshev grid points all occur in the refined grid with 2n + 1 points.

**How the definition helps.** The definition places every old angle at an even index of the refined grid, our own. Taking cosines preserves that inclusion, our own. The work is identifying this equally spaced angular grid with the extrema of the degree n Chebyshev polynomial, our own.

**Wikipedia:** [Chebyshev nodes](https://en.wikipedia.org/wiki/Chebyshev_nodes). It says: “xₖ = cos(kπ/n), k = 0, …, n.”

**Sources:** none listed. No primary source with a working link was found.

### The Hermite–Genocchi integral makes divided differences continuous at repeated nodes

**Remember:** When all nodes meet, the integrand is constant and only the volume remains.

*True by definition. Confidence: medium.* MSC 41A05 (Interpolation in approximation theory), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The usual divided difference f\[x₀, …, xₙ\] is a recursion of difference quotients on distinct nodes. Instead, define it as the integral of f⁽ⁿ⁾(t₀x₀ + … + tₙxₙ) over the simplex of weights tᵢ ≥ 0 with sum 1. Measured in the free weights t₁, …, tₙ, this simplex has volume 1/n!. This is the Hermite–Genocchi formula.

**Problem.** Let f have n continuous derivatives on an interval. Then its order n divided difference extends continuously to repeated nodes. When all n + 1 nodes equal x, its value is f⁽ⁿ⁾(x)/n!.

**How the definition helps.** With the integral definition, both claims follow from continuity of the integrand (our own). The integrand depends continuously on the nodes and the simplex is compact, so the integral is continuous in the nodes (our own). When every node is x, the integrand is the constant f⁽ⁿ⁾(x), so the integral is f⁽ⁿ⁾(x)/n! (our own). The work moves into the proof that the integral satisfies the recursion at distinct nodes (our own).

**Wikipedia:** [Divided differences](https://en.wikipedia.org/wiki/Divided_differences). It says: “the divided difference can be expressed as an integral over a n-simplex Δₙ:”

**Sources:** none listed. No primary source with a working link was found.

### Binomial averages give uniform polynomial approximation

**Remember:** Sample near x, then average the function values.

*Makes the theorem clean to state or prove.* MSC 41A10 (Approximation by polynomials), 41A36. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Bernstein polynomial of a function f at x in \[0, 1\] is the expected value of f(K/n). Here K counts successes in n independent trials, each with success probability x. Expanding the average with the binomial probabilities gives a polynomial in x.

**Problem.** The Bernstein polynomials of every continuous real function on \[0, 1\] converge uniformly to that function. By rescaling the interval, this gives the Weierstrass approximation theorem on any closed bounded interval.

**How the definition helps.** The binomial average bounds the total weight of distant sample points by their probability. The variance of K/n is x(1 − x)/n ≤ 1/(4n), so Chebyshev’s inequality makes that probability uniformly small. In our own summary, boundedness controls the error at distant samples and uniform continuity controls it at nearby samples.

**Wikipedia:** [Bernstein polynomial](https://en.wikipedia.org/wiki/Bernstein_polynomial). It says: “Bernstein polynomials look like Binomial expectations.”

**Paper or page:** [Weierstrass Approximation Theorem](https://proofwiki.org/wiki/Weierstrass_Approximation_Theorem). It says: “Then f can be uniformly approximated on 𝕀 by a polynomial function to any given degree of accuracy.”

**Sources:**

- [S. Bernstein, Démonstration du théorème de Weierstrass fondée sur le calcul des probabilités (1912)](https://www.mn.uio.no/math/english/people/aca/michaelf/translations/bernstein_english.pdf)

### Positive Chebyshev tails peak together

**Remember:** Every discarded cosine reaches one at the same endpoint.

*True by definition.* MSC 41A10 (Approximation by polynomials), 41A25. arXiv math.NA. Level 2: later undergraduate.

**Definition.** Expand xⁿ in the Chebyshev polynomials Tⱼ, where Tⱼ(cos θ) = cos(jθ). Truncate this expansion at a chosen degree, in place of truncating in powers of x.

**Problem.** On \[−1, 1\], the maximum absolute error of this truncation of xⁿ equals the sum of the discarded Chebyshev coefficients.

**How the definition helps.** In our own argument, all discarded terms have absolute value at most their coefficients and reach that bound together at x = 1. In our own words, expanding an integer power of cosine as a sum of cosines gives nonnegative coefficients by the binomial theorem. That expansion carries the work.

**Paper or page:** [Approximating monomials using Chebyshev polynomials](https://arxiv.org/abs/2101.06818v1). It says: “The error in the polynomial approximation φₖ(x) satisfies ‖xⁿ − φₖ(x)‖∞ = pₙ,ₖ.”

**Sources:** none listed. No primary source with a working link was found.

### Distinct hinges make distinct corners

**Remember:** One nonzero hinge at each location gives one visible corner.

*Rules out counterexamples.* MSC 41A15 (Spline approximation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** A hinge at b is max(0, x − b). Write a continuous piecewise linear function as a line plus weighted hinges, using distinct locations and nonzero weights.

**Problem.** A line plus n such hinges on the real line has exactly n breakpoints, meaning points where its slope changes.

**How the definition helps.** At a hinge location the slope changes by its weight, and all other summands are linear nearby, our own. The work moves to grouping hinges at the same location when converting from a neural network, our own. Two hinges at zero with weights 1 and −1 would cancel and leave no breakpoint, our own.

**Paper or page:** [Spline Representation and Redundancies of One-Dimensional ReLU Neural Network Models](https://arxiv.org/abs/2207.14609v1). It says: “Moreover, f₂ is a CPL spline with exactly n active breakpoints,”

**Sources:**

- [Gerlind Plonka, Yannick Riebe, Yurii Kolomoitsev, Spline Representation and Redundancies of One-Dimensional ReLU Neural Network Models](https://arxiv.org/abs/2207.14609v1)

### Matching endpoint second derivatives reproduces quadratics

**Remember:** Match endpoint second derivatives to recover the quadratic everywhere.

*True by definition. Confidence: medium.* MSC 41A15 (Spline approximation), 65D07. arXiv math.NA. Level 2: later undergraduate.

**Definition.** A cubic spline is twice continuously differentiable and polynomial of degree at most three between successive knots. A spline interpolant matches the data at the knots. A natural spline has zero second derivative at both ends. Instead, prescribe the data function’s second derivative at each end.

**Problem.** Prescribing the correct endpoint second derivatives makes the cubic spline interpolant reproduce every quadratic exactly. The natural spline fails even for f(x) = x².

**How the definition helps.** The quadratic itself now meets all the interpolation and endpoint conditions, our own. The work moves to the uniqueness theorem for cubic splines with prescribed endpoint second derivatives, our own. A natural spline cannot equal x² because its endpoint second derivatives are zero, our own.

**Paper or page:** [Cubic spline functions revisited](https://arxiv.org/abs/2507.05083v1). It says: “the error of the natural spline s (with s″(x₀) = s″(xₙ) = 0) is of the exact order h² when \|f″(x₀)\| + \|f″(xₙ)\| &gt; 0.”

**Sources:**

- [Florian Jarre, Cubic spline functions revisited](https://arxiv.org/abs/2507.05083v1)

### Step functions preserve jumps

**Remember:** Give each jump to a step and leave the spline continuous.

*Rules out counterexamples.* MSC 41A15 (Spline approximation), 65D07. arXiv math.NA. Level 2: later undergraduate.

**Definition.** Take a function on an interval with finitely many interior jumps, continuous elsewhere and continuous from the left at each jump. At each jump b, add a step equal to zero for x ≤ b and one for x &gt; b. Weight it by the right limit minus the left limit. Approximate the remainder by continuous piecewise polynomials joined at selected points, called splines.

**Problem.** The resulting approximant has exactly the same jumps as the input. On an interval, no sequence of continuous splines alone can approximate a unit step uniformly.

**How the definition helps.** Only its own step contributes to each jump, so subtraction leaves a continuous remainder, our own. The work moves to approximating that remainder by continuous splines, our own. At a unit jump, a continuous spline must miss at least one one-sided limit by at least ½, our own.

**Paper or page:** [A B-spline-Heaviside collocation method for solving Fredholm integral equations with piecewise Holder-continuous right-hand sides](https://arxiv.org/abs/2511.06590v1). It says: “is a finite linear combination of Heaviside step functions located at the discontinuity points.”

**Sources:**

- [Maria Capcelea, Titu Capcelea, A B-spline-Heaviside collocation method for solving Fredholm integral equations with piecewise Holder-continuous right-hand sides (2025)](https://arxiv.org/abs/2511.06590v1)

### Padé degree bounds force uniqueness

**Remember:** The required zero is one order beyond the available degree.

*Rules out counterexamples.* MSC 41A21 (Padé approximation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Choose a ratio of polynomials with numerator degree at most m and denominator degree at most n. Require the denominator to be nonzero at the expansion point. A Padé approximant matches the first m + n + 1 Taylor coefficients of the target there.

**Problem.** If a Padé approximant exists with these degree bounds and matching conditions, it is unique as a rational function.

**How the definition helps.** The matching conditions force more vanishing coefficients than a nonzero difference numerator can have. In our own proof, cross-multiply two candidate fractions and subtract. The resulting polynomial has degree at most m + n and vanishes to order at least m + n + 1. It must be zero, so the fractions agree. In our own example, both zero and x match the constant coefficient of the zero function at zero. With m = 1 and n = 0, the second coefficient rules out x.

**Wikipedia:** [Padé approximant](https://en.wikipedia.org/wiki/Pad%C3%A9_approximant). It says: “When it exists, the Padé approximant is unique as a formal power series for the given m and n.”

**Sources:** none listed. No primary source with a working link was found.

### Concave moduli bound Bernstein error

**Remember:** Use a concave modulus to replace many sample distances by one.

*True by definition. Confidence: medium.* MSC 41A25 (Rate of convergence, degree of approximation), 41A36. arXiv math.NA. Level 2: later undergraduate.

**Definition.** A modulus of continuity ω is a nondecreasing bound with \|f(s) − f(t)\| ≤ ω(\|s − t\|) and ω(δ) tending to zero with δ. Choose such a bound that is also concave.

**Problem.** At x in \[0, 1\], the degree n Bernstein polynomial averages f(K/n), where K counts successes in n independent trials with success probability x. For n ≥ 1, the absolute error is at most ω(√(x(1 − x)/n)).

**How the definition helps.** A concave modulus lets one apply Jensen’s inequality to the average error bound (our own proof). The error is at most the average of ω(\|K/n − x\|). Concavity bounds this by ω at the mean absolute distance. That distance is at most the standard deviation of K/n, since its mean is x. The remaining calculation gives variance x(1 − x)/n.

**Wikipedia:** [Modulus of continuity](https://en.wikipedia.org/wiki/Modulus_of_continuity). It says: “A special role is played by concave moduli of continuity, especially in connection with extension properties, and with approximation of uniformly continuous functions.”

**Sources:** none listed. No primary source with a working link was found.

### Common trials preserve Bernstein monotonicity

**Remember:** Use the same draws so a higher input can only add successes.

*True by definition.* MSC 41A36 (Approximation by positive operators). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For n ≥ 1, draw n independent numbers uniformly from \[0,1\]. At input x, count a success whenever a draw is at most x. Define the Bernstein approximation as the expected value of f at the fraction of successes. This construction uses the same draws at every input in place of comparing separate polynomial sums.

**Problem.** The Bernstein approximation of any nondecreasing function on \[0,1\] is nondecreasing.

**How the definition helps.** In our own argument, increasing x can only turn failures into successes, so the sampled function value never falls. In our own words, taking expectations preserves that comparison. The binomial probability formula identifies the resulting expectation with the usual Bernstein polynomial.

**Wikipedia:** [Bernstein polynomial](https://en.wikipedia.org/wiki/Bernstein_polynomial). It says: “Suppose K is a random variable distributed as the number of successes in n independent Bernoulli trials with probability x of success on each trial”

**Sources:** none listed. No primary source with a working link was found.

### Defining Bernstein polynomials as binomial expectations makes them fix affine functions

**Remember:** The expected success fraction is the success probability x.

*True by definition. Confidence: medium.* MSC 41A36 (Approximation by positive operators), 41A10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let K count the successes in n independent trials, each with success probability x. Define the nth Bernstein polynomial of f at x as the expected value of f(K/n). The usual definition is the sum over k from 0 to n of f(k/n) times C(n, k)xᵏ(1 − x)ⁿ⁻ᵏ.

**Problem.** For n ≥ 1 and all real a and b, the Bernstein polynomial of a + bx is a + bx on \[0, 1\].

**How the definition helps.** Expectation is linear, so the claim reduces to two facts: the expectation of a constant is that constant, and the expected value of K/n is x. With the sum formula, the same claim needs binomial identities for the total weight and for the mean. The work moves to checking that the expectation equals the sum, which is the binomial distribution formula. The proof steps are our own; the source notes only that Bernstein polynomials look like binomial expectations.

**Wikipedia:** [Bernstein polynomial](https://en.wikipedia.org/wiki/Bernstein_polynomial). It says: “Here, we take advantage of the fact that Bernstein polynomials look like Binomial expectations.”

**Sources:** none listed. No primary source with a working link was found.

### The cosine definition makes monic Chebyshev polynomials minimize the maximum

**Remember:** Equal alternating peaks stop any monic rival from lowering them all.

*True by definition.* MSC 41A50 (Best approximation, Chebyshev systems), 33C45. arXiv math.CA, math.NA. Level 2: later undergraduate.

**Definition.** Define the Chebyshev polynomial Tₙ by Tₙ(cos θ) = cos(nθ). The algebraic definition uses the recurrence Tₙ₊₁ = 2xTₙ − Tₙ₋₁ with T₀ = 1 and T₁ = x. For n ≥ 1 the leading coefficient of Tₙ is 2ⁿ⁻¹, so 2¹⁻ⁿTₙ is monic.

**Problem.** For n ≥ 1, among monic polynomials of degree n, 2¹⁻ⁿTₙ has the smallest maximum absolute value on \[−1, 1\]. That maximum is 2¹⁻ⁿ.

**How the definition helps.** The cosine definition shows at once that Tₙ takes the values ±1 alternately at the n + 1 points cos(kπ/n). Suppose a monic w of degree n had maximum below 2¹⁻ⁿ. Then 2¹⁻ⁿTₙ − w has degree at most n − 1 and alternates in sign at those n + 1 points. So it has n zeros and must be zero, which is impossible. Wikipedia gives this proof. The work goes into showing that cos(nθ) is a polynomial in cos θ, which gives the recurrence.

**Wikipedia:** [Chebyshev polynomials](https://en.wikipedia.org/wiki/Chebyshev_polynomials). It says: “is the one of which the maximal absolute value on the interval \[−1, 1\] is minimal.”

**Sources:** none listed. No primary source with a working link was found.

### Taylor polynomials as best local approximations compose by substitution and truncation

**Remember:** Substitute the inner polynomial into the outer one, then drop high powers.

*True by definition. Confidence: medium.* MSC 41A58 (Series expansions (e.g., Taylor, Lidstone series, but not Fourier series)), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let P be a polynomial of degree at most n. Call P an order n approximation of f at c if (f(x) − P(x))/\|x − c\|ⁿ → 0 as x → c. At most one such polynomial exists. The usual definition instead matches the derivatives of f at c up to order n.

**Problem.** Let g be smooth near c and f smooth near g(c). Let Q and P be their order n Taylor polynomials at c and at g(c). Then the order n Taylor polynomial of f ∘ g at c is P(Q(x)) with powers of (x − c) above n dropped.

**How the definition helps.** With the approximation definition, one only checks that the truncated P(Q(x)) approximates f(g(x)) to order n (our own). Since g is Lipschitz near c, f(g(x)) − P(g(x)) is negligible against \|x − c\|ⁿ, and since P has bounded slope, so is P(g(x)) − P(Q(x)) (our own). Dropping powers above n changes the result by O(\|x − c\|ⁿ⁺¹) (our own). The work moves into Taylor's theorem with the Peano remainder, which shows that the derivative polynomial is this unique best approximation.

**nLab:** [Taylor's theorem](https://ncatlab.org/nlab/show/Taylor%27s+theorem). It says: “whose derivatives at c match those of f up to order k.”

**Wikipedia:** [Taylor's theorem](https://en.wikipedia.org/wiki/Taylor%27s_theorem). It says: “The Taylor polynomial is the unique "asymptotic best fit" polynomial”

**Sources:** none listed. No primary source with a working link was found.

### Treating Taylor polynomials as classes modulo (x − c)ⁿ⁺¹ makes products truncate

**Remember:** Multiplying then truncating gives the same as truncating then multiplying.

*True by definition. Confidence: medium.* MSC 41A58 (Series expansions (e.g., Taylor, Lidstone series, but not Fourier series)), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Fix a point c and n ≥ 0. Call two smooth functions equal to order n at c if their difference is (x − c)ⁿ⁺¹ times a smooth function. Define the order n Taylor polynomial of f as the one polynomial of degree at most n in the class of f. The usual definition is the sum of f⁽ᵏ⁾(c)(x − c)ᵏ/k! for k ≤ n.

**Problem.** Let f and g be smooth near c. Multiply their order n Taylor polynomials at c and drop the powers above n. The result is the order n Taylor polynomial of fg.

**How the definition helps.** With classes, the claim says that multiplication respects the equivalence, which takes one line (our own). If f − P and g − Q are multiples of (x − c)ⁿ⁺¹, then so is fg − PQ = f(g − Q) + Q(f − P), and dropping powers above n from PQ adds another such multiple (our own). The work moves into Hadamard's lemma, which says that the remainder after the usual Taylor polynomial is (x − c)ⁿ⁺¹ times a smooth function. With the usual definition, one instead matches coefficients by the general Leibniz rule (our own).

**nLab:** [Hadamard lemma](https://ncatlab.org/nlab/show/Hadamard+lemma). It says: “the Taylor series of a smooth function on the real line around the origin has a remainder at order n”

**Sources:** none listed. No primary source with a working link was found.

### A Laplace kernel gives Stirling’s first correction

**Remember:** Take the logarithm and read the first correction from its kernel.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)), 33B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For n ≥ 1, Stirling’s logarithmic remainder is log(n!/Aₙ), where Aₙ = √(2πn)(n/e)ⁿ. Binet’s formula also gives it as ∫₀∞ exp(−nt)K(t) dt, with K(t) = (½−1/t+1/(exp(t)−1))/t.

**Problem.** The logarithmic remainder is 1/(12n)+O(1/n³). The ratio of the factorial to its leading Stirling approximation is 1+1/(12n)+O(1/n²).

**How the definition helps.** Binet’s integral makes the first correction the constant term of K at zero. In our own calculation, expanding exp(t) gives K(t) = 1/12+O(t²). Integrating these terms against exp(−nt) gives 1/(12n)+O(1/n³), since the tail away from zero decays exponentially. Exponentiating gives the factorial ratio.

**Paper or page:** [Binet's Formula for Logarithm of Gamma Function/Formulation 1](https://proofwiki.org/wiki/Binet's_Formula_for_Logarithm_of_Gamma_Function/Formulation_1), [Stirling's Formula/Refinement](https://proofwiki.org/wiki/Stirling's_Formula/Refinement). It says: “A refinement of Stirling's Formula is:”

**Sources:** none listed. No primary source with a working link was found.

### A phase-gap coordinate gives Laplace’s endpoint term

**Remember:** Use the increase in the exponent as the distance from the endpoint.

*Makes the theorem clean to state or prove.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** If h has its minimum at the left endpoint a, use s = h(x)−h(a) as the local coordinate. This measures the excess in the exponent rather than the distance x−a.

**Problem.** Let h be continuously differentiable on \[a,b\], with its unique minimum at a and h′(a)&gt;0. For continuous g with g(a)≠0, ∫ₐᵇ exp(−λh(x))g(x) dx is asymptotic to exp(−λh(a))g(a)/(λh′(a)) as λ→∞.

**How the definition helps.** The new coordinate makes the local exponential exactly exp(−λs) after removing exp(−λh(a)). In our own proof, h′(a)&gt;0 gives a local inverse and the transformed weight tends to g(a)/h′(a). Substituting u = λs and applying dominated convergence gives the leading term. Away from a, the gap above the minimum gives exponential decay.

**Wikipedia:** [Watson's lemma](https://en.wikipedia.org/wiki/Watson%27s_lemma). It says: “Γ(a+1)/xᵃ⁺¹”

**Sources:** none listed. No primary source with a working link was found.

### A square-root coordinate gives the Gaussian factor in Laplace’s method

**Remember:** Measure the height above the minimum in square roots.

*Makes the theorem clean to state or prove.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Near a strict minimum x₀ of h with h″(x₀) &gt; 0, set u to the signed square root of 2(h(x)−h(x₀)). Take u negative to the left of x₀ and positive to its right.

**Problem.** Suppose h has two continuous derivatives on \[a,b\] and its unique minimum is at x₀ inside this interval, with h″(x₀)&gt;0. For continuous g with g(x₀)≠0, ∫ₐᵇ exp(−λh(x))g(x) dx is asymptotic to exp(−λh(x₀))g(x₀)√(2π/(λh″(x₀))) as λ→∞.

**How the definition helps.** The signed square root makes the exponent exactly quadratic near the minimum. In our own proof, Taylor’s theorem gives dx/du = 1/√h″(x₀) at zero. Rescaling u by √λ and integrating the Gaussian gives the stated factor. Outside this neighborhood, h exceeds its minimum by a fixed positive amount.

**Paper or page:** [Cyclicity in Poletsky-Stessin Weighted Bergman Spaces](https://arxiv.org/abs/2507.03767v1). It says: “Assume that h ∈ C²\[a,b\] and h ≥ 0 has a unique global minimum at x₀ ∈ (a,b)”

**Sources:** none listed. No primary source with a working link was found.

### Ordered scales make asymptotic coefficients unique

**Remember:** Divide by the first scale term where two expansions differ.

*Makes the theorem clean to state or prove.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** An asymptotic scale is a sequence of functions near a limit point. Each is eventually nonzero, and the ratio of each to its predecessor tends to zero. An expansion in this scale assigns one constant coefficient to each function. After any truncation, the error divided by the last included scale function must tend to zero.

**Problem.** For a fixed scale, limit point and region, a function has at most one list of asymptotic coefficients.

**How the definition helps.** The remainder condition isolates each coefficient using a finite truncation. In our own proof, truncate two proposed expansions at their first differing coefficient. Subtract the truncations and divide by the last scale function. The difference of the two coefficients must tend to zero, contradicting their choice.

**nLab:** [asymptotic expansion](https://ncatlab.org/nlab/show/asymptotic+expansion). It says: “This definition makes no statement about the behaviour as n → ∞.”

**Wikipedia:** [Asymptotic expansion](https://en.wikipedia.org/wiki/Asymptotic_expansion). It says: “The asymptotic expansion of a function f(x) is unique for a specific region, scale and limit.”

**Sources:** none listed. No primary source with a working link was found.

### Shifting the exponential integral gives factorial terms and a remainder bound

**Remember:** Move the endpoint to zero and expand the reciprocal.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)), 33B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x &gt; 0, the exponential integral E₁(x) integrates exp(−t)/t from x to infinity. Its normalized form F(x) = exp(x)E₁(x) integrates exp(−u)/(x+u) from zero to infinity after substituting u = t−x.

**Problem.** The normalized integral has asymptotic terms (−1)ᵏ times k factorial divided by xᵏ⁺¹, for every k ≥ 0. The error after each truncation has the sign of the first omitted term and is smaller in absolute value.

**How the definition helps.** The fixed lower endpoint puts all dependence on x in one reciprocal with an exact finite geometric expansion. In our own proof, integrating its powers of u against exp(−u) gives factorials. The remainder equals the first omitted integral with an extra factor 1/(1+u/x), strictly between zero and one for u &gt; 0.

**Paper or page:** [Asymptotic Expansion for Exponential Integral Function/Formulation 1](https://proofwiki.org/wiki/Asymptotic_Expansion_for_Exponential_Integral_Function/Formulation_1). It says: “1 − 1!/x + 2!/x² − 3!/x³ + ⋯”

**Sources:** none listed. No primary source with a working link was found.

### The gamma integral turns Stirling’s formula into Laplace’s method

**Remember:** Write the factorial as an integral and find its peak.

*Makes the theorem clean to state or prove.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)), 33B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For s &gt; 0, define Γ(s) as the integral from 0 to ∞ of t raised to s−1 times e⁻ᵗ. When s = n+1, use this integral instead of the product for n!.

**Problem.** As n tends to infinity, n! is asymptotic to √(2πn) times (n/e) raised to n.

**How the definition helps.** The gamma integral gives the factorial a single peak where Laplace’s method applies. In our own proof, integration by parts gives Γ(n+1) = n!, and substituting t = nx gives the exponent −n(x−log x). The function x−log x has its unique minimum at 1 and second derivative 1 there. Outside a fixed neighborhood, its positive gap above 1 and the integrability of x exp(−x) bound the tails.

**nLab:** [Gamma function](https://ncatlab.org/nlab/show/Gamma+function). It says: “Γ(x) = ∫₀∞ tˣ e⁻ᵗ dt/t”

**Paper or page:** [Stirling's Formula](https://proofwiki.org/wiki/Stirling's_Formula). It says: “The factorial function can be approximated by the formula:”

**Sources:** none listed. No primary source with a working link was found.

### Truncated asymptotic expansions multiply like formal power series

**Remember:** Multiply finite truncations and discard powers above the requested degree.

*True by definition.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A power asymptotic expansion at zero controls each finite truncation. After degree N, the error divided by x raised to N must tend to zero. The infinite formal series itself need not converge.

**Problem.** If f and g have power asymptotic expansions at zero, then fg has the expansion obtained by multiplying their formal series. This holds even if the series do not converge.

**How the definition helps.** Finite truncations turn multiplication into polynomial arithmetic even when the corresponding infinite series diverge. In our own proof, both functions and their truncations stay bounded near zero. Each product involving a truncation error therefore remains negligible compared with x raised to N. Terms of degree above N in the polynomial product are negligible on the same scale.

**nLab:** [asymptotic expansion](https://ncatlab.org/nlab/show/asymptotic+expansion). It says: “the truncation of the series at any finite order still provides a controlled approximation”

**Sources:** none listed. No primary source with a working link was found.

### Writing the endpoint weight as a power gives Watson’s expansion

**Remember:** Peel off the endpoint power before expanding the smooth factor.

*Makes the theorem clean to state or prove.* MSC 41A60 (Asymptotic approximations, asymptotic expansions (steepest descent, etc.)), 33B15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Laplace integral weights a function by exp(−xt). Write that function near zero as tᵅg(t), where α &gt; −1 and g has continuous derivatives there.

**Problem.** Fix T &gt; 0 and let g be continuous on \[0,T\], with N+1 continuous derivatives near zero and Taylor coefficients cₖ there. As x→∞, ∫₀ᵀ exp(−xt)tᵅg(t) dt equals ∑ₖ₌₀ᴺ cₖΓ(α+k+1)/xᵅ⁺ᵏ⁺¹ plus O(x⁻ᵅ⁻ᴺ⁻²).

**How the definition helps.** Separating the endpoint power lets each Taylor term contribute a gamma integral. In our own derivation, substituting u = xt gives its coefficient. The Taylor error near zero is bounded by a constant times tᵅ⁺ᴺ⁺¹ after multiplication by tᵅ. Away from zero the exponential makes the remaining contribution exponentially small.

**Wikipedia:** [Watson's lemma](https://en.wikipedia.org/wiki/Watson%27s_lemma). It says: “Γ(a+1)/xᵃ⁺¹”

**Sources:** none listed. No primary source with a working link was found.

### Chebyshev grids prevent Runge divergence

**Remember:** Space the angles evenly, not the points.

*Rules out counterexamples.* MSC 41A05 (Interpolation in approximation theory). arXiv math.NA. Level 3: graduate.

**Definition.** For n + 1 nodes, divide \[0, π\] into n + 1 equal intervals and take the cosine of each midpoint. These Chebyshev nodes cluster near both ends of \[−1, 1\].

**Problem.** Suppose f extends analytically to a complex neighborhood of \[−1, 1\]. Its degree-n interpolants at Chebyshev nodes converge uniformly with error at most Cρ⁻ⁿ for some C &gt; 0 and ρ &gt; 1.

**How the definition helps.** The cosine grid controls how strongly interpolation amplifies errors, including errors near the endpoints (our own). Runge’s function 1/(1 + 25x²) has divergent interpolants on equally spaced nodes. The geometric rate uses the Chebyshev interpolation estimate on a complex ellipse enclosing the interval inside the analytic neighborhood (our own).

**Wikipedia:** [Runge's phenomenon](https://en.wikipedia.org/wiki/Runge%27s_phenomenon). It says: “A standard example of such a set of nodes is Chebyshev nodes, for which the maximum error in approximating the Runge function is guaranteed to diminish with increasing polynomial order.”

**Paper or page:** [On polynomial interpolation in the monomial basis](https://arxiv.org/abs/2212.10519v5). It says: “{\\lVert F-P<sub>N</sub> \\rVert } \_{L<sup>\\infty </sup>(\[a,b\])}\\leq \\frac{4M}{\\rho -1}\\rho <sup>-N</sup>”

**Sources:**

- [On polynomial interpolation in the monomial basis](https://arxiv.org/abs/2212.10519v5)

### Discrete projections match all samples

**Remember:** Measure every sample error and leave none for the projection to miss.

*True by definition.* MSC 41A05 (Interpolation in approximation theory), 65D05. arXiv math.NA. Level 3: graduate.

**Definition.** At M points, represent each real function by its vector of sampled values. Take the inner product of two vectors by summing their coordinate products with positive weights. Choose M basis functions with nonzero, mutually orthogonal sample vectors. Fit the data by orthogonal projection using this inner product in place of an integral.

**Problem.** The projection formed from the M discrete inner products matches the data at all M sample points.

**How the definition helps.** In our own argument, the sample vectors of the basis functions are orthogonal and nonzero, so they span the M-dimensional data space. In our own words, projecting onto that whole data space leaves all samples unchanged. The work moves to constructing a basis orthogonal for the chosen sample points.

**Paper or page:** [Orthogonal polynomials on planar cubic curves](https://arxiv.org/abs/2011.10884v1). It says: “interpolates f(x,y) at (xⱼ,yⱼ)”

**Sources:**

- [Marco Fasondini, Sheehan Olver, Yuan Xu. Orthogonal polynomials on planar cubic curves (2020).](https://arxiv.org/abs/2011.10884v1)

### Fekete points bound basis polynomials

**Remember:** Replacing one point cannot improve the winning determinant.

*True by definition.* MSC 41A05 (Interpolation in approximation theory), 65D05. arXiv math.NA. Level 3: graduate.

**Definition.** Fix a basis for the polynomials of degree below r on a bounded closed interval of positive length. At each of r points, record the basis values as one matrix row. Fekete points maximize the absolute determinant of this matrix over all point choices. The ith Lagrange polynomial has degree below r and takes value one at point i and zero at the others.

**Problem.** Each Lagrange basis polynomial for Fekete points has maximum absolute value one on the interval.

**How the definition helps.** Maximality means that moving one point can never raise the absolute determinant. In our own proof, move point i to x and divide the new determinant by the original. The ratio has degree below r, equals one at point i and zero at the other points, so it is the ith Lagrange polynomial. Maximality bounds its absolute value by one, and it reaches one at point i.

**Paper or page:** [The Fekete problem in segmental polynomial interpolation](https://arxiv.org/abs/2403.09378v1). It says: “Then ‖ℓ\[ξᵢ\]‖ = max (x ∈ I) \|ℓ\[ξᵢ\](x)\| = 1 for each i ∈ {1, …, r}.”

**Sources:**

- [Ludovico Bruni Bruno and Wolfgang Erb. The Fekete problem in segmental polynomial interpolation (2024).](https://doi.org/10.1007/s10543-024-01047-4)

### Sample signs attain interpolation norms

**Remember:** Choose sample signs to make every basis term add.

*True by definition.* MSC 41A05 (Interpolation in approximation theory). arXiv math.NA. Level 3: graduate.

**Definition.** Use distinct interpolation nodes in a compact real interval. For each node, take the basis polynomial of degree below the node count that equals one there and zero at the other nodes. Define the Lebesgue constant as the maximum over the interval of the sum of their absolute values.

**Problem.** This constant equals the largest possible maximum absolute value of the interpolant when the continuous input function has absolute value at most one.

**How the definition helps.** The triangle inequality bounds every interpolant by the sum of absolute basis values (our own). At a point where the sum is largest, give each sample the sign of its basis polynomial there (our own). Join these samples by straight lines and extend them constantly to the interval ends (our own). This continuous input of maximum one attains the bound (our own).

**Paper or page:** [Order of uniform approximation by polynomial interpolation in the complex plane and beyond](https://arxiv.org/abs/2209.07101v3). It says: “L\_{{\\bf {z}}<sub>n</sub>}= \\max <sub>z\\in X</sub> \\, \\sum <sup>n</sup><sub>j=0</sub> \|\\ell \_ {n,j}(z)\|”

**Sources:**

- [Order of uniform approximation by polynomial interpolation in the complex plane and beyond](https://arxiv.org/abs/2209.07101v3)

### Polynomial kernels give polynomial averages

**Remember:** A polynomial kernel turns averaging into a polynomial.

*True by definition. Confidence: medium.* MSC 41A10 (Approximation by polynomials). arXiv math.NA. Level 3: graduate.

**Definition.** Normalize the polynomials (1 − t²)ⁿ to have integral 1 on \[−1, 1\]. Extend them by zero outside that interval. Approximate a function on \[0, 1\] by convolving its zero extension with these kernels.

**Problem.** For 1 ≤ p &lt; ∞, every function in Lᵖ(\[0, 1\]) has polynomial averages that converge to it in the Lᵖ norm.

**How the definition helps.** For x and y in \[0, 1\], the difference x − y lies in \[−1, 1\], where the kernel is a polynomial, so the average is a polynomial in x (our own). The kernels have unit mass, and their mass outside every neighborhood of zero tends to zero. Continuity of translation in Lᵖ then gives convergence (our own). Polynomial kernels remove the need for a separate polynomial approximation of each smoothed function (our own).

**nLab:** [approximation of the identity](https://ncatlab.org/nlab/show/approximation+of+the+identity). It says: “Hence f ∗ pₙ is polynomial.”

**Sources:** none listed. No primary source with a working link was found.

### Box averages preserve spline unity

**Remember:** An average of the constant one stays one.

*True by definition.* MSC 41A15 (Spline approximation). arXiv math.NA. Level 3: graduate.

**Definition.** Define a cardinal B-spline by convolving the indicator of \[0, 1) with itself repeatedly. Each step averages the lower-degree spline over a unit interval.

**Problem.** For each degree, all the integer translates of the cardinal B-spline sum to 1 at every real x.

**How the definition helps.** Each convolution averages the preceding sum of translates, so it preserves the value one (our own). The half-open unit intervals tile the line, giving the starting sum (our own). Compact support leaves only finitely many terms over each averaging interval (our own). The work moves to identifying these repeated averages with the usual piecewise polynomial spline basis (our own).

**Wikipedia:** [B-spline](https://en.wikipedia.org/wiki/B-spline). It says: “by iterative filtering with a rectangle function, higher-order interpolation is obtained.”

**Sources:** none listed. No primary source with a working link was found.

### Box convolutions simplify spline derivatives

**Remember:** Differentiate the last box to subtract the shifted lower-degree splines.

*True by definition.* MSC 41A15 (Spline approximation), 65D07. arXiv math.NA. Level 3: graduate.

**Definition.** Start with the box function that equals one on \[0, 1\] and zero elsewhere. A cardinal B-spline of degree p is the convolution of p + 1 copies of this box. Convolution with one more box averages the previous function over the interval \[x − 1, x\].

**Problem.** For p ≥ 1, the derivative at x equals the lower-degree spline at x minus its value at x − 1. This holds away from knots and under integration against smooth test functions across knots.

**How the definition helps.** Differentiation can act on just one box in the convolution, our own. The derivative of that box consists of opposite point masses at its two ends, our own. The work moves to showing that the convolution agrees with the piecewise polynomial spline definition, our own.

**Paper or page:** [Energy minimisation using overlapping tensor-product free-knot B-splines](https://arxiv.org/abs/2508.17705v2). It says: “∂ₓ B₀(τ) = δ₍τ₁₎ − δ₍τ₂₎,”

**Sources:**

- [Alexandre Magueresse, Santiago Badia, Energy minimisation using overlapping tensor-product free-knot B-splines](https://arxiv.org/abs/2508.17705v2)

### Defining cardinal B-splines by convolution makes their two-scale relation binomial

**Remember:** Split one box into two half boxes, then expand the convolution power.

*True by definition. Confidence: medium.* MSC 41A15 (Spline approximation). arXiv math.CA. Level 3: graduate.

**Definition.** Let χ be the indicator function of \[0, 1). Define the cardinal B-spline B of degree p as the convolution of p + 1 copies of χ. The usual definition uses the Cox–de Boor recursion on integer knots.

**Problem.** B(x) equals 2 raised to −p times the sum over j from 0 to p + 1 of C(p + 1, j)·B(2x − j).

**How the definition helps.** With the convolution definition, the relation follows from one splitting of the box and the binomial theorem. Write χ(x) = χ(2x) + χ(2x − 1), a sum of two half boxes, and expand the (p + 1)-fold convolution of this sum. Each term is a shifted convolution power of the half box, which equals 2⁻ᵖB(2x − j). From the Cox–de Boor recursion, the relation needs an induction on the degree; these steps are our own.

**Wikipedia:** [B-spline](https://en.wikipedia.org/wiki/B-spline). It says: “A cardinal B-spline has uniformly spaced knots, therefore interpolation between the knots equals convolution with a smoothing kernel.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the spline by least bending gives zero end curvature for free

**Remember:** Free end slopes force zero end curvature at a minimizer.

*True by definition. Confidence: medium.* MSC 41A15 (Spline approximation), 49K05. arXiv math.NA. Level 3: graduate.

**Definition.** Take nodes x₀ &lt; x₁ &lt; ⋯ &lt; xₙ with n ≥ 1 and a data value at each node. Among functions on \[x₀, xₙ\] with square-integrable second derivative and these values, choose the one with the least integral of the squared second derivative. The usual definition asks for a piecewise cubic with two continuous derivatives and zero second derivative at both ends.

**Problem.** The minimizer s has zero second derivative at x₀ and at xₙ.

**How the definition helps.** The data do not fix the end slopes, so a minimizer cannot improve when an end slope changes. So the integral of s″h″ is zero for every allowed h that vanishes at the nodes. Integration by parts on each cubic piece leaves the boundary term s″(x₀)h′(x₀), and h′(x₀) is arbitrary, so s″(x₀) = 0. The usual definition imposes this condition by hand; these proof steps are our own.

**Wikipedia:** [Spline (mathematics)](https://en.wikipedia.org/wiki/Spline_%28mathematics%29). It says: “Spline functions for interpolation are normally determined as the minimizers of suitable measures of roughness (for example integral squared curvature) subject to the interpolation constraints.”

**Sources:**

- [John C. Holladay, A smoothest curve approximation (1957)](https://doi.org/10.1090/S0025-5718-1957-0093894-6)

### Natural splines solve smoothing

**Remember:** Keep the fit and minimize the bending.

*True by definition.* MSC 41A15 (Spline approximation). arXiv math.NA. Level 3: graduate.

**Definition.** On the interval between the outermost data sites, consider functions with absolutely continuous first derivative and square-integrable second derivative. Define the smoothing spline to minimize squared data errors plus a positive multiple of the integral of the squared second derivative.

**Problem.** With at least two distinct sites, the unique minimizer is a natural cubic spline. Its cubic pieces join with two continuous derivatives at data sites, and its second derivative vanishes at both ends.

**How the definition helps.** Fixing the fitted values leaves only the bending penalty to minimize. Among curves with those values, the natural cubic interpolant uniquely minimizes that penalty. This interpolation theorem supplies the main step. The remaining finite-dimensional objective has a unique minimum because its data term is strictly convex and grows without bound (our own).

**Wikipedia:** [Smoothing spline](https://en.wikipedia.org/wiki/Smoothing_spline). It says: “It remains only to minimize ∫ f̂″(x)² dx, and the minimizer is a natural cubic spline”

**Sources:** none listed. No primary source with a working link was found.

### Imaginary-axis interpolation forces unit modulus

**Remember:** Enough matches force the entire axis onto the unit circle.

*True by definition.* MSC 41A20 (Approximation by rational functions), 41A05. arXiv math.NA. Level 3: graduate.

**Definition.** Use a rational approximant with numerator and denominator degrees at most n. Require it to match the exponential at 2n + 1 distinct imaginary points where it has no pole. This is a way to construct a rational approximant with unit modulus on the imaginary axis.

**Problem.** Any such rational function has absolute value one on the imaginary axis wherever it is defined.

**How the definition helps.** Interpolation turns a condition on the whole imaginary axis into enough zeros to force a polynomial identity. In our own proof, write the fraction as P/Q and set z = it for real t. The difference \|P(it)\|² − \|Q(it)\|² is a polynomial in t of degree at most 2n. It vanishes at every match since the exponential has modulus one there. Its 2n + 1 distinct zeros force it to vanish identically. Constructing an interpolant with the required degrees is a separate problem.

**Paper or page:** [The error of Chebyshev approximations on shrinking domains](https://arxiv.org/abs/2410.04885v1). It says: “An (n,n)-rational function is unitary if and only if it interpolates the exponential function at ≥ 2n+1 nodes on the imaginary axis, counting multiplicity.”

**Sources:** none listed. No primary source with a working link was found.

### Alternating extremes certify optimality

**Remember:** Every improvement would need too many sign changes.

*Makes the theorem clean to state or prove.* MSC 41A50 (Best approximation, Chebyshev systems). arXiv math.NA. Level 3: graduate.

**Definition.** Take a continuous real function on a compact interval and a candidate polynomial of degree at most n. Call n + 2 increasing points alternating extremes if the error reaches its largest absolute value there with alternating signs.

**Problem.** A candidate with alternating extremes minimizes the maximum absolute error among all real polynomials of degree at most n.

**How the definition helps.** Alternating extremes force any strict improvement to change the sign of its correction between successive points (our own). The difference of the two polynomials would have at least n + 1 distinct zeros, more than its degree allows (our own). A candidate with zero error already minimizes the error (our own). The converse requires a separate proof that every best fit with positive error has alternating extremes (our own).

**Wikipedia:** [Equioscillation theorem](https://en.wikipedia.org/wiki/Equioscillation_theorem). It says: “Define an alternating set (given polynomial g and function f) to be a set of ordered points x₀, …, xₙ in \[a,b\]”

**Sources:** none listed. No primary source with a working link was found.

### Normalized kernels minimize squared norm

**Remember:** The shortest polynomial with value one points along its kernel.

*True by definition. Confidence: medium.* MSC 41A50 (Best approximation, Chebyshev systems). arXiv math.NA. Level 3: graduate.

**Definition.** Let p₀, …, pₙ be the orthonormal polynomials of a finite positive measure with infinite support on a compact real interval. The kernel is K(a, x) = p₀(a)p₀(x) + ⋯ + pₙ(a)pₙ(x). At a real point a, the normalized kernel is K(a, x)/K(a, a), and K(a, a) &gt; 0.

**Problem.** Among polynomials of degree at most n that have value 1 at a, the normalized kernel uniquely minimizes the integral of the squared polynomial.

**How the definition helps.** The normalized kernel turns a point constraint into an orthogonal decomposition (our own). Integrating K(a, x) against any polynomial of degree at most n returns its value at a. Subtract the normalized kernel from any competitor to get a polynomial vanishing at a (our own). Reproduction makes the difference orthogonal to the normalized kernel, so its squared norm adds to the minimum (our own). This replaces solving constrained coefficient equations with proving the reproduction identity (our own).

**Wikipedia:** [Christoffel–Darboux formula](https://en.wikipedia.org/wiki/Christoffel%E2%80%93Darboux_formula). It says: “In other words, the kernel is an integral operator that orthogonally projects each polynomial to the space of polynomials of degree up to n.”

**Sources:** none listed. No primary source with a working link was found.

### Flat norm faces permit ties

**Remember:** A tie would give a better midpoint.

*Rules out counterexamples. Confidence: medium.* MSC 41A52 (Uniqueness of best approximation). arXiv math.NA. Level 3: graduate.

**Definition.** Use a strictly convex norm, meaning the midpoint of distinct unit vectors has norm less than one. Let the permitted approximants form a convex set, so their midpoints stay in the set.

**Problem.** A point has at most one closest point in a convex set under a strictly convex norm.

**How the definition helps.** Strict convexity would make the midpoint of two different best approximants closer to the target (our own). Their error vectors have the same positive length, so divide by that length and apply the unit-vector condition (our own). Convexity keeps the midpoint among the permitted choices (our own). For the maximum norm, every point of \[−1, 1\] × {0} is closest to (0, 1) (our own).

**Wikipedia:** [Strictly convex space](https://en.wikipedia.org/wiki/Strictly_convex_space). It says: “the segment joining x and y meets ∂B only at x and y.”

**Sources:** none listed. No primary source with a working link was found.

### Haar systems give unique fits

**Remember:** Every set of r rows determines the coefficients.

*Rules out counterexamples.* MSC 41A52 (Uniqueness of best approximation), 41A50. arXiv math.NA. Level 3: graduate.

**Definition.** Take a real matrix with n rows and r columns, where n &gt; r ≥ 1. Its columns form a Haar system if every choice of r rows gives an invertible matrix.

**Problem.** For a real Haar matrix, every data vector has a unique fit that minimizes the largest absolute residual.

**How the definition helps.** The Haar condition lets any r rows determine the coefficients (our own argument). The midpoint of two best fits is also a best fit, and both fits agree on every row where the midpoint reaches its maximum error. If fewer than r rows did so, one could move slightly toward the data and improve the fit, so both fits agree on r rows and coincide. Without the Haar condition, the column (1, 0) fits (0, 1) equally well with any coefficient between −1 and 1.

**Paper or page:** [On the algorithm of best approximation by low rank matrices in the Chebyshev norm](https://arxiv.org/abs/2201.12301v1). It says: “Then, for any vector a ∈ ℂⁿ the solution is unique if and only if the columns of the matrix V form a Chebyshev system.”

**Sources:**

- [Stanislav Morozov, Nikolai Zamarashkin, Eugene Tyrtyshnikov, On the algorithm of best approximation by low rank matrices in the Chebyshev norm (2022)](https://arxiv.org/abs/2201.12301v1)

### Peano kernels isolate quadrature error

**Remember:** Apply the error to truncated powers once, then reuse the kernel.

*Makes the theorem clean to state or prove.* MSC 41A80 (Remainders in approximation formulas), 65D32. arXiv math.NA. Level 3: graduate.

**Definition.** View quadrature error as a linear operation L that subtracts the rule from the integral. Assume the rule is exact on polynomials of degree at most ν, with ν at least one. For fixed θ, truncate the νth power of x − θ by setting it to zero for x &lt; θ. Define the Peano kernel by applying L to this truncated power.

**Problem.** Suppose the function has ν + 1 continuous derivatives on the interval. The error is the integral of its last derivative times the Peano kernel, divided by ν factorial.

**How the definition helps.** The Peano kernel gives the error on each truncated power in Taylor’s integral remainder. Exactness removes the polynomial part of Taylor’s formula. In our own derivation, apply L inside the remainder integral. Finite sums commute with integration, and continuity permits the exchange of the two integrals.

**Wikipedia:** [Peano kernel theorem](https://en.wikipedia.org/wiki/Peano_kernel_theorem). It says: “to annihilate all but the final term on the right-hand side”

**Sources:** none listed. No primary source with a working link was found.

### Disjoint triangles give a sharp interpolation bound

**Remember:** Disjoint triangles let each average choose its own sign.

*Rules out counterexamples.* MSC 41A05 (Interpolation in approximation theory), 41A63, 65D05. arXiv math.NA. Level 4: research.

**Definition.** In a closed polygon, fit a polynomial to the given triangle averages. Require the triangles to share no positive area. Assume the averages determine exactly one polynomial in the chosen space. Each basis polynomial has average one on its own triangle and zero on the others.

**Problem.** Among continuous inputs of maximum absolute value at most one, take the supremum of the maximum absolute fitted value. It equals the largest pointwise sum of absolute basis values.

**How the definition helps.** Disjoint interiors let continuous inputs take a separate sign on each triangle. In our own proof, choose a point where the sum is largest, give each triangle the sign of its basis polynomial there, and taper the signs to zero near the edges. The averages approach those signs, and the triangle inequality gives the upper bound. In our own example, fitting a line to averages on \[0, 2\] and \[1, 3\] gives a basis sum of three at either endpoint, but the overlap limits the amplification to two.

**Paper or page:** [Bivariate polynomial histopolation techniques on Padua, Fekete and Leja triangles](https://arxiv.org/abs/2506.03025v1). It says: “Then, the operator norm of the respective histopolation operator Πₘ satisfies ‖Πₘ‖ₒₚ = ℒₘ(𝒯ₘ).”

**Sources:**

- [Ludovico Bruni Bruno, Francesco Dell'Accio, Wolfgang Erb, Federico Nudo. Bivariate polynomial histopolation techniques on Padua, Fekete and Leja triangles (2025).](https://arxiv.org/abs/2506.03025v1)

### Parity preserves disk coordinates

**Remember:** Two sign flips leave the same disk point unchanged.

*True by definition.* MSC 41A05 (Interpolation in approximation theory). arXiv math.NA. Level 4: research.

**Definition.** Allow signed radii when interpolating on the unit disk. Replace a single formula in radius and angle by the sum of two functions. The first stays unchanged under either radius reversal or a half-turn. The second changes sign under each operation.

**Problem.** The sum assigns the same value to (r, θ) and (−r, θ + π). At the center it has a single value if the first function there is independent of θ.

**How the definition helps.** The two sign changes cancel, so both coordinate descriptions give the same interpolated value (our own). At radius zero, reversing the radius fixes the point and forces the second function to vanish (our own). The remaining work is to construct interpolants with these symmetries and make the first function constant at the center (our own).

**Paper or page:** [Barycentric interpolation formulas for the sphere and the disk](https://arxiv.org/abs/2410.05439v1). It says: “If f⁺ is furthermore constant for all φ when ρ = 0, then f̃ is a BMC-II function.”

**Sources:**

- [Barycentric interpolation formulas for the sphere and the disk](https://arxiv.org/abs/2410.05439v1)

### Reflected poles bound modulus

**Remember:** A right-half-plane pole puts its reflected zero on the left.

*True by definition.* MSC 41A20 (Approximation by rational functions). arXiv math.NA. Level 4: research.

**Definition.** Represent a rational function of modulus one on the imaginary axis by pairing each pole s with its reflection −s̄. The bar means complex conjugation. Replace separate numerator and denominator polynomials by a product of factors (z + s̄)/(z − s), times a constant of modulus one.

**Problem.** Take the best uniform approximation to exp(iωx) on \[−1, 1\] by such functions evaluated at ix, with numerator and denominator degrees at most n. For n ≥ 1 and 0 &lt; ω &lt; (n + 1)π, its modulus is below one throughout the open left half-plane.

**How the definition helps.** The product turns the modulus bound into a distance comparison for each pole (our own). The paper proves that all n poles lie in the open right half-plane. Every point in the open left half-plane is closer to each reflected zero than to its pole (our own). Each factor therefore has modulus below one, as does their product (our own).

**Paper or page:** [Unitary rational best approximations to the exponential function](https://arxiv.org/abs/2312.13809v1). It says: “the poles s₁,…,sₙ of the unitary best approximation r(ix) ≈ exp(iωx), r ∈ 𝒰ₙ, are located in the right complex plane”

**Sources:**

- [Unitary rational best approximations to the exponential function](https://arxiv.org/abs/2312.13809v1)

### Angular differences commute with smoothing

**Remember:** Rotations stay on the cone and commute with its polynomial smoothing.

*True by definition.* MSC 41A25 (Rate of convergence, degree of approximation), 41A63. arXiv math.CA. Level 4: research.

**Definition.** On a cone, a rotation in two spatial coordinates preserves each slice at fixed height t. Measure angular smoothness by repeated differences between a function and its rotation through θ/√t. A straight coordinate shift could leave the slice.

**Problem.** At positive heights up to one, the paper’s polynomial smoothing operator commutes with these angular differences. Its error satisfies the same angular smoothness bound as the input, up to a constant.

**How the definition helps.** The difference uses rotations that preserve the smoothing kernel (our own explanation). Rotating both arguments together leaves the kernel unchanged, so each rotation passes through the smoothing integral. Taking repeated differences preserves this identity. Bounding the resulting error requires a uniform bound on the smoothing operator.

**Paper or page:** [Best approximation by polynomials on the conic domains](https://arxiv.org/abs/2506.22916v1). It says: “For 1 ≤ p ≤ ∞, 1 ≤ i ≠ j ≤ d, and t ∈ (0, 1\], Δʳᵢ,ⱼ,θ/√t Lₙᵞ f = Lₙᵞ(Δʳᵢ,ⱼ,θ/√t f).”

**Sources:**

- [Yan Ge, Yuan Xu, Best approximation by polynomials on the conic domains](https://arxiv.org/abs/2506.22916v1)

### Reproduction cancels Taylor terms

**Remember:** Reproducing Taylor polynomials leaves only their remainders.

*Makes the theorem clean to state or prove.* MSC 41A25 (Rate of convergence, degree of approximation). arXiv math.NA. Level 4: research.

**Definition.** Let h be the largest distance from a point of a bounded domain to its nearest sample. Approximate f(x) by a weighted sum of samples that returns p(x) exactly for every polynomial p of degree at most m. Write d for each sample’s distance from x. Require the sum of absolute weights times dᵐ⁺¹ to be at most C hᵐ⁺¹, uniformly in x and h.

**Problem.** Suppose f has bounded continuous derivatives through order m + 1 on a neighborhood of the closed convex hull of the domain and samples. Then the maximum error is at most a constant times hᵐ⁺¹.

**How the definition helps.** Polynomial reproduction cancels the entire Taylor polynomial before the weights can amplify any error (our own). Taylor’s theorem bounds each sample remainder by a constant times dᵐ⁺¹ (our own). The weighted distance bound then gives the estimate (our own). The paper proves such bounds for its rapidly decaying weights.

**Paper or page:** [Fast-Decaying Polynomial Reproduction](https://arxiv.org/abs/2411.14933v1). It says: “\\\| f-z<sub>f,X</sub>\\\| \_{L<sup>\\infty </sup>(\\Omega )} \\leq K h<sub>X,\\Omega </sub><sup>m+1</sup>\\\| f\\\| \_{\\mathcal{C}<sup>m+1</sup>(\\Omega ^\*)}”

**Sources:**

- [Fast-Decaying Polynomial Reproduction](https://arxiv.org/abs/2411.14933v1)

### Degree bounds bracket filter error

**Remember:** Unchanged low terms and absent high terms bound the error.

*True by definition.* MSC 41A81 (Weighted approximation). arXiv math.NA. Level 4: research.

**Definition.** Measure error on the positive half-line by the supremum of its absolute value times a fixed positive weight. In a Laguerre polynomial expansion, replace a sharp cutoff by a linear filter T that tapers the higher coefficients. Choose integers 1 ≤ m &lt; n. The filter fixes degrees through n − m and returns polynomials of degree below n + m.

**Problem.** Let Eₖ(f) be the least weighted error of f by polynomials of degree at most k, and let ‖T‖ be the operator norm of T. Then E<sub>n+m−1</sub>(f) ≤ ‖f − Tf‖ ≤ (1 + ‖T‖)E<sub>n−m</sub>(f) for every f in the weighted space.

**How the definition helps.** The two degree cutoffs give comparison polynomials for opposite sides of the estimate (our own). The output itself gives the lower bound (our own). Subtracting any preserved polynomial leaves the output error unchanged, so the triangle inequality gives the upper bound (our own). The paper proves a bound on ‖T‖ independent of n and m under additional weight and bandwidth conditions (our own).

**Paper or page:** [De la Vallée Poussin filtered polynomial approximation on the half line](https://arxiv.org/abs/2402.08358v1). It says: “E<sub>n+m-1</sub>(f)<sub>u</sub>\\le \\\| \[f-\\mathcal{V}n<sup>m</sup>(w\\alpha ,f)\]u\\\| \\le {\\mathcal{C}}E<sub>n-m</sub>(f)<sub>u</sub>”

**Sources:**

- [De la Vallée Poussin filtered polynomial approximation on the half line](https://arxiv.org/abs/2402.08358v1)
