### Density operators give each part of an entangled system its own state

**Remember:** Tracing out a partner leaves a density operator, never a vector.

*Makes the theorem clean to state or prove.* MSC 81P16 (Quantum state spaces, operational and probabilistic concepts), 81S22, 81P40. arXiv quant-ph. Level 2: later undergraduate.

**Definition.** A density operator is a positive semidefinite self-adjoint operator with trace one on the Hilbert space of a system. A pure state given by a unit vector ψ corresponds to the projection onto ψ. The state of one part of a composite system is the partial trace of the whole system's density operator over the other part.

**Problem.** Every part of a composite quantum system has a state that gives the probabilities of all measurements on that part alone. With state vectors only, this fails: for an entangled pure state, no vector describes one part.

**How the definition helps.** The partial trace of a density operator is again a density operator, so the class is closed under 'look at one part only'. The page gives an example of two photons in the state (\|R,L⟩ + \|L,R⟩)/√2. Their joint state is pure, but each photon alone has the completely mixed state I/2, so no vector describes it. The Schrödinger–HJW theorem gives the converse: every density operator is the partial trace of some pure state, called a purification. What stays hard is that many different mixtures of pure states give one density operator. So a density operator does not record how the state was prepared.

**Wikipedia:** [Density matrix](https://en.wikipedia.org/wiki/Density_matrix). It says: “In contrast, the motivation that inspired Landau was the impossibility of describing a subsystem of a composite quantum system by a state vector.”

**Sources:**

- [J. von Neumann, Wahrscheinlichkeitstheoretischer Aufbau der Quantenmechanik, Göttinger Nachrichten (1927), 245–272](https://eudml.org/doc/59230)
- [U. Fano, Description of States in Quantum Mechanics by Density Matrix and Operator Techniques, Reviews of Modern Physics 29 (1957), 74–93](https://doi.org/10.1103/RevModPhys.29.74)

### Schmidt form matches reduced spectra

**Remember:** One amplitude list gives the nonzero eigenvalues on both sides.

*True by definition.* MSC 81P40 (Quantum coherence, entanglement, quantum correlations). arXiv quant-ph. Level 2: later undergraduate.

**Definition.** A pure state of two systems is a unit vector in their tensor product. In separate orthonormal bases, its coefficients form a matrix. The Schmidt form chooses the bases so only matching indices have nonzero coefficients. These coefficients are the nonnegative singular values of the matrix.

**Problem.** Ignoring either part of a finite-dimensional pure state gives a reduced state describing the other part. These two state matrices have the same nonzero eigenvalues, with multiplicities, and hence the same entropy.

**How the definition helps.** The paired orthonormal bases make both reduced matrices diagonal, with the same squared amplitudes. In our own explanation, an arbitrary amplitude matrix gives two different matrix products to diagonalize. The singular value decomposition does the work of choosing bases that handle both products at once.

**Wikipedia:** [Schmidt decomposition](https://en.wikipedia.org/wiki/Schmidt_decomposition). It says: “is a diagonal matrix whose non-zero diagonal elements are \|αᵢ\|².”

**Sources:** none listed. No primary source with a working link was found.

### Partial transpose tests separability

**Remember:** Transpose one side to get a test that transposing both sides misses.

*Rules out counterexamples.* MSC 81P42 (Entanglement measures, concurrencies, separability criteria). arXiv quant-ph. Level 2: later undergraduate.

**Definition.** A finite-dimensional quantum state has a positive semidefinite matrix of trace one. A separable state is a probability mixture of product states, whose matrices have the form A ⊗ B. In a fixed basis, partial transpose sends each A ⊗ B to A ⊗ Bᵀ and extends linearly.

**Problem.** If a state is a mixture of product states, its partial transpose is positive semidefinite.

**How the definition helps.** The mixture definition forces partial transpose to preserve positivity on every separable state. In our own argument, transposing B preserves its eigenvalues, so each transposed product remains positive semidefinite. Averaging preserves positivity. A negative eigenvalue therefore rules out separability. The converse requires a separate theorem and holds for dimensions 2 by 2 and 2 by 3, but fails in higher dimensions.

**Wikipedia:** [Peres–Horodecki criterion](https://en.wikipedia.org/wiki/Peres%E2%80%93Horodecki_criterion). It says: “Note that the partial in the name implies that only part of the state is transposed.”

**Sources:**

- [Asher Peres, Separability Criterion for Density Matrices (1996)](https://doi.org/10.1103/PhysRevLett.77.1413)

### Ladder operators give equal steps

**Remember:** The adjoint of the lowering operator adds one unit of energy.

*True by definition.* MSC 81Q05 (Closed and approximate solutions to the Schrödinger, Dirac, Klein-Gordon and other equations of quantum mechanics). arXiv quant-ph, math-ph. Level 2: later undergraduate.

**Definition.** For the oscillator on the real line, choose units with mass, frequency, and the reduced Planck constant equal to one. Position x multiplies by the coordinate and momentum p acts as −i times differentiation. The lowering operator is a = (x + ip)⁄√2 and its adjoint is a†. On smooth rapidly decreasing functions, the energy operator H equals a†a + ½I.

**Problem.** For the one-dimensional quantum harmonic oscillator, applying a† to an energy eigenfunction raises its energy by one unit. The eigenvalues form a single ladder starting at ½.

**How the definition helps.** The factorization gives the energy shift by multiplication and replaces the ground-state equation with a first-order equation. In our own argument, aa† − a†a = I implies Ha† = a†H + a†. The lowest state solves aψ = 0 and is a Gaussian. Repeated raising gives polynomial multiples of that Gaussian. The completeness theorem for Hermite functions proves these states span the Hilbert space, so the ladder accounts for the full spectrum.

**Wikipedia:** [Quantum harmonic oscillator](https://en.wikipedia.org/wiki/Quantum_harmonic_oscillator). It says: “Conceptually, it is important that there is only one solution of this equation”

**Sources:** none listed. No primary source with a working link was found.

### Normal ordering kills vacuum averages

**Remember:** An annihilator next to the vacuum kills the term.

*True by definition.* MSC 81Q12 (Nonselfadjoint operator theory in quantum theory including creation and destruction operators), 81T10. arXiv hep-th, math-ph. Level 2: later undergraduate.

**Definition.** Creation operators add particles, and annihilation operators remove them. Normal ordering puts all creation operators to the left without adding terms from commutators. For fermions, each exchange contributes a minus sign.

**Problem.** The vacuum expectation of every nonempty normal-ordered word is zero.

**How the definition helps.** In our own proof, a normal-ordered word with any annihilator has one at its right end, where it kills the vacuum. If the word contains only creators, the leftmost creator gives zero against the vacuum on the left. Ordinary products can have nonzero vacuum expectations. Wick’s theorem recovers the extra terms needed to expand them in normal order.

**Wikipedia:** [Normal order](https://en.wikipedia.org/wiki/Normal_order). It says: “The vacuum expectation value of a normal ordered product of creation and annihilation operators is zero.”

**Sources:**

- [G. C. Wick, The Evaluation of the Collision Matrix (1950)](https://doi.org/10.1103/PhysRev.80.268)

### Shared tables give Bell's bound

**Remember:** One joint table makes the four signed products add to ±2.

*Rules out counterexamples.* MSC 81Q65 (Alternative quantum mechanics (including hidden variables, etc.)). arXiv quant-ph. Level 2: later undergraduate.

**Definition.** Two observers each choose a setting and record a sign. A local hidden-variable model gives them shared random information independent of their settings. Given that information, their outcomes are independent, and each outcome distribution depends only on the corresponding observer’s setting.

**Problem.** Let E(x,y) be the mean product of the two signs at settings x and y. Every local model satisfies \|E(0,0) + E(0,1) + E(1,0) − E(1,1)\| ≤ 2.

**How the definition helps.** One shared table lets all four correlations use the same random signs. In our own proof, sample all randomness in advance, giving entries A, B for one observer and C, D for the other. The sum A(C + D) + B(C − D) equals ±2 because exactly one parenthesis vanishes. Averaging gives the bound. Our own counterexample chooses uniform outcome bits whose sum modulo two equals the product of the setting bits. Mapping bits 0 and 1 to signs +1 and −1 gives a sum of 4, although each observer sees a uniform sign.

**Wikipedia:** [CHSH inequality](https://en.wikipedia.org/wiki/CHSH_inequality). It says: “the standard assumption of independence of the two sides, enabling us to obtain the joint probabilities of pairs of outcomes”

**Sources:**

- [John F. Clauser, Michael A. Horne, Abner Shimony and Richard A. Holt, Proposed Experiment to Test Local Hidden-Variable Theories (1969)](https://doi.org/10.1103/PhysRevLett.23.880)
- [Arthur Fine, Hidden Variables, Joint Probability, and the Bell Inequalities (1982)](https://doi.org/10.1103/PhysRevLett.48.291)

### Holonomy sees hidden solenoid flux

**Remember:** Zero field on the path need not mean zero phase.

*Makes the theorem clean to state or prove.* MSC 81Q70 (Differential geometric methods, including holonomy, Berry and Hannay phases, Aharonov-Bohm effect, etc. in quantum theory). arXiv quant-ph, math-ph. Level 2: later undergraduate.

**Definition.** Use the phase acquired by parallel transport of a charged wave around a loop. This phase, called holonomy, is exp(iqI/ℏ). Here I is the line integral of the magnetic potential and q is the charge. The alternative uses only the magnetic field along the path.

**Problem.** For a loop going once around an ideal solenoid, the phase is exp(iqΦ/ℏ), where Φ is the enclosed magnetic flux. The field on the loop can vanish.

**How the definition helps.** In our own calculation, holonomy records the integral around the whole loop, even where the local magnetic field vanishes. Choose a spanning surface oriented by the loop and include the solenoid interior when computing its flux. Stokes’ theorem identifies that flux with the potential integral for a finite-radius solenoid. The transport law comes from the coupling between charge and magnetic potential.

**Wikipedia:** [Aharonov–Bohm effect](https://en.wikipedia.org/wiki/Aharonov%E2%80%93Bohm_effect). It says: “experiences a phase shift as a result of the enclosed magnetic field”

**Sources:**

- [Yakir Aharonov and David Bohm, Significance of Electromagnetic Potentials in the Quantum Theory (1959)](https://doi.org/10.1103/PhysRev.115.485)

### Parity strings give fermion signs

**Remember:** One earlier sign operator supplies the fermion minus sign.

*Rules out counterexamples.* MSC 81T25 (Quantum field theory on lattices), 81R15. arXiv quant-ph, math-ph. Level 2: later undergraduate.

**Definition.** On a finite ordered chain of two-state spins, let the lowering operator send the upper state to the lower state and kill the lower state. At each site multiply it by the product of the sign operators at all earlier sites. Each sign operator acts by +1 and −1 on the two states.

**Problem.** Write aⱼ for the resulting operator at site j. Every pair satisfies aⱼaₖ + aₖaⱼ = 0 and aⱼaₖ\* + aₖ\*aⱼ = δⱼₖ I. Here δⱼₖ equals one for equal sites and zero otherwise.

**How the definition helps.** In our own calculation, exactly one sign operator crosses a lowering operator on its own site when the two products exchange order. This gives a minus sign that bare lowering operators on different sites would miss. At one site the earlier signs square to the identity, leaving the two-state matrix identities.

**Wikipedia:** [Jordan–Wigner transformation](https://en.wikipedia.org/wiki/Jordan%E2%80%93Wigner_transformation). It says: “The transformed spin operators now have the appropriate fermionic canonical anti-commutation relations”

**Sources:**

- [Pascual Jordan and Eugene Wigner, Über das Paulische Äquivalenzverbot (1928)](https://doi.org/10.1007/BF01331938)

### Defined this way, indistinguishable particles can only be bosons or fermions

**Remember:** Swapping twice does nothing, so one swap multiplies by +1 or −1.

*True by definition. Confidence: medium.* MSC 81V72 (Particle exchange symmetries in quantum theory (general)), 81V73, 81V74. arXiv quant-ph, math-ph. Level 2: later undergraduate.

**Definition.** N particles are indistinguishable if permuting their arguments leaves the quantum state unchanged. So the wavefunction changes at most by a complex factor s(σ) for each permutation σ in the symmetric group Sym(N).

**Problem.** Why do ordinary indistinguishable particles have only Bose or Fermi statistics?

**How the definition helps.** With this definition, s is a one-dimensional representation of the symmetric group, and there are only two of those. Every transposition σᵢⱼ squares to the identity, so s(σᵢⱼ)² = 1 and s(σᵢⱼ) = ±1. So there are exactly two such representations: the trivial one gives bosons, and the sign one gives fermions. Para-statistics and anyons appear only when one changes the definition. Para-statistics uses higher-dimensional representations of Sym(N). Anyons use the braid group in place of Sym(N), for particles that move in a surface.

**nLab:** [particle statistics](https://ncatlab.org/nlab/show/particle+statistics). It says: “The wavefunctions of ordinarily indistinguishable particles must, by definition, span 1-dimensional linear representations of the symmetric group and there are exactly two such, up to isomorphism”

**Sources:**

- [Hans Halvorson (with an appendix by Michael Müger), Algebraic Quantum Field Theory, in: Philosophy of Physics, Handbook of the Philosophy of Science (2007), arXiv:math-ph/0602036](https://arxiv.org/abs/math-ph/0602036)

### Antisymmetric fermion states enforce Pauli exclusion

**Remember:** Swapping two equal states changes the sign but leaves the input unchanged.

*True by definition.* MSC 81V74 (Fermionic systems in quantum theory), 81S05, 15A75. arXiv quant-ph, math-ph. Level 2: later undergraduate.

**Definition.** Describe identical fermions, such as electrons, by antisymmetric many-particle states. This means that exchanging two particle labels reverses the sign of every state coefficient. Pauli’s earlier rule instead forbids two electrons in an atom from sharing all their quantum numbers.

**Problem.** No two identical fermions can occupy the same one-particle state.

**How the definition helps.** Antisymmetry forces every coefficient with two identical state labels to equal its negative, so that coefficient is zero. This works in any one-particle basis, including one chosen to contain the proposed shared state. The work lies in justifying antisymmetry for real particles. The spin–statistics theorem gives this link for half-integer-spin particles under the assumptions of relativistic quantum field theory.

**Wikipedia:** [Pauli exclusion principle](https://en.wikipedia.org/wiki/Pauli_exclusion_principle). It says: “Antisymmetry under exchange means that A(x, y) = −A(y, x). This implies A(x, y) = 0 when x = y, which is Pauli exclusion.”

**Sources:** none listed. No primary source with a working link was found.

### Unnormalized measurement maps compose

**Remember:** Keep the probability in the trace until all measurements are done.

*True by definition.* MSC 81P15 (Quantum measurement theory, state operations, state preparations). arXiv quant-ph. Level 3: graduate.

**Definition.** A quantum instrument assigns each outcome a linear map that remains positive even with an untouched auxiliary system. The map returns an unnormalized output state whose trace is the outcome probability. The sum of all outcome maps preserves trace. This replaces a separate normalized state update and probability formula.

**Problem.** Apply two finite-outcome instruments in order, with the second acting on the first instrument’s output. The composed outcome maps give the final states, and their traces give the joint probabilities.

**How the definition helps.** Keeping the first probability in the output matrix lets the second linear map carry it through the calculation. In our own argument, a first outcome of probability p gives p times its conditional state. Linearity multiplies the second conditional probability by p. An impossible first outcome gives the zero matrix and hence zero joint probability. Summing over both outcomes composes two trace-preserving maps. The work of identifying physical measurements with instruments precedes this calculation.

**Wikipedia:** [Quantum instrument](https://en.wikipedia.org/wiki/Quantum_instrument). It says: “a quantum instrument is a mathematical description of a quantum measurement, capturing both the classical and quantum outputs.”

**Sources:**

- [Masanao Ozawa, Quantum measuring processes of continuous observables (1984)](https://doi.org/10.1063/1.526000)

### Using generalized measurements makes Gleason's theorem hold for qubits too

**Remember:** Allow all generalized measurements, and the Born rule follows in every dimension.

*Rules out counterexamples.* MSC 81P15 (Quantum measurement theory, state operations, state preparations), 81P16. arXiv quant-ph. Level 3: graduate.

**Definition.** A POVM (positive-operator-valued measure) is a family of positive operators that add up to the identity; each operator stands for one outcome. A projective measurement is the special case in which every operator is an orthogonal projection. Busch's version of Gleason's theorem assigns probabilities to all POVM elements, not only to projections.

**Problem.** Gleason's theorem says that every rule giving probabilities to outcomes, additive within each measurement, comes from a density operator by the Born rule. For projective measurements this needs a Hilbert space of dimension at least 3. For POVMs it holds in every dimension, including dimension 2.

**How the definition helps.** With POVMs the probability rule must be additive on many more families of outcomes. This forces the rule to be linear in the operator, which is almost the Born rule at once. For projections in dimension 2, the page gives a counterexample in the Bloch sphere picture, where outcomes are points on a sphere. Fix a unit vector λ, and give probability 1 to each outcome in its hemisphere and 0 to the others. This rule obeys Gleason's assumptions, but it comes from no density operator. Busch's proof is short, while Gleason's original proof for dimension 3 or more is long and hard. Whether noncontextuality is a fair assumption for POVMs is still debated (our own).

**Wikipedia:** [Gleason's theorem](https://en.wikipedia.org/wiki/Gleason%27s_theorem), [POVM](https://en.wikipedia.org/wiki/POVM). It says: “Unlike the original theorem of Gleason, the generalized version using POVMs also applies to the case of a single qubit.”

**Sources:**

- [A. M. Gleason, Measures on the Closed Subspaces of a Hilbert Space, Journal of Mathematics and Mechanics 6 (1957), 885–893](https://doi.org/10.1512/iumj.1957.6.56050)
- [P. Busch, Quantum States and Generalized Observables: A Simple Proof of Gleason's Theorem, Physical Review Letters 91 (2003), 120403](https://doi.org/10.1103/PhysRevLett.91.120403)

### Treating quantum states as rays allows rotations to act with a sign

**Remember:** A full turn may flip a vector's sign without changing the state.

*Makes the theorem clean to state or prove.* MSC 81P16 (Quantum state spaces, operational and probabilistic concepts), 81R05, 81R25. arXiv quant-ph, math-ph. Level 3: graduate.

**Definition.** A pure quantum state is a ray: a unit vector up to a phase factor, a complex number of absolute value 1. A symmetry acts on rays, so on vectors it gives a projective representation, U(g)U(h) = ω(g, h)U(gh), with a phase ω(g, h). By Wigner's theorem each symmetry is a unitary or antiunitary operator, fixed up to a phase.

**Problem.** For the rotation group SO(3), the phases ω can be chosen to be ±1, and for half-integer spin they cannot all be 1. These projective representations are the ordinary representations of the double cover SU(2), also called Spin(3). So particles of spin one-half, whose vectors change sign under a full turn, are allowed.

**How the definition helps.** A phase changes no probability, so a rotation by 2π may act as −1 on vectors and still be the identity on states. The page states that for SO(3) and the Lorentz group the phases can be chosen as ±1. For their universal covers, the simply connected groups Spin(3) and SL(2,C), the phases can be chosen as 1. Bargmann proved such results for semisimple Lie groups. If states were vectors, only ordinary representations of SO(3) would be allowed, and these have integer spin only (our own). What stays hard is the general phase problem, which needs group cohomology, namely the second cohomology group of the symmetry group.

**Wikipedia:** [Wigner's theorem](https://en.wikipedia.org/wiki/Wigner%27s_theorem). It says: “In the case of the Lorentz group and its subgroup the rotation group SO(3), phases can, for projective representations, be chosen such that ω(g, h) = ± 1.”

**Sources:**

- [V. Bargmann, On Unitary Ray Representations of Continuous Groups, Annals of Mathematics 59 (1954), 1–46](https://doi.org/10.2307/1969831)

### Entanglement of formation is convex

**Remember:** Combine two ensembles to bound the cost of their mixture.

*True by definition.* MSC 81P42 (Entanglement measures, concurrencies, separability criteria). arXiv quant-ph. Level 3: graduate.

**Definition.** For a pure state of two finite systems, discard either system and take the entropy of the remaining state matrix. This entropy is the sum of −p log₂ p over its positive eigenvalues p. A mixed state can be a probability mixture of pure states in many ways. Its entanglement of formation is the infimum of their mean entropies over all such decompositions.

**Problem.** Mixing two states cannot give more entanglement of formation than the weighted mean of their entanglements of formation.

**How the definition helps.** Taking the infimum lets us test the mixture with any combined decomposition of its two ingredients. In our own argument, choose a decomposition of each ingredient within ε of its infimum. Multiply each list of probabilities by its ingredient’s mixing weight and join the lists. The resulting cost exceeds the weighted mean of the two infima by at most ε. Let ε decrease to zero. Fixing one decomposition in advance would remove the freedom to use this combined list.

**Wikipedia:** [Entanglement of formation](https://en.wikipedia.org/wiki/Entanglement_of_formation). It says: “This kind of extension of a quantity defined on some set (here the pure states) to its convex hull (here the mixed states) is called a convex roof construction.”

**Sources:**

- [Charles H. Bennett, David P. DiVincenzo, John A. Smolin and William K. Wootters, Mixed-state entanglement and quantum error correction (1996)](https://doi.org/10.1103/PhysRevA.54.3824)

### Separable states are defined as exactly what local operations can prepare

**Remember:** Shared dice plus local preparation give exactly the separable states.

*True by definition.* MSC 81P42 (Entanglement measures, concurrencies, separability criteria), 81P48. arXiv quant-ph. Level 3: graduate.

**Definition.** A state of a two-part system is a product state if it has the form ρ₁ ⊗ ρ₂. It is separable if it is a convex combination Σ pₖ ρ₁ᵏ ⊗ ρ₂ᵏ of product states, and entangled otherwise. Werner gave this definition in 1989.

**Problem.** A state can be prepared from a product state by local operations and classical communication (LOCC) exactly when it is separable. So entanglement is the resource that these operations cannot create.

**How the definition helps.** The definition lists exactly the states that local operations and messages make for free. Classical messages let the two sides share a random index k with probability pₖ (our own explanation). Then each side prepares its own state for that k, which gives the mixture Σ pₖ ρ₁ᵏ ⊗ ρ₂ᵏ. Conversely, local operations and messages only ever produce such mixtures. Werner's paper also showed that some entangled states have a local hidden-variable model, a classical model of the results (our own, from the title). So entanglement is not the same as violating a Bell inequality, a bound that all such models obey. What stays hard is to decide separability; the Peres–Horodecki partial-transpose test decides it only for dimensions 2×2 and 2×3.

**Wikipedia:** [Separable state](https://en.wikipedia.org/wiki/Separable_state). It says: “In terms of quantum channels, a separable state can be created from any other state using local actions and classical communication while an entangled state cannot.”

**Sources:**

- [R. F. Werner, Quantum states with Einstein-Podolsky-Rosen correlations admitting a hidden-variable model, Physical Review A 40 (1989), 4277–4281](https://doi.org/10.1103/PhysRevA.40.4277)

### Partial traces show that local quantum operations cannot signal

**Remember:** The partial trace ignores a local operation whose outcomes are not selected.

*True by definition. Confidence: medium.* MSC 81P45 (Quantum information, communication, networks (quantum-theoretic aspects)), 81P40, 81P16. arXiv quant-ph. Level 3: graduate.

**Definition.** Define Bob’s reduced state σ as the partial trace of the joint state ρ over Alice’s space. This is the matrix with trace(σY) = trace(ρ(I ⊗ Y)) for each observable Y of Bob. An observable is a matrix representing a measurable quantity, and I is the identity on Alice’s space.

**Problem.** In a finite-dimensional joint system, an operation on Alice’s part alone cannot change Bob’s measurement statistics when all of Alice’s outcomes are included.

**How the definition helps.** The partial trace reduces the proof to preserving the expectations of I ⊗ Y for all Y. Alice’s unconditioned operation is specified by matrices V acting only on her space, whose products V†V sum to I. Cyclicity of the trace moves each V next to its adjoint, and the sum of those products is I. This checks all Bob’s observables at once rather than comparing separate measurements (our own). The work lies in establishing the expectation rule for partial trace and the sum condition for a trace-preserving local operation (our own).

**Wikipedia:** [No-communication theorem](https://en.wikipedia.org/wiki/No-communication_theorem). It says: “immediately (with no time delay) after Alice performs her measurement, the relative state of Bob's system is given by the partial trace of the overall state with respect to Alice's system.”

**Sources:**

- [Phillippe H. Eberhard, Ronald R. Ross, Quantum field theory cannot provide faster-than-light communication, Foundations of Physics Letters (1989)](https://doi.org/10.1007/BF00696109)

### Diamond norms ignore idle systems

**Remember:** Once every idle system is allowed, one more changes nothing.

*True by definition.* MSC 81P47 (Quantum channels, fidelity). arXiv quant-ph. Level 3: graduate.

**Definition.** The diamond norm takes the largest trace-norm expansion when a linear map acts alongside an untouched system of any finite size. The trace norm is the sum of singular values. The ordinary induced trace norm tests the map on its input alone.

**Problem.** Tensoring a finite-dimensional linear map with an identity map does not change its diamond norm.

**How the definition helps.** In our own explanation, attaching another idle system only changes the size of a system already allowed in the supremum. The reverse bound follows by holding the additional system in a fixed pure state. The stabilization theorem reduces the supremum to an auxiliary system no bigger than the map’s input. Our own example shows why the ordinary norm differs. Transpose preserves singular values, but transposing just one side of a maximally entangled pair gives a larger trace norm.

**Wikipedia:** [Diamond norm](https://en.wikipedia.org/wiki/Diamond_norm). It says: “The diamond norm is the trace norm of the output of a trivial extension of a linear map, maximized over all possible inputs with trace norm at most one.”

**Sources:** none listed. No primary source with a working link was found.

### Fidelity as the best purification overlap cannot decrease under quantum channels

**Remember:** Keep the channel's environment and the overlap stays the same.

*True by definition. Confidence: medium.* MSC 81P47 (Quantum channels, fidelity). arXiv quant-ph. Level 3: graduate.

**Definition.** Define the root fidelity of two states as the largest absolute inner product of two purifications. A purification is a pure state on a larger system that reduces to the given state. The matrix formula is the sum of the singular values of the product of the two positive square roots.

**Problem.** A quantum channel between finite-dimensional systems cannot decrease the fidelity of two states.

**How the definition helps.** With the purification definition, take two purifications that attain the maximum. Apply an isometry that models the channel together with its environment. The results purify the output states and have the same inner product, so the output fidelity is at least as large. The work goes into Uhlmann's theorem, which links this definition to the matrix formula, and Stinespring's theorem, which gives the isometry. The proof is our own.

**Wikipedia:** [Fidelity of quantum states](https://en.wikipedia.org/wiki/Fidelity_of_quantum_states). It says: “the fidelity is the maximum overlap between purifications.”

**Sources:**

- [Armin Uhlmann, The Transition Probability in the State Space of a ∗-Algebra (1976)](https://doi.org/10.1016/0034-4877(76)90060-4)

### Measure-and-prepare channels break entanglement

**Remember:** A classical outcome can select a state but cannot carry entanglement.

*True by definition.* MSC 81P47 (Quantum channels, fidelity). arXiv quant-ph. Level 3: graduate.

**Definition.** A finite-dimensional quantum channel is a trace-preserving linear map that preserves positivity even in the presence of an untouched auxiliary system. A measure-and-prepare channel measures the input and chooses a new output state using only the recorded outcome. A channel breaks entanglement if its output and any untouched reference always form a mixture of product states.

**Problem.** Every measure and prepare channel breaks entanglement with any untouched reference.

**How the definition helps.** Conditioning on the recorded outcome fixes the prepared state, so it separates from the reference. In our own proof, forgetting the outcome averages these product states with their outcome probabilities. The cited equivalence supplies the converse, turning the condition on every reference into a measurement and preparation rule.

**Paper or page:** [C\*-extreme entanglement breaking maps on operator systems](https://arxiv.org/abs/2306.07642v3). It says: “a Choi-Kraus decomposition with rank-one Choi-Kraus coefficients”

**Sources:**

- [C\*-extreme entanglement breaking maps on operator systems](https://arxiv.org/abs/2306.07642v3)

### One Choi matrix unifies Kraus lists

**Remember:** Different Kraus lists factor the same positive matrix.

*True by definition.* MSC 81P47 (Quantum channels, fidelity). arXiv quant-ph. Level 3: graduate.

**Definition.** A completely positive map preserves positive matrices even when it acts alongside an identity map of any finite size. A Kraus list represents it as a sum of terms EρE†, where the dagger denotes the adjoint. In a fixed input basis, the Choi matrix has block (i, j) equal to the map applied to matrix unit (i, j). A matrix unit has one entry equal to one and zeros elsewhere.

**Problem.** Any two Kraus lists for the same finite-dimensional map differ by unitary mixing after padding the shorter list with zeros.

**How the definition helps.** Both lists factor the same Choi matrix, so their rows have identical inner products. In our own argument, stack each operator’s columns into one vector and assemble the vectors as columns of a matrix. Multiplying that matrix by its adjoint gives the Choi matrix by the block definition. After zero padding, matching corresponding rows defines an isometry of their spans inside spaces of equal dimension. Extending it to a unitary gives the required mixing. Comparing the two operator sums directly hides this common matrix.

**Paper or page:** [Universal Properties of Partial Quantum Maps](https://arxiv.org/abs/2206.04814v2). It says: “There is a unitary k-by-k matrix U = (uᵢⱼ)”

**Sources:**

- [Universal Properties of Partial Quantum Maps](https://arxiv.org/abs/2206.04814v2)

### Requiring complete positivity gives quantum channels their Kraus form

**Remember:** Positive on every enlarged system means a sum of V ρ V\*.

*Rules out counterexamples.* MSC 81P47 (Quantum channels, fidelity), 46L07. arXiv quant-ph, math.OA. Level 3: graduate.

**Definition.** A linear map φ between matrix algebras is positive if it sends positive matrices to positive matrices. It is completely positive if id ⊗ φ, which applies φ to each block of a k×k block matrix, is positive for every k. In physics this asks that the map stay positive when it acts on one part of a larger system.

**Problem.** Choi's theorem: a linear map on n×n matrices is completely positive exactly when its Choi matrix is positive semidefinite. Then the map has the Kraus form ρ ↦ Σ Vᵢ ρ Vᵢ\*. Positive maps in general have no such form.

**How the definition helps.** Complete positivity is the same as positivity of the Choi matrix, and a positive matrix factors as B\*B, which gives the Kraus operators directly. The page names the case that the definition excludes: matrix transposition is positive but not 2-positive. Applied to one block level of a positive 4×4 matrix, it gives a matrix with eigenvalue −1. So transposition cannot describe a physical process on one half of an entangled pair. Stinespring's theorem gives the same factorization for C\*-algebras in general. What stays hard is to recognize maps that are positive but not completely positive, which is linked to the detection of entanglement (our own).

**Wikipedia:** [Completely positive map](https://en.wikipedia.org/wiki/Completely_positive_map), [Choi's theorem on completely positive maps](https://en.wikipedia.org/wiki/Choi%27s_theorem_on_completely_positive_maps). It says: “The transposition of matrices is a standard example of a positive map that fails to be 2-positive.”

**Sources:**

- [M.-D. Choi, Completely positive linear maps on complex matrices, Linear Algebra and its Applications 10 (1975), 285–290](https://doi.org/10.1016/0024-3795(75)90075-0)
- [W. F. Stinespring, Positive Functions on C\*-Algebras, Proceedings of the American Mathematical Society 6 (1955), 211–216](https://doi.org/10.2307/2032342)

### Trace distance as best measurement distinction cannot grow under quantum channels

**Remember:** A channel followed by a measurement is still a measurement.

*True by definition. Confidence: medium.* MSC 81P47 (Quantum channels, fidelity), 81P18. arXiv quant-ph. Level 3: graduate.

**Definition.** Define the trace distance of two quantum states as the largest total variation distance between the outcome distributions of one measurement applied to both. Total variation is the largest difference between the probabilities of an event. The matrix definition is half the sum of the absolute eigenvalues of the difference of the two density matrices.

**Problem.** Applying the same quantum channel to two states cannot increase their trace distance.

**How the definition helps.** With the measurement definition the claim is immediate. Any measurement after the channel is a measurement on the original states, so the largest distinction cannot grow. The work goes into the theorem that measuring the sign of the eigenvalues of the difference attains the matrix formula. The Wikipedia text gives that theorem; the contraction argument is our own.

**Wikipedia:** [Trace distance](https://en.wikipedia.org/wiki/Trace_distance). It says: “To understand why this maximum equals the trace distance between the states”

**Sources:** none listed. No primary source with a working link was found.

### Commuting states can be broadcast

**Remember:** States diagonal in one basis can share one sampled basis outcome.

*Rules out counterexamples.* MSC 81P50 (Quantum state estimation, approximate cloning). arXiv quant-ph. Level 3: graduate.

**Definition.** A finite-dimensional state has a positive semidefinite matrix of trace one. Broadcasting uses one physical transformation to produce two outputs from an unknown member of a known family. Each output considered alone must have the original state matrix. The two outputs may be correlated.

**Problem.** One channel broadcasts every state in a commuting family of finite-dimensional states.

**How the definition helps.** Commuting state matrices share an eigenbasis, so one sampled basis label suffices for both outputs. In our own construction, measure in that basis and prepare the observed basis state at each output. The probability of each label reproduces the corresponding diagonal entry of the input. Our own counterexample uses the pure states with vectors (1, 0) and (1, 1)⁄√2. A pure state at either output forces a product joint state. Broadcasting would therefore copy these nonorthogonal vectors, contrary to the no-cloning theorem. The no-broadcasting theorem proves the harder necessity of commutation for mixed states.

**Wikipedia:** [No-broadcasting theorem](https://en.wikipedia.org/wiki/No-broadcasting_theorem). It says: “there is no method capable of taking a single copy of either state and succeeding”

**Sources:**

- [Howard Barnum, Carlton M. Caves, Christopher A. Fuchs, Richard Jozsa and Benjamin Schumacher, Noncommuting Mixed States Cannot Be Broadcast (1996)](https://doi.org/10.1103/PhysRevLett.76.2818)

### Codes defined by stabilizers detect every error that anticommutes with one

**Remember:** An anticommuting error flips the sign of a check.

*True by definition.* MSC 81P73 (Computational stability and error-correcting codes for quantum computation and communication processing), 81P70. arXiv quant-ph, cs.IT. Level 3: graduate.

**Definition.** Define a stabilizer code as the space of states fixed by every element of a commuting group of Pauli operators. Pauli operators are tensor products of the identity and the three Pauli matrices on single quantum bits. The older way to give a quantum code lists a basis of code states.

**Problem.** Let a Pauli error anticommute with some stabilizer element, so that swapping the two negates their product. Then the error sends the code space into a space orthogonal to it.

**How the definition helps.** With the stabilizer definition, each code state has eigenvalue +1 for each check. Moving the check past the error changes this eigenvalue to −1. Eigenspaces of a Hermitian operator for different eigenvalues are orthogonal, so measuring the check detects the error. From a list of basis states one would have to compute all the overlaps instead. The work goes into finding checks whose fixed space is the intended code. This detects the error but need not tell it apart from other errors. The comparison is our own.

**Wikipedia:** [Stabilizer code](https://en.wikipedia.org/wiki/Stabilizer_code). It says: “E\|ψ⟩ is in the −1-eigenspace of S rather than the +1-eigenspace”

**Sources:** none listed. No primary source with a working link was found.

### Correctable error spans stay correctable

**Remember:** Check the cross-products once, then correct all linear combinations.

*True by definition.* MSC 81P73 (Computational stability and error-correcting codes for quantum computation and communication processing). arXiv quant-ph. Level 3: graduate.

**Definition.** A quantum code is a subspace with orthogonal projection P. An error list represents a channel by sending a state matrix ρ to the sum of EρE† over the list. The dagger denotes the adjoint. A recovery channel corrects the error if their composition restores every state supported on the code.

**Problem.** Suppose PA†BP is a scalar multiple of P for every pair A, B in a spanning list of errors. Every channel represented by errors in their linear span then admits recovery on the code.

**How the definition helps.** The Knill–Laflamme criterion replaces the search for a recovery channel by a condition that extends from a spanning list. In our own argument, inserting two linear combinations into PA†BP gives a sum of scalar multiples of P. The criterion turns this scalar condition back into the existence of recovery. Testing each error separately would omit products between distinct errors.

**Paper or page:** [Kitaev's quantum double model as an error correcting code](https://arxiv.org/abs/1908.02829v3). It says: “A necessary and sufficient condition for the existence of a recovery channel ℛ correcting ℰ on 𝒞 is that P Eᵢ† Eⱼ P = αᵢⱼ P, for some Hermitian matrix α of complex numbers.”

**Sources:**

- [Kitaev's quantum double model as an error correcting code](https://arxiv.org/abs/1908.02829v3)

### Valid stabilizers leave nonzero codes

**Remember:** A valid stabilizer group always leaves room for a code.

*Rules out counterexamples. Confidence: medium.* MSC 81P73 (Computational stability and error-correcting codes for quantum computation and communication processing). arXiv quant-ph. Level 3: graduate.

**Definition.** A qubit has state space ℂ². The single-qubit Pauli matrices are the identity, the basis swap X, the sign change Z = diag(1, −1), and iXZ. The Pauli group on n qubits consists of their n-fold tensor products multiplied by ±1 or ±i. A stabilizer code is the common fixed space of a commuting Pauli subgroup that excludes −I.

**Problem.** A stabilizer subgroup on n qubits has a nonzero fixed space. Its dimension is 2ⁿ divided by the subgroup order.

**How the definition helps.** Excluding −I leaves the identity as the only group element with nonzero trace, in our own argument. Indeed, iI and −iI would square to −I and are also excluded. Averaging the group gives the projection onto the fixed space, so its trace gives the dimension. Our own counterexample is the group {I, −I}, whose only fixed vector is zero.

**Paper or page:** [Stabilizer Formalism for Operator Algebra Quantum Error Correction](https://arxiv.org/abs/2304.11442v2). It says: “Let 𝒮 be an abelian subgroup of 𝒫ₙ that does not contain −I, and let C be its stabilizer subspace.”

**Sources:**

- [Stabilizer Formalism for Operator Algebra Quantum Error Correction](https://arxiv.org/abs/2304.11442v2)

### Antiunitary time reversal squaring to minus identity pairs energy eigenstates

**Remember:** Time reversal gives an orthogonal partner when its square negates every state.

*True by definition.* MSC 81Q10 (Selfadjoint operator theory in quantum theory, including spectral analysis), 81S05. arXiv quant-ph, math-ph. Level 3: graduate.

**Definition.** On state vectors, represent time reversal by an antiunitary map T, a conjugate-linear bijection with ⟨Tu, Tw⟩ = ⟨w, u⟩. This replaces the physical description of time reversal as reversing momenta and spins. The condition T² = −I, where I is the identity, is a separate assumption.

**Problem.** If the energy operator commutes with T and T² = −I, every finite-dimensional energy eigenspace has even dimension. Any eigenvector has an orthogonal partner at the same energy.

**How the definition helps.** The antiunitary definition gives ⟨T²v, Tv⟩ = ⟨v, Tv⟩, while T² = −I makes the left side its negative. Thus Tv is orthogonal to v. Commutation gives Tv the same energy as v. The orthogonal complement of the pair is also preserved by T, so the pairing continues (our own). For a physical system, the work lies in finding its time reversal operator and checking its square and commutation rule (our own).

**Wikipedia:** [Kramers' theorem](https://en.wikipedia.org/wiki/Kramers%27_theorem). It says: “If T : H → H is an antiunitary operator acting on a Hilbert space H satisfying T² = −1 and v a vector in H, then T v is orthogonal to v.”

**Sources:** none listed. No primary source with a working link was found.

### Connected graphs have unique ground modes

**Remember:** Zero energy means one constant per connected component.

*Rules out counterexamples.* MSC 81Q35 (Quantum mechanics on special spaces: manifolds, fractals, graphs, lattices), 81Q10. arXiv math-ph. Level 3: graduate.

**Definition.** Replace each edge of a finite connected graph by an interval of positive finite length. Allow functions with square-integrable first derivatives on the edges and matching values at each vertex. Define the free Laplacian through the energy obtained by integrating the squared derivative magnitude over every edge.

**Problem.** The zero eigenvalue of the free Laplacian on a connected compact metric graph is simple. Two disjoint intervals instead give two independent zero modes.

**How the definition helps.** In our own proof, zero energy forces each edge function to be constant. Matching vertex values make the constants equal throughout a connected graph. Conversely, every constant has zero energy. The theorem associating an operator to this energy identifies zero-energy functions with its kernel.

**Paper or page:** [Geometric spectral theory of quantum graphs](https://arxiv.org/abs/2310.02707v3). It says: “In particular, its spectrum is real and takes the form λ₁ &lt; λ₂ ≤ λ₃ ≤ … → ∞”

**Sources:**

- [Geometric spectral theory of quantum graphs](https://arxiv.org/abs/2310.02707v3)

### Energy forms give Kirchhoff conditions

**Remember:** One test value per vertex makes the edge currents add.

*True by definition.* MSC 81Q35 (Quantum mechanics on special spaces: manifolds, fractals, graphs, lattices), 81Q10. arXiv math-ph. Level 3: graduate.

**Definition.** Replace the edges of a finite graph by intervals of positive finite length. Define energy by integrating the squared derivative magnitude along the edges. Allow functions with square-integrable first derivatives and matching values at each vertex.

**Problem.** The associated operator acts as the negative second derivative on each edge. Its domain also requires square-integrable second derivatives and zero sum of outgoing derivatives at each vertex.

**How the definition helps.** In our own proof, continuity gives one test value per vertex, so integration by parts adds all outgoing derivatives there. Test functions can take independent values at different vertices. Their boundary terms vanish precisely when each sum vanishes. The theorem associating an operator to the energy justifies this alternative to prescribing boundary conditions directly.

**Paper or page:** [Geometric spectral theory of quantum graphs](https://arxiv.org/abs/2310.02707v3). It says: “(Aq f)\|ₑ = −f\|ₑ″ + q\|ₑ f\|ₑ”

**Sources:**

- [Geometric spectral theory of quantum graphs](https://arxiv.org/abs/2310.02707v3)

### Vertex cuts lower graph eigenvalues

**Remember:** A cut allows more trial functions at the same energy.

*True by definition.* MSC 81Q35 (Quantum mechanics on special spaces: manifolds, fractals, graphs, lattices), 81Q10. arXiv math-ph. Level 3: graduate.

**Definition.** Give each edge of a finite graph positive finite length and integrate the squared derivative magnitude along every edge. Allow functions with square-integrable derivatives and matching values at each vertex. Splitting one vertex into r + 1 nonempty groups of edge ends releases r independent matching conditions.

**Problem.** Splitting a vertex into r + 1 vertices cannot raise any eigenvalue of the free graph Laplacian. The new eigenvalue at index k is at least the old one at index k − r when k &gt; r.

**How the definition helps.** In our own proof, splitting the vertex enlarges the space of trial functions by r dimensions while preserving the energy formula. The minimum–maximum characterization of eigenvalues gives both bounds by comparing trial subspaces. This avoids solving the differential equations with new vertex conditions. The operator associated with the energy has zero total outgoing derivative at each vertex.

**Paper or page:** [Geometric spectral theory of quantum graphs](https://arxiv.org/abs/2310.02707v3). It says: “Suppose Γ̃ is formed from Γ by making a rank r ≥ 1 cut of a vertex v of Γ, preserving standard conditions at all vertices.”

**Sources:**

- [Geometric spectral theory of quantum graphs](https://arxiv.org/abs/2310.02707v3)

### Signed traces cancel excited states

**Remember:** The signed trace cancels every positive-energy pair.

*True by definition.* MSC 81Q60 (Supersymmetry and quantum mechanics). arXiv hep-th, math-ph. Level 3: graduate.

**Definition.** Split the state space into two orthogonal parts called even and odd. Supersymmetry here means that a self-adjoint operator Q exchanges the two parts and satisfies Q² = H, the energy operator. At inverse temperature β, the Witten index takes the trace of exp(−βH) on even states minus its trace on odd states.

**Problem.** For supersymmetric quantum mechanics, suppose the thermal operator has finite trace for every positive inverse temperature. Then the Witten index is constant and equals the number of even zero-energy states minus the number of odd ones.

**How the definition helps.** The minus sign cancels the two contributions at every positive energy. In our own proof, Q preserves the space of energy E because it commutes with H. For E &gt; 0, dividing Q by √E gives a map between the even and odd spaces that is its own inverse. Thus these spaces have equal dimensions. Only the zero-energy states contribute to the signed trace. The ordinary thermal trace counts both partners positively.

**nLab:** [Witten index](https://ncatlab.org/nlab/show/Witten+index). It says: “The Witten index or supersymmetric index of a supersymmetric quantum field theory is its partition function with the trace-operation replaced by the super-trace.”

**Sources:**

- [Edward Witten, Constraints on supersymmetry breaking (1982)](https://doi.org/10.1016/0550-3213(82)90071-2)

### Berry holonomy makes the closed-loop phase factor gauge invariant

**Remember:** Changing the base-point label conjugates the loop map but leaves its scalar unchanged.

*True by definition.* MSC 81Q70 (Differential geometric methods, including holonomy, Berry and Hannay phases, Aharonov-Bohm effect, etc. in quantum theory), 53C05. arXiv quant-ph, math-ph. Level 3: graduate.

**Definition.** Define the Berry phase factor as the holonomy of the eigenstate line along a loop of parameters. This means the complex scalar obtained by transporting a state around the loop using the connection, a rule for comparing nearby eigenstates. The state must belong to a simple eigenvalue separated from the rest of the spectrum along the loop.

**Problem.** The phase factor does not depend on how one chooses the phases of the eigenstates along the loop. The phase angle itself is only determined modulo 2π.

**How the definition helps.** Holonomy makes invariance immediate because transport returns to the same one-dimensional space and its scalar is independent of basis (our own). In the local integral formula, a phase change adds a derivative to the connection, and the angle may shift by a multiple of 2π. The work lies in the adiabatic theorem, which identifies this transport with slow quantum evolution after the dynamical phase is removed.

**Wikipedia:** [Berry connection and curvature](https://en.wikipedia.org/wiki/Berry_connection_and_curvature), [Geometric phase](https://en.wikipedia.org/wiki/Geometric_phase). It says: “However, its integral along a closed path, the Berry phase γₙ, is gauge-invariant up to an integer multiple of 2π.”

**Sources:**

- [M. V. Berry, Quantal phase factors accompanying adiabatic changes, Proceedings of the Royal Society of London A (1984)](https://doi.org/10.1098/rspa.1984.0023)
- [Barry Simon, Holonomy, the quantum adiabatic theorem, and Berry's phase, Physical Review Letters (1983)](https://doi.org/10.1103/PhysRevLett.51.2167)

### Rotation generators fix the commutators of angular momentum

**Remember:** Small rotations determine how angular momentum operators fail to commute.

*True by definition.* MSC 81R05 (Finite-dimensional groups and algebras motivated by physics and their representations), 81S05, 22E70. arXiv quant-ph, math-ph. Level 3: graduate.

**Definition.** Define angular momentum about an axis as iħ times the derivative of the unitary rotation operator at zero angle. Here ħ is the reduced Planck constant. This definition includes spin, which the orbital formula r × p does not describe.

**Problem.** On states where all the products are defined, orbital, spin, and total angular momentum satisfy \[J₁, J₂\] = iħJ₃ and the cyclic versions. The commutator \[A, B\] means AB − BA.

**How the definition helps.** The generator definition fixes the commutators because differentiating a rotation representation preserves the brackets that measure how rotations fail to commute. For spin, use the double cover of the rotation group, which has the same infinitesimal brackets (our own). In the orbital formula, one instead calculates directly from the position and momentum commutators. The work lies in differentiating the rotation action and computing the brackets of the three infinitesimal rotations (our own).

**Wikipedia:** [Angular momentum operator](https://en.wikipedia.org/wiki/Angular_momentum_operator). It says: “The most general and fundamental definition of angular momentum is as the generator of rotations.”

**Sources:** none listed. No primary source with a working link was found.

### Weyl relations restore uniqueness

**Remember:** Use the full unitary groups to control what their generators miss.

*Rules out counterexamples.* MSC 81S05 (Commutation relations and statistics as related to quantum mechanics (general)), 81R15. arXiv math-ph, quant-ph. Level 3: graduate.

**Definition.** Let U(s) and V(t) be unitary groups for position and momentum, continuous on each vector. Fix a nonzero real constant c and impose U(s)V(t) = exp(icst)V(t)U(s) for all real s and t. These are the Weyl relations.

**Problem.** Any two irreducible pairs obeying these relations for the same c are unitarily equivalent. Irreducibility means they have no common proper nonzero closed invariant subspace.

**How the definition helps.** In our own example, the Weyl relations would shift the position spectrum by arbitrary real amounts. Position on a bounded interval has bounded spectrum, so this is impossible. Yet position and periodic momentum satisfy the usual infinitesimal commutator on smooth functions supported inside the interval. The Stone–von Neumann theorem supplies the uniqueness proof.

**Wikipedia:** [Stone–von Neumann theorem](https://en.wikipedia.org/wiki/Stone%E2%80%93von_Neumann_theorem). It says: “one must require that the operators satisfy the exponentiated form of the canonical commutation relations, known as the Weyl relations.”

**Sources:**

- [Hermann Weyl, Quantenmechanik und Gruppentheorie (1927)](https://doi.org/10.1007/BF02055756)
- [John von Neumann, Die Eindeutigkeit der Schrödingerschen Operatoren (1931)](https://doi.org/10.1007/BF01457956)

### Primitive channels forget their inputs

**Remember:** Irreducible channels can cycle, but primitive channels converge.

*Rules out counterexamples.* MSC 81S22 (Open systems, reduced dynamics, master equations, decoherence). arXiv quant-ph, math-ph. Level 3: graduate.

**Definition.** A quantum channel transforms state matrices, which are positive semidefinite and have trace one. A finite-dimensional channel is primitive if some fixed power sends every state to a positive definite state. Its error operators are matrices E that express the channel as a sum of terms EρE†, with † denoting the adjoint. Irreducibility means these operators have no common nonzero proper invariant subspace.

**Problem.** Every primitive channel converges under iteration to one fixed full-rank state, regardless of its input.

**How the definition helps.** Primitivity excludes the persistent cycles that irreducibility allows. In our own explanation, the quantum Perron–Frobenius theorem gives one simple eigenvalue at 1 and puts all other eigenvalues strictly inside the unit circle. Powers therefore converge to the fixed state. Our own irreducible example measures in a two-vector orthonormal basis and prepares the opposite basis state. The two basis states alternate forever.

**Paper or page:** [Zero-error communication under discrete-time Markovian dynamics](https://arxiv.org/abs/2402.18703v3). It says: “∃ N ∈ ℕ such that ∀ ρ ∈ 𝕊𝒹(ℂ) and n ≥ N, Φⁿ(ρ) is of full rank.”

**Sources:**

- [Zero-error communication under discrete-time Markovian dynamics](https://arxiv.org/abs/2402.18703v3)
- [Mikel Sanz, David Pérez-García, Michael M. Wolf and J. Ignacio Cirac, A Quantum Version of Wielandt’s Inequality (2010)](https://doi.org/10.1109/TIT.2010.2054552)

### Composition makes Moyal products associative

**Remember:** Three functions multiply like the three operators they represent.

*True by definition.* MSC 81S30 (Phase-space methods including Wigner distributions, etc. applied to problems in quantum mechanics). arXiv math-ph, hep-th. Level 3: graduate.

**Definition.** Phase space records position and momentum together. Weyl quantization turns a function on this space into an operator by changing coordinates and taking a Fourier transform. For smooth functions that decay rapidly with all derivatives, the resulting integral kernels have the same regularity and decay. The Moyal product sends two functions to operators, composes them, and converts the resulting kernel back to a function.

**Problem.** The Moyal product is associative on smooth rapidly decaying functions on phase space.

**How the definition helps.** In our own explanation, both bracketings turn into the same composition of three operators. Composition keeps their kernels smooth and rapidly decaying, and the Fourier transform lets us recover the functions uniquely. The work goes into showing this definition agrees with the Moyal oscillatory integral, and formally with the derivative expansion. It does not require the derivative series to converge for every such function.

**Wikipedia:** [Moyal product](https://en.wikipedia.org/wiki/Moyal_product). It says: “It is an associative, non-commutative product”

**Sources:**

- [Hilbrand J. Groenewold, On the Principles of Elementary Quantum Mechanics (1946)](https://doi.org/10.1007/978-94-017-6065-2)

### Rank-one Wigner symbols multiply by overlaps

**Remember:** Two rank-one operators meet in one inner product.

*True by definition.* MSC 81S30 (Phase-space methods including Wigner distributions, etc. applied to problems in quantum mechanics). arXiv math-ph. Level 3: graduate.

**Definition.** A Weyl symbol represents an operator by a function of position and momentum. The star product represents composition of operators. For square-integrable wavefunctions ψ and φ on ℝⁿ, the symbol of v ↦ ψ⟨φ,v⟩ is (2πℏ)ⁿ times their Wigner function W(ψ,φ).

**Problem.** The star product of W(ψ,φ) and W(ψ′,φ′) equals ⟨φ,ψ′⟩ W(ψ,φ′)/(2πℏ)ⁿ. The inner product is linear in its second argument.

**How the definition helps.** In our own proof, composing the two rank-one maps leaves exactly one inner product. This avoids evaluating the integral formula for the star product. The work lies in identifying the symbol and proving that the integral represents operator composition.

**Paper or page:** [Phase Space Representation of the Density Operator: Bopp Pseudodifferential Calculus and Moyal Product](https://arxiv.org/abs/2411.14391v2). It says: “Let ψ, ψ′, φ, φ′ be in L²(ℝⁿ).”

**Sources:**

- [Phase Space Representation of the Density Operator: Bopp Pseudodifferential Calculus and Moyal Product](https://arxiv.org/abs/2411.14391v2)

### Wigner functions preserve both marginals

**Remember:** Integrate out either coordinate to recover the probability density of the other.

*True by definition.* MSC 81S30 (Phase-space methods including Wigner distributions, etc. applied to problems in quantum mechanics). arXiv math-ph, quant-ph. Level 3: graduate.

**Definition.** Take a normalized wave function ψ on the real line that decays rapidly with all its derivatives. Choose units with Planck’s reduced constant equal to one. Its Wigner function W(x,p) is the integral over y of exp(−ipy)ψ(x+y/2) times the complex conjugate of ψ(x−y/2), divided by 2π. This joint description of position x and momentum p can take negative values.

**Problem.** Integrating the Wigner function over momentum gives the position probability density. Integrating over position gives the momentum probability density.

**How the definition helps.** The symmetric positions let the same Fourier integral recover both measurement laws. In our own derivation, integrating over momentum applies Fourier inversion at y = 0 and gives \|ψ(x)\|². For the position integral, substitute u = x+y/2 and v = x−y/2. The absolute Jacobian is one, and the exponential separates into factors depending on u and v. The result is the squared modulus of the normalized momentum wave function. A position probability density alone loses the phase needed for that second calculation.

**Wikipedia:** [Wigner quasiprobability distribution](https://en.wikipedia.org/wiki/Wigner_quasiprobability_distribution). It says: “Marginal distributions for x and p are recovered by integrating over p and x respectively.”

**Sources:**

- [Eugene Wigner, On the Quantum Correction For Thermodynamic Equilibrium (1932)](https://doi.org/10.1103/PhysRev.40.749)

### Causal propagation gives spacelike commutation

**Remember:** No retarded or advanced response means no commutator.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras), 81T20. arXiv math-ph, hep-th. Level 3: graduate.

**Definition.** For a free scalar field, average the field against smooth functions of compact support. Define the commutator, the difference between the two product orders, by pairing these functions through i times the retarded minus advanced propagator. The retarded and advanced operators solve the wave equation with response confined to the causal future and past respectively. Use units with ℏ = 1.

**Problem.** On a spacetime admitting a surface for complete initial data, these averaged fields commute when no causal path connects their supports.

**How the definition helps.** In our own proof, the support bounds make both pairings zero whenever the supports are causally disjoint. This gives commutation without evolving commutators from initial data. The work lies in constructing the two solution operators and proving agreement with quantization from initial data.

**nLab:** [causal propagator](https://ncatlab.org/nlab/show/causal+propagator). It says: “its support as a distribution, is, for one of the two arguments fixed, the causal cone of that point”

**Sources:**

- [Christian Bär, Green-Hyperbolic Operators on Globally Hyperbolic Spacetimes](https://doi.org/10.1007/s00220-014-2097-7)

### Complement cyclicity forces local faithfulness

**Remember:** Cyclicity on the outside makes local action faithful.

*Rules out counterexamples.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 3: graduate.

**Definition.** A local net assigns operator algebras to regions, with commuting algebras for spacelike separated regions. Local cyclicity means that applying the algebra of any nonempty open region to the vacuum vector gives a dense set. Global cyclicity asks for density only when using the whole algebra.

**Problem.** For a local net with this property, no nonzero bounded observable in a region with a nonempty spacelike open complement annihilates the vacuum.

**How the definition helps.** An observable killing the vacuum kills its dense orbit under any commuting exterior algebra. Our own counterexample takes two matrix algebras acting on separate two-dimensional tensor factors. A unit product vector is cyclic for the full algebra. A nonzero projection on the first factor can still kill that vector. The Reeh–Schlieder theorem proves local cyclicity under the vacuum field axioms.

**nLab:** [Reeh-Schlieder theorem](https://ncatlab.org/nlab/show/Reeh-Schlieder+theorem). It says: “there cannot be a nonzero localized observable that annihilates the vacuum.”

**Sources:** none listed. No primary source with a working link was found.

### Forward spectrum gives imaginary translations

**Remember:** Future imaginary shifts damp every allowed momentum.

*Rules out counterexamples.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 3: graduate.

**Definition.** Let U(x) = exp(iP·x) be a strongly continuous unitary representation of spacetime translations. Write p = (E,k) for a joint spectral value of its generators P, with energy E and spatial momentum k. The spectrum condition requires E ≥ ‖k‖ for every such p. For y = (s,v), use the pairing p·y = Es − ⟨k,v⟩.

**Problem.** Every coefficient ⟨u,U(x)v⟩ is the continuous real boundary value of a bounded holomorphic function on the tube of complex translations x+iy with s &gt; ‖v‖.

**How the definition helps.** The forward cone makes exp(−p·y) at most one throughout the tube. Our own proof integrates exp(ip·z) against the finite spectral measure for u and v. Inside the tube, exponential decay dominates every polynomial in p locally uniformly, permitting differentiation. Dominated convergence gives the real boundary values. Our own counterexample takes the character exp(ix₁), with zero energy and nonzero spatial momentum. Its continuation grows without bound along future imaginary translations as the first spatial coordinate of y tends to minus infinity.

**nLab:** [Wightman axioms](https://ncatlab.org/nlab/show/Wightman+axioms). It says: “The spectrum of the energy-momentum operator P is concentrated in the closed upper (forward) light cone V⁺.”

**Sources:** none listed. No primary source with a working link was found.

### Spectral ground states survive symmetries

**Remember:** Change the observables, keep the positive generator.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 3: graduate.

**Definition.** Let a unital observable algebra have time evolution αₜ by automorphisms. A ground state has a representation π with a unit vector Ω such that ω(a) = ⟨Ω,π(a)Ω⟩ and the vectors π(a)Ω span a dense subspace. A strongly continuous unitary group Uₜ must implement αₜ, fix Ω, and have nonnegative generator.

**Problem.** An automorphism that commutes with time evolution pulls any ground state back to a ground state.

**How the definition helps.** Composing π with a symmetry of the algebra leaves the same unitary group available. Our own proof keeps Ω and composes π with the given automorphism. Surjectivity preserves the dense span, and commutation with αₜ preserves implementation. The generator therefore stays nonnegative. The cyclic representation tests energy without choosing a common Hamiltonian for all states.

**Paper or page:** [Ground state representations of some non-rational conformal nets](https://arxiv.org/abs/1807.11723v2). It says: “If α commutes with Ad U(τ(t)), then ω ∘ α is a ground state.”

**Sources:**

- [Yoh Tanimoto, Ground State Representations of Some Non-Rational Conformal Nets](https://doi.org/10.3390/sym10090415)

### Split inclusions allow independent states

**Remember:** A type I factor separates the two sets of observables.

*Makes the theorem clean to state or prove.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 3: graduate.

**Definition.** Let M ⊂ N be von Neumann algebras, meaning weakly closed unital adjoint-closed algebras of bounded operators. The inclusion is split if an intermediate algebra acts as all bounded operators on one tensor factor and identically on the other. Write N′ for the bounded operators commuting with N.

**Problem.** Suppose M ⊂ N is split and φ and ψ are normal states on M and N′. Then their generated von Neumann algebra admits a normal state ω satisfying ω(ab) = φ(a)ψ(b) for a ∈ M and b ∈ N′.

**How the definition helps.** The intermediate algebra puts M and N′ on separate tensor factors. Normal states are positive normalized linear functionals preserving suprema of bounded increasing families of positive operators. The split theorem identifies the algebra generated by M and N′ with their spatial tensor product. Our own deduction transfers the product of the given states across this identification.

**nLab:** [split inclusion of von Neumann algebras](https://ncatlab.org/nlab/show/split+inclusion+of+von+Neumann+algebras). It says: “extends to a spatial isomorphism, the tensor product used here is the spatial tensor product.”

**Sources:**

- [Vincenzo Morinelli, Yoh Tanimoto and Mihály Weiner, Conformal Covariance and the Split Property](https://doi.org/10.1007/s00220-017-2961-3)

### Reflected covariance tests Gaussian laws

**Remember:** In a Gaussian law the reflected covariance controls every reflected test.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 3: graduate.

**Definition.** Let X be a centered real Gaussian random distribution on Euclidean space whose law is invariant under time reversal θ. Its reflected covariance on real smooth compactly supported positive-time tests is B(f,g) = 𝔼\[X(f ∘ θ)X(g)\]. Reflection positivity means 𝔼\[conj(F ∘ θ) F\] ≥ 0 for each bounded measurable function F of finitely many positive-time evaluations. Here conj denotes complex conjugation.

**Problem.** The law is reflection positive exactly when B(f,f) ≥ 0 for every such test f.

**How the definition helps.** The covariance criterion replaces all bounded observations by tests linear in the field. Our own argument divides each exponential exp(iX(f)) by its mean. The matrix of reflected expectations then has entries exp(B(f,g)). Products taken entry by entry preserve positive semidefiniteness, so the exponential series preserves it too. Uniqueness of Fourier transforms gives density of these exponentials among square-integrable observations. Conversely, truncating a linear evaluation proves the covariance inequality.

**nLab:** [Osterwalder-Schrader theorem](https://ncatlab.org/nlab/show/Osterwalder-Schrader+theorem). It says: “Let θ : (x, t) ↦ (x, −t) be the time reflection. Then the content of the axiom is: 0 ≤ ⟨θA, A⟩\[L₂\].”

**Sources:**

- [Arici, Becker, Ripken, Saueressig and van Suijlekom, Reflection positivity in higher derivative scalar theories (2018)](https://doi.org/10.1063/1.5027231)

### Reflection positivity survives weak limits

**Remember:** Weak convergence preserves each bounded continuous reflection test.

*True by definition. Confidence: medium.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 3: graduate.

**Definition.** View the field as a random continuous linear functional on rapidly decreasing smooth functions on Euclidean space. Write θ for time reversal. A future test F is a bounded continuous function of finitely many field evaluations on smooth functions supported at positive times. Call a time-symmetric law reflection positive if 𝔼\[conj(F ∘ θ) F\] ≥ 0 for every future test, where conj means complex conjugation.

**Problem.** Any weak limit of such reflection-positive laws is reflection positive. The limit also satisfies the inequality for every bounded measurable function of its positive-time evaluations.

**How the definition helps.** Each reflected product is bounded and continuous, so its expectation passes to the weak limit. Our own proof uses these tests in place of all measurable future observations. Bounded continuous finite-coordinate tests approximate every square-integrable future observation in mean square. Time symmetry gives the same approximation error after reflection. This density argument recovers the measurable tests. The cited construction also needs a weakly convergent subsequence.

**Paper or page:** [Stochastic quantization of two-dimensional P(Φ) Quantum Field Theory](https://arxiv.org/abs/2311.04137). It says: “is invariant under the Euclidean symmetries of the plane and reflection positive.”

**Sources:**

- [Stochastic quantization of two-dimensional P(Φ) Quantum Field Theory](https://arxiv.org/abs/2311.04137)

### Split weights preserve reflection positivity

**Remember:** Put one copy of the weight inside each half of the reflection test.

*True by definition. Confidence: medium.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 3: graduate.

**Definition.** Let θ reverse time under a time-symmetric field law. Reflection positivity means 𝔼\[conj(F ∘ θ) F\] ≥ 0 for every bounded measurable future observation F, where conj means complex conjugation. Choose a bounded nonnegative future observation w. Multiply the law by the product w · (w ∘ θ) and divide by its expectation, assumed positive.

**Problem.** If the original law is reflection positive, the weighted law is reflection positive.

**How the definition helps.** The split weight changes the original test F into the future test wF. Our own proof applies the original inequality to wF and divides by the positive normalizing constant. A general symmetric weight gives no such factorization. The cited action splits formally. Applying this argument to a field model requires a measure with the stated density.

**Wikipedia:** [Schwinger function](https://en.wikipedia.org/wiki/Schwinger_function). It says: “which only depends on φ on the positive half-space (φ₊), and S₋ which only depends upon φ on the negative half-space (φ₋)”

**Sources:** none listed. No primary source with a working link was found.

### Wick subtraction saves the square

**Remember:** Subtract the expected square before summing the modes.

*Rules out counterexamples.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 3: graduate.

**Definition.** On a flat two-dimensional torus, take the centered Gaussian field with covariance (−Δ + m²)⁻¹, where Δ is the Laplacian and m &gt; 0. Keep only Fourier frequencies of length at most n to get a function φₙ. Its Wick square at x is φₙ(x)² − 𝔼\[φₙ(x)²\].

**Problem.** The integrated Wick squares converge in L² of the probability law as the cutoff increases. The uncentered integrated squares diverge to infinity almost surely.

**How the definition helps.** Subtracting the point variance centers each squared Fourier coefficient in the integral. Our own proof uses a real orthonormal Fourier basis with independent Gaussian coefficients. Their variances have divergent sum, but their squared variances have finite sum in two dimensions. The independent centered squares therefore have partial sums converging in mean square and almost surely. Adding back the divergent sum of variances gives the uncentered claim.

**Paper or page:** [An introduction to singular stochastic PDEs: Allen-Cahn equations, metastability and regularity structures](https://arxiv.org/abs/1901.07420). It says: “For every n ∈ ℕ, we have sup(N ≥ 1) 𝔼\[((1/L²) ∫Λ :φ(GFF,N)ⁿ(x): dx)²\] &lt; ∞.”

**Sources:**

- [An introduction to singular stochastic PDEs: Allen-Cahn equations, metastability and regularity structures](https://arxiv.org/abs/1901.07420)

### The covariant derivative commutator gives gauge-covariant field strength

**Remember:** Conjugating two derivatives also conjugates their commutator.

*True by definition.* MSC 81T13 (Yang-Mills and other gauge theories in quantum field theory), 53C05. arXiv hep-th, math-ph. Level 3: graduate.

**Definition.** A gauge change U is a position-dependent change of basis for the internal field values. A covariant derivative D is an ordinary derivative plus a matrix term chosen so that D changes to UDU⁻¹. Define the field strength F in two coordinate directions as their covariant derivative commutator, the difference between the two orders of differentiation.

**Problem.** Under a gauge change, F becomes UFU⁻¹. Therefore the trace of F² does not change.

**How the definition helps.** The commutator definition makes the transformation rule immediate because conjugation respects products and differences (our own). The coordinate definition instead writes F in terms of derivatives and products of the matrix terms. One must then check that the extra derivatives of U cancel (our own). The work goes into the transformation law for the matrix terms of D (our own). One must also show that the commutator multiplies by a matrix rather than differentiating the field.

**Wikipedia:** [Gauge covariant derivative](https://en.wikipedia.org/wiki/Gauge_covariant_derivative). It says: “Unlike the partial derivatives, the gauge covariant derivatives do not commute. However they almost do in the sense that the commutator is not an operator of order 2 but of order 0, i.e. is linear over functions:”

**Sources:** none listed. No primary source with a working link was found.

### The trace of parallel transport makes Wilson loops gauge invariant

**Remember:** Loop transport changes by conjugation, and conjugation does not change its trace.

*True by definition.* MSC 81T13 (Yang-Mills and other gauge theories in quantum field theory), 53C05. arXiv hep-th, math-ph. Level 3: graduate.

**Definition.** Parallel transport compares internal vector spaces along a path using a specified rule for differentiation. A Wilson line is the linear map given by this transport. A Wilson loop is its matrix trace in a chosen representation when the path ends where it began.

**Problem.** A Wilson loop is unchanged by local changes of basis in the internal vector spaces. These are called gauge transformations.

**How the definition helps.** The transport definition gives gauge invariance because the same basis change acts at both ends of a closed path. The transport matrix is therefore conjugated, which leaves its trace unchanged. The path-ordered exponential formula instead expresses the same transport as a series of matrix integrals along the path. The work lies in identifying that formula with parallel transport by solving the linear differential equation along the path (our own).

**Wikipedia:** [Wilson loop](https://en.wikipedia.org/wiki/Wilson_loop). It says: “The trace of closed Wilson lines is a gauge invariant quantity known as the Wilson loop”

**Paper or page:** [Four Dimensional Quantum Yang-Mills Theory for Weak Coupling Strength: Mass Gap Implies Quark Confinement](https://arxiv.org/abs/2406.16881v2). It says: “The Wilson loop is gauge invariant, i.e. W\[γᶠ\](𝐀ᶠ) = W\[γ\](𝐀) for all gauge transforms f”

**Sources:**

- [Kenneth G. Wilson, Confinement of quarks, Physical Review D 10 (1974) 2445](https://doi.org/10.1103/PhysRevD.10.2445)

### Differential extensions localize scale changes

**Remember:** Changing the logarithm leaves only the Laplacian of a fundamental solution.

*True by definition. Confidence: medium.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 3: graduate.

**Definition.** The massless scalar bubble has kernel \|x\|⁻⁴ away from zero in four Euclidean dimensions, up to a constant set here to one. For μ &gt; 0, define its extension T(μ) as −¼ times the distributional Laplacian of log(μ²\|x\|²)/\|x\|². The function being differentiated is locally integrable, so its Laplacian acts on tests by moving both derivatives onto the test.

**Problem.** For any positive scales μ and ν, T(ν) − T(μ) = 2π² log(ν/μ) δ₀, where δ₀ evaluates a test at zero.

**How the definition helps.** In our own calculation, defining the extension by differentiation reduces the scale change to the Laplacian of \|x\|⁻². Subtracting the logarithms leaves the constant 2 log(ν/μ). The fundamental solution identity Δ\|x\|⁻² = −4π²δ₀ supplies the coefficient. Direct differentiation away from zero verifies that T(μ) extends the original kernel. This avoids choosing a separate subtraction on each test function.

**nLab:** [differential renormalization](https://ncatlab.org/nlab/show/differential+renormalization). It says: “makes choices for defining time-ordered products/Feynman amplitudes at coincident interaction vertices.”

**Sources:**

- [Daniel Z. Freedman, Kenneth Johnson and José I. Latorre, Differential Regularization and Renormalization (1992)](https://doi.org/10.1016/0550-3213(92)90240-C)

### Automorphisms count Wick pairings

**Remember:** Divide by the permutations that leave the pairing unchanged.

*True by definition.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 3: graduate.

**Definition.** Expand the unnormalized Gaussian expectation of the exponential of a formal scalar interaction by pairing field occurrences, as in the Gaussian moment formula. Divide by the factorial of each vertex degree and the factorial of each vertex multiplicity. A diagram pairs edge ends attached to vertices and keeps each external label fixed. Its automorphisms permute identical vertices and their edge ends while preserving all pairings and external labels.

**Problem.** After coupling constants and covariance factors are removed, each diagram has coefficient 1/\|Aut(G)\|, where Aut(G) is its automorphism group.

**How the definition helps.** In our own proof, defining a diagram as an orbit of labelled pairings makes its coefficient an orbit count. The relabelling group has order equal to the product of all the factorials in the expansion. Its stabilizer is exactly Aut(G), so the orbit–stabilizer formula gives the coefficient.

**Wikipedia:** [Feynman diagram](https://en.wikipedia.org/wiki/Feynman_diagram). It says: “the contribution of each Feynman diagram must be divided by the order of its group of automorphisms”

**Sources:** none listed. No primary source with a working link was found.

### Projective gauges allow partial sums

**Remember:** Each allowed normalization selects one point on every positive ray.

*True by definition.* MSC 81T18 (Feynman diagrams), 81Q30. arXiv hep-th, math-ph. Level 3: graduate.

**Definition.** Treat positive parameter vectors that differ by a common scale as one ray. In n variables, let f have degree −n under scaling. Insert the radial vector x into the first slot of the coordinate volume form to obtain ω. Use fω as the Feynman integrand on rays.

**Problem.** For an absolutely convergent integral, choose any nonempty subset of the parameters and set their sum to one. With the orientation induced from the rays, integration gives the same value for every subset.

**How the definition helps.** Integration on rays turns each normalization into a choice of representative. In our own proof, fω is scale invariant and vanishes whenever one argument is radial. It therefore defines a form on rays, and each normalization picks one point per ray. The comparison with the usual simplex formula comes from setting the sum of all parameters to one.

**Wikipedia:** [Feynman parametrization](https://en.wikipedia.org/wiki/Feynman_parametrization). It says: “the sum in the Dirac delta function can be reduced to a subset of Feynman parameters.”

**Sources:**

- [Hung Cheng and Tai Tsun Wu, Expanding Protons: Scattering at High Energies](https://openlibrary.org/works/OL5274534W)

### Wick ordering removes self-contractions

**Remember:** Subtract each vertex variance before expanding the joint exponential.

*Rules out counterexamples.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 3: graduate.

**Definition.** Assign one centered variable to each vertex and assume the variables are jointly Gaussian. For a variable X, its nth Wick power is n! times the coefficient of tⁿ in exp(tX − t² Var(X)/2). A pairing groups all field occurrences into pairs and contributes the product of their covariances.

**Problem.** The expectation of a product of Wick powers equals the sum over pairings that join different vertices. An ordinary square at a single vertex instead has expectation Var(X).

**How the definition helps.** In our own proof, subtracting the variance term cancels all within-vertex terms in the joint Gaussian exponential. Its remaining quadratic terms pair different vertices. Comparing coefficients gives the claimed pairing formula, including the quoted two-vertex case.

**Paper or page:** [Renormalising Feynman diagrams with multi-indices](https://arxiv.org/abs/2501.08151v3). It says: “Let X and Y be jointly Gaussian centred random variables. Then for any n,m ≥ 0 one has 𝔼\[Hₙ(X)Hₘ(Y)\] = δₘⁿ n!𝔼\[XY\]ⁿ”

**Sources:**

- [Yvain Bruned and Yingtong Hou, Renormalising Feynman diagrams with multi-indices](https://arxiv.org/abs/2501.08151v3)

### Contractions turn time ordering into multiplication

**Remember:** The second derivative supplies the contraction between the two factors.

*True by definition.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 3: graduate.

**Definition.** Use polynomial functions of a free scalar field before imposing its equation, with smooth compactly supported kernels for all derivatives. Let C contract the second field derivative with the symmetric Feynman kernel, the propagator used for time ordering. Set T = exp(ℏC/2), where ℏ is a formal parameter. Time-ordered multiplication sums all pairings between factors, weighting each contracted pair by ℏ times the same kernel.

**Problem.** For regular polynomial functionals F and G, the time-ordered product of TF and TG equals T(FG). Consequently the time-ordered product is associative.

**How the definition helps.** The exponential collects all contractions in a single operator and turns the contraction sum into ordinary multiplication under its inverse (our own explanation). The product rule splits C into contractions within each factor and twice the contraction between factors. These operators commute, so their exponentials factor. The inverse is exp(−ℏC/2), and the series terminate on each polynomial.

**nLab:** [Wick algebra](https://ncatlab.org/nlab/show/Wick+algebra). It says: “time-ordered product on regular polynomial observables isomorphic to pointwise product”

**Sources:** none listed. No primary source with a working link was found.

### Field equations remove commutator degeneracy

**Remember:** Only the field equation makes a test commute with every test.

*Rules out counterexamples.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 3: graduate.

**Definition.** Let P be the real Klein–Gordon operator on a globally hyperbolic spacetime without boundary. Write E for its retarded solution operator minus its advanced one. Label a smeared field by a compactly supported smooth real function f, identifying f with f + Ph for every compactly supported smooth h.

**Problem.** The integral of f times Eg against spacetime volume gives a well-defined nondegenerate skew bilinear form on these test classes.

**How the definition helps.** The field equation removes precisely the tests that pair to zero with every other test (our own explanation). Formal self-adjointness of P makes E skew-adjoint on tests, so zero pairing against all g means Ef = 0. The exact sequence for the causal propagator identifies this kernel with the image of P on compactly supported tests. Before quotienting, every nonzero test Ph lies in the radical.

**nLab:** [Green hyperbolic partial differential equation](https://ncatlab.org/nlab/show/Green+hyperbolic+partial+differential+equation). It says: “the quotient space of the compactly supported dual sections by the image of P:”

**Sources:**

- [Bär, Green-Hyperbolic Operators on Globally Hyperbolic Spacetimes](https://doi.org/10.1007/s00220-014-2097-7)

### Hadamard kernels admit powers

**Remember:** Future lightlike covectors add without cancelling.

*Rules out counterexamples.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds), 35A27. arXiv math-ph. Level 3: graduate.

**Definition.** The wave front set of a distribution records its singular points and directions. For a scalar Hadamard two-point function, these directions are exactly the pairs (k, −k′) along light rays. Here k is future-directed and lightlike, and parallel transport along the ray takes k to k′.

**Problem.** On a globally hyperbolic spacetime without boundary, every positive integer power of a free scalar Hadamard two-point function exists as a distribution.

**How the definition helps.** Future-directed covectors cannot sum to zero, so Hörmander’s multiplication theorem applies to every finite power (our own argument). The massless causal propagator in four-dimensional flat spacetime has both orientations. Near a nonzero point on the light cone it contains a delta distribution transverse to the cone. Squaring smooth approximations to that delta gives no distributional limit.

**nLab:** [Hadamard distribution](https://ncatlab.org/nlab/show/Hadamard+distribution), [wavefront set](https://ncatlab.org/nlab/show/wavefront+set). It says: “the wave front set is one causal half that of the causal propagator:”

**Sources:**

- [Radzikowski, Micro-local approach to the Hadamard condition in quantum field theory on curved space-time](https://doi.org/10.1007/BF02100096)

### Hadamard kernels restrict to Cauchy data

**Remember:** Lightlike singular directions cannot be normal to a spacelike surface.

*Makes the theorem clean to state or prove.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds), 35A27. arXiv math-ph. Level 3: graduate.

**Definition.** The wave front set of a distribution records its singular points and directions. For a scalar Hadamard two-point function, these directions are exactly the pairs (k, −k′) along light rays. Here k is future-directed and lightlike, and parallel transport along the ray takes k to k′.

**Problem.** Consider a free scalar field on a globally hyperbolic spacetime without boundary. Let Σ be a smooth spacelike surface meeting every inextendible causal curve exactly once. The Hadamard two-point function and its normal derivatives in either argument restrict to distributions on Σ × Σ.

**How the definition helps.** The Hadamard condition rules out singular directions normal to Σ × Σ (our own argument). Each nonzero normal to Σ is timelike, whereas each singular pair has two nonzero lightlike entries. Differentiation adds no singular directions. Hörmander’s restriction theorem then gives the result.

**nLab:** [Hadamard distribution](https://ncatlab.org/nlab/show/Hadamard+distribution). It says: “the wave front set is one causal half that of the causal propagator:”

**Sources:**

- [Radzikowski, Micro-local approach to the Hadamard condition in quantum field theory on curved space-time](https://doi.org/10.1007/BF02100096)

### The commutator completes Hadamard directions

**Remember:** The commutator supplies every singular direction that the transpose cannot supply.

*True by definition.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds), 35A27. arXiv math-ph. Level 3: graduate.

**Definition.** The wave front set records where a distribution is singular and in which directions. Let C consist of pairs (k, −k′) with k future-directed lightlike and k′ its parallel transport along a light ray. Test a scalar two-point distribution W by requiring its wave front set to lie in C.

**Problem.** On a globally hyperbolic spacetime without boundary, let E be the Klein–Gordon causal propagator, the difference between its retarded and advanced solution operators. If W minus its transpose equals iE, the inclusion test implies that the wave front set of W equals C.

**How the definition helps.** Transposition reverses the allowed time orientation, so only W can supply the future half of the commutator (our own argument). The wave front set of E contains every pair in C. Each such pair must occur in W or its transpose, since subtraction creates no singular directions. Radzikowski’s theorem connects this directional test to the traditional local expansion.

**nLab:** [Hadamard distribution](https://ncatlab.org/nlab/show/Hadamard+distribution). It says: “the wave front set is one causal half that of the causal propagator:”

**Sources:**

- [Radzikowski, Micro-local approach to the Hadamard condition in quantum field theory on curved space-time](https://doi.org/10.1007/BF02100096)

### Sewing gives an annulus semigroup

**Remember:** Lengths add under sewing, so the operators multiply.

*True by definition.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics). arXiv math-ph. Level 3: graduate.

**Definition.** In Segal’s formulation, assign a state space to a circle and an operator to an annulus with parametrized boundary circles. Sewing matches an outgoing circle to an incoming one, and the operator assignment respects composition. Use the anomaly-free version, so this rule has no scalar correction. A presentation by local correlation functions does not start with these annulus operators.

**Problem.** Let T(t) denote the operator for a round annulus with radii exp(−t) and 1 and standard angular parametrizations. Then T(s + t) = T(s)T(t) for all s,t &gt; 0.

**How the definition helps.** Sewing multiplies the radius ratios, so the composition axiom turns addition of lengths into multiplication of operators. Our own calculation rescales the second annulus to match the first along their common boundary. Constructing operators from local field data requires a separate sewing theorem.

**nLab:** [conformal cobordism category](https://ncatlab.org/nlab/show/conformal+cobordism+category). It says: “One way to axiomatize conformal field theory (see there) in FQFT-style is as a suitable monoidal functor on a category of conformal cobordisms”

**Sources:**

- [Graeme Segal, The Definition of Conformal Field Theory](https://doi.org/10.1017/CBO9780511526398.019)

### Integer levels preserve Chern–Simons phases

**Remember:** Integer levels make a winding change invisible to the phase.

*Rules out counterexamples.* MSC 81T45 (Topological field theories in quantum mechanics), 81T13. arXiv hep-th, math-ph. Level 3: graduate.

**Definition.** In SU(2) Chern–Simons theory, the level k multiplies an action measuring a gauge field on an oriented three-dimensional space. SU(2) consists of two-by-two unitary matrices with determinant one. Normalize the action so a change of gauge of degree n shifts it by 2πkn. The quantum phase is the exponential of i times the action.

**Problem.** On a closed oriented three-manifold the phase is invariant under changes of gauge at integer level. On the three-sphere, identified with SU(2), the identity map has degree one and reverses the phase at level one-half.

**How the definition helps.** In our own calculation, integer level makes the extra phase exp(2πikn) equal to one for every integer degree n. The work lies in deriving the action shift and identifying n as the winding number of the gauge transformation.

**nLab:** [level (Chern-Simons theory)](https://ncatlab.org/nlab/show/level+%28Chern-Simons+theory%29). It says: “only for certain discrete choices of the scale (a global prefactor) of the Lagrangian.”

**Wikipedia:** [Chern–Simons theory](https://en.wikipedia.org/wiki/Chern%E2%80%93Simons_theory). It says: “The action is gauge dependent, however the partition function of the quantum theory is well-defined when the level is an integer”

**Sources:**

- [Edward Witten, Quantum field theory and the Jones polynomial (1989)](https://doi.org/10.1007/BF01217730)

### Unitary conjugation preserves spectral actions

**Remember:** Unitary conjugation preserves the spectral action at every scale.

*True by definition.* MSC 81T75 (Noncommutative geometry methods in quantum field theory), 58B34. arXiv math-ph, math.OA. Level 3: graduate.

**Definition.** Let D be a self-adjoint Dirac operator and Λ a positive scale. For a bounded Borel function f such that f(D/Λ) is trace class, define the bosonic spectral action as Tr f(D/Λ). Trace class means the singular values have finite sum.

**Problem.** Unitary conjugacy of two Dirac operators implies equality of their bosonic spectral actions at each scale where the trace exists.

**How the definition helps.** The spectral formula makes invariance follow directly from invariance of the trace (our own argument). Applying f to a unitarily conjugated operator conjugates f(D/Λ) by the same unitary. The work in comparing this action with local curvature formulas lies in the asymptotic expansion of the trace.

**nLab:** [spectral action](https://ncatlab.org/nlab/show/spectral+action). It says: “It is essentially a regularized heat kernel expansion of the Dirac operator-like operator in the spectral triple.”

**Sources:**

- [Chamseddine and Connes, The Spectral Action Principle](https://doi.org/10.1007/s002200050126)

### Braids allow arbitrary exchange phases

**Remember:** A double exchange need not undo a phase.

*Makes the theorem clean to state or prove.* MSC 81V27 (Anyons). arXiv quant-ph, hep-th. Level 3: graduate.

**Definition.** A braid records a motion of indistinguishable particles in the plane, up to continuous deformation without collisions and with fixed endpoints. A scalar exchange rule assigns each braid a complex number of modulus one and multiplies these numbers when motions follow one another. A permutation records only the final arrangement.

**Problem.** For two or more particles in the plane, every unit complex number gives a consistent scalar exchange phase. A phase descends to a permutation rule only if it is +1 or −1.

**How the definition helps.** Braids retain the winding of an exchange, so two successive exchanges can carry a nontrivial phase. In our own construction, assign the same phase to each basic counterclockwise exchange of adjacent particles and its inverse to the reverse exchange. Both sides of each braid relation then have the same phase. A permutation rule also requires each basic exchange to square to the identity, leaving just the signs. The topological theorem identifies loops of unordered configurations of distinct points in the plane with braids up to deformation.

**nLab:** [braid group statistics](https://ncatlab.org/nlab/show/braid+group+statistics). It says: “which allows one to regard any linear representation of the symmetric group also as a particular braid group representation.”

**Sources:**

- [Frank Wilczek, Quantum Mechanics of Fractional-Spin Particles (1982)](https://doi.org/10.1103/PhysRevLett.49.957)

### Boson Fock spaces factor

**Remember:** One-particle direct sums become many-particle tensor products.

*True by definition. Confidence: medium.* MSC 81V73 (Bosonic systems in quantum theory). arXiv math-ph, quant-ph. Level 3: graduate.

**Definition.** Bosons are particles whose states stay unchanged when particles exchange places. Their Fock space is the Hilbert space direct sum of the symmetric tensor powers of the one-particle space, including degree zero. In an orthonormal basis, an occupation vector records how many particles occupy each basis state.

**Problem.** The bosonic Fock space of a direct sum of two one-particle spaces is naturally unitarily isomorphic to the tensor product of their Fock spaces.

**How the definition helps.** Counting particles in a combined basis gives exactly one occupation vector for each pair of occupation vectors in the two separate bases. In our own proof, choose orthonormal bases in both one-particle spaces and take their union in the direct sum. Map each normalized occupation vector to the tensor product indexed by its two lists of counts. This matches orthonormal bases, so the map extends to a unitary. The map agrees with normalized symmetrization of tensors from the two spaces, which makes it independent of the chosen bases. The algebraic direct-sum formula alone does not determine these Hilbert space norms.

**nLab:** [Fock space](https://ncatlab.org/nlab/show/Fock+space). It says: “In physics the symmetric tensor algebra on a space of quantum states of some quantum mechanical system is called its bosonic Fock space.”

**Sources:** none listed. No primary source with a working link was found.

### Inside the Bohr topos, Gleason's theorem says quantum states are classical states

**Remember:** Linear on each commuting piece is linear inside the topos.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81P10 (Logical foundations of quantum mechanics; quantum logic (quantum-theoretic aspects)), 18B25, 46L30. arXiv quant-ph, math.OA. Level 4: research.

**Definition.** The Bohr topos of a C\*-algebra A is the topos of presheaves on the commutative subalgebras of A. In it, A becomes an internal commutative C\*-algebra. Seen from outside, a state of this internal algebra is a function on A that is linear on each commutative subalgebra (a quasi-state).

**Problem.** Gleason's theorem: let A = B(H), the bounded operators on a separable Hilbert space H of dimension greater than 2. Then every quasi-state is a true linear state. A quasi-state is positive, takes the value 1 at the identity, and is linear on each commutative subalgebra.

**How the definition helps.** The topos gives Gleason's theorem a clean form. A map that keeps the structure on each commutative subalgebra is the same as an internal map that keeps the structure in the presheaf topos over those subalgebras. So Gleason's theorem becomes this statement: the quantum states on A correspond one to one to the classical states of the internal commutative algebra. Gleason's analytic argument is still the proof, and the topos only gives it a clean form.

**nLab:** [Bohr topos](https://ncatlab.org/nlab/show/Bohr+topos). It says: “Hence we have the following direct topos-theoretic equivalent reformulation of Gleason's theorem.”

**Sources:**

- [Chris Heunen, Nicolaas P. Landsman, Bas Spitters, Bohrification of operator algebras and quantum logic, Synthese 186 (2012) 719–752, arXiv:0905.2275](https://arxiv.org/abs/0905.2275)
- [Andrew M. Gleason, Measures on the closed subspaces of a Hilbert space, Journal of Mathematics and Mechanics (Indiana Univ. Math. J.) 6 (1957) 885–893](http://www.iumj.indiana.edu/IUMJ/FULLTEXT/1957/6/56050)

### Kochen–Specker says the spectral presheaf has no global elements

**Remember:** A hidden-variable assignment would be a point of quantum phase space; there is none.

*Makes the theorem clean to state or prove.* MSC 81P10 (Logical foundations of quantum mechanics; quantum logic (quantum-theoretic aspects)), 18B25, 46L05. arXiv quant-ph, math.OA. Level 4: research.

**Definition.** Let B(H) be the algebra of bounded operators on a Hilbert space H. Its spectral presheaf assigns to each commutative subalgebra V its Gelfand spectrum, the set of nonzero multiplicative linear maps V → ℂ. To each inclusion of subalgebras it assigns the restriction map. It is a presheaf on the poset of commutative subalgebras, which is the setting of the Bohr topos.

**Problem.** The Kochen–Specker theorem is about quantum systems whose Hilbert space has dimension greater than 2. It says that one cannot assign values to all observables and also keep the functional relations between commuting observables.

**How the definition helps.** The definition turns the theorem into the statement that one object has no global elements. A global element of the spectral presheaf is a choice of value assignment on each commutative subalgebra that is compatible with inclusions. Such a choice is exactly a hidden-variable valuation. So the Kochen–Specker theorem becomes the short statement that the spectral presheaf has no global elements. Equivalently, the internal Gelfand spectrum has no global point. This is a reformulation, and the combinatorial content of Kochen–Specker is still needed to prove it.

**nLab:** [Kochen-Specker theorem](https://ncatlab.org/nlab/show/Kochen-Specker+theorem), [Bohr topos](https://ncatlab.org/nlab/show/Bohr+topos). It says: “it was observed that the Kochen-Specker theorem is equivalent to the statement that the spectral presheaf has no global elements”

**Sources:**

- [C. J. Isham, J. Butterfield, A topos perspective on the Kochen-Specker theorem: I. Quantum states as generalized valuations, International Journal of Theoretical Physics 37 (1998) 2669–2733; arXiv:quant-ph/9803055](https://arxiv.org/abs/quant-ph/9803055)
- [Simon Kochen, Ernst Specker, The problem of hidden variables in quantum mechanics, Journal of Mathematics and Mechanics 17 (1967) 59–87](https://doi.org/10.1512/iumj.1968.17.17004)

### Least projections above each effect give a unique spectral resolution

**Remember:** Least covering projections let abstract effects have spectral cuts.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81P10 (Logical foundations of quantum mechanics; quantum logic (quantum-theoretic aspects)), 47B15. arXiv quant-ph, math.OA. Level 4: research.

**Definition.** An effect algebra models quantum yes-or-no measurements with a partial sum for compatible alternatives. A compression base is a family of maps that act like the compressions a ↦ pap of operator algebras; each map corresponds to a projection. The algebra is spectral if every element has a least projection above it and a comparability rule holds.

**Problem.** In an Archimedean spectral effect algebra, every element has a unique rational spectral resolution. This is a family of projections indexed by rational thresholds, like the spectral projections of a self-adjoint operator.

**How the definition helps.** The definition supplies both a way to compare an element with a threshold and projections to record the result. In our own words, the cover selects a least projection instead of an arbitrary upper bound. It takes work to show that the resulting cuts fit together and are unique.

**Paper or page:** [Spectral resolutions in effect algebras](https://arxiv.org/abs/2111.02166v3). It says: “It is shown that in a spectral archimedean effect algebra E, every a ∈ E admits a unique rational spectral resolution and its properties are studied.”

**Sources:**

- [Anna Jenčová, Sylvia Pulmannová, Spectral resolutions in effect algebras, arXiv:2111.02166v3 (2022), Quantum 6, 849 (2022)](https://arxiv.org/abs/2111.02166v3)

### Conditional min-entropy as guessing probability cannot drop when the evidence is processed

**Remember:** Spoiling the evidence cannot improve the best guess.

*True by definition. Confidence: medium.* MSC 81P17 (Quantum entropies), 81P47. arXiv quant-ph, cs.IT. Level 4: research.

**Definition.** Take a classical label and a quantum system correlated with it. Define the conditional min-entropy as minus the logarithm of the best probability of guessing the label by measuring the system. The usual definition finds the smallest number for which a certain inequality between positive matrices holds.

**Problem.** A quantum channel applied to the guessing system cannot lower the label's conditional min-entropy.

**How the definition helps.** With the guessing definition, any guess after the channel is also a guess before it, so the best guess cannot improve. The work goes into the theorem of König, Renner and Schaffner that the guessing definition agrees with the matrix definition. That proof uses duality for optimization over positive matrices. The argument is our own; the source proves the agreement.

**Wikipedia:** [Min-entropy](https://en.wikipedia.org/wiki/Min-entropy). It says: “when using an optimal measurement strategy”

**Sources:**

- [Robert König, Renato Renner and Christian Schaffner, The Operational Meaning of Min- and Max-Entropy (2009)](https://doi.org/10.1109/TIT.2009.2025545)

### A graph test for independence that works in cyclic quantum causal models

**Remember:** Cut the loops and account for the conditioning introduced by the cuts.

*Makes the theorem clean to state or prove.* MSC 81P45 (Quantum information, communication, networks (quantum-theoretic aspects)), 62H22. arXiv quant-ph, cs.AI. Level 4: research.

**Definition.** The probability rule splits edges to turn a graph with feedback into one without cycles. It replaces each split link by a transfer protocol and conditions on success. The p-separation rule tests ordinary graph separation in the resulting graphs, including the variables selected on.

**Problem.** For the finite-dimensional causal models in the paper, p-separation characterizes the conditional independences forced by the graph.

**How the definition helps.** The construction lets the graph test account for both the broken loops and the selection events. In our own words, ignoring those events would miss the dependencies that conditioning can create. The remaining work is to prove that the probability rule is independent of implementation and that every unblocked case has a model showing dependence.

**Paper or page:** [Cyclic quantum causal modelling with a graph separation theorem](https://arxiv.org/abs/2502.04168v2). It says: “We address these challenges by introducing a robust probability rule and a novel graph-separation property, p-separation, which we prove to be sound and complete for all such models.”

**Sources:**

- [Carla Ferradini, Victor Gitton, V. Vilasini, Cyclic quantum causal modelling with a graph separation theorem, arXiv:2502.04168v2 (2025)](https://arxiv.org/abs/2502.04168v2)

### An optimization-defined divergence proves a chain rule for sandwiched Rényi divergence

**Remember:** Optimize over a positive matrix, then pass to many copies.

*Makes the theorem clean to state or prove.* MSC 81P45 (Quantum information, communication, networks (quantum-theoretic aspects)), 94A17, 47A64. arXiv quant-ph, math.IT. Level 4: research.

**Definition.** A quantum Rényi divergence measures how different two quantum states are. The new divergence minimizes the trace of a positive matrix under a constraint. Its weighted geometric mean with the second state must dominate the first in matrix order. Regularization takes the limiting divergence per copy for many identical copies.

**Problem.** For orders α above one, the regularization of the new divergence equals the sandwiched Rényi divergence. This gives a chain rule for the sandwiched divergence. It bounds the divergence between two channel outputs by the input divergence plus a channel term.

**How the definition helps.** The optimization puts matrix inequalities in the definition, where they help prove the chain rule. In our own words, feasible matrices serve as witnesses for upper bounds. The main work is to prove the chain rule for the new divergence and identify its regularization. These steps let the argument reach the sandwiched divergence.

**Paper or page:** [Defining quantum divergences via convex optimization](https://arxiv.org/abs/2007.12576v2). It says: “An important property of this new divergence is that its regularization is equal to the sandwiched (also known as the minimal) quantum Rényi divergence.”

**Sources:**

- [Hamza Fawzi, Omar Fawzi, Defining quantum divergences via convex optimization, arXiv:2007.12576v2 (2021), Quantum 5, 387 (2021)](https://arxiv.org/abs/2007.12576v2)

### Keeping the prior state makes the Petz recovery map compose correctly

**Remember:** Keep the prior with the channel to compose inferences backwards.

*Makes the theorem clean to state or prove.* MSC 81P45 (Quantum information, communication, networks (quantum-theoretic aspects)), 18A22. arXiv quant-ph, math.CT. Level 4: research.

**Definition.** A quantum channel sends input states to output states. Here an arrow includes an input state as its prior and the channel's output as its target state. A retrodiction functor sends each arrow backwards and reverses the order of composition.

**Problem.** In the paper's category of quantum channels paired with states, the original Petz recovery map defines a retrodiction functor. Averaged rotated Petz maps, including the universal recovery map, do not respect composition.

**How the definition helps.** Including the prior gives the backward rule the state it needs at each step. In our own words, the intermediate output of one channel becomes the prior for the next. The original Petz map still has to satisfy the functor laws. A rule that works for each channel separately need not satisfy them.

**Paper or page:** [Axioms for retrodiction: achieving time-reversal symmetry with a prior](https://arxiv.org/abs/2210.13531v2). It says: “such works defined time-reversal symmetry on the category of quantum channels alone, whereas we define it on the category of quantum channels and quantum states.”

**Sources:**

- [Arthur J. Parzygnat, Francesco Buscemi, Axioms for retrodiction: achieving time-reversal symmetry with a prior, arXiv:2210.13531v2 (2023), Quantum 7, 1013 (2023)](https://arxiv.org/abs/2210.13531v2)

### A distinguished extension gives Dirac–Coulomb operators a min-max principle

**Remember:** Pick the extension that fits the gap, and min-max finds its eigenvalues.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81Q10 (Selfadjoint operator theory in quantum theory, including spectral analysis), 47B25, 47A75. arXiv math.SP, math-ph. Level 4: research.

**Definition.** The Dirac–Coulomb operator H describes a relativistic electron near a nucleus. On smooth functions that vanish near the nucleus it is symmetric, meaning ⟨Hu, v⟩ = ⟨u, Hv⟩, but it is unbounded above and below. The paper uses a block decomposition of the operator for an orthogonal splitting of the Hilbert space. From this it picks out one self-adjoint extension, called distinguished, that has a gap in its spectrum.

**Problem.** The min-max principle writes the eigenvalues of an operator as minima of maxima of its energy over subspaces. The usual principle needs an operator bounded from below, and the Dirac operator is not. One wants a canonical self-adjoint operator and a min-max formula for its eigenvalues in the gap.

**How the definition helps.** The extension is built from the block decomposition, so the min-max levels describe its spectrum in the gap (our own reading). The abstract says this was done before only under technical conditions. The paper uses a geometric strategy instead and needs only minimal assumptions. The result covers sign-changing potentials and molecules with any number of nuclei. Each nucleus must have atomic number at most 137. The proof of the min-max formula for this extension is the main work (our own).

**Paper or page:** [Distinguished self-adjoint extension and eigenvalues of operators with gaps. Application to Dirac-Coulomb operators](https://arxiv.org/abs/2206.11679). It says: “In this paper we define a distinguished self-adjoint extension with a spectral gap and characterize its eigenvalues in that gap by a min-max principle. This has been done in the past under technical conditions.”

**Sources:**

- [Jean Dolbeault, Maria J. Esteban, Eric Séré, Distinguished self-adjoint extension and eigenvalues of operators with gaps. Application to Dirac-Coulomb operators, J. Spectr. Theory 13 (2023), no. 2, 491–524, arXiv:2206.11679](https://arxiv.org/abs/2206.11679)

### Metaplectic generators preserve oscillator levels

**Remember:** Commuting symmetries preserve each energy level.

*True by definition.* MSC 81R05 (Finite-dimensional groups and algebras motivated by physics and their representations), 81Q05. arXiv math-ph. Level 4: research.

**Definition.** The isotropic harmonic oscillator has the same frequency in every direction. Linear changes of position and momentum preserving their standard symplectic form act on wavefunctions through a double cover, the metaplectic group. Each change has two lifts to this group. Differentiate the lifted unitary group action to obtain the quantum generators.

**Problem.** The quantum generator for an element of the unitary Lie algebra preserves every eigenspace of the isotropic harmonic oscillator.

**How the definition helps.** In our own proof, the oscillator evolution acts by scalar rotations on the classical coordinates, so its lifted flow commutes with every lifted unitary transformation. Differentiating preserves each oscillator energy space. This avoids computing commutators of unbounded differential operators directly. The work lies in identifying these generators with the operators obtained by quantizing the classical quadratic functions.

**Paper or page:** [Explicit Spectral Analysis for Operators Representing the unitary group 𝕌(d) and its Lie algebra 𝔲(d) through the Metaplectic Representation and Weyl Quantization](https://arxiv.org/abs/2412.18728v2). It says: “is essentially selfadjoint and it strongly commutes with H₀.”

**Sources:**

- [Explicit Spectral Analysis for Operators Representing the unitary group 𝕌(d) and its Lie algebra 𝔲(d) through the Metaplectic Representation and Weyl Quantization](https://arxiv.org/abs/2412.18728v2)

### Monomials give metaplectic eigenvalues

**Remember:** A monomial multiplies the eigenvalues of its factors.

*True by definition.* MSC 81R05 (Finite-dimensional groups and algebras motivated by physics and their representations), 81Q10. arXiv math-ph. Level 4: research.

**Definition.** The Bargmann transform represents oscillator wavefunctions by holomorphic functions with a Gaussian norm. A unitary matrix g acts by substituting g⁻¹z for z and multiplying by an inverse square root of its determinant. The two choices of square root distinguish the two lifts of g in the metaplectic representation.

**Problem.** The eigenvalues of the lifted unitary action are products of nonnegative powers of the conjugate matrix eigenvalues, times the chosen determinant factor.

**How the definition helps.** In our own proof, diagonalizing g makes every monomial an eigenvector for inverse substitution. The factors from its variables multiply, and the determinant supplies the common scalar. The monomials form an orthogonal basis, so every eigenvalue appears this way. The Bargmann transform identifies this action with the original operator on wavefunctions.

**Paper or page:** [Explicit Spectral Analysis for Operators Representing the unitary group 𝕌(d) and its Lie algebra 𝔲(d) through the Metaplectic Representation and Weyl Quantization](https://arxiv.org/abs/2412.18728v2). It says: “Then, the point spectrum of μ(g) is given by”

**Sources:**

- [Explicit Spectral Analysis for Operators Representing the unitary group 𝕌(d) and its Lie algebra 𝔲(d) through the Metaplectic Representation and Weyl Quantization](https://arxiv.org/abs/2412.18728v2)

### Biunitary averaging preserves trace

**Remember:** The second unitary identity is the one the trace needs.

*Rules out counterexamples.* MSC 81R50 (Quantum groups and related algebraic methods applied to problems in quantum theory), 81R15. arXiv math-ph, quant-ph. Level 4: research.

**Definition.** Let U be a unitary matrix whose entries are operators on a finite-dimensional Hilbert space K. Require the matrix formed by taking each entry’s adjoint to be unitary too. For an operator x on K, form U(I ⊗ x)U\*. Apply a state, a positive normalized linear functional, to the matrix index while leaving the operators on K in place.

**Problem.** With both unitarity conditions, the averaged map preserves the ordinary trace on K. Without the second condition, swapping two equal-dimensional factors gives x ↦ φ(x)I, where φ is the averaging state.

**How the definition helps.** In our own proof, the second unitarity condition supplies exactly the sums needed after taking the trace on K. Cyclically moving the last factor of each term to the front produces sums of entry products in reversed order. Ordinary unitarity controls the forward order. The second condition reduces the partial trace to the identity matrix times the trace of x. Applying the state then preserves that trace. In our own swap example, a state concentrated on one basis vector fails to preserve the trace in dimension two.

**Paper or page:** [Quantum expanders and property (T) discrete quantum groups](https://arxiv.org/abs/2502.01974v1). It says: “If u is a bi-unitary (e.g. if 𝐆 is of Kac type ⇔ Ĝ is unimodular), then Φ is trace-preserving.”

**Sources:**

- [Quantum expanders and property (T) discrete quantum groups](https://arxiv.org/abs/2502.01974v1)

### Canonical split entropy respects symmetry

**Remember:** The vacuum picks a factor that moves with the inclusion.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** Let N ⊂ M be weakly closed operator algebras with scalar centers and an intermediate algebra isomorphic to all bounded operators on a Hilbert space. Write A = N ∨ M′ for the algebra generated by N and the operators commuting with M. For B equal to N, M or A, require BΩ dense and xΩ = 0 to imply x = 0 for x ∈ B. Let J be the antiunitary in the polar decomposition of the closure of xΩ ↦ x\*Ω for x ∈ A.

**Problem.** Set F = N ∨ JNJ and let D be the density matrix of the unit vector state of Ω restricted to F. A unitary carrying Ω, N and M to another such triple preserves the entropy −Tr(D log D), including infinite values.

**How the definition helps.** The formula for F forces it to move with the two algebras and their vector. Our own proof conjugates the closed adjoint map by the given unitary. Uniqueness of polar decomposition carries J, hence F, to its counterpart. The split inclusion theorem identifies F as an intermediate type I factor, an algebra isomorphic to all bounded operators on one Hilbert space. The two restricted states then have density matrices with identical eigenvalues and multiplicities.

**Paper or page:** [Modular Nuclearity and Entanglement measures](https://arxiv.org/abs/2110.05823v3). It says: “the canonical intermediate type I factors corresponding to the inclusions”

**Sources:**

- [Sergio Doplicher and Roberto Longo, Standard and split inclusions of von Neumann algebras](https://doi.org/10.1007/BF01388641)

### Composition makes sector fusion associative

**Remember:** Charges compose once they act on one algebra.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** A net assigns an algebra of observables to each spacetime region. Represent a charge by a unital adjoint-preserving endomorphism ρ of the observable algebra. Outside some double cone, the region between two timelike separated events, ρ fixes every spacelike observable. Require an equivalent representative localized in each double cone, and define fusion by composition.

**Problem.** Fusion of localized, transportable charge endomorphisms on a Haag-dual Minkowski net is strictly associative.

**How the definition helps.** Composition gives identical maps for both groupings of three charges. Our own comparison starts with representations on separate Hilbert spaces, which cannot in general be composed. The Doplicher–Haag–Roberts theorem realizes admissible representations as these endomorphisms under Haag duality. Here duality identifies each cone algebra with all bounded operators commuting with its spacelike exterior.

**nLab:** [DHR category](https://ncatlab.org/nlab/show/DHR+category). It says: “left and right unitor and the associator are the identities”

**Sources:**

- [Sergio Doplicher, Rudolf Haag and John E. Roberts, Local observables and particle statistics I](https://doi.org/10.1007/BF01877742)

### Cyclic vacua remove invisible states

**Remember:** A dense set of vacuum descendants leaves no room for an unseen sector.

*Rules out counterexamples.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Vacuum correlations are expectations of products of fields in the vacuum state. Each field acts on vectors after averaging against a smooth test function. The vacuum is cyclic when the vectors obtained by applying such field products to it span a dense subspace.

**Problem.** Within the Wightman axioms, all vacuum correlation functions together determine the theory up to a unitary change of Hilbert space.

**How the definition helps.** Cyclicity makes the inner products recorded by vacuum correlations determine the whole Hilbert space. In our own proof, match vectors built from identical field products in the two theories. Their inner products agree, so this correspondence extends from their dense spans to a unitary map. Adding one more field to a product shows that the map respects the fields on those spans. Our own counterexample adds an orthogonal positive-energy particle space with no invariant vector and lets every field vanish there. Vacuum correlations cannot detect this space. Constructing a theory from proposed correlations is the separate existence part of reconstruction.

**nLab:** [Wightman axioms](https://ncatlab.org/nlab/show/Wightman+axioms). It says: “and all such Wightman theories are then unitarily equivalent.”

**Sources:**

- [Arthur S. Wightman, Quantum Field Theory in Terms of Vacuum Expectation Values (1956)](https://doi.org/10.1103/PhysRev.101.860)

### Disjoint unions make observables commute

**Remember:** Separate spacetime components land in separate tensor factors.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** Assign a unital algebra A(M) to each spacetime M and a unit-preserving algebra map to each allowed embedding, preserving composition and identities. Require compatible identifications A(M ⊔ N) ≅ A(M) ⊗ A(N). Under these identifications, embedding either component acts by a ↦ a ⊗ 1 or b ↦ 1 ⊗ b. This is the tensor product rule for a symmetric monoidal theory.

**Problem.** If two spacetime embeddings combine to an allowed embedding of their disjoint union, their observable images commute in the target algebra.

**How the definition helps.** The tensor product rule puts the two source algebras in commuting tensor factors. Our own proof factors each embedding through the common disjoint union. There, a ⊗ 1 commutes with 1 ⊗ b, and the map to the target preserves products. An assignment defined only on connected spacetimes needs a separate locality axiom. Constructing the compatible tensor product maps for a given theory carries the work.

**nLab:** [causally local net of observables](https://ncatlab.org/nlab/show/causally+local+net+of+observables). It says: “A local net is Einstein local precisely if it is a monoidal functor”

**Sources:** none listed. No primary source with a working link was found.

### Fixed vectors describe standard real subspaces

**Remember:** Every vector in the domain splits into two fixed parts.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras), 81R15. arXiv math-ph. Level 4: research.

**Definition.** In a complex Hilbert space, a standard real subspace K is closed and satisfies K ∩ iK = {0} and K + iK dense. Alternatively, take a conjugate-linear map S with closed graph and dense domain. Require S to preserve its domain and satisfy S²x = x there.

**Problem.** Taking the fixed vectors of S gives a bijection between these maps and standard real subspaces.

**How the definition helps.** In our own proof, the involution gives both parts of the decomposition directly. For each domain vector x, set u = (x + Sx)/2 and v = (x − Sx)/(2i). Both are fixed, and x = u + iv. A vector fixed together with its imaginary multiple must vanish. The closed graph makes the fixed space closed. Conversely, the unique decomposition defines S(u + iv) = u − iv. Closedness of K then gives closedness of the graph.

**Paper or page:** [The Bisognano-Wichmann property for non-unitary Wightman conformal field theories](https://arxiv.org/abs/2506.10625v1). It says: “induces a bijection between i) standard subspaces K of 𝒟, and 2) closed conjugate-linear involutions S”

**Sources:**

- [The Bisognano-Wichmann property for non-unitary Wightman conformal field theories](https://arxiv.org/abs/2506.10625v1)

### Gaussian states factor across symplectic sums

**Remember:** A sum of Gaussian exponents gives a product state.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** For a real symplectic space with alternating form β, use unitary generators satisfying W(h)W(k) = exp(−iβ(h,k))W(h+k). Take a real positive symmetric form α satisfying \|β(h,k)\|² ≤ α(h,h)α(k,k) for every h,k. The centered Gaussian state is the unique state on the generated Weyl C\*-algebra with expectation exp(−α(h,h)/2) on W(h).

**Problem.** On a symplectic direct sum with block diagonal covariance, the Gaussian state is the product of the two component Gaussian states.

**How the definition helps.** The expectation formula turns the sum of the two diagonal covariance terms into a product. Our own proof writes W(h+k) = W(h)W(k) for h and k in different summands, since their symplectic pairing vanishes. The formula therefore gives independent expectations on the two sets of generators. Linear extension and continuity give the product rule on their algebras. This replaces checking every mixed correlation with checking one covariance. The positivity theorem ensures that the generator formula defines a state.

**Paper or page:** [Modular structure of the Weyl algebra](https://arxiv.org/abs/2111.11266v5). It says: “There exists a unique state $\\varphi \_\\alpha $ on $C<sup>\*</sup>(H)$”

**Sources:**

- [Roberto Longo, Modular Structure of the Weyl Algebra](https://doi.org/10.1007/s00220-022-04344-7)

### Haag duality localizes charge intertwiners

**Remember:** An operator commuting with the outside belongs inside.

*Rules out counterexamples. Confidence: medium.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** A local net assigns algebras of bounded operators to spacetime regions, with commuting algebras for spacelike separated regions. A double cone is the region between two timelike separated events. Haag duality requires its algebra to contain exactly the bounded operators commuting with every observable in its spacelike exterior.

**Problem.** Suppose two observable algebra endomorphisms ρ and σ fix the spacelike exterior of the same double cone. Under Haag duality, every bounded T satisfying Tρ(a) = σ(a)T for all observables a belongs to the cone algebra.

**How the definition helps.** Duality turns commutation with exterior observables into membership in the cone algebra. Our own proof substitutes an exterior observable for a, giving Ta = aT. Locality alone allows extra operators in the exterior commutant. Our own example assigns only scalar multiples of the identity to every region on a two-dimensional Hilbert space. Every matrix then intertwines the identity with itself, but the cone algebra contains only scalars.

**nLab:** [DHR superselection theory](https://ncatlab.org/nlab/show/DHR+superselection+theory). It says: “Conversely, under the assumption of Haag duality every DHR admissible representation ρ comes from an endomorphism this way.”

**Sources:**

- [Sergio Doplicher, Rudolf Haag and John E. Roberts, Local observables and particle statistics I](https://doi.org/10.1007/BF01877742)

### Haag duality localizes purification changes

**Remember:** Equal expectations on one side allow a change of vector on the other.

*Rules out counterexamples.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, quant-ph. Level 4: research.

**Definition.** A von Neumann algebra contains the identity and is closed under adjoints and weak operator limits. Weak convergence means convergence of every matrix element between fixed vectors. Two such algebras satisfy Haag duality when each consists of all bounded operators commuting with the other.

**Problem.** If two unit vectors give the same expectations on the first algebra, Haag duality lets the second algebra carry one to the other. The operator is a partial isometry, meaning it preserves lengths on the subspace where it acts nontrivially.

**How the definition helps.** Haag duality puts every operator commuting with the first algebra in the second algebra. In our own proof, match Aψ with Aφ for every operator A in the first algebra. Equal expectations give equal inner products, so this map extends to an isometry between the closed spans. Both spans and their orthogonal complements are invariant under the algebra. Extending the map by zero on the first span’s orthogonal complement therefore gives the required commuting operator. Our own counterexample uses all matrices on one tensor factor and only scalars on the other. Changing the second factor of a product vector preserves the first state, but scalars cannot rotate that factor.

**Paper or page:** [Uniqueness of purifications is equivalent to Haag duality](https://arxiv.org/abs/2509.12911v1). It says: “has the Uhlmann property if and only if Haag duality holds.”

**Sources:**

- [Uniqueness of purifications is equivalent to Haag duality](https://arxiv.org/abs/2509.12911v1)

### Microcausal observables make the Wick algebra well defined

**Remember:** Forbid the directions in which Hadamard singularities would collide.

*Makes the theorem clean to state or prove.* MSC 81T05 (Axiomatic quantum field theory; operator algebras), 81T20, 46F10. arXiv math-ph, math.AP. Level 4: research.

**Definition.** A microcausal polynomial observable on field histories is a polynomial whose coefficients are compactly supported distributions on Xⁿ (n copies of spacetime X). The wave front sets of these coefficients must contain no covector whose components all lie in the closed future cone, or all lie in the closed past cone. (The wave front set of a distribution records where it is singular and in which directions.)

**Problem.** Free quantum fields need a well-defined, associative star product, the Wick algebra, built from the Hadamard two-point function. This star product involves products of distributions.

**How the definition helps.** The microcausal condition makes every product of distributions in the Wick algebra well defined. A product of distributions exists, for example, when their wave front sets satisfy Hörmander's criterion. The microcausal condition is chosen so that every product in the Moyal star product with a Hadamard distribution satisfies this criterion. So the Wick algebra is well defined. The condition is still weak enough to include local observables, such as the point interactions of φ⁴ theory. Renormalization of time-ordered products remains a separate, hard problem.

**nLab:** [microcausal polynomial observable](https://ncatlab.org/nlab/show/microcausal+polynomial+observable), [Weyl relation](https://ncatlab.org/nlab/show/Weyl+relation). It says: “The condition on the wave front is such that the product of distributions with a Hadamard distribution is well defined, so that the coresponding Moyal star product is well defined, which gives the Wick algebra.”

**Sources:**

- [Romeo Brunetti, Klaus Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds, Commun. Math. Phys. 208 (2000) 623–661, arXiv:math-ph/9903028](https://arxiv.org/abs/math-ph/9903028)
- [Michael Dütsch, Klaus Fredenhagen, Algebraic Quantum Field Theory, Perturbation Theory, and the Loop Expansion, Commun. Math. Phys. 219 (2001) 5–30, arXiv:hep-th/0001129](https://arxiv.org/abs/hep-th/0001129)

### One algebra collects net representations

**Remember:** Glue the interval algebras before representing them.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** A circle net assigns a unital operator algebra to each proper open interval, respecting inclusions. Take the adjoint algebra generated by these algebras subject to their internal relations and their inclusion relations. Give each element the supremum of its operator norms over compatible representations, discard elements of norm zero, and complete. This gives the universal C\*-algebra of the net.

**Problem.** Every compatible family of interval representations on one Hilbert space extends uniquely to a representation of the universal algebra.

**How the definition helps.** The inclusion relations let any compatible family act on the generators. Our own proof bounds each finite sum of products by the corresponding sum of products of generator norms. The supremum therefore exists, and each family acts continuously for this norm. Agreement on the generators forces uniqueness. The vacuum representation alone gives only one norm and can lose other representations.

**Paper or page:** [Rotational KMS states and type I conformal nets](https://arxiv.org/abs/1608.08903v2). It says: “of the net 𝒜, there is a representation ρ of the algebra C\*(𝒜) constructed above”

**Sources:**

- [Roberto Longo and Yoh Tanimoto, Rotational KMS States and Type I Conformal Nets](https://doi.org/10.1007/s00220-017-2969-8)

### Perturbative AQFT uses power series and local nets, not a global C\*-algebra

**Remember:** Allow formal power series, and keep only the local algebras.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T05 (Axiomatic quantum field theory; operator algebras), 81T15, 81T20. arXiv math-ph, hep-th. Level 4: research.

**Definition.** Algebraic quantum field theory (AQFT) assigns an algebra of observables to each region of spacetime, and the Haag–Kastler axioms say how. Locally covariant perturbative AQFT uses these axioms, but it assigns to each causal region a formal power series star-algebra instead of a C\*-algebra. The power series are in Planck's constant and the coupling constant. The theory keeps the local net of algebras and does not ask for one global algebra.

**Problem.** Give a rigorous perturbative algebraic quantum field theory for realistic interacting theories. It should work in 4 dimensions, on curved spacetimes, and when infrared divergences are present.

**How the definition helps.** Formal power series and local nets ask for less, and causal perturbation theory can supply that much. As general background, not from the nLab page: with C\*-algebras, no interacting quantum field theory in dimension 4 is known, and constructing Yang–Mills theory is a Millennium Prize problem. With formal power series algebras, Epstein–Glaser causal perturbation theory produces causally local nets automatically. Only the local nets are asked for, not their would-be colimit. So the 'algebraic adiabatic limit', in which the interaction is switched on over all of spacetime, defines the observables even with infrared divergences. This does not construct a vacuum state (the weak adiabatic limit). It also does not solve the non-perturbative problem.

**nLab:** [perturbative algebraic quantum field theory](https://ncatlab.org/nlab/show/perturbative+algebraic+quantum+field+theory). It says: “considering these local nets instead of their would-be colimiting global algebra serves to define the perturbation theory even in the presence of infrared divergences”

**Sources:**

- [Romeo Brunetti, Klaus Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds, Commun. Math. Phys. 208 (2000) 623–661, arXiv:math-ph/9903028](https://arxiv.org/abs/math-ph/9903028)

### Strong additivity repairs punctured intervals

**Remember:** With strong additivity, a deleted point hides no observables.

*Rules out counterexamples. Confidence: medium.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** A circle net assigns an algebra of bounded operators to each proper open interval, respecting inclusions. It is strongly additive if deleting any interior point leaves two intervals whose algebras generate the original von Neumann algebra. Generation here includes taking weak operator limits.

**Problem.** Fix a point p on the circle. For a strongly additive net, the interval algebras avoiding p determine every interval algebra on the same Hilbert space.

**How the definition helps.** Cutting at p expresses each missing algebra in terms of two known ones. Our own deduction takes the von Neumann algebra generated by those two algebras. Ordinary additivity applies to open covers, and the two pieces miss p. The quoted reconstruction theorem starts with different data and requires more work.

**Paper or page:** [Ground state representations of some non-rational conformal nets](https://arxiv.org/abs/1807.11723v2). It says: “Isomorphism classes of strongly additive Möbius covariant nets”

**Sources:** none listed. No primary source with a working link was found.

### Symplectic complements preserve standardness

**Remember:** The symplectic complement swaps density and zero intersection.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** A closed real subspace K is standard if K + iK is dense and K ∩ iK = {0}. Define K′ using vanishing imaginary inner products with K, rather than complex orthogonality. This is the real orthogonal complement of iK.

**Problem.** In a complex Hilbert space, the symplectic complement of every standard closed real subspace is standard.

**How the definition helps.** Real orthogonality exchanges density of a sum with vanishing of an intersection. Our own calculation identifies K′ ∩ iK′ with the real orthogonal complement of K + iK. Applying that identity to K′ gives K ∩ iK as the real orthogonal complement of K′ + iK′, since K′′ = K. The two conditions for standardness therefore exchange roles. Complex orthogonality would give the zero complement for every standard subspace.

**Paper or page:** [The Bisognano-Wichmann property for non-unitary Wightman conformal field theories](https://arxiv.org/abs/2506.10625v1). It says: “If K is cyclic then K′ is separating, and if K′ is cyclic then K is separating.”

**Sources:** none listed. No primary source with a working link was found.

### Symplectic kernels detect central observables

**Remember:** A symplectic overlap gives central Weyl operators.

*Makes the theorem clean to state or prove.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** Let H be a closed real subspace of a complex Hilbert space. Its symplectic complement H′ consists of vectors k with Im ⟨k,h⟩ = 0 for every h ∈ H. On symmetric Fock space, which describes bosonic particles, let R(H) be the von Neumann algebra generated by Weyl unitaries W(h), h ∈ H. These obey W(h)W(k) = exp(−i Im ⟨h,k⟩)W(h+k).

**Problem.** The center of R(H) consists only of scalars exactly when H ∩ H′ = {0}.

**How the definition helps.** The imaginary inner product controls the exchange phase, so its kernel identifies the central directions. Our own deduction uses Araki’s theorems that commutants correspond to symplectic complements and intersections of algebras correspond to intersections of closed real subspaces. Thus the center equals R(H ∩ H′). A nonzero vector gives a nonscalar Weyl unitary, while the zero subspace generates only scalars.

**Paper or page:** [Modular structure of the Weyl algebra](https://arxiv.org/abs/2111.11266v5). It says: “ker β = H ∩ H′”

**Sources:**

- [Huzihiro Araki, Von Neumann Algebras of Local Observables for Free Scalar Field](https://doi.org/10.1063/1.1704063)

### Wedge intersections preserve local commutation

**Remember:** Use opposite wedges to separate bounded algebras.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** A wedge in Minkowski spacetime is a spacetime symmetry image of the region x₁ &gt; \|t\|. Its opposite wedge is its spacelike complement. Assign each wedge a von Neumann algebra, with opposite wedges receiving each other’s commutants, the operators commuting with the given algebra. Define the algebra of a bounded region by intersecting the algebras of all wedges containing it.

**Problem.** If two bounded regions lie in opposite wedges, their intersection-defined algebras commute.

**How the definition helps.** Each intersection is contained in the algebra of the corresponding separating wedge. Our own deduction uses the fact that these two wedge algebras commute. The work is to obtain wedge duality, for example from the Bisognano–Wichmann theorem for suitable vacuum fields. Our own point is that proving the bounded intersections contain observables other than scalars is a separate problem.

**nLab:** [Bisognano-Wichmann theorem](https://ncatlab.org/nlab/show/Bisognano-Wichmann+theorem). It says: “the commutant of the algebra associated to a wedge is the algebra associated to the causal complement of the wedge.”

**Sources:**

- [Joseph J. Bisognano and Eyvind H. Wichmann, On the duality condition for quantum fields](https://doi.org/10.1063/1.522898)

### Double poles fail reflection positivity

**Remember:** A positive Fourier multiplier can still give a negative reflected test.

*Rules out counterexamples.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 4: research.

**Definition.** For a centered stationary real Gaussian field on the time line, write K for its covariance kernel. Reflection positivity requires the kernel K(s + t) to have nonnegative quadratic form on real smooth tests supported at positive times.

**Problem.** For m &gt; 0, the covariance with Fourier multiplier 1/(p² + m²)² is positive as an ordinary covariance but fails reflection positivity.

**How the definition helps.** Reflection tests sums of positive times, which detects a negative determinant invisible in the ordinary covariance. In our own calculation, Fourier inversion gives K(t) proportional to (1 + mt) exp(−mt) for t &gt; 0. At distinct positive times s and t, the determinant has the sign of (1 + 2ms)(1 + 2mt) − (1 + ms + mt)². That expression equals −m²(s − t)². Smooth tests concentrated near the two times preserve a negative quadratic form.

**nLab:** [Osterwalder-Schrader theorem](https://ncatlab.org/nlab/show/Osterwalder-Schrader+theorem). It says: “Let θ : (x, t) ↦ (x, −t) be the time reflection. Then the content of the axiom is: 0 ≤ ⟨θA, A⟩\[L₂\].”

**Sources:**

- [Arici, Becker, Ripken, Saueressig and van Suijlekom, Reflection positivity in higher derivative scalar theories (2018)](https://doi.org/10.1063/1.5027231)

### Mirror parity identifies reflected covariance

**Remember:** Odd extensions vanish at the mirror and even extensions have zero normal slope.

*Makes the theorem clean to state or prove.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 4: research.

**Definition.** Let a distance-preserving reflection θ exchange two halves of a complete connected Riemannian manifold and fix their smooth common boundary pointwise. Write C(x,y) for the kernel of (−Δ + m²)⁻¹, where Δ is the Laplacian and m &gt; 0. Extend a function across the boundary evenly by copying its reflection, or oddly by negating its reflection.

**Problem.** For interior points x ≠ y in one half, the Neumann inverse kernel minus the Dirichlet inverse kernel equals 2C(θx,y). Neumann prescribes zero normal derivative and Dirichlet prescribes zero boundary value.

**How the definition helps.** Even and odd extension give the two boundary kernels by adding or subtracting the same reflected kernel. Reflection preserves the Laplacian. The reflected source lies outside the chosen half, so both kernels solve the same interior equation. Uniqueness with the respective boundary conditions identifies the two inverses. Equation (9) confirms this sign.

**nLab:** [Osterwalder-Schrader theorem](https://ncatlab.org/nlab/show/Osterwalder-Schrader+theorem). It says: “Let θ : (x, t) ↦ (x, −t) be the time reflection.”

**Sources:**

- [Jaffe and Ritter, Reflection Positivity and Monotonicity (2008), Lemma 3](https://www.arthurjaffe.com/Assets/pdf/Reflection_Positivity.pdf)

### Reflection positivity gives nonnegative norms

**Remember:** Reflect one argument before asking whether the pairing can be a norm.

*Rules out counterexamples.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Reflection positivity requires a nonnegative pairing of each positive-time observable with its time-reflected complex conjugate. The pairing uses the Euclidean correlation functions, where time is treated as a spatial coordinate. Ordinary positivity pairs an observable with its complex conjugate without reflecting time.

**Problem.** With reflection positivity, the reflected pairing defines a Hilbert space after quotienting its zero-norm vectors and completing.

**How the definition helps.** In our own explanation, checking the squared norm is exactly the new positivity test. The quotient removes all null vectors by the Cauchy–Schwarz inequality. Our own counterexample to ordinary positivity alone is the time covariance cos(t − s). It is a positive covariance, but the reflected covariance cos(t + s) is negative on the diagonal at t = π⁄2. The Osterwalder–Schrader reconstruction theorem does the further work of recovering a relativistic theory under additional hypotheses.

**nLab:** [reflection positivity](https://ncatlab.org/nlab/show/reflection+positivity). It says: “In quantum field theory reflection positivity is the incarnation of unitarity under Wick rotation via a form of the Osterwalder-Schrader theorem.”

**Sources:**

- [Konrad Osterwalder and Robert Schrader, Axioms for Euclidean Green's functions (1973)](https://doi.org/10.1007/BF01645738)

### Wick squares change field masses

**Remember:** Change the mass in the precision and center the quadratic weight.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 4: research.

**Definition.** On a flat two-dimensional torus let μ(b) be the centered Gaussian field law with covariance (−Δ + b)⁻¹, where b &gt; 0. Here Δ is the Laplacian. Keep frequencies of length at most n, integrate the squared field, and subtract its mean under μ(b). Call the mean-square limit Q.

**Problem.** For a,b &gt; 0, the density of μ(a) relative to μ(b) is exp(−(a − b)Q/2) divided by its μ(b) mean.

**How the definition helps.** Centering every squared Fourier mode makes the infinite quadratic weight converge. For finitely many modes the quoted Gaussian density formula changes each inverse variance from λ + b to λ + a. Here λ is the eigenvalue of −Δ. Our own extension chooses p &gt; 1 close enough to one that b + p(a − b) &gt; 0. The logarithms of the normalized densities’ p-th moments are bounded by a constant times ∑(λ + b)⁻², which converges in two dimensions. The densities therefore converge in mean and give the required law on every finite set of modes.

**Paper or page:** [An introduction to singular stochastic PDEs: Allen-Cahn equations, metastability and regularity structures](https://arxiv.org/abs/1901.07420). It says: “For $a&gt;0$, let $\\mu(a)$ be the Gaussian measure with covariance
$(-\\Delta<sub>N</sub>+a)<sup>-1</sup>$. Then for any $\\mu(a)$-integrable random variable
$F(\\phi<sub>N</sub>)$ and any $b&gt;0$, one has
\\begin{equation}
{\\mathbb{E} \\rule{0pt}{9pt}}<sup>\\mskip1.5mu \\mu(a)</sup>\\bigl\[F(\\phi<sub>N</sub>) \\bigr\]
= \\sqrt{\\mathfrak{D}N(a-b;b)} \\, \\biggexpecin{\\mu(b)}{\\exp\\biggl \\{-\\frac{a-b}2
\\int{\\Lambda}\\Wick{\\phi<sub>N</sub>(x)<sup>2}\\6x</sup>  \\biggr \\}F(\\phi<sub>N</sub>)}\\;,
\\end{equation}”

**Sources:**

- [An introduction to singular stochastic PDEs: Allen-Cahn equations, metastability and regularity structures](https://arxiv.org/abs/1901.07420)

### Heat-kernel weights survive face subdivision

**Remember:** Erase a new edge by adding the two heat times.

*True by definition.* MSC 81T13 (Yang-Mills and other gauge theories in quantum field theory). arXiv math-ph, math.DG. Level 4: research.

**Definition.** Use a compact connected Lie group with a metric invariant under left and right multiplication. Assign a group element to each edge of a graph dividing an oriented surface into disks, using its inverse for reverse traversal. Weight each face by the group heat kernel at its area, evaluated on the ordered product around its boundary. Multiply the face weights against independent Haar probability measures, the translation-invariant group measures on the edges.

**Problem.** Split one disk face into two disks of positive areas by adding an edge between existing vertices. Integrating over the new edge gives exactly the original density on the old edges.

**How the definition helps.** In our own calculation, the heat kernel makes integration over the new edge exactly composition of two heat operators. The new edge occurs once in each direction, so its group integral convolves the two face kernels. Heat operators compose by adding their times, and the two areas sum to the old area. This choice replaces a separate consistency proof for arbitrary face weights with the heat semigroup identity.

**nLab:** [heat kernel](https://ncatlab.org/nlab/show/heat+kernel). It says: “The heat kernel K for P is then the kernel of an integral operator representing the heat operator:”

**Sources:**

- [Thierry Lévy, Yang-Mills measure on compact surfaces](https://doi.org/10.1090/memo/0790)

### Action exponentials transport master equations

**Remember:** Transport the exponential with a map that respects the differential.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory), 81T70. arXiv hep-th, math-ph. Level 4: research.

**Definition.** Write the interaction I as a formal exponential E = exp(I/ℏ), where ℏ counts powers in the expansion. The quantum master equation then says DE = 0 for a linear operator D with D² = 0. A change in the rule for pairing fields acts on E by a linear map R.

**Problem.** If the change replaces D by D′ and D′R = RD, the transformed exponential solves the new quantum master equation.

**How the definition helps.** In our own proof, writing the equation for E turns the transport step into D′RE = RDE = 0. Working directly with I would leave a nonlinear equation. The work lies in proving the operator identity for the actual change of pairing rule and recovering the transformed interaction.

**Paper or page:** [Quantization and Algebraic Index](https://arxiv.org/abs/2511.12875v1). It says: “Then Ĩ ∈ 𝒪(V)\[\[ℏ\]\] satisfies QME”

**Sources:**

- [Quantization and Algebraic Index](https://arxiv.org/abs/2511.12875v1)

### Causal perturbation theory makes causal factorization an axiom of the S-matrix

**Remember:** Interactions in separate regions give S-matrix factors that multiply in causal order.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** In causal perturbation theory, a perturbative S-matrix is a map S that satisfies a list of axioms. It sends local interaction terms to formal power series of observables. The key axiom is causal factorization: if the support of O₁ is not in the past of the support of O₂, then S(O₁ + O₂) = S(O₁) S(O₂). In words, the S-matrix of the sum is the product of the two S-matrices, in causal order.

**Problem.** Give a rigorous meaning to the perturbative S-matrix, which informal physics writes as a path integral. Prove that it factorizes over causally ordered regions.

**How the definition helps.** Causal perturbation theory puts causal factorization into the definition, so you do not have to derive it from a path integral. In the path integral picture, causal factorization would follow from properties of integrals and exponentials. But the path integral is not well defined. So causal perturbation theory takes causal factorization (equivalently, causal additivity) as an axiom. The real work then moves to an existence theorem: Epstein and Glaser construct solutions by induction. At each order they must extend a distribution, defined away from a point, to that point. This step is where renormalization happens, and the freedom in the extension is a finite-dimensional space of distributions supported at the point.

**nLab:** [A first idea of quantum field theory -- Interacting quantum fields](https://ncatlab.org/nlab/show/A+first+idea+of+quantum+field+theory+--+Interacting+quantum+fields), [causal perturbation theory](https://ncatlab.org/nlab/show/causal+perturbation+theory), [S-matrix](https://ncatlab.org/nlab/show/S-matrix). It says: “the axioms of causal perturbation theory directly prescribe the desired factorization property, without insisting that it derives from an actual integration.”

**Sources:**

- [Henri Epstein, Vladimir Glaser, The role of locality in perturbation theory, Annales de l'Institut Henri Poincaré A 19 (1973) 211](https://www.numdam.org/item/AIHPA_1973__19_3_211_0/)

### Closed pole spaces preserve multiplication

**Remember:** The pole space must multiply before counterterms can multiply.

*Rules out counterexamples.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Split Laurent series into power series and a complementary vector space closed under multiplication. Let P project onto the complement along the power series. A character assigns series to graphs and preserves disjoint unions as products.

**Problem.** For a character on a connected graded graph Hopf algebra, recursive subtraction using P gives a counterterm that preserves products. Here the degree counts loops and only scalars have degree zero.

**How the definition helps.** In our own proof, closure of both spaces gives P(x)P(y) = P(P(x)y + xP(y) − xy). This identity supplies the product step in the subtraction recursion. Our own counterexample takes the complement spanned by z⁻¹ + 1 and all z⁻ᵏ with k ≥ 2. A graph without divergent proper subgraphs and with value z⁻¹ has counterterm −(z⁻¹ + 1). Its square lies outside the complement, so it cannot equal the recursively projected counterterm of the disjoint square.

**nLab:** [Rota-Baxter algebra](https://ncatlab.org/nlab/show/Rota-Baxter+algebra), [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “P(x) P(y) = P(P(x) y) + P(x P(y)) + λ P(x y)”

**Sources:**

- [Alain Connes and Dirk Kreimer, Renormalization in Quantum Field Theory and the Riemann-Hilbert Problem I (2000)](https://doi.org/10.1007/s002200050779)

### Factorization separates subtraction from evaluation

**Remember:** Factor the whole character before setting the regulator to zero.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Use the Connes–Kreimer graph algebra, where disjoint union multiplies graphs and loop number grades them. A character assigns a Laurent series to each graph, preserves products, and sends the empty graph to one. Factor a character as C⁻¹ ⋆ R, where convolution ⋆ sums products over subgraphs and their contractions. On positive degrees C contains only negative powers, while R contains only nonnegative powers.

**Problem.** Each character has a unique such factorization. In minimal subtraction, which removes pole terms, evaluating R at zero gives the renormalized character.

**How the definition helps.** In our own words, the definition makes evaluation at zero possible on every graph simultaneously. The Connes–Kreimer theorem proves that both factors exist and preserve products. Its recursion for C recovers the usual subtraction of divergent subgraphs.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “then the Birkhoff decomposition always exists and is given by the formula”

**Sources:**

- [Alain Connes and Dirk Kreimer, Renormalization in Quantum Field Theory and the Riemann-Hilbert Problem I (2000)](https://doi.org/10.1007/s002200050779)

### Graph insertion gives a Lie bracket

**Remember:** Independent insertions cancel in pairs when the bracket cycles.

*Makes the theorem clean to state or prove.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Use the Connes–Kreimer space of graphs that stay connected after any single internal edge is cut. Write x ⊳ y for the sum over insertions of y into x, matching external edge types at the insertion site. The right pre-Lie identity says (x ⊳ y) ⊳ z − x ⊳ (y ⊳ z) is symmetric in y and z.

**Problem.** Graph insertion satisfies the right pre-Lie identity. Consequently the bracket \[x,y\] = x ⊳ y − y ⊳ x satisfies the Jacobi identity.

**How the definition helps.** In our own proof, the pre-Lie identity packages the cancellations needed for the Jacobi identity into a single symmetry. Nested insertions cancel in the displayed difference. The remaining insertions occupy separate sites, so interchanging y and z pairs their terms. Expanding the cyclic sum of double brackets now gives zero.

**nLab:** [pre-Lie algebra](https://ncatlab.org/nlab/show/pre-Lie+algebra), [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “It is a fun exercise to derive the Jacobi identity from equation \\eqref{identity}.”

**Sources:**

- [Alain Connes and Dirk Kreimer, Renormalization in Quantum Field Theory and the Riemann-Hilbert Problem I (2000)](https://doi.org/10.1007/s002200050779)

### Heat-kernel interval maps compose

**Remember:** Add the intervals and multiply their commuting contraction operators.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** For positive times a &lt; b, integrate Costello’s heat kernel propagator density from a to b to obtain P(a,b). Its contraction operator D(a,b) pairs two field factors using that kernel. For a formal interaction I define W(a,b,I) = ℏ log(exp(ℏD(a,b)) exp(I/ℏ)), with the usual factor ½ in D.

**Problem.** For 0 &lt; a &lt; b &lt; c, Costello’s formal interaction series satisfy W(b,c,W(a,b,I)) = W(a,c,I). The identity extends to a = 0 for his renormalized interactions.

**How the definition helps.** In our own proof, defining the interaction through its exponential turns successive contractions into multiplication of commuting operators. Integrals add across adjacent intervals, so D(a,c) = D(a,b) + D(b,c). Exponentiating this sum proves the finite-cutoff formula. Costello’s theorem constructs the renormalized limit and proves that evolution over the outer interval respects it.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “Γᴿ(P(0,T′), I) = Γ(P(T,T′), Γᴿ(P(0,T), I))”

**Sources:**

- [Kevin Costello, Renormalization and Effective Field Theory (2011)](https://doi.org/10.1090/surv/170)

### Hopf ideals preserve gauge identities

**Remember:** Subtract on the quotient and the identities stay zero.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Let H be a connected graded graph Hopf algebra, whose coproduct records subgraphs and their contractions. A graded Hopf ideal I is a graded ideal for which the Hopf algebra operations descend to H/I. A character is a product-preserving linear map that sends one to one.

**Problem.** If a Laurent-series character kills I, both factors in its minimal-subtraction factorization kill I. This applies to the Slavnov–Taylor relations expressing gauge symmetry when they generate such an ideal.

**How the definition helps.** In our own proof, passing to H/I makes the relations zero before any pole terms are subtracted. Factor the induced character there and compose both factors with the quotient map. Uniqueness identifies them with the factors on H. Van Suijlekom proves the Hopf ideal property for the gauge identities in his setting.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “the relations between amplitudes to be preserved under renormalization must define a Hopf ideal in the Hopf algebra of graphs.”

**Sources:**

- [Walter van Suijlekom, Renormalization of Gauge Fields using Hopf Algebras](https://doi.org/10.1007/978-3-7643-8736-5_8)

### Largest forest members recover recursion

**Remember:** Group a forest by its largest members to read the recursion.

*True by definition. Confidence: medium.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** In massive Euclidean momentum subtraction, consider a connected graph that stays connected after any one internal edge is cut. A proper forest is a set of proper divergent subgraphs of this same type, every pair nested or disjoint. For each member γ, let T(γ) take the Taylor polynomial in its external momenta at zero through its superficial degree of divergence. This degree counts the net scaling power from loop measures, numerators and denominators.

**Problem.** The recursively prepared graph integrand equals the sum over proper forests, including the empty forest, of the ordered products of −T(γ) applied to the integrand. Inner members act first. For an overall divergent graph G, applying 1 − T(G) gives the renormalized integrand.

**How the definition helps.** In our own proof, the forest definition makes its maximal members exactly one admissible family in the recursive subtraction. These members are pairwise disjoint and each contains its own proper forest. Summing the inner forests and applying the maximal member’s subtraction recovers its recursive counterterm. The empty forest supplies the original integrand. Zimmermann’s convergence theorem is separate from this combinatorial identity.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “for adding to a given amplitude in a certain recursive fashion further terms”

**Sources:**

- [Wolfhart Zimmermann, Convergence of Bogoliubov’s Method of Renormalization in Momentum Space (1969)](https://doi.org/10.1007/bf01645676)

### Nested contractions make convolution associative

**Remember:** Both orders of subtraction indexing count the same nested subgraphs.

*Makes the theorem clean to state or prove.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** In the Connes–Kreimer algebra, multiply graphs by disjoint union. The coproduct sums γ ⊗ G/γ over admissible subgraphs γ, including the empty and full terms. Each proper γ consists of disjoint divergent pieces surviving any single internal edge cut, and G/γ contracts each piece to its prescribed type. Convolution multiplies two linear graph rules by applying one to each tensor factor and summing their products.

**Problem.** This coproduct is coassociative. Consequently convolution is associative for rules valued in an associative algebra.

**How the definition helps.** In our own proof, indexing the coproduct by contractions makes both orders of iteration list the same nested pairs. For an admissible α inside G, contracting α identifies admissible β containing α with admissible subgraphs of G/α. Either iteration then records α, β/α and G/β. The graph theorem establishes this correspondence for the allowed divergence and external types.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “there is secretly a natural Hopf algebra structure on the vector space whose basis consists of graphs”

**Sources:**

- [Alain Connes and Dirk Kreimer, Renormalization in Quantum Field Theory and the Riemann-Hilbert Problem I (2000)](https://doi.org/10.1007/s002200050779)

### Orthogonal variables preserve finite-part multiplication

**Remember:** Orthogonal variable spaces let finite parts multiply.

*Rules out counterexamples.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Consider meromorphic germs with linear poles at zero, meaning local functions whose denominators are products of linear forms. Fix an inner product on linear forms. A polar term divides a holomorphic numerator by powers of independent linear forms, with numerator variables orthogonal to those forms. Project along the span of polar terms onto holomorphic germs and evaluate at zero.

**Problem.** This finite part preserves products of germs whose spaces of linear variables are orthogonal. No unital multiplicative map on all these germs can extend evaluation at zero.

**How the definition helps.** In our own proof, orthogonality keeps every product involving a polar term in the polar subspace, including products of two polar terms. Only the two holomorphic parts contribute to evaluation. The decomposition theorem supplies the projection and its compatibility with orthogonal variables. In our own counterexample, x evaluates to zero although x times 1/x equals one.

**Paper or page:** [Locality Galois groups of meromorphic germs in several variables](https://arxiv.org/abs/2301.02300v1). It says: “{\\mathcal{M}}\_{\\mathbb {K}}= {\\mathcal{M}}\_{\\mathbb {K}+}\\oplus {\\mathcal{M}}<sup>Q\_{\\mathbb</sup> {K}-}.”

**Sources:**

- [Li Guo, Sylvie Paycha and Bin Zhang, Locality Galois groups of meromorphic germs in several variables](https://arxiv.org/abs/2301.02300v1)

### Outer normalization fixes Birkhoff factors

**Remember:** Set the outer factor to one at infinity to fix constants.

*Rules out counterexamples.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** A graph character assigns numbers multiplicatively to disjoint unions and sends the empty graph to one. For a loop of characters Φ on a circle, write Φ = C⁻¹ ⋆ R using convolution, the group product. Require R to extend holomorphically across the closed interior and C across the closed exterior, including infinity. Require C at infinity to be the identity character.

**Problem.** Whenever such a factorization exists, it is unique. Without normalization, multiplying both factors on the left by the same constant character preserves Φ.

**How the definition helps.** In our own proof, normalization fixes the only freedom left after the two holomorphic extensions agree. For another pair D,S, the identity D ⋆ C⁻¹ = S ⋆ R⁻¹ glues the exterior and interior ratios. On every graph their common extension is holomorphic on the sphere and hence constant. Its value at infinity is the identity. Existence is the separate factorization theorem.

**nLab:** [Birkhoff decomposition](https://ncatlab.org/nlab/show/Birkhoff+decomposition), [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “a function of a matrix holomorphic on a neighborhood of an exterior of the disk including infinity and the circle itself.”

**Sources:**

- [Alain Connes and Dirk Kreimer, Renormalization in Quantum Field Theory and the Riemann-Hilbert Problem I (2000)](https://doi.org/10.1007/s002200050779)

### Scaled prescriptions give a cocycle

**Remember:** Compare prescriptions twice and the second change is conjugated by scaling.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Let S assign a formal scattering operator to each local interaction, an interaction depending on fields and their derivatives at one point. Write λ·S for the prescription obtained by scaling spacetime and transforming the masses and inputs accordingly. Define Z(λ) as the unique local change of interaction satisfying λ·S = S ∘ Z(λ).

**Problem.** Suppose positive scales act on the allowed prescriptions and their changes by conjugation. Then Z(λμ) = Z(λ) ∘ (λ·Z(μ)).

**How the definition helps.** Defining the change by composition with S turns two successive scalings into a single change that uniqueness identifies. In our own derivation, apply λ to μ·S = S ∘ Z(μ) and substitute λ·S = S ∘ Z(λ). The main renormalization theorem supplies existence and uniqueness.

**nLab:** [Stückelberg-Petermann renormalization group](https://ncatlab.org/nlab/show/St%C3%BCckelberg-Petermann+renormalization+group). It says: “cocycle property of running coupling constants”

**Sources:**

- [Romeo Brunetti, Michael Dütsch and Klaus Fredenhagen, Perturbative Algebraic Quantum Field Theory and the Renormalization Groups (2009)](https://doi.org/10.4310/atmp.2009.v13.n5.a7)

### Singular complements fix counterterms

**Remember:** A complement leaves no room for a finite shift.

*Rules out counterexamples.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** In Costello’s heat kernel scheme, take the space of allowed functions of the cutoff ε. Split off the subspace of functions with finite limits at zero by choosing a linear complement. At each order require the counterterm, the coefficient subtracted before taking the limit, to lie in this complement.

**Problem.** Once lower orders are fixed, exactly one allowed counterterm makes the coefficient at the next order finite. Without the complement condition, adding any finite local term at that order preserves finiteness.

**How the definition helps.** In our own proof, two possible counterterms differ by an element of both summands, so they coincide. Without the restriction, a constant shift in a local interaction coefficient gives our own example of the ambiguity. Costello proves that the singular coefficient at each order actually comes from a local counterterm.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “each counterterm is in the chosen $\\mathcal{A}<sub>\\gt 0</sub>$ as a function of $\\epsilon$;”

**Sources:**

- [Kevin Costello, Renormalization and Effective Field Theory (2011)](https://doi.org/10.1090/surv/170)

### Switching the interaction off far away avoids infrared divergences

**Remember:** Switch the coupling off far away, then look only near the region you measure.

*Rules out counterexamples. Confidence: medium.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory), 81T05. arXiv math-ph. Level 4: research.

**Definition.** Causal perturbation theory builds the perturbation series of a quantum field theory from causality conditions. In it, the interaction term is multiplied by a smooth function g with compact support in spacetime, called the adiabatic switching function. So the interaction is switched off smoothly outside a compact region.

**Problem.** Construct the interacting quantum observables of a perturbative field theory in every bounded region of spacetime.

**How the definition helps.** The observables of a bounded region do not depend on g far away, so you never need to remove g. The original plan was to take the limit g → 1 at the end. In general this limit does not exist, because of infrared divergences (divergences that come from long distances). Il'in and Slavnov observed that you can compute the algebra of observables of a bounded region with a switching function g whose support contains the causal closure of that region. If you change g away from the region, you get an isomorphic algebra, so no limit is needed. Brunetti and Fredenhagen made this precise and showed that causal perturbation theory gives a causally local net of observables, as in algebraic quantum field theory. This 'algebraic adiabatic limit' does not yet give the interacting vacuum state; that needs a weak adiabatic limit, which is a separate problem.

**nLab:** [causal perturbation theory](https://ncatlab.org/nlab/show/causal+perturbation+theory), [S-matrix](https://ncatlab.org/nlab/show/S-matrix), [A first idea of quantum field theory -- Interacting quantum fields](https://ncatlab.org/nlab/show/A+first+idea+of+quantum+field+theory+--+Interacting+quantum+fields). It says: “it was observed that in fact the algebra of observables on any bounded region may be computed with a g whose compact support contains the causal closure of that region.”

**Sources:**

- [V. A. Il'in, D. S. Slavnov, Algebras of observables in the S-matrix approach, Theoretical and Mathematical Physics 36 (1978) 578–585](https://doi.org/10.1007/BF01035870)
- [Romeo Brunetti, Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds, Communications in Mathematical Physics 208 (2000) 623–661, arXiv:math-ph/9903028](https://arxiv.org/abs/math-ph/9903028)

### The main theorem of perturbative renormalization says S-matrix schemes form a torsor

**Remember:** Two renormalizations always differ by exactly one change of the interaction.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** The S-matrix is the operator that gives scattering amplitudes. Causal perturbation theory defines a perturbative S-matrix by axioms, not by a path integral, and calls it an S-matrix scheme. The main axiom is causal factorization: if one interaction lies in the future of another, the S-matrix of their sum is the product of their S-matrices. A vertex redefinition changes the interaction by adding higher-order point interactions, called counterterms.

**Problem.** Describe all the freedom in the renormalization of a perturbative quantum field theory.

**How the definition helps.** Because the axioms define the S-matrix, renormalization becomes a choice, and no infinite quantities appear. The choice is how to extend the time-ordered products (the terms of the S-matrix) to the diagonal, where points coincide. Vertex redefinitions form a group, the Stückelberg–Petermann renormalization group. The main theorem says that the S-matrix schemes that satisfy the renormalization condition 'field independence' form a torsor over this group. That is, such schemes exist, and a unique vertex redefinition relates any two of them. Existence is the separate Epstein–Glaser construction, which uses the theory of extension of distributions.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “states that any two choices of such (re-)normalizations are uniquely related by a re-definition of the interaction Lagrangian density which introduces further point interactions of higher order ("counter terms")”

**Sources:**

- [G. Popineau, Raymond Stora, A pedagogical remark on the main theorem of perturbative renormalization theory, Nuclear Physics B 912 (2016) 70–78](https://doi.org/10.1016/j.nuclphysb.2016.04.046)
- [Henri Epstein, Vladimir Glaser, The role of locality in perturbation theory, Annales de l'Institut Henri Poincaré A 19 (1973) 211](http://www.numdam.org/item/AIHPA_1973__19_3_211_0/)
- [Romeo Brunetti, Klaus Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds, Communications in Mathematical Physics 208 (2000) 623–661, arXiv:math-ph/9903028](https://arxiv.org/abs/math-ph/9903028)

### The simple pole determines running

**Remember:** One factor of the regulator exposes the simple pole.

*True by definition. Confidence: medium.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** A graph character assigns Laurent series to graphs and sends disjoint unions to products. Let A be the convolution inverse of a minimal-subtraction counterterm, so its positive-degree values contain only negative powers of the regulator z. On a graph of loop number n, let θ(t) multiply a value by exp(tzn). Define F(t) as the value at z = 0 of A⁻¹ ⋆ θ(t)A whenever this convolution has no poles on any graph.

**Problem.** If these values exist for every real t, then F(t+s) = F(t) ⋆ F(s). On each graph of loop number n, the derivative at t = 0 equals n times the coefficient of z⁻¹ in A.

**How the definition helps.** In our own proof, the scaled ratio composes before evaluation and its derivative supplies a factor of z. Writing B(t) = A⁻¹ ⋆ θ(t)A gives B(t+s) = B(t) ⋆ θ(t)B(s). Evaluating at zero removes θ(t) from the regular factor B(s). On each graph the constant coefficient is polynomial in t, so it can be differentiated directly. At t = 0, products involving two strict pole parts still have negative powers after multiplication by z. Only the simple pole of A contributes. The Connes–Kreimer locality theorem supplies regularity for counterterms independent of the scale.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “its logarithmic derivative”

**Sources:**

- [Alain Connes and Dirk Kreimer, Renormalization in Quantum Field Theory and the Riemann-Hilbert Problem II (2001)](https://doi.org/10.1007/PL00005547)

### Vanishing jets erase local counterterms

**Remember:** Erase the jet and every local subtraction of that order disappears.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** For an integer r ≥ 0, take smooth compactly supported tests on ℝᵈ whose derivatives through order r vanish at zero. Project onto this space by subtracting each test’s degree-r Taylor polynomial times a smooth cutoff equal to one near zero.

**Problem.** Two extensions of the same distribution across zero agree on these tests if both have scaling degree at most d + r. Scaling degree is the infimum of s such that λˢu(λ·) tends to zero as λ decreases to zero.

**How the definition helps.** In our own words, choosing tests with vanishing derivatives removes every allowed change of extension at once. The structure theorem for distributions supported at one point expresses the difference as derivatives of the delta distribution. The scaling bound limits their orders to r. Each such derivative reads a derivative of the test at zero.

**nLab:** [differential renormalization](https://ncatlab.org/nlab/show/differential+renormalization), [A first idea of quantum field theory -- Renormalization](https://ncatlab.org/nlab/show/A+first+idea+of+quantum+field+theory+--+Renormalization). It says: “Restricted to the image of this projector the relevant time-ordered product Tₖ has a unique extension to the origin”

**Sources:**

- [Romeo Brunetti and Klaus Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories (2000)](https://doi.org/10.1007/s002200050004)

### Adjoints transport graph subtraction

**Remember:** Transport insertion through the adjoint to transport subtraction back.

*True by definition.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 4: research.

**Definition.** In the Bruned–Hou diagram algebra, let Φ send each diagram to the monomial recording its number of vertices of each degree. Let P send that monomial back to the sum of diagrams formed by pairing its labelled edge ends, counted with their pairing multiplicities. A coproduct records extracted pieces in one factor and the contracted remainder in the other.

**Problem.** For each allowed monomial m, expanding both factors of its extraction coproduct gives exactly the diagram coproduct of P(m).

**How the definition helps.** In our own proof, choosing P as the weighted adjoint of Φ turns the insertion identity into the extraction identity. Insertion replaces vertices by diagrams with matching edge ends. The authors prove that Φ respects simultaneous insertion and that the symmetry-weighted inner products make extraction adjoint to insertion. Taking adjoints then proves the formula without separately counting all extractions.

**Paper or page:** [Renormalising Feynman diagrams with multi-indices](https://arxiv.org/abs/2501.08151v3). It says: “(𝒫 ⊗ 𝒫) ∘ Δₘ(zᵝ) = Δ𝒻 ∘ 𝒫(zᵝ).”

**Sources:**

- [Yvain Bruned and Yingtong Hou, Renormalising Feynman diagrams with multi-indices](https://arxiv.org/abs/2501.08151v3)

### Affine frames close under coaction

**Remember:** Keep the cycle fixed and let every de Rham class vary.

*True by definition.* MSC 81T18 (Feynman diagrams), 14C30. arXiv hep-th, math.NT. Level 4: research.

**Definition.** Use the affine construction of a graph integral, which represents the integration simplex and algebraic differential forms in one cohomology space. Here cohomology records integration classes relative to the boundary of the simplex. Fix integration over the simplex and let the differential form range over all classes. The resulting formal integrals span the graph’s affine motivic period space.

**Problem.** The motivic Galois coaction records algebraic symmetries by expanding a formal integral into pairs of coefficients and periods. Consider a scalar graph with logarithmic overall divergence and no divergent proper subgraph. Every period in the coaction on its affine motivic period space can be taken from that same space.

**How the definition helps.** Allowing every form class makes the space closed under the replacements in the coaction formula. In our own explanation, expanding in a basis changes the form class while keeping the simplex fixed. A space generated only by the original integrand need not contain these terms. The affine construction supplies the geometric realization of the additional periods.

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2). It says: “The Galois group acts on 𝒫ₐᵐ(G), that is Δ(𝒫ₐᵐ(G)) ⊆ 𝒫ᵈᴿ ⊗ 𝒫ₐᵐ(G).”

**Sources:**

- [Francis Brown, Feynman amplitudes, coaction principle, and cosmic Galois group](https://doi.org/10.4310/cntp.2017.v11.n3.a1)
- [Claudia Rella, An Introduction to Motivic Feynman Integrals](https://doi.org/10.3842/sigma.2021.032)

### Blow-ups frame Feynman periods

**Remember:** Separate the simplex from the poles before pairing it with the form.

*Makes the theorem clean to state or prove.* MSC 81T18 (Feynman diagrams), 14C30. arXiv hep-th, math.NT. Level 4: research.

**Definition.** A blow-up replaces a subspace by the directions approaching it. Blow up projective edge space along the coordinate subspaces specified by the graph polynomial. Remove the transformed zero set of that polynomial and retain the lifted coordinate boundary. The lifted integrand and simplex specify a relative period, an integral whose domain may end on that boundary.

**Problem.** Suppose the graph has twice as many edges as independent cycles, with strictly more than twice as many in every nonempty proper edge subset. Its projective Feynman integral equals this relative period.

**How the definition helps.** In our own description, the relative period records both the integrand and its allowed boundary. Rella’s blow-up theorem keeps the lifted simplex away from the transformed pole set. It also rules out poles along the new divisors. In our own argument, changing variables on the simplex interior now identifies the two integrals.

**nLab:** [period](https://ncatlab.org/nlab/show/period). It says: “The period of a closed differential form”

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2). It says: “The pulled-back differential ω̂ɢ = π\* ωɢ has no poles along the exceptional divisors associated to the blow ups.”

**Sources:**

- [Claudia Rella, An Introduction to Motivic Feynman Integrals](https://doi.org/10.3842/sigma.2021.032)
- [Francis Brown, Feynman amplitudes, coaction principle, and cosmic Galois group](https://doi.org/10.4310/cntp.2017.v11.n3.a1)

### Completed graphs fix point-count residues

**Remember:** Use the completed graph to compute the point count residue of any deletion.

*True by definition.* MSC 81T18 (Feynman diagrams), 05C31. arXiv hep-th, math.CO. Level 4: research.

**Definition.** The graph polynomial sums products of edge variables outside spanning trees. For a connected graph with at least three vertices, count its zeros over the field of p elements. Divide that count by p² and reduce modulo p to obtain c₂. For a 2k-regular graph, the Martin invariant counts partitions into k spanning trees after deleting any vertex.

**Problem.** Let G be a connected loopless four-regular graph with at least six vertices, and let p be prime. The c₂ residues of all connected vertex deletions agree.

**How the definition helps.** The completed graph supplies one integer for every deletion. Replace each edge of G by p−1 parallel edges. Panzer and Yeats prove that the Martin invariant of this graph, divided by 3p, gives the required residue modulo p. Their tree-partition theorem establishes that the count itself is independent of the vertex.

**Paper or page:** [Feynman symmetries of the Martin and c₂ invariants of regular graphs](https://arxiv.org/abs/2304.05299v2), [Feynman symmetries of the Martin and c₂ invariants of regular graphs](https://arxiv.org/abs/2304.05299v2), [Feynman symmetries of the Martin and c₂ invariants of regular graphs](https://arxiv.org/abs/2304.05299v2). It says: “For all primes p and any two vertices v,w of a 4-regular graph G, we have c₂⁽ᵖ⁾(G ∖ v) ≡ c₂⁽ᵖ⁾(G ∖ w) mod p.”

**Sources:**

- [Erik Panzer and Karen Yeats, Feynman symmetries of the Martin and c₂ invariants of regular graphs](https://doi.org/10.5070/c65165021)

### Completion removes the chosen vertex

**Remember:** The added vertex need not be the one you remove.

*Makes the theorem clean to state or prove.* MSC 81T18 (Feynman diagrams), 81Q30. arXiv hep-th, math-ph. Level 4: research.

**Definition.** Start with a massless four-dimensional φ⁴ diagram, whose interaction vertices each meet four edge ends. Its period is the integral left after removing the overall scale. Assume twice the cycle count equals the edge count, with strict edge excess over twice the cycle count for every nonempty proper edge subset. Complete the diagram by joining its four external ends to one new vertex.

**Problem.** Deleting any vertex of the completion gives a diagram satisfying the same edge conditions. Every deletion gives the same period.

**How the definition helps.** Completion turns a family of integral identities into one statement about an unmarked graph. In our own explanation, inversion of position coordinates changes which vertex lies at infinity. The completion theorem proves that this change preserves the integral.

**Paper or page:** [The Galois coaction on φ⁴ periods](https://arxiv.org/abs/1603.04289v2). It says: “Then Ḡ ∖ v₁ and Ḡ ∖ v₂ are primitive log-divergent φ⁴ graphs with equal period,”

**Sources:**

- [Oliver Schnetz, Quantum periods: A census of φ⁴-transcendentals](https://doi.org/10.4310/cntp.2010.v4.n1.a1)
- [Erik Panzer and Oliver Schnetz, The Galois coaction on φ⁴ periods](https://doi.org/10.4310/cntp.2017.v11.n3.a3)

### Cuts force Dodgson minors to vanish

**Remember:** A cut leaves dependent vertex columns in the remaining matrix.

*True by definition.* MSC 81T18 (Feynman diagrams), 05C31. arXiv hep-th, math-ph. Level 4: research.

**Definition.** Orient a connected graph and omit one vertex column from its signed edge-by-vertex incidence matrix B. Form a block matrix with diagonal edge weights and a zero vertex block on its diagonal. Use B and −Bᵀ for the other blocks. A Dodgson polynomial is its signed determinant after deleting equally many edge rows and columns and setting specified surviving weights to zero.

**Problem.** If the deleted edge rows index a cut, meaning their removal disconnects the graph, the Dodgson polynomial vanishes.

**How the definition helps.** The determinant definition exposes a column dependence that a spanning-forest expansion hides. In our own proof, choose a remaining component away from the omitted vertex. Its vertex columns sum to zero because every surviving edge has both ends inside or both outside that component. The all-minors matrix-tree theorem supplies the comparison with forest sums.

**Paper or page:** [Geometries in perturbative quantum field theory](https://arxiv.org/abs/1905.08083v3). It says: “If I cuts G or K ∖ IJ contains a cycle”

**Sources:**

- [Oliver Schnetz, Geometries in perturbative quantum field theory](https://doi.org/10.4310/cntp.2021.v15.n4.a2)

### Face tests bound sector denominators

**Remember:** Testing every face detects cancellations near the boundary.

*Rules out counterexamples.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 4: research.

**Definition.** For a polynomial denominator p in positive edge variables, its Newton polytope is the convex hull of the exponents of its nonzero monomials. For each nonempty face, retain only terms whose exponents lie on it. Call p completely nonvanishing if every resulting polynomial, including p itself, has no zero on positive inputs.

**Problem.** For such a denominator there is a constant C &gt; 0 with \|p(x)\| ≥ C M(x) at every positive input. Here M is the largest value of a monomial appearing in p after its coefficient is removed.

**How the definition helps.** In our own words, testing every face also tests cancellations among the terms that dominate near a boundary. Borinsky proves the resulting uniform lower bound for use in estimating parametric Feynman integrals. Our own example p(x,y) = 1 + (x − y)² stays positive everywhere. Along x = y tending to infinity, its value stays one while M grows quadratically.

**Paper or page:** [Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2). It says: “If $p \\in \\mathbb{C} \[x<sub>1</sub>, \\ldots , x<sub>n</sub>\]$ is completely non-vanishing on $\\mathbb{R} <sup>n</sup><sub>&gt;0</sub>$, then there is a constant $C&gt;0$ such that”

**Sources:**

- [Michael Borinsky, Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2)

### Graph minors inherit Dodgson identities

**Remember:** Identities for matrix minors become identities for graph polynomials.

*True by definition.* MSC 81T18 (Feynman diagrams), 05C31. arXiv hep-th, math-ph. Level 4: research.

**Definition.** Form the graph matrix with diagonal edge weights, a zero vertex block, and opposite transposed incidence blocks recording the oriented edge ends. Omit one vertex from the incidence blocks. A Dodgson polynomial is a signed determinant after deleting equally many edge rows and columns and setting selected weights to zero.

**Problem.** Take the surviving matrix X and two distinct surviving edge labels e and f present among both rows and columns. Set both weights to zero and order the selected rows and columns last, in the order e,f. Then det(X) times its double-deletion minor equals the product of the two principal deletion minors minus the product of the two cross minors.

**How the definition helps.** The determinant definition turns the graph identity into the Desnanot–Jacobi identity for a single matrix. Each single deletion removes one selected row and one selected column. Principal deletions use matching labels, while cross deletions use different labels. In our own explanation, the remaining work is matching the ordering signs when writing each minor as a Dodgson polynomial. A forest-sum definition would require a separate comparison with determinants.

**Paper or page:** [Geometries in perturbative quantum field theory](https://arxiv.org/abs/1905.08083v3). It says: “where every Dodgson is evaluated at the graph G.”

**Sources:**

- [Oliver Schnetz, Geometries in perturbative quantum field theory](https://doi.org/10.4310/cntp.2021.v15.n4.a2)

### Nonexceptional momenta preserve forest monomials

**Remember:** A nonzero momentum across each split keeps its monomial.

*Rules out counterexamples. Confidence: medium.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Assign Euclidean momentum vectors to the vertices of a finite connected massless graph with at least two vertices, with total momentum zero. A spanning two-forest uses every vertex and consists of two disjoint trees. Its weight is the squared norm of the total momentum in either tree. Define the second Symanzik polynomial by summing each forest’s weight times the product of the edge variables outside that forest.

**Problem.** If every spanning two-forest has nonzero momentum across its split, the monomials that appear are exactly the complements of all spanning two-forests. Their exponent vectors have a convex hull whose edges are parallel to differences of coordinate vectors.

**How the definition helps.** In our own argument, nonzero momentum across every split gives every forest a positive weight. Distinct forests have distinct complements, so each contributes its own monomial. For the edge directions, use the basis polytope theorem for matroids, the finite sets with a basis exchange rule. Here the bases are the acyclic edge sets with two fewer edges than vertices. Taking complements reflects their polytope and preserves edge directions. In our own triangle example with momenta q, −q and zero, the forest isolating the zero-momentum vertex loses its monomial.

**Paper or page:** [Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2). It says: “If we restrict to Euclidean and non-exceptional kinematics, then the Newton polytope of Ψ<sub>G</sub> and Φ<sub>G</sub> are generalized permutahedra.”

**Sources:**

- [Michael Borinsky, Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2)

### Planar duals keep their periods

**Remember:** Passing to the planar dual swaps tree edges with their complements.

*True by definition.* MSC 81T18 (Feynman diagrams), 81Q30. arXiv hep-th, math-ph. Level 4: research.

**Definition.** A spanning tree connects all vertices without a cycle. Define the first Symanzik polynomial Ψ by summing the product of weights outside each spanning tree. For a logarithmically divergent graph, its projective period integrates 1/Ψ² over positive edge weights with one weight fixed at one. Here logarithmic divergence means that the edge count equals twice the number of independent cycles.

**Problem.** A connected plane graph satisfying this count and having an absolutely convergent period has the same period as its plane dual. The dual has one vertex per face and one edge crossing each original edge.

**How the definition helps.** The tree formula makes duality a change of integration variables. In our own proof, tree complements are exactly the dual spanning trees. Substituting reciprocal weights therefore gives the dual polynomial divided by the product of all weights. The change of volume cancels the square of that product in the integral. The comparison with the original momentum integral uses the projective parameter formula.

**Paper or page:** [Invariant Differential Forms on Complexes of Graphs and Feynman Integrals](https://arxiv.org/abs/2101.04419v4). It says: “where the sum is over all spanning trees T ⊂ G.”

**Sources:**

- [Oliver Schnetz, Quantum periods: A census of φ⁴-transcendentals](https://doi.org/10.4310/cntp.2010.v4.n1.a1)
- [Francis Brown, Invariant Differential Forms on Complexes of Graphs and Feynman Integrals](https://doi.org/10.3842/sigma.2021.103)

### Primitive graphs have convergent periods

**Remember:** Remove the overall scale, but also forbid divergent subgraphs.

*Rules out counterexamples.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Take a connected graph with twice as many edges as independent cycles and at least one edge. Call it primitive if each nonempty proper edge subset has more edges than twice its number of independent cycles. Assign each edge a positive variable and define Ψ by summing, over spanning trees, the product of variables outside the tree. The period integrates 1/Ψ² over the simplex where the variables sum to one, using all but one variable as coordinates.

**Problem.** The period converges exactly when the graph is primitive. Two pairs of parallel edges arranged in a three-vertex chain give a divergent period.

**How the definition helps.** The definition checks exactly the boundary inequalities in the convergence theorem. The analytic work proves that these inequalities control every simultaneous approach to the boundary. In our own example, either parallel pair has two edges and one independent cycle, so its inequality fails.

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2). It says: “converges if and only if every proper subgraph $\\varnothing \\ne \\gamma \\subset G$ satisfies the condition $n<sub>\\gamma </sub> &gt; 2 l<sub>\\gamma </sub>$.”

**Sources:**

- [Claudia Rella, An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2)

### Subgraph powers test convergence

**Remember:** Subtract the whole-graph power only for subgraphs carrying all masses and momenta.

*Makes the theorem clean to state or prove.* MSC 81T18 (Feynman diagrams), 81Q30. arXiv hep-th, math-ph. Level 4: research.

**Definition.** For an edge set S, add its propagator exponents, the powers of its denominator factors in the momentum integral. Subtract D/2 times its number of independent cycles, where D is the dimension, and call the result ω(S). If S contains all massive edges and one component contains all external momentum insertions, subtract ω(G) as well. Call the result the corrected power of S.

**Problem.** Take a connected scalar diagram with positive real propagator exponents and Euclidean momenta. Assume no proper nonempty subset of nonzero incoming momenta sums to zero and the second Symanzik polynomial is nonzero. Its projective parameter integral converges if every nonempty proper edge set has positive corrected power.

**How the definition helps.** The corrected power gives the exponent that tests convergence when a group of edge parameters approaches zero together. In our own explanation, order the parameters by size and rescale successive groups using ratios between zero and one. Each resulting endpoint integral has the form ∫₀¹ tʳ⁻¹ dt with r equal to a corrected power, up to bounded factors. Borinsky’s polynomial bounds and sector decomposition justify this reduction. Removing the single overall scale gives the projective integral tested here.

**Paper or page:** [Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2), [Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2). It says: “A facet presentation of these polytopes is given by the supermodular functions”

**Sources:**

- [Michael Borinsky, Tropical Monte Carlo quadrature for Feynman integrals](https://doi.org/10.4171/aihpd/158)

### Tree complements expose leading scaling

**Remember:** A spanning tree leaves at least one omitted edge per independent cycle.

*True by definition.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 4: research.

**Definition.** A spanning tree connects every vertex without forming a cycle. Give each edge of a finite connected graph an indeterminate. Define its first Symanzik polynomial Ψ by summing, over spanning trees, the product of the indeterminates outside the tree. Multiply every indeterminate in a connected subgraph γ by t.

**Problem.** The lowest power of t in Ψ is the number of independent cycles in γ. Its coefficient is Ψ(γ)Ψ(G/γ), where G/γ contracts γ to one vertex and discards its edges.

**How the definition helps.** In our own proof, the tree formula turns the lowest power into the smallest number of omitted edges of γ. A tree attains that minimum exactly when its restriction spans γ as a tree. Such trees correspond to pairs of spanning trees, one in γ and one in G/γ. Their monomials give the product formula. Identifying this tree sum with the denominator from loop integration is a separate theorem.

**Paper or page:** [Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2). It says: “z<sub>\\Psi \_G</sub>(\\gamma ) &amp;= \\ell (\\gamma )”

**Sources:**

- [Michael Borinsky, Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2)
- [Spencer Bloch, Hélène Esnault and Dirk Kreimer, On Motives Associated to Graph Polynomials (2006)](https://doi.org/10.1007/s00220-006-0040-2)

### Triangle cuts factor periods

**Remember:** A separating triple becomes the shared triangle of the two factors.

*Makes the theorem clean to state or prove.* MSC 81T18 (Feynman diagrams), 81Q30. arXiv hep-th, math-ph. Level 4: research.

**Definition.** Complete a massless four-dimensional φ⁴ diagram by joining its four external ends at a new vertex. Call the completion primitive when a vertex deletion satisfies two edge counts. Its edge count equals twice its independent cycle count, and every nonempty proper edge subset has more edges than twice its independent cycle count. The period is the scale-free integral of a vertex deletion.

**Problem.** Suppose removing three vertices disconnects a completed primitive graph. Its two factors each retain those vertices and restore the triangle between them. The original period equals the product of their periods.

**How the definition helps.** Restoring the triangle identifies the two graphs whose integrals occur in the product. The cited theorem proves the decomposition and factorization. In our own explanation, fix the three common positions at zero, a unit vector, and infinity. The remaining variables then integrate independently on each side.

**Paper or page:** [The Galois coaction on φ⁴ periods](https://arxiv.org/abs/1603.04289v2). It says: “Its period is the product”

**Sources:**

- [Oliver Schnetz, Quantum periods: A census of φ⁴-transcendentals](https://doi.org/10.4310/cntp.2010.v4.n1.a1)
- [Erik Panzer and Oliver Schnetz, The Galois coaction on φ⁴ periods](https://doi.org/10.4310/cntp.2017.v11.n3.a3)

### Two-point momenta identify two vertices

**Remember:** Only forests that separate the two external vertices carry momentum.

*True by definition. Confidence: medium.* MSC 81T18 (Feynman diagrams), 05C31. arXiv hep-th, math-ph. Level 4: research.

**Definition.** A spanning forest with two trees covers every vertex and has two connected components without cycles. For a massless diagram, define its second Symanzik polynomial by summing over these forests. Each term multiplies the weights outside the forest by the squared Euclidean norm of the total external momentum in one component.

**Problem.** Let a connected massless diagram have external momenta p and −p at two distinct vertices and zero elsewhere. Identify these vertices. The original second polynomial equals ‖p‖² times the first Symanzik polynomial of the resulting graph.

**How the definition helps.** The forest formula makes the two momentum insertions select precisely the trees of the identified graph. In our own proof, only separating forests have nonzero momentum factor when p is nonzero. Identifying the marked vertices gives a bijection from separating forests to spanning trees, preserving every omitted edge. The first polynomial sums the products of the omitted weights. Both sides vanish when p is zero. Deriving the forest formula from the momentum integral supplies the comparison with the original definition.

**Paper or page:** [Invariant Differential Forms on Complexes of Graphs and Feynman Integrals](https://arxiv.org/abs/2101.04419v4). It says: “the sum is over all spanning trees T ⊂ G.”

**Sources:**

- [Michael Borinsky, Tropical Monte Carlo quadrature for Feynman integrals](https://doi.org/10.4171/aihpd/158)

### Weight bounds forbid a final letter

**Remember:** A final letter is what remains when the coaction removes its prefix.

*Makes the theorem clean to state or prove.* MSC 81T18 (Feynman diagrams), 11M32. arXiv hep-th, math.NT. Level 4: research.

**Definition.** A motivic period records algebraic data defining an integral as well as its value. The level-six f-alphabet represents such cyclotomic periods by weighted words and powers of 2πi. Cyclotomic periods here use repeated integrals at sixth roots of unity. The coaction, which records algebraic symmetries of periods, cuts these words into prefixes and suffixes.

**Problem.** Consider a primitive massless φ⁴ period, the scale-free integral of a four-valent graph with no divergent proper subgraph. If its motivic period belongs to the level-six algebra, no word ends in the weight-two letter f₂⁶.

**How the definition helps.** The alphabet expresses a symmetry restriction as a ban on one final letter. That letter represents the dilogarithm at a primitive sixth root, up to the chosen normalization and powers of 2πi. The small graphs theorem excludes this dilogarithm among the period’s conjugates, the components exposed by the coaction.

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2), [The Galois coaction on φ⁴ periods](https://arxiv.org/abs/1603.04289v2). It says: “In other words, f₂⁶ cannot appear as the right-most letter in the f-alphabet representation.”

**Sources:**

- [Francis Brown, Feynman amplitudes, coaction principle, and cosmic Galois group](https://doi.org/10.4310/cntp.2017.v11.n3.a1)
- [Erik Panzer and Oliver Schnetz, The Galois coaction on φ⁴ periods](https://doi.org/10.4310/cntp.2017.v11.n3.a3)

### Causal embeddings preserve Hadamard kernels

**Remember:** Causal convexity keeps the light rays joining two image points inside.

*Makes the theorem clean to state or prove.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 4: research.

**Definition.** Consider an open isometric embedding between time-oriented, globally hyperbolic spacetimes without boundary. Require it to preserve time orientation and have causally convex image. Every causal curve joining two image points must then stay inside the image.

**Problem.** Fix a real Klein–Gordon field with the same mass and curvature coupling on both spacetimes. Pulling a Hadamard two-point function back along the embedding gives a Hadamard two-point function on the smaller spacetime.

**How the definition helps.** Causal convexity keeps each light ray joining image points inside, so restriction preserves the Hadamard condition (our own argument). That condition specifies pairs of singular directions related by parallel transport along light rays, with the first direction future-directed. Restriction to an open set retains precisely the singular directions there. Extending compactly supported tests by zero preserves positivity, and uniqueness of advanced and retarded solutions identifies the commutator.

**nLab:** [causally local net of observables](https://ncatlab.org/nlab/show/causally+local+net+of+observables), [Hadamard distribution](https://ncatlab.org/nlab/show/Hadamard+distribution). It says: “the wave front set is one causal half that of the causal propagator:”

**Sources:**

- [Brunetti, Fredenhagen and Verch, The Generally Covariant Locality Principle](https://doi.org/10.1007/s00220-003-0815-7)
- [Radzikowski, Micro-local approach to the Hadamard condition in quantum field theory on curved space-time](https://doi.org/10.1007/BF02100096)

### Geometric subtraction makes Wick squares covariant

**Remember:** Use the same local geometric subtraction on every spacetime.

*Rules out counterexamples.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 4: research.

**Definition.** For a free real scalar field, subtract the local Hadamard parametrix from the product of fields at two nearby points. This kernel uses the metric and field equation to reproduce the singular part at short distances. Taking the resulting diagonal value defines the Wick square. Fix the subtraction length and any finite local curvature terms throughout.

**Problem.** Consider globally hyperbolic four-dimensional spacetimes with the same mass and curvature coupling. The Wick square commutes with orientation- and time-orientation-preserving isometric embeddings with causally convex image.

**How the definition helps.** The geometric subtraction agrees near corresponding points because an isometry preserves the local metric (our own explanation). The construction of the kernel and the existence of the diagonal restriction carry the analytic work. Subtracting a chosen state’s full two-point function can break this agreement. For example, shifting the flat vacuum by a classical solution adds the solution’s square on the diagonal, which can vary under translations.

**nLab:** [perturbative algebraic quantum field theory](https://ncatlab.org/nlab/show/perturbative+algebraic+quantum+field+theory). It says: “The construction of Wick algebras of quantum observables of free fields on curved spacetimes via Hadamard distributions relies on the results of”

**Sources:**

- [Hollands and Wald, Local Wick Polynomials and Time Ordered Products of Quantum Fields in Curved Spacetime](https://doi.org/10.1007/s002200100540)

### Hadamard differences are smooth

**Remember:** The difference has no singular direction left once symmetry reverses those directions.

*True by definition.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph, hep-th. Level 4: research.

**Definition.** A two-point function records correlations between two field values. Its wave front set records where singularities occur and their directions. The Hadamard condition selects pairs of directions along light rays, future-directed at the first point and opposite after transport to the second. The field commutation rule fixes the antisymmetric part.

**Problem.** Consider the same free real scalar field on a globally hyperbolic spacetime, where a spatial slice determines evolution. Any two Hadamard two-point functions differ by a smooth function.

**How the definition helps.** The chosen directions rule out every singularity of a symmetric difference. In our own proof, the common antisymmetric part cancels, so exchanging the two arguments preserves the difference. Every possible singular direction points toward the future in the first argument and toward the past in the second. Exchanging the arguments would reverse that requirement. An empty wave front set means the difference is smooth. Radzikowski proved that the direction condition agrees with the older local expansion of the singularity.

**nLab:** [Hadamard distribution](https://ncatlab.org/nlab/show/Hadamard+distribution). It says: “the wave front set is one causal half that of the causal propagator”

**Sources:**

- [Marek Radzikowski, Micro-local approach to the Hadamard condition in quantum field theory on curved space-time (1996)](https://doi.org/10.1007/BF02100096)

### Hadamard pairings satisfy the spectrum condition

**Remember:** Every singular direction in a pairing comes from an oriented light ray.

*Makes the theorem clean to state or prove.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 4: research.

**Definition.** For a centered quasifree state, odd correlations vanish. Each even correlation sums over pairings of its arguments, taking one two-point function for each pair and preserving their order. The Hadamard condition pairs singular directions along light rays by parallel transport, with a future-directed first direction and a reversed second direction.

**Problem.** For a free real Klein–Gordon field on a globally hyperbolic spacetime without boundary, every centered quasifree Hadamard state satisfies the microlocal spectrum condition. This condition bounds singular directions at all orders by sums of directed momenta carried by graph edges between arguments.

**How the definition helps.** Each pairing gives a graph whose disjoint edges already have the required time orientation (our own explanation). The distributional tensor product places a permitted singular pair on each active edge and zero directions on the others. Adding the pairing terms creates no new singular directions. The analytic input is the wave front bound for tensor products.

**nLab:** [quasi-free quantum state](https://ncatlab.org/nlab/show/quasi-free+quantum+state), [Hadamard distribution](https://ncatlab.org/nlab/show/Hadamard+distribution). It says: “its 2-point function determines all its n-point functions.”

**Sources:**

- [Brunetti, Fredenhagen and Köhler, The microlocal spectrum condition and Wick polynomials of free fields on curved spacetimes](https://doi.org/10.1007/BF02099626)

### Removing Maxwell flux restores injectivity

**Remember:** Remove flux classes that can disappear when a region is enlarged.

*Rules out counterexamples.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 4: research.

**Definition.** On an oriented, time-oriented, globally hyperbolic four-dimensional spacetime, test the source-free Maxwell field with smooth compactly supported two-forms. For the universal theory identify tests differing by an exterior derivative or its formal adjoint applied to a compactly supported form. Its skew bilinear form determines the field commutator. The reduced theory also removes its radical, the classes pairing to zero with every test.

**Problem.** Consider orientation- and time-orientation-preserving isometric embeddings with open, causally convex image, so causal curves between image points stay inside. The reduced Maxwell theory assigns injective maps to these embeddings, both for classical test classes and for their quantized field algebras.

**How the definition helps.** Removing the radical forces any induced map preserving the skew form to be injective (our own explanation). A class mapping to zero pairs to zero with every source class and hence vanishes. Fewster and Lang identify the radical and prove that embeddings carry it into the target radical. Their quantization preserves these injections. In the universal theory a nonzero flux class can vanish when its region embeds in a larger spacetime.

**nLab:** [causally local net of observables](https://ncatlab.org/nlab/show/causally+local+net+of+observables). It says: “A causally local net of observables is a functor”

**Sources:**

- [Fewster and Lang, Dynamical Locality of the Free Maxwell Field](https://link.springer.com/article/10.1007/s00023-015-0398-9)

### Tensorial lapse rotation respects coordinates

**Remember:** Rotate the normal tensor while keeping the chosen slicing fixed.

*True by definition.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 4: research.

**Definition.** Fix a slicing by spacelike hypersurfaces of a Lorentzian metric g with negative time direction. Let n be its unit normal covector and θ a real angle. Rotating the lapse, which converts coordinate time to normal proper time, gives the complex metric g + (1 − exp(−2iθ)) n ⊗ n.

**Problem.** For a fixed slicing, lapse rotation commutes with coordinate changes when they also transform the normal covector. It need not agree with a new rotation based on another slicing.

**How the definition helps.** Writing the rotation with the normal covector makes its coordinate transformation law immediate (our own explanation). Pullback preserves tensor products and sums. The paper identifies this tensor with the coordinate formula that rotates the lapse. Two different inertial slicings of flat spacetime have different normal tensors and give different metrics whenever exp(−2iθ) differs from one.

**Paper or page:** [Wick rotation in the lapse, admissible complex metrics, and foliation changing diffeomorphisms](https://arxiv.org/abs/2406.06047), [Wick rotation in the lapse, admissible complex metrics, and foliation changing diffeomorphisms](https://arxiv.org/abs/2406.06047). It says: “It is invariantly defined with respect to passive and active diffeomorphisms but depends on the choice of fiducial foliation.”

**Sources:**

- [Wick rotation in the lapse, admissible complex metrics, and foliation changing diffeomorphisms](https://arxiv.org/abs/2406.06047)

### Time slices compare spacetime dynamics

**Remember:** Use unchanged past and future slices to compare two metrics.

*Makes the theorem clean to state or prove.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds), 81T05. arXiv math-ph. Level 4: research.

**Definition.** Assign each spacetime an algebra of observables and each inclusion preserving the causal structure a map that respects composition. A Cauchy surface meets every inextendible causal path exactly once. The time slice axiom makes the inclusion map invertible whenever the smaller region contains such a surface of the larger spacetime.

**Problem.** A compactly supported change of the metric that preserves global hyperbolicity gives an automorphism of the original observable algebra. Global hyperbolicity ensures the spacetime admits a surface for complete initial data.

**How the definition helps.** In our own construction, the time slice axiom makes each comparison through an unchanged region reversible. A past region gives an isomorphism from the old algebra to the new one. A future region gives an isomorphism back. Their composition compares the dynamics within the original algebra. The work lies in finding common Cauchy regions and verifying the axiom for the field equations.

**nLab:** [time slice axiom](https://ncatlab.org/nlab/show/time+slice+axiom). It says: “if whenever a causal inclusion of Lorentzian spaces O₁ ↪︎ O₂ is such that O₁ contains a Cauchy surface of O₂ then A(O₁ ↪︎ O₂) is an isomorphism.”

**Sources:**

- [Romeo Brunetti, Klaus Fredenhagen and Rainer Verch, The Generally Covariant Locality Principle (2003)](https://doi.org/10.1007/s00220-003-0815-7)

### Even self-dual lattices ensure modularity

**Remember:** Even norms remove shift phases, and self-duality closes the Fourier transform.

*Rules out counterexamples.* MSC 81T30 (String and superstring theories; other extended objects (e.g., branes) in quantum field theory), 81T40. arXiv hep-th. Level 4: research.

**Definition.** Write each vector of a full lattice Λ in ℝᵈ × ℝᵈ as (x,y), with squared length ‖x‖² − ‖y‖² for the indefinite form. Evenness means every such length is an even integer, and self-duality means Λ equals its dual under this form. For Im τ &gt; 0, sum exp(πiτ‖x‖² − πiτ̄‖y‖²) over Λ. Divide by \|η(τ)\|²ᵈ, where the Dedekind eta function equals exp(πiτ/12) times the product of 1 − exp(2πinτ) over positive integers n.

**Problem.** For an even self-dual lattice of signature (d,d), this partition function is unchanged by τ ↦ τ + 1 and τ ↦ −1/τ.

**How the definition helps.** Evenness makes every shift phase equal to one, and self-duality makes Fourier summation return the original lattice. The odd lattice with diagonal form (1,−1) contains a vector of squared length one (our own). Its term changes sign under the shift (our own). Poisson summation gives the inversion law for the lattice sum, and the eta factors cancel its powers of τ and τ̄.

**Paper or page:** [Non-Chiral Vertex Operator Algebra Associated To Lorentzian Lattices And Narain CFTs](https://arxiv.org/abs/2312.16296v2). It says: “is a modular invariant non-chiral CFT.”

**Sources:**

- [Non-Chiral Vertex Operator Algebra Associated To Lorentzian Lattices And Narain CFTs](https://arxiv.org/abs/2312.16296v2)

### Jump factors glue partition functions

**Remember:** Use each jump as a change of coordinates.

*True by definition.* MSC 81T30 (String and superstring theories; other extended objects (e.g., branes) in quantum field theory), 14N35. arXiv math-ph, math.AG. Level 4: research.

**Definition.** For the resolved conifold, sum the formal partition series in each admissible direction to obtain local functions on sectors of the coupling plane. A sector is an angular region where the chosen sum exists. Use the multiplicative jumps between normalized sums as changes of fiber coordinate for a complex line bundle.

**Problem.** Assume Im(v/w) &gt; 0 for the conifold parameters v and w. The normalized sector sums then define a global section of the line bundle determined by the jumps.

**How the definition helps.** Using the jump as a coordinate change makes neighboring sums describe the same section (our own). Gluing them as ordinary functions would require equality on every overlap (our own). The analytic work computes the jumps and proves their products agree on triple overlaps.

**Paper or page:** [Mathematical structures of non-perturbative topological string theory: from GW to DT invariants](https://arxiv.org/abs/2109.06878v2). It says: “glue together into a section of ℒ.”

**Sources:**

- [Mathematical structures of non-perturbative topological string theory: from GW to DT invariants](https://arxiv.org/abs/2109.06878v2)

### Cutting curves proves fusion associativity

**Remember:** Both sums count the rank of the same bundle.

*True by definition.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics), 17B69. arXiv math.QA, math-ph. Level 4: research.

**Definition.** On a sphere mark 0, 1 and ∞ with simple modules A, B and the graded dual of C. Blocks are linear functionals on their tensor product that vanish on the action of global meromorphic fields regular outside the marks. Define the fusion coefficient N(A,B,C) as the dimension of this space. The operator definition counts independent series that intertwine the field actions and combine A and B into C.

**Problem.** Assume a simple complex vertex operator algebra with nonnegative integral weights, a one-dimensional vacuum space at weight zero, and an invariant nondegenerate pairing. Assume every module graded compatibly by nonnegative integers splits into simples and products of mode −2 span a subspace of finite codimension. On the free abelian group of simple labels, the product with coefficients N(A,B,C) is associative.

**How the definition helps.** Both ways to multiply three labels compute the rank of the same four-point bundle. Let the four-point sphere split into two spheres meeting at one point. Factorization sums over simple labels at the join, pairing each label with its dual. Each summand contributes the product of two three-point dimensions. The two splittings give the two orders of multiplication. The vector bundle theorem makes the rank constant throughout the connected family, including both limits.

**Paper or page:** [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1), [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1), [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1). It says: “The multiplication on Fu(V) is associative.”

**Sources:**

- [Xu Gao, Jianqi Liu, Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1)

### Projectively flat blocks give actions

**Remember:** Transport lines around loops to get the mapping class action.

*True by definition.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics), 18M20. arXiv math-ph, math.QA. Level 4: research.

**Definition.** A modular functor assigns a holomorphic vector bundle of conformal blocks to the moduli stack of labelled surfaces with parametrized boundary. The stack records surface symmetries as well as conformal structures. A projectively flat connection gives transport of lines in each fiber that depends only on the homotopy class of the path.

**Problem.** For a connected surface with nonempty parametrized boundary and a nonzero block space, its mapping class group acts projectively on that space. This group consists of orientation-preserving diffeomorphisms fixing the boundary pointwise, modulo isotopy fixing the boundary.

**How the definition helps.** Our own argument transports lines around loops, giving linear maps up to scalar that respect composition. The fundamental group of this moduli stack is the mapping class group. An assignment of separate spaces would supply no transport. The work lies in the theorem giving the bundle its projectively flat connection.

**nLab:** [modular functor](https://ncatlab.org/nlab/show/modular+functor). It says: “this bundle carries a canonical projectively flat connection ∇Σ compatible with the sewing operation”

**Sources:**

- [Graeme Segal, The Definition of Conformal Field Theory](https://doi.org/10.1017/CBO9780511526398.019)

### Specialness erases correlator bubbles

**Remember:** A normalized special algebra erases a split followed by a merge.

*Rules out counterexamples.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics), 18M20. arXiv math.QA, math-ph. Level 4: research.

**Definition.** In the ribbon diagrams for rational conformal field theory, a Frobenius algebra labels a merge by multiplication m and a split by comultiplication Δ. The Frobenius identity lets multiplication on either output of Δ pass to its input. Normalized specialness requires m ∘ Δ to be the identity on the algebra.

**Problem.** In the ribbon graph construction with a normalized special symmetric Frobenius algebra, inserting a split immediately followed by a merge preserves the correlator. The correlator is the vector assigned to the labelled surface.

**How the definition helps.** The inserted piece represents m ∘ Δ, so normalized specialness makes it an identity strand. Our own counterexample takes ℂ\[x\]/(x²) with the linear functional sending x to one and 1 to zero. Here Δ(1) = 1 ⊗ x + x ⊗ 1, so mΔ(1) = 2x. No scalar rescaling turns this composite into the identity. The construction theorem relates these diagram identities to changes of triangulation.

**nLab:** [FRS-theorem on rational 2d CFT](https://ncatlab.org/nlab/show/FRS-theorem+on+rational+2d+CFT). It says: “triangulating the surface suitably, labelling the triangulation with a Frobenius algebra object internal to the modular tensor category”

**Sources:**

- [Fuchs, Runkel and Schweigert, TFT construction of RCFT correlators I: Partition functions](https://doi.org/10.1016/S0550-3213(02)00744-7)

### Swapping points makes fusion commutative

**Remember:** Swap the two inputs and count the same blocks.

*True by definition.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics), 17B69. arXiv math.QA, math-ph. Level 4: research.

**Definition.** On a sphere mark 0, 1 and ∞ with simple modules A, B and the graded dual of C. Blocks are linear functionals on their tensor product that vanish on the action of global meromorphic fields regular outside the marks. Define the fusion coefficient N(A,B,C) as the dimension of this space. The operator definition counts independent series that intertwine the field actions and combine A and B into C.

**Problem.** Assume a simple complex vertex operator algebra with nonnegative integral weights, a one-dimensional vacuum space at weight zero, and an invariant nondegenerate pairing. Assume every module graded compatibly by nonnegative integers splits into simples and products of mode −2 span a subspace of finite codimension. Then N(A,B,C) equals N(B,A,C).

**How the definition helps.** In our own argument, exchanging the input points gives an isomorphism of the two block spaces. The map z ↦ 1 − z performs this exchange and fixes infinity. Transporting the local coordinates preserves dimension. The comparison theorem identifies these dimensions with the operator counts.

**Paper or page:** [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1), [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1). It says: “The multiplication on Fu(V) is commutative.”

**Sources:**

- [Xu Gao, Jianqi Liu, Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1)

### Trivial turns let conformal nets descend

**Remember:** A scalar full turn makes the lift invisible.

*Makes the theorem clean to state or prove.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics). arXiv math-ph, hep-th. Level 4: research.

**Definition.** A conformal net assigns an algebra of observables to each interval and moves these algebras under angle-preserving changes of coordinates. On the line, the lifted symmetry action can distinguish a full turn from doing nothing. Require a full turn to multiply every state by the same scalar.

**Problem.** Under this condition, a conformal net on the line extends to a conformal net on the circle.

**How the definition helps.** In our own explanation, the full-turn condition makes transport of observable algebras independent of the chosen lift. Two lifts represent the same circle symmetry and differ by whole turns. Scalar factors cancel when a symmetry acts on an operator by conjugation. The extension theorem must still show that the transported algebras satisfy the net axioms.

**Paper or page:** [Wightman fields for two-dimensional conformal field theories with pointed representation category](https://arxiv.org/abs/2301.12310v3). It says: “that is, the lift of 2π-rotation is trivial.”

**Sources:**

- [Wightman fields for two-dimensional conformal field theories with pointed representation category](https://arxiv.org/abs/2301.12310v3)

### Vacuum insertion gives the fusion unit

**Remember:** Erase a vacuum point to read off the fusion unit.

*True by definition.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics), 17B69. arXiv math.QA, math-ph. Level 4: research.

**Definition.** On a sphere mark 0, 1 and ∞ with simple modules A, B and the graded dual of C. Blocks are linear functionals on their tensor product that vanish on the action of global meromorphic fields regular outside the marks. Define the fusion coefficient N(A,B,C) as the dimension of this space. The operator definition counts independent series that intertwine the field actions and combine A and B into C.

**Problem.** Assume a simple complex vertex operator algebra with nonnegative integral weights, a one-dimensional vacuum space at weight zero, and an invariant nondegenerate pairing. Assume every module graded compatibly by nonnegative integers splits into simples and products of mode −2 span a subspace of finite codimension. The algebra itself, as a module, is the identity for fusion.

**How the definition helps.** Removing the vacuum point turns the fusion coefficient into the dimension of a space of module maps. The vacuum insertion theorem permits this removal. In our own argument, the remaining two-point blocks are invariant pairings between the input and the graded dual of the output. These are module maps from input to output. For simple modules the dimension is one if they are isomorphic and zero otherwise. The same calculation works with either input occupied by the vacuum.

**Paper or page:** [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1), [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1). It says: “The multiplication on Fu(V) has an identity.”

**Sources:**

- [Xu Gao, Jianqi Liu, Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1)

### Boundary lines make flat restrictions isotropic

**Remember:** A parallel action vector makes the pulled-back curvature vanish.

*True by definition.* MSC 81T45 (Topological field theories in quantum mechanics), 81T13. arXiv math-ph, math.DG. Level 4: research.

**Definition.** Fix SU(2) and level one, the normalization given by the second Chern class. The exponentiated Chern–Simons action on a compact oriented three-manifold takes values in a complex line attached to its boundary connection. These lines carry a connection whose curvature is a nonzero multiple of the boundary symplectic form.

**Problem.** Restrict flat connections to the boundary, identifying connections related by changes of frame. On the smooth irreducible loci of both spaces, restriction pulls the boundary symplectic form back to zero. Here irreducible means that only central changes of frame preserve the connection.

**How the definition helps.** The line-valued action is a nonzero parallel section over flat connections, so its pulled-back line curvature is zero. Our own comparison puts the work in the Chern–Simons variation formula and the identification of the line curvature with the boundary symplectic form.

**Paper or page:** [Lie groups and Chern-Simons Theory](https://arxiv.org/abs/2207.11062). It says: “and therefore the induced symplectic form rₓ\* ω vanishes.”

**Sources:**

- [Daniel S. Freed, Classical Chern-Simons Theory, 1](https://doi.org/10.1006/aima.1995.1039)

### Cardy makes annulus cuts agree

**Remember:** An annulus gives the same map whether you cut across it or around it.

*True by definition.* MSC 81T45 (Topological field theories in quantum mechanics). arXiv math.QA. Level 4: research.

**Definition.** For one boundary label, take finite-dimensional unital complex algebras A for intervals and C for circles, with C commutative. Each has a trace ε giving a nondegenerate symmetric pairing ε(ab). A unital map i from C into the center of A has adjoint j for these pairings. The Cardy condition requires i(j(a)) = ∑ᵢ eⁱaeᵢ for every a, using trace-dual bases of A.

**Problem.** The two decompositions of an annulus from an interval to an interval give the same operator on A.

**How the definition helps.** The Cardy condition replaces a comparison of two surface decompositions with one algebraic axiom. Cutting along a circle gives i(j(a)). The interval cut gives the dual-basis sum. The classification theorem proves that these and the other sewing relations suffice.

**Paper or page:** [Frobenius--Schur indicators for twisted Real representation theory and two dimensional unoriented topological field theory](https://arxiv.org/abs/2310.03566v1). It says: “The oriented Cardy condition”

**Sources:**

- [Frobenius--Schur indicators for twisted Real representation theory and two dimensional unoriented topological field theory](https://arxiv.org/abs/2310.03566v1)

### Crosscap squares obstruct unoriented extensions

**Remember:** Two crosscaps must equal the handle with one reversed circle.

*Rules out counterexamples.* MSC 81T45 (Topological field theories in quantum mechanics). arXiv math.QA. Level 4: research.

**Definition.** Start with a finite-dimensional commutative unital complex algebra with a trace ε such that ε(ab) pairs elements nondegenerately. An unoriented Frobenius algebra adds a trace-preserving algebra involution p and the Möbius band state Q. It requires p(Qa) = Qa for every a and Q² = ∑ᵢ p(aⁱ)aᵢ for trace-dual bases.

**Problem.** The oriented theory of ℂ\[x\] modulo x² with trace ε(1) = 0 and ε(x) = 1 has no unoriented extension.

**How the definition helps.** The square condition tests whether the Möbius band can receive a consistent value. In our own calculation, p preserves the nilpotent line ℂx and its trace, so p(x) = x. The bases (1,x) and (x,1) are dual, giving Q² = 2x. Any square with zero constant term is zero here. The classification of unoriented surface theories supplies the square condition.

**Paper or page:** [Frobenius--Schur indicators for twisted Real representation theory and two dimensional unoriented topological field theory](https://arxiv.org/abs/2310.03566v1). It says: “the equality Q² = ∑ᵢ p(aⁱ) aᵢ holds.”

**Sources:**

- [Frobenius--Schur indicators for twisted Real representation theory and two dimensional unoriented topological field theory](https://arxiv.org/abs/2310.03566v1)

### Dual lines glue Chern–Simons actions

**Remember:** Opposite sides of a cut supply dual lines.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T45 (Topological field theories in quantum mechanics), 81T13. arXiv math-ph, math.DG. Level 4: research.

**Definition.** Fix SU(2) and level one, the normalization given by the second Chern class. On a compact oriented three-manifold with boundary, the exponentiated Chern–Simons action is a vector in a complex line determined by the boundary connection. Reversing the boundary orientation gives the dual line.

**Problem.** Cut a closed oriented three-manifold along a separating closed oriented surface and restrict a smooth connection to both pieces. Pairing their two action vectors gives the exponentiated action on the closed manifold.

**How the definition helps.** In our own calculation, the dual lines supply a pairing independent of a boundary frame. Choose the same frame on both sides. The two integrals add under gluing, so their exponentials multiply. Freed’s boundary transformation law shows that changing the frame produces inverse factors on the two sides.

**nLab:** [Chern-Simons theory](https://ncatlab.org/nlab/show/Chern-Simons+theory). It says: “take advantage of the higher gluing laws in order to compute geometric quantities.”

**Sources:**

- [Daniel S. Freed, Classical Chern-Simons Theory, 1](https://doi.org/10.1006/aima.1995.1039)

### Spin-statistics for topological field theories follows from a sign-twisted duality structure

**Remember:** Put the fermion sign into the rule for duals and adjoints.

*Makes the theorem clean to state or prove.* MSC 81T45 (Topological field theories in quantum mechanics), 18M05. arXiv math-ph, math.CT. Level 4: research.

**Definition.** A dagger reverses maps and acts like an adjoint. A fermionically dagger compact category also has dual objects, which describe reversed boundaries or dual vector spaces in the examples. Its compatibility rule between adjoints and duals includes a parity operation, which gives a minus sign on odd states.

**Problem.** In the paper's unitary topological field theories on spin bordisms, a full spin rotation acts by fermion parity. These theories assign linear maps to spin spacetimes viewed as ways to connect their boundaries.

**How the definition helps.** The modified duality rule puts the sign into the structure that a theory must preserve. In our own words, one can then apply a general functor theorem rather than proving a separate sign identity for each theory. The work moves to checking this structure on spin bordisms and on Hilbert spaces graded by parity.

**Paper or page:** [The spin-statistics theorem for topological quantum field theories](https://arxiv.org/abs/2403.02282v2). It says: “The spin-statistics theorem for TQFTs emerges as a specific case of a more general result concerning symmetric monoidal dagger functors between fermionically dagger compact categories.”

**Sources:**

- [Luuk Stehouwer, The spin-statistics theorem for topological quantum field theories, arXiv:2403.02282v2 (2024)](https://arxiv.org/abs/2403.02282v2)

### The pentagon governs tetrahedron moves

**Remember:** The two local triangulations are two routes around the associator pentagon.

*Makes the theorem clean to state or prove.* MSC 81T45 (Topological field theories in quantum mechanics). arXiv math.QA. Level 4: research.

**Definition.** Use a spherical fusion category over ℂ, a category with finitely many simple labels, duals and equal left and right traces. The associator changes brackets in a triple tensor product. Its matrix coefficients, with the trace pairings on triangle spaces, supply the tetrahedron weights.

**Problem.** Fix the labels and face data on the boundary of a bipyramid in the Turaev–Viro state sum. The two-tetrahedron contraction equals the three-tetrahedron contraction summed over the new edge label with its quantum dimension.

**How the definition helps.** Choosing associator coefficients as weights expresses the local move through the pentagon identity. That identity equates the two routes for rebracketing four factors. Our own description reads the intermediate labels as the indices summed in matrix multiplication. The proof identifies the trace pairings and dimension factors with the normalized contractions. Full triangulation invariance also needs the move introducing a vertex.

**nLab:** [Turaev-Viro model](https://ncatlab.org/nlab/show/Turaev-Viro+model). It says: “is a 3d TQFT construction induced from a spherical category/fusion category C.”

**Sources:**

- [Barrett and Westbury, Invariants of piecewise-linear 3-manifolds](https://doi.org/10.1090/S0002-9947-96-01660-1)

### Unitary surface theories exclude nilpotents

**Remember:** A normal nilpotent multiplication operator must vanish.

*Rules out counterexamples.* MSC 81T45 (Topological field theories in quantum mechanics). arXiv math.QA. Level 4: research.

**Definition.** A unitary oriented surface theory assigns finite-dimensional complex Hilbert spaces to closed curves and linear maps to oriented surfaces between them. Reversing a surface gives the Hilbert adjoint map. A pair of pants with two inputs defines multiplication on the circle space.

**Problem.** The circle algebra of a unitary oriented surface theory has no nonzero nilpotent element, meaning an element whose power vanishes.

**How the definition helps.** Unitarity makes multiplication by any element commute with its adjoint. Reflecting the pair of pants identifies that adjoint with multiplication by the reflected element, and the circle product is commutative. In our own proof, multiplication by a nilpotent is therefore both normal and nilpotent. The spectral theorem makes this operator zero. Applying it to the unit gives the original element.

**nLab:** [unitary functorial field theory](https://ncatlab.org/nlab/show/unitary+functorial+field+theory). It says: “is called "unitary" if it is a dagger functor.”

**Sources:**

- [Zhu, The Hermitian axiom on two-dimensional topological quantum field theories](https://doi.org/10.1063/5.0121440)

### One generator tests global anomalies

**Remember:** A character of a cyclic bordism group is fixed by one value.

*Makes the theorem clean to state or prove.* MSC 81T50 (Anomalies in quantum field theory), 57R56. arXiv math-ph. Level 4: research.

**Definition.** Let G be the quotient of Spin × SU(8) by the diagonal subgroup generated by (−1,−I). A G-structure lifts the oriented frame bundle together with its gauge data to G. Two closed G-manifolds are bordant when their oriented difference bounds a compact G-manifold. A bordism character sends disjoint unions to products of unit complex numbers.

**Problem.** Give the Wu manifold SU(3)/SO(3) the G-structure constructed by Debray and Yu. A character of five-dimensional G-bordism is trivial exactly when its value on this manifold is one.

**How the definition helps.** A character on a cyclic group is determined by its value on one generator. Debray and Yu compute the bordism group as ℤ/2 and identify its generator. They then evaluate the anomaly of four-dimensional supergravity on that generator.

**Paper or page:** [What bordism-theoretic anomaly cancellation can do for U](https://arxiv.org/abs/2210.04911v2). It says: “In this group, the anomaly field theory of 4d 𝒩 = 8 supergravity is trivial.”

**Sources:**

- [Arun Debray and Matthew Yu, What Bordism-Theoretic Anomaly Cancellation Can Do for U (2024)](https://link.springer.com/article/10.1007/s00220-024-04937-4)

### Boundary obstructions live in degree two

**Remember:** The square of a degree-one boundary charge has degree two.

*Makes the theorem clean to state or prove.* MSC 81T70 (Quantization in field theory; cohomological methods), 81T50. arXiv math-ph. Level 4: research.

**Definition.** In a Batalin–Vilkovisky bulk theory with compatible Hamiltonian boundary data, assume the boundary symplectic form is exact and has degree zero. The boundary charge S has degree one and satisfies {S,S} = 0 for the induced Poisson bracket. Set Q(F) = {S,F} on local boundary functionals, integrals depending on finitely many derivatives. Degree-two cohomology consists of degree-two functionals killed by Q, modulo Q applied to degree-one functionals.

**Problem.** At each order in perturbative quantization of this boundary charge, the obstruction defines a degree-two local cohomology class. The charge extends through that order exactly when this class vanishes.

**How the definition helps.** Passing to cohomology identifies errors that differ by an allowed local correction to the charge (our own). The square of the quantum charge has degree two, and the graded Jacobi identity makes its first uncancelled coefficient closed (our own). The boundary quantization theorem supplies the local obstruction complex (our own).

**Paper or page:** [On Quantum Obstruction Spaces and Higher Codimension Gauge Theories](https://arxiv.org/abs/2008.08477v3). It says: “The obstruction space for quantization on the underlying boundary BFV manifold”

**Sources:**

- [Nima Moshayedi, On Quantum Obstruction Spaces and Higher Codimension Gauge Theories](https://arxiv.org/abs/2008.08477v3)

### BRST cohomology detects quantum obstructions

**Remember:** A closed anomaly is removable when its class vanishes.

*Makes the theorem clean to state or prove.* MSC 81T70 (Quantization in field theory; cohomological methods), 81T50. arXiv math-ph. Level 4: research.

**Definition.** In perturbative Batalin–Vilkovisky quantization, one corrects a classical action S by a formal power series. Its odd Poisson bracket defines the degree-one differential Q(F) = {S,F} on local functionals, integrals of expressions involving finitely many derivatives. Degree-one BRST cohomology consists of degree-one functionals killed by Q, modulo Q applied to degree-zero local functionals.

**Problem.** In perturbative Batalin–Vilkovisky quantization, an order-by-order local obstruction lies in degree-one BRST cohomology. A zero class lets a local counterterm remove the obstruction at that order.

**How the definition helps.** A counterterm changes the violation by a boundary, so its cohomology class is the test (our own). The work goes into proving the consistency equation that makes the violation closed and proving its locality (our own).

**Paper or page:** [On Quantum Obstruction Spaces and Higher Codimension Gauge Theories](https://arxiv.org/abs/2008.08477v3). It says: “The obstruction space for a BV theory to be quantizable is given by”

**Sources:**

- [Nima Moshayedi, On Quantum Obstruction Spaces and Higher Codimension Gauge Theories](https://arxiv.org/abs/2008.08477v3)

### Closed half-densities permit gauge changes

**Remember:** Moving the integration surface changes a closed integrand by an exact one.

*Makes the theorem clean to state or prove.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** A half-density transforms by the square root of the volume change and gives an integration density on each oriented Lagrangian. A Lagrangian has tangent spaces equal to their own orthogonal complements for the odd symplectic form. Call the half-density closed when the canonical operator Δ, the sum of mixed derivatives in standard paired coordinates, kills it.

**Problem.** The integral of a closed half-density stays constant along a smooth Hamiltonian deformation of a compact oriented Lagrangian without boundary. A Hamiltonian deformation moves the surface by the vector field of a generating function.

**How the definition helps.** Closure makes the derivative of the integral an integral of a Δ-exact half-density, which vanishes by the Batalin–Vilkovisky Stokes theorem (our own). The calculation uses the identity expressing Hamiltonian differentiation as the graded commutator of Δ with multiplication by the generator, up to sign (our own).

**Paper or page:** [The canonical BV Laplacian on half-densities](https://arxiv.org/abs/2212.00451v2). It says: “If Δσ = 0 and ℒₜ is a smooth family of Lagrangian submanifolds of ℳ”

**Sources:**

- [Alberto S. Cattaneo, The canonical BV Laplacian on half-densities](https://arxiv.org/abs/2212.00451v2)

### Cumulants make derived morphisms compose

**Remember:** Cumulant orders add when you compose.

*True by definition.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math.QA, math-ph. Level 4: research.

**Definition.** Work over a characteristic-zero field with graded commutative algebras carrying derived Batalin–Vilkovisky differentials of the same degree convention. A morphism preserves the unit, is linear over formal series in t, and commutes with the differentials. Its cumulants are determined recursively by expanding the image of each product over set partitions into signed products of block cumulants. For n inputs, the definition requires divisibility by t to the power n − 1.

**Problem.** The composite of two derived Batalin–Vilkovisky morphisms is again such a morphism.

**How the definition helps.** The cumulant definition turns composition into addition of exponents, avoiding separate product identities for each number of inputs (our own). For a partition into k blocks, the inner exponents total n − k and the outer exponent is k − 1 (our own). The partition formula for the cumulants of a composite supplies the substantive identity (our own).

**Paper or page:** [Cumulants, Koszul brackets and homological perturbation theory for commutative BV∞ and IBL∞ algebras](https://arxiv.org/abs/2012.14812v1). It says: “the composition gf: A\[\[t\]\] → C\[\[t\]\] is a morphism of derived BV algebras.”

**Sources:**

- [Ruggero Bandiera, Cumulants, Koszul brackets and homological perturbation theory for commutative BV∞ and IBL∞ algebras](https://arxiv.org/abs/2012.14812v1)

### Disk insertions give commutative multiplication

**Remember:** Two disks multiply, and three disks settle associativity.

*Makes the theorem clean to state or prove.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math.QA, math-ph. Level 4: research.

**Definition.** A unital prefactorization algebra F assigns vector spaces to opens and multilinear maps to disjoint insertions, including the empty insertion. Nested insertions compose, and permuting the inputs permutes their labels. Local constancy makes inclusion maps between disks invertible, counting the whole plane as a disk. To multiply in F(ℂ), transport two inputs to disjoint disks and insert them into the plane.

**Problem.** The plane value of a locally constant prefactorization algebra in complex vector spaces is a unital commutative algebra.

**How the definition helps.** The two bracketings reduce to the same three-disk insertion (our own). Exchanging the two disks along a path leaves the operation unchanged, so the product is commutative (our own). The empty insertion gives the unit (our own). The work goes into using local constancy to show that disk placements give the same operation (our own).

**Paper or page:** [A note on vertex algebras and Costello-Gwilliam factorization algebras](https://arxiv.org/abs/2408.00412v2). It says: “the linear space F(ℂ) has the structure of commutative algebra as follows”

**Sources:**

- [Yusuke Nishinaka, A note on vertex algebras and Costello-Gwilliam factorization algebras](https://arxiv.org/abs/2408.00412v2)

### Exact half-densities integrate to zero

**Remember:** An exact half-density restricts to a total derivative.

*Makes the theorem clean to state or prove.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** An odd symplectic form pairs even and odd tangent directions nondegenerately. A Lagrangian is a submanifold whose tangent spaces equal their own orthogonal complements for this form. A half-density transforms by the square root of the volume change and induces an ordinary integration density on each Lagrangian. An exact half-density has the form Δτ, where Δ sums mixed even and odd derivatives in standard paired coordinates.

**Problem.** Let L be an oriented Lagrangian without boundary in an odd symplectic manifold. If τ has compact support meeting L in a compact set, the integral of Δτ over L vanishes.

**How the definition helps.** The induced density makes the integral meaningful on each Lagrangian without choosing an ambient volume (our own). In coordinates adapted to L, integration by parts makes the integral of each compactly supported mixed derivative vanish (our own). Passing from local integrals to the intrinsic statement gives the Batalin–Vilkovisky Stokes theorem (our own).

**Paper or page:** [The canonical BV Laplacian on half-densities](https://arxiv.org/abs/2212.00451v2). It says: “If σ = Δτ for some τ, then ∫ℒ σ = 0”

**Sources:**

- [Alberto S. Cattaneo, The canonical BV Laplacian on half-densities](https://arxiv.org/abs/2212.00451v2)

### Exact shifts preserve master actions

**Remember:** An exact change of a closed weight stays closed.

*True by definition.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** Write W = exp(iS/ħ) for the invertible weight of an even action S. The quantum master equation says ΔW = 0, where Δ reverses parity and satisfies Δ² = 0. With an overall scalar absorbed into the generator, define an exact shift by δS = W⁻¹Δ(FW) for odd F.

**Problem.** If ΔW = 0, replacing S by S + εδS preserves the quantum master equation modulo ε².

**How the definition helps.** Using the weight turns the nonlinear variation of the action into the boundary δW = (i/ħ)Δ(FW) (our own). Applying Δ again gives zero (our own). Constructing Δ on the space of functionals and proving Δ² = 0 require separate work (our own).

**Paper or page:** [The geometry of variations in Batalin-Vilkovisky formalism](https://arxiv.org/abs/1312.1262v1). It says: “the infinitesimal shift of the functional”

**Sources:**

- [Arthemy V. Kiselev, The geometry of variations in Batalin-Vilkovisky formalism](https://arxiv.org/abs/1312.1262v1)

### Factorization algebras localize quantum defects

**Remember:** Change the gluing at the defect, not the bulk away from it.

*Makes the theorem clean to state or prove.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** A factorization algebra combines observables from disjoint opens and glues them over covers containing each finite subset in one member. A defect along D in M is another such algebra together with an isomorphism to the original algebra on M ∖ D.

**Problem.** Consider a classical Batalin–Vilkovisky theory that locally uses differential forms with the exterior derivative in the directions normal to D. If its local boundary condition admits Batalin–Vilkovisky quantization, the resulting quantum observables form a defect along D.

**How the definition helps.** The definition packages agreement of all observable operations away from D into one restriction isomorphism (our own). Constructing the algebra from a quantized boundary condition and proving that its observables glue are the substantive steps (our own).

**Paper or page:** [Defects via Factorization Algebras](https://arxiv.org/abs/2208.01730v1). It says: “the quantum bulk-boundary system determines a factorization algebra”

**Sources:**

- [Ivan Contreras, Chris Elliott, Owen Gwilliam, Defects via Factorization Algebras](https://arxiv.org/abs/2208.01730v1)

### Fiber integrals preserve master solutions

**Remember:** Integrate a closed weight and get a closed weight.

*True by definition.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** A half-density transforms by the square root of the volume change. On an odd symplectic space, the canonical operator Δ sums mixed even and odd derivatives in standard paired coordinates. The linear master equation for a half-density σ is Δσ = 0. On a product X × Y, integrate σ along an oriented Lagrangian L in Y, whose tangent spaces equal their symplectic orthogonal complements.

**Problem.** Let L be compact and without boundary. Integrating a smooth solution over L gives a half-density on X that solves the linear master equation there.

**How the definition helps.** Writing the equation for the weight turns preservation of solutions into commutation with integration (our own). The product operator splits into the operators on X and Y (our own). The first passes through the integral, and the Batalin–Vilkovisky Stokes theorem kills the integral of the second (our own).

**Paper or page:** [BV Quantization](https://arxiv.org/abs/2307.07761v1). It says: “The BV fiber integral descends to a map”

**Sources:**

- [Alberto S. Cattaneo, Pavel Mnev, Michele Schiavina, BV Quantization](https://arxiv.org/abs/2307.07761v1)

### Finite subsets determine factorization gluing

**Remember:** Glue where whole finite configurations fit.

*Rules out counterexamples.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** A Weiss cover of U contains each finite subset of U in a single member. A vector-space factorization algebra F combines inputs from disjoint opens and glues its vector spaces across Weiss covers. Gluing means taking the direct sum of the cover values and identifying images of vectors from pairwise overlaps.

**Problem.** Let B be an open basis whose members inside each open U form a Weiss cover of U. The canonical map from their colimit to F(U) is an isomorphism. This colimit identifies vectors with their images under inclusions between basis members.

**How the definition helps.** The basis elements form a cover in the topology used to define the algebra (our own). The cosheaf basis theorem computes the colimit from these elements (our own). The cover condition excludes a cover of two disjoint intervals by the intervals themselves (our own). That cover misses configurations with one point in each interval (our own).

**Paper or page:** [A note on vertex algebras and Costello-Gwilliam factorization algebras](https://arxiv.org/abs/2408.00412v2). It says: “the family B(U) is a Weiss cover of U.”

**Sources:**

- [Yusuke Nishinaka, A note on vertex algebras and Costello-Gwilliam factorization algebras](https://arxiv.org/abs/2408.00412v2)

### Half-densities give a square-zero Laplacian

**Remember:** Odd derivatives anticommute, so their mixed sum squares to zero.

*Rules out counterexamples.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** On a space with paired even and odd coordinates, a half-density transforms by the square root of the volume change. An odd symplectic form admits local coordinates pairing each even xᵢ with an odd θᵢ in the standard form. In these coordinates Δ acts on the half-density coefficient by summing the mixed derivatives in xᵢ and θᵢ.

**Problem.** The canonical Batalin–Vilkovisky operator squares to zero on half-densities.

**How the definition helps.** Half-densities give the same mixed-derivative formula in every standard chart, with no choice of volume (our own). Odd partial derivatives anticommute and square to zero, hence Δ² = 0 (our own). Coordinate independence is the substantive theorem. On functions, choosing volume exp(x₁θ₁θ₂) times standard volume gives a different operator via half the divergence of Hamiltonian vector fields (our own). Its square is a nonzero multiple of differentiation in x₂ (our own).

**Paper or page:** [The canonical BV Laplacian on half-densities](https://arxiv.org/abs/2212.00451v2). It says: “There is a canonical BV operator Δ acting on half-densities”

**Sources:**

- [Alberto S. Cattaneo, The canonical BV Laplacian on half-densities](https://arxiv.org/abs/2212.00451v2)

### Logarithms leave only connected graphs

**Remember:** Take the logarithm to discard disconnected unions.

*True by definition.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math.QA, math-ph. Level 4: research.

**Definition.** Start with a finite-dimensional Batalin–Vilkovisky complex and a contraction onto its homology that permits Gaussian integration over the complementary variables. A contraction gives projection and inclusion maps inverse up to chain homotopy. For a stable quantum master interaction m, define the transferred interaction as ħ log ⟨exp(m/ħ)⟩, where brackets denote normalized formal Gaussian integration. Stability requires 2g − 2 + n &gt; 0 for each vertex with genus g and n incident ends.

**Problem.** The transferred interaction equals the sum over connected stable graphs G of the Gaussian contraction for G divided by the order of its automorphism group.

**How the definition helps.** Taking the logarithm converts the expansion over all graphs into its connected part (our own). Pairing Gaussian variables gives edges, and the contraction factors multiply across disjoint components (our own). The exponential formula for unordered components accounts for their permutations and leaves each connected graph weighted by its own symmetry factor (our own). The formal integration theorem supplies the individual graph weights (our own).

**Paper or page:** [Homotopy transfer for L-infinity structures and the BV-formalism](https://arxiv.org/abs/2408.12461v1). It says: “the combinatorial sum over connected stable graphs”

**Sources:**

- [James Maunder, Homotopy transfer for L-infinity structures and the BV-formalism](https://arxiv.org/abs/2408.12461v1)

### The master action gives a differential

**Remember:** Bracketing twice is bracketing with half the self-bracket.

*True by definition.* MSC 81T70 (Quantization in field theory; cohomological methods), 81T13. arXiv hep-th, math-ph. Level 4: research.

**Definition.** In the classical Batalin–Vilkovisky construction, observables have integer degrees. Their odd Poisson bracket is a bilinear operation that raises total degree by one and satisfies the graded Jacobi identity. Choose an action S of degree zero satisfying {S,S} = 0. Define the operator d by df = {S,f}.

**Problem.** The differential squares to zero on the graded algebra of classical observables.

**How the definition helps.** In our own calculation, the bracket definition replaces separate checks on each observable by one identity for the action. The graded Jacobi identity gives d²f = {{S,S},f}/2 over the real or complex numbers. Constructing S to encode the field equations and gauge symmetries carries the remaining work.

**nLab:** [quantum master equation](https://ncatlab.org/nlab/show/quantum+master+equation). It says: “the classical master equation expresses the nilpotency of the BV-differential before quantization”

**Sources:**

- [Igor Batalin and Grigori Vilkovisky, Gauge algebra and quantization (1981)](https://doi.org/10.1016/0370-2693(81)90205-7)
