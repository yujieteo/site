### Buoyancy sign predicts oscillation

**Remember:** Positive N² means oscillation, while negative N² means exponential growth is possible.

*True by definition.* MSC 86A10 (Meteorology and atmospheric physics), 86A05. arXiv physics.ao-ph. Level 2: later undergraduate.

**Definition.** Let z measure height upward in a resting fluid with density ρ(z). Assume a displaced fluid parcel keeps its density, and use a constant positive reference density ρ₀ for inertia. Define the signed coefficient N² = −gρ′(z)/ρ₀, where g is gravitational acceleration.

**Problem.** For small vertical parcel displacements in this model, N² &gt; 0 gives oscillations. If N² &lt; 0, the linear equation has an exponentially growing solution.

**How the definition helps.** The signed coefficient puts stable and unstable displacements into one equation (our own). A small vertical displacement x satisfies x″ = −N²x after linearization at its starting height (our own). Deriving this equation requires comparing the parcel’s density with its new surroundings (our own).

**Wikipedia:** [Brunt–Väisälä frequency](https://en.wikipedia.org/wiki/Brunt%E2%80%93V%C3%A4is%C3%A4l%C3%A4_frequency). It says: “the displacement z′ has oscillating solutions (and N gives our angular frequency).”

**Sources:** none listed. No primary source with a working link was found.

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

### Authalic latitude preserves ellipsoid area

**Remember:** Match the area of each latitude band before drawing the map.

*True by definition.* MSC 86A30 (Geodesy, mapping problems). arXiv physics.geo-ph. Level 2: later undergraduate.

**Definition.** The authalic latitude of a point on an ellipsoid of revolution is a latitude on the sphere of the same total area. It is the latitude, in the same hemisphere, at which the band from the equator has the same area as on the ellipsoid. Longitude stays the same.

**Problem.** The authalic latitude map preserves area, so composing it with a spherical equal-area projection gives an equal-area ellipsoid map.

**How the definition helps.** Matching areas from the equator gives equal areas for latitude bands by subtraction (our own). Rotational symmetry splits each band into longitude sectors in proportion to their angular widths (our own). Those sectors determine area, so the whole map preserves it (our own). Computing the latitude requires integrating the ellipsoid’s area element and inverting the resulting monotone function (our own).

**Wikipedia:** [Latitude](https://en.wikipedia.org/wiki/Latitude). It says: “gives an equal-area projection to a sphere.”

**Sources:**

- [J. P. Snyder, Map projections: A working manual (1987)](https://doi.org/10.3133/pp1395)

### Chord radius preserves mapped area

**Remember:** Use chord length as the map radius to keep areas unchanged.

*True by definition.* MSC 86A30 (Geodesy, mapping problems). arXiv physics.geo-ph. Level 2: later undergraduate.

**Definition.** The spherical Lambert azimuthal equal-area map keeps the bearing from its center. It sets the map radius to the straight chord length from the center to the point. An equidistant map instead uses the distance along the surface.

**Problem.** The spherical Lambert azimuthal map preserves area away from the point opposite its center.

**How the definition helps.** Each disk has the same area as its spherical cap (our own). For sphere radius R and angular radius θ, the cap area equals π times the squared chord length, namely 2πR²(1 − cos θ) (our own). Bearings preserve sector fractions (our own). Subtracting nested sectors gives equal areas for polar rectangles, which determine area (our own).

**Wikipedia:** [Lambert azimuthal equal-area projection](https://en.wikipedia.org/wiki/Lambert_azimuthal_equal-area_projection). It says: “It accurately represents area in all regions of the sphere, but it does not accurately represent angles.”

**Sources:**

- [J. P. Snyder, Map projections: A working manual (1987)](https://doi.org/10.3133/pp1395)

### Mercator straightens compass courses

**Remember:** Mercator stretches latitude until a steady compass bearing has a steady slope.

*True by definition.* MSC 86A30 (Geodesy, mapping problems). arXiv physics.geo-ph. Level 2: later undergraduate.

**Definition.** The spherical Mercator map uses longitude as its horizontal coordinate. Its vertical coordinate is the integral of the secant of latitude from the equator. A simple latitude-longitude grid instead uses latitude itself as the height.

**Problem.** A course that keeps a constant angle to geographic north maps to a straight line when longitude runs continuously across the map edges.

**How the definition helps.** The chosen height makes the map preserve angles, so a fixed bearing becomes a fixed angle to parallel vertical lines (our own). On the sphere, eastward distance per unit longitude shrinks by the cosine of latitude (our own). Using the secant as the height derivative makes the map stretch equally in both directions (our own).

**Wikipedia:** [Mercator projection](https://en.wikipedia.org/wiki/Mercator_projection). It says: “representing rhumb lines as straight lines”

**Sources:**

- [J. P. Snyder, Map projections: A working manual (1987)](https://doi.org/10.3133/pp1395)

### The geoid follows local level

**Remember:** A level surface is one on which gravity can do no work.

*True by definition.* MSC 86A30 (Geodesy, mapping problems). arXiv physics.geo-ph. Level 2: later undergraduate.

**Definition.** The geoid is the level surface of Earth’s effective gravitational potential chosen to fit mean sea level. The effective potential includes the effect of Earth’s rotation. A reference ellipsoid instead approximates Earth’s shape geometrically.

**Problem.** In the reference gravity field, a plumb line meets the geoid at right angles wherever gravity is nonzero.

**How the definition helps.** Gravity is normal to a surface of constant potential because the potential has zero derivative in every tangent direction (our own). The work lies in modeling the gravity field and finding the level that best matches mean sea level (our own). An ellipsoid’s normal need not point along real gravity (our own).

**Wikipedia:** [Geoid](https://en.wikipedia.org/wiki/Geoid). It says: “the geoid is, by definition, a surface upon which the force of gravity is perpendicular everywhere, apart from temporary tidal fluctuations.”

**Sources:** none listed. No primary source with a working link was found.

### Depth integration removes Ekman viscosity

**Remember:** Integrate the spiral and only the surface stress remains.

*True by definition.* MSC 86A05 (Hydrology, hydrography, oceanography). arXiv physics.ao-ph. Level 3: graduate.

**Definition.** The interior ocean current balances horizontal pressure forces against the effect of Earth’s rotation. Ekman transport is the depth integral of the horizontal current in excess of that interior current.

**Problem.** Consider steady, horizontally uniform flow of constant density away from the equator, with zero stress at the layer base. The transport points perpendicular to nonzero surface wind stress, to its right in the Northern Hemisphere and left in the Southern Hemisphere.

**How the definition helps.** Integrating the force balance over depth replaces the unknown internal stress profile by its boundary values (our own). Only the surface stress remains because the bottom stress is zero (our own). The rotation term gives a right-angle rotation of the integrated current with opposite signs in the two hemispheres (our own). The usual velocity-profile calculation needs a law for turbulent friction, which drops out of the integrated balance (our own).

**Wikipedia:** [Ekman transport](https://en.wikipedia.org/wiki/Ekman_transport). It says: “If all flow over the Ekman layer is integrated, the net transportation is at 90° to the right (left) of the surface wind”

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

### Layer thickness directs thermal wind

**Remember:** Compare geopotential at two pressure surfaces to find the direction of wind shear.

*True by definition.* MSC 86A10 (Meteorology and atmospheric physics). arXiv physics.ao-ph. Level 3: graduate.

**Definition.** Define geopotential thickness between two fixed pressure surfaces as the upper geopotential minus the lower geopotential. Geopotential is the work per unit mass needed to lift air against gravity. This uses pressure surfaces rather than heights above the ground.

**Problem.** Assume gravity balances the vertical pressure force and Earth’s rotation balances the horizontal pressure force. Away from the equator, the upper wind minus the lower wind follows thickness contours wherever their gradient is nonzero.

**How the definition helps.** At each pressure level, rotate the geopotential gradient by a right angle and divide by the Coriolis parameter to obtain the balanced wind (our own). At a given horizontal location, both levels use the same parameter (our own). Subtraction therefore gives a rotated thickness gradient divided by that parameter, tangent to the thickness contour (our own).

**Wikipedia:** [Thermal wind](https://en.wikipedia.org/wiki/Thermal_wind). It says: “the thermal wind flows along thickness or temperature contours”

**Sources:** none listed. No primary source with a working link was found.

### Fault-plane swaps preserve moment tensors

**Remember:** Switch the normal and slip direction and the tensor stays the same.

*True by definition.* MSC 86A15 (Seismology (including tsunami modeling), earthquakes), 74J15. arXiv physics.geo-ph. Level 3: graduate.

**Definition.** Model slip on one flat fault in a solid whose elastic properties are the same in every direction. Let n be the unit normal to the fault and s the unit slip direction within it. Represent the earthquake source by the symmetric matrix M = a(nsᵀ + snᵀ), where a measures the strength of the slip.

**Problem.** Swapping the fault normal and slip direction leaves the source matrix unchanged. Thus the matrix alone cannot identify which of the two planes slipped.

**How the definition helps.** The symmetric matrix makes the ambiguity visible without computing seismic waves in each direction (our own). Swapping the slip direction and fault normal exchanges the two terms and leaves their sum unchanged (our own). The physical work lies in deriving this matrix from slip across an elastic fault (our own).

**Wikipedia:** [Focal mechanism](https://en.wikipedia.org/wiki/Focal_mechanism). It says: “It is impossible to determine solely from a focal mechanism which of the nodal planes is the fault plane.”

**Sources:** none listed. No primary source with a working link was found.

### River order gaps survive pruning

**Remember:** Pruning lowers both surviving orders by one and leaves their gap alone.

*True by definition.* MSC 86A05 (Hydrology, hydrography, oceanography). arXiv physics.geo-ph. Level 4: research.

**Definition.** Headwaters have order one in a binary river tree. A junction takes the larger incoming order, adding one if the orders match. For i &lt; j, divide the expected count of order-i side branches entering order-j branches by the expected count of order-j branches to obtain T(i,j).

**Problem.** Pruning removes headwaters and joins segments left with one input. Assume the ratios T(i,j) are independent of maximum tree order whenever defined. Pruning preserves these ratios exactly when they depend only on j − i.

**How the definition helps.** Pruning lowers both surviving branch orders by one, so the pruned ratio at (i,j) equals the original ratio at (i+1,j+1) (our own). Coordination lets us compare these ratios across tree orders (our own). Invariance thus means the ratios are constant along each diagonal, indexed by j − i (our own).

**Paper or page:** [Critical Tokunaga model for river networks](https://arxiv.org/abs/2106.02991v1). It says: “the Toeplitz property Tᵢ,ᵢ₊ₖ = Tₖ and Horton prune-invariance”

**Sources:**

- [Yevgeniy Kovchegov, Ilya Zaliapin and Efi Foufoula-Georgiou, Critical Tokunaga model for river networks (2021).](https://arxiv.org/abs/2106.02991v1)
- [Yevgeniy Kovchegov, Ilya Zaliapin and Efi Foufoula-Georgiou, Critical Tokunaga model for river networks (2022).](https://doi.org/10.1103/PhysRevE.105.014301)

### Steady water keeps discharge and head

**Remember:** A steady current can change depth while keeping discharge and head fixed.

*Makes the theorem clean to state or prove.* MSC 86A05 (Hydrology, hydrography, oceanography), 65M08. arXiv physics.ao-ph. Level 4: research.

**Definition.** For water depth h and velocity u, discharge per unit width is q = hu. With bed height b and gravitational acceleration g, the scheme uses the energy per unit mass E = u²/2 + g(h + b). It reconstructs flow from q and E.

**Problem.** In the paper's frictionless schemes for one-dimensional flow of positive depth, suppose q and E are constant across all cell and point data. Then every stored value has zero time derivative.

**How the definition helps.** For smooth flow, discharge and head turn a spatially varying steady flow into constant data for reconstruction (our own). The proof checks that the discrete transport and bed-slope terms then cancel in both update equations (our own).

**Paper or page:** [A New Approach for Designing Well-Balanced Schemes for the Shallow Water Equations: A Combination of Conservative and Primitive Formulations](https://arxiv.org/abs/2304.07809). It says: “qⱼ = qⱼ₊½ ≡ q̂ = Const, Eⱼ = Eⱼ₊½ ≡ Ê = Const, ∀j”

**Sources:**

- [A New Approach for Designing Well-Balanced Schemes for the Shallow Water Equations: A Combination of Conservative and Primitive Formulations](https://arxiv.org/abs/2304.07809)

### Convexity removes hidden mass alternatives

**Remember:** Fix density and forbid hollow domains before asking gravity to identify a shape.

*Makes the theorem clean to state or prove.* MSC 86A22 (Inverse problems in geophysics). arXiv physics.geo-ph. Level 4: research.

**Definition.** A density contrast is the difference between a body's density and the background density. The unknown body D lies in a known bounded region Ω whose closure has connected exterior. D is convex with piecewise smooth boundary, and its contrast f is known, integrable and positive on Ω.

**Problem.** Enclose Ω in a convex domain with analytic boundary. Exact gravity measurements on any nonempty patch of that boundary determine D uniquely.

**How the definition helps.** Convexity rules out hollow shells, so a basic exterior-gravity ambiguity disappears (our own). A uniform ball and a concentric hollow spherical shell of equal mass have identical exterior gravity by Newton’s shell theorem (our own). The paper’s Theorem 0.1 does the harder work of proving uniqueness for the whole convex class.

**Paper or page:** [Learning on the correct class for domain inverse problems of gravimetry](https://arxiv.org/abs/2403.07393v1). It says: “D is convex, f ∈ L₁(Ω), and 0 &lt; f on Ω.”

**Sources:**

- [Yihang Chen and Wenbin Li, Learning on the correct class for domain inverse problems of gravimetry (2024).](https://arxiv.org/abs/2403.07393v1)
