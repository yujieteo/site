### A product integrating factor turns a first-order recurrence into a sum

**Remember:** Divide by the accumulated product to make the differences telescope.

*True by definition.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For y(n+1) = a(n)y(n) + b(n) with every a(n) nonzero, let P(n) = a(0)a(1)⋯a(n−1), with P(0) = 1, be the accumulated product of multipliers. Dividing by P(n) removes the multipliers, since P(n+1) = a(n)P(n).

**Problem.** The solution satisfies y(n)/P(n) = y(0) plus the sum of b(k)/P(k+1) over 0 ≤ k &lt; n.

**How the definition helps.** Dividing by P(n) turns each step into adding a term. Since P(n+1) = a(n)P(n), the quotient y(n)/P(n) increases by b(n)/P(n+1) at each step (our own). Summing these increments gives the formula.

**Wikipedia:** [Recurrence relation](https://en.wikipedia.org/wiki/Recurrence_relation). It says: “the sum becomes an integral, and the product becomes the exponential function of an integral”

**Sources:**

- [Saber Elaydi, An Introduction to Difference Equations, 3rd ed., chapters 1–3](https://link.springer.com/book/10.1007/0-387-27602-5)

### A reduced denominator gives the shortest eventual recurrence

**Remember:** The lowest-terms denominator is the shortest recurrence.

*True by definition.* MSC 39A06 (Linear difference equations), 05A15. arXiv math.CO, math.CA. Level 2: later undergraduate.

**Definition.** The reduced denominator of a sequence with rational generating function is Q in P/Q after every common factor cancels, normalized by Q(0) = 1. Every polynomial D with D(0) = 1 that multiplies the series into a polynomial is a multiple of Q (our own).

**Problem.** The eventual recurrence order, the smallest lag of a homogeneous constant-coefficient recurrence that holds from some index on, equals the degree of the reduced denominator. Degree zero means the sequence is eventually zero.

**How the definition helps.** Comparing coefficients shows that a polynomial D with D(0) = 1 gives an eventual recurrence exactly when D times the series is a polynomial (our own). Since P and Q share no factor, this holds exactly when Q divides D. So the shortest recurrence has lag equal to the degree of Q.

**Wikipedia:** [Linear recurrence with constant coefficients](https://en.wikipedia.org/wiki/Linear_recurrence_with_constant_coefficients). It says: “can be expressed as a rational function”

**Sources:** none listed. No primary source with a working link was found.

### Binomial basis shifts solve resonant exponential forcing

**Remember:** Raise the binomial index by the multiplicity of the root.

*True by definition.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For complex sequences and a nonzero root μ of the complex polynomial P of multiplicity r, use the sequences bⱼ(n) = μⁿ binom(n,j) for n, j ≥ 0, with binom(n,j) = 0 for j &gt; n. By Pascal's identity, the forward shift S satisfies (S − μ)bⱼ = μbⱼ₋₁ and (S − μ)b₀ = 0, so S − μ lowers the index by one.

**Problem.** Let q be a polynomial of degree at most d. Then P(S)y = μⁿq(n) has exactly one solution in the span of the basis elements with indices r through r+d.

**How the definition helps.** Write P(z) = (z − μ)ʳQ(z) with Q(μ) ≠ 0. Then (S − μ)ʳ maps the span of indices r through r+d bijectively onto the span of indices 0 through d, which is μⁿ times polynomials of degree at most d. On that span Q(S) is triangular with nonzero diagonal Q(μ), hence invertible (our own).

**Paper or page:** [Algebraic Modification of the Method of Undetermined Coefficients For Solving Nonhomogeneous Linear Difference Equations](https://arxiv.org/abs/2307.07182v1). It says: “and is of multiplicity m, then the particular solution”

**Sources:**

- [Timofey Lomonosov, Algebraic Modification of the Method of Undetermined Coefficients For Solving Nonhomogeneous Linear Difference Equations](https://arxiv.org/abs/2307.07182v1)

### Coprime characteristic factors split recurrence solutions into separate parts

**Remember:** Split the polynomial into coprime factors to split its solutions.

*True by definition.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Write a constant-coefficient recurrence for sequences over a field as P(S)y = 0, where S is the forward shift (Sy)(n) = y(n+1). Polynomials in S multiply like ordinary polynomials, so every polynomial identity becomes an operator identity.

**Problem.** Suppose P = QR, where the polynomials Q and R share no nonconstant factor. Every solution of P(S)y = 0 splits uniquely into solutions killed by Q(S) and R(S), respectively.

**How the definition helps.** Since Q and R share no factor, the Euclidean algorithm gives UQ + VR = 1, so U(S)Q(S) + V(S)R(S) is the identity (our own). It splits y into V(S)R(S)y, killed by Q(S), and U(S)Q(S)y, killed by R(S). The same identity sends any common solution to zero, which gives uniqueness.

**Wikipedia:** [Linear recurrence with constant coefficients](https://en.wikipedia.org/wiki/Linear_recurrence_with_constant_coefficients). It says: “the coefficients determine the characteristic polynomial”

**Sources:** none listed. No primary source with a working link was found.

### Divided differences include equal parameters

**Remember:** Sum all degree n−1 monomials, so equal parameters need no case.

*Makes the theorem clean to state or prove.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The divided difference of tⁿ at A and B is the sum Aⁿ⁻¹ + Aⁿ⁻²B + ⋯ + Bⁿ⁻¹ of all monomials of degree n−1, and zero for n = 0. It equals (Aⁿ − Bⁿ)/(A − B) when A ≠ B and nAⁿ⁻¹ when A = B, with no case split in the formula.

**Problem.** Start at y(0) = 0 and set y(n+1) = A y(n) + Bⁿ for n ≥ 0. Then y(n) is the divided difference of tⁿ at A and B.

**How the definition helps.** Multiplying the degree n−1 sum by A and adding Bⁿ gives every degree-n monomial exactly once (our own). So the sum starts at zero and obeys the recurrence for all A and B.

**Paper or page:** [Recurrence Relation where n+1th Term is A by nth term + B to the n](https://proofwiki.org/wiki/Recurrence_Relation_where_n+1th_Term_is_A_by_nth_term_+_B_to_the_n). It says: “(Aⁿ − Bⁿ)/(A − B) : A ≠ B   n Aⁿ⁻¹ : A = B”

**Sources:** none listed. No primary source with a working link was found.

### Generating series make recurrences rational

**Remember:** A lag is multiplication by z, apart from initial terms.

*True by definition.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The ordinary generating function of a sequence over a field is the formal power series ∑ aₙzⁿ, with no convergence needed. Delaying the sequence by k places multiplies the series by zᵏ (our own).

**Problem.** A sequence satisfies a constant-coefficient linear homogeneous recurrence from some index onward exactly when its ordinary generating function is rational.

**How the definition helps.** Multiplying the series by the recurrence polynomial cancels every high coefficient and leaves a polynomial, so the series is rational (our own). Conversely, write it as P/Q with Q(0) = 1. Comparing coefficients in Q times the series gives a recurrence above the degree of P.

**nLab:** [generating function](https://ncatlab.org/nlab/show/generating+function). It says: “A generating function is an element of R⟦z⟧, the rig of formal power series over the rig R”

**Sources:** none listed. No primary source with a working link was found.

### Invertible steps make one Casoratian test enough

**Remember:** An invertible step cannot erase independence.

*Rules out counterexamples.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Call y(n+2) = a(n)y(n+1) + b(n)y(n) nondegenerate if every b(n) is nonzero, so each step can be reversed. The Casoratian of two solutions is the determinant of their values at n and n+1, and each step multiplies it by −b(n).

**Problem.** Two solutions of a nondegenerate recurrence are linearly independent exactly when their Casoratian is nonzero at some index. In that case it is nonzero at every index.

**How the definition helps.** Each step multiplies the Casoratian by the nonzero number −b(n), so it vanishes at one index exactly when it vanishes at all. Two starting values determine a solution, so independence is the determinant test at any index (our own). For y(n+2) = 0, independent starting columns both become zero after two steps.

**Paper or page:** [On Positivity and Minimality for Second-Order Holonomic Sequences](https://arxiv.org/abs/2007.12282v1). It says: “uₙvₙ₋₁ − uₙ₋₁vₙ = (u₀v₋₁ − u₋₁v₀)∏ₖ₌₁ⁿ (−aₖ)”

**Sources:**

- [Saber Elaydi, An Introduction to Difference Equations, 3rd ed., chapters 1–3](https://link.springer.com/book/10.1007/0-387-27602-5)

### Nonresonance makes polynomial forcing solvable

**Remember:** Nonresonance keeps the solution in the same polynomial space as the forcing.

*Rules out counterexamples.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Write a real constant-coefficient recurrence as P(S)y = f, where S is the forward shift (Sy)ₙ = yₙ₊₁. A nonzero real μ is nonresonant if P(μ) ≠ 0, so μⁿ does not solve the homogeneous equation.

**Problem.** Let the forcing equal μ to the power n times a polynomial in n of degree at most s. If μ is nonresonant, the recurrence has exactly one particular solution of that same form and degree bound.

**How the definition helps.** On the basis μⁿ, nμⁿ, …, nˢμⁿ the shift is triangular with diagonal μ, so P(S) is triangular with diagonal P(μ) (our own). Nonresonance makes that diagonal nonzero, so P(S) is invertible on this space. At resonance, yₙ₊₁ − yₙ = 1 has no constant solution.

**Paper or page:** [Algebraic Modification of the Method of Undetermined Coefficients For Solving Nonhomogeneous Linear Difference Equations](https://arxiv.org/abs/2307.07182v1). It says: “and the system in question has a unique solution.”

**Sources:**

- [Algebraic Modification of the Method of Undetermined Coefficients For Solving Nonhomogeneous Linear Difference Equations](https://arxiv.org/abs/2307.07182v1)

### One basis handles repeated roots including zero

**Remember:** Each shifted difference drops the coefficient index by one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a real or complex r, let uⱼ(n) be the coefficient of tʲ in (r + t)ⁿ, which is binom(n,j)rⁿ⁻ʲ. The shift multiplies (r + t)ⁿ by r + t, so S − rI sends uⱼ to uⱼ₋₁ and u₀ to zero, even when r = 0 (our own).

**Problem.** Let S shift a sequence forward by one index, and let I be the identity. For each positive integer d, the sequences uⱼ with 0 ≤ j &lt; d form a basis for solutions of (S − rI)ᵈu = 0.

**How the definition helps.** Applying S − rI d times kills each uⱼ with j &lt; d (our own). Their first d values form a triangular matrix with unit diagonal, and d initial values determine each solution, so they form a basis. The usual basis nʲrⁿ misses the solutions supported at early indices when r = 0.

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

**Definition.** For values b(m+1), …, b(n), let B(t) be the sum of b(k) over m &lt; k ≤ t, a step function that jumps by b(k) at each integer k. On each interval between integers B is constant, so its integral against v′ is a single difference of v.

**Problem.** For continuously differentiable v on \[m,n\], the sum of b(k)v(k) over m &lt; k ≤ n equals B(n)v(n)−∫ₘⁿ B(t)v′(t) dt.

**How the definition helps.** On \[k, k+1\] B equals B(k), so that piece of the integral is B(k)(v(k+1) − v(k)) (our own). Collecting the coefficient of each v(k) leaves the jumps b(k) and the endpoint term B(n)v(n).

**Paper or page:** [On certain harmonic zeta functions](https://arxiv.org/abs/2403.07123v1). It says: “If {b₁,b₂,b₃,…} is a sequence of complex numbers and v(x) is a function with a continuous derivative for x &gt; α”

**Sources:** none listed. No primary source with a working link was found.

### Geometric products give q-exponential shifts

**Remember:** Scaling x by q removes exactly one factor.

*True by definition.* MSC 39A13 (Difference equations, scaling (\\(q\\)-differences)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Fix 0 &lt; q &lt; 1. For \|(1 − q)x\| &lt; 1, let E(x) be the infinite product of 1/(1 − (1 − q)xqᵏ) over k ≥ 0. Replacing x by qx drops exactly the k = 0 factor.

**Problem.** For nonzero x with \|(1 − q)x\| &lt; 1, E equals its own q-derivative (E(x) − E(qx))/((1 − q)x).

**How the definition helps.** Dropping that factor gives E(qx) = (1 − (1 − q)x)E(x), so E(x) − E(qx) = (1 − q)xE(x). Dividing by (1 − q)x gives the claim.

**Wikipedia:** [Q-exponential](https://en.wikipedia.org/wiki/Q-exponential). It says: “e<sub>q</sub>(x)=\\left(\\prod<sub>k=0</sub><sup>\\infty</sup>(1-q<sup>k</sup>(1-q)x)\\right)<sup>-1</sup>.”

**Sources:** none listed. No primary source with a working link was found.

### Geometric-grid sums invert Jackson differentiation

**Remember:** Match the integral weights to the gaps in the grid.

*True by definition.* MSC 39A13 (Difference equations, scaling (\\(q\\)-differences)). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For 0 &lt; q &lt; 1 and x &gt; 0, the Jackson integral of f from 0 to x is ∑ₖ≥₀ (1 − q)xqᵏ f(xqᵏ), a sum over the grid x, qx, q²x, … with each point weighted by the gap below it. At x = 0 its value is zero.

**Problem.** Let f be continuous on \[0,A\], where A &gt; 0. Its Jackson integral F satisfies (F(x) − F(qx))/((1 − q)x) = f(x) for 0 &lt; x ≤ A.

**How the definition helps.** The grid for qx is the grid for x without its top point, so F(x) − F(qx) is the top term (1 − q)xf(x). Continuity on \[0, A\] bounds f, and the gaps sum to x, so the series converges absolutely (our own).

**Wikipedia:** [Jackson integral](https://en.wikipedia.org/wiki/Jackson_integral). It says: “then the Jackson integral converges to a function F(x) on \[0,A) which is a q-antiderivative of f(x).”

**Sources:** none listed. No primary source with a working link was found.

### Sequence updates give unique solutions

**Remember:** One update on whole sequences replaces infinitely many separate equations.

*Makes the theorem clean to state or prove.* MSC 39A22 (Growth, boundedness, comparison of solutions to difference equations), 39A05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Treat a recurrence yₙ = Fₙ(yₙ₋₁) as one update on whole bounded sequences: the new entry at time n is Fₙ applied to the old entry at time n−1. Bounded entire solutions are exactly the fixed points of this update, measured with the supremum distance (our own).

**Problem.** Suppose each Fₙ acts on the same complete normed vector space and reduces distances by a common factor less than one. If the values Fₙ(0) are uniformly bounded, the recurrence has exactly one bounded solution on all integer times.

**How the definition helps.** If every Fₙ contracts by q &lt; 1, the update contracts the supremum distance by q. It keeps sequences bounded, since a bound M becomes qM + B, where B bounds every ‖Fₙ(0)‖ (our own). The contraction mapping theorem on the complete space of bounded sequences gives exactly one fixed point.

**Paper or page:** [Pullback and forward attractors of contractive difference equations](https://arxiv.org/abs/2205.06652v1). It says: “has a unique bounded entire solution”

**Sources:**

- [Pullback and forward attractors of contractive difference equations](https://arxiv.org/abs/2205.06652v1)

### Unique solutions inherit forcing periods

**Remember:** Shift the unique entire solution by one period and nothing changes.

*True by definition.* MSC 39A23 (Periodic solutions of difference equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** An entire solution satisfies the recurrence at every integer time, so shifting it in time by p gives a sequence on the same domain. When the recurrence repeats after p steps, that shifted sequence is again a solution.

**Problem.** If a recurrence repeats after p time steps and has a unique bounded entire solution, that solution is p-periodic.

**How the definition helps.** The shift by p of the unique bounded entire solution is again bounded and solves the recurrence, so uniqueness makes it equal to the original (our own). A forward solution would not work, because shifting it changes its starting time.

**Paper or page:** [Pullback and forward attractors of contractive difference equations](https://arxiv.org/abs/2205.06652v1). It says: “is θ-periodic”

**Sources:**

- [Pullback and forward attractors of contractive difference equations](https://arxiv.org/abs/2205.06652v1)

### Green matrices turn boundary problems into fixed points

**Remember:** Solve each unit forcing once, then combine the answers.

*Makes the theorem clean to state or prove.* MSC 39A27 (Boundary value problems for difference equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For an invertible linear difference operator L with fixed homogeneous boundary conditions, the Green matrix G is L⁻¹. Column k is the solution for a unit forcing at k, and G turns Ly = N(y) into the fixed-point problem y = GN(y) (our own).

**Problem.** Write the finite boundary problem as Ly=N(y), where L is the invertible linear difference operator and N is continuous. A solution exists if applying the Green matrix to N maps a closed ball of possible sequences into itself.

**How the definition helps.** On a finite index set, a closed ball of sequences is compact and convex. GN is continuous and maps the ball into itself, so Brouwer's fixed-point theorem gives a solution (our own).

**Paper or page:** [Green's Functions and Existence of Solutions of Nonlinear Fractional Implicit Difference Equations with Dirichlet Boundary Conditions](https://arxiv.org/abs/2212.08851v1). It says: “has a solution defined on”

**Sources:**

- [Green's Functions and Existence of Solutions of Nonlinear Fractional Implicit Difference Equations with Dirichlet Boundary Conditions](https://arxiv.org/abs/2212.08851v1)

### Companion states give one stability test

**Remember:** One shift of the state is one matrix multiplication.

*Makes the theorem clean to state or prove.* MSC 39A30 (Stability theory for difference equations), 39A06. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Take d consecutive terms of an order-d homogeneous linear constant-coefficient recurrence as its state, and let the companion matrix C advance the state by one step. Every solution is then read off from the powers of C, and the eigenvalues of C are the characteristic roots.

**Problem.** Every solution of a homogeneous constant-coefficient recurrence tends to zero exactly when every characteristic root has modulus below one.

**How the definition helps.** All solutions tend to zero exactly when all powers of C tend to zero (our own). Jordan form shows this happens exactly when every eigenvalue has modulus below one. An eigenvector for a root of modulus at least one gives a state that does not decay.

**Wikipedia:** [Linear recurrence with constant coefficients](https://en.wikipedia.org/wiki/Linear_recurrence_with_constant_coefficients). It says: “Linear recurrences with constant coefficients can also be solved using matrix methods.”

**Sources:** none listed. No primary source with a working link was found.

### Angle doubling solves logistic iteration

**Remember:** Double the angle and take the square of its sine.

*True by definition.* MSC 39A33 (Chaotic behavior of solutions of difference equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** Write x in \[0, 1\] as x = sin²θ with θ in \[0, π/2\]. In this angle the logistic map x ↦ 4x(1 − x) doubles θ, since sin²(2θ) = 4 sin²θ (1 − sin²θ) (our own).

**Problem.** After n applications of x ↦ 4x(1 − x), the value is sin²(2ⁿθ).

**How the definition helps.** The identity holds for every real angle, so n steps multiply the angle by 2ⁿ, even after it leaves \[0, π/2\] (our own).

**Wikipedia:** [Logistic map](https://en.wikipedia.org/wiki/Logistic_map). It says: “xₙ = sin²(2ⁿ θ π),”

**Sources:** none listed. No primary source with a working link was found.

### Fixed-point coordinates make iterates geometric

**Remember:** Send the two fixed points to zero and infinity.

*True by definition.* MSC 39A45 (Difference equations in the complex domain). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For f(z) = (az + b)/(cz + d) with ad − bc ≠ 0 and two distinct finite fixed points α and β, use the coordinate w = (z − α)/(z − β). It sends α to 0 and β to ∞, and a fractional linear map fixing 0 and ∞ is w ↦ kw.

**Problem.** In the new coordinate, each step of the fractional linear recurrence multiplies by a constant. Its nth iterate therefore multiplies by the nth power of that constant.

**How the definition helps.** In the new coordinate f fixes 0 and ∞, so it is w ↦ kw for a constant k (our own). Iterating n times multiplies by kⁿ.

**Wikipedia:** [Möbius transformation](https://en.wikipedia.org/wiki/M%C3%B6bius_transformation). It says: “(f(z) − γ₁)/(f(z) − γ₂) = k (z − γ₁)/(z − γ₂).”

**Sources:** none listed. No primary source with a working link was found.

### Falling powers make polynomial differences and sums simple

**Remember:** Differences of falling powers copy the power rule, so sums telescope.

*True by definition.* MSC 39A70 (Difference operators), 05A10. arXiv math.CO. Level 2: later undergraduate.

**Definition.** The falling power (x)ₘ = x(x − 1)⋯(x − m + 1), with (x)₀ = 1, steps down by one in each factor. So (x + 1)ₘ and (x)ₘ share the m − 1 factors x, …, x − m + 2 and differ only in one end factor.

**Problem.** With Δf(x) = f(x + 1) − f(x), Δ(x)ₘ = m(x)ₘ₋₁ for m ≥ 1. The sum of (k)ₘ for k = 0, …, n − 1 is (n)ₘ₊₁/(m + 1) for integers m ≥ 0 and n ≥ 1.

**How the definition helps.** Factoring out the shared (x)ₘ₋₁ leaves (x + 1) − (x − m + 1) = m (our own). Summing Δ(k)ₘ₊₁/(m + 1) over k telescopes to (n)ₘ₊₁/(m + 1), since (0)ₘ₊₁ = 0. Ordinary powers have no such rule, since (x + 1)ᵐ − xᵐ has many terms.

**Wikipedia:** [Falling and rising factorials](https://en.wikipedia.org/wiki/Falling_and_rising_factorials). It says: “In this formula, the falling factorial (x)ₙ in the calculus of finite differences plays the role of xⁿ in differential calculus.”

**Sources:** none listed. No primary source with a working link was found.

### Abel coordinates exist exactly without cycles

**Remember:** A clock that adds one each step cannot return to its start.

*Rules out counterexamples.* MSC 39B12 (Iteration theory, iterative and composite equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** An Abel coordinate for a map T is a real function h that rises by exactly one at each step, h(T(x)) = h(x) + 1. It need not be one-to-one.

**Problem.** Assuming the axiom of choice, a self-map of a set admits an Abel coordinate exactly when it has no periodic points.

**How the definition helps.** Along a cycle of length p, h would rise by p and return to its start, which is impossible. Conversely, choose a reference point r in each class of points whose forward orbits meet, and set h(x) = n − m whenever Tᵐx = Tⁿr (our own). Without periodic points this offset is well defined, and one step raises it by one.

**Wikipedia:** [Abel equation](https://en.wikipedia.org/wiki/Abel_equation). It says: “The Abel equation has at least one solution on E if and only if for all x ∈ E and all n ∈ ℕ∗, fⁿ(x) ≠ x,”

**Sources:**

- [R. Tambs Lyche, Sur l’équation fonctionnelle d’Abel (1924)](https://doi.org/10.4064/fm-5-1-331-333)

### Angles turn tangent addition into rotation

**Remember:** Tangent addition becomes a rotation of a uniform angle.

*Makes the theorem clean to state or prove.* MSC 39B22 (Functional equations for real functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Represent each real x by the angle whose tangent is x, identifying angles that differ by π; only π/2 has no finite tangent. In this angle, (x + y)/(1 − xy) is addition of angles, a rotation of the circle, which keeps the uniform distribution uniform.

**Problem.** If a Borel measurable real function f satisfies f((x+y)/(1−xy)) = f(x) + f(y) whenever xy ≠ 1, then f is zero everywhere.

**How the definition helps.** Let X be the tangent of a uniform random angle. Rotating by the angle of y keeps the distribution of X, so f(X) has the same distribution as f(X) + f(y), ignoring a probability-zero set where xy = 1 (our own). A real random variable cannot equal its own translate by a nonzero constant in distribution, so f(y) = 0.

**Paper or page:** [Non-existence of measurable solutions of certain functional equations via probabilistic approaches](https://arxiv.org/abs/2105.09804v1). It says: “is limited to the function f(x) = 0 for every x ∈ ℝ.”

**Sources:**

- [Non-existence of measurable solutions of certain functional equations via probabilistic approaches](https://arxiv.org/abs/2105.09804v1)

### Continuity makes additive functions linear

**Remember:** Additivity fixes the rational values and continuity fills the gaps.

*Rules out counterexamples.* MSC 39B22 (Functional equations for real functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A function f from ℝ to ℝ is additive if f(x + y) = f(x) + f(y) for all real x and y, which forces f(q) = qf(1) for every rational q.

**Problem.** Every additive real function continuous at zero has the form f(x)=cx.

**How the definition helps.** Additivity fixes f on the dense rationals and turns continuity at zero into continuity everywhere, so f(x) = f(1)x for all x (our own). Without continuity, take a basis of ℝ over ℚ containing 1 and √2. The ℚ-linear map that sends √2 to 1 and every other basis element to 0 is our own counterexample.

**Wikipedia:** [Cauchy's functional equation](https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation). It says: “there are infinitely many other functions that satisfy the equation.”

**Sources:** none listed. No primary source with a working link was found.

### Raabe averages multiply scales

**Remember:** Two successive averages are one average over a larger grid.

*True by definition.* MSC 39B22 (Functional equations for real functions). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a positive integer a, the averaging operator Aₐ replaces f(x) by the mean of f((x + k)/a) over k = 0, …, a − 1. The degree n Raabe equation at scale a is Aₐf = a⁻ⁿf, and averaging at scale b and then at scale a is averaging at scale ab.

**Problem.** If f satisfies the degree n Raabe equations at positive integer scales a and b, it also satisfies the equation at scale ab.

**How the definition helps.** Each integer from 0 to ab − 1 is i + aj in exactly one way, with 0 ≤ i &lt; a and 0 ≤ j &lt; b, so the two averages compose to one at scale ab (our own). Applying both equations multiplies the factors a⁻ⁿ and b⁻ⁿ into (ab)⁻ⁿ.

**Paper or page:** [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1). It says: “then it is a solution of Equation $({\\mathbb E}<sub>n , a b</sub>)$.”

**Sources:**

- [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1)

### Subadditivity forces a limiting growth rate

**Remember:** Repeat any fixed block to bound the eventual cost per step.

*Rules out counterexamples.* MSC 39B62 (Functional inequalities, including subadditivity, convexity, etc.). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real sequence is subadditive if aₘ₊ₙ ≤ aₘ + aₙ for all positive m and n, so joining two blocks costs at most the sum of their costs. Hence, for each fixed m, aₙ is at most ⌊n/m⌋aₘ plus the cost of a remainder shorter than m.

**Problem.** For a real subadditive sequence, aₙ/n tends to the infimum of those ratios. This limit may be −∞.

**How the definition helps.** Dividing that bound by n shows that the upper limit of aₙ/n is at most aₘ/m for every m (our own). The infimum bounds every ratio below, so the limit is the infimum. Without subadditivity, aₙ = n for odd n and 0 otherwise is our own counterexample.

**Wikipedia:** [Fekete's lemma](https://en.wikipedia.org/wiki/Fekete%27s_lemma). It says: “converges to its infimum. Note that this infimum may be −∞.”

**Sources:**

- [M. Fekete, Über die Verteilung der Wurzeln bei gewissen algebraischen Gleichungen mit ganzzahligen Koeffizienten (1923)](https://doi.org/10.1007/BF01504345)

### Divided measures solve recurrences

**Remember:** An index shift multiplies the moment integrand by its variable.

*True by definition.* MSC 39A06 (Linear difference equations). arXiv math.CA. Level 3: graduate.

**Definition.** Let μ be a finite positive measure on a compact set K in ℝ, with moments aₙ = ∫ tⁿ dμ(t). For a polynomial P positive on K, set bₙ = ∫ tⁿ/P(t) dμ(t), so raising the index by one multiplies the integrand by t.

**Problem.** With P(t) = c₀ + c₁t + ⋯ + cₘtᵐ and cₘ ≠ 0, c₀bₙ + c₁bₙ₊₁ + ⋯ + cₘbₙ₊ₘ = aₙ for every n ≥ 0. The integrals b₀, …, bₘ₋₁ supply the initial values.

**How the definition helps.** The weighted sum multiplies the integrand tⁿ/P(t) by P(t), leaving tⁿ, so it equals aₙ (our own). Positivity of P on the compact set K keeps every bₙ finite.

**Paper or page:** [Moment sequences and difference equations](https://arxiv.org/abs/2204.04706v5). It says: “∑ⱼ₌₀ᵐ cⱼbₙ₊ⱼ = aₙ”

**Sources:**

- [Moment sequences and difference equations](https://arxiv.org/abs/2204.04706v5)

### Factorial weights simplify binomial convolution

**Remember:** Divide coefficients by factorials to multiply binomial convolutions.

*Makes the theorem clean to state or prove.* MSC 39A06 (Linear difference equations). arXiv math.CO. Level 3: graduate.

**Definition.** The exponential generating series of a sequence a is ∑ aₙzⁿ/n!. Dividing by factorials makes binomial convolution, the sum of binom(n,k)aₖbₙ₋ₖ over 0 ≤ k ≤ n, into ordinary multiplication of these series.

**Problem.** Take two complex sequences that satisfy constant-coefficient linear recurrences from some index onward. Their binomial convolution also satisfies such a recurrence from some index onward.

**How the definition helps.** A sequence eventually satisfies a constant-coefficient recurrence exactly when its exponential generating series is a finite sum of polynomials times exponentials (our own). Products of such sums are again such sums. The binomial convolution has the product as its series, so it satisfies such a recurrence.

**Paper or page:** [Binomial convolutions for rational power series](https://arxiv.org/abs/2304.10426v2). It says: “If {aₙ} and {bₙ} have rational generating functions then so does their binomial convolution.”

**Sources:**

- [Ira M. Gessel and Ishan Kar, Binomial convolutions for rational power series](https://arxiv.org/abs/2304.10426v2)

### Falling factorial series simplify index multiplication

**Remember:** Each falling factorial is an eigenvector whose eigenvalue equals its degree.

*True by definition.* MSC 39A06 (Linear difference equations), 39A70. arXiv math.CA. Level 3: graduate.

**Definition.** Let Bₙ(z) = z(z − 1)⋯(z − n + 1), with B₀(z) = 1, and encode a sequence by the formal series ∑ aₙBₙ(z)tⁿ. The operator θg(z) = z(g(z) − g(z − 1)), applied to each coefficient, satisfies θBₙ = nBₙ.

**Problem.** For any polynomial p, multiplying the nth sequence term by p(n) acts on the discrete generating series as p(θ). Here p(θ) uses repeated applications of θ in place of powers of the variable.

**How the definition helps.** Since θBₙ = nBₙ, θ multiplies the nth term by n, and repeating it turns p(θ) into multiplication by p(n) (our own). Ordinary powers of z would mix several degrees under θ.

**Paper or page:** [Discrete Generating Series and Linear Difference Equations](https://arxiv.org/abs/2504.21722v1). It says: “For the discrete generating series, the following relation holds:”

**Sources:**

- [Discrete Generating Series and Linear Difference Equations](https://arxiv.org/abs/2504.21722v1)

### Nonresonance prevents infinitely many zeros

**Remember:** No two roots become equal after taking the same power.

*Rules out counterexamples.* MSC 39A06 (Linear difference equations). arXiv math.NT. Level 3: graduate.

**Definition.** A linear recurrence sequence over a field of characteristic zero is nondegenerate if its minimal polynomial has nonzero roots and no ratio of two distinct roots is a root of unity. Equivalently, distinct roots stay distinct after raising them to any common positive power.

**Problem.** A nonzero sequence indexed by the nonnegative integers and satisfying such a nondegenerate linear recurrence has only finitely many zeros.

**How the definition helps.** Skolem–Mahler–Lech says that infinitely many zeros would contain a whole arithmetic progression. On a progression of step d the terms have the distinct bases λᵈ, so by linear independence they cannot cancel for a nonzero sequence (our own). Without nondegeneracy, 1 − (−1)ⁿ vanishes at every even index (our own).

**Wikipedia:** [Skolem–Mahler–Lech theorem](https://en.wikipedia.org/wiki/Skolem%E2%80%93Mahler%E2%80%93Lech_theorem). It says: “is equal to the union of finitely many arithmetic progressions and a finite set.”

**Sources:**

- [Christer Lech, A note on recurring series (1953)](https://doi.org/10.1007/bf02590997)

### Reversible weights make spectra nonnegative

**Remember:** Balanced weights turn differences into squares.

*True by definition.* MSC 39A14 (Partial difference equations), 33C50. arXiv math.CA. Level 3: graduate.

**Definition.** On a finite lattice, let Lf(x) = ∑ᵧ r(x,y)(f(x) − f(y)) with nonnegative rates r. Positive weights w are reversible if w(x)r(x,y) = w(y)r(y,x), so each edge carries the same weighted rate in both directions.

**Problem.** L is self-adjoint for the inner product ⟨f,g⟩ = ∑ₓ w(x)f(x)g(x). Every eigenvalue is real and nonnegative.

**How the definition helps.** Pairing the two directions of each edge gives ⟨f, Lg⟩ as the sum of w(x)r(x,y)(f(x) − f(y))(g(x) − g(y)) over unordered edges (our own). This is symmetric in f and g, and for g = f it is a sum of nonnegative squares.

**Paper or page:** [Multivariate Hahn polynomials and difference equations](https://arxiv.org/abs/2305.09170v3). It says: “are real symmetric positive semi-definite matrices and the eigenvalues are real and non-negative.”

**Sources:**

- [Multivariate Hahn polynomials and difference equations](https://arxiv.org/abs/2305.09170v3)

### Residuals correct approximate trajectories

**Remember:** Solve for the residual, then subtract the correction.

*True by definition.* MSC 39A30 (Stability theory for difference equations), 39A06. arXiv math.DS. Level 3: graduate.

**Definition.** The residual of a proposed trajectory xₙ is wₙ = xₙ₊₁ − Aₙxₙ. The recurrence is admissible for bounded errors if one constant L lets every bounded w be the residual of some z with supₙ\|zₙ\| ≤ L supₙ\|wₙ\|.

**Problem.** Bounded-error admissibility for a linear recurrence on integer times implies Hyers–Ulam stability. This means a sequence with small uniform residual stays uniformly close to some exact solution.

**How the definition helps.** Take z with the same residual as x; then x − z is an exact trajectory within L times the residual size of x (our own).

**Paper or page:** [Hyers-Ulam stability for finite-dimensional nonautonomous dynamics](https://arxiv.org/abs/2401.04516v1). It says: “supₙ∈ℤ \|zₙ\| ≤ L supₙ∈ℤ \|wₙ\|.”

**Sources:**

- [Hyers-Ulam stability for finite-dimensional nonautonomous dynamics](https://arxiv.org/abs/2401.04516v1)

### Unit circle roots prevent shadowing

**Remember:** Off the unit circle, every error dies forward or backward.

*Rules out counterexamples.* MSC 39A30 (Stability theory for difference equations). arXiv math.DS. Level 3: graduate.

**Definition.** A square complex matrix A is hyperbolic if no eigenvalue has modulus one. Then the space splits into directions that shrink under forward iteration and directions that shrink under backward iteration.

**Problem.** The recurrence xₙ₊₁ = Axₙ, n ≥ 0, has forward shadowing exactly when A is hyperbolic. Forward shadowing means: for each ε &gt; 0 some δ &gt; 0 puts every sequence with all ‖yₙ₊₁ − Ayₙ‖ ≤ δ within ε of an exact orbit.

**How the definition helps.** On the forward-shrinking part, sum past errors, and on the backward-shrinking part, sum future errors; each sum is a bounded multiple of δ (our own). For an eigenvalue λ with \|λ\| = 1, errors aligned with the powers of λ accumulate linearly in a left eigenvector coordinate. No exact orbit can follow that drift.

**Paper or page:** [Shadowing and hyperbolicity for linear delay difference equations](https://arxiv.org/abs/2401.10767v2). It says: “has no root on the unit circle \|λ\| = 1”

**Sources:**

- [Shadowing and hyperbolicity for linear delay difference equations](https://arxiv.org/abs/2401.10767v2)

### Nested compositions absorb one more step

**Remember:** Moving time forward puts one more map on the outside.

*True by definition.* MSC 39A45 (Difference equations in the complex domain), 39B12. arXiv math.CA. Level 3: graduate.

**Definition.** For continuous f on ℂ and a scalar function u, let Tₛ(z) = u(s)f(z). For fixed z, F(s) is the limit, when it exists, of Tₛ₋₁ ∘ ⋯ ∘ Tₛ₋ₙ(z) as n → ∞, so the outermost map is always the latest one.

**Problem.** Suppose these limits exist at s and s+1 for the same starting value. Then F(s+1)=u(s)f(F(s)).

**How the definition helps.** The composition of length n + 1 for F(s + 1) is Tₛ applied to the composition of length n for F(s) (our own). Continuity lets Tₛ pass through the limit, giving F(s + 1) = u(s)f(F(s)).

**Paper or page:** [Infinite Compositions and Complex Dynamics; Generalizing Schröder and Abel Functions](https://arxiv.org/abs/2108.13519v1). It says: “F(s+1) = u(s)f(F(s))”

**Sources:**

- [Infinite Compositions and Complex Dynamics; Generalizing Schröder and Abel Functions](https://arxiv.org/abs/2108.13519v1)

### Laplace transforms turn differences into factors

**Remember:** Each forward difference adds one factor of exp(−ht) minus one.

*True by definition.* MSC 39A70 (Difference operators), 44A10. arXiv math.CA. Level 3: graduate.

**Definition.** Represent f(z) as the integral of exp(−zt)g(t) over t ≥ 0. Shifting z by h multiplies the integrand by exp(−ht), so the forward difference f(z + h) − f(z) multiplies it by exp(−ht) − 1.

**Problem.** Suppose the integral converges absolutely at z and h&gt;0. Applying the forward difference n times multiplies the integrand by (exp(−ht)−1)ⁿ for every positive integer n.

**How the definition helps.** Each further difference contributes one more factor exp(−ht) − 1 (our own). Since h &gt; 0 and t ≥ 0, every shifted integral still converges absolutely.

**Paper or page:** [On the convergence of Newton series and the asymptotics of finite differences](https://arxiv.org/abs/2404.04288v3). It says: “Suppose f has an inverse Laplace transform.”

**Sources:**

- [On the convergence of Newton series and the asymptotics of finite differences](https://arxiv.org/abs/2404.04288v3)

### Böttcher coordinates turn iteration into powers

**Remember:** In Böttcher coordinates, each step of h is the dth power.

*True by definition.* MSC 39B12 (Iteration theory, iterative and composite equations). arXiv math.DS. Level 3: graduate.

**Definition.** Let h be analytic near a fixed point a, with h(z) − a starting at order d ≥ 2. A Böttcher coordinate is a locally invertible analytic map φ with φ(a) = 0 that turns h into the power map, φ(h(z)) = φ(z)ᵈ.

**Problem.** In this coordinate, applying h successively n times raises the starting value to the power dⁿ.

**How the definition helps.** Since φ ∘ h is the dth power of φ, n steps of h raise φ to the power dⁿ (our own). Böttcher's theorem supplies the hard part, that such a coordinate exists.

**Wikipedia:** [Böttcher's equation](https://en.wikipedia.org/wiki/B%C3%B6ttcher%27s_equation). It says: “conjugates h(z) in a neighbourhood of the fixed point to the function zⁿ.”

**Sources:**

- [Pierre Fatou, Sur les équations fonctionnelles (1919)](https://doi.org/10.24033/bsmf.998)

### Normalized iterates solve Schröder’s equation

**Remember:** Rescale each iterate by λⁿ, and the limit linearizes f.

*True by definition.* MSC 39B12 (Iteration theory, iterative and composite equations), 39B32. arXiv math.DS, math.CA. Level 3: graduate.

**Definition.** Let f be holomorphic near zero with f(0) = 0 and f′(0) = λ, where 0 &lt; \|λ\| &lt; 1. The Koenigs function h is the limit of fⁿ(z)/λⁿ, the nth iterate rescaled by its expected shrinking factor.

**Problem.** Near zero, the Koenigs function satisfies h(f(z))=λh(z). It has h′(0)=1, so it gives a locally invertible change of coordinates.

**How the definition helps.** Composing fⁿ/λⁿ with f gives λ times fⁿ⁺¹/λⁿ⁺¹, so the limit satisfies h(f(z)) = λh(z) (our own). Koenigs's theorem gives locally uniform convergence, so derivatives converge too. Each fⁿ/λⁿ has derivative one at zero, so h′(0) = 1 and the inverse function theorem applies.

**Wikipedia:** [Koenigs function](https://en.wikipedia.org/wiki/Koenigs_function). It says: “the uniform limit on compacta of the normalized iterates”

**Sources:**

- [Gabriel Koenigs, Recherches sur les intégrales de certaines équations fonctionnelles (1884)](https://doi.org/10.24033/asens.247)

### One orbit interval builds square roots

**Remember:** One step adds one, so a square root adds one half.

*True by definition.* MSC 39B12 (Iteration theory, iterative and composite equations). arXiv math.DS. Level 3: graduate.

**Definition.** Let F be a continuous strictly increasing self-map of \[a, b\] with F(x) &gt; x for a ≤ x &lt; b. Build a coordinate h in which F adds one: pick a continuous increasing bijection h from \[a, F(a)\] onto \[0, 1\], and set h(Fⁿ(x)) = h(x) + n.

**Problem.** For every c strictly between a and F(a), some continuous strictly increasing self-map g of \[a,b\] satisfies g(a)=c and g∘g=F.

**How the definition helps.** In this coordinate a square root is translation by one half, and choosing h(c) = 1/2 makes g(a) = c (our own). The points Fⁿ(a) increase to b, so h is a continuous increasing bijection from \[a, b) onto \[0, ∞). Pulling back translation by 1/2 defines g below b, and g(b) = b keeps g continuous.

**Paper or page:** [A sufficient condition for existence of iterative roots of PM functions without the characteristic endpoints condition](https://arxiv.org/abs/2109.12747v1). It says: “has a continuous and strictly increasing iterative root φ of order 2”

**Sources:**

- [A sufficient condition for existence of iterative roots of PM functions without the characteristic endpoints condition](https://arxiv.org/abs/2109.12747v1)

### Diagonal values simplify mixed differences

**Remember:** After p differences, each increment must occupy one slot.

*True by definition.* MSC 39B22 (Functional equations for real functions), 39A70. arXiv math.CA. Level 3: graduate.

**Definition.** For p ≥ 1, let F be a symmetric function on ℝᵖ that is additive in each variable, with diagonal f(x) = F(x, …, x). Expand f(x + h) by additivity; the forward difference f(x + h) − f(x) keeps only the terms with h in at least one slot.

**Problem.** For any p real increments, taking their successive differences of f gives p! times F evaluated at those increments. All higher differences vanish.

**How the definition helps.** After p differences with increments h₁, …, hₚ, only the terms with each increment in exactly one slot survive (our own). There are p! such placements, and symmetry gives each the value F(h₁, …, hₚ). This is constant in x, so one more difference kills it.

**Paper or page:** [Hyers--Ulam stability of derivations and linear functions](https://arxiv.org/abs/1307.0638v1). It says: “and let f: ℝ → ℝ be the diagonalization of F.”

**Sources:**

- [Hyers--Ulam stability of derivations and linear functions](https://arxiv.org/abs/1307.0638v1)

### Fourier coefficients untangle Raabe equations

**Remember:** Weight each Fourier coefficient by its absolute frequency to the nth power.

*Makes the theorem clean to state or prove.* MSC 39B22 (Functional equations for real functions), 42A16. arXiv math.CA. Level 3: graduate.

**Definition.** For continuous 1-periodic f with Fourier coefficients cₖ = ∫₀¹ f(x)exp(−2πikx) dx, rescale them to uₖ = \|k\|ⁿcₖ for k ≠ 0. The average of f((x + j)/a) over j = 0, …, a − 1 has coefficient cₐₖ at k. The Raabe equation asks this average to equal a⁻ⁿf.

**Problem.** Let f be continuous, 1-periodic and of mean zero, with n a positive integer and a ≥ 2 an integer scale. The Raabe equation holds exactly when uₐₖ = uₖ for every nonzero k.

**How the definition helps.** The equation therefore reads cₐₖ = a⁻ⁿcₖ for every k, and the factor \|k\|ⁿ absorbs a⁻ⁿ, giving uₐₖ = uₖ (our own). At k = 0 it holds because the mean is zero. Continuous functions are determined by their Fourier coefficients, so the converse holds.

**Paper or page:** [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1). It says: “uₐₖ = uₖ, vₐₖ = vₖ (∀ k ∈ ℕ).”

**Sources:**

- [Characterization of the Bernoulli polynomials via the Raabe functional equation](https://arxiv.org/abs/2303.14492v1)

### Halving removes Kac–Bernstein parity terms

**Remember:** Every element has a half, so the doubles fill the group.

*Rules out counterexamples.* MSC 39B52 (Functional equations for functions with more general domains and/or ranges). arXiv math.CA. Level 4: research.

**Definition.** An abelian group G is 2-divisible if every element is a double: each x in G equals 2y for some y in G. Then the subgroup of doubles 2G is all of G, so it has only one coset.

**Problem.** Suppose positive functions f, g on a 2-divisible abelian group satisfy f(x+y)g(x−y) = f(x)f(y)g(x)g(−y) for all x, y. Then log f and log g are one shared quadratic Q, with Q(x+y)+Q(x−y) = 2Q(x)+2Q(y), plus separate additive parts and constants.

**How the definition helps.** The general solution adds terms that are constant on each coset of the doubles 2G, and a 2-divisible group has only one coset, so these terms are constant. On ℤ, where 2ℤ has two cosets, our own example f = e on odd integers, f = 1 on even integers and g = 1/f satisfies the equation. Yet log f is bounded and not constant, which no quadratic plus additive function on ℤ can be.

**Paper or page:** [Solution of the Kac--Bernstein functional equation on Abelian groups in the class of positive functions](https://arxiv.org/abs/2102.01592v1). It says: “the function r(x) is a constant on each of the cosets of the subgroup X⁽²⁾ in X.”

**Sources:**

- [Solution of the Kac--Bernstein functional equation on Abelian groups in the class of positive functions](https://arxiv.org/abs/2102.01592v1)

### Negative scaling erases entropy errors

**Remember:** Negative degree shrinks every bounded error as the inputs grow.

*Makes the theorem clean to state or prove.* MSC 39B82 (Stability, separation, extension, and related topics for functional equations). arXiv math.CA. Level 4: research.

**Definition.** Fix α &lt; 0 and a real function f on (0,1). Its homogeneous extension F(u,v) = (u+v)ᵅ f(v/(u+v)) on u, v &gt; 0 satisfies F(tu,tv) = tᵅF(u,v), so an error bounded on the line u+v = 1 decays like (u+v)ᵅ far out.

**Problem.** For x,y &gt; 0 with x+y &lt; 1, put T(x,y) = f(x) + (1−x)ᵅ f(y/(1−x)). If \|T(x,y)−T(y,x)\| has a uniform finite bound ε, then T(x,y) = T(y,x) everywhere on this domain.

**How the definition helps.** Since α &lt; 0, the uniform bound ε becomes \|E(u,v,w)\| ≤ ε(u+v+w)ᵅ for the symmetry defect E(u,v,w) = Δ(v)F(u,w) − Δ(w)F(u,v), where Δ(v)F(u,w) = F(u+v,w) − F(u,w) (our own). Commuting differences gives Δ(s)E(u,v,w) = Δ(v)E(u,s,w) − Δ(w)E(u,s,v), and letting s → ∞ sends every term containing s to zero, so E = 0 (our own). Taking (u,v,w) = (1−x−y, y, x) gives T(x,y) = T(y,x).

**Paper or page:** [Hyperstability of a functional equation](https://arxiv.org/abs/1307.0631v1). It says: “Then, and only then, there exist c,d ∈ ℝ such that f(x) = cxᵅ + d(1−x)ᵅ − d”

**Sources:**

- [Hyperstability of a functional equation](https://arxiv.org/abs/1307.0631v1)
