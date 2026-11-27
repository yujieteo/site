### A power of the unknown makes Bernoulli equations linear

**Remember:** Choose the power whose derivative cancels the nonlinear term.

*Makes the theorem clean to state or prove.* MSC 34A05 (Explicit solutions, first integrals of ordinary differential equations), 34A30. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A Bernoulli equation has the form y′ + p(t)y = q(t)yⁿ, where n is a real number other than zero or one. For y &gt; 0 define u as y raised to the power 1 − n.

**Problem.** Suppose p and q are continuous. Positive Bernoulli solutions correspond exactly to positive solutions of u′ + (1 − n)pu = (1 − n)q.

**How the definition helps.** The chosen power cancels the power of y on the right when we differentiate u. The chain rule proves the change in both directions, our own argument. The remaining work is to solve the linear equation and take the inverse power only where u is positive, our own explanation.

**Wikipedia:** [Bernoulli differential equation](https://en.wikipedia.org/wiki/Bernoulli_differential_equation). It says: “reduces any Bernoulli equation to a linear differential equation”

**Sources:** none listed. No primary source with a working link was found.

### A reciprocal integral straightens every nonstationary separable solution

**Remember:** Integrate the reciprocal only between zeros, and keep the constant solutions.

*Rules out counterexamples.* MSC 34A05 (Explicit solutions, first integrals of ordinary differential equations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For y′ = g(t)h(y), choose an interval where h never vanishes and fix a point a there. The separation coordinate H(y) is the integral of 1/h from a to y. Assume g is continuous and h has a finite bound on its difference quotients near each point.

**Problem.** Every solution stays at a zero of h or stays in one interval where h never vanishes. In that interval it satisfies H(y(t)) = H(y(s)) + ∫ₛᵗ g(r) dr.

**How the definition helps.** The reciprocal makes the chain rule cancel h and leaves a known time derivative. In our own argument, h has constant sign there, so H has an inverse, and uniqueness prevents crossing a zero. In our own example y′ = y also has y = 0, which division by y would lose.

**Wikipedia:** [Separation of variables](https://en.wikipedia.org/wiki/Separation_of_variables). It says: “If one can evaluate the two integrals, one can find a solution to the differential equation.”

**Paper or page:** [Solution to Separable Differential Equation/General Result](https://proofwiki.org/wiki/Solution_to_Separable_Differential_Equation/General_Result). It says: “Its general solution is found by solving the integration”

**Sources:** none listed. No primary source with a working link was found.

### Exact equations give level sets

**Remember:** An exact equation keeps its potential constant.

*True by definition.* MSC 34A05 (Explicit solutions, first integrals of ordinary differential equations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The equation M dx + N dy = 0 is exact if some differentiable function f has partial derivatives M and N in that order.

**Problem.** A differentiable graph on an interval solves an exact equation exactly when f is constant along the graph.

**How the definition helps.** The potential f makes the equation say that its derivative along the graph vanishes. In our own account, the chain rule gives this statement immediately. The alternative test compares ∂M/∂y and ∂N/∂x. For continuously differentiable coefficients on a simply connected open region, equality guarantees a potential.

**Paper or page:** [ProofWiki](https://proofwiki.org/wiki/Solution_to_Exact_Differential_Equation). It says: “The general solution of such an equation is: f(x, y) = C”

**Sources:** none listed. No primary source with a working link was found.

### A Lipschitz condition makes solutions of differential equations unique

**Remember:** Lipschitz bounds the slope of every chord, so solutions cannot split.

*Rules out counterexamples.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations), 26A16. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A function f(t, y) is Lipschitz in y when there is a constant L with \|f(t, y₁) − f(t, y₂)\| ≤ L\|y₁ − y₂\|. The constant L does not depend on t.

**Problem.** If f is continuous and Lipschitz in y, the initial value problem y′ = f(t, y), y(t₀) = y₀ has exactly one solution near t₀.

**How the definition helps.** The Lipschitz condition makes the Picard integral operator a contraction on a short time interval, and the Banach fixed-point theorem gives exactly one fixed point. Without it uniqueness fails, because y²ᐟ³ is not Lipschitz near 0. For a ≠ 0, y′ = a y²ᐟ³ with y(0) = 0 has the solution y = 0. It also has the solution equal to (at/3)³ for t &lt; 0 and 0 for t ≥ 0. The result is only local: y′ = 1 + y² with y(0) = 0 has the solution tan t only for \|t\| &lt; π/2 (our own example).

**Wikipedia:** [Picard–Lindelöf theorem](https://en.wikipedia.org/wiki/Picard%E2%80%93Lindel%C3%B6f_theorem). It says: “The uniqueness theorem does not apply because the derivative of the function f(y) = y²ᐟ³ is not bounded in the neighborhood of y = 0 and therefore it is not Lipschitz continuous, violating the hypothesis of the theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Derivative coordinates turn higher order equations into first order systems

**Remember:** Keep the derivatives that the next step needs.

*Makes the theorem clean to state or prove.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations), 34A30. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For an equation of order n, use y and its successive derivatives through order n − 1 as coordinates of one state vector.

**Problem.** An equation that gives the highest derivative in terms of time and these coordinates has an equivalent first-order system for the state vector. Its first coordinate recovers y, and its initial state records all the prescribed derivatives.

**How the definition helps.** Each coordinate differentiates to the next, so only the last coordinate needs the original equation, our own argument. The chain of coordinate equations also proves the converse and supplies the required derivatives of y, our own argument. This equivalence transfers first-order existence and uniqueness theorems to higher order equations.

**nLab:** [ordinary differential equation](https://ncatlab.org/nlab/show/ordinary+differential+equation). It says: “a higher-order differential equation can be turned into a system of first-order equations.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithmic time simplifies Euler equations

**Remember:** Logarithms turn changes of scale into shifts.

*True by definition.* MSC 34A25 (Analytical theory of ordinary differential equations: series, transformations, transforms, operational calculus, etc.), 34A30. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For x &gt; 0 define D by Dy = xy′. A second-order Euler equation with constant coefficients uses x²y″ = D(Dy) − Dy together with Dy and y.

**Problem.** Set t = log x and write Y(t) = y(exp t). Then x²y″ + axy′ + by = 0 becomes Y″ + (a − 1)Y′ + bY = 0.

**How the definition helps.** Logarithmic time turns the scale derivative D into ordinary differentiation, making every coefficient constant. In our own calculation, the chain rule gives dY/dt = Dy at x = exp(t). Applying this rule twice gives the transformed equation. One must still solve that equation and substitute t = log x.

**Wikipedia:** [Cauchy–Euler equation](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Euler_equation). It says: “can be used to reduce this equation to a linear differential equation with constant coefficients.”

**Sources:** none listed. No primary source with a working link was found.

### A clock coordinate makes a time dependent equation autonomous

**Remember:** Put the clock inside the state and the rule stops using outside time.

*Makes the theorem clean to state or prove.* MSC 34A26 (Geometric methods in ordinary differential equations), 34A12. arXiv math.DS, math.CA. Level 1: early undergraduate.

**Definition.** An autonomous system gives each derivative as a function of the current state alone. For x′ = f(t,x), include a clock s in the state and set s′ = 1 and x′ = f(s,x).

**Problem.** Every solution starting at time t₀ corresponds to a solution of this autonomous system with starting clock s(0) = t₀. The clock and position at elapsed time τ are t₀ + τ and x(t₀ + τ).

**How the definition helps.** The clock equation gives s(τ) = t₀ + τ, so the position obeys the original time-dependent rule, our own argument. Conversely, adjoining that clock to any original solution gives a solution of the enlarged system, our own argument. To use this as a flow, one still needs the original existence and uniqueness theorem.

**Wikipedia:** [Autonomous system (mathematics)](https://en.wikipedia.org/wiki/Autonomous_system_%28mathematics%29). It says: “does not explicitly depend on the independent variable.”

**Sources:** none listed. No primary source with a working link was found.

### A nonzero leading coefficient keeps linear initial values free

**Remember:** Divide by the leading coefficient only where it stays nonzero.

*Rules out counterexamples.* MSC 34A30 (Linear ordinary differential equations and systems), 34A12. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A linear equation a(t)y″ + b(t)y′ + c(t)y = g(t) is in normal form when a(t) = 1 throughout the interval. If a never vanishes, division by a gives normal form.

**Problem.** Suppose a, b, c and g are continuous on an interval and a never vanishes there. Each prescribed value and slope at an interior point determine exactly one solution on the interval.

**How the definition helps.** Division by a gives a continuous formula for y″ in terms of t, y and y′ (our own argument). The existence and uniqueness theorem for linear systems applies to the pair (y,y′). In our own example, ty″ − y′ = 0 admits every y = Ct² with value and slope zero at t = 0.

**Paper or page:** [Existence and Uniqueness of Solution for Linear Second Order ODE with two Initial Conditions](https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Solution_for_Linear_Second_Order_ODE_with_two_Initial_Conditions). It says: “has a unique particular solution y(x) on \[a,b\] such that”

**Sources:** none listed. No primary source with a working link was found.

### Integrating factors reduce equations to integrals

**Remember:** Multiply first, then integrate the product.

*True by definition.* MSC 34A30 (Linear ordinary differential equations and systems), 34A05. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For y′ + py = q, an integrating factor is a nowhere-zero function μ for which μ(y′ + py) equals (μy)′ for every differentiable y.

**Problem.** Let p and q be continuous on an interval, and let P be an antiderivative of p. With μ = exp(P), the solutions are exactly the functions for which μy is an antiderivative of μq.

**How the definition helps.** Choosing μ to give a product derivative reduces the equation to one integration. In our own calculation, matching coefficients in the product rule gives μ′ = pμ. Taking μ = exp(P) solves this auxiliary equation.

**Paper or page:** [ProofWiki](https://proofwiki.org/wiki/Integrating_Factor_for_First_Order_ODE/Function_of_One_Variable). It says: “\\mu(x) = e<sup>\\int g(x)\\,dx</sup> is an integrating factor for (1).”

**Sources:** none listed. No primary source with a working link was found.

### Reciprocal distance from a Riccati solution makes the equation linear

**Remember:** Subtract a known solution, then take the reciprocal.

*Makes the theorem clean to state or prove.* MSC 34A05 (Explicit solutions, first integrals of ordinary differential equations), 34A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Riccati equation has the form y′ = a(t)y² + b(t)y + c(t). Given one solution u, use the new unknown v = 1/(y − u) where y differs from u.

**Problem.** For continuous coefficients, solutions y distinct from u correspond exactly to nowhere-zero solutions of v′ + (2au + b)v = −a on the same interval.

**How the definition helps.** Subtracting u cancels the constant term, and the reciprocal cancels the remaining square (our own calculation). Uniqueness prevents distinct solutions from meeting. Differentiating v gives the linear equation, and y = u + 1/v recovers the original solution wherever v stays nonzero.

**Wikipedia:** [Riccati equation](https://en.wikipedia.org/wiki/Riccati_equation). It says: “Its standard substitution is z = 1/s, which gives the linear equation”

**Sources:** none listed. No primary source with a working link was found.

### Riccati equations have global solutions on the projective line

**Remember:** Let y pass through infinity and the blow-up becomes an ordinary point.

*Rules out counterexamples.* MSC 34A05 (Explicit solutions, first integrals of ordinary differential equations), 34A12. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Riccati equation is a first-order equation dy/dt = a₀(t) + a₁(t) y + a₂(t) y². Its solutions may take values in the projective line ℝP¹ or ℂP¹, not only in the line ℝ or ℂ. The projective line is the line with one extra point at infinity.

**Problem.** If the coefficients are continuous for all t, every solution with values in the projective line exists for all time. It depends on the initial value through a fractional linear map y(t) = (A(t)y(0) + B(t))/(C(t)y(0) + D(t)).

**How the definition helps.** On the projective line the point at infinity is an ordinary point, so a blow-up only passes through it and the solution continues. On the ordinary line, dy/dt = 1 + y² gives y = tan t, which blows up in finite time. The equation is the projective form of a linear 2 × 2 system, whose solutions exist for all time (our own). So the flow acts by fractional linear maps, as linear equations act by affine maps (our own).

**nLab:** [Riccati equation](https://ncatlab.org/nlab/show/Riccati+equation). It says: “solutions of Riccati equations can blow up in finite time; however, these solutions become defined for all time if we let y take values in the projective line rather than the affine line”

**Sources:** none listed. No primary source with a working link was found.

### The exactness test identifies integrating factors in one variable

**Remember:** Divide the difference of cross derivatives by N and check whether only x remains.

*Makes the theorem clean to state or prove.* MSC 34A05 (Explicit solutions, first integrals of ordinary differential equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** An integrating factor is a nowhere-zero differentiable multiplier μ for which μM and μN are the two partial derivatives of one function. Seek a factor depending only on x on an open rectangle where M and N have continuous first derivatives and N never vanishes.

**Problem.** Such a factor exists exactly when (∂ᵧM − ∂ₓN)/N depends only on x. If that quotient is g(x), one factor is exp of any antiderivative of g.

**How the definition helps.** A multiplier that depends only on x leaves only one derivative in the exactness test, our own explanation. Equating the cross derivatives of μM and μN gives μ′/μ = g, our own calculation. Sufficiency uses the theorem that matching cross derivatives on a rectangle give a potential.

**nLab:** [Poincaré lemma](https://ncatlab.org/nlab/show/Poincar%C3%A9+lemma). It says: “a closed differential 1-form ω is exact”

**Paper or page:** [Integrating Factor for First Order ODE/Function of One Variable](https://proofwiki.org/wiki/Integrating_Factor_for_First_Order_ODE/Function_of_One_Variable). It says: “is a function of x only.”

**Sources:** none listed. No primary source with a working link was found.

### A linear growth bound rules out finite time escape

**Remember:** A linear growth bound keeps the state finite over every finite time.

*Rules out counterexamples. Confidence: medium.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A right side f has at most linear growth if ‖f(t,x)‖ ≤ A + B‖x‖ for nonnegative constants A and B. Allow new constants on each bounded closed time interval, but require the bound for every state x.

**Problem.** Suppose f is continuous on ℝ × ℝⁿ and Lipschitz in the state variable on each compact box. Under the linear growth bound, every initial value gives a unique solution for all real times.

**How the definition helps.** Linear growth bounds the speed by A + B‖x‖, so Grönwall’s inequality bounds the state on each finite time interval (our own argument). The same estimate applies with time reversed. A bounded solution can continue past any finite endpoint by the continuation theorem. In our own example, y′ = y² with y(0) = 1 gives y(t) = 1/(1 − t) for t &lt; 1.

**Wikipedia:** [Ordinary differential equation](https://en.wikipedia.org/wiki/Ordinary_differential_equation). It says: “if the conditions of Grönwall's inequality are met.”

**Sources:** none listed. No primary source with a working link was found.

### Exponentially weighted distance makes Picard iteration work on long intervals

**Remember:** Give later errors less weight to make the integral map shrink distances.

*True by definition. Confidence: medium.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Picard step sends a continuous curve x to the curve t ↦ y₀ + ∫₀ᵗ f(s,x(s)) ds. The weighted distance between two curves is the maximum of exp(−kt) times their separation on \[0,T\].

**Problem.** Suppose f is continuous on \[0,T\] × ℝⁿ and satisfies ‖f(t,x) − f(t,y)‖ ≤ L‖x − y‖. Picard iteration converges uniformly from every continuous curve to the unique solution with initial value y₀.

**How the definition helps.** The weight bounds the distance after one step by L/k times the original distance, by our own integral estimate. Choosing k &gt; L makes each step shrink distances. Since exp(−kT) ≤ exp(−kt) ≤ 1, both distances give the same convergent and Cauchy sequences (our own argument). The contraction mapping theorem gives convergence to a fixed point, which solves the equation by differentiation.

**nLab:** [ordinary differential equation](https://ncatlab.org/nlab/show/ordinary+differential+equation). It says: “Thinking of Picard iteration as an operator between Banach spaces of continuous functions, use Lipschitz continuity and boundedness”

**Paper or page:** [Fixed Point Formulation of Explicit ODE](https://proofwiki.org/wiki/Fixed_Point_Formulation_of_Explicit_ODE). It says: “Then a fixed point of T in 𝒳 is a solution to the above ODE.”

**Sources:** none listed. No primary source with a working link was found.

### Finite maximal time forces escape

**Remember:** A solution cannot stop where a uniform local restart is possible.

*Makes the theorem clean to state or prove.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** Call a solution maximal if no solution extends it to a strictly longer interval. This distinguishes the longest possible interval from any smaller interval on which the same solution is defined.

**Problem.** For a smooth vector field on an open set, a maximal trajectory with a finite forward endpoint eventually leaves every compact subset of that set.

**How the definition helps.** In our own argument, maximality turns a local restart into a contradiction. If the trajectory visits one compact set arbitrarily near its endpoint, local existence gives all those visits a common positive restart time. Starting sufficiently late extends the trajectory past its endpoint. Uniqueness makes the two trajectories agree where their time intervals overlap.

**Wikipedia:** [Ordinary differential equation](https://en.wikipedia.org/wiki/Ordinary_differential_equation). It says: “A solution that has no extension is called a maximal solution.”

**Sources:** none listed. No primary source with a working link was found.

### Integral solutions give a bound for errors in data and forcing

**Remember:** Integrate first so both error sources enter the same bound.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** An integral solution with starting value x₀ satisfies x(t) = x₀ + ∫₀ᵗ f(s,x(s)) ds. For continuous f this describes the same curves as x′ = f(t,x) with x(0) = x₀. Assume f changes by at most L times the distance between states at each fixed time.

**Problem.** Let x and y start at x₀ and y₀ with continuous right sides f and g on \[0,T\]. If ‖f − g‖ ≤ ε throughout their common domain, then ‖x(t) − y(t)‖ ≤ (‖x₀ − y₀‖ + εt)exp(Lt).

**How the definition helps.** The integral form puts the initial separation and the accumulated error in the same bound (our own argument). Fix t and let d(s) denote the separation at time s. For s ≤ t the triangle inequality gives d(s) ≤ ‖x₀ − y₀‖ + εt + L∫₀ˢ d(r) dr. Grönwall’s inequality gives the stated bound.

**Wikipedia:** [Grönwall's inequality](https://en.wikipedia.org/wiki/Gr%C3%B6nwall%27s_inequality). It says: “an important tool to obtain various estimates”

**Paper or page:** [Fixed Point Formulation of Explicit ODE](https://proofwiki.org/wiki/Fixed_Point_Formulation_of_Explicit_ODE). It says: “(Tx)(t) = x₀ + ∫ₜ₀ᵗ f(s,x(s)) ds”

**Sources:** none listed. No primary source with a working link was found.

### One-sided bounds control separation

**Remember:** Bound only the part of velocity that pulls the states apart.

*True by definition.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations). arXiv math.DS, math.AP. Level 2: later undergraduate.

**Definition.** Write b for the velocity field. It has forward one-sided Lipschitz bound L if (b(x) − b(y)) · (x − y) ≤ L\|x − y\|² for every pair. This bounds the component that increases separation, whereas an ordinary Lipschitz bound controls the entire velocity difference.

**Problem.** Two solutions satisfy \|x(t) − y(t)\| ≤ exp(Lt)\|x(0) − y(0)\| for forward times where both exist. In particular they cannot split from the same starting point.

**How the definition helps.** In our own proof, the dot product equals half the time derivative of squared distance between solutions. Multiplying squared distance by exp(−2Lt) therefore gives a nonincreasing quantity. Taking square roots yields the estimate. The paper states the lower bound, which becomes our upper bound when velocity changes sign.

**Paper or page:** [Transport equations and flows with one-sided Lipschitz velocity fields](https://arxiv.org/abs/2306.13288v1). It says: “(B(x) − B(y)) · (x − y) ≥ −C\|x − y\|²”

**Sources:**

- [Transport equations and flows with one-sided Lipschitz velocity fields](https://arxiv.org/abs/2306.13288v1)

### Differentiating a Frobenius family gives the double root logarithm

**Remember:** At a double root, one derivative in the exponent produces the missing logarithm.

*Makes the theorem clean to state or prove.* MSC 34A25 (Analytical theory of ordinary differential equations: series, transformations, transforms, operational calculus, etc.), 34A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For t²y″ + tp(t)y′ + q(t)y = 0 with analytic p and q near zero, set I(r) = r(r − 1) + p(0)r + q(0). Near a double root r₀, define F(r,t) as tʳ times a series starting with one. Choose its coefficients in order so substitution cancels every power after tʳ.

**Problem.** For sufficiently small t &gt; 0, F(r₀,t) and its derivative with respect to r at r₀ are independent solutions. The second equals F(r₀,t) log t plus a convergent power series multiplied by t raised to r₀.

**How the definition helps.** Substitution leaves only I(r)tʳ, whose derivative in r vanishes at the double root (our own calculation). Differentiating F there therefore gives a solution. Differentiating tʳ produces the logarithm, making the ratio to the first solution unbounded near zero. The analytic work is justifying differentiation of the series in r within a common interval of convergence.

**Wikipedia:** [Frobenius method](https://en.wikipedia.org/wiki/Frobenius_method). It says: “with respect to the parameter r, mentioned above.”

**Sources:**

- [Ferdinand Georg Frobenius (1873), Ueber die Integration der linearen Differentialgleichungen durch Reihen](https://doi.org/10.1515/crll.1873.76.214)

### Noninteger root gaps give two pure Frobenius series

**Remember:** A noninteger gap keeps every later coefficient away from the other root.

*Rules out counterexamples.* MSC 34A25 (Analytical theory of ordinary differential equations: series, transformations, transforms, operational calculus, etc.), 34A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For t²y″ + t p(t)y′ + q(t)y = 0, let p and q have convergent power series at zero. The indicial roots solve r(r − 1) + p(0)r + q(0) = 0. Call two real roots nonresonant if their difference is not an integer.

**Problem.** For nonresonant roots, each root gives a convergent Frobenius solution, a power of t times a series with nonzero constant term. The two solutions are independent near zero on the positive side.

**How the definition helps.** The root gap makes the indicial polynomial nonzero at each root plus any positive integer, our own explanation. Distinct leading powers give independence, while the Frobenius convergence proof still does the analytic work, our own explanation. Our own counterexample is t²y″ + ty = 0, with roots 0 and 1. A series starting at power zero would force its constant term to vanish.

**Wikipedia:** [Frobenius method](https://en.wikipedia.org/wiki/Frobenius_method). It says: “If the difference between the roots is not an integer”

**Sources:**

- [Ferdinand Georg Frobenius (1873), Ueber die Integration der linearen Differentialgleichungen durch Reihen](https://doi.org/10.1515/crll.1873.76.214)

### Scaling Taylor coefficients by factorials makes differentiation a shift

**Remember:** Divide by factorials so taking a derivative only moves the list.

*True by definition.* MSC 34A25 (Analytical theory of ordinary differential equations: series, transformations, transforms, operational calculus, etc.), 34A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** In a factorial-scaled formal series, the term with index k is aₖtᵏ/k!. A formal series records the coefficients without requiring convergence.

**Problem.** Suppose p and q have Taylor series at zero. For y″ + py′ + qy = 0, each choice of a₀ and a₁ determines exactly one formal solution.

**How the definition helps.** Differentiating tᵏ/k! gives the preceding basis term, so the coefficient list shifts without the extra multipliers of ordinary powers. At index k, y″ contributes aₖ₊₂, while py′ and qy use only coefficients through aₖ₊₁ (our own argument). The equation therefore determines aₖ₊₂ from earlier terms. Convergence requires a separate estimate.

**Wikipedia:** [Power series solution of differential equations](https://en.wikipedia.org/wiki/Power_series_solution_of_differential_equations). It says: “A much simpler way of solving this equation (and power series solution in general) using the Taylor series form of the expansion.”

**Sources:** none listed. No primary source with a working link was found.

### The lowest power in a Frobenius series fixes its starting exponent

**Remember:** Test the starting power against the constant parts of the coefficients.

*Makes the theorem clean to state or prove.* MSC 34A25 (Analytical theory of ordinary differential equations: series, transformations, transforms, operational calculus, etc.), 34A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Consider t²y″ + t p(t)y′ + q(t)y = 0 with p and q given by convergent series at zero. A Frobenius series is a power tʳ times a power series with nonzero constant term. The indicial polynomial is I(r) = r(r − 1) + p(0)r + q(0).

**Problem.** The starting exponent of a Frobenius solution must be a root of I. For the larger real root, or a double root, exactly one such solution exists up to scaling near zero for t &gt; 0.

**How the definition helps.** Only the first series term and the constant terms of p and q contribute to the lowest power (our own calculation). Its coefficient is the nonzero starting coefficient times I(r). At the larger or double root, I(r + k) never vanishes for positive integers k, so the recurrence determines all later terms. The Frobenius convergence theorem supplies convergence near zero.

**Wikipedia:** [Frobenius method](https://en.wikipedia.org/wiki/Frobenius_method). It says: “the coefficients of the generalized power series obey a recurrence relation”

**Sources:**

- [Ferdinand Georg Frobenius (1873), Ueber die Integration der linearen Differentialgleichungen durch Reihen](https://doi.org/10.1515/crll.1873.76.214)

### A change of starting time makes transition matrices compose

**Remember:** The intermediate matrix and its inverse cancel.

*True by definition.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** A fundamental matrix U(t) has columns forming a basis of solutions of x′ = A(t)x. Define Φ(t,s) = U(t)U(s)⁻¹ as the transition matrix that sends a state at s to its state at t.

**Problem.** For continuous A on an interval and any times r, s and t there, Φ(t,s)Φ(s,r) = Φ(t,r). Also Φ(t,s)⁻¹ = Φ(s,t).

**How the definition helps.** Writing the transition as U(t)U(s)⁻¹ makes the intermediate matrices cancel (our own argument). Existence and uniqueness give an invertible map from solution coefficients to states at each time. The product takes any starting state to its unique later state, so changing the solution basis leaves the transition unchanged.

**Wikipedia:** [State-transition matrix](https://en.wikipedia.org/wiki/State-transition_matrix). It says: “Φ(t,τ) ≡ U(t)U⁻¹(τ)”

**Paper or page:** [General Vector Solution of Fundamental Matrix](https://proofwiki.org/wiki/General_Vector_Solution_of_Fundamental_Matrix). It says: “Φ(t)c is a general solution of x′ = A(t)x.”

**Sources:** none listed. No primary source with a working link was found.

### A moving solution basis removes the homogeneous part of the equation

**Remember:** In a basis that follows the unforced motion, only forcing changes the coordinates.

*True by definition.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x′ = A(t)x + b(t), choose a square matrix U whose columns form a basis of solutions when b = 0. Variation of parameters replaces constant coefficients in x = Uc with functions c(t) = U(t)⁻¹x(t).

**Problem.** For continuous coefficients and forcing, the solution with x(s) = xₛ is x(t) = U(t)\[U(s)⁻¹xₛ + ∫ₛᵗ U(r)⁻¹b(r) dr\].

**How the definition helps.** In the moving basis, the product rule cancels the homogeneous term and leaves c′ = U⁻¹b, our own calculation. The work lies in finding the fundamental matrix and showing that it stays invertible by initial-value uniqueness, our own explanation.

**Wikipedia:** [Variation of parameters](https://en.wikipedia.org/wiki/Variation_of_parameters). It says: “The general method of variation of parameters allows for solving an inhomogeneous linear equation”

**Paper or page:** [General Vector Solution of Fundamental Matrix](https://proofwiki.org/wiki/General_Vector_Solution_of_Fundamental_Matrix). It says: “Φ(t)c is a general solution of x′ = A(t)x.”

**Sources:** none listed. No primary source with a working link was found.

### A polynomial in differentiation gives all repeated root solutions

**Remember:** Remove the exponential and a repeated root becomes repeated differentiation.

*Makes the theorem clean to state or prove.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let D mean differentiation. The characteristic polynomial p of a homogeneous constant-coefficient equation records the coefficient of each derivative as the coefficient of the corresponding power. The equation is then p(D)y = 0.

**Problem.** For every root λ of multiplicity m, take the functions exp(λt)tʲ for integers j from zero through m − 1. Together these functions form a complex basis for all solutions.

**How the definition helps.** Factoring p turns a root of multiplicity m into m copies of D − λ (our own argument). Acting on exp(λt) times a polynomial, each copy differentiates only the polynomial after the exponential is factored out. The other root factors kill the other families and act invertibly on this one, proving independence. The initial-value theorem gives dimension equal to the degree of p, so the list spans.

**Wikipedia:** [Characteristic equation (calculus)](https://en.wikipedia.org/wiki/Characteristic_equation_%28calculus%29). It says: “The roots may be real or complex, as well as distinct or repeated.”

**Paper or page:** [Derivation of Auxiliary Equation to Constant Coefficient LSOODE](https://proofwiki.org/wiki/Derivation_of_Auxiliary_Equation_to_Constant_Coefficient_LSOODE). It says: “The fact that the solutions of (2) dictate the general solution of (1) can be derived.”

**Sources:** none listed. No primary source with a working link was found.

### Initial data give coordinates on the linear solution space

**Remember:** Count the freely chosen starting values to find the dimension.

*Makes the theorem clean to state or prove.* MSC 34A30 (Linear ordinary differential equations and systems), 34A12. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Fix a time s in the interval of a homogeneous linear equation, whose right side is zero. The initial-data map sends each solution to its value and its derivatives through order n − 1 at s.

**Problem.** For an equation of order n with continuous coefficients and leading coefficient one, the initial-data map is a linear bijection onto ℝⁿ. Thus the real solution space has dimension n.

**How the definition helps.** Initial data turn a dimension count into a question about which vectors occur and how often (our own argument). Differentiation and evaluation are linear. The linear existence theorem gives one solution for every vector, and uniqueness gives only one.

**Paper or page:** [Analysis of the Geometric Structure of Neural Networks and Neural ODEs via Morse Functions](https://arxiv.org/abs/2405.09351v3). It says: “has a unique solution y: ℐ → ℝᵐ.”

**Sources:** none listed. No primary source with a working link was found.

### One Wronskian value tests independence

**Remember:** For two solutions of one linear equation, a single Wronskian value is enough.

*Rules out counterexamples.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.DS. Level 2: later undergraduate.

**Definition.** Take two solutions of y″ + py′ + qy = 0 on an interval with continuous coefficients p and q. Their Wronskian is the determinant whose columns give each solution and its first derivative at the same point.

**Problem.** The two solutions are linearly independent if and only if their Wronskian is nonzero at any one point.

**How the definition helps.** The determinant tests independence of the two initial data vectors at one point. In our own proof, uniqueness makes any linear combination with zero initial data vanish throughout the interval. Without a common equation, x² and x\|x\| are independent on (−1,1) although their Wronskian vanishes everywhere.

**nLab:** [Wronskian](https://ncatlab.org/nlab/show/Wronskian). It says: “The Wronskian is its determinant.”

**Wikipedia:** [Wronskian](https://en.wikipedia.org/wiki/Wronskian). It says: “A common misconception is that W = 0 everywhere implies linear dependence.”

**Paper or page:** [Zero Wronskian of Solutions of Homogeneous Linear Second Order ODE iff Linearly Dependent](https://proofwiki.org/wiki/Zero_Wronskian_of_Solutions_of_Homogeneous_Linear_Second_Order_ODE_iff_Linearly_Dependent). It says: “the Wronskian W(y₁, y₂) of y₁ and y₂ is zero everywhere on \[a,b\].”

**Sources:** none listed. No primary source with a working link was found.

### Root multiplicity fixes the trial space for exponential polynomial forcing

**Remember:** Multiply the usual trial polynomial by one power of t per repeated root.

*Makes the theorem clean to state or prove.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let p(D) be a nonzero constant-coefficient polynomial in differentiation D. Fix a number λ and a nonnegative integer d, and let m count how often λ occurs as a root of p. The trial space consists of exp(λt)tᵐQ(t) with Q a polynomial of degree at most d.

**Problem.** For each polynomial P of degree at most d, p(D)y = exp(λt)P(t) has exactly one solution in this trial space.

**How the definition helps.** The factor tᵐ makes m differentiations a bijection from the trial polynomial factors onto polynomials of degree at most d (our own argument). Removing exp(λt) shifts p(D) to p(D + λ), which factors as q(D)Dᵐ. Since q(0) is nonzero, q(D) preserves degree and multiplies every leading coefficient by q(0). It therefore acts invertibly on this finite-dimensional polynomial space.

**Wikipedia:** [Method of undetermined coefficients](https://en.wikipedia.org/wiki/Method_of_undetermined_coefficients). It says: “we have to multiply our guess by a sufficiently large power of x to make it linearly independent”

**Sources:** none listed. No primary source with a working link was found.

### The ratio to one solution gives a second by integration

**Remember:** Find how the ratio changes, then multiply back by the known solution.

*Makes the theorem clean to state or prove.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For y″ + py′ + qy = 0, let u be a known solution with no zeros on the interval. Use v = y/u as the unknown instead of y.

**Problem.** Assume p and q are continuous on the interval and choose any base point s there. Then y(t) = u(t)∫ₛᵗ exp(−∫ₛʳ p(z) dz)/u(r)² dr is a second independent solution.

**How the definition helps.** Writing y = uv cancels every term containing v without a derivative because u already solves the equation (our own calculation). The product rule gives (u²v′)′ = −p u²v′. Solving this first-order equation with u(s)²v′(s) = 1 and integrating gives the formula. The ratio v has nonzero derivative, so y is independent of u.

**Wikipedia:** [Reduction of order](https://en.wikipedia.org/wiki/Reduction_of_order). It says: “a second linearly independent solution to this differential equation”

**Sources:** none listed. No primary source with a working link was found.

### Wronskian rows make Abel’s formula a scalar equation

**Remember:** In the derivative of the determinant, only the last row can contribute.

*Makes the theorem clean to state or prove.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For n solutions of a homogeneous linear equation of order n, define their Wronskian as a determinant. Its rows list the solution values, then their first derivatives, and so on through order n − 1.

**Problem.** Suppose the leading coefficient is one and all coefficients are continuous. If p multiplies the derivative of order n − 1, then the Wronskian satisfies W(t) = W(s) exp(−∫ₛᵗ p(r) dr).

**How the definition helps.** The determinant makes every differentiated row except the last repeat an existing row (our own argument). Such determinants vanish. The equation expresses the last row’s derivative as a sum of rows, and only its own coefficient −p contributes. Thus W′ = −pW, whose solution gives the formula.

**nLab:** [Wronskian](https://ncatlab.org/nlab/show/Wronskian). It says: “The Wronskian is its determinant.”

**Wikipedia:** [Abel's identity](https://en.wikipedia.org/wiki/Abel%27s_identity). It says: “Differentiating the Wronskian using the product rule gives”

**Sources:** none listed. No primary source with a working link was found.

### Exponential weights give both forms of Grönwall’s inequality

**Remember:** Weight a bound by the inverse of its expected growth.

*Makes the theorem clean to state or prove.* MSC 34A40 (Differential inequalities involving functions of a single real variable), 26D10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For continuous b ≥ 0 on \[0,T\], define the integrating factor w(t) = exp(−∫₀ᵗ b(s) ds). It multiplies a function by the reciprocal of its expected growth.

**Problem.** If u is differentiable and u′ ≤ bu, then wu ≤ u(0). If continuous u satisfies u(t) ≤ a + ∫₀ᵗ b(s)u(s) ds for constant a ≥ 0, then wu ≤ a.

**How the definition helps.** The weight cancels the growth term because w′ = −bw. Thus (wu)′ ≤ 0 in the differential case. For the integral case, call the right side v and observe that v′ = bu ≤ bv. Applying the differential bound to v gives wu ≤ wv ≤ a.

**Wikipedia:** [Grönwall's inequality](https://en.wikipedia.org/wiki/Gr%C3%B6nwall%27s_inequality). It says: “Thus the derivative of the function u(t)/v(t) is non-positive”

**Sources:**

- [T. H. Gronwall (1919), Note on the Derivatives with Respect to a Parameter of the Solutions of a System of Differential Equations](https://doi.org/10.2307/1967124)

### Disconjugacy gives unique two-point solutions

**Remember:** No two zeros means no two solutions share the same two values.

*Rules out counterexamples.* MSC 34B05 (Linear boundary value problems for ordinary differential equations), 34C10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real equation y″ + py′ + qy = 0 is disconjugate on an interval if no nonzero solution vanishes at two distinct points there.

**Problem.** For a disconjugate homogeneous second-order linear equation with continuous coefficients, exactly one solution takes any two prescribed values at two distinct points.

**How the definition helps.** Disconjugacy makes the map taking a solution to its two boundary values injective. In our own proof, initial-value existence and uniqueness give the solution space dimension two. An injective linear map between two spaces of dimension two is surjective. Our own counterexample is y″ + y = 0, since every multiple of sin t vanishes at 0 and π.

**Paper or page:** [Strict domain monotonicity of the principal eigenvalue and a characterization of lower boundedness for the Friedrichs extension of four-coefficient Sturm-Liouville operators](https://arxiv.org/abs/2201.05948v2). It says: “there exists a unique real-valued solution u∗(λ, ·) of (τ − λ)u = 0 on (a,b)”

**Sources:**

- [Fritz Gesztesy, Roger Nichols (2022), Strict domain monotonicity of the principal eigenvalue and a characterization of lower boundedness for the Friedrichs extension of four-coefficient Sturm-Liouville operators](https://arxiv.org/abs/2201.05948v2)

### Zero flux at both ends requires a zero net load

**Remember:** Zero flux can balance only a zero net load.

*Rules out counterexamples.* MSC 34B05 (Linear boundary value problems for ordinary differential equations), 34B24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A homogeneous Neumann condition for −(py′)′ fixes the flux py′ to zero at both endpoints. Normalize the solution by requiring its integral on the interval to be zero.

**Problem.** Assume p is positive and continuously differentiable, and f is continuous on a finite interval. The normalized problem −(py′)′ = f has exactly one solution if the integral of f is zero, and none otherwise.

**How the definition helps.** Zero endpoint flux forces the integral of f to vanish, excluding even the constant load f = 1. In our own proof, the flux at x is minus the integral of f from the left endpoint to x. Dividing by p and integrating gives y up to a constant. The zero-mean condition fixes that constant.

**Wikipedia:** [Neumann boundary condition](https://en.wikipedia.org/wiki/Neumann_boundary_condition). It says: “the condition specifies the values of the derivative applied at the boundary of the domain.”

**Sources:** none listed. No primary source with a working link was found.

### A shooting residual exposes the condition for a resonant load

**Remember:** At resonance the missing endpoint condition becomes a test on the load.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34B24 (Sturm-Liouville theory), 34B05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** On \[a,b\], let Ly = −(py′)′ + qy, with p positive and continuously differentiable and q and f continuous and real. Start Ly = f with y(a) = 0 and initial flux p(a)y′(a) = s. The shooting residual is the resulting value y(b).

**Problem.** Suppose a nonzero h solves Lh = 0 with h(a) = h(b) = 0. The shooting residual can vanish exactly when the integral of hf over \[a,b\] is zero.

**How the definition helps.** The residual cannot change with the initial flux because changing that flux adds a multiple of h. In our own proof, integration by parts gives ∫ hf = y(b)p(b)h′(b). The factor p(b)h′(b) is nonzero because zero final value and flux would force h to vanish everywhere.

**Wikipedia:** [Shooting method](https://en.wikipedia.org/wiki/Shooting_method). It says: “Roots of F and solutions to the boundary value problem are equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### One extra endpoint constraint interlaces the eigenvalues

**Remember:** One extra endpoint condition places each Dirichlet eigenvalue between two mixed eigenvalues.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34B24 (Sturm-Liouville theory), 34L15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For −(py′)′ + qy = λwy, the Rayleigh quotient divides the integral of p(y′)² + qy² by the integral of wy². Mixed trial functions vanish at the left endpoint. Dirichlet trial functions also vanish at the right endpoint.

**Problem.** For a regular Sturm–Liouville problem, the nth Dirichlet eigenvalue lies strictly between mixed eigenvalues n and n + 1. The mixed conditions impose zero left value and zero right flux py′.

**How the definition helps.** One extra endpoint condition removes at most one dimension from each trial space. In our own proof, the min-max principle converts this dimension count into both weak inequalities. At a shared eigenvalue, both solutions vanish on the left, so uniqueness makes them proportional. The common solution would then have zero value and flux on the right, forcing it to vanish everywhere.

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “a result that gives a variational characterization of eigenvalues”

**Sources:** none listed. No primary source with a working link was found.

### Prüfer angles count the zeros of Dirichlet eigenfunctions

**Remember:** Each upward multiple of π marks one zero of the solution.

*Makes the theorem clean to state or prove.* MSC 34B24 (Sturm-Liouville theory), 34C10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For −(py′)′ + qy = λwy, write (py′, y) = (r cos θ, r sin θ) with r positive. The Prüfer angle θ follows this pair continuously, starting at zero for y(a) = 0 and p(a)y′(a) = 1.

**Problem.** The nth eigenfunction of a regular Dirichlet Sturm–Liouville problem has n − 1 interior zeros, numbering from one. The interior zeros of the left solution at λ count the eigenvalues strictly below λ.

**How the definition helps.** The angle counts zeros because at every multiple of π its derivative equals 1/p, which is positive. In our own argument, counting only interior crossings omits a possible zero at the right endpoint. The oscillation theorem shows that the endpoint angle increases with λ and reaches each positive multiple of π in order.

**Wikipedia:** [Shooting method](https://en.wikipedia.org/wiki/Shooting_method). It says: “The n-th excited state ψₙ(x) has n roots where ψₙ(x) = 0.”

**Sources:**

- [Charles Sturm, Mémoire sur les Équations différentielles linéaires du second ordre (1836)](https://www.numdam.org/item/JMPA_1836_1_1__106_0/)
- [Gerald Teschl, Ordinary Differential Equations and Dynamical Systems (2012), Theorems 5.17 and 5.18](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf)

### Regular Sturm–Liouville problems have a full basis of eigenfunctions

**Remember:** Finite interval, positive coefficients, one condition per end: pure eigenvalues.

*Rules out counterexamples.* MSC 34B24 (Sturm-Liouville theory), 34B09. arXiv math.CA, math.SP. Level 2: later undergraduate.

**Definition.** A Sturm–Liouville problem is the equation (p y′)′ + q y = −λ w y on an interval. It is regular if the interval \[a, b\] is finite, p, p′, q and w are continuous, and p &gt; 0 and w &gt; 0. It also needs one separated boundary condition at each end: α₁ y(a) + α₂ y′(a) = 0 and β₁ y(b) + β₂ y′(b) = 0.

**Problem.** For a regular problem, the eigenvalues are real, simple and increase to infinity. The normalized eigenfunctions form an orthonormal basis of the weighted L² space on \[a, b\].

**How the definition helps.** The regularity conditions make the resolvent of the operator compact and self-adjoint, so the spectral theorem for compact operators applies (our own). Separated conditions make each eigenvalue simple, because only one solution up to a constant meets the condition at a (our own). The conditions exclude singular problems. For example, −y″ = λy on \[0, ∞) with y(0) = 0 has no square-integrable eigenfunctions, and its spectrum is the continuous set \[0, ∞) (our own).

**Wikipedia:** [Sturm–Liouville theory](https://en.wikipedia.org/wiki/Sturm%E2%80%93Liouville_theory). It says: “If the interval is unbounded, or if the coefficients have singularities at the boundary points, one calls L singular. In this case, the spectrum no longer consists of eigenvalues alone and can contain a continuous component.”

**Sources:** none listed. No primary source with a working link was found.

### Separated endpoints give simple eigenvalues

**Remember:** One endpoint already limits starting data to a line.

*Rules out counterexamples.* MSC 34B24 (Sturm-Liouville theory). arXiv math.SP. Level 2: later undergraduate.

**Definition.** Consider −(py′)′ + qy = λwy on a finite closed interval. Assume p is continuously differentiable, q and w are real and continuous, and p and w are positive. Separated endpoint conditions impose one nontrivial homogeneous linear relation between y and y′ at each endpoint separately.

**Problem.** Each eigenvalue of a regular scalar Sturm–Liouville problem with separated conditions has a one-dimensional eigenspace.

**How the definition helps.** In our own argument, the first endpoint condition confines all allowed starting data to one line. Initial value uniqueness transfers that bound to the dimension of the eigenspace, in our own account. Our own counterexample is −y″ with periodic endpoints on \[0, 2π\], where sine and cosine share eigenvalue 1.

**Wikipedia:** [Sturm–Liouville theory](https://en.wikipedia.org/wiki/Sturm%E2%80%93Liouville_theory). It says: “is a unique eigenfunction yₙ = yₙ(x) (up to constant multiple)”

**Paper or page:** [Orthogonality of Solutions to the Sturm-Liouville Equation with Distinct Eigenvalues](https://proofwiki.org/wiki/Orthogonality_of_Solutions_to_the_Sturm-Liouville_Equation_with_Distinct_Eigenvalues). It says: “with separated boundary conditions of the form”

**Sources:** none listed. No primary source with a working link was found.

### The transfer trace detects periodic and antiperiodic modes

**Remember:** Trace two keeps a nonzero endpoint pair, and trace minus two reverses one.

*True by definition.* MSC 34B24 (Sturm-Liouville theory), 34B09. arXiv math.CA, math.DS. Level 2: later undergraduate.

**Definition.** For the regular equation −(py′)′ + qy = λwy, the transfer matrix maps the left endpoint data (y, py′) to the right endpoint data. Its trace, the sum of its diagonal entries, is the Floquet discriminant.

**Problem.** A periodic eigenvalue has discriminant 2, and an antiperiodic eigenvalue has discriminant −2. Conversely, these trace values give eigenfunctions whose right endpoint pair equals the left pair or its negative, respectively.

**How the definition helps.** The transfer matrix expresses periodic or antiperiodic matching as an eigenvalue test for 1 or −1. In our own proof, conservation of the weighted Wronskian gives determinant one. Its characteristic polynomial is therefore t² − Dt + 1, where D is the discriminant. Substitution gives the two trace tests.

**Wikipedia:** [Floquet theory](https://en.wikipedia.org/wiki/Floquet_theory). It says: “The values of E for which the Floquet multiplier satisfies ξ = ±1 are called the periodic and antiperiodic eigenvalues.”

**Paper or page:** [Spectral Properties of Singular Sturm-Liouville Operators via Boundary Triples and Perturbation Theory](https://arxiv.org/abs/2211.08744v1). It says: “if and only if D(R,λ) = 2 cos(α).”

**Sources:** none listed. No primary source with a working link was found.

### Zero extension shows why a longer interval lowers the first eigenvalue

**Remember:** Extending the interval adds competitors but cannot make zero extension the winner.

*True by definition.* MSC 34B24 (Sturm-Liouville theory), 34L15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For −(py′)′ + qy = λwy, the Rayleigh quotient divides the integral of p(y′)² + qy² by the integral of wy². Its minimum over nonzero continuous, piecewise smooth functions vanishing at both ends defines the first Dirichlet eigenvalue variationally.

**Problem.** On finite intervals assume p is positive and continuously differentiable, q and w are real and continuous, and w is positive. Extending either endpoint outward with the same coefficients strictly lowers the first Dirichlet eigenvalue.

**How the definition helps.** Extending the shorter interval’s minimizer by zero preserves its quotient and makes it a trial function on the longer interval. In our own proof, equality would make this extension a minimizer there. The variational characterization says every minimizer solves the differential equation. A solution vanishing on the added interval vanishes everywhere by uniqueness, contradicting the choice of a nonzero minimizer.

**Paper or page:** [Strict domain monotonicity of the principal eigenvalue and a characterization of lower boundedness for the Friedrichs extension of four-coefficient Sturm-Liouville operators](https://arxiv.org/abs/2201.05948v2). It says: “so that (c,d) is strictly contained in (a,b)”

**Sources:**

- [Fritz Gesztesy and Roger Nichols, Strict domain monotonicity of the principal eigenvalue and a characterization of lower boundedness for the Friedrichs extension of four-coefficient Sturm-Liouville operators, Theorem 1.1](https://arxiv.org/abs/2201.05948v2)

### A Green function adds the responses to point sources

**Remember:** Add the point responses with the load as their weight.

*True by definition.* MSC 34B27 (Green's functions for ordinary differential equations), 34B05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** On \[−π,π\], the Dirichlet Green function G(x,s) gives the response at x to a unit source at s with zero endpoint values. It is continuous at s and linear on each side. Its slope drops by one at s.

**Problem.** For continuous f, the unique solution of −y″ = f with zero endpoint values is the integral of G(x,s)f(s) over s.

**How the definition helps.** The point-source definition lets us combine responses without solving a new boundary problem for each load. In our own proof, split the integral at s = x and differentiate twice. Continuity cancels the first boundary term, and the unit drop in slope gives −y″ = f. The zero endpoint values carry over from G.

**Paper or page:** [Symmetrization of measures and the one-dimensional Poisson equation with Dirichlet boundary conditions](https://arxiv.org/abs/2506.13311v1). It says: “The solution uμ can be represented as”

**Sources:** none listed. No primary source with a working link was found.

### Ordering the two arguments makes the Green kernel symmetric

**Remember:** The lesser argument goes left, whichever variable supplied it.

*True by definition.* MSC 34B27 (Green's functions for ordinary differential equations), 34B24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For −(py′)′ + qy = 0, take nonzero solutions u and v vanishing at the left and right ends respectively. The product formula uses u at the smaller of x and s, and v at the larger. Divide their product by p(u′v − uv′).

**Problem.** Assume p is positive and continuously differentiable and q is real and continuous on a finite closed interval. If only the zero homogeneous solution vanishes at both ends, the Dirichlet Green function satisfies G(x,s) = G(s,x).

**How the definition helps.** Exchanging x and s preserves their smaller and larger values. In our own proof, the differential equation makes the denominator constant, and the endpoint assumption makes it nonzero. The product vanishes at both endpoints and its flux −pG′ jumps by one at s. These properties identify it with the point-source Green function.

**Wikipedia:** [Green's function](https://en.wikipedia.org/wiki/Green%27s_function). It says: “we may construct G(x,s) by requiring u₁(a) = 0 and u₂(b) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### A compact trap without equilibria contains a periodic orbit

**Remember:** Trap a planar trajectory away from equilibria and its future limits form a cycle.

*Rules out counterexamples.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A set is positively invariant if every forward solution starting in it stays in it while defined. A compact positively invariant set keeps a whole future trajectory in one closed, bounded place.

**Problem.** A nonempty compact positively invariant set for a continuously differentiable planar field contains a periodic orbit if it contains no equilibrium. The field must be defined on an open neighborhood of the set.

**How the definition helps.** A compact trap keeps all future limits inside, so excluding equilibria leaves only the periodic case of the Poincaré–Bendixson theorem. In our own argument, compactness allows the trajectory to continue forever and guarantees a limit point. Without the exclusion, the planar field x′ = −x traps every closed disk centered at zero and has no periodic orbit of positive length.

**Wikipedia:** [Poincaré–Bendixson theorem](https://en.wikipedia.org/wiki/Poincar%C3%A9%E2%80%93Bendixson_theorem). It says: “every non-empty compact ω-limit set of an orbit, which contains only finitely many fixed points”

**Sources:**

- [Ivar Bendixson, Sur les courbes définies par des équations différentielles (1901)](https://doi.org/10.1007/bf02403068)

### A regular conserved level cannot carry a limit cycle

**Remember:** A trajectory cannot spiral into an energy curve without sharing its energy.

*Rules out counterexamples.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A first integral is a continuously differentiable function H that stays constant on each trajectory. A regular level has nonzero gradient at each point under consideration. A limit cycle is a periodic orbit that another trajectory approaches in forward or backward time.

**Problem.** For a continuously differentiable planar field, a periodic orbit on a regular level of a first integral cannot be a limit cycle.

**How the definition helps.** A regular level leaves no separate path at the same value close to the orbit. In our own proof, continuity forces an approaching trajectory to have the same value of H. The implicit function theorem makes the level a single arc near each orbit point, and the orbit occupies that arc. Uniqueness prevents another trajectory from meeting it.

**Wikipedia:** [Limit cycle](https://en.wikipedia.org/wiki/Limit_cycle). It says: “A limit cycle is a cycle which is the limit set of some other trajectory.”

**Sources:** none listed. No primary source with a working link was found.

### A turning velocity forces an equilibrium inside a cycle

**Remember:** One turn on the boundary cannot shrink to no turns without a zero.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** The index on a simple closed curve is the number of full turns of the field direction along one counterclockwise circuit. The field must be nonzero on the curve.

**Problem.** Every nonconstant periodic orbit of a continuously differentiable planar field has index one when traversed counterclockwise. It encloses an equilibrium if the field is defined throughout the interior.

**How the definition helps.** The index counts turns, and the velocity points consistently along or against the counterclockwise tangent. In our own proof, the turning-tangent theorem gives one full turn in either case. Without an enclosed zero, the direction would extend over the disk and its boundary loop could shrink to a point. Its turn count would then be zero.

**Wikipedia:** [Vector field](https://en.wikipedia.org/wiki/Vector_field). It says: “by dividing each vector on this sphere by its length”

**Sources:** none listed. No primary source with a working link was found.

### Dulac weights rule out cycles

**Remember:** A closed orbit has zero outward flux even after weighting.

*Rules out counterexamples.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations), 34C07. arXiv math.DS. Level 2: later undergraduate.

**Definition.** A Dulac function for a planar velocity field F is a continuously differentiable weight B making the divergence of BF strictly positive or strictly negative. Divergence is the sum of the two matching coordinate derivatives.

**Problem.** A continuously differentiable autonomous planar field with such a weight on a simply connected open region has no nonconstant periodic orbit entirely inside it.

**How the definition helps.** The weight gives the divergence a strict sign, while the weighted field stays tangent to any closed orbit. So the outward flux across the orbit is zero, while Green’s theorem makes it the nonzero integral of the divergence inside (our own). Simple connectedness keeps that interior in the region. On an annulus, take radial speed r − 1 and angular speed one (our own). The divergence 2 − 1/r is positive for r &gt; ½, yet the unit circle is periodic.

**Wikipedia:** [Bendixson–Dulac theorem](https://en.wikipedia.org/wiki/Bendixson%E2%80%93Dulac_theorem). It says: “has the same sign (≠ 0) almost everywhere in a simply connected region of the plane”

**Sources:** none listed. No primary source with a working link was found.

### Energy ovals make a potential minimum a center

**Remember:** Near a strict well with positive curvature, small energy levels are closed loops.

*Makes the theorem clean to state or prove.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** For x″ = −U′(x), define the energy as H(x,v) = v²/2 + U(x), where v = x′. An energy level fixes the value of H.

**Problem.** If U is twice continuously differentiable with U′(a) = 0 and U″(a) &gt; 0, then (a,0) is a center. Every sufficiently close nonconstant trajectory is periodic.

**How the definition helps.** A fixed energy describes the whole orbit near the minimum without solving for position as a function of time. In our own proof, differentiating H gives v(v′ + U′(x)) = 0. Positive curvature makes each nearby energy level around the minimum an oval with two turning points. The velocity field never vanishes on this compact oval, so the orbit goes all the way around.

**Wikipedia:** [Hamiltonian mechanics](https://en.wikipedia.org/wiki/Hamiltonian_mechanics). It says: “the sum of kinetic and potential energy”

**Sources:**

- [Gerald Teschl, Ordinary Differential Equations and Dynamical Systems (2012), §6.7](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf)

### Radial distance makes the Hopf cycle a scalar equilibrium

**Remember:** The angle keeps turning, so a stable radius gives a stable circle.

*Makes the theorem clean to state or prove.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations), 34C23. arXiv math.DS. Level 2: later undergraduate.

**Definition.** In the complex equation z′ = (μ + i − \|z\|²)z, the real number μ is a parameter. The polar coordinates of a nonzero state z are its distance r from zero and its angle.

**Problem.** For μ &gt; 0 this normal form has just one nonconstant periodic orbit, a stable circle of radius √μ. For μ ≤ 0 it has no nonconstant periodic orbit.

**How the definition helps.** The radius satisfies the scalar equation r′ = r(μ − r²), and the angle increases at speed one. In our own proof, a periodic orbit needs a constant positive radius because every other radius moves monotonically. For μ &gt; 0 the speed points toward √μ on both sides. For μ ≤ 0 every positive radius decreases.

**Wikipedia:** [Hopf bifurcation](https://en.wikipedia.org/wiki/Hopf_bifurcation). It says: “It has a simple exact solution in polar coordinates.”

**Sources:** none listed. No primary source with a working link was found.

### Shifted velocity makes the Liénard energy lose only one term

**Remember:** Shifting velocity makes the energy derivative depend only on position.

*True by definition.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations), 34C25. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For x″ + f(x)x′ + g(x) = 0, define F(x) as the integral of f from zero to x. The Liénard coordinates are x and z = x′ + F(x), rather than x and x′.

**Problem.** If g(x)F(x) is positive for all x ≠ 0, a smooth Liénard equation has no nonconstant periodic solution.

**How the definition helps.** In the shifted velocity, the energy loss is just −g(x)F(x). In our own proof, differentiate z²/2 plus the integral of g from zero to x. Use x′ = z − F(x) and z′ = −g(x). A nonconstant periodic path spends some time at x ≠ 0 and cannot regain the lost energy.

**Wikipedia:** [Liénard equation](https://en.wikipedia.org/wiki/Li%C3%A9nard_equation). It says: “The equation can be transformed into an equivalent two-dimensional system of ordinary differential equations.”

**Sources:** none listed. No primary source with a working link was found.

### Turning along the boundary adds the enclosed equilibrium indices

**Remember:** The cuts are crossed twice in opposite directions, so their turns cancel.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** The index along a loop counts the net turns of a nonzero field direction during one circuit. At an isolated zero, define its index using a small counterclockwise circle enclosing only that zero.

**Problem.** Suppose a continuously differentiable planar field is defined on and inside a simple closed curve. If the enclosed zeros are isolated and the boundary has none, its counterclockwise index equals the sum of their indices.

**How the definition helps.** Counting turns lets us add the contributions of small circles around the zeros. In our own proof, cut the region between those circles and the outer curve along connecting arcs. The direction has a continuous angle on the cut region, so the net boundary turn is zero. The two sides of each cut cancel, leaving the outer turn equal to the sum of the counterclockwise circle turns.

**Wikipedia:** [Vector field](https://en.wikipedia.org/wiki/Vector_field). It says: “the sum of the indices at all zeroes.”

**Sources:** none listed. No primary source with a working link was found.

### Dividing by a positive solution prevents two zeros

**Remember:** A positive divisor keeps zeros, and a monotone quotient cannot cross zero twice.

*True by definition.* MSC 34C10 (Oscillation theory, zeros, disconjugacy and comparison theory for ordinary differential equations), 34B24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Reduction of order by a known solution u writes any other solution y as u times an unknown function z. Here u is a positive solution of −(py′)′ + qy = 0.

**Problem.** If p is positive and continuously differentiable and q is real and continuous, one positive solution makes the equation disconjugate on its interval. This means each nonzero real solution has at most one zero there.

**How the definition helps.** Dividing by the positive solution preserves zeros and turns the second-order equation into a sign test for the quotient’s derivative. In our own proof, subtracting z times the equation for u from the equation for uz gives (pu²z′)′ = 0. Thus z is constant or strictly monotone, and a nonzero solution cannot vanish twice.

**Paper or page:** [Strict domain monotonicity of the principal eigenvalue and a characterization of lower boundedness for the Friedrichs extension of four-coefficient Sturm-Liouville operators](https://arxiv.org/abs/2201.05948v2). It says: “There exists a strictly positive solution”

**Sources:**

- [Fritz Gesztesy and Roger Nichols, Strict domain monotonicity of the principal eigenvalue and a characterization of lower boundedness for the Friedrichs extension of four-coefficient Sturm-Liouville operators, Theorem 1.2](https://arxiv.org/abs/2201.05948v2)

### Strict coefficient order forces a zero of the second solution

**Remember:** A positive hump cannot make the Wronskian rise when its derivative is negative.

*Rules out counterexamples.* MSC 34C10 (Oscillation theory, zeros, disconjugacy and comparison theory for ordinary differential equations), 34B24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let u solve u″ + au = 0 and let v solve v″ + bv = 0. The comparison Wronskian is W = uv′ − u′v. The coefficients a and b are continuous.

**Problem.** If b &gt; a, every nonzero solution v has a zero strictly between any two consecutive zeros of a nonzero solution u.

**How the definition helps.** The Wronskian displays the strict coefficient order in the identity W′ = (a − b)uv. In our own proof, if v has no interior zero, choose signs so both solutions are positive between the consecutive zeros of u. Then W decreases, but the endpoint slopes require its value to go from nonpositive to nonnegative. For equal coefficients, u = v = sin x has no zero between 0 and π.

**Wikipedia:** [Sturm–Picone comparison theorem](https://en.wikipedia.org/wiki/Sturm%E2%80%93Picone_comparison_theorem). It says: “There exists an x in (z₁, z₂) such that v(x) = 0”

**Sources:**

- [Charles Sturm, Mémoire sur les Équations différentielles linéaires du second ordre (1836)](https://www.numdam.org/item/JMPA_1836_1_1__106_0/)

### The weighted Wronskian forces independent solutions to alternate zeros

**Remember:** The two ends of a hump make the other solution change sign.

*True by definition.* MSC 34C10 (Oscillation theory, zeros, disconjugacy and comparison theory for ordinary differential equations), 34B24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For two solutions u and v of (py′)′ + qy = 0, define the weighted Wronskian as p(uv′ − u′v). Here p is positive.

**Problem.** Assume p is positive and continuously differentiable and q is real and continuous. Between successive zeros of one nonzero real solution lies exactly one zero of each independent real solution.

**How the definition helps.** Multiplying the ordinary Wronskian by p makes it constant, even when p varies. In our own proof, differentiation gives constancy, and uniqueness makes the constant nonzero for independent solutions. At consecutive zeros of u, its slopes have opposite signs, so the constant −pu′v forces v to change sign. Interchanging the solutions rules out a second zero.

**Wikipedia:** [Sturm separation theorem](https://en.wikipedia.org/wiki/Sturm_separation_theorem). It says: “the zeros of the two solutions are alternating.”

**Sources:**

- [Charles Sturm, Mémoire sur les Équations différentielles linéaires du second ordre (1836)](https://www.numdam.org/item/JMPA_1836_1_1__106_0/)

### First returns detect closed orbits

**Remember:** A trajectory closes when the next crossing is the starting point.

*True by definition.* MSC 34C25 (Periodic solutions to ordinary differential equations), 37C27. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Choose a small surface of codimension one that the velocity crosses transversely, meaning the velocity lies outside its tangent space. The first return map sends each returning point to its next crossing.

**Problem.** A point in the domain of the first return map is fixed exactly when its trajectory closes at its next crossing.

**How the definition helps.** The return map replaces following an entire closed path with testing one equality. In our own argument, uniqueness repeats the path after a return to its starting point. Near a periodic orbit, the implicit function theorem gives nearby return times because the velocity crosses the surface.

**Wikipedia:** [Poincaré map](https://en.wikipedia.org/wiki/Poincar%C3%A9_map). It says: “Per definition this system has a fixed point at p.”

**Sources:** none listed. No primary source with a working link was found.

### Gradient systems forbid nonconstant cycles

**Remember:** A path that keeps climbing cannot return to its start.

*Rules out counterexamples.* MSC 34C25 (Periodic solutions to ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A gradient system has velocity equal to the gradient of a smooth real function on an open subset of Euclidean space. A nonzero gradient points toward steepest increase.

**Problem.** A smooth gradient system has no nonconstant periodic trajectory.

**How the definition helps.** In our own proof, the definition forces the function to increase whenever the path moves. The chain rule gives its time derivative as the squared gradient length. A nonconstant periodic path would therefore return with a higher value. Our own example without the gradient condition is the rotation x′ = −y, y′ = x.

**nLab:** [gradient flow](https://ncatlab.org/nlab/show/gradient+flow). It says: “The flow induced by this on X is the gradient flow of f.”

**Sources:** none listed. No primary source with a working link was found.

### Nonresonance gives one periodic response

**Remember:** A forced response repeats uniquely when the homogeneous period map lacks eigenvalue one.

*Rules out counterexamples.* MSC 34C25 (Periodic solutions to ordinary differential equations), 34A30. arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** The affine period map sends an initial state x to Mx + b after one period. Call the system nonresonant at the period when 1 is not an eigenvalue of M.

**Problem.** Suppose a linear system has continuous coefficients and forcing that repeat after time T. Under nonresonance it has exactly one T-periodic solution.

**How the definition helps.** Nonresonance makes I − M invertible, so exactly one initial value solves the return equation (I − M)x = b. In our own argument, uniqueness makes the solution from that initial value repeat after T. Our own examples with M = I are u′ = 0, with infinitely many periodic solutions, and u′ = 1, with none.

**Paper or page:** [Control Sets for Affine Systems, Spectral Properties and Projective Spaces](https://arxiv.org/abs/2201.05014v2). It says: “This solution is unique if and only if 1 ∉ spec(Φᵤ(τ,0)).”

**Sources:**

- [Fritz Colonius, Alexandre J. Santana, Juliana Setti (2022), Control Sets for Affine Systems, Spectral Properties and Projective Spaces](https://arxiv.org/abs/2201.05014v2)

### Accumulated squared motion gives a quadratic Lyapunov function

**Remember:** The energy still ahead falls by the energy just spent.

*True by definition.* MSC 34D20 (Stability of solutions to ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** For x′ = Ax, define V(x) as the integral from zero to infinity of the squared length of the solution starting at x.

**Problem.** If every eigenvalue of A has negative real part, V is a quadratic form positive away from zero. Its time derivative along solutions is −‖x‖².

**How the definition helps.** The integral gives the derivative by removing the part of the trajectory already traveled. In our own proof, this replaces solving a matrix equation for an unknown quadratic form. Linearity makes the integral quadratic, and the integrand starts positive for every nonzero initial state. Exponential decay from the eigenvalue condition makes the integral finite.

**Wikipedia:** [Lyapunov equation](https://en.wikipedia.org/wiki/Lyapunov_equation). It says: “the solution can also be expressed as an integral (continuous time case) or as an infinite sum (discrete time case).”

**Sources:** none listed. No primary source with a working link was found.

### Asymptotic stability asks for stability as well as attraction

**Remember:** Attracting is not enough; nearby orbits must also stay nearby.

*Rules out counterexamples. Confidence: medium.* MSC 34D20 (Stability of solutions to ordinary differential equations), 37C75. arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** An equilibrium is Lyapunov stable if solutions that start near it stay near it for all later time. It is attractive if solutions that start near it converge to it. It is asymptotically stable if it is both stable and attractive.

**Problem.** Lyapunov's direct method says that a strict Lyapunov function near an equilibrium makes it asymptotically stable. Massera's converse theorem says that every asymptotically stable equilibrium of a smooth enough system has such a function (our own).

**How the definition helps.** The stability clause rules out equilibria that attract every orbit only after a large excursion. In Vinograd’s planar system of 1957, all orbits tend to the origin, but some that start very close first go far away (our own). A strict Lyapunov function traps orbits in small level sets and forbids this, so without the stability clause the converse theorem would be false (our own). The hard part is building the Lyapunov function in Massera’s theorem.

**Wikipedia:** [Lyapunov stability](https://en.wikipedia.org/wiki/Lyapunov_stability). It says: “There are examples showing that attractivity does not imply asymptotic stability.”

**Sources:**

- [W. Hahn, Stability of Motion, Springer (1967), Section 40](https://doi.org/10.1007/978-3-642-50085-5)
- [J. L. Massera, On Liapounoff's conditions of stability, Annals of Mathematics 50 (1949)](https://doi.org/10.2307/1969558)

### Positive Lyapunov sublevels trap nearby solutions

**Remember:** An orbit below the boundary’s lowest value cannot reach the boundary.

*Rules out counterexamples.* MSC 34D20 (Stability of solutions to ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A local Lyapunov function V is continuously differentiable, zero at the equilibrium, and positive at other nearby points. Its value does not increase along nearby solutions.

**Problem.** An equilibrium of a continuously differentiable field is stable if it has a local Lyapunov function. This means every sufficiently close initial point stays close for all future time.

**How the definition helps.** A nonincreasing Lyapunov value prevents a solution from reaching a sphere where every value is higher. In our own proof, the function has a positive minimum on each sufficiently small sphere. Continuity puts all sufficiently close starting points below that minimum. The trapped solutions stay in a compact ball, so they exist for all future time.

**Paper or page:** [A Sum-of-Squares approach to the Stability and Control of Interconnected Systems using Vector Lyapunov Functions](https://arxiv.org/abs/1501.05266v2). It says: “if there exists a continuously differentiable positive definite function”

**Sources:** none listed. No primary source with a working link was found.

### The return derivative tests whether a planar orbit attracts

**Remember:** Test how far the next crossing moves from the fixed crossing.

*Rules out counterexamples.* MSC 34D20 (Stability of solutions to ordinary differential equations), 34C05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Choose a short segment through a point of a planar periodic orbit that crosses the velocity direction at a nonzero angle. The Poincaré map sends each nearby point on the segment to its next crossing. Its derivative at the orbit point is the return multiplier.

**Problem.** For a continuously differentiable planar system, a periodic orbit attracts nearby trajectories and is stable if its return multiplier has absolute value below one. It is unstable if that absolute value exceeds one.

**How the definition helps.** The return map replaces a periodic orbit with a fixed point on a line. In our own proof, the mean-value theorem gives contraction for multiplier magnitude below one and expansion above one. Continuous dependence controls the short paths between crossings. With multiplier one, the radial speeds (r − 1)³ and −(r − 1)³ give opposite outcomes at unit angular speed.

**Wikipedia:** [Poincaré map](https://en.wikipedia.org/wiki/Poincar%C3%A9_map). It says: “the stability of the fixed point of the corresponding Poincaré map”

**Sources:** none listed. No primary source with a working link was found.

### Trace and determinant locate planar sinks sources and saddles

**Remember:** Negative determinant gives a saddle, while positive determinant lets a nonzero trace decide.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34D20 (Stability of solutions to ordinary differential equations), 34C05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** At an equilibrium of a continuously differentiable planar system, let A be the matrix of first derivatives of its velocity field. The trace–determinant diagram plots the sum of the diagonal entries of A against its determinant.

**Problem.** At a planar equilibrium, a negative determinant gives a saddle, with both approaching and escaping directions. With positive determinant, negative trace gives an attracting sink and positive trace a repelling source.

**How the definition helps.** The diagram records the sum and product of the two eigenvalues. In our own argument, a negative product forces opposite real signs. A positive product and nonzero sum give both real parts the sign of the sum. The linearization theorem transfers these cases from the matrix to the nonlinear system.

**Wikipedia:** [Linear stability](https://en.wikipedia.org/wiki/Linear_stability). It says: “If all the eigenvalues have negative real part, then the solution is called linearly stable.”

**Sources:** none listed. No primary source with a working link was found.

### Radially unbounded Lyapunov functions make asymptotic stability global

**Remember:** Level sets must close up, or orbits slide off to infinity.

*Rules out counterexamples. Confidence: medium.* MSC 34D23 (Global stability of solutions to ordinary differential equations), 34D20, 93D30. arXiv math.DS, math.OC. Level 2: later undergraduate.

**Definition.** A function V on ℝⁿ is radially unbounded if V(x) → ∞ whenever ‖x‖ → ∞. Then every sublevel set {V ≤ c} is bounded, and so compact if V is continuous (our own).

**Problem.** Let V be positive definite, radially unbounded, and strictly decreasing along solutions away from the equilibrium. Then the equilibrium is globally asymptotically stable, so it attracts every starting point (the Barbashin–Krasovskii theorem).

**How the definition helps.** Radial unboundedness makes each sublevel set of V compact, so a solution that starts in it stays in a compact set. Then the local argument works everywhere. Without it, V can decrease along an orbit that runs off to infinity (our own). The page’s example f₂ = r²/(1 + r²) + (x₁ − x₂)², with r² = x₁² + x₂², is positive definite but stays below 1 on the line x₁ = x₂. So each sublevel set {f₂ ≤ c} with c ≥ 1 is unbounded, and a solution can escape inside it (our own).

**Wikipedia:** [Radially unbounded function](https://en.wikipedia.org/wiki/Radially_unbounded_function), [Lyapunov function](https://en.wikipedia.org/wiki/Lyapunov_function), [LaSalle's invariance principle](https://en.wikipedia.org/wiki/LaSalle%27s_invariance_principle). It says: “are not radially unbounded since along the line x₁ = x₂, the condition is not verified even though the second function is globally positive definite.”

**Sources:** none listed. No primary source with a working link was found.

### History makes delayed evolution restartable

**Remember:** A delay equation needs a history, not a snapshot.

*Makes the theorem clean to state or prove.* MSC 34K05 (General theory of functional-differential equations). arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** For a delay τ &gt; 0, the state at time t is the function s ↦ x(t + s) on \[−τ,0\].

**Problem.** For x′(t) = x(t − τ), a continuous initial history on \[−τ,0\] determines a unique forward solution. Two equal history segments give equal future histories.

**How the definition helps.** The history supplies every delayed value needed to integrate the equation over the next interval of length τ. In our own proof, repeating this integration gives existence and uniqueness for all forward times. Histories with equal values at zero can differ at −τ, giving different initial right derivatives.

**Wikipedia:** [Delay differential equation](https://en.wikipedia.org/wiki/Delay_differential_equation). It says: “with given initial condition φ: \[−τ,0\] → ℝⁿ. Then the solution on the interval \[0,τ\] is given by ψ(t)”

**Sources:** none listed. No primary source with a working link was found.

### Osgood bounds rule out waiting

**Remember:** An infinite reciprocal integral prevents a solution from leaving zero separation.

*Rules out counterexamples.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations). arXiv math.DS. Level 3: graduate.

**Definition.** Bound differences in velocity by μ(r), where r is the distance between states. Use a continuous nondecreasing μ with μ(0) = 0 and μ(r) &gt; 0 for r &gt; 0. It is an Osgood modulus if the integral of 1/μ(r) diverges at zero.

**Problem.** For a continuous differential equation with this bound, two solutions with the same initial state agree forward wherever both exist.

**How the definition helps.** In our own proof, the divergent integral forces the time needed to grow from zero separation to be infinite. Osgood’s lemma makes this argument precise for the inequality satisfied by the distance. For x′ = √\|x\| the reciprocal integral is finite. Our own example waits at zero until time T and then follows (t − T)²/4.

**Wikipedia:** [Peano existence theorem](https://en.wikipedia.org/wiki/Peano_existence_theorem). It says: “The solution need not be unique”

**Paper or page:** [Lagrangian aspects of Yudovich theory for 2D Euler](https://arxiv.org/abs/2509.21121v1). It says: “and if c = 0, then ρ = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Commuting coefficients simplify matrix evolution

**Remember:** Only commuting factors can be freely reordered in the exponential.

*Rules out counterexamples.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.CA. Level 3: graduate.

**Definition.** The coefficient matrices of x′ = A(t)x commute pairwise if A(s)A(t) = A(t)A(s) for every s and t.

**Problem.** For continuous pairwise commuting coefficients, the evolution from time zero is exp(∫₀ᵗ A(s) ds).

**How the definition helps.** Pairwise commutation lets A(t) commute with its integral, so the scalar rule for differentiating the exponential applies. Differentiation and the identity initial value then identify the evolution matrix by uniqueness (our own). Without commutation it fails: apply a smooth pulse of integral one times the matrix whose only nonzero entry is 1 at (1,2), then one times its transpose. The evolution matrix has diagonal entries 1 and 2, but the exponential of the integrated coefficient has equal diagonal entries (our own).

**Wikipedia:** [Magnus expansion](https://en.wikipedia.org/wiki/Magnus_expansion). It says: “In the general case, however, the expression above is no longer the solution of the problem.”

**Sources:**

- [Wilhelm Magnus (1954), On the exponential solution of differential equations for a linear operator](https://doi.org/10.1002/cpa.3160070404)

### Exterior products linearize volume evolution

**Remember:** Differentiate one factor at a time to follow volume.

*True by definition.* MSC 34A30 (Linear ordinary differential equations and systems), 15A75. arXiv math.DS, math.CA. Level 3: graduate.

**Definition.** The exterior product of k vectors represents their oriented k-dimensional volume and direction. Define the kth additive compound of A on such products by applying A to each factor in turn and adding the results.

**Problem.** For a continuous real matrix A(t), the exterior product of k solutions of x′ = A(t)x solves the linear equation with the kth additive compound. Its Euclidean norm equals the volume of the parallelepiped spanned by the solutions.

**How the definition helps.** The additive compound puts the product rule directly into the coefficient matrix for oriented volumes. In our own comparison, tracking every determinant of k selected coordinates separately requires differentiating each of its columns. Exterior products collect those determinants into one vector. The work of estimating its growth remains.

**Paper or page:** [Compound matrices in systems and control theory](https://arxiv.org/abs/2103.15097v1). It says: “\\frac{d}{dt} \\Phi<sup>(k)</sup>(t)=A<sup>\[k\]</sup>(t) \\Phi<sup>(k)</sup>(t)”

**Sources:**

- [Eyal Bar-Shalom, Michael Margaliot (2021), Compound matrices in systems and control theory](https://arxiv.org/abs/2103.15097v1)

### One period gives Floquet coordinates

**Remember:** Take a logarithm of one period to separate the periodic part.

*True by definition.* MSC 34A30 (Linear ordinary differential equations and systems), 34C25. arXiv math.DS, math.CA. Level 3: graduate.

**Definition.** For x′ = A(t)x with continuous T-periodic A, let Φ(t) carry initial values at zero to their values at t. The one-period matrix is M = Φ(T). Choose a constant complex matrix B with exp(TB) = M and set P(t) = Φ(t)exp(−tB).

**Problem.** The invertible matrix P repeats every T time units, so Φ(t) = P(t)exp(tB).

**How the definition helps.** The factor exp(−tB) cancels the extra M picked up over one period. In our own proof, uniqueness gives Φ(t + T) = Φ(t)M. This construction replaces solving directly for P with finding a logarithm of M. The matrix logarithm theorem gives one because M is invertible over the complex numbers.

**Paper or page:** [ProofWiki](https://proofwiki.org/wiki/Floquet's_Theorem). It says: “\\Phi(t) = P(t)e<sup>Bt</sup>”

**Sources:**

- [Gaston Floquet (1883), Sur les équations différentielles linéaires à coefficients périodiques](https://doi.org/10.24033/asens.220)

### Ordered products solve changing systems

**Remember:** Keep matrix factors in the order in which they act.

*True by definition.* MSC 34A30 (Linear ordinary differential equations and systems), 34A25. arXiv math.CA. Level 3: graduate.

**Definition.** For x′ = A(t)x, start with the constant identity matrix as the first term. Obtain each next term by integrating A(s) times the preceding term at s from zero to t. The sum is the Peano–Baker series.

**Problem.** If A is continuous on \[0,T\], the series converges there to the matrix taking each initial value to its value at t.

**How the definition helps.** The recursion builds the integral equation for evolution directly into the series. In our own account, multiplying on the left keeps the factors in time order even when matrices fail to commute. A factorial bound gives uniform convergence, so integration commutes with summation. The sum therefore solves the initial-value problem, and uniqueness identifies it with the evolution matrix.

**nLab:** [iterated integral](https://ncatlab.org/nlab/show/iterated+integral). It says: “Iterated integrals include nested integration of differential forms of the kind as it appears in the formulation of parallel transport”

**Wikipedia:** [State-transition matrix](https://en.wikipedia.org/wiki/State-transition_matrix). It says: “The most general transition matrix is given by a product integral, referred to as the Peano–Baker series:”

**Sources:**

- [Michael Baake and Ulrike Schlägel (2011), The Peano-Baker series](https://doi.org/10.1134/S0081543811080098)

### Carathéodory solutions let differential equations have discontinuous right-hand sides

**Remember:** Ask for the equation almost everywhere, and recover y with the Lebesgue integral.

*Makes the theorem clean to state or prove.* MSC 34A36 (Discontinuous ordinary differential equations), 34A12. arXiv math.CA. Level 3: graduate.

**Definition.** Take the initial value problem y′ = f(t, y), y(t₀) = y₀. A solution in the extended sense is an absolutely continuous function y that satisfies the equation almost everywhere and satisfies the initial condition. An absolutely continuous function is one that is the Lebesgue integral of its own derivative, up to a constant.

**Problem.** Carathéodory’s theorem: let f be continuous in y, measurable in t, and bounded near (t₀, y₀) by an integrable function of t. Then the initial value problem has a solution in the extended sense near t₀.

**How the definition helps.** The extended definition asks for the equation only almost everywhere, so f need not be continuous in t. For y′ = H(t), with H the Heaviside step, the ramp function (0 for t &lt; 0, t for t ≥ 0) is a solution in the extended sense. It is not a classical solution, since it has a corner at 0. Peano’s theorem for continuous f becomes a special case. Uniqueness again needs a Lipschitz-type bound, now with an integrable constant k(t).

**Wikipedia:** [Carathéodory's existence theorem](https://en.wikipedia.org/wiki/Carath%C3%A9odory%27s_existence_theorem). It says: “This suggests that the idea of a solution be extended to allow for solutions that are not everywhere differentiable, thus motivating the following definition.”

**Sources:** none listed. No primary source with a working link was found.

### Filippov solutions let systems slide along a switching surface

**Remember:** On a switching surface, average the two sides and slide.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34A60 (Ordinary differential inclusions), 34A36. arXiv math.CA, math.DS. Level 3: graduate.

**Definition.** Filippov replaces x′ = f(x), for a locally bounded f, by the inclusion x′ ∈ F(x). Here F(x) is the closed convex hull of the values of f near x, ignoring sets of measure zero (our own). A Filippov solution is an absolutely continuous function that satisfies the inclusion at almost every time.

**Problem.** For locally bounded measurable f, a Filippov solution exists near every initial point. For x′ = −1 when x &gt; 0 and x′ = 1 when x ≤ 0, no Carathéodory solution has x(0) = 0, but x ≡ 0 is a Filippov solution (our own).

**How the definition helps.** At the switching point, the convex hull contains both side values and all averages of them, including 0. So x ≡ 0 is a solution that slides along the surface (our own). Filippov’s construction gives exactly the closed convex values that the existence theorem for inclusions needs (our own). Convexity is the key condition: existence for non-convex F is still an active research area. Uniqueness is not automatic and needs extra conditions (our own).

**Wikipedia:** [Differential inclusion](https://en.wikipedia.org/wiki/Differential_inclusion). It says: “Differential inclusions can be used to understand and suitably interpret discontinuous ordinary differential equations, such as arise for Coulomb friction in mechanical systems and ideal switches in power electronics.”

**Sources:**

- [A. F. Filippov, Differential Equations with Discontinuous Righthand Sides, Kluwer (1988)](https://doi.org/10.1007/978-94-015-7793-9)

### Weyl's limit-point case means no boundary condition is needed

**Remember:** Each limit-circle end needs one boundary condition; limit-point ends need none.

*Makes the theorem clean to state or prove.* MSC 34B24 (Sturm-Liouville theory), 47E05. arXiv math.CA, math.SP. Level 3: graduate.

**Definition.** Take a Sturm–Liouville expression τu = (−(pu′)′ + qu)/r on an interval (a, b) whose endpoints may be singular. At an endpoint in the limit circle case, every solution of τu = λu is square integrable near that endpoint. In the limit point case, for non-real λ, only a one-dimensional space of solutions is.

**Problem.** The deficiency indices of the minimal operator are 2, 1 or 0 when both, one or neither endpoint is in the limit circle case. So the operator is self-adjoint with no boundary conditions at all exactly when both endpoints are in the limit point case.

**How the definition helps.** The definition counts the square-integrable solutions at each endpoint, and the theorem shows that this count is the number of boundary conditions needed. In the limit point case, the Wronskian boundary term of any two functions in the maximal domain vanishes, so no condition is needed there. For −u″ + cx⁻²u on (0, ∞), the solutions near 0 are powers of x, and 0 is limit point exactly when c ≥ 3/4 (our own). The hard part is Weyl’s alternative, that the case is the same for every λ (our own).

**Paper or page:** [The Jacobi operator on (−1,1) and its various m-functions](https://arxiv.org/abs/2307.12164v1), [On Sesquilinear Forms for Lower Semibounded (Singular) Sturm-Liouville Operators](https://arxiv.org/abs/2509.07205v1). It says: “In particular, Tₘᵢₙ = Tₘₐₓ is self-adjoint (i.e., Ṫₘᵢₙ is essentially self-adjoint) if and only if τ is in the limit point case at a and b.”

**Sources:**

- [Fritz Gesztesy, Lance L. Littlejohn, Mateusz Piorkowski, Jonathan Stanfill, The Jacobi operator on (−1,1) and its various m-functions, Complex Anal. Oper. Theory 18 (2024) Paper No. 155, arXiv:2307.12164](https://doi.org/10.1007/s11785-024-01576-4)
- [Jussi Behrndt, Fritz Gesztesy, Seppo Hassi, Roger Nichols, Henk de Snoo, On Sesquilinear Forms for Lower Semibounded (Singular) Sturm-Liouville Operators, arXiv:2509.07205 (2025)](https://arxiv.org/abs/2509.07205v1)
- [Weyl, Über gewöhnliche Differentialgleichungen mit Singularitäten und die zugehörigen Entwicklungen willkürlicher Funktionen, Mathematische Annalen 68 (1910), 220–269](https://doi.org/10.1007/bf01474161)

### Green impulses fix derivative jumps

**Remember:** One point impulse is one unit of flux jump.

*True by definition.* MSC 34B27 (Green's functions for ordinary differential equations). arXiv math.SP. Level 3: graduate.

**Definition.** Let Ly = (py′)′ + qy on a finite closed interval, with smooth positive p and continuous q. Assume only the zero solution of Ly = 0 vanishes at both endpoints. The Green function G solves LG = δₛ with zero endpoint values, where δₛ evaluates test functions at the interior point s.

**Problem.** If G is continuous and smooth on both sides of s with one-sided derivatives there, the right derivative minus the left derivative is 1/p(s).

**How the definition helps.** The impulse coefficient in LG is exactly the jump in pG′ (our own). Integration by parts on both sides of s, using continuity of G, gives that coefficient, and the defining equation sets it equal to one. Dividing by p(s) gives the derivative jump. Constructing G still requires solving the homogeneous equations and matching their endpoint values.

**Wikipedia:** [Green's function](https://en.wikipedia.org/wiki/Green%27s_function). It says: “G′(s₀₊,s) − G′(s₀₋,s) = 1 / p(s)”

**Sources:** none listed. No primary source with a working link was found.

### Tangent cones test invariance

**Remember:** At a corner, the entire cone tells you which directions stay possible.

*Makes the theorem clean to state or prove.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations). arXiv math.DS. Level 3: graduate.

**Definition.** At a point x in a closed convex subset S of Euclidean space, take all nonnegative multiples of vectors from x to points in S. Their closure is the tangent cone at x.

**Problem.** Consider a continuous velocity field with a unique global forward solution from each point of S at every starting time. All these solutions stay in S exactly when every boundary velocity belongs to its tangent cone at every time.

**How the definition helps.** The cone replaces separate tests for each possible boundary shape. In our own account, a curve that stays in S has its initial velocity in the cone by taking difference quotients. Nagumo’s theorem carries the hard direction, from the pointwise test to a trajectory that stays in S.

**Paper or page:** [Positive Invariance Condition for Continuous Dynamical Systems Based on Nagumo Theorem](https://arxiv.org/abs/2207.05429v1). It says: “f(t,x)\\in \\mathcal {T}\_\\mathcal {S}(x),\\text { for all } x\\in \\partial \\mathcal {S},”

**Sources:** none listed. No primary source with a working link was found.

### Isochrons advance phase uniformly

**Remember:** Match the future trajectory to measure phase now.

*True by definition.* MSC 34C25 (Periodic solutions to ordinary differential equations), 34D35. arXiv math.DS. Level 3: graduate.

**Definition.** Choose a reference solution γ on an attracting cycle with least period T. A solution x has phase θ modulo T if \|x(t) − γ(t + θ)\| tends to zero as t tends to infinity. An isochron contains exactly the starting points with one such phase.

**Problem.** Consider a smooth flow with an attracting cycle whose transverse linear return map has all eigenvalues strictly inside the unit circle. Then every nearby point has a unique phase modulo T, and following its solution for time s adds s to that phase.

**How the definition helps.** The definition compares trajectories at matching times, so shifting both clocks advances the reference phase by the same amount. In our own argument, replacing t by t + s preserves convergence. Measuring distance to the cycle alone loses the reference phase. The stable foliation theorem gives existence and uniqueness by grouping nearby points according to the reference trajectory they approach.

**Wikipedia:** [Isochron](https://en.wikipedia.org/wiki/Isochron). It says: “an isochron is a set of initial conditions for the system that all lead to the same long-term behaviour.”

**Sources:**

- [John Guckenheimer (1975), Isochrons and phaseless sets](https://doi.org/10.1007/BF01273747)

### Normally hyperbolic manifolds persist

**Remember:** Faster transverse rates can hold a surface together under perturbation.

*Rules out counterexamples.* MSC 34C45 (Invariant manifolds for ordinary differential equations), 34D10. arXiv math.DS. Level 3: graduate.

**Definition.** A normally hyperbolic invariant manifold is carried onto itself by the flow, and the linearized flow along it preserves a splitting into tangent, stable and unstable directions. Stable directions contract forward in time, and unstable directions contract backward. Each contraction is uniformly exponential and dominates any tangent contraction in the same time direction.

**Problem.** A compact normally hyperbolic invariant manifold without boundary for a smooth flow persists as a nearby invariant manifold under sufficiently small continuously differentiable perturbations.

**How the definition helps.** The uniform gap in contraction rates lets Fenichel’s theorem construct the perturbed manifold as a nearby graph (our own). Invariance alone allows every circle of constant radius on a cylinder with angular speed one and radial speed zero (our own). Giving the radius a small constant positive speed destroys every such compact invariant circle (our own).

**Wikipedia:** [Normally hyperbolic invariant manifold](https://en.wikipedia.org/wiki/Normally_hyperbolic_invariant_manifold). It says: “the dynamics of Λ itself is neutral compared with the dynamics nearby”

**Paper or page:** [An SIRS model with hospitalizations: economic impact by disease severity](https://arxiv.org/abs/2503.03540v3). It says: “there exists a locally invariant manifold ℳε, called slow manifold, diffeomorphic to ℳ₀”

**Sources:**

- [Neil Fenichel, Persistence and Smoothness of Invariant Manifolds for Flows](https://doi.org/10.1512/iumj.1972.21.21017)

### Dichotomies give unique bounded responses

**Remember:** Integrate each part of the forcing in the direction that decays.

*Rules out counterexamples. Confidence: medium.* MSC 34D09 (Dichotomy, trichotomy of solutions to ordinary differential equations), 34A30. arXiv math.DS, math.CA. Level 3: graduate.

**Definition.** For x′ = A(t)x, let U(t,s) carry states from s to t. An exponential dichotomy gives complementary projections P(s) and Q(s) whose ranges travel with the flow. With fixed constants K, α &gt; 0, ‖U(t,s)P(s)‖ ≤ K exp(−α\|t − s\|) for t ≥ s, and ‖U(t,s)Q(s)‖ obeys the same bound for t ≤ s.

**Problem.** Suppose x′ = A(t)x has an exponential dichotomy on the whole real line, with A continuous. For every bounded continuous f, the equation x′ = A(t)x + f(t) has exactly one bounded solution there.

**How the definition helps.** The two projected estimates make the forcing integrable in opposite time directions (our own). The bounded solution integrates the P part of the forcing forward from minus infinity and the Q part backward from plus infinity, using U(t,s). The same estimates show that a bounded homogeneous solution is zero, which gives uniqueness. Without a dichotomy it fails: x′ = 1 has no bounded solution, since x′ = 0 has no decay (our own).

**Wikipedia:** [Exponential dichotomy](https://en.wikipedia.org/wiki/Exponential_dichotomy). It says: “then the equilibrium point 0 is said to have an exponential dichotomy if there exists a (constant) matrix P such that P² = P”

**Paper or page:** [Linearization and Hölder continuity of generalized ODEs with application to measure differential equations](https://arxiv.org/abs/2301.09955v3). It says: “have a unique bounded solution.”

**Sources:** none listed. No primary source with a working link was found.

### Transport makes spectral projections periodic

**Remember:** Transport the splitting rather than recomputing it at each time.

*True by definition.* MSC 34D09 (Dichotomy, trichotomy of solutions to ordinary differential equations), 34C25. arXiv math.DS. Level 3: graduate.

**Definition.** For x′ = A(t)x with continuous T-periodic A, let M advance vectors from time zero to T. Group the complex generalized eigenspaces of M by eigenvalue modulus below, equal to, or above one. Carry each group forward and project onto it along the other two groups.

**Problem.** These subspaces of a continuous periodic linear system repeat each period. Projecting onto one before transport gives the same result as transporting first and projecting onto its later copy.

**How the definition helps.** Carrying the groups with the flow makes projection commute with evolution. In our own proof, a vector keeps the same three components after each component travels to its new space. Recomputing eigenvectors at every time is unnecessary. Each initial group is invariant under M, so after one period it returns to itself.

**Paper or page:** [Periodic Center Manifolds for Nonhyperbolic Limit Cycles in ODEs](https://arxiv.org/abs/2309.11919v3). It says: “The projections commute with the fundamental matrix: U(t,s)πᵢ(s) = πᵢ(t)U(t,s)”

**Sources:** none listed. No primary source with a working link was found.

### Floquet multipliers detect exponential decay

**Remember:** Test the eigenvalues of a whole period, not those of each instant.

*Makes the theorem clean to state or prove.* MSC 34D20 (Stability of solutions to ordinary differential equations), 34A30. arXiv math.DS, math.CA. Level 3: graduate.

**Definition.** For x′ = A(t)x with continuous T-periodic A, the period map sends each initial vector to its value after time T. Its eigenvalues are the Floquet multipliers.

**Problem.** Every solution decays exponentially, with uniform bounds proportional to its initial size, exactly when every multiplier has modulus less than one.

**How the definition helps.** The multipliers express long-term decay through the spectrum of one matrix. In our own proof, evolution through n periods applies the same matrix n times. Its powers decay exponentially exactly when all eigenvalues have modulus below one. Evolution during the remaining fraction of a period has a uniform bound.

**Paper or page:** [On stability for generalized linear differential equations and applications to impulsive systems](https://arxiv.org/abs/2207.01716v2). It says: “the eigenvalues of the monodromy matrix X(ω) are inside of the unit circle.”

**Sources:** none listed. No primary source with a working link was found.

### Invariant subsets locate long-term limits

**Remember:** Keep only the points that can stay where the decrease stops.

*Rules out counterexamples.* MSC 34D20 (Stability of solutions to ordinary differential equations), 34D05. arXiv math.DS. Level 3: graduate.

**Definition.** Consider a smooth autonomous system on a compact set K that contains every forward trajectory starting in K. Let V be continuously differentiable and nonincreasing along these trajectories, and let E be the set where its derivative along the flow vanishes. Let S be the union of the complete trajectories that stay in E for all times.

**Problem.** For every trajectory starting in K, the distance to S tends to zero as time tends to infinity.

**How the definition helps.** Requiring a whole trajectory to stay in E removes points where decrease merely pauses. In our own argument, compactness gives a nonempty invariant set of late-time accumulation points, on which V has its limiting value. That set therefore lies in S. Our own example is a damped pendulum, whose energy derivative vanishes momentarily at a turning point.

**Wikipedia:** [LaSalle's invariance principle](https://en.wikipedia.org/wiki/LaSalle%27s_invariance_principle). It says: “is the union of complete trajectories contained entirely in the set”

**Sources:** none listed. No primary source with a working link was found.

### Tangent contraction contracts path distances

**Remember:** Shorten every tangent vector to shorten every path.

*Makes the theorem clean to state or prove.* MSC 34D20 (Stability of solutions to ordinary differential equations), 34C40. arXiv math.DS. Level 3: graduate.

**Definition.** A contraction metric gives each tangent vector a length that can depend on its base point. The derivative of the flow carries each vector along its solution. After time t ≥ 0, each transported length is at most exp(−ct) times its initial length for one common c &gt; 0.

**Problem.** In a connected open region that every forward solution stays in, measure distance by the infimum of lengths of piecewise smooth connecting paths inside the region. After time t, the distance between two solutions is at most exp(−ct) times their initial distance.

**How the definition helps.** Measuring distance by path length lets the tangent bound apply along every connecting path. In our own proof, push a path forward and integrate its tangent lengths. Taking the infimum over initial paths gives the distance bound without requiring a shortest path. Finding the contraction metric remains a separate problem.

**Paper or page:** [Algebraic Test for Asymptotic Stability of Periodic Orbits for Polynomial Systems](https://arxiv.org/abs/2112.05998v1). It says: “L(Γ(0, ·)) eᵃᵗ ≤ L(Γ(t, ·)) ≤ L(Γ(0, ·)) eᴬᵗ.”

**Sources:** none listed. No primary source with a working link was found.

### Weighted row sums test stability

**Remember:** With nonnegative off-diagonal entries, negative weighted row sums trap the eigenvalues.

*Rules out counterexamples.* MSC 34D20 (Stability of solutions to ordinary differential equations). arXiv math.DS. Level 3: graduate.

**Definition.** Call a real square matrix Metzler if every entry outside the main diagonal is nonnegative. The diagonal itself has no sign restriction.

**Problem.** If A is Metzler and a vector v with positive entries satisfies Av &lt; 0 entry by entry, the system x′ = Ax decays exponentially.

**How the definition helps.** Dividing each coordinate by the matching entry of v gives a similar matrix with negative row sums and the same off-diagonal signs (our own). Since the off-diagonal entries are nonnegative, each row sum equals the diagonal entry plus the Gershgorin radius. So every Gershgorin disk lies in the open left half-plane, which gives exponential decay. Without the Metzler condition it fails: the matrix with rows (1, −2) and (0, −1) has negative row sums but eigenvalue 1 (our own).

**Paper or page:** [Qualitative analysis of solutions to mixed-order positive linear coupled systems with bounded or unbounded delays](https://arxiv.org/abs/2208.10706v2). It says: “There exists a vector λ ≻ 0 such that Aλ ≺ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Swapping factors transfers eigenfunctions

**Remember:** Swap the factors and apply the factor on the right.

*True by definition. Confidence: medium.* MSC 34L10 (Eigenfunctions, eigenfunction expansions, completeness of eigenfunctions of ordinary differential operators). arXiv math.CA. Level 3: graduate.

**Definition.** Let A and B be first-order linear differential operators with smooth coefficients on an interval. When a second-order operator factors as BA + λ, define its Darboux partner as AB + λ.

**Problem.** Choose any number μ different from λ. Applying A maps local solutions of (BA + λ)u = μu bijectively onto those of (AB + λ)v = μv.

**How the definition helps.** In our own proof, swapping factors makes A(BA) = (AB)A the identity needed to transfer solutions. On solutions at μ, applying B and dividing by μ − λ gives the inverse. Compared with working directly from the coefficients, the work shifts to finding the factorization.

**Paper or page:** [Exceptional Gegenbauer polynomials via isospectral deformation](https://arxiv.org/abs/2110.04059v1). It says: “A multi-step rational Darboux transformation is necessarily a factorization chain, and viceversa.”

**Sources:**

- [Exceptional Gegenbauer polynomials via isospectral deformation](https://arxiv.org/abs/2110.04059v1)

### Regular singularities prevent exponential blow-up

**Remember:** Limit pole orders to keep local solutions within powers and logarithms.

*Rules out counterexamples.* MSC 34M35 (Singularities, monodromy and local behavior of solutions to ordinary differential equations in the complex domain, normal forms). arXiv math.CA. Level 3: graduate.

**Definition.** Consider y″ + p(z)y′ + q(z)y = 0 near an isolated singularity at zero. The singularity is regular if zp(z) and z²q(z) extend analytically to zero.

**Problem.** On each sufficiently small sector with a fixed logarithm, every solution near zero satisfies \|y(z)\| ≤ C/\|z\|ᴺ for some positive C and N.

**How the definition helps.** The pole bounds allow solutions built from powers, convergent series, and logarithms, each with at most power-law growth on the sector. The Frobenius theorem proves these local expansions. In our own counterexample, z⁴y″ + (2z³ + z²)y′ = 0 has solution exp(1/z). On the positive real axis this solution outgrows every inverse power.

**Wikipedia:** [Regular singular point](https://en.wikipedia.org/wiki/Regular_singular_point). It says: “a regular singular point, where the growth of solutions is bounded (in any small sector) by an algebraic function”

**Sources:** none listed. No primary source with a working link was found.

### Continuous Caputo derivatives compose

**Remember:** Subtract the initial value, then add the orders of integration.

*Rules out counterexamples.* MSC 34A08 (Fractional ordinary differential equations), 26A33. arXiv math.CA. Level 4: research.

**Definition.** For order α between zero and one, subtract f(a) before taking the Riemann–Liouville derivative on \[a,b\]. That derivative first integrates against the weight (t − s)⁻ᵅ/Γ(1 − α) from a to t, then differentiates in t. Continuous Caputo differentiability requires this derivative to extend continuously to a.

**Problem.** Let a continuous function have a continuous Caputo derivative of order α. For 0 &lt; β &lt; α &lt; 1, applying orders β then α − β gives order α.

**How the definition helps.** Subtracting the initial value lets fractional integration recover f(t) − f(a) from the continuous derivative (our own). Fractional integrals add orders, so the order-β derivative is the order-(α − β) integral of the order-α derivative (our own). That integral vanishes at a, so the remaining Caputo derivative cancels it (our own). Without endpoint continuity, take f(t) = tᵝ on \[0,1\]: its order-β derivative is constant, while its order-α derivative grows without bound near zero (our own).

**Paper or page:** [Semigroup property of fractional differential operators and its applications](https://arxiv.org/abs/2107.08914v1). It says: “Moreover, ᶜDₐ⁽ᵅ⁻ᵝ⁾f₁ = ᶜDₐᵅf”

**Sources:**

- [Semigroup property of fractional differential operators and its applications, Proposition 7](https://arxiv.org/abs/2107.08914v1)

### Inverse factors encode return derivatives

**Remember:** The factor and the derivative of the return map grow by the same multiplier.

*True by definition. Confidence: medium.* MSC 34C07 (Theory of limit cycles of polynomial and analytic vector fields (existence, uniqueness, bounds, Hilbert's 16th problem and ramifications) for ordinary differential equations), 34C25. arXiv math.DS. Level 4: research.

**Definition.** Let dr/dθ = F(θ,r), where F is smooth and T-periodic in θ. An inverse integrating factor is a nontrivial differentiable function V satisfying dV/dθ = V ∂F/∂r along solutions. This equation lets V vanish even where its reciprocal has no meaning.

**Problem.** Assume V is T-periodic and continuously differentiable. If P takes an initial value r at zero to its value at T, then V(0,P(r)) = V(0,r)P′(r) wherever P exists.

**How the definition helps.** Our own proof compares V along a solution with the derivative of that solution with respect to its initial value. Both satisfy the same scalar linear equation, and the initial-value derivative starts at one. So V along the solution is the initial V times that derivative, and periodicity gives the formula. Constructing V remains a separate problem.

**Paper or page:** [Principal Bautin ideal of monodromic singularities with inverse integrating factors](https://arxiv.org/abs/2412.09205v1). It says: “V(0, Π(ρ₀)) = V(0, ρ₀) Π′(ρ₀)”

**Sources:**

- [Isaac A. García, Jaume Giné (2024), Principal Bautin ideal of monodromic singularities with inverse integrating factors](https://arxiv.org/abs/2412.09205v1)

### Reciprocal radius locates finite-time blow-up

**Remember:** Infinite rescaled time can correspond to a finite original lifetime.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34C11 (Growth and boundedness of solutions to ordinary differential equations), 34C40. arXiv math.DS. Level 4: research.

**Definition.** Let x′ = F(x), where F(rx) = rᵈF(x) for r &gt; 0 and degree d &gt; 1. Away from zero, use radius r = \|x\| and reciprocal radius ρ = 1/r. Introduce time s with ds/dt equal to r raised to the power d − 1.

**Problem.** Suppose a trajectory exists for every s ≥ 0 and its reciprocal radius tends to zero exponentially. Its radius tends to infinity in finite original time.

**How the definition helps.** Reciprocal radius puts infinity at zero, and the new clock expresses the original lifetime as an integral. In our own radial calculation, dt/ds equals ρ raised to the positive power d − 1. Exponential decay makes that integral finite. Proving decay in the transformed system remains the main dynamical step.

**Paper or page:** [Blow-up behavior for ODEs with normally hyperbolic nature in dynamics at infinity](https://arxiv.org/abs/2307.09201v3). It says: “Then tₘₐₓ &lt; ∞ holds; namely, y(t) is a blow-up solution.”

**Sources:**

- [Kaname Matsue (2024), Blow-up behavior for ODEs with normally hyperbolic nature in dynamics at infinity](https://arxiv.org/abs/2307.09201v3)

### Total positivity limits sign changes

**Remember:** Positive entries preserve signs of positive vectors, but positive minors control all sign changes.

*Rules out counterexamples.* MSC 34C12 (Monotone systems involving ordinary differential equations), 15B48. arXiv math.DS, math.CA. Level 4: research.

**Definition.** A linear system is totally positive when every minor of its forward evolution matrix is positive at every positive elapsed time. A minor is the determinant of a square submatrix. Mere positivity of entries checks only the one-by-one minors.

**Problem.** In a totally positive system, the number of sign changes in a nonzero solution cannot increase when zero entries are skipped.

**How the definition helps.** Positive minors let the matrix theorem on sign changes apply at every forward step, and that theorem supplies the main proof. Positive entries alone are not enough: take the constant matrix with rows (0,1,1), (1,0,1) and (2,1,0), whose exponential has positive entries at every positive time (our own). From (1,−1,0), the third component starts with derivative 1. The signs become +, −, +, so one sign change becomes two (our own).

**Paper or page:** [Behavior of Totally Positive Differential Systems Near a Periodic Solution](https://arxiv.org/abs/2101.06027v1). It says: “Then s⁺(Ax) ≤ s⁻(x) for all x ∈ ℝⁿ ∖ {0}.”

**Sources:**

- [Binyamin Schwarz (1970), Totally positive differential systems](https://doi.org/10.2140/pjm.1970.32.203)

### Defining singular Schrödinger operators by quadratic forms makes them self-adjoint

**Remember:** Define the operator by its energy, and self-adjointness comes free.

*True by definition.* MSC 34L40 (Particular ordinary differential operators (Dirac, one-dimensional Schrödinger, etc.)), 47B25, 47A07. arXiv math.SP, math.FA. Level 4: research.

**Definition.** The potential q is a real 1-periodic distribution in the Sobolev space H⁻¹, such as a periodic sum of Dirac deltas. H⁻¹ is the dual of H¹, the space of functions with a square-integrable derivative. The form-sum operator is the self-adjoint operator given by the quadratic form ∫\|u′\|² + ⟨q, \|u\|²⟩ on H¹(ℝ).

**Problem.** For a real 1-periodic potential q in H⁻¹, the form-sum operator for −u″ + qu on L²(ℝ) is self-adjoint and bounded below. The paper shows that five basic definitions of this operator, including the quasi-differential one, all agree.

**How the definition helps.** With the form definition, self-adjointness and a lower bound come from the representation theorem for closed forms that are bounded below. The real step is to show that ⟨q, \|u\|²⟩ is small compared with ∫\|u′\|², so the sum stays closed and bounded below (our own). The main work, Theorem 18, shows that the quasi-differential operators equal the form-sum operators. Corollary 15 shows that the minimal operator, the Friedrichs extension and the maximal operator also coincide.

**Paper or page:** [One-dimensional Schrödinger operators with singular periodic potentials](https://arxiv.org/abs/0805.1000), [One-dimensional Schrödinger operators with singular periodic potentials](https://arxiv.org/abs/0805.1000), [One-dimensional Schrödinger operators with singular periodic potentials](https://arxiv.org/abs/0805.1000), [One-dimensional Schrödinger operators with singular periodic potentials](https://arxiv.org/abs/0805.1000). It says: “with 1-periodic real-valued singular potentials q(x) ∈ H⁻¹per(ℝ,ℝ) on the Hilbert space L₂(ℝ). We show equivalence of five basic definitions of the operators S(q) and prove that they are self-adjoint.”

**Sources:**

- [V. Mikhailets, V. Molyboga, One-dimensional Schrödinger operators with singular periodic potentials, Methods Funct. Anal. Topology 14 (2008), no. 2, 184–200, arXiv:0805.1000](https://arxiv.org/abs/0805.1000)

### Time gaps weight delta integrals

**Remember:** Each discrete time contributes the length of its following gap.

*True by definition.* MSC 34N05 (Dynamic equations on time scales or measure chains). arXiv math.CA. Level 4: research.

**Definition.** A time scale is a closed subset of the real line on which time can vary. Between two times a &lt; b, extend a continuous function across each gap by its value at the gap’s left endpoint. Integrating this extension over \[a,b\] defines its delta integral.

**Problem.** On a time scale, the delta integral of a continuous function is the ordinary integral of its extension. On a finite interval of isolated time points it is the sum of point values weighted by the gaps, excluding the last point.

**How the definition helps.** The extension makes each gap contribute the function’s left endpoint value times the gap length (our own). On a real interval, it gives the usual integral directly (our own). The alternative definition takes the change in an antiderivative between the endpoints (our own). The equivalence uses the time-scale fundamental theorem of calculus (our own).

**Wikipedia:** [Time-scale calculus](https://en.wikipedia.org/wiki/Time-scale_calculus). It says: “the delta derivative turns out to be the Radon–Nikodym derivative with respect to this measure”

**Paper or page:** [Existence Result for Singular Second Order Dynamic Equations with Mixed Boundary Conditions](https://arxiv.org/abs/2506.16505v1). It says: “where the integral on the right is the usual Riemann integral from calculus.”

**Sources:**

- [Jonathan Eckhardt and Gerald Teschl, On the connection between the Hilger and Radon–Nikodym derivatives](https://doi.org/10.1016/j.jmaa.2011.07.041)
