### Counting swapped identical particles once resolves the Gibbs paradox

**Remember:** Swapping two identical atoms does not make a new state.

*Rules out counterexamples.* MSC 82B03 (Foundations of equilibrium statistical mechanics), 82B05. arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** In correct Boltzmann counting, states of identical particles that differ only by a permutation of the particles count as one state. For N particles, this divides the phase-space volume by N!.

**Problem.** Entropy should be extensive, that is, proportional to the amount of gas. Two identical boxes of gas should have twice the entropy of one box, and opening a door between them should not change the entropy.

**How the definition helps.** Dividing by N! removes an extra term from the entropy, so the entropy becomes extensive. Without the factor 1/N!, the classical entropy of an ideal gas has an extra N ln N term. Then mixing two identical gases raises the entropy, and closing the partition again lowers it, against the second law. Dividing by N! and using Stirling's formula gives the extensive Sackur–Tetrode entropy. Jaynes argues that a definition of entropy depends on what an experiment can distinguish. So, for Jaynes, the factor follows from the choice of macroscopic description, and quantum indistinguishability is a guarantee. What stays debated is whether the classical reason or the quantum reason is the right one.

**Wikipedia:** [Gibbs paradox](https://en.wikipedia.org/wiki/Gibbs_paradox). It says: “The paradox is averted by assuming the indistinguishability (at least effective indistinguishability) of the particles in the volume.”

**Sources:**

- [Jaynes, E. T. (1992). The Gibbs paradox. In Smith, Erickson and Neudorfer (eds.), Maximum Entropy and Bayesian Methods, Kluwer, 1–22.](https://bayes.wustl.edu/etj/articles/gibbs.paradox.pdf)

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

### Phase transitions defined as non-analytic points need infinitely many particles

**Remember:** No sharp transition without infinitely many particles.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 82B26 (Phase transitions (general) in equilibrium statistical mechanics), 82B30. arXiv cond-mat.stat-mech, math-ph. Level 3: graduate.

**Definition.** A phase transition is a point where the thermodynamic free energy is not an analytic function of the thermodynamic variables, such as temperature. (An analytic function is one that is given near each point by a convergent power series.)

**Problem.** Statistical mechanics should explain sharp phase transitions. But for a finite system, the partition function (the sum of the Boltzmann weights over all states) is smooth.

**How the definition helps.** The definition makes clear that sharp transitions can appear only in the limit of infinitely many particles. Our own step: for a finite system, the partition function is a finite sum of exponentials. So the free energy is analytic and has no sharp transition. Lee and Yang made this precise. The zeros of the partition function in the complex plane can approach the real axis only in that limit. What stays hard is to prove that a given model has such a point, as Onsager did for the two-dimensional Ising model (a grid of spins that each point up or down).

**Wikipedia:** [Phase transition](https://en.wikipedia.org/wiki/Phase_transition). It says: “Phase transitions occur when the thermodynamic free energy of a system is non-analytic for some choice of thermodynamic variables”

**Sources:**

- [Yang, C. N.; Lee, T. D. (1952). Statistical theory of equations of state and phase transitions. I. Theory of condensation. Physical Review 87(3), 404–409.](https://doi.org/10.1103/PhysRev.87.404)

### The one-line projection of the Ising model has continuous one-sided predictions

**Remember:** A continuous prediction from the past need not extend to both sides.

*Makes the theorem clean to state or prove.* MSC 82B20 (Lattice systems (Ising, dimer, Potts, etc.) and systems on graphs arising in equilibrium statistical mechanics), 60K35, 37D35. arXiv math.PR, cond-mat.stat-mech. Level 4: research.

**Definition.** A g-measure is a measure on spin sequences whose conditional probability for the next spin depends continuously on the past spins. The Schonmann projection is the restriction of an extremal Gibbs measure of the two-dimensional Ising model to the spins on one line.

**Problem.** At sufficiently low temperature, the Schonmann projection is a regular g-measure. At low temperature it is also non-Gibbsian, because its conditional probabilities given both sides are discontinuous.

**How the definition helps.** The definition asks only how predictions depend on one side, so a weaker continuity can hold where two-sided continuity fails. The two-sided Gibbs condition would miss that regularity. In our own words, the theorem still needs a proof, which in the paper uses contour estimates at low temperature.

**Paper or page:** [The Schonmann projection as a g-measure-, how Gibbsian is it?](https://arxiv.org/abs/2102.10622v2). It says: “We prove that they are g-measures, which means that their conditional probabilities have a continuous dependence on one-sided boundary condition.”

**Sources:**

- [Aernout van Enter, Senya Shlosman, The Schonmann projection as a g-measure-, how Gibbsian is it?, arXiv:2102.10622v2 (2022)](https://arxiv.org/abs/2102.10622v2)
