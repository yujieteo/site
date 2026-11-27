### Lange's inertial frames make Newton's first law partly a definition

**Remember:** Three straight throws define the frame; the rest is physics.

*True by definition. Confidence: medium.* MSC 70A05 (Axiomatics, foundations), 01A55. arXiv physics.class-ph, physics.hist-ph. Level 1: early undergraduate.

**Definition.** In Lange’s definition, an inertial frame admits three free particles launched from one point in noncoplanar directions whose paths are straight.

**Problem.** In a Lange inertial frame, three free bodies thrown in non-coplanar directions move in straight lines by definition. The physical content of Newton's first law is that such frames exist and that every other free body then also moves in a straight line.

**How the definition helps.** The three reference paths are straight by the frame criterion. Existence of such frames and straight motion for other free bodies are empirical claims (our own reading).

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

**Problem.** A continuous conservative force on an open connected region has a potential energy Φ satisfying F = −∇Φ. A particle subject only to this time-independent force conserves mechanical energy.

**How the definition helps.** Path independence assigns a unique potential Φ(x) equal to minus the work from a fixed base point to x (our own). Differentiating along short coordinate segments gives F = −∇Φ. The work–energy theorem then gives conservation of kinetic plus potential energy (our own).

**Wikipedia:** [Conservative force](https://en.wikipedia.org/wiki/Conservative_force). It says: “In physics, a conservative force is a force with the property that the total work done by the force in moving a particle between two points is independent of the path taken.”

**Sources:** none listed. No primary source with a working link was found.

### The damping ratio gives one threshold for oscillations

**Remember:** Divide drag by twice the square root of mass times stiffness.

*Makes the theorem clean to state or prove.* MSC 70J30 (Free motions in linear vibration theory). arXiv math-ph. Level 1: early undergraduate.

**Definition.** For a mass m with a spring of stiffness k and a drag force −cq̇, define the damping ratio ζ=c/(2√(km)). Take m and k positive and c nonnegative.

**Problem.** Every nonzero free motion crosses equilibrium repeatedly when ζ&lt;1. When ζ≥1, each nonzero free motion crosses equilibrium at most once.

**How the definition helps.** The damping ratio puts the dividing line at one for every choice of mass and spring. In our own derivation, measuring time in units of √(m/k) gives the polynomial s²+2ζs+1 for exponential solutions. Below one, the solutions contain sines and cosines. At or above one, the real exponential solutions, including a time factor for a repeated root, allow at most one crossing.

**Wikipedia:** [Damping](https://en.wikipedia.org/wiki/Damping). It says: “The damping ratio expresses the level of damping in a system relative to critical damping”

**Sources:** none listed. No primary source with a working link was found.

### Inertia operators reveal principal axes

**Remember:** Diagonalize the inertia operator to find the spin axes.

*True by definition.* MSC 70E15 (Free motion of a rigid body), 70B10. arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** For rotation about a fixed point, the inertia operator I sends angular velocity to angular momentum about that point. A principal axis is a line through the point whose direction is an eigenvector of I.

**Problem.** A three-dimensional rigid body has an orthonormal basis of principal axes. Angular momentum is parallel to angular velocity for rotation about each one.

**How the definition helps.** The operator gives every principal axis at once by the spectral theorem for real symmetric matrices (our own). Finding the scalar moment about one chosen axis alone does not identify the other axes (our own). The mass integral gives a symmetric matrix because each mass contributes a symmetric matrix (our own).

**nLab:** [moment of inertia](https://ncatlab.org/nlab/show/moment+of+inertia). It says: “This linear function is additionally symmetric with respect to the induced inner product”

**Sources:** none listed. No primary source with a working link was found.

### Poinsot’s ellipsoid rolls without slipping

**Remember:** Fix the energy and the spin vectors form the body’s ellipsoid.

*Makes the theorem clean to state or prove.* MSC 70E15 (Free motion of a rigid body), 70G45. arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Work in a frame moving with the center of mass and with axes fixed in direction. Let I send angular velocity to angular momentum about that center. Attach to the body the ellipsoid of vectors u satisfying u · Iu = 2T, where T is its rotational kinetic energy.

**Problem.** For torque-free rotation about the center of mass with nonzero spin and positive definite inertia, the ellipsoid rolls without slipping. Its point of contact with a fixed plane is the tip of the angular velocity vector.

**How the definition helps.** The energy equation puts the spin vector on the ellipsoid with its normal parallel to the conserved angular momentum (our own). Their dot product is twice the conserved energy, so the tangent plane has fixed direction and height (our own). The contact point lies on the instantaneous spin axis and therefore has zero velocity in this frame (our own). Conservation of energy and angular momentum supplies the dynamical part of the proof (our own).

**Wikipedia:** [Poinsot's ellipsoid](https://en.wikipedia.org/wiki/Poinsot%27s_ellipsoid). It says: “Its inertia ellipsoid rolls, without slipping, on the invariable plane, with the center of the ellipsoid a constant height above the plane.”

**Sources:** none listed. No primary source with a working link was found.

### Mass centers give parallel axis shifts

**Remember:** Shift from the mass center and the cross term vanishes.

*True by definition.* MSC 70E99 (Dynamics of a rigid body and of multibody systems). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** The center of mass is the point from which the mass-weighted displacements sum to zero. The moment of inertia about an axis sums mass times squared perpendicular distance.

**Problem.** Moving an axis a perpendicular distance d from a parallel axis through the center of mass increases the moment of inertia by Md². Here M is total mass.

**How the definition helps.** Choosing the center of mass as origin removes the cross term that an arbitrary origin would leave (our own). Projecting each displacement onto the plane perpendicular to the axes preserves its zero mass-weighted sum (our own). The squared shift then contributes Md² (our own).

**Wikipedia:** [Parallel axis theorem](https://en.wikipedia.org/wiki/Parallel_axis_theorem). It says: “which is zero since the center of mass lies at the origin.”

**Sources:** none listed. No primary source with a working link was found.

### Effective potential makes a circular orbit a radial equilibrium

**Remember:** Put angular kinetic energy beside potential energy before testing the radius.

*Makes the theorem clean to state or prove.* MSC 70F05 (Two-body problems), 70H03. arXiv math-ph. Level 2: later undergraduate.

**Definition.** For a particle of mass m in a central potential V(r), fix the magnitude ℓ of its angular momentum. The effective potential U(r)=V(r)+ℓ²/(2mr²) includes the kinetic energy due to turning about the center.

**Problem.** For nonzero ℓ, circular orbits occur exactly at radii r&gt;0 where U′(r)=0. A strict local minimum gives radial stability at fixed ℓ, and U″&lt;0 at a critical point gives radial instability.

**How the definition helps.** In our own derivation, conservation of angular momentum gives mr̈=−U′(r), the equation for motion in one dimension. Energy traps small radial motions near a strict minimum. Our own instability test uses the growing solution of the linearized equation when U″&lt;0.

**Wikipedia:** [Effective potential](https://en.wikipedia.org/wiki/Effective_potential). It says: “A circular orbit may be either stable or unstable.”

**Sources:** none listed. No primary source with a working link was found.

### Kepler velocity traces a circle

**Remember:** Fix the velocity vector’s tail and trace its tip.

*Makes the theorem clean to state or prove.* MSC 70F05 (Two-body problems), 70F15. arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Define the hodograph as the path of the velocity vector’s tip, with its tail fixed at the origin. This tracks motion in velocity space rather than position space.

**Problem.** Under an attractive inverse-square force with nonzero angular momentum, the velocities lie on a circle. An unbound orbit may trace only part of that circle.

**How the definition helps.** The hodograph makes the orbit equation an integral of a rotating unit vector in velocity space (our own). Conservation of angular momentum gives an angular speed proportional to inverse squared distance (our own). Acceleration contains the same distance factor, so velocity differentiated with respect to angle is a constant times the radial unit vector (our own). Integration gives a fixed vector plus a rotating vector of constant length (our own).

**Wikipedia:** [Hodograph](https://en.wikipedia.org/wiki/Hodograph). It says: “The hodograph may be defined as the path traced out by the extremity of a vector which continually represents, in direction and magnitude, the velocity of a moving body.”

**Sources:**

- [William Rowan Hamilton, The Hodograph, or a New Method of Expressing in Symbolical Language the Newtonian Law of Attraction (1847)](https://www.maths.tcd.ie/pub/HistMath/People/Hamilton/Hodograph/)

### Reciprocal radius linearizes Kepler orbits

**Remember:** Use reciprocal distance and angle to straighten the Kepler equation.

*Makes the theorem clean to state or prove.* MSC 70F05 (Two-body problems), 70F15. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** Describe a central-force orbit using the reciprocal radius u = 1/r as a function of polar angle θ. Use the conserved angular momentum to trade the time variable for θ.

**Problem.** For an attractive inverse-square force and nonzero angular momentum, u is a constant plus a sinusoid in θ. Hence each orbit is part of a conic with a focus at the force center.

**How the definition helps.** Using reciprocal radius and polar angle turns Newton’s radial equation into u″ + u = k/h² (our own). Here primes mean angle derivatives, k is the inverse-square attraction strength per unit mass, and h is angular momentum per unit mass (our own). Conservation of h justifies changing the independent variable from time to angle (our own). Solving the linear equation gives the polar equation of a conic (our own).

**Wikipedia:** [Binet equation](https://en.wikipedia.org/wiki/Binet_equation). It says: “For the Binet equation, the orbital shape is instead more concisely described by the reciprocal u = 1/r as a function of θ.”

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

### Bounded virials give energy averages

**Remember:** Sum position dotted with momentum over all particles.

*Makes the theorem clean to state or prove.* MSC 70F10 (\\(n\\)-body problems), 70H33. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** Define the virial function as the sum of each particle’s position dotted with its momentum. It equals half the time derivative of the sum of the masses times squared distances from the origin.

**Problem.** Consider Newtonian particles of constant mass acted on only by a potential homogeneous of degree n. Scaling every position by a positive factor scales the potential by its nth power. If the virial stays bounded and both long-time means exist, twice mean kinetic energy equals n times mean potential energy.

**How the definition helps.** The virial puts the difference between the two energy terms into a single time derivative (our own). Newton’s law and Euler’s identity for a homogeneous potential give the derivative as twice kinetic energy minus n times potential energy (our own). Averaging that derivative divides a bounded endpoint difference by elapsed time, so its mean vanishes (our own).

**Wikipedia:** [Virial theorem](https://en.wikipedia.org/wiki/Virial_theorem). It says: “Thus, twice the average total kinetic energy ⟨T⟩ equals n times the average total potential energy”

**Sources:**

- [Rudolf Clausius, On a Mechanical Theorem Applicable to Heat (1870)](https://doi.org/10.1080/14786447008640370)

### Central configurations scale without changing shape

**Remember:** One common inward acceleration factor lets one scale govern every body.

*Makes the theorem clean to state or prove.* MSC 70F10 (\\(n\\)-body problems). arXiv physics.class-ph, math.DS. Level 2: later undergraduate.

**Definition.** In a central configuration, each gravitational acceleration is the same negative multiple of its displacement from the center of mass. This is stronger than just requiring each acceleration to point toward the center.

**Problem.** Two or more positive Newtonian point masses released from rest in a collision-free central configuration keep their shape until total collision.

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

### Eccentric anomaly gives orbital time

**Remember:** Use the circle’s angle to measure the ellipse’s swept area.

*True by definition.* MSC 70F15 (Celestial mechanics). arXiv astro-ph.EP. Level 2: later undergraduate.

**Definition.** For a noncircular Kepler ellipse, draw the circle with the major axis as diameter. Compress distances from that axis by the minor-to-major axis ratio to map the circle onto the ellipse. Measure the eccentric anomaly around the circle in the direction of motion, from the periapsis ray to the body’s preimage.

**Problem.** During one revolution, the elapsed fraction of a period since closest approach is (E − e sin E)/(2π). Here e is the eccentricity.

**How the definition helps.** The circle angle turns the swept area into a sector area minus a triangle area. In our own derivation, compression multiplies the swept area and the whole circle area by the same factor. Kepler’s equal-area law converts the resulting area fraction to elapsed time as a fraction of the period.

**Wikipedia:** [Kepler's equation](https://en.wikipedia.org/wiki/Kepler%27s_equation). It says: “M = E − e sin E”

**Sources:** none listed. No primary source with a working link was found.

### Eccentricity vectors include circles

**Remember:** A circular orbit has a zero eccentricity vector, with no preferred direction.

*Makes the theorem clean to state or prove.* MSC 70F15 (Celestial mechanics). arXiv astro-ph.EP. Level 2: later undergraduate.

**Definition.** Let r ≠ 0 and v denote relative position and velocity in the Newtonian two-body problem. With μ equal to the gravitational constant times the combined mass, the eccentricity vector is (v × (r × v))/μ − r/\|r\|.

**Problem.** For a Kepler orbit with nonzero angular momentum, the eccentricity vector is constant. The formula gives zero for a circle without a separate choice of direction.

**How the definition helps.** A single vector represents both orbital shape and closest approach, including the circular case where no direction is preferred. In our own calculation, differentiating the vector and using inverse-square acceleration makes its derivative zero. On a circular orbit its two terms cancel. Identifying its length and direction uses the geometric orbit equation.

**Wikipedia:** [Kepler orbit](https://en.wikipedia.org/wiki/Kepler_orbit). It says: “For a "close to circular" orbit the concept "eccentricity vector" defined as”

**Sources:** none listed. No primary source with a working link was found.

### Homogeneous constraints conserve mechanical energy

**Remember:** A homogeneous constraint makes the actual velocity a direction of zero reaction work.

*Rules out counterexamples.* MSC 70F25 (Nonholonomic systems related to the dynamics of a system of particles), 70H33. arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** A homogeneous linear velocity constraint restricts velocities to a vector subspace at each position. An ideal reaction force does no work on any vector in that subspace.

**Problem.** An autonomous mechanical system with conservative applied forces and ideal homogeneous linear velocity constraints conserves energy.

**How the definition helps.** Homogeneity makes the actual velocity one of the directions on which an ideal constraint force does no work (our own). Taking the dot product of Newton’s law with velocity then gives energy conservation (our own). A bead constrained to climb a straight incline at a prescribed positive speed has constant kinetic energy and gains potential energy (our own). Its constraint force supplies the difference (our own).

**Wikipedia:** [D'Alembert's principle](https://en.wikipedia.org/wiki/D%27Alembert%27s_principle). It says: “projected onto any virtual displacement consistent with the constraints of the system is zero.”

**Sources:** none listed. No primary source with a working link was found.

### Generalized momentum makes cyclic coordinates yield constants

**Remember:** No dependence on position means no change in its momentum.

*True by definition.* MSC 70H03 (Lagrange's equations), 70H33. arXiv math-ph. Level 2: later undergraduate.

**Definition.** A coordinate q is cyclic if the Lagrangian L, the function integrated over time to give the action, is independent of q. Its generalized momentum is ∂L/∂q̇, where q̇ is the rate of change of q.

**Problem.** Along every solution of Lagrange’s equations, the generalized momentum of a cyclic coordinate is constant.

**How the definition helps.** In our own explanation, the cyclic coordinate removes the position derivative from Lagrange’s equation, leaving zero for the time derivative of its momentum. For a particle of mass m in a central potential, the polar angle θ is cyclic. Its momentum mr²θ̇ stays constant, giving the inverse-square angular rate in the source.

**Paper or page:** [Derivative of Angular Component under Central Force](https://proofwiki.org/wiki/Derivative_of_Angular_Component_under_Central_Force). It says: “Then the rate of change of the angular coordinate of p is inversely proportional to the square of the radial coordinate of p.”

**Sources:** none listed. No primary source with a working link was found.

### Stationary action ignores total time derivatives at fixed endpoints

**Remember:** A total derivative changes the action only by a fixed endpoint term.

*True by definition.* MSC 70H03 (Lagrange's equations), 70H25. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** The action is the time integral of the Lagrangian, a function of position, velocity, and time. A motion is a path whose action has zero first variation when both endpoint times and positions are fixed.

**Problem.** If f depends smoothly on position and time, adding its total time derivative to the Lagrangian leaves the equations of motion unchanged.

**How the definition helps.** Stationary action makes the added term irrelevant because its integral depends only on the fixed endpoints. The fundamental theorem of calculus gives the difference of f at those endpoints. The differential-equation formulation instead checks that the Euler–Lagrange operator sends this extra term to zero (our own). The work moves into the theorem that stationary paths are exactly the solutions of those equations (our own).

**Wikipedia:** [Lagrangian mechanics](https://en.wikipedia.org/wiki/Lagrangian_mechanics). It says: “Both Lagrangians L and L′ produce the same equations of motion since the corresponding actions S and S′ are related via”

**Sources:** none listed. No primary source with a working link was found.

### Independent momentum variations give Hamilton's equations

**Remember:** Vary momentum and position separately to get one equation from each.

*True by definition.* MSC 70H05 (Hamilton's equations). arXiv math-ph. Level 2: later undergraduate.

**Definition.** For position q, momentum p and a smooth Hamiltonian H, the phase space action is ∫(p·q̇−H(t,q,p)) dt. It treats q and p as independent paths.

**Problem.** With endpoint positions fixed, this action is stationary exactly when q̇=∂H/∂p and ṗ=−∂H/∂q.

**How the definition helps.** Independent variations test the position and momentum equations separately. In our own derivation, varying p gives the velocity equation directly. Varying q and integrating by parts gives the momentum equation because the position variation vanishes at both ends.

**Paper or page:** [Conditions for Functional to be Extremum of Two-variable Functional over Canonical Variable p](https://proofwiki.org/wiki/Conditions_for_Functional_to_be_Extremum_of_Two-variable_Functional_over_Canonical_Variable_p). It says: “Let J\[y,p\] = ∫ₐᵇ (−H(x,y,p) + py′) dx, where H is the Hamiltonian of J\[y\].”

**Sources:** none listed. No primary source with a working link was found.

### Poisson brackets test conservation without solving for trajectories

**Remember:** The bracket gives change from motion and the time derivative gives the rest.

*Makes the theorem clean to state or prove.* MSC 70H05 (Hamilton's equations), 70H33. arXiv math-ph. Level 2: later undergraduate.

**Definition.** The Poisson bracket {F,H} pairs each position derivative of F with the matching momentum derivative of H. It adds their products and subtracts the products with F and H swapped. The functions can also depend on time.

**Problem.** A smooth quantity F is constant along every local Hamiltonian trajectory exactly when ∂F/∂t+{F,H}=0 throughout the domain.

**How the definition helps.** In our own derivation, the bracket bundles the chain rule terms after Hamilton's equations replace the velocities. For the converse, existence of a local trajectory through every point at each time gives the equation throughout the domain.

**Paper or page:** [Conditions for Function to be First Integral of Euler's Equations for Vanishing Variation](https://proofwiki.org/wiki/Conditions_for_Function_to_be_First_Integral_of_Euler's_Equations_for_Vanishing_Variation). It says: “Then a necessary and sufficient condition for Φ to be the first integral of Euler's Equations is ∂Φ/∂x + \[Φ,H\] = 0”

**Sources:** none listed. No primary source with a working link was found.

### The velocity Legendre transform gives both Hamilton equations

**Remember:** Trade velocity for momentum and the unwanted velocity derivatives cancel.

*True by definition.* MSC 70H05 (Hamilton's equations), 70H03. arXiv math-ph. Level 2: later undergraduate.

**Definition.** Define p as the velocity derivative of L(t,q,v). Where this map has a smooth inverse in v, define the Hamiltonian H(t,q,p)=p·v−L(t,q,v) using that inverse.

**Problem.** Under this locally invertible change of variables, Lagrange's equations become q̇=∂H/∂p and ṗ=−∂H/∂q.

**How the definition helps.** The transform collects the velocity terms that would otherwise appear when rewriting Lagrange’s equations in momentum coordinates. In our own derivation, derivatives of the substituted velocity cancel because ∂L/∂v=p. Thus ∂H/∂p=v and ∂H/∂q=−∂L/∂q. The inverse function theorem supplies the local inverse when the matrix of second velocity derivatives is nonsingular.

**Paper or page:** [Euler's Equation for Vanishing Variation in Canonical Variables](https://proofwiki.org/wiki/Euler's_Equation_for_Vanishing_Variation_in_Canonical_Variables). It says: “Then the system (1) is transformed into: dyᵢ/dx = ∂H/∂pᵢ”

**Sources:** none listed. No primary source with a working link was found.

### A generating function preserves Hamilton's equations through endpoint terms

**Remember:** Differentiate the generator in old and new positions, negating the new-position derivative.

*True by definition.* MSC 70H15 (Canonical and symplectic transformations for problems in Hamiltonian and Lagrangian mechanics), 70H05. arXiv math-ph. Level 2: later undergraduate.

**Definition.** A generating function F(t,q,Q) defines a change from (q,p,H) to (Q,P,K) by p=∂F/∂q, P=−∂F/∂Q and K=H+∂F/∂t. Use it where these equations define a smooth invertible change of position and momentum.

**Problem.** The change defined by such a generating function sends solutions of Hamilton's equations for H to solutions for K.

**How the definition helps.** The generating function replaces direct transformation of both Hamilton equations with a single total derivative. In our own calculation, the old action integrand minus the new one equals dF/dt. Its integral depends only on endpoints, so variations supported inside the time interval preserve stationarity. The remaining work is deriving Hamilton’s equations from stationarity and checking the change is invertible.

**Wikipedia:** [Canonical transformation](https://en.wikipedia.org/wiki/Canonical_transformation). It says: “Both sets of variables must obey Hamilton's principle.”

**Sources:** none listed. No primary source with a working link was found.

### Stationary action includes motions that do not minimize it

**Remember:** Motion needs zero first change, not least action.

*Makes the theorem clean to state or prove.* MSC 70H25 (Hamilton's principle), 70H03. arXiv math-ph. Level 2: later undergraduate.

**Definition.** The action of a particle of mass m&gt;0 in a smooth potential V is the time integral of m\|q̇\|²/2−V(q). A path has stationary action if every smooth fixed-end perturbation gives zero first derivative of the action.

**Problem.** A smooth path satisfies Newton’s equation mq̈=−∇V exactly when its action is stationary. A stationary path can fail to minimize the action.

**How the definition helps.** Stationarity tests the equation of motion one perturbation at a time. In our own derivation, integration by parts pairs −mq̈−∇V with each perturbation, so stationarity forces this coefficient to vanish. For the oscillator with m=1 and V(q)=q²/2, the zero path is stationary. Our own perturbation ε sin(πt/T) on \[0,T\] lowers its action whenever T&gt;π and ε≠0.

**Wikipedia:** [Action (physics)](https://en.wikipedia.org/wiki/Action_%28physics%29). It says: “is stationary (a minimum, maximum, or a saddle point).”

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

### The Rayleigh quotient gives the lowest vibration frequency

**Remember:** The lowest frequency squared is the least restoring energy per unit inertia.

*Makes the theorem clean to state or prove.* MSC 70J10 (Modal analysis in linear vibration theory). arXiv math-ph. Level 2: later undergraduate.

**Definition.** For a nonzero displacement u, the vibration Rayleigh quotient is (u·Ku)/(u·Mu). Here K measures the restoring force and M measures inertia. Both are symmetric positive definite, meaning their quadratic forms are positive on nonzero displacements.

**Problem.** For Mq̈+Kq=0, the least squared frequency of a vibration with fixed shape equals the minimum of the vibration Rayleigh quotient.

**How the definition helps.** In our own calculation, the quotient is a weighted average of squared frequencies, so it cannot fall below the smallest. The spectral theorem supplies vibration shapes perpendicular in the mass inner product u·Mv. Choosing a shape with the lowest frequency attains the bound.

**Wikipedia:** [Rayleigh quotient](https://en.wikipedia.org/wiki/Rayleigh_quotient). It says: “This is immediate after observing that the Rayleigh quotient is a weighted average of eigenvalues of M”

**Sources:** none listed. No primary source with a working link was found.

### Positive stiffness removes the drifting zero mode

**Remember:** Zero stiffness can leave free drift instead of an oscillation.

*Rules out counterexamples.* MSC 70J25 (Stability for problems in linear vibration theory), 70J10. arXiv math-ph. Level 2: later undergraduate.

**Definition.** A stiffness matrix K is positive definite if every nonzero displacement u has u·Ku&gt;0. Positive semidefinite stiffness instead allows this value to be zero. Assume symmetric K and a symmetric positive definite mass matrix M.

**Problem.** Every solution of Mq̈+Kq=0 with positive definite stiffness is a sum of bounded sinusoidal motions.

**How the definition helps.** In our own explanation, positive stiffness makes each squared frequency positive, so each normal coordinate solves an oscillator equation. The work is diagonalizing stiffness in coordinates where the mass matrix is the identity. Our own example is a freely translating mass with K=0, which can drift forever at constant nonzero speed.

**Wikipedia:** [Normal mode](https://en.wikipedia.org/wiki/Normal_mode). It says: “The most general motion of a linear system is a superposition of its normal modes.”

**Sources:** none listed. No primary source with a working link was found.

### Inertia metrics make rotation geodesic

**Remember:** Use rotational kinetic energy as the ruler for orientations.

*Makes the theorem clean to state or prove.* MSC 70E15 (Free motion of a rigid body), 70G45. arXiv physics.class-ph, math-ph. Level 3: graduate.

**Definition.** For a rigid body with positive definite inertia I about its center of mass, define a metric on its orientation space SO(3). At each orientation, assign squared length ω·Iω to every tangent velocity with angular velocity ω expressed in body coordinates.

**Problem.** Without external torque about the center of mass, the orientation follows a geodesic of this metric in physical time. A geodesic here is a path stationary for the integral of squared speed with fixed endpoints.

**How the definition helps.** The metric makes the rotational action exactly half the integral of squared speed (our own). The stationary-action principle therefore gives the geodesic equation in physical time (our own). The mechanical step identifies the kinetic energy for each orientation from the inertia measured in axes attached to the body (our own).

**nLab:** [Hamiltonian dynamics on Lie groups](https://ncatlab.org/nlab/show/Hamiltonian+dynamics+on+Lie+groups). It says: “The left invariant metric ⟨−, −⟩ is the moment of inertia of the body.”

**Sources:**

- [Vladimir Arnold, Sur la géométrie différentielle des groupes de Lie de dimension infinie et ses applications à l’hydrodynamique des fluides parfaits (1966)](https://www.numdam.org/item/AIF_1966__16_1_319_0/)

### Radial powers straighten zero-energy paths

**Remember:** Rescale radius and angle to unfold the orbit.

*Makes the theorem clean to state or prove.* MSC 70F05 (Two-body problems). arXiv math.DS, math.DG. Level 3: graduate.

**Definition.** On the punctured plane, scale squared Euclidean length by r⁻ᵅ, where r is distance from the origin and 0 &lt; α &lt; 2. Put c = 1 − α/2. Use radius ρ = rᶜ/c and angle φ = cθ, with angles identified modulo 2πc.

**Problem.** The new coordinates turn r⁻ᵅ times squared Euclidean length into the flat cone metric dρ² + ρ²dφ². Its geodesics become straight lines on the unfolded cone. Up to a change of time, they are the zero-energy orbits of H = \|p\|²/2 − r⁻ᵅ.

**How the definition helps.** The new radius absorbs the radial length factor, and the new angle gives the matching angular factor (our own). Substitution gives dρ² + ρ²dφ², the Euclidean length rule in polar coordinates (our own). The Jacobi–Maupertuis theorem identifies geodesics of this metric with the zero-level Hamiltonian orbits up to time change.

**Paper or page:** [The Kepler Cone, Maclaurin Duality and Jacobi-Maupertuis metrics](https://arxiv.org/abs/2312.08173). It says: “is isometric to the conical metric”

**Sources:**

- [The Kepler Cone, Maclaurin Duality and Jacobi-Maupertuis metrics](https://arxiv.org/abs/2312.08173)

### Jacobi energy bounds accessible regions

**Remember:** Add rotating-frame kinetic energy to the gravitational and centrifugal potentials.

*True by definition.* MSC 70F07 (Three-body problems), 37N05. arXiv math.DS, astro-ph.EP. Level 3: graduate.

**Definition.** Use the frame rotating with the primaries in the circular restricted three-body problem. The effective potential per unit mass adds their gravitational potential to the centrifugal potential. The Jacobi energy per unit mass adds half the squared rotating-frame speed to this effective potential.

**Problem.** For a third body of negligible mass, the effective potential along its trajectory cannot exceed its fixed Jacobi energy.

**How the definition helps.** Jacobi energy splits into a fixed total and two terms, one of which is nonnegative by definition (our own). Ordinary inertial energy gives no fixed bound because the two masses move (our own). Conservation in the rotating frame requires the equations of motion (our own). The effective potential is stationary there, and the Coriolis acceleration is perpendicular to velocity, so it does no work (our own).

**Wikipedia:** [Jacobi integral](https://en.wikipedia.org/wiki/Jacobi_integral). It says: “conserved quantity for the circular restricted three-body problem”

**Sources:** none listed. No primary source with a working link was found.

### Central configurations collapse without distortion

**Remember:** One inward acceleration factor gives every body the same shrink rate.

*Makes the theorem clean to state or prove.* MSC 70F15 (Celestial mechanics), 37N05. arXiv math.DS, astro-ph.EP. Level 3: graduate.

**Definition.** Start with positive point masses at distinct positions. Their positions form a central configuration if each gravitational acceleration equals a common negative constant times displacement from the center of mass.

**Problem.** If at least two masses start at rest in a Newtonian central configuration, their positions keep the same shape until total collision. All masses reach their center of mass in finite time.

**How the definition helps.** Because the acceleration factors match, one scale factor describes the motion of every mass (our own). Newton’s inverse-square law makes the common inward acceleration scale as the inverse square of that factor (our own). The remaining work is to solve the scalar fall equation and show it reaches zero in finite time (our own).

**Wikipedia:** [Central configuration](https://en.wikipedia.org/wiki/Central_configuration). It says: “directly towards the center of mass, with acceleration proportional to its distance from the center.”

**Sources:** none listed. No primary source with a working link was found.

### Kepler collisions become oscillator paths

**Remember:** Square the new coordinate and slow the physical clock near collision.

*Makes the theorem clean to state or prove.* MSC 70F16 (Collisions in celestial mechanics, regularization), 70F05. arXiv math.DS, physics.class-ph. Level 3: graduate.

**Definition.** For planar Kepler motion with complex position q and momentum p, write q = u² and v = 2 conjugate(u) p. At fixed energy E, set K = \|u\|²(H − E), where H = \|p\|²/2 − k/\|q\| and k &gt; 0. For the new time τ, set dt/dτ = \|u\|².

**Problem.** At negative energy the planar Kepler problem becomes a harmonic oscillator in the new variables. The oscillator trajectory extends smoothly through u = 0.

**How the definition helps.** Squaring the position and changing time cancel both singular terms, leaving K = \|v\|²/8 − E\|u\|² − k (our own). For E &lt; 0 this is an oscillator Hamiltonian, smooth even at u = 0 (our own). Away from collision the work is verifying the momentum change and the clock relation on K = 0 (our own).

**Wikipedia:** [Levi-Civita regularization](https://en.wikipedia.org/wiki/Levi-Civita_regularization). It says: “is a method to transform the perturbed planar Kepler problem into a perturbed harmonic oscillator”

**Sources:**

- [Tullio Levi-Civita, Sur la régularisation du problème des trois corps (1920)](https://doi.org/10.1007/BF02404404)

### Moser coordinates reveal great circles

**Remember:** Swap position and momentum to see the sphere.

*Makes the theorem clean to state or prove.* MSC 70F16 (Collisions in celestial mechanics, regularization). arXiv physics.class-ph. Level 3: graduate.

**Definition.** On H = \|p\|²/2 − 1/\|q\| = −1/2, set x = p and y = −q. Interpret x as stereographic coordinates on the unit sphere and y as covector components in those coordinates. The new Hamiltonian K = \|y\|(1 + \|x\|²)/2 is the covector’s spherical length.

**Problem.** On this energy surface, the coordinate change takes Hamiltonian orbits to unit spherical covectors tracing great circles, up to a change of time. The spherical flow continues through the missing pole.

**How the definition helps.** The coordinate swap preserves the symplectic form (our own). Since K − 1 = \|q\|(H + 1/2), the Hamiltonian fields differ only by the positive factor \|q\| on this level (our own). The spherical length Hamiltonian generates unit-speed geodesics there, and great circles extend through the pole (our own).

**Wikipedia:** [Moser regularization](https://en.wikipedia.org/wiki/Moser_regularization). It says: “into a geodesic flow on the sphere using the Moser (regularization) map”

**Sources:**

- [Jürgen Moser, Regularization of Kepler’s problem and the averaging method on a manifold](https://doi.org/10.1002/cpa.3160230406)

### Allowed symmetries conserve constrained momentum

**Remember:** A symmetry keeps its momentum when its direction cannot feel the reaction.

*Rules out counterexamples.* MSC 70F25 (Nonholonomic systems related to the dynamics of a system of particles), 70H33. arXiv physics.class-ph, math-ph. Level 3: graduate.

**Definition.** Let a smooth one-parameter group act on configuration space and preserve the Lagrangian under its induced action on velocities. Its generator at each position is the derivative of the group orbit at parameter zero. The symmetry is horizontal if its generator is an allowed velocity at every position.

**Problem.** Suppose the allowed velocities form a vector space at each position and constraint forces do no work along those directions. For a horizontal symmetry, momentum evaluated on its direction stays constant.

**How the definition helps.** Horizontality makes the constraint force contribute zero to the rate of change of the symmetry momentum (our own). The remaining contribution vanishes because the symmetry preserves the Lagrangian (our own). A vertical disk rolling without slipping admits horizontal translations, but a sideways velocity violates the rolling constraint (our own). When its heading turns, its linear momentum can change (our own).

**Paper or page:** [Affine generalizations of the nonholonomic problem of a convex body rolling without slipping on the plane](https://arxiv.org/abs/2409.08072v1). It says: “ξ is a horizontal symmetry), then Jξ\|𝒟 is a first integral of the nonholonomic system (L, Q, 𝒟).”

**Sources:**

- [Affine generalizations of the nonholonomic problem of a convex body rolling without slipping on the plane](https://arxiv.org/abs/2409.08072v1)

### Contact geometry preserves zero energy

**Remember:** Evaluate the contact field equations on the field itself to recover the energy law.

*True by definition.* MSC 70G45 (Differential geometric methods (tensors, connections, symplectic, Poisson, contact, Riemannian, nonholonomic, etc.) for problems in mechanics). arXiv math-ph, math.DG. Level 3: graduate.

**Definition.** On a contact manifold with contact form η, the Reeb field R satisfies η(R) = 1 and dη(R, ·) = 0. For smooth h, its contact Hamiltonian field X satisfies η(X) = −h and dη(X, ·) = dh − R(h)η.

**Problem.** A smooth autonomous contact Hamiltonian h stays zero along any trajectory that starts at zero. Its sign stays fixed on every trajectory where it starts nonzero.

**How the definition helps.** The form equations give one scalar equation for h along a trajectory, without solving Hamilton’s coordinate equations (our own). Skew symmetry gives dη(X, X) = 0, so X(h) = −R(h)h. Integration multiplies the initial value by a positive exponential (our own). The comparison step expresses the coordinate equations in terms of η and dη (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650). It says: “ℒ(Xₕ)h = −(ℛ(h))h.”

**Sources:** none listed. No primary source with a working link was found.

### Rescaled contact forms give Reeb flows

**Remember:** Divide the contact form by negative energy to read one.

*True by definition.* MSC 70G45 (Differential geometric methods (tensors, connections, symplectic, Poisson, contact, Riemannian, nonholonomic, etc.) for problems in mechanics). arXiv math-ph, math.DG. Level 3: graduate.

**Definition.** For a contact form η, its Reeb field R satisfies η(R) = 1 and dη(R, ·) = 0. For smooth h, its contact Hamiltonian field X satisfies η(X) = −h and dη(X, ·) = dh − R(h)η. Wherever h ≠ 0, define β = −η/h.

**Problem.** On the region where h is nonzero, the contact Hamiltonian field of h is the Reeb field of −η/h.

**How the definition helps.** The rescaling turns the two contact Hamilton equations into the two equations defining the Reeb field (our own). Since η(X) = −h, we get β(X) = 1 (our own). The cited identity gives dβ = Ω/h², where Ω = −h dη + dh ∧ η and Ω(X, ·) = 0 (our own). Nonzero rescaling preserves the contact condition, so these equations identify X uniquely (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650). It says: “Ω = −h dη + dh ∧ η”

**Sources:** none listed. No primary source with a working link was found.

### Regular Lagrangians give local momentum inverses

**Remember:** Regular means the velocity Hessian is invertible everywhere.

*Rules out counterexamples.* MSC 70H03 (Lagrange's equations), 37J55. arXiv math.DS. Level 3: graduate.

**Definition.** A smooth Lagrangian L assigns a number to each position and velocity, possibly with an additional parameter. Define momentum as its velocity derivative. Call L regular when its matrix of second velocity derivatives is everywhere invertible.

**Problem.** For a regular Lagrangian, the Legendre map from velocities to momenta has a smooth local inverse at every point.

**How the definition helps.** The momentum map keeps position and any extra parameter fixed, so only its velocity derivative can prevent local inversion (our own). Regularity makes that derivative invertible, and the inverse function theorem supplies the smooth local inverse (our own). For a Lagrangian linear in velocity, every velocity at a fixed position gives the same momentum (our own).

**Paper or page:** [The evolution operator connecting the Lagrangian and Hamiltonian formalisms for contact systems](https://arxiv.org/abs/2511.13401v1). It says: “The Legendre map ℱL is a local diffeomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Characteristic lines determine Hamiltonian orbits

**Remember:** The characteristic line pairs to zero with every surface tangent.

*True by definition.* MSC 70H05 (Hamilton's equations). arXiv math.DS, math.DG. Level 3: graduate.

**Definition.** A symplectic form ω is a closed, nondegenerate skew form on tangent vectors. On a hypersurface, its characteristic line consists of tangent vectors v satisfying ω(v,w) = 0 for every tangent vector w. For a smooth function H, its Hamiltonian field X satisfies ω(X, ·) = dH.

**Problem.** Two Hamiltonians with the same regular energy surface trace the same local paths there, up to time change and possible reversal.

**How the definition helps.** The characteristic line uses only the surface, so every Hamiltonian defining it regularly gives the same orbit direction (our own). Its differential vanishes on tangent vectors there and is nonzero, so its field spans that line (our own). This replaces a comparison of two sets of Hamilton’s coordinate equations (our own). The linear algebra behind the definition is that the symplectic orthogonal of a hyperplane is a line inside it (our own).

**Paper or page:** [The Kepler Cone, Maclaurin Duality and Jacobi-Maupertuis metrics](https://arxiv.org/abs/2312.08173). It says: “If two different functions on phase space share the same non-degenerate level set, then their Hamiltonian vector fields are parallel along this level set.”

**Sources:**

- [The Kepler Cone, Maclaurin Duality and Jacobi-Maupertuis metrics](https://arxiv.org/abs/2312.08173)

### Exterior powers preserve Hamiltonian volume

**Remember:** Preserve the form and every exterior power survives.

*True by definition.* MSC 70H05 (Hamilton's equations), 37J06. arXiv math-ph, physics.class-ph. Level 3: graduate.

**Definition.** A symplectic form Ω is a closed alternating bilinear form on tangent vectors that pairs every nonzero vector nontrivially with some vector. In dimension 2n, define Liouville volume by taking the exterior product of n copies of Ω, up to a constant factor.

**Problem.** Hamiltonian motion preserves Liouville volume.

**How the definition helps.** Defining volume from Ω makes volume preservation follow as soon as the flow preserves Ω (our own). Changing variables in an exterior product changes each factor in the same way (our own). In canonical position and momentum coordinates, this volume agrees with ordinary coordinate volume up to normalization (our own). This replaces a direct calculation of the flow’s volume change with the theorem that Hamiltonian flows preserve Ω (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650v2). It says: “Let (M, Ω) be a symplectic manifold and Ωⁿ the Liouville volume form in M.”

**Sources:** none listed. No primary source with a working link was found.

### Hyperregularity makes Hamiltonians single valued

**Remember:** Local momentum inverses can disagree, but a global inverse cannot.

*Rules out counterexamples.* MSC 70H05 (Hamilton's equations), 70H03. arXiv physics.class-ph, math.DS. Level 3: graduate.

**Definition.** For a smooth Lagrangian L, differentiation with respect to velocity v gives momentum p. Hyperregularity means that the map from position and velocity to position and momentum has a smooth inverse everywhere. Regularity only requires its derivative to be invertible.

**Problem.** For a hyperregular Lagrangian, its energy p·v − L gives a unique smooth Hamiltonian on the entire cotangent bundle.

**How the definition helps.** A global inverse selects exactly one velocity for every position and momentum, so the energy defines a smooth Hamiltonian (our own). For two velocity components u and v, take L = eᵘ cos v (our own). Its velocity Hessian has determinant −e²ᵘ, yet increasing v by 2π leaves both momenta unchanged (our own). The energy changes by 2π times the second momentum, which can be nonzero (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650v2). It says: “Then there exists a unique function h ∈ C∞(T\*Q)”

**Sources:** none listed. No primary source with a working link was found.

### Regular levels exclude the upright pendulum equilibrium

**Remember:** Check independence everywhere before calling a compact level a torus.

*Rules out counterexamples.* MSC 70H06 (Completely integrable systems and methods of integration for problems in Hamiltonian and Lagrangian mechanics), 37J35. arXiv math.DS, math-ph. Level 3: graduate.

**Definition.** An integral is a smooth function constant along the motion. A common level fixes a value for each integral and is regular if their differentials are independent at every point there. The integrals commute if each stays constant under the Hamiltonian flows of the others.

**Problem.** Consider n commuting integrals on a symplectic phase space of dimension 2n. Each nonempty compact connected regular common level is an n-dimensional torus, a product of n circles.

**How the definition helps.** Regularity excludes the pendulum’s upright rest point, where the energy derivative vanishes (our own). Two loops meet there on the critical energy level, so that level is not a circle (our own). The torus theorem shows that the commuting flows cover the regular level by Euclidean space modulo a lattice of periods (our own).

**Paper or page:** [Arnold diffusion and geodesic dynamics of blackholes](https://arxiv.org/abs/2012.03047v1). It says: “At each point of M𝐚, the n vectors DHᵢ, i = 1, …, n are linearly independent.”

**Sources:** none listed. No primary source with a working link was found.

### Fixing energy makes the return section symplectic

**Remember:** Fixed energy erases the effect of different return times.

*Rules out counterexamples. Confidence: medium.* MSC 70H12 (Periodic and almost periodic solutions for problems in Hamiltonian and Lagrangian mechanics), 37J11. arXiv math.DS, math-ph. Level 3: graduate.

**Definition.** A regular energy surface is a level where the energy derivative never vanishes. Inside it choose a hypersurface that crosses the flow, so its tangent space omits the flow direction. The return map sends each point to its next crossing wherever the return time is smooth.

**Problem.** For an autonomous Hamiltonian flow, the return map preserves the restricted symplectic form on this section. That form pairs each nonzero tangent vector nontrivially with some other tangent vector.

**How the definition helps.** Fixing energy excludes odd-dimensional sections of the full phase space, which cannot carry a nondegenerate two-form (our own). On the regular energy surface, the flow direction spans the kernel of the restricted form (our own). Transversality removes that kernel on the section (our own). Variable return times add only flow-direction terms to the derivative, so symplecticity of the flow gives preservation (our own).

**Wikipedia:** [Poincaré map](https://en.wikipedia.org/wiki/Poincar%C3%A9_map). It says: “the Poincaré section, transversal to the flow of the system.”

**Sources:** none listed. No primary source with a working link was found.

### Discrete actions preserve the symplectic form

**Remember:** Differentiate one step’s action at both ends, negating the initial derivative.

*True by definition.* MSC 70H15 (Canonical and symplectic transformations for problems in Hamiltonian and Lagrangian mechanics). arXiv physics.class-ph. Level 3: graduate.

**Definition.** Choose a smooth function L(q,Q) of two successive positions, called a discrete Lagrangian. Define the initial momentum p as minus the derivative in q and the final momentum P as the derivative in Q. Require the mixed derivative matrix to be invertible so the equations define a smooth local map from (q,p) to (Q,P).

**Problem.** The local time step preserves the canonical symplectic form, the skew pairing between position and momentum directions.

**How the definition helps.** The endpoint momentum formulas give P·dQ − p·dq = dL on the graph of the time step (our own). Taking an exterior derivative gives equality of the old and new canonical symplectic forms (our own).

**Wikipedia:** [Variational integrator](https://en.wikipedia.org/wiki/Variational_integrator). It says: “Variational integrators are momentum-preserving and symplectic.”

**Sources:**

- [Marsden and West, Discrete mechanics and variational integrators](https://doi.org/10.1017/S096249290100006X)

### Identity needs different generating coordinates

**Remember:** Choose independent coordinates on the graph before integrating.

*Rules out counterexamples.* MSC 70H15 (Canonical and symplectic transformations for problems in Hamiltonian and Lagrangian mechanics), 37J11. arXiv math-ph, physics.class-ph. Level 3: graduate.

**Definition.** A canonical transformation preserves the canonical symplectic form. Suppose old positions q and new positions Q give coordinates on its graph. A type-one generating function S(q,Q) satisfies p = ∂S/∂q and P = −∂S/∂Q there.

**Problem.** A canonical transformation has a local type-one generating function where the old and new positions give coordinates on its graph. The identity has no such function on any open set.

**How the definition helps.** The identity has Q = q, so its two positions cannot give independent coordinates (our own). For a canonical transformation, preservation of the symplectic form makes p·dq − P·dQ closed on its graph (our own). A local primitive in coordinates (q,Q) therefore has the required derivatives (our own).

**nLab:** [generating function in classical mechanics](https://ncatlab.org/nlab/show/generating+function+in+classical+mechanics). It says: “the difference must be a (variation of the integral of the) total differential of a function, which can be chosen as a function of some set of old and new coordinates in a consistent way.”

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

### The Jacobi metric makes paths geodesic

**Remember:** At fixed energy, fold the potential into the ruler.

*Makes the theorem clean to state or prove.* MSC 70H30 (Other variational principles in mechanics), 70G45. arXiv physics.class-ph, math-ph. Level 3: graduate.

**Definition.** Suppose the energy equals kinetic energy plus a potential V depending only on position. The mass metric measures squared speed as twice the kinetic energy. At energy E, define the Jacobi metric by multiplying the mass metric by 2(E − V) wherever V &lt; E.

**Problem.** On every segment where V &lt; E, a trajectory of energy E becomes a geodesic of the Jacobi metric after a change of time. Such a path is stationary for Jacobi length.

**How the definition helps.** The Jacobi metric makes length equal the fixed-energy action, the integral of momentum along a path (our own). Maupertuis’s principle supplies the dynamical step (our own). It says that the mechanical path makes this integral stationary under variations with fixed endpoints and energy (our own).

**Wikipedia:** [Maupertuis's principle](https://en.wikipedia.org/wiki/Maupertuis%27s_principle). It says: “𝒮₀ ≝ ∫ p · dq = ∫ ds √2 √(Eₜₒₜ − V(q))”

**Sources:** none listed. No primary source with a working link was found.

### Augmented energy detects steady rotation

**Remember:** Subtract the symmetry motion to look for a rest point.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics), 70E17. arXiv math.DS, math-ph. Level 3: graduate.

**Definition.** A relative equilibrium is a trajectory traced by a one-parameter symmetry. Suppose the symmetry has a momentum function J whose Hamiltonian field equals its velocity field. For energy H, define the augmented energy as H − J.

**Problem.** Suppose the symmetry preserves H. A point follows the chosen symmetry motion exactly when the derivative of H − J vanishes there.

**How the definition helps.** Subtracting the momentum function converts equality of two velocity fields into a critical-point test for one function (our own). The field generated by H − J is the difference of the two fields (our own). It vanishes exactly where d(H − J) vanishes, because the symplectic form is nondegenerate (our own). Energy invariance transports equality at the initial point along the symmetry orbit (our own).

**Paper or page:** [Nonlinear Stability of Relative Equilibria and Isomorphic Vector Fields](https://arxiv.org/abs/1707.02828v4). It says: “the point $m\\in M$ is a critical point of the function $h<sup>\\xi</sup> :=h-\\langle \\Phi ,\\xi \\rangle $.”

**Sources:** none listed. No primary source with a working link was found.

### Discrete action symmetries conserve momentum

**Remember:** One step’s outgoing momentum equals the next step’s incoming momentum.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics), 65P10. arXiv math-ph, physics.class-ph. Level 3: graduate.

**Definition.** A discrete Lagrangian assigns an action to each step between two positions. Define motion by requiring that moving any intermediate position leaves the total action unchanged to first order. Define step momentum by differentiating the action as its final position moves along the symmetry.

**Problem.** Suppose a smooth one-parameter symmetry leaves every step’s action unchanged when applied to both positions together. Along a stationary path, all steps have the same symmetry momentum.

**How the definition helps.** Symmetry makes the initial and final derivatives of each step action sum to zero along the symmetry (our own). Stationarity makes adjacent steps’ derivatives at their shared endpoint sum to zero (our own). Combining the two equalities identifies their final symmetry momenta (our own).

**Paper or page:** [Energy and quadratic invariants preserving methods for Hamiltonian systems with holonomic constraints](https://arxiv.org/abs/2007.06338v1). It says: “p<sub>n+1</sub><sup>T</sup> a(q<sub>n+1</sub>)=p<sub>n</sub><sup>T</sup> a(q<sub>n</sub>)”

**Sources:**

- [Jerrold E. Marsden and Matthew West, Discrete Mechanics and Variational Integrators (2001)](https://doi.org/10.1017/S096249290100006X)

### Invariant primitives give symmetry momentum

**Remember:** Pair the invariant one-form with the direction of motion.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics), 53D20. arXiv math-ph. Level 3: graduate.

**Definition.** A primitive of a symplectic form Ω is a one-form Θ with dΘ = Ω. Call a symmetry action exact here if it preserves Θ. Each one-parameter symmetry has a velocity field Y.

**Problem.** For each Y, the function J = −Θ(Y) has Hamiltonian field Y. This uses the convention Ω(Y, ·) = dJ.

**How the definition helps.** An invariant primitive gives the momentum function directly, replacing the search for a global solution of dJ = Ω(Y, ·) (our own). Cartan’s differentiation formula gives d(−Θ(Y)) = Ω(Y, ·) because the symmetry preserves Θ (our own). The work lies in finding a primitive that every symmetry preserves (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650v2). It says: “If (M, Ω) is an exact symplectic manifold and the action of G on M is exact, then a momentum map exists.”

**Sources:** none listed. No primary source with a working link was found.

### Partial Legendre transforms eliminate cyclic velocities

**Remember:** Subtract the cyclic momentum term before fixing the momentum.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics). arXiv physics.class-ph, math.SG. Level 3: graduate.

**Definition.** A cyclic coordinate does not appear in the Lagrangian L, although its velocity v can appear. Its momentum p is the partial derivative of L with respect to v. At fixed p, solve this equation for v and substitute into L − pv.

**Problem.** When the cyclic velocity can be solved smoothly from its momentum, the reduced Lagrangian gives the equations for the remaining coordinates.

**How the definition helps.** Subtracting pv cancels the chain-rule terms that direct substitution into L would leave (our own). Their coefficient is the velocity derivative of L minus p, which vanishes (our own). The original equation for the cyclic coordinate keeps p constant, and elimination requires a smooth local solution for v (our own).

**Wikipedia:** [Routhian mechanics](https://en.wikipedia.org/wiki/Routhian_mechanics). It says: “The Routhian approach has the best of both approaches, because cyclic coordinates can be split off to the Hamiltonian equations and eliminated”

**Sources:** none listed. No primary source with a working link was found.

### Reduced brackets carry the flow

**Remember:** Pull back functions and push down motion.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics). arXiv math-ph, math.DG. Level 3: graduate.

**Definition.** Let a Lie group preserve a Jacobi bracket, a Lie bracket of differential order at most one in each argument. Assume the orbit projection π is a submersion onto a smooth quotient. For all smooth quotient functions f and g, define their bracket by {f,g} ∘ π = {f ∘ π,g ∘ π}.

**Problem.** For a symmetry that preserves the Jacobi bracket and the Hamiltonian, the flow projects to the flow of the reduced Hamiltonian under the reduced bracket.

**How the definition helps.** The pullback rule lets us compare the two flows on functions without finding coordinates on the orbit space (our own). The evolution rule uses the bracket with the Hamiltonian and a correction involving the constant function one (our own). Pullback preserves both terms (our own). Existence requires proving that brackets of invariant functions descend to smooth functions on the quotient (our own).

**Paper or page:** [Reduction by symmetries of contact mechanical systems on Lie groups](https://arxiv.org/abs/2306.07028). It says: “called the reduced Jacobi bracket such that π is a Jacobi map.”

**Sources:**

- [Reduction by symmetries of contact mechanical systems on Lie groups](https://arxiv.org/abs/2306.07028)

### Dirac brackets freeze constraints

**Remember:** Invert the constraint matrix to subtract exactly the forbidden motion.

*True by definition.* MSC 70H45 (Constrained dynamics, Dirac's theory of constraints), 53D17. arXiv physics.class-ph, math.SG. Level 3: graduate.

**Definition.** Let φ₁,…,φₖ be smooth constraint functions on a Poisson manifold. They are second class where their bracket matrix Cᵢⱼ = {φᵢ,φⱼ} is invertible. There define {f,g}ᴰ = {f,g} − ∑ᵢⱼ {f,φᵢ}(C⁻¹)ᵢⱼ{φⱼ,g} for all smooth f and g.

**Problem.** Each constraint has zero Dirac bracket with every smooth function wherever C is invertible.

**How the definition helps.** When one function is a constraint, its row or column of C cancels against C⁻¹ (our own). This makes the correction equal to the ordinary bracket (our own). The work moves to proving invertibility and checking that the corrected bracket satisfies the Jacobi identity (our own).

**Wikipedia:** [Dirac bracket](https://en.wikipedia.org/wiki/Dirac_bracket). It says: “vanishing for an argument which is a second-class constraint.”

**Sources:**

- [P. A. M. Dirac, Generalized Hamiltonian Dynamics (1950)](https://doi.org/10.4153/CJM-1950-012-1)

### Bounded vibrations exclude Jordan growth

**Remember:** A unit multiplier can still hide growth in a Jordan block.

*Rules out counterexamples.* MSC 70J25 (Stability for problems in linear vibration theory), 34D20. arXiv physics.class-ph, math.DS. Level 3: graduate.

**Definition.** For a homogeneous linear vibration equation with continuous periodic coefficients, the evolution matrix maps the initial state to the state one period later. Its eigenvalues are called multipliers. A multiplier is semisimple when its eigenspace dimension equals its algebraic multiplicity.

**Problem.** All solutions stay bounded for forward time exactly when every multiplier has modulus at most one and every multiplier of modulus one is semisimple.

**How the definition helps.** Semisimplicity excludes the polynomial growth that repeated matrix powers can produce at an eigenvalue of modulus one (our own). A free mass has a repeated multiplier equal to one, yet constant nonzero velocity makes its position grow (our own). The proof uses the Jordan form to bound all matrix powers and continuity to bound evolution within one period (our own).

**Wikipedia:** [Floquet theory](https://en.wikipedia.org/wiki/Floquet_theory). It says: “the Floquet multipliers of modulus 1 are semisimple (equivalently, their algebraic and geometric multiplicities agree)”

**Sources:** none listed. No primary source with a working link was found.

### Metric variation makes the Hilbert stress tensor symmetric and gauge invariant

**Remember:** Vary a symmetric metric in a gauge-invariant action.

*True by definition. Confidence: medium.* MSC 70S05 (Lagrangian formalism and Hamiltonian formalism in mechanics of particles and systems), 83C40, 81T13. arXiv gr-qc, hep-th. Level 3: graduate.

**Definition.** The Hilbert stress tensor T represents the symmetric inverse-metric derivative of the matter action S. Its normalization is δS = −½∫Tₐᵦ δgᵃᵇ dvol<sub>g</sub> for every compactly supported symmetric inverse-metric variation with matter fields fixed.

**Problem.** The Hilbert stress tensor is symmetric. It is also unchanged by gauge transformations if the matter action is gauge invariant for every metric and the transformations act independently of the metric. A gauge transformation changes the field description without changing the physical system.

**How the definition helps.** The derivative acts on symmetric variations, so its tensor representative in the dual space of symmetric tensors is symmetric (our own). Gauge-related fields give identical actions for every metric. Differentiating this identity gives equal stress tensors because the gauge transformation is independent of the metric (our own).

**Wikipedia:** [Stress–energy tensor](https://en.wikipedia.org/wiki/Stress%E2%80%93energy_tensor). It says: “This is symmetric and gauge-invariant.”

**Sources:** none listed. No primary source with a working link was found.

### Symmetry fixes the asteroid midpoint

**Remember:** Equal asteroids on opposite sides keep their midpoint at the center.

*Makes the theorem clean to state or prove.* MSC 70F15 (Celestial mechanics). arXiv astro-ph.EP. Level 4: research.

**Definition.** In the planar binary asteroid model, use coordinates corotating with the two primaries about their common center. For equal asteroid masses, define the symmetric subsystem by restricting the equations to zero asteroid midpoint and zero total asteroid momentum.

**Problem.** Assume the two larger bodies have equal masses and the two asteroids have equal masses. Each equilibrium or periodic orbit of the reduced equations gives one in the full model.

**How the definition helps.** Midpoint coordinates describe the symmetric motions by setting two vectors to zero. In our own argument, rotating by half a turn and exchanging the asteroids leaves these states fixed. Equal masses make that operation a symmetry of the equations. Uniqueness of motion keeps the solution symmetric.

**Paper or page:** [Relative Equilibria and Periodic Orbits in a Binary Asteroid Model](https://arxiv.org/abs/2306.00273v1). It says: “defines an equilibrium or T-periodic solution of the Hamiltonian system”

**Sources:**

- [Lennard F. Bakker and Nicholas J. Freeman, Relative Equilibria and Periodic Orbits in a Binary Asteroid Model](https://arxiv.org/abs/2306.00273v1)

### A closed rescaled form gives an invariant volume

**Remember:** A change of clock produces a matching change of volume.

*Makes the theorem clean to state or prove.* MSC 70F25 (Nonholonomic systems related to the dynamics of a system of particles), 37J60. arXiv math-ph, math.DS. Level 4: research.

**Definition.** Let Ω be a nondegenerate two-form on the reduced phase space of a Chaplygin system, with reduced dynamics Ω(X, ·) = dH. A position function φ gives a conformally symplectic form if d(exp(φ)Ω) = 0.

**Problem.** Under this condition in dimension 2m, the reduced flow preserves exp((m − 1)φ) times the exterior product of m copies of Ω.

**How the definition helps.** The closed form exp(φ)Ω makes exp(−φ)X Hamiltonian for H (our own). Its flow therefore preserves exp(mφ)Ωᵐ (our own). Multiplying that vector field by exp(φ) divides its invariant density by exp(φ), giving the stated volume (our own). The paper’s φ-simplicity condition supplies closedness of the rescaled form (our own).

**Paper or page:** [Projective geodesic extensions by conformal modifications in nonholonomic mechanics](https://arxiv.org/abs/2509.15863v1). It says: “If the system is φ-simple, the reduced Chaplygin equations have an invariant volume form”

**Sources:**

- [Projective geodesic extensions by conformal modifications in nonholonomic mechanics](https://arxiv.org/abs/2509.15863v1)

### Constraint leaves give canonical relations

**Remember:** Two points on one leaf represent one point in the quotient.

*Makes the theorem clean to state or prove.* MSC 70H45 (Constrained dynamics, Dirac's theory of constraints), 53D12. arXiv math-ph. Level 4: research.

**Definition.** A coisotropic surface in phase space contains every direction perpendicular to its tangent space under the symplectic form. Group points into leaves by joining them with paths tangent to these perpendicular directions. Relate points precisely when they belong to the same leaf.

**Problem.** Suppose the leaves form a smooth space and the projection onto it has surjective derivative everywhere. In finite dimensions the relation is Lagrangian in the product. This means it has half the product dimension and the difference of the two symplectic forms vanishes on it.

**How the definition helps.** Points on the same leaf have the same projection, so both factors give the same reduced form on the relation (our own). The work is proving that the restricted symplectic form comes from the space of leaves (our own). For a surface of codimension k in dimension 2n, the first point has 2n − k dimensions of freedom (our own). Its partner varies on a k-dimensional leaf, giving 2n dimensions in total (our own).

**Paper or page:** [Constrained systems, generalized Hamilton-Jacobi actions, and quantization](https://arxiv.org/abs/2012.13270v3). It says: “If M is finite-dimensional, then L is lagrangian, hence a canonical relation from M to itself.”

**Sources:**

- [Constrained systems, generalized Hamilton-Jacobi actions, and quantization](https://arxiv.org/abs/2012.13270v3)

### Taking gauge fields as maps into a moduli stack restores locality

**Remember:** Glue local connections using gauge isomorphisms that compose consistently on triple overlaps.

*True by definition. Confidence: medium.* MSC 70S15 (Yang-Mills and other gauge theories in mechanics of particles and systems), 81T13, 18F20. arXiv math-ph, math.DG. Level 4: research.

**Definition.** For each open set U, the stack of G-connections assigns the groupoid of principal G-bundles with connection on U and connection-preserving bundle isomorphisms. Its descent condition glues local objects equipped with overlap isomorphisms satisfying the cocycle identity on every triple overlap.

**Problem.** On any open cover of X, compatible local Yang–Mills fields glue in the stack of G-connections, including fields in every instanton sector. No ordinary field bundle represents this gluing of configurations and their gauge isomorphisms.

**How the definition helps.** Stack descent glues the bundles and connections using the specified overlap isomorphisms (our own). Those isomorphisms carry the transition data even when every local bundle is trivial (our own). Ordinary sections form a sheaf of sets and therefore omit the gauge isomorphisms (our own).

**nLab:** [field (physics)](https://ncatlab.org/nlab/show/field+%28physics%29), [field bundle](https://ncatlab.org/nlab/show/field+bundle). It says: “In summary: there cannot be a fiber bundle such that its sheaf of local sections is the sheaf of configurations of the Yang-Mills field. But there is a fiber 2-bundle whose stack of sections is the stack of configurations of the Yang-Mills field.”

**Sources:**

- [Marco Benini, Claudio Dappiaggi, Alexander Schenkel, Quantized Abelian principal connections on Lorentzian manifolds, Communications in Mathematical Physics 330 (2014) 123–152, arXiv:1303.2515](https://arxiv.org/abs/1303.2515)
- [Marco Benini, Alexander Schenkel, Richard J. Szabo, Homotopy colimits and global observables in Abelian gauge theory, Letters in Mathematical Physics 105 (2015) 1193–1222, arXiv:1503.08839](https://arxiv.org/abs/1503.08839)
