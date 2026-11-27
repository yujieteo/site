### Kelvin's temperature scale makes the Carnot efficiency universal

**Remember:** In a reversible engine, the ratio of temperatures is the ratio of heats.

*True by definition.* MSC 80A05 (Foundations of thermodynamics and heat transfer), 80A10. arXiv physics.class-ph. Level 1: early undergraduate.

**Definition.** Kelvin's thermodynamic temperature (in its 1851 form) is defined by reversible engines. Suppose a reversible engine takes heat Q₁ from one reservoir and gives heat Q₂ to another. Then the temperatures of the two reservoirs satisfy T₁/T₂ = Q₁/Q₂. One fixed reference point sets the size of the unit.

**Problem.** Get a temperature scale that does not depend on any particular substance. Also get the Carnot efficiency formula 1 − T(cold)/T(hot).

**How the definition helps.** Kelvin defined temperature by the ratio that Carnot's theorem fixes, so the efficiency formula holds by definition. Carnot's theorem says that all reversible engines between the same two reservoirs have the same efficiency. So a ratio of heats is a property of the two reservoirs alone. Kelvin used this ratio to define temperature itself. Then the Carnot efficiency 1 − Q(cold)/Q(hot) equals 1 − T(cold)/T(hot) by definition. Kelvin's 1848 paper had already asked for an absolute scale independent of any particular kind of matter, using an earlier equal-work rule. The physics that remains is to show that this scale agrees with the ideal-gas thermometer, and this needs the properties of ideal gases.

