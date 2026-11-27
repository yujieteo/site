### Geopotential height absorbs varying gravity

**Remember:** Measure altitude by lifting work so gravity drops out of the conversion.

*True by definition.* MSC 86A10 (Meteorology and atmospheric physics). arXiv physics.geo-ph. Level 2: later undergraduate.

**Definition.** Divide the work per unit mass against gravity from a reference level by a fixed standard gravity. This gives geopotential height instead of geometric height.

**Problem.** Suppose the vertical pressure force balances gravity at every height, a condition called hydrostatic balance. The derivative of pressure with respect to geopotential height then equals minus density times standard gravity, even when local gravity varies.

**How the definition helps.** Both the pressure gradient and the new height increment contain the same local gravity, so it cancels (our own). The work lies in the hydrostatic equation, which follows from vertical force balance (our own). Recovering geometric height still requires the local gravity field (our own).

**Wikipedia:** [Geopotential height](https://en.wikipedia.org/wiki/Geopotential_height). It says: “the simplification obtained by assuming a constant value of gravitational acceleration is the sole reason for defining the geopotential altitude.”

**Sources:** none listed. No primary source with a working link was found.

### Potential temperature survives adiabatic motion

**Remember:** Compare air parcels after bringing them to the same pressure without heating.

*True by definition.* MSC 86A10 (Meteorology and atmospheric physics). arXiv physics.geo-ph. Level 2: later undergraduate.

**Definition.** Use the temperature an air parcel would reach at a fixed reference pressure after reversible compression or expansion without heat exchange. This is potential temperature, rather than the parcel’s actual temperature at its current pressure.

**Problem.** A dry ideal-gas parcel keeps its potential temperature during reversible motion with no heat exchange.

**How the definition helps.** Moving along a reversible path without heat exchange does not change the parcel’s state at the reference pressure (our own). The work is in thermodynamics, which gives constant entropy on that path and a unique temperature at fixed pressure (our own). Actual temperature changes when the parcel expands or compresses (our own).

**Wikipedia:** [Potential temperature](https://en.wikipedia.org/wiki/Potential_temperature). It says: “Potential temperature is conserved for all dry adiabatic processes”

**Sources:** none listed. No primary source with a working link was found.

### The geoid follows local level

**Remember:** A level surface is one on which gravity can do no work.

*True by definition.* MSC 86A30 (Geodesy, mapping problems). arXiv physics.geo-ph. Level 2: later undergraduate.

**Definition.** The geoid is the level surface of Earth’s effective gravitational potential chosen to fit mean sea level. The effective potential includes the effect of Earth’s rotation. A reference ellipsoid instead approximates Earth’s shape geometrically.

**Problem.** In the reference gravity field, a plumb line meets the geoid at right angles wherever gravity is nonzero.

**How the definition helps.** Gravity is normal to a surface of constant potential because the potential has zero derivative in every tangent direction (our own). The work lies in modeling the gravity field and finding the level that best matches mean sea level (our own). An ellipsoid’s normal need not point along real gravity (our own).

**Wikipedia:** [Geoid](https://en.wikipedia.org/wiki/Geoid). It says: “the geoid is, by definition, a surface upon which the force of gravity is perpendicular everywhere, apart from temporary tidal fluctuations.”

**Sources:** none listed. No primary source with a working link was found.

### Shallow-water potential vorticity follows parcels

**Remember:** Divide the total spin by layer depth to cancel stretching.

*True by definition.* MSC 86A05 (Hydrology, hydrography, oceanography). arXiv physics.geo-ph. Level 3: graduate.

**Definition.** Absolute vorticity adds the vertical curl of the horizontal water velocity to the local contribution from planetary rotation. Shallow-water potential vorticity divides that sum by the water depth.

**Problem.** In a smooth rotating shallow-water flow of positive depth, potential vorticity stays constant along each moving parcel. Assume no viscosity, external forcing or water sources.

**How the definition helps.** Dividing absolute vorticity by depth cancels the common effect of horizontal spreading (our own). The momentum equation makes the parcel’s vorticity change at minus its vorticity times the horizontal divergence (our own). Water conservation gives the same equation with depth in place of vorticity (our own). The quotient rule then gives zero, even where vorticity vanishes (our own).

**Wikipedia:** [Potential vorticity](https://en.wikipedia.org/wiki/Potential_vorticity). It says: “The conserved quantity, in parentheses in equation (3), was later named the shallow water potential vorticity.”

**Sources:**

- [Carl-Gustaf Rossby, Relation between variations in the intensity of the zonal circulation of the atmosphere and the displacements of the semi-permanent centers of action (1939).](https://doi.org/10.1357/002224039806649023)

### Fixed rotation prevents geostrophic divergence

**Remember:** With fixed rotation, the divergence of a rotated gradient cancels.

*Rules out counterexamples.* MSC 86A10 (Meteorology and atmospheric physics). arXiv physics.geo-ph. Level 3: graduate.

**Definition.** Use a flat local model with a fixed nonzero Coriolis parameter, which measures the local effect of planetary rotation. Unlike a model with latitude-dependent rotation, it uses the same parameter everywhere.

**Problem.** Assume the geopotential, the effective gravitational potential per unit mass, has continuous second derivatives on a constant-pressure surface. The horizontal wind that balances rotation against the pressure force then has zero horizontal divergence.

**How the definition helps.** Constant rotation makes the geostrophic wind a fixed multiple of a right-angle rotation of the geopotential gradient (our own). Equality of mixed partial derivatives then gives zero divergence (our own). With rotation strength varying northward, an eastward geopotential gradient instead gives a northward wind whose speed varies northward (our own). The physical work lies in deciding when a constant rotation parameter is accurate enough (our own).

**Wikipedia:** [F-plane](https://en.wikipedia.org/wiki/F-plane). It says: “the Coriolis parameter f, which measures the local effect of the planet's rotation, is a constant”

**Sources:** none listed. No primary source with a working link was found.

### River order gaps survive pruning

**Remember:** Pruning lowers both surviving orders by one and leaves their gap alone.

*True by definition.* MSC 86A05 (Hydrology, hydrography, oceanography). arXiv physics.geo-ph. Level 4: research.

**Definition.** In a binary river tree, headwaters have order one. At a junction take the higher incoming order, adding one only when both orders agree. Among trees of fixed maximum order, count order-i side branches joining order-j branches, with i &lt; j. Divide their expected count by the expected number of order-j branches.

**Problem.** Assume this ratio for each order pair agrees across all admissible maximum orders, a property called coordination. Pruning removes headwaters and joins segments left with only one input. The ratios are invariant under pruning exactly when they depend only on the order difference j − i.

**How the definition helps.** The order gap stays the same when pruning lowers each surviving order by one (our own). Thus the expected counts are invariant exactly when they are constant along each diagonal of the table of counts (our own). The work is to prove the order shift and use coordination to identify the table entries across tree sizes (our own).

**Paper or page:** [Critical Tokunaga model for river networks](https://arxiv.org/abs/2106.02991v1). It says: “the Toeplitz property Tᵢ,ᵢ₊ₖ = Tₖ and Horton prune-invariance”

**Sources:**

- [Yevgeniy Kovchegov, Ilya Zaliapin and Efi Foufoula-Georgiou, Critical Tokunaga model for river networks (2021).](https://arxiv.org/abs/2106.02991v1)
- [Yevgeniy Kovchegov, Ilya Zaliapin and Efi Foufoula-Georgiou, Critical Tokunaga model for river networks (2022).](https://doi.org/10.1103/PhysRevE.105.014301)

### Convexity removes hidden mass alternatives

**Remember:** Fix density and forbid hollow domains before asking gravity to identify a shape.

*Rules out counterexamples.* MSC 86A22 (Inverse problems in geophysics). arXiv physics.geo-ph. Level 4: research.

**Definition.** A density contrast is the difference between a region’s density and its background density. Fix a bounded region whose closure has connected exterior and a known integrable contrast function strictly positive throughout the region. The unknown mass occupies a convex domain with piecewise smooth boundary inside that region. Only that domain contributes the specified contrast.

**Problem.** Enclose the known region in a convex domain with regular analytic boundary, locally described by convergent power series. Exact measurements of gravitational force on a nonempty surface patch of that boundary uniquely determine the unknown domain.

**How the definition helps.** Convexity rules out hollow shells, so a basic exterior-gravity ambiguity disappears (our own). A uniform ball and a concentric hollow spherical shell of equal mass have identical exterior gravity by Newton’s shell theorem (our own). The paper’s Theorem 0.1 does the harder work of proving uniqueness for the whole convex class.

**Paper or page:** [Learning on the correct class for domain inverse problems of gravimetry](https://arxiv.org/abs/2403.07393v1). It says: “D is convex, f ∈ L₁(Ω), and 0 &lt; f on Ω.”

**Sources:**

- [Yihang Chen and Wenbin Li, Learning on the correct class for domain inverse problems of gravimetry (2024).](https://arxiv.org/abs/2403.07393v1)
