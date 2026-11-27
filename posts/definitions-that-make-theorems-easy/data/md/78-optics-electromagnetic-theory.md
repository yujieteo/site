### Reduced ray angles give unit determinants

**Remember:** Index times angle keeps the ray map’s determinant at one.

*True by definition.* MSC 78A05 (Geometric optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** For rays close to the optical axis, describe a ray by its height and nθ. Here θ is its small angle to the axis, and n is the speed of light in vacuum divided by its speed in the medium.

**Problem.** In centered paraxial optics, propagation and refraction in one meridian give a ray transfer matrix of determinant one in these coordinates.

**How the definition helps.** Multiplying the angle by n cancels the index ratio in the ordinary transfer determinant in our own calculation. With angle alone, refraction at a flat boundary gives the incident index divided by the outgoing index. Our own argument uses the small-angle refraction law and multiplication of determinants along the optical system.

**Wikipedia:** [Ray transfer matrix analysis](https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis). It says: “the second element of the ray vector is n sin θ”

**Sources:** none listed. No primary source with a working link was found.

### Stationary travel time includes nonminimal rays

**Remember:** A ray’s travel time need not be the shortest nearby time.

*Makes the theorem clean to state or prove.* MSC 78A05 (Geometric optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** Define a geometric ray by stationary travel time under small path changes with fixed endpoints. Stationary means that the first-order change vanishes. This replaces the rule that a ray always takes the least time.

**Problem.** At a smooth mirror in a uniform medium, a reflected ray makes equal angles with the surface normal, even when nearby paths take less time.

**How the definition helps.** In our own proof, shifting the reflection point along the mirror makes the travel-time derivative compare the two tangential ray components. Stationarity makes these components equal, giving the reflection law in our own calculation. A sufficiently concave mirror admits reflected paths whose travel time can decrease under a small change. The stationary rule covers them too.

**Wikipedia:** [Fermat's principle](https://en.wikipedia.org/wiki/Fermat%27s_principle). It says: “In order to be true in all cases, this statement must be weakened by replacing the "least" time with a time that is "stationary”

**Sources:** none listed. No primary source with a working link was found.

### Jones matrices compose by multiplication

**Remember:** Put the matrix of the first optical element on the right.

*True by definition.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** For a fully polarized beam at one frequency, record the two complex electric field amplitudes perpendicular to its direction of travel. A linear element that preserves full polarization acts on this pair by a Jones matrix. This replaces separate tracking of the polarization ellipse and phase.

**Problem.** For a beam passing through a chain of linear elements, the chain’s Jones matrix is their product, with the first element on the right.

**How the definition helps.** In our own explanation, multiplying matrices composes their actions on the field amplitudes. Our own calculation needs each element’s action on two basis inputs and matching bases between adjacent elements.

**Wikipedia:** [Jones calculus](https://en.wikipedia.org/wiki/Jones_calculus). It says: “Polarized light is represented by a Jones vector, and linear optical elements are represented by Jones matrices.”

**Sources:**

- [R. Clark Jones, A New Calculus for the Treatment of Optical Systems. I. Description and Discussion of the Calculus (1941)](https://doi.org/10.1364/JOSA.31.000488)

### The polarization matrix bounds the Stokes parameters

**Remember:** A polarization imbalance cannot exceed the light that carries it.

*Rules out counterexamples.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** Represent the electric field perpendicular to the beam by a two-component complex vector. Average its outer product with its conjugate transpose to form the polarization matrix. Its trace is total intensity. The other Stokes parameters are the diagonal difference and twice the real and imaginary parts of one off-diagonal entry, using a fixed sign convention.

**Problem.** The length of the last three Stokes parameters cannot exceed total intensity. Every four-tuple with nonnegative intensity that meets this bound is realizable as a mixture of polarized beams.

**How the definition helps.** In our own calculation, positivity makes the determinant nonnegative, which bounds the length of the three polarization parameters by total intensity. Our own example (1, 2, 0, 0) violates the bound and gives a negative intensity in one direction. Conversely, our own construction uses the eigenvectors as polarized beams and the nonnegative eigenvalues as their intensities.

**Wikipedia:** [Stokes parameters](https://en.wikipedia.org/wiki/Stokes_parameters). It says: “whereas for the whole (non-coherent) beam radiation, the Stokes parameters are defined as averaged quantities, and the previous equation becomes an inequality”

**Sources:** none listed. No primary source with a working link was found.

### Electromagnetic potentials satisfy the homogeneous Maxwell equations

**Remember:** The exterior derivative of an exterior derivative is zero.

*True by definition.* MSC 78A25 (Electromagnetic theory (general)), 35Q61, 58A10. arXiv math-ph, physics.class-ph. Level 2: later undergraduate.

**Definition.** Write the electromagnetic field strength as F = dA. Here A is a potential 1-form, which assigns a linear measurement to each spacetime direction. The exterior derivative d turns A into a 2-form, which measures oriented area elements. The vector formulation instead starts with separate electric and magnetic fields.

**Problem.** The homogeneous Maxwell equations say that magnetic fields have zero divergence and that a changing magnetic field induces electric circulation. Together they say dF = 0.

**How the definition helps.** The potential makes both equations automatic because dF = d(dA) = 0. The vector proof uses separate identities for divergence and curl. The converse takes the Poincaré lemma, which gives a potential for any closed form on a smoothly contractible region (our own). A global potential can fail to exist when there is nonzero magnetic flux through a closed surface (our own).

**nLab:** [electromagnetic field](https://ncatlab.org/nlab/show/electromagnetic+field). It says: “Maxwell's equations say that (using the experimentally observed absence of net magnetic charge) the field strength of electromagnetism is a closed differential 2-form on spacetime;”

**Wikipedia:** [Mathematical descriptions of the electromagnetic field](https://en.wikipedia.org/wiki/Mathematical_descriptions_of_the_electromagnetic_field). It says: “Faraday's law and Gauss's law for magnetism (the homogeneous equations) turn out to be identically true for any potentials.”

**Sources:** none listed. No primary source with a working link was found.

### The electromagnetic tensor makes Maxwell’s equations Lorentz covariant

**Remember:** Tensor equations hold in every inertial frame if they hold in one.

*True by definition.* MSC 78A25 (Electromagnetic theory (general)), 83A05. arXiv math-ph, physics.class-ph. Level 2: later undergraduate.

**Definition.** Combine the electric and magnetic fields into the electromagnetic tensor F, an antisymmetric array with two spacetime indices. The tensor formulation also combines charge and current densities into one spacetime vector. The usual vector formulation separates electric from magnetic and time from space.

**Problem.** The transformed fields and sources satisfy Maxwell’s equations in every inertial frame if they satisfy them in one. Lorentz transformations relate these frames and preserve the spacetime interval.

**How the definition helps.** The tensor definition makes covariance immediate because a Lorentz transformation changes both sides of each tensor equation by the same rule. With separate electric and magnetic vectors, one must check their mixing under a change of frame. The work moves into checking that the tensor equations reproduce the four vector equations (our own).

**Wikipedia:** [Mathematical descriptions of the electromagnetic field](https://en.wikipedia.org/wiki/Mathematical_descriptions_of_the_electromagnetic_field), [Covariant formulation of classical electromagnetism](https://en.wikipedia.org/wiki/Covariant_formulation_of_classical_electromagnetism). It says: “Maxwell's equations are exactly consistent with special relativity—i.e., if they are valid in one inertial reference frame, then they are automatically valid in every other inertial reference frame.”

**Sources:** none listed. No primary source with a working link was found.

### The Lorenz gauge turns Maxwell's equations into wave equations

**Remember:** One gauge choice, and the potentials obey plain wave equations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 78A25 (Electromagnetic theory (general)), 78A40. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** The Lorenz gauge is the condition that the four-divergence of the electromagnetic four-potential is zero. In terms of the scalar potential φ and the vector potential A, this is ∇·A + (1/c²) ∂φ/∂t = 0.

**Problem.** Show that in a suitable gauge, Maxwell's equations for the potentials become separate inhomogeneous wave equations. There is one for φ and one for each component of A, and the form is visibly Lorentz invariant.

**How the definition helps.** The Lorenz gauge separates the equations and keeps Lorentz invariance in view. The potentials of electromagnetism are fixed only up to a gauge transformation, so we may add one condition. In the Lorenz gauge, each potential obeys its own inhomogeneous wave equation. The source of each equation is the charge density or a component of the current density. The condition itself is Lorentz invariant. The Coulomb gauge instead gives a scalar potential that responds instantly, and it is not Lorentz covariant. What remains: the Lorenz gauge leaves some gauge freedom (solutions of the wave equation), so it does not fix the gauge completely.

**Wikipedia:** [Gauge fixing](https://en.wikipedia.org/wiki/Gauge_fixing). It says: “It is unique among the constraint gauges in retaining manifest Lorentz invariance.”

**Sources:**

- [L. Lorenz, On the identity of the vibrations of light with electrical currents, Philosophical Magazine 34 (1867) 287–301](https://doi.org/10.1080/14786446708639882)

### Étendue measures conserved ray volume

**Remember:** Optics can trade beam area for angle without changing ray volume.

*True by definition.* MSC 78A05 (Geometric optics). arXiv physics.optics. Level 3: graduate.

**Definition.** Describe each ray crossing a surface by its two position coordinates and two tangential direction components multiplied by the refractive index. The refractive index is the ratio of vacuum light speed to local light speed. The four-dimensional volume occupied by the bundle in these coordinates is its étendue.

**Problem.** At fixed frequency, lossless reversible propagation in isotropic geometric optics preserves the étendue of a ray bundle between transverse sections without clipping or splitting.

**How the definition helps.** In our own explanation, identifying étendue with phase space volume lets Liouville’s volume preservation theorem give conservation directly. Our own calculation converts this volume into projected surface area times solid angle times squared refractive index, integrated across the bundle. The optical derivation must show that ray propagation and ideal interfaces preserve the Hamiltonian structure used by the theorem.

**Wikipedia:** [Etendue](https://en.wikipedia.org/wiki/Etendue). It says: “Conservation of etendue can be derived in different contexts, such as from optical first principles, from Hamiltonian optics”

**Sources:** none listed. No primary source with a working link was found.

### Maxwell’s current 3-form makes charge conservation automatic

**Remember:** The derivative of the current vanishes because the current is itself a derivative.

*True by definition.* MSC 78A25 (Electromagnetic theory (general)), 35Q61. arXiv math-ph, physics.class-ph. Level 3: graduate.

**Definition.** Package charge density and current density into a current 3-form J, which measures charge flux through three-dimensional slices of spacetime. The Maxwell source equation is d⋆F = J in units that absorb the coupling constant. Here F is the electromagnetic 2-form, d is the exterior derivative, and ⋆ is the Hodge star, a map built from the metric.

**Problem.** The Maxwell source equation implies local charge conservation, which is dJ = 0.

**How the definition helps.** The current 3-form makes conservation immediate because dJ = d(d⋆F) = 0. In the vector formulation, take the divergence of the Ampère–Maxwell equation and use Gauss’s law to replace the electric divergence (our own). The work is in showing that the form equation combines those two vector equations (our own). The source equation constrains J rather than defining the physical current (our own).

**Wikipedia:** [Mathematical descriptions of the electromagnetic field](https://en.wikipedia.org/wiki/Mathematical_descriptions_of_the_electromagnetic_field). It says: “Since d² = 0, the 3-form J satisfies the conservation of current (continuity equation):”

**Sources:** none listed. No primary source with a working link was found.

### The polarization quotient leaves two modes

**Remember:** Discard gauge directions and two light modes remain.

*True by definition.* MSC 78A40 (Waves and radiation in optics and electromagnetic theory). arXiv physics.optics. Level 3: graduate.

**Definition.** In four-dimensional spacetime, represent a vacuum plane wave by a potential with complex amplitude a and nonzero wave vector k. The spacetime inner product gives k·k = 0 and k·a = 0. Identify amplitudes that differ by a multiple of k because they give the same electric and magnetic fields.

**Problem.** At each nonzero lightlike wave vector, the complex space of physical polarizations has dimension two.

**How the definition helps.** In our own count, the equation k·a = 0 leaves three dimensions, and identifying multiples of k removes one. Maxwell’s equations justify the amplitude constraint, while the freedom to change the potential justifies the identification.

**nLab:** [wave polarization](https://ncatlab.org/nlab/show/wave+polarization). It says: “Therefore in this case the space of physically distinguishable polarizations for given wave vector k is the quotient space”

**Sources:** none listed. No primary source with a working link was found.

### Zero far field means exterior silence

**Remember:** An outgoing wave with zero far field vanishes outside the source ball.

*Rules out counterexamples.* MSC 78A40 (Waves and radiation in optics and electromagnetic theory). arXiv physics.optics. Level 3: graduate.

**Definition.** At a fixed positive frequency, choose the Maxwell field that travels outward from a current confined to a ball in empty space. Its far-field pattern gives the amplitude of the leading outgoing spherical wave in each direction.

**Problem.** For a smooth current supported inside the ball, the far-field pattern vanishes exactly when the electric field vanishes outside the ball.

**How the definition helps.** In our own explanation, requiring outward travel lets Rellich’s uniqueness theorem determine the exterior field from its far-field pattern. Our own counterexample without that requirement is an incoming spherical wave with zero outgoing amplitude. The uniqueness theorem supplies the substantive implication in our own argument.

**Paper or page:** [Nonradiating sources of Maxwell's equations](https://arxiv.org/abs/2402.10407v1). It says: “is nonradiating if and only if E∞(x̂) = 0.”

**Sources:**

- [Peijun Li and Jue Wang, Nonradiating sources of Maxwell's equations](https://arxiv.org/abs/2402.10407v1)

### Untwisting reduces helical mode dimension

**Remember:** Follow the helix and separate out the phase along its length.

*Makes the theorem clean to state or prove.* MSC 78A50 (Antennas, waveguides in optics and electromagnetic theory). arXiv physics.optics. Level 4: research.

**Definition.** Describe a circular helical waveguide in coordinates that follow its bending and rotation. Assume its cross section and refractive index profile stay fixed in those coordinates. A transverse scalar mode has a fixed cross-sectional shape multiplied by a phase that advances uniformly along the guide.

**Problem.** For the paper’s scalar wave equation with zero boundary values, finding such modes with real propagation constant reduces to a cross-sectional equation. The propagation constant, or phase change per unit length, enters at most quadratically.

**How the definition helps.** In our own explanation, the moving coordinates make the mode profile and wave equation coefficients independent of distance along the helix. Each longitudinal derivative introduces one factor of the propagation constant in our own calculation. The second-order wave equation therefore gives at most two factors. The paper derives the transformed equation and proves equivalence in both directions.

**Paper or page:** [Guided modes of helical waveguides](https://arxiv.org/abs/2506.03276v1). It says: “Next, exploiting the constant torsion and curvature of the Frenet frame of a circular helix, the 3D eigenproblem is further reduced to a two-dimensional (2D) eigenproblem on the waveguide cross section.”

**Sources:**

- [Jay Gopalakrishnan and Michael Neunteufel, Guided modes of helical waveguides](https://arxiv.org/abs/2506.03276v1)

### A discrete product preserves energy balance

**Remember:** Use a product that respects the discrete derivative to keep the energy law.

*True by definition.* MSC 78M20 (Finite difference methods applied to problems in optics and electromagnetic theory). arXiv physics.class-ph. Level 4: research.

**Definition.** In Sushch’s model, store electromagnetic field values on oriented vertices, edges, faces, and cells of a spatial grid. Time stays continuous. Combine the values using the model’s cup product, a multiplication that respects the derivative product rule on the grid.

**Problem.** For the paper’s spatially discrete Maxwell system in a vacuum with a current, energy loss equals outgoing flux plus work on the current.

**How the definition helps.** In our own explanation, the cup product lets one expand the net energy flux using the grid’s derivative product rule. Maxwell’s equations and the model’s relations between fields then give the energy change and the work on the current. Our own comparison requires those relations as well as the product rule to recover the balance from sampled fields.

**Paper or page:** [On a semi-discrete model of Maxwell's equations in three and two dimensions](https://arxiv.org/abs/2510.26427v1). It says: “dᶜ(E∪H) = −½ d/dt(E∪D+B∪H) − E∪J.”

**Sources:**

- [Volodymyr Sushch, On a semi-discrete model of Maxwell's equations in three and two dimensions](https://arxiv.org/abs/2510.26427v1)
