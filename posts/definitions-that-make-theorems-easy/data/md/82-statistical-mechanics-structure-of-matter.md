### Counting swapped identical particles once resolves the Gibbs paradox

**Remember:** Swapping two identical atoms does not make a new state.

*Rules out counterexamples.* MSC 82B03 (Foundations of equilibrium statistical mechanics), 82B05. arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** In correct Boltzmann counting, states of identical particles that differ only by a permutation of the particles count as one state. For N particles, this divides the phase-space volume by N!.

**Problem.** In the thermodynamic limit, the classical ideal-gas entropy with Boltzmann counting is extensive. So two identical boxes at equal density and temperature have twice the entropy of one, and removing the partition leaves it unchanged.

**How the definition helps.** Dividing by N! subtracts k log N!, which by Stirling’s formula cancels the extra kN log N at fixed density (our own). The entropy is then proportional to N to leading order. Counting permutations separately instead gives a mixing term even for identical gases (our own).

**Wikipedia:** [Gibbs paradox](https://en.wikipedia.org/wiki/Gibbs_paradox). It says: “The paradox is averted by assuming the indistinguishability (at least effective indistinguishability) of the particles in the volume.”

**Sources:**

- [Jaynes, E. T. (1992). The Gibbs paradox. In Smith, Erickson and Neudorfer (eds.), Maximum Entropy and Bayesian Methods, Kluwer, 1–22.](https://bayes.wustl.edu/etj/articles/gibbs.paradox.pdf)

### Relative entropy selects Boltzmann equilibrium

**Remember:** Free energy above equilibrium is a scaled relative entropy.

*True by definition.* MSC 82B05 (Classical equilibrium statistical mechanics (general)), 80A05. arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** For a finite list of energies Eᵢ and T &gt; 0, the Boltzmann probabilities pᵢ are proportional to exp(−Eᵢ/(kT)), with Boltzmann constant k. For any probability vector q, define F(q) = ∑ᵢ qᵢEᵢ + kT∑ᵢ qᵢ ln qᵢ, counting zero terms as zero. Its relative entropy with respect to p is ∑ᵢ qᵢ ln(qᵢ/pᵢ), with the same convention.

**Problem.** At positive temperature T, the Boltzmann distribution uniquely minimizes free energy over probability distributions on the given states.

**How the definition helps.** Substituting the Boltzmann weights gives F(q) − F(p) = kT ∑ᵢ qᵢ ln(qᵢ/pᵢ), kT times the relative entropy (our own). Relative entropy is nonnegative and zero only when q = p, so p is the unique minimizer.

**nLab:** [Boltzmann distribution](https://ncatlab.org/nlab/show/Boltzmann+distribution). It says: “which maximizes the entropy subject to the constraint that the expectation value of the energy is fixed.”

**Sources:** none listed. No primary source with a working link was found.

### Boson mode sums require lower chemical potential

**Remember:** Unlimited occupancy needs a weight ratio below one.

*Rules out counterexamples.* MSC 82B10 (Quantum equilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech, math-ph. Level 2: later undergraduate.

**Definition.** For finitely many ideal boson modes, a basis state gives each mode a nonnegative integer occupation n. At inverse temperature β and chemical potential μ, occupation n of a mode of energy ε has weight exp(−β(ε − μ)n). A state’s weight is the product over modes, so each mode contributes a geometric series with ratio exp(−β(ε − μ)).

**Problem.** For finitely many ideal boson modes at positive temperature, the grand canonical law exists exactly when μ is below the lowest mode energy. Each mode then has a geometric occupation law.

**How the definition helps.** The grand sum factors into one geometric series per mode, which converges exactly when μ &lt; ε, so that its ratio is below one (our own). At μ = ε every term is one, and above it the terms grow (our own). Normalizing each factor gives independent geometric occupation laws (our own).

**nLab:** [Fock space](https://ncatlab.org/nlab/show/Fock+space). It says: “its Fock space is the space of quantum states of arbitrarily many such particles.”

**Wikipedia:** [Bose–Einstein statistics](https://en.wikipedia.org/wiki/Bose%E2%80%93Einstein_statistics). It says: “the grand partition function for bosons can be considered a geometric series and may be evaluated as such”

**Sources:** none listed. No primary source with a working link was found.

### Domain walls determine spins up to reversal

**Remember:** One starting spin fixes every spin across the walls.

*True by definition. Confidence: medium.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv cond-mat.stat-mech, math.PR. Level 2: later undergraduate.

**Definition.** The domain walls of an Ising configuration, with spins plus or minus one, are the edges whose two endpoint spins differ. Crossing a wall flips the spin, so the walls record the spins up to a global flip.

**Problem.** On a finite connected graph with no fixed spins, an edge set is a set of domain walls exactly when it meets every cycle evenly. Each such set comes from exactly two spin configurations, which have equal probability at zero field.

**How the definition helps.** A closed path flips the spin once per wall, so it crosses walls evenly (our own). Conversely, even parity lets a walk from one vertex define the spins consistently, one configuration per starting sign (our own). Global reversal preserves every pair energy at zero field, so the two have equal probability (our own).

**Paper or page:** [A General Coupling for Ising Models and Beyond](https://arxiv.org/abs/2506.10765v1). It says: “the uniform assignment of a spin configuration consistent with the domain walls η”

**Sources:**

- [\[, ', U, l, r, i, k,  , T, h, i, n, g, g, a, a, r, d,  , H, a, n, s, e, n, ', ,,  , ', J, i, a, n, p, i, n, g,  , J, i, a, n, g, ', ,,  , ', F, r, e, d, e, r, i, k,  , R, a, v, n,  , K, l, a, u, s, e, n, ', \], A General Coupling for Ising Models and Beyond](https://arxiv.org/abs/2506.10765v1)

### Spin reversal pairs polynomial zeros

**Remember:** Spin reversal exchanges the coefficients at opposite ends.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 82B26. arXiv cond-mat.stat-mech, math-ph. Level 2: later undergraduate.

**Definition.** For n spins ±1 in a common field h, let aₖ sum the interaction weights over configurations with exactly k down spins. With z = exp(−2h), the field polynomial ∑ₖ aₖzᵏ times exp(nh) is the partition function. Flipping every spin turns k down spins into n − k.

**Problem.** With spin-flip invariant interactions and a common field, the polynomial coefficients read the same in both directions. Thus its zeros occur in reciprocal pairs.

**How the definition helps.** Spin-flip invariance gives aₖ = aₙ₋ₖ, so z is a zero exactly when 1/z is, since a₀ = aₙ is nonzero (our own). For ferromagnetic pair interactions, which favor equal spins, the Lee–Yang theorem gives the stronger fact that every zero has modulus one (our own).

**Wikipedia:** [Lee–Yang theorem](https://en.wikipedia.org/wiki/Lee%E2%80%93Yang_theorem). It says: “With this change of variable the Lee–Yang theorem says that all zeros ρ lie on the unit circle.”

**Sources:**

- [T. D. Lee and C. N. Yang, Statistical Theory of Equations of State and Phase Transitions. II. Lattice Gas and Ising Model (1952)](https://doi.org/10.1103/PhysRev.87.410)

### Transfer matrices close rings by trace

**Remember:** Multiply along the chain and take the trace to close it.

*True by definition.* MSC 82B23 (Exactly solvable models; Bethe ansatz). arXiv cond-mat.stat-mech, math-ph. Level 2: later undergraduate.

**Definition.** For a uniform Ising ring with spins ±1 and inverse temperature β, the transfer matrix has entry T(s,t) = exp(−βE(s,t)). Here E(s,t) is the energy of one neighboring pair with spins s and t: their interaction plus half the field energy of each.

**Problem.** For a ring of N sites, the partition function equals the trace of the Nth power of T.

**How the definition helps.** Each configuration’s weight is a product of one T entry per edge, since each site’s field energy is split between its two edges (our own). Matrix multiplication sums over the interior spins, and the trace closes the ring by matching the first and last spin (our own).

**Wikipedia:** [Ising model](https://en.wikipedia.org/wiki/Ising_model). It says: “Z(β) = Tr(Vᴸ) = λ₁ᴸ + λ₂ᴸ”

**Sources:** none listed. No primary source with a working link was found.

### Independent free energies add

**Remember:** Independent weights multiply, so their free energies add.

*True by definition.* MSC 82B30 (Statistical thermodynamics). arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** At temperature T &gt; 0, the partition function Z sums exp(−E/(kT)) over states of energy E, with k Boltzmann’s constant. The Helmholtz free energy is −kT log Z, so a product of partition functions gives a sum of free energies.

**Problem.** At a common temperature, the Helmholtz free energies of two independent finite systems add when their energies add.

**How the definition helps.** For independent systems the joint states are pairs and energies add, so the weights multiply and Z factors (our own). The logarithm then makes the free energies add (our own).

**nLab:** [partition function](https://ncatlab.org/nlab/show/partition+function). It says: “sum over all states Ψ of the system and weigh each one by its energy EΨ.”

**Wikipedia:** [Partition function (statistical mechanics)](https://en.wikipedia.org/wiki/Partition_function_%28statistical_mechanics%29). It says: “the partition function of the entire system is the product of the individual partition functions”

**Sources:** none listed. No primary source with a working link was found.

### Shared thresholds order percolation configurations

**Remember:** A larger threshold never closes an open edge.

*True by definition.* MSC 82B43 (Percolation). arXiv math.PR, cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** Give each edge of a finite or countable graph an independent uniform number between zero and one. At level p, open the edges whose number is at most p. Since every level uses the same numbers, raising p only opens more edges.

**Problem.** For independent bond percolation, the probability of any measurable increasing event, one that stays true when more edges open, is nondecreasing in p.

**How the definition helps.** With shared numbers, the open set at level p lies inside the open set at every higher level (our own). So an increasing event that holds at p also holds above it (our own). At each level, edges are still open independently with probability p, so these are the percolation laws (our own).

**Wikipedia:** [Percolation theory](https://en.wikipedia.org/wiki/Percolation_theory). It says: “Since this probability is an increasing function of p (proof via coupling argument)”

**Sources:** none listed. No primary source with a working link was found.

### Random swaps give exclusion duality

**Remember:** Run the same swaps backward to find the starting sites.

*True by definition. Confidence: medium.* MSC 82C22 (Interacting particle systems in time-dependent statistical mechanics). arXiv math.PR, cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** On a finite graph, give each edge an independent Poisson clock of its fixed nonnegative rate, and swap the occupancies of its endpoints at each ring. The same swaps move labels attached to the sites, so each site at time t traces back to a unique starting site.

**Problem.** The chance that all sites in a given set are occupied at time t equals a reverse test. Run exclusion from that set for time t and ask whether it ends inside the original occupied set.

**How the definition helps.** A set is fully occupied at time t exactly when its traced-back starting sites were all occupied (our own). Running the clock rings backward has the same law as running them forward, so the traced-back set is exclusion started from that set (our own). Swaps of unlike occupancies are exactly the particle jumps, so the swap process is exclusion (our own).

**Paper or page:** [Graphical constructions of simple exclusion processes with applications to random environments](https://arxiv.org/abs/2304.07703v3). It says: “ℒf(η) = ∑₍{x,y}∈ℰₛ₎ cₓᵧ \[f(ηˣʸ) − f(η)\].”

**Sources:**

- [\[, ', A, l, e, s, s, a, n, d, r, a,  , F, a, g, g, i, o, n, a, t, o, ', \], Graphical constructions of simple exclusion processes with applications to random environments](https://arxiv.org/abs/2304.07703v3)

### The Metropolis–Hastings rule maximizes reversible acceptance

**Remember:** Take the smaller flow and use it in both directions.

*True by definition.* MSC 82M31 (Monte Carlo methods applied to problems in statistical mechanics). arXiv math.PR, cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** With target probabilities π(x) &gt; 0 and proposal probabilities q(x,y), the proposed flow from x to y is f(x,y) = π(x)q(x,y). Metropolis–Hastings moves from x to a distinct y with probability min(f(x,y), f(y,x))/π(x), using the smaller flow in both directions, and stays at x otherwise.

**Problem.** Fix positive target probabilities on a finite state space. Among rules reversible for this target that accept or reject the same proposal, Metropolis–Hastings maximizes every transition probability between distinct states.

**How the definition helps.** Reversibility needs equal accepted flows both ways, and neither can exceed its proposed flow, so both are at most the smaller one (our own). Metropolis–Hastings attains this bound (our own). Dividing by the forward flow gives the usual acceptance ratio (our own).

**Wikipedia:** [Metropolis–Hastings algorithm](https://en.wikipedia.org/wiki/Metropolis%E2%80%93Hastings_algorithm). It says: “A(x′, x) = min(1, (P(x′)/P(x))(g(x ∣ x′)/g(x′ ∣ x))).”

**Sources:**

- [Hastings, Monte Carlo sampling methods using Markov chains and their applications (1970)](https://doi.org/10.1093/biomet/57.1.97)

### Canonical weights bar negative heat capacity

**Remember:** In a heat bath, heat capacity is a scaled energy variance.

*Rules out counterexamples.* MSC 82B05 (Classical equilibrium statistical mechanics (general)), 80A10. arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** Use the canonical distribution for a system in a heat bath. It assigns each state with energy E a weight proportional to exp(−E/(kT)), with k the Boltzmann constant. This fixes temperature T rather than the energy of each state.

**Problem.** Take finitely many states with temperature-independent energies and T &gt; 0. The heat capacity d⟨E⟩/dT at fixed external parameters equals the energy variance over kT², so it is nonnegative.

**How the definition helps.** Differentiating the exponential weights in T turns d⟨E⟩/dT into the energy variance over kT², which cannot be negative (our own). An isolated gravitating system, as in the quote, can heat up as it loses energy, so its heat capacity can be negative. Its weights are not canonical, since it has no heat bath.

**Wikipedia:** [Heat capacity](https://en.wikipedia.org/wiki/Heat_capacity). It says: “If the system loses energy, for example, by radiating energy into space, the average kinetic energy actually increases.”

**Sources:**

- [D. Lynden-Bell and R. M. Lynden-Bell, On the negative specific heat paradox](https://doi.org/10.1093/mnras/181.3.405)

### Imaginary time implies thermal stationarity

**Remember:** Correlations extend across an imaginary-time strip of width β.

*True by definition.* MSC 82B10 (Quantum equilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** Let αₜ be the dynamics of a unital observable algebra and fix β &gt; 0. A state ω satisfies the thermal strip condition when each correlation t ↦ ω(Aαₜ(B)) extends to a bounded continuous function F on 0 ≤ Im z ≤ β, analytic inside. Its top edge must be F(t + iβ) = ω(αₜ(B)A), so with A the identity both edges carry ω(αₜ(B)).

**Problem.** Every state satisfying this strip condition has time-independent expectations.

**How the definition helps.** With A the identity the two edges match, so translated copies of F glue across their edges, analytically by Morera’s theorem (our own). The result is a bounded entire function, constant by Liouville’s theorem (our own).

**nLab:** [KMS state](https://ncatlab.org/nlab/show/KMS+state). It says: “The final formulation of the KMS condition, now widely accepted, is due to Haag-Hugenholtz-Winnink 67.”

**Wikipedia:** [KMS state](https://en.wikipedia.org/wiki/KMS_state). It says: “If the functions converge, then they have to be analytic within the strip they are defined over”

**Sources:**

- [Rudolf Haag, N. M. Hugenholtz and M. Winnink, On the equilibrium states in quantum statistical mechanics (1967)](https://doi.org/10.1007/BF01646342)

### Relative entropy measures free-energy gaps

**Remember:** The thermal matrix logarithm turns relative entropy into free energy.

*True by definition.* MSC 82B10 (Quantum equilibrium statistical mechanics (general)), 82B30. arXiv math-ph, cond-mat.stat-mech. Level 3: graduate.

**Definition.** For a finite-dimensional Hamiltonian H and T &gt; 0, with Boltzmann’s constant one, the thermal state is φ = exp(−H/T)/tr exp(−H/T). A density matrix ρ has free energy F(ρ) = tr(ρH) + T tr(ρ log ρ), with zero-weight terms taken as zero. Its relative entropy to φ is tr ρ(log ρ − log φ).

**Problem.** On a finite-dimensional space at positive temperature, the thermal state uniquely minimizes free energy. The free energy of any trial state equals the minimum plus temperature times its relative entropy with respect to the thermal state.

**How the definition helps.** Since log φ = −H/T − log tr exp(−H/T), substitution gives F(ρ) = F(φ) + T times the relative entropy (our own). Klein’s inequality makes relative entropy nonnegative, with equality only at ρ = φ, so φ is the unique minimizer (our own).

**nLab:** [relative entropy](https://ncatlab.org/nlab/show/relative+entropy). It says: “S(ρ/φ) := tr ρ(log ρ − log φ)”

**Sources:** none listed. No primary source with a working link was found.

### The thermal strip forces stationarity

**Remember:** Real-time correlations continue through imaginary time β, with the order swapped.

*True by definition. Confidence: medium.* MSC 82B10 (Quantum equilibrium statistical mechanics (general)). arXiv math-ph, cond-mat.stat-mech. Level 3: graduate.

**Definition.** A Kubo–Martin–Schwinger state ω on a unital observable algebra, at inverse temperature β &gt; 0, gives each pair A, B a bounded continuous function F on 0 ≤ Im z ≤ β, analytic inside. Its edges are F(t) = ω(AB(t)) and F(t + iβ) = ω(B(t)A) for real t, where B(t) is B evolved in time.

**Problem.** Every Kubo–Martin–Schwinger state at positive inverse temperature is invariant under real-time evolution.

**How the definition helps.** With A the identity, both strip edges equal ω(B(t)), so translated strips glue, analytically by Morera’s theorem (our own). The union is a bounded entire function, constant by Liouville’s theorem, so ω(B(t)) = ω(B) (our own).

**Wikipedia:** [KMS state](https://en.wikipedia.org/wiki/KMS_state). It says: “a state satisfying the KMS condition”

**Sources:**

- [Haag, Hugenholtz and Winnink, On the equilibrium states in quantum statistical mechanics (1967)](https://doi.org/10.1007/BF01646342)

### Thermal balance selects Gibbs weights

**Remember:** Stationarity freezes the weights, but thermal balance fixes their ratios.

*Rules out counterexamples.* MSC 82B10 (Quantum equilibrium statistical mechanics (general)), 81T28. arXiv math-ph. Level 3: graduate.

**Definition.** Take the full matrix algebra of a finite system with energy matrix H, and β &gt; 0. A state ω satisfies the Kubo–Martin–Schwinger condition when ω(A exp(−βH) B exp(βH)) = ω(BA) for all matrices A, B.

**Problem.** On the full matrix algebra of a finite system, at β &gt; 0, the unique state satisfying this condition is the normalized exp(−βH).

**How the definition helps.** Write ω(A) = tr(ρA). Then the condition for all A, B forces exp(βH)ρ to commute with every matrix, so it is scalar and ρ is the normalized exp(−βH) (our own). Stationarity alone is weaker: the uniform state for H with two distinct energies is stationary but weights both energies equally (our own).

**nLab:** [KMS state](https://ncatlab.org/nlab/show/KMS+state). It says: “The final formulation of the KMS condition, now widely accepted, is due to Haag-Hugenholtz-Winnink 67.”

**Wikipedia:** [KMS state](https://en.wikipedia.org/wiki/KMS_state). It says: “We used the fact that the density matrix commutes with any function of (H − μN) and that the trace is cyclic.”

**Sources:**

- [R. Haag, N. M. Hugenholtz and M. Winnink, On the equilibrium states in quantum statistical mechanics (1967)](https://doi.org/10.1007/BF01646342)

### Clique weights separate regions

**Remember:** Fix the separating spins and the two sides have separate weights.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv math-ph, math.PR. Level 3: graduate.

**Definition.** On a finite graph with a finite spin space at each vertex, give each configuration probability proportional to a product of positive clique functions. A clique is a set of pairwise adjacent vertices, so no clique meets both of two groups that a vertex set separates.

**Problem.** If deleting a set of vertices separates two groups, the groups are independent given the spins on that set.

**How the definition helps.** Once the separating spins are fixed, no clique factor involves both sides, so the weight and its normalizing sum split into two factors (our own). The Hammersley–Clifford theorem does the work of deriving clique weights from local conditional independence (our own).

**Wikipedia:** [Hammersley–Clifford theorem](https://en.wikipedia.org/wiki/Hammersley%E2%80%93Clifford_theorem). It says: “If variables C and D are fixed, then the global Markov property requires that: A, B ⟂ E, F \| C, D”

**Sources:**

- [C. J. Preston, Generalized Gibbs states and Markov random fields (1973)](https://doi.org/10.2307/1426035)

### Cluster colors turn agreement into connectivity

**Remember:** Same cluster means same color, and different clusters choose colors independently.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** In the q-color Potts model on a finite graph (q ≥ 2), an edge of coupling K ≥ 0 weighs exp(K) when its colors agree, else one. Given the coloring, open each agreeing edge independently with probability 1 − exp(−K), and close the rest. Then every open cluster has one color (our own).

**Problem.** With free boundary and no external field, the probability of equal colors at two vertices is 1/q plus (1 − 1/q) times their connection probability.

**How the definition helps.** Given the open edges, all colorings constant on clusters have equal weight, since a closed edge contributes one and an open edge exp(K) − 1 (our own). So the clusters take independent uniform colors (our own). Two vertices agree surely when connected and with probability 1/q otherwise, which gives the formula (our own).

**Wikipedia:** [Potts model](https://en.wikipedia.org/wiki/Potts_model). It says: “two neighbouring FK clusters are colored independently.”

**Sources:**

- [Edwards and Sokal, Generalization of the Fortuin-Kasteleyn-Swendsen-Wang representation and Monte Carlo algorithm (1988)](https://doi.org/10.1103/PhysRevD.38.2009)

### Dimer signs prevent cancellation

**Remember:** Choose edge signs so that matching weights add instead of cancel.

*Rules out counterexamples.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 05C70. arXiv math-ph, cond-mat.stat-mech. Level 3: graduate.

**Definition.** A Kasteleyn matrix of a finite connected bipartite plane graph has rows for black vertices and columns for white ones. Each entry is a nonnegative edge weight with a chosen sign, or zero at a missing edge. The sign product around each bounded face of length 2k, counting repeated edges, is (−1)ᵏ⁺¹, so all perfect matchings enter the determinant with one sign.

**Problem.** Assume the graph is simple and has a perfect matching, a set of edges covering each vertex exactly once. The absolute determinant equals the sum over perfect matchings of the products of their edge weights.

**How the definition helps.** The face rule makes the determinant terms of all perfect matchings carry the same sign, so none cancel (our own). With unsigned unit weights on a square, the two matchings cancel to zero (our own). The work is to construct the signs and extend the face rule to cycles along which two matchings differ (our own).

**Wikipedia:** [Pfaffian orientation](https://en.wikipedia.org/wiki/Pfaffian_orientation). It says: “the choice of a Pfaffian orientation ensures that these contributions all have the same sign”

**Paper or page:** [Rank-N Dimer Models on Surfaces](https://arxiv.org/abs/2408.12066v1). It says: “Let the reference matching ℛ and Kasteleyn signs ε correspond to a spin structure η.”

**Sources:**

- [Sri Tata, Rank-N Dimer Models on Surfaces](https://arxiv.org/abs/2408.12066v1)
- [P. W. Kasteleyn, The statistics of dimers on a lattice (1961)](https://doi.org/10.1016/0031-8914(61)90063-5)

### Gibbs laws allow mixtures

**Remember:** Resample either component and the mixture stays the same.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** For each finite lattice region Λ, a local rule K\_Λ redraws the spins in Λ given the exterior and leaves the exterior fixed. The rules are consistent: K\_Δ K\_Λ = K\_Δ whenever Λ ⊆ Δ, applied left to right. A Gibbs law is a law μ with μK\_Λ = μ for every Λ, a linear condition on μ.

**Problem.** The Gibbs laws for a fixed family of local resampling rules form a convex set.

**How the definition helps.** Each K\_Λ acts linearly on laws, so a mixture of two fixed laws is again fixed (our own). The work lies in constructing consistent rules whose fixed laws have the prescribed conditional probabilities (our own).

**Wikipedia:** [Gibbs measure](https://en.wikipedia.org/wiki/Gibbs_measure). It says: “The set of Gibbs measures on a system is always convex”

**Sources:** none listed. No primary source with a working link was found.

### Gibbs measures turn a phase transition into non-uniqueness

**Remember:** A Gibbs measure looks like the Boltzmann distribution in every finite window.

*Makes the theorem clean to state or prove.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 82B26, 60K35. arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** Fix an interaction, inverse temperature β and single-site reference measures. A Gibbs measure is a law whose conditional density in each finite region, for almost every exterior, is proportional to exp(−βE) against the reference product. Here E includes interactions with the exterior.

**Problem.** For a fixed interaction and temperature, a phase transition in the Gibbs-measure sense means that several infinite-volume Gibbs measures exist. With fixed boundary conditions and a finite, positive partition function, a finite system has exactly one Gibbs measure.

**How the definition helps.** The definition fixes only conditional laws in finite windows, so several infinite-volume laws can meet the same rules (our own). In finite volume with fixed boundary, the rule is the whole density, so normalization fixes it (our own). Proving coexistence in a given model needs a separate argument (our own).

**Wikipedia:** [Gibbs measure](https://en.wikipedia.org/wiki/Gibbs_measure). It says: “The existence of more than one Gibbs measure is associated with statistical phenomena such as symmetry breaking and phase coexistence.”

**Sources:**

- [Dobrushin, R. L. (1968). The description of a random field by means of conditional probabilities and conditions of its regularity. Theory of Probability and Its Applications 13, 197–224.](https://doi.org/10.1137/1113026)
- [Lanford, O. E.; Ruelle, D. (1969). Observables at infinity and states with short range correlations in statistical mechanics. Communications in Mathematical Physics 13, 194–215.](https://doi.org/10.1007/BF01645487)

### Independence kills connected correlations

**Remember:** A log splits independent groups before the mixed derivative acts.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 60E10. arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** For bounded real random variables X₁,…,Xₙ, the joint connected correlation is the mixed derivative at zero, once in each tᵢ, of log 𝔼\[exp(∑ᵢ tᵢXᵢ)\].

**Problem.** The connected correlation vanishes when the variables split into two nonempty independent groups. For independent lattice spins, products involving disjoint groups of sites give an example.

**How the definition helps.** Independence of two groups factors the expectation, so its log is a sum of two functions, each free of one group’s parameters (our own). A derivative taken once in every parameter kills both terms (our own).

**Paper or page:** [The Strong Gauss Lucas Theorem and Analyticity of Correlation Functions via the Lee-Yang Theorem](https://arxiv.org/abs/2111.00650v1). It says: “Then the Ursell function $u<sub>k+2</sub>(\\sigma \_p,\\sigma \_\\ell ,\\sigma <sup>A<sub>1</sub></sup>,\\dots ,\\sigma <sup>A<sub>k</sub></sup>)= 0$.”

**Sources:**

- [Barry Simon, The Strong Gauss Lucas Theorem and Analyticity of Correlation Functions via the Lee-Yang Theorem](https://arxiv.org/abs/2111.00650v1)

### One-site ratios factor partition sums

**Remember:** Every new site multiplies the old sum by one plus its ratio.

*True by definition. Confidence: medium.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv math-ph, cond-mat.stat-mech. Level 3: graduate.

**Definition.** Build the partition sum by adding binary sites one at a time, starting from one, so that an empty new site keeps each old weight. The effective activity of a step is the occupied sum over the empty sum, and each step multiplies the partition sum by one plus it.

**Problem.** If each successive denominator is nonzero, the partition sum is the product of one plus the effective activity at each step. In particular, bounds strictly below one on the moduli of those activities keep the sum from vanishing.

**How the definition helps.** Each step multiplies the partition sum by one plus its effective activity, and the product telescopes (our own). Activities of modulus below one make each factor nonzero (our own). Starting from the model’s site weights, the work is to control the effective activities on smaller sets (our own).

**Paper or page:** [A Multi-Body Dobrushin-Sokal Criterion -- Part I](https://arxiv.org/abs/2508.12078v1). It says: “Suppose that Z(Λ) ≠ 0”

**Sources:**

- [Jan Philipp Neumann, A Multi-Body Dobrushin-Sokal Criterion -- Part I](https://arxiv.org/abs/2508.12078v1)

### Ordered spins bound boundary effects

**Remember:** Ordered spins turn each disagreement into one difference of probabilities.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 60K35. arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** In a finite ferromagnetic Ising model, which favors equal neighbors, fix the boundary spins to +1 for one law and to −1 for the other. An ordered coupling draws both configurations together with these laws so that the plus spin is at least the minus spin at every site. So the two spins at a site differ exactly when the plus one is +1 and the minus one is −1 (our own).

**Problem.** Total variation distance is the largest probability difference over events. Between the two laws, the distance on a set of sites is at most the sum of the single-site distances.

**How the definition helps.** With ordered spins, disagreement at a site has probability equal to the single-site distance (our own). An event on the set can differ between the two configurations only if some site disagrees, so a union bound gives the sum (our own). The ordered coupling exists by the ordering theorem for ferromagnetic spins (our own).

**Paper or page:** [Fast relaxation of the random field Ising dynamics](https://arxiv.org/abs/2311.06171v2). It says: “Consider two subsets of vertices Δ ⊂ Δ′ ⊆ V”

**Sources:**

- [Ahmed El Alaoui, Ronen Eldan, Reza Gheissari, Arianna Piana, Fast relaxation of the random field Ising dynamics](https://arxiv.org/abs/2311.06171v2)

### Positivity excludes hidden forbidden states

**Remember:** Without zero probabilities, local independence becomes clique factors.

*Rules out counterexamples.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 60G60. arXiv math-ph, math.PR. Level 3: graduate.

**Definition.** A positive Markov random field on a finite graph with finite spin spaces gives every configuration positive probability. It makes each spin conditionally independent of its non-neighbors given its neighbors.

**Problem.** A positive finite-state Markov random field is a product of weights on cliques, sets of pairwise adjacent vertices. Without positivity, the local conditional independence rule does not imply that product form.

**How the definition helps.** Positivity lets the Hammersley–Clifford proof expand log probabilities into clique contributions (our own). Our own counterexample is a four-cycle with equal mass on 0011, 0100, 0101 and 1000 in cyclic order, which satisfies the local rule. Every edge allows 00, yet 0000 has zero mass, so no nonnegative clique factors give this law (our own).

**Wikipedia:** [Gibbs measure](https://en.wikipedia.org/wiki/Gibbs_measure). It says: “any positive probability distribution (nonzero density everywhere) having the Markov property can be represented as a Gibbs measure for an appropriate energy function.”

**Sources:**

- [C. J. Preston, Generalized Gibbs states and Markov random fields (1973)](https://doi.org/10.2307/1426035)

### Local stability keeps partition sums finite

**Remember:** Each added particle lowers the energy by at most one constant.

*Rules out counterexamples.* MSC 82B21 (Continuum models (systems of particles, etc.) arising in equilibrium statistical mechanics). arXiv math.PR, cond-mat.stat-mech. Level 3: graduate.

**Definition.** A particle interaction is locally stable if adding one particle lowers the energy by at most a fixed constant C, in units of thermal energy. This holds for every allowed configuration, fixed exterior particles included.

**Problem.** Fix an allowed exterior around a bounded region of finite volume. At any finite nonnegative activity, the grand partition function, the sum of the weights of all particle counts with one activity factor per particle, is finite.

**How the definition helps.** Each particle multiplies the weight by at most exp(C), so n particles in volume V at activity z contribute at most (zV exp(C))ⁿ/n! (our own). The sum is therefore at most exp(zV exp(C)) (our own). With empty exterior, a constant negative pair energy lowers the energy quadratically in n, and the sum diverges for every z, V &gt; 0 (our own).

**Paper or page:** [Uniqueness of locally stable Gibbs point processes via spatial birth-death dynamics](https://arxiv.org/abs/2407.01321v1). It says: “In particular, μ₍Λ∣ξ₎ is well-defined.”

**Sources:**

- [\[, ', S, a, m, u, e, l,  , B, a, g, u, l, e, y, ', ,,  , ', A, n, d, r, e, a, s,  , G, ö, b, e, l, ', ,,  , ', M, a, r, c, u, s,  , P, a, p, p, i, k, ', \], Uniqueness of locally stable Gibbs point processes via spatial birth-death dynamics](https://arxiv.org/abs/2407.01321v1)

### Taking logs keeps only connected clusters

**Remember:** Write each Boltzmann pair factor as one plus a bond.

*True by definition.* MSC 82B21 (Continuum models (systems of particles, etc.) arising in equilibrium statistical mechanics). arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** Take a classical gas in finite volume with pair energies, and give a pair with energy u the Mayer weight f = exp(−βu) − 1, where β is inverse temperature. Each pair’s Boltzmann factor is then 1 + f, so expanding the product sums over graphs weighted by the product of f over their edges (our own).

**Problem.** Assume all graph integrals at each fixed particle count exist. In the formal series for the logarithm of the grand partition function, only connected graphs contribute.

**How the definition helps.** Each graph splits uniquely into connected components, so the grand partition function sums over sets of connected clusters (our own). With the factorial for labeled particles, a sum over sets of clusters is the exponential of the sum over single clusters (our own). The argument is formal, and convergence at nonzero activity needs a separate estimate (our own).

**Wikipedia:** [Cluster expansion](https://en.wikipedia.org/wiki/Cluster_expansion). It says: “Next, define the Mayer function fᵢⱼ by exp\[−βu₂(rᵢⱼ)\] = 1 + fᵢⱼ.”

**Paper or page:** [An inverse cluster expansion or the chemical potential](https://arxiv.org/abs/2312.13144v3). It says: “denotes the set of partitions of η into k non-empty sets”

**Sources:**

- [\[, ', F, a, b, i, o,  , F, r, o, m, m, e, r, ', \], An inverse cluster expansion or the chemical potential](https://arxiv.org/abs/2312.13144v3)

### Duality fixes the Ising critical point

**Remember:** Duality swaps hot and cold, so a lone critical point stays put.

*True by definition.* MSC 82B23 (Exactly solvable models; Bethe ansatz). arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** For the zero-field square-lattice Ising model with the same positive coupling K (coupling times inverse temperature) in both directions, the dual coupling K\* satisfies exp(−2K\*) = tanh K. It swaps high and low temperature: the polygon expansion at K has the same weights as the expansion in opposite-spin boundaries at K\* (our own).

**Problem.** Suppose the free energy has exactly one singularity at a positive real coupling. That coupling satisfies sinh(2K) = 1.

**How the definition helps.** Singularities of the free energy come in pairs K and K\*, so a unique positive singularity must satisfy K = K\*. Then exp(−2K) = tanh K, which is equivalent to sinh(2K) = 1. The hard step relates the infinite-volume free energies at K and K\* through the two expansions (our own).

**Wikipedia:** [Kramers–Wannier duality](https://en.wikipedia.org/wiki/Kramers%E2%80%93Wannier_duality). It says: “in the case of there being a unique critical point, it would be located at K = K\*”

**Sources:**

- [Kramers and Wannier, Statistics of the Two-Dimensional Ferromagnet. Part I (1941)](https://doi.org/10.1103/PhysRev.60.252)

### Phase transitions defined as non-analytic points need infinitely many particles

**Remember:** A phase transition is where free energy stops being a power series.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 82B26 (Phase transitions (general) in equilibrium statistical mechanics), 82B30. arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** A phase transition is a point where the free energy is not analytic, meaning not locally a convergent power series, in a thermodynamic variable such as temperature.

**Problem.** For a finite system with finitely many states and fixed finite energies, the free energy is analytic at every positive temperature. A transition in this class requires a thermodynamic limit.

**How the definition helps.** A finite sum of positive analytic Boltzmann weights is positive and analytic at positive temperature (our own). Its logarithm times minus the thermal energy is then analytic, so no transition can occur (our own).

**Wikipedia:** [Phase transition](https://en.wikipedia.org/wiki/Phase_transition). It says: “Phase transitions occur when the thermodynamic free energy of a system is non-analytic for some choice of thermodynamic variables”

**Sources:**

- [Yang, C. N.; Lee, T. D. (1952). Statistical theory of equations of state and phase transitions. I. Theory of condensation. Physical Review 87(3), 404–409.](https://doi.org/10.1103/PhysRev.87.404)

### Counting flows gives random-cluster weights

**Remember:** Count flows, and each independent cycle gives one factor q.

*True by definition.* MSC 82B43 (Percolation). arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** Open each edge of a finite oriented graph independently, each with its own probability strictly between 0 and 1. A flow puts values modulo an integer q ≥ 2 on the open edges, with inflow equal to outflow at every vertex. Weight each pair of an open edge set and a flow by the probability of that edge set.

**Problem.** Ignoring the flow gives the random-cluster law with the original opening odds multiplied by q. This law multiplies independent edge weights by q for each connected component, including isolated vertices.

**How the definition helps.** An open edge set with m edges, v vertices and c components carries exactly q<sup>(m − v + c)</sup> flows (our own). Values on the open edges outside a spanning forest are free, and balance at the vertices then fixes the forest values (our own). Since v is fixed, this gives one factor q per open edge and one per component (our own).

**Paper or page:** [A General Coupling for Ising Models and Beyond](https://arxiv.org/abs/2506.10765v1). It says: “The marginal of 𝒫 on Ω is the random-cluster model with cluster-weight q”

**Sources:**

- [\[, ', U, l, r, i, k,  , T, h, i, n, g, g, a, a, r, d,  , H, a, n, s, e, n, ', ,,  , ', J, i, a, n, p, i, n, g,  , J, i, a, n, g, ', ,,  , ', F, r, e, d, e, r, i, k,  , R, a, v, n,  , K, l, a, u, s, e, n, ', \], A General Coupling for Ising Models and Beyond](https://arxiv.org/abs/2506.10765v1)

### Disjoint witnesses bound joint probabilities

**Remember:** Separate witnesses stop one open edge from doing double duty.

*Rules out counterexamples.* MSC 82B43 (Percolation), 60K35. arXiv math.PR, cond-mat.stat-mech. Level 3: graduate.

**Definition.** Two increasing events, events that stay true when more edges open, occur disjointly if two disjoint sets of open edges certify them, each set forcing its own event.

**Problem.** Open the edges of a finite graph independently. The probability that two increasing events occur disjointly is at most the product of their probabilities.

**How the definition helps.** Disjoint witnesses stop one open edge from counting for both events, which can make a plain intersection too likely (our own). Let both events be that one edge is open, with probability p strictly between 0 and 1 (our own). The intersection has probability p &gt; p², disjoint occurrence is impossible, and the van den Berg–Kesten theorem proves the bound in general (our own).

**Wikipedia:** [Van den Berg–Kesten inequality](https://en.wikipedia.org/wiki/Van_den_Berg%E2%80%93Kesten_inequality). It says: “whose memberships in A and in B can be verified on disjoint subsets of indices.”

**Sources:**

- [J. van den Berg and H. Kesten, Inequalities with applications to percolation and reliability (1985)](https://doi.org/10.2307/3213860)

### Exponential work recovers free energy

**Remember:** The work factor replaces the initial Boltzmann weight with the final one.

*True by definition.* MSC 82C05 (Classical dynamic and nonequilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** Drive a thermally isolated classical system by changing its Hamiltonian, and let the work W along a trajectory be its final energy minus its initial energy. The statistic exp(−βW), with β the inverse temperature, cancels the initial Boltzmann weight and leaves the weight of the final energy (our own).

**Problem.** Start from the density proportional to exp(−βH) for the initial Hamiltonian H, with both equilibrium weight integrals finite. Assume the evolution maps the initial phase space bijectively onto the final one; then the mean of exp(−βW) is the final weight integral over the initial one.

**How the definition helps.** Multiplying the initial density by exp(−βW) leaves the final equilibrium weight at the final point (our own). Liouville’s theorem says Hamiltonian flow preserves phase-space volume, so changing to final coordinates gives the final weight integral (our own).

**Wikipedia:** [Jarzynski equality](https://en.wikipedia.org/wiki/Jarzynski_equality). It says: “The final state does not need to be in equilibrium.”

**Sources:**

- [Jarzynski, Nonequilibrium Equality for Free Energy Differences (1997)](https://doi.org/10.1103/PhysRevLett.78.2690)

### Pairwise balance excludes steady currents

**Remember:** Detailed balance means every edge carries zero net current.

*Rules out counterexamples.* MSC 82C05 (Classical dynamic and nonequilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** A stationary state is in detailed balance if every pair of states exchanges probability at equal rates in both directions, so no net current flows along any edge. Stationarity alone only balances the total inflow and outflow at each state.

**Problem.** In a finite continuous-time Markov chain, assume positive stationary probabilities and positive rates in both directions on every allowed edge. Then entropy production vanishes exactly at detailed balance.

**How the definition helps.** Entropy production sums (a − b)ln(a/b) over edges, where a and b are the two stationary flows along an edge (our own). Each term is nonnegative and vanishes exactly when a = b, so the sum vanishes exactly at detailed balance (our own). A three-state ring with clockwise rate two and counterclockwise rate one is stationary under the uniform law yet carries a current (our own).

**Paper or page:** [Entropy production rate and time-reversibility for general jump diffusions on ℝⁿ](https://arxiv.org/abs/2506.13135v2). It says: “The entropy production rate vanishes at the stationary measure”

**Sources:**

- [Qi Zhang, Yubin Lu, Entropy production rate and time-reversibility for general jump diffusions on ℝⁿ](https://arxiv.org/abs/2506.13135v2)
- [J. Schnakenberg, Network theory of microscopic and macroscopic behavior of master equation systems](https://doi.org/10.1103/revmodphys.48.571)

### Heat-bath updates are projections

**Remember:** Once averaged over a spin, a second average changes nothing.

*True by definition. Confidence: medium.* MSC 82C20 (Dynamic lattice systems (kinetic Ising, etc.) and systems on graphs in time-dependent statistical mechanics), 82M31. arXiv cond-mat.stat-mech, math.PR. Level 3: graduate.

**Definition.** A heat-bath step at one site of a finite spin system with law μ redraws that spin from its μ-conditional law given all the other spins. Its operator therefore replaces each function by its conditional expectation given the other spins.

**Problem.** On square-integrable functions of the whole configuration, this operator projects orthogonally onto the functions of the other spins.

**How the definition helps.** Conditional expectation onto the functions of the other spins is an orthogonal projection on square-integrable functions (our own). Averaging twice changes nothing, and the residual has conditional mean zero, so it is orthogonal to every function of the other spins (our own).

**Wikipedia:** [Gibbs sampling](https://en.wikipedia.org/wiki/Gibbs_sampling). It says: “The Gibbs sampling algorithm generates an instance from the distribution of each variable in turn, conditional on the current values of the other variables.”

**Sources:** none listed. No primary source with a working link was found.

### Insertion energies make particle births reversible

**Remember:** Birth rates are Gibbs weight ratios, so births undo removals.

*True by definition.* MSC 82C22 (Interacting particle systems in time-dependent statistical mechanics). arXiv math.PR, cond-mat.stat-mech. Level 3: graduate.

**Definition.** Fix exterior particles around a bounded region and an activity z. The Gibbs density of n particles is proportional to zⁿexp(−E)/n!, with E the energy in thermal units, including exterior interactions. The dynamics removes each particle at rate one and adds one at x at rate density z exp(−ΔE), where ΔE is the energy cost of adding it.

**Problem.** Assume an allowed exterior, finite nonnegative activity and a uniform lower bound on the energy change from adding a particle. Then the process is reversible under the Gibbs law: its stationary trajectories have the same law backward in time.

**How the definition helps.** The birth rate z exp(−ΔE) is the ratio of the Gibbs weights after and before the birth, so each birth flow equals the reverse removal flow (our own). Summing over which particle is removed cancels the extra factor from the factorial (our own). The energy bound keeps the total birth rate finite (our own).

**Paper or page:** [Uniqueness of locally stable Gibbs point processes via spatial birth-death dynamics](https://arxiv.org/abs/2407.01321v1). It says: “The Markov transition family associated to K₍Λ∣ξ₎ is reversible with respect to μ₍Λ∣ξ₎.”

**Sources:**

- [\[, ', S, a, m, u, e, l,  , B, a, g, u, l, e, y, ', ,,  , ', A, n, d, r, e, a, s,  , G, ö, b, e, l, ', ,,  , ', M, a, r, c, u, s,  , P, a, p, p, i, k, ', \], Uniqueness of locally stable Gibbs point processes via spatial birth-death dynamics](https://arxiv.org/abs/2407.01321v1)

### Sorting solves hard-rod motion

**Remember:** Let the points pass through, then sort to recover the rods.

*True by definition.* MSC 82C23 (Exactly solvable dynamic models in time-dependent statistical mechanics), 82C21. arXiv math-ph. Level 3: graduate.

**Definition.** Shrink identical elastic hard rods of length ℓ to points by subtracting iℓ from the center of rod i, numbering from 0 at the left. Move these points freely at their initial velocities, and at each time sort them and add iℓ back to the point of rank i.

**Problem.** For almost every allowed initial state, this formula gives the rod positions between collisions. Continuity gives their positions at collisions.

**How the definition helps.** Shrinking turns a contact of two rods into a meeting of two points (our own). An elastic collision of equal masses swaps velocities, which looks the same as two points passing through each other, and sorting restores the labels (our own). Generic data excludes multiple collisions (our own).

**Paper or page:** [Weyl Group Representation of Billiard Trajectories for One-dimensional Hard Sphere Dynamics](https://arxiv.org/abs/2311.00446v1). It says: “the unique momentum- and energy-conserving billiard trajectory”

**Sources:**

- [Mark Wilkinson, Weyl Group Representation of Billiard Trajectories for One-dimensional Hard Sphere Dynamics](https://arxiv.org/abs/2311.00446v1)

### Symmetric jump weights ensure reversibility

**Remember:** Split the energy difference evenly between the forward and reverse rates.

*True by definition.* MSC 82C31 (Stochastic methods (Fokker-Planck, Langevin, etc.) applied to problems in time-dependent statistical mechanics), 82C35. arXiv math-ph, cond-mat.stat-mech. Level 3: graduate.

**Definition.** On a finite state space with energies E and inverse temperature β, each jump rate is a symmetric base rate s(x,y) = s(y,x) ≥ 0 times exp(−βΔE/2). Here ΔE is the destination energy minus the starting energy, so the energy cost is split evenly between the two directions (our own).

**Problem.** Start the jump process with probabilities proportional to exp(−βE). Its law then stays the same when time runs backward.

**How the definition helps.** Multiplying the rate from x to y by exp(−βE(x)) gives s(x,y)exp(−β(E(x) + E(y))/2), which is symmetric in x and y (our own). So every equilibrium jump has the same probability flow as its reverse, which is detailed balance (our own). For a stationary chain, detailed balance gives reversibility (our own).

**Paper or page:** [Entropy production rate and time-reversibility for general jump diffusions on ℝⁿ](https://arxiv.org/abs/2506.13135v2). It says: “where s(x,y) = s(y,x) is a nonnegative measurable symmetric function”

**Sources:**

- [Qi Zhang, Yubin Lu, Entropy production rate and time-reversibility for general jump diffusions on ℝⁿ](https://arxiv.org/abs/2506.13135v2)

### Path ratios give fluctuation identities

**Remember:** Entropy production is the log odds of forward against reversed paths.

*True by definition.* MSC 82C35 (Irreversible thermodynamics, including Onsager-Machlup theory). arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** Path entropy production is S = ln(dP/dQ), the log density of the forward path law P relative to the law Q of reversed paths in the reverse experiment. It requires P and Q to have the same null events.

**Problem.** The forward expectation of exp(−S) is one. The forward weight of paths with S = s is exp(s) times their weight under Q.

**How the definition helps.** Multiplying dP by exp(−S) gives dQ, whose total mass is one (our own). On the event S = s, the density dP/dQ equals exp(s) (our own). Identifying S with physical entropy production requires a model of the dynamics (our own).

**Wikipedia:** [Crooks fluctuation theorem](https://en.wikipedia.org/wiki/Crooks_fluctuation_theorem). It says: “The most general statement of the CFT relates the probability of a space-time trajectory x(t) to the time-reversal of the trajectory x̃(t).”

**Sources:**

- [Gavin E. Crooks, Entropy production fluctuation theorem and the nonequilibrium work relation for free energy differences (1999)](https://doi.org/10.1103/PhysRevE.60.2721)

### Independent collisions exclude Loschmidt’s reversal

**Remember:** Partners about to collide are independent; partners just collided need not be.

*Rules out counterexamples.* MSC 82C40 (Kinetic theory of gases in time-dependent statistical mechanics). arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** Molecular chaos assumes that two particles about to collide are independent: their joint velocity density is the product of their one-particle velocity densities.

**Problem.** For a smooth positive solution of the spatially homogeneous Boltzmann equation with an elastic, reversal-invariant collision kernel, finite entropy and enough integrability, H cannot increase. Here H is the integral of the velocity density times its logarithm.

**How the definition helps.** With the product assumption, collision symmetry pairs the gain and loss terms in the derivative of H (our own). With x and y the density products before and after collision, that derivative integrates −(x − y)(ln x − ln y) ≤ 0 against nonnegative weights (our own). Time reversal makes correlated outgoing partners incoming, which violates molecular chaos (our own).

**Wikipedia:** [H-theorem](https://en.wikipedia.org/wiki/H-theorem). It says: “there must be a matching reversed state where H increases over time”

**Sources:**

- [Boltzmann, Further Studies on the Thermal Equilibrium of Gas Molecules (1872, English translation 2003)](https://doi.org/10.1142/9781848161337_0015)

### Normalized polymer weights form a martingale

**Remember:** Normalize each new layer so its mean weight is one.

*True by definition.* MSC 82D60 (Statistical mechanics of polymers). arXiv math.PR, cond-mat.stat-mech. Level 3: graduate.

**Definition.** Give each site at each time an independent, identically distributed energy ξ with finite m = 𝔼\[exp(βξ)\]. The normalized polymer partition function averages, over an independent random walk, the product of exp(βξ)/m over the sites visited at times 1 to n. Each new time layer thus has mean weight one (our own).

**Problem.** The normalized partition functions form a nonnegative martingale of mean one: given all energies through today, the expected next value is today’s value. Hence they converge with probability one to a finite limit.

**How the definition helps.** Averaging the new independent layer replaces each normalized last-step weight by one, and the walk’s step probabilities sum to one (our own). The martingale convergence theorem then gives the limit (our own). Whether the limit is positive is a separate question that needs disorder estimates (our own).

**Paper or page:** [Positive and negative moments for directed polymers in random environment in weak disorder](https://arxiv.org/abs/2212.06029v1), [Directed polymers in a random environment: a review of the phase transitions](https://arxiv.org/abs/2401.01757v4). It says: “the martingale (Wₙ)ₙ≥₀ is Lᵖ(P)-bounded”

**Sources:**

- [\[, ', N, i, k, o, s,  , Z, y, g, o, u, r, a, s, ', \], Directed polymers in a random environment: a review of the phase transitions](https://arxiv.org/abs/2401.01757v4)

### Gaussian thermal correlations use pairs

**Remember:** A fermionic Gaussian state is fixed by pairs, with crossing signs.

*True by definition.* MSC 82B10 (Quantum equilibrium statistical mechanics (general)). arXiv math-ph, cond-mat.stat-mech. Level 4: research.

**Definition.** An even quasi-free fermion state is a fermionic Gaussian (our own): all odd moments of fields linear in creation and annihilation operators vanish. Each even moment is the sum, over pairings of its ordered fields, of the product of the paired two-field moments. Each pairing gets a factor −1 for each crossing of its arcs.

**Problem.** For a free fermion thermal state of the cited model with finite normalizing trace, the four-field moment has three terms. Pairings (12)(34), (13)(24), and (14)(23) have signs +, −, and +, respectively.

**How the definition helps.** The definition gives the four-field moment as the three pairings directly, with no new thermal trace (our own). Only (13)(24) has crossing arcs, so it alone gets the minus sign (our own). The cited result does the hard step: it proves that the thermal state is quasi-free.

**Paper or page:** [On the semiclassical regularity of thermal equilibria](https://arxiv.org/abs/2208.07911v1). It says: “is quasi-free and its one-particle reduced density matrix operator is given”

**Sources:**

- [Jacky J. Chong, Laurent Lafleche, Chiara Saffirio, On the semiclassical regularity of thermal equilibria](https://arxiv.org/abs/2208.07911v1)

### A shared field separates spins

**Remember:** One shared field carries all the mean-field dependence.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 82B26. arXiv cond-mat.stat-mech, math.PR. Level 4: research.

**Definition.** Take n spins sᵢ ∈ {−1,1} with coupling a &gt; 0 and fixed site fields hᵢ. Add one real field y with joint density proportional to exp(−ny²/(2a) + ∑ᵢ(hᵢ + y)sᵢ) (our own). Each spin then feels only its own field hᵢ plus the shared field y (our own).

**Problem.** Given the extra field and fixed site fields, all spins are independent. At fixed positive inverse temperature, concentration of the extra field at one value gives the corresponding product limit for any fixed set of spins.

**How the definition helps.** Fixing y makes the weight a product of one-spin factors, and integrating y out recovers the mean-field interaction exactly (our own). Each one-spin probability is continuous in y, so concentration of y gives the product limit (our own). The hard step in the cited model is proving that concentration for almost every choice of site fields (our own).

**Paper or page:** [Propagation of chaos in the Random field Curie-Weiss model](https://arxiv.org/abs/2312.01866v1). It says: “Assume that the function G(y) has a unique, non-degenerate global maximum in some point y₀.”

**Sources:**

- [Matthias Löwe, Zakhar Kabluchko, Propagation of chaos in the Random field Curie-Weiss model](https://arxiv.org/abs/2312.01866v1)

### Continuity excludes a decimated Ising law

**Remember:** Distant spins must lose their influence when nearby spins are fixed.

*Rules out counterexamples.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv math.PR, cond-mat.stat-mech. Level 4: research.

**Definition.** A law on a finite-spin lattice is quasilocal if each finite-region event has a version of its conditional probability that is continuous in the exterior configuration. That is, for every ε &gt; 0, two exteriors that agree on a large enough finite neighborhood give probabilities within ε.

**Problem.** Take the cited square-lattice Ising model, with nearest-neighbor coupling on one axis and power-law coupling of exponent 1 &lt; α ≤ 2 on the other. In its plus state at sufficiently low temperature, keeping only the sites with both coordinates even destroys quasilocality.

**How the definition helps.** A jump in a conditional probability that no version can remove rules out quasilocality, and hence any Gibbs description (our own). Fixing the kept spins in an alternating pattern lets distant boundary choices select different phases of the removed spins (our own). The hard estimate shows a lasting gap in the expected central spin over exterior events of positive probability (our own).

**Paper or page:** [Decimations for Two-dimensional Ising and Rotator Models I](https://arxiv.org/abs/2105.07950v1), [Decimations for Two-dimensional Ising and Rotator Models I](https://arxiv.org/abs/2105.07950v1). It says: “is non-quasilocal, hence non-Gibbs, and so are all decimated Gibbs measures.”

**Sources:**

- [\[, ", M, a, t, t, e, o,  , D, ', A, c, h, i, l, l, e, ", ,,  , ', A, e, r, n, o, u, t,  , C, .,  , D, .,  , v, a, n,  , E, n, t, e, r, ', ,,  , ', A, r, n, a, u, d,  , L, e,  , N, y, ', \], Decimations for Two-dimensional Ising and Rotator Models I](https://arxiv.org/abs/2105.07950v1)

### Normalization excludes uniform heights

**Remember:** Messages count only if each site’s weights have a finite sum.

*Rules out counterexamples.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv math-ph, math.PR. Level 4: research.

**Definition.** For positive edge weights Q on a tree, a boundary law is a family of positive messages u<sub>xy</sub>, one per directed edge, with u<sub>xy</sub>(i) = c<sub>xy</sub> ∏<sub>z∼x,z≠y</sub> b<sub>zx</sub>(i). Here b<sub>zx</sub>(i) = ∑ⱼ Q<sub>xz</sub>(i,j)u<sub>zx</sub>(j), and c<sub>xy</sub> &gt; 0 does not depend on the height i. It is normalizable if ∑ᵢ ∏<sub>z∼x</sub> b<sub>zx</sub>(i) is finite at every vertex x, so the incoming messages give a probability distribution there (our own).

**Problem.** A normalizable boundary law defines a unique tree-indexed Markov chain among the Gibbs measures. For positive summable edge weights depending only on height differences, a constant boundary law solves the recursion yet gives no probability distribution at a vertex.

**How the definition helps.** The finite single-site sum is what turns the incoming messages into probabilities at a vertex. A constant message gives every integer height the same positive weight, so that sum diverges (our own). Once the sum is finite, the boundary-law theorem builds the Markov chain (our own).

**Paper or page:** [Gradient Gibbs measures with periodic boundary laws of a generalized SOS model on a Cayley tree](https://arxiv.org/abs/2309.00867v1). It says: “defines a unique tree-indexed Markov chain μ ∈ 𝒢(γ)”

**Sources:**

- [F. H. Haydarov, R. A. Ilyasova, Gradient Gibbs measures with periodic boundary laws of a generalized SOS model on a Cayley tree](https://arxiv.org/abs/2309.00867v1)

### Path recoloring switches current sources

**Remember:** Switch the colors along a path to move its odd endpoints.

*True by definition.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics). arXiv cond-mat.stat-mech, math.PR. Level 4: research.

**Definition.** A current puts a nonnegative integer on each edge of a finite graph, read as that many copies of the edge. Each copy is colored red or blue, and the sources of a color are the vertices that meet an odd number of copy ends of that color.

**Problem.** Fix the copies and distinct vertices x and y joined by a path of copies. Equally many colorings have source sets (A, {x,y}) as (A △ {x,y}, ∅), where △ denotes symmetric difference.

**How the definition helps.** Swapping the colors along one fixed simple path from x to y changes both colors’ parities exactly at x and y (our own). Swapping again restores the coloring, so the swap pairs the two sets of colorings (our own). Using this count for Ising spins needs the expansion of the interaction weights into currents (our own).

**Paper or page:** [A geometric perspective on the scaling limits of critical Ising and φ⁴ models in dimension d](https://arxiv.org/abs/2112.04248v3). It says: “for which there exists a sub-current $\\mathbf{n} ' \\leq \\mathbf m $ supported on $\\mathcal{E} \_2$ with $\\partial \\mathbf{n} '=B$”

**Sources:**

- [Michael Aizenman, A geometric perspective on the scaling limits of critical Ising and φ⁴ models in dimension d](https://arxiv.org/abs/2112.04248v3)

### The one-line projection of the Ising model has continuous one-sided predictions

**Remember:** A continuous prediction from the past need not extend to both sides.

*Makes the theorem clean to state or prove.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 60K35, 37D35. arXiv math.PR, cond-mat.stat-mech. Level 4: research.

**Definition.** A regular g-measure is a stationary process on finitely many symbols whose next symbol, given the whole past, has strictly positive probabilities that depend continuously on the past. Continuity means that long enough agreement on the recent past makes these probabilities close. The Schonmann projection restricts the plus phase of the zero-field square-lattice nearest-neighbor ferromagnetic Ising model to one lattice line.

**Problem.** At sufficiently low temperature, the Schonmann projection is a regular g-measure. At low temperature it is also non-Gibbsian, because its conditional probabilities given both sides are discontinuous.

**How the definition helps.** Regularity asks only for continuity given the past, while the Gibbs property asks for continuity given both sides (our own). Low-temperature estimates for the Schonmann projection prove the one-sided continuity and an essential discontinuity for two-sided conditioning (our own).

**Paper or page:** [The Schonmann projection as a g-measure-, how Gibbsian is it?](https://arxiv.org/abs/2102.10622v2). It says: “We prove that they are g-measures, which means that their conditional probabilities have a continuous dependence on one-sided boundary condition.”

**Sources:**

- [Aernout van Enter, Senya Shlosman, The Schonmann projection as a g-measure-, how Gibbsian is it?, arXiv:2102.10622v2 (2022)](https://arxiv.org/abs/2102.10622v2)

### Tree messages give Gibbs transitions

**Remember:** Sum out a branch once, then use its weight at each edge.

*Makes the theorem clean to state or prove.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 60K35. arXiv math-ph, math.PR. Level 4: research.

**Definition.** On a regular tree with d children per nonroot vertex, let Q(i,j) be positive symmetric weights on a finite spin space. A homogeneous boundary law is a positive vector u with u(i) = c·b(i)ᵈ, where b(i) = ∑ⱼ Q(i,j)u(j) and c &gt; 0 is constant. Then u(j) is the summed weight of a whole branch whose top spin is j (our own).

**Problem.** The corresponding equilibrium law has independent child branches given the parent spin i. The probability of child spin j equals Q(i,j)u(j)/b(i).

**How the definition helps.** Since u(j) sums a whole branch, Q(i,j)u(j)/b(i) is the share of the branch weight with child spin j, which is a transition probability (our own). The recursion makes this tree law agree with the prescribed conditional probabilities in every finite region (our own).

**Paper or page:** [Infinite-volume states with irreducible localization sets for gradient models on trees](https://arxiv.org/abs/2302.05398v1). It says: “Pμ(i,j) = u(j) Q(i−j)/(Q ∗ u)(i)”

**Sources:**

- [Alberto Abbondandolo, Florian Henning, Christof Kuelske, Pietro Majer, Infinite-volume states with irreducible localization sets for gradient models on trees](https://arxiv.org/abs/2302.05398v1)

### Local swaps commute rows

**Remember:** The crossing slides past each column, swapping the two rows.

*True by definition. Confidence: medium.* MSC 82B23 (Exactly solvable models; Bethe ansatz). arXiv math-ph, cond-mat.stat-mech. Level 4: research.

**Definition.** A periodic six-vertex transfer matrix is the trace, over the horizontal arrow space, of the ordered product of a row’s vertex weights L<sub>aj</sub> or M<sub>bj</sub> at columns j. An invertible crossing operator R on the two horizontal spaces a and b satisfies the local swapping rule if R L<sub>aj</sub> M<sub>bj</sub> = M<sub>bj</sub> L<sub>aj</sub> R at every column (our own). So R slides past one column while swapping the two rows’ weights (our own).

**Problem.** Periodic six-vertex row transfer matrices commute if an invertible crossing operator satisfies the local swapping relation with the row weights.

**How the definition helps.** Slide R across the row one column at a time, then take the trace around both closed rows, where cyclicity cancels R against its inverse (our own). This replaces multiplying large matrices with checking one local identity (our own).

**Paper or page:** [Switch Operators for the Six-Vertex Model](https://arxiv.org/abs/2302.08089v3). It says: “Consider a six-vertex model and attach a cross vertex. Then the following relationship between partition functions holds.”

**Sources:**

- [Evelyn Choi, Jadon Geathers, Slava Naprienko, Switch Operators for the Six-Vertex Model](https://arxiv.org/abs/2302.08089v3)

### Path reversal gives fluctuation symmetry

**Remember:** Reversing a path negates its log probability ratio.

*True by definition.* MSC 82C05 (Classical dynamic and nonequilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech. Level 4: research.

**Definition.** Path entropy production, in units of Boltzmann’s constant, is ln(p(x)/p(xᴿ)), where p(x) is the density of a finite chain trajectory x and xᴿ is its time reversal. It is defined where both densities are positive, and reversing the path negates it (our own).

**Problem.** For the paper’s centered, stable Gaussian Markov chains, the entropy produced per step has a rate function I. It describes exponential decay of probabilities as the path length grows and satisfies I(−w) = I(w) + w.

**How the definition helps.** Swapping each path with its reverse negates the log ratio and gives a finite-time symmetry for its distribution (our own). Once the rate function exists, this symmetry passes to it as I(−w) = I(w) + w (our own). Proving existence for these Gaussian chains is the harder step.

**Paper or page:** [Large deviations for quadratic functionals of stable Gauss-Markov chains and entropy production](https://arxiv.org/abs/2204.08059v1). It says: “and I(−w) = I(w) + w for all w ∈ ℝ.”

**Sources:**

- [Marco Zamparo, Massimiliano Semeraro, Large deviations for quadratic functionals of stable Gauss-Markov chains and entropy production](https://arxiv.org/abs/2204.08059v1)

### Path support restores fluctuation equality

**Remember:** Forward-impossible paths must stay impossible when reversed.

*Rules out counterexamples.* MSC 82C05 (Classical dynamic and nonequilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech. Level 4: research.

**Definition.** Let p and r be densities, against one common measure, of forward paths and of reversed paths from the reverse experiment. Absolute continuity requires every event impossible forward to be impossible under the reversed law. On forward paths set σ = ln(p/r), with σ = +∞ when r = 0 &lt; p.

**Problem.** Under this condition the forward mean of exp(−σ) equals one. In general it equals one minus the reverse probability of the set where p vanishes.

**How the definition helps.** Averaging exp(−σ) under p integrates r over the set where p &gt; 0 (our own). The missing mass is the reverse probability of the set where p = 0, which absolute continuity makes zero (our own). After free expansion from half a box, a reverse path can end in the initially empty half, so its reversal starts where the forward law vanishes (our own).

**Wikipedia:** [Fluctuation theorem](https://en.wikipedia.org/wiki/Fluctuation_theorem). It says: “This condition is known as the condition of ergodic consistency.”

**Sources:**

- [Yûto Murashita, Ken Funo, and Masahito Ueda, Nonequilibrium equalities in absolutely irreversible processes](https://doi.org/10.1103/physreve.90.042110)

### Subtracting steady heat makes excess finite

**Remember:** Subtract the running cost before adding up the transient cost.

*Rules out counterexamples.* MSC 82C05 (Classical dynamic and nonequilibrium statistical mechanics (general)). arXiv cond-mat.stat-mech. Level 4: research.

**Definition.** Take a finite continuous-time ring chain with stationary law π and heat flow h(x) at state x. The centered flow f = h − ∑ᵧπ(y)h(y) removes the steady heat rate, and the excess heat from x is V(x) = ∫₀∞ 𝔼ₓ\[f(Xₜ)\] dt when this converges.

**Problem.** Suppose the chain can reach every state from every other state. Then V is the unique solution of LV = −f with stationary mean zero, where the generator L gives the initial rate of change of an expected observable.

**How the definition helps.** Centering removes the steady heat rate, whose time integral diverges on a driven ring with nonzero mean heat flow (our own). Irreducibility makes the centered expectation decay exponentially, so the integral converges, and integrating its time derivative gives LV = −f (our own). Two solutions differ by a harmonic function, which is constant on a finite irreducible chain, so mean zero fixes V (our own).

**Paper or page:** [Drazin-Inverse and heat capacity for driven random walks on the ring](https://arxiv.org/abs/2204.04974v4). It says: “for a function f having ⟨f⟩ˢ = 0, then V₍f₎ = −Lᴰ⁻¹f.”

**Sources:**

- [Faezeh Khodabandehlou, Irene Maes, Drazin-Inverse and heat capacity for driven random walks on the ring](https://arxiv.org/abs/2204.04974v4)

### Transport distance bounds lost work

**Remember:** Transport distance is the least kinetic cost of moving the density.

*True by definition.* MSC 82C35 (Irreversible thermodynamics, including Onsager-Machlup theory). arXiv cond-mat.stat-mech. Level 4: research.

**Definition.** The squared transport distance between two densities of finite second moment is the least kinetic cost ∫₀¹∫ρ\|v\|² dx dt of moving one into the other in unit time. The minimum is over paths of densities ρ and velocity fields v that satisfy ∂ₜρ + div(ρv) = 0 in the weak sense.

**Problem.** Consider particles in a changing potential at fixed temperature, with negligible inertia and constant positive friction. Mean work minus free energy change is at least friction times squared transport distance divided by the process duration.

**How the definition helps.** The observed motion is one admissible path, so after rescaling to unit time its cost bounds the minimum, which gives the inverse duration factor (our own). The paper’s work balance identifies friction times this cost with mean work minus free energy change. The dynamic transport theorem identifies the minimum with the least mean squared displacement over endpoint couplings (our own).

**Paper or page:** [On the relation between information and power in stochastic thermodynamic engines](https://arxiv.org/abs/2103.03986v1). It says: “𝒲 ≥ Δℱ + (γ/t𝒻) W₂²(p(0, ·), p(t𝒻, ·))”

**Sources:**

- [Amirhossein Taghvaei, Olga Movilla Miangolarra, Rui Fu, Yongxin Chen and Tryphon T. Georgiou, On the relation between information and power in stochastic thermodynamic engines](https://arxiv.org/abs/2103.03986v1)

### Matched moments conserve energy

**Remember:** Match the moments that collisions must leave unchanged.

*True by definition.* MSC 82C40 (Kinetic theory of gases in time-dependent statistical mechanics), 35Q20. arXiv math-ph. Level 4: research.

**Definition.** A relaxation collision term νᵢ(Gᵢ − fᵢ) pushes the distribution fᵢ of species i toward a target Gᵢ at rate νᵢ. Choose the targets so that this term has zero particle-number moment for each species. Its energy and momentum moments, summed over species with each species’ own measure, must also vanish.

**Problem.** Assume each species has a nonzero, nonnegative integrable distribution with finite particle, energy, and momentum moments. The collision term preserves each species’ particle number and the mixture’s total energy and momentum.

**How the definition helps.** The conserved quantities are exactly these moments of the collision term, so they vanish by construction, without tracking individual collisions (our own). The real work is proving that targets with a common temperature and bulk velocity exist (our own).

**Paper or page:** [Relativistic BGK model for gas mixtures](https://arxiv.org/abs/2306.05349v1). It says: “Thus, the partial particle four-flow and the energy-momentum tensor of gas mixtures are conserved”

**Sources:**

- [Byung-Hoon Hwang, Myeong-Su Lee, Seok-Bae Yun, Relativistic BGK model for gas mixtures](https://arxiv.org/abs/2306.05349v1)
