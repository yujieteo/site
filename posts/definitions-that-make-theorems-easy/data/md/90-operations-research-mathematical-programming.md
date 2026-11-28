### The segment definition makes every local convex minimum global

**Remember:** The chord to a lower point drags nearby values down.

*True by definition.* MSC 90C25 (Convex programming), 52A41. arXiv math.OC. Level 1: early undergraduate.

**Definition.** A function on a convex domain is convex if, on every segment in the domain, its graph lies on or below the chord joining its end values. So moving from a point toward any point of lower value lowers the value at once.

**Problem.** If a convex function has its lowest nearby value at a point, it has its lowest value there on the entire convex domain.

**How the definition helps.** If some point had a lower value, the chord bound would make points near x on the segment toward it lower too (our own). This contradicts the local minimum. No smoothness or second derivative test is needed.

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “f(t x + (1−t) y) ≤ t f(x) + (1−t) f(y)”

**Wikipedia:** [Convex optimization](https://en.wikipedia.org/wiki/Convex_optimization). It says: “every point that is local minimum is also a global minimum”

**Sources:** none listed. No primary source with a working link was found.

### Generalized quantiles handle demand ties

**Remember:** Choose the first stock level where the demand probability reaches the cost ratio.

*Rules out counterexamples.* MSC 90B05 (Inventory, storage, reservoirs). arXiv math.OC. Level 2: later undergraduate.

**Definition.** For nonnegative demand D with distribution function F(x) = P(D ≤ x), the generalized quantile at level p in (0, 1) is the smallest x with F(x) ≥ p. It exists even where F jumps over p, so that no x has F(x) = p.

**Problem.** Choose a nonnegative stock level before demand with finite mean is known, paying a fixed positive cost per unit short and another per unit left over. The generalized quantile at p equal to the shortage cost divided by the sum of the two costs minimizes expected cost.

**How the definition helps.** Expected cost is convex, with left slope proportional to F just below x minus p, and right slope proportional to F(x) − p (our own). The generalized quantile is exactly where F reaches p, so zero lies between the two slopes (our own). If demand is 0 or 2 with equal probability, no x has F(x) = 1/4, yet the quantile 0 is optimal (our own).

**Wikipedia:** [Newsvendor model](https://en.wikipedia.org/wiki/Newsvendor_model). It says: “denotes the generalized inverse cumulative distribution function of D.”

**Sources:**

- [E. L. Porteus (2008), The Newsvendor Problem](https://doi.org/10.1007/978-0-387-73699-0_7)

### Customer time gives Little’s law

**Remember:** Count one block of customer time by customer or by clock.

*True by definition.* MSC 90B22 (Queues and service in operations research). arXiv math.PR. Level 2: later undergraduate.

**Definition.** Observed customer time is the total time customers spend inside the observation window: each customer's stay clipped to the window, summed. It is one block of customer–time pairs, which can be counted by customer or by clock time.

**Problem.** For finitely many visits, observed customer time equals the integral over the window of the number present. So if arrival rate and mean stay converge, and the time cut off at the window edges grows slower than the window, mean occupancy is their product.

**How the definition helps.** Summing the block by customer gives observed customer time, and summing it by clock time gives the occupancy integral (our own). Dividing by the window length gives arrivals per unit time times mean stay. The remaining work is controlling the visits that cross the window edges.

**Wikipedia:** [Little's law](https://en.wikipedia.org/wiki/Little%27s_law). It says: “multiplied by the average time that a customer spends in the system (W).”

**Sources:**

- [J. D. C. Little (1961), A Proof for the Queuing Formula L = λW](https://doi.org/10.1287/opre.9.3.383)

### Reflected walks give waiting times

**Remember:** Waiting work is the walk minus its lowest point so far.

*True by definition. Confidence: medium.* MSC 90B22 (Queues and service in operations research). arXiv math.PR. Level 2: later undergraduate.

**Definition.** Start with an empty single-server queue served in arrival order. Form the walk that adds each customer's service time and subtracts the time to the next arrival, then subtract its lowest value so far, including the starting zero. This reflected walk is the work still waiting, which never goes below zero.

**Problem.** Just before each arrival, the reflected sum equals that customer’s waiting time. The next wait equals the current wait plus the increment, or zero if that sum is negative.

**How the definition helps.** Subtracting the running minimum gives exactly the waiting-time update: add the increment, or reset to zero when the walk reaches a new low (our own). A new low means the server has cleared all waiting work. Starting at zero, induction gives the waiting time at each arrival (our own).

**Paper or page:** [On fluctuation-theoretic decompositions via Lindley-type recursions](https://arxiv.org/abs/2212.01811v1). It says: “where Wₙ ∼ Sₙ − minₖ∈{0,…,n} Sₖ”

**Sources:**

- [Onno Boxma, Offer Kella, Michel Mandjes, On fluctuation-theoretic decompositions via Lindley-type recursions](https://arxiv.org/abs/2212.01811v1)

### Longest paths give project duration

**Remember:** Each event waits for its slowest chain of predecessors.

*True by definition.* MSC 90B35 (Deterministic scheduling theory in operations research). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Draw tasks as edges of a finite acyclic directed graph, weighted by duration, with every edge on a path from the single start to the single finish. Each event happens as soon as all its incoming tasks are done, and every ready task starts at once.

**Problem.** The earliest project finish equals the longest weighted path from the start to the finish event.

**How the definition helps.** Earliest event times obey the longest-path rule: each event takes the largest predecessor time plus task duration over its incoming tasks (our own). Applying this rule in dependency order from zero at the start gives both quantities (our own). The modelling work is encoding every precedence constraint.

**Wikipedia:** [Critical path method](https://en.wikipedia.org/wiki/Critical_path_method). It says: “A critical path is determined by identifying the longest stretch of dependent activities”

**Sources:**

- [J. E. Kelley Jr. and M. R. Walker (1959), Critical-Path Planning and Scheduling](https://doi.org/10.1145/1460299.1460318)

### Preemption makes earliest deadlines optimal

**Remember:** With pause and resume, urgent work can always go first.

*Rules out counterexamples.* MSC 90B35 (Deterministic scheduling theory in operations research). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Independent jobs, each with a release time and a deadline, run on one processor. Preemption lets a job pause and resume at no cost, and the earliest deadline rule always runs a ready job with the earliest deadline.

**Problem.** If any schedule meets all release times and deadlines, the preemptive earliest deadline rule does too.

**How the definition helps.** With pauses allowed, an exchange argument moves ready work with the earliest deadline forward without making the displaced work late (our own). Without pauses the rule fails: take a three-unit job released at 0 and due at 5, and a one-unit job released at 1 and due at 2 (our own). Starting the first job at once misses the second deadline, but idling until 1 meets both.

**Wikipedia:** [Earliest deadline first scheduling](https://en.wikipedia.org/wiki/Earliest_deadline_first_scheduling). It says: “EDF is an optimal scheduling algorithm on preemptive uniprocessors”

**Sources:**

- [W. A. Horn (1974), Some Simple Scheduling Algorithms](https://doi.org/10.1002/nav.3800210113)

### Fractional assignments decompose into matchings

**Remember:** Fractional assignments are mixtures of whole assignments.

*True by definition.* MSC 90B80 (Discrete location and assignment). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A fractional assignment is a random whole assignment, which pairs each worker with a different job, recorded by the probability of each worker–job pair. Equivalently, it is a nonnegative square matrix whose rows and columns each sum to one.

**Problem.** The minimum linear cost over all fractional assignments equals the cheapest whole assignment’s cost.

**How the definition helps.** Its cost is an average of whole-assignment costs, which cannot beat the cheapest one, and probability one on that assignment attains it (our own). The work is showing that every matrix with unit row and column sums is such a mixture. This is the Birkhoff–von Neumann theorem.

**Wikipedia:** [Doubly stochastic matrix](https://en.wikipedia.org/wiki/Doubly_stochastic_matrix). It says: “the vertices of Bₙ are precisely the permutation matrices.”

**Sources:** none listed. No primary source with a working link was found.

### Basic feasible solutions are vertices, so linear programs need finite search

**Remember:** Keep the positive variables on independent columns.

*Makes the theorem clean to state or prove.* MSC 90C05 (Linear programming), 90C49. arXiv math.OC. Level 2: later undergraduate.

**Definition.** For a linear program in standard form, minimize cᵀx subject to Ax = b and x ≥ 0, a feasible point is basic if the columns of A at its positive entries are linearly independent. Those entries are then fixed uniquely, so the point is not the average of two distinct feasible points (our own).

**Problem.** If a linear program in standard form has an optimal solution, then it has an optimal basic feasible solution. Each basic feasible solution is a vertex of the feasible polyhedron.

**How the definition helps.** Independent support columns fix the point uniquely, so it is a vertex (our own). At an optimum with dependent support columns, a dependence gives feasible moves both ways with zero change in cost, so move until a positive entry vanishes (our own). Repeating this gives an optimal basic solution (our own).

**Wikipedia:** [Basic feasible solution](https://en.wikipedia.org/wiki/Basic_feasible_solution), [Linear programming](https://en.wikipedia.org/wiki/Linear_programming). It says: “Geometrically, each BFS corresponds to a vertex of the polyhedron of feasible solutions. If there exists an optimal solution, then there exists an optimal BFS.”

**Sources:** none listed. No primary source with a working link was found.

### Basis prices turn simplex optimality into strong duality

**Remember:** Price the basic columns exactly and check the remaining columns.

*True by definition.* MSC 90C05 (Linear programming), 90C46. arXiv math.OC. Level 2: later undergraduate.

**Definition.** For maximizing c·x under Ax = b and x ≥ 0, with redundant rows removed, a basis is a set of independent columns whose variables are solved for while the others are zero. Basis prices y match c exactly on the basic columns, so the reduced costs c − Aᵀy are all nonpositive exactly when y is dual feasible.

**Problem.** A feasible basis with no positive reduced costs supplies a primal optimum and a dual optimum of equal value. In particular, a feasible linear program with finite optimum has a dual optimum of the same value.

**How the definition helps.** No positive reduced cost means Aᵀy ≥ c, so y is dual feasible (our own). Only basic variables are nonzero and prices match c on them, so c·x = y·Ax = y·b, and weak duality makes both optimal. For a feasible program with finite optimum, the finite simplex theorem supplies such a basis.

**Paper or page:** [Zero-Sum Games and Linear Programming Duality](https://arxiv.org/abs/2205.11196v6). It says: “then there exist feasible x and y with cᵀx = yᵀb, which are therefore optimal solutions.”

**Sources:** none listed. No primary source with a working link was found.

### Dual prices give supporting bounds on the optimal value

**Remember:** The old prices still bound the new optimum.

*True by definition.* MSC 90C05 (Linear programming), 90C46. arXiv math.OC. Level 2: later undergraduate.

**Definition.** For maximizing c·x under Ax ≤ b and x ≥ 0, a shadow price vector is an optimal dual solution: it minimizes b·y over y ≥ 0 with Aᵀy ≥ c. The dual constraints do not involve b, so the same prices stay feasible when the limits change.

**Problem.** Suppose the original linear program has finite optimum v(b) and an optimal dual vector y. If changed limits b′ give a feasible program, its optimum v(b′) is at most v(b) + y·(b′ − b).

**How the definition helps.** Changing b only changes the dual objective, so y stays dual feasible (our own). Weak duality gives v(b′) ≤ y·b′, and strong duality gives y·b = v(b). The bound holds even where v has no derivative.

**Wikipedia:** [Shadow price](https://en.wikipedia.org/wiki/Shadow_price). It says: “the shadow price is the value of the Lagrange multiplier at the optimal solution”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative artificial variables turn feasibility into a zero minimum

**Remember:** Every artificial variable disappears exactly when their sum is zero.

*True by definition.* MSC 90C05 (Linear programming). arXiv math.OC. Level 2: later undergraduate.

**Definition.** First make b ≥ 0 by multiplying each row with a negative right side by −1. Then add one artificial variable to each equation, Ax + a = b with a ≥ 0, and minimize the sum of the artificial variables, which is zero only when every one is zero.

**Problem.** The original system has a solution exactly when this auxiliary linear program has minimum zero.

**How the definition helps.** The sum is zero exactly when a = 0, that is, when x solves the original system. Conversely, any original solution extends by setting a = 0 (our own). The point x = 0, a = b gives a known feasible start.

**Wikipedia:** [Simplex algorithm](https://en.wikipedia.org/wiki/Simplex_algorithm). It says: “where the artificial variables are all zero.”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative constraint weights make weak linear duality immediate

**Remember:** A weighted sum of valid upper bounds stays valid.

*True by definition.* MSC 90C05 (Linear programming). arXiv math.OC. Level 2: later undergraduate.

**Definition.** The dual of maximizing c·x under Ax ≤ b and x ≥ 0 puts nonnegative weights y on the constraint rows, so y·Ax ≤ y·b is again a valid bound. It keeps only weights with Aᵀy ≥ c, so the combined row dominates the objective, and minimizes b·y.

**Problem.** Every feasible choice of dual weights gives an upper bound on the original maximization problem.

**How the definition helps.** For feasible x and y, c·x ≤ (Aᵀy)·x = y·Ax ≤ y·b, using x ≥ 0 and y ≥ 0 (our own). That chain is the whole proof. Attaining the best primal value needs strong duality.

**Wikipedia:** [Dual linear program](https://en.wikipedia.org/wiki/Dual_linear_program). It says: “upper bound on the objective.”

**Sources:** none listed. No primary source with a working link was found.

### Normalizing a nonnegative dependence gives Gordan’s alternative

**Remember:** Normalize the dependence, then separate zero from the hull.

*Makes the theorem clean to state or prove.* MSC 90C05 (Linear programming), 52A20. arXiv math.OC. Level 2: later undergraduate.

**Definition.** The convex hull of finitely many vectors is the set of their weighted averages with nonnegative weights summing to one. Nonnegative weights, not all zero, with weighted sum zero become such an average after division by their sum, so they exist exactly when zero lies in the hull.

**Problem.** For a nonempty finite list of real vectors of equal length, exactly one of two alternatives holds. Either nonnegative weights, not all zero, give weighted sum zero, or some vector has positive dot product with every listed vector.

**How the definition helps.** So the first alternative says zero is in the hull. If it is not, the hull is compact and convex, and strict separation gives a vector with positive dot product with every listed vector (our own). If zero is in the hull, no such vector exists, because zero is not an average of positive numbers (our own).

**Paper or page:** [Polytopes, polyhedra, and the Farkas lemma](https://arxiv.org/abs/2212.00221v2). It says: “There is a nonzero nonnegative vector x ∈ ℝⁿ such that A x = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Paired columns make free variables yield dual equalities

**Remember:** Opposite columns impose opposite bounds.

*True by definition.* MSC 90C05 (Linear programming). arXiv math.OC. Level 2: later undergraduate.

**Definition.** A free variable takes any real value, so write it as u − v with u, v ≥ 0; its column a and coefficient c then appear twice, once with each sign. In the dual of a maximization with upper-bound constraints, each nonnegative variable requires its column price to cover its coefficient.

**Problem.** A free variable in a maximization linear program gives an equality in its minimization dual. Variables restricted to be nonnegative still give inequalities.

**How the definition helps.** The two copies give a·y ≥ c and −a·y ≥ −c, hence a·y = c (our own). Every real value has such a split, and the program depends only on u − v.

**Wikipedia:** [Dual linear program](https://en.wikipedia.org/wiki/Dual_linear_program). It says: “becomes a constraint in the dual LP”

**Sources:** none listed. No primary source with a working link was found.

### Positive basic variables rule out simplex cycling

**Remember:** With no zero basic variables, an improving pivot actually moves.

*Rules out counterexamples.* MSC 90C05 (Linear programming). arXiv math.OC. Level 2: later undergraduate.

**Definition.** For Ax = b with m linearly independent rows, a basis is a set of m independent columns; setting the other variables to zero fixes the basic ones. A feasible basis is nondegenerate when every basic variable is strictly positive, so every improving pivot can take a positive step.

**Problem.** If every feasible basis is nondegenerate, primal simplex with improving entering variables cannot cycle.

**How the definition helps.** Each improving pivot then moves a positive distance and strictly raises the objective (our own). A basis cannot recur, because its objective value would repeat. With zero basic variables, the cited cycling examples show the argument fails.

**Wikipedia:** [Bland's rule](https://en.wikipedia.org/wiki/Bland%27s_rule). It says: “there are examples of degenerate linear programs, on which the original simplex algorithm cycles forever.”

**Sources:**

- [R. G. Bland, New Finite Pivoting Rules for the Simplex Method (1977).](https://doi.org/10.1287/moor.2.2.103)

### The simplex dictionary makes the next step a ratio test

**Remember:** Stop at the first basic variable to reach zero.

*True by definition.* MSC 90C05 (Linear programming). arXiv math.OC. Level 2: later undergraduate.

**Definition.** A simplex dictionary solves the equality constraints for the basic variables, writing each as its current value minus fixed rates times the nonbasic variables. At the current solution the nonbasic variables are zero, and every variable must stay nonnegative.

**Problem.** From a feasible dictionary solution, raise one nonbasic variable and keep the others at zero. The largest feasible step is the smallest ratio of starting value to rate of decrease over the decreasing basic variables, and it is unlimited if none decreases.

**How the definition helps.** Each dictionary row shows directly when its basic variable reaches zero: starting at b and falling at rate a &gt; 0, it allows steps up to b/a (our own). The first variable to reach zero limits the step. The work lies in solving the original equations for the basic variables.

**Wikipedia:** [Simplex algorithm](https://en.wikipedia.org/wiki/Simplex_algorithm). It says: “minimum ratio test”

**Sources:** none listed. No primary source with a working link was found.

### Transposing the constraint matrix twice recovers the primal

**Remember:** Transpose twice and swap the roles twice.

*True by definition.* MSC 90C05 (Linear programming). arXiv math.OC. Level 2: later undergraduate.

**Definition.** Use the symmetric dual rules for nonnegative variables: maximize c·x subject to Ax ≤ b becomes minimize b·y subject to Aᵀy ≥ c, and the reverse. Each rule transposes the matrix, swaps the objective vector with the bound vector, and flips max with min and ≤ with ≥.

**Problem.** The dual of the dual of a linear program in this form is the original program.

**How the definition helps.** Applying the rules twice flips each direction twice and swaps the vectors back, and transposing twice gives the original matrix (our own). Other sign conventions must first be converted to these forms.

**Wikipedia:** [Dual linear program](https://en.wikipedia.org/wiki/Dual_linear_program). It says: “the dual of the dual is the primal.”

**Sources:** none listed. No primary source with a working link was found.

### Two nonnegative slack terms explain complementary slackness

**Remember:** A sum of nonnegative products vanishes only term by term.

*True by definition.* MSC 90C05 (Linear programming), 90C46. arXiv math.OC. Level 2: later undergraduate.

**Definition.** For maximizing c·x with Ax ≤ b, x ≥ 0 and its dual, minimizing b·y with Aᵀy ≥ c, y ≥ 0, the slacks b − Ax and Aᵀy − c are the unused margins. For feasible x and y, the gap b·y − c·x equals y·(b − Ax) + x·(Aᵀy − c), a sum of nonnegative products (our own).

**Problem.** When both programs have optima, a feasible pair is optimal exactly when every slack times its corresponding variable in the other program is zero.

**How the definition helps.** A sum of nonnegative products is zero exactly when every product is zero (our own). Strong duality says a feasible pair is optimal exactly when the gap is zero.

**Wikipedia:** [Dual linear program](https://en.wikipedia.org/wiki/Dual_linear_program). It says: “each primal variable corresponds to a dual slack variable, and each dual variable corresponds to a primal slack variable.”

**Sources:** none listed. No primary source with a working link was found.

### Total unimodularity makes every vertex of a linear program integral

**Remember:** Determinants ±1 make Cramer’s rule give integer vertices.

*True by definition.* MSC 90C10 (Integer programming), 90C57, 05B20. arXiv math.OC, math.CO. Level 2: later undergraduate.

**Definition.** A matrix is totally unimodular if every square submatrix has determinant 0, 1 or −1. So every invertible square submatrix has determinant ±1, and Cramer’s rule solves its systems with integer right sides in integers (our own).

**Problem.** If A is totally unimodular and b is an integer vector, every vertex of {x : Ax ≤ b} has integer entries. So the linear program 'maximize cᵀx subject to Ax ≤ b' has an integer optimum whenever it has an optimum, for every c.

**How the definition helps.** At a vertex, independent tight rows form a square system with determinant ±1 and integer right side, so Cramer’s rule gives integer coordinates (our own). For the optimum, add the integer bounds ⌊xᵢ⌋ ≤ xᵢ ≤ ⌈xᵢ⌉ around an attained optimum x; they keep total unimodularity by expansion along unit rows (our own). The bounded polyhedron has an optimal vertex, which is integral by the same argument (our own).

**Wikipedia:** [Unimodular matrix](https://en.wikipedia.org/wiki/Unimodular_matrix). It says: “Hence if A is totally unimodular and b is integral, every extreme point of the feasible region (e.g. {x \| Ax ≥ b}) is integral and thus the feasible region is an integral polyhedron.”

**Sources:**

- [A. J. Hoffman and J. B. Kruskal, Integral boundary points of convex polyhedra, in Linear Inequalities and Related Systems, Annals of Mathematics Studies 38 (1956), 223–246](https://doi.org/10.1515/9781400881987-014)

### Affine equalities keep the feasible set convex

**Remember:** A convex upper bound survives averaging, but a convex equality may not.

*Rules out counterexamples.* MSC 90C25 (Convex programming), 52A41. arXiv math.OC. Level 2: later undergraduate.

**Definition.** A convex program minimizes a convex function on a convex domain subject to constraints g(x) ≤ 0 with each g convex, and equalities a·x = b that are affine. Both kinds of constraint keep holding along the segment between two points that satisfy them.

**Problem.** The feasible set of a convex program is convex.

**How the definition helps.** A convex g that is at most zero at both ends stays at most zero along the segment, and an affine equality holds along the whole segment (our own). A nonaffine equality such as x² = 1 admits −1 and 1 but not their midpoint 0.

**Wikipedia:** [Convex optimization](https://en.wikipedia.org/wiki/Convex_optimization). It says: “the equality constraints are all linear”

**Sources:** none listed. No primary source with a working link was found.

### An epigraph variable makes a convex objective linear

**Remember:** Move the curved objective into a constraint.

*Makes the theorem clean to state or prove.* MSC 90C25 (Convex programming), 52A41. arXiv math.OC. Level 2: later undergraduate.

**Definition.** Add a height variable t with the constraint t ≥ f(x), which says (x, t) lies in the epigraph of f, and minimize t over the old constraints and this one. The smallest allowed t above any feasible x is exactly f(x).

**Problem.** Every convex minimization problem has an equivalent convex formulation with a linear objective and one extra variable.

**How the definition helps.** Minimizing t therefore gives the same infimum and the same minimizing x (our own). Convexity of f makes its epigraph convex, so the new constraint is convex.

**Wikipedia:** [Convex optimization](https://en.wikipedia.org/wiki/Convex_optimization). It says: “adding a single variable t”

**Sources:** none listed. No primary source with a working link was found.

### Normal directions make nearest point projection nonexpansive

**Remember:** From the nearest point, the whole set lies at an obtuse angle.

*True by definition.* MSC 90C25 (Convex programming), 52A20. arXiv math.OC. Level 2: later undergraduate.

**Definition.** Projection onto a nonempty closed convex set C sends x to its nearest point p in C. Equivalently, x − p points away from C at p: (x − p)·(z − p) ≤ 0 for every z in C.

**Problem.** Nearest point projection onto a nonempty closed convex set in Euclidean space never increases distances.

**How the definition helps.** Use q as z in the inequality for p, and p as z in the inequality for q (our own). Adding them gives ‖p − q‖² ≤ (x − y)·(p − q), and Cauchy–Schwarz gives ‖p − q‖ ≤ ‖x − y‖. The projection theorem gives the equivalence with the nearest point.

**Paper or page:** [Metric Projection onto Closed Convex Set is 1-Lipschitz](https://proofwiki.org/wiki/Metric_Projection_onto_Closed_Convex_Set_is_1-Lipschitz). It says: “is 1-Lipschitz.”

**Sources:** none listed. No primary source with a working link was found.

### The Karush–Kuhn–Tucker conditions certify a convex minimum

**Remember:** A stationary convex Lagrangian is already minimized.

*Makes the theorem clean to state or prove.* MSC 90C25 (Convex programming), 90C46. arXiv math.OC. Level 2: later undergraduate.

**Definition.** For minimizing f subject to g(x) ≤ 0 and h(x) = 0, the Karush–Kuhn–Tucker conditions ask for a feasible x and weights, nonnegative on inequalities and zero on those holding strictly, such that the Lagrangian f + ∑λg + ∑μh has zero gradient at x. At feasible points this Lagrangian is at most f, and at x it equals f(x).

**Problem.** Assume a convex minimization on Euclidean space has differentiable objective and inequality functions, and affine equalities. Any point and multipliers satisfying the Karush–Kuhn–Tucker conditions then give a global minimizer.

**How the definition helps.** With convex f and g and affine h, nonnegative weights keep the Lagrangian convex, so zero gradient makes x its global minimizer (our own). Hence f(x) equals the Lagrangian at x, which is at most the Lagrangian at any feasible z, which is at most f(z) (our own).

**Wikipedia:** [Karush–Kuhn–Tucker conditions](https://en.wikipedia.org/wiki/Karush%E2%80%93Kuhn%E2%80%93Tucker_conditions). It says: “the necessary conditions are also sufficient for optimality.”

**Sources:** none listed. No primary source with a working link was found.

### Strong quasiconvexity forbids tied minima

**Remember:** Two equal minima would make their midpoint lower than both.

*Rules out counterexamples.* MSC 90C26 (Nonconvex programming, global optimization). arXiv math.OC. Level 2: later undergraduate.

**Definition.** A function h on a convex set is strongly quasiconvex with modulus γ &gt; 0 if, at each point z = (1−t)x + ty of a segment, h(z) ≤ max(h(x), h(y)) − γt(1−t)‖x − y‖²/2. So between two distinct points the function dips strictly below the higher end value.

**Problem.** A real strongly quasiconvex function on a convex set has at most one minimizer.

**How the definition helps.** Two distinct minimizers would give a point between them strictly below the minimum value (our own). Ordinary quasiconvexity, without the gap term, allows ties: f(x) = max(0, \|x\| − 1) has a whole interval of minimizers (our own).

**Paper or page:** [Characterizations of Strongly Quasiconvex Functions](https://arxiv.org/abs/2509.21580v1). It says: “If h is strongly quasiconvex with modulus γ &gt; 0”

**Sources:**

- [Characterizations of Strongly Quasiconvex Functions](https://arxiv.org/abs/2509.21580v1)

### Diminishing returns bound greedy gains

**Remember:** The best single gain covers at least one share of the remaining gap.

*Rules out counterexamples.* MSC 90C27 (Combinatorial optimization). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A nondecreasing set function has diminishing returns if adding an item outside B gains at least as much on A as on B whenever A ⊆ B. The greedy rule starts from the empty set and adds an item with the largest gain at each step.

**Problem.** Choose a budget k from one to the number of items. After k steps, the gain above the empty-set score is at least 1 − 1/e times the best gain with that budget.

**How the definition helps.** By diminishing returns, adding the k missing optimal items one at a time gains at most k times the best current single gain, so each greedy step closes at least 1/k of the gap (our own). After k steps at most (1 − 1/k)ᵏ ≤ 1/e of the gap remains (our own). Without diminishing returns, two items useful only together can lose to a small immediate gain (our own).

**Paper or page:** [Incremental space-filling design based on coverings and spacings: improving upon low discrepancy sequences](https://arxiv.org/abs/2106.05833v1). It says: “Let f be a non-decreasing submodular set function, then, for any given k, 1 ≤ k ≤ C, Algorithm 1 returns a set Xₖ with bounded optimality gap”

**Sources:**

- [Amaya Nogales Gómez, Luc Pronzato, Maria-João Rendas, Incremental space-filling design based on coverings and spacings: improving upon low discrepancy sequences](https://arxiv.org/abs/2106.05833v1)
- [G. L. Nemhauser, L. A. Wolsey and M. L. Fisher (1978), An Analysis of Approximations for Maximizing Submodular Set Functions I](https://doi.org/10.1007/BF01588971)

### Touching objectives share envelope slopes

**Remember:** An envelope touching a curve from above shares its slope.

*True by definition.* MSC 90C31 (Sensitivity, stability, parametric optimization), 91B02. arXiv math.OC, econ.TH. Level 2: later undergraduate.

**Definition.** The value function, or upper envelope, gives at each parameter the supremum of the objective over a fixed set of feasible choices. So it lies on or above every choice's objective curve and touches the curve of any choice that attains it.

**Problem.** At an interior parameter where the value function and an attaining objective curve are differentiable, their derivatives agree.

**How the definition helps.** The envelope minus an attaining curve is nonnegative and zero at that parameter, so where both are differentiable the difference has zero derivative and the slopes agree (our own). No assumption about how the optimal choice moves is needed. The remaining work is proving attainment and differentiability.

**Wikipedia:** [Envelope theorem](https://en.wikipedia.org/wiki/Envelope_theorem). It says: “the traditional envelope formula holds for optimization problems with arbitrary choice sets at any differentiability point of the value function”

**Sources:**

- [Milgrom and Segal, Envelope Theorems for Arbitrary Choice Sets (2002)](https://doi.org/10.1111/1468-0262.00296)

### Ratio minima become scalar zeros

**Remember:** Subtract the candidate times the denominator and look for zero.

*True by definition.* MSC 90C32 (Fractional programming). arXiv math.OC. Level 2: later undergraduate.

**Definition.** For a ratio A(x)/B(x) with B(x) &gt; 0, let F(q) be the minimum over x of A(x) − qB(x). Since B &gt; 0, each difference A(x) − qB(x) has the same sign as A(x)/B(x) − q.

**Problem.** If the ratio attains its minimum, and each defining minimum exists, F has exactly one zero. Its zero is the minimum ratio.

**How the definition helps.** Below the minimum ratio every difference is positive, so F(q) &gt; 0, and above it the ratio minimizer gives F(q) &lt; 0 (our own). At the minimum ratio all differences are nonnegative and the minimizer gives zero. The work moves to solving the difference minimizations.

**Paper or page:** [Fast Algorithms for Stackelberg Prediction Game with Least Squares Loss](https://arxiv.org/abs/2105.05531v1). It says: “Then, the equation F(q) = 0 has a unique solution.”

**Sources:**

- [Werner Dinkelbach, On Nonlinear Fractional Programming (1967)](https://doi.org/10.1287/mnsc.13.7.492)

### Scaling linearizes an affine ratio

**Remember:** Scale the denominator to one and optimize the scaled numerator.

*True by definition.* MSC 90C32 (Fractional programming). arXiv math.OC. Level 2: later undergraduate.

**Definition.** To optimize a ratio of affine expressions (c·x + α)/(d·x + β) with positive denominator, set t = 1/(d·x + β) and y = tx. Then the scaled denominator d·y + βt equals one, and the scaled numerator c·y + αt is linear in y and t.

**Problem.** On a nonempty bounded polyhedron where its denominator is positive, an affine ratio can be optimized by linear programming.

**How the definition helps.** Multiplying each constraint Gx ≤ h by t gives Gy ≤ ht, so optimizing c·y + αt subject to Gy ≤ ht, d·y + βt = 1 and t ≥ 0 is a linear program (our own). In reverse, t = 0 would give a nonzero direction along which the feasible region is unbounded, which boundedness excludes, so x = y/t recovers a solution (our own).

**Wikipedia:** [Linear-fractional programming](https://en.wikipedia.org/wiki/Linear-fractional_programming). It says: “Any linear-fractional program can be transformed into a linear program, assuming that the feasible region is non-empty and bounded”

**Sources:**

- [A. Charnes and W. W. Cooper (1962), Programming with Linear Fractional Functionals](https://doi.org/10.1002/nav.3800090303)

### A fixed return edge turns a flow into a circulation

**Remember:** Send the required amount back on one fixed edge.

*Makes the theorem clean to state or prove.* MSC 90C35 (Programming involving graphs or networks), 90C05. arXiv math.OC. Level 2: later undergraduate.

**Definition.** A circulation keeps each edge flow within its bounds and balances inflow and outflow at every vertex. A required flow d from s to t becomes a circulation once a zero-cost edge from t to s, with both bounds equal to d, sends that amount back.

**Problem.** A minimum-cost flow of fixed value has the same optimal cost as the resulting minimum-cost circulation. Feasible solutions correspond by adding or deleting the return edge.

**How the definition helps.** The return edge carries exactly d, balancing the net flow d out of s and into t (our own). Adding it turns a feasible flow into a circulation, and deleting it reverses this. Its zero cost leaves the objective unchanged.

**Wikipedia:** [Minimum-cost flow problem](https://en.wikipedia.org/wiki/Minimum-cost_flow_problem). It says: “forcing the total flow from s to t to also be d.”

**Sources:** none listed. No primary source with a working link was found.

### Consistent estimates settle vertices once

**Remember:** The estimate never drops by more than the edge cost.

*Rules out counterexamples.* MSC 90C35 (Programming involving graphs or networks). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A heuristic h estimates each vertex's remaining cost to a goal. It is consistent if it is zero at the goal and h(u) ≤ c(u,v) + h(v) for every edge from u to v, so it never drops by more than an edge's cost.

**Problem.** In a finite graph with nonnegative edge costs and a reachable goal, A\* selects the vertex with least cost so far plus estimated remaining cost. With consistent estimates it can permanently close each selected vertex and return a shortest path.

**How the definition helps.** Consistency makes each adjusted cost c(u,v) + h(v) − h(u) nonnegative, and adjusted path costs telescope to A\* priorities, so A\* is Dijkstra’s algorithm on adjusted costs (our own). Admissibility alone, h never above the true remaining cost, is not enough: take costs 3, 1, 1, 3 on s→a, s→b, b→a, a→g, with h(b) = 4 and other estimates zero (our own). Closing a permanently then returns 6 instead of 5 (our own).

**Wikipedia:** [Consistent heuristic](https://en.wikipedia.org/wiki/Consistent_heuristic). It says: “A consistent heuristic is also admissible, i.e. it never overestimates the cost of reaching the goal”

**Sources:**

- [P. E. Hart, N. J. Nilsson and B. Raphael (1968), A Formal Basis for the Heuristic Determination of Minimum Cost Paths](https://doi.org/10.1109/tssc.1968.300136)

### Path flows turn maximum flow into path packing

**Remember:** Send flow on paths and throw away cycles.

*Makes the theorem clean to state or prove.* MSC 90C35 (Programming involving graphs or networks), 90C05. arXiv math.OC. Level 2: later undergraduate.

**Definition.** A path packing puts nonnegative weights on directed paths from source to sink, so that on each edge the weights of the paths through it sum to at most its capacity. Each path enters and leaves every intermediate vertex equally often, so a packing is automatically a balanced flow.

**Problem.** In a finite directed network, the greatest total weight of a path packing equals the maximum flow value.

**How the definition helps.** Summing the weighted paths gives a feasible flow whose value is the total weight (our own). Conversely, the flow decomposition theorem splits a maximum flow into weighted paths and cycles. Dropping the cycles keeps the value and only frees capacity.

**Paper or page:** [The Maxflow problem and a generalization to simplicial complexes](https://arxiv.org/abs/1212.1406v1). It says: “Let f be a flow on (G,c), then f can be decomposed as the sum of at most m s-t path-flows and cycle-flows.”

**Sources:** none listed. No primary source with a working link was found.

### Residual cycles certify cheapest flows

**Remember:** Unused capacity permits forward moves, and existing flow permits refunds in reverse.

*Makes the theorem clean to state or prove.* MSC 90C35 (Programming involving graphs or networks). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** For each edge with capacity u, flow f and unit cost c, the residual graph has a forward edge of capacity u − f and cost c if f &lt; u, and a reverse edge of capacity f and cost −c if f &gt; 0. The reverse edge refunds cost by cancelling flow, and a directed residual cycle is a change that keeps every supply.

**Problem.** A feasible flow with prescribed net supply at each vertex is cheapest exactly when its residual graph has no negative-cost directed cycle.

**How the definition helps.** Sending a little flow around a negative-cost residual cycle keeps supplies and lowers cost. Conversely, the difference from a cheaper flow splits into positive-weight residual cycles, whose weighted costs sum to a negative number (our own). So at least one of those cycles has negative cost.

**Wikipedia:** [Minimum-cost flow problem](https://en.wikipedia.org/wiki/Minimum-cost_flow_problem). It says: “The reverse arc (which has negative flow value) has a negative cost −a(e).”

**Paper or page:** [An Optimal Algorithm for the Stacker Crane Problem on Fixed Topologies](https://arxiv.org/abs/2410.06764v2). It says: “Every non-negative circulation on a graph with cycle rank r can be decomposed into at most r non-negative cycle flows.”

**Sources:**

- [A. V. Goldberg and R. E. Tarjan (1989), Finding Minimum-Cost Circulations by Canceling Negative Cycles](https://doi.org/10.1145/76359.76368)
- [Yike Chen, Ke Shi, Chao Xu, An Optimal Algorithm for the Stacker Crane Problem on Fixed Topologies](https://arxiv.org/abs/2410.06764v2)

### Residual edges certify maximum flow

**Remember:** If the sink is unreachable, the reachable side gives a full cut.

*True by definition.* MSC 90C35 (Programming involving graphs or networks). arXiv math.OC. Level 2: later undergraduate.

**Definition.** The residual network has a forward edge wherever an edge has spare capacity and a backward edge wherever its flow could be cancelled, each with that amount as capacity. Backward edges let a path reroute flow sent earlier, which spare capacity alone would miss.

**Problem.** In a finite directed network, a feasible flow is maximum exactly when its residual network has no positive-capacity path from source to sink.

**How the definition helps.** A residual path from source to sink raises the flow by its smallest capacity (our own). If no such path exists, the vertices reachable from the source form a cut whose leaving edges are full and whose entering edges are empty (our own). The flow then equals that cut's capacity, which bounds every feasible flow (our own).

**Wikipedia:** [Ford–Fulkerson algorithm](https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm). It says: “If S is the set of nodes reachable by s in the residual network”

**Sources:**

- [Ford and Fulkerson, Maximal Flow Through a Network (1956)](https://doi.org/10.4153/cjm-1956-045-5)

### A saddle point certifies primal and dual optimality

**Remember:** At a saddle, the two orders meet at the same value.

*True by definition.* MSC 90C46 (Optimality conditions and duality in mathematical programming), 90C25. arXiv math.OC. Level 2: later undergraduate.

**Definition.** For constraints gᵢ(x) ≤ 0, the Lagrangian is L(x, λ) = f(x) + ∑λᵢgᵢ(x) with all λᵢ ≥ 0. A saddle point (x, λ) has x minimizing L for those weights and λ maximizing L for that x, so it gives a lower bound and an upper bound at the same value.

**Problem.** A saddle point gives both a constrained minimum and dual weights that maximize the infimum of the Lagrangian. These two optimal values agree even without convexity.

**How the definition helps.** Maximizing over the weights forces x to be feasible, since a violated constraint makes L unbounded in its weight, and gives L(x, λ) = f(x) (our own). Minimizing over x makes L(x, λ) the dual value at λ, so a primal value equals a dual value. Weak duality then makes both optimal, and existence of a saddle point is the separate issue.

**Wikipedia:** [Karush–Kuhn–Tucker conditions](https://en.wikipedia.org/wiki/Karush%E2%80%93Kuhn%E2%80%93Tucker_conditions). It says: “is a saddle point”

**Sources:** none listed. No primary source with a working link was found.

### Multipliers turn constraints into stationarity

**Remember:** Subtract the right constraint gradients to cancel the objective gradient.

*Makes the theorem clean to state or prove.* MSC 90C46 (Optimality conditions and duality in mathematical programming). arXiv math.OC. Level 2: later undergraduate.

**Definition.** For a smooth equality constraint G(x) = 0, the Lagrangian is the objective minus a weighted sum of the constraint functions, with the Lagrange multipliers as weights. The Lagrangian is critical at a point and multiplier exactly when the point is feasible and the objective gradient is a combination of the constraint gradients.

**Problem.** Let the objective and constraints be smooth on an open subset of finite-dimensional space. At a constrained local extremum with independent constraint gradients, some multiplier makes every first derivative of the Lagrangian zero.

**How the definition helps.** At a constrained extremum the objective's derivative vanishes on the tangent space of the constraint set (our own). With independent constraint gradients, the implicit function theorem identifies that tangent space with the kernel of the constraint derivative, so the objective gradient lies in the span of the constraint gradients. Minimizing x subject to x² = 0 has a zero constraint gradient at 0 and no multiplier (our own).

**nLab:** [Lagrange multiplier](https://ncatlab.org/nlab/show/Lagrange+multiplier). It says: “Then there is a function(al) l in Y\* such that x is a critical point of the function F − l∘G.”

**Sources:** none listed. No primary source with a working link was found.

### Taking an infimum makes the Lagrange dual function concave

**Remember:** The lower envelope of affine functions is concave.

*True by definition.* MSC 90C46 (Optimality conditions and duality in mathematical programming), 90C25. arXiv math.OC. Level 2: later undergraduate.

**Definition.** With nonnegative weights λᵢ on constraints gᵢ(x) ≤ 0, the dual function takes, at each λ, the infimum over x of the Lagrangian f(x) + ∑λᵢgᵢ(x). For fixed x this is affine in λ, so the dual function is a lower envelope of affine functions.

**Problem.** On a nonempty domain with finite objective and constraint values, the dual function is concave, even if the original problem lacks convexity. Its values can include −∞.

**How the definition helps.** A pointwise infimum of affine functions is concave, since the region below its graph is an intersection of half-spaces (our own). No convexity of f or g is used. Computing the infimum may still need a nonconvex minimization.

**Wikipedia:** [Duality (optimization)](https://en.wikipedia.org/wiki/Duality_%28optimization%29). It says: “it is a point-wise infimum of affine functions.”

**Sources:** none listed. No primary source with a working link was found.

### Jackson queues factor at equilibrium

**Remember:** Traffic rates include return visits, but the equilibrium probabilities multiply.

*Rules out counterexamples.* MSC 90B15 (Stochastic network models in operations research). arXiv math.PR. Level 3: graduate.

**Definition.** In an open Jackson network, independent Poisson streams feed finitely many single-server stations with independent exponential service at fixed station rates. After service, each job independently moves or exits with fixed routing probabilities and eventually exits almost surely. Each station's traffic rate, counting return visits, is below its service rate.

**Problem.** At equilibrium the station counts are independent. Each has a geometric distribution on the nonnegative integers, with successive probabilities in the ratio of arrival rate to service rate.

**How the definition helps.** Jackson’s theorem checks that a product of geometric probabilities, built from the traffic rates, solves the equilibrium balance equations (our own). Without Poisson arrivals the product fails: let arrivals come every three time units with uniform random phase, and each job spend one unit at each of two stations in turn (our own). Each station is busy a third of the time, yet they are never busy together (our own).

**Wikipedia:** [Jackson network](https://en.wikipedia.org/wiki/Jackson_network). It says: “In general, this network does not have a product-form stationary distribution, so approximations are sought.”

**Sources:**

- [J. R. Jackson (1957), Networks of Waiting Lines](https://doi.org/10.1287/opre.5.4.518)

### Poisson arrivals see time averages

**Remember:** A constant arrival rate samples busy and idle time in proportion.

*Rules out counterexamples.* MSC 90B22 (Queues and service in operations research). arXiv math.PR. Level 3: graduate.

**Definition.** Arrivals are Poisson, with an instantaneous rate that stays constant whatever the past queue history. Each arrival records the state just before it arrives.

**Problem.** In a stationary queue with this property, an arrival sees the same state probabilities as a random time.

**How the definition helps.** Since the rate ignores the past, the expected number of arrivals seeing a state equals the rate times the expected time spent in that state (our own). In our own counterexample, arrivals come exactly two time units apart with uniform random phase, and each service lasts one unit. Every arrival finds the server idle, although it is busy half the time.

**Wikipedia:** [Arrival theorem](https://en.wikipedia.org/wiki/Arrival_theorem). It says: “the probability of the state as seen by an outside random observer is the same as the probability of the state seen by an arriving customer.”

**Sources:**

- [R. W. Wolff (1982), Poisson Arrivals See Time Averages](https://doi.org/10.1287/opre.30.2.223)

### Reversed queues yield Poisson departures

**Remember:** Backward arrivals are forward departures.

*True by definition.* MSC 90B22 (Queues and service in operations research). arXiv math.PR. Level 3: graduate.

**Definition.** A single server works whenever jobs wait, with Poisson arrivals and independent exponential service times at a higher rate than arrivals. The equilibrium customer count is reversible: run backward in time it has the same law, so its departures look like arrivals (our own).

**Problem.** In equilibrium, departures form a Poisson process with the same rate as arrivals.

**How the definition helps.** This birth–death chain satisfies detailed balance between adjacent counts, so reversal preserves its law (our own). Forward departures are the reversed chain’s arrivals, so they form a Poisson process at the arrival rate (our own).

**Wikipedia:** [Burke's theorem](https://en.wikipedia.org/wiki/Burke%27s_theorem). It says: “the arrival instants in the forward Markov chain are the departure instants of the reversed Markov chain.”

**Sources:**

- [P. J. Burke (1956), The Output of a Queuing System](https://doi.org/10.1287/opre.4.6.699)

### Integer dual certificates force integer vertices

**Remember:** An integer dual solution prices integer bounds at an integer total.

*Makes the theorem clean to state or prove.* MSC 90C10 (Integer programming), 90C46. arXiv math.OC. Level 3: graduate.

**Definition.** A rational system Ax ≤ b is totally dual integral if, for every integer objective c with a finite maximum, the dual problem of minimizing b·y over y ≥ 0 with Aᵀy = c has an integer optimal solution. With integer b, every such maximum b·y is then an integer.

**Problem.** If a totally dual integral system has integer bounds b, its feasible region is the convex hull of its integer points.

**How the definition helps.** Integer b and integer y make every finite maximum of an integer objective an integer (our own). A separate characterization then does the work: a rational polyhedron whose finite maxima for integer objectives are all integers is the convex hull of its integer points (our own).

**Wikipedia:** [Total dual integrality](https://en.wikipedia.org/wiki/Total_dual_integrality). It says: “there is an integer optimal dual solution.”

**Sources:**

- [Giles and Pulleyblank, Total dual integrality and integer polyhedra (1979)](https://doi.org/10.1016/0024-3795(79)90018-1)

### Quadratic perspectives encode on–off mixtures

**Remember:** Divide output by the on fraction before charging the on cost.

*True by definition. Confidence: medium.* MSC 90C11 (Mixed integer programming), 90C20. arXiv math.OC. Level 3: graduate.

**Definition.** An on–off unit is off with z = x = 0 and t ≥ 0, or on with z = 1 and t ≥ x². The closed perspective x²/z is the least cost of being on a fraction z of the time with average output x; at z = 0 it is 0 for x = 0 and infinity otherwise.

**Problem.** The convex hull of the on–off set consists exactly of the points with 0 ≤ z ≤ 1 and t at least the closed perspective.

**How the definition helps.** A mixture with on weight z and average output x costs at least z(x/z)² = x²/z, by convexity of the square (our own). A single on state producing x/z attains this, and raising t gives every larger value (our own). At z = 0 only off states contribute.

**Paper or page:** [A note on quadratic constraints with indicator variables: Convex hull description and perspective relaxation](https://arxiv.org/abs/2209.01433v1). It says: “x²/z = maxₚ∈ℝ (px − p²z/4).”

**Sources:**

- [A note on quadratic constraints with indicator variables: Convex hull description and perspective relaxation](https://arxiv.org/abs/2209.01433v1)

### Escape directions detect compact minimizer sets

**Remember:** Compact minimizers require the cost to rise in every feasible escape direction.

*Makes the theorem clean to state or prove.* MSC 90C25 (Convex programming), 49J53. arXiv math.OC. Level 3: graduate.

**Definition.** For a finite convex cost f, the recession cost in direction d is the limit of (f(x + td) − f(x))/t as t grows, the cost's eventual slope along d. A recession direction of the feasible set is one in which every ray from a feasible point stays feasible.

**Problem.** Minimize a finite convex cost on Euclidean space over a nonempty closed convex set. The minimizer set is nonempty and compact exactly when the recession cost is positive in every nonzero recession direction.

**How the definition helps.** A nonempty closed convex sublevel set is unbounded exactly when it contains a ray, whose direction is a feasible recession direction with nonpositive recession cost (our own). So positivity makes every nonempty sublevel set compact, and continuity gives a nonempty compact minimizer set (our own). Conversely, a nonpositive recession cost keeps the whole feasible ray from a minimizer at the minimum (our own).

**Paper or page:** [Weak sharp minima at infinity and solution stability in mathematical programming via asymptotic analysis](https://arxiv.org/abs/2410.04695). It says: “is nonempty and compact.”

**Sources:** none listed. No primary source with a working link was found.

### Negative entropy turns mirror descent into multiplicative exponential weights

**Remember:** Exponentiate the negative gradient, multiply by the old probabilities, then normalize.

*True by definition.* MSC 90C25 (Convex programming), 65K05. arXiv cs.LG, math.OC. Level 3: graduate.

**Definition.** For a positive probability vector p on a finite set, the entropy mirror step with step size η &gt; 0 and gradient estimate g minimizes η∑ₓq(x)g(x) + ∑ₓq(x)log(q(x)/p(x)) over probability vectors q, with a zero coordinate contributing zero (our own). The penalty's derivative in q(x) is the logarithm log(q(x)/p(x)) + 1, so a stationary point is exponential in −ηg (our own).

**Problem.** For a positive current vector p and step size η &gt; 0, the new probabilities are proportional to p(x) exp(−ηg(x)). Division by the sum over x normalizes them.

**How the definition helps.** Stationarity with one multiplier for the sum gives log(q(x)/p(x)) + 1 + ηg(x) = constant, so q(x) is proportional to p(x)exp(−ηg(x)) (our own). Strict convexity makes this positive normalized candidate the unique minimizer (our own).

**Paper or page:** [Distances for Markov chains from sample streams](https://arxiv.org/abs/2505.18005v1). It says: “When 𝒵 = Δ\_𝒳 is the probability simplex on a finite set 𝒳 and Ψ is the negative entropy defined as Ψ(p) = ∑ₓ p(x) log p(x), p ∈ Δ\_𝒳, the OSMD update reduces to”

**Sources:**

- [Sergio Calo, Anders Jonsson, Gergely Neu, Ludovic Schwartz, Javier Segovia-Aguas, Distances for Markov chains from sample streams, arXiv:2505.18005v1 (2025)](https://arxiv.org/abs/2505.18005v1)

### Proximal steps expose composite optima

**Remember:** Take a gradient step, then let the proximal step handle the rest.

*True by definition.* MSC 90C25 (Convex programming), 49J52. arXiv math.OC. Level 3: graduate.

**Definition.** For a &gt; 0, the proximal map P(z) is the point y minimizing g(y) + ‖y − z‖²/(2a), which lowers g while staying near z. A forward-backward step takes the gradient step x − a∇f(x) and then applies P.

**Problem.** Let f be convex and differentiable on Euclidean space, and let g be convex with closed sublevel sets, finite somewhere and never −∞. Then x minimizes f + g exactly when P(x − a∇f(x)) = x.

**How the definition helps.** P(z) = x exactly when (z − x)/a is a subgradient of g at x, the slope of an affine lower bound touching g there (our own). With z = x − a∇f(x) this says −∇f(x) is a subgradient of g at x. The sum rule for subgradients makes this the optimality condition for f + g.

**Paper or page:** [Optimization with First Order Algorithms](https://arxiv.org/abs/2410.19506v1). It says: “\\operatorname {zeros}(\\partial \\mathcal{J})=\\operatorname {Fix}(\\operatorname {prox}<sub>\\gamma g</sub>(\\operatorname {Id}-\\gamma \\nabla f)).”

**Sources:** none listed. No primary source with a working link was found.

### Relative smoothness ensures descent

**Remember:** Reference curvature pays for the objective's departure from its tangent.

*True by definition.* MSC 90C25 (Convex programming). arXiv math.OC. Level 3: graduate.

**Definition.** On an open convex domain, a differentiable f is smooth relative to a differentiable convex reference h with constant L &gt; 0 if Lh − f is convex. Equivalently, the gap between f and its tangent at x is at most L times the Bregman distance, the gap between h and its own tangent at x.

**Problem.** At x, minimize the tangent estimate of f plus the Bregman distance from x divided by a positive step size. If a minimizer exists in the domain and the step size is at most 1/L, this step cannot raise f.

**How the definition helps.** So the tangent estimate of f plus L times the Bregman distance is an upper bound on f that equals f at x, and a step size at most 1/L only enlarges it (our own). Minimizing a bound that touches f at x gives a value no higher than f(x) (our own).

**Paper or page:** [Multilevel Bregman Proximal Gradient Descent](https://arxiv.org/abs/2506.03950v3). It says: “For any τ ∈ (0, L⁻¹\], the following inequality holds f(x⁺τ) ≤ f(x) − Dφ(x, x⁺τ)/τ.”

**Sources:**

- [Yara Elshiaty, Stefania Petra, Multilevel Bregman Proximal Gradient Descent](https://arxiv.org/abs/2506.03950v3)

### The subgradient definition makes proximal fixed points minimizers

**Remember:** A proximal step stays put exactly when zero is a subgradient.

*True by definition. Confidence: medium.* MSC 90C25 (Convex programming), 65K10, 47H09. arXiv math.OC. Level 3: graduate.

**Definition.** Let f be a proper lower semicontinuous convex function on a real Hilbert space. At a point p of finite value, q is a subgradient if f(z) ≥ f(p) + ⟨q,z−p⟩ for every z. Define prox(v) as the unique p for which v − p is a subgradient at p.

**Problem.** A point x satisfies prox(x) = x exactly when x minimizes f.

**How the definition helps.** With v = p = x, the definition says prox(x) = x exactly when zero is a subgradient at x, which means f(z) ≥ f(x) for every z. The usual minimization definition first needs an optimality argument to remove the quadratic penalty (our own comparison). Relating the two definitions needs proof that the quadratic problem has a unique answer satisfying the subgradient test.

**Wikipedia:** [Proximal operator](https://en.wikipedia.org/wiki/Proximal_operator). It says: “Fixed points of prox<sub>f</sub> are minimizers of f”

**Sources:**

- [Neal Parikh and Stephen Boyd, Proximal Algorithms, Foundations and Trends in Optimization 1 (2014)](https://doi.org/10.1561/2400000003)

### Pseudoconvexity makes stationary points global minima

**Remember:** A better point must point downhill.

*Rules out counterexamples.* MSC 90C26 (Nonconvex programming, global optimization). arXiv math.OC. Level 3: graduate.

**Definition.** A differentiable function on a convex domain is pseudoconvex if, at each point, the directional derivative toward any point of lower value is strictly negative.

**Problem.** Every point with zero gradient is a global minimizer of a differentiable pseudoconvex function on a convex domain.

**How the definition helps.** At a point with zero gradient every directional derivative is zero, so no point can have a lower value (our own). In our own example, x³ is quasiconvex, with convex sets below each level, and has zero derivative at zero, yet takes lower values. The work is verifying the strict derivative condition for the given function.

**Paper or page:** [A Refined Proximal Algorithm for Nonconvex Multiobjective Optimization in Hilbert Spaces](https://arxiv.org/abs/2403.09922v1). It says: “If x ∈ Ω is a Pareto critical point of F in Ω, then it is a weak Pareto solution of F in Ω.”

**Sources:**

- [G. C. Bento, J. X. Cruz Neto, J. O. Lopes, B. S. Mordukhovich, P. R. Silva Filho, A Refined Proximal Algorithm for Nonconvex Multiobjective Optimization in Hilbert Spaces](https://arxiv.org/abs/2403.09922v1)

### Threshold averages preserve minima

**Remember:** A threshold average cannot beat its cheapest set.

*True by definition. Confidence: medium.* MSC 90C27 (Combinatorial optimization). arXiv math.OC. Level 3: graduate.

**Definition.** For a nonnegative score on subsets of a finite set, with score zero for the empty set, the Lovász extension at a point of the unit cube averages the scores over thresholds chosen uniformly between zero and one. Each threshold picks the set of coordinates above it, so the extension is an average of set scores.

**Problem.** The smallest value of the extension on the cube equals the smallest value of the set function.

**How the definition helps.** An average of set scores is at least their minimum, and the zero-one vector of a minimizing set attains it (our own). The usual sorted-coordinate formula is this average split at the coordinates.

**Paper or page:** [Conductance Estimation in Digraphs: Submodular Transformation, Lovász Extension and Dinkelbach Iteration](https://arxiv.org/abs/2506.23131v1). It says: “then the Lovász extension Fᴸ of f can be calculated as the following:”

**Sources:**

- [Sihong Shao, Chuan Yang, Xinyang Ye, Conductance Estimation in Digraphs: Submodular Transformation, Lovász Extension and Dinkelbach Iteration](https://arxiv.org/abs/2506.23131v1)

### One score tests coordinatewise dominance

**Remember:** Score the best candidate by its worst shortfall.

*True by definition.* MSC 90C29 (Multi-objective and goal programming), 90C17. arXiv math.OC. Level 3: graduate.

**Definition.** The score of a target y measures how far the best attainable vector falls short of y in its worst coordinate. For a nonempty compact set A of attainable vectors, it is the minimum over a in A of the largest coordinate of y − a.

**Problem.** Some attainable vector matches or exceeds every target coordinate exactly when the score is nonpositive. Changing the target changes its score by at most the largest absolute coordinate change.

**How the definition helps.** A nonpositive score means that some candidate falls short in no coordinate, so it covers every coordinate at once (our own). Compactness and continuity of the maximum give a minimizing candidate (our own). Using a minimizer for one target as a candidate for the other proves the change bound (our own).

**Paper or page:** [Set-based Robust Optimization of Uncertain Multiobjective Problems via Epigraphical Reformulations](https://arxiv.org/abs/2212.14018v1). It says: “A − ℝᵐ₊ = {y ∈ ℝᵐ \| ψₐ(y) ≤ 0}”

**Sources:**

- [Set-based Robust Optimization of Uncertain Multiobjective Problems via Epigraphical Reformulations](https://arxiv.org/abs/2212.14018v1)

### Extra variables separate ratio terms

**Remember:** Tune the extra variable until the two terms match.

*True by definition.* MSC 90C32 (Fractional programming). arXiv math.OC. Level 3: graduate.

**Definition.** Replace each positive ratio a/b by a²y + 1/(4b²y), with its own new variable y &gt; 0. The two terms have fixed product a²/(4b²), so their sum is at least a/b, with equality exactly at y = 1/(2ab) (our own).

**Problem.** For a finite sum of positive ratios, the enlarged minimization has the same infimum. Its minimizers give exactly the original minimizers after discarding the extra variables.

**How the definition helps.** Minimizing over each new variable first gives back the original cost exactly (our own). So both problems have the same infimum, and minimizers correspond after the extra variables are dropped (our own).

**Paper or page:** [Transforms for Multiplicative and Fractional Programming with Broad Applications in Edge Computing and Communication Networks](https://arxiv.org/abs/2312.06202v1). It says: “Fₖ(x,yₖ) ≔ \[Aₖ(x)\]²yₖ + 1/(4\[Bₖ(x)\]²yₖ)”

**Sources:**

- [Yitong Wang, Chang Liu, Jun Zhao, Transforms for Multiplicative and Fractional Programming with Broad Applications in Edge Computing and Communication Networks](https://arxiv.org/abs/2312.06202v1)

### Closure captures limiting linear constraints

**Remember:** Valid inequalities include limits of combined constraints.

*Rules out counterexamples.* MSC 90C34 (Semi-infinite programming), 90C46. arXiv math.OC. Level 3: graduate.

**Definition.** Code each constraint a·x ≥ b as the pair (a, b). The closed cone is the closure of all finite nonnegative combinations of these pairs and the pair (0, −1) for 0 ≥ −1, so it also holds limits of combined inequalities.

**Problem.** For a consistent linear system in finite dimensions, a linear inequality follows exactly when its pair lies in that closed cone.

**How the definition helps.** Every pair in the closed cone gives an inequality that holds at each feasible point, because valid inequalities survive nonnegative combinations and limits. For the converse, the extended Farkas lemma gives a feasible point that violates any inequality whose pair lies outside the cone. In our own example, x ≥ −1/n for all positive integers n implies x ≥ 0, whose pair (1, 0) is only a limit of the pairs (1, −1/n).

**Paper or page:** [On the Polyhedrality of the Chvatal-Gomory Closure](https://arxiv.org/abs/2106.00295v1). It says: “The inequality ax ≥ b is a consequence of the consistent system”

**Sources:** none listed. No primary source with a working link was found.

### Thresholds price directed cuts

**Remember:** An edge is cut by every threshold between its labels.

*True by definition.* MSC 90C35 (Programming involving graphs or networks). arXiv math.OC. Level 3: graduate.

**Definition.** Give each vertex of a finite directed graph a real label and each edge a nonnegative weight. The outgoing cut cost of a vertex set is the total weight of edges leaving it. The Lovász extension integrates, over all real thresholds t, the cut cost of the set of vertices with label above t.

**Problem.** Each edge contributes its weight times the larger of zero and the tail label minus the head label.

**How the definition helps.** An edge leaves the set exactly when the threshold lies at or above its head label and below its tail label (our own). So it contributes its weight times the length of that interval, which is the larger of zero and the tail label minus the head label (our own).

**Paper or page:** [Conductance Estimation in Digraphs: Submodular Transformation, Lovász Extension and Dinkelbach Iteration](https://arxiv.org/abs/2506.23131v1). It says: “Let G = (V,A) be a digraph, the Lovász extension of cut⁺(S) is cut⁺ᴸ(x) = ∑ᵢ→ⱼ (wᵢⱼ/2)(xᵢ − xⱼ + \|xᵢ − xⱼ\|).”

**Sources:**

- [Sihong Shao, Chuan Yang, Xinyang Ye, Conductance Estimation in Digraphs: Submodular Transformation, Lovász Extension and Dinkelbach Iteration](https://arxiv.org/abs/2506.23131v1)

### A strictly feasible point closes the duality gap in convex programs

**Remember:** One point with slack in every curved constraint closes the gap.

*Rules out counterexamples.* MSC 90C46 (Optimality conditions and duality in mathematical programming), 90C25. arXiv math.OC. Level 3: graduate.

**Definition.** Slater's condition asks a convex program, with convex inequalities and affine equations in finite dimensions, for one feasible point with slack in every nonaffine inequality (our own). The point must lie in the relative interior of the common domain, and affine inequalities may hold with equality (our own).

**Problem.** Under Slater's condition, the optimal value of a convex program equals that of its dual, and a finite dual value is attained. Without the condition this can fail.

**How the definition helps.** The slack point makes the hyperplane that separates attainable values from values below the optimum non-vertical, so its objective weight is nonzero and gives the dual solution (our own). Without it, minimizing x subject to x² ≤ 0 has primal value 0, while the dual values −1/(4λ) approach 0 but never reach it (our own).

**Wikipedia:** [Slater's condition](https://en.wikipedia.org/wiki/Slater%27s_condition), [Strong duality](https://en.wikipedia.org/wiki/Strong_duality). It says: “In particular, if Slater's condition holds for the primal problem, then the duality gap is zero, and if the dual value is finite then it is attained.”

**Sources:**

- [M. Slater, Lagrange Multipliers Revisited, Cowles Commission Discussion Paper No. 403 (1950)](https://cowles.yale.edu/sites/default/files/files/pub/d00/d0080.pdf)
- [S. Boyd and L. Vandenberghe, Convex Optimization, Cambridge University Press (2004)](https://web.stanford.edu/~boyd/cvxbook/)

### Closed cones certify infeasibility

**Remember:** A closed image leaves a gap around every point outside it.

*Rules out counterexamples.* MSC 90C46 (Optimality conditions and duality in mathematical programming). arXiv math.OC. Level 3: graduate.

**Definition.** A conic linear system asks for x in a nonempty convex cone K, in finite dimensions, with Ax = b, so it is solvable exactly when b lies in the image cone A(K). The key condition is that A(K) is closed, so every point outside it lies at positive distance from it.

**Problem.** If A(K) is closed and b lies outside it, there is a certificate of infeasibility. This is a linear functional that is nonnegative on A(K) and negative at b.

**How the definition helps.** A point at positive distance from a closed convex cone can be strictly separated from it, and the separating functional is the certificate. Our own example sends a 2 × 2 positive semidefinite matrix to its upper-left and off-diagonal entries, so (ε, 1) is in the image for every ε &gt; 0 but (0, 1) is not. Since (0, 1) is a limit of image points, no continuous certificate exists for it.

**Wikipedia:** [Farkas' lemma](https://en.wikipedia.org/wiki/Farkas%27_lemma). It says: “The closedness condition is necessary”

**Sources:** none listed. No primary source with a working link was found.

### Constraint qualifications make the KKT conditions necessary at a minimizer

**Remember:** Independent active gradients let multipliers balance the objective gradient.

*Rules out counterexamples.* MSC 90C46 (Optimality conditions and duality in mathematical programming), 90C30. arXiv math.OC. Level 3: graduate.

**Definition.** At a point x, a smooth constraint is active if it is an equation hⱼ(x) = 0 or an inequality gᵢ(x) ≤ 0 that holds with equality. The linear independence constraint qualification requires the gradients of the active constraints at x to be linearly independent.

**Problem.** At a smooth constrained minimum satisfying the linear independence constraint qualification, multipliers make the objective gradient plus the weighted constraint gradients zero. Inequality multipliers are nonnegative and vanish on inactive constraints.

**How the definition helps.** Independent active gradients make the linearized constraints describe the true feasible directions, and then Farkas's lemma gives the multipliers (our own summary). Without the condition, minimizing x subject to x² ≤ 0 has minimizer 0 with constraint gradient 0, so 1 + 2λ·0 = 0 has no solution (our own).

**Wikipedia:** [Karush–Kuhn–Tucker conditions](https://en.wikipedia.org/wiki/Karush%E2%80%93Kuhn%E2%80%93Tucker_conditions). It says: “For the constrained case, the situation is more complicated, and one can state a variety of (increasingly complicated) "regularity" conditions under which a constrained minimizer also satisfies the KKT conditions.”

**Sources:**

- [H. W. Kuhn and A. W. Tucker, Nonlinear programming, Proceedings of the Second Berkeley Symposium on Mathematical Statistics and Probability (1951), 481–492](https://doi.org/10.1525/9780520411586-036)

### Hidden hyperplane convexity makes aggregated inequalities give the convex hull

**Remember:** Seek convexity in the constraint values, not the feasible set.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 90C20 (Quadratic programming), 52A41. arXiv math.OC. Level 4: research.

**Definition.** Hidden hyperplane convexity (HHC) asks for convexity in the space of constraint values rather than in the feasible set. Precisely, homogenize each quadratic fᵢ to a quadratic form in (x, xₙ₊₁), and require the vector of these forms to have a convex image on every linear hyperplane. An aggregation is a nonnegative weighted sum of the original inequalities.

**Problem.** Let n ≥ 3 and let S be the set where finitely many quadratics are all negative. Suppose S is nonempty and its convex hull is not all of ℝⁿ. Under HHC, the convex hull of S is the intersection of the sets given by suitable aggregations.

**How the definition helps.** A valid linear inequality for the hull gives a hyperplane that misses the homogenized set, by Lemma 5.4 of the paper. On that hyperplane HHC makes the image convex, and the image misses the negative orthant, so a nonnegative separating weight vector exists. Those weights give the aggregation (our own reading).

**Paper or page:** [Aggregations of quadratic inequalities and hidden hyperplane convexity](https://arxiv.org/abs/2210.01722v2), [Aggregations of quadratic inequalities and hidden hyperplane convexity](https://arxiv.org/abs/2210.01722v2), [Aggregations of quadratic inequalities and hidden hyperplane convexity](https://arxiv.org/abs/2210.01722v2). It says: “We show that if the quadratic map associated with S satisfies HHC, then the convex hull of S is defined by special aggregations.”

**Sources:**

- [Grigoriy Blekherman, Santanu S. Dey, Shengding Sun, Aggregations of quadratic inequalities and hidden hyperplane convexity, arXiv:2210.01722v2 (2022)](https://arxiv.org/abs/2210.01722v2)
- [Grigoriy Blekherman, Santanu S. Dey, Shengding Sun, Aggregations of Quadratic Inequalities and Hidden Hyperplane Convexity, SIAM Journal on Optimization (2024)](https://doi.org/10.1137/22m1528215)

### A ball around a dual point certifies zero coefficients

**Remember:** A dual ball missing a constraint face certifies a zero coefficient.

*Makes the theorem clean to state or prove.* MSC 90C25 (Convex programming), 49N15. arXiv math.OC. Level 4: research.

**Definition.** For the lasso cost P(b) = ‖y−Xb‖²/2 + λ∑ⱼ\|bⱼ\| with λ &gt; 0, take any trial vector b and any dual point θ with \|Xⱼᵀθ\| ≤ 1 for every column Xⱼ, whose dual value is D(θ) = λ⟨y,θ⟩ − λ²‖θ‖²/2. The safe ball has center θ and radius r = √(2(P(b)−D(θ)))/λ. It contains the unknown dual maximizer, because the dual objective is strongly concave with modulus λ² (our own).

**Problem.** If \|Xⱼᵀθ\| + ‖Xⱼ‖r &lt; 1 for some column Xⱼ, the corresponding coefficient is zero in every optimal solution.

**How the definition helps.** At an optimum, a nonzero coefficient bⱼ forces \|Xⱼᵀθ̂\| = 1 for the dual maximizer θ̂. Since θ̂ lies in the ball, Cauchy–Schwarz gives \|Xⱼᵀθ̂\| ≤ \|Xⱼᵀθ\| + ‖Xⱼ‖r &lt; 1 under the test (our own). So that coefficient is zero in every optimal solution.

**Paper or page:** [Continuation Path with Linear Convergence Rate](https://arxiv.org/abs/2112.05104v1). It says: “\\lVert  \\hat  {\\theta }<sup>{</sup>({\\lambda })} - \\theta  \\rVert  \\leq  \\sqrt  { \\frac  {2 \\nu }{\\lambda <sup>2</sup>}  \\Gap  <sub>\\lambda </sub>(\\beta , \\theta )} =: r(\\lambda )  \\enspace  .”

**Sources:** none listed. No primary source with a working link was found.

### Mirror descent is a flow with frozen gradient in the Hessian metric

**Remember:** Freeze the objective gradient, not the metric, to get mirror descent.

*True by definition.* MSC 90C25 (Convex programming), 65K05. arXiv cs.LG, math.OC. Level 4: research.

**Definition.** Freeze the objective gradient g = ∇L(wₖ) at the start of a step, and follow dw/dt = −H(w)⁻¹g for time η, where H is the Hessian of a strictly convex potential ψ. The metric H(w) changes along the path, but the gradient does not.

**Problem.** Assume ψ is twice continuously differentiable with positive definite Hessian, and each flow exists through time η in its domain. With the same start and step size, the flow endpoints are the mirror descent iterates, and the flow still makes sense for positive definite metrics without a Hessian potential in the given coordinates.

**How the definition helps.** By the chain rule, d∇ψ(w)/dt = H(w)dw/dt = −g, so ∇ψ(w) moves at constant velocity (our own). After time η it has changed by −η∇L(wₖ), which is the mirror descent step ∇ψ(wₖ₊₁) = ∇ψ(wₖ) − η∇L(wₖ). The flow uses only the metric, so it extends to metrics without a potential.

**Paper or page:** [Mirrorless Mirror Descent: A Natural Derivation of Mirror Descent](https://arxiv.org/abs/2004.01025v3). It says: “Let ψ:𝒲→ℝ be strictly convex and twice differentiable and let H(𝐰)=∇²ψ(𝐰) be invertible everywhere. … Then 𝐰⁽ᵏ⁾ are the same as the Mirror Descent updates 𝐰<sub>MD</sub>⁽ᵏ⁾ … obtained with ψ as the potential function and the same initialization and stepsize.”

**Sources:**

- [Suriya Gunasekar, Blake Woodworth, Nathan Srebro, Mirrorless Mirror Descent: A Natural Derivation of Mirror Descent, arXiv:2004.01025v3 (2021)](https://arxiv.org/abs/2004.01025v3)

### Proximal averages average steps

**Remember:** Average the conjugates, and the proximal steps average too.

*True by definition.* MSC 90C25 (Convex programming). arXiv math.OC. Level 4: research.

**Definition.** With h(x) = ‖x‖²/2 in Euclidean space and ⋆ for convex conjugation, the proximal average for 0 ≤ α ≤ 1 is (α(f₁+h)⋆ + (1−α)(f₂+h)⋆)⋆ − h, so it averages the conjugates of f₁ + h and f₂ + h. The proximal step of f at x minimizes f(y) + h(y−x), and it equals the gradient of (f+h)⋆ at x (our own).

**Problem.** Take two convex functions that never equal −∞ and each take a finite value somewhere. Assume each function’s sets below or at any real level are closed. The proximal step of their proximal average equals the same weighted average of their proximal steps.

**How the definition helps.** For the proximal average p, the conjugate (p+h)⋆ is the weighted average of the two conjugates (our own). The gradient of a weighted average is the weighted average of the gradients, so the steps average (our own). The work is to show that p is convex and closed, so the step formula applies to it.

**Paper or page:** [The Bregman proximal average](https://arxiv.org/abs/2108.11440v2). It says: “is convex, and (∀ x ∈ U) prox⃖λ,ϕ\[Pλ,ϕ(f₁,f₂,α)\](x) = α prox⃖λ,ϕ\[f₁\](x) + (1−α) prox⃖λ,ϕ\[f₂\](x).”

**Sources:**

- [Xianfu Wang, Heinz H. Bauschke, The Bregman proximal average](https://arxiv.org/abs/2108.11440v2)

### Concave tents keep the minimum value when the feasible set is convexified

**Remember:** A concave tent never dips below the points holding it up.

*True by definition.* MSC 90C26 (Nonconvex programming, global optimization), 52A41. arXiv math.OC. Level 4: research.

**Definition.** A concave tent for an objective f on a feasible set 𝒳 is a concave function g on the convex hull of 𝒳 that equals f on 𝒳. By concavity, g at any convex combination of points of 𝒳 is at least the same combination of their f-values.

**Problem.** Let 𝒳 be compact and let f have a concave tent g. Then the infimum of f over 𝒳 equals the infimum of g over the convex hull of 𝒳, and every global minimizer of f is a global minimizer of g.

**How the definition helps.** Each hull point is a convex combination Σλᵢxᵢ of points of 𝒳, so g(x) ≥ Σλᵢ f(xᵢ) ≥ inf f (our own calculation). Points of 𝒳 give the reverse bound, because g equals f there. So a minimizer of f attains the infimum of g.

**Paper or page:** [Concave tents: a new tool for constructing concave reformulations of a large class of nonconvex optimization problems](https://arxiv.org/abs/2409.18451v2). It says: “We have infₓ∈𝒳 { f(x) } = infₓ∈conv(𝒳) { g(x) }”

**Sources:**

- [Markus Gabl, Concave tents: a new tool for constructing concave reformulations of a large class of nonconvex optimization problems, arXiv:2409.18451v2 (2024)](https://arxiv.org/abs/2409.18451v2)

### Pricing an infeasible point at its projection plus distance keeps all minima

**Remember:** Project first, then charge for the distance.

*True by definition.* MSC 90C30 (Nonlinear programming), 90C46. arXiv math.OC. Level 4: research.

**Definition.** Fix M &gt; 0 and a real cost f on a nonempty closed Euclidean set C. The penalized cost keeps f on C and charges each outside point x the cost at a chosen nearest point p of C plus M times the distance, f(p) + M‖x−p‖ (our own).

**Problem.** Let f be lower semicontinuous on a nonempty closed set C in Euclidean space, and let M &gt; 0. Then each local or global minimum of the constrained problem is one of the penalized problem, and conversely, with the same values.

**How the definition helps.** Moving from an outside point toward its chosen nearest point keeps that nearest point and strictly lowers the cost, so outside points cannot be minima (our own). Near a feasible point z, every nearest point p of x satisfies ‖p−z‖ ≤ 2‖x−z‖, so a local minimum on C stays one for nearby outside points (our own). Restriction to C gives the converse, and every outside cost exceeds some feasible cost (our own).

**Paper or page:** [The Exact Projective Penalty Method for Constrained Optimization](https://arxiv.org/abs/2312.02094v1). It says: “each local (global) minimum of one problem is a local (global) minimum of the other, and the optimal values of the problems in the corresponding minima coincide.”

**Sources:**

- [Vladimir Norkin, The Exact Projective Penalty Method for Constrained Optimization, arXiv:2312.02094v1 (2023)](https://arxiv.org/abs/2312.02094v1)

### Definability stops endless policy switches

**Remember:** With finitely many switches, one policy stays best near discount one.

*Rules out counterexamples.* MSC 90C40 (Markov and semi-Markov decision processes). arXiv math.OC. Level 4: research.

**Definition.** A Blackwell optimal policy stays optimal for every discount factor in some interval (d, 1) with 0 ≤ d &lt; 1. The transition sets must be definable in one fixed o-minimal expansion of the ordered real field, a structure in which every definable set of reals is a finite union of points and intervals (our own gloss).

**Problem.** Take finitely many states and actions, with a compact definable set of transition probabilities for each state and action. Then one stationary policy, which fixes one action per state, maximizes worst-case discounted reward among stationary policies for every discount factor close enough to one.

**How the definition helps.** Definability makes the set of discount factors where one stationary policy beats another a finite union of points and intervals, so each comparison settles near one. With finitely many such policies, one is best on a final interval (our own explanation). The paper shows that compact convex transition sets without definability do not suffice.

**Paper or page:** [Beyond discounted returns: Robust Markov decision processes with average and Blackwell optimality](https://arxiv.org/abs/2312.03618v3), [Beyond discounted returns: Robust Markov decision processes with average and Blackwell optimality](https://arxiv.org/abs/2312.03618v3). It says: “There exists an sa-rectangular robust MDP instance, with a compact convex uncertainty set U, and with no Blackwell optimal policy:”

**Sources:**

- [Beyond discounted returns: Robust Markov decision processes with average and Blackwell optimality](https://arxiv.org/abs/2312.03618v3)

### Lifting a Markov decision process to distributions keeps its optimal values

**Remember:** States become distributions, so each step moves deterministically.

*Makes the theorem clean to state or prove.* MSC 90C40 (Markov and semi-Markov decision processes), 90C39. arXiv math.OC. Level 4: research.

**Definition.** The lifted process has probability distributions on the original states as its states, and its actions choose, measurably, an admissible action distribution at each state. Its next state is the averaged transition law, which is not random, and its reward is the averaged one-step reward (our own).

**Problem.** Under the paper's assumptions for the discounted problem, let V\* and V̄\* be the original and lifted optimal values. Then V̄\*(ν) is the integral of V\* against ν, so V̄\*(δₛ) = V\*(s) for every state s.

**How the definition helps.** Each lifted path records the laws of an original process and earns the same expected discounted rewards (our own). The paper's value equivalence identifies the optimal lifted value with the integral of statewise optimal values, and at a point mass this is V\*(s) (our own).

**Paper or page:** [Measurized Markov Decision Processes](https://arxiv.org/abs/2405.03888v4), [Measurized Markov Decision Processes](https://arxiv.org/abs/2405.03888v4). It says: “states are probability measures on the original state space, and actions are stochastic kernels on the original action space.”

**Sources:**

- [Daniel Adelman, Alba V. Olivares-Nadal, Measurized Markov Decision Processes, arXiv:2405.03888v4 (2024)](https://arxiv.org/abs/2405.03888v4)

### Maximizing a reward quantile becomes a search over probability-minimizing thresholds

**Remember:** Replace the quantile with a search over reward thresholds.

*Makes the theorem clean to state or prove.* MSC 90C40 (Markov and semi-Markov decision processes), 90C39. arXiv math.OC. Level 4: research.

**Definition.** For a real reward R and 0 &lt; α &lt; 1, the lower α-quantile is the least threshold λ with P(R ≤ λ) ≥ α. So a policy's quantile exceeds λ exactly when its probability of reward at most λ is below α.

**Problem.** Take a finite-horizon finite Markov decision process. Its optimal value-at-risk is the least λ at which the minimal probability of total reward at most λ reaches α. Each such minimization is an ordinary Markov decision problem on states augmented with the remaining threshold.

**How the definition helps.** The best quantile is therefore found by an outer search over λ and an inner minimization of P(R ≤ λ). At a fixed λ this probability is the expectation of a 0-or-1 payoff, which dynamic programming handles once the remaining threshold joins the state (our own observation).

**Paper or page:** [Markov Decision Processes with Value-at-Risk Criterion](https://arxiv.org/abs/2507.22355v1), [Markov Decision Processes with Value-at-Risk Criterion](https://arxiv.org/abs/2507.22355v1). It says: “By establishing the equivalence between the VaR maximization MDP and a series of probabilistic minimization MDPs, we transform the VaR maximization MDP into a constrained bilevel optimization problem.”

**Sources:**

- [Li Xia, Jinyan Pan, Markov Decision Processes with Value-at-Risk Criterion, arXiv:2507.22355v1 (2025)](https://arxiv.org/abs/2507.22355v1)

### Robust Bellman evaluation works exactly when worst cases are simultaneously solvable

**Remember:** One model must win every row's worst case at once.

*Makes the theorem clean to state or prove.* MSC 90C40 (Markov and semi-Markov decision processes), 90C17. arXiv math.OC. Level 4: research.

**Definition.** A set 𝒫 of transition models is simultaneously solvable if, for every family of linear costs with one cost per state's transition row, a single model in 𝒫 minimizes every row's cost at once (our own).

**Problem.** Let 𝒫 be compact. State-by-state worst-case Bellman evaluation gives the true robust value for every stationary policy, reward and discount exactly when 𝒫 is simultaneously solvable, which for convex 𝒫 means s-rectangular, the product of its projections onto the state rows.

**How the definition helps.** State-by-state evaluation takes a separate worst case in each row, and a common minimizing model realizes all of them in one transition law (our own). The paper's Theorem 2 gives the converse and, for convex sets, the match with s-rectangularity (our own).

**Paper or page:** [Tractable Robust Markov Decision Processes](https://arxiv.org/abs/2411.08435v1), [Tractable Robust Markov Decision Processes](https://arxiv.org/abs/2411.08435v1), [Tractable Robust Markov Decision Processes](https://arxiv.org/abs/2411.08435v1). It says: “our proof techniques rely on identifying a novel simultaneous solvability property, which we show is at the heart of several important properties of RMDPs, including the existence of stationary optimal policies and dynamic programming-based formulations.”

**Sources:**

- [Julien Grand-Clément, Nian Si, Shengbo Wang, Tractable Robust Markov Decision Processes, arXiv:2411.08435v1 (2024)](https://arxiv.org/abs/2411.08435v1)

### Uniform absorption controls escaping visit counts

**Remember:** Uniform absorption lets one time cutoff work for every policy.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 90C40 (Markov and semi-Markov decision processes). arXiv math.OC. Level 4: research.

**Definition.** An occupation measure counts a policy's expected visits to each state-action pair before absorption. The model is absorbing if every policy reaches the absorbing set in finite expected time from the starting distribution. It is uniformly absorbing if the expected number of visits after step n tends to zero as n grows, uniformly over all policies.

**Problem.** Take countably many discrete states, finitely many actions, an absorbing set and a fixed starting distribution. In an absorbing model, the occupation measures form a compact set, under convergence of integrals against bounded functions, exactly when absorption is uniform.

**How the definition helps.** Uniform absorption lets one finite horizon approximate every policy's occupation measure, with error at most the late visits times the test function's bound (our own). The finite-horizon parts behave well because the laws of controlled paths form a compact set and finite-time integrals are continuous. Conversely, compactness forces the late visits to vanish uniformly.

**Paper or page:** [A note on weak compactness of occupation measures for an absorbing Markov decision process](https://arxiv.org/abs/2402.10672v3). It says: “The set of occupation measures O is ws-compact if and only if M is uniformly absorbing.”

**Sources:**

- [A note on weak compactness of occupation measures for an absorbing Markov decision process](https://arxiv.org/abs/2402.10672v3)

### White's vector Bellman equations hold once policies may depend on history

**Remember:** Keep the history so separate branches can choose separate continuations.

*Rules out counterexamples.* MSC 90C40 (Markov and semi-Markov decision processes), 90C29. arXiv math.OC. Level 4: research.

**Definition.** In a Markov decision process with vector rewards, a history-dependent policy may choose different actions after different sequences of visited states, so it can follow a separate continuation on each branch (our own). White's equations compute, by backward recursion, the sets of Pareto efficient returns, those that no different return matches or exceeds in every component.

**Problem.** In a finite-horizon model, White's backward recursion gives exactly the Pareto efficient expected returns of the history-dependent policies. For policies that see only the current state, this can fail.

**How the definition helps.** The recursion combines an efficient continuation chosen separately after each past path, and only a history-dependent policy can realize that combination (our own reading; Proposition 4 of the paper builds it). A policy that sees only the current state must repeat its later choice after two different histories (our own), and the paper gives a counterexample for that case.

**Paper or page:** [A Counterexample and a Corrective to the Vector Extension of the Bellman Equations of a Markov Decision Process](https://arxiv.org/abs/2306.16937v3), [A Counterexample and a Corrective to the Vector Extension of the Bellman Equations of a Markov Decision Process](https://arxiv.org/abs/2306.16937v3). It says: “For all t ≤ N, for all hₜ = (s₁, ..., sₜ) ∈ Hₜ, Uₜ(sₜ) = e(V′ₜ(hₜ)).”

**Sources:**

- [Anas Mifrani, A Counterexample and a Corrective to the Vector Extension of the Bellman Equations of a Markov Decision Process, arXiv:2306.16937v3 (2023)](https://arxiv.org/abs/2306.16937v3)

### Calm local minimax points admit first- and second-order optimality conditions

**Remember:** Keep the maximizing response within a fixed multiple of the minimizing move.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 90C47 (Minimax problems in mathematical programming), 49K35. arXiv math.OC. Level 4: research.

**Definition.** A calm local minimax point is one where the maximizer's best response to a move of size δ stays within κδ of the original response (our own gloss). Precisely, a feasible pair (a, b) is calm local minimax if some κ, ε &gt; 0 work for every 0 &lt; δ ≤ ε as follows. Every feasible y within δ of b has f(a, y) ≤ f(a, b), and every feasible x within δ of a has sup{f(x, y) ∣ y feasible, ‖y − b‖ ≤ κδ} ≥ f(a, b).

**Problem.** The paper proves first- and second-order necessary and sufficient conditions for calm local minimax points of nonsmooth constrained problems, and shows that calm and ordinary local minimax points coincide under a weak second-order condition on the inner maximization. In the smooth unconstrained case, calmness gives, for every direction u, some h with ∇²f(x̄, ȳ)((u,h),(u,h)) ≥ 0.

**How the definition helps.** The radius bound keeps the maximizing response to a move tu within order t of the original response (our own). In finite dimensions the scaled response moves have a convergent subsequence, which gives the direction h (our own). The paper derives the optimality conditions from this and gives an inner second-order hypothesis that ensures calmness.

**Paper or page:** [Calm local optimality for nonconvex-nonconcave minimax problems](https://arxiv.org/abs/2306.17443v1), [Calm local optimality for nonconvex-nonconcave minimax problems](https://arxiv.org/abs/2306.17443v1), [Calm local optimality for nonconvex-nonconcave minimax problems](https://arxiv.org/abs/2306.17443v1). It says: “Moreover we show that the calm local minimax optimality and the local minimax optimality coincide under a weak sufficient optimality condition for the maximization problem.”

**Sources:**

- [Xiaoxiao Ma, Wei Yao, Jane J. Ye, Jin Zhang, Calm local optimality for nonconvex-nonconcave minimax problems, arXiv:2306.17443v1 (2023)](https://arxiv.org/abs/2306.17443v1)

### The Hessian makes self-concordance invariant under affine substitution

**Remember:** Curvature controls its own change along every line.

*True by definition.* MSC 90C51 (Interior-point methods), 90C25, 65K10. arXiv math.OC. Level 4: research.

**Definition.** Self-concordance bounds a convex function's third derivative along every line by its own second derivative on that line. Precisely, a convex, three times continuously differentiable f on an open convex set is self-concordant with constant M ≥ 0 if g(t) = f(x + th) satisfies \|g‴(0)\| ≤ M g″(0)³ᐟ² for every point x and direction h.

**Problem.** Substituting Ax + b for the argument of a self-concordant function preserves the same constant on the nonempty domain of the new function.

**How the definition helps.** The definition looks only at lines, and an affine substitution sends lines to lines (our own). The line through x in direction h becomes the line through Ax + b in direction Ah, so the same bound holds with the same M (our own).

**Wikipedia:** [Self-concordant function](https://en.wikipedia.org/wiki/Self-concordant_function). It says: “The authors note that the right hand side can be made also invariant if we replace the Euclidean metric by the scalar product defined by the Hessian of f”

**Sources:**

- [Yurii Nesterov and Arkadii Nemirovskii, Interior-Point Polynomial Algorithms in Convex Programming, SIAM (1994)](https://doi.org/10.1137/1.9781611970791)
