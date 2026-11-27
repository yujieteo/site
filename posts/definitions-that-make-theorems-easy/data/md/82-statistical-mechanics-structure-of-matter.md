### Counting swapped identical particles once resolves the Gibbs paradox

**Remember:** Swapping two identical atoms does not make a new state.

*Rules out counterexamples.* MSC 82B03 (Foundations of equilibrium statistical mechanics), 82B05. arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** In correct Boltzmann counting, states of identical particles that differ only by a permutation of the particles count as one state. For N particles, this divides the phase-space volume by N!.

**Problem.** Entropy should be extensive, that is, proportional to the amount of gas. Two identical boxes of gas should have twice the entropy of one box, and opening a door between them should not change the entropy.

**How the definition helps.** Dividing by N! removes an extra term from the entropy, so the entropy becomes extensive. Without the factor 1/N!, the classical entropy of an ideal gas has an extra N ln N term. Then mixing two identical gases raises the entropy, and closing the partition again lowers it, against the second law. Dividing by N! and using Stirling's formula gives the extensive Sackur–Tetrode entropy. Jaynes argues that a definition of entropy depends on what an experiment can distinguish. So, for Jaynes, the factor follows from the choice of macroscopic description, and quantum indistinguishability is a guarantee. What stays debated is whether the classical reason or the quantum reason is the right one.

