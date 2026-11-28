### Distance modulus adds to magnitude

**Remember:** Logarithms turn inverse-square dimming into an added distance term.

*True by definition.* MSC 85A04 (General questions in astronomy and astrophysics). arXiv astro-ph.SR, astro-ph.GA. Level 1: early undergraduate.

**Definition.** Luminosity distance D is the distance at which inverse-square dilution turns bolometric luminosity L into the observed flux F, so F = L/(4πD²). The distance modulus 5 log₁₀(D/(10 parsecs)) is the magnitude change from moving the source from 10 parsecs, where absolute magnitude is defined, out to D.

**Problem.** Sum the light over all wavelengths and assume transparent propagation. Apparent magnitude equals absolute magnitude plus the distance modulus.

**How the definition helps.** Magnitude is −2.5 log₁₀ of flux, and the flux falls by (D/(10 parsecs))² from 10 parsecs to D (our own). So the logarithm turns this dilution into the added term 5 log₁₀(D/(10 parsecs)) (our own).

**Wikipedia:** [Distance modulus](https://en.wikipedia.org/wiki/Distance_modulus). It says: “the observed brightness of a light source is related to its distance by the inverse square law”

**Sources:** none listed. No primary source with a working link was found.

### Redshift factors multiply

**Remember:** Consecutive wavelength ratios multiply along a light path.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 1: early undergraduate.

**Definition.** The redshift factor 1 + z is the received wavelength divided by the emitted wavelength, a ratio used instead of the fractional change z.

**Problem.** Along one light path, the total redshift factor equals the product of the factors on consecutive parts, when the same observer measures at each shared endpoint.

**How the definition helps.** Ratios multiply because the wavelength at each shared endpoint appears once above and once below and cancels (our own). Predicting each ratio from motion or cosmic expansion needs a separate physical calculation.

**Wikipedia:** [Redshift](https://en.wikipedia.org/wiki/Redshift). It says: “corresponding to the fractional change in wavelength (positive for redshifts, negative for blueshifts), and by the wavelength ratio 1 + z”

**Sources:** none listed. No primary source with a working link was found.

### Flat spectra have zero AB color

**Remember:** A flat flux density has the same AB magnitude in every filter.

*True by definition.* MSC 85A04 (General questions in astronomy and astrophysics). arXiv astro-ph.SR, astro-ph.GA. Level 2: later undergraduate.

**Definition.** The AB magnitude in a filter is −2.5 log₁₀(F/F₀), where F &gt; 0 is the average flux density per unit frequency weighted by the normalized filter response. The reference F₀, about 3631 janskys, is the same for every filter (our own), and an AB color is the difference of two AB magnitudes.

**Problem.** A source with positive constant flux density per unit frequency has zero AB color between any two properly calibrated filters.

**How the definition helps.** A normalized average of a constant is that constant, so a flat source has the same F, and so the same AB magnitude, in every filter (our own). Their difference is zero. A reference star with a varying spectrum would instead give a different zero point in each filter.

**Wikipedia:** [AB magnitude](https://en.wikipedia.org/wiki/AB_magnitude). It says: “The bandpass AB magnitude is defined so that the zero point corresponds to a bandpass-averaged spectral flux density”

**Sources:**

- [J. B. Oke and J. E. Gunn (1983), Secondary standard stars for absolute spectrophotometry](https://doi.org/10.1086/160817)

### Orbit constants give stellar equilibria

**Remember:** A function of orbit constants stays constant as stars move.

*True by definition.* MSC 85A05 (Galactic and stellar dynamics). arXiv astro-ph.GA. Level 2: later undergraduate.

**Definition.** Write the distribution of stars in position and velocity as a function of orbit constants such as energy, quantities that keep the same value all along each star's orbit.

**Problem.** In a time-independent gravitational field, every smooth function of time-independent orbit constants solves the steady collisionless Boltzmann equation. This equation says the distribution stays constant along each star's orbit when encounters are negligible.

**How the definition helps.** Each orbit constant is unchanged along an orbit, so by the chain rule any function of them is too (our own). The work lies in finding the orbit constants, and if the stars make the field, their density must also reproduce it.

**Wikipedia:** [Jeans's theorem](https://en.wikipedia.org/wiki/Jeans%27s_theorem). It says: “any function of the integrals is a steady-state solution”

**Sources:** none listed. No primary source with a working link was found.

### Squared buoyancy frequency flags instability

**Remember:** Positive squared buoyancy frequency restores a displaced parcel.

*True by definition.* MSC 85A15 (Galactic and stellar structure). arXiv astro-ph.SR. Level 2: later undergraduate.

**Definition.** Move a small parcel of stellar gas vertically without heat exchange. The squared buoyancy frequency N² is the restoring acceleration per unit displacement at equilibrium, minus the derivative of buoyancy acceleration with respect to displacement. It keeps its sign, so N² &lt; 0 means buoyancy pushes the parcel further away.

**Problem.** With constant local coefficients, the linearized displacement oscillates if N² is positive. It has an exponentially growing mode if N² is negative.

**How the definition helps.** The linearized displacement obeys x″ = −N²x, which oscillates for N² &gt; 0 and grows like exp(√(−N²) t) for N² &lt; 0 (our own). The physical work compares the parcel's density after displacement with the surrounding density.

**Wikipedia:** [Brunt–Väisälä frequency](https://en.wikipedia.org/wiki/Brunt%E2%80%93V%C3%A4is%C3%A4l%C3%A4_frequency). It says: “If a gas parcel is pushed up and N² &gt; 0, the air parcel will move up and down”

**Sources:** none listed. No primary source with a working link was found.

### Eddington ratios compare accelerations

**Remember:** The same luminosity ratio compares outward radiation and inward gravity.

*True by definition.* MSC 85A25 (Radiative transfer in astronomy and astrophysics). arXiv astro-ph.SR, astro-ph.HE. Level 2: later undergraduate.

**Definition.** For a spherical source of mass M, the Eddington luminosity 4πGMc/κ is the radiated power at which light's outward push on gas balances gravity. Here κ is the opacity, the effective area per unit mass that light pushes on, and both push and pull fall as 1/r².

**Problem.** Outside a spherical source, use Newtonian gravity and assume constant luminosity and opacity. The ratio of radiation acceleration to gravity equals the ratio of luminosity to Eddington luminosity.

**How the definition helps.** Radiation acceleration κL/(4πr²c) divided by gravity GM/r² equals L divided by 4πGMc/κ, since the r² cancels (our own). The physical work establishes these two acceleration laws for the gas.

**Wikipedia:** [Eddington luminosity](https://en.wikipedia.org/wiki/Eddington_luminosity). It says: “The limit is obtained by setting the outward radiation pressure equal to the inward gravitational force.”

**Sources:** none listed. No primary source with a working link was found.

### Optical depths add along rays

**Remember:** Transmission multiplies, so optical depth adds.

*True by definition.* MSC 85A25 (Radiative transfer in astronomy and astrophysics). arXiv astro-ph.SR. Level 2: later undergraduate.

**Definition.** Optical depth is minus the natural logarithm of transmission, the fraction of a beam's intensity at one wavelength that survives a region, for positive transmission. The logarithm turns multiplied fractions into added depths (our own).

**Problem.** If successive regions only remove light from this beam, their optical depths add.

**How the definition helps.** When regions only remove light, the beam leaving one region is the input to the next, so transmissions multiply and their logarithms add (our own). With loss proportional to intensity, the optical depth is the integral of the local loss coefficient (our own).

**Wikipedia:** [Optical depth](https://en.wikipedia.org/wiki/Optical_depth). It says: “the transmitted flux decays exponentially with optical depth”

**Sources:** none listed. No primary source with a working link was found.

### Comoving distances stay fixed

**Remember:** Divide out the stretch of space, and comoving galaxies stand still.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 2: later undergraduate.

**Definition.** Comoving distance is proper distance on a constant cosmic time slice divided by the scale factor, the common factor by which expansion stretches every length.

**Problem.** Suppose space looks the same at every point and in every direction at each cosmic time. Two observers following the common expansion stay at constant comoving distance.

**How the definition helps.** When space looks the same everywhere and in every direction, the spatial metric is a fixed metric times the square of the scale factor (our own). So the proper distance between observers following the expansion is the scale factor times a constant, and dividing leaves the constant (our own).

**Wikipedia:** [Comoving and proper distances](https://en.wikipedia.org/wiki/Comoving_and_proper_distances). It says: “Comoving distance factors out the expansion of the universe, giving a distance that does not change in time except due to local factors”

**Sources:** none listed. No primary source with a working link was found.

### Lens Jacobians give signed magnification

**Remember:** The determinant gives the area change and tells whether orientation flips.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 2: later undergraduate.

**Definition.** A thin lens treats deflection as happening in one plane, and its lens map sends each observed image direction to the source direction without deflection. Signed magnification is the local ratio of image to source angular area, negative when orientation reverses, so it is the area factor of the inverse lens map.

**Problem.** Where the derivative of the lens map is invertible, signed magnification equals the reciprocal of its determinant in local angular area coordinates.

**How the definition helps.** The determinant of a derivative is its signed area factor, and the inverse derivative has reciprocal determinant (our own). Relating the absolute value to a flux ratio also needs conservation of surface brightness, the flux per unit solid angle.

**Wikipedia:** [Gravitational lensing formalism](https://en.wikipedia.org/wiki/Gravitational_lensing_formalism). It says: “The amplification is the inverse of the Jacobian”

**Sources:** none listed. No primary source with a working link was found.

### Toomre’s ratio detects disk instability

**Remember:** Pressure and rotation must beat self-gravity: Q at least one.

*Makes the theorem clean to state or prove.* MSC 85A05 (Galactic and stellar dynamics). arXiv astro-ph.GA. Level 3: graduate.

**Definition.** For a thin rotating gas disk, Toomre's ratio Q = cₛκ/(πGΣ) weighs the stabilizing effects of pressure and rotation against self-gravity. Here cₛ is sound speed, κ is the frequency of small radial oscillations about a circular orbit, and Σ is mass per unit area.

**Problem.** Consider small local disturbances that are the same at every angle around the disk. For positive κ, cₛ, and Σ, no radial wavelength grows exponentially exactly when Q ≥ 1.

**How the definition helps.** Waves with radial wave number k have squared frequency κ² − 2πGΣ\|k\| + cₛ²k² (our own). Its minimum over k is κ²(1 − 1/Q²), which is nonnegative exactly when Q ≥ 1 (our own). Deriving the wave equation from gas dynamics is the physical work.

**Wikipedia:** [Toomre's stability criterion](https://en.wikipedia.org/wiki/Toomre%27s_stability_criterion). It says: “The stability criterion can then simply be stated as, Q ≥ 1 for a disk to be stable against collapse.”

**Sources:** none listed. No primary source with a working link was found.

### Interior mass matches exterior mass

**Remember:** Define the interior mass through the same metric coefficient as outside.

*True by definition.* MSC 85A15 (Galactic and stellar structure). arXiv astro-ph.SR, gr-qc. Level 3: graduate.

**Definition.** For a static spherical star with areal radius r, so that spheres have area 4πr², and G = c = 1, define the enclosed mass m(r) by writing the radial metric term as (dr)²/(1 − 2m(r)/r). This is the same form as the exterior Schwarzschild term (dr)²/(1 − 2M/r).

**Problem.** Match the stellar surface at radius R smoothly to the spherical vacuum solution without a surface layer. The mass inferred from the exterior gravitational field equals m(R).

**How the definition helps.** At the surface R, continuity of the metric equates 1/(1 − 2m(R)/R) with 1/(1 − 2M/R), so M = m(R) (our own). Computing the interior geometry and establishing the match still require the field equations.

**Wikipedia:** [Tolman–Oppenheimer–Volkoff equation](https://en.wikipedia.org/wiki/Tolman%E2%80%93Oppenheimer%E2%80%93Volkoff_equation). It says: “continuity of the metric and the definition of m(r) require that”

**Sources:**

- [J. R. Oppenheimer and G. M. Volkoff (1939), On Massive Neutron Cores](https://doi.org/10.1103/PhysRev.55.374)

### Polytropic stars share a scaled profile

**Remember:** Scale the center to one and let the pressure-law index set the shape.

*Makes the theorem clean to state or prove.* MSC 85A15 (Galactic and stellar structure). arXiv astro-ph.SR. Level 3: graduate.

**Definition.** For a Newtonian polytrope P = Kρ⁽¹⁺¹⁄ⁿ⁾ with K, n &gt; 0 and central density d &gt; 0, measure density by θ = (ρ/d)¹⁄ⁿ and radius by ξ = r/a, where a &gt; 0 and a² = (n + 1)K d⁽¹⁄ⁿ⁻¹⁾/(4πG). This length unit removes K and d from the star's equation, leaving only n (our own).

**Problem.** In Newtonian gravity, these stars share one scaled density profile for each index n. For 0 &lt; n &lt; 5, the first zero of θ gives the radius in the chosen units.

**How the definition helps.** In these units, pressure balance and Newtonian gravity give the Lane–Emden equation for θ(ξ), which involves only n (our own). Regularity at the center gives θ(0) = 1 and θ′(0) = 0, so all stars of one index share one solution. The remaining work proves this solution is unique and, for n below five, has a first zero (our own).

**Wikipedia:** [Lane–Emden equation](https://en.wikipedia.org/wiki/Lane%E2%80%93Emden_equation). It says: “The standard boundary conditions are θ(0) = 1 and θ′(0) = 0.”

**Sources:**

- [Jonathan Homer Lane, On the theoretical temperature of the Sun, under the hypothesis of a gaseous mass maintaining its volume by its internal heat, and depending on the laws of gases as known to terrestrial experiment (1870).](https://doi.org/10.2475/ajs.s2-50.148.57)

### Rosseland averaging preserves diffusive flux

**Remember:** Average transparency, not opacity, weighted by the Planck spectrum's temperature slope.

*True by definition.* MSC 85A25 (Radiative transfer in astronomy and astrophysics). arXiv astro-ph.SR, astro-ph.HE. Level 3: graduate.

**Definition.** At temperature T &gt; 0, the Rosseland mean opacity is the reciprocal of the weighted average of 1/κν, weighting each frequency ν by w = ∂Bν(T)/∂T, where Bν is the Planck spectrum. For positive κν and finite integrals, it is ∫w dν divided by ∫(w/κν) dν over positive frequencies.

**Problem.** Suppose photons travel only short distances between interactions and radiation is nearly in thermal equilibrium with nearby matter. In the diffusion approximation, the Rosseland mean gives the same total energy flux as the frequency-dependent law.

**How the definition helps.** In the diffusion approximation, frequency ν carries flux proportional to (w/κν) times the temperature gradient, so the total flux depends only on ∫(w/κν) dν (our own). The Rosseland mean is defined to give that same integral. The underlying transport equation supplies this diffusion law.

**Wikipedia:** [Opacity](https://en.wikipedia.org/wiki/Opacity). It says: “The Rosseland opacity is derived in the diffusion approximation to the radiative transport equation.”

**Sources:** none listed. No primary source with a working link was found.

### Sky power depends on degree

**Remember:** Rotations shuffle each degree's modes, so they share one power.

*Makes the theorem clean to state or prove.* MSC 85A35 (Statistical astronomy), 85A40. arXiv astro-ph.CO. Level 3: graduate.

**Definition.** Expand a square-integrable random sky in orthonormal spherical harmonics, with coefficient aℓₘ for degree ℓ and order m. The angular power spectrum Cℓ = ∑ₘ 𝔼\[\|aℓₘ\|²\]/(2ℓ + 1), summing m from −ℓ through ℓ, is the average power of the 2ℓ + 1 modes of degree ℓ (our own).

**Problem.** For a rotationally invariant random sky with zero mean and finite variance, harmonic coefficients are uncorrelated across distinct modes. Their variance depends only on degree.

**How the definition helps.** Rotations mix modes only within each degree, and by Schur's lemma a rotation-invariant covariance is a scalar on each degree with no terms between degrees (our own). That scalar is Cℓ.

**Paper or page:** [Geometric Methods for Spherical Data, with Applications to Cosmology](https://arxiv.org/abs/2303.15278v1). It says: “there exists a family of orthogonal random coefficients”

**Sources:** none listed. No primary source with a working link was found.

### Conformal time gives constant grid speed

**Remember:** Light crosses equal grid distances in equal conformal ticks.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 3: graduate.

**Definition.** Conformal time divides each tick of cosmic time by the current scale factor, and comoving coordinates divide expansion out of the spatial grid. Clocks and rulers then carry the same factor, so light's grid speed is constant (our own).

**Problem.** In a flat expanding universe that looks the same everywhere and in every direction, radial light crosses the comoving grid at constant speed c in conformal time. So the comoving particle horizon, the greatest distance light could have covered since the Big Bang, is c times the elapsed conformal time when finite.

**How the definition helps.** Light has ds = 0, and the metric a²(−c²dη² + dx²) then gives \|dx/dη\| = c (our own). Integrating gives the horizon distance (our own). The work lies in integrating the expansion history to find the elapsed conformal time (our own).

**Wikipedia:** [Particle horizon](https://en.wikipedia.org/wiki/Particle_horizon). It says: “the particle horizon is equal to the conformal time η that has passed since the Big Bang, times the speed of light c.”

**Sources:** none listed. No primary source with a working link was found.

### Critical density normalizes flatness

**Remember:** Measure density in critical units and flat space has density one.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 3: graduate.

**Definition.** With Hubble rate H and light speed one, the critical density 3H²/(8πG) is the density at which the first Friedmann equation leaves no room for spatial curvature (our own). The density parameter Ω is total energy density, vacuum energy included, divided by critical density.

**Problem.** In a universe with uniform, direction-independent expansion governed by the Friedmann equations, assume H is nonzero. Spatial curvature vanishes exactly when Ω equals one.

**How the definition helps.** Dividing the first Friedmann equation by H² gives Ω = 1 + k/(a²H²), so Ω = 1 exactly when the curvature k is zero (our own). In ordinary density units the value giving flat space changes with the Hubble rate (our own).

**nLab:** [FRW model](https://ncatlab.org/nlab/show/FRW+model). It says: “Ω ≔ Ω<sub>R</sub> + Ω<sub>M</sub> + Ω\_Λ = 1 + k/(a²H²)”

**Sources:**

- [Alexander Friedmann, Über die Krümmung des Raumes (1922).](https://doi.org/10.1007/BF01332580)

### Distance duality gives brightness dimming

**Remember:** Use one distance for flux and another for apparent area.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 3: graduate.

**Definition.** Luminosity distance Dₗ explains observed flux by inverse-square dilution of emitted power. Angular diameter distance Dₐ explains observed angular size: it is the square root of projected source area divided by observed solid angle.

**Problem.** Suppose photons follow light rays of the spacetime metric and their number is conserved. Then observed surface brightness summed over all frequencies equals emitted surface brightness divided by (1 + z)⁴, where 1 + z is received over emitted wavelength.

**How the definition helps.** For a small source patch, the two definitions make observed flux per solid angle equal emitted brightness times (Dₐ/Dₗ)² (our own). Etherington reciprocity with photon conservation gives Dₗ = (1 + z)²Dₐ, hence the factor (1 + z)⁻⁴ (our own).

**Wikipedia:** [Etherington's reciprocity theorem](https://en.wikipedia.org/wiki/Etherington%27s_reciprocity_theorem). It says: “The Etherington distance-duality equation is the relationship between the luminosity distance of standard candles and the angular diameter distance.”

**Sources:**

- [I. M. H. Etherington (1933), On the definition of distance in general relativity](https://doi.org/10.1080/14786443309462220)

### Redshift preserves blackbody spectra

**Remember:** A Planck spectrum keeps its shape when frequency and temperature fall together.

*True by definition.* MSC 85A40 (Astrophysical cosmology), 85A25. arXiv astro-ph.CO. Level 3: graduate.

**Definition.** Describe thermal radiation by the mean number of photons in a state of frequency ν, 1/(exp(hν/(kT)) − 1) at temperature T, with h and k Planck's and Boltzmann's constants. This number depends on ν and T only through ν/T.

**Problem.** Suppose thermal radiation travels freely through a uniformly expanding universe. If expansion divides every photon frequency by 1 + z, the radiation remains thermal with temperature divided by 1 + z.

**How the definition helps.** Free propagation keeps each photon's occupation number while dividing its frequency by 1 + z (our own). So the occupation at ν is the old value at (1 + z)ν, which is thermal with temperature T/(1 + z) (our own). Proving occupation conservation and the common frequency shift is the physical work.

**Wikipedia:** [Cosmic microwave background](https://en.wikipedia.org/wiki/Cosmic_microwave_background). It says: “expansion of the universe would cool blackbody radiation while maintaining a thermal spectrum.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced shear hides a mass sheet

**Remember:** Rescale both parts of the shear ratio and its value stays put.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 3: graduate.

**Definition.** For a gravitational lens, convergence κ measures local focusing and shear γ measures directional stretching of images. Reduced shear γ/(1 − κ), for κ ≠ 1, is the part of the distortion that image shapes reveal (our own).

**Problem.** For one thin lens and sources at a fixed distance, multiply the lens mass distribution by λ &gt; 0 and add a uniform sheet of convergence 1 − λ. This preserves reduced shear, so image shapes alone cannot distinguish the two models.

**How the definition helps.** Scaling the mass by λ multiplies γ by λ, and the uniform sheet adds no shear (our own). The new convergence is λκ + 1 − λ, so 1 − κ also gains the factor λ, which cancels in the ratio (our own). An independent magnification measurement can break the ambiguity.

**Wikipedia:** [Gravitational lensing formalism](https://en.wikipedia.org/wiki/Gravitational_lensing_formalism). It says: “this degeneracy can be broken if an independent measurement of the magnification is available”

**Sources:**

- [E. E. Falco, M. V. Gorenstein and I. I. Shapiro, On model-dependent bounds on H(0) from gravitational images: Application of Q0957 + 561A,B (1985).](https://doi.org/10.1086/184422)
