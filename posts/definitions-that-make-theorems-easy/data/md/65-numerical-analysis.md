### Sharing endpoint slopes joins Hermite pieces without corners

**Remember:** Match heights and slopes to join the pieces smoothly.

*True by definition.* MSC 65D07 (Numerical computation using splines). arXiv math.NA. Level 1: early undergraduate.

**Definition.** A cubic Hermite spline uses a polynomial of degree at most three between each pair of neighboring nodes. At each node, both adjoining pieces take the same prescribed value and the same prescribed slope.

**Problem.** The pieces form a continuously differentiable interpolant of the given values and slopes.

**How the definition helps.** Equal values at each node join the pieces, and equal slopes join their derivatives, so no corner can form (our own argument). Each piece exists by the two-node Hermite interpolation theorem.

**Wikipedia:** [Cubic Hermite spline](https://en.wikipedia.org/wiki/Cubic_Hermite_spline). It says: “The resulting spline will be continuous and will have continuous first derivative.”

**Sources:** none listed. No primary source with a working link was found.

### Centering Simpson’s interpolant makes the cubic term cancel

**Remember:** The missing cubic is odd, so its integral is zero.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas), 65D30. arXiv math.NA. Level 1: early undergraduate.

**Definition.** Simpson's one-panel rule integrates the quadratic that interpolates f at the two endpoints and the midpoint. Measured from the midpoint, the nodes −h, 0 and h are symmetric about zero.

**Problem.** Simpson’s one-panel rule is exact for every polynomial of degree at most three.

**How the definition helps.** For a cubic f, the interpolation error vanishes at −h, 0 and h, so it is a constant multiple of x(x − h)(x + h), an odd function (our own). An odd function integrates to zero over \[−h, h\], so the rule is exact on cubics.

**Wikipedia:** [Simpson's rule](https://en.wikipedia.org/wiki/Simpson%27s_rule). It says: “The approximate equality in the rule becomes exact if f is a polynomial up to and including 3rd degree.”

**Sources:** none listed. No primary source with a working link was found.

### Integrating the interpolant gives exactness on low degree polynomials

**Remember:** A low-degree polynomial is its own interpolant.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas), 65D30. arXiv math.NA. Level 1: early undergraduate.

**Definition.** An interpolatory quadrature rule on a bounded interval samples f at n distinct points. It integrates the unique polynomial of degree at most n − 1 that matches those samples.

**Problem.** Every interpolatory rule with n distinct nodes integrates all polynomials of degree at most n − 1 exactly.

**How the definition helps.** A polynomial of degree at most n − 1 matches its own samples, so by uniqueness it is its own interpolant and the rule integrates it exactly (our own). Integrating each Lagrange basis polynomial gives the weight of the usual sum.

