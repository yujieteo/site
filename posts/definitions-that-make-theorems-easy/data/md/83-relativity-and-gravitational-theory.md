### Einstein synchronisation makes equal one-way light speeds a convention

**Remember:** Light takes equal time out and back because we set the clocks that way.

*True by definition.* MSC 83A05 (Special relativity). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Clock 1 sends a light signal at time τ₁ to clock 2. Clock 2 reflects the signal back, and clock 1 receives it at time τ₂. Set clock 2 so that it shows (τ₁ + τ₂)/2 at the reflection. In words, the reflection happens halfway between sending and receiving.

**Problem.** Show that the one-way speed of light is the same in both directions.

**How the definition helps.** The rule builds the claim into the clocks, so there is nothing left to prove. You cannot measure a one-way speed before you synchronise distant clocks. Einstein's rule synchronises them by assuming that the two one-way times are equal. So the equality of the one-way speeds is a convention, as Poincaré noted. You can reread experiments on the one-way speed of light as tests of a round-trip condition. Some parts are not conventional. The rule is consistent (symmetric and transitive) only under physical conditions such as Reichenbach's round-trip condition, and in rotating frames the rule depends on the path.

**Wikipedia:** [Einstein synchronisation](https://en.wikipedia.org/wiki/Einstein_synchronisation). It says: “Since it is meaningless to measure a one-way velocity prior to the synchronisation of distant clocks, experiments claiming a measure of the one-way speed of light can often be reinterpreted as verifying the Laue–Weyl's round-trip condition.”

**Sources:**

- [Einstein, A. (1905). Zur Elektrodynamik bewegter Körper. Annalen der Physik 322(10), 891–921.](https://doi.org/10.1002/andp.19053221004)

### Invariant mass, built from energy and momentum, is the same for everyone

**Remember:** Energy squared minus momentum squared is the same in every frame.

*True by definition.* MSC 83A05 (Special relativity). arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** The invariant mass m of a body or a system is given by m²c⁴ = E² − \|p\|²c². Here E is the total energy and p the total momentum. The older relativistic mass is E/c², which depends on the observer.

**Problem.** The invariant mass of a system is the same in all inertial frames, and it is conserved. So the invariant mass of the decay products of a particle equals the rest mass of the parent particle.

**How the definition helps.** E² − \|p\|²c² is the Minkowski square of the four-momentum, the spacetime vector (E/c, p) (our own wording). Lorentz transformations preserve it, so frame independence is built into the definition. Relativistic mass changes with speed, so every statement about it needs a chosen frame. The page says that particle physicists tend to avoid it. The work moves into conservation of total four-momentum. The page notes that the invariant mass of widely separated decay products gives the rest mass of the parent. One surprise remains: invariant mass is not additive, since a system of moving parts has more mass than the sum of the parts' masses.

**Wikipedia:** [Mass in special relativity](https://en.wikipedia.org/wiki/Mass_in_special_relativity). It says: “The term "relativistic mass" tends not to be used in particle and nuclear physics and is often avoided by writers on special relativity, in favor of referring to the body's relativistic energy.”

**Sources:**

- [L. B. Okun, The Concept of Mass, Physics Today 42 (1989), 31–36](https://doi.org/10.1063/1.881171)

### Proper time as spacetime length makes the inertial twin older

**Remember:** For a timelike trip in flat spacetime, the straight path takes the most proper time.

*True by definition.* MSC 83A05 (Special relativity), 53B30. arXiv gr-qc, physics.class-ph. Level 2: later undergraduate.

**Definition.** Define proper time as the length of a timelike path divided by the speed of light. This length uses the Minkowski metric, which measures time and space displacements with opposite signs. In a frame-based calculation, one instead adjusts each leg’s elapsed time by its speed relative to that frame.

**Problem.** In flat spacetime, compare one inertial leg with two future-directed timelike inertial legs between the same events. The single leg gives at least as much proper time, with equality only if all legs have the same velocity.

**How the definition helps.** Spacetime length turns the comparison into the reversed triangle inequality because the straight displacement is the sum of the two legs. The work is in proving that inequality. Square both sides and use the reversed Cauchy–Schwarz inequality, which says that the spacetime inner product is at least the product of the two lengths. The frame-based proof instead calculates the time dilation on each leg (our own).

**Wikipedia:** [Proper time](https://en.wikipedia.org/wiki/Proper_time), [Minkowski spacetime](https://en.wikipedia.org/wiki/Minkowski_spacetime), [Twin paradox](https://en.wikipedia.org/wiki/Twin_paradox). It says: “For two similarly directed time-like vectors u and w, the inequality is ‖u + w‖ ≥ ‖u‖ + ‖w‖, where the equality holds when the vectors are linearly dependent.”

**Sources:** none listed. No primary source with a working link was found.

### Proper time makes four-acceleration perpendicular to four-velocity

**Remember:** Differentiating a vector of constant length gives a perpendicular vector.

*True by definition.* MSC 83A05 (Special relativity), 70H40. arXiv physics.class-ph, gr-qc. Level 2: later undergraduate.

**Definition.** Proper time τ is the time shown by a clock carried along a timelike path, a path moving below light speed. Define four-velocity U = dx/dτ and four-acceleration A = dU/dτ for the spacetime position x. The coordinate-time description instead differentiates with respect to the time in a chosen frame.

**Problem.** Along any twice differentiable timelike path in flat spacetime, four-velocity and four-acceleration are perpendicular. Perpendicularity uses the Minkowski scalar product, the spacetime version of a dot product.

**How the definition helps.** Proper time makes perpendicularity immediate because it gives U constant squared length. In the convention with positive time sign, U·U = c², where c is the speed of light (our own). Differentiation gives 2U·A = 0. The work lies in normalizing the tangent, which follows from the spacetime length formula for τ (our own). A general coordinate-time tangent need not have constant length (our own).

**Wikipedia:** [Four-acceleration](https://en.wikipedia.org/wiki/Four-acceleration). It says: “The scalar product of a particle's four-velocity and its four-acceleration is always 0.”

**Sources:** none listed. No primary source with a working link was found.

### Rapidity makes relativistic velocities along one line simply add

**Remember:** Boosts along one line compose by adding their rapidities.

*True by definition.* MSC 83A05 (Special relativity). arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** The rapidity w of a speed v along a line is the number with tanh w = v/c, where c is the speed of light. It is the hyperbolic angle of the Lorentz boost, the change of frame to a moving observer. For small speeds w is about v/c, and light has infinite rapidity.

**Problem.** Suppose frame B moves relative to frame A with rapidity w₁, and frame C moves relative to B with rapidity w₂, along the same line. Then C moves relative to A with rapidity w₁ + w₂. In terms of speeds, the same law is Einstein's formula (u + v)/(1 + uv/c²).

**How the definition helps.** The definition tanh w = v/c picks exactly the parameter in which composing boosts is addition, so additivity is built in. Boosts along one line form a one-parameter group, with Λ(w₁ + w₂) = Λ(w₁)Λ(w₂). The work moves to showing that boosts are hyperbolic rotations, which Minkowski explained in 1908. The page says that Varićak introduced rapidity as a parameter in 1910. Einstein's velocity formula is then the addition formula for tanh. Additivity fails for boosts in different directions, which do not commute and produce an extra rotation, the Thomas–Wigner rotation (our own).

**Wikipedia:** [Rapidity](https://en.wikipedia.org/wiki/Rapidity). It says: “The simplicity of this formula contrasts with the complexity of the corresponding velocity-addition formula.”

**Sources:**

- [H. Minkowski, Die Grundgleichungen für die elektromagnetischen Vorgänge in bewegten Körpern, Nachrichten von der Gesellschaft der Wissenschaften zu Göttingen (1908), 53–111](https://en.wikisource.org/wiki/Translation:The_Fundamental_Equations_for_Electromagnetic_Processes_in_Moving_Bodies)

### The Einstein tensor makes Einstein’s equations conserve stress–energy

**Remember:** A divergence-free left side forces a divergence-free right side.

*True by definition.* MSC 83C05 (Einstein's equations (general structure, canonical formalism, Cauchy problems)), 83C40. arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** Define the Einstein tensor as G = Ric − ½Rg. Here Ric measures curvature, R is its trace, and g is the spacetime metric. Einstein’s equations set G proportional to T, the tensor that measures the density and flow of energy and momentum.

**Problem.** Einstein’s equations with a nonzero constant of proportionality force T to have zero covariant divergence. This is the local conservation law for energy and momentum in curved spacetime.

**How the definition helps.** The Einstein tensor makes conservation immediate because its divergence vanishes for every spacetime metric. The work is in the contracted Bianchi identity, which says the divergence of Ric equals half the gradient of R. The trace correction subtracts exactly that gradient (our own). Using Ric alone on the left would instead force R to be constant if T were conserved (our own).

**Wikipedia:** [Einstein tensor](https://en.wikipedia.org/wiki/Einstein_tensor). It says: “The (contracted) Bianchi identities automatically ensure the covariant conservation of the stress–energy tensor in curved spacetimes:”

**Sources:** none listed. No primary source with a working link was found.

### Timelike geodesics give all test bodies the same free fall

**Remember:** The geodesic equation uses the initial position and velocity, not the mass.

*True by definition. Confidence: medium.* MSC 83C10 (Equations of motion in general relativity and gravitational theory), 53C22. arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** In general relativity, model a freely falling massive test body by a timelike geodesic, a straightest possible path for the spacetime metric. A test body is one whose own gravity and internal structure are neglected. Newtonian gravity instead treats gravity as a force on a body with separate gravitational and inertial masses.

**Problem.** Two freely falling test bodies at the same event with the same initial velocity follow the same path as long as the geodesic exists.

**How the definition helps.** The geodesic law gives identical paths because it uses the same equation and initial data for both bodies (our own). The equation for a smooth metric has a unique solution for those data (our own). The Newtonian description instead needs the ratio of gravitational mass to inertial mass to be the same for all bodies (our own). The physical work is in justifying the geodesic law as a model for test bodies (our own).

**Wikipedia:** [Geodesics in general relativity](https://en.wikipedia.org/wiki/Geodesics_in_general_relativity). It says: “Importantly, the world line of a particle free from all external, non-gravitational forces is a particular type of geodesic. In other words, a freely moving or falling particle always moves along a geodesic.”

**Sources:** none listed. No primary source with a working link was found.

### Choosing the right time flow makes Kerr–de Sitter wave expansions provable

**Remember:** Choose the time flow before splitting the wave into modes.

*Makes the theorem clean to state or prove.* MSC 83C57 (Black holes), 58J45. arXiv math.AP, gr-qc. Level 4: research.

**Definition.** A Kerr–de Sitter spacetime models a rotating black hole in a universe with a positive cosmological constant. A stationary Killing field is a vector field whose flow preserves the metric and acts as a time direction. A quasinormal mode is a smooth wave that changes by a factor exp(−iσt) along the flow of a chosen stationary Killing field. The paper allows several such fields, among them the fields that generate the horizons.

**Problem.** In a subextremal Kerr–de Sitter spacetime, the mode frequencies form a discrete set of complex numbers. Waves then have an expansion in quasinormal modes up to a decay rate set by the trapped light rays.

**How the definition helps.** A suitable choice of time flow gives a family of operators that are Fredholm, so the standard Fredholm theory applies. Fredholm means that the kernel and cokernel have finite dimension and the range is closed. The earlier paper by the same authors proved the expansion with one such choice. This paper shows that many other choices work too. The control of the trapped light rays is still separate work.

**Paper or page:** [Stationarity and Fredholm Theory in Subextremal Kerr-de Sitter Spacetimes](https://arxiv.org/abs/2306.09213v2). It says: “One central ingredient in the argument was a new definition of quasinormal modes, where a non-standard choice of stationary Killing vector field had to be used in order for the Fredholm theory to be applicable.”

**Sources:**

- [Oliver Petersen, András Vasy, Stationarity and Fredholm Theory in Subextremal Kerr-de Sitter Spacetimes, arXiv:2306.09213 (2024), SIGMA 20 (2024), 052, 11 pages](https://arxiv.org/abs/2306.09213v2)
- [Oliver Petersen, András Vasy, Wave equations in the Kerr–de Sitter spacetime: the full subextremal range, Journal of the European Mathematical Society 27 (2025)](https://doi.org/10.4171/jems/1448)
