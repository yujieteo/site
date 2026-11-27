### Counting swapped identical particles once resolves the Gibbs paradox

**Remember:** Swapping two identical atoms does not make a new state.

*Rules out counterexamples.* MSC 82B03 (Foundations of equilibrium statistical mechanics), 82B05. arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** In correct Boltzmann counting, states of identical particles that differ only by a permutation of the particles count as one state. For N particles, this divides the phase-space volume by N!.

**Problem.** With correct Boltzmann counting, the classical entropy of an ideal gas is extensive, that is, proportional to the amount of gas. Two identical boxes of gas have twice the entropy of one box, and opening a door between them does not change the entropy.

**How the definition helps.** Dividing by N! removes an extra N ln N term from the classical entropy of an ideal gas. Without the factor, mixing two identical gases raises the entropy, and closing the partition again lowers it, against the second law. With it, Stirling's formula gives the extensive Sackur–Tetrode entropy. Whether the factor rests on the choice of macroscopic description, as Jaynes argues, or on quantum indistinguishability is still debated.

**Wikipedia:** [Gibbs paradox](https://en.wikipedia.org/wiki/Gibbs_paradox). It says: “The paradox is averted by assuming the indistinguishability (at least effective indistinguishability) of the particles in the volume.”

**Sources:**

- [Jaynes, E. T. (1992). The Gibbs paradox. In Smith, Erickson and Neudorfer (eds.), Maximum Entropy and Bayesian Methods, Kluwer, 1–22.](https://bayes.wustl.edu/etj/articles/gibbs.paradox.pdf)

### Relative entropy selects Boltzmann equilibrium

**Remember:** Free energy above equilibrium is a scaled relative entropy.

*True by definition.* MSC 82B05 (Classical equilibrium statistical mechanics (general)), 80A05. arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** For probabilities q on finitely many energy states, define entropy by S(q) = −k Σ q ln q, taking zero terms as zero. Here k is Boltzmann’s constant. At temperature T, define free energy as mean energy minus TS(q). The Boltzmann distribution p assigns each state of energy E a weight proportional to exp(−E/(kT)).

**Problem.** At positive temperature T, the Boltzmann distribution uniquely minimizes free energy over probability distributions on the given states.

**How the definition helps.** Our own argument replaces constrained minimization with a comparison to p by relative entropy, the sum of q ln(q/p) over states. Substituting the Boltzmann weights gives the free energy of q minus that of p as kT times this sum. The relative entropy inequality makes the sum nonnegative, with equality exactly when q equals p.

**nLab:** [Boltzmann distribution](https://ncatlab.org/nlab/show/Boltzmann+distribution). It says: “which maximizes the entropy subject to the constraint that the expectation value of the energy is fixed.”

**Sources:** none listed. No primary source with a working link was found.

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

### Spin reversal pairs polynomial zeros

**Remember:** Spin reversal exchanges the coefficients at opposite ends.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 82B26. arXiv cond-mat.stat-mech, math-ph. Level 2: later undergraduate.

**Definition.** Consider finitely many spins taking values +1 and −1. Write their common field as h in units where its weight is exp(h times the spin sum). Factor out the all-up field weight and set z = exp(−2h). The coefficient of degree k then sums the interaction weights of configurations with exactly k down spins.

**Problem.** With spin-flip invariant interactions and a common field, the polynomial coefficients read the same in both directions. Thus its zeros occur in reciprocal pairs.

**How the definition helps.** Counting down spins turns global reversal into an exchange of coefficients k and n − k for n spins (our own). This gives the reciprocal polynomial identity without locating any zeros (our own). For ferromagnetic pair interactions, which favor equal spins, the Lee–Yang theorem proves the stronger conclusion that every zero has modulus one (our own).

**Wikipedia:** [Lee–Yang theorem](https://en.wikipedia.org/wiki/Lee%E2%80%93Yang_theorem). It says: “With this change of variable the Lee–Yang theorem says that all zeros ρ lie on the unit circle.”

**Sources:**

- [T. D. Lee and C. N. Yang, Statistical Theory of Equations of State and Phase Transitions. II. Lattice Gas and Ising Model (1952)](https://doi.org/10.1103/PhysRev.87.410)

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

### Canonical weights bar negative heat capacity

**Remember:** In a heat bath, heat capacity is a scaled energy variance.

*Rules out counterexamples.* MSC 82B05 (Classical equilibrium statistical mechanics (general)), 80A10. arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** Use the canonical distribution for a system in a heat bath. It assigns each state with energy E a weight proportional to exp(−E/(kT)), with k the Boltzmann constant. This fixes temperature T rather than the energy of each state.

**Problem.** Assume finitely many states with temperature-independent energies and positive temperature T. The derivative of mean energy with respect to T equals the variance of energy divided by kT². This derivative, the heat capacity at fixed external parameters, is nonnegative.

**How the definition helps.** Our own calculation uses the exponential weights to turn the temperature derivative into a variance, which cannot be negative. The quoted example concerns an isolated gravitating system. It can heat up as it loses energy, so its heat capacity can be negative. Deriving the canonical weights requires modeling contact with a heat bath.

**Wikipedia:** [Heat capacity](https://en.wikipedia.org/wiki/Heat_capacity). It says: “If the system loses energy, for example, by radiating energy into space, the average kinetic energy actually increases.”

**Sources:**

- [D. Lynden-Bell and R. M. Lynden-Bell, On the negative specific heat paradox](https://doi.org/10.1093/mnras/181.3.405)

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

### Relative entropy measures free-energy gaps

**Remember:** The thermal matrix logarithm turns relative entropy into free energy.

*True by definition.* MSC 82B10 (Quantum equilibrium statistical mechanics (general)), 82B30. arXiv math-ph, cond-mat.stat-mech. Level 3: graduate.

**Definition.** A density matrix is positive semidefinite with trace one. In units with Boltzmann’s constant one, its entropy is minus the sum of λ log λ over positive eigenvalues λ. Free energy is mean energy minus temperature times entropy. For a density matrix ρ and a strictly positive thermal density matrix φ, relative entropy is tr ρ(log ρ − log φ), omitting zero-weight terms.

**Problem.** On a finite-dimensional space at positive temperature, the thermal state uniquely minimizes free energy. The free energy of any trial state equals the minimum plus temperature times its relative entropy with respect to the thermal state.

**How the definition helps.** Substituting the thermal matrix logarithm into relative entropy gives the free-energy gap directly (our own). This replaces minimizing over matrices with Klein’s inequality, which makes relative entropy nonnegative and gives equality only for identical states (our own).

**nLab:** [relative entropy](https://ncatlab.org/nlab/show/relative+entropy). It says: “S(ρ/φ) := tr ρ(log ρ − log φ)”

**Sources:** none listed. No primary source with a working link was found.

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

**How the definition helps.** Testing every pair of matrices fixes the energy weights that stationarity alone leaves free. In our own proof, write ω(A) = tr(ρA); the condition then forces exp(βH)ρ to commute with every matrix, so it is scalar. Normalizing gives the Gibbs matrix. Our own counterexample is the uniform state for H with two distinct energies, which is stationary but gives both energies the same weight.

**nLab:** [KMS state](https://ncatlab.org/nlab/show/KMS+state). It says: “The final formulation of the KMS condition, now widely accepted, is due to Haag-Hugenholtz-Winnink 67.”

**Wikipedia:** [KMS state](https://en.wikipedia.org/wiki/KMS_state). It says: “We used the fact that the density matrix commutes with any function of (H − μN) and that the trace is cyclic.”

**Sources:**

- [R. Haag, N. M. Hugenholtz and M. Winnink, On the equilibrium states in quantum statistical mechanics (1967)](https://doi.org/10.1007/BF01646342)

### Clique weights separate regions

**Remember:** Fix the separating spins and the two sides have separate weights.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv math-ph, math.PR. Level 3: graduate.

**Definition.** Give each vertex of a finite graph a spin with finitely many possible values. A clique is a set of pairwise adjacent vertices. Define the probability of a spin configuration as proportional to a product of positive clique weights. The alternative definition makes each spin conditionally independent of all non-neighbors given its neighbors.

**Problem.** If deleting a set of vertices separates two groups, the groups are independent given the spins on that set.

**How the definition helps.** Once the separating spins are fixed, no clique weight joins the two sides (our own). The weights and their normalizing sum split into two factors (our own). The Hammersley–Clifford theorem carries the work of deriving clique weights from the local conditional independence rule (our own).

**Wikipedia:** [Hammersley–Clifford theorem](https://en.wikipedia.org/wiki/Hammersley%E2%80%93Clifford_theorem). It says: “If variables C and D are fixed, then the global Markov property requires that: A, B ⟂ E, F \| C, D”

**Sources:**

- [C. J. Preston, Generalized Gibbs states and Markov random fields (1973)](https://doi.org/10.2307/1426035)

### Cluster colors turn agreement into connectivity

**Remember:** Same cluster means same color, and different clusters choose colors independently.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** In the finite Potts model, each vertex has one of q colors, where q ≥ 2 is an integer. An edge contributes weight exp(K) for matching colors and one otherwise, with K ≥ 0 allowed to vary by edge. Given the colors, independently open each matching edge with probability 1 − exp(−K). Leave every other edge closed.

**Problem.** With free boundary and no external field, the probability of equal colors at two vertices is 1/q plus (1 − 1/q) times their connection probability.

**How the definition helps.** Adding open edges turns color agreement into a question about connected components (our own). A closed edge contributes joint weight one, and an open edge contributes exp(K) − 1 while requiring equal colors (our own). Given the edges, all compatible colorings therefore have equal weight (our own). Each component chooses a uniform color independently, so distinct components match with probability 1/q (our own).

**Wikipedia:** [Potts model](https://en.wikipedia.org/wiki/Potts_model). It says: “two neighbouring FK clusters are colored independently.”

**Sources:**

- [Edwards and Sokal, Generalization of the Fortuin-Kasteleyn-Swendsen-Wang representation and Monte Carlo algorithm (1988)](https://doi.org/10.1103/PhysRevD.38.2009)

### Dimer signs prevent cancellation

**Remember:** Choose edge signs so that matching weights add instead of cancel.

*Rules out counterexamples.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 05C70. arXiv math-ph, cond-mat.stat-mech. Level 3: graduate.

**Definition.** A dimer cover pairs every vertex with one neighbor. Color the vertices of a finite connected plane graph black and white so each edge joins opposite colors. Put signed nonnegative edge weights in a matrix with black vertices indexing rows and white vertices indexing columns. Around each bounded face of length 2k, require a positive sign product for odd k and a negative product for even k.

**Problem.** Assume the graph is simple and has a dimer cover. The absolute determinant equals the sum over covers of the products of their edge weights.

**How the definition helps.** The face rule makes the determinant terms of different covers have the same sign (our own). With unsigned unit weights on a square, the two terms instead cancel to zero (our own). The work is to construct the signs and extend the face rule to cycles along which two covers differ (our own).

**Wikipedia:** [Pfaffian orientation](https://en.wikipedia.org/wiki/Pfaffian_orientation). It says: “the choice of a Pfaffian orientation ensures that these contributions all have the same sign”

**Paper or page:** [Rank-N Dimer Models on Surfaces](https://arxiv.org/abs/2408.12066v1). It says: “Let the reference matching ℛ and Kasteleyn signs ε correspond to a spin structure η.”

**Sources:**

- [Sri Tata, Rank-N Dimer Models on Surfaces](https://arxiv.org/abs/2408.12066v1)
- [P. W. Kasteleyn, The statistics of dimers on a lattice (1961)](https://doi.org/10.1016/0031-8914(61)90063-5)

### Gibbs laws allow mixtures

**Remember:** Resample either component and the mixture stays the same.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** For each finite region of an infinite lattice, specify how to redraw its spins given the exterior spins. Leave all exterior spins in place and require the rules for nested regions to agree. Define a Gibbs law as a probability law unchanged by every such update. This avoids normalizing the energy of the entire infinite lattice.

**Problem.** The Gibbs laws for a fixed family of local resampling rules form a convex set.

**How the definition helps.** Resampling a mixture averages the resampled component laws with the original mixture weights (our own). If both component laws are unchanged, their mixture is unchanged (our own). The work moves to constructing consistent rules and verifying that their fixed laws have the prescribed conditional probabilities (our own).

**Wikipedia:** [Gibbs measure](https://en.wikipedia.org/wiki/Gibbs_measure). It says: “The set of Gibbs measures on a system is always convex”

**Sources:** none listed. No primary source with a working link was found.

### Gibbs measures turn a phase transition into non-uniqueness

**Remember:** A Gibbs measure looks like the Boltzmann distribution in every finite window.

*Makes the theorem clean to state or prove.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 82B26, 60K35. arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** A Gibbs measure on an infinite lattice is a probability measure on configurations with one property. Inside every finite region, given the configuration outside, its conditional distribution is the finite-volume Boltzmann distribution. These are the Dobrushin–Lanford–Ruelle conditions. (The Boltzmann distribution gives a configuration of energy E the probability exp(−βE)/Z, where β is the inverse temperature and Z makes the total equal to 1.)

**Problem.** For an infinite lattice system, a phase transition is the existence of more than one Gibbs measure for the same interaction. For a finite system there is always exactly one.

**How the definition helps.** The definition uses only energies of finite regions, so it applies even though the total energy of the infinite system is infinite. There the formula exp(−βE)/Z has no meaning. Proving non-uniqueness for a given model remains hard.

**Wikipedia:** [Gibbs measure](https://en.wikipedia.org/wiki/Gibbs_measure). It says: “The existence of more than one Gibbs measure is associated with statistical phenomena such as symmetry breaking and phase coexistence.”

**Sources:**

- [Dobrushin, R. L. (1968). The description of a random field by means of conditional probabilities and conditions of its regularity. Theory of Probability and Its Applications 13, 197–224.](https://doi.org/10.1137/1113026)
- [Lanford, O. E.; Ruelle, D. (1969). Observables at infinity and states with short range correlations in statistical mechanics. Communications in Mathematical Physics 13, 194–215.](https://doi.org/10.1007/BF01645487)

### Independence kills connected correlations

**Remember:** A log splits independent groups before the mixed derivative acts.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 60E10. arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** Give each bounded random variable its own parameter. Form the expected exponential of the sum of the variables times their parameters. Its logarithm defines the joint connected correlation by differentiating once in every parameter at zero. An equivalent formula sums signed products of moments over partitions of the variables.

**Problem.** The connected correlation vanishes when the variables split into two nonempty independent groups. For independent lattice spins, products involving disjoint groups of sites give an example.

**How the definition helps.** Independence splits the generating function into two factors, so its log has no term involving both groups (our own). The equivalence with the alternating moment formula follows by expanding the log (our own).

**Paper or page:** [The Strong Gauss Lucas Theorem and Analyticity of Correlation Functions via the Lee-Yang Theorem](https://arxiv.org/abs/2111.00650v1). It says: “Then the Ursell function $u<sub>k+2</sub>(\\sigma \_p,\\sigma \_\\ell ,\\sigma <sup>A<sub>1</sub></sup>,\\dots ,\\sigma <sup>A<sub>k</sub></sup>)= 0$.”

**Sources:**

- [Barry Simon, The Strong Gauss Lucas Theorem and Analyticity of Correlation Functions via the Lee-Yang Theorem](https://arxiv.org/abs/2111.00650v1)

### One-site ratios factor partition sums

**Remember:** Every new site multiplies the old sum by one plus its ratio.

*True by definition. Confidence: medium.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv math-ph, cond-mat.stat-mech. Level 3: graduate.

**Definition.** In a finite lattice gas, a site is empty or occupied. The partition sum adds the weights of all configurations, and the empty system has weight one. Add sites in order, with the empty choice at a new site preserving each old configuration’s weight. The effective activity is the sum of weights with the new site occupied divided by the sum with it empty.

**Problem.** If each successive denominator is nonzero, the partition sum is the product of one plus the effective activity at each step. In particular, bounds strictly below one on the moduli of those activities keep the sum from vanishing.

**How the definition helps.** Splitting on the new site makes its effective activity plus one exactly the ratio of consecutive partition sums (our own). Multiplying these ratios cancels the intermediate sums (our own). Starting with the model’s original site weights requires controlling the effective activities on smaller sets to keep every denominator nonzero (our own).

**Paper or page:** [A Multi-Body Dobrushin-Sokal Criterion -- Part I](https://arxiv.org/abs/2508.12078v1). It says: “Suppose that Z(Λ) ≠ 0”

**Sources:**

- [Jan Philipp Neumann, A Multi-Body Dobrushin-Sokal Criterion -- Part I](https://arxiv.org/abs/2508.12078v1)

### Ordered spins bound boundary effects

**Remember:** Ordered spins turn each disagreement into one difference of probabilities.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 60K35. arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** In a finite Ising model each spin is +1 or −1, and ferromagnetic interactions favor equal neighbors. Fix the boundary spins first to +1 and then to −1. An ordered coupling draws both configurations together with their prescribed laws and makes the first spin at least the second everywhere.

**Problem.** The total variation distance between the two laws on a set of sites is at most the sum of the single-site distances. Total variation distance is the largest probability difference over events.

**How the definition helps.** With ordered binary spins, disagreement at one site has probability equal to the single-site total variation distance (our own). Any event on the region can differ only if some site disagrees (our own). Summing the site probabilities replaces a direct search over all regional events (our own). The existence of the ordered coupling uses the ordering theorem for ferromagnetic spins (our own).

**Paper or page:** [Fast relaxation of the random field Ising dynamics](https://arxiv.org/abs/2311.06171v2). It says: “Consider two subsets of vertices Δ ⊂ Δ′ ⊆ V”

**Sources:**

- [Ahmed El Alaoui, Ronen Eldan, Reza Gheissari, Arianna Piana, Fast relaxation of the random field Ising dynamics](https://arxiv.org/abs/2311.06171v2)

### Positivity excludes hidden forbidden states

**Remember:** Positive probabilities let the factorization proof take logarithms everywhere.

*Rules out counterexamples.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 60G60. arXiv math-ph, math.PR. Level 3: graduate.

**Definition.** Take a finite graph with finitely many spin values at each vertex. In a Markov random field each spin is independent of all non-neighbors given its neighbors. Positivity requires every configuration to have positive probability. A clique is a group of pairwise adjacent vertices.

**Problem.** A positive finite-state Markov random field has a product of weights on cliques. Without positivity, the local conditional independence rule does not imply that product form.

**How the definition helps.** Positivity rules out hidden forbidden configurations that every individual clique permits (our own). Give equal probabilities to 0011, 0100, 0101, and 1000 around a square (our own). Given the other two spins on any event of positive probability, at least one spin in each opposite pair is fixed (our own). Every edge permits 00, yet the law forbids 0000, so no product of nonnegative edge weights works (our own). For positive laws the Hammersley–Clifford proof can expand the log probabilities into clique contributions (our own).

**Wikipedia:** [Gibbs measure](https://en.wikipedia.org/wiki/Gibbs_measure). It says: “any positive probability distribution (nonzero density everywhere) having the Markov property can be represented as a Gibbs measure for an appropriate energy function.”

**Sources:**

- [C. J. Preston, Generalized Gibbs states and Markov random fields (1973)](https://doi.org/10.2307/1426035)

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

**Problem.** For a finite system, the free energy is an analytic function of temperature. So a phase transition can occur only in the limit of infinitely many particles.

**How the definition helps.** The definition turns a sharp transition into a failure of analyticity, which a finite system cannot have. Our own step: the partition function of a finite system is a finite sum of positive exponentials, so its logarithm is analytic. Lee and Yang made this precise: the complex zeros of the partition function can approach the real axis only in that limit. What stays hard is to prove that a given model has such a point, as Onsager did for the two-dimensional Ising model.

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

### Disjoint witnesses bound joint probabilities

**Remember:** Separate witnesses stop one open edge from doing double duty.

*Rules out counterexamples.* MSC 82B43 (Percolation), 60K35. arXiv math.PR, cond-mat.stat-mech. Level 3: graduate.

**Definition.** Open each edge of a finite graph independently. An event is increasing if opening more edges always preserves it. Two increasing events occur disjointly when each has a separate set of open edges sufficient to guarantee it. Ordinary intersection allows the same edge to count for both.

**Problem.** On a finite graph, the probability of disjoint occurrence is at most the product of the individual probabilities.

**How the definition helps.** Separate witnesses exclude the shared evidence that can make an intersection too likely (our own). Let both events require the same edge to open, with probability p strictly between zero and one (our own). Their intersection has probability p, greater than p², while disjoint occurrence is impossible (our own). The van den Berg–Kesten theorem proves the bound even after taking the union over all possible witnesses (our own).

**Wikipedia:** [Van den Berg–Kesten inequality](https://en.wikipedia.org/wiki/Van_den_Berg%E2%80%93Kesten_inequality). It says: “whose memberships in A and in B can be verified on disjoint subsets of indices.”

**Sources:**

- [J. van den Berg and H. Kesten, Inequalities with applications to percolation and reliability (1985)](https://doi.org/10.2307/3213860)

### Exponential work recovers free energy

**Remember:** The work factor replaces the initial Boltzmann weight with the final one.

*True by definition.* MSC 82C05 (Classical dynamic and nonequilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** Drive a thermally isolated classical system by changing its Hamiltonian, the function giving energy at each point in phase space. Define work W along a trajectory as final energy minus initial energy. Use exp(−βW) as the work statistic, where β is inverse temperature.

**Problem.** Start with probability density proportional to exp(−βH), where H is the initial Hamiltonian. Assume the evolution maps the initial phase space bijectively onto the final one and both equilibrium weight integrals are finite. The mean of exp(−βW) equals the final equilibrium weight integral divided by the initial one.

**How the definition helps.** The exponential work factor cancels the initial energy weight, leaving the weight of the final energy (our own). Hamiltonian evolution preserves phase-space volume, so changing to final coordinates gives the final partition sum (our own). The remaining work is to establish volume preservation and that external work equals the energy change (our own).

**Wikipedia:** [Jarzynski equality](https://en.wikipedia.org/wiki/Jarzynski_equality). It says: “The final state does not need to be in equilibrium.”

**Sources:**

- [Jarzynski, Nonequilibrium Equality for Free Energy Differences (1997)](https://doi.org/10.1103/PhysRevLett.78.2690)

### Pairwise balance excludes steady currents

**Remember:** A steady state can still circulate unless each pair balances.

*Rules out counterexamples.* MSC 82C05 (Classical dynamic and nonequilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** Call a stationary state balanced in detail if each pair of states exchanges probability at equal rates in both directions. Stationarity alone only balances the total inflow and outflow at each state.

**Problem.** In a finite continuous-time Markov chain, assume positive stationary probabilities and positive rates in both directions on every allowed edge. Then entropy production vanishes exactly at detailed balance.

**How the definition helps.** In our own finite-chain proof, detailed balance makes every contribution to entropy production vanish separately. If a and b are the two probability flows on one edge, its contribution is (a − b)ln(a/b). This is nonnegative and vanishes exactly when a equals b. Our own example uses a three-state ring whose clockwise rates are twice its counterclockwise rates. Its uniform stationary state carries a current. The cited theorem proves a related equivalence for processes that combine jumps and continuous motion.

**Paper or page:** [Entropy production rate and time-reversibility for general jump diffusions on ℝⁿ](https://arxiv.org/abs/2506.13135v2). It says: “The entropy production rate vanishes at the stationary measure”

**Sources:**

- [Qi Zhang, Yubin Lu, Entropy production rate and time-reversibility for general jump diffusions on ℝⁿ](https://arxiv.org/abs/2506.13135v2)
- [J. Schnakenberg, Network theory of microscopic and macroscopic behavior of master equation systems](https://doi.org/10.1103/revmodphys.48.571)

### Heat-bath updates are projections

**Remember:** Once averaged over a spin, a second average changes nothing.

*True by definition. Confidence: medium.* MSC 82C20 (Dynamic lattice systems (kinetic Ising, etc.) and systems on graphs in time-dependent statistical mechanics), 82M31. arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** Choose one site in a finite spin system at equilibrium. A heat-bath step redraws that spin conditional on all the others. Its operator takes a function to its expected value after the update. This describes the step without listing its full transition matrix.

**Problem.** On square-integrable functions of the whole configuration, this operator projects orthogonally onto the functions of the other spins.

**How the definition helps.** The conditional average already depends only on the other spins, so averaging twice gives the same result (our own). The residual has conditional mean zero and hence zero inner product with every function of those spins (our own). This conditional expectation identity supplies the orthogonality (our own).

**Wikipedia:** [Gibbs sampling](https://en.wikipedia.org/wiki/Gibbs_sampling). It says: “The Gibbs sampling algorithm generates an instance from the distribution of each variable in turn, conditional on the current values of the other variables.”

**Sources:** none listed. No primary source with a working link was found.

### Insertion energies make particle births reversible

**Remember:** The weight for adding a particle pays for its reverse removal.

*True by definition.* MSC 82C22 (Interacting particle systems in time-dependent statistical mechanics). arXiv math.PR, cond-mat.stat-mech. Level 3: graduate.

**Definition.** Fix exterior particles around a bounded region of finite volume. The Gibbs density for n particle positions is proportional to exp(−E) times the activity to power n, divided by n factorial. Here E is their energy including the exterior interaction, measured in thermal units. Remove each particle at rate one and add particles at rate density equal to the activity times exp(−insertion energy).

**Problem.** Assume an allowed exterior, finite nonnegative activity and a uniform lower bound on the energy change from adding a particle. Under the Gibbs law, this process is reversible, meaning that its stationary trajectories have the same law backward in time.

**How the definition helps.** Choosing births by the ratio of Gibbs weights balances every addition against a removal (our own). Integrating over removal choices cancels the extra particle factorial in the Gibbs law (our own). This proves equality of the forward and reverse equilibrium flows (our own). The energy bound keeps the total birth rate finite (our own).

**Paper or page:** [Uniqueness of locally stable Gibbs point processes via spatial birth-death dynamics](https://arxiv.org/abs/2407.01321v1). It says: “The Markov transition family associated to K₍Λ∣ξ₎ is reversible with respect to μ₍Λ∣ξ₎.”

**Sources:**

- [\[, ', S, a, m, u, e, l,  , B, a, g, u, l, e, y, ', ,,  , ', A, n, d, r, e, a, s,  , G, ö, b, e, l, ', ,,  , ', M, a, r, c, u, s,  , P, a, p, p, i, k, ', \], Uniqueness of locally stable Gibbs point processes via spatial birth-death dynamics](https://arxiv.org/abs/2407.01321v1)

### Sorting solves hard-rod motion

**Remember:** Let the points pass through, then sort to recover the rods.

*True by definition.* MSC 82C23 (Exactly solvable dynamic models in time-dependent statistical mechanics), 82C21. arXiv math-ph. Level 3: graduate.

**Definition.** Take finitely many rods of equal mass and length on an infinite line, with elastic collisions. Number them from left to right, starting at zero. Subtract each rod’s number times its length from its center, then move each resulting point at its initial velocity. Sort these positions at each time and restore the offsets.

**Problem.** For almost every allowed initial state, this formula gives the rod positions between collisions. Continuity gives their positions at collisions.

**How the definition helps.** At a crossing, sorting swaps the two velocities, just as a collision of equal masses does (our own). The proof of equivalence uses the elastic collision law and excludes multiple collisions for generic data (our own).

**Paper or page:** [Weyl Group Representation of Billiard Trajectories for One-dimensional Hard Sphere Dynamics](https://arxiv.org/abs/2311.00446v1). It says: “the unique momentum- and energy-conserving billiard trajectory”

**Sources:**

- [Mark Wilkinson, Weyl Group Representation of Billiard Trajectories for One-dimensional Hard Sphere Dynamics](https://arxiv.org/abs/2311.00446v1)

### Symmetric jump weights ensure reversibility

**Remember:** Split the energy difference evenly between the forward and reverse rates.

*True by definition.* MSC 82C31 (Stochastic methods (Fokker-Planck, Langevin, etc.) applied to problems in time-dependent statistical mechanics), 82C35. arXiv math-ph, cond-mat.stat-mech. Level 3: graduate.

**Definition.** Fix an energy E for each state and an inverse temperature β. For each pair of distinct states choose a finite nonnegative base rate that is the same in both directions. Multiply it by exp(−β ΔE/2), where ΔE is the destination energy minus the starting energy.

**Problem.** On a finite state space, start the resulting jump process with probabilities proportional to exp(−βE). Its law then stays the same when time runs backward.

**How the definition helps.** Multiplying a rate by its starting probability leaves a symmetric factor depending on the average of the two energies (our own). Thus every equilibrium jump has the same probability flow as its reverse (our own). The detailed balance theorem converts this paired equality into reversibility, replacing a direct comparison of path laws (our own).

**Paper or page:** [Entropy production rate and time-reversibility for general jump diffusions on ℝⁿ](https://arxiv.org/abs/2506.13135v2). It says: “where s(x,y) = s(y,x) is a nonnegative measurable symmetric function”

**Sources:**

- [Qi Zhang, Yubin Lu, Entropy production rate and time-reversibility for general jump diffusions on ℝⁿ](https://arxiv.org/abs/2506.13135v2)

### Path ratios give fluctuation identities

**Remember:** The inverse path ratio changes forward weights into reverse weights.

*True by definition.* MSC 82C35 (Irreversible thermodynamics, including Onsager-Machlup theory). arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** Take two experiments with the same possible paths. Let P be the forward path probabilities and Q the reverse experiment’s probabilities after reversing each path. Define entropy production on a path as S = log(P/Q).

**Problem.** The forward expectation of exp(−S) is one. The forward weight of paths with S = s is exp(s) times their weight under Q.

**How the definition helps.** Exponentiating −S gives Q/P, so averaging under P simply sums Q (our own). On paths with S = s, multiplying Q by exp(s) recovers P (our own). Starting from heat and work, one must prove that the physical entropy production equals this log ratio (our own).

**Wikipedia:** [Crooks fluctuation theorem](https://en.wikipedia.org/wiki/Crooks_fluctuation_theorem). It says: “The most general statement of the CFT relates the probability of a space-time trajectory x(t) to the time-reversal of the trajectory x̃(t).”

**Sources:**

- [Gavin E. Crooks, Entropy production fluctuation theorem and the nonequilibrium work relation for free energy differences (1999)](https://doi.org/10.1103/PhysRevE.60.2721)

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

### Gaussian thermal correlations use pairs

**Remember:** Once the thermal state is Gaussian, only pairs need calculations.

*True by definition.* MSC 82B10 (Quantum equilibrium statistical mechanics (general)). arXiv math-ph, cond-mat.stat-mech. Level 4: research.

**Definition.** Consider fermions, particles whose wave functions change sign when two particles are exchanged. The basic field operators add or remove a particle, or form linear combinations of those operations. In an even quasi-free state, odd field moments vanish and even moments sum over pairings. Each pairing contributes its two-point moments multiplied together, with a minus sign for each pair of crossing arcs.

**Problem.** For a free fermion thermal state of the cited model with finite normalizing trace, the four-field moment has three terms. Pairings (12)(34), (13)(24), and (14)(23) have signs +, −, and +, respectively.

**How the definition helps.** The quasi-free definition gives the three pairings in their original operator order without computing a new thermal trace (our own). The cited result supplies the harder step by proving that the thermal state is quasi-free.

**Paper or page:** [On the semiclassical regularity of thermal equilibria](https://arxiv.org/abs/2208.07911v1). It says: “is quasi-free and its one-particle reduced density matrix operator is given”

**Sources:**

- [Jacky J. Chong, Laurent Lafleche, Chiara Saffirio, On the semiclassical regularity of thermal equilibria](https://arxiv.org/abs/2208.07911v1)

### A shared field separates spins

**Remember:** One shared field carries all the mean-field dependence.

*Makes the theorem clean to state or prove.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 82B26. arXiv cond-mat.stat-mech, math.PR. Level 4: research.

**Definition.** In the ferromagnetic Curie–Weiss model, every pair of spins has the same positive interaction strength. Write the exponential of the squared spin sum as an integral over one Gaussian variable. Keep that variable as an extra field shared by all spins. Conditional on it, the exponent is a sum of terms linear in individual spins.

**Problem.** Given the extra field and fixed site fields, all spins are independent. At fixed positive inverse temperature, concentration of the extra field at one value gives the corresponding product limit for any fixed set of spins.

**How the definition helps.** Fixing the extra field makes the exponential weight a product of one-spin factors (our own). Integrating the Gaussian variable recovers the interacting law exactly (our own). Each one-spin probability varies continuously with the field, so concentration gives the product limit (our own). The hard step in the cited model is proving that concentration for almost every realization of the site fields (our own).

**Paper or page:** [Propagation of chaos in the Random field Curie-Weiss model](https://arxiv.org/abs/2312.01866v1). It says: “Assume that the function G(y) has a unique, non-degenerate global maximum in some point y₀.”

**Sources:**

- [Matthias Löwe, Zakhar Kabluchko, Propagation of chaos in the Random field Curie-Weiss model](https://arxiv.org/abs/2312.01866v1)

### Continuity excludes a decimated Ising law

**Remember:** Distant spins must lose their influence when nearby spins are fixed.

*Rules out counterexamples.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv math.PR, cond-mat.stat-mech. Level 4: research.

**Definition.** A spin law is quasilocal if one can choose conditional probabilities that depend continuously on the exterior spins. Agreement on a growing neighborhood must make distant changes negligible. Finite-spin Gibbs laws defined by interactions whose absolute strengths per site have uniformly vanishing tails satisfy this condition.

**Problem.** Consider the cited square-lattice Ising model with nearest-neighbor coupling along one axis and power-law coupling along the other. The decay exponent α satisfies 1 &lt; α ≤ 2. At sufficiently low temperature, retaining only sites with two even coordinates destroys quasilocality in the state selected by positive boundary spins.

**How the definition helps.** An unavoidable jump in a conditional probability rules out every continuous version and hence every Gibbs description with such interactions (our own). Near the alternating retained spins, distant boundary choices select different phases among the discarded spins (our own). The hard estimate shows a persistent gap in the expected central spin on exterior events of positive probability (our own).

**Paper or page:** [Decimations for Two-dimensional Ising and Rotator Models I](https://arxiv.org/abs/2105.07950v1), [Decimations for Two-dimensional Ising and Rotator Models I](https://arxiv.org/abs/2105.07950v1). It says: “is non-quasilocal, hence non-Gibbs, and so are all decimated Gibbs measures.”

**Sources:**

- [\[, ", M, a, t, t, e, o,  , D, ', A, c, h, i, l, l, e, ", ,,  , ', A, e, r, n, o, u, t,  , C, .,  , D, .,  , v, a, n,  , E, n, t, e, r, ', ,,  , ', A, r, n, a, u, d,  , L, e,  , N, y, ', \], Decimations for Two-dimensional Ising and Rotator Models I](https://arxiv.org/abs/2105.07950v1)

### Normalization excludes uniform heights

**Remember:** A valid branch recursion still needs a finite single-site normalization.

*Rules out counterexamples.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv math-ph, math.PR. Level 4: research.

**Definition.** Give each vertex of a regular tree an integer height. A boundary law assigns branch weights that agree with the weights obtained by summing over each child height. Call the law normalizable if the resulting weights at each vertex sum to a finite number.

**Problem.** A normalizable boundary law defines a unique tree-indexed Markov chain in the set of Gibbs measures. Normalizability is needed: when the edge weight is a positive summable function of the height difference, a constant positive boundary law solves the recursion but gives no probability distribution at a vertex.

**How the definition helps.** Normalizability gives a finite sum at each vertex, which turns branch weights into probabilities. The constant message gives the same positive weight to every integer height, so these weights cannot be normalized (our own). The boundary-law theorem carries the existence proof once the finite-sum condition holds (our own).

**Paper or page:** [Gradient Gibbs measures with periodic boundary laws of a generalized SOS model on a Cayley tree](https://arxiv.org/abs/2309.00867v1). It says: “defines a unique tree-indexed Markov chain μ ∈ 𝒢(γ)”

**Sources:**

- [F. H. Haydarov, R. A. Ilyasova, Gradient Gibbs measures with periodic boundary laws of a generalized SOS model on a Cayley tree](https://arxiv.org/abs/2309.00867v1)

### Path recoloring switches current sources

**Remember:** Switch the colors along a path to move its odd endpoints.

*Makes the theorem clean to state or prove.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv cond-mat.stat-mech, math.PR. Level 4: research.

**Definition.** A current assigns a nonnegative integer to each edge of a finite graph. Draw that many distinct copies of each edge. The sources of a color are vertices incident to an odd number of copies of that color. Write A △ B for the vertices belonging to exactly one of A and B.

**Problem.** Fix the copies and distinct vertices x and y joined by a path of copies. Equally many red-blue colorings have source sets (A, {x,y}) as have source sets (A △ {x,y}, ∅).

**How the definition helps.** Swapping colors along one fixed simple path changes both colors’ parities exactly at its ends (our own). Repeating the swap restores every color, so it pairs the two sets of colorings (our own). Applying this count to spins requires expanding the Ising interaction weights and accounting for the different colorings of distinct copies (our own).

**Paper or page:** [A geometric perspective on the scaling limits of critical Ising and φ⁴ models in dimension d](https://arxiv.org/abs/2112.04248v3). It says: “for which there exists a sub-current $\\mathbf{n} ' \\leq \\mathbf m $ supported on $\\mathcal{E} \_2$ with $\\partial \\mathbf{n} '=B$”

**Sources:**

- [Michael Aizenman, A geometric perspective on the scaling limits of critical Ising and φ⁴ models in dimension d](https://arxiv.org/abs/2112.04248v3)

### The one-line projection of the Ising model has continuous one-sided predictions

**Remember:** A continuous prediction from the past need not extend to both sides.

*Makes the theorem clean to state or prove.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 60K35, 37D35. arXiv math.PR, cond-mat.stat-mech. Level 4: research.

**Definition.** A g-measure is a measure on spin sequences whose conditional probability for the next spin depends continuously on the past spins. The Schonmann projection is the restriction of an extremal Gibbs measure of the two-dimensional Ising model to the spins on one line.

**Problem.** At sufficiently low temperature, the Schonmann projection is a regular g-measure. At low temperature it is also non-Gibbsian, because its conditional probabilities given both sides are discontinuous.

**How the definition helps.** The definition asks only how predictions depend on one side, so a weaker continuity can hold where two-sided continuity fails. The two-sided Gibbs condition would miss that regularity. In our own words, the theorem still needs a proof, which in the paper uses contour estimates at low temperature.

**Paper or page:** [The Schonmann projection as a g-measure-, how Gibbsian is it?](https://arxiv.org/abs/2102.10622v2). It says: “We prove that they are g-measures, which means that their conditional probabilities have a continuous dependence on one-sided boundary condition.”

**Sources:**

- [Aernout van Enter, Senya Shlosman, The Schonmann projection as a g-measure-, how Gibbsian is it?, arXiv:2102.10622v2 (2022)](https://arxiv.org/abs/2102.10622v2)

### Tree messages give Gibbs transitions

**Remember:** Sum out a branch once, then use its weight at each edge.

*Makes the theorem clean to state or prove.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 60K35. arXiv math-ph, math.PR. Level 4: research.

**Definition.** Consider a regular tree with d children per nonroot vertex, finitely many spins, and positive symmetric edge weights Q(i,j). A homogeneous boundary law gives each spin j a positive branch weight u(j). Write b(i) = Σⱼ Q(i,j)u(j). Require u(i) to be proportional to the dth power of b(i), with the same constant for every spin.

**Problem.** The corresponding equilibrium law has independent child branches given the parent spin i. The probability of child spin j equals Q(i,j)u(j)/b(i).

**How the definition helps.** The branch weight includes the whole subtree, so dividing the weighted edge by its row sum gives a transition probability (our own). The recursion ensures that the resulting tree law gives the prescribed conditional probabilities in each finite region (our own).

**Paper or page:** [Infinite-volume states with irreducible localization sets for gradient models on trees](https://arxiv.org/abs/2302.05398v1). It says: “Pμ(i,j) = u(j) Q(i−j)/(Q ∗ u)(i)”

**Sources:**

- [Alberto Abbondandolo, Florian Henning, Christof Kuelske, Pietro Majer, Infinite-volume states with irreducible localization sets for gradient models on trees](https://arxiv.org/abs/2302.05398v1)

### Local swaps commute rows

**Remember:** Slide the crossing through one column at a time.

*True by definition. Confidence: medium.* MSC 82B23 (Exactly solvable models; Bethe ansatz). arXiv math-ph, cond-mat.stat-mech. Level 4: research.

**Definition.** In the six-vertex model, each vertex has four arrows, two pointing in and two out. Each allowed arrangement has a weight. A periodic row defines a matrix by summing products of weights over the internal arrows, including the arrow joining its ends. Choose two rows whose weights satisfy the Yang–Baxter equation with an invertible crossing operator.

**Problem.** Periodic six-vertex row transfer matrices commute if an invertible crossing operator satisfies the local swapping relation with the row weights.

**How the definition helps.** The equation lets the crossing operator pass one column while exchanging the order of its two row weights (our own). Repeat across the row (our own). Summing the internal indices around both closed rows takes a trace and removes the crossing and its inverse (our own). This replaces direct multiplication of large matrices with the task of finding weights that satisfy one local identity (our own).

**Paper or page:** [Switch Operators for the Six-Vertex Model](https://arxiv.org/abs/2302.08089v3). It says: “Consider a six-vertex model and attach a cross vertex. Then the following relationship between partition functions holds.”

**Sources:**

- [Evelyn Choi, Jadon Geathers, Slava Naprienko, Switch Operators for the Six-Vertex Model](https://arxiv.org/abs/2302.08089v3)

### Path reversal gives fluctuation symmetry

**Remember:** Reversing a path negates its log probability ratio.

*True by definition.* MSC 82C05 (Classical dynamic and nonequilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech. Level 4: research.

**Definition.** For a sampled trajectory, divide its probability density by the density of its time reversal under the same law. Define entropy production as the natural log of that ratio, in units with Boltzmann’s constant equal to one. This replaces an expression in forward transition and endpoint terms with one ratio.

**Problem.** For the paper’s centered, stable Gaussian Markov chains, the entropy produced per step has a rate function I. It describes exponential decay of probabilities as the path length grows and satisfies I(−w) = I(w) + w.

**How the definition helps.** In our own derivation, swapping each path with its reverse negates the log ratio and gives a finite-time symmetry. Our own rate-function argument passes that symmetry to the exponential rates once they exist. The proof of existence for these Gaussian chains is the harder step.

**Paper or page:** [Large deviations for quadratic functionals of stable Gauss-Markov chains and entropy production](https://arxiv.org/abs/2204.08059v1). It says: “and I(−w) = I(w) + w for all w ∈ ℝ.”

**Sources:**

- [Marco Zamparo, Massimiliano Semeraro, Large deviations for quadratic functionals of stable Gauss-Markov chains and entropy production](https://arxiv.org/abs/2204.08059v1)

### Path support restores fluctuation equality

**Remember:** Every event impossible in the forward experiment must also be impossible under reversed paths.

*Rules out counterexamples.* MSC 82C05 (Classical dynamic and nonequilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech. Level 4: research.

**Definition.** View paths from the reverse experiment in forward time order by reversing each recorded trajectory. Require its law R to give zero probability to every set of forward probability zero. Using densities p and r against the same measure, define σ = ln(p/r) on sampled forward paths. Set σ = +∞ where p is positive and r is zero.

**Problem.** Under this condition the forward mean of exp(−σ) equals one. In general it equals one minus the reverse probability of the set where p vanishes.

**How the definition helps.** Our own calculation cancels p in the forward mean, leaving the integral of r over the set where p is positive. The stated condition makes this integral one. Our own example starts with gas confined to half a box and lets it expand freely. Reversing a compression path can give an initial position in the initially empty half, which the forward preparation excludes. Identifying the density ratio with physical entropy production requires a model of the dynamics.

**Wikipedia:** [Fluctuation theorem](https://en.wikipedia.org/wiki/Fluctuation_theorem). It says: “This condition is known as the condition of ergodic consistency.”

**Sources:**

- [Yûto Murashita, Ken Funo, and Masahito Ueda, Nonequilibrium equalities in absolutely irreversible processes](https://doi.org/10.1103/physreve.90.042110)

### Subtracting steady heat makes excess finite

**Remember:** Subtract the running cost before adding up the transient cost.

*Rules out counterexamples.* MSC 82C05 (Classical dynamic and nonequilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech. Level 4: research.

**Definition.** For a driven Markov chain on a finite ring, subtract the steady mean heat flow from the heat flow at each state. Define excess heat as the time integral of the expected difference from an initial state. Without the subtraction the integral would include the heat needed to sustain steady operation.

**Problem.** Suppose the continuous-time chain can reach every state from every other state. For centered heat flow f, the integrated excess V has steady mean zero and uniquely solves LV = −f. The generator L gives the initial rate of change of an expected observable.

**How the definition helps.** Our own explanation subtracts the constant heat flow that survives indefinitely. The remaining expected flow decays exponentially on a finite irreducible ring, so its integral converges. Integrating its time derivative gives LV = −f. Our own counterexample uses a uniformly driven ring with nonzero steady heat flow, whose uncentered integral diverges.

**Paper or page:** [Drazin-Inverse and heat capacity for driven random walks on the ring](https://arxiv.org/abs/2204.04974v4). It says: “for a function f having ⟨f⟩ˢ = 0, then V₍f₎ = −Lᴰ⁻¹f.”

**Sources:**

- [Faezeh Khodabandehlou, Irene Maes, Drazin-Inverse and heat capacity for driven random walks on the ring](https://arxiv.org/abs/2204.04974v4)

### Transport distance bounds lost work

**Remember:** Moving a distribution farther in less time raises the lower bound on work.

*True by definition.* MSC 82C35 (Irreversible thermodynamics, including Onsager-Machlup theory). arXiv cond-mat.stat-mech. Level 4: research.

**Definition.** Join the initial and final probability densities by paths that conserve probability. Along each path, the velocity times density gives the probability current. Define squared transport distance as the infimum of the density-weighted integral of squared speed over space and one unit of time.

**Problem.** Consider particles in a changing potential at fixed temperature, with negligible inertia and constant positive friction. Mean work minus free energy change is at least friction times squared transport distance divided by the process duration.

**How the definition helps.** In our own proof, the observed motion is one admissible path, so its integrated cost bounds the minimum from above. Rescaling to unit time gives the inverse duration factor in our own calculation. The paper’s work balance identifies the actual cost with dissipated work after multiplication by friction. Our own comparison uses the dynamic transport theorem to identify the minimum with the least mean squared displacement over all endpoint couplings.

**Paper or page:** [On the relation between information and power in stochastic thermodynamic engines](https://arxiv.org/abs/2103.03986v1). It says: “𝒲 ≥ Δℱ + (γ/t𝒻) W₂²(p(0, ·), p(t𝒻, ·))”

**Sources:**

- [Amirhossein Taghvaei, Olga Movilla Miangolarra, Rui Fu, Yongxin Chen and Tryphon T. Georgiou, On the relation between information and power in stochastic thermodynamic engines](https://arxiv.org/abs/2103.03986v1)

### Matched moments conserve energy

**Remember:** Match the moments that collisions must leave unchanged.

*True by definition.* MSC 82C40 (Kinetic theory of gases in time-dependent statistical mechanics), 35Q20. arXiv math-ph. Level 4: research.

**Definition.** Model collisions by moving each species toward a target distribution at a specified rate. A moment is an integral of a distribution against a chosen function of momentum. Choose targets so that the rate-weighted change in each particle count vanishes. Require the same cancellation for total energy and total momentum across species.

**Problem.** Assume each species has a nonzero, nonnegative integrable distribution with finite particle, energy, and momentum moments. The collision term preserves each species’ particle number and the mixture’s total energy and momentum.

**How the definition helps.** Matching these moments makes the gain and loss terms cancel without tracking individual collisions (our own). The existence proof must still find targets with a common temperature and bulk velocity (our own).

**Paper or page:** [Relativistic BGK model for gas mixtures](https://arxiv.org/abs/2306.05349v1). It says: “Thus, the partial particle four-flow and the energy-momentum tensor of gas mixtures are conserved”

**Sources:**

- [Byung-Hoon Hwang, Myeong-Su Lee, Seok-Bae Yun, Relativistic BGK model for gas mixtures](https://arxiv.org/abs/2306.05349v1)
