### Sharing endpoint slopes joins Hermite pieces without corners

**Remember:** Match heights and slopes to join the pieces smoothly.

*True by definition.* MSC 65D07 (Numerical computation using splines). arXiv math.NA. Level 1: early undergraduate.

**Definition.** A cubic Hermite spline uses a polynomial of degree at most three between each pair of neighboring nodes. At each node, both adjoining pieces use the same prescribed value and slope.

**Problem.** The pieces form a continuously differentiable interpolant of the given values and slopes.

**How the definition helps.** The matching values join the pieces, and the matching slopes join their derivatives. In our own argument, prescribing slopes rules out corners that can remain when only values match. Existence on each interval follows from the two-node Hermite interpolation theorem.

**Wikipedia:** [Cubic Hermite spline](https://en.wikipedia.org/wiki/Cubic_Hermite_spline). It says: “The resulting spline will be continuous and will have continuous first derivative.”

**Sources:** none listed. No primary source with a working link was found.

### Centering Simpson’s interpolant makes the cubic term cancel

**Remember:** The missing cubic is odd, so its integral is zero.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas), 65D30. arXiv math.NA. Level 1: early undergraduate.

**Definition.** Define Simpson’s one-panel rule as the integral of the quadratic interpolant at the endpoints and midpoint. Measure the variable from the midpoint, so the nodes are −h, 0 and h.

**Problem.** Simpson’s one-panel rule is exact for every polynomial of degree at most three.

**How the definition helps.** Centering the interpolation nodes makes the cubic interpolation error odd. In our own proof, the error vanishes at −h, 0 and h, so it is a constant multiple of x(x − h)(x + h). Its integral over the symmetric interval is zero. This proves exactness without testing the usual Simpson weights on four monomials.

**Wikipedia:** [Simpson's rule](https://en.wikipedia.org/wiki/Simpson%27s_rule). It says: “The approximate equality in the rule becomes exact if f is a polynomial up to and including 3rd degree.”

**Sources:** none listed. No primary source with a working link was found.

### Integrating the interpolant gives exactness on low degree polynomials

**Remember:** Integrate the interpolant and keep every polynomial it already reproduces.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas), 65D30. arXiv math.NA. Level 1: early undergraduate.

**Definition.** An interpolatory quadrature rule estimates an integral on a bounded interval using n distinct sample points. It integrates the polynomial of degree at most n − 1 that matches the sampled values.

**Problem.** Every interpolatory rule with n distinct nodes integrates all polynomials of degree at most n − 1 exactly.

**How the definition helps.** Each polynomial of degree at most n − 1 matches its own samples, so uniqueness makes it its own interpolant. In our own proof, integrating therefore gives the exact answer. Integrating each Lagrange basis polynomial gives the corresponding weight in the usual sum.

