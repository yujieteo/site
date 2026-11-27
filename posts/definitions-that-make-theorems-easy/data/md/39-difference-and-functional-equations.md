### A product integrating factor turns a first-order recurrence into a sum

**Remember:** Divide by the accumulated product to make the differences telescope.

*True by definition.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For y(n+1) = a(n)y(n)+b(n), suppose each a(n) is nonzero. Let P(n) be the product of the first n multipliers, starting with a(0), and set P(0) = 1. The integrating factor is 1/P(n).

**Problem.** The solution satisfies y(n)/P(n) = y(0) plus the sum of b(k)/P(k+1) over 0 ≤ k &lt; n.

**How the definition helps.** Dividing by the accumulated product turns repeated substitution into addition. In our own proof, P(n+1) = a(n)P(n), so y(n+1)/P(n+1)−y(n)/P(n) equals b(n)/P(n+1). Adding these identities cancels every intermediate value.

**Wikipedia:** [Recurrence relation](https://en.wikipedia.org/wiki/Recurrence_relation). It says: “the sum becomes an integral, and the product becomes the exponential function of an integral”

**Sources:**

- [Saber Elaydi, An Introduction to Difference Equations, 3rd ed., chapters 1–3](https://link.springer.com/book/10.1007/0-387-27602-5)

### A reduced denominator gives the shortest eventual recurrence

**Remember:** Cancel first to find the actual recurrence order.

*True by definition.* MSC 39A06 (Linear difference equations), 05A15. arXiv math.CO, math.CA. Level 2: later undergraduate.

**Definition.** For a sequence over a field with rational generating function, its reduced denominator is Q in P/Q after cancellation, normalized by Q(0) = 1. Its eventual recurrence order is the smallest lag bound in a homogeneous constant-coefficient recurrence valid from some index onward.

**Problem.** The eventual recurrence order equals the degree of the reduced denominator Q. Degree zero means the sequence is eventually zero.

**How the definition helps.** Cancellation leaves only the factors every recurrence must contain. In our own proof, a polynomial D with D(0) = 1 gives such a recurrence exactly when D times the series is a polynomial. Comparing coefficients gives this equivalence. Since P and Q share no factor, the condition holds exactly when Q divides D.

**Wikipedia:** [Linear recurrence with constant coefficients](https://en.wikipedia.org/wiki/Linear_recurrence_with_constant_coefficients). It says: “can be expressed as a rational function”

**Sources:** none listed. No primary source with a working link was found.

### Binomial basis shifts solve resonant exponential forcing

**Remember:** Raise the binomial index by the multiplicity of the root.

*True by definition.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For complex sequences, let S shift forward one place and let μ be a nonzero root of multiplicity r of a complex polynomial P. Set bⱼ(n) = μⁿ binom(n,j) for integers n,j ≥ 0, with binom(n,j) = 0 for j &gt; n.

**Problem.** Let q be a polynomial of degree at most d. Then P(S)y = μⁿq(n) has exactly one solution in the span of the basis elements with indices r through r+d.

**How the definition helps.** Pascal’s identity makes S−μ lower the binomial index by one and multiply by μ, with b₀ sent to zero. In our own proof, applying this r times maps the proposed span bijectively onto the span with indices 0 through d. Write P(z) = (z−μ)ʳQ(z). On the smaller span Q(S) is triangular with nonzero diagonal Q(μ), hence invertible.

**Paper or page:** [Algebraic Modification of the Method of Undetermined Coefficients For Solving Nonhomogeneous Linear Difference Equations](https://arxiv.org/abs/2307.07182v1). It says: “and is of multiplicity m, then the particular solution”

**Sources:**

- [Timofey Lomonosov, Algebraic Modification of the Method of Undetermined Coefficients For Solving Nonhomogeneous Linear Difference Equations](https://arxiv.org/abs/2307.07182v1)

### Coprime characteristic factors split recurrence solutions into separate parts

**Remember:** Split the polynomial into coprime factors to split its solutions.

*True by definition.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For sequences over a field, define the forward shift by (Sy)(n) = y(n+1). A polynomial P in this shift represents the constant-coefficient recurrence P(S)y = 0.

**Problem.** Suppose P = QR, where the polynomials Q and R share no nonconstant factor. Every solution of P(S)y = 0 splits uniquely into solutions killed by Q(S) and R(S), respectively.

**How the definition helps.** The shift turns a recurrence written term by term into an operator to which polynomial identities apply. In our own proof, the Euclidean algorithm gives UQ+VR = 1. Substituting S splits y into V(S)R(S)y and U(S)Q(S)y, killed respectively by Q(S) and R(S). The same identity sends any common solution to zero, proving uniqueness.

**Wikipedia:** [Linear recurrence with constant coefficients](https://en.wikipedia.org/wiki/Linear_recurrence_with_constant_coefficients). It says: “the coefficients determine the characteristic polynomial”

**Sources:** none listed. No primary source with a working link was found.

### Divided differences include equal parameters

**Remember:** Use the polynomial, and equal parameters need no separate case.

*Makes the theorem clean to state or prove.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define the divided difference of the monomial tⁿ as the sum of all monomials in A and B of total degree n−1. For n = 0 set it to zero. The usual quotient (Aⁿ − Bⁿ)/(A − B) is defined only for distinct A and B.

**Problem.** Start at y(0) = 0 and set y(n+1) = A y(n) + Bⁿ for n ≥ 0. Then y(n) is the divided difference of tⁿ at A and B.

**How the definition helps.** The polynomial formula applies to all A and B (our own). It starts at zero, and multiplying by A and adding Bⁿ produces every degree-n monomial exactly once. Thus it obeys the specified recurrence and initial value.

**Paper or page:** [Recurrence Relation where n+1th Term is A by nth term + B to the n](https://proofwiki.org/wiki/Recurrence_Relation_where_n+1th_Term_is_A_by_nth_term_+_B_to_the_n). It says: “(Aⁿ − Bⁿ)/(A − B) : A ≠ B   n Aⁿ⁻¹ : A = B”

**Sources:** none listed. No primary source with a working link was found.

### Generating series make recurrences rational

**Remember:** A lag is multiplication by z, apart from initial terms.

*True by definition.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a sequence over a field, define its ordinary generating function as the formal series with coefficient aₙ at degree n, starting at n=0. No convergence assumption is needed.

**Problem.** A sequence satisfies a constant-coefficient linear homogeneous recurrence from some index onward exactly when its ordinary generating function is rational.

**How the definition helps.** A lag of k places corresponds to multiplication by zᵏ (our own). Multiplying by the recurrence polynomial cancels every sufficiently high coefficient, leaving a polynomial. Conversely, write a rational series as P/Q with Q(0) = 1. Coefficient comparison in Q times the series gives a homogeneous recurrence above the degree of P.

**nLab:** [generating function](https://ncatlab.org/nlab/show/generating+function). It says: “A generating function is an element of R⟦z⟧, the rig of formal power series over the rig R”

**Sources:** none listed. No primary source with a working link was found.

### Invertible steps make one Casoratian test enough

**Remember:** An invertible step cannot erase independence.

*Rules out counterexamples.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Call a second-order recurrence y(n+2) = a(n)y(n+1)+b(n)y(n) nondegenerate if every b(n) is nonzero. The Casoratian of two solutions is the determinant of their two columns of values at n and n+1.

**Problem.** Two solutions of a nondegenerate recurrence are linearly independent exactly when their Casoratian is nonzero at some index. In that case it is nonzero at every index.

**How the definition helps.** Each step multiplies the Casoratian by −b(n), so a nonzero determinant stays nonzero in both directions. In our own proof, two starting values determine a solution, making independence at the starting index the usual determinant test. For y(n+2) = 0, even independent starting columns both become zero after two steps.

**Paper or page:** [On Positivity and Minimality for Second-Order Holonomic Sequences](https://arxiv.org/abs/2007.12282v1). It says: “uₙvₙ₋₁ − uₙ₋₁vₙ = (u₀v₋₁ − u₋₁v₀)∏ₖ₌₁ⁿ (−aₖ)”

**Sources:**

- [Saber Elaydi, An Introduction to Difference Equations, 3rd ed., chapters 1–3](https://link.springer.com/book/10.1007/0-387-27602-5)

### Nonresonance makes polynomial forcing solvable

**Remember:** Nonresonance keeps the solution in the same polynomial space as the forcing.

*Rules out counterexamples.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let S shift a sequence forward one step, so (Sy)ₙ=yₙ₊₁. Write a real constant-coefficient linear recurrence as P(S)y=f for a polynomial P and forcing sequence f. Call a nonzero real number μ nonresonant if P(μ)≠0.

**Problem.** Let the forcing equal μ to the power n times a polynomial in n of degree at most s. If μ is nonresonant, the recurrence has exactly one particular solution of that same form and degree bound.

**How the definition helps.** On the basis μⁿ, nμⁿ, …, nˢμⁿ, the shift is triangular with diagonal μ (our own). Hence P(S) is triangular with nonzero diagonal P(μ), so it is invertible on this space. At resonance the equation yₙ₊₁ − yₙ = 1 has no constant solution.

**Paper or page:** [Algebraic Modification of the Method of Undetermined Coefficients For Solving Nonhomogeneous Linear Difference Equations](https://arxiv.org/abs/2307.07182v1). It says: “and the system in question has a unique solution.”

**Sources:**

- [Algebraic Modification of the Method of Undetermined Coefficients For Solving Nonhomogeneous Linear Difference Equations](https://arxiv.org/abs/2307.07182v1)

### One basis handles repeated roots including zero

**Remember:** Each shifted difference drops the coefficient index by one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let n run over the nonnegative integers. For a real or complex number r, define uⱼ(n) as the coefficient of tʲ in (r+t)ⁿ. The usual solutions use powers of n times rⁿ, which miss solutions supported at early indices when r = 0.

**Problem.** Let S shift a sequence forward by one index, and let I be the identity. For each positive integer d, the sequences uⱼ with 0 ≤ j &lt; d form a basis for solutions of (S − rI)ᵈu = 0.

**How the definition helps.** The coefficient rule works even for r = 0 (our own). Shifting multiplies (r+t)ⁿ by r+t, so S − rI sends uⱼ to uⱼ₋₁ with u₋₁ = 0. Applying it d times kills every uⱼ with j &lt; d. Their first d values form a triangular matrix with unit diagonal, and those initial values determine each solution.

**Wikipedia:** [Linear recurrence with constant coefficients](https://en.wikipedia.org/wiki/Linear_recurrence_with_constant_coefficients). It says: “the terms in this formula corresponding to the second and later occurrences of the same root are multiplied by increasing powers of n.”

**Sources:** none listed. No primary source with a working link was found.

### Transition matrices turn variable forcing into a sum of propagated inputs

**Remember:** Move each input forward from the step when it arrives.

*True by definition.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For matrices A(n), define the transition matrix T(n,k) as A(n−1)⋯A(k) when n &gt; k, and the identity when n = k. It carries a state at step k to step n when there is no forcing.

**Problem.** The solution of x(n+1) = A(n)x(n)+b(n) equals T(n,0)x(0) plus the sum of T(n,k+1)b(k) over 0 ≤ k &lt; n. No step matrix needs an inverse.

**How the definition helps.** The ordered product records all later steps acting on one input, replacing repeated expansion of the recurrence. In our own proof, multiplying by A(n) advances every older contribution by one step. The new input enters with the identity matrix, which completes the induction.

**Wikipedia:** [Recurrence relation](https://en.wikipedia.org/wiki/Recurrence_relation). It says: “with state vector x and transition matrix A”

**Sources:**

- [Saber Elaydi, An Introduction to Difference Equations, 3rd ed., chapters 1–3](https://link.springer.com/book/10.1007/0-387-27602-5)

### Step partial sums turn weighted sums into one integral

**Remember:** The weight changes on each step while the partial sum stays fixed.

*True by definition.* MSC 39A12 (Discrete version of topics in analysis). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For integers m &lt; n and values b(m+1), …, b(n), define the step function B(t) by adding b(k) over m &lt; k ≤ t. Its jump at k equals b(k).

**Problem.** For continuously differentiable v on \[m,n\], the sum of b(k)v(k) over m &lt; k ≤ n equals B(n)v(n)−∫ₘⁿ B(t)v′(t) dt.

**How the definition helps.** Extending partial sums as constant steps turns the integral on each interval into one difference of weights. In our own proof, the interval from k to k+1 contributes B(k)(v(k+1)−v(k)). Collecting the coefficients of v(k) gives the jumps of B and the final endpoint term.

**Paper or page:** [On certain harmonic zeta functions](https://arxiv.org/abs/2403.07123v1). It says: “If {b₁,b₂,b₃,…} is a sequence of complex numbers and v(x) is a function with a continuous derivative for x &gt; α”

**Sources:** none listed. No primary source with a working link was found.

### Geometric products give q-exponential shifts

**Remember:** Scaling x by q removes exactly one factor.

*True by definition.* MSC 39A13 (Difference equations, scaling (\\(q\\)-differences)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Fix 0 &lt; q &lt; 1 and take \|(1 − q)x\| &lt; 1. Define E(x) as the product of the factors 1/(1 − (1 − q)xqᵏ) for integers k ≥ 0.

**Problem.** For nonzero x in the stated interval, the q-exponential is its own q-derivative. This derivative divides the value at x minus the value at qx by (1−q)x.

**How the definition helps.** Replacing x by qx drops exactly the first factor of the product. Thus E(qx) = (1 − (1 − q)x)E(x), which gives the stated difference quotient. In our own explanation, comparing coefficients in this shift equation, with E(0) = 1, recovers the usual power series.

**Wikipedia:** [Q-exponential](https://en.wikipedia.org/wiki/Q-exponential). It says: “e<sub>q</sub>(x)=\\left(\\prod<sub>k=0</sub><sup>\\infty</sup>(1-q<sup>k</sup>(1-q)x)\\right)<sup>-1</sup>.”

**Sources:** none listed. No primary source with a working link was found.

### Geometric-grid sums invert Jackson differentiation

**Remember:** Match the integral weights to the gaps in the grid.

*True by definition.* MSC 39A13 (Difference equations, scaling (\\(q\\)-differences)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For 0 &lt; q &lt; 1 and x &gt; 0, the Jackson integral from zero to x is ∑ₖ≥₀ (1−q)xqᵏ f(xqᵏ) whenever the series converges. At x = 0 its value is zero.

**Problem.** Let f be continuous on \[0,A\], where A &gt; 0. Its Jackson integral F satisfies (F(x) − F(qx))/((1 − q)x) = f(x) for 0 &lt; x ≤ A.

**How the definition helps.** The chosen weights make F(qx) the tail of F(x), so subtraction leaves only the first term, (1 − q)xf(x). In our own explanation, the grid spacings sum to x, so boundedness of f gives absolute convergence. An ordinary integral averages across each grid gap, while the Jackson sum uses its upper endpoint.

**Wikipedia:** [Jackson integral](https://en.wikipedia.org/wiki/Jackson_integral). It says: “then the Jackson integral converges to a function F(x) on \[0,A) which is a q-antiderivative of f(x).”

**Sources:** none listed. No primary source with a working link was found.

### Sequence updates give unique solutions

**Remember:** One update on whole sequences replaces infinitely many separate equations.

*Makes the theorem clean to state or prove.* MSC 39A22 (Growth, boundedness, comparison of solutions to difference equations), 39A05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For a recurrence yₙ=Fₙ(yₙ₋₁), define an update on whole sequences instead of one term at a time. The new entry at time n is Fₙ applied to the old entry at time n−1. Measure distance between bounded sequences by the supremum of the distances between corresponding entries.

**Problem.** Suppose each Fₙ acts on the same complete normed vector space and reduces distances by a common factor less than one. If the values Fₙ(0) are uniformly bounded, the recurrence has exactly one bounded solution on all integer times.

**How the definition helps.** A bounded entire solution is exactly a fixed point of the sequence update (our own). If the old sequence is bounded by M and all ‖Fₙ(0)‖ by B, the new sequence is bounded by qM+B. The update contracts supremum distance by q, so the contraction mapping theorem on the complete space of bounded sequences gives exactly one fixed point.

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

**How the definition helps.** Applying G = L⁻¹ turns the boundary equation into y = GN(y) (our own). The closed ball in the finite-dimensional sequence space is compact and convex. Brouwer’s theorem gives a fixed point because GN is continuous and maps the ball into itself.

**Paper or page:** [Green's Functions and Existence of Solutions of Nonlinear Fractional Implicit Difference Equations with Dirichlet Boundary Conditions](https://arxiv.org/abs/2212.08851v1). It says: “has a solution defined on”

**Sources:**

- [Green's Functions and Existence of Solutions of Nonlinear Fractional Implicit Difference Equations with Dirichlet Boundary Conditions](https://arxiv.org/abs/2212.08851v1)

### Companion states give one stability test

**Remember:** One shift of the state is one matrix multiplication.

*Makes the theorem clean to state or prove.* MSC 39A30 (Stability theory for difference equations), 39A06. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For a homogeneous constant-coefficient linear recurrence of order d, use d consecutive terms as its state. The companion matrix advances the state by dropping the oldest term and appending the one given by the recurrence. Its characteristic polynomial is the recurrence’s characteristic polynomial, so its eigenvalues are the characteristic roots.

**Problem.** Every solution of a homogeneous constant-coefficient recurrence tends to zero exactly when every characteristic root has modulus below one.

**How the definition helps.** The state definition turns decay for all initial data into decay of the powers of one matrix. In our own proof, Jordan form shows that each nonzero eigenvalue contributes its powers times polynomials in the time index. Blocks for the eigenvalue zero vanish after finitely many steps. An eigenvector for a root of modulus at least one gives a state that does not decay.

**Wikipedia:** [Linear recurrence with constant coefficients](https://en.wikipedia.org/wiki/Linear_recurrence_with_constant_coefficients). It says: “Linear recurrences with constant coefficients can also be solved using matrix methods.”

**Sources:** none listed. No primary source with a working link was found.

### Angle doubling solves logistic iteration

**Remember:** Double the angle and take the square of its sine.

*True by definition.* MSC 39A33 (Chaotic behavior of solutions of difference equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** Define h(t) = sin² t for every real angle t. For a starting value x in \[0,1\], its initial angle is the unique θ in \[0,π/2\] satisfying h(θ) = x.

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

**Definition.** The falling factorial (x)ₘ is the product x(x − 1)⋯(x − m + 1) for a positive integer m, with (x)₀ = 1. The forward difference of a function f is Δf(x) = f(x + 1) − f(x).

**Problem.** For m ≥ 1, Δ(x)ₘ = m(x)ₘ₋₁. The sum of (k)ₘ for k = 0, …, n − 1 is (n)ₘ₊₁/(m + 1) for integers m ≥ 0 and n ≥ 1.

**How the definition helps.** The falling-factorial definition gives the difference rule because the two products share all but one factor. Factoring out (x)ₘ₋₁ leaves (x + 1) − (x − m + 1) = m (our own calculation). Adding consecutive differences cancels the intermediate terms and gives the sum, since (0)ₘ₊₁ = 0. For an ordinary power, the binomial theorem gives several terms instead.

**Wikipedia:** [Falling and rising factorials](https://en.wikipedia.org/wiki/Falling_and_rising_factorials). It says: “In this formula, the falling factorial (x)ₙ in the calculus of finite differences plays the role of xⁿ in differential calculus.”

**Sources:** none listed. No primary source with a working link was found.

### Abel coordinates exist exactly without cycles

**Remember:** A clock that adds one each step cannot return to its start.

*Rules out counterexamples.* MSC 39B12 (Iteration theory, iterative and composite equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** An Abel coordinate for a map T is a real-valued function h with h(T(x))=h(x)+1. It need not be one-to-one. Call T free of periodic points if no point returns to itself after a positive number of steps.

**Problem.** Assuming the axiom of choice, a self-map of a set admits an Abel coordinate exactly when it has no periodic points.

**How the definition helps.** A periodic orbit cannot carry a coordinate that increases by one at every step. Conversely, choose a reference point r in each class of points whose forward orbits meet (our own). Whenever Tᵐx = Tⁿr, put h(x) = n−m. Two different offsets would force a repetition on the reference orbit, so h is well defined and advancing one step increases it by one.

**Wikipedia:** [Abel equation](https://en.wikipedia.org/wiki/Abel_equation). It says: “The Abel equation has at least one solution on E if and only if for all x ∈ E and all n ∈ ℕ∗, fⁿ(x) ≠ x,”

**Sources:**

- [R. Tambs Lyche, Sur l’équation fonctionnelle d’Abel (1924)](https://doi.org/10.4064/fm-5-1-331-333)

### Angles turn tangent addition into rotation

**Remember:** Tangent addition becomes a rotation of a uniform angle.

*Makes the theorem clean to state or prove.* MSC 39B22 (Functional equations for real functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Represent a real number x by the angle with tangent x, counting angles that differ by π as equal. Only π/2 has no finite tangent. Choose an angle uniformly from this circle.

**Problem.** If a Borel measurable real function f satisfies f((x+y)/(1−xy)) = f(x) + f(y) whenever xy ≠ 1, then f is zero everywhere.

**How the definition helps.** The angle coordinate turns the input operation into a rotation, which preserves uniform probability. In our own proof, fix y and rotate a uniform angle by the angle of y, ignoring exceptional angles of probability zero. The equation says that this adds f(y) to the output without changing its distribution. A real probability distribution cannot equal a translate of itself by a nonzero amount, so f(y) = 0.

**Paper or page:** [Non-existence of measurable solutions of certain functional equations via probabilistic approaches](https://arxiv.org/abs/2105.09804v1). It says: “is limited to the function f(x) = 0 for every x ∈ ℝ.”

**Sources:**

- [Non-existence of measurable solutions of certain functional equations via probabilistic approaches](https://arxiv.org/abs/2105.09804v1)

### Continuity makes additive functions linear

**Remember:** Additivity fixes the rational values and continuity fills the gaps.

*Rules out counterexamples.* MSC 39B22 (Functional equations for real functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function f from ℝ to ℝ is additive if f(x+y) = f(x)+f(y) for all real x and y. Continuity at zero requires f(x) → f(0) as x → 0.

**Problem.** Every additive real function continuous at zero has the form f(x)=cx.

**How the definition helps.** Continuity extends the formula fixed by additivity on the rationals to the whole real line. In our own proof, additivity gives f(q) = qf(1) for rational q and carries continuity at zero to every point. Without continuity, take a basis of the reals over the rationals that contains 1 and √2. The rationally linear map that sends √2 to one and the other basis elements to zero is our own counterexample.

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

**How the definition helps.** Subadditivity bounds a long block by copies of any fixed block and one short remainder. In our own proof, dividing this bound by the length n shows that the upper limit of aₙ/n is at most aₘ/m for every m. The infimum already bounds each ratio below. Without subadditivity, aₙ = n for odd n and 0 otherwise is our own counterexample.

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

**How the definition helps.** Factorial weights turn binomial convolution into multiplication of exponential generating series (our own). Partial fractions of the ordinary generating series characterize eventual recurrence. It holds exactly when the exponential generating series is a finite sum of polynomials times exponentials. Products preserve that class, giving the required recurrence.

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

**Definition.** Let P be the minimal recurrence polynomial of a linear recurrence sequence over a field of characteristic zero. Nondegeneracy here requires all roots to be nonzero and no ratio of distinct roots to be a root of unity.

**Problem.** A nonzero sequence indexed by the nonnegative integers and satisfying such a nondegenerate linear recurrence has only finitely many zeros.

**How the definition helps.** Distinct roots remain distinct after any common positive power (our own). On a progression of step d the exponential-polynomial terms therefore have distinct bases λᵈ and cannot cancel identically, by their linear independence. Skolem–Mahler–Lech says infinitely many zeros would contain an infinite arithmetic progression. Without nondegeneracy, 1 − (−1)ⁿ vanishes at every even index (our own).

**Wikipedia:** [Skolem–Mahler–Lech theorem](https://en.wikipedia.org/wiki/Skolem%E2%80%93Mahler%E2%80%93Lech_theorem). It says: “is equal to the union of finitely many arithmetic progressions and a finite set.”

**Sources:**

- [Christer Lech, A note on recurring series (1953)](https://doi.org/10.1007/bf02590997)

### Reversible weights make spectra nonnegative

**Remember:** Balanced weights turn differences into squares.

*True by definition.* MSC 39A14 (Partial difference equations), 33C50. arXiv math.CA. Level 3: graduate.

**Definition.** For real functions on a finite lattice, set Lf(x) = ∑ᵧ r(x,y)(f(x)−f(y)) with nonnegative neighbor rates, zero elsewhere. Positive weights are reversible if w(x)r(x,y) = w(y)r(y,x) for every pair. Use the inner product ⟨f,g⟩ = ∑ₓ w(x)f(x)g(x).

**Problem.** The difference operator is self-adjoint for the inner product weighted by w. Every eigenvalue is real and nonnegative.

**How the definition helps.** Reversibility pairs the two directions of each edge (our own). Consequently ⟨f,Lg⟩ sums w(x)r(x,y)(f(x)−f(y))(g(x)−g(y)) over unordered edges, counting each once. Symmetry gives self-adjointness, and setting g = f gives a sum of nonnegative squares.

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

**Remember:** Hyperbolicity keeps every eigenvalue off the unit circle.

*Rules out counterexamples.* MSC 39A30 (Stability theory for difference equations). arXiv math.DS. Level 3: graduate.

**Definition.** A square complex matrix A is hyperbolic if every eigenvalue has modulus different from one. An exact orbit satisfies xₙ₊₁ = Axₙ for every n ≥ 0.

**Problem.** The recurrence has forward shadowing exactly when A is hyperbolic. For every ε &gt; 0, some δ &gt; 0 must work for every sequence with errors ‖yₙ₊₁ − Ayₙ‖ ≤ δ. Some exact orbit must then stay within ε of that sequence at every step.

**How the definition helps.** Hyperbolicity splits the space into directions that shrink under forward or backward iteration. In our own proof, sum past errors on the forward-shrinking part and future errors on the backward-shrinking part, each bounded by a multiple of δ. For an eigenvalue λ of modulus one, a left eigenvector gives a coordinate that is multiplied by λ at each step. Small errors aligned with the powers of λ then accumulate linearly, and no exact orbit can shadow that drift.

**Paper or page:** [Shadowing and hyperbolicity for linear delay difference equations](https://arxiv.org/abs/2401.10767v2). It says: “has no root on the unit circle \|λ\| = 1”

**Sources:**

- [Shadowing and hyperbolicity for linear delay difference equations](https://arxiv.org/abs/2401.10767v2)

### Nested compositions absorb one more step

**Remember:** Moving time forward puts one more map on the outside.

*True by definition.* MSC 39A45 (Difference equations in the complex domain), 39B12. arXiv math.CA. Level 3: graduate.

**Definition.** For continuous f on ℂ and a given scalar function u, put Tₛ(z) = u(s)f(z). For fixed z, define F(s) as the limit of Tₛ₋₁ ∘ ⋯ ∘ Tₛ₋ₙ(z) as n → ∞ whenever it exists.

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

**How the definition helps.** In our own calculation, shifting z to z+h multiplies the integrand by exp(−ht). Subtracting the original integrand gives the factor exp(−ht)−1 each time. Since h&gt;0 and t≥0, every shifted integral still converges absolutely.

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

**How the definition helps.** In our own calculation, composing the normalized iterate with f advances the index and leaves a factor of λ. Passing to the limit gives h(f(z))=λh(z). Koenigs’s theorem gives locally uniform convergence near zero, so the derivatives converge there too. Each normalized iterate has derivative one at zero, so h′(0)=1 and the inverse function theorem applies.

**Wikipedia:** [Koenigs function](https://en.wikipedia.org/wiki/Koenigs_function). It says: “the uniform limit on compacta of the normalized iterates”

**Sources:**

- [Gabriel Koenigs, Recherches sur les intégrales de certaines équations fonctionnelles (1884)](https://doi.org/10.24033/asens.247)

### One orbit interval builds square roots

**Remember:** One step adds one, so a square root adds one half.

*True by definition.* MSC 39B12 (Iteration theory, iterative and composite equations). arXiv math.DS. Level 3: graduate.

**Definition.** Let F be a continuous strictly increasing self-map of \[a,b\] with F(x)&gt;x for a≤x&lt;b. Choose a continuous increasing bijection h from \[a,F(a)\] onto \[0,1\]. For each integer n≥0 and each x∈\[a,F(a)\], set h(Fⁿ(x))=h(x)+n.

**Problem.** For every c strictly between a and F(a), some continuous strictly increasing self-map g of \[a,b\] satisfies g(a)=c and g∘g=F.

**How the definition helps.** In the extended coordinate, one application of F adds one, so adding one half gives a square root. Our own construction chooses h(c) = 1/2. The endpoints Fⁿ(a) increase to b, so h becomes a continuous increasing bijection from \[a, b) onto \[0, ∞). Pulling translation by one half back through h defines g below b, and setting g(b) = b keeps g continuous.

**Paper or page:** [A sufficient condition for existence of iterative roots of PM functions without the characteristic endpoints condition](https://arxiv.org/abs/2109.12747v1). It says: “has a continuous and strictly increasing iterative root φ of order 2”

**Sources:**

- [A sufficient condition for existence of iterative roots of PM functions without the characteristic endpoints condition](https://arxiv.org/abs/2109.12747v1)

### Diagonal values simplify mixed differences

**Remember:** After p differences, each increment must occupy one slot.

*True by definition.* MSC 39B22 (Functional equations for real functions), 39A70. arXiv math.CA. Level 3: graduate.

**Definition.** For an integer p≥1, let F be a symmetric real function on ℝᵖ, additive in each variable. Its diagonal is f(x)=F(x,…,x), and its forward difference with increment h is Δₕf(x)=f(x+h)−f(x).

**Problem.** For any p real increments, taking their successive differences of f gives p! times F evaluated at those increments. All higher differences vanish.

**How the definition helps.** The diagonal definition turns repeated differences into a count of occupied slots. In our own proof, expand by additivity, and note that each difference cancels the terms that miss its increment. After p differences, only the p! ways to put the increments into the slots survive, and symmetry gives each the same value. One further difference kills this constant.

**Paper or page:** [Hyers--Ulam stability of derivations and linear functions](https://arxiv.org/abs/1307.0638v1). It says: “and let f: ℝ → ℝ be the diagonalization of F.”

**Sources:**

- [Hyers--Ulam stability of derivations and linear functions](https://arxiv.org/abs/1307.0638v1)

### Fourier coefficients untangle Raabe equations

**Remember:** Weight each Fourier coefficient by its absolute frequency to the nth power.

*Makes the theorem clean to state or prove.* MSC 39B22 (Functional equations for real functions), 42A16. arXiv math.CA. Level 3: graduate.

**Definition.** For each integer k, the Fourier coefficient cₖ of f is ∫₀¹ f(x)exp(−2πikx) dx. For k≠0 set uₖ=\|k\|ⁿcₖ. The Raabe equation requires the average of f((x+j)/a) over j=0,…,a−1 to equal a⁻ⁿf(x) for every x.

**Problem.** Let f be continuous and 1-periodic with mean zero. Take a positive integer n and an integer scale a≥2. The Raabe equation holds exactly when the rescaled coefficients at k and ak agree for every nonzero k.

**How the definition helps.** Rescaling turns the functional equation into equalities between pairs of coefficients. In our own proof, integrating over a adjacent subintervals gives the average’s coefficient at k as the original coefficient at ak. The rescaling cancels the factor a⁻ⁿ. Uniqueness of Fourier coefficients proves the converse for continuous functions.

**Paper or page:** [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1). It says: “uₐₖ = uₖ, vₐₖ = vₖ (∀ k ∈ ℕ).”

**Sources:**

- [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1)

### Halving removes Kac–Bernstein parity terms

**Remember:** If every element has a half, there is only one parity class.

*Rules out counterexamples.* MSC 39B52 (Functional equations for functions with more general domains and/or ranges). arXiv math.CA. Level 4: research.

**Definition.** An abelian group G is 2-divisible if every x∈G equals 2y for some y∈G. Positive functions f,g on G satisfy the Kac–Bernstein equation if f(x+y)g(x−y)=f(x)f(y)g(x)g(−y) for every x,y∈G.

**Problem.** Suppose two positive functions on a 2-divisible abelian group satisfy the Kac–Bernstein equation. Their logarithms have one shared quadratic part, separate additive parts and separate constants. A quadratic part Q satisfies Q(x+y)+Q(x−y)=2Q(x)+2Q(y).

**How the definition helps.** On a 2-divisible group the doubles form the whole group, so the classification’s extra coset terms are constant. Our own example on ℤ takes f=e on odd integers, f=1 on even integers and g=1/f. Both sides equal one because x+y and x−y have the same parity and g is even. Yet log f is bounded and nonconstant, which no quadratic polynomial on ℤ can be.

**Paper or page:** [Solution of the Kac--Bernstein functional equation on Abelian groups in the class of positive functions](https://arxiv.org/abs/2102.01592v1). It says: “the function r(x) is a constant on each of the cosets of the subgroup X⁽²⁾ in X.”

**Sources:**

- [Solution of the Kac--Bernstein functional equation on Abelian groups in the class of positive functions](https://arxiv.org/abs/2102.01592v1)

### Negative scaling erases entropy errors

**Remember:** Add a large positive input and every scaled error tends to zero.

*Makes the theorem clean to state or prove.* MSC 39B82 (Stability, separation, extension, and related topics for functional equations). arXiv math.CA. Level 4: research.

**Definition.** Fix α &lt; 0 and a real function f on (0,1). For u,v &gt; 0 define F(u,v) = (u+v)ᵅ f(v/(u+v)). Write Δ(v) for the forward difference in the first variable, so Δ(v)F(u,w) = F(u+v,w) − F(u,w).

**Problem.** For x,y &gt; 0 with x+y &lt; 1, put T(x,y) = f(x) + (1−x)ᵅ f(y/(1−x)). If \|T(x,y)−T(y,x)\| has a uniform finite bound ε, then T(x,y) = T(y,x) everywhere on this domain.

**How the definition helps.** In our own proof the substitution (x,y)=(w,v)/(u+v+w) gives \|E(u,v,w)\|≤ε(u+v+w)ᵅ, where E(u,v,w)=Δ(v)F(u,w)−Δ(w)F(u,v). Commuting differences gives Δ(s)E(u,v,w)=Δ(v)E(u,s,w)−Δ(w)E(u,s,v), with differences acting on u. As s→∞ the bound sends all terms containing s to zero, leaving E(u,v,w)=0. Taking (u,v,w)=(1−x−y,y,x) recovers T(x,y)=T(y,x).

**Paper or page:** [Hyperstability of a functional equation](https://arxiv.org/abs/1307.0631v1). It says: “Then, and only then, there exist c,d ∈ ℝ such that f(x) = cxᵅ + d(1−x)ᵅ − d”

**Sources:**

- [Hyperstability of a functional equation](https://arxiv.org/abs/1307.0631v1)
