### Optical depths add along rays

**Remember:** Transmission multiplies, so optical depth adds.

*True by definition.* MSC 85A25 (Radiative transfer in astronomy and astrophysics). arXiv astro-ph.SR. Level 2: later undergraduate.

**Definition.** For starlight at one wavelength, let transmission be the fraction of incident beam intensity that survives a region. For positive transmission, define optical depth as minus its natural logarithm.

**Problem.** If successive regions only remove light from this beam, their optical depths add.

**How the definition helps.** The negative logarithm turns multiplication of consecutive transmission fractions into addition of optical depths (our own). In each region the exiting beam supplies the incident light for the next (our own). Computing the depths from matter requires a physical law for absorption and scattering out of the beam (our own). With loss proportional to intensity, integrating the local loss coefficient gives the optical depth (our own).

**Wikipedia:** [Optical depth](https://en.wikipedia.org/wiki/Optical_depth). It says: “the transmitted flux decays exponentially with optical depth”

**Sources:** none listed. No primary source with a working link was found.

### Polytropic stars share a scaled profile

**Remember:** Scale the center to one and let the pressure-law index set the shape.

*Makes the theorem clean to state or prove.* MSC 85A15 (Galactic and stellar structure). arXiv astro-ph.SR. Level 3: graduate.

**Definition.** Model a spherical star in gravitational equilibrium by a pressure law P = Kρ⁽¹⁺¹⁄ⁿ⁾, with density ρ and constants K, n &gt; 0. Write d for central density and G for Newton’s gravitational constant. Use the dimensionless density variable θ = (ρ/d)¹⁄ⁿ. Measure radius in units of √((n + 1)K d⁽¹⁄ⁿ⁻¹⁾/(4πG)).

**Problem.** In Newtonian gravity, these stars share one scaled density profile for each index n. For 0 &lt; n &lt; 5, the first zero of θ gives the radius in the chosen units.

**How the definition helps.** The chosen units leave only n in the differential equation for θ (our own). Newtonian gravity and pressure balance supply that equation, called the Lane–Emden equation (our own). Regularity at the center gives θ(0) = 1 and θ′(0) = 0. The remaining work proves uniqueness of this central solution and, for n below five, existence of its first zero (our own).

**Wikipedia:** [Lane–Emden equation](https://en.wikipedia.org/wiki/Lane%E2%80%93Emden_equation). It says: “The standard boundary conditions are θ(0) = 1 and θ′(0) = 0.”

**Sources:**

- [Jonathan Homer Lane, On the theoretical temperature of the Sun, under the hypothesis of a gaseous mass maintaining its volume by its internal heat, and depending on the laws of gases as known to terrestrial experiment (1870).](https://doi.org/10.2475/ajs.s2-50.148.57)

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

### Reduced shear hides a mass sheet

**Remember:** Rescale both parts of the shear ratio and its value stays put.

*True by definition.* MSC 85A40 (Astrophysical cosmology). arXiv astro-ph.CO. Level 3: graduate.

**Definition.** A gravitational lens bends light and distorts images. Convergence κ measures local focusing, and shear γ measures directional stretching. Define reduced shear as γ/(1 − κ) wherever κ differs from one.

**Problem.** Take one thin lens and sources at a fixed distance. Multiply the lens mass distribution by a positive factor λ and add a uniform sheet of convergence 1 − λ. This preserves reduced shear, so image shapes alone cannot distinguish the models.

**How the definition helps.** Scaling the lens multiplies its shear by λ, while the uniform sheet adds no shear (our own). The new convergence is λκ + 1 − λ, so the denominator also gains a factor of λ (our own). The factors cancel, preserving reduced shear even though raw shear generally changes (our own). The lens equation supplies the link from reduced shear to observed image shapes (our own). An independent magnification measurement can break the ambiguity.

**Wikipedia:** [Gravitational lensing formalism](https://en.wikipedia.org/wiki/Gravitational_lensing_formalism). It says: “this degeneracy can be broken if an independent measurement of the magnification is available”

**Sources:**

- [E. E. Falco, M. V. Gorenstein and I. I. Shapiro, On model-dependent bounds on H(0) from gravitational images: Application of Q0957 + 561A,B (1985).](https://doi.org/10.1086/184422)
