### Parallel chief rays stabilize magnification

**Remember:** If chief rays are parallel, changing object depth does not change their image positions.

*True by definition.* MSC 78A05 (Geometric optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** The chief ray passes through the center of the opening that limits a bundle of rays. An object-space telecentric lens makes chief rays on the object side parallel to the optical axis.

**Problem.** In the small-angle ray model, hold the lens and detector fixed. Moving an object along the axis preserves the magnification measured by chief-ray positions on the detector.

**How the definition helps.** Parallel chief rays from points of the same lateral height follow the very same incoming line. In our own explanation, that line follows the same path through the lens and hits the same detector point. The work lies in positioning the limiting opening to obtain parallel rays. The image may lose focus.

**Wikipedia:** [Telecentric lens](https://en.wikipedia.org/wiki/Telecentric_lens). It says: “The entrance pupil is located at infinity, and chief rays before the objective are parallel to the optical axis.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced radiance stays constant

**Remember:** Divide power by conserved ray volume and the ratio stays constant.

*True by definition.* MSC 78A05 (Geometric optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** Define radiance as power per projected area per solid angle. Define reduced radiance by dividing by the square of the refractive index. This is power per unit étendue, the weighted size of a ray bundle.

**Problem.** Reduced radiance is constant along a ray in lossless geometric optics with no ray splitting or scattering.

**How the definition helps.** Our own explanation uses conservation of both the power and the étendue of the same narrow bundle. Our own explanation puts the work in showing that ray propagation preserves this weighted measure, even when the unweighted area and angular spread change.

**Wikipedia:** [Radiance](https://en.wikipedia.org/wiki/Radiance), [Etendue](https://en.wikipedia.org/wiki/Etendue). It says: “The radiance divided by the index of refraction squared is invariant in geometric optics.”

**Sources:** none listed. No primary source with a working link was found.

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

### Complex beam parameters add distance

**Remember:** One complex number tracks beam width and curvature as distance adds.

*True by definition.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** For a beam with a Gaussian intensity profile, combine its radius w and wavefront curvature radius R in one number q. Define 1/q = 1/R − iλ/(πw²), with wavelength λ in the medium. At radius w the intensity falls to exp(−2) times its central value.

**Problem.** In a uniform medium, the small-angle wave model sends q to q + d after propagation through distance d.

**How the definition helps.** The complex coordinate turns separate changes of width and curvature into addition of distance. Our own explanation uses the Gaussian solution of the small-angle wave equation. It gives q a constant imaginary part and a real part equal to distance from the beam waist.

**Wikipedia:** [Ray transfer matrix analysis](https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis), [Gaussian beam](https://en.wikipedia.org/wiki/Gaussian_beam). It says: “consistent with the expression above for ordinary Gaussian beam propagation”

**Sources:**

- [H. Kogelnik and T. Li, Laser Beams and Resonators (1966)](https://doi.org/10.1364/AO.5.001550)

### Jones matrices compose by multiplication

**Remember:** Put the matrix of the first optical element on the right.

*True by definition.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** For a fully polarized beam at one frequency, record the two complex electric field amplitudes perpendicular to its direction of travel. A linear element that preserves full polarization acts on this pair by a Jones matrix. This replaces separate tracking of the polarization ellipse and phase.

**Problem.** For a beam passing through a chain of linear elements, the chain’s Jones matrix is their product, with the first element on the right.

**How the definition helps.** In our own explanation, multiplying matrices composes their actions on the field amplitudes. Our own calculation needs each element’s action on two basis inputs and matching bases between adjacent elements.

**Wikipedia:** [Jones calculus](https://en.wikipedia.org/wiki/Jones_calculus). It says: “Polarized light is represented by a Jones vector, and linear optical elements are represented by Jones matrices.”

**Sources:**

- [R. Clark Jones, A New Calculus for the Treatment of Optical Systems. I. Description and Discussion of the Calculus (1941)](https://doi.org/10.1364/JOSA.31.000488)

### Mueller matrices discard global phase

**Remember:** A common phase cancels when a field multiplies its conjugate.

*True by definition.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** Represent polarization by the matrix of averaged products of field components with conjugated field components. A Mueller matrix acts on the four real coordinates of this matrix, rather than on the field amplitudes.

**Problem.** Multiplying a Jones matrix, which acts on field amplitudes, by a common phase leaves its induced Mueller matrix unchanged.

**How the definition helps.** Our own explanation uses the polarization update C ↦ JCJ†, where J† is the conjugate transpose. The phase in J cancels the opposite phase in J†. Our own explanation puts the work in deriving this update and converting the product matrix to the four real polarization coordinates.

**Wikipedia:** [Mueller calculus](https://en.wikipedia.org/wiki/Mueller_calculus). It says: “the absolute phase information is lost”

**Sources:**

- [Nathan Grieb Parke, Optical Algebra (1949)](https://doi.org/10.1002/sapm1949281131)

### Normal power fractions sum to one

**Remember:** Count only power crossing the interface, not raw electric field amplitude.

*True by definition.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** Measure each wave’s average power per unit area crossing the interface. Divide the reflected and transmitted amounts by the incident amount to obtain reflectance and transmittance. These ratios include the angle of propagation.

**Problem.** Consider one plane wave striking a flat boundary between lossless homogeneous dielectrics, with nonzero incident power across it. With no surface sources, reflectance plus transmittance equals one.

**How the definition helps.** Using crossing power as the numerator turns the sum rule into the energy balance at the interface. Our own explanation uses the normal component of the energy flow to derive that balance. Squared electric field ratios alone omit the impedance and angle factors.

**Wikipedia:** [Fresnel equations](https://en.wikipedia.org/wiki/Fresnel_equations). It says: “the ratio of transmitted power to incident power in the direction normal to the interface”

**Sources:** none listed. No primary source with a working link was found.

### Normalized coherence gives fringe visibility

**Remember:** At equal power, fringe contrast measures the magnitude of the normalized correlation.

*True by definition.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** Average the product of one complex field and the conjugate of the other. Divide by the geometric mean of their average intensities to obtain their degree of coherence. Fringe visibility is the intensity range divided by the sum of the maximum and minimum intensities.

**Problem.** For two scalar beams of equal nonzero average intensity at the detector, fringe visibility equals the magnitude of their degree of coherence.

**How the definition helps.** Normalizing the field correlation makes its magnitude equal to the measured contrast when the intensities match. In our own derivation, varying only the relative phase makes the interference term swing between opposite extrema. Expanding the average intensity gives the stated ratio.

**Wikipedia:** [Coherence (physics)](https://en.wikipedia.org/wiki/Coherence_%28physics%29). It says: “The resulting visibility of the interference pattern (e.g. see Figure 4) gives the temporal coherence at delay τ.”

**Sources:** none listed. No primary source with a working link was found.

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

**Problem.** Every field strength F = dA satisfies the homogeneous Maxwell equations dF = 0. In vector form, magnetic fields have zero divergence, and a changing magnetic field induces electric circulation.

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

**Problem.** In the Lorenz gauge, Maxwell's equations for the potentials become separate inhomogeneous wave equations, one for φ and one for each component of A. Their sources are the charge density and the components of the current density, and the form is visibly Lorentz invariant.

**How the definition helps.** The potentials are fixed only up to a gauge transformation, so we may impose one condition, and the Lorenz condition separates the equations while staying Lorentz invariant. The Coulomb gauge instead gives a scalar potential that responds instantly and is not Lorentz covariant. The Lorenz gauge still leaves some gauge freedom, by solutions of the wave equation, so it does not fix the gauge completely.

**Wikipedia:** [Gauge fixing](https://en.wikipedia.org/wiki/Gauge_fixing). It says: “It is unique among the constraint gauges in retaining manifest Lorentz invariance.”

**Sources:**

- [L. Lorenz, On the identity of the vibrations of light with electrical currents, Philosophical Magazine 34 (1867) 287–301](https://doi.org/10.1080/14786446708639882)

### One conducting wall rules out TEM

**Remember:** One wall fixes one potential, leaving no transverse field.

*Rules out counterexamples.* MSC 78A50 (Antennas, waveguides in optics and electromagnetic theory). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Consider a straight, uniform hollow guide with a bounded, simply connected cross-section and a perfectly conducting wall. Fill it with a homogeneous isotropic dielectric. A transverse electromagnetic mode has both fields perpendicular to the guide axis.

**Problem.** At positive frequency, such a guide supports no nonzero transverse electromagnetic mode.

**How the definition helps.** One connected wall fixes a single boundary value for the transverse electric potential. In our own proof, Maxwell’s equations make the potential harmonic, so uniqueness for Laplace’s equation makes it constant. Both fields then vanish. A coaxial guide has two walls that can carry different potentials.

**Wikipedia:** [Waveguide (radio frequency)](https://en.wikipedia.org/wiki/Waveguide_%28radio_frequency%29), [Transverse mode](https://en.wikipedia.org/wiki/Transverse_mode). It says: “In hollow, single conductor waveguides, TEM waves are not possible.”

**Sources:** none listed. No primary source with a working link was found.

### Power amplitudes make scattering unitary

**Remember:** When squared amplitudes measure power, conserving power preserves the vector norm.

*True by definition.* MSC 78A55 (Technical applications of optics and electromagnetic theory). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** At each network connection, scale the incoming and outgoing wave amplitudes so that their squared magnitudes measure power. Use these amplitudes in place of voltages. The scattering matrix maps the incoming vector to the outgoing vector.

**Problem.** A linear, lossless electromagnetic network with all power channels included has a unitary scattering matrix in these coordinates.

**How the definition helps.** Power conservation becomes equality of the squared vector norms for every input. Our own explanation assumes independent channels whose powers add and equal finite numbers of incoming and outgoing channels. A square linear map preserving that norm is unitary.

**Wikipedia:** [Scattering parameters](https://en.wikipedia.org/wiki/Scattering_parameters). It says: “This implies that the S-parameter matrix is unitary”

**Sources:**

- [K. Kurokawa, Power Waves and the Scattering Matrix (1965)](https://doi.org/10.1109/TMTT.1965.1125964)

### Étendue measures conserved ray volume

**Remember:** Optics can trade beam area for angle without changing ray volume.

*True by definition.* MSC 78A05 (Geometric optics). arXiv physics.optics. Level 3: graduate.

**Definition.** Describe each ray crossing a surface by its two position coordinates and two tangential direction components multiplied by the refractive index. The refractive index is the ratio of vacuum light speed to local light speed. The four-dimensional volume occupied by the bundle in these coordinates is its étendue.

**Problem.** At fixed frequency, lossless reversible propagation in isotropic geometric optics preserves the étendue of a ray bundle between transverse sections without clipping or splitting.

**How the definition helps.** In our own explanation, identifying étendue with phase space volume lets Liouville’s volume preservation theorem give conservation directly. Our own calculation converts this volume into projected surface area times solid angle times squared refractive index, integrated across the bundle. The optical derivation must show that ray propagation and ideal interfaces preserve the Hamiltonian structure used by the theorem.

**Wikipedia:** [Etendue](https://en.wikipedia.org/wiki/Etendue). It says: “Conservation of etendue can be derived in different contexts, such as from optical first principles, from Hamiltonian optics”

**Sources:** none listed. No primary source with a working link was found.

### Pupil overlaps give image contrast

**Remember:** Image contrast at each frequency comes from overlapping two shifted pupils.

*True by definition.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 3: graduate.

**Definition.** For incoherent light, intensities from independent object points add. Define the optical transfer function as the normalized Fourier transform of the intensity image of one point. The complex pupil function gives the amplitude and phase across the aperture.

**Problem.** In scalar imaging with the same point response everywhere, assume the point amplitude is the inverse Fourier transform of the pupil in scaled coordinates. Then the transfer function equals the pupil’s correlation with a shifted copy, divided by its squared norm.

**How the definition helps.** Taking the Fourier transform converts the point intensity, a squared amplitude, into an overlap of two shifted pupils. Our own explanation uses the convolution theorem for this step. The optical work lies in relating the point amplitude to the pupil.

**Wikipedia:** [Optical transfer function](https://en.wikipedia.org/wiki/Optical_transfer_function). It says: “From the convolution theorem it can be seen that the optical transfer function is in fact the autocorrelation of the pupil function.”

**Sources:** none listed. No primary source with a working link was found.

### Duality preserves vacuum Maxwell fields

**Remember:** Taking the Hodge star switches the two vacuum equations.

*True by definition.* MSC 78A25 (Electromagnetic theory (general)). arXiv physics.class-ph. Level 3: graduate.

**Definition.** On oriented four-dimensional Lorentzian spacetime, combine the electric and magnetic components into one antisymmetric field F, a two-form. The metric defines the Hodge star ⋆, which exchanges complementary pairs of directions.

**Problem.** If F solves the source-free Maxwell equations, so does ⋆F.

**How the definition helps.** The two-form description writes both vacuum equations in the same way, dF = 0 and d⋆F = 0, where d denotes exterior differentiation. In our own proof, replacing F by ⋆F exchanges these equations because ⋆⋆F = −F. The work lies in identifying the two equations with Maxwell’s component equations.

**nLab:** [electric-magnetic duality](https://ncatlab.org/nlab/show/electric-magnetic+duality). It says: “under the Hodge star operator is itself closed”

**Sources:** none listed. No primary source with a working link was found.

### Fixed fluxes remove harmonic ambiguity

**Remember:** Fixing all flux periods leaves no harmonic field to add.

*Rules out counterexamples.* MSC 78A25 (Electromagnetic theory (general)). arXiv math-ph. Level 3: graduate.

**Definition.** On a compact oriented Riemannian manifold without boundary, fix the integrals of a closed field F over all closed cycles of its degree. These fluxes specify its cohomology class. Closed means dF = 0, where d is exterior differentiation.

**Problem.** Let F have degree k in dimension n, and let j be an exact form of degree n − k + 1. Exact means that j is an exterior derivative. Each class contains one closed F satisfying d⋆F = j, where ⋆ is the metric’s Hodge star.

**How the definition helps.** Fixing the fluxes prevents adding a nonzero harmonic field, one satisfying both homogeneous equations. Our own example is a constant area form on a flat torus with zero current. The Hodge decomposition gives existence and shows that a harmonic field with zero fluxes vanishes.

**nLab:** [Hodge-Maxwell theorem](https://ncatlab.org/nlab/show/Hodge-Maxwell+theorem). It says: “there is in each de Rham cohomology class of degree k a unique representative closed k-form F”

**Sources:** none listed. No primary source with a working link was found.

### Maxwell’s current 3-form makes charge conservation automatic

**Remember:** The derivative of the current vanishes because the current is itself a derivative.

*True by definition.* MSC 78A25 (Electromagnetic theory (general)), 35Q61. arXiv math-ph, physics.class-ph. Level 3: graduate.

**Definition.** Package charge density and current density into a current 3-form J, which measures charge flux through three-dimensional slices of spacetime. The Maxwell source equation is d⋆F = J in units that absorb the coupling constant. Here F is the electromagnetic 2-form, d is the exterior derivative, and ⋆ is the Hodge star, a map built from the metric.

**Problem.** The Maxwell source equation implies local charge conservation, which is dJ = 0.

**How the definition helps.** The current 3-form makes conservation immediate because dJ = d(d⋆F) = 0. In the vector formulation, take the divergence of the Ampère–Maxwell equation and use Gauss’s law to replace the electric divergence (our own). The work is in showing that the form equation combines those two vector equations (our own). The source equation constrains J rather than defining the physical current (our own).

**Wikipedia:** [Mathematical descriptions of the electromagnetic field](https://en.wikipedia.org/wiki/Mathematical_descriptions_of_the_electromagnetic_field). It says: “Since d² = 0, the 3-form J satisfies the conservation of current (continuity equation):”

**Sources:** none listed. No primary source with a working link was found.

### Causal susceptibility links dispersion and absorption

**Remember:** One analytic response function ties absorption to dispersion.

*Makes the theorem clean to state or prove.* MSC 78A40 (Waves and radiation in optics and electromagnetic theory). arXiv physics.optics. Level 3: graduate.

**Definition.** Electric susceptibility describes the linear polarization response to an applied electric field. A causal response kernel vanishes at negative times. Transform this kernel with exp(iωt) to obtain one complex function of frequency ω.

**Problem.** Assume the transform is analytic in the upper half-plane, extends smoothly to its boundary, and decays uniformly at infinity there. On the real axis, either component determines the other by a signed Hilbert transform, an integral taken in the symmetric principal value sense.

**How the definition helps.** The causal transform makes dispersion and absorption the real and imaginary parts of one analytic function. Our own explanation uses decay and Cauchy’s integral formula to recover either boundary component from the other. Causality alone does not establish the stated decay.

**Wikipedia:** [Kramers–Kronig relations](https://en.wikipedia.org/wiki/Kramers%E2%80%93Kronig_relations). It says: “The real and imaginary parts of such a function are not independent, allowing the full function to be reconstructed given just one of its parts.”

**Sources:**

- [John S. Toll, Causality and the Dispersion Relation: Logical Foundations (1956)](https://doi.org/10.1103/PhysRev.104.1760)

### Complex stretching absorbs without reflection

**Remember:** Continue the same outgoing wave into complex space and it decays without reflecting.

*True by definition.* MSC 78A40 (Waves and radiation in optics and electromagnetic theory). arXiv physics.optics, math-ph. Level 3: graduate.

**Definition.** To absorb outgoing waves in a uniform medium, extend the coordinate normal to a plane interface into the complex plane. Match the original coordinate at the interface and increase its imaginary part inside the layer. Transform Maxwell’s equations by this same coordinate change.

**Problem.** With time dependence exp(−iωt), a plane wave with positive normal wave number decays inside this ideal layer. It produces no reflection at the interface.

**How the definition helps.** Continuing the same wave into the complex coordinate gives exponential decay while preserving its tangential boundary fields. Our own explanation places the work in transforming Maxwell’s equations and verifying those boundary fields. An ordinary absorbing medium can reflect at its entrance.

**Wikipedia:** [Perfectly matched layer](https://en.wikipedia.org/wiki/Perfectly_matched_layer). It says: “The same coordinate transformation causes waves to attenuate”

**Sources:**

- [Jean-Pierre Berenger, A perfectly matched layer for the absorption of electromagnetic waves (1994)](https://doi.org/10.1006/jcph.1994.1159)
- [Weng Cho Chew and William H. Weedon, A 3D perfectly matched medium from modified Maxwell’s equations with stretched coordinates (1994)](https://doi.org/10.1002/mop.4650071304)

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

### Angular spectra propagate by multiplication

**Remember:** Each plane wave travels on its own, so its coefficient gets just one factor.

*True by definition.* MSC 78A45 (Diffraction, scattering). arXiv physics.optics. Level 3: graduate.

**Definition.** Describe a scalar field on a plane by its two-dimensional Fourier transform, called the angular spectrum. Each coefficient gives the amplitude of one transverse spatial frequency.

**Problem.** In a uniform half-space, propagation through distance z multiplies each forward coefficient by exp(iκz). Here κ is the forward normal wave number, with positive imaginary part for components that decay.

**How the definition helps.** Fourier coordinates separate the wave equation into independent equations for the coefficients. Our own explanation selects the outgoing or decaying solution of each equation. This choice supplies its propagation factor without coupling it to other frequencies.

**Wikipedia:** [Angular spectrum method](https://en.wikipedia.org/wiki/Angular_spectrum_method). It says: “Multiplying each point in the 2D-FFT by a propagation term which accounts for the phase change that each plane wave will undergo”

**Sources:** none listed. No primary source with a working link was found.

### Fibonacci layer traces obey a recurrence

**Remember:** Replace a whole stack by one trace at each step.

*Makes the theorem clean to state or prove.* MSC 78A48 (Composite media; random media in optics and electromagnetic theory). arXiv physics.optics. Level 3: graduate.

**Definition.** Start with two stacks of layers whose two-by-two transfer matrices have determinant one. Each new stack joins the previous two, most recent first. Let xₙ be the trace of the transfer matrix of stack n.

**Problem.** The trace obeys xₙ₊₁ = xₙxₙ₋₁ − xₙ₋₂ for n ≥ 3.

**How the definition helps.** Taking traces replaces a growing product of matrices by a recurrence for three numbers. Our own derivation uses the determinant-one identity tr(AB) + tr(AB⁻¹) = tr(A)tr(B). The stack recursion makes the extra trace equal to xₙ₋₂.

**Paper or page:** [Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1). It says: “xₙ₊₁ = xₙxₙ₋₁ − xₙ₋₂”

**Sources:**

- [Bryn Davies, Richard V Craster — Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1)

### Mirror symmetry reverses transfer matrices

**Remember:** Reflect the profile, flip the slope, and the transfer runs backwards.

*True by definition.* MSC 78A48 (Composite media; random media in optics and electromagnetic theory). arXiv math-ph. Level 3: graduate.

**Definition.** For a scalar wave on a layer, record its value and spatial derivative at each end. The transfer matrix T maps the left pair to the right pair.

**Problem.** Suppose the wave speed is positive and symmetric about the midpoint. Then T⁻¹ = STS, where S changes the sign of the derivative.

**How the definition helps.** In these coordinates reflection exchanges the ends and changes just one sign. Our own proof applies T to the reflected solution, giving TST = S. Uniqueness for the wave equation makes T well defined.

**Paper or page:** [Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1). It says: “T(ω)⁻¹ = ST(ω)S”

**Sources:**

- [Bryn Davies, Richard V Craster — Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1)

### Transfer traces detect band gaps

**Remember:** A trace beyond two in magnitude gives one growing mode and one shrinking mode.

*Makes the theorem clean to state or prove.* MSC 78A48 (Composite media; random media in optics and electromagnetic theory). arXiv physics.optics. Level 3: graduate.

**Definition.** For a periodic scalar wave equation, define T to map the field and its slope across one period. Assume T is real and has determinant one.

**Problem.** At a real frequency, the repeated medium has an exponentially growing and an exponentially decaying mode exactly when \|tr T\| &gt; 2.

**How the definition helps.** One matrix describes every period, so its eigenvalues give the growth factors. Our own derivation uses the characteristic polynomial λ² − tr(T)λ + 1. Its roots have magnitudes on opposite sides of one exactly when \|tr T\| &gt; 2.

**Paper or page:** [Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1), [Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1). It says: “In this case, \|tr(T)\| &gt; 2 and T is said to be hyperbolic.”

**Sources:**

- [Bryn Davies, Richard V Craster — Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1)

### Envelope extraction preserves waveguide stability

**Remember:** Removing a unit phase does not change the stability constant.

*True by definition.* MSC 78A50 (Antennas, waveguides in optics and electromagnetic theory). arXiv math.NA. Level 3: graduate.

**Definition.** Write the field as a known oscillation times an unknown function called its envelope. For real k, multiply by exp(ikz) to pass from field to envelope at axial position z.

**Problem.** If the original operator satisfies ‖Au‖ ≥ α‖u‖ in the paper’s integral square norms, the envelope operator satisfies the same bound, and conversely.

**How the definition helps.** Changing to the envelope preserves both norms because the oscillation has magnitude one. Our own explanation transfers the operator domain by the same multiplication. The original waveguide estimate supplies the value of α.

**Paper or page:** [Stability Analysis for Electromagnetic Waveguides. Part 1: Acoustic and Homogeneous Electromagnetic Waveguides](https://arxiv.org/abs/2307.04521v2). It says: “bounded below if and only if operator A is bounded below, and the corresponding boundedness below constants are identical”

**Sources:**

- [Jens Markus Melenk, Leszek Demkowicz, Stefan Henneking — Stability Analysis for Electromagnetic Waveguides. Part 1: Acoustic and Homogeneous Electromagnetic Waveguides](https://arxiv.org/abs/2307.04521v2)

### Transparent boundaries preserve exterior solutions

**Remember:** The exact boundary map carries the whole exterior problem to the surface.

*True by definition.* MSC 78A45 (Diffraction, scattering), 78M10. arXiv math.NA. Level 4: research.

**Definition.** The transparent boundary map on a sphere around the obstacle sends the tangential electric field of an outgoing exterior wave to its magnetic boundary data. It is exact, unlike a local absorbing rule.

**Problem.** For time-harmonic Maxwell scattering, impose this map on the scattered field at the sphere. The resulting bounded problem has as its solution the restriction of the full solution.

**How the definition helps.** The map enforces exactly the boundary data of an outgoing exterior field. In our own explanation, this replaces an approximate local rule and lets the inner and outer fields join. The work lies in solving the exterior problem uniquely and expressing its map as an infinite series.

**Paper or page:** [An Adaptive Finite Element DtN Method for Maxwell's Equations](https://arxiv.org/abs/2202.09203v1). It says: “an exact transparent boundary condition is introduced and the scattering problem is reduced equivalently into a bounded domain.”

**Sources:**

- [Gang Bao, Mingming Zhang, Xue Jiang, Peijun Li, Xiaokai Yuan — An Adaptive Finite Element DtN Method for Maxwell's Equations](https://arxiv.org/abs/2202.09203v1)

### Born fields reveal Fourier arcs

**Remember:** Each propagating detector frequency samples one point on the object’s Fourier arc.

*Makes the theorem clean to state or prove.* MSC 78A46 (Inverse problems (including inverse scattering) in optics and electromagnetic theory). arXiv physics.optics. Level 4: research.

**Definition.** The Born approximation replaces the total field inside the scattering source by the incoming wave. The resulting scattered field depends linearly on the object’s contrast, its departure from the background medium.

**Problem.** Illuminate a bounded, compactly supported contrast with a scalar plane wave in two dimensions. Beyond the object, measure the Born field along a line perpendicular to the incoming direction. Its propagating Fourier components give the contrast transform on a shifted circular arc, up to a known factor.

**How the definition helps.** Replacing the unknown field by a plane wave turns its product with the contrast into a shift in Fourier coordinates. Our own explanation uses the outgoing response to a point source to obtain the arc and the factor. The theorem concerns the approximate field itself.

**Paper or page:** [Diffraction Tomography, Fourier Reconstruction, and Full Waveform Inversion](https://arxiv.org/abs/2110.07921v2). It says: “\\mathcal{F}<sub>1</sub>u<sup>{\\mathrm{Born}}</sup>(k<sub>1</sub>, r\_{\\mathrm{M}}) = \\sqrt{2 \\pi } \\frac{\\i \\mathrm e<sup>{\\i</sup> \\kappa r\_{\\mathrm{M}}}}{2 \\kappa } \\mathcal{F}f\\left(k<sub>1</sub>, \\kappa -k<sub>0</sub> \\right).”

**Sources:**

- [Florian Faucher, Clemens Kirisits, Michael Quellmalz, Otmar Scherzer, Eric Setterqvist — Diffraction Tomography, Fourier Reconstruction, and Full Waveform Inversion](https://arxiv.org/abs/2110.07921v2)

### Untwisting reduces helical mode dimension

**Remember:** Follow the helix and separate out the phase along its length.

*Makes the theorem clean to state or prove.* MSC 78A50 (Antennas, waveguides in optics and electromagnetic theory). arXiv physics.optics. Level 4: research.

**Definition.** Describe a circular helical waveguide in coordinates that follow its bending and rotation. Assume its cross section and refractive index profile stay fixed in those coordinates. A transverse scalar mode has a fixed cross-sectional shape multiplied by a phase that advances uniformly along the guide.

**Problem.** For the paper’s scalar wave equation with zero boundary values, finding such modes with real propagation constant reduces to a cross-sectional equation. The propagation constant, or phase change per unit length, enters at most quadratically.

**How the definition helps.** In our own explanation, the moving coordinates make the mode profile and wave equation coefficients independent of distance along the helix. Each longitudinal derivative introduces one factor of the propagation constant in our own calculation. The second-order wave equation therefore gives at most two factors. The paper derives the transformed equation and proves equivalence in both directions.

**Paper or page:** [Guided modes of helical waveguides](https://arxiv.org/abs/2506.03276v1). It says: “Next, exploiting the constant torsion and curvature of the Frenet frame of a circular helix, the 3D eigenproblem is further reduced to a two-dimensional (2D) eigenproblem on the waveguide cross section.”

**Sources:**

- [Jay Gopalakrishnan and Michael Neunteufel, Guided modes of helical waveguides](https://arxiv.org/abs/2506.03276v1)

### Compatible derivatives preserve Gauss’s law

**Remember:** Two successive discrete derivatives vanish, so the Gauss constraint cannot drift.

*True by definition.* MSC 78M10 (Finite element, Galerkin and related methods applied to problems in optics and electromagnetic theory). arXiv math.NA. Level 4: research.

**Definition.** On a closed surface, choose mesh versions of gradient and curl so that curl after gradient gives zero. Define charge from the initial electric field and the accumulated current in the same mesh equations.

**Problem.** As time varies continuously, the mesh electric field satisfies Gauss’s law. Its discrete divergence equals the charge at each time.

**How the definition helps.** Testing the field update against a mesh gradient removes the curl term, leaving exactly the prescribed charge update. Our own explanation uses the same projected current in both updates. Lemma 13 supplies the zero composition for the paper’s mesh spaces.

**Paper or page:** [A polytopal discrete de Rham complex on manifolds, with application to the Maxwell equations](https://arxiv.org/abs/2401.16130v3), [A polytopal discrete de Rham complex on manifolds, with application to the Maxwell equations](https://arxiv.org/abs/2401.16130v3). It says: “\\langle \\underline{E}<sub>h</sub>(t),\\underline{{\\mathrm{d}}}<sup>0<sub>r</sup>,h</sub>\\underline{{v}}<sub>h</sub><sup>0\\rangle</sup> = -\\langle \\rho \_h(t),\\underline{{v}}<sub>h</sub><sup>0\\rangle</sup>”

**Sources:**

- [Jérôme Droniou, Marien Hanot, Todd Oliynyk — A polytopal discrete de Rham complex on manifolds, with application to the Maxwell equations](https://arxiv.org/abs/2401.16130v3)

### Vertex quadrature gives local mass solves

**Remember:** Sample products at vertices and the mass matrix separates by vertex.

*True by definition.* MSC 78M10 (Finite element, Galerkin and related methods applied to problems in optics and electromagnetic theory). arXiv math.NA. Level 4: research.

**Definition.** A mass matrix records integrals of products of basis fields on a mesh. Replace each integral with a weighted sum over vertices. Choose the paper’s basis fields, each nonzero at just one sampled vertex.

**Problem.** The mass matrix in the Maxwell time step has one diagonal block for each vertex.

**How the definition helps.** Products of basis fields assigned to different vertices vanish at every sample point. Our own explanation groups the fields by vertex to obtain the blocks. The remaining work is to show that sampling gives a norm comparable to exact integration.

**Paper or page:** [A Yee-like finite-element scheme for Maxwell's equations on unstructured grids](https://arxiv.org/abs/2306.01182v1). It says: “with one block per vertex of the mesh coupling all degrees of freedom not vanishing at this vertex”

**Sources:**

- [Herbert Egger, Bogdan Radu — A Yee-like finite-element scheme for Maxwell's equations on unstructured grids](https://arxiv.org/abs/2306.01182v1)

### Combined fields avoid false resonances

**Remember:** An imaginary wavenumber removes false cavity resonances from the boundary equation.

*Rules out counterexamples.* MSC 78M15 (Boundary element methods applied to problems in optics and electromagnetic theory). arXiv math.NA. Level 4: research.

**Definition.** Describe the scattered field by electric and magnetic sources on the conductor’s surface. Combine their exterior boundary values with interior boundary values computed at a purely imaginary wave number.

**Problem.** For a bounded perfect conductor with a locally Lipschitz graph as boundary, the paper’s combined equation has at most one solution per positive wave number.

**How the definition helps.** The interior terms prevent a standing wave inside the conductor from creating a false solution of the boundary equation. Our own example is a spherical cavity at a frequency where it supports a standing wave. The proof uses exterior uniqueness and a positive lower bound for the interior operators.

**Paper or page:** [An operator preconditioned combined field integral equation for electromagnetic scattering](https://arxiv.org/abs/2309.02289v3). It says: “has at most one solution”

**Sources:**

- [Van Chien Le, Kristof Cools — An operator preconditioned combined field integral equation for electromagnetic scattering](https://arxiv.org/abs/2309.02289v3)

### A discrete product preserves energy balance

**Remember:** Use a product that respects the discrete derivative to keep the energy law.

*True by definition.* MSC 78M20 (Finite difference methods applied to problems in optics and electromagnetic theory). arXiv physics.class-ph. Level 4: research.

**Definition.** In Sushch’s model, store electromagnetic field values on oriented vertices, edges, faces, and cells of a spatial grid. Time stays continuous. Combine the values using the model’s cup product, a multiplication that respects the derivative product rule on the grid.

**Problem.** For the paper’s spatially discrete Maxwell system in a vacuum with a current, energy loss equals outgoing flux plus work on the current.

**How the definition helps.** In our own explanation, the cup product lets one expand the net energy flux using the grid’s derivative product rule. Maxwell’s equations and the model’s relations between fields then give the energy change and the work on the current. Our own comparison requires those relations as well as the product rule to recover the balance from sampled fields.

**Paper or page:** [On a semi-discrete model of Maxwell's equations in three and two dimensions](https://arxiv.org/abs/2510.26427v1). It says: “dᶜ(E∪H) = −½ d/dt(E∪D+B∪H) − E∪J.”

**Sources:**

- [Volodymyr Sushch, On a semi-discrete model of Maxwell's equations in three and two dimensions](https://arxiv.org/abs/2510.26427v1)

### Compatible differences enforce zero divergence

**Remember:** Take a discrete divergence of the eigenvalue equation to get zero.

*True by definition.* MSC 78M20 (Finite difference methods applied to problems in optics and electromagnetic theory). arXiv math.NA. Level 4: research.

**Definition.** On a grid, let C approximate curl and D approximate divergence. Choose their difference formulas together so that DC = 0.

**Problem.** Let L = CMCᵀ be the paper’s matrix for applying curl twice with a weight matrix M. Every eigenvector of L with nonzero eigenvalue has zero discrete divergence.

**How the definition helps.** The choice DC = 0 makes DL zero before any eigenvectors are computed. In our own proof, applying D to Lv = λv gives λDv = 0. Constructing compatible grid formulas supplies the essential identity.

**Paper or page:** [Kernel compensation method for Maxwell eigenproblem with mimetic finite difference discretization](https://arxiv.org/abs/2503.19379v1). It says: “then discrete divergence-free condition Bvₕ = 0 holds.”

**Sources:**

- [Chenhao Jin, Yinhua Xia, Yan Xu — Kernel compensation method for Maxwell eigenproblem with mimetic finite difference discretization](https://arxiv.org/abs/2503.19379v1)
