### Absolute continuity makes straight paths optimal

**Remember:** The integral of velocity must equal the change in position.

*Rules out counterexamples.* MSC 49J05 (Existence theories for free problems in one independent variable), 49K05. arXiv math.OC. Level 2: later undergraduate.

**Definition.** An absolutely continuous real path on a closed interval equals its starting point plus the integral of an integrable velocity. Continuity and existence of a derivative almost everywhere do not ensure this representation.

**Problem.** Among absolutely continuous real paths from 0 to 1 in unit time, the straight path uniquely minimizes the integral of squared speed.

**How the definition helps.** Absolute continuity forces the velocity to integrate to one, so Cauchy–Schwarz gives a lower bound of one on the energy (our own). Equality forces constant velocity almost everywhere (our own). Without absolute continuity the Cantor function joins these endpoints with derivative zero almost everywhere (our own). The work is in the fundamental theorem that identifies absolutely continuous paths with integrals of their velocities.

**Wikipedia:** [Absolute continuity](https://en.wikipedia.org/wiki/Absolute_continuity). It says: “is uniformly continuous, and is differentiable with f′(x) = 0 for almost all x, but does not satisfy the Fundamental Theorem”

**Sources:** none listed. No primary source with a working link was found.

### Compact sublevels trap minimizing sequences

**Remember:** Keep a low-cost sequence inside one compact set.

*Rules out counterexamples.* MSC 49J27 (Existence theories for problems in abstract spaces). arXiv math.OC. Level 2: later undergraduate.

**Definition.** A cost has compact sublevels if, for each real bound, the points costing at most that bound form a compact set.

**Problem.** Suppose a cost on a metric space has compact sublevels and a finite infimum. Then some point attains that infimum.

**How the definition helps.** One compact sublevel contains the tail of any sequence whose costs approach the infimum (our own). A subsequence therefore converges (our own). Every sublevel is closed, so the limit belongs to every sublevel above the infimum and attains it (our own). Without compactness, exp(−x) on the real line approaches zero without attaining it (our own).

**Wikipedia:** [Direct method in the calculus of variations](https://en.wikipedia.org/wiki/Direct_method_in_the_calculus_of_variations). It says: “Show that J is sequentially lower semi-continuous with respect to the topology τ.”

**Sources:** none listed. No primary source with a working link was found.

### With subgradients, zero is a subgradient exactly at a global minimum

**Remember:** A flat line below the graph marks the lowest point.

*True by definition.* MSC 49J52 (Nonsmooth analysis), 26A51. arXiv math.OC, math.CA. Level 2: later undergraduate.

**Definition.** A subgradient of a convex function f at x₀ is a number c with f(x) − f(x₀) ≥ c(x − x₀) for all x. The set of all subgradients at x₀ is the subdifferential. For f(x) = \|x\| the subdifferential at 0 is the interval \[−1, 1\].

**Problem.** A point x₀ is a global minimum of a convex function f exactly when 0 is a subgradient of f at x₀. This is Fermat's rule for convex functions with corners.

**How the definition helps.** Put c = 0 in the definition, and the inequality says f(x) ≥ f(x₀) for all x. So the rule holds by definition, and it gives a global minimum, not only a local one. The derivative version fails at corners, such as the minimum of \|x\|, where no derivative exists. What stays hard is computing subdifferentials of sums and compositions.

**Wikipedia:** [Subderivative](https://en.wikipedia.org/wiki/Subderivative). It says: “A point x₀ is a global minimum of a convex function f if and only if zero is contained in the subdifferential.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970)](https://doi.org/10.1515/9781400873173)

### A point is nearest in a convex set when the displacement is normal

**Remember:** At the nearest point, the displacement points away from every feasible move.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49J53 (Set-valued and variational analysis), 52A27, 90C25. arXiv math.OC. Level 2: later undergraduate.

**Definition.** For a convex set Ω⊆ℝⁿ and z∈Ω, the normal cone at z consists of all v∈ℝⁿ satisfying ⟨v,y−z⟩≤0 for every y∈Ω.

**Problem.** Take a nonempty closed convex set Ω in ℝⁿ and a point x. The nearest point of Ω to x is the point z of Ω whose normal cone contains x − z.

**How the definition helps.** The normal cone expresses the nearest-point test as one condition on the displacement, by our own explanation. Expanding squared distances proves sufficiency, and testing a short move toward each feasible point proves necessity, by our own calculation. Existence of the nearest point still needs closedness, by our own account.

**Paper or page:** [Design Guidelines for Noise-Tolerant Optimization with Applications in Robust Design](https://arxiv.org/abs/2401.15007v2). It says: “z is the projection of x on Ω if and only if (x − z)ᵀ(y − z) ≤ 0 for all y ∈ Ω.”

**Sources:**

- [Yuchen Lou, Shigeng Sun, Jorge Nocedal, Design Guidelines for Noise-Tolerant Optimization with Applications in Robust Design, arXiv:2401.15007v2 (2024)](https://arxiv.org/abs/2401.15007v2)

### Endpoint momentum gives natural and moving boundary conditions

**Remember:** At a free endpoint the first change vanishes along every allowed direction.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable), 70H03. arXiv math.OC. Level 2: later undergraduate.

**Definition.** For a smooth integrand L(x,y,v), let v=y′, p=∂L/∂v and H=vp−L. The endpoint term p δy−H δx measures the first change in the integral due to moving its upper end by (δx,δy).

**Problem.** For a smooth stationary curve, the endpoint term vanishes along every allowed tangent direction at a freely sliding end. At a free height with x fixed, p=0.

**How the definition helps.** The endpoint term combines horizontal and vertical motion in one expression. In our own derivation, integration by parts cancels the interior term along a stationary curve. Differentiating the moving integration limit accounts for the horizontal motion.

**Paper or page:** [Simple Variable End Point Problem/Endpoints on Curves](https://proofwiki.org/wiki/Simple_Variable_End_Point_Problem/Endpoints_on_Curves). It says: “the following system of Euler and transversality equations”

**Sources:** none listed. No primary source with a working link was found.

### Integrated momentum gives the Euler–Lagrange equation without second derivatives

**Remember:** Subtract the accumulated position term before differentiating momentum.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** For a C¹ curve y on \[a,b\] and a smooth integrand L, evaluate p=∂L/∂y′ and q=∂L/∂y along y. Define the corrected momentum by m(x)=p(x)−∫ₐˣ q(s) ds.

**Problem.** A continuously differentiable fixed-end stationary curve for a smooth integrand satisfies the integrated Euler–Lagrange equation. Its momentum is continuously differentiable even before one knows that the curve has a second derivative.

**How the definition helps.** The integrated equation only uses the first derivative of the curve. In our own proof, integration by parts leaves the corrected momentum paired with h′ for every fixed-end direction h. Our own test takes h′ to be the corrected momentum minus its average. The resulting integral of a square is zero, so the corrected momentum is constant.

**Paper or page:** [Necessary Condition for Integral Functional to have Extremum for given function/Lemma](https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum_for_given_function/Lemma). It says: “Then β(x) is differentiable. Furthermore: ∀ x ∈ \[a,b\]: β′(x) = α(x)”

**Sources:** none listed. No primary source with a working link was found.

### Jacobi fields rule out interior zeros at a minimum

**Remember:** A Jacobi field vanishing at the start cannot vanish again inside a minimizing arc.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** Suppose the second variation, the second derivative along a perturbation h, equals ∫(P h′²+Q h²) dx on \[a,b\], with smooth P,Q and P&gt;0. A point c&gt;a is conjugate to a if a nonzero solution of (P h′)′=Qh vanishes at a and c.

**Problem.** If the second variation is nonnegative for all smooth fixed-end directions on \[a,b\], then no point in (a,b) is conjugate to a.

**How the definition helps.** A conjugate point lets us cut the solution off at a zero, giving a test function h with zero second variation. In our own proof, smooth approximation allows this piecewise smooth test. Nonnegativity for h+εk forces the coefficient of ε to vanish for every smooth fixed-end k. Integration by parts gives a nonzero coefficient when k(c)≠0 because uniqueness forces h′(c)≠0 on the left.

**Paper or page:** [Nonnegative Quadratic Functional implies no Interior Conjugate Points](https://proofwiki.org/wiki/Nonnegative_Quadratic_Functional_implies_no_Interior_Conjugate_Points). It says: “In other words, the open interval (a,b) contains no points conjugate to a.”

**Sources:** none listed. No primary source with a working link was found.

### Jacobi fields turn the second variation into a square

**Remember:** Divide by a positive Jacobi field and the second variation becomes a square.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** On \[a,b\], suppose the second derivative along each fixed-end perturbation h equals ∫(P h′²+Q h²) dx, with smooth P,Q and P&gt;0. A positive Jacobi field is a solution u of (P u′)′=Qu with u&gt;0 throughout \[a,b\].

**Problem.** At a smooth stationary curve for a smooth integrand, such a field makes the second variation strictly positive in every nonzero fixed-end direction. The curve is then a strict local minimum among curves close in both height and slope.

**How the definition helps.** In our own proof, substituting h=uw turns the second variation into ∫P u² w′² dx because the endpoint term vanishes. Positive lower bounds for P and u make this control ∫w′² dx. Since w vanishes at the ends, integration and Cauchy–Schwarz then bound ∫h′² dx by a constant times the second variation. Taylor’s theorem gives a smaller remainder when height and slope stay sufficiently close.

**Paper or page:** [Sufficient Conditions for Weak Extremum](https://proofwiki.org/wiki/Sufficient_Conditions_for_Weak_Extremum). It says: “Let the strengthened Legendre's Condition hold. Let the strengthened Jacobi's Necessary Condition hold.”

**Sources:** none listed. No primary source with a working link was found.

### Linear scaling in velocity makes curve integrals ignore speed

**Remember:** The speed factor from the velocity cancels the change of parameter.

*Rules out counterexamples.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** An integrand F(q,v) is positively homogeneous of degree one in velocity if F(q,sv)=sF(q,v) for every s&gt;0. It depends on the point and the velocity, but has no separate dependence on the curve parameter.

**Problem.** The integral of such an integrand along a curve is unchanged by any smooth increasing change of parameter with positive derivative.

**How the definition helps.** The scaling rule cancels the speed factor introduced by a change of parameter. In our own proof, the chain rule scales the velocity and substitution cancels this factor in the integral. Squared speed fails this test. Our own paths q(t)=t and q(t)=(t+t²)/2 both traverse \[0,1\] in unit time, but their squared-speed integrals are 1 and 13/12.

**Paper or page:** [Necessary and Sufficient Condition for Integral Parametric Functional to be Independent of Parametric Representation](https://proofwiki.org/wiki/Necessary_and_Sufficient_Condition_for_Integral_Parametric_Functional_to_be_Independent_of_Parametric_Representation). It says: “and is a positive-homogeneous function of degree 1 in ẋ and ẏ.”

**Sources:** none listed. No primary source with a working link was found.

### Strong minima exclude cheap changes with steep slopes

**Remember:** A height limit still lets you test a steep slope briefly.

*Rules out counterexamples.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** A fixed-end curve y is a strong local minimizer if some δ&gt;0 gives J\[z\]≥J\[y\] for every admissible piecewise smooth z with sup\|z−y\|&lt;δ. A weak local minimizer requires this comparison only when the slopes also differ by less than δ uniformly wherever defined.

**Problem.** At each interior point of a smooth strong minimizer, the smooth integrand as a function of slope lies above its tangent line there.

**How the definition helps.** Strong closeness permits a brief test at any slope. In our own derivation, a short steep segment followed by a gentle return detects any negative gap below the tangent. For L(v)=v²−v⁴ and zero endpoints, the zero curve minimizes among curves with slopes smaller than one in magnitude. Our own zigzags with slopes ±2 have arbitrarily small height and negative integral.

**Wikipedia:** [Calculus of variations](https://en.wikipedia.org/wiki/Calculus_of_variations). It says: “Thus a strong extremum is also a weak extremum, but the converse may not hold.”

**Sources:** none listed. No primary source with a working link was found.

### The endpoint term gives both corner matching conditions

**Remember:** At a movable join, both arcs must give the same endpoint work.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** For a smooth integrand L(x,y,v), let v=y′, p=∂L/∂v and H=vp−L. The endpoint term p δy−H δx gives the contribution from moving an arc’s upper end by (δx,δy).

**Problem.** If a stationary piecewise smooth curve has a freely movable interior corner, p and H agree across the corner.

**How the definition helps.** In our own derivation, moving the corner changes one arc’s upper end and the other arc’s lower end. Their endpoint terms therefore enter with opposite signs. Independent horizontal and vertical movements force H and p to match separately.

**Paper or page:** [Necessary Condition for Integral Functional to have Extremum for given Function/Non-differentiable at Intermediate Point](https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum_for_given_Function/Non-differentiable_at_Intermediate_Point). It says: “The last two equations are known as the Weierstrass-Erdmann corner conditions.”

**Sources:** none listed. No primary source with a working link was found.

### The first variation turns minimization into the Euler–Lagrange equation

**Remember:** Move the derivative off the test function to see the equation.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** A functional assigns a number to a curve, for example J\[y\]=∫L(x,y,y′) dx with smooth L. Its first variation in direction h is the derivative of J\[y+εh\] at ε=0. Its variational derivative is the continuous function G giving that derivative as ∫Gh dx whenever h vanishes near both ends.

**Problem.** At a smooth fixed-end minimum, the variational derivative vanishes. Equivalently, ∂L/∂y = d(∂L/∂y′)/dx along the curve.

**How the definition helps.** The first variation lets ordinary calculus test a minimum one direction at a time. Our own explanation puts the work in integration by parts, which identifies G. The fundamental lemma then says that a continuous G that pairs to zero with every test function must vanish.

**Paper or page:** [Necessary Condition for Integral Functional to have Extremum for given function](https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum_for_given_function). It says: “Then a necessary condition for J\[y\] to have an extremum (strong or weak) for a given function y(x) is that y(x) satisfy Euler's equation”

**Sources:** none listed. No primary source with a working link was found.

### The Lagrangian energy gives Beltrami's identity

**Remember:** Subtract the integrand from slope times momentum to expose the constant.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable), 70H03. arXiv math.OC. Level 2: later undergraduate.

**Definition.** For the integrand L(x,y,v) with v=y′, define its energy as H=v∂L/∂v−L. Unlike mechanical energy, this definition does not require kinetic and potential terms.

**Problem.** If the integrand does not depend on x explicitly, H is constant along every smooth Euler–Lagrange curve.

**How the definition helps.** The energy packages the second-order equation into a first-order relation between y and its slope. In our own calculation, differentiating v∂L/∂v−L cancels the terms containing v′. The Euler–Lagrange equation cancels the terms containing y′, leaving −∂L/∂x.

**Wikipedia:** [Calculus of variations](https://en.wikipedia.org/wiki/Calculus_of_variations). It says: “the Legendre transform of the Lagrangian”

**Sources:** none listed. No primary source with a working link was found.

### The Weierstrass excess makes strong minimality a pointwise test

**Remember:** Subtract an endpoint term so only the excess cost remains.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** Fix a smooth slope field v(x,y) and write p=∂L/∂v at the field slope. The Weierstrass excess is the gap E=L(x,y,w)−L(x,y,v)−p(w−v) at a competing slope w. The Hilbert integral integrates p dy+(L−vp) dx along a curve, with L evaluated at the field slope.

**Problem.** Suppose the Hilbert expression equals dS for a smooth function S on a strip and the excess is nonnegative there for every slope. Each curve following the field minimizes the original integral among fixed-end competitors in that strip.

**How the definition helps.** In our own proof, subtracting the Hilbert integral leaves precisely the integral of the excess. The Hilbert integral equals the same endpoint difference for every competitor. Excess vanishes along the field and is nonnegative elsewhere, which proves the comparison. The work lies in finding a field and a function S with these properties.

**Paper or page:** [Conditions for Strong Minimum of Functional](https://proofwiki.org/wiki/Conditions_for_Strong_Minimum_of_Functional). It says: “where E is Weierstrass E-Function. Then J has a strong minimum for γ.”

**Sources:** none listed. No primary source with a working link was found.

### A regular integral constraint admits one constant multiplier

**Remember:** One direction that changes the constraint is enough to repair the others.

*Rules out counterexamples.* MSC 49K21 (Optimality conditions for problems involving relations other than differential equations), 49K05. arXiv math.OC. Level 2: later undergraduate.

**Definition.** An integral constraint K\[y\]=c is regular at y if some fixed-end perturbation gives a nonzero first derivative of K. This excludes constraints whose first derivative vanishes in every direction.

**Problem.** Suppose smooth integral functionals J and K have fixed endpoints and K\[y\]=c is regular at a constrained minimum of J. Some constant λ makes the first derivative of J+λK vanish in every fixed-end direction.

**How the definition helps.** In our own argument, regularity lets one direction correct the constraint by the implicit function theorem. Linearity then gives the multiplier because the first derivative vanishes on all first-order feasible directions. Our own counterexample uses J\[y\]=∫y dx with K\[y\]=∫y² dx=0 and zero endpoints. Only y=0 is feasible, but no finite λ makes J+λK stationary there.

**Paper or page:** [Simplest Variational Problem with Subsidiary Conditions](https://proofwiki.org/wiki/Simplest_Variational_Problem_with_Subsidiary_Conditions). It says: “Then, if y = y(x) is not an extremal of K\[y\], there exists a constant λ such that y = y(x) is an extremal of the functional”

**Sources:** none listed. No primary source with a working link was found.

### Tangent variations put constraint forces in the normal direction

**Remember:** Constraint forces have no component along allowed displacements.

*Makes the theorem clean to state or prove.* MSC 49K21 (Optimality conditions for problems involving relations other than differential equations), 70H03. arXiv math.OC. Level 2: later undergraduate.

**Definition.** At fixed x, a tangent variation to g(x,y,z)=0 is a displacement perpendicular to the gradient in y and z. Assume g is smooth and this gradient never vanishes along the curve.

**Problem.** At a smooth fixed-end extremum of ∫L(x,y,z,y′,z′) dx under this constraint, some function λ(x) makes ∫(L+λg) dx stationary.

**How the definition helps.** Tangent variations test all directions perpendicular to the constraint gradient. In our own derivation, the implicit function theorem realizes local tangent variations by curves satisfying the constraint. After integration by parts, tests on arbitrarily short intervals force the coefficient to be normal at each point. A normal vector is a multiple of the gradient.

**Paper or page:** [Simplest Variational Problem with Subsidiary Conditions for Curve on Surface](https://proofwiki.org/wiki/Simplest_Variational_Problem_with_Subsidiary_Conditions_for_Curve_on_Surface). It says: “not simultaneously vanish at any point of the surface g = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Continuation values give a recursion for optimal reward

**Remember:** Once the current state is fixed, only the remaining choices matter.

*Makes the theorem clean to state or prove.* MSC 49L20 (Dynamic programming in optimal control and differential games). arXiv math.OC, cs.SY. Level 2: later undergraduate.

**Definition.** At each decision time, define the continuation value of a state as the supremum of total rewards over its feasible remaining paths. The state must determine future rewards and allowed actions.

**Problem.** Consider a deterministic problem with finitely many decision times, bounded additive rewards and a feasible continuation at every decision state. Each value equals the supremum over first actions of immediate reward plus the next state’s value. Every remaining part of an optimal path is optimal from its starting state.

**How the definition helps.** The continuation value summarizes all feasible tails by one number, so the recursion needs only the first action and next state (our own). Group feasible paths by first action and take the supremum within each group (our own). If an optimal path had a better feasible tail, replacing its tail would improve the whole path (our own). The work lies in choosing a state that permits such replacements (our own).

**Wikipedia:** [Bellman equation](https://en.wikipedia.org/wiki/Bellman_equation). It says: “the remaining decisions must constitute an optimal policy with regard to the state resulting from the first decision.”

**Sources:**

- [R. Bellman, On the Theory of Dynamic Programming (1952)](https://doi.org/10.1073/pnas.38.8.716)

### Discounting contracts the Bellman update

**Remember:** Averaging cannot grow an error, and discounting shrinks it.

*Rules out counterexamples.* MSC 49L20 (Dynamic programming in optimal control and differential games), 93E20. arXiv math.OC, cs.SY. Level 2: later undergraduate.

**Definition.** Fix a rule for choosing actions from the current state. Its Bellman update adds the expected immediate reward to γ times the expected trial value at the next state. The discount γ satisfies 0 ≤ γ &lt; 1.

**Problem.** In a finite Markov decision process with bounded rewards, the maximum difference after the update is at most γ times the original maximum absolute difference. The unique fixed point gives the expected discounted reward sum from each state.

**How the definition helps.** Discounting contracts the update because rewards cancel and averaging cannot increase the maximum absolute difference (our own). The contraction theorem gives uniqueness. Conditioning on the first step verifies the discounted sum is a fixed point (our own). At γ = 1, one state with zero reward admits every value as a fixed point (our own).

**Paper or page:** [On the Reinhardt Conjecture and Formal Foundations of Optimal Control](https://arxiv.org/abs/2208.04443v1). It says: “The operator Bπ is a contraction in the max norm on the space of functions S → ℝ.”

**Sources:** none listed. No primary source with a working link was found.

### Transport plans let atoms split

**Remember:** A plan can send one source atom to two target points.

*Makes the theorem clean to state or prove.* MSC 49Q22 (Optimal transportation). arXiv math.OC. Level 2: later undergraduate.

**Definition.** A transport plan from μ to ν is a probability measure on pairs whose first and second marginals are μ and ν, respectively. A transport map is a measurable function T satisfying μ(T⁻¹(B)) = ν(B) for every measurable target set B.

**Problem.** Any two probability measures on Euclidean spaces have a transport plan. They need not admit a transport map.

**How the definition helps.** A joint distribution allows the independent product of the prescribed measures, which always gives a plan. The nLab contrasts this with a source concentrated at one point. In our own explicit example, a map cannot send that point to two targets with half the mass each. A separate optimal transport theorem needs further hypotheses to obtain a cost-minimizing map.

**nLab:** [transport plan](https://ncatlab.org/nlab/show/transport+plan). It says: “there may exist no measure-preserving function between two probability spaces”

**Sources:** none listed. No primary source with a working link was found.

### Mixtures capture fast control switches

**Remember:** Fast switches can converge to a mixture even when actions cannot.

*Rules out counterexamples. Confidence: medium.* MSC 49J15 (Existence theories for optimal control problems involving ordinary differential equations). arXiv math.OC. Level 3: graduate.

**Definition.** Let I be a finite time interval and A the action space. A relaxed control is a positive Borel measure on I × A whose time marginal is length measure. An ordinary control uses a point mass at its chosen action at almost every time.

**Problem.** For a compact metric action space, a weak limit of relaxed controls is again a relaxed control. Here weak convergence tests integrals of continuous functions of time and action. This compact-action version is our own.

**How the definition helps.** The fixed distribution of time passes to the limit by testing with functions of time alone. In our own account, a conditional probability theorem recovers the action distribution at almost every time. In our own counterexample, let actions alternate faster and faster between −1 and 1 in equal proportions. The limit puts half the mass on each action at every time, so it is not an ordinary control.

**Paper or page:** [A non-exchangeable mean field control problem with controlled interactions](https://arxiv.org/abs/2511.00288). It says: “is closed with respect to the Wasserstein topology.”

**Sources:** none listed. No primary source with a working link was found.

### Point masses embed ordinary controls

**Remember:** A point mass averages exactly one action.

*True by definition.* MSC 49J15 (Existence theories for optimal control problems involving ordinary differential equations). arXiv math.OC. Level 3: graduate.

**Definition.** An ordinary control chooses an action measurably at each time. A relaxed control chooses a probability measure on actions at each time, measurably in time, and averages velocity and running cost against it.

**Problem.** Every ordinary control has a relaxed form with the same trajectory and cost. Thus the relaxed infimum is no greater than the ordinary infimum.

**How the definition helps.** A point mass, which puts all probability on one action, reproduces its velocity and cost exactly. Thus each ordinary control remains available at the same cost when controls may use distributions. In our own comparison, the reverse bound requires approximating relaxed trajectories and costs by ordinary ones under additional hypotheses.

**Paper or page:** [Lagrangian, Eulerian and Kantorovich formulations of multi-agent optimal control problems: Equivalence and Gamma-convergence](https://arxiv.org/abs/2011.07117). It says: “In particular Vᴿᴸ(X₀) ≤ Vᴸ(X₀).”

**Sources:**

- [Lagrangian, Eulerian and Kantorovich formulations of multi-agent optimal control problems: Equivalence and Gamma-convergence](https://arxiv.org/abs/2011.07117)

### Minty tests make solutions convex

**Remember:** Evaluate the operator at the known point so each test is linear.

*True by definition.* MSC 49J40 (Variational inequalities). arXiv math.OC. Level 3: graduate.

**Definition.** Let C be a closed convex subset of a real Hilbert space and let F map C into that space. The usual inequality asks for x in C satisfying ⟨F(x),y − x⟩ ≥ 0 for every y in C. The Minty form replaces F(x) by F(y).

**Problem.** For continuous monotone F on a closed convex set, the solutions of the usual inequality form a closed convex set. Monotonicity means ⟨F(y) − F(x), y − x⟩ ≥ 0.

**How the definition helps.** The Minty form expresses the solution set as an intersection of closed half-spaces with the constraint set. In our own proof, monotonicity gives the forward implication. To reverse it, move y along a segment toward x and use continuity. The work moves to this equivalence, known as Minty’s lemma.

**Paper or page:** [An inertial proximal splitting algorithm for hierarchical bilevel equilibria in Hilbert spaces](https://arxiv.org/abs/2502.20999v1). It says: “If f is monotone, then every solution of (EP) is also a solution of (DEP).”

**Sources:** none listed. No primary source with a working link was found.

### Compactness keeps Γ-minima from escaping

**Remember:** Compactness keeps minimizers where the limit can see them.

*Rules out counterexamples.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.OC. Level 3: graduate.

**Definition.** Costs Γ-converge to F if every sequence approaching x has lower limiting cost at least F(x). At each x, some approaching sequence must have costs tending to F(x). Require one compact set to contain a minimizer of each cost.

**Problem.** Suppose nonnegative costs on a complete metric space Γ-converge and meet this compactness requirement. Their minima converge to the minimum of F, and F attains it.

**How the definition helps.** Compactness gives a convergent subsequence of minimizers along which the minima approach their lower limit (our own). The Γ lower bound at its limit and recovery sequences at every competitor prove attainment and convergence (our own). Without compactness, fₙ(x) = min(1, \|x − n\|) on ℝ has minimum zero but Γ-limit one (our own).

**Paper or page:** [Phase transitions and minimal interfaces on manifolds with conical singularities](https://arxiv.org/abs/2403.07178). It says: “Then, $\\mathcal F\_\\infty $ has a minimizer and \\\[\\min<sub>X</sub> \\mathcal F\_\\infty = \\lim<sub>k\\rightarrow \\infty</sub> \\inf<sub>X</sub> \\mathcal F<sub>k</sub>.\\\]”

**Sources:** none listed. No primary source with a working link was found.

### Constant Γ-limits repair cost jumps

**Remember:** A constant sequence still relaxes the cost if nearby values are lower.

*True by definition.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.AP, math.OC. Level 3: graduate.

**Definition.** At each x and radius r &gt; 0, let aₙ(r) be the infimum of cost Fₙ on the open ball B(x,r). As r decreases to zero, take the limits of liminfₙ aₙ(r) and limsupₙ aₙ(r). If these agree at every x, their common value defines the Γ-limit there.

**Problem.** Let every term of a sequence equal the same nonnegative cost F on a metric space. Its Γ-limit is the largest lower semicontinuous cost below F. Lower semicontinuity means the value at a point cannot exceed the lower limit of nearby values.

**How the definition helps.** For a constant sequence, both expressions give the supremum of the ball infima (our own). If a ball has infimum above a threshold, every interior point has a smaller ball with the same bound (our own). This proves lower semicontinuity. Any lower semicontinuous minorant exceeding a threshold at x exceeds it on some ball there, so the formula dominates every minorant (our own).

**Wikipedia:** [Γ-convergence](https://en.wikipedia.org/wiki/%CE%93-convergence). It says: “the largest lower semicontinuous functional below F”

**Sources:** none listed. No primary source with a working link was found.

### Continuous additions preserve Γ-limits

**Remember:** A continuous added cost has the same limit along every approaching sequence.

*Rules out counterexamples.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.OC. Level 3: graduate.

**Definition.** Costs Γ-converge to F on a metric space if every sequence approaching x has lower limiting cost at least F(x). At each x, some approaching sequence must have costs tending to F(x).

**Problem.** Suppose nonnegative costs Γ-converge to F. Adding the same finite nonnegative continuous function G to each cost gives Γ-limit F + G.

**How the definition helps.** Continuity gives G(xₙ) → G(x) whenever xₙ → x, preserving both Γ-convergence tests (our own). On ℝ let fₙ equal one except at 1/n, where it vanishes (our own). Its Γ-limit and the discontinuous perturbation G both equal one except at zero, where they vanish (our own). Every sum fₙ + G stays at least one, although F(0) + G(0) = 0 (our own).

**Wikipedia:** [Γ-convergence](https://en.wikipedia.org/wiki/%CE%93-convergence). It says: “Γ-convergence is stable under continuous perturbations”

**Sources:** none listed. No primary source with a working link was found.

### Gamma limits preserve limiting minimizers

**Remember:** Check moving points to keep moving wells from disappearing.

*Rules out counterexamples.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.OC. Level 3: graduate.

**Definition.** Costs Fₙ Γ-converge to F on a metric space if two tests hold at every point x. Every sequence xₙ → x satisfies liminfₙ Fₙ(xₙ) ≥ F(x). Some sequence xₙ → x satisfies Fₙ(xₙ) → F(x).

**Problem.** If costs Gamma converge on a metric space, every cluster point of their minimizers minimizes the limit cost.

**How the definition helps.** The lower bound controls the convergent minimizers, and the matching upper bound lets us compare them with any fixed candidate (our own). For pointwise convergence, start with the cost x on \[0, 1\] and set it to −1 only at 1 − 1/n (our own). Its minimizers tend to 1, but the pointwise limit is minimized at 0 (our own). The work goes into proving the two bounds for the costs in question (our own).

**Wikipedia:** [Γ-convergence](https://en.wikipedia.org/wiki/%CE%93-convergence). It says: “then every cluster point of the sequence xₙ is a minimizer of F.”

**Sources:** none listed. No primary source with a working link was found.

### Global slope formulas preserve semicontinuity

**Remember:** Write the slope as a supremum over fixed comparison points.

*True by definition.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.AP, math.OC. Level 3: graduate.

**Definition.** For a finite function F on a metric space, set q(x,y) = max(0,F(x) − F(y))/d(x,y) for distinct points. The local slope is limsup as y approaches x of q(x,y), with value zero at isolated points. The global slope is the supremum over all y ≠ x, with value zero if none exist.

**Problem.** Let F be finite, lower semicontinuous and convex along constant-speed shortest paths, in a space where such a path joins every pair of points. Then the local slope of F is lower semicontinuous.

**How the definition helps.** The global formula allows each comparison point to stay fixed while x varies. In our own proof, lower semicontinuity gives the bound for each fixed y ≠ x. Taking the supremum proves the claim. Convexity along the path from x to y identifies the local and global slopes, which is the essential preceding result.

**Paper or page:** [Stability of a class of action functionals depending on convex functions](https://arxiv.org/abs/2106.10908v1). It says: “\\abs {\\partial f}(x)=\\sup <sub>y\\ne x</sub>\\frac{\\left(f(y)-f(x)-\\frac{\\lambda }{2}{\\mathsf{d}}(y,x)<sup>2\\right</sup>)<sup>-}{{\\mathsf{d}}</sup>(y,x)}.”

**Sources:** none listed. No primary source with a working link was found.

### Lower semicontinuity makes increasing Γ-limits pointwise

**Remember:** An earlier cost bounds the tail, and a constant sequence gives the upper bound.

*Rules out counterexamples.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.OC. Level 3: graduate.

**Definition.** A cost is lower semicontinuous if its value at a limit point never exceeds the lower limit along a sequence approaching it. Costs Γ-converge to F if every sequence approaching x has lower limiting cost at least F(x). At each x, some such sequence must have costs tending to F(x).

**Problem.** Increasing lower semicontinuous costs on a metric space Γ-converge to their pointwise supremum.

**How the definition helps.** Along every approaching sequence, lower semicontinuity of each earlier cost bounds the lower limit from below (our own). Taking the supremum gives the Γ lower bound, and the constant sequence recovers that supremum (our own). Without lower semicontinuity, repeat the cost on ℝ equal to one at zero and zero elsewhere (our own). The points 1/n approach zero with cost zero and violate the required lower bound there (our own).

**Paper or page:** [A representation formula of the viscosity solution of the contact Hamilton-Jacobi equation and its applications](https://arxiv.org/abs/2101.00446). It says: “If Fₙ is an increasing sequence, then Γ-limₙ→∞ Fₙ = limₙ→∞ sc⁻ Fₙ = supₙ∈ℕ sc⁻ Fₙ.”

**Sources:** none listed. No primary source with a working link was found.

### Mosco convergence preserves nearest points

**Remember:** Weak limits stay feasible, and strong approximations recover every target.

*Makes the theorem clean to state or prove.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation), 49J53. arXiv math.AP, math.OC. Level 3: graduate.

**Definition.** Closed convex sets Cₙ in a Hilbert space converge to C in the sense of Mosco if two tests hold. Whenever nₖ increases and xₖ ∈ Cₙₖ converges weakly, its limit belongs to C. For every x ∈ C there exist xₙ ∈ Cₙ converging to x in norm.

**Problem.** For nonempty closed convex sets in a Hilbert space, Mosco convergence makes the nearest point to any fixed x converge in norm.

**How the definition helps.** Norm approximation of the nearest point in C bounds the upper limit of the projection distances (our own). The projections are bounded, and every subsequence has a weakly convergent subsequence with limit in C (our own). Weak lower semicontinuity of distance and uniqueness identify every such limit as the nearest point and give convergence of distances (our own). Weak convergence and convergence of the norms of the displacements give norm convergence in Hilbert space (our own).

**Paper or page:** [Stability of a class of action functionals depending on convex functions](https://arxiv.org/abs/2106.10908v1). It says: “J<sup>{f<sup>h</sup>}\_\\tau</sup> x \\rightarrow J<sup>f\_\\tau</sup> x.”

**Sources:**

- [Umberto Mosco, Convergence of convex sets and of solutions of variational inequalities (1969)](https://doi.org/10.1016/0001-8708(69)90009-7)

### Polyconvexity implies quasiconvexity by averaging

**Remember:** Average the minors first, then use convexity.

*True by definition.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.OC. Level 3: graduate.

**Definition.** A minor is the determinant of a square submatrix. A matrix function is polyconvex if it is a convex function of the list of all its minors. Quasiconvexity means that adding a smooth gradient perturbation to a constant matrix cannot lower the average cost when the perturbing map has compact support.

**Problem.** Every finite polyconvex matrix function is quasiconvex in the sense used for variational integrals.

**How the definition helps.** Convexity in the minors lets Jensen’s inequality bound the average cost by the cost evaluated through their averages (our own). The essential identity says that each perturbed minor averages to the corresponding minor of the constant matrix (our own). Integration by parts proves this identity because the perturbing map vanishes near the boundary (our own).

**Paper or page:** [On the local everywhere Hölder continuity for weak solutions of a class of not convex vectorial problems of the Calculus of Variations](https://arxiv.org/abs/2302.02387v1). It says: “f convex ⇒ f polyconvex ⇒ f quasiconvex ⇒ f rank one convex.”

**Sources:** none listed. No primary source with a working link was found.

### Young measures give a minimizer when no function attains the infimum

**Remember:** When derivatives oscillate, keep the whole distribution of values, not one value.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation), 28A33. arXiv math.OC, math.AP. Level 3: graduate.

**Definition.** A uniformly bounded sequence of real functions fₙ on \[0,1\] generates a Young measure if a measurable family of probability measures νₓ describes its oscillations. Precisely, for every continuous F on ℝ, F(fₙ) converges weak-\* in L∞ to x ↦ ∫F(t) dνₓ(t) (our own).

**Problem.** For absolutely continuous u on \[0,1\] with zero endpoints, the Bolza energy integrates (u′² − 1)² + u². Its infimum is zero and no admissible function attains it. The relaxed problem attains zero at u = 0 with derivative distribution ½δ₋₁ + ½δ₁ everywhere (our own).

**How the definition helps.** Equal-time zigzags with slopes ±1 and shrinking periods approach zero uniformly and generate the stated distribution (our own). The averaged derivative cost vanishes because both slopes have zero cost. Ordinary attainment would require both u = 0 everywhere and \|u′\| = 1 almost everywhere (our own).

**Wikipedia:** [Young measure](https://en.wikipedia.org/wiki/Young_measure). It says: “This captures the essential features of all minimizing sequences to this problem, namely, their derivatives u′ₖ(x) will tend to concentrate along the minima {−1, 1} of the integrand”

**Sources:**

- [L. C. Young, Generalized surfaces in the calculus of variations, Annals of Mathematics 43 (1942) 84ff.](https://doi.org/10.2307/1968882)

### Equality in Fenchel’s inequality makes subgradient inversion transparent

**Remember:** Equality means the point attains the supremum defining the conjugate.

*True by definition.* MSC 49J52 (Nonsmooth analysis), 52A41. arXiv math.OC. Level 3: graduate.

**Definition.** Let f be a proper closed convex function on ℝⁿ. Its conjugate f⁎(p) is the supremum of ⟨p,z⟩ − f(z) over all z ∈ ℝⁿ. A subgradient at a point x of finite cost is a vector p satisfying f(z) ≥ f(x) + ⟨p,z − x⟩ for every z.

**Problem.** A vector p is a subgradient of f at x exactly when x is a subgradient of f⁎ at p.

**How the definition helps.** The support inequality says exactly that x attains the supremum for f⁎(p), or equivalently f(x) + f⁎(p) = ⟨p,x⟩ (our own). The biconjugate theorem gives f⁎⁎ = f, so applying the same test to f⁎ exchanges x and p (our own).

**Wikipedia:** [Convex conjugate](https://en.wikipedia.org/wiki/Convex_conjugate). It says: “Furthermore, the equality holds only when p ∈ ∂f(x), where ∂f(x) is the subgradient.”

**Sources:** none listed. No primary source with a working link was found.

### For weakly convex functions, a steep enough Moreau envelope is continuously differentiable

**Remember:** Use a quadratic steeper than the function's worst downward bend.

*Makes the theorem clean to state or prove.* MSC 49J52 (Nonsmooth analysis), 90C26. arXiv math.OC. Level 3: graduate.

**Definition.** For m ≥ 0, a function f on ℝⁿ is m-weakly convex if x ↦ f(x) + m‖x‖²/2 is convex. For ρ &gt; 0 its Moreau envelope at x is the infimum over y of f(y) + ρ‖y − x‖²/2.

**Problem.** Let f be proper, closed and m-weakly convex on ℝⁿ, with ρ &gt; m. For every x the envelope has a unique minimizer y, and the envelope is continuously differentiable with gradient ρ(x − y).

**How the definition helps.** The inner cost is proper, closed and strongly convex, so it has a unique minimizer for every x (our own). The Moreau envelope differentiability theorem gives the stated gradient and its continuity.

**Paper or page:** [A Proximal Descent Method for Minimizing Weakly Convex Optimization](https://arxiv.org/abs/2509.02804v1). It says: “the Moreau envelope fᵨ is continuously differentiable with gradient given by ∇fᵨ(x) = ρ(x − x̂),”

**Sources:**

- [Feng-Yi Liao, Yang Zheng, A Proximal Descent Method for Minimizing Weakly Convex Optimization, arXiv:2509.02804v1 (2025)](https://arxiv.org/abs/2509.02804v1)
- [J. J. Moreau, Proximité et dualité dans un espace hilbertien, Bulletin de la Société Mathématique de France (1965)](https://doi.org/10.24033/bsmf.1625)

### Moving difference quotients detect stationarity

**Remember:** Moving the base point lets the direction test see both sides.

*Rules out counterexamples.* MSC 49J52 (Nonsmooth analysis). arXiv math.OC. Level 3: graduate.

**Definition.** For locally Lipschitz f on ℝⁿ, set f°(x,v) = limsup (f(y+hv) − f(y))/h as y → x and h ↓ 0. This is the Clarke directional derivative. A Clarke subgradient at x is a vector p satisfying ⟨p,v⟩ ≤ f°(x,v) for every v.

**Problem.** Suppose a function on Euclidean space is locally Lipschitz, so nearby changes in value are bounded by a constant times distance. At each local minimum, zero is a Clarke subgradient even when a fixed-base directional derivative fails to exist.

**How the definition helps.** Using y = x at a local minimum gives nonnegative forward quotients for all sufficiently small steps in each direction (our own). Hence zero satisfies every subgradient inequality (our own). Set f(0) = 0 and f(x) = \|x\|(2 + sin(log \|x\|)) elsewhere (our own). Its bounded derivatives on each side give local Lipschitz continuity, but its right quotient oscillates at zero (our own).

**Wikipedia:** [Clarke generalized derivative](https://en.wikipedia.org/wiki/Clarke_generalized_derivative). It says: “f°(x, v) = limsup\[y → x, h ↓ 0\] (f(y + hv) − f(y))/h,”

**Sources:**

- [Frank H. Clarke, Generalized gradients and applications (1975)](https://doi.org/10.1090/s0002-9947-1975-0367131-6)

### On complete spaces every finite lower semicontinuous convex function has subgradients

**Remember:** A complete space leaves no room for the missing support.

*Rules out counterexamples.* MSC 49J52 (Nonsmooth analysis), 52A41. arXiv math.OC, math.FA. Level 3: graduate.

**Definition.** A Banach space is a normed vector space in which every Cauchy sequence converges to a point of the space.

**Problem.** A finite, lower semicontinuous convex function on a Banach space has a subgradient at every point. The claim fails on an incomplete normed space.

**How the definition helps.** Completeness lets the Baire category theorem show that some sublevel set has interior, so the function is bounded on a ball (our own explanation). Convexity then makes the function continuous everywhere, and the Hahn–Banach theorem gives a subgradient. The paper builds a function on the space of finitely supported sequences that is nowhere continuous and has an empty subdifferential at every point. The abstract calls it a universal counterexample to statements in convex analysis that need completeness.

**Paper or page:** [A convex, finite and lower semicontinuous function with empty subdifferential](https://arxiv.org/abs/2409.18650v1). It says: “We give an example of a convex, finite and lower semicontinuous function whose subdifferential is everywhere empty. This is possible since the function is defined on an incomplete normed space.”

**Sources:**

- [Gerd Wachsmuth, A convex, finite and lower semicontinuous function with empty subdifferential, arXiv:2409.18650v1 (2024)](https://arxiv.org/abs/2409.18650v1)

### Proximal maps bound separation

**Remember:** Two subgradient inequalities keep proximal outputs from moving too far.

*True by definition.* MSC 49J52 (Nonsmooth analysis). arXiv math.OC. Level 3: graduate.

**Definition.** A proximal step at x minimizes f(p) + ‖p − x‖²/2 over p. Equivalently, it returns the p for which x − p is a subgradient of f at p. A subgradient is the slope of an affine lower bound that touches f.

**Problem.** Let f be convex on Euclidean space, finite somewhere, never −∞, and have closed sublevel sets. Its proximal map P satisfies ‖P(x) − P(y)‖² ≤ ⟨P(x) − P(y), x − y⟩.

**How the definition helps.** Writing each input as its output plus a subgradient gives two supporting inequalities. In our own proof, adding them gives ⟨(x − p) − (y − q), p − q⟩ ≥ 0 for outputs p and q. Rearranging gives the bound. The quadratic minimum gives this alternative description through its optimality condition.

**Paper or page:** [Optimization with First Order Algorithms](https://arxiv.org/abs/2410.19506v1). It says: “In particular, these two operators are nonexpansive (1-Lipschitz).”

**Sources:** none listed. No primary source with a working link was found.

### Relative interiors let normals add

**Remember:** Require the sets to overlap from the inside before adding normals.

*Rules out counterexamples.* MSC 49J53 (Set-valued and variational analysis), 49J52. arXiv math.OC. Level 3: graduate.

**Definition.** The relative interior of a convex set is its interior within its affine hull. At x ∈ C, the normal cone of C consists of all vectors p satisfying ⟨p,y − x⟩ ≤ 0 for every y ∈ C.

**Problem.** Suppose the relative interiors of two convex sets in Euclidean space meet. At every shared point, the normal cone of the intersection equals the sum of their normal cones.

**How the definition helps.** Intersecting relative interiors permit the convex subgradient sum rule (our own). The indicator costs, zero inside each set and infinite outside, add to the indicator of the intersection (our own). Their subgradients are exactly the normal vectors, so the sum rule gives the formula (our own). Two externally tangent disks have opposite normal rays summing to a line, but their singleton intersection has every normal (our own).

**Paper or page:** [Approximate optimality conditions and sensitivity analysis in nearly convex optimization](https://arxiv.org/abs/2410.04710v1). It says: “If ri Ω₁ ∩ ri Ω₂ ≠ ∅, then for each x̄ ∈ Ω₁ ∩ Ω₂”

**Sources:**

- [Approximate optimality conditions and sensitivity analysis in nearly convex optimization](https://arxiv.org/abs/2410.04710v1)

### Controllability rules out abnormal multipliers

**Remember:** Controllability forces an abnormal multiplier vector to vanish.

*Rules out counterexamples.* MSC 49K15 (Optimality conditions for problems involving ordinary differential equations). arXiv math.OC. Level 3: graduate.

**Definition.** In the maximum principle, a multiplier consists of a time-dependent vector and a scalar multiplying the cost. An abnormal multiplier has zero cost scalar. For x′ = Ax + Bu with constant matrices, controllability means the columns of B, AB, …, Aⁿ⁻¹B span the n-dimensional state space.

**Problem.** Minimize a smooth running cost with these linear dynamics, fixed endpoints, an open action set and no state constraints. If the system is controllable, it admits no abnormal multiplier. This fixed-endpoint version is our own.

**How the definition helps.** Controllability forces an abnormal adjoint p to vanish (our own). With zero cost multiplier, stationarity gives pᵀB = 0 almost everywhere, hence everywhere by continuity, and the adjoint satisfies p′ = −Aᵀp (our own). Differentiation gives pᵀAʲB = 0 for j = 0,…,n−1 (our own). These columns span the state space, contradicting the maximum principle’s nonzero multiplier requirement (our own).

**Paper or page:** [Hidden regularity in singular optimal control of port-Hamiltonian systems](https://arxiv.org/abs/2305.03790). It says: “then the scalar multiplier in \\eqref{eq:the<sub>optimality</sub><sub>condition</sub>} satisfies λ₀ ≠ 0.”

**Sources:** none listed. No primary source with a working link was found.

### A backward adjoint gives sensitivity

**Remember:** Run one linear equation backward to read the initial gradient.

*True by definition.* MSC 49K40 (Sensitivity, stability, well-posedness), 49K15. arXiv math.OC. Level 3: graduate.

**Definition.** Along a solution of x′ = f(x), define an adjoint p by p′ = −Df(x)ᵀp. Give it the terminal value ∇C(x(T)), where C is the terminal cost.

**Problem.** If f and C are continuously differentiable, the gradient of the terminal cost with respect to the initial state is p(0). Assume the solution exists on the full interval for initial states nearby.

**How the definition helps.** The backward equation preserves the inner product with each first-order change of state, replacing a separate forward calculation for each input direction. In our own calculation, the product rule cancels the two terms in the derivative of this inner product. Its terminal value gives the cost change, so its initial value gives the same change. Differentiating the original flow with respect to its initial state supplies the forward equation used here.

**Paper or page:** [Optimal Potential Shaping on SE(3) via Neural ODEs on Lie Groups](https://arxiv.org/abs/2401.15107v2). It says: “\\text{d} (C\\circ \\Psi \_f<sup>T</sup>) = \\lambda (0)\\, ,”

**Sources:**

- [Optimal Potential Shaping on SE(3) via Neural ODEs on Lie Groups](https://arxiv.org/abs/2401.15107v2)

### Moving contacts preserve viscosity subsolutions

**Remember:** Let the test contact move along with the solution.

*Makes the theorem clean to state or prove.* MSC 49L25 (Viscosity solutions to Hamilton-Jacobi equations in optimal control and differential games), 35D40. arXiv math.AP, math.OC. Level 3: graduate.

**Definition.** The upper half-relaxed limit at x takes the upper limit of sequence values as the index tends to infinity and the evaluation point approaches x. A viscosity subsolution is upper semicontinuous, meaning its value dominates all nearby limiting values. Whenever a smooth test function touches it from above, the test gradient must satisfy the equation with equality replaced by ≤.

**Problem.** Consider a fixed continuous first-order equation H(x,∇u) = 0 on an open Euclidean set. If a sequence of viscosity subsolutions is uniformly bounded on each compact subset, its upper half-relaxed limit is a viscosity subsolution.

**How the definition helps.** The joint limit lets contact points move while preserving the test inequality (our own). Make the contact strict with a centered quadratic, then choose a subsequence and points realizing the upper limit (our own). On a small closed ball, maximizers of the subsequence minus the test must approach that strict contact (our own). Eventually these maximizers are interior, so the test inequalities pass to the limit by continuity of H (our own).

**Wikipedia:** [Viscosity solution](https://en.wikipedia.org/wiki/Viscosity_solution). It says: “More generally, the notions of viscosity sub- and supersolution are also conserved by half-relaxed limits.”

**Paper or page:** [Convergence Guarantees for Neural Network-Based Hamilton-Jacobi Reachability](https://arxiv.org/abs/2410.02904v1). It says: “is a viscosity subsolution to the equation”

**Sources:**

- [Michael Crandall, Hitoshi Ishii and Pierre-Louis Lions, User’s guide to viscosity solutions of second order partial differential equations (1992)](https://doi.org/10.1090/s0273-0979-1992-00266-5)

### Quadratic envelopes bound upward curvature

**Remember:** Take away the common quadratic and the remaining infimum is concave.

*True by definition. Confidence: medium.* MSC 49L25 (Viscosity solutions to Hamilton-Jacobi equations in optimal control and differential games), 49J45. arXiv math.AP, math.OC. Level 3: graduate.

**Definition.** For a bounded Lipschitz function g on Euclidean space, define u(t,x) for t &gt; 0 by minimizing g(y) + ‖x − y‖²/(2t) over y. This quadratic envelope represents the solution of ∂u/∂t + ‖∇u‖²/2 = 0 with initial value g.

**Problem.** For t &gt; 0, the function x ↦ u(t,x) − ‖x‖²/(2t) is concave, even if g is not.

**How the definition helps.** The formula gives each competitor the same quadratic term in x. In our own proof, subtract that term and take the infimum of the remaining affine functions. The work moves to proving that the envelope gives the viscosity solution, which interprets the equation by using smooth touching tests.

**Wikipedia:** [Moreau's theorem](https://en.wikipedia.org/wiki/Moreau%27s_theorem). It says: “φ₍α₎(x) = inf\[y ∈ H\] 1/(2α) ‖y − x‖² + φ(y).”

**Paper or page:** [Note on the q-Logarithmic Sobolev and p-Talagrand Inequalities on Carnot Groups](https://arxiv.org/abs/2105.04928v1). It says: “is given by the Hopf-Lax formula”

**Sources:** none listed. No primary source with a working link was found.

### Linear penalties enforce exact feasibility

**Remember:** A penalty steeper than the multiplier makes every violation too expensive.

*Rules out counterexamples. Confidence: medium.* MSC 49N15 (Duality theory (optimization)), 49M37. arXiv math.OC. Level 3: graduate.

**Definition.** To penalize g(x) ≤ 0, add ρ max(0, g(x)) to the objective. A quadratic penalty instead adds ρ max(0, g(x))².

**Problem.** Suppose f attains its constrained minimum m and some λ ≥ 0 satisfies infₓ(f(x) + λg(x)) = m. For every ρ &gt; λ, the penalized and constrained objectives have exactly the same minimizers.

**How the definition helps.** At every infeasible point the linear penalty strictly exceeds λg(x), so the penalized value exceeds m (our own). At feasible points the penalty vanishes, giving exactly the original minimizers (our own). For example, minimizing −x subject to x ≤ 0 gives a quadratic penalty with infeasible minimizer 1/(2ρ) for every ρ &gt; 0 (our own).

**Wikipedia:** [Penalty method](https://en.wikipedia.org/wiki/Penalty_method). It says: “Common penalty functions in constrained optimization are the quadratic penalty function and the deadzone-linear penalty function.”

**Sources:** none listed. No primary source with a working link was found.

### Perturbation duality gives weak duality through affine lower bounds

**Remember:** The best affine lower bound cannot exceed the value at zero.

*True by definition.* MSC 49N15 (Duality theory (optimization)), 90C46, 90C25. arXiv math.OC. Level 3: graduate.

**Definition.** For an objective f on ℝⁿ, choose a perturbation F(x,y) with y ∈ ℝᵏ and F(x,0) = f(x). Set v(y) = infₓ F(x,y). The perturbation dual value is the supremum of a(0) over all affine functions a satisfying a(y) ≤ v(y) for every y.

**Problem.** The perturbation dual value never exceeds the primal value v(0). The two are equal when v is convex, never −∞, finite at zero and lower semicontinuous at zero.

**How the definition helps.** Each affine lower bound lies below v at zero, giving weak duality. For equality, the finite-dimensional biconjugate theorem identifies the supremum of affine lower bounds with the closed convex envelope (our own). For convex v, lower semicontinuity at zero and finiteness there ensure that closing its epigraph preserves its value there (our own).

**Wikipedia:** [Perturbation function](https://en.wikipedia.org/wiki/Perturbation_function). It says: “For any choice of perturbation function F weak duality holds.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970)](https://doi.org/10.1515/9781400873173)

### Beliefs restore the Markov property

**Remember:** Keep what the history says about the current state.

*Makes the theorem clean to state or prove.* MSC 49N30 (Problems with incomplete information (optimization)), 93C41. arXiv math.OC, cs.SY. Level 3: graduate.

**Definition.** Use the conditional probability of each hidden state given all past actions and observations as the new state. This probability vector, called the belief, replaces the full history.

**Problem.** Consider a finite-horizon partially observed Markov decision process with finite state, action and observation sets and bounded additive Markov rewards. An optimal rule uses only the current belief and time. Its value follows by maximizing expected current reward plus expected future value at each step.

**How the definition helps.** The belief gives the current expected reward and the probability of each next observation (our own). Bayes’ rule then gives the next belief using only the current belief, action and observation (our own). The work is proving this update and applying backward induction on the resulting decision process (our own).

**Wikipedia:** [Partially observable Markov decision process](https://en.wikipedia.org/wiki/Partially_observable_Markov_decision_process). It says: “A Markovian belief state allows a POMDP to be formulated as a Markov decision process where every belief is a state.”

**Sources:**

- [R. D. Smallwood and E. J. Sondik, The Optimal Control of Partially Observable Markov Processes over a Finite Horizon (1973)](https://doi.org/10.1287/opre.21.5.1071)

### De Giorgi’s divergence definition of perimeter makes it lower semicontinuous

**Remember:** A supremum of continuous tests is lower semicontinuous.

*True by definition.* MSC 49Q20 (Variational problems in a geometric measure-theoretic setting), 26B30. arXiv math.AP, math.MG. Level 3: graduate.

**Definition.** Define the perimeter of a measurable set E in ℝⁿ as a supremum of integrals of div φ over E. The supremum runs over smooth compactly supported vector fields φ with \|φ\| ≤ 1. For a smooth bounded set, the older definition is the area of its boundary.

**Problem.** Let the indicator functions of measurable sets Eₖ converge in L¹ to that of E. Then the perimeter of E is at most the lower limit of the perimeters of Eₖ.

**How the definition helps.** Each test integral is continuous under L¹ convergence, and a supremum of continuous functions is lower semicontinuous. With boundary area, the perimeter of a rough limit set is not even defined (our own comparison). The work moves to showing that the new definition gives boundary area for smooth sets. This uses the divergence theorem and fields that approximate the outward normal (our own).

**Wikipedia:** [Bounded variation](https://en.wikipedia.org/wiki/Bounded_variation). It says: “which is exactly the definition of lower semicontinuity.”

**Sources:** none listed. No primary source with a working link was found.

### Higher moments give Wasserstein compactness

**Remember:** A higher moment prevents distant mass from carrying lasting transport cost.

*Rules out counterexamples.* MSC 49Q22 (Optimal transportation). arXiv math.OC. Level 3: graduate.

**Definition.** For two probability measures, consider joint distributions having those measures as coordinate distributions. The p-Wasserstein distance takes the least mean pth power of travel distance and then takes its pth root. A moment of order q is the mean qth power of distance from the origin.

**Problem.** For 1 ≤ p &lt; q, probability measures on Euclidean space with qth moment at most K form a compact set in p-Wasserstein distance.

**How the definition helps.** The qth moment bound gives mass at most K/Rᵠ outside radius R, hence tightness and a weakly convergent subsequence by Prokhorov’s theorem (our own). Lower semicontinuity preserves the qth moment bound in the limit (our own). Outside radius R, the pth moment is at most K·Rᵖ⁻ᵠ, giving moment convergence and therefore p-Wasserstein convergence (our own). Mass n⁻ᵖ at n and the rest at zero gives bounded pth moments but loses the entire moment in the weak limit (our own).

**Paper or page:** [Viscosity Solutions of Fully second-order HJB Equations in the Wasserstein Space](https://arxiv.org/abs/2501.01612). It says: “Let K &gt; 0 and p₂ &gt; p₁ ≥ 1.”

**Sources:** none listed. No primary source with a working link was found.

### Kantorovich–Rubinstein duality makes Wasserstein distance W₁ jointly convex

**Remember:** Each test is linear in the laws, so their supremum is convex.

*True by definition.* MSC 49Q22 (Optimal transportation), 60B10. arXiv math.PR, math.FA. Level 3: graduate.

**Definition.** Let μ and ν have finite first moments on a complete separable metric space. Their distance W₁ is the infimum of E\[d(X,Y)\] over jointly sampled X and Y with laws μ and ν. Its dual formula takes the supremum of ∫f dμ − ∫f dν over all real functions with Lipschitz constant at most one.

**Problem.** Mix two pairs of probability measures with the same weight in each coordinate. The W₁ distance of the mixed pair is at most the weighted average of the two original distances.

**How the definition helps.** The dual definition makes joint convexity a supremum rule (our own). Each difference of averages is linear in the pair of laws, and a supremum of linear functions is convex (our own). The coupling proof instead mixes couplings chosen to have costs close to the two original distances (our own). The work shifts to Kantorovich–Rubinstein duality, the theorem that the supremum equals the coupling cost (our own).

**Wikipedia:** [Wasserstein metric](https://en.wikipedia.org/wiki/Wasserstein_metric). It says: “This form shows that W₁ is an integral probability metric.”

**Sources:**

- [Cédric Villani, Optimal Transport: Old and New, Springer (2009), Theorem 5.10](https://doi.org/10.1007/978-3-540-71050-9)

### Lipschitz maps bound the first Wasserstein distance

**Remember:** Move both ends of each transport pair and keep its weight.

*True by definition.* MSC 49Q22 (Optimal transportation). arXiv math.OC. Level 3: graduate.

**Definition.** The first Wasserstein distance is the least mean travel distance over joint distributions with the two given coordinate distributions. A pushforward assigns each measurable target set the mass of its inverse image.

**Problem.** Consider two Euclidean probability measures with finite mean distance from the origin. A map that stretches distances by at most L stretches their first Wasserstein distance by at most L.

**How the definition helps.** Applying the map to both coordinates gives a joint distribution of the pushforwards and multiplies its mean travel distance by at most L. In our own proof, taking the infimum gives the claim. Alternatively, one can define the distance as the supremum of mean differences over functions that stretch distances by at most one. The Kantorovich–Rubinstein theorem proves that these two definitions agree.

**Paper or page:** [On the Use of the Kantorovich-Rubinstein Distance for Dimensionality Reduction](https://arxiv.org/abs/2309.09442). It says: “W\_\\mathcal{Y}(\\varphi(\\mu<sub>1</sub>),\\varphi(\\mu<sub>2</sub>)) \\leq k\\, W\_\\mathcal{X}(\\mu<sub>1</sub>,\\mu<sub>2</sub>).”

**Sources:** none listed. No primary source with a working link was found.

### The dual definition of Wasserstein distance gives its triangle inequality

**Remember:** Each difference of averages satisfies the triangle bound before taking the supremum.

*True by definition.* MSC 49Q22 (Optimal transportation), 60B10. arXiv math.PR, math.FA. Level 3: graduate.

**Definition.** The Wasserstein distance W₁ is the infimum of the expected distance between two jointly sampled points with the given laws. On a complete separable metric space, the dual definition takes the supremum of differences between the two averages of a 1-Lipschitz function. Such a function changes by at most the distance between its inputs.

**Problem.** For any three probability measures with finite first moments on a complete separable metric space, W₁(p, r) ≤ W₁(p, q) + W₁(q, r).

**How the definition helps.** The dual definition splits each difference of averages at the middle measure, so the triangle inequality follows before taking the supremum (our own explanation). The joint-law proof instead combines two joint laws into a law on triples (our own comparison). The equivalence of the two definitions is the Kantorovich–Rubinstein duality theorem.

**nLab:** [Kantorovich monad](https://ncatlab.org/nlab/show/Kantorovich+monad), [transport plan](https://ncatlab.org/nlab/show/transport+plan). It says: “where the supremum (which is usually not attained) is taken over the set of 1-Lipschitz functions”

**Wikipedia:** [Wasserstein metric](https://en.wikipedia.org/wiki/Wasserstein_metric). It says: “Kantorovich and Rubinstein proved a duality representation theorem for general cost functions”

**Sources:**

- [P. Clement and W. Desch, An elementary proof of the triangle inequality for the Wasserstein metric, Proceedings of the AMS 136 (2008)](https://doi.org/10.1090/S0002-9939-07-09020-X)

### The dual definition of W₁ makes common mass cancel exactly

**Remember:** Adding the same mass to both measures cancels in every test.

*True by definition.* MSC 49Q22 (Optimal transportation), 60B10. arXiv math.PR, math.MG. Level 3: graduate.

**Definition.** Define the Wasserstein distance W₁ as the supremum of ∫f dμ − ∫f dν over functions f with Lipschitz constant at most one. The usual definition is the least mean distance travelled over couplings, joint laws with marginals μ and ν.

**Problem.** Take probability measures μ, ν and ρ with finite first moments on a complete separable metric space. For t in \[0,1\], W₁(tμ + (1−t)ρ, tν + (1−t)ρ) = t·W₁(μ,ν).

**How the definition helps.** The ρ terms cancel in every test integral, and t factors out of the supremum (our own argument). With couplings, the upper bound is easy but the lower bound is not, since an optimal coupling may mix the masses (our own comparison). The work moves to Kantorovich–Rubinstein duality, which shows that the two definitions agree.

**Wikipedia:** [Wasserstein metric](https://en.wikipedia.org/wiki/Wasserstein_metric). It says: “Kantorovich and Rubinstein proved a duality representation theorem for general cost functions”

**Sources:** none listed. No primary source with a working link was found.

### Tight transport pairs certify optimality

**Remember:** Move mass only where the two potentials add to the cost.

*True by definition. Confidence: medium.* MSC 49Q22 (Optimal transportation), 49N15. arXiv math.OC. Level 3: graduate.

**Definition.** On finite nonempty source and target sets, let c(x,y) be the real cost of each pair and a(x) a real source potential. Its cost transform is b(y) = minₓ(c(x,y) − a(x)). A pair is tight if a(x) + b(y) = c(x,y).

**Problem.** A transport plan distributes nonnegative mass over pairs, with prescribed source and target totals. A plan supported on tight pairs has minimum cost among all plans with those totals.

**How the definition helps.** The minimum formula constructs a lower bound on the cost of every plan from just one source function. In our own finite proof, sum the pair inequalities after weighting them by the mass transported. The lower bound depends only on the prescribed totals, and tight pairs attain it. Finite linear programming duality gives the converse, producing a certificate for each optimal plan.

**Paper or page:** [Optimal transport and regularity of weak Kantorovich potentials on a globally hyperbolic spacetime](https://arxiv.org/abs/2412.01012v2). It says: “If $\\varphi $ is any Kantorovich potential, then it holds that $\\varphi <sup>c</sup>(y)-\\varphi (x)=c(x,y)$ $\\pi $-a.e.”

**Sources:** none listed. No primary source with a working link was found.

### Transport plans are optimal exactly when no cyclic reassignment lowers cost

**Remember:** An optimal shipment has no cheaper cycle of reassignments.

*Makes the theorem clean to state or prove.* MSC 49Q22 (Optimal transportation). arXiv math.OC. Level 3: graduate.

**Definition.** A transport plan from μ to ν is a probability measure on pairs whose two marginals are μ and ν. A set of pairs is c-cyclically monotone if no cyclic shift of destinations lowers total cost. This must hold for every finite list of its pairs.

**Problem.** Let X and Y be Polish spaces, which are complete separable metric spaces. Let the cost c take values in \[0,∞\] and be continuous. A transport plan of finite cost is optimal exactly when it is concentrated on a c-cyclically monotone set.

**How the definition helps.** Cyclical monotonicity expresses optimality through finite lists of pairs in one set carrying the plan. A cheaper cycle in the support would allow a cost-reducing reassignment by continuity (our own). Pratelli’s Theorem B supplies the converse for continuous costs, including infinite costs.

**Paper or page:** [60 years of cyclic monotonicity: a survey](https://arxiv.org/abs/2308.07682v2). It says: “a finite transport plan γ ∈ Π(μ,ν) is optimal if and only if it is concentrated on a c-cyclically monotone set.”

**Sources:**

- [L. De Pascale, A. Kausamo, K. Wyczesany, 60 years of cyclic monotonicity: a survey, arXiv:2308.07682v2 (2023)](https://arxiv.org/abs/2308.07682v2)
- [Aldo Pratelli, On the sufficiency of c-cyclical monotonicity for optimality of transport plans, Mathematische Zeitschrift (2008)](https://doi.org/10.1007/s00209-007-0191-7)

### Distance inequalities compare gradient flows

**Remember:** Compare two flows in both directions and their energy terms cancel.

*True by definition.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.AP, math.OC. Level 4: research.

**Definition.** A locally absolutely continuous metric-space path x solves the evolution variational inequality for F and λ if it satisfies this test. For every point y, set D(t) = d(x(t),y)². Then D′(t)/2 + λD(t)/2 ≤ F(y) − F(x(t)) must hold for almost every t &gt; 0.

**Problem.** Let F be finite and lower semicontinuous, and let x and z be solutions continuous at their initial points. For every t ≥ 0 they satisfy d(x(t),z(t)) ≤ exp(−λt)d(x(0),z(0)).

**How the definition helps.** Each path supplies the comparison point for the other, giving opposite energy differences (our own). The standard doubling-of-variables argument first varies the two times independently and then restricts them to equal times (our own). The energies cancel, leaving D′ ≤ −2λD for D(t) = d(x(t),z(t))² (our own). Integration and continuity at time zero give the bound (our own).

**Paper or page:** [Stability of a class of action functionals depending on convex functions](https://arxiv.org/abs/2106.10908v1). It says: “{\\mathsf{d}}(G<sub>t</sub><sup>f</sup> x<sub>0</sub>,G<sub>t</sub><sup>f</sup> x<sub>1</sub>)\\le e<sup>-\\lambda t</sup>{\\mathsf{d}}(x<sub>0</sub>,x<sub>1</sub>)\\quad \\text{for every $t\\in \[0,+\\infty )$}.”

**Sources:** none listed. No primary source with a working link was found.

### A convex minimizer is unique exactly when a radial-cone kernel test passes

**Remember:** Look for a real segment of equally good solutions, not just a limiting direction.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49J53 (Set-valued and variational analysis), 90C25, 90C46. arXiv math.OC. Level 4: research.

**Definition.** Let C be a convex set and x a point of C. The radial cone of C at x is the set of all t(c − x) with c in C and t ≥ 0. Unlike the tangent cone, it does not add limits of these directions.

**Problem.** Minimize f(Φx) + g(x) in Euclidean space with linear Φ, smooth strictly convex f and proper closed convex g. At a finite optimum x̄ put ȳ = −Φ\*∇f(Φx̄). The optimum is unique exactly when ker Φ meets the radial cone of ∂g\*(ȳ) at x̄ only in zero.

**How the definition helps.** A nonzero radial direction reaches a second point after a positive step (our own). Strict convexity makes Φx identical at all optima, and optimality puts each in ∂g\*(ȳ) (our own). Conversely, every point of ∂g\*(ȳ) shares the supporting slope ȳ, so g changes there by its pairing with the displacement (our own). This pairing vanishes on ker Φ, making each such move another optimum (our own).

**Paper or page:** [Solution uniqueness of convex optimization problems via the radial cone](https://arxiv.org/abs/2401.10346v1), [Solution uniqueness of convex optimization problems via the radial cone](https://arxiv.org/abs/2401.10346v1). It says: “Our characterizations of solution uniqueness are in terms of the radial cone.”

**Sources:**

- [Jalal Fadili, Tran T. A. Nghia, Duy Nhat Phan, Solution uniqueness of convex optimization problems via the radial cone, arXiv:2401.10346v1 (2024)](https://arxiv.org/abs/2401.10346v1)
- [Jalal Fadili, Tran T. A. Nghia, Duy Nhat Phan, Solution Uniqueness of Convex Optimization Problems via the Radial Cone, Journal of Optimization Theory and Applications (2025)](https://doi.org/10.1007/s10957-025-02723-3)

### Accumulated reward makes laws recursive

**Remember:** Carry the running total as part of the state.

*Makes the theorem clean to state or prove.* MSC 49L20 (Dynamic programming in optimal control and differential games), 93E20. arXiv math.OC, cs.SY. Level 4: research.

**Definition.** Track both the current state and the total reward earned so far. Use their joint probability distribution as the state of a new decision process.

**Problem.** Consider the paper’s finite-horizon decision process with finitely many states and a compact set of actions. For every original rule, successive updates of this distribution reproduce the joint distribution of final state and total reward.

**How the definition helps.** Condition the original rule’s action on the current state and running total to obtain a randomized rule on that pair (our own). Start with the original state law and running total zero. The conditioned rule reproduces the original one-step joint law, so induction reproduces the terminal distribution (our own).

**Paper or page:** [Yet Another Distributional Bellman Equation](https://arxiv.org/abs/2505.21098v2). It says: “For every policy σ = (σₙ) in the original MDP model, there exists an action sequence π = (πₙ) in the lifted MDP”

**Sources:**

- [Yet Another Distributional Bellman Equation](https://arxiv.org/abs/2505.21098v2)

### Randomization mixes occupation measures

**Remember:** Mix the rules before starting, and their expected visit counts mix.

*True by definition.* MSC 49N25 (Impulsive optimal control problems), 93E20. arXiv math.OC, cs.SY. Level 4: research.

**Definition.** An impulse control rule chooses when to intervene and which intervention to make. In the associated decision process, an occupation measure records the expected number of visits to each set of state and action pairs.

**Problem.** For the discounted impulse control problem in the paper, the occupation measures of randomized rules in the associated decision process form a convex set.

**How the definition helps.** Expected visit counts mix linearly when a single initial draw chooses which rule to follow (our own). Conditioning on that draw gives the required weighted average for every set of state and action pairs (our own). The work lies in representing impulse controls by decision rules and admitting the initial random choice (our own).

**Paper or page:** [Primal-dual programs for the constrained optimal impulse control: discounted model](https://arxiv.org/abs/2504.18387v1). It says: “The set of all occupation measures in the induced MDP is convex”

**Sources:**

- [Primal-dual programs for the constrained optimal impulse control: discounted model](https://arxiv.org/abs/2504.18387v1)

### Varifold stationarity survives weak limits

**Remember:** Keep tangent planes so the area variation passes to the limit.

*True by definition. Confidence: medium.* MSC 49Q15 (Geometric measure and integration theory, integral and normal currents in optimization), 58E12. arXiv math.DG, math.AP. Level 4: research.

**Definition.** A k-dimensional varifold on an open subset of ℝⁿ is a locally finite Radon measure on pairs (x,S) of locations and unoriented k-dimensional linear subspaces. It is stationary if ∫divₛ X(x) dV(x,S) = 0 for every smooth compactly supported vector field X. Here divₛ means the trace of the derivative in the directions of S.

**Problem.** A weak limit of stationary surface varifolds is stationary.

**How the definition helps.** Recording the plane makes the area variation an integral of a continuous, compactly supported test function (our own explanation). Weak convergence means convergence of all such integrals, so the limiting variation is zero. The first variation formula identifies this test with stationarity under smooth deformations.

**Paper or page:** [Weyl Law and convergence in the classical limit for min-max nonlocal minimal surfaces](https://arxiv.org/abs/2406.12162v4). It says: “the limit integral stationary varifold”

**Sources:**

- [W. K. Allard, On the First Variation of a Varifold (1972)](https://doi.org/10.2307/1970868)

### Adjacent costs split martingale transport

**Remember:** A sum of pair costs can be minimized one pair at a time.

*Makes the theorem clean to state or prove.* MSC 49Q22 (Optimal transportation). arXiv math.OC. Level 4: research.

**Definition.** A martingale transport is a joint distribution of successive values with prescribed distributions at each time. Given the past, the mean next value must equal the current value. An additive cost charges a separate amount for each consecutive pair and adds those amounts.

**Problem.** Consider finitely many distributions on the real line and continuous pair costs bounded below. Suppose each consecutive pair has a martingale transport of least finite cost. Then these pairwise optimizers can form one optimal transport over all times.

**How the definition helps.** Additivity bounds the expected cost below by the sum of the pairwise minima (our own). Starting with the first marginal, sample each next value using the corresponding optimal pair’s conditional distribution given the current value (our own). This reproduces every chosen pair and preserves the conditional mean given the full past (our own). The resulting martingale attains the bound (our own).

**nLab:** [transport plan](https://ncatlab.org/nlab/show/transport+plan). It says: “the measure r has p and q as marginals, in the sense that for all A ∈ 𝒜 and B ∈ ℬ,”

**Paper or page:** [Remarks on multi-period martingale optimal transport](https://arxiv.org/abs/2506.05505). It says: “is optimal for the multi-period MOT problem with cost”

**Sources:**

- [Remarks on multi-period martingale optimal transport](https://arxiv.org/abs/2506.05505)

### Means fix binary martingale transport

**Remember:** Two possible destinations leave no freedom once you fix the mean.

*Rules out counterexamples.* MSC 49Q22 (Optimal transportation). arXiv math.OC. Level 4: research.

**Definition.** A coupling is a joint distribution with the prescribed distributions of its two coordinates. A martingale coupling also requires the conditional mean of the destination given the source to equal the source.

**Problem.** Consider distributions on the real line for which a martingale coupling exists. If the destination takes only two values, the martingale coupling is unique.

**How the definition helps.** With destinations a &lt; b, preserving the mean forces the conditional probability of b to be (x − a)/(b − a) at source x (our own). Together with the source law this determines the coupling (our own). If both laws are uniform on {−1,1}, matching and swapping both preserve the marginals, but only matching preserves the conditional mean (our own).

**Paper or page:** [Remarks on multi-period martingale optimal transport](https://arxiv.org/abs/2506.05505). It says: “the set of martingale couplings \\Pi<sub>M</sub>(\\mu<sub>X</sub>, \\mu<sub>Y</sub>) is a singleton.”

**Sources:** none listed. No primary source with a working link was found.

### Path boundedness characterizes sets carrying transport potentials when costs can be infinite

**Remember:** Control every route between two endpoints, not just closed routes.

*Makes the theorem clean to state or prove.* MSC 49Q22 (Optimal transportation), 26B25. arXiv math.OC. Level 4: research.

**Definition.** Let G consist of finite-cost pairs for a cost c valued in (−∞,∞\]. For a finite path (x₀,y₀),…,(xₙ,yₙ) in G, sum c(xᵢ,yᵢ) − c(xᵢ₊₁,yᵢ) over i &lt; n. Call G path bounded if each ordered pair of endpoints admits a finite upper bound on every such path sum (our own).

**Problem.** For such costs, G admits a supporting potential of the paper’s class exactly when G is path bounded. Support requires φ(x) − φ(z) ≥ c(x,y) − c(z,y) for each (x,y) ∈ G and each first coordinate z. For finite costs, cyclic monotonicity implies path boundedness and recovers the Rockafellar–Rüschendorf theorem.

**How the definition helps.** A supporting potential bounds each path increment by φ(xᵢ) − φ(xᵢ₊₁), so summing telescopes (our own). The paper proves the converse by solving the resulting system of inequalities. With finite costs one return edge closes the path, so cyclic monotonicity bounds its sum by the negative return increment (our own).

**Paper or page:** [A Rockafellar-type theorem for non-traditional costs](https://arxiv.org/abs/2011.13263v4), [A Rockafellar-type theorem for non-traditional costs](https://arxiv.org/abs/2011.13263v4). It says: “We note that any set admitting a potential must be c-path-bounded, and this condition replaces c-cyclic monotonicity from the classical theory, i.e. when the cost is real-valued.”

**Sources:**

- [Shiri Artstein-Avidan, Shay Sadovsky, Katarzyna Wyczesany, A Rockafellar-type theorem for non-traditional costs, Advances in Mathematics 395 (2022)](https://arxiv.org/abs/2011.13263v4)

### Slicing carries metric properties from one dimension to every dimension

**Remember:** Average the one-dimensional costs, and the metric axioms carry over.

*True by definition.* MSC 49Q22 (Optimal transportation). arXiv cs.LG, math.OC. Level 4: research.

**Definition.** For finite positive measures on ℝᵈ, project each measure by x ↦ ⟨θ,x⟩ for every unit direction θ. The sliced unbalanced cost is the integral of the one-dimensional unbalanced cost between these projections against uniform probability on the sphere.

**Problem.** Suppose the one-dimensional unbalanced cost is non-negative, symmetric and definite. Suppose also that its pth root satisfies the triangle inequality for some p ≥ 1. Then the sliced cost on ℝᵈ has the same properties.

**How the definition helps.** Integration preserves nonnegativity and symmetry, and Minkowski’s inequality gives the triangle inequality for the pth root (our own). Zero sliced cost gives equal projected laws for almost every direction (our own). Such directions are dense, and continuity of Fourier transforms extends equality to every direction (our own). The Cramér–Wold theorem then identifies the measures (our own).

**Paper or page:** [Slicing Unbalanced Optimal Transport](https://arxiv.org/abs/2306.07176v2). It says: “Then, SUOT is respectively non-negative, symmetric and/or definite on ℳ₊(ℝᵈ) × ℳ₊(ℝᵈ).”

**Sources:**

- [Clément Bonet, Kimia Nadjahi, Thibault Séjourné, Kilian Fatras, Nicolas Courty, Slicing Unbalanced Optimal Transport, arXiv:2306.07176v2 (2025)](https://arxiv.org/abs/2306.07176v2)

### Weak optimal transport makes the Brenier–Strassen theorem a short corollary

**Remember:** Charge for the conditional mean, and Brenier–Strassen becomes one case.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49Q22 (Optimal transportation), 60B05, 52A41. arXiv math.PR, math.OC. Level 4: research.

**Definition.** For laws μ and ν, weak transport minimizes ∫C(x,πₓ) dμ(x) over joint laws π with marginals μ and ν. Here πₓ is the conditional destination law given x. The quadratic barycentric cost is C(x,πₓ) = \|x − ∫y dπₓ(y)\|².

**Problem.** Take laws μ and ν on ℝᵈ with finite second moments and the quadratic barycentric cost. For an optimal coupling, the map x ↦ mean(πₓ) is unique μ-almost everywhere, is the gradient of a convex function, and is 1-Lipschitz. This is the Brenier–Strassen theorem of Gozlan and Juillet, in our own summary.

**How the definition helps.** Once the problem is a weak transport problem, the paper's general duality theorem applies to it directly. The abstract says that the authors use this to give a concise derivation of the Brenier–Strassen theorem. The general theorem gives strong duality and describes optimizers by a complementary slackness condition, as in classical transport. Proving that general theorem for non-linear costs is the real work (our own).

**Paper or page:** [The Fundamental Theorem of Weak Optimal Transport](https://arxiv.org/abs/2501.16316v1). It says: “As applications we provide concise derivations of the Brenier–Strassen theorem, the convex Kantorovich–Rubinstein formula and the structure theorem of entropic optimal transport.”

**Sources:**

- [Mathias Beiglböck, Gudmund Pammer, Lorenz Riess, Stefan Schrott, The Fundamental Theorem of Weak Optimal Transport, arXiv:2501.16316 (2025)](https://arxiv.org/abs/2501.16316v1)
- [Nathaël Gozlan, Cyril Roberto, Paul-Marie Samson, Prasad Tetali, Kantorovich duality for general transport costs and applications, Journal of Functional Analysis (2017)](https://doi.org/10.1016/j.jfa.2017.08.015)
- [Nathaël Gozlan, Nicolas Juillet, On a mixture of Brenier and Strassen theorems, Proceedings of the London Mathematical Society (2020)](https://doi.org/10.1112/plms.12302)

### The Helmholtz operator decides which equations come from a Lagrangian

**Remember:** An equation comes from a Lagrangian exactly when the next operator kills it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49S05 (Variational principles of physics), 58A20, 58E30. arXiv math.DG, math-ph. Level 4: research.

**Definition.** The Euler–Lagrange complex continues the horizontal differential on forms depending on fields and their derivatives. Its next maps send Lagrangians to Euler–Lagrange source forms and source forms to their Helmholtz obstructions. Exactness at source forms means the kernel of the second map equals the image of the first.

**Problem.** Consider a system represented by a source form on a trivial vector bundle over Minkowski spacetime. It comes from a Lagrangian exactly when the Helmholtz operator annihilates that form. This characterizes the inverse problem of the calculus of variations.

**How the definition helps.** Exactness at source forms identifies those with zero Helmholtz obstruction as precisely the Euler–Lagrange forms. Anderson’s exactness theorem for the variational bicomplex supplies this property on the stated bundle. The connection to the inverse problem is our own.

**nLab:** [A first idea of quantum field theory -- Lagrangians](https://ncatlab.org/nlab/show/A+first+idea+of+quantum+field+theory+--+Lagrangians). It says: “By definition of exact sequence, the Helmholtz operator detects whether a partial differential equation on field histories, induced by a variational differential form”

**Sources:**

- [Ian M. Anderson, Thomas Duchamp, On the existence of global variational principles, American Journal of Mathematics 102 (1980) 781–868](https://doi.org/10.2307/2374195)
