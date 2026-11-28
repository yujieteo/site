### Parallel chief rays stabilize magnification

**Remember:** Parallel chief rays: moving the object in depth keeps image size.

*True by definition.* MSC 78A05 (Geometric optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** An object-space telecentric lens makes chief rays, the rays through the center of the aperture stop, parallel to the optical axis on the object side. So object points at the same lateral height share one incoming chief ray, whatever their depth.

**Problem.** In the small-angle ray model, hold the lens and detector fixed. Moving an object along the axis preserves the magnification measured by chief-ray positions on the detector.

**How the definition helps.** Points at the same height but different depths lie on one chief ray, which the lens sends to one detector point (our own). So depth changes focus but not chief-ray image position.

**Wikipedia:** [Telecentric lens](https://en.wikipedia.org/wiki/Telecentric_lens). It says: “The entrance pupil is located at infinity, and chief rays before the objective are parallel to the optical axis.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced radiance stays constant

**Remember:** Power over conserved ray volume stays constant.

*True by definition.* MSC 78A05 (Geometric optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** Reduced radiance is radiance (power per projected area per solid angle) divided by the squared refractive index. This makes it power per unit étendue, the weighted size of a ray bundle.

**Problem.** Reduced radiance is constant along a ray in lossless geometric optics with no ray splitting or scattering.

**How the definition helps.** A narrow bundle keeps both its power and its étendue, so their ratio is constant (our own). The work is showing that ray propagation conserves étendue, even as area and angular spread change separately (our own).

**Wikipedia:** [Radiance](https://en.wikipedia.org/wiki/Radiance), [Etendue](https://en.wikipedia.org/wiki/Etendue). It says: “The radiance divided by the index of refraction squared is invariant in geometric optics.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced ray angles give unit determinants

**Remember:** Multiply angle by index, and every ray matrix has determinant one.

*True by definition.* MSC 78A05 (Geometric optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** In paraxial optics, describe a ray by its height and its reduced angle nθ, the small angle θ to the axis times the refractive index n. Then the small-angle refraction law n₁θ₁ = n₂θ₂ leaves the reduced angle unchanged at a flat boundary (our own).

**Problem.** In centered paraxial optics, propagation and refraction in one meridian give a ray transfer matrix of determinant one in these coordinates.

**How the definition helps.** Propagation and refraction each give a determinant-one matrix in these coordinates, and determinants multiply along the system (our own). With the plain angle, refraction at a flat boundary gives determinant n₁/n₂ instead.

**Wikipedia:** [Ray transfer matrix analysis](https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis). It says: “the second element of the ray vector is n sin θ”

**Sources:** none listed. No primary source with a working link was found.

### Stationary travel time includes nonminimal rays

**Remember:** A ray’s travel time is stationary, not necessarily least.

*Makes the theorem clean to state or prove.* MSC 78A05 (Geometric optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** A geometric ray is a path whose travel time is stationary, meaning its first-order change vanishes under small path changes with fixed endpoints. This replaces the least-time rule, so it also covers rays whose time is not a minimum.

**Problem.** At a smooth mirror in a uniform medium, a reflected ray makes equal angles with the surface normal, even when nearby paths take less time.

**How the definition helps.** Moving the reflection point along the mirror changes travel time by the difference of the two rays’ tangential direction components, so stationarity makes the angles equal (our own). On a strongly concave mirror nearby paths can take less time, yet the stationary rule still gives the ray.

**Wikipedia:** [Fermat's principle](https://en.wikipedia.org/wiki/Fermat%27s_principle). It says: “In order to be true in all cases, this statement must be weakened by replacing the "least" time with a time that is "stationary”

**Sources:** none listed. No primary source with a working link was found.

### Complex beam parameters add distance

**Remember:** Distance from the waist is q’s real part, so propagation adds.

*True by definition.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** The complex beam parameter q of a Gaussian beam packs its radius w (where intensity falls to exp(−2) of the peak) and wavefront curvature radius R into 1/q = 1/R − iλ/(πw²), with λ the wavelength in the medium. Equivalently q = z + i z<sub>R</sub>, where z is the distance from the beam waist and z<sub>R</sub> is the fixed Rayleigh range.

**Problem.** In a uniform medium, the small-angle wave model sends q to q + d after propagation through distance d.

**How the definition helps.** Since q = z + i z<sub>R</sub>, moving a distance d changes z to z + d and leaves z<sub>R</sub> fixed, so q becomes q + d (our own). This form of q comes from the Gaussian solution of the small-angle wave equation.

**Wikipedia:** [Ray transfer matrix analysis](https://en.wikipedia.org/wiki/Ray_transfer_matrix_analysis), [Gaussian beam](https://en.wikipedia.org/wiki/Gaussian_beam). It says: “consistent with the expression above for ordinary Gaussian beam propagation”

**Sources:**

- [H. Kogelnik and T. Li, Laser Beams and Resonators (1966)](https://doi.org/10.1364/AO.5.001550)

### Jones matrices compose by multiplication

**Remember:** Light meets the rightmost matrix first.

*True by definition.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** A Jones vector records the two complex transverse electric field amplitudes of a fully polarized beam at one frequency. A linear element that preserves full polarization acts on this vector as a 2 × 2 Jones matrix, that is, as a linear map.

**Problem.** For linear elements represented by Jones matrices in matching bases, the chain’s matrix is their product, with the first element on the right.

**How the definition helps.** Passing through elements in turn composes their linear maps, which is matrix multiplication with the first map on the right (our own). Adjacent elements must use matching bases (our own).

**Wikipedia:** [Jones calculus](https://en.wikipedia.org/wiki/Jones_calculus). It says: “Polarized light is represented by a Jones vector, and linear optical elements are represented by Jones matrices.”

**Sources:**

- [R. Clark Jones, A New Calculus for the Treatment of Optical Systems. I. Description and Discussion of the Calculus (1941)](https://doi.org/10.1364/JOSA.31.000488)

### Mueller matrices discard global phase

**Remember:** A common phase cancels when a field multiplies its conjugate.

*True by definition.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** Describe polarization by the coherency matrix C, the average of EE† for the field E, which pairs each field component with a conjugated one. A Jones matrix J changes it by C ↦ JCJ† (our own), and the Mueller matrix is this map written on the four real coordinates of C.

**Problem.** Multiplying a Jones matrix, which acts on field amplitudes, by a common phase leaves its induced Mueller matrix unchanged.

**How the definition helps.** Replacing J by e<sup>iα</sup>J multiplies JCJ† by e<sup>iα</sup>e<sup>−iα</sup> = 1, so the induced Mueller matrix is unchanged (our own). The work is deriving the update C ↦ JCJ† and converting it to the four real coordinates (our own).

**Wikipedia:** [Mueller calculus](https://en.wikipedia.org/wiki/Mueller_calculus). It says: “the absolute phase information is lost”

**Sources:**

- [Nathan Grieb Parke, Optical Algebra (1949)](https://doi.org/10.1002/sapm1949281131)

### Normal power fractions sum to one

**Remember:** Count power crossing the interface, and the fractions must add to one.

*True by definition.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** Reflectance and transmittance are the fractions of incident power that cross the interface, measured by the normal component of each wave’s averaged energy flow per unit area. Counting crossing power, not field amplitude, includes the impedance and angle factors.

**Problem.** Consider one plane wave striking a flat boundary between lossless homogeneous dielectrics, with nonzero incident power across it. With no surface sources, reflectance plus transmittance equals one.

**How the definition helps.** At a source-free lossless interface, energy conservation says incident crossing power equals reflected plus transmitted crossing power, and dividing by the incident power gives the sum (our own). Squared field ratios alone omit the impedance and angle factors.

**Wikipedia:** [Fresnel equations](https://en.wikipedia.org/wiki/Fresnel_equations). It says: “the ratio of transmitted power to incident power in the direction normal to the interface”

**Sources:** none listed. No primary source with a working link was found.

### Normalized coherence gives fringe visibility

**Remember:** At equal power, fringe contrast measures the magnitude of the normalized correlation.

*True by definition.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** The degree of coherence γ of two complex fields is their averaged correlation ⟨E₁E₂\*⟩ divided by √(I₁I₂), the geometric mean of their average intensities. Then the interference term in the detected intensity swings between ±2√(I₁I₂)\|γ\| as the relative phase varies, and visibility is (I<sub>max</sub> − I<sub>min</sub>)/(I<sub>max</sub> + I<sub>min</sub>).

**Problem.** For two scalar beams of equal nonzero average intensity at the detector, fringe visibility equals the magnitude of their degree of coherence.

**How the definition helps.** With I₁ = I₂ = I, the extremes are 2I(1 ± \|γ\|), so visibility is \|γ\| (our own).

**Wikipedia:** [Coherence (physics)](https://en.wikipedia.org/wiki/Coherence_%28physics%29). It says: “The resulting visibility of the interference pattern (e.g. see Figure 4) gives the temporal coherence at delay τ.”

**Sources:** none listed. No primary source with a working link was found.

### The polarization matrix bounds the Stokes parameters

**Remember:** Averaged outer products are positive, so polarization never exceeds intensity.

*Rules out counterexamples.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 2: later undergraduate.

**Definition.** The polarization matrix C is the average of EE† over the complex transverse field E, so it is positive semidefinite with trace equal to intensity. Its Stokes coordinates are tr C, C₁₁ − C₂₂, 2 Re C₁₂ and 2 Im C₁₂, in one sign convention.

**Problem.** The length of the last three Stokes parameters cannot exceed total intensity. Every four-tuple with nonnegative intensity that meets this bound is realizable as a mixture of polarized beams.

**How the definition helps.** Positivity gives det C ≥ 0, and 4 det C is intensity squared minus the squared length of the last three parameters (our own). The tuple (1, 2, 0, 0) violates the bound and gives a negative intensity in one direction (our own). Conversely, the eigenvectors of C are polarized beams with the nonnegative eigenvalues as intensities (our own).

**Wikipedia:** [Stokes parameters](https://en.wikipedia.org/wiki/Stokes_parameters). It says: “whereas for the whole (non-coherent) beam radiation, the Stokes parameters are defined as averaged quantities, and the previous equation becomes an inequality”

**Sources:** none listed. No primary source with a working link was found.

### Electromagnetic potentials satisfy the homogeneous Maxwell equations

**Remember:** The exterior derivative of an exterior derivative is zero.

*True by definition.* MSC 78A25 (Electromagnetic theory (general)), 35Q61, 58A10. arXiv math-ph, physics.class-ph. Level 2: later undergraduate.

**Definition.** The field strength of a smooth electromagnetic potential one-form A on spacetime is its exterior derivative F = dA. Because applying d twice gives zero, every such F is automatically closed.

**Problem.** Every field strength F = dA satisfies the homogeneous Maxwell equations dF = 0. In vector form, magnetic fields have zero divergence, and a changing magnetic field induces electric circulation.

**How the definition helps.** The potential makes both equations automatic because dF = d(dA) = 0. The converse uses the Poincaré lemma, which gives a potential for a closed form on a contractible region (our own). A global potential can fail to exist when magnetic flux through a closed surface is nonzero (our own).

**nLab:** [electromagnetic field](https://ncatlab.org/nlab/show/electromagnetic+field). It says: “Maxwell's equations say that (using the experimentally observed absence of net magnetic charge) the field strength of electromagnetism is a closed differential 2-form on spacetime;”

**Wikipedia:** [Mathematical descriptions of the electromagnetic field](https://en.wikipedia.org/wiki/Mathematical_descriptions_of_the_electromagnetic_field). It says: “Faraday's law and Gauss's law for magnetism (the homogeneous equations) turn out to be identically true for any potentials.”

**Sources:** none listed. No primary source with a working link was found.

### The electromagnetic tensor makes Maxwell’s equations Lorentz covariant

**Remember:** Tensor equations hold in every inertial frame if they hold in one.

*True by definition.* MSC 78A25 (Electromagnetic theory (general)), 83A05. arXiv math-ph, physics.class-ph. Level 2: later undergraduate.

**Definition.** Pack the electric and magnetic fields into one antisymmetric tensor F, with F⁰ⁱ = E<sub>i</sub>/c and (F²³, F³¹, F¹²) = B in inertial coordinates with x⁰ = ct, and the sources into the four-current (cρ, j). Maxwell’s equations become tensor equations in F and the four-current, and a Lorentz transformation changes both sides of a tensor equation by the same rule.

**Problem.** If the fields and sources satisfy Maxwell’s equations in one inertial frame, the transformed ones satisfy them in every inertial frame. Lorentz transformations relate these frames and preserve the spacetime interval.

**How the definition helps.** A tensor equation that holds in one frame holds in all, because both sides transform alike. With separate electric and magnetic vectors one must check by hand how they mix. The work is checking that the tensor equations reproduce the four vector equations (our own).

**Wikipedia:** [Mathematical descriptions of the electromagnetic field](https://en.wikipedia.org/wiki/Mathematical_descriptions_of_the_electromagnetic_field), [Covariant formulation of classical electromagnetism](https://en.wikipedia.org/wiki/Covariant_formulation_of_classical_electromagnetism). It says: “Maxwell's equations are exactly consistent with special relativity—i.e., if they are valid in one inertial reference frame, then they are automatically valid in every other inertial reference frame.”

**Sources:** none listed. No primary source with a working link was found.

### The Lorenz gauge turns Maxwell's equations into wave equations

**Remember:** Zero four-divergence unhooks the potentials into separate wave equations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 78A25 (Electromagnetic theory (general)), 78A40. arXiv physics.class-ph, math-ph. Level 2: later undergraduate.

**Definition.** The Lorenz gauge requires the four-potential to have zero four-divergence, ∇·A + (1/c²)∂φ/∂t = 0, for scalar potential φ and vector potential A. This is exactly the combination whose gradient and time derivative couple φ and A in Maxwell’s equations for the potentials (our own).

**Problem.** In the Lorenz gauge, Maxwell's equations for the potentials become separate inhomogeneous wave equations, one for φ and one for each component of A. Their sources are the charge density and the components of the current density, and the form is visibly Lorentz invariant.

**How the definition helps.** Setting the coupling combination to zero leaves one wave equation for φ with source ρ/ε₀ and one for each component of A with source μ₀ times the current density (our own). The gauge condition and the wave operator are Lorentz invariant, so the form is visibly invariant.

**Wikipedia:** [Gauge fixing](https://en.wikipedia.org/wiki/Gauge_fixing). It says: “It is unique among the constraint gauges in retaining manifest Lorentz invariance.”

**Sources:**

- [L. Lorenz, On the identity of the vibrations of light with electrical currents, Philosophical Magazine 34 (1867) 287–301](https://doi.org/10.1080/14786446708639882)

### One conducting wall rules out TEM

**Remember:** One wall fixes one potential, leaving no transverse field.

*Rules out counterexamples.* MSC 78A50 (Antennas, waveguides in optics and electromagnetic theory). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** A transverse electromagnetic (TEM) mode has both fields perpendicular to the guide axis. Then the transverse electric field is the gradient of a potential that is harmonic on the cross-section and constant on each perfectly conducting wall.

**Problem.** Consider a straight uniform hollow guide with a bounded simply connected cross-section, one perfectly conducting wall and a homogeneous isotropic dielectric filling. At positive frequency it supports no nonzero TEM mode.

**How the definition helps.** A harmonic function that is constant on the single boundary is constant inside, by uniqueness for Laplace’s equation, so the electric field vanishes and then the magnetic field does too (our own). A coaxial guide has two walls at different potentials and does support TEM.

**Wikipedia:** [Waveguide (radio frequency)](https://en.wikipedia.org/wiki/Waveguide_%28radio_frequency%29), [Transverse mode](https://en.wikipedia.org/wiki/Transverse_mode). It says: “In hollow, single conductor waveguides, TEM waves are not possible.”

**Sources:** none listed. No primary source with a working link was found.

### Power amplitudes make scattering unitary

**Remember:** When squared amplitudes measure power, conserving power preserves the vector norm.

*True by definition.* MSC 78A55 (Technical applications of optics and electromagnetic theory). arXiv physics.class-ph. Level 2: later undergraduate.

**Definition.** Scale the incoming and outgoing wave amplitudes at each port so that the squared magnitude of each is its power. The scattering matrix maps the incoming amplitude vector to the outgoing one, so total power in or out is the squared length of a vector.

**Problem.** A linear lossless network has a unitary scattering matrix when these amplitudes describe all power channels in independent, power-additive bases of equal finite dimension.

**How the definition helps.** Losslessness says outgoing power equals incoming power for every input, so the square scattering matrix preserves vector length and is unitary (our own). This assumes independent channels whose powers add, with equal finite numbers of incoming and outgoing channels.

**Wikipedia:** [Scattering parameters](https://en.wikipedia.org/wiki/Scattering_parameters). It says: “This implies that the S-parameter matrix is unitary”

**Sources:**

- [K. Kurokawa, Power Waves and the Scattering Matrix (1965)](https://doi.org/10.1109/TMTT.1965.1125964)

### Étendue measures conserved ray volume

**Remember:** Optics can trade beam area for angle without changing ray volume.

*True by definition.* MSC 78A05 (Geometric optics). arXiv physics.optics. Level 3: graduate.

**Definition.** The étendue of a ray bundle crossing a surface is ∫n²\|cos θ\| dA dΩ over its rays, for refractive index n, area dA, solid angle dΩ and angle θ to the normal. It equals the bundle’s volume in the phase space of ray positions and optical direction vectors (our own).

**Problem.** At fixed frequency, lossless reversible propagation in isotropic geometric optics preserves the étendue of a ray bundle between transverse sections without clipping or splitting.

**How the definition helps.** Ray propagation is a Hamiltonian flow, so Liouville’s theorem preserves phase-space volume, and hence étendue (our own). The optical work is showing that propagation and ideal interfaces preserve this Hamiltonian structure.

**Wikipedia:** [Etendue](https://en.wikipedia.org/wiki/Etendue). It says: “Conservation of etendue can be derived in different contexts, such as from optical first principles, from Hamiltonian optics”

**Sources:** none listed. No primary source with a working link was found.

### Pupil overlaps give image contrast

**Remember:** Image contrast at each frequency comes from overlapping two shifted pupils.

*True by definition.* MSC 78A10 (Physical optics). arXiv physics.optics. Level 3: graduate.

**Definition.** The optical transfer function of incoherent imaging is the Fourier transform of the nonzero integrable point intensity response, divided by its value at zero frequency. The point intensity is the squared magnitude of the point amplitude, and the pupil function gives amplitude and phase across the aperture.

**Problem.** In scalar imaging with the same point response everywhere, assume the point amplitude is the inverse Fourier transform of the pupil in scaled coordinates. Then the transfer function equals the pupil’s correlation with a shifted copy, divided by its squared norm.

**How the definition helps.** By the convolution theorem (our own explanation), the Fourier transform of a squared magnitude is the autocorrelation of the amplitude’s transform, which here is the pupil. Normalizing at zero frequency divides by the pupil’s squared norm. The optical work lies in relating the point amplitude to the pupil.

**Wikipedia:** [Optical transfer function](https://en.wikipedia.org/wiki/Optical_transfer_function). It says: “From the convolution theorem it can be seen that the optical transfer function is in fact the autocorrelation of the pupil function.”

**Sources:** none listed. No primary source with a working link was found.

### Duality preserves vacuum Maxwell fields

**Remember:** Taking the Hodge star switches the two vacuum equations.

*True by definition.* MSC 78A25 (Electromagnetic theory (general)). arXiv physics.class-ph. Level 3: graduate.

**Definition.** On oriented four-dimensional Lorentzian spacetime, the Hodge star sends each two-form F to the two-form ⋆F with α ∧ ⋆F = ⟨α,F⟩ vol for every two-form α. The source-free Maxwell equations are dF = 0 and d⋆F = 0, and since ⋆⋆F = −F, the star swaps them (our own).

**Problem.** If F solves the source-free Maxwell equations, so does ⋆F.

**How the definition helps.** If dF = 0 and d⋆F = 0, then d(⋆F) = 0 and d⋆(⋆F) = −dF = 0 (our own). The work lies in identifying these two equations with Maxwell’s component equations.

**nLab:** [electric-magnetic duality](https://ncatlab.org/nlab/show/electric-magnetic+duality). It says: “under the Hodge star operator is itself closed”

**Sources:** none listed. No primary source with a working link was found.

### Fixed fluxes remove harmonic ambiguity

**Remember:** Fixing all flux periods leaves no harmonic field to add.

*Rules out counterexamples.* MSC 78A25 (Electromagnetic theory (general)). arXiv math-ph. Level 3: graduate.

**Definition.** On a compact oriented Riemannian manifold without boundary, the fluxes of a closed form F (one with dF = 0) are its integrals over all closed cycles of its degree. They fix its cohomology class, and a harmonic form with all fluxes zero is zero.

**Problem.** Let F have degree k in dimension n, and let j be an exact (n − k + 1)-form. Each cohomology class contains one closed F with d⋆F = j, where ⋆ is the Hodge star.

**How the definition helps.** Two solutions in one class differ by a harmonic form with zero fluxes, which vanishes. The Hodge decomposition gives existence. Without fixed fluxes, a constant area form on a flat torus with zero current shows the ambiguity (our own).

**nLab:** [Hodge-Maxwell theorem](https://ncatlab.org/nlab/show/Hodge-Maxwell+theorem). It says: “there is in each de Rham cohomology class of degree k a unique representative closed k-form F”

**Sources:** none listed. No primary source with a working link was found.

### Maxwell’s current 3-form makes charge conservation automatic

**Remember:** The derivative of the current vanishes because the current is itself a derivative.

*True by definition.* MSC 78A25 (Electromagnetic theory (general)), 35Q61. arXiv math-ph, physics.class-ph. Level 3: graduate.

**Definition.** The current three-form J = ρ dx∧dy∧dz − dt∧(jₓ dy∧dz + jᵧ dz∧dx + j<sub>z</sub> dx∧dy) packs charge density ρ and current density j into one form. Maxwell’s source equation says J = d⋆F in suitable units, so J is itself an exterior derivative.

**Problem.** The Maxwell source equation implies local charge conservation, which is dJ = 0.

**How the definition helps.** dJ = d(d⋆F) = 0 because d² = 0, and dJ = 0 is the continuity equation. In vector form one takes the divergence of the Ampère–Maxwell law and uses Gauss’s law instead (our own).

**Wikipedia:** [Mathematical descriptions of the electromagnetic field](https://en.wikipedia.org/wiki/Mathematical_descriptions_of_the_electromagnetic_field). It says: “Since d² = 0, the 3-form J satisfies the conservation of current (continuity equation):”

**Sources:** none listed. No primary source with a working link was found.

### Causal susceptibility links dispersion and absorption

**Remember:** One analytic response function ties absorption to dispersion.

*Makes the theorem clean to state or prove.* MSC 78A40 (Waves and radiation in optics and electromagnetic theory). arXiv physics.optics. Level 3: graduate.

**Definition.** The susceptibility χ(ω) is the transform with exp(iωt) of a causal response kernel, one that gives the linear polarization response to an electric field and vanishes at negative times. Its real and imaginary parts describe dispersion and absorption, and causality is what lets χ extend to the upper half-plane.

**Problem.** Assume the transform is analytic in the upper half-plane, extends smoothly to its boundary, and decays uniformly at infinity there. On the real axis, either component determines the other by a signed Hilbert transform, an integral taken in the symmetric principal value sense.

**How the definition helps.** For a function analytic in the upper half-plane and decaying there, Cauchy’s integral formula recovers each boundary component from the other (our own). Causality alone does not give the decay, so the theorem assumes it.

**Wikipedia:** [Kramers–Kronig relations](https://en.wikipedia.org/wiki/Kramers%E2%80%93Kronig_relations). It says: “The real and imaginary parts of such a function are not independent, allowing the full function to be reconstructed given just one of its parts.”

**Sources:**

- [John S. Toll, Causality and the Dispersion Relation: Logical Foundations (1956)](https://doi.org/10.1103/PhysRev.104.1760)

### Complex stretching absorbs without reflection

**Remember:** Continue the same outgoing wave into complex space and it decays without reflecting.

*True by definition.* MSC 78A40 (Waves and radiation in optics and electromagnetic theory). arXiv physics.optics, math-ph. Level 3: graduate.

**Definition.** A perfectly matched layer continues the coordinate normal to a plane interface into the complex plane: it equals the real coordinate at the interface and gains an increasing imaginary part inside the layer. Maxwell’s equations are transformed by this coordinate change, so the outgoing wave is the same analytic function evaluated at complex points.

**Problem.** With time dependence exp(−iωt), a plane wave with positive normal wave number decays inside this ideal layer. It produces no reflection at the interface.

**How the definition helps.** With exp(−iωt) and positive normal wave number, the wave exp(ikx) decays where x has a positive imaginary part (our own). At the interface the coordinate is unchanged, so the tangential fields match and nothing reflects. An ordinary absorbing medium can reflect at its entrance.

**Wikipedia:** [Perfectly matched layer](https://en.wikipedia.org/wiki/Perfectly_matched_layer). It says: “The same coordinate transformation causes waves to attenuate”

**Sources:**

- [Jean-Pierre Berenger, A perfectly matched layer for the absorption of electromagnetic waves (1994)](https://doi.org/10.1006/jcph.1994.1159)
- [Weng Cho Chew and William H. Weedon, A 3D perfectly matched medium from modified Maxwell’s equations with stretched coordinates (1994)](https://doi.org/10.1002/mop.4650071304)

### The polarization quotient leaves two modes

**Remember:** Discard gauge directions and two light modes remain.

*True by definition.* MSC 78A40 (Waves and radiation in optics and electromagnetic theory). arXiv physics.optics. Level 3: graduate.

**Definition.** At a nonzero lightlike wave vector k in four-dimensional spacetime, a physical polarization is a complex amplitude a with k·a = 0, counted up to adding complex multiples of k. Since k·k = 0, k itself meets the constraint, so the identification removes one direction.

**Problem.** At each nonzero lightlike wave vector, the complex space of physical polarizations has dimension two.

**How the definition helps.** The constraint k·a = 0 cuts four dimensions to three, and identifying multiples of k removes one more (our own). Maxwell’s equations justify the constraint, and the freedom to change the potential justifies the identification.

**nLab:** [wave polarization](https://ncatlab.org/nlab/show/wave+polarization). It says: “Therefore in this case the space of physically distinguishable polarizations for given wave vector k is the quotient space”

**Sources:** none listed. No primary source with a working link was found.

### Zero far field means exterior silence

**Remember:** Nothing reaches infinity, so nothing exists outside the source.

*Rules out counterexamples.* MSC 78A40 (Waves and radiation in optics and electromagnetic theory). arXiv physics.optics. Level 3: graduate.

**Definition.** An outgoing field is one that radiates away from its source: outside the source, E(rŝ) = exp(ikr)E∞(ŝ)/r + O(r⁻²) uniformly over unit directions ŝ, with time factor exp(−iωt) and wave number k &gt; 0. Its far-field pattern E∞(ŝ) is the amplitude it carries to infinity in direction ŝ.

**Problem.** For a smooth current supported inside a ball, the outgoing field has zero far-field pattern exactly when the field vanishes outside the ball.

**How the definition helps.** By Rellich’s uniqueness theorem, an outgoing field outside the ball is fixed by its far-field pattern, so a zero pattern forces a zero field (our own explanation). Without the outgoing condition this fails: an incoming spherical wave has no outgoing amplitude but is not zero (our own counterexample).

**Paper or page:** [Nonradiating sources of Maxwell's equations](https://arxiv.org/abs/2402.10407v1). It says: “is nonradiating if and only if E∞(x̂) = 0.”

**Sources:**

- [Peijun Li and Jue Wang, Nonradiating sources of Maxwell's equations](https://arxiv.org/abs/2402.10407v1)

### Angular spectra propagate by multiplication

**Remember:** Each plane wave travels alone, gaining just its own phase factor.

*True by definition.* MSC 78A45 (Diffraction, scattering). arXiv physics.optics. Level 3: graduate.

**Definition.** The angular spectrum of a scalar field on a plane is its two-dimensional Fourier transform, which writes the field as a sum of plane waves, one for each transverse spatial frequency. Each plane wave solves the wave equation on its own, so it travels without mixing with the others.

**Problem.** In a uniform half-space, propagation through distance z multiplies each forward coefficient by exp(iκz). Here κ is the forward normal wave number, with positive imaginary part for components that decay.

**How the definition helps.** Fourier coordinates split the Helmholtz equation into one ordinary differential equation in z for each coefficient, with no coupling between frequencies. Choosing the forward or decaying solution of each one gives the factor exp(iκz) (our own explanation).

**Wikipedia:** [Angular spectrum method](https://en.wikipedia.org/wiki/Angular_spectrum_method). It says: “Multiplying each point in the 2D-FFT by a propagation term which accounts for the phase change that each plane wave will undergo”

**Sources:** none listed. No primary source with a working link was found.

### Fibonacci layer traces obey a recurrence

**Remember:** Each new stack glues the last two; follow only its trace.

*Makes the theorem clean to state or prove.* MSC 78A48 (Composite media; random media in optics and electromagnetic theory). arXiv physics.optics. Level 3: graduate.

**Definition.** A Fibonacci stack is built by joining the two previous stacks, most recent first, starting from two stacks whose 2×2 transfer matrices have determinant one. So each transfer matrix is the product of the previous two, and xₙ is the trace of the matrix of stack n.

**Problem.** The trace obeys xₙ₊₁ = xₙxₙ₋₁ − xₙ₋₂ for n ≥ 3.

**How the definition helps.** Taking traces turns a growing product of matrices into a recurrence for numbers. Our own derivation uses tr(AB) + tr(AB⁻¹) = tr(A)tr(B) for determinant-one matrices, with A and B the matrices of stacks n and n − 1. Then AB⁻¹ is similar to the matrix of stack n − 2, so its trace is xₙ₋₂.

**Paper or page:** [Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1). It says: “xₙ₊₁ = xₙxₙ₋₁ − xₙ₋₂”

**Sources:**

- [Bryn Davies, Richard V Craster — Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1)

### Mirror symmetry reverses transfer matrices

**Remember:** Reflect the layer: ends swap, slope flips sign, transfer runs backwards.

*True by definition.* MSC 78A48 (Composite media; random media in optics and electromagnetic theory). arXiv math-ph. Level 3: graduate.

**Definition.** The transfer matrix T of a layer maps the pair (value, derivative) of a scalar wave at the left end to the pair at the right end. Mirror reflection of the layer swaps the two ends and changes the sign of the derivative, which is the matrix S = diag(1, −1).

**Problem.** Consider the scalar Helmholtz equation u″ + (ω/c)²u = 0 in a layer with positive speed c symmetric about its midpoint. Then T⁻¹ = STS, where S changes the sign of the derivative.

**How the definition helps.** In a symmetric layer the reflected solution is again a solution, so reflection turns left-to-right transfer into right-to-left transfer. Applying T to the reflected solution gives TST = S, which is T⁻¹ = STS because S² = I (our own proof). Uniqueness of solutions with given end data makes T well defined.

**Paper or page:** [Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1). It says: “T(ω)⁻¹ = ST(ω)S”

**Sources:**

- [Bryn Davies, Richard V Craster — Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1)

### Transfer traces detect band gaps

**Remember:** Growth factors per period multiply to one; the trace decides the rest.

*Makes the theorem clean to state or prove.* MSC 78A48 (Composite media; random media in optics and electromagnetic theory). arXiv physics.optics. Level 3: graduate.

**Definition.** For a periodic scalar wave equation, the transfer matrix T maps the field and its slope at the start of one period to those at its end. When T is real with determinant one, its two eigenvalues are the growth factors per period, and their product is one.

**Problem.** At a real frequency, the repeated medium has an exponentially growing and an exponentially decaying mode exactly when \|tr T\| &gt; 2.

**How the definition helps.** The eigenvalues are the roots of λ² − (tr T)λ + 1, so they multiply to one (our own derivation). They are real, with magnitudes on opposite sides of one, exactly when \|tr T\| &gt; 2. Otherwise they have magnitude one and no mode grows exponentially.

**Paper or page:** [Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1), [Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1). It says: “In this case, \|tr(T)\| &gt; 2 and T is said to be hyperbolic.”

**Sources:**

- [Bryn Davies, Richard V Craster — Symmetry-induced quasicrystalline waveguides](https://arxiv.org/abs/2208.14906v1)

### Envelope extraction preserves waveguide stability

**Remember:** A phase of size one changes no norm, so no bound.

*True by definition.* MSC 78A50 (Antennas, waveguides in optics and electromagnetic theory). arXiv math.NA. Level 3: graduate.

**Definition.** The envelope of a field u removes a fixed oscillation along the axis: Mu = exp(ikz)u for axial coordinate z and real wave number k. The envelope operator is MAM⁻¹, with domain M applied to the domain of A, and M preserves the paper’s norms because \|exp(ikz)\| = 1.

**Problem.** If the original operator satisfies ‖Au‖ ≥ α‖u‖ in the paper’s integral square norms, the envelope operator satisfies the same bound, and conversely.

**How the definition helps.** M and M⁻¹ preserve both norms, so the bound passes through unchanged (our own explanation). For v in the new domain, ‖MAM⁻¹v‖ = ‖AM⁻¹v‖ ≥ α‖M⁻¹v‖ = α‖v‖. The converse is the same argument with M⁻¹ in place of M.

**Paper or page:** [Stability Analysis for Electromagnetic Waveguides. Part 1: Acoustic and Homogeneous Electromagnetic Waveguides](https://arxiv.org/abs/2307.04521v2). It says: “bounded below if and only if operator A is bounded below, and the corresponding boundedness below constants are identical”

**Sources:**

- [Jens Markus Melenk, Leszek Demkowicz, Stefan Henneking — Stability Analysis for Electromagnetic Waveguides. Part 1: Acoustic and Homogeneous Electromagnetic Waveguides](https://arxiv.org/abs/2307.04521v2)

### Transparent boundaries preserve exterior solutions

**Remember:** The boundary answers exactly as the whole outside world would.

*True by definition.* MSC 78A45 (Diffraction, scattering), 78M10. arXiv math.NA. Level 4: research.

**Definition.** The transparent boundary map takes a tangential electric trace on the sphere to the tangential magnetic trace of the outgoing Maxwell field outside the sphere with that trace, at the given frequency and with the same normal for both traces. So a field inside meets this condition exactly when it extends to an outgoing field outside.

**Problem.** For time-harmonic Maxwell scattering, impose this map on the scattered field at the sphere. The resulting bounded problem has as its solution the restriction of the full solution.

**How the definition helps.** The map holds exactly the boundary data of outgoing exterior fields, so the restricted full solution satisfies the bounded problem and no solution is lost (our own explanation). The hard part is solving the exterior problem uniquely and writing the map as an infinite series.

**Paper or page:** [An Adaptive Finite Element DtN Method for Maxwell's Equations](https://arxiv.org/abs/2202.09203v1). It says: “an exact transparent boundary condition is introduced and the scattering problem is reduced equivalently into a bounded domain.”

**Sources:**

- [Gang Bao, Mingming Zhang, Xue Jiang, Peijun Li, Xiaokai Yuan — An Adaptive Finite Element DtN Method for Maxwell's Equations](https://arxiv.org/abs/2202.09203v1)

### Born fields reveal Fourier arcs

**Remember:** Pretend the inside field is the incoming wave; scattering turns linear.

*Makes the theorem clean to state or prove.* MSC 78A46 (Inverse problems (including inverse scattering) in optics and electromagnetic theory). arXiv physics.optics. Level 4: research.

**Definition.** The Born approximation replaces the unknown total field inside the object by the known incoming plane wave. The scattered field then depends linearly on the contrast, the object’s departure from the background, through its product with that plane wave.

**Problem.** Light a bounded, compactly supported contrast in two dimensions with a scalar plane wave. Measure its Born field along a line beyond the object, perpendicular to the beam. Its propagating Fourier components give the Fourier transform of the contrast on a shifted circular arc, up to a known factor.

**How the definition helps.** Multiplying the contrast by a plane wave shifts its Fourier transform, and the outgoing point-source response picks out the arc of propagating frequencies (our own explanation). The theorem concerns the approximate field itself, not the exact one.

**Paper or page:** [Diffraction Tomography, Fourier Reconstruction, and Full Waveform Inversion](https://arxiv.org/abs/2110.07921v2). It says: “\\mathcal{F}<sub>1</sub>u<sup>{\\mathrm{Born}}</sup>(k<sub>1</sub>, r\_{\\mathrm{M}}) = \\sqrt{2 \\pi } \\frac{\\i \\mathrm e<sup>{\\i</sup> \\kappa r\_{\\mathrm{M}}}}{2 \\kappa } \\mathcal{F}f\\left(k<sub>1</sub>, \\kappa -k<sub>0</sub> \\right).”

**Sources:**

- [Florian Faucher, Clemens Kirisits, Michael Quellmalz, Otmar Scherzer, Eric Setterqvist — Diffraction Tomography, Fourier Reconstruction, and Full Waveform Inversion](https://arxiv.org/abs/2110.07921v2)

### Untwisting reduces helical mode dimension

**Remember:** Ride the helix: the mode keeps its shape and only turns phase.

*Makes the theorem clean to state or prove.* MSC 78A50 (Antennas, waveguides in optics and electromagnetic theory). arXiv physics.optics. Level 4: research.

**Definition.** A helical mode is a field that, in coordinates following the helix’s bending and twisting, is a fixed cross-sectional shape times a phase advancing at a constant rate β, the propagation constant. When the cross section and index profile are fixed in these coordinates, the wave equation’s coefficients do not depend on distance along the guide (our own explanation).

**Problem.** For the paper’s scalar wave equation with zero boundary values, finding helical modes with real β reduces to an equation on the cross section. In that equation β enters at most quadratically.

**How the definition helps.** Since the coefficients do not change along the guide, each derivative along it just multiplies the mode by a factor proportional to β (our own explanation). A second-order equation has at most two such derivatives, so β appears at most squared. The paper derives the transformed equation and proves the two problems equivalent.

**Paper or page:** [Guided modes of helical waveguides](https://arxiv.org/abs/2506.03276v1). It says: “Next, exploiting the constant torsion and curvature of the Frenet frame of a circular helix, the 3D eigenproblem is further reduced to a two-dimensional (2D) eigenproblem on the waveguide cross section.”

**Sources:**

- [Jay Gopalakrishnan and Michael Neunteufel, Guided modes of helical waveguides](https://arxiv.org/abs/2506.03276v1)

### Compatible derivatives preserve Gauss’s law

**Remember:** Mesh curl kills mesh gradients, so Gauss’s law cannot drift.

*True by definition.* MSC 78M10 (Finite element, Galerkin and related methods applied to problems in optics and electromagnetic theory). arXiv math.NA. Level 4: research.

**Definition.** On the closed surface, choose a mesh gradient G and mesh curl C with CG = 0, just as curl grad = 0. Define the mesh divergence D = −G\*, minus the adjoint of G in the mesh inner products, so the divergence of every adjoint curl is zero. Define the charge by ρ(t) = DE(0) − ∫₀ᵗ DJ(s) ds, with E the mesh electric field and J the projected current.

**Problem.** As time varies continuously, the mesh electric field satisfies Gauss’s law: its discrete divergence equals the charge ρ(t) at each time.

**How the definition helps.** Applying D to the field update removes the curl term, since DC\* = −(CG)\* = 0, and leaves the rate of change −DJ (our own explanation, with the same projected current in both updates). Integrating in time gives DE(t) = ρ(t). Lemma 13 supplies CG = 0 for the paper’s mesh spaces.

**Paper or page:** [A polytopal discrete de Rham complex on manifolds, with application to the Maxwell equations](https://arxiv.org/abs/2401.16130v3), [A polytopal discrete de Rham complex on manifolds, with application to the Maxwell equations](https://arxiv.org/abs/2401.16130v3). It says: “\\langle \\underline{E}<sub>h</sub>(t),\\underline{{\\mathrm{d}}}<sup>0<sub>r</sup>,h</sub>\\underline{{v}}<sub>h</sub><sup>0\\rangle</sup> = -\\langle \\rho \_h(t),\\underline{{v}}<sub>h</sub><sup>0\\rangle</sup>”

**Sources:**

- [Jérôme Droniou, Marien Hanot, Todd Oliynyk — A polytopal discrete de Rham complex on manifolds, with application to the Maxwell equations](https://arxiv.org/abs/2401.16130v3)

### Vertex quadrature gives local mass solves

**Remember:** Sample only at vertices, so fields at different vertices never meet.

*True by definition.* MSC 78M10 (Finite element, Galerkin and related methods applied to problems in optics and electromagnetic theory). arXiv math.NA. Level 4: research.

**Definition.** Compute each mass-matrix entry, the integral of a product of two basis fields, by a weighted sum of values at the mesh vertices only. With the paper’s basis fields, each nonzero at just one sampled vertex, fields attached to different vertices have zero product at every sample point.

**Problem.** The mass matrix in the Maxwell time step has one diagonal block for each vertex.

**How the definition helps.** Entries for fields at different vertices are sums of zeros, so only fields that share a vertex couple, which gives one block per vertex (our own explanation). The remaining work is to show that the sampled product gives a norm comparable to the exact one.

**Paper or page:** [A Yee-like finite-element scheme for Maxwell's equations on unstructured grids](https://arxiv.org/abs/2306.01182v1). It says: “with one block per vertex of the mesh coupling all degrees of freedom not vanishing at this vertex”

**Sources:**

- [Herbert Egger, Bogdan Radu — A Yee-like finite-element scheme for Maxwell's equations on unstructured grids](https://arxiv.org/abs/2306.01182v1)

### A discrete product preserves energy balance

**Remember:** A product that obeys the product rule keeps the energy law.

*True by definition.* MSC 78M20 (Finite difference methods applied to problems in optics and electromagnetic theory). arXiv physics.class-ph. Level 4: research.

**Definition.** The discrete cup product on an oriented cubical grid multiplies cochains so that the grid derivative obeys a product rule (our own). On each interval, two vertex cochains multiply pointwise, and a vertex factor is read at the initial endpoint before an edge factor and at the final endpoint after it. On cubes, take tensor products of these interval rules with the graded permutation signs.

**Problem.** For the paper’s spatially discrete Maxwell system in a vacuum with a current, energy loss equals outgoing flux plus work on the current.

**How the definition helps.** The product rule expands the flux derivative of E ∪ H into terms with dE and dH, and the discrete Maxwell equations turn these into time derivatives and a current term (our own explanation). The model’s relations between fields then make the result the rate of energy loss minus E ∪ J.

**Paper or page:** [On a semi-discrete model of Maxwell's equations in three and two dimensions](https://arxiv.org/abs/2510.26427v1). It says: “dᶜ(E∪H) = −½ d/dt(E∪D+B∪H) − E∪J.”

**Sources:**

- [Volodymyr Sushch, On a semi-discrete model of Maxwell's equations in three and two dimensions](https://arxiv.org/abs/2510.26427v1)

### Compatible differences enforce zero divergence

**Remember:** Divergence of a discrete curl is exactly zero.

*True by definition.* MSC 78M20 (Finite difference methods applied to problems in optics and electromagnetic theory). arXiv math.NA. Level 4: research.

**Definition.** On a grid, choose the difference formulas for curl C and divergence D together, so that DC = 0 holds exactly, as div curl = 0 does in the continuum.

**Problem.** Let L = CMCᵀ be the paper’s matrix for applying curl twice with a weight matrix M. Every eigenvector of L with nonzero eigenvalue has zero discrete divergence.

**How the definition helps.** Since DC = 0, also DL = DCMCᵀ = 0 (our own proof). Applying D to Lv = λv gives λDv = 0, so Dv = 0 whenever λ ≠ 0.

**Paper or page:** [Kernel compensation method for Maxwell eigenproblem with mimetic finite difference discretization](https://arxiv.org/abs/2503.19379v1). It says: “then discrete divergence-free condition Bvₕ = 0 holds.”

**Sources:**

- [Chenhao Jin, Yinhua Xia, Yan Xu — Kernel compensation method for Maxwell eigenproblem with mimetic finite difference discretization](https://arxiv.org/abs/2503.19379v1)
