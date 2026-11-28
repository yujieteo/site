### Absolute continuity makes straight paths optimal

**Remember:** The integral of velocity must equal the change in position.

*Rules out counterexamples.* MSC 49J05 (Existence theories for free problems in one independent variable), 49K05. arXiv math.OC. Level 2: later undergraduate.

**Definition.** A real path on a closed interval is absolutely continuous if it equals its starting point plus the integral of an integrable velocity, so its velocity integrates to its total change. A path that is only continuous with a derivative almost everywhere can fail this.

**Problem.** Among absolutely continuous real paths from 0 to 1 in unit time, the straight path uniquely minimizes the integral of squared speed.

**How the definition helps.** The velocity integrates to 1, so Cauchy–Schwarz bounds the energy below by 1, with equality only for constant velocity almost everywhere (our own). Without absolute continuity, the Cantor function joins 0 to 1 with derivative zero almost everywhere, so its energy is 0 (our own).

**Wikipedia:** [Absolute continuity](https://en.wikipedia.org/wiki/Absolute_continuity). It says: “is uniformly continuous, and is differentiable with f′(x) = 0 for almost all x, but does not satisfy the Fundamental Theorem”

**Sources:** none listed. No primary source with a working link was found.

### Compact sublevels trap minimizing sequences

**Remember:** Keep a low-cost sequence inside one compact set.

*Rules out counterexamples.* MSC 49J27 (Existence theories for problems in abstract spaces). arXiv math.OC. Level 2: later undergraduate.

**Definition.** A cost has compact sublevels if, for each real bound, the points costing at most that bound form a compact set. So every sequence with bounded cost lies in one compact set and has a convergent subsequence.

**Problem.** Suppose a cost on a metric space has compact sublevels and a finite infimum. Then some point attains that infimum.

**How the definition helps.** A minimizing sequence eventually lies in one compact sublevel, so a subsequence converges (our own). Each sublevel is closed, so the limit lies in every sublevel above the infimum and attains it (our own). Without compactness, exp(−x) on the real line approaches 0 but never attains it (our own).

**Wikipedia:** [Direct method in the calculus of variations](https://en.wikipedia.org/wiki/Direct_method_in_the_calculus_of_variations). It says: “Show that J is sequentially lower semi-continuous with respect to the topology τ.”

**Sources:** none listed. No primary source with a working link was found.

### With subgradients, zero is a subgradient exactly at a global minimum

**Remember:** A flat line below the graph marks the lowest point.

*True by definition.* MSC 49J52 (Nonsmooth analysis), 26A51. arXiv math.OC, math.CA. Level 2: later undergraduate.

**Definition.** A subgradient of a convex function f at x₀ is a slope c whose line through (x₀, f(x₀)) lies below the graph: f(x) − f(x₀) ≥ c(x − x₀) for all x. The subdifferential is the set of all such slopes; for \|x\| at 0 it is \[−1, 1\].

**Problem.** A point x₀ is a global minimum of a convex function f exactly when 0 is a subgradient of f at x₀. This is Fermat's rule for convex functions with corners.

**How the definition helps.** With c = 0 the inequality reads f(x) ≥ f(x₀) for all x, so the rule holds by definition and gives a global minimum. The derivative version fails at corners such as the minimum of \|x\|, where no derivative exists.

**Wikipedia:** [Subderivative](https://en.wikipedia.org/wiki/Subderivative). It says: “A point x₀ is a global minimum of a convex function f if and only if zero is contained in the subdifferential.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970)](https://doi.org/10.1515/9781400873173)

### A point is nearest in a convex set when the displacement is normal

**Remember:** At the nearest point, the displacement points away from every feasible move.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49J53 (Set-valued and variational analysis), 52A27, 90C25. arXiv math.OC. Level 2: later undergraduate.

**Definition.** The normal cone of a convex set Ω ⊆ ℝⁿ at z ∈ Ω is the set of directions v that make an angle of at least 90° with every move from z into Ω: ⟨v, y − z⟩ ≤ 0 for all y ∈ Ω.

**Problem.** Take a nonempty closed convex set Ω in ℝⁿ and a point x. The nearest point of Ω to x is the point z of Ω whose normal cone contains x − z.

**How the definition helps.** The nearest-point test becomes one condition: x − z lies in the normal cone at z (our own). Expanding ‖x − y‖² = ‖x − z‖² − 2⟨x − z, y − z⟩ + ‖y − z‖² gives sufficiency, and a short move toward each y gives necessity (our own). Closedness ensures that a nearest point exists (our own).

**Paper or page:** [Design Guidelines for Noise-Tolerant Optimization with Applications in Robust Design](https://arxiv.org/abs/2401.15007v2). It says: “z is the projection of x on Ω if and only if (x − z)ᵀ(y − z) ≤ 0 for all y ∈ Ω.”

**Sources:**

- [Yuchen Lou, Shigeng Sun, Jorge Nocedal, Design Guidelines for Noise-Tolerant Optimization with Applications in Robust Design, arXiv:2401.15007v2 (2024)](https://arxiv.org/abs/2401.15007v2)

### Endpoint momentum gives natural and moving boundary conditions

**Remember:** Momentum pays for vertical motion, energy for horizontal motion.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable), 70H03. arXiv math.OC. Level 2: later undergraduate.

**Definition.** For a smooth integrand L(x,y,v) along a curve with slope v = y′, let p = ∂L/∂v be the momentum and H = vp − L the energy. Moving the upper end of a stationary curve by (δx, δy) changes the integral to first order by the endpoint term p δy − H δx.

**Problem.** For a smooth stationary curve with an end free to slide, the endpoint term vanishes along every allowed tangent direction there. At an end with fixed x but free height, this gives p = 0.

**How the definition helps.** Stationarity means the first change vanishes for every allowed motion, and the endpoint term is that first change. Integration by parts cancels the interior term along a stationary curve, and differentiating the moving limit gives the −H δx part (our own).

**Paper or page:** [Simple Variable End Point Problem/Endpoints on Curves](https://proofwiki.org/wiki/Simple_Variable_End_Point_Problem/Endpoints_on_Curves). It says: “the following system of Euler and transversality equations”

**Sources:** none listed. No primary source with a working link was found.

### Integrated momentum gives the Euler–Lagrange equation without second derivatives

**Remember:** Subtract accumulated force from momentum; stationarity makes it constant.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** For a C¹ curve y on \[a,b\] and a smooth integrand L, evaluate p = ∂L/∂y′ and q = ∂L/∂y along y. The corrected momentum m(x) = p(x) − ∫ₐˣ q(s) ds subtracts the accumulated force, so the Euler–Lagrange equation p′ = q says exactly that m is constant.

**Problem.** A continuously differentiable fixed-end stationary curve for a smooth integrand satisfies the integrated Euler–Lagrange equation. Its momentum is continuously differentiable even before one knows that the curve has a second derivative.

**How the definition helps.** Integration by parts turns the first variation into ∫ m h′ dx for every fixed-end direction h (our own). Taking h′ = m minus its average gives ∫(m − m̄)² dx = 0, so m is constant and p = m + ∫q is C¹ (our own).

**Paper or page:** [Necessary Condition for Integral Functional to have Extremum for given function/Lemma](https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum_for_given_function/Lemma). It says: “Then β(x) is differentiable. Furthermore: ∀ x ∈ \[a,b\]: β′(x) = α(x)”

**Sources:** none listed. No primary source with a working link was found.

### Jacobi fields rule out interior zeros at a minimum

**Remember:** A Jacobi field vanishing at a and c costs nothing.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** Suppose the second variation along a perturbation h is ∫(P h′² + Q h²) dx on \[a,b\], with smooth P, Q and P &gt; 0. A point c &gt; a is conjugate to a if a nonzero solution of the Jacobi equation (P h′)′ = Q h vanishes at both a and c. Cut off at c, such a solution gives a fixed-end direction with zero second variation.

**Problem.** If the second variation is nonnegative for all smooth fixed-end directions on \[a,b\], then no point in (a,b) is conjugate to a.

**How the definition helps.** If c in (a,b) were conjugate, the cut-off solution h would have zero second variation, so it would minimize the nonnegative form (our own). The derivative of the form at h in a direction k is then 2P(c)h′(c)k(c), by integration by parts (our own). Uniqueness for the Jacobi equation gives h′(c) ≠ 0, a contradiction; smooth approximation justifies the piecewise smooth test (our own).

**Paper or page:** [Nonnegative Quadratic Functional implies no Interior Conjugate Points](https://proofwiki.org/wiki/Nonnegative_Quadratic_Functional_implies_no_Interior_Conjugate_Points). It says: “In other words, the open interval (a,b) contains no points conjugate to a.”

**Sources:** none listed. No primary source with a working link was found.

### Jacobi fields turn the second variation into a square

**Remember:** Divide h by a positive Jacobi field; the form becomes a square.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** On \[a,b\], suppose the second variation along each fixed-end perturbation h is ∫(P h′² + Q h²) dx with smooth P, Q and P &gt; 0. A positive Jacobi field is a solution u of (P u′)′ = Q u with u &gt; 0 on all of \[a,b\]. Writing h = u w then turns the second variation into ∫ P u² w′² dx.

**Problem.** At a smooth stationary curve for a smooth integrand, such a field makes the second variation strictly positive in every nonzero fixed-end direction. The curve is then a strict local minimum among curves close in both height and slope.

**How the definition helps.** Since ∫ P u² w′² dx vanishes only for w = 0, the second variation is positive (our own). Lower bounds on P and u, with w = 0 at the ends, bound ∫ h′² dx by a constant times the second variation. Taylor's theorem then controls the remainder for curves close in height and slope (our own).

**Paper or page:** [Sufficient Conditions for Weak Extremum](https://proofwiki.org/wiki/Sufficient_Conditions_for_Weak_Extremum). It says: “Let the strengthened Legendre's Condition hold. Let the strengthened Jacobi's Necessary Condition hold.”

**Sources:** none listed. No primary source with a working link was found.

### Linear scaling in velocity makes curve integrals ignore speed

**Remember:** Twice the speed, twice the cost rate, half the time.

*Rules out counterexamples.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** An integrand F(q,v) is positively homogeneous of degree one in velocity if F(q,sv) = sF(q,v) for every s &gt; 0, with no separate dependence on the curve parameter. Doubling the speed then doubles the integrand and halves the time, so the integral stays the same.

**Problem.** The integral of such an integrand along a curve is unchanged by any smooth increasing change of parameter with positive derivative.

**How the definition helps.** Under a change of parameter, the chain rule multiplies the velocity by the derivative of the new parameter, and homogeneity pulls that factor out to match the change of variable (our own). Squared speed fails: q(t) = t and q(t) = (t + t²)/2 both traverse \[0,1\] in unit time, with integrals 1 and 13/12 (our own).

**Paper or page:** [Necessary and Sufficient Condition for Integral Parametric Functional to be Independent of Parametric Representation](https://proofwiki.org/wiki/Necessary_and_Sufficient_Condition_for_Integral_Parametric_Functional_to_be_Independent_of_Parametric_Representation). It says: “and is a positive-homogeneous function of degree 1 in ẋ and ẏ.”

**Sources:** none listed. No primary source with a working link was found.

### Strong minima exclude cheap changes with steep slopes

**Remember:** Close in height only, so steep zigzags are allowed.

*Rules out counterexamples.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** A fixed-end curve y is a strong local minimizer if some δ &gt; 0 gives J\[z\] ≥ J\[y\] for every admissible piecewise smooth z with sup\|z − y\| &lt; δ, whatever the slopes of z. A weak local minimizer needs this only when the slopes also stay within δ uniformly wherever defined.

**Problem.** At each interior point of a smooth strong minimizer, the integrand, as a function of slope, lies above its tangent line at the curve's slope.

**How the definition helps.** A short steep segment with a gentle return stays close in height, so it detects any point where the integrand dips below its tangent (our own). For L(v) = v² − v⁴ with zero ends, the zero curve is a weak minimizer, since slopes below 1 in size give L ≥ 0. Zigzags with slopes ±2 have tiny height and negative cost, so it is not strong (our own).

**Wikipedia:** [Calculus of variations](https://en.wikipedia.org/wiki/Calculus_of_variations). It says: “Thus a strong extremum is also a weak extremum, but the converse may not hold.”

**Sources:** none listed. No primary source with a working link was found.

### The endpoint term gives both corner matching conditions

**Remember:** Upper end counts plus, lower end minus, so values must match.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** For a smooth integrand L(x,y,v) with slope v = y′, let p = ∂L/∂v and H = vp − L. Moving an end of a stationary arc by (δx, δy) changes its integral to first order by p δy − H δx at the upper end, and by the negative of this at the lower end.

**Problem.** If a stationary piecewise smooth curve has a freely movable interior corner, p and H agree across the corner.

**How the definition helps.** Moving the corner shifts one arc's upper end and the next arc's lower end, so the total first change is (p₋ − p₊)δy − (H₋ − H₊)δx (our own). Stationarity for independent δx and δy forces p and H to match separately.

**Paper or page:** [Necessary Condition for Integral Functional to have Extremum for given Function/Non-differentiable at Intermediate Point](https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum_for_given_Function/Non-differentiable_at_Intermediate_Point). It says: “The last two equations are known as the Weierstrass-Erdmann corner conditions.”

**Sources:** none listed. No primary source with a working link was found.

### The first variation turns minimization into the Euler–Lagrange equation

**Remember:** At a minimum, every direction gives zero slope.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** The first variation of J\[y\] = ∫L(x,y,y′) dx, with smooth L, in direction h is the derivative of J\[y + εh\] at ε = 0. The variational derivative is the continuous function G with first variation ∫Gh dx for every h vanishing near both ends.

**Problem.** At a smooth fixed-end minimum, the variational derivative vanishes. Equivalently, ∂L/∂y = d(∂L/∂y′)/dx along the curve.

**How the definition helps.** At a minimum, ε ↦ J\[y + εh\] has a minimum at 0, so ∫Gh dx = 0 for every such h. The fundamental lemma then forces the continuous G to vanish. Integration by parts identifies G = ∂L/∂y − d(∂L/∂y′)/dx (our own).

**Paper or page:** [Necessary Condition for Integral Functional to have Extremum for given function](https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum_for_given_function). It says: “Then a necessary condition for J\[y\] to have an extremum (strong or weak) for a given function y(x) is that y(x) satisfy Euler's equation”

**Sources:** none listed. No primary source with a working link was found.

### The Lagrangian energy gives Beltrami's identity

**Remember:** Subtract the integrand from slope times momentum to expose the constant.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable), 70H03. arXiv math.OC. Level 2: later undergraduate.

**Definition.** For an integrand L(x,y,v) with v = y′, the energy is H = v ∂L/∂v − L, slope times momentum minus the integrand. It is built so that, along an Euler–Lagrange curve, dH/dx = −∂L/∂x.

**Problem.** If the integrand does not depend on x explicitly, H is constant along every smooth Euler–Lagrange curve.

**How the definition helps.** Differentiating H cancels the terms with v′, and the Euler–Lagrange equation cancels the terms with y′, leaving −∂L/∂x (our own). So H is constant when L has no explicit x, a first-order equation in place of a second-order one.

**Wikipedia:** [Calculus of variations](https://en.wikipedia.org/wiki/Calculus_of_variations). It says: “the Legendre transform of the Lagrangian”

**Sources:** none listed. No primary source with a working link was found.

### The Weierstrass excess makes strong minimality a pointwise test

**Remember:** Cost minus the path-independent Hilbert integral leaves only the excess.

*Makes the theorem clean to state or prove.* MSC 49K05 (Optimality conditions for free problems in one independent variable). arXiv math.OC. Level 2: later undergraduate.

**Definition.** Fix a smooth slope field v(x,y) and let p = ∂L/∂v at the field slope. The Weierstrass excess E = L(x,y,w) − L(x,y,v) − p(w − v) is how far the integrand at a competing slope w lies above its tangent at the field slope. The Hilbert integral of p dy + (L − vp) dx, with L at the field slope, equals J along field curves, and J minus it is the integral of E dx along any curve.

**Problem.** Suppose the Hilbert expression equals dS for a smooth function S on a strip and the excess is nonnegative there for every slope. Each curve following the field minimizes the original integral among fixed-end competitors in that strip.

**How the definition helps.** If the Hilbert form is dS, its integral is the same endpoint difference of S for every competitor, so J\[z\] − J\[y\] is the integral of E along z, which is nonnegative (our own). The hard part is finding a field and a function S with these properties.

**Paper or page:** [Conditions for Strong Minimum of Functional](https://proofwiki.org/wiki/Conditions_for_Strong_Minimum_of_Functional). It says: “where E is Weierstrass E-Function. Then J has a strong minimum for γ.”

**Sources:** none listed. No primary source with a working link was found.

### A regular integral constraint admits one constant multiplier

**Remember:** One direction that changes the constraint is enough to repair the others.

*Rules out counterexamples.* MSC 49K21 (Optimality conditions for problems involving relations other than differential equations), 49K05. arXiv math.OC. Level 2: later undergraduate.

**Definition.** An integral constraint K\[y\] = c is regular at y if some fixed-end perturbation changes K to first order, that is, gives a nonzero first derivative of K. That direction can then correct any other perturbation back onto the constraint.

**Problem.** Suppose smooth integral functionals J and K have fixed endpoints and K\[y\]=c is regular at a constrained minimum of J. Some constant λ makes the first derivative of J+λK vanish in every fixed-end direction.

**How the definition helps.** With the correcting direction, the implicit function theorem shows that the first derivative of J vanishes on every direction tangent to the constraint, and linear algebra gives λ (our own). Without regularity it can fail: take J\[y\] = ∫y dx, K\[y\] = ∫y² dx = 0 and zero ends (our own). Only y = 0 is feasible, but no finite λ makes J + λK stationary there.

**Paper or page:** [Simplest Variational Problem with Subsidiary Conditions](https://proofwiki.org/wiki/Simplest_Variational_Problem_with_Subsidiary_Conditions). It says: “Then, if y = y(x) is not an extremal of K\[y\], there exists a constant λ such that y = y(x) is an extremal of the functional”

**Sources:** none listed. No primary source with a working link was found.

### Tangent variations put constraint forces in the normal direction

**Remember:** Constraint forces have no component along allowed displacements.

*Makes the theorem clean to state or prove.* MSC 49K21 (Optimality conditions for problems involving relations other than differential equations), 70H03. arXiv math.OC. Level 2: later undergraduate.

**Definition.** At fixed x, a tangent variation to the surface g(x,y,z) = 0 is a displacement (δy, δz) perpendicular to the gradient of g in y and z. Assume g is smooth and this gradient never vanishes along the curve, so a vector perpendicular to all tangent variations is a multiple of the gradient.

**Problem.** At a smooth fixed-end extremum of ∫L(x,y,z,y′,z′) dx under this constraint, some function λ(x) makes ∫(L+λg) dx stationary.

**How the definition helps.** Stationarity under tangent variations makes the Euler–Lagrange residual normal to the surface at each point (our own). A normal vector is a multiple λ(x) of the gradient, which gives stationarity of ∫(L + λg) dx. The implicit function theorem realizes local tangent variations by curves on the surface (our own).

**Paper or page:** [Simplest Variational Problem with Subsidiary Conditions for Curve on Surface](https://proofwiki.org/wiki/Simplest_Variational_Problem_with_Subsidiary_Conditions_for_Curve_on_Surface). It says: “not simultaneously vanish at any point of the surface g = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Continuation values give a recursion for optimal reward

**Remember:** Once the current state is fixed, only the remaining choices matter.

*Makes the theorem clean to state or prove.* MSC 49L20 (Dynamic programming in optimal control and differential games). arXiv math.OC, cs.SY. Level 2: later undergraduate.

**Definition.** The continuation value of a state at a decision time is the best total reward still reachable from it: the supremum of rewards over its feasible remaining paths. This needs a state that alone determines future rewards and allowed actions.

**Problem.** In a deterministic problem with finitely many decision times, bounded additive rewards and a feasible continuation from every state, each value is the supremum over first actions of immediate reward plus the next state's value. Every remaining part of an optimal path is optimal from its starting state.

**How the definition helps.** Because the state alone fixes the future, a feasible tail is a first action followed by a feasible tail from the next state (our own). Grouping tails by first action and taking suprema gives the recursion (our own). If a tail of an optimal path were not optimal, swapping in a better tail would improve the whole path (our own).

**Wikipedia:** [Bellman equation](https://en.wikipedia.org/wiki/Bellman_equation). It says: “the remaining decisions must constitute an optimal policy with regard to the state resulting from the first decision.”

**Sources:**

- [R. Bellman, On the Theory of Dynamic Programming (1952)](https://doi.org/10.1073/pnas.38.8.716)

### Discounting contracts the Bellman update

**Remember:** Averaging cannot grow an error, and discounting shrinks it.

*Rules out counterexamples.* MSC 49L20 (Dynamic programming in optimal control and differential games), 93E20. arXiv math.OC, cs.SY. Level 2: later undergraduate.

**Definition.** Fix a rule for choosing actions from the current state. Its Bellman update replaces a trial value by the expected immediate reward plus γ times the expected trial value at the next state, with discount 0 ≤ γ &lt; 1. The rewards cancel between two trial values, so their difference is only averaged and multiplied by γ (our own).

**Problem.** In a finite Markov decision process with bounded rewards, the update makes the maximum absolute difference between two trial values at most γ times what it was. Its unique fixed point is the expected discounted reward sum from each state.

**How the definition helps.** Averaging cannot increase a maximum absolute difference, so the update is a γ-contraction (our own). The contraction theorem gives a unique fixed point, and conditioning on the first step shows the discounted reward sum is fixed (our own). At γ = 1, one state with zero reward that returns to itself admits every value as a fixed point (our own).

**Paper or page:** [On the Reinhardt Conjecture and Formal Foundations of Optimal Control](https://arxiv.org/abs/2208.04443v1). It says: “The operator Bπ is a contraction in the max norm on the space of functions S → ℝ.”

**Sources:** none listed. No primary source with a working link was found.

### Transport plans let atoms split

**Remember:** A plan can send one source atom to two target points.

*Makes the theorem clean to state or prove.* MSC 49Q22 (Optimal transportation). arXiv math.OC. Level 2: later undergraduate.

**Definition.** A transport plan from μ to ν is a probability measure on pairs with first marginal μ and second marginal ν, so it may split the mass at one source point among many targets. A transport map is a measurable function T with μ(T⁻¹(B)) = ν(B) for every measurable B, so it sends all the mass at a point to one target.

**Problem.** Any two probability measures on Euclidean spaces have a transport plan. They need not admit a transport map.

**How the definition helps.** The product of μ and ν is always a plan, but the nLab notes that a measure-preserving map may not exist. In our own example, μ is a point mass and ν puts half its mass at each of two points; a map sends the point to only one of them.

**nLab:** [transport plan](https://ncatlab.org/nlab/show/transport+plan). It says: “there may exist no measure-preserving function between two probability spaces”

**Sources:** none listed. No primary source with a working link was found.

### Mixtures capture fast control switches

**Remember:** Fast switches can converge to a mixture even when actions cannot.

*Rules out counterexamples. Confidence: medium.* MSC 49J15 (Existence theories for optimal control problems involving ordinary differential equations). arXiv math.OC. Level 3: graduate.

**Definition.** A relaxed control on a finite time interval I with action space A is a positive Borel measure on I × A whose time marginal is length measure, so it spreads each instant over a distribution of actions. An ordinary control is the special case with a point mass at its chosen action at almost every time.

**Problem.** For a compact metric action space, a weak limit of relaxed controls is again a relaxed control, where weak convergence tests integrals of continuous functions of time and action. This compact-action version is our own.

**How the definition helps.** Testing with functions of time alone shows that the limit keeps length measure as its time marginal (our own). Disintegration then gives the action distribution at almost every time (our own). Actions alternating ever faster between −1 and 1 in equal shares converge to half mass on each action at every time, which is no ordinary control (our own).

**Paper or page:** [A non-exchangeable mean field control problem with controlled interactions](https://arxiv.org/abs/2511.00288). It says: “is closed with respect to the Wasserstein topology.”

**Sources:** none listed. No primary source with a working link was found.

### Point masses embed ordinary controls

**Remember:** A point mass averages exactly one action.

*True by definition.* MSC 49J15 (Existence theories for optimal control problems involving ordinary differential equations). arXiv math.OC. Level 3: graduate.

**Definition.** An ordinary control picks one action, measurably, at each time. A relaxed control picks a probability distribution on actions at each time, measurably in time, and uses the average velocity and running cost under it; a point mass at one action gives back an ordinary control.

**Problem.** Every ordinary control has a relaxed form with the same trajectory and cost. Thus the relaxed infimum is no greater than the ordinary infimum.

**How the definition helps.** A point mass averages to its single action's velocity and cost, so the relaxed control has the same trajectory and cost. The reverse inequality needs approximation of relaxed controls by ordinary ones under further hypotheses (our own).

**Paper or page:** [Lagrangian, Eulerian and Kantorovich formulations of multi-agent optimal control problems: Equivalence and Gamma-convergence](https://arxiv.org/abs/2011.07117). It says: “In particular Vᴿᴸ(X₀) ≤ Vᴸ(X₀).”

**Sources:**

- [Lagrangian, Eulerian and Kantorovich formulations of multi-agent optimal control problems: Equivalence and Gamma-convergence](https://arxiv.org/abs/2011.07117)

### Minty tests make solutions convex

**Remember:** Use F at the test point so each condition is linear.

*True by definition.* MSC 49J40 (Variational inequalities). arXiv math.OC. Level 3: graduate.

**Definition.** Let C be a closed convex subset of a real Hilbert space and F map C into that space. The usual variational inequality asks for x ∈ C with ⟨F(x), y − x⟩ ≥ 0 for all y ∈ C; the Minty form asks for ⟨F(y), y − x⟩ ≥ 0 instead. For fixed y the Minty condition is a closed half-space in x, so the Minty solution set is closed and convex.

**Problem.** For continuous monotone F on a closed convex set, the solutions of the usual inequality form a closed convex set. Monotonicity means ⟨F(y) − F(x), y − x⟩ ≥ 0.

**How the definition helps.** By Minty's lemma, continuous monotone F gives both forms the same solutions, so the usual set equals the closed convex Minty set. Monotonicity gives one direction (our own). For the other, move y along the segment toward x and use continuity (our own).

**Paper or page:** [An inertial proximal splitting algorithm for hierarchical bilevel equilibria in Hilbert spaces](https://arxiv.org/abs/2502.20999v1). It says: “If f is monotone, then every solution of (EP) is also a solution of (DEP).”

**Sources:** none listed. No primary source with a working link was found.

### Compactness keeps Γ-minima from escaping

**Remember:** Compactness keeps minimizers where the limit can see them.

*Rules out counterexamples.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.OC. Level 3: graduate.

**Definition.** Costs Fₙ Γ-converge to F if every sequence approaching x has lower limit of cost at least F(x), and some sequence approaching x has costs tending to F(x). The compactness condition asks one compact set to contain a minimizer of every Fₙ, so the minimizers cannot escape.

**Problem.** Suppose nonnegative costs on a complete metric space Γ-converge and meet this compactness requirement. Their minima converge to the minimum of F, and F attains it.

**How the definition helps.** Along minima tending to their lower limit, compactness gives minimizers converging to some x, and the Γ lower bound makes F(x) at most that limit (our own). Recovery sequences show that every F(y) is at least the upper limit of the minima, so x minimizes F and the minima converge (our own). Without compactness, fₙ(x) = min(1, \|x − n\|) on ℝ has minimum 0 but Γ-limit 1 (our own).

**Paper or page:** [Phase transitions and minimal interfaces on manifolds with conical singularities](https://arxiv.org/abs/2403.07178). It says: “Then, $\\mathcal F\_\\infty $ has a minimizer and \\\[\\min<sub>X</sub> \\mathcal F\_\\infty = \\lim<sub>k\\rightarrow \\infty</sub> \\inf<sub>X</sub> \\mathcal F<sub>k</sub>.\\\]”

**Sources:** none listed. No primary source with a working link was found.

### Constant Γ-limits repair cost jumps

**Remember:** Take the infimum on shrinking balls around each point.

*True by definition.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.AP, math.OC. Level 3: graduate.

**Definition.** The Γ-limit compares costs on shrinking balls: at x, let aₙ(r) be the infimum of Fₙ on the open ball B(x,r), and let r decrease to zero in liminfₙ aₙ(r) and limsupₙ aₙ(r). If these two limits agree at every x, their common value is the Γ-limit. For a constant sequence it is the limit of the infimum of F on small balls around x.

**Problem.** If every term of a sequence equals the same nonnegative cost F on a metric space, its Γ-limit is the largest lower semicontinuous cost below F. Lower semicontinuity means the value at a point never exceeds the lower limit of nearby values.

**How the definition helps.** For a constant sequence both limits equal the supremum over r of the infimum of F on B(x,r) (our own). This is lower semicontinuous, since a ball infimum above a threshold also bounds smaller balls around nearby points (our own). Any lower semicontinuous minorant above a threshold at x stays above it on some ball, so this formula dominates every such minorant (our own).

**Wikipedia:** [Γ-convergence](https://en.wikipedia.org/wiki/%CE%93-convergence). It says: “the largest lower semicontinuous functional below F”

**Sources:** none listed. No primary source with a working link was found.

### Continuous additions preserve Γ-limits

**Remember:** A continuous added cost has the same limit along every approaching sequence.

*Rules out counterexamples.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.OC. Level 3: graduate.

**Definition.** Costs Γ-converge to F on a metric space if two tests hold at each x, both along sequences that approach x: every such sequence has lower limit of cost at least F(x), and some such sequence has costs tending to F(x).

**Problem.** Suppose nonnegative costs Γ-converge to F. Adding the same finite nonnegative continuous function G to each cost gives Γ-limit F + G.

**How the definition helps.** Continuity gives G(xₙ) → G(x) along every sequence xₙ → x, so G adds G(x) to both tests (our own). For a discontinuous G it fails: on ℝ let fₙ be 1 except fₙ(1/n) = 0, and let G be 1 except G(0) = 0 (our own). Then F = G and every fₙ + G is at least 1, but F(0) + G(0) = 0 (our own).

**Wikipedia:** [Γ-convergence](https://en.wikipedia.org/wiki/%CE%93-convergence). It says: “Γ-convergence is stable under continuous perturbations”

**Sources:** none listed. No primary source with a working link was found.

### Gamma limits preserve limiting minimizers

**Remember:** Check moving points to keep moving wells from disappearing.

*Rules out counterexamples.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.OC. Level 3: graduate.

**Definition.** Costs Fₙ Γ-converge to F on a metric space if, at every x, each sequence xₙ → x has liminfₙ Fₙ(xₙ) ≥ F(x), and some sequence xₙ → x has Fₙ(xₙ) → F(x). The tests use moving points xₙ, not only the fixed point x.

**Problem.** If costs Γ-converge on a metric space, every cluster point of their minimizers minimizes the limit cost.

**How the definition helps.** At a cluster point x of minimizers, the lower bound gives F(x) ≤ the lower limit of the minima, and a recovery sequence for any y bounds that limit by F(y) (our own). Pointwise convergence is not enough: take the cost x on \[0, 1\], set to −1 only at 1 − 1/n (our own). Its minimizers tend to 1, but the pointwise limit x is minimized at 0 (our own).

**Wikipedia:** [Γ-convergence](https://en.wikipedia.org/wiki/%CE%93-convergence). It says: “then every cluster point of the sequence xₙ is a minimizer of F.”

**Sources:** none listed. No primary source with a working link was found.

### Global slope formulas preserve semicontinuity

**Remember:** Write the slope as a supremum over fixed comparison points.

*True by definition.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.AP, math.OC. Level 3: graduate.

**Definition.** For a finite function F on a metric space, let q(x,y) = max(0, F(x) − F(y))/d(x,y) be the rate of descent from x to y. The local slope at x is the limsup of q(x,y) as y → x, and the global slope is the supremum over all y ≠ x; each is zero when no such y exists. For each fixed y, q(·,y) is lower semicontinuous when F is, so the global slope, a supremum of these, is too.

**Problem.** Let F be finite, lower semicontinuous and convex along constant-speed shortest paths, in a space where such a path joins every pair of points. Then the local slope of F is lower semicontinuous.

**How the definition helps.** Convexity along shortest paths makes the local slope equal the global slope, which is the essential preceding result. The global slope is lower semicontinuous as a supremum of lower semicontinuous functions of x (our own).

**Paper or page:** [Stability of a class of action functionals depending on convex functions](https://arxiv.org/abs/2106.10908v1). It says: “\\abs {\\partial f}(x)=\\sup <sub>y\\ne x</sub>\\frac{\\left(f(y)-f(x)-\\frac{\\lambda }{2}{\\mathsf{d}}(y,x)<sup>2\\right</sup>)<sup>-}{{\\mathsf{d}}</sup>(y,x)}.”

**Sources:** none listed. No primary source with a working link was found.

### Lower semicontinuity makes increasing Γ-limits pointwise

**Remember:** Earlier costs bound below; the constant sequence recovers the supremum.

*Rules out counterexamples.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.OC. Level 3: graduate.

**Definition.** A cost is lower semicontinuous if its value at a point never exceeds its lower limit along any sequence approaching that point. Costs Γ-converge to F if every sequence approaching x has lower limit of cost at least F(x), and some such sequence has costs tending to F(x).

**Problem.** Increasing lower semicontinuous costs on a metric space Γ-converge to their pointwise supremum.

**How the definition helps.** For m ≤ n we have Fₙ ≥ Fₘ, so along xₙ → x the lower limit of Fₙ(xₙ) is at least Fₘ(x) by lower semicontinuity (our own). Taking the supremum over m gives the lower bound, and the constant sequence xₙ = x recovers the supremum (our own). Without lower semicontinuity, the repeated cost equal to 1 at 0 and 0 elsewhere fails, since 1/n → 0 with cost 0 (our own).

**Paper or page:** [A representation formula of the viscosity solution of the contact Hamilton-Jacobi equation and its applications](https://arxiv.org/abs/2101.00446). It says: “If Fₙ is an increasing sequence, then Γ-limₙ→∞ Fₙ = limₙ→∞ sc⁻ Fₙ = supₙ∈ℕ sc⁻ Fₙ.”

**Sources:** none listed. No primary source with a working link was found.

### Mosco convergence preserves nearest points

**Remember:** Weak limits stay feasible, and strong approximations recover every target.

*Makes the theorem clean to state or prove.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation), 49J53. arXiv math.AP, math.OC. Level 3: graduate.

**Definition.** Closed convex sets Cₙ in a Hilbert space Mosco-converge to C if weak limits stay inside C and every point of C can be reached in norm. Precisely, whenever xₖ ∈ Cₙₖ for increasing nₖ converges weakly, its limit lies in C, and every x ∈ C is the norm limit of some xₙ ∈ Cₙ.

**Problem.** For nonempty closed convex sets in a Hilbert space, Mosco convergence makes the nearest point to any fixed x converge in norm.

**How the definition helps.** Norm approximation of the nearest point in C bounds the upper limit of the distances, and weak closedness puts every weak cluster point of the projections in C (our own). Weak lower semicontinuity of the norm and uniqueness of the nearest point identify every such limit, and the distances converge (our own). In Hilbert space, weak convergence plus convergence of norms gives norm convergence (our own).

**Paper or page:** [Stability of a class of action functionals depending on convex functions](https://arxiv.org/abs/2106.10908v1). It says: “J<sup>{f<sup>h</sup>}\_\\tau</sup> x \\rightarrow J<sup>f\_\\tau</sup> x.”

**Sources:**

- [Umberto Mosco, Convergence of convex sets and of solutions of variational inequalities (1969)](https://doi.org/10.1016/0001-8708(69)90009-7)

### Polyconvexity implies quasiconvexity by averaging

**Remember:** Average the minors first, then use convexity.

*True by definition.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.OC. Level 3: graduate.

**Definition.** A matrix function is polyconvex if it is a convex function of the list of all minors, the determinants of square submatrices. Quasiconvexity means that adding the gradient of a smooth compactly supported map to a constant matrix never lowers the average cost. Each minor averages, over such a perturbation, to its value at the constant matrix.

**Problem.** Every finite polyconvex matrix function is quasiconvex in the sense used for variational integrals.

**How the definition helps.** Jensen's inequality bounds the average cost below by the cost at the averaged minors, which are the minors of the constant matrix (our own). The averaging identity holds by integration by parts, since each minor is a divergence and the perturbation vanishes near the boundary (our own).

**Paper or page:** [On the local everywhere Hölder continuity for weak solutions of a class of not convex vectorial problems of the Calculus of Variations](https://arxiv.org/abs/2302.02387v1). It says: “f convex ⇒ f polyconvex ⇒ f quasiconvex ⇒ f rank one convex.”

**Sources:** none listed. No primary source with a working link was found.

### Young measures give a minimizer when no function attains the infimum

**Remember:** Keep the whole distribution of oscillating values, not one value.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation), 28A33. arXiv math.OC, math.AP. Level 3: graduate.

**Definition.** A uniformly bounded sequence of real functions fₙ on \[0,1\] generates a Young measure, a measurable family of probability measures νₓ, if this family records the limiting distribution of values near each x. Precisely, for every continuous F on ℝ, F(fₙ) converges weak-\* in L∞ to x ↦ ∫F(t) dνₓ(t) (our own).

**Problem.** For absolutely continuous u on \[0,1\] with zero endpoints, the Bolza energy ∫((u′² − 1)² + u²) dx has infimum zero, attained by no admissible function. The relaxed problem attains zero at u = 0 with derivative distribution ½δ₋₁ + ½δ₁ everywhere (our own).

**How the definition helps.** Zigzags with slopes ±1 for equal times and shrinking periods tend to 0 uniformly and generate this distribution (our own). Both slopes have zero cost, so the averaged derivative cost vanishes. An ordinary minimizer would need u = 0 and \|u′\| = 1 almost everywhere at once (our own).

**Wikipedia:** [Young measure](https://en.wikipedia.org/wiki/Young_measure). It says: “This captures the essential features of all minimizing sequences to this problem, namely, their derivatives u′ₖ(x) will tend to concentrate along the minima {−1, 1} of the integrand”

**Sources:**

- [L. C. Young, Generalized surfaces in the calculus of variations, Annals of Mathematics 43 (1942) 84ff.](https://doi.org/10.2307/1968882)

### Equality in Fenchel’s inequality makes subgradient inversion transparent

**Remember:** Equality means the point attains the supremum defining the conjugate.

*True by definition.* MSC 49J52 (Nonsmooth analysis), 52A41. arXiv math.OC. Level 3: graduate.

**Definition.** Let f be a proper closed convex function on ℝⁿ, with conjugate f⁎(p) = sup over z of ⟨p,z⟩ − f(z). A subgradient of f at a point x where f is finite is a vector p with f(z) ≥ f(x) + ⟨p, z − x⟩ for all z; equivalently, x attains the supremum defining f⁎(p), so f(x) + f⁎(p) = ⟨p,x⟩.

**Problem.** A vector p is a subgradient of f at x exactly when x is a subgradient of f⁎ at p.

**How the definition helps.** The equality f(x) + f⁎(p) = ⟨p,x⟩ is symmetric in the pairs (f, x) and (f⁎, p) once f⁎⁎ = f (our own). The biconjugate theorem gives f⁎⁎ = f for proper closed convex f, so the same test for f⁎ at p reads the same equality (our own).

**Wikipedia:** [Convex conjugate](https://en.wikipedia.org/wiki/Convex_conjugate). It says: “Furthermore, the equality holds only when p ∈ ∂f(x), where ∂f(x) is the subgradient.”

**Sources:** none listed. No primary source with a working link was found.

### For weakly convex functions, a steep enough Moreau envelope is continuously differentiable

**Remember:** Use a quadratic steeper than the function's worst downward bend.

*Makes the theorem clean to state or prove.* MSC 49J52 (Nonsmooth analysis), 90C26. arXiv math.OC. Level 3: graduate.

**Definition.** For m ≥ 0, a function f on ℝⁿ is m-weakly convex if f(x) + m‖x‖²/2 is convex, so it bends downward by at most m. Its Moreau envelope with parameter ρ &gt; 0 at x is the infimum over y of f(y) + ρ‖y − x‖²/2; when ρ &gt; m, this inner cost is strongly convex in y.

**Problem.** Let f be proper, closed and m-weakly convex on ℝⁿ, with ρ &gt; m. For every x the envelope has a unique minimizer y, and the envelope is continuously differentiable with gradient ρ(x − y).

**How the definition helps.** The inner cost is proper, closed and strongly convex, so it has a unique minimizer y for every x (our own). The Moreau envelope differentiability theorem then gives the gradient ρ(x − y) and its continuity.

**Paper or page:** [A Proximal Descent Method for Minimizing Weakly Convex Optimization](https://arxiv.org/abs/2509.02804v1). It says: “the Moreau envelope fᵨ is continuously differentiable with gradient given by ∇fᵨ(x) = ρ(x − x̂),”

**Sources:**

- [Feng-Yi Liao, Yang Zheng, A Proximal Descent Method for Minimizing Weakly Convex Optimization, arXiv:2509.02804v1 (2025)](https://arxiv.org/abs/2509.02804v1)
- [J. J. Moreau, Proximité et dualité dans un espace hilbertien, Bulletin de la Société Mathématique de France (1965)](https://doi.org/10.24033/bsmf.1625)

### Moving difference quotients detect stationarity

**Remember:** Moving the base point lets the direction test see both sides.

*Rules out counterexamples.* MSC 49J52 (Nonsmooth analysis). arXiv math.OC. Level 3: graduate.

**Definition.** For locally Lipschitz f on ℝⁿ, the Clarke directional derivative f°(x,v) = limsup (f(y + hv) − f(y))/h over y → x and h ↓ 0 lets the base point move as well as the step. A Clarke subgradient at x is a vector p with ⟨p,v⟩ ≤ f°(x,v) for every v.

**Problem.** Let f be locally Lipschitz on Euclidean space, so nearby changes in value are at most a constant times distance. At each local minimum, zero is a Clarke subgradient, even where an ordinary directional derivative fails to exist.

**How the definition helps.** Taking y = x at a local minimum gives nonnegative quotients for small steps, so f°(x,v) ≥ 0 for every v and zero is a subgradient (our own). The function with f(0) = 0 and f(x) = \|x\|(2 + sin(log \|x\|)) elsewhere is locally Lipschitz, but its one-sided quotient at 0 oscillates (our own).

**Wikipedia:** [Clarke generalized derivative](https://en.wikipedia.org/wiki/Clarke_generalized_derivative). It says: “f°(x, v) = limsup\[y → x, h ↓ 0\] (f(y + hv) − f(y))/h,”

**Sources:**

- [Frank H. Clarke, Generalized gradients and applications (1975)](https://doi.org/10.1090/s0002-9947-1975-0367131-6)

### On complete spaces every finite lower semicontinuous convex function has subgradients

**Remember:** Completeness lets a closed sublevel set contain a ball.

*Rules out counterexamples.* MSC 49J52 (Nonsmooth analysis), 52A41. arXiv math.OC, math.FA. Level 3: graduate.

**Definition.** A Banach space is a normed vector space that is complete: every Cauchy sequence converges in it. Completeness is what the Baire category theorem needs, so a countable union of closed sets can cover the space only if one of them has interior.

**Problem.** A finite, lower semicontinuous convex function on a Banach space has a subgradient at every point. The claim fails on an incomplete normed space.

**How the definition helps.** The closed sublevel sets cover the space because f is finite, so by Baire one has interior and f is bounded on a ball (our own). Convexity then makes f continuous everywhere, and the Hahn–Banach theorem gives a subgradient. The paper's function on finitely supported sequences is nowhere continuous, with empty subdifferential everywhere.

**Paper or page:** [A convex, finite and lower semicontinuous function with empty subdifferential](https://arxiv.org/abs/2409.18650v1). It says: “We give an example of a convex, finite and lower semicontinuous function whose subdifferential is everywhere empty. This is possible since the function is defined on an incomplete normed space.”

**Sources:**

- [Gerd Wachsmuth, A convex, finite and lower semicontinuous function with empty subdifferential, arXiv:2409.18650v1 (2024)](https://arxiv.org/abs/2409.18650v1)

### Proximal maps bound separation

**Remember:** Two subgradient inequalities keep proximal outputs from moving too far.

*True by definition.* MSC 49J52 (Nonsmooth analysis). arXiv math.OC. Level 3: graduate.

**Definition.** The proximal step at x returns the minimizer p of f(p) + ‖p − x‖²/2. Equivalently, x − p is a subgradient of f at p: f(z) ≥ f(p) + ⟨x − p, z − p⟩ for all z.

**Problem.** Let f be convex on Euclidean space, finite somewhere, never −∞, and have closed sublevel sets. Its proximal map P satisfies ‖P(x) − P(y)‖² ≤ ⟨P(x) − P(y), x − y⟩.

**How the definition helps.** Apply this inequality at p = P(x) with z = q = P(y), and at q with z = p, then add to get ⟨(x − p) − (y − q), p − q⟩ ≥ 0 (our own). Rearranging gives the bound.

**Paper or page:** [Optimization with First Order Algorithms](https://arxiv.org/abs/2410.19506v1). It says: “In particular, these two operators are nonexpansive (1-Lipschitz).”

**Sources:** none listed. No primary source with a working link was found.

### Relative interiors let normals add

**Remember:** Require the sets to overlap from the inside before adding normals.

*Rules out counterexamples.* MSC 49J53 (Set-valued and variational analysis), 49J52. arXiv math.OC. Level 3: graduate.

**Definition.** The relative interior of a convex set is its interior within its affine hull. At x ∈ C, the normal cone of C is the set of vectors p with ⟨p, y − x⟩ ≤ 0 for all y ∈ C; it is the subdifferential of the indicator of C, which is zero on C and +∞ off it (our own).

**Problem.** Suppose the relative interiors of two convex sets in Euclidean space meet. At every shared point, the normal cone of the intersection equals the sum of their normal cones.

**How the definition helps.** The indicator of the intersection is the sum of the two indicators, so the convex subgradient sum rule gives the formula; that rule needs the relative interiors to meet (our own). Two externally tangent disks fail it: their normal rays at the contact point sum to a line, but the one-point intersection has every vector as a normal (our own).

**Paper or page:** [Approximate optimality conditions and sensitivity analysis in nearly convex optimization](https://arxiv.org/abs/2410.04710v1). It says: “If ri Ω₁ ∩ ri Ω₂ ≠ ∅, then for each x̄ ∈ Ω₁ ∩ Ω₂”

**Sources:**

- [Approximate optimality conditions and sensitivity analysis in nearly convex optimization](https://arxiv.org/abs/2410.04710v1)

### Controllability rules out abnormal multipliers

**Remember:** Controllability forces an abnormal multiplier vector to vanish.

*Rules out counterexamples.* MSC 49K15 (Optimality conditions for problems involving ordinary differential equations). arXiv math.OC. Level 3: graduate.

**Definition.** In the maximum principle, a multiplier is a time-dependent adjoint vector p with a scalar on the cost, and it is abnormal when that scalar is zero, so the cost plays no role. For x′ = Ax + Bu with constant matrices, controllability means the columns of B, AB, …, Aⁿ⁻¹B span the n-dimensional state space.

**Problem.** Minimize a smooth running cost under these linear dynamics, with fixed endpoints, an open action set and no state constraints. If the system is controllable, it admits no abnormal multiplier; this fixed-endpoint version is our own.

**How the definition helps.** With zero cost scalar, stationarity over the open action set gives pᵀB = 0 everywhere, and the adjoint obeys p′ = −Aᵀp (our own). Differentiating repeatedly gives pᵀAʲB = 0 for j &lt; n, so controllability forces p = 0 (our own). That contradicts the maximum principle's requirement of a nonzero multiplier (our own).

**Paper or page:** [Hidden regularity in singular optimal control of port-Hamiltonian systems](https://arxiv.org/abs/2305.03790). It says: “then the scalar multiplier in \\eqref{eq:the<sub>optimality</sub><sub>condition</sub>} satisfies λ₀ ≠ 0.”

**Sources:** none listed. No primary source with a working link was found.

### A backward adjoint gives sensitivity

**Remember:** Run one linear equation backward to read the initial gradient.

*True by definition.* MSC 49K40 (Sensitivity, stability, well-posedness), 49K15. arXiv math.OC. Level 3: graduate.

**Definition.** Along a solution of x′ = f(x) on \[0,T\], the adjoint p solves the linear equation p′ = −Df(x)ᵀp backward from p(T) = ∇C(x(T)), where C is the terminal cost. It is built so that ⟨p(t), δx(t)⟩ stays constant for every first-order change δx of the state, which solves δx′ = Df(x)δx.

**Problem.** If f and C are continuously differentiable, the gradient of the terminal cost with respect to the initial state is p(0). Assume the solution exists on the full interval for initial states nearby.

**How the definition helps.** At time T the constant ⟨p, δx⟩ is the first-order change of C, and at time 0 it is ⟨p(0), δx(0)⟩, so p(0) is the gradient (our own). The product rule shows the inner product is constant, since the two terms of its derivative cancel (our own). Differentiability of the flow in its initial state supplies the forward equation for δx.

**Paper or page:** [Optimal Potential Shaping on SE(3) via Neural ODEs on Lie Groups](https://arxiv.org/abs/2401.15107v2). It says: “\\text{d} (C\\circ \\Psi \_f<sup>T</sup>) = \\lambda (0)\\, ,”

**Sources:**

- [Optimal Potential Shaping on SE(3) via Neural ODEs on Lie Groups](https://arxiv.org/abs/2401.15107v2)

### Moving contacts preserve viscosity subsolutions

**Remember:** Let the touching point slide as the functions converge.

*Makes the theorem clean to state or prove.* MSC 49L25 (Viscosity solutions to Hamilton-Jacobi equations in optimal control and differential games), 35D40. arXiv math.AP, math.OC. Level 3: graduate.

**Definition.** The upper half-relaxed limit of a sequence uₖ at x is the largest value that uₖ(y) can approach as k → ∞ and y → x together. A viscosity subsolution is an upper semicontinuous function such that, wherever a smooth test function touches it from above at x, H(x, ∇test(x)) ≤ 0.

**Problem.** Consider a fixed continuous first-order equation H(x,∇u) = 0 on an open Euclidean set. If a sequence of viscosity subsolutions is uniformly bounded on each compact subset, its upper half-relaxed limit is a viscosity subsolution.

**How the definition helps.** Because the limit lets the evaluation point move, a strict touching point of the limit is approached by touching points of the uₖ (our own). Make the contact strict with a quadratic, take maxima of uₖ minus the test on a small closed ball, and pass the inequalities to the limit by continuity of H (our own).

**Wikipedia:** [Viscosity solution](https://en.wikipedia.org/wiki/Viscosity_solution). It says: “More generally, the notions of viscosity sub- and supersolution are also conserved by half-relaxed limits.”

**Paper or page:** [Convergence Guarantees for Neural Network-Based Hamilton-Jacobi Reachability](https://arxiv.org/abs/2410.02904v1). It says: “is a viscosity subsolution to the equation”

**Sources:**

- [Michael Crandall, Hitoshi Ishii and Pierre-Louis Lions, User’s guide to viscosity solutions of second order partial differential equations (1992)](https://doi.org/10.1090/s0273-0979-1992-00266-5)

### Quadratic envelopes bound upward curvature

**Remember:** Every competitor carries the same quadratic in x, plus an affine part.

*True by definition. Confidence: medium.* MSC 49L25 (Viscosity solutions to Hamilton-Jacobi equations in optimal control and differential games), 49J45. arXiv math.AP, math.OC. Level 3: graduate.

**Definition.** For a bounded Lipschitz g on Euclidean space and t &gt; 0, the Hopf–Lax formula sets u(t,x) = inf over y of g(y) + ‖x − y‖²/(2t); it gives the viscosity solution of ∂u/∂t + ‖∇u‖²/2 = 0 with initial value g. Each term equals ‖x‖²/(2t) plus a function of x that is affine.

**Problem.** For t &gt; 0, the function x ↦ u(t,x) − ‖x‖²/(2t) is concave, even if g is not.

**How the definition helps.** Subtracting ‖x‖²/(2t) leaves an infimum of affine functions of x, and such an infimum is concave (our own). Each affine function is g(y) + ‖y‖²/(2t) − ⟨x,y⟩/t (our own).

**Wikipedia:** [Moreau's theorem](https://en.wikipedia.org/wiki/Moreau%27s_theorem). It says: “φ₍α₎(x) = inf\[y ∈ H\] 1/(2α) ‖y − x‖² + φ(y).”

**Paper or page:** [Note on the q-Logarithmic Sobolev and p-Talagrand Inequalities on Carnot Groups](https://arxiv.org/abs/2105.04928v1). It says: “is given by the Hopf-Lax formula”

**Sources:** none listed. No primary source with a working link was found.

### Linear penalties enforce exact feasibility

**Remember:** A penalty steeper than the multiplier makes every violation too expensive.

*Rules out counterexamples. Confidence: medium.* MSC 49N15 (Duality theory (optimization)), 49M37. arXiv math.OC. Level 3: graduate.

**Definition.** The linear penalty for the constraint g(x) ≤ 0 adds ρ·max(0, g(x)) to the objective, so it is zero on feasible points and grows linearly with the violation. A quadratic penalty adds ρ·max(0, g(x))², which is too flat near the boundary to outweigh a positive multiplier.

**Problem.** Suppose f attains its constrained minimum m and some λ ≥ 0 satisfies infₓ(f(x) + λg(x)) = m. For every ρ &gt; λ, the penalized and constrained objectives have exactly the same minimizers.

**How the definition helps.** At an infeasible point ρ·max(0, g(x)) &gt; λg(x), so the penalized value exceeds f(x) + λg(x) ≥ m (our own). At feasible points the penalty vanishes, so the minimizers are exactly the constrained ones (our own). The quadratic penalty fails: for minimizing −x subject to x ≤ 0, its minimizer 1/(2ρ) is infeasible for every ρ &gt; 0 (our own).

**Wikipedia:** [Penalty method](https://en.wikipedia.org/wiki/Penalty_method). It says: “Common penalty functions in constrained optimization are the quadratic penalty function and the deadzone-linear penalty function.”

**Sources:** none listed. No primary source with a working link was found.

### Perturbation duality gives weak duality through affine lower bounds

**Remember:** The best affine lower bound cannot exceed the value at zero.

*True by definition.* MSC 49N15 (Duality theory (optimization)), 90C46, 90C25. arXiv math.OC. Level 3: graduate.

**Definition.** Embed the problem of minimizing f on ℝⁿ in a family: choose F(x,y) with y ∈ ℝᵏ and F(x,0) = f(x), and let v(y) = infₓ F(x,y) be the optimal value at perturbation y. The perturbation dual value is the largest value at zero of an affine function lying below v everywhere.

**Problem.** The perturbation dual value never exceeds the primal value v(0). The two are equal when v is convex, never −∞, finite at zero and lower semicontinuous at zero.

**How the definition helps.** Every affine function below v is at most v(0) at zero, so the dual value is at most v(0). For equality, the finite-dimensional biconjugate theorem says the supremum of affine lower bounds is the closed convex envelope of v, which agrees with v at zero under the stated conditions (our own).

**Wikipedia:** [Perturbation function](https://en.wikipedia.org/wiki/Perturbation_function). It says: “For any choice of perturbation function F weak duality holds.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970)](https://doi.org/10.1515/9781400873173)

### Beliefs restore the Markov property

**Remember:** Summarize the history by the odds of each hidden state.

*Makes the theorem clean to state or prove.* MSC 49N30 (Problems with incomplete information (optimization)), 93C41. arXiv math.OC, cs.SY. Level 3: graduate.

**Definition.** The belief is the vector of conditional probabilities of each hidden state given all past actions and observations. Bayes’ rule updates it from the current belief, action and observation alone, so it can replace the full history as the state (our own).

**Problem.** In a finite-horizon partially observed Markov decision process with finite state, action and observation sets and bounded additive Markov rewards, an optimal rule uses only the current belief and time. Its value follows by maximizing expected current reward plus expected future value at each step.

**How the definition helps.** The belief gives the expected current reward and the law of the next belief, so beliefs form an ordinary Markov decision process (our own). Backward induction on that process gives the optimal rule and its value (our own).

**Wikipedia:** [Partially observable Markov decision process](https://en.wikipedia.org/wiki/Partially_observable_Markov_decision_process). It says: “A Markovian belief state allows a POMDP to be formulated as a Markov decision process where every belief is a state.”

**Sources:**

- [R. D. Smallwood and E. J. Sondik, The Optimal Control of Partially Observable Markov Processes over a Finite Horizon (1973)](https://doi.org/10.1287/opre.21.5.1071)

### De Giorgi’s divergence definition of perimeter makes it lower semicontinuous

**Remember:** A supremum of continuous tests is lower semicontinuous.

*True by definition.* MSC 49Q20 (Variational problems in a geometric measure-theoretic setting), 26B30. arXiv math.AP, math.MG. Level 3: graduate.

**Definition.** The perimeter of a measurable set E in ℝⁿ is the supremum of ∫ over E of div φ, taken over smooth compactly supported vector fields φ with \|φ\| ≤ 1. Each such integral depends continuously on E in L¹, and for a smooth bounded set the supremum is the area of its boundary.

**Problem.** Let the indicator functions of measurable sets Eₖ converge in L¹ to that of E. Then the perimeter of E is at most the lower limit of the perimeters of Eₖ.

**How the definition helps.** A supremum of continuous functions is lower semicontinuous, so the bound follows at once. Boundary area gives no meaning for a rough limit set (our own comparison). Agreement with area for smooth sets follows from the divergence theorem with fields that approximate the outward normal (our own).

**Wikipedia:** [Bounded variation](https://en.wikipedia.org/wiki/Bounded_variation). It says: “which is exactly the definition of lower semicontinuity.”

**Sources:** none listed. No primary source with a working link was found.

### Higher moments give Wasserstein compactness

**Remember:** A higher moment leaves too little far-away mass to cost anything.

*Rules out counterexamples.* MSC 49Q22 (Optimal transportation). arXiv math.OC. Level 3: graduate.

**Definition.** The p-Wasserstein distance between two probability measures is the pth root of the least mean pth power of travel distance over joint laws with those coordinate laws. A bound K on the qth moment, the mean qth power of distance from the origin, with q &gt; p, leaves mass at most K/Rᵠ beyond radius R and pth moment at most K·Rᵖ⁻ᵠ there (our own).

**Problem.** For 1 ≤ p &lt; q, probability measures on Euclidean space with qth moment at most K form a compact set in p-Wasserstein distance.

**How the definition helps.** The tail bound gives tightness, so Prokhorov’s theorem gives a weakly convergent subsequence, whose limit keeps the qth moment bound (our own). The uniformly small pth moment beyond R upgrades weak convergence to p-Wasserstein convergence (our own). With only a pth moment bound, mass n⁻ᵖ at n and the rest at zero loses its whole moment in the weak limit (our own).

**Paper or page:** [Viscosity Solutions of Fully second-order HJB Equations in the Wasserstein Space](https://arxiv.org/abs/2501.01612). It says: “Let K &gt; 0 and p₂ &gt; p₁ ≥ 1.”

**Sources:** none listed. No primary source with a working link was found.

### Kantorovich–Rubinstein duality makes Wasserstein distance W₁ jointly convex

**Remember:** Each test is linear in the laws, so their supremum is convex.

*True by definition.* MSC 49Q22 (Optimal transportation), 60B10. arXiv math.PR, math.FA. Level 3: graduate.

**Definition.** For laws μ and ν with finite first moments on a complete separable metric space, W₁(μ,ν) is the supremum of ∫f dμ − ∫f dν over functions f with Lipschitz constant at most one. Each such difference is linear in the pair (μ,ν) (our own), and the Kantorovich–Rubinstein theorem says the supremum equals the least mean distance E\[d(X,Y)\] over couplings.

**Problem.** Mix two pairs of probability measures with the same weight in each coordinate. The W₁ distance of the mixed pair is at most the weighted average of the two original distances.

**How the definition helps.** A supremum of linear functions is convex, and this is joint convexity (our own). Without the dual formula, one instead mixes couplings whose costs are close to the two original distances (our own).

**Wikipedia:** [Wasserstein metric](https://en.wikipedia.org/wiki/Wasserstein_metric). It says: “This form shows that W₁ is an integral probability metric.”

**Sources:**

- [Cédric Villani, Optimal Transport: Old and New, Springer (2009), Theorem 5.10](https://doi.org/10.1007/978-3-540-71050-9)

### Lipschitz maps bound the first Wasserstein distance

**Remember:** Push a coupling forward, and its distances stretch at most L.

*True by definition.* MSC 49Q22 (Optimal transportation). arXiv math.OC. Level 3: graduate.

**Definition.** The first Wasserstein distance is the least mean travel distance over couplings, joint distributions whose two coordinates have the given laws. Applying a map φ to both coordinates of a coupling of μ₁ and μ₂ gives a coupling of their images φ(μ₁) and φ(μ₂), the laws of φ(X).

**Problem.** Consider two Euclidean probability measures with finite mean distance from the origin. A map that stretches distances by at most L stretches their first Wasserstein distance by at most L.

**How the definition helps.** If φ stretches distances by at most L, the image coupling has mean travel distance at most L times the original. Taking the infimum over couplings gives the claim (our own).

**Paper or page:** [On the Use of the Kantorovich-Rubinstein Distance for Dimensionality Reduction](https://arxiv.org/abs/2309.09442). It says: “W\_\\mathcal{Y}(\\varphi(\\mu<sub>1</sub>),\\varphi(\\mu<sub>2</sub>)) \\leq k\\, W\_\\mathcal{X}(\\mu<sub>1</sub>,\\mu<sub>2</sub>).”

**Sources:** none listed. No primary source with a working link was found.

### The dual definition of Wasserstein distance gives its triangle inequality

**Remember:** Split each test at the middle measure, then take the supremum.

*True by definition.* MSC 49Q22 (Optimal transportation), 60B10. arXiv math.PR, math.FA. Level 3: graduate.

**Definition.** On a complete separable metric space, W₁(p,q) is the supremum of ∫f dp − ∫f dq over 1-Lipschitz functions f, those that change by at most the distance between their inputs. By the Kantorovich–Rubinstein theorem this equals the least expected distance between jointly sampled points with laws p and q.

**Problem.** For any three probability measures with finite first moments on a complete separable metric space, W₁(p, r) ≤ W₁(p, q) + W₁(q, r).

**How the definition helps.** For each f, ∫f dp − ∫f dr = (∫f dp − ∫f dq) + (∫f dq − ∫f dr), and each part is at most the matching W₁ (our own explanation). Taking the supremum over f gives the triangle inequality. The coupling proof instead glues two couplings into a law on triples (our own comparison).

**nLab:** [Kantorovich monad](https://ncatlab.org/nlab/show/Kantorovich+monad), [transport plan](https://ncatlab.org/nlab/show/transport+plan). It says: “where the supremum (which is usually not attained) is taken over the set of 1-Lipschitz functions”

**Wikipedia:** [Wasserstein metric](https://en.wikipedia.org/wiki/Wasserstein_metric). It says: “Kantorovich and Rubinstein proved a duality representation theorem for general cost functions”

**Sources:**

- [P. Clement and W. Desch, An elementary proof of the triangle inequality for the Wasserstein metric, Proceedings of the AMS 136 (2008)](https://doi.org/10.1090/S0002-9939-07-09020-X)

### The dual definition of W₁ makes common mass cancel exactly

**Remember:** Adding the same mass to both measures cancels in every test.

*True by definition.* MSC 49Q22 (Optimal transportation), 60B10. arXiv math.PR, math.MG. Level 3: graduate.

**Definition.** Define W₁(μ,ν) as the supremum of ∫f dμ − ∫f dν over functions f with Lipschitz constant at most one. Each difference is linear in the measures, so mass added to both cancels; by Kantorovich–Rubinstein duality the supremum equals the least mean distance over couplings.

**Problem.** Take probability measures μ, ν and ρ with finite first moments on a complete separable metric space. For t in \[0,1\], W₁(tμ + (1−t)ρ, tν + (1−t)ρ) = t·W₁(μ,ν).

**How the definition helps.** The ρ terms cancel in every test integral, and t factors out of the supremum (our own argument). With couplings the upper bound is easy, but the lower bound is not, since an optimal coupling may move the shared mass (our own comparison).

**Wikipedia:** [Wasserstein metric](https://en.wikipedia.org/wiki/Wasserstein_metric). It says: “Kantorovich and Rubinstein proved a duality representation theorem for general cost functions”

**Sources:** none listed. No primary source with a working link was found.

### Tight transport pairs certify optimality

**Remember:** Move mass only where the two potentials add to the cost.

*True by definition. Confidence: medium.* MSC 49Q22 (Optimal transportation), 49N15. arXiv math.OC. Level 3: graduate.

**Definition.** On finite nonempty source and target sets with real costs c(x,y), a source potential a has cost transform b(y) = minₓ(c(x,y) − a(x)), so a(x) + b(y) ≤ c(x,y) for every pair. A pair is tight if equality holds.

**Problem.** A transport plan distributes nonnegative mass over pairs, with prescribed source and target totals. A plan supported on tight pairs has minimum cost among all plans with those totals.

**How the definition helps.** Summing a(x) + b(y) ≤ c(x,y) against any plan bounds its cost below by a number that depends only on the prescribed totals (our own). A plan on tight pairs attains this bound, so it is optimal (our own). Finite linear programming duality gives the converse, a potential for each optimal plan.

**Paper or page:** [Optimal transport and regularity of weak Kantorovich potentials on a globally hyperbolic spacetime](https://arxiv.org/abs/2412.01012v2). It says: “If $\\varphi $ is any Kantorovich potential, then it holds that $\\varphi <sup>c</sup>(y)-\\varphi (x)=c(x,y)$ $\\pi $-a.e.”

**Sources:** none listed. No primary source with a working link was found.

### Transport plans are optimal exactly when no cyclic reassignment lowers cost

**Remember:** An optimal shipment has no cheaper cycle of reassignments.

*Makes the theorem clean to state or prove.* MSC 49Q22 (Optimal transportation). arXiv math.OC. Level 3: graduate.

**Definition.** A set of pairs is c-cyclically monotone if, for every finite list (x₁,y₁),…,(xₙ,yₙ) of its pairs, shifting the destinations cyclically never lowers the total cost. A transport plan from μ to ν is a probability measure on pairs with marginals μ and ν.

**Problem.** Let X and Y be Polish spaces, which are complete separable metric spaces, and let the cost c be continuous with values in \[0,∞\]. A transport plan of finite cost is optimal exactly when it is concentrated on a c-cyclically monotone set.

**How the definition helps.** If the support had a cheaper cycle, continuity would let a small mass be rerouted along it at lower cost, so optimal plans are cyclically monotone (our own). Pratelli’s Theorem B supplies the converse for continuous costs, including infinite values.

**Paper or page:** [60 years of cyclic monotonicity: a survey](https://arxiv.org/abs/2308.07682v2). It says: “a finite transport plan γ ∈ Π(μ,ν) is optimal if and only if it is concentrated on a c-cyclically monotone set.”

**Sources:**

- [L. De Pascale, A. Kausamo, K. Wyczesany, 60 years of cyclic monotonicity: a survey, arXiv:2308.07682v2 (2023)](https://arxiv.org/abs/2308.07682v2)
- [Aldo Pratelli, On the sufficiency of c-cyclical monotonicity for optimality of transport plans, Mathematische Zeitschrift (2008)](https://doi.org/10.1007/s00209-007-0191-7)

### Distance inequalities compare gradient flows

**Remember:** Compare two flows in both directions and their energy terms cancel.

*True by definition.* MSC 49J45 (Methods involving semicontinuity and convergence; relaxation). arXiv math.AP, math.OC. Level 4: research.

**Definition.** A locally absolutely continuous path x in a metric space solves the evolution variational inequality for F and λ if, for every point y and almost every t &gt; 0, ½·d/dt d(x(t),y)² + (λ/2)·d(x(t),y)² ≤ F(y) − F(x(t)). So every comparison point y bounds how fast the squared distance to y can grow, by the energy gap F(y) − F(x(t)).

**Problem.** Let F be finite and lower semicontinuous, and let x and z be solutions continuous at their initial points. For every t ≥ 0 they satisfy d(x(t),z(t)) ≤ exp(−λt)d(x(0),z(0)).

**How the definition helps.** Use each solution as the comparison point for the other and add, so the energy gaps F(z) − F(x) and F(x) − F(z) cancel (our own). A doubling-of-variables argument with two independent times makes this rigorous and leaves D′ ≤ −2λD for D(t) = d(x(t),z(t))² (our own). Integration and continuity at time zero give the bound (our own).

**Paper or page:** [Stability of a class of action functionals depending on convex functions](https://arxiv.org/abs/2106.10908v1). It says: “{\\mathsf{d}}(G<sub>t</sub><sup>f</sup> x<sub>0</sub>,G<sub>t</sub><sup>f</sup> x<sub>1</sub>)\\le e<sup>-\\lambda t</sup>{\\mathsf{d}}(x<sub>0</sub>,x<sub>1</sub>)\\quad \\text{for every $t\\in \[0,+\\infty )$}.”

**Sources:** none listed. No primary source with a working link was found.

### A convex minimizer is unique exactly when a radial-cone kernel test passes

**Remember:** Look for a real segment of equal optima, not a limiting direction.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49J53 (Set-valued and variational analysis), 90C25, 90C46. arXiv math.OC. Level 4: research.

**Definition.** The radial cone of a convex set C at x ∈ C is the set of all t(c − x) with c ∈ C and t ≥ 0, the directions in which a positive step stays in C. Unlike the tangent cone, it adds no limits of such directions.

**Problem.** Minimize f(Φx) + g(x) in Euclidean space with linear Φ, smooth strictly convex f and proper closed convex g, and put ȳ = −Φ\*∇f(Φx̄) at a finite optimum x̄. The optimum is unique exactly when ker Φ meets the radial cone of ∂g\*(ȳ) at x̄ only in zero.

**How the definition helps.** Strict convexity of f makes Φx the same at every optimum, and optimality puts every optimum in ∂g\*(ȳ) (our own). Conversely, on ∂g\*(ȳ) the function g changes by the pairing of the move with ȳ, which vanishes on ker Φ, so each such move gives another optimum (our own). A nonzero radial direction in ker Φ therefore reaches a second optimum after a positive step (our own).

**Paper or page:** [Solution uniqueness of convex optimization problems via the radial cone](https://arxiv.org/abs/2401.10346v1), [Solution uniqueness of convex optimization problems via the radial cone](https://arxiv.org/abs/2401.10346v1). It says: “Our characterizations of solution uniqueness are in terms of the radial cone.”

**Sources:**

- [Jalal Fadili, Tran T. A. Nghia, Duy Nhat Phan, Solution uniqueness of convex optimization problems via the radial cone, arXiv:2401.10346v1 (2024)](https://arxiv.org/abs/2401.10346v1)
- [Jalal Fadili, Tran T. A. Nghia, Duy Nhat Phan, Solution Uniqueness of Convex Optimization Problems via the Radial Cone, Journal of Optimization Theory and Applications (2025)](https://doi.org/10.1007/s10957-025-02723-3)

### Accumulated reward makes laws recursive

**Remember:** Carry the running total as part of the state.

*Makes the theorem clean to state or prove.* MSC 49L20 (Dynamic programming in optimal control and differential games), 93E20. arXiv math.OC, cs.SY. Level 4: research.

**Definition.** Enlarge the state to the pair of current state and total reward earned so far. The lifted process takes the joint probability distribution of this pair as its state, so its value at the final time is the joint law of final state and total reward.

**Problem.** Consider the paper’s finite-horizon decision process with finitely many states and a compact set of actions. For every original rule, successive updates of this distribution reproduce the joint distribution of final state and total reward.

**How the definition helps.** Condition the original rule’s action on the current state and running total to get a randomized rule on the pair (our own). Starting from the original state law with running total zero, this rule reproduces each one-step joint law, so induction reproduces the terminal one (our own).

**Paper or page:** [Yet Another Distributional Bellman Equation](https://arxiv.org/abs/2505.21098v2). It says: “For every policy σ = (σₙ) in the original MDP model, there exists an action sequence π = (πₙ) in the lifted MDP”

**Sources:**

- [Yet Another Distributional Bellman Equation](https://arxiv.org/abs/2505.21098v2)

### Randomization mixes occupation measures

**Remember:** Mix the rules before starting, and their expected visit counts mix.

*True by definition.* MSC 49N25 (Impulsive optimal control problems), 93E20. arXiv math.OC, cs.SY. Level 4: research.

**Definition.** In the decision process associated with an impulse control problem, which chooses when to intervene and how, the occupation measure of a rule records the expected number of visits to each set of state–action pairs. A randomized rule may draw at the start which rule to follow, so its visit counts are the weighted average of theirs (our own).

**Problem.** For the discounted impulse control problem in the paper, the occupation measures of randomized rules in the associated decision process form a convex set.

**How the definition helps.** Conditioning on the initial draw writes the mixed rule’s visit counts as the weighted average of the two rules’ counts, for every set of pairs (our own). The work lies in representing impulse controls by rules of the decision process and admitting the initial random choice (our own).

**Paper or page:** [Primal-dual programs for the constrained optimal impulse control: discounted model](https://arxiv.org/abs/2504.18387v1). It says: “The set of all occupation measures in the induced MDP is convex”

**Sources:**

- [Primal-dual programs for the constrained optimal impulse control: discounted model](https://arxiv.org/abs/2504.18387v1)

### Varifold stationarity survives weak limits

**Remember:** Keep tangent planes so the area variation passes to the limit.

*True by definition. Confidence: medium.* MSC 49Q15 (Geometric measure and integration theory, integral and normal currents in optimization), 58E12. arXiv math.DG, math.AP. Level 4: research.

**Definition.** A k-dimensional varifold on an open subset of ℝⁿ is a locally finite Radon measure V on pairs (x,S) of a point and an unoriented k-dimensional linear subspace. It is stationary if ∫ div<sub>S</sub> X(x) dV(x,S) = 0 for every smooth compactly supported vector field X, where div<sub>S</sub> X, the trace of the derivative of X on S, is continuous in the pair (x,S).

**Problem.** A weak limit of stationary surface varifolds is stationary.

**How the definition helps.** Because the plane is recorded, the first variation is the integral of a continuous compactly supported function, and weak convergence means convergence of all such integrals (our own explanation). So the limit’s first variation is a limit of zeros. The first variation formula identifies this test with stationarity under smooth deformations.

**Paper or page:** [Weyl Law and convergence in the classical limit for min-max nonlocal minimal surfaces](https://arxiv.org/abs/2406.12162v4). It says: “the limit integral stationary varifold”

**Sources:**

- [W. K. Allard, On the First Variation of a Varifold (1972)](https://doi.org/10.2307/1970868)

### Adjacent costs split martingale transport

**Remember:** A sum of pair costs can be minimized one pair at a time.

*Makes the theorem clean to state or prove.* MSC 49Q22 (Optimal transportation). arXiv math.OC. Level 4: research.

**Definition.** A martingale transport is a joint law of successive values with a prescribed law at each time, in which the mean of the next value given the past equals the current value. An additive cost is a sum of costs of consecutive pairs, so its expectation depends only on the laws of consecutive pairs.

**Problem.** Consider finitely many distributions on the real line and continuous pair costs bounded below. Suppose each consecutive pair has a martingale transport of least finite cost. Then these pairwise optimizers can form one optimal transport over all times.

**How the definition helps.** So the expected cost is at least the sum of the pairwise least costs (our own). Glue the optimal pairs by drawing each next value from the optimal pair’s conditional law given the current value, which keeps every chosen pair and the martingale property (our own). The glued martingale attains the bound (our own).

**nLab:** [transport plan](https://ncatlab.org/nlab/show/transport+plan). It says: “the measure r has p and q as marginals, in the sense that for all A ∈ 𝒜 and B ∈ ℬ,”

**Paper or page:** [Remarks on multi-period martingale optimal transport](https://arxiv.org/abs/2506.05505). It says: “is optimal for the multi-period MOT problem with cost”

**Sources:**

- [Remarks on multi-period martingale optimal transport](https://arxiv.org/abs/2506.05505)

### Means fix binary martingale transport

**Remember:** Two possible destinations leave no freedom once you fix the mean.

*Rules out counterexamples.* MSC 49Q22 (Optimal transportation). arXiv math.OC. Level 4: research.

**Definition.** A martingale coupling of two laws is a joint law with those coordinate laws in which the mean of the destination given the source equals the source. If the destination takes only the values a &lt; b, a source x must send probability (x − a)/(b − a) to b (our own).

**Problem.** Consider distributions on the real line for which a martingale coupling exists. If the destination takes only two values, the martingale coupling is unique.

**How the definition helps.** So the conditional law at every source is fixed, and with the source law it fixes the coupling (our own). Plain couplings are not unique: with both laws uniform on {−1,1}, matching and swapping both work, but only matching keeps the mean (our own).

**Paper or page:** [Remarks on multi-period martingale optimal transport](https://arxiv.org/abs/2506.05505). It says: “the set of martingale couplings \\Pi<sub>M</sub>(\\mu<sub>X</sub>, \\mu<sub>Y</sub>) is a singleton.”

**Sources:** none listed. No primary source with a working link was found.

### Path boundedness characterizes sets carrying transport potentials when costs can be infinite

**Remember:** Control every route between two endpoints, not just closed routes.

*Makes the theorem clean to state or prove.* MSC 49Q22 (Optimal transportation), 26B25. arXiv math.OC. Level 4: research.

**Definition.** For a cost c valued in (−∞,∞\], let G be a set of finite-cost pairs, and give a path (x₀,y₀),…,(xₙ,yₙ) in G the sum of c(xᵢ,yᵢ) − c(xᵢ₊₁,yᵢ) over i &lt; n. G is path bounded if, for each ordered pair of endpoints, the sums of all paths between them have a finite upper bound (our own).

**Problem.** For such costs, G admits a supporting potential of the paper’s class, a φ with φ(x) − φ(z) ≥ c(x,y) − c(z,y) for each (x,y) ∈ G and each first coordinate z, exactly when G is path bounded. For finite costs, cyclic monotonicity implies path boundedness, which recovers the Rockafellar–Rüschendorf theorem.

**How the definition helps.** A supporting potential bounds each increment by φ(xᵢ) − φ(xᵢ₊₁), so the path sum telescopes to at most φ(x₀) − φ(xₙ) (our own). The paper proves the converse by solving the resulting system of inequalities. With finite costs, one return edge closes the path, so cyclic monotonicity bounds its sum by minus the return increment (our own).

**Paper or page:** [A Rockafellar-type theorem for non-traditional costs](https://arxiv.org/abs/2011.13263v4), [A Rockafellar-type theorem for non-traditional costs](https://arxiv.org/abs/2011.13263v4). It says: “We note that any set admitting a potential must be c-path-bounded, and this condition replaces c-cyclic monotonicity from the classical theory, i.e. when the cost is real-valued.”

**Sources:**

- [Shiri Artstein-Avidan, Shay Sadovsky, Katarzyna Wyczesany, A Rockafellar-type theorem for non-traditional costs, Advances in Mathematics 395 (2022)](https://arxiv.org/abs/2011.13263v4)

### Slicing carries metric properties from one dimension to every dimension

**Remember:** Average the one-dimensional costs, and the metric axioms carry over.

*True by definition.* MSC 49Q22 (Optimal transportation). arXiv cs.LG, math.OC. Level 4: research.

**Definition.** For finite positive measures on ℝᵈ, the sliced unbalanced cost averages, over unit directions θ drawn uniformly from the sphere, the one-dimensional unbalanced cost between the projections of the two measures by x ↦ ⟨θ,x⟩.

**Problem.** Suppose the one-dimensional unbalanced cost is non-negative, symmetric and definite. Suppose also that its pth root satisfies the triangle inequality for some p ≥ 1. Then the sliced cost on ℝᵈ has the same properties.

**How the definition helps.** Averaging keeps nonnegativity and symmetry, and Minkowski’s inequality carries the triangle inequality for the pth root through the integral (our own). Zero sliced cost forces equal projections for almost every θ, and continuity of Fourier transforms extends this to every θ (our own). The Cramér–Wold theorem then identifies the measures (our own).

**Paper or page:** [Slicing Unbalanced Optimal Transport](https://arxiv.org/abs/2306.07176v2). It says: “Then, SUOT is respectively non-negative, symmetric and/or definite on ℳ₊(ℝᵈ) × ℳ₊(ℝᵈ).”

**Sources:**

- [Clément Bonet, Kimia Nadjahi, Thibault Séjourné, Kilian Fatras, Nicolas Courty, Slicing Unbalanced Optimal Transport, arXiv:2306.07176v2 (2025)](https://arxiv.org/abs/2306.07176v2)

### Weak optimal transport makes the Brenier–Strassen theorem a short corollary

**Remember:** Let the cost see the whole conditional law, not one destination.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49Q22 (Optimal transportation), 60B05, 52A41. arXiv math.PR, math.OC. Level 4: research.

**Definition.** For laws μ and ν, weak transport minimizes ∫C(x,πₓ) dμ(x) over joint laws π with marginals μ and ν, where the cost may depend on the whole conditional destination law πₓ given x. The quadratic barycentric cost C(x,πₓ) = \|x − ∫y dπₓ(y)\|² charges only for the distance from x to the conditional mean.

**Problem.** For laws μ and ν on ℝᵈ with finite second moments and the quadratic barycentric cost, the map x ↦ mean(πₓ) of an optimal coupling is unique μ-almost everywhere, is the gradient of a convex function, and is 1-Lipschitz. This is the Brenier–Strassen theorem of Gozlan and Juillet, in our own summary.

**How the definition helps.** As a weak transport problem, it falls under the paper’s general duality theorem, which gives strong duality and describes optimizers by complementary slackness. The abstract says this yields a concise derivation of the Brenier–Strassen theorem. Proving the general theorem for non-linear costs is the real work (our own).

**Paper or page:** [The Fundamental Theorem of Weak Optimal Transport](https://arxiv.org/abs/2501.16316v1). It says: “As applications we provide concise derivations of the Brenier–Strassen theorem, the convex Kantorovich–Rubinstein formula and the structure theorem of entropic optimal transport.”

**Sources:**

- [Mathias Beiglböck, Gudmund Pammer, Lorenz Riess, Stefan Schrott, The Fundamental Theorem of Weak Optimal Transport, arXiv:2501.16316 (2025)](https://arxiv.org/abs/2501.16316v1)
- [Nathaël Gozlan, Cyril Roberto, Paul-Marie Samson, Prasad Tetali, Kantorovich duality for general transport costs and applications, Journal of Functional Analysis (2017)](https://doi.org/10.1016/j.jfa.2017.08.015)
- [Nathaël Gozlan, Nicolas Juillet, On a mixture of Brenier and Strassen theorems, Proceedings of the London Mathematical Society (2020)](https://doi.org/10.1112/plms.12302)

### The Helmholtz operator decides which equations come from a Lagrangian

**Remember:** An equation is variational exactly when the next map kills it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 49S05 (Variational principles of physics), 58A20, 58E30. arXiv math.DG, math-ph. Level 4: research.

**Definition.** The Euler–Lagrange complex extends the horizontal differential on forms in fields and their derivatives by two more maps: Lagrangians go to their Euler–Lagrange source forms, and source forms go to their Helmholtz obstructions. Exactness at source forms means a source form has zero Helmholtz obstruction exactly when it is an Euler–Lagrange form.

**Problem.** A system given by a source form on a trivial vector bundle over Minkowski spacetime comes from a Lagrangian exactly when the Helmholtz operator annihilates that form. This characterizes the inverse problem of the calculus of variations.

**How the definition helps.** The theorem is exactness at source forms, read as a statement about equations. Anderson’s exactness theorem for the variational bicomplex supplies this exactness on the stated bundle. The connection to the inverse problem is our own.

**nLab:** [A first idea of quantum field theory -- Lagrangians](https://ncatlab.org/nlab/show/A+first+idea+of+quantum+field+theory+--+Lagrangians). It says: “By definition of exact sequence, the Helmholtz operator detects whether a partial differential equation on field histories, induced by a variational differential form”

**Sources:**

- [Ian M. Anderson, Thomas Duchamp, On the existence of global variational principles, American Journal of Mathematics 102 (1980) 781–868](https://doi.org/10.2307/2374195)
