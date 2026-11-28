### Kelvin's temperature scale makes the Carnot efficiency universal

**Remember:** Temperature ratio is defined as the reversible heat ratio.

*True by definition.* MSC 80A05 (Foundations of thermodynamics and heat transfer), 80A10. arXiv physics.class-ph. Level 1: early undergraduate.

**Definition.** Kelvin’s thermodynamic temperature is defined by reversible engines: if one takes heat Q₁ from a reservoir and gives heat Q₂ to another, then T₁/T₂ = Q₁/Q₂. One reference point fixes the unit.

**Problem.** This temperature does not depend on any particular substance. Every reversible engine between two reservoirs has efficiency 1 − T(cold)/T(hot).

**How the definition helps.** The efficiency is 1 − Q(cold)/Q(hot), and the definition sets this ratio equal to T(cold)/T(hot). Carnot’s theorem, that all reversible engines between the same reservoirs have the same efficiency, makes the ratio depend only on the reservoirs. So the scale is well defined and uses no particular substance.

**Wikipedia:** [Thermodynamic temperature](https://en.wikipedia.org/wiki/Thermodynamic_temperature). It says: “it is this definition of the thermodynamic temperature that enables us to represent the Carnot efficiency in terms of T(H) and T(C)”

**Sources:**

- [Thomson, W. (Lord Kelvin) (1848). On an absolute thermometric scale founded on Carnot's theory of the motive power of heat. Philosophical Magazine, October 1848.](https://zapatopi.net/kelvin/papers/on_an_absolute_thermometric_scale.html)

### The zeroth law of thermodynamics makes temperature well defined

**Remember:** Temperature is the label of an equivalence class.

*True by definition.* MSC 80A05 (Foundations of thermodynamics and heat transfer), 80A10. arXiv physics.class-ph. Level 1: early undergraduate.

**Definition.** Thermal equilibrium is an equivalence relation on equilibrium states: reflexive, symmetric, and transitive by the zeroth law. The temperature of a state is its equivalence class, the set of all states in equilibrium with it.

**Problem.** There is a quantity, temperature, that is equal for two systems exactly when they are in thermal equilibrium.

**How the definition helps.** Two states lie in the same class exactly when they are in equilibrium, so any label for the classes is such a quantity. A thermometer reads the class of the system it touches. The law gives no order of hotness and no numerical scale.

**Wikipedia:** [Zeroth law of thermodynamics](https://en.wikipedia.org/wiki/Zeroth_law_of_thermodynamics). It says: “It makes the relation of thermal equilibrium between systems an equivalence relation, which can represent equality of some quantity associated with each system.”

**Sources:**

- [Carathéodory, C. (1909). Untersuchungen über die Grundlagen der Thermodynamik. Mathematische Annalen 67, 355–386.](https://doi.org/10.1007/BF01450409)

### Enthalpy gives heat at constant pressure

**Remember:** Enthalpy is energy plus the room the system pushed open.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv physics.class-ph. Level 1: early undergraduate.

**Definition.** Enthalpy H = U + PV is internal energy plus pressure times volume. At constant pressure its change ΔU + PΔV is the energy change plus the expansion work done (our own), so it counts all the heat a closed system takes in.

**Problem.** Consider a closed system whose only work is expansion against a constant pressure equal to the system pressure. The heat supplied equals its enthalpy increase when bulk kinetic and potential energies stay fixed.

**How the definition helps.** At constant pressure the expansion work is PΔV, which is exactly the change in PV (our own calculation). The first law, Q = ΔU + PΔV, then gives Q = ΔH.

**Wikipedia:** [Enthalpy](https://en.wikipedia.org/wiki/Enthalpy). It says: “at constant pressure the enthalpy change equals the energy exchanged with the environment by heat.”

**Sources:** none listed. No primary source with a working link was found.

### Thermal resistances add in series

**Remember:** Resistance is temperature drop per unit heat flow, like ohms.

*True by definition.* MSC 80A19 (Diffusive and convective heat and mass transfer, heat flow). arXiv physics.class-ph. Level 1: early undergraduate.

**Definition.** For nonzero steady heat flow, a layer’s thermal resistance is its temperature drop divided by the heat flow rate, as voltage over current for an electrical resistor. For a uniform flat layer of thickness L, area A and constant conductivity k, it is L/(kA), a value also used at zero flow.

**Problem.** In steady one-dimensional conduction with no internal heat sources, the total resistance of layers in series equals the sum of their resistances. Perfect contact introduces no extra resistance.

**How the definition helps.** In steady flow without sources the same heat flow crosses every layer, so the temperature drops add, and dividing by the common flow adds the resistances (our own calculation). Fourier’s law gives each layer’s resistance L/(kA) (our own account).

**Wikipedia:** [Thermal conductance and resistance](https://en.wikipedia.org/wiki/Thermal_conductance_and_resistance). It says: “When resistances are in series, the total resistance is the sum of the resistances:”

**Sources:** none listed. No primary source with a working link was found.

### Bit reset costs heat

**Remember:** Forgetting a fair bit dumps k ln 2 of entropy as heat.

*Rules out counterexamples.* MSC 80A05 (Foundations of thermodynamics and heat transfer). arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** A perfect reset sends both values of a bit to one fixed value, so it removes one bit of uncertainty, k ln 2 of entropy (our own). Assume the two values start equally likely, with equal internal entropy and no correlations with other systems, and that the final state has that same internal entropy.

**Problem.** Let the controller return to its initial state, with a single bath at absolute temperature T taking up all exported entropy. Resetting the bit sends at least kT ln 2 of heat to the bath, where k is Boltzmann’s constant.

**How the definition helps.** The second law makes the bath gain at least the k ln 2 that the memory loses, and heat Q at temperature T carries entropy Q/T, so Q ≥ kT ln 2 (our own entropy balance). Requiring the bath to take all exported entropy excludes a reversible swap into a blank bit, which would keep the information instead.

**Wikipedia:** [Landauer's principle](https://en.wikipedia.org/wiki/Landauer%27s_principle). It says: “erasure resets a memory that may be in either of two distinguishable physical states into a fixed state”

**Sources:**

- [Rolf Landauer, Irreversibility and Heat Generation in the Computing Process](https://doi.org/10.1147/rd.53.0183)

### Energy potentials yield Maxwell relations

**Remember:** Choose the right potential, then swap the order of differentiation.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** A thermodynamic potential, for a simple compressible system of fixed composition, is an energy function whose first partial derivatives in its own variables are measurable: U(S,V) has derivatives T and −P, and F = U − TS has dF = −S dT − P dV. H = U + PV and G = H − TS do the same for the variable pairs (S,P) and (T,P).

**Problem.** If a potential has continuous second derivatives in its own variables, it gives one Maxwell relation between measurable derivatives. For F(T,V), this says that (∂S/∂V) at fixed T equals (∂P/∂T) at fixed V.

**How the definition helps.** Mixed second partial derivatives agree, and for a potential they are derivatives of two measurable quantities. For F, the mixed derivative ∂²F/∂V∂T is −(∂S/∂V) one way and −(∂P/∂T) the other (our own example).

**Wikipedia:** [Maxwell relations](https://en.wikipedia.org/wiki/Maxwell_relations). It says: “the order of differentiation of an analytic function of two variables is irrelevant”

**Sources:** none listed. No primary source with a working link was found.

### Enthalpy survives insulated throttling

**Remember:** Enthalpy is the energy a fluid carries, including its push.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Specific enthalpy h = u + Pv is internal energy per unit mass plus the flow work Pv, the work needed to push a unit mass into or out of a region at pressure P. So h is the energy a unit mass carries through a valve, counting the push from the fluid behind it (our own balance).

**Problem.** In the steady, insulated valve model with unchanged kinetic and gravitational energy and only pressure work, specific enthalpy is the same on both sides. An ideal gas of fixed composition with positive heat capacity therefore also keeps its temperature.

**How the definition helps.** Steady insulated flow carries out the same energy it carries in, flow work included, and that energy per unit mass is h (our own balance). For an ideal gas, h depends only on temperature and increases with it, so the temperature is unchanged too.

**Wikipedia:** [Joule–Thomson effect](https://en.wikipedia.org/wiki/Joule%E2%80%93Thomson_effect). It says: “In a Joule–Thomson expansion the enthalpy remains constant.”

**Sources:** none listed. No primary source with a working link was found.

### Gibbs energy tracks total entropy

**Remember:** At fixed temperature and pressure, rising total entropy means falling Gibbs energy.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** Gibbs energy G = U + PV − TS is defined for a closed system at the same temperature T and pressure P as its surroundings. When heat comes from a reservoir at T and the only work is expansion at P, −ΔG/T is exactly the total entropy change of system and surroundings (our own).

**Problem.** Suppose the system exchanges heat with one temperature reservoir and does only expansion work against the fixed external pressure. Gibbs energy cannot increase in a spontaneous change between these states.

**How the definition helps.** The reservoir loses the heat ΔU + PΔV that the system gains, so the total entropy change is ΔS − (ΔU + PΔV)/T = −ΔG/T (our own calculation). The second law, that total entropy never decreases, then gives ΔG ≤ 0.

**Wikipedia:** [Gibbs free energy](https://en.wikipedia.org/wiki/Gibbs_free_energy). It says: “The equation can be also seen from the perspective of the system taken together with its surroundings”

**Sources:** none listed. No primary source with a working link was found.

### Grand potential gives bulk pressure

**Remember:** Strip temperature and particle terms from energy; only pressure-volume remains.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** For one species in equilibrium, the grand potential Ω = U − TS − μN subtracts from internal energy U the terms TS and μN of its Euler form. Here T is temperature, S entropy, μ chemical potential and N particle number.

**Problem.** Suppose internal energy U is differentiable and scales linearly when entropy, volume and particle number all scale together. For this homogeneous bulk system, Ω = −PV, where P is pressure.

**How the definition helps.** Euler’s theorem for functions that scale linearly gives U = TS − PV + μN, and subtracting TS and μN leaves −PV (our own). The scaling assumption ignores surface and other finite-size effects (our own).

**nLab:** [Legendre transformation](https://ncatlab.org/nlab/show/Legendre+transformation). It says: “Some of the standard choices are enthalpy H, Helmholtz free energy F, Gibbs free energy G, internal energy U, etc.”

**Wikipedia:** [Grand potential](https://en.wikipedia.org/wiki/Grand_potential). It says: “all extensive quantities (particle number, energy, entropy, potentials, ...) must grow linearly with volume”

**Sources:** none listed. No primary source with a working link was found.

### Helmholtz energy bounds work

**Remember:** The decrease in Helmholtz energy bounds the work the system can deliver.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** For a closed system exchanging heat with one bath at temperature T, Helmholtz energy F = U − TS is internal energy U minus T times entropy S, taken at equilibrium states at T. The term TS reflects the bound TΔS that the second law puts on heat drawn from the bath (our own).

**Problem.** Between equilibrium states of a closed system in one heat bath at fixed temperature, delivered work is at most −ΔF. A reversible path, when available under the same constraints, achieves the bound.

**How the definition helps.** Energy conservation gives delivered work Q − ΔU, where Q is heat input, and the second law for system and bath gives Q ≤ TΔS (our own calculation). So the work is at most TΔS − ΔU = −ΔF, with equality on a reversible path (our own derivation).

**Wikipedia:** [Helmholtz free energy](https://en.wikipedia.org/wiki/Helmholtz_free_energy). It says: “the total amount of work that can be extracted in an isothermal process is limited by the free-energy decrease”

**Sources:** none listed. No primary source with a working link was found.

### Homogeneity of the energy turns Euler's theorem into the Gibbs–Duhem equation

**Remember:** Scale the whole system, and its intensive variables lose one freedom.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics), 82B30. arXiv cond-mat.stat-mech, math-ph. Level 2: later undergraduate.

**Definition.** Internal energy U(S,V,N) is homogeneous of degree one if scaling the whole system scales its energy: U(λS,λV,λN) = λU(S,V,N) for every λ &gt; 0 and every admissible state. Here S is entropy, V volume and N the vector of particle numbers.

**Problem.** For a homogeneous equilibrium system with twice differentiable internal energy, the intensive variables satisfy S dT − V dP + ∑ᵢ Nᵢ dμᵢ = 0. Temperature T, pressure P and chemical potentials μᵢ therefore cannot all vary independently.

**How the definition helps.** Euler’s theorem turns homogeneity into U = TS − PV + ∑ᵢ μᵢNᵢ. Subtracting dU = T dS − P dV + ∑ᵢ μᵢ dNᵢ from its differential leaves S dT − V dP + ∑ᵢ Nᵢ dμᵢ = 0.

**Wikipedia:** [Gibbs–Duhem equation](https://en.wikipedia.org/wiki/Gibbs%E2%80%93Duhem_equation). It says: “The Gibbs−Duhem equation applies to homogeneous thermodynamic systems. It does not apply to inhomogeneous systems such as small thermodynamic systems”

**Sources:** none listed. No primary source with a working link was found.

### Measuring hotness by β = 1/kT puts negative temperatures above infinite ones

**Remember:** Coldness is entropy gained per energy; heat flows toward the colder.

*Makes the theorem clean to state or prove.* MSC 80A10 (Classical and relativistic thermodynamics), 82B30. arXiv cond-mat.stat-mech, math-ph. Level 2: later undergraduate.

**Definition.** Coldness β = (1/k)∂S/∂E is the entropy a system gains per unit of energy it absorbs, with volume, particle numbers and other external parameters fixed. Here S is entropy, E energy and k Boltzmann’s constant, and β = 1/(kT) wherever temperature T is finite and nonzero.

**Problem.** For two internally equilibrated systems with unequal β, coupled weakly so their entropies add and exchanging only heat, the entropy-increasing transfer goes from smaller β to larger β. So a negative-temperature system is hotter than any positive-temperature system in this sense.

**How the definition helps.** Moving energy dE from system 1 to system 2 changes total entropy by k(β₂ − β₁)dE, which is positive exactly when β₂ &gt; β₁ (our own derivation). Every negative β lies below every positive β, with β = 0 at infinite temperature, so there is no jump from +∞ to −∞.

**Wikipedia:** [Negative temperature](https://en.wikipedia.org/wiki/Negative_temperature). It says: “Because it avoids the abrupt jump from +∞ to −∞, β is considered more natural than T.”

**Sources:**

- [N. F. Ramsey, Thermodynamics and Statistical Mechanics at Negative Absolute Temperatures, Physical Review 103 (1956), 20–28](https://doi.org/10.1103/PhysRev.103.20)
- [E. M. Purcell and R. V. Pound, A nuclear spin system at negative temperature, Physical Review 81 (1951), 279–280](https://doi.org/10.1103/PhysRev.81.279)

### Reduced Gibbs energy reveals enthalpy

**Remember:** Divide Gibbs energy by temperature, and its slope reads off enthalpy.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Reduced Gibbs energy is G/T, the Gibbs energy divided by positive absolute temperature T. Since G = H − TS, with enthalpy H and entropy S, it equals H/T − S.

**Problem.** At fixed pressure and composition, the temperature derivative of G/T is −H/T² in a smooth equilibrium phase.

**How the definition helps.** By the quotient rule, d(G/T)/dT = (T dG/dT − G)/T², and dG/dT = −S at fixed pressure and composition (our own calculation). The numerator is −TS − G = −H, so the entropy terms cancel and the derivative is −H/T².

**Wikipedia:** [Gibbs–Helmholtz equation](https://en.wikipedia.org/wiki/Gibbs%E2%80%93Helmholtz_equation). It says: “The Gibbs–Helmholtz equation can be derived by this second master equation”

**Sources:** none listed. No primary source with a working link was found.

### Restricting the third law to perfect crystals excludes residual entropy

**Remember:** One ground state means zero entropy at zero temperature.

*Rules out counterexamples.* MSC 80A10 (Classical and relativistic thermodynamics), 82B30. arXiv cond-mat.stat-mech, math-ph. Level 2: later undergraduate.

**Definition.** A perfect crystal, for the third law, is an ordered, defect-free lattice with a nondegenerate ground state, meaning exactly one quantum state has the lowest energy. As temperature approaches zero it settles into only that one state, so its entropy tends to k ln 1 = 0 (our own).

**Problem.** For a pure perfect crystal in equilibrium with a unique ground state and a gap to excitations, entropy tends to zero as temperature approaches zero. Glasses and crystals with frozen disorder retain residual entropy when several configurations retain nonzero limiting probabilities.

**How the definition helps.** As temperature falls, equilibrium occupation concentrates on the unique ground state, helped by the gap to excitations, so entropy tends to zero (our own argument). Frozen disorder keeps several configurations with nonzero probability, as in Pauling’s count of hydrogen arrangements in ice.

**Wikipedia:** [Third law of thermodynamics](https://en.wikipedia.org/wiki/Third_law_of_thermodynamics). It says: “Some crystals form defects which cause a residual entropy. This residual entropy disappears when the kinetic barriers to transitioning to one ground state are overcome.”

**Sources:**

- [L. Pauling, The Structure and Entropy of Ice and of Other Crystals with Some Randomness of Atomic Arrangement, Journal of the American Chemical Society 57 (1935), 2680–2684](https://doi.org/10.1021/ja01315a102)

### A logarithmic mean gives heat flow

**Remember:** The log mean is the true average of an exponentially changing gap.

*Makes the theorem clean to state or prove.* MSC 80A19 (Diffusive and convective heat and mass transfer, heat flow). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** The logarithmic mean of the positive end temperature gaps a and b of a heat exchanger is (a − b)/ln(a/b), or a when a = b. It is the exact average of a gap that changes exponentially along the exchanger (our own).

**Problem.** Take steady parallel flow or counterflow, with no heat loss or conduction along the streams and constant transfer coefficient and stream heat capacity rates. Then the heat transfer rate equals the coefficient times the exchange area times the logarithmic mean.

**How the definition helps.** The stream energy balances make the gap change exponentially with exchanged area, and the heat rate is the coefficient times the integral of the gap over area (our own derivation). The logarithmic mean is exactly the area average of that exponential, with equal gaps as the limit.

**Wikipedia:** [Logarithmic mean temperature difference](https://en.wikipedia.org/wiki/Logarithmic_mean_temperature_difference). It says: “When the two temperature differences are equal, this formula does not directly resolve, so the LMTD is conventionally taken to equal its limit value”

**Sources:** none listed. No primary source with a working link was found.

### Effusivity weights contact temperature

**Remember:** The material with higher effusivity pulls the contact temperature closer to its own.

*Makes the theorem clean to state or prove.* MSC 80A19 (Diffusive and convective heat and mass transfer, heat flow). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Thermal effusivity e = √(kc), with conductivity k and heat capacity per unit volume c, measures how readily a material takes in or gives out heat at its surface. After a sudden surface temperature change ΔT, a half-space carries heat flux eΔT/√(πt) (our own).

**Problem.** Consider two homogeneous half-spaces with uniform initial temperatures and constant material properties in perfect planar contact, exchanging energy only by heat conduction. Their interface temperature stays constant at the mean of their initial temperatures weighted by their respective effusivities.

**How the definition helps.** The heat equation gives each side a flux equal to its effusivity times its temperature drop divided by √(πt) (our own derivation). Matching the two fluxes cancels √(πt), so the contact temperature is the effusivity-weighted mean.

**Wikipedia:** [Thermal effusivity](https://en.wikipedia.org/wiki/Thermal_effusivity). It says: “the temperature at the contact surface Tₘ will be a weighted mean based on their relative effusivities.”

**Sources:** none listed. No primary source with a working link was found.

### Area weighting makes view factors reciprocal

**Remember:** Times area, the view factor is a symmetric integral over point pairs.

*True by definition.* MSC 80A21 (Radiative heat transfer). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** The view factor from surface 1 to surface 2 is the fraction of power emitted diffusely by surface 1, equally per unit area and with cosine-law intensity, that reaches surface 2 directly through transparent space. Times the emitting area, it is a double integral over mutually visible point pairs of cos θ₁ cos θ₂/(πr²), which treats the two points alike (our own calculation).

**Problem.** For two diffusely emitting surfaces, each view factor times its emitting area is unchanged when the surfaces swap roles.

**How the definition helps.** The kernel cos θ₁ cos θ₂/(πr²) is symmetric in the two points, so swapping the surfaces leaves area times view factor unchanged (our own proof). The physical step derives this kernel from diffuse emission and straight rays.

**Wikipedia:** [View factor](https://en.wikipedia.org/wiki/View_factor). It says: “Aᵢ Fᵢ→ⱼ = Aⱼ Fⱼ→ᵢ”

**Sources:** none listed. No primary source with a working link was found.

### Radiosity linearizes enclosure radiation

**Remember:** Track all outgoing radiation, and each reflection reuses the same unknown.

*Makes the theorem clean to state or prove.* MSC 80A21 (Radiative heat transfer). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Radiosity is all radiant power leaving a surface per unit area, emitted plus reflected. A diffuse surface sends out radiation equally bright in every direction, whatever direction the incoming radiation came from. So what arrives at each surface is a weighted sum of all radiosities, and radiosity is the only unknown needed (our own).

**Problem.** Consider an enclosure of opaque surfaces at known temperatures in a transparent medium, each emitting and reflecting diffusely with wavelength-independent properties and uniform radiosity. Then the unknown radiosities satisfy a linear system.

**How the definition helps.** Each surface receives a sum of radiosities weighted by view factors, the fractions of power leaving each surface that reach it (our own explanation). Its radiosity is its emission plus a fixed fraction of that sum, so each equation is linear (our own).

**Wikipedia:** [Radiosity (radiometry)](https://en.wikipedia.org/wiki/Radiosity_%28radiometry%29). It says: “this summation for each surface will generate N linear equations with N unknown radiosities”

**Sources:** none listed. No primary source with a working link was found.

### Gibbs energy gives coexistence slopes

**Remember:** Along coexistence, equal Gibbs energies change at the same rate.

*True by definition.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv cond-mat.stat-mech. Level 2: later undergraduate.

**Definition.** The molar Gibbs energy g = u + Pv − Ts of a pure substance is a function of temperature T and pressure P, with dg = v dP − s dT, where u, v and s are per mole. Two phases coexist when their molar Gibbs energies are equal (our own account).

**Problem.** Suppose two phases coexist along a smooth pressure curve P(T). Wherever their molar volumes differ, its slope is Δs/Δv, with both differences taken in the same phase order.

**How the definition helps.** Equal Gibbs energies change at the same rate along the curve, so v₁ dP − s₁ dT = v₂ dP − s₂ dT (our own argument). Rearranging gives Δv dP = Δs dT (our own calculation).

**Wikipedia:** [Clausius–Clapeyron relation](https://en.wikipedia.org/wiki/Clausius%E2%80%93Clapeyron_relation). It says: “Their chemical potentials are related by μα = μβ.”

**Sources:** none listed. No primary source with a working link was found.

### Energy change minus work defines heat

**Remember:** Heat is whatever energy change work does not explain.

*True by definition. Confidence: medium.* MSC 80A05 (Foundations of thermodynamics and heat transfer), 80A10. arXiv physics.class-ph. Level 3: graduate.

**Definition.** Heat into a closed body at rest is the energy change that work does not explain: Q = ΔU − W, with W the work done on it in the actual process. The internal energy change ΔU between equilibrium states is fixed by adiabatic work, which is the same for every adiabatic process between them.

**Problem.** For every such process, the first law ΔU = Q + W holds without taking heat as a primitive quantity.

**How the definition helps.** Rearranging the definition gives ΔU = Q + W. The physical input is that all adiabatic processes between the same states take the same work, so ΔU is well defined (our own reading).

**Wikipedia:** [Heat](https://en.wikipedia.org/wiki/Heat). It says: “Although Carathéodory himself did not state such a definition, following his work it is customary in theoretical studies to define heat”

**Sources:**

- [Carathéodory, C. (1909). Untersuchungen über die Grundlagen der Thermodynamik. Mathematische Annalen 67, 355–386.](https://doi.org/10.1007/BF01450409)

### Entropy inversion preserves stability

**Remember:** The same stability test survives when energy and entropy trade places.

*Makes the theorem clean to state or prove.* MSC 80A05 (Foundations of thermodynamics and heat transfer). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** When equilibrium entropy S(E,x) increases strictly with energy E, invert it to write energy as a function E(S,x) of entropy and the other variables x. The graph of this function is the entropy graph with the roles of energy and entropy swapped (our own).

**Problem.** Suppose S is continuously differentiable and concave on an open convex domain, with positive energy derivative. Its inverse energy function is convex on every convex subset of its domain.

**How the definition helps.** Take a chord between two points of the graph; concavity puts the entropy graph above it (our own proof). Because entropy increases with energy, reaching the chord’s entropy needs at most the chord’s energy, which is convexity of the energy function (our own argument).

**Paper or page:** [A note on relations between convexity and concavity of thermodynamic functions](https://arxiv.org/abs/2510.24440v1). It says: “If ϕᵤ₁(u)&gt;0 for all u∈D, then we can use the same transformation but the properties are switched,”

**Sources:**

- [Mária Lukáčová-Medvid’ová, Ferdinand Thein, Gerald Warnecke and Yuhuan Yuan, A note on relations between convexity and concavity of thermodynamic functions](https://arxiv.org/abs/2510.24440v1)

### Exergy measures lost useful work

**Remember:** Each unit of entropy generated costs T₀ units of useful work.

*True by definition.* MSC 80A10 (Classical and relativistic thermodynamics). arXiv physics.class-ph. Level 3: graduate.

**Definition.** For a closed system of fixed composition at rest, with surroundings at temperature T₀ and pressure P₀, exergy is U + P₀V − T₀S minus its value at equilibrium with the surroundings. Here U, V and S are internal energy, volume and entropy. The term P₀V accounts for work against the atmosphere, and T₀S for heat exchanged with it (our own).

**Problem.** When heat exchange is only with the environment at T₀, the exergy drop equals the useful work delivered plus T₀ times the entropy generated. Useful work excludes the work against ambient pressure.

**How the definition helps.** The energy balance gives useful work −ΔU − P₀ΔV + Q, and the entropy balance gives Q = T₀(ΔS − S<sub>gen</sub>) for heat from the environment (our own calculation). Combining them, the exergy drop is useful work plus T₀S<sub>gen</sub>, and the second law makes S<sub>gen</sub> ≥ 0.

**Wikipedia:** [Exergy](https://en.wikipedia.org/wiki/Exergy). It says: “exergy is always destroyed when a process is non-ideal or irreversible”

**Sources:**

- [Joaquim Anacleto, Lost work and exergy: two views of the same concept](https://doi.org/10.1088/1361-6404/ad2101)

### Entropy forces give transport positivity

**Remember:** Use the entropy gradient so production becomes a quadratic form.

*True by definition.* MSC 80A17 (Thermodynamics of continua). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** Pair each flux, the amount of a conserved quantity crossing unit area per unit time, with its force, the gradient of the derivative of entropy density with respect to that quantity’s density. With these pairs, entropy production is the sum of fluxes times forces; for energy, the force is the gradient of 1/T.

**Problem.** Near equilibrium, suppose fluxes depend linearly on independently variable forces through a matrix L. The second law requires that the symmetric part of L have a nonnegative quadratic form.

**How the definition helps.** With linear fluxes J = LX, entropy production is the quadratic form XᵀLX, which the second law makes nonnegative for every choice of forces (our own explanation). The antisymmetric part of L contributes zero, so the condition falls on the symmetric part (our own).

**Wikipedia:** [Onsager reciprocal relations](https://en.wikipedia.org/wiki/Onsager_reciprocal_relations). It says: “since the entropy production must be non-negative, the Onsager matrix of phenomenological coefficients L₍αβ₎ is a positive semi-definite matrix.”

**Sources:**

- [Lars Onsager, Reciprocal Relations in Irreversible Processes. I.](https://doi.org/10.1103/physrev.37.405)

### A common tangent gives equal areas

**Remember:** A straight coexistence segment cancels the two pressure areas.

*True by definition.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** At fixed temperature, replace the molar Helmholtz free energy f(v) by the largest convex function below its graph, which allows mixtures of phases. In a coexistence interval this function is a straight line touching the graph at the two pure phases, so the free energy changes linearly there.

**Problem.** If the supporting line touches two smooth points, its negative slope is the coexistence pressure. The signed areas between the original pressure curve and this pressure cancel on that interval.

**How the definition helps.** Along the line, the free energy difference is minus the coexistence pressure times the volume change, and it is also minus the integral of the pressure curve, since pressure is minus the volume derivative (our own proof). Equating these gives zero signed area (our own). The straight line is justified by mixing bulk phases with negligible interface energy (our own).

**Wikipedia:** [Maxwell construction](https://en.wikipedia.org/wiki/Maxwell_construction). It says: “This line is the one for which the two areas, I and II, shown in the figure, are equal.”

**Sources:** none listed. No primary source with a working link was found.

### Chemical potential drives phase separation

**Remember:** Let concentration flow down the derivative of its free energy.

*True by definition.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** The chemical potential μ of a periodic concentration c is the derivative of the free energy E(c) = ∫\[f(c) + κ\|∇c\|²/2\] dV, with differentiable f and constant κ &gt; 0: changing c by a small periodic h changes E by ∫μh dV to first order. Integration by parts gives μ = f′(c) − κΔc.

**Problem.** Suppose concentration changes only by flow with flux −M∇μ, where M is a nonnegative coefficient measuring mobility. For a smooth solution with periodic boundaries, E cannot increase.

**How the definition helps.** The rate of change of E is ∫μ ∂ₜc dV, and the flux law with periodic boundaries turns this into −∫M\|∇μ\|² dV, which is at most zero (our own calculation). So the flow moves concentration downhill in free energy.

**Wikipedia:** [Cahn–Hilliard equation](https://en.wikipedia.org/wiki/Cahn%E2%80%93Hilliard_equation). It says: “The proof relies essentially on the existence of a Lyapunov functional.”

**Sources:**

- [John W. Cahn and John E. Hilliard, Free Energy of a Nonuniform System. I. Interfacial Free Energy](https://doi.org/10.1063/1.1744102)

### Independent components fix phase counts

**Remember:** Count independent chemical amounts, not names on the reaction list.

*Rules out counterexamples.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv cond-mat.stat-mech. Level 3: graduate.

**Definition.** The number of components C is the fewest independent chemical constituents that can express every phase’s composition. With S species, R independent reactions and no other composition constraints, C = S − R.

**Problem.** At regular equilibrium with temperature and pressure as the only external controls, F = C − P + 2, where P counts phases. F counts the freely variable properties that do not depend on system size, such as temperature or composition.

**How the definition helps.** There are P(C − 1) composition variables and two controls, against C(P − 1) equilibrium conditions, which gives F = C − P + 2 (our own count). For calcium carbonate, calcium oxide and carbon dioxide, one reaction leaves two components and one freedom; counting three species would wrongly give two.

**Wikipedia:** [Phase rule](https://en.wikipedia.org/wiki/Phase_rule). It says: “the minimum number of independent species necessary to define the composition of all phases of the system.”

**Sources:** none listed. No primary source with a working link was found.

### Stored latent heat gives the interface law

**Remember:** Count the heat of melting even when the temperature stays fixed.

*True by definition.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv physics.class-ph. Level 3: graduate.

**Definition.** Use enthalpy per unit volume as the conserved energy density, with solid and liquid values at the melting temperature differing by the latent heat L per unit volume. Then melting a region costs L per unit volume even though its temperature does not change (our own).

**Problem.** For smooth phases and a smooth melting front at the melting temperature, weak energy conservation gives the Stefan condition. The heat flux jump supplies the latent heat required to move the front.

**How the definition helps.** Energy conservation across a thin layer around the front says the net heat flux into the front equals L times the front’s normal speed (our own derivation). That is the Stefan condition, so no separate boundary law is needed (our own).

**Wikipedia:** [Stefan problem](https://en.wikipedia.org/wiki/Stefan_problem). It says: “the discontinuity of heat flux at the boundary must be accounted for by the rate of latent heat release”

**Sources:** none listed. No primary source with a working link was found.

### Heat polynomials satisfy diffusion automatically

**Remember:** Expand a solution of the heat equation; each coefficient is one too.

*True by definition.* MSC 80A23 (Inverse problems in thermodynamics and heat transfer). arXiv math.NA, math-ph. Level 3: graduate.

**Definition.** The nth heat polynomial is n factorial times the coefficient of zⁿ in exp(zx + z²t), a function whose one time derivative equals its second space derivative.

**Problem.** Every finite linear combination of heat polynomials solves the heat equation ∂ₜu = ∂ₓ²u.

**How the definition helps.** Both ∂ₜ and ∂ₓ² multiply exp(zx + z²t) by z², so it solves the heat equation, and comparing coefficients of zⁿ gives the same for each heat polynomial (our own calculation). Linearity extends this to every finite linear combination.

**Paper or page:** [A collocation heat polynomials method for one-dimensional inverse Stefan problems](https://arxiv.org/abs/2410.19397v1). It says: “This method constructs an approximate solution as a linear combination of heat polynomials, which satisfies the heat equation, with the coefficients determined using the collocation method.”

**Sources:**

- [Orazbek Narbek, Samat A. Kassabek, Targyn Nauryz, A collocation heat polynomials method for one-dimensional inverse Stefan problems](https://arxiv.org/abs/2410.19397v1)
- [P. C. Rosenbloom and D. V. Widder, Expansions in terms of heat polynomials and associated functions](https://doi.org/10.1090/s0002-9947-1959-0107118-2)

### Adiabatic comparisons calibrate entropy

**Remember:** Calibrate entropy with fractions of two ordered reference states.

*Makes the theorem clean to state or prove.* MSC 80A05 (Foundations of thermodynamics and heat transfer). arXiv cond-mat.stat-mech. Level 4: research.

**Definition.** Write X ≺ Y when X can reach Y adiabatically, by a process whose only external change is a weight displacement, possibly zero. Fix references A ≺ B where B cannot return to A, and for X between them let S(X) be the least upper bound of fractions λ such that (1 − λ) of A plus λ of B can reach X.

**Problem.** Assume the Lieb–Yngvason axioms for accessible processes and comparability of states in the relevant scaled and combined systems. On the calibrated interval, X ≺ Y exactly when S(X) ≤ S(Y).

**How the definition helps.** Entropy measures how much of the higher reference a state can be made from, so accessibility becomes a comparison of numbers (our own explanation). If X ≺ Y, any mixture that reaches X also reaches Y, so S(X) ≤ S(Y). The converse needs the axioms for splitting, scaling, combining and comparability.

**Wikipedia:** [Adiabatic accessibility](https://en.wikipedia.org/wiki/Adiabatic_accessibility). It says: “The entropy has the property that S(X) ≤ S(Y) if and only if X ≺ Y”

**Sources:**

- [Elliott H. Lieb and Jakob Yngvason, The physics and mathematics of the second law of thermodynamics](https://doi.org/10.1016/s0370-1573(98)00082-9)

### Freezing time smooths front jumps

**Remember:** A jump in position becomes a flat interval in freezing time.

*Makes the theorem clean to state or prove.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv math.AP, math.PR. Level 4: research.

**Definition.** Describe the freezing front by the freezing time s(x), the first time the front reaches or passes position x, instead of by the front position as a function of time. A jump of the front becomes a flat stretch of positions with the same freezing time, so s stays an ordinary function.

**Problem.** For the paper’s physical front, with initial profile a probability density on the nonnegative half-line, freezing time has a continuous derivative between the initial and limiting front positions. It has derivatives of all orders outside a relatively closed countable set.

**How the definition helps.** Positions swallowed in a jump get the same freezing time, so jumps no longer break the description (our own explanation). The hard part is regularity at the ends of flat stretches and other singular points (our own). The proof uses an obstacle problem, an equation with a nonnegativity constraint on integrated temperature (our own).

**Paper or page:** [Free boundary regularity and well-posedness of physical solutions to the supercooled Stefan problem](https://arxiv.org/abs/2506.18741v1). It says: “(Λ₀, α) ∖ R is countable, with s ∈ C∞(R).”

**Sources:**

- [Sebastian Munoz, Free boundary regularity and well-posedness of physical solutions to the supercooled Stefan problem](https://arxiv.org/abs/2506.18741v1)

### Integrated heat reveals melting regions

**Remember:** Time integration turns a moving melted region into a positivity set.

*Makes the theorem clean to state or prove.* MSC 80A22 (Stefan problems, phase changes, etc.). arXiv math.AP, math.PR. Level 4: research.

**Definition.** For the paper’s melting solution, let w(t,x) be the temperature above melting at position x, integrated from time zero to t. Then w is positive exactly where melting has happened by time t, so the moving melted region becomes the set where w &gt; 0.

**Problem.** Assume bounded, compactly supported initial enthalpy μ above one on its support, unit latent heat, and the fractional Laplacian D as the model’s spatial heat operator. Then min(∂ₜw + Dw + 1 − μ, w) = 0, with w initially zero.

**How the definition helps.** The equation says that w ≥ 0, that the integrated heat balance ∂ₜw + Dw + 1 − μ is at least zero, and that it is zero where w &gt; 0 (our own explanation). So the moving boundary needs no separate tracking. The authors prove this equation for the evolution they construct.

**Paper or page:** [The Nonlocal Stefan Problem via a Martingale Transport](https://arxiv.org/abs/2310.04640v3). It says: “w(t,x) ≔ ∫₀ᵗ η(s,x) ds solves the parabolic obstacle problem”

**Sources:**

- [Raymond Chu, Inwon Kim, Young-Heon Kim, Kyeongsik Nam, The Nonlocal Stefan Problem via a Martingale Transport](https://arxiv.org/abs/2310.04640v3)
