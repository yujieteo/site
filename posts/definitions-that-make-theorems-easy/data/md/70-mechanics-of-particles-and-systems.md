### Lange's inertial frames make Newton's first law partly a definition

**Remember:** Three straight throws define the frame; the rest is physics.

*True by definition. Confidence: medium.* MSC 70A05 (Axiomatics, foundations), 01A55. arXiv physics.class-ph, physics.hist-ph. Level 1: early undergraduate.

**Definition.** Ludwig Lange defined an inertial frame in 1885 by free motion. In such a frame, free mass points thrown from one point in three directions, not all in one plane, move in straight lines. He wanted an operational definition to replace Newton's absolute space and time.

**Problem.** Newton's first law says that a body with no net force moves in a straight line at constant speed. In Lange's inertial frames this holds by definition for three free bodies. The physical content that remains is that such frames exist and that every other free body then also moves straight.

**How the definition helps.** Lange's definition uses only observable free motion, so the first law stops depending on absolute space. Part of the law is then true by definition, and the claim about all other free bodies is the real physical statement (our own reading). The page notes that the definition belongs to Newtonian mechanics and ignores relativistic effects. What stays hard is to know that a body is free of force, which leads back to the second law (our own). General relativity gives up global inertial frames altogether (our own).

**Wikipedia:** [Inertial frame of reference](https://en.wikipedia.org/wiki/Inertial_frame_of_reference). It says: “A reference frame in which a mass point thrown from the same point in three different (non co-planar) directions follows rectilinear paths each time it is thrown, is called an inertial frame.”

**Sources:** none listed. No primary source with a working link was found.

### Defining conservative forces by path independence makes potential energy exist

**Remember:** Path-independent work is exactly what a potential energy needs.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics), 70G45. arXiv physics.class-ph. Level 1: early undergraduate.

**Definition.** A force field is conservative if the work it does in moving a particle between two points does not depend on the path. Equivalently, the work around every closed path is zero.

**Problem.** A conservative force is the negative gradient of a potential energy, F = −∇Φ, so mechanical energy is conserved. The test 'curl F = 0' is equivalent to this only on simply connected regions, where every loop can shrink to a point.

**How the definition helps.** Path independence is exactly what makes 'minus the work from a base point to x' a well-defined function Φ(x) (our own sketch). Then F = −∇Φ follows by differentiating, so a potential exists almost by definition. The curl test is a separate theorem, proved with Stokes's theorem, and it needs a region in which every loop bounds a surface. Our own counterexample: the field (−y, x)/(x² + y²) around the origin has zero curl, but it does work 2π around the unit circle. What stays hard is this topology: curl-free fields modulo gradients are measured by de Rham cohomology (our own).

**Wikipedia:** [Conservative force](https://en.wikipedia.org/wiki/Conservative_force). It says: “In physics, a conservative force is a force with the property that the total work done by the force in moving a particle between two points is independent of the path taken.”

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
