### Lange's inertial frames make Newton's first law partly a definition

**Remember:** Three straight throws define the frame; the rest is physics.

*True by definition. Confidence: medium.* MSC 70A05 (Axiomatics, foundations), 01A55. arXiv physics.class-ph, physics.hist-ph. Level 1: early undergraduate.

**Definition.** Ludwig Lange defined an inertial frame in 1885 by free motion. In such a frame, free mass points thrown from one point in three directions, not all in one plane, move in straight lines. He wanted an operational definition to replace Newton's absolute space and time.

**Problem.** Newton's first law says that a body with no net force moves in a straight line at constant speed. In Lange's inertial frames this holds by definition for three free bodies. The physical content that remains is that such frames exist and that every other free body then also moves straight.

**How the definition helps.** Lange's definition uses only observable free motion, so the first law stops depending on absolute space. Part of the law is then true by definition, and the claim about all other free bodies is the real physical statement (our own reading). The page notes that the definition belongs to Newtonian mechanics and ignores relativistic effects. What stays hard is to know that a body is free of force, which leads back to the second law (our own). General relativity gives up global inertial frames altogether (our own).

**Wikipedia:** [Inertial frame of reference](https://en.wikipedia.org/wiki/Inertial_frame_of_reference). It says: “A reference frame in which a mass point thrown from the same point in three different (non co-planar) directions follows rectilinear paths each time it is thrown, is called an inertial frame.”

**Sources:** none listed. No primary source with a working link was found.

### Mass centers follow net force

**Remember:** Mass weights turn average acceleration into total force.

*True by definition.* MSC 70F10 (\\(n\\)-body problems). arXiv physics.class-ph. Level 1: early undergraduate.

**Definition.** Define the center of mass as the average position weighted by particle masses. The ordinary average gives every particle the same weight.

**Problem.** Consider particles of constant positive mass whose internal forces cancel in pairs. The external forces sum to total mass times the acceleration of the center of mass.

**How the definition helps.** Mass weighting turns each acceleration term into a force by Newton’s second law (our own). An unweighted average lacks these factors when the masses differ (our own). Pairwise cancellation removes the internal forces from the sum (our own).

**Wikipedia:** [Center of mass](https://en.wikipedia.org/wiki/Center_of_mass). It says: “where the weighted relative position of the distributed mass sums to zero.”

**Sources:** none listed. No primary source with a working link was found.

### Defining conservative forces by path independence makes potential energy exist

**Remember:** Path-independent work is exactly what a potential energy needs.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics), 70G45. arXiv physics.class-ph. Level 1: early undergraduate.

**Definition.** A force field is conservative if the work it does in moving a particle between two points does not depend on the path. Equivalently, the work around every closed path is zero.

**Problem.** A conservative force is the negative gradient of a potential energy, F = −∇Φ, so mechanical energy is conserved. The test 'curl F = 0' is equivalent to this only on simply connected regions, where every loop can shrink to a point.

**How the definition helps.** Path independence is exactly what makes 'minus the work from a base point to x' a well-defined function Φ(x) (our own sketch). Then F = −∇Φ follows by differentiating, so a potential exists almost by definition. The curl test is a separate theorem, proved with Stokes's theorem, and it needs a region in which every loop bounds a surface. Our own counterexample: the field (−y, x)/(x² + y²) around the origin has zero curl, but it does work 2π around the unit circle. What stays hard is this topology: curl-free fields modulo gradients are measured by de Rham cohomology (our own).

**Wikipedia:** [Conservative force](https://en.wikipedia.org/wiki/Conservative_force). It says: “In physics, a conservative force is a force with the property that the total work done by the force in moving a particle between two points is independent of the path taken.”

**Sources:** none listed. No primary source with a working link was found.

### Mass centers give parallel axis shifts

**Remember:** Shift from the mass center and the cross term vanishes.

*True by definition.* MSC 70E99 (Dynamics of a rigid body and of multibody systems). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** The center of mass is the point from which the mass-weighted displacements sum to zero. The moment of inertia about an axis sums mass times squared perpendicular distance.

**Problem.** Moving an axis a perpendicular distance d from a parallel axis through the center of mass increases the moment of inertia by Md². Here M is total mass.

**How the definition helps.** Choosing the center of mass as origin removes the cross term that an arbitrary origin would leave (our own). Projecting each displacement onto the plane perpendicular to the axes preserves its zero mass-weighted sum (our own). The squared shift then contributes Md² (our own).

**Wikipedia:** [Parallel axis theorem](https://en.wikipedia.org/wiki/Parallel_axis_theorem). It says: “which is zero since the center of mass lies at the origin.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced mass makes two bodies one

**Remember:** Add inverse masses when the bodies pull in opposite directions.

*True by definition.* MSC 70F05 (Two-body problems). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** For two constant positive masses, take the first position minus the second as the separation r. Define their reduced mass μ by 1/μ = 1/m₁ + 1/m₂.

**Problem.** Suppose only the two particles’ equal and opposite internal forces act. If the first force F depends only on separation and relative velocity, their separation obeys μr̈ = F.

**How the definition helps.** The reciprocal sum absorbs both mass factors when we subtract the two Newton equations (our own). This replaces two coupled position equations with one equation for the separation (our own). Recovering the individual positions also requires the freely moving center of mass (our own).

**Wikipedia:** [Reduced mass](https://en.wikipedia.org/wiki/Reduced_mass). It says: “Reduced mass allows the two-body problem to be solved as if it were a one-body problem.”

**Sources:** none listed. No primary source with a working link was found.

### Rotating coordinates give Jacobi’s constant

**Remember:** Follow the rotating masses and the Hamiltonian loses its time dependence.

*True by definition.* MSC 70F07 (Three-body problems), 70H33. arXiv physics.class-ph, math.DS. Level 2: later undergraduate.

**Definition.** Two massive bodies orbit their common center on circles under Newtonian gravity. A third body feels their gravity and has negligible effect on them. Use coordinates rotating with the pair and define Jacobi’s constant as minus twice the rotating Hamiltonian per unit test mass.

**Problem.** The circular restricted three-body problem has a conserved Jacobi constant along collision-free motion.

**How the definition helps.** The rotating coordinates fix the two masses, removing the explicit time dependence present in the inertial description (our own). The work is deriving the rotating Hamiltonian, the function that generates the test body’s motion (our own). Hamilton’s equations conserve it because it has no explicit time dependence (our own).

**Wikipedia:** [Jacobi integral](https://en.wikipedia.org/wiki/Jacobi_integral). It says: “Note that the Jacobi integral is minus twice the total energy per unit mass in the rotating frame of reference”

**Sources:** none listed. No primary source with a working link was found.

### Central configurations scale without changing shape

**Remember:** One common inward acceleration factor lets one scale govern every body.

*Makes the theorem clean to state or prove.* MSC 70F10 (\\(n\\)-body problems). arXiv physics.class-ph, math.DS. Level 2: later undergraduate.

**Definition.** In a central configuration, each gravitational acceleration is the same negative multiple of its displacement from the center of mass. This is stronger than just requiring each acceleration to point toward the center.

**Problem.** Positive Newtonian point masses released from rest in a collision-free central configuration keep their shape until total collision.

**How the definition helps.** The common acceleration factor turns every vector equation into the same scalar equation for the scale (our own). The work is Newton's inverse-square scaling law and uniqueness before collision (our own).

**Wikipedia:** [Central configuration](https://en.wikipedia.org/wiki/Central_configuration). It says: “bodies placed at rest in a central configuration will maintain the configuration as they collapse to a collision at their center of mass.”

**Sources:** none listed. No primary source with a working link was found.

### Mass centers split kinetic energy

**Remember:** Relative velocities have zero total momentum, so the kinetic energies add.

*True by definition.* MSC 70F10 (\\(n\\)-body problems). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** For particles of constant positive mass, the center of mass moves at their mass-weighted mean velocity. Subtract this velocity from each particle’s velocity to obtain its relative velocity.

**Problem.** Total kinetic energy equals the energy of the total mass at the center velocity plus the kinetic energy of motion relative to that center.

**How the definition helps.** Choosing the mass-weighted mean makes the cross term in the energy expansion vanish (our own). For an arbitrary reference velocity the relative momenta can have a nonzero sum (our own). Here they sum to zero directly from the weighted mean (our own).

**Wikipedia:** [König's theorem (kinetics)](https://en.wikipedia.org/wiki/K%C3%B6nig%27s_theorem_%28kinetics%29). It says: “the kinetic energy of a system of particles is the sum of the kinetic energy associated to the movement of the center of mass”

**Sources:** none listed. No primary source with a working link was found.

### Angular momentum as a cross product gives Kepler’s area law

**Remember:** The radius sweeps out area at a rate proportional to angular momentum.

*True by definition. Confidence: medium.* MSC 70F15 (Celestial mechanics), 70F05. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** For a particle of fixed mass m, define its angular momentum about the force center as L = r × p. Here r is its position relative to that center, and p is its mass times velocity.

**Problem.** A particle under a central force sweeps out equal areas in equal times. A central force points along the line through the particle and the fixed force center.

**How the definition helps.** The cross product makes the areal speed equal to \|L\|/(2m), since an infinitesimal swept area is half the area of the corresponding parallelogram. The work moves into conservation of L, which follows from zero torque because r and the force are parallel. Newton’s geometric proof instead shows equality of the small triangles formed by impulses toward the center (our own). No inverse-square law is needed.

**Wikipedia:** [Kepler's laws of planetary motion](https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion). It says: “Since the final expression is proportional to the total angular momentum (r × p), Kepler's equal area law will hold for any system that conserves angular momentum.”

**Paper or page:** [Kepler's Laws of Planetary Motion/Second Law](https://proofwiki.org/wiki/Kepler's_Laws_of_Planetary_Motion/Second_Law). It says: “The line joining the sun and a planet sweeps out equal areas in equal times.”

**Sources:** none listed. No primary source with a working link was found.

### Stationary action ignores total time derivatives at fixed endpoints

**Remember:** A total derivative changes the action only by a fixed endpoint term.

*True by definition.* MSC 70H03 (Lagrange's equations), 70H25. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** The action is the time integral of the Lagrangian, a function of position, velocity, and time. A motion is a path whose action has zero first variation when both endpoint times and positions are fixed.

**Problem.** If f depends smoothly on position and time, adding its total time derivative to the Lagrangian leaves the equations of motion unchanged.

**How the definition helps.** Stationary action makes the added term irrelevant because its integral depends only on the fixed endpoints. The fundamental theorem of calculus gives the difference of f at those endpoints. The differential-equation formulation instead checks that the Euler–Lagrange operator sends this extra term to zero (our own). The work moves into the theorem that stationary paths are exactly the solutions of those equations (our own).

**Wikipedia:** [Lagrangian mechanics](https://en.wikipedia.org/wiki/Lagrangian_mechanics). It says: “Both Lagrangians L and L′ produce the same equations of motion since the corresponding actions S and S′ are related via”

**Sources:** none listed. No primary source with a working link was found.

### Stationary action makes Lagrange’s equations independent of position coordinates

**Remember:** A change of position coordinates cannot change which paths make the action stationary.

*True by definition. Confidence: medium.* MSC 70H25 (Hamilton's principle), 70H03. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** The action assigns each path the integral of its Lagrangian over time. A stationary path has zero first variation of this integral for every small path change with fixed endpoints.

**Problem.** Lagrange’s equations keep their form under a smooth invertible change of position coordinates when the Lagrangian describes the same action in the new coordinates.

**How the definition helps.** Stationary action makes coordinate invariance immediate because the same path changes have the same action values in either coordinate system. The direct differential-equation proof instead tracks how the partial derivatives change by the chain rule. The work moves into identifying Lagrange’s equations with stationarity in either coordinate system (our own).

**Wikipedia:** [Hamilton's principle](https://en.wikipedia.org/wiki/Hamilton%27s_principle), [Lagrangian mechanics](https://en.wikipedia.org/wiki/Lagrangian_mechanics). It says: “This is called Hamilton's principle and it is invariant under coordinate transformations.”

**Sources:** none listed. No primary source with a working link was found.

### Mass inner products separate vibration modes

**Remember:** Use mass weights to make the vibration operator symmetric.

*True by definition.* MSC 70J10 (Modal analysis in linear vibration theory). arXiv physics.class-ph, math.DS. Level 2: later undergraduate.

**Definition.** For displacements u and v, define their mass inner product as uᵀMv. The symmetric positive definite matrix M relates acceleration to force. The symmetric stiffness matrix K gives the restoring force −Ku.

**Problem.** A finite conservative linear system with positive definite mass and stiffness matrices has a basis of independent vibration modes. Distinct squared frequencies give orthogonal modes in the mass inner product.

**How the definition helps.** In the mass inner product, moving M⁻¹K between the two arguments gives the same expression uᵀKv (our own). The ordinary dot product need not have this symmetry (our own). The spectral theorem then gives an orthonormal basis of vibration patterns, each governed by one scalar oscillator equation (our own).

**Wikipedia:** [Normal mode](https://en.wikipedia.org/wiki/Normal_mode), [Mass matrix](https://en.wikipedia.org/wiki/Mass_matrix). It says: “The modes are "normal" in the sense that they move independently.”

**Sources:** none listed. No primary source with a working link was found.

### Jacobi energy bounds accessible regions

**Remember:** Where the effective potential exceeds the energy, the particle cannot go.

*True by definition.* MSC 70F07 (Three-body problems), 37N05. arXiv math.DS, astro-ph.EP. Level 3: graduate.

**Definition.** Use the frame rotating with two masses in circular orbits about their common center of mass. A third body feels their gravity but has negligible influence on them. Add the centrifugal potential to their gravitational potential per unit mass to obtain the effective potential. Define Jacobi energy as this potential plus half the squared speed in the rotating frame.

**Problem.** For a third body of negligible mass, the effective potential along its trajectory cannot exceed its fixed Jacobi energy.

**How the definition helps.** Jacobi energy splits into a fixed total and two terms, one of which is nonnegative by definition (our own). Ordinary inertial energy gives no fixed bound because the two masses move (our own). Conservation in the rotating frame requires the equations of motion (our own). The effective potential is stationary there, and the Coriolis acceleration is perpendicular to velocity, so it does no work (our own).

**Wikipedia:** [Jacobi integral](https://en.wikipedia.org/wiki/Jacobi_integral). It says: “conserved quantity for the circular restricted three-body problem”

**Sources:** none listed. No primary source with a working link was found.

### Central configurations collapse without distortion

**Remember:** One inward acceleration factor gives every body the same shrink rate.

*Makes the theorem clean to state or prove.* MSC 70F15 (Celestial mechanics), 37N05. arXiv math.DS, astro-ph.EP. Level 3: graduate.

**Definition.** Start with positive point masses at distinct positions. Their positions form a central configuration if each gravitational acceleration equals a common negative constant times displacement from the center of mass.

**Problem.** Release the masses from rest in a Newtonian central configuration. Their positions keep the same shape until all the masses collide at the center of mass in finite time.

**How the definition helps.** Because the acceleration factors match, one scale factor describes the motion of every mass (our own). Newton’s inverse-square law makes the common inward acceleration scale as the inverse square of that factor (our own). The remaining work is to solve the scalar fall equation and show it reaches zero in finite time (our own).

**Wikipedia:** [Central configuration](https://en.wikipedia.org/wiki/Central_configuration). It says: “directly towards the center of mass, with acceleration proportional to its distance from the center.”

**Sources:** none listed. No primary source with a working link was found.

### Regular Lagrangians give local momentum inverses

**Remember:** The derivative of momentum with respect to velocity is the velocity Hessian.

*Rules out counterexamples.* MSC 70H03 (Lagrange's equations), 37J55. arXiv math.DS. Level 3: graduate.

**Definition.** A smooth Lagrangian L assigns a number to each position and velocity, possibly with an additional parameter. Define momentum as its velocity derivative. Call L regular when its matrix of second velocity derivatives is everywhere invertible.

**Problem.** For a regular Lagrangian, the Legendre map from velocities to momenta has a smooth local inverse at every point.

**How the definition helps.** The momentum map keeps position and any extra parameter fixed, so only its velocity derivative can prevent local inversion (our own). Regularity makes that derivative invertible, and the inverse function theorem supplies the smooth local inverse (our own). For a Lagrangian linear in velocity, every velocity at a fixed position gives the same momentum (our own).

**Paper or page:** [The evolution operator connecting the Lagrangian and Hamiltonian formalisms for contact systems](https://arxiv.org/abs/2511.13401v1). It says: “The Legendre map ℱL is a local diffeomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Hyperregularity makes Hamiltonians single valued

**Remember:** Local momentum inverses can disagree, but a global inverse cannot.

*Rules out counterexamples.* MSC 70H05 (Hamilton's equations), 70H03. arXiv physics.class-ph, math.DS. Level 3: graduate.

**Definition.** For a smooth Lagrangian L, differentiation with respect to velocity v gives momentum p. Hyperregularity means that the map from position and velocity to position and momentum has a smooth inverse everywhere. Regularity only requires its derivative to be invertible.

**Problem.** For a hyperregular Lagrangian, its energy p·v − L gives a unique smooth Hamiltonian on the entire cotangent bundle.

**How the definition helps.** A global inverse selects exactly one velocity for every position and momentum, so the energy defines a smooth Hamiltonian (our own). For two velocity components u and v, take L = eᵘ cos v (our own). Its velocity Hessian has determinant −e²ᵘ, yet increasing v by 2π leaves both momenta unchanged (our own). The energy changes by 2π times the second momentum, which can be nonzero (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650v2). It says: “Then there exists a unique function h ∈ C∞(T\*Q)”

**Sources:** none listed. No primary source with a working link was found.

### Hamilton–Jacobi solutions give invariant graphs

**Remember:** On a Lagrangian graph, zero tangential energy derivative means tangential motion.

*True by definition.* MSC 70H20 (Hamilton-Jacobi equations in mechanics), 37J35. arXiv math.DS, math.SG. Level 3: graduate.

**Definition.** The Hamiltonian H is the function that generates motion in position and momentum space. A smooth position function S assigns momentum dS to each position, defining a graph. The stationary Hamilton–Jacobi equation says H is locally constant on this graph.

**Problem.** A solution of the stationary Hamilton–Jacobi equation gives a graph that Hamiltonian trajectories stay on locally.

**How the definition helps.** Writing the equation on a graph makes invariance a test of tangency in place of separate coordinate equations (our own). The graph has half the ambient dimension, and equality of mixed second derivatives makes the symplectic form vanish on it (our own). Thus a vector lies along the graph exactly when it pairs to zero with every graph tangent under that form (our own). The Hamiltonian field passes this test because H has zero derivative along the graph (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650v2). It says: “which is invariant by Xₕ, and S is a local generating function of this Lagrangian submanifold.”

**Sources:** none listed. No primary source with a working link was found.

### Hill regions exclude brake points

**Remember:** Where all kinetic energy vanishes, the Jacobi metric vanishes too.

*Rules out counterexamples.* MSC 70H30 (Other variational principles in mechanics), 70F10. arXiv physics.class-ph, math.DS. Level 3: graduate.

**Definition.** For particles with constant positive masses in a smooth potential V, the open Hill region at energy E consists of positions satisfying V &lt; E. The kinetic energy metric assigns each velocity its doubled kinetic energy as squared length. Multiplying this metric by 2(E − V) gives the Jacobi metric.

**Problem.** Away from collisions, Newtonian paths of energy E inside the open Hill region follow geodesics, the locally straight paths of the Jacobi metric. Conversely, each nonconstant geodesic there gives such a trajectory after a local change of time.

**How the definition helps.** The strict inequality makes the new metric positive definite and the time change invertible (our own). A projectile fired straight up has zero speed at the top, which is a brake point (our own). The metric degenerates there (our own). The remaining work is the Jacobi–Maupertuis principle, which relates the equations by a change of time (our own).

**Paper or page:** [The negative energy N-body problem has finite diameter](https://arxiv.org/abs/2406.05563v1). It says: “Away from collisions and brake points, the energy E solutions to Newton’s equations are reparameterizations of geodesics on the Hill region.”

**Sources:** none listed. No primary source with a working link was found.

### Partial Legendre transforms eliminate cyclic velocities

**Remember:** Subtract the cyclic momentum term before fixing the momentum.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics). arXiv physics.class-ph, math.SG. Level 3: graduate.

**Definition.** A cyclic coordinate does not appear in the Lagrangian L, although its velocity v can appear. Its momentum p is the partial derivative of L with respect to v. At fixed p, solve this equation for v and substitute into L − pv.

**Problem.** When the cyclic velocity can be solved smoothly from its momentum, the reduced Lagrangian gives the equations for the remaining coordinates.

**How the definition helps.** Subtracting pv cancels the chain-rule terms that direct substitution into L would leave (our own). Their coefficient is the velocity derivative of L minus p, which vanishes (our own). The original equation for the cyclic coordinate keeps p constant, and elimination requires a smooth local solution for v (our own).

**Wikipedia:** [Routhian mechanics](https://en.wikipedia.org/wiki/Routhian_mechanics). It says: “The Routhian approach has the best of both approaches, because cyclic coordinates can be split off to the Hamiltonian equations and eliminated”

**Sources:** none listed. No primary source with a working link was found.

### Dirac brackets freeze constraints

**Remember:** Invert the constraint matrix to subtract exactly the forbidden motion.

*True by definition.* MSC 70H45 (Constrained dynamics, Dirac's theory of constraints), 53D17. arXiv physics.class-ph, math.SG. Level 3: graduate.

**Definition.** A constraint is a function required to vanish, and {f,g} measures how f changes under motion generated by g. Let C be the matrix of brackets between the constraints. The constraints are second class wherever C is invertible. Define the Dirac bracket by {f,g}ᴰ = {f,g} − {f,φ}C⁻¹{φ,g}, using the row and column of brackets with the constraints φ.

**Problem.** Each constraint has zero Dirac bracket with every smooth function wherever C is invertible.

**How the definition helps.** When one function is a constraint, its row or column of C cancels against C⁻¹ (our own). This makes the correction equal to the ordinary bracket (our own). The work moves to proving invertibility and checking that the corrected bracket satisfies the Jacobi identity (our own).

**Wikipedia:** [Dirac bracket](https://en.wikipedia.org/wiki/Dirac_bracket). It says: “vanishing for an argument which is a second-class constraint.”

**Sources:**

- [P. A. M. Dirac, Generalized Hamiltonian Dynamics (1950)](https://doi.org/10.4153/CJM-1950-012-1)

### Metric variation makes the Hilbert stress tensor symmetric and gauge invariant

**Remember:** Vary a symmetric metric in a gauge-invariant action.

*True by definition. Confidence: medium.* MSC 70S05 (Lagrangian formalism and Hamiltonian formalism in mechanics of particles and systems), 83C40, 81T13. arXiv gr-qc, hep-th. Level 3: graduate.

**Definition.** The matter action is a number built from the fields and metric. Vary the inverse metric while holding the matter fields fixed. The Hilbert stress tensor is the tensor whose contraction with that variation integrates to minus twice the action variation. The canonical stress tensor instead comes from symmetry of the action under translations in flat spacetime.

**Problem.** The Hilbert stress tensor is symmetric. It is also unchanged by gauge transformations if the matter action is gauge invariant for every metric and the transformations act independently of the metric. A gauge transformation changes the field description without changing the physical system.

**How the definition helps.** Metric variation gives symmetry because the metric variations used to define the tensor are symmetric (our own). Gauge invariance follows because the transformed and original actions agree as functions of the metric, so their metric derivatives agree (our own). The canonical tensor need not have either property. Its improvement in theories such as electromagnetism takes a separate calculation. Conservation of the Hilbert tensor is a different claim and uses the matter equations and invariance under coordinate changes (our own).

**Wikipedia:** [Stress–energy tensor](https://en.wikipedia.org/wiki/Stress%E2%80%93energy_tensor). It says: “This is symmetric and gauge-invariant.”

**Sources:** none listed. No primary source with a working link was found.

### Taking gauge fields as maps into a moduli stack restores locality

**Remember:** Make the target a stack, and a gauge field becomes a plain map.

*Rules out counterexamples. Confidence: medium.* MSC 70S15 (Yang-Mills and other gauge theories in mechanics of particles and systems), 81T13, 18F20. arXiv math-ph, math.DG. Level 4: research.

**Definition.** Usually a field configuration is a section of a field bundle E → X over spacetime X. Here a field configuration is instead a map from X to a moduli stack of fields. A stack is a space-like object that also records the symmetries, here the gauge transformations, of its points. For Yang–Mills theory with gauge group G, the target is the moduli stack of G-principal bundles with connection.

**Problem.** Locality says that you get the field configurations on X by gluing the configurations on the sets of a cover of X. This must include all instanton sectors, that is, all topological types of principal bundle. In algebraic quantum field theory this shows up as the isotony axiom of a local net of observables (the axiom that the algebra of a smaller region embeds in the algebra of a larger region).

**How the definition helps.** The definition makes gluing automatic, because maps into a stack glue by the definition of a stack. In detail, the field bundle for Yang–Mills fields is a disjoint union, over instanton sectors, of the bundles of connections on each principal bundle. You cannot glue this field bundle from a cover, because every principal bundle is trivial locally, so locally there is only one sector. Benini, Dappiaggi and Schenkel found that the resulting net of observables can fail isotony. When fields are maps into the moduli stack of G-connections, the sheaf (stack) condition holds by construction. Benini, Schenkel and Szabo later used such stacks of fields. The analytic work of quantization still has to be done.

**nLab:** [field (physics)](https://ncatlab.org/nlab/show/field+%28physics%29), [field bundle](https://ncatlab.org/nlab/show/field+bundle). It says: “In summary: there cannot be a fiber bundle such that its sheaf of local sections is the sheaf of configurations of the Yang-Mills field. But there is a fiber 2-bundle whose stack of sections is the stack of configurations of the Yang-Mills field.”

**Sources:**

- [Marco Benini, Claudio Dappiaggi, Alexander Schenkel, Quantized Abelian principal connections on Lorentzian manifolds, Communications in Mathematical Physics 330 (2014) 123–152, arXiv:1303.2515](https://arxiv.org/abs/1303.2515)
- [Marco Benini, Alexander Schenkel, Richard J. Szabo, Homotopy colimits and global observables in Abelian gauge theory, Letters in Mathematical Physics 105 (2015) 1193–1222, arXiv:1503.08839](https://arxiv.org/abs/1503.08839)
