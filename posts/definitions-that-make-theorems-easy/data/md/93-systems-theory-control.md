### Transposition swaps controllability and observability

**Remember:** Transpose the dynamics and swap the input and output.

*True by definition.* MSC 93B05 (Controllability), 93B07. arXiv eess.SY, math.OC. Level 2: later undergraduate.

**Definition.** Consider a continuous-time linear system with constant real matrices A, B and C for dynamics, input and output. Its dual uses Aᵀ for dynamics, Cᵀ for input and Bᵀ for output.

**Problem.** A finite-dimensional continuous-time linear system can reach every state from rest exactly when its dual can distinguish all initial states from their outputs.

**How the definition helps.** The matrix testing observability in the dual is the transpose of the matrix testing reachability in the original system. Transposition preserves rank. The work lies in proving that these ranks characterize which states inputs can reach and which states outputs can distinguish (our own).

**nLab:** [controllability and observability](https://ncatlab.org/nlab/show/controllability+and+observability). It says: “Now controllability of the original system corresponds to observability of the dual, and vice versa.”

**Sources:** none listed. No primary source with a working link was found.

### Detectability permits a convergent observer

**Remember:** An invisible error is harmless only if it dies out.

*Rules out counterexamples.* MSC 93B07 (Observability), 93B53. arXiv eess.SY, cs.SY. Level 3: graduate.

**Definition.** Consider a finite-dimensional continuous-time linear system with constant coefficients. It is detectable if every zero-input motion with identically zero output tends to zero.

**Problem.** A linear observer estimates the state from the known input and measured output. An observer whose estimation error decays exponentially for every initial error exists exactly when the system is detectable.

**How the definition helps.** An invisible initial error produces no output correction, so detectability requires precisely those errors to decay on their own (our own). For example, ẋ = x with zero output hides a growing error (our own). Sufficiency uses a separate theorem to choose the observer correction on the part that outputs can distinguish (our own).

**Wikipedia:** [Observability](https://en.wikipedia.org/wiki/Observability). It says: “A system is detectable if all the unobservable states are stable.”

**Sources:** none listed. No primary source with a working link was found.

### Minimality rules out hidden poles

**Remember:** In a minimal model, no internal mode can hide from the transfer function.

*Rules out counterexamples.* MSC 93B20 (Minimal systems representations), 93D25. arXiv eess.SY, cs.SY. Level 3: graduate.

**Definition.** A realization writes a transfer function, which describes input-to-output behavior, as equations for an internal state. It is minimal if its input can reach every state and its output can distinguish all starting states.

**Problem.** Consider a minimal finite-dimensional continuous-time linear realization with constant coefficients. Bounded inputs give bounded outputs from rest exactly when every zero-input state tends exponentially to zero.

**How the definition helps.** Minimality makes every internal eigenvalue appear as a transfer-function pole, a point where the function is singular (our own). The realization theorem proves this correspondence (our own). Bounded inputs give bounded outputs exactly when every pole has negative real part. Without minimality, ẋ = x and output equal to input give a bounded response from rest while hiding a growing state (our own).

**Wikipedia:** [Minimal realization](https://en.wikipedia.org/wiki/Minimal_realization), [BIBO stability](https://en.wikipedia.org/wiki/BIBO_stability). It says: “model that is both controllable and observable and has the same input-output behaviour as the transfer function”

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

### Occupation measures satisfy flow balance

**Remember:** Every visit either starts the run or comes from a previous visit.

*True by definition.* MSC 93E20 (Optimal stochastic control). arXiv math.OC, cs.SY. Level 3: graduate.

**Definition.** A Markov decision process chooses its next state at random using the current state and action. Stop when it reaches a target. Its occupation measure counts expected visits to sets of state and action pairs before stopping.

**Problem.** Suppose every rule has finite expected stopping time from the initial distribution. For any set of nonterminal states, expected visits equal the probability of starting there plus expected later arrivals.

**How the definition helps.** Counting visits instead of recording their order splits the count into the initial visit and all later arrivals (our own). Weight each transition probability into the set by the occupation measure to count later arrivals (our own). Proving that a proposed measure comes from a rule requires further conditions (our own).

**Paper or page:** [Absorbing Markov Decision Processes](https://arxiv.org/abs/2309.07059v2). It says: “satisfies the characteristic equations.”

**Sources:**

- [Absorbing Markov Decision Processes](https://arxiv.org/abs/2309.07059v2)

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