**Wikipedia:** [Newton–Cotes formulas](https://en.wikipedia.org/wiki/Newton%E2%80%93Cotes_formulas). It says: “The weights can be computed as the integral of Lagrange basis polynomials.”

**Sources:** none listed. No primary source with a working link was found.

### Treating a residual as a data change gives exact backward error

**Remember:** Change only the right side and the residual is the whole error.

*True by definition. Confidence: medium.* MSC 65F35 (Numerical computation of matrix norms, conditioning, scaling). arXiv math.NA. Level 1: early undergraduate.

**Definition.** For a proposed solution v of Ax = b, the absolute right-side backward error is the smallest norm, in a chosen vector norm, of a change to b alone that makes v an exact solution.

**Problem.** For a computed vector v and any vector norm, the absolute right-side backward error equals ‖b − Av‖.

**How the definition helps.** With A fixed, the only change that works is Av − b, whose norm is ‖b − Av‖ (our own). Allowing A to change too gives a different minimization problem.

**Wikipedia:** [Residual (numerical analysis)](https://en.wikipedia.org/wiki/Residual_%28numerical_analysis%29). It says: “If the exact value of x is not known, the residual can be computed, whereas the error cannot.”

**Sources:** none listed. No primary source with a working link was found.

### Sign brackets certify bisection error

**Remember:** Keep opposite signs and halve the error bound.

*Rules out counterexamples.* MSC 65H05 (Numerical computation of solutions to single equations). arXiv math.NA. Level 1: early undergraduate.

**Definition.** A sign bracket for a continuous real function is a closed interval whose endpoint values have opposite signs. Bisection keeps the half that is still a sign bracket, and stops if the midpoint is a root.

**Problem.** In exact arithmetic, each retained interval contains a root within half its width of its midpoint.

**How the definition helps.** By the intermediate value theorem every sign bracket contains a root, which lies within half the width of the midpoint. Each step halves that bound. Without the sign condition, x² + 1 on \[−1, 1\] has no root at all (our own).

**Wikipedia:** [Bisection method](https://en.wikipedia.org/wiki/Bisection_method). It says: “Once the process starts, the signs at the left and right ends of the interval remain the same for all iterations.”

**Sources:** none listed. No primary source with a working link was found.

### Romberg estimates as extrapolation to zero cancel the leading error terms

**Remember:** Interpolation at zero removes every fitted power of the spacing.

*True by definition. Confidence: medium.* MSC 65B05 (Extrapolation to the limit, deferred corrections), 65D32. arXiv math.NA. Level 2: later undergraduate.

**Definition.** Fit a polynomial p of degree at most k through the trapezoidal estimates as a function of the squared spacing, p(hᵢ²) = T(hᵢ), for k + 1 distinct positive spacings hᵢ. The Romberg estimate is p(0), the value at zero spacing.

**Problem.** Suppose T(h) = I + c₁h² + … + cₖh²ᵏ + O(h²ᵏ⁺²), where I is the integral. Take spacings h₀, …, hₖ that are fixed distinct multiples of h. Then the Romberg estimate differs from I by O(h²ᵏ⁺²).

**How the definition helps.** Interpolation reproduces the polynomial part I + c₁h² + … + cₖh²ᵏ exactly, and its value at zero is I (our own). Fixed spacing ratios give fixed interpolation weights, so the weighted remainders stay O(h²ᵏ⁺²) (our own). Neville's algorithm computes this same value recursively.

**Wikipedia:** [Romberg's method](https://en.wikipedia.org/wiki/Romberg%27s_method). It says: “by applying Richardson extrapolation repeatedly on the trapezium rule or the rectangle rule”

**Sources:**

- [Lewis Fry Richardson, The approximate arithmetical solution by finite differences of physical problems involving differential equations, with an application to the stresses in a masonry dam (1911).](https://doi.org/10.1098/rsta.1911.0009)

### Periodized Bernoulli polynomials turn Euler–Maclaurin into integration by parts

**Remember:** Antidifferentiate the sawtooth periodically, then integrate by parts each time.

*Makes the theorem clean to state or prove.* MSC 65B15 (Euler-Maclaurin formula in numerical analysis), 41A60. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Start from the sawtooth P₁(x), the fractional part of x minus ½. For j ≥ 2, Pⱼ is the continuous period-one function with mean zero and derivative jPⱼ₋₁ between consecutive integers, a periodic antiderivative of the previous one.

**Problem.** Suppose m&lt;n are integers and f has 2p continuous derivatives on \[m,n\], with p≥1. Writing \[g\]=g(n)−g(m), Euler–Maclaurin gives f(m+1)+⋯+f(n) = ∫ₘⁿ f(x)dx+\[f\]/2+∑ⱼ₌₁ᵖ P₂ⱼ(0)\[f⁽²ʲ⁻¹⁾\]/(2j)!−∫ₘⁿ P₂ₚ(x)f⁽²ᵖ⁾(x)dx/(2p)!.

**How the definition helps.** Each Pⱼ is a periodic antiderivative of the last, so each new correction term is one more integration by parts (our own). P₁ gives the trapezoid error on each unit interval, and continuity cancels the boundary terms at interior integers. Symmetry about ½ and the zero means give Pⱼ(0) = 0 for odd j ≥ 3.

**nLab:** [Euler-MacLaurin formula](https://ncatlab.org/nlab/show/Euler-MacLaurin+formula). It says: “It involves Bernoulli numbers.”

**Paper or page:** [The Leray transform: distinguished measures, symmetries and polygamma inequalities](https://arxiv.org/abs/2401.17490v3). It says: “P₁(x) = B₁(x−⌊x⌋), B₁(x) = x−½ is the first Bernoulli polynomial”

**Sources:** none listed. No primary source with a working link was found.

### Adding the evaluation point makes interpolation error one Newton term

**Remember:** Append the point of interest and read off the one extra term.

*True by definition.* MSC 65D05 (Numerical interpolation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For k distinct nodes, the divided difference is the coefficient of degree k − 1 in their interpolating polynomial, including when it is zero. Adding a node to the Newton form adds just one term: this new coefficient times the product of x minus each old node.

**Problem.** Let p interpolate f at n distinct nodes with degree less than n. Suppose x differs from the nodes and f has n continuous derivatives on an interval containing them and x. Then f(x) − p(x) equals f⁽ⁿ⁾(ξ) ∕ n! times the product of x minus each node, for some interior ξ.

**How the definition helps.** Treat x as an extra node: the new interpolant is p plus one Newton term and equals f at x, so f(x) − p(x) is that term (our own). The mean value theorem for divided differences turns its coefficient into f⁽ⁿ⁾(ξ)/n! for some ξ between the outermost points.

**Wikipedia:** [Divided differences](https://en.wikipedia.org/wiki/Divided_differences). It says: “f\[x₀, …, xₙ\] = f⁽ⁿ⁾(ξ) ∕ n!”

**Sources:** none listed. No primary source with a working link was found.

### Counting derivative data as repeated zeros makes Hermite interpolation unique

**Remember:** A zero of multiplicity m uses up m degrees.

*True by definition.* MSC 65D05 (Numerical interpolation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Hermite interpolation counts a node of multiplicity m as m conditions, the value and the first m − 1 derivatives, so two interpolants differ by a polynomial with a zero of multiplicity m there. With N conditions in total, the interpolating polynomial must have degree less than N.

**Problem.** Any such derivative data at distinct real nodes determine exactly one Hermite interpolating polynomial.

**How the definition helps.** The difference of two interpolants has degree below N but N zeros counted with multiplicity, so it is zero (our own). The linear map from coefficients to data is therefore injective, and since both spaces have dimension N it is also onto.

**Wikipedia:** [Hermite interpolation](https://en.wikipedia.org/wiki/Hermite_interpolation). It says: “A theorem, commonly known as the Hermite interpolation theorem, asserts the existence and uniqueness of the resulting polynomial.”

**Sources:** none listed. No primary source with a working link was found.

### Divided differences as leading coefficients are symmetric in the nodes

**Remember:** Reordering the data cannot change the unique interpolating polynomial.

*True by definition. Confidence: medium.* MSC 65D05 (Numerical interpolation), 41A05. arXiv math.NA. Level 2: later undergraduate.

**Definition.** Given n+1 distinct nodes x₀, …, xₙ, interpolate the data by the unique polynomial of degree at most n. Its coefficient of xⁿ defines the divided difference f\[x₀, …, xₙ\], including when that coefficient vanishes.

**Problem.** f\[x₀, …, xₙ\] does not change when the nodes are permuted.

**How the definition helps.** The interpolating polynomial depends only on the set of data points, not on their order, so its leading coefficient does not either. From the recursive definition, symmetry needs an induction through the theorem that leading coefficients satisfy the recursion. This argument is our own.

**Wikipedia:** [Divided differences](https://en.wikipedia.org/wiki/Divided_differences). It says: “Divided differences are symmetric”

**Sources:** none listed. No primary source with a working link was found.

### Falling factorials make Newton’s forward interpolation triangular

**Remember:** One forward difference drops the basis index by one.

*True by definition.* MSC 65D05 (Numerical interpolation), 39A70. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The normalized falling factorials F₀(x) = 1 and Fₖ(x) = x(x−1)⋯(x−k+1)/k! play the role of powers for the forward difference Δf(x) = f(x+1) − f(x). One difference shifts the index down, ΔFₖ = Fₖ₋₁, and Fₖ(0) = 0 for k ≥ 1 (our own).

**Problem.** For data f(0), …, f(m), the unique interpolating polynomial of degree at most m has coefficient Δᵏf(0) on Fₖ for each k ≤ m.

**How the definition helps.** Applying Δ k times and evaluating at zero keeps only the coefficient of Fₖ, since every other basis term then vanishes at zero (our own). Interpolation at the distinct points 0, …, m supplies existence and uniqueness.

**nLab:** [falling factorial](https://ncatlab.org/nlab/show/falling+factorial). It says: “it is the falling factorial xᵏ̲ that plays a role analogous to the ordinary power xᵏ.”

**Sources:** none listed. No primary source with a working link was found.

### Normalizing barycentric weights removes apparent poles from interpolation

**Remember:** Multiplying both sums by the node polynomial removes their poles.

*True by definition.* MSC 65D05 (Numerical interpolation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For distinct nodes, let ω(x) be the product of x − t over all nodes t, and give node t the weight w(t) = 1/ω′(t). The barycentric interpolant divides the sum of f(t)w(t)/(x − t) by the sum of w(t)/(x − t). Each term ω(x)w(t)/(x − t) is the Lagrange basis polynomial of t, equal to one at t and zero at the other nodes (our own).

**Problem.** Away from the nodes, the barycentric quotient equals the Lagrange interpolating polynomial. At a node its limit equals the prescribed value there.

**How the definition helps.** Multiplying both sums by ω therefore gives the Lagrange polynomial on top and the sum of the basis polynomials, which is one by uniqueness of interpolation, below. So the quotient is the Lagrange polynomial away from the nodes, and continuity gives the stated limits.

**Wikipedia:** [Lagrange polynomial](https://en.wikipedia.org/wiki/Lagrange_polynomial). It says: “This is called the second form or true form of the barycentric interpolation formula.”

**Sources:**

- [Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation (2004)](https://doi.org/10.1137/S0036144502417715)

### Writing interpolants in Newton’s basis keeps old coefficients when nodes are added

**Remember:** A new Newton term vanishes at every old node.

*True by definition. Confidence: medium.* MSC 65D05 (Numerical interpolation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** The Newton form writes the interpolant of distinct nodes x₀, …, xₙ in the basis N₀(x) = 1 and Nⱼ(x) = (x − x₀)⋯(x − xⱼ₋₁) for 1 ≤ j ≤ n. Each new basis polynomial vanishes at every earlier node.

**Problem.** Adding a new distinct node at the end of the list adds one Newton term and leaves the earlier coefficients unchanged.

**How the definition helps.** Adding a multiple of the new basis polynomial keeps every old interpolation condition, because it vanishes at the old nodes. It is nonzero at the new node, so exactly one multiple fits the new value, and uniqueness makes the sum the new interpolant. In the Lagrange form, every basis polynomial changes instead; these steps are our own.

**Wikipedia:** [Newton polynomial](https://en.wikipedia.org/wiki/Newton_polynomial). It says: “The unique interpolating polynomial can alternatively be constructed using Lagrange polynomials as an alternative basis”

**Sources:** none listed. No primary source with a working link was found.

### De Casteljau's definition keeps Bézier curves inside the control points' convex hull

**Remember:** Averages of points in a convex set stay in that set.

*True by definition. Confidence: medium.* MSC 65D17 (Computer-aided design (modeling of curves and surfaces)), 41A10. arXiv cs.GR, math.NA. Level 2: later undergraduate.

**Definition.** De Casteljau's algorithm evaluates a Bézier curve by replacing each adjacent pair P, Q of control points by the weighted average (1 − t)P + tQ. It repeats with the same t until one point, B(t), remains.

**Problem.** For 0 ≤ t ≤ 1, the curve point B(t) lies in the convex hull of the control points.

**How the definition helps.** For 0 ≤ t ≤ 1, each step takes convex combinations, which stay in the convex hull of the control points. So every intermediate point, including B(t), lies in the hull; this argument is our own.

**Wikipedia:** [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve). It says: “The convex hull of the Bézier polygon contains the Bézier curve.”

**Sources:** none listed. No primary source with a working link was found.

### De Casteljau’s triangle gives exact subdivisions

**Remember:** The two edges of the evaluation triangle trace the two pieces.

*True by definition.* MSC 65D17 (Computer-aided design (modeling of curves and surfaces)). arXiv math.NA, cs.NA. Level 2: later undergraduate.

**Definition.** Run de Casteljau's algorithm at parameter s, replacing each adjacent pair P, Q by (1−s)P + sQ, and stack the rows into a triangle with the control points on top. Subdivision uses the left edge, read downward, and the right edge, read upward, as two new control lists.

**Problem.** The new Bézier curves reproduce the original on \[0,s\] and \[s,1\], with each parameter rescaled to \[0,1\].

**How the definition helps.** Each left edge point is a value of the Bézier blossom, the symmetric function affine in each slot whose diagonal is the curve, with slots filled by 0 and s; the right edge uses s and 1 (our own). Symmetry and affinity then make the left curve at t equal B(st) and the right curve equal B((1−t)s + t) (our own).

**Wikipedia:** [De Casteljau's algorithm](https://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm). It says: “Note that the intermediate points that were constructed are in fact the control points for two new Bézier curves, both exactly coincident with the old one.”

**Sources:** none listed. No primary source with a working link was found.

### Weighted coordinates preserve Bézier projections

**Remember:** Transform the weighted vectors first and divide only at the end.

*True by definition.* MSC 65D17 (Computer-aided design (modeling of curves and surfaces)), 41A20. arXiv math.NA, cs.NA. Level 2: later undergraduate.

**Definition.** Lift each control point Pᵢ with weight wᵢ &gt; 0 to the vector (wᵢPᵢ, wᵢ) and evaluate the ordinary Bézier curve of these vectors by repeated linear interpolation. The rational Bézier curve divides the first coordinates by the last, wherever that coordinate is nonzero.

**Problem.** Applying a projective change of coordinates to a rational Bézier curve is equivalent to applying its linear matrix to the weighted control vectors. The statement holds wherever the resulting last coordinate is nonzero.

**How the definition helps.** A matrix commutes with every linear interpolation step, so applying it to the lifted control vectors transforms the whole lifted curve (our own). A projective change of coordinates is exactly such a matrix action followed by division by the last coordinate.

**Wikipedia:** [De Casteljau's algorithm](https://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm), [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve). It says: “The numerator is a weighted Bernstein-form Bézier curve and the denominator is a weighted sum of Bernstein polynomials.”

**Sources:** none listed. No primary source with a working link was found.

### Symmetric sampling makes the centered derivative second order

**Remember:** Subtract opposite samples and the quadratic terms cancel.

*True by definition.* MSC 65D25 (Numerical differentiation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** The centered difference quotient at x is \[f(x + h) − f(x − h)\]/(2h). It samples equally far on both sides of x, so the quadratic Taylor terms of the two samples are equal and cancel on subtraction.

**Problem.** If f has three continuous derivatives near x, the centered difference quotient differs from f′(x) by at most a constant times h² for small h.

**How the definition helps.** After the quadratic terms cancel, Taylor's theorem bounds the remaining error of each sample by a constant times \|h\|³ (our own). Dividing by 2h leaves an error bounded by a constant times h². A one-sided quotient generally keeps an error proportional to h.

**Wikipedia:** [Finite difference](https://en.wikipedia.org/wiki/Finite_difference). It says: “However, the central (also called centered) difference yields a more accurate approximation.”

**Sources:** none listed. No primary source with a working link was found.

### Matching endpoint derivatives cancels trapezoid corrections at every order

**Remember:** Periodic endpoints cancel all the boundary corrections.

*Rules out counterexamples.* MSC 65D32 (Numerical quadrature and cubature formulas), 65B15, 41A60. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A smooth period-one function has continuous derivatives of every order and satisfies f(x + 1) = f(x) for every x, so every derivative takes the same value at 0 and at 1.

**Problem.** On \[0,1\], the trapezoidal rule with N equal panels has error O(N⁻²ᵖ) for every positive integer p when f is smooth and period-one.

**How the definition helps.** Every boundary correction in the Euler–Maclaurin formula is a difference of a derivative's values at 1 and at 0, so all of them vanish (our own). The remainder is at most a constant times N⁻²ᵖ because the derivative of order 2p is bounded (our own). For contrast, the nonperiodic f(x) = x² gives error 1/(6N²).

**Wikipedia:** [Euler–Maclaurin formula](https://en.wikipedia.org/wiki/Euler%E2%80%93Maclaurin_formula). It says: “the superior performance of the trapezoidal rule on smooth periodic functions”

**Sources:** none listed. No primary source with a working link was found.

### Orthogonal-polynomial nodes make Gaussian quadrature exact through degree 2n − 1

**Remember:** The part divisible by the node polynomial vanishes both ways.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas), 41A55. arXiv math.NA. Level 2: later undergraduate.

**Definition.** For a positive weight on an interval with finite moments, let pₙ have degree n and be orthogonal to every polynomial of lower degree. The n-node Gaussian rule samples at the n roots of pₙ and integrates the degree-below-n interpolant against the weight.

**Problem.** The n-node Gaussian rule integrates every polynomial of degree at most 2n − 1 exactly.

**How the definition helps.** Divide a polynomial of degree below 2n by pₙ to get qpₙ + r, with q and r of degree below n. The part qpₙ has integral zero by orthogonality and zero samples at the roots, while r is its own interpolant. The orthogonal polynomial root theorem supplies n distinct interior nodes (our own).

**Wikipedia:** [Gaussian quadrature](https://en.wikipedia.org/wiki/Gaussian_quadrature). It says: “This proves that for any polynomial h(x) of degree 2n − 1 or less, its integral is given exactly by the Gaussian quadrature sum.”

**Sources:**

- [C. G. J. Jacobi, Ueber Gauß neue Methode, die Werthe der Integrale näherungsweise zu finden (1826).](https://doi.org/10.1515/crll.1826.1.301)

### Squared polynomials give positive Gaussian weights

**Remember:** A Gaussian weight is the integral of a square.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas), 41A55. arXiv math.NA. Level 2: later undergraduate.

**Definition.** In an n-node Gaussian rule for a positive interval weight w, the weight of node i is the integral of wℓᵢ². Here ℓᵢ is the polynomial of degree below n that is one at node i and zero at the other nodes.

**Problem.** Every Gaussian weight is positive for a positive weight function on an interval with the required finite moments.

**How the definition helps.** A positive weight function times a nonzero square has positive integral. The square ℓᵢ² agrees with ℓᵢ at every node and has degree 2n − 2, so exactness through degree 2n − 1 makes the two integrals equal (our own). Proving that exactness carries the work.

**Wikipedia:** [Gaussian quadrature](https://en.wikipedia.org/wiki/Gaussian_quadrature). It says: “Since both ω(x) and f(x) are non-negative functions, it follows that wᵢ &gt; 0.”

**Sources:** none listed. No primary source with a working link was found.

### The node polynomial forces Gaussian quadrature nodes to be unique

**Remember:** Multiply by the node polynomial and the whole sample sum vanishes.

*Makes the theorem clean to state or prove.* MSC 65D32 (Numerical quadrature and cubature formulas), 65D30. arXiv math.NA. Level 2: later undergraduate.

**Definition.** The node polynomial of a rule with n distinct nodes is the product of x − t over its nodes t, so it vanishes at every sample. A polynomial is orthogonal to lower degrees on \[−1, 1\] if its product with every lower-degree polynomial integrates to zero there.

**Problem.** On \[−1,1\] with weight one, exactly one rule with n nodes integrates every polynomial through degree 2n − 1 exactly, up to node order.

**How the definition helps.** An exact rule gives zero for the node polynomial times any lower-degree polynomial, so the node polynomial is orthogonal to lower degrees (our own). Two such polynomials with leading coefficient one differ by a lower-degree polynomial orthogonal to itself, so they coincide. The nodes then fix the weights by interpolation, and Gauss–Legendre quadrature supplies existence.

**Wikipedia:** [Gauss–Legendre quadrature](https://en.wikipedia.org/wiki/Gauss%E2%80%93Legendre_quadrature). It says: “is the unique choice that allows the quadrature rule to integrate degree 2n − 1 polynomials exactly.”

**Sources:** none listed. No primary source with a working link was found.

### The squared node polynomial sets the Gaussian exactness limit

**Remember:** A square can vanish at every node and still have positive area.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas), 65D30. arXiv math.NA. Level 2: later undergraduate.

**Definition.** A quadrature rule with n nodes replaces an integral by a weighted sum of n function values. Its node polynomial, the product of x minus each node, vanishes at every node, and so does its square, which has degree 2n.

**Problem.** On a bounded interval of positive length, suppose the integration weight is integrable and positive throughout. Every rule using n distinct nodes misses some polynomial of degree 2n.

**How the definition helps.** Every sample of the squared node polynomial is zero, so the rule gives zero, but its weighted integral is positive. This works for every choice of nodes and weights (our own). The Gaussian quadrature theorem shows that degree 2n − 1 can be reached.

**Wikipedia:** [Gaussian quadrature](https://en.wikipedia.org/wiki/Gaussian_quadrature). It says: “constructed to yield an exact result for polynomials of degree 2n − 1 or less”

**Sources:** none listed. No primary source with a working link was found.

### Leading corner determinants detect zero pivots before LU factorization

**Remember:** Each pivot reveals the determinant of one larger leading corner.

*Rules out counterexamples.* MSC 65F05 (Direct numerical methods for linear systems and matrix inversion). arXiv math.NA. Level 2: later undergraduate.

**Definition.** A leading principal minor is the determinant of a top-left square block of a matrix, and the test uses every block size, not just the whole matrix. In elimination without row exchanges, the k-th leading minor is the product of the first k pivots (our own).

**Problem.** An invertible matrix admits triangular factorization A = LU without row exchanges exactly when every leading principal minor is nonzero.

**How the definition helps.** So while the earlier minors are nonzero, each new pivot is the ratio of two successive minors, and it is nonzero exactly when the new minor is (our own). Hence nonzero minors let elimination finish, and an invertible factorization forces every minor to be nonzero. The swapped identity, with rows (0,1) and (1,0), is invertible but has first pivot zero.

**Wikipedia:** [LU decomposition](https://en.wikipedia.org/wiki/LU_decomposition). It says: “it admits an LU (or LDU) factorization if and only if all its leading principal minors are nonzero”

**Sources:** none listed. No primary source with a working link was found.

### Measuring lengths with A gives the Cholesky factor by Gram–Schmidt

**Remember:** Measure with A, make the basis perpendicular, read off R.

*True by definition. Confidence: medium.* MSC 65F05 (Direct numerical methods for linear systems and matrix inversion). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For a symmetric positive definite matrix A, measure lengths and angles with the inner product ⟨u, v⟩ = uᵀAv instead of the dot product. Then A is exactly the table of inner products of the standard basis vectors.

**Problem.** Every real symmetric positive definite matrix A factors as RᵀR with upper triangular R and a positive diagonal.

**How the definition helps.** Gram–Schmidt in this inner product writes each standard basis vector eⱼ using only the first j new perpendicular unit vectors, so its coordinates form an upper triangular R with positive diagonal (our own). Perpendicular unit coordinates turn inner products into dot products, so Aᵢⱼ = ⟨eᵢ, eⱼ⟩ is the (i, j) entry of RᵀR.

**Paper or page:** [Characterisation of Real Symmetric Positive Definite Matrix/Necessary Condition](https://proofwiki.org/wiki/Characterisation_of_Real_Symmetric_Positive_Definite_Matrix/Necessary_Condition). It says: “there exists a nonsingular matrix C such that A = CᵀC.”

**Sources:** none listed. No primary source with a working link was found.

### Positive Cholesky diagonals remove the square root sign ambiguity

**Remember:** Choose the positive square root at every diagonal entry.

*Rules out counterexamples.* MSC 65F05 (Direct numerical methods for linear systems and matrix inversion). arXiv math.NA. Level 2: later undergraduate.

**Definition.** The Cholesky factor of a real symmetric positive definite A is the lower triangular L with A = LLᵀ and strictly positive diagonal entries. This picks the positive square root at each diagonal entry.

**Problem.** Whenever a real symmetric positive definite matrix has a Cholesky factor with positive diagonal, that factor is unique.

**How the definition helps.** If L₁ and L₂ both work, L₂⁻¹L₁ is lower triangular and orthogonal, hence diagonal with entries ±1 (our own). Positive diagonals force every entry to be +1, so L₁ = L₂. Without positivity, L and −L both work.

**Wikipedia:** [Cholesky decomposition](https://en.wikipedia.org/wiki/Cholesky_decomposition). It says: “the lower triangular matrix is unique if we impose the diagonal to be strictly positive.”

**Sources:**

- [André-Louis Cholesky, Sur la résolution numérique des systèmes d’équations linéaires (1910 manuscript, reproduced in La méthode de Cholesky)](https://numdam.org/articles/10.24033/rhm.30/)

### Schur complements split definiteness tests

**Remember:** Eliminate the first block to see the remaining energy.

*True by definition.* MSC 65F05 (Direct numerical methods for linear systems and matrix inversion). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Take a real symmetric block matrix with invertible upper left block A, upper right block B, and lower right block C. Its Schur complement S = C − BᵀA⁻¹B is what remains of the quadratic form after completing the square in the first block variable (our own).

**Problem.** The full matrix is positive definite exactly when A and its Schur complement are both positive definite.

**How the definition helps.** With u = x + A⁻¹By, the quadratic form becomes uᵀAu + yᵀSy (our own). The change from (x, y) to (u, y) is invertible, so the form is positive definite exactly when both A and S are.

**Wikipedia:** [Schur complement](https://en.wikipedia.org/wiki/Schur_complement). It says: “If A is invertible, then X is positive definite if and only if A and its complement X/A are both positive definite”

**Sources:**

- [Emilie V. Haynsworth, Determination of the inertia of a partitioned Hermitian matrix (1968)](https://doi.org/10.1016/0024-3795(68)90050-5)

### Unit diagonals remove the freedom to rescale LU factors

**Remember:** A diagonal of ones fixes the scale of each column.

*Rules out counterexamples.* MSC 65F05 (Direct numerical methods for linear systems and matrix inversion). arXiv math.NA. Level 2: later undergraduate.

**Definition.** A unit LU factorization writes A = LU with U upper triangular and L lower triangular with every diagonal entry equal to one. The unit diagonal fixes how scale is shared between L and U.

**Problem.** If an invertible matrix has such an LU factorization, its factors are unique.

**How the definition helps.** From L₁U₁ = L₂U₂ we get L₂⁻¹L₁ = U₂U₁⁻¹, a lower triangular matrix with unit diagonal equal to an upper triangular one, so both are the identity (our own). Without the unit diagonal, I = I·I = (2I)(I/2) gives two factorizations.

**Wikipedia:** [LU decomposition](https://en.wikipedia.org/wiki/LU_decomposition). It says: “the LU factorization is also unique”

**Sources:** none listed. No primary source with a working link was found.

### Coordinate minima make Gauss–Seidel decrease the energy

**Remember:** Each coordinate update takes the bottom of a parabola.

*True by definition. Confidence: medium.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For symmetric positive definite A, the energy F(x) = ½xᵀAx − bᵀx is lowest exactly at the solution of Ax = b. Gauss–Seidel, in coordinate form, moves each coordinate in turn to the minimum of F along that coordinate, using all the latest values.

**Problem.** For Ax = b, a full Gauss–Seidel sweep strictly lowers F unless the current vector already solves the system.

**How the definition helps.** Each changed coordinate strictly lowers F, since it moves to the bottom of an upward-opening parabola. Setting that coordinate's derivative to zero solves its row with the latest values, the usual Gauss–Seidel update (our own). If a sweep changes nothing, every row already holds.

**Wikipedia:** [Gauss–Seidel method](https://en.wikipedia.org/wiki/Gauss%E2%80%93Seidel_method). It says: “the algorithm converges to the solution”

**Sources:** none listed. No primary source with a working link was found.

### Defining stationary steps by a splitting isolates the error multiplier

**Remember:** The constant term disappears when you subtract the true solution.

*Makes the theorem clean to state or prove.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 2: later undergraduate.

**Definition.** A stationary iteration uses the same splitting A = M − N at every step, with A and M invertible: from a guess x, the next guess y solves My = Nx + b. Subtracting the equation for the exact solution shows that each step multiplies the error by M⁻¹N (our own).

**Problem.** This iteration for Ax = b converges from every starting vector exactly when every eigenvalue of M⁻¹N has magnitude less than one.

**How the definition helps.** So convergence from every starting vector means the powers of M⁻¹N tend to zero. The matrix-power theorem says this happens exactly when every eigenvalue of M⁻¹N has magnitude below one.

**Wikipedia:** [Iterative method](https://en.wikipedia.org/wiki/Iterative_method). It says: “Basic examples of stationary iterative methods use a splitting of the matrix A”

**Sources:** none listed. No primary source with a working link was found.

### Energy minimization makes conjugate gradient residuals mutually perpendicular

**Remember:** Each residual is perpendicular to every earlier search space.

*True by definition.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For real symmetric positive definite A, step k of conjugate gradient minimizes the energy F(x) = ½xᵀAx − bᵀx over x₀ plus the span of r₀, Ar₀, …, Aᵏ⁻¹r₀, where r₀ = b − Ax₀. At this minimum, the residual b − Ax, the negative gradient, is perpendicular to that whole span.

**Problem.** In exact arithmetic, the residuals b − Ax from distinct conjugate gradient steps are mutually perpendicular.

**How the definition helps.** Each earlier residual is r₀ minus A times an earlier correction, so it lies in the current span (our own). The current residual is perpendicular to that span, hence to every earlier residual. Matching these minimizers with the usual conjugate gradient recurrence takes a separate proof.

**Wikipedia:** [Conjugate gradient method](https://en.wikipedia.org/wiki/Conjugate_gradient_method). It says: “proving the orthogonality of the residuals and conjugacy of the search directions”

**Sources:**

- [Magnus R. Hestenes and Eduard Stiefel, Methods of Conjugate Gradients for Solving Linear Systems (1952)](https://nvlpubs.nist.gov/nistpubs/jres/049/6/v49.n06.a08.pdf)

### Moving the diagonal to the left exposes Jacobi contraction

**Remember:** After diagonal scaling, the absolute off-diagonal row sums are below one.

*Rules out counterexamples.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Jacobi iteration solves each row i for its diagonal variable, using the previous iterate for the others, so each new error entry is a combination of old ones with coefficients −aᵢⱼ/aᵢᵢ. Strict row diagonal dominance, \|aᵢᵢ\| &gt; ∑ⱼ≠ᵢ \|aᵢⱼ\| for every row i, makes the absolute coefficients in each row sum to less than one.

**Problem.** For a strictly row diagonally dominant matrix, Jacobi iteration converges to the solution from every starting vector.

**How the definition helps.** So every new absolute error is at most q times the largest old one, where q &lt; 1 is the largest of these row sums (our own). Iterating drives the error to zero. With rows (1,1,0), (0,1,1), (1,0,1), equality holds and an all-ones error alternates in sign.

**Wikipedia:** [Jacobi method](https://en.wikipedia.org/wiki/Jacobi_method). It says: “A sufficient (but not necessary) condition for the method to converge is that the matrix A is strictly or irreducibly diagonally dominant.”

**Sources:** none listed. No primary source with a working link was found.

### Relaxing toward coordinate minima explains the safe interval for SOR

**Remember:** Land closer to each coordinate minimum, even after overshooting it.

*Rules out counterexamples.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Let A be symmetric positive definite and set F(x) = ½xᵀAx − bᵀx. Successive over-relaxation moves each coordinate in turn by ω times its displacement to the minimum of F along that coordinate, landing \|1 − ω\| times the old distance from that minimum.

**Problem.** For every symmetric positive definite A, successive over-relaxation converges from all starting vectors if 0 &lt; ω &lt; 2.

**How the definition helps.** For 0 &lt; ω &lt; 2, \|1 − ω\| &lt; 1, so each changed coordinate strictly lowers F, and every sweep away from the solution changes some coordinate (our own). The sweep is linear in the error, so compactness of the sphere eᵀAe = 1 makes the decrease a uniform contraction. At ω = 2, the scalar equation x = 0 gives iterates that alternate in sign.

**Wikipedia:** [Successive over-relaxation](https://en.wikipedia.org/wiki/Successive_over-relaxation). It says: “proved that if A is symmetric and positive-definite then ρ(Lω) &lt; 1 for 0 &lt; ω &lt; 2.”

**Sources:** none listed. No primary source with a working link was found.

### Power iteration converges in direction

**Remember:** Follow the line, not its sign.

*Makes the theorem clean to state or prove.* MSC 65F15 (Numerical computation of eigenvalues and eigenvectors of matrices). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Power iteration repeatedly multiplies a starting vector by a matrix and normalizes the result. Its progress is measured between lines, not vectors: the angle between the line of the iterate and the line of the eigenvector, which ignores sign.

**Problem.** Let a real symmetric matrix have a simple nonzero eigenvalue strictly larger in magnitude than every other eigenvalue. Start with a vector having a nonzero component along its eigenvector. The angle between the iterate’s line and that eigenvector’s line tends to zero.

**How the definition helps.** A negative dominant eigenvalue flips the iterate's sign at every step, and the line ignores this (our own). Expanding in eigenvectors leaves ratios of smaller eigenvalues to the dominant one, whose powers tend to zero (our own). For diag(−2, 1) starting at (1, 0), the normalized iterates alternate between (1, 0) and (−1, 0) (our own).

**Wikipedia:** [Power iteration](https://en.wikipedia.org/wiki/Power_iteration). It says: “the starting vector b₀ has a nonzero component in the direction of an eigenvector associated with the dominant eigenvalue”

**Sources:** none listed. No primary source with a working link was found.

### Strict diagonal dominance prevents singularity

**Remember:** Every row gives a disc that misses zero.

*Rules out counterexamples.* MSC 65F15 (Numerical computation of eigenvalues and eigenvectors of matrices), 65F05. arXiv math.NA. Level 2: later undergraduate.

**Definition.** A square matrix is strictly row diagonally dominant if each diagonal entry has magnitude larger than the sum of the other magnitudes in its row. So each Gershgorin disc, centered at a diagonal entry with radius equal to the rest of its row, misses zero.

**Problem.** Every strictly row diagonally dominant matrix is invertible.

**How the definition helps.** The Gershgorin theorem puts every eigenvalue in one of these discs, so zero is not an eigenvalue. Weak dominance, which allows equality, is not enough: the two-by-two matrix with every entry one has eigenvalue zero (our own).

**nLab:** [Gershgorin circle theorem](https://ncatlab.org/nlab/show/Gershgorin+circle+theorem). It says: “each of its eigenvalues is contained in at least one Gershgorin disc”

**Sources:** none listed. No primary source with a working link was found.

### QR separates the fitted part from the least squares residual

**Remember:** Only the part of b along Q’s columns can be fitted.

*True by definition.* MSC 65F20 (Numerical solutions to overdetermined systems, pseudoinverses). arXiv math.NA. Level 2: later undergraduate.

**Definition.** The reduced QR factorization of a real matrix A with independent columns writes A = QR, where the columns of Q are perpendicular unit vectors spanning the column space of A and R is square, upper triangular and invertible. Then Qᵀb gives the coordinates of the part of b that A can fit.

**Problem.** The unique least squares solution minimizing ‖Ax − b‖₂ satisfies the triangular system Rx = Qᵀb.

**How the definition helps.** The Pythagorean theorem splits ‖Ax − b‖₂² into ‖Rx − Qᵀb‖₂² plus the squared part of b perpendicular to the column space, which x cannot change (our own). Since R is invertible, the first term reaches zero exactly when Rx = Qᵀb.

**Wikipedia:** [Numerical linear algebra](https://en.wikipedia.org/wiki/Numerical_linear_algebra). It says: “This upper triangular system can then be solved for x.”

**Sources:** none listed. No primary source with a working link was found.

### Scaled adjoints solve least squares

**Remember:** Reverse the length-preserving part and undo the scale.

*True by definition.* MSC 65F20 (Numerical solutions to overdetermined systems, pseudoinverses). arXiv math.NA, cs.NA. Level 2: later undergraduate.

**Definition.** A matrix whose nonzero singular values all equal σ &gt; 0 is σ times a partial isometry U, a map that preserves lengths on the orthogonal complement of its kernel and is zero on the kernel.

**Problem.** The minimum-length least-squares solution to Ax = b is A\*b divided by σ², where A\* denotes the adjoint.

**How the definition helps.** UU\* is the orthogonal projection onto the range, so the nearest attainable vector to b is UU\*b (our own). Its preimage perpendicular to the kernel is U\*b/σ = A\*b/σ², and every other preimage adds a nonzero kernel vector and is longer.

**Paper or page:** [An Optimal Least-Square Solver For Scaled Partial-Isometric Linear Systems](https://arxiv.org/abs/2507.01434v1). It says: “A matrix A ∈ ℂᵐˣⁿ is a partial isometry iff all its non-zero singular values (if any) are 1.”

**Sources:** none listed. No primary source with a working link was found.

### Keeping each column span gives an upper triangular QR factor

**Remember:** Each input column uses only the new columns built so far.

*True by definition.* MSC 65F25 (Orthogonalization in numerical linear algebra), 65F05. arXiv math.NA. Level 2: later undergraduate.

**Definition.** Gram–Schmidt takes linearly independent columns in order, subtracts from each its orthogonal projection onto the span of the earlier columns, and divides the remainder by its length. So each original column is a combination of only the new unit vectors built so far.

**Problem.** Every real matrix A with independent columns has a reduced factorization A = QR. The columns of Q are mutually perpendicular unit vectors, and R is upper triangular.

**How the definition helps.** The coefficients of these combinations form R, with zeros below the diagonal (our own). Independence makes every remainder nonzero, so each division is possible.

**nLab:** [Gram-Schmidt process](https://ncatlab.org/nlab/show/Gram-Schmidt+process). It says: “The orthonormal basis u₀, u₁, … produced as output is defined recursively by a) subtracting the orthogonal projection to the closed subspace generated by all previous vectors and b) normalizing.”

**Sources:** none listed. No primary source with a working link was found.

### Opposite signs prevent Householder cancellation

**Remember:** Choose the opposite sign so the leading terms add.

*Rules out counterexamples.* MSC 65F25 (Orthogonalization in numerical linear algebra), 65G50. arXiv math.NA, cs.NA. Level 2: later undergraduate.

**Definition.** For a nonzero real vector x, the Householder normal is x minus a target ±‖x‖e₁ on the first axis whose sign is opposite to that of x₁, with either sign allowed when x₁ = 0. So its first coordinate adds two numbers of the same sign instead of subtracting them.

**Problem.** The first coordinate of the normal has absolute value \|x₁\| + ‖x‖, so forming it cannot subtract nearly equal positive magnitudes.

**How the definition helps.** Subtracting a number of opposite sign adds absolute values, so no cancellation occurs. The same-sign target gives a zero normal for x = (1, 0), and rounds the first coordinate badly when the other coordinates are tiny (our own). Either sign gives a valid reflection because both targets have length ‖x‖.

**Wikipedia:** [Householder transformation](https://en.wikipedia.org/wiki/Householder_transformation). It says: “in practice we want to avoid catastrophic cancellation”

**Sources:** none listed. No primary source with a working link was found.

### Derivative-based relative condition numbers are submultiplicative under composition

**Remember:** The intermediate size ‖f(x)‖ cancels between the two relative factors.

*True by definition. Confidence: medium.* MSC 65F35 (Numerical computation of matrix norms, conditioning, scaling), 15A12. arXiv math.NA. Level 2: later undergraduate.

**Definition.** The relative condition number κ(f,x) = ‖Df(x)‖‖x‖/‖f(x)‖ measures how much f magnifies a small relative change in x. It needs f differentiable at x, x and f(x) nonzero, and ‖Df(x)‖ the operator norm induced by the input and output norms.

**Problem.** Suppose f is differentiable at x and g at f(x), with x, f(x), and g(f(x)) nonzero. Then κ(g ∘ f,x) ≤ κ(g,f(x))κ(f,x).

**How the definition helps.** By the chain rule, the composite derivative is Dg(f(x))Df(x), whose norm is at most the product of the two derivative norms. Multiplying and dividing by ‖f(x)‖ splits this into κ(g,f(x)) times κ(f,x) (our own).

**Wikipedia:** [Condition number](https://en.wikipedia.org/wiki/Condition_number). It says: “the maximum ratio of the fractional change in f(x) to any fractional change in x”

**Sources:** none listed. No primary source with a working link was found.

### The singular-value ratio shows that normal equations square conditioning

**Remember:** Square both extreme stretches and the condition number squares too.

*True by definition.* MSC 65F35 (Numerical computation of matrix norms, conditioning, scaling), 65F20. arXiv math.NA. Level 2: later undergraduate.

**Definition.** The Euclidean condition number of a matrix with independent columns is its largest singular value divided by its smallest, the ratio of its largest and smallest stretches along perpendicular principal directions.

**Problem.** For a real matrix A with independent columns, the normal-equation matrix AᵀA has condition number κ(A)².

**How the definition helps.** By the singular value decomposition, the singular values of AᵀA are the squares of those of A (our own). So the ratio of the extremes squares, giving κ(A)².

**Wikipedia:** [Condition number](https://en.wikipedia.org/wiki/Condition_number). It says: “κ(A) = σₘₐₓ(A) ∕ σₘᵢₙ(A),”

**Sources:** none listed. No primary source with a working link was found.

### Max-min singular values make the best rank-k error equal σₖ₊₁

**Remember:** σₖ is the stretch M guarantees on its best k-dimensional subspace.

*True by definition. Confidence: medium.* MSC 65F55 (Numerical methods for low-rank matrix approximation; matrix compression), 15A18. arXiv math.NA. Level 2: later undergraduate.

**Definition.** Fix an n × n matrix M and 1 ≤ k ≤ n. The kth singular value σₖ is the largest s such that ‖Mx‖ ≥ s, in Euclidean norm, for every unit vector x of some k-dimensional subspace. This max-min form agrees with the square roots of the eigenvalues of M\*M (our own).

**Problem.** For 0 ≤ k &lt; n, the smallest Euclidean operator-norm distance from M to a matrix of rank at most k is σₖ₊₁.

**How the definition helps.** A matrix B of rank at most k kills a unit vector in every (k + 1)-dimensional subspace, by a dimension count. Take S attaining σₖ₊₁ and such a unit vector x in S; then ‖(M − B)x‖ = ‖Mx‖ ≥ σₖ₊₁. The truncated singular value decomposition attains the bound (our own argument).

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “The singular values {σₖ} of a square matrix M are the square roots of the eigenvalues of M\*M (equivalently MM\*).”

**Sources:**

- [Leon Mirsky, Symmetric gauge functions and unitarily invariant norms (1960).](https://doi.org/10.1093/qmath/11.1.50)

### Subnormal numbers make the Sterbenz lemma hold without exceptions

**Remember:** Subnormals keep the bottom spacing all the way down to zero.

*Rules out counterexamples.* MSC 65G30 (Interval and finite arithmetic), 65G50. arXiv math.NA, cs.NA. Level 2: later undergraduate.

**Definition.** Gradual underflow fills the gap between zero and the smallest positive normal number with subnormal numbers. These use the lowest normal exponent and a significand below the normalized range. They are symmetric about zero and share the spacing of the normal numbers just above them.

**Problem.** Suppose finite floating-point numbers x and y share a format with gradual underflow and satisfy y/2 ≤ x ≤ 2y. Their difference is representable, so correctly rounded subtraction is exact.

**How the definition helps.** The difference x − y is a multiple of the spacing at the smaller operand’s exponent and is at most that operand, so it fits (our own argument). Subnormals keep that spacing down to zero. Without them, the two smallest positive normal numbers differ by one spacing, which flushes to zero.

**Wikipedia:** [Sterbenz lemma](https://en.wikipedia.org/wiki/Sterbenz_lemma). It says: “In floating-point number systems without subnormal numbers, such as CPUs in nonstandard flush-to-zero mode instead of the standard gradual underflow, the Sterbenz lemma does not apply.”

**Sources:**

- [P. H. Sterbenz, Floating-Point Computation, Prentice-Hall (1974), Theorem 4.3.1](https://archive.org/details/SterbenzFloatingPointComputation/page/n153/mode/2up)
- [J.-M. Muller et al., Handbook of Floating-Point Arithmetic, 2nd ed., Birkhäuser (2018), Lemma 4.1](https://doi.org/10.1007/978-3-319-76526-6)

### Backward error and condition number split numerical error into two parts

**Remember:** Treat the computed answer as the exact answer to nearby data.

*True by definition.* MSC 65G50 (Roundoff error), 65F35. arXiv math.NA. Level 2: later undergraduate.

**Definition.** For nonzero x and f(x), the relative backward error η of a computed answer y\* is the infimum of ‖d‖/‖x‖ over input changes d with f(x + d) = y\*. The relative condition number κ is the limit superior, as d tends to zero, of relative output change over relative input change. An algorithm is backward stable if η is at most a small multiple of unit roundoff for every admissible input.

**Problem.** To first order, the relative error of the computed answer is at most the condition number times the relative backward error. So a backward stable algorithm is accurate on every well-conditioned problem.

**How the definition helps.** The backward error makes y\* the exact value f(x + d) for a small d, so the forward error is an output change caused by an input change. The definition of κ bounds the relative forward error by (κ + o(1))η as η tends to zero, for finite κ (our own argument). Backward stability makes η small.

**Wikipedia:** [Numerical stability](https://en.wikipedia.org/wiki/Numerical_stability), [Condition number](https://en.wikipedia.org/wiki/Condition_number). It says: “An algorithm is forward stable if its forward error divided by the condition number of the problem is small.”

**Sources:** none listed. No primary source with a working link was found.

### Rounding to nearest halves the spacing bound

**Remember:** The nearest endpoint is at most half a gap away.

*Makes the theorem clean to state or prove.* MSC 65G50 (Roundoff error). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Round each real number to a nearest representable number, so the error is at most half the gap between its two neighbours. Unit roundoff u is half the gap between 1 and the next larger representable number.

**Problem.** Take a fixed-precision floating-point system of any base. Rounding a nonzero x in its normal finite range gives x(1 + δ) with \|δ\| ≤ u.

**How the definition helps.** Rounding to nearest bounds the absolute error by half the local gap. If B is the largest power of the base with B ≤ \|x\|, the gap near x is 2uB (our own proof). So the error is at most uB ≤ u\|x\|.

**Paper or page:** [Mechanizing Olver's Error Arithmetic](https://arxiv.org/abs/2510.13414v1). It says: “ρ(x) = x(1 + δ)    \|δ\| ≤ u,”

**Sources:** none listed. No primary source with a working link was found.

### Negative remainders make Sturm counts work

**Remember:** Negate the remainder so interior zeros cannot change the count.

*Rules out counterexamples.* MSC 65H04 (Numerical computation of roots of polynomial equations). arXiv math.NA, cs.NA. Level 2: later undergraduate.

**Definition.** The Sturm sequence of a nonconstant real polynomial p starts with p and p′. Each later term is the negative of the remainder from dividing the term two back by the term just before, stopping at remainder zero. At a point, count the sign changes of the sequence, ignoring zeros.

**Problem.** For a polynomial without repeated roots and endpoints that are not roots, the drop in sign changes across the interval counts its real roots.

**How the definition helps.** The minus sign gives pᵢ₋₁ = qpᵢ − pᵢ₊₁, so where a middle term vanishes its neighbours have opposite signs and the count does not change. The pair p, p′ loses exactly one sign change at each simple root. Without the minus sign, x² − 1 and 2x give the term −1, and the counts at −2 and 2 agree (our own example).

**Wikipedia:** [Sturm's theorem](https://en.wikipedia.org/wiki/Sturm%27s_theorem). It says: “the number of sign changes (ignoring zeros) in the sequence of real numbers”

**Sources:** none listed. No primary source with a working link was found.

### Dividing by slope restores quadratic convergence

**Remember:** Divide out one derivative to make the root simple.

*Rules out counterexamples.* MSC 65H05 (Numerical computation of solutions to single equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Near a root r of finite multiplicity m, where f is (x − r)ᵐ times a smooth nonzero factor, apply Newton’s method to f/f′ instead of f. This quotient, set to zero at r, has a simple root there.

**Problem.** Suppose the nonzero factor has three continuous derivatives near the root. From close enough starting points, Newton’s method on the extended quotient converges at least quadratically, with each error at most a constant times the previous error squared.

**How the definition helps.** Dividing by f′ lowers the multiplicity to one: the extended quotient is twice continuously differentiable with derivative 1/m at r (our own argument). The local Newton theorem for smooth simple roots then applies. For f(x) = x², plain Newton only halves the error.

**Wikipedia:** [Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method). It says: “Applying Newton's method to find the root of g(x) recovers quadratic convergence in many cases”

**Sources:** none listed. No primary source with a working link was found.

### Measuring root conditioning against vertical shifts exposes the inverse slope

**Remember:** A small slope makes a small vertical shift move the root far.

*True by definition. Confidence: medium.* MSC 65H05 (Numerical computation of solutions to single equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Shift the graph of f vertically by t and follow the nearby root r(t) of f(x) = t, which is the local inverse of f at t. The absolute condition number for vertical shifts is the limit of \|r(t) − r(0)\|/\|t\| as t tends to zero.

**Problem.** If f is continuously differentiable near a real root r with f′(r) ≠ 0, the absolute condition number for vertical shifts is 1 ∕ \|f′(r)\|.

**How the definition helps.** Since r(t) is the local inverse of f at t, the limit is the magnitude of the inverse’s derivative (our own argument). The inverse function theorem gives 1/\|f′(r)\| because f′(r) ≠ 0. At a double root the roots of x² = t move by √t, so the ratio blows up.

**Wikipedia:** [Wilkinson's polynomial](https://en.wikipedia.org/wiki/Wilkinson%27s_polynomial). It says: “The problem is ill-conditioned when the polynomial has a multiple root.”

**Sources:** none listed. No primary source with a working link was found.

### Successive differences bound the remaining fixed point error

**Remember:** Each future step shrinks, so the last step bounds the distance left.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 65H05 (Numerical computation of solutions to single equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Call g a contraction with factor q, where 0 ≤ q &lt; 1, if it shrinks every distance by at least that factor. In symbols, \|g(x) − g(y)\| ≤ q\|x − y\| for all x and y.

**Problem.** Let g map a closed interval into itself with contraction factor q, and iterate xₙ₊₁ = g(xₙ) from any point there. For n ≥ 1, the distance from xₙ to the unique fixed point is at most q\|xₙ − xₙ₋₁\|/(1 − q).

**How the definition helps.** Each later step is at most q times the one before, so the steps after xₙ sum to at most q\|xₙ − xₙ₋₁\|/(1 − q) (our own argument). The contraction theorem says the iterates converge to the unique fixed point.

**Paper or page:** [Banach Fixed-Point Theorem](https://proofwiki.org/wiki/Banach_Fixed-Point_Theorem). It says: “Then there exists a unique fixed point of f.”

**Sources:** none listed. No primary source with a working link was found.

### Taking the implicit midpoint preserves quadratic invariants exactly

**Remember:** Take the step’s slope at its midpoint, where quadratics change exactly.

*True by definition.* MSC 65L06 (Multistep, Runge-Kutta and extrapolation methods for ordinary differential equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** An implicit midpoint step of size h for y′ = f(t,y) moves from u to the v with v − u = h f(t + h/2, (u + v)/2). So the displacement is h times the field at the midpoint of the step.

**Problem.** Suppose a quadratic function of the state is constant along all solutions of a smooth differential equation. Every well-defined implicit midpoint step preserves that function exactly.

**How the definition helps.** A quadratic function changes along a step by its gradient at the midpoint dotted with the displacement, exactly (our own proof). The midpoint rule makes that displacement h times the field at the same midpoint. Invariance makes the gradient perpendicular to the field there, so the change is zero.

**Wikipedia:** [Midpoint method](https://en.wikipedia.org/wiki/Midpoint_method). It says: “the implicit method is the most simple collocation method, and, applied to Hamiltonian dynamics, a symplectic integrator.”

**Sources:**

- [G. J. Cooper, Stability of Runge-Kutta Methods for Trajectory Problems (1987)](https://doi.org/10.1093/imanum/7.1.1)

### A reciprocal multiplier makes backward Euler damp every decaying mode

**Remember:** Slope at the new end puts the growth in the denominator.

*True by definition.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Backward Euler takes the slope at the new end of each step. On y′ = λy with step size h, this gives v = u + hλv, so each step multiplies by 1/(1 − hλ).

**Problem.** Backward Euler is A-stable. For every complex λ with negative real part and every fixed step size h &gt; 0, its iterates tend to zero.

**How the definition helps.** When λ has negative real part, the real part of 1 − hλ exceeds one, so the multiplier has magnitude below one (our own proof). Repeated steps then shrink geometrically to zero. Forward Euler multiplies by 1 + hλ, whose magnitude can exceed one.

**Wikipedia:** [Backward Euler method](https://en.wikipedia.org/wiki/Backward_Euler_method). It says: “This includes the whole left half of the complex plane”

**Sources:** none listed. No primary source with a working link was found.

### A scalar stability function advances each eigenmode independently

**Remember:** One scalar multiplier is enough for each eigenvector.

*Makes the theorem clean to state or prove.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** The stability function R of a Runge–Kutta method is the factor by which one step multiplies the solution of y′ = λy. It is a function of z = hλ, where h is the step size.

**Problem.** Suppose A has a basis of eigenvectors and the intermediate equations have a unique solution. One step on y′ = Ay multiplies each eigenvector component by R(hλ), where λ is its eigenvalue.

**How the definition helps.** In an eigenvector direction, A acts as multiplication by one number λ, and the step is linear. So in an eigenvector basis the intermediate equations split into one scalar test problem per component (our own argument).

**Paper or page:** [Optimizing multigrid reduction-in-time (MGRIT) and Parareal coarse-grid operators for linear advection](https://arxiv.org/abs/1910.03726v3). It says: “Let R(z) = P(z)/Q(z) denote the stability function”

**Sources:**

- [Optimizing multigrid reduction-in-time (MGRIT) and Parareal coarse-grid operators for linear advection, Lemma 1](https://arxiv.org/abs/1910.03726v3)

### Defining stability by scalar decay rules out explicit Runge–Kutta methods

**Remember:** The one-step multiplier must stay below one on the whole left half-plane.

*Makes the theorem clean to state or prove.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** On y′ = λy, one step multiplies the current value by R(z), where z = hλ. The method is A-stable if \|R(z)\| &lt; 1 for every z with negative real part.

**Problem.** No consistent explicit Runge–Kutta method is A-stable.

**How the definition helps.** An explicit method uses only earlier stages, so R is a polynomial, and consistency gives R′(0) = 1, so R is nonconstant (our own proof). A nonconstant polynomial is unbounded on the negative real axis, so \|R(z)\| &lt; 1 fails there.

**Wikipedia:** [Runge–Kutta methods](https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods). It says: “The stability function of an explicit Runge–Kutta method is a polynomial, so explicit Runge–Kutta methods can never be A-stable.”

**Sources:** none listed. No primary source with a working link was found.

### Zero-stability makes consistent multistep methods converge

**Remember:** Keep every root in the closed unit disk and every boundary root simple.

*Makes the theorem clean to state or prove.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 65L06. arXiv math.NA. Level 2: later undergraduate.

**Definition.** A constant-step linear multistep method is zero-stable when ρ(z) = ∑ⱼ αⱼzʲ, built from the coefficients αⱼ of yₙ₊ⱼ, has every root in the closed unit disk. Roots on the unit circle must also be simple. This root condition is exactly what keeps every solution of the recurrence with zero right-hand side bounded.

**Problem.** Consider a consistent linear multistep method with convergent starting values on a fixed finite interval and a Lipschitz right-hand side. Convergence for every such initial-value problem as the step size tends to zero is equivalent to zero-stability.

**How the definition helps.** The root condition keeps the homogeneous recurrence bounded, so starting and local errors cannot grow without limit as the step shrinks. The Dahlquist equivalence theorem turns this, with consistency, into convergence and back. The polynomial (z − 1)(z + 5) violates it, and starting errors then grow like 5ⁿ (our own example).

**Wikipedia:** [Linear multistep method](https://en.wikipedia.org/wiki/Linear_multistep_method). It says: “Then, the numerical solution converges to the exact solution as h → 0 if and only if the method is zero-stable. This result is known as the Dahlquist equivalence theorem”

**Sources:**

- [G. Dahlquist, Convergence and stability in the numerical integration of ordinary differential equations, Mathematica Scandinavica 4 (1956) 33–53](https://doi.org/10.7146/math.scand.a-10454)

### Stencil reach excludes oversized steps

**Remember:** The grid must carry news at least as fast as the wave.

*Rules out counterexamples.* MSC 65M12 (Stability and convergence of numerical methods for initial value and initial-boundary value problems involving PDEs), 65M06. arXiv math.NA. Level 2: later undergraduate.

**Definition.** The numerical domain of dependence of a computed value is the set of initial grid points that can affect it. With a stencil of each point and its two neighbours, it grows by at most one grid interval per time step.

**Problem.** Consider constant-speed transport on the line with an explicit update using only each point and its two immediate neighbors. Keep the ratio of time step to grid spacing fixed during refinement. If the wave crosses more than one grid interval per step, the method cannot converge for all smooth initial data.

**How the definition helps.** If the wave moves more than one interval per step, the exact domain of dependence falls outside the numerical one (our own argument). Smooth initial data equal to one at the missing point and zero on the numerical domain give the same computed value as zero data. The exact values differ by one, so the method cannot converge.

**Wikipedia:** [Courant–Friedrichs–Lewy condition](https://en.wikipedia.org/wiki/Courant%E2%80%93Friedrichs%E2%80%93Lewy_condition). It says: “the numerical domain of dependence of any point in space and time (as determined by initial conditions and the parameters of the approximation scheme) must include the analytical domain of dependence”

**Sources:**

- [Richard Courant, Kurt Friedrichs and Hans Lewy, On the Partial Difference Equations of Mathematical Physics (1967 English translation)](https://doi.org/10.1147/rd.112.0215)

### Variation bounds preserve monotone profiles

**Remember:** A monotone profile spends all its variation on the net change.

*True by definition.* MSC 65M12 (Stability and convergence of numerical methods for initial value and initial-boundary value problems involving PDEs), 65M08. arXiv math.NA. Level 2: later undergraduate.

**Definition.** The total variation of grid values is the sum of absolute jumps between neighbours. It is never less than the gap between the two end values, with equality exactly for monotone data. A variation-diminishing update never increases this sum.

**Problem.** If a variation-diminishing update keeps the two end values fixed, it preserves monotonicity on a finite grid.

**How the definition helps.** With fixed end values, the new variation is at most the old one, which is the end gap, and at least the end gap. So equality holds, and every nonzero jump has the sign of the end gap (our own argument).

**Wikipedia:** [Total variation diminishing](https://en.wikipedia.org/wiki/Total_variation_diminishing). It says: “If uⁿ is monotonically increasing (or decreasing) in space, then so is uⁿ⁺¹.”

**Sources:**

- [Ami Harten, High resolution schemes for hyperbolic conservation laws (1983)](https://doi.org/10.1016/0021-9991(83)90136-5)

### Equal square-root factors make discrete Fourier inversion an adjoint

**Remember:** Put the same square-root factor on the way in and out.

*True by definition.* MSC 65T50 (Numerical methods for discrete and fast Fourier transforms). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The unitary N-point discrete Fourier transform has entries exp(−2πijk/N)/√N for j and k from 0 to N − 1. The factor 1/√N, the square root of the usual 1/N, gives every column length one.

**Problem.** The adjoint, the matrix formed by transposing and conjugating, inverts this discrete Fourier transform. The transform preserves the sum of squared magnitudes.

**How the definition helps.** Orthogonal columns of length one make the matrix unitary, so the adjoint is the inverse and squared magnitudes keep their sum (our own). Distinct columns are orthogonal because their inner product is a geometric sum of Nth roots of unity, which is zero (our own).

**Wikipedia:** [DFT matrix](https://en.wikipedia.org/wiki/DFT_matrix). It says: “choice here makes the resulting DFT matrix unitary”

**Sources:** none listed. No primary source with a working link was found.

### Lebesgue constants as operator norms bound interpolation error by best approximation

**Remember:** Subtract the best polynomial first, then let interpolation amplify only that.

*True by definition. Confidence: medium.* MSC 65D05 (Numerical interpolation), 41A05. arXiv math.NA. Level 3: graduate.

**Definition.** Let L send each continuous function on a compact interval to its interpolating polynomial of degree at most n at n + 1 distinct nodes. The Lebesgue constant Λ is the operator norm of L in the supremum norm, the largest factor by which interpolation can enlarge a function.

**Problem.** For every continuous f, ‖f − Lf‖ ≤ (1 + Λ) E(f). Here E(f) is the supremum-norm distance from f to polynomials of the interpolation degree.

**How the definition helps.** Interpolation fixes every polynomial p of degree at most n, so f − Lf = (f − p) − L(f − p). The triangle inequality bounds this by (1 + Λ)‖f − p‖, and the infimum over p gives the result (our own proof).

**Paper or page:** [Chebyshev admissible meshes and Lebesgue constants of complex polynomial projections](https://arxiv.org/abs/2311.06511v1). It says: “the “Lebesgue constant” of Lₙ, that is its uniform norm”

**Sources:**

- [Chebyshev admissible meshes and Lebesgue constants of complex polynomial projections](https://arxiv.org/abs/2311.06511v1)

### Strictly positive definite kernels interpolate arbitrary data

**Remember:** Every nonzero combination has positive quadratic form, so the matrix inverts.

*Rules out counterexamples.* MSC 65D12 (Numerical radial basis function approximation), 41A05. arXiv math.NA. Level 3: graduate.

**Definition.** A radial kernel φ is strictly positive definite if the matrix of φ at the distances between any finitely many distinct sites is positive definite. That is, its quadratic form is positive on every nonzero real vector.

**Problem.** Take real values at finitely many distinct sites and a strictly positive definite kernel φ. Exactly one linear combination of copies of φ centered at the sites interpolates the values.

**How the definition helps.** A positive definite matrix has only the zero vector in its null space, so the square interpolation matrix is invertible (our own). A constant kernel gives an all-ones matrix and cannot fit unequal values at two sites (our own).

**Wikipedia:** [Radial basis function interpolation](https://en.wikipedia.org/wiki/Radial_basis_function_interpolation). It says: “Such functions, including the Gaussian, inverse quadratic, and inverse multiquadric are often used as radial basis functions for this reason.”

**Sources:** none listed. No primary source with a working link was found.

### Lobatto endpoints limit exactness

**Remember:** Pin both ends; orthogonality fixes the interior nodes.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas). arXiv math.NA. Level 3: graduate.

**Definition.** The n-node Gauss–Lobatto rule on \[a,b\] uses both endpoints and integrates the interpolating polynomial of degree below n through its nodes. Its n − 2 interior nodes are the roots of the degree-(n − 2) orthogonal polynomial for the weight (x − a)(b − x). So the full node polynomial integrates to zero against every polynomial of degree below n − 2.

**Problem.** Any such weighted sum with n ≥ 2 distinct nodes including both endpoints misses some polynomial of degree 2n − 2. The Gauss–Lobatto rule integrates every polynomial through degree 2n − 3 exactly.

**How the definition helps.** A polynomial of degree at most 2n − 3 minus its interpolant is the node polynomial times a quotient of degree below n − 2, so its integral is zero. For the upper bound, (x − a)(b − x) times the squared interior node polynomial has degree 2n − 2, vanishes at every node, and has positive integral (our own argument).

**Wikipedia:** [Gaussian quadrature](https://en.wikipedia.org/wiki/Gaussian_quadrature). It says: “an n point Gauss-Lobatto rule is only accurate for polynomials up to degree 2n − 3.”

**Sources:** none listed. No primary source with a working link was found.

### Paired nodes cancel odd powers

**Remember:** Pair the branches to cancel odd powers before applying Gaussian quadrature.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas), 41A55. arXiv math.NA. Level 3: graduate.

**Definition.** Integrate over both branches of y² = φ(x) against a positive measure in x, where the cubic φ is nonnegative on the interval. Start from that measure’s N-point Gaussian rule, exact through degree 2N − 1. Give both points (x, ±√φ(x)) above each node the node’s weight, so odd powers of y cancel.

**Problem.** The paired sum integrates a polynomial exactly whenever its even part in y reduces to degree at most 2N − 1 in x.

**How the definition helps.** Pairing cancels the odd part in y in both the integral and the sum. Replacing y² by φ(x) in the even part leaves a polynomial in x, and both sides become twice their one-dimensional versions. One-dimensional Gaussian exactness finishes the proof (our own).

**Paper or page:** [Orthogonal polynomials on planar cubic curves](https://arxiv.org/abs/2011.10884v1). It says: “I<sub>n</sub> (f):= \\sum <sub>k=1</sub><sup>N</sup> {\\lambda }<sub>k,N</sub> \\left\[f(x<sub>k,N</sub>,y<sub>k,N</sub>)+f(x<sub>k,N</sub>,-y<sub>k,N</sub>)\\right\]”

**Sources:**

- [Marco Fasondini, Sheehan Olver, Yuan Xu. Orthogonal polynomials on planar cubic curves (2020).](https://arxiv.org/abs/2011.10884v1)

### Positive quadrature weights limit amplification

**Remember:** A weighted average cannot amplify an error bound.

*Rules out counterexamples.* MSC 65D32 (Numerical quadrature and cubature formulas), 41A55. arXiv math.NA. Level 3: graduate.

**Definition.** In each coordinate of \[0,1\]ᵈ, use a quadrature rule whose weights are nonnegative and sum to one, so it averages its samples. The product rule takes every tuple of coordinate nodes, weighted by the product of their weights.

**Problem.** Apply each coordinate rule to the function left after earlier exact integrations. If each such rule has uniform error at most ε, the full rule has error at most dε in d dimensions.

**How the definition helps.** An average of errors at most ε is at most ε, so no coordinate rule amplifies an error. Replacing exact integrals by coordinate rules one at a time, from the last coordinate, adds at most ε per step, giving dε (our own proof). Weights 2 and −1 integrate constants exactly but turn sample errors 1 and −1 into 3 (our own example).

**Paper or page:** [Tensor-Train Numerical Integration of Multivariate Functions with Singularities](https://arxiv.org/abs/2103.12129v1). It says: “has nonnegative weights and is exact for constant functions”

**Sources:** none listed. No primary source with a working link was found.

### Projected weights make quadrature exact

**Remember:** Project the weight first so the product stays within the exact degree.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas), 41A55. arXiv math.NA, cs.NA. Level 3: graduate.

**Definition.** Take a compact region with a finite positive measure μ that has a density. Project a square-integrable weight h onto polynomials of total degree at most n, orthogonally in the inner product of μ. Multiply each quadrature weight by the projection’s value at its node.

**Problem.** Suppose the original weighted sum integrates all polynomials of degree at most 2n exactly against μ. The modified sum then integrates every polynomial of degree at most n exactly against h dμ.

**How the definition helps.** The part of h that the projection removes is orthogonal to each test polynomial of degree at most n, so no target integral changes (our own). The remaining product has degree at most 2n, so the original rule computes it exactly, and that sum is the modified rule (our own).

**Paper or page:** [Cheap and stable quadrature on polyhedral elements](https://arxiv.org/abs/2502.03446v1). It says: “the nodes and positive weights of a quadrature formula for integration in dμ, exact on ℙ₂ₙᵈ (the polynomials with total degree not exceeding 2n)”

**Sources:**

- [Alvise Sommariva, Marco Vianello, Cheap and stable quadrature on polyhedral elements](https://arxiv.org/abs/2502.03446v1)

### Signed box counts bound integrals

**Remember:** If every reflected box is overcounted, so is every positive mixture of them.

*Rules out counterexamples.* MSC 65D32 (Numerical quadrature and cubature formulas). arXiv math.NA. Level 3: graduate.

**Definition.** Take every box in the unit cube from the origin to a chosen corner, closed below and open above. A sample has nonnegative local discrepancy if each such box holds at least its volume’s share of the points.

**Problem.** Suppose the sample has nonnegative local discrepancy, and reflect both its points and its anchored boxes through the cube’s center. For any nonnegative weighted sum of reflected box indicators, the reflected sample mean bounds the integral from above.

**How the definition helps.** Reflection through the center keeps each box’s point share and volume, so each reflected indicator has sample mean at least its integral. Nonnegative weights keep the inequality when the indicators are summed. A single point at ½ fails the hypothesis: the box \[0,¼) holds none of it, and the reflected box (¾,1\] has integral ¼ (our own counterexample).

**Paper or page:** [Computable error bounds for quasi-Monte Carlo using points with non-negative local discrepancy](https://arxiv.org/abs/2309.04209v2). It says: “Let P̃ₙ have non-negative local discrepancy.”

**Sources:**

- [Michael Gnewuch, Peter Kritzer, Art B. Owen, Zexin Pan, Computable error bounds for quasi-Monte Carlo using points with non-negative local discrepancy](https://arxiv.org/abs/2309.04209v2)

### Tridiagonal matrices reveal Gaussian nodes

**Remember:** The recurrence turns polynomial zeros into matrix eigenvalues.

*Makes the theorem clean to state or prove.* MSC 65D32 (Numerical quadrature and cubature formulas), 65F15. arXiv math.NA, cs.NA. Level 3: graduate.

**Definition.** Take a positive integrable weight on a bounded interval of positive length. The Jacobi matrix is multiplication by x on polynomials of degree below n, projected back onto that space, in the degree-ordered orthonormal basis. The projection discards only a multiple of the degree-n orthogonal polynomial.

**Problem.** The n nodes of the Gaussian integration rule are the eigenvalues of the Jacobi matrix.

**How the definition helps.** At a root of the degree-n orthogonal polynomial the discarded term vanishes, so the basis values there form an eigenvector for that root. The vector is nonzero because the basis includes the constant polynomial. The n distinct roots are the Gaussian nodes, so they are all the eigenvalues (our own).

**Wikipedia:** [Gauss–Legendre quadrature](https://en.wikipedia.org/wiki/Gauss%E2%80%93Legendre_quadrature). It says: “They reduce the problem of computing the nodes of a Gaussian quadrature rule to the problem of finding the eigenvalues”

**Sources:**

- [Gene H. Golub and John H. Welsch. Calculation of Gauss quadrature rules (1969).](https://doi.org/10.1090/s0025-5718-69-99647-1)

### Augmentation exposes an inverse block

**Remember:** When constraints span the missing directions, their weight supplies the inverse block.

*True by definition.* MSC 65F08 (Preconditioners for iterative methods), 65F05. arXiv math.NA. Level 3: graduate.

**Definition.** Let A be real symmetric, and let B have m rows and map the null space of A one-to-one onto ℝᵐ. For an invertible m × m matrix W, the augmented matrix M = A + BᵀWB acts on that null space only through BᵀWB.

**Problem.** If M is invertible, then BM⁻¹Bᵀ = W⁻¹.

**How the definition helps.** For each y, pick z in the null space of A with Bz = W⁻¹y. Then Mz = BᵀWBz = Bᵀy, so BM⁻¹Bᵀy = Bz = W⁻¹y (our own proof).

**Paper or page:** [Augmentation-Based Preconditioners for Saddle-Point Systems with Singular Leading Blocks](https://arxiv.org/abs/2206.13624v1). It says: “B(A + BᵀWB)⁻¹Bᵀ = W⁻¹.”

**Sources:**

- [Susanne Bradley, Chen Greif, Augmentation-Based Preconditioners for Saddle-Point Systems with Singular Leading Blocks](https://arxiv.org/abs/2206.13624v1)

### Bregman projections decrease solution error

**Remember:** Measure distance by how far f rises above its tangent.

*True by definition.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 3: graduate.

**Definition.** For a differentiable strongly convex f on ℝⁿ, the Bregman divergence D(x,y) = f(y) − f(x) − ∇f(x)·(y − x) is the height of f at y above its tangent at x. The Bregman projection of x onto a nonempty closed convex set C is the point z of C that minimizes D(x,z).

**Problem.** Let z be the Bregman projection of an iterate x onto the solution set of selected linear equations. Then D(z,y) ≤ D(x,y) − D(x,z) for every exact solution y of the full system.

**How the definition helps.** Every exact solution y lies in the set, so the minimizing property of z gives (∇f(z) − ∇f(x))·(y − z) ≥ 0. Expanding the divergences shows this product equals D(x,y) − D(x,z) − D(z,y), which gives the bound (our own proof).

**Paper or page:** [Adaptively Sketched Bregman Projection Methods for Linear Systems](https://arxiv.org/abs/2112.14456v1). It says: “D<sub>f</sub><sup>{\\hat{x}\_\*}</sup>(\\hat{x},y)\\leq D<sub>f</sub><sup>x\_\*</sup>(x,y) - D<sub>f</sub><sup>x\_\*</sup>(x,\\hat{x}),\\quad \\forall y\\in C.”

**Sources:**

- [Ziyang Yuan, Lu Zhang, Hongxia Wang, Hui Zhang. Adaptively Sketched Bregman Projection Methods for Linear Systems (2021).](https://arxiv.org/abs/2112.14456v1)

### Defining conjugate gradients by energy minimization bounds steps by distinct eigenvalues

**Remember:** One polynomial can invert A on every eigenvalue at once.

*True by definition. Confidence: medium.* MSC 65F10 (Iterative numerical methods for linear systems), 15A18. arXiv math.NA. Level 3: graduate.

**Definition.** For real symmetric positive definite A, the kth conjugate gradient iterate minimizes the energy error √(eᵀAe), with e = x − A⁻¹b, over x₀ + K(k). Here K(k) consists of the vectors p(A)r₀, where r₀ = b − Ax₀ and p ranges over polynomials of degree below k.

**Problem.** If A has d distinct eigenvalues, exact conjugate gradients reach the solution in at most d steps.

**How the definition helps.** Interpolate 1/λ at the d distinct eigenvalues by a polynomial p of degree below d, so p(A) = A⁻¹ by the spectral theorem. Then x₀ + p(A)r₀ = A⁻¹b lies in x₀ + K(d), so the minimum error there is zero. These minimizers are the iterates of the usual recurrence; the bound is our own.

**Wikipedia:** [Conjugate gradient method](https://en.wikipedia.org/wiki/Conjugate_gradient_method). It says: “Conjugate gradient, assuming exact arithmetic, converges in at most n steps, where n is the size of the matrix of the system”

**Sources:**

- [Magnus R. Hestenes and Eduard Stiefel, Methods of conjugate gradients for solving linear systems (1952).](https://doi.org/10.6028/jres.049.044)

### Defining GMRES iterates as residual minimizers makes residuals never increase

**Remember:** A larger search space cannot make the best residual worse.

*True by definition.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 3: graduate.

**Definition.** The nth GMRES iterate xₙ minimizes the residual norm ‖b − Ax‖₂ over x₀ + Kₙ. Here Kₙ is spanned by r₀, Ar₀, …, Aⁿ⁻¹r₀, with r₀ = b − Ax₀ and K₀ = {0}, so each space contains the one before.

**Problem.** In exact arithmetic, the GMRES residual norm never increases from one step to the next.

**How the definition helps.** Each search space contains the previous one, so the old iterate is still a candidate. A minimum over more candidates cannot be larger.

**Wikipedia:** [Generalized minimal residual method](https://en.wikipedia.org/wiki/Generalized_minimal_residual_method). It says: “Since every subspace is contained in the next subspace, the residual does not increase.”

**Sources:**

- [Yousef Saad and Martin H. Schultz, GMRES: A Generalized Minimal Residual Algorithm for Solving Nonsymmetric Linear Systems (1986).](https://doi.org/10.1137/0907058)

### Defining Lanczos vectors by Gram–Schmidt on Krylov vectors makes Q\*AQ tridiagonal

**Remember:** A moves each vector at most one step along, and symmetry gives the rest.

*True by definition. Confidence: medium.* MSC 65F15 (Numerical computation of eigenvalues and eigenvectors of matrices). arXiv math.NA. Level 3: graduate.

**Definition.** For Hermitian A with v, Av, …, Aᵐ⁻¹v linearly independent, the Lanczos vectors q₁, …, qₘ come from Gram–Schmidt on these vectors in order. So for each j, the vectors q₁, …, qⱼ span the same space as v, …, Aʲ⁻¹v.

**Problem.** In exact arithmetic, T = Q\*AQ is tridiagonal, where Q has the Lanczos vectors as columns. So T is nonzero only on the main diagonal and the two diagonals beside it.

**How the definition helps.** Aqⱼ lies in the span of the first j + 1 Krylov vectors, hence of q₁, …, qⱼ₊₁, so qᵢ\*Aqⱼ = 0 for i &gt; j + 1. Hermitian symmetry gives the matching zeros above the diagonal (our own proof).

**Wikipedia:** [Lanczos algorithm](https://en.wikipedia.org/wiki/Lanczos_algorithm). It says: “a tridiagonal real symmetric matrix T = V∗AV”

**Sources:**

- [Cornelius Lanczos, An iteration method for the solution of the eigenvalue problem of linear differential and integral operators (1950).](https://doi.org/10.6028/jres.045.026)

### Defining Ritz values by min-max makes them fall as trial spaces grow

**Remember:** More subspaces to choose from can only lower the minimum.

*True by definition. Confidence: medium.* MSC 65F15 (Numerical computation of eigenvalues and eigenvectors of matrices), 15A42. arXiv math.NA. Level 3: graduate.

**Definition.** Let A be Hermitian, V a subspace and 1 ≤ k ≤ dim V. The kth Ritz value θₖ(V) is the minimum, over k-dimensional subspaces S of V, of the largest Rayleigh quotient (x\*Ax)/(x\*x) on S.

**Problem.** If V ⊆ W and k ≤ dim V, then θₖ(W) ≤ θₖ(V).

**How the definition helps.** Every k-dimensional subspace of V is also one of W, so θₖ(W) is a minimum over a larger family and cannot be larger (our own argument). The min-max theorem for Q\*AQ, with Q an orthonormal basis of V, shows this agrees with the usual Ritz values. With W the whole space, this is half of Cauchy interlacing.

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “a variational characterization of eigenvalues of compact Hermitian operators on Hilbert spaces”

**Sources:** none listed. No primary source with a working link was found.

### Min-max generalized eigenvalues fall when the mass matrix grows

**Remember:** Larger denominators lower the quotient in every trial direction.

*True by definition.* MSC 65F15 (Numerical computation of eigenvalues and eigenvectors of matrices), 15A22. arXiv math.NA. Level 3: graduate.

**Definition.** Let A and B be real symmetric positive definite n × n matrices, and 1 ≤ k ≤ n. The kth generalized eigenvalue λₖ(A,B) is the minimum, over k-dimensional subspaces, of the largest quotient (xᵀAx)/(xᵀBx) on the subspace.

**Problem.** If B̃ − B is positive semidefinite, then λₖ(A, B̃) ≤ λₖ(A, B) for every k.

**How the definition helps.** Since xᵀAx &gt; 0 and xᵀB̃x ≥ xᵀBx &gt; 0, every quotient for B̃ is at most the one for B. Taking the maximum on each subspace and then the minimum keeps the inequality (our own argument). The min-max theorem for the pair shows this agrees with the generalized eigenvalues.

**Paper or page:** [A mathematical theory for mass lumping and its generalization with applications to isogeometric analysis](https://arxiv.org/abs/2212.03614v4). It says: “λₖ(A, B̃) ≤ λₖ(A, B) for all k = 1, …, n.”

**Sources:**

- [A mathematical theory for mass lumping and its generalization with applications to isogeometric analysis](https://arxiv.org/abs/2212.03614v4)

### Pseudospectra as perturbed spectra make nearby matrices' pseudospectra nest

**Remember:** Two perturbations fit within the sum of their budgets.

*True by definition. Confidence: medium.* MSC 65F15 (Numerical computation of eigenvalues and eigenvectors of matrices), 15A18. arXiv math.NA. Level 3: graduate.

**Definition.** For a complex square matrix A and ε ≥ 0, the ε-pseudospectrum Λ(A,ε) is the set of eigenvalues of all matrices A + E with Euclidean operator norm ‖E‖ ≤ ε.

**Problem.** If ‖A − B‖ ≤ δ, then Λ(B, ε) ⊆ Λ(A, ε + δ).

**How the definition helps.** Write B + E = A + ((B − A) + E), where ‖(B − A) + E‖ ≤ δ + ε by the triangle inequality. So every eigenvalue of an ε-perturbation of B is an eigenvalue of a (δ + ε)-perturbation of A (our own argument).

**Wikipedia:** [Pseudospectrum](https://en.wikipedia.org/wiki/Pseudospectrum). It says: “The ε-pseudospectrum of a matrix A consists of all eigenvalues of matrices which are ε-close to A”

**Sources:**

- [Lloyd N. Trefethen, Pseudospectra of Linear Operators (1997).](https://doi.org/10.1137/S0036144595295284)

### Null directions preserve weighted fits

**Remember:** The combined matrix records exactly the directions neither weight can see.

*True by definition.* MSC 65F20 (Numerical solutions to overdetermined systems, pseudoinverses). arXiv math.NA. Level 3: graduate.

**Definition.** For a real matrix A and data b, fit by first minimizing (Ax − b)ᵀP(Ax − b) and then xᵀQx among those minimizers, with P and Q symmetric positive semidefinite. Set G = AᵀPA + Q. Its null space holds exactly the directions z with PAz = 0 and Qz = 0, which neither objective can see.

**Problem.** Orthogonal projection onto the range of G preserves solutions. Adding any vector from the null space of G also preserves solutions.

**How the definition helps.** Adding a null vector z of G changes neither objective, since PAz = 0 and Qz = 0 (our own proof). Projecting onto the range of the symmetric matrix G subtracts just such a null vector.

**Paper or page:** [A new interpretation of the weighted pseudoinverse and its applications](https://arxiv.org/abs/2408.09412v1). It says: “conversally, if x ∈ ℛ(G) is a solution, then x + z is a solution for any z ∈ 𝒩(G)”

**Sources:**

- [Haibo Li, A new interpretation of the weighted pseudoinverse and its applications](https://arxiv.org/abs/2408.09412v1)

### Rotations expose the numerical radius

**Remember:** Rotate before maximizing to turn an absolute value into an eigenvalue.

*True by definition.* MSC 65F35 (Numerical computation of matrix norms, conditioning, scaling), 65F15. arXiv math.NA. Level 3: graduate.

**Definition.** The numerical radius of a complex square matrix C is the largest \|x\*Cx\| over unit vectors x, where x\* is the conjugate transpose. Equivalently, it is the largest real part of e<sup>(−iθ)</sup>x\*Cx over unit vectors x and angles θ, since a rotation turns any complex number onto the nonnegative real axis (our own).

**Problem.** Write C = A + iB with A and B Hermitian, meaning equal to their conjugate transposes. The numerical radius is the largest, over θ, of the top eigenvalue of cos θ A + sin θ B.

**How the definition helps.** For each θ, the real part of e<sup>(−iθ)</sup>x\*Cx is x\*(cos θ A + sin θ B)x, a Hermitian quadratic form (our own). Its maximum over unit vectors is the top eigenvalue, by the Rayleigh principle (our own).

**Paper or page:** [On semidefinite programming characterizations of the numerical radius and its dual norm](https://arxiv.org/abs/2308.07287v3). It says: “r(C) = max₍θ ∈ \[0, 2π)₎ λₘₐₓ(cos θ A + sin θ B).”

**Sources:**

- [Shmuel Friedland, Chi-Kwong Li, On semidefinite programming characterizations of the numerical radius and its dual norm](https://arxiv.org/abs/2308.07287v3)

### Acyclic matching makes solves triangular

**Remember:** No cycle means an order for solving the paired equations.

*Makes the theorem clean to state or prove.* MSC 65F50 (Computational methods for sparse matrices), 65N22. arXiv math.NA, cs.NA. Level 3: graduate.

**Definition.** Pair distinct oriented cells with distinct faces of one lower dimension, each pair having nonzero incidence. Draw an arrow i → j between distinct pairs when the face of pair i has nonzero incidence in the cell of pair j. The matching is acyclic if these arrows form no directed cycle.

**Problem.** Use matched faces as rows and matched cells as columns of the signed boundary matrix. For an acyclic matching, ordering both by the same pair order makes the submatrix triangular with nonzero diagonal, permitting back substitution.

**How the definition helps.** Acyclicity lets us order the pairs so every arrow points forward. Then every off-diagonal nonzero entry lies above the diagonal, and the matched entries make the diagonal nonzero (our own argument).

**Paper or page:** [Inverting the discrete curl operator: a novel graph algorithm to find a vector potential of a given vector field](https://arxiv.org/abs/2111.04431v1). It says: “is upper triangular and invertible.”

**Sources:**

- [Silvano Pitassi, Riccardo Ghiloni, Ruben Specogna. Inverting the discrete curl operator: a novel graph algorithm to find a vector potential of a given vector field (2021).](https://arxiv.org/abs/2111.04431v1)

### Interval operations defined as sets of results are inclusion monotone

**Remember:** Wider input intervals only add possible operand pairs.

*True by definition. Confidence: medium.* MSC 65G30 (Interval and finite arithmetic), 65G40. arXiv math.NA. Level 3: graduate.

**Definition.** For intervals X and Y, define X ∗ Y as the set of all results x ∗ y with x in X and y in Y. For the four arithmetic operations this set is again an interval, if division by an interval containing zero is excluded.

**Problem.** If X ⊆ X′ and Y ⊆ Y′, then X ∗ Y ⊆ X′ ∗ Y′. By induction, every expression built from these operations is inclusion monotone wherever it is defined.

**How the definition helps.** A larger input interval only adds operand pairs, so the set of results can only grow. Induction on the expression extends this to every formula. That the endpoint formulas compute this same set is a separate theorem, and outward rounding needs its own argument.

**Wikipedia:** [Interval arithmetic](https://en.wikipedia.org/wiki/Interval_arithmetic). It says: “A binary operation ∗ on two intervals, such as addition or multiplication is defined by”

**Sources:** none listed. No primary source with a working link was found.

### Generalized colleague matrices have a polynomial’s roots as eigenvalues

**Remember:** Multiplication by x modulo the polynomial has the roots as eigenvalues.

*True by definition.* MSC 65H04 (Numerical computation of roots of polynomial equations), 65F15, 15A18. arXiv math.NA. Level 3: graduate.

**Definition.** For a degree-n polynomial p, the generalized colleague matrix represents multiplication by x modulo p, up to transposition (our own interpretation). The basis is the first n elements of a three-term recurrence basis ordered by degree.

**Problem.** The eigenvalues of the generalized colleague matrix are the roots of the polynomial. So finding the roots of a function, once it is approximated by such a polynomial, becomes an eigenvalue problem.

**How the definition helps.** If p(λ) = 0, evaluation at λ is a nonzero left eigenvector of multiplication by x modulo p. If p(λ) ≠ 0, then x − λ is coprime to p, so multiplication by x − λ is invertible modulo p and λ is not an eigenvalue (our own argument). The recurrence gives the tridiagonal part, and reducing the last product modulo p gives the rank-one correction.

**Paper or page:** [Finding roots of complex analytic functions via generalized colleague matrices](https://arxiv.org/abs/2307.14494v3). It says: “The roots of the polynomial are the eigenvalues of the matrix C defined by the formula C = A + eₙ qᵀ,”

**Sources:**

- [Hanwen Zhang, Vladimir Rokhlin, Finding roots of complex analytic functions via generalized colleague matrices, arXiv:2307.14494v3 (2024)](https://arxiv.org/abs/2307.14494v3)
- [I. J. Good, The colleague matrix, a Chebyshev analogue of the companion matrix, Quarterly Journal of Mathematics 12 (1961) 61–68](https://doi.org/10.1093/qmath/12.1.61)

### Measuring trial functions by the operator’s output makes operator equations well-posed

**Remember:** Measure a trial function by what the operator does to it.

*True by definition.* MSC 65J10 (Numerical solutions to equations with linear operators), 47A50, 46B04. arXiv math.NA, math.FA. Level 3: graduate.

**Definition.** Let B be an injective linear operator from a trial space into the dual V′ of a test space, and give each trial function u the norm ‖Bu‖ in V′. This makes B an isometry by construction. Complete the trial space in this norm and extend B continuously.

**Problem.** If the range of B is dense in V′, the extended operator is an isometric isomorphism from the completion onto V′. So the extended equation has exactly one solution for each right-hand side, with norm equal to that of the data.

**How the definition helps.** The isometry extends to the completion, and its image is complete, hence closed in V′. Density of the range makes the image all of V′, giving existence, uniqueness and equal norms (our own argument).

**Paper or page:** [A unified framework for the analysis, numerical approximation and model reduction of linear operator equations, Part I: Well-posedness in space and time](https://arxiv.org/abs/2508.05407v1). It says: “The main concept is completion and extension of operators starting from the strong form of the problem.”

**Sources:**

- [Moritz Feuerle, Richard Löscher, Olaf Steinbach, Karsten Urban, A unified framework for the analysis, numerical approximation and model reduction of linear operator equations, Part I: Well-posedness in space and time, arXiv:2508.05407v1 (2025)](https://arxiv.org/abs/2508.05407v1)

### Affine ratio levels survive Runge–Kutta

**Remember:** Each ratio level is a flat constraint.

*True by definition.* MSC 65L06 (Multistep, Runge-Kutta and extrapolation methods for ordinary differential equations). arXiv math.NA. Level 3: graduate.

**Definition.** Write a conserved quantity as a ratio Q(x)/R(x) of affine functions, with R nonzero on the domain. Each level where the ratio equals c is then the flat set Q(x) − cR(x) = 0.

**Problem.** An explicit Runge–Kutta step preserves any conserved affine ratio as long as its stages and output remain in the domain.

**How the definition helps.** Conservation makes the affine function Q − cR have zero derivative along the slope at each point of its level (our own proof). An explicit Runge–Kutta stage adds a combination of earlier slopes to the starting state, so it stays on the flat level. Induction keeps every stage and the output there.

**Paper or page:** [On the preservation of second integrals by Runge-Kutta methods](https://arxiv.org/abs/2105.10929v1). It says: “All Runge-Kutta methods preserve all rational first integrals of the form H(x) = Q(x)/R(x) for Q(x) and R(x) affine.”

**Sources:** none listed. No primary source with a working link was found.

### A-stability turns stiff solvers into a sharp order barrier

**Remember:** Every decaying test solution must also decay numerically, at every step size.

*Makes the theorem clean to state or prove.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 65L06, 65L04. arXiv math.NA. Level 3: graduate.

**Definition.** Apply the method with fixed step h &gt; 0 to y′ = λy. It is A-stable if every numerical solution tends to zero for every complex λ with Re(λ) &lt; 0, for all starting values.

**Problem.** No explicit linear multistep method is A-stable. An A-stable linear multistep method has order at most two, and the trapezoidal rule minimizes the error constant among those of order two.

**How the definition helps.** A-stability turns the question into one about a single test equation, where the second Dahlquist barrier does the work. That barrier excludes explicit methods and bounds the order by two. The optimal error constant of the trapezoidal rule is a companion result.

**Wikipedia:** [Linear multistep method](https://en.wikipedia.org/wiki/Linear_multistep_method), [Stiff equation](https://en.wikipedia.org/wiki/Stiff_equation). It says: “The second Dahlquist barrier states that no explicit linear multistep methods are A-stable. Further, the maximal order of an (implicit) A-stable linear multistep method is 2.”

**Sources:**

- [G. Dahlquist, A special stability problem for linear multistep methods, BIT 3 (1963) 27–43](https://doi.org/10.1007/BF01963532)

### Convex Euler stages inherit stability

**Remember:** An average of non-growing Euler steps cannot grow.

*True by definition.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 65L06. arXiv math.NA. Level 3: graduate.

**Definition.** A convex Euler representation writes each Runge–Kutta stage, and the output, as an average of forward Euler steps from earlier stages. Each Euler step adds a step length times the slope at its stage, and the average has nonnegative weights summing to one.

**Problem.** Suppose forward Euler cannot increase a chosen norm for step sizes below a given limit. If every Euler substep in the representation is within that limit, the full update cannot increase the norm.

**How the definition helps.** Each stage averages Euler steps that do not increase the norm, and the norm of an average is at most the average of the norms (our own). Induction over the stages carries the bound to the output (our own argument).

**Paper or page:** [Embedded error estimation and adaptive step-size control for optimal explicit strong stability preserving Runge--Kutta methods](https://arxiv.org/abs/1806.08693v1). It says: “then the solution obtained by ERK method satisfies the strong stability bound ‖uⁿ⁺¹‖ ≤ ‖uⁿ‖”

**Sources:** none listed. No primary source with a working link was found.

### Last-stage updates damp stiff modes

**Remember:** Use the last stage to inherit its damping.

*True by definition. Confidence: medium.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 65L04. arXiv math.NA. Level 3: graduate.

**Definition.** A Runge–Kutta method with stage matrix A is stiffly accurate when its output weights equal the last row of A. On y′ = λy, with z = hλ, the output is then the last stage: the last entry of (I − zA)⁻¹ times the starting value in every entry.

**Problem.** Suppose a stiffly accurate method is A-stable, with amplification of magnitude at most one for Re z ≤ 0, and A is invertible. Then it is L-stable: its amplification also tends to zero as \|z\| tends to infinity.

**How the definition helps.** The output is the last stage, so it suffices that (I − zA)⁻¹ tends to zero (our own argument). For invertible A, (I − zA)⁻¹ = −z⁻¹(A − z⁻¹I)⁻¹, which tends to zero as \|z\| grows.

**Wikipedia:** [L-stability](https://en.wikipedia.org/wiki/L-stability). It says: “A method is L-stable if it is A-stable and φ(z) → 0 as z → ∞,”

**Sources:** none listed. No primary source with a working link was found.

### The inner-product logarithmic norm bounds solution growth by exp(μt)

**Remember:** Only the Hermitian part controls how fast the length can grow.

*True by definition.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 15A60. arXiv math.NA. Level 3: graduate.

**Definition.** For a complex square matrix A with the Euclidean norm, the logarithmic norm μ(A) is the largest value of Re⟨x, Ax⟩ over unit vectors x. It equals the largest eigenvalue of the Hermitian part (A + A\*)/2.

**Problem.** Every solution of x′ = Ax satisfies ‖x(t)‖ ≤ exp(μ(A)t) ‖x(0)‖ for t ≥ 0.

**How the definition helps.** The derivative of ‖x‖² is 2 Re⟨x, Ax⟩, which the definition bounds by 2μ(A)‖x‖². Grönwall’s inequality then gives the bound (our own proof). Wikipedia states that this inner-product definition agrees with the original one.

**Wikipedia:** [Logarithmic norm](https://en.wikipedia.org/wiki/Logarithmic_norm). It says: “the inner product definition is equivalent to the original definition”

**Sources:** none listed. No primary source with a working link was found.

### Flux-form finite volume schemes conserve totals by construction

**Remember:** One cell's outflow is its neighbour's inflow.

*True by definition.* MSC 65M08 (Finite volume methods for initial value and initial-boundary value problems involving PDEs). arXiv math.NA. Level 3: graduate.

**Definition.** Divide the domain into cells and represent each cell’s content by its volume times its average. Update contents by the net numerical flux across their faces over the step. Use the same integrated flux with opposite signs for the two cells sharing each interior face.

**Problem.** With no source terms, the total of the cell contents changes only by the fluxes through the outer boundary.

**How the definition helps.** Summing over cells, each interior face appears twice with opposite signs, so it cancels. Only the fluxes through boundary faces remain.

**Wikipedia:** [Finite volume method](https://en.wikipedia.org/wiki/Finite_volume_method). It says: “Because the flux entering a given volume is identical to that leaving the adjacent volume, these methods are conservative.”

**Sources:** none listed. No primary source with a working link was found.

### Lax's equivalence theorem trades convergence for stability

**Remember:** Bound every update power uniformly across grids up to each fixed time.

*Makes the theorem clean to state or prove.* MSC 65M12 (Stability and convergence of numerical methods for initial value and initial-boundary value problems involving PDEs), 65M06. arXiv math.NA. Level 3: graduate.

**Definition.** A linear scheme with update Sₕ and time step τₕ is Lax–Richtmyer stable if, for each fixed T &gt; 0, the powers Sₕⁿ are bounded in norm uniformly. The bound must hold for all admissible grids and all n with 0 ≤ nτₕ ≤ T.

**Problem.** A consistent linear finite difference scheme for a well-posed linear initial value problem converges if and only if it is stable.

**How the definition helps.** Stability keeps the propagation of local errors bounded on each fixed time interval, uniformly in the grid. Consistency makes the local errors vanish on smooth solutions. The Lax–Richtmyer equivalence theorem turns these two facts into convergence and back.

**Wikipedia:** [Lax equivalence theorem](https://en.wikipedia.org/wiki/Lax_equivalence_theorem), [Well-posed problem](https://en.wikipedia.org/wiki/Well-posed_problem). It says: “It states that for a linear consistent finite difference method for a well-posed linear initial value problem, the method is convergent if and only if it is stable.”

**Sources:**

- [P. D. Lax and R. D. Richtmyer, Survey of the Stability of Linear Finite Difference Equations, Communications on Pure and Applied Mathematics 9 (1956)](https://doi.org/10.1002/cpa.3160090206)

### Nonnegative inverses preserve positivity

**Remember:** A nonnegative matrix cannot turn nonnegative data negative.

*True by definition.* MSC 65M12 (Stability and convergence of numerical methods for initial value and initial-boundary value problems involving PDEs). arXiv math.NA. Level 3: graduate.

**Definition.** Write an implicit time step as Bu = Kv, with old state v and new state u. Require K to have nonnegative entries and B to be a nonsingular M-matrix: nonpositive off-diagonal entries and an inverse with nonnegative entries.

**Problem.** For a homogeneous step whose new state solves that implicit system, nonnegative old data give nonnegative new data.

**How the definition helps.** Then u = B⁻¹Kv applies two nonnegative matrices to v, so nonnegative v gives nonnegative u (our own words). To spot an M-matrix without inverting it, the cited theorem uses positive diagonal entries that exceed the other absolute entries of their row combined.

**Paper or page:** [Flux-corrected transport stabilization of an evolutionary cross-diffusion cancer invasion model](https://arxiv.org/abs/2307.08096v1). It says: “Then 𝔹 is an M-matrix”

**Sources:**

- [Shahin Heydari, Petr Knobloch, and Thomas Wick. Flux-corrected transport stabilization of an evolutionary cross-diffusion cancer invasion model (2024).](https://doi.org/10.1016/j.jcp.2023.112711)

### Coercivity makes the Galerkin solution nearly the best approximation

**Remember:** Test in the trial space so its directions disappear from the error equation.

*True by definition.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 35A15. arXiv math.NA, math.AP. Level 3: graduate.

**Definition.** Let a be a bilinear form on a real Hilbert space that is coercive, a(v,v) ≥ α‖v‖², and bounded, \|a(v,w)\| ≤ γ‖v‖‖w‖, with α, γ &gt; 0. The Galerkin approximation uₕ in a finite-dimensional subspace Vₕ satisfies a(uₕ,v) = a(u,v) for every v in Vₕ, so a(u − uₕ, v) = 0 there.

**Problem.** The error of the Galerkin solution is at most γ/α times the error of the best approximation of u from Vₕ. This is Céa's lemma, the basic error bound of the finite element method.

**How the definition helps.** Galerkin orthogonality lets us replace the error e = u − uₕ by u − w in the second slot, for any w in Vₕ. So α‖e‖² ≤ a(e,e) = a(e,u − w) ≤ γ‖e‖‖u − w‖; divide by α‖e‖ when e ≠ 0 and minimize over w (our own argument).

**Wikipedia:** [Céa's lemma](https://en.wikipedia.org/wiki/C%C3%A9a%27s_lemma). It says: “That is to say, the subspace solution uₕ is "the best" approximation of u in Vₕ, up to the constant γ/α.”

**Sources:**

- [J. Céa, Approximation variationnelle des problèmes aux limites, Annales de l'Institut Fourier 14 (1964)](https://doi.org/10.5802/aif.181)

### Defining linear elements by vertex values makes them continuous across faces

**Remember:** On a shared face, only that face's vertex values matter.

*True by definition. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 65D05. arXiv math.NA. Level 3: graduate.

**Definition.** On a conforming simplicial mesh, give each vertex a real value and, on each simplex, take the unique affine function with those vertex values. Its restriction to a face is the affine function fixed by that face’s vertex values alone.

**Problem.** On a conforming simplicial mesh, the piecewise linear function defined by vertex values is continuous.

**How the definition helps.** Two simplices sharing a face therefore give the same restriction there, so the pieces join continuously (our own argument).

**Wikipedia:** [Barycentric coordinate system](https://en.wikipedia.org/wiki/Barycentric_coordinate_system). It says: “With above notation, the homogeneous barycentric coordinates of Aᵢ are all zero, except the one of index i.”

**Sources:** none listed. No primary source with a working link was found.

### Galerkin solutions as energy projections make nested errors obey Pythagoras

**Remember:** The new correction and the remaining error are perpendicular in energy.

*True by definition. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 65N15. arXiv math.NA. Level 3: graduate.

**Definition.** Let a be a symmetric coercive bilinear form on a real trial space, with energy norm ‖v‖ₐ = √a(v,v). For a finite-dimensional subspace V, the Galerkin projection of u is the element uᵥ in V satisfying a(u−uᵥ,v) = 0 for every v in V.

**Problem.** Let V₁ ⊆ V₂ be trial spaces with Galerkin solutions u₁ and u₂. Then ‖u − u₁‖² = ‖u − u₂‖² + ‖u₂ − u₁‖² in the energy norm.

**How the definition helps.** The error u − u₂ is energy-orthogonal to V₂, which contains u₂ − u₁, so Pythagoras applies to u − u₁ = (u − u₂) + (u₂ − u₁). The nested-space argument is our own.

**Wikipedia:** [Galerkin method](https://en.wikipedia.org/wiki/Galerkin_method). It says: “The key property of the Galerkin approach is that the error is orthogonal to the chosen subspaces.”

**Sources:** none listed. No primary source with a working link was found.

### Optimal test functions make Petrov–Galerkin methods inherit continuous inf-sup stability

**Remember:** Keep the best test function for every trial function.

*True by definition. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 65J10, 65N12. arXiv math.NA. Level 3: graduate.

**Definition.** Let b be a bounded bilinear form on a real trial space U and a real Hilbert test space V. The optimal test function Tu of u is the Riesz representer of b(u,·), so ⟨Tu,v⟩ = b(u,v) for every v in V. A discrete trial space Uₕ is tested against T(Uₕ).

**Problem.** Assume every nonzero u in U satisfies supᵥ≠₀ b(u,v)/‖v‖ ≥ γ‖u‖ with γ &gt; 0. Restricting trials to Uₕ and tests to T(Uₕ) preserves this bound with the same γ.

**How the definition helps.** By Riesz, the continuous supremum of b(u,v)/‖v‖ equals ‖Tu‖ and is attained at v = Tu, which is nonzero by the lower bound. Since Tu lies in T(Uₕ), the discrete supremum is the same, so the bound holds with the same γ (our own proof).

**Paper or page:** [Stabilization of isogeometric finite element method with optimal test functions computed from L₂ norm residual minimization](https://arxiv.org/abs/2411.15565v1). It says: “which guarantee automatic preservation of the inf-sup condition of the continuous formulation.”

**Sources:**

- [Marcin Łoś, Tomasz Służalec, Maciej Paszyński, Eirik Valseth, Stabilization of isogeometric finite element method with optimal test functions computed from L₂ norm residual minimization, arXiv:2411.15565v1 (2024)](https://arxiv.org/abs/2411.15565v1)
- [Leszek Demkowicz, Jay Gopalakrishnan, A class of discontinuous Petrov–Galerkin methods. II. Optimal test functions, Numerical Methods for Partial Differential Equations (2010)](https://doi.org/10.1002/num.20640)

### Trial gradients recover Galerkin

**Remember:** Put every trial gradient in the flux space, and projection changes nothing.

*True by definition.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs). arXiv math.NA. Level 3: graduate.

**Definition.** The mixed method seeks a scalar uₕ in a conforming trial space Vₕ with zero boundary values and a flux σₕ in a vector space Wₕ that contains every trial gradient. It requires σₕ to be the L² projection of ∇uₕ onto Wₕ, ⟨σₕ−∇uₕ,τ⟩ = 0 for every τ in Wₕ, and ⟨σₕ,∇v⟩ = ⟨f,v⟩ for every v in Vₕ.

**Problem.** The computed flux equals ∇uₕ. The computed function uₕ satisfies the standard Galerkin equations ⟨∇uₕ,∇v⟩ = ⟨f,v⟩ for every v in Vₕ.

**How the definition helps.** The L² projection onto Wₕ leaves ∇uₕ unchanged because Wₕ contains it, so σₕ = ∇uₕ (our own explanation). Substituting this into the second equation gives the Galerkin equations.

**Paper or page:** [On the necessity of the inf-sup condition for a mixed finite element formulation](https://arxiv.org/abs/2206.06968v2). It says: “The other component of the solution is given by σₕ = ∇uₕ.”

**Sources:**

- [Fleurianne Bertrand, Daniele Boffi, On the necessity of the inf-sup condition for a mixed finite element formulation](https://arxiv.org/abs/2206.06968v2)

### A reversibility check keeps implicit Hamiltonian Monte Carlo unbiased

**Remember:** Keep only proposals that return to their start when applied twice.

*Rules out counterexamples.* MSC 65C05 (Monte Carlo methods), 65C40, 65P10. arXiv math.NA, stat.CO. Level 4: research.

**Definition.** The checked step builds the proposal F = R∘Φ from a deterministic numerical Hamiltonian step Φ and the momentum flip R. It rejects the proposal when the solver fails or when F(F(x)) ≠ x, that is, when applying F again does not return to the start; otherwise it applies the Metropolis rule.

**Problem.** Suppose Φ preserves volume on its reversible branches and the momentum flip preserves volume and the Hamiltonian. The checked Metropolis update leaves the Hamiltonian target measure invariant.

**How the definition helps.** On accepted points F is its own inverse, so it pairs each move with its reverse (our own). With volume preserved, the Metropolis rule then gives each pair equal probability flux under the target density (our own). Without the check, an implicit solver can choose a different solution branch on the way back.

**Paper or page:** [Unbiasing Hamiltonian Monte Carlo algorithms for a general Hamiltonian function](https://arxiv.org/abs/2303.15918v2). It says: “We show here how to enforce the numerical reversibility, and thus unbiasedness, of HMC schemes in this context by introducing a reversibility check.”

**Sources:**

- [Tony Lelièvre, Régis Santet, Gabriel Stoltz, Unbiasing Hamiltonian Monte Carlo algorithms for a general Hamiltonian function, arXiv:2303.15918v2 (2023)](https://arxiv.org/abs/2303.15918v2)

### Describing summation by its tree bounds rounding error through tree height

**Remember:** Each input picks up one rounding factor per addition above it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 65G50 (Roundoff error). arXiv math.NA. Level 4: research.

**Definition.** A summation tree records the order of a floating-point sum, with one input at each leaf and one rounded addition at each internal node. Its height h is the largest number of additions on any path from a leaf to the root, so no input passes through more than h roundings.

**Problem.** Assume each addition has relative rounding error at most u. Then the computed sum differs from the exact sum by at most ((1 + u)ʰ − 1) Σ\|xⱼ\|.

**How the definition helps.** Each input is multiplied by one factor 1+δ, with \|δ\| ≤ u, for each addition on its path, and there are at most h of them. A product of at most h such factors differs from 1 by at most (1+u)ʰ−1. Multiplying by each \|xⱼ\| and summing gives the bound (our own).

**Paper or page:** [Precision-aware Deterministic and Probabilistic Error Bounds for Floating Point Summation](https://arxiv.org/abs/2203.15928v1). It says: “If h is the height of the computational tree”

**Sources:**

- [Precision-aware Deterministic and Probabilistic Error Bounds for Floating Point Summation](https://arxiv.org/abs/2203.15928v1)

### Olver's logarithmic relative error makes the errors of products add

**Remember:** Logarithms turn relative changes in a product into a sum.

*True by definition. Confidence: medium.* MSC 65G50 (Roundoff error). arXiv math.NA. Level 4: research.

**Definition.** Olver’s relative precision measures the error of x̃ as the logarithm of its ratio to x: rp(x̃,x) = \|ln(x̃/x)\| for nonzero real numbers x and x̃ of the same sign.

**Problem.** If x̃₁ has the sign of x₁ and x̃₂ has the sign of x₂, then rp(x̃₁x̃₂, x₁x₂) ≤ rp(x̃₁, x₁) + rp(x̃₂, x₂).

**How the definition helps.** Logarithms turn the ratio of products into a sum, ln(x̃₁x̃₂/(x₁x₂)) = ln(x̃₁/x₁) + ln(x̃₂/x₂). The triangle inequality for absolute values then gives the bound (our own).

**Paper or page:** [Mechanizing Olver's Error Arithmetic](https://arxiv.org/abs/2510.13414v1). It says: “s ∼ s̃ ; rp(nu/(1 − u)),”

**Sources:**

- [Mechanizing Olver's Error Arithmetic](https://arxiv.org/abs/2510.13414v1)

### Counting derivative factors, not trees, gives unique one-dimensional B-series

**Remember:** Count the derivative factors rather than the trees that produce them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 65L06 (Multistep, Runge-Kutta and extrapolation methods for ordinary differential equations), 65L05, 16T30. arXiv math.NA. Level 4: research.

**Definition.** A rooted-tree multi-index β records, for each k ≥ 0, how many vertices of a rooted tree have k children; formally it is a finitely supported sequence of nonnegative integers with ∑ₖ(1−k)β(k) = 1. A multi-index B-series for y′ = f(y) indexes its terms by β, using the derivative product ∏ₖ f⁽ᵏ⁾(y)<sup>β</sup>(k) in place of a tree’s elementary differential.

**Problem.** In one dimension, multi-index B-series uniquely describe the Taylor expansions of local maps that commute with affine changes of variables. Substituting one such series into another gives a third, with coefficients determined by a product on multi-indices.

**How the definition helps.** In one dimension a tree’s elementary differential depends only on how many vertices have each number of children, so such trees give the same term (our own explanation). Distinct multi-indices give distinct monomials in the derivatives, so their coefficients are unique. The local affine-equivariant characterization supplies existence, and the multi-index substitution theorem gives the coefficient product.

**Paper or page:** [Multi-indice B-series](https://arxiv.org/abs/2402.13971v3). It says: “The combinatorial shift away from rooted trees allows for a compressed description of numerical schemes.”

**Sources:**

- [Yvain Bruned, Kurusch Ebrahimi-Fard, Yingtong Hou, Multi-indice B-series, arXiv:2402.13971v3 (2024). Journal of the London Mathematical Society, 111, Issue 1, (2025), e70049](https://arxiv.org/abs/2402.13971v3)

### Tree cuts compose numerical steps

**Remember:** Cut a tree to see which step supplies each derivative.

*Makes the theorem clean to state or prove.* MSC 65L06 (Multistep, Runge-Kutta and extrapolation methods for ordinary differential equations). arXiv math.NA. Level 4: research.

**Definition.** A B-series step adds to y the formal sum of a(t)hⁿF(t)(y)/σ(t) over nonempty unlabelled rooted trees t, where n counts vertices, σ(t) counts root-preserving automorphisms and a(t) is a scalar coefficient. The elementary differential nests derivatives of f along the tree: F(•) = f and F(\[t₁,…,tₖ\]) = f⁽ᵏ⁾(F(t₁),…,F(tₖ)). Each vertex is one factor of f or a derivative of f, so cutting the tree splits these factors between two steps (our own).

**Problem.** The composition of two such steps is another B-series. Its coefficients come from cuts that split each tree into a connected part containing the root and the branches above it.

**How the definition helps.** A cut records which derivative factors come from the outer step and which from the inner one (our own explanation). The coefficient is the outer coefficient of the root part times the inner coefficients of the detached branches, summed over all cuts, including the one with empty root part. The composition theorem shows that Taylor substitution gives exactly these multiplicities.

**nLab:** [Butcher group](https://ncatlab.org/nlab/show/Butcher+group). It says: “The elements of the group are (generalised) numerical schemes which contain the Runge-Kutta schemes and the group product encodes composition of numerical schemes.”

**Paper or page:** [On the B-series composition theorem](https://arxiv.org/abs/2409.08533v1). It says: “is also a B-series”

**Sources:**

- [John C. Butcher, Taketomo Mitsui, Yuto Miyatake, Shun Sato, On the B-series composition theorem](https://arxiv.org/abs/2409.08533v1)
- [J. C. Butcher, An algebraic theory of integration methods (1972)](https://doi.org/10.1090/S0025-5718-1972-0305608-0)

### Boundary penalties constrain eigenvalues

**Remember:** The penalty flips the left boundary term from minus to plus.

*True by definition.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 65L12. arXiv math.NA. Level 4: research.

**Definition.** A real summation-by-parts matrix D has a symmetric positive definite weight H with HD + DᵀH = qqᵀ − ppᵀ + S, where p and q evaluate grid vectors at the left and right ends and S is symmetric positive semidefinite. The left boundary penalty adds H⁻¹ppᵀ to D, which turns the term −ppᵀ into +ppᵀ.

**Problem.** Every eigenvalue of the modified matrix has nonnegative real part. Equality holds precisely when its eigenvector w satisfies pᵀw = qᵀw = 0 and Sw = 0.

**How the definition helps.** For an eigenpair (λ,w) of the modified matrix, 2Re(λ)·w\*Hw = \|pᵀw\|² + \|qᵀw\|² + w\*Sw (our own argument). Since w\*Hw &gt; 0 and all three terms are nonnegative, Re(λ) ≥ 0. Equality needs each term to vanish, and w\*Sw = 0 exactly when Sw = 0.

**Paper or page:** [On an eigenvalue property of Summation-By-Parts operators](https://arxiv.org/abs/2201.01193v1). It says: “Then Re(λ) ≥ 0 with equality if and only if p₀ᵀw = pₙᵀw = 0 and Sw = 0.”

**Sources:**

- [Viktor Linders, On an eigenvalue property of Summation-By-Parts operators](https://arxiv.org/abs/2201.01193v1)

### Discrete gradients make energy decrease exactly in dissipative schemes

**Remember:** Use the exact energy difference instead of a derivative approximation.

*True by definition. Confidence: medium.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 65M12. arXiv math.NA. Level 4: research.

**Definition.** A discrete gradient of E is a map g(x,y) that reproduces the exact energy change: g(x,y)·(y−x) = E(y)−E(x) for all x,y in ℝⁿ, with g(x,x) = ∇E(x). A discrete gradient step solves y − x = τS g(x,y) for the next state y.

**Problem.** If S is negative semidefinite and τ &gt; 0, every step of the discrete gradient scheme satisfies E(yₙ₊₁) ≤ E(yₙ).

**How the definition helps.** The defining identity gives E(y)−E(x) = τ g(x,y)ᵀS g(x,y) (our own argument). This is nonpositive because τ &gt; 0 and S is negative semidefinite.

**Paper or page:** [A second-order length-preserving and unconditionally energy stable rotational discrete gradient method for Oseen-Frank gradient flows](https://arxiv.org/abs/2308.12884v1). It says: “is length-preserving and energy stable”

**Sources:**

- [A second-order length-preserving and unconditionally energy stable rotational discrete gradient method for Oseen-Frank gradient flows](https://arxiv.org/abs/2308.12884v1)

### Dual-pairing summation-by-parts operators make upwind schemes energy stable

**Remember:** Paired derivatives cancel, and their difference only removes energy.

*True by definition. Confidence: medium.* MSC 65M06 (Finite difference methods for initial value and initial-boundary value problems involving PDEs), 65M12. arXiv math.NA. Level 4: research.

**Definition.** Dual-pairing derivative matrices D₊ and D₋ on a periodic grid are adjoint up to sign in the H-weighted inner product: HD₊ = −D₋ᵀH for a positive diagonal matrix H. An upwind pair also has a dissipative difference: uᵀH(D₊−D₋)u ≤ 0 for every real grid vector u.

**Problem.** Take the paper’s periodic scheme for a constant symmetric flux matrix A, applying D₋ to (Au+γu)/2 and D₊ to (Au−γu)/2, where γ is the largest absolute eigenvalue of A. Its H-weighted sum of squares does not increase in time.

**How the definition helps.** The pairing identity cancels the part with A because A is symmetric (our own argument). The energy derivative is then the sum of γuᵢᵀH(D₊−D₋)uᵢ over the solution components, and each term is nonpositive.

**Paper or page:** [A dual-pairing summation-by-parts finite difference framework for nonlinear conservation laws](https://arxiv.org/abs/2411.06629v2). It says: “∂ₜ ‖u‖<sub>H</sub>² = ∑ᵢ γᵢ⟨uᵢ, (D₊ − D₋)uᵢ⟩<sub>H</sub> ≤ 0”

**Sources:**

- [A dual-pairing summation-by-parts finite difference framework for nonlinear conservation laws](https://arxiv.org/abs/2411.06629v2)

### Summation-by-parts derivatives make split-form schemes conserve totals

**Remember:** Move the derivative onto the constant vector and get zero.

*True by definition.* MSC 65M06 (Finite difference methods for initial value and initial-boundary value problems involving PDEs), 65M12. arXiv math.NA. Level 4: research.

**Definition.** A periodic summation-by-parts derivative D gives zero on constants, D1 = 0, and is skew-adjoint for a positive diagonal weight H: HD = −DᵀH, so ⟨u,Dv⟩<sub>H</sub> = −⟨Du,v⟩<sub>H</sub> with ⟨u,v⟩<sub>H</sub> = uᵀHv.

**Problem.** In the paper's periodic split-form scheme, the H-weighted total of each solution component stays constant in time.

**How the definition helps.** The weighted total of a component is ⟨1,u⟩<sub>H</sub>, and skew-adjointness moves the derivative onto the constant vector. The paper’s split-form identity gives ⟨1,F⟩<sub>H</sub> = −⟨D1,f⟩<sub>H</sub> for flux f and discrete flux derivative F, and this is zero since D1 = 0.

**Paper or page:** [A dual-pairing summation-by-parts finite difference framework for nonlinear conservation laws](https://arxiv.org/abs/2411.06629v2). It says: “⟨1, Fᵢ(u, f(u), D)⟩<sub>H</sub> = −⟨D1, fᵢ⟩<sub>H</sub> = 0”

**Sources:**

- [A dual-pairing summation-by-parts finite difference framework for nonlinear conservation laws](https://arxiv.org/abs/2411.06629v2)

### On a two-sided fracture mesh, every discrete boundary form is a trace

**Remember:** Give each side of a crack its own copy of the boundary.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 58A10, 65N50. arXiv math.NA. Level 4: research.

**Definition.** The inflated mesh removes cell adjacencies across chosen fracture faces, so each side of a crack gets its own copy of the boundary. At each fracture point, each group of incident cells still linked by faces through that point gets its own copy of the point (our own). A trace restricts a discrete differential form to this boundary.

**Problem.** For edge and face elements (degrees 1 and 2), every boundary form on the fractured mesh extends to the volume. For nodal elements (degree 0), this holds exactly when the fracture has no point contacts.

**How the definition helps.** Separate copies let boundary data differ on the two sides of a crack (our own). The paper’s trace theorem uses a local extension criterion for boundary degrees of freedom. At a point contact, boundary nodal values can disagree where a volume extension needs them to agree (our own).

**Paper or page:** [Fractured Meshes](https://arxiv.org/abs/2212.14222v1). It says: “Discrete d-differential forms on the virtually inflated mesh are characterized as the trace space of discrete d-differential forms in the surrounding volume.”

**Sources:**

- [Martin Averseng, Xavier Claeys, Ralf Hiptmair, Fractured Meshes, arXiv:2212.14222v1 (2022)](https://arxiv.org/abs/2212.14222v1)

### Polynomials solving a PDE to Taylor order are fixed by hyperplane data

**Remember:** Solve the equation only to Taylor order at one point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 35J15. arXiv math.NA. Level 4: research.

**Definition.** A quasi-Trefftz polynomial solves the linear equation Lu = f of order m, with smooth data, only to Taylor order at a point c. It has degree at most p ≥ m, and every derivative ∂ᵅ(Lv − f) with \|α\| ≤ p − m vanishes at c.

**Problem.** Assume the coefficient of ∂₁ᵐ in L is nonzero at c. On the hyperplane x₁=c₁, prescribe each derivative ∂₁ʲv as a polynomial of degree at most p−j for 0≤j&lt;m. Exactly one quasi-Trefftz polynomial has these data.

**How the definition helps.** The Taylor conditions are finitely many linear equations for the polynomial’s coefficients (our own). Because the coefficient of ∂₁ᵐ is nonzero at c, they can be solved for the higher x₁-derivatives one order at a time, as in the Cauchy–Kovalevskaya theorem (our own). The hyperplane data fix the lower x₁-derivatives, so exactly one solution exists (our own).

**Paper or page:** [Polynomial quasi-Trefftz DG for PDEs with smooth coefficients: elliptic problems](https://arxiv.org/abs/2408.00392v2). It says: “Quasi-Trefftz methods overcome this limitation relying on elementwise "approximate solutions" of the PDE, in the sense of Taylor polynomials.”

**Sources:**

- [Lise-Marie Imbert-Gérard, Andrea Moiola, Chiara Perinati, Paul Stocker, Polynomial quasi-Trefftz DG for PDEs with smooth coefficients: elliptic problems, arXiv:2408.00392v2 (2024)](https://arxiv.org/abs/2408.00392v2)

### Pressure spaces containing all velocity divergences make discrete flows exactly divergence-free

**Remember:** Test the divergence against itself to show it vanishes.

*True by definition. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 76D07. arXiv math.NA. Level 4: research.

**Definition.** A compatible pair has a divergence-conforming velocity space Vₕ, with square-integrable divergence and matching normal components across shared faces, and a pressure space Qₕ that contains div v for every v in Vₕ.

**Problem.** Assume div Vₕ ⊆ Qₕ. Let a discrete velocity v satisfy ∫ q div v = 0 for all q in Qₕ. Then div v = 0.

**How the definition helps.** Because div v lies in Qₕ, the constraint can be tested with q = div v itself (our own argument). This gives ∫(div v)² = 0, so div v = 0 almost everywhere.

**Paper or page:** [Design and analysis of an exactly divergence-free hybridized discontinuous Galerkin method for incompressible flows on meshes with quadrilateral cells](https://arxiv.org/abs/2306.05288v2). It says: “then discretely divergence-free functions are weakly divergence-free”

**Sources:**

- [Design and analysis of an exactly divergence-free hybridized discontinuous Galerkin method for incompressible flows on meshes with quadrilateral cells](https://arxiv.org/abs/2306.05288v2)

### Seeking solutions in the range of nodal clipping makes bounds automatic

**Remember:** Clip the node values before calling them the solution.

*True by definition.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 65N15. arXiv math.NA. Level 4: research.

**Definition.** The nodal clipping map pushes each nodal value t into that node’s allowed interval \[a,b\], replacing it by min(b, max(a,t)). The method seeks its finite element solution in the range of this map, so every candidate already meets the bounds.

**Problem.** The numerical solution satisfies the known bounds at every node, by construction. For linear reaction-diffusion problems, it is also the best approximation in the energy norm among all nodally bound-preserving finite element functions.

**How the definition helps.** Every function in the range of the clipping map meets its nodal bounds. For the paper’s linear reaction-diffusion scheme, the clipped solution satisfies the discrete obstacle variational inequality. That inequality characterizes the energy-norm best approximation of the exact solution among bound-preserving functions (our own explanation).

**Paper or page:** [A Nodally Bound-Preserving Finite Element Method](https://arxiv.org/abs/2304.01067v1). It says: “The discrete problem involves a nonlinear projection operator mapping arbitrary nodal values into bound-preserving ones and seeks the numerical solution in the range of this projection.”

**Sources:**

- [Gabriel Barrenechea, Emmanuil Georgoulis, Tristan Pryer, Andreas Veeser, A Nodally Bound-Preserving Finite Element Method, arXiv:2304.01067v1 (2023)](https://arxiv.org/abs/2304.01067v1)
- [Gabriel Barrenechea, Emmanuil Georgoulis, Tristan Pryer, Andreas Veeser, A nodally bound-preserving finite element method, IMA Journal of Numerical Analysis 44 (2024) 2198–2219](https://doi.org/10.1093/imanum/drad055)
