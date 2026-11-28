### Buoyancy sign predicts oscillation

**Remember:** N² is buoyancy's restoring pull per unit of lift.

*True by definition.* MSC 86A10 (Meteorology and atmospheric physics), 86A05. arXiv physics.ao-ph. Level 2: later undergraduate.

**Definition.** In a resting fluid with density ρ(z) at height z, N² = −gρ′(z)/ρ₀ is the buoyant restoring acceleration per unit height on a parcel that is lifted while keeping its density (our own). Here g is gravitational acceleration and ρ₀ is a constant positive reference density for inertia.

**Problem.** For small vertical parcel displacements in this model, N² &gt; 0 gives oscillations. If N² &lt; 0, the linear equation has an exponentially growing solution.

**How the definition helps.** A parcel lifted by x keeps its density, so it differs from its surroundings by −ρ′x and accelerates by x″ = −N²x (our own). This equation oscillates for N² &gt; 0 and has an exponentially growing solution for N² &lt; 0 (our own).

**Wikipedia:** [Brunt–Väisälä frequency](https://en.wikipedia.org/wiki/Brunt%E2%80%93V%C3%A4is%C3%A4l%C3%A4_frequency). It says: “the displacement z′ has oscillating solutions (and N gives our angular frequency).”

**Sources:** none listed. No primary source with a working link was found.

### Geopotential height absorbs varying gravity

**Remember:** Measure altitude by lifting work so gravity drops out of the conversion.

*True by definition.* MSC 86A10 (Meteorology and atmospheric physics). arXiv physics.geo-ph. Level 2: later undergraduate.

**Definition.** Geopotential height is the work per unit mass needed to lift air against gravity from a reference level, divided by a fixed standard gravity. Each step of it is the geometric step times local gravity over standard gravity (our own).

**Problem.** Suppose the vertical pressure force balances gravity at every height, a condition called hydrostatic balance. The derivative of pressure with respect to geopotential height then equals minus density times standard gravity, even when local gravity varies.

**How the definition helps.** Hydrostatic balance gives dp = −ρg dz, and each geopotential height step is (g/g₀) dz, so local gravity cancels and dp/dZ = −ρg₀ (our own). Recovering geometric height still requires the local gravity field (our own).

**Wikipedia:** [Geopotential height](https://en.wikipedia.org/wiki/Geopotential_height). It says: “the simplification obtained by assuming a constant value of gravitational acceleration is the sole reason for defining the geopotential altitude.”

**Sources:** none listed. No primary source with a working link was found.

### Potential temperature survives adiabatic motion

**Remember:** Compare air parcels after bringing them to the same pressure without heating.

*True by definition.* MSC 86A10 (Meteorology and atmospheric physics). arXiv physics.geo-ph. Level 2: later undergraduate.

**Definition.** Potential temperature is the temperature an air parcel would have if brought to a fixed reference pressure reversibly, with no heat exchange.

**Problem.** A dry ideal-gas parcel keeps its potential temperature during reversible motion with no heat exchange.

**How the definition helps.** A dry ideal gas that moves reversibly without heat exchange keeps its entropy, and at the reference pressure each entropy gives one temperature (our own). So the temperature the parcel would reach there never changes, even though its actual temperature does (our own).

**Wikipedia:** [Potential temperature](https://en.wikipedia.org/wiki/Potential_temperature). It says: “Potential temperature is conserved for all dry adiabatic processes”

**Sources:** none listed. No primary source with a working link was found.

### Authalic latitude preserves ellipsoid area

**Remember:** Match the area of each latitude band before drawing the map.

*True by definition.* MSC 86A30 (Geodesy, mapping problems). arXiv physics.geo-ph. Level 2: later undergraduate.

**Definition.** The authalic latitude of a point on an ellipsoid of revolution is the latitude, in the same hemisphere, on a sphere of equal total area whose band from the equator has the same area as the point's band on the ellipsoid. Longitude stays the same.

**Problem.** The authalic latitude map preserves area, so composing it with a spherical equal-area projection gives an equal-area ellipsoid map.

**How the definition helps.** Matching band areas from the equator matches every latitude band by subtraction, and rotational symmetry splits each band by longitude in proportion (our own). So all latitude-longitude rectangles keep their area, and those rectangles determine area (our own).

**Wikipedia:** [Latitude](https://en.wikipedia.org/wiki/Latitude). It says: “gives an equal-area projection to a sphere.”

**Sources:**

- [J. P. Snyder, Map projections: A working manual (1987)](https://doi.org/10.3133/pp1395)

### Chord radius preserves mapped area

**Remember:** Use chord length as the map radius to keep areas unchanged.

*True by definition.* MSC 86A30 (Geodesy, mapping problems). arXiv physics.geo-ph. Level 2: later undergraduate.

**Definition.** The spherical Lambert azimuthal equal-area map keeps each point's bearing from the center. It puts the point at map radius equal to the straight chord length to the center, not the distance along the surface.

**Problem.** The spherical Lambert azimuthal map preserves area away from the point opposite its center.

**How the definition helps.** A cap of angular radius θ on a sphere of radius R has area 2πR²(1 − cos θ), which is π times the squared chord, the area of its map disk (our own). Bearings keep sector fractions, so polar rectangles keep their area, and those rectangles determine area (our own).

**Wikipedia:** [Lambert azimuthal equal-area projection](https://en.wikipedia.org/wiki/Lambert_azimuthal_equal-area_projection). It says: “It accurately represents area in all regions of the sphere, but it does not accurately represent angles.”

**Sources:**

- [J. P. Snyder, Map projections: A working manual (1987)](https://doi.org/10.3133/pp1395)

### Mercator straightens compass courses

**Remember:** Mercator stretches latitude until a steady compass bearing has a steady slope.

*True by definition.* MSC 86A30 (Geodesy, mapping problems). arXiv physics.geo-ph. Level 2: later undergraduate.

**Definition.** The spherical Mercator map uses longitude as its horizontal coordinate and the integral of the secant of latitude from the equator as its vertical coordinate. This stretches north–south distances by the same factor, the secant of latitude, as east–west distances, so the map preserves angles (our own).

**Problem.** A course that keeps a constant angle to geographic north maps to a straight line when longitude runs continuously across the map edges.

**How the definition helps.** Since the map preserves angles, a course at a fixed angle to north crosses the vertical meridian lines at that same fixed angle (our own). A curve that meets parallel straight lines at a fixed angle is itself straight (our own).

**Wikipedia:** [Mercator projection](https://en.wikipedia.org/wiki/Mercator_projection). It says: “representing rhumb lines as straight lines”

**Sources:**

- [J. P. Snyder, Map projections: A working manual (1987)](https://doi.org/10.3133/pp1395)

### The geoid follows local level

**Remember:** A level surface is one on which gravity can do no work.

*True by definition.* MSC 86A30 (Geodesy, mapping problems). arXiv physics.geo-ph. Level 2: later undergraduate.

**Definition.** The geoid is the surface on which Earth's effective gravitational potential, including the effect of rotation, is constant, chosen to fit mean sea level.

**Problem.** In the reference gravity field, a plumb line meets the geoid at right angles wherever gravity is nonzero.

**How the definition helps.** The potential does not change along the surface, so its gradient, gravity, has no tangential part and is normal to the surface wherever it is nonzero (our own). A reference ellipsoid's normal need not point along real gravity (our own).

**Wikipedia:** [Geoid](https://en.wikipedia.org/wiki/Geoid). It says: “the geoid is, by definition, a surface upon which the force of gravity is perpendicular everywhere, apart from temporary tidal fluctuations.”

**Sources:** none listed. No primary source with a working link was found.

### Depth integration removes Ekman viscosity

**Remember:** Integrate the spiral and only the surface stress remains.

*True by definition.* MSC 86A05 (Hydrology, hydrography, oceanography). arXiv physics.ao-ph. Level 3: graduate.

**Definition.** Ekman transport is the depth integral of the horizontal ocean current in excess of the interior current, which balances horizontal pressure forces against the effect of Earth's rotation. Integrating over depth replaces the unknown internal friction profile by the stresses at the top and bottom of the layer (our own).

**Problem.** Consider steady, horizontally uniform flow of constant density away from the equator, with zero stress at the layer base. The transport points perpendicular to nonzero surface wind stress, to its right in the Northern Hemisphere and left in the Southern Hemisphere.

**How the definition helps.** With zero stress at the base, the integrated balance says the rotation term, the transport turned by a right angle times the Coriolis parameter, equals surface stress over density (our own). So the transport is perpendicular to the stress, and the sign of the Coriolis parameter puts it to the right in the north and left in the south (our own).

**Wikipedia:** [Ekman transport](https://en.wikipedia.org/wiki/Ekman_transport). It says: “If all flow over the Ekman layer is integrated, the net transportation is at 90° to the right (left) of the surface wind”

**Sources:** none listed. No primary source with a working link was found.

### Shallow-water potential vorticity follows parcels

**Remember:** Divide the total spin by layer depth to cancel stretching.

*True by definition.* MSC 86A05 (Hydrology, hydrography, oceanography). arXiv physics.geo-ph. Level 3: graduate.

**Definition.** Shallow-water potential vorticity is absolute vorticity, the vertical curl of the horizontal velocity plus the planetary rotation term, divided by the water depth. Horizontal spreading lowers both by the same factor (our own).

**Problem.** In a smooth rotating shallow-water flow of positive depth, potential vorticity stays constant along each moving parcel. Assume no viscosity, external forcing or water sources.

**How the definition helps.** The momentum equation makes absolute vorticity change along a parcel at minus itself times the horizontal divergence, and water conservation gives the same law for depth (our own). The quotient rule then gives zero, even where vorticity vanishes (our own).

**Wikipedia:** [Potential vorticity](https://en.wikipedia.org/wiki/Potential_vorticity). It says: “The conserved quantity, in parentheses in equation (3), was later named the shallow water potential vorticity.”

**Sources:**

- [Carl-Gustaf Rossby, Relation between variations in the intensity of the zonal circulation of the atmosphere and the displacements of the semi-permanent centers of action (1939).](https://doi.org/10.1357/002224039806649023)

### Fixed rotation prevents geostrophic divergence

**Remember:** With fixed rotation, the divergence of a rotated gradient cancels.

*Rules out counterexamples.* MSC 86A10 (Meteorology and atmospheric physics). arXiv physics.geo-ph. Level 3: graduate.

**Definition.** Use a flat local model whose Coriolis parameter, the local strength of planetary rotation, is the same nonzero constant everywhere. Then the geostrophic wind is a fixed multiple of the geopotential gradient turned through a right angle (our own).

**Problem.** Assume the geopotential, the effective gravitational potential per unit mass, has continuous second derivatives on a constant-pressure surface. The horizontal wind that balances rotation against the pressure force then has zero horizontal divergence.

**How the definition helps.** A gradient turned through a right angle has divergence zero by equality of mixed partial derivatives (our own). If rotation strength varied northward, an eastward geopotential gradient would give a northward wind whose speed varies northward, so the divergence would not vanish (our own).

**Wikipedia:** [F-plane](https://en.wikipedia.org/wiki/F-plane). It says: “the Coriolis parameter f, which measures the local effect of the planet's rotation, is a constant”

**Sources:** none listed. No primary source with a working link was found.

### Layer thickness directs thermal wind

**Remember:** Wind shear runs along thickness contours, as wind runs along height contours.

*True by definition.* MSC 86A10 (Meteorology and atmospheric physics). arXiv physics.ao-ph. Level 3: graduate.

**Definition.** Geopotential thickness between two fixed pressure surfaces is the upper geopotential minus the lower one, where geopotential is the lifting work per unit mass against gravity.

**Problem.** Assume gravity balances the vertical pressure force and Earth’s rotation balances the horizontal pressure force. Away from the equator, the upper wind minus the lower wind follows thickness contours wherever their gradient is nonzero.

**How the definition helps.** At each pressure level the balanced wind is the geopotential gradient turned through a right angle and divided by the Coriolis parameter, which is the same at both levels at one place (our own). Subtracting gives the turned thickness gradient over that parameter, which is tangent to the thickness contours (our own).

**Wikipedia:** [Thermal wind](https://en.wikipedia.org/wiki/Thermal_wind). It says: “the thermal wind flows along thickness or temperature contours”

**Sources:** none listed. No primary source with a working link was found.

### Fault-plane swaps preserve moment tensors

**Remember:** Switch the normal and slip direction and the tensor stays the same.

*True by definition.* MSC 86A15 (Seismology (including tsunami modeling), earthquakes), 74J15. arXiv physics.geo-ph. Level 3: graduate.

**Definition.** Represent slip on one flat fault in an isotropic elastic solid by the symmetric matrix M = a(nsᵀ + snᵀ), where n is the unit fault normal, s the unit slip direction in the fault, and a the slip strength. The formula treats n and s the same way (our own).

**Problem.** Swapping the fault normal and slip direction leaves the source matrix unchanged. Thus the matrix alone cannot identify which of the two planes slipped.

**How the definition helps.** Swapping n and s exchanges the two terms, so their sum is unchanged (our own). The physical work lies in deriving this matrix from slip across an elastic fault (our own).

**Wikipedia:** [Focal mechanism](https://en.wikipedia.org/wiki/Focal_mechanism). It says: “It is impossible to determine solely from a focal mechanism which of the nodal planes is the fault plane.”

**Sources:** none listed. No primary source with a working link was found.

### River order gaps survive pruning

**Remember:** Pruning lowers both surviving orders by one and leaves their gap alone.

*True by definition.* MSC 86A05 (Hydrology, hydrography, oceanography). arXiv physics.geo-ph. Level 4: research.

**Definition.** In a binary river tree, headwaters have order one, and a junction takes the larger incoming order, adding one if the two orders match. For i &lt; j, T(i,j) is the expected number of order-i side branches entering order-j branches, per order-j branch.

**Problem.** Pruning removes headwaters and joins segments left with one input. If the ratios T(i,j) do not depend on the tree's maximum order whenever defined, pruning preserves them exactly when they depend only on j − i.

**How the definition helps.** Pruning lowers every surviving order by one, so the pruned ratio at (i,j) is the original ratio at (i+1, j+1) (our own). Since the ratios do not depend on maximum order, invariance means they are constant along each diagonal j − i (our own).

**Paper or page:** [Critical Tokunaga model for river networks](https://arxiv.org/abs/2106.02991v1). It says: “the Toeplitz property Tᵢ,ᵢ₊ₖ = Tₖ and Horton prune-invariance”

**Sources:**

- [Yevgeniy Kovchegov, Ilya Zaliapin and Efi Foufoula-Georgiou, Critical Tokunaga model for river networks (2021).](https://arxiv.org/abs/2106.02991v1)
- [Yevgeniy Kovchegov, Ilya Zaliapin and Efi Foufoula-Georgiou, Critical Tokunaga model for river networks (2022).](https://doi.org/10.1103/PhysRevE.105.014301)

### Steady water keeps discharge and head

**Remember:** A steady current changes depth but keeps discharge and energy fixed.

*Makes the theorem clean to state or prove.* MSC 86A05 (Hydrology, hydrography, oceanography), 65M08. arXiv physics.ao-ph. Level 4: research.

**Definition.** Describe the flow by its discharge q = hu, the water carried past a point per unit width, and its energy per unit mass E = u²/2 + g(h + b), where h is depth, u velocity, b bed height and g gravity. The scheme reconstructs the flow from q and E, so a steady flow whose depth varies still gives constant data.

**Problem.** In the paper's frictionless schemes for one-dimensional flow of positive depth, suppose q and E are constant across all cell and point data. Then every stored value has zero time derivative.

**How the definition helps.** Constant q and E give constant reconstructed data, so the discrete transport and bed-slope terms cancel in both update equations (our own). For smooth steady flow, q and E stay constant even where depth and velocity vary (our own).

**Paper or page:** [A New Approach for Designing Well-Balanced Schemes for the Shallow Water Equations: A Combination of Conservative and Primitive Formulations](https://arxiv.org/abs/2304.07809). It says: “qⱼ = qⱼ₊½ ≡ q̂ = Const, Eⱼ = Eⱼ₊½ ≡ Ê = Const, ∀j”

**Sources:**

- [A New Approach for Designing Well-Balanced Schemes for the Shallow Water Equations: A Combination of Conservative and Primitive Formulations](https://arxiv.org/abs/2304.07809)

### Convexity removes hidden mass alternatives

**Remember:** Known density and no hollows let outside gravity fix the shape.

*Makes the theorem clean to state or prove.* MSC 86A22 (Inverse problems in geophysics). arXiv physics.geo-ph. Level 4: research.

**Definition.** The unknown body D is convex, so it has no hollows, has piecewise smooth boundary, and lies in a known bounded region Ω whose closure has connected exterior. Its density contrast f, the body's density minus the background density, is known, integrable and positive on Ω.

**Problem.** Enclose Ω in a convex domain with analytic boundary. Exact gravity measurements on any nonempty patch of that boundary determine D uniquely.

**How the definition helps.** Convexity rules out hollow bodies, which removes the basic ambiguity of exterior gravity (our own). By Newton’s shell theorem, a uniform ball and a concentric hollow shell of equal mass have the same exterior gravity (our own). The paper’s Theorem 0.1 proves uniqueness for the whole convex class.

**Paper or page:** [Learning on the correct class for domain inverse problems of gravimetry](https://arxiv.org/abs/2403.07393v1). It says: “D is convex, f ∈ L₁(Ω), and 0 &lt; f on Ω.”

**Sources:**

- [Yihang Chen and Wenbin Li, Learning on the correct class for domain inverse problems of gravimetry (2024).](https://arxiv.org/abs/2403.07393v1)
