### Lange's inertial frames make Newton's first law partly a definition

**Remember:** Three straight throws define the frame; the rest is physics.

*True by definition. Confidence: medium.* MSC 70A05 (Axiomatics, foundations), 01A55. arXiv physics.class-ph, physics.hist-ph. Level 1: early undergraduate.

**Definition.** In Lange’s sense, a frame is inertial if three free particles, thrown from one point in three non-coplanar directions, all move in straight lines.

**Problem.** In a Lange inertial frame, three free bodies thrown in non-coplanar directions move in straight lines by definition. The physical content of Newton's first law is that such frames exist and that every other free body then also moves in a straight line.

**How the definition helps.** The three reference paths are straight because that is the definition of the frame. That such frames exist, and that every other free body then moves straight, are empirical claims (our own reading).

**Wikipedia:** [Inertial frame of reference](https://en.wikipedia.org/wiki/Inertial_frame_of_reference). It says: “A reference frame in which a mass point thrown from the same point in three different (non co-planar) directions follows rectilinear paths each time it is thrown, is called an inertial frame.”

**Sources:** none listed. No primary source with a working link was found.

### Mass centers follow net force

**Remember:** Weight each position by mass, and mass times acceleration becomes force.

*True by definition.* MSC 70F10 (\\(n\\)-body problems). arXiv physics.class-ph. Level 1: early undergraduate.

**Definition.** The center of mass is the average of the particle positions, each weighted by its mass. So total mass times its acceleration is the sum of each mass times its acceleration (our own).

**Problem.** Consider particles of constant positive mass whose internal forces cancel in pairs. The external forces sum to total mass times the acceleration of the center of mass.

**How the definition helps.** By Newton’s second law, the sum of each mass times its acceleration is the total force (our own). Internal forces cancel in pairs, so only external forces remain (our own). An unweighted average gives no such identity when the masses differ (our own).

**Wikipedia:** [Center of mass](https://en.wikipedia.org/wiki/Center_of_mass). It says: “where the weighted relative position of the distributed mass sums to zero.”

**Sources:** none listed. No primary source with a working link was found.

### Defining conservative forces by path independence makes potential energy exist

**Remember:** Path-independent work is exactly what a potential energy needs.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics), 70G45. arXiv physics.class-ph. Level 1: early undergraduate.

**Definition.** A force field is conservative if the work it does on a particle moving between two points does not depend on the path. So the work from a fixed base point to x is a function of x alone.

**Problem.** A continuous conservative force on an open connected region has a potential energy Φ satisfying F = −∇Φ. A particle subject only to this time-independent force conserves mechanical energy.

**How the definition helps.** Minus that work function is a potential Φ, and differentiating along short coordinate segments gives F = −∇Φ (our own). The work–energy theorem then keeps kinetic plus potential energy constant (our own).

**Wikipedia:** [Conservative force](https://en.wikipedia.org/wiki/Conservative_force). It says: “In physics, a conservative force is a force with the property that the total work done by the force in moving a particle between two points is independent of the path taken.”

**Sources:** none listed. No primary source with a working link was found.

### The damping ratio gives one threshold for oscillations

**Remember:** Drag as a fraction of critical drag; one is the threshold.

*Makes the theorem clean to state or prove.* MSC 70J30 (Free motions in linear vibration theory). arXiv math-ph. Level 1: early undergraduate.

**Definition.** The damping ratio ζ = c/(2√(km)) measures the drag of a mass–spring system as a fraction of critical drag, for mass m &gt; 0, stiffness k &gt; 0 and drag force −cq̇ with c ≥ 0. Measured in time units of √(m/k), the motion obeys q̈ + 2ζq̇ + q = 0 (our own).

**Problem.** Every nonzero free motion crosses equilibrium repeatedly when ζ&lt;1. When ζ≥1, each nonzero free motion crosses equilibrium at most once.

**How the definition helps.** The roots of s² + 2ζs + 1 are complex exactly when ζ &lt; 1 (our own). Complex roots give sines and cosines times e<sup>(−ζt)</sup>, which cross zero repeatedly. Real roots, with a factor t for a repeated root, give a sum of two exponentials that vanishes at most once (our own).

**Wikipedia:** [Damping](https://en.wikipedia.org/wiki/Damping). It says: “The damping ratio expresses the level of damping in a system relative to critical damping”

**Sources:** none listed. No primary source with a working link was found.

### Inertia operators reveal principal axes

**Remember:** Diagonalize the inertia operator to find the spin axes.

*True by definition.* MSC 70E15 (Free motion of a rigid body), 70B10. arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** For rotation about a fixed point, the inertia operator I is the symmetric linear map that sends angular velocity to angular momentum about that point. A principal axis is a line through the point along an eigenvector of I.

**Problem.** A three-dimensional rigid body has an orthonormal basis of principal axes. Angular momentum is parallel to angular velocity for rotation about each one.

**How the definition helps.** Since I is symmetric, the spectral theorem gives an orthonormal basis of eigenvectors, the principal axes (our own). On an eigenvector, the angular momentum Iω is a multiple of ω (our own). I is symmetric because each mass contributes a symmetric matrix (our own).

**nLab:** [moment of inertia](https://ncatlab.org/nlab/show/moment+of+inertia). It says: “This linear function is additionally symmetric with respect to the induced inner product”

**Sources:** none listed. No primary source with a working link was found.

### Poinsot’s ellipsoid rolls without slipping

**Remember:** Spin vector on the energy ellipsoid; momentum fixes the tangent plane.

*Makes the theorem clean to state or prove.* MSC 70E15 (Free motion of a rigid body), 70G45. arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Attach to the body, at its center of mass, the ellipsoid of vectors u with u·Iu = 2T, where I is the inertia operator and T the rotational kinetic energy. The angular velocity ω lies on it, and the normal there is parallel to the angular momentum Iω (our own).

**Problem.** For torque-free rotation about the center of mass, with nonzero spin and positive definite inertia, the ellipsoid rolls without slipping on a plane fixed in the center-of-mass frame. The contact point is the tip of the angular velocity vector.

**How the definition helps.** The tangent plane at ω has normal along the conserved angular momentum L and lies at distance 2T/\|L\| from the center, so it stays fixed (our own). The contact point ω lies on the instantaneous spin axis, so it has zero velocity, and the ellipsoid rolls without slipping (our own).

**Wikipedia:** [Poinsot's ellipsoid](https://en.wikipedia.org/wiki/Poinsot%27s_ellipsoid). It says: “Its inertia ellipsoid rolls, without slipping, on the invariable plane, with the center of the ellipsoid a constant height above the plane.”

**Sources:** none listed. No primary source with a working link was found.

### Mass centers give parallel axis shifts

**Remember:** Shift from the mass center and the cross term vanishes.

*True by definition.* MSC 70E99 (Dynamics of a rigid body and of multibody systems). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** The center of mass is the point from which the mass-weighted displacements sum to zero, so their projections onto any plane also sum to zero (our own). The moment of inertia about an axis is the sum of mass times squared distance from the axis.

**Problem.** Moving an axis a perpendicular distance d from a parallel axis through the center of mass increases the moment of inertia by Md². Here M is total mass.

**How the definition helps.** Expanding each squared distance to the shifted axis leaves a cross term 2d·∑mᵢxᵢ, where xᵢ are the projected displacements from the center-of-mass axis (our own). That sum is zero, so only the center-of-mass moment and Md² remain (our own).

**Wikipedia:** [Parallel axis theorem](https://en.wikipedia.org/wiki/Parallel_axis_theorem). It says: “which is zero since the center of mass lies at the origin.”

**Sources:** none listed. No primary source with a working link was found.

### Effective potential makes a circular orbit a radial equilibrium

**Remember:** Add turning energy to the potential; circles sit at its flat points.

*Makes the theorem clean to state or prove.* MSC 70F05 (Two-body problems), 70H03. arXiv math-ph. Level 2: later undergraduate.

**Definition.** For a particle of mass m in a central potential V(r), fix the magnitude ℓ of its angular momentum. The effective potential U(r)=V(r)+ℓ²/(2mr²) includes the kinetic energy due to turning about the center.

**Problem.** For nonzero ℓ, circular orbits occur exactly at radii r&gt;0 where U′(r)=0. A strict local minimum gives radial stability at fixed ℓ, and U″&lt;0 at a critical point gives radial instability.

**How the definition helps.** Conservation of angular momentum turns the radial equation into mr̈ = −U′(r), motion in one dimension in the potential U (our own). A circular orbit is a rest point of this equation, so U′(r) = 0 (our own). Energy traps small radial motions near a strict minimum, and when U″ &lt; 0 the linearized equation has a growing solution (our own).

**Wikipedia:** [Effective potential](https://en.wikipedia.org/wiki/Effective_potential). It says: “A circular orbit may be either stable or unstable.”

**Sources:** none listed. No primary source with a working link was found.

### Kepler velocity traces a circle

**Remember:** Pin the velocity arrows at one point; their tips draw a circle.

*Makes the theorem clean to state or prove.* MSC 70F05 (Two-body problems), 70F15. arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** The hodograph is the path traced by the tip of the velocity vector, drawn with its tail fixed at the origin.

**Problem.** Under an attractive inverse-square force with nonzero angular momentum, the velocities lie on a circle. An unbound orbit may trace only part of that circle.

**How the definition helps.** Angular momentum conservation and the inverse-square law make the angle derivative of velocity a constant times the inward radial unit vector (our own). Integrating in the angle gives a fixed vector plus a rotating vector of constant length, which traces a circle (our own).

**Wikipedia:** [Hodograph](https://en.wikipedia.org/wiki/Hodograph). It says: “The hodograph may be defined as the path traced out by the extremity of a vector which continually represents, in direction and magnitude, the velocity of a moving body.”

**Sources:**

- [William Rowan Hamilton, The Hodograph, or a New Method of Expressing in Symbolical Language the Newtonian Law of Attraction (1847)](https://www.maths.tcd.ie/pub/HistMath/People/Hamilton/Hodograph/)

### Reciprocal radius linearizes Kepler orbits

**Remember:** Flip the radius and use the angle as clock: a linear equation.

*Makes the theorem clean to state or prove.* MSC 70F05 (Two-body problems), 70F15. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** Describe a central-force orbit by the reciprocal radius u = 1/r as a function of the polar angle θ. The conserved angular momentum h per unit mass lets θ replace time, since dθ/dt = hu² (our own).

**Problem.** For an attractive inverse-square force and nonzero angular momentum, u is a constant plus a sinusoid in θ. Hence each orbit is part of a conic with a focus at the force center.

**How the definition helps.** In these variables Newton’s radial equation becomes the linear equation u″ + u = k/h², where primes are angle derivatives and k is the attraction strength per unit mass (our own). Its solutions u = k/h² + A cos(θ − θ₀) are polar equations of conics with a focus at the center (our own).

**Wikipedia:** [Binet equation](https://en.wikipedia.org/wiki/Binet_equation). It says: “For the Binet equation, the orbital shape is instead more concisely described by the reciprocal u = 1/r as a function of θ.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced mass makes two bodies one

**Remember:** Inverse masses add, so two bodies act as one.

*True by definition.* MSC 70F05 (Two-body problems). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** For two constant positive masses, take the first position minus the second as the separation r. Define their reduced mass μ by 1/μ = 1/m₁ + 1/m₂.

**Problem.** Suppose only the two particles’ equal and opposite internal forces act. If the first force F depends only on separation and relative velocity, their separation obeys μr̈ = F.

**How the definition helps.** Dividing each Newton equation by its mass and subtracting gives r̈ = F/m₁ + F/m₂ = F/μ (our own). So two coupled position equations become one equation for the separation (our own).

**Wikipedia:** [Reduced mass](https://en.wikipedia.org/wiki/Reduced_mass). It says: “Reduced mass allows the two-body problem to be solved as if it were a one-body problem.”

**Sources:** none listed. No primary source with a working link was found.

### Rotating coordinates give Jacobi’s constant

**Remember:** Rotate with the pair, and the Hamiltonian stops depending on time.

*True by definition.* MSC 70F07 (Three-body problems), 70H33. arXiv physics.class-ph, math.DS. Level 2: later undergraduate.

**Definition.** In the circular restricted three-body problem, two bodies circle their common center and a third body of negligible mass moves in their gravity. In coordinates rotating with the pair, the two bodies stand still (our own), and Jacobi’s constant is minus twice the Hamiltonian per unit test mass.

**Problem.** The circular restricted three-body problem has a conserved Jacobi constant along collision-free motion.

**How the definition helps.** In rotating coordinates the Hamiltonian has no explicit time dependence, because the two bodies are fixed there (our own). Hamilton’s equations conserve a Hamiltonian with no explicit time dependence (our own).

**Wikipedia:** [Jacobi integral](https://en.wikipedia.org/wiki/Jacobi_integral). It says: “Note that the Jacobi integral is minus twice the total energy per unit mass in the rotating frame of reference”

**Sources:** none listed. No primary source with a working link was found.

### Bounded virials give energy averages

**Remember:** Sum position dot momentum; a bounded quantity has zero average rate.

*Makes the theorem clean to state or prove.* MSC 70F10 (\\(n\\)-body problems), 70H33. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** The virial G is the sum over particles of position dotted with momentum. Its time derivative is twice the kinetic energy plus the sum of position dotted with force (our own).

**Problem.** Let Newtonian particles of constant mass move under a potential homogeneous of degree n, so scaling all positions by λ &gt; 0 scales it by λⁿ. If the virial stays bounded and both long-time means exist, twice the mean kinetic energy equals n times the mean potential energy.

**How the definition helps.** Euler’s identity for a homogeneous potential makes the force term equal −n times the potential, so dG/dt = 2T − nV (our own). The mean of dG/dt over a long interval is a bounded endpoint difference divided by its length, so it tends to zero (our own).

**Wikipedia:** [Virial theorem](https://en.wikipedia.org/wiki/Virial_theorem). It says: “Thus, twice the average total kinetic energy ⟨T⟩ equals n times the average total potential energy”

**Sources:**

- [Rudolf Clausius, On a Mechanical Theorem Applicable to Heat (1870)](https://doi.org/10.1080/14786447008640370)

### Central configurations scale without changing shape

**Remember:** One shared inward factor lets one scale govern every body.

*Makes the theorem clean to state or prove.* MSC 70F10 (\\(n\\)-body problems). arXiv physics.class-ph, math.DS. Level 2: later undergraduate.

**Definition.** In a central configuration, each body’s gravitational acceleration is the same negative multiple of its displacement from the center of mass, with one multiple for all bodies.

**Problem.** Two or more positive Newtonian point masses released from rest in a collision-free central configuration keep their shape until total collision.

**How the definition helps.** With one common factor, the guess xᵢ(t) = s(t)xᵢ(0) turns every vector equation into the single scalar equation s̈ = −λ/s², by inverse-square scaling (our own). Uniqueness of solutions makes this guess the actual motion until collision (our own).

**Wikipedia:** [Central configuration](https://en.wikipedia.org/wiki/Central_configuration). It says: “bodies placed at rest in a central configuration will maintain the configuration as they collapse to a collision at their center of mass.”

**Sources:** none listed. No primary source with a working link was found.

### Mass centers split kinetic energy

**Remember:** Relative velocities have zero total momentum, so the kinetic energies add.

*True by definition.* MSC 70F10 (\\(n\\)-body problems). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** For particles of constant positive mass, the center of mass moves at the mass-weighted mean velocity V. Each particle’s relative velocity is its velocity minus V, so the relative momenta sum to zero (our own).

**Problem.** Total kinetic energy equals the energy of the total mass at the center velocity plus the kinetic energy of motion relative to that center.

**How the definition helps.** Expanding the kinetic energy with velocities V + uᵢ leaves a cross term V·∑mᵢuᵢ (our own). That sum is zero because V is the mass-weighted mean, so the energy splits (our own).

**Wikipedia:** [König's theorem (kinetics)](https://en.wikipedia.org/wiki/K%C3%B6nig%27s_theorem_%28kinetics%29). It says: “the kinetic energy of a system of particles is the sum of the kinetic energy associated to the movement of the center of mass”

**Sources:** none listed. No primary source with a working link was found.

### Angular momentum as a cross product gives Kepler’s area law

**Remember:** The radius sweeps out area at a rate proportional to angular momentum.

*True by definition. Confidence: medium.* MSC 70F15 (Celestial mechanics), 70F05. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** For a particle of fixed mass m, its angular momentum about the force center is L = r × p, with r its position from the center and p its mass times velocity. So \|L\|/(2m) is the rate at which r sweeps out area.

**Problem.** A particle under a central force, one directed along the line to a fixed center, sweeps out equal areas in equal times.

**How the definition helps.** The areal speed equals \|L\|/(2m), since a small swept triangle is half the parallelogram spanned by r and its change. A central force is parallel to r, so its torque is zero and L is constant. No inverse-square law is needed.

**Wikipedia:** [Kepler's laws of planetary motion](https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion). It says: “Since the final expression is proportional to the total angular momentum (r × p), Kepler's equal area law will hold for any system that conserves angular momentum.”

**Paper or page:** [Kepler's Laws of Planetary Motion/Second Law](https://proofwiki.org/wiki/Kepler's_Laws_of_Planetary_Motion/Second_Law). It says: “The line joining the sun and a planet sweeps out equal areas in equal times.”

**Sources:** none listed. No primary source with a working link was found.

### Eccentric anomaly gives orbital time

**Remember:** Use the circle’s angle to measure the ellipse’s swept area.

*True by definition.* MSC 70F15 (Celestial mechanics). arXiv astro-ph.EP. Level 2: later undergraduate.

**Definition.** Draw the circle with the major axis of a noncircular Kepler ellipse as diameter; squeezing it toward that axis by the minor-to-major axis ratio gives the ellipse. The eccentric anomaly E is the angle at the circle’s center, from the periapsis ray in the direction of motion, to the circle point that squeezes onto the body.

**Problem.** During one revolution, the elapsed fraction of a period since closest approach is (E − e sin E)/(2π). Here e is the eccentricity.

**How the definition helps.** On the circle, the area swept from the focus is a sector minus a triangle, half the squared radius times E − e sin E (our own). Squeezing scales this area and the whole circle by the same factor (our own). Kepler’s equal-area law turns this area fraction into the fraction of the period.

**Wikipedia:** [Kepler's equation](https://en.wikipedia.org/wiki/Kepler%27s_equation). It says: “M = E − e sin E”

**Sources:** none listed. No primary source with a working link was found.

### Eccentricity vectors include circles

**Remember:** A circular orbit has a zero eccentricity vector, with no preferred direction.

*Makes the theorem clean to state or prove.* MSC 70F15 (Celestial mechanics). arXiv astro-ph.EP. Level 2: later undergraduate.

**Definition.** The eccentricity vector is built from the relative position r ≠ 0 and velocity v alone: e = (v × (r × v))/μ − r/\|r\|. Here μ is the gravitational constant times the combined mass in the Newtonian two-body problem.

**Problem.** For a Kepler orbit with nonzero angular momentum, the eccentricity vector is constant. The formula gives zero for a circle without a separate choice of direction.

**How the definition helps.** The formula uses only r and v, so it needs no periapsis direction, and on a circle its two terms cancel to give zero (our own). Differentiating it with the inverse-square acceleration gives zero, so it is constant (our own).

**Wikipedia:** [Kepler orbit](https://en.wikipedia.org/wiki/Kepler_orbit). It says: “For a "close to circular" orbit the concept "eccentricity vector" defined as”

**Sources:** none listed. No primary source with a working link was found.

### Homogeneous constraints conserve mechanical energy

**Remember:** Actual velocity is allowed, so the reaction does no work.

*Rules out counterexamples.* MSC 70F25 (Nonholonomic systems related to the dynamics of a system of particles), 70H33. arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** A homogeneous linear velocity constraint restricts velocities to a vector subspace at each position, so the actual velocity always lies in it (our own). An ideal reaction force does no work on any vector in that subspace.

**Problem.** An autonomous mechanical system with conservative applied forces and ideal homogeneous linear velocity constraints conserves energy.

**How the definition helps.** The ideal reaction does no work on the actual velocity, so the dot product of Newton’s law with velocity gives energy conservation (our own). A bead made to climb an incline at a prescribed positive speed has a nonhomogeneous constraint (our own). Its kinetic energy stays constant while its potential energy grows, and the constraint force supplies the difference (our own).

**Wikipedia:** [D'Alembert's principle](https://en.wikipedia.org/wiki/D%27Alembert%27s_principle). It says: “projected onto any virtual displacement consistent with the constraints of the system is zero.”

**Sources:** none listed. No primary source with a working link was found.

### Generalized momentum makes cyclic coordinates yield constants

**Remember:** No dependence on position means no change in its momentum.

*True by definition.* MSC 70H03 (Lagrange's equations), 70H33. arXiv math-ph. Level 2: later undergraduate.

**Definition.** A coordinate q is cyclic if the Lagrangian L does not depend on q, though it may depend on the rate q̇. Its generalized momentum is ∂L/∂q̇.

**Problem.** Along every solution of Lagrange’s equations, the generalized momentum of a cyclic coordinate is constant.

**How the definition helps.** Lagrange’s equation for q says that the time derivative of ∂L/∂q̇ equals ∂L/∂q, which is zero for a cyclic coordinate (our own). For a particle of mass m in a central potential, the polar angle θ is cyclic. So mr²θ̇ is constant, which gives the inverse-square angular rate in the source.

**Paper or page:** [Derivative of Angular Component under Central Force](https://proofwiki.org/wiki/Derivative_of_Angular_Component_under_Central_Force). It says: “Then the rate of change of the angular coordinate of p is inversely proportional to the square of the radial coordinate of p.”

**Sources:** none listed. No primary source with a working link was found.

### Stationary action ignores total time derivatives at fixed endpoints

**Remember:** A total derivative changes the action only by a fixed endpoint term.

*True by definition.* MSC 70H03 (Lagrange's equations), 70H25. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** The action is the time integral of the Lagrangian, a function of position, velocity, and time. A motion is a path whose action has zero first variation when both endpoint times and positions are fixed.

**Problem.** If f depends smoothly on position and time, adding its total time derivative to the Lagrangian leaves the equations of motion unchanged.

**How the definition helps.** The integral of df/dt is f at the final endpoint minus f at the initial endpoint, and both are fixed. So the added term does not change the first variation, the stationary paths or the equations of motion (our own).

**Wikipedia:** [Lagrangian mechanics](https://en.wikipedia.org/wiki/Lagrangian_mechanics). It says: “Both Lagrangians L and L′ produce the same equations of motion since the corresponding actions S and S′ are related via”

**Sources:** none listed. No primary source with a working link was found.

### Independent momentum variations give Hamilton's equations

**Remember:** Vary momentum and position separately to get one equation from each.

*True by definition.* MSC 70H05 (Hamilton's equations). arXiv math-ph. Level 2: later undergraduate.

**Definition.** The phase space action ∫(p·q̇ − H(t,q,p)) dt, for a smooth Hamiltonian H, is a function of two independent paths, the position q and the momentum p.

**Problem.** With endpoint positions fixed, this action is stationary exactly when q̇=∂H/∂p and ṗ=−∂H/∂q.

**How the definition helps.** Because q and p vary independently, each gives its own equation (our own). Varying p gives q̇ = ∂H/∂p directly (our own). Varying q and integrating by parts gives ṗ = −∂H/∂q, since the variation vanishes at both ends (our own).

**Paper or page:** [Conditions for Functional to be Extremum of Two-variable Functional over Canonical Variable p](https://proofwiki.org/wiki/Conditions_for_Functional_to_be_Extremum_of_Two-variable_Functional_over_Canonical_Variable_p). It says: “Let J\[y,p\] = ∫ₐᵇ (−H(x,y,p) + py′) dx, where H is the Hamiltonian of J\[y\].”

**Sources:** none listed. No primary source with a working link was found.

### Poisson brackets test conservation without solving for trajectories

**Remember:** The bracket is the change from motion; add the explicit time change.

*Makes the theorem clean to state or prove.* MSC 70H05 (Hamilton's equations), 70H33. arXiv math-ph. Level 2: later undergraduate.

**Definition.** The Poisson bracket {F,H} is the sum over i of ∂F/∂qᵢ·∂H/∂pᵢ − ∂F/∂pᵢ·∂H/∂qᵢ, for functions that may also depend on time. Along a Hamiltonian trajectory, it is the part of the rate of change of F that comes from the motion (our own).

**Problem.** A smooth quantity F is constant along every local Hamiltonian trajectory exactly when ∂F/∂t+{F,H}=0 throughout the domain.

**How the definition helps.** By the chain rule and Hamilton’s equations, dF/dt = ∂F/∂t + {F,H} along every trajectory (our own). Conversely, a local trajectory passes through every point at each time, so constancy of F forces the equation throughout the domain.

**Paper or page:** [Conditions for Function to be First Integral of Euler's Equations for Vanishing Variation](https://proofwiki.org/wiki/Conditions_for_Function_to_be_First_Integral_of_Euler's_Equations_for_Vanishing_Variation). It says: “Then a necessary and sufficient condition for Φ to be the first integral of Euler's Equations is ∂Φ/∂x + \[Φ,H\] = 0”

**Sources:** none listed. No primary source with a working link was found.

### The velocity Legendre transform gives both Hamilton equations

**Remember:** Trade velocity for momentum and the unwanted velocity derivatives cancel.

*True by definition.* MSC 70H05 (Hamilton's equations), 70H03. arXiv math-ph. Level 2: later undergraduate.

**Definition.** Define p as the velocity derivative of L(t,q,v). Where this map has a smooth inverse in v, define the Hamiltonian H(t,q,p)=p·v−L(t,q,v) using that inverse.

**Problem.** Under this locally invertible change of variables, Lagrange's equations become q̇=∂H/∂p and ṗ=−∂H/∂q.

**How the definition helps.** Because ∂L/∂v = p, the terms from differentiating the substituted velocity cancel, giving ∂H/∂p = v and ∂H/∂q = −∂L/∂q (our own). Lagrange’s equations then read q̇ = ∂H/∂p and ṗ = −∂H/∂q. The inverse function theorem gives the local inverse when the matrix of second velocity derivatives is nonsingular.

**Paper or page:** [Euler's Equation for Vanishing Variation in Canonical Variables](https://proofwiki.org/wiki/Euler's_Equation_for_Vanishing_Variation_in_Canonical_Variables). It says: “Then the system (1) is transformed into: dyᵢ/dx = ∂H/∂pᵢ”

**Sources:** none listed. No primary source with a working link was found.

### A generating function preserves Hamilton's equations through endpoint terms

**Remember:** The old and new actions differ by a total derivative.

*True by definition.* MSC 70H15 (Canonical and symplectic transformations for problems in Hamiltonian and Lagrangian mechanics), 70H05. arXiv math-ph. Level 2: later undergraduate.

**Definition.** A generating function F(t,q,Q) defines a change from (q,p,H) to (Q,P,K) by p = ∂F/∂q, P = −∂F/∂Q and K = H + ∂F/∂t, where these equations give a smooth invertible change of position and momentum. Then the old action integrand minus the new one is dF/dt (our own).

**Problem.** The change defined by such a generating function sends solutions of Hamilton's equations for H to solutions for K.

**How the definition helps.** The integral of dF/dt depends only on the endpoints, so both actions have the same stationary paths under interior variations (our own). Stationarity is equivalent to Hamilton’s equations, for H in the old variables and for K in the new ones.

**Wikipedia:** [Canonical transformation](https://en.wikipedia.org/wiki/Canonical_transformation). It says: “Both sets of variables must obey Hamilton's principle.”

**Sources:** none listed. No primary source with a working link was found.

### Stationary action includes motions that do not minimize it

**Remember:** Motion needs zero first change, not least action.

*Makes the theorem clean to state or prove.* MSC 70H25 (Hamilton's principle), 70H03. arXiv math-ph. Level 2: later undergraduate.

**Definition.** The action of a particle of mass m&gt;0 in a smooth potential V is the time integral of m\|q̇\|²/2−V(q). A path has stationary action if every smooth fixed-end perturbation gives zero first derivative of the action.

**Problem.** A smooth path satisfies Newton’s equation mq̈=−∇V exactly when its action is stationary. A stationary path can fail to minimize the action.

**How the definition helps.** Integration by parts turns the first derivative into the integral of −mq̈ − ∇V against the perturbation, so stationarity forces Newton’s equation (our own). For m = 1 and V(q) = q²/2, the zero path is stationary. On \[0,T\] with T &gt; π, the perturbation ε sin(πt/T) with ε ≠ 0 lowers its action (our own).

**Wikipedia:** [Action (physics)](https://en.wikipedia.org/wiki/Action_%28physics%29). It says: “is stationary (a minimum, maximum, or a saddle point).”

**Sources:** none listed. No primary source with a working link was found.

### Stationary action makes Lagrange’s equations independent of position coordinates

**Remember:** Renaming positions cannot change which paths make the action stationary.

*True by definition. Confidence: medium.* MSC 70H25 (Hamilton's principle), 70H03. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** The action assigns each path the integral of its Lagrangian over time. A stationary path has zero first variation of this integral for every small path change with fixed endpoints.

**Problem.** Lagrange’s equations keep their form under a smooth invertible change of position coordinates when the Lagrangian describes the same action in the new coordinates.

**How the definition helps.** Stationarity depends only on the paths and their action values, not on coordinates, so a change of coordinates keeps the same stationary paths (our own). The real input is that stationary paths are exactly the solutions of Lagrange’s equations in either system (our own).

**Wikipedia:** [Hamilton's principle](https://en.wikipedia.org/wiki/Hamilton%27s_principle), [Lagrangian mechanics](https://en.wikipedia.org/wiki/Lagrangian_mechanics). It says: “This is called Hamilton's principle and it is invariant under coordinate transformations.”

**Sources:** none listed. No primary source with a working link was found.

### Mass inner products separate vibration modes

**Remember:** Use mass weights to make the vibration operator symmetric.

*True by definition.* MSC 70J10 (Modal analysis in linear vibration theory). arXiv physics.class-ph, math.DS. Level 2: later undergraduate.

**Definition.** The mass inner product of displacements u and v is uᵀMv, for the symmetric positive definite mass matrix M. In it, M⁻¹K is symmetric for the symmetric stiffness matrix K, since moving it to either side gives uᵀKv (our own).

**Problem.** A finite conservative linear system with positive definite mass and stiffness matrices has a basis of independent vibration modes. Distinct squared frequencies give orthogonal modes in the mass inner product.

**How the definition helps.** The spectral theorem for this symmetric operator gives a mass-orthonormal basis of vibration modes, each obeying one scalar oscillator equation (our own). Eigenvectors of a symmetric operator with distinct eigenvalues are orthogonal (our own). The ordinary dot product need not make M⁻¹K symmetric (our own).

**Wikipedia:** [Normal mode](https://en.wikipedia.org/wiki/Normal_mode), [Mass matrix](https://en.wikipedia.org/wiki/Mass_matrix). It says: “The modes are "normal" in the sense that they move independently.”

**Sources:** none listed. No primary source with a working link was found.

### The Rayleigh quotient gives the lowest vibration frequency

**Remember:** The lowest frequency squared is the least restoring energy per unit inertia.

*Makes the theorem clean to state or prove.* MSC 70J10 (Modal analysis in linear vibration theory). arXiv math-ph. Level 2: later undergraduate.

**Definition.** The vibration Rayleigh quotient of a nonzero displacement u is (u·Ku)/(u·Mu), restoring energy over inertia, for symmetric positive definite stiffness K and mass M. In mode coordinates it is a weighted average of the squared frequencies.

**Problem.** For Mq̈+Kq=0, the least squared frequency of a vibration with fixed shape equals the minimum of the vibration Rayleigh quotient.

**How the definition helps.** A weighted average of squared frequencies cannot fall below the smallest one, and the lowest mode attains it (our own). The spectral theorem supplies the modes, orthogonal in the mass inner product u·Mv.

**Wikipedia:** [Rayleigh quotient](https://en.wikipedia.org/wiki/Rayleigh_quotient). It says: “This is immediate after observing that the Rayleigh quotient is a weighted average of eigenvalues of M”

**Sources:** none listed. No primary source with a working link was found.

### Positive stiffness removes the drifting zero mode

**Remember:** Zero stiffness can leave free drift instead of an oscillation.

*Rules out counterexamples.* MSC 70J25 (Stability for problems in linear vibration theory), 70J10. arXiv math-ph. Level 2: later undergraduate.

**Definition.** A symmetric stiffness matrix K is positive definite if every nonzero displacement u has u·Ku &gt; 0, so no displacement costs zero energy. The mass matrix M is also symmetric positive definite.

**Problem.** Every solution of Mq̈+Kq=0 with positive definite stiffness is a sum of bounded sinusoidal motions.

**How the definition helps.** In coordinates where M is the identity, diagonalizing K gives normal coordinates with positive squared frequencies, so each one oscillates boundedly (our own). With K = 0 a free mass can drift at constant nonzero speed forever (our own).

**Wikipedia:** [Normal mode](https://en.wikipedia.org/wiki/Normal_mode). It says: “The most general motion of a linear system is a superposition of its normal modes.”

**Sources:** none listed. No primary source with a working link was found.

### Inertia metrics make rotation geodesic

**Remember:** Use rotational kinetic energy as the ruler for orientations.

*Makes the theorem clean to state or prove.* MSC 70E15 (Free motion of a rigid body), 70G45. arXiv physics.class-ph, math-ph. Level 3: graduate.

**Definition.** For a rigid body with positive definite inertia I about its center of mass, define a metric on its orientation space SO(3). At each orientation, assign squared length ω·Iω to every tangent velocity with angular velocity ω expressed in body coordinates.

**Problem.** Without external torque about the center of mass, the orientation follows a geodesic of this metric in physical time. A geodesic here is a path stationary for the integral of squared speed with fixed endpoints.

**How the definition helps.** The metric makes the free rigid-body Lagrangian equal to half the squared speed (our own). So the stationary-action principle, which gives the physical motion, is the geodesic condition in physical time (our own).

**nLab:** [Hamiltonian dynamics on Lie groups](https://ncatlab.org/nlab/show/Hamiltonian+dynamics+on+Lie+groups). It says: “The left invariant metric ⟨−, −⟩ is the moment of inertia of the body.”

**Sources:**

- [Vladimir Arnold, Sur la géométrie différentielle des groupes de Lie de dimension infinie et ses applications à l’hydrodynamique des fluides parfaits (1966)](https://www.numdam.org/item/AIF_1966__16_1_319_0/)

### Radial powers straighten zero-energy paths

**Remember:** Rescale radius and angle, and the metric becomes a flat cone.

*Makes the theorem clean to state or prove.* MSC 70F05 (Two-body problems). arXiv math.DS, math.DG. Level 3: graduate.

**Definition.** On the punctured plane, consider r⁻ᵅ times squared Euclidean length, with 0 &lt; α &lt; 2 and r the distance from the origin. Use the new radius ρ = rᶜ/c and angle φ = cθ, with c = 1 − α/2 and φ taken modulo 2πc. Then dρ and ρdφ are dr and r dθ times the same factor r<sup>(−α/2)</sup> (our own).

**Problem.** The new coordinates turn r⁻ᵅ times squared Euclidean length into the flat cone metric dρ² + ρ²dφ². Its geodesics become straight lines on the unfolded cone. Up to a change of time, they are the zero-energy orbits of H = \|p\|²/2 − r⁻ᵅ.

**How the definition helps.** The common factor gives dρ² + ρ²dφ², the Euclidean metric in polar coordinates on a cone (our own). The Jacobi–Maupertuis theorem identifies geodesics of this metric with the zero-energy orbits up to time change.

**Paper or page:** [The Kepler Cone, Maclaurin Duality and Jacobi-Maupertuis metrics](https://arxiv.org/abs/2312.08173). It says: “is isometric to the conical metric”

**Sources:**

- [The Kepler Cone, Maclaurin Duality and Jacobi-Maupertuis metrics](https://arxiv.org/abs/2312.08173)

### Jacobi energy bounds accessible regions

**Remember:** Kinetic energy is never negative, so the potential stays below the constant.

*True by definition.* MSC 70F07 (Three-body problems), 37N05. arXiv math.DS, astro-ph.EP. Level 3: graduate.

**Definition.** In the circular restricted three-body problem, use the frame rotating with the two primaries. The effective potential per unit mass is their gravitational potential plus the centrifugal potential. The Jacobi energy per unit mass adds half the squared rotating-frame speed, so it is never below the effective potential (our own).

**Problem.** For a third body of negligible mass, the effective potential along its trajectory cannot exceed its fixed Jacobi energy.

**How the definition helps.** The Jacobi energy is conserved and its kinetic part is nonnegative, so the effective potential cannot exceed it (our own). It is conserved because the effective potential does not change in time in the rotating frame and the Coriolis acceleration is perpendicular to velocity (our own).

**Wikipedia:** [Jacobi integral](https://en.wikipedia.org/wiki/Jacobi_integral). It says: “conserved quantity for the circular restricted three-body problem”

**Sources:** none listed. No primary source with a working link was found.

### Central configurations collapse without distortion

**Remember:** One inward acceleration factor gives every body the same shrink rate.

*Makes the theorem clean to state or prove.* MSC 70F15 (Celestial mechanics), 37N05. arXiv math.DS, astro-ph.EP. Level 3: graduate.

**Definition.** Start with positive point masses at distinct positions. Their positions form a central configuration if each gravitational acceleration equals a common negative constant times displacement from the center of mass.

**Problem.** If at least two masses start at rest in a Newtonian central configuration, their positions keep the same shape until total collision. All masses reach their center of mass in finite time.

**How the definition helps.** With one common factor, the guess xᵢ(t) = s(t)xᵢ(0) reduces the motion to the scalar equation s̈ = −λ/s², and uniqueness makes it the actual motion (our own). Starting from rest, this fall reaches s = 0 in finite time (our own).

**Wikipedia:** [Central configuration](https://en.wikipedia.org/wiki/Central_configuration). It says: “directly towards the center of mass, with acceleration proportional to its distance from the center.”

**Sources:** none listed. No primary source with a working link was found.

### Kepler collisions become oscillator paths

**Remember:** Square the new coordinate and slow the physical clock near collision.

*Makes the theorem clean to state or prove.* MSC 70F16 (Collisions in celestial mechanics, regularization), 70F05. arXiv math.DS, physics.class-ph. Level 3: graduate.

**Definition.** For planar Kepler motion with complex position q and momentum p, write the position as a square, q = u², with v = 2·conj(u)p, and slow the clock near collision by dt/dτ = \|u\|². At fixed energy E, the new Hamiltonian is K = \|u\|²(H − E), with H = \|p\|²/2 − k/\|q\| and k &gt; 0.

**Problem.** At negative energy the planar Kepler problem becomes a harmonic oscillator in the new variables. The oscillator trajectory extends smoothly through u = 0.

**How the definition helps.** Squaring and the clock change cancel both singular terms, leaving K = \|v\|²/8 − E\|u\|² − k (our own). For E &lt; 0 this is a harmonic oscillator, smooth even at u = 0 (our own). The remaining check is the momentum change and the clock relation on K = 0 (our own).

**Wikipedia:** [Levi-Civita regularization](https://en.wikipedia.org/wiki/Levi-Civita_regularization). It says: “is a method to transform the perturbed planar Kepler problem into a perturbed harmonic oscillator”

**Sources:**

- [Tullio Levi-Civita, Sur la régularisation du problème des trois corps (1920)](https://doi.org/10.1007/BF02404404)

### Moser coordinates reveal great circles

**Remember:** Swap position and momentum to see the sphere.

*Makes the theorem clean to state or prove.* MSC 70F16 (Collisions in celestial mechanics, regularization). arXiv physics.class-ph. Level 3: graduate.

**Definition.** On the level H = \|p\|²/2 − 1/\|q\| = −1/2, swap roles: read x = p as stereographic coordinates on the unit sphere and y = −q as a covector there. The new Hamiltonian K = \|y\|(1 + \|x\|²)/2 is the covector’s spherical length, and K − 1 = \|q\|(H + 1/2) (our own).

**Problem.** On this energy surface, the coordinate change takes Hamiltonian orbits to unit spherical covectors tracing great circles, up to a change of time. The spherical flow continues through the missing pole.

**How the definition helps.** The swap preserves the symplectic form, and the identity K − 1 = \|q\|(H + 1/2) makes the two Hamiltonian fields differ by the positive factor \|q\| on this level (our own). The spherical length generates unit-speed great circles, which extend through the pole (our own).

**Wikipedia:** [Moser regularization](https://en.wikipedia.org/wiki/Moser_regularization). It says: “into a geodesic flow on the sphere using the Moser (regularization) map”

**Sources:**

- [Jürgen Moser, Regularization of Kepler’s problem and the averaging method on a manifold](https://doi.org/10.1002/cpa.3160230406)

### Allowed symmetries conserve constrained momentum

**Remember:** A symmetry keeps its momentum when its direction cannot feel the reaction.

*Rules out counterexamples.* MSC 70F25 (Nonholonomic systems related to the dynamics of a system of particles), 70H33. arXiv physics.class-ph, math-ph. Level 3: graduate.

**Definition.** A symmetry, a smooth one-parameter group acting on configuration space that preserves the Lagrangian, is horizontal if its direction at each position is an allowed velocity. That direction is the velocity of the group orbit at parameter zero.

**Problem.** Suppose the allowed velocities form a vector space at each position and constraint forces do no work along those directions. For a horizontal symmetry, momentum evaluated on its direction stays constant.

**How the definition helps.** Since the symmetry direction is allowed, the constraint force does no work along it and adds nothing to the rate of change of the symmetry’s momentum (our own). Invariance of the Lagrangian removes the remaining term (our own). For a rolling disk, sideways translations are not allowed, and its linear momentum changes when its heading turns (our own).

**Paper or page:** [Affine generalizations of the nonholonomic problem of a convex body rolling without slipping on the plane](https://arxiv.org/abs/2409.08072v1). It says: “ξ is a horizontal symmetry), then Jξ\|𝒟 is a first integral of the nonholonomic system (L, Q, 𝒟).”

**Sources:**

- [Affine generalizations of the nonholonomic problem of a convex body rolling without slipping on the plane](https://arxiv.org/abs/2409.08072v1)

### Contact geometry preserves zero energy

**Remember:** Feed the field to itself: h changes in proportion to h.

*True by definition.* MSC 70G45 (Differential geometric methods (tensors, connections, symplectic, Poisson, contact, Riemannian, nonholonomic, etc.) for problems in mechanics). arXiv math-ph, math.DG. Level 3: graduate.

**Definition.** On a contact manifold with form η, the contact Hamiltonian field X of a smooth h satisfies η(X) = −h and dη(X, ·) = dh − R(h)η, where the Reeb field R has η(R) = 1 and dη(R, ·) = 0. Applying the second equation to X itself gives X(h) = −R(h)h, since dη(X, X) = 0.

**Problem.** A smooth autonomous contact Hamiltonian h stays zero along any trajectory that starts at zero. Its sign stays fixed on every trajectory where it starts nonzero.

**How the definition helps.** Along a trajectory, h obeys the linear equation dh/dt = −R(h)h (our own). So h is its initial value times a positive exponential, which keeps zero at zero and keeps the sign fixed (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650). It says: “ℒ(Xₕ)h = −(ℛ(h))h.”

**Sources:** none listed. No primary source with a working link was found.

### Rescaled contact forms give Reeb flows

**Remember:** Divide the form by minus h, and X becomes its Reeb field.

*True by definition.* MSC 70G45 (Differential geometric methods (tensors, connections, symplectic, Poisson, contact, Riemannian, nonholonomic, etc.) for problems in mechanics). arXiv math-ph, math.DG. Level 3: graduate.

**Definition.** For a contact form η, its Reeb field R satisfies η(R) = 1 and dη(R, ·) = 0. For smooth h, its contact Hamiltonian field X satisfies η(X) = −h and dη(X, ·) = dh − R(h)η. Wherever h ≠ 0, define β = −η/h.

**Problem.** On the region where h is nonzero, the contact Hamiltonian field of h is the Reeb field of −η/h.

**How the definition helps.** Since η(X) = −h, we get β(X) = 1 (our own). The cited form Ω = −h dη + dh ∧ η satisfies dβ = Ω/h² and Ω(X, ·) = 0, so dβ(X, ·) = 0 (our own). These are the Reeb equations for β, which is still a contact form, so X is its Reeb field (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650). It says: “Ω = −h dη + dh ∧ η”

**Sources:** none listed. No primary source with a working link was found.

### Regular Lagrangians give local momentum inverses

**Remember:** Regular means the velocity Hessian is invertible everywhere.

*Rules out counterexamples.* MSC 70H03 (Lagrange's equations), 37J55. arXiv math.DS. Level 3: graduate.

**Definition.** A smooth Lagrangian L of position and velocity, possibly with an extra parameter, is regular when its matrix of second velocity derivatives is invertible everywhere. That matrix is the derivative of the momentum map v ↦ ∂L/∂v at fixed position (our own).

**Problem.** For a regular Lagrangian, the Legendre map from velocities to momenta has a smooth local inverse at every point.

**How the definition helps.** The Legendre map fixes position and any parameter, so its derivative is invertible exactly when the velocity Hessian is (our own). The inverse function theorem then gives a smooth local inverse (our own). A Lagrangian linear in velocity fails: all velocities at one position give the same momentum (our own).

**Paper or page:** [The evolution operator connecting the Lagrangian and Hamiltonian formalisms for contact systems](https://arxiv.org/abs/2511.13401v1). It says: “The Legendre map ℱL is a local diffeomorphism.”

**Sources:** none listed. No primary source with a working link was found.

### Characteristic lines determine Hamiltonian orbits

**Remember:** The characteristic line pairs to zero with every surface tangent.

*True by definition.* MSC 70H05 (Hamilton's equations). arXiv math.DS, math.DG. Level 3: graduate.

**Definition.** On a hypersurface of a symplectic manifold with form ω, the characteristic line at a point is the set of tangent vectors v with ω(v, w) = 0 for every tangent vector w of the hypersurface. It depends only on the hypersurface, not on any function that defines it (our own).

**Problem.** Two Hamiltonians with the same regular energy surface trace the same local paths there, up to time change and possible reversal.

**How the definition helps.** If H defines the surface regularly, its Hamiltonian field X satisfies ω(X, w) = dH(w) = 0 for each tangent w and is nonzero, so X spans the characteristic line (our own). Two such Hamiltonians therefore have parallel fields on the surface, so their orbits agree up to time change and reversal (our own).

**Paper or page:** [The Kepler Cone, Maclaurin Duality and Jacobi-Maupertuis metrics](https://arxiv.org/abs/2312.08173). It says: “If two different functions on phase space share the same non-degenerate level set, then their Hamiltonian vector fields are parallel along this level set.”

**Sources:**

- [The Kepler Cone, Maclaurin Duality and Jacobi-Maupertuis metrics](https://arxiv.org/abs/2312.08173)

### Exterior powers preserve Hamiltonian volume

**Remember:** Preserve the form and every exterior power survives.

*True by definition.* MSC 70H05 (Hamilton's equations), 37J06. arXiv math-ph, physics.class-ph. Level 3: graduate.

**Definition.** On a symplectic manifold of dimension 2n with symplectic form Ω, Liouville volume is the exterior product of n copies of Ω, up to a constant factor. So any map that preserves Ω also preserves this volume (our own).

**Problem.** Hamiltonian motion preserves Liouville volume.

**How the definition helps.** Hamiltonian flows preserve Ω, and pulling back respects exterior products, so they preserve Ωⁿ (our own). In canonical position and momentum coordinates, Ωⁿ is ordinary volume up to a constant (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650v2). It says: “Let (M, Ω) be a symplectic manifold and Ωⁿ the Liouville volume form in M.”

**Sources:** none listed. No primary source with a working link was found.

### Hyperregularity makes Hamiltonians single valued

**Remember:** Local momentum inverses can disagree, but a global inverse cannot.

*Rules out counterexamples.* MSC 70H05 (Hamilton's equations), 70H03. arXiv physics.class-ph, math.DS. Level 3: graduate.

**Definition.** A smooth Lagrangian L is hyperregular when its Legendre map, sending position and velocity v to position and momentum ∂L/∂v, has a smooth inverse on the whole cotangent bundle. Regularity asks only that the map’s derivative be invertible.

**Problem.** For a hyperregular Lagrangian, its energy p·v − L gives a unique smooth Hamiltonian on the entire cotangent bundle.

**How the definition helps.** The global inverse picks one velocity for each position and momentum, so p·v − L becomes a single smooth function (our own). For L = eᵘ cos v with velocity components u and v, the velocity Hessian has determinant −e²ᵘ, but v and v + 2π give the same momenta and energies differing by 2π times the second momentum (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650v2). It says: “Then there exists a unique function h ∈ C∞(T\*Q)”

**Sources:** none listed. No primary source with a working link was found.

### Regular levels exclude the upright pendulum equilibrium

**Remember:** Check independence everywhere before calling a compact level a torus.

*Rules out counterexamples.* MSC 70H06 (Completely integrable systems and methods of integration for problems in Hamiltonian and Lagrangian mechanics), 37J35. arXiv math.DS, math-ph. Level 3: graduate.

**Definition.** Commuting integrals are smooth functions, constant along the motion, each constant under the Hamiltonian flows of the others. A common level of n such integrals is regular if their differentials are linearly independent at every point of it.

**Problem.** Consider n commuting integrals on a symplectic phase space of dimension 2n. Each nonempty compact connected regular common level is an n-dimensional torus, a product of n circles.

**How the definition helps.** Regularity lets the n commuting flows act locally freely on the level, so a compact connected level is Euclidean space modulo a lattice of periods, a torus (our own). At the pendulum’s upright rest point the energy derivative vanishes, and its level is two loops crossing there, not a circle (our own).

**Paper or page:** [Arnold diffusion and geodesic dynamics of blackholes](https://arxiv.org/abs/2012.03047v1). It says: “At each point of M𝐚, the n vectors DHᵢ, i = 1, …, n are linearly independent.”

**Sources:** none listed. No primary source with a working link was found.

### Fixing energy makes the return section symplectic

**Remember:** Fixed energy erases the effect of different return times.

*Rules out counterexamples. Confidence: medium.* MSC 70H12 (Periodic and almost periodic solutions for problems in Hamiltonian and Lagrangian mechanics), 37J11. arXiv math.DS, math-ph. Level 3: graduate.

**Definition.** A Poincaré section is a hypersurface inside a regular energy surface, one where the energy derivative never vanishes, that crosses the flow transversally. The return map sends each point to its next crossing wherever the return time is smooth.

**Problem.** For an autonomous Hamiltonian flow, the return map preserves the symplectic form restricted to the section. That restricted form is nondegenerate.

**How the definition helps.** On a regular energy surface the restricted form has the flow direction as its kernel, and transversality removes that kernel on the section (our own). Different return times add only flow-direction terms to the derivative, which the form ignores, so symplecticity of the flow gives preservation (our own). Without fixing energy, a section of the whole phase space is odd-dimensional and carries no nondegenerate two-form (our own).

**Wikipedia:** [Poincaré map](https://en.wikipedia.org/wiki/Poincar%C3%A9_map). It says: “the Poincaré section, transversal to the flow of the system.”

**Sources:** none listed. No primary source with a working link was found.

### Discrete actions preserve the symplectic form

**Remember:** One step’s action is a generating function, so the step is symplectic.

*True by definition.* MSC 70H15 (Canonical and symplectic transformations for problems in Hamiltonian and Lagrangian mechanics). arXiv physics.class-ph. Level 3: graduate.

**Definition.** A discrete Lagrangian is a smooth function L(q,Q) of two successive positions with invertible mixed derivative matrix. It defines a local time step (q,p) ↦ (Q,P) by p = −∂L/∂q and P = ∂L/∂Q, so P·dQ − p·dq = dL along the step (our own).

**Problem.** The local time step preserves the canonical symplectic form, the skew pairing between position and momentum directions.

**How the definition helps.** Taking the exterior derivative of P·dQ − p·dq = dL gives dP ∧ dQ = dp ∧ dq, because d(dL) = 0 (our own).

**Wikipedia:** [Variational integrator](https://en.wikipedia.org/wiki/Variational_integrator). It says: “Variational integrators are momentum-preserving and symplectic.”

**Sources:**

- [Marsden and West, Discrete mechanics and variational integrators](https://doi.org/10.1017/S096249290100006X)

### Identity needs different generating coordinates

**Remember:** Choose independent coordinates on the graph before integrating.

*Rules out counterexamples.* MSC 70H15 (Canonical and symplectic transformations for problems in Hamiltonian and Lagrangian mechanics), 37J11. arXiv math-ph, physics.class-ph. Level 3: graduate.

**Definition.** A canonical transformation preserves the canonical symplectic form. Suppose old positions q and new positions Q give coordinates on its graph. A type-one generating function S(q,Q) satisfies p = ∂S/∂q and P = −∂S/∂Q there.

**Problem.** A canonical transformation has a local type-one generating function where the old and new positions give coordinates on its graph. The identity has no such function on any open set.

**How the definition helps.** The identity has Q = q on its graph, so old and new positions are never independent coordinates there (our own). Where they are, preservation of the symplectic form makes p·dq − P·dQ closed on the graph, so it has a local primitive S with the required derivatives (our own).

**nLab:** [generating function in classical mechanics](https://ncatlab.org/nlab/show/generating+function+in+classical+mechanics). It says: “the difference must be a (variation of the integral of the) total differential of a function, which can be chosen as a function of some set of old and new coordinates in a consistent way.”

**Sources:** none listed. No primary source with a working link was found.

### Hamilton–Jacobi solutions give invariant graphs

**Remember:** H constant on the graph keeps the flow on the graph.

*True by definition.* MSC 70H20 (Hamilton-Jacobi equations in mechanics), 37J35. arXiv math.DS, math.SG. Level 3: graduate.

**Definition.** A smooth function S on positions defines the graph of its differential, the points (q, dS(q)) of phase space. S solves the stationary Hamilton–Jacobi equation when the Hamiltonian H is locally constant on this graph.

**Problem.** A solution of the stationary Hamilton–Jacobi equation gives a graph that Hamiltonian trajectories stay on locally.

**How the definition helps.** The graph is Lagrangian: it has half the dimension and the symplectic form vanishes on it, by equality of mixed second derivatives (our own). So a vector is tangent to it exactly when it pairs to zero with every graph tangent (our own). The Hamiltonian field passes this test because H has zero derivative along the graph (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650v2). It says: “which is invariant by Xₕ, and S is a local generating function of this Lagrangian submanifold.”

**Sources:** none listed. No primary source with a working link was found.

### Hill regions exclude brake points

**Remember:** Where all kinetic energy vanishes, the Jacobi metric vanishes too.

*Rules out counterexamples.* MSC 70H30 (Other variational principles in mechanics), 70F10. arXiv physics.class-ph, math.DS. Level 3: graduate.

**Definition.** For constant positive masses in a smooth potential V, the Jacobi metric at energy E is 2(E − V) times the kinetic energy metric, which gives each velocity twice its kinetic energy as squared length. It is positive definite exactly on the open Hill region V &lt; E (our own).

**Problem.** Away from collisions, Newtonian paths of energy E inside the open Hill region follow geodesics, the locally straight paths of the Jacobi metric. Conversely, each nonconstant geodesic there gives such a trajectory after a local change of time.

**How the definition helps.** On the open Hill region, the Jacobi–Maupertuis principle relates Newton’s equations and the geodesic equations by an invertible change of time (our own). At a brake point, such as the top of a vertical throw, V = E and the metric degenerates (our own).

**Paper or page:** [The negative energy N-body problem has finite diameter](https://arxiv.org/abs/2406.05563v1). It says: “Away from collisions and brake points, the energy E solutions to Newton’s equations are reparameterizations of geodesics on the Hill region.”

**Sources:** none listed. No primary source with a working link was found.

### The Jacobi metric makes paths geodesic

**Remember:** Fold the potential into the ruler, so action becomes length.

*Makes the theorem clean to state or prove.* MSC 70H30 (Other variational principles in mechanics), 70G45. arXiv physics.class-ph, math-ph. Level 3: graduate.

**Definition.** Let the energy be kinetic energy plus a potential V that depends only on position. At energy E, the Jacobi metric multiplies the mass metric, in which squared speed is twice kinetic energy, by 2(E − V) where V &lt; E. With this factor, the Jacobi length of a path equals its fixed-energy action ∫ p · dq (our own).

**Problem.** On every segment where V &lt; E, a trajectory of energy E becomes a geodesic of the Jacobi metric after a change of time. Such a path is stationary for Jacobi length.

**How the definition helps.** Jacobi length equals the action ∫ p · dq at energy E, so a path that makes the action stationary is a geodesic (our own). Maupertuis’s principle supplies that step: the mechanical path makes this action stationary among paths with fixed endpoints and energy (our own).

**Wikipedia:** [Maupertuis's principle](https://en.wikipedia.org/wiki/Maupertuis%27s_principle). It says: “𝒮₀ ≝ ∫ p · dq = ∫ ds √2 √(Eₜₒₜ − V(q))”

**Sources:** none listed. No primary source with a working link was found.

### Augmented energy detects steady rotation

**Remember:** Subtract the symmetry motion, and steady rotation becomes a rest point.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics), 70E17. arXiv math.DS, math-ph. Level 3: graduate.

**Definition.** A relative equilibrium is a trajectory that follows a one-parameter symmetry motion. Let J be a momentum function whose Hamiltonian field is the symmetry’s velocity field. The augmented energy H − J then generates the true motion minus the symmetry motion (our own).

**Problem.** Suppose the symmetry preserves H. A point follows the chosen symmetry motion exactly when the derivative of H − J vanishes there.

**How the definition helps.** A point follows the symmetry motion exactly when the field of H − J vanishes there (our own). A nondegenerate symplectic form makes this the same as d(H − J) = 0 (our own). Because the symmetry preserves H, equality at the initial point persists along the symmetry orbit (our own).

**Paper or page:** [Nonlinear Stability of Relative Equilibria and Isomorphic Vector Fields](https://arxiv.org/abs/1707.02828v4). It says: “the point $m\\in M$ is a critical point of the function $h<sup>\\xi</sup> :=h-\\langle \\Phi ,\\xi \\rangle $.”

**Sources:** none listed. No primary source with a working link was found.

### Discrete action symmetries conserve momentum

**Remember:** One step’s outgoing momentum equals the next step’s incoming momentum.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics), 65P10. arXiv math-ph, physics.class-ph. Level 3: graduate.

**Definition.** A discrete Lagrangian gives each step between two positions an action. A motion is a sequence of positions whose total action is unchanged to first order when any one interior position moves. A step’s symmetry momentum is the derivative of its action as its final position moves along the symmetry.

**Problem.** Suppose a smooth one-parameter symmetry leaves every step’s action unchanged when applied to both positions together. Along a stationary path, all steps have the same symmetry momentum.

**How the definition helps.** Stationarity at a shared position makes one step’s final derivative equal minus the next step’s initial derivative (our own). Symmetry of the next step makes minus its initial derivative equal its final derivative, both taken along the symmetry (our own). Together these give adjacent steps the same symmetry momentum (our own).

**Paper or page:** [Energy and quadratic invariants preserving methods for Hamiltonian systems with holonomic constraints](https://arxiv.org/abs/2007.06338v1). It says: “p<sub>n+1</sub><sup>T</sup> a(q<sub>n+1</sub>)=p<sub>n</sub><sup>T</sup> a(q<sub>n</sub>)”

**Sources:**

- [Jerrold E. Marsden and Matthew West, Discrete Mechanics and Variational Integrators (2001)](https://doi.org/10.1017/S096249290100006X)

### Invariant primitives give symmetry momentum

**Remember:** Feed the symmetry direction to the invariant one-form.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics), 53D20. arXiv math-ph. Level 3: graduate.

**Definition.** An exact symplectic form Ω = dΘ comes with a primitive one-form Θ, and an exact symmetry action preserves Θ. For a one-parameter symmetry with velocity field Y, the candidate momentum is J = −Θ(Y), the one-form evaluated on Y with a minus sign (our own).

**Problem.** For each Y, the function J = −Θ(Y) has Hamiltonian field Y. This uses the convention Ω(Y, ·) = dJ.

**How the definition helps.** Cartan’s formula and the invariance of Θ give 0 = d(Θ(Y)) + Ω(Y, ·), so dJ = Ω(Y, ·) (our own). Thus the invariant primitive writes down the momentum function directly, with no equation for J to solve (our own).

**Paper or page:** [Geometry of Mechanics](https://arxiv.org/abs/2401.12650v2). It says: “If (M, Ω) is an exact symplectic manifold and the action of G on M is exact, then a momentum map exists.”

**Sources:** none listed. No primary source with a working link was found.

### Partial Legendre transforms eliminate cyclic velocities

**Remember:** Subtract the momentum term so the hidden velocity leaves no trace.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics). arXiv physics.class-ph, math.SG. Level 3: graduate.

**Definition.** A cyclic coordinate is absent from the Lagrangian L, though its velocity v appears. Fix its momentum p = ∂L/∂v, solve for v, and substitute into L − pv. Subtracting pv makes the result stationary in v (our own).

**Problem.** When the cyclic velocity can be solved smoothly from its momentum, the reduced Lagrangian gives the equations for the remaining coordinates.

**How the definition helps.** Since ∂(L − pv)/∂v = ∂L/∂v − p = 0 at the solved velocity, substitution leaves no chain-rule terms (our own). The cyclic coordinate’s own equation keeps p constant, so p is a fixed parameter in the reduced equations (our own).

**Wikipedia:** [Routhian mechanics](https://en.wikipedia.org/wiki/Routhian_mechanics). It says: “The Routhian approach has the best of both approaches, because cyclic coordinates can be split off to the Hamiltonian equations and eliminated”

**Sources:** none listed. No primary source with a working link was found.

### Reduced brackets carry the flow

**Remember:** Pull back functions, bracket upstairs, read the answer downstairs.

*True by definition.* MSC 70H33 (Symmetries and conservation laws, reverse symmetries, invariant manifolds and their bifurcations, reduction for problems in Hamiltonian and Lagrangian mechanics). arXiv math-ph, math.DG. Level 3: graduate.

**Definition.** A Jacobi bracket is a Lie bracket on functions of differential order at most one in each argument. Let a Lie group preserve it, with orbit projection π a submersion onto a smooth quotient. The reduced bracket of smooth quotient functions f and g satisfies {f,g} ∘ π = {f ∘ π, g ∘ π}.

**Problem.** For a symmetry that preserves the Jacobi bracket and the Hamiltonian, the flow projects to the flow of the reduced Hamiltonian under the reduced bracket.

**How the definition helps.** The defining rule makes pullback by π preserve brackets, so the two flows can be compared on functions without coordinates on the quotient (our own). The Jacobi evolution uses the bracket with the Hamiltonian and a term with the constant function one, and pullback preserves both (our own). Existence requires that brackets of invariant functions descend to smooth quotient functions (our own).

**Paper or page:** [Reduction by symmetries of contact mechanical systems on Lie groups](https://arxiv.org/abs/2306.07028). It says: “called the reduced Jacobi bracket such that π is a Jacobi map.”

**Sources:**

- [Reduction by symmetries of contact mechanical systems on Lie groups](https://arxiv.org/abs/2306.07028)

### Dirac brackets freeze constraints

**Remember:** Invert the constraint matrix to subtract exactly the forbidden motion.

*True by definition.* MSC 70H45 (Constrained dynamics, Dirac's theory of constraints), 53D17. arXiv physics.class-ph, math.SG. Level 3: graduate.

**Definition.** On a Poisson manifold, smooth constraints φ₁,…,φₖ are second class where their bracket matrix Cᵢⱼ = {φᵢ,φⱼ} is invertible. There the Dirac bracket subtracts from {f,g} the part that passes through the constraints: {f,g}ᴰ = {f,g} − ∑ᵢⱼ {f,φᵢ}(C⁻¹)ᵢⱼ{φⱼ,g}.

**Problem.** Each constraint has zero Dirac bracket with every smooth function wherever C is invertible.

**How the definition helps.** Put f = φₘ: the correction becomes ∑ⱼ (CC⁻¹)ₘⱼ{φⱼ,g} = {φₘ,g}, which cancels the ordinary bracket (our own). Checking the Jacobi identity for the new bracket is separate work (our own).

**Wikipedia:** [Dirac bracket](https://en.wikipedia.org/wiki/Dirac_bracket). It says: “vanishing for an argument which is a second-class constraint.”

**Sources:**

- [P. A. M. Dirac, Generalized Hamiltonian Dynamics (1950)](https://doi.org/10.4153/CJM-1950-012-1)

### Bounded vibrations exclude Jordan growth

**Remember:** A unit multiplier needs full eigenvectors, or a Jordan block grows.

*Rules out counterexamples.* MSC 70J25 (Stability for problems in linear vibration theory), 34D20. arXiv physics.class-ph, math.DS. Level 3: graduate.

**Definition.** Take a homogeneous linear vibration equation with continuous periodic coefficients. Its multipliers are the eigenvalues of the matrix sending each state to the state one period later. A multiplier is semisimple when its eigenspace dimension equals its algebraic multiplicity, so all its Jordan blocks have size one (our own).

**Problem.** All solutions stay bounded for forward time exactly when every multiplier has modulus at most one and every multiplier of modulus one is semisimple.

**How the definition helps.** Powers of the one-period matrix stay bounded exactly when all multipliers have modulus at most one and those of modulus one are semisimple (our own). Continuity bounds the motion within one period, so bounded powers give bounded solutions (our own). A free mass has a repeated multiplier 1 without a second eigenvector, and its position grows linearly (our own).

**Wikipedia:** [Floquet theory](https://en.wikipedia.org/wiki/Floquet_theory). It says: “the Floquet multipliers of modulus 1 are semisimple (equivalently, their algebraic and geometric multiplicities agree)”

**Sources:** none listed. No primary source with a working link was found.

### Metric variation makes the Hilbert stress tensor symmetric and gauge invariant

**Remember:** Differentiate the action in a symmetric metric, holding matter fields fixed.

*True by definition. Confidence: medium.* MSC 70S05 (Lagrangian formalism and Hamiltonian formalism in mechanics of particles and systems), 83C40, 81T13. arXiv gr-qc, hep-th. Level 3: graduate.

**Definition.** The Hilbert stress tensor T is the derivative of the matter action S with respect to the metric, with matter fields fixed. It is the symmetric tensor with δS = −½∫Tₐᵦ δgᵃᵇ dvol<sub>g</sub> for every compactly supported symmetric variation δgᵃᵇ of the inverse metric.

**Problem.** The Hilbert stress tensor is symmetric. If the matter action is gauge invariant for every metric and gauge transformations do not involve the metric, the tensor is also gauge invariant.

**How the definition helps.** Symmetry holds by construction, because the derivative acts only on symmetric variations (our own). Gauge-related fields give equal actions for every metric, and differentiating this identity in the metric gives equal stress tensors (our own).

**Wikipedia:** [Stress–energy tensor](https://en.wikipedia.org/wiki/Stress%E2%80%93energy_tensor). It says: “This is symmetric and gauge-invariant.”

**Sources:** none listed. No primary source with a working link was found.

### Symmetry fixes the asteroid midpoint

**Remember:** Equal asteroids on opposite sides keep their midpoint at the center.

*Makes the theorem clean to state or prove.* MSC 70F15 (Celestial mechanics). arXiv astro-ph.EP. Level 4: research.

**Definition.** In the planar model of two primaries and two asteroids, use coordinates rotating with the primaries. The symmetric subsystem consists of the states with asteroid midpoint at the center and zero total asteroid momentum. These are exactly the states fixed by a half-turn combined with swapping the two asteroids (our own).

**Problem.** Assume the two larger bodies have equal masses and the two asteroids have equal masses. Each equilibrium or periodic orbit of the reduced equations gives one in the full model.

**How the definition helps.** With equal primaries and equal asteroids, this half-turn with swap is a symmetry of the equations, so its fixed states are invariant (our own). Uniqueness of solutions keeps a solution that starts there inside the set, so reduced equilibria and periodic orbits are also full ones (our own).

**Paper or page:** [Relative Equilibria and Periodic Orbits in a Binary Asteroid Model](https://arxiv.org/abs/2306.00273v1). It says: “defines an equilibrium or T-periodic solution of the Hamiltonian system”

**Sources:**

- [Lennard F. Bakker and Nicholas J. Freeman, Relative Equilibria and Periodic Orbits in a Binary Asteroid Model](https://arxiv.org/abs/2306.00273v1)

### A closed rescaled form gives an invariant volume

**Remember:** Multiply the form by exp(φ) until it closes.

*Makes the theorem clean to state or prove.* MSC 70F25 (Nonholonomic systems related to the dynamics of a system of particles), 37J60. arXiv math-ph, math.DS. Level 4: research.

**Definition.** On the reduced phase space of a Chaplygin system, let Ω be a nondegenerate two-form with dynamics Ω(X, ·) = dH. A position function φ makes Ω conformally symplectic if exp(φ)Ω is closed. Then exp(φ)Ω is symplectic, with Hamiltonian field exp(−φ)X for H (our own).

**Problem.** Under this condition in dimension 2m, the reduced flow preserves exp((m − 1)φ) times the exterior product of m copies of Ω.

**How the definition helps.** The Hamiltonian field exp(−φ)X preserves the Liouville volume exp(mφ)Ωᵐ of exp(φ)Ω (our own). Multiplying a field by the positive function exp(φ) divides its invariant density by exp(φ), giving the stated volume (our own). The paper’s φ-simplicity condition makes exp(φ)Ω closed (our own).

**Paper or page:** [Projective geodesic extensions by conformal modifications in nonholonomic mechanics](https://arxiv.org/abs/2509.15863v1). It says: “If the system is φ-simple, the reduced Chaplygin equations have an invariant volume form”

**Sources:**

- [Projective geodesic extensions by conformal modifications in nonholonomic mechanics](https://arxiv.org/abs/2509.15863v1)

### Constraint leaves give canonical relations

**Remember:** Two points on one leaf are one point downstairs.

*Makes the theorem clean to state or prove.* MSC 70H45 (Constrained dynamics, Dirac's theory of constraints), 53D12. arXiv math-ph. Level 4: research.

**Definition.** A coisotropic surface in phase space contains every direction symplectically perpendicular to its tangent space, and these directions sweep out leaves. The relation pairs two points exactly when they lie on one leaf, which means they have the same image in the space of leaves (our own).

**Problem.** Suppose the leaves form a smooth space and the projection onto it has surjective derivative everywhere. In finite dimensions the relation is then Lagrangian: it has half the product dimension, and the difference of the two forms vanishes on it.

**How the definition helps.** Paired points have the same image, so both factors give the same reduced form and the difference vanishes (our own). The work is proving that the restricted form comes from the space of leaves (our own). For codimension k in dimension 2n, the first point has 2n − k free dimensions and its partner k more, giving 2n (our own).

**Paper or page:** [Constrained systems, generalized Hamilton-Jacobi actions, and quantization](https://arxiv.org/abs/2012.13270v3). It says: “If M is finite-dimensional, then L is lagrangian, hence a canonical relation from M to itself.”

**Sources:**

- [Constrained systems, generalized Hamilton-Jacobi actions, and quantization](https://arxiv.org/abs/2012.13270v3)

### Taking gauge fields as maps into a moduli stack restores locality

**Remember:** Glue local connections using gauge isomorphisms that compose consistently on triple overlaps.

*True by definition. Confidence: medium.* MSC 70S15 (Yang-Mills and other gauge theories in mechanics of particles and systems), 81T13, 18F20. arXiv math-ph, math.DG. Level 4: research.

**Definition.** The stack of G-connections assigns to each open set U the groupoid of principal G-bundles with connection on U and their connection-preserving isomorphisms. Unlike a sheaf of sets, it keeps the gauge isomorphisms, so local fields glue along overlap isomorphisms satisfying the cocycle identity on triple overlaps.

**Problem.** On any open cover of X, compatible local Yang–Mills fields glue in the stack of G-connections, including fields in every instanton sector. No ordinary field bundle represents this gluing of configurations and their gauge isomorphisms.

**How the definition helps.** Descent glues the local bundles and connections along the chosen overlap isomorphisms (our own). Those isomorphisms carry the transition data, so a nontrivial instanton sector appears even when every local bundle is trivial (our own). Ordinary sections form a sheaf of sets, so they forget the isomorphisms and cannot record the sector (our own).

**nLab:** [field (physics)](https://ncatlab.org/nlab/show/field+%28physics%29), [field bundle](https://ncatlab.org/nlab/show/field+bundle). It says: “In summary: there cannot be a fiber bundle such that its sheaf of local sections is the sheaf of configurations of the Yang-Mills field. But there is a fiber 2-bundle whose stack of sections is the stack of configurations of the Yang-Mills field.”

**Sources:**

- [Marco Benini, Claudio Dappiaggi, Alexander Schenkel, Quantized Abelian principal connections on Lorentzian manifolds, Communications in Mathematical Physics 330 (2014) 123–152, arXiv:1303.2515](https://arxiv.org/abs/1303.2515)
- [Marco Benini, Alexander Schenkel, Richard J. Szabo, Homotopy colimits and global observables in Abelian gauge theory, Letters in Mathematical Physics 105 (2015) 1193–1222, arXiv:1503.08839](https://arxiv.org/abs/1503.08839)