**Wikipedia:** [Thermodynamic temperature](https://en.wikipedia.org/wiki/Thermodynamic_temperature). It says: “it is this definition of the thermodynamic temperature that enables us to represent the Carnot efficiency in terms of T(H) and T(C)”

**Sources:**

- [Thomson, W. (Lord Kelvin) (1848). On an absolute thermometric scale founded on Carnot's theory of the motive power of heat. Philosophical Magazine, October 1848.](https://zapatopi.net/kelvin/papers/on_an_absolute_thermometric_scale.html)

### The zeroth law of thermodynamics makes temperature well defined

**Remember:** Temperature is the label of an equivalence class.

*True by definition.* MSC 80A05 (Foundations of thermodynamics and heat transfer), 80A10. arXiv physics.class-ph. Level 1: early undergraduate.

**Definition.** The zeroth law says this: if two systems are each in thermal equilibrium with a third, they are in thermal equilibrium with each other. Every system is also in equilibrium with itself (reflexivity). Together these make thermal equilibrium an equivalence relation.

**Problem.** Show that temperature exists. Temperature is a single quantity that is equal for two systems exactly when they are in thermal equilibrium.

**How the definition helps.** An equivalence relation sorts all systems into classes, so a temperature is just a label for a class. Each class holds systems that are all in equilibrium with each other, and different classes do not overlap. A temperature scale is any labelling of these classes. So the existence of temperature is close to a restatement of the law. The law also justifies thermometers: a thermometer in equilibrium with a system reads the class of that system. Fowler named the law in the 1930s, long after the first, second and third laws. The law does not give an order (which class is hotter) or a preferred numerical scale, as the article notes.

**Wikipedia:** [Zeroth law of thermodynamics](https://en.wikipedia.org/wiki/Zeroth_law_of_thermodynamics). It says: “It makes the relation of thermal equilibrium between systems an equivalence relation, which can represent equality of some quantity associated with each system.”

**Sources:**

- [Carathéodory, C. (1909). Untersuchungen über die Grundlagen der Thermodynamik. Mathematische Annalen 67, 355–386.](https://doi.org/10.1007/BF01450409)

### Homogeneity of the energy turns Euler's theorem into the Gibbs–Duhem equation

**Remember:** Scale the whole system, and its intensive variables lose one freedom.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics), 82B30. arXiv cond-mat.stat-mech, math-ph. Level 2: later undergraduate.

**Definition.** Extensive variables, such as entropy S, volume V and particle numbers Nᵢ, add up over the parts of a system. A system is homogeneous when its internal energy U(S, V, N₁, …) is first-order homogeneous. That means that multiplying all extensive variables by λ multiplies U by λ.

**Problem.** Gibbs–Duhem equation: S dT − V dP + Σ Nᵢ dμᵢ = 0, where T is temperature, P pressure and μᵢ the chemical potentials. So the intensive variables cannot all change independently.

**How the definition helps.** Euler's theorem for homogeneous functions gives U = TS − PV + Σ μᵢNᵢ at once. Comparing its differential with the fundamental relation dU = T dS − P dV + Σ μᵢ dNᵢ leaves the Gibbs–Duhem equation. So the equation is nearly the definition of homogeneity. The page says it does not apply to small systems, where surfaces break homogeneity. What stays hard is to justify extensivity for real matter, which needs forces of short range (our own).

**Wikipedia:** [Gibbs–Duhem equation](https://en.wikipedia.org/wiki/Gibbs%E2%80%93Duhem_equation). It says: “The Gibbs−Duhem equation applies to homogeneous thermodynamic systems. It does not apply to inhomogeneous systems such as small thermodynamic systems”

**Sources:** none listed. No primary source with a working link was found.

### Measuring hotness by β = 1/kT puts negative temperatures above infinite ones

**Remember:** Heat always flows from smaller β to larger β.

*Makes the theorem clean to state or prove.* MSC 80A10 (Classical and relativistic thermodynamics), 82B30. arXiv cond-mat.stat-mech, math-ph. Level 2: later undergraduate.

**Definition.** Thermodynamic temperature is defined by 1/T = dS/dE, the change of entropy per change of energy. Thermodynamic beta, or coldness, is β = 1/(kT), where k is Boltzmann's constant. When entropy falls as energy rises, as in a system of spins with bounded energy, T is negative.

**Problem.** Heat flows from the system with the smaller β to the system with the larger β, with no exceptions. Stated with T this fails, because a system at negative temperature is hotter than any system at positive temperature.

**How the definition helps.** When energy dE passes from system 1 to system 2, the total entropy changes by k(β₂ − β₁)dE (our own derivation). The second law needs this to be positive, so heat flows toward larger β. As the energy rises, β runs continuously from +∞ through 0 to −∞, while T jumps from +∞ to −∞. So β puts all states in one order of hotness. Purcell and Pound found negative temperatures in nuclear spins in 1951, and Ramsey worked out the thermodynamics in 1956. What stays hard: negative temperature needs an upper bound on the energy, so ordinary gases cannot have it (our own).

**Wikipedia:** [Negative temperature](https://en.wikipedia.org/wiki/Negative_temperature). It says: “Because it avoids the abrupt jump from +∞ to −∞, β is considered more natural than T.”

**Sources:**

- [N. F. Ramsey, Thermodynamics and Statistical Mechanics at Negative Absolute Temperatures, Physical Review 103 (1956), 20–28](https://doi.org/10.1103/PhysRev.103.20)
- [E. M. Purcell and R. V. Pound, A nuclear spin system at negative temperature, Physical Review 81 (1951), 279–280](https://doi.org/10.1103/PhysRev.81.279)

### Restricting the third law to perfect crystals excludes residual entropy

**Remember:** One ground state means zero entropy at zero temperature.

*Rules out counterexamples.* MSC 80A10 (Classical and relativistic thermodynamics), 82B30. arXiv cond-mat.stat-mech, math-ph. Level 2: later undergraduate.

**Definition.** Planck's form of the third law: the entropy of a perfect crystal of a pure substance tends to zero as T tends to 0. A perfect crystal has a unique ground state, so it has exactly one microstate at absolute zero.

**Problem.** For every perfect crystal, the entropy S tends to 0 as T tends to 0. For glasses and for crystals with frozen disorder, such as ice, the entropy near absolute zero stays positive.

**How the definition helps.** With a unique ground state, Boltzmann's formula S = k ln Ω, where Ω counts the microstates, gives k ln 1 = 0. So the law is nearly the definition of 'perfect'. The word 'perfect' excludes crystals with defects, which keep a residual entropy. Pauling explained the residual entropy of ice in 1935 by the many ways to place its hydrogen atoms (our own, from Pauling's paper). The page says the residual entropy disappears when kinetic barriers to the single ground state are overcome. What stays hard is the unattainability principle: absolute zero cannot be reached in finitely many steps. Masanes and Oppenheim gave a general derivation of it in 2017.

**Wikipedia:** [Third law of thermodynamics](https://en.wikipedia.org/wiki/Third_law_of_thermodynamics). It says: “Some crystals form defects which cause a residual entropy. This residual entropy disappears when the kinetic barriers to transitioning to one ground state are overcome.”

**Sources:**

- [L. Pauling, The Structure and Entropy of Ice and of Other Crystals with Some Randomness of Atomic Arrangement, Journal of the American Chemical Society 57 (1935), 2680–2684](https://doi.org/10.1021/ja01315a102)

### Carathéodory's approach defines heat as energy change minus adiabatic work

**Remember:** Heat is whatever energy change work does not explain.

*True by definition. Confidence: medium.* MSC 80A05 (Foundations of thermodynamics and heat transfer), 80A10. arXiv physics.class-ph. Level 3: graduate.

**Definition.** Internal energy U is measured by adiabatic work, which is work done through walls that let no heat pass. The heat Q that goes into a body in a process is then defined as the part of the change in internal energy that work does not account for: ΔU = Q + (work done on the body). Wikipedia writes this as Q = ΔU − W, with its own sign convention for W.

**Problem.** Give the first law of thermodynamics a definite content without treating heat as a primitive notion. A primitive notion is one that is taken as given and is not defined.

**How the definition helps.** With heat defined this way, the energy balance of the first law holds by definition. Before Carathéodory, textbooks treated heat, temperature and thermal equilibrium as jointly primitive notions, as the article says. In our own reading, the physical content moves into one claim. The claim is that the adiabatic work between two states does not depend on the path, so U is a function of the state alone. The article notes that Carathéodory himself did not state the formula. It is the customary definition that followed his 1909 paper.

**Wikipedia:** [Heat](https://en.wikipedia.org/wiki/Heat). It says: “Although Carathéodory himself did not state such a definition, following his work it is customary in theoretical studies to define heat”

**Sources:**

- [Carathéodory, C. (1909). Untersuchungen über die Grundlagen der Thermodynamik. Mathematische Annalen 67, 355–386.](https://doi.org/10.1007/BF01450409)
