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

### Enthalpy gives heat at constant pressure

**Remember:** Add pressure times volume to turn constant-pressure heating into a state change.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv physics.class-ph. Level 1: early undergraduate.

**Definition.** Define enthalpy as internal energy plus pressure times volume. Use it in place of internal energy for heating a closed system at constant pressure.

**Problem.** Consider a closed system whose only work is expansion against a constant pressure equal to the system pressure. The heat supplied equals its enthalpy increase when bulk kinetic and potential energies stay fixed.

**How the definition helps.** In our own calculation, the increase in pressure times volume exactly accounts for expansion work. The first law then turns the sum of internal energy change and expansion work into the heat supplied.

**Wikipedia:** [Enthalpy](https://en.wikipedia.org/wiki/Enthalpy). It says: “at constant pressure the enthalpy change equals the energy exchanged with the environment by heat.”

**Sources:** none listed. No primary source with a working link was found.

### Thermal resistances add in series

**Remember:** The same heat crosses each layer, so the temperature drops add.

*True by definition.* MSC 80A19 (Diffusive and convective heat and mass transfer, heat flow). arXiv physics.class-ph. Level 1: early undergraduate.

**Definition.** Define a layer’s thermal resistance as its temperature drop divided by the steady rate of heat flow through it. For a flat layer of thickness L, area A, and constant thermal conductivity k, this gives L/(kA). Conductivity measures heat transport within the material.

**Problem.** In steady one-dimensional conduction with no internal heat sources, the total resistance of layers in series equals the sum of their resistances. Perfect contact introduces no extra resistance.

**How the definition helps.** Our own calculation adds the temperature drops and divides by the common heat flow to get the sum of resistances. Our own account puts the work in deriving each resistance from Fourier’s law and using steady energy balance to equate the flows.

**Wikipedia:** [Thermal conductance and resistance](https://en.wikipedia.org/wiki/Thermal_conductance_and_resistance). It says: “When resistances are in series, the total resistance is the sum of the resistances:”

**Sources:** none listed. No primary source with a working link was found.

### Bit reset costs heat

**Remember:** The heat bound pays for lost uncertainty, not for changing a bit.

*Rules out counterexamples.* MSC 80A05 (Foundations of thermodynamics and heat transfer). arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** A perfect reset sends both values of a bit to one fixed value. Assume the two initial values are equally likely, have equal internal entropy, and have no correlations with other systems. Require the final memory state to have the same internal entropy as either initial value.

**Problem.** Let the controller return to its initial state, with a single bath at absolute temperature T taking up all exported entropy. Resetting the bit sends at least kT ln 2 of heat to the bath, where k is Boltzmann’s constant.

**How the definition helps.** Our own entropy balance uses the reset definition to count exactly k ln 2 of lost memory entropy. The second law requires the bath to gain at least that much. In our own counterexample, an auxiliary blank bit takes the original value as the first bit resets. This reversible swap preserves their joint entropy.

**Wikipedia:** [Landauer's principle](https://en.wikipedia.org/wiki/Landauer%27s_principle). It says: “erasure resets a memory that may be in either of two distinguishable physical states into a fixed state”

**Sources:**

- [Rolf Landauer, Irreversibility and Heat Generation in the Computing Process](https://doi.org/10.1147/rd.53.0183)

### Energy potentials yield Maxwell relations

**Remember:** Choose the right potential, then swap the order of differentiation.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** For a simple compressible system of fixed composition, write internal energy U in terms of entropy S and volume V. Temperature T and negative pressure −P are its respective partial derivatives. Define three further potentials by H = U + PV, F = U − TS, and G = H − TS.

**Problem.** Suppose each potential has continuous second derivatives in its own variables. Each gives one Maxwell relation between measurable derivatives. For F(T,V), the volume derivative of entropy at fixed temperature equals the temperature derivative of pressure at fixed volume.

**How the definition helps.** Each potential gives two observable quantities as its first derivatives, so exchanging the differentiation order relates their rates of change. Our own example uses F in place of U because dF = −S dT − P dV. The physical input is the equilibrium energy balance dU = T dS − P dV.

**Wikipedia:** [Maxwell relations](https://en.wikipedia.org/wiki/Maxwell_relations). It says: “the order of differentiation of an analytic function of two variables is irrelevant”

**Sources:** none listed. No primary source with a working link was found.

### Enthalpy survives insulated throttling

**Remember:** A throttle trades flow work against internal energy.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Define specific enthalpy as h = u + Pv, where u and v are internal energy and volume per unit mass. The term Pv includes the work of pushing fluid into or out of a region at pressure P.

**Problem.** Suppose fluid flows steadily through an insulated valve with negligible changes in speed and height. If no moving part exchanges work with the fluid, its specific enthalpy stays constant. An ideal gas with positive heat capacity then keeps its temperature.

**How the definition helps.** In our own balance, enthalpy groups the internal energy and pressure work that travel together through the valve. Our own account puts the work in the steady flow energy balance. The temperature claim separately uses that ideal gas enthalpy depends only on temperature.

**Wikipedia:** [Joule–Thomson effect](https://en.wikipedia.org/wiki/Joule%E2%80%93Thomson_effect). It says: “In a Joule–Thomson expansion the enthalpy remains constant.”

**Sources:** none listed. No primary source with a working link was found.

### Gibbs energy tracks total entropy

**Remember:** At fixed temperature and pressure, rising total entropy means falling Gibbs energy.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** Define Gibbs energy as internal energy plus pressure times volume minus temperature times entropy. Use it to compare a closed system’s equilibrium states at the same positive temperature and pressure as its surroundings.

**Problem.** Suppose the system exchanges heat with one temperature reservoir and does only expansion work against the fixed external pressure. Gibbs energy cannot increase in a spontaneous change between these states.

**How the definition helps.** In our own calculation, Gibbs energy combines the system and surroundings terms in the total entropy change. The reservoir loses the heat gained by the system, while the first law accounts for expansion work. Our own calculation gives ΔG = −TΔSₜₒₜ, so the second law gives ΔG ≤ 0.

**Wikipedia:** [Gibbs free energy](https://en.wikipedia.org/wiki/Gibbs_free_energy). It says: “The equation can be also seen from the perspective of the system taken together with its surroundings”

**Sources:** none listed. No primary source with a working link was found.

### Grand potential gives bulk pressure

**Remember:** Subtract the temperature and particle terms, leaving the pressure term.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** For one species in equilibrium, subtract TS and μN from internal energy U to obtain the grand potential Ω. Here T is temperature, S is entropy, and N counts particles. The chemical potential μ is the derivative of U with respect to N at fixed S and volume V. The new potential uses T, V and μ as independent variables.

**Problem.** Suppose internal energy U is differentiable and scales linearly when entropy, volume and particle number all scale together. For this homogeneous bulk system, Ω = −PV, where P is pressure.

**How the definition helps.** Our own calculation cancels two terms from the extensive internal energy using the definition of the grand potential. Euler’s theorem gives U = TS − PV + μN because U scales linearly with its extensive variables. Our own account puts the physical work in justifying that scaling, which neglects surface and other finite-size effects.

**nLab:** [Legendre transformation](https://ncatlab.org/nlab/show/Legendre+transformation). It says: “Some of the standard choices are enthalpy H, Helmholtz free energy F, Gibbs free energy G, internal energy U, etc.”

**Wikipedia:** [Grand potential](https://en.wikipedia.org/wiki/Grand_potential). It says: “all extensive quantities (particle number, energy, entropy, potentials, ...) must grow linearly with volume”

**Sources:** none listed. No primary source with a working link was found.

### Helmholtz energy bounds work

**Remember:** The decrease in Helmholtz energy bounds the work the system can deliver.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Let a closed system exchange heat with one bath at constant temperature T. At each equilibrium endpoint at temperature T, define Helmholtz energy by F = U − TS, using internal energy U and entropy S.

**Problem.** Between equilibrium states of a closed system in one heat bath at fixed temperature, delivered work is at most −ΔF. A reversible path, when available under the same constraints, achieves the bound.

**How the definition helps.** Our own derivation collects the two terms that bound the work in F. In our own calculation, conservation of energy gives delivered work Q − ΔU, where Q is heat input. Our own account puts the physical work in the second law for the system and bath, which gives Q ≤ TΔS.

**Wikipedia:** [Helmholtz free energy](https://en.wikipedia.org/wiki/Helmholtz_free_energy). It says: “the total amount of work that can be extracted in an isothermal process is limited by the free-energy decrease”

**Sources:** none listed. No primary source with a working link was found.

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

### Reduced Gibbs energy reveals enthalpy

**Remember:** Temperature scaling turns the Gibbs derivative into an enthalpy measurement.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** At positive absolute temperature T, divide Gibbs energy G by T. Write G = H − TS, where S is entropy. Enthalpy H is internal energy plus pressure times volume.

**Problem.** At fixed pressure and composition, the temperature derivative of G/T is −H/T² in a smooth equilibrium phase.

**How the definition helps.** Dividing by temperature puts both terms of G = H − TS into the quotient rule, where the entropy terms cancel. Our own calculation uses the equilibrium identity dG/dT = −S at fixed pressure and composition. It gives d(G/T)/dT = (−TS − G)/T² = −H/T².

**Wikipedia:** [Gibbs–Helmholtz equation](https://en.wikipedia.org/wiki/Gibbs%E2%80%93Helmholtz_equation). It says: “The Gibbs–Helmholtz equation can be derived by this second master equation”

**Sources:** none listed. No primary source with a working link was found.

### Restricting the third law to perfect crystals excludes residual entropy

**Remember:** One ground state means zero entropy at zero temperature.

*Rules out counterexamples.* MSC 80A10 (Classical and relativistic thermodynamics), 82B30. arXiv cond-mat.stat-mech, math-ph. Level 2: later undergraduate.

**Definition.** Planck's form of the third law: the entropy of a perfect crystal of a pure substance tends to zero as T tends to 0. A perfect crystal has a unique ground state, so it has exactly one microstate at absolute zero.

**Problem.** For every perfect crystal, the entropy S tends to 0 as T tends to 0. For glasses and for crystals with frozen disorder, such as ice, the entropy near absolute zero stays positive.

**How the definition helps.** With a unique ground state, Boltzmann's formula S = k ln Ω, where Ω counts the microstates, gives k ln 1 = 0. So the law is nearly the definition of 'perfect'. The word 'perfect' excludes crystals with defects, which keep a residual entropy. Pauling explained the residual entropy of ice in 1935 by the many ways to place its hydrogen atoms (our own, from Pauling's paper). The page says the residual entropy disappears when kinetic barriers to the single ground state are overcome. What stays hard is the unattainability principle: absolute zero cannot be reached in finitely many steps. Masanes and Oppenheim gave a general derivation of it in 2017.

**Wikipedia:** [Third law of thermodynamics](https://en.wikipedia.org/wiki/Third_law_of_thermodynamics). It says: “Some crystals form defects which cause a residual entropy. This residual entropy disappears when the kinetic barriers to transitioning to one ground state are overcome.”

**Sources:**

- [L. Pauling, The Structure and Entropy of Ice and of Other Crystals with Some Randomness of Atomic Arrangement, Journal of the American Chemical Society 57 (1935), 2680–2684](https://doi.org/10.1021/ja01315a102)

### A logarithmic mean gives heat flow

**Remember:** Average the temperature gap logarithmically when the gap changes exponentially along the exchanger.

*Makes the theorem clean to state or prove.* MSC 80A19 (Diffusive and convective heat and mass transfer, heat flow). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Let a and b be the positive temperature differences between the hot and cold streams at the two ends of a heat exchanger. Define their logarithmic mean as (a − b)/log(a/b) when they differ. For equal gaps, use their common value.

**Problem.** Consider steady parallel or counterflow without heat loss or heat conduction along the streams. Assume constant overall transfer coefficient and constant heat capacity rates, meaning heat carried per unit time per degree. The heat transfer rate equals coefficient times exchange area times the logarithmic mean.

**How the definition helps.** In our own calculation, this mean equals the average temperature gap over the exchange area. The stream energy balances make the gap exponential in cumulative exchange area, including a constant gap as a limiting case in our own derivation.

**Wikipedia:** [Logarithmic mean temperature difference](https://en.wikipedia.org/wiki/Logarithmic_mean_temperature_difference). It says: “When the two temperature differences are equal, this formula does not directly resolve, so the LMTD is conventionally taken to equal its limit value”

**Sources:** none listed. No primary source with a working link was found.

### Effusivity weights contact temperature

**Remember:** The material with higher effusivity pulls the contact temperature closer to its own.

*Makes the theorem clean to state or prove.* MSC 80A19 (Diffusive and convective heat and mass transfer, heat flow). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Define thermal effusivity as √(kc), where k is thermal conductivity and c is heat capacity per unit volume. Conductivity relates heat flow to a temperature gradient. Heat capacity measures the energy needed for a unit temperature rise.

**Problem.** Two homogeneous half-spaces placed in perfect planar contact have constant interface temperature. With uniform initial temperatures and constant material properties, that temperature is the mean weighted by the two effusivities.

**How the definition helps.** Effusivity gives each material’s weight in the formula for the shared contact temperature. In our own derivation, the heat equation gives each side’s heat flux as its effusivity times its temperature drop divided by √(πt). Matching the fluxes cancels the common time factor in our own calculation.

**Wikipedia:** [Thermal effusivity](https://en.wikipedia.org/wiki/Thermal_effusivity). It says: “the temperature at the contact surface Tₘ will be a weighted mean based on their relative effusivities.”

**Sources:** none listed. No primary source with a working link was found.

### Area weighting makes view factors reciprocal

**Remember:** Swap emitter and receiver after restoring the area used to normalize.

*True by definition.* MSC 80A21 (Radiative heat transfer). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Suppose every point on each surface emits equally per unit area, with power per solid angle proportional to the cosine from the normal. The view factor is the fraction of emitted power reaching the other surface directly through transparent space. Multiply this fraction by the emitting area.

**Problem.** For two diffusely emitting surfaces, each view factor times its emitting area is unchanged when the surfaces swap roles.

**How the definition helps.** In our own calculation, multiplying by area removes the emitter’s normalization and leaves a symmetric integral over visible point pairs. Its kernel contains both projection cosines divided by π times the squared separation. Exchanging the points therefore preserves the integral in our own proof. The physical step derives the kernel from diffuse emission and straight ray paths.

**Wikipedia:** [View factor](https://en.wikipedia.org/wiki/View_factor). It says: “Aᵢ Fᵢ→ⱼ = Aⱼ Fⱼ→ᵢ”

**Sources:** none listed. No primary source with a working link was found.

### Radiosity linearizes enclosure radiation

**Remember:** Track all outgoing radiation, and each reflection reuses the same unknown.

*Makes the theorem clean to state or prove.* MSC 80A21 (Radiative heat transfer). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Radiosity is the total radiant power leaving a surface per unit area, including emission and reflection. A diffuse surface sends radiation in each direction with intensity proportional to the cosine of its angle from the surface normal.

**Problem.** Consider an enclosure with opaque surfaces at known temperatures and a medium that transmits all radiation between them. Assume each surface emits and reflects diffusely, with wavelength-independent properties and uniform radiosity. Then the unknown surface radiosities satisfy a linear system.

**How the definition helps.** In our own explanation, each surface receives a linear combination of the outgoing radiosities, weighted by the fractions that reach it. Our own calculation adds its emission to a fixed fraction of that incoming radiation to obtain its outgoing total. Our own account puts the work in deriving those fractions and justifying the diffuse gray model.

**Wikipedia:** [Radiosity (radiometry)](https://en.wikipedia.org/wiki/Radiosity_%28radiometry%29). It says: “this summation for each surface will generate N linear equations with N unknown radiosities”

**Sources:** none listed. No primary source with a working link was found.

### Gibbs energy gives coexistence slopes

**Remember:** Along coexistence, equal Gibbs energies change at the same rate.

*True by definition.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** For a pure substance, use molar Gibbs energy g = u + Pv − Ts. Here u, v, and s are internal energy, volume, and entropy per mole. This replaces internal energy in entropy and volume coordinates with a function of temperature T and pressure P.

**Problem.** Suppose two phases coexist along a smooth pressure curve P(T). Its slope is Δs/Δv wherever their molar volumes differ. Take both differences in the same phase order.

**How the definition helps.** In our own differential argument, equal Gibbs energies change at the same rate along the coexistence curve. Our own calculation subtracts dg = v dP − s dT in the two phases to obtain Δv dP = Δs dT. Our own account puts the work in the equilibrium criterion, which equates the molar Gibbs energies.

**Wikipedia:** [Clausius–Clapeyron relation](https://en.wikipedia.org/wiki/Clausius%E2%80%93Clapeyron_relation). It says: “Their chemical potentials are related by μα = μβ.”

**Sources:** none listed. No primary source with a working link was found.

### Carathéodory's approach defines heat as energy change minus adiabatic work

**Remember:** Heat is whatever energy change work does not explain.

*True by definition. Confidence: medium.* MSC 80A05 (Foundations of thermodynamics and heat transfer), 80A10. arXiv physics.class-ph. Level 3: graduate.

**Definition.** Internal energy U is measured by adiabatic work, which is work done through walls that let no heat pass. The heat Q that goes into a body in a process is then defined as the part of the change in internal energy that work does not account for: ΔU = Q + (work done on the body). Wikipedia writes this as Q = ΔU − W, with its own sign convention for W.

**Problem.** Give the first law of thermodynamics a definite content without treating heat as a primitive notion. A primitive notion is one that is taken as given and is not defined.

**How the definition helps.** With heat defined this way, the energy balance of the first law holds by definition. Before Carathéodory, textbooks treated heat, temperature and thermal equilibrium as jointly primitive notions, as the article says. In our own reading, the physical content moves into one claim. The claim is that the adiabatic work between two states does not depend on the path, so U is a function of the state alone. The article notes that Carathéodory himself did not state the formula. It is the customary definition that followed his 1909 paper.

**Wikipedia:** [Heat](https://en.wikipedia.org/wiki/Heat). It says: “Although Carathéodory himself did not state such a definition, following his work it is customary in theoretical studies to define heat”

**Sources:**

- [Carathéodory, C. (1909). Untersuchungen über die Grundlagen der Thermodynamik. Mathematische Annalen 67, 355–386.](https://doi.org/10.1007/BF01450409)

### Entropy inversion preserves stability

**Remember:** The same stability test survives when energy and entropy trade places.

*Makes the theorem clean to state or prove.* MSC 80A05 (Foundations of thermodynamics and heat transfer). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** Write equilibrium entropy as S(E,x), where E is energy and x collects the remaining variables. When entropy increases strictly with energy, solve for energy as a function of entropy and x.

**Problem.** Suppose S is continuously differentiable and concave on an open convex domain, with positive energy derivative. Its inverse energy function is convex on every convex subset of its domain.

**How the definition helps.** In our own proof, exchanging energy and entropy lets the same chord compare both functions. Concavity places the chord below the entropy graph. Since entropy increases with energy, reaching the chord’s entropy requires at most the chord’s energy in our own argument.

**Paper or page:** [A note on relations between convexity and concavity of thermodynamic functions](https://arxiv.org/abs/2510.24440v1). It says: “If ϕᵤ₁(u)&gt;0 for all u∈D, then we can use the same transformation but the properties are switched,”

**Sources:**

- [Mária Lukáčová-Medvid’ová, Ferdinand Thein, Gerald Warnecke and Yuhuan Yuan, A note on relations between convexity and concavity of thermodynamic functions](https://arxiv.org/abs/2510.24440v1)

### Exergy measures lost useful work

**Remember:** Each unit of entropy generated costs T₀ units of useful work.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv physics.class-ph. Level 3: graduate.

**Definition.** Consider a closed system with fixed composition and negligible changes in speed and height. Its surroundings have constant temperature T₀ and pressure P₀. Form U + P₀V − T₀S from internal energy U, volume V and entropy S. Define exergy by subtracting the value of this expression at equilibrium with the surroundings.

**Problem.** When heat exchange is only with the environment at T₀, the exergy drop equals the useful work delivered plus T₀ times the entropy generated. Useful work excludes the work against ambient pressure.

**How the definition helps.** In our own calculation, exergy absorbs both the ambient-pressure work and the entropy term from the energy balance. Our own account puts the physical work in the entropy balance for heat at the bath temperature. The second law makes the loss nonnegative.

**Wikipedia:** [Exergy](https://en.wikipedia.org/wiki/Exergy). It says: “exergy is always destroyed when a process is non-ideal or irreversible”

**Sources:**

- [Joaquim Anacleto, Lost work and exergy: two views of the same concept](https://doi.org/10.1088/1361-6404/ad2101)

### Entropy forces give transport positivity

**Remember:** Use the entropy gradient so production becomes a quadratic form.

*True by definition.* MSC 80A17 (Thermodynamics of continua). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** A flux measures the amount of a conserved quantity crossing unit area per unit time. Pair each flux with the spatial gradient of the entropy density derivative with respect to that quantity’s density. For energy, the force is the gradient of inverse absolute temperature.

**Problem.** Near equilibrium, suppose fluxes depend linearly on independently variable forces through a matrix L. The second law requires that the symmetric part of L have a nonnegative quadratic form.

**How the definition helps.** In our own explanation, the force and flux choices make entropy production the quadratic form of the transport matrix. Our own calculation discards the antisymmetric part because it contributes zero to that form. Our own account puts the work in deriving the local entropy balance, which fixes the force and flux pairs.

**Wikipedia:** [Onsager reciprocal relations](https://en.wikipedia.org/wiki/Onsager_reciprocal_relations). It says: “since the entropy production must be non-negative, the Onsager matrix of phenomenological coefficients L₍αβ₎ is a positive semi-definite matrix.”

**Sources:**

- [Lars Onsager, Reciprocal Relations in Irreversible Processes. I.](https://doi.org/10.1103/physrev.37.405)

### A common tangent gives equal areas

**Remember:** A straight coexistence segment cancels the two pressure areas.

*True by definition.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** At fixed temperature, plot the uniform phase’s Helmholtz free energy per mole against volume per mole. Allow mixtures by taking the largest convex function below this graph. In a coexistence interval, this function follows a straight line that touches the two pure phases.

**Problem.** If the supporting line touches two smooth points, its negative slope is the coexistence pressure. The signed areas between the original pressure curve and this pressure cancel on that interval.

**How the definition helps.** In our own calculation, the straight segment fixes the free energy difference as slope times volume change. Pressure equals minus the volume derivative, so integrating pressure gives the same difference with opposite sign. Subtracting the constant coexistence pressure then gives zero signed area in our own proof. The physical step in our own comparison justifies the straight segment by mixing bulk phases with negligible interface energy per mole.

**Wikipedia:** [Maxwell construction](https://en.wikipedia.org/wiki/Maxwell_construction). It says: “This line is the one for which the two areas, I and II, shown in the figure, are equal.”

**Sources:** none listed. No primary source with a working link was found.

### Chemical potential drives phase separation

**Remember:** Let concentration flow down the derivative of its free energy.

*True by definition.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** Let c denote concentration, and integrate f(c) + κ\|∇c\|²/2 over space to define energy E, with κ positive. The second term penalizes concentration gradients. Define chemical potential μ so a small change δc gives first-order energy change ∫μ δc. For periodic boundaries, integration by parts gives μ = f′(c) − κΔc, where Δ is the Laplacian.

**Problem.** Suppose concentration changes only by flow with flux −M∇μ, where M is a nonnegative coefficient measuring mobility. For a smooth solution with periodic boundaries, E cannot increase.

**How the definition helps.** Our own calculation writes the energy derivative as the integral of chemical potential times concentration change rate. Our own next step uses the flux −M∇μ and periodicity to get minus the integral of M\|∇μ\|². Our own account puts the modeling work in choosing the energy and using its derivative in the flux law.

**Wikipedia:** [Cahn–Hilliard equation](https://en.wikipedia.org/wiki/Cahn%E2%80%93Hilliard_equation). It says: “The proof relies essentially on the existence of a Lyapunov functional.”

**Sources:**

- [John W. Cahn and John E. Hilliard, Free Energy of a Nonuniform System. I. Interfacial Free Energy](https://doi.org/10.1063/1.1744102)

### Independent components fix phase counts

**Remember:** Count independent chemical amounts, not names on the reaction list.

*Rules out counterexamples.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** Count independent chemical components instead of counting every species. Each independent equilibrium reaction removes one independent species count when there are no other composition constraints. The components give enough independent amounts to describe the composition of every phase.

**Problem.** At regular equilibrium with temperature and pressure as the only external controls, F = C − P + 2. Here C counts independent components and P counts phases. F counts freely variable properties, such as temperature or composition, that do not depend on system size.

**How the definition helps.** Our own count uses independent components to give each phase C − 1 composition variables. Adding temperature and pressure and subtracting C(P − 1) independent equilibrium conditions gives the rule. In our own example, solid calcium carbonate, solid calcium oxide and carbon dioxide gas coexist. One reaction relates the three species, leaving two components and one freedom. Counting all three species would predict two freedoms.

**Wikipedia:** [Phase rule](https://en.wikipedia.org/wiki/Phase_rule). It says: “the minimum number of independent species necessary to define the composition of all phases of the system.”

**Sources:** none listed. No primary source with a working link was found.

### Stored latent heat gives the interface law

**Remember:** Count the heat of melting even when the temperature stays fixed.

*True by definition.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv physics.class-ph. Level 3: graduate.

**Definition.** Consider a material at rest that melts at a fixed temperature. Describe stored thermal energy per unit volume by its enthalpy, including the heat needed to melt a unit volume. At melting temperature this gives distinct values for solid and liquid.

**Problem.** For smooth phases and a smooth melting front at the melting temperature, weak energy conservation gives the Stefan condition. The heat flux jump supplies the latent heat required to move the front.

**How the definition helps.** In our own balance, moving the interface converts a known volume and therefore accounts for its melting heat automatically. For a unit area, the stored energy jump times the normal speed equals the net heat flux into the front. Our own derivation integrates energy conservation across a shrinking layer around the front, replacing a separately imposed boundary law.

**Wikipedia:** [Stefan problem](https://en.wikipedia.org/wiki/Stefan_problem). It says: “the discontinuity of heat flux at the boundary must be accounted for by the rate of latent heat release”

**Sources:** none listed. No primary source with a working link was found.

### Heat polynomials satisfy diffusion automatically

**Remember:** Choose basis functions that already solve the heat equation.

*True by definition.* MSC 80A23 (Inverse problems in thermodynamics and heat transfer). arXiv math.NA, math-ph. Level 3: graduate.

**Definition.** Define the nth heat polynomial as n factorial times the coefficient of zⁿ in exp(zx + z²t). Use these polynomials instead of ordinary powers to fit the temperature behind a moving melting front.

**Problem.** Every finite linear combination of these heat polynomials solves ∂ₜu = ∂ₓ²u. To estimate an unknown boundary heat flow, one can fit the coefficients to temperature and boundary data.

**How the definition helps.** Our own check shows that the generating function solves the heat equation for every z. Differentiating once in time or twice in space multiplies it by z². Comparing powers of z gives the equation for every basis polynomial. Ordinary powers of position alone lack this property. The paper still has to control how well the fitted polynomials recover the solution.

**Paper or page:** [A collocation heat polynomials method for one-dimensional inverse Stefan problems](https://arxiv.org/abs/2410.19397v1). It says: “This method constructs an approximate solution as a linear combination of heat polynomials, which satisfies the heat equation, with the coefficients determined using the collocation method.”

**Sources:**

- [Orazbek Narbek, Samat A. Kassabek, Targyn Nauryz, A collocation heat polynomials method for one-dimensional inverse Stefan problems](https://arxiv.org/abs/2410.19397v1)
- [P. C. Rosenbloom and D. V. Widder, Expansions in terms of heat polynomials and associated functions](https://doi.org/10.1090/s0002-9947-1959-0107118-2)

### Adiabatic comparisons calibrate entropy

**Remember:** Calibrate entropy with fractions of two ordered reference states.

*Makes the theorem clean to state or prove.* MSC 80A05 (Foundations of thermodynamics and heat transfer). arXiv cond-mat.stat-mech. Level 4: research.

**Definition.** Write X ≺ Y if a process from X to Y can leave only a raised or lowered weight as an external change. Choose reference states A and B with A ≺ B and A inaccessible from B. For X between them, prepare independent portions of A and B in proportions 1 − λ and λ. Define S(X) as the supremum of λ for which that pair can reach X.

**Problem.** Assume the Lieb–Yngvason axioms for accessible processes and comparability of states in the relevant scaled and combined systems. On the calibrated interval, X ≺ Y exactly when S(X) ≤ S(Y).

**How the definition helps.** Our own explanation compares preparations from the same two references, turning accessibility into a comparison of numbers. Transitivity gives monotonicity directly. Proving the converse requires the axioms for splitting, scaling, combining and stabilizing comparisons between states.

**Wikipedia:** [Adiabatic accessibility](https://en.wikipedia.org/wiki/Adiabatic_accessibility). It says: “The entropy has the property that S(X) ≤ S(Y) if and only if X ≺ Y”

**Sources:**

- [Elliott H. Lieb and Jakob Yngvason, The physics and mathematics of the second law of thermodynamics](https://doi.org/10.1016/s0370-1573(98)00082-9)

### Convexity makes melting fronts unique

**Remember:** Find one minimum instead of solving several coupled front equations.

*Makes the theorem clean to state or prove.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv math.AP. Level 4: research.

**Definition.** In Panov’s one-dimensional melting model, each boundary between phases moves a constant times the square root of time. Define a scalar function of these ordered constants whose partial derivatives give the heat balance equations at the boundaries.

**Problem.** Assume an increasing initial temperature step, positive heat conductivities and diffusivities, and nonnegative heats of phase change. Exactly one solution has a temperature profile depending only on position divided by the square root of time.

**How the definition helps.** The scalar function turns several heat balance equations into one minimization problem. Panov proves that the function attains a minimum and is strictly convex on the allowed region. Our own proof sketch observes that the minimum is therefore the only point where all partial derivatives vanish.

**Paper or page:** [On self-similar solutions of a multi-phase Stefan problem](https://arxiv.org/abs/2401.15338v1). It says: “and it correspond to the minimum of strictly convex and coercive function”

**Sources:**

- [Evgeny Yu. Panov, On self-similar solutions of a multi-phase Stefan problem](https://arxiv.org/abs/2401.15338v1)
- [Evgeny Yu. Panov, On self-similar solutions of a multi-phase Stefan problem](https://doi.org/10.4171/nnu90/11)

### Freezing time smooths front jumps

**Remember:** A jump in position becomes a flat interval in freezing time.

*Makes the theorem clean to state or prove.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv math.AP, math.PR. Level 4: research.

**Definition.** Describe the freezing front by the time s(x) when the front first reaches or passes position x. This replaces the usual front position as a function of time. A jump of the front becomes an interval of positions with the same freezing time.

**Problem.** Consider the paper’s physical freezing front with an initial profile that is a probability density on the nonnegative half-line. On the open interval between the initial and limiting front positions, freezing time has a continuous derivative. It has derivatives of all orders outside a relatively closed countable set.

**How the definition helps.** In our own explanation, all positions swallowed in a jump receive the same freezing time. Our own reading locates the difficult part at the ends of flat intervals and at other singular points. The proof uses an obstacle problem, which our own description treats as an equation with a nonnegativity constraint on integrated temperature.

**Paper or page:** [Free boundary regularity and well-posedness of physical solutions to the supercooled Stefan problem](https://arxiv.org/abs/2506.18741v1). It says: “(Λ₀, α) ∖ R is countable, with s ∈ C∞(R).”

**Sources:**

- [Sebastian Munoz, Free boundary regularity and well-posedness of physical solutions to the supercooled Stefan problem](https://arxiv.org/abs/2506.18741v1)

### Integrated heat reveals melting regions

**Remember:** Time integration turns a moving melted region into a positivity set.

*Makes the theorem clean to state or prove.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv math.AP, math.PR. Level 4: research.

**Definition.** For the paper’s melting solution, integrate temperature above melting from time zero to t at each position x. Call the result w(t,x). The model transfers heat between separated points.

**Problem.** Assume bounded initial enthalpy μ with compact support and values above one on that support. For unit latent heat, write D for the fractional Laplacian, the model’s spatial heat operator. Then min(∂ₜw + Dw + 1 − μ, w) = 0 with w initially zero.

**How the definition helps.** Our own explanation uses w to state the heat balance on all of space without tracking a moving boundary separately. The minimum equation makes both entries nonnegative and forces the heat balance to hold with equality wherever w is positive. The authors establish this equation for the evolution they construct.

**Paper or page:** [The Nonlocal Stefan Problem via a Martingale Transport](https://arxiv.org/abs/2310.04640v3). It says: “w(t,x) ≔ ∫₀ᵗ η(s,x) ds solves the parabolic obstacle problem”

**Sources:**

- [Raymond Chu, Inwon Kim, Young-Heon Kim, Kyeongsik Nam, The Nonlocal Stefan Problem via a Martingale Transport](https://arxiv.org/abs/2310.04640v3)
