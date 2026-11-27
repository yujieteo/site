### Transposition swaps controllability and observability

**Remember:** Transpose the dynamics and swap the input and output.

*True by definition.* MSC 93B05 (Controllability), 93B07. arXiv eess.SY, math.OC. Level 2: later undergraduate.

**Definition.** Consider a continuous-time linear system with constant real matrices A, B and C for dynamics, input and output. Its dual uses Aᵀ for dynamics, Cᵀ for input and Bᵀ for output.

**Problem.** A finite-dimensional continuous-time linear system can reach every state from rest exactly when its dual can distinguish all initial states from their outputs.

**How the definition helps.** The matrix testing observability in the dual is the transpose of the matrix testing reachability in the original system. Transposition preserves rank. The work lies in proving that these ranks characterize which states inputs can reach and which states outputs can distinguish (our own).

**nLab:** [controllability and observability](https://ncatlab.org/nlab/show/controllability+and+observability). It says: “Now controllability of the original system corresponds to observability of the dual, and vice versa.”

**Sources:** none listed. No primary source with a working link was found.

### Gramians detect unobservable states

**Remember:** Zero output energy means the state left no trace.

*True by definition.* MSC 93B07 (Observability), 93C05. arXiv math.OC, eess.SY. Level 2: later undergraduate.

**Definition.** Let O send an initial state to its continuous output on a fixed interval of positive length, with zero input. The observability Gramian is W = O\*O, where O\* is the adjoint for the integrated output inner product. Thus xᵀWx is the integral of the squared output norm.

**Problem.** For a real finite-dimensional linear system, the observed output determines the initial state exactly when W is nonsingular.

**How the definition helps.** The squared output norm gives the Gramian and the observation map the same kernel (our own). Continuity makes zero integrated energy equivalent to zero output throughout the interval (our own). This replaces comparing entire output curves with checking a matrix (our own). Computing the observation map still requires solving the state equations (our own).

**Paper or page:** [Controllability and observability of tempered fractional differential systems](https://arxiv.org/abs/2412.05349v1). It says: “if, and only if, the observability Gramian matrix”

**Sources:**

- [Controllability and observability of tempered fractional differential systems](https://arxiv.org/abs/2412.05349v1)

### Error coordinates separate stability tests

**Remember:** Track the error and the two designs separate.

*True by definition.* MSC 93B52 (Feedback control), 93B53. arXiv eess.SY, cs.SY. Level 2: later undergraduate.

**Definition.** An observer estimates the state from the measured output and the known input. Write the combined equations using the true state and its estimation error in place of the true and estimated states.

**Problem.** Consider x′ = Ax + Bu with output Cx. Use feedback u = −Kx̂ and an observer that corrects its model prediction by L(Cx − Cx̂). The combined eigenvalues are those of A − BK and A − LC, counted with multiplicity.

**How the definition helps.** Subtracting the observer equation from the state equation isolates the error e = x − x̂ (our own). Its equation is e′ = (A − LC)e. The combined matrix is triangular in blocks, so its eigenvalues come from the diagonal blocks. Finding gains K and L that stabilize those blocks remains a separate design problem (our own).

**nLab:** [controllability and observability](https://ncatlab.org/nlab/show/controllability+and+observability). It says: “the design of a feedback controller and of a state observer are mutually independent.”

**Wikipedia:** [Separation principle](https://en.wikipedia.org/wiki/Separation_principle). It says: “the eigenvalues are just those of A − BK together with those of A − LC.”

**Sources:** none listed. No primary source with a working link was found.

### Strict properness prevents algebraic loops

**Remember:** One missing direct term breaks the instantaneous loop.

*Rules out counterexamples.* MSC 93B52 (Feedback control), 93C05. arXiv eess.SY, cs.SY. Level 2: later undergraduate.

**Definition.** A transfer function describes how a linear system converts input to output with zero initial state. A rational transfer function is proper when its numerator degree does not exceed its denominator degree. Strict properness requires a smaller numerator degree, or an identically zero transfer function. Its output then has no direct dependence on the current input.

**Problem.** Connect two proper finite-dimensional scalar linear time-invariant systems in feedback. If either transfer function is strictly proper, the current states and external inputs uniquely determine both current inputs.

**How the definition helps.** The strictly proper system supplies its output from its state, which lets us evaluate the other system next (our own). With direct dependence on both sides, the equations can fail (our own). Negative feedback around a static gain of −1 gives y = −(r − y), impossible for a nonzero reference r (our own). The direct gain equals the high-frequency limit of the transfer function (our own).

**Wikipedia:** [Proper transfer function](https://en.wikipedia.org/wiki/Proper_transfer_function). It says: “A strictly proper transfer function will approach zero as the frequency approaches infinity”

**Sources:** none listed. No primary source with a working link was found.

### The bilinear transform preserves stability

**Remember:** The left half-plane goes inside the unit circle.

*Rules out counterexamples.* MSC 93C57 (Sampled-data control/observation systems), 93C80. arXiv eess.SY, cs.SY. Level 2: later undergraduate.

**Definition.** For step size h &gt; 0, the bilinear transform replaces a continuous-time rate s by the discrete multiplier z = (1 + hs/2)/(1 − hs/2). Forward Euler uses z = 1 + hs instead.

**Problem.** If every eigenvalue of a state matrix has negative real part, every transformed eigenvalue has magnitude below one for every positive step size.

**How the definition helps.** A negative real part makes \|1 + hs/2\| smaller than \|1 − hs/2\|, so their ratio has magnitude below one (our own). The matrix result uses the fact that a rational function maps each eigenvalue to its value there (our own). Forward Euler instead sends the stable rate −3 to the unstable multiplier −2 at step size 1 (our own).

**Wikipedia:** [Bilinear transform](https://en.wikipedia.org/wiki/Bilinear_transform). It says: “The bilinear transform maps the left half of the complex s-plane to the interior of the unit circle in the z-plane.”

**Sources:** none listed. No primary source with a working link was found.

### Minimum-phase systems compose reversibly

**Remember:** Undo the last system first.

*Rules out counterexamples.* MSC 93C80 (Frequency-response methods in control theory), 93D25. arXiv eess.SY, cs.SY. Level 2: later undergraduate.

**Definition.** A discrete-time linear time-invariant system is minimum-phase if both it and its inverse are causal and stable. Causal systems use only current and past inputs. Stability here means every bounded input gives a bounded output.

**Problem.** A series connection of discrete-time minimum-phase systems is minimum-phase. Its inverse is the series of their inverses in reverse order.

**How the definition helps.** Each inverse already preserves causality and boundedness, so applying them in reverse order gives a causal, stable inverse (our own). The stable transfer function (z − 2)/(z − ½) has a zero at 2 (our own). Its causal inverse has a pole outside the unit circle, so bounded inputs can produce unbounded outputs (our own).

**Wikipedia:** [Minimum phase](https://en.wikipedia.org/wiki/Minimum_phase). It says: “a linear, time-invariant system is said to be minimum-phase if the system and its inverse are causal and stable.”

**Sources:** none listed. No primary source with a working link was found.

### Independent readings add information

**Remember:** Multiply Gaussian likelihoods by adding their information.

*True by definition.* MSC 93E11 (Filtering in stochastic control theory), 93E10. arXiv eess.SY, cs.SY. Level 2: later undergraduate.

**Definition.** For a Gaussian state, the precision matrix is the inverse covariance. The information vector is the precision matrix times the mean. Together they specify the quadratic and linear terms of the log density.

**Problem.** Start with a Gaussian prior and take linear measurements with centered Gaussian errors independent of each other and the state. Assume the prior and error covariances are nonsingular. Each measurement adds its own contribution to the precision matrix and information vector.

**How the definition helps.** The information form stores coefficients of the log density, so multiplying independent likelihoods adds their coefficients (our own). For a measurement y = Hx plus noise with covariance R, the contributions are HᵀR⁻¹H and HᵀR⁻¹y (our own). The work goes into converting the result back to a mean and covariance and propagating it through time (our own).

**Wikipedia:** [Kalman filter](https://en.wikipedia.org/wiki/Kalman_filter). It says: “measurements can be filtered at each time step simply by summing their information matrices and vectors.”

**Sources:** none listed. No primary source with a working link was found.

### Chain-reachable sets are closed

**Remember:** Leave room for a last small jump, and limits stay reachable.

*True by definition.* MSC 93B03 (Attainable sets, reachability), 93B24. arXiv math.OC. Level 3: graduate.

**Definition.** A chain follows controlled trajectories for a prescribed minimum time per segment. It allows a small jump after each segment. A target is chain reachable if such chains reach it for every positive jump tolerance and minimum time.

**Problem.** The set of chain-reachable states from any fixed state is closed.

**How the definition helps.** The last jump lets a chain reach a limit point directly (our own). Choose a reachable endpoint within half the allowed tolerance, then reach it with jumps smaller than half that tolerance (our own). Replacing the endpoint preserves the jump bound by the triangle inequality (our own). Exact reachability lacks this freedom (our own). Starting at 1, x′ = −x approaches zero without reaching it (our own).

**Paper or page:** [Chain controllability of linear control systems](https://arxiv.org/abs/2312.14595v1). It says: “The chain controllable sets Cᶜ(x) and the chain reachable sets Rᶜ(x) are closed.”

**Sources:**

- [Chain controllability of linear control systems](https://arxiv.org/abs/2312.14595v1)

### Detectability permits a convergent observer

**Remember:** An invisible error is harmless only if it dies out.

*Rules out counterexamples.* MSC 93B07 (Observability), 93B53. arXiv eess.SY, cs.SY. Level 3: graduate.

**Definition.** Consider a finite-dimensional continuous-time linear system with constant coefficients. It is detectable if every zero-input motion with identically zero output tends to zero.

**Problem.** A linear observer estimates the state from the known input and measured output. An observer whose estimation error decays exponentially for every initial error exists exactly when the system is detectable.

**How the definition helps.** An invisible initial error produces no output correction, so detectability requires precisely those errors to decay on their own (our own). For example, ẋ = x with zero output hides a growing error (our own). Sufficiency uses a separate theorem to choose the observer correction on the part that outputs can distinguish (our own).

**Wikipedia:** [Observability](https://en.wikipedia.org/wiki/Observability). It says: “A system is detectable if all the unobservable states are stable.”

**Sources:** none listed. No primary source with a working link was found.

### Flat outputs generate trajectories

**Remember:** Choose a flat output path and differentiate to recover the motion.

*True by definition.* MSC 93B18 (Linearizations), 93C10. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** A flat output is a signal computed locally from the state, input, and finitely many input derivatives. One may choose the signal freely within its domain. The signal and finitely many of its derivatives then determine the state and input.

**Problem.** A sufficiently smooth choice of flat output gives a system trajectory. Its derivatives must stay in the domain of the reconstruction formulas.

**How the definition helps.** The reconstruction formulas produce a solution for every sufficiently smooth local choice of flat output (our own). Ordinary measured outputs need not determine the motion this way (our own). Finding the formulas and their domain replaces integrating the equations for each new trajectory (our own). The bicycle example checks endpoint and safety constraints separately.

**Paper or page:** [Optimal Control for Kinematic Bicycle Model with Continuous-time Safety Guarantees: A Sequential Second-order Cone Programming Approach](https://arxiv.org/abs/2204.08980v1). It says: “obtained by passing the parameterized flat outputs”

**Sources:**

- [M. Fliess, J. Lévine, P. Martin and P. Rouchon, Flatness and defect of non-linear systems: introductory theory and examples (1995)](https://doi.org/10.1080/00207179508921959)

### Hankel rank gives minimal dimension

**Remember:** Count the independent futures that past inputs can produce.

*Makes the theorem clean to state or prove.* MSC 93B20 (Minimal systems representations), 93B15. arXiv eess.SY, cs.SY. Level 3: graduate.

**Definition.** Start a discrete-time linear system at zero and apply a finite input history. The Hankel map sends that history to all subsequent outputs when every subsequent input is zero. Its rank counts the independent future output sequences the past can produce.

**Problem.** For a finite-dimensional time-invariant linear system, the Hankel rank equals the smallest state dimension that reproduces its input-output behavior.

**How the definition helps.** The map passes through the present state, so its rank is at most the state dimension (our own). Its image can serve as the state space by shifting future outputs and adding the response to the newest input (our own). Any direct input-to-output term stays unchanged (our own). The work is to prove that these updates preserve the image and reproduce the input-output behavior (our own).

**nLab:** [controllability and observability](https://ncatlab.org/nlab/show/controllability+and+observability). It says: “a system may be seen as giving rise to a map from an initial algebra to a terminal coalgebra which factors through it”

**Sources:**

- [B. L. Ho and R. E. Kalman, Effective construction of linear state-variable models from input/output functions (1966)](https://doi.org/10.1524/auto.1966.14.112.545)

### Minimality rules out hidden poles

**Remember:** In a minimal model, no internal mode can hide from the transfer function.

*Rules out counterexamples.* MSC 93B20 (Minimal systems representations), 93D25. arXiv eess.SY, cs.SY. Level 3: graduate.

**Definition.** A realization writes a transfer function, which describes input-to-output behavior, as equations for an internal state. It is minimal if its input can reach every state and its output can distinguish all starting states.

**Problem.** Consider a minimal finite-dimensional continuous-time linear realization with constant coefficients. Bounded inputs give bounded outputs from rest exactly when every zero-input state tends exponentially to zero.

**How the definition helps.** Minimality makes every internal eigenvalue appear as a transfer-function pole, a point where the function is singular (our own). The realization theorem proves this correspondence (our own). Bounded inputs give bounded outputs exactly when every pole has negative real part. Without minimality, ẋ = x and output equal to input give a bounded response from rest while hiding a growing state (our own).

**Wikipedia:** [Minimal realization](https://en.wikipedia.org/wiki/Minimal_realization), [BIBO stability](https://en.wikipedia.org/wiki/BIBO_stability). It says: “model that is both controllable and observable and has the same input-output behaviour as the transfer function”

**Sources:** none listed. No primary source with a working link was found.

### Tangent cones reject false tangency

**Remember:** Test the set’s directions, not just its equation.

*Rules out counterexamples.* MSC 93B27 (Geometric methods), 93C10. arXiv math.OC, eess.SY. Level 3: graduate.

**Definition.** At a point x of a closed set, take sequences of points y in the set tending to x. Divide each displacement y − x by a positive time step tending to zero. The tangent cone contains exactly the limits of these quotients.

**Problem.** Assume the vector field is continuous and gives unique global solutions. Trajectories stay in a closed set exactly when the field lies in its tangent cone at each boundary point.

**How the definition helps.** The cone measures feasible first-order directions even when the equation for the boundary is flat (our own). For the set x³ ≤ 0, the derivative test at zero accepts x′ = 1, but the tangent cone rejects it (our own). The work goes into the tangency theorem, which turns local feasible directions and uniqueness into entire trajectories that stay inside (our own).

**Paper or page:** [Safe Control Synthesis via Input Constrained Control Barrier Functions](https://arxiv.org/abs/2104.01704v1). It says: “a closed set S ⊆ X is forward invariant for the system, if and only if”

**Sources:** none listed. No primary source with a working link was found.

### Rich input windows span trajectories

**Remember:** Enough independent windows turn one experiment into many trajectories.

*Makes the theorem clean to state or prove.* MSC 93B30 (System identification), 93C55. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** An input record is persistently exciting of order q if its overlapping windows of q consecutive inputs span all input sequences of length q. Distinct input values alone do not guarantee this property.

**Problem.** Consider a discrete-time linear time-invariant system with n states that can be steered between any two states. Record its states and inputs without noise, using an input persistently exciting of order L + n. The paired state and input windows span exactly the trajectories of length L.

**How the definition helps.** The definition turns a rich experiment into a rank condition on input windows (our own). Linear combinations of matching input and state windows are trajectories by linearity (our own). The work is the fundamental lemma, which uses the extra n steps and controllability to show that no trajectory directions are missing (our own).

**Paper or page:** [Fast and memory-efficient optimization for large-scale data-driven predictive control](https://arxiv.org/abs/2402.13090v1). It says: “is persistently exciting of order L + n.”

**Sources:**

- [J. C. Willems, P. Rapisarda, I. Markovsky and B. L. M. De Moor, A note on persistency of excitation (2005)](https://doi.org/10.1016/j.sysconle.2004.09.003)

### Invariant endpoints preserve plan feasibility

**Remember:** Shift the old plan and append one legal move.

*True by definition.* MSC 93B45 (Model predictive control), 93C55. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** An invariant terminal set is a set of allowed endpoints with a feasible feedback move that keeps each endpoint in the set. A predictive controller requires its finite plan to end there. A plan with no such endpoint condition may end at a state with no legal next move.

**Problem.** Suppose a deterministic discrete-time model is exact and constraints stay fixed. After applying the first move of a feasible plan, another plan of the same length exists if the terminal set is invariant.

**How the definition helps.** The endpoint condition supplies one legal move to append after shifting the plan (our own). Exact prediction lets the remaining moves start from the actual next state (our own). Finding endpoints that always admit another legal move is the design work (our own). The cited paper proves feasibility for its controller with equilibrium endpoints.

**Wikipedia:** [Model predictive control](https://en.wikipedia.org/wiki/Model_predictive_control). It says: “Only the first step of the control strategy is implemented”

**Paper or page:** [On Model Predictive Funnel Control with Equilibrium Endpoint Constraints](https://arxiv.org/abs/2505.20090v1). It says: “implies its solvability at the next time step”

**Sources:**

- [On Model Predictive Funnel Control with Equilibrium Endpoint Constraints](https://arxiv.org/abs/2505.20090v1)

### Invariant error tubes protect constraints

**Remember:** Check every point in the error band.

*True by definition.* MSC 93B45 (Model predictive control), 93D09. arXiv math.OC, eess.SY. Level 3: graduate.

**Definition.** A tracking policy chooses inputs to keep the actual state near a planned state. An error set is invariant if this policy keeps the next tracking error inside whenever the current error belongs, for every allowed disturbance. Adding all errors in the set to each planned state gives a tube.

**Problem.** If the initial error belongs to the invariant set, every actual state lies in its corresponding tube section. If every section lies inside the allowed state region, every actual state meets the constraints.

**How the definition helps.** Invariance supplies exactly the induction step from one tube section to the next (our own). Checking the planned states alone would miss errors caused by disturbances (our own). The work lies in constructing the tracking policy and its invariant error set (our own).

**Paper or page:** [State-Dependent Dynamic Tube MPC: A Novel Tube MPC Method with a Fuzzy Model of Disturbances](https://arxiv.org/abs/2310.19997v1). It says: “we need to constrain both the nominal state and the potential errors”

**Sources:**

- [State-Dependent Dynamic Tube MPC: A Novel Tube MPC Method with a Fuzzy Model of Disturbances](https://arxiv.org/abs/2310.19997v1)

### Stabilizing Riccati solutions are unique

**Remember:** The right Riccati solution must stabilize the system.

*Rules out counterexamples.* MSC 93B52 (Feedback control), 93C05. arXiv math.OC, eess.SY. Level 3: graduate.

**Definition.** For x′ = Ax + Bu, let Q and R be symmetric state and input cost matrices, with R positive definite. Write G = BR⁻¹Bᵀ. Consider symmetric solutions P of AᵀP + PA − PGP + Q = 0. A solution is stabilizing when A − GP has eigenvalues with negative real parts.

**Problem.** At most one symmetric solution of this equation is stabilizing.

**How the definition helps.** The stability requirement makes both matrix exponentials in the difference argument decay (our own). Let P and S be stabilizing solutions and write D = P − S (our own). Set U = A − GP and W = A − GS (our own). Subtraction gives UᵀD + DW = 0 (our own). Thus exp(tUᵀ)D exp(tW) is constant, yet tends to zero, so D = 0 (our own). For x′ = u with unit cost weights, both 1 and −1 solve the equation, but only 1 stabilizes (our own).

**Wikipedia:** [Algebraic Riccati equation](https://en.wikipedia.org/wiki/Algebraic_Riccati_equation). It says: “Though generally this system can have many solutions, it is usually specified that we want to obtain the unique stabilizing solution, if such a solution exists.”

**Sources:** none listed. No primary source with a working link was found.

### Weak equations give closed trajectory sets

**Remember:** Put the derivatives on the test functions before taking the limit.

*True by definition.* MSC 93C05 (Linear systems in control theory). arXiv math.OC, eess.SY. Level 3: graduate.

**Definition.** Consider homogeneous linear differential equations with constant coefficients on a time interval. Define a weak solution by multiplying by smooth test functions supported inside the interval and moving derivatives onto them by integration by parts. A square-integrable signal qualifies if all resulting integrals vanish.

**Problem.** The admissible signals for a linear constant-coefficient differential system form a closed subspace in the square-integrable norm.

**How the definition helps.** Moving the derivatives onto test functions makes each constraint continuous in the square-integrable signal norm (our own). Each constraint defines a closed linear subspace, and their intersection is closed (our own). For smooth signals, integration by parts and testing against every such function recover the original equations (our own).

**Paper or page:** [A continuous-time fundamental lemma and its application in data-driven optimal control](https://arxiv.org/abs/2407.12179v1). It says: “is closed in L²”

**Sources:**

- [A continuous-time fundamental lemma and its application in data-driven optimal control](https://arxiv.org/abs/2407.12179v1)

### Finite-step decrease permits temporary increases

**Remember:** Judge progress at the end of each block.

*Makes the theorem clean to state or prove.* MSC 93D15 (Stabilization of systems by feedback), 93B45. arXiv math.OC, eess.SY. Level 3: graduate.

**Definition.** Suppose a‖x‖² ≤ V(x) ≤ b‖x‖² for positive constants a and b. From each allowed state x, require a feasible block of m moves ending with V below or equal to qV(x). The block length m and factor q strictly between zero and one are fixed. Intermediate state norms must stay below c‖x‖ for a common constant c.

**Problem.** Under these bounds, every allowed initial state has a trajectory that obeys the constraints and converges to zero.

**How the definition helps.** A fixed block replaces the usual one-step decrease, so intermediate increases are allowed (our own). After k blocks the function is at most qᵏ times its initial value (our own). The lower quadratic bound forces the endpoint states toward zero, and the intermediate bound controls all other states (our own). Finding feasible blocks with these bounds remains the design work (our own).

**Paper or page:** [Flexible-step Model Predictive Control based on Generalized Lyapunov Functions](https://arxiv.org/abs/2211.02780v2). It says: “there exists a feasible control sequence such that limₖ→∞ xᵏ = 0.”

**Sources:**

- [Flexible-step Model Predictive Control based on Generalized Lyapunov Functions](https://arxiv.org/abs/2211.02780v2)

### Common Lyapunov functions handle switching

**Remember:** Switch the dynamics without switching what measures the state.

*True by definition.* MSC 93D23 (Exponential stability), 93C30. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** A mode is one of the linear equations that a switched system can follow. A common quadratic Lyapunov function is a single positive definite quadratic form whose derivative is negative away from zero in every mode. Separate tests may use different forms.

**Problem.** Consider finitely many continuous-time linear modes with continuous state and finitely many switches on each bounded interval. A common quadratic Lyapunov function guarantees constants C, a &gt; 0 with ‖x(t)‖ ≤ C exp(−at)‖x(0)‖ for every switching sequence.

**How the definition helps.** One form decreases throughout every interval and keeps the same value across each switch (our own). Finitely many strict quadratic bounds give one common exponential decay rate (our own). Finding a common form is the hard part (our own). The cited theorem supplies one when all mode matrices are individually stable and simultaneously upper triangular in some complex coordinates.

**Paper or page:** [Feedback rectifiable pairs and stabilization of switched linear systems](https://arxiv.org/abs/2308.10591v2). It says: “the origin of the switched system is asymptotically stable for arbitrary switching”

**Sources:** none listed. No primary source with a working link was found.

### Joint spectral radius detects switching instability

**Remember:** Stable pieces can make an unstable product.

*Rules out counterexamples.* MSC 93D23 (Exponential stability), 93C30. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** Take a finite, nonempty set of square matrices of the same size. For each k, find the largest operator norm among all products of k factors from the set. The joint spectral radius is the limit of the kth roots of these maxima.

**Problem.** Uniform exponential decay means every k-step product has norm at most Cqᵏ, with common constants C &gt; 0 and 0 &lt; q &lt; 1. This holds exactly when the joint spectral radius is below one.

**How the definition helps.** Mixed products enter the definition, so it detects growth that each matrix misses alone (our own). Take two 2 × 2 matrices with a single entry 2, in opposite off-diagonal positions (our own). Both square to zero, but their product has eigenvalue 4 (our own). Submultiplicativity gives the limit, and equivalence of norms makes it independent of the chosen norm (our own).

**Paper or page:** [Stability Analysis of Switched Linear Systems with Neural Lyapunov Functions](https://arxiv.org/abs/2312.08190v1), [Stability Analysis of Switched Linear Systems with Neural Lyapunov Functions](https://arxiv.org/abs/2312.08190v1). It says: “The corresponding switched linear system is stable if and only if ρ(Σ) &lt; 1.”

**Sources:** none listed. No primary source with a working link was found.

### Input-to-state stability makes cascades of stable systems stable

**Remember:** Bounded inputs give bounded states, so stable pieces chain together.

*Rules out counterexamples.* MSC 93D25 (Input-output approaches in control theory), 93D20, 93A13. arXiv math.OC, eess.SY. Level 3: graduate.

**Definition.** A control system x′ = f(x, u) is input-to-state stable if there are comparison functions β and γ with this property. For all starts, inputs and times, \|x(t)\| ≤ β(\|x₀\|, t) + γ(‖u‖∞). Here β(r, t) grows in r and tends to 0 in t, and γ grows from γ(0) = 0.

**Problem.** If each subsystem is stable, is a chain of them stable, where each one drives the next? Sontag's theorem says yes for input-to-state stable systems. For systems that are only globally asymptotically stable with zero input, the answer is no.

**How the definition helps.** The estimate bounds the state by the size of the input. So the state of one stable system is a bounded input to the next, and the bounds compose (our own). Mere stability with zero input says nothing about what a nonzero input does. The page's counterexample is x′ = −x + yx², y′ = −y. Each part is stable alone, but for large starts x reaches infinity in finite time. Here the x-part is not input-to-state stable with y as its input, so the cascade theorem does not apply (our own). The hard parts are the Lyapunov characterization by Sontag and Wang, and small-gain theorems for feedback loops.

**Wikipedia:** [Input-to-state stability](https://en.wikipedia.org/wiki/Input-to-state_stability). It says: “In contrast to cascades of ISS systems, the cascade interconnection of 0-GAS systems is in general not 0-GAS.”

**Sources:**

- [E. D. Sontag, Smooth stabilization implies coprime factorization, IEEE Transactions on Automatic Control 34 (1989) 435–443](https://doi.org/10.1109/9.28018)

### Scattering passivity survives feedback

**Remember:** An internal output costs one side exactly what it supplies the other.

*True by definition.* MSC 93D25 (Input-output approaches in control theory), 93B52. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** A discrete-time system is scattering passive if it has a nonnegative stored energy with the following bound. At each step its increase is at most the squared input norm minus the squared output norm.

**Problem.** Connect two such systems by taking each internal output as the other system’s internal input. Assume the connection defines a system for the allowed external inputs. The resulting system is scattering passive.

**How the definition helps.** Using squared input and output norms gives each internal signal opposite signs in the two energy bounds (our own). Adding those bounds cancels the internal terms and gives the required bound for the sum of the stored energies (our own). Finding the component energies and solving the feedback equations are separate tasks (our own).

**Paper or page:** [A geometric framework for discrete time port-Hamiltonian systems](https://arxiv.org/abs/2307.01351v2). It says: “is scattering passive.”

**Sources:**

- [A geometric framework for discrete time port-Hamiltonian systems](https://arxiv.org/abs/2307.01351v2)

### Strictly small loop gain ensures stability

**Remember:** Each trip around the loop must shrink the signal.

*Rules out counterexamples.* MSC 93D25 (Input-output approaches in control theory), 93B52. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** From rest, the gain bounds the output norm by a constant times the input norm on every finite time interval. Use the least such constant, with compatible signal norms at connected inputs and outputs.

**Problem.** Suppose two systems use only present and past inputs, and their feedback equations have a unique causal solution for every external input. If their gains multiply to less than one, the feedback system has finite gain.

**How the definition helps.** The strict bound leaves a positive coefficient when one substitutes the two signal bounds into each other (our own). Dividing by that coefficient bounds the response in terms of the external input (our own). At equality, positive feedback through a unit delay and an identity system accumulates a constant input without bound in the maximum norm (our own).

**Wikipedia:** [Small-gain theorem](https://en.wikipedia.org/wiki/Small-gain_theorem). It says: “the closed loop system is input-output stable if ‖S₁‖ · ‖S₂‖ &lt; 1 and both S₁ and S₂ are stable by themselves.”

**Sources:**

- [G. Zames, On the input-output stability of time-varying nonlinear feedback systems, Part one (1966)](https://doi.org/10.1109/TAC.1966.1098316)

### Maximum extraction gives minimum storage

**Remember:** Every storage account must cover the largest possible withdrawal.

*True by definition.* MSC 93D30 (Lyapunov and storage functions), 93D25. arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** A storage function assigns nonnegative energy to each time and state. Its increase along any trajectory cannot exceed the net energy supplied. Available storage is the supremum of net energy extractable from that time and state, including zero for an immediate stop.

**Problem.** For the passive linear systems with time-dependent coefficients in the paper, available storage is the smallest storage function at every time and state.

**How the definition helps.** Taking the supremum turns every storage bound on a single withdrawal into a bound on available storage (our own). To prove the storage inequality itself, append a nearly optimal withdrawal to any initial trajectory segment (our own).

**Paper or page:** [Dissipative energy functionals of passive linear time-varying systems](https://arxiv.org/abs/2412.16347v1). It says: “and is minimal among all storage functions”

**Sources:**

- [Dissipative energy functionals of passive linear time-varying systems](https://arxiv.org/abs/2412.16347v1)

### Innovations isolate measurement corrections

**Remember:** Correct the prediction with only the unexpected part of each reading.

*Makes the theorem clean to state or prove.* MSC 93E11 (Filtering in stochastic control theory). arXiv eess.SY, math.OC. Level 3: graduate.

**Definition.** The innovation is the observed signal minus the accumulated change predicted from earlier measurements. Its increment measures the new observation after subtracting its predicted drift, or expected rate of change.

**Problem.** Consider a continuous linear system with known initial state, deterministic coefficients, and additive Brownian noise with nonsingular observation noise covariance. The state estimate given the observations evolves by the predicted dynamics plus a gain times the innovation increment.

**How the definition helps.** Subtracting the predicted drift puts all measurement corrections into one term (our own). The filtering theorem determines the gain and proves that the update gives the conditional mean (our own).

**Paper or page:** [Stochastic Linear-Quadratic Optimal Control with Partial Observation](https://arxiv.org/abs/2202.13632v1). It says: “V(t) ≜ Y(t) − ∫₀ᵗ \[H(s)X̂(s) + h(s)\] ds”

**Sources:**

- [Stochastic Linear-Quadratic Optimal Control with Partial Observation](https://arxiv.org/abs/2202.13632v1)

### Occupation measures satisfy flow balance

**Remember:** Every visit either starts the run or comes from a previous visit.

*True by definition.* MSC 93E20 (Optimal stochastic control). arXiv math.OC, cs.SY. Level 3: graduate.

**Definition.** A Markov decision process chooses its next state at random using the current state and action. Stop when it reaches a target. Its occupation measure counts expected visits to sets of state and action pairs before stopping.

**Problem.** Suppose every rule has finite expected stopping time from the initial distribution. For any set of nonterminal states, expected visits equal the probability of starting there plus expected later arrivals.

**How the definition helps.** Counting visits instead of recording their order splits the count into the initial visit and all later arrivals (our own). Weight each transition probability into the set by the occupation measure to count later arrivals (our own). Proving that a proposed measure comes from a rule requires further conditions (our own).

**Paper or page:** [Absorbing Markov Decision Processes](https://arxiv.org/abs/2309.07059v2). It says: “satisfies the characteristic equations.”

**Sources:**

- [Absorbing Markov Decision Processes](https://arxiv.org/abs/2309.07059v2)

### Transient Gramians stay finite

**Remember:** Remove the steady part before measuring the transient.

*Rules out counterexamples.* MSC 93B11 (System structure simplification), 93C05. arXiv eess.SY, math.OC. Level 4: research.

**Definition.** Consider the linear system x′ = Ax + Bu, where x is the state and u is the input. Assume exp(tA) tends exponentially to a matrix J as time t increases. The usual controllability Gramian integrates F(t)F(t)ᵀ from zero to infinity with F(t) = exp(tA)B. The modified Gramian uses F(t) = exp(tA)B − JB instead.

**Problem.** The modified Gramian P is finite. It is the unique symmetric solution of AP + PAᵀ + (B − JB)(B − JB)ᵀ = 0 with JPJᵀ = 0.

**How the definition helps.** The subtraction leaves only exponentially decaying modes, so the integral converges (our own). The usual integral diverges for x′ = u because its state response to an impulse is constant (our own). The work goes into deriving the matrix equation and proving its uniqueness on the projected space (our own).

**Paper or page:** [Gramian-Based Model Reduction of Directed Networks](https://arxiv.org/abs/1901.01285v2). It says: “are the unique symmetric solutions of the following sets of linear matrix equations”

**Sources:**

- [Gramian-Based Model Reduction of Directed Networks](https://arxiv.org/abs/1901.01285v2)

### Strong chain control sets are preserved by topological conjugacy

**Remember:** Let the allowed jump size depend on where the jump occurs.

*Makes the theorem clean to state or prove.* MSC 93B24 (Topological methods), 93C10. arXiv math.OC, math.DS. Level 4: research.

**Definition.** A controlled chain follows pieces of controlled trajectories, each lasting at least a fixed time T, with small jumps between pieces. In a strong chain, a positive continuous function ε on the state space sets the allowed jump at each point. A strong chain control set is a maximal set in which strong chains join any two points. Each of its points also lies on a full controlled trajectory inside the set.

**Problem.** Suppose a homeomorphism H carries the trajectories of one control system onto those of another. Then E is a strong chain control set of the first system exactly when H(E) is one of the second.

**How the definition helps.** A jump allowance that varies continuously with position can absorb the uneven stretching of a homeomorphism. Lemma 1 of the paper supplies the needed matching allowance. For each continuous ε on the target, it gives a continuous δ on the source. A jump smaller than δ(x) then maps to a jump smaller than ε(H(x)). With one constant allowance this fails on noncompact spaces, because H need not be uniformly continuous, by our own account. The paper derives the result from a matching statement for flows (Theorem 1).

**Paper or page:** [Strong chain control sets and affine control systems](https://arxiv.org/abs/2407.18765v1), [Strong chain control sets and affine control systems](https://arxiv.org/abs/2407.18765v1). It says: “Then E⋆ is a strong chain control set in M if and only if H(E⋆) is a strong chain control set in N.”

**Sources:**

- [Fritz Colonius, Alexandre J. Santana, Strong chain control sets and affine control systems, J. Diff. Equations 424 (2025), pp. 760-791 \[arXiv:2407.18765v1\]](https://arxiv.org/abs/2407.18765v1)

### Gluing reset surfaces to their images makes hybrid jumps into ordinary crossings

**Remember:** Glue the reset to its starting surface and the jump becomes a crossing.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 93C30 (Control/observation systems governed by functional relations other than differential equations (such as hybrid and switching systems)), 34A36. arXiv math.DS, math.OC. Level 4: research.

**Definition.** A hybrid system follows differential equations between instantaneous resets. Glue each switching surface to its image under the reset. A hybrid Filippov solution is an absolutely continuous curve in the glued space. At a jump in velocity, it uses the closed convex hull of essential nearby velocities.

**Problem.** Under the paper's crossing assumptions, the hybrid Filippov solution is unique. The smooth approximations converge to it uniformly in time, with error at most a constant times the smoothing width. The distance uses the paper's glued spaces that include the smoothing strips.

**How the definition helps.** Treating a reset as a crossing lets the convergence theorem compare whole curves, including at switch times. In our own explanation, the glued space identifies the two states on either side of an instantaneous reset. The proof still needs uniqueness and an error bound for the smoothing.

**Paper or page:** [A New Solution Concept and Family of Relaxations for Hybrid Dynamical Systems](https://arxiv.org/abs/1803.08092v5), [A New Solution Concept and Family of Relaxations for Hybrid Dynamical Systems](https://arxiv.org/abs/1803.08092v5), [A New Solution Concept and Family of Relaxations for Hybrid Dynamical Systems](https://arxiv.org/abs/1803.08092v5). It says: “The resulting hybrid Filippov solutions greatly simplify the mathematical description of hybrid executions, providing a unifying solution concept with which to work.”

**Sources:**

- [Tyler Westenbroek, Humberto Gonzalez, S. Shankar Sastry, A New Solution Concept and Family of Relaxations for Hybrid Dynamical Systems, arXiv:1803.08092 (2018)](https://arxiv.org/abs/1803.08092v5)

### Inner safe sets respect braking limits

**Remember:** Check the allowed inputs before calling a state safe.

*Rules out counterexamples.* MSC 93D15 (Stabilization of systems by feedback), 93C10. arXiv eess.SY, math.OC. Level 4: research.

**Definition.** Start with a smooth function whose nonnegative values describe safe states. Given a test b, take the infimum of its time derivative over allowed controls and add α(b) to obtain the next test. Each α is an increasing function with α(0) = 0. The inner set contains states where every test, including the first, is nonnegative.

**Problem.** Assume smooth tests and well-defined closed-loop solutions. Suppose a Lipschitz feedback uses allowed inputs and enforces b′ ≥ −α(b) for the final test throughout the inner set. Under the paper’s barrier hypotheses, trajectories starting there stay there throughout their existence.

**How the definition helps.** Each nonnegative test supplies the derivative bound that protects the preceding test (our own). The final bound closes this chain (our own). A car at the position limit with outward velocity passes the position test but cannot stop instantly with bounded acceleration (our own). Constructing the tests and finding feedback that satisfies the final bound are the remaining tasks (our own).

**Paper or page:** [Safe Control Synthesis via Input Constrained Control Barrier Functions](https://arxiv.org/abs/2104.01704v1). It says: “is an ICCBF, then any Lipschitz continuous controller”

**Sources:**

- [Safe Control Synthesis via Input Constrained Control Barrier Functions](https://arxiv.org/abs/2104.01704v1)

### Measuring with a seminorm lets unstable modes be ignored in stability

**Remember:** Ignore nondecaying modes to measure exponential decay in the remaining directions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 93D23 (Exponential stability), 93D30. arXiv cs.LG, math.OC. Level 4: research.

**Definition.** A seminorm p acts like a norm but can be zero on nonzero vectors. Its kernel is the subspace where p is zero. Here the system xₖ₊₁ = Axₖ is stable in p if p(Aᵏx) ≤ cρᵏp(x) for some constants c and ρ &lt; 1.

**Problem.** The paper characterizes stability in a seminorm completely through a Lyapunov equation with positive semidefinite matrices. In our own formulation, stability holds exactly when A maps the kernel into itself and the kernel holds every generalized eigenvector for eigenvalues with \|λ\| ≥ 1.

**How the definition helps.** A seminorm ignores the directions in its kernel, so a system can be stable even when some modes never decay. Our own example is A = diag(2, ½) with p(x) = \|x₂\|. The first coordinate grows, but p(Aᵏx) = 2⁻ᵏp(x). Our own proof of the eigenvalue condition passes to the quotient by the kernel, where p becomes a norm. The paper uses seminorm stability for reinforcement learning algorithms in the average-reward setting.

**Paper or page:** [A Non-Asymptotic Theory of Seminorm Lyapunov Stability: From Deterministic to Stochastic Iterative Algorithms](https://arxiv.org/abs/2502.14208v1). It says: “In this special case, our results provide a complete characterization of system stability with respect to a seminorm, linking it to the solution of a Lyapunov equation in terms of positive semi-definite matrices.”

**Sources:**

- [Zaiwei Chen, Sheng Zhang, Zhe Zhang, Shaan Ul Haque, Siva Theja Maguluri, A Non-Asymptotic Theory of Seminorm Lyapunov Stability: From Deterministic to Stochastic Iterative Algorithms, arXiv:2502.14208v1 (2025)](https://arxiv.org/abs/2502.14208v1)

### Shifted energy gives shifted passivity

**Remember:** Subtract the steady equations before computing the power balance.

*True by definition.* MSC 93D30 (Lyapunov and storage functions), 93D25. arXiv math.OC, eess.SY. Level 4: research.

**Definition.** For the paper’s energy balance, M is the damping operator. Its monotonicity means that the inner product of a state difference with the corresponding damping difference is nonnegative. At a steady state, measure stored energy by half the squared distance from that state.

**Problem.** Consider the paper’s system with a maximally monotone damping operator, meaning its graph has no proper monotone extension. Take an absolutely continuous input with integrable derivative and a steady state with its steady input and output. At almost every time, the stored energy grows no faster than the inner product of the input and output deviations.

**How the definition helps.** Measuring every deviation from the same steady solution turns the damping term into a difference with a known sign (our own). Subtract the steady equation and take the inner product with the state difference (our own). The resulting energy identity leaves the input and output deviations as the supply term. The work lies in establishing solutions for which this calculation holds (our own).

**Paper or page:** [Port-Hamiltonian structures in infinite-dimensional optimal control: Primal-Dual gradient method and control-by-interconnection](https://arxiv.org/abs/2406.01087v2). It says: “the shifted power balance and shifted passivity equality”

**Sources:**

- [Port-Hamiltonian structures in infinite-dimensional optimal control: Primal-Dual gradient method and control-by-interconnection](https://arxiv.org/abs/2406.01087v2)

### Eigenvalue cycles determine the critical erasure probability of intermittent Kalman filters

**Remember:** The same sampling pattern can repeatedly hide the same group of modes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 93E11 (Filtering in stochastic control theory), 93E15, 93B60. arXiv math.OC, cs.SY. Level 4: research.

**Definition.** Eigenvalues λᵢ ≠ λⱼ of the state matrix form an eigenvalue cycle when (λᵢ/λⱼ)ⁿ = 1 for some positive integer n. So their ratio is a root of unity. The period of a cycle is the least such n, in our own wording.

**Problem.** A Kalman filter loses each observation independently with probability pₑ, and (A,B) is controllable and (A,C) observable. Without eigenvalue cycles, the error stays mean-square bounded exactly when pₑ &lt; 1/\|λ\|², for λ the largest eigenvalue in size. With cycles, the threshold also depends on each cycle's period and on a number the paper computes from the cycle.

**How the definition helps.** Cycles are the eigenvalue groups that can keep giving indistinguishable observations at the same recurring sample positions, in our own explanation. For example, a sensor that sums modes with eigenvalues a and −a sees aⁿ(x₁ + x₂) at every even time n, by our own example. If the odd samples are lost, the two modes cannot be separated. Proving the sharp threshold for general cycles is the hard part of the paper.

**Paper or page:** [Intermittent Kalman Filtering: Eigenvalue Cycles and Nonuniform Sampling](https://arxiv.org/abs/1308.6107v1), [Intermittent Kalman Filtering: Eigenvalue Cycles and Nonuniform Sampling](https://arxiv.org/abs/1308.6107v1), [Intermittent Kalman Filtering: Eigenvalue Cycles and Nonuniform Sampling](https://arxiv.org/abs/1308.6107v1). It says: “We introduce a new concept of eigenvalue cycles which captures periodicity of systems, and characterize the critical erasure probability based on this.”

**Sources:**

- [Se Yong Park, Anant Sahai, Intermittent Kalman Filtering: Eigenvalue Cycles and Nonuniform Sampling, arXiv:1308.6107v1 (2013)](https://arxiv.org/abs/1308.6107v1)

### Reachable support excludes phantom measures

**Remember:** Flow balance cannot tell whether a self-loop was ever visited.

*Rules out counterexamples. Confidence: medium.* MSC 93E20 (Optimal stochastic control). arXiv math.OC, cs.SY. Level 4: research.

**Definition.** Fix an initial distribution in a finite decision process that stops on reaching a target. An occupation measure counts expected visits to each state and action before stopping. A nonterminal state is reachable if some rule visits it with positive probability before stopping.

**Problem.** Assume finitely many actions and finite expected stopping time under every rule from the fixed initial distribution. A finite nonnegative measure on nonterminal state and action pairs records visits exactly when it satisfies flow balance and vanishes outside reachable states (our own).

**How the definition helps.** Requiring reachable support removes extra flow circulating on states that no rule can visit (our own). Flow balance equates visits at each state to initial mass plus incoming transitions (our own). The cited theorem decomposes a balanced measure into actual visits and a flow preserved by one transition. In a finite system, positive preserved flow gives a closed set where its rule stays forever (our own). If reachable, that set would let some rule avoid stopping with positive probability (our own).

**Paper or page:** [Absorbing Markov Decision Processes](https://arxiv.org/abs/2309.07059v2). It says: “i.e., there are no phantom measures.”

**Sources:**

- [Absorbing Markov Decision Processes](https://arxiv.org/abs/2309.07059v2)
