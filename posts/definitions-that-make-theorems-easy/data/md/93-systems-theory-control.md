### Input-to-state stability makes cascades of stable systems stable

**Remember:** Bounded inputs give bounded states, so stable pieces chain together.

*Rules out counterexamples.* MSC 93D25 (Input-output approaches in control theory), 93D20, 93A13. arXiv math.OC, eess.SY. Level 3: graduate.

**Definition.** A control system x′ = f(x, u) is input-to-state stable if there are comparison functions β and γ with this property. For all starts, inputs and times, \|x(t)\| ≤ β(\|x₀\|, t) + γ(‖u‖∞). Here β(r, t) grows in r and tends to 0 in t, and γ grows from γ(0) = 0.

**Problem.** If each subsystem is stable, is a chain of them stable, where each one drives the next? Sontag's theorem says yes for input-to-state stable systems. For systems that are only globally asymptotically stable with zero input, the answer is no.

**How the definition helps.** The estimate bounds the state by the size of the input. So the state of one stable system is a bounded input to the next, and the bounds compose (our own). Mere stability with zero input says nothing about what a nonzero input does. The page's counterexample is x′ = −x + yx², y′ = −y. Each part is stable alone, but for large starts x reaches infinity in finite time. Here the x-part is not input-to-state stable with y as its input, so the cascade theorem does not apply (our own). The hard parts are the Lyapunov characterization by Sontag and Wang, and small-gain theorems for feedback loops.

**Wikipedia:** [Input-to-state stability](https://en.wikipedia.org/wiki/Input-to-state_stability). It says: “In contrast to cascades of ISS systems, the cascade interconnection of 0-GAS systems is in general not 0-GAS.”

**Sources:**

- [E. D. Sontag, Smooth stabilization implies coprime factorization, IEEE Transactions on Automatic Control 34 (1989) 435–443](https://doi.org/10.1109/9.28018)

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

### Eigenvalue cycles determine the critical erasure probability of intermittent Kalman filters

**Remember:** The same sampling pattern can repeatedly hide the same group of modes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 93E11 (Filtering in stochastic control theory), 93E15, 93B60. arXiv math.OC, cs.SY. Level 4: research.

**Definition.** Eigenvalues λᵢ ≠ λⱼ of the state matrix form an eigenvalue cycle when (λᵢ/λⱼ)ⁿ = 1 for some positive integer n. So their ratio is a root of unity. The period of a cycle is the least such n, in our own wording.

**Problem.** A Kalman filter loses each observation independently with probability pₑ, and (A,B) is controllable and (A,C) observable. Without eigenvalue cycles, the error stays mean-square bounded exactly when pₑ &lt; 1/\|λ\|², for λ the largest eigenvalue in size. With cycles, the threshold also depends on each cycle's period and on a number the paper computes from the cycle.

**How the definition helps.** Cycles are the eigenvalue groups that can keep giving indistinguishable observations at the same recurring sample positions, in our own explanation. For example, a sensor that sums modes with eigenvalues a and −a sees aⁿ(x₁ + x₂) at every even time n, by our own example. If the odd samples are lost, the two modes cannot be separated. Proving the sharp threshold for general cycles is the hard part of the paper.

**Paper or page:** [Intermittent Kalman Filtering: Eigenvalue Cycles and Nonuniform Sampling](https://arxiv.org/abs/1308.6107v1), [Intermittent Kalman Filtering: Eigenvalue Cycles and Nonuniform Sampling](https://arxiv.org/abs/1308.6107v1), [Intermittent Kalman Filtering: Eigenvalue Cycles and Nonuniform Sampling](https://arxiv.org/abs/1308.6107v1). It says: “We introduce a new concept of eigenvalue cycles which captures periodicity of systems, and characterize the critical erasure probability based on this.”

**Sources:**

- [Se Yong Park, Anant Sahai, Intermittent Kalman Filtering: Eigenvalue Cycles and Nonuniform Sampling, arXiv:1308.6107v1 (2013)](https://arxiv.org/abs/1308.6107v1)
