### Transposition swaps controllability and observability

**Remember:** Transpose the dynamics and swap the input and output.

*True by definition.* MSC 93B05 (Controllability), 93B07. arXiv eess.SY, math.OC. Level 2: later undergraduate.

**Definition.** The dual of a continuous-time linear system x′ = Ax + Bu, y = Cx with constant real matrices transposes and swaps roles: it uses Aᵀ for dynamics, Cᵀ for input and Bᵀ for output.

**Problem.** A finite-dimensional continuous-time linear system can reach every state from rest exactly when its dual can distinguish all initial states from their outputs.

**How the definition helps.** The dual’s observability matrix, with rows Bᵀ, BᵀAᵀ, …, is the transpose of the original’s controllability matrix \[B, AB, …\], and transposition preserves rank (our own). The Kalman rank tests say that full rank means every state is reachable, or every initial state is distinguishable (our own).

**nLab:** [controllability and observability](https://ncatlab.org/nlab/show/controllability+and+observability). It says: “Now controllability of the original system corresponds to observability of the dual, and vice versa.”

**Sources:** none listed. No primary source with a working link was found.

### Gramians detect unobservable states

**Remember:** Zero output energy means the state left no trace.

*True by definition.* MSC 93B07 (Observability), 93C05. arXiv math.OC, eess.SY. Level 2: later undergraduate.

**Definition.** On a fixed interval of positive length, the observability Gramian W is the matrix for which xᵀWx is the integral of the squared output norm from initial state x with zero input. So xᵀWx = 0 exactly when the state x leaves no trace in the output (our own).

**Problem.** For a real finite-dimensional linear system, the observed output determines the initial state exactly when W is nonsingular.

**How the definition helps.** W is positive semidefinite, so it is singular exactly when some nonzero state has zero output energy (our own). By continuity, zero energy means zero output on the whole interval, and by linearity such a state looks like zero (our own). This replaces comparing whole output curves with checking one matrix (our own).

**Paper or page:** [Controllability and observability of tempered fractional differential systems](https://arxiv.org/abs/2412.05349v1). It says: “if, and only if, the observability Gramian matrix”

**Sources:**

- [Controllability and observability of tempered fractional differential systems](https://arxiv.org/abs/2412.05349v1)

### Error coordinates separate stability tests

**Remember:** Track the error and the two designs separate.

*True by definition.* MSC 93B52 (Feedback control), 93B53. arXiv eess.SY, cs.SY. Level 2: later undergraduate.

**Definition.** Describe the closed loop by the state x and the estimation error e = x − x̂, instead of x and the estimate x̂. In these coordinates the error obeys its own equation, free of x.

**Problem.** For x′ = Ax + Bu with output Cx, use feedback u = −Kx̂ from an observer that corrects its model by L(Cx − Cx̂). The closed loop’s eigenvalues are those of A − BK and A − LC, counted with multiplicity.

**How the definition helps.** Subtraction gives e′ = (A − LC)e, and substitution gives x′ = (A − BK)x + BKe (our own). The resulting matrix is block triangular, so its eigenvalues are those of its two diagonal blocks. The change of coordinates is invertible, so it keeps the eigenvalues (our own).

**nLab:** [controllability and observability](https://ncatlab.org/nlab/show/controllability+and+observability). It says: “the design of a feedback controller and of a state observer are mutually independent.”

**Wikipedia:** [Separation principle](https://en.wikipedia.org/wiki/Separation_principle). It says: “the eigenvalues are just those of A − BK together with those of A − LC.”

**Sources:** none listed. No primary source with a working link was found.

### Strict properness prevents algebraic loops

**Remember:** One missing direct term breaks the instantaneous loop.

*Rules out counterexamples.* MSC 93B52 (Feedback control), 93C05. arXiv eess.SY, cs.SY. Level 2: later undergraduate.

**Definition.** A scalar rational transfer function is strictly proper if it is zero or its numerator has smaller degree than its denominator. Equivalently, it tends to zero at high frequency, so its realizations have no direct term and the output depends only on the current state (our own).

**Problem.** Connect two proper finite-dimensional scalar linear time-invariant systems in feedback. If either transfer function is strictly proper, the current states and external inputs uniquely determine both current inputs.

**How the definition helps.** The strictly proper system’s output comes from its state alone, so it can be computed first and then fed to the other system (our own). If both systems have direct terms, the loop equation can fail: a static gain of −1 in negative feedback gives y = −(r − y), impossible for nonzero r (our own).

**Wikipedia:** [Proper transfer function](https://en.wikipedia.org/wiki/Proper_transfer_function). It says: “A strictly proper transfer function will approach zero as the frequency approaches infinity”

**Sources:** none listed. No primary source with a working link was found.

### The bilinear transform preserves stability

**Remember:** The left half-plane goes inside the unit circle.

*Rules out counterexamples.* MSC 93C57 (Sampled-data control/observation systems), 93C80. arXiv eess.SY, cs.SY. Level 2: later undergraduate.

**Definition.** For step size h &gt; 0, the bilinear transform sends a continuous rate s ≠ 2/h to the discrete multiplier z = (1 + hs/2)/(1 − hs/2). Its modulus \|z\| is the ratio of the distances from s to −2/h and to 2/h (our own).

**Problem.** If every eigenvalue of a state matrix has negative real part, every transformed eigenvalue has magnitude below one for every positive step size.

**How the definition helps.** A rate with negative real part is closer to −2/h than to 2/h, so its multiplier has modulus below one (our own). A rational function of a matrix maps each eigenvalue to its value there (our own). Forward Euler instead sends the stable rate −3 to the unstable multiplier −2 at step size 1 (our own).

**Wikipedia:** [Bilinear transform](https://en.wikipedia.org/wiki/Bilinear_transform). It says: “The bilinear transform maps the left half of the complex s-plane to the interior of the unit circle in the z-plane.”

**Sources:** none listed. No primary source with a working link was found.

### Minimum-phase systems compose reversibly

**Remember:** Both the system and its inverse must be causal and stable.

*Rules out counterexamples.* MSC 93C80 (Frequency-response methods in control theory), 93D25. arXiv eess.SY, cs.SY. Level 2: later undergraduate.

**Definition.** A discrete-time linear time-invariant system is minimum-phase if both it and its inverse are causal, using only current and past inputs, and stable, mapping bounded inputs to bounded outputs.

**Problem.** A series connection of discrete-time minimum-phase systems is minimum-phase. Its inverse is the series of their inverses in reverse order.

**How the definition helps.** The inverse of a series connection is the series of the inverses in reverse order, and a series of causal stable systems is causal and stable (our own). By contrast, (z − 2)/(z − ½) is stable, but its causal inverse has a pole at 2, outside the unit circle, so bounded inputs can give unbounded outputs (our own).

**Wikipedia:** [Minimum phase](https://en.wikipedia.org/wiki/Minimum_phase). It says: “a linear, time-invariant system is said to be minimum-phase if the system and its inverse are causal and stable.”

**Sources:** none listed. No primary source with a working link was found.

### Independent readings add information

**Remember:** Multiply Gaussian likelihoods by adding their information.

*True by definition.* MSC 93E11 (Filtering in stochastic control theory), 93E10. arXiv eess.SY, cs.SY. Level 2: later undergraduate.

**Definition.** The information form of a Gaussian with nonsingular covariance stores the precision matrix, the inverse covariance, and the information vector, the precision matrix times the mean. These are the coefficients of the quadratic and linear terms in the log density (our own).

**Problem.** Start from a Gaussian prior and take linear measurements with centered Gaussian errors, independent of each other and of the state, all covariances nonsingular. Each measurement then adds its own term to the precision matrix and to the information vector.

**How the definition helps.** Multiplying independent likelihoods adds log densities, so it adds these coefficients (our own). A measurement y = Hx plus noise with covariance R contributes HᵀR⁻¹H to the precision matrix and HᵀR⁻¹y to the information vector (our own).

**Wikipedia:** [Kalman filter](https://en.wikipedia.org/wiki/Kalman_filter). It says: “measurements can be filtered at each time step simply by summing their information matrices and vectors.”

**Sources:** none listed. No primary source with a working link was found.

### Chain-reachable sets are closed

**Remember:** Leave room for a last small jump, and limits stay reachable.

*True by definition.* MSC 93B03 (Attainable sets, reachability), 93B24. arXiv math.OC. Level 3: graduate.

**Definition.** In a metric state space, y is chain reachable from x if every ε,T &gt; 0 admit a finite chain from x to y. Each link follows an admissible trajectory for at least T, then jumps a distance less than ε.

**Problem.** The set of chain-reachable states from any fixed state is closed.

**How the definition helps.** A nearby chain endpoint can use its last jump to reach the limit point (our own). Choose an endpoint within ε/2 and reach it with jumps smaller than ε/2 and durations at least T (our own). The triangle inequality keeps the modified last jump below ε (our own).

**Paper or page:** [Chain controllability of linear control systems](https://arxiv.org/abs/2312.14595v1). It says: “The chain controllable sets Cᶜ(x) and the chain reachable sets Rᶜ(x) are closed.”

**Sources:**

- [Chain controllability of linear control systems](https://arxiv.org/abs/2312.14595v1)

### Detectability permits a convergent observer

**Remember:** An invisible error is harmless only if it dies out.

*Rules out counterexamples.* MSC 93B07 (Observability), 93B53. arXiv eess.SY, cs.SY. Level 3: graduate.

**Definition.** A finite-dimensional continuous-time linear system with constant coefficients is detectable if every zero-input motion with identically zero output tends to zero. In words, whatever the output cannot see dies out by itself.

**Problem.** A linear observer estimates the state from the known input and measured output. An observer whose estimation error decays exponentially for every initial error exists exactly when the system is detectable.

**How the definition helps.** An error that the output never shows gets no correction, so it must decay on its own (our own). In the observability decomposition, detectability makes the unobservable block stable, and pole placement stabilizes the observable block, so the triangular error system decays exponentially (our own). For example, x′ = x with zero output hides a growing error that no observer can correct (our own).

**Wikipedia:** [Observability](https://en.wikipedia.org/wiki/Observability). It says: “A system is detectable if all the unobservable states are stable.”

**Sources:** none listed. No primary source with a working link was found.

### Flat outputs generate trajectories

**Remember:** Choose a flat output path and differentiate to recover the motion.

*True by definition.* MSC 93B18 (Linearizations), 93C10. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** A flat output is a signal computed locally from the state, the input and finitely many input derivatives. It can be chosen freely within its domain, and it and finitely many of its derivatives determine the state and input by explicit formulas.

**Problem.** Every sufficiently smooth choice of flat output gives a system trajectory, provided its derivatives stay in the domain of the reconstruction formulas.

**How the definition helps.** The reconstruction formulas turn any sufficiently smooth flat output curve into a state and input that satisfy the system equations (our own). So planning a trajectory needs no integration, while an ordinary measured output need not determine the motion this way (our own).

**Paper or page:** [Optimal Control for Kinematic Bicycle Model with Continuous-time Safety Guarantees: A Sequential Second-order Cone Programming Approach](https://arxiv.org/abs/2204.08980v1). It says: “obtained by passing the parameterized flat outputs”

**Sources:**

- [M. Fliess, J. Lévine, P. Martin and P. Rouchon, Flatness and defect of non-linear systems: introductory theory and examples (1995)](https://doi.org/10.1080/00207179508921959)

### Hankel rank gives minimal dimension

**Remember:** Count the independent futures that past inputs can produce.

*Makes the theorem clean to state or prove.* MSC 93B20 (Minimal systems representations), 93B15. arXiv eess.SY, cs.SY. Level 3: graduate.

**Definition.** Start a discrete-time linear system at zero and apply a finite input history. The Hankel map sends that history to all subsequent outputs when every subsequent input is zero. Its rank counts the independent future output sequences the past can produce.

**Problem.** For a finite-dimensional time-invariant linear system, the Hankel rank equals the smallest state dimension that reproduces its input-output behavior.

**How the definition helps.** Every past input affects future outputs through the current state, so the Hankel rank bounds every realization’s dimension from below (our own). The Ho–Kalman realization theorem attains that bound with a state space of independent future responses (our own).

**nLab:** [controllability and observability](https://ncatlab.org/nlab/show/controllability+and+observability). It says: “a system may be seen as giving rise to a map from an initial algebra to a terminal coalgebra which factors through it”

**Sources:**

- [B. L. Ho and R. E. Kalman, Effective construction of linear state-variable models from input/output functions (1966)](https://doi.org/10.1524/auto.1966.14.112.545)

### Minimality rules out hidden poles

**Remember:** In a minimal model, no internal mode can hide from the transfer function.

*Rules out counterexamples.* MSC 93B20 (Minimal systems representations), 93D25. arXiv eess.SY, cs.SY. Level 3: graduate.

**Definition.** A realization of a transfer function is a state-space model with that input-output behavior. It is minimal if its input can reach every state and its output can distinguish all starting states, so no internal mode hides from the transfer function (our own).

**Problem.** Consider a minimal finite-dimensional continuous-time linear realization with constant coefficients. Bounded inputs give bounded outputs from rest exactly when every zero-input state tends exponentially to zero.

**How the definition helps.** In a minimal realization, every eigenvalue of the state matrix is a pole of the transfer function, by the realization theorem (our own). Bounded inputs give bounded outputs exactly when every pole has negative real part, so this matches exponential decay of the state. Without minimality, ẋ = x with output equal to input gives a bounded response from rest while hiding a growing state (our own).

**Wikipedia:** [Minimal realization](https://en.wikipedia.org/wiki/Minimal_realization), [BIBO stability](https://en.wikipedia.org/wiki/BIBO_stability). It says: “model that is both controllable and observable and has the same input-output behaviour as the transfer function”

**Sources:** none listed. No primary source with a working link was found.

### Tangent cones reject false tangency

**Remember:** Test the set’s directions, not just its equation.

*Rules out counterexamples.* MSC 93B27 (Geometric methods), 93C10. arXiv math.OC, eess.SY. Level 3: graduate.

**Definition.** The tangent cone of a closed set at a point x holds the directions in which one can leave x and stay in the set to first order. Exactly, it contains the limits of (y − x)/t over points y of the set and times t &gt; 0 tending to zero.

**Problem.** Let a continuous vector field on ℝⁿ have unique global solutions. A closed set is forward invariant exactly when the field lies in its tangent cone at every boundary point.

**How the definition helps.** Invariance needs the field to point along feasible directions of the set, not merely to pass a derivative test on a boundary equation (our own). For the set x³ ≤ 0, the derivative of x³ vanishes at zero, so that test accepts x′ = 1, but the tangent cone x ≤ 0 rejects it (our own). The Nagumo tangency theorem uses uniqueness to turn these local directions into whole trajectories that stay inside (our own).

**Paper or page:** [Safe Control Synthesis via Input Constrained Control Barrier Functions](https://arxiv.org/abs/2104.01704v1). It says: “a closed set S ⊆ X is forward invariant for the system, if and only if”

**Sources:** none listed. No primary source with a working link was found.

### Rich input windows span trajectories

**Remember:** Enough independent windows turn one experiment into many trajectories.

*Makes the theorem clean to state or prove.* MSC 93B30 (System identification), 93C55. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** An input record is persistently exciting of order q if its overlapping windows of q consecutive inputs span all input sequences of length q.

**Problem.** Take a discrete-time linear time-invariant system with n states that can be steered between any two states, recorded without noise. If its input is persistently exciting of order L + n, the paired state and input windows span exactly the trajectories of length L.

**How the definition helps.** By linearity, combinations of recorded windows are trajectories, so the windows span only trajectories (our own). Willems’ fundamental lemma uses the n extra steps of excitation and controllability to show that they span all of them (our own).

**Paper or page:** [Fast and memory-efficient optimization for large-scale data-driven predictive control](https://arxiv.org/abs/2402.13090v1). It says: “is persistently exciting of order L + n.”

**Sources:**

- [J. C. Willems, P. Rapisarda, I. Markovsky and B. L. M. De Moor, A note on persistency of excitation (2005)](https://doi.org/10.1016/j.sysconle.2004.09.003)

### Invariant endpoints preserve plan feasibility

**Remember:** Shift the old plan and append one legal move.

*True by definition.* MSC 93B45 (Model predictive control), 93C55. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** A predictive controller requires its finite plan to end in a terminal set. The set is invariant if, from each of its points, some feedback move that obeys the constraints keeps the state in the set.

**Problem.** Suppose a deterministic discrete-time model is exact and constraints stay fixed. After applying the first move of a feasible plan, another plan of the same length exists if the terminal set is invariant.

**How the definition helps.** After the first move, shift the old plan by one step and append the legal move that the invariant terminal set supplies (our own). Exact prediction makes the shifted plan start at the actual next state (our own). The cited paper proves feasibility for its controller with equilibrium endpoints.

**Wikipedia:** [Model predictive control](https://en.wikipedia.org/wiki/Model_predictive_control). It says: “Only the first step of the control strategy is implemented”

**Paper or page:** [On Model Predictive Funnel Control with Equilibrium Endpoint Constraints](https://arxiv.org/abs/2505.20090v1). It says: “implies its solvability at the next time step”

**Sources:**

- [On Model Predictive Funnel Control with Equilibrium Endpoint Constraints](https://arxiv.org/abs/2505.20090v1)

### Invariant error tubes protect constraints

**Remember:** Keep the error in its band, whatever the disturbance.

*True by definition.* MSC 93B45 (Model predictive control), 93D09. arXiv math.OC, eess.SY. Level 3: graduate.

**Definition.** A tube around a planned trajectory adds a fixed error set to each planned state. The error set is invariant if the tracking policy keeps the next error in the set whenever the current error is in it, for every allowed disturbance.

**Problem.** If the initial error belongs to the invariant set, every actual state lies in its corresponding tube section. If every section lies inside the allowed state region, every actual state meets the constraints.

**How the definition helps.** Invariance is exactly the induction step from one tube section to the next (our own). Checking only the planned states would miss errors caused by disturbances (our own).

**Paper or page:** [State-Dependent Dynamic Tube MPC: A Novel Tube MPC Method with a Fuzzy Model of Disturbances](https://arxiv.org/abs/2310.19997v1). It says: “we need to constrain both the nominal state and the potential errors”

**Sources:**

- [State-Dependent Dynamic Tube MPC: A Novel Tube MPC Method with a Fuzzy Model of Disturbances](https://arxiv.org/abs/2310.19997v1)

### Stabilizing Riccati solutions are unique

**Remember:** The right Riccati solution must stabilize the system.

*Rules out counterexamples.* MSC 93B52 (Feedback control), 93C05. arXiv math.OC, eess.SY. Level 3: graduate.

**Definition.** Let Q and R be symmetric, with R positive definite, and set G = BR⁻¹Bᵀ. Consider the symmetric solutions P of AᵀP + PA − PGP + Q = 0. A solution stabilizes the system if every eigenvalue of A − GP has negative real part.

**Problem.** At most one symmetric solution of this equation is stabilizing.

**How the definition helps.** For two stabilizing solutions P and S, subtracting the equations gives UᵀD + DW = 0 with D = P − S, U = A − GP and W = A − GS (our own). Then exp(tUᵀ)D exp(tW) stays equal to D, yet tends to zero because U and W are stable, so D = 0 (our own). With A = 0 and B = Q = R = 1, the solutions are ±1, and only 1 stabilizes (our own).

**Wikipedia:** [Algebraic Riccati equation](https://en.wikipedia.org/wiki/Algebraic_Riccati_equation). It says: “Though generally this system can have many solutions, it is usually specified that we want to obtain the unique stabilizing solution, if such a solution exists.”

**Sources:** none listed. No primary source with a working link was found.

### Weak equations give closed trajectory sets

**Remember:** Put the derivatives on the test functions before taking the limit.

*True by definition.* MSC 93C05 (Linear systems in control theory). arXiv math.OC, eess.SY. Level 3: graduate.

**Definition.** A square-integrable signal weakly solves a homogeneous linear constant-coefficient differential system on an interval if moving all derivatives onto smooth test functions supported inside the interval makes every resulting integral vanish. Each such integral is a continuous linear function of the signal in the square-integrable norm (our own).

**Problem.** The admissible signals for a linear constant-coefficient differential system form a closed subspace in the square-integrable norm.

**How the definition helps.** Each test function gives a continuous linear condition with a closed zero set, and an intersection of closed subspaces is closed (our own). For smooth signals, integration by parts shows that weak and ordinary solutions agree (our own).

**Paper or page:** [A continuous-time fundamental lemma and its application in data-driven optimal control](https://arxiv.org/abs/2407.12179v1). It says: “is closed in L²”

**Sources:**

- [A continuous-time fundamental lemma and its application in data-driven optimal control](https://arxiv.org/abs/2407.12179v1)

### Finite-step decrease permits temporary increases

**Remember:** Judge progress at the end of each block.

*True by definition.* MSC 93D15 (Stabilization of systems by feedback), 93B45. arXiv math.OC, eess.SY. Level 3: graduate.

**Definition.** A finite-step Lyapunov function V need not decrease every step, only over blocks of m steps (our own). Fix a, b, c &gt; 0, an integer m ≥ 1 and 0 &lt; q &lt; 1, with a‖x‖² ≤ V(x) ≤ b‖x‖² at every allowed x. Each allowed x admits a feasible m-step block that ends with V at most qV(x) and keeps every intermediate norm at most c‖x‖.

**Problem.** Under these bounds, every allowed initial state has a trajectory that obeys the constraints and converges to zero.

**How the definition helps.** After k blocks V is at most qᵏ times its initial value, so the lower bound forces the block endpoints to zero (our own). The intermediate bound then forces the states inside each block to zero as well (our own).

**Paper or page:** [Flexible-step Model Predictive Control based on Generalized Lyapunov Functions](https://arxiv.org/abs/2211.02780v2). It says: “there exists a feasible control sequence such that limₖ→∞ xᵏ = 0.”

**Sources:**

- [Flexible-step Model Predictive Control based on Generalized Lyapunov Functions](https://arxiv.org/abs/2211.02780v2)

### Common Lyapunov functions handle switching

**Remember:** Switch the dynamics without switching what measures the state.

*True by definition.* MSC 93D23 (Exponential stability), 93C30. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** A common quadratic Lyapunov function for a switched linear system is one positive definite quadratic form whose derivative is negative away from zero along every mode, each of the linear equations the system can follow.

**Problem.** Consider finitely many continuous-time linear modes with continuous state and finitely many switches on each bounded interval. A common quadratic Lyapunov function guarantees constants C, a &gt; 0 with ‖x(t)‖ ≤ C exp(−at)‖x(0)‖ for every switching sequence.

**How the definition helps.** The one form decreases on every interval and keeps its value across each switch, since the state is continuous (our own). With finitely many modes, the strict quadratic bounds give one common exponential decay rate (our own). The cited theorem supplies such a form when all mode matrices are stable and simultaneously upper triangular in some complex coordinates.

**Paper or page:** [Feedback rectifiable pairs and stabilization of switched linear systems](https://arxiv.org/abs/2308.10591v2). It says: “the origin of the switched system is asymptotically stable for arbitrary switching”

**Sources:** none listed. No primary source with a working link was found.

### Joint spectral radius detects switching instability

**Remember:** Take the limiting per-step growth of the largest product norm.

*Rules out counterexamples.* MSC 93D23 (Exponential stability), 93C30. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** The joint spectral radius of a finite nonempty set of square matrices of one size is the worst long-run growth per step of their products (our own). Exactly, it is the limit of the kth roots of the largest operator norm among products of k factors.

**Problem.** Uniform exponential decay means every k-step product has norm at most Cqᵏ, with common constants C &gt; 0 and 0 &lt; q &lt; 1. This holds exactly when the joint spectral radius is below one.

**How the definition helps.** If the limit is below one, pick q between it and one; long products then have norm at most qᵏ, and a larger C covers the finitely many short ones (our own). Conversely, kth roots of Cqᵏ tend to q, so the limit is at most q &lt; 1 (our own). Two matrices with a single entry 2 in opposite off-diagonal places each square to zero, yet their product has eigenvalue 4 (our own).

**Paper or page:** [Stability Analysis of Switched Linear Systems with Neural Lyapunov Functions](https://arxiv.org/abs/2312.08190v1), [Stability Analysis of Switched Linear Systems with Neural Lyapunov Functions](https://arxiv.org/abs/2312.08190v1). It says: “The corresponding switched linear system is stable if and only if ρ(Σ) &lt; 1.”

**Sources:** none listed. No primary source with a working link was found.

### Input-to-state stability makes cascades of stable systems stable

**Remember:** State forgets its start and stays within a gain of the input.

*Rules out counterexamples.* MSC 93D25 (Input-output approaches in control theory), 93D20, 93A13. arXiv math.OC, eess.SY. Level 3: graduate.

**Definition.** A system is input-to-state stable if its state is bounded by a decaying term in the initial state plus a gain of the input size: \|x(t)\| ≤ β(\|x₀\|,t) + γ(‖u‖∞) for every initial state, essentially bounded input and t ≥ 0. Here β and γ are continuous, γ and each β(·,t) increase strictly from zero, and each β(r,t) decreases to zero as t tends to infinity.

**Problem.** A cascade of input-to-state stable systems, where each one drives the next, is input-to-state stable. A cascade of systems that are only globally asymptotically stable with zero input need not be stable.

**How the definition helps.** The upstream state is the downstream input, so the upstream bound feeds into the downstream bound and the two estimates compose (our own). Zero-input stability gives no such bound. In x′ = −x + yx², y′ = −y, each part is stable alone, yet some positive starts blow up in finite time (our own).

**Wikipedia:** [Input-to-state stability](https://en.wikipedia.org/wiki/Input-to-state_stability). It says: “In contrast to cascades of ISS systems, the cascade interconnection of 0-GAS systems is in general not 0-GAS.”

**Sources:**

- [E. D. Sontag, Smooth stabilization implies coprime factorization, IEEE Transactions on Automatic Control 34 (1989) 435–443](https://doi.org/10.1109/9.28018)

### Scattering passivity survives feedback

**Remember:** Energy gained never exceeds energy in minus energy out.

*True by definition.* MSC 93D25 (Input-output approaches in control theory), 93B52. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** A discrete-time system is scattering passive if it has a nonnegative stored energy whose increase at each step is at most the squared input norm minus the squared output norm.

**Problem.** Connect two such systems by taking each internal output as the other system’s internal input. Assume the connection defines a system for the allowed external inputs. The resulting system is scattering passive.

**How the definition helps.** Each internal signal is one system’s output and the other’s input, so it enters the two energy bounds with opposite signs (our own). Adding the two bounds cancels those terms and leaves the required bound for the sum of the stored energies (our own).

**Paper or page:** [A geometric framework for discrete time port-Hamiltonian systems](https://arxiv.org/abs/2307.01351v2). It says: “is scattering passive.”

**Sources:**

- [A geometric framework for discrete time port-Hamiltonian systems](https://arxiv.org/abs/2307.01351v2)

### Strictly small loop gain ensures stability

**Remember:** Gain is the worst stretch, and loops that shrink stay bounded.

*Rules out counterexamples.* MSC 93D25 (Input-output approaches in control theory), 93B52. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** The gain of a system is the least constant c with ‖output‖ ≤ c‖input‖ on every finite time interval, starting from rest. Connected inputs and outputs use compatible signal norms.

**Problem.** Suppose two systems use only present and past inputs, and their feedback equations have a unique causal solution for every external input. If their gains multiply to less than one, the feedback system has finite gain.

**How the definition helps.** Substituting the two gain bounds into each other bounds a loop signal by the external input plus γ₁γ₂ times itself, on each finite interval (our own). With γ₁γ₂ &lt; 1, a positive coefficient 1 − γ₁γ₂ remains, and dividing by it bounds the response (our own). At γ₁γ₂ = 1, positive feedback through a unit delay and an identity accumulates a constant input without bound (our own).

**Wikipedia:** [Small-gain theorem](https://en.wikipedia.org/wiki/Small-gain_theorem). It says: “the closed loop system is input-output stable if ‖S₁‖ · ‖S₂‖ &lt; 1 and both S₁ and S₂ are stable by themselves.”

**Sources:**

- [G. Zames, On the input-output stability of time-varying nonlinear feedback systems, Part one (1966)](https://doi.org/10.1109/TAC.1966.1098316)

### Maximum extraction gives minimum storage

**Remember:** Available storage is the most energy you can ever withdraw.

*True by definition.* MSC 93D30 (Lyapunov and storage functions), 93D25. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** A storage function assigns nonnegative energy to each time and state, and its increase along any trajectory is at most the net energy supplied. Available storage is the most net energy one can extract from a given time and state, the supremum over all continuations, including zero for an immediate stop.

**Problem.** For the passive linear systems with time-dependent coefficients in the paper, available storage is the smallest storage function at every time and state.

**How the definition helps.** A storage function cannot fall below zero, so it must hold at least what any withdrawal extracts, and taking the supremum puts available storage below it (our own). Available storage is itself a storage function: append a nearly optimal withdrawal to any initial trajectory segment (our own).

**Paper or page:** [Dissipative energy functionals of passive linear time-varying systems](https://arxiv.org/abs/2412.16347v1). It says: “and is minimal among all storage functions”

**Sources:**

- [Dissipative energy functionals of passive linear time-varying systems](https://arxiv.org/abs/2412.16347v1)

### Innovations isolate measurement corrections

**Remember:** Correct the prediction with only the unexpected part of each reading.

*Makes the theorem clean to state or prove.* MSC 93E11 (Filtering in stochastic control theory). arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** The innovation is the part of the observations that the current estimate did not predict: V(t) = Y(t) − ∫₀ᵗ(H(s)X̂(s) + h(s)) ds. Here Y starts at zero, its drift is H(t)X(t) + h(t), and X̂(t) is the conditional mean of X(t) given the observations through t.

**Problem.** Consider a continuous linear system with known initial state, deterministic coefficients, and additive Brownian noise with nonsingular observation noise covariance. The state estimate given the observations evolves by the predicted dynamics plus a gain times the innovation increment.

**How the definition helps.** Subtracting the predicted drift leaves only new information, so every measurement correction enters through the innovation increment (our own). The filtering theorem then determines the gain and proves that the update gives the conditional mean (our own).

**Paper or page:** [Stochastic Linear-Quadratic Optimal Control with Partial Observation](https://arxiv.org/abs/2202.13632v1). It says: “V(t) ≜ Y(t) − ∫₀ᵗ \[H(s)X̂(s) + h(s)\] ds”

**Sources:**

- [Stochastic Linear-Quadratic Optimal Control with Partial Observation](https://arxiv.org/abs/2202.13632v1)

### Occupation measures satisfy flow balance

**Remember:** Every visit either starts the run or comes from a previous visit.

*True by definition.* MSC 93E20 (Optimal stochastic control). arXiv math.OC, cs.SY. Level 3: graduate.

**Definition.** In a Markov decision process, where the next state is random given the current state and action, run a rule until it reaches a target. Its occupation measure counts the expected visits to each set of state and action pairs before stopping.

**Problem.** Suppose every rule has finite expected stopping time from the initial distribution. For any set of nonterminal states, expected visits equal the probability of starting there plus expected later arrivals.

**How the definition helps.** Each visit is either the first one or an arrival from the previous visit, so the count splits into the starting probability plus later arrivals (our own). Later arrivals are the occupation measure weighted by the transition probabilities into the set (our own).

**Paper or page:** [Absorbing Markov Decision Processes](https://arxiv.org/abs/2309.07059v2). It says: “satisfies the characteristic equations.”

**Sources:**

- [Absorbing Markov Decision Processes](https://arxiv.org/abs/2309.07059v2)

### Transient Gramians stay finite

**Remember:** Remove the steady part before measuring the transient.

*Rules out counterexamples.* MSC 93B11 (System structure simplification), 93C05. arXiv eess.SY, math.OC. Level 4: research.

**Definition.** For x′ = Ax + Bu with exp(tA) tending exponentially to J, subtract the steady part before integrating. The modified controllability Gramian is P = ∫₀∞ F(t)F(t)ᵀ dt with F(t) = (exp(tA) − J)B, which decays exponentially (our own).

**Problem.** The modified Gramian P is finite. It is the unique symmetric solution of AP + PAᵀ + (B − JB)(B − JB)ᵀ = 0 with JPJᵀ = 0.

**How the definition helps.** Because F decays exponentially, P is finite, unlike the ordinary Gramian of x′ = u, whose integrand stays constant (our own). Integrating the derivative of FFᵀ, with F′ = AF, F(0) = B − JB and F → 0, gives the equation, and JF = 0 gives JPJᵀ = 0 (our own). Two solutions differ by some D with exp(tA)D exp(tAᵀ) = D for all t, and the limit gives D = JDJᵀ = 0 (our own).

**Paper or page:** [Gramian-Based Model Reduction of Directed Networks](https://arxiv.org/abs/1901.01285v2). It says: “are the unique symmetric solutions of the following sets of linear matrix equations”

**Sources:**

- [Gramian-Based Model Reduction of Directed Networks](https://arxiv.org/abs/1901.01285v2)

### Strong chain control sets are preserved by topological conjugacy

**Remember:** Let the allowed jump size depend on where the jump occurs.

*Makes the theorem clean to state or prove.* MSC 93B24 (Topological methods), 93C10. arXiv math.OC, math.DS. Level 4: research.

**Definition.** A strong chain control set is a maximal set E in which every point lies on a full controlled trajectory inside E, and each point reaches each other point by chains of trajectories with small jumps. This must hold for every minimum duration T &gt; 0 and every positive continuous tolerance function ε: each piece lasts at least T and ends at a point z less than ε(z) from the start of the next piece.

**Problem.** Suppose a homeomorphism H carries controlled trajectories of one system onto those of another while preserving time. Then E is a strong chain control set exactly when H(E) is one.

**How the definition helps.** A homeomorphism distorts distances by different amounts in different places, and a tolerance that varies continuously can absorb that (our own). For each target tolerance ε, the continuous minorant lemma gives a source tolerance δ, so a jump shorter than δ(x) maps to one shorter than ε(H(x)) (our own). Applying this in both directions preserves chains, full trajectories and maximality (our own).

**Paper or page:** [Strong chain control sets and affine control systems](https://arxiv.org/abs/2407.18765v1), [Strong chain control sets and affine control systems](https://arxiv.org/abs/2407.18765v1). It says: “Then E⋆ is a strong chain control set in M if and only if H(E⋆) is a strong chain control set in N.”

**Sources:**

- [Fritz Colonius, Alexandre J. Santana, Strong chain control sets and affine control systems, J. Diff. Equations 424 (2025), pp. 760-791 \[arXiv:2407.18765v1\]](https://arxiv.org/abs/2407.18765v1)

### Gluing reset surfaces to their images makes hybrid jumps into ordinary crossings

**Remember:** Glue each reset to its surface, and jumps become crossings.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 93C30 (Control/observation systems governed by functional relations other than differential equations (such as hybrid and switching systems)), 34A36. arXiv math.DS, math.OC. Level 4: research.

**Definition.** Glue each point of a switching surface to its reset image, so that a reset becomes an ordinary crossing in one space. A hybrid Filippov solution is an absolutely continuous curve there whose velocity almost everywhere lies in the Filippov set of the glued field. That set intersects, over all radii and all deletions of measure-zero sets, the closed convex hulls of nearby velocities.

**Problem.** Under the paper's crossing assumptions, the hybrid Filippov solution is unique. Smooth approximations of the hybrid system converge to it uniformly in time, with error at most a constant times the smoothing width.

**How the definition helps.** Once resets are crossings, hybrid executions and their smooth approximations are curves in one space, so they can be compared uniformly, including at switch times. The proof still needs uniqueness and an error bound for the smoothing.

**Paper or page:** [A New Solution Concept and Family of Relaxations for Hybrid Dynamical Systems](https://arxiv.org/abs/1803.08092v5), [A New Solution Concept and Family of Relaxations for Hybrid Dynamical Systems](https://arxiv.org/abs/1803.08092v5), [A New Solution Concept and Family of Relaxations for Hybrid Dynamical Systems](https://arxiv.org/abs/1803.08092v5). It says: “The resulting hybrid Filippov solutions greatly simplify the mathematical description of hybrid executions, providing a unifying solution concept with which to work.”

**Sources:**

- [Tyler Westenbroek, Humberto Gonzalez, S. Shankar Sastry, A New Solution Concept and Family of Relaxations for Hybrid Dynamical Systems, arXiv:1803.08092 (2018)](https://arxiv.org/abs/1803.08092v5)

### Inner safe sets respect braking limits

**Remember:** Keep only states where every allowed input still leaves time to brake.

*Rules out counterexamples.* MSC 93D15 (Stabilization of systems by feedback), 93C10. arXiv eess.SY, math.OC. Level 4: research.

**Definition.** Start from a smooth safety test b₀, a depth N and increasing functions αᵢ vanishing at zero, and set bᵢ₊₁(x) = αᵢ(bᵢ(x)) plus the least rate of change of bᵢ at x over admissible inputs. The inner safe set is where b₀, …, b<sub>N</sub> are all nonnegative, so even the worst allowed input cannot make any earlier test fall too fast.

**Problem.** Under the paper’s barrier hypotheses, with smooth tests and well-defined closed-loop solutions, let a Lipschitz feedback use allowed inputs and enforce b′ ≥ −α(b) for the final test on the inner set. Then trajectories starting in the inner set stay there throughout their existence.

**How the definition helps.** If bᵢ₊₁ ≥ 0, every allowed input gives bᵢ′ ≥ −αᵢ(bᵢ), which keeps bᵢ nonnegative, and the feedback’s bound on the final test closes the chain (our own). A car at its position limit moving outward passes the position test but cannot stop instantly with bounded braking (our own).

**Paper or page:** [Safe Control Synthesis via Input Constrained Control Barrier Functions](https://arxiv.org/abs/2104.01704v1). It says: “is an ICCBF, then any Lipschitz continuous controller”

**Sources:**

- [Safe Control Synthesis via Input Constrained Control Barrier Functions](https://arxiv.org/abs/2104.01704v1)

### Measuring with a seminorm lets unstable modes be ignored in stability

**Remember:** A seminorm ignores some directions, so only the rest must decay.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 93D23 (Exponential stability), 93D30. arXiv cs.LG, math.OC. Level 4: research.

**Definition.** A seminorm p on a finite-dimensional complex space is like a norm but may vanish on nonzero vectors, and those vectors form its kernel. The map A is stable in p if p(Aᵏx) ≤ cρᵏp(x) for every x and every integer k ≥ 0, with fixed c &gt; 0 and ρ ∈ (0,1).

**Problem.** Stability in p holds exactly when A preserves the kernel and the kernel contains every generalized eigenvector whose eigenvalue has modulus at least one (our own). The paper characterizes this stability through a Lyapunov equation with positive semidefinite matrices.

**How the definition helps.** Directions in the kernel do not count, so modes there may grow while the measured part decays. For A = diag(2, ½) and p(x) = \|x₂\|, the first coordinate grows, but p(Aᵏx) = 2⁻ᵏp(x) (our own). On the quotient by the kernel p is a norm, which gives the eigenvalue condition (our own).

**Paper or page:** [A Non-Asymptotic Theory of Seminorm Lyapunov Stability: From Deterministic to Stochastic Iterative Algorithms](https://arxiv.org/abs/2502.14208v1). It says: “In this special case, our results provide a complete characterization of system stability with respect to a seminorm, linking it to the solution of a Lyapunov equation in terms of positive semi-definite matrices.”

**Sources:**

- [Zaiwei Chen, Sheng Zhang, Zhe Zhang, Shaan Ul Haque, Siva Theja Maguluri, A Non-Asymptotic Theory of Seminorm Lyapunov Stability: From Deterministic to Stochastic Iterative Algorithms, arXiv:2502.14208v1 (2025)](https://arxiv.org/abs/2502.14208v1)

### Shifted energy gives shifted passivity

**Remember:** Subtract the steady equations before computing the power balance.

*True by definition.* MSC 93D30 (Lyapunov and storage functions), 93D25. arXiv math.OC, eess.SY. Level 4: research.

**Definition.** Shifted energy is half the squared distance of the state from a fixed steady state. The damping operator M is monotone: the inner product of a state difference with the matching damping difference is nonnegative, so damping never feeds energy into a deviation.

**Problem.** Take the paper’s system with maximally monotone damping (its graph has no proper monotone extension), an absolutely continuous input with integrable derivative, and a steady state with its input and output. At almost every time, the shifted energy grows no faster than the inner product of the input and output deviations.

**How the definition helps.** Measured from the same steady state, the damping term becomes a difference with a known sign (our own). Subtracting the steady equation and pairing with the state difference leaves only the input and output deviations as the supply (our own). The work lies in proving solutions regular enough for this calculation (our own).

**Paper or page:** [Port-Hamiltonian structures in infinite-dimensional optimal control: Primal-Dual gradient method and control-by-interconnection](https://arxiv.org/abs/2406.01087v2). It says: “the shifted power balance and shifted passivity equality”

**Sources:**

- [Port-Hamiltonian structures in infinite-dimensional optimal control: Primal-Dual gradient method and control-by-interconnection](https://arxiv.org/abs/2406.01087v2)

### Eigenvalue cycles determine the critical erasure probability of intermittent Kalman filters

**Remember:** Eigenvalues whose ratio is a root of unity echo each other periodically.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 93E11 (Filtering in stochastic control theory), 93E15, 93B60. arXiv math.OC, cs.SY. Level 4: research.

**Definition.** An eigenvalue cycle is a group of nonzero eigenvalues whose ratios are roots of unity, so their powers coincide again and again. Its period is the least n ≥ 1 for which all its eigenvalues have the same nth power (our own).

**Problem.** Assume the paper’s intermittent Kalman model with independent erasures of probability pₑ, (A,B) controllable and (A,C) observable, and no nontrivial cycles; then mean-square error stays bounded exactly when pₑ &lt; 1/\|λ\|² for an eigenvalue λ of largest modulus. With cycles, the threshold also depends on their periods and the fewest erased residue classes that destroy observability within each cycle.

**How the definition helps.** At the times where a cycle’s powers coincide, a sensor may not tell its modes apart, so losing the other times hides them (our own). For example, modes with eigenvalues a and −a are seen as aⁿ(x₁ + x₂) at every even time n, so losing the odd samples destroys observability (our own). Proving the sharp threshold for general cycles is the hard part of the paper.

**Paper or page:** [Intermittent Kalman Filtering: Eigenvalue Cycles and Nonuniform Sampling](https://arxiv.org/abs/1308.6107v1), [Intermittent Kalman Filtering: Eigenvalue Cycles and Nonuniform Sampling](https://arxiv.org/abs/1308.6107v1), [Intermittent Kalman Filtering: Eigenvalue Cycles and Nonuniform Sampling](https://arxiv.org/abs/1308.6107v1). It says: “We introduce a new concept of eigenvalue cycles which captures periodicity of systems, and characterize the critical erasure probability based on this.”

**Sources:**

- [Se Yong Park, Anant Sahai, Intermittent Kalman Filtering: Eigenvalue Cycles and Nonuniform Sampling, arXiv:1308.6107v1 (2013)](https://arxiv.org/abs/1308.6107v1)

### Reachable support excludes phantom measures

**Remember:** Only count flow at states some rule can actually reach.

*Rules out counterexamples. Confidence: medium.* MSC 93E20 (Optimal stochastic control). arXiv math.OC, cs.SY. Level 4: research.

**Definition.** In a finite decision process that stops on reaching a target, a nonterminal state is reachable if some rule visits it with positive probability before stopping, from the fixed initial distribution. A measure on state and action pairs has reachable support if it vanishes at every unreachable state.

**Problem.** Assume finitely many actions and finite expected stopping time under every rule. A finite nonnegative measure on nonterminal state and action pairs is the occupation measure of some rule, counting expected visits before stopping, exactly when it satisfies flow balance and has reachable support (our own).

**How the definition helps.** Flow balance alone allows a phantom: steady flow around a self-loop at an unreachable state (our own). The decomposition theorem splits balanced flow into actual visits and a preserved flow, and positive preserved flow gives a closed nonterminal class under its rule (our own). That class is reachable, so entering it and following its rule would contradict finite expected stopping time (our own).

**Paper or page:** [Absorbing Markov Decision Processes](https://arxiv.org/abs/2309.07059v2). It says: “i.e., there are no phantom measures.”

**Sources:**

- [Absorbing Markov Decision Processes](https://arxiv.org/abs/2309.07059v2)
