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

### Fidelity as the best purification overlap cannot decrease under quantum channels

**Remember:** Keep the channel's environment and the overlap stays the same.

*True by definition. Confidence: medium.* MSC 81P47 (Quantum channels, fidelity). arXiv quant-ph. Level 3: graduate.

**Definition.** Define the root fidelity of two states as the largest absolute inner product of two purifications. A purification is a pure state on a larger system that reduces to the given state. The matrix formula is the sum of the singular values of the product of the two positive square roots.

**Problem.** A quantum channel between finite-dimensional systems cannot decrease the fidelity of two states.

**How the definition helps.** With the purification definition, take two purifications that attain the maximum. Apply an isometry that models the channel together with its environment. The results purify the output states and have the same inner product, so the output fidelity is at least as large. The work goes into Uhlmann's theorem, which links this definition to the matrix formula, and Stinespring's theorem, which gives the isometry. The proof is our own.

**Wikipedia:** [Fidelity of quantum states](https://en.wikipedia.org/wiki/Fidelity_of_quantum_states). It says: “the fidelity is the maximum overlap between purifications.”

**Sources:**

- [Armin Uhlmann, The Transition Probability in the State Space of a ∗-Algebra (1976)](https://doi.org/10.1016/0034-4877(76)90060-4)

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

### Codes defined by stabilizers detect every error that anticommutes with one

**Remember:** An anticommuting error flips the sign of a check.

*True by definition.* MSC 81P73 (Computational stability and error-correcting codes for quantum computation and communication processing), 81P70. arXiv quant-ph, cs.IT. Level 3: graduate.

**Definition.** Define a stabilizer code as the space of states fixed by every element of a commuting group of Pauli operators. Pauli operators are tensor products of the identity and the three Pauli matrices on single quantum bits. The older way to give a quantum code lists a basis of code states.

**Problem.** Let a Pauli error anticommute with some stabilizer element, so that swapping the two negates their product. Then the error sends the code space into a space orthogonal to it.

**How the definition helps.** With the stabilizer definition, each code state has eigenvalue +1 for each check. Moving the check past the error changes this eigenvalue to −1. Eigenspaces of a Hermitian operator for different eigenvalues are orthogonal, so measuring the check detects the error. From a list of basis states one would have to compute all the overlaps instead. The work goes into finding checks whose fixed space is the intended code. This detects the error but need not tell it apart from other errors. The comparison is our own.

**Wikipedia:** [Stabilizer code](https://en.wikipedia.org/wiki/Stabilizer_code). It says: “E\|ψ⟩ is in the −1-eigenspace of S rather than the +1-eigenspace”

**Sources:** none listed. No primary source with a working link was found.

### Antiunitary time reversal squaring to minus identity pairs energy eigenstates

**Remember:** Time reversal gives an orthogonal partner when its square negates every state.

*True by definition.* MSC 81Q10 (Selfadjoint operator theory in quantum theory, including spectral analysis), 81S05. arXiv quant-ph, math-ph. Level 3: graduate.

**Definition.** On state vectors, represent time reversal by an antiunitary map T, a conjugate-linear bijection with ⟨Tu, Tw⟩ = ⟨w, u⟩. This replaces the physical description of time reversal as reversing momenta and spins. The condition T² = −I, where I is the identity, is a separate assumption.

**Problem.** If the energy operator commutes with T and T² = −I, every finite-dimensional energy eigenspace has even dimension. Any eigenvector has an orthogonal partner at the same energy.

**How the definition helps.** The antiunitary definition gives ⟨T²v, Tv⟩ = ⟨v, Tv⟩, while T² = −I makes the left side its negative. Thus Tv is orthogonal to v. Commutation gives Tv the same energy as v. The orthogonal complement of the pair is also preserved by T, so the pairing continues (our own). For a physical system, the work lies in finding its time reversal operator and checking its square and commutation rule (our own).

**Wikipedia:** [Kramers' theorem](https://en.wikipedia.org/wiki/Kramers%27_theorem). It says: “If T : H → H is an antiunitary operator acting on a Hilbert space H satisfying T² = −1 and v a vector in H, then T v is orthogonal to v.”

**Sources:** none listed. No primary source with a working link was found.

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

### Perturbative AQFT uses power series and local nets, not a global C\*-algebra

**Remember:** Allow formal power series, and keep only the local algebras.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 81T05 (Axiomatic quantum field theory; operator algebras), 81T15, 81T20. arXiv math-ph, hep-th. Level 4: research.

**Definition.** Algebraic quantum field theory (AQFT) assigns an algebra of observables to each region of spacetime, and the Haag–Kastler axioms say how. Locally covariant perturbative AQFT uses these axioms, but it assigns to each causal region a formal power series star-algebra instead of a C\*-algebra. The power series are in Planck's constant and the coupling constant. The theory keeps the local net of algebras and does not ask for one global algebra.

**Problem.** Give a rigorous perturbative algebraic quantum field theory for realistic interacting theories. It should work in 4 dimensions, on curved spacetimes, and when infrared divergences are present.

**How the definition helps.** Formal power series and local nets ask for less, and causal perturbation theory can supply that much. As general background, not from the nLab page: with C\*-algebras, no interacting quantum field theory in dimension 4 is known, and constructing Yang–Mills theory is a Millennium Prize problem. With formal power series algebras, Epstein–Glaser causal perturbation theory produces causally local nets automatically. Only the local nets are asked for, not their would-be colimit. So the 'algebraic adiabatic limit', in which the interaction is switched on over all of spacetime, defines the observables even with infrared divergences. This does not construct a vacuum state (the weak adiabatic limit). It also does not solve the non-perturbative problem.

**nLab:** [perturbative algebraic quantum field theory](https://ncatlab.org/nlab/show/perturbative+algebraic+quantum+field+theory). It says: “considering these local nets instead of their would-be colimiting global algebra serves to define the perturbation theory even in the presence of infrared divergences”

**Sources:**

- [Romeo Brunetti, Klaus Fredenhagen, Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds, Commun. Math. Phys. 208 (2000) 623–661, arXiv:math-ph/9903028](https://arxiv.org/abs/math-ph/9903028)

### Causal perturbation theory makes causal factorization an axiom of the S-matrix

**Remember:** Interactions in separate regions give S-matrix factors that multiply in causal order.

*True by definition.* MSC 81T15 (Perturbative methods of renormalization applied to problems in quantum field theory). arXiv math-ph, hep-th. Level 4: research.

**Definition.** In causal perturbation theory, a perturbative S-matrix is a map S that satisfies a list of axioms. It sends local interaction terms to formal power series of observables. The key axiom is causal factorization: if the support of O₁ is not in the past of the support of O₂, then S(O₁ + O₂) = S(O₁) S(O₂). In words, the S-matrix of the sum is the product of the two S-matrices, in causal order.

**Problem.** Give a rigorous meaning to the perturbative S-matrix, which informal physics writes as a path integral. Prove that it factorizes over causally ordered regions.

**How the definition helps.** Causal perturbation theory puts causal factorization into the definition, so you do not have to derive it from a path integral. In the path integral picture, causal factorization would follow from properties of integrals and exponentials. But the path integral is not well defined. So causal perturbation theory takes causal factorization (equivalently, causal additivity) as an axiom. The real work then moves to an existence theorem: Epstein and Glaser construct solutions by induction. At each order they must extend a distribution, defined away from a point, to that point. This step is where renormalization happens, and the freedom in the extension is a finite-dimensional space of distributions supported at the point.

**nLab:** [A first idea of quantum field theory -- Interacting quantum fields](https://ncatlab.org/nlab/show/A+first+idea+of+quantum+field+theory+--+Interacting+quantum+fields), [causal perturbation theory](https://ncatlab.org/nlab/show/causal+perturbation+theory), [S-matrix](https://ncatlab.org/nlab/show/S-matrix). It says: “the axioms of causal perturbation theory directly prescribe the desired factorization property, without insisting that it derives from an actual integration.”

**Sources:**

- [Henri Epstein, Vladimir Glaser, The role of locality in perturbation theory, Annales de l'Institut Henri Poincaré A 19 (1973) 211](https://www.numdam.org/item/AIHPA_1973__19_3_211_0/)

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

### Spin-statistics for topological field theories follows from a sign-twisted duality structure

**Remember:** Put the fermion sign into the rule for duals and adjoints.

*Makes the theorem clean to state or prove.* MSC 81T45 (Topological field theories in quantum mechanics), 18M05. arXiv math-ph, math.CT. Level 4: research.

**Definition.** A dagger reverses maps and acts like an adjoint. A fermionically dagger compact category also has dual objects, which describe reversed boundaries or dual vector spaces in the examples. Its compatibility rule between adjoints and duals includes a parity operation, which gives a minus sign on odd states.

**Problem.** In the paper's unitary topological field theories on spin bordisms, a full spin rotation acts by fermion parity. These theories assign linear maps to spin spacetimes viewed as ways to connect their boundaries.

**How the definition helps.** The modified duality rule puts the sign into the structure that a theory must preserve. In our own words, one can then apply a general functor theorem rather than proving a separate sign identity for each theory. The work moves to checking this structure on spin bordisms and on Hilbert spaces graded by parity.

**Paper or page:** [The spin-statistics theorem for topological quantum field theories](https://arxiv.org/abs/2403.02282v2). It says: “The spin-statistics theorem for TQFTs emerges as a specific case of a more general result concerning symmetric monoidal dagger functors between fermionically dagger compact categories.”

**Sources:**

- [Luuk Stehouwer, The spin-statistics theorem for topological quantum field theories, arXiv:2403.02282v2 (2024)](https://arxiv.org/abs/2403.02282v2)
