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

### A nonzero moment-map level resolves ℂ²/±1 into the Eguchi–Hanson space

**Remember:** Move the level off zero and the singular point disappears.

*Rules out counterexamples.* MSC 53C26 (Hyper-Kähler and quaternionic Kähler geometry, \`\`special'' geometry), 53D20, 14E15. arXiv math.DG, math.SG. Level 3: graduate.

**Definition.** Let the circle U(1) act on ℍ² = ℂ² × ℂ² by (z, w) ↦ (λz, λ⁻¹w), with hyperkähler moment map μ. The hyperkähler quotient at level ζ ∈ ℝ³ is μ⁻¹(ζ)/U(1). Take the level ζ to be nonzero.

**Problem.** For every nonzero level ζ, the quotient is smooth: it is T\*S² with the Eguchi–Hanson metric. At ζ = 0 the quotient is ℂ²/{±1}, which has a singular point at the origin.

**How the definition helps.** At a nonzero level the circle acts freely on μ⁻¹(ζ), so the hyperkähler quotient theorem applies (our own). Only the origin has a nontrivial stabilizer, the whole circle, and it lies on μ⁻¹(0), where the quotient is ℍ/ℤ₂ (our own). Moving the level replaces this singular point by a 2-sphere (our own).

**Wikipedia:** [Eguchi–Hanson space](https://en.wikipedia.org/wiki/Eguchi%E2%80%93Hanson_space). It says: “It may be regarded as a resolution of the A₁ singularity according to the ADE classification which is the singularity at the fixed point of the C²/Z₂ orbifold”

**Paper or page:** [Concentrating Local Solutions of the Two-Spinor Seiberg-Witten Equations on 3-Manifolds](https://arxiv.org/abs/2210.08148). It says: “Consequently, the hyperkähler quotient is given by μ⁻¹(0)/U(1) ≃ ℍ/ℤ₂.”

**Sources:**

- [E. Calabi, Métriques kählériennes et fibrés holomorphes, Ann. Sci. École Norm. Sup. 12 (1979) 269–294](https://doi.org/10.24033/asens.1367)
- [N. J. Hitchin, A. Karlhede, U. Lindström, M. Roček, Hyperkähler metrics and supersymmetry, Comm. Math. Phys. 108 (1987) 535–589](https://doi.org/10.1007/BF01214418)

### Excluding the non-Kähler Hopf surface makes odd Betti numbers multiples of four

**Remember:** One metric Kähler for all three structures makes cohomology quaternionic.

*Rules out counterexamples.* MSC 53C26 (Hyper-Kähler and quaternionic Kähler geometry, \`\`special'' geometry), 32Q15. arXiv math.DG, math.AG. Level 3: graduate.

**Definition.** A hypercomplex manifold has integrable complex structures I, J, K with IJ = K. It is hyperkähler when, in addition, one Riemannian metric is Kähler for all three, so that I, J and K are parallel.

**Problem.** On a compact hyperkähler manifold, every odd Betti number is divisible by four. The Hopf surface, diffeomorphic to S¹ × S³, is hypercomplex but has first Betti number one.

**How the definition helps.** Because I, J and K are parallel, the unit quaternions act on harmonic forms, and −1 acts as −1 in odd degree (our own). Such a representation is a quaternionic vector space, of real dimension divisible by four, and harmonic forms represent cohomology by Hodge theory (our own). The Hopf surface is not Kähler, because its odd cohomology is odd-dimensional, so the metric condition removes this counterexample (our own).

**Wikipedia:** [Hypercomplex manifold](https://en.wikipedia.org/wiki/Hypercomplex_manifold). It says: “In fact Hidekiyo Wakakuwa proved that on a compact hyperkähler manifold b₂ₚ₊₁ ≡ 0 mod 4.”

**Sources:**

- [H. Wakakuwa, On Riemannian manifolds with homogeneous holonomy group Sp(n), Tôhoku Math. J. 10 (1958) 274–303](https://doi.org/10.2748/tmj/1178244665)

### Holonomy in Sp(n) makes every hyperkähler manifold Ricci-flat

**Remember:** Holonomy that respects all three quaternion units already lies inside SU(2n).

*True by definition.* MSC 53C26 (Hyper-Kähler and quaternionic Kähler geometry, \`\`special'' geometry), 53C29. arXiv math.DG, math.AG. Level 3: graduate.

**Definition.** A hyperkähler manifold is a Riemannian manifold of dimension 4n whose holonomy group lies in the compact symplectic group Sp(n). The holonomy group is the group of rotations obtained by parallel transport around loops. Sp(n) is the group of rotations of ℍⁿ that commute with the quaternion units i, j and k.

**Problem.** Every hyperkähler manifold has zero Ricci curvature. So it is a Calabi–Yau manifold for each of its complex structures.

**How the definition helps.** Sp(n) is a subgroup of SU(2n), so for each complex structure the holonomy lies in SU(2n) (our own). Holonomy in SU(m) gives the canonical line bundle (the bundle of holomorphic volume forms) a parallel section, so its curvature, the Ricci form, vanishes (our own). Under the other definition, by Kähler structures I, J, K with IJ = K, the work moves into proving that holonomy lies in Sp(n) (our own).

**Wikipedia:** [Hyperkähler manifold](https://en.wikipedia.org/wiki/Hyperk%C3%A4hler_manifold). It says: “All hyperkähler manifolds are Ricci-flat and are thus Calabi–Yau manifolds.”

**Sources:**

- [E. Calabi, Métriques kählériennes et fibrés holomorphes, Ann. Sci. École Norm. Sup. 12 (1979) 269–294](https://doi.org/10.24033/asens.1367)

### Since Sp(1) equals SU(2), four-dimensional Calabi–Yau manifolds are hyperkähler

**Remember:** In four dimensions the two holonomy groups are the same group.

*True by definition.* MSC 53C26 (Hyper-Kähler and quaternionic Kähler geometry, \`\`special'' geometry), 14J28, 53C29. arXiv math.DG, math.AG. Level 3: graduate.

**Definition.** Call a Riemannian manifold of dimension 4n hyperkähler when its holonomy group (the rotations obtained by parallel transport around loops) lies in Sp(n). Call a Kähler manifold of complex dimension m Calabi–Yau when its holonomy group lies in SU(m).

**Problem.** In real dimension four, every Kähler metric with holonomy in SU(2) is hyperkähler. So every K3 surface with its Ricci-flat Kähler metric is a hyperkähler manifold.

**How the definition helps.** For n = 1 the two holonomy conditions agree, because SU(2) is isomorphic to Sp(1), and both sit in SO(4) as the same subgroup (our own). Under the definition by three Kähler structures I, J, K, one would instead have to build J and K from a parallel holomorphic 2-form (our own). For K3 surfaces the work moves into Yau's solution of the Calabi conjecture, which gives the Ricci-flat Kähler metric (our own).

**Wikipedia:** [Hyperkähler manifold](https://en.wikipedia.org/wiki/Hyperk%C3%A4hler_manifold). It says: “Every Calabi–Yau manifold in 4 (real) dimensions is a hyperkähler manifold, because SU(2) is isomorphic to Sp(1).”

**Sources:**

- [E. Calabi, Métriques kählériennes et fibrés holomorphes, Ann. Sci. École Norm. Sup. 12 (1979) 269–294](https://doi.org/10.24033/asens.1367)

### Three moment maps at once make the hyperkähler quotient hyperkähler

**Remember:** Reduce by all three Kähler forms at once, and keep all three.

*True by definition.* MSC 53C26 (Hyper-Kähler and quaternionic Kähler geometry, \`\`special'' geometry), 53D20. arXiv math.DG, math.SG. Level 3: graduate.

**Definition.** A moment map for symmetries of a Kähler form is a map to the dual of the Lie algebra whose components generate the action. A hyperkähler moment map for a compact group G is a triple μ = (μ₁, μ₂, μ₃) of equivariant moment maps for ω₁, ω₂, ω₃. The hyperkähler quotient is μ⁻¹(0)/G.

**Problem.** If G acts freely on μ⁻¹(0), then the hyperkähler quotient μ⁻¹(0)/G is a hyperkähler manifold of dimension dim M − 4 dim G.

**How the definition helps.** Since μ₂ + iμ₃ is I-holomorphic, the quotient is the Kähler quotient by μ₁ of an I-complex submanifold, and likewise for J and K (our own). So the work moves into the Kähler reduction theorem, used three times on one quotient metric with IJ = K (our own). Reduction by one moment map alone gives dimension dim M − 2 dim G and only one complex structure (our own).

**Wikipedia:** [Hyperkähler quotient](https://en.wikipedia.org/wiki/Hyperk%C3%A4hler_quotient). It says: “the hyperkähler quotient of a hyperkähler manifold acted on by a Lie group G is the quotient of a fiber of a hyperkähler moment map M → 𝔤 ⊗ ℝ³ over a G-fixed point by the action of G.”

**Paper or page:** [Trihyperkahler reduction and instanton bundles on CP<sup>3</sup>](https://arxiv.org/abs/1103.4431). It says: “Let M be a hyperkähler manifold, and G a compact Lie group acting on M by hyperkähler automorphisms, and admitting a hyperkähler moment map. Then the hyperkähler quotient M///G is equipped with a natural hyperkähler structure.”

**Sources:**

- [N. J. Hitchin, A. Karlhede, U. Lindström, M. Roček, Hyperkähler metrics and supersymmetry, Comm. Math. Phys. 108 (1987) 535–589](https://doi.org/10.1007/BF01214418)

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

*True by definition. Confidence: medium.* MSC 53C70 (Direct methods (G-spaces of Busemann, etc.)), 53C23. arXiv math.MG. Level 3: graduate.

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

### Closedness of ω excludes the six-sphere's nondegenerate two-forms

**Remember:** A closed symplectic form leaves a cohomology class that cannot vanish.

*Rules out counterexamples.* MSC 53D05 (Symplectic manifolds (general theory)), 53D15. arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic form is a nondegenerate 2-form that is also closed. Closedness gives ω a de Rham cohomology class \[ω\], and nondegeneracy makes ωⁿ a volume form on a 2n-manifold.

**Problem.** On a compact 2n-manifold without boundary, every symplectic form has \[ω\]ᵏ ≠ 0 in H²ᵏ(M; ℝ) for 1 ≤ k ≤ n (our own). So no such form is exact, and no sphere of dimension 4 or more is symplectic.

**How the definition helps.** The volume form ωⁿ has nonzero integral, so \[ω\]ⁿ ≠ 0 by Stokes' theorem, and hence each \[ω\]ᵏ ≠ 0 (our own). The 6-sphere is the counterexample that closedness removes, since it has a nondegenerate 2-form from the octonions but no second cohomology (our own). The Hopf surface S¹ × S³ is another, as a compact complex surface with zero second cohomology (our own).

**Wikipedia:** [Symplectic manifold](https://en.wikipedia.org/wiki/Symplectic_manifold), [Almost symplectic manifold](https://en.wikipedia.org/wiki/Almost_symplectic_manifold). It says: “The symplectic form on any compact symplectic manifold without boundary is inexact, by Stokes' theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Closedness of ω is exactly the Jacobi identity for the Poisson bracket

**Remember:** The bracket obeys Jacobi because the form is closed.

*True by definition. Confidence: medium.* MSC 53D05 (Symplectic manifolds (general theory)), 53D17. arXiv math.SG. Level 3: graduate.

**Definition.** Let ω be a nondegenerate 2-form. The Hamiltonian vector field of a function f is the field X with ω(X, ·) = df. The Poisson bracket {f, g} is ω evaluated on the Hamiltonian vector fields of f and g.

**Problem.** For a nondegenerate 2-form ω, the Poisson bracket satisfies the Jacobi identity exactly when ω is closed (our own). In particular, the smooth functions on a symplectic manifold form a Lie algebra under the Poisson bracket.

**How the definition helps.** On the Hamiltonian fields of f, g and h, dω equals {f, {g, h}} + {g, {h, f}} + {h, {f, g}} (our own). These vector fields span every tangent space, so the Jacobi identity holds exactly when dω = 0 (our own). So a nondegenerate Poisson bracket is an equivalent definition of a symplectic structure, and the quoted proposition covers the closed case (our own).

**Wikipedia:** [Poisson bracket](https://en.wikipedia.org/wiki/Poisson_bracket). It says: “Thus, the Poisson bracket on functions corresponds to the Lie bracket of the associated Hamiltonian vector fields.”

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662). It says: “If X and Y are symplectic vector fields on a symplectic manifold (M,ω), then \[X,Y\] is a Hamiltonian vector field with Hamiltonian function ω(Y,X).”

**Sources:** none listed. No primary source with a working link was found.

### Compatible complex structures give symplectic manifolds well-defined Chern classes

**Remember:** Any compatible choice of J gives the same Chern classes.

*True by definition.* MSC 53D05 (Symplectic manifolds (general theory)), 57R20. arXiv math.SG, math.AT. Level 3: graduate.

**Definition.** The Chern classes of a symplectic manifold (M, ω), one with a closed nondegenerate 2-form ω, are those of the complex vector bundle (TM, J). Here J is any almost complex structure, a field of maps with J² = −1, that is compatible with ω. Compatible means that ω(u, Jv) is a Riemannian metric.

**Problem.** The Chern classes of (M, ω) do not depend on the chosen compatible J. They also stay the same along any continuous path of symplectic forms, so they are deformation invariants (our own).

**How the definition helps.** Any two compatible structures are joined by a path, because their space is contractible, and homotopic complex structures give isomorphic complex bundles (our own). The same argument works along a path of symplectic forms (our own). The work went into that contractibility, and it replaces a reduction of the structure group of TM from Sp(2n, ℝ) to U(n) (our own).

**Wikipedia:** [Almost complex manifold](https://en.wikipedia.org/wiki/Almost_complex_manifold). It says: “The bundle on M whose sections are the almost complex structures compatible to ω has contractible fibres”

**Sources:**

- [Dusa McDuff and Dietmar Salamon, Introduction to Symplectic Topology, Oxford University Press (2017)](https://doi.org/10.1093/oso/9780198794899.001.0001)

### Constant rank gives a closed two-form a Darboux normal form

**Remember:** Fix the rank, and every closed two-form looks standard near each point.

*Rules out counterexamples.* MSC 53D05 (Symplectic manifolds (general theory)), 58A10. arXiv math.DG, math.SG. Level 3: graduate.

**Definition.** A pre-symplectic form is a closed two-form ω whose rank, as an antisymmetric matrix, is the same at every point. So its kernel, the vectors v with ω(v, w) = 0 for all w, has constant dimension and forms a smooth subbundle (our own).

**Problem.** Near each point, a closed two-form of constant rank 2r has coordinates q, p and z in which ω = dq¹∧dp₁ + … + dqʳ∧dpᵣ. In these coordinates the kernel is spanned by the fields ∂/∂zᴬ.

**How the definition helps.** Closedness makes the kernel integrable and ω invariant along its leaves, so ω descends to a symplectic form on a local transverse slice (our own argument). Darboux coordinates on the slice, together with leaf coordinates z, give the stated form. The closed form x dx∧dy on ℝ² drops rank at x = 0, so no such coordinates exist there (our own example).

**Paper or page:** [A zoo of coisotropic embeddings](https://arxiv.org/abs/2509.19039). It says: “Let (M, ω) be a d-dimensional pre-symplectic manifold, with ω ∈ Ω²(M) a closed 2-form of constant rank 2r &lt; d. Then, for every point m ∈ M, there exists a coordinate chart (U, φ) around m”

**Sources:**

- [R. Izquierdo-López, M. de León, L. Schiavone and P. Soto, A zoo of coisotropic embeddings, arXiv:2509.19039 (2025)](https://arxiv.org/abs/2509.19039)

### Defining compatibility through a metric makes compatible complex structures contractible

**Remember:** Every metric points to a compatible complex structure.

*True by definition.* MSC 53D05 (Symplectic manifolds (general theory)), 53C15. arXiv math.SG. Level 3: graduate.

**Definition.** An almost complex structure J is a field of linear maps on the tangent spaces with J² = −1. It is compatible with a symplectic form ω when ω(u, Jv) is a Riemannian metric. Each metric g gives one compatible J, the orthogonal polar factor of the map A with ω(u, v) = g(Au, v) (our own).

**Problem.** The space of almost complex structures that are compatible with a given symplectic form is non-empty and contractible.

**How the definition helps.** The metric condition gives a continuous map from metrics to compatible structures, which sends the metric ω(·, J·) back to J (our own). So the compatible structures form a retract of the convex, hence contractible, space of metrics (our own). The work is checking that the polar factor is compatible, and for tamed J, with only ω(v, Jv) &gt; 0, this retraction fails (our own).

**Wikipedia:** [Almost complex manifold](https://en.wikipedia.org/wiki/Almost_complex_manifold). It says: “For example, ω and J are compatible if and only if ω(•, J•) is a Riemannian metric.”

**Paper or page:** [Centralizers of Hamiltonian circle actions on rational ruled surfaces](https://arxiv.org/abs/2202.08255). It says: “The space 𝒥\_ω = 𝒥(M,ω) of all compatible almost complex structures on a symplectic manifold (M,ω) is non-empty and contractible.”

**Sources:**

- [Dusa McDuff and Dietmar Salamon, Introduction to Symplectic Topology, Oxford University Press (2017)](https://doi.org/10.1093/oso/9780198794899.001.0001)

### Defining symplectic eigenvalues through ΩM makes Williamson's normal form unique

**Remember:** Symplectic eigenvalues are eigenvalues of ΩM, not of M.

*True by definition. Confidence: medium.* MSC 53D05 (Symplectic manifolds (general theory)), 15A21. arXiv math.SG. Level 3: graduate.

**Definition.** Let M be a positive definite symmetric 2n × 2n matrix, and let Ω be the block matrix with rows (0, I) and (−I, 0). The eigenvalues of ΩM are ±i d₁, …, ±i dₙ, with each dⱼ &gt; 0. The numbers dⱼ are the symplectic eigenvalues of M (our own).

**Problem.** By Williamson's theorem, some symplectic matrix S, one with SᵀΩS = Ω, gives SMSᵀ = D ⊕ D with D positive and diagonal. The entries of D are the symplectic eigenvalues of M, so this normal form is unique up to order (our own).

**How the definition helps.** For symplectic S, the matrix Ω(SMSᵀ) equals S⁻ᵀ(ΩM)Sᵀ, so it is similar to ΩM and keeps its eigenvalues (our own). The matrix Ω(D ⊕ D) has eigenvalues ±i dⱼ, so D is read off from M (our own). If the dⱼ were defined as the entries of D, uniqueness would need its own proof, while existence still needs Williamson's theorem (our own).

**Wikipedia:** [Williamson theorem](https://en.wikipedia.org/wiki/Williamson_theorem). It says: “the theorem ensures the existence of a real symplectic matrix S ∈ Sp(2n,ℝ), and a diagonal positive real matrix D ∈ ℝⁿˣⁿ, such that SMSᵀ = I₂⊗D ≡ D⊕D,”

**Sources:**

- [John Williamson, On the Algebraic Problem Concerning the Normal Forms of Linear Dynamical Systems, American Journal of Mathematics 58 (1936), 141](https://doi.org/10.2307/2371062)

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

### Lagrangian normal bundles are cotangent bundles, so Lagrangian neighbourhoods are standard

**Remember:** The directions leaving a Lagrangian are exactly its covectors.

*Makes the theorem clean to state or prove.* MSC 53D05 (Symplectic manifolds (general theory)), 53D12. arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic manifold (M, ω) is a 2n-dimensional manifold with a closed 2-form ω that is nondegenerate at every point. A submanifold L is Lagrangian when it has dimension n and ω vanishes on its tangent spaces. Then v ↦ ω(v, ·) identifies the normal bundle of L with its cotangent bundle T\*L (our own).

**Problem.** A diffeomorphism maps a neighbourhood of each compact Lagrangian L onto a neighbourhood of the zero section in T\*L, taking ω to the canonical form. So near L, the symplectic geometry depends only on L as a manifold.

**How the definition helps.** The Lagrangian condition makes the normal bundle of L equal to T\*L, so T\*L is the natural local model (our own). A tubular neighbourhood map then matches the two forms at each point of L (our own). The real work is the relative Moser theorem, which makes two forms that agree along L equal near L (our own).

**Wikipedia:** [Weinstein's neighbourhood theorem](https://en.wikipedia.org/wiki/Weinstein%27s_neighbourhood_theorem). It says: “While Darboux's theorem identifies locally a symplectic manifold M with T\*L, Weinstein's theorem identifies locally a Lagrangian L with the zero section of T\*L.”

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662), [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662). It says: “Then there exist neighborhoods 𝒰₀ of X in T\*X, 𝒰 of X in M and a diffeomorphism φ: 𝒰₀ → 𝒰 such that φ\*ω = ω₀”

**Sources:**

- [Alan Weinstein, Symplectic manifolds and their Lagrangian submanifolds, Advances in Mathematics 6 (1971), 329–346](https://doi.org/10.1016/0001-8708(71)90020-X)

### Positivity of ω(v, Jv) makes complex submanifolds of Kähler manifolds symplectic

**Remember:** Each complex line inside a Kähler manifold has positive area.

*Rules out counterexamples.* MSC 53D05 (Symplectic manifolds (general theory)), 32Q15. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** A Kähler manifold is a symplectic manifold (M, ω), with ω a closed nondegenerate 2-form, that has an integrable compatible complex structure J. Compatible means that ω(u, Jv) is a Riemannian metric, so ω(v, Jv) &gt; 0 for every nonzero tangent vector v.

**Problem.** Every complex submanifold of a Kähler manifold is symplectic, which means that ω stays nondegenerate on it (our own). In particular, every smooth complex projective variety is symplectic, with the restriction of the Fubini–Study form.

**How the definition helps.** A complex submanifold has J-invariant tangent spaces, so for tangent v the vector Jv is tangent too, and ω(v, Jv) &gt; 0 (our own). For ω = dx₁∧dy₁ + dx₂∧dy₂, setting J∂x₁ = ∂x₂ and J∂y₁ = ∂y₂ makes the x₁x₂-plane complex, though ω vanishes there (our own). The restricted form stays closed, because pullback commutes with d (our own).

**Wikipedia:** [Symplectic manifold](https://en.wikipedia.org/wiki/Symplectic_manifold). It says: “Any smooth complex projective variety V ⊂ ℂℙⁿ has a symplectic form which is the restriction of the Fubini—Study form on the projective space ℂℙⁿ.”

**Sources:** none listed. No primary source with a working link was found.

### Quotienting null directions removes degeneracy

**Remember:** Remove precisely the directions that pair to zero.

*Makes the theorem clean to state or prove.* MSC 53D05 (Symplectic manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** The null directions of a closed two-form ω of constant rank are the vectors v with ω(v,w) = 0 for every w. They form an integrable distribution along whose flows ω does not change, and the leaf space collapses each connected leaf to a point (our own).

**Problem.** Assume the form has constant rank and its space of leaves is a smooth manifold. If the quotient projection has surjective derivative everywhere, the form descends to a unique closed nondegenerate two-form.

**How the definition helps.** Along a null field the contraction of ω and dω both vanish, so Cartan’s formula gives zero Lie derivative and ω descends along the connected fibres (our own proof). Surjectivity of the projection’s derivative makes the descended form unique and closed. Dividing each tangent space by exactly the kernel makes it nondegenerate.

**nLab:** [presymplectic structure](https://ncatlab.org/nlab/show/presymplectic+structure). It says: “the quotient of X by the flow of the vector fields in the kernel of ω is, if it exists in a reasonable way, a symplectic manifold.”

**Sources:** none listed. No primary source with a working link was found.

### Symplectic normal bundles make neighbourhoods of symplectic submanifolds standard

**Remember:** A symplectic submanifold carries its own symplectic normal directions.

*Makes the theorem clean to state or prove.* MSC 53D05 (Symplectic manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** A submanifold Q of a symplectic manifold (M, ω), one with a closed nondegenerate 2-form ω, is symplectic when ω stays nondegenerate on TQ. Then the ω-orthogonal of TQ, the vectors v with ω(v, TQ) = 0, is a complement of TQ. With ω, this complement is a symplectic vector bundle, the symplectic normal bundle of Q.

**Problem.** A neighbourhood of a compact symplectic submanifold is fixed, up to a form-preserving diffeomorphism, by ω on the submanifold and its symplectic normal bundle. So near a closed symplectic surface in a symplectic 4-manifold, only the genus, the area and the self-intersection number matter (our own).

**How the definition helps.** Nondegeneracy on TQ makes TQ meet its ω-orthogonal only in zero, so the normal data of Q is a symplectic vector bundle (our own). A neighbourhood map built from this splitting matches the two forms along Q, and the relative Moser theorem makes them equal nearby (our own). For a surface, that bundle is fixed by its Euler number, which is the self-intersection number (our own).

**Paper or page:** [Lagrangian Spheres and Cyclic Quotient T-singularities](https://arxiv.org/abs/2509.18976), [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662). It says: “Then, by the symplectic neighbourhood theorem, W has a neighbourhood symplectomorphic to its symplectic normal bundle (νW,ω).”

**Sources:**

- [Dusa McDuff and Dietmar Salamon, Introduction to Symplectic Topology, Oxford University Press (2017)](https://doi.org/10.1093/oso/9780198794899.001.0001)

### The coordinate-free tautological form makes cotangent lifts preserve the symplectic form

**Remember:** The lift keeps θ, so it keeps dθ.

*True by definition. Confidence: medium.* MSC 53D05 (Symplectic manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** The tautological one-form θ on a cotangent bundle feeds a tangent vector v at a covector α to α itself, after projecting v to the base: θ(v) = α(dπ(v)), where π is the bundle projection. The canonical symplectic form is dθ.

**Problem.** Let f be a diffeomorphism from M to N. Its cotangent lift sends a covector α at x to α ∘ (df)⁻¹ at f(x). This lift pulls the canonical symplectic form of T\*N back to that of T\*M.

**How the definition helps.** The cotangent lift preserves θ because the inverse derivative acting on covectors cancels the derivative acting on projected tangent vectors (our own check). Pullback commutes with exterior differentiation, so the lift preserves dθ.

**nLab:** [cotangent bundle](https://ncatlab.org/nlab/show/cotangent+bundle). It says: “The de Rham differential ω ≔ dθ is a symplectic form.”

**Sources:** none listed. No primary source with a working link was found.

### Unitary frames make the Lagrangian Grassmannian U(n)/O(n), and det² detects its loops

**Remember:** A Lagrangian plane is a unitary matrix modulo real orthogonal ones.

*True by definition.* MSC 53D05 (Symplectic manifolds (general theory)), 53D12, 14M15. arXiv math.SG. Level 3: graduate.

**Definition.** Identify ℝ²ⁿ with ℂⁿ, so that the symplectic form ω is the imaginary part of the Hermitian inner product, up to sign. A Lagrangian subspace is a real n-dimensional subspace on which ω vanishes. A real subspace is Lagrangian exactly when its real orthonormal bases are unitary bases of ℂⁿ.

**Problem.** The Lagrangian Grassmannian Λ(n), the space of Lagrangian subspaces of ℂⁿ, is diffeomorphic to U(n)/O(n). The map that sends U·ℝⁿ to det(U)² induces an isomorphism from the fundamental group of Λ(n) to ℤ.

**How the definition helps.** Because Lagrangian planes are the spans of unitary bases, U(n) acts transitively on them, and the stabilizer of ℝⁿ is O(n). The map det² is well defined on the quotient, because elements of O(n) have determinant ±1. Its fibre SU(n)/SO(n) is simply connected, so π₁ = ℤ, and the bare vanishing of ω gives no such group action (our own).

**nLab:** [Lagrangian Grassmannian](https://ncatlab.org/nlab/show/Lagrangian+Grassmannian). It says: “This map passes to the quotient U(n)/O(n) because the determinant of an element of O(n) can only be ±1.”

**Wikipedia:** [Lagrangian Grassmannian](https://en.wikipedia.org/wiki/Lagrangian_Grassmannian). It says: “The unitary group U(n) acts transitively on the set of these subspaces, and the stabilizer of ℝⁿ is the orthogonal group O(n) ⊆ U(n).”

**Sources:**

- [Dusa McDuff and Dietmar Salamon, Introduction to Symplectic Topology, Oxford University Press (2017)](https://doi.org/10.1093/oso/9780198794899.001.0001)

### Contact maps lift by rescaling covectors

**Remember:** Lift the covectors and their evaluation rule stays the same.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** For a contact hyperplane field ξ on M, the symplectization is the set of nonzero covectors that vanish on ξ, a set that any map preserving ξ carries to itself by moving covectors. Its symplectic form is dθ, where θ evaluates each covector on the projection of a tangent vector to M.

**Problem.** A diffeomorphism preserving contact planes lifts canonically to a diffeomorphism preserving the symplectic form on the symplectization.

**How the definition helps.** The inverse diffeomorphism pulls each annihilating covector to another such covector because the original map preserves the contact planes (our own proof). This lift preserves evaluation on projected tangent vectors, hence preserves θ and dθ.

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “This construction does not depend on the choice of contact form.”

**Sources:** none listed. No primary source with a working link was found.

### Contact-type hypersurfaces have symplectization collars

**Remember:** Flowing out along Y is the symplectization's radial direction.

*True by definition. Confidence: medium.* MSC 53D10 (Contact manifolds (general theory)), 53D05. arXiv math.SG. Level 3: graduate.

**Definition.** A compact hypersurface M of (P, ω) has contact type when some Liouville field Y near M is transverse to it. Liouville means that the flow φₜ of Y rescales the form: φₜ\*ω = eᵗω. The restriction α of ω(Y, ·) to M is then a contact form.

**Problem.** A compact contact-type hypersurface M has a neighbourhood symplectomorphic to a neighbourhood of M × {1} in the symplectization ((0, ∞) × M, d(rα)).

**How the definition helps.** Flowing M along Y gives coordinates (t, x) near M, in which ω(Y, ·) = eᵗα, so ω = d(rα) with r = eᵗ (our own). The other definition asks only for a 1-form α on M with dα = ω there, nonzero on the null direction (our own). Proving that the two definitions agree takes the work (our own).

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “Then there exists a neighborhood of M ⊂ P and a neighborhood of M × {1} ⊂ P⁺ that are symplectically isomorphic.”

**Sources:**

- [D. McDuff and D. Salamon, Introduction to Symplectic Topology, 3rd ed., Oxford University Press, 2017](https://doi.org/10.1093/oso/9780198794899.001.0001)

### Defining coorientability by a trivial quotient line makes hyperplane fields kernels

**Remember:** A trivial quotient line gives one global equation for the hyperplanes.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)), 58A30. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** A hyperplane field ξ, a smooth choice of codimension-one subspace of each tangent space of M, is coorientable when the quotient line bundle TM/ξ is trivial. Equivalently, TM/ξ has a nowhere-zero section.

**Problem.** A hyperplane field ξ is coorientable exactly when ξ is the kernel of a smooth one-form that is nowhere zero.

**How the definition helps.** Composing the quotient map with a trivialization gives a nowhere-zero one-form with kernel ξ. Conversely, any such form induces a fibrewise isomorphism from TM/ξ to the trivial real line bundle.

**Paper or page:** [On the Canonical Contact Structure of the Space of Null Geodesics of a Spacetime](https://arxiv.org/abs/2109.03656v1). It says: “it is possible to write ξ = ker α globally if and only if ξ is coorientable, that is, the quotient bundle TM/ξ is trivial.”

**Sources:**

- [Hansjörg Geiges, An Introduction to Contact Topology (2008), Lemma 1.1.1](https://doi.org/10.1017/CBO9780511611438)

### Gray stability holds for contact structures, not forms

**Remember:** A contact structure forgets the size of its defining form.

*Rules out counterexamples.* MSC 53D10 (Contact manifolds (general theory)), 57R17. arXiv math.SG. Level 3: graduate.

**Definition.** A contact structure on a (2n + 1)-manifold is a field ξ of tangent hyperplanes, locally ξ = ker α with α∧(dα)ⁿ nowhere zero. Only the hyperplanes count, so α is fixed only up to multiplication by a nowhere-zero function.

**Problem.** On a closed manifold, every smooth path ξₜ of contact structures comes from an isotopy φₜ of diffeomorphisms carrying ξ₀ onto ξₜ. So deforming a contact structure never changes it up to isotopy.

**How the definition helps.** Gray's proof looks for the velocity Xₜ of φₜ inside ξₜ, and solves dαₜ(Xₜ, ·) = −α̇ₜ on ξₜ because dαₜ is nondegenerate there (our own). The leftover multiple of αₜ is harmless, since only the hyperplanes must match (our own). Forms fail because a form fixes a flow, its Reeb flow, and isotopic kernels on ellipsoids in ℂ² carry different closed orbits (our own).

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “If M is a closed manifold, and αₜ is a smooth 1-parameter family of contact forms on M, then there exists an isotopy φₜ of M such that φₜ\*(ker αₜ) = ker α₀. The theorem does not hold for contact forms.”

**Sources:**

- [J. W. Gray, Some global properties of contact structures, Annals of Mathematics 69 (1959) 421–450](https://doi.org/10.2307/1970192)
- [H. Geiges, An Introduction to Contact Topology, Cambridge Studies in Advanced Mathematics 109, Cambridge University Press, 2008](https://doi.org/10.1017/CBO9780511611438)

### Legendrian isotopies extend to contact isotopies

**Remember:** In contact geometry every function generates a symmetry.

*True by definition. Confidence: medium.* MSC 53D10 (Contact manifolds (general theory)), 57R17. arXiv math.SG. Level 3: graduate.

**Definition.** A contact vector field X has a flow that preserves the contact structure ξ = ker α; its contact Hamiltonian is H = α(X). Since dα is nondegenerate on ξ, every smooth function is the contact Hamiltonian of exactly one contact vector field.

**Problem.** Let Lₜ be an isotopy of closed Legendrian submanifolds, which have maximal dimension among submanifolds tangent to ξ. Then Lₜ extends to an isotopy of the whole manifold through contactomorphisms, supported near Lₜ.

**How the definition helps.** Extending a function is easy, so the proof sets Hₜ = α(velocity of Lₜ) on Lₜ, extends it by a cut-off, and flows (our own). This works because along a Legendrian, the values of H alone fix its field up to vectors tangent to the Legendrian (our own). The work went into the bijection between functions and contact fields, which has no symplectic analogue without a vanishing flux condition (our own).

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “It turns out that K(p) = α(vₚ), or more succinctly, K = α(v). The flow preserves an integral submanifold iff K = 0 on the submanifold.”

**Sources:**

- [H. Geiges, An Introduction to Contact Topology, Cambridge Studies in Advanced Mathematics 109, Cambridge University Press, 2008](https://doi.org/10.1017/CBO9780511611438)

### Legendrian lifts of wavefronts stay smooth

**Remember:** The front may break, but its Legendrian lift never does.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D10 (Contact manifolds (general theory)), 53D25, 78A05. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** A wavefront in a complete Riemannian manifold M is the projection to M of a Legendrian submanifold of the unit cotangent bundle. A hypersurface with a chosen unit normal lifts to the Legendrian of its unit conormal covectors. The Reeb flow of the canonical contact form there is the cogeodesic flow.

**Problem.** The front reached at time t by unit-speed normal geodesics from a hypersurface is the projection of its conormal lift moved by the Reeb flow. The lift stays smooth and embedded for all t, while the front develops cusps and other caustics.

**How the definition helps.** The Reeb flow moves by contactomorphisms, so it carries the smooth Legendrian lift to smooth Legendrians for all time (our own). Only the projection to M becomes singular, at the focal set, where nearby normal geodesics meet (our own). So the front at time s + t is the front at time s moved for time t, caustics included (our own).

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “Legendrian submanifolds in UT\*(M) correspond to wavefront surfaces in M, and wave propagation over time corresponds to applying Reeb flow to the wavefront Legendrian submanifold.”

**Sources:**

- [V. I. Arnold, Mathematical Methods of Classical Mechanics, 2nd ed., Graduate Texts in Mathematics 60, Springer, 1989](https://doi.org/10.1007/978-1-4757-2063-1)

### Legendrian submanifolds have no local invariants

**Remember:** A Legendrian's neighbourhood is decided by the Legendrian alone.

*True by definition. Confidence: medium.* MSC 53D10 (Contact manifolds (general theory)), 57R17. arXiv math.SG. Level 3: graduate.

**Definition.** A Legendrian submanifold of a (2n + 1)-dimensional contact manifold is a submanifold tangent to ξ of the maximal dimension n. Its tangent spaces are then Lagrangian, of half dimension, in the symplectic planes (ξ, dα). So the extra normal data that a smaller submanifold tangent to ξ carries, a symplectic vector bundle, is zero.

**Problem.** Every diffeomorphism between closed Legendrian submanifolds of two equal-dimensional contact manifolds extends to a contactomorphism, a map preserving contact structures, between neighbourhoods. In particular every closed Legendrian L has a neighbourhood contactomorphic to a neighbourhood of the zero section in the 1-jet space J¹L.

**How the definition helps.** The isotropic neighbourhood theorem says that a submanifold tangent to ξ and its symplectic normal bundle fix its neighbourhood (our own). For a Legendrian that bundle is zero, so only the diffeomorphism type remains, and the normal bundle is T\*L ⊕ ℝ (our own). The work went into proving that theorem, by Moser's method of deforming one form into another along a path (our own).

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “if there exists a diffeomorphism mapping L₀ to L₁, then it can be extended to a contactomorphism from a neighborhood of L₀ ⊂ M₀ to a neighborhood of L₁ ⊂ M₁.”

**Sources:**

- [H. Geiges, An Introduction to Contact Topology, Cambridge Studies in Advanced Mathematics 109, Cambridge University Press, 2008](https://doi.org/10.1017/CBO9780511611438)

### Line-element duality makes the double dual the curve

**Remember:** Duality swaps points and lines but keeps line elements.

*True by definition. Confidence: medium.* MSC 53D10 (Contact manifolds (general theory)), 53A20, 14N05. arXiv math.SG, math.AG. Level 3: graduate.

**Definition.** A line element of the plane is a point together with a line through it. Line elements form a 3-dimensional contact manifold, and a path is tangent to its contact planes when its point moves along its line. A curve lifts to the Legendrian curve, one tangent to the contact planes, of its pairs (point, tangent line).

**Problem.** Polar reciprocation in a conic swaps points with their polar lines, and it sends the lift of a curve to the lift of its dual. So the dual of the dual curve is the original curve, and envelopes of lines become loci of points.

**How the definition helps.** Polar reciprocation is an involutive contactomorphism of line elements, so it carries Legendrian lifts to Legendrian lifts, here of the dual curve (our own). So duality is defined on every lift, even at inflections and cusps, and doing it twice gives the identity (our own). On the plane alone, biduality needs the classical check that the polar of a point is tangent to the dual curve (our own).

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “Given a conic section in the plane, the polar reciprocation operation is an involutive contact transformation of the contact manifold of line elements in the plane C(ℝ²).”

**Sources:**

- [V. I. Arnold, Mathematical Methods of Classical Mechanics, 2nd ed., Graduate Texts in Mathematics 60, Springer, 1989](https://doi.org/10.1007/978-1-4757-2063-1)

### Maximal nonintegrability caps integral submanifolds at half dimension

**Remember:** Contact planes twist too much to contain anything bigger than half.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)), 58A30. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** A contact structure on a (2n + 1)-manifold is a hyperplane field ξ = ker α on which dα is nondegenerate. This is equivalent to the usual condition α∧(dα)ⁿ ≠ 0. So each hyperplane ξₚ with dα is a symplectic vector space, one with a nondegenerate antisymmetric form, of dimension 2n.

**Problem.** Every submanifold tangent to a contact structure on a (2n + 1)-manifold has dimension at most n. In particular, in dimension 3 no surface is tangent to the contact planes, even locally.

**How the definition helps.** If L is tangent to ξ, then α and hence dα vanish on L. So each tangent space of L is a subspace of ξ on which dα vanishes, and such subspaces have dimension at most n. The work sits in the equivalence of α∧(dα)ⁿ ≠ 0 with nondegeneracy of dα on ξ (our own).

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “dαₚ is a symplectic form on the hyperplane at p. Yet, we must also have dα\|<sub>L</sub> = 0, so TₚL is a null space in the local hyperplane, which must have dimension at most n.”

**Sources:**

- [H. Geiges, An Introduction to Contact Topology, Cambridge Studies in Advanced Mathematics 109, Cambridge University Press, 2008](https://doi.org/10.1017/CBO9780511611438)

### Maximal nonintegrability joins points by Legendrian curves

**Remember:** One bracket of contact directions reaches every direction.

*Rules out counterexamples. Confidence: medium.* MSC 53D10 (Contact manifolds (general theory)), 53C17, 58A30. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** A contact structure ξ = ker α is maximally nonintegrable: dα is nondegenerate on ξ. For fields X, Y tangent to ξ, α(\[X, Y\]) = −dα(X, Y), so at every point some bracket leaves ξ. Thus ξ is bracket-generating in one step: ξ + \[ξ, ξ\] = TM.

**Problem.** On a connected contact manifold, any two points are joined by a smooth curve tangent to the contact structure.

**How the definition helps.** Chow's theorem joins points by tangent curves for every bracket-generating hyperplane field, and the contact condition is bracket generation in one step (our own). So the real work is Chow's theorem, and the contact definition only supplies its hypothesis (our own). The condition rules out integrable fields such as ker dz on ℝ³, whose tangent curves stay in one plane z = constant (our own).

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry), [Chow–Rashevsky theorem](https://en.wikipedia.org/wiki/Chow%E2%80%93Rashevsky_theorem). It says: “Another perspective on non-integrability is through the Chow–Rashevskii connectivity theorem, which states that any two points in a contact manifold can be connected by a smooth curve tangent to the contact structure.”

**Sources:**

- [W.-L. Chow, Über Systeme von linearen partiellen Differentialgleichungen erster Ordnung, Mathematische Annalen 117 (1940) 98–105](https://doi.org/10.1007/BF01450011)

### Normal ray pencils are Legendrian, giving Malus–Dupin

**Remember:** Rays are normal to a surface exactly when a Legendrian emits them.

*True by definition. Confidence: medium.* MSC 53D10 (Contact manifolds (general theory)), 78A05. arXiv math.SG, physics.optics. Level 3: graduate.

**Definition.** A ray element is a pair (x, u) of a point x in ℝ³ and a unit direction u. Ray elements form the contact manifold ℝ³ × S² with contact form u·dx. A pencil, a two-parameter family of rays, is normal to a surface exactly when it passes through a Legendrian surface, one on which u·dx vanishes.

**Problem.** A pencil of light rays perpendicular to some surface stays perpendicular to some surface after any number of reflections and refractions (Malus–Dupin). So rays from a point source stay normal to wavefronts through any optical system.

**How the definition helps.** Reflections and refractions act on ray elements by contactomorphisms, maps that preserve the contact planes, and these carry Legendrian surfaces to Legendrian surfaces. Free propagation is the Reeb flow, also a contactomorphism, so the outgoing pencil is again normal to a surface, away from focal points (our own). The classical proof compares optical path lengths with Fermat's principle; here the work moves into checking that each reflection and refraction is a contactomorphism (our own).

**Wikipedia:** [Malus–Dupin theorem](https://en.wikipedia.org/wiki/Malus%E2%80%93Dupin_theorem). It says: “If a pencil of light rays is perpendicular to a surface, then this pencil is a Legendrian submanifold, and vice versa. Every refractive and reflective surface is a contactomorphism on the manifold. Contactomorphisms preserve Legendrian submanifolds.”

**Sources:**

- [V. I. Arnold, Mathematical Methods of Classical Mechanics, 2nd ed., Graduate Texts in Mathematics 60, Springer, 1989](https://doi.org/10.1007/978-1-4757-2063-1)
- [C.-M. Marle, The works of William Rowan Hamilton in geometrical optics and the Malus–Dupin theorem, Banach Center Publications 110 (2016) 177–191](https://doi.org/10.4064/bc110-0-12)

### Regular contact forms come from prequantization bundles

**Remember:** When every Reeb orbit is a circle, contact means circle bundle.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)), 53D05. arXiv math.SG. Level 3: graduate.

**Definition.** The Reeb field R of a contact form α is fixed by α(R) = 1 and dα(R, ·) = 0. The weak definition calls α regular when the space of Reeb orbits is a manifold. The strong definition asks that R generate a free circle action.

**Problem.** If R generates a free circle action on P, then M = P/S¹ has a unique symplectic form ω with dα = π\*ω. This ω is integral, with integer periods, and every integral symplectic manifold arises this way, as the base of a prequantization circle bundle.

**How the definition helps.** The strong definition makes the Reeb flow a free circle action that preserves α, so dα descends to a closed form ω on M (our own). This ω is nondegenerate because ker α maps isomorphically onto TM, and Chern–Weil theory gives integrality (our own). The weak definition needs P compact to make all Reeb orbits circles of one period (our own).

**Wikipedia:** [Boothby-Wang construction](https://en.wikipedia.org/wiki/Boothby-Wang_construction). It says: “Let (P,α) be a compact regular contact manifold. Then π: P → M:= P/S¹ is a principal S¹-bundle and there is a unique integral symplectic form ω ∈ Ω²(M) such that dα = π\*ω. If one adopts the stronger condition of regularity, i.e. requires that the Reeb vector field generates a free S¹-action, the compactness hypothesis is not needed.”

**Sources:**

- [W. M. Boothby and H. C. Wang, On contact manifolds, Annals of Mathematics 68 (1958) 721–734](https://doi.org/10.2307/1970165)
- [H. Geiges, An Introduction to Contact Topology, Cambridge Studies in Advanced Mathematics 109, Cambridge University Press, 2008](https://doi.org/10.1017/CBO9780511611438)

### Transverse Liouville fields give contact forms

**Remember:** A transverse expanding field makes λ a contact form.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** A Liouville field V on a symplectic manifold (M,ω) expands the form: the one-form λ = ω(V,·) satisfies dλ = ω. A hypersurface has contact type when some Liouville field defined near it is everywhere transverse to it.

**Problem.** On a hypersurface of contact type, the restriction of λ is a contact form α. On a regular energy surface of contact type, its Reeb field follows the Hamiltonian trajectories up to a change of speed.

**How the definition helps.** Transversality makes the contraction of ωⁿ with V a volume form on the hypersurface, and it restricts to nα ∧ (dα)ⁿ⁻¹, so α is contact (our own proof). On a regular energy level, the Hamiltonian field spans the kernel of dα on the level. The Reeb field spans the same line, normalized by α(R) = 1.

**Paper or page:** [A note on the geometry of the two-body problem on S²](https://arxiv.org/abs/2310.02659v2). It says: “is a (positive) time reparametrisation of the Hamiltonian vector field”

**Sources:**

- [A note on the geometry of the two-body problem on S², Theorem 4.2](https://arxiv.org/abs/2310.02659v2)

### Clean intersection makes reduced Lagrangians and composed correspondences Lagrangian

**Remember:** Clean means the intersection is as smooth as its tangent spaces.

*Makes the theorem clean to state or prove.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 53D20. arXiv math.SG. Level 3: graduate.

**Definition.** Submanifolds L and N intersect cleanly if L ∩ N is a submanifold whose tangent spaces are the intersections of those of L and N. This is weaker than transversality and allows L to lie inside N.

**Problem.** Let N be coisotropic, so each tangent space contains its own ω-orthogonal complement, and let L be a Lagrangian meeting N cleanly. If the image of L ∩ N in the leaf space of the null foliation of N is a submanifold, it is Lagrangian.

**How the definition helps.** Cleanness reduces the statement to linear algebra at each point, where the reduction of a Lagrangian subspace is always Lagrangian (our own). Composing two correspondences is the case where N is the product of M₀, the diagonal of M₁ × M₁, and M₂ (our own). So a clean composition is locally a Lagrangian submanifold, even when transversality fails (our own).

**Paper or page:** [A review on coisotropic reduction in Symplectic, Cosymplectic, Contact and Co-contact Hamiltonian systems](https://arxiv.org/abs/2308.07637v3). It says: “Let L ↪︎ M be a Lagrangian submanifold and N ↪︎ M a coisotropic submanifold. If they have clean intersection and L<sub>N</sub>:= π(L ∩ N) is a submanifold of N/ℱ, L<sub>N</sub> is Lagrangian.”

**Sources:**

- [A. Weinstein, Symplectic manifolds and their Lagrangian submanifolds, Adv. Math. 6 (1971) 329–346](https://doi.org/10.1016/0001-8708(71)90020-X)

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

### Graphs as Lagrangians turn fixed points of near-identity maps into critical points

**Remember:** A fixed point is where the graph meets the diagonal.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 37J11. arXiv math.SG. Level 3: graduate.

**Definition.** The graph of a symplectomorphism φ of (M, ω) is a Lagrangian submanifold of M⁻ × M, where M⁻ has the form −ω. Its intersections with the diagonal are the fixed points of φ. Weinstein's theorem identifies a neighbourhood of the diagonal with one of the zero section in T\*M.

**Problem.** Let φ be a Hamiltonian diffeomorphism of a closed symplectic manifold M, joined to the identity by a Hamiltonian isotopy of C¹-small maps. Then the fixed points of φ are the critical points of a function on M, so they number at least cup-length(M) + 1.

**How the definition helps.** Near the diagonal, the graph of φ becomes the graph of a closed 1-form, which is exact because the isotopy is Hamiltonian (our own). So the 1-form is dS, and the fixed points of φ are the critical points of S, which Lusternik–Schnirelmann theory counts (our own). For maps far from the identity, such bounds need Floer theory, and the general cup-length bound is still open (our own).

**Wikipedia:** [Floer homology](https://en.wikipedia.org/wiki/Floer_homology). It says: “Lagrangian Floer homology in which the ambient manifold is M crossed with M and the Lagrangian submanifolds are the diagonal and the graph of the symplectomorphism.”

**Sources:**

- [A. Weinstein, Lectures on Symplectic Manifolds, CBMS Regional Conference Series in Mathematics 29 (1977)](https://doi.org/10.1090/cbms/029)

### Half weights at endpoints make the Maslov index defined for every path

**Remember:** Endpoints count half, so paths split without loss.

*True by definition. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** Fix a Lagrangian plane V. At each time where a path Λ(t) of Lagrangian planes meets V, the crossing form is a quadratic form on Λ(t) ∩ V. The Robbin–Salamon index sums the signatures of these forms, and crossings at the two endpoints count with weight one half.

**Problem.** The Robbin–Salamon index is defined for every path, also when the endpoints are not transverse to V, and it is additive under concatenation. For the graphs of a path A(t) of symmetric matrices, relative to the horizontal plane, it equals ½ sign A(b) − ½ sign A(a).

**How the definition helps.** A crossing at the junction of two paths counts half in each, so the indices add with no transversality condition there (our own). Arnold's older definition needs transverse endpoints, and the work moves into proving the new sum homotopy invariant with fixed endpoints (our own). For graphs of symmetric matrices, each crossing form is the derivative of A on the kernel of A, which gives the formula (our own).

**Wikipedia:** [Maslov index](https://en.wikipedia.org/wiki/Maslov_index). It says: “Additivity under concatenation: if two paths can be concatenated, the Maslov index of the concatenated path is the sum of the indices.”

**Sources:**

- [J. Robbin and D. Salamon, The Maslov index for paths, Topology 32 (1993) 827–844](https://doi.org/10.1016/0040-9383(93)90052-W)

### Lagrangian normal bundles turn self-intersection into minus the Euler characteristic

**Remember:** Pushing a Lagrangian off itself is choosing a one-form.

*True by definition. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 57R20, 57K43. arXiv math.SG, math.GT. Level 3: graduate.

**Definition.** A Lagrangian surface L in a symplectic 4-manifold, one with a closed nondegenerate 2-form ω, is a surface on which ω vanishes. The map v ↦ ω(v, ·), restricted to TL, identifies the normal bundle of L with the cotangent bundle T\*L (our own).

**Problem.** A closed oriented Lagrangian surface L in a symplectic 4-manifold has self-intersection number \[L\]·\[L\] = −χ(L) (our own). So the torus is the only closed orientable Lagrangian surface in ℂ², and ℂP² contains no Lagrangian sphere (our own).

**How the definition helps.** Self-intersection is the normal Euler number, as the quote says, and the Lagrangian condition makes the normal bundle T\*L (our own). A generic one-form on L has χ(L) signed zeros, and the orientation of T\*L as a normal bundle flips the sign (our own). Without the Lagrangian condition the normal bundle is not tied to TL, and the work sits in the general fact and Poincaré–Hopf (our own).

**Wikipedia:** [Euler class](https://en.wikipedia.org/wiki/Euler_class), [Weinstein's neighbourhood theorem](https://en.wikipedia.org/wiki/Weinstein%27s_neighbourhood_theorem). It says: “if Y is a compact submanifold, then the Euler class of the normal bundle of Y in X is naturally identified with the self-intersection of Y in X.”

**Sources:** none listed. No primary source with a working link was found.

### Loop classes make the Maslov index invariant under deformation

**Remember:** The index is the loop’s homotopy class, read as an integer.

*True by definition.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** Fix a nonzero real symplectic vector space and its Lagrangian Grassmannian, the half-dimensional subspaces on which the symplectic form vanishes. The Maslov index of a loop of such subspaces is its homotopy class, read as an integer through the isomorphism of the fundamental group with ℤ that makes the Maslov generator positive.

**Problem.** The Maslov index of a loop of Lagrangian subspaces does not change when the loop deforms. Joining two loops with a common starting point adds their indices.

**How the definition helps.** Homotopy classes do not change under deformation, and moving the base point only conjugates the class, which does nothing in the abelian group ℤ (our own argument). Joining loops is the group operation, which the isomorphism turns into addition.

**Wikipedia:** [Maslov index](https://en.wikipedia.org/wiki/Maslov_index). It says: “This definition makes the Maslov index a topological invariant of loops of Lagrangian subspaces.”

**Sources:**

- [Robbin, J.; Salamon, D. (1993). The Maslov index for paths. Topology 32(4), 827–844.](https://doi.org/10.1016/0040-9383(93)90052-W)

### The boundary Maslov index makes Riemann–Roch hold on surfaces with boundary

**Remember:** The Maslov index is the first Chern number for boundary conditions.

*Makes the theorem clean to state or prove.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 32Q65. arXiv math.SG. Level 3: graduate.

**Definition.** Let E be a complex vector bundle over a compact Riemann surface Σ with boundary. Let F be a totally real subbundle over the boundary, a real subbundle with F ⊕ iF = E. The boundary Maslov index μ(E, F) measures how F winds along the boundary circles, in a trivialization of E.

**Problem.** Every real Cauchy–Riemann operator on E with boundary values in F has Fredholm index rχ(Σ) + μ(E, F), where r is the rank of E. So parametrized holomorphic disks with boundary on a Lagrangian in a 2n-manifold have expected dimension n + μ.

**How the definition helps.** The boundary Maslov index plays the role that twice the first Chern number plays on closed surfaces, so one formula covers both cases (our own). Both sides add under gluing along boundary circles, so the formula reduces to the disk and to closed surfaces (our own). This is why the Maslov index sets the dimension counts in Lagrangian Floer theory (our own).

**Paper or page:** [Free-Boundary Problems for Holomorphic Curves in the 6-Sphere](https://arxiv.org/abs/2105.10562v2). It says: “Then the real Fredholm index of 𝒟<sub>F</sub> is Ind(𝒟<sub>F</sub>) = rχ(Σ) + μ(E,F), where χ(Σ) is the Euler characteristic and μ(E,F) is the boundary Maslov index.”

**Sources:**

- [D. McDuff and D. Salamon, J-holomorphic Curves and Symplectic Topology, AMS Colloquium Publications 52 (2004), Appendix C](https://doi.org/10.1090/coll/052)

### The Maslov correction makes torus quantization coordinate-free and exact for oscillators

**Remember:** Every turning point costs a quarter of a quantum.

*Rules out counterexamples. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 81Q20. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** The action Iᵢ of a Lagrangian torus is the integral of p dq over its i-th basic loop, divided by 2π. EBK quantization asks that Iᵢ = ħ(nᵢ + μᵢ/4) for integers nᵢ. Here μᵢ, the Maslov index of the loop, counts turning points where the torus folds over position space.

**Problem.** The EBK rule depends only on the Lagrangian torus, not on the chosen loops or position coordinates, because each μᵢ comes from the Maslov class. For the harmonic oscillator μ = 2, and the rule gives the exact levels E = ħω(n + 1/2).

**How the definition helps.** The Maslov term records the phase jump at each turning point, where the WKB short-wavelength approximation breaks down. The old Bohr–Sommerfeld rule I = nħ leaves out this term, so it gives E = nħω and loses the zero-point energy (our own). The work moves into Maslov's construction of global semiclassical states from local WKB pieces (our own).

**Wikipedia:** [Einstein–Brillouin–Keller method](https://en.wikipedia.org/wiki/Einstein%E2%80%93Brillouin%E2%80%93Keller_method). It says: “EBK quantization is an improvement from Bohr–Sommerfeld quantization which did not consider the caustic phase jumps at classical turning points.”

**Sources:**

- [J. B. Keller, Corrected Bohr–Sommerfeld quantum conditions for nonseparable systems, Ann. Physics 4 (1958) 180–188](https://doi.org/10.1016/0003-4916(58)90032-0)

### The tautological 1-form makes graphs of closed 1-forms Lagrangian

**Remember:** On the graph of β, the tautological form becomes β.

*True by definition.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 53D05. arXiv math.SG. Level 3: graduate.

**Definition.** The tautological 1-form θ on T∗Q is the one 1-form whose pullback along the graph of every 1-form β on Q is β itself. The symplectic form is dθ, so its restriction to the graph of β is dβ (our own).

**Problem.** The graph of a 1-form β is Lagrangian in T∗Q, meaning half-dimensional with dθ vanishing on it, exactly when β is closed, dβ = 0.

**How the definition helps.** Restriction commutes with exterior differentiation, so dθ restricts on the graph to dβ (our own). The graph has half the dimension of T∗Q.

**nLab:** [Liouville-Poincaré 1-form](https://ncatlab.org/nlab/show/Liouville-Poincar%C3%A9+1-form). It says: “for every smooth section σ ∈ Γ(T\* X) the identification σ\* θ = j(σ) between the pullback of θ along σ and the 1-form corresponding to σ under j.”

**Wikipedia:** [Tautological one-form](https://en.wikipedia.org/wiki/Tautological_one-form), [Symplectic manifold](https://en.wikipedia.org/wiki/Symplectic_manifold). It says: “The graph of a closed 1-form on M is a Lagrangian submanifold of T∗M. In particular, the graph of df is Lagrangian.”

**Sources:** none listed. No primary source with a working link was found.

### Treating conjugate points as Maslov crossings makes the Morse index theorem topological

**Remember:** Conjugate points are where the moving plane hits the vertical plane.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 58E10, 53C22. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** Along a geodesic, the linearized geodesic flow moves the vertical plane σ to a path λ(t) of Lagrangian planes. Here σ holds the variations that vanish at the start. A conjugate point is a time when λ(t) meets σ nontrivially, with multiplicity dim(λ(t) ∩ σ).

**Problem.** The Morse index of a geodesic segment, or of a Sturm–Liouville problem, equals the number of conjugate points inside the interval, counted with multiplicity. Both numbers equal a Maslov index of the path λ, with a suitable rule at the start point.

**How the definition helps.** Positive kinetic energy makes every crossing of λ with σ positive, so the Maslov index is the plain count of conjugate points (our own). The Maslov index is a homotopy invariant, so Arnold deforms the problem to one where the index is known (our own). The work moves into showing that the Morse index also equals this Maslov index (our own).

**Paper or page:** [Revisiting Arnold's topological proof of the Morse index theorem](https://arxiv.org/abs/2307.00655v1), [Revisiting Arnold's topological proof of the Morse index theorem](https://arxiv.org/abs/2307.00655v1). It says: “if we also assume that λ(a), λ(b) ∈ Λ⁰(σ), then Ind(λ) = ∑<sub>t ∈ (a,b)</sub> dim(λ(t) ∩ σ), where the sum above has finitely many non-zero terms.”

**Sources:**

- [J. J. Duistermaat, On the Morse index in variational calculus, Adv. Math. 21 (1976) 173–195](https://doi.org/10.1016/0001-8708(76)90074-8)
- [V. I. Arnold, Characteristic class entering in quantization conditions, Funct. Anal. Appl. 1 (1967) 1–13](https://doi.org/10.1007/BF01075861)

### Vanishing first cohomology forces Lagrangian intersections

**Remember:** A global primitive reaches extrema, where the nearby graph meets the original.

*Rules out counterexamples.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** A compact Lagrangian X has vanishing first real cohomology when every closed one-form on X is the derivative df of a global function f. A C¹-close Lagrangian is then the graph of some df near X, and it meets X exactly where df = 0 (our own).

**Problem.** Let X be a compact connected Lagrangian submanifold without boundary, of positive dimension, with vanishing first real cohomology. Every Lagrangian that is sufficiently C¹-close to X, in positions and first derivatives, meets X in at least two points.

**How the definition helps.** A function on a compact manifold has a maximum and a minimum; they are distinct critical points unless f is constant, when every point is an intersection (our own). The Lagrangian neighborhood theorem gives the graph description (our own). On a torus, the graph of a small nonzero constant one-form misses the zero section (our own).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “every Lagrangian submanifold of M which is C¹-close to X intersects X in at least two points.”

**Sources:** none listed. No primary source with a working link was found.

### A nondegenerate two-form exists exactly when an almost complex structure exists

**Remember:** Sp(2n, ℝ) and GL(n, ℂ) both shrink onto the same U(n).

*True by definition.* MSC 53D15 (Almost contact and almost symplectic manifolds), 53D05, 32Q60. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** An almost symplectic structure on a 2n-manifold is a nondegenerate 2-form, with no closedness condition. Equivalently, the tangent bundle gets transition maps in Sp(2n, ℝ), the group of linear maps that preserve a fixed nondegenerate 2-form. The groups Sp(2n, ℝ) and GL(n, ℂ) share the maximal compact subgroup U(n).

**Problem.** A 2n-manifold carries a nondegenerate 2-form if and only if it carries an almost complex structure, a field of maps J with J² = −1. For example, the 4-sphere carries neither (our own).

**How the definition helps.** Both groups deformation retract onto U(n), so a structure with either group is, up to homotopy, the same as one with group U(n) (our own). Concretely, polar decomposition turns ω and a metric into a J, and a J-invariant metric g turns J into the form g(Ju, v) (our own). The work is in these retractions, and the 4-sphere fact is a theorem of Ehresmann and Hopf (our own).

**nLab:** [almost Hermitian structure](https://ncatlab.org/nlab/show/almost+Hermitian+structure). It says: “Conversely, since the maximal compact subgroup inclusion is a homotopy equivalence, there is no obstruction to lifting an almost complex structure to an almost Hermitian structure.”

**Wikipedia:** [Almost symplectic manifold](https://en.wikipedia.org/wiki/Almost_symplectic_manifold). It says: “Almost symplectic manifolds. Can always be extended to an almost Hermitian structure.”

**Sources:** none listed. No primary source with a working link was found.

### Brackets of fibrewise linear functions turn Lie algebroids into linear Poisson structures

**Remember:** Sections of A are the linear functions on its dual.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.DG, math.SG. Level 3: graduate.

**Definition.** A Poisson structure on a vector bundle's total space is fibrewise linear when brackets of fibrewise linear functions are again fibrewise linear.

**Problem.** The dual of a Lie algebroid A carries a unique fibrewise linear Poisson structure whose bracket on linear functions is the bracket of sections. Every fibrewise linear Poisson structure on a vector bundle arises this way from a unique Lie algebroid on the dual bundle.

**How the definition helps.** Linear functions on the dual are sections of A, and the Leibniz rule fixes their brackets with base functions through the anchor (our own). So the Lie algebroid is read off from the bracket, and Jacobi for linear functions is Jacobi for sections (our own). The usual coordinate definition, with coefficients linear in the fibre variables, hides this; the work sits in showing that the two agree (our own).

**nLab:** [Lie-Poisson structure](https://ncatlab.org/nlab/show/Lie-Poisson+structure). It says: “More generally, for 𝔞 a Lie algebroid the fiberwise dual 𝔞\* inherits such a Poisson manifold structure.”

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “The class of vector bundles with linear Poisson structures coincides actually with that of (dual of) Lie algebroids.”

**Sources:** none listed. No primary source with a working link was found.

### Defining first integrals by the Poisson bracket gives Poisson’s theorem

**Remember:** A first integral has zero bracket with the Hamiltonian.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 37J37, 70H33. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** A first integral of a Hamiltonian H is a smooth function F that stays constant along every trajectory of H. Equivalently, its Poisson bracket {H,F} vanishes everywhere.

**Problem.** If F and G are first integrals of H, then their bracket {F, G} is also a first integral of H.

**How the definition helps.** Jacobi expresses {H,{F,G}} as {{H,F},G} + {F,{H,G}} (our own calculation). Both terms vanish because F and G are first integrals.

**Wikipedia:** [Hamiltonian vector field](https://en.wikipedia.org/wiki/Hamiltonian_vector_field). It says: “which means that the vector space of differentiable functions on M, endowed with the Poisson bracket, has the structure of a Lie algebra over ℝ”

**Sources:** none listed. No primary source with a working link was found.

### Defining leaves by Hamiltonian vector fields splits Poisson manifolds into symplectic leaves

**Remember:** Wherever Hamiltonian flows can carry you, you stay inside one leaf.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 53C12. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** A symplectic leaf of a Poisson manifold is a maximal connected immersed submanifold. At each point, its tangent space is spanned by the Hamiltonian vector fields there. The Hamiltonian vector field of f is the derivation g ↦ {f, g}.

**Problem.** Every Poisson manifold is a disjoint union of symplectic leaves, which may have different dimensions. On each leaf the Poisson bracket is the bracket of a symplectic form.

**How the definition helps.** Hamiltonian flows preserve the bracket, so they carry the span of Hamiltonian fields to itself; the Stefan–Sussmann theorem then makes this span integrable (our own). The leaf form must give {f, g} on Hamiltonian vectors, and it is nondegenerate because these vectors fill the leaf (our own). So the work sits in the Stefan–Sussmann theorem, or locally in the Weinstein splitting theorem (our own).

**nLab:** [symplectic leaf](https://ncatlab.org/nlab/show/symplectic+leaf). It says: “For (X, {-,-}) a Poisson manifold, a symplectic leaf is a maximal connected submanifold Y ↪︎ X on which the Poisson bracket restricts to a symplectic manifold structure.”

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “A Poisson manifold is naturally partitioned into regularly immersed symplectic manifolds of possibly different dimensions, called its symplectic leaves. These arise as the maximal integral submanifolds of the completely integrable singular distribution spanned by the Hamiltonian vector fields.”

**Sources:**

- [A. Weinstein, The local structure of Poisson manifolds, J. Differential Geom. 18 (1983) 523–557](https://doi.org/10.4310/jdg/1214437787)

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

### Left minus right invariant extensions of r are automatically multiplicative

**Remember:** Left and right translations commute, so the cross terms cancel.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 17B62. arXiv math.SG, math.QA. Level 3: graduate.

**Definition.** For r in 𝔤 ∧ 𝔤, the Sklyanin bivector on a Lie group G is rᴸ − rᴿ. Here rᴸ and rᴿ are the left-invariant and right-invariant bivectors equal to r at the identity.

**Problem.** The Sklyanin bivector is always multiplicative. On a connected group it is Poisson, making G a Poisson–Lie group, exactly when \[r, r\] is invariant under the adjoint action (Drinfeld).

**How the definition helps.** In the multiplicativity formula, the cross terms mix left and right translations, and they cancel because left and right translations commute (our own). rᴸ alone is never multiplicative for r ≠ 0, since it does not vanish at e (our own). So only the Poisson condition is left: \[π, π\] = \[r, r\]ᴸ − \[r, r\]ᴿ, which vanishes exactly when \[r, r\] is adjoint-invariant (our own).

**Paper or page:** [On the classical and quantum momentum map](https://arxiv.org/abs/1203.4112v1). It says: “Then (G,π<sub>G</sub>) is a Poisson Lie group if and only if \[r, r\] ∈ 𝔤∧𝔤∧𝔤 is Ad-invariant. In particular, when r satisfies the Yang-Baxter equation, it defines a multiplicative Poisson structure on G.”

**Sources:**

- [On the classical and quantum momentum map, arXiv:1203.4112v1](https://arxiv.org/abs/1203.4112v1)
- [V. G. Drinfel'd, Hamiltonian structures on Lie groups, Lie bialgebras and the geometric meaning of the classical Yang–Baxter equations, in Yang–Baxter Equation in Integrable Systems, World Scientific (1990) 222–225](https://doi.org/10.1142/9789812798336_0009)

### Multiplicativity makes inversion antisymplectic

**Remember:** Composing an arrow with its inverse adds their forms to zero.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic groupoid is a Lie groupoid, with smooth spaces of objects and invertible arrows, whose space of arrows carries a symplectic form ω. The form is multiplicative: on composable pairs, its pullback by composition is the sum of its pullbacks from the two factors.

**Problem.** Inversion in a symplectic groupoid sends the symplectic form to its negative.

**How the definition helps.** On pairs of identity arrows, multiplicativity says ω restricted to units equals twice itself, so it vanishes there (our own proof). On pairs of an arrow and its inverse, whose product is a unit, it says ω plus its pullback by inversion is zero.

**nLab:** [symplectic groupoid](https://ncatlab.org/nlab/show/symplectic+groupoid). It says: “the alternating sum of its canonical pullbacks to the space X₂ of composable morphisms vanishes”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicativity makes the tangent space of a Poisson–Lie group a Lie bialgebra

**Remember:** The cocycle condition is multiplicativity differentiated at the identity.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 17B62. arXiv math.SG, math.QA. Level 3: graduate.

**Definition.** A Lie bialgebra is a Lie algebra 𝔤 with a Lie bracket on its dual 𝔤\*. Let δ: 𝔤 → 𝔤 ∧ 𝔤 be the transpose of that bracket. It must satisfy δ(\[x, y\]) = x · δ(y) − y · δ(x), where 𝔤 acts on 𝔤 ∧ 𝔤 by the adjoint action.

**Problem.** The Lie algebra of a Poisson–Lie group is a Lie bialgebra, whose cobracket is the derivative of the bivector at the identity. For connected, simply connected groups, every Lie bialgebra comes from exactly one Poisson–Lie structure (Drinfeld).

**How the definition helps.** Multiplicativity makes the right-translated bivector a group 1-cocycle; its derivative at e is a Lie algebra 1-cocycle, the bialgebra condition (our own). The dual bracket satisfies Jacobi because it is the linear part of π at a zero (our own). The converse integrates the cocycle back to the group, which needs simple connectivity.

**Wikipedia:** [Lie bialgebra](https://en.wikipedia.org/wiki/Lie_bialgebra). It says: “The Lie algebra 𝔤 of a Poisson–Lie group G has a natural structure of Lie bialgebra.”

**Paper or page:** [On the classical and quantum momentum map](https://arxiv.org/abs/1203.4112v1). It says: “If (G,π<sub>G</sub>) is a Poisson Lie group, then the linearization of π<sub>G</sub> at e defines a Lie algebra structure on 𝔤\* such that (𝔤,𝔤\*) form a Lie bialgebra over 𝔤, called the tangent Lie bialgebra to (G,π<sub>G</sub>). Conversely, if G is connected and simply connected, then every Lie bialgebra (𝔤,𝔤\*) over 𝔤 defines a unique multiplicative Poisson structure π<sub>G</sub> on G such that (𝔤,𝔤\*) is the tangent Lie bialgebra to the Poisson Lie group (G,π<sub>G</sub>).”

**Sources:**

- [On the classical and quantum momentum map, arXiv:1203.4112v1](https://arxiv.org/abs/1203.4112v1)
- [V. G. Drinfel'd, Hamiltonian structures on Lie groups, Lie bialgebras and the geometric meaning of the classical Yang–Baxter equations, in Yang–Baxter Equation in Integrable Systems, World Scientific (1990) 222–225](https://doi.org/10.1142/9789812798336_0009)

### On a symplectic manifold Poisson cohomology is de Rham cohomology

**Remember:** Poisson cohomology is the de Rham theory of the cotangent algebroid.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 53D05. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** Poisson cohomology is the cohomology of multivector fields under the differential \[π, −\]. Here \[π, −\] is the Schouten bracket with the Poisson bivector π, the tensor with {f, g} = π(df, dg). Equivalently, it is the Lie algebroid cohomology of the cotangent bundle.

**Problem.** For a symplectic manifold, Poisson cohomology is isomorphic to de Rham cohomology in every degree. The map π♯, which sends a covector α to the vector π(α, −), gives the isomorphism.

**How the definition helps.** Defined as Lie algebroid cohomology of T\*M, it is carried by the algebroid isomorphism π♯ onto TM, whose cohomology is de Rham cohomology (our own). With the multivector definition one must check that π♯ turns d into \[π, −\], up to sign (our own). So the work sits in the theorem that the two definitions agree, which uses \[π, π\] = 0 (our own).

**nLab:** [Poisson cohomology](https://ncatlab.org/nlab/show/Poisson+cohomology). It says: “its Poisson cohomology (Lichnerowicz) is equivalently the Lie algebroid cohomology H•(CE(𝔓)) of the corresponding Poisson Lie algebroid 𝔓”

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “In the nondegenerate case, this becomes an isomorphism, so that the Poisson cohomology of a symplectic manifold fully recovers its de Rham cohomology.”

**Sources:**

- [A. Lichnerowicz, Les variétés de Poisson et leurs algèbres de Lie associées, J. Differential Geom. 12 (1977) 253–300](https://doi.org/10.4310/jdg/1214433987)

### Poisson maps have coisotropic graphs

**Remember:** Subtract the domain bracket and test on functions vanishing along the graph.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** A smooth map is Poisson when pulling back functions preserves the Poisson bracket, a Lie bracket on functions that obeys the product rule. A submanifold is coisotropic when the bracket of any two local functions vanishing on it also vanishes on it.

**Problem.** A smooth map is Poisson exactly when its graph is coisotropic in the product using the target bracket and the negative domain bracket.

**How the definition helps.** Coordinate differences generate the graph’s local vanishing ideal by Hadamard’s lemma (our own proof). Their product brackets on the graph equal pulled-back target brackets minus domain brackets of the pullbacks. The product rule extends this coordinate test to every pair of local functions.

**Paper or page:** [Lie groups of Poisson diffeomorphisms](https://arxiv.org/abs/2108.11490v2). It says: “A map $f:M\\to N$ is a Poisson map if and only if the graph of $f$ is coisotropic in $(N\\times M, \\pi<sub>N</sub>\\times (-\\pi<sub>M</sub>))$.”

**Sources:**

- [Lie groups of Poisson diffeomorphisms, Proposition 1.2](https://arxiv.org/abs/2108.11490v2)

### A momentum map is exactly an equivariantly closed extension of ω

**Remember:** Add the momentum map, and ω becomes equivariantly closed.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction), 55N91. arXiv math.SG, math.AT. Level 3: graduate.

**Definition.** In the Cartan model of equivariant cohomology, an equivariant form is a G-equivariant polynomial map from 𝔤 to differential forms. Its differential is (Dα)(ξ) = d(α(ξ)) − ξ⌟α(ξ), where ξ⌟ inserts the vector field of ξ. The candidate extension of ω is ξ ↦ ω + ⟨μ, ξ⟩ for a map μ from M to 𝔤\*.

**Problem.** A map μ: M → 𝔤\* is an equivariant momentum map exactly when ω + ⟨μ, ·⟩ is equivariantly closed in the Cartan model. So a symplectic action is Hamiltonian if and only if ω has an equivariantly closed extension.

**How the definition helps.** Since dω = 0, D(ω + ⟨μ, ξ⟩) equals d⟨μ, ξ⟩ − ξ⌟ω, so being closed is exactly the momentum map equation (our own). Membership in the Cartan complex means equivariance in ξ, which is equivariance of μ (our own). So the usual definition of a momentum map becomes a cohomology condition, and localization formulas apply to ω + μ (our own).

**nLab:** [Hamiltonian action](https://ncatlab.org/nlab/show/Hamiltonian+action). It says: “By Atiyah &amp; Bott, the action of a Lie algebra on a symplectic manifold is Hamiltonian if and only if the symplectic form has a (basic, closed) extension to equivariant de Rham cohomology.”

**Sources:**

- [M. Atiyah and R. Bott, The moment map and equivariant cohomology, Topology 23 (1984) 1–28](https://doi.org/10.1016/0040-9383(84)90021-1)

### A perfect Lie algebra makes every symplectic action Hamiltonian

**Remember:** A perfect Lie algebra is made of brackets, and brackets are Hamiltonian.

*Rules out counterexamples. Confidence: medium.* MSC 53D20 (Momentum maps; symplectic reduction), 17B56. arXiv math.SG, math.RT. Level 3: graduate.

**Definition.** A Lie algebra 𝔤 is perfect when 𝔤 = \[𝔤, 𝔤\], that is, when every element is a sum of brackets. This says that the first Lie algebra cohomology H¹(𝔤; ℝ) vanishes, and Whitehead's first lemma gives it for every semisimple 𝔤.

**Problem.** A symplectic action of a Lie group with perfect Lie algebra always has a momentum map. That is, the vector field ξ·p of each ξ in 𝔤 is Hamiltonian, whatever the topology of the manifold.

**How the definition helps.** The map sending ξ to the de Rham class of ω(ξ·p, ·) kills brackets, since brackets of symplectic vector fields are Hamiltonian (our own). On a perfect Lie algebra this map is therefore zero, and Hamiltonians chosen on a basis give μ (our own). The 2-torus translating itself with its area form is symplectic but not Hamiltonian, and its Lie algebra is not perfect (our own).

**Wikipedia:** [Whitehead's lemma (Lie algebra)](https://en.wikipedia.org/wiki/Whitehead%27s_lemma_%28Lie_algebra%29). It says: “In terms of Lie algebra cohomology, this is, by definition, equivalent to the fact that H¹(𝔤,V) = 0 for every such representation.”

**Sources:**

- [A. Cannas da Silva, Lectures on Symplectic Geometry, Lecture Notes in Mathematics 1764, Springer (2001), Part X, Moment maps revisited](https://doi.org/10.1007/11310822_11)

### Building toric manifolds as reductions of ℂᵈ makes them Kähler

**Remember:** Divide flat ℂᵈ by a unitary subtorus and Kähler survives.

*True by definition. Confidence: medium.* MSC 53D20 (Momentum maps; symplectic reduction), 14M25, 53C55. arXiv math.SG, math.AG. Level 3: graduate.

**Definition.** Delzant's construction realizes a Delzant polytope with d facets as the symplectic reduction of ℂᵈ by a subtorus K of the d-torus. K is the kernel of the map sending the i-th circle to the i-th facet normal, and it acts by unitary maps.

**Problem.** Every compact symplectic toric manifold has a torus-invariant integrable complex structure compatible with ω, so it is Kähler. As a complex manifold it is the smooth projective toric variety of the polytope.

**How the definition helps.** Built as a reduction of flat ℂᵈ, not from the action alone, the model is Kähler at once, as holomorphic isometries keep Kähler (our own). Delzant's uniqueness theorem carries this to every toric manifold with the same polytope, and that is where the work went (our own). The second claim also needs the theorem that this reduction agrees with the algebraic quotient that builds the toric variety (our own).

**Paper or page:** [Monotone Symplectic Six-Manifolds that admit a Hamiltonian GKM Action are diffeomorphic to Smooth Fano Threefolds](https://arxiv.org/abs/2308.10541). It says: “Let (M,ω,T,φ) be a compact symplectic toric manifold. The space admits an integrable almost complex structure that is T-invariant and compatible with ω and the moment map polytope is a smooth polytope.”

**Sources:**

- [T. Delzant, Hamiltoniens périodiques et images convexes de l'application moment, Bulletin de la Société Mathématique de France 116 (1988) 315–339](https://doi.org/10.24033/bsmf.2100)

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

### Defining the symplectic cut as a reduction makes it symplectic automatically

**Remember:** Cut by reducing X × ℂ, not by gluing by hand.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction). arXiv math.SG. Level 3: graduate.

**Definition.** Lerman's symplectic cut of a Hamiltonian circle space (X, ω, μ) at level ε is the symplectic reduction of X × ℂ at level ε. Here the circle acts on both factors, with moment map μ(x) − \|z\|².

**Problem.** If the circle acts freely on the level set μ = ε, the cut space is a symplectic manifold. It contains the region μ &gt; ε as an open dense part, and the reduced space at ε as a symplectic submanifold of codimension two.

**How the definition helps.** The cut is a reduced space, so the Marsden–Weinstein–Meyer theorem gives its symplectic form at once (our own). Where z ≠ 0 one rotates z to be positive, so that part is the region μ &gt; ε (our own). Where z = 0 one gets the reduced space at ε, with no hand-built model for the form near the boundary (our own).

**Wikipedia:** [Symplectic cut](https://en.wikipedia.org/wiki/Symplectic_cut). It says: “The symplectic cut is an elegant means of making the neighborhood-deletion/boundary-collapse process symplectically rigorous.”

**Sources:**

- [E. Lerman, Symplectic cuts, Mathematical Research Letters 2 (1995) 247–258](https://doi.org/10.4310/MRL.1995.v2.n3.a2)

### Dividing by the level's stabilizer makes reduction at nonzero values work

**Remember:** Divide only by the symmetries that keep the level in place.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction), 70H33. arXiv math.SG. Level 3: graduate.

**Definition.** Let μ be an equivariant momentum map, a map to 𝔤\* that generates the action and satisfies μ(g·p) = Ad\*(g)μ(p). The reduced space at α in 𝔤\* is μ⁻¹(α)/Gα, where Gα is the subgroup of G that fixes α under the coadjoint action Ad\*. By equivariance, Gα is exactly the part of G that preserves the level μ⁻¹(α).

**Problem.** If Gα acts freely and properly on μ⁻¹(α), then μ⁻¹(α)/Gα is a symplectic manifold. Its form pulls back to the restriction of ω to μ⁻¹(α).

**How the definition helps.** On the level, the directions that ω pairs to zero with the level are the Gα-orbit directions, so ω descends (our own). Dividing by all of G fails, since g carries μ⁻¹(α) onto μ⁻¹(g·α) (our own). For rotations of space, only the rotations about a nonzero angular momentum vector preserve its level (our own).

**Paper or page:** [From Symplectic to Poisson. A Study of Reduction and a Proposal Towards Implosion](https://arxiv.org/abs/2202.05783v1), [From Symplectic to Poisson. A Study of Reduction and a Proposal Towards Implosion](https://arxiv.org/abs/2202.05783v1). It says: “Suppose that G\_α acts freely and properly on μ⁻¹(α). Then there is a unique symplectic structure ω\_α on M//\_αG := μ⁻¹(α)/G\_α such that i\*ω = π\*ω\_α”

**Sources:**

- [J. Marsden and A. Weinstein, Reduction of symplectic manifolds with symmetry, Reports on Mathematical Physics 5 (1974) 121–130](https://doi.org/10.1016/0034-4877(74)90021-4)

### Equivariance makes the zero level invariant, unlike plane translations

**Remember:** An equivariant momentum map moves exactly as the group moves.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction). arXiv math.SG. Level 3: graduate.

**Definition.** A momentum map μ: M → 𝔤\* for an action of G on (M, ω) satisfies d⟨μ, ξ⟩ = ω(ξ·p, ·) for each ξ in 𝔤. Here ξ·p is the velocity of p under the flow of ξ. The map μ is equivariant when μ(g·p) = Ad\*(g)μ(p), where Ad\* is the coadjoint action of G on 𝔤\*.

**Problem.** For an equivariant momentum map, the zero level μ⁻¹(0) is invariant under G. So the reduced space μ⁻¹(0)/G is defined.

**How the definition helps.** The coadjoint action fixes 0, so equivariance gives μ(g·p) = 0 whenever μ(p) = 0. With dx∧dy, plane translations have momentum maps μ(x, y) = (y, −x) + c, whose levels are points that translations move (our own). The coadjoint action of this abelian group is trivial, so equivariance would force μ to be constant, and no choice of c helps (our own).

**Wikipedia:** [Momentum map](https://en.wikipedia.org/wiki/Momentum_map). It says: “with equivariant momentum map μ : M → 𝔤\*. From the Hamiltonian condition, it follows that μ⁻¹(0) is invariant under G.”

**Sources:**

- [J. Marsden and A. Weinstein, Reduction of symplectic manifolds with symmetry, Reports on Mathematical Physics 5 (1974) 121–130](https://doi.org/10.1016/0034-4877(74)90021-4)

### Equivariant closedness makes the Duistermaat–Heckman formula a case of localization

**Remember:** Exponentiate the equivariant symplectic form, then integrate over fixed points.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction), 55N91. arXiv math.SG. Level 3: graduate.

**Definition.** For a circle action with Hamiltonian H, the equivariant symplectic form adds tH to ω, up to sign, where t is the Lie algebra coordinate. It is equivariantly closed because H is a moment map, so its exponential is too.

**Problem.** Let a circle of length 2π act on a compact symplectic 2n-manifold with Hamiltonian H and isolated fixed points. Then ∫ e⁻ᵗᴴ ωⁿ/n! is (2π)ⁿ times the sum over fixed points p of e⁻ᵗᴴ⁽ᵖ⁾/(tⁿ w(p)), where w(p) multiplies the weights at p.

**How the definition helps.** Because the exponential of the equivariant symplectic form is equivariantly closed, the Atiyah–Bott–Berline–Vergne localization formula reduces its integral to the fixed points. At a fixed point p the form restricts to e⁻ᵗᴴ⁽ᵖ⁾, and the equivariant Euler class there is tⁿ w(p) (our own). The work went into the localization theorem; Duistermaat and Heckman's own proof studied how reduced spaces vary (our own).

**Wikipedia:** [Duistermaat–Heckman formula](https://en.wikipedia.org/wiki/Duistermaat%E2%80%93Heckman_formula), [Localization formula for equivariant cohomology](https://en.wikipedia.org/wiki/Localization_formula_for_equivariant_cohomology). It says: “showed how to deduce the Duistermaat–Heckman formula from a localization theorem for equivariant cohomology.”

**Sources:**

- [J. J. Duistermaat and G. J. Heckman, On the variation in the cohomology of the symplectic form of the reduced phase space, Inventiones Mathematicae 69 (1982) 259–268](https://doi.org/10.1007/BF01399506)
- [M. F. Atiyah and R. Bott, The moment map and equivariant cohomology, Topology 23 (1984) 1–28](https://doi.org/10.1016/0040-9383(84)90021-1)

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

### Projection to a Cartan subalgebra is a moment map, giving Kostant convexity

**Remember:** Projecting an orbit onto the torus is the torus moment map.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction), 22E46, 52B15. arXiv math.SG, math.RT. Level 3: graduate.

**Definition.** For a compact connected Lie group K with maximal torus T, an adjoint orbit Ad(K)·X is a symplectic manifold. Orthogonal projection from it to the Lie algebra 𝔱 of T is a moment map for the action of T.

**Problem.** For X in 𝔱, the projection of the orbit Ad(K)·X to 𝔱 is the convex polytope whose vertices are the Weyl group images of X. For the unitary group this is Schur–Horn.

**How the definition helps.** Once projection is a moment map, the Atiyah–Guillemin–Sternberg theorem makes its image the convex hull of the images of the T-fixed points. The fixed points in the orbit are its points in 𝔱, which form the Weyl group orbit of X. Kostant's 1973 proof used Lie theory directly; the work now sits in the convexity theorem (our own).

**Wikipedia:** [Kostant's convexity theorem](https://en.wikipedia.org/wiki/Kostant%27s_convexity_theorem). It says: “the fixed points of T in the orbit Ad(K)⋅X are just the orbit under the Weyl group, W(X). So the convexity properties of the moment map imply that the image is the convex polytope with these vertices.”

**Sources:**

- [M. F. Atiyah, Convexity and commuting Hamiltonians, Bulletin of the London Mathematical Society 14 (1982) 1–15](https://doi.org/10.1112/blms/14.1.1)
- [V. Guillemin and S. Sternberg, Convexity properties of the moment mapping, Inventiones Mathematicae 67 (1982) 491–513](https://doi.org/10.1007/BF01398933)

### Pushing Liouville measure forward makes toric volume the polytope's volume

**Remember:** Measure a region of the polytope by the volume sitting above it.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D20 (Momentum maps; symplectic reduction), 52B11. arXiv math.SG. Level 3: graduate.

**Definition.** The Duistermaat–Heckman measure of a Hamiltonian torus space is the pushforward of the Liouville measure ωⁿ/n! by the moment map μ. So the measure of a set A in the dual Lie algebra is the symplectic volume of the preimage of A.

**Problem.** For a compact symplectic toric 2n-manifold with polytope Δ, and circles of length 2π, the Duistermaat–Heckman measure is (2π)ⁿ times Lebesgue measure on Δ. So the symplectic volume of M is (2π)ⁿ times the Euclidean volume of Δ.

**How the definition helps.** The pushforward lets one compare the volume of M with Δ region by region, and its total mass is the volume of M (our own). Over the interior of Δ, action–angle coordinates make ω the sum of dμᵢ ∧ dθᵢ, so the density is (2π)ⁿ (our own). The work went into these coordinates; for the rotating unit sphere this is Archimedes' theorem, area 4π being 2π times height 2 (our own).

**Wikipedia:** [Duistermaat–Heckman formula](https://en.wikipedia.org/wiki/Duistermaat%E2%80%93Heckman_formula). It says: “pushforward of the canonical (Liouville) measure on a symplectic manifold under the moment map is a piecewise polynomial measure.”

**Sources:**

- [J. J. Duistermaat and G. J. Heckman, On the variation in the cohomology of the symplectic form of the reduced phase space, Inventiones Mathematicae 69 (1982) 259–268](https://doi.org/10.1007/BF01399506)
- [T. Delzant, Hamiltoniens périodiques et images convexes de l'application moment, Bulletin de la Société Mathématique de France 116 (1988) 315–339](https://doi.org/10.24033/bsmf.2100)

### Reduced forms carry Hamiltonian flows

**Remember:** Pull back the form and energy to see that their flows agree.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction). arXiv math.SG. Level 3: graduate.

**Definition.** Let a regular moment level sit in (M,ω) by the inclusion i and project onto its smooth reduced space by π. The reduced form Ω is the unique two-form whose pullback along π equals the restriction of ω: π\*Ω = i\*ω.

**Problem.** Take an equivariant moment map and a level where its derivative is onto, and suppose the group fixing that value acts freely and properly on the level. Then the flow of any invariant energy projects to the flow of the induced energy on the quotient.

**How the definition helps.** The identity π\*Ω = i\*ω carries Hamilton’s equation down to the quotient (our own argument). Noether’s theorem keeps the flow on the level, and invariance lets its vector field project. The reduced energy pulls back to the restricted energy, so the projected field satisfies the reduced Hamilton equation, and nondegeneracy makes it unique.

**Paper or page:** [From Symplectic to Poisson. A Study of Reduction and a Proposal Towards Implosion](https://arxiv.org/abs/2202.05783v1). It says: “In particular, $X<sub>H</sub>$ and $X<sub>h</sub>$ are $\\pi$-related.”

**Sources:**

- [Jerrold Marsden and Alan Weinstein, Reduction of symplectic manifolds with symmetry (1974)](https://doi.org/10.1016/0034-4877(74)90021-4)

### Requiring an effective half-dimensional torus lets the polytope classify

**Remember:** Toric means a faithful torus of exactly half the dimension.

*Rules out counterexamples. Confidence: medium.* MSC 53D20 (Momentum maps; symplectic reduction), 52B20. arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic toric manifold is a compact connected symplectic 2n-manifold with an effective Hamiltonian action of an n-dimensional torus. Effective means only the identity acts trivially; n is the largest torus dimension that fits.

**Problem.** Two symplectic toric manifolds with the same moment polytope are equivariantly symplectomorphic, by Delzant's theorem. Both conditions are needed: without them, different spaces share one polytope.

**How the definition helps.** Both conditions stop the polytope from losing data: rotating only the sphere in S² × Σ gives one interval for every surface Σ (our own). Without effectiveness, a speed-two circle on a sphere of area 2πL gives the same interval as the standard circle on area 4πL (our own). With a torus one dimension short, Karshon and Tolman need invariants beyond the moment image, such as genera.

**Wikipedia:** [Delzant's theorem](https://en.wikipedia.org/wiki/Delzant%27s_theorem). It says: “A symplectic toric manifold is a compact connected symplectic manifold (M²ⁿ,ω) together with an effective Hamiltonian action of the n-dimensional torus 𝕋ⁿ”

**Paper or page:** [Compact monotone tall complexity one T-spaces](https://arxiv.org/abs/2307.04198). It says: “Two compact tall complexity one T-spaces are isomorphic if and only if they have equal genera, equal Duistermaat-Heckman measures, and equivalent paintings.”

**Sources:**

- [T. Delzant, Hamiltoniens périodiques et images convexes de l'application moment, Bulletin de la Société Mathématique de France 116 (1988) 315–339](https://doi.org/10.24033/bsmf.2100)
- [Y. Karshon and S. Tolman, Classification of Hamiltonian torus actions with two-dimensional quotients, Geometry &amp; Topology 18 (2014) 669–716](https://doi.org/10.2140/gt.2014.18.669)

### Requiring proper actions excludes irrational flows from symplectic reduction

**Remember:** Proper actions keep orbits apart, so quotients stay Hausdorff.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction), 57S20. arXiv math.SG. Level 3: graduate.

**Definition.** An action of G on a manifold is proper when the map (g, p) ↦ (g·p, p) has compact preimages of compact sets. Proper actions have Hausdorff orbit spaces, and each orbit has a neighbourhood of standard form, by the slice theorem.

**Problem.** Let μ be an equivariant momentum map, and let G act freely and properly on μ⁻¹(0). Then μ⁻¹(0)/G is a Hausdorff symplectic manifold of dimension dim M − 2 dim G.

**How the definition helps.** Properness makes the orbit space Hausdorff and gives slices, so a free quotient is a manifold (our own). Without it the theorem fails for ℝ turning z at speed 1 and w at an irrational speed, on (ℂ∖{0})² (our own). This action is free and Hamiltonian, but each level is a union of tori with dense orbits, so the quotient is not Hausdorff (our own).

**Wikipedia:** [Momentum map](https://en.wikipedia.org/wiki/Momentum_map). It says: “Assume now that G acts freely and properly on μ⁻¹(0). It follows that 0 is a regular value of μ, so μ⁻¹(0) and its quotient μ⁻¹(0) / G are both smooth manifolds.”

**Sources:**

- [J. Marsden and A. Weinstein, Reduction of symplectic manifolds with symmetry, Reports on Mathematical Physics 5 (1974) 121–130](https://doi.org/10.1016/0034-4877(74)90021-4)

### Seeing the diagonal as a moment map makes Schur–Horn a convexity theorem

**Remember:** The diagonal of a Hermitian matrix is a torus moment map.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction), 15A42. arXiv math.SG. Level 3: graduate.

**Definition.** The Hermitian n × n matrices with eigenvalues λ₁, …, λₙ form a coadjoint orbit of the unitary group, so they form a symplectic manifold. For the torus of diagonal unitary matrices acting on it by conjugation, the moment map sends a matrix to its diagonal.

**Problem.** The diagonals of the Hermitian matrices with eigenvalues λ₁, …, λₙ fill exactly the convex hull of all rearrangements of (λ₁, …, λₙ). This is the Schur–Horn theorem.

**How the definition helps.** Once the diagonal is a moment map, the Atiyah–Guillemin–Sternberg theorem says its image is the convex hull of the images of the fixed points. A matrix is fixed by all diagonal unitaries exactly when it is diagonal, so the fixed points carry the eigenvalues in some order. The work went into the convexity theorem, and the matrix proof needs a separate construction for Horn's half (our own).

**Wikipedia:** [Schur–Horn theorem](https://en.wikipedia.org/wiki/Schur%E2%80%93Horn_theorem). It says: “The Schur–Horn theorem may be viewed as a corollary of the Atiyah–Guillemin–Sternberg convexity theorem in the following manner.”

**Sources:**

- [M. F. Atiyah, Convexity and commuting Hamiltonians, Bulletin of the London Mathematical Society 14 (1982) 1–15](https://doi.org/10.1112/blms/14.1.1)
- [V. Guillemin and S. Sternberg, Convexity properties of the moment mapping, Inventiones Mathematicae 67 (1982) 491–513](https://doi.org/10.1007/BF01398933)

### Souriau's affine action makes every momentum map equivariant

**Remember:** Shift the coadjoint action by the cocycle, and equivariance holds.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction), 20J06. arXiv math.SG. Level 3: graduate.

**Definition.** Let μ be a momentum map, a map to 𝔤\* whose components ⟨μ, ξ⟩ generate the action as Hamiltonian flows. On a connected manifold, Souriau's cocycle σ(g) = μ(g·p) − Ad\*(g)μ(p) does not depend on p, where Ad\* is the coadjoint action. The affine action of G on 𝔤\* is g·α = Ad\*(g)α + σ(g).

**Problem.** Every momentum map on a connected symplectic manifold is equivariant for Souriau's affine action of G on 𝔤\*. For translations of the plane with dx∧dy, the cocycle is σ(a, b) = (b, −a).

**How the definition helps.** Equivariance for the affine action is the definition of σ, so unlike equivariance for the coadjoint action it never fails (our own). The work moves into showing that σ is constant in p, since g preserves ω, and that σ(gh) = σ(g) + Ad\*(g)σ(h) (our own). Reduction then works at any α, dividing by the subgroup that fixes α under the affine action (our own).

**Wikipedia:** [Momentum map](https://en.wikipedia.org/wiki/Momentum_map). It says: “However, in general the coadjoint action must be modified to make the map equivariant (this is the case for example for the Euclidean group). The modification is by a 1-cocycle on the group with values in 𝔤\*, as first described by Souriau (1970).”

**Sources:**

- [J.-M. Souriau, Structure of Dynamical Systems, A Symplectic View of Physics, Birkhäuser (1997), translation of Structure des systèmes dynamiques, Dunod (1970)](https://doi.org/10.1007/978-1-4612-0281-3)

### Testing convexity on lines turns connected moment fibres into convexity

**Remember:** A set is convex when every line meets it in one piece.

*True by definition. Confidence: medium.* MSC 53D20 (Momentum maps; symplectic reduction), 52A20. arXiv math.SG. Level 3: graduate.

**Definition.** A set in a vector space is convex exactly when every line meets it in a connected set. This replaces the segment definition by a connectedness property, which Morse theory can check.

**Problem.** For a Hamiltonian action of a torus on a compact connected symplectic manifold, the image of the moment map is a convex polytope. It is the convex hull of the images of the fixed points.

**How the definition helps.** Read on lines, convexity of the image needs only that the preimage of each line is connected, because then its image is connected (our own). A line cut out by rational linear equations has as preimage a fibre of a codimension-one subtorus moment map; density covers other lines (our own). The work went into connected fibres, which Atiyah proves by Morse theory, since moment components have only even indices (our own).

**Paper or page:** [Compact monotone tall complexity one T-spaces](https://arxiv.org/abs/2307.04198). It says: “(Connectedness) The fibers of the moment map are connected. (Stability) The moment map is open as a map onto its image. (Convexity) The moment map image is the convex hull of the images of the fixed submanifolds.”

**Sources:**

- [M. F. Atiyah, Convexity and commuting Hamiltonians, Bulletin of the London Mathematical Society 14 (1982) 1–15](https://doi.org/10.1112/blms/14.1.1)
- [V. Guillemin and S. Sternberg, Convexity properties of the moment mapping, Inventiones Mathematicae 67 (1982) 491–513](https://doi.org/10.1007/BF01398933)

### The Delzant smoothness condition keeps toric spaces free of orbifold points

**Remember:** At every corner, the edge vectors must generate the whole lattice.

*Rules out counterexamples. Confidence: medium.* MSC 53D20 (Momentum maps; symplectic reduction), 52B20, 14M25. arXiv math.SG, math.CO. Level 3: graduate.

**Definition.** A Delzant polytope is a simple rational polytope that is smooth. At each vertex the primitive edge vectors form a basis of the lattice ℤⁿ, not just of a sublattice of finite index.

**Problem.** Every compact symplectic toric manifold has a Delzant moment polytope, and Delzant's construction turns every Delzant polytope into one. A simple rational polytope that is not smooth comes only from an orbifold, a space locally like ℂⁿ divided by a finite group.

**How the definition helps.** Over a vertex, the reducing subtorus has stabilizer ℤⁿ modulo the span of the facet normals there, which is trivial exactly at smooth vertices (our own). The triangle with vertices (0,0), (1,0) and (0,2) is rational and simple; at (1,0) its normals (0,1) and (−2,−1) span an index-2 sublattice (our own). Its toric space is the weighted projective plane ℂP(1,1,2), with a ℤ/2 orbifold point over (1,0) (our own).

**Wikipedia:** [Delzant's theorem](https://en.wikipedia.org/wiki/Delzant%27s_theorem). It says: “it is smooth polytope, i.e. for each vertex x, the corresponding vectors uᵢˣ form a ℤ-basis of ℤⁿ.”

**Sources:**

- [T. Delzant, Hamiltoniens périodiques et images convexes de l'application moment, Bulletin de la Société Mathématique de France 116 (1988) 315–339](https://doi.org/10.24033/bsmf.2100)
- [E. Lerman and S. Tolman, Hamiltonian torus actions on symplectic orbifolds and toric varieties, Transactions of the American Mathematical Society 349 (1997) 4201–4230](https://doi.org/10.1090/S0002-9947-97-01821-7)

### The Kirillov–Kostant–Souriau form makes homogeneous Hamiltonian spaces cover coadjoint orbits

**Remember:** On a coadjoint orbit, each point is its own momentum.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction), 22E60. arXiv math.SG, math.RT. Level 3: graduate.

**Definition.** A coadjoint orbit O is an orbit of G in 𝔤\* under the coadjoint action, the dual of conjugation. Its Kirillov–Kostant–Souriau form is the unique symplectic form making the inclusion of O into 𝔤\* a momentum map. A momentum map μ for an action on (M, ω) satisfies d⟨μ, ξ⟩ = ω(ξ·p, ·), where ξ·p is the velocity of p under ξ.

**Problem.** If G acts transitively on (M, ω) with a momentum map μ satisfying μ(g·p) = Ad\*(g)μ(p), then μ covers a coadjoint orbit. It pulls the orbit's form back to ω.

**How the definition helps.** With this definition, ω and the pulled-back orbit form obey the same momentum map equation, so they agree on orbit directions, which span (our own). Equivariance puts the image in one coadjoint orbit, and nondegeneracy of ω makes dμ injective, so μ is a covering (our own). The usual formula ω(ξ·λ, η·λ) = ±⟨λ, \[ξ, η\]⟩ needs separate checks that it is well defined and closed (our own).

**Wikipedia:** [Momentum map](https://en.wikipedia.org/wiki/Momentum_map), [Coadjoint representation](https://en.wikipedia.org/wiki/Coadjoint_representation). It says: “Then there exists a unique symplectic structure on 𝒪(F) such that inclusion map 𝒪(F) ↪︎ 𝔤\* is a momentum map.”

**Sources:**

- [B. Kostant, Quantization and unitary representations, Lecture Notes in Mathematics 170 (1970)](https://doi.org/10.1007/bfb0079068)

### The momentum map equation makes Hamiltonian torus orbits isotropic

**Remember:** Commuting symmetries move points along directions that ω cannot see.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction), 57S15. arXiv math.SG. Level 3: graduate.

**Definition.** A torus action on (M, ω) is Hamiltonian when it has a momentum map μ with d⟨μ, ξ⟩ = ω(ξ·p, ·), for ξ·p the velocity of p. Equivariance of μ then gives ω(ξ·p, η·p) = ±⟨μ(p), \[ξ, η\]⟩. A submanifold is isotropic when ω vanishes on its tangent vectors.

**Problem.** Every orbit of a Hamiltonian torus action is isotropic. So an effective Hamiltonian torus action, where only the identity acts trivially, on a connected manifold of dimension 2n has torus dimension at most n.

**How the definition helps.** For an abelian Lie algebra the bracket term vanishes, so ω(ξ·p, η·p) = 0 and orbits are isotropic (our own). An effective torus action has orbits of full dimension on a dense open set, and isotropic subspaces have at most half the dimension (our own). The 2-torus translating itself with its area form is symplectic but not Hamiltonian, and its single orbit is the whole symplectic torus (our own).

**Paper or page:** [Reduction principles for proper actions](https://arxiv.org/abs/2212.06715v2). It says: “Let G be a Lie group acting in a Hamiltonian fashion on (M, ω). If G° is Abelian, then any G orbit is isotropic.”

**Sources:**

- [L. Biliotti, Reduction principles for proper actions (2025)](https://arxiv.org/abs/2212.06715v2)

### Vanishing second Lie algebra cohomology makes momentum maps equivariant

**Remember:** The failure of equivariance is a cohomology class, nothing more.

*Makes the theorem clean to state or prove.* MSC 53D20 (Momentum maps; symplectic reduction), 17B56. arXiv math.SG. Level 3: graduate.

**Definition.** Let μ be a momentum map, a map to 𝔤\* whose components ⟨μ, ξ⟩ are Hamiltonian functions for the action. The cocycle c(ξ, η) = {⟨μ, ξ⟩, ⟨μ, η⟩} − ⟨μ, \[ξ, η\]⟩, with { , } the Poisson bracket, measures the failure of equivariance. On a connected manifold c is a constant 2-cocycle on 𝔤, and adding a constant λ to μ changes c by ±λ(\[ξ, η\]), a coboundary.

**Problem.** If H²(𝔤; ℝ) = 0, as for semisimple 𝔤, then each momentum map of a connected group on a connected manifold becomes equivariant after a constant shift. If also H¹(𝔤; ℝ) = 0, the equivariant momentum map is unique.

**How the definition helps.** For a connected group, equivariance means c = 0, so the class of c is the only obstruction (our own). Two equivariant momentum maps differ by a constant vanishing on \[𝔤, 𝔤\], which is zero when H¹ = 0 (our own). For translations of the plane with dx∧dy, c(e₁, e₂) = ±1, and the abelian algebra ℝ² has no nonzero coboundaries (our own).

**Wikipedia:** [Whitehead's lemma (Lie algebra)](https://en.wikipedia.org/wiki/Whitehead%27s_lemma_%28Lie_algebra%29). It says: “Similarly, Whitehead's second lemma states that under the conditions of the first lemma, also H²(𝔤,V) = 0.”

**Paper or page:** [Uniqueness of the Momentum map](https://arxiv.org/abs/1208.1486v3). It says: “The element c(ξ,η) = { H\_ξ, H\_η } − H\_\[ξ,η\] is a two cocycle c on 𝔤 with values in ℝ.”

**Sources:**

- [C. Esposito and R. Nest, Uniqueness of the momentum map, Journal of Geometry and Physics 106 (2016)](https://arxiv.org/abs/1208.1486v3)
- [A. Cannas da Silva, Lectures on Symplectic Geometry, Lecture Notes in Mathematics 1764, Springer (2001), Part X, Moment maps revisited](https://doi.org/10.1007/11310822_11)

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

### The contact Legendre transform needs no convexity

**Remember:** Swap position and slope, and the Legendrian survives.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D22 (Canonical transformations in symplectic and contact geometry), 53D10. arXiv math.SG. Level 3: graduate.

**Definition.** The Legendre transform is the map (q, p, z) ↦ (p, q, p·q − z) of the 1-jet space ℝ²ⁿ⁺¹. That space carries the contact form dz − p·dq. The map acts on a function f through its Legendrian lift {(q, df(q), f(q))}, an n-dimensional submanifold on which the contact form vanishes.

**Problem.** The Legendre transform of every smooth function f is a smooth Legendrian submanifold; only its projection to the new (q, z) coordinates may have cusps. When f has positive-definite Hessian, the image is the 1-jet graph of the classical transform f\*, and f\*\* = f.

**How the definition helps.** The map pulls dz − p·dq back to its negative, so it preserves the contact planes and carries Legendrians to Legendrians (our own). It is an involution, so the transform is defined for every function and applying it twice gives back f (our own). Convexity is needed only to make the image a graph again, by making q ↦ df(q) invertible (our own).

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “Since a differentiable function F: ℝⁿ → ℝ can be lifted uniquely to a Legendrian submanifold, and any contactomorphism preserves Legendrian submanifolds, this defines a Legendre transformation on the function F itself.”

**Sources:**

- [V. I. Arnold, Mathematical Methods of Classical Mechanics, 2nd ed., Graduate Texts in Mathematics 60, Springer, 1989](https://doi.org/10.1007/978-1-4757-2063-1)

### Capacities make uniform limits of symplectomorphisms symplectic

**Remember:** A capacity only sees which sets fit inside which.

*True by definition. Confidence: medium.* MSC 53D35 (Global theory of symplectic and contact manifolds), 57R17. arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic capacity gives each open set U a number c(U) that never increases under symplectic embeddings and scales as c(λU) = λ²c(U). It equals π on the unit ball and on the cylinder of radius 1. Its main axiom, monotonicity, refers only to which sets embed in which.

**Problem.** If symplectic diffeomorphisms converge uniformly to a diffeomorphism, then the limit is also symplectic. This is the Eliashberg–Gromov theorem, one of the first signs of symplectic rigidity.

**How the definition helps.** Uniform convergence traps images of small ellipsoids between images of shrunk and enlarged copies, so the limit keeps their capacities (our own). So its derivative keeps ellipsoid capacities and is symplectic or antisymplectic, which means it keeps or reverses the sign of ω; a product with ℝ² rules out reversal (our own). Eliashberg's proof used wave fronts, while this proof moves the work into the existence of a capacity, which is Gromov's non-squeezing theorem (our own).

**Wikipedia:** [Yakov Eliashberg](https://en.wikipedia.org/wiki/Yakov_Eliashberg). It says: “He developed a combinatorial technique which he used to prove that the group of symplectomorphisms is 𝒞⁰-closed in the diffeomorphism group.”

**Sources:**

- [Y. Eliashberg, A theorem on the structure of wave fronts and its applications in symplectic topology, Funct. Anal. Appl. 21 (1987), 227–232](https://doi.org/10.1007/bf02577138)
- [M. Gromov, Pseudo holomorphic curves in symplectic manifolds, Invent. Math. 82 (1985), 307–347](https://doi.org/10.1007/BF01388806)

### Capacity normalization gives non-squeezing

**Remember:** Volume misses the narrow cylinder, but a normalized capacity sees it.

*True by definition.* MSC 53D35 (Global theory of symplectic and contact manifolds). arXiv math.SG. Level 3: graduate.

**Definition.** A normalized symplectic capacity gives each symplectic manifold a size in \[0,∞\] that cannot decrease under symplectic embedding and multiplies by a when the form is multiplied by a &gt; 0. It gives both the radius-r ball and the radius-r cylinder over a conjugate coordinate plane the value πr².

**Problem.** In standard symplectic space, a ball cannot embed symplectically into a cylinder of smaller radius over a conjugate coordinate plane.

**How the definition helps.** An embedding of the radius-r ball into the radius-R cylinder gives πr² ≤ πR² by monotonicity and normalization, so r ≤ R. The substantive input is that a normalized capacity exists (our own explanation).

**Wikipedia:** [Non-squeezing theorem](https://en.wikipedia.org/wiki/Non-squeezing_theorem). It says: “Given such a capacity, one can verify the non-squeezing theorem”

**Sources:** none listed. No primary source with a working link was found.

### Defining flux on isotopies makes Ham the kernel of a homomorphism

**Remember:** Flux records how much area an isotopy sweeps across loops.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D35 (Global theory of symplectic and contact manifolds), 53D22. arXiv math.SG. Level 3: graduate.

**Definition.** The flux of a symplectic isotopy ψₜ with vector fields Xₜ is the class in H¹(M; ℝ) of the time integral of ω(Xₜ, ·). An isotopy is Hamiltonian when every ω(Xₜ, ·) is exact, so every Hamiltonian isotopy has zero flux.

**Problem.** On a closed symplectic manifold, a symplectomorphism isotopic to the identity is Hamiltonian exactly when some symplectic isotopy to it has zero flux. So Ham(M) is a normal subgroup of Symp₀(M), the identity component, with abelian quotient.

**How the definition helps.** A Hamiltonian isotopy has zero flux because each ω(Xₜ, ·) is exact, which is the easy direction (our own). Flux is a homomorphism from the universal cover of Symp₀(M) to H¹(M; ℝ), so Symp₀(M)/Ham(M) is a quotient of this abelian group (our own). The converse, that zero flux makes ψ Hamiltonian, is due to Banyaga (our own); the quoted paper states it for maps that preserve a submanifold L.

**Paper or page:** [On relative Hamiltonian diffeomorphisms](https://arxiv.org/abs/2510.13663). It says: “ψ ∈ Symp₀(M,L) is a Hamiltonian symplectomorphism if and only if there exists a symplectic isotopy ψₜ:\[0,1\]→Symp₀(M,L) such that ψ₀=id, ψ₁=ψ and Flux({ψₜ})=0.”

**Sources:**

- [A. Banyaga, Sur la structure du groupe des difféomorphismes qui préservent une forme symplectique, Comment. Math. Helv. 53 (1978), 174–227](https://doi.org/10.1007/bf02566074)

### Defining Gromov width by embedded balls makes it the smallest capacity

**Remember:** Gromov width measures the biggest ball that fits inside.

*True by definition. Confidence: medium.* MSC 53D35 (Global theory of symplectic and contact manifolds). arXiv math.SG. Level 3: graduate.

**Definition.** A normalized symplectic capacity c is monotone under symplectic embeddings, scales like area and equals π on the unit ball and on the unit cylinder. The Gromov width of M is the supremum of πr² over all balls of radius r that embed symplectically into M. The cylindrical capacity of M is the infimum of πR² over all R such that M embeds symplectically into the cylinder of radius R.

**Problem.** Every normalized symplectic capacity c satisfies Gromov width(M) ≤ c(M) ≤ cylindrical capacity(M). So the Gromov width is the smallest normalized capacity and the cylindrical capacity is the largest.

**How the definition helps.** If the ball of radius r embeds in M, monotonicity and normalization give πr² ≤ c(M), and the supremum gives the lower bound (our own). The upper bound follows in the same way from embeddings of M into cylinders (our own). The work went into showing that these two numbers are capacities at all, which needs Gromov's non-squeezing theorem (our own for the cylindrical capacity).

**Wikipedia:** [Non-squeezing theorem](https://en.wikipedia.org/wiki/Non-squeezing_theorem). It says: “Given such a capacity, one can verify the non-squeezing theorem, and given the non-squeezing theorem, the Gromov width w<sub>G</sub>(M, ω) = sup{πr² : there exists a symplectic embedding B²ⁿ(r) → (M,ω)} is such a capacity.”

**Sources:**

- [M. Gromov, Pseudo holomorphic curves in symplectic manifolds, Invent. Math. 82 (1985), 307–347](https://doi.org/10.1007/BF01388806)
- [I. Ekeland and H. Hofer, Symplectic topology and Hamiltonian dynamics, Math. Z. 200 (1989), 355–378](https://doi.org/10.1007/BF01215653)

### Displacement energy makes Hofer's distance a true metric on ℝ²ⁿ

**Remember:** Pushing a ball off itself always costs a definite energy.

*True by definition.* MSC 53D35 (Global theory of symplectic and contact manifolds), 53D22. arXiv math.SG. Level 3: graduate.

**Definition.** A Hamiltonian diffeomorphism is the time-one map of the flow of a compactly supported, time-dependent function H. Its Hofer norm is the infimum, over all such H, of the time integral of max H − min H. The displacement energy e(A) of a set A is the infimum of the Hofer norms of maps that move A completely off itself.

**Problem.** On compactly supported Hamiltonian diffeomorphisms of ℝ²ⁿ, the Hofer distance from φ₀ to φ₁ is the Hofer norm of φ₁φ₀⁻¹. It is zero only when φ₀ = φ₁, so it is a genuine metric.

**How the definition helps.** A map φ other than the identity moves some small ball B off itself, so ‖φ‖ ≥ e(B) by the definition of e (our own). Every set with nonempty interior has positive displacement energy, so the Hofer norm of φ is positive. The work thus moves from each map to one inequality about sets, e(B) &gt; 0, which needs variational or holomorphic-curve methods (our own).

**Paper or page:** [On a Theorem by Schlenk](https://arxiv.org/abs/2401.03456), [On a Theorem by Schlenk](https://arxiv.org/abs/2401.03456). It says: “For any subset A ⊆ ℝ²ⁿ with nonempty interior we have that e(A) &gt; 0.”

**Sources:**

- [H. Hofer, On the topological properties of symplectic maps, Proc. Roy. Soc. Edinburgh Sect. A 115 (1990), 25–38](https://doi.org/10.1017/S0308210500024549)
- [F. Lalonde and D. McDuff, The geometry of symplectic energy, Ann. of Math. 141 (1995), 349](https://doi.org/10.2307/2118524)

### Taking the cylinder over a symplectic plane keeps non-squeezing true

**Remember:** The narrow waist must lie in a symplectic plane.

*Rules out counterexamples.* MSC 53D35 (Global theory of symplectic and contact manifolds). arXiv math.SG. Level 3: graduate.

**Definition.** In Gromov's non-squeezing theorem the cylinder Z(R) is the set of points of ℝ²ⁿ with x₁² + y₁² &lt; R². The coordinates x₁ and y₁ pair under the symplectic form ω = Σ dxᵢ ∧ dyᵢ. So the round cross-section lies in a symplectic plane, on which ω is not zero.

**Problem.** The ball of radius r embeds symplectically into Z(R) only when r ≤ R. For n ≥ 2 the cylinder x₁² + x₂² &lt; R², over a plane on which ω vanishes, contains a symplectic image of every ball.

**How the definition helps.** The cross-section of Z(R) lies in a symplectic plane, so the stretch that defeats other cylinders cannot shrink it (our own). The symplectic map (x, y) ↦ (εx, y/ε) puts any ball inside x₁² + x₂² &lt; R², but it stretches y₁ (our own). That no other map shrinks the ball into Z(R) is the hard part, which Gromov proved with holomorphic curves (our own).

**Wikipedia:** [Non-squeezing theorem](https://en.wikipedia.org/wiki/Non-squeezing_theorem). It says: “The choice of axes for the cylinder are not arbitrary given the fixed symplectic form above; the circles of the cylinder each lie in a symplectic subspace of ℝ²ⁿ.”

**Sources:**

- [M. Gromov, Pseudo holomorphic curves in symplectic manifolds, Invent. Math. 82 (1985), 307–347](https://doi.org/10.1007/BF01388806)

### The capacity axioms make every capacity continuous on convex bodies

**Remember:** Two axioms pin a capacity between two scaled copies.

*True by definition. Confidence: medium.* MSC 53D35 (Global theory of symplectic and contact manifolds). arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic capacity c is monotone, so a symplectic embedding of U into V gives c(U) ≤ c(V). It is conformal, so scaling a domain of ℝ²ⁿ by λ &gt; 0, which multiplies the symplectic form by λ², multiplies c by λ². It is finite on bounded domains, which fit inside cylinders.

**Problem.** Every symplectic capacity is continuous in the Hausdorff distance on convex bodies in ℝ²ⁿ that contain the origin in their interior.

**How the definition helps.** A convex body L near K lies between (1 − δ/ρ)K and (1 + δ/ρ)K, so monotonicity and conformality give (1 − δ/ρ)²c(K) ≤ c(L) ≤ (1 + δ/ρ)²c(K) (our own). Here ρ is the radius of a ball about the origin inside K, and δ is the Hausdorff distance from K to L (our own). So even a capacity built from dynamics, such as the least action of a closed orbit, is continuous for free (our own).

**Wikipedia:** [Non-squeezing theorem](https://en.wikipedia.org/wiki/Non-squeezing_theorem). It says: “(Monotonicity) If there is a symplectic embedding (M, ω) → (N,η) and dim M = dim N, then c(M,ω) ≤ c(N,η), (Conformality) c(M, λω) = λ c(M, ω),”

**Sources:**

- [I. Ekeland and H. Hofer, Symplectic topology and Hamiltonian dynamics, Math. Z. 200 (1989), 355–378](https://doi.org/10.1007/BF01215653)

### A∞ relations make the Floer product associative

**Remember:** Each A∞ relation is the boundary of a space of polygons.

*True by definition. Confidence: medium.* MSC 53D37 (Symplectic aspects of mirror symmetry, homological mirror symmetry, and Fukaya category), 18G70. arXiv math.SG. Level 3: graduate.

**Definition.** The Fukaya category is an A∞ category whose objects are Lagrangian submanifolds and whose maps μᵈ count holomorphic polygons with d + 1 corners. Lagrangian submanifolds are half-dimensional submanifolds on which the symplectic form vanishes. The A∞ relations are identities among the μᵈ, with one term for each way a family of polygons can break in two.

**Problem.** The product on Lagrangian Floer cohomology, which counts holomorphic triangles, is associative.

**How the definition helps.** The A∞ relation with three inputs says that μ² is associative up to terms that contain μ¹, and these terms vanish on cohomology (our own). A direct proof on cohomology needs the same count of holomorphic 4-gons, so the A∞ definition moves that work rather than removing it (our own). The work goes into showing that the boundaries of the moduli spaces of polygons consist of broken polygons, which gives the relations.

**Wikipedia:** [Fukaya category](https://en.wikipedia.org/wiki/Fukaya_category). It says: “The sequence of higher compositions μ₁, μ₂, …, satisfy the A∞ relations because the boundaries of various moduli spaces of holomorphic polygons correspond to configurations of degenerate polygons.”

**Sources:**

- [P. Seidel, Fukaya Categories and Picard–Lefschetz Theory, Zurich Lectures in Advanced Mathematics, EMS, 2008](https://doi.org/10.4171/063)

### Exactness makes strip energy an action difference

**Remember:** On an exact Lagrangian, area is read off from a function.

*Rules out counterexamples. Confidence: medium.* MSC 53D37 (Symplectic aspects of mirror symmetry, homological mirror symmetry, and Fukaya category), 53D12. arXiv math.SG. Level 3: graduate.

**Definition.** A Lagrangian in (M, dθ), a half-dimensional submanifold on which dθ vanishes, is exact when θ restricted to it equals df for a function f. Then each intersection point p of exact Lagrangians L₀ and L₁ has an action f₁(p) − f₀(p). The weaker condition of weak exactness asks only that dθ integrate to zero over every disk with boundary on the Lagrangian.

**Problem.** For exact Lagrangians L₀ and L₁, every holomorphic strip from p to q has energy equal to the action difference of p and q. So all strips with the same ends have the same energy.

**How the definition helps.** Stokes' theorem turns the area of a strip into differences of f at its ends, so the energy depends only on p and q (our own). In T\*S¹, the graph of (a + cos θ)dθ, for small a ≠ 0, is weakly exact but not exact (our own). It and the zero section bound two strips with equal ends whose areas differ by 2π\|a\|, so weak exactness does not fix the energy (our own).

**Paper or page:** [Towards Homological Mirror Symmetry](https://arxiv.org/abs/2108.03931v2). It says: “Then the energy of any J-holomorphic strip defining CF(L₀,L₁) is constant.”

**Sources:**

- [P. Seidel, Fukaya Categories and Picard–Lefschetz Theory, Zurich Lectures in Advanced Mathematics, EMS, 2008](https://doi.org/10.4171/063)

### Split-closure reduces mirror symmetry to generators

**Remember:** Close under cones and summands, and generators determine everything.

*Makes the theorem clean to state or prove.* MSC 53D37 (Symplectic aspects of mirror symmetry, homological mirror symmetry, and Fukaya category), 14J33, 18G80. arXiv math.SG, math.AG. Level 3: graduate.

**Definition.** The split-closed derived category of an A∞ category is its smallest envelope that is closed under cones, shifts and direct summands. It is unique up to equivalence, so it is determined by any full subcategory that split-generates it.

**Problem.** Let 𝒜 and ℬ be c-unital A∞ categories, which means that their cohomology categories have identities. If split-generating full subcategories of 𝒜 and ℬ are quasi-equivalent, then their split-closed derived categories are equivalent.

**How the definition helps.** Both split-closed derived categories are the envelope of the same generating subcategory, and this envelope is unique up to equivalence (our own). So generators decide everything; for example, a longitude and a meridian split-generate the Fukaya category of the 2-torus. Homological mirror symmetry is stated for these categories, so many proofs compare the A∞ algebras of finitely many generators (our own).

**Wikipedia:** [Homological mirror symmetry](https://en.wikipedia.org/wiki/Homological_mirror_symmetry). It says: “could be explained as an equivalence of a triangulated category constructed from the algebraic geometry of X (the derived category of coherent sheaves on X) and another triangulated category constructed from the symplectic geometry of Y (the derived Fukaya category).”

**Paper or page:** [Towards Homological Mirror Symmetry](https://arxiv.org/abs/2108.03931v2), [Towards Homological Mirror Symmetry](https://arxiv.org/abs/2108.03931v2). It says: “Let 𝒜 and ℬ be c-unital A∞-categories split-generated by full A∞-subcategories 𝒜̃ ⊂ 𝒜 respectively ℬ̃ ⊂ ℬ which are quasi-equivalent. Then D<sup>π</sup>(𝒜) and D<sup>π</sup>(ℬ) are equivalent split-closed triangulated categories.”

**Sources:**

- [P. Seidel, Fukaya Categories and Picard–Lefschetz Theory, Zurich Lectures in Advanced Mathematics, EMS, 2008](https://doi.org/10.4171/063)

### Broken cylinders compactify moduli spaces, so Floer's differential squares to zero

**Remember:** The boundary of a family of cylinders is a broken cylinder.

*Makes the theorem clean to state or prove.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 57R58. arXiv math.SG. Level 3: graduate.

**Definition.** A broken Floer trajectory is a chain of Floer cylinders, each ending at the orbit where the next one starts. Take the cylinders whose end orbits differ by 2 in index, and divide by translation along ℝ. This one-dimensional space is compactified by adding the once-broken trajectories as boundary points.

**Problem.** On a semipositive manifold, where sphere bubbles cannot spoil the counts, the Floer differential mod 2 satisfies ∂∘∂ = 0. So Floer homology is defined.

**How the definition helps.** The broken pairs counted by ∂∂x are the boundary points of compact one-dimensional spaces, so mod 2 their number is zero (our own). The work goes into gluing and Gromov compactness, which say that limits of Floer cylinders are broken trajectories, possibly with sphere bubbles (our own). Semipositivity keeps sphere bubbles out of these one-dimensional spaces (our own).

**Wikipedia:** [Floer homology](https://en.wikipedia.org/wiki/Floer_homology). It says: “The Gromov compactness theorem is then used to show that the counts of flow lines defining the differential are finite, so that the differential is well-defined and squares to zero.”

**Sources:**

- [A. Floer, Symplectic fixed points and holomorphic spheres, Comm. Math. Phys. 120 (1989) 575–611](https://doi.org/10.1007/BF01260388)

### Capping loops by disks makes the action single-valued and grades Floer homology

**Remember:** A cap on each loop fixes its area and its index.

*True by definition. Confidence: medium.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 57R58. arXiv math.SG. Level 3: graduate.

**Definition.** A capped orbit is a contractible periodic orbit together with a disk that it bounds, called a cap. On capped orbits the action is a real number. The Conley–Zehnder index, an integer that measures how the linearised flow winds along the orbit, gives a grading.

**Problem.** Changing the cap by a sphere A shifts the action by ω(A), up to sign, and the index by 2c₁(A). So without caps the grading is defined only modulo 2N, where N is the smallest positive value of c₁ on spheres.

**How the definition helps.** Gluing a sphere A onto a cap adds ω(A) to the disk area, so the action shift holds by definition, up to sign (our own). Without caps, the rival choice, the action of a loop is defined only up to sphere areas, so it is not a function (our own). The work moves into the index's loop property, which gives the shift 2c₁(A), and into a Novikov ring of sphere classes (our own).

**Wikipedia:** [Floer homology](https://en.wikipedia.org/wiki/Floer_homology). It says: “If the symplectomorphism is Hamiltonian, the homology arises from studying the symplectic action functional on the (universal cover of the) free loop space of a symplectic manifold.”

**Sources:**

- [H. Hofer and D. Salamon, Floer homology and Novikov rings, in The Floer Memorial Volume, Birkhäuser (1995) 483–524](https://doi.org/10.1007/978-3-0348-9217-9_20)

### Counting connecting cylinders replaces the ill-posed gradient flow of the action

**Remember:** Count cylinders between orbits instead of flowing the loop space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 57R58. arXiv math.SG. Level 3: graduate.

**Definition.** A Floer cylinder is a map from ℝ × S¹ to M that solves a Cauchy–Riemann equation perturbed by the Hamiltonian vector field. The equation uses an almost complex structure, which is a complex structure on each tangent space compatible with ω. Formally a Floer cylinder is a downward gradient line of the action that converges to periodic orbits at both ends.

**Problem.** For a generic almost complex structure, the Floer cylinders between two nondegenerate orbits form a finite-dimensional manifold. The energy of each cylinder equals the action difference of its two ends.

**How the definition helps.** The connecting-cylinder equation is elliptic, unlike the ill-posed gradient flow on loops, so its solution spaces are finite-dimensional (our own). The energy is the integral of the squared gradient along the cylinder, so it equals the total drop in action (our own). The remaining work is transversality, which needs the generic almost complex structure (our own).

**Wikipedia:** [Floer homology](https://en.wikipedia.org/wiki/Floer_homology). It says: “the gradient flow equation for a path in the loopspace is (a perturbed version of) the Cauchy–Riemann equation for a map of a cylinder (the total space of the path of loops) to the symplectic manifold of interest”

**Sources:**

- [A. Floer, The unregularized gradient flow of the symplectic action, Comm. Pure Appl. Math. 41 (1988) 775–813](https://doi.org/10.1002/cpa.3160410603)

### Defining the action on loops makes periodic orbits its critical points

**Remember:** Periodic orbits are the stationary points of one function on loops.

*Makes the theorem clean to state or prove.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 37J46, 58E05. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** The action functional of a Hamiltonian H is a function on contractible loops in M, each with a chosen disk that it bounds. Its value is minus the symplectic area of the disk minus the time integral of H along the loop, up to sign conventions. Its derivative vanishes exactly at loops that solve Hamilton's equation with period 1.

**Problem.** The contractible 1-periodic orbits of a Hamiltonian flow are exactly the critical points of the action functional. So counting fixed points of the time-1 map becomes counting critical points, as in Morse theory.

**How the definition helps.** The first variation of the action vanishes in every direction exactly when the loop's velocity equals the Hamiltonian vector field (our own). Conley and Zehnder used the same functional on the torus, but first reduced it to finite dimensions (our own). The work now goes into a Morse theory for critical points with infinitely many downward and upward directions, which is Floer homology (our own).

**Wikipedia:** [Spectral invariants](https://en.wikipedia.org/wiki/Spectral_invariants). It says: “so that the fixed points of the Hamiltonian diffeomorphism correspond to the critical points of the action functional.”

**Sources:**

- [A. Floer, Symplectic fixed points and holomorphic spheres, Comm. Math. Phys. 120 (1989) 575–611](https://doi.org/10.1007/BF01260388)
- [C. C. Conley and E. Zehnder, The Birkhoff–Lewis fixed point theorem and a conjecture of V. I. Arnol'd, Invent. Math. 73 (1983) 33–49](https://doi.org/10.1007/BF01393824)

### Defining the spectral norm from spectral invariants bounds it by Hofer's norm

**Remember:** Two spectral invariants, one of the map and one of its inverse.

*True by definition.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D35. arXiv math.SG. Level 3: graduate.

**Definition.** The spectral norm of φ is the infimum of c(\[M\], H) + c(\[M\], H̄) over Hamiltonians H that generate φ. Here c(\[M\], ·) is the spectral invariant of the fundamental class, and H̄ generates the inverse flow. The Hofer norm of φ is the infimum over the same H of the time integral of max H − min H.

**Problem.** Every Hamiltonian diffeomorphism φ has spectral norm at most its Hofer norm. So any lower bound for the spectral norm is a lower bound for Hofer's distance.

**How the definition helps.** Comparing with the zero Hamiltonian, the Lipschitz property gives c(\[M\], H) ≤ ∫ max H and c(\[M\], H̄) ≤ −∫ min H (our own). The rival c(\[M\], H) alone is not symmetric under inverses, while pairing H with H̄ makes the bounds sum to Hofer's length (our own). The work went into the Lipschitz property, an energy estimate for continuation maps, and into proving that the spectral norm is nondegenerate (our own).

**Paper or page:** [Hamiltonian Floer theory on surfaces](https://arxiv.org/abs/2102.11231). It says: “Moreover, for all φ ∈ Ham(M,ω), νOS(φ) ≤ νim(φ) ≤ ‖φ‖Hof, where νOS denotes the Oh-Schwarz spectral norm and ‖·‖Hof denotes the Hofer norm.”

**Sources:**

- [Y.-G. Oh, Construction of spectral invariants of Hamiltonian paths on closed symplectic manifolds, in The Breadth of Symplectic and Poisson Geometry, Progr. Math. 232, Birkhäuser (2005) 525–570](https://doi.org/10.1007/0-8176-4419-9_18)
- [M. Schwarz, On the action spectrum for closed symplectically aspherical manifolds, Pacific J. Math. 193 (2000) 419–461](https://doi.org/10.2140/pjm.2000.193.419)

### Forbidding disks of nonzero area excludes the displaceable circle

**Remember:** No area on disks means no disks to bubble off.

*Rules out counterexamples.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D12. arXiv math.SG. Level 3: graduate.

**Definition.** A Lagrangian L is symplectically aspherical when ω has zero integral over every disk in M with boundary on L. Then every holomorphic disk on L has zero energy, so it is constant and cannot bubble off.

**Problem.** For a closed aspherical Lagrangian L, HF(L,L) ≅ H(L), so each transverse Hamiltonian image meets L in at least Σ dim H(L; ℤ₂) points. In particular ℂⁿ contains no closed exact Lagrangian, a theorem of Gromov.

**How the definition helps.** With no disk bubbles, a C¹-small Hamiltonian turns Floer strips into gradient lines of a function on L, so HF(L,L) is Morse cohomology (our own). This excludes the round circle in ℂ, which has H(S¹) ≠ 0 yet is displaceable, because it bounds a disk of positive area (our own). A closed exact L in ℂⁿ is aspherical and displaced by a translation, so H(L) = HF(L,L) = 0, which is impossible (our own).

**Paper or page:** [Towards Homological Mirror Symmetry](https://arxiv.org/abs/2108.03931), [Lagrangian intersections and cuplength in generalised cohomology theories](https://arxiv.org/abs/2211.07559). It says: “Let (M²ⁿ,ω) be a symplectic manifold, Lⁿ ⊂ M a Lagrangian submanifold such that ⟨ω⟩ · π₂(M,L) = 0. Then HF(L,L) ≅ H(L;Λ<sub>K</sub>) (singular cohomology with coefficients in the Novikov field).”

**Sources:**

- [A. Floer, Morse theory for Lagrangian intersections, J. Differential Geom. 28 (1988) 513–547](https://doi.org/10.4310/jdg/1214442477)
- [M. Gromov, Pseudo holomorphic curves in symplectic manifolds, Invent. Math. 82 (1985) 307–347](https://doi.org/10.1007/BF01388806)

### Graphs and the diagonal make Hamiltonian Floer theory a Lagrangian case

**Remember:** A fixed point is where a graph crosses the diagonal.

*True by definition.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D12. arXiv math.SG. Level 3: graduate.

**Definition.** In M × M with the form (−ω) ⊕ ω, the graph Γ of a symplectomorphism φ is Lagrangian. So is the diagonal Δ. Their intersection points are the pairs (x, x) with φ(x) = x.

**Problem.** The Floer cohomology of a Hamiltonian diffeomorphism φ of M is isomorphic to the Lagrangian Floer cohomology HF(Δ, Γ) in M × M. So bounds on fixed points become bounds on Lagrangian intersections.

**How the definition helps.** The generators match by definition, since Δ ∩ Γ is the fixed point set of φ (our own). A strip in M × M with edges on Δ and Γ unfolds into a wider strip in M with edges glued by φ (our own). These are Floer's original twisted cylinders, so the work moves into matching the two moduli spaces (our own).

**Wikipedia:** [Floer homology](https://en.wikipedia.org/wiki/Floer_homology). It says: “can be thought of as a case of Lagrangian Floer homology in which the ambient manifold is M crossed with M and the Lagrangian submanifolds are the diagonal and the graph of the symplectomorphism.”

**Sources:**

- [A. Floer, Symplectic fixed points and holomorphic spheres, Comm. Math. Phys. 120 (1989) 575–611](https://doi.org/10.1007/BF01260388)

### Intersection-point generators make Floer cohomology of displaceable Lagrangians vanish

**Remember:** No intersection points, no generators, no Floer cohomology.

*True by definition.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D12. arXiv math.SG. Level 3: graduate.

**Definition.** Lagrangian Floer cohomology HF(L₀,L₁) is the homology of a complex generated by the intersection points of L₀ and L₁. Its differential counts holomorphic strips, maps of ℝ × \[0,1\] with one edge on each Lagrangian. It does not change when either Lagrangian moves by a Hamiltonian isotopy.

**Problem.** If an unobstructed Lagrangian L, one whose Floer differential squares to zero, has HF(L,L) ≠ 0, no Hamiltonian diffeomorphism displaces L. When φ(L) meets L transversally, they meet in at least rank HF(L,L) points.

**How the definition helps.** If φ(L) misses L, the complex CF(L, φ(L)) has no generators, so HF(L, φ(L)) = 0 and invariance gives HF(L,L) = 0 (our own). The count bound holds because a complex has at least as many generators as its homology has rank (our own). Generating functions prove such bounds only in special cases such as cotangent bundles; here the work moves into Hamiltonian invariance, proved by continuation maps (our own).

**Wikipedia:** [Floer homology](https://en.wikipedia.org/wiki/Floer_homology). It says: “The Floer homology of a pair of Lagrangian submanifolds may not always exist; when it does, it provides an obstruction to isotoping one Lagrangian away from the other using a Hamiltonian isotopy.”

**Paper or page:** [Lagrangian Floer theory on compact toric manifolds I](https://arxiv.org/abs/0802.1703). It says: “Let ψ : X → X be a Hamiltonian diffeomorphism such that ψ(L) is transversal to L′. Then we have \#(ψ(L) ∩ L′) ≥ rank\_Λnov HF((L,b),(L′,b′);Λnov).”

**Sources:**

- [A. Floer, Morse theory for Lagrangian intersections, J. Differential Geom. 28 (1988) 513–547](https://doi.org/10.4310/jdg/1214442477)
- [K. Fukaya, Y.-G. Oh, H. Ohta, K. Ono, Lagrangian Intersection Floer Theory: Anomaly and Obstruction, AMS/IP Studies in Advanced Mathematics 46 (2009)](https://doi.org/10.1090/amsip/046.1)

### Nondegeneracy excludes torus maps with fewer fixed points than Betti numbers

**Remember:** Transverse to the diagonal, every fixed point counts as one.

*Rules out counterexamples.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 37J11, 37C25. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** A Hamiltonian diffeomorphism φ is nondegenerate when its graph meets the diagonal of M × M transversely. Equivalently, 1 is not an eigenvalue of the derivative of φ at any fixed point. Then the fixed points are isolated and finite in number.

**Problem.** On the torus T²ⁿ, a nondegenerate Hamiltonian diffeomorphism has at least 2²ⁿ fixed points, the total rank of homology. Without nondegeneracy the bound is only 2n + 1, one plus the cup-length, the largest number of positive-degree classes with nonzero cup product.

**How the definition helps.** Nondegeneracy makes each fixed point a nondegenerate critical point of the action, so a Morse-type count reaches the sum of Betti numbers (our own). The time-1 map of a small multiple of a function on T² with exactly three critical points has only three fixed points (our own). For degenerate maps Conley and Zehnder proved only the bound 2n + 1.

**Wikipedia:** [Conley–Zehnder theorem](https://en.wikipedia.org/wiki/Conley%E2%80%93Zehnder_theorem), [Arnold conjecture](https://en.wikipedia.org/wiki/Arnold_conjecture). It says: “it can be strengthen to the rank of the homology of the torus (which is 2²ⁿ) provided all the fixed points are non-degenerate, this latter condition being generic in the C¹-topology.”

**Sources:**

- [C. C. Conley and E. Zehnder, The Birkhoff–Lewis fixed point theorem and a conjecture of V. I. Arnol'd, Invent. Math. 73 (1983) 33–49](https://doi.org/10.1007/BF01393824)

### Normalizing Hamiltonians removes the constant shift from spectral invariants

**Remember:** Fix the free constant, and the invariant belongs to the flow.

*Rules out counterexamples.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 37J11. arXiv math.SG. Level 3: graduate.

**Definition.** A Hamiltonian H is normalized when its integral over M is zero at every time. Adding a function of time λ(t) to H keeps its flow, so each Hamiltonian isotopy has exactly one normalized generator. The spectral invariant c(A, H) is the action level at which a class A first appears in filtered Floer homology.

**Problem.** For normalized Hamiltonians, c(A, H) depends only on the homotopy class, with fixed end points, of the isotopy that H generates. That is, c is a function on the universal cover of Ham(M), the group of Hamiltonian diffeomorphisms.

**How the definition helps.** Adding λ(t) keeps the flow but shifts c by ∫λ, so without normalization c is not a function of the isotopy (our own). Normalization removes this counterexample by fixing the free constant (our own). The remaining work is the theorem of Schwarz and Oh that homotopic normalized isotopies have the same action spectrum, plus a continuity argument (our own).

**Paper or page:** [Spectral diameter of negatively monotone manifolds](https://arxiv.org/abs/2410.21416). It says: “(Homotopy invariance) c(A, H₁) = c(A, H₂) for any two normalized Hamiltonian functions generating the same element in H̃am(M).”

**Sources:**

- [M. Schwarz, On the action spectrum for closed symplectically aspherical manifolds, Pacific J. Math. 193 (2000) 419–461](https://doi.org/10.2140/pjm.2000.193.419)
- [Y.-G. Oh, Construction of spectral invariants of Hamiltonian paths on closed symplectic manifolds, in The Breadth of Symplectic and Poisson Geometry, Progr. Math. 232, Birkhäuser (2005) 525–570](https://doi.org/10.1007/0-8176-4419-9_18)

### Requiring Hamiltonian isotopy excludes the translated circle on the cylinder

**Remember:** Hamiltonian motion sweeps no net area across any loop.

*Rules out counterexamples. Confidence: medium.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D12. arXiv math.SG. Level 3: graduate.

**Definition.** A Hamiltonian isotopy is the flow of a time-dependent function through Hamilton's equations. The flux of a symplectic isotopy is a class in H¹(M; ℝ) that measures the area swept by loops. A symplectic isotopy deforms, with fixed ends, to a Hamiltonian one exactly when its flux is zero.

**Problem.** Lagrangian Floer cohomology is invariant under Hamiltonian isotopy of either Lagrangian, but not under all symplectic isotopies. On the cylinder T\*S¹ = S¹ × ℝ, the zero circle has HF ≅ H(S¹) ≠ 0, yet a symplectic translation moves it off itself.

**How the definition helps.** The invariance proof bounds the energy of continuation strips by the Hamiltonian function, and a motion with nonzero flux has no such function (our own). The translation (q, p) ↦ (q, p + c) displaces the zero circle, but its flux is c times a generator (our own). So it is not Hamiltonian, and the circle stays nondisplaceable by Hamiltonian maps, as its Floer cohomology says (our own).

**Wikipedia:** [Floer homology](https://en.wikipedia.org/wiki/Floer_homology). It says: “The Floer homology of a pair of Lagrangian submanifolds may not always exist; when it does, it provides an obstruction to isotoping one Lagrangian away from the other using a Hamiltonian isotopy.”

**Sources:**

- [A. Floer, Morse theory for Lagrangian intersections, J. Differential Geom. 28 (1988) 513–547](https://doi.org/10.4310/jdg/1214442477)

### Semipositivity keeps bad sphere bubbles out of Floer moduli spaces

**Remember:** No positive-area spheres with slightly negative Chern number allowed.

*Rules out counterexamples. Confidence: medium.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D45. arXiv math.SG. Level 3: graduate.

**Definition.** A closed 2n-dimensional symplectic manifold is semipositive when no sphere class A has ω(A) &gt; 0 and 3 − n ≤ c₁(A) &lt; 0. Here c₁ is the first Chern class of the tangent bundle. Monotone manifolds, where ω and c₁ are positively proportional on spheres, and all manifolds of dimension at most 6 are semipositive.

**Problem.** On a closed semipositive manifold, Floer homology can be built by directly counting Floer cylinders, which solve a perturbed Cauchy–Riemann equation. It equals homology over a Novikov ring of sphere classes, so a nondegenerate H has at least as many 1-periodic orbits as the Betti sum.

**How the definition helps.** Semipositivity rules out holomorphic spheres of negative Chern number that could bubble off in the low-dimensional families used to define the differential (our own). Such spheres and their multiple covers cannot be made regular by any choice of almost complex structure, and they break the classical construction (our own). On general closed manifolds, Fukaya and Ono proved the rational bound with virtual counting techniques (our own).

**Wikipedia:** [Floer homology](https://en.wikipedia.org/wiki/Floer_homology). It says: “The Floer cohomology groups of the loop space of a semi-positive symplectic manifold (M,ω) are naturally isomorphic to the ordinary cohomology of M, tensored by a suitable Novikov ring associated the group of covering transformations.”

**Sources:**

- [H. Hofer and D. Salamon, Floer homology and Novikov rings, in The Floer Memorial Volume, Birkhäuser (1995) 483–524](https://doi.org/10.1007/978-3-0348-9217-9_20)
- [K. Ono, On the Arnold conjecture for weakly monotone symplectic manifolds, Invent. Math. 119 (1995) 519–537](https://doi.org/10.1007/BF01245191)
- [A. Floer, Symplectic fixed points and holomorphic spheres, Comm. Math. Phys. 120 (1989) 575–611](https://doi.org/10.1007/BF01260388)

### Expanding Liouville flows bound Weinstein handle indices by half

**Remember:** A flow that inflates ω must crush it on what it contracts.

*True by definition.* MSC 53D42 (Symplectic field theory; contact homology), 57R17. arXiv math.SG, math.GT. Level 3: graduate.

**Definition.** A Weinstein domain is a compact symplectic manifold with a Liouville vector field X, whose time-t flow multiplies the symplectic form ω by eᵗ. The field X is gradient-like for a Morse function Ψ. So the flow expands ω while it climbs Ψ.

**Problem.** Every critical point of Ψ on a 2n-dimensional Weinstein domain has Morse index at most n. So the domain has handles of index at most n only, and its core is an isotropic complex of dimension at most n.

**How the definition helps.** On a stable manifold the flow shrinks vectors but scales ω by eᵗ, so ω vanishes there (our own). So the stable manifold is isotropic, and its dimension, the Morse index, is at most n (our own). For Stein manifolds, closed complex submanifolds of ℂᴺ, the usual proof needs a plurisubharmonic function, one subharmonic on complex lines (our own).

**Paper or page:** [Tight Contact Structures on Contact Mapping Tori and their Folded Sums](https://arxiv.org/abs/2312.05823). It says: “Any Weinstein domain (Σ,ω,X,Ψ) of dimension 2n admits a (Weinstein) handle decomposition whose handles have indices at most n, and so, its core Core(Σ,ω,X,Ψ) is a compact isotropic subcomplex of (Σ,ω) of dimension n.”

**Sources:**

- [K. Cieliebak and Y. Eliashberg, From Stein to Weinstein and Back, AMS Colloquium Publications 59 (2012)](https://doi.org/10.1090/coll/059)

### Giving eᴬ degree 2c₁(A) makes the quantum product preserve degree

**Remember:** Each curve class pays its Chern number in degree.

*True by definition.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds), 14N35. arXiv math.SG, math.AG. Level 3: graduate.

**Definition.** In the Novikov ring, the formal variable eᴬ of a class A in H₂(X) gets degree 2c₁(A). Here c₁(A) is the first Chern number of the tangent bundle on A.

**Problem.** The small quantum product is homogeneous: deg(a∗b) = deg a + deg b for classes a, b of pure degree.

**How the definition helps.** Each coefficient (a∗b)(A) has degree deg a + deg b − 2c₁(A), and eᴬ of degree 2c₁(A) restores exactly the missing degree (our own). If eᴬ had degree zero, the product would mix degrees, since ℓ∗ℓ² = q in the projective plane (our own). The work went into the dimension formula for three-point invariants, which comes from the Riemann–Roch theorem (our own).

**Wikipedia:** [Quantum cohomology](https://en.wikipedia.org/wiki/Quantum_cohomology). It says: “The variable eᴬ is considered to be of degree 2∫<sub>A</sub> c₁(TX), where c₁ is the first Chern class of the tangent bundle TX”

**Sources:**

- [Y. Ruan and G. Tian, A mathematical theory of quantum cohomology, J. Differential Geom. 42 (1995) 259–367](https://doi.org/10.4310/jdg/1214457234)

### Monotonicity makes the quantum product a finite polynomial sum

**Remember:** In a monotone manifold, degree controls area.

*Rules out counterexamples. Confidence: medium.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds). arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic manifold is monotone when ω(A) = λc₁(A) for every sphere class A, with one constant λ &gt; 0. So the area of a sphere is fixed by its first Chern number.

**Problem.** For a closed monotone symplectic manifold, each quantum product a∗b is a finite sum, so quantum cohomology is defined over a polynomial ring Z\[q\]. For example, the quantum cohomology of the projective plane is Z\[ℓ, q\]/(ℓ³ = q).

**How the definition helps.** Degree counting bounds c₁(A) for every class A that contributes to a∗b, and monotonicity turns this into a bound on the area ω(A) (our own). Gromov compactness then leaves only finitely many classes, and q of degree twice the minimal Chern number records them (our own). Without monotonicity the quintic threefold has infinitely many contributing classes, so a power series is needed (our own).

**Wikipedia:** [Quantum cohomology](https://en.wikipedia.org/wiki/Quantum_cohomology). It says: “In this case it is convenient to rename eᴸ as q and use the simpler coefficient ring Z\[q\]. This q is of degree 6 = 2 c₁(L).”

**Sources:**

- [Y. Ruan and G. Tian, A mathematical theory of quantum cohomology, J. Differential Geom. 42 (1995) 259–367](https://doi.org/10.4310/jdg/1214457234)

### Semipositivity excludes negative multiple covers, so Gromov–Witten pseudocycles exist

**Remember:** No sphere of small negative Chern number may carry positive area.

*Rules out counterexamples.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds), 32Q65. arXiv math.SG. Level 3: graduate.

**Definition.** A closed symplectic 2n-manifold is semipositive when no sphere class A has ω(A) &gt; 0 and 3 − n ≤ c₁(A) &lt; 0. Monotone manifolds and all manifolds of dimension at most six are semipositive.

**Problem.** For semipositive X and generic J, evaluation on simple J-spheres with marked points is a pseudocycle, a map whose limit set has codimension two. Simple means not multiply covered, and the result makes genus-zero invariants integer counts without virtual techniques.

**How the definition helps.** For generic J no simple sphere has c₁ &lt; 3 − n, so semipositivity forces c₁ ≥ 0 on every J-sphere (our own). Then replacing a multiple cover by its simple image never raises dimension, and the boundary has codimension two (our own). Excluded is a multiply covered bubble of negative Chern number, whose moduli space can be too large for every J (our own).

**Wikipedia:** [Stable map](https://en.wikipedia.org/wiki/Stable_map). It says: “When X is semipositive, M<sub>g</sub>,n(J, ν, β) has a natural compactification, called the Gromov-Uhlenbeck compactification.”

**Sources:**

- [Y. Ruan and G. Tian, A mathematical theory of quantum cohomology, J. Differential Geom. 42 (1995) 259–367](https://doi.org/10.4310/jdg/1214457234)

### Tame almost complex structures make Gromov–Witten invariants deformation invariants

**Remember:** Use any tame J; all of them lie in one contractible family.

*Makes the theorem clean to state or prove.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds), 32Q65. arXiv math.SG. Level 3: graduate.

**Definition.** Gromov–Witten invariants are defined with an almost complex structure J that is ω-tame, meaning ω(v, Jv) &gt; 0 for every nonzero tangent vector v. J need not be integrable, and the set of such J is nonempty and contractible.

**Problem.** Gromov–Witten invariants of a closed symplectic manifold do not depend on the choice of J. They depend only on the deformation class of the symplectic form.

**How the definition helps.** Two tame structures are joined by a path of tame ones, and the moduli spaces over a generic path form a cobordism (our own). A deformation of ω works the same way, because tameness is an open condition (our own). Integrable structures would not do this, since some symplectic manifolds, such as the Kodaira–Thurston manifold, carry no Kähler structure (our own).

**Wikipedia:** [Pseudoholomorphic curve](https://en.wikipedia.org/wiki/Pseudoholomorphic_curve), [Gromov–Witten invariant](https://en.wikipedia.org/wiki/Gromov%E2%80%93Witten_invariant). It says: “Gromov showed that, for a given ω, the space of ω-tame J is nonempty and contractible.”

**Sources:**

- [M. Gromov, Pseudo holomorphic curves in symplectic manifolds, Invent. Math. 82 (1985) 307–347](https://doi.org/10.1007/BF01388806)
- [Y. Ruan and G. Tian, A mathematical theory of quantum cohomology, J. Differential Geom. 42 (1995) 259–367](https://doi.org/10.4310/jdg/1214457234)

### The Novikov finiteness condition makes the quantum product well defined

**Remember:** Allow infinitely many curve classes, but only finitely many below each energy.

*Makes the theorem clean to state or prove.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds), 14N35. arXiv math.SG, math.AG. Level 3: graduate.

**Definition.** The Novikov ring of a closed symplectic manifold X, with symplectic form ω, consists of formal sums Σ λ(A)eᴬ over classes A in H₂(X). For every real number C, only finitely many classes A with ω(A) ≤ C may have a nonzero coefficient λ(A).

**Problem.** The quantum product a∗b = Σ (a∗b)(A) eᴬ, summed over all classes A, is a well-defined element of cohomology with Novikov coefficients. This holds even when infinitely many classes A contribute, as for the quintic threefold.

**How the definition helps.** Gromov compactness gives exactly this finiteness: below each area C, only finitely many classes contain J-holomorphic spheres (our own). So only finitely many terms of a∗b have area at most C, and the sum is an element of the Novikov ring (our own). A polynomial ring would fail, since the quintic threefold has rational curves in every degree (our own).

**Wikipedia:** [Quantum cohomology](https://en.wikipedia.org/wiki/Quantum_cohomology). It says: “for every real number C, only finitely many A with ω(A) less than or equal to C have nonzero coefficients λ<sub>A</sub>.”

**Sources:**

- [M. Gromov, Pseudo holomorphic curves in symplectic manifolds, Invent. Math. 82 (1985) 307–347](https://doi.org/10.1007/BF01388806)
- [Y. Ruan and G. Tian, A mathematical theory of quantum cohomology, J. Differential Geom. 42 (1995) 259–367](https://doi.org/10.4310/jdg/1214457234)

### Zero area recovers cup multiplication

**Remember:** Discard positive area to recover the cup product.

*True by definition.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds), 14N35. arXiv math.SG. Level 3: graduate.

**Definition.** On a closed symplectic manifold, over rational Novikov series in T with nonnegative exponents, the small quantum product satisfies ⟨a ⋆ b, c⟩ = ∑ GW<sub>A</sub>(a,b,c) T<sup>ω</sup>(A), summing genus-zero three-point invariants over curve classes A. Only constant curves have zero area, so the T⁰ term is the ordinary cup product (our own).

**Problem.** For a closed symplectic manifold, quotienting its small quantum cohomology ring by all series with zero constant term recovers its rational cohomology ring.

**How the definition helps.** Setting the positive powers of T to zero keeps only constant curves (our own). A constant curve meets the three classes at one point, so its count is ∫ a ∪ b ∪ c, the cup product paired with c (our own). Associativity of the full product needs a separate theorem (our own).

**Wikipedia:** [Quantum cohomology](https://en.wikipedia.org/wiki/Quantum_cohomology). It says: “The only pseudoholomorphic curves in class A = 0 are constant maps, whose images are points.”

**Sources:** none listed. No primary source with a working link was found.

### A Kähler polarization makes the Heisenberg representation irreducible

**Remember:** Holomorphy halves the variables, from phase space to configuration space.

*Rules out counterexamples.* MSC 53D50 (Geometric quantization), 81S10, 81R30. arXiv math-ph, math.SG. Level 3: graduate.

**Definition.** The Kähler polarization of ℂⁿ keeps only the holomorphic prequantum states. Its quantum space is the Segal–Bargmann space of holomorphic functions that are square-integrable against a Gaussian weight.

**Problem.** The position and momentum operators act irreducibly on the Segal–Bargmann space, so it is unitarily equivalent to L²(ℝⁿ) by the Stone–von Neumann theorem. On the prequantum space L²(ℝ²ⁿ) the same commutation relations act reducibly (our own).

**How the definition helps.** Holomorphy leaves only the constants killed by every lowering operator ∂/∂zⱼ, so a commuting operator maps 1 to a constant (our own). If it also commutes with every zⱼ, it is a scalar on all polynomials, which are dense, so the representation is irreducible (our own). The removed counterexample is the prequantum space L²(ℝ²ⁿ), a sum of infinitely many copies of the Schrödinger representation (our own).

**Wikipedia:** [Segal–Bargmann space](https://en.wikipedia.org/wiki/Segal%E2%80%93Bargmann_space). It says: “Since the operators Aj and Bj from the previous section satisfy the Weyl relations and act irreducibly on the Segal–Bargmann space, the Stone–von Neumann theorem applies.”

**Sources:**

- [V. Bargmann, On a Hilbert space of analytic functions and an associated integral transform, Part I, Communications on Pure and Applied Mathematics 14 (1961), 187–214](https://doi.org/10.1002/cpa.3160140303)

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

### Bohr–Sommerfeld leaves turn the old quantum rule into trivial holonomy

**Remember:** A Bohr–Sommerfeld leaf is where the prequantum phase closes up.

*True by definition. Confidence: medium.* MSC 53D50 (Geometric quantization), 53D12, 37J35. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** A Bohr–Sommerfeld leaf is a Lagrangian submanifold on which the prequantum connection has trivial holonomy. On a Lagrangian submanifold this connection is flat, so its holonomy is its only invariant.

**Problem.** Take the standard model ℝⁿ × Tⁿ of a Lagrangian torus fibration, with action–angle coordinates (x, y), and the N-th power of the prequantum bundle. Its Bohr–Sommerfeld fibres lie over the points x in (1/N)ℤⁿ, the old rule that each action is a multiple of Planck's constant (our own).

**How the definition helps.** On a Lagrangian torus the holonomy around the i-th circle is exp(2πiNxᵢ), so trivial holonomy is the old rule written without coordinates (our own). The old rule asks that each action integral of p dq be a multiple of Planck's constant, here 1/N, and it needs coordinates (our own). The work went into the Arnold–Liouville theorem, which gives the action–angle coordinates (our own).

**nLab:** [Bohr-Sommerfeld leaf](https://ncatlab.org/nlab/show/Bohr-Sommerfeld+leaf). It says: “Therefore given a real polarization of (X,ω), hence a foliation by Lagrangian submanifolds, the Bohr-Sommerfeld leaves form a discrete subset of the leaf space.”

**Paper or page:** [Adiabatic Limit, Theta Function, and Geometric Quantization](https://arxiv.org/abs/1904.04076). It says: “x ∈ ℝⁿ is a Bohr-Sommerfeld if and only if x lies in (1/N)ℤⁿ”

**Sources:**

- [T. Yoshida, Adiabatic limit, theta function, and geometric quantization, SIGMA 20 (2024), 065](https://doi.org/10.3842/SIGMA.2024.065)

### Defining metaplectic operators by intertwining makes them a circle extension

**Remember:** A metaplectic operator turns W into W twisted by g.

*True by definition.* MSC 53D50 (Geometric quantization), 81S10, 22E46. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** Let W be the irreducible unitary representation of the Heisenberg group of a symplectic vector space V. This group is made of phase-space translations together with phases. A metaplectic operator for a linear symplectic map g is a unitary U with U W(v) U⁻¹ = W(gv) for all v.

**Problem.** Metaplectic operators for g and h compose to one for gh, and two of them for the same g differ only by a phase. So they form a group, Mpᶜ, which extends the symplectic group by the circle.

**How the definition helps.** Composition follows from the defining identity, and the phase claim is Schur's lemma, since W is irreducible (our own). The usual alternative writes the operators by explicit integral kernels, and then the group law needs Gaussian-integral computations (our own). The real work is existence for every g, which the Stone–von Neumann theorem gives (our own).

**nLab:** [metaplectic representation](https://ncatlab.org/nlab/show/metaplectic+representation). It says: “there is a unique (up to multiplication by a constant of modulus one) unitary operator U<sub>g</sub> such that for all v ∈ V W(g(v)) = U<sub>g</sub> W(v) U⁻¹<sub>g</sub>”

**Sources:**

- [A. Weil, Sur certains groupes d'opérateurs unitaires, Acta Mathematica 111 (1964), 143–211](https://doi.org/10.1007/BF02391012)
- [G. B. Folland, Harmonic Analysis in Phase Space, Annals of Mathematics Studies 122, Princeton University Press, 1989](https://doi.org/10.1515/9781400882427)

### Half-forms give real polarizations a nonzero Hilbert space

**Remember:** Integrate states over the leaf space, not over phase space.

*Rules out counterexamples.* MSC 53D50 (Geometric quantization), 81S10. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** A real polarization is a foliation of phase space by Lagrangian leaves, such as the vertical lines x = constant in the plane. A half-form state is a section that is covariantly constant along the leaves, times a half-form on the leaf space, for example f(x)√dx. The product of two such states is a density on the leaf space, so it is integrated there.

**Problem.** With half-forms, the vertical polarization of the plane gives the quantum Hilbert space L²(ℝ) of states f(x)√dx. Without half-forms, the same polarization has no nonzero square-integrable states.

**How the definition helps.** The norm of a half-form state is an integral over x alone, so it is finite for f in L²(ℝ) (our own). Without half-forms a polarized section is a function f(x) that does not depend on p (our own). Its norm, the integral of \|f(x)\|² over the whole plane, is infinite unless f is zero, and half-forms remove this empty quantization (our own).

**nLab:** [metaplectic correction (in geometric quantization)](https://ncatlab.org/nlab/show/metaplectic+correction+%28in+geometric+quantization%29). It says: “In the context of geometric quantization a metaplectic correction is a choice of metaplectic structure on the given symplectic manifold. It allows to make the space of states into a Hilbert space.”

**Wikipedia:** [Geometric quantization](https://en.wikipedia.org/wiki/Geometric_quantization). It says: “The half-form correction—also known as the metaplectic correction—is a technical modification to the above procedure that is necessary in the case of real polarizations to obtain a nonzero quantum Hilbert space”

**Sources:**

- [B. C. Hall, Quantum Theory for Mathematicians, Graduate Texts in Mathematics 267, Springer, 2013](https://doi.org/10.1007/978-1-4614-7116-5)

### Half-forms give the quantum harmonic oscillator its ground-state energy

**Remember:** A square root of dz carries the missing half quantum.

*Rules out counterexamples.* MSC 53D50 (Geometric quantization), 81S10. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** A polarization picks half of the phase-space directions, and a quantum state must be constant along them. The half-form correction tensors the prequantum bundle by a square root of the polarization's canonical bundle, a bundle of n-forms on 2n-dimensional phase space. In the Kähler polarization of the plane this bundle is spanned by dz, and a quantum state becomes a holomorphic section times √dz.

**Problem.** With the half-form correction, the Kähler quantization of the harmonic oscillator with frequency ν has energy levels (n + ½)ħν. These are the levels that the Schrödinger equation gives.

**How the definition helps.** The oscillator's flow rotates the half-form √dz, and this rotation adds ħν/2 to every eigenvalue (our own). Without half-forms the same quantization gives the levels nħν, so the ground state wrongly has energy zero (our own). The correction removes this wrong ground state and changes nothing else in the method (our own).

**Wikipedia:** [Geometric quantization](https://en.wikipedia.org/wiki/Geometric_quantization). It says: “the half-form correction allows the quantization of the harmonic oscillator to reproduce the standard quantum mechanical formula for the energies, (n+1/2)ħω, with the "+1/2" coming courtesy of the half-forms.”

**Sources:**

- [B. C. Hall, Quantum Theory for Mathematicians, Graduate Texts in Mathematics 267, Springer, 2013](https://doi.org/10.1007/978-1-4614-7116-5)

### Holomorphic sections make the Borel–Weil representations visibly irreducible

**Remember:** Holomorphic sections are pinned down by one open orbit.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D50 (Geometric quantization), 22E46, 14M15. arXiv math.RT, math.SG. Level 3: graduate.

**Definition.** The Kähler quantization attached to an integral weight λ is the space of holomorphic sections of a line bundle L(λ) on the flag manifold G/B. For regular λ this manifold is the coadjoint orbit of λ. A highest-weight vector in it is a section fixed by the unipotent group N.

**Problem.** For a dominant integral weight λ, the holomorphic sections of L(λ) form the irreducible representation with highest weight λ. Every irreducible representation of the compact connected Lie group arises in this way, for exactly one λ.

**How the definition helps.** An N-fixed section is determined by its value at one point of the open N-orbit, so highest-weight vectors span at most one line (our own). The representation is completely reducible and each summand has a highest-weight vector, so there is only one summand (our own). The work went into the Bruhat decomposition, which gives the open orbit, and into finding a nonzero section for dominant λ (our own).

**Wikipedia:** [Borel–Weil–Bott theorem](https://en.wikipedia.org/wiki/Borel%E2%80%93Weil%E2%80%93Bott_theorem). It says: “The Borel–Weil theorem states that if λ is a dominant integral weight then this representation is a holomorphic irreducible highest weight representation of G with highest weight λ.”

**Sources:** none listed. No primary source with a working link was found.

### Integrality on the sphere makes spin come in half-integers

**Remember:** Each 2πħ of area on the sphere buys one more state.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D50 (Geometric quantization), 81S10, 22E46. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** The Kähler quantization of a symplectic sphere is the space of holomorphic sections of its prequantum line bundle. That bundle's curvature is the area form divided by ħ, so it exists only when the area is 2πħk for an integer k.

**Problem.** A sphere of area 2πħk, for a positive integer k, quantizes to the irreducible representation of SU(2) of dimension k + 1 (our own). So the possible spins are exactly the positive multiples k/2 of one half (our own).

**How the definition helps.** By Chern–Weil, the degree of the prequantum bundle is the area divided by 2πħ, and line bundles on the sphere have integer degrees (our own). The holomorphic sections of the degree-k bundle are the homogeneous polynomials of degree k in two variables (our own). These polynomials form the irreducible SU(2) representation of dimension k + 1 (our own).

**nLab:** [geometric quantization of the 2-sphere](https://ncatlab.org/nlab/show/geometric+quantization+of+the+2-sphere). It says: “More abstractly in mathematics, the 2-sphere is naturally identified with a coadjoint orbit of the special unitary Lie algebra/special unitary group 𝔰𝔲(2)/SU(2)”

**Wikipedia:** [Geometric quantization](https://en.wikipedia.org/wiki/Geometric_quantization). It says: “Assuming that the area of the sphere is an integer multiple of 2πħ, we can perform geometric quantization and the resulting Hilbert space carries an irreducible representation of SU(2).”

**Sources:**

- [B. Kostant, Quantization and unitary representations, Lectures in Modern Analysis and Applications III, Lecture Notes in Mathematics 170, Springer, 1970, 87–208](https://doi.org/10.1007/BFb0079068)

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

### Hyperkähler cones make 3-Sasakian manifolds Einstein

**Remember:** Put the geometry on the cone, and the link inherits it.

*True by definition.* MSC 53C25 (Special Riemannian manifolds (Einstein, Sasakian, etc.)), 53D10. arXiv math.DG, math.SG. Level 4: research.

**Definition.** A Riemannian manifold (M, g) is Sasakian when its metric cone (0, ∞) × M, with metric dr² + r²g, is Kähler. It is 3-Sasakian when the cone is hyperkähler, Kähler for three complex structures I, J, K with IJ = K.

**Problem.** Every 3-Sasakian manifold of dimension 4n + 3 is an Einstein manifold, with Ricci curvature (4n + 2)g.

**How the definition helps.** Hyperkähler metrics are Ricci-flat, and a cone over an m-manifold is Ricci-flat exactly when Ric(g) = (m − 1)g (our own). So the Einstein property is read off the definition, and the work sits in the curvature formula for cones (our own). The older definition, by identities among three contact metric tensors, needs a direct curvature computation instead (our own).

**nLab:** [Sasakian manifold](https://ncatlab.org/nlab/show/Sasakian+manifold). It says: “When the Riemannian cone is a hyper-Kähler manifold, then one talks of a 3-Sasakian manifold. Such a manifold is then automatically Einstein and spin.”

**Wikipedia:** [Sasakian manifold](https://en.wikipedia.org/wiki/Sasakian_manifold). It says: “Any 3-Sasakian manifold is both an Einstein manifold and a spin manifold.”

**Sources:**

- [C. P. Boyer and K. Galicki, Sasakian Geometry, Oxford Mathematical Monographs, Oxford University Press, 2007](https://doi.org/10.1093/acprof:oso/9780198564959.001.0001)

### ADHM equations are a hyperkähler moment map, so instanton moduli are hyperkähler

**Remember:** Instantons become matrices, and the matrix equations are moment maps.

*True by definition.* MSC 53C26 (Hyper-Kähler and quaternionic Kähler geometry, \`\`special'' geometry), 14D21, 81T13. arXiv math.DG, math.AG. Level 4: research.

**Definition.** ADHM data are complex matrices B₁, B₂ (k × k), I (k × N) and J (N × k). They form a flat quaternionic vector space with an action of U(k). The maps \[B₁, B₁†\] + \[B₂, B₂†\] + II† − J†J and \[B₁, B₂\] + IJ form its hyperkähler moment map.

**Problem.** Framed SU(N) instantons on ℝ⁴ of charge k, with a frame fixed at infinity, correspond to regular ADHM solutions up to the U(k) action. So their moduli space is a hyperkähler quotient of flat space, with the metric inherited from the flat metric on the data.

**How the definition helps.** The ADHM equations are the vanishing of a hyperkähler moment map, so the quotient theorem makes the moduli space hyperkähler at once (our own). Without this view one would compute the curvature of the natural metric on instantons directly (our own). The work moves into the ADHM theorem itself, which matches instantons with linear-algebra data (our own).

**Wikipedia:** [ADHM construction](https://en.wikipedia.org/wiki/ADHM_construction). It says: “The metric on the moduli space of instantons is that inherited from the flat metric on B, I and J.”

**Sources:**

- [M. F. Atiyah, N. J. Hitchin, V. G. Drinfeld, Yu. I. Manin, Construction of instantons, Phys. Lett. A 65 (1978) 185–187](https://doi.org/10.1016/0375-9601(78)90141-X)

### Generic quotient levels avoid walls, so Kronheimer's ALE quotients are smooth

**Remember:** Generic levels keep every stabilizer trivial, so no singular points survive.

*Rules out counterexamples. Confidence: medium.* MSC 53C26 (Hyper-Kähler and quaternionic Kähler geometry, \`\`special'' geometry), 14E15, 16G20. arXiv math.DG, math.AG. Level 4: research.

**Definition.** For a finite group Γ ⊂ SU(2), Kronheimer forms a hyperkähler quotient of a flat space built from Γ by a product of unitary groups. The level ζ lies in the centre of that group's Lie algebra, tensored with ℝ³. Call ζ generic when it avoids finitely many walls, one for each root that the McKay correspondence attaches to Γ.

**Problem.** For a generic level, Kronheimer's quotient is a smooth complete hyperkähler 4-manifold that looks like ℂ²/Γ at infinity. It is diffeomorphic to the minimal resolution of ℂ²/Γ (the smallest smooth surface over it), and level zero gives ℂ²/Γ.

**How the definition helps.** A generic level makes the group act freely on the level set, so the hyperkähler quotient theorem applies with no exceptions (our own). On a wall, such as level zero, some points have larger stabilizers and the quotient keeps singular points (our own). The walls have codimension three, so the generic levels form a connected set (our own).

**Wikipedia:** [Gravitational instanton](https://en.wikipedia.org/wiki/Gravitational_instanton). It says: “There are many methods for constructing gravitational instantons, including the Gibbons–Hawking Ansatz, twistor theory, and the hyperkähler quotient construction.”

**Paper or page:** [A Combinatorial Study on Quiver Varieties](https://arxiv.org/abs/math/0510455). It says: “(i) 𝓜<sub>e₀</sub>(δ)₀ is isomorphic to the simple singularity ℂ²/Γ. (ii) π : 𝓜<sub>e₀</sub>(δ) → 𝓜<sub>e₀</sub>(δ)₀ is the minimal resolution.”

**Sources:**

- [P. B. Kronheimer, The construction of ALE spaces as hyper-Kähler quotients, J. Differential Geom. 29 (1989) 665–683](https://doi.org/10.4310/jdg/1214443066)
- [H. Nakajima, Instantons on ALE spaces, quiver varieties, and Kac–Moody algebras, Duke Math. J. 76 (1994) 365–416](https://doi.org/10.1215/S0012-7094-94-07613-8)

### Hitchin's equations are a hyperkähler moment map, giving hyperkähler moduli

**Remember:** Hitchin's three real equations are three moment maps set to zero.

*True by definition. Confidence: medium.* MSC 53C26 (Hyper-Kähler and quaternionic Kähler geometry, \`\`special'' geometry), 14H60, 53C07. arXiv math.DG, math.AG. Level 4: research.

**Definition.** On a compact Riemann surface, take pairs (A, Φ) of a unitary connection A and a Higgs field Φ, an adjoint-valued (1,0)-form. These pairs form a flat hyperkähler space, and the gauge group acts on it with a hyperkähler moment map. Its parts are F + \[Φ, Φ\*\] and the two parts of ∂̄Φ, for F the curvature and ∂̄ the (0,1) derivative of A.

**Problem.** Hitchin's equations F + \[Φ, Φ\*\] = 0 and ∂̄Φ = 0 say that this moment map vanishes. So the moduli space of irreducible solutions modulo gauge is a hyperkähler manifold.

**How the definition helps.** The equations are the vanishing of the three moment maps, so the hyperkähler quotient theorem gives the metric (our own). Without this view one would have to check by hand that the natural metric is Kähler for three complex structures (our own). The work moves into analysis: elliptic theory makes the quotient a smooth finite-dimensional manifold (our own).

**Wikipedia:** [Hitchin's equations](https://en.wikipedia.org/wiki/Hitchin%27s_equations). It says: “The moduli space of solutions to Hitchin's equations was constructed by Hitchin in the rank two case on a compact Riemann surface and was one of the first examples of a hyperkähler manifold constructed.”

**Sources:**

- [N. J. Hitchin, The self-duality equations on a Riemann surface, Proc. London Math. Soc. 55 (1987) 59–126](https://doi.org/10.1112/plms/s3-55.1.59)

### Holomorphic symplectic Kähler manifolds are hyperkähler, so Hilbert schemes of K3 qualify

**Remember:** A holomorphic symplectic form plus a Kähler class yields the whole metric.

*Makes the theorem clean to state or prove.* MSC 53C26 (Hyper-Kähler and quaternionic Kähler geometry, \`\`special'' geometry), 14J42, 14C05. arXiv math.AG, math.DG. Level 4: research.

**Definition.** A holomorphic symplectic form on a complex manifold is a closed holomorphic 2-form that is nondegenerate at every point. For compact manifolds, the Calabi–Yau theorem lets one define hyperkähler as Kähler with a holomorphic symplectic form. This definition contains no metric equation.

**Problem.** For a K3 surface S and every n ≥ 1, the Hilbert scheme of n points on S is compact hyperkähler of dimension 4n. It is the smooth space of length-n finite subschemes of S, which lets points collide.

**How the definition helps.** With the metric-free definition, one only has to show that the Hilbert scheme is Kähler and carries a holomorphic symplectic form (our own). Beauville extends the symplectic form of Sⁿ over the Hilbert scheme with a blow-up and Hartogs' extension theorem (our own). The analysis moves into the Calabi–Yau theorem, which supplies the metric.

**Wikipedia:** [Hilbert scheme](https://en.wikipedia.org/wiki/Hilbert_scheme). It says: “A holomorphically symplectic, Kähler manifold is hyperkähler, as follows from the Calabi–Yau theorem.”

**Sources:**

- [A. Beauville, Variétés kählériennes dont la première classe de Chern est nulle, J. Differential Geom. 18 (1983) 755–782](https://doi.org/10.4310/jdg/1214438181)

### Hyperkähler metrics become holomorphic data on the twistor space

**Remember:** Package the whole sphere of complex structures into one complex manifold.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C26 (Hyper-Kähler and quaternionic Kähler geometry, \`\`special'' geometry), 53C28. arXiv math.DG, math.AG. Level 4: research.

**Definition.** The twistor space Z of a hyperkähler 4k-manifold M is M × S², where S² is the sphere of structures aI + bJ + cK. Its complex structure is L on the fibre over L and the standard one on S² = ℂP¹. On ℂP¹, O(m) is the line bundle whose sections are polynomials of degree m in the coordinate ζ.

**Problem.** By a theorem of Hitchin, Karlhede, Lindström and Roček, a hyperkähler metric on M is equivalent to holomorphic data on Z. The data are the fibration over ℂP¹, real sections with normal bundle 2k copies of O(1), an O(2)-twisted fibrewise symplectic form, and a real structure.

**How the definition helps.** The twistor space packs the three Kähler forms into one holomorphic form (ω₂ + iω₃) + 2ζω₁ − ζ²(ω₂ − iω₃), which is O(2)-twisted (our own). The complex structure on Z is integrable, as follows from Obata's theorem. Conversely, the points of M are the real sections, and the metric is read off from the twisted form (our own).

**Wikipedia:** [Hypercomplex manifold](https://en.wikipedia.org/wiki/Hypercomplex_manifold). It says: “This defines an almost complex structure on the manifold M×S², which is fibered over ℂP¹=S² with fibers identified with (M, L). This complex structure is integrable, as follows from Obata's theorem”

**Sources:**

- [N. J. Hitchin, A. Karlhede, U. Lindström, M. Roček, Hyperkähler metrics and supersymmetry, Comm. Math. Phys. 108 (1987) 535–589](https://doi.org/10.1007/BF01214418)

### Nahm's equations are a hyperkähler moment map, giving hyperkähler adjoint orbits

**Remember:** Nahm's ordinary differential equations are three moment maps for gauge symmetry.

*True by definition. Confidence: medium.* MSC 53C26 (Hyper-Kähler and quaternionic Kähler geometry, \`\`special'' geometry), 53C07. arXiv math.DG, math.SG. Level 4: research.

**Definition.** Quadruples (T₀, T₁, T₂, T₃) of functions on an interval with values in the Lie algebra of a compact group form a flat hyperkähler space. Gauge transformations act on it with a hyperkähler moment map. Its three parts are dTᵢ/dt + \[T₀, Tᵢ\] + \[Tⱼ, Tₖ\], for (i, j, k) a cyclic order of (1, 2, 3).

**Problem.** Moduli spaces of solutions of Nahm's equations are hyperkähler. In particular, Kronheimer showed that every regular semisimple adjoint orbit, such as the trace-free matrices with fixed distinct eigenvalues, carries a hyperkähler metric.

**How the definition helps.** Nahm's equations say that this moment map vanishes, so their moduli space is a hyperkähler quotient by the gauge group (our own). Without this view one would build three complex structures on the orbit and check one metric against all three (our own). The work moves into the analysis of solutions on a half-line with suitable limits, which Kronheimer did (our own).

**Wikipedia:** [Nahm equations](https://en.wikipedia.org/wiki/Nahm_equations). It says: “Conceptually, the equations arise in the process of infinite-dimensional hyperkähler reduction.”

**Sources:**

- [P. B. Kronheimer, A hyper-Kählerian structure on coadjoint orbits of a semisimple complex group, J. London Math. Soc. 42 (1990) 193–208](https://doi.org/10.1112/jlms/s2-42.2.193)

### Splitting off a holomorphic moment map makes hyperkähler quotients algebraic

**Remember:** The real equation needs analysis; the complex equation is algebra.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C26 (Hyper-Kähler and quaternionic Kähler geometry, \`\`special'' geometry), 53D20, 14L24. arXiv math.AG, math.SG. Level 4: research.

**Definition.** Fix the complex structure I. Split the hyperkähler moment map into its real part μ₁ and its complex part μ₂ + iμ₃. The complex part is a holomorphic moment map for the complexified group.

**Problem.** For a linear action on flat quaternionic space, the quotient μ⁻¹(0)/G in structure I is homeomorphic to the affine quotient of (μ₂ + iμ₃)⁻¹(0). This affine quotient, by the complexified group, is the variety whose functions are the invariant polynomials.

**How the definition helps.** Since μ₂ + iμ₃ is holomorphic and equivariant, its zero set is an affine variety preserved by the complexified group (our own). The hyperkähler quotient is the Kähler quotient of this variety by μ₁ (our own). The Kempf–Ness theorem relates that Kähler quotient to the affine quotient of geometric invariant theory, so the work moves into Kempf–Ness (our own).

**Wikipedia:** [Kähler quotient](https://en.wikipedia.org/wiki/K%C3%A4hler_quotient). It says: “By the Kempf-Ness theorem, a Kähler quotient by a compact Lie group G is closely related to a geometric invariant theory quotient by the complexification of G.”

**Sources:**

- [H. Nakajima, Instantons on ALE spaces, quiver varieties, and Kac–Moody algebras, Duke Math. J. 76 (1994) 365–416](https://doi.org/10.1215/S0012-7094-94-07613-8)

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

### Clean intersection gives two Lagrangians a common linear Darboux chart

**Remember:** Clean means the intersection looks like its tangent spaces.

*Rules out counterexamples.* MSC 53D05 (Symplectic manifolds (general theory)), 53D12. arXiv math.SG. Level 4: research.

**Definition.** Two submanifolds L₀ and L₁ intersect cleanly when L₀ ∩ L₁ is a submanifold whose tangent space at each point is TL₀ ∩ TL₁. For two Lagrangians, submanifolds of half dimension on which the closed nondegenerate 2-form ω vanishes, a clean intersection of dimension zero is a transverse one.

**Problem.** If two Lagrangian submanifolds intersect cleanly, then each intersection point has Darboux coordinates, coordinates in which ω is standard, adapted to both. In ℂⁿ one can take L₀ = ℝⁿ and L₁ = ℝᵏ × iℝⁿ⁻ᵏ, where k = dim(L₀ ∩ L₁) (our own).

**How the definition helps.** Clean intersection makes the intersection match the intersection of tangent spaces, which is what a linear chart needs (our own). It excludes tangencies, such as the x-axis and the parabola y = x², which meet only at 0 but share a tangent there (our own). The work is in Poźniak's proposition, which the quoted paper restates.

**Paper or page:** [Removal of singularities in Morse-Bott symplectizations](https://arxiv.org/abs/2509.17772). It says: “Suppose L₀, L₁ are cleanly intersecting Lagrangian submanifolds in a symplectic manifold (X,ω). Any p ∈ L₀ ∩ L₁ has a Darboux chart adapted to L₀, L₁.”

**Sources:**

- [Marcin Poźniak, Floer homology, Novikov rings and clean intersections, in Northern California Symplectic Geometry Seminar, AMS Translations Series 2, 196 (1999), 119–181](https://doi.org/10.1090/trans2/196/08)

### Defining Zoll by a loop index makes Zoll bodies closed under limits

**Remember:** Shortest orbits with circle index at least n make Zoll.

*Makes the theorem clean to state or prove.* MSC 53D05 (Symplectic manifolds (general theory)), 37J46, 52A20. arXiv math.SG. Level 4: research.

**Definition.** On a convex body in ℝ²ⁿ, take the space of action-minimizing generalized closed characteristics, its shortest periodic orbits, with the circle acting by shifting the starting time. The body is generalized Zoll if the Fadell–Rabinowitz index of this space, a measure of its size under the circle action, is at least n.

**Problem.** Generalized Zoll convex bodies form a Hausdorff-closed set. With the origin in the interior and smooth boundary, this condition is equivalent to all Reeb trajectories being closed with the same least period for the standard boundary contact form.

**How the definition helps.** The systolic index is upper semicontinuous, so at a Hausdorff limit it is at least the limit superior of the indices, and the threshold n survives. The cited paper proves this and identifies the threshold with the classical Zoll condition for smooth boundaries (our own summary).

**Paper or page:** [Systolic S¹-index and characterization of non-smooth Zoll convex bodies](https://arxiv.org/abs/2501.13856v3). It says: “The space of generalized Zoll convex bodies is closed in the space of all convex bodies with respect to the Hausdorff distance topology.”

**Sources:**

- [Stefan Matijević, Systolic S¹-index and characterization of non-smooth Zoll convex bodies, arXiv:2501.13856v3 (2025)](https://arxiv.org/abs/2501.13856v3)

### Duality with null directions lets the restricted form fix coisotropic neighbourhoods

**Remember:** The null directions of C determine the directions leaving C.

*Makes the theorem clean to state or prove.* MSC 53D05 (Symplectic manifolds (general theory)), 53D12. arXiv math.SG. Level 4: research.

**Definition.** A submanifold C of a symplectic manifold (M, ω), with ω a closed nondegenerate 2-form, is coisotropic when each TC contains its ω-orthogonal. That ω-orthogonal is then the kernel of ω restricted to C (our own). The map v ↦ ω(v, ·) identifies the normal bundle of C with the dual of this kernel (our own).

**Problem.** Let C be a compact submanifold that is coisotropic for two symplectic forms ω₁ and ω₂ with the same restriction to C. Then some diffeomorphism between neighbourhoods of C fixes C pointwise and pulls ω₂ back to ω₁ (Gotay).

**How the definition helps.** Coisotropy lets the restricted form fix both the null directions of C and, through them, the normal bundle of C (our own). Hence a neighbourhood map can match ω₁ and ω₂ at every point of C, and the relative Moser theorem makes them agree nearby (our own). The Lagrangian case is the one where the restricted form is zero (our own).

**Wikipedia:** [Weinstein's neighbourhood theorem](https://en.wikipedia.org/wiki/Weinstein%27s_neighbourhood_theorem). It says: “Consider a compact submanifold i: L ↪︎ M of dimension k which is a coisotropic submanifold of both (M,ω₁) and (M, ω₂), and such that i\*ω₁ = i\*ω₂.”

**Paper or page:** [On deformations of coisotropic submanifolds with fixed characteristic foliation](https://arxiv.org/abs/2212.04442). It says: “If C ⊂ (M,ω) is a coisotropic submanifold, then a neighborhood of C in M is symplectomorphic with the local model (U,Ω<sub>G</sub>). This symplectomorphism can be chosen such that it restricts to the identity map on C.”

**Sources:**

- [Mark J. Gotay, On coisotropic imbeddings of presymplectic manifolds, Proceedings of the American Mathematical Society 84 (1982), 111–114](https://doi.org/10.1090/S0002-9939-1982-0633290-X)

### Isotropic and coisotropic subspaces are exactly the compact orbits under Sp(V)

**Remember:** Count the null directions and the symplectic pairs, nothing more.

*Makes the theorem clean to state or prove.* MSC 53D05 (Symplectic manifolds (general theory)), 15A63, 14M15. arXiv math.SG. Level 4: research.

**Definition.** Let V be a 2n-dimensional symplectic vector space, with a nondegenerate antisymmetric form ω, and let W be a subspace. Let Wω be the set of vectors ω-orthogonal to W. Its type is (n₀, n₊, n₋), with n₀ = dim(W ∩ Wω), and 2n₊, 2n₋ the ranks of ω on W and Wω.

**Problem.** Two subspaces lie in the same orbit of the symplectic group exactly when they have the same type (our own). One type is compact exactly when n₊n₋ = 0, so when W is isotropic (ω is zero on W) or coisotropic (Wω ⊆ W).

**How the definition helps.** A Darboux basis adapted to W, in which ω is standard, puts every subspace of one type in the same position (our own). A type is compact exactly when its closure holds no type with smaller n₊, that is, when n₊ or n₋ is zero (our own). For example, the symplectic planes in ℝ⁴ form an open set whose closure contains the Lagrangian planes (our own).

**Paper or page:** [Simultaneous linear symplectic reduction and orbit fibrations](https://arxiv.org/abs/2410.16869), [Simultaneous linear symplectic reduction and orbit fibrations](https://arxiv.org/abs/2410.16869). It says: “Gr(n⃗; V) is compact if and only if n₊n₋ = 0.”

**Sources:**

- [Hyunmoon Kim, Simultaneous linear symplectic reduction and orbit fibrations, arXiv:2410.16869 (2024)](https://arxiv.org/abs/2410.16869)

### Loose charts make formal isotopy sufficient

**Remember:** A loose chart lets formal tangent data classify actual embeddings.

*Makes the theorem clean to state or prove.* MSC 53D10 (Contact manifolds (general theory)). arXiv math.SG. Level 4: research.

**Definition.** A formal Legendrian embedding is an embedding with a path of injective tangent maps, from its derivative to a map onto Lagrangian subspaces of the contact planes. A Legendrian embedding is loose if, in some contact chart, it looks like Murphy’s loose chart, a standard local piece that leaves room for local changes.

**Problem.** In contact dimension at least five, every formal Legendrian isotopy class of closed connected knots has a loose representative, unique up to ambient contact isotopy. Ambient contact isotopy moves the surrounding space through maps that preserve the contact planes.

**How the definition helps.** Loose knots are exactly those that formal tangent data can classify, because the chart gives room for the local changes in Murphy’s proof (our own explanation). Her deformation theorem supplies existence and uniqueness.

**Paper or page:** [Loose Legendrian embeddings in high dimensional contact manifolds](https://arxiv.org/abs/1201.2245v5). It says: “Then for each formal Legendrian isotopy class there is a loose Legendrian knot in that class, unique up to ambient contact isotopy.”

**Sources:**

- [Loose Legendrian embeddings in high dimensional contact manifolds, Theorem 1.2](https://arxiv.org/abs/1201.2245v5)

### Chains of Lagrangian correspondences make the symplectic category a true category

**Remember:** Compose correspondences by writing them side by side.

*True by definition.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 53D40. arXiv math.SG. Level 4: research.

**Definition.** A Lagrangian correspondence from M₀ to M₁ is a Lagrangian submanifold of M₀⁻ × M₁, the product with the sign of the first form reversed. A generalized correspondence is a finite chain of them through intermediate manifolds, and chains compose by joining them end to end.

**Problem.** Generalized Lagrangian correspondences form a category, after identifying two neighbours with their geometric composition whenever that composition is transverse and embedded (Wehrheim–Woodward). Every symplectomorphism gives a morphism through its graph.

**How the definition helps.** Joining chains is always defined and associative, so the category axioms hold by definition, with no transversality condition (our own). The usual definition composes correspondences directly, and that composition exists only for transverse intersections, as the nLab notes. The work moves into the theorem that quilted Floer cohomology is unchanged by an embedded composition, under monotonicity conditions (our own).

**nLab:** [Weinstein symplectic category](https://ncatlab.org/nlab/show/Weinstein+symplectic+category). It says: “However, take at face value, symplectic manifolds with Lagrangian correspondences between them do not quite form a category, since the usual composition is only well-defined when the intersection of L₁ × L₂ ∩ X₁ × Δ(X₂) × X₃ is transverse.”

**Sources:**

- [K. Wehrheim and C. T. Woodward, Functoriality for Lagrangian correspondences in Floer theory, Quantum Topol. 1 (2010) 129–170](https://doi.org/10.4171/QT/4)

### Cylindrical ends let Lagrangian cobordisms give cone decompositions in Fukaya categories

**Remember:** Far away, a cobordism is just half-lines times Lagrangians.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 53D37. arXiv math.SG. Level 4: research.

**Definition.** A Lagrangian cobordism with ends L₀, …, Lₙ is a Lagrangian submanifold V of ℂ × W. Outside a compact set, V is a union of pieces γⱼ × Lⱼ. Each γⱼ is a horizontal half-line in ℂ at its own height, and each Lⱼ is a Lagrangian in W.

**Problem.** Let V be a monotone cobordism (Biran–Cornea) or an exact one in a Liouville manifold. Then L₀ is an iterated cone of L₁, …, Lₙ in the derived (wrapped) Fukaya category, so cobordisms give relations in its Grothendieck group.

**How the definition helps.** With straight ends, projection to ℂ is holomorphic near infinity, so holomorphic curves with boundary on V cannot escape along the ends (our own). This compactness makes the Floer theory of V well defined (our own). Bending the ends lets V pair with each end in turn, and this gives the exact triangles, which is where the work is (our own).

**nLab:** [Lagrangian cobordism](https://ncatlab.org/nlab/show/Lagrangian+cobordism). It says: “A Lagrangian cobordism is roughly a cobordism between Lagrangian submanifolds which is itself a Lagrangian submanifold in a suitable sense.”

**Paper or page:** [Lagrangian Cobordisms in Liouville manifolds](https://arxiv.org/abs/2105.14821v2). It says: “Let V ⊂ ℂ × W be a Lagrangian cobordism with ends L₀, …, Lₙ (ordered counterclockwise). Then there is an iterated cone decomposition L₀ ≅ \[Lₙ → Lₙ₋₁ → ⋯ → L₂ → L₁\]”

**Sources:**

- [P. Biran and O. Cornea, Lagrangian cobordism. I, J. Amer. Math. Soc. 26 (2013) 295–340](https://doi.org/10.1090/S0894-0347-2012-00756-5)

### Disk potentials distinguish monotone tori that no symplectomorphism relates

**Remember:** Count the smallest disks, and the torus shows its fingerprint.

*Makes the theorem clean to state or prove.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 53D40. arXiv math.SG. Level 4: research.

**Definition.** A monotone Lagrangian torus L is one whose disk area is proportional to Maslov index. Its disk potential is a Laurent polynomial in variables for H₁(L; ℤ), whose coefficients count Maslov-index-2 holomorphic disks through a point. The count does not depend on the almost complex structure.

**Problem.** A symplectomorphism that carries one monotone torus to another carries its disk potential to the other's, up to an integral change of variables. So no symplectomorphism of ℂPⁿ relates lifted Vianna tori whose Markov triples differ, where a Markov triple solves a² + b² + c² = 3abc.

**How the definition helps.** A symplectomorphism carries holomorphic disks for J to disks for the pushed-forward structure, so it carries counts to counts (our own). The counts do not depend on J, because monotonicity rules out bubbles of Maslov index zero or less (our own). The affine edge lengths of the Newton polytope then record the triple, which separates the tori (our own).

**Paper or page:** [Infinitely many monotone Lagrangian tori in higher projective spaces](https://arxiv.org/abs/2307.06934), [Exotic Lagrangian tori in Grassmannians](https://arxiv.org/abs/1910.10888). It says: “In particular, if {a,b,c} ≠ {a′,b′,c′}, then there is no symplectomorphism of ℙⁿ that maps the lifted Vianna torus T̄\_(a,b,c) to T̄\_(a′,b′,c′).”

**Sources:**

- [R. Vianna, Infinitely many exotic monotone Lagrangian tori in CP², J. Topol. 9 (2016) 535–551](https://doi.org/10.1112/jtopol/jtw002)
- [Infinitely many monotone Lagrangian tori in higher projective spaces, arXiv:2307.06934](https://arxiv.org/abs/2307.06934)

### Focal points as Maslov crossings extend Sturm theory to Hamiltonian systems

**Remember:** A zero of a solution is a crossing of the vertical plane.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 34C10. arXiv math.SG, math.CA. Level 4: research.

**Definition.** For a linear Hamiltonian system in ℝ²ⁿ, a solution Y(t) = (X(t), U(t)) with n columns spans a Lagrangian plane at each time. Its focal points are the times when the upper block X(t) loses rank, and the oscillation number counts them with multiplicity. The paper extends this count to all continuous Lagrangian paths.

**Problem.** The oscillation number of any continuous Lagrangian path equals its Maslov index relative to the vertical path. So for two solutions of the same system, the oscillation numbers differ by comparative indices, integers computed from their values at the two endpoints.

**How the definition helps.** Counted as a Maslov index, focal points give a homotopy invariant with fixed endpoints, so comparing two solutions reduces to endpoint data (our own). For n = 1 the planes are lines in the (y, y′)-plane, and the count is the number of zeros of y (our own). This recovers Sturm's classical separation theorem (our own).

**Paper or page:** [Oscillation numbers for continuous Lagrangian paths and Maslov index](https://arxiv.org/abs/2107.01928v1), [Oscillation numbers for continuous Lagrangian paths and Maslov index](https://arxiv.org/abs/2107.01928v1). It says: “Let Y be a continuous Lagrangian path on \[a,b\]. Then 𝒩(Y,\[a,b\]) = Mas(E,Y,\[a,b\]), where the matrix E defined in represents the constant vertical Lagrangian path.”

**Sources:**

- [V. I. Arnold, Sturm theorems and symplectic geometry, Funct. Anal. Appl. 19 (1985) 251–259](https://doi.org/10.1007/BF01077289)

### Formal Lagrangian immersions reduce Lagrangian immersion problems to bundle theory

**Remember:** First solve the problem for tangent planes, then integrate.

*Makes the theorem clean to state or prove.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 57R42. arXiv math.SG, math.GT. Level 4: research.

**Definition.** A formal Lagrangian immersion of an n-manifold L into a symplectic 2n-manifold M is a map f covered by an injective bundle map TL → TM. The bundle map must send each tangent space to a Lagrangian subspace. It need not be the derivative of f.

**Problem.** If f\*ω is zero in cohomology, every formal Lagrangian immersion is homotopic to a genuine one (Gromov; Lees). So an n-manifold L has a Lagrangian immersion into ℂⁿ exactly when TL ⊗ ℂ is trivial.

**How the definition helps.** A Lagrangian plane in ℂⁿ spans ℂⁿ over ℂ, so a formal Lagrangian immersion into ℂⁿ is a trivialization of TL ⊗ ℂ (our own). The h-principle, a theorem that deforms formal solutions to genuine ones, does all the work (our own). For example, the sphere Sⁿ passes the test, and its Lagrangian immersion is the Whitney sphere (our own).

**Paper or page:** [On cobordism groups of Lagrangian immersions](https://arxiv.org/abs/2409.14651v1). It says: “Let φ : TL → TM be a Lagrangian bundle map covering a map f: L → M. If \[f\*ω\] = 0 ∈ H²(L; ℝ), then φ is homotopic to a holonomic solution.”

**Sources:**

- [J. A. Lees, On the classification of Lagrange immersions, Duke Math. J. 43 (1976) 217–224](https://doi.org/10.1215/S0012-7094-76-04319-2)

### Generating functions quadratic at infinity turn Lagrangian intersections into critical points

**Remember:** Far out, the function is just a fixed quadratic form.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 58E05. arXiv math.SG. Level 4: research.

**Definition.** A generating function for a Lagrangian L in T\*N is a function S(q, ξ) on N × ℝᵏ. The map (q, ξ) ↦ (q, ∂S/∂q) sends the set where ∂S/∂ξ = 0 one-to-one onto L. S is quadratic at infinity if it equals a fixed nondegenerate quadratic form in ξ outside a compact set.

**Problem.** Let L be Hamiltonian isotopic to the zero section of T\*N, with N closed. Then L meets the zero section in at least cup-length(N) + 1 points (Hofer; Laudenbach–Sikorav).

**How the definition helps.** Points of L on the zero section are exactly the critical points of S, by the definition (our own). Being quadratic at infinity lets Lusternik–Schnirelmann theory on N × ℝᵏ work as on a compact manifold, which gives the bound (our own). The work moves into Sikorav's theorem that Hamiltonian isotopy keeps a generating function quadratic at infinity.

**Paper or page:** [Lagrangian intersections and cuplength in generalised cohomology theories](https://arxiv.org/abs/2211.07559v2), [Hamiltonian Braids via Generating Functions](https://arxiv.org/abs/2410.06495v2). It says: “If X = T\*L is a cotangent bundle with L the zero section, there is a lower bound \# L ∩ L′ ≥ c\_ℤ(L).”

**Sources:**

- [F. Laudenbach and J.-C. Sikorav, Persistance d'intersection avec la section nulle au cours d'une isotopie hamiltonienne dans un fibré cotangent, Invent. Math. 82 (1985) 349–357](https://doi.org/10.1007/BF01388807)

### Gradings on Lagrangians give Floer complexes integer degrees

**Remember:** A grading lifts each tangent plane's phase to a real number.

*Rules out counterexamples.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 53D40. arXiv math.SG. Level 4: research.

**Definition.** Suppose 2c₁(M) = 0, and fix a quadratic complex volume form; it gives each Lagrangian tangent plane a phase in the circle. A grading of L is a real-valued lift of this phase map. It exists exactly when the Maslov class of L, the winding of the phase around loops, vanishes.

**Problem.** If L₀ and L₁ are graded, each intersection point has a degree, and a strip from p to q has index deg(q) − deg(p). So HF(L₀,L₁) is ℤ-graded, and the differential raises degree by one.

**How the definition helps.** A strip's index is the winding of its boundary tangent planes, and the real lifts split that winding into numbers at the two ends (our own). Without gradings the index depends on the strip, so only a ℤ/2 grading survives in general (our own). The condition excludes the circle in ℂ: its Maslov index is 2, so it has no grading (our own).

**Paper or page:** [Towards Homological Mirror Symmetry](https://arxiv.org/abs/2108.03931). It says: “Then: ind(\[u\]) = deg(q) − deg(p). In particular, ind(\[u\]) only depends on the two generators p, q connected by u, so that CF(L₀,L₁) can be equipped with a ℤ-grading”

**Sources:**

- [P. Seidel, Graded Lagrangian submanifolds, Bull. Soc. Math. France 128 (2000) 103–149](https://doi.org/10.24033/bsmf.2365)

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

### Self-adjoint extensions as Lagrangian planes make spectral flow a Maslov index

**Remember:** Self-adjoint boundary conditions are Lagrangian planes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 58J30, 47B25. arXiv math.SP, math.SG. Level 4: research.

**Definition.** Let A be a symmetric operator with equal finite deficiency indices. On the domain of A\* modulo that of the closure of A, the boundary form ⟨A\*u, v⟩ − ⟨u, A\*v⟩ is nondegenerate and skew-Hermitian. The self-adjoint extensions of A are exactly the restrictions of A\* to the Lagrangian subspaces for this form.

**Problem.** Let A(t) be the self-adjoint extensions given by a path L(t) of Lagrangian planes. Under mild conditions, their spectral flow, the net number of eigenvalues that cross 0, equals a Maslov index of L(t), up to sign.

**How the definition helps.** Zero is an eigenvalue of the extension for L exactly when L meets K, the boundary values of solutions of A\*u = 0 (our own). So eigenvalue crossings are Maslov crossings relative to K, and comparing crossing forms with eigenvalue derivatives shows that the signs agree (our own). This turns eigenvalue counts for Schrödinger operators on intervals and quantum graphs into topology (our own).

**Paper or page:** [First-order asymptotic perturbation theory for extensions of symmetric operators](https://arxiv.org/abs/2012.00247v3). It says: “The latter, in turn, gives a general infinitesimal version of the celebrated formula equating the spectral flow of a path of self-adjoint extensions and the Maslov index of the corresponding path of Lagrangian planes.”

**Sources:**

- [B. Booss-Bavnbek and K. Furutani, The Maslov index: a functional analytical definition and the spectral flow formula, Tokyo J. Math. 21 (1998) 1–34](https://doi.org/10.3836/tjm/1270041982)
- [Y. Latushkin and S. Sukhtaiev, First-order asymptotic perturbation theory for extensions of symmetric operators, arXiv:2012.00247](https://arxiv.org/abs/2012.00247v3)

### The Kashiwara form makes the triple Maslov index a symplectic cocycle

**Remember:** The triple index is the signature of a cyclic sum of ω.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 11E81. arXiv math.SG. Level 4: research.

**Definition.** The Kashiwara index τ(L₁, L₂, L₃) of three Lagrangian subspaces is the signature of a quadratic form on L₁ ⊕ L₂ ⊕ L₃. The form is ω(x₁, x₂) + ω(x₂, x₃) + ω(x₃, x₁), so it uses only the symplectic form.

**Problem.** The Kashiwara index is invariant under the symplectic group and changes sign when two arguments swap. It is also a cocycle, τ(L₂,L₃,L₄) − τ(L₁,L₃,L₄) + τ(L₁,L₂,L₄) − τ(L₁,L₂,L₃) = 0.

**How the definition helps.** Symplectic maps preserve ω, and swapping two arguments negates the form, so invariance and antisymmetry hold by definition (our own). The cocycle identity becomes a computation in linear algebra, with no paths or homotopies (our own). The same formula works over any field, where Wall's index gives a cocycle with values in the Witt group of quadratic forms.

**Wikipedia:** [Maslov index](https://en.wikipedia.org/wiki/Maslov_index). It says: “Given a cycle of Lagrangian subspaces A₁→A₂…→A<sub>k</sub>→A₁, the Kashiwara form is the quadratic form on A₁⊕A₂⊕⋯⊕A<sub>k</sub>”

**Paper or page:** [Some remarks on the Maslov index](https://arxiv.org/abs/2105.04337v3). It says: “The Maslov index is a 2-cocycle; if Λ₀,Λ₁,Λ₂,Λ₃ are 4 Lagrangiens then μ<sub>BL</sub>(Λ₁,Λ₂,Λ₃) − μ<sub>BL</sub>(Λ₀,Λ₂,Λ₃) + μ<sub>BL</sub>(Λ₀,Λ₁,Λ₃) − μ<sub>BL</sub>(Λ₀,Λ₁,Λ₂) = 0”

**Sources:**

- [G. Lion and M. Vergne, The Weil Representation, Maslov Index and Theta Series, Progress in Mathematics 6, Birkhäuser (1980)](https://doi.org/10.1007/978-1-4684-9154-8)

### The Maslov line bundle makes principal symbols of Fourier integral operators global

**Remember:** The bundle absorbs the eighth-roots of unity from stationary phase.

*Makes the theorem clean to state or prove.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 35S30. arXiv math.SG, math.AP. Level 4: research.

**Definition.** Near each point, a phase function φ(x, θ) with extra variables θ describes a Lagrangian Λ in T\*X. For two such functions, half the difference σ − σ′ of the signatures of their Hessians in θ is locally constant. The Keller–Maslov bundle is the flat line bundle on Λ with transition functions exp(iπ(σ − σ′)/4).

**Problem.** The principal symbol of a Fourier integral operator for Λ is a global section of the half-densities on Λ twisted by the Maslov bundle (Hörmander).

**How the definition helps.** Stationary phase shows that a change of phase function multiplies the amplitude by exactly these factors, so local symbols glue by construction (our own). Without the twist, symbols are defined only locally, or globally when the bundle is trivial, as when the Maslov class is zero (our own). The work sits in the stationary phase computation, which shows that only the change of signature matters (our own).

**Wikipedia:** [Maslov index](https://en.wikipedia.org/wiki/Maslov_index). It says: “Globally, these local phase ambiguities are encoded by the Keller–Maslov bundle, and the principal symbol of a Fourier integral operator is naturally a half-density twisted by that bundle.”

**Sources:**

- [L. Hörmander, Fourier integral operators. I, Acta Math. 127 (1971) 79–183](https://doi.org/10.1007/BF02392052)

### Topologically unobstructed immersions bound no teardrops

**Remember:** Lift to the universal cover; if it embeds, no teardrops.

*Rules out counterexamples. Confidence: low.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 53D37. arXiv math.SG. Level 4: research.

**Definition.** An immersed Lagrangian is topologically unobstructed, in the working form used here, when its lifts to the universal cover M̃ are proper embeddings. For compact immersions, a lemma in the source proves this equivalent to the source's own definition. A teardrop is a holomorphic disk on it with exactly one corner, at a self-intersection point.

**Problem.** Let M be symplectically aspherical, so ω integrates to zero over every sphere. A topologically unobstructed Lagrangian cobordism in ℂ × M with embedded ends and generic self-intersections bounds no holomorphic disks with at most one corner.

**How the definition helps.** A disk lifts to ℂ × M̃, where a single corner would join two branches of V that the embedded lift keeps apart (our own). A disk without corners caps off to a sphere, which has zero area by asphericity (our own). The source proves the theorem in two steps, through a notion called quasi-exactness, and a figure-eight curve shows what is excluded (our own).

**Paper or page:** [Unobstructed Lagrangian cobordism groups of surfaces](https://arxiv.org/abs/2307.03124v2), [Unobstructed Lagrangian cobordism groups of surfaces](https://arxiv.org/abs/2307.03124v2), [Unobstructed Lagrangian cobordism groups of surfaces](https://arxiv.org/abs/2307.03124v2). It says: “An immersion ι: L → M is topologically unobstructed if and only if its lifts to M̃ are proper embeddings.”

**Sources:**

- [Unobstructed Lagrangian cobordism groups of surfaces, arXiv:2307.03124 (2023)](https://arxiv.org/abs/2307.03124v2)

### Uniqueness of generating functions makes their minimax values Lagrangian invariants

**Remember:** Only the equivalence class of the generating function matters.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 53D35. arXiv math.SG. Level 4: research.

**Definition.** The elementary operations on a generating function are adding a constant, a fibre-preserving change of variables, and adding a nondegenerate quadratic form in new variables. Two generating functions are equivalent if such operations connect them. Each operation moves all critical values by the same constant.

**Problem.** All generating functions quadratic at infinity of a Lagrangian Hamiltonian isotopic to the zero section are equivalent (Viterbo; Théret). So minimax values, the critical values that cohomology classes pick out, are invariants of L up to one common constant.

**How the definition helps.** The elementary operations shift all minimax values by one common constant, by their definition (our own). Uniqueness then makes these values invariants of L up to that constant, and the work sits in the uniqueness theorem (our own). Their differences, such as Viterbo's γ(L), give his distance on Lagrangians and his symplectic capacities (our own).

**Paper or page:** [Hamiltonian Braids via Generating Functions](https://arxiv.org/abs/2410.06495v2). It says: “If L has the GFQI-uniqueness property, and φ ∈ Ham(T\*M), then so does φ(L); The zero section 0<sub>M</sub> has the GFQI-uniqueness property.”

**Sources:**

- [C. Viterbo, Symplectic topology as the geometry of generating functions, Math. Ann. 292 (1992) 685–710](https://doi.org/10.1007/BF01444643)

### With zero Maslov class, Lagrangian mean curvature flow is a Hamiltonian isotopy

**Remember:** The Lagrangian angle is a Hamiltonian for mean curvature flow.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 53E10. arXiv math.DG, math.SG. Level 4: research.

**Definition.** In a Calabi–Yau manifold with holomorphic volume form Ω, each Lagrangian L has Ω\|L = exp(iθ) vol, with phase exp(iθ): L → S¹. The function θ is the Lagrangian angle, and the class of dθ is π times the Maslov class. The mean curvature vector of L is then H = J∇θ.

**Problem.** Lagrangian mean curvature flow changes the Lagrangian flux, the class that measures swept symplectic area, at the rate \[dθ\]. So if the Maslov class is zero, the flow is a Hamiltonian isotopy generated by the angle θ.

**How the definition helps.** With zero Maslov class, θ is a single-valued function, so ω(H, ·) = ±dθ is exact on L and the motion is Hamiltonian (our own). The angle θ gives the Hamiltonian function, so the statement needs the Lagrangian angle, not only the squared determinant (our own). The work sits in the formula H = J∇θ (our own).

**Paper or page:** [Short-time existence of Lagrangian mean curvature flow](https://arxiv.org/abs/2507.10341v2). It says: “Then, we have that d/dt\[α<sub>t</sub>\] = \[dθ\] in H¹<sub>dR</sub>(L), for all times t ∈ (−ε,ε). Note that the Maslov class is preserved since {L<sub>t</sub>} is a Lagrangian isotopy.”

**Sources:**

- [R. P. Thomas and S.-T. Yau, Special Lagrangians, stable bundles and mean curvature flow, Comm. Anal. Geom. 10 (2002) 1075–1113](https://doi.org/10.4310/CAG.2002.v10.n5.a8)
- [S. Ghosh, Short-time existence of Lagrangian mean curvature flow, arXiv:2507.10341](https://arxiv.org/abs/2507.10341v2)

### A non-exact Lee class removes the volume obstruction to conformal symplectic forms

**Remember:** Twisting by a non-exact 1-form frees ω from cohomology.

*Rules out counterexamples. Confidence: medium.* MSC 53D15 (Almost contact and almost symplectic manifolds), 53D05. arXiv math.SG. Level 4: research.

**Definition.** Fix a closed 1-form η. An η-symplectic form, also called locally conformally symplectic, is a nondegenerate 2-form ω with dω = η ∧ ω. The class of η is the Lee class, and the theorem needs it to be nonzero.

**Problem.** On a closed manifold, let η be a closed non-exact 1-form. Then every nondegenerate 2-form is homotopic through nondegenerate forms to an η-symplectic form, in any prescribed Novikov cohomology class.

**How the definition helps.** For non-exact η the twisted cohomology in top degree is zero, so the class of ω need not have a nonzero top power (our own). If η = df were exact, exp(−f)ω would be symplectic, which is impossible on S⁶ although S⁶ has nondegenerate 2-forms (our own). The real work is the h-principle proof of Bertelson and Meigniez (our own).

**Paper or page:** [Conformal Symplectic structures, Foliations and Contact Structures](https://arxiv.org/abs/2107.08839v2). It says: “On a closed connected manifold M of dimension 2n ≥ 2, let η be a closed, non-exact 1-form; and let ω be a nondegenerate 2-form. Then, ω is homotopic to a η-symplectic form”

**Sources:**

- [M. Bertelson and G. Meigniez, Conformal symplectic structures, foliations and contact structures (arXiv 2107.08839); published as Conformal symplectic, foliated and contact structures, J. Symplectic Geom. 22 (2024) 393–439](https://arxiv.org/abs/2107.08839v2)

### A b-symplectic form gives its singular hypersurface a cosymplectic structure

**Remember:** The pole of ω along Z leaves two closed forms behind.

*True by definition. Confidence: medium.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 53D15. arXiv math.SG. Level 4: research.

**Definition.** A b-symplectic form on a manifold M with a hypersurface Z is a symplectic form on the b-tangent bundle. This is the Lie algebroid of vector fields tangent to Z. Near Z, ω = (dz/z) ∧ α + β with smooth forms α and β, where z is a defining function of Z.

**Problem.** The hypersurface Z of a b-symplectic manifold of dimension 2n carries a cosymplectic structure. This is a closed 1-form θ and a closed 2-form η on Z with θ ∧ ηⁿ⁻¹ nowhere zero.

**How the definition helps.** The b-form gives θ and η directly, as the restrictions of α and β to Z, and the Poisson picture hides both forms (our own). Here θ does not depend on z, and η changes only by an exact term (our own). Closedness of ω makes θ and η closed, and nondegeneracy on the b-tangent bundle makes θ ∧ ηⁿ⁻¹ nonzero (our own).

**Paper or page:** [Regularisation of Lie algebroids and Applications](https://arxiv.org/abs/2211.14891v1). It says: “Let (M,Z,ω) be a b-symplectic manifold. Then, there is an induced cosymplectic structure (θ,η) on Z.”

**Sources:**

- [V. Guillemin, E. Miranda and A. R. Pires, Symplectic and Poisson geometry on b-manifolds, Adv. Math. 264 (2014) 864–896](https://doi.org/10.1016/j.aim.2014.07.032)
- [Á. del Pino and A. Witte, Regularisation of Lie algebroids and applications (arXiv 2211.14891)](https://arxiv.org/abs/2211.14891v1)

### A symplectic form on a bᵏ-tangent bundle forces a Stiefel–Whitney relation

**Remember:** A symplectic form orients its bundle, wherever that bundle lives.

*True by definition. Confidence: medium.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 57R17. arXiv math.SG. Level 4: research.

**Definition.** A symplectic Lie algebroid is a Lie algebroid A with a closed 2-form ω on A that is nondegenerate on every fibre. For the bᵏ-tangent bundle of a hypersurface Z, the anchor is an isomorphism away from Z. Along Z it degenerates to order k.

**Problem.** If the bᵏ-tangent bundle of a hypersurface Z in X has a symplectic form, then w₁(TX) + k PD\[Z\] = 0 with ℤ₂ coefficients. For example, a compact b-symplectic manifold is orientable exactly when Z is zero in mod 2 homology.

**How the definition helps.** The top power of ω is a nowhere-zero section of the determinant line of A\*, so A is orientable (our own). In the bivector picture there is no such section, because πⁿ vanishes on Z (our own). The work is to show that w₁(A) = w₁(TX) + k PD\[Z\], because the anchor degenerates to order k along Z (our own).

**Paper or page:** [Obstructions for Symplectic Lie Algebroids](https://arxiv.org/abs/1811.05084v2). It says: “Let 𝒜 → Xⁿ be a symplectic Lie algebroid. Then in H₁(X;ℤ₂) we have: w₁(TX) + k PD\_ℤ₂\[Z\] = 0 if 𝒜 = 𝒜<sub>Z</sub>ᵏ, the bᵏ-tangent bundle”

**Sources:**

- [R. L. Klaasse, Obstructions for symplectic Lie algebroids, SIGMA (2020) 121](https://doi.org/10.3842/SIGMA.2020.121)

### Complete symplectic realizations characterize integrable Poisson manifolds

**Remember:** Complete realizations never let lifted Hamiltonian flows run off.

*Rules out counterexamples.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG, math.DG. Level 4: research.

**Definition.** A symplectic realization of a Poisson manifold M is a surjective submersion from a symplectic manifold to M that is a Poisson map. It is complete when f on M having a complete Hamiltonian vector field implies the same for the pulled-back function.

**Problem.** A Poisson manifold is integrable, the base of a symplectic groupoid, exactly when it has a complete symplectic realization (Crainic–Fernandes).

**How the definition helps.** Every Poisson manifold has symplectic realizations, even a non-integrable one, so completeness is the condition that excludes these (our own). For a symplectic groupoid, the Poisson one of source and target is complete, since Hamiltonian fields of pulled-back functions are invariant (our own). The converse uses the Crainic–Fernandes obstructions, which completeness forces to vanish (our own).

**nLab:** [symplectic realization](https://ncatlab.org/nlab/show/symplectic+realization). It says: “For any symplectic groupoid Σ with base a Poisson manifold P the target map is a symplectic realization of P and the source map is a symplectic realization of the opposite structure.”

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “Indeed, using the topological obstructions to the integrability of Lie algebroids, one can show that a Poisson manifold is integrable if and only if it admits a complete symplectic realisation.”

**Sources:**

- [M. Crainic, R. L. Fernandes, Integrability of Poisson brackets, J. Differential Geom. 66 (2004) 71–137](https://doi.org/10.4310/jdg/1090415030)

### Defining the modular class in Poisson cohomology makes it volume independent

**Remember:** The class records how Hamiltonian flows fail to preserve volume.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG, math.DG. Level 4: research.

**Definition.** Fix a volume form λ on an oriented Poisson manifold. The modular vector field sends f to the divergence, for λ, of the Hamiltonian vector field of f. The modular class is its class in first Poisson cohomology, Poisson vector fields modulo Hamiltonian ones.

**Problem.** The modular class does not depend on the chosen volume form, so it is an invariant of the Poisson manifold. It vanishes exactly when some volume form is preserved by every Hamiltonian flow.

**How the definition helps.** Replacing λ by eʰλ changes the modular field by the Hamiltonian field of h, up to sign, and first cohomology divides these out (our own). Conversely, if the modular field of λ is Hamiltonian, a rescaling of λ has modular field zero, so that volume is invariant (our own). The modular vector field itself depends on λ; only its class is an invariant.

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “Moreover, given two volume forms λ₁ and λ₂, the difference X\_λ₁ − X\_λ₂ is a Hamiltonian vector field. Accordingly, the Poisson cohomology class \[X\_λ\]\_π ∈ H¹(M,π) does not depend on the original choice of the volume form λ, and it is called the modular class of the Poisson manifold. An orientable Poisson manifold is called unimodular if its modular class vanishes. Notice that this happens if and only if there exists a volume form λ such that the modular vector field X\_λ vanishes, i.e. div\_λ(X<sub>f</sub>) = 0 for every f; in other words, λ is invariant under the flow of any Hamiltonian vector field.”

**Sources:**

- [A. Weinstein, The modular automorphism group of a Poisson manifold, J. Geom. Phys. 23 (1997) 379–394](https://doi.org/10.1016/S0393-0440(97)80011-3)

### Dirac structures make closed forms and Poisson bivectors one notion

**Remember:** Half of the doubled tangent bundle, isotropic and closed under brackets.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 53D05. arXiv math.SG, math.DG. Level 4: research.

**Definition.** A Dirac structure on M is a subbundle of TM ⊕ T\*M, maximal isotropic for ⟨(v, α), (w, β)⟩ = α(w) + β(v). It must also be closed under the Courant bracket. This bracket on pairs combines the Lie bracket of vector fields with Lie derivatives of forms.

**Problem.** The graph of a 2-form ω is a Dirac structure exactly when dω = 0. The graph of a bivector π is a Dirac structure exactly when \[π, π\] = 0, that is, when π is Poisson.

**How the definition helps.** Skew-symmetry makes the graph of ω or π isotropic of half dimension, so maximal isotropy is automatic (our own). For such subbundles, closure under the Courant bracket is measured by one 3-tensor (our own). It is dω on the graph of ω and a multiple of \[π, π\] on the graph of π (our own).

**Wikipedia:** [Dirac structure](https://en.wikipedia.org/wiki/Dirac_structure). It says: “Let ω be a symplectic form on a manifold M, then its graph is a (closed) Dirac structure. More generally, this is true for any closed 2-form.”

**Sources:**

- [T. J. Courant, Dirac manifolds, Trans. Amer. Math. Soc. 319 (1990) 631–661](https://doi.org/10.1090/S0002-9947-1990-0998124-1)

### Dual maps detect Lie algebroid morphisms

**Remember:** The Poisson bracket reads the original bracket and anchor from linear functions.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 4: research.

**Definition.** The dual of a Lie algebroid carries a linear Poisson bracket that encodes the algebroid: {ℓₛ,ℓₜ} = ℓ\_\[s,t\], {ℓₛ,f} = ρ(s)f and {f,g} = 0, where ℓₛ is evaluation on the section s, ρ is the anchor, and f, g are base functions pulled back to the dual.

**Problem.** Fix a vector bundle map between two Lie algebroids over the identity of their common base. It preserves the section bracket and anchor exactly when its dual preserves Poisson brackets by pullback.

**How the definition helps.** The brackets of linear and base functions record exactly the section bracket and the anchor (our own proof). Pullback along the dual map sends each ℓₛ to the linear function of the image section and fixes base functions. These functions give local coordinates, so checking their brackets suffices.

**Paper or page:** [Comomentum sections and Poisson maps in Hamiltonian Lie algebroids](https://arxiv.org/abs/2405.03533v2). It says: “the dual map ψ: A₂∗ → A₁∗ is a Poisson map.”

**Sources:** none listed. No primary source with a working link was found.

### Gauge transformations by closed 2-forms keep the symplectic leaves

**Remember:** Shift every covector by B and the tangent directions stay put.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 53D18. arXiv math.SG, math.DG. Level 4: research.

**Definition.** For a closed 2-form B, the gauge transformation replaces each pair (v, α) of a Dirac structure by (v, α + B(v, −)). It preserves the Courant bracket, the bracket on pairs of vector fields and forms used for Dirac structures, because dB = 0. The quoted source uses the opposite sign for B.

**Problem.** Let π be Poisson, B closed, and suppose the map α ↦ α + B(π♯α, −) is invertible, where π♯α = π(α, −). Then the gauge transform of π is again Poisson, with the same leaves, and each leaf form gains the pullback of B.

**How the definition helps.** On Dirac structures the transformation keeps the tangent parts, so the leaves stay the same and each leaf form gains B (our own). The bivector formula, π♯ composed with the inverse of that map, hides this; the work sits in Courant invariance under closed B (our own). The invertibility condition is needed: B = −ω on a symplectic surface gives TM ⊕ 0, the graph of no bivector (our own).

**Paper or page:** [G-Invariant Deformations of Almost-Coupling Poisson Structures](https://arxiv.org/abs/1610.09898v2). It says: “If the endomorphism (Id − B♭ ∘ Π♮): T\*M → T\*M is invertible, then the Dirac structure τ<sub>B</sub>(GraphΠ) is the graph of the Poisson tensor τ<sub>B</sub>(Π)”

**Sources:**

- [P. Ševera, A. Weinstein, Poisson geometry with a 3-form background, Prog. Theor. Phys. Suppl. 144 (2001) 145–154](https://doi.org/10.1143/PTPS.144.145)

### Isotropy and involutivity make every Dirac structure a Lie algebroid

**Remember:** On an isotropic subbundle the Courant bracket's defects all vanish.

*Rules out counterexamples.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.DG, math.SG. Level 4: research.

**Definition.** A Dirac structure on M is a subbundle of TM ⊕ T\*M, maximal isotropic for ⟨(v, α), (w, β)⟩ = α(w) + β(v). It must also be closed under the Courant bracket. This bracket on pairs combines the Lie bracket of vector fields with Lie derivatives of forms.

**Problem.** Every Dirac structure is a Lie algebroid, with the restricted Courant bracket and the projection to TM as anchor. So M splits into leaves, each with a closed 2-form; for a Poisson graph these are the symplectic leaves.

**How the definition helps.** The Courant bracket fails the Jacobi identity only by a term built from the pairing, and that term vanishes on isotropic subbundles (our own). Without isotropy the claim fails: all of TM ⊕ T\*M is closed under the Courant bracket, which fails Jacobi there (our own). The leaves are the orbits of the anchor, with leaf form ω(v, w) = α(w) for (v, α) in the Dirac structure (our own).

**Paper or page:** [Comomentum sections and Poisson maps in Hamiltonian Lie algebroids](https://arxiv.org/abs/2405.03533v2). It says: “A Dirac structure L is a Lie algebroid.”

**Sources:**

- [T. J. Courant, Dirac manifolds, Trans. Amer. Math. Soc. 319 (1990) 631–661](https://doi.org/10.1090/S0002-9947-1990-0998124-1)

### Leafwise nondegeneracy makes tangential Poisson cohomology foliated de Rham cohomology

**Remember:** A regular Poisson structure is a foliation whose leaves are symplectic.

*True by definition. Confidence: medium.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 53C12. arXiv math.SG, math.DG. Level 4: research.

**Definition.** A regular Poisson structure is one of constant rank; equivalently, it is a foliation with a closed leafwise 2-form that is nondegenerate on each leaf. Its tangential Poisson cohomology uses only multivector fields tangent to the leaves.

**Problem.** For a regular Poisson manifold, tangential Poisson cohomology in degree one is isomorphic to the foliated de Rham cohomology of its symplectic foliation. The same holds in every degree (our own).

**How the definition helps.** Leafwise nondegeneracy makes π♯ an isomorphism from the leafwise cotangent bundle to the leafwise tangent bundle that respects brackets, in every degree (our own). So it identifies the two complexes, and the leafwise symplectic forms drop out of the answer. The constant-rank definition hides the leaf forms; the work sits in the check that π♯ turns the foliated differential into the Poisson differential (our own).

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “This uniquely determines a regular Poisson structure on M by requiring the symplectic leaves of π to be the leaves S of F equipped with the induced symplectic form ω\|S.”

**Paper or page:** [Geometrical Aspects of the Hamiltonization Problem of Dynamical Systems](https://arxiv.org/abs/2103.00458v2). It says: “The tangential Poisson cohomology in degree one of a regular Poisson manifold is isomorphic to the foliated de Rham cohomology of its symplectic foliation and, in particular, independent of the leaf-wise symplectic form.”

**Sources:**

- [Geometrical Aspects of the Hamiltonization Problem of Dynamical Systems, arXiv:2103.00458v2](https://arxiv.org/abs/2103.00458v2)

### Lie algebroid cohomology lets one van Est theorem cover groups and manifolds

**Remember:** One complex, many cohomologies: de Rham, Lie algebra, Poisson.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 58H05. arXiv math.DG, math.SG. Level 4: research.

**Definition.** A Lie algebroid is a vector bundle with a Lie bracket on its sections and a bundle map to the tangent bundle, the anchor. The two obey a Leibniz rule. Its cohomology comes from the Chevalley–Eilenberg complex of alternating forms on the bundle.

**Problem.** Suppose the source fibres of a Lie groupoid, the sets of arrows with a fixed starting point, are homologically n-connected. Then the van Est map, from differentiable groupoid cohomology to Lie algebroid cohomology, is an isomorphism up to degree n (Crainic).

**How the definition helps.** Lie algebroid cohomology is Lie algebra cohomology for a Lie group and de Rham cohomology for a manifold, so one statement covers both (our own). For a Lie group the theorem is the classical van Est theorem (our own). The work went into Crainic's comparison of the two complexes along the source fibres (our own).

**Wikipedia:** [Lie algebroid](https://en.wikipedia.org/wiki/Lie_algebroid). It says: “Moreover, if the s-fibres of G are homologically n-connected, then VEᵏ is an isomorphism for k ≤ n, and is injective for k = n+1.”

**Sources:**

- [M. Crainic, Differentiable and algebroid cohomology, van Est isomorphisms, and characteristic classes, Comment. Math. Helv. 78 (2003) 681–721](https://doi.org/10.1007/s00014-001-0766-9)

### Lie algebroids as square-zero derivations make all axioms one equation

**Remember:** One square-zero operator holds the anchor, the bracket and Jacobi.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 58A50. arXiv math.DG. Level 4: research.

**Definition.** A Lie algebroid structure on a vector bundle E is a derivation d of degree one with d² = 0. It acts on the algebra of sections of the exterior powers of E\*.

**Problem.** An anchor and a bracket with the Leibniz rule form a Lie algebroid exactly when their Chevalley–Eilenberg operator squares to zero (Vaintrob). So Lie algebroids are degree-one vector fields Q with Q² = 0 on the graded manifold whose functions are these forms.

**How the definition helps.** The anchor fixes d on functions and the bracket fixes it in degree one; the derivation rule builds in the Leibniz rule (our own). Then d² = 0 on functions says the anchor preserves brackets, and d² = 0 in degree one is the Jacobi identity (our own). So Lie algebroid cohomology needs no separate check that d² = 0 (our own).

**nLab:** [Lie algebroid](https://ncatlab.org/nlab/show/Lie+algebroid). It says: “vector bundle E → X equipped with a degree +1 derivation d on the free (over C∞(X)) graded-commutative algebra ∧•C∞(X) Γ(E)\* (where the dual is over C∞), such that d² = 0.”

**Sources:**

- [A. Yu. Vaintrob, Lie algebroids and homological vector fields, Russian Math. Surveys 52 (1997) 428–429](https://doi.org/10.1070/RM1997v052n02ABEH001802)

### Multiplicative forms reverse under inversion

**Remember:** The form adds over products, so an arrow and its inverse cancel.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 4: research.

**Definition.** A symplectic groupoid is a groupoid whose arrow manifold carries a multiplicative symplectic form ω. Multiplicative means that on composable pairs, ω pulled back by multiplication is the sum of ω pulled back from each factor: m\*ω = pr₁\*ω + pr₂\*ω.

**Problem.** Inversion in a symplectic groupoid pulls back the symplectic form to its negative.

**How the definition helps.** Multiplicativity makes ω add over products, and ω vanishes on the units (our own proof). Applying the identity to a unit composed with itself gives u\*ω = 2u\*ω, so u\*ω = 0. Pulling the identity back along each arrow paired with its inverse gives ω + inv\*ω = 0, because the product is a unit.

**nLab:** [symplectic groupoid](https://ncatlab.org/nlab/show/symplectic+groupoid). It says: “multiplicative in that the alternating sum of its canonical pullbacks to the space X₂ of composable morphisms vanishes”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicativity makes the base of a symplectic groupoid Poisson

**Remember:** Additive forms force the source and target fibres to be orthogonal.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 22A22. arXiv math.SG, math.DG. Level 4: research.

**Definition.** A symplectic groupoid is a Lie groupoid with a symplectic form on its arrows that is multiplicative. On composable pairs, its pullback by multiplication is the sum of its pullbacks by the two projections. An anti-Poisson map reverses the sign of brackets.

**Problem.** The base of a symplectic groupoid has a unique Poisson structure making the source map Poisson and the target map anti-Poisson. The groupoid's Lie algebroid, its infinitesimal version, is then the cotangent algebroid of this structure.

**How the definition helps.** Multiplicativity forces each target fibre to be the ω-orthogonal complement of the source fibre through the same point (our own). Then target pullbacks are locally the functions commuting with all source pullbacks, and by Jacobi this set is closed under brackets (our own). Hence the bracket descends; authors with the opposite sign convention swap source and target (our own).

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “base space of any symplectic groupoid admits a unique Poisson structure π such that the source map s: (𝒢, ω) → (M,π) and the target map t: (𝒢, ω) → (M,π) are, respectively, a Poisson map and an anti-Poisson map.”

**Sources:**

- [A. Weinstein, Symplectic groupoids and Poisson manifolds, Bull. Amer. Math. Soc. 16 (1987) 101–104](https://doi.org/10.1090/S0273-0979-1987-15473-5)

### Paths modulo homotopy reduce integrability of Lie algebroids to smoothness

**Remember:** Build the groupoid from paths first; worry about smoothness later.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 58H05, 22A22. arXiv math.DG, math.SG. Level 4: research.

**Definition.** The Weinstein groupoid of a Lie algebroid A is the set of A-paths modulo A-homotopy, with concatenation as product. An A-path is a path in A whose anchor image is the velocity of its base path. The monodromy group at x is the set of central elements v of the anchor's kernel at x whose constant A-path is A-homotopic to zero.

**Problem.** A Lie algebroid is integrable, that is, the Lie algebroid of a Lie groupoid, exactly when its monodromy groups are uniformly discrete (Crainic–Fernandes). Uniformly discrete means that, locally on the base, the nonzero monodromy elements stay a fixed distance from zero.

**How the definition helps.** The quotient is always a source-simply-connected topological groupoid, so the only question is whether it is smooth; when it is, it is the source-simply-connected integration. Crainic and Fernandes measure smoothness by the monodromy groups, which come from second homotopy groups of the orbits (our own). The work sits in their analysis of A-homotopies on the Banach manifold of A-paths (our own).

**Wikipedia:** [Lie algebroid](https://en.wikipedia.org/wiki/Lie_algebroid). It says: “Indeed, one can show that G(A) is an s-simply connected topological groupoid, with the multiplication induced by the concatenation of paths. Moreover, if A is integrable, G(A) admits a smooth structure such that it coincides with the unique s-simply connected Lie groupoid integrating A. Accordingly, the only obstruction to integrability lies in the smoothness of G(A). This approach led to the introduction of objects called monodromy groups, associated to any Lie algebroid, and to the following fundamental result: A Lie algebroid is integrable if and only if its monodromy groups are uniformly discrete.”

**Sources:**

- [M. Crainic, R. L. Fernandes, Integrability of Lie brackets, Ann. of Math. 157 (2003) 575–620](https://doi.org/10.4007/annals.2003.157.575)

### Poisson transversals inherit Poisson structures and give Weinstein splitting

**Remember:** Cut across the leaves so that each cut is still symplectic.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG, math.DG. Level 4: research.

**Definition.** A Poisson transversal is a submanifold that meets every symplectic leaf transversally, with each intersection a symplectic submanifold of that leaf.

**Problem.** A Poisson transversal inherits a canonical Poisson structure. Near the transversal, π is fixed up to isomorphism by this structure and the normal bundle, a symplectic vector bundle (Frejlich–Mărcuț).

**How the definition helps.** The symplectic condition lets each leaf form restrict to a nondegenerate form on each cut, so the induced bracket exists (our own). One normal form theorem then covers all Poisson transversals at once (our own). Weinstein splitting is the case of a transversal of complementary dimension through one point, where the neighbourhood is a product (our own).

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “It follows that any Poisson transversal X ⊆ (M,π) inherits a canonical Poisson structure π<sub>X</sub> from π.”

**Sources:**

- [P. Frejlich, I. Mărcuţ, The normal form theorem around Poisson transversals, Pacific J. Math. 287 (2017) 371–391](https://doi.org/10.2140/pjm.2017.287.371)
- [A. Weinstein, The local structure of Poisson manifolds, J. Differential Geom. 18 (1983) 523–557](https://doi.org/10.4310/jdg/1214437787)

### Poisson transversals pull back under Poisson maps, unlike Poisson submanifolds

**Remember:** Transversals ask for symplectic cuts, and cuts survive pullback.

*Rules out counterexamples. Confidence: medium.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG, math.DG. Level 4: research.

**Definition.** A Poisson transversal is a submanifold that meets every symplectic leaf transversally, with each intersection a symplectic submanifold of that leaf.

**Problem.** If a Poisson map is transverse to a Poisson transversal of its target, the preimage is a Poisson transversal of the source (Frejlich–Mărcuț). The same statement for Poisson submanifolds is false.

**How the definition helps.** A Poisson map carries π♯ of conormal covectors to π♯ on the target, so the transversal's splitting pulls back to the preimage (our own). For Poisson submanifolds the statement fails, as the quote says. Project the symplectic plane onto a line with zero bracket: the point 0 is a Poisson submanifold, but its preimage line is not (our own).

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “if Φ: (M,π<sub>M</sub>) → (N,π<sub>N</sub>) is a Poisson map transverse to a Poisson submanifold Q ⊆ N, the submanifold Φ⁻¹(Q) ⊆ M is not necessarily Poisson. In order to overcome this problem, one can use the notion of Poisson transversals”

**Sources:**

- [P. Frejlich, I. Mărcuţ, The normal form theorem around Poisson transversals, Pacific J. Math. 287 (2017) 371–391](https://doi.org/10.2140/pjm.2017.287.371)

### Spherical periods decide whether a twisted tangent algebroid integrates

**Remember:** Spheres measure the twist, and dense measurements block integration.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 58H05. arXiv math.DG, math.SG. Level 4: research.

**Definition.** For a closed 2-form ω on a connected manifold M, the Lie algebroid TM ⊕ ℝ has a bracket twisted by ω. Its anchor is the projection to TM. Its monodromy group is the group of spherical periods of ω, its integrals over spheres.

**Problem.** This Lie algebroid is integrable, the Lie algebroid of a Lie groupoid, exactly when the spherical periods of ω form a discrete subgroup of ℝ. On S² × S² with ω the first unit area form plus √2 times the second, the periods ℤ + √2ℤ are dense.

**How the definition helps.** The anchor is onto, and for such algebroids Crainic and Fernandes show integrability is equivalent to discrete monodromy groups (our own). Here the monodromy group is the period group, so the test is on one subgroup of ℝ (our own). The S² × S² example is an explicit failure of Lie's third theorem for algebroids (our own).

**Wikipedia:** [Lie algebroid](https://en.wikipedia.org/wiki/Lie_algebroid). It says: “a careful analysis shows that this happens if and only if the subgroup Λ ⊆ ℝ is a lattice, i.e. it is discrete. An explicit example where such condition fails is given by taking M = S² × S²”

**Sources:**

- [M. Crainic, R. L. Fernandes, Integrability of Lie brackets, Ann. of Math. 157 (2003) 575–620](https://doi.org/10.4007/annals.2003.157.575)

### The isotropy Lie algebra at a zero makes the linearization problem statable

**Remember:** At a zero, the bracket's first-order part is a Lie algebra.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG, math.DG. Level 4: research.

**Definition.** Let x be a zero of π. The isotropy Lie algebra at x is the cotangent space at x with bracket \[df, dg\] = d{f, g} at x. By duality it gives a linear Poisson structure on the tangent space at x.

**Problem.** Near a zero of π whose isotropy Lie algebra is semisimple of compact type, π is isomorphic to this linear Poisson structure (Conn). For the noncompact algebra sl(2, ℝ) there are smooth Poisson structures that are not linearizable (Weinstein).

**How the definition helps.** At a zero, d{f, g} depends only on df and dg, so π has an intrinsic linear model (our own). The definition only frames the question; Conn's proof needs hard analysis with the Nash–Moser theorem. The sl(2, ℝ) case shows that semisimplicity alone is not enough in the smooth setting.

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “If the isotropy Lie algebra 𝔤ₓ is semisimple and compact, then (M, π) is linearisable around x. In the previous counterexample, indeed, 𝔰𝔩(2,ℝ) is semisimple but not compact. The original proof of Conn involves several estimates from analysis in order to apply the Nash-Moser theorem”

**Sources:**

- [J. F. Conn, Normal forms for smooth Poisson structures, Ann. of Math. 121 (1985) 565–593](https://doi.org/10.2307/1971210)
- [A. Weinstein, The local structure of Poisson manifolds, J. Differential Geom. 18 (1983) 523–557](https://doi.org/10.4310/jdg/1214437787)

### Transversality excludes higher-order zeros, so log-symplectic bivectors invert to b-forms

**Remember:** Simple zeros of πⁿ become simple poles of ω.

*Rules out counterexamples. Confidence: medium.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 53D05. arXiv math.SG. Level 4: research.

**Definition.** A log-symplectic structure on a manifold of dimension 2n is a Poisson bivector π whose top power πⁿ meets the zero section transversally. Then the zero set Z of πⁿ is a smooth hypersurface. Along Z the rank of π drops by two, and πⁿ vanishes only to first order.

**Problem.** Log-symplectic bivectors correspond one-to-one to b-symplectic forms. The inverse of π is a closed nondegenerate 2-form on the b-tangent bundle of Z.

**How the definition helps.** Transversality makes πⁿ vanish to first order on Z, so the inverse of π has only a simple pole, as b-forms allow (our own). The condition excludes x² ∂x ∧ ∂y on ℝ², whose inverse x⁻² dx ∧ dy has a double pole (our own). Guillemin, Miranda and Pires prove that the inverse extends as a smooth b-form (our own).

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “called log-symplectic or b-symplectic, which have a "logarithmic singularity'' concentrated along a submanifold Z ⊆ M of codimension 1 (also called the singular locus of π), but are nondegenerate outside of Z.”

**Sources:**

- [V. Guillemin, E. Miranda and A. R. Pires, Symplectic and Poisson geometry on b-manifolds, Adv. Math. 264 (2014) 864–896](https://doi.org/10.1016/j.aim.2014.07.032)

### Unimodularity gives Poincaré duality between Poisson cohomology and homology

**Remember:** Unimodular means some volume survives every Hamiltonian flow unchanged.

*Rules out counterexamples. Confidence: medium.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 17B63. arXiv math.SG, math.DG. Level 4: research.

**Definition.** A Poisson manifold is unimodular when its modular class vanishes, that is, when some volume form is preserved by every Hamiltonian flow.

**Problem.** On an oriented unimodular Poisson manifold of dimension n, Poisson cohomology in degree k is isomorphic to Poisson homology in degree n − k. Poisson homology is the homology of forms under the boundary \[d, contraction with π\].

**How the definition helps.** Contracting with an invariant volume form turns the Poisson differential into the Poisson homology boundary (our own). For a general volume form a term from the modular field appears, and unimodularity removes it (our own). Without unimodularity duality fails: for {x, y} = y on the plane, H⁰ is the constants but H₂ is zero (our own).

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “For instance, for orientable unimodular Poisson manifolds, Poisson homology turns out to be isomorphic to Poisson cohomology: this was proved independently by Xu and Evans-Lu-Weinstein.”

**Sources:**

- [P. Xu, Gerstenhaber algebras and BV-algebras in Poisson geometry, Comm. Math. Phys. 200 (1999) 545–560](https://doi.org/10.1007/s002200050540)
- [S. Evens, J.-H. Lu, A. Weinstein, Transverse measures, the modular class and a cohomology pairing for Lie algebroids, Quart. J. Math. 50 (1999) 417–436](https://doi.org/10.1093/qjmath/50.200.417)

### As graded symplectic manifolds, Courant algebroids have Dirac structures as Lagrangian submanifolds

**Remember:** Courant algebroids are symplectic manifolds in disguise, Dirac structures their Lagrangians.

*True by definition. Confidence: medium.* MSC 53D18 (Generalized geometries (à la Hitchin)), 58A50. arXiv math.DG, math.SG. Level 4: research.

**Definition.** Roytenberg describes a Courant algebroid as a degree-2 graded manifold with a symplectic form and a degree-3 function Θ with {Θ,Θ} = 0. A graded manifold is a space whose local coordinates have integer degrees, here 0, 1 and 2. Sections are degree-1 functions, the pairing is the Poisson bracket, and the Courant bracket is the derived bracket {{a,Θ},b}.

**Problem.** The Dirac structures of a Courant algebroid are exactly the Lagrangian graded submanifolds over the base to which the vector field {Θ, −} is tangent. All the Courant algebroid axioms follow from the single equation {Θ,Θ} = 0.

**How the definition helps.** In the graded picture the Courant axioms become the single equation {Θ,Θ} = 0, and maximal isotropic subbundles become Lagrangian submanifolds (our own). Closure under the derived bracket then means that the vector field {Θ, −} is tangent to the Lagrangian submanifold (our own). The work is Roytenberg's theorem that these graded manifolds are the same as Courant algebroids (our own).

**nLab:** [Courant algebroid](https://ncatlab.org/nlab/show/Courant+algebroid). It says: “The Lagrangian dg-submanifolds of a Courant Lie 2-algebroid corespond to its Dirac structures.”

**Sources:**

- [D. Roytenberg, On the structure of graded symplectic supermanifolds and Courant algebroids, Contemp. Math. 315 (2002) 169–185](https://doi.org/10.1090/conm/315/05479)

### Closed B-fields act as symmetries of the Courant bracket

**Remember:** A closed 2-form shears TM ⊕ T\*M without changing the bracket.

*Makes the theorem clean to state or prove.* MSC 53D18 (Generalized geometries (à la Hitchin)). arXiv math.DG, math.SG. Level 4: research.

**Definition.** A B-field transform is the bundle map X + ξ ↦ X + ξ + ι(X)B of TM ⊕ T\*M, given by a 2-form B. It always preserves the pairing. It preserves the Courant bracket exactly when dB = 0.

**Problem.** For a closed 2-form B, the B-field transform carries Dirac structures to Dirac structures and generalized complex structures to generalized complex structures. It keeps their type, the codimension of their projection to the tangent bundle.

**How the definition helps.** Integrability is closure under the Courant bracket, and a closed B-field transform is an automorphism of that bracket, so integrability is kept (our own). The only computation is that the bracket changes by the term ι(X)ι(Y)dB, which is zero when B is closed (our own). Closed 2-forms are not symmetries of ordinary complex or symplectic structures, so the statement needs the generalized definitions (our own).

**Wikipedia:** [Courant bracket](https://en.wikipedia.org/wiki/Courant_bracket). It says: “It also enjoys an additional symmetry under the vector bundle automorphism X+ξ ↦ X+ξ+i(X)α where α is a closed (p+1)-form.”

**Sources:**

- [M. Gualtieri, Generalized complex geometry, Ann. of Math. 174 (2011) 75–123](https://doi.org/10.4007/annals.2011.174.1.3)

### Counting B-field shifts as equivalences gives a generalized Darboux theorem

**Remember:** Allow closed B-fields, and every regular point looks standard.

*Rules out counterexamples. Confidence: medium.* MSC 53D18 (Generalized geometries (à la Hitchin)). arXiv math.DG. Level 4: research.

**Definition.** Call two generalized complex structures equivalent when a diffeomorphism followed by a B-field transform by a closed 2-form carries one to the other. A regular point is a point near which the type is constant.

**Problem.** Near a regular point of type k, a generalized complex structure is equivalent to a standard model. This model is the product of the complex structure on ℂᵏ and the standard symplectic structure on ℝ²ⁿ⁻²ᵏ.

**How the definition helps.** Closed B-field transforms are symmetries of the Courant bracket, so the definition of equivalence can include them (our own). Without them the theorem is false, because no diffeomorphism removes a nonzero closed B from the type-zero pure spinor exp(B+iω) (our own). The rest of the proof combines the Darboux and Newlander–Nirenberg theorems for a Poisson structure inside 𝒥 (our own).

**Wikipedia:** [Generalized complex structure](https://en.wikipedia.org/wiki/Generalized_complex_structure). It says: “Every regular point in a generalized complex manifold has an open neighborhood which, after a diffeomorphism and shift of the B-field, has the same generalized complex structure as the Cartesian product of the complex vector space ℂᵏ”

**Sources:**

- [M. Gualtieri, Generalized complex geometry, Ann. of Math. 174 (2011) 75–123](https://doi.org/10.4007/annals.2011.174.1.3)

### Dirac pullback gives every suitable submanifold of a Poisson manifold a structure

**Remember:** Poisson structures cannot be restricted; Dirac structures can be pulled back.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D18 (Generalized geometries (à la Hitchin)), 53D17. arXiv math.SG. Level 4: research.

**Definition.** The pullback of a Dirac structure L to a submanifold N keeps each X + ξ in L with X tangent to N. It then restricts ξ to TN, and the result is maximal isotropic at every point. A Poisson bivector, by contrast, has no restriction to a general submanifold.

**Problem.** Let N be a submanifold of a Poisson manifold (M,π), where the covectors that vanish on TN and are killed by π have constant rank. Then N inherits a Dirac structure.

**How the definition helps.** Pullback keeps maximal isotropy, so the rank condition is only needed to make the pullback a smooth subbundle (our own). A lemma of Dirac geometry shows that a smooth pullback of a Dirac structure is again closed under the Courant bracket (our own). For a symplectic manifold the condition always holds, and the pullback is the graph of the restricted 2-form (our own).

**Wikipedia:** [Dirac structure](https://en.wikipedia.org/wiki/Dirac_structure). It says: “Any submanifold of a Poisson manifold induces a Dirac structure.”

**Sources:**

- [T. Courant, Dirac manifolds, Trans. Amer. Math. Soc. 319 (1990) 631–661](https://doi.org/10.1090/S0002-9947-1990-0998124-1)

### Exact Courant algebroids are classified by one degree-three cohomology class

**Remember:** Every exact Courant algebroid is TM ⊕ T\*M twisted by one class.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D18 (Generalized geometries (à la Hitchin)), 53D17. arXiv math.DG, math.SG. Level 4: research.

**Definition.** An exact Courant algebroid over M is a Courant algebroid E with an exact sequence 0 → T\*M → E → TM → 0. A Courant algebroid is a bundle with a pairing, a bracket and an anchor map to TM that obey the axioms of TM ⊕ T\*M. In the sequence the map to TM is the anchor.

**Problem.** Every exact Courant algebroid is isomorphic to TM ⊕ T\*M with the Courant bracket twisted by a closed 3-form H. Two of them are isomorphic by a map over the identity of M exactly when their classes \[H\] in H³(M; ℝ) are equal.

**How the definition helps.** Exactness leaves only one choice, an isotropic splitting of the sequence, and such splittings exist by a partition of unity argument (our own). In a splitting the bracket is twisted by a closed 3-form H, which measures how far the splitting is from bracket-closed (our own). Two splittings differ by a 2-form B, which changes H to H + dB, as the quote says, so only \[H\] is well defined.

**Wikipedia:** [Courant bracket](https://en.wikipedia.org/wiki/Courant_bracket). It says: “It remains antisymmetric and invariant under the addition of the interior product with a (p+1)-form B. When B is not closed then this invariance is still preserved if one adds dB to the final H.”

**Sources:**

- [P. Ševera and A. Weinstein, Poisson geometry with a 3-form background, Prog. Theor. Phys. Suppl. 144 (2001) 145–154](https://doi.org/10.1143/ptps.144.145)

### Generalized almost complex structures exist exactly when almost complex structures exist

**Remember:** The doubled tangent bundle hides two copies of TM.

*True by definition. Confidence: medium.* MSC 53D18 (Generalized geometries (à la Hitchin)), 53C15. arXiv math.DG. Level 4: research.

**Definition.** A generalized almost complex structure on a manifold M of dimension 2n is a map 𝒥 of TM ⊕ T\*M with 𝒥² = −1. It must preserve the pairing, which has signature (2n, 2n). Equivalently, it is a reduction of the structure group of TM ⊕ T\*M from O(2n,2n) to U(n,n).

**Problem.** A manifold has a generalized almost complex structure exactly when it has an almost complex structure. In particular, it must be even-dimensional.

**How the definition helps.** A reduction to U(n,n) reduces further to its maximal compact subgroup U(n) × U(n), since their quotient is contractible (our own). This splits TM ⊕ T\*M into two complex subbundles, each isomorphic to TM by projection, so TM is almost complex (our own). Conversely J gives 𝒥(J), and with 𝒥 seen only as an endomorphism the compact reduction must be built by hand (our own).

**nLab:** [generalized complex geometry](https://ncatlab.org/nlab/show/generalized+complex+geometry). It says: “A generalized complex structure on V ⊕ V\* is equivalently a reduction of the structure group along the inclusion U(n,n) ↪︎ O(2n,2n)”

**Sources:**

- [M. Gualtieri, Generalized complex geometry, Ann. of Math. 174 (2011) 75–123](https://doi.org/10.4007/annals.2011.174.1.3)

### Generalized complex structures contain complex and symplectic structures as special cases

**Remember:** One bracket condition hides both dω = 0 and integrability of J.

*Makes the theorem clean to state or prove.* MSC 53D18 (Generalized geometries (à la Hitchin)), 53D05. arXiv math.DG, math.SG. Level 4: research.

**Definition.** A generalized complex structure is a map 𝒥 of TM ⊕ T\*M with 𝒥² = −1 that preserves the pairing. Its +i eigenbundle L, a subbundle of the complexified bundle, must be closed under the Courant bracket. So integrability is one bracket condition on L, whatever kind of structure 𝒥 comes from.

**Problem.** A nondegenerate 2-form ω gives a generalized complex structure 𝒥(ω) exactly when dω = 0. An almost complex structure J gives a generalized complex structure 𝒥(J) exactly when J is integrable.

**How the definition helps.** For both examples the classical integrability condition is the Courant condition on L (our own). The +i eigenbundle of 𝒥(ω) is a graph of a multiple of iω, which is bracket-closed exactly when dω = 0 (our own). For 𝒥(J), closure means that the (0,1) vectors are closed under the Lie bracket, which is integrability of J (our own).

**nLab:** [generalized complex geometry](https://ncatlab.org/nlab/show/generalized+complex+geometry). It says: “The following shows that this is indeed a joint generalization of complex and symplectic structures.”

**Wikipedia:** [Generalized complex structure](https://en.wikipedia.org/wiki/Generalized_complex_structure). It says: “Thus symplectic manifolds are also generalized complex manifolds.”

**Sources:**

- [M. Gualtieri, Generalized complex geometry, Ann. of Math. 174 (2011) 75–123](https://doi.org/10.4007/annals.2011.174.1.3)
- [N. Hitchin, Generalized Calabi–Yau manifolds, Q. J. Math. 54 (2003) 281–308](https://doi.org/10.1093/qmath/hag025)

### Generalized Kähler structures repackage bihermitian geometry as two commuting structures

**Remember:** Two commuting generalized complex structures make one generalized metric.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D18 (Generalized geometries (à la Hitchin)), 53C55. arXiv math.DG. Level 4: research.

**Definition.** A generalized Kähler structure is a pair of commuting generalized complex structures 𝒥₁ and 𝒥₂. The product −𝒥₁𝒥₂ must be a positive definite metric on TM ⊕ T\*M.

**Problem.** A generalized Kähler structure is the same as a bihermitian structure. This is a metric g, a 2-form b and two g-orthogonal integrable complex structures that obey the Gates–Hull–Roček torsion equations involving db.

**How the definition helps.** The two Courant integrability conditions become the torsion equations of Gates, Hull and Roček, by Gualtieri's theorem (our own). The metric −𝒥₁𝒥₂ splits TM ⊕ T\*M into two eigenbundles, the graphs of b + g and b − g over TM (our own). The structure 𝒥₁ preserves both, and its projections from them to TM are the two complex structures (our own).

**Wikipedia:** [Generalized complex structure](https://en.wikipedia.org/wiki/Generalized_complex_structure). It says: “Generalized Kähler manifolds, and their twisted counterparts, are equivalent to the bihermitian manifolds discovered by Sylvester James Gates, Chris Hull and Martin Roček in the context of 2-dimensional supersymmetric quantum field theories in 1984.”

**Sources:**

- [M. Gualtieri, Generalized Kähler geometry, Comm. Math. Phys. 331 (2014) 297–331](https://doi.org/10.1007/s00220-014-1926-z)
- [S. J. Gates, C. M. Hull and M. Roček, Twisted multiplets and new supersymmetric non-linear σ-models, Nuclear Phys. B 248 (1984) 157–186](https://doi.org/10.1016/0550-3213(84)90592-3)

### Pure spinors make the type jump only by even numbers

**Remember:** A pure spinor is either even or odd, never both.

*True by definition.* MSC 53D18 (Generalized geometries (à la Hitchin)). arXiv math.DG. Level 4: research.

**Definition.** A generalized almost complex structure has a canonical line bundle of pure spinors. These are complex forms ρ killed by the +i eigenbundle under (X+ξ)·ρ = ι(X)ρ + ξ ∧ ρ. Locally ρ = exp(B+iω) ∧ θ₁ ∧ … ∧ θₖ with complex 1-forms θᵢ, and the type is k.

**Problem.** The type of a generalized complex structure can change only by even integers. On a connected 4-manifold the type is either 1 everywhere or takes only the values 0 and 2.

**How the definition helps.** By Chevalley's theorem a pure spinor is even or odd, and a continuous nonzero generator cannot switch parity (our own). The lowest-degree part of ρ is θ₁ ∧ … ∧ θₖ, so the type has the parity of ρ (our own). With the type defined as a codimension this parity is hidden, and the work is Chevalley's theorem and the local form of ρ (our own).

**Wikipedia:** [Generalized complex structure](https://en.wikipedia.org/wiki/Generalized_complex_structure). It says: “The type of a generalized almost complex structure is in general not constant, it can jump by any even integer.”

**Sources:**

- [M. Gualtieri, Generalized complex geometry, Ann. of Math. 174 (2011) 75–123](https://doi.org/10.4007/annals.2011.174.1.3)

### Stable generalized complex structures are symplectic forms on a Lie algebroid

**Remember:** Transverse vanishing turns a degenerating structure into a symplectic one.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D18 (Generalized geometries (à la Hitchin)), 53D17. arXiv math.DG, math.SG. Level 4: research.

**Definition.** A generalized complex structure is stable when the degree-zero part of its pure spinor vanishes transversally. Its zero set D then has real codimension two. The elliptic tangent bundle is the Lie algebroid of vector fields that preserve the ideal generated by r², the square of the distance to D.

**Problem.** Stable generalized complex structures, up to diffeomorphisms and closed B-field transforms, correspond one-to-one to certain symplectic forms on the elliptic tangent bundle. These forms satisfy a co-orientation condition and a few residue conditions along D.

**How the definition helps.** Transverse vanishing makes the Poisson bivector of the structure invertible as a map of the elliptic tangent bundle (our own). The inverse is the symplectic form, as the paper states. Moser's argument, normal forms and surgeries then work on this Lie algebroid (our own).

**Paper or page:** [Non-principal T-duality, generalized complex geometry and blow-ups](https://arxiv.org/abs/2211.17173v3). It says: “There is a one-to-one correspondence between gauge equivalence classes \[(𝕁,H)\] of stable generalized complex structures on M and symplectic forms ω ∈ Ω²(𝒜\_\|D\|) on the elliptic tangent bundle with D\[1\] co-orientable and satisfying the following equations”

**Sources:**

- [G. R. Cavalcanti and A. Witte, Non-principal T-duality, generalized complex geometry and blow-ups (arXiv 2211.17173)](https://arxiv.org/abs/2211.17173v3)

### Stable three-forms turn complex structures into critical points of a volume functional

**Remember:** On six-manifolds, a generic 3-form already knows a complex structure.

*Makes the theorem clean to state or prove.* MSC 53D18 (Generalized geometries (à la Hitchin)), 53C15. arXiv math.DG. Level 4: research.

**Definition.** A 3-form on a 6-manifold is stable when it lies in an open orbit of GL(6,ℝ). A stable 3-form Ω with λ(Ω) &lt; 0 determines an almost complex structure, a volume form and a second 3-form Ω̂. Hitchin's functional V(Ω) is the total volume.

**Problem.** Let Ω be a closed stable 3-form with λ(Ω) &lt; 0 on a compact 6-manifold. Then Ω is critical for V in its cohomology class exactly when its almost complex structure is integrable and Ω + iΩ̂ is holomorphic.

**How the definition helps.** Stability makes Ω̂ depend smoothly on Ω, and the first variation of V along dβ is a multiple of ∫ Ω̂ ∧ dβ (our own). This vanishes for all β exactly when dΩ̂ = 0 (our own). Then the nowhere-zero (3,0)-form Ω + iΩ̂ is closed, which is equivalent to integrability (our own).

**nLab:** [Hitchin functional](https://ncatlab.org/nlab/show/Hitchin+functional). It says: “such that λ(Ω) &lt; 0 is a critical point of the above functional precisely if there is the structure of a complex manifold on X such that Ω is the real part of a non-vanishing holomorphic 3-form”

**Sources:**

- [N. Hitchin, The geometry of three-forms in six dimensions, J. Differential Geom. 55 (2000) 547–576](https://doi.org/10.4310/jdg/1090341263)

### T-duality becomes an isomorphism of Courant algebroids that transports generalized structures

**Remember:** Swap the circle and the flux; keep the Courant algebroid.

*True by definition.* MSC 53D18 (Generalized geometries (à la Hitchin)), 81T30. arXiv math.DG. Level 4: research.

**Definition.** Let M and M̂ be torus bundles over one base, with torus-invariant closed 3-forms H and Ĥ. They are T-dual when, on their fibre product, the pullbacks of H and Ĥ differ by dF. Here F is a 2-form that pairs the two fibres nondegenerately.

**Problem.** For a T-dual pair, the torus-invariant parts of the twisted Courant algebroids of M and M̂ are isomorphic. So every invariant generalized complex structure on M has a T-dual on M̂, which can have a different type.

**How the definition helps.** Generalized complex structures and generalized metrics are defined by the bracket and the pairing alone, so a Courant algebroid isomorphism transports them (our own). The usual approach applies the Buscher rules of physics to the metric and the B-field by hand (our own). The work is the construction of the isomorphism, and the type can change because the map mixes tangent and cotangent directions (our own).

**Paper or page:** [T-dual branes on hyperkähler manifolds](https://arxiv.org/abs/2410.22027v1). It says: “Let (M,H) and (M̂,Ĥ) be a T-dual pair of affine torus bundles endowed with H-fluxes. Then, there exists an isomorphism of Courant algebroids T: E<sub>red</sub> → Ê<sub>red</sub> which we call the T-duality map.”

**Sources:**

- [G. Cavalcanti and M. Gualtieri, Generalized complex geometry and T-duality, in A Celebration of the Mathematical Legacy of Raoul Bott, CRM Proc. Lecture Notes 50 (2010) 341–365](https://doi.org/10.1090/crmp/050/25)
- [M. A. Sisak, T-dual branes on hyperkähler manifolds, PhD thesis (arXiv 2410.22027)](https://arxiv.org/abs/2410.22027v1)

### The Cartan three-form twist makes conjugacy classes into Dirac leaves

**Remember:** Twisted leaves carry 2-forms whose derivative is the background 3-form.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D18 (Generalized geometries (à la Hitchin)), 53D17. arXiv math.SG. Level 4: research.

**Definition.** An H-twisted Dirac structure is a maximal isotropic subbundle of TM ⊕ T\*M closed under the Courant bracket twisted by a closed 3-form H. Let G be a Lie group with an invariant inner product. The Cartan–Dirac structure is such a structure on G for the Cartan 3-form H, given by ⟨X,\[Y,Z\]⟩ on left-invariant vector fields.

**Problem.** The conjugacy classes of a Lie group G with an invariant inner product are the leaves of the Cartan–Dirac structure. So each conjugacy class carries a 2-form whose exterior derivative is the restriction of the Cartan 3-form.

**How the definition helps.** An H-twisted Dirac structure is still a Lie algebroid, so its leaves carry 2-forms whose exterior derivative is the restriction of H (our own). For the Cartan–Dirac structure the image of the anchor is tangent to the conjugation orbits, so the leaves are the conjugacy classes (our own). The twist is needed because these 2-forms are not closed in general, for example on the generic conjugacy classes of SU(3) (our own).

**nLab:** [Cartan-Dirac structure on a Lie group](https://ncatlab.org/nlab/show/Cartan-Dirac+structure+on+a+Lie+group). It says: “The leaves of this structure are the conjugacy classes of G. There is a differential 2-forms θ<sub>g</sub> on each conjugacy class ι: 𝒞 ↪︎ G, such that dθ<sub>g</sub> = ι\*⟨−,\[−,−\]⟩.”

**Sources:**

- [P. Ševera and A. Weinstein, Poisson geometry with a 3-form background, Prog. Theor. Phys. Suppl. 144 (2001) 145–154](https://doi.org/10.1143/ptps.144.145)

### The Courant double makes Lie bialgebroids the same as Manin triples

**Remember:** Two compatible Lie algebroids sit as transverse Dirac structures.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D18 (Generalized geometries (à la Hitchin)), 53D17. arXiv math.DG, math.SG. Level 4: research.

**Definition.** A Lie bialgebroid is a pair of Lie algebroids A and A\* on dual vector bundles. The differential of A\* must be a derivation of the bracket of A. Its double is the bundle A ⊕ A\*, with the natural pairing and a bracket built from both structures.

**Problem.** A pair (A, A\*) is a Lie bialgebroid exactly when its double is a Courant algebroid with A and A\* as Dirac structures. Conversely, every Courant algebroid with two transverse Dirac structures is such a double.

**How the definition helps.** The compatibility condition is exactly what the bracket on the double needs to satisfy the Courant algebroid axioms (our own). This is the theorem of Liu, Weinstein and Xu (our own). With the double, the theory of Lie bialgebras, Drinfeld doubles and Manin triples carries over to Lie algebroids (our own).

**nLab:** [Lie bialgebroid](https://ncatlab.org/nlab/show/Lie+bialgebroid). It says: “Every Lie bialgebroid (A,A\*) induces the structure of a Courant algebroid on E := A ⊕ A\*.”

**Sources:**

- [Z.-J. Liu, A. Weinstein and P. Xu, Manin triples for Lie bialgebroids, J. Differential Geom. 45 (1997) 547–574](https://doi.org/10.4310/jdg/1214459842)

### Type zero generalized complex structures are B-field transforms of symplectic forms

**Remember:** Type zero means the eigenbundle is a graph over TM.

*True by definition. Confidence: medium.* MSC 53D18 (Generalized geometries (à la Hitchin)). arXiv math.DG, math.SG. Level 4: research.

**Definition.** The type of a generalized complex structure measures its +i eigenbundle L. It is the complex codimension of the projection of L to the complexified tangent space. Type zero means that this projection is onto.

**Problem.** If a generalized complex structure has type zero everywhere, its eigenbundle is the graph of B + iω. Here ω is symplectic and B is a closed real 2-form, so the structure is a B-field transform of a symplectic one.

**How the definition helps.** Type zero makes L the graph of a complex 2-form B + iω, by linear algebra (our own). L meets its conjugate only in zero, so ω is nondegenerate, and the Courant condition gives dB = 0 and dω = 0 (our own). The usual approach writes the pure spinor and checks its degrees, but here the only work is the graph lemma (our own).

**Wikipedia:** [Generalized complex structure](https://en.wikipedia.org/wiki/Generalized_complex_structure). It says: “Up to a shift of the B-field, which corresponds to multiplying the pure spinor by the exponential of a closed, real 2-form, symplectic manifolds are the only type 0 generalized complex manifolds.”

**Sources:**

- [M. Gualtieri, Generalized complex geometry, Ann. of Math. 174 (2011) 75–123](https://doi.org/10.4007/annals.2011.174.1.3)

### Writing nearby Dirac structures as graphs makes deformation a Maurer–Cartan equation

**Remember:** Near a Dirac structure, every Lagrangian neighbour is a graph.

*Makes the theorem clean to state or prove.* MSC 53D18 (Generalized geometries (à la Hitchin)), 53D17. arXiv math.SG, math.DG. Level 4: research.

**Definition.** Fix a Dirac structure L and a complementary maximal isotropic subbundle R. The pairing identifies R with the dual bundle L\*. Every maximal isotropic subbundle near L is then the graph of a unique 2-form σ on L.

**Problem.** The graph of a 2-form σ on L is a Dirac structure exactly when σ solves the Maurer–Cartan equation of an L∞ algebra. An L∞ algebra generalizes a differential graded Lie algebra, and this one has brackets with one, two and three inputs.

**How the definition helps.** Maximal isotropy makes each nearby subbundle the graph of a skew form on L, so only the bracket condition is left (our own). This closure condition has terms of degree one, two and three in σ, which are the Maurer–Cartan equation (our own). The cubic term appears because R itself need not be closed under the bracket (our own).

**Paper or page:** [Deformations of Pre-Symplectic Structures: a Dirac Geometry Approach](https://arxiv.org/abs/1807.10148v2). It says: “An element σ ∈ Γ(∧²L\*)\[2\] is a Maurer–Cartan element of the L∞\[1\]-algebra structure given in Proposition iff the graph Γσ := {(X − ι<sub>X</sub>σ): X ∈ L} ⊂ L ⊕ R is a Dirac structure.”

**Sources:**

- [F. Schätz and M. Zambon, Deformations of pre-symplectic structures: a Dirac geometry approach, SIGMA 14 (2018) 128](https://doi.org/10.3842/SIGMA.2018.128)

### Blow-ups defined as cuts become corner chops of the moment polytope

**Remember:** Blowing up a fixed point slices a corner off the polytope.

*True by definition. Confidence: medium.* MSC 53D20 (Momentum maps; symplectic reduction), 52B20, 14M25. arXiv math.SG, math.CO. Level 4: research.

**Definition.** The symplectic blow-up of a toric manifold at a fixed point is defined as a symplectic cut, with no hand-made adjustment of the form. The cut uses a circle whose weights at the point are all 1. It removes the matching vertex of the polytope by a hyperplane, a corner chop.

**Problem.** Toric blow-up at a fixed point chops the matching vertex off the Delzant polytope. Hence every compact symplectic toric four-manifold comes from ℂP², S² × S² or a Hirzebruch surface by finitely many toric blow-ups.

**How the definition helps.** Defined as a cut, the blow-up has as polytope the old one minus a small corner, so blow-ups match corner chops (our own). The Delzant condition gives a circle with all weights 1 at the fixed point, which the cut needs (our own). Fulton's theorem on Delzant polygons then classifies the four-manifolds, and the work went into it and into Delzant's theorem (our own).

**Wikipedia:** [Symplectic cut](https://en.wikipedia.org/wiki/Symplectic_cut). It says: “which is formed by deleting a symplectic ε-neighborhood of Z and collapsing the boundary, is then the symplectic blow up of X along Z.”

**Paper or page:** [Classifying Toric and Semitoric Fans by Lifting Equations from SL2(Z)](https://arxiv.org/abs/1502.07698). It says: “Up to the action of SL₂(ℤ), every Delzant polygon can be obtained from a Delzant triangle, rectangle, or Hirzebruch trapezoid by a finite number of corner chops.”

**Sources:**

- [E. Lerman, Symplectic cuts, Mathematical Research Letters 2 (1995) 247–258](https://doi.org/10.4310/MRL.1995.v2.n3.a2)
- [T. Delzant, Hamiltoniens périodiques et images convexes de l'application moment, Bulletin de la Société Mathématique de France 116 (1988) 315–339](https://doi.org/10.24033/bsmf.2100)

### Borel's equivariant cohomology makes Kirwan's map a single restriction

**Remember:** Equivariant cohomology is the cohomology the quotient ought to have.

*Makes the theorem clean to state or prove.* MSC 53D20 (Momentum maps; symplectic reduction), 55N91. arXiv math.SG, math.AT. Level 4: research.

**Definition.** The equivariant cohomology of a G-space X is the cohomology of (EG × X)/G, where EG is a contractible space with a free G-action. For a locally free action of a compact group it equals, rationally, the cohomology of X/G.

**Problem.** Let a compact group G act on a compact symplectic manifold M with momentum map μ and 0 a regular value. Then the Kirwan map, restriction from the rational equivariant cohomology of M to that of μ⁻¹(0), which is H\*(μ⁻¹(0)/G; ℚ), is surjective.

**How the definition helps.** With this definition the Kirwan map is just restriction to μ⁻¹(0), so surjectivity is a statement about one restriction map. The work goes into Kirwan's theorem that the norm square of μ is equivariantly perfect, a Morse-type function whose Morse inequalities are equalities (our own). Ordinary cohomology gives no such map, since μ⁻¹(0)/G is neither a subspace nor a quotient of M (our own).

**Wikipedia:** [Kirwan map](https://en.wikipedia.org/wiki/Kirwan_map), [Equivariant cohomology](https://en.wikipedia.org/wiki/Equivariant_cohomology). It says: “It is defined as the map of equivariant cohomology induced by the inclusion μ⁻¹(p) ↪︎ M followed by the canonical isomorphism H\*<sub>G</sub>(μ⁻¹(p)) = H\*(M//<sub>pG</sub>).”

**Sources:**

- [F. C. Kirwan, Cohomology of Quotients in Complex and Algebraic Geometry, Mathematical Notes 31, Princeton University Press (1984)](https://books.google.com/books?id=4wfZBnlSaJ0C)

### BRST cohomology turns symplectic reduction into a cohomology computation

**Remember:** Impose the constraints and divide by symmetry in one differential.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D20 (Momentum maps; symplectic reduction), 81T70. arXiv math.SG, math-ph. Level 4: research.

**Definition.** The classical BRST complex combines the Koszul complex, which resolves the functions on μ⁻¹(0), with the Chevalley–Eilenberg complex, which computes invariants of 𝔤. Its extra odd variables are called ghosts, and its differential is the bracket with one element Ω satisfying {Ω, Ω} = 0.

**Problem.** Let 0 be a regular value and let a connected G act freely and properly on μ⁻¹(0). Then the degree-zero BRST cohomology is the Poisson algebra of smooth functions on μ⁻¹(0)/G.

**How the definition helps.** The Koszul part divides by the functions vanishing on μ⁻¹(0), and the ghost part takes invariants (our own). So degree zero sees exactly the invariant functions on the zero level, which are the functions on the reduced space (our own). The graded bracket descends to cohomology because the differential is a bracket with Ω, and this gives the reduced Poisson bracket (our own).

**nLab:** [BV-BRST formalism](https://ncatlab.org/nlab/show/BV-BRST+formalism). It says: “In fact, if 0 is a regular value of μ then X<sub>red</sub> := μ⁻¹(0)/G is a submanifold and A<sub>red</sub> ≃ C<sup>∞</sup>(X<sub>red</sub>).”

**Sources:**

- [B. Kostant and S. Sternberg, Symplectic reduction, BRS cohomology, and infinite-dimensional Clifford algebras, Annals of Physics 176 (1987) 49–113](https://doi.org/10.1016/0003-4916(87)90178-3)

### Coadjoint orbits as Hamiltonian spaces give Harish-Chandra's integral by localization

**Remember:** A coadjoint orbit is a Hamiltonian torus space with Weyl-orbit fixed points.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction), 22E30. arXiv math.SG, math.RT. Level 4: research.

**Definition.** A coadjoint orbit of a compact connected Lie group K carries the Kirillov–Kostant–Souriau symplectic form. For a maximal torus T, restricting from the full dual Lie algebra to the torus part gives a moment map. On a regular orbit through λ, the T-fixed points are the Weyl group images wλ.

**Problem.** For regular λ and generic X in Lie(T), the orbit's Liouville measure has Fourier transform equal, up to a constant, to a Weyl group sum. The term for w is sign(w) exp⟨wλ, X⟩ divided by the product of the positive roots at X.

**How the definition helps.** As a Hamiltonian torus space, the orbit makes the Fourier transform an integral of an equivariantly closed exponential, which localization reduces to the points wλ. At wλ the tangent weights are the w-images of the positive roots (our own). Their product is sign(w) times the product of the positive roots; Harish-Chandra's own proof used invariant differential equations instead (our own).

**Wikipedia:** [Localization formula for equivariant cohomology](https://en.wikipedia.org/wiki/Localization_formula_for_equivariant_cohomology). It says: “The localization formula can also computes the Fourier transform of (Kostant's symplectic form on) coadjoint orbit, yielding the Harish-Chandra's integration formula, which in turns gives Kirillov's character formula.”

**Sources:**

- [M. F. Atiyah and R. Bott, The moment map and equivariant cohomology, Topology 23 (1984) 1–28](https://doi.org/10.1016/0040-9383(84)90021-1)
- [J. J. Duistermaat and G. J. Heckman, On the variation in the cohomology of the symplectic form of the reduced phase space, Inventiones Mathematicae 69 (1982) 259–268](https://doi.org/10.1007/BF01399506)

### Defining symplectic blow-up as a cut makes the blown-up form exist

**Remember:** Blow up by cutting off a thin neighbourhood of Z.

*True by definition. Confidence: medium.* MSC 53D20 (Momentum maps; symplectic reduction), 53D05. arXiv math.SG. Level 4: research.

**Definition.** Let a circle act on X with proper momentum map μ, maximal exactly on a symplectic submanifold Z. Suppose the circle acts on each normal space of Z by complex scalar multiplication, that is, with all weights 1. For small ε, the symplectic blow-up along Z is the cut that keeps the side μ ≤ max μ − ε.

**Problem.** For small ε the blow-up is a symplectic manifold. In it a neighbourhood of Z is replaced by a codimension-two symplectic submanifold, the exceptional divisor, and the rest of X keeps its form.

**How the definition helps.** Weights 1 make the circle act freely on levels just below the maximum, so the cut is symplectic by reduction (our own). Deleting a neighbourhood of Z and collapsing its boundary by hand needs care, and the cut makes this process rigorous. The level set is a sphere bundle over Z, so the divisor is the projectivized normal bundle (our own).

**Wikipedia:** [Symplectic cut](https://en.wikipedia.org/wiki/Symplectic_cut). It says: “The symplectic cut is an elegant means of making the neighborhood-deletion/boundary-collapse process symplectically rigorous.”

**Sources:**

- [E. Lerman, Symplectic cuts, Mathematical Research Letters 2 (1995) 247–258](https://doi.org/10.4310/mrl.1995.v2.n3.a2)

### Labelling facets with integers lets polytopes classify toric orbifolds

**Remember:** Each label records how far the torus is from acting freely.

*Makes the theorem clean to state or prove.* MSC 53D20 (Momentum maps; symplectic reduction), 57R18, 52B20. arXiv math.SG. Level 4: research.

**Definition.** A labeled polytope is a simple rational polytope with a positive integer on each facet. The label is the order of the finite isotropy group, the orbifold structure group, at points over the interior of that facet.

**Problem.** Compact symplectic toric orbifolds correspond one to one, up to isomorphism, with labeled polytopes, and every labeled polytope occurs. The polytope alone is not enough: a smooth sphere and a teardrop orbifold both have an interval as image.

**How the definition helps.** The bare polytope forgets the isotropy over each facet, and the label records exactly this, so the classification becomes a bijection (our own). Lerman and Tolman follow Delzant: they reduce ℂᵈ by a subtorus built from the labels times the primitive facet normals (our own). With all labels 1 and a smooth polytope one recovers Delzant's theorem (our own).

**Paper or page:** [Seidel Representations and Quantum Cohomology of Toric Orbifolds](https://arxiv.org/abs/1211.3204). It says: “Two compact symplectic toric orbifolds are isomorphic if and only if their associated labeled polytopes are isomorphic.”

**Sources:**

- [E. Lerman and S. Tolman, Hamiltonian torus actions on symplectic orbifolds and toric varieties, Transactions of the American Mathematical Society 349 (1997) 4201–4230](https://doi.org/10.1090/S0002-9947-97-01821-7)

### Orbit-closure convexity makes Grassmannian torus orbits matroid polytopes

**Remember:** A matroid polytope is the hull of its bases' indicator vectors.

*True by definition. Confidence: medium.* MSC 53D20 (Momentum maps; symplectic reduction), 52B40, 14M15. arXiv math.SG, math.CO. Level 4: research.

**Definition.** The matroid base polytope of a matroid on {1, …, n} is the convex hull of the indicator vectors of its bases. A k-plane x in ℂⁿ has a matroid whose bases are the k-sets I with nonzero Plücker coordinate, the minor on columns I.

**Problem.** Let x be a point of the Grassmannian of k-planes in ℂⁿ. The moment image of the closure of its complex torus orbit is the matroid base polytope of x.

**How the definition helps.** By Atiyah's theorem on orbit closures, the image is the convex hull of the images of the torus-fixed points in the closure (our own). These are the coordinate planes for the k-sets I with nonzero Plücker coordinate, each mapping to the indicator vector of I (our own). So the image is the base polytope by definition, with no direct computation of the moment map; the work went into Atiyah's theorem (our own).

**Wikipedia:** [Matroid polytope](https://en.wikipedia.org/wiki/Matroid_polytope). It says: “Every edge of a matroid polytope PM is a parallel translate of eᵢ−eⱼ for some i,j∈E, the ground set of the associated matroid.”

**Paper or page:** [Irreducibility of Generalized Permutohedra, Supermodular Functions, and Balanced Multisets](https://arxiv.org/abs/2303.05751). It says: “Let P be a polytope in ℝⁿ with vertices in {0,1}ⁿ such that each edge is a translate of eᵢ−eⱼ for some i,j∈\[n\]. Then P is the matroid polytope of some matroid M on \[n\].”

**Sources:**

- [I. M. Gelfand, R. M. Goresky, R. D. MacPherson and V. V. Serganova, Combinatorial geometries, convex polyhedra, and Schubert cells, Advances in Mathematics 63 (1987) 301–316](https://doi.org/10.1016/0001-8708(87)90059-4)
- [M. F. Atiyah, Convexity and commuting Hamiltonians, Bulletin of the London Mathematical Society 14 (1982) 1–15](https://doi.org/10.1112/blms/14.1.1)

### Reading the h-vector as Betti numbers makes Dehn–Sommerville Poincaré duality

**Remember:** Count vertices by how many edges run downhill from them.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction), 52B05, 52B20. arXiv math.SG, math.CO. Level 4: research.

**Definition.** For a simple n-polytope, choose a generic linear height, so each edge points up or down. The h-vector entry hₖ counts the vertices with exactly k edges pointing down. This reads directly as Morse data, unlike the usual definition through face numbers.

**Problem.** For a compact symplectic toric manifold with polytope Δ, the Betti number b₂ₖ equals hₖ(Δ), and the odd Betti numbers vanish. So Poincaré duality gives the Dehn–Sommerville equations hₖ = hₙ₋ₖ, and toric orbifolds extend this to all simple polytopes.

**How the definition helps.** The height is a moment map component, a Morse function with one critical point per vertex, of index twice its downward edges (our own). All indices are even, so the Morse inequalities are equalities and b₂ₖ counts vertices with k downward edges, for every generic height (our own). The quoted orbifold version covers every rational simple polytope, and every simple polytope has a rational one with the same faces (our own).

**Wikipedia:** [Dehn–Sommerville equations](https://en.wikipedia.org/wiki/Dehn%E2%80%93Sommerville_equations). It says: “In this language, the last form of the Dehn–Sommerville equations, the symmetry of the h-vector, is a manifestation of the Poincaré duality in the intersection cohomology of X.”

**Paper or page:** [Covering Spaces of Symplectic Toric Orbifolds](https://arxiv.org/abs/2405.11994). It says: “Then if X is a toric orbifold with labeled rational polytope Δ, then b₂ᵢ=hᵢ(Δ) and b₂ᵢ₊₁=0 for all i∈ℤ.”

**Sources:**

- [R. P. Stanley, The number of faces of a simplicial convex polytope, Advances in Mathematics 35 (1980) 236–238](https://doi.org/10.1016/0001-8708(80)90050-X)

### Reflexive moment polytopes make monotone toric manifolds finite in number

**Remember:** Every facet stands one lattice step from the centre.

*True by definition. Confidence: medium.* MSC 53D20 (Momentum maps; symplectic reduction), 52B20, 14M25. arXiv math.SG, math.CO. Level 4: research.

**Definition.** A lattice polytope is reflexive when the origin is interior and each facet lies on a hyperplane ⟨x, u⟩ = −1. Here u is a primitive lattice vector, so each facet is one lattice step from the origin. A symplectic manifold is monotone when its first Chern class c₁ is a positive multiple of \[ω\].

**Problem.** A compact symplectic toric manifold is monotone exactly when a rescaled, translated copy of its polytope is reflexive. Reflexive polytopes are finite in number in each dimension, so monotone toric manifolds are too, up to scaling.

**How the definition helps.** In polytope terms monotonicity is reflexivity, because \[ω\] sums the classes over the facets weighted by facet distance, while c₁ sums them plainly (our own). So all facets sit at one lattice distance from some point, which gives the converse of the quoted result (our own). Delzant's theorem and Lagarias and Ziegler's bound give finiteness, and the work went into that bound (our own).

**Paper or page:** [Compact monotone tall complexity one T-spaces](https://arxiv.org/abs/2307.04198). It says: “Let (M,ω,Φ) be a compact symplectic toric manifold. If Φ(M) is a reflexive Delzant polytope, then (M,ω,Φ) is normalized monotone.”

**Sources:**

- [T. Delzant, Hamiltoniens périodiques et images convexes de l'application moment, Bulletin de la Société Mathématique de France 116 (1988) 315–339](https://doi.org/10.24033/bsmf.2100)
- [J. C. Lagarias and G. M. Ziegler, Bounds for lattice polytopes containing a fixed number of interior points in a sublattice, Canadian Journal of Mathematics 43 (1991) 1022–1035](https://doi.org/10.4153/CJM-1991-058-4)

### Slices complementary to coadjoint orbits have symplectic preimages

**Remember:** A slice transverse to the orbit pulls back to a symplectic piece.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction). arXiv math.SG. Level 4: research.

**Definition.** A transverse slice at λ in 𝔤\* is a submanifold Z whose tangent space at λ complements that of the coadjoint orbit G·λ. That is, the two tangent spaces meet only in 0 and together span 𝔤\*. Here μ is an equivariant momentum map, with ⟨dμ(v), ξ⟩ = ω(ξ·p, v).

**Problem.** Let μ be an equivariant momentum map with μ(p) = λ, and let Z be a transverse slice at λ. Then near p the preimage μ⁻¹(Z) is a symplectic submanifold of M.

**How the definition helps.** Spanning 𝔤\* makes μ transverse to Z, and meeting only in 0 makes ω nondegenerate on μ⁻¹(Z) (our own). By the equation, vectors ω-orthogonal to μ⁻¹(Z) have the form ξ·p, and dμ sends them into the tangent space of G·λ (our own). For Z = G·λ the condition fails, and orbit directions of the stabilizer of λ are tangent and ω-orthogonal to μ⁻¹(Z) (our own).

**Paper or page:** [From Symplectic to Poisson. A Study of Reduction and a Proposal Towards Implosion](https://arxiv.org/abs/2202.05783v1). It says: “Then, if p ∈ M with μ(p) = λ, there is a neighborhood U of p such that μ⁻¹(Z) ∩ U is a symplectic submanifold of M.”

**Sources:** none listed. No primary source with a working link was found.

### Stratified symplectic spaces make singular reduced spaces symplectic piece by piece

**Remember:** A singular quotient is symplectic stratum by stratum.

*Makes the theorem clean to state or prove.* MSC 53D20 (Momentum maps; symplectic reduction), 58A35. arXiv math.SG, math.DG. Level 4: research.

**Definition.** A stratified symplectic space is a space divided into manifolds, called strata, each with a symplectic form. It carries a Poisson algebra, an algebra of continuous functions with a bracket, whose restriction to each stratum gives that stratum's Poisson bracket.

**Problem.** For a proper Hamiltonian action that need not be free, the reduced space μ⁻¹(0)/G is a stratified symplectic space. Its strata are the sets of orbits in μ⁻¹(0) whose stabilizers are conjugate to a fixed subgroup, and each is a symplectic manifold.

**How the definition helps.** Without a free action μ⁻¹(0)/G is usually not a manifold, so the new notion is needed even to state that it is symplectic (our own). Sjamaar and Lerman show that each stratum is a Marsden–Weinstein quotient of a smaller manifold, using a local normal form (our own). For the circle turning z forward and w backward on ℂ², the reduced space is a plane whose origin is its own stratum (our own).

**Wikipedia:** [Momentum map](https://en.wikipedia.org/wiki/Momentum_map). It says: “M//G = μ⁻¹(0)/G is a stratified symplectic space, i.e. a stratified space with compatible symplectic structures on the strata.”

**Sources:**

- [R. Sjamaar and E. Lerman, Stratified symplectic spaces and reduction, Annals of Mathematics 134 (1991) 375–422](https://doi.org/10.2307/2944350)

### The momentum map on spheres sums vectors, so polygon spaces are symplectic

**Remember:** A polygon closes exactly when its total momentum vanishes.

*True by definition. Confidence: medium.* MSC 53D20 (Momentum maps; symplectic reduction), 53D30. arXiv math.SG. Level 4: research.

**Definition.** Give each sphere of radius rᵢ in ℝ³ its area form divided by rᵢ, so the inclusion is a momentum map for rotations. On the product of the spheres the momentum map is the sum of the n vectors, so its zero level is the closed polygons. The polygon space is this zero level divided by the rotation group SO(3).

**Problem.** Suppose that no signs make ±r₁ ± … ± rₙ zero. Then the polygon space, when nonempty, is a compact symplectic manifold of dimension 2n − 6.

**How the definition helps.** Defined as a zero level divided by a group, the polygon space is symplectic by Marsden–Weinstein reduction once rotations act freely (our own). The sign condition rules out polygons on a line, and only the identity rotation fixes two independent vectors (our own). Defined only as closed polygons up to rotation, the space has no evident symplectic form (our own).

**Wikipedia:** [Momentum map](https://en.wikipedia.org/wiki/Momentum_map). It says: “Then the natural action of G × H on (M₁ × M₂, ω₁ × ω₂) is Hamiltonian, with momentum map the direct sum of the two momentum maps”

**Paper or page:** [Disk potential functions for polygon spaces](https://arxiv.org/abs/2211.03558v2). It says: “Then the polygon space (ℳ<sub>r</sub>, ω<sub>r</sub>) is symplectomorphic to the symplectic reduction T //<sub>2r</sub> 𝒪\_λ of the coadjoint orbit (𝒪\_λ, ω\_λ).”

**Sources:**

- [M. Kapovich and J. J. Millson, The symplectic geometry of polygons in Euclidean space, Journal of Differential Geometry 44 (1996)](https://doi.org/10.4310/jdg/1214459218)
- [J.-C. Hausmann and A. Knutson, The cohomology ring of polygon spaces, Annales de l'Institut Fourier 48 (1998)](https://doi.org/10.5802/aif.1619)

### Vanishing ideals give Poisson reduction

**Remember:** Functions vanishing on S bracket to functions vanishing on S.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction). arXiv math.SG. Level 4: research.

**Definition.** A closed embedded submanifold S of a Poisson manifold is coisotropic if its vanishing ideal I, the smooth functions that vanish on S, is closed under the Poisson bracket. This says exactly that I lies inside N, the functions whose bracket with every member of I stays in I.

**Problem.** Let N consist of the functions f whose bracket with every member of I lies in I. For coisotropic S, multiplication and the Poisson bracket are well defined on N modulo I.

**How the definition helps.** Coisotropy gives I ⊆ N, so the quotient N/I makes sense (our own proof). The Jacobi identity closes N under brackets, and the product rule closes it under products and makes I an ideal of N for both operations. So changing a representative by a member of I changes each result only by a member of I.

**nLab:** [coisotropic submanifold](https://ncatlab.org/nlab/show/coisotropic+submanifold). It says: “S ↪︎ X is coisotropic if the subalgebra of C∞(X) consisting of functions vanishing on S is closed under the Poisson bracket.”

**Sources:** none listed. No primary source with a working link was found.

### Built-in minimal degeneracy makes quasi-Hamiltonian reductions symplectic

**Remember:** The two-form may degenerate, but only along directions reduction removes.

*True by definition.* MSC 53D30 (Symplectic structures of moduli spaces), 53D20. arXiv math.SG, math.AG. Level 4: research.

**Definition.** A quasi-Hamiltonian G-space is a G-manifold with an invariant 2-form ω and an equivariant map Φ to G, called the moment map. Here dω is minus the pull-back of the Cartan 3-form (built from the Lie bracket), and Φ fixes how ω pairs with orbit directions. The form ω may degenerate, but its kernel at x is exactly the orbit directions ξ·x with Ad(Φ(x))ξ = −ξ.

**Problem.** If G acts freely on Φ⁻¹(e), then ω descends to a symplectic form on Φ⁻¹(e)/G. The same holds for the preimage of a conjugacy class with a free action and a good quotient.

**How the definition helps.** The kernel condition is chosen so that, on the level set, ω degenerates only along orbit directions, which the quotient removes (our own). On Φ⁻¹(e) the map Φ is constant, so the pull-back of the Cartan 3-form vanishes and the restricted form is closed (our own). With ordinary moment maps, the same spaces come only from reducing infinite-dimensional spaces of connections (our own).

**Paper or page:** [Unfolding of wild character varieties](https://arxiv.org/abs/2511.01221). It says: “in particular, μ<sub>G</sub>⁻¹(𝒞)/G is a smooth symplectic variety if H = {1}”

**Sources:**

- [A. Alekseev, A. Malkin, E. Meinrenken, Lie group valued moment maps, J. Differential Geom. 48 (1998) 445–495](https://doi.org/10.4310/jdg/1214460860)

### Fixing boundary conjugacy classes gives the symplectic leaves of character varieties

**Remember:** Conjugacy classes do what coadjoint orbits do for ordinary moment maps.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D30 (Symplectic structures of moduli spaces), 53D17. arXiv math.SG, math.AG. Level 4: research.

**Definition.** A conjugacy class 𝒞 of G, with its inclusion into G as moment map, is a quasi-Hamiltonian G-space. It is the group-valued analogue of a coadjoint orbit. For a surface with boundary, one fuses a fused double per handle and a conjugacy class per boundary circle, then reduces at e.

**Problem.** The character variety of a compact oriented surface with boundary is a Poisson manifold. Its symplectic leaves (the largest pieces on which the bracket is nondegenerate) are the sets of representations with fixed boundary conjugacy classes.

**How the definition helps.** Each choice of boundary classes gives a quasi-Hamiltonian reduction, which is symplectic by the reduction theorem, and these reductions fill the character variety (our own). The Poisson structure that joins the leaves comes from quasi-Poisson geometry, a further theory (our own). For SL(2, ℂ) on the four-punctured sphere, the boundary traces a, b, c, d Poisson-commute with every function, and the leaves are cubic surfaces.

**Wikipedia:** [Character variety](https://en.wikipedia.org/wiki/Character_variety). It says: “has a natural Poisson structure such that a,b,c,d are Casimir functions, so the symplectic leaves are affine cubic surfaces of the form xyz + x² + y² + z² + c₁x + c₂y + c₃z = c₄.”

**Paper or page:** [A Gentle Introduction to the Non-Abelian Hodge Correspondence](https://arxiv.org/abs/2208.05940). It says: “For a surface with boundary, the character variety Rep(π₁S, G) is a Poisson manifold whose symplectic leaves are flat connections with prescribed conjugacy class for the monodromy around each boundary component.”

**Sources:**

- [A. Alekseev, A. Malkin, E. Meinrenken, Lie group valued moment maps, J. Differential Geom. 48 (1998) 445–495](https://doi.org/10.4310/jdg/1214460860)

### Fusing doubles of G turns surface character varieties into finite-dimensional reductions

**Remember:** Each handle of the surface contributes one commutator to the moment map.

*True by definition. Confidence: medium.* MSC 53D30 (Symplectic structures of moduli spaces), 57K20. arXiv math.SG, math.GT. Level 4: research.

**Definition.** Fusion makes the product of two quasi-Hamiltonian G-spaces into one quasi-Hamiltonian G-space whose moment map is the product Φ₁Φ₂. The fused double G × G, with G acting by conjugation and moment map (a, b) ↦ aba⁻¹b⁻¹, is a quasi-Hamiltonian G-space.

**Problem.** For a closed oriented surface of genus g, representations of π₁ in G up to conjugation form the reduction at e of g fused doubles. So the irreducible ones form a symplectic manifold.

**How the definition helps.** A representation of π₁ is a list of 2g elements aᵢ, bᵢ whose commutators multiply to e, which is the fused moment map (our own). So the character variety is Φ⁻¹(e)/G, and the reduction theorem makes it symplectic, with Goldman's form (our own). The work moves into the fusion and reduction theorems, which Alekseev, Malkin and Meinrenken proved for all such spaces (our own).

**Paper or page:** [A Gentle Introduction to the Non-Abelian Hodge Correspondence](https://arxiv.org/abs/2208.05940). It says: “In particular for a closed surface S, the character variety Rep(π₁S, G) is a symplectic manifold.”

**Sources:**

- [A. Alekseev, A. Malkin, E. Meinrenken, Lie group valued moment maps, J. Differential Geom. 48 (1998) 445–495](https://doi.org/10.4310/jdg/1214460860)
- [W. M. Goldman, The symplectic nature of fundamental groups of surfaces, Adv. Math. 54 (1984) 200–225](https://doi.org/10.1016/0001-8708(84)90040-9)

### Goldman's loop bracket computes Poisson brackets of trace functions by intersections

**Remember:** Bracket two loops by resolving their crossings with signs.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D30 (Symplectic structures of moduli spaces), 57K20. arXiv math.SG, math.GT. Level 4: research.

**Definition.** The Goldman bracket of two free loops α and β on an oriented surface is Σ ε(p) \[αₚβₚ\]. The sum runs over transverse crossings p, with crossing sign ε(p) = ±1, and αₚβₚ runs α then β from p. This bracket makes the free abelian group on free homotopy classes of loops into a Lie algebra.

**Problem.** On the GL(n, ℂ) character variety of a closed surface, with the trace form, f(α)(ρ) = tr ρ(α) obeys {f(α), f(β)} = Σ ε(p) f(αₚβₚ). So sending loops to trace functions is a Lie homomorphism from the Goldman Lie algebra.

**How the definition helps.** The loop bracket uses the signed sum over crossings of Goldman's product formula, so the formula says the trace map is a Lie homomorphism (our own). The work is in the product formula, which comes from the cup-product form of the symplectic structure and a local computation at each crossing (our own).

**nLab:** [Goldman bracket](https://ncatlab.org/nlab/show/Goldman+bracket). It says: “The Goldman bracket of a compact closed surface Σ is a Lie algebra structure on the free abelian group generated from the isotopy classes of based loops in Σ.”

**Paper or page:** [Generic Properties of Hitchin Representations](https://arxiv.org/abs/2407.08487). It says: “Then, at any point \[ρ\] ∈ Hit<sub>G</sub>(S), we have 𝕏<sub>g<sub>y</sub></sub>(f<sub>x</sub>)\|\[ρ\] = Σ<sub>p∈x♯y</sub> (sign p) 𝖡(f̂(ρ(x<sub>p</sub>)), ĝ(ρ(y<sub>p</sub>))).”

**Sources:**

- [W. M. Goldman, Invariant functions on Lie groups and Hamiltonian flows of surface group representations, Invent. Math. 85 (1986) 263–302](https://doi.org/10.1007/BF01389091)

### Higgs fields as cotangent vectors make Hitchin's phase space symplectic

**Remember:** Twisting by the canonical bundle turns endomorphisms into cotangent vectors.

*True by definition.* MSC 53D30 (Symplectic structures of moduli spaces), 14H60, 37J35. arXiv math.AG, math.SG. Level 4: research.

**Definition.** Over a Riemann surface of genus g ≥ 2, a Higgs field on a bundle F is a holomorphic section Φ of End(F) ⊗ K. Here K is the bundle of (1,0)-forms, and F is stable when proper subbundles have smaller degree per rank. Serre duality makes H⁰(End(F) ⊗ K) dual to H¹(End(F)), the tangent space of the stable moduli.

**Problem.** A stable bundle F with a Higgs field Φ is a cotangent vector at F to the moduli space N of stable bundles. So T\*N, with its canonical symplectic form, is dense and open in the Higgs moduli space.

**How the definition helps.** Because a Higgs field is an endomorphism twisted by K, Serre duality makes it a cotangent vector, and the canonical symplectic form comes free (our own). In the gauge-theory definition, Φ is part of a solution of Hitchin's equations, and this cotangent picture is hidden (our own). The hard part, that the coefficients of the characteristic polynomial of Φ Poisson commute, is Hitchin's theorem (our own).

**Wikipedia:** [Hitchin system](https://en.wikipedia.org/wiki/Hitchin_system). It says: “which by Serre duality is dual to Φ ∈ H⁰(End(F) ⊗ K), where K is the canonical bundle, so a pair (F, Φ) called a Hitchin pair or Higgs bundle, defines a point in the cotangent bundle.”

**Sources:**

- [N. J. Hitchin, Stable bundles and integrable systems, Duke Math. J. 54 (1987) 91–114](https://doi.org/10.1215/S0012-7094-87-05408-1)

### Moduli of sheaves on Calabi–Yau n-folds are (2 − n)-shifted symplectic

**Remember:** Serre duality on a Calabi–Yau is already a shifted symplectic pairing.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D30 (Symplectic structures of moduli spaces), 14A30, 14D20. arXiv math.AG, math.SG. Level 4: research.

**Definition.** An n-shifted symplectic structure on a derived stack is a closed 2-form of degree n. Its pairing identifies the tangent complex with the cotangent complex shifted by n. Its closedness is extra data given up to homotopy, not only a property.

**Problem.** For a smooth projective Calabi–Yau variety X of dimension n, the derived stack of perfect complexes on X is (2 − n)-shifted symplectic. This covers sheaves, recovering Mukai's form on K3 surfaces and, for n = 3, the symmetric obstruction theories of Donaldson–Thomas theory.

**How the definition helps.** The tangent complex at E is RHom(E, E)\[1\], and Serre duality pairs Extⁱ with Extⁿ⁻ⁱ, which is nondegeneracy in degree 2 − n (our own). The work moves into closedness, which Pantev, Toën, Vaquié and Vezzosi get by integrating a class over X (our own). The shifted definition lets one statement cover every n, where before K3 surfaces and threefolds were treated separately (our own).

**Paper or page:** [Moduli of sheaves on fourfolds as derived Lagrangian intersections](https://arxiv.org/abs/2403.00727). It says: “Let X be a smooth Calabi-Yau variety of dimension n. Then the derived stack 𝓜<sup>d</sup>(X) has a canonical (2−n)-shifted symplectic structure.”

**Sources:**

- [T. Pantev, B. Toën, M. Vaquié, G. Vezzosi, Shifted symplectic structures, Publ. Math. IHÉS 117 (2013) 271–328](https://doi.org/10.1007/s10240-013-0054-1)
- [S. Mukai, Symplectic structure of the moduli space of sheaves on an abelian or K3 surface, Invent. Math. 77 (1984) 101–116](https://doi.org/10.1007/BF01389137)

### Shifted symplectic structures make Lagrangian intersections symplectic, one degree lower

**Remember:** Up to homotopy, two Lagrangians always meet in a shifted symplectic space.

*Makes the theorem clean to state or prove.* MSC 53D30 (Symplectic structures of moduli spaces), 14A30. arXiv math.AG, math.SG. Level 4: research.

**Definition.** A derived stack is a space that keeps, in chain complexes, the data lost at non-transverse intersections. An n-shifted symplectic structure on it is a closed 2-form of degree n that identifies the tangent complex with the cotangent complex shifted by n. A Lagrangian structure on a map into it is a homotopy that trivialises the pulled-back form, with a similar nondegeneracy condition.

**Problem.** The derived intersection of two Lagrangians in an n-shifted symplectic derived stack is (n − 1)-shifted symplectic. So two Lagrangian submanifolds of a symplectic manifold always meet in a (−1)-shifted symplectic derived space, even without transversality.

**How the definition helps.** Closedness and nondegeneracy are asked only up to homotopy, so the two trivialising homotopies glue into a closed form on the fibre product (our own). Nondegeneracy is then a short check with exact triangles (our own). Classically a non-transverse intersection is a singular set with no symplectic form, so the theorem cannot even be stated (our own).

**Paper or page:** [Moduli of sheaves on fourfolds as derived Lagrangian intersections](https://arxiv.org/abs/2403.00727). It says: “Let F be an n-shifted symplectic derived Artin stack and X → F, Y → F two morphisms of derived Artin stacks carrying Lagrangian structures. Then the derived stack X ×ʰ<sub>F</sub> Y has a canonical (n−1)-shifted symplectic structure.”

**Sources:**

- [T. Pantev, B. Toën, M. Vaquié, G. Vezzosi, Shifted symplectic structures, Publ. Math. IHÉS 117 (2013) 271–328](https://doi.org/10.1007/s10240-013-0054-1)

### A circle-valued contact coordinate blocks the scaling that squeezes everything

**Remember:** A periodic vertical coordinate cannot be rescaled.

*Rules out counterexamples.* MSC 53D35 (Global theory of symplectic and contact manifolds), 53D10. arXiv math.SG. Level 4: research.

**Definition.** Contact non-squeezing is posed in ℝ²ⁿ × S¹ with the contact form dz − Σ yᵢ dxᵢ, where the coordinate z is read modulo 1. A contact isotopy is a family of diffeomorphisms that keep the kernel of this form. Because z lives on a circle, no map can rescale z.

**Problem.** If 1 ≤ πr² &lt; πR², no compactly supported contact isotopy moves B(R) × S¹ into B(r) × S¹, for balls B in ℝ²ⁿ. In ℝ²ⁿ × ℝ, by contrast, every bounded domain can be squeezed into any small ball.

**How the definition helps.** On ℝ²ⁿ × ℝ the contact map (x, y, z) ↦ (εx, εy, ε²z) squeezes every bounded domain, but it is not defined when z is periodic (our own). With z on a circle, Chiu proved non-squeezing for 1 ≤ πr² &lt; πR². For n ≥ 2, Eliashberg, Kim and Polterovich squeezed balls with πR² &lt; 1, so some lower bound on the radii is needed (our own).

**nLab:** [Gromov's non-squeezing theorem](https://ncatlab.org/nlab/show/Gromov%27s+non-squeezing+theorem). It says: “if R and r satisfy 1 ≤ πr² &lt; πR², then it is impossible to squeeze the contact ball B<sub>R</sub>×S¹ into B<sub>r</sub>×S¹ via compactly supported contact isotopies.”

**Sources:**

- [S.-F. Chiu, Nonsqueezing property of contact balls, Duke Math. J. 166 (2017), 605–655](https://doi.org/10.1215/00127094-3715517)
- [Y. Eliashberg, S. S. Kim and L. Polterovich, Geometry of contact transformations and domains: orderability versus squeezing, Geom. Topol. 10 (2006), 1635–1747](https://doi.org/10.2140/gt.2006.10.1635)

### Conjugation invariance makes a norm on Ham all or nothing

**Remember:** Conjugation invariance makes the elements of norm zero a normal subgroup.

*True by definition. Confidence: medium.* MSC 53D35 (Global theory of symplectic and contact manifolds), 53D22. arXiv math.SG. Level 4: research.

**Definition.** A pseudo-norm on the group Ham(M) of Hamiltonian diffeomorphisms is a function ‖·‖ ≥ 0 with ‖id‖ = 0, ‖φ⁻¹‖ = ‖φ‖ and ‖φψ‖ ≤ ‖φ‖ + ‖ψ‖. It is conjugation invariant if ‖ψφψ⁻¹‖ = ‖φ‖ for every ψ, and a norm if it is positive away from the identity.

**Problem.** On a closed symplectic manifold M, a conjugation-invariant pseudo-norm on Ham(M) either is a norm or vanishes everywhere. So one element of positive norm proves that it is a norm.

**How the definition helps.** The elements of norm zero form a normal subgroup, by the triangle inequality, symmetry and conjugation invariance (our own). So the work moves from checking elements one by one into Banyaga's theorem that Ham(M) is simple, and this subgroup is trivial or everything. Eliashberg and Polterovich used this to show that the analogues of Hofer's norm built from Lᵖ norms with p finite vanish everywhere (our own).

**Wikipedia:** [Symplectomorphism](https://en.wikipedia.org/wiki/Symplectomorphism). It says: “Groups of Hamiltonian diffeomorphisms are simple, by a theorem of Banyaga. They have natural geometry given by the Hofer norm.”

**Sources:**

- [Y. Eliashberg and L. Polterovich, Bi-invariant metrics on the group of Hamiltonian diffeomorphisms, Internat. J. Math. 4 (1993), 727–738](https://doi.org/10.1142/s0129167x93000352)
- [A. Banyaga, Sur la structure du groupe des difféomorphismes qui préservent une forme symplectique, Comment. Math. Helv. 53 (1978), 174–227](https://doi.org/10.1007/bf02566074)

### Cone twists give Seidel's exact sequence

**Remember:** A cone comes with its exact triangle for free.

*True by definition.* MSC 53D37 (Symplectic aspects of mirror symmetry, homological mirror symmetry, and Fukaya category), 53D40. arXiv math.SG. Level 4: research.

**Definition.** Let S be a Lagrangian sphere. The algebraic twist of L along S is the mapping cone of the evaluation map HF(S, L) ⊗ S → L. The cone is formed among twisted complexes, which are formal iterated cones of Lagrangians.

**Problem.** Let τ be the Dehn twist along an exact Lagrangian sphere S in an exact symplectic manifold, a symplectic map supported near S. For exact Lagrangians L and L̃, there is a long exact sequence HF(S, L) ⊗ HF(L̃, S) → HF(L̃, L) → HF(L̃, τ(L)) → ….

**How the definition helps.** Every mapping cone sits in an exact triangle, and HF(L̃, −) turns an exact triangle into a long exact sequence (our own). So once τ(L) is known to be isomorphic to the algebraic twist, the sequence is formal (our own). Seidel's 2003 paper proved the sequence directly, and the cone statement, which needs more work with Lefschetz fibrations, is in his book (our own).

**Paper or page:** [Towards Homological Mirror Symmetry](https://arxiv.org/abs/2108.03931v2), [Towards Homological Mirror Symmetry](https://arxiv.org/abs/2108.03931v2). It says: “Consequently, application of HF(L̃,□) respectively HF(□,L̃) yields long exact sequences”

**Sources:**

- [P. Seidel, A long exact sequence for symplectic Floer cohomology, Topology 42 (2003) 1003–1063](https://doi.org/10.1016/S0040-9383(02)00028-9)
- [P. Seidel, Fukaya Categories and Picard–Lefschetz Theory, Zurich Lectures in Advanced Mathematics, EMS, 2008](https://doi.org/10.4171/063)

### Convex collars keep null-homologous curves inside

**Remember:** A convex boundary pushes holomorphic curves back inside.

*Rules out counterexamples. Confidence: medium.* MSC 53D37 (Symplectic aspects of mirror symmetry, homological mirror symmetry, and Fukaya category), 53D40. arXiv math.SG. Level 4: research.

**Definition.** A domain W in X has a convex collar when, near its boundary, it looks like part of a symplectization with radial coordinate r. A symplectization of a contact manifold (Y, α) is (0, ∞) × Y with the form d(rα). There J must be of contact type, which makes r plurisubharmonic.

**Problem.** Let W ⊂ X have a convex collar. Then a J-holomorphic curve with boundary in W and zero class in H₂(X, W) lies entirely in W.

**How the definition helps.** Since \[u\] = 0 in H₂(X, W), Stokes' theorem gives the area of u beyond a collar level as an integral on that level (our own). Convexity of J makes that boundary integral at most zero, so the part outside has zero energy and is constant (our own). Without a convex collar, disks with boundary in W can leave W, so the exact category of W inside X could depend on X (our own).

**Paper or page:** [Constructing the relative Fukaya category](https://arxiv.org/abs/2203.15482v2). It says: “Suppose that (W ⊂ X,J) admits a convex collar, and u: (Σ,∂Σ) → (X,W) is a J-holomorphic curve such that \[u\] = 0 in H₂(X,W). Then u is contained in W.”

**Sources:**

- [T. Perutz and N. Sheridan, Constructing the relative Fukaya category, arXiv:2203.15482 (2023)](https://arxiv.org/abs/2203.15482v2)

### Disk-count summands sit at eigenvalues of c₁

**Remember:** Sort Lagrangians by how many small disks pass through each point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D37 (Symplectic aspects of mirror symmetry, homological mirror symmetry, and Fukaya category), 53D45. arXiv math.SG. Level 4: research.

**Definition.** A Lagrangian L is monotone when disk area is a fixed positive multiple of the Maslov index, a winding number of the disk's boundary. Then w(L), the count of Maslov index 2 disks through a point of L, is a well-defined number. The w-summand of the monotone Fukaya category contains the Lagrangians with w(L) = w.

**Problem.** In a compact monotone symplectic manifold, a nonzero w-summand forces w to be an eigenvalue of quantum multiplication by the first Chern class c₁.

**How the definition helps.** The closed–open map from quantum cohomology to HF(L, L) is a unital ring map that sends c₁ to w(L) times the unit (our own). If w were not an eigenvalue, c₁ − w would be invertible yet map to zero, killing the unit of HF(L, L) (our own). The real work is the computation that the closed–open map sends c₁ to the disk count (our own).

**Paper or page:** [Disk potential functions for quadrics](https://arxiv.org/abs/2107.05839v2). It says: “The w-summand Fuk<sub>w</sub>(X) of the monotone Fukaya category is trivial if w is not an eigenvalue of the quantum cup product c₁(TX) ⋆ in QH(X).”

**Sources:**

- [N. Sheridan, On the Fukaya category of a Fano hypersurface in projective space, Publ. Math. IHÉS 124 (2016) 165–317](https://doi.org/10.1007/s10240-016-0082-8)

### Divisor weights recover the affine Fukaya category

**Remember:** Set the divisor variables to zero, and only disks avoiding D survive.

*True by definition.* MSC 53D37 (Symplectic aspects of mirror symmetry, homological mirror symmetry, and Fukaya category), 14J33. arXiv math.SG, math.AG. Level 4: research.

**Definition.** The relative Fukaya category of a smooth projective variety X with a divisor D weights each holomorphic disk u by rᵏ. Here k = u·D is the intersection number of u with D. The category is linear over a power series ring R, with maximal ideal 𝔪.

**Problem.** Modulo 𝔪, the relative Fukaya category is strictly isomorphic to the exact Fukaya category of W, the complement of a neighbourhood of D.

**How the definition helps.** Positivity of intersections gives u·D ≥ 0, with equality only if u misses D, so reduction modulo 𝔪 keeps only disks missing D (our own). A convex collar then keeps such disks inside W, so they are the disks of the exact category (our own). Over the Novikov ring, the same reduction would keep only disks of zero area, which is why the weights must come from D (our own).

**Paper or page:** [Constructing the relative Fukaya category](https://arxiv.org/abs/2203.15482v2), [Constructing the relative Fukaya category](https://arxiv.org/abs/2203.15482v2). It says: “There is a strict isomorphism ℱ(W ⊂ X,ω,θ,V,J₀) ⊗<sub>R</sub> R/𝔪 ≃ ℱ(W,θ).”

**Sources:**

- [T. Perutz and N. Sheridan, Constructing the relative Fukaya category, arXiv:2203.15482 (2023)](https://arxiv.org/abs/2203.15482v2)

### Immersed correspondences compose within the class

**Remember:** Let compositions be immersed, and correspondences compose within the class.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D37 (Symplectic aspects of mirror symmetry, homological mirror symmetry, and Fukaya category), 53D12. arXiv math.SG. Level 4: research.

**Definition.** A Lagrangian correspondence from X₁ to X₂ is a Lagrangian in X₁ × X₂ with the form of X₁ negated. Fukaya takes as morphisms immersed correspondences with clean self-intersection, each with a bounding cochain, a solution of the Maurer–Cartan equation that cancels disk bubbling.

**Problem.** Let L₁ and the correspondence L₁₂ be unobstructed, and let their fibre product over X₁ be a self-clean immersion into X₂. Then the composition is unobstructed, with a bounding cochain built from those of L₁ and L₁₂.

**How the definition helps.** The composition of two embedded correspondences is in general only immersed, so embedded correspondences are not closed under composition (our own). With immersed objects, Fukaya's theorem shows that a self-clean composition is again an unobstructed object. Wehrheim and Woodward avoid the same problem with formal chains of correspondences (our own).

**nLab:** [Lagrangian correspondence](https://ncatlab.org/nlab/show/Lagrangian+correspondence). It says: “which is itself a Lagrangian correspondence in X⁻₀ × X₂ if everything is suitably smoothly embedded by π₀₂.”

**Paper or page:** [Unobstructed Immersed Lagrangian Correspondence and Filtered A∞ Functor](https://arxiv.org/abs/1706.02131v6). It says: “If L₁ and L₁₂ are unobstructed and the immersion L̃₁ ×<sub>X</sub>₁ L̃₁₂ → X₂ is self-clean, then L₁ ×<sub>X</sub>₁ L₁₂ is also unobstructed.”

**Sources:**

- [K. Fukaya, Unobstructed immersed Lagrangian correspondence and filtered A∞ functor, SIGMA 21 (2025) 031](https://doi.org/10.3842/SIGMA.2025.031)
- [K. Wehrheim and C. T. Woodward, Functoriality for Lagrangian correspondences in Floer theory, Quantum Topol. 1 (2010) 129–170](https://doi.org/10.4171/QT/4)

### Liouville sectors make wrapped categories covariant

**Remember:** Near its boundary, a sector looks like a half-plane times something.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D37 (Symplectic aspects of mirror symmetry, homological mirror symmetry, and Fukaya category), 53D40. arXiv math.SG. Level 4: research.

**Definition.** A Liouville sector is an exact symplectic manifold with boundary and a convex end at infinity, with a condition on its boundary. A proposition shows that near the boundary it splits as F times the right half-plane, for a Liouville manifold F. Its wrapped Fukaya category uses Lagrangians that go to infinity, with morphisms computed after pushing them along a flow at infinity.

**Problem.** An inclusion of Liouville sectors X ⊂ Y induces a functor from the wrapped Fukaya category of X to that of Y.

**How the definition helps.** The splitting lets one choose an almost complex structure for which the projection to the half-plane is holomorphic near the boundary (our own). The maximum principle keeps disks on Lagrangians in X away from the boundary, so Y counts the same disks and inclusion gives a functor (our own). For Liouville domains without such a boundary, inclusions give Viterbo restriction functors, which go in the opposite direction (our own).

**Paper or page:** [Mirror Symmetry for Truncated Cluster Varieties](https://arxiv.org/abs/2103.12232v4), [Sectorial covers over fanifolds](https://arxiv.org/abs/2310.10084v2). It says: “The wrapped Fukaya category is covariantly functorial for inclusions of Liouville sectors: a Liouville subsector i: X ⊂ Y induces a functor i: 𝒲(X) → 𝒲(Y).”

**Sources:**

- [S. Ganatra, J. Pardon and V. Shende, Covariantly functorial wrapped Floer theory on Liouville sectors, Publ. Math. IHÉS 131 (2020) 73–200](https://doi.org/10.1007/s10240-019-00112-x)

### Open–closed maps hitting the unit split-generate

**Remember:** If the unit comes from 𝒞, every identity factors through 𝒞.

*Makes the theorem clean to state or prove.* MSC 53D37 (Symplectic aspects of mirror symmetry, homological mirror symmetry, and Fukaya category), 53D40. arXiv math.SG. Level 4: research.

**Definition.** The open–closed map sends the Hochschild homology of a subcategory 𝒞 to quantum cohomology, the cohomology of X with a product that counts holomorphic spheres. Hochschild homology is built from cyclic chains of composable morphisms. Split-generation means that every object is a direct summand of an iterated cone of objects of 𝒞.

**Problem.** Let ℱ be the big relative Fukaya category of X relative to a divisor D, with bounding cochains, as built in the source. If the open–closed map on the Hochschild homology of a subcategory 𝒞 hits the unit of quantum cohomology, then 𝒞 split-generates ℱ.

**How the definition helps.** The closed–open map sends the unit to the identity of each object L, and it is compatible with the open–closed map (our own). If the unit comes from 𝒞, the identity of L factors through 𝒞, so L is a summand of a twisted complex over 𝒞 (our own). This is Abouzaid's generation criterion, first proved for wrapped Fukaya categories, and its algebraic core appears as a lemma in the source (our own).

**Paper or page:** [Constructing the big relative Fukaya category, and its open--closed maps](https://arxiv.org/abs/2511.01656v1), [Constructing the big relative Fukaya category, and its open--closed maps](https://arxiv.org/abs/2511.01656v1). It says: “If 𝒞 ⊂ ℱᵇⁱᵍ(X,D;S)ᵇᶜ is a subcategory such that the unit e ∈ QH⁰(X;S) lies in the image of 𝒪𝒞\|HH\_\*(𝒞), then 𝒞 split-generates ℱᵇⁱᵍ(X,D;S)ᵇᶜ.”

**Sources:**

- [M. Abouzaid, A geometric criterion for generating the Fukaya category, Publ. Math. IHÉS 112 (2010) 191–240](https://doi.org/10.1007/s10240-010-0028-5)

### Sectorial covers glue wrapped Fukaya categories

**Remember:** Cut a sector into sectors, and the categories glue back.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D37 (Symplectic aspects of mirror symmetry, homological mirror symmetry, and Fukaya category), 53D40. arXiv math.SG. Level 4: research.

**Definition.** A Weinstein sectorial cover of a Liouville sector X is a cover by Liouville subsectors U₁, …, Uₙ whose intersections are again Liouville sectors. The pieces must also be Weinstein, a condition on how they are built from handles (our own). Because every piece and every intersection is a sector, inclusions among them give a diagram of wrapped Fukaya categories.

**Problem.** Take a Weinstein sectorial cover of X. Then the homotopy colimit of the wrapped Fukaya categories of all intersections of pieces maps by an equivalence to the wrapped Fukaya category of X.

**How the definition helps.** Covariant functoriality for sectors turns the cover into a diagram of categories, so the gluing statement makes sense (our own). This makes precise the idea that the wrapped Fukaya category is local, like a cosheaf (our own). The work is the proof by Ganatra, Pardon and Shende that the colimit map is an equivalence.

**Paper or page:** [Mirror Symmetry for Truncated Cluster Varieties](https://arxiv.org/abs/2103.12232v4). It says: “The wrapped Fukaya category satisfies descent for Weinstein sectorial covers”

**Sources:**

- [S. Ganatra, J. Pardon and V. Shende, Sectorial descent for wrapped Fukaya categories, J. Amer. Math. Soc. 37 (2024) 499–635](https://doi.org/10.1090/jams/1035)

### Spin structures orient index bundles

**Remember:** Trivialize TL on the 2-skeleton, and disk moduli get signs.

*True by definition. Confidence: medium.* MSC 53D37 (Symplectic aspects of mirror symmetry, homological mirror symmetry, and Fukaya category), 53D40. arXiv math.SG. Level 4: research.

**Definition.** A spin structure on L is a stable trivialization of its tangent bundle over the 2-skeleton, up to homotopy. It exists exactly when the Stiefel–Whitney classes w₁(L) and w₂(L) vanish. Ind is the index bundle, kernels minus cokernels, of a family of Cauchy–Riemann operators on disks with boundary on L.

**Problem.** If L is spin, the index bundle of the Cauchy–Riemann operators with boundary on L is orientable.

**How the definition helps.** A spin structure stably trivializes TL over the 2-skeleton, and this trivializes the boundary data over each loop of disks, which decides orientability (our own). Proposition 3.13 of the source turns a stable trivialization of boundary data into one of the index bundle, and that is the real work (our own). Defining spin by w₁ = w₂ = 0 only says that such a trivialization exists (our own).

**Paper or page:** [Families of relatively exact Lagrangians, free loop spaces and generalised homology](https://arxiv.org/abs/2202.09677v2), [Families of relatively exact Lagrangians, free loop spaces and generalised homology](https://arxiv.org/abs/2202.09677v2). It says: “If L admits a spin structure, Ind and Ind − π\*TL are orientable.”

**Sources:**

- [N. W. Porcelli, Families of relatively exact Lagrangians, free loop spaces and generalised homology, Selecta Math. 30 (2024)](https://doi.org/10.1007/s00029-023-00910-6)

### Twists composing to a shift split-generate

**Remember:** Split-generation counts an object as built when it is a summand.

*Makes the theorem clean to state or prove.* MSC 53D37 (Symplectic aspects of mirror symmetry, homological mirror symmetry, and Fukaya category), 18G80. arXiv math.SG. Level 4: research.

**Definition.** A triangulated A∞ category is one closed under shifts and cones. Objects Y₁, …, Yₘ split-generate it when every object is a direct summand of an iterated cone of them. The twist T along Y fits into an exact triangle hom(Y, X) ⊗ Y → X → T(X).

**Problem.** Let 𝒜 be a split-closed triangulated A∞ category with finite-dimensional morphism spaces. If the composite of the twists along Y₁, …, Yₘ sends each object X to a nonzero shift of X, then the Yᵢ split-generate 𝒜.

**How the definition helps.** The natural map f from X to its composite twist X\[σ\] has a cone built from the Yᵢ (our own). Finite-dimensional morphism spaces force some power of f to vanish, and the octahedral axiom then builds X\[1\] ⊕ X\[Nσ\] from the Yᵢ (our own). So X appears only as a direct summand, which is why the conclusion is split-generation (our own).

**Paper or page:** [Towards Homological Mirror Symmetry](https://arxiv.org/abs/2108.03931v2). It says: “Suppose 𝒜 is readily split-closed and there are Y₁,...,Yₘ ∈ obj(𝒜), σ ≠ 0 such that (T<sub>Y</sub>₁ ∘ ... ∘ T<sub>Y</sub>ₘ)(X) ≅ S<sup>σX</sup> ∈ obj(H⁰(𝒜)) for all X ∈ obj(𝒜). Then {Y₁,...,Yₘ} split-generates 𝒜.”

**Sources:**

- [P. Seidel, Fukaya Categories and Picard–Lefschetz Theory, Zurich Lectures in Advanced Mathematics, EMS, 2008](https://doi.org/10.4171/063)

### Action-filtered Floer cohomology bounds the Lagrangian Hofer distance from below

**Remember:** A spectral invariant records the action where a Floer class appears.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D12. arXiv math.SG. Level 4: research.

**Definition.** The spectral invariant of a Floer class α is the least action level where a cycle representing α appears. Here the Floer complex of (L, L′) is filtered by action. The spectral norm γ(L, L′) is the difference between the invariants of the fundamental class and the point class.

**Problem.** Let L and L′ be curves on the cylinder T\*S¹, Hamiltonian isotopic to the zero circle and meeting transversally in 2n points. Then γ(L, L′) ≤ d(L, L′) ≤ 2ⁿγ(L, L′), where d is the least Hofer length of a Hamiltonian carrying L to L′.

**How the definition helps.** A continuation map for H moves each spectral invariant by at most the time integral of max H, or of −min H (our own). So γ changes by at most the Hofer length of H, and γ(L, L) = 0, which gives the lower bound (our own). The upper bound on the cylinder needs a separate argument with disks between curves (our own).

**Paper or page:** [Bounding the Lagrangian Hofer metric via barcodes](https://arxiv.org/abs/2304.05628). It says: “For any L,L′ as above γ(L,L′) ≤ d<sub>H</sub>(L,L′) ≤ 2ⁿγ(L,L′).”

**Sources:**

- [Bounding the Lagrangian Hofer metric via barcodes, arXiv:2304.05628](https://arxiv.org/abs/2304.05628)

### Boundary depth as the longest finite bar makes it Hofer-Lipschitz

**Remember:** Boundary depth is how long the longest dying class lives.

*True by definition.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 55N31. arXiv math.SG, math.AT. Level 4: research.

**Definition.** The boundary depth β is the least number such that each boundary bounds a chain at most β higher in action level. Filtered homology is a persistence module, a vector space for each level with maps as the level grows. Its barcode lists when classes are born and die, and β is the length of the longest finite bar.

**Problem.** If two persistence modules are δ-interleaved, their boundary depths differ by at most 2δ. So the boundary depth of Floer homology changes by at most twice the Hofer distance between the Hamiltonians (our own).

**How the definition helps.** A δ-interleaving, made of maps both ways that shift levels by δ, changes the longest finite bar by at most 2δ (our own). Usher's chain-level definition needed a direct argument, and the barcode moves that work into the theorem that Floer–Novikov complexes have barcodes (our own). Usher also proved that boundary depth is always finite.

**Paper or page:** [Franks' dichotomy for toric manifolds, Hofer-Zehnder conjecture, and gauged linear sigma model](https://arxiv.org/abs/2309.07991), [Franks' dichotomy for toric manifolds, Hofer-Zehnder conjecture, and gauged linear sigma model](https://arxiv.org/abs/2309.07991). It says: “Suppose V, W are δ-interleaved persistence modules. Suppose V has finite boundary depth. Then W has finite boundary depth and β(W) ≤ β(V) + 2δ.”

**Sources:**

- [M. Usher, Spectral numbers in Floer theories, Compositio Math. 144 (2008) 1581–1592](https://doi.org/10.1112/S0010437X08003564)
- [M. Usher and J. Zhang, Persistent homology and Floer–Novikov theory, Geom. Topol. 20 (2016) 3333–3430](https://doi.org/10.2140/gt.2016.20.3333)

### Bulk deformations find rigid Lagrangians that ordinary Floer cohomology misses

**Remember:** Bulk deformations reweight disks by how they meet a cycle.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D12. arXiv math.SG. Level 4: research.

**Definition.** A bulk deformation is a cycle 𝔟 in M with Novikov coefficients, inserted at interior marked points of the disks that define Floer operations. The bulk-deformed potential counts Maslov-index-2 disks with extra weights from their intersections with 𝔟.

**Problem.** Suppose the bulk-deformed potential of a Lagrangian L has a critical point up to terms of order T to the E′. Then every Hamiltonian that displaces L has energy at least E′, in a weighted Hofer norm.

**How the definition helps.** Such a critical point keeps the deformed Floer cohomology of L nonzero up to order T to the E′, and cheaper displacement kills it (our own). The extra weights add terms to the potential, which can create critical points where the ordinary potential has none (our own). FOOO used exact critical points of this kind to find a continuum of nondisplaceable torus fibres (our own).

**Paper or page:** [Displacement energy of Lagrangian 3-spheres](https://arxiv.org/abs/1911.03516), [Displacement energy of Lagrangian 3-spheres](https://arxiv.org/abs/1911.03516). It says: “potential function PO<sup>(cy,b)</sup>(ρ) for L has a critical point for some (b, ρ) modulo T<sup>E′</sup>, E′ ≤ 2E. If there is a Hamiltonian G<sub>t</sub> with time-1 flow φ such that L∩φ(L)=∅ then it satisfies that \|\|G<sub>t</sub>\|\|<sub>X</sub> + 2\|\|G<sub>t</sub>\|\|<sub>S</sub> ≥ E′.”

**Sources:**

- [K. Fukaya, Y.-G. Oh, H. Ohta, K. Ono, Lagrangian Floer theory on compact toric manifolds II: bulk deformations, Selecta Math. 17 (2011) 609–711](https://doi.org/10.1007/s00029-011-0057-z)
- [Displacement energy of Lagrangian 3-spheres, arXiv:1911.03516](https://arxiv.org/abs/1911.03516)

### Counting fixed points homologically extends the Hofer–Zehnder dichotomy to degenerate maps

**Remember:** A fixed point counts as much as its local Floer homology.

*Makes the theorem clean to state or prove.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 37J11, 37C25. arXiv math.SG, math.DS. Level 4: research.

**Definition.** The homological count of fixed points of φ adds, over its isolated fixed points, the dimension of local Floer homology. Local Floer homology is Floer homology built only from orbits near one fixed point. A nondegenerate fixed point counts once, and a degenerate one can count zero or several times.

**Problem.** Let φ be a Hamiltonian diffeomorphism with isolated fixed points on a compact toric symplectic manifold. If the homological count exceeds the total rank of homology, φ has infinitely many simple periodic points.

**How the definition helps.** In Bai and Xu's toric Floer theory, the homological count equals the number of endpoints of bars, which are birth–death intervals (our own). A count above the total rank therefore forces finite bars, and Shelukhin's barcode argument for prime iterates then gives infinitely many periodic points (our own). The homological count lets the theorem cover degenerate maps, for which a plain count is harder to control (our own).

**Paper or page:** [Franks' dichotomy for toric manifolds, Hofer-Zehnder conjecture, and gauged linear sigma model](https://arxiv.org/abs/2309.07991), [Franks' dichotomy for toric manifolds, Hofer-Zehnder conjecture, and gauged linear sigma model](https://arxiv.org/abs/2309.07991). It says: “If the number of fixed points of φ, counted homologically, is greater than the total rank of homology of X, then φ has infinitely many simple periodic points.”

**Sources:**

- [S. Bai and G. Xu, Franks' dichotomy for toric manifolds, Hofer–Zehnder conjecture, and gauged linear sigma model, arXiv:2309.07991](https://arxiv.org/abs/2309.07991) (link not checked)
- [E. Shelukhin, On the Hofer–Zehnder conjecture, Ann. of Math. 195 (2022) 775–839](https://doi.org/10.4007/annals.2022.195.3.1)

### Critical points of the disk potential give torus fibres nonzero Floer cohomology

**Remember:** A critical point of the potential pins its torus fibre down.

*Makes the theorem clean to state or prove.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D12, 14M25. arXiv math.SG. Level 4: research.

**Definition.** The potential W of a torus fibre L is a function of b in H¹(L; Λ₀). Here Λ₀ holds series in powers of T with nonnegative exponents tending to infinity. W sums, over Maslov-index-2 disk classes β, the disk count through a point, times T to the area, times exp⟨∂β, b⟩.

**Problem.** If b is a critical point of W, the deformed Floer cohomology HF((L,b),(L,b)) is isomorphic to H(Tⁿ), so no Hamiltonian diffeomorphism displaces L. In every compact toric manifold with a rational symplectic form, some fibre has this isomorphism modulo every power of T.

**How the definition helps.** Differentiating the curvature Σ mₖ(b,…,b) in b gives the deformed differential on degree-one classes, so it is dW (our own). The product rule for the deformed operations then kills the differential on all of H(Tⁿ), which degree-one classes generate (our own). On S², a circle cutting areas a and c has W = Tᵃy + Tᶜy⁻¹, which has a valuation-zero critical point only if a = c (our own).

**Paper or page:** [Lagrangian Floer theory on compact toric manifolds I](https://arxiv.org/abs/0802.1703), [Lagrangian Floer theory on compact toric manifolds I](https://arxiv.org/abs/0802.1703). It says: “Assume the Kähler form ω of X is rational. Then, there exists u ∈ Int P such that for any N ∈ ℝ₊ there exists x ∈ H¹(L(u);Λ₀<sup>ℝ</sup>) with HF((L(u),x),(L(u),x);Λ₀<sup>ℝ</sup>/(T<sup>N</sup>)) ≅ H(Tⁿ;ℝ) ⊗\_ℝ Λ₀<sup>ℝ</sup>/(T<sup>N</sup>).”

**Sources:**

- [C.-H. Cho, Y.-G. Oh, Floer cohomology and disc instantons of Lagrangian torus fibers in Fano toric manifolds, Asian J. Math. 10 (2006) 773–814](https://doi.org/10.4310/AJM.2006.v10.n4.a10)
- [K. Fukaya, Y.-G. Oh, H. Ohta, K. Ono, Lagrangian Floer theory on compact toric manifolds I, arXiv:0802.1703](https://arxiv.org/abs/0802.1703)

### Defining the potential by disk counts makes toric mirror symmetry statable

**Remember:** The symplectic disk count is the mirror's Landau–Ginzburg function.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D37, 14J33. arXiv math.SG, math.AG. Level 4: research.

**Definition.** Let X be a compact toric manifold that is Fano, meaning its first Chern class is positive. The potential PO of its torus fibres L(u) is a function of the position u and of b in H¹(L(u); Λ₀). It counts Maslov-index-2 holomorphic disks, and for Fano X there is one such disk class per facet of the polytope.

**Problem.** For a Fano compact toric manifold X, ring maps from QH(X) to the Novikov field match the pairs (L(u), b) with nonzero Floer cohomology. When QH(X) is semisimple, the number of such pairs equals the total Betti number of X.

**How the definition helps.** The disk definition makes the critical points of PO exactly the pairs with nonzero Floer cohomology, so one side of the theorem is geometric (our own). The work moves into FOOO's isomorphism of QH(X) with the Jacobian ring of PO, whose points are the critical points (our own). Givental and Hori–Vafa wrote the same function from the polytope; the disk definition explains why it is the mirror potential (our own).

**Paper or page:** [Lagrangian Floer theory on compact toric manifolds I](https://arxiv.org/abs/0802.1703), [Lagrangian Floer theory on compact toric manifolds I](https://arxiv.org/abs/0802.1703). It says: “If X is a Fano toric manifold then Spec(QH(X;Λ))(Λ<sup>ℂ</sup>) ≅ 𝔐(𝔏𝔞𝔤(X)).”

**Sources:**

- [K. Fukaya, Y.-G. Oh, H. Ohta, K. Ono, Lagrangian Floer theory on compact toric manifolds I, Duke Math. J. 151 (2010) 23–175, arXiv:0802.1703](https://arxiv.org/abs/0802.1703)
- [K. Fukaya, Y.-G. Oh, H. Ohta, K. Ono, Lagrangian Floer theory and mirror symmetry on compact toric manifolds, Astérisque (2018)](https://doi.org/10.24033/ast.978)

### Energy-weighted Novikov coefficients make Floer differentials converge

**Remember:** Energy becomes the exponent, so high-energy strips count as small.

*Makes the theorem clean to state or prove.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology). arXiv math.SG. Level 4: research.

**Definition.** The universal Novikov field Λ consists of formal sums of terms aᵢ times T to the power λᵢ, with real λᵢ tending to infinity. The Floer differential weights each holomorphic strip by T raised to the strip's energy.

**Problem.** Let L₀ and L₁ be Lagrangians such that every disk with boundary on L₀ or on L₁ has zero area. With coefficients in Λ, their Floer differential is well defined and squares to zero, even when infinitely many strip classes join two points.

**How the definition helps.** Gromov compactness leaves only finitely many rigid strips below each energy level, which is exactly the finiteness condition that defines Λ (our own). With integer coefficients one needs a bound on energy, such as monotonicity gives (our own). The work moves into Gromov compactness for strips; asphericity then rules out the bubbles that would spoil ∂² = 0 (our own).

**Paper or page:** [Towards Homological Mirror Symmetry](https://arxiv.org/abs/2108.03931), [Towards Homological Mirror Symmetry](https://arxiv.org/abs/2108.03931). It says: “Let (M,ω) be a symplectic manifold, L₀,L₁ ⊂ M Lagrangian submanifolds such that ⟨ω⟩ · π₂(M,Lᵢ)=0 for i=0,1. Then ∂ is well defined and satisfies ∂²=0.”

**Sources:**

- [K. Fukaya, Y.-G. Oh, H. Ohta, K. Ono, Lagrangian Intersection Floer Theory: Anomaly and Obstruction, AMS/IP Studies in Advanced Mathematics 46 (2009)](https://doi.org/10.1090/amsip/046.1)

### Equal potential values make Floer cohomology of a pair well defined

**Remember:** A weak bounding cochain leaves one number of curvature behind.

*True by definition.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D12. arXiv math.SG. Level 4: research.

**Definition.** A weak bounding cochain b on a Lagrangian L is an odd cochain of positive energy that makes Σₖ mₖ(b,…,b) a multiple of the unit. Here mₖ counts holomorphic disks on L with k inputs, and m₀ is the curvature. The multiple PO(b) is the potential value of b.

**Problem.** For weak bounding cochains b on L and b′ on L′, the Floer operator on CF(L,L′) squares to ±(PO(b) − PO(b′)) times the identity. So the Floer cohomology of the pair is defined whenever PO(b) = PO(b′).

**How the definition helps.** Each curvature is a multiple of the unit, so the bimodule A∞ relation makes the operator's square ±(PO(b) − PO(b′)) times the identity (our own). The strict Maurer–Cartan equation would demand zero curvature, which fails for most torus fibres; the weak equation leaves only one number (our own). For monotone Lagrangians, whose disk area is proportional to Maslov index, this is Oh's condition that the Maslov-two disk counts agree (our own).

**Paper or page:** [Lagrangian Floer theory on compact toric manifolds I](https://arxiv.org/abs/0802.1703). It says: “For each b ∈ M̂<sub>weak</sub>(L) and b′ ∈ M̂<sub>weak</sub>(L′), the map δ<sub>b</sub>,b′ defines a continuous map δ<sub>b</sub>,b′ : CF(L,L′) → CF(L,L′) that satisfies δ<sub>b</sub>,b′ δ<sub>b</sub>,b′ = 0, provided PO(b) = PO(b′).”

**Sources:**

- [K. Fukaya, Y.-G. Oh, H. Ohta, K. Ono, Lagrangian Intersection Floer Theory: Anomaly and Obstruction, AMS/IP Studies in Advanced Mathematics 46 (2009)](https://doi.org/10.1090/amsip/046.1)
- [K. Fukaya, Y.-G. Oh, H. Ohta, K. Ono, Lagrangian Floer theory on compact toric manifolds I, arXiv:0802.1703](https://arxiv.org/abs/0802.1703)

### Excluding nonpositive Maslov disks makes every degree-one class weakly unobstructed

**Remember:** Degree counting leaves only Maslov-two disks, and they give multiples of one.

*True by definition.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D12. arXiv math.SG. Level 4: research.

**Definition.** Let Λ₊ be the Novikov ring of series in powers of T with positive exponents tending to infinity. A class b in H¹(L; Λ₊) is a weak bounding cochain when Σₖ mₖ(b,…,b) is a multiple of the unit. A disk of Maslov index μ, a winding number of its boundary tangent planes, contributes to this sum in degree 2 − μ.

**Problem.** Let L be a closed Lagrangian that is relatively spin, a condition that gives disk counts signs. If L bounds no nonconstant holomorphic disk of Maslov index at most zero, every class in H¹(L; Λ₊) is a weak bounding cochain.

**How the definition helps.** Degree counting does the work: disks of Maslov index four or more contribute in negative degree, so they give zero (our own). Maslov-two disks contribute in degree zero, which on a connected L means multiples of the unit; constant disks cancel by a separate symmetry argument (our own). The strict Maurer–Cartan equation would count the Maslov-two disks as obstructions, but the weak equation absorbs them into one number (our own).

**Paper or page:** [Displacement energy of Lagrangian 3-spheres](https://arxiv.org/abs/1911.03516), [Lagrangian Floer theory on compact toric manifolds I](https://arxiv.org/abs/0802.1703). It says: “For a closed smooth relative spin Lagrangian submanifold L, if L does not bound any non-constant J-holomorphic disk with non-positive Maslov index, then L is weakly unobstructed with respect to J.”

**Sources:**

- [Displacement energy of Lagrangian 3-spheres, arXiv:1911.03516](https://arxiv.org/abs/1911.03516)
- [K. Fukaya, Y.-G. Oh, H. Ohta, K. Ono, Lagrangian Floer theory on compact toric manifolds I, arXiv:0802.1703](https://arxiv.org/abs/0802.1703)

### Free integral Floer complexes give a fixed-point bound that sees torsion

**Remember:** Over the integers, each torsion generator costs two fixed points.

*Makes the theorem clean to state or prove.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 37J11. arXiv math.SG. Level 4: research.

**Definition.** An integral Floer complex of a nondegenerate Hamiltonian diffeomorphism φ is a cochain complex of free ℤ-modules with one generator per fixed point of φ. Its cohomology is H\*(M; ℤ). The minimal rank of M is the least total rank of a free ℤ-complex with cohomology H\*(M; ℤ).

**Problem.** Every nondegenerate Hamiltonian diffeomorphism of a closed symplectic manifold M has at least as many fixed points as the minimal rank of M.

**How the definition helps.** Once the Floer complex is free over ℤ with the right cohomology, the bound holds by the definition of minimal rank (our own). Each cyclic summand of the torsion needs one generator and one relation, so it adds two to the Betti sum (our own). The work is in building the integral complex, which needs smooth models of moduli spaces instead of rational virtual counts (our own).

**Wikipedia:** [Arnold conjecture](https://en.wikipedia.org/wiki/Arnold_conjecture). It says: “Semon Rezchikov, Shaoyun Bai, and Guangbo Xu proved the case 𝔽=ℤ in 2022.”

**Paper or page:** [Integral Arnol'd Conjecture](https://arxiv.org/abs/2209.11165), [Arnold conjecture over integers](https://arxiv.org/abs/2209.08599). It says: “is bounded below by the minimal rank of a cochain complex of free ℤ modules with cohomology isomorphic to H\*(M, ℤ).”

**Sources:**

- [S. Rezchikov, Integral Arnol'd conjecture, arXiv:2209.11165 (2022)](https://arxiv.org/abs/2209.11165)
- [S. Bai and G. Xu, Arnold conjecture over integers, arXiv:2209.08599 (2022)](https://arxiv.org/abs/2209.08599)

### Heavy and superheavy sets meet each other by definition

**Remember:** A heavy set holds the averaged spectral invariant up from below.

*True by definition.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D35. arXiv math.SG. Level 4: research.

**Definition.** For an idempotent e in quantum cohomology, the spectral invariant c(e, H) is the action level where e appears in the Floer cohomology of H. Let ζ(H) be the limit of c(e, kH)/k. A closed set K is heavy if always ζ(H) ≥ min H on K, and superheavy if always ζ(H) ≤ max H on K.

**Problem.** Every superheavy set meets every heavy set, so no Hamiltonian diffeomorphism displaces a superheavy set. A Lagrangian L with HF(L) ≠ 0 is heavy for e when CO(e) ≠ 0, where CO is the closed–open map into Floer cohomology.

**How the definition helps.** Suppose a superheavy X and a heavy Y are disjoint, and H is 0 on X and 1 on Y; then 1 ≤ ζ(H) ≤ 0 (our own). Superheavy sets are heavy and ζ is invariant under Hamiltonian maps, so a superheavy set meets each of its images (our own). A direct proof needs a Floer argument for each set, but here the work moves into building ζ (our own).

**Paper or page:** [Spectral invariants over the integers](https://arxiv.org/abs/2310.19033), [Spectral diameter of negatively monotone manifolds](https://arxiv.org/abs/2410.21416). It says: “Assume HF(L;R) ≠ 0. If CO⁰(e) ≠ 0 for an idempotent e ∈ QH(M,ω;R), then L is e-heavy.”

**Sources:**

- [M. Entov, L. Polterovich, Rigid subsets of symplectic manifolds, Compos. Math. 145 (2009) 773–826](https://doi.org/10.1112/S0010437X0900400X)

### Homogenizing spectral invariants of a field idempotent gives a quasimorphism

**Remember:** Average the invariant over iterates, and only the growth rate survives.

*Makes the theorem clean to state or prove.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 20F65. arXiv math.SG, math.GR. Level 4: research.

**Definition.** Suppose quantum homology, the homology of M with a deformed product, splits off a field summand with unit e. The asymptotic spectral invariant ζ(φ̃) is the limit of c(φ̃ᵏ, e)/k, where c is the action level at which e first appears in Floer homology. Here φ̃ lies in the universal cover of Ham(M), and dividing by k gives ζ(φ̃ᵏ) = kζ(φ̃).

**Problem.** ζ is a homogeneous quasimorphism, which means that ζ(φ̃ψ̃) − ζ(φ̃) − ζ(ψ̃) is bounded over all φ̃ and ψ̃. When ζ is nonzero, as on the 2-sphere, commutator length is unbounded on the universal cover of Ham(M) (our own).

**How the definition helps.** The triangle inequality with e \* e = e makes k ↦ c(φ̃ᵏ, e) subadditive, so the limit exists (our own). The field summand gives a reverse bound up to a constant, and that estimate is where the work went (our own). A nonzero homogeneous quasimorphism forces unbounded commutator length, the least number of commutators needed to write an element (our own).

**Paper or page:** [Spectral invariants over the integers](https://arxiv.org/abs/2310.19033). It says: “Then, the asymptotic spectral invariant of φ̃ with respect to e defines a quasimorphism”

**Sources:**

- [M. Entov and L. Polterovich, Calabi quasimorphism and quantum homology, Int. Math. Res. Not. 2003, no. 30, 1635–1676](https://doi.org/10.1155/S1073792803210011)

### Min-max spectral invariants are attained, so they are action values

**Remember:** The cheapest cycle for a class sets the class's level.

*Makes the theorem clean to state or prove.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology). arXiv math.SG. Level 4: research.

**Definition.** The spectral invariant c(α, H) is a min-max value attached to a nonzero class α of Floer homology. Over all Floer cycles that represent α, take the largest action of an orbit in the cycle. Then take the infimum over these cycles.

**Problem.** For a nondegenerate Hamiltonian, the infimum is attained whenever the Floer complex is defined, for example on semipositive manifolds. So c(α, H) is the action of some capped periodic orbit of H.

**How the definition helps.** The min-max definition gives the action of a generator as soon as the infimum is attained (our own). When the areas of spheres form a discrete set, the action values are discrete and attainment is immediate (our own). When they are dense the infimum could escape, and the work is in Usher's theorem that it is attained in every Floer–Novikov complex.

**Wikipedia:** [Spectral invariants](https://en.wikipedia.org/wiki/Spectral_invariants). It says: “the minimum is taken over all Floer cycles that represent the class α.”

**Paper or page:** [Franks' dichotomy for toric manifolds, Hofer-Zehnder conjecture, and gauged linear sigma model](https://arxiv.org/abs/2309.07991). It says: “Given a Floer–Novikov package 𝔠 (over a Noetherian ring R) and α ∈ HF(𝔠) ∖ {0}, ρ(α) &gt; −∞ and α ∈ Im(ιρ(α))”

**Sources:**

- [Y.-G. Oh, Construction of spectral invariants of Hamiltonian paths on closed symplectic manifolds, in The Breadth of Symplectic and Poisson Geometry, Progr. Math. 232, Birkhäuser (2005) 525–570](https://doi.org/10.1007/0-8176-4419-9_18)
- [M. Usher, Spectral numbers in Floer theories, Compositio Math. 144 (2008) 1581–1592](https://doi.org/10.1112/S0010437X08003564)

### Pearl complexes filter by Maslov index, giving Oh's spectral sequence

**Remember:** Pearls are holomorphic disks strung on Morse gradient lines.

*True by definition. Confidence: medium.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D12. arXiv math.SG. Level 4: research.

**Definition.** Let L be monotone, meaning disk area is proportional to Maslov index, with minimal Maslov number N. The pearl complex is the Morse complex of a function on L, tensored with ℤ₂\[t, t⁻¹\] where t has degree −N. Its differential is d₀ + d₁t + d₂t² + …, where dₖ counts gradient lines interrupted by disks of total Maslov index kN.

**Problem.** Filtering by powers of t gives a spectral sequence from H(L; ℤ₂) ⊗ ℤ₂\[t, t⁻¹\] to the Floer cohomology of L. If N ≥ dim L + 2, it collapses, so L has nonzero Floer cohomology and no Hamiltonian diffeomorphism displaces L.

**How the definition helps.** The filtration by powers of t is part of the definition, and d₀ is the Morse differential, so the first page is Morse cohomology (our own). For k ≥ 1, dₖ shifts Morse degree by kN − 1 &gt; dim L, so dₖ = 0 (our own). Oh filtered the Floer complex by energy instead; here the work moves into Biran and Cornea's proof that pearl and Floer cohomology agree (our own).

**Paper or page:** [Zoo of monotone Lagrangians in ℂPⁿ](https://arxiv.org/abs/2110.11326). It says: “Suppose that p is odd and p&gt;1. Then QH(L(2p,p), ℤ₂\[T, T⁻¹\]) is isomorphic to H\*(L(2p,p), ℤ₂\[T,T⁻¹\]). This yields that the Lagrangians L(2p,p) are not displaceable.”

**Sources:**

- [P. Biran, O. Cornea, Rigidity and uniruling for Lagrangian submanifolds, Geom. Topol. 13 (2009) 2881–2989](https://doi.org/10.2140/gt.2009.13.2881)

### Persistence modules make Hofer stability of Floer theory a barcode statement

**Remember:** Floer homology becomes a list of bars with births and deaths.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 55N31. arXiv math.SG, math.AT. Level 4: research.

**Definition.** Over a field, filtered Floer homology is a persistence module, a vector space for each action level with maps as the level grows. Usher and Zhang showed that it has a barcode, a list of intervals that record when classes are born and die. The bottleneck distance between barcodes is the largest endpoint shift in the best matching of their bars.

**Problem.** For nondegenerate normalized H₁ and H₂, the barcodes lie within bottleneck distance at most twice the Hofer norm of H₁ − H₂ (our own). Normalized means mean zero over M at each time, and the Hofer norm is the time integral of max − min.

**How the definition helps.** Continuation maps both ways shift action by at most the Hofer norm of H₁ − H₂, so the filtered complexes are close (our own). Usher and Zhang proved that close Floer–Novikov complexes have barcodes within twice that distance. One algebraic theorem then controls spectral invariants and boundary depth together (our own).

**Paper or page:** [Franks' dichotomy for toric manifolds, Hofer-Zehnder conjecture, and gauged linear sigma model](https://arxiv.org/abs/2309.07991), [Franks' dichotomy for toric manifolds, Hofer-Zehnder conjecture, and gauged linear sigma model](https://arxiv.org/abs/2309.07991). It says: “Suppose the quasiequivalence distance between CF•(𝔠₁) and CF•(𝔠₂) is finite. Then d<sub>B</sub> (𝓑(𝔠₁), 𝓑 (𝔠₂)) ≤ 2 d<sub>Q</sub> ( CF•(𝔠₁), CF•(𝔠₂)).”

**Sources:**

- [M. Usher and J. Zhang, Persistent homology and Floer–Novikov theory, Geom. Topol. 20 (2016) 3333–3430](https://doi.org/10.2140/gt.2016.20.3333)

### Relative spin structures orient disk moduli spaces, giving rational Floer theory

**Remember:** Relative spin data tell every disk count which sign it carries.

*Makes the theorem clean to state or prove.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D12. arXiv math.SG. Level 4: research.

**Definition.** A Lagrangian L in M is relatively spin when it is orientable and w₂(TL) extends to a class in H²(M; ℤ₂). Here w₂ is the obstruction to a spin structure. A choice of such data orients every moduli space of holomorphic disks on L, compatibly with gluing.

**Problem.** For a compact relatively spin Lagrangian, the disk-counting operations form an A∞ algebra over the Novikov ring with rational coefficients, not only modulo 2. So potentials, local systems and characteristic-zero Floer cohomology make sense.

**How the definition helps.** The data orient every disk moduli space compatibly with gluing, so disk counts have signs and the A∞ relations hold over ℚ (our own). The orientation comes from a spin structure on TL ⊕ V, for a bundle V on M with w₂(V) equal to that class (our own). Without such data the counts have no signs, so only ℤ₂ coefficients work, as for the non-orientable ℝP² in ℂP² (our own).

**Paper or page:** [Lagrangian Floer theory on compact toric manifolds I](https://arxiv.org/abs/0802.1703), [Families of relatively exact Lagrangians, free loop spaces and generalised homology](https://arxiv.org/abs/2202.09677). It says: “Let L be an arbitrary compact relatively spin Lagrangian submanifold of an arbitrary tame symplectic manifold (M,ω). The coderivation d̂ is a continuous map that satisfies the A∞ relation d̂ d̂ = 0.”

**Sources:**

- [K. Fukaya, Y.-G. Oh, H. Ohta, K. Ono, Lagrangian Intersection Floer Theory: Anomaly and Obstruction, AMS/IP Studies in Advanced Mathematics 46 (2009)](https://doi.org/10.1090/amsip/046.1)

### Scalar curvature permits Floer differentials

**Remember:** Curvature that is a multiple of the unit cancels itself.

*True by definition.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D37. arXiv math.SG. Level 4: research.

**Definition.** In a complete filtered strictly unital Fukaya algebra, a weak bounding cochain is a degree-one element b of positive filtration whose total curvature is a scalar multiple of the unit: ∑ₖ≥₀ mₖ(b,…,b) = W·1. The k = 0 term is the original curvature m₀.

**Problem.** In a complete filtered, strictly unital Fukaya algebra, twisting by a weak bounding cochain makes the one-input operation square to zero.

**How the definition helps.** Twisting by b makes the curvature W·1 (our own). The A∞ relation makes the square of the twisted m₁ a signed difference of m₂ with the curvature on the left and right (our own). The strict unit makes these two terms cancel, so the square is zero (our own).

**Paper or page:** [Curved Fukaya algebras and the Dubrovin spectrum](https://arxiv.org/abs/2401.13603v1). It says: “if $D\\in \\operatorname{MC} ^B(L)$ then $(m<sup>1<sub>B</sup>,D</sub>)<sup>2=0$</sup>”

**Sources:**

- [Curved Fukaya algebras and the Dubrovin spectrum](https://arxiv.org/abs/2401.13603v1)

### A dilation forbids exact aspherical Lagrangians

**Remember:** A class that rotation turns into 1.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D42 (Symplectic field theory; contact homology), 53D12, 53D40. arXiv math.SG. Level 4: research.

**Definition.** A dilation on a Liouville manifold M is a class b in the degree-one symplectic cohomology of M. Its image under the BV operator, the operation that comes from rotating loops, is the unit 1.

**Problem.** A Liouville manifold that admits a dilation contains no closed exact Lagrangian submanifold that is a K(π,1) space, a space whose universal cover is contractible.

**How the definition helps.** Viterbo restriction keeps the unit and the BV operator, so the loop space of L gets a class that rotation sends to 1 (our own). That is impossible for a K(π,1) space, so no such L exists (our own). The work went into Viterbo's restriction map and the loop-space argument of Seidel and Solomon (our own).

**Paper or page:** [Nonexistence of exact Lagrangian tori in affine conic bundles over $\\mathbb{C}<sup>n$</sup>](https://arxiv.org/abs/2104.10050). It says: “Let M be a Liouville manifold admitting a dilation. If L⊂M is a closed exact Lagrangian submanifold, then L cannot be a K(π,1) space.”

**Sources:**

- [P. Seidel and J. P. Solomon, Symplectic cohomology and q-intersection numbers, Geometric and Functional Analysis 22 (2012) 443–477](https://doi.org/10.1007/s00039-012-0159-6)

### A Lagrange multiplier frees the period of closed orbits

**Remember:** The multiplier becomes the period, so no period is fixed in advance.

*True by definition.* MSC 53D42 (Symplectic field theory; contact homology), 53D40, 37J46. arXiv math.SG. Level 4: research.

**Definition.** The Rabinowitz action functional takes a loop γ and a real number τ. Its value is the symplectic action of γ minus τ times the average of H along γ. So τ is a Lagrange multiplier for the constraint that γ lies on the energy surface H = 0.

**Problem.** The critical points of the Rabinowitz functional are the pairs (γ, τ) with γ in H = 0 following τ times the Hamiltonian vector field. For τ ≠ 0 they are closed orbits of period \|τ\| on the energy surface, and τ = 0 gives constant loops.

**How the definition helps.** Varying τ makes the average of H along γ zero (our own). Varying γ makes γ follow τ times the Hamiltonian field, so H is constant on γ and hence zero (our own). The usual fixed-period action functional finds orbits of one fixed period at any energy, not orbits of fixed energy (our own).

**Paper or page:** [First Steps in Twisted Rabinowitz-Floer Homology](https://arxiv.org/abs/2105.13934). It says: “consists precisely of all (γ,τ) ∈ ℒ\_φM × ℝ such that γ(ℝ) ⊆ H⁻¹(0) and γ is an integral curve of τX<sub>H</sub>.”

**Sources:**

- [K. Cieliebak and U. Frauenfelder, A Floer homology for exact contact embeddings, Pacific Journal of Mathematics 239 (2009) 251–316](https://doi.org/10.2140/pjm.2009.239.251)

### Discarding bad Reeb orbits makes orientations canonical

**Remember:** Bad orbits flip their own sign when you turn them.

*Rules out counterexamples. Confidence: medium.* MSC 53D42 (Symplectic field theory; contact homology). arXiv math.SG. Level 4: research.

**Definition.** A Reeb orbit is bad if it is an even multiple cover of a simple orbit whose Conley–Zehnder index has the opposite parity. Other orbits are good. On a bad orbit, rotating the cover by one sheet reverses the orientation line of the orbit.

**Problem.** If all asymptotic orbits are good, the orientation line of a moduli space of punctured holomorphic curves is canonically a product of orbit lines. So curves can be counted with consistent signs.

**How the definition helps.** On a good orbit, rotating the cover acts trivially on the orientation line, so each orbit's orientation can be fixed once (our own). The removed counterexample is the double cover of a negative hyperbolic orbit in dimension three, where rotation reverses the line (our own). No choice is invariant there and curves would cancel in pairs, so such orbits are left out (our own).

**Paper or page:** [A contact homotopy type](https://arxiv.org/abs/2511.01821). It says: “If Γ⁺ and Γ⁻ consist of good Reeb orbits, then the orientation line 𝔬\_𝒦 of 𝒦 is canonically isomorphic to”

**Sources:**

- [F. Bourgeois and K. Mohnke, Coherent orientations in symplectic field theory, Mathematische Zeitschrift 248 (2004)](https://doi.org/10.1007/s00209-004-0656-x)

### Excluding trivial cylinders makes translation act freely

**Remember:** The only curves that sliding cannot move are the vertical cylinders.

*Rules out counterexamples. Confidence: medium.* MSC 53D42 (Symplectic field theory; contact homology), 32Q65. arXiv math.SG. Level 4: research.

**Definition.** Take the symplectization ℝ × M with an almost complex structure invariant under translation in ℝ. A trivial cylinder is ℝ × γ over a closed Reeb orbit γ. Up to branched covers, trivial cylinders are the only holomorphic curves with zero dα-energy.

**Problem.** Translation in ℝ acts freely on every moduli space of holomorphic curves in a symplectization that are not branched covers of trivial cylinders. So, for a generic almost complex structure, somewhere injective curves of Fredholm index 1 form one-parameter families whose quotient by translation is discrete.

**How the definition helps.** A curve fixed by a nonzero translation consists of infinitely many translated copies of one piece, so finite dα-energy forces zero dα-energy (our own). So it covers trivial cylinders, which are the removed counterexample: every translation fixes them and they have index 0 (our own). They do not generally contribute to differentials, but they may appear as components of more complicated curves.

**Wikipedia:** [Trivial cylinder](https://en.wikipedia.org/wiki/Trivial_cylinder). It says: “The product of a given embedded closed orbit with R is always a pseudoholomorphic curve, and such a curve is called a trivial cylinder. Trivial cylinders do not generally contribute to the aforementioned differentials, but they may appear as components of more complicated curves which do.”

**Sources:**

- [M. Hutchings, An index inequality for embedded pseudoholomorphic curves in symplectizations, Journal of the European Mathematical Society 4 (2002) 313–361](https://doi.org/10.1007/s100970100041)

### Functoriality gives exactly fillable contact manifolds nonzero contact homology

**Remember:** A filling is a map to ℚ, which needs 1 ≠ 0.

*True by definition.* MSC 53D42 (Symplectic field theory; contact homology), 57R17. arXiv math.SG, math.GT. Level 4: research.

**Definition.** Contact homology is a functor from contact manifolds and exact symplectic cobordisms to unital algebras. The empty contact manifold has contact homology ℚ. So an exact filling, a cobordism down to the empty set, gives a unital algebra map from the contact homology to ℚ.

**Problem.** An exactly fillable contact manifold has nonzero contact homology. So an overtwisted contact manifold, whose contact homology is zero, has no exact filling.

**How the definition helps.** A unital algebra map to ℚ sends 1 to 1, so 1 ≠ 0 in the contact homology of an exactly fillable manifold (our own). In dimension three, the older proof that overtwisted manifolds have no filling follows a family of holomorphic disks (our own). The work went into the cobordism maps, built with virtual counts of holomorphic curves by Pardon and by Bao and Honda (our own).

**Paper or page:** [Semi-global Kuranishi charts and the definition of contact homology](https://arxiv.org/abs/1512.00580), [Contact $(+1)$-surgeries and algebraic overtwistedness](https://arxiv.org/abs/2307.12635). It says: “Let W be a compact exact symplectic cobordism which restricts to (M₊,ξ₊) at the positive boundary and to (M₋,ξ₋) at the negative boundary. Then there is an algebra homomorphism Φ\_\*:HC(ξ₊)→HC(ξ₋).”

**Sources:**

- [J. Pardon, Contact homology and virtual fundamental cycles, Journal of the American Mathematical Society 32 (2019) 825–919](https://doi.org/10.1090/jams/924)
- [E. Bao and K. Honda, Semi-global Kuranishi charts and the definition of contact homology (arXiv 1512.00580)](https://arxiv.org/abs/1512.00580)

### Hofer energy makes finite-energy punctures converge to Reeb orbits

**Remember:** Measure energy with a bounded ruler so cylinders count as finite.

*Makes the theorem clean to state or prove.* MSC 53D42 (Symplectic field theory; contact homology), 37J46. arXiv math.SG. Level 4: research.

**Definition.** Let u = (a, f) be a holomorphic curve in the symplectization ℝ × M of a contact manifold with contact form α. Its Hofer energy is the supremum, over increasing functions φ from ℝ to \[0, 1\], of the integral of d(φ(a)α) over u. Unlike the area for d(eᵗα), it is finite on cylinders over closed Reeb orbits.

**Problem.** A finite-Hofer-energy holomorphic half-cylinder in a symplectization either has a removable puncture or has loops converging along a sequence to a closed Reeb orbit. For Morse–Bott contact forms, the convergence is full and exponential.

**How the definition helps.** The supremum over bounded φ removes the exponential growth of the form d(eᵗα), so the expected limit cylinders have finite energy (our own). Finite dα-energy on long cylinders then forces the loops near the puncture to be close to closed Reeb orbits (our own). The work went into the convergence analysis, which Hofer used to find closed Reeb orbits on the 3-sphere (our own).

**Wikipedia:** [Weinstein conjecture](https://en.wikipedia.org/wiki/Weinstein_conjecture). It says: “A new approach without this assumption was discovered in dimension 3 by Hofer and is at the origin of contact homology.”

**Paper or page:** [Removal of singularities in Morse-Bott symplectizations](https://arxiv.org/abs/2509.17772). It says: “be a J-holomorphic map with finite Hofer energy. Then, u either has a removable singularity at ∞ or there exist constants c, δ&gt;0, a ∈ ℝ, a period T ∈ ℝ and a periodic Reeb orbit γ”

**Sources:**

- [H. Hofer, Pseudoholomorphic curves in symplectizations with applications to the Weinstein conjecture in dimension three, Inventiones Mathematicae 114 (1993) 515–563](https://doi.org/10.1007/BF01232679)

### Holomorphic buildings make neck-stretching limits compact

**Remember:** Energy lost down the neck is caught in extra floors.

*Makes the theorem clean to state or prove.* MSC 53D42 (Symplectic field theory; contact homology), 32Q65. arXiv math.SG. Level 4: research.

**Definition.** A holomorphic building is a finite stack of levels glued along matching Reeb orbits at their punctures. The levels are curves in the two halves of a manifold split along a contact hypersurface and curves in copies of the symplectization between them. It is stable if no symplectization level consists only of trivial cylinders, the cylinders over Reeb orbits.

**Problem.** Stretch the neck of a symplectic manifold along a contact hypersurface. Then every sequence of holomorphic curves of fixed genus with bounded energy has a subsequence that converges to a stable holomorphic building.

**How the definition helps.** The definition adds exactly the limits that appear: curve pieces that escape into the lengthening neck become symplectization levels (our own). Stability removes levels made only of trivial cylinders, which could be added without end and spoil uniqueness of the limit (our own). The analysis is the compactness theorem of Bourgeois, Eliashberg, Hofer, Wysocki and Zehnder (our own).

**Paper or page:** [Lagrangian Spheres and Cyclic Quotient T-singularities](https://arxiv.org/abs/2509.18976). It says: “Given a neck stretching family J<sub>t</sub> and a sequence of J<sub>k</sub>-holomorphic curves f<sub>k</sub> : Σ → X<sub>k</sub> with uniformly bounded energy, there exists a subsequence converging to a stable J\*-holomorphic building F.”

**Sources:**

- [F. Bourgeois, Y. Eliashberg, H. Hofer, K. Wysocki and E. Zehnder, Compactness results in symplectic field theory, Geometry &amp; Topology 7 (2003) 799–888](https://doi.org/10.2140/gt.2003.7.799)

### Hypertight forms exclude holomorphic planes

**Remember:** A plane would cap its orbit, and hypertight orbits have no caps.

*Rules out counterexamples. Confidence: medium.* MSC 53D42 (Symplectic field theory; contact homology). arXiv math.SG. Level 4: research.

**Definition.** A contact form α is hypertight if none of its Reeb orbits bounds a continuous disk. A Reeb orbit is a closed trajectory of the vector field R with α(R) = 1 and dα(R, ·) = 0.

**Problem.** Add a positive coordinate r to the contact manifold and use the symplectic form d(rα) on the product. For a hypertight form, this space contains no holomorphic plane approaching a single Reeb orbit at infinity.

**How the definition helps.** Such a plane would make its limit orbit bound a disk, which hypertightness forbids (our own proof). Project a large circle of the plane to the contact manifold. The projected loop is homotopic to the orbit, and the projected inner disk fills it.

**Paper or page:** [A contact homotopy type](https://arxiv.org/abs/2511.01821v1). It says: “Suppose (Y, λ) has no contractible Reeb orbits.”

**Sources:**

- [A contact homotopy type, Corollary 1.5](https://arxiv.org/abs/2511.01821v1)

### Loose attaching spheres kill symplectic cohomology of flexible domains

**Remember:** A loose chart kills the algebra that critical handles would contribute.

*Rules out counterexamples. Confidence: medium.* MSC 53D42 (Symplectic field theory; contact homology), 57R17, 53D40. arXiv math.SG. Level 4: research.

**Definition.** A Weinstein domain of dimension 2n ≥ 6 is flexible if its index-n handles are attached along loose Legendrian spheres. A loose sphere contains a standard stabilized chart, and that chart has a Reeb chord with differential 1. So the Legendrian contact homology algebra of a loose sphere is zero.

**Problem.** Every flexible Weinstein domain has zero symplectic cohomology, and the same holds after twisting by any closed two-form.

**How the definition helps.** The Bourgeois–Ekholm–Eliashberg surgery formula computes the change from each critical handle by its Legendrian contact homology, which is zero for loose spheres (our own). Subcritical domains have zero symplectic cohomology, so the total vanishes, but the surgery formula assumes transversality (our own). The removed counterexample is the cotangent disk bundle of a sphere, whose handle is attached along a non-loose sphere, with nonzero symplectic cohomology (our own).

**Paper or page:** [Symplectic Criteria on Stratified Uniruledness of Affine Varieties and Applications](https://arxiv.org/abs/2201.10669). It says: “Let M be a flexible Weinstein domain, then, for any closed two-form on M, the twisted symplectic cohomology SH\*(M, Λ₂)=0.”

**Sources:**

- [F. Bourgeois, T. Ekholm and Y. Eliashberg, Effect of Legendrian surgery, Geometry &amp; Topology 16 (2012) 301–389](https://doi.org/10.2140/gt.2012.16.301)
- [E. Murphy and K. Siegel, Subflexible symplectic manifolds, Geometry &amp; Topology 22 (2018) 2367–2401](https://doi.org/10.2140/gt.2018.22.2367)

### Mayer–Vietoris forces a non-displaceable piece

**Remember:** An invariant that vanishes on displaceable sets and glues exactly.

*Makes the theorem clean to state or prove.* MSC 53D42 (Symplectic field theory; contact homology), 53D40. arXiv math.SG. Level 4: research.

**Definition.** Relative symplectic cohomology gives each compact set K in a symplectic manifold an invariant SH(K). With Novikov field coefficients, SH(K) is zero when K is stably displaceable, for example when a Hamiltonian diffeomorphism moves K off itself. For Poisson commuting sets, roughly sublevel sets of functions with zero Poisson bracket, it has a Mayer–Vietoris exact sequence.

**Problem.** Suppose finitely many compact sets Poisson commute and their union has nonzero relative symplectic cohomology. Then at least one of the sets cannot be displaced from itself.

**How the definition helps.** If every piece were displaceable, every piece and every intersection of pieces would have zero invariant (our own). Then the Mayer–Vietoris sequence would make the invariant of the union zero, which is a contradiction (our own). The work went into Varolgunes' Mayer–Vietoris property and his vanishing theorem for stably displaceable sets (our own).

**Paper or page:** [Contact big fiber theorems](https://arxiv.org/abs/2503.04277), [Contact big fiber theorems](https://arxiv.org/abs/2503.04277), [Index bounded relative symplectic cohomology](https://arxiv.org/abs/2109.06146). It says: “Let K₁, ⋯, K<sub>N</sub> be a Poisson commuting collection of compact subsets of M. Let K:=K₁∪…∪K<sub>N</sub>. If SH\*<sub>M</sub>(K)≠0, then at least one of K₁, ⋯, K<sub>N</sub> is not displaceable from itself by a Hamiltonian diffeomorphism.”

**Sources:**

- [U. Varolgunes, Mayer–Vietoris property for relative symplectic cohomology, Geometry &amp; Topology 25 (2021) 547–642](https://doi.org/10.2140/gt.2021.25.547)

### Rabinowitz Floer homology turns displaceability into Reeb orbits

**Remember:** A Floer homology whose generators are Reeb orbits and constant loops.

*Makes the theorem clean to state or prove.* MSC 53D42 (Symplectic field theory; contact homology), 53D40, 37J46. arXiv math.SG. Level 4: research.

**Definition.** A Liouville domain is a compact exact symplectic manifold whose Liouville vector field points out of the boundary Σ, so Σ is a contact manifold. Its Rabinowitz Floer homology is the Floer homology of the Rabinowitz functional. The critical points are the closed Reeb orbits on Σ and the constant loops on Σ.

**Problem.** Suppose the boundary of a Liouville domain is simply connected and can be displaced from itself in the completion. Then the boundary carries a nonconstant closed Reeb orbit.

**How the definition helps.** With no nonconstant Reeb orbits, only constant loops generate, so the homology is that of Σ and is not zero (our own). Displaceability makes the homology zero, so an orbit must exist (our own). The work went into the vanishing theorem for displaceable boundaries (our own).

**Paper or page:** [First Steps in Twisted Rabinowitz-Floer Homology](https://arxiv.org/abs/2105.13934), [First Steps in Twisted Rabinowitz-Floer Homology](https://arxiv.org/abs/2105.13934). It says: “Let (W,λ) be a Liouville domain with displaceable boundary in the completion (M,λ) and φ ∈ Aut(W,λ). Then RFH<sup>φ</sup>(Σ,M) ≅ 0.”

**Sources:**

- [K. Cieliebak and U. Frauenfelder, A Floer homology for exact contact embeddings, Pacific Journal of Mathematics 239 (2009) 251–316](https://doi.org/10.2140/pjm.2009.239.251)

### Selective symplectic homology turns contact non-squeezing into ranks

**Remember:** Only the selected boundary may wind, so rank measures size.

*Makes the theorem clean to state or prove.* MSC 53D42 (Symplectic field theory; contact homology), 53D40, 53D10. arXiv math.SG. Level 4: research.

**Definition.** Let Ω be an open set in the contact boundary of a Liouville domain W. Selective symplectic homology of Ω uses only Hamiltonians that grow at infinity over Ω. It has a continuation map to the full symplectic homology SH(W), natural for inclusions and for contact isotopies.

**Problem.** Let A and B be open sets in the contact boundary of a Liouville domain W. If B's selective homology maps to SH(W) with larger rank than A's, no contact isotopy of the boundary squeezes B into A.

**How the definition helps.** A squeeze of B into A would make B's map factor through A's map, and a composite has rank at most each factor's (our own). So the definition turns a geometric non-squeezing question into a comparison of ranks (our own). The work went into naturality under contact isotopies, Theorem 1.6 of the same paper (our own).

**Paper or page:** [Selective symplectic homology with applications to contact non-squeezing](https://arxiv.org/abs/2205.14771). It says: “If the rank of the continuation map SH\_∗<sup>Ω<sub>b</sub></sup>(W)→SH\_∗(W) is (strictly) greater than the rank of the continuation map SH\_∗<sup>Ω<sub>a</sub></sup>(W)→SH\_∗(W), then Ω<sub>b</sub> cannot be contactly squeezed into Ω<sub>a</sub>.”

**Sources:**

- [I. Uljarević, Selective symplectic homology with applications to contact non-squeezing, Compositio Mathematica 159 (2023) 2458–2482](https://doi.org/10.1112/s0010437x23007480)

### The ECH index forces index-one currents to be embedded

**Remember:** A topological index that leaves no room for singular points.

*Makes the theorem clean to state or prove.* MSC 53D42 (Symplectic field theory; contact homology), 57R58. arXiv math.SG, math.GT. Level 4: research.

**Definition.** A holomorphic current C is a finite sum, with multiplicities, of holomorphic curves in the symplectization of a contact 3-manifold. Its ECH index I(C) combines a relative Chern class, a relative self-intersection and Conley–Zehnder indices. For a somewhere injective curve C, the index inequality says that the Fredholm index plus twice a weighted count of singularities is at most I(C).

**Problem.** For a generic almost complex structure, every holomorphic current has ECH index at least 0, with equality only for sums of trivial cylinders. A current of ECH index 1 is a sum of trivial cylinders and one embedded curve of Fredholm index 1 disjoint from them.

**How the definition helps.** With superadditivity of I under unions, the index inequality leaves no room for singular or multiply covered nontrivial pieces when I = 1 (our own). So the ECH differential, which counts currents of index 1, counts embedded curves (our own). The work went into Hutchings' index inequality, which uses the writhe of braids near the Reeb orbits (our own).

**Wikipedia:** [Floer homology](https://en.wikipedia.org/wiki/Floer_homology). It says: “only those that also satisfy a topological condition given by the ECH index, which in particular implies that the curves considered are (mainly) embedded.”

**Paper or page:** [Proof of Hofer-Wysocki-Zehnder's two or infinity conjecture](https://arxiv.org/abs/2310.07636). It says: “If I(𝒞)=1, then 𝒞 = 𝒞₀+C₁, where I(𝒞₀)=0, and C₁ is embedded and disjoint from 𝒞₀ and satisfies ind(C₁)=I(C₁)=1.”

**Sources:**

- [M. Hutchings, An index inequality for embedded pseudoholomorphic curves in symplectizations, Journal of the European Mathematical Society 4 (2002) 313–361](https://doi.org/10.1007/s100970100041)

### The empty orbit set gives ECH a contact invariant

**Remember:** Nothing at the top means nothing can flow down.

*True by definition.* MSC 53D42 (Symplectic field theory; contact homology), 57R58, 57K33. arXiv math.SG, math.GT. Level 4: research.

**Definition.** Embedded contact homology (ECH) of a contact 3-manifold is generated by orbit sets, finite sets of simple Reeb orbits with multiplicities. The empty set counts as an orbit set. The differential counts holomorphic currents in the symplectization from one orbit set at the top to another at the bottom.

**Problem.** The empty orbit set is a cycle in the ECH chain complex. Its class c(ξ) is an invariant of the contact structure, and Taubes's isomorphism carries it to the contact invariant in Seiberg–Witten Floer cohomology.

**How the definition helps.** A current from the empty set has no positive ends, so it has no energy and is empty, and ∂∅ = 0 (our own). The Heegaard Floer contact invariant instead needs an open book, a fibration over the circle of the complement of a link (our own). The proof that the class depends only on the contact structure went into Taubes's isomorphism (our own).

**Wikipedia:** [Floer homology](https://en.wikipedia.org/wiki/Floer_homology). It says: “The contact element of ECH has a particularly nice form: it is the cycle associated to the empty collection of Reeb orbits.”

**Paper or page:** [Properties of contact toric structures and concave boundaries of linear plumbings](https://arxiv.org/abs/2501.08451). It says: “which sends the ECH contact invariant c(ξ):=\[∅\] ∈ ECH(Y,ξ,0) to the contact invariant in Seiberg-Witten Floer (monopole) cohomology.”

**Sources:**

- [C. H. Taubes, Embedded contact homology and Seiberg–Witten Floer cohomology I, Geometry &amp; Topology 14 (2010) 2497–2581](https://doi.org/10.2140/gt.2010.14.2497)

### A uniruled curve class bounds the Gromov width by its area

**Remember:** A nonzero count forces a curve through every point.

*Makes the theorem clean to state or prove.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds), 53D35. arXiv math.SG. Level 4: research.

**Definition.** A class A in H₂(X) is uniruled when some genus-zero Gromov–Witten invariant of class A with a point constraint is nonzero. Then, for every tame almost complex structure J, a J-holomorphic stable map of class A passes through every point.

**Problem.** If A is a uniruled class, the Gromov width of X is at most ω(A). The Gromov width is the supremum of πr² over symplectic embeddings of the ball of radius r into X.

**How the definition helps.** Take J standard on an embedded ball of radius r; the nonzero invariant forces a curve of class A through the centre (our own). The monotonicity lemma says such a curve has area at least πr² inside the ball, so πr² ≤ ω(A) (our own). Gromov's non-squeezing theorem is the case of a sphere times a torus (our own).

**Paper or page:** [Cohomologous symplectic forms with different Gromov widths](https://arxiv.org/abs/2505.09550v1). It says: “For any uniruled class A, w<sub>G</sub>(X,ω) ≤ ω(A).”

**Sources:**

- [M. Gromov, Pseudo holomorphic curves in symplectic manifolds, Invent. Math. 82 (1985) 307–347](https://doi.org/10.1007/BF01388806)

### Global Kuranishi charts give integral splitting of Hamiltonian fibrations over spheres

**Remember:** Present the whole moduli space as one zero set modulo one group.

*Makes the theorem clean to state or prove.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds), 55N22. arXiv math.SG, math.AT. Level 4: research.

**Definition.** A global Kuranishi chart is one manifold with a compact Lie group action, one equivariant bundle and one equivariant section. Its zero set modulo the group is the moduli space of stable maps. So one can define counts in generalized cohomology theories, such as Morava K-theories.

**Problem.** A loop of Hamiltonian diffeomorphisms of X clutches a bundle P over the sphere. Its integral cohomology is additively H\*(X) ⊗ H\*(S²); Lalonde, McDuff and Polterovich had proved this only rationally.

**How the definition helps.** With one chart, counts of holomorphic sections exist in Morava K-theories, which are certain generalized cohomology theories (our own). Splitting in all of them gives splitting in every complex-oriented theory, including integral cohomology, by chromatic homotopy theory (our own). The work went into building the chart, using an integral symplectic form and maps to a large projective space (our own).

**Paper or page:** [Complex cobordism, Hamiltonian loops and global Kuranishi charts](https://arxiv.org/abs/2110.14320v2). It says: “The cohomology H\*(P\_φ;Z) splits additively as H\*(X;Z) ⊗ H\*(S²;Z).”

**Sources:**

- [M. Abouzaid, M. McLean and I. Smith, Complex cobordism, Hamiltonian loops and global Kuranishi charts, arXiv:2110.14320](https://arxiv.org/abs/2110.14320)
- [F. Lalonde, D. McDuff and L. Polterovich, Topological rigidity of Hamiltonian loops and quantum homology, Invent. Math. 135 (1999) 369–385](https://doi.org/10.1007/s002220050289)

### Global Kuranishi charts make the Gromov–Witten product formula straightforward

**Remember:** Products of single charts are single charts for products.

*Makes the theorem clean to state or prove.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds). arXiv math.SG. Level 4: research.

**Definition.** A global Kuranishi chart is one manifold with a compact Lie group action, one equivariant bundle and one equivariant section. Its zero set modulo the group is the moduli space of stable maps, and the virtual class is an equivariant Euler class.

**Problem.** For closed symplectic manifolds, Gromov–Witten classes of a product are products of the factors' classes, for stable (g, n) except (1, 1) and (2, 0). So the Künneth map is a ring isomorphism.

**How the definition helps.** The product of two global charts is a global chart for the pair of moduli spaces (our own). The moduli space of the product is cut out of it over the diagonal, so the formula reduces to multiplicativity of Euler classes (our own). With atlases of many local charts, the same formula needs compatible choices on both factors and is much harder (our own).

**Paper or page:** [Global Kuranishi charts and a product formula in symplectic Gromov-Witten theory](https://arxiv.org/abs/2212.11797v2), [Global Kuranishi charts and a product formula in symplectic Gromov-Witten theory](https://arxiv.org/abs/2212.11797v2). It says: “the moduli space of stable maps M̄<sub>g,n</sub>(X,A;J) admits an oriented global Kuranishi chart K = (G,T,E,s) of the correct virtual dimension”

**Sources:**

- [A. Hirschi and M. Swaminathan, Global Kuranishi charts and a product formula in symplectic Gromov–Witten theory, Selecta Math. 30 (2024)](https://doi.org/10.1007/s00029-024-00982-y)

### Marking intersections with a Donaldson hypersurface stabilizes every domain

**Remember:** Extra marked points from a hypersurface pin down every domain.

*Makes the theorem clean to state or prove.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds), 32Q65. arXiv math.SG. Level 4: research.

**Definition.** A Donaldson hypersurface Y of degree D is a symplectic hypersurface Poincaré dual to D times an integral symplectic class. Every nonconstant J-sphere of class A not inside Y meets Y in ℓ = Dω(A) points, counted with multiplicity. For large D, marking these points makes every domain stable.

**Problem.** For a closed symplectic manifold with rational symplectic class, genus-zero Gromov–Witten invariants are defined by rational pseudocycles, with no virtual techniques. They agree with the invariants defined by Kuranishi structures.

**How the definition helps.** With stable domains, J may depend on the point of the domain, so generic choices give transversality even for multiple covers (our own). Dividing by ℓ! removes the ordering of the added points (our own). The work went into Donaldson's existence theorem for such hypersurfaces and into Qin's comparison with Kuranishi structures (our own).

**Paper or page:** [Equivalence between Gromov-Witten invariants: Domain dependent perturbation and Kuranishi structure approaches](https://arxiv.org/abs/2507.04798v1). It says: “the evaluation map ev<sub>k</sub>: M<sub>0,k+ℓ</sub>(K,A,Y) → M<sup>k</sup> represents a pseudocycle. Moreover, the rational pseudocycle (1/ℓ!) ev<sub>k</sub> is independent of auxiliary data.”

**Sources:**

- [K. Cieliebak and K. Mohnke, Symplectic hypersurfaces and transversality in Gromov–Witten theory, J. Symplectic Geom. 5 (2007) 281–356](https://doi.org/10.4310/JSG.2007.v5.n3.a2)
- [Y. Qin, Equivalence between Gromov–Witten invariants: Domain dependent perturbation and Kuranishi structure approaches, arXiv:2507.04798](https://arxiv.org/abs/2507.04798)

### Minimum spherical area rules out splitting

**Remember:** The least positive area cannot split into two positive pieces.

*Rules out counterexamples.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds). arXiv math.SG. Level 4: research.

**Definition.** Choose a homology class A represented by a sphere whose symplectic area is the least positive area of any sphere. So every sphere of positive area has area at least that of A.

**Problem.** Fix a compact symplectic manifold without boundary and a compatible complex structure on its tangent spaces. A limit of holomorphic spheres in a class of least positive spherical area has exactly one nonconstant sphere component.

**How the definition helps.** Each nonconstant component of the limit has positive area, so its area is at least the minimum (our own proof). The component areas add up to the area of A, so only one component can be nonconstant.

**Paper or page:** [A proof of Gromov's non-squeezing theorem](https://arxiv.org/abs/2412.18462v1). It says: “Let A ∈ Z be a homology class of the minimal positive symplectic area in Z”

**Sources:**

- [Shah Faisal, A proof of Gromov's non-squeezing theorem, Theorem 3.2](https://arxiv.org/abs/2412.18462v1)

### Pseudocycles have well-defined intersection numbers

**Remember:** A pseudocycle may be open, but only in codimension two.

*True by definition.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds), 32Q65, 57R95. arXiv math.SG, math.AT. Level 4: research.

**Definition.** A pseudocycle is a smooth map f from an oriented manifold V into M with a small limit set. The limit set is the set of limits of f along sequences that leave every compact part of V. It must be covered by smooth images of manifolds of dimension at most dim V − 2.

**Problem.** Two pseudocycles of complementary dimension in general position meet in finitely many points. The signed count depends only on their bordism classes, and pseudocycles up to bordism are integral homology classes.

**How the definition helps.** Codimension two makes generic bordisms miss the limit sets, so meeting points cannot escape and the count stays constant (our own). Closed manifolds would not do, since moduli spaces of curves are not compact (our own). The work moved to Zinger's theorem, which identifies pseudocycles up to equivalence with integral homology.

**Paper or page:** [Equivalence between Gromov-Witten invariants: Domain dependent perturbation and Kuranishi structure approaches](https://arxiv.org/abs/2507.04798v1). It says: “there exist natural homomorphisms of graded ℤ-modules Ψ\_\*:H\_\*(X;ℤ)→ℋ\_\*(X) and Φ\_\*:ℋ\_\*(X)→H\_\*(X;ℤ), such that Ψ\_\*∘Φ\_\*=Id and Φ\_\*∘Ψ\_\*=Id.”

**Sources:**

- [A. Zinger, Pseudocycles and integral homology, Trans. Amer. Math. Soc. 360 (2008) 2741–2765](https://doi.org/10.1090/S0002-9947-07-04440-6)
- [D. McDuff and D. Salamon, J-holomorphic Curves and Symplectic Topology, AMS Colloquium Publications 52 (2004)](https://doi.org/10.1090/coll/052)

### Seidel elements of facet circle actions give the quantum Stanley–Reisner relations

**Remember:** Relations among circle actions become relations in quantum cohomology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds), 14M25. arXiv math.SG. Level 4: research.

**Definition.** The Seidel element of a loop of Hamiltonian diffeomorphisms is an invertible quantum cohomology class. It counts holomorphic sections of the bundle over the sphere built from the loop, and the Seidel map turns composition of loops into quantum product.

**Problem.** For a Fano toric manifold, quantum cohomology is the polynomial ring on the facet divisors modulo linear relations and quantum Stanley–Reisner relations. These are deformed versions of the rule that facet divisors with empty common intersection multiply to zero.

**How the definition helps.** Each facet gives a circle action whose Seidel element is its divisor class times a power of the quantum variable (our own). Integer relations among these circles then become product relations among the elements, because the Seidel map is a homomorphism (our own). These product relations are the quantum Stanley–Reisner relations, as McDuff and Tolman showed; the quoted paper extends this to toric orbifolds (our own).

**Paper or page:** [Seidel Representations and Quantum Cohomology of Toric Orbifolds](https://arxiv.org/abs/1211.3204v1), [Seidel Representations and Quantum Cohomology of Toric Orbifolds](https://arxiv.org/abs/1211.3204v1). It says: “The reduced Seidel elements S̃<sub>k</sub>, k=1,...,M, satisfy the quantum Stanley-Reisner relations and the cone relations.”

**Sources:**

- [P. Seidel, π₁ of symplectic automorphism groups and invertibles in quantum homology rings, Geom. Funct. Anal. 7 (1997) 1046–1096](https://doi.org/10.1007/s000390050037)
- [D. McDuff and S. Tolman, Topological properties of Hamiltonian circle actions, Int. Math. Res. Pap. 2006, 72826](https://doi.org/10.1155/imrp/2006/72826)

### Stable maps keep colliding marks distinct

**Remember:** Colliding marks sprout a constant sphere with three special points.

*Makes the theorem clean to state or prove.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds). arXiv math.SG. Level 4: research.

**Definition.** A stable holomorphic map is a holomorphic map from a connected nodal curve with distinct smooth marked points. It has only finitely many automorphisms that preserve the map and fix each mark. So every constant sphere component carries at least three special points, counting marks and node branches.

**Problem.** Fix a compact symplectic target without boundary and a compatible complex structure on its tangent spaces. Stable holomorphic maps of fixed genus, homology class, and number of marks form a compact space up to changes of domain coordinates.

**How the definition helps.** Stability lets colliding marks move onto a new constant sphere instead of becoming equal (our own example). That sphere carries both marks and the attaching node, so it is stable. Gromov compactness gives convergence of subsequences to such nodal stable maps.

**Wikipedia:** [Stable map](https://en.wikipedia.org/wiki/Stable_map). It says: “we attach a copy of ℙ¹ (a sphere), called a bubble, to the domain curve at the problematic point.”

**Sources:** none listed. No primary source with a working link was found.

### The Dubrovin connection turns associativity into flatness

**Remember:** Deform a flat connection by quantum multiplication; it stays flat.

*Makes the theorem clean to state or prove.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds), 14N35. arXiv math.SG, math.AG. Level 4: research.

**Definition.** The Dubrovin connection on the cohomology space H adds z times quantum multiplication to the flat connection. It sends Y along X to ∂Y/∂X + z X∗Y, where the product comes from a potential, the generating function of genus-zero invariants.

**Problem.** The big quantum product is commutative and associative exactly when the Dubrovin connection is torsion-free and flat for every z.

**How the definition helps.** The torsion is z times the commutator X∗Y − Y∗X, so it vanishes exactly when the product is commutative (our own). The curvature is z² times the associator, because its z term vanishes when the product comes from a potential (our own). The proof of associativity itself still uses the gluing of stable maps (our own).

**Wikipedia:** [Quantum cohomology](https://en.wikipedia.org/wiki/Quantum_cohomology). It says: “The quantum cup product can be viewed as a connection on the tangent bundle TH, called the Dubrovin connection. Commutativity and associativity of the quantum cup product then correspond to zero-torsion and zero-curvature conditions on this connection.”

**Sources:**

- [B. Dubrovin, Geometry of 2D topological field theories, Lecture Notes in Math. 1620 (1996) 120–348](https://doi.org/10.1007/BFb0094793)

### The FOP transversality condition yields integer-valued Gromov–Witten type invariants

**Remember:** Push all symmetric zeros into codimension two.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds). arXiv math.SG. Level 4: research.

**Definition.** Fukaya–Ono–Parker transversality asks for sections of an orbifold bundle that are complex-linear in the directions normal to each set of points with extra symmetry. For such sections, the zeros at points with nontrivial symmetry have codimension at least two in the zero set.

**Problem.** Every compact symplectic manifold has integer-valued Gromov–Witten type invariants in all genera, defined from the zeros at points with trivial symmetry group.

**How the definition helps.** A zero with symmetry group Γ counts as 1/\|Γ\| in ordinary virtual counts, and FOP sections push such zeros into codimension two (our own). So the remaining zeros form an integral pseudocycle (our own). The work went into building such sections on the global Kuranishi charts of Abouzaid–McLean–Smith and Hirschi–Swaminathan (our own).

**Paper or page:** [A new transversality condition on orbifolds and integer-valued Gromov-Witten type invariants](https://arxiv.org/abs/2201.02688v3). It says: “Then there exist normally complex smooth sections s: X → E which is strongly transverse such that s⁻¹(0) ∩ X<sup>free</sup> defines a pseudocycle.”

**Sources:**

- [S. Bai and G. Xu, A new transversality condition on orbifolds and integer-valued Gromov–Witten type invariants, arXiv:2201.02688](https://arxiv.org/abs/2201.02688)

### Bohr–Sommerfeld fibres index a basis of holomorphic quantum states

**Remember:** One quantum state sits on each Bohr–Sommerfeld fibre.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D50 (Geometric quantization), 14K25. arXiv math.SG, math-ph. Level 4: research.

**Definition.** The real quantization of a Lagrangian torus fibration gives one state to each Bohr–Sommerfeld fibre, where the prequantum holonomy is trivial. Its quantum space is spanned by delta sections on these fibres.

**Problem.** Under a technical condition, holomorphic sections of the prequantum bundle's N-th power on a nonsingular Lagrangian torus fibration have orthogonal bases indexed by Bohr–Sommerfeld points. Along a family Jᵗ of complex structures from an integrable J, each basis section tends to a delta section on its fibre as t grows.

**How the definition helps.** With the real quantization defined fibre by fibre, agreement of real and Kähler quantization becomes a match of bases, which the quote states. On the standard torus of dimension 2n the basis sections are Jacobi's theta functions, and both quantizations have dimension Nⁿ (our own). Yoshida's adiabatic-limit analysis carries the work (our own).

**Paper or page:** [Adiabatic Limit, Theta Function, and Geometric Quantization](https://arxiv.org/abs/1904.04076). It says: “orthogonal bases of holomorphic sections of L⊗N → (M,Nω,Jᵗ) indexed by B<sub>BS</sub> such that each ϑᵗ<sub>b</sub> converges as a delta-function section supported on π⁻¹(b) as t → ∞”

**Sources:**

- [T. Yoshida, Adiabatic limit, theta function, and geometric quantization, SIGMA 20 (2024), 065](https://doi.org/10.3842/SIGMA.2024.065)

### Euler-characteristic quantization makes the number of states topological

**Remember:** Count states by an alternating sum, and topology does the counting.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D50 (Geometric quantization), 32L10. arXiv math.SG, math.DG. Level 4: research.

**Definition.** The Euler quantization of a compact Kähler manifold is a virtual vector space, a formal difference of vector spaces. It is the alternating sum of the Dolbeault cohomology groups of L ⊗ √K. Here L is the prequantum bundle, and √K is a square root of the canonical bundle.

**Problem.** The dimension of the Euler quantization is the integral of exp(c₁(L)) times the Â-class of M, a class built from Pontryagin classes (our own). So the dimension does not depend on the compatible complex structure (our own), and it counts holomorphic sections when higher cohomology vanishes.

**How the definition helps.** The Riemann–Roch theorem computes alternating sums of cohomology dimensions, not the number of holomorphic sections, so this definition gives a characteristic-class integral (our own). The Todd class times ch(√K) is the Â-class, and c₁(L) is the class of ω, so the complex structure drops out (our own). By the nLab remark, Kodaira vanishing makes the sum equal the space of holomorphic sections for a positive bundle.

**nLab:** [geometric quantization](https://ncatlab.org/nlab/show/geometric+quantization). It says: “then all the higher cohomology groups in the above expression vanish. Therefore in this case the definition coincides with that via polarizations”

**Sources:** none listed. No primary source with a working link was found.

### Mpᶜ structures exist on every symplectic manifold, unlike metaplectic structures

**Remember:** A circle of phases absorbs the sign that a double cover cannot.

*Rules out counterexamples. Confidence: medium.* MSC 53D50 (Geometric quantization), 53C27. arXiv math.SG, math-ph. Level 4: research.

**Definition.** An Mpᶜ structure is a lift of the symplectic frame bundle to Mpᶜ, a circle extension of the symplectic group. It takes the place of the double cover Mp that the metaplectic correction uses, and it supports half-form quantization in the same way.

**Problem.** Every symplectic manifold has an Mpᶜ structure, so half-form quantization in this form needs no extra topological condition (our own). A metaplectic structure exists only when the first Chern class is even (our own).

**How the definition helps.** The unitary group U(n) lifts to Mpᶜ as a group, so the unitary frame bundle of a compatible almost complex structure lifts directly (our own). For Mp no such lift of U(n) exists, and the obstruction is the second Stiefel–Whitney class, c₁ modulo 2 (our own). The removed counterexample is the complex projective plane, whose first Chern class is three times a generator and so is odd (our own).

**nLab:** [metaplectic structure](https://ncatlab.org/nlab/show/metaplectic+structure). It says: “Every Sp-principal bundle has a lift to an Mpᶜ-principal bundle.”

**Sources:**

- [P. L. Robinson and J. H. Rawnsley, The metaplectic representation, Mpᶜ structures and geometric quantization, Memoirs of the American Mathematical Society 81 (1989), no. 410](https://doi.org/10.1090/memo/0410)

### Quantomorphisms realize the Poisson algebra

**Remember:** Fibre-invariant contact Hamiltonians are just functions on the base.

*True by definition. Confidence: medium.* MSC 53D50 (Geometric quantization), 53D10. arXiv math.SG, math-ph. Level 4: research.

**Definition.** A prequantization bundle over a symplectic manifold (X, ω) is a circle bundle P with a connection form α satisfying dα = π\*ω. A quantomorphism is a diffeomorphism of P that preserves α itself, not only its kernel. Infinitesimally, these are the contact vector fields V whose contact Hamiltonian α(V) is constant along the fibre circles.

**Problem.** The Lie algebra of infinitesimal quantomorphisms is isomorphic to the Poisson algebra of smooth functions on X. For connected X, it is a central extension of the Hamiltonian vector fields on X by the constant functions (Kostant).

**How the definition helps.** A contact field with Hamiltonian H changes α at the rate dH(R)·α, so it preserves α exactly when H comes from X (our own). The bracket of such fields matches the Poisson bracket on X, and the formula for that rate carries the work (our own). Constants give zero Hamiltonian fields on X but rotate the fibres, and these rotations form the central part (our own).

**nLab:** [quantomorphism group](https://ncatlab.org/nlab/show/quantomorphism+group). It says: “Given a (pre)symplectic manifold (X,ω), its quantomorphism group is the Lie group that integrates the Lie bracket inside the Poisson algebra of (X, ω).”

**Sources:**

- [B. Kostant, Quantization and unitary representations, Lectures in Modern Analysis and Applications III, Lecture Notes in Mathematics 170 (1970) 87–208](https://doi.org/10.1007/BFb0079068)

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

### A flat moment map makes quantum reduction quantize classical reduction

**Remember:** Flatness keeps the symbols of the constraints independent.

*Rules out counterexamples. Confidence: medium.* MSC 53D55 (Deformation quantization, star products), 53D20, 16S32. arXiv math.RT, math.SG. Level 4: research.

**Definition.** Let a reductive group G act on a smooth affine variety X. Its moment map μ from T\*X to the dual of the Lie algebra is flat when it is a flat morphism. For this homogeneous map, that means the zero fibre μ⁻¹(0) has the expected dimension, dim T\*X − dim G (our own).

**Problem.** Let μ be flat, and form the quantum Hamiltonian reduction, the invariant differential operators on X modulo the ideal generated by the action's vector fields. Its associated graded ring is the ring of G-invariant functions on μ⁻¹(0), so it quantizes the classical reduction.

**How the definition helps.** Flatness makes the symbols of the ideal's generators a regular sequence, so they generate exactly the ideal of the zero fibre μ⁻¹(0) (our own). Taking G-invariants commutes with taking the associated graded algebra, because G is reductive (our own). Without flatness the symbol ideal can be larger, and then the graded ring is a proper quotient (our own).

**Paper or page:** [Commutativity of Quantization and Reduction for Quiver Representations](https://arxiv.org/abs/2105.05440). It says: “Suppose that the moment map μ : T\*X → 𝔤\* is flat. Then gr(𝒟(E<sub>V</sub>)/𝒟(E<sub>V</sub>)(τ − χ)(𝔤)) ≅ gr(𝒟(E<sub>V</sub>))/(gr 𝒟(E<sub>V</sub>))𝔤 as 𝕂\[T\*X\]-modules.”

**Sources:**

- [M. P. Holland, Quantization of the Marsden–Weinstein reduction for extended Dynkin quivers, Annales Scientifiques de l'École Normale Supérieure 32 (1999), 813–834](https://doi.org/10.1016/S0012-9593(00)87719-8)
- [H. Zhao, Commutativity of quantization and reduction for quiver representations, arXiv:2105.05440](https://arxiv.org/abs/2105.05440)

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