**Wikipedia:** [Newton–Cotes formulas](https://en.wikipedia.org/wiki/Newton%E2%80%93Cotes_formulas). It says: “The weights can be computed as the integral of Lagrange basis polynomials.”

**Sources:** none listed. No primary source with a working link was found.

### Treating a residual as a data change gives exact backward error

**Remember:** Change only the right side and the residual is the whole error.

*True by definition. Confidence: medium.* MSC 65F35 (Numerical computation of matrix norms, conditioning, scaling). arXiv math.NA. Level 1: early undergraduate.

**Definition.** For a proposed solution v to Ax = b, change only b so that v solves the new system exactly. The absolute right-side backward error is the smallest length of such a change, measured in a chosen vector norm.

**Problem.** For a computed vector v and any vector norm, the absolute right-side backward error equals ‖b − Av‖.

**How the definition helps.** Fixing A leaves exactly one possible change to b, namely Av − b. In our own argument, its norm equals the norm of the residual b − Av. Allowing A to change as well would give a different minimization problem.

**Wikipedia:** [Residual (numerical analysis)](https://en.wikipedia.org/wiki/Residual_%28numerical_analysis%29). It says: “If the exact value of x is not known, the residual can be computed, whereas the error cannot.”

**Sources:** none listed. No primary source with a working link was found.

### Sign brackets certify bisection error

**Remember:** Keep opposite signs and halve the error bound.

*Rules out counterexamples.* MSC 65H05 (Numerical computation of solutions to single equations). arXiv math.NA. Level 1: early undergraduate.

**Definition.** For a continuous real function, a sign bracket is a closed interval whose endpoint values have opposite signs. Bisect it and keep the half with opposite endpoint signs. Stop if the midpoint is a root.

**Problem.** In exact arithmetic, each retained interval contains a root within half its width of its midpoint.

**How the definition helps.** Opposite signs guarantee a root by the intermediate value theorem, so half the interval width bounds the midpoint error. Each bisection halves that bound. In our own example, x² + 1 on \[−1,1\] has no root despite having a minimum inside the interval.

**Wikipedia:** [Bisection method](https://en.wikipedia.org/wiki/Bisection_method). It says: “Once the process starts, the signs at the left and right ends of the interval remain the same for all iterations.”

**Sources:** none listed. No primary source with a working link was found.

### Romberg estimates as extrapolation to zero cancel the leading error terms

**Remember:** Interpolation at zero removes every fitted power of the spacing.

*True by definition. Confidence: medium.* MSC 65B05 (Extrapolation to the limit, deferred corrections), 65D32. arXiv math.NA. Level 2: later undergraduate.

**Definition.** Let T(h) be the trapezoidal estimate with spacing h. Define a Romberg estimate as the value at zero of the polynomial in h² that interpolates T at k + 1 spacings. The usual definition is the recursive Romberg table, which combines neighbouring estimates to remove one error term at a time. Neville's algorithm shows that the two agree.

**Problem.** Suppose T(h) = I + c₁h² + … + cₖh²ᵏ + O(h²ᵏ⁺²), where I is the integral. Take spacings h₀, …, hₖ that are fixed distinct multiples of h. Then the Romberg estimate differs from I by O(h²ᵏ⁺²).

**How the definition helps.** With the interpolation definition, the polynomial part of the error disappears at once: interpolation of degree k in h² reproduces I + c₁h² + … + cₖh²ᵏ exactly, so its value at zero is I. The weights for the value at zero depend only on the ratios of the spacings, so the remainders add only O(h²ᵏ⁺²). The work goes into the Euler–Maclaurin formula, which gives the even-power expansion, and into Neville's algorithm. The argument is our own.

**Wikipedia:** [Romberg's method](https://en.wikipedia.org/wiki/Romberg%27s_method). It says: “by applying Richardson extrapolation repeatedly on the trapezium rule or the rectangle rule”

**Sources:**

- [Lewis Fry Richardson, The approximate arithmetical solution by finite differences of physical problems involving differential equations, with an application to the stresses in a masonry dam (1911).](https://doi.org/10.1098/rsta.1911.0009)

### Periodized Bernoulli polynomials turn Euler–Maclaurin into integration by parts

**Remember:** Repeat one polynomial on every unit interval to get the endpoint corrections.

*Makes the theorem clean to state or prove.* MSC 65B15 (Euler-Maclaurin formula in numerical analysis), 41A60. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let P₁(x) equal the fractional part of x minus ½. For j ≥ 2, choose continuous period-one Pⱼ with mean zero and derivative jPⱼ₋₁ between consecutive integers.

**Problem.** Suppose m&lt;n are integers and f has 2p continuous derivatives on \[m,n\], with p≥1. Writing \[g\]=g(n)−g(m), Euler–Maclaurin gives f(m+1)+⋯+f(n) = ∫ₘⁿ f(x)dx+\[f\]/2+∑ⱼ₌₁ᵖ P₂ⱼ(0)\[f⁽²ʲ⁻¹⁾\]/(2j)!−∫ₘⁿ P₂ₚ(x)f⁽²ᵖ⁾(x)dx/(2p)!.

**How the definition helps.** Periodic primitives turn each new correction into one more integration by parts. In our own derivation, P₁ gives the trapezoid error on each unit interval. Later integrations use the derivative rule between integers, and continuity cancels the interior boundary terms. Reflection about ½ and the zero means give Pⱼ(0)=0 for odd j≥3.

**nLab:** [Euler-MacLaurin formula](https://ncatlab.org/nlab/show/Euler-MacLaurin+formula). It says: “It involves Bernoulli numbers.”

**Paper or page:** [The Leray transform: distinguished measures, symmetries and polygamma inequalities](https://arxiv.org/abs/2401.17490v3). It says: “P₁(x) = B₁(x−⌊x⌋), B₁(x) = x−½ is the first Bernoulli polynomial”

**Sources:** none listed. No primary source with a working link was found.

### Adding the evaluation point makes interpolation error one Newton term

**Remember:** Append the point of interest and read off the one extra term.

*True by definition.* MSC 65D05 (Numerical interpolation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For k distinct nodes, the divided difference is the coefficient of degree k − 1 in their polynomial interpolant, including when that coefficient is zero. In Newton form, appending a node adds this new coefficient times the product of x minus each old node.

**Problem.** Let f have n continuous derivatives on an interval containing n distinct nodes and a further point x. The interpolation error f(x) − p(x) equals f⁽ⁿ⁾(ξ) ∕ n! times the product of x minus each node, for some interior ξ.

**How the definition helps.** Adding x as a node makes the error at x equal the single term added in Newton form. In our own proof, interpolation at x identifies the new value with f(x). The mean value theorem for divided differences supplies the derivative at a point ξ between the outermost points.

**Wikipedia:** [Divided differences](https://en.wikipedia.org/wiki/Divided_differences). It says: “f\[x₀, …, xₙ\] = f⁽ⁿ⁾(ξ) ∕ n!”

**Sources:** none listed. No primary source with a working link was found.

### Counting derivative data as repeated zeros makes Hermite interpolation unique

**Remember:** A zero of multiplicity m uses up m degrees.

*Rules out counterexamples.* MSC 65D05 (Numerical interpolation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** In Hermite interpolation, a node with multiplicity m prescribes a value and the first m − 1 derivatives. With N conditions in total, the interpolating polynomial must have degree less than N.

**Problem.** Any such derivative data at distinct real nodes determine exactly one Hermite interpolating polynomial.

**How the definition helps.** A difference between two interpolants has a zero of multiplicity m at each node with m prescribed values and derivatives. In our own proof, these multiplicities total N, so the degree bound forces the difference to vanish. The linear map from polynomial coefficients to data is therefore injective. Both spaces have dimension N, so it also reaches every data vector.

**Wikipedia:** [Hermite interpolation](https://en.wikipedia.org/wiki/Hermite_interpolation). It says: “A theorem, commonly known as the Hermite interpolation theorem, asserts the existence and uniqueness of the resulting polynomial.”

**Sources:** none listed. No primary source with a working link was found.

### Divided differences as leading coefficients are symmetric in the nodes

**Remember:** Reordering the data cannot change the unique interpolating polynomial.

*True by definition. Confidence: medium.* MSC 65D05 (Numerical interpolation), 41A05. arXiv math.NA. Level 2: later undergraduate.

**Definition.** Take distinct nodes x₀, …, xₙ and the polynomial of degree at most n that interpolates f at them. Define f\[x₀, …, xₙ\] as its coefficient of xⁿ. The usual definition is recursive: f\[x₀, …, xₙ\] = (f\[x₁, …, xₙ\] − f\[x₀, …, xₙ₋₁\]) / (xₙ − x₀).

**Problem.** f\[x₀, …, xₙ\] does not change when the nodes are permuted.

**How the definition helps.** With the leading-coefficient definition, symmetry is immediate. The interpolating polynomial depends only on the set of data points, not on their order, so its leading coefficient does not either. From the recursive definition, symmetry needs an induction, and the work goes into the theorem that the leading coefficients satisfy the recursion. This argument is our own.

**Wikipedia:** [Divided differences](https://en.wikipedia.org/wiki/Divided_differences). It says: “Divided differences are symmetric”

**Sources:** none listed. No primary source with a working link was found.

### Falling factorials make Newton’s forward interpolation triangular

**Remember:** One forward difference drops the basis index by one.

*True by definition.* MSC 65D05 (Numerical interpolation), 39A70. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The normalized falling factorial Fₖ(x) is x(x−1)⋯(x−k+1)/k! for k ≥ 1, with F₀(x) = 1. The forward difference is Δf(x) = f(x+1)−f(x).

**Problem.** For data f(0), …, f(m), the unique interpolating polynomial of degree at most m has coefficient Δᵏf(0) on Fₖ for each k ≤ m.

**How the definition helps.** Unlike ordinary powers, normalized falling factorials shift down one place under a forward difference. In our own proof, applying k differences and evaluating at zero leaves exactly the coefficient of Fₖ. Only the first k+1 data values enter that difference. Polynomial interpolation at distinct points supplies existence and uniqueness.

**nLab:** [falling factorial](https://ncatlab.org/nlab/show/falling+factorial). It says: “it is the falling factorial xᵏ̲ that plays a role analogous to the ordinary power xᵏ.”

**Sources:** none listed. No primary source with a working link was found.

### Normalizing barycentric weights removes apparent poles from interpolation

**Remember:** Multiplying both sums by the node polynomial removes their poles.

*True by definition.* MSC 65D05 (Numerical interpolation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For distinct sample points, called nodes, let ω(x) be the product of the factors x − t over all nodes t. Give each node weight w(t) = 1 ∕ ω′(t). The barycentric interpolant divides the sum of f(t)w(t) ∕ (x − t) by the sum of w(t) ∕ (x − t).

**Problem.** Away from the nodes, the barycentric quotient equals the Lagrange interpolating polynomial. At a node its limit equals the prescribed value there.

**How the definition helps.** Multiplication by ω turns each fraction w(t) ∕ (x − t) into a polynomial that equals one at t and zero at every other node. In our own argument, these polynomials sum to one by uniqueness of interpolation. Their data-weighted sum is the usual Lagrange polynomial, which gives the stated limits.

**Wikipedia:** [Lagrange polynomial](https://en.wikipedia.org/wiki/Lagrange_polynomial). It says: “This is called the second form or true form of the barycentric interpolation formula.”

**Sources:**

- [Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation (2004)](https://doi.org/10.1137/S0036144502417715)

### Writing interpolants in Newton’s basis keeps old coefficients when nodes are added

**Remember:** A new Newton term vanishes at every old node.

*True by definition. Confidence: medium.* MSC 65D05 (Numerical interpolation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Given distinct nodes x₀, x₁, …, write the interpolating polynomial in Newton’s basis. Its jth basis polynomial is (x − x₀)(x − x₁)⋯(x − xⱼ₋₁), and the 0th is one. The Lagrange form instead uses, for each node, the polynomial equal to one there and zero at the other nodes.

**Problem.** Adding a new distinct node at the end of the list adds one Newton term and leaves the earlier coefficients unchanged.

**How the definition helps.** The new basis polynomial vanishes at every old node, so adding a multiple of it keeps all the old interpolation conditions. Its value at the new node is nonzero, so exactly one multiple fits the new data value, and uniqueness makes this sum the new interpolant. In the Lagrange form, every basis polynomial changes when a node is added. These proof steps are our own.

**Wikipedia:** [Newton polynomial](https://en.wikipedia.org/wiki/Newton_polynomial). It says: “The unique interpolating polynomial can alternatively be constructed using Lagrange polynomials as an alternative basis”

**Sources:** none listed. No primary source with a working link was found.

### De Casteljau's definition keeps Bézier curves inside the control points' convex hull

**Remember:** Averages of points in a convex set stay in that set.

*True by definition. Confidence: medium.* MSC 65D17 (Computer-aided design (modeling of curves and surfaces)), 41A10. arXiv cs.GR, math.NA. Level 2: later undergraduate.

**Definition.** Define the point B(t) of a Bézier curve by de Casteljau's algorithm. Replace each adjacent pair of control points P and Q by (1 − t)P + tQ, and repeat until one point remains. The polynomial definition is B(t) = Σ C(n, i) (1 − t)ⁿ⁻ⁱ tⁱ Pᵢ, with Bernstein polynomial weights.

**Problem.** For 0 ≤ t ≤ 1, the curve point B(t) lies in the convex hull of the control points.

**How the definition helps.** With de Casteljau's definition, each step forms convex combinations, so no step can leave the hull. For 0 ≤ t ≤ 1, the weights 1 − t and t are nonnegative and sum to 1. With the Bernstein definition the proof is also short, since the weights are nonnegative and sum to 1 by the binomial theorem. The work goes into the theorem that the two definitions agree.

**Wikipedia:** [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve). It says: “The convex hull of the Bézier polygon contains the Bézier curve.”

**Sources:** none listed. No primary source with a working link was found.

### De Casteljau’s triangle gives exact subdivisions

**Remember:** The two edges of the evaluation triangle trace the two pieces.

*True by definition.* MSC 65D17 (Computer-aided design (modeling of curves and surfaces)). arXiv math.NA, cs.NA. Level 2: later undergraduate.

**Definition.** Evaluate a Bézier curve by repeatedly interpolating between neighboring control points, using parameter s in \[0,1\] at each round. Arrange successive rounds in a triangle, with the original points across the top. Read its left edge down and its right edge up to obtain two new lists of control points. This replaces expanding and rescaling the coordinate polynomials.

**Problem.** The new Bézier curves reproduce the original on \[0,s\] and \[s,1\], with each parameter rescaled to \[0,1\].

**How the definition helps.** In our own proof, each edge records the results of mixing the split parameter with one endpoint parameter. Allow a separate parameter in each interpolation round. The result is affine in each parameter and symmetric because adjacent rounds commute. For the left piece, substitute st in every slot and expand each slot between 0 and s. The coefficients are precisely those of repeated interpolation at t using the left edge. Expanding between s and 1 gives the right edge in reverse row order.

**Wikipedia:** [De Casteljau's algorithm](https://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm). It says: “Note that the intermediate points that were constructed are in fact the control points for two new Bézier curves, both exactly coincident with the old one.”

**Sources:** none listed. No primary source with a working link was found.

### Weighted coordinates preserve Bézier projections

**Remember:** Transform the weighted vectors first and divide only at the end.

*True by definition.* MSC 65D17 (Computer-aided design (modeling of curves and surfaces)), 41A20. arXiv math.NA, cs.NA. Level 2: later undergraduate.

**Definition.** Start with positively weighted control points, the points used to construct the curve. Multiply each point by its weight and append the weight as a final coordinate. Construct the ordinary Bézier curve on these vectors by repeated linear interpolation between neighbors. Divide its first coordinates by its last to recover the rational curve.

**Problem.** Applying a projective change of coordinates to a rational Bézier curve is equivalent to applying its linear matrix to the weighted control vectors. The statement holds wherever the resulting last coordinate is nonzero.

**How the definition helps.** In our own proof, a matrix commutes with each linear interpolation, so applying it to the weighted vectors transforms the whole curve. A projective change of coordinates means precisely this matrix action followed by division by the last coordinate. The equivalence with the usual rational formula follows because interpolation combines all coordinates with the same coefficients.

**Wikipedia:** [De Casteljau's algorithm](https://en.wikipedia.org/wiki/De_Casteljau%27s_algorithm), [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve). It says: “The numerator is a weighted Bernstein-form Bézier curve and the denominator is a weighted sum of Bernstein polynomials.”

**Sources:** none listed. No primary source with a working link was found.

### Symmetric sampling makes the centered derivative second order

**Remember:** Subtract opposite samples and the quadratic terms cancel.

*True by definition.* MSC 65D25 (Numerical differentiation). arXiv math.NA. Level 2: later undergraduate.

**Definition.** The centered difference quotient at x is \[f(x + h) − f(x − h)\] ∕ (2h). It samples equally far on both sides instead of using a one-sided difference.

**Problem.** If f has three continuous derivatives near x, the centered difference quotient differs from f′(x) by at most a constant times h² for small h.

**How the definition helps.** Sampling at opposite displacements gives equal quadratic terms, which cancel on subtraction. In our own proof, Taylor’s theorem bounds each remaining error by a constant times \|h\|³. Dividing by 2h leaves an error bounded by a constant times h². The one-sided quotient generally retains an error proportional to h.

**Wikipedia:** [Finite difference](https://en.wikipedia.org/wiki/Finite_difference). It says: “However, the central (also called centered) difference yields a more accurate approximation.”

**Sources:** none listed. No primary source with a working link was found.

### Matching endpoint derivatives cancels trapezoid corrections at every order

**Remember:** Periodic endpoints cancel all the boundary corrections.

*Rules out counterexamples.* MSC 65D32 (Numerical quadrature and cubature formulas), 65B15, 41A60. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A smooth period-one function has continuous derivatives of every order and satisfies f(x+1) = f(x) for every x. Differentiation gives the same periodicity for each derivative.

**Problem.** On \[0,1\], the trapezoidal rule with N equal panels has error O(N⁻²ᵖ) for every positive integer p when f is smooth and period-one.

**How the definition helps.** Matching endpoint derivatives cancel every boundary correction in the Euler–Maclaurin formula. In our own application, the remainder is bounded by a constant times N⁻²ᵖ because the derivative of order 2p is bounded. For comparison, f(x) = x² gives error 1/(6N²).

**Wikipedia:** [Euler–Maclaurin formula](https://en.wikipedia.org/wiki/Euler%E2%80%93Maclaurin_formula). It says: “the superior performance of the trapezoidal rule on smooth periodic functions”

**Sources:** none listed. No primary source with a working link was found.

### Orthogonal-polynomial nodes make Gaussian quadrature exact through degree 2n − 1

**Remember:** The part divisible by the node polynomial vanishes both ways.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas), 41A55. arXiv math.NA. Level 2: later undergraduate.

**Definition.** Let w be a positive weight on an interval, and let pₙ be the degree-n orthogonal polynomial for w. Take the n roots of pₙ as nodes. Define the weights by integrating the interpolating polynomial of degree at most n − 1 through those nodes. The rival definition solves 2n nonlinear moment equations for the nodes and weights together.

**Problem.** The n-node Gaussian rule integrates every polynomial of degree at most 2n − 1 exactly.

**How the definition helps.** With nodes at the roots, the degree count splits into two easy parts. Divide a polynomial h of degree at most 2n − 1 by pₙ to get h = q pₙ + r, with q and r of degree at most n − 1. The term q pₙ integrates to zero by orthogonality and vanishes at every node, and the rule is exact for r because r equals its own interpolant. The work goes into showing that pₙ has n distinct roots inside the interval.

**Wikipedia:** [Gaussian quadrature](https://en.wikipedia.org/wiki/Gaussian_quadrature). It says: “This proves that for any polynomial h(x) of degree 2n − 1 or less, its integral is given exactly by the Gaussian quadrature sum.”

**Sources:**

- [C. G. J. Jacobi, Ueber Gauß neue Methode, die Werthe der Integrale näherungsweise zu finden (1826).](https://doi.org/10.1515/crll.1826.1.301)

### Squared polynomials give positive Gaussian weights

**Remember:** A Gaussian weight is the integral of a square.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas), 41A55. arXiv math.NA. Level 2: later undergraduate.

**Definition.** An n-point Gaussian rule approximates an integral by a weighted sum of samples and integrates polynomials through degree 2n − 1 exactly. At each sample point, choose the polynomial of degree below n that equals one there and zero at all other sample points. Define the corresponding weight as the weighted integral of its square. The usual formula integrates the polynomial itself.

**Problem.** Every Gaussian weight is positive for a positive weight function on an interval with the required finite moments.

**How the definition helps.** Each weight integrates a nonzero square against a positive weight function. In our own words, the square and the original basis polynomial agree at every node. Exactness through degree 2n − 1 identifies their integrals because the square has degree 2n − 2. Proving that exactness carries the work.

**Wikipedia:** [Gaussian quadrature](https://en.wikipedia.org/wiki/Gaussian_quadrature). It says: “Since both ω(x) and f(x) are non-negative functions, it follows that wᵢ &gt; 0.”

**Sources:** none listed. No primary source with a working link was found.

### The node polynomial forces Gaussian quadrature nodes to be unique

**Remember:** Multiply by the node polynomial and the whole sample sum vanishes.

*Makes the theorem clean to state or prove.* MSC 65D32 (Numerical quadrature and cubature formulas), 65D30. arXiv math.NA. Level 2: later undergraduate.

**Definition.** The node polynomial of a rule with n distinct sample points, called nodes is the product of x − t over its nodes t. A polynomial is orthogonal to lower degrees on \[−1,1\] if its product with every lower-degree polynomial integrates to zero there.

**Problem.** On \[−1,1\] with weight one, exactly one rule with n nodes integrates every polynomial through degree 2n − 1 exactly, up to node order.

**How the definition helps.** Multiplying by the node polynomial makes all sampled values zero. In our own argument, exactness therefore makes the node polynomial orthogonal to all lower degrees. Two such polynomials with leading coefficient one have a lower-degree difference orthogonal to itself, so they coincide. The nodes then determine the weights by interpolation, and Gauss–Legendre quadrature supplies existence.

**Wikipedia:** [Gauss–Legendre quadrature](https://en.wikipedia.org/wiki/Gauss%E2%80%93Legendre_quadrature). It says: “is the unique choice that allows the quadrature rule to integrate degree 2n − 1 polynomials exactly.”

**Sources:** none listed. No primary source with a working link was found.

### The squared node polynomial sets the Gaussian exactness limit

**Remember:** A square can vanish at every node and still have positive area.

*Rules out counterexamples.* MSC 65D32 (Numerical quadrature and cubature formulas), 65D30. arXiv math.NA. Level 2: later undergraduate.

**Definition.** A quadrature rule with n nodes uses a weighted sum of n function values. Its node polynomial is the product of x minus each node.

**Problem.** On a bounded interval of positive length, suppose the integration weight is integrable and positive throughout. Every rule using n distinct nodes misses some polynomial of degree 2n.

**How the definition helps.** The squared node polynomial vanishes at every sample but has positive weighted integral. In our own argument, this gives a counterexample for every choice of nodes and weights. The Gaussian quadrature theorem separately shows that a rule can integrate every polynomial through degree 2n − 1 exactly.

**Wikipedia:** [Gaussian quadrature](https://en.wikipedia.org/wiki/Gaussian_quadrature). It says: “constructed to yield an exact result for polynomials of degree 2n − 1 or less”

**Sources:** none listed. No primary source with a working link was found.

### Leading corner determinants detect zero pivots before LU factorization

**Remember:** Each pivot reveals the determinant of one larger leading corner.

*Rules out counterexamples.* MSC 65F05 (Direct numerical methods for linear systems and matrix inversion). arXiv math.NA. Level 2: later undergraduate.

**Definition.** A leading principal minor is the determinant of the top-left square block of a matrix. Test all sizes of this block, not just the determinant of the whole matrix.

**Problem.** An invertible matrix admits triangular factorization A = LU without row exchanges exactly when every leading principal minor is nonzero.

**How the definition helps.** Each leading determinant records the product of the elimination pivots used up to that row. In our own argument, a nonzero preceding determinant makes the next pivot the ratio of two successive determinants. Thus nonzero leading determinants allow elimination to finish, and an invertible triangular factorization forces every such determinant to be nonzero. Swapping the rows of the two-dimensional identity gives an invertible matrix with first pivot zero.

**Wikipedia:** [LU decomposition](https://en.wikipedia.org/wiki/LU_decomposition). It says: “it admits an LU (or LDU) factorization if and only if all its leading principal minors are nonzero”

**Sources:** none listed. No primary source with a working link was found.

### Measuring lengths with A gives the Cholesky factor by Gram–Schmidt

**Remember:** Use the matrix to measure angles, then make the basis perpendicular.

*True by definition. Confidence: medium.* MSC 65F05 (Direct numerical methods for linear systems and matrix inversion). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For a symmetric positive definite matrix A, use the inner product ⟨u,v⟩ = uᵀAv instead of the usual dot product. The inner product measures lengths and perpendicularity.

**Problem.** Every real symmetric positive definite matrix A factors as RᵀR with upper triangular R and a positive diagonal.

**How the definition helps.** With the chosen inner product, A already lists the inner products of the standard basis vectors. In our own proof, apply Gram–Schmidt to those vectors in order and collect their new coordinates as columns of R. Each column uses only basis vectors built so far, and its diagonal entry is the positive length of its remainder. Ordinary coordinate dot products now give RᵀR = A without solving the usual elimination equations.

**Paper or page:** [Characterisation of Real Symmetric Positive Definite Matrix/Necessary Condition](https://proofwiki.org/wiki/Characterisation_of_Real_Symmetric_Positive_Definite_Matrix/Necessary_Condition). It says: “there exists a nonsingular matrix C such that A = CᵀC.”

**Sources:** none listed. No primary source with a working link was found.

### Positive Cholesky diagonals remove the square root sign ambiguity

**Remember:** Choose the positive square root at every diagonal entry.

*Rules out counterexamples.* MSC 65F05 (Direct numerical methods for linear systems and matrix inversion). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For a real symmetric positive definite matrix A, write A = LLᵀ with L lower triangular. In the Cholesky factorization, require strictly positive diagonal entries in L.

**Problem.** Whenever a real symmetric positive definite matrix has a Cholesky factor with positive diagonal, that factor is unique.

**How the definition helps.** Positive diagonals force the signs when two possible factors are compared. In our own proof, their quotient L₂⁻¹L₁ is lower triangular and orthogonal, hence diagonal with entries ±1. Positivity forces the quotient to equal the identity, while omitting positivity allows both L and −L. Existence follows separately from elimination for positive definite matrices.

**Wikipedia:** [Cholesky decomposition](https://en.wikipedia.org/wiki/Cholesky_decomposition). It says: “the lower triangular matrix is unique if we impose the diagonal to be strictly positive.”

**Sources:**

- [André-Louis Cholesky, Sur la résolution numérique des systèmes d’équations linéaires (1910 manuscript, reproduced in La méthode de Cholesky)](https://numdam.org/articles/10.24033/rhm.30/)

### Schur complements split definiteness tests

**Remember:** Eliminate the first block to see the remaining energy.

*True by definition.* MSC 65F05 (Direct numerical methods for linear systems and matrix inversion). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Take a real symmetric block matrix with invertible upper left block A, upper right block B, and lower right block C. Its Schur complement of A is S = C − BᵀA⁻¹B.

**Problem.** The full matrix is positive definite exactly when A and its Schur complement are both positive definite.

**How the definition helps.** The Schur complement gives the quadratic form remaining after eliminating the first variable (our own explanation). Replace x by the coordinate u = x + A⁻¹By. Completing the square gives uᵀAu + yᵀSy. This invertible change of coordinates proves the test and explains the formula for S.

**Wikipedia:** [Schur complement](https://en.wikipedia.org/wiki/Schur_complement). It says: “If A is invertible, then X is positive definite if and only if A and its complement X/A are both positive definite”

**Sources:**

- [Emilie V. Haynsworth, Determination of the inertia of a partitioned Hermitian matrix (1968)](https://doi.org/10.1016/0024-3795(68)90050-5)

### Unit diagonals remove the freedom to rescale LU factors

**Remember:** A diagonal of ones fixes the scale of each column.

*Rules out counterexamples.* MSC 65F05 (Direct numerical methods for linear systems and matrix inversion). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Use A = LU with a lower triangular L whose diagonal entries all equal one, and an upper triangular U. In an unnormalized split, the lower diagonal can contain any nonzero values.

**Problem.** If an invertible matrix has such an LU factorization, its factors are unique.

**How the definition helps.** Two factorizations L₁U₁ = L₂U₂ give L₂⁻¹L₁ = U₂U₁⁻¹. In our own proof, the left side is lower triangular with diagonal ones, while the right side is upper triangular. Both must equal the identity. Dropping the diagonal requirement permits both I = I·I and I = (2I)(I ∕ 2).

**Wikipedia:** [LU decomposition](https://en.wikipedia.org/wiki/LU_decomposition). It says: “the LU factorization is also unique”

**Sources:** none listed. No primary source with a working link was found.

### Coordinate minima make Gauss–Seidel decrease the energy

**Remember:** Each coordinate update takes the bottom of a parabola.

*True by definition. Confidence: medium.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For symmetric positive definite A, define the energy F(x) = ½xᵀAx − bᵀx. A coordinate form of Gauss–Seidel minimizes F over one coordinate at a time, using all the latest values.

**Problem.** For Ax = b, a full Gauss–Seidel sweep strictly lowers F unless the current vector already solves the system.

**How the definition helps.** Each changed coordinate strictly lowers the energy because its update minimizes an upward-opening quadratic. In our own derivation, setting its derivative to zero solves the corresponding row with the latest coordinate values. This gives the usual Gauss–Seidel update. If a whole sweep changes nothing, every row already holds.

**Wikipedia:** [Gauss–Seidel method](https://en.wikipedia.org/wiki/Gauss%E2%80%93Seidel_method). It says: “the algorithm converges to the solution”

**Sources:** none listed. No primary source with a working link was found.

### Defining stationary steps by a splitting isolates the error multiplier

**Remember:** The constant term disappears when you subtract the true solution.

*Makes the theorem clean to state or prove.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 2: later undergraduate.

**Definition.** A stationary matrix iteration uses the same splitting A = M − N at every step, with A and M invertible. From a guess x, compute the next guess y by solving My = Nx + b.

**Problem.** This iteration for Ax = b converges from every starting vector exactly when every eigenvalue of M⁻¹N has magnitude less than one.

**How the definition helps.** The fixed splitting makes M⁻¹N multiply the error at every step. In our own argument, subtract the equation for the exact solution from the update equation. Convergence for every starting error means the powers of M⁻¹N tend to zero. The matrix-power theorem says this happens exactly when every eigenvalue has magnitude below one.

**Wikipedia:** [Iterative method](https://en.wikipedia.org/wiki/Iterative_method). It says: “Basic examples of stationary iterative methods use a splitting of the matrix A”

**Sources:** none listed. No primary source with a working link was found.

### Energy minimization makes conjugate gradient residuals mutually perpendicular

**Remember:** Each new residual is perpendicular to all earlier search spaces.

*True by definition.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For real symmetric positive definite A, define the energy as F(x) = ½xᵀAx − bᵀx and the starting residual as r₀ = b − Ax₀. At step k, minimize F over x₀ plus the span of the first k vectors in the list r₀, Ar₀, A²r₀, and so on.

**Problem.** In exact arithmetic, the residuals b − Ax from distinct conjugate gradient steps are mutually perpendicular.

**How the definition helps.** At a minimum, every allowed direction is perpendicular to the gradient Ax − b, the negative residual. In our own proof, each earlier correction is a combination of earlier powers of A applied to r₀. Its residual equals r₀ minus A times that correction, so it belongs to the current span. Identifying these minimizers with the usual conjugate gradient recurrence takes a separate proof.

**Wikipedia:** [Conjugate gradient method](https://en.wikipedia.org/wiki/Conjugate_gradient_method). It says: “proving the orthogonality of the residuals and conjugacy of the search directions”

**Sources:**

- [Magnus R. Hestenes and Eduard Stiefel, Methods of Conjugate Gradients for Solving Linear Systems (1952)](https://nvlpubs.nist.gov/nistpubs/jres/049/6/v49.n06.a08.pdf)

### Moving the diagonal to the left exposes Jacobi contraction

**Remember:** After diagonal scaling, the absolute off-diagonal row sums are below one.

*Rules out counterexamples.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 2: later undergraduate.

**Definition.** In Jacobi iteration, solve each equation for its diagonal variable using old values for all others. Call the matrix strictly row diagonally dominant when each diagonal magnitude exceeds the sum of the others in its row.

**Problem.** For a strictly row diagonally dominant matrix, Jacobi iteration converges to the solution from every starting vector.

**How the definition helps.** Strict dominance bounds each new error by a fixed fraction of the largest old absolute error. In our own proof, take the largest ratio of the absolute off-diagonal row sum to the diagonal magnitude. This ratio is below one, so repeated steps drive the errors to zero. With rows (1,1,0), (0,1,1), (1,0,1), strictness fails and an all-ones error changes sign each step.

**Wikipedia:** [Jacobi method](https://en.wikipedia.org/wiki/Jacobi_method). It says: “A sufficient (but not necessary) condition for the method to converge is that the matrix A is strictly or irreducibly diagonally dominant.”

**Sources:** none listed. No primary source with a working link was found.

### Relaxing toward coordinate minima explains the safe interval for SOR

**Remember:** Go past the minimum, but not as far as its mirror point.

*Rules out counterexamples.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Let A be symmetric positive definite and set F(x) = ½xᵀAx − bᵀx. In successive over-relaxation, move each coordinate by ω times its displacement to the minimum of F along that coordinate.

**Problem.** For every symmetric positive definite A, successive over-relaxation converges from all starting vectors if 0 &lt; ω &lt; 2.

**How the definition helps.** A relaxed update multiplies the distance from the coordinate minimum by \|1 − ω\|, which is below one. In our own proof, every sweep away from the solution changes some coordinate and strictly lowers the quadratic energy. The linear sweep therefore contracts errors uniformly, since the error sphere eᵀAe = 1 is compact. At ω = 2, the scalar equation x = 0 gives iterates that alternate in sign.

**Wikipedia:** [Successive over-relaxation](https://en.wikipedia.org/wiki/Successive_over-relaxation). It says: “proved that if A is symmetric and positive-definite then ρ(Lω) &lt; 1 for 0 &lt; ω &lt; 2.”

**Sources:** none listed. No primary source with a working link was found.

### Power iteration converges in direction

**Remember:** Follow the line, not its sign.

*Makes the theorem clean to state or prove.* MSC 65F15 (Numerical computation of eigenvalues and eigenvectors of matrices). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Power iteration repeatedly multiplies a starting vector by a matrix and normalizes the result. Represent each nonzero iterate by the line it spans. The angle between lines ignores the signs of the vectors.

**Problem.** Let a real symmetric matrix have a simple nonzero eigenvalue strictly larger in magnitude than every other eigenvalue. Start with a vector having a nonzero component along its eigenvector. The angle between the iterate’s line and that eigenvector’s line tends to zero.

**How the definition helps.** The line definition ignores a sign that might flip on every step, our own. Expanding in eigenvectors leaves ratios of smaller eigenvalues to the dominant one, whose powers tend to zero, our own. For the matrix diag(−2, 1), normalized iterates starting at (1, 0) alternate signs, our own.

**Wikipedia:** [Power iteration](https://en.wikipedia.org/wiki/Power_iteration). It says: “the starting vector b₀ has a nonzero component in the direction of an eigenvector associated with the dominant eigenvalue”

**Sources:** none listed. No primary source with a working link was found.

### Strict diagonal dominance prevents singularity

**Remember:** Every row gives a disc that misses zero.

*Rules out counterexamples.* MSC 65F15 (Numerical computation of eigenvalues and eigenvectors of matrices), 65F05. arXiv math.NA. Level 2: later undergraduate.

**Definition.** A square matrix has strict row diagonal dominance if each diagonal entry has magnitude exceeding the sum of the other magnitudes in its row. Weak dominance permits equality.

**Problem.** Every strictly row diagonally dominant matrix is invertible.

**How the definition helps.** Strict dominance keeps zero outside every Gershgorin disc. Each row gives a disc centered at its diagonal entry, with radius equal to the sum of the other magnitudes. The Gershgorin theorem puts every eigenvalue in one of these discs. In our own example, the two-by-two matrix with every entry one satisfies weak dominance and has eigenvalue zero.

**nLab:** [Gershgorin circle theorem](https://ncatlab.org/nlab/show/Gershgorin+circle+theorem). It says: “each of its eigenvalues is contained in at least one Gershgorin disc”

**Sources:** none listed. No primary source with a working link was found.

### QR separates the fitted part from the least squares residual

**Remember:** Only the part of b along Q’s columns can be fitted.

*True by definition.* MSC 65F20 (Numerical solutions to overdetermined systems, pseudoinverses). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For a real matrix A with independent columns, its reduced QR factorization writes A = QR. The columns of Q are perpendicular unit vectors spanning the column space of A, and R is square and upper triangular.

**Problem.** The unique least squares solution minimizing ‖Ax − b‖₂ satisfies the triangular system Rx = Qᵀb.

**How the definition helps.** The fitted part of b has coordinates Qᵀb in the basis given by Q. In our own proof, the Pythagorean theorem splits the squared error into ‖Rx − Qᵀb‖₂² and a fixed perpendicular contribution. Independent columns make R invertible, so the first term can reach zero. This gives a triangular system in place of the usual normal equations.

**Wikipedia:** [Numerical linear algebra](https://en.wikipedia.org/wiki/Numerical_linear_algebra). It says: “This upper triangular system can then be solved for x.”

**Sources:** none listed. No primary source with a working link was found.

### Scaled adjoints solve least squares

**Remember:** Reverse the length-preserving part and undo the scale.

*True by definition.* MSC 65F20 (Numerical solutions to overdetermined systems, pseudoinverses). arXiv math.NA, cs.NA. Level 2: later undergraduate.

**Definition.** View a matrix whose nonzero singular values all equal σ &gt; 0 as σ times a partial isometry. A partial isometry preserves lengths on the orthogonal complement of its kernel and vanishes on the kernel.

**Problem.** The minimum-length least-squares solution to Ax = b is A\*b divided by σ², where A\* denotes the adjoint.

**How the definition helps.** In our own proof, writing A = σU replaces the usual least-squares equations with one orthogonal projection. The matrix UU\* projects onto the range of A, so the closest attainable value to b is UU\*b. Applying U\* and dividing by σ gives the unique least-squares solution perpendicular to the kernel. This is A\*b divided by σ². The singular value decomposition justifies the representation A = σU.

**Paper or page:** [An Optimal Least-Square Solver For Scaled Partial-Isometric Linear Systems](https://arxiv.org/abs/2507.01434v1). It says: “A matrix A ∈ ℂᵐˣⁿ is a partial isometry iff all its non-zero singular values (if any) are 1.”

**Sources:** none listed. No primary source with a working link was found.

### Keeping each column span gives an upper triangular QR factor

**Remember:** Each input column uses only the new columns built so far.

*Makes the theorem clean to state or prove.* MSC 65F25 (Orthogonalization in numerical linear algebra), 65F05. arXiv math.NA. Level 2: later undergraduate.

**Definition.** In Gram–Schmidt, subtract from each column its perpendicular projection onto the span of the preceding columns. The remainder is perpendicular to those columns, and dividing it by its length gives the next column of Q.

**Problem.** Every real matrix A with independent columns has a reduced factorization A = QR. The columns of Q are mutually perpendicular unit vectors, and R is upper triangular.

**How the definition helps.** Gram–Schmidt expresses each original column using only the perpendicular unit vectors built so far. In our own argument, their coefficients form a matrix R with zeros below its diagonal. Independence ensures every remainder has positive length.

**nLab:** [Gram-Schmidt process](https://ncatlab.org/nlab/show/Gram-Schmidt+process). It says: “The orthonormal basis u₀, u₁, … produced as output is defined recursively by a) subtracting the orthogonal projection to the closed subspace generated by all previous vectors and b) normalizing.”

**Sources:** none listed. No primary source with a working link was found.

### Opposite signs prevent Householder cancellation

**Remember:** Choose the opposite sign so the leading terms add.

*Rules out counterexamples.* MSC 65F25 (Orthogonalization in numerical linear algebra), 65G50. arXiv math.NA, cs.NA. Level 2: later undergraduate.

**Definition.** To reflect a nonzero real vector x onto the first coordinate axis, choose a target of length ‖x‖. Give its first coordinate the opposite sign to x₁. If x₁ is zero, either sign works. Take the difference between x and the target as the normal to the reflecting plane.

**Problem.** The first coordinate of the normal has absolute value \|x₁\| + ‖x‖, so forming it cannot subtract nearly equal positive magnitudes.

**How the definition helps.** The opposite signs make the first-coordinate subtraction an addition of absolute values. In our own example, targeting the same sign for x = (1,0) gives a zero normal. With a tiny second coordinate, that choice can also round the first difference to zero. The reflection theorem leaves the sign free because either target has the correct length.

**Wikipedia:** [Householder transformation](https://en.wikipedia.org/wiki/Householder_transformation). It says: “in practice we want to avoid catastrophic cancellation”

**Sources:** none listed. No primary source with a working link was found.

### Derivative-based relative condition numbers are submultiplicative under composition

**Remember:** The intermediate size ‖f(x)‖ cancels between the two relative factors.

*True by definition. Confidence: medium.* MSC 65F35 (Numerical computation of matrix norms, conditioning, scaling), 15A12. arXiv math.NA. Level 2: later undergraduate.

**Definition.** For a differentiable map f with x and f(x) nonzero, define κ(f, x) = ‖J(x)‖ ‖x‖ / ‖f(x)‖. Here J(x) is the derivative matrix, and ‖J(x)‖ is its induced norm. The perturbation definition takes the worst ratio of relative output change to relative input change, in the limit of small changes. For differentiable f the two definitions agree.

**Problem.** Let x, f(x) and g(f(x)) be nonzero. Then κ(g ∘ f, x) ≤ κ(g, f(x)) κ(f, x).

**How the definition helps.** With the derivative formula, the result is the chain rule plus one norm bound. The derivative of g ∘ f at x is the product of the two derivatives, and the norm of the product is at most the product of the norms. Multiplying and dividing by ‖f(x)‖ makes the two factors appear. The work goes into the proof that the derivative formula equals the limit of worst ratios; the argument is our own.

**Wikipedia:** [Condition number](https://en.wikipedia.org/wiki/Condition_number). It says: “the maximum ratio of the fractional change in f(x) to any fractional change in x”

**Sources:** none listed. No primary source with a working link was found.

### The singular-value ratio shows that normal equations square conditioning

**Remember:** Square both extreme stretches and the condition number squares too.

*True by definition.* MSC 65F35 (Numerical computation of matrix norms, conditioning, scaling), 65F20. arXiv math.NA. Level 2: later undergraduate.

**Definition.** For a matrix with independent columns, define its Euclidean condition number as its largest singular value divided by its smallest. Singular values measure how much the matrix stretches along its perpendicular principal directions.

**Problem.** For a real matrix A with independent columns, the normal-equation matrix AᵀA has condition number κ(A)².

**How the definition helps.** The singular-value definition reduces the calculation to the largest and smallest stretches. In our own proof, the singular value decomposition shows that the singular values of AᵀA are the squared singular values of A. Taking their ratio gives κ(A)². For invertible square matrices, the decomposition also proves agreement with the usual product of matrix and inverse norms.

**Wikipedia:** [Condition number](https://en.wikipedia.org/wiki/Condition_number). It says: “κ(A) = σₘₐₓ(A) ∕ σₘᵢₙ(A),”

**Sources:** none listed. No primary source with a working link was found.

### Max-min singular values make the best rank-k error equal σₖ₊₁

**Remember:** A low-rank map must kill some direction of the best trial space.

*True by definition. Confidence: medium.* MSC 65F55 (Numerical methods for low-rank matrix approximation; matrix compression), 15A18. arXiv math.NA. Level 2: later undergraduate.

**Definition.** For an n × n matrix M, define the kth singular value σₖ by a max-min. It is the maximum, over k-dimensional subspaces S, of the minimum of ‖Mx‖ over unit vectors x in S. The usual definition takes square roots of the eigenvalues of M\*M, in decreasing order. The min-max theorem shows that the two agree.

**Problem.** For 0 ≤ k &lt; n, the smallest Euclidean operator-norm distance from M to a matrix of rank at most k is σₖ₊₁.

**How the definition helps.** With the max-min definition, the lower bound needs only a dimension count. Let B have rank at most k, and let S be a (k + 1)-dimensional subspace that attains σₖ₊₁. The kernel of B meets S in some unit vector x, and then ‖(M − B)x‖ = ‖Mx‖ ≥ σₖ₊₁. The truncated singular value decomposition attains the bound; the argument is our own.

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “The singular values {σₖ} of a square matrix M are the square roots of the eigenvalues of M\*M (equivalently MM\*).”

**Sources:**

- [Leon Mirsky, Symmetric gauge functions and unitarily invariant norms (1960).](https://doi.org/10.1093/qmath/11.1.50)

### Subnormal numbers make the Sterbenz lemma hold without exceptions

**Remember:** With gradual underflow, subtracting close floating-point numbers is always exact.

*Rules out counterexamples.* MSC 65G30 (Interval and finite arithmetic), 65G50. arXiv math.NA, cs.NA. Level 2: later undergraduate.

**Definition.** A floating-point number is subnormal when it is smaller than the smallest normal number. It uses the lowest exponent with a leading digit 0, so it has fewer significant digits. Gradual underflow is the rule of the IEEE 754 standard that keeps these numbers. They fill the gap between zero and the smallest normal number with even spacing.

**Problem.** Let x and y be floating-point numbers with y/2 ≤ x ≤ 2y. Then x − y is a floating-point number, so the computed difference is exact. This is the Sterbenz lemma.

**How the definition helps.** With subnormal numbers, every small difference of nearby floating-point numbers has a representation, so no rounding is needed. The page gives the counterexample: the difference of the two smallest positive normal numbers is subnormal, and flushing it to zero gives a wrong result. Our own: with gradual underflow, x − y = 0 also implies x = y. The lemma does not remove catastrophic cancellation, since inputs that already carry errors can still give a difference with a large relative error.

**Wikipedia:** [Sterbenz lemma](https://en.wikipedia.org/wiki/Sterbenz_lemma). It says: “In floating-point number systems without subnormal numbers, such as CPUs in nonstandard flush-to-zero mode instead of the standard gradual underflow, the Sterbenz lemma does not apply.”

**Sources:**

- [P. H. Sterbenz, Floating-Point Computation, Prentice-Hall (1974), Theorem 4.3.1](https://archive.org/details/SterbenzFloatingPointComputation/page/n153/mode/2up)
- [J.-M. Muller et al., Handbook of Floating-Point Arithmetic, 2nd ed., Birkhäuser (2018), Lemma 4.1](https://doi.org/10.1007/978-3-319-76526-6)

### Backward error and condition number split numerical error into two parts

**Remember:** Forward error is at most condition number times backward error.

*True by definition.* MSC 65G50 (Roundoff error), 65F35. arXiv math.NA. Level 2: later undergraduate.

**Definition.** The backward error of a computed answer y\* is the smallest change Δx in the data such that the exact answer for x + Δx is y\*. An algorithm is backward stable when this is small for all inputs. The condition number of the problem is the worst-case ratio of the relative change in output to the relative change in input.

**Problem.** To first order, the relative error of the computed answer is at most the condition number times the relative backward error. So a backward stable algorithm is accurate on every well-conditioned problem.

**How the definition helps.** The backward error moves the rounding into the data, and the condition number says how far a change in the data moves the answer. The bound then follows from the definition of the condition number. So the analysis of the algorithm and the analysis of the problem separate. What stays hard is the rounding analysis that shows a given algorithm, such as Householder QR factorization, is backward stable.

**Wikipedia:** [Numerical stability](https://en.wikipedia.org/wiki/Numerical_stability), [Condition number](https://en.wikipedia.org/wiki/Condition_number). It says: “An algorithm is forward stable if its forward error divided by the condition number of the problem is small.”

**Sources:** none listed. No primary source with a working link was found.

### Rounding to nearest halves the spacing bound

**Remember:** The nearest endpoint is at most half a gap away.

*Makes the theorem clean to state or prove.* MSC 65G50 (Roundoff error). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Round to a nearest representable number rather than always rounding down. Unit roundoff u is half the gap between 1 and the next larger representable number.

**Problem.** Take a fixed-precision floating-point system of any base. Rounding a nonzero x in its normal finite range gives x(1 + δ) with \|δ\| ≤ u.

**How the definition helps.** Rounding to nearest bounds the absolute error by half the local spacing. In our own proof, let B be the largest power of the base no greater than \|x\|. The spacing between adjacent numbers in that range is 2uB, so the absolute error is at most uB ≤ u\|x\|.

**Paper or page:** [Mechanizing Olver's Error Arithmetic](https://arxiv.org/abs/2510.13414v1). It says: “ρ(x) = x(1 + δ)    \|δ\| ≤ u,”

**Sources:** none listed. No primary source with a working link was found.

### Negative remainders make Sturm counts work

**Remember:** Negate the remainder so interior zeros cannot change the count.

*Rules out counterexamples.* MSC 65H04 (Numerical computation of roots of polynomial equations). arXiv math.NA, cs.NA. Level 2: later undergraduate.

**Definition.** Start with a nonconstant real polynomial and its derivative. Repeatedly divide the preceding polynomial by the current one and append the negative remainder. Stop before appending a zero remainder. At a given point, ignore zero values when counting sign changes in this sequence.

**Problem.** For a polynomial without repeated roots and endpoints that are not roots, the drop in sign changes across the interval counts its real roots.

**How the definition helps.** Negating each remainder makes the neighbors of a vanishing later term have opposite signs, so its crossing cannot change the count. The derivative makes the first pair lose exactly one change at each simple root. In our own example, ordinary division for x² − 1 and 2x gives remainder −1 instead of the Sturm term 1. The ordinary sign counts at −2 and 2 are equal, although the interval has two roots.

**Wikipedia:** [Sturm's theorem](https://en.wikipedia.org/wiki/Sturm%27s_theorem). It says: “the number of sign changes (ignoring zeros) in the sequence of real numbers”

**Sources:** none listed. No primary source with a working link was found.

### Dividing by slope restores quadratic convergence

**Remember:** Divide out one derivative to make the root simple.

*Rules out counterexamples.* MSC 65H05 (Numerical computation of solutions to single equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Near a root of finite multiplicity, apply Newton’s method to f/f′ rather than to f. Extend the quotient at the root by setting it to zero. Multiplicity m means f is the mth power of displacement from the root times a smooth, nonzero factor.

**Problem.** Suppose the nonzero factor has three continuous derivatives near the root. From sufficiently close starting points, Newton’s method on the extended quotient converges at least quadratically. This means each new absolute error is bounded by a fixed constant times the square of the previous error.

**How the definition helps.** The quotient has a simple zero because differentiation lowers the multiplicity by one. In our own argument, the extended quotient is twice continuously differentiable and has derivative 1/m at the root. The local Newton convergence theorem for smooth simple roots then applies. For f(x) = x², the unmodified Newton step only halves the error.

**Wikipedia:** [Newton's method](https://en.wikipedia.org/wiki/Newton%27s_method). It says: “Applying Newton's method to find the root of g(x) recovers quadratic convergence in many cases”

**Sources:** none listed. No primary source with a working link was found.

### Measuring root conditioning against vertical shifts exposes the inverse slope

**Remember:** A small slope makes a small vertical shift move the root far.

*True by definition. Confidence: medium.* MSC 65H05 (Numerical computation of solutions to single equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Let r(t) be the nearby root of f(x) = t, so r(0) is the original root. Define the absolute condition number for vertical shifts as the limiting ratio \|r(t) − r(0)\| ∕ \|t\| as t tends to zero.

**Problem.** If f is continuously differentiable near a real root r with f′(r) ≠ 0, the absolute condition number for vertical shifts is 1 ∕ \|f′(r)\|.

**How the definition helps.** A vertical shift makes the displaced root a value of the local inverse of f. In our own argument, the limiting ratio is therefore the magnitude of the inverse derivative. The inverse function theorem gives that derivative because f′(r) ≠ 0. A double root behaves differently since the roots of x² = t move by √t for t &gt; 0.

**Wikipedia:** [Wilkinson's polynomial](https://en.wikipedia.org/wiki/Wilkinson%27s_polynomial). It says: “The problem is ill-conditioned when the polynomial has a multiple root.”

**Sources:** none listed. No primary source with a working link was found.

### Successive differences bound the remaining fixed point error

**Remember:** Each future step shrinks, so the last step bounds the distance left.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 65H05 (Numerical computation of solutions to single equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Call g a contraction if one factor q bounds all its distance ratios. In symbols, \|g(x) − g(y)\| ≤ q\|x − y\| for every pair and some 0 ≤ q &lt; 1.

**Problem.** Start anywhere in a closed interval that g maps into itself, and set xₙ₊₁ = g(xₙ). For n ≥ 1, the distance to the unique fixed point from xₙ is at most q\|xₙ − xₙ₋₁\| ∕ (1 − q).

**How the definition helps.** The contraction factor bounds each new step by q times the preceding step. In our own argument, the sum of those bounds is a geometric series starting with q\|xₙ − xₙ₋₁\|. The contraction theorem identifies the limit as the unique fixed point.

**Paper or page:** [Banach Fixed-Point Theorem](https://proofwiki.org/wiki/Banach_Fixed-Point_Theorem). It says: “Then there exists a unique fixed point of f.”

**Sources:** none listed. No primary source with a working link was found.

### Taking the implicit midpoint preserves quadratic invariants exactly

**Remember:** A quadratic changes by its midpoint derivative times the displacement.

*True by definition.* MSC 65L06 (Multistep, Runge-Kutta and extrapolation methods for ordinary differential equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For y′ = f(t,y), define the discrete step using the slope at the average of the old and new times and states. In forward Euler the slope instead uses the old time and state.

**Problem.** Suppose a quadratic function of the state is constant along all solutions of a smooth differential equation. Every well-defined implicit midpoint step preserves that function exactly.

**How the definition helps.** A quadratic function changes by its gradient at the midpoint dotted with the displacement. In our own proof, the midpoint rule makes that displacement the step size times the vector field at the same point. Invariance makes the gradient perpendicular to that field, so the change vanishes. Forward Euler evaluates the field at the old point, where this argument does not apply.

**Wikipedia:** [Midpoint method](https://en.wikipedia.org/wiki/Midpoint_method). It says: “the implicit method is the most simple collocation method, and, applied to Hamiltonian dynamics, a symplectic integrator.”

**Sources:**

- [G. J. Cooper, Stability of Runge-Kutta Methods for Trajectory Problems (1987)](https://doi.org/10.1093/imanum/7.1.1)

### A reciprocal multiplier makes backward Euler damp every decaying mode

**Remember:** With a decaying mode, the denominator has magnitude greater than one.

*True by definition.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** Backward Euler takes its slope at the new endpoint of a step. For y′ = λy and step size h, the old value u and new value v satisfy v = u + hλv.

**Problem.** Backward Euler is A-stable. For every complex λ with negative real part and every fixed step size h &gt; 0, its iterates tend to zero.

**How the definition helps.** Using the new endpoint puts 1 − hλ in the denominator of the multiplier. In our own proof, its real part exceeds one, so the reciprocal has magnitude below one. Repeated steps give a geometric sequence tending to zero. Forward Euler instead multiplies by 1 + hλ, whose magnitude can exceed one.

**Wikipedia:** [Backward Euler method](https://en.wikipedia.org/wiki/Backward_Euler_method). It says: “This includes the whole left half of the complex plane”

**Sources:** none listed. No primary source with a working link was found.

### A scalar stability function advances each eigenmode independently

**Remember:** One scalar multiplier is enough for each eigenvector.

*Makes the theorem clean to state or prove.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** The stability function R of a Runge–Kutta method is the multiplier from one step on y′ = λy. Its argument is z = hλ, where h is the step size.

**Problem.** Suppose A has a basis of eigenvectors and the intermediate equations have a unique solution. One step on y′ = Ay multiplies each eigenvector component by R(hλ), where λ is its eigenvalue.

**How the definition helps.** In an eigenvector direction, A acts by multiplication by one number, λ. In our own argument, writing the intermediate equations in an eigenvector basis gives one scalar step for each component.

**Paper or page:** [Optimizing multigrid reduction-in-time (MGRIT) and Parareal coarse-grid operators for linear advection](https://arxiv.org/abs/1910.03726v3). It says: “Let R(z) = P(z)/Q(z) denote the stability function”

**Sources:**

- [Optimizing multigrid reduction-in-time (MGRIT) and Parareal coarse-grid operators for linear advection, Lemma 1](https://arxiv.org/abs/1910.03726v3)

### Defining stability by scalar decay rules out explicit Runge–Kutta methods

**Remember:** A nonconstant polynomial cannot stay small along the whole negative axis.

*Makes the theorem clean to state or prove.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations). arXiv math.NA. Level 2: later undergraduate.

**Definition.** For y′ = λy, let R(z) multiply the current value after one step, with z = hλ. Call the method A-stable if \|R(z)\| &lt; 1 for every z with negative real part.

**Problem.** No consistent explicit Runge–Kutta method is A-stable.

**How the definition helps.** A-stability tests the entire negative real axis, where every nonconstant polynomial is unbounded. In our own proof, an explicit method uses only earlier stages, so its multiplier is a polynomial. Consistency means the multiplier agrees with the exact solution through its linear term, giving R′(0) = 1. The multiplier is therefore nonconstant.

**Wikipedia:** [Runge–Kutta methods](https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods). It says: “The stability function of an explicit Runge–Kutta method is a polynomial, so explicit Runge–Kutta methods can never be A-stable.”

**Sources:** none listed. No primary source with a working link was found.

### Zero-stability makes consistent multistep methods converge

**Remember:** Check the roots of ρ, and convergence comes for free.

*Rules out counterexamples.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 65L06. arXiv math.NA. Level 2: later undergraduate.

**Definition.** A linear multistep method computes each new value from several earlier values. Its first characteristic polynomial ρ satisfies the root condition when all roots have modulus at most 1 and the roots of modulus 1 are simple. A method is zero-stable if and only if the root condition holds.

**Problem.** Take a consistent linear multistep method whose starting values converge. Its numerical solution converges as the step size goes to 0 if and only if the method is zero-stable. This is the Dahlquist equivalence theorem.

**How the definition helps.** Zero-stability is a condition on one polynomial, so a hard limit statement becomes an algebra check. The definition excludes methods whose errors in the starting values grow without bound. Our own counterexample: the explicit two-step method yₙ₊₂ + 4yₙ₊₁ − 5yₙ = h(4fₙ₊₁ + 2fₙ) is consistent, even of order 3, but ρ has the root −5, so small errors grow like 5ⁿ. What stays hard is the proof that zero-stability and consistency are enough.

**Wikipedia:** [Linear multistep method](https://en.wikipedia.org/wiki/Linear_multistep_method). It says: “Then, the numerical solution converges to the exact solution as h → 0 if and only if the method is zero-stable. This result is known as the Dahlquist equivalence theorem”

**Sources:**

- [G. Dahlquist, Convergence and stability in the numerical integration of ordinary differential equations, Mathematica Scandinavica 4 (1956) 33–53](https://doi.org/10.7146/math.scand.a-10454)

### Stencil reach excludes oversized steps

**Remember:** The grid must carry news at least as fast as the wave.

*Rules out counterexamples.* MSC 65M12 (Stability and convergence of numerical methods for initial value and initial-boundary value problems involving PDEs), 65M06. arXiv math.NA. Level 2: later undergraduate.

**Definition.** The numerical domain of dependence of a computed value is the set of initial grid points that can affect it. For an update that uses a grid point and its two immediate neighbors, this set grows by one grid interval per time step.

**Problem.** Consider transport at constant speed on the line, with the ratio of time step to grid spacing fixed during refinement. If the wave crosses more than one grid interval per step, the method cannot converge for all smooth initial data.

**How the definition helps.** The definition bounds how far information can travel through the grid (our own argument). At fixed positive time the reachable interval misses the initial position supplying the exact value. Choose smooth initial data supported near that position and equal to one there. The method sees the same data as for zero input, although the exact values differ by one.

**Wikipedia:** [Courant–Friedrichs–Lewy condition](https://en.wikipedia.org/wiki/Courant%E2%80%93Friedrichs%E2%80%93Lewy_condition). It says: “the numerical domain of dependence of any point in space and time (as determined by initial conditions and the parameters of the approximation scheme) must include the analytical domain of dependence”

**Sources:**

- [Richard Courant, Kurt Friedrichs and Hans Lewy, On the Partial Difference Equations of Mathematical Physics (1967 English translation)](https://doi.org/10.1147/rd.112.0215)

### Variation bounds preserve monotone profiles

**Remember:** A monotone profile spends all its variation on the net change.

*True by definition.* MSC 65M12 (Stability and convergence of numerical methods for initial value and initial-boundary value problems involving PDEs), 65M08. arXiv math.NA. Level 2: later undergraduate.

**Definition.** Define total variation on a grid as the sum of absolute jumps between neighbors. A variation-diminishing update cannot increase that sum.

**Problem.** If a variation-diminishing update keeps the two end values fixed, it preserves monotonicity on a finite grid.

**How the definition helps.** One bound on the sum of absolute jumps replaces checking the sign of every updated jump (our own argument). The absolute difference between the endpoints is a lower bound for this sum. A monotone input attains that bound. Fixed endpoints and a variation-diminishing update force equality again, so every nonzero jump has the same sign. The remaining work is proving the variation bound for the update.

**Wikipedia:** [Total variation diminishing](https://en.wikipedia.org/wiki/Total_variation_diminishing). It says: “If uⁿ is monotonically increasing (or decreasing) in space, then so is uⁿ⁺¹.”

**Sources:**

- [Ami Harten, High resolution schemes for hyperbolic conservation laws (1983)](https://doi.org/10.1016/0021-9991(83)90136-5)

### Equal square-root factors make discrete Fourier inversion an adjoint

**Remember:** Put the same square-root factor on the way in and out.

*True by definition.* MSC 65T50 (Numerical methods for discrete and fast Fourier transforms). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the N-point discrete Fourier transform using matrix entries exp(−2πijk/N)/√N for indices j and k from 0 to N−1. This splits the usual factor of 1/N evenly between the forward and inverse transforms.

**Problem.** The adjoint, the matrix formed by transposing and conjugating, inverts this discrete Fourier transform. The transform preserves the sum of squared magnitudes.

**How the definition helps.** The scale gives every column length one, so orthogonality makes the adjoint the inverse (our own). The work moves to summing a geometric series to check that distinct columns are perpendicular (our own).

**Wikipedia:** [DFT matrix](https://en.wikipedia.org/wiki/DFT_matrix). It says: “choice here makes the resulting DFT matrix unitary”

**Sources:** none listed. No primary source with a working link was found.

### Lebesgue constants as operator norms bound interpolation error by best approximation

**Remember:** Subtract the best polynomial first, then let interpolation amplify only that.

*True by definition. Confidence: medium.* MSC 65D05 (Numerical interpolation), 41A05. arXiv math.NA. Level 3: graduate.

**Definition.** Let L be polynomial interpolation at fixed nodes, viewed as a map on continuous functions with the supremum norm. Define the Lebesgue constant Λ as the operator norm of L. The formula definition takes the maximum of Σ \|ℓⱼ(x)\|. Here ℓⱼ is the cardinal polynomial, which is 1 at node j and 0 at the other nodes.

**Problem.** For every continuous f, ‖f − Lf‖ ≤ (1 + Λ) E(f). Here E(f) is the supremum-norm distance from f to polynomials of the interpolation degree.

**How the definition helps.** With the operator-norm definition, the bound is Lebesgue's lemma, a three-line proof. L fixes every polynomial p of the interpolation degree. So f − Lf = (f − p) − L(f − p), and the triangle inequality gives (1 + Λ)‖f − p‖. Minimize over p. The cited paper's Lemma 2 is the theorem that the two definitions agree, also for complex nodes. The error bound itself is our own here.

**Paper or page:** [Chebyshev admissible meshes and Lebesgue constants of complex polynomial projections](https://arxiv.org/abs/2311.06511v1). It says: “the “Lebesgue constant” of Lₙ, that is its uniform norm”

**Sources:**

- [Chebyshev admissible meshes and Lebesgue constants of complex polynomial projections](https://arxiv.org/abs/2311.06511v1)

### Strictly positive definite kernels interpolate arbitrary data

**Remember:** A nonzero kernel coefficient vector cannot lie in the null space.

*Rules out counterexamples.* MSC 65D12 (Numerical radial basis function approximation), 41A05. arXiv math.NA. Level 3: graduate.

**Definition.** Choose a real function of distance and center one copy at each data site. Form the square matrix whose entry for two sites is the function evaluated at their distance. Call the kernel strictly positive definite if every nonzero real vector has positive quadratic form for every finite set of distinct sites.

**Problem.** Any real values prescribed at finitely many distinct sites determine exactly one linear combination of the centered functions that takes those values.

**How the definition helps.** A vector in the null space would give a zero quadratic form, so the square interpolation matrix is invertible (our own). A constant kernel gives an all-ones matrix and cannot fit unequal data at two sites (our own). The work moves to proving positive definiteness for the chosen kernel (our own).

**Wikipedia:** [Radial basis function interpolation](https://en.wikipedia.org/wiki/Radial_basis_function_interpolation). It says: “Such functions, including the Gaussian, inverse quadratic, and inverse multiquadric are often used as radial basis functions for this reason.”

**Sources:** none listed. No primary source with a working link was found.

### Lobatto endpoints limit exactness

**Remember:** Two fixed ends cost two degrees of exactness.

*Rules out counterexamples.* MSC 65D32 (Numerical quadrature and cubature formulas). arXiv math.NA. Level 3: graduate.

**Definition.** An integration rule estimates an integral by a weighted sum of function values at selected points, called nodes. A Gauss–Lobatto rule on \[a, b\], with a &lt; b, fixes both endpoints and chooses the other nodes for maximum polynomial exactness.

**Problem.** Any such weighted sum with n ≥ 2 distinct nodes including both endpoints misses some polynomial of degree 2n − 2. The Gauss–Lobatto rule integrates every polynomial through degree 2n − 3 exactly.

**How the definition helps.** Fixing both endpoints lets a polynomial of degree 2n − 2 vanish at every node without changing sign, our own. Multiply (x − a)(b − x) by the squared product of the interior node factors, our own. Its quadrature is zero but its integral is positive, our own. Attaining the lower degree requires choosing the interior nodes by orthogonality for the weight (x − a)(b − x), our own.

**Wikipedia:** [Gaussian quadrature](https://en.wikipedia.org/wiki/Gaussian_quadrature). It says: “an n point Gauss-Lobatto rule is only accurate for polynomials up to degree 2n − 3.”

**Sources:** none listed. No primary source with a working link was found.

### Paired nodes cancel odd powers

**Remember:** Pair the branches to cancel odd powers before applying Gaussian quadrature.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas), 41A55. arXiv math.NA. Level 3: graduate.

**Definition.** On an interval where the cubic φ is nonnegative, integrate both branches of y² = φ(x) against the same positive measure in x. Start with an N-point Gaussian rule on that interval, a weighted sum exact for polynomials through degree 2N − 1. At each sample x, give both points (x, ±√φ(x)) the original weight.

**Problem.** The paired sum integrates a polynomial exactly whenever its even part in y reduces to degree at most 2N − 1 in x.

**How the definition helps.** Pairing the points cancels the odd part of the polynomial before any weights need to be computed on the curve. In our own proof, replace y² by φ(x) in the even part. Both the integral and the paired sum become twice their one-dimensional counterparts. The one-dimensional Gaussian exactness theorem supplies the result.

**Paper or page:** [Orthogonal polynomials on planar cubic curves](https://arxiv.org/abs/2011.10884v1). It says: “I<sub>n</sub> (f):= \\sum <sub>k=1</sub><sup>N</sup> {\\lambda }<sub>k,N</sub> \\left\[f(x<sub>k,N</sub>,y<sub>k,N</sub>)+f(x<sub>k,N</sub>,-y<sub>k,N</sub>)\\right\]”

**Sources:**

- [Marco Fasondini, Sheehan Olver, Yuan Xu. Orthogonal polynomials on planar cubic curves (2020).](https://arxiv.org/abs/2011.10884v1)

### Positive quadrature weights limit amplification

**Remember:** A weighted average cannot amplify an error bound.

*Rules out counterexamples.* MSC 65D32 (Numerical quadrature and cubature formulas), 41A55. arXiv math.NA. Level 3: graduate.

**Definition.** On each coordinate interval \[0,1\], approximate integration by a weighted sum of function values. Require nonnegative weights that sum to one. For each point of the product grid, multiply the corresponding coordinate weights. This adds nonnegativity to the usual requirement of integrating constants exactly.

**Problem.** Apply each coordinate rule to the function left after earlier exact integrations. If each such rule has uniform error at most ε, the full rule has error at most dε in d dimensions.

**How the definition helps.** Each coordinate rule forms an average, so applying it cannot increase the largest absolute error. In our own proof, replace exact integrals by coordinate rules one at a time, starting with the last coordinate. Each difference contributes at most ε, and adding the d bounds proves the result. In our own example, weights 2 and −1 integrate constants exactly but turn sample errors 1 and −1 into 3.

**Paper or page:** [Tensor-Train Numerical Integration of Multivariate Functions with Singularities](https://arxiv.org/abs/2103.12129v1). It says: “has nonnegative weights and is exact for constant functions”

**Sources:** none listed. No primary source with a working link was found.

### Projected weights make quadrature exact

**Remember:** Project the weight first so the product stays within the exact degree.

*True by definition.* MSC 65D32 (Numerical quadrature and cubature formulas), 41A55. arXiv math.NA, cs.NA. Level 3: graduate.

**Definition.** On a compact region, use a finite positive measure μ with a density and a polynomial inner product given by integration against μ. For a square-integrable weight h, project h orthogonally onto polynomials of total degree at most n. Multiply each original integration weight by the projected value at its node.

**Problem.** Suppose the original weighted sum integrates all polynomials of degree at most 2n exactly against μ. The modified sum then integrates every polynomial of degree at most n exactly against h dμ.

**How the definition helps.** The discarded part of the weight is orthogonal to every test polynomial, so discarding it changes no target integral, our own. The remaining product has degree at most 2n, so the original quadrature is exact, our own. The work lies in finding the weight’s polynomial moments and constructing a base rule exact through degree 2n, our own.

**Paper or page:** [Cheap and stable quadrature on polyhedral elements](https://arxiv.org/abs/2502.03446v1). It says: “the nodes and positive weights of a quadrature formula for integration in dμ, exact on ℙ₂ₙᵈ (the polynomials with total degree not exceeding 2n)”

**Sources:**

- [Alvise Sommariva, Marco Vianello, Cheap and stable quadrature on polyhedral elements](https://arxiv.org/abs/2502.03446v1)

### Signed box counts bound integrals

**Remember:** If every reflected box is overcounted, so is every positive mixture of them.

*Rules out counterexamples.* MSC 65D32 (Numerical quadrature and cubature formulas). arXiv math.NA. Level 3: graduate.

**Definition.** In the unit cube, count sample points in each box running from the origin to a chosen upper corner. Include each lower face and exclude each upper face. Nonnegative local discrepancy means the fraction of points in every such box is at least its volume.

**Problem.** Reflect the points and boxes through the center of the cube. For any nonnegative weighted sum of reflected box indicators, the sample mean bounds the integral from above.

**How the definition helps.** Each box indicator equals one inside its box and zero outside, so its sample mean is the fraction counted (our own explanation). Reflection preserves both the count and the volume. Multiplying by nonnegative weights and adding preserves the inequalities. In our own counterexample, a single point at ½ lacks nonnegative local discrepancy, and its sample mean for the indicator of (¾, 1\] is zero, below the integral ¼.

**Paper or page:** [Computable error bounds for quasi-Monte Carlo using points with non-negative local discrepancy](https://arxiv.org/abs/2309.04209v2). It says: “Let P̃ₙ have non-negative local discrepancy.”

**Sources:**

- [Michael Gnewuch, Peter Kritzer, Art B. Owen, Zexin Pan, Computable error bounds for quasi-Monte Carlo using points with non-negative local discrepancy](https://arxiv.org/abs/2309.04209v2)

### Tridiagonal matrices reveal Gaussian nodes

**Remember:** The recurrence turns polynomial zeros into matrix eigenvalues.

*Makes the theorem clean to state or prove.* MSC 65D32 (Numerical quadrature and cubature formulas), 65F15. arXiv math.NA, cs.NA. Level 3: graduate.

**Definition.** Use a positive weight on a bounded interval of positive length, with finite integral. Choose polynomials of degrees zero through n that are orthonormal for this weight. On polynomials of degree below n, multiply by x and project orthogonally back onto that space. In the degree-ordered basis this gives the Jacobi matrix, which has nonzero entries only on the main diagonal and its two neighboring diagonals.

**Problem.** The n sampling points of the Gaussian integration rule are the eigenvalues of the Jacobi matrix.

**How the definition helps.** The Jacobi matrix represents multiplication by x, so evaluation at a root turns its recurrence into an eigenvector equation. In our own words, projection discards a multiple of the degree n polynomial, which vanishes at that root. The vector of basis values is nonzero because it includes the constant polynomial. Orthogonal polynomial theory identifies the n distinct roots as the Gaussian sampling points.

**Wikipedia:** [Gauss–Legendre quadrature](https://en.wikipedia.org/wiki/Gauss%E2%80%93Legendre_quadrature). It says: “They reduce the problem of computing the nodes of a Gaussian quadrature rule to the problem of finding the eigenvalues”

**Sources:**

- [Gene H. Golub and John H. Welsch. Calculation of Gauss quadrature rules (1969).](https://doi.org/10.1090/s0025-5718-69-99647-1)

### Augmentation exposes an inverse block

**Remember:** When constraints span the missing directions, their weight supplies the inverse block.

*True by definition.* MSC 65F08 (Preconditioners for iterative methods), 65F05. arXiv math.NA. Level 3: graduate.

**Definition.** Let A be a real symmetric matrix and B a constraint matrix with m rows. Assume B maps the null space of A bijectively onto ℝᵐ. Replace A by M = A + BᵀWB, where W is an invertible m by m matrix.

**Problem.** If the augmented block is invertible, multiplying its inverse by B on the left and Bᵀ on the right gives W⁻¹.

**How the definition helps.** The added term gives the entire action of M on the null space of A (our own argument). This avoids calculating the full inverse. For any y, choose z in that null space with Bz = W⁻¹y. Then Mz = Bᵀy, so applying B to M⁻¹Bᵀy gives W⁻¹y. The work lies in checking the bijection on the null space.

**Paper or page:** [Augmentation-Based Preconditioners for Saddle-Point Systems with Singular Leading Blocks](https://arxiv.org/abs/2206.13624v1). It says: “B(A + BᵀWB)⁻¹Bᵀ = W⁻¹.”

**Sources:**

- [Susanne Bradley, Chen Greif, Augmentation-Based Preconditioners for Saddle-Point Systems with Singular Leading Blocks](https://arxiv.org/abs/2206.13624v1)

### Bregman projections decrease solution error

**Remember:** The projected step spends part of the remaining error.

*True by definition.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 3: graduate.

**Definition.** On real coordinate space, choose a differentiable function whose graph lies above each tangent plane by at least a fixed positive multiple of squared distance. Write D(x,y) for the gap at y above the tangent plane at x. The usual Bregman projection minimizes D(x,z) over a nonempty closed convex set C. Equivalently, choose z in C satisfying D(z,y) + D(x,z) ≤ D(x,y) for every y in C.

**Problem.** Project onto selected equations and pick any exact solution. The error to that solution falls by at least the error from the old iterate to the new one.

**How the definition helps.** The inequality defining the projection gives the error bound as soon as the chosen set contains every exact solution. In our own application, C imposes selected linear combinations of the original equations. The equivalence with minimization follows by expanding the three gaps and applying the first-order condition for a convex minimum.

**Paper or page:** [Adaptively Sketched Bregman Projection Methods for Linear Systems](https://arxiv.org/abs/2112.14456v1). It says: “D<sub>f</sub><sup>{\\hat{x}\_\*}</sup>(\\hat{x},y)\\leq D<sub>f</sub><sup>x\_\*</sup>(x,y) - D<sub>f</sub><sup>x\_\*</sup>(x,\\hat{x}),\\quad \\forall y\\in C.”

**Sources:**

- [Ziyang Yuan, Lu Zhang, Hongxia Wang, Hui Zhang. Adaptively Sketched Bregman Projection Methods for Linear Systems (2021).](https://arxiv.org/abs/2112.14456v1)

### Defining conjugate gradients by energy minimization bounds steps by distinct eigenvalues

**Remember:** One polynomial can invert A on every eigenvalue at once.

*True by definition. Confidence: medium.* MSC 65F10 (Iterative numerical methods for linear systems), 15A18. arXiv math.NA. Level 3: graduate.

**Definition.** Let A be real symmetric positive definite, and solve Ax = b with exact solution x\*. Start from x₀ with residual r₀ = b − Ax₀, and let K(k) be the span of r₀, Ar₀, …, Aᵏ⁻¹r₀. Define the kth conjugate gradient iterate as the point of x₀ + K(k) that minimizes the energy norm √(eᵀAe) of the error e. The Hestenes–Stiefel algorithm computes these points with short recurrences instead.

**Problem.** If A has d distinct eigenvalues, exact conjugate gradients reach the solution in at most d steps.

**How the definition helps.** With the minimization definition, it is enough to show that the exact correction lies in K(d). Let p be the polynomial of degree at most d − 1 with p(λ) = 1/λ at each distinct eigenvalue λ; since A is diagonalizable, p(A) = A⁻¹. So x\* − x₀ = A⁻¹r₀ = p(A)r₀ lies in K(d), and the minimizer at step d is x\*. The bound by distinct eigenvalues and its proof are our own; the work goes into proving that the short recurrences give the minimizers.

**Wikipedia:** [Conjugate gradient method](https://en.wikipedia.org/wiki/Conjugate_gradient_method). It says: “Conjugate gradient, assuming exact arithmetic, converges in at most n steps, where n is the size of the matrix of the system”

**Sources:**

- [Magnus R. Hestenes and Eduard Stiefel, Methods of conjugate gradients for solving linear systems (1952).](https://doi.org/10.6028/jres.049.044)

### Defining GMRES iterates as residual minimizers makes residuals never increase

**Remember:** A larger search space cannot make the best residual worse.

*True by definition.* MSC 65F10 (Iterative numerical methods for linear systems). arXiv math.NA. Level 3: graduate.

**Definition.** GMRES (the generalized minimal residual method) solves Ax = b from a first guess x₀. Let r₀ = b − Ax₀, and let Kₙ be the span of r₀, Ar₀, …, Aⁿ⁻¹r₀. Define the nth GMRES iterate xₙ as the point of x₀ + Kₙ with the smallest Euclidean residual ‖b − Axₙ‖. The algorithm computes this point with the Arnoldi process, which builds an orthonormal basis of Kₙ, and a small least-squares problem.

**Problem.** In exact arithmetic, the GMRES residual norm never increases from one step to the next.

**How the definition helps.** With the minimizer definition, the result is a comparison of two minima. The space Kₙ lies inside Kₙ₊₁, so xₙ is a candidate at step n + 1. Hence the best residual at step n + 1 is no larger. Wikipedia makes this argument. The work goes into the proof that the Arnoldi process and the small least-squares problem give this minimizer.

**Wikipedia:** [Generalized minimal residual method](https://en.wikipedia.org/wiki/Generalized_minimal_residual_method). It says: “Since every subspace is contained in the next subspace, the residual does not increase.”

**Sources:**

- [Yousef Saad and Martin H. Schultz, GMRES: A Generalized Minimal Residual Algorithm for Solving Nonsymmetric Linear Systems (1986).](https://doi.org/10.1137/0907058)

### Defining Lanczos vectors by Gram–Schmidt on Krylov vectors makes Q\*AQ tridiagonal

**Remember:** A moves each vector at most one step along, and symmetry gives the rest.

*True by definition. Confidence: medium.* MSC 65F15 (Numerical computation of eigenvalues and eigenvectors of matrices). arXiv math.NA. Level 3: graduate.

**Definition.** Let A be Hermitian and v a starting vector. The Krylov vectors are v, Av, …, Aᵐ⁻¹v. Define the Lanczos vectors q₁, …, qₘ by applying Gram–Schmidt to them. The algorithm instead computes them by a three-term recurrence that keeps only two previous vectors.

**Problem.** In exact arithmetic, while v, Av, …, Aᵐ⁻¹v stay independent, T = Q\*AQ is tridiagonal, where Q has the Lanczos vectors as columns. Tridiagonal means nonzero only on the main diagonal and the two next to it.

**How the definition helps.** With the Krylov definition, the zero pattern of T follows from two facts. First, Aqⱼ lies in the span of q₁, …, qⱼ₊₁, so qᵢ\*Aqⱼ = 0 when i &gt; j + 1. Second, T is Hermitian, so the entries with j &gt; i + 1 vanish too. The work goes into showing that the three-term recurrence gives the Gram–Schmidt vectors; the argument is our own.

**Wikipedia:** [Lanczos algorithm](https://en.wikipedia.org/wiki/Lanczos_algorithm). It says: “a tridiagonal real symmetric matrix T = V∗AV”

**Sources:**

- [Cornelius Lanczos, An iteration method for the solution of the eigenvalue problem of linear differential and integral operators (1950).](https://doi.org/10.6028/jres.045.026)

### Defining Ritz values by min-max makes them fall as trial spaces grow

**Remember:** A larger trial space offers more subspaces, so each minimum can only drop.

*True by definition. Confidence: medium.* MSC 65F15 (Numerical computation of eigenvalues and eigenvectors of matrices), 15A42. arXiv math.NA. Level 3: graduate.

**Definition.** Let A be a Hermitian matrix and V a trial subspace. Define the kth Ritz value θₖ(V) by a min-max. It is the minimum, over k-dimensional subspaces S of V, of the largest Rayleigh quotient x\*Ax / x\*x on S. The usual definition takes the eigenvalues of Q\*AQ, where the columns of Q are an orthonormal basis of V.

**Problem.** If V ⊆ W and k ≤ dim V, then θₖ(W) ≤ θₖ(V).

**How the definition helps.** With the min-max definition, the result is a comparison of two minima. Every k-dimensional subspace of V is also one of W, and a minimum over a larger family cannot be larger. The work goes into the min-max theorem for Q\*AQ, which shows that the two definitions agree. With W the whole space, the result is one half of the Cauchy interlacing theorem; the comparison argument is our own.

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “a variational characterization of eigenvalues of compact Hermitian operators on Hilbert spaces”

**Sources:** none listed. No primary source with a working link was found.

### Min-max generalized eigenvalues fall when the mass matrix grows

**Remember:** Larger denominators lower the quotient in every trial direction.

*True by definition.* MSC 65F15 (Numerical computation of eigenvalues and eigenvectors of matrices), 15A22. arXiv math.NA. Level 3: graduate.

**Definition.** For symmetric positive definite matrices A and B, define the kth generalized eigenvalue λₖ(A, B) by a min-max. It is the minimum, over k-dimensional subspaces, of the largest quotient xᵀAx / xᵀBx. The algebraic definition solves Av = λBv. The two agree by the ordinary min-max theorem, applied after a change of variables by the square root of B.

**Problem.** If B̃ − B is positive semidefinite, then λₖ(A, B̃) ≤ λₖ(A, B) for every k.

**How the definition helps.** With the min-max definition, the inequality holds subspace by subspace. Since xᵀAx &gt; 0 and xᵀB̃x ≥ xᵀBx &gt; 0, each quotient for B̃ is at most the one for B. Taking the maximum and then the minimum keeps the inequality. The work goes into the min-max theorem for the pair; the subspace argument is our own.

**Paper or page:** [A mathematical theory for mass lumping and its generalization with applications to isogeometric analysis](https://arxiv.org/abs/2212.03614v4). It says: “λₖ(A, B̃) ≤ λₖ(A, B) for all k = 1, …, n.”

**Sources:**

- [A mathematical theory for mass lumping and its generalization with applications to isogeometric analysis](https://arxiv.org/abs/2212.03614v4)

### Pseudospectra as perturbed spectra make nearby matrices' pseudospectra nest

**Remember:** Two perturbations fit within the sum of their budgets.

*True by definition. Confidence: medium.* MSC 65F15 (Numerical computation of eigenvalues and eigenvectors of matrices), 15A18. arXiv math.NA. Level 3: graduate.

**Definition.** Define the ε-pseudospectrum Λ(A, ε) as the set of eigenvalues of all matrices A + E with ‖E‖ ≤ ε, in the Euclidean operator norm. The resolvent definition takes all z with ‖(zI − A)⁻¹‖ ≥ 1/ε, together with the eigenvalues of A. The two agree because the smallest perturbation that makes z an eigenvalue has norm equal to the smallest singular value of zI − A.

**Problem.** If ‖A − B‖ ≤ δ, then Λ(B, ε) ⊆ Λ(A, ε + δ).

**How the definition helps.** With the perturbation definition, the inclusion is the triangle inequality. Let z be an eigenvalue of B + E with ‖E‖ ≤ ε; then B + E = A + F with F = (B − A) + E and ‖F‖ ≤ ε + δ. From the resolvent definition, one would need a bound on how the resolvent norm changes with the matrix. The work goes into the theorem that the definitions agree; the argument is our own.

**Wikipedia:** [Pseudospectrum](https://en.wikipedia.org/wiki/Pseudospectrum). It says: “The ε-pseudospectrum of a matrix A consists of all eigenvalues of matrices which are ε-close to A”

**Sources:**

- [Lloyd N. Trefethen, Pseudospectra of Linear Operators (1997).](https://doi.org/10.1137/S0036144595295284)

### Null directions preserve weighted fits

**Remember:** The combined matrix records exactly the directions neither weight can see.

*True by definition.* MSC 65F20 (Numerical solutions to overdetermined systems, pseudoinverses). arXiv math.NA. Level 3: graduate.

**Definition.** For a real matrix A and data b, first minimize (Ax − b)ᵀP(Ax − b). Among its minimizers, minimize xᵀQx. Both weights are symmetric positive semidefinite. Combine them in G = AᵀPA + Q.

**Problem.** Orthogonal projection onto the range of G preserves solutions. Adding any vector from the null space of G also preserves solutions.

**How the definition helps.** Combining the weights makes their common invisible directions exactly the null space of G (our own argument). Indeed, zᵀGz is the sum of the two nonnegative quantities (Az)ᵀP(Az) and zᵀQz. It vanishes exactly when PAz and Qz both vanish. Adding such a z changes neither objective. Projecting onto the range of symmetric G removes just such a vector.

**Paper or page:** [A new interpretation of the weighted pseudoinverse and its applications](https://arxiv.org/abs/2408.09412v1). It says: “conversally, if x ∈ ℛ(G) is a solution, then x + z is a solution for any z ∈ 𝒩(G)”

**Sources:**

- [Haibo Li, A new interpretation of the weighted pseudoinverse and its applications](https://arxiv.org/abs/2408.09412v1)

### Rotations expose the numerical radius

**Remember:** Rotate before maximizing to turn an absolute value into an eigenvalue.

*True by definition.* MSC 65F35 (Numerical computation of matrix norms, conditioning, scaling), 65F15. arXiv math.NA. Level 3: graduate.

**Definition.** For a complex square matrix C, its numerical radius is the largest value of \|x\*Cx\| over unit vectors x. Here x\* is the conjugate transpose. Equivalently, maximize the real part of x\*Cx over all unit vectors and all rotations of that complex number.

**Problem.** Write C = A + iB with A and B Hermitian, meaning equal to their conjugate transposes. The numerical radius is the largest top eigenvalue of cos θ A + sin θ B over θ.

**How the definition helps.** The rotated definition makes the objective a Hermitian quadratic form for each angle, our own. Its maximum over unit vectors is the largest eigenvalue by the Rayleigh principle, our own. The equivalence with the absolute-value definition follows by rotating each complex number onto the nonnegative real axis, our own.

**Paper or page:** [On semidefinite programming characterizations of the numerical radius and its dual norm](https://arxiv.org/abs/2308.07287v3). It says: “r(C) = max₍θ ∈ \[0, 2π)₎ λₘₐₓ(cos θ A + sin θ B).”

**Sources:**

- [Shmuel Friedland, Chi-Kwong Li, On semidefinite programming characterizations of the numerical radius and its dual norm](https://arxiv.org/abs/2308.07287v3)

### Acyclic matching makes solves triangular

**Remember:** No cycle means an order for solving the paired equations.

*Makes the theorem clean to state or prove.* MSC 65F50 (Computational methods for sparse matrices), 65N22. arXiv math.NA, cs.NA. Level 3: graduate.

**Definition.** Pair distinct mesh cells with distinct faces on their boundaries, using faces one dimension lower. Use the paired faces as rows and the paired cells as columns of the signed boundary matrix. Draw an arrow from pair i to another pair j when face i occurs in cell j. Call the matching acyclic if these arrows form no directed cycle.

**Problem.** For oriented mesh incidences with nonzero matched entries, the submatrix of an acyclic matching is triangular after ordering the pairs. It can be solved by back substitution.

**How the definition helps.** Acyclicity lets us order the pairs so every arrow points forward. In our own argument, each off-diagonal nonzero entry then lies above the diagonal. Matched entries give a nonzero diagonal, so back substitution solves the system.

**Paper or page:** [Inverting the discrete curl operator: a novel graph algorithm to find a vector potential of a given vector field](https://arxiv.org/abs/2111.04431v1). It says: “is upper triangular and invertible.”

**Sources:**

- [Silvano Pitassi, Riccardo Ghiloni, Ruben Specogna. Inverting the discrete curl operator: a novel graph algorithm to find a vector potential of a given vector field (2021).](https://arxiv.org/abs/2111.04431v1)

### Interval operations defined as sets of results are inclusion monotone

**Remember:** Wider input intervals only add possible operand pairs.

*True by definition. Confidence: medium.* MSC 65G30 (Interval and finite arithmetic), 65G40. arXiv math.NA. Level 3: graduate.

**Definition.** For intervals X and Y, define X ∗ Y as the set of all x ∗ y with x in X and y in Y. For the four arithmetic operations this set is again an interval, if division by an interval containing zero is excluded. The computational definition gives endpoint formulas instead, such as the minimum and maximum of the four endpoint products.

**Problem.** If X ⊆ X′ and Y ⊆ Y′, then X ∗ Y ⊆ X′ ∗ Y′. By induction, every expression built from these operations is inclusion monotone wherever it is defined.

**How the definition helps.** With the set definition, inclusion monotonicity is immediate. Larger input intervals allow more operand pairs, so the set of results can only grow. From the endpoint formulas, one would have to compare minima and maxima case by case. The work goes into the theorem that the endpoint formulas give the set; outward rounding in floating point needs a separate argument.

**Wikipedia:** [Interval arithmetic](https://en.wikipedia.org/wiki/Interval_arithmetic). It says: “A binary operation ∗ on two intervals, such as addition or multiplication is defined by”

**Sources:** none listed. No primary source with a working link was found.

### Generalized colleague matrices have a polynomial’s roots as eigenvalues

**Remember:** Multiplication by x modulo the polynomial has the roots as eigenvalues.

*True by definition.* MSC 65H04 (Numerical computation of roots of polynomial equations), 65F15, 15A18. arXiv math.NA. Level 3: graduate.

**Definition.** Expand a degree-n polynomial in a basis that satisfies a three-term recurrence, like the Chebyshev polynomials. The generalized colleague matrix is a tridiagonal matrix from the recurrence plus a rank-one correction from the coefficients. Our own reading is that it is the matrix of multiplication by x modulo the polynomial, up to transposition.

**Problem.** The eigenvalues of the generalized colleague matrix are the roots of the polynomial. So finding the roots of a function, once it is approximated by such a polynomial, becomes an eigenvalue problem.

**How the definition helps.** In the ring of polynomials where p counts as zero, multiplication by x has the roots of p as its eigenvalues (our own). The recurrence gives the tridiagonal part, and reducing the top-degree term by p gives the rank-one correction (our own). So the theorem follows from the definition (our own). The paper’s work is to build well-conditioned bases on complex domains and a stable QR algorithm for these matrices.

**Paper or page:** [Finding roots of complex analytic functions via generalized colleague matrices](https://arxiv.org/abs/2307.14494v3). It says: “The roots of the polynomial are the eigenvalues of the matrix C defined by the formula C = A + eₙ qᵀ,”

**Sources:**

- [Hanwen Zhang, Vladimir Rokhlin, Finding roots of complex analytic functions via generalized colleague matrices, arXiv:2307.14494v3 (2024)](https://arxiv.org/abs/2307.14494v3)
- [I. J. Good, The colleague matrix, a Chebyshev analogue of the companion matrix, Quarterly Journal of Mathematics 12 (1961) 61–68](https://doi.org/10.1093/qmath/12.1.61)

### Measuring trial functions by the operator’s output makes operator equations well-posed

**Remember:** Measure a trial function by what the operator does to it.

*True by definition.* MSC 65J10 (Numerical solutions to equations with linear operators), 47A50, 46B04. arXiv math.NA, math.FA. Level 3: graduate.

**Definition.** Start from an injective linear operator B from a trial space into the dual V′ of a test space. Give each trial function u the norm of Bu in V′. Complete the trial space in this norm and extend B continuously to the completion.

**Problem.** If the range of B is dense in V′, the extended operator is an isometric isomorphism from the completion onto V′. So the extended equation has exactly one solution for each right-hand side, with norm equal to that of the data.

**How the definition helps.** With the new norm, B preserves norms by definition, so the extension is an isometry (our own). The image of a complete space under an isometry is complete, hence closed (our own). A closed dense subspace is the whole space, so the extension is onto (our own). The real work moves to checking injectivity and density for each equation and to identifying the completed space. The paper treats elliptic, parabolic and hyperbolic equations this way.

**Paper or page:** [A unified framework for the analysis, numerical approximation and model reduction of linear operator equations, Part I: Well-posedness in space and time](https://arxiv.org/abs/2508.05407v1). It says: “The main concept is completion and extension of operators starting from the strong form of the problem.”

**Sources:**

- [Moritz Feuerle, Richard Löscher, Olaf Steinbach, Karsten Urban, A unified framework for the analysis, numerical approximation and model reduction of linear operator equations, Part I: Well-posedness in space and time, arXiv:2508.05407v1 (2025)](https://arxiv.org/abs/2508.05407v1)

### Affine ratio levels survive Runge–Kutta

**Remember:** Each ratio level is a flat constraint.

*True by definition.* MSC 65L06 (Multistep, Runge-Kutta and extrapolation methods for ordinary differential equations). arXiv math.NA. Level 3: graduate.

**Definition.** Write a conserved quantity as Q(x)/R(x), where Q and R are affine and R is nonzero on the domain. For a value c, represent its level by the affine equation Q(x) − cR(x) = 0. This replaces testing conservation through the nonlinear ratio.

**Problem.** An explicit Runge–Kutta step preserves any conserved affine ratio as long as its stages and output remain in the domain.

**How the definition helps.** Writing a ratio level as an affine equation lets every stage preserve it by addition. In our own proof, conservation makes the directional derivative of Q − cR vanish along the slope at every point on that level. Every explicit stage adds a combination of earlier slopes to the initial state. Induction keeps every stage and the final state on the level.

**Paper or page:** [On the preservation of second integrals by Runge-Kutta methods](https://arxiv.org/abs/2105.10929v1). It says: “All Runge-Kutta methods preserve all rational first integrals of the form H(x) = Q(x)/R(x) for Q(x) and R(x) affine.”

**Sources:** none listed. No primary source with a working link was found.

### A-stability turns stiff solvers into a sharp order barrier

**Remember:** Stable for every decaying mode means order two at most.

*Makes the theorem clean to state or prove.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 65L06, 65L04. arXiv math.NA. Level 3: graduate.

**Definition.** Apply a method to the test equation y′ = λy with step h. The method is A-stable when its numerical solution goes to zero for every hλ with negative real part. So it copies the decay of every stable linear equation, however stiff (with very fast decaying parts).

**Problem.** No explicit linear multistep method is A-stable. An A-stable linear multistep method has order at most 2, and among those the trapezoidal rule has the smallest error constant.

**How the definition helps.** A-stability replaces the vague wish to handle stiff equations with a property of one test equation, and a property of one rational function can be proved impossible. With this definition, Dahlquist could prove a sharp barrier. The barrier explains why stiff solvers use implicit Runge–Kutta methods or methods that are stable in a weaker sense. What stays hard is the proof of the barrier itself, which uses complex analysis of the stability function.

**Wikipedia:** [Linear multistep method](https://en.wikipedia.org/wiki/Linear_multistep_method), [Stiff equation](https://en.wikipedia.org/wiki/Stiff_equation). It says: “The second Dahlquist barrier states that no explicit linear multistep methods are A-stable. Further, the maximal order of an (implicit) A-stable linear multistep method is 2.”

**Sources:**

- [G. Dahlquist, A special stability problem for linear multistep methods, BIT 3 (1963) 27–43](https://doi.org/10.1007/BF01963532)

### Convex Euler stages inherit stability

**Remember:** No stage grows if none of the Euler steps in its average grows.

*True by definition.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 65L06. arXiv math.NA. Level 3: graduate.

**Definition.** A forward Euler step adds the step length times the current slope to the current state. Write each Runge–Kutta stage, including the final update, as a weighted average of Euler steps from earlier states. The weights must be nonnegative and sum to one. The usual coefficient table can hide this representation.

**Problem.** Suppose forward Euler cannot increase a chosen norm below a given step limit. The full update cannot increase the norm if every Euler substep satisfies that limit.

**How the definition helps.** In our own argument, every term in a stage average already satisfies the bound, so convexity gives the bound for the average. In our own words, induction carries it through the stages. The work is to find a nonnegative stage representation and check its largest Euler substep.

**Paper or page:** [Embedded error estimation and adaptive step-size control for optimal explicit strong stability preserving Runge--Kutta methods](https://arxiv.org/abs/1806.08693v1). It says: “then the solution obtained by ERK method satisfies the strong stability bound ‖uⁿ⁺¹‖ ≤ ‖uⁿ‖”

**Sources:** none listed. No primary source with a working link was found.

### Last-stage updates damp stiff modes

**Remember:** Use the last stage to inherit its damping.

*True by definition. Confidence: medium.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 65L04. arXiv math.NA. Level 3: graduate.

**Definition.** A Runge–Kutta method computes intermediate values called stages, then combines their derivatives to update the solution. A stiffly accurate method uses its last stage as the output. For the test equation y′ = λy with step length h, write z = hλ. A-stability means the step never increases \|y\| when Re(z) ≤ 0.

**Problem.** Suppose a stiffly accurate method is A-stable and its matrix A of stage coefficients is invertible. Then it is L-stable, meaning its one-step amplification also tends to zero as \|z\| tends to infinity.

**How the definition helps.** Using the last stage as output makes its decay sufficient for damping the whole update (our own argument). The stage vector equals (I − zA)⁻¹ applied to a vector whose entries all equal the starting value. Invertibility of A makes this inverse tend to zero as \|z\| grows. Proving A-stability for the chosen method remains a separate task.

**Wikipedia:** [L-stability](https://en.wikipedia.org/wiki/L-stability). It says: “A method is L-stable if it is A-stable and φ(z) → 0 as z → ∞,”

**Sources:** none listed. No primary source with a working link was found.

### The inner-product logarithmic norm bounds solution growth by exp(μt)

**Remember:** Only the Hermitian part controls how fast the length can grow.

*True by definition.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 15A60. arXiv math.NA. Level 3: graduate.

**Definition.** For the Euclidean norm, define the logarithmic norm μ(A) as the largest eigenvalue of the Hermitian part (A + A\*)/2. Equivalently, μ(A) is the largest value of Re⟨x, Ax⟩ / ⟨x, x⟩. Dahlquist's original definition is the limit of (‖I + hA‖ − 1)/h as h decreases to 0.

**Problem.** Every solution of x′ = Ax satisfies ‖x(t)‖ ≤ exp(μ(A)t) ‖x(0)‖ for t ≥ 0.

**How the definition helps.** With the inner-product definition, the bound is a one-line differential inequality. The derivative of ‖x‖² is 2 Re⟨x, Ax⟩, which is at most 2μ(A)‖x‖², and Grönwall's inequality gives the bound. The work goes into the equivalence of the two definitions, which Wikipedia states for bounded operators. The one-line proof is our own.

**Wikipedia:** [Logarithmic norm](https://en.wikipedia.org/wiki/Logarithmic_norm). It says: “the inner product definition is equivalent to the original definition”

**Sources:** none listed. No primary source with a working link was found.

### Flux-form finite volume schemes conserve totals by construction

**Remember:** One cell's outflow is its neighbour's inflow.

*True by definition.* MSC 65M08 (Finite volume methods for initial value and initial-boundary value problems involving PDEs). arXiv math.NA. Level 3: graduate.

**Definition.** Divide the domain into cells. Update each cell average by the net flux through its faces. Use one numerical flux value per interior face, added to one neighbour and subtracted from the other. A pointwise finite difference scheme instead approximates derivatives at grid points and need not have this structure.

**Problem.** With no source terms, the total of the cell contents changes only by the fluxes through the outer boundary.

**How the definition helps.** With one shared flux per face, the interior terms cancel in pairs when the cells are summed. Wikipedia makes this point. The work goes into choosing numerical fluxes that are consistent and stable.

**Wikipedia:** [Finite volume method](https://en.wikipedia.org/wiki/Finite_volume_method). It says: “Because the flux entering a given volume is identical to that leaving the adjacent volume, these methods are conservative.”

**Sources:** none listed. No primary source with a working link was found.

### Lax's equivalence theorem trades convergence for stability

**Remember:** Consistency plus stability equals convergence.

*Makes the theorem clean to state or prove.* MSC 65M12 (Stability and convergence of numerical methods for initial value and initial-boundary value problems involving PDEs), 65M06. arXiv math.NA. Level 3: graduate.

**Definition.** A problem is well-posed in Hadamard's sense when a solution exists, is unique, and depends continuously on the data. A finite difference scheme is consistent when it approximates the right equation as the grid shrinks. It is stable (Lax–Richtmyer stable) when the powers of its update operator stay uniformly bounded in norm.

**Problem.** For a consistent linear scheme for a well-posed linear initial value problem, the scheme converges to the true solution if and only if it is stable.

**How the definition helps.** The definitions split the hard question of convergence into two easier checks. The page says that consistency is straightforward to verify and that stability is much easier to show than convergence. Well-posedness is needed: for an ill-posed problem, such as the backward heat equation, no scheme could converge in a useful way. What stays hard is to prove stability for a given scheme.

**Wikipedia:** [Lax equivalence theorem](https://en.wikipedia.org/wiki/Lax_equivalence_theorem), [Well-posed problem](https://en.wikipedia.org/wiki/Well-posed_problem). It says: “It states that for a linear consistent finite difference method for a well-posed linear initial value problem, the method is convergent if and only if it is stable.”

**Sources:**

- [P. D. Lax and R. D. Richtmyer, Survey of the Stability of Linear Finite Difference Equations, Communications on Pure and Applied Mathematics 9 (1956)](https://doi.org/10.1002/cpa.3160090206)

### Nonnegative inverses preserve positivity

**Remember:** A nonnegative matrix cannot turn nonnegative data negative.

*True by definition.* MSC 65M12 (Stability and convergence of numerical methods for initial value and initial-boundary value problems involving PDEs). arXiv math.NA. Level 3: graduate.

**Definition.** Write one time step as Bu = Kv, where v is the old state and u is the new state. Require every entry of K to be nonnegative. Choose B to be a nonsingular M-matrix, meaning its off-diagonal entries are nonpositive and its inverse has nonnegative entries.

**Problem.** For a homogeneous step whose new state solves that implicit system, nonnegative old data give nonnegative new data.

**How the definition helps.** The inverse characterization makes u the result of applying two nonnegative matrices to v. In our own words, each multiplication preserves nonnegative entries. The work lies in recognizing B without computing its inverse. The cited theorem allows a positive diagonal when each diagonal entry exceeds the sum of the other absolute entries in its row.

**Paper or page:** [Flux-corrected transport stabilization of an evolutionary cross-diffusion cancer invasion model](https://arxiv.org/abs/2307.08096v1). It says: “Then 𝔹 is an M-matrix”

**Sources:**

- [Shahin Heydari, Petr Knobloch, and Thomas Wick. Flux-corrected transport stabilization of an evolutionary cross-diffusion cancer invasion model (2024).](https://doi.org/10.1016/j.jcp.2023.112711)

### Coercivity makes the Galerkin solution nearly the best approximation

**Remember:** Coercivity on the big space passes to every subspace.

*Makes the theorem clean to state or prove.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 35A15. arXiv math.NA, math.AP. Level 3: graduate.

**Definition.** A bilinear form a on a Hilbert space V is coercive when a(v, v) ≥ α‖v‖² for some α &gt; 0 and all v. It is continuous when \|a(v, w)\| ≤ γ‖v‖‖w‖. The Galerkin method solves the same equation a(uₕ, v) = L(v) only for v in a finite-dimensional subspace Vₕ.

**Problem.** The error of the Galerkin solution is at most γ/α times the error of the best approximation of u from Vₕ. This is Céa's lemma, the basic error bound of the finite element method.

**How the definition helps.** Coercivity holds on every subspace with the same constant α, so the error constant γ/α does not depend on the subspace. The one-line proof uses coercivity, continuity and the fact that a(u − uₕ, v) = 0 for every v in Vₕ. So the question of accuracy becomes a question of approximation theory: how well functions in Vₕ approximate u. Our own: mixed methods replace coercivity by a weaker inf-sup condition, which does not pass to subspaces.

**Wikipedia:** [Céa's lemma](https://en.wikipedia.org/wiki/C%C3%A9a%27s_lemma). It says: “That is to say, the subspace solution uₕ is "the best" approximation of u in Vₕ, up to the constant γ/α.”

**Sources:**

- [J. Céa, Approximation variationnelle des problèmes aux limites, Annales de l'Institut Fourier 14 (1964)](https://doi.org/10.5802/aif.181)

### Defining linear elements by vertex values makes them continuous across faces

**Remember:** On a shared face, only that face's vertex values matter.

*True by definition. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 65D05. arXiv math.NA. Level 3: graduate.

**Definition.** On a mesh of simplices that meet face to face, define a piecewise linear function by its values at the vertices. On each simplex it is the affine function with those vertex values, written in barycentric coordinates. Barycentric coordinates are the weights that write a point as an affine combination of the vertices. The alternative fixes monomial coefficients on each simplex and imposes matching conditions on shared faces.

**Problem.** On a conforming simplicial mesh, the piecewise linear function defined by vertex values is continuous.

**How the definition helps.** With vertex values as the data, two neighbouring pieces agree on their shared face automatically. On the face, each piece restricts to an affine function fixed by the values at the face's vertices, and both pieces take the same values there. The work goes into the fact that vertex values fix exactly one affine function on a simplex. The continuity argument is our own.

**Wikipedia:** [Barycentric coordinate system](https://en.wikipedia.org/wiki/Barycentric_coordinate_system). It says: “With above notation, the homogeneous barycentric coordinates of Aᵢ are all zero, except the one of index i.”

**Sources:** none listed. No primary source with a working link was found.

### Galerkin solutions as energy projections make nested errors obey Pythagoras

**Remember:** The new correction and the remaining error are perpendicular in energy.

*True by definition. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 65N15. arXiv math.NA. Level 3: graduate.

**Definition.** Let u solve a(u, v) = ℓ(v) for all v, where a is a symmetric coercive bilinear form and ℓ is a given linear functional. Coercive means a(v, v) ≥ c‖v‖² for some c &gt; 0, and a then defines the energy inner product. Define the Galerkin solution in a trial space as the energy-orthogonal projection of u onto that space. The usual definition solves a(uₕ, v) = ℓ(v) for every v in the trial space.

**Problem.** Let V₁ ⊆ V₂ be trial spaces with Galerkin solutions u₁ and u₂. Then ‖u − u₁‖² = ‖u − u₂‖² + ‖u₂ − u₁‖² in the energy norm.

**How the definition helps.** With the projection definition, the identity is Pythagoras' theorem. The error u − u₂ is energy-orthogonal to V₂, and the correction u₂ − u₁ lies in V₂. Wikipedia derives this orthogonality by subtracting the two equations, which shows that the two definitions agree. The work is small here: that subtraction, plus existence from coercivity. The nested identity is our own.

**Wikipedia:** [Galerkin method](https://en.wikipedia.org/wiki/Galerkin_method). It says: “The key property of the Galerkin approach is that the error is orthogonal to the chosen subspaces.”

**Sources:** none listed. No primary source with a working link was found.

### Optimal test functions make Petrov–Galerkin methods inherit continuous inf-sup stability

**Remember:** Keep the best test function for every trial function.

*True by definition. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 65J10, 65N12. arXiv math.NA. Level 3: graduate.

**Definition.** Take a bilinear form b and a linear functional ℓ. A Petrov–Galerkin method seeks a discrete trial function uₕ with b(uₕ, v) = ℓ(v) for all v in a discrete test space. The optimal test function Tu of u is the element of the full test space V with ⟨Tu, v⟩ = b(u, v) for all v. The optimal discrete test space is the set of all Tuₕ.

**Problem.** Suppose the continuous problem satisfies the inf-sup condition: the supremum of b(u, v)/‖v‖ over nonzero v in V is at least γ‖u‖ for every trial function u. Then the Petrov–Galerkin method with the optimal discrete test space satisfies the same condition with the same constant γ, so it is stable.

**How the definition helps.** By definition, Tuₕ is the test function on which b(uₕ, ·) is largest relative to its norm (our own). Indeed b(uₕ, Tuₕ) = ‖Tuₕ‖², and the Riesz theorem gives ‖Tuₕ‖ = the supremum of b(uₕ, v)/‖v‖ over V (our own). Tuₕ lies in the discrete test space, so the discrete supremum equals the continuous one (our own). In practice T must be approximated, and keeping the bound then needs a separate argument (our own).

**Paper or page:** [Stabilization of isogeometric finite element method with optimal test functions computed from L₂ norm residual minimization](https://arxiv.org/abs/2411.15565v1). It says: “which guarantee automatic preservation of the inf-sup condition of the continuous formulation.”

**Sources:**

- [Marcin Łoś, Tomasz Służalec, Maciej Paszyński, Eirik Valseth, Stabilization of isogeometric finite element method with optimal test functions computed from L₂ norm residual minimization, arXiv:2411.15565v1 (2024)](https://arxiv.org/abs/2411.15565v1)
- [Leszek Demkowicz, Jay Gopalakrishnan, A class of discontinuous Petrov–Galerkin methods. II. Optimal test functions, Numerical Methods for Partial Differential Equations (2010)](https://doi.org/10.1002/num.20640)

### Projections that commute with derivatives give stable discrete Hodge Laplacians

**Remember:** Find a potential in the full space, then project it.

*True by definition. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 58A10, 18G35. arXiv math.NA. Level 3: graduate.

**Definition.** A Hilbert complex is a chain of Hilbert spaces V⁰, V¹, … with maps dᵏ between them, where two maps in a row give zero. Choose finite-dimensional subspaces Vₕᵏ such that each dᵏ sends Vₕᵏ into the next subspace. A bounded cochain projection is a bounded projection Πₕᵏ onto Vₕᵏ with dᵏΠₕᵏ = Πₕᵏ⁺¹dᵏ.

**Problem.** Theorem 2 assumes an exact complex, where every element with zero derivative is a derivative, plus these projections and an approximation property. Then the discrete mixed problem for the Hodge Laplacian dd\* + d\*d has a unique solution. It is stable uniformly in the mesh size and converges at the best possible rate.

**How the definition helps.** Commutation lets an exactness argument in the full spaces pass down to the discrete spaces (our own). If a discrete element vₕ has dvₕ = 0, exactness gives u in the full space with du = vₕ, and then d(Πₕu) = Πₕdu = vₕ (our own). Bounds on Πₕ then turn the continuous stability bound into a discrete one (our own). The hard step is to build bounded projections that commute, which the paper does with spline spaces (our own).

**Paper or page:** [Structure-preserving Discretization of the Hessian Complex based on Spline Spaces](https://arxiv.org/abs/2109.05293v1). It says: “There exist Wⁱ-bounded projections Πₕⁱ ∶ Vⁱ → Vₕⁱ, which commute with the operators dⁱ.”

**Sources:**

- [Jeremias Arf, Bernd Simeon, Structure-preserving Discretization of the Hessian Complex based on Spline Spaces, arXiv:2109.05293v1 (2021)](https://arxiv.org/abs/2109.05293v1)
- [Douglas N. Arnold, Richard S. Falk, Ragnar Winther, Finite element exterior calculus, homological techniques, and applications, Acta Numerica 15 (2006)](https://doi.org/10.1017/S0962492906210018)

### Trial gradients recover Galerkin

**Remember:** Put trial gradients in the flux space and the projection disappears.

*True by definition.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs). arXiv math.NA. Level 3: graduate.

**Definition.** For Poisson’s equation with zero boundary values, approximate the unknown function u and its gradient in separate finite-dimensional spaces. Choose the second space to contain the gradient of every function in the first.

**Problem.** The computed gradient equals the gradient of the computed function. The latter function satisfies the standard Galerkin equations, which test Poisson’s equation against each trial function after integration by parts.

**How the definition helps.** Including all trial gradients makes the projection in the first equation exact (our own explanation). That equation sets the computed gradient equal to the orthogonal projection of ∇uₕ onto the second space. Substituting ∇uₕ in the second equation gives the Galerkin equations. Zero boundary values make their energy positive for every nonzero trial function.

**Paper or page:** [On the necessity of the inf-sup condition for a mixed finite element formulation](https://arxiv.org/abs/2206.06968v2). It says: “The other component of the solution is given by σₕ = ∇uₕ.”

**Sources:**

- [Fleurianne Bertrand, Daniele Boffi, On the necessity of the inf-sup condition for a mixed finite element formulation](https://arxiv.org/abs/2206.06968v2)

### Symplectic integrators almost exactly conserve a nearby shadow Hamiltonian

**Remember:** A symplectic method solves the wrong problem almost exactly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 65P10 (Numerical methods for Hamiltonian systems including symplectic integrators), 37M15. arXiv math.NA, math.DS. Level 3: graduate.

**Definition.** A numerical method for a Hamiltonian system is symplectic when each step preserves the symplectic form of phase space, as the true flow does. With one degree of freedom, this means that each step preserves area. The Verlet method is an example.

**Problem.** Over very long times, the energy error of a symplectic method stays small and roughly constant, while non-symplectic methods such as Runge–Kutta methods drift. The precise theorem needs an analytic Hamiltonian and a small step. It holds for times exponentially long in one over the step size.

**How the definition helps.** The method follows a nearby shadow Hamiltonian almost exactly, so it conserves that quantity and the true energy cannot drift far. So the definition turns a long-time error question into backward error analysis: which nearby problem does the method solve exactly? Our own: the shadow Hamiltonian comes from a series that in general diverges, and a truncation of it is conserved up to an error exponentially small in one over the step size. That estimate stays hard.

**Wikipedia:** [Energy drift](https://en.wikipedia.org/wiki/Energy_drift), [Symplectic integrator](https://en.wikipedia.org/wiki/Symplectic_integrator). It says: “These integrators do not in fact reproduce the actual Hamiltonian mechanics of the system; instead, they reproduce a closely related "shadow" Hamiltonian whose value they conserve many orders of magnitude more closely.”

**Sources:**

- [E. Hairer, C. Lubich, G. Wanner, Geometric Numerical Integration, 2nd ed., Springer Series in Computational Mathematics 31 (2006)](https://doi.org/10.1007/3-540-30666-8)

### A reversibility check keeps implicit Hamiltonian Monte Carlo unbiased

**Remember:** Keep only proposals that can retrace their steps.

*Rules out counterexamples.* MSC 65C05 (Monte Carlo methods), 65C40, 65P10. arXiv math.NA, stat.CO. Level 4: research.

**Definition.** Hamiltonian Monte Carlo proposes a move by numerically integrating Hamiltonian dynamics, then accepts or rejects it by the Metropolis rule. For nonseparable Hamiltonians the integrator is implicit, so its equation may have several solutions or none. The check runs the integrator again from the proposal after reversing momentum, and rejects the move unless this returns to the start.

**Problem.** Assume the numerical flow preserves volume and the momentum reversal is a smooth involution, a map that is its own inverse. Then the algorithm with the reversibility check leaves the target probability measure invariant.

**How the definition helps.** The check restricts moves to those where the computed map is reversible up to momentum reversal, which is what the standard proof needs. Without the check, an implicit solver can pick a different solution branch on the way back (our own). Then forward and backward moves need not balance, and the chain can sample the wrong distribution (our own). The invariance proof also uses volume preservation and the Metropolis acceptance rule.

**Paper or page:** [Unbiasing Hamiltonian Monte Carlo algorithms for a general Hamiltonian function](https://arxiv.org/abs/2303.15918v2). It says: “We show here how to enforce the numerical reversibility, and thus unbiasedness, of HMC schemes in this context by introducing a reversibility check.”

**Sources:**

- [Tony Lelièvre, Régis Santet, Gabriel Stoltz, Unbiasing Hamiltonian Monte Carlo algorithms for a general Hamiltonian function, arXiv:2303.15918v2 (2023)](https://arxiv.org/abs/2303.15918v2)

### Describing summation by its tree bounds rounding error through tree height

**Remember:** Each input picks up one rounding factor per addition above it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 65G50 (Roundoff error). arXiv math.NA. Level 4: research.

**Definition.** Describe a floating-point summation by its computational tree. The inputs are the leaves, and each inner node is one rounded addition. The height h is the largest number of additions on a path from a leaf to the root. Recursive summation has height n − 1, and pairwise summation has height about log₂ n.

**Problem.** Assume each addition has relative rounding error at most u. Then the error of the computed sum is at most ((1 + u)ʰ − 1) Σ\|xⱼ\|.

**How the definition helps.** The tree lets one bound cover every order of summation, through the height alone. Each input is multiplied by the rounding factors (1 + δ) on its path to the root. There are at most h such factors, so each coefficient differs from 1 by at most (1 + u)ʰ − 1. The cited paper's Theorem 2.4 gives the weaker bound (1 + u)ʰ h u Σ\|xⱼ\|. The sharper form above is our own argument. The work goes into choosing a summation order with small height.

**Paper or page:** [Precision-aware Deterministic and Probabilistic Error Bounds for Floating Point Summation](https://arxiv.org/abs/2203.15928v1). It says: “If h is the height of the computational tree”

**Sources:**

- [Precision-aware Deterministic and Probabilistic Error Bounds for Floating Point Summation](https://arxiv.org/abs/2203.15928v1)

### Olver's logarithmic relative error makes the errors of products add

**Remember:** Logarithms turn relative changes in a product into a sum.

*True by definition. Confidence: medium.* MSC 65G50 (Roundoff error). arXiv math.NA. Level 4: research.

**Definition.** For nonzero numbers x and x̃ of the same sign, define Olver's relative precision rp(x̃, x) = \|ln(x̃/x)\|. The usual relative error is \|x̃ − x\| / \|x\|. Under the usual measure, errors of products do not add, because (1 + a)(1 + b) − 1 = a + b + ab.

**Problem.** If x̃₁ has the sign of x₁ and x̃₂ has the sign of x₂, then rp(x̃₁x̃₂, x₁x₂) ≤ rp(x̃₁, x₁) + rp(x̃₂, x₂).

**How the definition helps.** With the logarithmic measure, the bound is the triangle inequality. The ratio for the product is the product of the ratios. The logarithm turns this product into a sum. The cited paper builds a mechanized error analysis on this measure. Its Theorem 4.1 bounds inner products with relative precision nu/(1 − u). The product rule above is our own statement. The work goes into converting the usual rounding model into bounds on rp.

**Paper or page:** [Mechanizing Olver's Error Arithmetic](https://arxiv.org/abs/2510.13414v1). It says: “s ∼ s̃ ; rp(nu/(1 − u)),”

**Sources:**

- [Mechanizing Olver's Error Arithmetic](https://arxiv.org/abs/2510.13414v1)

### Counting derivative factors, not trees, gives unique one-dimensional B-series

**Remember:** Count the derivative factors rather than the trees that produce them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 65L06 (Multistep, Runge-Kutta and extrapolation methods for ordinary differential equations), 65L05, 16T30. arXiv math.NA. Level 4: research.

**Definition.** A B-series expands a numerical step for an ordinary differential equation y′ = f(y) as a sum over rooted trees. Each tree contributes an elementary differential, which is a product of derivatives of f. A multi-index records only how many factors of each derivative order occur.

**Problem.** In one dimension, multi-indice B-series uniquely describe the Taylor expansions of local and affine equivariant maps. Affine equivariant means the method commutes with affine changes of variables. Substituting one such series into another gives a third, with coefficients from a product on multi-indices.

**How the definition helps.** In one dimension, an elementary differential depends only on how many tree nodes have each number of children (our own). So many trees give the same term, and tree coefficients are not unique (our own). Multi-indices label exactly the distinct terms, which makes a uniqueness statement possible (our own). The substitution law becomes a coproduct formula on these labels. Proving the characterization still needs separate arguments.

**Paper or page:** [Multi-indice B-series](https://arxiv.org/abs/2402.13971v3). It says: “The combinatorial shift away from rooted trees allows for a compressed description of numerical schemes.”

**Sources:**

- [Yvain Bruned, Kurusch Ebrahimi-Fard, Yingtong Hou, Multi-indice B-series, arXiv:2402.13971v3 (2024). Journal of the London Mathematical Society, 111, Issue 1, (2025), e70049](https://arxiv.org/abs/2402.13971v3)

### Tree cuts compose numerical steps

**Remember:** Cut a tree to see which step supplies each derivative.

*Makes the theorem clean to state or prove.* MSC 65L06 (Multistep, Runge-Kutta and extrapolation methods for ordinary differential equations). arXiv math.NA. Level 4: research.

**Definition.** A B-series writes a formal time step as a Taylor series indexed by rooted trees. Each branch records a derivative applied to the terms from its child branches. Use a unit coefficient for the unchanged starting value in each step.

**Problem.** The composition of two such steps is another B-series. Its coefficients come from cuts that split each tree into a connected part containing the root and the branches above it.

**How the definition helps.** Tree cuts record exactly which derivatives come from each step (our own explanation). Multiply the outer coefficient for the root part by the inner coefficients for the detached branches. Sum over cuts, including the case with an empty root part. The composition theorem proves that Taylor substitution supplies the required multiplicities.

**nLab:** [Butcher group](https://ncatlab.org/nlab/show/Butcher+group). It says: “The elements of the group are (generalised) numerical schemes which contain the Runge-Kutta schemes and the group product encodes composition of numerical schemes.”

**Paper or page:** [On the B-series composition theorem](https://arxiv.org/abs/2409.08533v1). It says: “is also a B-series”

**Sources:**

- [John C. Butcher, Taketomo Mitsui, Yuto Miyatake, Shun Sato, On the B-series composition theorem](https://arxiv.org/abs/2409.08533v1)
- [J. C. Butcher, An algebraic theory of integration methods (1972)](https://doi.org/10.1090/S0025-5718-1972-0305608-0)

### Boundary penalties constrain eigenvalues

**Remember:** The left boundary penalty turns both boundary contributions into nonnegative terms.

*True by definition.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 65L12. arXiv math.NA. Level 4: research.

**Definition.** Let D approximate differentiation on a grid, with symmetric positive definite weight matrix H. Suppose HD + DᵀH = qqᵀ − ppᵀ + S, where S is symmetric positive semidefinite. The vectors p and q evaluate a grid function at the left and right ends. Add H⁻¹ppᵀ to D to penalize the left boundary.

**Problem.** Every eigenvalue of the modified matrix has nonnegative real part. Equality holds precisely when its eigenvector w satisfies pᵀw = qᵀw = 0 and Sw = 0.

**How the definition helps.** The penalty changes the negative left boundary term into a positive square (our own argument). For an eigenpair (λ,w), twice Re(λ) times w\*Hw equals \|pᵀw\|² + \|qᵀw\|² + w\*Sw. Here w\* denotes conjugate transpose. All three terms are nonnegative, and the last vanishes exactly when Sw vanishes. The construction must supply D and H with the stated identity.

**Paper or page:** [On an eigenvalue property of Summation-By-Parts operators](https://arxiv.org/abs/2201.01193v1). It says: “Then Re(λ) ≥ 0 with equality if and only if p₀ᵀw = pₙᵀw = 0 and Sw = 0.”

**Sources:**

- [Viktor Linders, On an eigenvalue property of Summation-By-Parts operators](https://arxiv.org/abs/2201.01193v1)

### Discrete gradients make energy decrease exactly in dissipative schemes

**Remember:** Use the exact energy difference instead of a derivative approximation.

*True by definition. Confidence: medium.* MSC 65L20 (Stability and convergence of numerical methods for ordinary differential equations), 65M12. arXiv math.NA. Level 4: research.

**Definition.** A discrete gradient of an energy E is a map ∇̄E(x, y) with ∇̄E(x, y) · (y − x) = E(y) − E(x). It must equal ∇E(x) when y = x. A discrete gradient scheme takes steps yₙ₊₁ − yₙ = τ S ∇̄E(yₙ, yₙ₊₁), with step size τ &gt; 0 and a matrix S. The ordinary gradient at the midpoint lacks the exact identity unless E is quadratic.

**Problem.** If S is negative semidefinite and τ &gt; 0, every step of the discrete gradient scheme satisfies E(yₙ₊₁) ≤ E(yₙ).

**How the definition helps.** The defining identity turns the energy change into a quadratic form. E(yₙ₊₁) − E(yₙ) = ∇̄E · (yₙ₊₁ − yₙ) = τ ∇̄Eᵀ S ∇̄E ≤ 0. With an ordinary gradient, one would need a Taylor remainder bound and a small step. The cited paper's Theorem 2.2 proves this decrease for one rotational discrete gradient scheme for Oseen–Frank flows, with length preservation. The general argument above is our own. The work goes into building a consistent discrete gradient and solving the implicit step.

**Paper or page:** [A second-order length-preserving and unconditionally energy stable rotational discrete gradient method for Oseen-Frank gradient flows](https://arxiv.org/abs/2308.12884v1). It says: “is length-preserving and energy stable”

**Sources:**

- [A second-order length-preserving and unconditionally energy stable rotational discrete gradient method for Oseen-Frank gradient flows](https://arxiv.org/abs/2308.12884v1)

### Dual-pairing summation-by-parts operators make upwind schemes energy stable

**Remember:** The paired derivatives cancel, and their difference can only remove energy.

*True by definition. Confidence: medium.* MSC 65M06 (Finite difference methods for initial value and initial-boundary value problems involving PDEs), 65M12. arXiv math.NA. Level 4: research.

**Definition.** A dual-pairing summation-by-parts operator is a pair of difference matrices D₊ and D₋ with a positive diagonal weight matrix H. On a periodic grid, H D₊ + (H D₋)ᵀ = 0, which mimics integration by parts. The upwind, or dissipative, version also requires ⟨u, (D₊ − D₋)u⟩ ≤ 0 in the H inner product. The operators are defined by these identities, not by their stencil coefficients.

**Problem.** Discretize in space only a linear system with symmetric constant flux matrix A and weakly imposed periodic boundaries. Split the flux as (Au ± γu)/2, with γ the largest absolute eigenvalue of A (the global Lax–Friedrichs splitting). Then the H-weighted sum of squares of u does not increase in time.

**How the definition helps.** With the summation-by-parts identities, the energy method of the continuous problem carries over line by line. In the time derivative of the energy, the adjoint identity cancels the non-dissipative part of the flux term. What remains is a sum of γ⟨u, (D₊ − D₋)u⟩ terms, which are nonpositive by assumption. The work goes into building accurate operator pairs that satisfy the identities; the outline of the cancellation is our own.

**Paper or page:** [A dual-pairing summation-by-parts finite difference framework for nonlinear conservation laws](https://arxiv.org/abs/2411.06629v2). It says: “∂ₜ ‖u‖<sub>H</sub>² = ∑ᵢ γᵢ⟨uᵢ, (D₊ − D₋)uᵢ⟩<sub>H</sub> ≤ 0”

**Sources:**

- [A dual-pairing summation-by-parts finite difference framework for nonlinear conservation laws](https://arxiv.org/abs/2411.06629v2)

### Summation-by-parts derivatives make split-form schemes conserve totals

**Remember:** Move the derivative onto the constant vector and get zero.

*True by definition.* MSC 65M06 (Finite difference methods for initial value and initial-boundary value problems involving PDEs), 65M12. arXiv math.NA. Level 4: research.

**Definition.** Let D be a periodic difference matrix and H a positive diagonal weight matrix. The pair (D, H) is a summation-by-parts operator: ⟨u, Dv⟩ = −⟨Du, v⟩ in the H inner product, and D sends constant vectors to zero. Let f be the flux on the grid and F the discrete flux derivative in split form. The split form rewrites the derivative so that ⟨1, F⟩ = −⟨D1, f⟩.

**Problem.** In the paper's periodic split-form scheme, the H-weighted total of each solution component stays constant in time.

**How the definition helps.** With the summation-by-parts identity, conservation reduces to differentiating a constant. The time derivative of each total is ⟨1, F⟩, up to sign, and the identity moves the derivative onto the constant vector 1. Since D1 = 0, the result is zero. The work goes into building split forms and periodic operators that satisfy the identity.

**Paper or page:** [A dual-pairing summation-by-parts finite difference framework for nonlinear conservation laws](https://arxiv.org/abs/2411.06629v2). It says: “⟨1, Fᵢ(u, f(u), D)⟩<sub>H</sub> = −⟨D1, fᵢ⟩<sub>H</sub> = 0”

**Sources:**

- [A dual-pairing summation-by-parts finite difference framework for nonlinear conservation laws](https://arxiv.org/abs/2411.06629v2)

### Indexing resonance schemes by forests gives a simple test for time symmetry

**Remember:** Pair each forest coefficient with its time reverse.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 65M12 (Stability and convergence of numerical methods for initial value and initial-boundary value problems involving PDEs), 65M70, 35Q55. arXiv math.NA. Level 4: research.

**Definition.** Resonance-based integrators are time-stepping methods for nonlinear dispersive equations with rough data. They come from iterating Duhamel's formula, which writes the solution as the linear flow plus an integral of the nonlinear term. The paper writes each step as a sum over forests, which are collections of labelled trees. The labels record how the formula is iterated and which interpolation is used.

**Problem.** If the forest coefficients of a resonance-based scheme satisfy one reversal identity, the scheme is symmetric. That is, a step backward in time exactly undoes a step forward.

**How the definition helps.** With forest indices, symmetry becomes an identity between coefficients, so nobody needs to expand the whole scheme. In the identity, reversing time sends the labels a and χ to 1 − a and 1 − χ and changes the sign of the time step τ (our own reading). The condition is only sufficient. Building coefficients that satisfy it and keep high accuracy for rough data is separate work (our own).

**Paper or page:** [Symmetric resonance based integrators and forest formulae](https://arxiv.org/abs/2305.16737v3). It says: “The forest formulae allow for a simple characterisation of symmetric schemes”

**Sources:**

- [Yvonne Alama Bronsard, Yvain Bruned, Georg Maierhofer, Katharina Schratz, Symmetric resonance based integrators and forest formulae, arXiv:2305.16737v3 (2025)](https://arxiv.org/abs/2305.16737v3)

### Exactly divergence-free discrete velocities make velocity errors independent of pressure

**Remember:** Velocities with zero divergence cannot feel a pure gradient force.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 65N15, 35Q30. arXiv math.NA, math.AP. Level 4: research.

**Definition.** In a staggered discontinuous Galerkin method, choose the discrete spaces so that the discrete velocity has exactly zero divergence. Its normal components then match across element edges and vanish on the boundary (our own reading).

**Problem.** Consider the stationary Navier–Stokes equations on general polygonal meshes. Assume the solution is smooth and the divergence-free part of the force is small enough. Then the velocity error bound involves neither the pressure nor the Reynolds number.

**How the definition helps.** A gradient force ∇φ pairs to zero with any velocity v that is divergence-free with no normal flow at the boundary (our own). Integration by parts gives ∫∇φ·v = −∫φ div v = 0 (our own). So pressure errors and the gradient part of the force drop out of the velocity error equation (our own). Stability and control of the nonlinear convection term still need separate proofs. The paper introduces a new convective term for this.

**Paper or page:** [Pressure-robust staggered DG methods for the Navier-Stokes equations on general meshes](https://arxiv.org/abs/2107.09226v1). It says: “The exact divergence-free condition for the velocity is satisfied without any postprocessing. The resulting method is pressure-robust so that the pressure approximation does not influence the velocity approximation.”

**Sources:**

- [Dohyun Kim, Lina Zhao, Eric Chung, Eun-Jae Park, Pressure-robust staggered DG methods for the Navier-Stokes equations on general meshes, arXiv:2107.09226v1 (2021)](https://arxiv.org/abs/2107.09226v1)

### On a two-sided fracture mesh, every discrete boundary form is a trace

**Remember:** Give each side of a crack its own copy of the boundary.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 58A10, 65N50. arXiv math.NA. Level 4: research.

**Definition.** A fractured mesh cuts the adjacency between cells across chosen interior faces, which form the fracture. Each point on the fracture keeps its coordinates but gets one copy for each side. A trace restricts a discrete differential form in the volume to the boundary of this mesh.

**Problem.** For edge and face elements (degrees 1 and 2), every discrete form on the boundary of the fractured mesh is the trace of one in the volume. For nodal elements (degree 0), this holds exactly when the fracture has no point contacts.

**How the definition helps.** Two copies of each fracture point let a boundary form take different values on the two sides of the crack (our own). Traces of volume fields behave in the same way. The trace theorem is then a statement about this two-sided boundary. Roughly, a point contact is a vertex where fracture pieces touch only at that point (our own gloss). There, nodal values on the boundary need not extend to the volume. The proof still has to extend boundary degrees of freedom into the volume, using a local criterion.

**Paper or page:** [Fractured Meshes](https://arxiv.org/abs/2212.14222v1). It says: “Discrete d-differential forms on the virtually inflated mesh are characterized as the trace space of discrete d-differential forms in the surrounding volume.”

**Sources:**

- [Martin Averseng, Xavier Claeys, Ralf Hiptmair, Fractured Meshes, arXiv:2212.14222v1 (2022)](https://arxiv.org/abs/2212.14222v1)

### Polynomials solving a PDE to Taylor order are fixed by hyperplane data

**Remember:** Ask each local polynomial to satisfy the equation to Taylor order.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 35J15. arXiv math.NA. Level 4: research.

**Definition.** Fix a point in a mesh cell and a linear partial differential equation of order m with smooth coefficients. A quasi-Trefftz polynomial of degree p makes the equation’s residual vanish at that point to Taylor order p − m. That is, the residual and all its derivatives up to that order are zero there.

**Problem.** Assume the paper’s smoothness and non-degeneracy conditions. Prescribe the x₁-derivatives of orders 0 to m − 1 on the hyperplane through the point where x₁ is constant, as polynomials of suitable degree. Exactly one quasi-Trefftz polynomial has these data.

**How the definition helps.** Taylor conditions turn local solving into finitely many linear equations for polynomial coefficients (our own). Non-degeneracy lets these equations be solved for the higher x₁-derivatives one order at a time, as in the Cauchy–Kovalevskaya theorem (our own). This gives a simple algorithm to compute a basis. Stability and high-order convergence of the full method still need separate proofs.

**Paper or page:** [Polynomial quasi-Trefftz DG for PDEs with smooth coefficients: elliptic problems](https://arxiv.org/abs/2408.00392v2). It says: “Quasi-Trefftz methods overcome this limitation relying on elementwise "approximate solutions" of the PDE, in the sense of Taylor polynomials.”

**Sources:**

- [Lise-Marie Imbert-Gérard, Andrea Moiola, Chiara Perinati, Paul Stocker, Polynomial quasi-Trefftz DG for PDEs with smooth coefficients: elliptic problems, arXiv:2408.00392v2 (2024)](https://arxiv.org/abs/2408.00392v2)

### Pressure spaces containing all velocity divergences make discrete flows exactly divergence-free

**Remember:** Test the divergence against itself to show it vanishes.

*True by definition. Confidence: medium.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 76D07. arXiv math.NA. Level 4: research.

**Definition.** A mixed finite element method approximates velocity and pressure in separate spaces. Choose the pressure space Qₕ to contain the divergence of every discrete velocity in Vₕ. The velocities must also have continuous normal components across shared faces, so each has a square-integrable divergence. Without the containment, the discrete constraint ∫ q div v = 0 for all q in Qₕ leaves div v nonzero in general.

**Problem.** Assume div Vₕ ⊆ Qₕ. Let a discrete velocity v satisfy ∫ q div v = 0 for all q in Qₕ. Then div v = 0.

**How the definition helps.** With the containment, one test function settles the question. Take q = div v, so ∫ (div v)² = 0 and div v = 0. The paper's Lemma 2 states this result for its method on quadrilateral cells, with the containment on the reference cell. The work goes into building such spaces and mapping them to each cell so that the containment survives. The one-line test argument is our own.

**Paper or page:** [Design and analysis of an exactly divergence-free hybridized discontinuous Galerkin method for incompressible flows on meshes with quadrilateral cells](https://arxiv.org/abs/2306.05288v2). It says: “then discretely divergence-free functions are weakly divergence-free”

**Sources:**

- [Design and analysis of an exactly divergence-free hybridized discontinuous Galerkin method for incompressible flows on meshes with quadrilateral cells](https://arxiv.org/abs/2306.05288v2)

### Seeking solutions in the range of nodal clipping makes bounds automatic

**Remember:** Clip the node values before calling them the solution.

*True by definition.* MSC 65N30 (Finite element, Rayleigh-Ritz and Galerkin methods for boundary value problems involving PDEs), 65N15. arXiv math.NA. Level 4: research.

**Definition.** At each mesh node, replace a value outside the allowed interval by the nearer endpoint. This map is a nonlinear projection. The method seeks its finite element solution in the range of this projection, with a stabilizing term because the projection is not injective.

**Problem.** The numerical solution satisfies the known bounds at every node, by construction. For linear reaction-diffusion problems, it is also the best approximation in the energy norm among all nodally bound-preserving finite element functions.

**How the definition helps.** Every function in the projection’s range satisfies the nodal bounds, so that part needs no proof. Between nodes, the bounds can fail for elements of higher degree (our own). The real work is to show that the stabilized problem has a unique solution. Its clipped part then solves a variational inequality, as in a discrete obstacle problem. The paper uses this to prove the best-approximation result.

**Paper or page:** [A Nodally Bound-Preserving Finite Element Method](https://arxiv.org/abs/2304.01067v1). It says: “The discrete problem involves a nonlinear projection operator mapping arbitrary nodal values into bound-preserving ones and seeks the numerical solution in the range of this projection.”

**Sources:**

- [Gabriel Barrenechea, Emmanuil Georgoulis, Tristan Pryer, Andreas Veeser, A Nodally Bound-Preserving Finite Element Method, arXiv:2304.01067v1 (2023)](https://arxiv.org/abs/2304.01067v1)
- [Gabriel Barrenechea, Emmanuil Georgoulis, Tristan Pryer, Andreas Veeser, A nodally bound-preserving finite element method, IMA Journal of Numerical Analysis 44 (2024) 2198–2219](https://doi.org/10.1093/imanum/drad055)
