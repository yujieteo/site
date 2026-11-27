### Lagrange basis functions separate interpolation data

**Remember:** Each basis polynomial reads one data value and ignores the others.

*True by definition.* MSC 41A05 (Interpolation in approximation theory), 15A03. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For n + 1 distinct nodes, define one basis polynomial for each node. Multiply the factors x minus each of the other nodes, then scale the product to give one at the chosen node. The monomial basis instead uses successive powers of x.

**Problem.** For n + 1 distinct real nodes and arbitrary real values there, exactly one polynomial of degree at most n takes those values.

**How the definition helps.** At any node, only its own basis polynomial contributes, so the weighted sum takes the prescribed value (our own). The work moves to proving that these polynomials form a basis (our own). Evaluating a linear combination at each node proves independence, and the number of polynomials equals the dimension (our own).

**Paper or page:** [Lagrange Interpolation Formula/Formulation 1](https://proofwiki.org/wiki/Lagrange_Interpolation_Formula/Formulation_1). It says: “Then there exists a unique polynomial P ∈ ℝ\[X\] of degree at most n such that: P(xᵢ) = aᵢ for all i ∈ {0, 1, …, n}”

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

### Padé degree bounds force uniqueness

**Remember:** The required zero is one order beyond the available degree.

*Rules out counterexamples.* MSC 41A21 (Padé approximation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Choose a ratio of polynomials with numerator degree at most m and denominator degree at most n. Require the denominator to be nonzero at the expansion point. A Padé approximant matches the first m + n + 1 Taylor coefficients of the target there.

**Problem.** If a Padé approximant exists with these degree bounds and matching conditions, it is unique as a rational function.

**How the definition helps.** The matching conditions force more vanishing coefficients than a nonzero difference numerator can have. In our own proof, cross-multiply two candidate fractions and subtract. The resulting polynomial has degree at most m + n and vanishes to order at least m + n + 1. It must be zero, so the fractions agree. In our own example, both zero and x match the constant coefficient of the zero function at zero. With m = 1 and n = 0, the second coefficient rules out x.

**Wikipedia:** [Padé approximant](https://en.wikipedia.org/wiki/Pad%C3%A9_approximant). It says: “When it exists, the Padé approximant is unique as a formal power series for the given m and n.”

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

### Imaginary-axis interpolation forces unit modulus

**Remember:** Enough matches force the entire axis onto the unit circle.

*True by definition.* MSC 41A20 (Approximation by rational functions), 41A05. arXiv math.NA. Level 3: graduate.

**Definition.** Use a rational approximant with numerator and denominator degrees at most n. Require it to match the exponential at 2n + 1 distinct imaginary points where it has no pole. This is a way to construct a rational approximant with unit modulus on the imaginary axis.

**Problem.** Any such rational function has absolute value one on the imaginary axis wherever it is defined.

**How the definition helps.** Interpolation turns a condition on the whole imaginary axis into enough zeros to force a polynomial identity. In our own proof, write the fraction as P/Q and set z = it for real t. The difference \|P(it)\|² − \|Q(it)\|² is a polynomial in t of degree at most 2n. It vanishes at every match since the exponential has modulus one there. Its 2n + 1 distinct zeros force it to vanish identically. Constructing an interpolant with the required degrees is a separate problem.

**Paper or page:** [The error of Chebyshev approximations on shrinking domains](https://arxiv.org/abs/2410.04885v1). It says: “An (n,n)-rational function is unitary if and only if it interpolates the exponential function at ≥ 2n+1 nodes on the imaginary axis, counting multiplicity.”

**Sources:** none listed. No primary source with a working link was found.

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
