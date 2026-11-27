### Generalized quantiles handle demand ties

**Remember:** Choose the first stock level where the demand probability reaches the cost ratio.

*Rules out counterexamples.* MSC 90B05 (Inventory, storage, reservoirs). arXiv math.OC. Level 2: later undergraduate.

**Definition.** For nonnegative demand D, write F(x) for the probability that D ≤ x. For 0 &lt; p &lt; 1, the generalized quantile is the smallest x with F(x) ≥ p. An ordinary inverse may miss p when F jumps.

**Problem.** Choose a nonnegative stock level before demand is known. Pay a fixed positive cost per unit short and another per unit left over, and assume finite mean demand. The quantile minimizes expected cost when p equals the shortage cost divided by the sum of the two costs.

**How the definition helps.** In our own proof, allowing F to jump across p puts zero between the left and right slopes of the convex expected cost. Deriving those slopes requires counting the shortage or surplus caused by a small stock increase. If demand is zero or two with equal probability, F never equals one quarter. The generalized quantile still selects zero at that probability.

**Wikipedia:** [Newsvendor model](https://en.wikipedia.org/wiki/Newsvendor_model). It says: “denotes the generalized inverse cumulative distribution function of D.”

**Sources:**

- [E. L. Porteus (2008), The Newsvendor Problem](https://doi.org/10.1007/978-0-387-73699-0_7)

### Customer time gives Little’s law

**Remember:** Count one block of customer time either by customer or by clock time.

*True by definition.* MSC 90B22 (Queues and service in operations research). arXiv math.PR. Level 2: later undergraduate.

**Definition.** For each customer, measure the part of their stay inside the observation window. Define observed customer time as the sum of these lengths.

**Problem.** For finitely many visits, observed customer time equals the integral of the number present. Suppose the arrival rate and the average full stay of arrivals have finite limits as the window grows. Their product gives mean occupancy if the difference between total full and observed customer time divided by window length tends to zero.

**How the definition helps.** In our own proof, clipping each visit lets us count the same pairs of customers and times in either order. Summing by customer gives observed customer time. Summing by time gives the occupancy integral. The work in passing to full stays is controlling the visits crossing the window boundaries.

**Wikipedia:** [Little's law](https://en.wikipedia.org/wiki/Little%27s_law). It says: “multiplied by the average time that a customer spends in the system (W).”

**Sources:**

- [J. D. C. Little (1961), A Proof for the Queuing Formula L = λW](https://doi.org/10.1287/opre.9.3.383)

### Reflected walks give waiting times

**Remember:** Subtract the lowest past level to keep the workload nonnegative.

*True by definition. Confidence: medium.* MSC 90B22 (Queues and service in operations research). arXiv math.PR. Level 2: later undergraduate.

**Definition.** Start with an empty queue and one server that takes customers in arrival order whenever work is waiting. After each arrival, add its service time and subtract the time until the next arrival. Reflect the resulting sum by subtracting its lowest value so far, including the starting zero.

**Problem.** Just before each arrival, the reflected sum equals that customer’s waiting time. The next wait equals the current wait plus the increment, or zero if that sum is negative.

**How the definition helps.** In our own queue argument, subtracting the running minimum gives exactly the usual waiting-time update. When the sum reaches a new low, the server has cleared all waiting work. Otherwise the reflected sum changes by the service time minus the time between arrivals. Starting at zero therefore gives the waiting time at each arrival.

**Paper or page:** [On fluctuation-theoretic decompositions via Lindley-type recursions](https://arxiv.org/abs/2212.01811v1). It says: “where Wₙ ∼ Sₙ − minₖ∈{0,…,n} Sₖ”

**Sources:**

- [Onno Boxma, Offer Kella, Michel Mandjes, On fluctuation-theoretic decompositions via Lindley-type recursions](https://arxiv.org/abs/2212.01811v1)

### Longest paths give project duration

**Remember:** Each event waits for its slowest chain of predecessors.

*True by definition.* MSC 90B35 (Deterministic scheduling theory in operations research). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Draw the project as a finite directed graph with no cycles, one start event and one finish event. Each edge represents a task and carries its duration. Every task lies on a path from start to finish. An event waits for all incoming tasks, and enough resources exist to start all ready tasks immediately.

**Problem.** The earliest project finish equals the longest weighted path from the start to the finish event.

**How the definition helps.** In our own proof, the graph makes earliest event times and longest path lengths satisfy the same rule. Start the clock at zero. At each later event, take the largest predecessor time plus the duration of its connecting task, maximizing over incoming tasks. Applying this rule in dependency order gives both quantities. The modeling work is encoding every precedence constraint and accounting for resource limits.

**Wikipedia:** [Critical path method](https://en.wikipedia.org/wiki/Critical_path_method). It says: “A critical path is determined by identifying the longest stretch of dependent activities”

**Sources:**

- [J. E. Kelley Jr. and M. R. Walker (1959), Critical-Path Planning and Scheduling](https://doi.org/10.1145/1460299.1460318)

### Preemption makes earliest deadlines optimal

**Remember:** With pause and resume, urgent work can always go first.

*Rules out counterexamples.* MSC 90B35 (Deterministic scheduling theory in operations research). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** For independent jobs on one processor, allow preemption, which means a job can pause and resume without cost. Whenever jobs are ready, run one whose deadline is earliest.

**Problem.** If any schedule meets all release times and deadlines, the preemptive earliest deadline rule does too.

**How the definition helps.** Allowing pauses lets an earlier deadline take priority even when a later job has already started. In our own exchange argument, move ready work with the earliest deadline forward, shifting the displaced work into its later slot. That slot still meets the displaced job’s deadline. For our own counterexample, a three-unit job arrives at zero and is due at five. A one-unit job arrives at one and is due at two. Without pauses, starting the first job immediately misses the second deadline, though idling until one would meet both.

**Wikipedia:** [Earliest deadline first scheduling](https://en.wikipedia.org/wiki/Earliest_deadline_first_scheduling). It says: “EDF is an optimal scheduling algorithm on preemptive uniprocessors”

**Sources:**

- [W. A. Horn (1974), Some Simple Scheduling Algorithms](https://doi.org/10.1002/nav.3800210113)

### Fractional assignments decompose into matchings

**Remember:** Fractional assignments are mixtures of whole assignments.

*True by definition.* MSC 90B80 (Discrete location and assignment). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A whole assignment pairs each worker with one job and uses every job once. Define a fractional assignment by drawing a whole assignment at random and recording the probability of each worker–job pair. Equivalently, these probabilities form a nonnegative square matrix whose rows and columns each sum to one.

**Problem.** The minimum linear cost over all fractional assignments equals the cheapest whole assignment’s cost.

**How the definition helps.** In our own argument, the random-assignment definition makes fractional cost an average of whole-assignment costs. This average cannot beat its cheapest term, and choosing that term with probability one attains it. The work lies in proving that every matrix with the stated sums represents such a draw. This is the Birkhoff–von Neumann theorem.

**Wikipedia:** [Doubly stochastic matrix](https://en.wikipedia.org/wiki/Doubly_stochastic_matrix). It says: “the vertices of Bₙ are precisely the permutation matrices.”

**Sources:** none listed. No primary source with a working link was found.

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

### Strong quasiconvexity forbids tied minima

**Remember:** Two equal minima would make their midpoint lower than both.

*Rules out counterexamples.* MSC 90C26 (Nonconvex programming, global optimization). arXiv math.OC. Level 2: later undergraduate.

**Definition.** Choose γ &gt; 0 and let z = (1−t)x + ty for 0 ≤ t ≤ 1. Strong quasiconvexity requires h(z) ≤ max(h(x),h(y)) − γt(1−t)‖x−y‖²/2 for every x and y. Ordinary quasiconvexity requires only h(z) ≤ max(h(x),h(y)).

**Problem.** A real strongly quasiconvex function on a convex set has at most one minimizer.

**How the definition helps.** The positive midpoint gap rules out two different points at the minimum value. In our own counterexample, f(x) = max(0, \|x\| − 1) is quasiconvex but has a whole interval of minima. The work moves to finding a positive modulus γ, rather than just proving that sublevel sets are convex.

**Paper or page:** [Characterizations of Strongly Quasiconvex Functions](https://arxiv.org/abs/2509.21580v1). It says: “If h is strongly quasiconvex with modulus γ &gt; 0”

**Sources:**

- [Characterizations of Strongly Quasiconvex Functions](https://arxiv.org/abs/2509.21580v1)

### Diminishing returns bound greedy gains

**Remember:** The best single gain covers at least one share of the remaining gap.

*Rules out counterexamples.* MSC 90C27 (Combinatorial optimization). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** A set score has diminishing returns if adding an absent item gives at least as much gain on a smaller set as on any superset. The item must be absent from both sets. Assume adding items never lowers the score. Starting from the empty set, repeatedly add an item with largest gain.

**Problem.** Choose a budget k from one to the number of items. After k steps, the gain above the empty-set score is at least 1 − 1/e times the best gain with that budget.

**How the definition helps.** Diminishing returns bounds the remaining improvement by k times the best single gain. In our own proof, add the missing optimal items to the current set, one by one. Their gains can only shrink, and the union scores at least as highly as the optimal set. Thus each greedy step removes at least a fraction 1/k of the remaining gap. In our own counterexample, two special items together earn 100, and a third item independently earns one. With budget two, greedy earns one because neither special item earns anything alone.

**Paper or page:** [Incremental space-filling design based on coverings and spacings: improving upon low discrepancy sequences](https://arxiv.org/abs/2106.05833v1). It says: “Let f be a non-decreasing submodular set function, then, for any given k, 1 ≤ k ≤ C, Algorithm 1 returns a set Xₖ with bounded optimality gap”

**Sources:**

- [Amaya Nogales Gómez, Luc Pronzato, Maria-João Rendas, Incremental space-filling design based on coverings and spacings: improving upon low discrepancy sequences](https://arxiv.org/abs/2106.05833v1)
- [G. L. Nemhauser, L. A. Wolsey and M. L. Fisher (1978), An Analysis of Approximations for Maximizing Submodular Set Functions I](https://doi.org/10.1007/BF01588971)

### Touching objectives share envelope slopes

**Remember:** At a smooth contact, the upper envelope and its touching curve share a slope.

*True by definition.* MSC 90C31 (Sensitivity, stability, parametric optimization), 91B02. arXiv math.OC, econ.TH. Level 2: later undergraduate.

**Definition.** Fix a set of feasible choices. Each choice gives an objective curve as the parameter varies. Their pointwise supremum is the value function, also called the upper envelope.

**Problem.** At an interior parameter where the value function and an attaining objective curve are differentiable, their derivatives agree.

**How the definition helps.** Our own proof uses the envelope definition to turn equality at the optimizer into a minimum of the gap between two curves. The gap has derivative zero there, so the slopes agree. Differentiating an optimizing choice would require assumptions about how it moves. The work lies in proving attainment and differentiability when the problem does not already supply them.

**Wikipedia:** [Envelope theorem](https://en.wikipedia.org/wiki/Envelope_theorem). It says: “the traditional envelope formula holds for optimization problems with arbitrary choice sets at any differentiability point of the value function”

**Sources:**

- [Milgrom and Segal, Envelope Theorems for Arbitrary Choice Sets (2002)](https://doi.org/10.1111/1468-0262.00296)

### Ratio minima become scalar zeros

**Remember:** Subtract the candidate times the denominator and look for zero.

*True by definition.* MSC 90C32 (Fractional programming). arXiv math.OC. Level 2: later undergraduate.

**Definition.** For an objective A(x)/B(x) with B(x) &gt; 0, define F(q) as the minimum of A(x) − qB(x). The new problem tests candidate values q without optimizing a ratio directly.

**Problem.** If the ratio attains its minimum, and each defining minimum exists, F has exactly one zero. Its zero is the minimum ratio.

**How the definition helps.** The difference has the same sign as the ratio minus the candidate. In our own proof, below the optimum all differences are positive, and above it the ratio minimizer gives a negative difference. At the optimum all differences are nonnegative and one is zero. The work moves to solving the difference minimizations and proving that they attain their minima.

**Paper or page:** [Fast Algorithms for Stackelberg Prediction Game with Least Squares Loss](https://arxiv.org/abs/2105.05531v1). It says: “Then, the equation F(q) = 0 has a unique solution.”

**Sources:**

- [Werner Dinkelbach, On Nonlinear Fractional Programming (1967)](https://doi.org/10.1287/mnsc.13.7.492)

### Scaling linearizes an affine ratio

**Remember:** Scale the denominator to one and optimize the scaled numerator.

*True by definition.* MSC 90C32 (Fractional programming). arXiv math.OC. Level 2: later undergraduate.

**Definition.** An affine expression is a linear function plus a constant. For a ratio of affine expressions, define the scale t as the reciprocal of the denominator. Replace the original vector x by y = tx.

**Problem.** On a nonempty bounded polyhedron where its denominator is positive, an affine ratio can be optimized by linear programming.

**How the definition helps.** Scaling makes the denominator one and turns the numerator into a linear function of y and t. Multiply each original inequality by t and impose the scaled denominator equation with t ≥ 0. In our own reverse argument, t = 0 would give a nonzero direction along which the original feasible region extends forever. Boundedness rules this out, so division by t recovers x.

**Wikipedia:** [Linear-fractional programming](https://en.wikipedia.org/wiki/Linear-fractional_programming). It says: “Any linear-fractional program can be transformed into a linear program, assuming that the feasible region is non-empty and bounded”

**Sources:**

- [A. Charnes and W. W. Cooper (1962), Programming with Linear Fractional Functionals](https://doi.org/10.1002/nav.3800090303)

### Consistent estimates settle vertices once

**Remember:** One-edge consistency keeps search priorities from dropping along a path.

*Rules out counterexamples.* MSC 90C35 (Programming involving graphs or networks). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Give each vertex an estimate of the remaining cost to a goal. An estimate is consistent if it vanishes at the goal and never exceeds an outgoing edge’s cost plus its neighbor’s estimate. An admissible estimate never exceeds the true remaining cost.

**Problem.** In a finite graph with nonnegative edge costs and a reachable goal, A\* selects the vertex with least cost so far plus estimated remaining cost. With consistent estimates it can permanently close each selected vertex and return a shortest path.

**How the definition helps.** Consistency makes every adjusted edge cost nonnegative when we add the head estimate and subtract the tail estimate. Along a path, the adjustments cancel except at its endpoints. Dijkstra’s theorem now guarantees that each selected vertex already has its cheapest path. Our own example gives s→a, s→b, b→a and a→g costs 3, 1, 1 and 3. Set the estimate at b to four and all others to zero. These estimates are admissible, yet closing a permanently returns six instead of five.

**Wikipedia:** [Consistent heuristic](https://en.wikipedia.org/wiki/Consistent_heuristic). It says: “A consistent heuristic is also admissible, i.e. it never overestimates the cost of reaching the goal”

**Sources:**

- [P. E. Hart, N. J. Nilsson and B. Raphael (1968), A Formal Basis for the Heuristic Determination of Minimum Cost Paths](https://doi.org/10.1109/tssc.1968.300136)

### Residual cycles certify cheapest flows

**Remember:** Undoing a shipment refunds its cost.

*Makes the theorem clean to state or prove.* MSC 90C35 (Programming involving graphs or networks). arXiv cs.DS. Level 2: later undergraduate.

**Definition.** Start with a flow that respects edge capacities, has nonnegative edge amounts and meets the required net supplies. Its residual graph records changes still possible. A forward edge has the unused capacity and original unit cost. A reverse edge has capacity equal to the flow sent and the opposite cost, and both directions require positive remaining capacity.

**Problem.** A feasible flow with prescribed net supply at each vertex is cheapest exactly when its residual graph has no negative-cost directed cycle.

**How the definition helps.** The residual graph turns a cost-saving change with unchanged supplies into a search for a negative cycle. Sending a small amount around such a cycle lowers cost. In our own converse proof, the difference to a cheaper flow splits into directed cycles with positive weights. Their costs sum with those weights to a negative number, so at least one cycle has negative cost.

**Wikipedia:** [Minimum-cost flow problem](https://en.wikipedia.org/wiki/Minimum-cost_flow_problem). It says: “The reverse arc (which has negative flow value) has a negative cost −a(e).”

**Paper or page:** [An Optimal Algorithm for the Stacker Crane Problem on Fixed Topologies](https://arxiv.org/abs/2410.06764v2). It says: “Every non-negative circulation on a graph with cycle rank r can be decomposed into at most r non-negative cycle flows.”

**Sources:**

- [A. V. Goldberg and R. E. Tarjan (1989), Finding Minimum-Cost Circulations by Canceling Negative Cycles](https://doi.org/10.1145/76359.76368)
- [Yike Chen, Ke Shi, Chao Xu, An Optimal Algorithm for the Stacker Crane Problem on Fixed Topologies](https://arxiv.org/abs/2410.06764v2)

### Residual edges certify maximum flow

**Remember:** If the sink is unreachable, the reachable side gives a full cut.

*True by definition.* MSC 90C35 (Programming involving graphs or networks). arXiv math.OC. Level 2: later undergraduate.

**Definition.** A residual network records changes allowed by the current flow. A forward edge tracks spare capacity, while a backward edge tracks flow that can be canceled. Tracking only spare capacity misses the chance to reroute previously sent flow.

**Problem.** In a finite directed network, a feasible flow is maximum exactly when its residual network has no positive-capacity path from source to sink.

**How the definition helps.** The residual network turns each path from source to sink into a legal increase in flow. If no path exists, every original edge leaving the reachable set is full. Every original edge entering it carries zero flow. The current flow therefore equals the total capacity leaving that set, an upper bound for every feasible flow.

**Wikipedia:** [Ford–Fulkerson algorithm](https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm). It says: “If S is the set of nodes reachable by s in the residual network”

**Sources:**

- [Ford and Fulkerson, Maximal Flow Through a Network (1956)](https://doi.org/10.4153/cjm-1956-045-5)

### Multipliers turn constraints into stationarity

**Remember:** Subtract the right constraint gradients to cancel the objective gradient.

*Makes the theorem clean to state or prove.* MSC 90C46 (Optimality conditions and duality in mathematical programming). arXiv math.OC. Level 2: later undergraduate.

**Definition.** For a smooth equality constraint G(x) = 0, form the Lagrangian by subtracting a weighted sum of the constraints from the objective. The weights are the Lagrange multipliers. This lets us work in the original coordinates instead of finding coordinates on the constraint set.

**Problem.** Let the objective and constraints be smooth on an open subset of finite-dimensional space. At a constrained local extremum with independent constraint gradients, some multiplier makes every first derivative of the Lagrangian zero.

**How the definition helps.** The Lagrangian combines feasibility and gradient balance in one equation saying that its derivative vanishes. Its derivatives in the weights give the constraints. Its derivatives in the original variables give gradient balance. The implicit function theorem identifies the tangent space with the kernel of the constraint derivative. Our own example minimizes x subject to x² = 0. At zero the constraint gradient vanishes, so no multiplier can cancel the objective gradient.

**nLab:** [Lagrange multiplier](https://ncatlab.org/nlab/show/Lagrange+multiplier). It says: “Then there is a function(al) l in Y\* such that x is a critical point of the function F − l∘G.”

**Sources:** none listed. No primary source with a working link was found.

### Jackson queues factor at equilibrium

**Remember:** Traffic rates include return visits, but the equilibrium probabilities multiply.

*Rules out counterexamples.* MSC 90B15 (Stochastic network models in operations research). arXiv math.PR. Level 3: graduate.

**Definition.** In this open Jackson network, independent external Poisson processes bring jobs to single-server stations. Each busy station serves continuously, with independent exponential service times at its own fixed rate. After service, a job independently chooses its next station or exits, with fixed probabilities and eventual exit certain. At every station, the total arrival rate, including return visits, must be below the service rate.

**Problem.** At equilibrium the station counts are independent. Each has a geometric distribution on the nonnegative integers, with successive probabilities in the ratio of arrival rate to service rate.

**How the definition helps.** The arrival, service and routing rules let independent geometric counts satisfy equilibrium balance at every network state. Checking that balance requires matching the total rates entering and leaving each state. In our own counterexample, arrivals are three time units apart, with uniform random phase, and visit two successive stations with unit service times. Each station is busy one third of the time, yet they are never busy together.

**Wikipedia:** [Jackson network](https://en.wikipedia.org/wiki/Jackson_network). It says: “In general, this network does not have a product-form stationary distribution, so approximations are sought.”

**Sources:**

- [J. R. Jackson (1957), Networks of Waiting Lines](https://doi.org/10.1287/opre.5.4.518)

### Poisson arrivals see time averages

**Remember:** A constant arrival rate samples busy and idle time in proportion.

*Rules out counterexamples.* MSC 90B22 (Queues and service in operations research). arXiv math.PR. Level 3: graduate.

**Definition.** Sample the state immediately before each arrival. Require Poisson arrivals whose instantaneous rate stays constant even when the past queue history is known.

**Problem.** In a stationary queue with this property, an arrival sees the same state probabilities as a random time.

**How the definition helps.** A constant arrival rate given the entire past weights every pre-arrival state in proportion to the time spent there. Our own argument counts arrivals occurring while the queue has a specified state. Its expected count equals the arrival rate times the expected time in that state. Justifying this identity uses the conditional arrival rate. In our own counterexample, arrivals come two time units apart with uniform random phase, and each service lasts one unit. Every arrival finds the server idle, although it works half the time.

**Wikipedia:** [Arrival theorem](https://en.wikipedia.org/wiki/Arrival_theorem). It says: “the probability of the state as seen by an outside random observer is the same as the probability of the state seen by an arriving customer.”

**Sources:**

- [R. W. Wolff (1982), Poisson Arrivals See Time Averages](https://doi.org/10.1287/opre.30.2.223)

### Reversed queues yield Poisson departures

**Remember:** Backward arrivals are forward departures.

*True by definition.* MSC 90B22 (Queues and service in operations research). arXiv math.PR. Level 3: graduate.

**Definition.** Consider one server that serves whenever customers are waiting. Arrivals follow a Poisson process, and service times are independent exponentials, independent of arrivals. Assume arrivals are slower on average than service and start the customer count in equilibrium. Call the count reversible if reading it backward gives the same law.

**Problem.** In equilibrium, departures form a Poisson process with the same rate as arrivals.

**How the definition helps.** Reversibility turns the departure process into a copy of the known arrival process. A forward departure is an upward jump when time runs backward. The work is proving reversibility by checking that equilibrium transitions between each two neighboring counts occur equally often in both directions.

**Wikipedia:** [Burke's theorem](https://en.wikipedia.org/wiki/Burke%27s_theorem). It says: “the arrival instants in the forward Markov chain are the departure instants of the reversed Markov chain.”

**Sources:**

- [P. J. Burke (1956), The Output of a Queuing System](https://doi.org/10.1287/opre.4.6.699)

### Integer dual certificates force integer vertices

**Remember:** An integer dual solution prices integer bounds at an integer total.

*Makes the theorem clean to state or prove.* MSC 90C10 (Integer programming), 90C46. arXiv math.OC. Level 3: graduate.

**Definition.** Consider rational linear inequalities Ax ≤ b. A dual certificate for an objective c is a nonnegative vector y with Aᵀy = c. It bounds c·x above by b·y. The system is totally dual integral if every integer objective with finite maximum has an integer certificate attaining that maximum.

**Problem.** If a totally dual integral system has integer bounds b, its feasible region is the convex hull of its integer points.

**How the definition helps.** Integer certificates make every finite maximum for an integer objective an integer, since each maximum equals b·y. Our own explanation then uses a separate characterization of rational polyhedra. Such a region is the convex hull of its integer points if all its finite maxima for integer objectives are integers.

**Wikipedia:** [Total dual integrality](https://en.wikipedia.org/wiki/Total_dual_integrality). It says: “there is an integer optimal dual solution.”

**Sources:**

- [Giles and Pulleyblank, Total dual integrality and integer polyhedra (1979)](https://doi.org/10.1016/0024-3795(79)90018-1)

### Quadratic perspectives encode on–off mixtures

**Remember:** Divide output by the on fraction before charging the on cost.

*True by definition. Confidence: medium.* MSC 90C11 (Mixed integer programming), 90C20. arXiv math.OC. Level 3: graduate.

**Definition.** Let z indicate whether production is on, x denote output, and t denote a cost bound. When off, x = 0 and t ≥ 0. When on, t ≥ x². The closed perspective equals x²/z for z &gt; 0, zero at the origin, and infinity for nonzero x at z = 0.

**Problem.** Allow any real output when production is on. The convex hull consists exactly of points with activation between zero and one and cost bound at least the closed perspective.

**How the definition helps.** Our own proof interprets z as the weight of the on state, which must then produce x/z on average. Convexity of the square gives the cost bound z(x/z)² for z &gt; 0, even when several on states are mixed. One on state producing x/z attains the bound, and increasing its cost bound gives every larger value. At z = 0 only off states contribute. Coupled switches need a separate argument.

**Paper or page:** [A note on quadratic constraints with indicator variables: Convex hull description and perspective relaxation](https://arxiv.org/abs/2209.01433v1). It says: “x²/z = maxₚ∈ℝ (px − p²z/4).”

**Sources:**

- [A note on quadratic constraints with indicator variables: Convex hull description and perspective relaxation](https://arxiv.org/abs/2209.01433v1)

### Negative entropy turns mirror descent into multiplicative exponential weights

**Remember:** Exponentiate the negative gradient, multiply by the old probabilities, then normalize.

*True by definition.* MSC 90C25 (Convex programming), 65K05. arXiv cs.LG, math.OC. Level 3: graduate.

**Definition.** Mirror descent steps against a gradient estimate, with a penalty for moving far from the current point. The penalty is the Bregman divergence of a convex function Ψ, the gap between Ψ and its tangent-plane approximation. For negative entropy Ψ(p) = ∑ p(x) log p(x) on probability vectors, this penalty is the relative entropy.

**Problem.** Take a step size η and a gradient estimate g. With negative entropy, the mirror descent step makes the new p(x) proportional to p(x) exp(−η g(x)). Dividing by the sum over x makes the result a probability vector.

**How the definition helps.** Negative entropy makes the penalty a sum of one-variable terms, so the minimization splits by coordinate. Our own proof sketch sets the derivative of each term to zero. This makes the new log-probability equal to the old one minus η g(x), plus a constant. The constant comes from the constraint that the probabilities sum to one. Exponentiating gives the multiplicative update, which is the classical exponential weights algorithm.

**Paper or page:** [Distances for Markov chains from sample streams](https://arxiv.org/abs/2505.18005v1). It says: “When 𝒵 = Δ\_𝒳 is the probability simplex on a finite set 𝒳 and Ψ is the negative entropy defined as Ψ(p) = ∑ₓ p(x) log p(x), p ∈ Δ\_𝒳, the OSMD update reduces to”

**Sources:**

- [Sergio Calo, Anders Jonsson, Gergely Neu, Ludovic Schwartz, Javier Segovia-Aguas, Distances for Markov chains from sample streams, arXiv:2505.18005v1 (2025)](https://arxiv.org/abs/2505.18005v1)

### Proximal steps expose composite optima

**Remember:** Take a gradient step, then let the proximal step handle the rest.

*True by definition.* MSC 90C25 (Convex programming), 49J52. arXiv math.OC. Level 3: graduate.

**Definition.** For a &gt; 0, let P(z) be the point y minimizing g(y) + ‖y − z‖²/(2a). A forward-backward step first subtracts a∇f(x) from x, then applies P.

**Problem.** Let f be differentiable and convex everywhere on Euclidean space. Let g be convex, finite somewhere, never −∞, and have closed sublevel sets. Then x minimizes f + g exactly when P(x − a∇f(x)) = x.

**How the definition helps.** The forward-backward map turns minimization of the sum into a fixed-point test. In our own derivation, the quadratic minimum returns x exactly when −∇f(x) is the slope of an affine lower bound touching g there. The rule for slopes of convex sums identifies this condition with minimization of f + g.

**Paper or page:** [Optimization with First Order Algorithms](https://arxiv.org/abs/2410.19506v1). It says: “\\operatorname {zeros}(\\partial \\mathcal{J})=\\operatorname {Fix}(\\operatorname {prox}<sub>\\gamma g</sub>(\\operatorname {Id}-\\gamma \\nabla f)).”

**Sources:** none listed. No primary source with a working link was found.

### Relative smoothness ensures descent

**Remember:** Reference curvature pays for the objective's departure from its tangent.

*True by definition.* MSC 90C25 (Convex programming). arXiv math.OC. Level 3: graduate.

**Definition.** On an open convex domain, take a differentiable objective f and a differentiable convex reference h. Call f smooth relative to h with constant L &gt; 0 if Lh − f is convex. The Bregman distance from x to y is the value of h at y minus its tangent estimate from x.

**Problem.** At x, minimize the tangent estimate of f plus the Bregman distance from x divided by a positive step size. If a minimizer exists in the domain and the step size is at most 1/L, this step cannot raise f.

**How the definition helps.** In our own proof, convexity of Lh − f makes the model an upper bound that equals f at x. Minimizing this bound gives descent. The usual Euclidean model bounds the tangent error by a multiple of squared distance. Here the work is finding h and proving Lh − f convex.

**Paper or page:** [Multilevel Bregman Proximal Gradient Descent](https://arxiv.org/abs/2506.03950v3). It says: “For any τ ∈ (0, L⁻¹\], the following inequality holds f(x⁺τ) ≤ f(x) − Dφ(x, x⁺τ)/τ.”

**Sources:**

- [Yara Elshiaty, Stefania Petra, Multilevel Bregman Proximal Gradient Descent](https://arxiv.org/abs/2506.03950v3)

### The subgradient definition makes proximal fixed points minimizers

**Remember:** A proximal step stays put exactly when zero is a subgradient.

*True by definition. Confidence: medium.* MSC 90C25 (Convex programming), 65K10, 47H09. arXiv math.OC. Level 3: graduate.

**Definition.** Take a convex function f on a real Hilbert space with a closed epigraph, at least one finite value, and no value of −∞. A subgradient q at x with finite f(x) satisfies f(z) ≥ f(x) + ⟨q, z − x⟩ for all z. Define p = prox(v) by requiring v − p to be a subgradient of f at p. The usual definition instead minimizes f(x) + ½‖x − v‖² over x.

**Problem.** A point x satisfies prox(x) = x exactly when x minimizes f.

**How the definition helps.** The subgradient definition turns a fixed point directly into the condition that zero is a subgradient at x. That condition says f(x) is a global minimum. Our own comparison is that the minimization definition first needs an optimality argument to remove the quadratic penalty. To relate the definitions, first prove that the quadratic problem has a unique answer. Then show that its optimality condition is the subgradient test.

**Wikipedia:** [Proximal operator](https://en.wikipedia.org/wiki/Proximal_operator). It says: “Fixed points of prox<sub>f</sub> are minimizers of f”

**Sources:**

- [Neal Parikh and Stephen Boyd, Proximal Algorithms, Foundations and Trends in Optimization 1 (2014)](https://doi.org/10.1561/2400000003)

### Pseudoconvexity makes stationary points global minima

**Remember:** A better point must point downhill.

*Rules out counterexamples.* MSC 90C26 (Nonconvex programming, global optimization). arXiv math.OC. Level 3: graduate.

**Definition.** A differentiable function on a convex domain is pseudoconvex if each better point gives a strictly negative directional derivative toward it. A better point has a lower function value. Quasiconvexity only requires that each set below a given function value be convex.

**Problem.** Every point with zero gradient is a global minimizer of a differentiable pseudoconvex function on a convex domain.

**How the definition helps.** In our own scalar argument, pseudoconvexity makes a lower value impossible when the gradient is zero. Every directional derivative there is zero. In our own example, x³ has convex sets below each level and zero derivative at zero, yet takes smaller values elsewhere. The work is verifying the strict derivative condition for the given function.

**Paper or page:** [A Refined Proximal Algorithm for Nonconvex Multiobjective Optimization in Hilbert Spaces](https://arxiv.org/abs/2403.09922v1). It says: “If x ∈ Ω is a Pareto critical point of F in Ω, then it is a weak Pareto solution of F in Ω.”

**Sources:**

- [G. C. Bento, J. X. Cruz Neto, J. O. Lopes, B. S. Mordukhovich, P. R. Silva Filho, A Refined Proximal Algorithm for Nonconvex Multiobjective Optimization in Hilbert Spaces](https://arxiv.org/abs/2403.09922v1)

### Threshold averages preserve minima

**Remember:** A threshold average cannot beat its cheapest set.

*True by definition. Confidence: medium.* MSC 90C27 (Combinatorial optimization). arXiv math.OC. Level 3: graduate.

**Definition.** Take a nonnegative score on subsets of a finite set, with score zero for the empty set. On the unit cube, define its Lovász extension by averaging scores over thresholds chosen uniformly between zero and one. Each threshold selects the coordinates above it.

**Problem.** The smallest value of the extension on the cube equals the smallest value of the set function.

**How the definition helps.** In our own proof, every threshold selects a set, so its score is at least the minimum. A zero-one vector for a minimizing set attains that minimum. The usual formula sorts the coordinates first. Splitting the average at those coordinates gives the same formula.

**Paper or page:** [Conductance Estimation in Digraphs: Submodular Transformation, Lovász Extension and Dinkelbach Iteration](https://arxiv.org/abs/2506.23131v1). It says: “then the Lovász extension Fᴸ of f can be calculated as the following:”

**Sources:**

- [Sihong Shao, Chuan Yang, Xinyang Ye, Conductance Estimation in Digraphs: Submodular Transformation, Lovász Extension and Dinkelbach Iteration](https://arxiv.org/abs/2506.23131v1)

### One score tests coordinatewise dominance

**Remember:** One vector must cover all the target’s coordinates at once.

*True by definition.* MSC 90C29 (Multi-objective and goal programming), 90C17. arXiv math.OC. Level 3: graduate.

**Definition.** Let A be a nonempty compact set of attainable vectors. For target y and candidate a in A, take the largest coordinate of y − a. The score of y is the minimum of that number over all candidates.

**Problem.** Some attainable vector matches or exceeds every target coordinate exactly when the score is nonpositive. Changing the target changes its score by at most the largest absolute coordinate change.

**How the definition helps.** Our own explanation replaces separate coordinate tests by one maximum for each candidate. A nonpositive maximum means that the same candidate covers every coordinate. Compactness gives a minimizing candidate because the maximum of finitely many continuous functions is continuous. Using a minimizer for either target as a candidate for the other proves the change bound.

**Paper or page:** [Set-based Robust Optimization of Uncertain Multiobjective Problems via Epigraphical Reformulations](https://arxiv.org/abs/2212.14018v1). It says: “A − ℝᵐ₊ = {y ∈ ℝᵐ \| ψₐ(y) ≤ 0}”

**Sources:**

- [Set-based Robust Optimization of Uncertain Multiobjective Problems via Epigraphical Reformulations](https://arxiv.org/abs/2212.14018v1)

### Extra variables separate ratio terms

**Remember:** Tune the extra variable until the two terms match.

*True by definition.* MSC 90C32 (Fractional programming). arXiv math.OC. Level 3: graduate.

**Definition.** For a positive numerator a and a positive denominator b, replace a/b by the minimum over y &gt; 0 of a²y + 1/(4b²y). This puts a and b in separate terms.

**Problem.** For a finite sum of positive ratios, the enlarged minimization has the same infimum. Its minimizers give exactly the original minimizers after discarding the extra variables.

**How the definition helps.** In our own proof, the extra variable makes the product of the two new terms independent of that variable. Their sum is least when they agree, at y = 1/(2ab). The minimum is then a/b. Choosing a separate y for each ratio attains every original objective value at its original input. Solving the enlarged problem can still be difficult because its objective need not be convex.

**Paper or page:** [Transforms for Multiplicative and Fractional Programming with Broad Applications in Edge Computing and Communication Networks](https://arxiv.org/abs/2312.06202v1). It says: “Fₖ(x,yₖ) ≔ \[Aₖ(x)\]²yₖ + 1/(4\[Bₖ(x)\]²yₖ)”

**Sources:**

- [Yitong Wang, Chang Liu, Jun Zhao, Transforms for Multiplicative and Fractional Programming with Broad Applications in Edge Computing and Communication Networks](https://arxiv.org/abs/2312.06202v1)

### Closure captures limiting linear constraints

**Remember:** An infinite system can imply inequalities that appear only as limits.

*Rules out counterexamples.* MSC 90C34 (Semi-infinite programming), 90C46. arXiv math.OC. Level 3: graduate.

**Definition.** Encode each linear constraint a·x ≥ b by the pair (a, b). Form all finite nonnegative linear combinations of these pairs and the pair for 0 ≥ −1. The closed cone also contains all limits of these combinations.

**Problem.** For a consistent linear system in finite dimensions, a linear inequality follows exactly when its pair lies in that closed cone.

**How the definition helps.** Closing the cone includes limits of inequalities that hold at every feasible point. In our own example, the constraints x ≥ −1/n for positive integers n imply x ≥ 0. No finite nonnegative combination gives the pair (1, 0), although the pairs (1, −1/n) converge to it. The converse uses the extended Farkas lemma to find a feasible point violating any inequality whose pair lies outside the cone.

**Paper or page:** [On the Polyhedrality of the Chvatal-Gomory Closure](https://arxiv.org/abs/2106.00295v1). It says: “The inequality ax ≥ b is a consequence of the consistent system”

**Sources:** none listed. No primary source with a working link was found.

### Thresholds price directed cuts

**Remember:** An edge crosses exactly the thresholds between its two labels, in the outgoing direction.

*True by definition.* MSC 90C35 (Programming involving graphs or networks). arXiv math.OC. Level 3: graduate.

**Definition.** Give each vertex of a finite directed graph a real label and each edge a nonnegative weight. The outgoing cut cost of a set is the total weight of edges leaving it. Define its Lovász extension by integrating this cost over all real thresholds, using the vertices above each threshold.

**Problem.** Each edge contributes its weight times the larger of zero and the tail label minus the head label.

**How the definition helps.** In our own proof, integrating turns an edge’s contribution into the length of an interval. The edge leaves the set exactly when the threshold lies below its tail label and at or above its head label. Splitting the integral at the sorted labels recovers the usual formula.

**Paper or page:** [Conductance Estimation in Digraphs: Submodular Transformation, Lovász Extension and Dinkelbach Iteration](https://arxiv.org/abs/2506.23131v1). It says: “Let G = (V,A) be a digraph, the Lovász extension of cut⁺(S) is cut⁺ᴸ(x) = ∑ᵢ→ⱼ (wᵢⱼ/2)(xᵢ − xⱼ + \|xᵢ − xⱼ\|).”

**Sources:**

- [Sihong Shao, Chuan Yang, Xinyang Ye, Conductance Estimation in Digraphs: Submodular Transformation, Lovász Extension and Dinkelbach Iteration](https://arxiv.org/abs/2506.23131v1)

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

### Closed cones certify infeasibility

**Remember:** A closed image separates every point outside it.

*Rules out counterexamples.* MSC 90C46 (Optimality conditions and duality in mathematical programming). arXiv math.OC. Level 3: graduate.

**Definition.** In finite dimensions, let admissible right sides form the linear image of a nonempty convex cone. A convex cone contains all nonnegative linear combinations of its points. Require the image to contain its limits.

**Problem.** For a closed image cone, each unattainable right side has a certificate. A linear functional is nonnegative on the cone but strictly negative on that right side.

**How the definition helps.** Closedness lets a separating hyperplane distinguish every point outside the image from all attainable points. Our own example sends a symmetric matrix with nonnegative eigenvalues to its upper-left and off-diagonal entries. The pair (ε, 1) occurs for ε &gt; 0 by choosing lower-right entry 1/ε. The pair (0, 1) cannot occur because the determinant would be negative. Continuity therefore rules out a certificate there.

**Wikipedia:** [Farkas' lemma](https://en.wikipedia.org/wiki/Farkas%27_lemma). It says: “The closedness condition is necessary”

**Sources:** none listed. No primary source with a working link was found.

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

### A ball around a dual point certifies zero coefficients

**Remember:** A dual ball missing a constraint face certifies a zero coefficient.

*Makes the theorem clean to state or prove.* MSC 90C25 (Convex programming), 49N15. arXiv math.OC. Level 4: research.

**Definition.** Fit data y with matrix X by minimizing P(b) = ‖y − Xb‖²/2 + λ∑ⱼ\|bⱼ\|, with λ &gt; 0. A vector θ is dual feasible if \|Xⱼᵀθ\| ≤ 1 for every column Xⱼ. Its dual value D(θ) = λ⟨y,θ⟩ − λ²‖θ‖²/2 bounds the minimum from below. For any trial b, use the gap P(b) − D(θ) to define a ball centered at θ with radius r = √(2(P(b) − D(θ)))/λ.

**Problem.** If \|Xⱼᵀθ\| + ‖Xⱼ‖r &lt; 1 for some column Xⱼ, the corresponding coefficient is zero in every optimal solution.

**How the definition helps.** The ball gives a checkable bound on each column’s inner product with the unknown dual maximizer. In our own derivation, Cauchy–Schwarz gives strict inequality throughout the ball under the stated test. At an optimum, a nonzero coefficient requires its column’s absolute inner product with the dual maximizer to equal one. The quadratic dual objective supplies the radius bound that places the maximizer inside the ball.

**Paper or page:** [Continuation Path with Linear Convergence Rate](https://arxiv.org/abs/2112.05104v1). It says: “\\lVert  \\hat  {\\theta }<sup>{</sup>({\\lambda })} - \\theta  \\rVert  \\leq  \\sqrt  { \\frac  {2 \\nu }{\\lambda <sup>2</sup>}  \\Gap  <sub>\\lambda </sub>(\\beta , \\theta )} =: r(\\lambda )  \\enspace  .”

**Sources:** none listed. No primary source with a working link was found.

### Mirror descent is a flow with frozen gradient in the Hessian metric

**Remember:** Freeze the objective gradient, not the metric, to get mirror descent.

*True by definition.* MSC 90C25 (Convex programming), 65K05. arXiv cs.LG, math.OC. Level 4: research.

**Definition.** Mirror descent with a strictly convex potential ψ subtracts η∇L(wₖ) from ∇ψ(wₖ), where L is the objective. The paper instead follows the flow dw/dt = −H(w)⁻¹∇L(wₖ) for time η, where H is the Hessian of ψ. The objective gradient stays frozen at the start of the step, but the metric H(w) changes along the path.

**Problem.** When the metric is the Hessian of ψ, the end points of these steps are exactly the mirror descent iterates. The flow also makes sense for a Riemannian metric that is not a Hessian, where no dual coordinates exist.

**How the definition helps.** With the gradient frozen, ∇ψ(w) moves at constant velocity, so the equality has a one-line proof. In our own explanation, the chain rule gives d∇ψ(w)/dt = H(w)dw/dt = −∇L(wₖ). After time η, ∇ψ has changed by −η∇L(wₖ), which is the mirror descent update. The definition uses only the metric, so it extends to metrics without a potential. For such metrics one must still solve the flow.

**Paper or page:** [Mirrorless Mirror Descent: A Natural Derivation of Mirror Descent](https://arxiv.org/abs/2004.01025v3). It says: “Let ψ:𝒲→ℝ be strictly convex and twice differentiable and let H(𝐰)=∇²ψ(𝐰) be invertible everywhere. … Then 𝐰⁽ᵏ⁾ are the same as the Mirror Descent updates 𝐰<sub>MD</sub>⁽ᵏ⁾ … obtained with ψ as the potential function and the same initialization and stepsize.”

**Sources:**

- [Suriya Gunasekar, Blake Woodworth, Nathan Srebro, Mirrorless Mirror Descent: A Natural Derivation of Mirror Descent, arXiv:2004.01025v3 (2021)](https://arxiv.org/abs/2004.01025v3)

### Proximal averages average steps

**Remember:** Average after adding curvature, and the proximal steps average too.

*True by definition.* MSC 90C25 (Convex programming). arXiv math.OC. Level 4: research.

**Definition.** On Euclidean space let q(x) = ‖x‖²/2. The proximal step at x minimizes f(y) + q(y − x) over y. The convex conjugate of g at x is the supremum of x·y − g(y) over y. Add q to each function, take conjugates, average with fixed positive weights summing to one, take the conjugate again, then subtract q.

**Problem.** Take two convex functions that never equal −∞ and each take a finite value somewhere. Assume each function’s sets below or at any real level are closed. The proximal step of their proximal average equals the same weighted average of their proximal steps.

**How the definition helps.** In our own Euclidean proof, averaging the conjugates turns averaging steps into differentiating a sum. Directly averaging the original functions gives no such rule for their minimizers. The work lies in proving convexity of the proximal average and identifying each step with the gradient of the corresponding conjugate. Taking the conjugate twice recovers the closed convex sum.

**Paper or page:** [The Bregman proximal average](https://arxiv.org/abs/2108.11440v2). It says: “is convex, and (∀ x ∈ U) prox⃖λ,ϕ\[Pλ,ϕ(f₁,f₂,α)\](x) = α prox⃖λ,ϕ\[f₁\](x) + (1−α) prox⃖λ,ϕ\[f₂\](x).”

**Sources:**

- [Xianfu Wang, Heinz H. Bauschke, The Bregman proximal average](https://arxiv.org/abs/2108.11440v2)

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

### Definability stops endless policy switches

**Remember:** With finitely many switches, one policy stays best near discount one.

*Rules out counterexamples.* MSC 90C40 (Markov and semi-Markov decision processes). arXiv math.OC. Level 4: research.

**Definition.** A policy chooses an action in each situation, called a state. A discount factor weights a reward one step later by a fraction of its current value. A Blackwell optimal policy stays optimal for every discount factor sufficiently close to one. Definable transition sets use one mathematical language in which every definable subset of the line consists of finitely many intervals and points.

**Problem.** Consider finitely many states and actions, with a separate compact definable set of transition probabilities for each state and action. Stationary policies use the same decision rule whenever a state recurs. One fixed action per state maximizes worst-case discounted reward among stationary policies for every discount factor sufficiently close to one.

**How the definition helps.** Definability makes the discount factors favoring one fixed policy over another a finite union of intervals and points. In our own explanation, the hard step proves this property for worst-case rewards. Only finitely many policies choose one fixed action per state, so their ranking settles near one. The paper gives compact convex transition sets for which no policy stays optimal.

**Paper or page:** [Beyond discounted returns: Robust Markov decision processes with average and Blackwell optimality](https://arxiv.org/abs/2312.03618v3), [Beyond discounted returns: Robust Markov decision processes with average and Blackwell optimality](https://arxiv.org/abs/2312.03618v3). It says: “There exists an sa-rectangular robust MDP instance, with a compact convex uncertainty set U, and with no Blackwell optimal policy:”

**Sources:**

- [Beyond discounted returns: Robust Markov decision processes with average and Blackwell optimality](https://arxiv.org/abs/2312.03618v3)

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

### Uniform absorption controls escaping visit counts

**Remember:** Uniform absorption lets one time cutoff work for every policy.

*Rules out counterexamples. Confidence: medium.* MSC 90C40 (Markov and semi-Markov decision processes). arXiv math.OC. Level 4: research.

**Definition.** An occupation measure counts expected visits to each state and action before the process stops. Absorption means that each policy has finite expected stopping time from the given starting distribution. Uniform absorption means the expected number of visits after step n tends to zero uniformly over policies.

**Problem.** Consider countably many discrete states, finitely many actions, an absorbing set, and a fixed starting distribution. In an absorbing model, occupation measures form a compact set exactly when absorption is uniform. Here convergence means convergence of integrals against every bounded function on state and action pairs.

**How the definition helps.** Uniform absorption lets one finite time horizon approximate the expected visit counts of every policy. In our own explanation, the omitted visits bound the error for every bounded test function. The theorem also needs compactness of the laws of controlled paths and continuity of the finite-time integrals. The converse proves that compactness forces the late visits to vanish uniformly.

**Paper or page:** [A note on weak compactness of occupation measures for an absorbing Markov decision process](https://arxiv.org/abs/2402.10672v3). It says: “The set of occupation measures O is ws-compact if and only if M is uniformly absorbing.”

**Sources:**

- [A note on weak compactness of occupation measures for an absorbing Markov decision process](https://arxiv.org/abs/2402.10672v3)

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
