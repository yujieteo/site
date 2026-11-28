### Nonzero curvature fixes Frenet normals

**Remember:** No turn means no principal normal.

*Rules out counterexamples.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** For a smooth regular space curve with unit tangent T and arc length s, the curvature κ is the length of dT/ds. Where κ &gt; 0, the principal normal N = (dT/ds)/κ is defined, and the Frenet frame is T, N and T × N.

**Problem.** At each point of positive curvature, these three vectors form an orthonormal basis of three-dimensional space.

**How the definition helps.** Positive curvature keeps the denominator of N nonzero (our own check). Since T has constant length, dT/ds is perpendicular to T, and T × N completes an orthonormal basis. The straight line s ↦ (s, 0, 0) has dT/ds = 0, so it has no principal normal (our own counterexample).

**Wikipedia:** [Frenet–Serret formulas](https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas). It says: “The Frenet–Serret formulas apply to curves which are non-degenerate, which roughly means that they have nonzero curvature.”

**Sources:** none listed. No primary source with a working link was found.

### Polygons with corners on the curve define arc length correctly

**Remember:** Put the corners on the curve, then take the supremum.

*Rules out counterexamples. Confidence: medium.* MSC 53A04 (Curves in Euclidean and related spaces), 51M25. arXiv math.DG, math.CA. Level 1: early undergraduate.

**Definition.** The length of a continuous curve γ on \[a, b\] is the supremum of the lengths of its inscribed polygons. These are the chains through γ(t₀), …, γ(tₙ) for partitions a = t₀ &lt; ⋯ &lt; tₙ = b.

**Problem.** Arc length is well defined, and inscribed polygons approximate it.

**How the definition helps.** A supremum always exists, possibly infinite, and some inscribed polygons come arbitrarily close to it (our own). Polygons merely near the curve give no such control. Staircases of total length 2 converge to the diagonal of the unit square, of length √2 (our own).

