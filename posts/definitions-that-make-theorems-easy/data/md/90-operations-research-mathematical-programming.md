### Basic feasible solutions are vertices, so linear programs need finite search

**Remember:** Some optimum always sits at a vertex, and vertices are finitely many.

*Makes the theorem clean to state or prove.* MSC 90C05 (Linear programming), 90C49. arXiv math.OC. Level 2: later undergraduate.

**Definition.** A linear program in standard form minimizes cᵀx subject to Ax = b and x ≥ 0. A basic feasible solution is a feasible x whose nonzero entries belong to linearly independent columns of A. With n variables and m equations there are at most 'n choose m' of them.

**Problem.** If a linear program in standard form has an optimal solution, then it has an optimal basic feasible solution. Each basic feasible solution is a vertex of the feasible polyhedron.

**How the definition helps.** The algebraic definition can be checked with linear algebra, and its geometric meaning, a vertex, is where optima lie. Together they turn optimization into a finite search. A linear objective on a convex polyhedron with vertices reaches its best value at a vertex, if it reaches it at all. The page says that the simplex method travels from one basic feasible solution to another until it finds an optimum. What stays hard is that there can be exponentially many vertices (our own). At degenerate vertices the simplex method can also cycle, unless a pivoting rule such as Bland's rule is used (our own).

