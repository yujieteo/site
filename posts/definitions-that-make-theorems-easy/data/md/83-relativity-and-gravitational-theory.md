### Einstein synchronisation makes equal one-way light speeds a convention

**Remember:** Light takes equal time out and back because we set the clocks that way.

*True by definition.* MSC 83A05 (Special relativity). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Clock 1 sends a light signal at time τ₁ to clock 2. Clock 2 reflects the signal back, and clock 1 receives it at time τ₂. Set clock 2 so that it shows (τ₁ + τ₂)/2 at the reflection. In words, the reflection happens halfway between sending and receiving.

**Problem.** With Einstein synchronisation of distant clocks, the one-way speed of light is the same in both directions.

**How the definition helps.** The rule builds the claim into the clocks, so there is nothing left to prove. A one-way speed cannot be measured before distant clocks are synchronised. Einstein's rule synchronises them by assuming that the two one-way times are equal, so the equality is a convention, as Poincaré noted. Some parts are not conventional: the rule is consistent only under physical conditions such as Reichenbach's round-trip condition, and in rotating frames it depends on the path.

**Wikipedia:** [Einstein synchronisation](https://en.wikipedia.org/wiki/Einstein_synchronisation). It says: “Since it is meaningless to measure a one-way velocity prior to the synchronisation of distant clocks, experiments claiming a measure of the one-way speed of light can often be reinterpreted as verifying the Laue–Weyl's round-trip condition.”

**Sources:**

- [Einstein, A. (1905). Zur Elektrodynamik bewegter Körper. Annalen der Physik 322(10), 891–921.](https://doi.org/10.1002/andp.19053221004)

### Invariant mass, built from energy and momentum, is the same for everyone

**Remember:** Energy squared minus momentum squared is the same in every frame.

*True by definition.* MSC 83A05 (Special relativity). arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** The invariant mass m of a body or a system is given by m²c⁴ = E² − \|p\|²c². Here E is the total energy and p the total momentum. The older relativistic mass is E/c², which depends on the observer.

**Problem.** The invariant mass of a system is the same in all inertial frames, and it is conserved. So the invariant mass of the decay products of a particle equals the rest mass of the parent particle.

**How the definition helps.** E² − \|p\|²c² is the Minkowski square of the four-momentum, the spacetime vector (E/c, p) (our own wording). Lorentz transformations preserve it, so frame independence is built into the definition. The work moves into conservation of total four-momentum, which gives the rest mass of a parent from its decay products. Relativistic mass changes with speed, so every statement about it needs a chosen frame.

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

**How the definition helps.** The definition tanh w = v/c picks exactly the parameter in which composing boosts is addition. Boosts along one line form a one-parameter group, with Λ(w₁ + w₂) = Λ(w₁)Λ(w₂), and Einstein's velocity formula is the addition formula for tanh. The work moves to showing that boosts are hyperbolic rotations, which Minkowski explained in 1908. Additivity fails for boosts in different directions, which do not commute and produce the Thomas–Wigner rotation (our own).

**Wikipedia:** [Rapidity](https://en.wikipedia.org/wiki/Rapidity). It says: “The simplicity of this formula contrasts with the complexity of the corresponding velocity-addition formula.”

**Sources:**

- [H. Minkowski, Die Grundgleichungen für die elektromagnetischen Vorgänge in bewegten Körpern, Nachrichten von der Gesellschaft der Wissenschaften zu Göttingen (1908), 53–111](https://en.wikisource.org/wiki/Translation:The_Fundamental_Equations_for_Electromagnetic_Processes_in_Moving_Bodies)

### Spacelike separation permits order reversal

**Remember:** Only spacelike pairs can swap their order.

*True by definition.* MSC 83A05 (Special relativity), 01A60. arXiv physics.hist-ph. Level 2: later undergraduate.

**Definition.** Minkowski’s spacetime description combines time and space differences into the squared interval c²Δt² − \|Δx\|², where c is the speed of light. A negative interval defines spacelike separation.

**Problem.** Two distinct events occur in opposite time orders for some pair of future-directed inertial observers exactly when their separation is spacelike. An inertial observer moves at constant velocity.

**How the definition helps.** A negative interval means the change of frame needed to make the events simultaneous requires a speed below c. In our own proof, orient the spatial axis along the separation and call the distance x. For relative velocity v along that axis, the Lorentz transformation gives the new time difference the sign of Δt − vx/c². When x exceeds c\|Δt\|, allowed velocities on opposite sides of c²Δt/x give opposite time orders. Otherwise no allowed velocity can reverse the sign. The work lies in the Lorentz transformation law.

**Wikipedia:** [Spacetime](https://en.wikipedia.org/wiki/Spacetime). It says: “From a different reference frame, the orderings of these non-causally-related events can be reversed.”

**Sources:**

- [Hermann Minkowski, Raum und Zeit (1908 address, reprinted 1988)](https://doi.org/10.1007/978-3-322-89451-9_11)

### Horizons exclude overcharged solutions

**Remember:** Too much charge leaves no real horizon radius.

*Rules out counterexamples.* MSC 83C57 (Black holes). arXiv gr-qc, astro-ph.HE. Level 2: later undergraduate.

**Definition.** The Reissner–Nordström family describes the empty region around a spherical, nonrotating charged mass in Einstein–Maxwell theory with zero cosmological constant. A black hole must have an event horizon, the boundary beyond which light cannot escape to distant observers. Measure charge Q and positive mass M in units where the possible horizon radii solve r² − 2Mr + Q² = 0.

**Problem.** For positive M, a Reissner–Nordström black hole has \|Q\| ≤ M. At equality the two horizon radii coincide.

**How the definition helps.** Requiring a horizon rules out parameter values for which the radius equation has no real root. In our own calculation, real roots require M² ≥ Q². If charge exceeds mass in magnitude, the central singularity can send signals to distant observers. Showing that the larger root actually bounds the escape region requires the causal structure of the solution.

**Wikipedia:** [Reissner–Nordström metric](https://en.wikipedia.org/wiki/Reissner%E2%80%93Nordstr%C3%B6m_metric). It says: “have no event horizon (the term under the square root becomes negative) and would display a naked singularity.”

**Sources:** none listed. No primary source with a working link was found.

### Curvature density makes gravity coordinate invariant

**Remember:** Pull back the metric and the whole curvature density follows.

*True by definition.* MSC 83C05 (Einstein's equations (general structure, canonical formalism, Cauchy problems)). arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** Scalar curvature is the double trace of the curvature tensor. The Einstein–Hilbert action integrates this scalar using the volume measure determined by the spacetime metric. In coordinates, the volume factor is the square root of the absolute metric determinant.

**Problem.** Let a smooth map of a compact spacetime region onto itself have a smooth inverse. Pulling the metric back by this map leaves the Einstein–Hilbert action unchanged.

**How the definition helps.** Including the metric volume factor supplies exactly the Jacobian required by the change of variables formula. In our own comparison, integrating scalar curvature against bare coordinate volume misses that factor. Both curvature and metric volume transform with the metric, so the integral stays fixed. The separate derivation of the field equations varies the metric inside the region.

**nLab:** [Einstein-Hilbert action](https://ncatlab.org/nlab/show/Einstein-Hilbert+action). It says: “This functional is invariant under the action of diffeomorphisms on X”

**Sources:** none listed. No primary source with a working link was found.

### Largest Cauchy developments are unique

**Remember:** The largest solution contains every other solution from the same data.

*True by definition.* MSC 83C05 (Einstein's equations (general structure, canonical formalism, Cauchy problems)). arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** A vacuum development solves Einstein’s equations without matter and realizes the prescribed initial geometry on a Cauchy surface. Every timelike path extending as far as possible in both directions crosses this surface once. Call a development largest if each other development embeds into it preserving the metric, initial data, and time direction.

**Problem.** Given connected vacuum initial data, any two largest developments agree up to a map that preserves the spacetime metric and fixes the initial data.

**How the definition helps.** Requiring every competitor to embed gives maps in both directions immediately. Merely forbidding a larger extension would not give these maps. In our own proof, each composite fixes the initial surface pointwise and preserves its future unit normal. Its derivative therefore fixes every direction at a surface point. A map preserving the metric on a connected spacetime is determined by its value and derivative at one point. Choquet-Bruhat and Geroch prove existence.

**Paper or page:** [On the genericity of singularities in spacetimes with weakly trapped submanifolds](https://arxiv.org/abs/2406.09651v2). It says: “any other spacetime satisfying these conditions can be isometrically embedded therein.”

**Sources:**

- [Yvonne Choquet-Bruhat and Robert Geroch (1969), Global aspects of the Cauchy problem in general relativity](https://doi.org/10.1007/BF01645389)

### The Einstein tensor makes Einstein’s equations conserve stress–energy

**Remember:** A divergence-free left side forces a divergence-free right side.

*True by definition.* MSC 83C05 (Einstein's equations (general structure, canonical formalism, Cauchy problems)), 83C40. arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** Define the Einstein tensor as G = Ric − ½Rg. Here Ric measures curvature, R is its trace, and g is the spacetime metric. Einstein’s equations set G proportional to T, the tensor that measures the density and flow of energy and momentum.

**Problem.** Einstein’s equations with a nonzero constant of proportionality force T to have zero covariant divergence. This is the local conservation law for energy and momentum in curved spacetime.

**How the definition helps.** The Einstein tensor makes conservation immediate because its divergence vanishes for every spacetime metric. The work is in the contracted Bianchi identity, which says the divergence of Ric equals half the gradient of R. The trace correction subtracts exactly that gradient (our own). Using Ric alone on the left would instead force R to be constant if T were conserved (our own).

**Wikipedia:** [Einstein tensor](https://en.wikipedia.org/wiki/Einstein_tensor). It says: “The (contracted) Bianchi identities automatically ensure the covariant conservation of the stress–energy tensor in curved spacetimes:”

**Sources:** none listed. No primary source with a working link was found.

### Wave coordinates reveal Einstein’s wave operator

**Remember:** Let the coordinates solve waves to expose waves in the metric.

*Makes the theorem clean to state or prove.* MSC 83C05 (Einstein's equations (general structure, canonical formalism, Cauchy problems)), 35Q75. arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** Wave coordinates are coordinate functions that solve the source-free scalar wave equation for the spacetime metric. This condition sets the metric trace of the connection coefficients to zero. Those coefficients describe how the coordinate basis changes under parallel transport.

**Problem.** In wave coordinates, the highest derivatives in the vacuum Einstein equations form a wave operator on each metric component. The coefficients of this operator depend on the metric itself.

**How the definition helps.** Making the coordinates solve wave equations cancels the extra second derivatives that obscure the wave operator in arbitrary coordinates. In our own derivation, the extra terms differentiate the trace set to zero by the coordinate condition. Each metric component then satisfies a wave equation with lower terms involving at most first derivatives. The separate existence proof constructs such coordinates and proves that the coordinate condition persists during evolution.

**Wikipedia:** [Harmonic coordinates](https://en.wikipedia.org/wiki/Harmonic_coordinates). It says: “relative to a harmonic coordinate chart, the Ricci curvature is given by”

**Paper or page:** [On Axially Symmetric Perturbations of Kerr Black Hole Spacetimes](https://arxiv.org/abs/2507.08326v1). It says: “The linearized Einstein equations in harmonic gauge is purely a hyperbolic differential equation system”

**Sources:** none listed. No primary source with a working link was found.

### Fermi–Walker transport keeps frames orthonormal

**Remember:** Correct for acceleration without changing inner products.

*True by definition.* MSC 83C10 (Equations of motion in general relativity and gravitational theory), 83A05. arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** Fermi–Walker transport carries a vector X along an observer with velocity U and acceleration A, measured using proper time. Write g for the spacetime inner product and normalize g(U,U) = −1. The rule sets the derivative of X measured by parallel transport equal to g(A,X)U − g(U,X)A.

**Problem.** Axes that start mutually perpendicular and normalized retain their inner products under Fermi–Walker transport. A time axis initially equal to U stays equal to U.

**How the definition helps.** The acceleration correction preserves every inner product and makes the time axis follow the observer. In our own proof, the correction is antisymmetric with respect to g, so the two terms in each inner product derivative cancel. Applying the correction to U gives A because g(A,U) = 0. Thus U solves the transport equation for the time axis. Ordinary parallel transport preserves inner products but fails this second test for an accelerating observer.

**Wikipedia:** [Fermi–Walker transport](https://en.wikipedia.org/wiki/Fermi%E2%80%93Walker_transport). It says: “then the vector field X is Fermi–Walker transported along the curve.”

**Sources:** none listed. No primary source with a working link was found.

### Timelike geodesics give all test bodies the same free fall

**Remember:** The geodesic equation uses the initial position and velocity, not the mass.

*True by definition. Confidence: medium.* MSC 83C10 (Equations of motion in general relativity and gravitational theory), 53C22. arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** In general relativity, model a freely falling massive test body by a timelike geodesic, a straightest possible path for the spacetime metric. A test body is one whose own gravity and internal structure are neglected. Newtonian gravity instead treats gravity as a force on a body with separate gravitational and inertial masses.

**Problem.** Two freely falling test bodies at the same event with the same initial velocity follow the same path as long as the geodesic exists.

**How the definition helps.** The geodesic law gives identical paths because it uses the same equation and initial data for both bodies (our own). The equation for a smooth metric has a unique solution for those data (our own). The Newtonian description instead needs the ratio of gravitational mass to inertial mass to be the same for all bodies (our own). The physical work is in justifying the geodesic law as a model for test bodies (our own).

**Wikipedia:** [Geodesics in general relativity](https://en.wikipedia.org/wiki/Geodesics_in_general_relativity). It says: “Importantly, the world line of a particle free from all external, non-gravitational forces is a particular type of geodesic. In other words, a freely moving or falling particle always moves along a geodesic.”

**Sources:** none listed. No primary source with a working link was found.

### Null updates give linear metric inverses

**Remember:** Raise one index and the null update squares to zero.

*True by definition.* MSC 83C20 (Classes of solutions; algebraically special solutions, metrics with symmetries for problems in general relativity and gravitational theory), 83C57. arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** A Kerr–Schild metric adds H k ⊗ k to the flat metric η. Here H is a scalar function and k is a covector with zero squared length under the inverse of η. A general metric perturbation has no such restriction.

**Problem.** Write v for the vector corresponding to k under the flat metric. The inverse metric equals the inverse flat metric minus H v ⊗ v.

**How the definition helps.** Choosing a null update makes its square vanish after raising one index, so the inverse needs only one correction. In our own calculation, the square contains the factor k(v), which vanishes by the null condition. Multiplication then verifies the inverse directly. A general update lacks this cancellation. The difficult step in constructing a spacetime solution is finding H and k that satisfy Einstein’s equations.

**nLab:** [Kerr-Schild spacetime](https://ncatlab.org/nlab/show/Kerr-Schild+spacetime). It says: “where k is a lightlike vector field with respect to both metrics, and H is any scalar function.”

**Sources:**

- [G. C. Debney, R. P. Kerr, and A. Schild (1969), Solutions of the Einstein and Einstein-Maxwell Equations](https://doi.org/10.1063/1.1664769)

### Static symmetry excludes rotating Kerr

**Remember:** Static means steady and without twist.

*Rules out counterexamples.* MSC 83C20 (Classes of solutions; algebraically special solutions, metrics with symmetries for problems in general relativity and gravitational theory). arXiv gr-qc. Level 3: graduate.

**Definition.** A spacetime is stationary on a region if a timelike vector field there generates local maps preserving the metric. It is static if it admits such a field perpendicular to a family of hypersurfaces filling the region. A timelike field points inside the light cone.

**Problem.** A static metric admits local coordinates in which its coefficients are independent of time and all mixed time and space coefficients vanish. The rotating Kerr metric shows why stationarity alone does not suffice, even near spatial infinity.

**How the definition helps.** The perpendicular hypersurfaces give the spatial coordinates a place to start (our own construction). Choose coordinates on one such slice and transport them by the symmetry flow. The flow preserves perpendicularity, so all mixed coefficients vanish. Assessing staticity requires testing whether the perpendicular planes fit together into slices.

**Wikipedia:** [Static spacetime](https://en.wikipedia.org/wiki/Static_spacetime). It says: “Thus, the Kerr solution provides an example of a stationary spacetime that is not static”

**Sources:**

- [Kerr (1963), Gravitational Field of a Spinning Mass as an Example of Algebraically Special Metrics](https://doi.org/10.1103/physrevlett.11.237)

### Vacuum twist has a potential

**Remember:** In vacuum, twist is locally a gradient.

*Makes the theorem clean to state or prove.* MSC 83C20 (Classes of solutions; algebraically special solutions, metrics with symmetries for problems in general relativity and gravitational theory). arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** A stationary metric has a timelike vector field K whose flow preserves the metric. Pair K with the metric to obtain a one-form α. In four oriented dimensions its twist is the Hodge dual of α ∧ dα, where the metric and orientation identify three-forms with one-forms.

**Problem.** If the Ricci tensor vanishes, the twist of K is locally the differential of a real function. A single such function exists on each simply connected region.

**How the definition helps.** Expressing twist as a one-form turns the potential question into a test for a vanishing exterior derivative (our own explanation). The curvature identity for a symmetry field gives this derivative in terms of its pairing with the Ricci tensor. Hence the derivative vanishes under the hypothesis. The Poincaré lemma gives a local potential, and path integration gives a global potential on a simply connected region.

**Wikipedia:** [Stationary spacetime](https://en.wikipedia.org/wiki/Stationary_spacetime). It says: “the twist 4-vector ωμ is curl-free”

**Sources:** none listed. No primary source with a working link was found.

### Conformal rescaling extends flat spacetime to a finite diamond

**Remember:** Compact coordinates bring infinity closer without tipping the light cones.

*Makes the theorem clean to state or prove.* MSC 83C30 (Asymptotic procedures (radiation, news functions, \\(\\mathcal \\)-spaces, etc.) in general relativity and gravitational theory), 53C50. arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** A conformal diagram rescales the spacetime metric by a positive function on the interior. Choose coordinates and a rescaling so the new metric extends smoothly to the boundary. The rescaling keeps the directions of light rays unchanged.

**Problem.** In two-dimensional Minkowski spacetime, the arctangent of each light coordinate maps the whole plane onto a finite square in light coordinates. In time and space coordinates this is a diamond with null edges.

**How the definition helps.** Rescaling cancels the divergent metric factors that arise when bounded coordinates bring infinity to a finite boundary. In our own construction for flat spacetime with one spatial dimension, set U = arctan(t − x) and V = arctan(t + x). Multiply the metric by cos²(U) cos²(V) to obtain −dU dV. Its coefficients extend smoothly to the closed square. Each edge has U or V constant, so light travels along it. Finding a regular rescaling is the difficult step in other spacetimes.

**nLab:** [Penrose diagram](https://ncatlab.org/nlab/show/Penrose+diagram). It says: “which makes events at timelike/spacelike/lightlike infinity of the spacetime appear at respective boundary points of its Penrose diagram.”

**Wikipedia:** [Penrose diagram](https://en.wikipedia.org/wiki/Penrose_diagram). It says: “spacetime distances that are considered infinitely far away are compactified into finite locations in the diagram.”

**Sources:**

- [Roger Penrose (1963), Asymptotic Properties of Fields and Space-Times](https://doi.org/10.1103/PhysRevLett.10.66)

### Hawking energy ignores normal rescaling

**Remember:** One light expansion gains what the other loses.

*True by definition.* MSC 83C40 (Gravitational energy and conservation laws; groups of motions). arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** Take a smooth closed surface with positive definite induced metric in a four-dimensional spacetime. Choose two future null normals, vectors of zero squared length perpendicular to the surface, with inner product −2. Their expansions measure the fractional area change along each normal. Hawking energy depends on the surface area and the integral of the product of the expansions.

**Problem.** Hawking energy stays fixed when the null normals are multiplied by a smooth positive function and its reciprocal, respectively.

**How the definition helps.** The product formula exposes the cancellation that the formula in spatial slice coordinates hides (our own comparison). Each expansion is the trace over tangent directions of the derivative of its normal. Differentiating a scale factor adds a normal vector, whose pairing with every tangent vector vanishes. The two expansions therefore acquire reciprocal factors. The geometric work is relating this formula to the surface curvatures in a chosen spatial slice.

**Wikipedia:** [Hawking energy](https://en.wikipedia.org/wiki/Hawking_energy). It says: “measure the divergence of these families of null geodesics”

**Sources:**

- [Hawking (1968), Gravitational Radiation in an Expanding Universe](https://doi.org/10.1063/1.1664615)

### Killing fields give conserved matter currents

**Remember:** A symmetric stress tensor cancels the antisymmetric derivative of a Killing field.

*True by definition.* MSC 83C40 (Gravitational energy and conservation laws; groups of motions), 53C50. arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** A Killing field X generates a continuous symmetry of the metric, the rule for measuring spacetime intervals. Equivalently, its derivative measured by parallel transport is antisymmetric. The stress tensor T describes matter’s energy, momentum, and stresses. A current is a vector field whose flux measures flow through a surface.

**Problem.** Contracting a symmetric, divergence-free stress tensor with a Killing field gives a divergence-free current.

**How the definition helps.** The derivative form of the symmetry condition makes one term in the current’s divergence vanish immediately. In our own calculation, differentiate the product of T and X. One term vanishes because T has zero divergence. The other pairs a symmetric tensor with an antisymmetric one. The work lies in relating the derivative condition to metric symmetry and establishing the matter conservation equation.

**Wikipedia:** [Killing vector field](https://en.wikipedia.org/wiki/Killing_vector_field). It says: “we can construct the conserved quantity Jᵃ := TᵃᵇXᵦ satisfying”

**Sources:** none listed. No primary source with a working link was found.

### Komar flux ignores intervening vacuum

**Remember:** With no Ricci curvature between surfaces, the same Komar flux crosses both.

*Makes the theorem clean to state or prove.* MSC 83C40 (Gravitational energy and conservation laws; groups of motions). arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** In a stationary spacetime, a vector field generates a time symmetry of the metric. The metric turns the field into a covector, whose exterior derivative measures circulation. Its Hodge dual, the two-form measuring flux across complementary directions, is the Komar flux form in four dimensions. For a time translation normalized at infinity, its surface integral with the standard normalization gives the Komar mass.

**Problem.** Suppose two closed surfaces together bound a compact oriented three-dimensional region in four-dimensional spacetime. If the Ricci tensor vanishes throughout the region, the same stationary symmetry gives equal Komar fluxes with consistent orientations.

**How the definition helps.** Defining mass by a surface flux makes it possible to compare enclosing surfaces without a local gravitational mass density. The identity for a metric symmetry expresses the exterior derivative of the flux form in terms of the Ricci tensor. This tensor measures a trace of spacetime curvature and vanishes in the stated region. Stokes’ theorem then gives zero flux difference. In our own interpretation, the symmetry identity carries the geometric work.

**Wikipedia:** [Komar mass](https://en.wikipedia.org/wiki/Komar_mass). It says: “This demonstrates that enclosing any amount of vacuum will not change our volume integral.”

**Sources:**

- [Arthur Komar (1959), Covariant Conservation Laws in General Relativity](https://doi.org/10.1103/PhysRev.113.934)

### Advanced time crosses the Schwarzschild horizon

**Remember:** Label inward light rays to keep time finite at the future horizon.

*True by definition.* MSC 83C57 (Black holes). arXiv gr-qc, astro-ph.HE. Level 3: graduate.

**Definition.** For a spherical, nonrotating black hole without electric charge, keep the radius r for which each symmetry sphere has area 4πr². Replace Schwarzschild time with advanced time, a label constant along each inward radial light ray.

**Problem.** The Schwarzschild metric, which specifies spacetime intervals outside the black hole, extends smoothly across its future horizon in advanced time. It remains invertible there.

**How the definition helps.** Advanced time cancels the radial coefficient that diverges at the horizon in Schwarzschild coordinates (our own). The resulting time-radius block has determinant −1 when light speed equals one (our own). Finding the coordinate change requires integrating the equation for inward light rays (our own). Substitution then verifies agreement with the original metric outside the horizon (our own).

**Wikipedia:** [Eddington–Finkelstein coordinates](https://en.wikipedia.org/wiki/Eddington%E2%80%93Finkelstein_coordinates). It says: “the metric is explicitly non-singular at the Schwarzschild radius”

**Sources:**

- [David Finkelstein, Past-Future Asymmetry of the Gravitational Field of a Point Particle (1958).](https://doi.org/10.1103/PhysRev.110.965)

### Event horizons can cross flat regions

**Remember:** To find the horizon, follow light all the way out.

*Makes the theorem clean to state or prove.* MSC 83C57 (Black holes), 83C75. arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** The black hole region consists of events from which no future causal signal can reach outgoing light infinity. This infinity is where escaping light rays end in the conformal picture. The event horizon is the region’s boundary. A local curvature test does not ask which signals can escape.

**Problem.** Suppose a spherical thin shell collapses through its Schwarzschild radius with empty, flat spacetime inside. Part of the event horizon then lies in that flat interior.

**How the definition helps.** Defining the horizon by eventual escape lets two locally flat regions differ in whether a signal can get out. In our own explanation, follow the outgoing horizon ray backwards from the collapsing shell. It crosses the shell when the shell reaches radius 2M, using units where light speed and the gravitational constant equal one. Before crossing, the ray travels in the flat interior. Joining the interior and exterior geometries determines which outgoing rays escape.

**Wikipedia:** [Apparent horizon](https://en.wikipedia.org/wiki/Apparent_horizon). It says: “Event horizons can, in principle, arise and evolve in exactly flat regions of spacetime”

**Sources:** none listed. No primary source with a working link was found.

### Irreducible mass bounds extraction

**Remember:** The initial horizon area sets a floor for the final mass.

*True by definition.* MSC 83C57 (Black holes). arXiv gr-qc, astro-ph.HE. Level 3: graduate.

**Definition.** A Kerr black hole rotates and carries no electric charge. Its horizon is the boundary beyond which light cannot escape to distant observers. Use units where the gravitational constant and light speed equal one. For horizon area A, define the irreducible mass as √(A/(16π)).

**Problem.** Suppose a Kerr black hole ends up as another Kerr black hole in a process covered by the classical area theorem. The final total mass cannot fall below the initial irreducible mass.

**How the definition helps.** Expressing horizon area as a mass turns the area theorem into a lower bound on the final mass. In our own derivation, the classical area theorem first bounds the final irreducible mass below by its initial value. The Kerr mass formula then puts the final total mass at least as high. These two theorems supply the physical work.

**Wikipedia:** [Kerr metric](https://en.wikipedia.org/wiki/Kerr_metric). It says: “M² = Mᵢᵣᵣ² + J²c²/(4Mᵢᵣᵣ²G²).”

**Sources:**

- [Demetrios Christodoulou (1970), Reversible and Irreversible Transformations in Black-Hole Physics](https://doi.org/10.1103/PhysRevLett.25.1596)
- [J. M. Bardeen, B. Carter and S. W. Hawking (1973), The four laws of black hole mechanics](https://doi.org/10.1007/BF01645742)

### Killing tensors conserve the Carter quantity

**Remember:** The Killing tensor equation cancels the derivative along a geodesic.

*True by definition.* MSC 83C57 (Black holes), 83C40. arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** A rank-two Killing tensor is a symmetric bilinear form field K whose covariant derivative vanishes after averaging over all three inputs. The covariant derivative measures change with respect to parallel transport.

**Problem.** Along a geodesic with parallel velocity u, the value K(u,u) stays constant. In the rotating Kerr black hole, a special Killing tensor gives the Carter constant up to combinations of known constants.

**How the definition helps.** The Killing tensor equation collects all the conditions for a quadratic expression in velocity to stay constant along free paths. In our own calculation, differentiate K(u,u) along any geodesic, a path whose velocity transports parallel to itself. Inserting its velocity three times selects only the symmetric derivative of K. Testing all initial velocities recovers the tensor equation. Ordinary symmetries give constants linear in velocity. Finding an independent quadratic constant for Kerr requires constructing its special tensor.

**nLab:** [Killing tensor](https://ncatlab.org/nlab/show/Killing+tensor). It says: “For every Killing tensor K on (X,g) the dynamics of the relativistic particle on X has a further conserved quantity.”

**Wikipedia:** [Killing tensor](https://en.wikipedia.org/wiki/Killing_tensor). It says: “Every Killing tensor corresponds to a constant of motion on geodesics.”

**Sources:**

- [Martin Walker and Roger Penrose (1970), On quadratic first integrals of the geodesic equations for type {22} spacetimes](https://doi.org/10.1007/BF01649445)
- [Brandon Carter (1968), Global Structure of the Kerr Family of Gravitational Fields](https://doi.org/10.1103/PhysRev.174.1559)

### Kruskal coordinates remove the horizon singularity

**Remember:** Exponentiate the light coordinates to bring the horizon into the chart.

*True by definition.* MSC 83C57 (Black holes), 83C15. arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** The Schwarzschild metric describes the exterior of a spherical, nonrotating black hole of positive mass M. Choose units with light speed and the gravitational constant equal to one. Let u and v be Schwarzschild time minus and plus the adjusted radius r + 2M log(r/(2M) − 1), respectively. The exterior Kruskal coordinates are U = −exp(−u/(4M)) and V = exp(v/(4M)).

**Problem.** The Schwarzschild metric extends smoothly across its horizon at r = 2M, in units where gravity and light speed are one. This radius is not a curvature singularity.

**How the definition helps.** The exponential coordinates cancel the apparent divergence in the Schwarzschild metric at the horizon. In our own calculation, UV = (1 − r/(2M)) exp(r/(2M)), where r is the radius. The right side has nonzero derivative at r = 2M, so r depends smoothly on UV there. The coefficient of dU dV is proportional to exp(−r/(2M))/r and stays finite and nonzero. The work lies in finding and checking this change of coordinates.

**nLab:** [Kruskal–Szekeres coordinates](https://ncatlab.org/nlab/show/Kruskal%E2%80%93Szekeres+coordinates). It says: “for maximaly extended Schwarzschild spacetime.”

**Wikipedia:** [Kruskal–Szekeres coordinates](https://en.wikipedia.org/wiki/Kruskal%E2%80%93Szekeres_coordinates). It says: “Note that the metric is perfectly well defined and non-singular at the event horizon.”

**Sources:**

- [Martin Kruskal (1960), Maximal Extension of Schwarzschild Metric](https://doi.org/10.1103/PhysRev.119.1743)

### Radial potential locates photon spheres

**Remember:** The peak of the radial light potential marks the unstable circular orbit.

*True by definition.* MSC 83C57 (Black holes). arXiv gr-qc, astro-ph.HE. Level 3: graduate.

**Definition.** Outside a nonrotating, uncharged black hole, the areal radius r labels spheres of area 4πr². In units where light speed and the gravitational constant equal one, define the radial potential as L²(1 − 2M/r)/r². Here M is the mass and L is the light ray’s conserved angular momentum.

**Problem.** Outside a Schwarzschild black hole of mass M, circular light orbits have areal radius 3M. They are unstable under radial perturbations.

**How the definition helps.** The radial potential turns the search for a circular light orbit into a search for a stationary point. In our own calculation with L ≠ 0, differentiation gives a unique exterior stationary point at r = 3M. The point is a maximum, so a radial disturbance can grow. The physical work derives the radial motion equation that justifies the potential test.

**Wikipedia:** [Schwarzschild geodesics](https://en.wikipedia.org/wiki/Schwarzschild_geodesics). It says: “the unstable orbit &lt;math&gt;r<sub>crit</sub> ={3\\over 2}r<sub>s</sub>&lt;/math&gt;.”

**Sources:** none listed. No primary source with a working link was found.

### Surface gravity detects affine flow

**Remember:** Surface gravity measures how the symmetry parameter departs from an affine one.

*True by definition.* MSC 83C57 (Black holes). arXiv gr-qc. Level 3: graduate.

**Definition.** A Killing field K generates local maps preserving the metric. A Killing horizon is a hypersurface where K is normal and lightlike, meaning its squared length vanishes. Where K is nonzero, its covariant acceleration along its own flow equals κK. The coefficient κ is its surface gravity.

**Problem.** On such a horizon orbit, the flow parameter is affine exactly when κ vanishes along the orbit. An affine parameter gives zero covariant acceleration. At each point with K nonzero, κ vanishes exactly when the gradient of its squared length vanishes.

**How the definition helps.** The acceleration definition reads the affine parameter test directly from κ (our own comparison). The alternative gradient definition gives minus half the gradient of the squared length as κK. The Killing equation equates these two expressions. The gradient is the full spacetime gradient, so it can be nonzero even where the squared length vanishes along the horizon.

**Wikipedia:** [Surface gravity](https://en.wikipedia.org/wiki/Surface_gravity). It says: “kᵃ ∇ₐ kᵇ = κ kᵇ implies −kᵃ ∇ᵇ kₐ = κ kᵇ”

**Sources:**

- [Bardeen, Carter, Hawking (1973), The four laws of black hole mechanics](https://doi.org/10.1007/bf01645742)

### Null frame coefficients detect geodesics

**Remember:** No sideways acceleration means a light ray follows a geodesic.

*True by definition.* MSC 83C60 (Spinor and twistor methods in general relativity and gravitational theory; Newman-Penrose formalism). arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** In four-dimensional Lorentzian geometry, choose a basis with two real null vectors, meaning vectors of zero squared length. Their common perpendicular plane has an orthonormal basis of two spacelike vectors. The Newman–Penrose coefficient κ combines the two components of the acceleration of one null vector field ℓ in that plane into one complex number.

**Problem.** The curves tangent to ℓ can be parametrized as geodesics exactly when κ vanishes along them. A geodesic in this parameter has zero covariant acceleration.

**How the definition helps.** The complex coefficient replaces the vector geodesic equation with one scalar test. Differentiating the zero squared length shows that acceleration is perpendicular to ℓ. Thus κ records all the acceleration except the component along ℓ. Solving a scalar equation for a new parameter removes that remaining component. The explanation by perpendicularity and change of parameter is our own.

**Wikipedia:** [Newman–Penrose formalism](https://en.wikipedia.org/wiki/Newman%E2%80%93Penrose_formalism). It says: “shows that ℓᵃ is tangent to a geodesic if and only if κ = 0”

**Sources:**

- [Newman, Penrose (1962), An Approach to Gravitational Radiation by a Method of Spin Coefficients](https://doi.org/10.1063/1.1724257)

### Incomplete geodesics need not encounter curvature

**Remember:** A missing event can stop a geodesic without curving spacetime.

*Makes the theorem clean to state or prove.* MSC 83C75 (Space-time singularities, cosmic censorship, etc.), 53C50. arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** A geodesic is a path whose velocity stays parallel along itself when measured in an affine parameter. A spacetime is geodesically incomplete if some such path ends at a finite parameter value and admits no continuation there.

**Problem.** Assume a spacetime has a noncompact Cauchy surface, a closed future trapped surface, and nonnegative Ricci curvature in lightlike directions. Then Penrose’s theorem makes it geodesically incomplete: some future light ray ends at finite affine parameter. This conclusion alone does not require any curvature to diverge.

**How the definition helps.** Using incomplete rays lets the theorem describe a failure of free propagation even when curvature stays bounded. In our own example, delete one event from flat spacetime and follow a straight light ray toward it. Its affine parameter stays finite and its only possible endpoint is missing, yet curvature is zero. Penrose’s theorem does the separate work of deriving incompleteness from trapping.

**nLab:** [Penrose singularity theorem](https://ncatlab.org/nlab/show/Penrose+singularity+theorem). It says: “the singularity theorem makes statements about non-extendible curves but not explicitly about "singularities" in the sense of points of diverging curvature”

**Sources:**

- [Roger Penrose (1965), Gravitational Collapse and Space-Time Singularities](https://doi.org/10.1103/PhysRevLett.14.57)

### Null convergence bounds the distance to focusing

**Remember:** Negative expansion cannot stay finite forever.

*Makes the theorem clean to state or prove.* MSC 83C75 (Space-time singularities, cosmic censorship, etc.). arXiv gr-qc. Level 3: graduate.

**Definition.** Consider neighboring geodesics with lightlike tangent k in a smooth four-dimensional spacetime. Use an affine parameter, one for which the tangent has zero covariant acceleration. Their expansion θ is the derivative of the logarithm of their cross-sectional area density. Null convergence means that the Ricci tensor satisfies Ric(k,k) ≥ 0 for every lightlike k.

**Problem.** Suppose the geodesics leave a spacelike surface orthogonally with initial expansion θ₀ &lt; 0 on one generator. Under null convergence, that generator reaches a focal point within affine parameter length 2/\|θ₀\| if it extends that far. At a focal point the cross-sectional area density vanishes.

**How the definition helps.** Using logarithmic area change turns focusing into a scalar differential inequality (our own explanation). Orthogonality to the initial surface makes the rotation term vanish in the Raychaudhuri equation for θ. The remaining terms give θ′ ≤ −θ²/2 until focusing. Thus 1/θ increases at least at rate 1/2 while θ stays negative. The work lies in deriving the equation and relating divergence of θ to the first focal point.

**Wikipedia:** [Raychaudhuri equation](https://en.wikipedia.org/wiki/Raychaudhuri_equation). It says: “As the expansion gives the rate of change of the logarithm of the area density”

**Sources:**

- [Raychaudhuri (1955), Relativistic Cosmology. I](https://doi.org/10.1103/physrev.98.1123)

### Conformal time measures light travel

**Remember:** In conformal time, light covers one unit of fixed spatial distance per tick.

*True by definition.* MSC 83F05 (Relativistic cosmology), 53C50. arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** In a homogeneous and isotropic universe, let the scale factor a(t) multiply fixed spatial lengths. Define conformal time η by dη = dt/a(t), using units where light speed is one. Cosmic time t, by contrast, measures the proper time of an observer moving with the expansion.

**Problem.** In a spatially flat homogeneous universe, a radial light ray travels one unit of fixed-coordinate distance per unit of conformal time. The particle horizon radius in those coordinates is the conformal time elapsed since the start of the model, if finite.

**How the definition helps.** Conformal time absorbs the scale factor into the clock, so radial light has constant coordinate speed. In our own calculation, the spacetime metric becomes a² times the flat metric. Light has zero squared length in both metrics. Integrating its unit coordinate speed gives the horizon radius. With cosmic time the calculation instead integrates 1/a, whose convergence determines whether the radius is finite.

**Wikipedia:** [Cosmological horizon](https://en.wikipedia.org/wiki/Cosmological_horizon). It says: “the particle horizon is equal to the conformal time that has passed since the Big Bang, times the speed of light.”

**Paper or page:** [Bonnet-Myers rigidity theorem for globally hyperbolic Lorentzian length spaces](https://arxiv.org/abs/2401.17017v3). It says: “γ(t) = (t, ± ∫ₜ₀ᵗ 1/f(λ) dλ)”

**Sources:**

- [Bonnet-Myers rigidity theorem for globally hyperbolic Lorentzian length spaces](https://arxiv.org/abs/2401.17017v3)

### Bondi news controls energy loss

**Remember:** At outgoing light infinity, radiation subtracts squares from energy.

*Makes the theorem clean to state or prove.* MSC 83C30 (Asymptotic procedures (radiation, news functions, \\(\\mathcal \\)-spaces, etc.) in general relativity and gravitational theory), 83C40. arXiv gr-qc, math-ph. Level 4: research.

**Definition.** Outgoing light rays from an isolated system approach a boundary called future null infinity. Retarded time labels successive outgoing wavefronts there. Bondi energy averages the mass coefficient of the distant gravitational field over directions. Bondi news measures how fast the leading distortion of a large sphere changes with retarded time.

**Problem.** In four-dimensional vacuum general relativity with a smooth asymptotically flat Bondi expansion, Bondi energy never increases with retarded time. It has zero instantaneous loss exactly when the news vanishes in every direction.

**How the definition helps.** The news combines the wave amplitudes into a single field whose squared size measures energy loss. The vacuum field equations give the evolution of the mass coefficient. Integrating over the sphere removes angular divergence terms. The remaining loss is a positive constant times the integral of squared news. In our own interpretation, this packages the full angular radiation pattern into one energy balance.

**Paper or page:** [Masses at null infinity for Einstein's equations in harmonic coordinates](https://arxiv.org/abs/2107.01487v2). It says: “They satisfy the Bondi mass loss law”

**Sources:**

- [H. Bondi, M. G. J. van der Burg, and A. W. K. Metzner (1962), Gravitational waves in general relativity, VII. Waves from axi-symmetric isolated system](https://doi.org/10.1098/rspa.1962.0161)
- [R. K. Sachs (1962), Gravitational waves in general relativity VIII. Waves in asymptotically flat space-time](https://doi.org/10.1098/rspa.1962.0206)

### Bulk symmetries act conformally at infinity

**Remember:** A bulk symmetry preserves the boundary metric up to scale.

*Makes the theorem clean to state or prove.* MSC 83C30 (Asymptotic procedures (radiation, news functions, \\(\\mathcal \\)-spaces, etc.) in general relativity and gravitational theory). arXiv gr-qc. Level 4: research.

**Definition.** A conformal compactification adds a boundary where a smooth function Ω vanishes with nonzero differential. Multiplying the interior metric by Ω² gives a smooth nondegenerate metric there. Changing Ω rescales the induced boundary metric by a positive function. A Killing field generates local maps preserving the metric.

**Problem.** Consider a smooth conformal compactification with timelike boundary, meaning its induced metric has one negative direction. Any interior Killing field extending smoothly to the boundary generates local maps preserving the boundary metric up to positive rescaling.

**How the definition helps.** Keeping the boundary metric up to scale absorbs the change of Ω under the symmetry (our own explanation). Write h for the rescaled metric and K for the field. In the interior, the derivative of h along the flow equals 2K(Ω)h/Ω. Taking its trace shows that K(Ω)/Ω extends smoothly. Thus K(Ω) vanishes on the boundary, so the flow stays there and changes the induced metric only by scale.

**Paper or page:** [Geometric reflective boundary conditions for asymptotically Anti-de Sitter spaces](https://arxiv.org/abs/2507.20661). It says: “then it is tangent to ℐ”

**Sources:**

- [Geometric reflective boundary conditions for asymptotically Anti-de Sitter spaces](https://arxiv.org/abs/2507.20661)

### Cotton curvature supplies boundary stress

**Remember:** Cotton–York curvature already obeys the boundary constraints.

*Makes the theorem clean to state or prove.* MSC 83C30 (Asymptotic procedures (radiation, news functions, \\(\\mathcal \\)-spaces, etc.) in general relativity and gravitational theory). arXiv gr-qc. Level 4: research.

**Definition.** On an oriented three-dimensional Lorentzian manifold, the Cotton–York tensor measures how the curvature varies. First subtract one quarter of the scalar curvature times the metric from the Ricci tensor, the trace of the curvature tensor. Take the covariant derivative and contract its derivative index and first tensor index with the volume form to obtain the curl.

**Problem.** A conformal boundary specifies its metric only up to multiplication by a positive function. A constant multiple of its Cotton–York tensor has zero trace and divergence for each metric h. Changing h to Ω²h multiplies this covariant tensor by Ω⁻¹, as required for boundary stress data in three dimensions.

**How the definition helps.** Choosing the boundary tensor as a multiple of curvature satisfies the constraints for every boundary metric at once. The Cotton–York identities give its symmetry, vanishing trace and vanishing divergence. Its rescaling law makes the prescription consistent across all representatives. The work lies in proving those curvature identities (our own assessment).

**Paper or page:** [Geometric reflective boundary conditions for asymptotically Anti-de Sitter spaces](https://arxiv.org/abs/2507.20661), [Geometric reflective boundary conditions for asymptotically Anti-de Sitter spaces](https://arxiv.org/abs/2507.20661). It says: “is symmetric, trace-free with respect to the metric h and divergence-free for the Levi-Civita connection D of h.”

**Sources:**

- [Geometric reflective boundary conditions for asymptotically Anti-de Sitter spaces](https://arxiv.org/abs/2507.20661)

### Dominant energy bounds total momentum

**Remember:** Keep local energy large enough to pay for local momentum.

*Rules out counterexamples.* MSC 83C40 (Gravitational energy and conservation laws; groups of motions). arXiv gr-qc. Level 4: research.

**Definition.** Initial data describe spatial geometry and its bending in spacetime at one time. The gravitational constraint equations determine local energy density μ and momentum density J from these data. The dominant energy condition requires μ ≥ \|J\| everywhere.

**Problem.** Take smooth complete three-dimensional initial data without boundary, with integrable energy and momentum densities satisfying the dominant energy condition. Assume metric error decays as 1/r and bending as 1/r², gaining one inverse power per derivative through orders two and one respectively. Then total energy is at least total momentum magnitude.

**How the definition helps.** The density bound makes the energy term in the positive mass proof nonnegative. In our own example, take zero bending and multiply the Euclidean metric by (1 − a/√(1 + r²))⁴, with 0 &lt; a &lt; 1. The resulting complete geometry has total energy −2a and zero momentum. Our own sign check uses μ\|v\| + J · v ≥ 0 for every vector v. The proof still needs a global estimate connecting this local sign to energy at infinity.

**Paper or page:** [The case of equality for the spacetime positive mass theorem](https://arxiv.org/abs/2203.01984v3). It says: “Suppose (M,g,k) is a complete asymptotically flat initial data set satisfying the dominant energy condition (DEC) μ ≥ \|J\|. Then E ≥ \|P\|.”

**Sources:**

- [Sven Hirsch and Yiyue Zhang, The case of equality for the spacetime positive mass theorem](https://arxiv.org/abs/2203.01984v3)

### Nearly round spheres recover total mass

**Remember:** Going to infinity does not make a fixed oval shape round.

*Rules out counterexamples.* MSC 83C40 (Gravitational energy and conservation laws; groups of motions), 53C21. arXiv gr-qc, math.DG. Level 4: research.

**Definition.** Let r be the minimum distance of a surrounding sphere from a fixed point. Nearly round spheres have maximum distance and intrinsic diameter bounded by Cr and area bounded by Cr², for a common constant C. Subtract the average principal curvature times the identity from the shape operator to obtain B, which measures unequal bending. For decay exponent t, both r¹⁺ᵗ‖B‖ and r²⁺ᵗ‖∇B‖ stay bounded, where ∇ measures change along the surface.

**Problem.** Assume a three-dimensional end approaches Euclidean space with two derivatives at decay rate t &gt; ½ and has integrable scalar curvature. Along nearly round spheres escaping to infinity, the Hawking mass calculated from area and mean curvature tends to the total mass at infinity.

**How the definition helps.** Near roundness excludes a persistent shape error that can swamp the mass being measured. In our own example, dilate a nonspherical ellipsoid in flat space. By Gauss–Bonnet, its integrated squared mean curvature stays above the round value by a fixed positive amount. The Hawking mass multiplies this deficit by a factor proportional to the square root of area, so it tends to minus infinity although flat space has zero total mass.

**nLab:** [ADM mass](https://ncatlab.org/nlab/show/ADM+mass). It says: “a notion of total mass contained in asymptotically flat spacetimes.”

**Paper or page:** [On the behavior of quasi-local mass at the infinity along nearly round surfaces](https://arxiv.org/abs/0806.0678v1). It says: “\\lim<sub>r\\rightarrow \\infty </sub>m<sub>H</sub>(\\Sigma r)=m{ADM}(M).”

**Sources:**

- [Yuguang Shi, Guofang Wang, and Jie Wu (2009), On the behavior of quasi-local mass at the infinity along nearly round surfaces](https://doi.org/10.1007/s10455-009-9169-5)

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

### Rescaling makes horizon inversion isometric

**Remember:** Divide by radius squared to turn horizon inversion into an isometry.

*True by definition.* MSC 83C57 (Black holes). arXiv gr-qc. Level 4: research.

**Definition.** Consider the exterior of a nonrotating charged black hole whose charge magnitude equals its mass M in geometric units. Define r by the area 4πr² of each sphere. Divide the spacetime metric by r². The inversion keeps time and angles fixed and sends r − M to M²/(r − M).

**Problem.** The inversion preserves the rescaled metric. On the extended exterior it exchanges the future horizon with the boundary reached by outgoing light, and similarly for the past.

**How the definition helps.** Dividing by r² cancels the position-dependent change in the original metric under inversion. In our own calculation, the transformed sphere radius is Mr/(r − M). The original metric gains exactly the square of the ratio of transformed to original radius. The separate boundary argument identifies where incoming and outgoing rays end.

**Paper or page:** [Peeling at extreme black hole horizons](https://arxiv.org/abs/2303.14574v1). It says: “It fixes the photon sphere and exchanges the future event horizon ℋ⁺ and the future null infinity ℐ⁺”

**Sources:**

- [Jack Borthwick, Eric Gourgoulhon and Jean-Philippe Nicolas, Peeling at extreme black hole horizons](https://arxiv.org/abs/2303.14574v1)

### A quadratic test detects type D

**Remember:** Two distinct polynomial roots rule out a Jordan block.

*True by definition.* MSC 83C60 (Spinor and twistor methods in general relativity and gravitational theory; Newman-Penrose formalism). arXiv gr-qc, math-ph. Level 4: research.

**Definition.** At a point of an oriented four-dimensional spacetime, the trace-free part of curvature defines an operator W on a three-dimensional complex space. Its elements are self-dual two-forms, which the metric’s Hodge star sends to i times themselves. In the operator classification, Petrov type D means W is diagonalizable with eigenvalues λ, λ and −2λ for some nonzero λ.

**Problem.** Suppose tr(W²) ≠ 0 and set λ = −tr(W³)/tr(W²). The curvature has Petrov type D exactly when W² + λW − 2λ²I = 0, where I is the identity.

**How the definition helps.** The operator definition replaces the geometric search for repeated lightlike directions with a polynomial test (our own explanation). For the stated spectrum, taking traces gives the displayed value of λ. Conversely, λ cannot vanish because the equation would imply W² = 0. The polynomial has distinct roots λ and −2λ, so W is diagonalizable. Its zero trace forces multiplicities two and one. The geometric work is proving agreement with the classification by lightlike directions.

**Paper or page:** [An ideal conformally covariant characterization of the Kerr conformal structure](https://arxiv.org/abs/2308.04783). It says: “is of “genuine” Petrov type D (Petrov type D, but not any of its specializations) if and only if\\begin{equation}  \\tilde{a}\\neq 0\\; ,\\quad \\tilde{\\mathcal{D}}<sub>abcd</sub>=0\\; ,  \\end{equation}”

**Sources:**

- [An ideal conformally covariant characterization of the Kerr conformal structure](https://arxiv.org/abs/2308.04783)

### Curvature blocks twice differentiable extensions

**Remember:** Curvature can diverge where first derivatives still extend continuously.

*Rules out counterexamples.* MSC 83C75 (Space-time singularities, cosmic censorship, etc.). arXiv gr-qc. Level 4: research.

**Definition.** An extension identifies a spacetime with a proper open subset of a larger spacetime while preserving its metric. A C² extension has metric coefficients with continuous second derivatives in smooth coordinates. A C¹ extension requires only continuous first derivatives.

**Problem.** Each interior Lorentzian Hawking–Page metric in the cited family extends across its specified lightlike boundary with continuous first derivatives. No extension across that boundary has continuous second derivatives.

**How the definition helps.** Requiring two continuous derivatives rules out extensions whose curvature diverges in a regular frame (our own explanation). A C² metric has continuous curvature components in every smooth local frame. The cited paper proves that the sectional curvature blows up at the boundary for every extension. Constructing the C¹ extension and establishing that obstruction are the substantive results.

**Paper or page:** [Extensions of Lorentzian Hawking--Page Solutions with Null Singularities, Spacelike Singularities, and Cauchy horizons of Taub--NUT type](https://arxiv.org/abs/2209.06134), [Extensions of Lorentzian Hawking--Page Solutions with Null Singularities, Spacelike Singularities, and Cauchy horizons of Taub--NUT type](https://arxiv.org/abs/2209.06134). It says: “For any extension of the Lorentzian Hawking–Page vacuum solution, the sectional curvature blows up along C₀⁻.”

**Sources:**

- [Extensions of Lorentzian Hawking--Page Solutions with Null Singularities, Spacelike Singularities, and Cauchy horizons of Taub--NUT type](https://arxiv.org/abs/2209.06134)

### Strict trapping rules out flat cylinders

**Remember:** Rays that only stay parallel need not ever meet.

*Rules out counterexamples.* MSC 83C75 (Space-time singularities, cosmic censorship, etc.), 83C57. arXiv gr-qc, math.DG. Level 4: research.

**Definition.** A Cauchy surface meets every inextendible slower-than-light path once. Inside it, consider a compact separating surface without boundary. It is outer trapped if outgoing perpendicular light rays initially shrink every small area element. Weak outer trapping allows the initial rate to vanish.

**Problem.** Assume a spacetime has a spacelike Cauchy surface and nonnegative Ricci curvature in every light direction. Suppose a connected outer trapped surface separates that slice and the outer component has noncompact closure. Then some future light ray ends at finite affine parameter, the parameter for which its velocity transports parallel to itself.

**How the definition helps.** Strict shrinking excludes parallel outgoing rays, which can persist forever. In our own example, identify opposite faces periodically in two spatial directions of flat spacetime. At fixed time and fixed remaining coordinate, the resulting torus has constant area along its outgoing rays. Every ray extends forever. The theorem uses strict shrinking to focus the rays and the noncompact outer side to deduce incompleteness.

**Paper or page:** [Rigidity aspects of Penrose's singularity theorem](https://arxiv.org/abs/2402.11315v3). It says: “outer trapped (i.e., θ⁺ &lt; 0)”

**Sources:**

- [Rigidity aspects of Penrose's singularity theorem](https://arxiv.org/abs/2402.11315v3)
