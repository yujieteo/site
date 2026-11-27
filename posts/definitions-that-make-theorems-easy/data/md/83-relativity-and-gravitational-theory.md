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

### Incomplete geodesics need not encounter curvature

**Remember:** A missing event can stop a geodesic without curving spacetime.

*Makes the theorem clean to state or prove.* MSC 83C75 (Space-time singularities, cosmic censorship, etc.), 53C50. arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** A geodesic is a path whose velocity stays parallel along itself when measured in an affine parameter. A spacetime is geodesically incomplete if some such path ends at a finite parameter value and admits no continuation there.

**Problem.** Penrose’s theorem concludes that a future light ray is incomplete. In its standard form it assumes a noncompact Cauchy surface, a closed future trapped surface, and nonnegative Ricci curvature in lightlike directions. Incompleteness alone allows curvature to stay zero.

**How the definition helps.** Using incomplete rays lets the theorem describe a failure of free propagation even when curvature stays bounded. A Cauchy surface meets each inextendible timelike path once. Both families of perpendicular future light rays initially contract at a trapped surface. In our own example, delete one event from flat spacetime and follow a straight light ray toward it. Its affine parameter stays finite, and its only possible endpoint is missing. This example distinguishes the two conclusions. Penrose’s theorem does the separate work of deriving incompleteness from trapping.

**nLab:** [Penrose singularity theorem](https://ncatlab.org/nlab/show/Penrose+singularity+theorem). It says: “the singularity theorem makes statements about non-extendible curves but not explicitly about "singularities" in the sense of points of diverging curvature”

**Sources:**

- [Roger Penrose (1965), Gravitational Collapse and Space-Time Singularities](https://doi.org/10.1103/PhysRevLett.14.57)

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

### Nearly round spheres recover total mass

**Remember:** Going to infinity does not make a fixed oval shape round.

*Rules out counterexamples.* MSC 83C40 (Gravitational energy and conservation laws; groups of motions), 53C21. arXiv gr-qc, math.DG. Level 4: research.

**Definition.** Let r be the minimum distance of a surrounding sphere from a fixed point. Nearly round spheres have maximum distance and intrinsic diameter bounded by Cr and area bounded by Cr², for a common constant C. Subtract the average principal curvature times the identity from the shape operator to obtain B, which measures unequal bending. For decay exponent t, both r¹⁺ᵗ‖B‖ and r²⁺ᵗ‖∇B‖ stay bounded, where ∇ measures change along the surface.

**Problem.** Assume a three-dimensional end approaches Euclidean space with two derivatives at decay rate t &gt; ½ and has integrable scalar curvature. Along nearly round spheres escaping to infinity, the Hawking mass calculated from area and mean curvature tends to the total mass at infinity.

**How the definition helps.** Near roundness excludes a persistent shape error that can swamp the mass being measured. In our own example, dilate a nonspherical ellipsoid in flat space. Its integrated squared mean curvature stays constant under dilation. Gauss–Bonnet gives the round value plus a positive integral measuring unequal principal curvatures. The Hawking mass multiplies this negative deficit by a factor proportional to the square root of area. It therefore tends to minus infinity although flat space has zero total mass. The convergence theorem controls this error for nearly round spheres.

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

### Strict trapping rules out flat cylinders

**Remember:** Rays that only stay parallel need not ever meet.

*Rules out counterexamples.* MSC 83C75 (Space-time singularities, cosmic censorship, etc.), 83C57. arXiv gr-qc, math.DG. Level 4: research.

**Definition.** A Cauchy surface meets every inextendible slower-than-light path once. Inside it, consider a compact separating surface without boundary. It is outer trapped if outgoing perpendicular light rays initially shrink every small area element. Weak outer trapping allows the initial rate to vanish.

**Problem.** Assume a spacetime has a spacelike Cauchy surface and nonnegative Ricci curvature in every light direction. Suppose a connected outer trapped surface separates that slice and the outer component has noncompact closure. Then some future light ray ends at finite affine parameter, the parameter for which its velocity transports parallel to itself.

**How the definition helps.** Strict shrinking excludes parallel outgoing rays, which can persist forever. In our own example, identify opposite faces periodically in two spatial directions of flat spacetime. At fixed time and fixed remaining coordinate, the resulting torus has constant area along its outgoing rays. Every ray extends forever. The theorem uses strict shrinking to focus the rays and the noncompact outer side to deduce incompleteness.

**Paper or page:** [Rigidity aspects of Penrose's singularity theorem](https://arxiv.org/abs/2402.11315v3). It says: “outer trapped (i.e., θ⁺ &lt; 0)”

**Sources:**

- [Rigidity aspects of Penrose's singularity theorem](https://arxiv.org/abs/2402.11315v3)