**Wikipedia:** [Schwarz lantern](https://en.wikipedia.org/wiki/Schwarz_lantern). It says: “However, for this to work correctly, the vertices of the polygonal chains must lie on the given curve, rather than merely near it.”

**Sources:** none listed. No primary source with a working link was found.

### Regular curves admit unit speed

**Remember:** With positive speed, the distance clock never stops.

*Rules out counterexamples.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** A continuously differentiable curve is regular if its velocity is never zero, so its arc length is a strictly increasing function of the parameter with positive derivative.

**Problem.** Every regular continuously differentiable curve on a compact interval of positive length admits a continuously differentiable parametrization with speed one.

**How the definition helps.** Arc length then has a continuously differentiable inverse, and using it as the parameter gives speed one (our own proof). Without regularity this can fail. On the cusp t ↦ (t², t³), the unit tangents point in opposite directions on the two sides of 0, so no continuously differentiable unit-speed parametrization exists.

**Wikipedia:** [Curve](https://en.wikipedia.org/wiki/Curve). It says: “A differentiable curve is said to be regular if its derivative never vanishes.”

**Sources:** none listed. No primary source with a working link was found.

### Zero curvature forces straightness

**Remember:** A tangent that never changes draws a straight line.

*True by definition.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** The curvature of a regular curve is the length of the derivative of its unit tangent with respect to arc length, so zero curvature means that the tangent direction never changes.

**Problem.** A twice continuously differentiable regular curve on an interval lies on a line if and only if its curvature vanishes everywhere.

**How the definition helps.** If curvature vanishes, the unit tangent is constant on the interval, and integrating it gives a curve on one line (our own). Conversely, the unit tangent of a regular curve on a line is continuous and takes only two opposite values, so it is constant.

**Paper or page:** [Straight Line has Zero Curvature](https://proofwiki.org/wiki/Straight_Line_has_Zero_Curvature). It says: “A straight line has zero curvature.”

**Sources:** none listed. No primary source with a working link was found.

### Level surfaces have gradient normals

**Remember:** A velocity along a level surface cannot change its level.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** A tangent vector to the level surface F = c at a point is the velocity there of a differentiable curve that stays in the surface. Along such a curve, F keeps the value c.

**Problem.** If F is continuously differentiable and ∇F is nonzero at a point of F = c, then ∇F is normal there.

**How the definition helps.** Along any curve in the surface F is constant, so the chain rule makes ∇F · velocity zero (our own proof). Hence ∇F is perpendicular to every tangent vector. The implicit function theorem writes the surface locally as a graph, which gives two independent tangent directions, so the tangent vectors fill a plane.

**Wikipedia:** [Gradient](https://en.wikipedia.org/wiki/Gradient). It says: “It follows that in this case the gradient of f is orthogonal to the level sets of f.”

**Sources:** none listed. No primary source with a working link was found.

### Regular surface patches have tangents

**Remember:** Two independent surface directions span one tangent plane.

*Rules out counterexamples.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** A regular surface patch is a continuously differentiable, one-to-one map from an open set in the plane into space, with continuous inverse on its image. Its two partial derivative vectors are linearly independent at every point, so they span a plane.

**Problem.** A regular surface patch has a unique tangent plane at each point of the patch.

**How the definition helps.** The inverse function theorem writes the patch locally as a graph over two coordinates (our own). By the chain rule, every velocity of a curve in the surface then lies in the plane of the partial derivatives, so that plane is unique. At the apex of the cone x² + y² = z², the lines through the apex span all three dimensions (our own).

**Wikipedia:** [Surface (mathematics)](https://en.wikipedia.org/wiki/Surface_%28mathematics%29). It says: “Such an irregular point, where the tangent plane is undefined, is said singular.”

**Sources:** none listed. No primary source with a working link was found.

### Surface area ignores parameter changes

**Remember:** A parameter change scales each tiny area by its absolute determinant.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** Parametrize a surface patch by a smooth map r(u, v) with independent partial derivatives r<sub>u</sub> and r<sub>v</sub>. Its area is the integral over the parameter domain of \|r<sub>u</sub> × r<sub>v</sub>\|, the area of the small parallelogram that the parameters span.

**Problem.** An invertible smooth change of parameters with smooth inverse does not change the area of a regular surface patch.

**How the definition helps.** Under a change of parameters, the chain rule and the properties of the cross product multiply r<sub>u</sub> × r<sub>v</sub> by the Jacobian determinant (our own). So the integrand scales by the absolute determinant, exactly the factor in the change-of-variables formula, and the two area integrals agree.

**Wikipedia:** [Surface area](https://en.wikipedia.org/wiki/Surface_area). It says: “integrating the length of the normal vector rᵤ × rᵥ to the surface over the appropriate region D in the parametric uv plane.”

**Sources:** none listed. No primary source with a working link was found.

### Tangent planes follow affine maps

**Remember:** Apply the same affine map to the surface and its tangent plane.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** For a surface given locally by a parametrization with independent partial derivatives, the tangent plane at a point is the span of those two vectors, translated to the point.

**Problem.** An invertible affine map, a linear transformation followed by a translation, carries each tangent plane to the corresponding tangent plane of the image surface.

**How the definition helps.** By the chain rule, composing with the affine map multiplies both partial derivatives by its linear part, so their span goes to the span of the image vectors (our own argument). The translation only moves the base point. A definition by normal vectors would need the fact that normals transform by the inverse transpose.

**Wikipedia:** [Surface (mathematics)](https://en.wikipedia.org/wiki/Surface_%28mathematics%29). It says: “maps the tangent plane to the surface at a point to the tangent plane to the image of the surface at the image of the point.”

**Sources:** none listed. No primary source with a working link was found.

### Frenet coefficients determine a space curve up to rigid motion

**Remember:** Curvature and torsion drive one moving frame.

*True by definition.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a unit-speed space curve with positive curvature, let T be its velocity, N its acceleration divided by its length, and B = T × N. The curvature κ and torsion τ are the coefficients in T′ = κN and B′ = −τN, so κ and τ drive a linear differential equation for the frame (our own).

**Problem.** Given smooth functions κ &gt; 0 and τ on an interval, a smooth unit-speed space curve has those invariants. It is unique up to rotation and translation.

**How the definition helps.** Together with N′ = −κT + τB, these equations form a linear system for the frame (our own). Its solution exists and is unique for each starting frame, and the skew-symmetric coefficients keep the frame orthonormal (our own). Integrating T gives the curve, and another start changes it by a rotation and translation (our own).

**Wikipedia:** [Torsion of a curve](https://en.wikipedia.org/wiki/Torsion_of_a_curve). It says: “coefficients in the system of differential equations for the Frenet frame”

**Sources:** none listed. No primary source with a working link was found.

### Positive curvature makes zero torsion a test for planarity

**Remember:** Zero torsion keeps the binormal fixed.

*Rules out counterexamples.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a unit-speed space curve with positive curvature, the principal normal N is the acceleration divided by its length. The binormal B = T × N can only turn along N (our own), and the torsion τ = −B′ · N measures that turning.

**Problem.** On an interval, a smooth unit-speed space curve of positive curvature lies in a plane if and only if its torsion vanishes.

**How the definition helps.** Since B′ is always a multiple of N, zero torsion makes B constant (our own). Then the velocity stays perpendicular to a fixed vector, so the curve stays in one plane, and conversely a plane curve of positive curvature has constant B (our own). Without positive curvature, arcs in different planes can join along a straight segment where torsion is undefined (our own).

**Wikipedia:** [Torsion of a curve](https://en.wikipedia.org/wiki/Torsion_of_a_curve). It says: “the torsion of a regular curve with non-vanishing curvature is identically zero”

**Sources:** none listed. No primary source with a working link was found.

### Signed area gives an isoperimetric inequality even for crossings

**Remember:** Signed area needs no inside, so crossings do no harm.

*Makes the theorem clean to state or prove.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** The signed area A of a closed plane curve is half the integral of x dy − y dx once around it. It counts each region as many times as the curve winds around it, so it needs no inside.

**Problem.** For a smooth regular closed plane curve of length L, 4π\|A\| ≤ L². Thus a circle encloses the largest area among simple closed curves of a fixed length.

**How the definition helps.** The signed area pairs the position with the rotated velocity, which needs no simple curve (our own). Center the mean position at zero and use unit speed (our own). Then Cauchy–Schwarz and Wirtinger’s inequality give \|A\| ≤ L²/(4π), and Green’s theorem makes \|A\| the ordinary area for simple curves (our own).

**Wikipedia:** [Green's theorem](https://en.wikipedia.org/wiki/Green%27s_theorem). It says: “Green's theorem can be used to compute area by line integral.”

**Sources:** none listed. No primary source with a working link was found.

### Signed curvature determines a plane curve through inflections

**Remember:** Signed curvature tells the tangent which way to turn.

*True by definition.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a unit-speed plane curve, let θ be a continuous angle of its unit tangent. Its signed curvature is θ′, the rate of turning with left turns positive, so it records which way the curve turns (our own).

**Problem.** Every continuous function on an interval is the signed curvature of a twice continuously differentiable unit-speed plane curve. The curve is unique up to translation and rotation.

**How the definition helps.** Integrating the signed curvature gives the tangent angle up to a constant, which is a rotation (our own). Integrating the unit tangent (cos θ, sin θ) then gives the curve up to a translation (our own). A continuous angle exists because the tangent is continuous on an interval (our own).

**Wikipedia:** [Curvature](https://en.wikipedia.org/wiki/Curvature). It says: “Curvature measures the angular rate of change of the direction of the tangent line”

**Sources:** none listed. No primary source with a working link was found.

### Stationary curvature lets circles satisfy the four vertex theorem

**Remember:** A vertex is where curvature stops changing; circles are all vertices.

*Makes the theorem clean to state or prove.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A vertex of a smooth regular plane curve is a point where the signed curvature has derivative zero with respect to arc length. Every point of a circle, and of any arc of constant curvature, is a vertex.

**Problem.** Every smooth regular simple closed plane curve has at least four distinct vertices.

**How the definition helps.** With this definition the circle satisfies the theorem at once, so it needs no separate case. Curvature extremes are vertices, and a global argument finds four of them on curves whose curvature varies (our own).

**Wikipedia:** [Four vertex theorem](https://en.wikipedia.org/wiki/Four_vertex_theorem). It says: “In a circle, every point is both a local maximum and a local minimum of curvature, so there are infinitely many vertices.”

**Paper or page:** [Moon in a puddle and the four-vertex theorem](https://arxiv.org/abs/2107.08455v1). It says: “Any smooth regular simple plane curve is supported by its osculating circlines at 4 distinct points; two from inside and two from outside.”

**Sources:**

- [Anton Petrunin and Sergio Zamora Barrera, Moon in a Puddle and the Four-Vertex Theorem, Theorem 2](https://arxiv.org/abs/2107.08455v1)

### The center formula makes osculating circles nest

**Remember:** The centers move less than the radii change.

*True by definition.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** On a smooth unit-speed plane curve γ with positive signed curvature κ and left unit normal N, the osculating circle has radius r = 1/κ and center c = γ + rN. Since N′ = −κT, the center has velocity c′ = r′N (our own). So the center moves exactly as fast as the radius changes (our own).

**Problem.** On a smooth plane arc with positive signed curvature and κ′ nowhere zero, the osculating circles are pairwise disjoint and nested.

**How the definition helps.** With κ′ never zero, r is strictly monotone (our own). The center path is not straight because N turns, so two centers are strictly closer than the arc length between them, which equals the change in radius (our own). So each larger disk contains the smaller circle in its interior (our own).

**Paper or page:** [Variations on the Tait-Kneser theorem](https://arxiv.org/abs/2104.02170v2). It says: “The osculating circles of a vertex-free plane curve with non-vanishing curvature are disjoint and pairwise nested”

**Sources:**

- [Gil Bor, Connor Jackman and Serge Tabachnikov, Variations on the Tait–Kneser Theorem, Theorem 1.1](https://arxiv.org/abs/2104.02170v2)

### Turning angles as curvature make Fenchel's theorem hold for polygons

**Remember:** A polygon's curvature is how far it turns at each corner.

*Makes the theorem clean to state or prove.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG, math.MG. Level 2: later undergraduate.

**Definition.** The curvature of a polygon at a vertex is its turning angle, the angle between the incoming and outgoing edge directions. Then its total curvature is the length of its tangent indicatrix, the closed chain of great-circle arcs joining its edge directions on the unit sphere (our own).

**Problem.** Fenchel's theorem: a closed space curve, smooth or polygonal, has total curvature at least 2π. Equality holds exactly when the curve is planar and convex.

**How the definition helps.** With turning angles as curvature, total curvature is the length of the tangent indicatrix for smooth and polygonal curves alike (our own). A closed curve's indicatrix lies in no open hemisphere, and such a closed spherical curve has length at least 2π (our own). So one proof covers both kinds of curve.

**Paper or page:** [Discrete curvature](https://arxiv.org/abs/2502.09353), [Discrete curvature](https://arxiv.org/abs/2502.09353). It says: “The total curvature of a closed space curve is bigger or equal 2π: ∫ₐᵇ κ dt ≥ 2π, respectively ∑ᵢ₌₁ⁿ κᵢ ≥ 2π. The equality takes place if and only if the curve is planar and convex.”

**Sources:**

- [I. Izmestiev, Discrete curvature, Internationale Mathematische Nachrichten 250 (2022) 1–23, arXiv:2502.09353](https://arxiv.org/abs/2502.09353)
- [W. Fenchel, Über Krümmung und Windung geschlossener Raumkurven, Mathematische Annalen 101 (1929) 238–252](https://doi.org/10.1007/bf01454836)

### A continuous normal makes the Gauss map global

**Remember:** A consistent choice of side gives one map to the sphere.

*Rules out counterexamples.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** An orientation of a surface in space is a continuous choice of unit normal at each point. The Gauss map sends each point to its chosen normal on the unit sphere.

**Problem.** A smooth regular surface admits a smooth Gauss map of unit normals exactly when it is orientable.

**How the definition helps.** A continuous normal is exactly the data the Gauss map needs, with no signs to match between patches (our own). Locally it is plus or minus the unit normal of a patch, so it is smooth (our own). A Möbius strip has no such choice, because the normal flips on a trip around its middle (our own).

**Wikipedia:** [Gauss map](https://en.wikipedia.org/wiki/Gauss_map). It says: “The Gauss map can be defined (globally) if and only if the surface is orientable”

**Sources:** none listed. No primary source with a working link was found.

### An infimum defines surface distance even without a shortest path

**Remember:** Distances can approach a lower bound without reaching it.

*Makes the theorem clean to state or prove.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** On a connected smooth surface, the intrinsic distance between two points is the infimum of the lengths of piecewise smooth paths joining them, a bound that paths approach but need not reach.

**Problem.** Intrinsic distance is a metric on a connected regular surface, even when no shortest path exists.

**How the definition helps.** The infimum exists without a shortest path, as in the plane with the origin removed. Constant paths, reversed paths and the straight-line lower bound give zero self-distance, symmetry and positivity (our own). Joining two nearly shortest paths gives the triangle inequality, and connectedness makes every distance finite (our own).

**Wikipedia:** [Intrinsic metric](https://en.wikipedia.org/wiki/Intrinsic_metric). It says: “The Euclidean plane with the origin removed is not geodesic, but is still a length metric space.”

**Sources:** none listed. No primary source with a working link was found.

### Curvature as a Jacobian tells when the Gauss map inverts

**Remember:** Nonzero curvature makes the normal a local coordinate.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** The Gauss map sends each point of an oriented surface to its unit normal on the sphere. Gaussian curvature is the determinant of the derivative of this map, from the tangent plane at the point to the parallel tangent plane of the sphere.

**Problem.** The Gauss map of a smooth oriented surface is smoothly invertible near a point exactly when Gaussian curvature is nonzero there.

**How the definition helps.** By the inverse function theorem, a nonzero determinant makes the Gauss map locally smoothly invertible (our own). Conversely, a smooth local inverse makes the derivative invertible by the chain rule (our own). Showing that this determinant is the product of the principal curvatures is separate work (our own).

**Wikipedia:** [Gauss map](https://en.wikipedia.org/wiki/Gauss_map). It says: “determinant of the Gauss map is equal to Gaussian curvature”

**Sources:** none listed. No primary source with a working link was found.

### Defining the normal as a distance gradient makes its derivative symmetric

**Remember:** A normal defined as a gradient has a symmetric derivative.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces), 26B05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Near a smooth surface, the signed distance is the distance to the surface, positive on one side and negative on the other. The extended unit normal is its gradient, so the derivative of the normal is the Hessian of the signed distance.

**Problem.** The derivative of the extended unit normal to a smooth surface is symmetric wherever the signed distance is smooth.

**How the definition helps.** A Hessian is symmetric by the equality of mixed partial derivatives. Restricted to tangent vectors, this derivative is the shape operator up to sign, so the shape operator is symmetric too (our own). The geometric step is that the gradient of signed distance is the unit normal on the surface (our own).

**Paper or page:** [Orthogonal signed-distance coordinates and vector calculus near evolving curves and surfaces](https://arxiv.org/abs/2302.02891v2). It says: “The gradient of the normal is the Hessian of the signed-distance function, which is a necessarily symmetric 2-tensor,”

**Sources:**

- [Eric W. Hester, Geoffrey M. Vasil, Orthogonal signed-distance coordinates and vector calculus near evolving curves and surfaces, arXiv:2302.02891v2 (2023), Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences 479, no. 2277 (2023): 20230080](https://arxiv.org/abs/2302.02891v2)

### Frame rotation measures parallel transport around a disk

**Remember:** The turn around the rim adds up the curvature inside.

*True by definition. Confidence: medium.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** Choose a smooth positively ordered orthonormal tangent frame e, f on a surface patch. The connection form ω measures how fast e turns toward f along each tangent vector v, as ω(v) = f · D<sub>v</sub> e, and the curvature form is −dω.

**Problem.** Around the positively oriented boundary of a smooth disk, parallel transport rotates each nonzero tangent vector by the disk’s integrated Gaussian curvature, modulo 2π.

**How the definition helps.** Measured against the frame, a parallel vector turns at rate −ω, so its total turn around the boundary is the integral of −ω (our own). Stokes’ theorem makes this the integral of −dω over the disk (our own). The real work is the Gauss equation, which identifies −dω with Gaussian curvature times the area element (our own).

**Wikipedia:** [Parallel transport](https://en.wikipedia.org/wiki/Parallel_transport). It says: “The angle by which it twists, α, is proportional to the area inside the loop.”

**Sources:** none listed. No primary source with a working link was found.

### Gaussian curvature as the Gauss map Jacobian makes total curvature a degree

**Remember:** Integrate the normal map's area scaling to count its degree.

*True by definition. Confidence: medium.* MSC 53A05 (Surfaces in Euclidean and related spaces), 55M25. arXiv math.DG. Level 2: later undergraduate.

**Definition.** For an oriented surface in ℝ³, Gaussian curvature is the Jacobian of the unit normal map to the sphere, the signed factor by which that map scales area.

**Problem.** A closed oriented surface immersed in ℝ³ has total Gaussian curvature equal to 4π times the degree of its unit normal map.

**How the definition helps.** Total curvature is then the integral of the pulled-back area form of the sphere, which equals the degree times the sphere's area 4π. The work moves to the degree formula for integrals of pulled-back forms (our own comparison). Agreement with the product of principal curvatures holds because the derivative of the normal map is minus the shape operator (our own).

**Wikipedia:** [Gauss map](https://en.wikipedia.org/wiki/Gauss_map). It says: “The Jacobian determinant of the Gauss map is equal to Gaussian curvature”

**Sources:** none listed. No primary source with a working link was found.

### Geodesic energy makes Clairaut’s relation a conservation law

**Remember:** When energy ignores the rotation angle, its momentum stays fixed.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** Geodesics of constant speed are the critical points of energy, half the integral of speed squared, among paths with fixed endpoints. On a surface of revolution, with meridian distance u, rotation angle φ and distance ρ(u) from the axis, the energy integrand ½(u′² + ρ²φ′²) does not involve φ.

**Problem.** Along a unit-speed geodesic on a surface of revolution away from its axis, ρ sin ψ stays constant. Here ψ is the signed angle from the meridian to the geodesic tangent.

**How the definition helps.** Since the integrand does not involve φ, the Euler–Lagrange equation for φ says that ρ²φ′ is constant (our own). At unit speed, ρφ′ is the velocity component along the parallel, which is sin ψ (our own), so ρ sin ψ is constant. That critical points of energy are geodesics is the first variation formula (our own).

**Wikipedia:** [Clairaut's relation (differential geometry)](https://en.wikipedia.org/wiki/Clairaut%27s_relation_%28differential_geometry%29). It says: “ρ sin ψ is constant along γ.”

**Sources:** none listed. No primary source with a working link was found.

### Inversion makes stereographic projection preserve angles

**Remember:** Inversion stretches every direction equally, so angles survive.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** Define stereographic projection from the pole N of the unit sphere as the inversion centred at N that sends each point P ≠ N to N + 2(P − N)/\|P − N\|². An inversion stretches all directions at a point by the same factor, up to a reflection (our own).

**Problem.** Stereographic projection preserves angles between smooth regular curves crossing away from the projection pole.

**How the definition helps.** The derivative of an inversion is a reflection times a positive scale, and both keep angles (our own). This inversion maps the sphere minus N onto the equatorial plane, and P and its image lie on one line through N, so it is the usual projection (our own).

**Wikipedia:** [Stereographic projection](https://en.wikipedia.org/wiki/Stereographic_projection). It says: “Stereographic projection is conformal, meaning that it preserves the angles at which curves cross each other”

**Sources:** none listed. No primary source with a working link was found.

### Normal acceleration picks out the great circles on a sphere

**Remember:** On a sphere, geodesics accelerate straight toward the centre.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A geodesic on a smooth surface in space is a parametrized curve whose acceleration is perpendicular to the tangent plane. On a round sphere this means the acceleration points along the radius.

**Problem.** The nonconstant geodesics of a round sphere are great circles or arcs of great circles, with constant speed.

**How the definition helps.** Radial acceleration keeps the cross product of position from the centre and velocity constant, so a nonconstant geodesic stays in the plane through the centre perpendicular to that vector (our own). Acceleration perpendicular to velocity gives constant speed, and conversely a great circle at constant speed has radial acceleration (our own).

**nLab:** [geodesic](https://ncatlab.org/nlab/show/geodesic). It says: “on a 2-dimensional sphere, geodesics are arcs of great circles.”

**Sources:** none listed. No primary source with a working link was found.

### Normal projection gives Meusnier’s theorem for surface curves

**Remember:** Normal curvature reads only how the normal turns along the tangent.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a unit-speed curve γ on a surface with unit normal n, the normal curvature is γ″·n, the part of the acceleration along n. Since γ′·n = 0 along the curve, it equals −v·Dn(v), where v = γ′ and Dn(v) is the derivative of n along v (our own).

**Problem.** Two smooth unit-speed curves through the same surface point with the same tangent line have the same normal curvature. It is the signed curvature of the normal section, the curve cut by the plane through n and that tangent line.

**How the definition helps.** The expression −v·Dn(v) depends only on v, and replacing v by −v leaves it unchanged (our own). The normal section accelerates along n, so its normal curvature is its signed curvature (our own).

**Wikipedia:** [Meusnier's theorem](https://en.wikipedia.org/wiki/Meusnier%27s_theorem). It says: “having the same tangent line at p also have the same normal curvature at p”

**Sources:** none listed. No primary source with a working link was found.

### One scalar in the shape operator forces a plane or sphere

**Remember:** At an umbilic point the normal turns equally in every direction.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A point is umbilic when the shape operator, the negative derivative of the unit normal, is multiplication by one number λ. So moving the point by a tangent vector v moves the normal by −λv (our own).

**Problem.** A connected smooth oriented surface whose every point is umbilic lies in a plane or a sphere.

**How the definition helps.** In a chart, equal mixed derivatives and the independence of the two coordinate tangent vectors force both derivatives of λ to vanish, so λ is constant on the connected surface (our own). If λ = 0 the normal is fixed and the surface lies in a plane (our own). Otherwise position plus n/λ is constant, the centre of a sphere of radius 1/\|λ\| (our own).

**Wikipedia:** [Umbilical point](https://en.wikipedia.org/wiki/Umbilical_point). It says: “The sphere is the only surface with non-zero curvature where every point is umbilic.”

**Sources:** none listed. No primary source with a working link was found.

### Projecting acceleration makes the two curvatures add in squares

**Remember:** Acceleration splits into surface part and normal part at right angles.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a unit-speed curve on a surface, split its acceleration into the part in the tangent plane and the part along the normal. Geodesic curvature is the length of the first part, and normal curvature, up to sign, is the length of the second.

**Problem.** The square of the ordinary curvature of a unit-speed surface curve equals the sum of the squares of its geodesic and normal curvatures.

**How the definition helps.** The two parts are perpendicular, so by Pythagoras their squared lengths add to the squared length of the acceleration (our own). At unit speed that length is the ordinary curvature (our own).

**Wikipedia:** [Geodesic curvature](https://en.wikipedia.org/wiki/Geodesic_curvature). It says: “the geodesic curvature is the norm of the projection of the covariant derivative”

**Sources:** none listed. No primary source with a working link was found.

### Tangential projection makes parallel transport preserve dot products

**Remember:** Parallel fields change only along the normal, invisible to tangent dot products.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A tangent vector field along a surface curve is parallel when its ordinary derivative in space points along the surface normal, that is, has zero tangential part.

**Problem.** Two parallel tangent vector fields along a smooth surface curve keep the same dot product. Thus parallel transport preserves lengths and angles.

**How the definition helps.** The derivative of the dot product of two such fields is a sum of terms that each pair a normal vector with a tangent vector, so it is zero (our own).

**nLab:** [Levi-Civita connection](https://ncatlab.org/nlab/show/Levi-Civita+connection). It says: “which is equivalent to the preservation of the metric inner product of tangent vectors under parallel translation.”

**Sources:** none listed. No primary source with a working link was found.

### The first fundamental form measures all curve lengths and angles

**Remember:** Keep the tangent dot product and keep lengths and angles.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A smooth map between surfaces is a local isometry when its derivative keeps the dot product of tangent vectors, the first fundamental form. So it keeps the speed of every curve and the angle between any two velocities (our own).

**Problem.** A local isometry of regular surfaces preserves the lengths of curves and the angles at which curves meet.

**How the definition helps.** By the chain rule the derivative sends each velocity to the velocity of the image curve (our own). Length is the integral of speed, and the angle between curves comes from the dot product of their unit tangents (our own).

**Wikipedia:** [First fundamental form](https://en.wikipedia.org/wiki/First_fundamental_form). It says: “metric properties of a surface such as length and area”

**Sources:** none listed. No primary source with a working link was found.

### The geodesic equation lets initial velocity determine the path

**Remember:** Normal acceleration is a second-order equation; start point and velocity decide.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** On a smooth surface in space, a geodesic is a parametrized curve whose acceleration is perpendicular to the tangent plane. In a chart this says the coordinates solve a smooth second-order differential equation (our own).

**Problem.** On a smooth surface, a point and an initial tangent vector determine a unique local geodesic.

**How the definition helps.** The existence and uniqueness theorem for smooth second-order differential equations gives exactly one local solution for each starting point and starting velocity.

**Wikipedia:** [Geodesic](https://en.wikipedia.org/wiki/Geodesic). It says: “It has a unique solution, given an initial position and an initial velocity.”

**Sources:** none listed. No primary source with a working link was found.

### The induced metric gives the area of a surface patch

**Remember:** EG minus F squared is the squared area of the tangent parallelogram.

*Makes the theorem clean to state or prove.* MSC 53A05 (Surfaces in Euclidean and related spaces), 58C35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** The induced metric measures tangent vectors of a surface by the dot product of the surrounding Euclidean space. For a chart, E and G are the squared lengths of the two coordinate tangent vectors and F is their dot product, so EG − F² is the squared area of the parallelogram they span (our own).

**Problem.** For a smooth one-to-one chart with independent coordinate tangent vectors, the surface area is the integral of √(EG − F²) over the parameter region.

**How the definition helps.** Base times height gives the parallelogram area √(EG − F²) from dot products alone, so it works in any ambient dimension (our own). Surface area integrates this local area factor over the parameter region (our own).

**nLab:** [volume form](https://ncatlab.org/nlab/show/volume+form). It says: “In local oriented coordinates, vol<sub>g</sub> = √\|det(g)\|, where det(g) is the determinant of the matrix of the coordinates of g.”

**Sources:** none listed. No primary source with a working link was found.

### The normal derivative tests whether a ruled surface develops flat

**Remember:** Rulings have zero normal curvature, so any twist makes curvature negative.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A ruled surface is swept out by straight lines called rulings. It is developable when its Gaussian curvature, the determinant of the shape operator, is zero; the normal curvature along a ruling is zero, because a line has no acceleration (our own).

**Problem.** A smooth regular ruled surface has nonpositive Gaussian curvature. It is developable exactly when its tangent plane stays fixed along each connected ruling.

**How the definition helps.** In a perpendicular unit basis with the ruling first, the symmetric shape operator has zero first diagonal entry, so its determinant is −a², with a the off-diagonal entry (our own). This is never positive, and it vanishes exactly when the normal does not change along the ruling, that is, when the tangent plane does not twist (our own).

**Wikipedia:** [Developable surface](https://en.wikipedia.org/wiki/Developable_surface). It says: “It is developable iff the tangent plane does not twist as you move along a ruling”

**Sources:** none listed. No primary source with a working link was found.

### The shape operator gives Euler’s formula for normal curvature

**Remember:** In principal directions the shape operator is diagonal, so no cross term.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** The shape operator S is the negative derivative of the unit normal, and the normal curvature in a unit direction v is v·Sv. S is symmetric, so it has a perpendicular basis of eigenvectors, the principal directions, whose eigenvalues are the principal curvatures.

**Problem.** Take a perpendicular unit basis of principal directions with curvatures κ₁ and κ₂. At angle θ from the first direction, the normal curvature is κ₁ cos² θ + κ₂ sin² θ.

**How the definition helps.** In the principal basis S is diagonal and v has components cos θ and sin θ, so v·Sv = κ₁cos²θ + κ₂sin²θ with no mixed term (our own).

**Wikipedia:** [Principal curvature](https://en.wikipedia.org/wiki/Principal_curvature). It says: “Without reference to a particular orthonormal basis, the principal curvatures are the eigenvalues of the shape operator, and the principal directions are its eigenvectors.”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic coordinates rule out closed minimal surfaces in space

**Remember:** A harmonic coordinate cannot peak inside unless it is constant.

*True by definition.* MSC 53A10 (Minimal surfaces in differential geometry, surfaces with prescribed mean curvature), 53A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Call a surface in ℝ³ minimal when its three position coordinates are harmonic functions on it, that is, solve the surface Laplace equation. Harmonic functions obey the maximum principle: one that attains a maximum on a connected surface is constant.

**Problem.** There is no nonempty smooth compact minimal surface without boundary in three-dimensional Euclidean space.

**How the definition helps.** On a compact component each coordinate attains its maximum, so all three are constant and the component is a single point, which is not a regular surface (our own). This agrees with the zero mean curvature definition, since the surface Laplacian of position is a multiple of the mean curvature vector (our own).

**Wikipedia:** [Minimal surface](https://en.wikipedia.org/wiki/Minimal_surface). It says: “there are no compact complete minimal surfaces in ℝ³”

**Sources:** none listed. No primary source with a working link was found.

### Zero mean curvature forces nonpositive Gaussian curvature

**Remember:** Opposite principal curvatures cannot have a positive product.

*True by definition.* MSC 53A10 (Minimal surfaces in differential geometry, surfaces with prescribed mean curvature), 53A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A minimal surface has zero mean curvature everywhere, so its two principal curvatures, the largest and smallest signed normal curvatures, are opposites κ and −κ (our own).

**Problem.** A minimal surface in three-dimensional Euclidean space has nonpositive Gaussian curvature. It is zero only where both principal curvatures vanish.

**How the definition helps.** Gaussian curvature is the product of the principal curvatures, here −κ² ≤ 0, and it is zero only when κ = 0 (our own).

**Wikipedia:** [Minimal surface](https://en.wikipedia.org/wiki/Minimal_surface). It says: “its mean curvature is equal to zero at all points.”

**Sources:** none listed. No primary source with a working link was found.

### The angular defect at the vertices is the curvature of a polyhedron

**Remember:** A vertex's defect is the wedge cut out to make a cone.

*Makes the theorem clean to state or prove.* MSC 53A70 (Discrete differential geometry), 51M20. arXiv math.DG, math.MG. Level 2: later undergraduate.

**Definition.** The angular defect at a vertex of a closed polyhedral surface is 2π minus the sum of the face angles there. It is the Gaussian curvature concentrated at that vertex, and the flat faces and edges carry none (our own).

**Problem.** On a polyhedral sphere the angular defects sum to 4π. On any closed polyhedral surface they sum to 2π times its Euler characteristic.

**How the definition helps.** Triangulate the faces, which keeps the defects, and count V vertices, E edges and F triangles; the triangle angles sum to πF, so the total defect is 2πV − πF (our own). Each edge lies on two triangles, so 3F = 2E and the total is 2π(V − E + F). A sphere has Euler characteristic 2.

**Wikipedia:** [Angular defect](https://en.wikipedia.org/wiki/Angular_defect). It says: “the integral of curvature at a vertex is equal to the defect there (by definition).”

**Sources:** none listed. No primary source with a working link was found.

### Asking for zero torsion and a preserved metric gives exactly one connection

**Remember:** Keep lengths, twist nothing, and the connection is forced.

*Makes the theorem clean to state or prove.* MSC 53B05 (Linear and affine connections), 53B20. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A connection is metric-compatible when differentiating an inner product obeys the product rule, X(g(Y,Z)) = g(∇ₓY,Z) + g(Y,∇ₓZ). It is torsion-free when ∇ₓY − ∇ᵧX = \[X,Y\], the Lie bracket. Together the two rules let one solve for g(∇ₓY,Z) from g and brackets alone (our own).

**Problem.** On any Riemannian manifold there is exactly one affine connection that is torsion-free and metric-compatible, the Levi-Civita connection.

**How the definition helps.** Cycling X, Y and Z in the product rule and using zero torsion gives the Koszul formula for 2g(∇ₓY,Z) (our own). Nondegeneracy of g then fixes ∇ₓY. Conversely the Koszul formula defines a connection with both properties (our own).

**Wikipedia:** [Fundamental theorem of Riemannian geometry](https://en.wikipedia.org/wiki/Fundamental_theorem_of_Riemannian_geometry), [Levi-Civita connection](https://en.wikipedia.org/wiki/Levi-Civita_connection). It says: “on any Riemannian manifold (or pseudo-Riemannian manifold) there is a unique affine connection that is torsion-free and metric-compatible, called the Levi-Civita connection”

**Sources:**

- [T. Levi-Civita, Nozione di parallelismo in una varietà qualunque e conseguente specificazione geometrica della curvatura riemanniana, Rendiconti del Circolo Matematico di Palermo 42 (1917) 173–204](https://doi.org/10.1007/BF03014898)

### Counting corner turns as curvature extends Gauss–Bonnet to polygons

**Remember:** A corner is just a curve that turns all at once.

*Makes the theorem clean to state or prove.* MSC 53B20 (Local Riemannian geometry), 53C21. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Orient a piecewise smooth regular boundary with the surface on its left. Its total geodesic curvature is the integral of signed geodesic curvature along smooth arcs plus the sum of signed exterior turning angles at corners.

**Problem.** For a compact oriented Riemannian surface with piecewise smooth regular boundary, integrated Gaussian curvature plus total boundary geodesic curvature equals 2π times its Euler characteristic. For a geodesic triangle bounding a disk, the interior angle sum is π plus the integrated Gaussian curvature inside.

**How the definition helps.** The signed corner terms let Gauss–Bonnet cover smooth boundaries and polygons in one formula (our own). On a geodesic triangle the smooth sides contribute zero, and each corner contributes π minus its interior angle. The disk has Euler characteristic one, giving the angle sum.

**Wikipedia:** [Gauss–Bonnet theorem](https://en.wikipedia.org/wiki/Gauss%E2%80%93Bonnet_theorem). It says: “plus the sum of the angles by which the smooth portions turn at the corners of the boundary.”

**Sources:** none listed. No primary source with a working link was found.

### Defining Gaussian curvature intrinsically makes it invariant under local isometries

**Remember:** Curvature built from the metric alone travels with every isometry.

*True by definition.* MSC 53B20 (Local Riemannian geometry), 53A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Define the Gaussian curvature of a surface as the sectional curvature of its Levi-Civita connection, which the metric alone determines.

**Problem.** A local isometry between surfaces in Euclidean three-space preserves the product of their principal curvatures.

**How the definition helps.** A local isometry preserves the metric, so it preserves the Levi-Civita connection and its curvature (our own argument). The Gauss equation, which equates this curvature with the product of the principal curvatures, does the remaining work.

**Wikipedia:** [Theorema Egregium](https://en.wikipedia.org/wiki/Theorema_Egregium). It says: “The Gaussian curvature of a surface is invariant under local isometry.”

**Sources:** none listed. No primary source with a working link was found.

### Hopf and Rinow showed the competing meanings of complete surface agree

**Remember:** Complete in distance, in compactness, or in geodesics, it is one notion.

*Makes the theorem clean to state or prove.* MSC 53C22 (Geodesics in global differential geometry), 53C21. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A connected Riemannian manifold is metrically complete if every Cauchy sequence for its Riemannian distance converges in the manifold.

**Problem.** On a connected finite-dimensional Riemannian manifold without boundary, metric completeness, compactness of every closed bounded set, and geodesic completeness are equivalent. Under these conditions a shortest geodesic joins any two points.

**How the definition helps.** The Hopf–Rinow theorem proves the equivalences and the existence of shortest geodesics. The metric definition names the condition that is easiest to check, for example on every compact manifold (our own).

**Wikipedia:** [Hopf–Rinow theorem](https://en.wikipedia.org/wiki/Hopf%E2%80%93Rinow_theorem). It says: “Let (M, g) be a connected and smooth Riemannian manifold without boundary. Then the following statements are equivalent”

**Sources:**

- [H. Hopf and W. Rinow, Ueber den Begriff der vollständigen differentialgeometrischen Fläche, Commentarii Mathematici Helvetici 3 (1931) 209–225](https://doi.org/10.1007/BF01601813)
- [C. J. Atkin, The Hopf–Rinow theorem is false in infinite dimensions, Bulletin of the London Mathematical Society 7 (1975) 261–266](https://doi.org/10.1112/blms/7.3.261)

### Minimizing energy instead of length picks out constant-speed geodesics

**Remember:** Length forgives any pace; energy insists on a steady one.

*Makes the theorem clean to state or prove.* MSC 53C22 (Geodesics in global differential geometry), 58E10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a piecewise smooth path γ on \[a,b\], its length L = ∫\|γ′\| dt ignores the pace, but its energy E = ½∫\|γ′\|² dt penalizes uneven speed. Precisely, L² ≤ 2(b − a)E, with equality exactly at constant speed (our own).

**Problem.** Among paths between fixed endpoints on a fixed interval \[a,b\] with a &lt; b, energy minimizers are precisely constant-speed length minimizers. They satisfy the geodesic equation.

**How the definition helps.** So an energy minimizer must have constant speed and least length, since a shorter path reparametrized at constant speed would have less energy (our own argument). Conversely a constant-speed length minimizer attains the least energy. The Euler–Lagrange equation of energy is the geodesic equation.

**Wikipedia:** [Geodesic](https://en.wikipedia.org/wiki/Geodesic). It says: “paths that are minima of L can be arbitrarily re-parameterized (without changing their length), while minima of E cannot.”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy slices exclude loops

**Remember:** A clock that repeats a loop cannot visit a slice just once.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics). arXiv gr-qc. Level 2: later undergraduate.

**Definition.** A Cauchy surface is an embedded hypersurface that every inextendible timelike curve crosses at exactly one parameter value.

**Problem.** A spacetime with a Cauchy surface has no closed future-directed timelike path.

**How the definition helps.** Running a closed timelike loop forever gives an inextendible timelike curve that meets the surface at no parameter value or at infinitely many (our own proof). For example, make time periodic in flat spacetime: a stationary clock crosses each constant-time slice once per period (our own example).

**nLab:** [Cauchy surface](https://ncatlab.org/nlab/show/Cauchy+surface). It says: “a Cauchy surface is an embedded submanifold Σ ↪︎ X such that every timelike curve in X may be extended to a timelike curve that intersects Σ precisely in one point.”

**Sources:**

- [Robert Geroch (1970), Domain of Dependence](https://doi.org/10.1063/1.1665157)

### Minimal surfaces as real parts of null curves give isometric associate families

**Remember:** Rotate the complex phase; the derivative stays null and the same size.

*True by definition. Confidence: medium.* MSC 53A10 (Minimal surfaces in differential geometry, surfaces with prescribed mean curvature), 58E12. arXiv math.DG. Level 3: graduate.

**Definition.** Describe a conformal minimal surface in ℝ³ as the real part of a holomorphic curve F whose derivative is nonzero and null, meaning the squares of its three components sum to zero. The metric is then \|F′\|²/2 times the flat metric, so it depends only on the size of F′ (our own).

**Problem.** Every conformal minimal immersion of a simply connected domain into ℝ³ belongs to a one-parameter family of isometric minimal immersions. On the catenoid’s universal cover, this family connects its lifted immersion to the helicoid.

**How the definition helps.** Multiplying F by a complex number of modulus one keeps F′ null and keeps \|F′\|, so its real part is an isometric conformal minimal immersion (our own argument). The Weierstrass representation shows that real parts of null curves are exactly the conformal minimal immersions, and simple connectivity lets one integrate F′ globally. Multiplying by i turns the lifted catenoid into the helicoid.

**Paper or page:** [Loop Weierstrass Representation](https://arxiv.org/abs/2411.04626). It says: “is a conformal, minimal immersion into Euclidean space.”

**Sources:** none listed. No primary source with a working link was found.

### Defining divergence by the Lie derivative of volume gives div\[X,Y\] directly

**Remember:** Divergence is how fast a flow scales volume.

*True by definition. Confidence: medium.* MSC 53A45 (Differential geometric aspects in vector and tensor analysis), 58A10. arXiv math.DG. Level 3: graduate.

**Definition.** Fix a volume form μ on a smooth manifold. The divergence of a vector field X is the rate at which its flow scales μ, the function div X with ℒ(X)μ = (div X)μ.

**Problem.** For a fixed volume form and vector fields X and Y, div\[X,Y\] = X(div Y) − Y(div X).

**How the definition helps.** Lie derivatives satisfy ℒ(\[X,Y\]) = ℒ(X)ℒ(Y) − ℒ(Y)ℒ(X), and by the product rule ℒ(X)((div Y)μ) = X(div Y)μ + (div Y)(div X)μ (our own calculation). Subtracting the same term with X and Y swapped cancels the product of the divergences.

**Wikipedia:** [Divergence](https://en.wikipedia.org/wiki/Divergence). It says: “The divergence can be defined in terms of the Lie derivative as”

**Sources:** none listed. No primary source with a working link was found.

### Defining torsion as Dθ makes the first Bianchi identity one differentiation

**Remember:** Torsion is D of the identity; differentiate again to get curvature.

*True by definition. Confidence: medium.* MSC 53B05 (Linear and affine connections), 53C05. arXiv math.DG. Level 3: graduate.

**Definition.** The solder form θ is the identity map of the tangent bundle, viewed as a one-form with tangent-vector values. Define the torsion as Θ = Dθ, its exterior covariant derivative, which equals the usual ∇<sub>X</sub> Y − ∇<sub>Y</sub> X − \[X,Y\] (our own).

**Problem.** Let R be the curvature of a connection on the tangent bundle. If the torsion is zero, then R(X,Y)Z + R(Y,Z)X + R(Z,X)Y = 0 for all vector fields X, Y and Z.

**How the definition helps.** Applying D again gives DΘ = D²θ = Ω ∧ θ, where Ω is the curvature form. Zero torsion makes Ω ∧ θ vanish, and evaluating it on X, Y and Z gives the cyclic sum (our own calculation).

**Wikipedia:** [Torsion tensor](https://en.wikipedia.org/wiki/Torsion_tensor). It says: “the TM-valued one-form θ on M corresponding to the identity endomorphism of the tangent bundle”

**Sources:** none listed. No primary source with a working link was found.

### Square roots turn Fisher–Rao distance into a spherical angle calculation

**Remember:** Take square roots, then measure the angle on the sphere.

*True by definition.* MSC 53B12 (Differential geometric aspects of statistical manifolds and information geometry), 62B11. arXiv math.ST, math.DG. Level 3: graduate.

**Definition.** The Fisher metric on positive probability vectors gives a small change dp the squared length Σ dpᵢ²/pᵢ. The map p ↦ (2√p₁, …, 2√pₙ) turns this into ordinary length on the sphere of radius 2, since (d(2√pᵢ))² = dpᵢ²/pᵢ (our own).

**Problem.** For positive probability vectors p and q, the Fisher–Rao distance, the shortest path length in the Fisher metric, is 2·arccos(Σ√(pᵢqᵢ)).

**How the definition helps.** So the Fisher–Rao distance is arc length on that sphere, which is 2 times the angle between √p and √q, whose cosine is Σ√(pᵢqᵢ) (our own). The shorter great-circle arc stays in the positive part, since its points are positive combinations of the endpoints (our own).

**Wikipedia:** [Fisher information metric](https://en.wikipedia.org/wiki/Fisher_information_metric). It says: “That is, the Fisher information metric on a statistical manifold is simply (four times) the Euclidean metric restricted to the positive orthant of the sphere, after appropriate changes of variable.”

**Sources:** none listed. No primary source with a working link was found.

### Characterizing the Levi-Civita connection by two conditions makes isometries preserve it

**Remember:** Move the metric and the unique compatible torsion-free connection follows.

*True by definition. Confidence: medium.* MSC 53B20 (Local Riemannian geometry). arXiv math.DG. Level 3: graduate.

**Definition.** The Levi-Civita connection is the unique connection on a Riemannian tangent bundle that preserves the metric and has zero torsion.

**Problem.** Let f be an isometry between Riemannian manifolds. Then f carries the Levi-Civita connection of the source to that of the target.

**How the definition helps.** An isometry transports the connection to another metric-preserving connection (our own argument). It preserves Lie brackets, so the transported connection also has zero torsion. Uniqueness identifies it with the target’s Levi-Civita connection.

**nLab:** [Levi-Civita connection](https://ncatlab.org/nlab/show/Levi-Civita+connection). It says: “the unique symmetric connection on the tangent bundle of a Riemannian manifold”

**Sources:** none listed. No primary source with a working link was found.

### Defining totally geodesic by geodesics makes isometry fixed sets totally geodesic

**Remember:** Fix a point and direction, and the isometry fixes the geodesic.

*True by definition.* MSC 53B25 (Local submanifolds), 53C22. arXiv math.DG. Level 3: graduate.

**Definition.** Call a submanifold totally geodesic when each of its own geodesics is also a geodesic of the ambient manifold.

**Problem.** Each connected component of the fixed set of an isometry of a Riemannian manifold is a totally geodesic submanifold.

**How the definition helps.** An isometry maps geodesics to geodesics, so the ambient geodesic from a fixed point with a fixed velocity is fixed pointwise and lies in the fixed set (our own argument). An ambient geodesic inside a submanifold is a geodesic of it, and uniqueness makes these all its geodesics (our own). Exponential coordinates show that the fixed set is a submanifold (our own).

**nLab:** [totally geodesic submanifold](https://ncatlab.org/nlab/show/totally+geodesic+submanifold). It says: “If in addition X is equipped with a Riemannian metric and G acts by isometries then the submanifold Xᴳ is a totally geodesic submanifold.”

**Sources:** none listed. No primary source with a working link was found.

### Chern–Simons transgressions add modulo exact forms

**Remember:** Modulo exact forms only the endpoints matter, so paths concatenate.

*True by definition.* MSC 53C05 (Connections (general theory)), 57R20. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** Join two connections by a smooth path and form the cylinder connection with zero component along the interval. The Chern–Simons transgression is the integral of its Chern character form over the interval, taken modulo exact forms, so it does not depend on the path.

**Problem.** Transgression from a first connection to a second and then to a third adds to the direct transgression between the first and third.

**How the definition helps.** Integrating along two consecutive paths adds their forms, and modulo exact forms the joined path gives the same class as the direct one. In our own proof, Stokes’ theorem on a triangle of connections makes the difference exact.

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “This is indeed well defined in that it is independent of the chosen concordance, up to an exact term.”

**Sources:**

- [James Simons and Dennis Sullivan, Structured vector bundles define differential K-theory, §1](https://www.math.stonybrook.edu/~dennis/publications/PDF/DS-pub-0126.pdf)

### Connections as horizontal subbundles make zero curvature mean integrability

**Remember:** Flat means the horizontal planes fit together into sheets.

*True by definition.* MSC 53C05 (Connections (general theory)), 58A30. arXiv math.DG. Level 3: graduate.

**Definition.** An Ehresmann connection on a smooth fibre bundle is a field of horizontal planes, a smooth subbundle complementary to the vertical tangent bundle. Its curvature takes two horizontal vector fields to the vertical part of their Lie bracket, so it measures how far the planes fail to be closed under bracket.

**Problem.** An Ehresmann connection on any fibre bundle is flat, meaning that a local horizontal section passes through every point, exactly when its curvature is zero.

**How the definition helps.** Zero curvature says the horizontal planes are closed under Lie bracket, so the Frobenius theorem gives local leaves tangent to them. These leaves are the local horizontal sections.

**Wikipedia:** [Ehresmann connection](https://en.wikipedia.org/wiki/Ehresmann_connection). It says: “Thus the curvature is the integrability condition for the horizontal subbundle to yield transverse sections of the fiber bundle E → M.”

**Sources:**

- [C. Ehresmann, Les connexions infinitésimales dans un espace fibré différentiable, Colloque de Topologie, Bruxelles (1950) 29–55](https://ehres.pagesperso-orange.fr/C.E.WORKS_fichiers/Ehresmann_C.-Oeuvres_I-1_et_I-2.pdf)

### Curvature as the squared covariant derivative satisfies Bianchi’s identity

**Remember:** Curvature is D twice, and D commutes with D squared.

*True by definition.* MSC 53C05 (Connections (general theory)), 81T13. arXiv math.DG, hep-th. Level 3: graduate.

**Definition.** A connection gives an exterior covariant derivative D on forms with values in a bundle. Define its curvature F as D applied twice, F = D², which acts as multiplication by a two-form with values in linear maps (our own).

**Problem.** The second Bianchi identity says DF = 0, where the derivative here acts on the form with values in linear maps.

**How the definition helps.** On forms with values in linear maps, DF is the commutator D∘D² − D²∘D, and both terms equal D³, so it is zero (our own). The work is showing that D² is multiplication by a form and that its induced derivative is this commutator (our own).

**nLab:** [Bianchi identity](https://ncatlab.org/nlab/show/Bianchi+identity). It says: “It can be thought of as generalizing the equation d(dA) = 0 for a real-valued 1-form A to higher degree and nonabelian forms.”

**Wikipedia:** [Exterior covariant derivative](https://en.wikipedia.org/wiki/Exterior_covariant_derivative). It says: “The curvature of a connection on a vector bundle may be defined as the composition of the two exterior covariant derivatives”

**Sources:** none listed. No primary source with a working link was found.

### If the field is a connection, magnetic charge is an integer

**Remember:** Flux through a sphere counts how a circle bundle twists.

*True by definition.* MSC 53C05 (Connections (general theory)), 81T13, 55R40. arXiv math-ph, math.DG. Level 3: graduate.

**Definition.** Away from the magnetic charges, model the electromagnetic field as a connection on a principal U(1)-bundle, with real curvature F and electric charge 1. The magnetic charge inside an oriented sphere S is ∫ₛ F/(2π), which is the first Chern number of the bundle over S (our own).

**Problem.** Dirac charge quantization holds: in units where the electric charge is 1, the magnetic charge is an integer.

**How the definition helps.** The first Chern number of a circle bundle over a sphere is an integer, so the magnetic charge is an integer (our own argument).

**nLab:** [Dirac charge quantization](https://ncatlab.org/nlab/show/Dirac+charge+quantization), [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology). It says: “Equivalently this means that the electromagnetic field is a cocycle in ordinary differential cohomology of degree 2.”

**Sources:**

- [P. A. M. Dirac, Quantised Singularities in the Electromagnetic Field, Proc. Roy. Soc. A 133 (1931) 60–72](https://doi.org/10.1098/rspa.1931.0130)
- [Daniel S. Freed, Dirac Charge Quantization and Generalized Differential Cohomology, Surveys in Differential Geometry 7 (2000) 129–194, arXiv:hep-th/0011220](https://arxiv.org/abs/hep-th/0011220)

### A curvature split bounds energy

**Remember:** The unwanted part of curvature is exactly the excess energy.

*True by definition.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** On a closed oriented Riemannian four-manifold, the Hodge star splits the curvature F of a connection on an SU(n) bundle into parts F₊ and F₋ with eigenvalues +1 and −1. The connection is anti-self-dual when F₊ = 0. Its energy ∫\|F\|² equals a bundle constant plus 2∫\|F₊\|² (our own).

**Problem.** If the bundle admits an anti-self-dual connection, its absolute energy minimizers are exactly its anti-self-dual connections.

**How the definition helps.** So the energy is at least that constant, with equality exactly when F₊ = 0 (our own proof). Chern–Weil theory makes ∫(\|F₋\|² − \|F₊\|²) depend only on the bundle.

**nLab:** [Yang-Mills instanton](https://ncatlab.org/nlab/show/Yang-Mills+instanton). It says: “In SU(n)-Yang-Mills theory an instanton is a field configuration with non-vanishing second Chern class that minimizes the Yang-Mills energy.”

**Wikipedia:** [Instanton](https://en.wikipedia.org/wiki/Instanton). It says: “Instantons are topologically nontrivial solutions of Yang–Mills equations that absolutely minimize the energy functional within their topological type.”

**Sources:**

- [Michael F. Atiyah, Nigel J. Hitchin and Isadore M. Singer, Self-duality in four-dimensional Riemannian geometry](https://doi.org/10.1098/rspa.1978.0143)

### A frame removes gauge stabilizers

**Remember:** Fix one point and parallel transport fixes all the rest.

*Rules out counterexamples.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Choose a point p in one fibre of a principal bundle. The based gauge group consists of the gauge transformations, equivariant bundle automorphisms covering the identity, that fix p.

**Problem.** On a connected base, the based gauge group acts freely on the space of smooth connections.

**How the definition helps.** A gauge transformation that preserves a connection commutes with its parallel transport, so fixing p makes it fix a transported point over every point of the connected base, and equivariance makes it the identity (our own proof). The full gauge group need not act freely, since constant gauge transformations preserve the product connection on a trivial bundle.

**nLab:** [parallel transport](https://ncatlab.org/nlab/show/parallel+transport). It says: “This means that we may identify connections on P with their parallel transport functors.”

**Sources:** none listed. No primary source with a working link was found.

### Anti-self-dual connections satisfy Yang–Mills

**Remember:** Flip the curvature and let the Bianchi identity do the rest.

*True by definition.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** On an oriented Riemannian four-manifold, a connection with compact structure group is anti-self-dual when its curvature F satisfies ⋆F = −F, where ⋆ is the Hodge star on two-forms. Then the Yang–Mills equation dₐ⋆F = 0 reads −dₐF = 0 (our own).

**Problem.** Every smooth anti-self-dual connection is a Yang–Mills connection.

**How the definition helps.** The Bianchi identity dₐF = 0 holds for every connection, where dₐ differentiates forms using the connection. So the first-order anti-self-dual condition implies the second-order Yang–Mills equation (our own).

**nLab:** [Yang-Mills equation](https://ncatlab.org/nlab/show/Yang-Mills+equation). It says: “The Bianchi identity dₐFₐ = 0 and the Yang-Mills equation δₐFₐ = 0 combine to:”

**Sources:**

- [Michael F. Atiyah, Nigel J. Hitchin and Isadore M. Singer, Self-duality in four-dimensional Riemannian geometry](https://doi.org/10.1098/rspa.1978.0143)

### Coulomb gauge restores Hessian ellipticity

**Remember:** Coulomb gauge fills the symbol direction that gauge symmetry leaves empty.

*Rules out counterexamples. Confidence: medium.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** At a smooth Yang–Mills connection A, let H linearize the Yang–Mills equation. Gauge symmetry makes H degenerate in the gauge directions, which Coulomb gauge dₐ\*a = 0 removes, with dₐ\* the adjoint of dₐ. The gauge-fixed Hessian H + dₐdₐ\* acts on all variations.

**Problem.** On a closed Riemannian manifold of positive dimension with positive-dimensional compact structure group, the gauge-fixed operator is elliptic. Its principal symbol, which records its highest derivatives, equals \|ξ\|² times the identity at every nonzero covector ξ.

**How the definition helps.** At a nonzero covector ξ, the symbol of H is \|ξ\|² on variations perpendicular to ξ and zero on parallel ones (our own proof). The symbol of dₐdₐ\* is \|ξ\|² on parallel variations and zero on perpendicular ones. Their sum is \|ξ\|² times the identity.

**nLab:** [Coulomb gauge](https://ncatlab.org/nlab/show/Coulomb+gauge). It says: “Then A is said to be in Coulomb gauge relative to A₀ if”

**Paper or page:** [Compactness for Ω-Yang-Mills connections](https://arxiv.org/abs/2106.09131). It says: “then A is gauge equivalent to a connection (also denoted A) satisfying:”

**Sources:** none listed. No primary source with a working link was found.

### Cylinder instantons follow Chern–Simons flow

**Remember:** Remove the time component and duality becomes flow.

*Makes the theorem clean to state or prove.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** On an interval times a closed oriented Riemannian three-manifold, with product metric and pulled-back SU(2) bundle, temporal gauge means the connection has no time component. Such a connection is a path A(t) of spatial connections, whose curvature is Fₐ on each slice plus a mixed part built from ∂ₜA (our own). Normalize Chern–Simons so its L² gradient is ⋆Fₐ.

**Problem.** With time first in the product orientation, a connection in temporal gauge is anti-self-dual exactly when its path follows negative Chern–Simons gradient flow.

**How the definition helps.** Anti-self-duality equates the mixed part with minus the spatial Hodge star of the slice part, which gives ∂ₜA = −⋆Fₐ in our own sign convention. Parallel transport along the interval puts any connection in temporal gauge. The first variation of Chern–Simons shows that ⋆Fₐ is its gradient.

**nLab:** [Yang-Mills instanton Floer homology](https://ncatlab.org/nlab/show/Yang-Mills+instanton+Floer+homology). It says: “the flow lines of S₍CS₎ correspond to the Yang-Mills instantons on Σ × \[0,1\].”

**Sources:**

- [Simon K. Donaldson, Floer Homology Groups in Yang-Mills Theory](https://doi.org/10.1017/CBO9780511543098)

### Cylinder integration gives Chern–Simons transgression

**Remember:** Integrate a closed form along the path; its derivative sees only endpoints.

*True by definition.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Join two connections by the straight path and form the cylinder connection with zero interval component and curvature F. For a homogeneous invariant polynomial P, the relative Chern–Simons form is the integral of P(F) along the interval, with the interval direction inserted first.

**Problem.** The exterior derivative of this form equals P applied to the final curvature minus P applied to the initial curvature.

**How the definition helps.** Chern–Weil theory makes P(F) closed, so the fibre-integration Stokes formula leaves only the restrictions of P(F) to the two ends (our own proof). These are P of the final and of the initial curvature.

**Paper or page:** [Rigid models for 2-gerbes I: Chern-Simons geometry](https://arxiv.org/abs/2209.05521). It says: “Given a k-form ξ on X × \[a,b\] we have d∫\[a,b\] ξ + ∫\[a,b\] dξ = ξ\|X×{b} − ξ\|X×{a}.”

**Sources:**

- [Shiing-Shen Chern and James Simons, Characteristic Forms and Geometric Invariants](https://doi.org/10.2307/1971013)

### Local systems compute flat cohomology

**Remember:** Parallel sections are the coefficients of flat de Rham theory.

*Makes the theorem clean to state or prove.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** For a flat connection on a smooth real or complex vector bundle E, the covariant exterior derivative on E-valued forms squares to zero and gives the flat de Rham complex. Its parallel sections over open sets form a local system, a sheaf that is constant on small balls.

**Problem.** The cohomology of the flat de Rham complex is the cohomology of the parallel local system. In particular it does not require a metric on the base.

**How the definition helps.** Near each point a parallel frame turns the complex into copies of the ordinary de Rham complex (our own proof). The Poincaré lemma then makes it a fine resolution of the local system, so its global cohomology is the cohomology of the local system.

**Paper or page:** [Lie groups and Chern-Simons Theory](https://arxiv.org/abs/2207.11062). It says: “the homology on the chain complex described above is just the cohomology of M with local coefficients in V”

**Sources:** none listed. No primary source with a working link was found.

### Nonzero vortices require strict area bounds

**Remember:** A nonzero section uses some of the available area.

*Rules out counterexamples.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** On a compact connected Riemann surface with area form ω, fix a holomorphic line bundle L, a nonzero holomorphic section φ and a Hermitian metric, with its unitary connection compatible with the holomorphic structure. The vortex equation says its curvature F satisfies iF = (τ − \|φ\|²)ω/2 for a real constant τ. So iF is τω/2 minus a nonnegative term from φ.

**Problem.** A vortex with nonzero section must satisfy 4π deg L &lt; τ times the area. If equality holds, a constant-curvature connection with the zero section solves the equations.

**How the definition helps.** Integrating, with ∫iF = 2π deg L, gives 4π deg L = τ·area − ∫\|φ\|²ω (our own proof). A nonzero section makes the last integral positive, which gives the strict bound. At equality a constant-curvature metric solves the equations with the zero section.

**Paper or page:** [Kähler-Yang-Mills Equations and Vortices](https://arxiv.org/abs/2309.15673). It says: “Assume that φ is not identically zero. For every fixed Kähler form ω, there exists a unique solution h of the vortex equations”

**Sources:**

- [Steven B. Bradlow, Vortices in holomorphic line bundles over closed Kähler manifolds](https://doi.org/10.1007/BF02097654)

### Polystability is exactly the condition for a Hermite–Einstein metric

**Remember:** Sums of stable bundles of equal slope carry Hermite–Einstein metrics.

*Makes the theorem clean to state or prove.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)), 32L05. arXiv math.DG, math.AG. Level 3: graduate.

**Definition.** Fix a Kähler form and define slope as degree with respect to that form divided by rank. A bundle is stable if every coherent subsheaf of positive smaller rank has strictly smaller slope. A polystable bundle is a direct sum of stable bundles of equal slope.

**Problem.** A holomorphic vector bundle over a compact Kähler manifold has a Hermite–Einstein metric exactly when it is polystable. Such a metric has curvature whose contraction with the Kähler form is a constant times the identity.

**How the definition helps.** Polystability includes stable bundles and their equal-slope direct sums in one condition (our own observation). The Donaldson–Uhlenbeck–Yau theorem proves that this condition is equivalent to existence of a Hermite–Einstein metric.

**Paper or page:** [Blowing-up Hermitian Yang--Mills connections](https://arxiv.org/abs/2301.00525), [Semi-stability and local wall-crossing for hermitian Yang-Mills connections](https://arxiv.org/abs/2304.05245). It says: “There exists a Hermite–Einstein metric on E with respect to ω if and only if E is polystable with respect to L”

**Sources:**

- [A. Clarke and C. Tipler, Blowing-up Hermitian Yang–Mills connections, arXiv:2301.00525 (2023)](https://arxiv.org/abs/2301.00525)
- [K. Uhlenbeck and S.-T. Yau, On the existence of hermitian-yang-mills connections in stable vector bundles, Communications on Pure and Applied Mathematics 39 (1986) S257–S293](https://doi.org/10.1002/cpa.3160390714)

### Putting instantons on S⁴ instead of ℝ⁴ makes the instanton number statable

**Remember:** Add the point at infinity, and the bundle has room to twist.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)), 55R40, 81T13. arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Identify the one-point compactification of ℝ⁴ with the oriented round sphere S⁴. An SU(2)-instanton here is a connection on a principal SU(2)-bundle over S⁴ whose curvature equals its Hodge dual.

**Problem.** Instantons on S⁴ have topological sectors labelled by the integer obtained by evaluating the bundle’s second Chern class on the fundamental class of S⁴.

**How the definition helps.** The compactification supplies a fundamental class on which to evaluate c₂ (our own explanation). Clutching classifies SU(2)-bundles by the homotopy class of a map S³ → SU(2), equivalently by their second Chern number. Uhlenbeck’s removable singularity theorem extends finite-action instantons across infinity after a gauge change.

**nLab:** [SU2-instantons from the correct maths to the traditional physics story](https://ncatlab.org/nlab/show/SU2-instantons+from+the+correct+maths+to+the+traditional+physics+story), [Yang-Mills instanton](https://ncatlab.org/nlab/show/Yang-Mills+instanton). It says: “It is this passage from ℝ⁴ to S⁴ which takes care of the subtleties that often tend to be glossed over.”

**Sources:**

- [A. A. Belavin, A. M. Polyakov, A. S. Schwartz, Yu. S. Tyupkin, Pseudoparticle solutions of the Yang-Mills equations, Physics Letters B 59 (1975) 85–87](https://doi.org/10.1016/0370-2693(75)90163-X)

### Surface Hermite–Einstein connections are projectively flat

**Remember:** Scalar curvature disappears once frames forget their common phase.

*True by definition.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** On a Riemann surface with area form ω, a unitary connection is Hermite–Einstein when its curvature is a scalar, F = iλω Id for a real constant λ. It is projectively flat when the connection it induces on frames taken modulo a common phase has zero curvature.

**Problem.** Every Hermite–Einstein connection on a Hermitian bundle over a compact Riemann surface is projectively flat. A positive-degree line bundle shows why one cannot conclude ordinary flatness.

**How the definition helps.** Passing to frames modulo a common phase kills every imaginary scalar multiple of the identity, so Hermite–Einstein curvature becomes zero (our own proof). Ordinary flatness would need λ = 0, but on a positive-degree line bundle the degree formula makes the integral of F nonzero.

**nLab:** [projectively flat connection](https://ncatlab.org/nlab/show/projectively+flat+connection). It says: “A connection on a bundle that is flat up to a central term.”

**Sources:**

- [Michael F. Atiyah and Raoul Bott, The Yang-Mills equations over Riemann surfaces](https://doi.org/10.1098/rsta.1983.0017)

### Translation symmetry gives Bogomolny monopoles

**Remember:** The lost direction’s connection component becomes the Higgs field.

*True by definition.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Give ℝ × Y the product metric and time-first orientation, for an oriented Riemannian three-manifold Y. A translation-invariant connection is A + φ dt, with A a connection on Y and φ a section of the adjoint bundle. Its curvature has just two parts, Fₐ and dₐφ ∧ dt (our own).

**Problem.** The lifted connection A + φ dt is anti-self-dual exactly when Fₐ = ⋆dₐφ on Y. Here ⋆ is the spatial Hodge star.

**How the definition helps.** The four-dimensional Hodge star swaps spatial two-forms with mixed ones (our own calculation). With this orientation, anti-self-duality pairs Fₐ with dₐφ ∧ dt and says Fₐ = ⋆dₐφ.

**nLab:** [Bogomolny equation](https://ncatlab.org/nlab/show/Bogomolny+equation). It says: “The Bogomolny equations are differential equations re-expressing the equations of motion of self-dual Yang-Mills theory”

**Wikipedia:** [Yang–Mills equations](https://en.wikipedia.org/wiki/Yang%E2%80%93Mills_equations). It says: “By requiring the anti-self-duality equations to be invariant under translations in a single direction of ℝ⁴, one obtains the Bogomolny equations”

**Sources:** none listed. No primary source with a working link was found.

### Universal covers classify flat bundles

**Remember:** Trivialize upstairs and record what deck transformations do.

*Makes the theorem clean to state or prove.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Given a homomorphism ρ from the fundamental group of a connected manifold M to a Lie group G, build a bundle from the trivial bundle M̃ × G on the universal cover. Divide by γ·(x,g) = (γx, ρ(γ)g), with γ acting by deck transformations, so the flat product connection descends.

**Problem.** Isomorphism classes of flat principal bundles with connection over a connected smooth manifold correspond to conjugacy classes of fundamental group representations into the structure group.

**How the definition helps.** This turns each representation into a flat bundle. Conversely, on the simply connected cover a flat connection has path-independent transport and hence a parallel frame, on which deck transformations act by a representation. Changing the frame conjugates the representation (our own comparison).

**Paper or page:** [Equivariant gluing theory on regular instanton moduli spaces](https://arxiv.org/abs/2101.09425). It says: “Suppose B is connected, π : P → B is a principal G-bundle and A is a flat connection on P, then there exists a representation π₁(B) → G unique up to conjugation”

**Sources:** none listed. No primary source with a working link was found.

### Character curvatures have integral periods

**Remember:** A cycle has no boundary, so its curvature integral is an integer.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** A degree-k differential character is an additive map h from smooth integral (k−1)-cycles to ℝ/ℤ. Its curvature is the k-form ω whose integral over each smooth integral k-chain C equals h(∂C) modulo integers.

**Problem.** The curvature of a differential character integrates to an integer on every smooth integral k-cycle.

**How the definition helps.** If C is a cycle, then ∂C = 0 and h(0) = 0 by additivity, so the integral of ω over C is zero modulo integers.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “this assignment coincides with the integral”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), §1](https://doi.org/10.1007/BFb0075216)

### Characters give boundary holonomy

**Remember:** On boundaries, holonomy is the curvature integral modulo integers.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A degree-n differential character assigns values in ℝ/ℤ additively to smooth (n−1)-cycles. On a boundary its value equals the integral of a fixed n-form, its curvature, over the bounding chain modulo integers.

**Problem.** The holonomy of a smooth Deligne class on the boundary of a smooth chain equals the curvature integral modulo integers. Holonomy here means the circle value assigned to a cycle.

**How the definition helps.** The character model includes the boundary formula in its definition. The comparison theorem identifies its evaluation with holonomy computed by gluing local Deligne data (our own).

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “this assignment coincides with the integral”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Michael J. Hopkins and Isadore M. Singer, Quadratic functions in geometry, topology, and M-theory.](https://doi.org/10.4310/jdg/1143642908)
- [Christian Bär and Christian Becker, Differential Characters and Geometric Chains.](https://doi.org/10.1007/978-3-319-07034-6_1)

### Deligne addition tensors bundles

**Remember:** Multiply transition functions and add connection forms.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** On a good cover, a line bundle with unitary connection is given by circle-valued frame changes gᵢⱼ and imaginary connection forms Aᵢ, with gᵢⱼgⱼₖ = gᵢₖ and Aⱼ − Aᵢ = gᵢⱼ⁻¹dgᵢⱼ. Deligne addition multiplies the frame changes and adds the connection forms.

**Problem.** Addition of degree-two smooth Deligne classes corresponds to tensoring Hermitian line bundles with their unitary connections.

**How the definition helps.** Tensoring two bundles multiplies their frame changes and, by the product rule, adds their connection forms, so the sum is the data of the tensor product (our own). The classification by gluing identifies these local data with bundles (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “This evidently generalizes the familiar Cech cocycle data for traditional line bundles with connection.”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Deligne classes classify line bundles with connection

**Remember:** Transition functions and connection forms fit in one cocycle.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A degree-two smooth Deligne cocycle on a cover with contractible overlaps is the gluing data of a line bundle with connection. It gives circle-valued frame changes on overlaps that compose on triple overlaps. It also gives real connection forms on patches that differ by the normalized logarithmic derivatives of the frame changes.

**Problem.** Degree-two smooth Deligne classes classify Hermitian line bundles with unitary connection up to isomorphism.

**How the definition helps.** Gluing trivial local lines by the frame changes builds the bundle, and the forms glue to a connection (our own). Changes of local frame change the cocycle by a coboundary, so classes match isomorphism classes (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “This evidently generalizes the familiar Cech cocycle data for traditional line bundles with connection.”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Deligne cocycles encode gerbe connections

**Remember:** One cocycle stores the functions, potentials, and curvings.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** On a good cover, a degree-two Deligne cocycle is the gluing data of a gerbe: circle functions g on triple overlaps, real one-forms A on double overlaps, and two-forms B, the curving, on patches. With δ the alternating Čech coboundary, it satisfies δg = 1, δA = g⁻¹dg/(2πi) and δB = dA.

**Problem.** Degree-two Deligne cocycles modulo changes of local trivialization classify circle bundle gerbes with connection and curving up to stable isomorphism.

**How the definition helps.** The three equations are the gluing rules for the gerbe, its connection and its curving. Changes of local trivialization and patch connections change the cocycle by a coboundary (our own explanation). The classification theorem reconstructs the gerbe from these local data.

**Wikipedia:** [Bundle gerbe](https://en.wikipedia.org/wiki/Bundle_gerbe). It says: “a geometrical model of certain 1-gerbes with connection, or equivalently of a 2-class in Deligne cohomology.”

**Sources:**

- [M. K. Murray and D. Stevenson, Bundle Gerbes: Stable Isomorphism and Local Theory](https://doi.org/10.1112/s0024610700001551)
- [P. Gajer, Geometry of Deligne cohomology](https://doi.org/10.1007/s002220050118)

### Deligne products preserve integral products

**Remember:** The integer part of a Deligne product is the integer cup product.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** On a good cover, integral projection keeps only the integer Čech component of a Deligne cocycle. On integer components u and v of degrees p and q, the Deligne cup product is the Čech cup product, with value u(i₀,…,iₚ)v(iₚ,…,iₚ₊q).

**Problem.** The underlying integral class of a Deligne cup product is the ordinary cup product of the underlying integral classes.

**How the definition helps.** So projection takes Deligne products to Čech cup products of the integer parts (our own). Cohomology on a good cover agrees with singular cohomology, cup products included (our own).

**nLab:** [Beilinson–Deligne cup product](https://ncatlab.org/nlab/show/Beilinson%E2%80%93Deligne+cup+product). It says: “α ∧ β = αβ”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Kiyonori Gomi, Projective unitary representations of smooth Deligne cohomology groups, §2.](https://doi.org/10.1016/j.geomphys.2009.06.012)

### Deligne products wedge curvatures

**Remember:** Differentiate the top form α∧dβ to wedge the two curvatures.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** The Deligne cup product multiplies smooth Deligne classes through their local forms and overlap data. In positive degrees its top local form is α∧dβ, where α and β are the top forms of the factors. The curvature of a class is the derivative of its top form.

**Problem.** For smooth Deligne classes of positive degrees, the curvature of their cup product equals the exterior product of their curvatures.

**How the definition helps.** Since d(α∧dβ) = dα∧dβ, the curvature of the product is the wedge of the two curvatures (our own). The work lies in showing that this asymmetric formula gives a well-defined product on classes (our own).

**nLab:** [Beilinson–Deligne cup product](https://ncatlab.org/nlab/show/Beilinson%E2%80%93Deligne+cup+product). It says: “\\alpha \\wedge d<sub>dR</sub>\\beta”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Kiyonori Gomi, Projective unitary representations of smooth Deligne cohomology groups, §2.](https://doi.org/10.1016/j.geomphys.2009.06.012)
- [Michael J. Hopkins and Isadore M. Singer, Quadratic functions in geometry, topology, and M-theory.](https://doi.org/10.4310/jdg/1143642908)

### Deligne projection recovers Chern classes

**Remember:** Drop the forms and keep the integer cocycle.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** The integral projection of the degree-two smooth Deligne complex ℤ → C∞(−,ℝ) → Ω¹ (inclusion, then exterior derivative) keeps the integer term and sends the other two terms to zero. On a cocycle it keeps only the integer Čech 2-cocycle on triple overlaps.

**Problem.** For a line bundle with unitary connection, this projection sends its Deligne class to the first Chern class, its integral topological invariant.

**How the definition helps.** For a line bundle with connection, that integer cocycle records how local logarithms of the transition functions fail to add up on triple overlaps (our own). The exponential sequence identifies exactly this cocycle with the first Chern class (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “a canonical forgetful map”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Flat complexes compute flat classes

**Remember:** Close the top forms and only constant circle values survive.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** For n ≥ 2, the flat Deligne complex is the smooth Deligne complex with its top forms required to be closed: smooth ℝ/ℤ-valued functions in degree one, then Ω¹, …, Ωⁿ⁻¹ closed. Its maps are the normalized logarithmic derivative and then exterior derivatives, so by the Poincaré lemma it resolves the locally constant sheaf ℝ/ℤ (our own).

**Problem.** On a smooth manifold X, degree-n smooth Deligne classes with zero curvature form the ordinary cohomology group Hⁿ⁻¹(X, ℝ/ℤ) for n ≥ 2.

**How the definition helps.** Closed top forms impose zero curvature on every local representative (our own). Because the complex resolves the locally constant sheaf ℝ/ℤ placed in degree one, its degree-n cohomology is Hⁿ⁻¹(X, ℝ/ℤ) (our own). The curvature exact sequence identifies this group with the classes of zero curvature (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “The Deligne cohomology group fits into a short exact sequence (of abelian groups) of the form”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Flat connections lift torsion

**Remember:** Constant transition phases leave only a torsion Chern class.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A flat unitary connection is one with zero curvature. Equivalently, the bundle has local frames that the connection keeps parallel, and their changes on overlaps are locally constant circle values.

**Problem.** On a compact smooth manifold, a Hermitian line bundle admits a flat unitary connection exactly when some positive integer kills its first Chern class.

**How the definition helps.** Locally constant frame changes form a class in H¹(X, ℝ/ℤ) whose Bockstein is the first Chern class (our own argument). By exactness, Bockstein images are exactly the integral classes that vanish in real cohomology, and each glues a flat bundle with that Chern class. On a compact manifold these are exactly the torsion classes, and the first Chern class classifies line bundles.

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “the Bockstein homomorphism:”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Flat holonomy factors through homology

**Remember:** Without curvature, adding a boundary changes no phase.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A degree-three differential character gives each smooth integral 2-cycle a unit complex number, turning sums into products, and gives a boundary ∂V the value exp(2πi ∫<sub>V</sub> curvature). A flat gerbe has zero curvature, so its character is 1 on every boundary.

**Problem.** The surface phases of a flat circle gerbe depend only on the integral homology class of the surface.

**How the definition helps.** Zero curvature makes the phase of every boundary equal to one, so surfaces that differ by a boundary have equal phases (our own). The comparison theorem identifies gerbe surface phases with a differential character. Without flatness this fails: on ℝ³ the trivial gerbe with curving x dy ∧ dz gives the boundary of a ball of volume one-half the phase −1 (our own counterexample).

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “this assignment coincides with the integral $\\int\_{\\Sigma<sub>n+1</sub>} \\phi<sup>\*</sup> F$ of the pullback of a curvature $(n+1)$-form”

**Sources:**

- [B. Park, Differential cohomology and gerbes: An introduction to higher differential geometry](https://byungdo.github.io/seminars/IMSRS.pdf)

### Global forms cup with curvature

**Remember:** A global form cups by wedging with curvature.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A single global (p−1)-form A defines a degree-p Deligne class a(A), the one represented by A alone. In the Deligne cup product such a left form meets only the highest forms β of the right factor, giving A∧dβ, and dβ is the right factor's curvature F (our own).

**Problem.** For positive degrees p and q, multiplying a(A) by a degree-q Deligne class with curvature F gives a(A∧F).

**How the definition helps.** The derivatives dβ of the right factor's highest forms agree on overlaps and equal its curvature F, so the cochain formula gives the single global form A∧F (our own). The cup product is well defined on classes, so this holds for any representative (our own).

**nLab:** [Beilinson–Deligne cup product](https://ncatlab.org/nlab/show/Beilinson%E2%80%93Deligne+cup+product). It says: “\\alpha \\wedge d<sub>dR</sub>\\beta”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Kiyonori Gomi, Projective unitary representations of smooth Deligne cohomology groups, §2.](https://doi.org/10.1016/j.geomphys.2009.06.012)
- [Michael J. Hopkins and Isadore M. Singer, Quadratic functions in geometry, topology, and M-theory.](https://doi.org/10.4310/jdg/1143642908)

### Global forms describe trivial topology

**Remember:** Zero topology leaves one global form modulo integral periods.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** For n ≥ 2, the smooth Deligne complex is ℤ → C∞(−,ℝ) → Ω¹ → … → Ωⁿ⁻¹, with inclusion and then exterior derivatives, and its integral projection keeps only the ℤ term. Without the ℤ term it is a complex of fine sheaves of forms, so a class with zero integral part comes from one global (n−1)-form (our own).

**Problem.** Degree-n classes with zero underlying integral class form the group of global (n−1)-forms modulo closed forms with integer integrals over cycles.

**How the definition helps.** Partitions of unity let the forms-only complex be computed with global forms, which gives Ωⁿ⁻¹(X) modulo exact forms (our own). Exactness of the sequence with the integer term then also divides out the closed forms with integral periods, by the de Rham theorem (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “Hence we get a short exact sequence by dividing out the image”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Last Deligne forms give curvature

**Remember:** Take the exterior derivative where the Deligne complex stops.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** For a degree-n smooth Deligne cocycle on a good cover, with n ≥ 2, the curvature is dBᵢ, the exterior derivative of its highest form Bᵢ on each patch i. The cocycle condition makes the Bᵢ differ on overlaps by exact forms, so the dBᵢ agree (our own).

**Problem.** Differentiating the highest forms of a smooth Deligne cocycle gives a global closed curvature form depending only on its class.

**How the definition helps.** The highest forms differ on overlaps by exact forms, and d² = 0 makes their derivatives agree (our own). Changing the representative changes each Bᵢ by an exact form, so the curvature depends only on the class (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “the failure of the (n−k+1)-forms to glue on (k+1)-fold intersections of charts is given by the de Rham differential of the (n−k)-forms”

**Paper or page:** [Rigid models for 2-gerbes I: Chern-Simons geometry](https://arxiv.org/abs/2209.05521v4). It says: “Let $\\pi \\colon Y\\to X$ be a surjective submersion. Then for all $p\\geq 0$ the complex \\\[ 0 \\to \\Omega ^p(X)\\xrightarrow {\\pi ^\*} \\Omega ^p(Y) \\xrightarrow {\\delta } \\Omega ^p(Y<sup>\[2\]</sup>) \\xrightarrow {\\delta } \\Omega ^p(Y<sup>\[3\]</sup>) \\xrightarrow {\\delta } \\cdots \\\] is exact”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Lifting gerbes detect obstructions

**Remember:** Multiply lifted transition functions to read the obstruction.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** Take a central extension of Lie groups with circle kernel, Ĝ → G, and a principal G-bundle P. The lifting gerbe assigns to two points p₁, p₂ of one fiber the circle of lifts to Ĝ of the element g with p₂ = p₁g, and multiplies these lifts in Ĝ.

**Problem.** A smooth principal bundle lifts to the extended group exactly when the integral cohomology class of its lifting gerbe vanishes.

**How the definition helps.** The gerbe records the circle-valued failure of lifted transition functions to multiply on triple overlaps (our own comparison). The exponential sequence turns this circle-valued cocycle into an integral class. That class vanishes exactly when local circle factors correct the lifts so that they glue.

**nLab:** [lifting gerbe](https://ncatlab.org/nlab/show/lifting+gerbe). It says: “arising as the obstruction to the lift of a G-principal bundle”

**Sources:**

- [B. Park, Differential cohomology and gerbes: An introduction to higher differential geometry](https://byungdo.github.io/seminars/IMSRS.pdf)

### Matching real classes admit lifts

**Remember:** A witness h exists exactly when both real classes agree.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A degree-n differential cocycle is an integral n-cocycle c, a closed real n-form ω, and a witness h that the two agree as real cocycles. The witness is a real (n−1)-cochain on smooth singular chains with h(∂S) = ∫ₛ ω − c(S) for every smooth singular n-chain S.

**Problem.** An integral degree-n class and a closed n-form on a smooth manifold have a common differential refinement exactly when their real cohomology classes agree.

**How the definition helps.** The witness h exists exactly when the real cocycle S ↦ ∫ₛ ω − c(S) is a coboundary, that is, when the two real classes agree (our own). The de Rham theorem identifies the class of ω with the class of the cocycle S ↦ ∫ₛ ω (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “represent real cohomology classes that are in the image of integral cohomology classes.”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Sphere tests miss torus periods

**Remember:** Curvature needs integer periods on every closed surface, not just spheres.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** A degree-two differential character assigns values in ℝ/ℤ additively to smooth integral 1-cycles. Its curvature is a 2-form whose integral over any smooth integral 2-chain equals, modulo integers, the character's value on the boundary, so it integrates to an integer over every closed surface.

**Problem.** A torus admits a 2-form whose integral over every mapped sphere is zero, although the form cannot be a character curvature.

**How the definition helps.** The whole torus has no boundary, so the rule forces an integer integral there, and a form with total integral one half fails (our own example). Every map from the sphere to the torus lifts to the plane, where the pulled-back form has a primitive. So Stokes' theorem gives zero on every sphere.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “a rule that assigns values in the circle group U(1)”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 1.1](https://doi.org/10.1007/BFb0075216)

### Surface holonomy obeys Stokes

**Remember:** Trivialize on the three-manifold and use ordinary Stokes.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** The holonomy of a circle gerbe with connection is a phase assigned to each closed oriented surface mapped smoothly into the base. Over a trivialization the gerbe is given by a real 2-form b, and the phase is exp(2πi ∫ b) over the surface.

**Problem.** For a smooth map from a compact oriented three-manifold, the boundary phase equals the exponential of 2πi times the integral of the pulled-back gerbe curvature.

**How the definition helps.** When the trivialization extends over the filling three-manifold, db is the curvature there, and ordinary Stokes gives the formula. In our own proof, each component with boundary has zero third integral cohomology, so the pulled-back gerbe trivializes over it. A closed component contributes phase one because the curvature has integral periods.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “this assignment coincides with the integral $\\int\_{\\Sigma<sub>n+1</sub>} \\phi<sup>\*</sup> F$ of the pullback of a curvature $(n+1)$-form”

**Sources:**

- [J. Fuchs, T. Nikolaus, C. Schweigert and K. Waldorf, Bundle gerbes and surface holonomy](https://doi.org/10.4171/077-1/8)
- [M. K. Murray and D. Stevenson, Bundle Gerbes: Stable Isomorphism and Local Theory](https://doi.org/10.1112/s0024610700001551)

### The Bockstein recovers flat characteristic classes

**Remember:** With no curvature term, the integral class comes from the coboundary alone.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.AT, math.DG. Level 3: graduate.

**Definition.** In the cochain description of a differential character, a real cochain h lifts its ℝ/ℤ values on cycles, and the integral characteristic class is represented by the integrated curvature minus δh. A flat character has zero curvature, so its class is represented by −δh alone.

**Problem.** The integral characteristic class of a flat character equals minus the Bockstein of its ℝ/ℤ cohomology class.

**How the definition helps.** The Bockstein lifts a circle-valued cocycle to a real cochain and takes its coboundary, which here is δh, so zero curvature leaves exactly minus the Bockstein (our own comparison). The theorem identifying characters with cochain classes makes h a lift of the character's ℝ/ℤ class.

**nLab:** [ordinary differential cohomology](https://ncatlab.org/nlab/show/ordinary+differential+cohomology). It says: “The underlying characteristic class”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Corollary 1.2](https://doi.org/10.1007/BFb0075216)

### Truncation preserves exact curvature

**Remember:** Cut away the lower forms so exact curvature still counts.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 55N20. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** The degree-n truncation of the de Rham complex keeps the forms of degree n and higher with their usual differential and replaces every lower degree by zero. So its degree-n cohomology is all closed n-forms, since no (n−1)-forms remain to make any of them exact.

**Problem.** On ℝ² there is a differential class with curvature d(x dy) = dx ∧ dy. Using the full form complex would identify this curvature with zero.

**How the definition helps.** With the degree-one forms removed, the exact form dx ∧ dy is a nonzero class in degree two (our own). The one-form x dy defines a topologically trivial differential class with this curvature (our own). In the full complex dx ∧ dy is exact and so represents zero (our own).

**nLab:** [differential cohomology diagram](https://ncatlab.org/nlab/show/differential+cohomology+diagram). It says: “the truncated sheaves of de Rham complexes with coefficients in a given chain complex:”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)
- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Two-forms describe topologically trivial gerbes

**Remember:** Two curvings agree when a line bundle's curvature is their difference.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A topologically trivial circle gerbe with curving is described by one global 2-form B, which gives its surface phases. An equivalence between descriptions B₁ and B₂ is a line bundle whose connection has curvature B₂ − B₁, after dividing the unitary curvature by 2πi.

**Problem.** Every topologically trivial circle gerbe with connection and curving has such a global description. Two forms give equivalent descriptions exactly when their difference is closed with integer integrals over every closed integral 2-cycle.

**How the definition helps.** Equivalence thus means finding a line bundle with prescribed curvature B₂ − B₁. The line bundle curvature theorem says such a bundle exists exactly when the form is closed with integral periods. In our own explanation, a topological trivialization with compatible connection lets the remaining curving descend to one global form.

**nLab:** [ordinary differential cohomology](https://ncatlab.org/nlab/show/ordinary+differential+cohomology). It says: “differ by a globally defined connection (n−1)-form, well defined up to addition of a form with integral periods.”

**Paper or page:** [Geometric T-duality: Buscher rules in general topology](https://arxiv.org/abs/2207.11799). It says: “where the right hand side denotes the category of principal 𝕋-bundles with connection of fixed curvature F = B₂ − B₁.”

**Sources:**

- [M. K. Murray and D. Stevenson, Bundle Gerbes: Stable Isomorphism and Local Theory](https://doi.org/10.1112/s0024610700001551)
- [P. Gajer, Geometry of Deligne cohomology](https://doi.org/10.1007/s002220050118)
- [K. Waldorf, Geometric T-duality: Buscher rules in general topology](https://arxiv.org/abs/2207.11799)

### Synge's theorem needs orientability, which excludes the real projective plane

**Remember:** A nowhere-zero volume form chooses an orientation everywhere.

*Rules out counterexamples.* MSC 53C21 (Methods of global Riemannian geometry, including PDE methods; curvature restrictions). arXiv math.DG. Level 3: graduate.

**Definition.** A smooth manifold is orientable if it admits a smooth top-degree form that vanishes nowhere. Then parallel transport around every loop preserves orientation.

**Problem.** Every connected, compact, orientable, even-dimensional Riemannian manifold without boundary and with positive sectional curvature is simply connected.

**How the definition helps.** In Synge's proof, transport around a shortest noncontractible closed geodesic preserves orientation, so it fixes a unit vector of the odd-dimensional normal space (our own summary). Pushing the geodesic along that parallel field shortens it by positive curvature, which contradicts minimality. The round real projective plane shows the need: it has positive curvature but fundamental group of order two (our own example).

**Paper or page:** [The curvature of convex sum of metrics and applications](https://arxiv.org/abs/2106.14781). It says: “Let (M,g) be a compact manifold with positive sectional curvature. Then, If M is even-dimensional and orientable, then it is simply-connected, If M is odd-dimensional, then it is orientable.”

**Sources:**

- [L. F. Cavenaghi and L. D. Sperança, The curvature of convex sum of metrics and applications, arXiv:2106.14781 (2021)](https://arxiv.org/abs/2106.14781)
- [J. L. Synge, On the connectivity of spaces of positive curvature, Quarterly Journal of Mathematics 7 (1936) 316–320](https://doi.org/10.1093/qmath/os-7.1.316)

### Defining Jacobi fields as geodesic variations makes Killing fields Jacobi

**Remember:** Move the geodesic by isometries and differentiate to get a Jacobi field.

*True by definition. Confidence: medium.* MSC 53C22 (Geodesics in global differential geometry), 53B20. arXiv math.DG. Level 3: graduate.

**Definition.** A Jacobi field along a geodesic γ is the variation field, the derivative in s, of a smooth family of geodesics γₛ with γ₀ = γ.

**Problem.** The restriction of a Killing field, a vector field whose flow preserves the metric, to a geodesic is a Jacobi field.

**How the definition helps.** The local flow of a Killing field acts by isometries, so it moves γ through a family of geodesics whose variation field is the Killing field along γ (our own argument). The geodesic variation theorem identifies such fields with the solutions of the Jacobi equation J″ + R(J,γ′)γ′ = 0.

**Wikipedia:** [Jacobi field](https://en.wikipedia.org/wiki/Jacobi_field). It says: “Take a smooth one parameter family of geodesics”

**Sources:** none listed. No primary source with a working link was found.

### Killing fields give conserved quantities along geodesics

**Remember:** Pair the same velocity twice with an antisymmetric derivative and get zero.

*True by definition. Confidence: medium.* MSC 53C22 (Geodesics in global differential geometry), 53C05, 83C40. arXiv math.DG, gr-qc. Level 3: graduate.

**Definition.** A Killing field K is a vector field whose flow preserves the metric. Equivalently, its covariant derivative is antisymmetric, so g(∇<sub>U</sub> K, U) = 0 for every vector U.

**Problem.** On an affinely parametrized geodesic, a path whose tangent U is parallel along itself, the metric product g(K, U) stays constant.

**How the definition helps.** Along the geodesic, the derivative of g(K, U) is g(∇<sub>U</sub> K, U) + g(K, ∇<sub>U</sub> U). The first term vanishes by antisymmetry, and the second because U is parallel along the path (our own). A coordinate that does not appear in the metric gives the special case of a conserved momentum.

**Wikipedia:** [Killing vector field](https://en.wikipedia.org/wiki/Killing_vector_field). It says: “Each Killing vector corresponds to a quantity which is conserved along geodesics. This conserved quantity is the metric product between the Killing vector and the geodesic tangent vector.”

**Sources:** none listed. No primary source with a working link was found.

### Approximate midpoints let a three-point test detect length spaces

**Remember:** A length space has near-halfway points between any two points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C22. arXiv math.MG. Level 3: graduate.

**Definition.** A length space is a metric space in which the distance between two points is the infimum of the lengths of paths that join them. A point z is an ε-midpoint of x and y if d(x, z) and d(y, z) are both at most d(x, y)/2 + ε.

**Problem.** A complete metric space is a length space exactly when every pair of points has an ε-midpoint for every ε &gt; 0.

**How the definition helps.** Cutting a path of nearly minimal length at half its length gives an ε-midpoint. Conversely, inserting ε-midpoints repeatedly with summable errors gives a Lipschitz map on dyadic times whose length is arbitrarily close to the distance. Completeness extends this map continuously to the whole interval (our own construction).

**Paper or page:** [A Gentle Introduction to CAT(0) Spaces](https://arxiv.org/abs/2406.09883v1). It says: “X is a length space if and only if it admits ε-midpoints for all ε &gt; 0.”

**Sources:**

- [Søren Poulsen, A Gentle Introduction to CAT(0) Spaces, arXiv:2406.09883v1 (2024)](https://arxiv.org/abs/2406.09883v1)

### Blending distances along an optimal correspondence gives Gromov–Hausdorff geodesics

**Remember:** Blend the two distance functions along a best match.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54E45. arXiv math.MG. Level 3: graduate.

**Definition.** A correspondence R ⊆ X × Y is a relation that projects onto both spaces, and its distortion is the supremum of \|dₓ(x,x′) − dᵧ(y,y′)\| over pairs in R. For 0 ≤ t ≤ 1, take R of least distortion with the blended distance (1−t)dₓ + t dᵧ, identifying pairs at distance zero.

**Problem.** Nonempty compact metric spaces up to isometry form a geodesic space under Gromov–Hausdorff distance. Each closed optimal correspondence gives a shortest path between its endpoints.

**How the definition helps.** Matching each pair to itself shows that the spaces at times s and t are within Gromov–Hausdorff distance \|s−t\| times half the distortion of R (our own calculation). For compact spaces a closed optimal R exists, and half its distortion is the distance between X and Y. The triangle inequality then forces equality along the whole path.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “is a shortest geodesic with the speed dɢʜ(X,Y).”

**Sources:**

- [Alexey A. Tuzhilin, Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry, arXiv:2012.00756v1 (2020)](https://arxiv.org/abs/2012.00756v1)

### Bonnet–Myers for Alexandrov spaces must exclude lines and circles

**Remember:** A line has no fat triangles to fail, so exclude it.

*Rules out counterexamples. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C21. arXiv math.DG, math.MG. Level 3: graduate.

**Definition.** For k &gt; 0, a length space has Alexandrov curvature ≥ k if each point has a neighborhood whose geodesic triangles of perimeter below 2π/√k are at least as fat as their comparison triangles in the sphere of curvature k. Fat means that points on the sides are at least as far apart as the matching points, at the same distances along the comparison sides.

**Problem.** A complete length space of dimension at least two with Alexandrov curvature at least k &gt; 0 has diameter at most π/√k.

**How the definition helps.** The Alexandrov Bonnet–Myers theorem gives the diameter bound once the one-dimensional exceptions are excluded. The real line shows why they must be: its triangles are degenerate, so it passes every comparison but has infinite diameter (our own example).

**Paper or page:** [Alexandrov's Patchwork and the Bonnet--Myers Theorem for Lorentzian length spaces](https://arxiv.org/abs/2302.11615), [Alexandrov's Patchwork and the Bonnet--Myers Theorem for Lorentzian length spaces](https://arxiv.org/abs/2302.11615). It says: “Let X be a complete length space with (local) curvature bounded below by some k&gt;0, which is not one of the aforementioned 1-dimensional spaces. Then diam(X) ≤ π/√k.”

**Sources:**

- [T. Beran, L. Napper and F. Rott, Alexandrov's Patchwork and the Bonnet–Myers Theorem for Lorentzian length spaces, arXiv:2302.11615 (2023)](https://arxiv.org/abs/2302.11615)

### Comparison with flat triangles makes geodesics in CAT(0) spaces unique

**Remember:** A triangle with zero width cannot hold two different shortest paths.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 20F67. arXiv math.MG. Level 3: graduate.

**Definition.** A geodesic metric space is CAT(0) if every geodesic triangle is no fatter than its Euclidean comparison triangle, the one with the same side lengths, possibly degenerate. That is, two points on the sides are at most as far apart as the matching points, at the same positions along the sides, of the comparison triangle.

**Problem.** In a CAT(0) space, each pair of points is joined by exactly one geodesic.

**How the definition helps.** Two constant-speed geodesics c and c′ from x to y on \[0,1\] form a triangle with sides c′, c on \[0,t\] and c on \[t,1\], whose comparison triangle is a segment (our own proof). In that segment the points matching c(t) and c′(t) coincide. Comparison therefore forces d(c(t), c′(t)) = 0 for every t.

**Paper or page:** [A Gentle Introduction to CAT(0) Spaces](https://arxiv.org/abs/2406.09883v1). It says: “X is uniquely geodesic”

**Sources:**

- [Søren Poulsen, A Gentle Introduction to CAT(0) Spaces, arXiv:2406.09883v1 (2024)](https://arxiv.org/abs/2406.09883v1)

### Fundamental-cycle norms make simplicial volume bound absolute degree times target volume

**Remember:** Pushing a cycle forward never increases the sum of its absolute coefficients.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 57N65. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** The simplicial volume ‖M‖ of a connected closed oriented manifold is the infimum, over real singular cycles representing its fundamental class, of the sum of the absolute values of their coefficients. Pushing a cycle forward along a map never increases this sum.

**Problem.** For a map f from M to N between connected closed oriented manifolds of the same dimension, ‖M‖ ≥ \|deg f\| · ‖N‖. So a self-map of absolute degree greater than one forces zero simplicial volume.

**How the definition helps.** A fundamental cycle of M pushes forward to a cycle of no larger norm that represents deg(f) times the fundamental class of N (our own proof). For deg f ≠ 0, dividing by deg f gives a fundamental cycle of N with norm at most the original norm divided by \|deg f\|. Taking the infimum gives ‖N‖ ≤ ‖M‖/\|deg f\|.

**Wikipedia:** [Simplicial volume](https://en.wikipedia.org/wiki/Simplicial_volume). It says: “one defines the simplicial norm by minimizing the sum of the absolute values of the coefficients over all singular chains homologous to a given cycle. The simplicial volume is the simplicial norm of the fundamental class.”

**Sources:**

- [Gromov, M. (1982). Volume and bounded cohomology. Publications Mathématiques de l'IHÉS 56, 5–99.](https://doi.org/10.5802/pmihes.3)

### Gluing spaces along a shared copy gives the Gromov–Hausdorff triangle inequality

**Remember:** Glue the two comparison spaces along their shared middle space.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54E35. arXiv math.MG, math.GN. Level 3: graduate.

**Definition.** The Hausdorff distance between two subsets is the infimum of the r such that each lies within distance r of the other. The Gromov–Hausdorff distance between two metric spaces is the infimum of Hausdorff distances between distance-preserving copies of them in any common metric space.

**Problem.** For metric spaces X, Y and Z, the Gromov–Hausdorff distance d satisfies d(X, Z) ≤ d(X, Y) + d(Y, Z). Distances may be infinite, for example for unbounded spaces.

**How the definition helps.** Because any common space is allowed, glue a space comparing X with Y to one comparing Y with Z along their copies of Y (our own argument). Across the join, measure distance as the infimum through a point of Y and identify points at distance zero; this keeps distances inside each piece. The Hausdorff triangle inequality in the glued space then gives the bound, after taking infima.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “The function dɢʜ satisfies the triangle inequality.”

**Sources:**

- [Alexey A. Tuzhilin, Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry, arXiv:2012.00756v1 (2020)](https://arxiv.org/abs/2012.00756v1)

### Gromov–Hausdorff distance zero means isometric when both spaces are compact

**Remember:** On compact spaces, arbitrarily good matches yield an exact match.

*Rules out counterexamples.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54E45. arXiv math.MG. Level 3: graduate.

**Definition.** The Gromov–Hausdorff distance between two metric spaces is the infimum of Hausdorff distances between isometric copies of them inside a common metric space. Equivalently, it is half the infimum of the distortions of correspondences, relations that project onto both spaces (our own).

**Problem.** Two nonempty compact metric spaces have Gromov–Hausdorff distance zero exactly when some distance-preserving bijection joins them.

**How the definition helps.** Distance zero gives correspondences of distortion tending to zero, and in the compact hyperspace of X × Y a subsequence converges (our own explanation). The limit still projects onto both spaces and has zero distortion, so it is the graph of an isometry. The open and closed unit intervals show the need for compactness: their distance is zero, but they are not isometric (our own counterexample).

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “For compact metric spaces X and Y, it holds dɢʜ(X,Y) = 0 if and only if X and Y are isometric.”

**Sources:**

- [Alexey A. Tuzhilin, Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry, arXiv:2012.00756v1 (2020)](https://arxiv.org/abs/2012.00756v1)

### In length spaces each closed ball is the open ball's closure

**Remember:** Walk almost the whole way to approach the edge from inside.

*Rules out counterexamples.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C22. arXiv math.MG. Level 3: graduate.

**Definition.** A metric is intrinsic if the distance between two points is the infimum of the lengths of paths that join them. Let d(x, y) = r &gt; 0 and ε &gt; 0. Then any path from x to y shorter than r + ε passes within ε of y at a point closer than r to x (our own).

**Problem.** In a space with an intrinsic metric, each closed ball of positive radius is the closure of the matching open ball.

**How the definition helps.** As ε shrinks, these points lie in the open ball and converge to y (our own proof). So the closed ball lies in the closure of the open ball, and the reverse inclusion holds in every metric space. A two-point space at distance one fails: its open unit ball is one point, which is closed, while its closed unit ball has both points (our own counterexample).

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “Let X be a space with an intrinsic metric. Then Bᵣ(x) = closure of Uᵣ(x).”

**Sources:**

- [Alexey A. Tuzhilin, Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry, arXiv:2012.00756v1 (2020)](https://arxiv.org/abs/2012.00756v1)

### Metric speed makes isometries preserve speed without proving they are smooth

**Remember:** An isometry preserves every distance quotient that defines metric speed.

*True by definition. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 51F99. arXiv math.MG, math.DG. Level 3: graduate.

**Definition.** The metric speed of a curve γ at time t is the limit of d(γ(t+h), γ(t))/\|h\| as h tends to 0, when it exists. It uses only distances, so it needs no derivative of the curve.

**Problem.** A distance-preserving map between metric spaces preserves the metric speed of each curve wherever that speed exists. The map needs no smoothness.

**How the definition helps.** A distance-preserving map leaves each quotient unchanged, so it leaves their limit unchanged (our own argument). For smooth curves in a Riemannian manifold, the metric speed equals the norm of the velocity, so this recovers the usual statement.

**Wikipedia:** [Metric derivative](https://en.wikipedia.org/wiki/Metric_derivative). It says: “It generalizes the notion of "speed" or "absolute velocity" to spaces which have a notion of distance”

**Sources:** none listed. No primary source with a working link was found.

### The Gromov product definition of hyperbolicity makes equivalence at infinity transitive

**Remember:** Two growing products force the third product to grow.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 20F67. arXiv math.MG. Level 3: graduate.

**Definition.** Fix a base point o and let (x\|y) = (d(o,x) + d(o,y) − d(x,y))/2, the Gromov product, which measures roughly how long paths from o to x and to y stay together. The space is δ-hyperbolic if (x\|z) ≥ min((x\|y), (y\|z)) − δ for all points x, y, z.

**Problem.** In such a hyperbolic space, consider sequences satisfying (xₙ\|xₘ) → ∞ as both indices grow. The relation defined by (xₙ\|yₙ) → ∞ is transitive on these sequences.

**How the definition helps.** Applied to xₙ, yₙ, zₙ, the inequality bounds (xₙ\|zₙ) below by the smaller of two products that tend to ∞, minus δ, so it tends to ∞ too (our own argument). With the thin-triangle definition one must first prove this inequality, which is the theorem that the two definitions agree up to a change of δ (our own comparison).

**Wikipedia:** [Hyperbolic metric space](https://en.wikipedia.org/wiki/Hyperbolic_metric_space). It says: “converging to infinity are considered equivalent when”

**Sources:** none listed. No primary source with a working link was found.

### The midpoint inequality gives each bounded set in CAT(0) a unique center

**Remember:** A midpoint beats both candidate centers unless they are already close.

*True by definition. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C70. arXiv math.MG. Level 3: graduate.

**Definition.** A geodesic metric space is CAT(0) if, for all points x, y, z and every midpoint m of x and y, d(z,m)² ≤ (d(z,x)² + d(z,y)²)/2 − d(x,y)²/4. So squared distance from any point is convex along geodesics, with a margin of d(x,y)²/4 at midpoints.

**Problem.** In a complete CAT(0) space, each nonempty bounded set S has a unique circumcenter, a point minimizing the supremum of its distances to S.

**How the definition helps.** Taking the supremum over z in S gives r(m)² ≤ (r(x)² + r(y)²)/2 − d(x,y)²/4 for the radius function r (our own argument). So two nearly optimal centers are close, because their midpoint cannot beat the least radius, and a minimizing sequence is Cauchy (our own). Completeness then gives a center, and the same inequality rules out a second one (our own).

**Wikipedia:** [Cartan–Hadamard theorem](https://en.wikipedia.org/wiki/Cartan%E2%80%93Hadamard_theorem). It says: “the square distance from the vertex z to the midpoint of the opposite side”

**Sources:** none listed. No primary source with a working link was found.

### The midpoint inequality makes products of CAT(0) spaces CAT(0)

**Remember:** Squared distances add in the product, so the midpoint inequalities add too.

*True by definition. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C70. arXiv math.MG. Level 3: graduate.

**Definition.** A geodesic metric space is CAT(0) if, for all points x, y, z and every midpoint m of x and y, d(z,m)² ≤ (d(z,x)² + d(z,y)²)/2 − d(x,y)²/4. Every term is a squared distance, so such inequalities can be added across factors (our own).

**Problem.** A finite product of CAT(0) spaces, with the Euclidean product distance, is CAT(0).

**How the definition helps.** Squared product distances are sums of squared factor distances, so adding the factor inequalities gives the product inequality (our own proof). Equality in the triangle inequality forces each product midpoint to be a midpoint in every coordinate, and coordinatewise geodesics give product geodesics. The Bruhat–Tits criterion identifies this inequality with CAT(0) triangle comparison.

**Wikipedia:** [CAT(k) space](https://en.wikipedia.org/wiki/CAT%28k%29_space). It says: “The distance between a vertex of a geodesic triangle and the midpoint of the opposite side is always less than the corresponding distance in the comparison triangle in the plane with the same side-lengths.”

**Sources:** none listed. No primary source with a working link was found.

### Using only contractible loops makes flatness equal to trivial holonomy

**Remember:** Shrinkable loops feel curvature; other loops also feel the topology.

*Rules out counterexamples.* MSC 53C29 (Issues of holonomy in differential geometry), 53C05. arXiv math.DG. Level 3: graduate.

**Definition.** The restricted holonomy group at x of a vector bundle connection consists of the parallel transports around piecewise smooth contractible loops based at x. Such loops bound disks, so they detect only curvature, while other loops can also detect topology.

**Problem.** On a connected base, a connection is flat exactly when its restricted holonomy group at a base point is trivial.

**How the definition helps.** By Ambrose–Singer, the holonomy Lie algebra is spanned by curvature values transported back to the base point along all paths, so it vanishes exactly when the curvature does. Restricted holonomy is a connected Lie group, so a zero Lie algebra makes it trivial (our own argument). A flat Möbius line bundle reverses a vector around its noncontractible central loop, so the full holonomy can stay nontrivial (our own example).

**Wikipedia:** [Holonomy](https://en.wikipedia.org/wiki/Holonomy). It says: “∇ is flat (i.e. has vanishing curvature) if and only if Hol⁰(∇) is trivial. In this case, Hol(∇) may still be nontrivial.”

**Sources:**

- [W. Ambrose and I. M. Singer, A theorem on holonomy, Transactions of the American Mathematical Society 75 (1953) 428–443](https://doi.org/10.1090/S0002-9947-1953-0063739-1)

### Defining local symmetry by geodesic reflections makes the curvature parallel

**Remember:** Point reflections kill every invariant tensor with an odd number of slots.

*True by definition. Confidence: medium.* MSC 53C35 (Differential geometry of symmetric spaces), 53B20. arXiv math.DG. Level 3: graduate.

**Definition.** A Riemannian metric is locally symmetric if, near each point p, the geodesic reflection expₚ(v) ↦ expₚ(−v) is an isometry. Its differential at p is minus the identity, so it negates every tensor with an odd number of arguments at p.

**Problem.** On a locally symmetric Riemannian manifold, the curvature tensor is parallel, which means that its covariant derivative is zero.

**How the definition helps.** The reflection is an isometry, so it preserves ∇R, the covariant derivative of the curvature tensor (our own argument). At p it negates all five arguments of ∇R, which negates its value. Invariance then forces ∇R = 0 at p, and p was arbitrary.

**Wikipedia:** [Symmetric space](https://en.wikipedia.org/wiki/Symmetric_space). It says: “This is equivalent to the vanishing of the covariant derivative of the curvature tensor.”

**Sources:** none listed. No primary source with a working link was found.

### Defining symmetric spaces by point reflections makes geodesic completeness immediate

**Remember:** Each point's reflection reverses geodesics, so any geodesic can be extended.

*True by definition.* MSC 53C35 (Differential geometry of symmetric spaces), 53C30. arXiv math.DG. Level 3: graduate.

**Definition.** A connected Riemannian manifold is symmetric if each point p has a global isometry that fixes p and whose differential at p is minus the identity. That isometry reverses every geodesic through p.

**Problem.** A Riemannian symmetric space is geodesically complete, so every geodesic extends for all time.

**How the definition helps.** Reflecting a geodesic through a point near one end of its interval gives a geodesic that runs past that end (our own argument). Uniqueness of geodesics makes the two pieces agree on their overlap, so they join into a longer geodesic (our own).

**Wikipedia:** [Symmetric space](https://en.wikipedia.org/wiki/Symmetric_space). It says: “Every Riemannian symmetric space M is complete”

**Sources:**

- [Élie Cartan, Sur une classe remarquable d’espaces de Riemann (1926)](https://www.numdam.org/item/BSMF_1926__54__214_0/)

### Calibrations make volume minimization in a homology class a one-line proof

**Remember:** The closed form equals your volume and undercounts every competitor's.

*True by definition.* MSC 53C38 (Calibrations and calibrated geometries), 49Q15. arXiv math.DG. Level 3: graduate.

**Definition.** A calibration is a closed form φ whose value on every oriented unit tangent plane of its degree is at most one, so ∫ φ is at most the volume of any submanifold. A submanifold is calibrated when φ restricts to its volume form, so ∫ φ equals its volume.

**Problem.** A compact oriented calibrated submanifold without boundary has least volume among compact oriented submanifolds in its homology class.

**How the definition helps.** For a homologous competitor N, vol(M) = ∫<sub>M</sub> φ = ∫<sub>N</sub> φ ≤ vol(N). The middle equality is Stokes' theorem, since φ is closed and M − N is a boundary.

**Wikipedia:** [Calibrated geometry](https://en.wikipedia.org/wiki/Calibrated_geometry). It says: “calibrated closed submanifolds minimize volume within their homology class.”

**Sources:**

- [Reese Harvey and H. Blaine Lawson, Calibrated geometries (1982)](https://doi.org/10.1007/BF02392726)

### Defining harmonic maps by energy makes surface harmonicity conformally invariant

**Remember:** In two dimensions, rescaling cancels in the energy.

*True by definition. Confidence: medium.* MSC 53C43 (Differential geometric aspects of harmonic maps), 53C18. arXiv math.DG. Level 3: graduate.

**Definition.** A harmonic map is a stationary point, under compactly supported variations, of the energy, half the integral of \|dφ\|² over the domain. On a surface, multiplying the metric by λ multiplies the area element by λ and \|dφ\|² by 1/λ.

**Problem.** Take a harmonic map from a surface. Multiply the metric on the surface by a smooth positive function. The map stays harmonic.

**How the definition helps.** The two factors cancel, so on a surface the rescaling leaves the energy of every map unchanged, and hence also its stationary points (our own argument). With the tension definition one must instead track how the connection changes (our own comparison). The first variation formula shows that the two definitions agree.

**nLab:** [harmonic map](https://ncatlab.org/nlab/show/harmonic+map). It says: “which is a critical point of the Dirichlet kinetic energy functional”

**Sources:**

- [James Eells and J. H. Sampson, Harmonic Mappings of Riemannian Manifolds (1964)](https://doi.org/10.2307/2373037)

### Harmonic morphisms defined by pulled-back harmonic functions compose at once

**Remember:** Pull a harmonic function back through one map, then through the other.

*True by definition.* MSC 53C43 (Differential geometric aspects of harmonic maps), 31C12. arXiv math.DG. Level 3: graduate.

**Definition.** A smooth map φ between Riemannian manifolds is a harmonic morphism if f∘φ is harmonic on φ⁻¹(U) for every harmonic function f on every open set U of the target.

**Problem.** The composite of two harmonic morphisms is a harmonic morphism.

**How the definition helps.** If φ and ψ are harmonic morphisms and f is harmonic, then f∘ψ is harmonic, and so (f∘ψ)∘φ is harmonic (our own argument). With the Fuglede–Ishihara description, harmonic and horizontally weakly conformal, one must instead compute the tension of the composite (our own comparison).

**Wikipedia:** [Harmonic morphism](https://en.wikipedia.org/wiki/Harmonic_morphism). It says: “pulls back real-valued harmonic functions on the codomain to harmonic functions on the domain.”

**Sources:**

- [Bent Fuglede, Harmonic morphisms between Riemannian manifolds (1978)](https://www.numdam.org/item/AIF_1978__28_2_107_0/)

### Zero tension shows an isometric immersion is harmonic exactly when minimal

**Remember:** An isometric immersion’s tension is its bending summed over tangent directions.

*True by definition.* MSC 53C43 (Differential geometric aspects of harmonic maps), 53C42. arXiv math.DG. Level 3: graduate.

**Definition.** A map φ is harmonic when its tension, the trace of ∇dφ (the covariant derivative of its differential), is zero. For an isometric immersion, ∇dφ is the second fundamental form, which measures how the image bends.

**Problem.** An isometric immersion, which preserves lengths of tangent vectors, is harmonic exactly when it is minimal, that is, when its mean curvature vector vanishes.

**How the definition helps.** Tracing the second fundamental form gives the domain dimension times the mean curvature vector (our own argument). So zero tension is the same as zero mean curvature.

**nLab:** [harmonic map](https://ncatlab.org/nlab/show/harmonic+map). It says: “is a harmonic map if and only if it has vanishing”

**Sources:**

- [James Eells and J. H. Sampson, Harmonic Mappings of Riemannian Manifolds (1964)](https://doi.org/10.2307/2373037)

### A Cauchy surface makes wave equations well posed on globally hyperbolic spacetimes

**Remember:** One slice of time that every observer crosses exactly once.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 35L20, 83C05. arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** A spacetime is globally hyperbolic if it has a Cauchy hypersurface, one that every inextendible timelike curve meets exactly once.

**Problem.** On a smooth globally hyperbolic spacetime, the Klein–Gordon operator has unique advanced and retarded Green operators. Smooth Cauchy data on a smooth spacelike Cauchy surface determine a unique smooth solution of the homogeneous equation.

**How the definition helps.** A Cauchy surface supplies one initial surface for the entire spacetime (our own explanation). The global Cauchy and Green operator theorems of Bär, Ginoux and Pfäffle supply existence and uniqueness.

**nLab:** [globally hyperbolic Lorentzian manifold](https://ncatlab.org/nlab/show/globally+hyperbolic+Lorentzian+manifold), [Cauchy surface](https://ncatlab.org/nlab/show/Cauchy+surface), [Green hyperbolic partial differential equation](https://ncatlab.org/nlab/show/Green+hyperbolic+partial+differential+equation), [smooth Lorentzian space](https://ncatlab.org/nlab/show/smooth+Lorentzian+space). It says: “A Lorentzian manifold is called globally hyperbolic if it admits a well-defined time evolution from initial data of physical fields on it.”

**Sources:**

- [Christian Bär, Nicolas Ginoux, Frank Pfäffle, Wave equations on Lorentzian manifolds and quantization, EMS (2007), arXiv:0806.1036](https://arxiv.org/abs/0806.1036)
- [Robert Geroch, Domain of dependence, J. Math. Phys. 11 (1970) 437–449](https://doi.org/10.1063/1.1665157)

### A flat torus defeats compact diamonds

**Remember:** Compact travel regions do not rule out time loops.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83C99. arXiv gr-qc. Level 3: graduate.

**Definition.** A spacetime is globally hyperbolic if it has no closed causal curves and every causal diamond is compact. The diamond from p to q is the set of points on future causal curves from p to q, curves whose tangent stays in or on the future light cone.

**Problem.** Every smooth globally hyperbolic spacetime admits a Cauchy surface, which every causal curve without past or future endpoint crosses exactly once. Compact diamonds alone do not ensure this.

**How the definition helps.** Under both conditions, the Cauchy surface theorem gives a Cauchy surface. Without causality, a flat torus with periodic time and space fails: every event is timelike reachable from every other, so every diamond is the compact torus (our own counterexample). A timelike loop repeated forever either misses a proposed surface or crosses it many times.

**Wikipedia:** [Globally hyperbolic spacetime](https://en.wikipedia.org/wiki/Globally_hyperbolic_spacetime). It says: “This condition states that no closed causal curves exist, thus forbidding matter or energy from traveling into its own past.”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy horizons exclude timelike links

**Remember:** Two points on the prediction boundary cannot share a timelike path.

*True by definition.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83C75. arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** For an initial surface S, let D consist of points where every past-inextendible causal curve through the point meets S. Its future Cauchy horizon consists of points in the closure of D whose chronological future misses D.

**Problem.** Let S be a closed hypersurface in a smooth spacetime, with no causal curve joining distinct points of S. No timelike curve joins two points of its future Cauchy horizon outside S.

**How the definition helps.** If a horizon point p timelike precedes another horizon point q, the open chronological future of p contains q (our own proof). Since q lies in the closure of D, this future meets D, contradicting the definition at p.

**Paper or page:** [Low regularity extensions beyond Cauchy horizons](https://arxiv.org/abs/2110.07388). It says: “is an achronal locally Lipschitz topological hypersurface”

**Sources:**

- [Low regularity extensions beyond Cauchy horizons](https://arxiv.org/abs/2110.07388)

### Cauchy surfaces separate past and future

**Remember:** Every observer crosses once, so every event lies before, on, or after.

*True by definition.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics). arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** A Cauchy surface is a set that every timelike curve without endpoints, the history of a slower-than-light observer, meets exactly once.

**Problem.** A spacetime with a Cauchy surface splits into the surface, its timelike past, and its timelike future. These three sets are disjoint.

**How the definition helps.** Extend a timelike curve through any event in both directions; it crosses the surface once, so the event lies before, on, or after the surface (our own proof). An event in two of these sets would give a timelike curve that meets the surface twice.

**nLab:** [Cauchy surface](https://ncatlab.org/nlab/show/Cauchy+surface). It says: “intersects Σ precisely in one point.”

**Paper or page:** [Limit curve theorems for incomplete metric spaces and the null distance on Lorentzian manifolds](https://arxiv.org/abs/2511.05847v1). It says: “M is the disjoint union M = I⁺(S) ∪ S ∪ I⁻(S).”

**Sources:** none listed. No primary source with a working link was found.

### Compact diamonds yield longest paths

**Remember:** Compact diamonds keep maximizing clock paths from escaping through a hole.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics). arXiv gr-qc. Level 3: graduate.

**Definition.** A spacetime is globally hyperbolic if it has no closed causal paths and every causal diamond is compact, where the diamond from p to q is the set of events on causal paths from p to q. A causal path moves toward the future at or below light speed.

**Problem.** In smooth globally hyperbolic spacetime, two events joined by a causal path admit one with the greatest elapsed clock time.

**How the definition helps.** Compact diamonds trap a maximizing sequence of causal paths, the limit-curve theorem gives a limiting causal path, and upper semicontinuity of elapsed time makes it maximizing (our own outline). Without compactness this fails: remove the midpoint between two events on a stationary clock in flat spacetime with a spatial direction. Detours then approach the straight path's elapsed time, but none attains it (our own counterexample).

**Wikipedia:** [Globally hyperbolic spacetime](https://en.wikipedia.org/wiki/Globally_hyperbolic_spacetime). It says: “The spacetime is causal, and for every pair of points p and q in M, the subset J⁺(p) ∩ J⁻(q) is compact.”

**Sources:** none listed. No primary source with a working link was found.

### Rescaling preserves light rays

**Remember:** Change the scale, not the light ray.

*True by definition.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83C80. arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** A conformal map between Lorentzian surfaces is a smooth local diffeomorphism that multiplies the metric by a smooth positive function, so it keeps null vectors null. A light ray is a regular null geodesic with its parameter forgotten.

**Problem.** A conformal map between smooth Lorentzian surfaces sends light rays to light rays.

**How the definition helps.** A conformal map sends regular null curves to regular null curves (our own argument). On a Lorentzian surface, a null curve's acceleration lies in its own tangent line: differentiating zero squared speed puts it in the perpendicular line, which is that same line. So every regular null curve is a reparametrized geodesic, and the image of a light ray is a light ray.

**Paper or page:** [Causal Classification of Pathological Misner-Type Spacetimes](https://arxiv.org/abs/2501.00841). It says: “Conformal transformations between 2-dimensional Lorentzian manifolds send null hypersurfaces to null hypersurfaces and therefore null geodesics to null geodesics.”

**Sources:** none listed. No primary source with a working link was found.

### Time prevents compact causal confinement

**Remember:** Time must keep rising, so no causal curve stays trapped.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83C99. arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** A time function is a continuous real function on a spacetime that strictly increases along every nonconstant future causal curve, one whose tangent lies in or on the future light cone.

**Problem.** In a smooth spacetime with a time function, no compact set contains an entire future-inextendible causal curve, one with no future endpoint in the spacetime.

**How the definition helps.** On a future-inextendible causal curve trapped in a compact set, the time function increases to a finite limit (our own argument). The limit-curve theorem, with arc length from a complete auxiliary Riemannian metric, gives a nonconstant causal limit of late segments. By continuity the time function is constant on that limit, which contradicts strict increase.

**Paper or page:** [Time functions on Lorentzian length spaces](https://arxiv.org/abs/2108.02693). It says: “If X admits a time function, then X is non-totally imprisoning.”

**Sources:**

- [Time functions on Lorentzian length spaces](https://arxiv.org/abs/2108.02693)

### Unit clock gradients follow free fall

**Remember:** A unit clock gradient has no acceleration.

*True by definition.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83C10. arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** A local clock function is a smooth function f whose gradient ∇f, the vector dual to df under the spacetime metric, has constant squared length −1. Constant length forces the integral curves of ∇f to have no acceleration.

**Problem.** Integral curves of this gradient are unit timelike geodesics, so they describe free fall with elapsed proper time as parameter.

**How the definition helps.** Symmetry of second derivatives makes the acceleration of ∇f along itself equal to half the gradient of its squared length (our own calculation). That squared length is constant, so the acceleration vanishes. Constructing such a clock is separate work, for example by elapsed proper time along perpendicular geodesics.

**Paper or page:** [Omniscient foliations and the geometry of cosmological spacetimes](https://arxiv.org/abs/2205.07470v1). It says: “Thus, any integral curve of ∇f is a unit timelike geodesic.”

**Sources:**

- [Omniscient foliations and the geometry of cosmological spacetimes](https://arxiv.org/abs/2205.07470v1)

### Hilbert’s cross-ratio distance adds along straight segments

**Remember:** The same boundary endpoints make cross-ratios multiply and distances add.

*True by definition. Confidence: medium.* MSC 53C60 (Global differential geometry of Finsler spaces and generalizations (areal metrics)), 52A20. arXiv math.MG. Level 3: graduate.

**Definition.** In a bounded open convex set Ω ⊂ ℝⁿ, the line through distinct points A and B meets the boundary at X and Y, in the order X, A, B, Y. The Hilbert distance is d(A,B) = log((\|XB\|·\|AY\|)/(\|XA\|·\|BY\|)), a cross-ratio of four points on that line, with d(A,A) = 0.

**Problem.** If C lies on the segment from A to B, then d(A, B) = d(A, C) + d(C, B). Thus straight segments are shortest paths in the Hilbert metric.

**How the definition helps.** For C between A and B the boundary points X and Y are the same, and the cross-ratios multiply because \|XC\| and \|CY\| cancel (our own proof). Taking logarithms gives d(A,B) = d(A,C) + d(C,B). So the segment has length d(A,B), and by the triangle inequality no path is shorter.

**Wikipedia:** [Hilbert metric](https://en.wikipedia.org/wiki/Hilbert_metric). It says: “Then the Hilbert distance d(A, B) is the logarithm of the cross-ratio of this quadruple of points”

**Sources:**

- [David Hilbert, Ueber die gerade Linie als kürzeste Verbindung zweier Punkte, Mathematische Annalen 46 (1895)](https://doi.org/10.1007/BF02096204)

### Busemann convexity makes geodesic contractions continuous, so CAT(0) spaces are contractible

**Remember:** Convex distance makes sliding points toward a common base point continuous.

*True by definition. Confidence: medium.* MSC 53C70 (Direct methods (\\(G\\)-spaces of Busemann, etc.)), 53C23. arXiv math.MG. Level 3: graduate.

**Definition.** A geodesic space is Busemann convex if, for any two constant-speed geodesics c and c′ on \[0,1\], the distance d(c(t), c′(t)) is a convex function of t. For geodesics from a common start, this gives d(c(t), c′(t)) ≤ t·d(c(1), c′(1)) (our own).

**Problem.** Every Busemann convex geodesic space is contractible. In particular, every CAT(0) space is contractible.

**How the definition helps.** Convexity makes geodesics unique, and the bound shows they depend continuously on their endpoint (our own argument). So sliding each point along its geodesic to a fixed base point is a continuous contraction (our own). CAT(0) spaces are Busemann convex, which gives the second claim.

**Paper or page:** [A Gentle Introduction to CAT(0) Spaces](https://arxiv.org/abs/2406.09883). It says: “X is contractible”

**Sources:** none listed. No primary source with a working link was found.

### A closed symplectic form is exactly one that every Hamiltonian flow preserves

**Remember:** Closed is the price for every energy flow keeping the form.

*True by definition.* MSC 53D05 (Symplectic manifolds (general theory)), 37J06. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** A nondegenerate 2-form ω lets each smooth function H define a Hamiltonian vector field Vₕ by ι(Vₕ)ω = dH. The form is symplectic when it is also closed, dω = 0.

**Problem.** On a 2n-dimensional manifold with nondegenerate two-form ω, all local Hamiltonian flows preserve ω exactly when dω = 0. In that case they preserve the volume form ωⁿ, as in Liouville’s theorem.

**How the definition helps.** Cartan's formula gives ℒ(Vₕ)ω = d(dH) + ι(Vₕ)dω = ι(Vₕ)dω. At each point Hamiltonian fields reach every tangent vector, so all these contractions vanish exactly when dω = 0 (our own argument). Preserving ω also preserves its power ωⁿ.

**Wikipedia:** [Symplectic manifold](https://en.wikipedia.org/wiki/Symplectic_manifold). It says: “the requirement for the vanishing Lie derivative along flows of Vₕ corresponding to arbitrary smooth H is equivalent to the requirement that ω should be closed.”

**Sources:** none listed. No primary source with a working link was found.

### Closedness of the symplectic form leaves no local invariants, by Darboux

**Remember:** Closed and nondegenerate gives local coordinates with the same standard two-form.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D05 (Symplectic manifolds (general theory)), 37J06. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** A symplectic manifold is a manifold with a closed, nondegenerate 2-form ω. Darboux coordinates are local coordinates x₁, …, xₙ, y₁, …, yₙ in which ω = dx₁∧dy₁ + … + dxₙ∧dyₙ.

**Problem.** Near every point of a 2n-dimensional symplectic manifold there are coordinates in which ω takes the standard form (Darboux's theorem). So any two symplectic manifolds of the same dimension are locally the same.

**How the definition helps.** Darboux coordinates give every symplectic form of one dimension the same formula, so nothing local tells two of them apart (our own explanation). Darboux's theorem supplies those coordinates. In Moser's proof, closedness gives local primitives for the deformation, and nondegeneracy turns them into a vector field.

**Wikipedia:** [Darboux's theorem](https://en.wikipedia.org/wiki/Darboux%27s_theorem). It says: “Darboux's theorem for symplectic manifolds implies that there are no local invariants in symplectic geometry”

**Sources:**

- [G. Darboux, Sur le problème de Pfaff, Bulletin des Sciences Mathématiques 6 (1882) 14–36, 49–68](http://gallica.bnf.fr/ark:/12148/bpt6k68005v)

### Constant rank gives a closed two-form a Darboux normal form

**Remember:** Fix the rank, and every closed two-form looks standard near each point.

*Rules out counterexamples.* MSC 53D05 (Symplectic manifolds (general theory)), 58A10. arXiv math.DG, math.SG. Level 3: graduate.

**Definition.** A pre-symplectic form is a closed two-form ω whose rank, as an antisymmetric matrix, is the same at every point. So its kernel, the vectors v with ω(v, w) = 0 for all w, has constant dimension and forms a smooth subbundle (our own).

**Problem.** Near each point, a closed two-form of constant rank 2r has coordinates q, p and z in which ω = dq¹∧dp₁ + … + dqʳ∧dpᵣ. In these coordinates the kernel is spanned by the fields ∂/∂zᴬ.

**How the definition helps.** Closedness makes the kernel integrable and ω invariant along its leaves, so ω descends to a symplectic form on a local transverse slice (our own argument). Darboux coordinates on the slice, together with leaf coordinates z, give the stated form. The closed form x dx∧dy on ℝ² drops rank at x = 0, so no such coordinates exist there (our own example).

**Paper or page:** [A zoo of coisotropic embeddings](https://arxiv.org/abs/2509.19039). It says: “Let (M, ω) be a d-dimensional pre-symplectic manifold, with ω ∈ Ω²(M) a closed 2-form of constant rank 2r &lt; d. Then, for every point m ∈ M, there exists a coordinate chart (U, φ) around m”

**Sources:**

- [R. Izquierdo-López, M. de León, L. Schiavone and P. Soto, A zoo of coisotropic embeddings, arXiv:2509.19039 (2025)](https://arxiv.org/abs/2509.19039)

### Exactness excludes torus translations

**Remember:** Preserving the form is local, but having a global Hamiltonian is not.

*Rules out counterexamples.* MSC 53D05 (Symplectic manifolds (general theory)), 37J06. arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic vector field X preserves a symplectic form ω, which makes the one-form ι(X)ω closed. X is Hamiltonian when ι(X)ω is exact, the derivative dH of a function H defined on the whole manifold.

**Problem.** The one-form of a Hamiltonian field integrates to zero around every closed curve. On the unit-period torus, horizontal translation preserves the standard area form but has no global Hamiltonian.

**How the definition helps.** An exact one-form integrates to zero around every closed curve (our own). On the torus, the unit horizontal field inserted into dx ∧ dy gives dy, which integrates to one around the vertical circle (our own). Translation preserves the area form, so this field is symplectic but not Hamiltonian (our own).

**nLab:** [symplectic vector field](https://ncatlab.org/nlab/show/symplectic+vector+field). It says: “If this contraction even is an exact differential form in that there is a function h ∈ C∞(X) such that”

**Sources:** none listed. No primary source with a working link was found.

### Fixed cohomology lets Moser straighten forms

**Remember:** An exact time derivative gives the vector field that cancels it.

*Rules out counterexamples.* MSC 53D05 (Symplectic manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** A smooth path of symplectic forms ωₜ, each a closed nondegenerate two-form, is cohomologous when every difference ωₜ − ωₛ is exact, the derivative of a one-form. Then the velocity is exact too: ∂ₜωₜ = dαₜ for one-forms αₜ varying smoothly in t (our own).

**Problem.** On a compact manifold without boundary, a smooth path of cohomologous symplectic forms admits a smooth family of coordinate changes starting at the identity. Each change pulls the corresponding form back to the initial form.

**How the definition helps.** The field Vₜ solving ι(Vₜ)ωₜ = −αₜ has a flow that keeps the pullback of ωₜ constant, by Cartan’s formula, and compactness lets it run for all t (our own outline). Without fixed cohomology this fails. On two area-one tori, the forms tσ₁ + σ₂/t keep the product volume but change the period over the first torus, which an isotopy must keep (our own example).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “Then there exists an isotopy ρ ⦂ M × ℝ → M such that”

**Sources:** none listed. No primary source with a working link was found.

### Quotienting null directions removes degeneracy

**Remember:** Remove precisely the directions that pair to zero.

*Makes the theorem clean to state or prove.* MSC 53D05 (Symplectic manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** The null directions of a closed two-form ω of constant rank are the vectors v with ω(v,w) = 0 for every w. They form an integrable distribution along whose flows ω does not change, and the leaf space collapses each connected leaf to a point (our own).

**Problem.** Assume the form has constant rank and its space of leaves is a smooth manifold. If the quotient projection has surjective derivative everywhere, the form descends to a unique closed nondegenerate two-form.

**How the definition helps.** Along a null field the contraction of ω and dω both vanish, so Cartan’s formula gives zero Lie derivative and ω descends along the connected fibres (our own proof). Surjectivity of the projection’s derivative makes the descended form unique and closed. Dividing each tangent space by exactly the kernel makes it nondegenerate.

**nLab:** [presymplectic structure](https://ncatlab.org/nlab/show/presymplectic+structure). It says: “the quotient of X by the flow of the vector fields in the kernel of ω is, if it exists in a reasonable way, a symplectic manifold.”

**Sources:** none listed. No primary source with a working link was found.

### The coordinate-free tautological form makes cotangent lifts preserve the symplectic form

**Remember:** The lift keeps θ, so it keeps dθ.

*True by definition. Confidence: medium.* MSC 53D05 (Symplectic manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** The tautological one-form θ on a cotangent bundle feeds a tangent vector v at a covector α to α itself, after projecting v to the base: θ(v) = α(dπ(v)), where π is the bundle projection. The canonical symplectic form is dθ.

**Problem.** Let f be a diffeomorphism from M to N. Its cotangent lift sends a covector α at x to α ∘ (df)⁻¹ at f(x). This lift pulls the canonical symplectic form of T\*N back to that of T\*M.

**How the definition helps.** The cotangent lift preserves θ because the inverse derivative acting on covectors cancels the derivative acting on projected tangent vectors (our own check). Pullback commutes with exterior differentiation, so the lift preserves dθ.

**nLab:** [cotangent bundle](https://ncatlab.org/nlab/show/cotangent+bundle). It says: “The de Rham differential ω ≔ dθ is a symplectic form.”

**Sources:** none listed. No primary source with a working link was found.

### Contact maps lift by rescaling covectors

**Remember:** Lift the covectors and their evaluation rule stays the same.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** For a contact hyperplane field ξ on M, the symplectization is the set of nonzero covectors that vanish on ξ, a set that any map preserving ξ carries to itself by moving covectors. Its symplectic form is dθ, where θ evaluates each covector on the projection of a tangent vector to M.

**Problem.** A diffeomorphism preserving contact planes lifts canonically to a diffeomorphism preserving the symplectic form on the symplectization.

**How the definition helps.** The inverse diffeomorphism pulls each annihilating covector to another such covector because the original map preserves the contact planes (our own proof). This lift preserves evaluation on projected tangent vectors, hence preserves θ and dθ.

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “This construction does not depend on the choice of contact form.”

**Sources:** none listed. No primary source with a working link was found.

### Defining coorientability by a trivial quotient line makes hyperplane fields kernels

**Remember:** A trivial quotient line gives one global equation for the hyperplanes.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)), 58A30. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** A hyperplane field ξ, a smooth choice of codimension-one subspace of each tangent space of M, is coorientable when the quotient line bundle TM/ξ is trivial. Equivalently, TM/ξ has a nowhere-zero section.

**Problem.** A hyperplane field ξ is coorientable exactly when ξ is the kernel of a smooth one-form that is nowhere zero.

**How the definition helps.** Composing the quotient map with a trivialization gives a nowhere-zero one-form with kernel ξ. Conversely, any such form induces a fibrewise isomorphism from TM/ξ to the trivial real line bundle.

**Paper or page:** [On the Canonical Contact Structure of the Space of Null Geodesics of a Spacetime](https://arxiv.org/abs/2109.03656v1). It says: “it is possible to write ξ = ker α globally if and only if ξ is coorientable, that is, the quotient bundle TM/ξ is trivial.”

**Sources:**

- [Hansjörg Geiges, An Introduction to Contact Topology (2008), Lemma 1.1.1](https://doi.org/10.1017/CBO9780511611438)

### Transverse Liouville fields give contact forms

**Remember:** A transverse expanding field makes λ a contact form.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** A Liouville field V on a symplectic manifold (M,ω) expands the form: the one-form λ = ω(V,·) satisfies dλ = ω. A hypersurface has contact type when some Liouville field defined near it is everywhere transverse to it.

**Problem.** On a hypersurface of contact type, the restriction of λ is a contact form α. On a regular energy surface of contact type, its Reeb field follows the Hamiltonian trajectories up to a change of speed.

**How the definition helps.** Transversality makes the contraction of ωⁿ with V a volume form on the hypersurface, and it restricts to nα ∧ (dα)ⁿ⁻¹, so α is contact (our own proof). On a regular energy level, the Hamiltonian field spans the kernel of dα on the level. The Reeb field spans the same line, normalized by α(R) = 1.

**Paper or page:** [A note on the geometry of the two-body problem on S²](https://arxiv.org/abs/2310.02659v2). It says: “is a (positive) time reparametrisation of the Hamiltonian vector field”

**Sources:**

- [A note on the geometry of the two-body problem on S², Theorem 4.2](https://arxiv.org/abs/2310.02659v2)

### Conormal bundles are Lagrangian

**Remember:** A conormal covector kills every allowed base direction.

*True by definition.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** The conormal bundle of a submanifold S is the set of covectors at points of S that vanish on every vector tangent to S. So the canonical one-form, which feeds a covector the base projection of a tangent vector, vanishes on it (our own).

**Problem.** The conormal bundle of a smooth submanifold is Lagrangian in the ambient cotangent bundle. That means the symplectic form vanishes on it and it has half the ambient dimension.

**How the definition helps.** The canonical one-form vanishes on the conormal bundle, so its derivative, the symplectic form, vanishes there too (our own). For a k-dimensional submanifold of an n-manifold, the conormal bundle has dimension k + (n − k) = n, half of 2n (our own).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “For any submanifold S ⊂ X, the conormal bundle N\*S is a Lagrangian submanifold of T\*X.”

**Sources:** none listed. No primary source with a working link was found.

### Exact Lagrangians exclude holomorphic disks

**Remember:** On an exact Lagrangian, disks have zero area, hence zero energy.

*Rules out counterexamples.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** A Lagrangian L for ω = dλ, a half-dimensional submanifold on which ω vanishes, is exact when λ restricts to df on L for a function f on L. Then λ integrates to zero around every loop in L, so by Stokes’ theorem every disk with boundary on L has zero symplectic area (our own).

**Problem.** Let J be an ω-compatible almost complex structure, so g(v,w) = ω(v,Jw) defines a Riemannian metric. Every J-holomorphic disk with boundary on an exact Lagrangian is constant.

**How the definition helps.** A J-holomorphic disk has energy equal to its symplectic area, which exactness makes zero, and zero energy forces the disk to be constant. Without exactness, the unit disk in ℂ with boundary on the unit circle is a nonconstant holomorphic disk.

**Paper or page:** [A proof of Gromov's non-squeezing theorem](https://arxiv.org/abs/2412.18462v1). It says: “the equality holds if and only if u is constant.”

**Sources:** none listed. No primary source with a working link was found.

### Exact Lagrangians lift to Legendrians

**Remember:** Use the primitive as the height of the Legendrian lift.

*Rules out counterexamples. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** A Lagrangian L in T∗Q is exact when the tautological one-form θ restricts to df on L for a single function f defined on all of L. A Legendrian in T∗Q × ℝ has dimension dim Q and is tangent to the kernel of the contact form dz − θ.

**Problem.** Every exact Lagrangian in a cotangent bundle lifts to a Legendrian for the contact form dz − θ.

**How the definition helps.** Setting the height z = f makes dz − θ = df − df vanish on the lifted copy of L (our own proof). Conversely, any height that makes such a lift Legendrian is a global primitive. On the cotangent bundle of a circle, the graph of a one-form with nonzero integral is Lagrangian but has no single-valued height.

**Paper or page:** [Normal invariant of nearby Lagrangians via twisted derivative](https://arxiv.org/abs/2505.12515v2). It says: “(any Legendrian lift of) L”

**Sources:**

- [Normal invariant of nearby Lagrangians via twisted derivative, Corollary 3.34](https://arxiv.org/abs/2505.12515v2)

### Loop classes make the Maslov index invariant under deformation

**Remember:** The index is the loop’s homotopy class, read as an integer.

*True by definition.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** Fix a nonzero real symplectic vector space and its Lagrangian Grassmannian, the half-dimensional subspaces on which the symplectic form vanishes. The Maslov index of a loop of such subspaces is its homotopy class, read as an integer through the isomorphism of the fundamental group with ℤ that makes the Maslov generator positive.

**Problem.** The Maslov index of a loop of Lagrangian subspaces does not change when the loop deforms. Joining two loops with a common starting point adds their indices.

**How the definition helps.** Homotopy classes do not change under deformation, and moving the base point only conjugates the class, which does nothing in the abelian group ℤ (our own argument). Joining loops is the group operation, which the isomorphism turns into addition.

**Wikipedia:** [Maslov index](https://en.wikipedia.org/wiki/Maslov_index). It says: “This definition makes the Maslov index a topological invariant of loops of Lagrangian subspaces.”

**Sources:**

- [Robbin, J.; Salamon, D. (1993). The Maslov index for paths. Topology 32(4), 827–844.](https://doi.org/10.1016/0040-9383(93)90052-W)

### The tautological 1-form makes graphs of closed 1-forms Lagrangian

**Remember:** On the graph of β, the tautological form becomes β.

*True by definition.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 53D05. arXiv math.SG. Level 3: graduate.

**Definition.** The tautological 1-form θ on T∗Q is the one 1-form whose pullback along the graph of every 1-form β on Q is β itself. The symplectic form is dθ, so its restriction to the graph of β is dβ (our own).

**Problem.** The graph of a 1-form β is Lagrangian in T∗Q, meaning half-dimensional with dθ vanishing on it, exactly when β is closed, dβ = 0.

**How the definition helps.** Restriction commutes with exterior differentiation, so dθ restricts on the graph to dβ (our own). The graph has half the dimension of T∗Q.

**nLab:** [Liouville-Poincaré 1-form](https://ncatlab.org/nlab/show/Liouville-Poincar%C3%A9+1-form). It says: “for every smooth section σ ∈ Γ(T\* X) the identification σ\* θ = j(σ) between the pullback of θ along σ and the 1-form corresponding to σ under j.”

**Wikipedia:** [Tautological one-form](https://en.wikipedia.org/wiki/Tautological_one-form), [Symplectic manifold](https://en.wikipedia.org/wiki/Symplectic_manifold). It says: “The graph of a closed 1-form on M is a Lagrangian submanifold of T∗M. In particular, the graph of df is Lagrangian.”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing first cohomology forces Lagrangian intersections

**Remember:** A global primitive reaches extrema, where the nearby graph meets the original.

*Rules out counterexamples.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** A compact Lagrangian X has vanishing first real cohomology when every closed one-form on X is the derivative df of a global function f. A C¹-close Lagrangian is then the graph of some df near X, and it meets X exactly where df = 0 (our own).

**Problem.** Let X be a compact connected Lagrangian submanifold without boundary, of positive dimension, with vanishing first real cohomology. Every Lagrangian that is sufficiently C¹-close to X, in positions and first derivatives, meets X in at least two points.

**How the definition helps.** A function on a compact manifold has a maximum and a minimum; they are distinct critical points unless f is constant, when every point is an intersection (our own). The Lagrangian neighborhood theorem gives the graph description (our own). On a torus, the graph of a small nonzero constant one-form misses the zero section (our own).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “every Lagrangian submanifold of M which is C¹-close to X intersects X in at least two points.”

**Sources:** none listed. No primary source with a working link was found.

### Defining first integrals by the Poisson bracket gives Poisson’s theorem

**Remember:** A first integral has zero bracket with the Hamiltonian.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 37J37, 70H33. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** A first integral of a Hamiltonian H is a smooth function F that stays constant along every trajectory of H. Equivalently, its Poisson bracket {H,F} vanishes everywhere.

**Problem.** If F and G are first integrals of H, then their bracket {F, G} is also a first integral of H.

**How the definition helps.** Jacobi expresses {H,{F,G}} as {{H,F},G} + {F,{H,G}} (our own calculation). Both terms vanish because F and G are first integrals.

**Wikipedia:** [Hamiltonian vector field](https://en.wikipedia.org/wiki/Hamiltonian_vector_field). It says: “which means that the vector space of differentiable functions on M, endowed with the Poisson bracket, has the structure of a Lie algebra over ℝ”

**Sources:** none listed. No primary source with a working link was found.

### Defining Poisson bivectors by \[π,π\] = 0 makes \[π,−\] square to zero

**Remember:** The double bracket is half the bracket with \[π,π\].

*True by definition. Confidence: medium.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** A Poisson bivector is a bivector field π whose Schouten–Nijenhuis bracket with itself vanishes, \[π,π\] = 0, where this bracket extends the Lie bracket of vector fields to multivector fields.

**Problem.** On a Poisson manifold, the operator \[π,−\] on multivector fields squares to zero. Its cohomology is called Poisson cohomology.

**How the definition helps.** By the graded Jacobi identity, \[π,\[π,X\]\] = ½\[\[π,π\],X\], which is zero when \[π,π\] = 0 (our own step). Starting instead from the Jacobi identity for functions, one must first derive \[π,π\] = 0 by a coordinate calculation (our own comparison).

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “the condition d\_π ∘ d\_π = 0 is equivalent to \[π,π\]=0”

**Sources:**

- [André Lichnerowicz, Les variétés de Poisson et leurs algèbres de Lie associées, Journal of Differential Geometry 12 (1977), 253–300](https://doi.org/10.4310/jdg/1214433987)

### Invariant functions give Poisson quotients

**Remember:** Bracket invariant functions upstairs to get the bracket downstairs.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** On a smooth orbit space, smooth functions correspond by pullback to the smooth functions upstairs that are constant on each orbit. If the group acts by Poisson maps, maps that preserve the Poisson bracket, the bracket of two such invariant functions is again invariant (our own).

**Problem.** Suppose a Lie group acts smoothly by Poisson maps, freely and properly. Then its orbit space has a unique Poisson bracket making the projection a Poisson map.

**How the definition helps.** The quotient bracket is the bracket of the invariant functions, so the bracket identities pass down through the pullback identification (our own proof). The quotient manifold theorem for free and proper actions gives the smooth structure. No tensor in quotient coordinates is needed.

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “inherits a Poisson structure”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicativity makes inversion antisymplectic

**Remember:** Composing an arrow with its inverse adds their forms to zero.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic groupoid is a Lie groupoid, with smooth spaces of objects and invertible arrows, whose space of arrows carries a symplectic form ω. The form is multiplicative: on composable pairs, its pullback by composition is the sum of its pullbacks from the two factors.

**Problem.** Inversion in a symplectic groupoid sends the symplectic form to its negative.

**How the definition helps.** On pairs of identity arrows, multiplicativity says ω restricted to units equals twice itself, so it vanishes there (our own proof). On pairs of an arrow and its inverse, whose product is a unit, it says ω plus its pullback by inversion is zero.

**nLab:** [symplectic groupoid](https://ncatlab.org/nlab/show/symplectic+groupoid). It says: “the alternating sum of its canonical pullbacks to the space X₂ of composable morphisms vanishes”

**Sources:** none listed. No primary source with a working link was found.

### Poisson maps have coisotropic graphs

**Remember:** Subtract the domain bracket and test on functions vanishing along the graph.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** A smooth map is Poisson when pulling back functions preserves the Poisson bracket, a Lie bracket on functions that obeys the product rule. A submanifold is coisotropic when the bracket of any two local functions vanishing on it also vanishes on it.

**Problem.** A smooth map is Poisson exactly when its graph is coisotropic in the product using the target bracket and the negative domain bracket.

**How the definition helps.** Coordinate differences generate the graph’s local vanishing ideal by Hadamard’s lemma (our own proof). Their product brackets on the graph equal pulled-back target brackets minus domain brackets of the pullbacks. The product rule extends this coordinate test to every pair of local functions.

**Paper or page:** [Lie groups of Poisson diffeomorphisms](https://arxiv.org/abs/2108.11490v2). It says: “A map $f:M\\to N$ is a Poisson map if and only if the graph of $f$ is coisotropic in $(N\\times M, \\pi<sub>N</sub>\\times (-\\pi<sub>M</sub>))$.”

**Sources:**

- [Lie groups of Poisson diffeomorphisms, Proposition 1.2](https://arxiv.org/abs/2108.11490v2)

### Curvature is the moment map, so flat connections form a symplectic quotient

**Remember:** Flat means zero moment map, so flat moduli are symplectic quotients.

*Makes the theorem clean to state or prove.* MSC 53D20 (Momentum maps; symplectic reduction), 53D30. arXiv math.DG, math.SG. Level 3: graduate.

**Definition.** For a group action with equivariant moment map μ, the Hamiltonian reduction at zero is the zero set μ⁻¹(0) divided by the group. When μ is curvature, its zero set is exactly the flat connections.

**Problem.** Take connections on a principal bundle with compact structure group over a closed oriented surface, with an invariant inner product on the Lie algebra. For the Atiyah–Bott form, curvature is a moment map for gauge, so the flat moduli space is the reduction at zero, symplectic on smooth strata.

**How the definition helps.** Atiyah and Bott identify the moment map with curvature, so its zero set is the flat connections and its quotient by gauge is their moduli space. Symplectic reduction supplies the form on each smooth stratum (our own explanation).

**Paper or page:** [Higher Complex Structures and Higher Teichmüller Theory](https://arxiv.org/abs/2007.00382), [A Gentle Introduction to the Non-Abelian Hodge Correspondence](https://arxiv.org/abs/2208.05940). It says: “The action of gauge transforms on the space of connections is a Hamiltonian action and the moment map is the curvature. Thus, the Hamiltonian reduction 𝒜⫽𝒢 gives the moduli space of flat connections.”

**Sources:**

- [A. Thomas, Higher Complex Structures and Higher Teichmüller Theory, arXiv:2007.00382 (2020)](https://arxiv.org/abs/2007.00382)
- [A. Thomas, A Gentle Introduction to the Non-Abelian Hodge Correspondence, arXiv:2208.05940 (2022)](https://arxiv.org/abs/2208.05940)
- [M. F. Atiyah and R. Bott, The Yang–Mills equations over Riemann surfaces, Philosophical Transactions of the Royal Society A 308 (1983) 523–615](https://doi.org/10.1098/rsta.1983.0017)

### Equivariant momentum maps preserve brackets

**Remember:** Move the point, and its momentum moves by the coadjoint action.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction), 70H33. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** A momentum map μ for a Hamiltonian G-action on (M,ω) sends points to the dual Lie algebra so that each component ⟨μ,ξ⟩ generates the motion ξ<sub>M</sub>: d⟨μ,ξ⟩ = ι(ξ<sub>M</sub>)ω. It is equivariant when moving a point by g moves its momentum by the coadjoint action, μ(gx) = Ad\*(g)μ(x).

**Problem.** For a connected Hamiltonian symmetry group, an equivariant momentum map preserves brackets when functions on the dual Lie algebra are composed with μ. Use the Lie–Poisson bracket, which on linear functions gives their Lie algebra bracket, with matching sign conventions.

**How the definition helps.** Differentiating equivariance gives {⟨μ,ξ⟩,⟨μ,η⟩} = ⟨μ,\[ξ,η\]⟩, so μ preserves brackets of linear functions (our own). Brackets at a point depend only on differentials, and linear functions give every differential (our own). Translations of the plane commute, but their generators y and −x have bracket one, and adding constants cannot fix this (our own).

**nLab:** [momentum map](https://ncatlab.org/nlab/show/momentum+map). It says: “its dual μ is a Poisson manifold homomorphism with respect to the Lie-Poisson structure”

**Sources:** none listed. No primary source with a working link was found.

### Free actions give smooth symplectic quotients

**Remember:** Free symmetry removes the fixed points that can make a quotient singular.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction), 70H33. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** A compact Lie group acts freely on the zero level μ⁻¹(0) of an equivariant momentum map when no point of the level is fixed by any element except the identity. The reduced space is μ⁻¹(0) divided by the group.

**Problem.** For a compact Lie group acting freely on the zero level, the reduced space is smooth and inherits a symplectic form.

**How the definition helps.** Freeness makes the infinitesimal motions independent, so the momentum derivative is onto, the zero level is smooth, and the free, proper quotient theorem gives smooth charts. The restricted form has exactly the orbit directions as its kernel and descends to a symplectic form (our own argument). Opposite circle rotations on ℂ² fix the origin of the zero level, where the quotient is singular (our own example).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “Assume that G acts freely on μ⁻¹(0).”

**Sources:**

- [Jerrold Marsden and Alan Weinstein, Reduction of symplectic manifolds with symmetry (1974)](https://doi.org/10.1016/0034-4877(74)90021-4)

### Free reduction avoids quotient singularities

**Remember:** Remove point stabilizers before taking the smooth symplectic quotient.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction). arXiv math.SG. Level 3: graduate.

**Definition.** For an equivariant moment map μ and value a, the reduced space is μ⁻¹(a) modulo the coadjoint stabilizer of a. That stabilizer acts freely if only its identity fixes any point of μ⁻¹(a).

**Problem.** Take a regular value of the moment map, one where its derivative is onto throughout the level. If the group fixing the value acts freely and properly on the level, the quotient is a smooth symplectic manifold.

**How the definition helps.** Freeness and properness let the free, proper quotient theorem give smooth charts, and the symplectic reduction theorem supplies the form (our own explanation). Without freeness, the circle acting on ℂ² with weights one and two fails. On positive levels a half-turn fixes the points with first coordinate zero and negates the transverse coordinate, giving a singular point (our own example).

**Paper or page:** [From Symplectic to Poisson. A Study of Reduction and a Proposal Towards Implosion](https://arxiv.org/abs/2202.05783v1). It says: “Then there is a unique symplectic structure”

**Sources:**

- [Jerrold Marsden and Alan Weinstein, Reduction of symplectic manifolds with symmetry (1974)](https://doi.org/10.1016/0034-4877(74)90021-4)

### Reduced forms carry Hamiltonian flows

**Remember:** Pull back the form and energy to see that their flows agree.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction). arXiv math.SG. Level 3: graduate.

**Definition.** Let a regular moment level sit in (M,ω) by the inclusion i and project onto its smooth reduced space by π. The reduced form Ω is the unique two-form whose pullback along π equals the restriction of ω: π\*Ω = i\*ω.

**Problem.** Take an equivariant moment map and a level where its derivative is onto, and suppose the group fixing that value acts freely and properly on the level. Then the flow of any invariant energy projects to the flow of the induced energy on the quotient.

**How the definition helps.** The identity π\*Ω = i\*ω carries Hamilton’s equation down to the quotient (our own argument). Noether’s theorem keeps the flow on the level, and invariance lets its vector field project. The reduced energy pulls back to the restricted energy, so the projected field satisfies the reduced Hamilton equation, and nondegeneracy makes it unique.

**Paper or page:** [From Symplectic to Poisson. A Study of Reduction and a Proposal Towards Implosion](https://arxiv.org/abs/2202.05783v1). It says: “In particular, $X<sub>H</sub>$ and $X<sub>h</sub>$ are $\\pi$-related.”

**Sources:**

- [Jerrold Marsden and Alan Weinstein, Reduction of symplectic manifolds with symmetry (1974)](https://doi.org/10.1016/0034-4877(74)90021-4)

### With Hamiltonian actions, Noether's theorem takes one line

**Remember:** A symmetry’s charge changes at the rate of its bracket with energy.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction), 70H33. arXiv math.SG, math.MP. Level 3: graduate.

**Definition.** A Hamiltonian Lie algebra action on a symplectic manifold assigns each element ξ a smooth function Φ(ξ) linearly. It satisfies {Φ(ξ),Φ(η)} = Φ(\[ξ,η\]) for all ξ and η, and ξ acts by the Hamiltonian vector field of Φ(ξ).

**Problem.** If a Hamiltonian Lie algebra action preserves the energy H, every charge Φ(ξ) stays constant along the Hamiltonian flow of H.

**How the definition helps.** Energy invariance gives {Φ(ξ),H} = 0 for every ξ. Skew-symmetry gives {H,Φ(ξ)} = 0, so each charge has zero time derivative.

**nLab:** [Noether's theorem](https://ncatlab.org/nlab/show/Noether%27s+theorem). It says: “Hence the "Hamiltonian Noether theorem" is all captured already by the very notion of Hamiltonian action and the statement that the Poisson bracket is skew-symmetric (is a Lie algebra bracket).”

**Sources:**

- [Emmy Noether, Invariante Variationsprobleme, Nachr. Ges. Wiss. Göttingen, Math.-Phys. Kl. (1918) 235–257; English translation by M. A. Tavel, Invariant Variation Problems, arXiv:physics/0503066](https://arxiv.org/abs/physics/0503066)

### Exact symplectic maps lift to contact maps

**Remember:** Add the primitive difference to height to cancel the error.

*Rules out counterexamples.* MSC 53D22 (Canonical transformations in symplectic and contact geometry). arXiv math.SG. Level 3: graduate.

**Definition.** A diffeomorphism φ of an exact symplectic manifold (M, dλ) is exact when it changes λ by the derivative of one global function: φ\*λ = λ + dF. The contactization M × ℝ, with height z, carries the contact form dz − λ.

**Problem.** Every exact symplectic map lifts to a map of the contactization preserving dz − λ exactly.

**How the definition helps.** The lift (x,z) ↦ (φ(x), z + F(x)) pulls dz − λ back to dz + dF − φ\*λ = dz − λ (our own calculation). Translating momentum by a nonzero constant on the cotangent bundle of a circle is symplectic, but it changes λ by a closed form with nonzero period, so no global F exists.

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “and it lifts to a contact transformation”

**Sources:** none listed. No primary source with a working link was found.

### Symplectic maps have Lagrangian graphs

**Remember:** On a graph, the difference of the forms tests preservation.

*True by definition.* MSC 53D22 (Canonical transformations in symplectic and contact geometry). arXiv math.SG. Level 3: graduate.

**Definition.** A Lagrangian is a half-dimensional submanifold on which the symplectic form restricts to zero. On M × N use the target form minus the source form, which restricts on the graph of φ to φ\*ω<sub>N</sub> − ω<sub>M</sub> (our own).

**Problem.** A diffeomorphism preserves the symplectic form exactly when its graph is Lagrangian for the difference form.

**How the definition helps.** The difference form restricts on the graph to φ\*ω<sub>N</sub> − ω<sub>M</sub>, which vanishes exactly when φ preserves the form (our own calculation). The graph has half the product dimension because φ is a diffeomorphism.

**nLab:** [Lagrangian correspondence](https://ncatlab.org/nlab/show/Lagrangian+correspondence). It says: “The graph of any symplectomorphism induces a Lagrangian correspondence.”

**Sources:** none listed. No primary source with a working link was found.

### Symplectomorphisms carry Hamiltonian motion to Hamiltonian motion

**Remember:** Preserve the symplectic form and the transformed Hamiltonian determines the transported motion.

*True by definition.* MSC 53D22 (Canonical transformations in symplectic and contact geometry), 70H15. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** A canonical transformation φ is a symplectomorphism: a smooth invertible map that preserves the symplectic form ω, the closed nondegenerate pairing that turns the derivative dH into the velocity field of H.

**Problem.** A time-independent canonical transformation φ carries motion for H to motion for H ∘ φ⁻¹. It also carries the Poisson bracket, which gives rates of change under Hamiltonian motion, to the new coordinates.

**How the definition helps.** Hamilton’s equation ι(X<sub>H</sub>)ω = dH uses only ω and H, so a map preserving ω carries the field of H to the field of H ∘ φ⁻¹ (our own). The Poisson bracket {f,g} = ω(X<sub>f</sub>,X<sub>g</sub>) uses the same pairing, so it is carried over too (our own).

**nLab:** [canonical transformation](https://ncatlab.org/nlab/show/canonical+transformation). It says: “Since phase spaces are mathematically identified with symplectic manifolds, canonical transformations are symplectomorphisms.”

**Wikipedia:** [Canonical transformation](https://en.wikipedia.org/wiki/Canonical_transformation). It says: “Modern mathematical descriptions of canonical transformations are considered under the broader topic of symplectomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Capacity normalization gives non-squeezing

**Remember:** Volume misses the narrow cylinder, but a normalized capacity sees it.

*True by definition.* MSC 53D35 (Global theory of symplectic and contact manifolds). arXiv math.SG. Level 3: graduate.

**Definition.** A normalized symplectic capacity gives each symplectic manifold a size in \[0,∞\] that cannot decrease under symplectic embedding and multiplies by a when the form is multiplied by a &gt; 0. It gives both the radius-r ball and the radius-r cylinder over a conjugate coordinate plane the value πr².

**Problem.** In standard symplectic space, a ball cannot embed symplectically into a cylinder of smaller radius over a conjugate coordinate plane.

**How the definition helps.** An embedding of the radius-r ball into the radius-R cylinder gives πr² ≤ πR² by monotonicity and normalization, so r ≤ R. The substantive input is that a normalized capacity exists (our own explanation).

**Wikipedia:** [Non-squeezing theorem](https://en.wikipedia.org/wiki/Non-squeezing_theorem). It says: “Given such a capacity, one can verify the non-squeezing theorem”

**Sources:** none listed. No primary source with a working link was found.

### Zero area recovers cup multiplication

**Remember:** Discard positive area to recover the cup product.

*True by definition.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds), 14N35. arXiv math.SG. Level 3: graduate.

**Definition.** On a closed symplectic manifold, over rational Novikov series in T with nonnegative exponents, the small quantum product satisfies ⟨a ⋆ b, c⟩ = ∑ GW<sub>A</sub>(a,b,c) T<sup>ω</sup>(A), summing genus-zero three-point invariants over curve classes A. Only constant curves have zero area, so the T⁰ term is the ordinary cup product (our own).

**Problem.** For a closed symplectic manifold, quotienting its small quantum cohomology ring by all series with zero constant term recovers its rational cohomology ring.

**How the definition helps.** Setting the positive powers of T to zero keeps only constant curves (our own). A constant curve meets the three classes at one point, so its count is ∫ a ∪ b ∪ c, the cup product paired with c (our own). Associativity of the full product needs a separate theorem (our own).

**Wikipedia:** [Quantum cohomology](https://en.wikipedia.org/wiki/Quantum_cohomology). It says: “The only pseudoholomorphic curves in class A = 0 are constant maps, whose images are points.”

**Sources:** none listed. No primary source with a working link was found.

### Berezin quantization is positive, Weyl quantization is not

**Remember:** Averaging projections with positive weights can only give positive operators.

*Rules out counterexamples.* MSC 53D50 (Geometric quantization), 53D55, 81S10. arXiv math.SG. Level 3: graduate.

**Definition.** Berezin quantization averages rank-one projections with weight f: Q(f) = ∫ f q dμ, where q assigns measurably to each point of a positive measure space (M,μ) a rank-one orthogonal projection, with ∫ q dμ = I weakly. It applies whenever this weak integral defines a bounded operator.

**Problem.** If f ≥ 0, then Q(f) is a positive operator, and if also ∫ f dμ = 1, then Q(f) is a density operator. Weyl quantization lacks this property: some nonnegative functions on ℝ² give operators with a negative expectation value.

**How the definition helps.** For f ≥ 0, each value ⟨v, Q(f)v⟩ = ∫ f ⟨v, q v⟩ dμ integrates a nonnegative function, so Q(f) is positive. Each projection has trace one, so for integrable f the trace of Q(f) is ∫ f dμ (our own calculation). Weyl expectations integrate f against a Wigner function, which is negative at the origin for the first excited oscillator state, so a nonnegative bump there gives a negative expectation (our own example).

**nLab:** [Berezin quantization](https://ncatlab.org/nlab/show/Berezin+quantization). It says: “That is, if f ≥ 0 and ∫<sub>M</sub> f dμ = 1 then Q<sub>f</sub> ≥ 0 and Tr(Q<sub>f</sub>) = 1”

**Wikipedia:** [Wigner quasiprobability distribution](https://en.wikipedia.org/wiki/Wigner_quasiprobability_distribution). It says: “the Wigner distribution can and normally does take on negative values for states which have no classical model”

**Sources:**

- [F. A. Berezin, Quantization, Mathematics of the USSR-Izvestiya 8 (1974) 1109–1165](https://doi.org/10.1070/IM1974v008n05ABEH002140)

### Prequantum curvature turns Poisson brackets into operator commutators

**Remember:** Curvature supplies the term that makes the commutator agree with the bracket.

*True by definition. Confidence: medium.* MSC 53D50 (Geometric quantization), 81S10. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** A prequantum line bundle over (M,ω) is a Hermitian line bundle with a unitary connection ∇ of curvature iω/ħ in this convention. For smooth f, define X(f) by ι(X(f))ω = df and set Q(f) = −iħ∇ along X(f) plus multiplication by f.

**Problem.** On smooth sections, \[Q(f), Q(g)\] = iħQ({f, g}) for smooth f and g. Here \[A, B\] means AB − BA and {f, g} = ω(X(f), X(g)).

**How the definition helps.** In the commutator, the derivative parts give the derivative along \[X(f),X(g)\] = −X({f,g}), and curvature corrects the multiplication term (our own calculation). The two cross terms contribute 2iħ{f,g}, while curvature contributes −iħ{f,g}. Together these give iħQ({f,g}).

**Wikipedia:** [Geometric quantization](https://en.wikipedia.org/wiki/Geometric_quantization). It says: “Prequantization produces a natural Hilbert space together with a quantization procedure for observables that exactly transforms Poisson brackets on the classical side into commutators on the quantum side.”

**Sources:** none listed. No primary source with a working link was found.

### Enveloping algebras give Gutt star products

**Remember:** Borrow the product of the enveloping algebra; associativity comes free.

*True by definition.* MSC 53D55 (Deformation quantization, star products), 17B35, 17B63. arXiv math.QA. Level 3: graduate.

**Definition.** For a finite-dimensional real Lie algebra 𝔤, the Gutt product carries the product of the formal enveloping algebra, with relations xy − yx = ħ\[x,y\], over to polynomials on 𝔤\*: f ⋆ g = σ⁻¹(σ(f)σ(g)). Here σ sends each monomial to the average of all orderings of its factors, extended coefficientwise in ħ.

**Problem.** The Gutt star product is an associative deformation quantization of the Lie–Poisson structure on 𝔤\*. It is given by bidifferential operators, so it extends to all smooth functions on 𝔤\*.

**How the definition helps.** Transport through σ preserves associativity (our own explanation). The Poincaré–Birkhoff–Witt theorem makes σ invertible, and the defining relations give the Lie–Poisson bracket to first order. Gutt’s bidifferential formula extends each coefficient to smooth functions.

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “the universal enveloping algebra of a Lie algebra provides a deformation quantization of the corresponding Lie-Poisson structure”

**Wikipedia:** [Moyal product](https://en.wikipedia.org/wiki/Moyal_product). It says: “It is a special case of the ★-product of the "algebra of symbols" of a universal enveloping algebra.”

**Sources:**

- [Simone Gutt, An explicit \*-product on the cotangent bundle of a Lie group, Letters in Mathematical Physics 7 (1983) 249–258](https://doi.org/10.1007/bf00400441)

### First-order Dirac rule evades Groenewold–van Hove

**Remember:** Exact Dirac quantization fails; Dirac's rule up to higher order works.

*Rules out counterexamples.* MSC 53D55 (Deformation quantization, star products), 81S10. arXiv math.SG, math.QA. Level 3: graduate.

**Definition.** A differential star product is a unital associative formal product f ⋆ g = fg + ∑ₖ≥₁ ħᵏBₖ(f,g) on complex smooth functions, with bidifferential coefficients Bₖ. It quantizes a Poisson bracket when only the first commutator term must match it, B₁(f,g) − B₁(g,f) = i{f,g}, leaving higher terms free.

**Problem.** Under the standard Groenewold–van Hove hypotheses with the Schrödinger position and momentum operators, no quantization satisfies the exact Dirac rule on all polynomial observables. The Moyal product formally quantizes all smooth functions on standard symplectic ℝ²ⁿ.

**How the definition helps.** The first-order rule allows the higher commutator terms excluded by the exact Dirac rule (our own explanation). Groenewold’s incompatible bracket calculations for quartic observables obstruct exact quantization. The Moyal product is associative and its first commutator coefficient is i times the canonical Poisson bracket.

**Wikipedia:** [Moyal bracket](https://en.wikipedia.org/wiki/Moyal_bracket). It says: “Its algebraic isomorphism to the algebra of commutators bypasses the negative result of the Groenewold–van Hove theorem, which precludes such an isomorphism for the Poisson bracket”

**Sources:**

- [H. J. Groenewold, On the principles of elementary quantum mechanics, Physica 12 (1946) 405–460](https://doi.org/10.1016/S0031-8914(46)80059-4)

### Hochschild–Kostant–Rosenberg makes first-order terms bivector fields

**Remember:** A cocycle’s symmetric part is a coboundary, so gauge it away.

*Makes the theorem clean to state or prove.* MSC 53D55 (Deformation quantization, star products), 16E40. arXiv math.QA. Level 3: graduate.

**Definition.** A differential Hochschild p-cochain on C∞(M) is a p-linear map on smooth functions given by a multidifferential operator. By the Hochschild–Kostant–Rosenberg theorem, a differential 2-cocycle differs from its antisymmetric part, a bivector field, by a coboundary.

**Problem.** Every differential star product whose first commutator coefficient is {·,·} is differentially equivalent to one with antisymmetric first coefficient B₁. The antisymmetric part of B₁ equals half the Poisson bracket and does not change under equivalence.

**How the definition helps.** Associativity at order ħ makes B₁ a Hochschild 2-cocycle, so its symmetric part is the coboundary of a differential operator D. An equivalence f ↦ f + ħD(f) changes B₁ by the coboundary of D, which is symmetric. So a suitable D removes the symmetric part, and the antisymmetric part never changes (our own summary).

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “Note that Cᵖ(C∞(M),C∞(M)) should be interpreted as Hom<sub>diff</sub>(C∞(M), C∞(M)).”

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662). It says: “For any equivalence class of star products, there is a representative whose first term B₁ in the ħ-expansion is skew-symmetric.”

**Sources:**

- [G. Hochschild, B. Kostant, A. Rosenberg, Differential forms on regular affine algebras, Transactions of the AMS 102 (1962) 383–408](https://doi.org/10.1090/s0002-9947-1962-0142598-8)

### Star-product commutators give Poisson brackets

**Remember:** The leading term of a commutator inherits every commutator identity.

*True by definition.* MSC 53D55 (Deformation quantization, star products), 17B63. arXiv math.QA, math.SG. Level 3: graduate.

**Definition.** A star product on M is an associative product on formal series C∞(M)\[\[ħ\]\] of the form f ⋆ g = fg + ħB₁(f,g) + ħ²B₂(f,g) + ⋯ with bilinear Bₖ. Its first-order bracket {f,g} = B₁(f,g) − B₁(g,f) is the ħ-coefficient of the commutator f ⋆ g − g ⋆ f.

**Problem.** For every star product, the first-order bracket is a Poisson bracket. It is antisymmetric, it is a derivation in each argument, and it satisfies the Jacobi identity.

**How the definition helps.** As the leading term of a commutator, the bracket inherits the commutator’s identities, and skew-symmetry is immediate. The commutator’s product rule at order ħ gives the Leibniz rule, and its Jacobi identity at order ħ² gives Jacobi for the bracket (our own summary).

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “A (formal) deformation quantization of M is a star product on A = C∞(M) such that the Poisson bracket {a,b} = B₁(a,b) − B₁(b,a) for a,b ∈ A”

**Sources:**

- [F. Bayen, M. Flato, C. Fronsdal, A. Lichnerowicz, D. Sternheimer, Deformation theory and quantization I, Annals of Physics 111 (1978) 61–110](https://doi.org/10.1016/0003-4916(78)90224-5)

### Symmetric shifts make Wick and Moyal products equivalent

**Remember:** Symmetric parts change only the gauge, never the algebra.

*True by definition.* MSC 53D55 (Deformation quantization, star products), 81S30. arXiv math.QA, math.SG. Level 3: graduate.

**Definition.** For a constant tensor π on a vector space, f ⋆π g = m exp(ħπⁱʲ∂ᵢ ⊗ ∂ⱼ)(f ⊗ g) applies the exponential of π-contracted derivatives and then multiplies pointwise (m), with repeated indices summed. Antisymmetric π gives the Moyal product, and Wick products use a complex π with an added symmetric part.

**Problem.** If α is a symmetric constant tensor, then f ↦ exp(½ħ αⁱʲ ∂ᵢ∂ⱼ) f is an algebra isomorphism from ⋆π to ⋆(π+α). Hence every Wick product is isomorphic to the Moyal product of the antisymmetric part of its tensor.

**How the definition helps.** Because α is symmetric, the product rule gives D(fg) = m ∘ exp(ħ αⁱʲ ∂ᵢ ⊗ ∂ⱼ)(Df ⊗ Dg) for D = exp(½ħ αⁱʲ∂ᵢ∂ⱼ). Constant-coefficient exponentials commute and multiply, so D(f ⋆π g) = Df ⋆(π+α) Dg follows in one line (our own computation).

**nLab:** [star product](https://ncatlab.org/nlab/show/star+product). It says: “Indeed every star product induced from a constant rank-2 tensor on a vector space is isomorphic to a Moyal star product”

**Sources:**

- [Michael Dütsch, Deformation quantization of the free theory, chapter 2 of From Classical Field Theory to Perturbative Quantum Field Theory, Progress in Mathematical Physics 74, Birkhäuser (2019) 45–69](https://doi.org/10.1007/978-3-030-04738-2_2)

### Weierstrass data make symmetry an integral test

**Remember:** Match the derivative everywhere and the position at one point.

*Makes the theorem clean to state or prove.* MSC 53A10 (Minimal surfaces in differential geometry, surfaces with prescribed mean curvature), 58E12. arXiv math.DG. Level 4: research.

**Definition.** Weierstrass data on a connected open complex curve are a nowhere-zero vector of holomorphic differentials whose squares sum to zero and whose real parts integrate to zero around every loop. For a finite group acting holomorphically on the curve and orthogonally on Euclidean space, the data respect the actions when pulling back by each g applies the orthogonal map of g to the vector.

**Problem.** Integrating the real parts gives a conformal minimal immersion F. For data respecting the actions, equality F(gx) = gF(x) everywhere reduces to testing every group element g at one chosen point x.

**How the definition helps.** The symmetry of the data gives the two sides equal derivatives everywhere (our own explanation). On a connected surface their difference is constant, so equality at the chosen point decides equality everywhere. The Weierstrass representation supplies the immersion.

**Paper or page:** [Minimal surfaces with symmetries](https://arxiv.org/abs/2308.12637v5). It says: “is G-equivariant if and only if the map f : X → Y is G-equivariant and”

**Sources:**

- [Franc Forstnerič, Minimal surfaces with symmetries](https://arxiv.org/abs/2308.12637v5)

### Holonomy determines connection symmetries

**Remember:** One fiber value extends exactly when it commutes with every loop.

*True by definition.* MSC 53C05 (Connections (general theory)), 58D05. arXiv math.DG. Level 4: research.

**Definition.** A gauge symmetry of a connection is a bundle automorphism that commutes with parallel transport along every path. So its value on one fiber fixes it everywhere, and that value commutes with transport around every loop, the holonomy group (our own).

**Problem.** On a principal bundle over a connected manifold, restriction identifies the gauge symmetry group with the fiber automorphisms commuting with all holonomy. Fiber automorphisms here respect the structure group action.

**How the definition helps.** Transport the value on one fiber along any path to extend it, and commutation with holonomy makes the result independent of the path (our own proof). Smooth local families of paths make the extension smooth. Preserving the connection is equivalent to commuting with all path transports.

**Paper or page:** [The local moduli space of the Einstein-Yang-Mills system](https://arxiv.org/abs/2311.07572). It says: “the centralizer of the holonomy of A at m ∈ M inside the automorphism group”

**Sources:**

- [The local moduli space of the Einstein-Yang-Mills system](https://arxiv.org/abs/2311.07572)

### Thin homotopy makes parallel transport a functor on paths

**Remember:** Paths that differ by sweeping no area give the same transport.

*Makes the theorem clean to state or prove.* MSC 53C05 (Connections (general theory)), 58H05. arXiv math.DG, math.CT. Level 4: research.

**Definition.** Two paths with the same endpoints are thinly homotopic when one sweeps to the other through no area: by a smooth endpoint-preserving homotopy whose differential has rank at most one everywhere. The path groupoid of X has points as objects, smooth paths constant near their endpoints modulo thin homotopy as arrows, and concatenation as composition.

**Problem.** Parallel transport on a principal G-bundle with connection defines a smooth functor from the path groupoid to G-torsors. Schreiber and Waldorf identify principal G-bundles with connection with such smooth transport functors up to categorical equivalence.

**How the definition helps.** Parallel transport does not change under thin homotopy, so it is well defined on arrows and respects concatenation. Paths constant near their endpoints make concatenation smooth, and the quotient makes it associative. Schreiber and Waldorf prove that the functor determines the connection, and that equivalence is the real theorem.

**nLab:** [parallel transport](https://ncatlab.org/nlab/show/parallel+transport). It says: “noticed that the most elegant way to (re)state the maximal equivalence relation on paths which is respected by parallel transport is in terms of thin homotopy.”

**Sources:**

- [Urs Schreiber, Konrad Waldorf, Parallel Transport and Functors, J. Homotopy Relat. Struct. 4 (2009) 187–244, arXiv:0705.0452](https://arxiv.org/abs/0705.0452)
- [A. Caetano, Roger Picken, An axiomatic definition of holonomy, Int. J. Math. 5 (1994) 835–848](https://doi.org/10.1142/S0129167X94000425)

### Closed Spin(7) forms ensure Yang–Mills

**Remember:** Close the four-form and the Bianchi identity takes over.

*Rules out counterexamples.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 4: research.

**Definition.** A Spin(7) structure on an eight-manifold is a four-form Φ that looks like the Cayley form at each point, and it fixes a metric and Hodge star ⋆. A connection is a Spin(7) instanton when its curvature F satisfies Φ ∧ F = −⋆F, so the Bianchi identity gives dₐ⋆F = −dΦ ∧ F (our own).

**Problem.** A Spin(7) instanton for a closed defining four-form satisfies the ordinary Yang–Mills equation. Without closedness, the same instanton equation need not imply the Yang–Mills equation.

**How the definition helps.** When Φ is closed, dₐ⋆F = −dΦ ∧ F is the Yang–Mills equation dₐ⋆F = 0 (our own proof). Otherwise, rescale lengths on ℝ⁸ by exp(u), with u linear and du ∧ ⋆F ≠ 0 for a nonzero constant abelian instanton curvature F. Both Φ and ⋆F gain the factor exp(4u), so F stays an instanton, but the new ⋆F is not closed (our own counterexample).

**nLab:** [Spin(7)-instanton](https://ncatlab.org/nlab/show/Spin%287%29-instanton). It says: “On a Spin(7) manifold the differential 2-forms decompose into two irreducible representations, Λ₇ and Λ₂₁ under the action of Spin(7)”

**Sources:** none listed. No primary source with a working link was found.

### Ideal instantons retain lost charge

**Remember:** Keep the missing charge at the points where curvature concentrates.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 4: research.

**Definition.** An ideal instanton of charge k on an oriented Riemannian four-manifold is an anti-self-dual SU(2) connection, with ⋆F = −F, together with finitely many distinct points of positive integer weight. The weights hold the lost charge: the second Chern number plus the sum of the weights equals k.

**Problem.** On a closed base, every sequence of anti-self-dual connections of charge k has a subsequence converging to an ideal instanton, smoothly on compact sets away from the marked points after changes of frame. In units of one instanton, the energy measures converge weakly to the limit’s energy measure plus the weighted point masses.

**How the definition helps.** The marked points hold the curvature energy that concentrates and escapes the smooth limit (our own account). Uhlenbeck compactness gives convergence away from those points, removal of singularities extends the limit connection, and energy quantization makes the weights integers.

**nLab:** [Donaldson invariant](https://ncatlab.org/nlab/show/Donaldson+invariant). It says: “corresponding to the positions of the instantons when shrinking their scale down and considering the limit”

**Paper or page:** [4-Manifold Topology, Donaldson-Witten Theory, Floer Homology and Higher Gauge Theory Methods in the BV-BFV Formalism](https://arxiv.org/abs/2107.00304). It says: “the connection A extends to a smooth anti self-dual connection Ã in B⁴.”

**Sources:** none listed. No primary source with a working link was found.

### Laurent coefficients test flatness

**Remember:** Put each equation in its own power of the parameter.

*Makes the theorem clean to state or prove.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 4: research.

**Definition.** On a complex vector bundle, take a connection D and endomorphism-valued one-forms φ and ψ, and set D(ε) = D + ε⁻¹φ + εψ for nonzero complex ε, composing endomorphisms in wedge products. Its curvature is a Laurent polynomial in ε with coefficients φ∧φ, dᴰφ, Fᴰ + φ∧ψ + ψ∧φ, dᴰψ and ψ∧ψ in degrees −2 to 2 (our own).

**Problem.** Every D(ε) is flat exactly when φ∧φ, ψ∧ψ, dᴰφ, dᴰψ and Fᴰ + φ∧ψ + ψ∧φ all vanish. Here Fᴰ is the curvature and dᴰ is the exterior derivative induced by D.

**How the definition helps.** A Laurent polynomial vanishes for every nonzero ε exactly when each of its coefficients vanishes.

**Paper or page:** [Nilpotent Higgs bundles and families of flat connections](https://arxiv.org/abs/2207.09581). It says: “Then flatness for all ε ∈ ℂ× is equivalent to the following set of equations:”

**Sources:**

- [Sebastian Schulz, Nilpotent Higgs bundles and families of flat connections](https://arxiv.org/abs/2207.09581)

### Odd degree excludes reducible projectively flat connections

**Remember:** Two parallel lines of equal degree cannot have odd total degree.

*Rules out counterexamples. Confidence: medium.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 4: research.

**Definition.** A rank-two unitary bundle over a connected closed oriented three-manifold is admissible when its determinant has odd degree on some embedded closed oriented surface. A connection with fixed determinant connection is projectively flat when its curvature is scalar at every point, so any parallel line subbundle carries half the determinant curvature (our own).

**Problem.** Every projectively flat connection on such a bundle is irreducible for determinant-one gauge transformations, meaning its stabilizer is just the center. A product bundle with the product connection shows what can fail without admissibility.

**How the definition helps.** A noncentral parallel determinant-one automorphism has two distinct eigenvalues, and its eigenlines are parallel line subbundles (our own argument). Projective flatness gives both lines the same curvature, hence equal degrees on the surface, so the determinant degree would be even. The trivial product bundle with the product connection does split this way.

**Paper or page:** [Equivariant instanton homology](https://arxiv.org/abs/1907.01091). It says: “Suppose E is a nontrivial admissible bundle over a 3-manifold Y.”

**Sources:**

- [Simon K. Donaldson, Floer Homology Groups in Yang-Mills Theory](https://doi.org/10.1017/CBO9780511543098)

### One charge adds eight virtual dimensions

**Remember:** The index formula grows by eight with each unit of charge.

*Makes the theorem clean to state or prove.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 4: research.

**Definition.** At an anti-self-dual connection A, the virtual dimension is the real Fredholm index, kernel dimension minus cokernel dimension, of dₐ\* ⊕ dₐ⁺ on adjoint-valued one-forms. This operator combines the gauge condition with the linearized self-duality equation.

**Problem.** For SU(2) bundles over a fixed connected closed oriented four-manifold, increasing the second Chern number k by one increases the virtual dimension by eight.

**How the definition helps.** The Atiyah–Singer index formula gives virtual dimension 8k − 3(1 − b₁ + b₊). The first Betti number b₁ and positive intersection index b₊ depend only on the base. Increasing k by one therefore adds eight (our own calculation).

**nLab:** [Donaldson invariant](https://ncatlab.org/nlab/show/Donaldson+invariant). It says: “dim ℳₖ₊₁ = dim ℳₖ + 8 holds under a change of the instanton number”

**Sources:**

- [Simon K. Donaldson, An application of gauge theory to four-dimensional topology](https://doi.org/10.4310/jdg/1214437665)

### A Chern–Simons 2-curving computes Pontryagin curvature

**Remember:** The derivative of the 2-curving is the characteristic form.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.CT. Level 4: research.

**Definition.** A 2-curving is the local 3-form whose derivative gives the curvature of a circle 2-gerbe, a higher circle bundle. For their Chern–Simons 2-gerbe, Roberts and Vozzo take the negative Chern–Simons form of the spin connection.

**Problem.** For a principal Spin(n) bundle with connection and n ≥ 5, this 2-gerbe has 4-curvature equal to −2π times the half-Pontryagin form.

**How the definition helps.** In Roberts and Vozzo’s normalization the 2-curving is −CS(A), so its derivative gives the negative characteristic form. The Chern–Simons transgression identity gives dCS(A) = 2π p₁(Q,A)/2. This supplies both the sign and the factor (our own explanation).

**Paper or page:** [Rigid models for 2-gerbes I: Chern-Simons geometry](https://arxiv.org/abs/2209.05521v4). It says: “\\curv (\\nabla ,\\beta \_A,-CS(A))/2\\pi = -\\frac 12 p<sub>1</sub>(Q,A).”

**Sources:**

- [Roberts and Vozzo, Rigid models for 2-gerbes I: Chern-Simons geometry](https://arxiv.org/abs/2209.05521v4)

### Absolute products preserve compact support

**Remember:** One relative factor keeps the product relative.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.AT, math.DG. Level 4: research.

**Definition.** A compactly supported differential character of degree n is a relative character for (X, X∖K) for some compact K, with classes identified as K grows. In the relative cocycle model, its cochains and curvature vanish on X∖K.

**Problem.** Compactly supported characters form a graded module over ordinary differential characters. Forgetting support commutes with this action.

**How the definition helps.** A product with one relative factor is again relative, so it vanishes outside K (our own). The relative product theorem, with its natural correction between wedge and cup products, makes the product well defined on classes. It is compatible with enlarging K and with forgetting K.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “Cheeger-Simons differential characters with compact support and Pontryagin duality”

**Sources:**

- [Christian Becker, Marco Benini, Alexander Schenkel and Richard J. Szabo, Cheeger–Simons differential characters with compact support and Pontryagin duality (2019), §3.3 and §4.2](https://doi.org/10.4310/CAG.2019.v27.n7.a2)

### Bott connections give secondary Pontryagin classes

**Remember:** Leafwise brackets kill high curvature, leaving a flat secondary class.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 57R30. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A Bott connection on the normal bundle of a foliation with tangent bundle L differentiates normal fields along leaves by brackets: ∇ₓȲ = \[X,Y\] modulo L for every leafwise X. Its curvature then lies in the ideal of forms vanishing on L, so Bott’s vanishing theorem kills its characteristic forms above degree 2q.

**Problem.** For a foliation of codimension q with 2i &gt; q, the i-th differential Pontryagin character of a Bott connection gives an ℝ/ℤ cohomology class of degree 4i−1. This class does not depend on the Bott connection.

**How the definition helps.** A differential character keeps a class one degree lower when its curvature form vanishes, and Bott’s theorem kills the degree-4i form since 4i &gt; 2q. To compare two Bott connections, join them on the cylinder with leaves extended along the interval, where the same vanishing gives equal end classes (our own argument).

**nLab:** [secondary characteristic class](https://ncatlab.org/nlab/show/secondary+characteristic+class). It says: “If that curvature form happens to vanish, the corresponding Chern-Simons form itself becomes closed”

**Paper or page:** [Rigid secondary characteristic classes](https://arxiv.org/abs/2403.09371). It says: “the Chern form $c<sub>J</sub>(\\Omega ({\\nabla ^{{\\mathcal F}}}))$ is identically zero.”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), §7, Proposition 7.3](https://doi.org/10.1007/BFb0075216)
- [Steven Hurder, Rigid secondary characteristic classes (2024), Theorem 3.1](https://arxiv.org/abs/2403.09371)

### Characteristic refinements multiply

**Remember:** Multiply the two prescribed projections and use uniqueness.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 4: research.

**Definition.** For a compact Lie group, take a conjugation-invariant polynomial P and an integral characteristic class u that P represents over ℝ. The Cheeger–Simons refinement is the unique natural assignment of a differential character to each connection with curvature P(Ω) and integral class u, where natural means it commutes with pullback of connections.

**Problem.** The refinement of the product pair (PQ, u ∪ v) equals the product of the refinements of (P,u) and (Q,v).

**How the definition helps.** The product of the two refinements is natural and has curvature PQ and integral class u ∪ v, because both projections are multiplicative (our own argument). Uniqueness of the natural assignment with given curvature and class then forces equality.

**nLab:** [Cheeger-Simons homomorphism](https://ncatlab.org/nlab/show/Cheeger-Simons+homomorphism). It says: “refines this to an assignment of secondary characteristic classes in ordinary differential cohomology to principal connections”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 2.2 and Corollary 2.3](https://doi.org/10.1007/BFb0075216)

### Circle integration computes transgression curvature

**Remember:** Curvature passes through integration along the circle.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** Transgression pulls a gerbe’s differential cohomology class back along evaluation, which sends a loop and a point of the circle to the point on the loop, and then integrates over the oriented circle. The result is a degree-two class, a line bundle with connection, and this integration commutes with taking curvature.

**Problem.** The normalized curvature of this line bundle is the integral along the same oriented circle of the pulled-back gerbe curvature.

**How the definition helps.** Because integration commutes with curvature, the line bundle’s curvature is the circle integral of the pulled-back gerbe curvature in one step. This replaces computing parallel transport in the line of trivializations along each loop (our own comparison). Identifying this line bundle with the geometric one needs a comparison theorem.

**nLab:** [fiber integration in ordinary differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+ordinary+differential+cohomology). It says: “is a differential cohomology class on X of degree k less.”

**Sources:**

- [K. Waldorf, Transgression to loop spaces and its inverse, II: Gerbes and fusion bundles with connection](https://doi.org/10.4310/ajm.2016.v20.n1.a4)
- [J. Fuchs, T. Nikolaus, C. Schweigert and K. Waldorf, Bundle gerbes and surface holonomy](https://doi.org/10.4171/077-1/8)

### Circle integration gives line bundles

**Remember:** Integrate a gerbe over the circle to get a line bundle.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** Transgression pulls a differential cohomology class on M back along the evaluation map X × S¹ → M of a smooth family of loops and integrates it over the oriented circle. Integration lowers degree by one, so a degree-three class, a gerbe with connection, becomes a degree-two class, a line bundle with connection.

**Problem.** Transgression of a circle gerbe with connection and curving gives each smooth family of loops a line bundle with unitary connection up to isomorphism.

**How the definition helps.** Degree-two differential classes are exactly line bundles with unitary connection up to isomorphism, so the degree drop gives the result (our own). It uses fiber integration in differential cohomology and the geometric classifications in degrees two and three (our own).

**nLab:** [fiber integration in ordinary differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+ordinary+differential+cohomology). It says: “sends n-connections on Σₖ on U × Σₖ to the (n−k)-connection on U which is their fiber integration over Σₖ.”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Kiyonori Gomi and Yuji Terashima, Higher-dimensional parallel transports.](https://doi.org/10.4310/MRL.2001.v8.n1.a4)

### Closed fibers permit integration

**Remember:** A closed fiber adds no boundary to a product cycle.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A degree-n differential character h is a homomorphism from smooth (n−1)-cycles to ℝ/ℤ whose value on each boundary ∂c is the integral of its curvature form ω over c, modulo integers. Integration over a closed oriented k-manifold F sends h on X × F to z ↦ h(z × u) with u a fundamental cycle, and z × u is a cycle because ∂u = 0.

**Problem.** For n &gt; k, integration over F gives a degree-(n−k) character on X whose curvature is the integral of the original curvature over F.

**How the definition helps.** Since ∂(c × u) = ∂c × u, the boundary rule for h gives the boundary rule for the new character, with curvature the fiber integral of ω (our own). Changing u by a boundary changes the value by a curvature integral with too many fiber directions, which vanishes (our own). Over an interval, the endpoints add a boundary term by Stokes’ theorem instead (our own).

**nLab:** [fiber integration in ordinary differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+ordinary+differential+cohomology). It says: “with compact fibers in terms of Deligne complex”

**Paper or page:** [Rigid models for 2-gerbes I: Chern-Simons geometry](https://arxiv.org/abs/2209.05521v4). It says: “Given a k-form ξ on X × \[a,b\] we have d∫\[a,b\] ξ + ∫\[a,b\] dξ = ξ\|X × {b} − ξ\|X × {a}.”

**Sources:**

- [Christian Bär and Christian Becker, Differential Characters and Geometric Chains.](https://doi.org/10.1007/978-3-319-07034-6_1)
- [Kiyonori Gomi and Yuji Terashima, Higher-dimensional parallel transports.](https://doi.org/10.4310/MRL.2001.v8.n1.a4)
- [D. M. Roberts and R. F. Vozzo, Rigid models for 2-gerbes I: Chern–Simons geometry, Proposition 3.9.](https://arxiv.org/abs/2209.05521v4)

### Cochains give differential characters

**Remember:** Reduce the real cochain modulo integers, and the integral part vanishes.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A degree-n differential cocycle is a triple: an integral n-cocycle c, a closed n-form ω, and a real (n−1)-cochain h with h(∂σ) = ∫\_σ ω − c(σ) for every smooth n-chain σ. Modulo integers the term c disappears, so h on cycles becomes a circle-valued function whose value on each boundary is the integral of ω.

**Problem.** Evaluating h modulo integers identifies degree-n smooth Deligne classes with differential characters. These are additive ℝ/ℤ-valued functions on (n−1)-cycles whose value on a boundary is the integral of their curvature modulo integers.

**How the definition helps.** The cochain equation, read modulo integers, is exactly the boundary rule of a character (our own). Conversely, a real lift h of a character makes ∫ω − δh an integral cocycle c, and different lifts give equivalent cocycles (our own). Matching these cochain classes with Deligne classes uses the comparison theorem (our own).

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “are equivalent to other models for these structures, notably to Deligne cohomology”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Michael J. Hopkins and Isadore M. Singer, Quadratic functions in geometry, topology, and M-theory.](https://doi.org/10.4310/jdg/1143642908)
- [Christian Bär and Christian Becker, Differential Characters and Geometric Chains.](https://doi.org/10.1007/978-3-319-07034-6_1)

### Cocycle pairing gives surface holonomy

**Remember:** Holonomy is the character read on the surface's fundamental cycle.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A gerbe with connection defines a differential character h, a homomorphism from smooth 2-cycles to ℝ/ℤ with h(∂c) = ∫<sub>c</sub> H modulo integers for every smooth 3-chain c, where H is its normalized curvature. The holonomy of a map f from a closed oriented surface is the value of f\*h on any fundamental cycle of the surface.

**Problem.** For a smooth map from a closed oriented surface, gerbe holonomy is independent of the triangulation and patch labels used in the local formula.

**How the definition helps.** On a surface the pulled-back curvature is a 3-form, hence zero, so f\*h vanishes on boundaries and sees only the homology class (our own). All oriented triangulations give the same fundamental class, and the character uses no patch labels (our own). The comparison theorem identifies this value with the local face, edge and vertex formula (our own).

**nLab:** [connection on a bundle gerbe](https://ncatlab.org/nlab/show/connection+on+a+bundle+gerbe), [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “assigns the exponentiated integrals of the 2-form over faces, of the connection 1-form over edges, and assigns the isomorphism μᵢⱼₖ to vertices.”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Kiyonori Gomi and Yuji Terashima, Higher-dimensional parallel transports.](https://doi.org/10.4310/MRL.2001.v8.n1.a4)

### Compact support requires relative periods

**Remember:** Chains ending outside K are cycles, so their periods are integers.

*Rules out counterexamples. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.AT, math.DG. Level 4: research.

**Definition.** A compactly supported degree-n character is, for some compact K, a homomorphism h from relative (n−1)-cycles of (X, X∖K) to ℝ/ℤ whose curvature ω vanishes off K and satisfies h(∂c) = ∫<sub>c</sub> ω modulo integers for every relative n-chain c. Two representatives are equal if they agree after enlarging K.

**Problem.** The curvature integrates to an integer on every relative cycle of its degree. A compactly supported 1-form on ℝ with integral one half cannot occur.

**How the definition helps.** A relative cycle c has zero relative boundary, so ∫<sub>c</sub> ω is zero modulo integers. In our own example, an interval with K in its interior is a relative cycle and detects the half-integer. Absolute cycles miss it, because every 1-form on the line has a primitive.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “Cheeger-Simons differential characters with compact support and Pontryagin duality”

**Sources:**

- [Christian Becker, Marco Benini, Alexander Schenkel and Richard J. Szabo, Cheeger–Simons differential characters with compact support and Pontryagin duality (2019), Definition 3.1 and Theorem 4.2](https://doi.org/10.4310/CAG.2019.v27.n7.a2)

### Compact support retains data at infinity

**Remember:** A path from end to end counts only relative to infinity.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.AT, math.DG. Level 4: research.

**Definition.** A compactly supported degree-two character is a degree-two differential character relative to X∖K for some compact K, with two such identified when they agree after enlarging K. A relative character maps relative one-cycles, including paths with both ends outside K, additively to ℝ/ℤ and evaluates boundaries by integrating its curvature modulo integers.

**Problem.** On the real line, compactly supported degree-two characters form the group ℝ/ℤ. Every such character becomes zero on forgetting compact support.

**How the definition helps.** Relative cycles include a path crossing K from one end of the line to the other, which absolute cycles miss. In our own calculation, with K a closed interval, ℝ has no nonzero 2-forms, so characters are homomorphisms to ℝ/ℤ from relative first homology, generated by the crossing path. Enlarging the interval keeps this generator, while absolute first homology vanishes.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “Cheeger-Simons differential characters with compact support and Pontryagin duality”

**Sources:**

- [Christian Becker, Marco Benini, Alexander Schenkel and Richard J. Szabo, Cheeger–Simons differential characters with compact support and Pontryagin duality (2019), Theorem 4.2 and Remark 4.5](https://doi.org/10.4310/CAG.2019.v27.n7.a2)

### Curving adjusts the Chern character

**Remember:** exp(−B) cancels what each line adds to the Chern character.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A finite-rank gerbe module has local vector bundles with connection that differ on overlaps by tensoring with the gerbe's lines, compatibly with the connections. Choose local 2-forms B whose differences equal the intervening line curvatures divided by 2πi. The adjusted Chern character is exp(−B) ∧ tr exp(F∕2πi), where F is the local module curvature, so the jump in exp(−B) cancels the factor each line contributes.

**Problem.** The adjusted forms agree on overlaps and give a global even form α satisfying dα + H ∧ α = 0, where H = dB.

**How the definition helps.** Tensoring with a line multiplies the ordinary Chern character by the exponential of the line's normalized curvature, and the jump in exp(−B) cancels it, so the local forms glue (our own calculation). The ordinary character is closed, so differentiating exp(−B) gives dα = −H ∧ α.

**Wikipedia:** [Bundle gerbe](https://en.wikipedia.org/wiki/Bundle_gerbe). It says: “The twisted Chern character is a differential form that represents a class in the twisted cohomology”

**Sources:**

- [P. Bouwknegt, A. L. Carey, V. Mathai, M. K. Murray and D. Stevenson, Twisted K-Theory and K-Theory of Bundle Gerbes](https://doi.org/10.1007/s002200200646)
- [V. Mathai and D. Stevenson, Chern Character in Twisted K-Theory: Equivariant and Holomorphic Cases](https://doi.org/10.1007/s00220-003-0807-7)

### Deligne squares define Chern–Simons

**Remember:** Square the differential class, then evaluate on the fundamental cycle.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A line bundle with unitary connection defines a degree-two differential class. Its Deligne square, the product of this class with itself, is a degree-four character: an additive ℝ/ℤ-valued function on three-cycles whose value on a boundary is the integral of the squared curvature form modulo integers.

**Problem.** On a closed oriented three-manifold, evaluating the Deligne square on the orientation class gives the abelian Chern–Simons action in ℝ/ℤ with this normalization. For a trivial bundle with real normalized connection form A, the action is ∫ A∧dA modulo integers.

**How the definition helps.** The square is a global character even when the local connection forms do not glue to one form (our own). On a three-manifold its 4-form curvature vanishes, so its value depends only on the homology class, and the orientation class gives a number (our own). On a trivial bundle the Deligne product reduces to A∧dA (our own).

**nLab:** [Beilinson–Deligne cup product](https://ncatlab.org/nlab/show/Beilinson%E2%80%93Deligne+cup+product). It says: “The action functional of abelian higher dimensional Chern-Simons theory is given by the fiber integration in ordinary differential cohomology over the BD cup product of differential cocycles”

**Sources:**

- [Domenico Fiorenza, Hisham Sati and Urs Schreiber, Extended higher cup-product Chern–Simons theories.](https://doi.org/10.1016/j.geomphys.2013.07.011)
- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Kiyonori Gomi, Projective unitary representations of smooth Deligne cohomology groups, §2.](https://doi.org/10.1016/j.geomphys.2009.06.012)

### Fake flatness permits surface transport

**Remember:** The surface label must equal the curvature around its edges.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 18N10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** Present the strict Lie 2-group by a crossed module t: H → G, and take a local 1-form A valued in the Lie algebra of G and a 2-form B valued in that of H. The pair is fake flat when t sends B to the curvature dA + ½\[A,A\], so the surface label matches transport around its boundary.

**Problem.** On a trivialized patch, the pair defines smooth strict transport along paths and bigons precisely when it is fake flat. Transport factors through the thin path 2-groupoid.

**How the definition helps.** Fake flatness makes the boundary of each surface label agree with transport along its two edges, as strict transport along bigons requires. The integration theorem builds transport from the forms and recovers the forms by differentiation. In our own counterexample, take the identity crossed module of the circle, A = 0 and a nonzero B on the plane.

**nLab:** [higher parallel transport](https://ncatlab.org/nlab/show/higher+parallel+transport). It says: “A 2-connection therefore admits parallel transport only if its 2-form curvature is constrained to vanish.”

**Sources:**

- [Schreiber and Waldorf, Smooth functors vs. differential forms](https://doi.org/10.4310/hha.2011.v13.n1.a7)

### Finite holonomy determines the secondary class

**Remember:** The secondary class is a Bockstein lift of minus u.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.AT, math.DG. Level 4: research.

**Definition.** A flat bundle's holonomy group H is its group of parallel transports around loops. For a positive-degree integral characteristic class u compatible with an invariant polynomial, the secondary class of the flat bundle is the ℝ/ℤ-cohomology class one degree lower given by the flat differential refinement, and its Bockstein is −u.

**Problem.** For finite H and u of degree at least two, the secondary class pulls back from the unique class on BH with Bockstein −u\|BH. Here BH classifies principal H-bundles, and the Bockstein connects ℝ/ℤ cohomology to integral cohomology.

**How the definition helps.** A flat bundle with holonomy H pulls back from BH, so by naturality its secondary class pulls back from the universal flat class there (our own explanation). For finite H, real cohomology of BH vanishes in positive degrees, so the Bockstein is an isomorphism in degrees at least one. The coefficient exact sequence then makes the lift of −u\|BH unique.

**nLab:** [secondary characteristic class](https://ncatlab.org/nlab/show/secondary+characteristic+class). It says: “The refined Chern-Weil homomorphism takes values in such "secondary characteristic classes".”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Proposition 2.10](https://doi.org/10.1007/BFb0075216)

### Flat gerbes measure differential string choices

**Remember:** Two paths to zero differ by a loop at zero.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 57R15. arXiv math.CT, math.DG. Level 4: research.

**Definition.** Fix a spin bundle with connection. An untwisted differential string structure is a path, in the space classifying circle 2-gerbes with connection, from its differential half-Pontryagin cocycle to the zero cocycle, that is, a trivialization including connection data.

**Problem.** Choosing one such trivialization identifies the space of all such choices with the space of flat circle gerbes, including their isomorphisms and higher symmetries.

**How the definition helps.** Two paths from the cocycle to zero differ by a loop at zero, found by reversing one and composing with the other (our own argument). Loops at zero in this space are circle gerbes with closed local 2-forms, which are exactly the flat gerbes (our own).

**nLab:** [differential string structure](https://ncatlab.org/nlab/show/differential+string+structure), [circle n-bundle with connection](https://ncatlab.org/nlab/show/circle+n-bundle+with+connection). It says: “is the homotopy fiber of ½ p̂₁(X) over the trivial differential cocycle.”

**Sources:**

- [Fiorenza, Schreiber and Stasheff, Čech cocycles for differential characteristic classes](https://doi.org/10.4310/atmp.2012.v16.n1.a5)

### Form multiplication forces cup products

**Remember:** Wedge the curvatures, and let forms act through curvature.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 4: research.

**Definition.** In ordinary differential cohomology, each form α gives a class a(α) one degree higher, and each class x has a closed curvature form R(x). A compatible product satisfies R(xy) = R(x) ∧ R(y) and a(α)x = a(α ∧ R(x)).

**Problem.** On an ordinary character functor, the diagram model of ordinary differential cohomology, at most one natural graded-commutative ring product satisfies these rules.

**How the definition helps.** The form rule makes the difference of two products depend only on the underlying integral classes (our own). The curvature rule makes that difference flat, so it is a natural bilinear operation into circle-valued cohomology one degree lower (our own). Simons and Sullivan show that no nonzero such operation exists (our own).

**nLab:** [ordinary differential cohomology](https://ncatlab.org/nlab/show/ordinary+differential+cohomology). It says: “both these sequences interlock to form the hexagonal differential cohomology diagram of ordinary differential cohomology.”

**Sources:**

- [Simons and Sullivan, Axiomatic characterization of ordinary differential cohomology](https://doi.org/10.1112/jtopol/jtm006)

### Fusion recovers lost gerbes

**Remember:** Fusion remembers how three paths fit together.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A fusion circle bundle on loop space has smooth associative isomorphisms L(a,b) ⊗ L(b,c) → L(a,c) for every three paths a, b, c with common endpoints, where L(a,b) is the fiber over the loop a followed by reversed b. A compatible connection preserves these products and swaps the factors under transport along half-rotation.

**Problem.** On a connected smooth manifold, transgression identifies circle gerbes with connection, up to isomorphism, with fusion circle bundles having superficial connections, up to isomorphism. Superficial connections give phase one on tori of rank at most one and preserve phases during homotopies of rank at most two.

**How the definition helps.** Fusion keeps the product of loops along shared paths, which is the data needed to rebuild a gerbe from its loop bundle, and Waldorf proves this reconstruction. In our own example, a flat gerbe on a closed oriented genus-two surface has nontrivial phase on the surface. Every torus map to this surface has degree zero, so the loop connection alone has trivial holonomy.

**nLab:** [transgression of bundle gerbes](https://ncatlab.org/nlab/show/transgression+of+bundle+gerbes). It says: “Lifted transgression L̃ is an equivalence of categories”

**Sources:**

- [K. Waldorf, Transgression to loop spaces and its inverse, II: Gerbes and fusion bundles with connection](https://doi.org/10.4310/ajm.2016.v20.n1.a4)

### Geometric string structures give Pontryagin primitives

**Remember:** Trivialize the 2-gerbe with connection and keep its global three-form.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 57R15. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A geometric string structure for a spin connection is a connection-preserving trivialization of its Chern–Simons 2-gerbe to a trivial 2-gerbe with a global 3-curving C, whose curvature is dC.

**Problem.** The derivative of C equals the half-Pontryagin form of the spin connection, with the normalization used for the Chern–Simons 2-gerbe.

**How the definition helps.** A connection-preserving trivialization identifies the curvature dC of the trivial 2-gerbe with the curvature of the Chern–Simons 2-gerbe, its normalized half-Pontryagin form (our own explanation).

**nLab:** [differential string structure](https://ncatlab.org/nlab/show/differential+string+structure). It says: “on a trivial circle n-bundle every connection may be represented by a globally defined n-form.”

**Sources:**

- [Waldorf, String connections and Chern–Simons theory](https://doi.org/10.1090/s0002-9947-2013-05816-3)

### Gerbe automorphisms are flat line bundles

**Remember:** A symmetry fixing the curving is a flat line bundle.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** In local Deligne data, a symmetry of a gerbe that preserves its connection and local 2-forms is a family of closed real 1-forms aᵢ and circle-valued functions gᵢⱼ with gᵢⱼgⱼₖ = gᵢₖ and aⱼ − aᵢ = gᵢⱼ⁻¹dgᵢⱼ/(2πi). These are the gluing equations of a flat unitary line bundle, and two symmetries are isomorphic when they differ by a change of local unitary frames.

**Problem.** Up to isomorphism, symmetries preserving a gerbe’s connection and local two-forms form the group of flat unitary line bundles under tensor product.

**How the definition helps.** Fixing the local 2-forms forces daᵢ = 0, so the aᵢ are flat local connection forms (our own). The equations glue them into a line bundle, and frame changes give isomorphic bundles (our own). Matching gerbe symmetries with these cocycle changes uses the comparison between gerbes and Deligne cocycles (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “the collection of Deligne cocycles with coefficients in the Deligne complex that defines it, is considerably richer than other models”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Paweł Gajer, Geometry of Deligne cohomology.](https://doi.org/10.1007/s002220050118)

### Gerbe multiplication builds a bundle 2-gerbe

**Remember:** The fiber difference map turns gerbe multiplication into gluing.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 18N10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A multiplicative gerbe on a group G is a circle gerbe 𝒢, a higher circle bundle, with isomorphisms 𝒢<sub>g</sub> ⊗ 𝒢<sub>h</sub> ≅ 𝒢<sub>gh</sub>. A chosen isomorphism compares the two products of three factors, and these comparisons satisfy the pentagon identity for four.

**Problem.** Every principal G-bundle and multiplicative gerbe on G determine a bundle 2-gerbe on the base, with gerbes as its transition data.

**How the definition helps.** Two points in one fiber of the G-bundle determine the unique group element carrying one to the other, and pulling back 𝒢 along it gives a gerbe on pairs. On triples these elements multiply, so gerbe multiplication gives the transition isomorphism. On quadruples the comparison of triple products gives the associator, and the pentagon gives the last gluing law.

**nLab:** [universal Chern-Simons line 3-bundle](https://ncatlab.org/nlab/show/universal+Chern-Simons+line+3-bundle). It says: “the pullback of the multiplicative structure on 𝒢 induces the structure of a bundle 2-gerbe”

**Sources:**

- [Carey, Johnson, Murray, Stevenson and Wang, Bundle gerbes for Chern-Simons and Wess-Zumino-Witten theories](https://doi.org/10.1007/s00220-005-1376-8)

### Higher refined classes stay constant along flat paths

**Remember:** Boundaries are priced by P(F), and dt squared is zero.

*Rules out counterexamples. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 4: research.

**Definition.** A Cheeger–Simons character refines an integral characteristic class whose real image comes from an invariant polynomial P. It assigns to each cycle a value in ℝ/ℤ, and to the boundary of a chain c it assigns ∫<sub>c</sub> P(F) modulo integers, where F is the connection curvature.

**Problem.** Along a smooth path of flat connections on a fixed principal bundle, the refined class stays constant if P has degree at least two. The differential first Chern class can vary.

**How the definition helps.** A path of flat connections is one connection on the cylinder, and its curvature contains dt in every term, since each time slice is flat. If P has degree at least two, every term of P(F) has two factors dt, so it vanishes, and the two ends of every swept cycle get equal values. In our own example, the flat connections d + 2πit dx on the trivial line over ℝ/ℤ have different transports around the circle.

**nLab:** [Chern-Simons form](https://ncatlab.org/nlab/show/Chern-Simons+form). It says: “is a form that trivializes the difference between the two curvature characteristic forms”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Proposition 2.9 and §4](https://doi.org/10.1007/BFb0075216)

### Jandl structures allow unoriented holonomy

**Remember:** Reverse the orientation and dualize the gerbe.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** For an involution k of the base, a Jandl structure on a gerbe 𝒢 with connection is a connection-preserving isomorphism A from k\*𝒢 to the dual gerbe, with a 2-isomorphism identifying A applied twice with the identity, coherent under a third application. The dual gerbe inverts surface phases, just as reversing orientation does.

**Problem.** A Jandl gerbe assigns a phase to a closed unoriented surface mapped from its orientation double cover into the base. The map must intertwine the exchange of sheets with the involution on the base.

**How the definition helps.** Reversing a local orientation inverts a phase, and the duality A inverts it back, so local phases glue (our own explanation). The holonomy theorem proves independence from the chosen local orientations. In our own counterexample, a trivial gerbe on the sphere with 2-form integral one-third has phase exp(2πi/3), not its own inverse, so it has no Jandl structure for the identity involution.

**nLab:** [connection on a bundle gerbe](https://ncatlab.org/nlab/show/connection+on+a+bundle+gerbe). It says: “The generalization ("Jandl gerbes") to unoriented surfaces”

**Sources:**

- [U. Schreiber, C. Schweigert and K. Waldorf, Unoriented WZW Models and Holonomy of Bundle Gerbes](https://doi.org/10.1007/s00220-007-0271-x)

### Locally constant coefficients classify flat gerbes

**Remember:** At zero curvature, only locally constant transition data survive.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 18F20. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A flat circle gerbe is a circle gerbe with connection, given locally by circle functions, 1-forms and 2-forms on overlapping patches, whose 3-curvature vanishes, so its local 2-forms are closed. Closed forms are locally exact, so locally the form data can be gauged away, leaving locally constant circle functions.

**Problem.** On a smooth manifold X, flat circle gerbes, their isomorphisms and the maps between isomorphisms form the mapping space from X to K(ℝ/ℤ, 2). This target has just one nonzero homotopy group, the discrete circle group in degree two.

**How the definition helps.** Gauging away the forms turns flat gerbe data into Čech data with coefficients in the locally constant circle-valued functions, which is cohomology with coefficients in the discrete circle. The comparison with geometric gerbes extends this to isomorphisms and the maps between them.

**nLab:** [circle n-bundle with connection](https://ncatlab.org/nlab/show/circle+n-bundle+with+connection). It says: “by the Poincare lemma applied to each Cartesian space”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://doi.org/10.1007/s40062-014-0092-5)

### Loop transport computes torus holonomy

**Remember:** A loop of loops sweeps the torus seen by the gerbe.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** Transgression gives a circle bundle with connection on free loop space: pull the gerbe's differential class back along the evaluation map from loops times the circle to the base, then integrate over the loop parameter. Integrating over the circle evaluates the pulled-back class on a cycle times the loop circle.

**Problem.** Transport around a closed curve in free loop space has the same holonomy as the gerbe on the torus it traces. Orient the torus in the order used for integration.

**How the definition helps.** A closed curve of loops times the loop circle is the torus it sweeps, so evaluating the integrated class on the curve evaluates the gerbe on that torus (our own derivation). This is the evaluation rule for integrating differential characters, which assign circle values to cycles. The comparison theorem identifies the integrated class with the bundle built from gerbe trivializations.

**nLab:** [fiber integration in ordinary differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+ordinary+differential+cohomology). It says: “the partial higher holonomy operation for circle n-bundles with connection”

**Sources:**

- [Waldorf, Transgression to loop spaces and its inverse, II](https://doi.org/10.4310/ajm.2016.v20.n1.a4)

### Multiplicative gerbes give product holonomy

**Remember:** The product gerbe splits into two factors plus a 2-form correction.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A multiplicative circle gerbe with connection on a Lie group is a connection-preserving isomorphism from its pullback by multiplication to the tensor product of its two pullbacks by projection and a trivial gerbe with real 2-form ρ on the group square, associative up to compatible isomorphism. Surface phases multiply under tensor product, and the trivial gerbe with 2-form ρ has phase exp(2πi ∫ρ).

**Problem.** For smooth maps f and g from a closed oriented surface into the group, their surface phases satisfy h(fg) = h(f)h(g) exp(2πi ∫ (f,g)⁎ρ).

**How the definition helps.** Pulling the comparison back along (f,g) writes the phase of fg as the product of the phases of the three tensor factors (our own derivation). The trivial factor contributes exp(2πi ∫ (f,g)⁎ρ).

**nLab:** [basic gerbe](https://ncatlab.org/nlab/show/basic+gerbe). It says: “the basic bundle gerbe itself has a multiplicative structure covering that on G”

**Sources:**

- [K. Waldorf, Multiplicative bundle gerbes with connection](https://doi.org/10.1016/j.difgeo.2009.10.006)
- [J. Fuchs, T. Nikolaus, C. Schweigert and K. Waldorf, Bundle gerbes and surface holonomy](https://doi.org/10.4171/077-1/8)

### Rational coefficients kill flat cross terms

**Remember:** Rationally, flat classes multiply to zero, leaving only the linear term.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 4: research.

**Definition.** The degree-2r differential Chern character is the r-th Newton polynomial in the rationalized differential Chern classes, divided by r!. For a flat unitary connection and r ≥ 1 its curvature vanishes, so it defines a secondary character in degree 2r−1 with ℝ/ℚ coefficients.

**Problem.** In degree 2r−1, the secondary Chern character equals the secondary r-th Chern class multiplied by (−1)ʳ⁻¹/(r−1)!, after passage to ℝ/ℚ coefficients.

**How the definition helps.** With rational coefficients every product of two positive-degree flat factors vanishes, so only the linear term of the Newton polynomial survives. In our own explanation, the flat product formula pairs one factor with the rational characteristic class of the other, and flatness kills that class. The linear coefficient of the Newton polynomial is (−1)ʳ⁻¹r, and dividing by r! gives (−1)ʳ⁻¹/(r−1)!.

**nLab:** [secondary characteristic class](https://ncatlab.org/nlab/show/secondary+characteristic+class). It says: “The refined Chern-Weil homomorphism takes values in such "secondary characteristic classes".”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 8.22](https://doi.org/10.1007/BFb0075216)

### Rigid connections give one curvature class

**Remember:** The 4-curvature always represents the 2-gerbe's real characteristic class.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.CT. Level 4: research.

**Definition.** For a rigid bundle 2-gerbe with connection, the 2-curving C is a three-form on its cover. Its four-curvature is the unique base form Ω satisfying π\*Ω = dC for the cover projection π.

**Problem.** Any two rigid connections on the same rigid bundle 2-gerbe give 4-curvatures that differ by an exact form.

**How the definition helps.** The 4-curvature represents the real characteristic class of the underlying 2-gerbe, by the curvature comparison theorem (our own explanation). That class does not involve the connection, so the two 4-curvatures are cohomologous and their difference is exact.

**Paper or page:** [Rigid models for 2-gerbes I: Chern-Simons geometry](https://arxiv.org/abs/2209.05521v4). It says: “Hence the de Rham class associated to a rigid bundle 2-gerbe is independent of the choice of rigid connective structure.”

**Sources:**

- [Roberts and Vozzo, Rigid models for 2-gerbes I: Chern-Simons geometry](https://arxiv.org/abs/2209.05521v4)

### Secondary Chern characters satisfy fiber transfer

**Remember:** Take the real secondary class in each degree and alternate signs.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 4: research.

**Definition.** For a flat complex bundle, take the real part of its Cheeger–Chern–Simons class, the odd-degree secondary Chern character, using the coefficient map ℂ/ℚ → ℝ/ℚ. For a finite graded flat bundle, the real secondary character is the sum of these classes with sign (−1)ʲ in degree j.

**Problem.** A flat complex bundle on a smooth family of closed oriented manifolds over a compact base gives flat cohomology bundles on the base. Their alternating real secondary character equals the fiber integral of the original real secondary character times the Euler class of the vertical tangent bundle, the tangent spaces along the fibers.

**How the definition helps.** The secondary character puts both sides in the same odd cohomology group with ℝ/ℚ coefficients, where ordinary real Chern classes of flat bundles vanish. In our own reading, the alternating sum matches the grading of fiber cohomology. Ho’s local index theorem proves the equality.

**Paper or page:** [Local index theory and the Riemann-Roch-Grothendieck theorem for complex flat vector bundles II](https://arxiv.org/abs/2310.06616). It says: “\\operatorname{Re}(\\operatorname{CCS}(H(Z, F\|<sub>Z</sub>), \\nabla <sup>H(Z, F\|<sub>Z</sub>)</sup>))=\\int <sub>X/B</sub>e(T<sup>VX</sup>)\\cup \\operatorname{Re}(\\operatorname{CCS}(F, \\nabla ^F))”

**Sources:**

- [Man-Ho Ho, Local index theory and the Riemann-Roch-Grothendieck theorem for complex flat vector bundles II (2023), real Riemann–Roch–Grothendieck formula](https://arxiv.org/abs/2310.06616)

### Smooth duals exclude point evaluations

**Remember:** The dual must pair with forms by integration, not by sampling.

*Rules out counterexamples. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.AT, math.DG. Level 4: research.

**Definition.** On a closed oriented n-manifold, each (k−1)-form gives a degree-k integration character, which integrates the form over cycles modulo integers. A homomorphism from degree-k characters to ℝ/ℤ is smooth if on integration characters it integrates the form wedged with a fixed smooth (n−k+1)-form, as pairing with a character does.

**Problem.** For 1 ≤ k ≤ n, every smooth homomorphism on degree-k characters pairs with a unique degree-(n−k+1) character by multiplication and evaluation on the manifold.

**How the definition helps.** Multiplying an integration character by a character y and evaluating on the manifold gives the integral of the form wedged with the curvature of y, which is the smoothness condition. Our own counterexample evaluates a circle-valued function at one point of the circle; a representing density would vanish off that point, hence everywhere. Existence and uniqueness use the smooth duality theorem.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “Cheeger-Simons differential characters with compact support and Pontryagin duality”

**Sources:**

- [Christian Becker, Marco Benini, Alexander Schenkel and Richard J. Szabo, Cheeger–Simons differential characters with compact support and Pontryagin duality (2019), Definition 5.2 and Theorem 5.4](https://doi.org/10.4310/CAG.2019.v27.n7.a2)

### Thin loops constrain transgression connections

**Remember:** Thin tori carry no phase, and thin homotopies keep it.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A loop of loops traces a torus in the base manifold. A connection on a circle bundle over loop space is superficial if its holonomy is one around every loop of loops whose torus has differential rank at most one, and is equal for two loops of loops joined by a homotopy of rank at most two. These are the tori and homotopies too thin to carry a 2-form or a 3-form.

**Problem.** Every circle gerbe with connection induces a superficial connection on its bundle over free loops.

**How the definition helps.** A gerbe's surface holonomy is trivial on a torus too thin to carry a 2-form, and its curvature formula shows that a homotopy too thin to carry a 3-form keeps the phase (our own derivation). In our own counterexample, evaluate loops in a circle at one parameter and pull back a flat connection with nontrivial phase. The circle of constant loops keeps that phase although its torus map has rank one.

**nLab:** [transgression of bundle gerbes](https://ncatlab.org/nlab/show/transgression+of+bundle+gerbes). It says: “if φ ∈ LLX, φ̃ : S¹ × S¹ → X has rank one, then”

**Sources:**

- [K. Waldorf, Transgression to loop spaces and its inverse, II: Gerbes and fusion bundles with connection](https://doi.org/10.4310/ajm.2016.v20.n1.a4)

### Transgression lines hold boundary holonomy

**Remember:** Points of the line are trivializations of the gerbe on the loop.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** The transgression line of a circle gerbe with connection assigns a complex line to each smooth loop. Its unit vectors are the ways to identify the gerbe on that loop with the trivial gerbe with zero curving, up to connection-preserving isomorphism.

**Problem.** A smooth map from a compact oriented surface with one parametrized outgoing boundary gives a canonical unit vector in the line of its boundary loop.

**How the definition helps.** A trivialization of the gerbe over the surface gives a boundary trivialization and a phase, the exponential of the integral of its 2-form (our own explanation). Changing the surface trivialization changes the boundary vector and the phase by inverse factors, by Stokes' theorem for the comparison line bundle. Their product is therefore a canonical vector.

**nLab:** [transgression of bundle gerbes](https://ncatlab.org/nlab/show/transgression+of+bundle+gerbes). It says: “for β ∈ LX and where I₀ denotes the trivial gerbe on the circle.”

**Sources:**

- [K. Waldorf, Transgression to loop spaces and its inverse, II: Gerbes and fusion bundles with connection](https://doi.org/10.4310/ajm.2016.v20.n1.a4)
- [J. Fuchs, T. Nikolaus, C. Schweigert and K. Waldorf, Bundle gerbes and surface holonomy](https://doi.org/10.4171/077-1/8)
- [S. Bunk and K. Waldorf, Smooth functorial field theories from B-fields and D-branes](https://link.springer.com/article/10.1007/s40062-020-00272-2)

### Translation symmetries of a gerbe model String

**Remember:** String is the 2-group of translations that lift to the gerbe.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 18N10. arXiv math.CT, math.DG. Level 4: research.

**Definition.** A basic circle gerbe on G is a higher circle bundle whose class generates H³(G; ℤ). Its symmetry 2-group has as elements pairs of a g ∈ G and an isomorphism from the g-translate of the gerbe to the gerbe, with isomorphisms between these as arrows and composition as product.

**Problem.** For compact, simple, simply connected G, this symmetry 2-group models String(G), the cover that also kills the third homotopy group.

**How the definition helps.** Composition of gerbe symmetries supplies the multiplication of the 2-group, and forgetting the isomorphism maps it onto G. Theorem 1.4 does the work of identifying its homotopy type with String(G).

**Paper or page:** [Smooth 2-Group Extensions and Symmetries of Bundle Gerbes](https://arxiv.org/abs/2004.13395v2). It says: “Then both Symɢ(𝒢) and Desₗ are smooth 2-group models for the string group of G.”

**Sources:**

- [Bunk, Müller and Szabo, Smooth 2-Group Extensions and Symmetries of Bundle Gerbes, Theorem 1.4](https://arxiv.org/abs/2004.13395v2)

### Universal differential classes commute with pullback

**Remember:** Pull back one differential class to every bundle with connection.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.CT. Level 4: research.

**Definition.** For a compact Lie group G, a universal differential characteristic class is one map from the stack of G-bundles with connection, which records smooth families and their isomorphisms, to differential cohomology. It refines an even positive-degree integral class, has the class's characteristic form as curvature, and gives each bundle its class by composition with the bundle's classifying map.

**Problem.** Pulling back a bundle with connection pulls back its differential characteristic class along the same smooth map.

**How the definition helps.** The classifying map of a pulled-back bundle is the original classifying map composed with the smooth map, so composition with the universal map gives the pulled-back class. Computing the class separately for each connection would instead need a separate check of naturality (our own comparison). The work goes into constructing the universal map with the prescribed curvature.

**Paper or page:** [Bordism for the 2-group symmetries of the heterotic and CHL strings](https://arxiv.org/abs/2304.14764v1). It says: “there is a map č : B∇G → Bᵏ⁻¹∇𝕋 natural in (G, c)”

**Sources:**

- [Debray, Bordism for the 2-group symmetries of the heterotic and CHL strings, Theorem 22](https://arxiv.org/abs/2304.14764v1)

### Whitney sums multiply differential Chern classes

**Remember:** A natural character is fixed by its curvature and Chern class.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 4: research.

**Definition.** The differential Chern classes are the natural assignments of characters to Hermitian bundles with unitary connection, characterized by two projections: their curvatures are the Chern forms of the connection, and their integral classes are the ordinary Chern classes. The total class is their sum, including the degree-zero unit.

**Problem.** For a direct sum with its block sum connection, the total differential Chern class equals the product of the total classes of the summands.

**How the definition helps.** Both sides of the formula are natural assignments for pairs of bundles, that is, for bundles of the product of two unitary groups (our own comparison). They have the same curvature and integral class by the ordinary sum formulas, so the uniqueness theorem for such assignments makes them equal.

**nLab:** [Cheeger-Simons homomorphism](https://ncatlab.org/nlab/show/Cheeger-Simons+homomorphism). It says: “refines this to an assignment of secondary characteristic classes in ordinary differential cohomology to principal connections”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 4.6](https://doi.org/10.1007/BFb0075216)

### Singular foliations as modules of vector fields always have holonomy groupoids

**Remember:** Remember the vector fields, not only the leaves.

*Makes the theorem clean to state or prove.* MSC 53C12 (Foliations (differential geometric aspects)), 58H05. arXiv math.DG. Level 4: research.

**Definition.** A singular foliation on a smooth manifold M is the family of vector fields that generates it: a locally finitely generated C∞(M)-submodule of compactly supported smooth vector fields, closed under the Lie bracket.

**Problem.** Every singular foliation in this sense has a holonomy groupoid H(F). It is minimal in the sense that every source-connected Lie groupoid integrating F maps onto H(F).

**How the definition helps.** Local generators give flows, and their compositions give local charts for the groupoid even near leaves of changing dimension. The Androulidakis–Skandalis holonomy groupoid theorem builds H(F) from these charts and proves its minimality (our own summary).

**Paper or page:** [The Holonomy Groupoids of Singularly Foliated Bundles](https://arxiv.org/abs/2006.14271). It says: “Let M be a manifold with a singular foliation F. Then there exists a topological groupoid H(F) for which the following hold. H(F) integrates the foliation F, in the sense that its orbits are the leaves of F.”

**Sources:**

- [L. E. MacDonald, The Holonomy Groupoids of Singularly Foliated Bundles, SIGMA 17 (2021), 043](https://arxiv.org/abs/2006.14271)
- [I. Androulidakis and G. Skandalis, The holonomy groupoid of a singular foliation, Journal für die reine und angewandte Mathematik 626 (2009) 1–37](https://doi.org/10.1515/crelle.2009.001)

### Distributional Ricci curvature lets the splitting theorem hold for C¹ metrics

**Remember:** Curvature tested against bump functions keeps its sign for C¹ metrics.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C21 (Methods of global Riemannian geometry, including PDE methods; curvature restrictions), 53C23. arXiv math.DG, math.MG. Level 4: research.

**Definition.** For a C¹ Riemannian metric, the Christoffel symbols are only continuous, so Ricci curvature exists only as a distribution acting on test densities. It is nonnegative if Ric(X,X) pairs nonnegatively with every nonnegative smooth compactly supported test density, for every smooth compactly supported vector field X.

**Problem.** A complete connected C¹ Riemannian manifold with distributionally nonnegative Ricci curvature and a line splits C¹-isometrically as a product with ℝ. A line is a unit-speed geodesic defined on ℝ that minimizes length between every pair of its points.

**How the definition helps.** Testing against densities gives the Ricci hypothesis a meaning at C¹ regularity, where pointwise curvature does not exist. The low-regularity Cheeger–Gromoll splitting theorem then gives the product by weak estimates (our own explanation).

**Paper or page:** [Ricci curvature bounds and rigidity for non-smooth Riemannian and semi-Riemannian metrics](https://arxiv.org/abs/2406.06762). It says: “Let (M,g) be a complete, connected Riemannian manifold with metric of regularity C¹. Let Ric≥0 in the distributional sense”

**Sources:**

- [M. Kunzinger, A. Ohanyan and A. Vardabasso, Ricci curvature bounds and rigidity for non-smooth Riemannian and semi-Riemannian metrics, arXiv:2406.06762 (2024)](https://arxiv.org/abs/2406.06762)
- [J. Cheeger and D. Gromoll, The splitting theorem for manifolds of nonnegative Ricci curvature, Journal of Differential Geometry 6 (1971) 119–128](https://doi.org/10.4310/jdg/1214430220)

### Enlargeability makes the torus obstruction to positive scalar curvature immediate

**Remember:** Big covers that shrink onto a sphere forbid positive scalar curvature.

*Makes the theorem clean to state or prove.* MSC 53C21 (Methods of global Riemannian geometry, including PDE methods; curvature restrictions), 58J22. arXiv math.DG, math.KT. Level 4: research.

**Definition.** A closed oriented Riemannian n-manifold is enlargeable if, for every ε &gt; 0, some spin cover with the pulled-back metric has a smooth ε-Lipschitz map to the unit n-sphere, one that multiplies distances by at most ε. The map must have nonzero degree and be constant outside a compact set.

**Problem.** No enlargeable closed spin manifold carries a metric of positive scalar curvature (Gromov–Lawson). In particular the n-torus carries no such metric.

**How the definition helps.** Pulling back a bundle from the sphere by such a map gives an almost flat bundle whose twisted Dirac operator has nonzero index (our own). Positive scalar curvature would kill that index by the Lichnerowicz formula, since the bundle's curvature is small, and infinite covers need the relative index theorem. The torus is enlargeable at a glance, since its large covers are big tori that map onto the sphere with little stretching (our own).

**Wikipedia:** [Scalar curvature](https://en.wikipedia.org/wiki/Scalar_curvature). It says: “introduces the homotopy-theoretic notion of enlargeability and says that an enlargeable spin manifold cannot have a Riemannian metric of positive scalar curvature.”

**Paper or page:** [The Gromov-Lawson index and the Baum-Connes assembly map](https://arxiv.org/abs/2103.03495v1). It says: “An enlargeable spin closed manifold cannot hold a PSC metric.”

**Sources:**

- [M. Gromov and H. B. Lawson, Positive scalar curvature and the Dirac operator on complete Riemannian manifolds, Publications Mathématiques de l'IHÉS (1983)](https://doi.org/10.1007/BF02953774)

### A four-point definition of nonnegative curvature makes it survive Gromov–Hausdorff limits

**Remember:** Three times the sum of squared radii bounds the sum of squared sides.

*True by definition. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 51F99. arXiv math.MG. Level 4: research.

**Definition.** A complete length space has nonnegative Alexandrov curvature if every four points p, x, y, z satisfy 3(\|px\|² + \|py\|² + \|pz\|²) ≥ \|xy\|² + \|yz\|² + \|zx\|², an inequality among their six distances.

**Problem.** A compact limit of compact Alexandrov spaces with curvature at least zero also has curvature at least zero. The limit is in Gromov–Hausdorff distance, which compares metric spaces by near-isometric matchings.

**How the definition helps.** The condition is a closed inequality in six distances, and Gromov–Hausdorff matchings of small distortion approximate all six at once, so it passes to the limit (our own argument). Compact Gromov–Hausdorff limits of compact length spaces remain length spaces. Lebedeva and Petrunin show that this four-point test is equivalent to triangle comparison.

**Paper or page:** [Curvature bounded below: a definition a la Berg--Nikolaev](https://arxiv.org/abs/1008.3318). It says: “Let X be a complete space with intrinsic metric. Then X is an Alexandrov space with curvature ≥ 0 if and only if any quadruple p,x,y,z ∈ X satisfies the following inequality”

**Sources:**

- [Yuri Burago, Mikhail Gromov, and Grigori Perelman, A.D. Alexandrov spaces with curvature bounded below (1992)](https://doi.org/10.1070/RM1992v047n02ABEH000877)

### Encoding comparisons by graphs shows each nontrivial one implies an Alexandrov comparison

**Remember:** Edges shorten and nonedges lengthen in the comparison space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54E35. arXiv math.MG. Level 4: research.

**Definition.** A metric space X satisfies the comparison for a finite graph Γ if every map of the vertices into X has a matching map into Hilbert space in which distances along edges do not increase and all other distances do not decrease.

**Problem.** Every finite graph comparison either holds in every metric space or implies comparison for the four-cycle C₄ or the three-legged star T₃.

**How the definition helps.** The graph alone fixes every inequality direction, so implications between comparisons become relations between graphs (our own explanation). The graph-comparison classification proves that every nontrivial comparison implies the four-cycle or three-legged-star comparison.

**Paper or page:** [Graph comparison meets Alexandrov](https://arxiv.org/abs/2212.08016v2). It says: “We show that any nontrivial graph comparison implies one of Alexandrov's comparisons.”

**Sources:**

- [Nina Lebedeva, Anton Petrunin, Graph comparison meets Alexandrov, Siberian Mathematical Journal 64 (2023), 624–628; arXiv:2212.08016](https://arxiv.org/abs/2212.08016v2)

### Optimal transport defines Ricci bounds that survive Gromov–Hausdorff limits

**Remember:** Impose curvature-dimension convexity on entropy and the parallelogram law on energy.

*Makes the theorem clean to state or prove.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C21, 49Q22. arXiv math.DG, math.MG. Level 4: research.

**Definition.** A complete separable geodesic metric measure space is RCD(K,N) if it satisfies the Lott–Sturm–Villani condition CD(K,N), a convexity of entropy along optimal transport, and its Cheeger energy Ch is quadratic: Ch(f+g) + Ch(f−g) = 2Ch(f) + 2Ch(g) for all f, g of finite energy. Both conditions use only distance and measure.

**Problem.** Normalized pointed RCD(K,N) spaces are closed under pointed measured Gromov–Hausdorff convergence. This includes such limits of complete Riemannian manifolds with Ricci curvature at least K and dimension at most N.

**How the definition helps.** Both conditions make sense on any limit space because they use only distance, measure and energy. The RCD stability theorem shows that pointed measured Gromov–Hausdorff convergence preserves both the entropy condition and quadratic energy (our own explanation).

**Paper or page:** [On perimeter minimizing sets in manifolds with quadratic volume growth](https://arxiv.org/abs/2504.10413), [On the equivalence of distributional and synthetic Ricci curvature lower bounds](https://arxiv.org/abs/2402.06486). It says: “The class of pointed RCD(K,N) spaces with normalized measures is sequentially compact with respect to pointed measured Gromov-Hausdorff convergence.”

**Sources:**

- [A. Cucinotta and M. Magnabosco, On perimeter minimizing sets in manifolds with quadratic volume growth, arXiv:2504.10413 (2025)](https://arxiv.org/abs/2504.10413)
- [A. Mondino and V. Ryborz, On the equivalence of distributional and synthetic Ricci curvature lower bounds, arXiv:2402.06486 (2024)](https://arxiv.org/abs/2402.06486)
- [J. Lott and C. Villani, Ricci curvature for metric-measure spaces via optimal transport, Annals of Mathematics 169 (2009) 903–991](https://doi.org/10.4007/annals.2009.169.903)
- [K.-T. Sturm, On the geometry of metric measure spaces, Acta Mathematica 196 (2006) 65–131](https://doi.org/10.1007/s11511-006-0002-8)

### Projections onto geodesics give Hadamard spaces a weak convergence with compactness

**Remember:** Without functionals, project onto geodesics instead.

*Makes the theorem clean to state or prove.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54A20. arXiv math.FA, math.MG. Level 4: research.

**Definition.** A complete CAT(0) space need not be a vector space, so weak convergence is tested with geodesics instead of linear functionals (our own). A bounded sequence converges weakly to x if, for every geodesic segment starting at x, the nearest-point projections of the sequence onto it converge to x.

**Problem.** In a Hadamard space, every bounded sequence has a weakly convergent subsequence. Bounded closed convex sets are weakly sequentially compact.

**How the definition helps.** Weak convergence in this sense agrees with Δ-convergence, and the Δ-compactness theorem gives every bounded sequence a Δ-convergent subsequence. Closed convex sets contain the asymptotic centers of their bounded sequences, so they contain these limits.

**Paper or page:** [On a weak topology for Hadamard spaces and its applications](https://arxiv.org/abs/2204.01461v4), [On a weak topology for Hadamard spaces and its applications](https://arxiv.org/abs/2204.01461v4), [A product of strongly quasi-nonexpansive mappings in Hadamard spaces](https://arxiv.org/abs/2504.21402v1). It says: “Any bounded closed convex set K in a Hadamard space is weakly sequentially compact and therefore τw-sequentially compact.”

**Sources:**

- [Arian Bërdëllima, On a weak topology for Hadamard spaces and its applications, arXiv:2204.01461 (2022), Sbornik Math. 214(10) (2023)](https://arxiv.org/abs/2204.01461v4)
- [W. A. Kirk, B. Panyanak, A concept of convergence in geodesic spaces, Nonlinear Anal. 68 (2008) 3689–3696](https://doi.org/10.1016/j.na.2007.04.011)

### The four-point curvature test passes nonnegative curvature down through submetries

**Remember:** Lift points at their original radii, then use that projection shrinks the sides.

*True by definition. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 51F99. arXiv math.MG, math.DG. Level 4: research.

**Definition.** A submetry maps each closed ball onto the closed ball of the same radius around the image of its center, so a point at distance r from an image point lifts to a point at distance r from any lift of it (our own). Use the four-point test for nonnegative curvature: \|px\|² + \|py\|² + \|pz\|² ≥ (\|xy\|² + \|yz\|² + \|zx\|²)/3.

**Problem.** Let a submetry map a complete, locally compact length space onto another. If the source has nonnegative Alexandrov curvature, so does the target.

**How the definition helps.** Lift the center p, then lift x, y and z at their original distances from it (our own argument). The left side of the test is unchanged, and the right side can only shrink in the target, since a submetry does not increase distances (our own). The work moves to the theorem that the four-point test is equivalent to triangle comparison.

**Wikipedia:** [Glossary of Riemannian and metric geometry](https://en.wikipedia.org/wiki/Glossary_of_Riemannian_and_metric_geometry). It says: “the image of metric r-ball is an r-ball”

**Sources:**

- [Barrett O’Neill, The fundamental equations of a submersion (1966)](https://doi.org/10.1307/mmj/1028999604)

### Curvature as a measure lets any total 2πχ be realized

**Remember:** Let curvature be a measure, and cone points join smooth surfaces.

*Makes the theorem clean to state or prove.* MSC 53C45 (Global surface theory (convex surfaces à la A. D. Aleksandrov)), 53C23. arXiv math.DG, math.MG. Level 4: research.

**Definition.** A metric of bounded integral curvature on a closed surface is an intrinsic metric that is a uniform limit of smooth Riemannian distances with uniformly bounded total absolute Gaussian curvature. Its curvature measure is the weak limit of their curvature measures, and it may have atoms, such as cone points.

**Problem.** Fix a conformal structure on a closed connected surface S. Every signed Radon measure ω with total mass 2πχ(S) and ω({x}) &lt; 2π at every x occurs as curvature in that conformal class.

**How the definition helps.** Gauss–Bonnet passes to the weak limit, so the total mass is 2πχ(S), and an atom of mass less than 2π is a cone point of positive angle. The prescribed-curvature theorem for these surfaces constructs a conformal metric for any such measure (our own explanation).

**Paper or page:** [On Alexandrov's Surfaces with Bounded Integral Curvature](https://arxiv.org/abs/2201.03354), [On Alexandrov's Surfaces with Bounded Integral Curvature](https://arxiv.org/abs/2201.03354). It says: “For any conformal structure on a closed surface S and any signed Radon measure dω on S such that ∫ₛ dω = 2πχ(S) and ω({x}) &lt; 2π for any point x ∈ S, there exists an Alexandrov metric”

**Sources:**

- [M. Troyanov, On Alexandrov's Surfaces with Bounded Integral Curvature, arXiv:2201.03354 (2022)](https://arxiv.org/abs/2201.03354)

### Averaged volume functions are time functions exactly in causally continuous spaces

**Remember:** Average the size of causal pasts and futures to build clocks.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 53C23. arXiv gr-qc, math.MG. Level 4: research.

**Definition.** Fix a finite measure of full support on the underlying metric space. The past averaged volume function sends a point to the average over 0 &lt; r &lt; 1 of the measure of the open r-neighborhood of its chronological past; the future function is minus the same average for its chronological future.

**Problem.** In a second countable, locally compact Lorentzian length space, the averaged volume functions are time functions exactly when the space is causally continuous. Causal continuity requires both that causal pasts and futures distinguish points and that past and future comparisons agree.

**How the definition helps.** A later point's past contains an earlier point's past, so the past function grows along causal curves, and the sign makes the future function grow too (our own explanation). The averaged-volume characterization shows that continuity and strict increase hold exactly under causal continuity.

**Paper or page:** [Time functions on Lorentzian length spaces](https://arxiv.org/abs/2108.02693v3). It says: “Let X be a second countable, locally compact Lorentzian length space. Then X causally continuous if and only if the averaged volume functions on X are time functions.”

**Sources:**

- [Annegret Burtscher, Leonardo García-Heveling, Time functions on Lorentzian length spaces, arXiv:2108.02693v3 (2024), Ann. Henri Poincaré 26, 1533--1572 (2025)](https://arxiv.org/abs/2108.02693v3)

### Bubble-free metrics restore timelike approximation

**Remember:** Without causal bubbles, timelike paths can approach lightlike reach.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83C99. arXiv gr-qc. Level 4: research.

**Definition.** Near each point p, compare two local futures in small cylindrical neighborhoods U: the causal future J⁺(p,U), and Ĩ⁺(p,U), the union of the timelike futures for smooth metrics with strictly narrower cones. The spacetime is causally plain if these always have the same boundary in U, and likewise for pasts, so no causal bubble sits between them.

**Problem.** In sufficiently small such neighborhoods of a causally plain spacetime, timelike paths reach points arbitrarily close to each causally reachable endpoint. A timelike path stays inside the cones.

**How the definition helps.** Equal boundaries rule out a causal bubble, an open causally reachable region outside the closure of the timelike future (our own explanation). Both local futures are regions above graphs, and the narrower-cone future fills the region above its graph. So it comes arbitrarily close to every point of the common boundary graph.

**Paper or page:** [Causal bubbles in globally hyperbolic spacetimes](https://arxiv.org/abs/2207.01392). It says: “consists of points in $J<sup>+</sup>(0)\\setminus \\overline{I<sup>+</sup>(0)}$.”

**Sources:**

- [Causal bubbles in globally hyperbolic spacetimes](https://arxiv.org/abs/2207.01392)

### Globally hyperbolic spacetimes are exactly those properly conformally embeddable in Minkowski space

**Remember:** A closed image prevents causal curves from escaping through a missing point.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 53C42. arXiv gr-qc, math.DG. Level 4: research.

**Definition.** A proper conformal embedding of a spacetime (M,g) into Minkowski space is a smooth embedding f that rescales the metric, f\*η = Ω²g with Ω smooth and positive, and is proper: the preimage of every compact set is compact, so no image point is missing at finite distance.

**Problem.** A smooth spacetime admits a proper conformal embedding into some Minkowski space exactly when it is globally hyperbolic.

**How the definition helps.** Properness excludes points missing at finite distance, as in punctured Minkowski space (our own explanation). Its inclusion preserves cones, but a causal diamond containing the puncture is not compact. The proper conformal embedding theorem proves the equivalence, including existence of the embedding for globally hyperbolic spacetimes.

**Paper or page:** [Lorentzian manifolds properly isometrically embeddable in Minkowski spacetime](https://arxiv.org/abs/2303.05941v1). It says: “Moreover, I prove that the Lorentzian manifolds that can be properly conformally embedded in Minkowski spacetime coincide with the globally hyperbolic spacetimes.”

**Sources:**

- [E. Minguzzi, Lorentzian manifolds properly isometrically embeddable in Minkowski spacetime, arXiv:2303.05941v1 (2023), Letters in Mathematical Physics 113, 67 (2023)](https://arxiv.org/abs/2303.05941v1)

### Nearly timelike paths restore semicontinuity

**Remember:** Keep causal paths whose segments can be approached by timelike signals.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics). arXiv gr-qc. Level 4: research.

**Definition.** A future-directed causal path γ is nearly timelike if timelike signals can approach each later point from each earlier one: γ(t) lies in the closure of I⁺(γ(s)) and γ(s) in the closure of I⁻(γ(t)) whenever s &lt; t. Time separation is the supremum of lengths of nearly timelike paths joining two points, or zero if there are none.

**Problem.** For a continuous spacetime metric, nearby endpoint pairs have time separation above any strict lower bound for the original pair. For a smooth metric, this definition gives the usual time separation.

**How the definition helps.** The closure tests exclude causal bubbles that timelike signals cannot approach (our own explanation). The lower semicontinuity theorem uses them to perturb the endpoints while losing arbitrarily little length. For smooth metrics the push-up property gives the closure tests for every causal path.

**Paper or page:** [A lower semicontinuous time separation function for C⁰ spacetimes](https://arxiv.org/abs/2308.10182v3). It says: “τ is lower semicontinuous.”

**Sources:**

- [Eric Ling, A lower semicontinuous time separation function for C⁰ spacetimes](https://arxiv.org/abs/2308.10182v3)

### Null distance straightens causal curves

**Remember:** One causal segment costs exactly its clock change.

*True by definition.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics). arXiv gr-qc, math.DG. Level 4: research.

**Definition.** A time function is a continuous clock that increases along every future causal path. The null distance between two events is the infimum, over chains of causal pieces joining them, each going forward or backward in time, of the sum of absolute clock changes.

**Problem.** On a causal curve, null distance between any two points equals their absolute clock difference. Where null distance is a metric, clock time makes the curve an isometric copy of an interval.

**How the definition helps.** Each piece costs at least its clock change, so by the triangle inequality every chain costs at least the endpoint clock difference (our own proof). A single causal segment costs exactly that, even a light ray, whose proper time is zero.

**Paper or page:** [Limit curve theorems for incomplete metric spaces and the null distance on Lorentzian manifolds](https://arxiv.org/abs/2511.05847v1). It says: “d(γ ∘ s(t₁), γ ∘ s(t₂); f) = \|t₁−t₂\|”

**Sources:**

- [Limit curve theorems for incomplete metric spaces and the null distance on Lorentzian manifolds](https://arxiv.org/abs/2511.05847v1)

### Shortest spatial paths settle lightlike reachability

**Remember:** A trip with exactly enough time needs an actual shortest path.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83F05. arXiv gr-qc, math.DG. Level 4: research.

**Definition.** Take a spacetime whose spatial lengths at time t are fixed reference lengths times a positive continuous scale factor. The reference metric is geodesic if every two points are joined by a shortest path, not just by paths whose lengths approach their distance.

**Problem.** Available conformal time is the integral of the reciprocal scale factor between two event times. For a geodesic reference metric, a signal reaches the later event exactly when the reference distance is at most the available conformal time.

**How the definition helps.** A shortest path, traversed at constant speed in conformal time, uses exactly the available conformal time (our own argument). Conversely, the causal speed limit bounds reference length by elapsed conformal time. In the punctured Euclidean plane, opposite points have only detours that approach their straight-line distance, so the exact-time trip fails (our own example).

**Paper or page:** [Bonnet-Myers rigidity theorem for globally hyperbolic Lorentzian length spaces](https://arxiv.org/abs/2401.17017v3). It says: “if Y is strictly intrinsic the causal relation agrees”

**Sources:**

- [Bonnet-Myers rigidity theorem for globally hyperbolic Lorentzian length spaces](https://arxiv.org/abs/2401.17017v3)

### Timelike convergence rules out de Sitter

**Remember:** Ricci must be nonnegative on every timelike direction, not only null.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83C20. arXiv gr-qc, math.DG. Level 4: research.

**Definition.** Timelike convergence says that gravity focuses timelike geodesics on average: Ric(v,v) ≥ 0 for every timelike tangent vector v at every point.

**Problem.** Suppose a globally hyperbolic spacetime satisfies timelike convergence and contains a complete timelike line, one that maximizes proper time between any two of its points. Then it splits as −dt² + h, with a time-independent spatial metric h.

**How the definition helps.** Galloway’s Lorentzian splitting theorem gives the conclusion under timelike convergence. In our own example, de Sitter spacetime has Ricci tensor a positive multiple of the metric, so Ric(v,v) &lt; 0 for timelike v, while null vectors give zero. It has complete timelike lines, yet it cannot split, since a product −dt² + h has Ric(∂<sub>t</sub>, ∂<sub>t</sub>) = 0.

**Paper or page:** [An elliptic proof of the splitting theorems from Lorentzian geometry](https://arxiv.org/abs/2410.12632v1). It says: “R(v,v) ≥ 0 for all timelike vectors”

**Sources:**

- [Gregory J. Galloway (1989), The Lorentzian splitting theorem without the completeness assumption](https://doi.org/10.4310/jdg/1214442881)

### Weak metrics make the Funk metric the length metric of a domain

**Remember:** Drop symmetry, and every convex domain measures itself.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C60 (Global differential geometry of Finsler spaces and generalizations (areal metrics)), 51F30. arXiv math.DG, math.MG. Level 4: research.

**Definition.** For an open convex Euclidean domain Ω, the tautological weak Finsler norm is F(x,v) = inf{t &gt; 0 : x + v/t ∈ Ω}, the size of v measured against how far Ω extends from x in direction v. Its length distance is the infimum of ∫F(γ,γ′) over piecewise smooth paths between the given endpoints.

**Problem.** On a convex domain Ω, the length metric of the tautological weak Finsler structure is exactly the Funk metric. Euclidean segments are shortest paths for it.

**How the definition helps.** Along a straight segment, F integrates to the logarithm of a boundary-distance ratio, which is the Funk distance formula. Supporting hyperplanes give that ratio as a lower bound for every competing path, so the segment is shortest (our own explanation). If the forward ray never meets the boundary, F vanishes and the segment costs zero.

**Paper or page:** [Weak Finsler Strutures and the Funk Metric](https://arxiv.org/abs/0804.0705), [Weak Finsler Strutures and the Funk Metric](https://arxiv.org/abs/0804.0705). It says: “We compute distances in the tautological weak Finsler structure of a domain and we show that these are given by the so-called Funk weak metric.”

**Sources:**

- [A. Papadopoulos and M. Troyanov, Weak Finsler structures and the Funk metric, arXiv:0804.0705 (2008)](https://arxiv.org/abs/0804.0705)

### Defining Zoll by a loop index makes Zoll bodies closed under limits

**Remember:** Shortest orbits with circle index at least n make Zoll.

*Makes the theorem clean to state or prove.* MSC 53D05 (Symplectic manifolds (general theory)), 37J46, 52A20. arXiv math.SG. Level 4: research.

**Definition.** On a convex body in ℝ²ⁿ, take the space of action-minimizing generalized closed characteristics, its shortest periodic orbits, with the circle acting by shifting the starting time. The body is generalized Zoll if the Fadell–Rabinowitz index of this space, a measure of its size under the circle action, is at least n.

**Problem.** Generalized Zoll convex bodies form a Hausdorff-closed set. With the origin in the interior and smooth boundary, this condition is equivalent to all Reeb trajectories being closed with the same least period for the standard boundary contact form.

**How the definition helps.** The systolic index is upper semicontinuous, so at a Hausdorff limit it is at least the limit superior of the indices, and the threshold n survives. The cited paper proves this and identifies the threshold with the classical Zoll condition for smooth boundaries (our own summary).

**Paper or page:** [Systolic S¹-index and characterization of non-smooth Zoll convex bodies](https://arxiv.org/abs/2501.13856v3). It says: “The space of generalized Zoll convex bodies is closed in the space of all convex bodies with respect to the Hausdorff distance topology.”

**Sources:**

- [Stefan Matijević, Systolic S¹-index and characterization of non-smooth Zoll convex bodies, arXiv:2501.13856v3 (2025)](https://arxiv.org/abs/2501.13856v3)

### Loose charts make formal isotopy sufficient

**Remember:** A loose chart lets formal tangent data classify actual embeddings.

*Makes the theorem clean to state or prove.* MSC 53D10 (Contact manifolds (general theory)). arXiv math.SG. Level 4: research.

**Definition.** A formal Legendrian embedding is an embedding with a path of injective tangent maps, from its derivative to a map onto Lagrangian subspaces of the contact planes. A Legendrian embedding is loose if, in some contact chart, it looks like Murphy’s loose chart, a standard local piece that leaves room for local changes.

**Problem.** In contact dimension at least five, every formal Legendrian isotopy class of closed connected knots has a loose representative, unique up to ambient contact isotopy. Ambient contact isotopy moves the surrounding space through maps that preserve the contact planes.

**How the definition helps.** Loose knots are exactly those that formal tangent data can classify, because the chart gives room for the local changes in Murphy’s proof (our own explanation). Her deformation theorem supplies existence and uniqueness.

**Paper or page:** [Loose Legendrian embeddings in high dimensional contact manifolds](https://arxiv.org/abs/1201.2245v5). It says: “Then for each formal Legendrian isotopy class there is a loose Legendrian knot in that class, unique up to ambient contact isotopy.”

**Sources:**

- [Loose Legendrian embeddings in high dimensional contact manifolds, Theorem 1.2](https://arxiv.org/abs/1201.2245v5)

### Higher crossing forms compute the Maslov index at degenerate crossings

**Remember:** At a flat crossing, use the first derivative that does not vanish.

*Makes the theorem clean to state or prove.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 37K45. arXiv math.AP, math.SG. Level 4: research.

**Definition.** Near an isolated crossing, write the moving Lagrangian as a symmetric graph over the reference plane, using a common Lagrangian complement, and reduce it by a Schur complement to a symmetric form S(t) on the crossing kernel with S(t₀) = 0. If its derivatives of orders 1 to j − 1 vanish at t₀, the order-j crossing form is S⁽ʲ⁾(t₀), so S(t) is close to S⁽ʲ⁾(t₀)(t − t₀)ʲ/j!.

**Problem.** Take an interior isolated crossing where the forms of orders 1 to j − 1 vanish and the order-j form is nondegenerate. It contributes zero to the Maslov index if j is even, and the signature of the order-j form if j is odd, in the positive spectral-flow convention.

**How the definition helps.** The leading term fixes the signs of the small eigenvalues on both sides of the crossing (our own explanation). An even power keeps these signs, and an odd power reverses them. The local spectral-flow formula counts these sign changes, giving the stated contribution.

**Paper or page:** [The Maslov index, degenerate crossings and the stability of pulse solutions to the Swift-Hohenberg equation](https://arxiv.org/abs/2403.04003v4). It says: “We extend their formulation of the Maslov index to degenerate crossings of general order in the case where the intersection is fully degenerate”

**Sources:**

- [Margaret Beck, Jonathan Jaquette, Hannah Pieper, The Maslov index, degenerate crossings and the stability of pulse solutions to the Swift-Hohenberg equation, arXiv:2403.04003 (2025)](https://arxiv.org/abs/2403.04003v4)

### Monotonicity excludes Maslov-zero disk bubbles

**Remember:** Positive area forces positive Maslov index.

*Rules out counterexamples.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 53D40. arXiv math.SG. Level 4: research.

**Definition.** A Lagrangian L in (X,ω) is monotone if area and Maslov index are proportional on disks: ∫ᵦω = λμ(β) for a fixed λ &gt; 0 and every class β in π₂(X,L), where μ is the Maslov index of the boundary tangent data.

**Problem.** Fix an almost complex structure compatible with the symplectic form and a compact orientable monotone Lagrangian. Every nonconstant holomorphic disk with boundary on it has Maslov index at least two. A stable holomorphic disk of total index two has at most one nonconstant disk component.

**How the definition helps.** A nonconstant holomorphic disk has positive area, so monotonicity gives it positive index, and orientability makes the index even, hence at least two (our own). Sphere bubbles also have positive area and index, and indices add, so total index two allows only one nonconstant disk (our own). Auroux’s Lemma 5.4 gives a torus bounding a nonconstant index-zero disk when its defining loop passes through zero (our own example choice).

**Paper or page:** [Cluster algebras and monotone Lagrangian tori](https://arxiv.org/abs/2401.00252v2). It says: “Suppose that L is a monotone Lagrangian submanifold of (X,ω).”

**Sources:**

- [Cluster algebras and monotone Lagrangian tori](https://arxiv.org/abs/2401.00252v2)
- [Auroux, Mirror symmetry and T-duality in the complement of an anticanonical divisor](https://people.math.harvard.edu/~auroux/papers/slagmirror.pdf)

### Dual maps detect Lie algebroid morphisms

**Remember:** The Poisson bracket reads the original bracket and anchor from linear functions.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 4: research.

**Definition.** The dual of a Lie algebroid carries a linear Poisson bracket that encodes the algebroid: {ℓₛ,ℓₜ} = ℓ\_\[s,t\], {ℓₛ,f} = ρ(s)f and {f,g} = 0, where ℓₛ is evaluation on the section s, ρ is the anchor, and f, g are base functions pulled back to the dual.

**Problem.** Fix a vector bundle map between two Lie algebroids over the identity of their common base. It preserves the section bracket and anchor exactly when its dual preserves Poisson brackets by pullback.

**How the definition helps.** The brackets of linear and base functions record exactly the section bracket and the anchor (our own proof). Pullback along the dual map sends each ℓₛ to the linear function of the image section and fixes base functions. These functions give local coordinates, so checking their brackets suffices.

**Paper or page:** [Comomentum sections and Poisson maps in Hamiltonian Lie algebroids](https://arxiv.org/abs/2405.03533v2). It says: “the dual map ψ: A₂∗ → A₁∗ is a Poisson map.”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicative forms reverse under inversion

**Remember:** The form adds over products, so an arrow and its inverse cancel.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 4: research.

**Definition.** A symplectic groupoid is a groupoid whose arrow manifold carries a multiplicative symplectic form ω. Multiplicative means that on composable pairs, ω pulled back by multiplication is the sum of ω pulled back from each factor: m\*ω = pr₁\*ω + pr₂\*ω.

**Problem.** Inversion in a symplectic groupoid pulls back the symplectic form to its negative.

**How the definition helps.** Multiplicativity makes ω add over products, and ω vanishes on the units (our own proof). Applying the identity to a unit composed with itself gives u\*ω = 2u\*ω, so u\*ω = 0. Pulling the identity back along each arrow paired with its inverse gives ω + inv\*ω = 0, because the product is a unit.

**nLab:** [symplectic groupoid](https://ncatlab.org/nlab/show/symplectic+groupoid). It says: “multiplicative in that the alternating sum of its canonical pullbacks to the space X₂ of composable morphisms vanishes”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing ideals give Poisson reduction

**Remember:** Functions vanishing on S bracket to functions vanishing on S.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction). arXiv math.SG. Level 4: research.

**Definition.** A closed embedded submanifold S of a Poisson manifold is coisotropic if its vanishing ideal I, the smooth functions that vanish on S, is closed under the Poisson bracket. This says exactly that I lies inside N, the functions whose bracket with every member of I stays in I.

**Problem.** Let N consist of the functions f whose bracket with every member of I lies in I. For coisotropic S, multiplication and the Poisson bracket are well defined on N modulo I.

**How the definition helps.** Coisotropy gives I ⊆ N, so the quotient N/I makes sense (our own proof). The Jacobi identity closes N under brackets, and the product rule closes it under products and makes I an ideal of N for both operations. So changing a representative by a member of I changes each result only by a member of I.

**nLab:** [coisotropic submanifold](https://ncatlab.org/nlab/show/coisotropic+submanifold). It says: “S ↪︎ X is coisotropic if the subalgebra of C∞(X) consisting of functions vanishing on S is closed under the Poisson bracket.”

**Sources:** none listed. No primary source with a working link was found.

### Scalar curvature permits Floer differentials

**Remember:** Curvature that is a multiple of the unit cancels itself.

*True by definition.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D37. arXiv math.SG. Level 4: research.

**Definition.** In a complete filtered strictly unital Fukaya algebra, a weak bounding cochain is a degree-one element b of positive filtration whose total curvature is a scalar multiple of the unit: ∑ₖ≥₀ mₖ(b,…,b) = W·1. The k = 0 term is the original curvature m₀.

**Problem.** In a complete filtered, strictly unital Fukaya algebra, twisting by a weak bounding cochain makes the one-input operation square to zero.

**How the definition helps.** Twisting by b makes the curvature W·1 (our own). The A∞ relation makes the square of the twisted m₁ a signed difference of m₂ with the curvature on the left and right (our own). The strict unit makes these two terms cancel, so the square is zero (our own).

**Paper or page:** [Curved Fukaya algebras and the Dubrovin spectrum](https://arxiv.org/abs/2401.13603v1). It says: “if $D\\in \\operatorname{MC} ^B(L)$ then $(m<sup>1<sub>B</sup>,D</sub>)<sup>2=0$</sup>”

**Sources:**

- [Curved Fukaya algebras and the Dubrovin spectrum](https://arxiv.org/abs/2401.13603v1)

### Hypertight forms exclude holomorphic planes

**Remember:** A plane would cap its orbit, and hypertight orbits have no caps.

*Rules out counterexamples. Confidence: medium.* MSC 53D42 (Symplectic field theory; contact homology). arXiv math.SG. Level 4: research.

**Definition.** A contact form α is hypertight if none of its Reeb orbits bounds a continuous disk. A Reeb orbit is a closed trajectory of the vector field R with α(R) = 1 and dα(R, ·) = 0.

**Problem.** Add a positive coordinate r to the contact manifold and use the symplectic form d(rα) on the product. For a hypertight form, this space contains no holomorphic plane approaching a single Reeb orbit at infinity.

**How the definition helps.** Such a plane would make its limit orbit bound a disk, which hypertightness forbids (our own proof). Project a large circle of the plane to the contact manifold. The projected loop is homotopic to the orbit, and the projected inner disk fills it.

**Paper or page:** [A contact homotopy type](https://arxiv.org/abs/2511.01821v1). It says: “Suppose (Y, λ) has no contractible Reeb orbits.”

**Sources:**

- [A contact homotopy type, Corollary 1.5](https://arxiv.org/abs/2511.01821v1)

### Minimum spherical area rules out splitting

**Remember:** The least positive area cannot split into two positive pieces.

*Rules out counterexamples.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds). arXiv math.SG. Level 4: research.

**Definition.** Choose a homology class A represented by a sphere whose symplectic area is the least positive area of any sphere. So every sphere of positive area has area at least that of A.

**Problem.** Fix a compact symplectic manifold without boundary and a compatible complex structure on its tangent spaces. A limit of holomorphic spheres in a class of least positive spherical area has exactly one nonconstant sphere component.

**How the definition helps.** Each nonconstant component of the limit has positive area, so its area is at least the minimum (our own proof). The component areas add up to the area of A, so only one component can be nonconstant.

**Paper or page:** [A proof of Gromov's non-squeezing theorem](https://arxiv.org/abs/2412.18462v1). It says: “Let A ∈ Z be a homology class of the minimal positive symplectic area in Z”

**Sources:**

- [Shah Faisal, A proof of Gromov's non-squeezing theorem, Theorem 3.2](https://arxiv.org/abs/2412.18462v1)

### Stable maps keep colliding marks distinct

**Remember:** Colliding marks sprout a constant sphere with three special points.

*Makes the theorem clean to state or prove.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds). arXiv math.SG. Level 4: research.

**Definition.** A stable holomorphic map is a holomorphic map from a connected nodal curve with distinct smooth marked points. It has only finitely many automorphisms that preserve the map and fix each mark. So every constant sphere component carries at least three special points, counting marks and node branches.

**Problem.** Fix a compact symplectic target without boundary and a compatible complex structure on its tangent spaces. Stable holomorphic maps of fixed genus, homology class, and number of marks form a compact space up to changes of domain coordinates.

**How the definition helps.** Stability lets colliding marks move onto a new constant sphere instead of becoming equal (our own example). That sphere carries both marks and the attaching node, so it is stable. Gromov compactness gives convergence of subsequences to such nodal stable maps.

**Wikipedia:** [Stable map](https://en.wikipedia.org/wiki/Stable_map). It says: “we attach a copy of ℙ¹ (a sphere), called a bubble, to the domain curve at the problematic point.”

**Sources:** none listed. No primary source with a working link was found.

### Spinᶜ quantization builds in the metaplectic correction

**Remember:** Quantum states are the index of the Dirac operator twisted by L.

*True by definition. Confidence: medium.* MSC 53D50 (Geometric quantization), 58J20, 19L10. arXiv math.SG, math-ph. Level 4: research.

**Definition.** Fix a spinᶜ structure on a compact prequantized manifold. Its quantization is the index of the spinᶜ Dirac operator twisted by the prequantum line L, the formal difference of the positive and negative harmonic spinor spaces.

**Problem.** On a compact Kähler manifold, choose the spinᶜ structure induced by a spin structure √K and use the compatible holomorphic prequantum line L. Quantization then equals the alternating sum of holomorphic cohomology groups of L ⊗ √K, including the metaplectic correction.

**How the definition helps.** For the structure from √K, spinors are antiholomorphic forms with values in √K, so the twisted Dirac operator is the Dolbeault–Dirac operator of L ⊗ √K. Hodge theory identifies its index with the alternating sum of the cohomology groups (our own explanation).

**nLab:** [geometric quantization](https://ncatlab.org/nlab/show/geometric+quantization), [geometric quantization by push-forward](https://ncatlab.org/nlab/show/geometric+quantization+by+push-forward). It says: “while from the point of view of the Dirac operator it is just twisting by Lω, since tensoring with the square root line bundle √Ωⁿ,⁰ induces the isomorphism between the antiholomorphic differential form bundle and the actual spinor bundle”

**Sources:**

- [Eckhard Meinrenken, Symplectic surgery and the Spinᶜ-Dirac operator, Advances in Mathematics 134 (1998) 240–277](https://doi.org/10.1006/aima.1997.1701)

### Spinᶜ quantization lets 'quantization commutes with reduction' be stated in general

**Remember:** Quantize by an equivariant Dirac index, so no Kähler polarization is needed.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D50 (Geometric quantization), 58J20, 19L10. arXiv math.SG, math-ph. Level 4: research.

**Definition.** For a compact Hamiltonian G-manifold with equivariant prequantum line L, the spinᶜ quantization is the equivariant index of the spinᶜ Dirac operator twisted by L, built from an invariant compatible almost complex structure. It is a virtual representation of G, so its invariant part makes sense without a Kähler polarization.

**Problem.** Let a compact connected Lie group act on a compact prequantized Hamiltonian manifold with compatible equivariant prequantum data. If zero is regular and the action there is free, the invariant quantization equals the quantization of the reduced manifold.

**How the definition helps.** Both sides of the theorem are indices, so both are defined without a Kähler polarization (our own explanation). The invariant quantization is the multiplicity of the trivial representation. Meinrenken’s theorem that quantization commutes with reduction identifies it with the index on the reduced manifold.

**nLab:** [Guillemin-Sternberg geometric quantization conjecture](https://ncatlab.org/nlab/show/Guillemin-Sternberg+geometric+quantization+conjecture), [geometric quantization by push-forward](https://ncatlab.org/nlab/show/geometric+quantization+by+push-forward). It says: “For the more powerful and more flexible geometric quantization by push-forward, the corresponding statement is widely known as the Guillemin-Sternberg conjecture.”

**Sources:**

- [Victor Guillemin, Shlomo Sternberg, Geometric quantization and multiplicities of group representations, Inventiones Mathematicae 67 (1982) 515–538](https://doi.org/10.1007/BF01398934)
- [Eckhard Meinrenken, Symplectic surgery and the Spinᶜ–Dirac operator, Advances in Mathematics 134 (1998) 240–277](https://doi.org/10.1006/aima.1997.1701)

### Enveloping algebras quantize polynomial Poisson algebras to order three

**Remember:** Set commutators to ħ times brackets; associativity comes free.

*Makes the theorem clean to state or prove.* MSC 53D55 (Deformation quantization, star products), 17B63. arXiv math.QA. Level 4: research.

**Definition.** The formal enveloping algebra of a polynomial Poisson algebra Sym(V) in characteristic zero is the completed tensor algebra with xy − yx set equal to ħσ({x,y}) for x, y ∈ V. Here σ symmetrizes, averaging all orderings of a monomial, and the algebra quantizes to a given order when σ maps Sym(V) into it injectively to that order.

**Problem.** For every polynomial Poisson algebra, the universal enveloping algebra gives a deformation quantization up to order 3 in ħ (Penkava–Vanhaecke). For linear brackets, and brackets with linear and constant terms, it works to all orders.

**How the definition helps.** The product is associative by construction, so only injectivity of symmetrization, a Poincaré–Birkhoff–Witt statement, needs proof. It always holds to order 3. For linear and affine brackets it holds to all orders, recovering the Gutt and Moyal products.

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “Moreover, this is always the case for n = 3, hence for every polynomial Poisson algebra its universal enveloping algebra always provides a deformation quantization of order 3 in ħ.”

**Sources:**

- [Michael Penkava, Pol Vanhaecke, Deformation quantization of polynomial Poisson algebras, Journal of Algebra 227 (2000) 365–393](https://doi.org/10.1006/jabr.1999.8239)

### Fedosov's class classifies symplectic star products

**Remember:** Closed 2-form series build star products; their classes classify them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D55 (Deformation quantization, star products). arXiv math.SG, math.QA. Level 4: research.

**Definition.** Fedosov's construction turns a symplectic connection and any formal series Ω = ω + ħΩ₁ + ħ²Ω₂ + ⋯ of closed 2-forms into a star product, through a flat connection on the bundle of fibrewise Moyal algebras with Weyl curvature Ω. The Fedosov class of that product is \[Ω\]/ħ, an element of \[ω\]/ħ + H²(M)\[\[ħ\]\].

**Problem.** Every differential star product on a symplectic manifold is equivalent to a Fedosov product. Two Fedosov products are equivalent exactly when their classes agree, giving the parameter space \[ω\]/ħ + H²(M)\[\[ħ\]\] in the stated convention.

**How the definition helps.** Ω is free input, so every class occurs, and Fedosov showed that cohomologous choices of Ω give equivalent products. The converse, and the claim that every differential star product is equivalent to a Fedosov one, are due to Nest–Tsygan, Deligne and Bertelson–Cahen–Gutt (the classification statement is our own summary).

**nLab:** [Fedosov's deformation quantization](https://ncatlab.org/nlab/show/Fedosov%27s+deformation+quantization). It says: “Such ∇<sub>Fed</sub> exists, (non-uniquely), it is called a Fedosov connection.”

**Sources:**

- [Boris Fedosov, A simple geometrical construction of deformation quantization, Journal of Differential Geometry 40 (1994) 213–238](https://doi.org/10.4310/jdg/1214455536)
- [Mélanie Bertelson, Michel Cahen, Simone Gutt, Equivalence of star products, Classical and Quantum Gravity 14 (1997) A93–A107](https://doi.org/10.1088/0264-9381/14/1a/008)
- [Ryszard Nest, Boris Tsygan, Algebraic index theorem, Communications in Mathematical Physics 172 (1995) 223–262](https://doi.org/10.1007/bf02099427)

### Flat Weyl lifts give associativity

**Remember:** Lift to flat sections, multiply there, and read off at zero.

*True by definition.* MSC 53D55 (Deformation quantization, star products), 81S10. arXiv math-ph. Level 4: research.

**Definition.** A Fedosov connection is a flat connection on the formal Weyl algebra bundle of a symplectic manifold that respects the fiberwise Moyal product, so flat sections multiply to flat sections. Each formal function lifts uniquely to a flat section with that value at fiber zero. The Fedosov product of two functions is the value at fiber zero of the Moyal product of their lifts.

**Problem.** The Fedosov product on formal series of smooth functions on a symplectic manifold is associative.

**How the definition helps.** Flat sections form an associative algebra under the Moyal product, and lifting identifies it with formal functions, so the transferred product is associative (our own proof). By uniqueness, the lift of a product is the product of the lifts. The work lies in building the connection and proving that lifts exist and are unique.

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “Then one can define a global star product”

**Sources:**

- [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1)

### Formality gives associative star products

**Remember:** Jacobi and associativity are one equation; formality carries solutions across.

*Makes the theorem clean to state or prove.* MSC 53D55 (Deformation quantization, star products), 17B55. arXiv math.QA, math-ph. Level 4: research.

**Definition.** A Maurer–Cartan element of a differential graded Lie algebra is a degree-one B with dB + ½\[B,B\] = 0. In polyvector fields with the Schouten bracket, this equation for ħπ is the Jacobi identity (our own). In shifted polydifferential operators with the Gerstenhaber bracket, it says that ordinary multiplication plus a correction B of order ħ is associative (our own).

**Problem.** Every finite-dimensional smooth real Poisson manifold admits a star product whose commutator to first order is ħ times its Poisson bracket.

**How the definition helps.** Kontsevich’s formality theorem gives an L∞ quasi-isomorphism, whose Taylor series carries Maurer–Cartan elements to Maurer–Cartan elements, so ħπ goes to an associative correction B (our own). Its linear component is the standard identification, so the commutator is ħ times the Poisson bracket to first order (our own).

**nLab:** [Kontsevich formality](https://ncatlab.org/nlab/show/Kontsevich+formality). It says: “there is an L-∞-algebra quasi-isomorphism from the dg-Lie algebra of polyvector fields”

**Wikipedia:** [Kontsevich quantization formula](https://en.wikipedia.org/wiki/Kontsevich_quantization_formula). It says: “describes how to construct a generalized ★-product operator algebra from a given arbitrary finite-dimensional Poisson manifold.”

**Sources:**

- [Maxim Kontsevich, Deformation Quantization of Poisson Manifolds](https://doi.org/10.1023/B:MATH.0000027508.00421.bf)

### L∞ quasi-isomorphisms make Kontsevich formality give deformation quantization

**Remember:** Matching Maurer–Cartan solutions match Poisson structures with star products.

*Makes the theorem clean to state or prove.* MSC 53D55 (Deformation quantization, star products), 16E40, 17B55. arXiv math.QA, math.KT. Level 4: research.

**Definition.** An L∞ morphism between differential graded Lie algebras is a morphism of their reduced symmetric coalgebras on the shifted spaces that commutes with the codifferentials, so its Taylor series carries Maurer–Cartan elements to Maurer–Cartan elements. It is a quasi-isomorphism if its linear component is an isomorphism on cohomology, and then, after ħ-adic completion, it matches Maurer–Cartan elements up to gauge (our own).

**Problem.** On ℝᵈ, every Poisson structure has a deformation quantization, that is, an associative star product on power series of functions that deforms the usual product. Formal Poisson structures up to equivalence correspond to star products up to equivalence.

**How the definition helps.** Maurer–Cartan elements of polyvector fields are formal Poisson tensors, and those of shifted polydifferential operators are differential star products, so a quasi-isomorphism matches them up to equivalence (our own explanation). Kontsevich constructs the required quasi-isomorphism, and its linear term gives the prescribed first-order bracket.

**nLab:** [Kontsevich formality](https://ncatlab.org/nlab/show/Kontsevich+formality). It says: “The formality theorem (Kontsevich 97) states that there is an L-∞-algebra quasi-isomorphism from the dg-Lie algebra of polyvector fields (with zero differential and Schouten-Nijenhuis bracket) to the dg-Lie algebra of the shifted Hochschild cochain complex”

**Sources:**

- [M. Kontsevich, Deformation quantization of Poisson manifolds, Letters in Mathematical Physics 66 (2003)](https://doi.org/10.1023/b:math.0000027508.00421.bf)

### Maurer–Cartan moduli classify star products

**Remember:** Quasi-isomorphic algebras share Maurer–Cartan moduli, so quantizations match Poisson structures.

*Makes the theorem clean to state or prove.* MSC 53D55 (Deformation quantization, star products), 17B55. arXiv math.QA. Level 4: research.

**Definition.** In a differential graded Lie algebra completed in positive powers of ħ, the Maurer–Cartan moduli set consists of the degree-one solutions x of dx + ½\[x,x\] = 0, taken modulo gauge by exponentials of degree-zero elements in positive powers of ħ.

**Problem.** On every smooth real manifold, differential star products up to differential equivalence correspond bijectively to formal Poisson structures modulo formal diffeomorphisms starting with the identity.

**How the definition helps.** In shifted polydifferential operators the moduli set is differential star products up to equivalence, and in polyvector fields it is formal Poisson structures up to formal diffeomorphism (our own explanation). Kontsevich’s formality theorem gives a filtered quasi-isomorphism, and such maps preserve Maurer–Cartan moduli.

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “If L₁ is quasi-isomorphic to L₂ then there is a solution to the M-C equation in L₁ iff there is a solution to the M-C equation in L₂.”

**Sources:**

- [Maxim Kontsevich, Deformation quantization of Poisson manifolds, Letters in Mathematical Physics 66 (2003) 157–216](https://doi.org/10.1023/B:MATH.0000027508.00421.bf)

### Mixed resolutions quantize Poisson deformations of varieties

**Remember:** Resolve first, and then the local formality maps glue.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D55 (Deformation quantization, star products), 14D15, 14A22. arXiv math.AG, math.QA. Level 4: research.

**Definition.** Given an affine cover of a smooth variety, the mixed resolution of a quasi-coherent sheaf is one differential graded object that holds its local jets together with their overlap data. Precisely, it is the Thom–Sullivan totalization of the Čech cosimplicial jet de Rham resolution, built from principal parts with the Grothendieck connection.

**Problem.** If H¹(X, 𝒪X) and H²(X, 𝒪X) vanish, there is a canonical bijection between isomorphism classes of Poisson deformations of 𝒪X and of associative deformations of 𝒪X. The bijection preserves first-order brackets.

**How the definition helps.** Mixed resolutions let the local formality maps glue into one global map between twisted deformation classifications (our own explanation). Yekutieli’s twisted quantization theorem gives this bijection and preserves first-order brackets. The vanishing of H¹ and H² of 𝒪X removes the twisting.

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “Trying to replicate the global formality theorem of Kontsevich, one would like to upgrade this to an L∞ quasi-isomorphism. However, it seems that in general this cannot be done directly, but only after a suitable resolution.”

**Sources:**

- [Amnon Yekutieli, Deformation quantization in algebraic geometry, Advances in Mathematics 198 (2005) 383–432 (affine case, Theorem 0.1)](https://doi.org/10.1016/j.aim.2005.06.009)
- [Amnon Yekutieli, Corrigendum to 'Deformation quantization in algebraic geometry', Advances in Mathematics 217 (2008) 2897–2906](https://doi.org/10.1016/j.aim.2007.09.012)
- [Amnon Yekutieli, Twisted deformation quantization of algebraic varieties, Advances in Mathematics 268 (2015) 241–305 (general case, Corollary 11.2)](https://doi.org/10.1016/j.aim.2014.09.003)

### Tangential products descend to constraints

**Remember:** Vanishing series form a two-sided ideal, so restriction respects the product.

*Rules out counterexamples.* MSC 53D55 (Deformation quantization, star products). arXiv math.QA. Level 4: research.

**Definition.** A star product, an associative formal deformation of the product of smooth functions, is tangential to a submanifold if the formal series vanishing there form a two-sided ideal. So multiplying a vanishing series on either side by any series still gives a series that vanishes there.

**Problem.** A tangential star product induces an associative product on the quotient by the vanishing ideal. For a closed embedded submanifold this quotient consists of formal smooth functions on that submanifold.

**How the definition helps.** The ideal makes the product of restrictions independent of the chosen extensions, so the product and its associativity pass to the quotient (our own). The Moyal product on the plane is not tangential to q = 0: q vanishes there, but q ⋆ p − p ⋆ q = iħ does not (our own).

**Paper or page:** [Characteristic (Fedosov-)class of a twist constructed by Drinfel'd](https://arxiv.org/abs/1903.06416v1). It says: “The Gutt-star product of 𝔥 is tangential”

**Sources:**

- [Jonas Schnitzer, Characteristic (Fedosov-)class of a twist constructed by Drinfel'd](https://arxiv.org/abs/1903.06416v1)

### Toeplitz asymptotics make star products associative

**Remember:** Operators compose associatively, so their asymptotic symbols multiply associatively.

*True by definition.* MSC 53D55 (Deformation quantization, star products), 53D50. arXiv math.SG. Level 4: research.

**Definition.** On a compact prequantized Kähler manifold, the Toeplitz operator Tₖ(f) multiplies holomorphic sections of the kth power of the line bundle by f and projects back orthogonally. The coefficients Cⱼ(f,g) expand the operator product: for every N ≥ 1, ‖Tₖ(f)Tₖ(g) − ∑₀≤ⱼ&lt;ᴺ k⁻ʲTₖ(Cⱼ(f,g))‖ = O(k⁻ᴺ) as k → ∞.

**Problem.** The coefficients Cⱼ are unique, and the formal product they define is associative (Bordemann–Meinrenken–Schlichenmaier, Schlichenmaier).

**How the definition helps.** Composition of operators is associative, so the two bracketings of a triple product give two expansions of one operator (our own). Since ‖Tₖ(f)‖ tends to the supremum of \|f\|, such an expansion has unique coefficients, so the two formal triple products agree (our own). The Berezin–Toeplitz expansion theorem supplies the expansion (our own).

**Paper or page:** [Strict Quantization for Compact Pseudo-Kähler Manifolds and Group Actions](https://arxiv.org/abs/2410.03322), [Strict Quantization for Compact Pseudo-Kähler Manifolds and Group Actions](https://arxiv.org/abs/2410.03322). It says: “There exists a unique formal star-product of Wick type f⋆g := Σ νʲ Cⱼ(f, g), Cⱼ(f, g) lies in C∞(M<sub>G</sub>)”

**Sources:**

- [Martin Bordemann, Eckhard Meinrenken, Martin Schlichenmaier, Toeplitz quantization of Kähler manifolds and gl(N), N → ∞ limits, Communications in Mathematical Physics 165 (1994) 281–296](https://doi.org/10.1007/BF02099772)

### Twist identities give associative products

**Remember:** The twist makes both bracketings of a triple product apply one element.

*True by definition.* MSC 53D55 (Deformation quantization, star products). arXiv math.QA, math-ph. Level 4: research.

**Definition.** For a bialgebra H with coproduct Δ and counit ε, a twist is an invertible F ∈ H⊗H that makes the two ways of splitting into three factors agree: (Δ⊗id)(F)(F⊗1) = (id⊗Δ)(F)(1⊗F). It is normalized if (ε⊗id)(F) = (id⊗ε)(F) = 1, and on a unital H-module algebra A it defines a ⋆ b by applying F to a⊗b and multiplying.

**Problem.** For any such action and twist, ⋆ is associative and has the original unit of A.

**How the definition helps.** The twist equation says that both bracketings of a triple product apply the same element of H⊗H⊗H before multiplying, so they agree (our own). The counit equations keep the original unit (our own).

**Paper or page:** [Hopf Algebroid Twists for Deformation Quantization of Linear Poisson Structures](https://arxiv.org/abs/1605.01376v4). It says: “defines an associative 𝐤-algebra A⋆ = (A, ⋆) structure on A with the same unit”

**Sources:**

- [Zoran Škoda, Stjepan Meljanac, Hopf Algebroid Twists for Deformation Quantization of Linear Poisson Structures](https://arxiv.org/abs/1605.01376v4)

### Wick products simplify holomorphic multiplication

**Remember:** Holomorphic second factors and antiholomorphic first factors see no corrections.

*Makes the theorem clean to state or prove.* MSC 53D55 (Deformation quantization, star products). arXiv math-ph. Level 4: research.

**Definition.** A Sasakian manifold has a Reeb flow with complex directions transverse to it, and the cited construction calls a formal function a quantum observable when its operator Δ kills it. A star product of observables has Wick separation if each positive-order correction differentiates the first factor only in holomorphic directions and the second only in antiholomorphic directions.

**Problem.** On any open domain, Reeb-invariant transversely holomorphic functions a are quantum observables, and every quantum observable c satisfies c ⋆ a = ca. For Reeb-invariant transversely antiholomorphic a, likewise a ⋆ c = ac.

**How the definition helps.** A correction then vanishes when the second factor is transversely holomorphic or the first is transversely antiholomorphic (our own). The cited Sasakian Wick theorem also shows that Δ kills the Reeb-invariant functions of each kind (our own).

**Paper or page:** [Wick-type deformation quantization of contact metric manifolds](https://arxiv.org/abs/2311.12767v1). It says: “Moreover, the Wick property holds”

**Sources:**

- [Boris M. Elfimov, Alexey A. Sharapov, Wick-type deformation quantization of contact metric manifolds](https://arxiv.org/abs/2311.12767v1)

### Outer-minimizing starts make the weak flow's area grow exactly like eᵗ

**Remember:** Start at least area outside, and the area grows exactly like eᵗ.

*Rules out counterexamples.* MSC 53E10 (Flows related to mean curvature), 49Q20. arXiv math.DG, math.AP. Level 4: research.

**Definition.** A closed hypersurface bounding a region is outer-minimizing if every surface enclosing that region has at least its area. So its least-area enclosure, where the weak inverse mean curvature flow starts, has the same area as the surface (our own).

**Problem.** In hyperbolic space ℍⁿ, weak inverse mean curvature flow from an outer-minimizing initial surface satisfies \|Σₜ\| = eᵗ\|Σ₀\|.

**How the definition helps.** The weak flow starts from the least-area enclosure, and the Huisken–Ilmanen formula makes area grow by the factor eᵗ from there (our own). Outer minimization makes that starting area \|Σ₀\|. Otherwise the flow first jumps to a smaller enclosure, and the area is eᵗ times a number below \|Σ₀\| (our own).

**Paper or page:** [On weak inverse mean curvature flow and Minkowski-type inequalities in hyperbolic space](https://arxiv.org/abs/2404.08410). It says: “If Σ₀ is outer-minimizing, then the area of Σₜ is given by \|Σₜ\|=eᵗ\|Σ₀\|.”

**Sources:**

- [B. Harvie, On weak inverse mean curvature flow and Minkowski-type inequalities in hyperbolic space, arXiv:2404.08410 (2024)](https://arxiv.org/abs/2404.08410)
- [G. Huisken and T. Ilmanen, The inverse mean curvature flow and the Riemannian Penrose inequality, Journal of Differential Geometry 59 (2001) 353–437](https://doi.org/10.4310/jdg/1090349447)