**Wikipedia:** [Gibbs paradox](https://en.wikipedia.org/wiki/Gibbs_paradox). It says: “The paradox is averted by assuming the indistinguishability (at least effective indistinguishability) of the particles in the volume.”

**Sources:**

- [Jaynes, E. T. (1992). The Gibbs paradox. In Smith, Erickson and Neudorfer (eds.), Maximum Entropy and Bayesian Methods, Kluwer, 1–22.](https://bayes.wustl.edu/etj/articles/gibbs.paradox.pdf)

### Boson mode sums require lower chemical potential

**Remember:** Unlimited occupancy needs a weight ratio below one.

*Rules out counterexamples.* MSC 82B10 (Quantum equilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech, math-ph. Level 2: later undergraduate.

**Definition.** For independent bosons, describe a state by the number of particles in each energy mode. Each count can be any nonnegative integer, and each list labels one basis state. A mode of energy ε with n particles contributes weight exp(−β(ε − μ)n). Here β is inverse temperature and μ is the energy offset per particle, called the chemical potential.

**Problem.** For finitely many ideal boson modes at positive temperature, the grand canonical law exists exactly when μ is below the lowest mode energy. Each mode then has a geometric occupation law.

**How the definition helps.** Counting by mode turns the sum over particle states into one geometric series per mode (our own). Each series converges exactly when its ratio exp(−β(ε − μ)) is below one (our own). At equality every term is one, and above that chemical potential the terms grow (our own). Normalizing the convergent factors gives independent geometric counts (our own).

**nLab:** [Fock space](https://ncatlab.org/nlab/show/Fock+space). It says: “its Fock space is the space of quantum states of arbitrarily many such particles.”

**Wikipedia:** [Bose–Einstein statistics](https://en.wikipedia.org/wiki/Bose%E2%80%93Einstein_statistics). It says: “the grand partition function for bosons can be considered a geometric series and may be evaluated as such”

**Sources:** none listed. No primary source with a working link was found.

### Domain walls determine spins up to reversal

**Remember:** One starting spin fixes every spin across the walls.

*True by definition. Confidence: medium.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv cond-mat.stat-mech, math.PR. Level 2: later undergraduate.

**Definition.** For Ising spins, which take values plus or minus one, mark the edge whenever its two spins differ. Keep the marked edges rather than the spins.

**Problem.** On a finite connected graph with no fixed spins, an edge set comes from spins exactly when it meets every cycle evenly. Each such edge set comes from exactly two spin configurations. At zero field the two configurations have equal probability.

**How the definition helps.** Recording disagreements turns spin reconstruction into sign changes along paths (our own). Every closed path must return to its starting sign (our own). Conversely, even parity on every cycle makes the sign independent of the chosen path (our own). Connectedness leaves exactly two choices for the starting spin (our own). At zero field, reversing all spins preserves every pair energy (our own).

**Paper or page:** [A General Coupling for Ising Models and Beyond](https://arxiv.org/abs/2506.10765v1). It says: “the uniform assignment of a spin configuration consistent with the domain walls η”

**Sources:**

- [\[, ', U, l, r, i, k,  , T, h, i, n, g, g, a, a, r, d,  , H, a, n, s, e, n, ', ,,  , ', J, i, a, n, p, i, n, g,  , J, i, a, n, g, ', ,,  , ', F, r, e, d, e, r, i, k,  , R, a, v, n,  , K, l, a, u, s, e, n, ', \], A General Coupling for Ising Models and Beyond](https://arxiv.org/abs/2506.10765v1)

### Transfer matrices close rings by trace

**Remember:** Multiply along the chain and take the trace to close it.

*True by definition.* MSC 82B23 (Exactly solvable models; Bethe ansatz). arXiv cond-mat.stat-mech, math-ph. Level 2: later undergraduate.

**Definition.** In a uniform Ising ring, each site carries a spin equal to +1 or −1. Give each neighboring pair its interaction energy and half the field energy of each endpoint. For spins s and t, define the matrix entry T(s,t) as exp(−βE), where E is this pair energy and β is inverse temperature.

**Problem.** For a ring of N sites, summing the thermal weights of all spin configurations gives the partition function. This sum equals the trace of the Nth power of T.

**How the definition helps.** Matrix multiplication sums over interior spins and trace identifies the two end spins (our own). The check is that each matrix entry supplies exactly one edge energy and two half site energies (our own). The ring then counts each energy term once (our own).

**Wikipedia:** [Ising model](https://en.wikipedia.org/wiki/Ising_model). It says: “Z(β) = Tr(Vᴸ) = λ₁ᴸ + λ₂ᴸ”

**Sources:** none listed. No primary source with a working link was found.

### Independent free energies add

**Remember:** Independent weights multiply, so their free energies add.

*True by definition.* MSC 82B30 (Statistical thermodynamics). arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** At absolute temperature T &gt; 0, give each microscopic state of energy E the weight exp(−E/(kT)), where k is Boltzmann’s constant. The partition function Z sums these weights. Define Helmholtz free energy as −kT log Z.

**Problem.** At a common temperature, the Helmholtz free energies of two independent finite systems add when their energies add.

**How the definition helps.** Taking a logarithm makes the free energies add once the partition functions multiply, in our own argument. Independent states form pairs, so adding their energies multiplies their weights and factors the sum in our own calculation. Our own comparison uses equilibrium probabilities to identify −kT log Z with mean energy minus temperature times entropy.

**nLab:** [partition function](https://ncatlab.org/nlab/show/partition+function). It says: “sum over all states Ψ of the system and weigh each one by its energy EΨ.”

**Wikipedia:** [Partition function (statistical mechanics)](https://en.wikipedia.org/wiki/Partition_function_%28statistical_mechanics%29). It says: “the partition function of the entire system is the product of the individual partition functions”

**Sources:** none listed. No primary source with a working link was found.

### Shared thresholds order percolation configurations

**Remember:** A larger threshold never closes an open edge.

*True by definition.* MSC 82B43 (Percolation). arXiv math.PR, cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** Assign independent uniform numbers between zero and one to the edges of a finite or countable graph. At level p between zero and one, open each edge whose number is at most p. Use the same numbers at every level.

**Problem.** For independent bond percolation, the probability of any measurable increasing event is nondecreasing in p. An increasing event remains true when more edges open.

**How the definition helps.** Using the same numbers at every level orders the open edge sets in each realization (our own). Sampling the configurations separately would give no such ordering (our own). At each fixed level, the threshold tests still open edges independently with probability p (our own). Every measurable increasing event therefore has nondecreasing probability (our own).

**Wikipedia:** [Percolation theory](https://en.wikipedia.org/wiki/Percolation_theory). It says: “Since this probability is an increasing function of p (proof via coupling argument)”

**Sources:** none listed. No primary source with a working link was found.

### Random swaps give exclusion duality

**Remember:** Run the same swaps backward to find the starting sites.

*True by definition. Confidence: medium.* MSC 82C22 (Interacting particle systems in time-dependent statistical mechanics). arXiv math.PR, cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** On a finite graph, each site holds at most one particle. A particle attempts to cross each incident edge at its fixed rate, and an occupied destination blocks the move. Use the same rate in both directions. Equivalently, ring an independent Poisson clock on each edge at that rate and swap the endpoint labels at every ring.

**Problem.** The chance that all sites in a given set are occupied at time t equals a reverse test. Run exclusion from that set for time t and ask whether it ends inside the original occupied set.

**How the definition helps.** The swaps give every final site a unique starting label, turning joint occupancy into a test on those labels (our own). Reversing the clock rings follows the labels back and has the same law as running the clocks forward (our own). Checking the rates shows that swaps of unlike occupancies give exactly the original particle jumps (our own).

**Paper or page:** [Graphical constructions of simple exclusion processes with applications to random environments](https://arxiv.org/abs/2304.07703v3). It says: “ℒf(η) = ∑₍{x,y}∈ℰₛ₎ cₓᵧ \[f(ηˣʸ) − f(η)\].”

**Sources:**

- [\[, ', A, l, e, s, s, a, n, d, r, a,  , F, a, g, g, i, o, n, a, t, o, ', \], Graphical constructions of simple exclusion processes with applications to random environments](https://arxiv.org/abs/2304.07703v3)

### The Metropolis–Hastings rule maximizes reversible acceptance

**Remember:** Take the smaller flow and use it in both directions.

*True by definition.* MSC 82M31 (Monte Carlo methods applied to problems in statistical mechanics). arXiv math.PR, cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** A proposal gives the probability of trying each destination from each state. Multiply that probability by the target probability of the starting state to obtain the proposed flow. Accept enough proposals to give both directions the smaller of their two flows. Rejections leave the state unchanged.

**Problem.** Fix positive target probabilities on a finite state space. Among rules reversible for this target that accept or reject the same proposal, Metropolis–Hastings maximizes every transition probability between distinct states.

**How the definition helps.** A reversible rule needs equal accepted flows in both directions, and neither can exceed its proposal flow (our own). The smaller flow is thus an upper bound, and the Metropolis rule attains it (our own). Dividing by the forward proposed flow gives the usual acceptance ratio whenever a proposal is possible (our own).

**Wikipedia:** [Metropolis–Hastings algorithm](https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm). It says: “A(x′, x) = min(1, (P(x′)/P(x))(g(x ∣ x′)/g(x′ ∣ x))).”

**Sources:**

- [Hastings, Monte Carlo sampling methods using Markov chains and their applications (1970)](https://doi.org/10.1093/biomet/57.1.97)

### Imaginary time implies thermal stationarity

**Remember:** Matching the edges of a bounded time strip makes one-point averages constant.

*Makes the theorem clean to state or prove.* MSC 82B10 (Quantum equilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** For a quantum system, let αₜ evolve each observable through time t, and let ω give its expected value. Fix a positive inverse temperature β in units with Boltzmann’s and the reduced Planck constants equal to one. For every observable pair A,B require a bounded function, analytic inside 0 &lt; Im z &lt; β and continuous on the closed strip. Its lower and upper boundary values at real coordinate t must equal ω(Aαₜ(B)) and ω(αₜ(B)A), respectively.

**Problem.** Every state satisfying this strip condition has time-independent expectations.

**How the definition helps.** In our own proof, setting A equal to the identity makes the boundary values match. Gluing translated strips then gives a bounded entire function, constant by Liouville’s theorem in our own argument. Our own comparison starts with finite equilibrium weights proportional to the exponential of minus β times energy. Unlike a normalized trace over energy states, the strip condition can express equilibrium and imply stationarity for infinite systems in our own comparison.

**nLab:** [KMS state](https://ncatlab.org/nlab/show/KMS+state). It says: “The final formulation of the KMS condition, now widely accepted, is due to Haag-Hugenholtz-Winnink 67.”

**Wikipedia:** [KMS state](https://en.wikipedia.org/wiki/KMS_state). It says: “If the functions converge, then they have to be analytic within the strip they are defined over”

**Sources:**

- [Rudolf Haag, N. M. Hugenholtz and M. Winnink, On the equilibrium states in quantum statistical mechanics (1967)](https://doi.org/10.1007/BF01646342)

### The thermal strip forces stationarity

**Remember:** Set one observable to the identity and both strip edges match.

*True by definition. Confidence: medium.* MSC 82B10 (Quantum equilibrium statistical mechanics (general)). arXiv math-ph, cond-mat.stat-mech. Level 3: graduate.

**Definition.** Let ω give the expected value of each observable in a quantum system with identity, and let B(t) denote time evolution. At inverse temperature β &gt; 0, the Kubo–Martin–Schwinger condition requires a function F for every pair of observables A and B. It is bounded and continuous on the closed strip 0 ≤ Im z ≤ β and analytic inside. Its boundary values are F(t) = ω(AB(t)) and F(t + iβ) = ω(B(t)A) for real t.

**Problem.** Every Kubo–Martin–Schwinger state at positive inverse temperature is invariant under real-time evolution.

**How the definition helps.** Setting A equal to the identity makes the two strip edges agree, so imaginary-time translates fit together (our own). The matching continuous boundary values give an analytic function across each seam by Morera’s theorem (our own). The resulting bounded entire function is constant by Liouville’s theorem (our own). Thus ω(B(t)) equals ω(B) for every t (our own). This strip definition replaces a finite-volume equilibrium density matrix, whose trace formula gives the boundary identity by cyclicity (our own).

**Wikipedia:** [KMS state](https://en.wikipedia.org/wiki/KMS_state). It says: “a state satisfying the KMS condition”

**Sources:**

- [Haag, Hugenholtz and Winnink, On the equilibrium states in quantum statistical mechanics (1967)](https://doi.org/10.1007/BF01646342)

### Thermal balance selects Gibbs weights

**Remember:** Stationarity freezes the weights, but thermal balance fixes their ratios.

*Rules out counterexamples.* MSC 82B10 (Quantum equilibrium statistical mechanics (general)), 81T28. arXiv math-ph. Level 3: graduate.

**Definition.** Let H be the energy matrix and let β &gt; 0 be inverse temperature. Write ω(A) for the mean value of matrix A in the state. The finite-dimensional Kubo–Martin–Schwinger condition requires ω(A exp(−βH) B exp(βH)) = ω(BA) for every pair of matrices A, B.

**Problem.** On the full matrix algebra of a finite system, at β &gt; 0, the unique state satisfying this condition is the normalized exp(−βH).

**How the definition helps.** Testing every pair of matrices fixes the energy weights that stationarity alone leaves free. In our own proof, write ω(A) = tr(ρA), where ρ is positive semidefinite with trace one. Setting A = I and cycling the trace shows that ρ commutes with exp(βH). Varying A and B then shows that exp(βH)ρ commutes with every matrix, so it is scalar. Normalizing gives the Gibbs matrix, and cycling the trace verifies the condition. Our own counterexample is the uniform state for H with two distinct energies. It stays stationary but gives both energies the same weight.

**nLab:** [KMS state](https://ncatlab.org/nlab/show/KMS+state). It says: “The final formulation of the KMS condition, now widely accepted, is due to Haag-Hugenholtz-Winnink 67.”

**Wikipedia:** [KMS state](https://en.wikipedia.org/wiki/KMS_state). It says: “We used the fact that the density matrix commutes with any function of (H − μN) and that the trace is cyclic.”

**Sources:**

- [R. Haag, N. M. Hugenholtz and M. Winnink, On the equilibrium states in quantum statistical mechanics (1967)](https://doi.org/10.1007/BF01646342)

### Cluster colors turn agreement into connectivity

**Remember:** Same cluster means same color, and different clusters choose colors independently.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** In the finite Potts model, each vertex has one of q colors, where q ≥ 2 is an integer. An edge contributes weight exp(K) for matching colors and one otherwise, with K ≥ 0 allowed to vary by edge. Given the colors, independently open each matching edge with probability 1 − exp(−K). Leave every other edge closed.

**Problem.** With free boundary and no external field, the probability of equal colors at two vertices is 1/q plus (1 − 1/q) times their connection probability.

**How the definition helps.** Adding open edges turns color agreement into a question about connected components (our own). A closed edge contributes joint weight one, and an open edge contributes exp(K) − 1 while requiring equal colors (our own). Given the edges, all compatible colorings therefore have equal weight (our own). Each component chooses a uniform color independently, so distinct components match with probability 1/q (our own).

**Wikipedia:** [Potts model](https://en.wikipedia.org/wiki/Potts_model). It says: “two neighbouring FK clusters are colored independently.”

**Sources:**

- [Edwards and Sokal, Generalization of the Fortuin-Kasteleyn-Swendsen-Wang representation and Monte Carlo algorithm (1988)](https://doi.org/10.1103/PhysRevD.38.2009)

### Gibbs measures turn a phase transition into non-uniqueness

**Remember:** A Gibbs measure looks like the Boltzmann distribution in every finite window.

*Makes the theorem clean to state or prove.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 82B26, 60K35. arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** A Gibbs measure on an infinite lattice is a probability measure on configurations with one property. Inside every finite region, given the configuration outside, its conditional distribution is the finite-volume Boltzmann distribution. These are the Dobrushin–Lanford–Ruelle conditions. (The Boltzmann distribution gives a configuration of energy E the probability exp(−βE)/Z, where β is the inverse temperature and Z makes the total equal to 1.)

**Problem.** We want to state what a phase transition is for an infinite system. There the total energy is infinite, and the usual Boltzmann formula has no meaning.

**How the definition helps.** The definition uses only energies of finite regions, so it applies directly to the infinite system. The finite-volume formula exp(−βE)/Z cannot be used when E is infinite. A phase transition can then be stated as the existence of more than one Gibbs measure for the same interaction. For a finite system, there is always exactly one. Proving non-uniqueness for a given model remains hard.

**Wikipedia:** [Gibbs measure](https://en.wikipedia.org/wiki/Gibbs_measure). It says: “The existence of more than one Gibbs measure is associated with statistical phenomena such as symmetry breaking and phase coexistence.”

**Sources:**

- [Dobrushin, R. L. (1968). The description of a random field by means of conditional probabilities and conditions of its regularity. Theory of Probability and Its Applications 13, 197–224.](https://doi.org/10.1137/1113026)
- [Lanford, O. E.; Ruelle, D. (1969). Observables at infinity and states with short range correlations in statistical mechanics. Communications in Mathematical Physics 13, 194–215.](https://doi.org/10.1007/BF01645487)

### Local stability keeps partition sums finite

**Remember:** Bound each energy drop and the particle factorial controls the sum.

*Rules out counterexamples.* MSC 82B21 (Continuum models (systems of particles, etc.) arising in equilibrium statistical mechanics). arXiv math.PR, cond-mat.stat-mech. Level 3: graduate.

**Definition.** Measure energy in units of thermal energy. A particle interaction is locally stable if adding a particle can lower the energy by at most one fixed constant. The bound applies to every allowed configuration, including its fixed exterior particles.

**Problem.** Fix an allowed exterior around a bounded region of finite volume. At any finite nonnegative activity, the grand partition function is finite. This function sums the weights of all particle counts, with one factor of the activity per particle.

**How the definition helps.** Bounding each energy drop bounds the total weight by an exponential in the particle count (our own). Integrating particle positions gives at most one volume factor per particle (our own). Dividing by the factorial of the count makes the resulting series converge (our own). Without the bound, a constant attractive pair energy gives a negative energy quadratic in the count (our own). In positive volume with empty exterior, the partition sum then diverges at every positive activity (our own).

**Paper or page:** [Uniqueness of locally stable Gibbs point processes via spatial birth-death dynamics](https://arxiv.org/abs/2407.01321v1). It says: “In particular, μ₍Λ∣ξ₎ is well-defined.”

**Sources:**

- [\[, ', S, a, m, u, e, l,  , B, a, g, u, l, e, y, ', ,,  , ', A, n, d, r, e, a, s,  , G, ö, b, e, l, ', ,,  , ', M, a, r, c, u, s,  , P, a, p, p, i, k, ', \], Uniqueness of locally stable Gibbs point processes via spatial birth-death dynamics](https://arxiv.org/abs/2407.01321v1)

### Taking logs keeps only connected clusters

**Remember:** Graphs form sets of connected components, so logarithms keep the components.

*True by definition.* MSC 82B21 (Continuum models (systems of particles, etc.) arising in equilibrium statistical mechanics). arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** Consider a classical gas in finite volume whose total energy is a sum of pair energies. For a pair with energy u, set its Mayer weight to exp(−βu) − 1, where β is inverse temperature. For a graph on labeled particles, multiply these weights over its edges.

**Problem.** Assume all graph integrals at each fixed particle count exist. In the formal series for the logarithm of the grand partition function, only connected graphs contribute. The grand partition function sums the integrated thermal weights with a factor of activity per particle and divides by the particle count factorial.

**How the definition helps.** The bond definition makes each Boltzmann factor a sum over an absent edge and a present edge (our own). Expand the product and split each graph into its unique connected components (our own). The factorial for labeled particles turns the sum over sets of components into an exponential (our own). The formal argument leaves convergence at nonzero activity to a separate estimate (our own).

**Wikipedia:** [Cluster expansion](https://en.wikipedia.org/wiki/Cluster_expansion). It says: “Next, define the Mayer function fᵢⱼ by exp\[−βu₂(rᵢⱼ)\] = 1 + fᵢⱼ.”

**Paper or page:** [An inverse cluster expansion or the chemical potential](https://arxiv.org/abs/2312.13144v3). It says: “denotes the set of partitions of η into k non-empty sets”

**Sources:**

- [\[, ', F, a, b, i, o,  , F, r, o, m, m, e, r, ', \], An inverse cluster expansion or the chemical potential](https://arxiv.org/abs/2312.13144v3)

### Duality fixes the Ising critical point

**Remember:** One singular point must stay fixed when hot and cold swap.

*True by definition.* MSC 82B23 (Exactly solvable models; Bethe ansatz). arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** Consider the infinite square-lattice Ising model with no field and the same positive nearest-neighbor coupling in both directions. Write K for this coupling times inverse temperature. Define the dual coupling K\* by exp(−2K\*) = tanh K, matching the weights of polygon edges and boundaries between opposite spins.

**Problem.** Suppose the free energy has exactly one singularity at a positive real coupling. That coupling satisfies sinh(2K) = 1.

**How the definition helps.** The dual coupling pairs singularities, so a unique positive singularity must be its own partner. Substituting K\* = K into the defining equation gives sinh(2K) = 1. The hard step relates the infinite-volume free energies by matching polygon expansions at the two couplings (our own). Uniqueness is a separate hypothesis (our own).

**Wikipedia:** [Kramers–Wannier duality](https://en.wikipedia.org/wiki/Kramers%E2%80%93Wannier_duality). It says: “in the case of there being a unique critical point, it would be located at K = K\*”

**Sources:**

- [Kramers and Wannier, Statistics of the Two-Dimensional Ferromagnet. Part I (1941)](https://doi.org/10.1103/PhysRev.60.252)

### Phase transitions defined as non-analytic points need infinitely many particles

**Remember:** No sharp transition without infinitely many particles.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 82B26 (Phase transitions (general) in equilibrium statistical mechanics), 82B30. arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** A phase transition is a point where the thermodynamic free energy is not an analytic function of the thermodynamic variables, such as temperature. (An analytic function is one that is given near each point by a convergent power series.)

**Problem.** Statistical mechanics should explain sharp phase transitions. But for a finite system, the partition function (the sum of the Boltzmann weights over all states) is smooth.

**How the definition helps.** The definition makes clear that sharp transitions can appear only in the limit of infinitely many particles. Our own step: for a finite system, the partition function is a finite sum of exponentials. So the free energy is analytic and has no sharp transition. Lee and Yang made this precise. The zeros of the partition function in the complex plane can approach the real axis only in that limit. What stays hard is to prove that a given model has such a point, as Onsager did for the two-dimensional Ising model (a grid of spins that each point up or down).

**Wikipedia:** [Phase transition](https://en.wikipedia.org/wiki/Phase_transition). It says: “Phase transitions occur when the thermodynamic free energy of a system is non-analytic for some choice of thermodynamic variables”

**Sources:**

- [Yang, C. N.; Lee, T. D. (1952). Statistical theory of equations of state and phase transitions. I. Theory of condensation. Physical Review 87(3), 404–409.](https://doi.org/10.1103/PhysRev.87.404)

### Counting flows gives random-cluster weights

**Remember:** Each independent cycle contributes one factor of q.

*True by definition.* MSC 82B43 (Percolation). arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** Orient the edges of a finite graph and choose an integer q ≥ 2. Independently open each edge with a probability strictly between zero and one. On each open edge choose a value modulo q, requiring equal total inflow and outflow at each vertex. Give every allowed pair of edge set and flow weight proportional to the original probability of its edge set.

**Problem.** Ignoring the flow gives the random-cluster law with the original opening odds multiplied by q. This law multiplies independent edge weights by q for each connected component, including isolated vertices.

**How the definition helps.** Keeping the flow as an extra variable turns the component weight into a count (our own). Choose a spanning tree in each component (our own). Every edge outside the trees has q choices, and balance then fixes every tree value (our own). The number of free edges equals the open edge count minus the vertex count plus the component count (our own). The vertex count is constant, leaving one factor q per component and one per open edge (our own).

**Paper or page:** [A General Coupling for Ising Models and Beyond](https://arxiv.org/abs/2506.10765v1). It says: “The marginal of 𝒫 on Ω is the random-cluster model with cluster-weight q”

**Sources:**

- [\[, ', U, l, r, i, k,  , T, h, i, n, g, g, a, a, r, d,  , H, a, n, s, e, n, ', ,,  , ', J, i, a, n, p, i, n, g,  , J, i, a, n, g, ', ,,  , ', F, r, e, d, e, r, i, k,  , R, a, v, n,  , K, l, a, u, s, e, n, ', \], A General Coupling for Ising Models and Beyond](https://arxiv.org/abs/2506.10765v1)

### Exponential work recovers free energy

**Remember:** The work factor replaces the initial Boltzmann weight with the final one.

*True by definition.* MSC 82C05 (Classical dynamic and nonequilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** Drive a thermally isolated classical system by changing its Hamiltonian, the function giving energy at each point in phase space. Define work W along a trajectory as final energy minus initial energy. Use exp(−βW) as the work statistic, where β is inverse temperature.

**Problem.** Start with probability density proportional to exp(−βH), where H is the initial Hamiltonian. Assume the evolution maps the initial phase space bijectively onto the final one and both equilibrium weight integrals are finite. The mean of exp(−βW) equals the final equilibrium weight integral divided by the initial one.

**How the definition helps.** The exponential work factor cancels the initial energy weight, leaving the weight of the final energy (our own). Hamiltonian evolution preserves phase-space volume, so changing to final coordinates gives the final partition sum (our own). The remaining work is to establish volume preservation and that external work equals the energy change (our own).

**Wikipedia:** [Jarzynski equality](https://en.wikipedia.org/wiki/Jarzynski_equality). It says: “The final state does not need to be in equilibrium.”

**Sources:**

- [Jarzynski, Nonequilibrium Equality for Free Energy Differences (1997)](https://doi.org/10.1103/PhysRevLett.78.2690)

### Insertion energies make particle births reversible

**Remember:** The weight for adding a particle pays for its reverse removal.

*True by definition.* MSC 82C22 (Interacting particle systems in time-dependent statistical mechanics). arXiv math.PR, cond-mat.stat-mech. Level 3: graduate.

**Definition.** Fix exterior particles around a bounded region of finite volume. The Gibbs density for n particle positions is proportional to exp(−E) times the activity to power n, divided by n factorial. Here E is their energy including the exterior interaction, measured in thermal units. Remove each particle at rate one and add particles at rate density equal to the activity times exp(−insertion energy).

**Problem.** Assume an allowed exterior, finite nonnegative activity and a uniform lower bound on the energy change from adding a particle. Under the Gibbs law, this process is reversible, meaning that its stationary trajectories have the same law backward in time.

**How the definition helps.** Choosing births by the ratio of Gibbs weights balances every addition against a removal (our own). Integrating over removal choices cancels the extra particle factorial in the Gibbs law (our own). This proves equality of the forward and reverse equilibrium flows (our own). The energy bound keeps the total birth rate finite (our own).

**Paper or page:** [Uniqueness of locally stable Gibbs point processes via spatial birth-death dynamics](https://arxiv.org/abs/2407.01321v1). It says: “The Markov transition family associated to K₍Λ∣ξ₎ is reversible with respect to μ₍Λ∣ξ₎.”

**Sources:**

- [\[, ', S, a, m, u, e, l,  , B, a, g, u, l, e, y, ', ,,  , ', A, n, d, r, e, a, s,  , G, ö, b, e, l, ', ,,  , ', M, a, r, c, u, s,  , P, a, p, p, i, k, ', \], Uniqueness of locally stable Gibbs point processes via spatial birth-death dynamics](https://arxiv.org/abs/2407.01321v1)

### Independent collisions exclude Loschmidt’s reversal

**Remember:** Reversed outgoing particles need not satisfy the independent incoming rule.

*Rules out counterexamples.* MSC 82C40 (Kinetic theory of gases in time-dependent statistical mechanics). arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** For particles about to collide, approximate the joint velocity density by the product of the two single-particle densities. This assumption of independent incoming velocities is called molecular chaos.

**Problem.** Consider a smooth positive solution of the spatially homogeneous Boltzmann equation for elastic collisions with a collision kernel invariant under reversal. Assume finite entropy and enough integrability to differentiate and rearrange its integral. Then H, the integral of the velocity density times its logarithm, cannot increase.

**How the definition helps.** The product rule puts the entropy derivative in a form with a fixed sign (our own). Let x and y be the products of the two densities before and after a collision (our own). Collision symmetry makes the derivative a negative multiple of the integral of (x − y)(log x − log y) against nonnegative weights (our own). The logarithm is increasing, so the integrand is nonnegative (our own). Reversing an actual gas can turn correlated outgoing velocities into incoming velocities that violate the product rule (our own).

**Wikipedia:** [H-theorem](https://en.wikipedia.org/wiki/H-theorem). It says: “there must be a matching reversed state where H increases over time”

**Sources:**

- [Boltzmann, Further Studies on the Thermal Equilibrium of Gas Molecules (1872, English translation 2003)](https://doi.org/10.1142/9781848161337_0015)

### Normalized polymer weights form a martingale

**Remember:** Normalize each new layer so its mean weight is one.

*True by definition.* MSC 82D60 (Statistical mechanics of polymers). arXiv math.PR, cond-mat.stat-mech. Level 3: graduate.

**Definition.** Give each site at each time an independent random energy with the same distribution. For a random walk independent of these energies, average exp(βE) over walks, where E sums the energies visited after time zero. Here β is inverse temperature, and a single energy has finite exponential moment at β. Normalize this path average by its expectation over the energies.

**Problem.** The normalized averages form a nonnegative martingale of mean one. Given all energies through today, the expected next average equals today’s average. These averages converge with probability one to a finite limit.

**How the definition helps.** Averaging the last independent layer replaces every normalized last-step weight by one (our own). The walk step probabilities then sum to one (our own). The martingale convergence theorem gives the limit (our own). The separate question of whether the limit is positive needs disorder estimates (our own).

**Paper or page:** [Positive and negative moments for directed polymers in random environment in weak disorder](https://arxiv.org/abs/2212.06029v1), [Directed polymers in a random environment: a review of the phase transitions](https://arxiv.org/abs/2401.01757v4). It says: “the martingale (Wₙ)ₙ≥₀ is Lᵖ(P)-bounded”

**Sources:**

- [\[, ', N, i, k, o, s,  , Z, y, g, o, u, r, a, s, ', \], Directed polymers in a random environment: a review of the phase transitions](https://arxiv.org/abs/2401.01757v4)

### Continuity excludes a decimated Ising law

**Remember:** Distant spins must lose their influence when nearby spins are fixed.

*Rules out counterexamples.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv math.PR, cond-mat.stat-mech. Level 4: research.

**Definition.** A spin law is quasilocal if one can choose conditional probabilities that depend continuously on the exterior spins. Agreement on a growing neighborhood must make distant changes negligible. Finite-spin Gibbs laws defined by interactions whose absolute strengths per site have uniformly vanishing tails satisfy this condition.

**Problem.** Consider the cited square-lattice Ising model with nearest-neighbor coupling along one axis and power-law coupling along the other. The decay exponent α satisfies 1 &lt; α ≤ 2. At sufficiently low temperature, retaining only sites with two even coordinates destroys quasilocality in the state selected by positive boundary spins.

**How the definition helps.** An unavoidable jump in a conditional probability rules out every continuous version and hence every Gibbs description with such interactions (our own). Near the alternating retained spins, distant boundary choices select different phases among the discarded spins (our own). The hard estimate shows a persistent gap in the expected central spin on exterior events of positive probability (our own).

**Paper or page:** [Decimations for Two-dimensional Ising and Rotator Models I](https://arxiv.org/abs/2105.07950v1), [Decimations for Two-dimensional Ising and Rotator Models I](https://arxiv.org/abs/2105.07950v1). It says: “is non-quasilocal, hence non-Gibbs, and so are all decimated Gibbs measures.”

**Sources:**

- [\[, ", M, a, t, t, e, o,  , D, ', A, c, h, i, l, l, e, ", ,,  , ', A, e, r, n, o, u, t,  , C, .,  , D, .,  , v, a, n,  , E, n, t, e, r, ', ,,  , ', A, r, n, a, u, d,  , L, e,  , N, y, ', \], Decimations for Two-dimensional Ising and Rotator Models I](https://arxiv.org/abs/2105.07950v1)

### The one-line projection of the Ising model has continuous one-sided predictions

**Remember:** A continuous prediction from the past need not extend to both sides.

*Makes the theorem clean to state or prove.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 60K35, 37D35. arXiv math.PR, cond-mat.stat-mech. Level 4: research.

**Definition.** A g-measure is a measure on spin sequences whose conditional probability for the next spin depends continuously on the past spins. The Schonmann projection is the restriction of an extremal Gibbs measure of the two-dimensional Ising model to the spins on one line.

**Problem.** At sufficiently low temperature, the Schonmann projection is a regular g-measure. At low temperature it is also non-Gibbsian, because its conditional probabilities given both sides are discontinuous.

**How the definition helps.** The definition asks only how predictions depend on one side, so a weaker continuity can hold where two-sided continuity fails. The two-sided Gibbs condition would miss that regularity. In our own words, the theorem still needs a proof, which in the paper uses contour estimates at low temperature.

**Paper or page:** [The Schonmann projection as a g-measure-, how Gibbsian is it?](https://arxiv.org/abs/2102.10622v2). It says: “We prove that they are g-measures, which means that their conditional probabilities have a continuous dependence on one-sided boundary condition.”

**Sources:**

- [Aernout van Enter, Senya Shlosman, The Schonmann projection as a g-measure-, how Gibbsian is it?, arXiv:2102.10622v2 (2022)](https://arxiv.org/abs/2102.10622v2)

### Transport distance bounds lost work

**Remember:** Moving a distribution farther in less time raises the lower bound on work.

*True by definition.* MSC 82C35 (Irreversible thermodynamics, including Onsager-Machlup theory). arXiv cond-mat.stat-mech. Level 4: research.

**Definition.** Join the initial and final probability densities by paths that conserve probability. Along each path, the velocity times density gives the probability current. Define squared transport distance as the infimum of the density-weighted integral of squared speed over space and one unit of time.

**Problem.** Consider particles in a changing potential at fixed temperature, with negligible inertia and constant positive friction. Mean work minus free energy change is at least friction times squared transport distance divided by the process duration.

**How the definition helps.** In our own proof, the observed motion is one admissible path, so its integrated cost bounds the minimum from above. Rescaling to unit time gives the inverse duration factor in our own calculation. The paper’s work balance identifies the actual cost with dissipated work after multiplication by friction. Our own comparison uses the dynamic transport theorem to identify the minimum with the least mean squared displacement over all endpoint couplings.

**Paper or page:** [On the relation between information and power in stochastic thermodynamic engines](https://arxiv.org/abs/2103.03986v1). It says: “𝒲 ≥ Δℱ + (γ/t𝒻) W₂²(p(0, ·), p(t𝒻, ·))”

**Sources:**

- [Amirhossein Taghvaei, Olga Movilla Miangolarra, Rui Fu, Yongxin Chen and Tryphon T. Georgiou, On the relation between information and power in stochastic thermodynamic engines](https://arxiv.org/abs/2103.03986v1)
