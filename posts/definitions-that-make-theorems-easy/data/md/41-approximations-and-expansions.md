### The Hermite–Genocchi integral makes divided differences continuous at repeated nodes

**Remember:** When all nodes meet, the integrand is constant and only the volume remains.

*True by definition. Confidence: medium.* MSC 41A05 (Interpolation in approximation theory), 26A24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The usual divided difference f\[x₀, …, xₙ\] is a recursion of difference quotients on distinct nodes. Instead, define it as the integral of f⁽ⁿ⁾(t₀x₀ + … + tₙxₙ) over the simplex of weights tᵢ ≥ 0 with sum 1. Measured in the free weights t₁, …, tₙ, this simplex has volume 1/n!. This is the Hermite–Genocchi formula.

**Problem.** Let f have n continuous derivatives on an interval. Then its order n divided difference extends continuously to repeated nodes. When all n + 1 nodes equal x, its value is f⁽ⁿ⁾(x)/n!.

**How the definition helps.** With the integral definition, both claims follow from continuity of the integrand (our own). The integrand depends continuously on the nodes and the simplex is compact, so the integral is continuous in the nodes (our own). When every node is x, the integrand is the constant f⁽ⁿ⁾(x), so the integral is f⁽ⁿ⁾(x)/n! (our own). The work moves into the proof that the integral satisfies the recursion at distinct nodes (our own).

**Wikipedia:** [Divided differences](https://en.wikipedia.org/wiki/Divided_differences). It says: “the divided difference can be expressed as an integral over a n-simplex Δₙ:”

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
