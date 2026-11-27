### Divided differences include equal parameters

**Remember:** Use the polynomial, and equal parameters need no separate case.

*Makes the theorem clean to state or prove.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the divided difference of the monomial tⁿ as the sum of all monomials in A and B of total degree n−1. For n = 0 set it to zero. The usual quotient (Aⁿ − Bⁿ)/(A − B) is defined only for distinct A and B.

**Problem.** Start at y(0) = 0 and set y(n+1) = A y(n) + Bⁿ for n ≥ 0. Then y(n) is the divided difference of tⁿ at A and B.

**How the definition helps.** The polynomial gives one formula even when A equals B. Our own derivation starts with the zero polynomial at n = 0. Multiplying by A and adding Bⁿ gives every monomial of degree n exactly once. For distinct inputs the geometric sum gives the quoted quotient. For equal inputs all n summands agree when n ≥ 1.

**Paper or page:** [Recurrence Relation where n+1th Term is A by nth term + B to the n](https://proofwiki.org/wiki/Recurrence_Relation_where_n+1th_Term_is_A_by_nth_term_+_B_to_the_n). It says: “(Aⁿ − Bⁿ)/(A − B) : A ≠ B   n Aⁿ⁻¹ : A = B”

**Sources:** none listed. No primary source with a working link was found.

### Generating series make recurrences rational

**Remember:** A lag is multiplication by z, apart from initial terms.

*True by definition.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a sequence over a field, define its ordinary generating function as the formal series with coefficient aₙ at degree n, starting at n=0. No convergence assumption is needed.

**Problem.** A sequence satisfies a constant-coefficient linear homogeneous recurrence from some index onward exactly when its ordinary generating function is rational.

**How the definition helps.** Encoding the sequence as coefficients turns a shift of indices into multiplication by a power of z. In our own proof, multiply the series by the polynomial whose coefficients specify the recurrence. All but finitely many coefficients vanish, so the product is a polynomial. Conversely, write a rational series with a denominator nonzero at zero. Comparing coefficients above the numerator’s degree gives the recurrence.

**nLab:** [generating function](https://ncatlab.org/nlab/show/generating+function). It says: “A generating function is an element of R⟦z⟧, the rig of formal power series over the rig R”

**Sources:** none listed. No primary source with a working link was found.

### Nonresonance makes polynomial forcing solvable

**Remember:** Nonresonance keeps the solution in the same polynomial space as the forcing.

*Rules out counterexamples.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let S shift a sequence forward one step, so (Sy)ₙ=yₙ₊₁. Write a real constant-coefficient linear recurrence as P(S)y=f for a polynomial P and forcing sequence f. Call a nonzero real number μ nonresonant if P(μ)≠0.

**Problem.** Let the forcing equal μ to the power n times a polynomial in n of degree at most s. If μ is nonresonant, the recurrence has exactly one particular solution of that same form and degree bound.

**How the definition helps.** Nonresonance makes every diagonal entry of the matrix for P(S) nonzero. In our own proof, use the basis formed by μⁿ times successive powers of n through degree s. Shifting n to n+1 preserves the leading polynomial coefficient, while shifting μⁿ contributes μ. Thus S is triangular with diagonal μ, and P(S) is triangular with diagonal P(μ). This proves invertibility in the stated space. At resonance, yₙ₊₁−yₙ=1 has no constant solution.

**Paper or page:** [Algebraic Modification of the Method of Undetermined Coefficients For Solving Nonhomogeneous Linear Difference Equations](https://arxiv.org/abs/2307.07182v1). It says: “and the system in question has a unique solution.”

**Sources:**

- [Algebraic Modification of the Method of Undetermined Coefficients For Solving Nonhomogeneous Linear Difference Equations](https://arxiv.org/abs/2307.07182v1)

### One basis handles repeated roots including zero

**Remember:** Each shifted difference drops the coefficient index by one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let n run over the nonnegative integers. For a real or complex number r, define uⱼ(n) as the coefficient of tʲ in (r+t)ⁿ. The usual solutions use powers of n times rⁿ, which miss solutions supported at early indices when r = 0.

**Problem.** Let S shift a sequence forward by one index, and let I be the identity. For each positive integer d, the sequences uⱼ with 0 ≤ j &lt; d form a basis for solutions of (S − rI)ᵈu = 0.

**How the definition helps.** Taking polynomial coefficients gives one basis even when the repeated root is zero. Our own construction uses the fact that shifting n multiplies the polynomial by r+t. Subtracting r times the original polynomial leaves multiplication by t. After d repetitions, every coefficient below degree d vanishes. The first d values of the proposed sequences form a triangular matrix with ones on its diagonal. They therefore realize all initial values, which determine a forward solution uniquely.

**Wikipedia:** [Linear recurrence with constant coefficients](https://en.wikipedia.org/wiki/Linear_recurrence_with_constant_coefficients). It says: “the terms in this formula corresponding to the second and later occurrences of the same root are multiplied by increasing powers of n.”

**Sources:** none listed. No primary source with a working link was found.

### Geometric products give q-exponential shifts

**Remember:** Scaling x by q removes exactly one factor.

*True by definition.* MSC 39A13 (Difference equations, scaling (\\(q\\)-differences)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Fix 0 &lt; q &lt; 1 and take \|(1 − q)x\| &lt; 1. Define E(x) as the product of the factors 1/(1 − (1 − q)xqᵏ) for integers k ≥ 0.

**Problem.** For nonzero x in the stated interval, the q-exponential is its own q-derivative. This derivative divides the value at x minus the value at qx by (1−q)x.

**How the definition helps.** Replacing x by qx drops exactly the first factor of the product. Thus E(qx) = (1 − (1 − q)x)E(x), which gives the stated difference quotient. Our own explanation compares this product with the usual definition by a power series. The factors converge to one with geometrically decreasing errors, giving a convergent product on the stated interval. Comparing coefficients in the shift equation recovers the usual series from E(0) = 1.

**Wikipedia:** [Q-exponential](https://en.wikipedia.org/wiki/Q-exponential). It says: “e<sub>q</sub>(x)=\\left(\\prod<sub>k=0</sub><sup>\\infty</sup>(1-q<sup>k</sup>(1-q)x)\\right)<sup>-1</sup>.”

**Sources:** none listed. No primary source with a working link was found.

### Geometric-grid sums invert Jackson differentiation

**Remember:** Match the integral weights to the gaps in the grid.

*True by definition.* MSC 39A13 (Difference equations, scaling (\\(q\\)-differences)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For 0 &lt; q &lt; 1 and x ≥ 0, sum f at x, qx, q²x, and later grid points. Give each value the weight equal to its grid spacing toward zero. This sum is the Jackson integral.

**Problem.** Let f be continuous on \[0,A\], where A &gt; 0. Its Jackson integral F satisfies (F(x) − F(qx))/((1 − q)x) = f(x) for 0 &lt; x ≤ A.

**How the definition helps.** The chosen weights make F(qx) the tail of F(x), so subtraction isolates the first term. Our own explanation compares this sum with an ordinary integral over the same interval. An ordinary integral averages across each grid gap, while the Jackson sum uses its upper endpoint. The grid spacings sum to x, so boundedness of f gives absolute convergence. The first term equals (1 − q)xf(x).

**Wikipedia:** [Jackson integral](https://en.wikipedia.org/wiki/Jackson_integral). It says: “then the Jackson integral converges to a function F(x) on \[0,A) which is a q-antiderivative of f(x).”

**Sources:** none listed. No primary source with a working link was found.

### Sequence updates give unique solutions

**Remember:** One update on whole sequences replaces infinitely many separate equations.

*Makes the theorem clean to state or prove.* MSC 39A22 (Growth, boundedness, comparison of solutions to difference equations), 39A05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For a recurrence yₙ=Fₙ(yₙ₋₁), define an update on whole sequences instead of one term at a time. The new entry at time n is Fₙ applied to the old entry at time n−1. Measure distance between bounded sequences by the supremum of the distances between corresponding entries.

**Problem.** Suppose each Fₙ acts on the same complete normed vector space and reduces distances by a common factor less than one. If the values Fₙ(0) are uniformly bounded, the recurrence has exactly one bounded solution on all integer times.

**How the definition helps.** Updating whole sequences turns bounded solutions into fixed points. In our own proof, the updated sequence has norm at most qM+B. Here M bounds the original sequence, q is the contraction factor and B bounds the norms of Fₙ(0). The update also reduces distances by the factor q. The contraction mapping theorem gives a unique fixed point because the bounded sequences form a complete space.

**Paper or page:** [Pullback and forward attractors of contractive difference equations](https://arxiv.org/abs/2205.06652v1). It says: “has a unique bounded entire solution”

**Sources:**

- [Pullback and forward attractors of contractive difference equations](https://arxiv.org/abs/2205.06652v1)

### Unique solutions inherit forcing periods

**Remember:** Shift the unique entire solution by one period and nothing changes.

*True by definition.* MSC 39A23 (Periodic solutions of difference equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** An entire solution is a sequence that satisfies the recurrence at every integer time. A forward solution instead starts at a specified time and is defined only after that.

**Problem.** If a recurrence repeats after p time steps and has a unique bounded entire solution, that solution is p-periodic.

**How the definition helps.** Using all integer times lets a shift by p preserve the time domain and the recurrence. In our own proof, the shifted sequence is bounded, so uniqueness identifies it with the original. Shifting a forward solution can change its prescribed starting value. The cited theorem proves uniqueness from contraction over a period.

**Paper or page:** [Pullback and forward attractors of contractive difference equations](https://arxiv.org/abs/2205.06652v1). It says: “is θ-periodic”

**Sources:**

- [Pullback and forward attractors of contractive difference equations](https://arxiv.org/abs/2205.06652v1)

### Green matrices turn boundary problems into fixed points

**Remember:** Solve each unit forcing once, then combine the answers.

*Makes the theorem clean to state or prove.* MSC 39A27 (Boundary value problems for difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For an invertible linear difference operator with fixed homogeneous boundary conditions, define the Green matrix as its inverse. Each column is the solution when the forcing is zero except for one unit entry.

**Problem.** Write the finite boundary problem as Ly=N(y), where L is the invertible linear difference operator and N is continuous. A solution exists if applying the Green matrix to N maps a closed ball of possible sequences into itself.

**How the definition helps.** The Green matrix turns the boundary equation into y=GN(y), a fixed-point equation. In our own formulation, G denotes the Green matrix. Brouwer’s fixed-point theorem applies because the ball is compact and convex and the map is continuous. The work lies in constructing G and bounding its action on the forcing. The cited theorem uses a bound on sums of absolute values of Green matrix entries.

**Paper or page:** [Green's Functions and Existence of Solutions of Nonlinear Fractional Implicit Difference Equations with Dirichlet Boundary Conditions](https://arxiv.org/abs/2212.08851v1). It says: “has a solution defined on”

**Sources:**

- [Green's Functions and Existence of Solutions of Nonlinear Fractional Implicit Difference Equations with Dirichlet Boundary Conditions](https://arxiv.org/abs/2212.08851v1)

### Companion states give one stability test

**Remember:** One shift of the state is one matrix multiplication.

*Makes the theorem clean to state or prove.* MSC 39A30 (Stability theory for difference equations), 39A06. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For a homogeneous constant-coefficient linear recurrence of order d, use d consecutive terms as its state. The companion matrix advances the state by dropping the oldest term and appending the one given by the recurrence. Its characteristic polynomial is the recurrence’s characteristic polynomial, so its eigenvalues are the characteristic roots.

**Problem.** Every solution of a homogeneous constant-coefficient recurrence tends to zero exactly when every characteristic root has modulus below one.

**How the definition helps.** The state definition turns decay for all initial data into decay of the powers of one matrix. In our own proof, put the matrix into Jordan form, which groups repeated eigenvalues into triangular blocks. Each nonzero eigenvalue contributes powers multiplied by polynomials in the time index. Blocks for zero vanish after finitely many steps. All blocks therefore decay when every root has modulus below one. An eigenvector for a root of modulus at least one gives a state that fails to decay.

**Wikipedia:** [Linear recurrence with constant coefficients](https://en.wikipedia.org/wiki/Linear_recurrence_with_constant_coefficients). It says: “Linear recurrences with constant coefficients can also be solved using matrix methods.”

**Sources:** none listed. No primary source with a working link was found.

### Angle doubling solves logistic iteration

**Remember:** Double the angle and take the square of its sine.

*True by definition.* MSC 39A33 (Chaotic behavior of solutions of difference equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** Represent the starting value x in \[0,1\] as sin² θ, with θ in \[0,π/2\]. Use the angle as the evolving variable instead of x.

**Problem.** After n applications of x ↦ 4x(1 − x), the value is sin²(2ⁿθ).

**How the definition helps.** Doubling an angle is easier to repeat than applying the quadratic update directly. Our own derivation uses sin²(2θ) = 4 sin²(θ)(1 − sin²(θ)). Choose the initial angle in \[0,π/2\], then double it freely at each step. Squaring its sine gives the required value even after the angle leaves the initial interval.

**Wikipedia:** [Logistic map](https://en.wikipedia.org/wiki/Logistic_map). It says: “xₙ = sin²(2ⁿ θ π),”

**Sources:** none listed. No primary source with a working link was found.

### Fixed-point coordinates make iterates geometric

**Remember:** Send the two fixed points to zero and infinity.

*True by definition.* MSC 39A45 (Difference equations in the complex domain). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let f(z) = (az + b)/(cz + d), with ad − bc ≠ 0, on the complex plane with infinity added. Suppose f fixes two distinct finite points α and β. Replace z by w = (z − α)/(z − β), taking w = ∞ at β.

**Problem.** In the new coordinate, each step of the fractional linear recurrence multiplies by a constant. Its nth iterate therefore multiplies by the nth power of that constant.

**How the definition helps.** The new coordinate changes the original fractional update into multiplication by a constant. The coordinate sends α to zero and β to infinity. In our own derivation, a fractional linear map fixing both zero and infinity has the form w ↦ kw. Iterating now raises k to a power.

**Wikipedia:** [Möbius transformation](https://en.wikipedia.org/wiki/M%C3%B6bius_transformation). It says: “(f(z) − γ₁)/(f(z) − γ₂) = k (z − γ₁)/(z − γ₂).”

**Sources:** none listed. No primary source with a working link was found.

### Falling powers make polynomial differences and sums simple

**Remember:** Differences of falling powers copy the power rule, so sums telescope.

*True by definition.* MSC 39A70 (Difference operators), 05A10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The falling factorial (x)ₘ is the product x(x − 1)⋯(x − m + 1) for a positive integer m, with (x)₀ = 1. The forward difference of a function f is Δf(x) = f(x + 1) − f(x). Instead of usual powers xᵐ, one can use falling factorials to write polynomials.

**Problem.** For m ≥ 1, Δ(x)ₘ = m(x)ₘ₋₁. The sum of (k)ₘ for k = 0, …, n − 1 is (n)ₘ₊₁/(m + 1) for integers m ≥ 0 and n ≥ 1.

**How the definition helps.** The falling-factorial definition gives the difference rule because the two products share all but one factor. Factoring out (x)ₘ₋₁ leaves the difference (x + 1) − (x − m + 1) = m (our own calculation). Adding consecutive differences cancels the intermediate terms and gives the sum, since (0)ₘ₊₁ = 0. The difference of an ordinary power instead gives several terms by the binomial theorem. For general polynomial sums, the work moves into rewriting the polynomial in falling factorials (our own comparison).

**Wikipedia:** [Falling and rising factorials](https://en.wikipedia.org/wiki/Falling_and_rising_factorials). It says: “In this formula, the falling factorial (x)ₙ in the calculus of finite differences plays the role of xⁿ in differential calculus.”

**Sources:** none listed. No primary source with a working link was found.

### Abel coordinates exist exactly without cycles

**Remember:** A clock that adds one each step cannot return to its start.

*Rules out counterexamples.* MSC 39B12 (Iteration theory, iterative and composite equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** An Abel coordinate for a map T is a real-valued function h with h(T(x))=h(x)+1. It need not be one-to-one. Call T free of periodic points if no point returns to itself after a positive number of steps.

**Problem.** Assuming the axiom of choice, a self-map of a set admits an Abel coordinate exactly when it has no periodic points.

**How the definition helps.** Each step adds one to the coordinate, so a periodic point would force a positive integer to equal zero. For the converse, our own construction groups points whose forward orbits meet and chooses one reference point per group. If x after m steps meets the reference point after n steps, set h(x)=n−m. Two meetings with different step differences would repeat a point on the shared orbit. Thus h is well defined, and advancing x once increases h by one.

**Wikipedia:** [Abel equation](https://en.wikipedia.org/wiki/Abel_equation). It says: “The Abel equation has at least one solution on E if and only if for all x ∈ E and all n ∈ ℕ∗, fⁿ(x) ≠ x,”

**Sources:**

- [R. Tambs Lyche, Sur l’équation fonctionnelle d’Abel (1924)](https://doi.org/10.4064/fm-5-1-331-333)

### Angles turn tangent addition into rotation

**Remember:** Tangent addition becomes a rotation of a uniform angle.

*Makes the theorem clean to state or prove.* MSC 39B22 (Functional equations for real functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Represent a real number x by the angle with tangent x, counting angles that differ by π as equal. Only π/2 has no finite tangent. Choose an angle uniformly from this circle.

**Problem.** Suppose a real function f satisfies f((x+y)/(1−xy))=f(x)+f(y) whenever xy≠1. Assume f is Borel measurable, so inverse images of open sets belong to the family generated from intervals by countable unions and complements. Then f vanishes everywhere.

**How the definition helps.** The angle coordinate turns the input operation into a rotation, which preserves uniform probability. In our own proof, fix y and rotate a uniform angle by the angle representing y. The exceptional angles have probability zero. The equation says this adds f(y) to the output without changing its probability distribution. A real probability distribution cannot equal a translate of itself by a nonzero amount. Hence f(y)=0.

**Paper or page:** [Non-existence of measurable solutions of certain functional equations via probabilistic approaches](https://arxiv.org/abs/2105.09804v1). It says: “is limited to the function f(x) = 0 for every x ∈ ℝ.”

**Sources:**

- [Non-existence of measurable solutions of certain functional equations via probabilistic approaches](https://arxiv.org/abs/2105.09804v1)

### Continuity makes additive functions linear

**Remember:** Additivity fixes the rational values and continuity fills the gaps.

*Rules out counterexamples.* MSC 39B22 (Functional equations for real functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Here a continuous additive function on the reals satisfies f(x+y)=f(x)+f(y) and is continuous at zero. An additive function without that extra requirement need only respect rational scaling.

**Problem.** Every additive real function continuous at zero has the form f(x)=cx.

**How the definition helps.** Continuity extends the formula fixed by additivity on the rationals to the whole real line. In our own proof, additivity gives f(q)=qf(1) for rational q and transports continuity at zero to every point. Approximate each real number by rationals. Without continuity, choose a basis of the reals over the rationals containing 1 and √2. Assign value zero to 1 and all other basis elements except √2, which receives value one. Extending by rational linearity gives our own counterexample.

**Wikipedia:** [Cauchy's functional equation](https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation). It says: “there are infinitely many other functions that satisfy the equation.”

**Sources:** none listed. No primary source with a working link was found.

### Raabe averages multiply scales

**Remember:** Two successive averages are one average over a larger grid.

*True by definition.* MSC 39B22 (Functional equations for real functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a positive integer a, let Aₐf(x) be the mean of f((x+k)/a) for integers k from 0 to a−1. For a nonnegative integer n, the Raabe equation says Aₐf(x)=a⁻ⁿf(x) for every real x.

**Problem.** If f satisfies the degree n Raabe equations at positive integer scales a and b, it also satisfies the equation at scale ab.

**How the definition helps.** Writing each grid sum as an operator reduces the calculation to composition of two averages. In our own proof, the work is to count indices in the double sum. Each integer from 0 to ab−1 occurs exactly once as i+aj, with 0≤i&lt;a and 0≤j&lt;b. The composition therefore averages at scale ab, and the two scale factors multiply.

**Paper or page:** [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1). It says: “then it is a solution of Equation $({\\mathbb E}<sub>n , a b</sub>)$.”

**Sources:**

- [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1)

### Subadditivity forces a limiting growth rate

**Remember:** Repeat any fixed block to bound the eventual cost per step.

*Rules out counterexamples.* MSC 39B62 (Functional inequalities, including subadditivity, convexity, etc.). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real sequence is subadditive if aₘ₊ₙ≤aₘ+aₙ for all positive m and n. Unlike a bound on each term separately, this rule bounds the cost of joining two blocks.

**Problem.** For a real subadditive sequence, aₙ/n tends to the infimum of those ratios. This limit may be −∞.

**How the definition helps.** Subadditivity bounds a long block by copies of any fixed block and one short remainder. In our own proof, fix the block length m and divide this bound by the total length n. The remainder contributes at most a constant divided by n. The upper limit is therefore at most aₘ/m for every m. The infimum of the ratios already bounds each ratio below. Without subadditivity, taking aₙ=n for odd n and zero otherwise gives our own counterexample.

**Wikipedia:** [Fekete's lemma](https://en.wikipedia.org/wiki/Fekete%27s_lemma). It says: “converges to its infimum. Note that this infimum may be −∞.”

**Sources:**

- [M. Fekete, Über die Verteilung der Wurzeln bei gewissen algebraischen Gleichungen mit ganzzahligen Koeffizienten (1923)](https://doi.org/10.1007/BF01504345)

### Divided measures solve recurrences

**Remember:** An index shift multiplies the moment integrand by its variable.

*True by definition.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 3: graduate.

**Definition.** Let μ be a finite positive measure on a compact subset of the real line. Its nth moment is aₙ = ∫ tⁿ dμ(t). Choose a polynomial P strictly positive on that set, and define bₙ = ∫ tⁿ/P(t) dμ(t).

**Problem.** Write P(t) = c₀ + c₁t + ⋯ + cₘtᵐ with cₘ ≠ 0. Then c₀bₙ + c₁bₙ₊₁ + ⋯ + cₘbₙ₊ₘ = aₙ for every n ≥ 0. The first m integrals defining bₙ supply the initial values.

**How the definition helps.** Defining all terms by integrals makes an index shift multiply the integrand by t. Our own explanation replaces recursive solution by a single cancellation. The weighted sum multiplies the integrand by P(t), leaving the moment aₙ. The work lies in finding a representing measure and checking that division preserves finiteness.

**Paper or page:** [Moment sequences and difference equations](https://arxiv.org/abs/2204.04706v5). It says: “∑ⱼ₌₀ᵐ cⱼbₙ₊ⱼ = aₙ”

**Sources:**

- [Moment sequences and difference equations](https://arxiv.org/abs/2204.04706v5)

### Factorial weights simplify binomial convolution

**Remember:** Divide coefficients by factorials to multiply binomial convolutions.

*Makes the theorem clean to state or prove.* MSC 39A06 (Linear difference equations). arXiv math.CO. Level 3: graduate.

**Definition.** For a sequence a, its exponential generating series has coefficient aₙ/n! at degree n. Its binomial convolution with b sums aₖbₙ₋ₖ times the binomial coefficient “n choose k” over 0 ≤ k ≤ n.

**Problem.** Take two complex sequences that satisfy constant-coefficient linear recurrences from some index onward. Their binomial convolution also satisfies such a recurrence from some index onward.

**How the definition helps.** Factorial weights turn binomial convolution into ordinary multiplication of series. Our own proof uses the characterization of sequences satisfying an eventual linear recurrence with constant coefficients. Their exponential generating series are exactly the finite sums of polynomials times exponentials. Partial fractions of the ordinary generating series give this characterization. Products preserve this class, so the convolution satisfies another such recurrence.

**Paper or page:** [Binomial convolutions for rational power series](https://arxiv.org/abs/2304.10426v2). It says: “If {aₙ} and {bₙ} have rational generating functions then so does their binomial convolution.”

**Sources:**

- [Ira M. Gessel and Ishan Kar, Binomial convolutions for rational power series](https://arxiv.org/abs/2304.10426v2)

### Falling factorial series simplify index multiplication

**Remember:** Each falling factorial is an eigenvector whose eigenvalue equals its degree.

*True by definition.* MSC 39A06 (Linear difference equations), 39A70. arXiv math.CA. Level 3: graduate.

**Definition.** Let Bₙ(z) be the product of n consecutive descending factors starting at z, with B₀(z)=1. Encode a sequence by a formal series in t whose coefficient at degree n is aₙBₙ(z). Define θg(z)=z(g(z)−g(z−1)), acting separately on each coefficient.

**Problem.** For any polynomial p, multiplying the nth sequence term by p(n) acts on the discrete generating series as p(θ). Here p(θ) uses repeated applications of θ in place of powers of the variable.

**How the definition helps.** The falling factorial basis makes θ act as multiplication by the index. In our own calculation, subtracting the two products and multiplying by z gives θBₙ=nBₙ. Ordinary powers of z would mix several degrees under this operation. Applying the identity repeatedly proves the result for every polynomial in θ.

**Paper or page:** [Discrete Generating Series and Linear Difference Equations](https://arxiv.org/abs/2504.21722v1). It says: “For the discrete generating series, the following relation holds:”

**Sources:**

- [Discrete Generating Series and Linear Difference Equations](https://arxiv.org/abs/2504.21722v1)

### Nonresonance prevents infinitely many zeros

**Remember:** Without roots that repeat powers together, cancellations cannot persist along a progression.

*Rules out counterexamples.* MSC 39A06 (Linear difference equations). arXiv math.NT. Level 3: graduate.

**Definition.** For a linear recurrence sequence over a field of characteristic zero, let S shift the sequence forward by one place. Its minimal recurrence polynomial is the monic polynomial P of least degree for which P(S) sends the sequence to zero. Require all roots of P to be nonzero. Call the recurrence nondegenerate if no ratio of distinct roots has a positive integer power equal to one.

**Problem.** A nonzero sequence indexed by the nonnegative integers and satisfying such a nondegenerate linear recurrence has only finitely many zeros.

**How the definition helps.** Nondegeneracy keeps distinct roots distinct after raising them to any common positive integer power. Our own argument writes the sequence as a sum of terms p(n)λⁿ, one for each root λ, over a field containing the roots. On a progression of step d, the new exponential bases are the distinct numbers λᵈ. Independence of polynomial multiples of distinct exponentials prevents the restricted sequence from vanishing identically. The Skolem–Mahler–Lech theorem supplies the difficult implication that infinitely many zeros would contain an infinite arithmetic progression. Our own example 1−(−1)ⁿ vanishes at every even index.

**Wikipedia:** [Skolem–Mahler–Lech theorem](https://en.wikipedia.org/wiki/Skolem%E2%80%93Mahler%E2%80%93Lech_theorem). It says: “is equal to the union of finitely many arithmetic progressions and a finite set.”

**Sources:**

- [Christer Lech, A note on recurring series (1953)](https://doi.org/10.1007/bf02590997)

### Reversible weights make spectra nonnegative

**Remember:** Balanced weights turn differences into squares.

*True by definition.* MSC 39A14 (Partial difference equations), 33C50. arXiv math.CA. Level 3: graduate.

**Definition.** On a finite lattice, let a difference operator sum r(x,y)(f(x)−f(y)) over neighbors y with nonnegative rates r(x,y). In place of an unweighted sum of products, define the inner product by weighting each point x by w(x)&gt;0. Choose weights with w(x)r(x,y)=w(y)r(y,x).

**Problem.** The difference operator is self-adjoint for the inner product weighted by w. Every eigenvalue is real and nonnegative.

**How the definition helps.** Balanced weights give the same coefficient to both directions of each edge. In our own proof, combine these two terms in the weighted inner product of f with the operator applied to g. Each edge contributes w(x)r(x,y)(f(x)−f(y))(g(x)−g(y)) for real functions. This expression is symmetric in f and g, so the operator is self-adjoint. Taking g=f gives a sum of nonnegative squares, which forces nonnegative eigenvalues. The work lies in finding balancing weights. The quoted Hahn theorem also describes symmetric matrices obtained after changing coordinates.

**Paper or page:** [Multivariate Hahn polynomials and difference equations](https://arxiv.org/abs/2305.09170v3). It says: “are real symmetric positive semi-definite matrices and the eigenvalues are real and non-negative.”

**Sources:**

- [Multivariate Hahn polynomials and difference equations](https://arxiv.org/abs/2305.09170v3)

### Residuals correct approximate trajectories

**Remember:** Solve for the residual, then subtract the correction.

*True by definition.* MSC 39A30 (Stability theory for difference equations), 39A06. arXiv math.DS. Level 3: graduate.

**Definition.** For matrices Aₙ and vectors xₙ at integer times, define the residual by wₙ=xₙ₊₁−Aₙxₙ. Call the recurrence admissible for bounded errors if one constant L works for every bounded sequence w. Each such w must admit a correction z satisfying zₙ₊₁−Aₙzₙ=wₙ and supₙ\|zₙ\|≤L supₙ\|wₙ\|.

**Problem.** Bounded-error admissibility for a linear recurrence on integer times implies Hyers–Ulam stability. This means a sequence with small uniform residual stays uniformly close to some exact solution.

**How the definition helps.** Admissibility supplies a correction with exactly the residual of the proposed trajectory. In our own argument, subtracting this correction gives an exact trajectory within the stated bound. This replaces a search for a nearby trajectory with the quoted solvability estimate.

**Paper or page:** [Hyers-Ulam stability for finite-dimensional nonautonomous dynamics](https://arxiv.org/abs/2401.04516v1). It says: “supₙ∈ℤ \|zₙ\| ≤ L supₙ∈ℤ \|wₙ\|.”

**Sources:**

- [Hyers-Ulam stability for finite-dimensional nonautonomous dynamics](https://arxiv.org/abs/2401.04516v1)

### Unit circle roots prevent shadowing

**Remember:** Correct shrinking errors from the past and growing errors from the future.

*Rules out counterexamples.* MSC 39A30 (Stability theory for difference equations). arXiv math.DS. Level 3: graduate.

**Definition.** A square complex matrix A is hyperbolic if every eigenvalue has modulus different from one. An exact orbit satisfies xₙ₊₁ = Axₙ for every n ≥ 0.

**Problem.** The recurrence has forward shadowing exactly when A is hyperbolic. For every ε &gt; 0, some δ &gt; 0 must work for every sequence with errors ‖yₙ₊₁ − Ayₙ‖ ≤ δ. Some exact orbit must then stay within ε of that sequence at every step.

**How the definition helps.** Hyperbolicity splits the space into directions that shrink under forward or backward iteration. In our own proof, we sum past errors on the forward-shrinking part and future errors on the backward-shrinking part. Both sums have a uniform bound proportional to δ. For an eigenvalue λ of modulus one, a left eigenvector gives a scalar coordinate evolving by multiplication by λ. Small errors aligned with successive powers of λ accumulate linearly in that coordinate. No exact orbit can shadow that drift.

**Paper or page:** [Shadowing and hyperbolicity for linear delay difference equations](https://arxiv.org/abs/2401.10767v2). It says: “has no root on the unit circle \|λ\| = 1”

**Sources:**

- [Shadowing and hyperbolicity for linear delay difference equations](https://arxiv.org/abs/2401.10767v2)

### Nested compositions absorb one more step

**Remember:** Moving time forward puts one more map on the outside.

*True by definition.* MSC 39A45 (Difference equations in the complex domain), 39B12. arXiv math.CA. Level 3: graduate.

**Definition.** Let Tₛ(z)=u(s)f(z), where f is continuous on the complex plane. Fix a starting value z. Apply the maps from time s−n through time s−1 to z in chronological order. Define F(s) as the limit of these values as n tends to infinity.

**Problem.** Suppose these limits exist at s and s+1 for the same starting value. Then F(s+1)=u(s)f(F(s)).

**How the definition helps.** Letting the starting time recede makes one forward step add a single outer map. In our own argument, the composition of length n+1 ending at time s applies Tₛ to the previous composition of length n. Continuity allows Tₛ to pass through the limit. This replaces the choice of an initial time with the task of proving convergence.

**Paper or page:** [Infinite Compositions and Complex Dynamics; Generalizing Schröder and Abel Functions](https://arxiv.org/abs/2108.13519v1). It says: “F(s+1) = u(s)f(F(s))”

**Sources:**

- [Infinite Compositions and Complex Dynamics; Generalizing Schröder and Abel Functions](https://arxiv.org/abs/2108.13519v1)

### Laplace transforms turn differences into factors

**Remember:** Each forward difference adds one factor of exp(−ht) minus one.

*True by definition.* MSC 39A70 (Difference operators), 44A10. arXiv math.CA. Level 3: graduate.

**Definition.** Represent f(z) as the integral of exp(−zt)g(t) over t≥0. The forward difference with step h sends f(z) to f(z+h)−f(z).

**Problem.** Suppose the integral converges absolutely at z and h&gt;0. Applying the forward difference n times multiplies the integrand by (exp(−ht)−1)ⁿ for every positive integer n.

**How the definition helps.** The integral representation replaces an expanding sum of shifted values by one factor per difference. In our own calculation, shifting z by h multiplies the integrand by exp(−ht). Subtraction supplies the factor exp(−ht)−1. Absolute convergence justifies subtraction at every step because h is positive. The remaining work is to establish the integral representation.

**Paper or page:** [On the convergence of Newton series and the asymptotics of finite differences](https://arxiv.org/abs/2404.04288v3). It says: “Suppose f has an inverse Laplace transform.”

**Sources:**

- [On the convergence of Newton series and the asymptotics of finite differences](https://arxiv.org/abs/2404.04288v3)

### Böttcher coordinates turn iteration into powers

**Remember:** In Böttcher coordinates, each step raises the previous value to the same power.

*True by definition.* MSC 39B12 (Iteration theory, iterative and composite equations). arXiv math.DS. Level 3: graduate.

**Definition.** Let h be a nonconstant analytic map near a fixed point a, with h′(a) = 0. Let d be the order of the first nonzero term of h(z) − a at a. A Böttcher coordinate is a locally invertible analytic map φ with φ(a) = 0 and φ(h(z)) = φ(z)ᵈ.

**Problem.** In this coordinate, applying h successively n times raises the starting value to the power dⁿ.

**How the definition helps.** The coordinate turns composition of h into repeated exponentiation with the same exponent. Our own calculation multiplies the exponents, avoiding repeated composition of the original power series. Böttcher’s theorem supplies the difficult step by proving that an analytic coordinate exists.

**Wikipedia:** [Böttcher's equation](https://en.wikipedia.org/wiki/B%C3%B6ttcher%27s_equation). It says: “conjugates h(z) in a neighbourhood of the fixed point to the function zⁿ.”

**Sources:**

- [Pierre Fatou, Sur les équations fonctionnelles (1919)](https://doi.org/10.24033/bsmf.998)

### Normalized iterates solve Schröder’s equation

**Remember:** Composing with f advances the iterate count and leaves one λ.

*True by definition.* MSC 39B12 (Iteration theory, iterative and composite equations), 39B32. arXiv math.DS, math.CA. Level 3: graduate.

**Definition.** Let f be holomorphic, meaning complex differentiable near zero, with f(0)=0 and derivative λ satisfying 0&lt;\|λ\|&lt;1. Define the Koenigs function h near zero as the limit of the nth iterate of f divided by λⁿ.

**Problem.** Near zero, the Koenigs function satisfies h(f(z))=λh(z). It has h′(0)=1, so it gives a locally invertible change of coordinates.

**How the definition helps.** Defining h by normalized iterates turns composition with f into a shift of the index. In our own calculation, shifting leaves one factor of λ, so h(f(z))=λh(z). This gives the coordinate change directly, in place of solving Schröder’s equation for its coefficients. The work is to prove uniform convergence on compact sets near zero. The derivative of every normalized iterate at zero is one, and this convergence preserves derivatives there.

**Wikipedia:** [Koenigs function](https://en.wikipedia.org/wiki/Koenigs_function). It says: “the uniform limit on compacta of the normalized iterates”

**Sources:**

- [Gabriel Koenigs, Recherches sur les intégrales de certaines équations fonctionnelles (1884)](https://doi.org/10.24033/asens.247)

### One orbit interval builds square roots

**Remember:** One step adds one, so a square root adds one half.

*True by definition.* MSC 39B12 (Iteration theory, iterative and composite equations). arXiv math.DS. Level 3: graduate.

**Definition.** Let F map \[a,b\] continuously and strictly increasingly into itself, with F(x) &gt; x for a ≤ x &lt; b. Choose a continuous increasing bijection h from \[a,F(a)\] onto \[0,1\]. Extend h by h(Fⁿ(x)) = h(x)+n, where Fⁿ means n successive applications.

**Problem.** Choose any c strictly between a and F(a). Some continuous strictly increasing map g from \[a,b\] into itself satisfies g(a) = c and g∘g = F.

**How the definition helps.** In the extended coordinate, one application of F adds one, so adding one half gives a square root. Our own construction chooses h(c) = 1/2. The successive endpoints Fⁿ(a) increase to b because their limit must be a fixed point. Adjacent intervals agree on the coordinate of their shared endpoint, giving a continuous increasing bijection from \[a,b) onto \[0,∞). Pulling translation by one half back through h defines g below b. Setting g(b) = b gives continuity there because h tends to infinity at b.

**Paper or page:** [A sufficient condition for existence of iterative roots of PM functions without the characteristic endpoints condition](https://arxiv.org/abs/2109.12747v1). It says: “has a continuous and strictly increasing iterative root φ of order 2”

**Sources:**

- [A sufficient condition for existence of iterative roots of PM functions without the characteristic endpoints condition](https://arxiv.org/abs/2109.12747v1)

### Diagonal values simplify mixed differences

**Remember:** After p differences, each increment must occupy one slot.

*True by definition.* MSC 39B22 (Functional equations for real functions), 39A70. arXiv math.CA. Level 3: graduate.

**Definition.** Fix a positive integer p. Take a real function F of p real variables that is additive in each variable and unchanged by permutations. Define its diagonal function by f(x)=F(x,…,x). A difference with increment h sends f(x) to f(x+h)−f(x).

**Problem.** Take p successive differences with arbitrary increments. For the diagonal function this gives p factorial times F applied to the p increments. All higher differences vanish.

**How the definition helps.** The diagonal definition turns repeated differences into a count of occupied slots. In our own proof, expand by additivity. Each difference cancels terms missing its increment, so only the p! permutations survive after p differences. Symmetry gives the same value for each permutation. One further difference kills the constant result. Starting from difference identities instead requires a reconstruction theorem to recover the symmetric additive function.

**Paper or page:** [Hyers--Ulam stability of derivations and linear functions](https://arxiv.org/abs/1307.0638v1). It says: “and let f: ℝ → ℝ be the diagonalization of F.”

**Sources:**

- [Hyers--Ulam stability of derivations and linear functions](https://arxiv.org/abs/1307.0638v1)

### Fourier coefficients untangle Raabe equations

**Remember:** The average keeps only frequencies divisible by the scale.

*Makes the theorem clean to state or prove.* MSC 39B22 (Functional equations for real functions), 42A16. arXiv math.CA. Level 3: graduate.

**Definition.** The Fourier coefficient at k measures the contribution of the wave with integer frequency k. For each nonzero k, multiply the coefficient by the absolute value of k to the power n. In the Raabe equation, the average of f((x+j)/a) over j=0,…,a−1 equals a to the power −n times f(x).

**Problem.** Let f be continuous and 1-periodic with mean zero. Take a positive integer n and an integer scale a≥2. The Raabe equation holds exactly when the rescaled coefficients at k and ak agree for every nonzero k.

**How the definition helps.** Rescaling turns the functional equation into equalities between pairs of coefficients. In our own proof, integrating over a adjacent subintervals gives the average’s coefficient at k as the original coefficient at ak. The rescaling cancels the factor a⁻ⁿ. Uniqueness of Fourier coefficients proves the converse for continuous functions.

**Paper or page:** [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1). It says: “uₐₖ = uₖ, vₐₖ = vₖ (∀ k ∈ ℕ).”

**Sources:**

- [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1)

### Twisted Mahler residues decide whether a rational function is a twisted difference

**Remember:** Group poles by pth powers before checking for cancellation.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 39A13 (Difference equations, scaling (\\(q\\)-differences)), 12H10. arXiv math.NT, math.CA. Level 4: research.

**Definition.** Fix integers p &gt; 1 and λ. Write a rational function f in partial fractions. Group its poles into classes whose members are related by repeated pth powers or pth roots. The λ-twisted Mahler discrete residues are built from the partial-fraction coefficients along these classes.

**Problem.** Let f be a rational function over the paper’s base field 𝕂. The question is whether f(x) equals p to the power λ times g(xᵖ), minus g(x), for some rational function g. Theorem 1.1 says this holds exactly when every λ-twisted Mahler discrete residue of f is zero.

**How the definition helps.** The residues turn an equation with an unknown rational function g into a finite list of tests on f. In our own explanation, the substitution x ↦ xᵖ moves poles only within a class, so g can cancel f only class by class. In our own account, one direction is direct, and the harder direction builds g when all residues vanish. The case λ = 0 is the untwisted Mahler summability problem from the authors’ earlier work.

**Paper or page:** [Twisted Mahler discrete residues](https://arxiv.org/abs/2308.16765v1). It says: “For λ ∈ ℤ, f(x) ∈ 𝕂(x) is λ-Mahler summable if and only if every λ-Mahler discrete residue of f is zero.”

**Sources:**

- [Carlos E. Arreche, Yi Zhang, Twisted Mahler discrete residues, arXiv:2308.16765v1 (2023). International Mathematics Research Notices IMRN 2024(23), 14259-14288, (2024)](https://arxiv.org/abs/2308.16765v1)

### Mahler discrete residues decide Mahler summability

**Remember:** All Mahler residues vanish exactly when f has the form g(xᵖ) − g(x).

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 39A20 (Multiplicative and other generalized difference equations), 39A45. arXiv math.NT, math.CA. Level 4: research.

**Definition.** Fix an integer p &gt; 1. A rational function f(x) is Mahler summable if f(x) = g(xᵖ) − g(x) for some rational function g. Mahler discrete residues are vectors computed from f, one for each group of poles of f and each order k. Our own note: poles α and β share a group when α raised to pʳ equals β raised to pˢ for some r and s.

**Problem.** Decide whether a given rational function is Mahler summable. The paper shows that f is Mahler summable exactly when all its Mahler discrete residues are zero. Proposition 4.18 states this one component at a time.

**How the definition helps.** Our own reason: the residues turn a search for an unknown g into a check that some vectors are zero. Our own analogy: a rational function is the derivative of a rational function exactly when all its ordinary residues are zero. The abstract says that the paper extends known discrete residues to the Mahler case. Our own note: Chen and Singer introduced such residues for the shift case. What stays hard is to find the right grouping of poles, so that the residues are complete (our own).

**Paper or page:** [Mahler discrete residues and summability for rational functions](https://arxiv.org/abs/2202.09805). It says: “We construct Mahler discrete residues for rational functions and show that they comprise a complete obstruction to the Mahler summability problem”

**Sources:**

- [Carlos E. Arreche, Yi Zhang, Mahler discrete residues and summability for rational functions, Proceedings of ISSAC 2022, pp. 525-533, arXiv:2202.09805](https://arxiv.org/abs/2202.09805)
- [Shaoshi Chen, Michael F. Singer, Residues and telescopers for bivariate rational functions, Advances in Applied Mathematics (2012)](https://doi.org/10.1016/j.aam.2012.04.003)

### A radiation condition makes lattice wave problems uniquely solvable

**Remember:** Keep the outgoing wave and rule out waves coming in from infinity.

*Rules out counterexamples.* MSC 39A27 (Boundary value problems for difference equations), 39A14. arXiv math.AP. Level 4: research.

**Definition.** The discrete Helmholtz equation is Δu + k²u = 0, where Δ is the difference Laplacian of the triangular lattice. A radiating solution also satisfies a radiation condition at infinity. This condition is a lattice form of the Sommerfeld condition and allows only outgoing waves far from the sources.

**Problem.** Fix a wave number k with 0 &lt; k &lt; 2√2. Prescribe data on finitely many finite rows or columns of lattice sites. The exterior problem then has exactly one radiating solution.

**How the definition helps.** The radiation condition removes the solutions that the equation and the finite data cannot tell apart. Our own example is a finite sum of lattice plane waves chosen to vanish at the finitely many data sites. It solves the problem with zero data, but it does not decay, so the condition excludes it. The paper proves uniqueness first and then builds the solution from difference potentials.

**Paper or page:** [Propagation of Waves from Finite Sources Arranged in Line Segments within an Infinite Triangular Lattice](https://arxiv.org/abs/2405.18806v3). It says: “Consistent with a continuum theory, we employ the notion of radiating solution and establish a unique solvability result and Green's representation formula using difference potentials.”

**Sources:**

- [David Kapanadze, Zurab Vashakidze, Propagation of Waves from Finite Sources Arranged in Line Segments within an Infinite Triangular Lattice, arXiv:2405.18806 (2024)](https://arxiv.org/abs/2405.18806v3)

### Halving removes Kac–Bernstein parity terms

**Remember:** If every element has a half, there is only one parity class.

*Rules out counterexamples.* MSC 39B52 (Functional equations for functions with more general domains and/or ranges). arXiv math.CA. Level 4: research.

**Definition.** Call an abelian group 2-divisible if every element is twice another element. The Kac–Bernstein equation asks that f(x+y)g(x−y) equal f(x)f(y)g(x)g(−y). In the positive version, both functions take only positive values.

**Problem.** Suppose two positive functions on a 2-divisible abelian group satisfy the Kac–Bernstein equation. Their logarithms have one shared quadratic part, separate additive parts and separate constants. A quadratic part Q satisfies Q(x+y)+Q(x−y)=2Q(x)+2Q(y).

**How the definition helps.** When every group element is a double, a function constant on each translate of the doubles must be constant everywhere. The cited classification gives precisely such an extra term in each logarithm. An additive part preserves sums. In our own counterexample on the integers, set f=1 on even numbers, f=e on odd numbers and g=1/f. The arguments x+y and x−y have the same parity, so both sides of the equation equal one. On the integers a quadratic plus an additive function has the form an²+bn. Adding a constant cannot make that expression both bounded and nonconstant.

**Paper or page:** [Solution of the Kac--Bernstein functional equation on Abelian groups in the class of positive functions](https://arxiv.org/abs/2102.01592v1). It says: “the function r(x) is a constant on each of the cosets of the subgroup X⁽²⁾ in X.”

**Sources:**

- [Solution of the Kac--Bernstein functional equation on Abelian groups in the class of positive functions](https://arxiv.org/abs/2102.01592v1)

### Negative scaling erases entropy errors

**Remember:** Add a large positive input and every scaled error tends to zero.

*Makes the theorem clean to state or prove.* MSC 39B82 (Stability, separation, extension, and related topics for functional equations). arXiv math.CA. Level 4: research.

**Definition.** Fix α &lt; 0 and a real function f on (0,1). For u,v &gt; 0 define F(u,v) = (u+v)ᵅ f(v/(u+v)). Write Δ(v) for the forward difference in the first variable, so Δ(v)F(u,w) = F(u+v,w) − F(u,w).

**Problem.** For x,y &gt; 0 with x+y &lt; 1, put T(x,y) = f(x) + (1−x)ᵅ f(y/(1−x)). If \|T(x,y)−T(y,x)\| has a uniform finite bound ε, then T(x,y) = T(y,x) everywhere on this domain.

**How the definition helps.** The new variables express the error through commuting differences and give it a bound that decays at large scales. Our own proof sets E(u,v,w) = Δ(v)F(u,w) − Δ(w)F(u,v). Substituting x = w/(u+v+w) and y = v/(u+v+w) gives \|E(u,v,w)\| ≤ ε(u+v+w)ᵅ. Commuting the differences gives Δ(s)E(u,v,w) = Δ(v)E(u,s,w) − Δ(w)E(u,s,v). As s grows, the right side tends to zero, while the left side tends to −E(u,v,w). Thus E vanishes, and taking u = 1−x−y, v = y and w = x proves the claim.

**Paper or page:** [Hyperstability of a functional equation](https://arxiv.org/abs/1307.0631v1). It says: “Then, and only then, there exist c,d ∈ ℝ such that f(x) = cxᵅ + d(1−x)ᵅ − d”

**Sources:**

- [Hyperstability of a functional equation](https://arxiv.org/abs/1307.0631v1)
