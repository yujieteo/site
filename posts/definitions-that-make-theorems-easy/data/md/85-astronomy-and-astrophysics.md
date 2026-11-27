### Distance modulus adds to magnitude

**Remember:** The logarithmic distance correction adds to a source’s absolute magnitude.

*True by definition.* MSC 85A04 (General questions in astronomy and astrophysics). arXiv astro-ph.SR, astro-ph.GA. Level 1: early undergraduate.

**Definition.** Flux is received power per unit area. Magnitude measures brightness on a scale where multiplying flux by 100 subtracts five magnitudes. Absolute magnitude is the magnitude an isotropic source would have at ten parsecs, a standard astronomical distance. Define the distance modulus as five times the base-ten logarithm of luminosity distance divided by ten parsecs.

**Problem.** Sum the light over all wavelengths and assume transparent propagation. Apparent magnitude equals absolute magnitude plus the distance modulus.

**How the definition helps.** The logarithm makes inverse-square dilution an additive correction. In our own derivation, luminosity distance is the distance that gives the measured flux from the source power by inverse-square dilution. Taking the magnitude difference then gives exactly the distance modulus.

**Wikipedia:** [Distance modulus](https://en.wikipedia.org/wiki/Distance_modulus). It says: “the observed brightness of a light source is related to its distance by the inverse square law”

**Sources:** none listed. No primary source with a working link was found.

### Redshift factors multiply

**Remember:** Consecutive wavelength ratios multiply along a light path.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 1: early undergraduate.

**Definition.** Define the redshift factor 1 + z as the received wavelength divided by the emitted wavelength. Use this ratio instead of the fractional change z.

**Problem.** The total redshift factor equals the product of the factors measured on consecutive parts of the same light path. Use the same observer at each shared endpoint.

**How the definition helps.** Using ratios makes consecutive shifts multiply because the shared wavelength cancels. In our own proof, the middle observer measures the same light signal for both ratios. Predicting each ratio from motion or cosmic expansion requires a separate physical calculation.

**Wikipedia:** [Redshift](https://en.wikipedia.org/wiki/Redshift). It says: “corresponding to the fractional change in wavelength (positive for redshifts, negative for blueshifts), and by the wavelength ratio 1 + z”

**Sources:** none listed. No primary source with a working link was found.

### Flat spectra have zero AB color

**Remember:** A flat flux density has the same AB magnitude in every filter.

*True by definition.* MSC 85A04 (General questions in astronomy and astrophysics). arXiv astro-ph.SR, astro-ph.GA. Level 2: later undergraduate.

**Definition.** Flux density per unit frequency measures received power per unit area and frequency interval. The AB magnitude scale uses a logarithm of the filter-averaged flux density and assigns zero magnitude to the same reference flux density in every filter. A color is the difference between magnitudes in two filters.

**Problem.** A source with constant flux density per unit frequency has zero AB color between any two properly calibrated filters.

**How the definition helps.** The common reference makes a constant flux density yield the same magnitude in every filter. In our own calculation, every normalized filter average of that constant equals the constant itself. A reference star with a varying spectrum would instead establish different flux references across filters. Applying the AB definition to observations requires calibrating each filter.

**Wikipedia:** [AB magnitude](https://en.wikipedia.org/wiki/AB_magnitude). It says: “The bandpass AB magnitude is defined so that the zero point corresponds to a bandpass-averaged spectral flux density”

**Sources:**

- [J. B. Oke and J. E. Gunn (1983), Secondary standard stars for absolute spectrophotometry](https://doi.org/10.1086/160817)

### Orbit constants give stellar equilibria

**Remember:** A function of orbit constants stays constant as stars move.

*True by definition.* MSC 85A05 (Galactic and stellar dynamics). arXiv astro-ph.GA. Level 2: later undergraduate.

**Definition.** Write the distribution of stars in position and velocity as a function of orbit constants such as energy. Here an orbit constant has the same value at every point along a star’s orbit. This replaces specifying the distribution independently at each position and velocity.

**Problem.** In a time-independent gravitational field, every smooth function of time-independent orbit constants solves the steady collisionless Boltzmann equation. This equation requires the distribution to stay constant along each star’s orbit when encounters are negligible.

**How the definition helps.** Writing the distribution in terms of orbit constants makes its derivative along a star’s path vanish. In our own derivation, this follows by the chain rule. The work lies in finding the orbit constants. If the stars generate the field, their density must also reproduce that field.

**Wikipedia:** [Jeans's theorem](https://en.wikipedia.org/wiki/Jeans%27s_theorem). It says: “any function of the integrals is a steady-state solution”

**Sources:** none listed. No primary source with a working link was found.

### Squared buoyancy frequency flags instability

**Remember:** Positive squared buoyancy frequency restores a displaced parcel.

*True by definition.* MSC 85A15 (Galactic and stellar structure). arXiv astro-ph.SR. Level 2: later undergraduate.

**Definition.** Displace a small parcel of stellar gas vertically without exchanging heat, and compare its buoyancy acceleration with its displacement. At equilibrium define N² as minus the derivative of this acceleration with respect to displacement. This signed quantity is the squared buoyancy frequency.

**Problem.** With constant local coefficients, the linearized displacement oscillates if N² is positive. It has an exponentially growing mode if N² is negative.

**How the definition helps.** Keeping the sign of N² gives both stability tests from the same linear equation. In our own argument, a displacement x satisfies x″ = −N²x. The physical calculation compares the parcel’s density after displacement with the surrounding density.

**Wikipedia:** [Brunt–Väisälä frequency](https://en.wikipedia.org/wiki/Brunt%E2%80%93V%C3%A4is%C3%A4l%C3%A4_frequency). It says: “If a gas parcel is pushed up and N² &gt; 0, the air parcel will move up and down”

**Sources:** none listed. No primary source with a working link was found.

### Eddington ratios compare accelerations

**Remember:** The same luminosity ratio compares outward radiation and inward gravity.

*True by definition.* MSC 85A25 (Radiative transfer in astronomy and astrophysics). arXiv astro-ph.SR, astro-ph.HE. Level 2: later undergraduate.

**Definition.** Luminosity L is the power a source radiates. For spherical emission, define the Eddington luminosity as 4πGMc/κ, with mass M, gravitational constant G, and light speed c. The opacity κ measures the effective area per unit mass for momentum transfer from light.

**Problem.** Outside a spherical source, use Newtonian gravity and assume constant luminosity and opacity. The ratio of radiation acceleration to gravity equals the ratio of luminosity to Eddington luminosity.

**How the definition helps.** The Eddington luminosity collects all the constants in the acceleration ratio into one reference power. In our own calculation, outward acceleration is κL/(4πr²c) at radius r, while inward acceleration has magnitude GM/r². Their common radius factor cancels. The physical work establishes these acceleration laws for the gas.

**Wikipedia:** [Eddington luminosity](https://en.wikipedia.org/wiki/Eddington_luminosity). It says: “The limit is obtained by setting the outward radiation pressure equal to the inward gravitational force.”

**Sources:** none listed. No primary source with a working link was found.

### Optical depths add along rays

**Remember:** Transmission multiplies, so optical depth adds.

*True by definition.* MSC 85A25 (Radiative transfer in astronomy and astrophysics). arXiv astro-ph.SR. Level 2: later undergraduate.

**Definition.** For starlight at one wavelength, let transmission be the fraction of incident beam intensity that survives a region. For positive transmission, define optical depth as minus its natural logarithm.

**Problem.** If successive regions only remove light from this beam, their optical depths add.

**How the definition helps.** The negative logarithm turns multiplication of consecutive transmission fractions into addition of optical depths (our own). In each region the exiting beam supplies the incident light for the next (our own). Computing the depths from matter requires a physical law for absorption and scattering out of the beam (our own). With loss proportional to intensity, integrating the local loss coefficient gives the optical depth (our own).

**Wikipedia:** [Optical depth](https://en.wikipedia.org/wiki/Optical_depth). It says: “the transmitted flux decays exponentially with optical depth”

**Sources:** none listed. No primary source with a working link was found.

### Comoving distances stay fixed

**Remember:** Divide out expansion to keep galaxies that move with it at fixed distances.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 2: later undergraduate.

**Definition.** Define the comoving distance as the proper distance on a constant cosmic time slice divided by the scale factor. The scale factor measures the common expansion of space. Proper distance instead measures physical lengths on the slice.

**Problem.** Suppose space looks the same at every point and in every direction at each cosmic time. Two observers following the common expansion stay at constant comoving distance.

**How the definition helps.** Dividing by the scale factor cancels the common change in all physical spatial lengths. In our own derivation, the spatial metric equals a fixed metric times the square of the scale factor. The symmetry assumptions justify that form.

**Wikipedia:** [Comoving and proper distances](https://en.wikipedia.org/wiki/Comoving_and_proper_distances). It says: “Comoving distance factors out the expansion of the universe, giving a distance that does not change in time except due to local factors”

**Sources:** none listed. No primary source with a working link was found.

### Lens Jacobians give signed magnification

**Remember:** The determinant gives the area change and tells whether orientation flips.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 2: later undergraduate.

**Definition.** A thin lens treats light deflection as occurring in one plane. Its lens map sends each observed image direction to the source direction without deflection. Define signed magnification as the local ratio of image to source angular area, with a minus sign when orientation reverses.

**Problem.** Where the derivative of the lens map is invertible, signed magnification equals the reciprocal of its determinant in local angular area coordinates.

**How the definition helps.** Using oriented areas makes magnification the area factor for the inverse lens map. In our own calculation, the inverse derivative has reciprocal determinant. Relating its absolute value to a flux ratio also requires conservation of surface brightness, the flux per unit solid angle.

**Wikipedia:** [Gravitational lensing formalism](https://en.wikipedia.org/wiki/Gravitational_lensing_formalism). It says: “The amplification is the inverse of the Jacobian”

**Sources:** none listed. No primary source with a working link was found.

### Toomre’s ratio detects disk instability

**Remember:** Pressure and rotation prevent local ring collapse when Toomre’s ratio reaches one.

*Makes the theorem clean to state or prove.* MSC 85A05 (Galactic and stellar dynamics). arXiv astro-ph.GA. Level 3: graduate.

**Definition.** Consider a rotating gas disk of negligible thickness. Define Toomre’s ratio Q as cₛκ/(πGΣ), where cₛ is sound speed and G is the gravitational constant. Here κ is the frequency of small radial oscillations about a circular orbit, and Σ is mass per unit area.

**Problem.** Consider small local disturbances that are the same at every angle around the disk. For positive κ, cₛ, and Σ, no radial wavelength grows exponentially exactly when Q ≥ 1.

**How the definition helps.** The ratio Q collects pressure, rotation, and gravity into one test covering every radial wavelength. In our own calculation, squared wave frequency is κ² − 2πGΣ\|k\| + cₛ²k², where k is radial wave number. Its minimum is κ²(1 − 1/Q²). Deriving the wave equation from the gas dynamics supplies the physical work.

**Wikipedia:** [Toomre's stability criterion](https://en.wikipedia.org/wiki/Toomre%27s_stability_criterion). It says: “The stability criterion can then simply be stated as, Q ≥ 1 for a disk to be stable against collapse.”

**Sources:** none listed. No primary source with a working link was found.

### Interior mass matches exterior mass

**Remember:** Define the interior mass through the same metric coefficient as outside.

*True by definition.* MSC 85A15 (Galactic and stellar structure). arXiv astro-ph.SR, gr-qc. Level 3: graduate.

**Definition.** For a static spherical star, define radius r by sphere area 4πr². Use units where light speed and the gravitational constant equal one. Define enclosed mass m(r) through the radial squared length element (dr)²/(1 − 2m(r)/r).

**Problem.** Match the stellar surface at radius R smoothly to the spherical vacuum solution without a surface layer. The mass inferred from the exterior gravitational field equals m(R).

**How the definition helps.** Using the same radius and metric coefficient on both sides makes the mass comparison immediate. In our own calculation, the exterior radial coefficient is 1/(1 − 2M/R) at the surface. Continuity equates it to the interior coefficient and gives M = m(R). Computing the interior geometry and establishing the match still require the gravitational field equations.

**Wikipedia:** [Tolman–Oppenheimer–Volkoff equation](https://en.wikipedia.org/wiki/Tolman%E2%80%93Oppenheimer%E2%80%93Volkoff_equation). It says: “continuity of the metric and the definition of m(r) require that”

**Sources:**

- [J. R. Oppenheimer and G. M. Volkoff (1939), On Massive Neutron Cores](https://doi.org/10.1103/PhysRev.55.374)

### Polytropic stars share a scaled profile

**Remember:** Scale the center to one and let the pressure-law index set the shape.

*Makes the theorem clean to state or prove.* MSC 85A15 (Galactic and stellar structure). arXiv astro-ph.SR. Level 3: graduate.

**Definition.** Model a spherical star in gravitational equilibrium by a pressure law P = Kρ⁽¹⁺¹⁄ⁿ⁾, with density ρ and constants K, n &gt; 0. Write d for central density and G for Newton’s gravitational constant. Use the dimensionless density variable θ = (ρ/d)¹⁄ⁿ. Measure radius in units of √((n + 1)K d⁽¹⁄ⁿ⁻¹⁾/(4πG)).

**Problem.** In Newtonian gravity, these stars share one scaled density profile for each index n. For 0 &lt; n &lt; 5, the first zero of θ gives the radius in the chosen units.

**How the definition helps.** The chosen units leave only n in the differential equation for θ (our own). Newtonian gravity and pressure balance supply that equation, called the Lane–Emden equation (our own). Regularity at the center gives θ(0) = 1 and θ′(0) = 0. The remaining work proves uniqueness of this central solution and, for n below five, existence of its first zero (our own).

**Wikipedia:** [Lane–Emden equation](https://en.wikipedia.org/wiki/Lane%E2%80%93Emden_equation). It says: “The standard boundary conditions are θ(0) = 1 and θ′(0) = 0.”

**Sources:**

- [Jonathan Homer Lane, On the theoretical temperature of the Sun, under the hypothesis of a gaseous mass maintaining its volume by its internal heat, and depending on the laws of gases as known to terrestrial experiment (1870).](https://doi.org/10.2475/ajs.s2-50.148.57)

### Rosseland averaging preserves diffusive flux

**Remember:** Transparent frequency ranges carry more of the diffusive flux.

*True by definition.* MSC 85A25 (Radiative transfer in astronomy and astrophysics). arXiv astro-ph.SR, astro-ph.HE. Level 3: graduate.

**Definition.** Opacity measures how strongly matter blocks radiation per unit mass. At each frequency, weight reciprocal opacity by the temperature derivative of the thermal radiation spectrum. Divide the weighted integral by the integral of the weights, then take its reciprocal. This defines the Rosseland mean opacity.

**Problem.** Suppose photons travel only short distances between interactions and radiation is nearly in thermal equilibrium with nearby matter. In the diffusion approximation, the Rosseland mean gives the same total energy flux as the frequency-dependent law.

**How the definition helps.** Averaging reciprocal opacity preserves exactly the factor that multiplies the temperature gradient in the total flux. In our own calculation, each frequency contributes in proportion to its temperature weight divided by its opacity. The underlying transport equation supplies this diffusion law.

**Wikipedia:** [Opacity](https://en.wikipedia.org/wiki/Opacity). It says: “The Rosseland opacity is derived in the diffusion approximation to the radiative transport equation.”

**Sources:** none listed. No primary source with a working link was found.

### Sky power depends on degree

**Remember:** Rotation gives all modes of the same degree the same power.

*Makes the theorem clean to state or prove.* MSC 85A35 (Statistical astronomy), 85A40. arXiv astro-ph.CO. Level 3: graduate.

**Definition.** Represent a random map of the sky by spherical harmonics, the angular modes on a sphere. Each mode has a degree and an index within that degree. The angular power spectrum assigns each degree the mean squared magnitude of a coefficient at that degree for a sky with rotation-invariant statistics.

**Problem.** For a rotationally invariant random sky with zero mean and finite variance, harmonic coefficients are uncorrelated across distinct modes. Their variance depends only on degree.

**How the definition helps.** The harmonic representation reduces the whole covariance to one number per degree. In our own outline, rotations mix modes within each degree. A rotation-invariant covariance acts as a scalar on each degree and has no terms connecting different degrees. This step uses Schur’s lemma for the rotation group.

**Paper or page:** [Geometric Methods for Spherical Data, with Applications to Cosmology](https://arxiv.org/abs/2303.15278v1). It says: “there exists a family of orthogonal random coefficients”

**Sources:** none listed. No primary source with a working link was found.

### Conformal time gives constant grid speed

**Remember:** Divide out expansion so light crosses equal grid distances in equal time increments.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 3: graduate.

**Definition.** Divide each increment of ordinary cosmic time by the expansion scale factor to get an increment of conformal time. Measure radial distance in comoving coordinates, which keep the expansion out of the spatial grid.

**Problem.** Consider an expanding universe that looks the same at every location and in every direction, with flat spatial geometry. In conformal time, radial light crosses the comoving grid at constant speed c. The comoving particle horizon, the greatest distance light could have covered since the Big Bang, equals c times the elapsed conformal time when finite.

**How the definition helps.** Conformal time absorbs the scale factor that changes light’s grid speed in ordinary cosmic time (our own). In conformal time the radial light equation gives a constant speed, so integration gives the horizon distance (our own). The work lies in obtaining the light equation from spacetime geometry and integrating the expansion history to find elapsed conformal time (our own).

**Wikipedia:** [Particle horizon](https://en.wikipedia.org/wiki/Particle_horizon). It says: “the particle horizon is equal to the conformal time η that has passed since the Big Bang, times the speed of light c.”

**Sources:** none listed. No primary source with a working link was found.

### Critical density normalizes flatness

**Remember:** Measure density in critical units and flat space has density one.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 3: graduate.

**Definition.** The Hubble rate H measures fractional expansion per unit time. In units where light speed equals one, define critical density as 3H²/(8πG), where G is Newton’s gravitational constant. Divide total energy density, including vacuum energy, by critical density to obtain the density parameter Ω.

**Problem.** In a universe with uniform, direction-independent expansion governed by the Friedmann equations, assume H is nonzero. Spatial curvature vanishes exactly when Ω equals one.

**How the definition helps.** Measuring density in critical units makes Ω − 1 proportional to spatial curvature (our own). The first Friedmann equation supplies this relation from Einstein’s equations (our own). In ordinary density units the value giving flat space changes with the Hubble rate (our own).

**nLab:** [FRW model](https://ncatlab.org/nlab/show/FRW+model). It says: “Ω ≔ Ω<sub>R</sub> + Ω<sub>M</sub> + Ω\_Λ = 1 + k/(a²H²)”

**Sources:**

- [Alexander Friedmann, Über die Krümmung des Raumes (1922).](https://doi.org/10.1007/BF01332580)

### Distance duality gives brightness dimming

**Remember:** Use one distance for flux and another for apparent area.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 3: graduate.

**Definition.** Luminosity distance converts emitted power to observed flux, the power received per unit area, by inverse-square dilution. For angular diameter distance, divide projected source area by observed solid angle and take the square root.

**Problem.** Suppose photons follow light rays of the spacetime metric and their number is conserved. Observed surface brightness summed over all frequencies equals emitted surface brightness divided by (1 + z)⁴. Here 1 + z is received wavelength divided by emitted wavelength.

**How the definition helps.** Using separate distances for flux and apparent area turns dimming into a squared distance ratio. In our own derivation, dividing received flux by solid angle gives the squared ratio of angular diameter distance to luminosity distance. Etherington’s reciprocity theorem and photon conservation give that ratio as 1/(1 + z)².

**Wikipedia:** [Etherington's reciprocity theorem](https://en.wikipedia.org/wiki/Etherington%27s_reciprocity_theorem). It says: “The Etherington distance-duality equation is the relationship between the luminosity distance of standard candles and the angular diameter distance.”

**Sources:**

- [I. M. H. Etherington (1933), On the definition of distance in general relativity](https://doi.org/10.1080/14786443309462220)

### Redshift preserves blackbody spectra

**Remember:** A Planck spectrum keeps its shape when frequency and temperature fall together.

*True by definition.* MSC 85A40 (Astrophysical cosmology), 85A25. arXiv astro-ph.CO. Level 3: graduate.

**Definition.** Describe thermal radiation by the mean number of photons in a state of frequency ν. At absolute temperature T this number is 1/(exp(hν/(kT)) − 1), where h and k are Planck’s and Boltzmann’s constants.

**Problem.** Suppose thermal radiation travels freely through a uniformly expanding universe. If expansion divides every photon frequency by 1 + z, the radiation remains thermal with temperature divided by 1 + z.

**How the definition helps.** Photon occupation depends only on frequency divided by temperature, so the common frequency shift rescales temperature directly. In our own derivation, free propagation preserves the occupation number along a ray. Substituting the emitted frequency into the original distribution gives the cooler distribution. Proving occupation conservation and the common frequency shift supplies the physical work.

**Wikipedia:** [Cosmic microwave background](https://en.wikipedia.org/wiki/Cosmic_microwave_background). It says: “expansion of the universe would cool blackbody radiation while maintaining a thermal spectrum.”

**Sources:** none listed. No primary source with a working link was found.

### Reduced shear hides a mass sheet

**Remember:** Rescale both parts of the shear ratio and its value stays put.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 3: graduate.

**Definition.** A gravitational lens bends light and distorts images. Convergence κ measures local focusing, and shear γ measures directional stretching. Define reduced shear as γ/(1 − κ) wherever κ differs from one.

**Problem.** Take one thin lens and sources at a fixed distance. Multiply the lens mass distribution by a positive factor λ and add a uniform sheet of convergence 1 − λ. This preserves reduced shear, so image shapes alone cannot distinguish the models.

**How the definition helps.** Scaling the lens multiplies its shear by λ, while the uniform sheet adds no shear (our own). The new convergence is λκ + 1 − λ, so the denominator also gains a factor of λ (our own). The factors cancel, preserving reduced shear even though raw shear generally changes (our own). The lens equation supplies the link from reduced shear to observed image shapes (our own). An independent magnification measurement can break the ambiguity.

**Wikipedia:** [Gravitational lensing formalism](https://en.wikipedia.org/wiki/Gravitational_lensing_formalism). It says: “this degeneracy can be broken if an independent measurement of the magnification is available”

**Sources:**

- [E. E. Falco, M. V. Gorenstein and I. I. Shapiro, On model-dependent bounds on H(0) from gravitational images: Application of Q0957 + 561A,B (1985).](https://doi.org/10.1086/184422)
