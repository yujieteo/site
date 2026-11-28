### Density operators give each part of an entangled system its own state

**Remember:** Trace out the other part to get the state for local measurements.

*Makes the theorem clean to state or prove.* MSC 81P16 (Quantum state spaces, operational and probabilistic concepts), 81S22, 81P40. arXiv quant-ph. Level 2: later undergraduate.

**Definition.** A density operator is a positive semidefinite operator of trace one on a system’s Hilbert space; a pure state ψ gives the projection onto ψ. The state of one part of a composite system is the partial trace over the other part, the operator that gives the same expectation as the whole state for every measurement on that part.

**Problem.** Every part of a composite quantum system has a state that gives the probabilities of all measurements on that part alone. With state vectors only, this fails: for an entangled pure state, no vector describes one part.

**How the definition helps.** The partial trace keeps positivity and trace one, and its defining identity matches every local measurement (our own argument). For the entangled pair (\|R,L⟩ + \|L,R⟩)/√2, each photon gets I/2, which has rank two and so comes from no state vector.

**Wikipedia:** [Density matrix](https://en.wikipedia.org/wiki/Density_matrix). It says: “In contrast, the motivation that inspired Landau was the impossibility of describing a subsystem of a composite quantum system by a state vector.”

**Sources:**

- [J. von Neumann, Wahrscheinlichkeitstheoretischer Aufbau der Quantenmechanik, Göttinger Nachrichten (1927), 245–272](https://eudml.org/doc/59230)
- [U. Fano, Description of States in Quantum Mechanics by Density Matrix and Operator Techniques, Reviews of Modern Physics 29 (1957), 74–93](https://doi.org/10.1103/RevModPhys.29.74)

### Schmidt form matches reduced spectra

**Remember:** Pair the sides vector to vector; both halves see the same weights.

*True by definition.* MSC 81P40 (Quantum coherence, entanglement, quantum correlations). arXiv quant-ph. Level 2: later undergraduate.

**Definition.** A Schmidt form of a finite-dimensional bipartite unit vector is ∑ᵢ sᵢ uᵢ ⊗ vᵢ with sᵢ &gt; 0, where the uᵢ are orthonormal in the first system and the vᵢ are orthonormal in the second. It pairs the two sides one vector to one vector, so tracing out either side leaves weights sᵢ² on the paired vectors.

**Problem.** Ignoring either part of a finite-dimensional pure state gives a reduced state describing the other part. These two state matrices have the same nonzero eigenvalues, with multiplicities, and hence the same entropy.

**How the definition helps.** In a Schmidt form both reduced matrices are ∑ᵢ sᵢ² times projections onto the uᵢ or the vᵢ, so they share the nonzero eigenvalues sᵢ² (our own explanation). The singular value decomposition of the amplitude matrix gives every vector a Schmidt form.

**Wikipedia:** [Schmidt decomposition](https://en.wikipedia.org/wiki/Schmidt_decomposition). It says: “is a diagonal matrix whose non-zero diagonal elements are \|αᵢ\|².”

**Sources:** none listed. No primary source with a working link was found.

### Partial transpose tests separability

**Remember:** Transpose one side: product states survive, so separable states stay positive.

*True by definition.* MSC 81P42 (Entanglement measures, concurrencies, separability criteria). arXiv quant-ph. Level 2: later undergraduate.

**Definition.** Partial transpose transposes only the second factor: in a fixed basis it sends A ⊗ B to A ⊗ Bᵀ and extends linearly. A separable state is a probability mixture of product states A ⊗ B of density matrices, so its partial transpose is the same mixture of the matrices A ⊗ Bᵀ.

**Problem.** If a state is a mixture of product states, its partial transpose is positive semidefinite.

**How the definition helps.** Bᵀ has the same eigenvalues as B, so each A ⊗ Bᵀ is positive semidefinite, and so is any probability mixture of them (our own proof).

**Wikipedia:** [Peres–Horodecki criterion](https://en.wikipedia.org/wiki/Peres%E2%80%93Horodecki_criterion). It says: “Note that the partial in the name implies that only part of the state is transposed.”

**Sources:**

- [Asher Peres, Separability Criterion for Density Matrices (1996)](https://doi.org/10.1103/PhysRevLett.77.1413)

### Ladder operators give equal steps

**Remember:** The adjoint of the lowering operator adds one unit of energy.

*True by definition.* MSC 81Q05 (Closed and approximate solutions to the Schrödinger, Dirac, Klein-Gordon and other equations of quantum mechanics). arXiv quant-ph, math-ph. Level 2: later undergraduate.

**Definition.** For the oscillator in units m = ω = ℏ = 1, the lowering operator a = (x + ip)/√2 and its adjoint a†, the raising operator, satisfy aa† − a†a = I and factor the Hamiltonian as H = a†a + ½I. So a† moves energy up by exactly one unit and a moves it down.

**Problem.** For the one-dimensional quantum harmonic oscillator, applying a† to an energy eigenfunction raises its energy by one unit. The eigenvalues form a single ladder starting at ½.

**How the definition helps.** The commutator gives Ha† = a†(H + I), so a† raises any eigenvalue by one (our own argument). Lowering must stop at a state with aψ = 0, a first-order equation whose only solution is a Gaussian of energy ½. Completeness of the Hermite functions rules out any other ladder.

**Wikipedia:** [Quantum harmonic oscillator](https://en.wikipedia.org/wiki/Quantum_harmonic_oscillator). It says: “Conceptually, it is important that there is only one solution of this equation”

**Sources:** none listed. No primary source with a working link was found.

### Normal ordering kills vacuum averages

**Remember:** An annihilator next to the vacuum kills the term.

*True by definition.* MSC 81Q12 (Nonselfadjoint operator theory in quantum theory including creation and destruction operators), 81T10. arXiv hep-th, math-ph. Level 2: later undergraduate.

**Definition.** Normal ordering moves all creation operators to the left of all annihilation operators, adding no commutator terms, with a minus sign for each exchange of fermions. Then every annihilator sits at the right end, next to the vacuum, which it kills.

**Problem.** The vacuum expectation of every nonempty normal-ordered word is zero.

**How the definition helps.** A normal-ordered word with an annihilator ends in one, which kills the vacuum on the right (our own proof). A word with only creators kills the vacuum on the left, since a creator’s adjoint is an annihilator. Wick’s theorem restores the extra terms for ordinary products.

**Wikipedia:** [Normal order](https://en.wikipedia.org/wiki/Normal_order). It says: “The vacuum expectation value of a normal ordered product of creation and annihilation operators is zero.”

**Sources:**

- [G. C. Wick, The Evaluation of the Collision Matrix (1950)](https://doi.org/10.1103/PhysRev.80.268)

### Shared tables give Bell's bound

**Remember:** One joint table makes the four signed products add to ±2.

*Rules out counterexamples.* MSC 81Q65 (Alternative quantum mechanics (including hidden variables, etc.)). arXiv quant-ph. Level 2: later undergraduate.

**Definition.** In a local hidden-variable model, two observers share randomness independent of their settings, and each observer’s sign depends only on that randomness, their own setting and their own private randomness. So each observer can write down a sign for both settings in advance, giving one joint table (our own).

**Problem.** Let E(x,y) be the mean product of the two signs at settings x and y. Every local model satisfies \|E(0,0) + E(0,1) + E(1,0) − E(1,1)\| ≤ 2.

**How the definition helps.** With table signs A, B for one observer and C, D for the other, one of C + D and C − D is zero and the other is ±2, so A(C + D) + B(C − D) = ±2. Averaging over the table gives the bound. It excludes a box whose output parity equals the product of the settings, which reaches four.

**Wikipedia:** [CHSH inequality](https://en.wikipedia.org/wiki/CHSH_inequality). It says: “the standard assumption of independence of the two sides, enabling us to obtain the joint probabilities of pairs of outcomes”

**Sources:**

- [John F. Clauser, Michael A. Horne, Abner Shimony and Richard A. Holt, Proposed Experiment to Test Local Hidden-Variable Theories (1969)](https://doi.org/10.1103/PhysRevLett.23.880)
- [Arthur Fine, Hidden Variables, Joint Probability, and the Bell Inequalities (1982)](https://doi.org/10.1103/PhysRevLett.48.291)

### Holonomy sees hidden solenoid flux

**Remember:** The loop integral of the potential counts the flux it encircles.

*Makes the theorem clean to state or prove.* MSC 81Q70 (Differential geometric methods, including holonomy, Berry and Hannay phases, Aharonov-Bohm effect, etc. in quantum theory). arXiv quant-ph, math-ph. Level 2: later undergraduate.

**Definition.** The holonomy of a charge q around an oriented closed loop C is the phase exp(iq∮<sub>C</sub> A·dℓ/ℏ), where A is the magnetic vector potential. It depends on A along the whole loop, not on the magnetic field at the loop.

**Problem.** For a loop going once around an ideal solenoid, the holonomy is exp(iqΦ/ℏ), where Φ is the enclosed magnetic flux. This holds although the magnetic field on the loop can be zero.

**How the definition helps.** Stokes’ theorem turns the loop integral of A into the magnetic flux through a surface bounded by the loop (our own calculation). That surface crosses the solenoid’s interior, where the field is nonzero, so the flux is Φ.

**Wikipedia:** [Aharonov–Bohm effect](https://en.wikipedia.org/wiki/Aharonov%E2%80%93Bohm_effect). It says: “experiences a phase shift as a result of the enclosed magnetic field”

**Sources:**

- [Yakir Aharonov and David Bohm, Significance of Electromagnetic Potentials in the Quantum Theory (1959)](https://doi.org/10.1103/PhysRev.115.485)

### Parity strings give fermion signs

**Remember:** A string of earlier signs turns commuting spins into anticommuting fermions.

*Rules out counterexamples.* MSC 81T25 (Quantum field theory on lattices), 81R15. arXiv quant-ph, math-ph. Level 2: later undergraduate.

**Definition.** On an ordered finite chain of two-state spins, aⱼ is the lowering operator at site j (upper state to lower state, lower state to zero) times the diagonal sign operator, with entries +1 and −1, at every earlier site. The string of signs makes operators at different sites anticommute instead of commute.

**Problem.** The operators aⱼ satisfy aⱼaₖ + aₖaⱼ = 0 and aⱼaₖ\* + aₖ\*aⱼ = δⱼₖ I for every pair of sites, where δⱼₖ is 1 for j = k and 0 otherwise.

**How the definition helps.** For j &lt; k, the string of aₖ contains the sign at site j, which anticommutes with the lowering operator there, so swapping the two gives one minus sign (our own calculation). Bare lowering operators at different sites would commute instead. At one site the earlier signs square to the identity, leaving the two-state identities L² = 0 and LL\* + L\*L = I.

**Wikipedia:** [Jordan–Wigner transformation](https://en.wikipedia.org/wiki/Jordan%E2%80%93Wigner_transformation). It says: “The transformed spin operators now have the appropriate fermionic canonical anti-commutation relations”

**Sources:**

- [Pascual Jordan and Eugene Wigner, Über das Paulische Äquivalenzverbot (1928)](https://doi.org/10.1007/BF01331938)

### Defined this way, indistinguishable particles can only be bosons or fermions

**Remember:** Swapping twice does nothing, so one swap multiplies by +1 or −1.

*True by definition. Confidence: medium.* MSC 81V72 (Particle exchange symmetries in quantum theory (general)), 81V73, 81V74. arXiv quant-ph, math-ph. Level 2: later undergraduate.

**Definition.** In this definition, N particles are indistinguishable when permuting the arguments of their nonzero wavefunction ψ only multiplies it by a phase: σψ = s(σ)ψ with \|s(σ)\| = 1 for every permutation σ. Since permutations compose, s is a one-dimensional representation of the symmetric group.

**Problem.** Indistinguishable particles in this sense are either bosons, with a symmetric wavefunction, or fermions, with an antisymmetric one.

**How the definition helps.** The symmetric group has only two one-dimensional representations. A swap done twice is the identity, so its factor is ±1, and all swaps are conjugate, so they share one sign (our own argument). Swaps generate every permutation, so the sign +1 gives a symmetric ψ and −1 an antisymmetric one.

**nLab:** [particle statistics](https://ncatlab.org/nlab/show/particle+statistics). It says: “The wavefunctions of ordinarily indistinguishable particles must, by definition, span 1-dimensional linear representations of the symmetric group and there are exactly two such, up to isomorphism”

**Sources:**

- [Hans Halvorson (with an appendix by Michael Müger), Algebraic Quantum Field Theory, in: Philosophy of Physics, Handbook of the Philosophy of Science (2007), arXiv:math-ph/0602036](https://arxiv.org/abs/math-ph/0602036)

### Antisymmetric fermion states enforce Pauli exclusion

**Remember:** Swapping two equal labels changes nothing, yet must flip the sign.

*True by definition.* MSC 81V74 (Fermionic systems in quantum theory), 81S05, 15A75. arXiv quant-ph, math-ph. Level 2: later undergraduate.

**Definition.** Identical fermions, such as electrons, have antisymmetric many-particle states: swapping the labels of two particles reverses the sign of every coefficient. So a coefficient with two equal one-particle labels equals its own negative.

**Problem.** No two identical fermions can occupy the same one-particle state.

**How the definition helps.** A coefficient with two identical labels is unchanged by the swap but must change sign, so it is zero. This works in any one-particle basis, including one that contains the proposed shared state. The spin–statistics theorem of relativistic quantum field theory justifies antisymmetry for half-integer-spin particles.

**Wikipedia:** [Pauli exclusion principle](https://en.wikipedia.org/wiki/Pauli_exclusion_principle). It says: “Antisymmetry under exchange means that A(x, y) = −A(y, x). This implies A(x, y) = 0 when x = y, which is Pauli exclusion.”

**Sources:** none listed. No primary source with a working link was found.

### Unnormalized measurement maps compose

**Remember:** Keep the probability in the trace until all measurements are done.

*True by definition.* MSC 81P15 (Quantum measurement theory, state operations, state preparations). arXiv quant-ph. Level 3: graduate.

**Definition.** A finite-outcome quantum instrument gives one completely positive linear map per outcome (positive even when it acts on part of a larger system), and these maps sum to a trace-preserving map. Each map leaves its output unnormalized: the output is the outcome probability times the conditional state.

**Problem.** Apply two finite-outcome instruments in order, with the second acting on the first instrument’s output. The composed outcome maps give the final states, and their traces give the joint probabilities.

**How the definition helps.** Because the outputs are unnormalized, linearity of the second map multiplies its conditional probability by the first one. In our own argument, a first outcome of probability p gives p times its conditional state, and the second map carries the factor p to its output. An impossible first outcome gives the zero matrix and so zero joint probability.

**Wikipedia:** [Quantum instrument](https://en.wikipedia.org/wiki/Quantum_instrument). It says: “a quantum instrument is a mathematical description of a quantum measurement, capturing both the classical and quantum outputs.”

**Sources:**

- [Masanao Ozawa, Quantum measuring processes of continuous observables (1984)](https://doi.org/10.1063/1.526000)

### Using generalized measurements makes Gleason's theorem hold for qubits too

**Remember:** Allow all generalized measurements, and the Born rule follows in every dimension.

*Rules out counterexamples.* MSC 81P15 (Quantum measurement theory, state operations, state preparations), 81P16. arXiv quant-ph. Level 3: graduate.

**Definition.** A noncontextual probability rule assigns each effect E, an operator with 0 ≤ E ≤ I, one number in \[0,1\] that does not depend on which measurement contains it. A discrete POVM is a finite or countable family of effects summing weakly to I, and the rule must sum to one on each. Since two effects can be merged into one in another POVM, such a rule is additive.

**Problem.** On a separable complex Hilbert space, every noncontextual rule that sums to one on each discrete POVM is p(E) = tr(ρE) for a density operator ρ. Unlike Gleason’s theorem for projections, which needs dimension at least three, this includes dimension two.

**How the definition helps.** Splitting or merging effects across POVMs forces p(E + F) = p(E) + p(F) whenever E + F ≤ I. In our own explanation, positivity then gives linearity, and Busch’s theorem gives the density operator. A qubit rule on projections alone can assign 0 or 1 by hemisphere, which no density operator does, so it cannot extend to all POVMs.

**Wikipedia:** [Gleason's theorem](https://en.wikipedia.org/wiki/Gleason%27s_theorem), [POVM](https://en.wikipedia.org/wiki/POVM). It says: “Unlike the original theorem of Gleason, the generalized version using POVMs also applies to the case of a single qubit.”

**Sources:**

- [A. M. Gleason, Measures on the Closed Subspaces of a Hilbert Space, Journal of Mathematics and Mechanics 6 (1957), 885–893](https://doi.org/10.1512/iumj.1957.6.56050)
- [P. Busch, Quantum States and Generalized Observables: A Simple Proof of Gleason's Theorem, Physical Review Letters 91 (2003), 120403](https://doi.org/10.1103/PhysRevLett.91.120403)

### Treating quantum states as rays allows rotations to act with a sign

**Remember:** A full turn may flip a vector's sign without changing the state.

*Makes the theorem clean to state or prove.* MSC 81P16 (Quantum state spaces, operational and probabilistic concepts), 81R05, 81R25. arXiv quant-ph, math-ph. Level 3: graduate.

**Definition.** A pure state is a ray, a unit vector up to a phase, so a symmetry need only act on vectors up to phases. In a projective unitary representation, U(g)U(h) = ω(g,h)U(gh) with \|ω(g,h)\| = 1 for all g and h.

**Problem.** Each continuous projective unitary representation of SO(3) lifts to an ordinary unitary representation of its double cover SU(2). So the phases can be chosen in {+1, −1}, and a full turn can change the sign of a spin-one-half vector.

**How the definition helps.** A sign change keeps the ray, so the definition allows it. The lifting theorem for projective representations of rotations gives the representation of SU(2) (our own explanation). The two lifts of each rotation differ by the central element −1 of SU(2), which acts as ±1.

**Wikipedia:** [Wigner's theorem](https://en.wikipedia.org/wiki/Wigner%27s_theorem). It says: “In the case of the Lorentz group and its subgroup the rotation group SO(3), phases can, for projective representations, be chosen such that ω(g, h) = ± 1.”

**Sources:**

- [V. Bargmann, On Unitary Ray Representations of Continuous Groups, Annals of Mathematics 59 (1954), 1–46](https://doi.org/10.2307/1969831)

### Entanglement of formation is convex

**Remember:** Join the two cheapest recipes to get a recipe for the mixture.

*True by definition.* MSC 81P42 (Entanglement measures, concurrencies, separability criteria). arXiv quant-ph. Level 3: graduate.

**Definition.** The entanglement of formation of a finite-dimensional bipartite state is the infimum of the average pure-state entanglement over all ways to write it as a probability mixture of pure states. A pure state’s entanglement is the entropy −∑ p log₂ p of the eigenvalues of either reduced state.

**Problem.** Mixing two states cannot give more entanglement of formation than the weighted mean of their entanglements of formation.

**How the definition helps.** A mixture of two states can use both their decompositions, scaled by the mixing weights, so its infimum is at most the weighted mean. In our own argument, choose decompositions within ε of each infimum and join the scaled lists. The result exceeds the weighted mean by at most ε, for every ε &gt; 0.

**Wikipedia:** [Entanglement of formation](https://en.wikipedia.org/wiki/Entanglement_of_formation). It says: “This kind of extension of a quantity defined on some set (here the pure states) to its convex hull (here the mixed states) is called a convex roof construction.”

**Sources:**

- [Charles H. Bennett, David P. DiVincenzo, John A. Smolin and William K. Wootters, Mixed-state entanglement and quantum error correction (1996)](https://doi.org/10.1103/PhysRevA.54.3824)

### Separable states are defined as exactly what local operations can prepare

**Remember:** Shared dice plus local preparation give exactly the separable states.

*True by definition.* MSC 81P42 (Entanglement measures, concurrencies, separability criteria), 81P48. arXiv quant-ph. Level 3: graduate.

**Definition.** A finite-dimensional bipartite state is separable if it is a finite mixture of products, ρ = ∑ᵢ pᵢ αᵢ ⊗ βᵢ, with probabilities pᵢ and local density operators αᵢ and βᵢ. Read as a recipe: draw the index i, then each party prepares its own factor.

**Problem.** A state can be prepared from a product state by local operations and classical communication (LOCC) exactly when it is separable. So entanglement is the resource that these operations cannot create.

**How the definition helps.** In our own proof, one party draws the index i and sends it, and each party prepares its factor. Conversely, on each branch of a local protocol a product input stays a product, and forgetting the messages averages these products into a separable state.

**Wikipedia:** [Separable state](https://en.wikipedia.org/wiki/Separable_state). It says: “In terms of quantum channels, a separable state can be created from any other state using local actions and classical communication while an entangled state cannot.”

**Sources:**

- [R. F. Werner, Quantum states with Einstein-Podolsky-Rosen correlations admitting a hidden-variable model, Physical Review A 40 (1989), 4277–4281](https://doi.org/10.1103/PhysRevA.40.4277)

### Partial traces show that local quantum operations cannot signal

**Remember:** Bob's state sees only operators that leave Alice's side alone.

*True by definition. Confidence: medium.* MSC 81P45 (Quantum information, communication, networks (quantum-theoretic aspects)), 81P40, 81P16. arXiv quant-ph. Level 3: graduate.

**Definition.** Bob’s reduced state σ is the partial trace of the joint state ρ over Alice’s space: the matrix with trace(σY) = trace(ρ(I ⊗ Y)) for each observable Y of Bob. So σ records only the statistics of operators I ⊗ Y, which act trivially on Alice.

**Problem.** In a finite-dimensional joint system, an operation on Alice’s part alone cannot change Bob’s measurement statistics when all of Alice’s outcomes are included.

**How the definition helps.** It suffices to show that Alice’s operation preserves the expectations of every I ⊗ Y. With all outcomes kept, her operation applies matrices V on her space whose products V†V sum to I. Cyclicity of the trace moves each V next to V†, and the sum gives I for all Y at once (our own).

**Wikipedia:** [No-communication theorem](https://en.wikipedia.org/wiki/No-communication_theorem). It says: “immediately (with no time delay) after Alice performs her measurement, the relative state of Bob's system is given by the partial trace of the overall state with respect to Alice's system.”

**Sources:**

- [Phillippe H. Eberhard, Ronald R. Ross, Quantum field theory cannot provide faster-than-light communication, Foundations of Physics Letters (1989)](https://doi.org/10.1007/BF00696109)

### Diamond norms ignore idle systems

**Remember:** Once every idle system is allowed, one more changes nothing.

*True by definition.* MSC 81P47 (Quantum channels, fidelity). arXiv quant-ph. Level 3: graduate.

**Definition.** The diamond norm of a matrix map Φ is the largest trace norm (sum of singular values) of (Φ ⊗ Iₙ)(X), over every size n of idle system and every X of trace norm at most one. Here Iₙ is the identity on n-by-n matrices, so every idle system is already included.

**Problem.** Tensoring a finite-dimensional linear map with an identity map does not change its diamond norm.

**How the definition helps.** A test of Φ ⊗ Iₘ with idle size n is a test of Φ with idle size mn, so the norm cannot grow (our own proof). Conversely, tensor any test input with a fixed pure state on the extra system, which keeps both trace norms.

**Wikipedia:** [Diamond norm](https://en.wikipedia.org/wiki/Diamond_norm). It says: “The diamond norm is the trace norm of the output of a trivial extension of a linear map, maximized over all possible inputs with trace norm at most one.”

**Sources:** none listed. No primary source with a working link was found.

### Fidelity as the best purification overlap cannot decrease under quantum channels

**Remember:** Keep the channel's environment and the overlap stays the same.

*True by definition. Confidence: medium.* MSC 81P47 (Quantum channels, fidelity). arXiv quant-ph. Level 3: graduate.

**Definition.** The root fidelity of two states is the largest overlap \|⟨u, v⟩\| between purifications u and v, pure states on a larger system that reduce to the given states. By Uhlmann’s theorem it equals the sum of the singular values of √ρ√σ.

**Problem.** A quantum channel between finite-dimensional systems cannot decrease the fidelity of two states.

**How the definition helps.** A channel’s Stinespring isometry carries purifications of the inputs to purifications of the outputs with the same overlap, so the output maximum is at least the input maximum. In our own proof, choose purifications attaining the input maximum and apply the isometry to the system part of both. Uhlmann’s theorem then gives the matrix formula.

**Wikipedia:** [Fidelity of quantum states](https://en.wikipedia.org/wiki/Fidelity_of_quantum_states). It says: “the fidelity is the maximum overlap between purifications.”

**Sources:**

- [Armin Uhlmann, The Transition Probability in the State Space of a ∗-Algebra (1976)](https://doi.org/10.1016/0034-4877(76)90060-4)

### Measure-and-prepare channels break entanglement

**Remember:** A classical outcome can select a state but cannot carry entanglement.

*True by definition.* MSC 81P47 (Quantum channels, fidelity). arXiv quant-ph. Level 3: graduate.

**Definition.** A measure-and-prepare channel measures its input and then prepares an output state chosen only from the recorded classical outcome. A channel breaks entanglement if, for every untouched reference system, the joint output is a mixture of product states.

**Problem.** Every measure and prepare channel breaks entanglement with any untouched reference.

**How the definition helps.** Given the outcome, the prepared state is fixed, so it is a product with the reference. In our own proof, forgetting the outcome averages these products with their probabilities, which gives a mixture of products. The cited equivalence gives the converse, in the form of rank-one Choi–Kraus terms.

**Paper or page:** [C\*-extreme entanglement breaking maps on operator systems](https://arxiv.org/abs/2306.07642v3). It says: “a Choi-Kraus decomposition with rank-one Choi-Kraus coefficients”

**Sources:**

- [C\*-extreme entanglement breaking maps on operator systems](https://arxiv.org/abs/2306.07642v3)

### One Choi matrix unifies Kraus lists

**Remember:** Different Kraus lists factor the same positive matrix.

*True by definition.* MSC 81P47 (Quantum channels, fidelity). arXiv quant-ph. Level 3: graduate.

**Definition.** The Choi matrix of a matrix map Φ, in a fixed input basis, is the block matrix with block (i, j) equal to Φ(\|i⟩⟨j\|). A Kraus list Eₖ with Φ(X) = ∑ₖ EₖXEₖ† factors it: stacking each Eₖ into a vector vₖ gives Choi matrix ∑ₖ vₖvₖ†.

**Problem.** Any two Kraus lists for the same finite-dimensional map differ by unitary mixing after padding the shorter list with zeros.

**How the definition helps.** Two Kraus lists give two factorizations of one positive matrix. In our own argument, put the vectors as columns of matrices A and B with AA† = BB†. After zero padding, B = AU for a unitary U, whose entries give the required unitary mixing.

**Paper or page:** [Universal Properties of Partial Quantum Maps](https://arxiv.org/abs/2206.04814v2). It says: “There is a unitary k-by-k matrix U = (uᵢⱼ)”

**Sources:**

- [Universal Properties of Partial Quantum Maps](https://arxiv.org/abs/2206.04814v2)

### Requiring complete positivity gives quantum channels their Kraus form

**Remember:** Positive on every enlarged system means a sum of V ρ V\*.

*Rules out counterexamples.* MSC 81P47 (Quantum channels, fidelity), 46L07. arXiv quant-ph, math.OA. Level 3: graduate.

**Definition.** A linear map φ between matrix algebras is completely positive if it stays positive when applied to one part of a larger system: id ⊗ φ sends positive k×k block matrices to positive ones, for every k. This includes the maximally entangled input, whose image is the Choi matrix.

**Problem.** Choi's theorem: a linear map on n×n matrices is completely positive exactly when its Choi matrix is positive semidefinite. Then the map has the Kraus form ρ ↦ Σ Vᵢ ρ Vᵢ\*.

**How the definition helps.** Applying id ⊗ φ to the positive matrix \|Ω⟩⟨Ω\|, with Ω = ∑ⱼ eⱼ ⊗ eⱼ, gives the Choi matrix, so it is positive. Conversely, in our own argument, the rank-one terms of a positive Choi matrix reshape into Kraus operators Vᵢ, and each map ρ ↦ VᵢρVᵢ\* is completely positive. Transposition is positive but not completely positive, since partially transposing a two-qubit Bell state gives a negative eigenvalue.

**Wikipedia:** [Completely positive map](https://en.wikipedia.org/wiki/Completely_positive_map), [Choi's theorem on completely positive maps](https://en.wikipedia.org/wiki/Choi%27s_theorem_on_completely_positive_maps). It says: “The transposition of matrices is a standard example of a positive map that fails to be 2-positive.”

**Sources:**

- [M.-D. Choi, Completely positive linear maps on complex matrices, Linear Algebra and its Applications 10 (1975), 285–290](https://doi.org/10.1016/0024-3795(75)90075-0)
- [W. F. Stinespring, Positive Functions on C\*-Algebras, Proceedings of the American Mathematical Society 6 (1955), 211–216](https://doi.org/10.2307/2032342)

### Trace distance as best measurement distinction cannot grow under quantum channels

**Remember:** A channel followed by a measurement is still a measurement.

*True by definition. Confidence: medium.* MSC 81P47 (Quantum channels, fidelity), 81P18. arXiv quant-ph. Level 3: graduate.

**Definition.** The trace distance of two quantum states is the largest total variation distance between the outcome distributions of one measurement applied to both. Total variation is the largest difference between the probabilities of one event.

**Problem.** Applying the same quantum channel to two states cannot increase their trace distance.

**How the definition helps.** Any measurement after the channel is a measurement on the original states, so the largest distinction cannot grow (our own argument). The Wikipedia text shows that measuring the signs of the eigenvalues of the difference attains the matrix formula, half the sum of its absolute eigenvalues.

**Wikipedia:** [Trace distance](https://en.wikipedia.org/wiki/Trace_distance). It says: “To understand why this maximum equals the trace distance between the states”

**Sources:** none listed. No primary source with a working link was found.

### Commuting states can be broadcast

**Remember:** Read one shared basis label and write it onto both outputs.

*Rules out counterexamples.* MSC 81P50 (Quantum state estimation, approximate cloning). arXiv quant-ph. Level 3: graduate.

**Definition.** A channel broadcasts a family of states if, for every member ρ, both reduced states of its two-part output equal ρ; the two outputs may be correlated. For a commuting family, one label sampled from a shared eigenbasis can feed both outputs.

**Problem.** One channel broadcasts every state in a commuting family of finite-dimensional states.

**How the definition helps.** Commuting states share an eigenbasis, so in our own construction we measure in that basis and prepare the observed basis state at both outputs. Each output then has the eigenvalue distribution of ρ in that basis, which is ρ. Our own counterexample: broadcasting the pure states (1, 0) and (1, 1)⁄√2 forces a product output, which would clone them, contrary to the no-cloning theorem.

**Wikipedia:** [No-broadcasting theorem](https://en.wikipedia.org/wiki/No-broadcasting_theorem). It says: “there is no method capable of taking a single copy of either state and succeeding”

**Sources:**

- [Howard Barnum, Carlton M. Caves, Christopher A. Fuchs, Richard Jozsa and Benjamin Schumacher, Noncommuting Mixed States Cannot Be Broadcast (1996)](https://doi.org/10.1103/PhysRevLett.76.2818)

### Codes defined by stabilizers detect every error that anticommutes with one

**Remember:** An anticommuting error flips the sign of a check.

*True by definition.* MSC 81P73 (Computational stability and error-correcting codes for quantum computation and communication processing), 81P70. arXiv quant-ph, cs.IT. Level 3: graduate.

**Definition.** A stabilizer code is the space of n-qubit states fixed by every element of a commuting group of Pauli operators that excludes −I, so each element is a check with value +1 on the code. Pauli operators are tensor products of I, X, Y and Z times ±1 or ±i.

**Problem.** If a Pauli error anticommutes with some stabilizer element, it sends the code space into a space orthogonal to it.

**How the definition helps.** If E anticommutes with a check S, then S(Eψ) = −ESψ = −Eψ, so Eψ has check value −1. Eigenspaces of a Hermitian operator for different eigenvalues are orthogonal, so measuring S detects the error. From a list of basis states one would instead compute all the overlaps (our own comparison).

**Wikipedia:** [Stabilizer code](https://en.wikipedia.org/wiki/Stabilizer_code). It says: “E\|ψ⟩ is in the −1-eigenspace of S rather than the +1-eigenspace”

**Sources:** none listed. No primary source with a working link was found.

### Correctable error spans stay correctable

**Remember:** Check the cross-products once, then correct all linear combinations.

*True by definition.* MSC 81P73 (Computational stability and error-correcting codes for quantum computation and communication processing). arXiv quant-ph. Level 3: graduate.

**Definition.** A list of errors satisfies the Knill–Laflamme condition for a code with projection P if PA†BP is a scalar multiple of P for every pair A, B in the list. The condition survives linear combinations of A and of B, so it passes from a list to its linear span.

**Problem.** Suppose PA†BP is a scalar multiple of P for every pair in a spanning list of errors. Then every channel whose errors lie in their linear span can be recovered on the code.

**How the definition helps.** Expanding PA†BP for two linear combinations gives a sum of scalar multiples of P, so the span satisfies the condition (our own argument). The Knill–Laflamme theorem turns this condition into a recovery channel. Testing each error alone would miss the cross products between different errors.

**Paper or page:** [Kitaev's quantum double model as an error correcting code](https://arxiv.org/abs/1908.02829v3). It says: “A necessary and sufficient condition for the existence of a recovery channel ℛ correcting ℰ on 𝒞 is that P Eᵢ† Eⱼ P = αᵢⱼ P, for some Hermitian matrix α of complex numbers.”

**Sources:**

- [Kitaev's quantum double model as an error correcting code](https://arxiv.org/abs/1908.02829v3)

### Valid stabilizers leave nonzero codes

**Remember:** Without minus identity, averaging the group projects onto a nonzero space.

*Rules out counterexamples. Confidence: medium.* MSC 81P73 (Computational stability and error-correcting codes for quantum computation and communication processing). arXiv quant-ph. Level 3: graduate.

**Definition.** A stabilizer group is a commuting group of n-qubit Pauli operators, tensor products of I, X, Y and Z times ±1 or ±i, that does not contain −I. Excluding −I also excludes ±iI, so the identity is its only element with nonzero trace (our own). Its stabilizer code is the common fixed space.

**Problem.** Every stabilizer group on n qubits has a nonzero fixed space. Its dimension is 2ⁿ divided by the group order.

**How the definition helps.** Averaging the group gives the projection onto its fixed space, and only the identity contributes to the trace, so the dimension is 2ⁿ divided by the group order (our own argument). The group {I, −I} shows why −I is excluded, since its only fixed vector is zero.

**Paper or page:** [Stabilizer Formalism for Operator Algebra Quantum Error Correction](https://arxiv.org/abs/2304.11442v2). It says: “Let 𝒮 be an abelian subgroup of 𝒫ₙ that does not contain −I, and let C be its stabilizer subspace.”

**Sources:**

- [Stabilizer Formalism for Operator Algebra Quantum Error Correction](https://arxiv.org/abs/2304.11442v2)

### Antiunitary time reversal squaring to minus identity pairs energy eigenstates

**Remember:** Reversing time twice negates, so each state has an orthogonal twin.

*True by definition.* MSC 81Q10 (Selfadjoint operator theory in quantum theory, including spectral analysis), 81S05. arXiv quant-ph, math-ph. Level 3: graduate.

**Definition.** Time reversal is an antiunitary map T, a conjugate-linear bijection with ⟨Tu, Tw⟩ = ⟨w, u⟩. When T² = −I, this gives ⟨Tv, v⟩ = −⟨Tv, v⟩, so every vector v is orthogonal to Tv.

**Problem.** If the energy operator commutes with T and T² = −I, every finite-dimensional energy eigenspace has even dimension. Any eigenvector has an orthogonal partner at the same energy.

**How the definition helps.** Orthogonality gives every eigenvector v an orthogonal partner Tv, and commutation with the energy operator puts Tv at the same energy. In our own proof, the span of v and Tv and its orthogonal complement in the eigenspace are both T-invariant. Repeating the pairing on the complement gives even dimension.

**Wikipedia:** [Kramers' theorem](https://en.wikipedia.org/wiki/Kramers%27_theorem). It says: “If T : H → H is an antiunitary operator acting on a Hilbert space H satisfying T² = −1 and v a vector in H, then T v is orthogonal to v.”

**Sources:** none listed. No primary source with a working link was found.

### Connected graphs have unique ground modes

**Remember:** Zero energy means one constant per connected component.

*Rules out counterexamples.* MSC 81Q35 (Quantum mechanics on special spaces: manifolds, fractals, graphs, lattices), 81Q10. arXiv math-ph. Level 3: graduate.

**Definition.** On a finite metric graph, whose edges are intervals of positive finite length, the free Laplacian comes from the energy ∫\|f′\|² summed over edges. Its functions have square-integrable derivatives and one common value at each vertex, so zero energy means one constant spread across each connected piece.

**Problem.** The free Laplacian on a connected compact metric graph with at least one edge has a simple zero eigenvalue. Two disjoint intervals instead give two independent zero modes.

**How the definition helps.** Zero energy forces f′ = 0, so f is constant on each edge, and matching vertex values make the constant global on a connected graph (our own proof). The operator associated with the energy has these zero-energy functions as its kernel. Two disjoint intervals share no vertex, so two independent constants survive.

**Paper or page:** [Geometric spectral theory of quantum graphs](https://arxiv.org/abs/2310.02707v3). It says: “In particular, its spectrum is real and takes the form λ₁ &lt; λ₂ ≤ λ₃ ≤ … → ∞”

**Sources:**

- [Geometric spectral theory of quantum graphs](https://arxiv.org/abs/2310.02707v3)

### Energy forms give Kirchhoff conditions

**Remember:** One test value per vertex makes the edge currents add.

*True by definition.* MSC 81Q35 (Quantum mechanics on special spaces: manifolds, fractals, graphs, lattices), 81Q10. arXiv math-ph. Level 3: graduate.

**Definition.** On a finite metric graph, whose edges are intervals of positive finite length, the energy of f is ∫\|f′\|² summed over edges. Admit functions with square-integrable derivatives that take one common value at each vertex, so each vertex carries a single test value.

**Problem.** The associated operator acts as the negative second derivative on each edge. Its domain also requires square-integrable second derivatives and zero sum of outgoing derivatives at each vertex.

**How the definition helps.** Integrating by parts against a test function leaves, at each vertex, its single value times the sum of outgoing derivatives (our own proof). Test values at different vertices are independent, so the boundary terms vanish only when each sum is zero. The theorem associating an operator to the energy makes this the operator’s domain.

**Paper or page:** [Geometric spectral theory of quantum graphs](https://arxiv.org/abs/2310.02707v3). It says: “(Aq f)\|ₑ = −f\|ₑ″ + q\|ₑ f\|ₑ”

**Sources:**

- [Geometric spectral theory of quantum graphs](https://arxiv.org/abs/2310.02707v3)

### Vertex cuts lower graph eigenvalues

**Remember:** A cut allows more trial functions at the same energy.

*True by definition.* MSC 81Q35 (Quantum mechanics on special spaces: manifolds, fractals, graphs, lattices), 81Q10. arXiv math-ph. Level 3: graduate.

**Definition.** Give each edge of a finite graph a positive finite length. Eigenvalues of the free graph Laplacian are min–max values of the energy ∫\|f′\|² over functions with square-integrable derivatives that match at each vertex. Splitting one vertex into r + 1 vertices drops r matching conditions, so it enlarges the space of trial functions by r dimensions without changing the energy.

**Problem.** Splitting a vertex into r + 1 vertices cannot raise any eigenvalue of the free graph Laplacian. The new eigenvalue at index k is at least the old one at index k − r when k &gt; r.

**How the definition helps.** A larger trial space with the same energy can only lower each min–max value (our own proof). The old space has codimension r in the new one, so each new eigenvalue at index k is at least the old one at index k − r. This avoids solving the differential equation with new vertex conditions.

**Paper or page:** [Geometric spectral theory of quantum graphs](https://arxiv.org/abs/2310.02707v3). It says: “Suppose Γ̃ is formed from Γ by making a rank r ≥ 1 cut of a vertex v of Γ, preserving standard conditions at all vertices.”

**Sources:**

- [Geometric spectral theory of quantum graphs](https://arxiv.org/abs/2310.02707v3)

### Signed traces cancel excited states

**Remember:** The signed trace cancels every positive-energy pair.

*True by definition.* MSC 81Q60 (Supersymmetry and quantum mechanics). arXiv hep-th, math-ph. Level 3: graduate.

**Definition.** Split the state space into orthogonal even and odd parts, and let a self-adjoint Q swap them with Q² = H, the energy operator. The Witten index at inverse temperature β is the signed trace: the trace of exp(−βH) on even states minus that on odd states. At each energy E &gt; 0, Q/√E pairs even states one to one with odd states.

**Problem.** For supersymmetric quantum mechanics, suppose the thermal operator has finite trace for every positive inverse temperature. Then the Witten index is constant and equals the number of even zero-energy states minus the number of odd ones.

**How the definition helps.** The pairing makes even and odd states at each positive energy equally many, so they cancel in the signed trace (our own proof). Q commutes with H, so it preserves each energy space, and (Q/√E)² is the identity there. Only zero-energy states remain, and their count does not depend on β.

**nLab:** [Witten index](https://ncatlab.org/nlab/show/Witten+index). It says: “The Witten index or supersymmetric index of a supersymmetric quantum field theory is its partition function with the trace-operation replaced by the super-trace.”

**Sources:**

- [Edward Witten, Constraints on supersymmetry breaking (1982)](https://doi.org/10.1016/0550-3213(82)90071-2)

### Berry holonomy makes the closed-loop phase factor gauge invariant

**Remember:** A line's return map is one number, whatever basis labels it.

*True by definition.* MSC 81Q70 (Differential geometric methods, including holonomy, Berry and Hannay phases, Aharonov-Bohm effect, etc. in quantum theory), 53C05. arXiv quant-ph, math-ph. Level 3: graduate.

**Definition.** Take a smooth closed loop of eigenstate lines for an isolated simple eigenvalue, with P(t) the projection onto the line. Berry transport moves a unit vector ψ(t) in the line with P(t)ψ′(t) = 0, and the Berry phase factor is the scalar relating the returning vector to the starting one. It uses no choice of eigenstate phases.

**Problem.** The phase factor does not depend on how one chooses the phases of the eigenstates along the loop. The phase angle itself is only determined modulo 2π.

**How the definition helps.** Transport returns to the same one-dimensional space, and the scalar of a map on a line does not depend on its basis (our own). In the local integral formula, a phase change adds a derivative to the connection, so the angle shifts only by a multiple of 2π. The adiabatic theorem links this transport to slow quantum evolution after removing the dynamical phase.

**Wikipedia:** [Berry connection and curvature](https://en.wikipedia.org/wiki/Berry_connection_and_curvature), [Geometric phase](https://en.wikipedia.org/wiki/Geometric_phase). It says: “However, its integral along a closed path, the Berry phase γₙ, is gauge-invariant up to an integer multiple of 2π.”

**Sources:**

- [M. V. Berry, Quantal phase factors accompanying adiabatic changes, Proceedings of the Royal Society of London A (1984)](https://doi.org/10.1098/rspa.1984.0023)
- [Barry Simon, Holonomy, the quantum adiabatic theorem, and Berry's phase, Physical Review Letters (1983)](https://doi.org/10.1103/PhysRevLett.51.2167)

### Rotation generators fix the commutators of angular momentum

**Remember:** Small rotations determine how angular momentum operators fail to commute.

*True by definition.* MSC 81R05 (Finite-dimensional groups and algebras motivated by physics and their representations), 81S05, 22E70. arXiv quant-ph, math-ph. Level 3: graduate.

**Definition.** Angular momentum about an axis is the generator of rotations: iħ times the derivative at zero angle of the unitary rotation operator about that axis. Because it differentiates the rotation group, it inherits the group’s brackets, and it covers spin as well as orbital motion.

**Problem.** On states where all the products are defined, orbital, spin, and total angular momentum satisfy \[J₁, J₂\] = iħJ₃ and the cyclic versions. The commutator \[A, B\] means AB − BA.

**How the definition helps.** Differentiating a rotation representation preserves the Lie brackets, which measure how small rotations fail to commute (our own). For spin, use the double cover of the rotation group, which has the same brackets (our own). With the orbital formula r × p one must instead compute from the position and momentum commutators.

**Wikipedia:** [Angular momentum operator](https://en.wikipedia.org/wiki/Angular_momentum_operator). It says: “The most general and fundamental definition of angular momentum is as the generator of rotations.”

**Sources:** none listed. No primary source with a working link was found.

### Weyl relations restore uniqueness

**Remember:** Exponentiate the commutator, and the bounded-interval counterexample disappears.

*Rules out counterexamples.* MSC 81S05 (Commutation relations and statistics as related to quantum mechanics (general)), 81R15. arXiv math-ph, quant-ph. Level 3: graduate.

**Definition.** The Weyl relations ask for unitary groups U(s) and V(t), for position and momentum and continuous on each vector, with U(s)V(t) = exp(icst)V(t)U(s) for all real s, t and a fixed real c ≠ 0. They force V(t) to shift the position spectrum by every real amount, which the bare commutator does not.

**Problem.** Any two irreducible pairs obeying these relations for the same c are unitarily equivalent. Irreducibility means they have no common proper nonzero closed invariant subspace.

**How the definition helps.** Position on a bounded interval has bounded spectrum, so it cannot satisfy the Weyl relations. Yet, in our own example, it and periodic momentum satisfy the commutator on smooth functions supported inside the interval. The Stone–von Neumann theorem proves uniqueness from the Weyl relations.

**Wikipedia:** [Stone–von Neumann theorem](https://en.wikipedia.org/wiki/Stone%E2%80%93von_Neumann_theorem). It says: “one must require that the operators satisfy the exponentiated form of the canonical commutation relations, known as the Weyl relations.”

**Sources:**

- [Hermann Weyl, Quantenmechanik und Gruppentheorie (1927)](https://doi.org/10.1007/BF02055756)
- [John von Neumann, Die Eindeutigkeit der Schrödingerschen Operatoren (1931)](https://doi.org/10.1007/BF01457956)

### Primitive channels forget their inputs

**Remember:** One fixed number of steps gives every input full rank.

*Rules out counterexamples.* MSC 81S22 (Open systems, reduced dynamics, master equations, decoherence). arXiv quant-ph, math-ph. Level 3: graduate.

**Definition.** A quantum channel Φ, a completely positive trace-preserving map on matrices, is primitive if one fixed number N of steps sends every state to a full-rank one: Φᴺ(ρ) is positive definite for all states ρ. This rules out channels that cycle through rank-deficient states forever.

**Problem.** Every primitive channel converges under iteration to one fixed full-rank state, regardless of its input.

**How the definition helps.** The quantum Perron–Frobenius theorem turns primitivity into a full-rank stationary state with simple eigenvalue one and all other eigenvalues strictly inside the unit circle. Trace preservation then makes every input converge to that state. In our own example, measuring in a basis and preparing the other basis state is irreducible but alternates forever.

**Paper or page:** [Zero-error communication under discrete-time Markovian dynamics](https://arxiv.org/abs/2402.18703v3). It says: “∃ N ∈ ℕ such that ∀ ρ ∈ 𝕊𝒹(ℂ) and n ≥ N, Φⁿ(ρ) is of full rank.”

**Sources:**

- [Zero-error communication under discrete-time Markovian dynamics](https://arxiv.org/abs/2402.18703v3)
- [Mikel Sanz, David Pérez-García, Michael M. Wolf and J. Ignacio Cirac, A Quantum Version of Wielandt’s Inequality (2010)](https://doi.org/10.1109/TIT.2010.2054552)

### Composition makes Moyal products associative

**Remember:** Three functions multiply like the three operators they represent.

*True by definition.* MSC 81S30 (Phase-space methods including Wigner distributions, etc. applied to problems in quantum mechanics). arXiv math-ph, hep-th. Level 3: graduate.

**Definition.** The Moyal product of two smooth rapidly decaying phase-space functions is the function whose Weyl quantization W is the composition of their quantizations: f ⋆ g = W⁻¹(W(f)W(g)). It is operator composition carried over to functions.

**Problem.** The Moyal product is associative on smooth rapidly decaying functions on phase space.

**How the definition helps.** Both bracketings of three functions give W⁻¹ of the same composition of three operators, because composition is associative (our own explanation). Composition keeps the kernels smooth and rapidly decaying, so W⁻¹ applies. This definition agrees with the Moyal integral formula, and formally with the derivative series, which need not converge.

**Wikipedia:** [Moyal product](https://en.wikipedia.org/wiki/Moyal_product). It says: “It is an associative, non-commutative product”

**Sources:**

- [Hilbrand J. Groenewold, On the Principles of Elementary Quantum Mechanics (1946)](https://doi.org/10.1007/978-94-017-6065-2)

### Rank-one Wigner symbols multiply by overlaps

**Remember:** Two rank-one operators meet in one inner product.

*True by definition.* MSC 81S30 (Phase-space methods including Wigner distributions, etc. applied to problems in quantum mechanics). arXiv math-ph. Level 3: graduate.

**Definition.** The star product of Weyl symbols, functions of position and momentum, is the symbol of the composition of their operators. For square-integrable ψ and φ on ℝⁿ, the rank-one map v ↦ ψ⟨φ,v⟩ has symbol (2πℏ)ⁿ W(ψ,φ), with W the Wigner function.

**Problem.** The star product of W(ψ,φ) and W(ψ′,φ′) equals ⟨φ,ψ′⟩ W(ψ,φ′)/(2πℏ)ⁿ. The inner product is linear in its second argument.

**How the definition helps.** Composing v ↦ ψ⟨φ,v⟩ after v ↦ ψ′⟨φ′,v⟩ gives v ↦ ⟨φ,ψ′⟩ψ⟨φ′,v⟩, so one inner product remains (our own proof). Translating back to symbols leaves one factor 1/(2πℏ)ⁿ. This avoids the integral formula for the star product.

**Paper or page:** [Phase Space Representation of the Density Operator: Bopp Pseudodifferential Calculus and Moyal Product](https://arxiv.org/abs/2411.14391v2). It says: “Let ψ, ψ′, φ, φ′ be in L²(ℝⁿ).”

**Sources:**

- [Phase Space Representation of the Density Operator: Bopp Pseudodifferential Calculus and Moyal Product](https://arxiv.org/abs/2411.14391v2)

### Wigner functions preserve both marginals

**Remember:** Integrate out either coordinate to recover the probability density of the other.

*True by definition.* MSC 81S30 (Phase-space methods including Wigner distributions, etc. applied to problems in quantum mechanics). arXiv math-ph, quant-ph. Level 3: graduate.

**Definition.** The Wigner function of a normalized smooth rapidly decaying wavefunction ψ on ℝ, in units ℏ = 1, is W(x,p) = (2π)⁻¹∫ exp(−ipy) ψ(x+y/2) conj(ψ(x−y/2)) dy. The two arguments sit symmetrically about x, so one Fourier integral sees both position and momentum.

**Problem.** Integrating the Wigner function over momentum gives the position probability density. Integrating over position gives the momentum probability density.

**How the definition helps.** Integrating over p is Fourier inversion at y = 0, which gives \|ψ(x)\|² (our own derivation). Integrating over x, the change u = x+y/2, v = x−y/2 has Jacobian one and splits the integral into the momentum wavefunction times its conjugate.

**Wikipedia:** [Wigner quasiprobability distribution](https://en.wikipedia.org/wiki/Wigner_quasiprobability_distribution). It says: “Marginal distributions for x and p are recovered by integrating over p and x respectively.”

**Sources:**

- [Eugene Wigner, On the Quantum Correction For Thermodynamic Equilibrium (1932)](https://doi.org/10.1103/PhysRev.40.749)

### Causal propagation gives spacelike commutation

**Remember:** No retarded or advanced response means no commutator.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras), 81T20. arXiv math-ph, hep-th. Level 3: graduate.

**Definition.** For the free scalar field and real smooth compactly supported tests f and g, \[φ(f), φ(g)\] = i⟨f,(Gᵣ−Gₐ)g⟩I in units ℏ = 1, where ⟨,⟩ integrates over spacetime. The retarded and advanced propagators Gᵣ and Gₐ spread a source only into its causal future and past.

**Problem.** On a spacetime admitting a surface for complete initial data, these averaged fields commute when no causal path connects their supports.

**How the definition helps.** If no causal path joins the supports, (Gᵣ−Gₐ)g vanishes on the support of f, so the commutator is zero (our own proof). This avoids evolving commutators from initial data. One must still construct Gᵣ and Gₐ and show that they match quantization from initial data.

**nLab:** [causal propagator](https://ncatlab.org/nlab/show/causal+propagator). It says: “its support as a distribution, is, for one of the two arguments fixed, the causal cone of that point”

**Sources:**

- [Christian Bär, Green-Hyperbolic Operators on Globally Hyperbolic Spacetimes](https://doi.org/10.1007/s00220-014-2097-7)

### Complement cyclicity forces local faithfulness

**Remember:** Cyclicity on the outside makes local action faithful.

*Rules out counterexamples.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 3: graduate.

**Definition.** In a local net, the algebras of spacelike separated regions commute. Local cyclicity means that the algebra of any nonempty open region, applied to the vacuum, gives a dense set of vectors; the Reeh–Schlieder theorem supplies it under the vacuum field axioms.

**Problem.** For a local net with this property, no nonzero bounded observable in a region with a nonempty spacelike open complement annihilates the vacuum.

**How the definition helps.** If a local observable A annihilates the vacuum, it annihilates B applied to the vacuum for every B in the commuting algebra of the spacelike complement. Local cyclicity makes those vectors dense, so the bounded A is zero. Cyclicity for the whole algebra is not enough: a product vector is cyclic for the two-qubit matrix algebra, yet a one-qubit projection kills it (our own counterexample).

**nLab:** [Reeh-Schlieder theorem](https://ncatlab.org/nlab/show/Reeh-Schlieder+theorem). It says: “there cannot be a nonzero localized observable that annihilates the vacuum.”

**Sources:** none listed. No primary source with a working link was found.

### Forward spectrum gives imaginary translations

**Remember:** Future imaginary shifts damp every allowed momentum.

*Rules out counterexamples.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 3: graduate.

**Definition.** Let U(x) = exp(iP·x) be a strongly continuous unitary representation of spacetime translations, with p·(s,v) = Es − ⟨k,v⟩. The spectrum condition puts every joint spectral value p = (E,k) in the forward cone E ≥ ‖k‖, so exp(−p·y) ≤ 1 whenever y = (s,v) has s &gt; ‖v‖.

**Problem.** Each coefficient ⟨a,U(x)b⟩ extends continuously from real translations to the tube x+iy, where y = (s,v) and s &gt; ‖v‖. The extension is bounded and holomorphic inside the tube.

**How the definition helps.** The bounded damping lets us integrate exp(ip·(x+iy)) against the finite spectral measure of a and b, which gives a bounded holomorphic extension (our own proof). Dominated convergence gives the boundary values. Our own counterexample is the character exp(ix₁), with zero energy and nonzero momentum, whose continuation grows without bound.

**nLab:** [Wightman axioms](https://ncatlab.org/nlab/show/Wightman+axioms). It says: “The spectrum of the energy-momentum operator P is concentrated in the closed upper (forward) light cone V⁺.”

**Sources:** none listed. No primary source with a working link was found.

### Spectral ground states survive symmetries

**Remember:** Change the observables, keep the positive generator.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 3: graduate.

**Definition.** A state ω is a ground state for time evolution αₜ if some representation π, with ω(a) = ⟨Ω,π(a)Ω⟩ for a cyclic unit vector Ω, carries a strongly continuous unitary group that implements αₜ, fixes Ω and has nonnegative generator. Cyclic means that the vectors π(a)Ω are dense.

**Problem.** An automorphism that commutes with time evolution pulls any ground state back to a ground state.

**How the definition helps.** Composing π with the automorphism represents the pulled-back state with the same vector Ω and the same unitary group (our own proof). The automorphism is onto, so Ω stays cyclic, and it commutes with time evolution, so the group still implements αₜ with nonnegative generator.

**Paper or page:** [Ground state representations of some non-rational conformal nets](https://arxiv.org/abs/1807.11723v2). It says: “If α commutes with Ad U(τ(t)), then ω ∘ α is a ground state.”

**Sources:**

- [Yoh Tanimoto, Ground State Representations of Some Non-Rational Conformal Nets](https://doi.org/10.3390/sym10090415)

### Split inclusions allow independent states

**Remember:** A type I factor separates the two sets of observables.

*Makes the theorem clean to state or prove.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 3: graduate.

**Definition.** An inclusion M ⊂ N of von Neumann algebras is split if some type I factor sits between them, an algebra acting as all bounded operators on one tensor factor and trivially on the other. Then M lives on the first factor and the commutant N′, the operators commuting with N, lives on the second.

**Problem.** Suppose M ⊂ N is split and φ and ψ are normal states on M and N′. Then their generated von Neumann algebra admits a normal state ω satisfying ω(ab) = φ(a)ψ(b) for a ∈ M and b ∈ N′.

**How the definition helps.** M and N′ sit on separate tensor factors, so the split theorem identifies the algebra they generate with their spatial tensor product. A product of the two normal states on this tensor product gives the required ω (our own deduction).

**nLab:** [split inclusion of von Neumann algebras](https://ncatlab.org/nlab/show/split+inclusion+of+von+Neumann+algebras). It says: “extends to a spatial isomorphism, the tensor product used here is the spatial tensor product.”

**Sources:**

- [Vincenzo Morinelli, Yoh Tanimoto and Mihály Weiner, Conformal Covariance and the Split Property](https://doi.org/10.1007/s00220-017-2961-3)

### Reflected covariance tests Gaussian laws

**Remember:** For Gaussian laws, positivity of the reflected covariance is enough.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 3: graduate.

**Definition.** Let X be a centered real Gaussian random distribution whose law is invariant under time reflection θ. Its reflected covariance is B(f,g) = 𝔼\[X(f ∘ θ)X(g)\] for real smooth compactly supported positive-time tests f and g. Reflection positivity asks 𝔼\[conj(F ∘ θ)F\] ≥ 0 for every bounded measurable F of finitely many positive-time evaluations.

**Problem.** The law is reflection positive exactly when B(f,f) ≥ 0 for every such test f.

**How the definition helps.** Divide each exp(iX(f)) by its mean; then the matrix of reflected expectations has entries exp(B(f,g)) (our own argument). If B is positive semidefinite, entrywise products keep this so, hence so does the exponential series, and these exponentials are dense among square-integrable observations. Conversely, truncating a linear evaluation X(f) gives B(f,f) ≥ 0.

**nLab:** [Osterwalder-Schrader theorem](https://ncatlab.org/nlab/show/Osterwalder-Schrader+theorem). It says: “Let θ : (x, t) ↦ (x, −t) be the time reflection. Then the content of the axiom is: 0 ≤ ⟨θA, A⟩\[L₂\].”

**Sources:**

- [Arici, Becker, Ripken, Saueressig and van Suijlekom, Reflection positivity in higher derivative scalar theories (2018)](https://doi.org/10.1063/1.5027231)

### Reflection positivity survives weak limits

**Remember:** Weak convergence preserves each bounded continuous reflection test.

*True by definition. Confidence: medium.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 3: graduate.

**Definition.** A time-symmetric law of a random field is reflection positive if 𝔼\[conj(F ∘ θ)F\] ≥ 0 for every bounded continuous F of finitely many field evaluations on positive-time tests, where θ reverses time. The field is a random continuous linear functional on rapidly decreasing smooth tests on Euclidean space.

**Problem.** Any weak limit of such reflection-positive laws is reflection positive. The limit also satisfies the inequality for every bounded measurable function of its positive-time evaluations.

**How the definition helps.** Each product conj(F ∘ θ)F is bounded and continuous, so its expectation passes to a weak limit. In our own proof, such tests approximate every square-integrable future observation in mean square, and time symmetry gives the same error after reflection, which recovers the measurable tests. The cited construction also needs a weakly convergent subsequence.

**Paper or page:** [Stochastic quantization of two-dimensional P(Φ) Quantum Field Theory](https://arxiv.org/abs/2311.04137). It says: “is invariant under the Euclidean symmetries of the plane and reflection positive.”

**Sources:**

- [Stochastic quantization of two-dimensional P(Φ) Quantum Field Theory](https://arxiv.org/abs/2311.04137)

### Split weights preserve reflection positivity

**Remember:** Put one copy of the weight inside each half of the reflection test.

*True by definition. Confidence: medium.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 3: graduate.

**Definition.** Under a time-symmetric field law with time reversal θ, pick a bounded nonnegative future observation w with Z = 𝔼\[w(w ∘ θ)\] &gt; 0. The split weight is the new law with density w(w ∘ θ)/Z, one copy of w in the future and its mirror in the past. Reflection positivity asks 𝔼\[conj(F ∘ θ)F\] ≥ 0 for every bounded measurable future observation F.

**Problem.** If the original law is reflection positive, the weighted law is reflection positive.

**How the definition helps.** Since w is real, the new law’s reflected test of F is the old law’s reflected test of wF, divided by Z. In our own proof, wF is still a bounded future observation, so this is nonnegative.

**Wikipedia:** [Schwinger function](https://en.wikipedia.org/wiki/Schwinger_function). It says: “which only depends on φ on the positive half-space (φ₊), and S₋ which only depends upon φ on the negative half-space (φ₋)”

**Sources:** none listed. No primary source with a working link was found.

### Wick subtraction saves the square

**Remember:** Subtract the expected square before summing the modes.

*Rules out counterexamples.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 3: graduate.

**Definition.** On a flat two-dimensional torus, let φₙ be the centered Gaussian field with covariance (−Δ + m²)⁻¹, m &gt; 0, cut off to Fourier frequencies of length at most n. Its Wick square φₙ(x)² − 𝔼\[φₙ(x)²\] subtracts the divergent sum of mode variances and keeps only the fluctuations.

**Problem.** The integrated Wick squares converge in L² of the probability law as the cutoff increases. The uncentered integrated squares diverge to infinity almost surely.

**How the definition helps.** Integrated, the Wick square is a sum of centered squares of independent Gaussian Fourier coefficients (our own proof). In two dimensions the coefficient variances have divergent sum but summable squares, so the centered sum converges in mean square and almost surely. Adding back the divergent means makes the uncentered integrals diverge almost surely.

**Paper or page:** [An introduction to singular stochastic PDEs: Allen-Cahn equations, metastability and regularity structures](https://arxiv.org/abs/1901.07420). It says: “For every n ∈ ℕ, we have sup(N ≥ 1) 𝔼\[((1/L²) ∫Λ :φ(GFF,N)ⁿ(x): dx)²\] &lt; ∞.”

**Sources:**

- [An introduction to singular stochastic PDEs: Allen-Cahn equations, metastability and regularity structures](https://arxiv.org/abs/1901.07420)

### Charge characters exclude fractional monopoles

**Remember:** A closed surface bounds nothing, so its flux must be whole.

*Rules out counterexamples.* MSC 81T13 (Yang-Mills and other gauge theories in quantum field theory). arXiv hep-th, math-ph. Level 3: graduate.

**Definition.** Away from a magnetic source, a degree-two differential character assigns a phase in ℝ/ℤ to each smooth integral one-cycle. On a boundary, the phase must equal the normalized magnetic flux through the spanning chain, modulo integers.

**Problem.** The normalized magnetic flux of such a character is an integer through every closed oriented surface in its domain. A monopole with normalized flux ½ through its surrounding sphere therefore admits no character.

**How the definition helps.** A closed surface spans the zero cycle, whose phase is zero, so its flux is an integer (our own derivation). Half the unit-area form on a sphere has flux ½, so no character carries it (our own example). The comparison theorem identifies these characters with circle bundles with connection.

**nLab:** [Dirac charge quantization](https://ncatlab.org/nlab/show/Dirac+charge+quantization). It says: “the electromagnetic field must be a connection on a principal U(1) bundle whose first Chern class is the discrete measure for the units of magnetic charge.”

**Wikipedia:** [Magnetic monopole](https://en.wikipedia.org/wiki/Magnetic_monopole). It says: “The total magnetic flux is none other than the first Chern number of the principal bundle, and depends only upon the choice of the principal bundle, and not the specific connection over it.”

**Sources:**

- [Daniel S. Freed, Dirac charge quantization and generalized differential cohomology](https://doi.org/10.4310/sdg.2002.v7.n1.a6)
- [Jeff Cheeger and James Simons, Differential characters and geometric invariants](https://doi.org/10.1007/bfb0075216)

### The covariant derivative commutator gives gauge-covariant field strength

**Remember:** Conjugating two derivatives also conjugates their commutator.

*True by definition.* MSC 81T13 (Yang-Mills and other gauge theories in quantum field theory), 53C05. arXiv hep-th, math-ph. Level 3: graduate.

**Definition.** A gauge change U is a position-dependent change of basis for the internal field values, and a covariant derivative D changes to UDU⁻¹ under it. The field strength F in two coordinate directions is the commutator DᵢDⱼ − DⱼDᵢ, which is a matrix acting at each point.

**Problem.** Under a gauge change, F becomes UFU⁻¹. Therefore the trace of F² does not change.

**How the definition helps.** Conjugation by U carries DᵢDⱼ − DⱼDᵢ to U(DᵢDⱼ − DⱼDᵢ)U⁻¹, so F becomes UFU⁻¹ (our own proof). Then F² becomes UF²U⁻¹, and cyclicity of the trace leaves its trace unchanged.

**Wikipedia:** [Gauge covariant derivative](https://en.wikipedia.org/wiki/Gauge_covariant_derivative). It says: “Unlike the partial derivatives, the gauge covariant derivatives do not commute. However they almost do in the sense that the commutator is not an operator of order 2 but of order 0, i.e. is linear over functions:”

**Sources:** none listed. No primary source with a working link was found.

### The trace of parallel transport makes Wilson loops gauge invariant

**Remember:** Loop transport changes by conjugation, and conjugation does not change its trace.

*True by definition.* MSC 81T13 (Yang-Mills and other gauge theories in quantum field theory), 53C05. arXiv hep-th, math-ph. Level 3: graduate.

**Definition.** Parallel transport along a path is the linear map between the internal vector spaces at its ends given by a connection. A Wilson loop is the trace, in a chosen representation, of this transport around a closed path; a gauge change at the base point conjugates the transport.

**Problem.** A Wilson loop is unchanged by local changes of basis in the internal vector spaces. These are called gauge transformations.

**How the definition helps.** On a closed path the same basis change acts at both ends, so the transport matrix is conjugated and its trace is unchanged. The path-ordered exponential is the same transport, written as the solution of a linear differential equation along the path (our own).

**Wikipedia:** [Wilson loop](https://en.wikipedia.org/wiki/Wilson_loop). It says: “The trace of closed Wilson lines is a gauge invariant quantity known as the Wilson loop”

**Paper or page:** [Four Dimensional Quantum Yang-Mills Theory for Weak Coupling Strength: Mass Gap Implies Quark Confinement](https://arxiv.org/abs/2406.16881v2). It says: “The Wilson loop is gauge invariant, i.e. W\[γᶠ\](𝐀ᶠ) = W\[γ\](𝐀) for all gauge transforms f”

**Sources:**

- [Kenneth G. Wilson, Confinement of quarks, Physical Review D 10 (1974) 2445](https://doi.org/10.1103/PhysRevD.10.2445)

### Differential extensions localize scale changes

**Remember:** Changing the logarithm leaves only the Laplacian of a fundamental solution.

*True by definition. Confidence: medium.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 3: graduate.

**Definition.** In four Euclidean dimensions the scalar bubble kernel \|x\|⁻⁴ is not integrable at zero, so define its extension at scale μ &gt; 0 as T(μ) = −¼ Δ\[log(μ²\|x\|²)/\|x\|²\], a distributional Laplacian of a locally integrable function. The scale enters only through the term log μ² times −¼ Δ\|x\|⁻².

**Problem.** For any positive scales μ and ν, T(ν) − T(μ) = 2π² log(ν/μ) δ₀, where δ₀ evaluates a test at zero.

**How the definition helps.** Subtracting the logarithms leaves the constant 2 log(ν/μ), so T(ν) − T(μ) = −½ log(ν/μ) Δ\|x\|⁻² (our own calculation). The fundamental solution identity Δ\|x\|⁻² = −4π²δ₀ gives the coefficient.

**nLab:** [differential renormalization](https://ncatlab.org/nlab/show/differential+renormalization). It says: “makes choices for defining time-ordered products/Feynman amplitudes at coincident interaction vertices.”

**Sources:**

- [Daniel Z. Freedman, Kenneth Johnson and José I. Latorre, Differential Regularization and Renormalization (1992)](https://doi.org/10.1016/0550-3213(92)90240-C)

### Automorphisms count Wick pairings

**Remember:** Divide by the permutations that leave the pairing unchanged.

*True by definition.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 3: graduate.

**Definition.** A diagram is an orbit of pairings of field occurrences under the relabelling group, which permutes identical vertices and the ends at each vertex, with external labels fixed. The formal Gaussian expansion divides by the order of this group, the product of every vertex degree factorial and every identical-vertex multiplicity factorial. Aut(G) is the subgroup of relabellings that fix one representative pairing.

**Problem.** After coupling constants and covariance factors are removed, each diagram has coefficient 1/\|Aut(G)\|, where Aut(G) is its automorphism group.

**How the definition helps.** The coefficient of a diagram is its orbit size divided by the group order, and the orbit–stabilizer formula makes this 1/\|Aut(G)\| (our own proof).

**Wikipedia:** [Feynman diagram](https://en.wikipedia.org/wiki/Feynman_diagram). It says: “the contribution of each Feynman diagram must be divided by the order of its group of automorphisms”

**Sources:** none listed. No primary source with a working link was found.

### Projective gauges allow partial sums

**Remember:** Each allowed normalization selects one point on every positive ray.

*True by definition.* MSC 81T18 (Feynman diagrams), 81Q30. arXiv hep-th, math-ph. Level 3: graduate.

**Definition.** For f homogeneous of degree −n on positive vectors in ℝⁿ, let ω insert the radial vector x into the first slot of the coordinate volume form. The form fω is unchanged by positive scaling and vanishes on radial directions, so it is a form on the space of rays.

**Problem.** For an absolutely convergent integral, choose any nonempty subset of the parameters and set their sum to one. With the orientation induced from the rays, integration gives the same value for every subset.

**How the definition helps.** Setting the sum of a chosen subset of parameters to one picks one point on each ray, so every such choice computes the same integral over rays (our own proof). Taking all parameters gives the usual simplex formula.

**Wikipedia:** [Feynman parametrization](https://en.wikipedia.org/wiki/Feynman_parametrization). It says: “the sum in the Dirac delta function can be reduced to a subset of Feynman parameters.”

**Sources:**

- [Hung Cheng and Tai Tsun Wu, Expanding Protons: Scattering at High Energies](https://openlibrary.org/works/OL5274534W)

### Wick ordering removes self-contractions

**Remember:** Subtract each vertex variance before expanding the joint exponential.

*Rules out counterexamples.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 3: graduate.

**Definition.** Give each vertex one centered variable, all jointly Gaussian. The nth Wick power of X is n! times the coefficient of tⁿ in exp(tX − t² Var(X)/2), where the subtracted variance term cancels the pairings of X with itself. A pairing groups all field occurrences into pairs and contributes the product of their covariances.

**Problem.** The expectation of a product of Wick powers equals the sum over pairings that join different vertices. An ordinary square at a single vertex instead has expectation Var(X).

**How the definition helps.** The expectation of exp(∑ tᵢXᵢ) is exp(½ Var(∑ tᵢXᵢ)), and the subtracted terms cancel its diagonal part (our own proof). Only cross terms tᵢtⱼ Cov(Xᵢ,Xⱼ) remain, and these pair different vertices. Comparing coefficients gives the formula, including the quoted two-vertex case.

**Paper or page:** [Renormalising Feynman diagrams with multi-indices](https://arxiv.org/abs/2501.08151v3). It says: “Let X and Y be jointly Gaussian centred random variables. Then for any n,m ≥ 0 one has 𝔼\[Hₙ(X)Hₘ(Y)\] = δₘⁿ n!𝔼\[XY\]ⁿ”

**Sources:**

- [Yvain Bruned and Yingtong Hou, Renormalising Feynman diagrams with multi-indices](https://arxiv.org/abs/2501.08151v3)

### Contractions turn time ordering into multiplication

**Remember:** Time ordering is ordinary multiplication seen through exp(ℏC/2).

*True by definition.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 3: graduate.

**Definition.** For regular off-shell polynomial field functionals, let C contract the second derivative with the symmetric Feynman kernel, and set T = exp(ℏC/2) with ℏ a formal parameter. Time-ordered multiplication of two functionals sums over all sets of disjoint pairs, one field from each factor, contracting each pair with ℏ times the kernel.

**Problem.** For regular polynomial functionals F and G, the time-ordered product of TF and TG equals T(FG). Consequently the time-ordered product is associative.

**How the definition helps.** By the product rule, C acting on FG splits into contractions inside F, inside G, and twice the contraction between them (our own explanation). These operators commute, so the exponential factors, and its cross part is exactly time-ordered multiplication. The series terminate on polynomials, T has inverse exp(−ℏC/2), and associativity follows from that of the ordinary product.

**nLab:** [Wick algebra](https://ncatlab.org/nlab/show/Wick+algebra). It says: “time-ordered product on regular polynomial observables isomorphic to pointwise product”

**Sources:** none listed. No primary source with a working link was found.

### Field equations remove commutator degeneracy

**Remember:** Quotient by the field equation, and only zero pairs to nothing.

*Rules out counterexamples.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 3: graduate.

**Definition.** Let P be the real Klein–Gordon operator on a globally hyperbolic spacetime without boundary, and E its retarded minus advanced solution operator. A smeared field is labelled by a compactly supported smooth real test f up to adding Ph with h compactly supported, since E(Ph) = 0 makes such tests pair to zero with everything.

**Problem.** The integral of f times Eg against spacetime volume gives a well-defined nondegenerate skew bilinear form on these test classes.

**How the definition helps.** Formal self-adjointness makes E skew-adjoint, so f pairs to zero with every g exactly when Ef = 0. The exact sequence for the causal propagator says Ef = 0 only for f = Ph with h compactly supported. So the quotient removes precisely the degenerate tests (our own explanation).

**nLab:** [Green hyperbolic partial differential equation](https://ncatlab.org/nlab/show/Green+hyperbolic+partial+differential+equation). It says: “the quotient space of the compactly supported dual sections by the image of P:”

**Sources:**

- [Bär, Green-Hyperbolic Operators on Globally Hyperbolic Spacetimes](https://doi.org/10.1007/s00220-014-2097-7)

### Hadamard kernels admit powers

**Remember:** Future-pointing singular directions never add up to zero.

*Rules out counterexamples.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds), 35A27. arXiv math-ph. Level 3: graduate.

**Definition.** A scalar Hadamard two-point function is a distribution whose singular directions, its wave front set, all point to the future in the first argument. They are exactly the pairs (k, −k′), where k is a future-directed lightlike covector and k′ is its parallel transport along the light ray.

**Problem.** On a globally hyperbolic spacetime without boundary, every positive integer power of a free scalar Hadamard two-point function exists as a distribution.

**How the definition helps.** Sums of future-directed covectors cannot vanish, so Hörmander’s multiplication theorem applies to every finite power (our own argument). The massless causal propagator in four-dimensional flat spacetime has both time orientations. Near a nonzero point on the light cone it contains a delta transverse to the cone, and squaring smooth approximations to that delta gives no distributional limit.

**nLab:** [Hadamard distribution](https://ncatlab.org/nlab/show/Hadamard+distribution), [wavefront set](https://ncatlab.org/nlab/show/wavefront+set). It says: “the wave front set is one causal half that of the causal propagator:”

**Sources:**

- [Radzikowski, Micro-local approach to the Hadamard condition in quantum field theory on curved space-time](https://doi.org/10.1007/BF02100096)

### Hadamard kernels restrict to Cauchy data

**Remember:** Lightlike singular directions are never normal to a spacelike surface.

*Makes the theorem clean to state or prove.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds), 35A27. arXiv math-ph. Level 3: graduate.

**Definition.** A scalar Hadamard two-point function is a distribution whose singular directions, its wave front set, are exactly the pairs (k, −k′) along light rays. Here k is a nonzero future-directed lightlike covector and k′ is its parallel transport along the ray, so both entries are lightlike.

**Problem.** For a free scalar field on a globally hyperbolic spacetime without boundary, let Σ be a smooth spacelike surface meeting every inextendible causal curve exactly once. The Hadamard two-point function and its normal derivatives in either argument restrict to distributions on Σ × Σ.

**How the definition helps.** A covector normal to Σ × Σ has timelike or zero entries, so it is never a singular pair of two nonzero lightlike entries (our own argument). Differentiation adds no singular directions. Hörmander’s restriction theorem then gives the result.

**nLab:** [Hadamard distribution](https://ncatlab.org/nlab/show/Hadamard+distribution). It says: “the wave front set is one causal half that of the causal propagator:”

**Sources:**

- [Radzikowski, Micro-local approach to the Hadamard condition in quantum field theory on curved space-time](https://doi.org/10.1007/BF02100096)

### The commutator completes Hadamard directions

**Remember:** W may be singular only along future-pointing light rays.

*True by definition.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds), 35A27. arXiv math-ph. Level 3: graduate.

**Definition.** Let C be the set of pairs (k, −k′), where k is a future-directed lightlike covector and k′ is its parallel transport along a light ray. A scalar two-point distribution W passes the Hadamard test if its wave front set, the directions in which it is singular, lies in C.

**Problem.** On a globally hyperbolic spacetime without boundary, let E be the Klein–Gordon causal propagator, retarded minus advanced solution operator. If W passes the test and W minus its transpose equals iE, then the wave front set of W equals C.

**How the definition helps.** The wave front set of E contains every pair in C (our own argument). Subtraction creates no singular directions, and the transpose has only past-pointing first entries, so W must supply all of C. Radzikowski’s theorem connects this directional test to the traditional local expansion.

**nLab:** [Hadamard distribution](https://ncatlab.org/nlab/show/Hadamard+distribution). It says: “the wave front set is one causal half that of the causal propagator:”

**Sources:**

- [Radzikowski, Micro-local approach to the Hadamard condition in quantum field theory on curved space-time](https://doi.org/10.1007/BF02100096)

### Sewing gives an annulus semigroup

**Remember:** Lengths add under sewing, so the operators multiply.

*True by definition.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics). arXiv math-ph. Level 3: graduate.

**Definition.** In an anomaly-free Segal theory, each parametrized circle has a state space, and each annulus between two circles has a linear operator between their state spaces. Sewing two annuli along a matching circle gives the composite of their operators.

**Problem.** Let T(t) denote the operator for a round annulus with radii exp(−t) and 1 and standard angular parametrizations. Then T(s + t) = T(s)T(t) for all s,t &gt; 0.

**How the definition helps.** Sewing round annuli with ratios exp(−s) and exp(−t) gives the round annulus with ratio exp(−(s + t)). So the sewing axiom gives T(s + t) = T(s)T(t). Our own calculation rescales the second annulus to match the first along their common boundary.

**nLab:** [conformal cobordism category](https://ncatlab.org/nlab/show/conformal+cobordism+category). It says: “One way to axiomatize conformal field theory (see there) in FQFT-style is as a suitable monoidal functor on a category of conformal cobordisms”

**Sources:**

- [Graeme Segal, The Definition of Conformal Field Theory](https://doi.org/10.1017/CBO9780511526398.019)

### Integer levels preserve Chern–Simons phases

**Remember:** Integer levels make a winding change invisible to the phase.

*Rules out counterexamples.* MSC 81T45 (Topological field theories in quantum mechanics), 81T13. arXiv hep-th, math-ph. Level 3: graduate.

**Definition.** In SU(2) Chern–Simons theory at level k, the quantum phase of a connection A is exp(iSₖ(A)). On closed oriented three-manifolds, a gauge change g shifts the action by 2πk times its winding number: Sₖ(Aᵍ) − Sₖ(A) = 2πk deg(g).

**Problem.** On a closed oriented three-manifold the phase is invariant under changes of gauge at integer level. On the three-sphere, identified with SU(2), the identity map has degree one and multiplies the phase by −1 at level one-half.

**How the definition helps.** A gauge change multiplies the phase by exp(2πik deg(g)), which equals one for every integer level (our own calculation). The identity map of SU(2) has degree one, so level one-half gives the factor −1.

**nLab:** [level (Chern-Simons theory)](https://ncatlab.org/nlab/show/level+%28Chern-Simons+theory%29). It says: “only for certain discrete choices of the scale (a global prefactor) of the Lagrangian.”

**Wikipedia:** [Chern–Simons theory](https://en.wikipedia.org/wiki/Chern%E2%80%93Simons_theory). It says: “The action is gauge dependent, however the partition function of the quantum theory is well-defined when the level is an integer”

**Sources:**

- [Edward Witten, Quantum field theory and the Jones polynomial (1989)](https://doi.org/10.1007/BF01217730)

### Surface integration gives Chern–Simons curvature

**Remember:** Integrate the universal curvature to get the curvature of the line.

*True by definition.* MSC 81T45 (Topological field theories in quantum mechanics), 81T13. arXiv hep-th, math-ph. Level 3: graduate.

**Definition.** Fix a compact simply connected simple gauge group and a nonzero integral level, with its normalized invariant inner product. The Chern–Simons line over connections on a closed oriented surface integrates the universal degree-four class over the surface. That class has curvature given by pairing two curvature forms.

**Problem.** The normalized curvature of the Chern–Simons line is the symplectic form on the space of surface connections. On two variations it integrates their wedge product paired by the chosen inner product, with the level normalization.

**How the definition helps.** Integration over the surface takes the universal curvature to the curvature of the line, and the part with two surface directions pairs two variations of the connection. In our own derivation this gives the wedge pairing, which is closed and nondegenerate. Identifying the integrated class with the line defined by the action takes a separate comparison.

**Paper or page:** [Lie groups and Chern-Simons Theory](https://arxiv.org/abs/2207.11062v1). It says: “the Chern-Simons action defines a unitary connection B on the Hermitian line bundle ℒQ → 𝒜Q”

**Sources:**

- [Daniel S. Freed, Classical Chern–Simons theory, 1](https://doi.org/10.1006/aima.1995.1039)

### Unitary conjugation preserves spectral actions

**Remember:** The action is a trace, and traces ignore change of basis.

*True by definition.* MSC 81T75 (Noncommutative geometry methods in quantum field theory), 58B34. arXiv math-ph, math.OA. Level 3: graduate.

**Definition.** The bosonic spectral action of a self-adjoint Dirac operator D at scale Λ &gt; 0 is the trace Tr f(D/Λ) of a function of D. Here f is a bounded Borel function for which f(D/Λ) is trace class, that is, its singular values have finite sum.

**Problem.** Unitary conjugacy of two Dirac operators implies equality of their bosonic spectral actions at each scale where the trace exists.

**How the definition helps.** Applying f commutes with unitary conjugation, so f(UDU\*/Λ) = U f(D/Λ) U\*, and the trace does not change under conjugation (our own argument). Comparing this action with local curvature formulas is the separate work of the asymptotic expansion of the trace.

**nLab:** [spectral action](https://ncatlab.org/nlab/show/spectral+action). It says: “It is essentially a regularized heat kernel expansion of the Dirac operator-like operator in the spectral triple.”

**Sources:**

- [Chamseddine and Connes, The Spectral Action Principle](https://doi.org/10.1007/s002200050126)

### Braids allow arbitrary exchange phases

**Remember:** A double exchange need not undo a phase.

*Makes the theorem clean to state or prove.* MSC 81V27 (Anyons). arXiv quant-ph, hep-th. Level 3: graduate.

**Definition.** A braid is a motion of indistinguishable particles in the plane, up to deformation without collisions and with fixed endpoints. A scalar exchange rule gives each braid a unit complex number and multiplies these numbers when motions follow one another. Unlike a permutation, a braid remembers the direction of each exchange, so an exchange done twice is not undone.

**Problem.** For two or more particles in the plane, every unit complex number gives a consistent scalar exchange phase. A phase descends to a permutation rule only if it is +1 or −1.

**How the definition helps.** A double exchange is not the trivial braid, so the phase z of one basic counterclockwise exchange is free (our own construction). Both sides of every braid relation get the same phase, and the configuration-space braid group theorem identifies these rules with planar exchange rules. A permutation exchange squares to the identity, so descent requires z² = 1.

**nLab:** [braid group statistics](https://ncatlab.org/nlab/show/braid+group+statistics). It says: “which allows one to regard any linear representation of the symmetric group also as a particular braid group representation.”

**Sources:**

- [Frank Wilczek, Quantum Mechanics of Fractional-Spin Particles (1982)](https://doi.org/10.1103/PhysRevLett.49.957)

### Boson Fock spaces factor

**Remember:** One-particle direct sums become many-particle tensor products.

*True by definition. Confidence: medium.* MSC 81V73 (Bosonic systems in quantum theory). arXiv math-ph, quant-ph. Level 3: graduate.

**Definition.** The bosonic Fock space of a one-particle Hilbert space is the Hilbert direct sum of its symmetric tensor powers, including degree zero. For an orthonormal basis of the one-particle space, it has an orthonormal basis of occupation vectors, which record how many particles occupy each basis state.

**Problem.** The bosonic Fock space of a direct sum of two one-particle spaces is naturally unitarily isomorphic to the tensor product of their Fock spaces.

**How the definition helps.** An occupation vector for the union of two orthonormal bases is a pair of occupation vectors, one per summand (our own proof). So matching basis vectors gives a unitary onto the tensor product. Its inverse takes the normalized symmetrized product of the factors, which does not depend on the bases, so the map is natural.

**nLab:** [Fock space](https://ncatlab.org/nlab/show/Fock+space). It says: “In physics the symmetric tensor algebra on a space of quantum states of some quantum mechanical system is called its bosonic Fock space.”

**Sources:** none listed. No primary source with a working link was found.

### Inside the Bohr topos, Gleason's theorem says quantum states are classical states

**Remember:** Linear on each commuting piece is linear inside the topos.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81P10 (Logical foundations of quantum mechanics; quantum logic (quantum-theoretic aspects)), 18B25, 46L30. arXiv quant-ph, math.OA. Level 4: research.

**Definition.** The Bohr topos of a C\*-algebra A is the topos of covariant functors on its contexts, the unital commutative C\*-subalgebras, ordered by inclusion. Its internal commutative algebra gives each context itself, so its states are externally families of states on all contexts that agree under restriction.

**Problem.** Let A = B(H) for a separable Hilbert space H of dimension greater than 2. By Gleason’s theorem, the quantum states on A are exactly the states of its internal commutative algebra in the Bohr topos.

**How the definition helps.** Compatible context states form one assignment that is linear on each commutative subalgebra, hence a finitely additive probability on projections. In our own explanation, the generalized Gleason theorem extends this uniquely to a state on B(H), and spectral approximation shows that the extension agrees on each context. Conversely, every state restricts compatibly.

**nLab:** [Bohr topos](https://ncatlab.org/nlab/show/Bohr+topos). It says: “Hence we have the following direct topos-theoretic equivalent reformulation of Gleason's theorem.”

**Sources:**

- [Chris Heunen, Nicolaas P. Landsman, Bas Spitters, Bohrification of operator algebras and quantum logic, Synthese 186 (2012) 719–752, arXiv:0905.2275](https://arxiv.org/abs/0905.2275)
- [Andrew M. Gleason, Measures on the closed subspaces of a Hilbert space, Journal of Mathematics and Mechanics (Indiana Univ. Math. J.) 6 (1957) 885–893](http://www.iumj.indiana.edu/IUMJ/FULLTEXT/1957/6/56050)

### Kochen–Specker says the spectral presheaf has no global elements

**Remember:** A global element picks one compatible character in every context.

*Makes the theorem clean to state or prove.* MSC 81P10 (Logical foundations of quantum mechanics; quantum logic (quantum-theoretic aspects)), 18B25, 46L05. arXiv quant-ph, math.OA. Level 4: research.

**Definition.** The spectral presheaf of B(H) gives each unital commutative von Neumann subalgebra V its characters, the nonzero multiplicative linear maps V → ℂ. It restricts characters along inclusions, and a global element chooses one character on every V so that the choices agree under restriction.

**Problem.** For a Hilbert space H of dimension greater than 2, the spectral presheaf of B(H) has no global elements. This is the Kochen–Specker theorem: no assignment of values to all observables keeps the functional relations between commuting observables.

**How the definition helps.** A character assigns each observable in V a value and respects sums and products, so a global element is exactly a value assignment that respects commuting relations. This is a reformulation, and the combinatorial Kochen–Specker argument is still needed to prove that none exists.

**nLab:** [Kochen-Specker theorem](https://ncatlab.org/nlab/show/Kochen-Specker+theorem), [Bohr topos](https://ncatlab.org/nlab/show/Bohr+topos). It says: “it was observed that the Kochen-Specker theorem is equivalent to the statement that the spectral presheaf has no global elements”

**Sources:**

- [C. J. Isham, J. Butterfield, A topos perspective on the Kochen-Specker theorem: I. Quantum states as generalized valuations, International Journal of Theoretical Physics 37 (1998) 2669–2733; arXiv:quant-ph/9803055](https://arxiv.org/abs/quant-ph/9803055)
- [Simon Kochen, Ernst Specker, The problem of hidden variables in quantum mechanics, Journal of Mathematics and Mechanics 17 (1967) 59–87](https://doi.org/10.1512/iumj.1968.17.17004)

### Conditional min-entropy as guessing probability cannot drop when the evidence is processed

**Remember:** Spoiling the evidence cannot improve the best guess.

*True by definition. Confidence: medium.* MSC 81P17 (Quantum entropies), 81P47. arXiv quant-ph, cs.IT. Level 4: research.

**Definition.** Take a finite ensemble in which label x has probability pₓ and system B is then in state ρₓ. The conditional min-entropy Hₘᵢₙ(X\|B) = −log₂ max ∑ₓ pₓ tr(Mₓρₓ) is minus log₂ of the best chance of guessing x by measuring B. The maximum ranges over all families of positive operators Mₓ on B summing to the identity.

**Problem.** A quantum channel applied to the guessing system cannot lower the label's conditional min-entropy.

**How the definition helps.** A measurement after the channel, pulled back through the channel, is a measurement before it, so the best guess cannot improve (our own argument). The source’s theorem of König, Renner and Schaffner shows that this guessing form agrees with the matrix definition.

**Wikipedia:** [Min-entropy](https://en.wikipedia.org/wiki/Min-entropy). It says: “when using an optimal measurement strategy”

**Sources:**

- [Robert König, Renato Renner and Christian Schaffner, The Operational Meaning of Min- and Max-Entropy (2009)](https://doi.org/10.1109/TIT.2009.2025545)

### A graph test for independence that works in cyclic quantum causal models

**Remember:** Break cycles, then test separation while conditioning on every postselection node.

*Makes the theorem clean to state or prove.* MSC 81P45 (Quantum information, communication, networks (quantum-theoretic aspects)), 62H22. arXiv quant-ph, cs.AI. Level 4: research.

**Definition.** Choose edges whose removal breaks all directed cycles. Replace each chosen edge u → v by a fresh source feeding v and a postselection node receiving inputs from u and that source. X and Y are p-separated given Z if some such expansion d-separates them given Z and all postselection nodes.

**Problem.** For the finite-dimensional causal models in the paper, p-separation characterizes the conditional independences forced by the graph.

**How the definition helps.** In our own explanation, including the success events in the conditioning set lets ordinary d-separation account for selection. The paper’s soundness and completeness theorem identifies this graph test with conditional independence in every compatible model.

**Paper or page:** [Cyclic quantum causal modelling with a graph separation theorem](https://arxiv.org/abs/2502.04168v2). It says: “We address these challenges by introducing a robust probability rule and a novel graph-separation property, p-separation, which we prove to be sound and complete for all such models.”

**Sources:**

- [Carla Ferradini, Victor Gitton, V. Vilasini, Cyclic quantum causal modelling with a graph separation theorem, arXiv:2502.04168v2 (2025)](https://arxiv.org/abs/2502.04168v2)

### Keeping the prior state makes the Petz recovery map compose correctly

**Remember:** Keep the prior with the channel to compose inferences backwards.

*Makes the theorem clean to state or prove.* MSC 81P45 (Quantum information, communication, networks (quantum-theoretic aspects)), 18A22. arXiv quant-ph, math.CT. Level 4: research.

**Definition.** Objects are finite-dimensional systems with a faithful prior state, and arrows from ρ to σ are quantum channels Φ with Φ(ρ) = σ. A retrodiction functor gives each arrow a reverse arrow from σ to ρ, preserving identities and reversing composition.

**Problem.** In the paper's category of quantum channels paired with states, the original Petz recovery map defines a retrodiction functor. Averaged rotated Petz maps, including the universal recovery map, do not respect composition.

**How the definition helps.** Each arrow carries its states, so the middle state σ is both the first channel’s output and the second channel’s prior. In our own explanation, the Petz map X ↦ ρ<sup>(1/2)</sup> Φ\*(σ<sup>(−1/2)</sup> X σ<sup>(−1/2)</sup>) ρ<sup>(1/2)</sup> then composes correctly, because the square roots of σ cancel. The paper’s functoriality result verifies this and shows that averaged rotated Petz maps can violate composition.

**Paper or page:** [Axioms for retrodiction: achieving time-reversal symmetry with a prior](https://arxiv.org/abs/2210.13531v2). It says: “such works defined time-reversal symmetry on the category of quantum channels alone, whereas we define it on the category of quantum channels and quantum states.”

**Sources:**

- [Arthur J. Parzygnat, Francesco Buscemi, Axioms for retrodiction: achieving time-reversal symmetry with a prior, arXiv:2210.13531v2 (2023), Quantum 7, 1013 (2023)](https://arxiv.org/abs/2210.13531v2)

### Metaplectic generators preserve oscillator levels

**Remember:** Commuting symmetries preserve each energy level.

*True by definition.* MSC 81R05 (Finite-dimensional groups and algebras motivated by physics and their representations), 81Q05. arXiv math-ph. Level 4: research.

**Definition.** Let X lie in the unitary Lie algebra, the symplectic generators that commute with the isotropic oscillator flow, a scalar rotation of phase space. Lift t ↦ exp(tX) to the metaplectic group from the identity; the quantum generator of X is the self-adjoint generator of this unitary group on oscillator wavefunctions.

**Problem.** The quantum generator for an element of the unitary Lie algebra preserves every eigenspace of the isotropic harmonic oscillator.

**How the definition helps.** Lifts of commuting flows commute, because their commutator moves continuously in the discrete covering kernel and starts at the identity (our own proof). So the lifted group preserves each oscillator energy space. Each such space is finite-dimensional, and differentiating there gives the claim.

**Paper or page:** [Explicit Spectral Analysis for Operators Representing the unitary group 𝕌(d) and its Lie algebra 𝔲(d) through the Metaplectic Representation and Weyl Quantization](https://arxiv.org/abs/2412.18728v2). It says: “is essentially selfadjoint and it strongly commutes with H₀.”

**Sources:**

- [Explicit Spectral Analysis for Operators Representing the unitary group 𝕌(d) and its Lie algebra 𝔲(d) through the Metaplectic Representation and Weyl Quantization](https://arxiv.org/abs/2412.18728v2)

### Monomials give metaplectic eigenvalues

**Remember:** A monomial multiplies the eigenvalues of its factors.

*True by definition.* MSC 81R05 (Finite-dimensional groups and algebras motivated by physics and their representations), 81Q10. arXiv math-ph. Level 4: research.

**Definition.** The Bargmann transform turns oscillator wavefunctions into holomorphic functions of z with a Gaussian norm, where the monomials form an orthogonal basis. A unitary matrix g acts by substituting g⁻¹z for z and multiplying by an inverse square root of det g. The two square roots give the two metaplectic lifts of g.

**Problem.** The eigenvalues of the lifted action of g are the chosen determinant factor times products of nonnegative powers of the complex conjugates of the eigenvalues of g.

**How the definition helps.** After a unitary diagonalization of g, inverse substitution multiplies each monomial by one conjugate eigenvalue per variable factor (our own proof). The determinant gives a common scalar, and the monomials form an orthogonal basis, so these are all the eigenvalues. The Bargmann transform carries this back to the operator on wavefunctions.

**Paper or page:** [Explicit Spectral Analysis for Operators Representing the unitary group 𝕌(d) and its Lie algebra 𝔲(d) through the Metaplectic Representation and Weyl Quantization](https://arxiv.org/abs/2412.18728v2). It says: “Then, the point spectrum of μ(g) is given by”

**Sources:**

- [Explicit Spectral Analysis for Operators Representing the unitary group 𝕌(d) and its Lie algebra 𝔲(d) through the Metaplectic Representation and Weyl Quantization](https://arxiv.org/abs/2412.18728v2)

### Biunitary averaging preserves trace

**Remember:** The second unitary identity is the one the trace needs.

*Rules out counterexamples.* MSC 81R50 (Quantum groups and related algebraic methods applied to problems in quantum theory), 81R15. arXiv math-ph, quant-ph. Level 4: research.

**Definition.** A unitary matrix U = (Uᵢⱼ) with operator entries on a finite-dimensional space K is biunitary if the matrix of entrywise adjoints (Uᵢⱼ\*) is also unitary. For a state φ on the matrix index, the averaged map sends each x on K to (φ ⊗ id)(U(I ⊗ x)U\*).

**Problem.** With both unitarity conditions, the averaged map preserves the ordinary trace on K. Without the second condition, swapping two equal-dimensional factors gives x ↦ φ(x)I, where φ is the averaging state.

**How the definition helps.** Taking the trace on K moves factors cyclically and produces sums of entry products in reversed order, which only the second unitarity condition controls (our own proof). That condition reduces the partial trace to the identity matrix times the trace of x. In our own swap example, a state concentrated on one basis vector fails to preserve the trace in dimension two.

**Paper or page:** [Quantum expanders and property (T) discrete quantum groups](https://arxiv.org/abs/2502.01974v1). It says: “If u is a bi-unitary (e.g. if 𝐆 is of Kac type ⇔ Ĝ is unimodular), then Φ is trace-preserving.”

**Sources:**

- [Quantum expanders and property (T) discrete quantum groups](https://arxiv.org/abs/2502.01974v1)

### Canonical split entropy respects symmetry

**Remember:** The vacuum picks a factor that moves with the inclusion.

*True by definition. Confidence: medium.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** Let N ⊂ M be a split inclusion of factors, with a vector Ω cyclic and separating for N, M and A = N ∨ M′. The canonical intermediate type I factor is F = N ∨ JNJ, where J is the modular conjugation of A for Ω. So F is built from N, M and Ω alone.

**Problem.** Let D be the density matrix of the state of Ω restricted to F. A unitary carrying Ω, N and M to another such triple preserves the entropy −Tr(D log D), including infinite values.

**How the definition helps.** Since F is built from N, M and Ω alone, a unitary carrying this triple to another carries F to its counterpart (our own proof). The restricted density matrices then have identical eigenvalues and multiplicities. To see that J moves along, conjugate the closed map xΩ ↦ x\*Ω and use uniqueness of polar decomposition.

**Paper or page:** [Modular Nuclearity and Entanglement measures](https://arxiv.org/abs/2110.05823v3). It says: “the canonical intermediate type I factors corresponding to the inclusions”

**Sources:**

- [Sergio Doplicher and Roberto Longo, Standard and split inclusions of von Neumann algebras](https://doi.org/10.1007/BF01388641)

### Composition makes sector fusion associative

**Remember:** Charges compose once they act on one algebra.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** A localized charge is a unital \*-endomorphism of the observable algebra that fixes every observable spacelike separated from some double cone. It is transportable if every double cone has an equivalent charge localized there. Fusion of charges is composition of these maps of one algebra to itself.

**Problem.** On a Haag-dual Minkowski net, fusion of localized, transportable charge endomorphisms is strictly associative. Haag duality means each double-cone algebra contains every bounded operator commuting with its spacelike exterior.

**How the definition helps.** Composition of maps is strictly associative, so both groupings of three charges give the same endomorphism. Representations on separate Hilbert spaces cannot in general be composed (our own comparison). The Doplicher–Haag–Roberts theorem realizes admissible representations as these endomorphisms under Haag duality.

**nLab:** [DHR category](https://ncatlab.org/nlab/show/DHR+category). It says: “left and right unitor and the associator are the identities”

**Sources:**

- [Sergio Doplicher, Rudolf Haag and John E. Roberts, Local observables and particle statistics I](https://doi.org/10.1007/BF01877742)

### Cyclic vacua remove invisible states

**Remember:** A dense set of vacuum descendants leaves no room for an unseen sector.

*Rules out counterexamples.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, hep-th. Level 4: research.

**Definition.** The vacuum is cyclic if the vectors obtained by applying products of smeared fields, fields averaged against smooth test functions, to it span a dense subspace. Vacuum correlations, the vacuum expectations of such products, then give the inner products of a dense set of vectors.

**Problem.** Within the Wightman axioms, all vacuum correlation functions together determine the theory up to a unitary change of Hilbert space.

**How the definition helps.** Matching vectors built from identical field products preserves these inner products, so it gives a unitary between the dense spans that respects the fields (our own proof). Our own counterexample adds an orthogonal positive-energy particle space with no invariant vector, on which every field vanishes. Vacuum correlations cannot detect this space.

**nLab:** [Wightman axioms](https://ncatlab.org/nlab/show/Wightman+axioms). It says: “and all such Wightman theories are then unitarily equivalent.”

**Sources:**

- [Arthur S. Wightman, Quantum Field Theory in Terms of Vacuum Expectation Values (1956)](https://doi.org/10.1103/PhysRev.101.860)

### Disjoint unions make observables commute

**Remember:** Separate spacetime components land in separate tensor factors.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** A symmetric monoidal theory assigns unital algebras to spacetimes and unital algebra maps to allowed embeddings, preserving identities and composition. It identifies A(M ⊔ N) with A(M) ⊗ A(N), compatibly with embeddings, so the two components enter as a ⊗ 1 and 1 ⊗ b, which commute.

**Problem.** If two spacetime embeddings combine to an allowed embedding of their disjoint union, their observable images commute in the target algebra.

**How the definition helps.** Both embeddings factor through the embedding of the disjoint union, where their images a ⊗ 1 and 1 ⊗ b commute (our own proof). The algebra map to the target preserves products, so the images still commute.

**nLab:** [causally local net of observables](https://ncatlab.org/nlab/show/causally+local+net+of+observables). It says: “A local net is Einstein local precisely if it is a monoidal functor”

**Sources:** none listed. No primary source with a working link was found.

### Fixed vectors describe standard real subspaces

**Remember:** Every vector in the domain splits into two fixed parts.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras), 81R15. arXiv math-ph. Level 4: research.

**Definition.** A standard real subspace K of a complex Hilbert space is a closed real subspace with K ∩ iK = {0} and K + iK dense. The matching object is a closed, densely defined conjugate-linear map S that preserves its domain and satisfies S²x = x there.

**Problem.** Taking fixed vectors gives a bijection from these maps S to standard real subspaces.

**How the definition helps.** Each domain vector splits uniquely as x = u + iv, with fixed vectors u = (x+Sx)/2 and v = (x−Sx)/(2i) (our own proof). So the fixed space K satisfies K + iK = domain and K ∩ iK = {0}, and closedness of S makes K closed. Conversely S(u+iv) = u−iv defines the inverse, and closedness of K makes its graph closed.

**Paper or page:** [The Bisognano-Wichmann property for non-unitary Wightman conformal field theories](https://arxiv.org/abs/2506.10625v1). It says: “induces a bijection between i) standard subspaces K of 𝒟, and 2) closed conjugate-linear involutions S”

**Sources:**

- [The Bisognano-Wichmann property for non-unitary Wightman conformal field theories](https://arxiv.org/abs/2506.10625v1)

### Gaussian states factor across symplectic sums

**Remember:** A sum of Gaussian exponents gives a product state.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** On a real symplectic space with form β, the Weyl algebra is generated by unitaries with W(h)W(k) = exp(−iβ(h,k))W(h+k). The centered Gaussian state with covariance α, a positive symmetric form with \|β(h,k)\|² ≤ α(h,h)α(k,k), is the unique state with expectation exp(−α(h,h)/2) on each W(h).

**Problem.** On a symplectic direct sum with block diagonal covariance, the Gaussian state is the product of the two component Gaussian states.

**How the definition helps.** For h and k in different summands, β(h,k) = 0 gives W(h+k) = W(h)W(k), and block diagonal α splits exp(−α(h+k,h+k)/2) into a product (our own proof). Linear extension and continuity give the product rule on the two algebras. The quoted existence theorem ensures that the formula defines a state.

**Paper or page:** [Modular structure of the Weyl algebra](https://arxiv.org/abs/2111.11266v5). It says: “There exists a unique state $\\varphi \_\\alpha $ on $C<sup>\*</sup>(H)$”

**Sources:**

- [Roberto Longo, Modular Structure of the Weyl Algebra](https://doi.org/10.1007/s00220-022-04344-7)

### Haag duality localizes charge intertwiners

**Remember:** An operator commuting with the outside belongs inside.

*Rules out counterexamples. Confidence: medium.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** A local net assigns algebras of bounded operators to spacetime regions, with commuting algebras for spacelike separated regions. Haag duality requires each double cone, the region between two timelike separated events, to have as algebra every bounded operator commuting with its spacelike exterior.

**Problem.** Suppose two observable algebra endomorphisms ρ and σ fix the spacelike exterior of the same double cone. Under Haag duality, every bounded T satisfying Tρ(a) = σ(a)T for all observables a belongs to the cone algebra.

**How the definition helps.** If ρ and σ fix every exterior observable a, then Tρ(a) = σ(a)T reads Ta = aT (our own proof). So T commutes with the exterior, and Haag duality puts T in the cone algebra. Our own counterexample assigns only scalars to every region on ℂ², where every matrix intertwines the identity with itself.

**nLab:** [DHR superselection theory](https://ncatlab.org/nlab/show/DHR+superselection+theory). It says: “Conversely, under the assumption of Haag duality every DHR admissible representation ρ comes from an endomorphism this way.”

**Sources:**

- [Sergio Doplicher, Rudolf Haag and John E. Roberts, Local observables and particle statistics I](https://doi.org/10.1007/BF01877742)

### Haag duality localizes purification changes

**Remember:** Equal expectations on one side allow a change of vector on the other.

*Rules out counterexamples.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, quant-ph. Level 4: research.

**Definition.** Two von Neumann algebras on one Hilbert space satisfy Haag duality when each is exactly the set of bounded operators commuting with the other. Here a von Neumann algebra is a weakly closed unital \*-algebra of bounded operators.

**Problem.** Suppose two unit vectors give the same expectations on the first algebra. Then a partial isometry in the second algebra, an operator that preserves lengths off its kernel, carries one vector to the other.

**How the definition helps.** Equal expectations make Aψ ↦ Aφ, for A in the first algebra, an isometry between the closed spans (our own proof). Extended by zero, it commutes with the first algebra, so Haag duality places it in the second. In our own counterexample, the second algebra is only scalars, which cannot carry a⊗b to a⊗b′.

**Paper or page:** [Uniqueness of purifications is equivalent to Haag duality](https://arxiv.org/abs/2509.12911v1). It says: “has the Uhlmann property if and only if Haag duality holds.”

**Sources:**

- [Uniqueness of purifications is equivalent to Haag duality](https://arxiv.org/abs/2509.12911v1)

### Microcausal observables make the Wick algebra well defined

**Remember:** Forbid the directions in which Hadamard singularities would collide.

*Makes the theorem clean to state or prove.* MSC 81T05 (Axiomatic quantum field theory; operator algebras), 81T20, 46F10. arXiv math-ph, math.AP. Level 4: research.

**Definition.** A microcausal polynomial field observable has compactly supported distributional coefficients on each spacetime power Xⁿ. The wave front set of each coefficient, its singular directions, contains no tuple whose components all lie in the closed future cone. It also contains none with all components in the closed past cone, zero included.

**Problem.** On microcausal polynomial observables, the star product built from a Hadamard two-point function is well defined and associative. This gives the Wick algebra of a free quantum field.

**How the definition helps.** The exclusions ensure that Hadamard contractions satisfy Hörmander’s criterion for multiplying distributions. In our own explanation, associativity follows by expanding either bracketing into the same contractions among three polynomials. Polynomial degree makes each expansion finite.

**nLab:** [microcausal polynomial observable](https://ncatlab.org/nlab/show/microcausal+polynomial+observable), [Weyl relation](https://ncatlab.org/nlab/show/Weyl+relation). It says: “The condition on the wave front is such that the product of distributions with a Hadamard distribution is well defined, so that the coresponding Moyal star product is well defined, which gives the Wick algebra.”

**Sources:**

- [Romeo Brunetti, Klaus Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds, Commun. Math. Phys. 208 (2000) 623–661, arXiv:math-ph/9903028](https://arxiv.org/abs/math-ph/9903028)
- [Michael Dütsch, Klaus Fredenhagen, Algebraic Quantum Field Theory, Perturbation Theory, and the Loop Expansion, Commun. Math. Phys. 219 (2001) 5–30, arXiv:hep-th/0001129](https://arxiv.org/abs/hep-th/0001129)

### One algebra collects net representations

**Remember:** Glue the interval algebras before representing them.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** The universal C\*-algebra of a circle net is generated by its interval algebras, subject only to their own relations and the inclusion relations. Concretely, give each polynomial in the generators the supremum of its norms in all compatible Hilbert space representations, quotient by seminorm zero and complete.

**Problem.** Every compatible family of interval representations on one Hilbert space extends uniquely to a representation of the universal algebra.

**How the definition helps.** Each compatible family represents the generators and is contractive for the supremum seminorm, so it factors through the quotient and extends continuously (our own proof). The triangle inequality bounds each polynomial by a sum of products of generator norms, so the supremum is finite. Generator polynomials are dense, so the extension is unique.

**Paper or page:** [Rotational KMS states and type I conformal nets](https://arxiv.org/abs/1608.08903v2). It says: “of the net 𝒜, there is a representation ρ of the algebra C\*(𝒜) constructed above”

**Sources:**

- [Roberto Longo and Yoh Tanimoto, Rotational KMS States and Type I Conformal Nets](https://doi.org/10.1007/s00220-017-2969-8)

### Perturbative AQFT uses power series and local nets, not a global C\*-algebra

**Remember:** Allow formal power series, and keep only the local algebras.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T05 (Axiomatic quantum field theory; operator algebras), 81T15, 81T20. arXiv math-ph, hep-th. Level 4: research.

**Definition.** A perturbative local net assigns each causal region a unital \*-algebra over formal power series in ℏ and the coupling. Inclusions induce compatible unital embeddings, and observables from spacelike separated subregions commute in any common region.

**Problem.** On globally hyperbolic curved spacetimes, including in four dimensions, Epstein–Glaser perturbation theory constructs causally local interacting nets of formal power series algebras. The local construction applies even in the presence of infrared divergences.

**How the definition helps.** Each bounded region needs only an interaction with a compactly supported cutoff, so no global infrared limit is taken. Epstein–Glaser causal factorization and the algebraic adiabatic limit identify the local constructions for different suitable cutoffs.

**nLab:** [perturbative algebraic quantum field theory](https://ncatlab.org/nlab/show/perturbative+algebraic+quantum+field+theory). It says: “considering these local nets instead of their would-be colimiting global algebra serves to define the perturbation theory even in the presence of infrared divergences”

**Sources:**

- [Romeo Brunetti, Klaus Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds, Commun. Math. Phys. 208 (2000) 623–661, arXiv:math-ph/9903028](https://arxiv.org/abs/math-ph/9903028)

### Strong additivity repairs punctured intervals

**Remember:** With strong additivity, a deleted point hides no observables.

*True by definition. Confidence: medium.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** A circle net assigns a von Neumann algebra of bounded operators to each proper open interval, respecting inclusions. It is strongly additive if removing any interior point from an interval leaves two intervals whose algebras generate the original algebra, with weak limits.

**Problem.** Fix a point p on the circle. For a strongly additive net, the interval algebras avoiding p determine every interval algebra on the same Hilbert space.

**How the definition helps.** An interval containing p splits at p into two intervals avoiding p, so strong additivity generates its algebra from two known algebras (our own deduction). Ordinary additivity would not suffice, since the two pieces do not cover p. The quoted reconstruction theorem starts from different data and needs more work.

**Paper or page:** [Ground state representations of some non-rational conformal nets](https://arxiv.org/abs/1807.11723v2). It says: “Isomorphism classes of strongly additive Möbius covariant nets”

**Sources:** none listed. No primary source with a working link was found.

### Symplectic complements preserve standardness

**Remember:** The symplectic complement swaps density and zero intersection.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** A closed real subspace K of a complex Hilbert space is standard if K + iK is dense and K ∩ iK = {0}. Its symplectic complement K′ is the set of vectors whose inner products with K have zero imaginary part. So K′ is the real orthogonal complement of iK.

**Problem.** In a complex Hilbert space, the symplectic complement of every standard closed real subspace is standard.

**How the definition helps.** In our own calculation, K′ ∩ iK′ is the real orthogonal complement of K + iK, so density of K + iK makes the intersection zero. The same identity for K′, with K′′ = K, shows that K′ + iK′ has zero real orthogonal complement, so it is dense.

**Paper or page:** [The Bisognano-Wichmann property for non-unitary Wightman conformal field theories](https://arxiv.org/abs/2506.10625v1). It says: “If K is cyclic then K′ is separating, and if K′ is cyclic then K is separating.”

**Sources:** none listed. No primary source with a working link was found.

### Symplectic kernels detect central observables

**Remember:** A symplectic overlap gives central Weyl operators.

*Makes the theorem clean to state or prove.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** For a closed real subspace H, R(H) is the von Neumann algebra on symmetric Fock space generated by the Weyl unitaries W(h), h ∈ H. These satisfy W(h)W(k) = exp(−i Im ⟨h,k⟩)W(h+k). So W(k) commutes with all of them exactly when k lies in H′, the k with Im ⟨k,h⟩ = 0 for all h ∈ H.

**Problem.** The center of R(H) consists only of scalars exactly when H ∩ H′ = {0}.

**How the definition helps.** Araki’s theorems turn commutants into symplectic complements and intersections of algebras into intersections of subspaces, so the center is R(H ∩ H′) (our own deduction). A nonzero vector there gives a nonscalar Weyl unitary, while the zero subspace generates only scalars.

**Paper or page:** [Modular structure of the Weyl algebra](https://arxiv.org/abs/2111.11266v5). It says: “ker β = H ∩ H′”

**Sources:**

- [Huzihiro Araki, Von Neumann Algebras of Local Observables for Free Scalar Field](https://doi.org/10.1063/1.1704063)

### Wedge intersections preserve local commutation

**Remember:** Use opposite wedges to separate bounded algebras.

*True by definition.* MSC 81T05 (Axiomatic quantum field theory; operator algebras). arXiv math-ph, math.OA. Level 4: research.

**Definition.** A Minkowski wedge is a Poincaré image of the region x₁ &gt; \|t\|, and its opposite wedge is its spacelike complement. Opposite wedges get von Neumann algebras that are each other’s commutants. A bounded region gets the intersection of the algebras of all wedges containing it.

**Problem.** If two bounded regions lie in opposite wedges, their intersection-defined algebras commute.

**How the definition helps.** Each bounded-region algebra lies in the algebra of the wedge that contains the region, and opposite wedge algebras commute (our own deduction). The real work is wedge duality itself, obtained for example from the Bisognano–Wichmann theorem for suitable vacuum fields. Showing that the intersections contain more than scalars is a separate problem (our own point).

**nLab:** [Bisognano-Wichmann theorem](https://ncatlab.org/nlab/show/Bisognano-Wichmann+theorem). It says: “the commutant of the algebra associated to a wedge is the algebra associated to the causal complement of the wedge.”

**Sources:**

- [Joseph J. Bisognano and Eyvind H. Wichmann, On the duality condition for quantum fields](https://doi.org/10.1063/1.522898)

### Double poles fail reflection positivity

**Remember:** A positive Fourier multiplier can still give a negative reflected test.

*Rules out counterexamples.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 4: research.

**Definition.** A centered stationary real Gaussian field on the time line, with covariance kernel K, is reflection positive if the reflected kernel is also positive. Precisely, K(s + t) for s, t &gt; 0 must give a nonnegative quadratic form on real smooth tests supported at positive times.

**Problem.** For m &gt; 0, the covariance with Fourier multiplier 1/(p² + m²)² is positive as an ordinary covariance but fails reflection positivity.

**How the definition helps.** Fourier inversion gives K(t) as a positive multiple of (1+mt)exp(−mt) for t &gt; 0 (our own calculation). For distinct positive s, t, the reflected two-point determinant has the sign of (1+2ms)(1+2mt)−(1+ms+mt)² = −m²(s−t)², so tests concentrated near s and t give a negative form. The multiplier itself is nonnegative, so ordinary covariance positivity holds.

**nLab:** [Osterwalder-Schrader theorem](https://ncatlab.org/nlab/show/Osterwalder-Schrader+theorem). It says: “Let θ : (x, t) ↦ (x, −t) be the time reflection. Then the content of the axiom is: 0 ≤ ⟨θA, A⟩\[L₂\].”

**Sources:**

- [Arici, Becker, Ripken, Saueressig and van Suijlekom, Reflection positivity in higher derivative scalar theories (2018)](https://doi.org/10.1063/1.5027231)

### Mirror parity identifies reflected covariance

**Remember:** Odd mirror images vanish on the mirror; even ones have zero slope.

*Makes the theorem clean to state or prove.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 4: research.

**Definition.** Let θ be a distance-preserving reflection of a complete connected Riemannian manifold that swaps two halves and fixes their smooth common boundary pointwise. Let C(x,y) be the kernel of (−Δ + m²)⁻¹ with m &gt; 0. Since θ commutes with Δ, the even sum C(x,y) + C(θx,y) and the odd difference C(x,y) − C(θx,y) have the same interior source as C.

**Problem.** For interior points x ≠ y in one half, the Neumann inverse kernel (zero normal derivative) minus the Dirichlet inverse kernel (zero boundary value) equals 2C(θx,y).

**How the definition helps.** The even sum has zero normal derivative at the boundary, and the odd difference vanishes there (our own derivation). By uniqueness they are the Neumann and Dirichlet kernels. Subtracting leaves 2C(θx,y).

**nLab:** [Osterwalder-Schrader theorem](https://ncatlab.org/nlab/show/Osterwalder-Schrader+theorem). It says: “Let θ : (x, t) ↦ (x, −t) be the time reflection.”

**Sources:**

- [Jaffe and Ritter, Reflection Positivity and Monotonicity (2008), Lemma 3](https://www.arthurjaffe.com/Assets/pdf/Reflection_Positivity.pdf)

### Reflection positivity gives nonnegative norms

**Remember:** Reflect one argument before asking whether the pairing can be a norm.

*Rules out counterexamples.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** For positive-time observables F, G, the reflected pairing is B(F,G) = 𝔼\[conj(F ∘ θ)G\], where θ reverses time. Reflection positivity requires B(F,F) ≥ 0 for every F in the complex vector space of tests, so B is a positive semidefinite inner product.

**Problem.** With reflection positivity, the reflected pairing defines a Hilbert space after quotienting its zero-norm vectors and completing.

**How the definition helps.** By Cauchy–Schwarz, zero-norm tests are orthogonal to all tests, so quotienting by them gives an inner product and completion gives a Hilbert space (our own proof). Our own counterexample uses covariance cos(t−s), whose reflected diagonal cos(2t) equals −1 at t = π/2. Smooth tests concentrated there keep the negative sign.

**nLab:** [reflection positivity](https://ncatlab.org/nlab/show/reflection+positivity). It says: “In quantum field theory reflection positivity is the incarnation of unitarity under Wick rotation via a form of the Osterwalder-Schrader theorem.”

**Sources:**

- [Konrad Osterwalder and Robert Schrader, Axioms for Euclidean Green's functions (1973)](https://doi.org/10.1007/BF01645738)

### Wick squares change field masses

**Remember:** Change the mass in the precision and center the quadratic weight.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T08 (Constructive quantum field theory). arXiv math-ph. Level 4: research.

**Definition.** On the flat two-dimensional torus, μ(b) is the centered Gaussian law with covariance (−Δ+b)⁻¹, b &gt; 0. Changing b to a adds −(a − b)/2 times the integral of the squared field to the exponent. Q is the mean-square limit of that integral, truncated at frequency n and centered under μ(b), as n grows.

**Problem.** For a,b &gt; 0, the density of μ(a) relative to μ(b) is exp(−(a − b)Q/2) divided by its μ(b) mean.

**How the definition helps.** On finitely many modes, the density of μ(a) relative to μ(b) is the normalized exponential of −(a − b)/2 times the integral of the squared field. In our own extension, take p &gt; 1 with b + p(a − b) &gt; 0; Gaussian integration bounds the log p-th moments of the centered weights by C∑(λ+b)⁻². That sum is finite in two dimensions, so uniform integrability gives convergence in mean to the density.

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

**Definition.** Give a compact connected Lie group a bi-invariant metric, and put independent Haar-random elements on the edges of an oriented surface graph. Each disk face contributes the heat kernel at time equal to its area, evaluated on the ordered boundary product, with inverses for reversed edges. The density relative to product Haar probability is the product of these factors.

**Problem.** Split one disk face into two disks of positive areas by adding an edge between existing vertices. Integrating over the new edge gives exactly the original density on the old edges.

**How the definition helps.** Integrating over the new edge, which occurs once in each direction, convolves the two face kernels, and heat kernels convolve by adding times (our own calculation). The two areas sum to the old area, so the old face factor returns.

**nLab:** [heat kernel](https://ncatlab.org/nlab/show/heat+kernel). It says: “The heat kernel K for P is then the kernel of an integral operator representing the heat operator:”

**Sources:**

- [Thierry Lévy, Yang-Mills measure on compact surfaces](https://doi.org/10.1090/memo/0790)

### Torsion flux operators need not commute

**Remember:** Flat flux can still have a nontrivial commutator.

*Makes the theorem clean to state or prove.* MSC 81T13 (Yang-Mills and other gauge theories in quantum field theory). arXiv hep-th, math-ph. Level 4: research.

**Definition.** For a self-dual two-form field on a closed oriented spatial five-manifold M, flux shift operators Uₐ are labelled by degree-three differential cohomology classes a. For flat shifts a, b of odd order, Heisenberg quantization prescribes UₐUᵦUₐ⁻¹Uᵦ⁻¹ = exp(2πi∫<sub>M</sub> a∪b), with the integral in ℝ/ℤ, which sees torsion even at zero curvature.

**Problem.** On the product of the lens space L(3,1) and the two-torus, two flat flux shifts have commutator exp(±2πi/3).

**How the definition helps.** The commutator keeps the linking of finite-order classes that have zero curvature. In our own example, a and b multiply the degree-two lens-space generator by the two degree-one torus generators. Their pairing is the lens-space linking number ±⅓ times the torus intersection number one.

**nLab:** [uncertainty of fluxes](https://ncatlab.org/nlab/show/uncertainty+of+fluxes). It says: “this bracket becomes non-vanishing if torsion-components of the fluxes (through their enhancement to ordinary differential cohomology) are retained”

**Sources:**

- [Daniel S. Freed, Gregory W. Moore and Graeme Segal, Heisenberg groups and noncommutative fluxes](https://doi.org/10.1016/j.aop.2006.07.014)

### Action exponentials transport master equations

**Remember:** Transport the exponential with a map that respects the differential.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory), 81T70. arXiv hep-th, math-ph. Level 4: research.

**Definition.** Write the quantum master equation for an interaction I in exponential form DE = 0, with E = exp(I/ℏ) and D a linear differential with D² = 0. This equation is linear in E, and a change of pairing acts on E by a linear map R.

**Problem.** If the change replaces D by D′ and D′R = RD, the transformed exponential solves the new quantum master equation.

**How the definition helps.** Linearity makes the transport immediate: D′RE = RDE = 0 (our own proof). The work lies in proving D′R = RD for the actual change of pairing and recovering the transformed interaction.

**Paper or page:** [Quantization and Algebraic Index](https://arxiv.org/abs/2511.12875v1). It says: “Then Ĩ ∈ 𝒪(V)\[\[ℏ\]\] satisfies QME”

**Sources:**

- [Quantization and Algebraic Index](https://arxiv.org/abs/2511.12875v1)

### Causal perturbation theory makes causal factorization an axiom of the S-matrix

**Remember:** Interactions in separate regions give S-matrix factors that multiply in causal order.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** A perturbative S-matrix maps local interactions to formal series of observables. Its causal factorization axiom requires S(F+G) = S(F)S(G) whenever no point of supp F lies in the causal past of supp G.

**Problem.** Perturbative S-matrices satisfying these axioms exist, and each one factorizes over causally ordered regions.

**How the definition helps.** The axiom directly gives factorization for causally ordered interactions. The Epstein–Glaser existence theorem constructs perturbative S-matrices inductively by extending distributions across coincident points. This extension is the renormalization step.

**nLab:** [A first idea of quantum field theory -- Interacting quantum fields](https://ncatlab.org/nlab/show/A+first+idea+of+quantum+field+theory+--+Interacting+quantum+fields), [causal perturbation theory](https://ncatlab.org/nlab/show/causal+perturbation+theory), [S-matrix](https://ncatlab.org/nlab/show/S-matrix). It says: “the axioms of causal perturbation theory directly prescribe the desired factorization property, without insisting that it derives from an actual integration.”

**Sources:**

- [Henri Epstein, Vladimir Glaser, The role of locality in perturbation theory, Annales de l'Institut Henri Poincaré A 19 (1973) 211](https://www.numdam.org/item/AIHPA_1973__19_3_211_0/)

### Closed pole spaces preserve multiplication

**Remember:** The pole space must multiply before counterterms can multiply.

*Rules out counterexamples.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Split Laurent series into power series plus a complementary subspace closed under multiplication, and let P project onto that complement along the power series. Because both pieces are closed under multiplication, P satisfies P(x)P(y) = P(P(x)y + xP(y) − xy). A character assigns series to graphs and turns disjoint unions into products.

**Problem.** Take a character on a connected graded graph Hopf algebra, graded by loop number with only scalars in degree zero. Recursive subtraction using P gives a counterterm that preserves products.

**How the definition helps.** The product identity for P is exactly what the product step of the subtraction recursion needs (our own proof). Our own counterexample uses the complement spanned by z⁻¹+1 and the powers z⁻ᵏ for k ≥ 2, which is not closed under multiplication. A primitive graph valued at z⁻¹ has counterterm −(z⁻¹+1), whose square lies outside that complement, while the counterterm of the disjoint square lies inside.

**nLab:** [Rota-Baxter algebra](https://ncatlab.org/nlab/show/Rota-Baxter+algebra), [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “P(x) P(y) = P(P(x) y) + P(x P(y)) + λ P(x y)”

**Sources:**

- [Alain Connes and Dirk Kreimer, Renormalization in Quantum Field Theory and the Riemann-Hilbert Problem I (2000)](https://doi.org/10.1007/s002200050779)

### Factorization separates subtraction from evaluation

**Remember:** Factor the whole character before setting the regulator to zero.

*Makes the theorem clean to state or prove.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** A minimal-subtraction factorization of a Laurent-series character φ of the connected graded Connes–Kreimer graph Hopf algebra is φ = C⁻¹ ⋆ R, with characters C and R. On positive degrees, C takes strict pole parts and R takes power series, so R can be evaluated at zero.

**Problem.** Each character has a unique such factorization. In minimal subtraction, which removes pole terms, evaluating R at zero gives the renormalized character.

**How the definition helps.** Since R has no poles, it can be evaluated at zero on every graph at once (our own words). The Connes–Kreimer theorem proves that both factors exist and preserve products, and its recursion for C recovers the usual subtraction of divergent subgraphs.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “then the Birkhoff decomposition always exists and is given by the formula”

**Sources:**

- [Alain Connes and Dirk Kreimer, Renormalization in Quantum Field Theory and the Riemann-Hilbert Problem I (2000)](https://doi.org/10.1007/s002200050779)

### Graph insertion gives a Lie bracket

**Remember:** Separate insertion sites make the defect symmetric in y and z.

*Makes the theorem clean to state or prove.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Use the Connes–Kreimer space of graphs that stay connected after cutting any one internal edge. There x ⊳ y sums over all insertions of y into x at sites with matching external edge types. It is right pre-Lie: the defect (x ⊳ y) ⊳ z − x ⊳ (y ⊳ z) is symmetric in y and z.

**Problem.** Graph insertion satisfies the right pre-Lie identity. Consequently the bracket \[x,y\] = x ⊳ y − y ⊳ x satisfies the Jacobi identity.

**How the definition helps.** Nested insertions cancel in the defect, leaving y and z at separate sites of x, so interchanging y and z pairs the terms (our own proof). The symmetry then cancels the cyclic sum of double brackets, which gives the Jacobi identity.

**nLab:** [pre-Lie algebra](https://ncatlab.org/nlab/show/pre-Lie+algebra), [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “It is a fun exercise to derive the Jacobi identity from equation \\eqref{identity}.”

**Sources:**

- [Alain Connes and Dirk Kreimer, Renormalization in Quantum Field Theory and the Riemann-Hilbert Problem I (2000)](https://doi.org/10.1007/s002200050779)

### Heat-kernel interval maps compose

**Remember:** Add the intervals and multiply their commuting contraction operators.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** For 0 &lt; a &lt; b, P(a,b) is Costello’s heat-kernel propagator integrated over times from a to b. D(a,b) contracts two field factors with it, with the usual factor ½. The effective interaction W(a,b,I) = ℏ log(exp(ℏD(a,b)) exp(I/ℏ)) applies the contraction to the exponential of I.

**Problem.** For 0 &lt; a &lt; b &lt; c, Costello’s formal interaction series satisfy W(b,c,W(a,b,I)) = W(a,c,I). The identity extends to a = 0 for his renormalized interactions.

**How the definition helps.** Integrals add over adjacent intervals, so D(a,c) = D(a,b) + D(b,c), and these commuting operators give exp(ℏD(a,c)) = exp(ℏD(b,c)) exp(ℏD(a,b)) (our own proof). Costello’s theorem constructs the renormalized limit and shows that evolution over the outer interval respects it.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “Γᴿ(P(0,T′), I) = Γ(P(T,T′), Γᴿ(P(0,T), I))”

**Sources:**

- [Kevin Costello, Renormalization and Effective Field Theory (2011)](https://doi.org/10.1090/surv/170)

### Hopf ideals preserve gauge identities

**Remember:** Subtract on the quotient and the identities stay zero.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** A graded Hopf ideal I of a connected graded graph Hopf algebra H is a graded ideal for which the coproduct, counit and antipode descend to H/I. So a character, a linear map preserving products and sending one to one, that kills I is a character of H/I.

**Problem.** If a Laurent-series character kills I, both factors in its minimal-subtraction factorization kill I. This applies to the Slavnov–Taylor relations expressing gauge symmetry when they generate such an ideal.

**How the definition helps.** Factor the induced character on H/I and compose both factors with the quotient map (our own proof). By uniqueness these are the factors on H, and they kill I. Van Suijlekom proves the Hopf ideal property for the gauge identities in his setting.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “the relations between amplitudes to be preserved under renormalization must define a Hopf ideal in the Hopf algebra of graphs.”

**Sources:**

- [Walter van Suijlekom, Renormalization of Gauge Fields using Hopf Algebras](https://doi.org/10.1007/978-3-7643-8736-5_8)

### Largest forest members recover recursion

**Remember:** Group a forest by its largest members to read the recursion.

*True by definition. Confidence: medium.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** In massive Euclidean momentum subtraction, fix a connected graph that stays connected after any single internal edge cut. A proper forest consists of proper superficially divergent subgraphs with that connectivity property, every pair nested or disjoint. T(γ) takes the Taylor polynomial at zero in the external momenta through the superficial degree of divergence of γ.

**Problem.** The recursively prepared integrand is the sum over proper forests, including the empty one, of the product of −T(γ) over the forest, applied innermost first. For an overall divergent graph G, applying 1 − T(G) then gives the renormalized integrand.

**How the definition helps.** Each nonempty forest splits uniquely into its maximal members, which are disjoint, and the forests inside them (our own proof). Summing over the inner forests before each outer subtraction gives exactly the recursive counterterms, and the empty forest gives the original integrand.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “for adding to a given amplitude in a certain recursive fashion further terms”

**Sources:**

- [Wolfhart Zimmermann, Convergence of Bogoliubov’s Method of Renormalization in Momentum Space (1969)](https://doi.org/10.1007/bf01645676)

### Nested contractions make convolution associative

**Remember:** Two successive contractions record one nested pair of admissible subgraphs.

*Makes the theorem clean to state or prove.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** The Connes–Kreimer coproduct sends G to the sum of γ ⊗ G/γ over admissible subgraphs γ, including the empty and full ones. A proper admissible γ is a disjoint union of superficially divergent one-particle-irreducible pieces with allowed residues, and G/γ contracts each piece to its residue. Convolution applies one linear rule to each tensor factor and multiplies in order.

**Problem.** This coproduct is coassociative. Consequently convolution is associative for rules valued in an associative algebra.

**How the definition helps.** Both orders of iterating the coproduct list the same nested pairs α ⊂ β of admissible subgraphs, each recording α, β/α and G/β (our own proof). This uses the graph theorem that admissible subgraphs of G/α correspond to admissible subgraphs of G containing α.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “there is secretly a natural Hopf algebra structure on the vector space whose basis consists of graphs”

**Sources:**

- [Alain Connes and Dirk Kreimer, Renormalization in Quantum Field Theory and the Riemann-Hilbert Problem I (2000)](https://doi.org/10.1007/s002200050779)

### Orthogonal variables preserve finite-part multiplication

**Remember:** Orthogonal variable spaces let finite parts multiply.

*Rules out counterexamples.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Fix an inner product on linear forms and consider meromorphic germs at zero with linear poles. A polar term divides a holomorphic numerator by positive powers of independent linear forms, with all numerator variables orthogonal to those forms. The finite part projects onto holomorphic germs along the span of polar terms and evaluates at zero.

**Problem.** This finite part preserves products of germs whose spaces of linear variables are orthogonal. No unital multiplicative map on all these germs can extend evaluation at zero.

**How the definition helps.** With orthogonal variables, every product involving a polar term is again polar, so only the two holomorphic parts reach the evaluation (our own proof). The decomposition theorem supplies the projection and its compatibility with orthogonal variables. In our own counterexample, x has finite part zero although x times 1/x equals one.

**Paper or page:** [Locality Galois groups of meromorphic germs in several variables](https://arxiv.org/abs/2301.02300v1). It says: “{\\mathcal{M}}\_{\\mathbb {K}}= {\\mathcal{M}}\_{\\mathbb {K}+}\\oplus {\\mathcal{M}}<sup>Q\_{\\mathbb</sup> {K}-}.”

**Sources:**

- [Li Guo, Sylvie Paycha and Bin Zhang, Locality Galois groups of meromorphic germs in several variables](https://arxiv.org/abs/2301.02300v1)

### Outer normalization fixes Birkhoff factors

**Remember:** Set the outer factor to one at infinity to fix constants.

*Rules out counterexamples.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** A normalized Birkhoff factorization of a loop Φ of graph characters on a circle writes Φ = C⁻¹ ⋆ R under convolution. As characters, R extends holomorphically over the closed inside and C over the closed outside, including infinity, where C must equal the identity character.

**Problem.** Whenever such a factorization exists, it is unique. Without normalization, multiplying both factors on the left by the same constant character preserves Φ.

**How the definition helps.** For another pair D, S, the ratios D ⋆ C⁻¹ = S ⋆ R⁻¹ glue on each graph to a holomorphic function on the sphere (our own proof). Such a function is constant, and at infinity it equals the identity character. So the two factorizations agree.

**nLab:** [Birkhoff decomposition](https://ncatlab.org/nlab/show/Birkhoff+decomposition), [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “a function of a matrix holomorphic on a neighborhood of an exterior of the disk including infinity and the circle itself.”

**Sources:**

- [Alain Connes and Dirk Kreimer, Renormalization in Quantum Field Theory and the Riemann-Hilbert Problem I (2000)](https://doi.org/10.1007/s002200050779)

### Scaled prescriptions give a cocycle

**Remember:** Compare prescriptions twice and the second change is conjugated by scaling.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Let S assign a formal scattering operator to each local interaction, one depending on fields and their derivatives at a point. Scaling spacetime by λ, with masses and inputs transformed to match, gives the prescription λ·S. Then Z(λ) is the unique local change of interaction with λ·S = S ∘ Z(λ).

**Problem.** Suppose positive scales act on the allowed prescriptions and their changes by conjugation. Then Z(λμ) = Z(λ) ∘ (λ·Z(μ)).

**How the definition helps.** Apply λ to μ·S = S ∘ Z(μ) and substitute λ·S = S ∘ Z(λ) (our own derivation). This gives (λμ)·S = S ∘ Z(λ) ∘ (λ·Z(μ)), so uniqueness gives the identity. The main renormalization theorem supplies existence and uniqueness of Z.

**nLab:** [Stückelberg-Petermann renormalization group](https://ncatlab.org/nlab/show/St%C3%BCckelberg-Petermann+renormalization+group). It says: “cocycle property of running coupling constants”

**Sources:**

- [Romeo Brunetti, Michael Dütsch and Klaus Fredenhagen, Perturbative Algebraic Quantum Field Theory and the Renormalization Groups (2009)](https://doi.org/10.4310/atmp.2009.v13.n5.a7)

### Singular complements fix counterterms

**Remember:** Counterterms must be purely singular, so no finite shift remains.

*Rules out counterexamples.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** In Costello’s heat-kernel scheme, a counterterm is a function of the cutoff ε, subtracted at each order before ε → 0. Among the allowed functions of ε, choose a linear complement to those with a finite limit at zero. Every counterterm must lie in this purely singular part.

**Problem.** Once lower orders are fixed, exactly one counterterm in the complement makes the next-order coefficient finite. Without this condition, adding any finite local term at that order keeps it finite.

**How the definition helps.** Two such counterterms differ by a function that has a finite limit and also lies in the complement, so they are equal (our own proof). Costello proves that the singular part at each order does come from a local counterterm. Without the condition, a constant shift of a local coupling gives our own example of the ambiguity.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “each counterterm is in the chosen $\\mathcal{A}<sub>\\gt 0</sub>$ as a function of $\\epsilon$;”

**Sources:**

- [Kevin Costello, Renormalization and Effective Field Theory (2011)](https://doi.org/10.1090/surv/170)

### Switching the interaction off far away avoids infrared divergences

**Remember:** Switch the coupling off far away; only near the region matters.

*Rules out counterexamples. Confidence: medium.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory), 81T05. arXiv math-ph. Level 4: research.

**Definition.** An adiabatic switching function g is a smooth compactly supported function on spacetime that multiplies the interaction density, so the interaction is switched off far away. For a bounded region, take g equal to 1 on a neighborhood of the region’s causal closure, so the interaction is fully on wherever the region can be influenced.

**Problem.** The interacting observables of a bounded region can be computed with any switching function g equal to 1 near the causal closure of that region. Changing g away from the region gives an isomorphic algebra, so no limit g → 1 is needed.

**How the definition helps.** Causal factorization shows that changing g away from the region acts by an isomorphism of the local algebras. Compact support avoids the infrared divergences that can block a global limit g → 1 (our own explanation). Brunetti and Fredenhagen use these isomorphisms to construct the algebraic adiabatic limit.

**nLab:** [causal perturbation theory](https://ncatlab.org/nlab/show/causal+perturbation+theory), [S-matrix](https://ncatlab.org/nlab/show/S-matrix), [A first idea of quantum field theory -- Interacting quantum fields](https://ncatlab.org/nlab/show/A+first+idea+of+quantum+field+theory+--+Interacting+quantum+fields). It says: “it was observed that in fact the algebra of observables on any bounded region may be computed with a g whose compact support contains the causal closure of that region.”

**Sources:**

- [V. A. Il'in, D. S. Slavnov, Algebras of observables in the S-matrix approach, Theoretical and Mathematical Physics 36 (1978) 578–585](https://doi.org/10.1007/BF01035870)
- [Romeo Brunetti, Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds, Communications in Mathematical Physics 208 (2000) 623–661, arXiv:math-ph/9903028](https://arxiv.org/abs/math-ph/9903028)

### The main theorem of perturbative renormalization says S-matrix schemes form a torsor

**Remember:** A group with no chosen origin: one element between any two points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** A right torsor for a group G is a nonempty set X with a right G-action in which each point reaches each other point by exactly one group element. That is, for all x and y in X, exactly one g in G satisfies x·g = y.

**Problem.** S-matrix schemes that satisfy field independence exist, and a unique vertex redefinition relates any two of them. So they form a torsor over the Stückelberg–Petermann renormalization group of vertex redefinitions.

**How the definition helps.** The main theorem says that schemes exist and that any two differ by a unique vertex redefinition, which is exactly the torsor condition. In our own explanation, the Epstein–Glaser construction gives existence, and the main theorem gives the unique Stückelberg–Petermann redefinition between two schemes.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “states that any two choices of such (re-)normalizations are uniquely related by a re-definition of the interaction Lagrangian density which introduces further point interactions of higher order ("counter terms")”

**Sources:**

- [G. Popineau, Raymond Stora, A pedagogical remark on the main theorem of perturbative renormalization theory, Nuclear Physics B 912 (2016) 70–78](https://doi.org/10.1016/j.nuclphysb.2016.04.046)
- [Henri Epstein, Vladimir Glaser, The role of locality in perturbation theory, Annales de l'Institut Henri Poincaré A 19 (1973) 211](http://www.numdam.org/item/AIHPA_1973__19_3_211_0/)
- [Romeo Brunetti, Klaus Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds, Communications in Mathematical Physics 208 (2000) 623–661, arXiv:math-ph/9903028](https://arxiv.org/abs/math-ph/9903028)

### The simple pole determines running

**Remember:** The flow’s speed is the counterterm’s simple pole times loop number.

*True by definition. Confidence: medium.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Let A be the convolution inverse of a minimal-subtraction counterterm character in the regulator z, and let θ(t) multiply each value on loop degree n by exp(tzn). The running F(t) is A⁻¹ ⋆ θ(t)A evaluated at z = 0, whenever every graph value is regular there.

**Problem.** If these values exist for every real t, then F(t+s) = F(t) ⋆ F(s). On each graph of loop number n, the derivative at t = 0 equals n times the coefficient of z⁻¹ in A.

**How the definition helps.** In our own proof, B(t) = A⁻¹ ⋆ θ(t)A satisfies B(t+s) = B(t) ⋆ θ(t)B(s), and θ(t) acts trivially at z = 0, which gives the group law. Differentiating at t = 0 multiplies each degree-n value of A by zn. Products of strict pole parts keep no constant term after one factor z, so only n times the z⁻¹ coefficient survives.

**nLab:** [renormalization](https://ncatlab.org/nlab/show/renormalization). It says: “its logarithmic derivative”

**Sources:**

- [Alain Connes and Dirk Kreimer, Renormalization in Quantum Field Theory and the Riemann-Hilbert Problem II (2001)](https://doi.org/10.1007/PL00005547)

### Vanishing jets erase local counterterms

**Remember:** Tests flat at the origin cannot see point-supported ambiguities.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Take the smooth compactly supported tests on ℝᵈ whose derivatives through order r vanish at zero, so they are flat at the origin to order r. Project onto them by subtracting from each test its degree-r Taylor polynomial at zero times a fixed smooth compactly supported cutoff equal to one near zero.

**Problem.** Two extensions of the same distribution across zero agree on these tests if both have scaling degree at most d + r. Scaling degree is the infimum of s such that λˢu(λ·) tends to zero as λ decreases to zero.

**How the definition helps.** In our own words, two such extensions differ by a distribution supported at zero, which is a finite sum of derivatives of the delta distribution. The scaling bound limits their orders to r. Each such term reads a derivative of order at most r of the test at zero, and these vanish on the chosen tests.

**nLab:** [differential renormalization](https://ncatlab.org/nlab/show/differential+renormalization), [A first idea of quantum field theory -- Renormalization](https://ncatlab.org/nlab/show/A+first+idea+of+quantum+field+theory+--+Renormalization). It says: “Restricted to the image of this projector the relevant time-ordered product Tₖ has a unique extension to the origin”

**Sources:**

- [Romeo Brunetti and Klaus Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories (2000)](https://doi.org/10.1007/s002200050004)

### Adjoints transport graph subtraction

**Remember:** P is the adjoint of Φ, so insertion rules become extraction rules.

*True by definition.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 4: research.

**Definition.** In the Bruned–Hou diagram algebra, Φ sends each diagram to the monomial counting its vertices of each degree. P is the adjoint of Φ for the symmetry-weighted inner products. It sends a monomial to the sum of all diagrams formed by pairing its labelled edge ends, with pairing multiplicities.

**Problem.** For each allowed monomial m, applying P to both factors of its extraction coproduct gives the diagram extraction coproduct of P(m). Each coproduct records an extracted piece in one factor and the contracted remainder in the other.

**How the definition helps.** Extraction is adjoint to insertion, so taking adjoints of the rule that Φ respects insertion gives the rule that P respects extraction (our own proof). The authors prove that Φ respects simultaneous insertion and that the symmetry-weighted inner products make extraction adjoint to insertion. This avoids counting all extractions directly.

**Paper or page:** [Renormalising Feynman diagrams with multi-indices](https://arxiv.org/abs/2501.08151v3). It says: “(𝒫 ⊗ 𝒫) ∘ Δₘ(zᵝ) = Δ𝒻 ∘ 𝒫(zᵝ).”

**Sources:**

- [Yvain Bruned and Yingtong Hou, Renormalising Feynman diagrams with multi-indices](https://arxiv.org/abs/2501.08151v3)

### Affine frames close under coaction

**Remember:** Fix the simplex, and let every de Rham class vary.

*True by definition.* MSC 81T18 (Feynman diagrams), 14C30. arXiv hep-th, math.NT. Level 4: research.

**Definition.** Fix the affine relative cohomology of a graph G and the Betti class σ of integration over the simplex. The affine motivic period space is spanned by all motivic periods with this fixed σ and any de Rham class in this cohomology, not only the graph’s own integrand.

**Problem.** Consider a scalar graph with logarithmic overall divergence and no divergent proper subgraph. The motivic Galois coaction sends its affine motivic period space into de Rham periods tensored with that same space.

**How the definition helps.** The coaction expands in a basis of de Rham classes and keeps σ fixed, so every new term has frame σ and lies in the space (our own explanation). A space spanned only by the original integrand need not contain these terms. The affine construction gives the geometric meaning of the extra periods.

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2). It says: “The Galois group acts on 𝒫ₐᵐ(G), that is Δ(𝒫ₐᵐ(G)) ⊆ 𝒫ᵈᴿ ⊗ 𝒫ₐᵐ(G).”

**Sources:**

- [Francis Brown, Feynman amplitudes, coaction principle, and cosmic Galois group](https://doi.org/10.4310/cntp.2017.v11.n3.a1)
- [Claudia Rella, An Introduction to Motivic Feynman Integrals](https://doi.org/10.3842/sigma.2021.032)

### Blow-ups frame Feynman periods

**Remember:** Blow up until the simplex boundary misses the poles.

*Makes the theorem clean to state or prove.* MSC 81T18 (Feynman diagrams), 14C30. arXiv hep-th, math.NT. Level 4: research.

**Definition.** A relative period of a pair (X,D) pairs a relative de Rham class with a relative homology class, represented by a chain whose boundary lies in D. For the graph blow-up, X removes the strict transform of the graph hypersurface, where the integrand has poles, and D is the rest of the coordinate boundary, exceptional divisors included.

**Problem.** Let a graph have twice as many edges as independent cycles, and let every nonempty proper edge subset have more edges than twice its cycle count. Then its projective Feynman integral equals the relative period of the lifted integrand and the lifted simplex.

**How the definition helps.** Rella’s blow-up theorem keeps the lifted simplex away from the transformed pole set, so its boundary lies in D. It also rules out poles of the lifted form along the new divisors. Changing variables on the simplex interior then identifies the two integrals (our own argument).

**nLab:** [period](https://ncatlab.org/nlab/show/period). It says: “The period of a closed differential form”

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2). It says: “The pulled-back differential ω̂ɢ = π\* ωɢ has no poles along the exceptional divisors associated to the blow ups.”

**Sources:**

- [Claudia Rella, An Introduction to Motivic Feynman Integrals](https://doi.org/10.3842/sigma.2021.032)
- [Francis Brown, Feynman amplitudes, coaction principle, and cosmic Galois group](https://doi.org/10.4310/cntp.2017.v11.n3.a1)

### Completed graphs fix point-count residues

**Remember:** Count zeros over p, divide by p²; every deleted vertex agrees.

*Makes the theorem clean to state or prove.* MSC 81T18 (Feynman diagrams), 05C31. arXiv hep-th, math.CO. Level 4: research.

**Definition.** Fix a prime p and a graph H with at least three vertices. Its c₂ invariant at p is the number of affine zeros of its Kirchhoff polynomial over the field with p elements, divided by p² and reduced modulo p.

**Problem.** Let G be a connected loopless four-regular graph with at least six vertices, and let p be prime. Then c₂(G ∖ v) is the same modulo p for every vertex v of G.

**How the definition helps.** All vertex deletions of G have the same completion, G itself, and so share one Martin invariant (our own explanation). Panzer and Yeats relate the c₂ residue of each deletion to that invariant after replacing every edge by p−1 parallel copies. Their theorem therefore gives the same residue for every deletion.

**Paper or page:** [Feynman symmetries of the Martin and c₂ invariants of regular graphs](https://arxiv.org/abs/2304.05299v2), [Feynman symmetries of the Martin and c₂ invariants of regular graphs](https://arxiv.org/abs/2304.05299v2), [Feynman symmetries of the Martin and c₂ invariants of regular graphs](https://arxiv.org/abs/2304.05299v2). It says: “For all primes p and any two vertices v,w of a 4-regular graph G, we have c₂⁽ᵖ⁾(G ∖ v) ≡ c₂⁽ᵖ⁾(G ∖ w) mod p.”

**Sources:**

- [Erik Panzer and Karen Yeats, Feynman symmetries of the Martin and c₂ invariants of regular graphs](https://doi.org/10.5070/c65165021)

### Completion removes the chosen vertex

**Remember:** Close the four legs at one vertex; then no vertex is special.

*Makes the theorem clean to state or prove.* MSC 81T18 (Feynman diagrams), 81Q30. arXiv hep-th, math-ph. Level 4: research.

**Definition.** A primitive φ⁴ graph is connected, massless and four-dimensional, with four external ends and twice as many internal edges as independent cycles. Every nonempty proper internal edge subset has more edges than twice its cycle count. Its completion joins the four external ends at one new vertex, so no vertex is marked.

**Problem.** Deleting any vertex of the completion of a primitive φ⁴ graph gives a primitive φ⁴ graph. All these deletions have the same period.

**How the definition helps.** Completion forgets which vertex was added, so it turns a family of period identities into one statement about an unmarked graph. Inversion of position coordinates changes which vertex lies at infinity (our own explanation). The completion theorem proves that this change preserves the integral.

**Paper or page:** [The Galois coaction on φ⁴ periods](https://arxiv.org/abs/1603.04289v2). It says: “Then Ḡ ∖ v₁ and Ḡ ∖ v₂ are primitive log-divergent φ⁴ graphs with equal period,”

**Sources:**

- [Oliver Schnetz, Quantum periods: A census of φ⁴-transcendentals](https://doi.org/10.4310/cntp.2010.v4.n1.a1)
- [Erik Panzer and Oliver Schnetz, The Galois coaction on φ⁴ periods](https://doi.org/10.4310/cntp.2017.v11.n3.a3)

### Cuts force Dodgson minors to vanish

**Remember:** A cut makes one component’s vertex columns sum to zero.

*True by definition.* MSC 81T18 (Feynman diagrams), 05C31. arXiv hep-th, math-ph. Level 4: research.

**Definition.** Orient a connected graph and drop one vertex column from its signed edge-by-vertex incidence matrix B. Form the block matrix with blocks diag(xₑ) and B on top, −Bᵀ and 0 below. A Dodgson polynomial is its signed determinant after deleting equally many edge rows and columns and setting some surviving weights to zero.

**Problem.** If the deleted edge rows index a cut, meaning their removal disconnects the graph, the Dodgson polynomial vanishes.

**How the definition helps.** Suppose the deleted rows form a cut, and pick a remaining component without the omitted vertex. Its vertex columns sum to zero, because every surviving edge has both ends inside it or both outside (our own proof). A spanning-forest expansion hides this dependence, and the all-minors matrix-tree theorem relates the two descriptions.

**Paper or page:** [Geometries in perturbative quantum field theory](https://arxiv.org/abs/1905.08083v3). It says: “If I cuts G or K ∖ IJ contains a cycle”

**Sources:**

- [Oliver Schnetz, Geometries in perturbative quantum field theory](https://doi.org/10.4310/cntp.2021.v15.n4.a2)

### Face tests bound sector denominators

**Remember:** Every dominant part must stay nonzero, so nothing cancels at infinity.

*Rules out counterexamples.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 4: research.

**Definition.** A polynomial p is completely nonvanishing on positive inputs if p and each of its face polynomials have no zero there. A face polynomial keeps only the terms whose exponents lie on one nonempty face of the Newton polytope, the convex hull of the exponents. These are the terms that dominate near a boundary (our own gloss).

**Problem.** For such a denominator there is a constant C &gt; 0 with \|p(x)\| ≥ C M(x) at every positive input. Here M is the largest value of a monomial appearing in p after its coefficient is removed.

**How the definition helps.** Near each boundary direction the dominant terms of p form a face polynomial, so a zero of it would let p fall far below its largest monomial (our own words). Borinsky proves the resulting uniform lower bound. Our own example 1 + (x − y)² is positive, but its top face (x − y)² vanishes on x = y, where p stays 1 while M grows quadratically.

**Paper or page:** [Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2). It says: “If $p \\in \\mathbb{C} \[x<sub>1</sub>, \\ldots , x<sub>n</sub>\]$ is completely non-vanishing on $\\mathbb{R} <sup>n</sup><sub>&gt;0</sub>$, then there is a constant $C&gt;0$ such that”

**Sources:**

- [Michael Borinsky, Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2)

### Graph minors inherit Dodgson identities

**Remember:** Dodgsons are minors of one matrix, so matrix identities apply.

*True by definition.* MSC 81T18 (Feynman diagrams), 05C31. arXiv hep-th, math-ph. Level 4: research.

**Definition.** The graph matrix of an oriented graph has diagonal edge weights, a zero vertex block, and incidence blocks B and −Bᵀ, with one vertex omitted. A Dodgson polynomial is a signed minor of this single matrix: delete equally many edge rows and columns and set selected weights to zero.

**Problem.** Let e and f be distinct surviving edges of the Dodgson matrix X, with weights set to zero and placed last in matching order. Then det(X) times the double-deletion minor equals the product of the two principal single-deletion minors minus the product of the two cross minors.

**How the definition helps.** Every Dodgson polynomial is a minor of one matrix, so the identity is the Desnanot–Jacobi identity for X. The remaining work is matching the ordering signs when writing each minor as a Dodgson polynomial (our own explanation). A forest-sum definition would need a separate comparison with determinants.

**Paper or page:** [Geometries in perturbative quantum field theory](https://arxiv.org/abs/1905.08083v3). It says: “where every Dodgson is evaluated at the graph G.”

**Sources:**

- [Oliver Schnetz, Geometries in perturbative quantum field theory](https://doi.org/10.4310/cntp.2021.v15.n4.a2)

### Nonexceptional momenta preserve forest monomials

**Remember:** Nonzero momentum across each split keeps every forest’s monomial.

*Rules out counterexamples. Confidence: medium.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Give each vertex of a finite connected massless graph with at least two vertices a Euclidean momentum, with total zero. The second Symanzik polynomial sums, over spanning two-forests, the product of edge variables outside the forest times the squared total momentum in either tree. The momenta are nonexceptional if this squared momentum is nonzero for every spanning two-forest.

**Problem.** For nonexceptional momenta, the monomials of the second Symanzik polynomial are exactly the complements of the spanning two-forests. Their Newton polytope has every edge parallel to a difference of two coordinate vectors.

**How the definition helps.** Nonexceptional momenta give every forest a positive weight, so each forest keeps its own monomial (our own argument). The edge directions follow from the basis polytope theorem for matroids, applied to these complements. In our own triangle example with momenta q, −q and zero, the forest isolating the zero-momentum vertex loses its monomial.

**Paper or page:** [Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2). It says: “If we restrict to Euclidean and non-exceptional kinematics, then the Newton polytope of Ψ<sub>G</sub> and Φ<sub>G</sub> are generalized permutahedra.”

**Sources:**

- [Michael Borinsky, Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2)

### Planar duals keep their periods

**Remember:** Tree complements are dual trees, so invert every weight.

*True by definition.* MSC 81T18 (Feynman diagrams), 81Q30. arXiv hep-th, math-ph. Level 4: research.

**Definition.** For a connected graph, the first Symanzik polynomial Ψ sums, over spanning trees, the product of the edge weights outside the tree. When the edge count is twice the cycle count, the period integrates 1/Ψ² over positive weights with one weight fixed at one.

**Problem.** A connected plane graph satisfying this count and having an absolutely convergent period has the same period as its plane dual. The dual has one vertex per face and one edge crossing each original edge.

**How the definition helps.** In a plane graph, complements of spanning trees are exactly dual spanning trees (our own proof). So Ψ at reciprocal weights is the dual Ψ divided by the product of all weights, and x ↦ 1/x turns one period into the other. The Jacobian cancels the square of that product.

**Paper or page:** [Invariant Differential Forms on Complexes of Graphs and Feynman Integrals](https://arxiv.org/abs/2101.04419v4). It says: “where the sum is over all spanning trees T ⊂ G.”

**Sources:**

- [Oliver Schnetz, Quantum periods: A census of φ⁴-transcendentals](https://doi.org/10.4310/cntp.2010.v4.n1.a1)
- [Francis Brown, Invariant Differential Forms on Complexes of Graphs and Feynman Integrals](https://doi.org/10.3842/sigma.2021.103)

### Primitive graphs have convergent periods

**Remember:** Primitive means no proper subgraph diverges by itself.

*Rules out counterexamples.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 4: research.

**Definition.** Take a connected graph with at least one edge and twice as many edges as independent cycles. It is primitive if no proper subgraph diverges on its own: every nonempty proper edge subset has more edges than twice its cycle count.

**Problem.** For such a graph, let Ψ sum the products of edge variables outside each spanning tree, and integrate 1/Ψ² over positive variables summing to one. This period converges exactly when the graph is primitive.

**How the definition helps.** Each subset inequality is exactly the convergence test at the corner where those edge variables tend to zero together. The analytic work shows that these corner tests control every approach to the boundary. In our own example, a three-vertex chain of two parallel-edge pairs diverges, since each pair has two edges and one cycle.

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2). It says: “converges if and only if every proper subgraph $\\varnothing \\ne \\gamma \\subset G$ satisfies the condition $n<sub>\\gamma </sub> &gt; 2 l<sub>\\gamma </sub>$.”

**Sources:**

- [Claudia Rella, An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2)

### Subgraph powers test convergence

**Remember:** Subtract ω(G) when a subgraph carries every mass and momentum.

*Makes the theorem clean to state or prove.* MSC 81T18 (Feynman diagrams), 81Q30. arXiv hep-th, math-ph. Level 4: research.

**Definition.** For each edge set S of a diagram G in dimension D, let ω(S) be the sum of its propagator exponents minus D/2 times its cycle count. The corrected power of S is ω(S), except when S contains every massive edge and one component of S carries every nonzero momentum insertion; then it is ω(S) − ω(G).

**Problem.** Take a connected scalar diagram with positive real propagator exponents, nonzero second Symanzik polynomial, and Euclidean momenta with no proper nonempty subset of nonzero ones summing to zero. Its projective parameter integral converges if every nonempty proper edge set has positive corrected power.

**How the definition helps.** The corrected power of S is the exponent that governs the corner where the parameters of S tend to zero together. Borinsky’s polynomial bounds and sector decomposition reduce convergence to integrals of tʳ⁻¹ from zero to one (our own explanation). Positive corrected powers r make these integrals finite.

**Paper or page:** [Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2), [Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2). It says: “A facet presentation of these polytopes is given by the supermodular functions”

**Sources:**

- [Michael Borinsky, Tropical Monte Carlo quadrature for Feynman integrals](https://doi.org/10.4171/aihpd/158)

### Tree complements expose leading scaling

**Remember:** A spanning tree leaves at least one omitted edge per independent cycle.

*True by definition.* MSC 81T18 (Feynman diagrams). arXiv math-ph, hep-th. Level 4: research.

**Definition.** The first Symanzik polynomial Ψ of a finite connected graph sums, over all spanning trees, the product of the edge variables outside the tree. A spanning tree omits at least as many edges of a connected subgraph γ as γ has independent cycles (our own remark).

**Problem.** Scale every edge variable of a connected subgraph γ by t. The lowest power of t in Ψ is the number of independent cycles in γ. Its coefficient is Ψ(γ)Ψ(G/γ), where G/γ contracts γ to one vertex and discards its edges.

**How the definition helps.** The power of t in a tree’s monomial counts the edges of γ outside the tree (our own proof). It equals the cycle count of γ exactly when the tree restricts to a spanning tree of γ, and such trees are pairs of spanning trees of γ and G/γ. Their monomials multiply to give Ψ(γ)Ψ(G/γ).

**Paper or page:** [Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2). It says: “z<sub>\\Psi \_G</sub>(\\gamma ) &amp;= \\ell (\\gamma )”

**Sources:**

- [Michael Borinsky, Tropical Monte Carlo quadrature for Feynman integrals](https://arxiv.org/abs/2008.12310v2)
- [Spencer Bloch, Hélène Esnault and Dirk Kreimer, On Motives Associated to Graph Polynomials (2006)](https://doi.org/10.1007/s00220-006-0040-2)

### Triangle cuts factor periods

**Remember:** Three cut vertices become a shared triangle; the periods multiply.

*Makes the theorem clean to state or prove.* MSC 81T18 (Feynman diagrams), 81Q30. arXiv hep-th, math-ph. Level 4: research.

**Definition.** A completed primitive graph is a four-regular graph whose vertex deletions are primitive φ⁴ graphs. Such a deletion has edge count twice its cycle count, and every nonempty proper edge subset has more edges than twice its cycle count. Its period is the scale-free integral of any vertex deletion.

**Problem.** Suppose removing three vertices disconnects a completed primitive graph. Split it into two graphs that each keep those three vertices and gain the triangle on them; the original period is the product of their periods.

**How the definition helps.** Fix the three shared positions at zero, a unit vector and infinity; the remaining variables on each side then integrate independently (our own explanation). Adding the triangle makes each side a completed graph whose period is that factor. The cited theorem proves the decomposition and the factorization.

**Paper or page:** [The Galois coaction on φ⁴ periods](https://arxiv.org/abs/1603.04289v2). It says: “Its period is the product”

**Sources:**

- [Oliver Schnetz, Quantum periods: A census of φ⁴-transcendentals](https://doi.org/10.4310/cntp.2010.v4.n1.a1)
- [Erik Panzer and Oliver Schnetz, The Galois coaction on φ⁴ periods](https://doi.org/10.4310/cntp.2017.v11.n3.a3)

### Two-point momenta identify two vertices

**Remember:** Only forests that separate the two external vertices carry momentum.

*True by definition. Confidence: medium.* MSC 81T18 (Feynman diagrams), 05C31. arXiv hep-th, math-ph. Level 4: research.

**Definition.** The second Symanzik polynomial of a massless diagram sums over spanning two-forests, the spanning forests with exactly two trees. Each term is the product of the weights outside the forest times the squared Euclidean norm of the total external momentum in one tree.

**Problem.** Let a connected massless diagram have external momenta p and −p at two distinct vertices and zero elsewhere. Then its second Symanzik polynomial equals ‖p‖² times the first Symanzik polynomial of the graph with those two vertices identified.

**How the definition helps.** Only forests that separate the two vertices carry nonzero momentum, and each carries ‖p‖² (our own proof). Identifying the two vertices turns separating forests bijectively into spanning trees with the same omitted edges. Both sides vanish when p is zero.

**Paper or page:** [Invariant Differential Forms on Complexes of Graphs and Feynman Integrals](https://arxiv.org/abs/2101.04419v4). It says: “the sum is over all spanning trees T ⊂ G.”

**Sources:**

- [Michael Borinsky, Tropical Monte Carlo quadrature for Feynman integrals](https://doi.org/10.4171/aihpd/158)

### Weight bounds forbid a final letter

**Remember:** The last letter is what the coaction peels off the end.

*Makes the theorem clean to state or prove.* MSC 81T18 (Feynman diagrams), 11M32. arXiv hep-th, math.NT. Level 4: research.

**Definition.** Write a cyclotomic motivic period of level six as a sum of words in the f-alphabet, with coefficients involving powers of 2πi. The coaction cuts each word at every position into a prefix and a suffix, so the final letter appears as a coaction component.

**Problem.** Consider a primitive massless φ⁴ period, the scale-free integral of a four-valent graph with no divergent proper subgraph. If its motivic period belongs to the level-six algebra, no word ends in the weight-two letter f₂⁶.

**How the definition helps.** Cutting just before the last letter makes that letter a coaction component, so a forbidden component forbids the letter (our own explanation). The small graphs theorem excludes the weight-two dilogarithm represented by f₂⁶ from these components.

**Paper or page:** [An Introduction to Motivic Feynman Integrals](https://arxiv.org/abs/2009.00426v2), [The Galois coaction on φ⁴ periods](https://arxiv.org/abs/1603.04289v2). It says: “In other words, f₂⁶ cannot appear as the right-most letter in the f-alphabet representation.”

**Sources:**

- [Francis Brown, Feynman amplitudes, coaction principle, and cosmic Galois group](https://doi.org/10.4310/cntp.2017.v11.n3.a1)
- [Erik Panzer and Oliver Schnetz, The Galois coaction on φ⁴ periods](https://doi.org/10.4310/cntp.2017.v11.n3.a3)

### Causal embeddings preserve Hadamard kernels

**Remember:** Light rays between image points never leave the image.

*Makes the theorem clean to state or prove.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 4: research.

**Definition.** Consider an open isometric embedding between time-oriented, globally hyperbolic spacetimes without boundary that preserves time orientation. Require its image to be causally convex: every causal curve joining two image points stays inside the image.

**Problem.** Fix a real Klein–Gordon field with the same mass and curvature coupling on both spacetimes. Pulling a Hadamard two-point function back along the embedding gives a Hadamard two-point function on the smaller spacetime.

**How the definition helps.** The Hadamard condition pairs singular directions along light rays, and causal convexity keeps those rays inside the image, so restriction keeps the condition (our own argument). Restriction to an open set keeps exactly the singular directions there. Extending tests by zero preserves positivity, and uniqueness of advanced and retarded solutions identifies the commutator.

**nLab:** [causally local net of observables](https://ncatlab.org/nlab/show/causally+local+net+of+observables), [Hadamard distribution](https://ncatlab.org/nlab/show/Hadamard+distribution). It says: “the wave front set is one causal half that of the causal propagator:”

**Sources:**

- [Brunetti, Fredenhagen and Verch, The Generally Covariant Locality Principle](https://doi.org/10.1007/s00220-003-0815-7)
- [Radzikowski, Micro-local approach to the Hadamard condition in quantum field theory on curved space-time](https://doi.org/10.1007/BF02100096)

### Geometric subtraction makes Wick squares covariant

**Remember:** Use the same local geometric subtraction on every spacetime.

*Rules out counterexamples.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 4: research.

**Definition.** The Wick square of a free real scalar field subtracts the Hadamard parametrix, built only from the local geometry, from the point-split field product. It then takes the diagonal value, with the subtraction length and finite local curvature terms fixed once for all spacetimes.

**Problem.** Consider globally hyperbolic four-dimensional spacetimes with the same mass and curvature coupling. The Wick square commutes with orientation- and time-orientation-preserving isometric embeddings with causally convex image.

**How the definition helps.** Isometric embeddings preserve the local metric, so the geometric subtraction agrees at corresponding points (our own explanation). The analytic work is the construction of the parametrix and of the diagonal value. Subtracting a state’s two-point function instead can fail: shifting the flat vacuum by a classical solution adds its square, which can vary under translations.

**nLab:** [perturbative algebraic quantum field theory](https://ncatlab.org/nlab/show/perturbative+algebraic+quantum+field+theory). It says: “The construction of Wick algebras of quantum observables of free fields on curved spacetimes via Hadamard distributions relies on the results of”

**Sources:**

- [Hollands and Wald, Local Wick Polynomials and Time Ordered Products of Quantum Fields in Curved Spacetime](https://doi.org/10.1007/s002200100540)

### Hadamard differences are smooth

**Remember:** Future first, past second; swapping the arguments leaves nothing singular.

*True by definition.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph, hep-th. Level 4: research.

**Definition.** A two-point distribution is Hadamard if its wave front set is exactly the pairs (x,k; y,−l) where a null geodesic joins x to y. Here k is future-directed and tangent to it, and l is the parallel transport of k to y. So its singular directions point to the future in the first argument and to the past in the second.

**Problem.** Consider the same free real scalar field on a globally hyperbolic spacetime, where a spatial slice determines evolution. Any two Hadamard two-point functions differ by a smooth function.

**How the definition helps.** Two Hadamard functions have the same antisymmetric part, the commutator, so their difference is symmetric (our own proof). Swapping the arguments turns future-first singular pairs into past-first ones, which the Hadamard condition excludes, so the difference has none. An empty wave front set means the difference is smooth.

**nLab:** [Hadamard distribution](https://ncatlab.org/nlab/show/Hadamard+distribution). It says: “the wave front set is one causal half that of the causal propagator”

**Sources:**

- [Marek Radzikowski, Micro-local approach to the Hadamard condition in quantum field theory on curved space-time (1996)](https://doi.org/10.1007/BF02100096)

### Hadamard pairings satisfy the spectrum condition

**Remember:** All correlations are paired two-point functions, so light rays suffice.

*Makes the theorem clean to state or prove.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 4: research.

**Definition.** A centered quasifree state has vanishing odd correlations, and each even correlation is a sum over pairings of its arguments, with one two-point function per pair in order. It is Hadamard when the singular directions of the two-point function are light-ray pairs, future-directed first and reversed second.

**Problem.** For a free real Klein–Gordon field on a globally hyperbolic spacetime without boundary, every centered quasifree Hadamard state satisfies the microlocal spectrum condition. This condition bounds singular directions at all orders by sums of directed momenta carried by graph edges between arguments.

**How the definition helps.** Each pairing is a graph whose edges each carry a Hadamard pair, already oriented the right way in time (our own explanation). The wave front bound for tensor products puts a permitted pair on each edge and zero directions elsewhere. Summing over pairings adds no new singular directions.

**nLab:** [quasi-free quantum state](https://ncatlab.org/nlab/show/quasi-free+quantum+state), [Hadamard distribution](https://ncatlab.org/nlab/show/Hadamard+distribution). It says: “its 2-point function determines all its n-point functions.”

**Sources:**

- [Brunetti, Fredenhagen and Köhler, The microlocal spectrum condition and Wick polynomials of free fields on curved spacetimes](https://doi.org/10.1007/BF02099626)

### Removing Maxwell flux restores injectivity

**Remember:** Quotient by classes the pairing cannot see; then nothing can vanish.

*Rules out counterexamples.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 4: research.

**Definition.** Test the source-free Maxwell field on an oriented, time-oriented, globally hyperbolic four-dimensional spacetime with compactly supported smooth two-forms, modulo sums dα + δβ of compactly supported forms. The reduced space further removes the radical, the classes whose skew pairing with every test class is zero.

**Problem.** Consider orientation- and time-orientation-preserving isometric embeddings with open, causally convex image, so causal curves between image points stay inside. The reduced Maxwell theory assigns injective maps to these embeddings, both for classical test classes and for their quantized field algebras.

**How the definition helps.** Embeddings preserve the skew form, so a class sent to zero pairs to zero with every class and already lies in the radical (our own explanation). Fewster and Lang prove that embeddings preserve radicals and that quantization keeps the injections. In the universal theory, a nonzero flux class can vanish in a larger spacetime.

**nLab:** [causally local net of observables](https://ncatlab.org/nlab/show/causally+local+net+of+observables). It says: “A causally local net of observables is a functor”

**Sources:**

- [Fewster and Lang, Dynamical Locality of the Free Maxwell Field](https://link.springer.com/article/10.1007/s00023-015-0398-9)

### Tensorial lapse rotation respects coordinates

**Remember:** Rotate the normal tensor while keeping the chosen slicing fixed.

*True by definition.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds). arXiv math-ph. Level 4: research.

**Definition.** Fix a slicing of spacetime by spacelike hypersurfaces, with unit normal covector n, for a Lorentzian metric g with negative time direction. Rotating the lapse, the factor converting coordinate time to normal proper time, by an angle θ gives the complex metric g + (1 − exp(−2iθ)) n ⊗ n, built from tensors only.

**Problem.** For a fixed slicing, lapse rotation commutes with coordinate changes when they also transform the normal covector. It need not agree with a new rotation based on another slicing.

**How the definition helps.** The formula uses only the tensors g and n, so a coordinate change that also moves n carries it to the same formula (our own explanation). The paper identifies this tensor with the coordinate formula that rotates the lapse. Two inertial slicings of flat spacetime have different n ⊗ n, so they give different metrics when exp(−2iθ) ≠ 1.

**Paper or page:** [Wick rotation in the lapse, admissible complex metrics, and foliation changing diffeomorphisms](https://arxiv.org/abs/2406.06047), [Wick rotation in the lapse, admissible complex metrics, and foliation changing diffeomorphisms](https://arxiv.org/abs/2406.06047). It says: “It is invariantly defined with respect to passive and active diffeomorphisms but depends on the choice of fiducial foliation.”

**Sources:**

- [Wick rotation in the lapse, admissible complex metrics, and foliation changing diffeomorphisms](https://arxiv.org/abs/2406.06047)

### Time slices compare spacetime dynamics

**Remember:** Use unchanged past and future slices to compare two metrics.

*Makes the theorem clean to state or prove.* MSC 81T20 (Quantum field theory on curved space or space-time backgrounds), 81T05. arXiv math-ph. Level 4: research.

**Definition.** Consider a theory that assigns an algebra of observables to each spacetime and a map to each causal inclusion. The time slice axiom makes the inclusion map invertible whenever the smaller region contains a Cauchy surface of the larger. A Cauchy surface meets every inextendible causal path exactly once.

**Problem.** A compactly supported change of the metric that preserves global hyperbolicity gives an automorphism of the original observable algebra. Global hyperbolicity ensures the spacetime admits a surface for complete initial data.

**How the definition helps.** An unchanged past region and an unchanged future region each contain Cauchy surfaces for both metrics, so their inclusion maps are invertible (our own construction). Passing from the old algebra to the new one through the past region, and back through the future region, gives the automorphism.

**nLab:** [time slice axiom](https://ncatlab.org/nlab/show/time+slice+axiom). It says: “if whenever a causal inclusion of Lorentzian spaces O₁ ↪︎ O₂ is such that O₁ contains a Cauchy surface of O₂ then A(O₁ ↪︎ O₂) is an isomorphism.”

**Sources:**

- [Romeo Brunetti, Klaus Fredenhagen and Rainer Verch, The Generally Covariant Locality Principle (2003)](https://doi.org/10.1007/s00220-003-0815-7)

### Boundary trivializations give open surface phases

**Remember:** Trivialize the gerbe on the brane, and open surfaces get phases.

*True by definition. Confidence: medium.* MSC 81T30 (String and superstring theories; other extended objects (e.g., branes) in quantum field theory), 81T40. arXiv hep-th, math-ph. Level 4: research.

**Definition.** A relative Wess–Zumino field is a gerbe with connection on the target, with curvature three-form H, together with a trivialization over the brane, the submanifold where surface boundaries may lie. The trivialization gives a two-form B on the brane with dB equal to the restriction of H.

**Problem.** Each compact oriented surface map whose boundary lies in the chosen submanifold has a scalar phase. On relative boundaries the phase in ℝ/ℤ integrates H over the filling and subtracts the integral of B over its cap.

**How the definition helps.** The trivialization turns the gerbe’s boundary line into plain numbers, so a surface with boundary on the brane gets a scalar phase. By relative Stokes, with filling C and cap D, the phase is the integral of H over C minus the integral of B over D, modulo integers (our own derivation).

**nLab:** [Wess-Zumino-Witten model](https://ncatlab.org/nlab/show/Wess-Zumino-Witten+model). It says: “their existence corresponds to a trivialization of the underlying BU(1)-principal 2-bundle (U(1)-bundle gerbe) of the restriction of the B-field to the brane.”

**Sources:**

- [Krzysztof Gawędzki and Nuno Reis, WZW branes and gerbes](https://doi.org/10.1142/s0129055x02001557)
- [Severin Bunk and Konrad Waldorf, Smooth functorial field theories from B-fields and D-branes](https://doi.org/10.1007/s40062-020-00272-2)

### Characters replace global brane potentials

**Remember:** Evaluate the character on the brane cycle and exponentiate.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T30 (String and superstring theories; other extended objects (e.g., branes) in quantum field theory), 19L50. arXiv hep-th, math.KT. Level 4: research.

**Definition.** Fix a twisted differential K-character χ, the Ramond–Ramond field in this model, on the given spacetime. It assigns a value χ(z) in ℝ/ℤ to every geometric K-cycle z compatible with the twist, and the Wess–Zumino phase of z is exp(2πiχ(z)).

**Problem.** In the twisted K-character model on compact simply connected spacetime, a Ramond–Ramond field assigns a Wess–Zumino phase to every compatible brane cycle. This phase exists even for a field with nonzero topological class.

**How the definition helps.** The character evaluates the field directly on the cycle, so no global potential is needed, even when the field has nonzero class (our own). The substantial theorem identifies the character model with twisted differential K-theory (our own).

**nLab:** [twisted differential K-theory](https://ncatlab.org/nlab/show/twisted+differential+K-theory). It says: “the differential aspect captures the higher gauge field called the RR-field”

**Sources:**

- [Fabio Ferrari Ruffino and Juan Carlos Rocha Barriga, Twisted differential K-characters and D-branes (2020)](https://doi.org/10.1016/j.nuclphysb.2020.115169)

### Cup products detect circle duals

**Remember:** The obstruction is the integral cup product, not its differential refinement.

*True by definition.* MSC 81T30 (String and superstring theories; other extended objects (e.g., branes) in quantum field theory), 19L50. arXiv hep-th. Level 4: research.

**Definition.** Let P and Q be principal circle bundles with connection on one smooth manifold. A differential T-duality pair in the cup-product model includes a geometric trivialization of the product of their differential first Chern classes. This trivialization identifies the product with the class of a global three-form.

**Problem.** Two circle bundles with fixed connections admit a differential T-duality pair exactly when their first Chern classes have zero integral cup product.

**How the definition helps.** In differential cohomology, a class comes from a global form exactly when its integral class vanishes (our own). So a pair exists exactly when the integral cup product is zero (our own). Comparing with the model that uses geometric data on both bundles needs a separate equivalence theorem (our own).

**nLab:** [T-Duality and Differential K-Theory](https://ncatlab.org/nlab/show/T-Duality+and+Differential+K-Theory). It says: “such that the underlying topological class of the cup product (P, θ) ∪ (P̂, θ̂) is trivial;”

**Sources:**

- [Alexander Kahle and Alessandro Valentino, T-duality and Differential K-Theory (2014), §2](https://doi.org/10.1142/S0219199713500144)
- [Konrad Waldorf, Geometric T-duality: Buscher rules in general topology](https://doi.org/10.1007/s00023-023-01295-0)

### Even self-dual lattices ensure modularity

**Remember:** Even norms remove shift phases, and self-duality closes the Fourier transform.

*Rules out counterexamples.* MSC 81T30 (String and superstring theories; other extended objects (e.g., branes) in quantum field theory), 81T40. arXiv hep-th. Level 4: research.

**Definition.** On ℝᵈ × ℝᵈ use the form B((x,y),(u,v)) = x·u − y·v. A full lattice Λ is even if every B(a,a) is an even integer. It is self-dual if Λ is exactly the set of vectors b with B(a,b) ∈ ℤ for all a in Λ.

**Problem.** For Im τ &gt; 0, sum exp(πiτ‖x‖² − πiτ̄‖y‖²) over (x,y) in Λ and divide by \|η(τ)\|²ᵈ, using the Dedekind eta function. For even self-dual Λ this partition function is invariant under τ ↦ τ + 1 and τ ↦ −1/τ.

**How the definition helps.** Under τ ↦ τ + 1 each term gains the phase exp(πiB(a,a)), which evenness makes 1. Under τ ↦ −1/τ, Poisson summation gives the sum over the dual lattice, Λ itself by self-duality, and the eta factors cancel the powers of τ and τ̄. Our own counterexample, the odd lattice with form (1,−1), has a term that changes sign under the shift.

**Paper or page:** [Non-Chiral Vertex Operator Algebra Associated To Lorentzian Lattices And Narain CFTs](https://arxiv.org/abs/2312.16296v2). It says: “is a modular invariant non-chiral CFT.”

**Sources:**

- [Non-Chiral Vertex Operator Algebra Associated To Lorentzian Lattices And Narain CFTs](https://arxiv.org/abs/2312.16296v2)

### Gerbe isomorphisms relate dual fluxes

**Remember:** Shift the curving by ρ, and the fluxes differ by dρ.

*True by definition. Confidence: medium.* MSC 81T30 (String and superstring theories; other extended objects (e.g., branes) in quantum field theory), 53C08. arXiv hep-th. Level 4: research.

**Definition.** In a geometric T-duality correspondence, let ρ be the two-form on the fiber product of the torus bundles built from their two connections. The gerbe isomorphism identifies the first pulled-back gerbe with the second one, with curving shifted by ρ.

**Problem.** On the fiber product, the first pulled-back curvature minus the second equals the exterior derivative dρ.

**How the definition helps.** Taking curvature turns the shift by ρ into addition of dρ, so the isomorphism gives the flux equation at once (our own). A description by local fields would instead need a check of their transformation rules (our own).

**Paper or page:** [Geometric T-duality: Buscher rules in general topology](https://arxiv.org/abs/2207.11799). It says: “is a T-duality correspondence with H-flux.”

**Sources:**

- [Konrad Waldorf, Geometric T-duality: Buscher rules in general topology](https://doi.org/10.1007/s00023-023-01295-0)

### Gerbe shifts parametrize circle duals

**Remember:** Gerbes shift the choice, and circle automorphisms identify some shifts.

*Makes the theorem clean to state or prove.* MSC 81T30 (String and superstring theories; other extended objects (e.g., branes) in quantum field theory), 53C08. arXiv hep-th, math.DG. Level 4: research.

**Definition.** Take two circle bundles with connection on one base. A differential T-duality pair is a geometric trivialization identifying the product of their differential first Chern classes with the class of a global three-form. Two pairs are equivalent if connection-preserving automorphisms of the bundles carry one to the other.

**Problem.** Fix two circle bundles with connection admitting a pair on a connected base, and write F and G for their curvatures. Degree-three differential cohomology acts transitively on equivalence classes of pairs, with kernel represented by aF + bG for real constants a and b.

**How the definition helps.** Two trivializations of the same product differ by a degree-three differential class, which gives the action (our own). Bundle automorphisms can identify some of these shifts (our own). Waldorf computes their image, which is exactly the stated kernel.

**Paper or page:** [Geometric T-duality: Buscher rules in general topology](https://arxiv.org/abs/2207.11799). It says: “acts freely and transitively in the fibre over (ξ, ξ̂).”

**Sources:**

- [Konrad Waldorf, Geometric T-duality: Buscher rules in general topology](https://doi.org/10.1007/s00023-023-01295-0)

### Jump factors glue partition functions

**Remember:** Use each jump as a change of coordinates.

*True by definition.* MSC 81T30 (String and superstring theories; other extended objects (e.g., branes) in quantum field theory), 14N35. arXiv math-ph, math.AG. Level 4: research.

**Definition.** On each admissible sector Uᵢ, let Zᵢ be the normalized sector sum of the resolved conifold partition series. The jump gᵢⱼ on an overlap is defined by Zᵢ = gᵢⱼ Zⱼ. The jump line bundle uses it as transition function, identifying (z,u) in chart j with (z,gᵢⱼ(z)u) in chart i.

**Problem.** Assume Im(v/w) &gt; 0 for the conifold parameters v and w. The normalized sector sums then define a global section of the line bundle determined by the jumps.

**How the definition helps.** With the jumps as transition functions, neighboring sums describe the same section by construction (our own). The analytic work computes the jumps and proves that their products agree on triple overlaps. Gluing the sums as ordinary functions would wrongly need Zᵢ = Zⱼ on every overlap (our own).

**Paper or page:** [Mathematical structures of non-perturbative topological string theory: from GW to DT invariants](https://arxiv.org/abs/2109.06878v2). It says: “glue together into a section of ℒ.”

**Sources:**

- [Mathematical structures of non-perturbative topological string theory: from GW to DT invariants](https://arxiv.org/abs/2109.06878v2)

### One trivialization matches twists

**Remember:** Trivialize the cup product once to obtain two twists that agree together.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T30 (String and superstring theories; other extended objects (e.g., branes) in quantum field theory), 19L50. arXiv hep-th, math.KT. Level 4: research.

**Definition.** A differential T-duality pair consists of two torus bundles with connection whose structure groups are dual. It includes one geometric trivialization of the differential cup product of their characteristic classes by a global three-form.

**Problem.** One differential T-duality pair determines a gerbe, a geometric representative of a degree-three class, on each bundle. Their topological twists agree after pullback to the fiber product.

**How the definition helps.** The single trivialization is a common reference from which both twists are built (our own). Pulling each bundle back to itself gives a section and so a second trivialization to compare with (our own). Kahle and Valentino construct the twists and their identification from these choices (our own).

**nLab:** [T-Duality and Differential K-Theory](https://ncatlab.org/nlab/show/T-Duality+and+Differential+K-Theory). It says: “on P and on P̂, respectively, whose pullbacks to the fiber product P ×ₓ P̂ are equivalent there.”

**Sources:**

- [Alexander Kahle and Alessandro Valentino, T-duality and Differential K-Theory (2014), §2](https://doi.org/10.1142/S0219199713500144)

### Orbifold points retain flat gerbes

**Remember:** Group cochains survive on a point with symmetry.

*True by definition.* MSC 81T30 (String and superstring theories; other extended objects (e.g., branes) in quantum field theory), 53C08, 57R18. arXiv hep-th. Level 4: research.

**Definition.** For the orbifold point with finite symmetry group G, the spaces of n composable arrows are the discrete sets Gⁿ, so all positive-degree forms on them vanish. A gerbe cocycle there is a circle-valued function ω on G² with ω(a,b)ω(ab,c) = ω(b,c)ω(a,bc) for all a, b, c in G.

**Problem.** Gerbes with connection on this orbifold point are all flat. Their classes form H²(G,U(1)), the group of circle-valued two-cocycles modulo coboundaries.

**How the definition helps.** With no positive-degree forms, a connection carries no data, so every gerbe is flat and only group cochains remain (our own). For two independent symmetries of order two, the cocycle ω((a,b),(c,d)) = (−1)ᵃᵈ gives a nontrivial class (our own). Its values on the two generators change when their order reverses, which a coboundary cannot do (our own).

**nLab:** [discrete torsion](https://ncatlab.org/nlab/show/discrete+torsion). It says: “This gives a classification of discrete torsion in terms of the second group cohomology group H²(G,U(1)).”

**Sources:**

- [Ernesto Lupercio and Bernardo Uribe, An introduction to gerbes on orbifolds (2004), §§3–4](https://doi.org/10.5802/ambp.190)

### Split metrics lift T-duality

**Remember:** Keep the connections and choose reciprocal fiber metrics.

*True by definition.* MSC 81T30 (String and superstring theories; other extended objects (e.g., branes) in quantum field theory), 53C08. arXiv hep-th, math.DG. Level 4: research.

**Definition.** Given a connection on a principal torus bundle, a split invariant metric makes horizontal and vertical vectors orthogonal. It is a pulled-back base metric on horizontal vectors and a smoothly varying inner product on the torus Lie algebra on vertical vectors.

**Problem.** Every differential T-duality correspondence between principal torus bundles admits invariant metrics that make it a geometric T-duality correspondence with the original connections.

**How the definition helps.** In split form, the metric conditions for geometric T-duality become a shared base metric and mutually dual fiber inner products (our own). Choosing these keeps both given connections and the original matching of twists (our own). The classification of invariant metrics justifies passing to the split form (our own).

**Paper or page:** [Geometric T-duality: Buscher rules in general topology](https://arxiv.org/abs/2207.11799). It says: “whose Kaluza-Klein connections are ω and ω̂, respectively, such that 𝒟 is a geometric T-duality correspondence”

**Sources:**

- [Konrad Waldorf, Geometric T-duality: Buscher rules in general topology](https://doi.org/10.1007/s00023-023-01295-0)

### Cutting curves proves fusion associativity

**Remember:** Both sums count the rank of the same bundle.

*True by definition.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics), 17B69. arXiv math.QA, math-ph. Level 4: research.

**Definition.** Let A, B and C be simple modules. The fusion coefficient N(A,B,C) is the dimension of the space of conformal blocks on the sphere with A at 0, B at 1, and the graded dual of C at ∞. A conformal block is a functional on the tensor product that kills the action of every global meromorphic field regular away from the marks.

**Problem.** Let V be a simple complex vertex operator algebra of CFT type (ℕ-graded, weight zero one-dimensional) and C₂-cofinite (mode −2 products have finite codimension). If V has an invariant nondegenerate pairing and its modules graded compatibly by ℕ are semisimple, the product on simple labels with coefficients N(A,B,C) is associative.

**How the definition helps.** Both bracketings compute the rank of the same bundle of four-point blocks on the sphere (our own explanation). At each of the two nodal degenerations, factorization writes that rank as a sum over intermediate simple labels of products of three-point dimensions. The vector bundle theorem makes the rank constant over the connected family, including both limits.

**Paper or page:** [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1), [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1), [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1). It says: “The multiplication on Fu(V) is associative.”

**Sources:**

- [Xu Gao, Jianqi Liu, Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1)

### Equivariant gerbes permit global gauging

**Remember:** Define the gerbe on the quotient stack, then pull it back.

*Makes the theorem clean to state or prove.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics), 81T50. arXiv hep-th, math-ph. Level 4: research.

**Definition.** For a group H acting on a target M, an equivariant Wess–Zumino field is a degree-three differential cohomology class on the differential quotient stack. On a manifold, the fields of this stack are principal H-bundles with connection plus sections of the associated M-bundle. Pulling back along such a field gives a gerbe with connection there, up to isomorphism.

**Problem.** On a closed oriented surface, an equivariant Wess–Zumino gerbe gives a gauge-invariant phase even for a nontrivial principal symmetry bundle. The field consists of a connection and a section of the bundle with the target as fiber.

**How the definition helps.** The class lives on the stack, so its pullback is a gerbe on the surface itself, whose holonomy gives the phase (our own explanation). Descent, the theorem that compatible local descriptions glue, is what makes this pullback a global gerbe. Constructing the equivariant class is a separate existence problem.

**nLab:** [gauged WZW model](https://ncatlab.org/nlab/show/gauged+WZW+model). It says: “the action functional of the gauged WZW model is that obtained by refining this circle 2-bundle to the H-equivariant differential cohomology of G”

**Sources:**

- [Krzysztof Gawędzki, Rafał R. Suszek and Konrad Waldorf, Global gauge anomalies in two-dimensional bosonic sigma models](https://doi.org/10.1007/s00220-010-1162-0)

### Projectively flat blocks give actions

**Remember:** Transport lines around loops to get the mapping class action.

*True by definition.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics), 18M20. arXiv math-ph, math.QA. Level 4: research.

**Definition.** A modular functor gives a holomorphic vector bundle of conformal blocks over the moduli stack of labelled surfaces with parametrized boundary, a space that also records surface symmetries. Its projectively flat connection transports the lines in a fiber along paths, depending only on the homotopy class of the path.

**Problem.** For a connected surface with nonempty parametrized boundary and a nonzero block space, its mapping class group acts projectively on that space. This group consists of orientation-preserving diffeomorphisms fixing the boundary pointwise, modulo isotopy fixing the boundary.

**How the definition helps.** Transport of lines around loops gives linear maps up to scalar that respect composition, so the fundamental group of the stack acts projectively (our own argument). That fundamental group is the mapping class group. The real work is the theorem that gives the bundle its projectively flat connection.

**nLab:** [modular functor](https://ncatlab.org/nlab/show/modular+functor). It says: “this bundle carries a canonical projectively flat connection ∇Σ compatible with the sewing operation”

**Sources:**

- [Graeme Segal, The Definition of Conformal Field Theory](https://doi.org/10.1017/CBO9780511526398.019)

### Specialness erases correlator bubbles

**Remember:** A normalized special algebra erases a split followed by a merge.

*Rules out counterexamples.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics), 18M20. arXiv math.QA, math-ph. Level 4: research.

**Definition.** In the ribbon diagrams for rational conformal field theory, a Frobenius algebra labels each merge by its multiplication m and each split by its comultiplication Δ. The Frobenius rule lets a merge slide through a split. The algebra is normalized special if a split followed by a merge is the identity, m ∘ Δ = id.

**Problem.** In the ribbon graph construction with a normalized special symmetric Frobenius algebra, inserting a split immediately followed by a merge preserves the correlator. The correlator is the vector assigned to the labelled surface.

**How the definition helps.** The inserted piece is m ∘ Δ, which normalized specialness makes the identity. Our own counterexample is ℂ\[x\]/(x²) with trace ε(x) = 1 and ε(1) = 0. There Δ(1) = 1 ⊗ x + x ⊗ 1, so m ∘ Δ is multiplication by the nilpotent 2x, and no rescaling makes it the identity.

**nLab:** [FRS-theorem on rational 2d CFT](https://ncatlab.org/nlab/show/FRS-theorem+on+rational+2d+CFT). It says: “triangulating the surface suitably, labelling the triangulation with a Frobenius algebra object internal to the modular tensor category”

**Sources:**

- [Fuchs, Runkel and Schweigert, TFT construction of RCFT correlators I: Partition functions](https://doi.org/10.1016/S0550-3213(02)00744-7)

### Surface holonomy needs no filling

**Remember:** Surface holonomy does not ask the surface to bound in the target.

*True by definition.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics), 81T13. arXiv hep-th, math-ph. Level 4: research.

**Definition.** A Wess–Zumino character assigns an additive phase in ℝ/ℤ to every smooth two-cycle in the target, not only to boundaries. On a boundary, its phase is the integral of a fixed curvature three-form over a spanning chain, modulo integers.

**Problem.** Every smooth map from a closed oriented surface has a phase for a fixed Wess–Zumino character, including maps admitting no filling in the target.

**How the definition helps.** A surface map gets the phase of the image of its fundamental cycle, which needs no filling. Changing that cycle by a boundary within the surface changes nothing, since three-forms vanish on a surface. In our own example, the identity map of the two-sphere has no oriented filling, because its fundamental class is nonzero.

**nLab:** [Wess-Zumino-Witten model](https://ncatlab.org/nlab/show/Wess-Zumino-Witten+model). It says: “this WZW term is the surface holonomy functional of a connection on a bundle gerbe”

**Sources:**

- [Krzysztof Gawędzki and Nuno Reis, WZW branes and gerbes](https://doi.org/10.1142/s0129055x02001557)
- [Jeff Cheeger and James Simons, Differential characters and geometric invariants](https://doi.org/10.1007/bfb0075216)

### Swapping points makes fusion commutative

**Remember:** Swap the two inputs and count the same blocks.

*True by definition.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics), 17B69. arXiv math.QA, math-ph. Level 4: research.

**Definition.** Let A, B and C be simple modules. The fusion coefficient N(A,B,C) is the dimension of the space of conformal blocks on the sphere with A at 0, B at 1, and the graded dual of C at ∞. A conformal block is a functional on the tensor product that kills the action of every global meromorphic field regular away from the marks.

**Problem.** Let V be a simple complex vertex operator algebra of CFT type (ℕ-graded, weight zero one-dimensional) and C₂-cofinite (mode −2 products have finite codimension). If V has an invariant nondegenerate pairing and its modules graded compatibly by ℕ are semisimple, then N(A,B,C) = N(B,A,C).

**How the definition helps.** The map z ↦ 1 − z swaps 0 and 1 and fixes ∞, so it carries blocks for (A,B,C) to blocks for (B,A,C) (our own argument). Transporting the local coordinates along it makes this an isomorphism, so the dimensions agree.

**Paper or page:** [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1), [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1). It says: “The multiplication on Fu(V) is commutative.”

**Sources:**

- [Xu Gao, Jianqi Liu, Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1)

### Trivial turns let conformal nets descend

**Remember:** A scalar full turn makes the lift invisible.

*Makes the theorem clean to state or prove.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics). arXiv math-ph, hep-th. Level 4: research.

**Definition.** A conformal net on the line carries a unitary representation U of the universal cover of the Möbius group, its lifted symmetries. It satisfies the scalar full-turn condition if U sends the lift of rotation by 2π to a scalar multiple of the identity.

**Problem.** Under this condition, a conformal net on the line extends to a conformal net on the circle.

**How the definition helps.** Two lifts of one circle symmetry differ by whole turns, and a scalar turn cancels under conjugation, so transport of algebras does not depend on the lift (our own explanation). The extension theorem must still check the net axioms for the transported algebras.

**Paper or page:** [Wightman fields for two-dimensional conformal field theories with pointed representation category](https://arxiv.org/abs/2301.12310v3). It says: “that is, the lift of 2π-rotation is trivial.”

**Sources:**

- [Wightman fields for two-dimensional conformal field theories with pointed representation category](https://arxiv.org/abs/2301.12310v3)

### Vacuum insertion gives the fusion unit

**Remember:** Erase a vacuum point to read off the fusion unit.

*True by definition.* MSC 81T40 (Two-dimensional field theories, conformal field theories, etc. in quantum mechanics), 17B69. arXiv math.QA, math-ph. Level 4: research.

**Definition.** Let A, B and C be simple modules. The fusion coefficient N(A,B,C) is the dimension of the space of conformal blocks on the sphere with A at 0, B at 1, and the graded dual of C at ∞. A conformal block is a functional on the tensor product that kills the action of every global meromorphic field regular away from the marks.

**Problem.** Let V be a simple complex vertex operator algebra of CFT type (ℕ-graded, weight zero one-dimensional) and C₂-cofinite (mode −2 products have finite codimension). If V has an invariant nondegenerate pairing and its modules graded compatibly by ℕ are semisimple, then V, as a module over itself, is the identity for fusion.

**How the definition helps.** The vacuum insertion theorem lets one remove the point labelled by V, so the block space becomes the space of module maps from B to C. For simple modules this space has dimension one if B ≅ C and zero otherwise (our own argument).

**Paper or page:** [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1), [Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1). It says: “The multiplication on Fu(V) has an identity.”

**Sources:**

- [Xu Gao, Jianqi Liu, Applications of the factorization theorem of conformal blocks to vertex operator algebras](https://arxiv.org/abs/2508.01294v1)

### Boundary lines make flat restrictions isotropic

**Remember:** A parallel action vector makes the pulled-back curvature vanish.

*True by definition.* MSC 81T45 (Topological field theories in quantum mechanics), 81T13. arXiv math-ph, math.DG. Level 4: research.

**Definition.** A horizontal trivialization of a complex line bundle with connection is a nowhere-zero parallel section s, with ∇s = 0, so the curvature vanishes wherever one exists. In level-one SU(2) Chern–Simons theory, the exponentiated action gives each bulk connection a vector in the line over its boundary connection.

**Problem.** On the smooth irreducible loci, restricting flat connections, up to changes of frame, to the boundary pulls the boundary symplectic form back to zero. Irreducible means that only central changes of frame preserve the connection.

**How the definition helps.** Over flat bulk connections the action is a nonzero parallel section of the pulled-back line, so the pulled-back curvature vanishes. By the Chern–Simons variation formula, that curvature is the pulled-back boundary symplectic form (our own comparison).

**Paper or page:** [Lie groups and Chern-Simons Theory](https://arxiv.org/abs/2207.11062). It says: “and therefore the induced symplectic form rₓ\* ω vanishes.”

**Sources:**

- [Daniel S. Freed, Classical Chern-Simons Theory, 1](https://doi.org/10.1006/aima.1995.1039)

### Cardy makes annulus cuts agree

**Remember:** An annulus gives the same map whether you cut across it or around it.

*True by definition.* MSC 81T45 (Topological field theories in quantum mechanics). arXiv math.QA. Level 4: research.

**Definition.** Take finite-dimensional unital complex algebras A and C, with C commutative, both with nondegenerate symmetric trace pairings, and a unital homomorphism i from C to the center of A with adjoint j. The Cardy condition requires i(j(a)) = ∑ᵣ eʳaeᵣ for every a in A, for any trace-dual bases (eᵣ) and (eʳ) of A.

**Problem.** The two decompositions of an annulus from an interval to an interval give the same operator on A.

**How the definition helps.** The circle cut of the annulus gives i(j(a)), and the interval cut contracts the two ends with trace-dual bases, which gives the sum (our own explanation). The Cardy condition says exactly that these two operators agree.

**Paper or page:** [Frobenius--Schur indicators for twisted Real representation theory and two dimensional unoriented topological field theory](https://arxiv.org/abs/2310.03566v1). It says: “The oriented Cardy condition”

**Sources:**

- [Frobenius--Schur indicators for twisted Real representation theory and two dimensional unoriented topological field theory](https://arxiv.org/abs/2310.03566v1)

### Chern–Simons characters replace global potentials

**Remember:** The class evaluates even when no filling has been chosen.

*True by definition.* MSC 81T45 (Topological field theories in quantum mechanics), 81T13. arXiv hep-th, math-ph. Level 4: research.

**Definition.** For a compact gauge group, fix an integral degree-four characteristic class and its curvature polynomial. Its differential character gives each bundle with connection an additive phase in ℝ/ℤ on smooth three-cycles. On the boundary of a smooth four-chain, the phase is the integral of the curvature polynomial over that chain, modulo integers.

**Problem.** On any closed oriented three-manifold this lift defines a Chern–Simons phase, even for a nontrivial bundle. If the bundle and connection extend over an oriented filling, integrating the curvature polynomial there gives the same phase modulo integers.

**How the definition helps.** Evaluation on a fundamental cycle replaces the integral of a global gauge potential (our own argument). Two fundamental cycles differ by a boundary inside the three-manifold, where the curvature four-form vanishes, and the boundary rule gives the filling formula. Theorem 22 constructs the natural lift.

**Paper or page:** [Bordism for the 2-group symmetries of the heterotic and CHL strings](https://arxiv.org/abs/2304.14764v1). It says: “if char: Ĥ∗(–; ℤ) → H∗(–; ℤ) denotes the characteristic class map, then char(č ∘ f) = c(P)”

**Sources:**

- [Arun Debray, Bordism for the 2-group symmetries of the heterotic and CHL strings](https://doi.org/10.1090/conm/802/16079)
- [Alan L. Carey, Stuart Johnson, Michael K. Murray, Danny Stevenson and Bai-Ling Wang, Bundle gerbes for Chern–Simons and Wess–Zumino–Witten theories](https://doi.org/10.1007/s00220-005-1376-8)

### Crosscap squares obstruct unoriented extensions

**Remember:** Two crosscaps must equal the handle with one reversed circle.

*Rules out counterexamples.* MSC 81T45 (Topological field theories in quantum mechanics). arXiv math.QA. Level 4: research.

**Definition.** An unoriented Frobenius algebra is a commutative unital finite-dimensional complex algebra with a nondegenerate trace ε, plus a trace-preserving algebra involution p and a Möbius band state Q. It requires p(Qa) = Qa for every a. It also requires the crosscap condition Q² = ∑ᵢ p(aⁱ)aᵢ for trace-dual bases: two crosscaps equal a handle with one reversed circle.

**Problem.** The oriented theory of ℂ\[x\] modulo x² with trace ε(1) = 0 and ε(x) = 1 has no unoriented extension.

**How the definition helps.** The crosscap condition has no solution in this algebra (our own calculation). Here p preserves the line ℂx and the trace, so p(x) = x, and the dual bases (1,x) and (x,1) give Q² = 2x. A square equal to 2x needs zero constant term, but then it is zero.

**Paper or page:** [Frobenius--Schur indicators for twisted Real representation theory and two dimensional unoriented topological field theory](https://arxiv.org/abs/2310.03566v1). It says: “the equality Q² = ∑ᵢ p(aⁱ) aᵢ holds.”

**Sources:**

- [Frobenius--Schur indicators for twisted Real representation theory and two dimensional unoriented topological field theory](https://arxiv.org/abs/2310.03566v1)

### Cup products polarize abelian Chern–Simons

**Remember:** The action is a square, so cross terms come in pairs.

*True by definition.* MSC 81T45 (Topological field theories in quantum mechanics), 81T13. arXiv hep-th, math-ph. Level 4: research.

**Definition.** On a closed oriented three-manifold, the level-two abelian Chern–Simons action S(x) integrates the cup square x ∪ x modulo integers. Here x is a degree-two differential class, such as a circle bundle with connection. The cup product of differential classes is bilinear and commutative in even degree.

**Problem.** For fields x and y, S(x+y) − S(x) − S(y) equals twice the integral of x ∪ y modulo integers.

**How the definition helps.** Expanding (x+y) ∪ (x+y) by bilinearity leaves the mixed terms x ∪ y and y ∪ x, which are equal in even degree. So S(x+y) − S(x) − S(y) is twice ∫ x ∪ y. The differential product extends the formula ∫ A ∧ dA, which needs a global potential A, to nontrivial bundles (our own).

**nLab:** [higher dimensional Chern-Simons theory](https://ncatlab.org/nlab/show/higher+dimensional+Chern-Simons+theory). It says: “the above action functional may be regarded as a quadratic form on the cohomology group”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants](https://doi.org/10.1007/bfb0075216)
- [Michael J. Hopkins and Isadore M. Singer, Quadratic functions in geometry, topology, and M-theory](https://doi.org/10.4310/jdg/1143642908)

### Dual lines glue Chern–Simons actions

**Remember:** Flip the boundary to get the dual line, then pair.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T45 (Topological field theories in quantum mechanics), 81T13. arXiv math-ph, math.DG. Level 4: research.

**Definition.** In level-one SU(2) Chern–Simons theory, a boundary connection determines a complex line. The exponentiated action of a compact oriented three-manifold with that boundary is a vector in this line. Reversing the boundary orientation gives the dual line, so the two sides of a cut carry vectors that pair to a number.

**Problem.** Cut a closed oriented three-manifold along a separating closed oriented surface and restrict a smooth connection to both pieces. Pairing their two action vectors gives the exponentiated action on the closed manifold.

**How the definition helps.** Gluing pairs the two vectors, and the pairing of a line with its dual needs no boundary frame (our own). With one frame on both sides, the action integrals add, so their exponentials multiply (our own). Freed’s boundary transformation law shows that a change of frame gives inverse factors on the two sides.

**nLab:** [Chern-Simons theory](https://ncatlab.org/nlab/show/Chern-Simons+theory). It says: “take advantage of the higher gluing laws in order to compute geometric quantities.”

**Sources:**

- [Daniel S. Freed, Classical Chern-Simons Theory, 1](https://doi.org/10.1006/aima.1995.1039)

### Flat Chern–Simons detects torsion linking

**Remember:** Zero curvature, yet loop phases still link.

*True by definition. Confidence: medium.* MSC 81T45 (Topological field theories in quantum mechanics), 81T13. arXiv hep-th, math-ph. Level 4: research.

**Definition.** The mixed abelian Chern–Simons action of two flat circle connections on a closed oriented three-manifold integrates their differential cup product modulo integers. A flat connection has zero curvature but still has loop phases, a class in H¹(M; ℝ/ℤ) whose connecting-map image is its torsion first Chern class.

**Problem.** The mixed action equals the torsion linking pairing of the two first Chern classes, the finite-order integral classes of the bundles.

**How the definition helps.** For flat fields the differential product reduces to the cup product of one field’s loop-phase class with the other bundle’s first Chern class (our own). Integrating that product is the torsion linking pairing, with the convention that the connecting map sends loop phases to first Chern classes (our own). Another lift adds a real class, whose product with a torsion class vanishes (our own).

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “information beyond the curvature characteristic form which represents the underlying characteristic class in de Rham cohomology”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants](https://doi.org/10.1007/bfb0075216)
- [Michael J. Hopkins and Isadore M. Singer, Quadratic functions in geometry, topology, and M-theory](https://doi.org/10.4310/jdg/1143642908)

### Spin fillings allow odd Chern–Simons levels

**Remember:** On spin four-manifolds every square is even, so halves are safe.

*Rules out counterexamples.* MSC 81T45 (Topological field theories in quantum mechanics), 81T13. arXiv hep-th, math-ph. Level 4: research.

**Definition.** A spin filling of a closed spin three-manifold is a compact spin four-manifold it bounds, with the spin structure, line bundle and connection extended. At integer level k the action integrates kF ∧ F/2 over it modulo integers, with F the curvature normalized to represent the first Chern class. Spin matters because on a closed spin four-manifold every integral square is even.

**Problem.** For a closed spin three-manifold with a circle connection, this action exists and is independent of the spin filling. Allowing arbitrary oriented fillings destroys independence at odd levels.

**How the definition helps.** Two spin fillings glue to a closed spin four-manifold, so by the Wu formula their actions differ by k/2 times an even integer. The quoted bordism calculation guarantees a filling that carries the line bundle. In our own counterexample, adjoining the complex projective plane with its generator line changes the action by k/2.

**nLab:** [abelian Chern-Simons theory](https://ncatlab.org/nlab/show/abelian+Chern-Simons+theory). It says: “the cobordism ring for spin manifolds equipped with complex line bundles is trivial in degree 3”

**Sources:**

- [Robbert Dijkgraaf and Edward Witten, Topological gauge theories and group cohomology, section 5](https://doi.org/10.1007/BF02096988)

### The pentagon governs tetrahedron moves

**Remember:** Each tetrahedron is one rebracketing, and the pentagon relates the moves.

*Makes the theorem clean to state or prove.* MSC 81T45 (Topological field theories in quantum mechanics). arXiv math.QA. Level 4: research.

**Definition.** The Turaev–Viro weight of a tetrahedron is a matrix coefficient of the associator, the map that rebrackets a triple tensor product. The category is spherical fusion over ℂ, with finitely many simple labels, duals and equal left and right traces. Trace pairings on triangle spaces normalize the weights.

**Problem.** Fix the labels and face data on the boundary of a bipyramid in the Turaev–Viro state sum. The two-tetrahedron contraction equals the three-tetrahedron contraction summed over the new edge label with its quantum dimension.

**How the definition helps.** The pentagon identity equates the two ways of rebracketing four tensor factors, and these two routes are the two- and three-tetrahedron contractions (our own). Summing over intermediate labels is matrix multiplication, and the trace pairings give the quantum dimension on the new edge (our own).

**nLab:** [Turaev-Viro model](https://ncatlab.org/nlab/show/Turaev-Viro+model). It says: “is a 3d TQFT construction induced from a spherical category/fusion category C.”

**Sources:**

- [Barrett and Westbury, Invariants of piecewise-linear 3-manifolds](https://doi.org/10.1090/S0002-9947-96-01660-1)

### Unitary surface theories exclude nilpotents

**Remember:** Adjoints of multiplications are multiplications, so nilpotents are normal and vanish.

*Rules out counterexamples.* MSC 81T45 (Topological field theories in quantum mechanics). arXiv math.QA. Level 4: research.

**Definition.** A unitary oriented surface theory assigns finite-dimensional complex Hilbert spaces to closed curves and linear maps to surfaces, and reversing a surface gives the adjoint. Multiplication on the circle space comes from a pair of pants, so the adjoint of a multiplication operator is again a multiplication operator (our own).

**Problem.** The circle algebra of a unitary oriented surface theory has no nonzero nilpotent element, an element some power of which is zero.

**How the definition helps.** A nilpotent a gives a nilpotent multiplication operator, which is normal because its adjoint is a multiplication and the algebra is commutative (our own). A normal nilpotent operator is zero by the spectral theorem. Applying it to the unit gives a = 0 (our own).

**nLab:** [unitary functorial field theory](https://ncatlab.org/nlab/show/unitary+functorial+field+theory). It says: “is called "unitary" if it is a dagger functor.”

**Sources:**

- [Zhu, The Hermitian axiom on two-dimensional topological quantum field theories](https://doi.org/10.1063/5.0121440)

### Wu lifts repair half-squares

**Remember:** Subtract the characteristic product so the square turns even, then halve.

*Rules out counterexamples.* MSC 81T45 (Topological field theories in quantum mechanics), 81T13. arXiv hep-th, math-ph. Level 4: research.

**Definition.** On a closed oriented eight-manifold, a characteristic lift λ is an integral degree-four class that reduces modulo two to the fourth Wu class. Then λ detects the parity of squares: ∫ x² ≡ ∫ x ∪ λ modulo two for every integral degree-four class x.

**Problem.** For the seven-dimensional abelian Chern–Simons action, integrating (x² − x ∪ λ)/2 gives the same value modulo integers on compatible fillings. The fillings must glue to a closed oriented eight-manifold carrying the indicated classes and characteristic lift.

**How the definition helps.** The parity rule makes ∫ (x² − x ∪ λ) even on the glued closed manifold, so the two corrected half-integrals differ by an integer. In our own example, a generator on the quaternionic projective plane squares to one, so the uncorrected half-square changes by a half. Constructing an action for fields without chosen fillings takes a separate theorem.

**nLab:** [higher dimensional Chern-Simons theory](https://ncatlab.org/nlab/show/higher+dimensional+Chern-Simons+theory). It says: “the degree-4 Wu class (for k = 1) is refined by the first fractional Pontryagin class”

**Sources:**

- [Michael J. Hopkins and Isadore M. Singer, Quadratic functions in geometry, topology, and M-theory](https://doi.org/10.4310/jdg/1143642908)
- [Samuel Monnier, Topological field theories on manifolds with Wu structures](https://doi.org/10.1142/s0129055x17500155)

### Differential lifts give the Green–Schwarz identity

**Remember:** H trivializes the anomaly field, so dH equals its curvature.

*True by definition.* MSC 81T50 (Anomalies in quantum field theory). arXiv hep-th, math-ph. Level 4: research.

**Definition.** A twisted differential string structure identifies two degree-four fields with connection. One is the difference of the spin and gauge characteristic classes with connection. The other is the trivial field of a global three-form H, whose curvature is dH.

**Problem.** For the heterotic string twist ½p₁ − c₂, the lift gives dH = ½p₁(∇) − c₂(A). The right side uses the normalized Pontryagin and Chern forms of the spin and gauge connections.

**How the definition helps.** Identified fields have equal curvature, which here is the equation dH = ½p₁(∇) − c₂(A). In our own comparison, this recovers the Green–Schwarz equation from a lift that also records integral topology. Constructing the characteristic classes with connection takes separate work.

**Paper or page:** [Bordism for the 2-group symmetries of the heterotic and CHL strings](https://arxiv.org/abs/2304.14764v1). It says: “induces a form H ∈ Ω³(U) such that H and Θ satisfy the twisted Bianchi identity”

**Sources:**

- [Arun Debray, Bordism for the 2-group symmetries of the heterotic and CHL strings](https://doi.org/10.1090/conm/802/16079)
- [Hisham Sati, Urs Schreiber and Jim Stasheff, Twisted differential String and Fivebrane structures](https://doi.org/10.1007/s00220-012-1510-3)

### Flat anomaly lines can change sign

**Remember:** A flat line can still flip sign around a loop.

*Makes the theorem clean to state or prove.* MSC 81T50 (Anomalies in quantum field theory). arXiv hep-th, math-ph. Level 4: research.

**Definition.** A flat real Pfaffian line over gauge fields modulo gauge transformations can still have sign holonomy. Transport around a based loop acts on the base fiber by +1 or −1. Flatness makes this sign depend only on the loop’s homotopy class, so it survives when the local anomaly vanishes.

**Problem.** For one four-dimensional Weyl fermion in the defining SU(2) representation, the flat Pfaffian line has transport −1 around a gauge loop on the four-sphere. The loop closes by a gauge transformation in the nonidentity component.

**How the definition helps.** Flatness removes the local anomaly but leaves this sign as a global invariant that transport can measure. In our own explanation, the two gauge components match the two homotopy classes of maps from the four-sphere to SU(2). Witten computes the sign from the parity of the spectral crossings along the path.

**Wikipedia:** [Anomaly (physics)](https://en.wikipedia.org/wiki/Anomaly_%28physics%29). It says: “the actions of gauge symmetries in the identity component and the disconnected component of the gauge group on a physical state differ by a sign.”

**Sources:**

- [Edward Witten, An SU(2) anomaly](https://doi.org/10.1016/0370-2693(82)90728-6)
- [Xianzhe Dai and Daniel S. Freed, Eta-invariants and determinant lines](https://doi.org/10.1063/1.530747)

### Integral trivializations catch hidden Green–Schwarz obstructions

**Remember:** Exact curvature does not kill torsion.

*Rules out counterexamples.* MSC 81T50 (Anomalies in quantum field theory). arXiv hep-th, math-ph. Level 4: research.

**Definition.** A geometric Green–Schwarz trivialization writes ½p₁ − c₂, the difference of the spin and gauge characteristic fields, as the field of one global three-form. A field that comes from a global form has zero integral characteristic class, so torsion blocks it even when the curvature is exact.

**Problem.** A nonzero finite-order class ½p₁ − c₂ obstructs a Green–Schwarz trivialization even when its curvature form is exact.

**How the definition helps.** A field with a nonzero integral class comes from no global three-form, whatever its curvature. Our own example: on L(3,1) × S² with degree-two generators a, b, a line of class a+b plus its inverse has c₂ = −2ab. This class has order three, and the stably trivial tangent bundle has zero spin class, so only this torsion remains.

**nLab:** [differential string structure](https://ncatlab.org/nlab/show/differential+string+structure). It says: “as the homotopy fiber of the difference of differential cocycles”

**Sources:**

- [Hisham Sati, Urs Schreiber and Jim Stasheff, Twisted differential String and Fivebrane structures](https://doi.org/10.1007/s00220-012-1510-3)

### One generator tests global anomalies

**Remember:** On a cyclic group, one value decides the character.

*Makes the theorem clean to state or prove.* MSC 81T50 (Anomalies in quantum field theory), 57R56. arXiv math-ph. Level 4: research.

**Definition.** Let G be the quotient of Spin × SU(8) by the subgroup generated by (−1, −I). A bordism character is a homomorphism to U(1) from five-dimensional G-bordism, where closed G-manifolds are bordant if their oriented difference bounds a compact G-manifold.

**Problem.** Give the Wu manifold SU(3)/SO(3) the G-structure constructed by Debray and Yu. A character of five-dimensional G-bordism is trivial exactly when its value on this manifold is one.

**How the definition helps.** In our own argument, a homomorphism on a cyclic group is trivial exactly when it sends a generator to one. Debray and Yu compute the group as ℤ/2 and identify the indicated Wu manifold as its generator.

**Paper or page:** [What bordism-theoretic anomaly cancellation can do for U](https://arxiv.org/abs/2210.04911v2). It says: “In this group, the anomaly field theory of 4d 𝒩 = 8 supergravity is trivial.”

**Sources:**

- [Arun Debray and Matthew Yu, What Bordism-Theoretic Anomaly Cancellation Can Do for U (2024)](https://link.springer.com/article/10.1007/s00220-024-04937-4)

### Shifted flux allows half periods

**Remember:** Flux plus half of λ is always an integer.

*Rules out counterexamples.* MSC 81T50 (Anomalies in quantum field theory), 81T30. arXiv hep-th, math-ph. Level 4: research.

**Definition.** In M-theory, the C-field flux is a four-form G on spin spacetime with a shifted class. The class \[G\] + λ/2 is integral, where λ = p₁/2 is the integral spin characteristic class. So on each closed four-cycle the flux is an integer minus half the value of λ.

**Problem.** On every closed four-cycle, the C-field flux is integral when λ evaluates evenly and half-integral when it evaluates oddly.

**How the definition helps.** The shift fixes the fractional part of the flux on each cycle to half the value of λ, modulo integers. In our own example, λ is ±1 on the quaternionic projective line in ℍP², so ℍP² × S³ needs half-integral flux through that line. Witten derives the shift from cancellation of the membrane anomaly.

**nLab:** [shifted C-field flux quantization](https://ncatlab.org/nlab/show/shifted+C-field+flux+quantization). It says: “becomes integral after shifted by one quarter of the first Pontryagin class”

**Sources:**

- [Edward Witten, On flux quantization in M-theory and the effective action](https://doi.org/10.1016/s0393-0440(96)00042-3)
- [Michael J. Hopkins and Isadore M. Singer, Quadratic functions in geometry, topology, and M-theory](https://doi.org/10.4310/jdg/1143642908)

### Twisted spin lifts test brane anomalies

**Remember:** The brane’s spinᶜ obstruction must match the B-field.

*Rules out counterexamples.* MSC 81T50 (Anomalies in quantum field theory). arXiv hep-th, math-ph. Level 4: research.

**Definition.** On an oriented brane M, a topological B-twisted spinᶜ structure identifies the gerbe obstructing a spinᶜ lift of TM with the restricted B-field gerbe. Such an identification exists exactly when their integral degree-three classes agree: W₃, the integral Bockstein of w₂(TM), and the restricted B-field class.

**Problem.** A single boundary gauge line passes the topological Freed–Witten anomaly test exactly when W₃ plus the restricted integral B-field class vanishes.

**How the definition helps.** Since 2W₃ = 0, agreement of the two classes is the same as W₃ plus the B-field class vanishing. In our own example, the Wu manifold SU(3)/SO(3) has nonzero W₃ and fails the test with zero B-field. Freed and Witten identify this obstruction with the open-string anomaly.

**nLab:** [twisted spinᶜ structure](https://ncatlab.org/nlab/show/twisted+spin%E1%B6%9C+structure). It says: “Twisted spinᶜ-structures appear similarly as the conditions for the analogous quantum anomaly cancellation, but now of the open type II superstring ending on a D-brane.”

**Sources:**

- [Daniel S. Freed and Edward Witten, Anomalies in string theory with D-branes](https://doi.org/10.4310/ajm.1999.v3.n4.a6)

### Boundary obstructions live in degree two

**Remember:** Square a degree-one charge and the error has degree two.

*Makes the theorem clean to state or prove.* MSC 81T70 (Quantization in field theory; cohomological methods), 81T50. arXiv math-ph. Level 4: research.

**Definition.** Let S be the degree-one charge of an exact degree-zero boundary symplectic structure, with {S,S} = 0, and let Q = {S, ·}. Degree-two local cohomology is the degree-two local boundary functionals killed by Q, modulo Q of degree-one ones. The terms divided out are exactly the changes that a local correction of the charge makes (our own).

**Problem.** At each order in perturbative quantization of this boundary charge, the obstruction defines a degree-two local cohomology class. The charge extends through that order exactly when this class vanishes.

**How the definition helps.** The obstruction is the first uncancelled coefficient of the square of the quantum charge, so it has degree two (our own). The graded Jacobi identity makes it Q-closed, and a local correction changes it by a Q-exact term (our own). The boundary quantization theorem supplies the local obstruction complex (our own).

**Paper or page:** [On Quantum Obstruction Spaces and Higher Codimension Gauge Theories](https://arxiv.org/abs/2008.08477v3). It says: “The obstruction space for quantization on the underlying boundary BFV manifold”

**Sources:**

- [Nima Moshayedi, On Quantum Obstruction Spaces and Higher Codimension Gauge Theories](https://arxiv.org/abs/2008.08477v3)

### BRST cohomology detects quantum obstructions

**Remember:** Counterterms change the anomaly by exact terms, so test its class.

*Makes the theorem clean to state or prove.* MSC 81T70 (Quantization in field theory; cohomological methods), 81T50. arXiv math-ph. Level 4: research.

**Definition.** Let S be a degree-zero classical Batalin–Vilkovisky action with {S,S} = 0 for the odd Poisson bracket, and let Q = {S, ·}. Degree-one BRST cohomology is the degree-one local functionals killed by Q, modulo Q of degree-zero ones. The terms divided out are exactly the changes that a local counterterm makes (our own).

**Problem.** In perturbative Batalin–Vilkovisky quantization, an order-by-order local obstruction lies in degree-one BRST cohomology. A zero class lets a local counterterm remove the obstruction at that order.

**How the definition helps.** A counterterm changes the obstruction by a Q-exact term, so the obstruction is removable exactly when its class is zero (our own). The work is to prove that the obstruction is Q-closed and local (our own).

**Paper or page:** [On Quantum Obstruction Spaces and Higher Codimension Gauge Theories](https://arxiv.org/abs/2008.08477v3). It says: “The obstruction space for a BV theory to be quantizable is given by”

**Sources:**

- [Nima Moshayedi, On Quantum Obstruction Spaces and Higher Codimension Gauge Theories](https://arxiv.org/abs/2008.08477v3)

### Closed half-densities permit gauge changes

**Remember:** Moving the integration surface changes a closed integrand by an exact one.

*Makes the theorem clean to state or prove.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** A half-density σ is closed when Δσ = 0, where Δ is the canonical operator that sums mixed derivatives in standard paired coordinates. A half-density scales by the square root of the volume change. So it integrates over each oriented Lagrangian, a submanifold equal to its own orthogonal complement for the odd symplectic form.

**Problem.** The integral of a closed half-density stays constant along a smooth Hamiltonian deformation of a compact oriented Lagrangian without boundary. A Hamiltonian deformation moves the surface by the vector field of a generating function.

**How the definition helps.** For closed σ, a Hamiltonian move of the Lagrangian changes the integrand by a Δ-exact term, whose integral vanishes by the Batalin–Vilkovisky Stokes theorem (our own). This uses the identity that Hamiltonian differentiation is the graded commutator of Δ with multiplication by the generator, up to sign (our own).

**Paper or page:** [The canonical BV Laplacian on half-densities](https://arxiv.org/abs/2212.00451v2). It says: “If Δσ = 0 and ℒₜ is a smooth family of Lagrangian submanifolds of ℳ”

**Sources:**

- [Alberto S. Cattaneo, The canonical BV Laplacian on half-densities](https://arxiv.org/abs/2212.00451v2)

### Cumulants make derived morphisms compose

**Remember:** The n-input cumulant carries at least n − 1 factors of t.

*True by definition.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math.QA, math-ph. Level 4: research.

**Definition.** Take a degree-zero unital linear map, commuting with the differentials, between derived Batalin–Vilkovisky algebras over formal power series in t over a characteristic-zero field. Its cumulants are defined recursively: its value on each product is the sum over partitions of the inputs of graded-signed products of block cumulants. The map is a morphism when its n-input cumulant is divisible by tⁿ⁻¹ for every n ≥ 1.

**Problem.** The composite of two derived Batalin–Vilkovisky morphisms is again such a morphism.

**How the definition helps.** Under composition the t-exponents add up to n − 1 (our own). A partition into k blocks has inner exponents totaling n − k and outer exponent k − 1 (our own). The partition formula for the cumulants of a composite supplies the substantive identity (our own).

**Paper or page:** [Cumulants, Koszul brackets and homological perturbation theory for commutative BV∞ and IBL∞ algebras](https://arxiv.org/abs/2012.14812v1). It says: “the composition gf: A\[\[t\]\] → C\[\[t\]\] is a morphism of derived BV algebras.”

**Sources:**

- [Ruggero Bandiera, Cumulants, Koszul brackets and homological perturbation theory for commutative BV∞ and IBL∞ algebras](https://arxiv.org/abs/2012.14812v1)

### Disk insertions give commutative multiplication

**Remember:** Disks can swap places in the plane, so the product commutes.

*Makes the theorem clean to state or prove.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math.QA, math-ph. Level 4: research.

**Definition.** A unital prefactorization algebra assigns a vector space to each open and a multilinear map to each finite disjoint family of opens inside a larger one. These maps respect identities, permutations, nesting and empty families. It is locally constant when each disk inclusion into a disk, or into the plane, is an isomorphism, so any small disk carries the plane value.

**Problem.** The plane value of a locally constant prefactorization algebra in complex vector spaces is a unital commutative algebra.

**How the definition helps.** Transporting two plane values into disjoint disks and inserting them into the plane gives a product, independent of placement by local constancy (our own). So the disks can swap places, giving commutativity, while three-disk insertions give associativity and the empty insertion gives the unit (our own).

**Paper or page:** [A note on vertex algebras and Costello-Gwilliam factorization algebras](https://arxiv.org/abs/2408.00412v2). It says: “the linear space F(ℂ) has the structure of commutative algebra as follows”

**Sources:**

- [Yusuke Nishinaka, A note on vertex algebras and Costello-Gwilliam factorization algebras](https://arxiv.org/abs/2408.00412v2)

### Exact half-densities integrate to zero

**Remember:** An exact half-density restricts to a total derivative.

*Makes the theorem clean to state or prove.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** On an odd symplectic manifold, a half-density σ is exact if σ = Δτ, where Δ sums mixed even–odd derivatives in paired Darboux coordinates. A half-density scales by the square root of the Berezinian, so it gives an integration density on each oriented Lagrangian.

**Problem.** Let L be an oriented Lagrangian without boundary in an odd symplectic manifold. If τ has compact support meeting L in a compact set, the integral of Δτ over L vanishes.

**How the definition helps.** In coordinates adapted to L, Δτ restricts to a sum of compactly supported total derivatives, so integration by parts makes its integral vanish (our own). Passing from these local integrals to the intrinsic statement gives the Batalin–Vilkovisky Stokes theorem (our own).

**Paper or page:** [The canonical BV Laplacian on half-densities](https://arxiv.org/abs/2212.00451v2). It says: “If σ = Δτ for some τ, then ∫ℒ σ = 0”

**Sources:**

- [Alberto S. Cattaneo, The canonical BV Laplacian on half-densities](https://arxiv.org/abs/2212.00451v2)

### Exact shifts preserve master actions

**Remember:** An exact change of a closed weight stays closed.

*True by definition.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** Write the quantum master equation as ΔW = 0 for the weight W = exp(iS/ħ) of an even action S, where Δ is odd and Δ² = 0. An exact shift changes S by δS = W⁻¹Δ(FW) for odd F, with an overall scalar absorbed into F. To first order it adds a multiple of Δ(FW) to W (our own).

**Problem.** If ΔW = 0, replacing S by S + εδS preserves the quantum master equation modulo ε².

**How the definition helps.** The shift adds a Δ-exact term to W, and Δ² = 0 makes Δ of that term zero (our own). Constructing Δ on functionals and proving Δ² = 0 is separate work (our own).

**Paper or page:** [The geometry of variations in Batalin-Vilkovisky formalism](https://arxiv.org/abs/1312.1262v1). It says: “the infinitesimal shift of the functional”

**Sources:**

- [Arthemy V. Kiselev, The geometry of variations in Batalin-Vilkovisky formalism](https://arxiv.org/abs/1312.1262v1)

### Factorization algebras localize quantum defects

**Remember:** Change the gluing at the defect, not the bulk away from it.

*Makes the theorem clean to state or prove.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** A defect along D in M is a factorization algebra on M with an isomorphism to the original algebra on M ∖ D. Such an algebra combines observables from disjoint opens and glues over covers that contain each finite subset in one member.

**Problem.** Consider a classical Batalin–Vilkovisky theory that locally uses differential forms with the exterior derivative in the directions normal to D. If its local boundary condition admits Batalin–Vilkovisky quantization, the resulting quantum observables form a defect along D.

**How the definition helps.** The definition packages agreement of all observable operations away from D into one restriction isomorphism (our own). Constructing the algebra from a quantized boundary condition and proving that its observables glue are the substantive steps (our own).

**Paper or page:** [Defects via Factorization Algebras](https://arxiv.org/abs/2208.01730v1). It says: “the quantum bulk-boundary system determines a factorization algebra”

**Sources:**

- [Ivan Contreras, Chris Elliott, Owen Gwilliam, Defects via Factorization Algebras](https://arxiv.org/abs/2208.01730v1)

### Fiber integrals preserve master solutions

**Remember:** Integrate a closed weight and get a closed weight.

*True by definition.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** On a product X × Y of odd symplectic manifolds, the fiber integral integrates a half-density’s Y factor over an oriented Lagrangian L in Y. A solution of the linear master equation is a half-density σ with Δσ = 0. Here Δ sums mixed even–odd derivatives in paired Darboux coordinates, so on the product it splits as Δ<sub>X</sub> + Δ<sub>Y</sub> (our own).

**Problem.** Let L be compact and without boundary. Integrating a smooth solution over L gives a half-density on X that solves the linear master equation there.

**How the definition helps.** Δ<sub>X</sub> passes through the integral over L, and the integral of the Δ<sub>Y</sub> term vanishes by the Batalin–Vilkovisky Stokes theorem (our own). So the fiber integral of Δσ is Δ<sub>X</sub> of the fiber integral, and solutions go to solutions (our own).

**Paper or page:** [BV Quantization](https://arxiv.org/abs/2307.07761v1). It says: “The BV fiber integral descends to a map”

**Sources:**

- [Alberto S. Cattaneo, Pavel Mnev, Michele Schiavina, BV Quantization](https://arxiv.org/abs/2307.07761v1)

### Finite subsets determine factorization gluing

**Remember:** Glue where whole finite configurations fit.

*Rules out counterexamples.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** A Weiss cover of U is a cover in which each finite subset of U lies in a single member. A vector-space factorization algebra F combines inputs from disjoint opens and glues across Weiss covers. Gluing takes the direct sum of the cover values and identifies images from pairwise overlaps.

**Problem.** Let B be an open basis whose members inside each open U form a Weiss cover of U. The canonical map from their colimit to F(U) is an isomorphism. This colimit identifies vectors with their images under inclusions between basis members.

**How the definition helps.** The basis members inside U form a Weiss cover, so gluing over it and the cosheaf basis theorem compute F(U) as their colimit (our own). An ordinary cover would fail: two disjoint intervals cover their union but miss configurations with one point in each (our own).

**Paper or page:** [A note on vertex algebras and Costello-Gwilliam factorization algebras](https://arxiv.org/abs/2408.00412v2). It says: “the family B(U) is a Weiss cover of U.”

**Sources:**

- [Yusuke Nishinaka, A note on vertex algebras and Costello-Gwilliam factorization algebras](https://arxiv.org/abs/2408.00412v2)

### Half-densities give a square-zero Laplacian

**Remember:** Odd derivatives anticommute, so their mixed sum squares to zero.

*Rules out counterexamples.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math-ph. Level 4: research.

**Definition.** Take local coordinates pairing each even xᵢ with an odd θᵢ in the standard odd symplectic form. On the coefficient of a half-density, which scales by the square root of the volume change, Δ is the sum of the mixed derivatives ∂²/∂xᵢ∂θᵢ.

**Problem.** The canonical Batalin–Vilkovisky operator squares to zero on half-densities.

**How the definition helps.** The odd derivatives ∂/∂θᵢ anticommute and square to zero, so the square of the mixed sum vanishes (our own). The coordinate-independence theorem makes this a global operator on half-densities. Our own counterexample: on functions with volume exp(x₁θ₁θ₂) times the coordinate volume, half the Hamiltonian divergence squares to a nonzero multiple of ∂/∂x₂.

**Paper or page:** [The canonical BV Laplacian on half-densities](https://arxiv.org/abs/2212.00451v2). It says: “There is a canonical BV operator Δ acting on half-densities”

**Sources:**

- [Alberto S. Cattaneo, The canonical BV Laplacian on half-densities](https://arxiv.org/abs/2212.00451v2)

### Logarithms leave only connected graphs

**Remember:** Take the logarithm to discard disconnected unions.

*True by definition.* MSC 81T70 (Quantization in field theory; cohomological methods). arXiv math.QA, math-ph. Level 4: research.

**Definition.** Fix a finite-dimensional Batalin–Vilkovisky complex with a contraction onto homology, and let ⟨·⟩ be normalized formal Gaussian integration over the complementary variables. For a stable quantum master interaction m, the transferred interaction is ħ log ⟨exp(m/ħ)⟩. Stable means each genus-g vertex with n ends has 2g − 2 + n &gt; 0.

**Problem.** The transferred interaction equals the sum over connected stable graphs G of the Gaussian contraction for G divided by the order of its automorphism group.

**How the definition helps.** The integral ⟨exp(m/ħ)⟩ is a sum over all stable graphs, and its logarithm keeps only the connected ones (our own). Contraction weights multiply over components, and the exponential formula leaves each connected graph with its own symmetry factor (our own). The formal integration theorem supplies the individual graph weights (our own).

**Paper or page:** [Homotopy transfer for L-infinity structures and the BV-formalism](https://arxiv.org/abs/2408.12461v1). It says: “the combinatorial sum over connected stable graphs”

**Sources:**

- [James Maunder, Homotopy transfer for L-infinity structures and the BV-formalism](https://arxiv.org/abs/2408.12461v1)

### The master action gives a differential

**Remember:** Bracket with a self-commuting action, and twice gives zero.

*True by definition.* MSC 81T70 (Quantization in field theory; cohomological methods), 81T13. arXiv hep-th, math-ph. Level 4: research.

**Definition.** Take a real or complex graded algebra of classical observables with a degree-one odd Poisson bracket, and a degree-zero action S with {S,S} = 0. For every observable f, define df = {S,f}.

**Problem.** The differential squares to zero on the graded algebra of classical observables.

**How the definition helps.** The graded Jacobi identity gives d²f = {{S,S},f}/2, which vanishes by the master equation (our own). So one identity for the action replaces a check on each observable (our own).

**nLab:** [quantum master equation](https://ncatlab.org/nlab/show/quantum+master+equation). It says: “the classical master equation expresses the nilpotency of the BV-differential before quantization”

**Sources:**

- [Igor Batalin and Grigori Vilkovisky, Gauge algebra and quantization (1981)](https://doi.org/10.1016/0370-2693(81)90205-7)
