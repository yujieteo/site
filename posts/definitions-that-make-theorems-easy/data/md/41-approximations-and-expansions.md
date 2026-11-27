### Lagrange basis functions separate interpolation data

**Remember:** Each basis polynomial reads one data value and ignores the others.

*True by definition.* MSC 41A05 (Interpolation in approximation theory), 15A03. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For n + 1 distinct nodes, define one basis polynomial for each node. Multiply the factors x minus each of the other nodes, then scale the product to give one at the chosen node. The monomial basis instead uses successive powers of x.

**Problem.** For n + 1 distinct real nodes and arbitrary real values there, exactly one polynomial of degree at most n takes those values.

**How the definition helps.** At any node, only its own basis polynomial contributes, so the weighted sum takes the prescribed value (our own). The work moves to proving that these polynomials form a basis (our own). Evaluating a linear combination at each node proves independence, and the number of polynomials equals the dimension (our own).

**Paper or page:** [Lagrange Interpolation Formula/Formulation 1](https://proofwiki.org/wiki/Lagrange_Interpolation_Formula/Formulation_1). It says: “Then there exists a unique polynomial P ∈ ℝ\[X\] of degree at most n such that: P(xᵢ) = aᵢ for all i ∈ {0, 1, …, n}”

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

### Positive Chebyshev tails peak together

**Remember:** Every discarded cosine reaches one at the same endpoint.

*True by definition.* MSC 41A10 (Approximation by polynomials), 41A25. arXiv math.NA. Level 2: later undergraduate.

**Definition.** For a nonnegative integer n, approximate the nth power of x by keeping its Chebyshev terms up to a chosen degree. The jth Chebyshev polynomial takes the value cos(jθ) at x = cos θ. This replaces truncation in powers of x.

**Problem.** On \[−1,1\], the maximum absolute truncation error for a monomial is the sum of the discarded Chebyshev coefficients.

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

**How the definition helps.** Expectation is linear, so the claim reduces to two facts. The expectation of a constant is that constant, and the expected value of K/n is x. With the sum formula, the same claim needs the binomial identities for the total weight and for the mean. The work moves to checking that the expectation equals the sum, which is the formula for the binomial distribution. This fact is the first step of Bernstein’s proof of the Weierstrass approximation theorem. The proof steps are our own; the Wikipedia text notes only that Bernstein polynomials look like binomial expectations.

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

**How the definition helps.** With the approximation definition, one only checks that the truncated P(Q(x)) approximates f(g(x)) to order n (our own). Since g is differentiable at c, \|g(x) − g(c)\| ≤ C\|x − c\| near c (our own). So f(g(x)) − P(g(x)) is negligible against \|x − c\|ⁿ (our own). P has bounded slope near g(c), so P(g(x)) − P(Q(x)) is also negligible (our own). Dropping powers above n changes the result by at most a constant times \|x − c\|ⁿ⁺¹ (our own). The work moves into Taylor's theorem with the Peano remainder. It shows that the derivative polynomial is this unique best approximation.

**nLab:** [Taylor's theorem](https://ncatlab.org/nlab/show/Taylor%27s+theorem). It says: “whose derivatives at c match those of f up to order k.”

**Wikipedia:** [Taylor's theorem](https://en.wikipedia.org/wiki/Taylor%27s_theorem). It says: “The Taylor polynomial is the unique "asymptotic best fit" polynomial”

**Sources:** none listed. No primary source with a working link was found.

### Treating Taylor polynomials as classes modulo (x − c)ⁿ⁺¹ makes products truncate

**Remember:** Multiplying then truncating gives the same as truncating then multiplying.

*True by definition. Confidence: medium.* MSC 41A58 (Series expansions (e.g., Taylor, Lidstone series, but not Fourier series)), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Fix a point c and n ≥ 0. Call two smooth functions equal to order n at c if their difference is (x − c)ⁿ⁺¹ times a smooth function. Define the order n Taylor polynomial of f as the one polynomial of degree at most n in the class of f. The usual definition is the sum of f⁽ᵏ⁾(c)(x − c)ᵏ/k! for k ≤ n.

**Problem.** Let f and g be smooth near c. Multiply their order n Taylor polynomials at c and drop the powers above n. The result is the order n Taylor polynomial of fg.

**How the definition helps.** With classes, the claim says that multiplication respects the equivalence, which takes one line (our own). Suppose f − P and g − Q are multiples of (x − c)ⁿ⁺¹ (our own). Then so is fg − PQ = f(g − Q) + Q(f − P) (our own). Dropping powers above n from PQ changes it by another such multiple (our own). The work moves into Hadamard's lemma. It says that the remainder after the usual Taylor polynomial is (x − c)ⁿ⁺¹ times a smooth function. With the usual definition, one instead matches coefficients by the general Leibniz rule (our own).

**nLab:** [Hadamard lemma](https://ncatlab.org/nlab/show/Hadamard+lemma). It says: “the Taylor series of a smooth function on the real line around the origin has a remainder at order n”

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

**How the definition helps.** The determinant definition bounds every ratio obtained by replacing one row. The usual interval definition maximizes the product of pairwise distances. The Vandermonde determinant formula identifies that product with the absolute determinant in the monomial basis. Changing basis multiplies every determinant by the same nonzero factor. In our own proof, move point i to x and divide the new determinant by the original. The ratio has degree below r and takes the defining values of the ith Lagrange polynomial. Its absolute value reaches one at point i.

**Paper or page:** [The Fekete problem in segmental polynomial interpolation](https://arxiv.org/abs/2403.09378v1). It says: “Then ‖ℓ\[ξᵢ\]‖ = max (x ∈ I) \|ℓ\[ξᵢ\](x)\| = 1 for each i ∈ {1, …, r}.”

**Sources:**

- [Ludovico Bruni Bruno and Wolfgang Erb. The Fekete problem in segmental polynomial interpolation (2024).](https://doi.org/10.1007/s10543-024-01047-4)

### Sample signs attain interpolation norms

**Remember:** Choose sample signs to make every basis term add.

*True by definition.* MSC 41A05 (Interpolation in approximation theory). arXiv math.NA. Level 3: graduate.

**Definition.** Use distinct interpolation nodes in a compact real interval. For each node, take the basis polynomial of degree below the node count that equals one there and zero at the other nodes. Define the Lebesgue constant as the maximum over the interval of the sum of their absolute values.

**Problem.** This constant equals the largest possible maximum absolute value of the interpolant when the continuous input function has absolute value at most one.

**How the definition helps.** The sum formula gives the largest contribution the samples can make at any point (our own). The triangle inequality bounds every interpolant by this sum (our own). At a maximizing point, give each sample the sign of its basis polynomial there, choosing either sign at zero (our own). Join the samples by straight lines and extend constantly to the interval ends (our own). This continuous input attains the bound, identifying the sum formula with the operator norm (our own).

**Paper or page:** [Order of uniform approximation by polynomial interpolation in the complex plane and beyond](https://arxiv.org/abs/2209.07101v3). It says: “L\_{{\\bf {z}}<sub>n</sub>}= \\max <sub>z\\in X</sub> \\, \\sum <sup>n</sup><sub>j=0</sub> \|\\ell \_ {n,j}(z)\|”

**Sources:**

- [Order of uniform approximation by polynomial interpolation in the complex plane and beyond](https://arxiv.org/abs/2209.07101v3)

### Polynomial kernels give polynomial averages

**Remember:** A polynomial kernel turns averaging into a polynomial.

*True by definition. Confidence: medium.* MSC 41A10 (Approximation by polynomials). arXiv math.NA. Level 3: graduate.

**Definition.** Normalize the polynomials (1 − t²)ⁿ to have integral 1 on \[−1, 1\]. Extend them by zero outside that interval. Approximate a function on \[0, 1\] by convolving its zero extension with these kernels.

**Problem.** For 1 ≤ p &lt; ∞, every function in Lᵖ(\[0, 1\]) has polynomial averages that converge to it in the Lᵖ norm.

**How the definition helps.** Every difference x − y from our own interval lies within the polynomial part of the kernel. Integrating against f(y) gives the coefficients of a polynomial in x (our own). The kernels have unit mass and their mass outside every neighborhood of zero tends to zero. Continuity of translations in Lᵖ then gives convergence (our own). Using polynomial kernels replaces a separate polynomial approximation of each smoothed function (our own).

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

**How the definition helps.** With the convolution definition, the relation follows from one splitting of the box and the binomial theorem. Write χ(x) = χ(2x) + χ(2x − 1), a sum of two half boxes. Convolution is commutative, so the (p + 1)-fold convolution of this sum expands by the binomial theorem. Each term is a shifted (p + 1)-fold convolution of the half box, which equals 2 raised to −p times B(2x − j). From the Cox–de Boor recursion, the relation needs an induction on the degree. The work moves to showing that the convolution powers satisfy the recursion. These steps are our own; Wikipedia only links cardinal B-splines with convolution.

**Wikipedia:** [B-spline](https://en.wikipedia.org/wiki/B-spline). It says: “A cardinal B-spline has uniformly spaced knots, therefore interpolation between the knots equals convolution with a smoothing kernel.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the spline by least bending gives zero end curvature for free

**Remember:** Free end slopes force zero end curvature at a minimizer.

*True by definition. Confidence: medium.* MSC 41A15 (Spline approximation), 49K05. arXiv math.NA. Level 3: graduate.

**Definition.** Take nodes x₀ &lt; x₁ &lt; ⋯ &lt; xₙ with n ≥ 1 and a data value at each node. Among functions on \[x₀, xₙ\] with square-integrable second derivative and these values, choose the one with the least integral of the squared second derivative. The usual definition asks for a piecewise cubic with two continuous derivatives and zero second derivative at both ends.

**Problem.** The minimizer s has zero second derivative at x₀ and at xₙ.

**How the definition helps.** The data do not fix the end slopes, so a minimizer must not improve when an end slope changes. So the integral of s″h″ is zero for every allowed h that vanishes at the nodes. On each piece between nodes, s is a cubic, and integration by parts leaves only boundary terms. At x₀ the remaining term is s″(x₀)h′(x₀), and h′(x₀) is arbitrary, so s″(x₀) = 0. The usual definition puts this condition in by hand, and the work moves to existence and to proving that the pieces are cubics. Holladay’s 1957 theorem connects the two definitions. These proof steps are our own.

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

**Definition.** Fix n ≥ 0 and a finite positive measure with infinite support on a compact real interval. Choose real polynomials of degrees zero through n, normalized so their pairwise product integrals vanish for different degrees and equal one for matching degrees. Form K(a, x) by summing each polynomial’s value at a times its value at x. At a fixed real point a, divide by K(a, a), which is positive because the constant term contributes.

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

**How the definition helps.** The Haar condition lets any r rows with maximum error determine the coefficients (our own argument). Suppose two best fits exist and take their midpoint, also a best fit. Both fits must agree wherever the midpoint reaches its maximum absolute error. With fewer than r such rows, one could interpolate their errors and move slightly toward the data, improving the fit. Thus the fits agree on enough rows to coincide. For an exact fit, full column rank gives uniqueness directly. Without the Haar condition, the column (1, 0) fits (0, 1) equally well with any coefficient between −1 and 1.

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

**How the definition helps.** Disjoint interiors let continuous inputs approximate a separate sign on each triangle. In our own proof, choose a point maximizing the sum and use the basis signs there. Taper each sign to zero near the triangle edges. The averages approach the required signs, while the triangle inequality gives the upper bound. In our own example, fitting a line to averages on \[0,2\] and \[1,3\] gives a basis sum of three at either endpoint. The overlap cancels opposite contributions, reducing the maximum amplification to two.

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

**Problem.** For any input in the filter’s normed space, the output error is at least the least achievable error through degree n + m − 1. It is at most the least error through degree n − m times 1 + ‖T‖. Here ‖T‖ is the largest amplification of the weighted norm, understood as a supremum.

**How the definition helps.** The two degree cutoffs give comparison polynomials for opposite sides of the estimate (our own). The output itself gives the lower bound (our own). Subtracting any preserved polynomial leaves the output error unchanged, so the triangle inequality gives the upper bound (our own). The paper proves a bound on ‖T‖ independent of n and m under additional weight and bandwidth conditions (our own).

**Paper or page:** [De la Vallée Poussin filtered polynomial approximation on the half line](https://arxiv.org/abs/2402.08358v1). It says: “E<sub>n+m-1</sub>(f)<sub>u</sub>\\le \\\| \[f-\\mathcal{V}n<sup>m</sup>(w\\alpha ,f)\]u\\\| \\le {\\mathcal{C}}E<sub>n-m</sub>(f)<sub>u</sub>”

**Sources:**

- [De la Vallée Poussin filtered polynomial approximation on the half line](https://arxiv.org/abs/2402.08358v1)