**Wikipedia:** [Basic feasible solution](https://en.wikipedia.org/wiki/Basic_feasible_solution), [Linear programming](https://en.wikipedia.org/wiki/Linear_programming). It says: “Geometrically, each BFS corresponds to a vertex of the polyhedron of feasible solutions. If there exists an optimal solution, then there exists an optimal BFS.”

**Sources:** none listed. No primary source with a working link was found.

### Total unimodularity makes every vertex of a linear program integral

**Remember:** Determinants ±1 mean Cramer's rule never divides, so vertices are integers.

*True by definition.* MSC 90C10 (Integer programming), 90C57, 05B20. arXiv math.OC, math.CO. Level 2: later undergraduate.

**Definition.** A matrix is totally unimodular if every square submatrix has determinant 0, +1 or −1. Examples are the incidence matrix of a bipartite graph and the incidence matrix of a directed graph.

**Problem.** If A is totally unimodular and b is an integer vector, every vertex of {x : Ax ≤ b} has integer entries. So the linear program 'maximize cᵀx subject to Ax ≤ b' has an integer optimum whenever it has an optimum, for every c.

**How the definition helps.** The definition asks exactly for the determinants that Cramer's rule divides by, so vertices come out integral. A vertex solves a square subsystem Bx = b′ taken from the rows of A, with B invertible (our own explanation). Cramer's rule writes each entry of x as a determinant divided by det B = ±1, so x is integral. Hoffman and Kruskal proved a converse in 1956 for the polyhedra {x ≥ 0 : Ax ≤ b} (our own; not on the page). If these are integral for every integer b, then the integer matrix A is totally unimodular. So integer problems with such matrices, like bipartite matching, can be solved as linear programs. What stays hard is recognizing total unimodularity efficiently, which uses Seymour's decomposition of regular matroids (our own link).

**Wikipedia:** [Unimodular matrix](https://en.wikipedia.org/wiki/Unimodular_matrix). It says: “Hence if A is totally unimodular and b is integral, every extreme point of the feasible region (e.g. {x \| Ax ≥ b}) is integral and thus the feasible region is an integral polyhedron.”

**Sources:**

- [A. J. Hoffman and J. B. Kruskal, Integral boundary points of convex polyhedra, in Linear Inequalities and Related Systems, Annals of Mathematics Studies 38 (1956), 223–246](https://doi.org/10.1515/9781400881987-014)

### Negative entropy turns mirror descent into multiplicative exponential weights

**Remember:** Exponentiate the negative gradient, multiply by the old probabilities, then normalize.

*True by definition.* MSC 90C25 (Convex programming), 65K05. arXiv cs.LG, math.OC. Level 3: graduate.

**Definition.** Mirror descent steps against a gradient estimate, with a penalty for moving far from the current point. The penalty is the Bregman divergence of a convex function Ψ, the gap between Ψ and its tangent-plane approximation. For negative entropy Ψ(p) = ∑ p(x) log p(x) on probability vectors, this penalty is the relative entropy.

**Problem.** Take a step size η and a gradient estimate g. With negative entropy, the mirror descent step makes the new p(x) proportional to p(x) exp(−η g(x)). Dividing by the sum over x makes the result a probability vector.

**How the definition helps.** Negative entropy makes the penalty a sum of one-variable terms, so the minimization splits by coordinate. Our own proof sketch sets the derivative of each term to zero. This makes the new log-probability equal to the old one minus η g(x), plus a constant. The constant comes from the constraint that the probabilities sum to one. Exponentiating gives the multiplicative update, which is the classical exponential weights algorithm.

**Paper or page:** [Distances for Markov chains from sample streams](https://arxiv.org/abs/2505.18005v1). It says: “When 𝒵 = Δ\_𝒳 is the probability simplex on a finite set 𝒳 and Ψ is the negative entropy defined as Ψ(p) = ∑ₓ p(x) log p(x), p ∈ Δ\_𝒳, the OSMD update reduces to”

**Sources:**

- [Sergio Calo, Anders Jonsson, Gergely Neu, Ludovic Schwartz, Javier Segovia-Aguas, Distances for Markov chains from sample streams, arXiv:2505.18005v1 (2025)](https://arxiv.org/abs/2505.18005v1)

### The subgradient definition makes proximal fixed points minimizers

**Remember:** A proximal step stays put exactly when zero is a subgradient.

*True by definition. Confidence: medium.* MSC 90C25 (Convex programming), 65K10, 47H09. arXiv math.OC. Level 3: graduate.

**Definition.** Take a convex function f on a real Hilbert space with a closed epigraph, at least one finite value, and no value of −∞. A subgradient q at x with finite f(x) satisfies f(z) ≥ f(x) + ⟨q, z − x⟩ for all z. Define p = prox(v) by requiring v − p to be a subgradient of f at p. The usual definition instead minimizes f(x) + ½‖x − v‖² over x.

**Problem.** A point x satisfies prox(x) = x exactly when x minimizes f.

**How the definition helps.** The subgradient definition turns a fixed point directly into the condition that zero is a subgradient at x. That condition says f(x) is a global minimum. Our own comparison is that the minimization definition first needs an optimality argument to remove the quadratic penalty. To relate the definitions, first prove that the quadratic problem has a unique answer. Then show that its optimality condition is the subgradient test.

**Wikipedia:** [Proximal operator](https://en.wikipedia.org/wiki/Proximal_operator). It says: “Fixed points of prox<sub>f</sub> are minimizers of f”

**Sources:**

- [Neal Parikh and Stephen Boyd, Proximal Algorithms, Foundations and Trends in Optimization 1 (2014)](https://doi.org/10.1561/2400000003)

### A strictly feasible point closes the duality gap in convex programs

**Remember:** One strictly feasible point makes the primal and dual optimal values agree.

*Rules out counterexamples.* MSC 90C46 (Optimality conditions and duality in mathematical programming), 90C25. arXiv math.OC. Level 3: graduate.

**Definition.** A convex program minimizes a convex function under convex inequality constraints and linear equations. Slater's condition holds when some point satisfies every nonlinear inequality strictly and every linear constraint exactly. The dual problem maximizes the lowest value of the Lagrangian, which is the objective plus the weighted constraints. The weights on the inequalities must be nonnegative.

**Problem.** Strong duality says that the optimal value of a convex program equals the optimal value of its dual. It can fail for convex programs in general. Under Slater's condition it holds, and a finite dual value is attained.

**How the definition helps.** A strictly feasible point leaves room inside the feasible set, and that room makes Lagrange multipliers exist (our own explanation). In the proof, a hyperplane separates the attainable values from better ones, and the interior point stops it from being vertical. Our own example: minimize x subject to x² ≤ 0. The only feasible point is 0, so no point is strictly feasible. The dual values −1/(4λ) approach 0, but no multiplier λ reaches it, so the dual optimum is not attained. Boyd and Vandenberghe give a convex program with primal value 1 and dual value 0, where Slater's condition also fails (our own). What stays hard is to find a strictly feasible point, which is itself an optimization problem.

**Wikipedia:** [Slater's condition](https://en.wikipedia.org/wiki/Slater%27s_condition), [Strong duality](https://en.wikipedia.org/wiki/Strong_duality). It says: “In particular, if Slater's condition holds for the primal problem, then the duality gap is zero, and if the dual value is finite then it is attained.”

**Sources:**

- [M. Slater, Lagrange Multipliers Revisited, Cowles Commission Discussion Paper No. 403 (1950)](https://cowles.yale.edu/sites/default/files/files/pub/d00/d0080.pdf)
- [S. Boyd and L. Vandenberghe, Convex Optimization, Cambridge University Press (2004)](https://web.stanford.edu/~boyd/cvxbook/)

### Constraint qualifications make the KKT conditions necessary at a minimizer

**Remember:** Good constraint gradients guarantee Lagrange multipliers at every constrained minimum.

*Rules out counterexamples.* MSC 90C46 (Optimality conditions and duality in mathematical programming), 90C30. arXiv math.OC. Level 3: graduate.

**Definition.** A constraint qualification is a condition on the constraints at a feasible point. The most used one, the linear independence constraint qualification, asks that the gradients of the active constraints be linearly independent. A constraint is active at a point if it holds with equality there.

**Problem.** Suppose a point minimizes a smooth function under smooth inequality and equality constraints, and a constraint qualification holds there. Then Lagrange multipliers exist, nonnegative for the inequalities and zero for the inactive ones. These are the Karush–Kuhn–Tucker (KKT) conditions.

**How the definition helps.** The qualification makes the linear approximation of the constraints describe the true feasible directions, and then Farkas's lemma gives the multipliers (our own summary). Without it the linear picture can be wrong. Our own example: minimize x subject to x² ≤ 0. The minimizer is 0, but the constraint gradient there is 0, so the KKT equation 1 + 2λ·0 = 0 has no solution. The Fritz John conditions need no qualification, because they put a weight on the objective too, but that weight may be zero. What stays hard is to choose a qualification weak enough for the problem at hand; the page lists a chain of weaker and weaker ones.

**Wikipedia:** [Karush–Kuhn–Tucker conditions](https://en.wikipedia.org/wiki/Karush%E2%80%93Kuhn%E2%80%93Tucker_conditions). It says: “For the constrained case, the situation is more complicated, and one can state a variety of (increasingly complicated) "regularity" conditions under which a constrained minimizer also satisfies the KKT conditions.”

**Sources:**

- [H. W. Kuhn and A. W. Tucker, Nonlinear programming, Proceedings of the Second Berkeley Symposium on Mathematical Statistics and Probability (1951), 481–492](https://doi.org/10.1525/9780520411586-036)

### The margin turns many random feasibility problems into one concentration theorem

**Remember:** Measure how far you miss the constraints, not just whether you miss.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 90C15 (Stochastic programming), 60F20, 60B20. arXiv math.PR, math.OC. Level 4: research.

**Definition.** Let Q be a bounded set in ℝᴺ, E a set in ℝᴹ and A a random M × N matrix. The ℓq-margin is the smallest ℓq distance between a point of AQ and a point of E. The problem 'is there x in Q with Ax in E' is feasible when the margin is zero.

**Problem.** Let Q lie in the Euclidean unit ball and let E be unchanged by permuting coordinates. For 2 ≤ q ≤ ∞, the margin has variance at most C/(1 + (1/2 − 1/q) log M), with C universal. This gives sharp thresholds for random integer feasibility, discrepancy, perceptron and matrix balancing problems.

**How the definition helps.** The margin is one real number that encodes each yes-or-no feasibility problem, so one concentration theorem covers all of them. The paper says that concentration of the margin gives new sharp thresholds and simplifies known results. Our own explanation is that a near miss has a small positive margin, which a yes-or-no test cannot see. The real work is the variance bound in Theorem 1. For q = ∞ it needs permutation symmetry, because classical concentration tools do not reach that case.

**Paper or page:** [Zero-One Laws for Random Feasibility Problems](https://arxiv.org/abs/2309.13133v3). It says: “Concentration of the margin implies a host of new sharp threshold results in these models, and also greatly simplifies and extends some key known results.”

**Sources:**

- [Dylan J. Altschuler, Zero-One Laws for Random Feasibility Problems, arXiv:2309.13133 (2024)](https://arxiv.org/abs/2309.13133v3)

### Hidden hyperplane convexity makes aggregated inequalities give the convex hull

**Remember:** Look for convexity in the image of the quadratic map, not in the feasible set.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 90C20 (Quadratic programming), 52A41. arXiv math.OC. Level 4: research.

**Definition.** Write each quadratic inequality fᵢ(x) &lt; 0 as a quadratic form in (x, xₙ₊₁) by homogenizing. Hidden hyperplane convexity (HHC) asks that the vector of these forms has a convex image on every linear hyperplane. An aggregation is a nonnegative weighted sum of the original inequalities.

**Problem.** Let n ≥ 3 and let S be the set where finitely many quadratics are all negative. Suppose S is nonempty and its convex hull is not all of ℝⁿ. Under HHC, the convex hull of S is the intersection of the sets given by suitable aggregations.

**How the definition helps.** HHC puts convexity where the proof must separate, which is in the space of constraint values on a hyperplane. A valid linear inequality for the hull gives a hyperplane that misses the homogenized set, by Lemma 5.4 of the paper. On that hyperplane the image is convex and misses the negative orthant. So a separating weight vector exists, and it gives the aggregation, by our own reading. In our own reading, the two-form case of Corollary 2.6 matches Dines' classical convexity theorem.

**Paper or page:** [Aggregations of quadratic inequalities and hidden hyperplane convexity](https://arxiv.org/abs/2210.01722v2), [Aggregations of quadratic inequalities and hidden hyperplane convexity](https://arxiv.org/abs/2210.01722v2), [Aggregations of quadratic inequalities and hidden hyperplane convexity](https://arxiv.org/abs/2210.01722v2). It says: “We show that if the quadratic map associated with S satisfies HHC, then the convex hull of S is defined by special aggregations.”

**Sources:**

- [Grigoriy Blekherman, Santanu S. Dey, Shengding Sun, Aggregations of quadratic inequalities and hidden hyperplane convexity, arXiv:2210.01722v2 (2022)](https://arxiv.org/abs/2210.01722v2)
- [Grigoriy Blekherman, Santanu S. Dey, Shengding Sun, Aggregations of Quadratic Inequalities and Hidden Hyperplane Convexity, SIAM Journal on Optimization (2024)](https://doi.org/10.1137/22m1528215)

### Mirror descent is a flow with frozen gradient in the Hessian metric

**Remember:** Freeze the objective gradient, not the metric, to get mirror descent.

*True by definition.* MSC 90C25 (Convex programming), 65K05. arXiv cs.LG, math.OC. Level 4: research.

**Definition.** Mirror descent with a strictly convex potential ψ subtracts η∇L(wₖ) from ∇ψ(wₖ), where L is the objective. The paper instead follows the flow dw/dt = −H(w)⁻¹∇L(wₖ) for time η, where H is the Hessian of ψ. The objective gradient stays frozen at the start of the step, but the metric H(w) changes along the path.

**Problem.** When the metric is the Hessian of ψ, the end points of these steps are exactly the mirror descent iterates. The flow also makes sense for a Riemannian metric that is not a Hessian, where no dual coordinates exist.

**How the definition helps.** With the gradient frozen, ∇ψ(w) moves at constant velocity, so the equality has a one-line proof. In our own explanation, the chain rule gives d∇ψ(w)/dt = H(w)dw/dt = −∇L(wₖ). After time η, ∇ψ has changed by −η∇L(wₖ), which is the mirror descent update. The definition uses only the metric, so it extends to metrics without a potential. For such metrics one must still solve the flow.

**Paper or page:** [Mirrorless Mirror Descent: A Natural Derivation of Mirror Descent](https://arxiv.org/abs/2004.01025v3). It says: “Let ψ:𝒲→ℝ be strictly convex and twice differentiable and let H(𝐰)=∇²ψ(𝐰) be invertible everywhere. … Then 𝐰⁽ᵏ⁾ are the same as the Mirror Descent updates 𝐰<sub>MD</sub>⁽ᵏ⁾ … obtained with ψ as the potential function and the same initialization and stepsize.”

**Sources:**

- [Suriya Gunasekar, Blake Woodworth, Nathan Srebro, Mirrorless Mirror Descent: A Natural Derivation of Mirror Descent, arXiv:2004.01025v3 (2021)](https://arxiv.org/abs/2004.01025v3)

### Concave tents keep the minimum value when the feasible set is convexified

**Remember:** A concave function cannot dip below all the points holding it up.

*True by definition.* MSC 90C26 (Nonconvex programming, global optimization), 52A41. arXiv math.OC. Level 4: research.

**Definition.** Let 𝒳 be a feasible set and f an objective on it. A concave tent is a concave function g on the convex hull of 𝒳 that equals f on 𝒳. The convex hull is the set of finite convex combinations of points of 𝒳.

**Problem.** Let 𝒳 be compact and suppose f has a concave tent g. Then the infimum of f over 𝒳 equals the infimum of g over the convex hull of 𝒳. The two problems also have the same global minimizers.

**How the definition helps.** Concavity gives the inequality directly, so the equality of infima follows from the definition. If x = Σλᵢxᵢ with xᵢ in 𝒳, then g(x) ≥ Σλᵢ f(xᵢ) ≥ inf f, by our own calculation. Points of 𝒳 give the reverse bound because g equals f there. Finding a usable tent is the hard part, and minimizing a concave function can itself be hard.

**Paper or page:** [Concave tents: a new tool for constructing concave reformulations of a large class of nonconvex optimization problems](https://arxiv.org/abs/2409.18451v2). It says: “We have infₓ∈𝒳 { f(x) } = infₓ∈conv(𝒳) { g(x) }”

**Sources:**

- [Markus Gabl, Concave tents: a new tool for constructing concave reformulations of a large class of nonconvex optimization problems, arXiv:2409.18451v2 (2024)](https://arxiv.org/abs/2409.18451v2)

### Bi-local solutions turn bilevel programs into one-level problems locally

**Remember:** Follow the nearby inner solution instead of every possible inner solution.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 90C30 (Nonlinear programming), 90C46. arXiv math.OC. Level 4: research.

**Definition.** In a bilevel program, the outer decision x is chosen first. An inner variable y then solves an inner optimization problem that depends on x. A bi-local solution needs inner optimality only among y near the reference inner choice, as x varies near the reference outer choice.

**Problem.** Assume the inner problem satisfies the Jacobian uniqueness conditions, a strong local regularity condition. Then a bi-local solution is a local minimizer of a one-level problem. Its second-order optimality conditions use only second derivatives of the functions that define the bilevel program.

**How the definition helps.** Because only nearby inner solutions count, one smooth branch y(x) of inner solutions can stand in for the whole inner problem. Substituting y(x) into the outer problem gives a one-level problem, by our own explanation. The implicit function theorem gives this branch under the Jacobian uniqueness conditions, by our own account. Deriving the second-order conditions from the branch is still the paper's work.

**Paper or page:** [Second-order optimality conditions for bilevel programs](https://arxiv.org/abs/2307.11427v1). It says: “Under the Jacobian uniqueness conditions for the lower level problem, we prove that the bi-local solution is a local minimizer of some one-level minimization problem.”

**Sources:**

- [Xiang Liu, Mengwei Xu, Liwei Zhang, Second-order optimality conditions for bilevel programs, arXiv:2307.11427v1 (2023)](https://arxiv.org/abs/2307.11427v1)

### Pricing an infeasible point at its projection plus distance keeps all minima

**Remember:** Project first, then charge for the distance.

*True by definition.* MSC 90C30 (Nonlinear programming), 90C46. arXiv math.OC. Level 4: research.

**Definition.** Let C be the feasible set and f the cost on C. Fix M &gt; 0. Outside C, the penalty at x is the cost at a nearest point p of C plus M times ‖x − p‖.

**Problem.** Let f be lower semicontinuous on a nonempty closed set C in Euclidean space, and let M &gt; 0. Then each local or global minimum of the constrained problem is one of the penalized problem, and conversely, with the same values.

**How the definition helps.** By definition, an infeasible point costs more than its nearest feasible point, so no minimum can lie outside C (our own comparison). Points between x and p have p as their only nearest point, so moving toward p lowers only the distance charge (our own proof). Near a feasible point, nearby points have nearby projections, so local minima carry over. Unlike classical exact penalties, no large enough M is needed, as the abstract says.

**Paper or page:** [The Exact Projective Penalty Method for Constrained Optimization](https://arxiv.org/abs/2312.02094v1). It says: “each local (global) minimum of one problem is a local (global) minimum of the other, and the optimal values of the problems in the corresponding minima coincide.”

**Sources:**

- [Vladimir Norkin, The Exact Projective Penalty Method for Constrained Optimization, arXiv:2312.02094v1 (2023)](https://arxiv.org/abs/2312.02094v1)

### Lifting a Markov decision process to distributions keeps its optimal values

**Remember:** The state is now a distribution, so the next state is not random.

*Makes the theorem clean to state or prove.* MSC 90C40 (Markov and semi-Markov decision processes), 90C39. arXiv math.OC. Level 4: research.

**Definition.** In a measurized Markov decision process, a state is a probability distribution on the original states. An action is a stochastic kernel, which gives a distribution over actions for each original state. The next distribution then follows deterministically from the original transition law.

**Problem.** Consider the discounted problem under the paper's assumptions. Let V\* be the original optimal value and V̄\* the lifted one. Then V̄\*(δₛ) = V\*(s) for every state s, and V̄\*(ν) is the integral of V\* against ν.

**How the definition helps.** The lifted state makes the evolution of laws deterministic, so the value at ν can be compared directly with the average of V\*. A point mass δₛ is a known original state, so the first identity is the natural special case, by our own account. The paper still has to prove that the two optimization problems have matching values.

**Paper or page:** [Measurized Markov Decision Processes](https://arxiv.org/abs/2405.03888v4), [Measurized Markov Decision Processes](https://arxiv.org/abs/2405.03888v4). It says: “states are probability measures on the original state space, and actions are stochastic kernels on the original action space.”

**Sources:**

- [Daniel Adelman, Alba V. Olivares-Nadal, Measurized Markov Decision Processes, arXiv:2405.03888v4 (2024)](https://arxiv.org/abs/2405.03888v4)

### Maximizing a reward quantile becomes a search over probability-minimizing thresholds

**Remember:** Replace the quantile with a search over reward thresholds.

*Makes the theorem clean to state or prove.* MSC 90C40 (Markov and semi-Markov decision processes), 90C39. arXiv math.OC. Level 4: research.

**Definition.** The α-quantile, or value-at-risk, of a reward R is the least threshold λ with P(R ≤ λ) ≥ α. It is not additive over time, so ordinary dynamic programming does not apply to it directly.

**Problem.** Take a finite-horizon finite Markov decision process. Its optimal value-at-risk is the least λ at which the minimal probability of total reward at most λ reaches α. Each such minimization is an ordinary Markov decision problem on states augmented with the remaining threshold.

**How the definition helps.** The quantile definition places a single threshold outside a probability, so the problem splits into an outer search and an inner probability minimization. At a fixed threshold, the probability is the expected value of a 0-or-1 payoff, by our own observation. So the inner problem has an additive form that dynamic programming can handle. For accumulated rewards, the paper adds the remaining threshold to the state.

**Paper or page:** [Markov Decision Processes with Value-at-Risk Criterion](https://arxiv.org/abs/2507.22355v1), [Markov Decision Processes with Value-at-Risk Criterion](https://arxiv.org/abs/2507.22355v1). It says: “By establishing the equivalence between the VaR maximization MDP and a series of probabilistic minimization MDPs, we transform the VaR maximization MDP into a constrained bilevel optimization problem.”

**Sources:**

- [Li Xia, Jinyan Pan, Markov Decision Processes with Value-at-Risk Criterion, arXiv:2507.22355v1 (2025)](https://arxiv.org/abs/2507.22355v1)

### Robust Bellman evaluation works exactly when worst cases are simultaneously solvable

**Remember:** Independent uncertainty choices let separate worst cases fit together.

*Rules out counterexamples.* MSC 90C40 (Markov and semi-Markov decision processes), 90C17. arXiv math.OC. Level 4: research.

**Definition.** A robust Markov decision process has a set 𝒫 of possible transition models. Simultaneous solvability says that for any choice of one linear cost per state, a single model in 𝒫 minimizes all these costs at once. Each state's cost looks only at that state's row of transition probabilities. 𝒫 is s-rectangular when it is the product of its state-by-state parts.

**Problem.** Let 𝒫 be compact. State-by-state worst-case Bellman evaluation gives the true robust value for every stationary policy, reward and discount exactly when simultaneous solvability holds. If 𝒫 is also convex, this happens exactly when 𝒫 is s-rectangular.

**How the definition helps.** Simultaneous solvability states exactly what state-by-state evaluation needs: the separate worst cases fit together into one model. That is Theorem 1. For a product set this is clear, because each state's worst row can be chosen independently, by our own explanation. When rows are coupled, two states can prefer incompatible models, by our own example of one shared parameter. The hard direction of Theorem 2 uses convexity to turn the property back into a product structure.

**Paper or page:** [Tractable Robust Markov Decision Processes](https://arxiv.org/abs/2411.08435v1), [Tractable Robust Markov Decision Processes](https://arxiv.org/abs/2411.08435v1), [Tractable Robust Markov Decision Processes](https://arxiv.org/abs/2411.08435v1). It says: “our proof techniques rely on identifying a novel simultaneous solvability property, which we show is at the heart of several important properties of RMDPs, including the existence of stationary optimal policies and dynamic programming-based formulations.”

**Sources:**

- [Julien Grand-Clément, Nian Si, Shengbo Wang, Tractable Robust Markov Decision Processes, arXiv:2411.08435v1 (2024)](https://arxiv.org/abs/2411.08435v1)

### White's vector Bellman equations hold once policies may depend on history

**Remember:** Keep the history so separate branches can choose separate continuations.

*Rules out counterexamples.* MSC 90C40 (Markov and semi-Markov decision processes), 90C29. arXiv math.OC. Level 4: research.

**Definition.** In a Markov decision process with vector rewards, a history-dependent policy may choose different actions after different sequences of visited states. A return vector is Pareto efficient if no other return is at least as large in every component and different. White's equations compute sets of efficient returns by backward recursion.

**Problem.** In a finite-horizon model, White's backward recursion gives exactly the Pareto efficient expected returns of the history-dependent policies. For policies that see only the current state, this can fail.

**How the definition helps.** Allowing history lets a policy combine independently chosen continuations after different past paths, which the recursion needs, in our own reading. Proposition 4 of the paper builds such a combined policy. A policy that sees only the current state must make the same later choice after two different histories, by our own account. The paper gives a counterexample for that case and proves the corrected statement.

**Paper or page:** [A Counterexample and a Corrective to the Vector Extension of the Bellman Equations of a Markov Decision Process](https://arxiv.org/abs/2306.16937v3), [A Counterexample and a Corrective to the Vector Extension of the Bellman Equations of a Markov Decision Process](https://arxiv.org/abs/2306.16937v3). It says: “For all t ≤ N, for all hₜ = (s₁, ..., sₜ) ∈ Hₜ, Uₜ(sₜ) = e(V′ₜ(hₜ)).”

**Sources:**

- [Anas Mifrani, A Counterexample and a Corrective to the Vector Extension of the Bellman Equations of a Markov Decision Process, arXiv:2306.16937v3 (2023)](https://arxiv.org/abs/2306.16937v3)

### Every local minimizer is asymptotically stationary without any constraint qualification

**Remember:** Let the errors vanish without requiring the multipliers to settle.

*Makes the theorem clean to state or prove.* MSC 90C46 (Optimality conditions and duality in mathematical programming), 49J52. arXiv math.OC. Level 4: research.

**Definition.** Mordukhovich stationarity (M-stationarity) asks for a multiplier that solves a generalized first-order equation at the point. Asymptotic M-stationarity (AM-stationarity) asks instead for points xₖ → x̄ and multipliers λₖ whose residual in this equation tends to 0. The multipliers need not converge or stay bounded.

**Problem.** Every local minimizer of the paper's nonsmooth problem is AM-stationary, with no constraint qualification. A constraint qualification is an extra regularity condition on the constraints. Under the paper's AM-regularity condition, the minimizer is also M-stationary.

**How the definition helps.** Because the multipliers may diverge, the definition removes the usual obstacle to a necessary condition, so it holds at every local minimizer. The theorem still has to construct the approximating points and multipliers. Lemma 3.4 shows what the definition gives back. Bounded multipliers give M-stationarity, and unbounded ones give a degenerate multiplier.

**Paper or page:** [Asymptotic stationarity and regularity for nonsmooth optimization problems](https://arxiv.org/abs/2006.09734v3), [Asymptotic stationarity and regularity for nonsmooth optimization problems](https://arxiv.org/abs/2006.09734v3). It says: “Let x̄ ∈ M be a local minimizer of (basic problem). Then x̄ is an AM-stationary point of (basic problem).”

**Sources:**

- [Patrick Mehlitz, Asymptotic stationarity and regularity for nonsmooth optimization problems, Journal of Nonsmooth Analysis and Optimization, Volume 1, Original research articles (December 15, 2020) jnsao:6575 \[arXiv:2006.09734v3\]](https://arxiv.org/abs/2006.09734v3)

### Calm local minimax points admit first- and second-order optimality conditions

**Remember:** Keep the maximizing response within a fixed multiple of the minimizing move.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 90C47 (Minimax problems in mathematical programming), 49K35. arXiv math.OC. Level 4: research.

**Definition.** At a local minimax point (x̄, ȳ), no small move of y raises f(x̄, ·) above f(x̄, ȳ). Also, for each x near x̄, the maximum of f(x, ·) over a small ball around ȳ is at least f(x̄, ȳ). The point is calm when some constant κ works as follows. For x within δ of x̄, a ball of radius κδ around ȳ is large enough.

**Problem.** For calm local minimax points of nonsmooth constrained problems, the paper proves first- and second-order necessary and sufficient conditions. In the smooth unconstrained case, calmness gives this: for every direction u there is h with ∇²f(x̄, ȳ)((u,h),(u,h)) ≥ 0. Under a weak second-order condition on the inner maximization, calm and ordinary local minimax points coincide.

**How the definition helps.** The calm radius bounds the maximizer's response by a multiple of the minimizer's move, so both moves expand in one small parameter. The response to x̄ + tu then has a limiting direction h after scaling by t, by our own explanation. That pair (u, h) enters the second-order condition. The paper still has to prove when an ordinary local minimax point is calm.

**Paper or page:** [Calm local optimality for nonconvex-nonconcave minimax problems](https://arxiv.org/abs/2306.17443v1), [Calm local optimality for nonconvex-nonconcave minimax problems](https://arxiv.org/abs/2306.17443v1), [Calm local optimality for nonconvex-nonconcave minimax problems](https://arxiv.org/abs/2306.17443v1). It says: “Moreover we show that the calm local minimax optimality and the local minimax optimality coincide under a weak sufficient optimality condition for the maximization problem.”

**Sources:**

- [Xiaoxiao Ma, Wei Yao, Jane J. Ye, Jin Zhang, Calm local optimality for nonconvex-nonconcave minimax problems, arXiv:2306.17443v1 (2023)](https://arxiv.org/abs/2306.17443v1)

### The Hessian makes self-concordance invariant under affine substitution

**Remember:** Measure each direction using the function’s own curvature.

*True by definition.* MSC 90C51 (Interior-point methods), 90C25, 65K10. arXiv math.OC. Level 4: research.

**Definition.** Let f be a three-times continuously differentiable convex function on an open convex set, and let M ≥ 0. Self-concordance bounds the absolute third directional derivative by M times the second directional derivative raised to the 3/2 power. The derivatives are those of f restricted to a line. This uses the Hessian, the matrix of second derivatives, rather than a fixed Euclidean norm to measure direction.

**Problem.** Substituting Ax + b for the argument of a self-concordant function preserves the same constant on the nonempty domain of the new function.

**How the definition helps.** The Hessian-based bound is unchanged because both directional derivatives after substitution are the old derivatives along the same transformed direction. This is the chain rule along a line. A bound on changes of the Hessian in a fixed Euclidean norm can instead change its constant under a rescaling. The work in the theory is not invariance. It is using the new bound to control Newton steps, which use first and second derivatives to move toward a minimum.

**Wikipedia:** [Self-concordant function](https://en.wikipedia.org/wiki/Self-concordant_function). It says: “The authors note that the right hand side can be made also invariant if we replace the Euclidean metric by the scalar product defined by the Hessian of f”

**Sources:**

- [Yurii Nesterov and Arkadii Nemirovskii, Interior-Point Polynomial Algorithms in Convex Programming, SIAM (1994)](https://doi.org/10.1137/1.9781611970791)
