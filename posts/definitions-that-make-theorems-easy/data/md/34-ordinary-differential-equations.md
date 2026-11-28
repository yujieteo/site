### A power of the unknown makes Bernoulli equations linear

**Remember:** Divide by yⁿ, and then y¹⁻ⁿ satisfies a linear equation.

*Makes the theorem clean to state or prove.* MSC 34A05 (Explicit solutions, first integrals of ordinary differential equations), 34A30. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A Bernoulli equation has the form y′ + p(t)y = q(t)yⁿ, where n is a real number other than zero or one. For y &gt; 0 put u = y¹⁻ⁿ, so u′ = (1 − n)y⁻ⁿy′ and dividing the equation by yⁿ leaves only u and u′.

**Problem.** Suppose p and q are continuous. Positive Bernoulli solutions correspond exactly to positive solutions of u′ + (1 − n)pu = (1 − n)q.

**How the definition helps.** Multiplying the equation by (1 − n)y⁻ⁿ turns y′ into u′ and y into u, and the right side becomes (1 − n)q (our own argument). The change runs both ways, because positive u has the inverse y = u<sup>(1/(1−n))</sup> (our own argument).

**Wikipedia:** [Bernoulli differential equation](https://en.wikipedia.org/wiki/Bernoulli_differential_equation). It says: “reduces any Bernoulli equation to a linear differential equation”

**Sources:** none listed. No primary source with a working link was found.

### A reciprocal integral straightens every nonstationary separable solution

**Remember:** Integrate 1/h only between zeros of h, and keep constant solutions.

*Rules out counterexamples.* MSC 34A05 (Explicit solutions, first integrals of ordinary differential equations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For y′ = g(t)h(y), on an interval where h never vanishes, the separation coordinate is H(y), the integral of 1/h from a fixed point a to y, so that the time derivative of H(y(t)) is y′/h(y) = g(t). Assume g is continuous and h is locally Lipschitz, with difference quotients bounded near each point, so solutions are unique.

**Problem.** Every solution stays at a zero of h or stays in one interval where h never vanishes. In that interval it satisfies H(y(t)) = H(y(s)) + ∫ₛᵗ g(r) dr.

**How the definition helps.** The chain rule gives the time derivative of H(y(t)) as g(t), and integrating from s to t gives the formula (our own argument). Uniqueness keeps a solution from reaching a zero of h, where a constant solution already sits. Dividing y′ = y by y would lose the constant solution y = 0 (our own example).

**Wikipedia:** [Separation of variables](https://en.wikipedia.org/wiki/Separation_of_variables). It says: “If one can evaluate the two integrals, one can find a solution to the differential equation.”

**Paper or page:** [Solution to Separable Differential Equation/General Result](https://proofwiki.org/wiki/Solution_to_Separable_Differential_Equation/General_Result). It says: “Its general solution is found by solving the integration”

**Sources:** none listed. No primary source with a working link was found.

### Exact equations give level sets

**Remember:** An exact equation says its potential does not change.

*True by definition.* MSC 34A05 (Explicit solutions, first integrals of ordinary differential equations). arXiv math.CA. Level 1: early undergraduate.

**Definition.** The equation M dx + N dy = 0 is exact if M and N are the partial derivatives ∂f/∂x and ∂f/∂y of one differentiable function f, its potential. Then the left side of the equation is the differential df.

**Problem.** A differentiable graph on an interval solves an exact equation exactly when f is constant along the graph.

**How the definition helps.** Along a graph y(x), the chain rule gives the derivative of f(x, y(x)) as M + Ny′, so the equation says this derivative is zero (our own account). A zero derivative on an interval means f is constant. For continuously differentiable M and N on a simply connected open region, ∂M/∂y = ∂N/∂x guarantees a potential.

**Paper or page:** [ProofWiki](https://proofwiki.org/wiki/Solution_to_Exact_Differential_Equation). It says: “The general solution of such an equation is: f(x, y) = C”

**Sources:** none listed. No primary source with a working link was found.

### A Lipschitz condition makes solutions of differential equations unique

**Remember:** Lipschitz bounds the slope of every chord, so solutions cannot split.

*Rules out counterexamples.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations), 26A16. arXiv math.CA. Level 1: early undergraduate.

**Definition.** On a rectangle around (t₀,y₀), f is Lipschitz in y if one constant L ≥ 0 bounds every chord slope: \|f(t,y₁) − f(t,y₂)\| ≤ L\|y₁ − y₂\| for all t, y₁, y₂ in the rectangle. Then the Picard map, which sends y to y₀ + ∫ f(s,y(s)) ds, changes distances by at most L times the length of the time interval (our own).

**Problem.** If f is continuous and Lipschitz in y, the initial value problem y′ = f(t, y), y(t₀) = y₀ has exactly one solution near t₀.

**How the definition helps.** On a short enough interval the Picard map sends a closed ball of continuous functions into itself and is a contraction (our own argument). Banach's fixed-point theorem then gives exactly one solution near t₀. Without the bound, y′ = y²ᐟ³ admits both y = 0 and y = (t/3)³ through (0,0).

**Wikipedia:** [Picard–Lindelöf theorem](https://en.wikipedia.org/wiki/Picard%E2%80%93Lindel%C3%B6f_theorem). It says: “The uniqueness theorem does not apply because the derivative of the function f(y) = y²ᐟ³ is not bounded in the neighborhood of y = 0 and therefore it is not Lipschitz continuous, violating the hypothesis of the theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Derivative coordinates turn higher order equations into first order systems

**Remember:** Each coordinate's derivative is the next coordinate.

*Makes the theorem clean to state or prove.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations), 34A30. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For an equation of order n, the state vector is (y, y′, …, y⁽ⁿ⁻¹⁾), so the derivative of each coordinate is the next coordinate.

**Problem.** An equation that gives the highest derivative in terms of time and these coordinates has an equivalent first-order system for the state vector. Its first coordinate recovers y, and its initial state records all the prescribed derivatives.

**How the definition helps.** Each coordinate differentiates to the next, so only the last one needs the original equation (our own argument). Reading the chain of coordinate equations back gives the converse and recovers all prescribed derivatives of y (our own argument). First-order existence and uniqueness theorems therefore transfer to higher order equations.

**nLab:** [ordinary differential equation](https://ncatlab.org/nlab/show/ordinary+differential+equation). It says: “a higher-order differential equation can be turned into a system of first-order equations.”

**Sources:** none listed. No primary source with a working link was found.

### Logarithmic time simplifies Euler equations

**Remember:** Logarithms turn changes of scale into shifts.

*True by definition.* MSC 34A25 (Analytical theory of ordinary differential equations: series, transformations, transforms, operational calculus, etc.), 34A30. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For x &gt; 0, the scale derivative is Dy = xy′, the rate of change of y per unit of log x. A second-order Euler equation x²y″ + axy′ + by = 0 has constant coefficients in D, because x²y″ = D(Dy) − Dy.

**Problem.** Set t = log x and write Y(t) = y(exp t). Then x²y″ + axy′ + by = 0 becomes Y″ + (a − 1)Y′ + bY = 0.

**How the definition helps.** With t = log x, the chain rule gives dY/dt = Dy, so D becomes ordinary differentiation (our own calculation). Then x²y″ becomes Y″ − Y′, which gives Y″ + (a − 1)Y′ + bY = 0.

**Wikipedia:** [Cauchy–Euler equation](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Euler_equation). It says: “can be used to reduce this equation to a linear differential equation with constant coefficients.”

**Sources:** none listed. No primary source with a working link was found.

### A clock coordinate makes a time dependent equation autonomous

**Remember:** Put the clock inside the state and the rule stops using outside time.

*Makes the theorem clean to state or prove.* MSC 34A26 (Geometric methods in ordinary differential equations), 34A12. arXiv math.DS, math.CA. Level 1: early undergraduate.

**Definition.** An autonomous system gives each derivative as a function of the current state alone. For x′ = f(t,x), add a clock s to the state with s′ = 1 and x′ = f(s,x), so the rule reads time from the state.

**Problem.** Every solution starting at time t₀ corresponds to a solution of this autonomous system with starting clock s(0) = t₀. The clock and position at elapsed time τ are t₀ + τ and x(t₀ + τ).

**How the definition helps.** The clock equation gives s(τ) = t₀ + τ, so the position obeys the original time-dependent rule (our own argument). Conversely, attaching that clock to an original solution gives a solution of the enlarged system (our own argument).

**Wikipedia:** [Autonomous system (mathematics)](https://en.wikipedia.org/wiki/Autonomous_system_%28mathematics%29). It says: “does not explicitly depend on the independent variable.”

**Sources:** none listed. No primary source with a working link was found.

### A nonzero leading coefficient keeps linear initial values free

**Remember:** Divide by the leading coefficient only where it stays nonzero.

*Rules out counterexamples.* MSC 34A30 (Linear ordinary differential equations and systems), 34A12. arXiv math.CA. Level 1: early undergraduate.

**Definition.** A linear equation a(t)y″ + b(t)y′ + c(t)y = g(t) is in normal form when a = 1. Where a never vanishes, dividing by a gives normal form, y″ = (g − by′ − cy)/a, with continuous coefficients.

**Problem.** Suppose a, b, c and g are continuous on an interval and a never vanishes there. Each prescribed value and slope at an interior point determine exactly one solution on the interval.

**How the definition helps.** Normal form makes (y, y′) solve a linear first-order system with continuous coefficients, so the linear existence and uniqueness theorem applies (our own argument). Where a vanishes this can fail: ty″ − y′ = 0 has every y = Ct² with value and slope zero at t = 0 (our own example).

**Paper or page:** [Existence and Uniqueness of Solution for Linear Second Order ODE with two Initial Conditions](https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Solution_for_Linear_Second_Order_ODE_with_two_Initial_Conditions). It says: “has a unique particular solution y(x) on \[a,b\] such that”

**Sources:** none listed. No primary source with a working link was found.

### Integrating factors reduce equations to integrals

**Remember:** Multiply until the left side is one product's derivative.

*True by definition.* MSC 34A30 (Linear ordinary differential equations and systems), 34A05. arXiv math.CA. Level 1: early undergraduate.

**Definition.** For y′ + py = q, an integrating factor is a nowhere-zero function μ that turns the left side into a product derivative: μ(y′ + py) = (μy)′ for every differentiable y.

**Problem.** Let p and q be continuous on an interval, and let P be an antiderivative of p. With μ = exp(P), the solutions are exactly the functions for which μy is an antiderivative of μq.

**How the definition helps.** The equation becomes (μy)′ = μq, so solving it takes one integration. Matching the product rule gives μ′ = pμ, which μ = exp(P) solves (our own calculation).

**Paper or page:** [ProofWiki](https://proofwiki.org/wiki/Integrating_Factor_for_First_Order_ODE/Function_of_One_Variable). It says: “\\mu(x) = e<sup>\\int g(x)\\,dx</sup> is an integrating factor for (1).”

**Sources:** none listed. No primary source with a working link was found.

### Reciprocal distance from a Riccati solution makes the equation linear

**Remember:** Subtract a known solution, then take the reciprocal.

*Makes the theorem clean to state or prove.* MSC 34A05 (Explicit solutions, first integrals of ordinary differential equations), 34A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Riccati equation has the form y′ = a(t)y² + b(t)y + c(t). Given one solution u, the difference w = y − u satisfies w′ = (2au + b)w + aw², which has no constant term, and v = 1/w removes the square (our own calculation).

**Problem.** For continuous coefficients, solutions y distinct from u correspond exactly to nowhere-zero solutions of v′ + (2au + b)v = −a on the same interval.

**How the definition helps.** Differentiating v = 1/w gives v′ + (2au + b)v = −a. Uniqueness keeps a solution distinct from u from ever meeting it, so v stays finite and nonzero. Then y = u + 1/v recovers the original solution.

**Wikipedia:** [Riccati equation](https://en.wikipedia.org/wiki/Riccati_equation). It says: “Its standard substitution is z = 1/s, which gives the linear equation”

**Sources:** none listed. No primary source with a working link was found.

### Riccati equations have global solutions on the projective line

**Remember:** Let y pass through infinity and the blow-up becomes an ordinary point.

*Rules out counterexamples.* MSC 34A05 (Explicit solutions, first integrals of ordinary differential equations), 34A12. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A projective Riccati equation lets y = u/v range over the projective line, with \[1:0\] as ∞, as the equation induced on lines \[u:v\] by the linear system u′ = a₁u + a₀v, v′ = −a₂u (our own calculation). In the chart y it reads y′ = a₀ + a₁y + a₂y², and in the chart w = v/u it reads w′ = −a₂ − a₁w − a₀w².

**Problem.** If the coefficients are continuous for all t, every solution with values in the projective line exists for all time. It depends on the initial value through a fractional linear map y(t) = (A(t)y(0) + B(t))/(C(t)y(0) + D(t)).

**How the definition helps.** A linear system with continuous coefficients has an invertible fundamental matrix at every time, so the induced map on lines exists for all t and is fractional linear. For y′ = 1 + y², the solution tan t reaches ∞, where the chart w passes through zero.

**nLab:** [Riccati equation](https://ncatlab.org/nlab/show/Riccati+equation). It says: “solutions of Riccati equations can blow up in finite time; however, these solutions become defined for all time if we let y take values in the projective line rather than the affine line”

**Sources:** none listed. No primary source with a working link was found.

### The exactness test identifies integrating factors in one variable

**Remember:** With μ depending only on x, exactness becomes μ′/μ = g(x).

*Makes the theorem clean to state or prove.* MSC 34A05 (Explicit solutions, first integrals of ordinary differential equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** An integrating factor is a nowhere-zero differentiable μ such that μM and μN are the two partial derivatives of one function. Work on an open rectangle where M and N have continuous first derivatives and N never vanishes. If μ depends only on x, the exactness test ∂ᵧ(μM) = ∂ₓ(μN) becomes μ′/μ = (∂ᵧM − ∂ₓN)/N (our own calculation).

**Problem.** Such a factor exists exactly when (∂ᵧM − ∂ₓN)/N depends only on x. If that quotient is g(x), one factor is exp of any antiderivative of g.

**How the definition helps.** So the quotient must be a function g of x alone, and then μ = exp of an antiderivative of g works. Sufficiency uses the theorem that matching cross derivatives on a rectangle give a potential.

**nLab:** [Poincaré lemma](https://ncatlab.org/nlab/show/Poincar%C3%A9+lemma). It says: “a closed differential 1-form ω is exact”

**Paper or page:** [Integrating Factor for First Order ODE/Function of One Variable](https://proofwiki.org/wiki/Integrating_Factor_for_First_Order_ODE/Function_of_One_Variable). It says: “is a function of x only.”

**Sources:** none listed. No primary source with a working link was found.

### A linear growth bound rules out finite time escape

**Remember:** Speed at most linear in distance means no escape in finite time.

*Rules out counterexamples. Confidence: medium.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A right side f has at most linear growth if, on each bounded closed time interval, some constants A, B ≥ 0 give ‖f(t,x)‖ ≤ A + B‖x‖ for every state x. So the speed of a solution grows at most in proportion to its distance from the origin.

**Problem.** Suppose f is continuous on ℝ × ℝⁿ and Lipschitz in the state variable on each compact box. Under the linear growth bound, every initial value gives a unique solution for all real times.

**How the definition helps.** Grönwall's inequality bounds ‖x(t)‖ on each finite time interval, forward and backward, because the speed is at most A + B‖x‖ (our own argument). A solution that stays bounded continues past any finite endpoint. Without the bound, y′ = y² with y(0) = 1 gives 1/(1 − t), which escapes at t = 1 (our own example).

**Wikipedia:** [Ordinary differential equation](https://en.wikipedia.org/wiki/Ordinary_differential_equation). It says: “if the conditions of Grönwall's inequality are met.”

**Sources:** none listed. No primary source with a working link was found.

### Exponentially weighted distance makes Picard iteration work on long intervals

**Remember:** Discount late errors exponentially, and Picard's map contracts on any interval.

*True by definition. Confidence: medium.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A Picard step sends a continuous curve x on \[0,T\] to the curve t ↦ y₀ + ∫₀ᵗ f(s,x(s)) ds. The weighted distance between two curves is the maximum over \[0,T\] of exp(−kt) times their separation, which discounts late times, where integral errors pile up.

**Problem.** Suppose f is continuous on \[0,T\] × ℝⁿ and satisfies ‖f(t,x) − f(t,y)‖ ≤ L‖x − y‖. Picard iteration converges uniformly from every continuous curve to the unique solution with initial value y₀.

**How the definition helps.** The weight makes one step shrink weighted distance by the factor L/k, so k &gt; L gives a contraction on the whole interval (our own integral estimate). Since exp(−kT) ≤ exp(−kt) ≤ 1, the weighted and uniform distances have the same convergent and Cauchy sequences (our own argument). The contraction mapping theorem gives uniform convergence to a fixed point, which solves the equation.

**nLab:** [ordinary differential equation](https://ncatlab.org/nlab/show/ordinary+differential+equation). It says: “Thinking of Picard iteration as an operator between Banach spaces of continuous functions, use Lipschitz continuity and boundedness”

**Paper or page:** [Fixed Point Formulation of Explicit ODE](https://proofwiki.org/wiki/Fixed_Point_Formulation_of_Explicit_ODE). It says: “Then a fixed point of T in 𝒳 is a solution to the above ODE.”

**Sources:** none listed. No primary source with a working link was found.

### Finite maximal time forces escape

**Remember:** A maximal solution can never be restarted past its end.

*Makes the theorem clean to state or prove.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A solution is maximal if no solution extends it to a strictly longer interval, so it can never be restarted near its end and continued further.

**Problem.** For a smooth vector field on an open set, a maximal trajectory with a finite forward endpoint eventually leaves every compact subset of that set.

**How the definition helps.** Suppose the trajectory returns to a compact set K at times arbitrarily close to its finite endpoint (our own argument). Local existence gives all starting points in K a common positive time, so restarting late enough reaches past the endpoint. Uniqueness glues the two pieces together, which contradicts maximality.

**Wikipedia:** [Ordinary differential equation](https://en.wikipedia.org/wiki/Ordinary_differential_equation). It says: “A solution that has no extension is called a maximal solution.”

**Sources:** none listed. No primary source with a working link was found.

### Integral solutions give a bound for errors in data and forcing

**Remember:** Write solutions as integrals so both errors enter one bound.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations). arXiv math.CA. Level 2: later undergraduate.

**Definition.** A continuous curve x on \[0,T\] is an integral solution with initial state x₀ if x(t)=x₀+∫₀ᵗ f(s,x(s)) ds for every t∈\[0,T\].

**Problem.** Let x and y solve the equations on \[0,T\] with continuous right sides f and g and initial states x₀ and y₀, where f is uniformly L-Lipschitz in the state and ‖f − g‖ ≤ ε on their common domain. Then ‖x(t) − y(t)‖ ≤ (‖x₀ − y₀‖ + εt)exp(Lt) for every t in \[0,T\].

**How the definition helps.** Subtracting the two integral equations bounds the separation d(s) by ‖x₀ − y₀‖ + εt + L∫₀ˢ d(r) dr for s ≤ t (our own argument). Grönwall's inequality turns this into the stated bound.

**Wikipedia:** [Grönwall's inequality](https://en.wikipedia.org/wiki/Gr%C3%B6nwall%27s_inequality). It says: “an important tool to obtain various estimates”

**Paper or page:** [Fixed Point Formulation of Explicit ODE](https://proofwiki.org/wiki/Fixed_Point_Formulation_of_Explicit_ODE). It says: “(Tx)(t) = x₀ + ∫ₜ₀ᵗ f(s,x(s)) ds”

**Sources:** none listed. No primary source with a working link was found.

### One-sided bounds control separation

**Remember:** Bound only the part of velocity that pulls the states apart.

*True by definition.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations). arXiv math.DS, math.AP. Level 2: later undergraduate.

**Definition.** A velocity field b on a Euclidean domain has forward one-sided Lipschitz bound L if (b(x) − b(y))·(x − y) ≤ L‖x − y‖² for all states x, y there. This bounds only the part of the velocity difference that pulls the two states apart.

**Problem.** Two solutions satisfy \|x(t) − y(t)\| ≤ exp(Lt)\|x(0) − y(0)\| for forward times where both exist. In particular they cannot split from the same starting point.

**How the definition helps.** The dot product is half the time derivative of the squared distance between two solutions, so exp(−2Lt) times that squared distance does not increase (our own proof). Taking square roots gives the estimate. The paper states the lower bound −C, which becomes this upper bound when the velocity changes sign.

**Paper or page:** [Transport equations and flows with one-sided Lipschitz velocity fields](https://arxiv.org/abs/2306.13288v1). It says: “(B(x) − B(y)) · (x − y) ≥ −C\|x − y\|²”

**Sources:**

- [Transport equations and flows with one-sided Lipschitz velocity fields](https://arxiv.org/abs/2306.13288v1)

### Differentiating a Frobenius family gives the double root logarithm

**Remember:** At a double root, differentiating in r produces the logarithm.

*Makes the theorem clean to state or prove.* MSC 34A25 (Analytical theory of ordinary differential equations: series, transformations, transforms, operational calculus, etc.), 34A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For t²y″ + tp(t)y′ + q(t)y = 0 with p and q analytic near zero, let I(r) = r(r − 1) + p(0)r + q(0). Near a double root r₀ of I, let F(r,t) be tʳ times a series starting with one whose coefficients cancel every later power, so that substitution leaves only I(r)tʳ.

**Problem.** For sufficiently small t &gt; 0, F(r₀,t) and its derivative with respect to r at r₀ are independent solutions. The second equals F(r₀,t) log t plus a convergent power series multiplied by t raised to r₀.

**How the definition helps.** Since I and its derivative both vanish at r₀, F(r₀,t) and the r-derivative of F at r₀ are both solutions (our own calculation). Differentiating tʳ gives tʳ log t, so the second solution contains F(r₀,t) log t and is independent of the first. The analytic work is justifying term-by-term differentiation in r on a common interval of convergence.

**Wikipedia:** [Frobenius method](https://en.wikipedia.org/wiki/Frobenius_method). It says: “with respect to the parameter r, mentioned above.”

**Sources:**

- [Ferdinand Georg Frobenius (1873), Ueber die Integration der linearen Differentialgleichungen durch Reihen](https://doi.org/10.1515/crll.1873.76.214)

### Noninteger root gaps give two pure Frobenius series

**Remember:** A noninteger gap never lets a later index hit the other root.

*Rules out counterexamples.* MSC 34A25 (Analytical theory of ordinary differential equations: series, transformations, transforms, operational calculus, etc.), 34A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For t²y″ + tp(t)y′ + q(t)y = 0 with p and q convergent power series at zero, the indicial roots solve r(r − 1) + p(0)r + q(0) = 0. Two real roots are nonresonant if their difference is not an integer, so neither root plus a positive integer is a root (our own explanation).

**Problem.** For nonresonant roots, each root gives a convergent Frobenius solution, a power of t times a series with nonzero constant term. The two solutions are independent near zero on the positive side.

**How the definition helps.** The recurrence for the series at root r divides coefficient k by the indicial polynomial at r + k, which is nonzero for k ≥ 1 (our own explanation). Different leading powers give independence, and the Frobenius convergence proof gives convergence (our own explanation). For t²y″ + ty = 0 the roots 0 and 1 differ by one, and a series starting at power zero forces its constant term to vanish (our own counterexample).

**Wikipedia:** [Frobenius method](https://en.wikipedia.org/wiki/Frobenius_method). It says: “If the difference between the roots is not an integer”

**Sources:**

- [Ferdinand Georg Frobenius (1873), Ueber die Integration der linearen Differentialgleichungen durch Reihen](https://doi.org/10.1515/crll.1873.76.214)

### Scaling Taylor coefficients by factorials makes differentiation a shift

**Remember:** Divide by factorials so taking a derivative only moves the list.

*True by definition.* MSC 34A25 (Analytical theory of ordinary differential equations: series, transformations, transforms, operational calculus, etc.), 34A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A factorial-scaled power series is ∑ₖ₌₀<sup>∞</sup> aₖtᵏ/k!, where aₖ is the kth formal derivative at zero. Since the derivative of tᵏ/k! is tᵏ⁻¹/(k−1)!, differentiation just shifts the list (a₀, a₁, …) one place left.

**Problem.** Suppose p and q have Taylor series at zero. For y″ + py′ + qy = 0, each choice of a₀ and a₁ determines exactly one formal solution.

**How the definition helps.** At index k, y″ contributes aₖ₊₂, while py′ and qy use only a₀ through aₖ₊₁ (our own argument). So the equation fixes each aₖ₊₂ from earlier terms once a₀ and a₁ are chosen. Convergence needs a separate estimate.

**Wikipedia:** [Power series solution of differential equations](https://en.wikipedia.org/wiki/Power_series_solution_of_differential_equations). It says: “A much simpler way of solving this equation (and power series solution in general) using the Taylor series form of the expansion.”

**Sources:** none listed. No primary source with a working link was found.

### The lowest power in a Frobenius series fixes its starting exponent

**Remember:** The lowest power sees only c₀ times I(r).

*Makes the theorem clean to state or prove.* MSC 34A25 (Analytical theory of ordinary differential equations: series, transformations, transforms, operational calculus, etc.), 34A30. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Consider t²y″ + tp(t)y′ + q(t)y = 0 with p and q convergent series at zero. A Frobenius series is tʳ times a power series with nonzero constant term c₀, and substitution gives its lowest power tʳ the coefficient c₀I(r), where I(r) = r(r − 1) + p(0)r + q(0).

**Problem.** The starting exponent of a Frobenius solution must be a root of I. For the larger real root, or a double root, exactly one such solution exists up to scaling near zero for t &gt; 0.

**How the definition helps.** Only the first term and the constant parts of p and q reach the lowest power, so c₀I(r) = 0 forces I(r) = 0 (our own calculation). At the larger real root or a double root, I(r + k) ≠ 0 for every positive integer k, so the recurrence fixes all later terms. The Frobenius convergence theorem gives convergence near zero.

**Wikipedia:** [Frobenius method](https://en.wikipedia.org/wiki/Frobenius_method). It says: “the coefficients of the generalized power series obey a recurrence relation”

**Sources:**

- [Ferdinand Georg Frobenius (1873), Ueber die Integration der linearen Differentialgleichungen durch Reihen](https://doi.org/10.1515/crll.1873.76.214)

### A change of starting time makes transition matrices compose

**Remember:** The intermediate matrix and its inverse cancel.

*True by definition.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** A fundamental matrix U(t) has columns forming a basis of solutions of x′ = A(t)x. Define Φ(t,s) = U(t)U(s)⁻¹ as the transition matrix that sends a state at s to its state at t.

**Problem.** For continuous A on an interval and any times r, s and t there, Φ(t,s)Φ(s,r) = Φ(t,r). Also Φ(t,s)⁻¹ = Φ(s,t).

**How the definition helps.** Writing Φ(t,s) = U(t)U(s)⁻¹ makes the middle factors U(s)⁻¹U(s) cancel in the product (our own argument). U(s) is invertible by uniqueness, so Φ(t,s) sends each state at s to the unique solution's state at t. Hence Φ does not depend on the chosen basis.

**Wikipedia:** [State-transition matrix](https://en.wikipedia.org/wiki/State-transition_matrix). It says: “Φ(t,τ) ≡ U(t)U⁻¹(τ)”

**Paper or page:** [General Vector Solution of Fundamental Matrix](https://proofwiki.org/wiki/General_Vector_Solution_of_Fundamental_Matrix). It says: “Φ(t)c is a general solution of x′ = A(t)x.”

**Sources:** none listed. No primary source with a working link was found.

### A moving solution basis removes the homogeneous part of the equation

**Remember:** Ride along with unforced solutions, and only the forcing moves you.

*True by definition.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For x′ = A(t)x + b(t), choose a fundamental matrix U, whose columns form a basis of solutions of x′ = Ax. Variation of parameters writes x = Uc with moving coordinates c(t) = U(t)⁻¹x(t), and since U′ = AU the product rule leaves Uc′ = b (our own calculation).

**Problem.** For continuous coefficients and forcing, the solution with x(s) = xₛ is x(t) = U(t)\[U(s)⁻¹xₛ + ∫ₛᵗ U(r)⁻¹b(r) dr\].

**How the definition helps.** So c′ = U⁻¹b, and integrating from s gives the formula (our own calculation). U(t) stays invertible because a solution of x′ = Ax that is zero at one time is zero everywhere, by uniqueness (our own explanation).

**Wikipedia:** [Variation of parameters](https://en.wikipedia.org/wiki/Variation_of_parameters). It says: “The general method of variation of parameters allows for solving an inhomogeneous linear equation”

**Paper or page:** [General Vector Solution of Fundamental Matrix](https://proofwiki.org/wiki/General_Vector_Solution_of_Fundamental_Matrix). It says: “Φ(t)c is a general solution of x′ = A(t)x.”

**Sources:** none listed. No primary source with a working link was found.

### A polynomial in differentiation gives all repeated root solutions

**Remember:** Remove the exponential and a repeated root becomes repeated differentiation.

*Makes the theorem clean to state or prove.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** Let D mean differentiation, and write a homogeneous constant-coefficient equation as p(D)y = 0, where the characteristic polynomial p carries the equation's coefficients. The key rule is (D − λ)(exp(λt)g) = exp(λt)g′, so on exp(λt) times a polynomial, D − λ just differentiates the polynomial.

**Problem.** For every root λ of multiplicity m, take the functions exp(λt)tʲ for integers j from zero through m − 1. Together these functions form a complex basis for all solutions.

**How the definition helps.** A root λ of multiplicity m makes (D − λ)ᵐ a factor of p, and it kills exp(λt)tʲ for j &lt; m because m derivatives kill such a polynomial (our own argument). The other factors act invertibly on each such family, which proves independence of the whole list. The initial-value theorem gives a solution space of dimension equal to the degree of p, so the list spans.

**Wikipedia:** [Characteristic equation (calculus)](https://en.wikipedia.org/wiki/Characteristic_equation_%28calculus%29). It says: “The roots may be real or complex, as well as distinct or repeated.”

**Paper or page:** [Derivation of Auxiliary Equation to Constant Coefficient LSOODE](https://proofwiki.org/wiki/Derivation_of_Auxiliary_Equation_to_Constant_Coefficient_LSOODE). It says: “The fact that the solutions of (2) dictate the general solution of (1) can be derived.”

**Sources:** none listed. No primary source with a working link was found.

### Initial data give coordinates on the linear solution space

**Remember:** Count the freely chosen starting values to find the dimension.

*Makes the theorem clean to state or prove.* MSC 34A30 (Linear ordinary differential equations and systems), 34A12. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a real homogeneous linear equation of order n ≥ 1, fix a time s in its interval. The initial-data map sends each real solution y to (y(s), y′(s), …, y⁽ⁿ⁻¹⁾(s)) in ℝⁿ, and it is linear because differentiation and evaluation are.

**Problem.** For an equation of order n with continuous coefficients and leading coefficient one, the initial-data map is a linear bijection onto ℝⁿ. Thus the real solution space has dimension n.

**How the definition helps.** The linear existence theorem makes the map onto, and uniqueness makes it one-to-one (our own argument). A linear bijection onto ℝⁿ gives dimension n.

**Paper or page:** [Analysis of the Geometric Structure of Neural Networks and Neural ODEs via Morse Functions](https://arxiv.org/abs/2405.09351v3). It says: “has a unique solution y: ℐ → ℝᵐ.”

**Sources:** none listed. No primary source with a working link was found.

### One Wronskian value tests independence

**Remember:** Value-and-slope columns at one point decide independence everywhere.

*Rules out counterexamples.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.DS. Level 2: later undergraduate.

**Definition.** Take two solutions of y″ + py′ + qy = 0 on an interval with continuous coefficients p and q. Their Wronskian at a point is the determinant of their value-and-slope columns there, so it is nonzero exactly when their initial data at that point are independent.

**Problem.** The two solutions are linearly independent if and only if their Wronskian is nonzero at any one point.

**How the definition helps.** A combination with zero initial data at one point is zero on the whole interval, by uniqueness (our own proof). So the solutions are independent exactly when their data at any one point are. Without a common equation, x² and x\|x\| are independent on (−1,1) although their Wronskian vanishes everywhere.

**nLab:** [Wronskian](https://ncatlab.org/nlab/show/Wronskian). It says: “The Wronskian is its determinant.”

**Wikipedia:** [Wronskian](https://en.wikipedia.org/wiki/Wronskian). It says: “A common misconception is that W = 0 everywhere implies linear dependence.”

**Paper or page:** [Zero Wronskian of Solutions of Homogeneous Linear Second Order ODE iff Linearly Dependent](https://proofwiki.org/wiki/Zero_Wronskian_of_Solutions_of_Homogeneous_Linear_Second_Order_ODE_iff_Linearly_Dependent). It says: “the Wronskian W(y₁, y₂) of y₁ and y₂ is zero everywhere on \[a,b\].”

**Sources:** none listed. No primary source with a working link was found.

### Root multiplicity fixes the trial space for exponential polynomial forcing

**Remember:** One extra factor of t for each time λ is a root.

*Makes the theorem clean to state or prove.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For p(D)y = exp(λt)P(t), with p a nonzero constant-coefficient polynomial in D = d/dt and P of degree at most d, the trial space is all exp(λt)tᵐQ(t) with Q of degree at most d. Here m is the multiplicity of λ as a root of p, zero if it is not a root. The factor tᵐ restores the m degrees that the factor Dᵐ of p(D + λ) removes.

**Problem.** For each polynomial P of degree at most d, p(D)y = exp(λt)P(t) has exactly one solution in this trial space.

**How the definition helps.** Removing exp(λt) turns the equation into p(D + λ)(tᵐQ) = P, and p(D + λ) = q(D)Dᵐ with q(0) ≠ 0 (our own argument). Dᵐ maps the polynomials tᵐQ bijectively onto polynomials of degree at most d. q(D) preserves degree and scales leading coefficients by q(0), so it is invertible on that finite-dimensional space.

**Wikipedia:** [Method of undetermined coefficients](https://en.wikipedia.org/wiki/Method_of_undetermined_coefficients). It says: “we have to multiply our guess by a sufficiently large power of x to make it linearly independent”

**Sources:** none listed. No primary source with a working link was found.

### The ratio to one solution gives a second by integration

**Remember:** Find how the ratio changes, then multiply back by the known solution.

*Makes the theorem clean to state or prove.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** For y″ + py′ + qy = 0 with a known solution u that has no zeros on the interval, use the ratio v = y/u as the unknown. Because u already solves the equation, every term with v alone cancels, and v′ obeys the first-order equation (u²v′)′ = −pu²v′.

**Problem.** Assume p and q are continuous on the interval and choose any base point s there. Then y(t) = u(t)∫ₛᵗ exp(−∫ₛʳ p(z) dz)/u(r)² dr is a second independent solution.

**How the definition helps.** The equation for v′ is first order, so one exponential solves it (our own calculation). With u(s)²v′(s) = 1 we get u²v′ = exp(−∫ₛʳ p), and integrating v′ gives the formula. Since v′ ≠ 0, the ratio v is not constant, so y is independent of u.

**Wikipedia:** [Reduction of order](https://en.wikipedia.org/wiki/Reduction_of_order). It says: “a second linearly independent solution to this differential equation”

**Sources:** none listed. No primary source with a working link was found.

### Wronskian rows make Abel’s formula a scalar equation

**Remember:** In the derivative of the determinant, only the last row can contribute.

*Makes the theorem clean to state or prove.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Wronskian of n solutions of a homogeneous linear equation of order n is a determinant. Its rows list the solutions, then their first derivatives, and so on through order n − 1. Differentiating it row by row changes only the last row, because every other differentiated row repeats the row below it.

**Problem.** Suppose the leading coefficient is one and all coefficients are continuous. If p multiplies the derivative of order n − 1, then the Wronskian satisfies W(t) = W(s) exp(−∫ₛᵗ p(r) dr).

**How the definition helps.** So W′ is the determinant with the last row replaced by the nth derivatives (our own argument). The equation writes that row as a combination of all rows, and every term except −p times the last row repeats a row and vanishes. Thus W′ = −pW, which integrates to the formula.

**nLab:** [Wronskian](https://ncatlab.org/nlab/show/Wronskian). It says: “The Wronskian is its determinant.”

**Wikipedia:** [Abel's identity](https://en.wikipedia.org/wiki/Abel%27s_identity). It says: “Differentiating the Wronskian using the product rule gives”

**Sources:** none listed. No primary source with a working link was found.

### Exponential weights give both forms of Grönwall’s inequality

**Remember:** Weight a bound by the inverse of its expected growth.

*True by definition.* MSC 34A40 (Differential inequalities involving functions of a single real variable), 26D10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For continuous b ≥ 0 on \[0,T\], the weight w(t) = exp(−∫₀ᵗ b(s) ds) divides out the growth that u′ = bu would produce, since w′ = −bw.

**Problem.** If u is differentiable and u′ ≤ bu, then wu ≤ u(0). If continuous u satisfies u(t) ≤ a + ∫₀ᵗ b(s)u(s) ds for constant a ≥ 0, then wu ≤ a.

**How the definition helps.** Since w′ = −bw, the bound u′ ≤ bu gives (wu)′ ≤ 0, so wu ≤ u(0) (our own calculation). For the integral form, let v be the right side; then u ≤ v and v′ = bu ≤ bv because b ≥ 0. The differential bound applied to v gives wu ≤ wv ≤ v(0) = a.

**Wikipedia:** [Grönwall's inequality](https://en.wikipedia.org/wiki/Gr%C3%B6nwall%27s_inequality). It says: “Thus the derivative of the function u(t)/v(t) is non-positive”

**Sources:**

- [T. H. Gronwall (1919), Note on the Derivatives with Respect to a Parameter of the Solutions of a System of Differential Equations](https://doi.org/10.2307/1967124)

### Disconjugacy gives unique two-point solutions

**Remember:** No two zeros means no two solutions share the same two values.

*Rules out counterexamples.* MSC 34B05 (Linear boundary value problems for ordinary differential equations), 34C10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** A real equation y″ + py′ + qy = 0 is disconjugate on an interval if no nonzero solution vanishes at two distinct points there. So two solutions with the same values at two points differ by a solution with two zeros, and are equal.

**Problem.** For a disconjugate homogeneous second-order linear equation with continuous coefficients, exactly one solution takes any two prescribed values at two distinct points.

**How the definition helps.** Disconjugacy makes the linear map from solutions to their values at the two points injective. The solution space has dimension two by initial-value existence and uniqueness, so this map is also surjective (our own proof). Without disconjugacy it fails: for y″ + y = 0, every multiple of sin t vanishes at 0 and π (our own).

**Paper or page:** [Strict domain monotonicity of the principal eigenvalue and a characterization of lower boundedness for the Friedrichs extension of four-coefficient Sturm-Liouville operators](https://arxiv.org/abs/2201.05948v2). It says: “there exists a unique real-valued solution u∗(λ, ·) of (τ − λ)u = 0 on (a,b)”

**Sources:**

- [Fritz Gesztesy, Roger Nichols (2022), Strict domain monotonicity of the principal eigenvalue and a characterization of lower boundedness for the Friedrichs extension of four-coefficient Sturm-Liouville operators](https://arxiv.org/abs/2201.05948v2)

### Zero flux at both ends requires a zero net load

**Remember:** Zero flux can balance only a zero net load.

*Rules out counterexamples.* MSC 34B05 (Linear boundary value problems for ordinary differential equations), 34B24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Neumann problem for −(py′)′ = f on \[a,b\] sets the flux py′ to zero at both ends. Integrating the equation then shows that ∫ₐᵇ f, the flux at a minus the flux at b, is zero. A solution is normalized when its own integral over \[a,b\] is zero, which removes the free constant.

**Problem.** Let p be positive and continuously differentiable and f continuous on a closed interval \[a,b\] with a&lt;b. The normalized Neumann problem −(py′)′=f has exactly one solution if ∫ₐᵇ f(x) dx=0, and none otherwise.

**How the definition helps.** Integrating the equation shows the condition on f is necessary, so even the constant load f = 1 has no solution. Conversely, set py′(x) = −∫ₐˣ f, which vanishes at both ends when ∫ₐᵇ f = 0, then divide by p and integrate (our own proof). This gives y up to a constant, and the zero-mean condition fixes that constant.

**Wikipedia:** [Neumann boundary condition](https://en.wikipedia.org/wiki/Neumann_boundary_condition). It says: “the condition specifies the values of the derivative applied at the boundary of the domain.”

**Sources:** none listed. No primary source with a working link was found.

### A shooting residual exposes the condition for a resonant load

**Remember:** Shoot from zero, adjust the starting flux, read the far value.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34B24 (Sturm-Liouville theory), 34B05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Shoot Ly = f, where Ly = −(py′)′ + qy on \[a,b\], from y(a) = 0 with initial flux p(a)y′(a) = s. The shooting residual is the final value y(b), so the problem y(a) = y(b) = 0 is solvable exactly when some s gives residual zero. Here p is positive and continuously differentiable, and q and f are real and continuous.

**Problem.** Suppose a nonzero h solves Lh = 0 with h(a) = h(b) = 0. The shooting residual can vanish exactly when the integral of hf over \[a,b\] is zero.

**How the definition helps.** Integration by parts against h leaves one boundary term: ∫ₐᵇ hf = y(b)p(b)h′(b) (our own proof). The factor p(b)h′(b) is nonzero, since h(b) = 0 together with zero flux at b would make h vanish everywhere. Changing s adds a multiple of h, so the residual is the same for every s.

**Wikipedia:** [Shooting method](https://en.wikipedia.org/wiki/Shooting_method). It says: “Roots of F and solutions to the boundary value problem are equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### One extra endpoint constraint interlaces the eigenvalues

**Remember:** One extra endpoint condition places each Dirichlet eigenvalue between two mixed eigenvalues.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34B24 (Sturm-Liouville theory), 34L15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For a regular Sturm–Liouville problem on \[a,b\], the Rayleigh quotient of a nonzero real function y in H¹(\[a,b\]) is ∫(p(y′)² + qy²) divided by ∫wy². Mixed eigenvalues are its min-max values over functions vanishing at a, and Dirichlet eigenvalues are its min-max values over those that also vanish at b, one condition more.

**Problem.** For a regular Sturm–Liouville problem, the nth Dirichlet eigenvalue lies strictly between the nth and (n + 1)th mixed eigenvalues. The mixed conditions impose zero value at a and zero flux py′ at b.

**How the definition helps.** One extra linear condition lowers each trial space by at most one dimension, so min-max gives both weak inequalities (our own proof). At a shared eigenvalue, both eigenfunctions vanish at a, so uniqueness makes them proportional. The common eigenfunction would then have zero value and zero flux at b, so it would vanish everywhere.

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “a result that gives a variational characterization of eigenvalues”

**Sources:** none listed. No primary source with a working link was found.

### Prüfer angles count the zeros of Dirichlet eigenfunctions

**Remember:** Each upward multiple of π marks one zero of the solution.

*Makes the theorem clean to state or prove.* MSC 34B24 (Sturm-Liouville theory), 34C10. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The Prüfer angle θ of a solution of −(py′)′ + qy = λwy is the continuous polar angle of the point (py′, y). It starts at θ(a) = 0 for the solution with y(a) = 0 and p(a)y′(a) = 1. The solution vanishes exactly when θ is a multiple of π, and there θ′ = 1/p &gt; 0, so θ crosses each such level once and only upward.

**Problem.** The nth eigenfunction of a regular Dirichlet Sturm–Liouville problem has n − 1 interior zeros, numbering from one. The interior zeros of the left solution at λ count the eigenvalues strictly below λ.

**How the definition helps.** So the interior zeros are the multiples of π that θ passes strictly before b, which excludes a zero at b itself (our own argument). The oscillation theorem shows that θ(b) increases strictly with λ from near zero and equals nπ exactly at the nth eigenvalue. Hence the nth eigenfunction has n − 1 interior zeros, and at λ the count equals the eigenvalues below λ.

**Wikipedia:** [Shooting method](https://en.wikipedia.org/wiki/Shooting_method). It says: “The n-th excited state ψₙ(x) has n roots where ψₙ(x) = 0.”

**Sources:**

- [Charles Sturm, Mémoire sur les Équations différentielles linéaires du second ordre (1836)](https://www.numdam.org/item/JMPA_1836_1_1__106_0/)
- [Gerald Teschl, Ordinary Differential Equations and Dynamical Systems (2012), Theorems 5.17 and 5.18](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf)

### Regular Sturm–Liouville problems have a full basis of eigenfunctions

**Remember:** Finite interval, positive coefficients, one condition per end: pure eigenvalues.

*Rules out counterexamples.* MSC 34B24 (Sturm-Liouville theory), 34B09. arXiv math.CA, math.SP. Level 2: later undergraduate.

**Definition.** A regular Sturm–Liouville problem is (py′)′ + qy = −λwy on a finite closed interval, with p, p′, q and w real and continuous and p, w positive. Its separated conditions impose one nontrivial real homogeneous linear relation on y and y′ at each endpoint independently. These make the operator self-adjoint and bounded below with a compact resolvent, which a half-line or singular endpoint can destroy (our own).

**Problem.** For a regular problem, the eigenvalues are real, simple and increase to infinity. The normalized eigenfunctions form an orthonormal basis of the weighted L² space on \[a, b\].

**How the definition helps.** A bounded-below self-adjoint operator with compact resolvent has real eigenvalues increasing to infinity and an orthonormal eigenbasis, by the compact spectral theorem (our own). Separated conditions fix the starting data up to scale, so initial-value uniqueness makes each eigenvalue simple (our own). On a half-line this fails: the Dirichlet problem −y″ = λy on \[0,∞) has purely continuous spectrum (our own).

**Wikipedia:** [Sturm–Liouville theory](https://en.wikipedia.org/wiki/Sturm%E2%80%93Liouville_theory). It says: “If the interval is unbounded, or if the coefficients have singularities at the boundary points, one calls L singular. In this case, the spectrum no longer consists of eigenvalues alone and can contain a continuous component.”

**Sources:** none listed. No primary source with a working link was found.

### Separated endpoints give simple eigenvalues

**Remember:** One endpoint already limits starting data to a line.

*Rules out counterexamples.* MSC 34B24 (Sturm-Liouville theory). arXiv math.SP. Level 2: later undergraduate.

**Definition.** Consider −(py′)′ + qy = λwy on a finite closed interval, with p continuously differentiable, q and w real and continuous, and p, w positive. Separated conditions impose one nontrivial homogeneous linear relation between y and y′ at each endpoint separately. So the condition at the left endpoint alone confines the starting data (y, y′) there to a line (our own).

**Problem.** Each eigenvalue of a regular scalar Sturm–Liouville problem with separated conditions has a one-dimensional eigenspace.

**How the definition helps.** Initial-value uniqueness makes a solution depend linearly and injectively on its starting data, so the eigenspace has dimension at most one (our own argument). Periodic conditions are not separated: for −y″ on \[0, 2π\] with periodic ends, sine and cosine share eigenvalue 1 (our own).

**Wikipedia:** [Sturm–Liouville theory](https://en.wikipedia.org/wiki/Sturm%E2%80%93Liouville_theory). It says: “is a unique eigenfunction yₙ = yₙ(x) (up to constant multiple)”

**Paper or page:** [Orthogonality of Solutions to the Sturm-Liouville Equation with Distinct Eigenvalues](https://proofwiki.org/wiki/Orthogonality_of_Solutions_to_the_Sturm-Liouville_Equation_with_Distinct_Eigenvalues). It says: “with separated boundary conditions of the form”

**Sources:** none listed. No primary source with a working link was found.

### The transfer trace detects periodic and antiperiodic modes

**Remember:** Trace two returns an endpoint pair; trace minus two flips it.

*True by definition.* MSC 34B24 (Sturm-Liouville theory), 34B09. arXiv math.CA, math.DS. Level 2: later undergraduate.

**Definition.** For the regular equation −(py′)′ + qy = λwy, the transfer matrix sends the left endpoint pair (y, py′) to the right endpoint pair. It has determinant one, so its eigenvalues are ξ and 1/ξ, and its trace D = ξ + 1/ξ is the Floquet discriminant.

**Problem.** A periodic eigenvalue has discriminant 2, and an antiperiodic eigenvalue has discriminant −2. Conversely, these trace values give eigenfunctions whose right endpoint pair equals the left pair or its negative, respectively.

**How the definition helps.** A periodic or antiperiodic eigenfunction is an eigenvector of the transfer matrix for 1 or −1. With determinant one the characteristic polynomial is t² − Dt + 1, so 1 is a root exactly when D = 2 and −1 exactly when D = −2. The determinant is one because the weighted Wronskian p(uv′ − u′v) is constant (our own proof).

**Wikipedia:** [Floquet theory](https://en.wikipedia.org/wiki/Floquet_theory). It says: “The values of E for which the Floquet multiplier satisfies ξ = ±1 are called the periodic and antiperiodic eigenvalues.”

**Paper or page:** [Spectral Properties of Singular Sturm-Liouville Operators via Boundary Triples and Perturbation Theory](https://arxiv.org/abs/2211.08744v1). It says: “if and only if D(R,λ) = 2 cos(α).”

**Sources:** none listed. No primary source with a working link was found.

### Zero extension shows why a longer interval lowers the first eigenvalue

**Remember:** Pad the old minimizer with zeros; it competes but cannot win.

*True by definition.* MSC 34B24 (Sturm-Liouville theory), 34L15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The first Dirichlet eigenvalue of −(py′)′ + qy = λwy is the minimum of the Rayleigh quotient ∫(p(y′)² + qy²) / ∫wy². The minimum runs over nonzero continuous, piecewise smooth y vanishing at both ends. A function admissible on a shorter interval stays admissible on a longer one after extension by zero, with the same quotient.

**Problem.** On finite intervals assume p is positive and continuously differentiable, q and w are real and continuous, and w is positive. Extending either endpoint outward with the same coefficients strictly lowers the first Dirichlet eigenvalue.

**How the definition helps.** So the minimum on the longer interval is at most the minimum on the shorter. Equality would make the zero extension a minimizer, and every minimizer solves the differential equation (our own proof). A solution vanishing on the added piece vanishes everywhere by uniqueness, which is a contradiction.

**Paper or page:** [Strict domain monotonicity of the principal eigenvalue and a characterization of lower boundedness for the Friedrichs extension of four-coefficient Sturm-Liouville operators](https://arxiv.org/abs/2201.05948v2). It says: “so that (c,d) is strictly contained in (a,b)”

**Sources:**

- [Fritz Gesztesy and Roger Nichols, Strict domain monotonicity of the principal eigenvalue and a characterization of lower boundedness for the Friedrichs extension of four-coefficient Sturm-Liouville operators, Theorem 1.1](https://arxiv.org/abs/2201.05948v2)

### A Green function adds the responses to point sources

**Remember:** Add the point responses with the load as their weight.

*True by definition.* MSC 34B27 (Green's functions for ordinary differential equations), 34B05. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For each interior point s of \[−π,π\], the Dirichlet Green function G(x,s) for −d²/dx² is the response to a unit point load at s. It is continuous, zero at both ends, linear on each side of s, and its slope drops by exactly 1 at s.

**Problem.** For continuous f, the unique solution of −y″ = f with zero endpoint values is the integral of G(x,s)f(s) over s.

**How the definition helps.** A load f is a sum of point loads weighted by f(s), so its response is the same weighted sum of the responses G(x,s). In our own proof, split the integral at s = x and differentiate twice; continuity cancels one boundary term, and the slope drop gives −y″ = f. The zero endpoint values carry over from G, and uniqueness holds since −y″ = 0 with zero ends forces y = 0.

**Paper or page:** [Symmetrization of measures and the one-dimensional Poisson equation with Dirichlet boundary conditions](https://arxiv.org/abs/2506.13311v1). It says: “The solution uμ can be represented as”

**Sources:** none listed. No primary source with a working link was found.

### Ordering the two arguments makes the Green kernel symmetric

**Remember:** The lesser argument goes left, whichever variable supplied it.

*True by definition.* MSC 34B27 (Green's functions for ordinary differential equations), 34B24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For −(py′)′ + qy = 0, take nonzero solutions u vanishing at the left end and v vanishing at the right end. Their product formula is G(x,s) = u(min(x,s))v(max(x,s)) / p(u′v − uv′), so it sees x and s only through their smaller and larger values.

**Problem.** Assume p is positive and continuously differentiable and q is real and continuous on a finite closed interval. If only the zero homogeneous solution vanishes at both ends, the Dirichlet Green function satisfies G(x,s) = G(s,x).

**How the definition helps.** Exchanging x and s keeps the smaller and larger values, so the formula is symmetric. In our own proof, the equation makes the denominator constant, and the endpoint assumption makes it nonzero. The formula vanishes at both ends and its flux −pG′ jumps by one at s, so it is the point-source Green function.

**Wikipedia:** [Green's function](https://en.wikipedia.org/wiki/Green%27s_function). It says: “we may construct G(x,s) by requiring u₁(a) = 0 and u₂(b) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### A compact trap without equilibria contains a periodic orbit

**Remember:** A planar trap with no equilibrium must hold a cycle.

*Rules out counterexamples.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A set is positively invariant if every forward solution starting in it stays in it while defined. If the set is compact, a trajectory inside exists forever. Its ω-limit set, the points it keeps returning near, is then nonempty and inside the set (our own).

**Problem.** A nonempty compact positively invariant set for a continuously differentiable planar field contains a periodic orbit if it contains no equilibrium. The field must be defined on an open neighborhood of the set.

**How the definition helps.** By the Poincaré–Bendixson theorem, a nonempty compact ω-limit set with no equilibrium is a periodic orbit, and here it lies in the set. Compactness makes the trajectory exist for all time and gives the limit point (our own argument). Without the exclusion, the planar field x′ = −x traps every closed disk centered at zero and has no periodic orbit.

**Wikipedia:** [Poincaré–Bendixson theorem](https://en.wikipedia.org/wiki/Poincar%C3%A9%E2%80%93Bendixson_theorem). It says: “every non-empty compact ω-limit set of an orbit, which contains only finitely many fixed points”

**Sources:**

- [Ivar Bendixson, Sur les courbes définies par des équations différentielles (1901)](https://doi.org/10.1007/bf02403068)

### A regular conserved level cannot carry a limit cycle

**Remember:** A trajectory cannot spiral into an energy curve without sharing its energy.

*True by definition.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A first integral is a continuously differentiable function H that is constant on each trajectory. A periodic orbit lies on a regular level if the gradient of H is nonzero along it; then, near the orbit, that level is the orbit itself.

**Problem.** For a continuously differentiable planar field, a periodic orbit on a regular level of a first integral cannot be a limit cycle. A limit cycle is a periodic orbit that another trajectory approaches in forward or backward time.

**How the definition helps.** A trajectory approaching the orbit must have the orbit’s value of H, by continuity, so near the orbit it lies in that level (our own proof). By the implicit function theorem that part of the level is the orbit itself. Uniqueness of solutions forbids another trajectory from joining the orbit.

**Wikipedia:** [Limit cycle](https://en.wikipedia.org/wiki/Limit_cycle). It says: “A limit cycle is a cycle which is the limit set of some other trajectory.”

**Sources:** none listed. No primary source with a working link was found.

### A turning velocity forces an equilibrium inside a cycle

**Remember:** A loop turning once cannot shrink away without hitting a zero.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** The index of a field that is nonzero on a simple closed curve is the number of full turns its direction makes during one counterclockwise circuit. Along a periodic orbit the field is the velocity, which is tangent, so its index is the turning of the tangent.

**Problem.** Every nonconstant periodic orbit of a continuously differentiable planar field has index one when traversed counterclockwise. It encloses an equilibrium if the field is defined throughout the interior.

**How the definition helps.** The tangent of a simple closed curve turns exactly once, by the turning-tangent theorem, so the index is one (our own proof). If the field had no zero inside, its direction would extend over the disk, and shrinking the loop would make the count zero. One is not zero, so an equilibrium lies inside.

**Wikipedia:** [Vector field](https://en.wikipedia.org/wiki/Vector_field). It says: “by dividing each vector on this sphere by its length”

**Sources:** none listed. No primary source with a working link was found.

### Dulac weights rule out cycles

**Remember:** A closed orbit has zero outward flux even after weighting.

*Rules out counterexamples.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations), 34C07. arXiv math.DS. Level 2: later undergraduate.

**Definition.** A Dulac function for a planar field F on a region is a continuously differentiable weight B making the divergence of BF strictly positive throughout, or strictly negative throughout. Since B only rescales F, the field BF is still tangent to every orbit.

**Problem.** A continuously differentiable autonomous planar field with such a weight on a simply connected open region has no nonconstant periodic orbit entirely inside it.

**How the definition helps.** A cycle in a simply connected region bounds a disk in the region, and Green’s theorem turns the nonzero total divergence there into nonzero flux across the cycle. But BF is tangent to the cycle, so that flux is zero (our own). Simple connectivity is needed: on the annulus r &gt; ½, radial speed r − 1 and angular speed one give divergence 2 − 1/r &gt; 0, yet the unit circle is periodic (our own).

**Wikipedia:** [Bendixson–Dulac theorem](https://en.wikipedia.org/wiki/Bendixson%E2%80%93Dulac_theorem). It says: “has the same sign (≠ 0) almost everywhere in a simply connected region of the plane”

**Sources:** none listed. No primary source with a working link was found.

### Energy ovals make a potential minimum a center

**Remember:** Near the bottom of a well, energy levels are closed loops.

*Makes the theorem clean to state or prove.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** For x″ = −U′(x), the energy H(x,v) = v²/2 + U(x), with v = x′, is constant along solutions, so each orbit stays on one level curve of H.

**Problem.** If U is twice continuously differentiable with U′(a) = 0 and U″(a) &gt; 0, then (a,0) is a center. Every sufficiently close nonconstant trajectory is periodic.

**How the definition helps.** Differentiating gives H′ = v(v′ + U′(x)) = 0, so an orbit stays on its level (our own proof). Positive curvature at the minimum makes each small level around (a,0) an oval with two turning points. The field has no zero on this compact oval, so the orbit goes all the way around and is periodic.

**Wikipedia:** [Hamiltonian mechanics](https://en.wikipedia.org/wiki/Hamiltonian_mechanics). It says: “the sum of kinetic and potential energy”

**Sources:**

- [Gerald Teschl, Ordinary Differential Equations and Dynamical Systems (2012), §6.7](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf)

### Radial distance makes the Hopf cycle a scalar equilibrium

**Remember:** The angle keeps turning, so a stable radius gives a stable circle.

*Makes the theorem clean to state or prove.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations), 34C23. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Write nonzero z in polar form z = r(cos θ + i sin θ) with r = \|z\|. For z′ = (μ + i − \|z\|²)z this splits the system into the scalar equation r′ = r(μ − r²) and the rotation θ′ = 1.

**Problem.** For z′ = (μ + i − \|z\|²)z with real μ &gt; 0, the only nonconstant periodic orbit is a stable circle of radius √μ. For μ ≤ 0 there is no nonconstant periodic orbit.

**How the definition helps.** A periodic orbit needs a constant positive radius, because every other radius moves monotonically (our own proof). For μ &gt; 0 the only positive equilibrium of r′ = r(μ − r²) is √μ, and nearby radii move toward it. For μ ≤ 0 every positive radius decreases.

**Wikipedia:** [Hopf bifurcation](https://en.wikipedia.org/wiki/Hopf_bifurcation). It says: “It has a simple exact solution in polar coordinates.”

**Sources:** none listed. No primary source with a working link was found.

### Shifted velocity makes the Liénard energy lose only one term

**Remember:** Shifting velocity makes the energy derivative depend only on position.

*True by definition.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations), 34C25. arXiv math.DS. Level 2: later undergraduate.

**Definition.** For x″ + f(x)x′ + g(x) = 0, let F(x) be the integral of f from zero to x and use the Liénard coordinates x and z = x′ + F(x). The system becomes x′ = z − F(x), z′ = −g(x), and the energy z²/2 + ∫₀ˣ g changes at rate −g(x)F(x).

**Problem.** If g(x)F(x) is positive for all x ≠ 0, a smooth Liénard equation has no nonconstant periodic solution.

**How the definition helps.** When gF &gt; 0 away from zero, this energy strictly decreases whenever x ≠ 0 (our own proof). A nonconstant periodic path spends some time at x ≠ 0, so it would return with less energy than it started with.

**Wikipedia:** [Liénard equation](https://en.wikipedia.org/wiki/Li%C3%A9nard_equation). It says: “The equation can be transformed into an equivalent two-dimensional system of ordinary differential equations.”

**Sources:** none listed. No primary source with a working link was found.

### Turning along the boundary adds the enclosed equilibrium indices

**Remember:** Turns along the boundary add up the turns around each zero.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** The index of a loop counts the net turns of a nonzero field’s direction during one counterclockwise circuit. The index of an isolated zero is the index of a small circle around it that encloses no other zero.

**Problem.** Suppose a continuously differentiable planar field is defined on and inside a simple closed curve. If the enclosed zeros are isolated and the boundary has none, its counterclockwise index equals the sum of their indices.

**How the definition helps.** Cutting the region between the outer curve and small circles around the zeros along connecting arcs leaves a zero-free, simply connected region (our own proof). The field direction has a continuous angle there, so its total turn around that region’s boundary is zero. The cuts are traversed twice in opposite directions, so the outer turn equals the sum of the circles’ turns.

**Wikipedia:** [Vector field](https://en.wikipedia.org/wiki/Vector_field). It says: “the sum of the indices at all zeroes.”

**Sources:** none listed. No primary source with a working link was found.

### Dividing by a positive solution prevents two zeros

**Remember:** Divide by the positive solution; a monotone quotient crosses zero once.

*True by definition.* MSC 34C10 (Oscillation theory, zeros, disconjugacy and comparison theory for ordinary differential equations), 34B24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Divide any solution y of −(py′)′ + qy = 0 by a positive solution u, writing y = uz. Then z has the same zeros as y and satisfies (pu²z′)′ = 0, so z is constant or strictly monotone.

**Problem.** If p is positive and continuously differentiable and q is real and continuous, one positive solution makes the equation disconjugate on its interval. This means each nonzero real solution has at most one zero there.

**How the definition helps.** A nonzero solution gives a nonzero z, which is a nonzero constant or strictly monotone (our own proof). A nonzero constant has no zero and a strictly monotone function has at most one, so y vanishes at most once.

**Paper or page:** [Strict domain monotonicity of the principal eigenvalue and a characterization of lower boundedness for the Friedrichs extension of four-coefficient Sturm-Liouville operators](https://arxiv.org/abs/2201.05948v2). It says: “There exists a strictly positive solution”

**Sources:**

- [Fritz Gesztesy and Roger Nichols, Strict domain monotonicity of the principal eigenvalue and a characterization of lower boundedness for the Friedrichs extension of four-coefficient Sturm-Liouville operators, Theorem 1.2](https://arxiv.org/abs/2201.05948v2)

### Strict coefficient order forces a zero of the second solution

**Remember:** The comparison Wronskian falls where both solutions are positive.

*Rules out counterexamples.* MSC 34C10 (Oscillation theory, zeros, disconjugacy and comparison theory for ordinary differential equations), 34B24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For u″ + au = 0 and v″ + bv = 0 with a and b continuous, the comparison Wronskian W = uv′ − u′v satisfies W′ = (a − b)uv. So when b &gt; a, W strictly decreases wherever u and v are both positive.

**Problem.** For real solutions and real continuous coefficients with b &gt; a throughout the interval, every nonzero v vanishes between consecutive zeros of nonzero u.

**How the definition helps.** Suppose v has no zero between consecutive zeros z₁ &lt; z₂ of u, and choose signs so u, v &gt; 0 there (our own proof). Then W(z₁) = −u′(z₁)v(z₁) ≤ 0 and W(z₂) = −u′(z₂)v(z₂) ≥ 0, which contradicts strict decrease. For equal coefficients, u = v = sin x has no zero between 0 and π.

**Wikipedia:** [Sturm–Picone comparison theorem](https://en.wikipedia.org/wiki/Sturm%E2%80%93Picone_comparison_theorem). It says: “There exists an x in (z₁, z₂) such that v(x) = 0”

**Sources:**

- [Charles Sturm, Mémoire sur les Équations différentielles linéaires du second ordre (1836)](https://www.numdam.org/item/JMPA_1836_1_1__106_0/)

### The weighted Wronskian forces independent solutions to alternate zeros

**Remember:** The two ends of a hump make the other solution change sign.

*True by definition.* MSC 34C10 (Oscillation theory, zeros, disconjugacy and comparison theory for ordinary differential equations), 34B24. arXiv math.CA. Level 2: later undergraduate.

**Definition.** For two solutions u and v of (py′)′ + qy = 0 with p positive, the weighted Wronskian p(uv′ − u′v) is constant. It is nonzero when u and v are independent.

**Problem.** Assume p is positive and continuously differentiable and q is real and continuous. Between successive zeros of one nonzero real solution lies exactly one zero of each independent real solution.

**How the definition helps.** At a zero of u the constant equals −pu′v (our own proof). Consecutive zeros of u have slopes of opposite signs, so v takes opposite signs there and vanishes in between. Exchanging u and v shows that v cannot vanish twice there.

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

**Definition.** A gradient system is x′ = ∇f(x) for a smooth real function f on an open subset of Euclidean space. Along a solution, f changes at rate \|∇f\|², so f strictly increases whenever the path moves.

**Problem.** A smooth gradient system has no nonconstant periodic trajectory.

**How the definition helps.** A nonconstant periodic path would return to its start with a strictly higher value of f, which is impossible (our own proof). Without the gradient condition cycles exist, for example the rotation x′ = −y, y′ = x (our own).

**nLab:** [gradient flow](https://ncatlab.org/nlab/show/gradient+flow). It says: “The flow induced by this on X is the gradient flow of f.”

**Sources:** none listed. No primary source with a working link was found.

### Nonresonance gives one periodic response

**Remember:** No eigenvalue one in the period map: exactly one periodic response.

*Rules out counterexamples.* MSC 34C25 (Periodic solutions to ordinary differential equations), 34A30. arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** The period map sends an initial state x to its state after one period, Mx + b, where M is the homogeneous part. The system is nonresonant when 1 is not an eigenvalue of M, so the fixed-point equation (I − M)x = b has exactly one solution.

**Problem.** Suppose a linear system has continuous coefficients and forcing that repeat after time T. Under nonresonance it has exactly one T-periodic solution.

**How the definition helps.** A T-periodic solution is one whose initial value is fixed by the period map. Nonresonance gives exactly one such value, and uniqueness with periodic data makes that solution repeat after T (our own argument). With M = I, u′ = 0 has infinitely many periodic solutions and u′ = 1 has none (our own).

**Paper or page:** [Control Sets for Affine Systems, Spectral Properties and Projective Spaces](https://arxiv.org/abs/2201.05014v2). It says: “This solution is unique if and only if 1 ∉ spec(Φᵤ(τ,0)).”

**Sources:**

- [Fritz Colonius, Alexandre J. Santana, Juliana Setti (2022), Control Sets for Affine Systems, Spectral Properties and Projective Spaces](https://arxiv.org/abs/2201.05014v2)

### Accumulated squared motion gives a quadratic Lyapunov function

**Remember:** The energy still ahead falls by the energy just spent.

*True by definition.* MSC 34D20 (Stability of solutions to ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** For x′ = Ax, let V(x) be the integral, from zero to infinity, of the squared length of the solution starting at x. Along a solution, V measures only the part of the path still ahead, so it falls at the rate ‖x‖².

**Problem.** If every eigenvalue of A has negative real part, V is a quadratic form positive away from zero. Its time derivative along solutions is −‖x‖².

**How the definition helps.** V(x(t)) is the integral of the squared length from t to infinity, so its derivative is −‖x(t)‖² (our own proof). Exponential decay from the eigenvalue condition makes the integral finite. Linearity makes V quadratic, and the integrand is positive near zero time for nonzero x, so V is positive away from zero.

**Wikipedia:** [Lyapunov equation](https://en.wikipedia.org/wiki/Lyapunov_equation). It says: “the solution can also be expressed as an integral (continuous time case) or as an infinite sum (discrete time case).”

**Sources:** none listed. No primary source with a working link was found.

### Asymptotic stability asks for stability as well as attraction

**Remember:** Attracting is not enough; nearby orbits must also stay nearby.

*Rules out counterexamples. Confidence: medium.* MSC 34D20 (Stability of solutions to ordinary differential equations), 37C75. arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** An equilibrium is stable if every neighborhood contains a smaller neighborhood whose trajectories stay in the first for all future time. It attracts locally if every trajectory starting in some neighborhood converges to it. Asymptotic stability requires both properties.

**Problem.** For a smooth autonomous field on ℝⁿ, a strict local Lyapunov function implies asymptotic stability by Lyapunov’s direct method. Massera’s converse theorem gives such a function at every asymptotically stable equilibrium (our own).

**How the definition helps.** Small sublevels of a strict Lyapunov function trap trajectories, which gives stability, and its strict decrease gives attraction (our own). Massera’s converse theorem builds such a function when both properties hold (our own). Attraction alone is not enough: Vinograd’s planar example attracts nearby trajectories, but some that start arbitrarily close travel far first (our own).

**Wikipedia:** [Lyapunov stability](https://en.wikipedia.org/wiki/Lyapunov_stability). It says: “There are examples showing that attractivity does not imply asymptotic stability.”

**Sources:**

- [W. Hahn, Stability of Motion, Springer (1967), Section 40](https://doi.org/10.1007/978-3-642-50085-5)
- [J. L. Massera, On Liapounoff's conditions of stability, Annals of Mathematics 50 (1949)](https://doi.org/10.2307/1969558)

### Positive Lyapunov sublevels trap nearby solutions

**Remember:** An orbit below the boundary’s lowest value cannot reach the boundary.

*True by definition.* MSC 34D20 (Stability of solutions to ordinary differential equations). arXiv math.DS. Level 2: later undergraduate.

**Definition.** A local Lyapunov function V is continuously differentiable near the equilibrium, zero there, positive at other nearby points, and nonincreasing along solutions. So a solution never reaches a point where V is larger than at its start.

**Problem.** An equilibrium of a continuously differentiable field on an open subset of ℝⁿ is Lyapunov stable if it has a local Lyapunov function.

**How the definition helps.** On each small sphere around the equilibrium, V has a positive minimum (our own proof). Starting points close enough have smaller values, so their solutions never reach the sphere. Trapped in a compact ball, they also exist for all future time.

**Paper or page:** [A Sum-of-Squares approach to the Stability and Control of Interconnected Systems using Vector Lyapunov Functions](https://arxiv.org/abs/1501.05266v2). It says: “if there exists a continuously differentiable positive definite function”

**Sources:** none listed. No primary source with a working link was found.

### The return derivative tests whether a planar orbit attracts

**Remember:** Test how far the next crossing moves from the fixed crossing.

*Rules out counterexamples.* MSC 34D20 (Stability of solutions to ordinary differential equations), 34C05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** Take a short segment through a point of a planar periodic orbit, crossing the velocity at a nonzero angle. The Poincaré map sends each nearby point of the segment to its next crossing, and its derivative at the orbit point is the return multiplier.

**Problem.** For a continuously differentiable planar system, a periodic orbit attracts nearby trajectories and is stable if its return multiplier has absolute value below one. It is unstable if that absolute value exceeds one.

**How the definition helps.** The orbit becomes a fixed point on a line, and the mean value theorem makes a multiplier below one in absolute value contract and above one expand (our own). Continuous dependence carries this to the trajectories between crossings. At multiplier one, radial speeds (r − 1)³ and −(r − 1)³ with unit angular speed give opposite outcomes.

**Wikipedia:** [Poincaré map](https://en.wikipedia.org/wiki/Poincar%C3%A9_map). It says: “the stability of the fixed point of the corresponding Poincaré map”

**Sources:** none listed. No primary source with a working link was found.

### Trace and determinant locate planar sinks sources and saddles

**Remember:** Negative determinant means saddle; positive determinant lets the trace decide.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34D20 (Stability of solutions to ordinary differential equations), 34C05. arXiv math.DS. Level 2: later undergraduate.

**Definition.** At an equilibrium of a continuously differentiable planar system, let A be the matrix of first derivatives of the field. Its trace and determinant are the sum and the product of its two eigenvalues.

**Problem.** At a planar equilibrium, a negative determinant gives a saddle, with both approaching and escaping directions. With positive determinant, negative trace gives an attracting sink and positive trace a repelling source.

**How the definition helps.** A negative product forces real eigenvalues of opposite signs, which is a saddle. A positive product with nonzero sum gives both real parts the sign of the sum (our own argument). The linearization theorem carries these cases from the matrix to the nonlinear system.

**Wikipedia:** [Linear stability](https://en.wikipedia.org/wiki/Linear_stability). It says: “If all the eigenvalues have negative real part, then the solution is called linearly stable.”

**Sources:** none listed. No primary source with a working link was found.

### Radially unbounded Lyapunov functions make asymptotic stability global

**Remember:** When V grows without bound at infinity, every sublevel traps its trajectories.

*Rules out counterexamples. Confidence: medium.* MSC 34D23 (Global stability of solutions to ordinary differential equations), 34D20, 93D30. arXiv math.DS, math.OC. Level 2: later undergraduate.

**Definition.** A function V on ℝⁿ is radially unbounded if V(x) → ∞ as ‖x‖ → ∞. Then every sublevel set {V ≤ c} of a continuous V is compact, so it can trap a trajectory (our own).

**Problem.** Consider a continuously differentiable autonomous field on ℝⁿ with equilibrium zero. A continuously differentiable, positive definite, radially unbounded V that strictly decreases along every nonstationary trajectory implies global asymptotic stability if zero is the sole equilibrium.

**How the definition helps.** Each trajectory starts in a compact sublevel and cannot leave it, so the Barbashin–Krasovskii theorem gives global asymptotic stability (our own). Without radial unboundedness this argument fails: for r² = x₁² + x₂², the function r²/(1 + r²) + (x₁ − x₂)² stays below one along the diagonal. So its unit sublevel is unbounded and gives no bounded trap (our own).

**Wikipedia:** [Radially unbounded function](https://en.wikipedia.org/wiki/Radially_unbounded_function), [Lyapunov function](https://en.wikipedia.org/wiki/Lyapunov_function), [LaSalle's invariance principle](https://en.wikipedia.org/wiki/LaSalle%27s_invariance_principle). It says: “are not radially unbounded since along the line x₁ = x₂, the condition is not verified even though the second function is globally positive definite.”

**Sources:** none listed. No primary source with a working link was found.

### History makes delayed evolution restartable

**Remember:** A delay equation needs a history, not a snapshot.

*Makes the theorem clean to state or prove.* MSC 34K05 (General theory of functional-differential equations). arXiv math.DS, math.CA. Level 2: later undergraduate.

**Definition.** For a delay τ &gt; 0, the state at time t is the whole history segment s ↦ x(t + s) on \[−τ,0\], because x′(t) needs the delayed value x(t − τ).

**Problem.** For x′(t) = x(t − τ), a continuous initial history on \[−τ,0\] determines a unique forward solution. Two equal history segments give equal future histories.

**How the definition helps.** On \[0,τ\] the history supplies every delayed value, so x is one integral of known data. Repeating this on each next interval of length τ gives a unique forward solution (our own proof). A single value is not enough: histories that agree at zero but differ at −τ give different initial slopes.

**Wikipedia:** [Delay differential equation](https://en.wikipedia.org/wiki/Delay_differential_equation). It says: “with given initial condition φ: \[−τ,0\] → ℝⁿ. Then the solution on the interval \[0,τ\] is given by ψ(t)”

**Sources:** none listed. No primary source with a working link was found.

### Osgood bounds rule out waiting

**Remember:** An infinite reciprocal integral prevents a solution from leaving zero separation.

*Rules out counterexamples.* MSC 34A12 (Initial value problems, existence, uniqueness, continuous dependence and continuation of solutions to ordinary differential equations). arXiv math.DS. Level 3: graduate.

**Definition.** An Osgood modulus μ is continuous and nondecreasing on \[0,∞), zero only at zero, and 1/μ has infinite integral over (0,ε) for every ε &gt; 0. It bounds f if ‖f(t,x) − f(t,y)‖ ≤ μ(‖x − y‖) for all states x, y at each time t, so separation grows at most at rate μ.

**Problem.** For a continuous differential equation with this bound, two solutions with the same initial state agree forward wherever both exist.

**How the definition helps.** Growing from zero separation at rate at most μ takes time at least the integral of 1/μ, which is infinite (our own proof). Osgood’s lemma makes this precise for the distance between two solutions. For x′ = √\|x\| this integral is finite, and in our own example a solution can wait at zero until time T and then follow (t − T)²/4.

**Wikipedia:** [Peano existence theorem](https://en.wikipedia.org/wiki/Peano_existence_theorem). It says: “The solution need not be unique”

**Paper or page:** [Lagrangian aspects of Yudovich theory for 2D Euler](https://arxiv.org/abs/2509.21121v1). It says: “and if c = 0, then ρ = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Commuting coefficients simplify matrix evolution

**Remember:** Only commuting factors can be freely reordered in the exponential.

*Rules out counterexamples.* MSC 34A30 (Linear ordinary differential equations and systems). arXiv math.CA. Level 3: graduate.

**Definition.** The coefficient matrices of x′ = A(t)x commute pairwise if A(s)A(t) = A(t)A(s) for all s and t. Then A(t) commutes with its integral from zero to t, so the exponential of that integral differentiates like a scalar exponential.

**Problem.** For continuous pairwise commuting coefficients, the evolution from time zero is exp(∫₀ᵗ A(s) ds).

**How the definition helps.** Since A(t) commutes with ∫₀ᵗ A, the derivative of exp(∫₀ᵗ A) is A(t) times itself, and it starts at the identity (our own). For a counterexample, apply a smooth pulse of integral one times E, whose only nonzero entry is E₁₂ = 1, then a later, disjoint pulse of integral one times its transpose (our own). The evolution has diagonal entries 1 and 2, but the exponential of the integral has equal diagonal entries.

**Wikipedia:** [Magnus expansion](https://en.wikipedia.org/wiki/Magnus_expansion). It says: “In the general case, however, the expression above is no longer the solution of the problem.”

**Sources:**

- [Wilhelm Magnus (1954), On the exponential solution of differential equations for a linear operator](https://doi.org/10.1002/cpa.3160070404)

### Exterior products linearize volume evolution

**Remember:** Differentiate one factor at a time to follow volume.

*True by definition.* MSC 34A30 (Linear ordinary differential equations and systems), 15A75. arXiv math.DS, math.CA. Level 3: graduate.

**Definition.** The exterior product x₁ ∧ … ∧ x<sub>k</sub> of k vectors records the oriented parallelepiped they span, and its norm is that k-dimensional volume. The kth additive compound of A acts on it by the product rule: apply A to each factor in turn and add the results.

**Problem.** For a continuous real matrix A(t), the exterior product of k solutions of x′ = A(t)x solves the linear equation with the kth additive compound. Its Euclidean norm equals the volume of the parallelepiped spanned by the solutions.

**How the definition helps.** Differentiating x₁ ∧ … ∧ x<sub>k</sub> one factor at a time replaces each x<sub>i</sub> by A(t)x<sub>i</sub>, which is exactly the additive compound (our own proof). The squared norm of the product is the Gram determinant, which is the squared volume.

**Paper or page:** [Compound matrices in systems and control theory](https://arxiv.org/abs/2103.15097v1). It says: “\\frac{d}{dt} \\Phi<sup>(k)</sup>(t)=A<sup>\[k\]</sup>(t) \\Phi<sup>(k)</sup>(t)”

**Sources:**

- [Eyal Bar-Shalom, Michael Margaliot (2021), Compound matrices in systems and control theory](https://arxiv.org/abs/2103.15097v1)

### One period gives Floquet coordinates

**Remember:** Take a logarithm of one period to separate the periodic part.

*True by definition.* MSC 34A30 (Linear ordinary differential equations and systems), 34C25. arXiv math.DS, math.CA. Level 3: graduate.

**Definition.** For x′ = A(t)x with continuous T-periodic A, let Φ(t) carry initial values at time zero to their values at time t. Choose a constant complex matrix B with exp(TB) = Φ(T), a logarithm of the one-period matrix. Set P(t) = Φ(t)exp(−tB), which divides out the growth that whole periods produce.

**Problem.** The invertible matrix P repeats every T time units, so Φ(t) = P(t)exp(tB).

**How the definition helps.** Periodicity of A and uniqueness give Φ(t + T) = Φ(t)Φ(T), and exp(−(t + T)B) = Φ(T)⁻¹exp(−tB), so P(t + T) = P(t) (our own proof). A logarithm B exists because Φ(T) is invertible, by the matrix logarithm theorem over the complex numbers.

**Paper or page:** [ProofWiki](https://proofwiki.org/wiki/Floquet's_Theorem). It says: “\\Phi(t) = P(t)e<sup>Bt</sup>”

**Sources:**

- [Gaston Floquet (1883), Sur les équations différentielles linéaires à coefficients périodiques](https://doi.org/10.24033/asens.220)

### Ordered products solve changing systems

**Remember:** Keep matrix factors in the order in which they act.

*True by definition.* MSC 34A30 (Linear ordinary differential equations and systems), 34A25. arXiv math.CA. Level 3: graduate.

**Definition.** The Peano–Baker series for x′ = A(t)x starts with the identity matrix. Each next term is the integral from zero to t of A(s) times the previous term at s. Its partial sums are the Picard iterates of X(t) = I + ∫₀ᵗ A(s)X(s) ds, with the factors kept in time order.

**Problem.** If A is continuous on \[0,T\], the series converges there to the matrix taking each initial value to its value at t.

**How the definition helps.** Each term is the next Picard step, so the sum solves the integral equation for the evolution matrix. In our own account, the nth term is at most (Kt)ⁿ/n! with K the maximum of ‖A‖, so the series converges uniformly on \[0,T\]. Integration then commutes with summation, and uniqueness identifies the sum with the evolution matrix.

**nLab:** [iterated integral](https://ncatlab.org/nlab/show/iterated+integral). It says: “Iterated integrals include nested integration of differential forms of the kind as it appears in the formulation of parallel transport”

**Wikipedia:** [State-transition matrix](https://en.wikipedia.org/wiki/State-transition_matrix). It says: “The most general transition matrix is given by a product integral, referred to as the Peano–Baker series:”

**Sources:**

- [Michael Baake and Ulrike Schlägel (2011), The Peano-Baker series](https://doi.org/10.1134/S0081543811080098)

### Carathéodory solutions let differential equations have discontinuous right-hand sides

**Remember:** Equation almost everywhere; y recovered by the Lebesgue integral.

*Makes the theorem clean to state or prove.* MSC 34A36 (Discontinuous ordinary differential equations), 34A12. arXiv math.CA. Level 3: graduate.

**Definition.** A solution in the extended sense of y′ = f(t, y), y(t₀) = y₀, is an absolutely continuous y with y(t₀) = y₀ that satisfies the equation almost everywhere. Absolute continuity makes y the integral of its own derivative, so y is y₀ plus the Lebesgue integral of f(s, y(s)) from t₀ to t. That integral allows f to jump in t.

**Problem.** Carathéodory’s theorem: let f be continuous in y, measurable in t, and bounded near (t₀, y₀) by an integrable function of t. Then the initial value problem has a solution in the extended sense near t₀.

**How the definition helps.** Asking for the equation only almost everywhere lets y have corners at the times where f jumps. For the Heaviside step H, y = max(t, 0) satisfies y′ = H(t) away from zero and is absolutely continuous (our own). Carathéodory’s existence theorem then supplies a solution under the stated conditions (our own).

**Wikipedia:** [Carathéodory's existence theorem](https://en.wikipedia.org/wiki/Carath%C3%A9odory%27s_existence_theorem). It says: “This suggests that the idea of a solution be extended to allow for solutions that are not everywhere differentiable, thus motivating the following definition.”

**Sources:** none listed. No primary source with a working link was found.

### Filippov solutions let systems slide along a switching surface

**Remember:** On a switching surface, average the two sides and slide.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34A60 (Ordinary differential inclusions), 34A36. arXiv math.CA, math.DS. Level 3: graduate.

**Definition.** The Filippov set F(x) is the intersection, over all radii r &gt; 0 and null sets N, of the closed convex hulls of f(B(x,r) ∖ N) (our own). A Filippov solution is an absolutely continuous path with x′(t) ∈ F(x(t)) almost everywhere, so on a switching surface it may move with an average of the two sides.

**Problem.** Every locally bounded measurable field on ℝⁿ admits a local Filippov solution from each initial point. For example, let f be −1 for x &gt; 0 and 1 otherwise; from zero, x′ = f(x) has the Filippov solution x ≡ 0 but no forward Carathéodory solution (our own).

**How the definition helps.** F is upper semicontinuous and locally bounded with nonempty compact convex values, so the existence theorem for differential inclusions applies (our own). In the example, F(0) = \[−1,1\] contains zero, which permits the constant path (our own). A Carathéodory solution cannot enter either half-line, where the velocity points back to zero, and cannot stay at zero since f(0) = 1 (our own).

**Wikipedia:** [Differential inclusion](https://en.wikipedia.org/wiki/Differential_inclusion). It says: “Differential inclusions can be used to understand and suitably interpret discontinuous ordinary differential equations, such as arise for Coulomb friction in mechanical systems and ideal switches in power electronics.”

**Sources:**

- [A. F. Filippov, Differential Equations with Discontinuous Righthand Sides, Kluwer (1988)](https://doi.org/10.1007/978-94-015-7793-9)

### Weyl's limit-point case means no boundary condition is needed

**Remember:** Each limit-circle end needs one boundary condition; limit-point ends need none.

*Makes the theorem clean to state or prove.* MSC 34B24 (Sturm-Liouville theory), 47E05. arXiv math.CA, math.SP. Level 3: graduate.

**Definition.** Consider τu = (−(pu′)′ + qu)/r with real coefficients, p and r positive almost everywhere, and 1/p, q, r locally integrable. An endpoint is limit circle if, for nonreal λ, every solution of τu = λu is square integrable near it with weight r. It is limit point if only one independent solution is, so square integrability already acts as the boundary condition there (our own).

**Problem.** The deficiency indices of the minimal operator are 2, 1 or 0 when both, one or neither endpoint is in the limit circle case. So the operator is self-adjoint with no boundary conditions at all exactly when both endpoints are in the limit point case.

**How the definition helps.** Each limit-circle endpoint adds one to each deficiency index, by Weyl’s endpoint theory (our own). At a limit-point endpoint the boundary form vanishes on the whole maximal domain, so nothing needs to be imposed. The closed minimal operator is self-adjoint exactly when both deficiency indices are zero (our own).

**Paper or page:** [The Jacobi operator on (−1,1) and its various m-functions](https://arxiv.org/abs/2307.12164v1), [On Sesquilinear Forms for Lower Semibounded (Singular) Sturm-Liouville Operators](https://arxiv.org/abs/2509.07205v1). It says: “In particular, Tₘᵢₙ = Tₘₐₓ is self-adjoint (i.e., Ṫₘᵢₙ is essentially self-adjoint) if and only if τ is in the limit point case at a and b.”

**Sources:**

- [Fritz Gesztesy, Lance L. Littlejohn, Mateusz Piorkowski, Jonathan Stanfill, The Jacobi operator on (−1,1) and its various m-functions, Complex Anal. Oper. Theory 18 (2024) Paper No. 155, arXiv:2307.12164](https://doi.org/10.1007/s11785-024-01576-4)
- [Jussi Behrndt, Fritz Gesztesy, Seppo Hassi, Roger Nichols, Henk de Snoo, On Sesquilinear Forms for Lower Semibounded (Singular) Sturm-Liouville Operators, arXiv:2509.07205 (2025)](https://arxiv.org/abs/2509.07205v1)
- [Weyl, Über gewöhnliche Differentialgleichungen mit Singularitäten und die zugehörigen Entwicklungen willkürlicher Funktionen, Mathematische Annalen 68 (1910), 220–269](https://doi.org/10.1007/bf01474161)

### Green impulses fix derivative jumps

**Remember:** One point impulse is one unit of flux jump.

*True by definition.* MSC 34B27 (Green's functions for ordinary differential equations). arXiv math.SP. Level 3: graduate.

**Definition.** Let Ly = (py′)′ + qy on a finite closed interval, with smooth positive p and continuous q, and assume only y = 0 solves Ly = 0 with zero endpoint values. The Green function G solves LG = δₛ with zero endpoint values, where δₛ is the point mass at an interior point s. Since δₛ enters LG only through the derivative of the flux pG′, it forces pG′ to jump by exactly one at s.

**Problem.** If G is continuous and smooth on both sides of s with one-sided derivatives there, the right derivative minus the left derivative is 1/p(s).

**How the definition helps.** Integrating LG = δₛ across s, the term qG contributes nothing in the limit, so pG′ jumps by one (our own). Dividing by p(s), which is continuous and positive, gives the derivative jump 1/p(s). Constructing G still requires solving the homogeneous equation and matching endpoint values.

**Wikipedia:** [Green's function](https://en.wikipedia.org/wiki/Green%27s_function). It says: “G′(s₀₊,s) − G′(s₀₋,s) = 1 / p(s)”

**Sources:** none listed. No primary source with a working link was found.

### Tangent cones test invariance

**Remember:** The cone holds every direction that keeps you inside the set.

*Makes the theorem clean to state or prove.* MSC 34C05 (Topological structure of integral curves, singular points, limit cycles of ordinary differential equations). arXiv math.DS. Level 3: graduate.

**Definition.** Let x be a point of a closed convex set S in Euclidean space. The tangent cone at x is the closure of all nonnegative multiples of vectors from x to points of S. It lists the directions in which a path can leave x and stay in S, to first order.

**Problem.** Consider a continuous velocity field with a unique global forward solution from each point of S at every starting time. All these solutions stay in S exactly when every boundary velocity belongs to its tangent cone at every time.

**How the definition helps.** A solution that stays in S has difference quotients pointing into S, so its velocity lies in the cone (our own account). Nagumo’s theorem gives the hard converse: if every boundary velocity lies in its cone, the solutions stay in S.

**Paper or page:** [Positive Invariance Condition for Continuous Dynamical Systems Based on Nagumo Theorem](https://arxiv.org/abs/2207.05429v1). It says: “f(t,x)\\in \\mathcal {T}\_\\mathcal {S}(x),\\text { for all } x\\in \\partial \\mathcal {S},”

**Sources:** none listed. No primary source with a working link was found.

### Isochrons advance phase uniformly

**Remember:** Match the future trajectory to measure phase now.

*True by definition.* MSC 34C25 (Periodic solutions to ordinary differential equations), 34D35. arXiv math.DS. Level 3: graduate.

**Definition.** Fix a reference solution γ on an attracting cycle of least period T. A solution x has asymptotic phase θ modulo T if \|x(t) − γ(t + θ)\| → 0 as t → ∞, so it eventually moves in step with γ shifted by θ. An isochron is the set of starting points with one given phase.

**Problem.** Consider a smooth flow with an attracting cycle whose transverse linear return map has all eigenvalues strictly inside the unit circle. Then every nearby point has a unique phase modulo T, and following its solution for time s adds s to that phase.

**How the definition helps.** Replacing t by t + s in the convergence condition shows that the solution from x(s) has phase θ + s (our own argument). The stable foliation theorem gives each nearby point exactly one phase, under the stated eigenvalue condition (our own). Distance to the cycle alone would lose this phase information.

**Wikipedia:** [Isochron](https://en.wikipedia.org/wiki/Isochron). It says: “an isochron is a set of initial conditions for the system that all lead to the same long-term behaviour.”

**Sources:**

- [John Guckenheimer (1975), Isochrons and phaseless sets](https://doi.org/10.1007/BF01273747)

### Normally hyperbolic manifolds persist

**Remember:** Faster transverse rates can hold a surface together under perturbation.

*Rules out counterexamples.* MSC 34C45 (Invariant manifolds for ordinary differential equations), 34D10. arXiv math.DS. Level 3: graduate.

**Definition.** An invariant manifold is normally hyperbolic when the linearized flow splits continuously into tangent, stable and unstable parts, and the normal parts contract or expand faster than any tangent rate. Precisely, uniform C, c &gt; 0 make the stable part S and tangent part T of the time-t flow satisfy ‖S‖ ≤ Ce⁻ᶜᵗ and ‖S‖‖T⁻¹‖ ≤ Ce⁻ᶜᵗ for t ≥ 0. The unstable part satisfies the same bounds backward in time.

**Problem.** A compact normally hyperbolic invariant manifold without boundary for a smooth flow persists as a nearby invariant manifold under sufficiently small continuously differentiable perturbations.

**How the definition helps.** The gap between normal and tangent rates lets Fenichel’s theorem build the perturbed manifold as a nearby graph (our own). Invariance alone is not enough: on a cylinder with angular speed one and radial speed zero, every circle is invariant (our own). A small constant positive radial speed destroys all of them (our own).

**Wikipedia:** [Normally hyperbolic invariant manifold](https://en.wikipedia.org/wiki/Normally_hyperbolic_invariant_manifold). It says: “the dynamics of Λ itself is neutral compared with the dynamics nearby”

**Paper or page:** [An SIRS model with hospitalizations: economic impact by disease severity](https://arxiv.org/abs/2503.03540v3). It says: “there exists a locally invariant manifold ℳε, called slow manifold, diffeomorphic to ℳ₀”

**Sources:**

- [Neil Fenichel, Persistence and Smoothness of Invariant Manifolds for Flows](https://doi.org/10.1512/iumj.1972.21.21017)

### Dichotomies give unique bounded responses

**Remember:** Integrate each part of the forcing in the direction that decays.

*Rules out counterexamples. Confidence: medium.* MSC 34D09 (Dichotomy, trichotomy of solutions to ordinary differential equations), 34A30. arXiv math.DS, math.CA. Level 3: graduate.

**Definition.** An exponential dichotomy splits the state space at each time s by complementary projections P(s) and Q(s), carried along by the evolution U(t,s). The P part decays forward: ‖U(t,s)P(s)‖ ≤ K exp(−α(t − s)) for t ≥ s. The Q part decays backward: ‖U(t,s)Q(s)‖ ≤ K exp(−α(s − t)) for t ≤ s, with fixed K, α &gt; 0.

**Problem.** Suppose x′ = A(t)x has an exponential dichotomy on the whole real line, with A continuous. For every bounded continuous f, the equation x′ = A(t)x + f(t) has exactly one bounded solution there.

**How the definition helps.** The bounded solution integrates the P part of f forward from minus infinity and the Q part backward from plus infinity, with a minus sign (our own). The decay bounds make both integrals converge, and they kill both parts of a bounded homogeneous solution, which gives uniqueness. Without a dichotomy it fails: x′ = 1 has no bounded solution, since x′ = 0 has no decay (our own).

**Wikipedia:** [Exponential dichotomy](https://en.wikipedia.org/wiki/Exponential_dichotomy). It says: “then the equilibrium point 0 is said to have an exponential dichotomy if there exists a (constant) matrix P such that P² = P”

**Paper or page:** [Linearization and Hölder continuity of generalized ODEs with application to measure differential equations](https://arxiv.org/abs/2301.09955v3). It says: “have a unique bounded solution.”

**Sources:** none listed. No primary source with a working link was found.

### Transport makes spectral projections periodic

**Remember:** Transport the splitting rather than recomputing it at each time.

*True by definition.* MSC 34D09 (Dichotomy, trichotomy of solutions to ordinary differential equations), 34C25. arXiv math.DS. Level 3: graduate.

**Definition.** For x′ = A(t)x with continuous T-periodic A, let M be the one-period matrix. Group the complex generalized eigenspaces of M by eigenvalue modulus below, equal to, or above one. Carry these three subspaces forward by the flow, and at each time project onto one along the other two.

**Problem.** These subspaces of a continuous periodic linear system repeat each period. Projecting onto one before transport gives the same result as transporting first and projecting onto its later copy.

**How the definition helps.** Because the subspaces move with the flow, projecting then transporting equals transporting then projecting (our own proof). Each subspace is invariant under M, so after one period it returns to itself, which makes the projections periodic.

**Paper or page:** [Periodic Center Manifolds for Nonhyperbolic Limit Cycles in ODEs](https://arxiv.org/abs/2309.11919v3). It says: “The projections commute with the fundamental matrix: U(t,s)πᵢ(s) = πᵢ(t)U(t,s)”

**Sources:** none listed. No primary source with a working link was found.

### Floquet multipliers detect exponential decay

**Remember:** One period’s matrix, raised to powers, rules the long run.

*Makes the theorem clean to state or prove.* MSC 34D20 (Stability of solutions to ordinary differential equations), 34A30. arXiv math.DS, math.CA. Level 3: graduate.

**Definition.** For x′ = A(t)x with continuous T-periodic A, the Floquet multipliers are the eigenvalues of the period map, the matrix that moves each initial vector forward by time T. Running n periods applies this one matrix n times.

**Problem.** Every solution decays exponentially, with uniform bounds proportional to its initial size, exactly when every multiplier has modulus less than one.

**How the definition helps.** Evolution through n periods is the nth power of the period map, so decay of solutions is decay of matrix powers (our own). Matrix powers decay exponentially exactly when every eigenvalue has modulus below one. Evolution over the leftover part of a period is uniformly bounded (our own).

**Paper or page:** [On stability for generalized linear differential equations and applications to impulsive systems](https://arxiv.org/abs/2207.01716v2). It says: “the eigenvalues of the monodromy matrix X(ω) are inside of the unit circle.”

**Sources:** none listed. No primary source with a working link was found.

### Invariant subsets locate long-term limits

**Remember:** Keep only the points that can stay where the decrease stops.

*Rules out counterexamples.* MSC 34D20 (Stability of solutions to ordinary differential equations), 34D05. arXiv math.DS. Level 3: graduate.

**Definition.** Let a smooth autonomous flow keep a compact set K forward invariant, and let V be continuously differentiable and nonincreasing along it. Let E be the set where V has zero derivative along the flow. Let S be the union of the complete trajectories that lie entirely in E, along each of which V stays constant.

**Problem.** For every trajectory starting in K, the distance to S tends to zero as time tends to infinity.

**How the definition helps.** Late-time limit points of a trajectory form a nonempty invariant set on which V is constant, so that set lies in S (our own). Compactness supplies these limit points and the limit of V. Points where the decrease only pauses, like a damped pendulum at a turning point, are not in S (our own).

**Wikipedia:** [LaSalle's invariance principle](https://en.wikipedia.org/wiki/LaSalle%27s_invariance_principle). It says: “is the union of complete trajectories contained entirely in the set”

**Sources:** none listed. No primary source with a working link was found.

### Tangent contraction contracts path distances

**Remember:** Shorten every tangent vector to shorten every path.

*Makes the theorem clean to state or prove.* MSC 34D20 (Stability of solutions to ordinary differential equations), 34C40. arXiv math.DS. Level 3: graduate.

**Definition.** A contraction metric gives each tangent vector a length, which can depend on its base point, that the derivative of the flow shrinks at a uniform rate. After time t ≥ 0, each transported vector has length at most exp(−ct) times its initial length, for one common c &gt; 0.

**Problem.** Let a differentiable forward flow preserve a connected open region with a contraction metric, and use as distance the infimum of lengths of piecewise smooth connecting paths there. After time t ≥ 0, the distance between two solutions is at most exp(−ct) times their initial distance.

**How the definition helps.** Path length is the integral of tangent lengths, so the flow shrinks every connecting path by the factor exp(−ct) (our own). Taking the infimum over initial paths gives the distance bound, with no need for a shortest path (our own).

**Paper or page:** [Algebraic Test for Asymptotic Stability of Periodic Orbits for Polynomial Systems](https://arxiv.org/abs/2112.05998v1). It says: “L(Γ(0, ·)) eᵃᵗ ≤ L(Γ(t, ·)) ≤ L(Γ(0, ·)) eᴬᵗ.”

**Sources:** none listed. No primary source with a working link was found.

### Weighted row sums test stability

**Remember:** Nonnegative off-diagonal entries turn row sums into Gershgorin bounds.

*Rules out counterexamples.* MSC 34D20 (Stability of solutions to ordinary differential equations). arXiv math.DS. Level 3: graduate.

**Definition.** A real square matrix is Metzler if every entry off the main diagonal is nonnegative; the diagonal may have any sign. Then each row sum equals the diagonal entry plus the Gershgorin radius, the sum of the absolute values of the other entries in that row.

**Problem.** If A is Metzler and a vector v with positive entries satisfies Av &lt; 0 entry by entry, the system x′ = Ax decays exponentially.

**How the definition helps.** Dividing each coordinate by the matching entry of v keeps the matrix Metzler and makes every row sum negative (our own). So every Gershgorin disk lies in the open left half-plane, which gives exponential decay. Without the Metzler condition it fails: rows (1, −2) and (0, −1) have negative row sums but eigenvalue 1 (our own).

**Paper or page:** [Qualitative analysis of solutions to mixed-order positive linear coupled systems with bounded or unbounded delays](https://arxiv.org/abs/2208.10706v2). It says: “There exists a vector λ ≻ 0 such that Aλ ≺ 0.”

**Sources:** none listed. No primary source with a working link was found.

### Swapping factors transfers eigenfunctions

**Remember:** Swap the two factors, and A carries solutions across.

*True by definition. Confidence: medium.* MSC 34L10 (Eigenfunctions, eigenfunction expansions, completeness of eigenfunctions of ordinary differential operators). arXiv math.CA. Level 3: graduate.

**Definition.** Let a second-order operator factor as BA + λ, where A and B are first-order linear differential operators with smooth coefficients on an interval. Its Darboux partner AB + λ has the factors swapped, so A(BA + λ) = (AB + λ)A.

**Problem.** Choose any number μ different from λ. Applying A maps local solutions of (BA + λ)u = μu bijectively onto those of (AB + λ)v = μv.

**How the definition helps.** The identity A(BA + λ) = (AB + λ)A sends each solution at μ of the first operator to a solution at μ of the second (our own). On solutions at μ, BA acts as multiplication by μ − λ, so applying B and dividing by μ − λ inverts A (our own).

**Paper or page:** [Exceptional Gegenbauer polynomials via isospectral deformation](https://arxiv.org/abs/2110.04059v1). It says: “A multi-step rational Darboux transformation is necessarily a factorization chain, and viceversa.”

**Sources:**

- [Exceptional Gegenbauer polynomials via isospectral deformation](https://arxiv.org/abs/2110.04059v1)

### Regular singularities prevent exponential blow-up

**Remember:** Limit pole orders to keep local solutions within powers and logarithms.

*Rules out counterexamples.* MSC 34M35 (Singularities, monodromy and local behavior of solutions to ordinary differential equations in the complex domain, normal forms). arXiv math.CA. Level 3: graduate.

**Definition.** A singularity of y″ + p(z)y′ + q(z)y = 0 at zero is regular if p has at most a simple pole and q at most a double pole. Equivalently, zp(z) and z²q(z) extend analytically to zero, so powers zʳ times convergent series, possibly with a logarithm, solve the equation.

**Problem.** On each sufficiently small sector with a fixed logarithm, every solution near zero satisfies \|y(z)\| ≤ C/\|z\|ᴺ for some positive C and N.

**How the definition helps.** By the Frobenius theorem, solutions combine zʳ and zʳ log z times convergent power series, which grow at most like a power of 1/\|z\| on a sector. Without the condition, z⁴y″ + (2z³ + z²)y′ = 0 has the solution exp(1/z) (our own). On the positive real axis it outgrows every inverse power (our own).

**Wikipedia:** [Regular singular point](https://en.wikipedia.org/wiki/Regular_singular_point). It says: “a regular singular point, where the growth of solutions is bounded (in any small sector) by an algebraic function”

**Sources:** none listed. No primary source with a working link was found.

### Continuous Caputo derivatives compose

**Remember:** Subtract the initial value, then add the orders of integration.

*Rules out counterexamples.* MSC 34A08 (Fractional ordinary differential equations), 26A33. arXiv math.CA. Level 4: research.

**Definition.** For order α in (0,1), the Caputo derivative of f on \[a,b\] is the Riemann–Liouville derivative of f − f(a). That is, integrate f − f(a) against (t − s)⁻ᵅ/Γ(1 − α) from a to t, then differentiate in t. The function is continuously Caputo differentiable if this derivative extends continuously to a.

**Problem.** Let a continuous function have a continuous Caputo derivative of order α. For 0 &lt; β &lt; α &lt; 1, applying orders β then α − β gives order α.

**How the definition helps.** Because f(a) was removed, fractional integration of the order-α derivative gives back f − f(a) (our own). So the order-β derivative is the order-(α − β) integral of a continuous function, which vanishes at a, and the next Caputo derivative undoes it (our own). For f(t) = tᵝ on \[0,1\], the composition is zero while the order-α derivative diverges at zero (our own).

**Paper or page:** [Semigroup property of fractional differential operators and its applications](https://arxiv.org/abs/2107.08914v1). It says: “Moreover, ᶜDₐ⁽ᵅ⁻ᵝ⁾f₁ = ᶜDₐᵅf”

**Sources:**

- [Semigroup property of fractional differential operators and its applications, Proposition 7](https://arxiv.org/abs/2107.08914v1)

### Inverse factors encode return derivatives

**Remember:** V obeys the same linear equation as the initial-value derivative.

*True by definition. Confidence: medium.* MSC 34C07 (Theory of limit cycles of polynomial and analytic vector fields (existence, uniqueness, bounds, Hilbert's 16th problem and ramifications) for ordinary differential equations), 34C25. arXiv math.DS. Level 4: research.

**Definition.** For dr/dθ = F(θ,r) with F smooth and T-periodic in θ, an inverse integrating factor is a nontrivial differentiable V with dV/dθ = V ∂F/∂r along solutions. This is the same linear equation that the derivative of a solution with respect to its initial value satisfies.

**Problem.** Assume V is T-periodic and continuously differentiable. If P takes an initial value r at zero to its value at T, then V(0,P(r)) = V(0,r)P′(r) wherever P exists.

**How the definition helps.** Along a solution, V and the initial-value derivative solve one scalar linear equation, and the derivative starts at one (our own). So V at time T is V at time zero times that derivative, which is P′(r), and periodicity of V gives the formula (our own).

**Paper or page:** [Principal Bautin ideal of monodromic singularities with inverse integrating factors](https://arxiv.org/abs/2412.09205v1). It says: “V(0, Π(ρ₀)) = V(0, ρ₀) Π′(ρ₀)”

**Sources:**

- [Isaac A. García, Jaume Giné (2024), Principal Bautin ideal of monodromic singularities with inverse integrating factors](https://arxiv.org/abs/2412.09205v1)

### Reciprocal radius locates finite-time blow-up

**Remember:** Infinite rescaled time can correspond to a finite original lifetime.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 34C11 (Growth and boundedness of solutions to ordinary differential equations), 34C40. arXiv math.DS. Level 4: research.

**Definition.** Let x′ = F(x) with F homogeneous of degree d &gt; 1, meaning F(rx) = rᵈF(x) for r &gt; 0. Use the reciprocal radius ρ = 1/\|x\|, which puts infinity at ρ = 0. Rescale time by ds/dt = \|x\|ᵈ⁻¹, so the original time elapsed is the integral of ρᵈ⁻¹ ds.

**Problem.** Suppose a trajectory exists for every s ≥ 0 and its reciprocal radius tends to zero exponentially. Its radius tends to infinity in finite original time.

**How the definition helps.** The original lifetime is the integral of ρᵈ⁻¹ over all s ≥ 0, and exponential decay of ρ makes it finite (our own). Since ρ tends to zero, the radius tends to infinity within that finite time. Proving the decay in the rescaled system remains the main dynamical step.

**Paper or page:** [Blow-up behavior for ODEs with normally hyperbolic nature in dynamics at infinity](https://arxiv.org/abs/2307.09201v3). It says: “Then tₘₐₓ &lt; ∞ holds; namely, y(t) is a blow-up solution.”

**Sources:**

- [Kaname Matsue (2024), Blow-up behavior for ODEs with normally hyperbolic nature in dynamics at infinity](https://arxiv.org/abs/2307.09201v3)

### Total positivity limits sign changes

**Remember:** Every minor positive, not just entries, so sign changes cannot grow.

*Rules out counterexamples.* MSC 34C12 (Monotone systems involving ordinary differential equations), 15B48. arXiv math.DS, math.CA. Level 4: research.

**Definition.** A linear system is totally positive if, at every positive elapsed time, every minor of its forward evolution matrix is positive. A minor is the determinant of a square submatrix, and positive entries are only the one-by-one minors.

**Problem.** In a totally positive system, the number of sign changes in a nonzero solution cannot increase when zero entries are skipped.

**How the definition helps.** The variation-diminishing theorem for totally positive matrices, applied to the evolution matrix over each forward interval, gives the result. Positive entries alone are not enough: take constant coefficients with rows (0,1,1), (1,0,1) and (2,1,0), whose exponential has positive entries (our own). The solution from (1,−1,0) at once has signs +, −, +, so its count rises from one to two (our own).

**Paper or page:** [Behavior of Totally Positive Differential Systems Near a Periodic Solution](https://arxiv.org/abs/2101.06027v1). It says: “Then s⁺(Ax) ≤ s⁻(x) for all x ∈ ℝⁿ ∖ {0}.”

**Sources:**

- [Binyamin Schwarz (1970), Totally positive differential systems](https://doi.org/10.2140/pjm.1970.32.203)

### Defining singular Schrödinger operators by quadratic forms makes them self-adjoint

**Remember:** Define the operator by its energy, and self-adjointness comes free.

*True by definition.* MSC 34L40 (Particular ordinary differential operators (Dirac, one-dimensional Schrödinger, etc.)), 47B25, 47A07. arXiv math.SP, math.FA. Level 4: research.

**Definition.** Let q be a real 1-periodic distribution in H⁻¹, extended periodically to ℝ. The form-sum operator for −u″ + qu is the operator that the representation theorem attaches to the energy form h\[u\] = ∫\|u′\|² + ⟨q,\|u\|²⟩ on H¹(ℝ). That theorem turns each closed form bounded below into a self-adjoint operator bounded below.

**Problem.** For real 1-periodic q in periodic H⁻¹, the form-sum operator for −u″ + qu on L²(ℝ) is self-adjoint and bounded below. The five definitions, including the quasi-differential definition, agree.

**How the definition helps.** Self-adjointness and the lower bound follow from the representation theorem once h is closed and bounded below. The real step is that ⟨q,\|u\|²⟩ is small compared with ∫\|u′\|² (our own). The main work, Theorem 18, identifies the quasi-differential operators with the form-sum operators, and Corollary 15 shows that the minimal, Friedrichs and maximal operators coincide.

**Paper or page:** [One-dimensional Schrödinger operators with singular periodic potentials](https://arxiv.org/abs/0805.1000), [One-dimensional Schrödinger operators with singular periodic potentials](https://arxiv.org/abs/0805.1000), [One-dimensional Schrödinger operators with singular periodic potentials](https://arxiv.org/abs/0805.1000), [One-dimensional Schrödinger operators with singular periodic potentials](https://arxiv.org/abs/0805.1000). It says: “with 1-periodic real-valued singular potentials q(x) ∈ H⁻¹per(ℝ,ℝ) on the Hilbert space L₂(ℝ). We show equivalence of five basic definitions of the operators S(q) and prove that they are self-adjoint.”

**Sources:**

- [V. Mikhailets, V. Molyboga, One-dimensional Schrödinger operators with singular periodic potentials, Methods Funct. Anal. Topology 14 (2008), no. 2, 184–200, arXiv:0805.1000](https://arxiv.org/abs/0805.1000)

### Time gaps weight delta integrals

**Remember:** Each point’s value fills the gap that follows it.

*True by definition.* MSC 34N05 (Dynamic equations on time scales or measure chains). arXiv math.CA. Level 4: research.

**Definition.** On a time scale, a closed subset of the real line, the delta integral of a continuous function over \[a,b\] is the ordinary integral of its step extension. The extension fills each gap with the function’s value at the gap’s left endpoint.

**Problem.** On a time scale, the delta integral of a continuous function is the ordinary integral of its extension. On a finite interval of isolated time points it is the sum of point values weighted by the gaps, excluding the last point.

**How the definition helps.** Each gap contributes its left endpoint value times its length, and each real interval contributes its usual integral (our own). On isolated points this leaves the gap-weighted sum without the last point, whose gap lies beyond b (our own). Equivalence with the antiderivative definition uses the time-scale fundamental theorem of calculus (our own).

**Wikipedia:** [Time-scale calculus](https://en.wikipedia.org/wiki/Time-scale_calculus). It says: “the delta derivative turns out to be the Radon–Nikodym derivative with respect to this measure”

**Paper or page:** [Existence Result for Singular Second Order Dynamic Equations with Mixed Boundary Conditions](https://arxiv.org/abs/2506.16505v1). It says: “where the integral on the right is the usual Riemann integral from calculus.”

**Sources:**

- [Jonathan Eckhardt and Gerald Teschl, On the connection between the Hilger and Radon–Nikodym derivatives](https://doi.org/10.1016/j.jmaa.2011.07.041)
