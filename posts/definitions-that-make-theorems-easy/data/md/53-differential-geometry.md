### Nonzero curvature fixes Frenet normals

**Remember:** No turn means no principal normal.

*Rules out counterexamples.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** For a smooth curve with nowhere-zero velocity, let T be its unit tangent and s its arc length. Its curvature κ is the length of dT/ds. Where κ &gt; 0, its Frenet frame consists of T, N = (dT/ds)/κ and T × N.

**Problem.** At each point of positive curvature, these three vectors form an orthonormal basis of three-dimensional space.

**How the definition helps.** Positive curvature keeps the normalizing denominator of N from vanishing (our own check). Differentiating the constant length of T shows that dT/ds is perpendicular to T, and the cross product completes the basis. The straight line s ↦ (s, 0, 0) has constant tangent and no principal normal (our own counterexample).

**Wikipedia:** [Frenet–Serret formulas](https://en.wikipedia.org/wiki/Frenet%E2%80%93Serret_formulas). It says: “The Frenet–Serret formulas apply to curves which are non-degenerate, which roughly means that they have nonzero curvature.”

**Sources:** none listed. No primary source with a working link was found.

### Polygons with corners on the curve define arc length correctly

**Remember:** Join points on the curve in parameter order and take the supremum of the lengths.

*Rules out counterexamples. Confidence: medium.* MSC 53A04 (Curves in Euclidean and related spaces), 51M25. arXiv math.DG, math.CA. Level 1: early undergraduate.

**Definition.** For a continuous curve γ on \[a,b\], take each finite partition a = t₀ &lt; ⋯ &lt; tₙ = b. Its length is the supremum, over these partitions, of the sums of distances between successive points γ(tᵢ).

**Problem.** Arc length is well defined, and inscribed polygons approximate it.

**How the definition helps.** Ordered inscribed chains have a supremum, possibly infinite, and their lengths approach it arbitrarily closely (our own). Points merely near the curve give no such guarantee. Staircases of length 2 can converge to a diagonal of length √2 (our own).

**Wikipedia:** [Schwarz lantern](https://en.wikipedia.org/wiki/Schwarz_lantern). It says: “However, for this to work correctly, the vertices of the polygonal chains must lie on the given curve, rather than merely near it.”

**Sources:** none listed. No primary source with a working link was found.

### Regular curves admit unit speed

**Remember:** With positive speed, the distance clock never stops.

*Rules out counterexamples.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** A regular continuously differentiable curve has nonzero velocity at every parameter value. A continuously differentiable curve without this restriction may have zero speed.

**Problem.** Every regular continuously differentiable curve on a compact interval of positive length admits a continuously differentiable parametrization with speed one.

**How the definition helps.** Positive speed gives accumulated length a differentiable inverse in our own proof. Using length as the parameter divides the old velocity by its length, giving speed one. For the cusp t ↦ (t², t³), the unit tangents approach opposite directions from the two sides of zero. Thus no continuously differentiable unit-speed parametrization can trace the cusp through zero.

**Wikipedia:** [Curve](https://en.wikipedia.org/wiki/Curve). It says: “A differentiable curve is said to be regular if its derivative never vanishes.”

**Sources:** none listed. No primary source with a working link was found.

### Zero curvature forces straightness

**Remember:** A tangent that never changes draws a straight line.

*True by definition.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** A regular curve has nonzero velocity. Its curvature is the length of the derivative of its unit tangent with respect to arc length. At positive curvature, an alternative definition uses the reciprocal radius of the circle that best fits the curve to second order.

**Problem.** A twice continuously differentiable regular curve on an interval lies on a line if and only if its curvature vanishes everywhere.

**How the definition helps.** Zero curvature makes the arc-length derivative of the unit tangent zero everywhere (our own). On an interval the tangent is therefore constant, and integrating it gives a curve on one line. Conversely, a regular curve on a line has a continuous unit tangent taking only two opposite values, so it is constant.

**Paper or page:** [Straight Line has Zero Curvature](https://proofwiki.org/wiki/Straight_Line_has_Zero_Curvature). It says: “A straight line has zero curvature.”

**Sources:** none listed. No primary source with a working link was found.

### Level surfaces have gradient normals

**Remember:** A velocity along a level surface cannot change its level.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** Define tangent vectors as velocities of differentiable curves in the surface through the point. Another approach reads the tangent plane from a graph of one coordinate as a function of two others.

**Problem.** If F is continuously differentiable and ∇F is nonzero at a point of F = c, then ∇F is normal there.

**How the definition helps.** In our own proof, the velocity definition turns perpendicularity into the derivative of a constant function. Along every curve in the level surface, F has constant value c. The chain rule gives zero for the dot product of the gradient with the curve velocity. The implicit function theorem gives a continuously differentiable local graph and two independent tangent directions.

**Wikipedia:** [Gradient](https://en.wikipedia.org/wiki/Gradient). It says: “It follows that in this case the gradient of f is orthogonal to the level sets of f.”

**Sources:** none listed. No primary source with a working link was found.

### Regular surface patches have tangents

**Remember:** Two independent surface directions span one tangent plane.

*Rules out counterexamples.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** A regular surface patch has a continuously differentiable, one-to-one parametrization from an open part of the plane into three-dimensional space. Its inverse on its image is continuous, and its two partial derivative vectors are linearly independent.

**Problem.** A regular surface patch has a unique tangent plane at each point of the patch.

**How the definition helps.** The independent partial derivatives give two tangent directions spanning a plane (our own). The inverse function theorem locally writes the patch as a graph over two coordinate axes. The chain rule puts every surface-curve velocity in that plane, so the plane is unique. At the apex of x² + y² = z², the lines on the cone span three dimensions (our own).

**Wikipedia:** [Surface (mathematics)](https://en.wikipedia.org/wiki/Surface_%28mathematics%29). It says: “Such an irregular point, where the tangent plane is undefined, is said singular.”

**Sources:** none listed. No primary source with a working link was found.

### Surface area ignores parameter changes

**Remember:** A parameter change scales each tiny area by its absolute determinant.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** Parametrize a surface patch once by a smooth map r with two independent partial derivatives. Define its area by integrating the length of their cross product over the parameter domain. Another approach approximates the surface by triangles.

**Problem.** An invertible smooth change of parameters with smooth inverse does not change the area of a regular surface patch.

**How the definition helps.** The chain rule changes the two coordinate tangent vectors by the parameter map’s derivative (our own). Bilinearity and antisymmetry multiply their cross product by its determinant. Taking lengths gives the absolute determinant, exactly the factor in the change-of-variables theorem, so the area integrals agree.

**Wikipedia:** [Surface area](https://en.wikipedia.org/wiki/Surface_area). It says: “integrating the length of the normal vector rᵤ × rᵥ to the surface over the appropriate region D in the parametric uv plane.”

**Sources:** none listed. No primary source with a working link was found.

### Tangent planes follow affine maps

**Remember:** Apply the same affine map to the surface and its tangent plane.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 1: early undergraduate.

**Definition.** For a surface given locally by two parameters with independent partial derivative vectors, take their span and translate it to the surface point. This gives the tangent plane. Another description uses a perpendicular vector called a normal.

**Problem.** An invertible affine map, a linear transformation followed by a translation, carries each tangent plane to the corresponding tangent plane of the image surface.

**How the definition helps.** The linear part acts on both partial derivatives, so it carries their span along (our own argument). The chain rule gives this, and the translation enters only at the base point. The description by normals would need a proof that normals transform by the inverse transpose.

**Wikipedia:** [Surface (mathematics)](https://en.wikipedia.org/wiki/Surface_%28mathematics%29). It says: “maps the tangent plane to the surface at a point to the tangent plane to the image of the surface at the image of the point.”

**Sources:** none listed. No primary source with a working link was found.

### Frenet coefficients determine a space curve up to rigid motion

**Remember:** Curvature and torsion drive one moving frame.

*True by definition.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a unit-speed space curve with positive curvature, let T be its velocity and N its acceleration divided by its length. Set B = T × N. Define curvature κ and torsion τ as the frame coefficients in T′ = κN and B′ = −τN.

**Problem.** Given smooth functions κ &gt; 0 and τ on an interval, a smooth unit-speed space curve has those invariants. It is unique up to rotation and translation.

**How the definition helps.** The frame coefficients give a linear system for T, N and B, since N′ = −κT + τB (our own). The existence and uniqueness theorem for linear systems gives a frame for each initial orientation (our own). Skew-symmetry of the coefficient matrix keeps all frame dot products constant (our own). Integrating T recovers the curve up to translation, without solving directly for its three coordinates (our own).

**Wikipedia:** [Torsion of a curve](https://en.wikipedia.org/wiki/Torsion_of_a_curve). It says: “coefficients in the system of differential equations for the Frenet frame”

**Sources:** none listed. No primary source with a working link was found.

### Positive curvature makes zero torsion a test for planarity

**Remember:** Zero torsion keeps the binormal fixed.

*Rules out counterexamples.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a unit-speed space curve with positive curvature, the acceleration never vanishes. Let T be the velocity and N the acceleration divided by its length. The binormal is B = T × N, and the torsion is −B′·N.

**Problem.** On an interval, a smooth unit-speed space curve of positive curvature lies in a plane if and only if its torsion vanishes.

**How the definition helps.** The binormal can change only along N, so zero torsion makes it constant (our own). Then every velocity is perpendicular to this fixed vector, and the curve stays in one plane (our own). Conversely, a plane curve of positive curvature has a constant binormal (our own). Without that curvature condition, smooth arcs in different planes can join along a straight segment where torsion is undefined (our own).

**Wikipedia:** [Torsion of a curve](https://en.wikipedia.org/wiki/Torsion_of_a_curve). It says: “the torsion of a regular curve with non-vanishing curvature is identically zero”

**Sources:** none listed. No primary source with a working link was found.

### Signed area gives an isoperimetric inequality even for crossings

**Remember:** A crossing need not stop you from measuring signed area.

*Makes the theorem clean to state or prove.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** Define the signed area A of a closed plane curve as half the integral of x dy − y dx once around it. This counts area with sign and multiplicity, without choosing an inside.

**Problem.** For a smooth regular closed plane curve of length L, 4π\|A\| ≤ L². Thus a circle encloses the largest area among simple closed curves of a fixed length.

**How the definition helps.** The area integral pairs the position with the rotated velocity, even at crossings (our own). Center the mean position at zero and use unit speed (our own). Then Cauchy–Schwarz and Wirtinger’s inequality for periodic functions with zero mean give \|A\| ≤ L²/(4π) (our own). Green’s theorem identifies signed area with ordinary area up to sign for simple curves (our own).

**Wikipedia:** [Green's theorem](https://en.wikipedia.org/wiki/Green%27s_theorem). It says: “Green's theorem can be used to compute area by line integral.”

**Sources:** none listed. No primary source with a working link was found.

### Signed curvature determines a plane curve through inflections

**Remember:** Signed curvature tells the tangent which way to turn.

*True by definition.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a unit-speed plane curve, choose a continuous angle θ for its unit tangent. Define signed curvature as θ′, with distance along the curve as the variable. Unsigned curvature keeps only \|θ′\|.

**Problem.** Every continuous function on an interval is the signed curvature of a twice continuously differentiable unit-speed plane curve. The curve is unique up to translation and rotation.

**How the definition helps.** Signed curvature gives the derivative of the tangent angle, including the direction of each turn (our own). A continuous tangent along an interval admits a continuous angle (our own). Integrating curvature fixes that angle up to a rotation (our own). Integrating the resulting tangent fixes the curve up to a translation (our own).

**Wikipedia:** [Curvature](https://en.wikipedia.org/wiki/Curvature). It says: “Curvature measures the angular rate of change of the direction of the tangent line”

**Sources:** none listed. No primary source with a working link was found.

### Stationary curvature lets circles satisfy the four vertex theorem

**Remember:** A vertex is where signed curvature stops changing to first order, even on a circle.

*Makes the theorem clean to state or prove.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A vertex of a smooth regular plane curve is a point where signed curvature has derivative zero with respect to distance along the curve. Every local maximum or minimum counts, including points on an arc of constant curvature.

**Problem.** Every smooth regular simple closed plane curve has at least four distinct vertices.

**How the definition helps.** A circle has constant curvature, so every point qualifies without a separate case. The same rule keeps extrema on arcs of constant curvature (our own). The four vertex theorem still needs a global argument for curves whose curvature varies (our own).

**Wikipedia:** [Four vertex theorem](https://en.wikipedia.org/wiki/Four_vertex_theorem). It says: “In a circle, every point is both a local maximum and a local minimum of curvature, so there are infinitely many vertices.”

**Paper or page:** [Moon in a puddle and the four-vertex theorem](https://arxiv.org/abs/2107.08455v1). It says: “Any smooth regular simple plane curve is supported by its osculating circlines at 4 distinct points; two from inside and two from outside.”

**Sources:**

- [Anton Petrunin and Sergio Zamora Barrera, Moon in a Puddle and the Four-Vertex Theorem, Theorem 2](https://arxiv.org/abs/2107.08455v1)

### The center formula makes osculating circles nest

**Remember:** The centers move less than the radii change.

*True by definition.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** On a smooth unit-speed plane curve γ with positive signed curvature κ, let N be the left unit normal. Define the osculating circle by its radius r = 1/κ and center γ + rN.

**Problem.** On a smooth plane arc with positive signed curvature and κ′ nowhere zero, the osculating circles are pairwise disjoint and nested.

**How the definition helps.** The center formula gives derivative r′N because N′ is −κ times the unit tangent (our own). The normal turns and r′ keeps one sign, so the centers move strictly less far apart than the radii differ (our own). Thus each larger disk contains the smaller circle in its interior (our own). Agreement with the usual circle of second-order contact follows by matching the tangent and acceleration (our own).

**Paper or page:** [Variations on the Tait-Kneser theorem](https://arxiv.org/abs/2104.02170v2). It says: “The osculating circles of a vertex-free plane curve with non-vanishing curvature are disjoint and pairwise nested”

**Sources:**

- [Gil Bor, Connor Jackman and Serge Tabachnikov, Variations on the Tait–Kneser Theorem, Theorem 1.1](https://arxiv.org/abs/2104.02170v2)

### Turning angles as curvature make Fenchel's theorem hold for polygons

**Remember:** A polygon's curvature is how far it turns at each corner.

*Makes the theorem clean to state or prove.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG, math.MG. Level 2: later undergraduate.

**Definition.** The curvature κᵢ of a polygon at vertex i is its turning angle there. This is the angle between the direction of the incoming edge and the direction of the outgoing edge. The tangent indicatrix is the curve of unit tangent directions on the sphere.

**Problem.** Fenchel's theorem: a closed space curve, smooth or polygonal, has total curvature at least 2π. Equality holds exactly when the curve is planar and convex.

**How the definition helps.** With turning angles as curvature, total curvature is the length of the tangent indicatrix, so Fenchel's theorem becomes a statement about spherical curves. For a polygon the indicatrix is a chain of great-circle arcs of lengths κᵢ (our own). The indicatrix of a closed curve lies in no open hemisphere, and such a closed spherical curve has length at least 2π (our own). The same proof covers smooth and polygonal curves at once.

**Paper or page:** [Discrete curvature](https://arxiv.org/abs/2502.09353), [Discrete curvature](https://arxiv.org/abs/2502.09353). It says: “The total curvature of a closed space curve is bigger or equal 2π: ∫ₐᵇ κ dt ≥ 2π, respectively ∑ᵢ₌₁ⁿ κᵢ ≥ 2π. The equality takes place if and only if the curve is planar and convex.”

**Sources:**

- [I. Izmestiev, Discrete curvature, Internationale Mathematische Nachrichten 250 (2022) 1–23, arXiv:2502.09353](https://arxiv.org/abs/2502.09353)
- [W. Fenchel, Über Krümmung und Windung geschlossener Raumkurven, Mathematische Annalen 101 (1929) 238–252](https://doi.org/10.1007/bf01454836)

### A continuous normal makes the Gauss map global

**Remember:** A consistent choice of side gives one map to the sphere.

*Rules out counterexamples.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a surface in three-dimensional space, define orientation as a continuous choice of unit normal. This replaces a choice of coordinate patches whose changes preserve orientation. The Gauss map sends each point to its chosen normal on the unit sphere.

**Problem.** A smooth regular surface admits a smooth Gauss map of unit normals exactly when it is orientable.

**How the definition helps.** A continuous normal defines the Gauss map without matching signs between patches (our own). Locally it is a fixed sign times the smooth unit normal from a surface patch (our own). A Möbius strip is excluded because its normal flips on a trip around the middle (our own).

**Wikipedia:** [Gauss map](https://en.wikipedia.org/wiki/Gauss_map). It says: “The Gauss map can be defined (globally) if and only if the surface is orientable”

**Sources:** none listed. No primary source with a working link was found.

### An infimum defines surface distance even without a shortest path

**Remember:** Distances can approach a lower bound without reaching it.

*Makes the theorem clean to state or prove.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** On a connected smooth surface, intrinsic distance is the greatest lower bound of lengths of piecewise smooth paths joining two points. A path may approach that length without attaining it.

**Problem.** Intrinsic distance is a metric on a connected regular surface, even when no shortest path exists.

**How the definition helps.** The lower bound assigns a distance even when no shortest path exists, as in the plane with its origin removed. Connected smooth surfaces admit piecewise smooth paths between any two points (our own). Constant paths, path reversal and the lower bound from straight-line distance give zero self-distance, symmetry and positive distance between distinct points (our own). Joining paths with lengths arbitrarily close to their lower bounds gives the triangle inequality (our own).

**Wikipedia:** [Intrinsic metric](https://en.wikipedia.org/wiki/Intrinsic_metric). It says: “The Euclidean plane with the origin removed is not geodesic, but is still a length metric space.”

**Sources:** none listed. No primary source with a working link was found.

### Curvature as a Jacobian tells when the Gauss map inverts

**Remember:** Nonzero curvature makes the normal a local coordinate.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** The Gauss map sends each surface point to its unit normal on the sphere. Define Gaussian curvature as the determinant of the derivative of this map, using the corresponding oriented tangent planes.

**Problem.** The Gauss map of a smooth oriented surface is smoothly invertible near a point exactly when Gaussian curvature is nonzero there.

**How the definition helps.** Nonzero determinant gives local invertibility by the inverse function theorem (our own). The chain rule gives the converse (our own). The work goes into identifying the determinant with the product of the two principal curvatures (our own).

**Wikipedia:** [Gauss map](https://en.wikipedia.org/wiki/Gauss_map). It says: “determinant of the Gauss map is equal to Gaussian curvature”

**Sources:** none listed. No primary source with a working link was found.

### Defining the normal as a distance gradient makes its derivative symmetric

**Remember:** A normal defined as a gradient has a symmetric derivative.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces), 26B05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Signed distance measures distance from a surface with opposite signs on its two sides. In a smooth neighborhood of the surface, define the extended unit normal as the gradient of signed distance.

**Problem.** The derivative of the extended unit normal to a smooth surface is symmetric wherever the signed distance is smooth.

**How the definition helps.** The derivative of a gradient is its Hessian, which is symmetric by equality of mixed partial derivatives. Restricting the normal derivative to tangent vectors gives symmetry of the shape operator, conventionally its negative (our own). The geometric step identifies the signed-distance gradient with the unit normal in a smooth neighborhood (our own).

**Paper or page:** [Orthogonal signed-distance coordinates and vector calculus near evolving curves and surfaces](https://arxiv.org/abs/2302.02891v2). It says: “The gradient of the normal is the Hessian of the signed-distance function, which is a necessarily symmetric 2-tensor,”

**Sources:**

- [Eric W. Hester, Geoffrey M. Vasil, Orthogonal signed-distance coordinates and vector calculus near evolving curves and surfaces, arXiv:2302.02891v2 (2023), Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences 479, no. 2277 (2023): 20230080](https://arxiv.org/abs/2302.02891v2)

### Frame rotation measures parallel transport around a disk

**Remember:** The turn around the rim adds up the curvature inside.

*True by definition. Confidence: medium.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** Choose smooth perpendicular unit tangent vectors e and f in positive order on a surface patch. The one-form ω assigns each tangent vector v the number f·De(v), which measures how fast e turns toward f. Define the curvature form as −dω, using the exterior derivative d.

**Problem.** Around the positively oriented boundary of a smooth disk, parallel transport rotates each nonzero tangent vector by the disk’s integrated Gaussian curvature, modulo 2π.

**How the definition helps.** Relative to the chosen frame, the angle of a parallel vector changes at rate −ω along the path (our own). Stokes’ theorem turns the boundary integral of −ω into the disk integral of −dω (our own). The work goes into the Gauss equation, which identifies −dω with Gaussian curvature times the oriented area element (our own).

**Wikipedia:** [Parallel transport](https://en.wikipedia.org/wiki/Parallel_transport). It says: “The angle by which it twists, α, is proportional to the area inside the loop.”

**Sources:** none listed. No primary source with a working link was found.

### Gaussian curvature as the Gauss map Jacobian makes total curvature a degree

**Remember:** Integrating the normal map’s signed area change counts its degree.

*True by definition. Confidence: medium.* MSC 53A05 (Surfaces in Euclidean and related spaces), 55M25. arXiv math.DG. Level 2: later undergraduate.

**Definition.** For an oriented surface in ℝ³, define the Gaussian curvature as the signed area Jacobian of its unit normal map to the sphere. The other definition multiplies the two principal curvatures, the largest and smallest normal bending rates.

**Problem.** A closed oriented surface immersed in ℝ³ has total Gaussian curvature equal to 4π times the degree of its unit normal map.

**How the definition helps.** With this definition, total curvature is the integral of the pulled-back sphere area form, which is 4π times the degree. The real work is in the degree formula for integrals of pulled-back forms (our own comparison). It also moves to the theorem that the derivative of the normal map is minus the shape operator (our own). The determinant of the shape operator is the product of the principal curvatures.

**Wikipedia:** [Gauss map](https://en.wikipedia.org/wiki/Gauss_map). It says: “The Jacobian determinant of the Gauss map is equal to Gaussian curvature”

**Sources:** none listed. No primary source with a working link was found.

### Geodesic energy makes Clairaut’s relation a conservation law

**Remember:** When energy ignores the rotation angle, its momentum stays fixed.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** Define geodesics of constant speed as paths where the first derivative of energy vanishes under every smooth variation fixing both endpoints. Energy is half the integral of speed squared over a fixed time interval. On a surface of revolution its integrand is ½(u′² + ρ²φ′²), using meridian distance u, rotation angle φ and distance ρ from the axis.

**Problem.** Along a unit-speed geodesic on a surface of revolution away from its axis, ρ sin ψ stays constant. Here ψ is the signed angle from the meridian to the geodesic tangent.

**How the definition helps.** The energy integrand has no φ, so its Euler–Lagrange equation conserves ρ²φ′ (our own). At unit speed the signed component along the parallel is ρφ′ = sin ψ (our own). The work goes into showing that stationary energy gives the geodesic equation (our own).

**Wikipedia:** [Clairaut's relation (differential geometry)](https://en.wikipedia.org/wiki/Clairaut%27s_relation_%28differential_geometry%29). It says: “ρ sin ψ is constant along γ.”

**Sources:** none listed. No primary source with a working link was found.

### Inversion makes stereographic projection preserve angles

**Remember:** An inversion reflects and rescales tangent vectors, so angles survive.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** Take the unit sphere and a pole N. Define stereographic projection onto the equatorial plane by spherical inversion centered at N. It sends a point P other than N to N + 2(P − N)/\|P − N\|².

**Problem.** Stereographic projection preserves angles between smooth regular curves crossing away from the projection pole.

**How the definition helps.** The derivative of inversion is a reflection times a positive scale, which preserves angles (our own). The work goes into differentiating the inversion and checking that its image lies in the equatorial plane (our own). Since the image stays on the line through N and P, it agrees with projection by sight lines (our own).

**Wikipedia:** [Stereographic projection](https://en.wikipedia.org/wiki/Stereographic_projection). It says: “Stereographic projection is conformal, meaning that it preserves the angles at which curves cross each other”

**Sources:** none listed. No primary source with a working link was found.

### Normal acceleration picks out the great circles on a sphere

**Remember:** On a sphere, geodesic acceleration points along a radius.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** Define a geodesic on a smooth surface in space as a parametrized curve whose acceleration is perpendicular to the tangent plane. Its speed is constant because velocity and acceleration are perpendicular.

**Problem.** The nonconstant geodesics of a round sphere are great circles or arcs of great circles, with constant speed.

**How the definition helps.** Radial acceleration keeps the cross product of position relative to the sphere’s center and velocity constant (our own). A nonconstant geodesic stays in the plane through the center perpendicular to this nonzero vector (our own). Conversely, a great circle at constant speed has radial acceleration (our own). Using shortest paths as the definition would also require the theorem that short geodesic arcs minimize length (our own).

**nLab:** [geodesic](https://ncatlab.org/nlab/show/geodesic). It says: “on a 2-dimensional sphere, geodesics are arcs of great circles.”

**Sources:** none listed. No primary source with a working link was found.

### Normal projection gives Meusnier’s theorem for surface curves

**Remember:** Only the part of acceleration along the surface normal counts.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a unit-speed curve γ on a surface, define normal curvature as γ″·n, where n is the chosen surface unit normal. The normal section is the surface’s intersection with the plane spanned by n and the tangent direction.

**Problem.** Two smooth unit-speed curves through the same surface point with the same tangent line have the same normal curvature. That is the signed curvature of the normal section there.

**How the definition helps.** Projection onto the surface normal removes the part of acceleration that can vary between curves (our own). Differentiating γ′·n = 0 gives γ″·n = −v·Dn(v), where v is the velocity and Dn(v) is the normal’s derivative along v (our own). Reversing v leaves that expression unchanged (our own). The normal section already accelerates along n, so projection gives its curvature signed relative to n (our own).

**Wikipedia:** [Meusnier's theorem](https://en.wikipedia.org/wiki/Meusnier%27s_theorem). It says: “having the same tangent line at p also have the same normal curvature at p”

**Sources:** none listed. No primary source with a working link was found.

### One scalar in the shape operator forces a plane or sphere

**Remember:** At an umbilic point, the shape operator scales every tangent direction equally.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** Call a point umbilic when the shape operator, the negative derivative of the unit normal, multiplies every tangent vector by the same number. This replaces a test of all normal-section curvatures.

**Problem.** A connected smooth oriented surface whose every point is umbilic lies in a plane or a sphere.

**How the definition helps.** A scalar shape operator makes the normal derivative in every direction equal to −λ times the corresponding position derivative (our own). In patch coordinates, equality of mixed derivatives and independence of the two tangent directions force both derivatives of λ to vanish (our own). Connectedness makes λ constant, so when λ vanishes the surface has a fixed normal and lies in a plane (our own). Otherwise, position plus the unit normal divided by λ gives a fixed sphere center (our own).

**Wikipedia:** [Umbilical point](https://en.wikipedia.org/wiki/Umbilical_point). It says: “The sphere is the only surface with non-zero curvature where every point is umbilic.”

**Sources:** none listed. No primary source with a working link was found.

### Projecting acceleration makes the two curvatures add in squares

**Remember:** Tangential bending and normal bending meet at a right angle.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a unit-speed curve on a surface, define geodesic curvature as the length of the tangent-plane part of its acceleration. Define normal curvature in magnitude as the length of the perpendicular part.

**Problem.** The square of the ordinary curvature of a unit-speed surface curve equals the sum of the squares of its geodesic and normal curvatures.

**How the definition helps.** The two projections split acceleration into perpendicular parts, so their squared lengths add to the squared acceleration length (our own). At unit speed this is the square of ordinary curvature (our own). The alternative intrinsic definition measures bending using distances within the surface (our own). Identifying its derivative with tangential projection is the geometric step (our own).

**Wikipedia:** [Geodesic curvature](https://en.wikipedia.org/wiki/Geodesic_curvature). It says: “the geodesic curvature is the norm of the projection of the covariant derivative”

**Sources:** none listed. No primary source with a working link was found.

### Tangential projection makes parallel transport preserve dot products

**Remember:** If both derivatives are normal, neither changes the tangent dot product.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A tangent vector field along a surface curve is parallel when its ordinary derivative has zero tangential part. This replaces separate transport rules for each choice of surface coordinates.

**Problem.** Two parallel tangent vector fields along a smooth surface curve keep the same dot product. Thus parallel transport preserves lengths and angles.

**How the definition helps.** Each term in the derivative of the dot product pairs a normal vector with a tangent vector, so it vanishes (our own). The work goes into proving that projection gives the intrinsic derivative and that the transport equation has a unique solution (our own).

**nLab:** [Levi-Civita connection](https://ncatlab.org/nlab/show/Levi-Civita+connection). It says: “which is equivalent to the preservation of the metric inner product of tangent vectors under parallel translation.”

**Sources:** none listed. No primary source with a working link was found.

### The first fundamental form measures all curve lengths and angles

**Remember:** Keep the tangent dot product and keep lengths and angles.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** The first fundamental form takes the dot product of two tangent vectors to a surface. A smooth map between surfaces is a local isometry if its derivative preserves these dot products everywhere.

**Problem.** A local isometry of regular surfaces preserves the lengths of curves and the angles at which curves meet.

**How the definition helps.** The derivative sends a curve’s velocity to its image velocity, so preserving dot products preserves speed (our own). Integrating speed gives curve length (our own). The dot product of unit tangents gives the cosine of their angle (our own). This derivative test replaces separate length checks for every curve (our own).

**Wikipedia:** [First fundamental form](https://en.wikipedia.org/wiki/First_fundamental_form). It says: “metric properties of a surface such as length and area”

**Sources:** none listed. No primary source with a working link was found.

### The geodesic equation lets initial velocity determine the path

**Remember:** Normal acceleration gives a geodesic once its initial position and velocity are known.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** On a smooth surface in space, define a geodesic as a parametrized curve whose acceleration is perpendicular to the tangent plane. Its speed is constant because its acceleration is perpendicular to its velocity.

**Problem.** On a smooth surface, a point and an initial tangent vector determine a unique local geodesic.

**How the definition helps.** In smooth surface coordinates, normal acceleration gives a smooth second-order differential equation for position (our own). The existence and uniqueness theorem for differential equations gives the local path from its starting point and velocity. Relating this equation to the shortest-path definition requires proving that sufficiently short geodesic arcs minimize length (our own).

**Wikipedia:** [Geodesic](https://en.wikipedia.org/wiki/Geodesic). It says: “It has a unique solution, given an initial position and an initial velocity.”

**Sources:** none listed. No primary source with a working link was found.

### The induced metric gives the area of a surface patch

**Remember:** The determinant of the dot-product matrix is the square of the area scale.

*Makes the theorem clean to state or prove.* MSC 53A05 (Surfaces in Euclidean and related spaces), 58C35. arXiv math.DG. Level 2: later undergraduate.

**Definition.** The induced metric measures tangent vectors using the surrounding Euclidean dot product. For the two coordinate tangent vectors of a surface chart, write E and G for their squared lengths and F for their dot product.

**Problem.** For a smooth one-to-one chart with independent coordinate tangent vectors, the surface area is the integral of √(EG − F²) over the parameter region.

**How the definition helps.** The induced metric gives the area of the tangent parallelogram using only dot products, even in higher ambient dimensions (our own). Base times height gives squared area EG − F² (our own). The surface area theorem justifies integrating this local area factor (our own).

**nLab:** [volume form](https://ncatlab.org/nlab/show/volume+form). It says: “In local oriented coordinates, vol<sub>g</sub> = √\|det(g)\|, where det(g) is the determinant of the matrix of the coordinates of g.”

**Sources:** none listed. No primary source with a working link was found.

### The normal derivative tests whether a ruled surface develops flat

**Remember:** Along a ruling, any twist makes Gaussian curvature strictly negative.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** A ruled surface is swept out by straight lines called rulings. Define a smooth surface as developable when its Gaussian curvature is zero. Use Gaussian curvature as the determinant of the negative derivative of its unit normal.

**Problem.** A smooth regular ruled surface has nonpositive Gaussian curvature. It is developable exactly when its tangent plane stays fixed along each connected ruling.

**How the definition helps.** Using the ruling as the first unit basis direction makes the first diagonal entry zero because a straight line has zero acceleration (our own). In a perpendicular unit basis the symmetric shape operator then has determinant −a², where a is its off-diagonal entry (our own). This vanishes exactly when the unit normal has zero derivative along the ruling (our own). Identifying zero Gaussian curvature with local flattening without stretching is a separate theorem (our own).

**Wikipedia:** [Developable surface](https://en.wikipedia.org/wiki/Developable_surface). It says: “It is developable iff the tangent plane does not twist as you move along a ruling”

**Sources:** none listed. No primary source with a working link was found.

### The shape operator gives Euler’s formula for normal curvature

**Remember:** The two principal curvatures mix with squared direction cosines.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces). arXiv math.DG. Level 2: later undergraduate.

**Definition.** The shape operator S is the negative derivative of the chosen unit normal. Define principal curvatures as its eigenvalues and principal directions as its unit eigenvectors. The normal curvature in a unit direction v is v·Sv.

**Problem.** Take a perpendicular unit basis of principal directions with curvatures κ₁ and κ₂. At angle θ from the first direction, the normal curvature is κ₁ cos² θ + κ₂ sin² θ.

**How the definition helps.** In principal directions the shape operator is diagonal, so v·Sv has no mixed term (our own). The components of v in this basis are cos θ and sin θ (our own). This replaces finding the extreme curvatures among all plane sections perpendicular to the surface (our own). The work is proving symmetry and identifying v·Sv with the curvature of the corresponding section, signed using the surface normal (our own).

**Wikipedia:** [Principal curvature](https://en.wikipedia.org/wiki/Principal_curvature). It says: “Without reference to a particular orthonormal basis, the principal curvatures are the eigenvalues of the shape operator, and the principal directions are its eigenvectors.”

**Sources:** none listed. No primary source with a working link was found.

### Harmonic coordinates rule out closed minimal surfaces in space

**Remember:** A harmonic coordinate cannot peak inside unless it is constant.

*True by definition.* MSC 53A10 (Minimal surfaces in differential geometry, surfaces with prescribed mean curvature), 53A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Define a surface in three-dimensional Euclidean space as minimal when its three position coordinates are harmonic for the surface metric. That means each solves the Laplace equation for the surface.

**Problem.** There is no nonempty smooth compact minimal surface without boundary in three-dimensional Euclidean space.

**How the definition helps.** Harmonicity lets the maximum principle turn each coordinate’s maximum on a compact component into constancy throughout that component. Three constant coordinates describe a single point, which cannot be a regular surface (our own). Agreement with the zero mean curvature definition follows by computing the surface Laplacian of the position vector (our own).

**Wikipedia:** [Minimal surface](https://en.wikipedia.org/wiki/Minimal_surface). It says: “there are no compact complete minimal surfaces in ℝ³”

**Sources:** none listed. No primary source with a working link was found.

### Zero mean curvature forces nonpositive Gaussian curvature

**Remember:** Opposite principal curvatures cannot have a positive product.

*True by definition.* MSC 53A10 (Minimal surfaces in differential geometry, surfaces with prescribed mean curvature), 53A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** The principal curvatures are the largest and smallest signed normal curvatures at a surface point. Their average is mean curvature, and their product is Gaussian curvature. Define a minimal surface by requiring zero mean curvature everywhere.

**Problem.** A minimal surface in three-dimensional Euclidean space has nonpositive Gaussian curvature. It is zero only where both principal curvatures vanish.

**How the definition helps.** Zero mean curvature makes the two principal curvatures opposites, so their product is nonpositive (our own). The first variation of area explains why the zero mean curvature condition is equivalent to stationary area (our own).

**Wikipedia:** [Minimal surface](https://en.wikipedia.org/wiki/Minimal_surface). It says: “its mean curvature is equal to zero at all points.”

**Sources:** none listed. No primary source with a working link was found.

### The angular defect at the vertices is the curvature of a polyhedron

**Remember:** Flat paper has no defect; a cone's defect is the wedge you cut out.

*Makes the theorem clean to state or prove.* MSC 53A70 (Discrete differential geometry), 51M20. arXiv math.DG, math.MG. Level 2: later undergraduate.

**Definition.** The angular defect at a vertex of a closed polyhedral surface is 2π minus the sum of its incident face angles. It gives the integrated Gaussian curvature concentrated at that vertex.

**Problem.** On a polyhedral sphere the angular defects sum to 4π. On any closed polyhedral surface they sum to 2π times its Euler characteristic.

**How the definition helps.** Triangulating the faces preserves the defects, and summing the triangle angles gives total defect 2πV − πF (our own). Here V, E and F count vertices, edges and triangles. Each edge belongs to two triangles, so 3F = 2E and the sum equals 2π(V − E + F). A sphere has Euler characteristic two.

**Wikipedia:** [Angular defect](https://en.wikipedia.org/wiki/Angular_defect). It says: “the integral of curvature at a vertex is equal to the defect there (by definition).”

**Sources:** none listed. No primary source with a working link was found.

### Asking for zero torsion and a preserved metric gives exactly one connection

**Remember:** Keep lengths, twist nothing, and the connection is forced.

*Makes the theorem clean to state or prove.* MSC 53B05 (Linear and affine connections), 53B20. arXiv math.DG. Level 2: later undergraduate.

**Definition.** For an affine connection ∇ and a Riemannian metric g, metric compatibility requires X(g(Y,Z)) = g(∇ₓY,Z) + g(Y,∇ₓZ) for every triple of smooth vector fields. Torsion-freeness requires ∇ₓY − ∇ᵧX = \[X,Y\] for every pair, where \[X,Y\] is their Lie bracket.

**Problem.** On any Riemannian manifold there is exactly one affine connection that is torsion-free and metric-compatible, the Levi-Civita connection.

**How the definition helps.** Together the two identities determine g(∇ₓY,Z) by the Koszul formula (our own). Nondegeneracy of g therefore determines ∇ₓY uniquely. Conversely, the Koszul formula defines an affine connection satisfying both identities, which gives existence (our own).

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

**Remember:** Local isometries preserve the metric, which already determines Gaussian curvature.

*True by definition.* MSC 53B20 (Local Riemannian geometry), 53A05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Define the Gaussian curvature of a surface as the sectional curvature of its Levi-Civita connection. This connection is determined by the metric alone. The older definition multiplies the two principal curvatures, the largest and smallest normal bending rates.

**Problem.** A local isometry between surfaces in Euclidean three-space preserves the product of their principal curvatures.

**How the definition helps.** A local isometry preserves the metric, so it preserves the Levi-Civita connection and its curvature (our own argument). The work moves to the Gauss equation. It shows that this intrinsic curvature equals the product of the principal curvatures.

**Wikipedia:** [Theorema Egregium](https://en.wikipedia.org/wiki/Theorema_Egregium). It says: “The Gaussian curvature of a surface is invariant under local isometry.”

**Sources:** none listed. No primary source with a working link was found.

### Hopf and Rinow showed the competing meanings of complete surface agree

**Remember:** Complete in distance, in compactness, or in geodesics, it is one notion.

*Makes the theorem clean to state or prove.* MSC 53C22 (Geodesics in global differential geometry), 53C21. arXiv math.DG. Level 2: later undergraduate.

**Definition.** A connected Riemannian manifold is metrically complete if every Cauchy sequence for its Riemannian distance converges in the manifold.

**Problem.** On a connected finite-dimensional Riemannian manifold without boundary, metric completeness, compactness of every closed bounded set, and geodesic completeness are equivalent. Under these conditions a shortest geodesic joins any two points.

**How the definition helps.** Metric completeness gives one hypothesis for all three conclusions (our own observation). The Hopf–Rinow theorem proves the equivalences and the existence of shortest geodesics.

**Wikipedia:** [Hopf–Rinow theorem](https://en.wikipedia.org/wiki/Hopf%E2%80%93Rinow_theorem). It says: “Let (M, g) be a connected and smooth Riemannian manifold without boundary. Then the following statements are equivalent”

**Sources:**

- [H. Hopf and W. Rinow, Ueber den Begriff der vollständigen differentialgeometrischen Fläche, Commentarii Mathematici Helvetici 3 (1931) 209–225](https://doi.org/10.1007/BF01601813)
- [C. J. Atkin, The Hopf–Rinow theorem is false in infinite dimensions, Bulletin of the London Mathematical Society 7 (1975) 261–266](https://doi.org/10.1112/blms/7.3.261)

### Minimizing energy instead of length picks out constant-speed geodesics

**Remember:** Length forgives any pace; energy insists on a steady one.

*Makes the theorem clean to state or prove.* MSC 53C22 (Geodesics in global differential geometry), 58E10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** For a piecewise smooth Riemannian path γ on \[a,b\], its energy is E = ½∫\|γ′\|² dt and its length is L = ∫\|γ′\| dt.

**Problem.** Among paths between fixed endpoints on a fixed interval \[a,b\] with a &lt; b, energy minimizers are precisely constant-speed length minimizers. They satisfy the geodesic equation.

**How the definition helps.** Cauchy–Schwarz gives L² ≤ 2(b − a)E, with equality exactly at constant speed. Parametrizing a competing path at constant speed attains that bound (our own argument). The Euler–Lagrange equation for energy is the geodesic equation.

**Wikipedia:** [Geodesic](https://en.wikipedia.org/wiki/Geodesic). It says: “paths that are minima of L can be arbitrarily re-parameterized (without changing their length), while minima of E cannot.”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy slices exclude loops

**Remember:** A clock that repeats a loop cannot visit a slice just once.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics). arXiv gr-qc. Level 2: later undergraduate.

**Definition.** A Cauchy surface is an embedded hypersurface that every inextendible timelike curve crosses at exactly one parameter value.

**Problem.** A spacetime with a Cauchy surface has no closed future-directed timelike path.

**How the definition helps.** The single-visit requirement rules out repeating a timelike loop indefinitely. In our own proof, the repeated path either misses the surface or visits it infinitely often. In our own example, identify times one period apart in flat spacetime. A stationary clock revisits the same constant-time slice every period.

**nLab:** [Cauchy surface](https://ncatlab.org/nlab/show/Cauchy+surface). It says: “a Cauchy surface is an embedded submanifold Σ ↪︎ X such that every timelike curve in X may be extended to a timelike curve that intersects Σ precisely in one point.”

**Sources:**

- [Robert Geroch (1970), Domain of Dependence](https://doi.org/10.1063/1.1665157)

### Minimal surfaces as real parts of null curves give isometric associate families

**Remember:** Complex phase changes keep the derivative null and preserve its squared size.

*True by definition. Confidence: medium.* MSC 53A10 (Minimal surfaces in differential geometry, surfaces with prescribed mean curvature), 58E12. arXiv math.DG. Level 3: graduate.

**Definition.** Describe a conformal minimal surface in ℝ³ as the real part of a holomorphic curve F with a nonzero null derivative. Null means that the squares of the three components of F′ sum to zero. The usual definition asks for zero mean curvature.

**Problem.** Every conformal minimal immersion of a simply connected domain into ℝ³ belongs to a one-parameter family of isometric minimal immersions. On the catenoid’s universal cover, this family connects its lifted immersion to the helicoid.

**How the definition helps.** Multiply F by a complex number of modulus one; the derivative stays null and keeps its length, which fixes the metric (our own argument). With the mean curvature definition, one must construct the new surfaces by solving for conjugate harmonic functions (our own comparison). The work moves to the Weierstrass representation, which shows that real parts of null curves are exactly the conformal minimal immersions. Simple connectivity lets one integrate the derivative globally.

**Paper or page:** [Loop Weierstrass Representation](https://arxiv.org/abs/2411.04626). It says: “is a conformal, minimal immersion into Euclidean space.”

**Sources:** none listed. No primary source with a working link was found.

### Defining divergence by the Lie derivative of volume gives div\[X,Y\] directly

**Remember:** Commute two flow derivatives to find the divergence of their bracket.

*True by definition. Confidence: medium.* MSC 53A45 (Differential geometric aspects in vector and tensor analysis), 58A10. arXiv math.DG. Level 3: graduate.

**Definition.** Fix a volume form μ on a smooth manifold. The divergence of a smooth vector field X is the unique function div X satisfying ℒ(X)μ = (div X)μ.

**Problem.** For a fixed volume form and vector fields X and Y, div\[X,Y\] = X(div Y) − Y(div X).

**How the definition helps.** With the Lie-derivative definition, the formula follows from ℒ(\[X,Y\]) = ℒ(X)ℒ(Y) − ℒ(Y)ℒ(X). By the product rule, ℒ(X) applied to (div Y)μ gives X(div Y)μ + (div Y)(div X)μ (our own calculation). Subtracting the same expression with X and Y swapped cancels the product of the divergences. The coordinate proof would instead need second derivatives of the components to cancel.

**Wikipedia:** [Divergence](https://en.wikipedia.org/wiki/Divergence). It says: “The divergence can be defined in terms of the Lie derivative as”

**Sources:** none listed. No primary source with a working link was found.

### Defining torsion as Dθ makes the first Bianchi identity one differentiation

**Remember:** Differentiate zero torsion to get curvature applied to the identity.

*True by definition. Confidence: medium.* MSC 53B05 (Linear and affine connections), 53C05. arXiv math.DG. Level 3: graduate.

**Definition.** The solder form θ is the identity map of the tangent bundle, viewed as a one-form with values in tangent vectors. Define the torsion as Θ = Dθ, where D is the exterior covariant derivative of the connection. The usual definition is T(X,Y) = ∇<sub>X</sub> Y − ∇<sub>Y</sub> X − \[X,Y\].

**Problem.** Let R be the curvature of a connection on the tangent bundle, which measures how covariant derivatives fail to commute. If the torsion is zero, then R(X,Y)Z + R(Y,Z)X + R(Z,X)Y = 0 for all vector fields X, Y and Z.

**How the definition helps.** The identity D²θ = Ω ∧ θ gives DΘ = Ω ∧ θ, where Ω is the curvature form. Zero torsion makes this three-form vanish. Evaluating it on X, Y and Z gives the stated cyclic sum (our own calculation).

**Wikipedia:** [Torsion tensor](https://en.wikipedia.org/wiki/Torsion_tensor). It says: “the TM-valued one-form θ on M corresponding to the identity endomorphism of the tangent bundle”

**Sources:** none listed. No primary source with a working link was found.

### Square roots turn Fisher–Rao distance into a spherical angle calculation

**Remember:** Take square roots, then measure the angle on the sphere.

*True by definition.* MSC 53B12 (Differential geometric aspects of statistical manifolds and information geometry), 62B11. arXiv math.ST, math.DG. Level 3: graduate.

**Definition.** On positive probability vectors p, the Fisher metric measures a small change dp by the squared length Σ dpᵢ²/pᵢ. Equivalently, send p to (2√p₁, …, 2√pₙ) and measure lengths on the sphere of radius 2.

**Problem.** For positive probability vectors p and q, the Fisher–Rao distance, the shortest path length in the Fisher metric, is 2·arccos(Σ√(pᵢqᵢ)).

**How the definition helps.** The sphere formula replaces the shortest-path calculation by an angle (our own). The shorter great-circle arc stays in the positive part of the sphere because its points lie along positive combinations of the endpoints (our own). Its length is twice the angle, whose cosine is the inner product of the unit vectors √p and √q (our own). The work shifts from solving the path equations in p to checking that \[d(2√pᵢ)\]² = dpᵢ²/pᵢ (our own).

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

**Remember:** An isometry that fixes a point and a tangent vector fixes that whole geodesic.

*True by definition.* MSC 53B25 (Local submanifolds), 53C22. arXiv math.DG. Level 3: graduate.

**Definition.** Call a submanifold totally geodesic if each of its geodesics is also a geodesic of the ambient manifold. The other definition asks that its second fundamental form vanish. The second fundamental form measures how the submanifold bends in the ambient space.

**Problem.** Each connected component of the fixed set of an isometry of a Riemannian manifold is a totally geodesic submanifold.

**How the definition helps.** An isometry maps geodesics to geodesics, so uniqueness keeps each ambient geodesic with fixed initial data inside the fixed set (our own argument). Such a geodesic is then also a geodesic of the fixed set (our own). The work moves to showing that the fixed set is a submanifold. Exponential coordinates show this near each point (our own).

**nLab:** [totally geodesic submanifold](https://ncatlab.org/nlab/show/totally+geodesic+submanifold). It says: “If in addition X is equipped with a Riemannian metric and G acts by isometries then the submanifold Xᴳ is a totally geodesic submanifold.”

**Sources:** none listed. No primary source with a working link was found.

### Chern–Simons transgressions add modulo exact forms

**Remember:** An oriented triangle relates the three paths along its edges.

*True by definition.* MSC 53C05 (Connections (general theory)), 57R20. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** Join the connections by a smooth path and give the resulting cylinder connection zero path component. Its Chern–Simons transgression class is the fibre integral of the Chern character form over the oriented interval, modulo exact forms.

**Problem.** Transgression from a first connection to a second and then to a third adds to the direct transgression between the first and third.

**How the definition helps.** Passing to the quotient removes the exact form that measures the choice of path. Integrating along two consecutive paths adds their forms. In our own proof, Stokes’ theorem on a triangle of connections makes the difference from the direct path exact.

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “This is indeed well defined in that it is independent of the chosen concordance, up to an exact term.”

**Sources:**

- [James Simons and Dennis Sullivan, Structured vector bundles define differential K-theory, §1](https://www.math.stonybrook.edu/~dennis/publications/PDF/DS-pub-0126.pdf)

### Connections as horizontal subbundles make zero curvature mean integrability

**Remember:** Flat means the horizontal planes fit together into sheets.

*True by definition.* MSC 53C05 (Connections (general theory)), 58A30. arXiv math.DG. Level 3: graduate.

**Definition.** An Ehresmann connection on a smooth fibre bundle is a smooth subbundle complementary to the vertical tangent bundle. Its curvature sends two horizontal vector fields to the vertical part of their bracket.

**Problem.** An Ehresmann connection on any fibre bundle is flat, meaning that a local horizontal section passes through every point, exactly when its curvature is zero.

**How the definition helps.** With the connection given as a distribution of planes, flatness is the Frobenius theorem applied to that distribution. The curvature is exactly the obstruction to the horizontal planes being closed under Lie bracket. So zero curvature means the planes are tangent to local leaves, which are local horizontal sections. The Frobenius theorem carries the analytic work.

**Wikipedia:** [Ehresmann connection](https://en.wikipedia.org/wiki/Ehresmann_connection). It says: “Thus the curvature is the integrability condition for the horizontal subbundle to yield transverse sections of the fiber bundle E → M.”

**Sources:**

- [C. Ehresmann, Les connexions infinitésimales dans un espace fibré différentiable, Colloque de Topologie, Bruxelles (1950) 29–55](https://ehres.pagesperso-orange.fr/C.E.WORKS_fichiers/Ehresmann_C.-Oeuvres_I-1_et_I-2.pdf)

### Curvature as the squared covariant derivative satisfies Bianchi’s identity

**Remember:** Either way of grouping three covariant derivatives gives the same result.

*True by definition.* MSC 53C05 (Connections (general theory)), 81T13. arXiv math.DG, hep-th. Level 3: graduate.

**Definition.** A connection specifies how to differentiate vector fields in a bundle. It extends to an operator D on forms with values in that bundle. Define its curvature F as D applied twice, rather than starting with the local formula F = dA + A∧A.

**Problem.** The second Bianchi identity says DF = 0, where the derivative here acts on the form with values in linear maps.

**How the definition helps.** The square definition turns DF into the difference D∘D² − D²∘D, which is zero by associativity (our own). The local expression instead requires expanding the derivatives and cancelling terms (our own). The work lies in showing that D² is multiplication by a form and identifying the induced derivative with the displayed difference (our own).

**nLab:** [Bianchi identity](https://ncatlab.org/nlab/show/Bianchi+identity). It says: “It can be thought of as generalizing the equation d(dA) = 0 for a real-valued 1-form A to higher degree and nonabelian forms.”

**Wikipedia:** [Exterior covariant derivative](https://en.wikipedia.org/wiki/Exterior_covariant_derivative). It says: “The curvature of a connection on a vector bundle may be defined as the composition of the two exterior covariant derivatives”

**Sources:** none listed. No primary source with a working link was found.

### If the field is a connection, magnetic charge is an integer

**Remember:** A field that is a bundle with connection has an integer charge built in.

*True by definition.* MSC 53C05 (Connections (general theory)), 81T13, 55R40. arXiv math-ph, math.DG. Level 3: graduate.

**Definition.** Away from magnetic charges, model the electromagnetic field by a connection on a principal U(1)-bundle. With real curvature F and unit electric charge, define the magnetic charge inside an enclosing oriented sphere S as ∫ₛ F/(2π).

**Problem.** Dirac charge quantization holds: in units where the electric charge is 1, the magnetic charge is an integer.

**How the definition helps.** The first Chern number of the bundle over S equals the normalized flux and is an integer (our own argument).

**nLab:** [Dirac charge quantization](https://ncatlab.org/nlab/show/Dirac+charge+quantization), [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology). It says: “Equivalently this means that the electromagnetic field is a cocycle in ordinary differential cohomology of degree 2.”

**Sources:**

- [P. A. M. Dirac, Quantised Singularities in the Electromagnetic Field, Proc. Roy. Soc. A 133 (1931) 60–72](https://doi.org/10.1098/rspa.1931.0130)
- [Daniel S. Freed, Dirac Charge Quantization and Generalized Differential Cohomology, Surveys in Differential Geometry 7 (2000) 129–194, arXiv:hep-th/0011220](https://arxiv.org/abs/hep-th/0011220)

### A curvature split bounds energy

**Remember:** The unwanted part of curvature is exactly the excess energy.

*True by definition.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Fix an SU(n) bundle on a closed oriented Riemannian four-manifold. The Hodge star splits its curvature into parts F₊ and F₋ with eigenvalues +1 and −1. An anti-self-dual connection satisfies F₊ = 0.

**Problem.** If the bundle admits an anti-self-dual connection, its absolute energy minimizers are exactly its anti-self-dual connections.

**How the definition helps.** In our own proof, the splitting writes the energy as a bundle constant plus twice the integral of \|F₊\|². Here the energy is the integral of \|F\|². Chern–Weil theory shows that the integral of \|F₋\|² − \|F₊\|² depends only on the bundle.

**nLab:** [Yang-Mills instanton](https://ncatlab.org/nlab/show/Yang-Mills+instanton). It says: “In SU(n)-Yang-Mills theory an instanton is a field configuration with non-vanishing second Chern class that minimizes the Yang-Mills energy.”

**Wikipedia:** [Instanton](https://en.wikipedia.org/wiki/Instanton). It says: “Instantons are topologically nontrivial solutions of Yang–Mills equations that absolutely minimize the energy functional within their topological type.”

**Sources:**

- [Michael F. Atiyah, Nigel J. Hitchin and Isadore M. Singer, Self-duality in four-dimensional Riemannian geometry](https://doi.org/10.1098/rspa.1978.0143)

### A frame removes gauge stabilizers

**Remember:** A gauge symmetry that fixes one frame fixes every transported frame.

*Rules out counterexamples.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Choose a point in one fibre of a principal bundle. Its based gauge group consists of all equivariant bundle automorphisms covering the identity that fix this point.

**Problem.** On a connected base, the based gauge group acts freely on the space of smooth connections.

**How the definition helps.** A symmetry that preserves the connection commutes with parallel transport (our own proof). So if it fixes one frame, it fixes a transported frame over every point of the connected base, and hence is the identity. The full gauge group need not act freely, since constant gauge transformations preserve the product connection on a trivial bundle.

**nLab:** [parallel transport](https://ncatlab.org/nlab/show/parallel+transport). It says: “This means that we may identify connections on P with their parallel transport functors.”

**Sources:** none listed. No primary source with a working link was found.

### Anti-self-dual connections satisfy Yang–Mills

**Remember:** Flip the curvature and let the Bianchi identity do the rest.

*True by definition.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** On an oriented Riemannian four-manifold, let F be the curvature of a connection with compact structure group. The metric and orientation define the Hodge star ⋆ on two-forms. A connection is anti-self-dual if ⋆F = −F.

**Problem.** Every smooth anti-self-dual connection is a Yang–Mills connection.

**How the definition helps.** In our own calculation, anti-self-duality turns the Yang–Mills equation dₐ⋆F = 0 into the Bianchi identity dₐF = 0. Here dₐ differentiates forms using the connection. The identity holds for every connection, so the first-order condition implies the second-order equation.

**nLab:** [Yang-Mills equation](https://ncatlab.org/nlab/show/Yang-Mills+equation). It says: “The Bianchi identity dₐFₐ = 0 and the Yang-Mills equation δₐFₐ = 0 combine to:”

**Sources:**

- [Michael F. Atiyah, Nigel J. Hitchin and Isadore M. Singer, Self-duality in four-dimensional Riemannian geometry](https://doi.org/10.1098/rspa.1978.0143)

### Coulomb gauge restores Hessian ellipticity

**Remember:** Coulomb gauge fills the symbol direction that gauge symmetry leaves empty.

*Rules out counterexamples. Confidence: medium.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** At a smooth Yang–Mills connection A, let H linearize the Yang–Mills equation and let dₐ\* denote the metric adjoint of dₐ. Coulomb gauge restricts variations a by dₐ\*a = 0. The gauge-fixed Hessian H + dₐdₐ\* acts on all variations.

**Problem.** On a closed Riemannian manifold of positive dimension with positive-dimensional compact structure group, the gauge-fixed operator is elliptic. Its principal symbol, which records its highest derivatives, equals \|ξ\|² times the identity at every nonzero covector ξ.

**How the definition helps.** In our own proof, the added term supplies exactly the direction missing from the Hessian. The symbol of H acts by \|ξ\|² on variations perpendicular to ξ and vanishes on variations parallel to ξ. The added term acts by \|ξ\|² on parallel variations and vanishes on perpendicular ones. Their sum is invertible for ξ ≠ 0, which gives ellipticity.

**nLab:** [Coulomb gauge](https://ncatlab.org/nlab/show/Coulomb+gauge). It says: “Then A is said to be in Coulomb gauge relative to A₀ if”

**Paper or page:** [Compactness for Ω-Yang-Mills connections](https://arxiv.org/abs/2106.09131). It says: “then A is gauge equivalent to a connection (also denoted A) satisfying:”

**Sources:** none listed. No primary source with a working link was found.

### Cylinder instantons follow Chern–Simons flow

**Remember:** Remove the time component and duality becomes flow.

*Makes the theorem clean to state or prove.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Take the product of an interval and a closed oriented Riemannian three-manifold with its product metric and a pulled-back principal SU(2) bundle. Temporal gauge means the time component vanishes, leaving a path A(t) of spatial connections. Normalize Chern–Simons so its L² gradient is ⋆Fₐ.

**Problem.** With time first in the product orientation, a connection in temporal gauge is anti-self-dual exactly when its path follows negative Chern–Simons gradient flow.

**How the definition helps.** Temporal gauge turns the mixed curvature component into the time derivative of A. In our own sign convention, anti-self-duality gives ∂ₜA = −⋆Fₐ, where ⋆ is the spatial Hodge star. Parallel transport along the interval supplies temporal gauge. The first variation of Chern–Simons identifies the spatial curvature term with its gradient.

**nLab:** [Yang-Mills instanton Floer homology](https://ncatlab.org/nlab/show/Yang-Mills+instanton+Floer+homology). It says: “the flow lines of S₍CS₎ correspond to the Yang-Mills instantons on Σ × \[0,1\].”

**Sources:**

- [Simon K. Donaldson, Floer Homology Groups in Yang-Mills Theory](https://doi.org/10.1017/CBO9780511543098)

### Cylinder integration gives Chern–Simons transgression

**Remember:** Integrate along the path and differentiate to get the endpoints.

*True by definition.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Join the connections by their straight path and give the resulting cylinder connection zero interval component. For a homogeneous invariant polynomial P, integrate P(F) with the increasing interval direction inserted first, where F is the cylinder curvature. This integral is the relative Chern–Simons form.

**Problem.** The exterior derivative of this form equals P applied to the final curvature minus P applied to the initial curvature.

**How the definition helps.** In our own proof, integration along the interval turns differentiation into subtraction of the two endpoint values. Stokes’ formula gives this identity because Chern–Weil theory makes P(F) closed. Using the usual polynomial expression for the relative form would require differentiating the connection along the path explicitly.

**Paper or page:** [Rigid models for 2-gerbes I: Chern-Simons geometry](https://arxiv.org/abs/2209.05521). It says: “Given a k-form ξ on X × \[a,b\] we have d∫\[a,b\] ξ + ∫\[a,b\] dξ = ξ\|X×{b} − ξ\|X×{a}.”

**Sources:**

- [Shiing-Shen Chern and James Simons, Characteristic Forms and Geometric Invariants](https://doi.org/10.2307/1971013)

### Local systems compute flat cohomology

**Remember:** Parallel sections are the coefficients of flat de Rham theory.

*Makes the theorem clean to state or prove.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Let E be a smooth real or complex vector bundle with flat connection on a smooth manifold. Its covariant exterior derivative differentiates E-valued forms and squares to zero because the curvature vanishes. The parallel sections on open sets form a local system, a sheaf that looks constant on small balls.

**Problem.** The cohomology of the flat de Rham complex is the cohomology of the parallel local system. In particular it does not require a metric on the base.

**How the definition helps.** In our own proof, a parallel frame turns the differential on bundle-valued forms into ordinary differentiation of each component. The Poincaré lemma gives local exactness in positive degrees, and the kernel in degree zero consists of parallel sections. Partitions of unity make this a resolution whose global sections compute the cohomology of the local system.

**Paper or page:** [Lie groups and Chern-Simons Theory](https://arxiv.org/abs/2207.11062). It says: “the homology on the chain complex described above is just the cohomology of M with local coefficients in V”

**Sources:** none listed. No primary source with a working link was found.

### Nonzero vortices require strict area bounds

**Remember:** A nonzero section uses some of the available area.

*Rules out counterexamples.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Fix a holomorphic line bundle L with a nonzero holomorphic section φ on a compact connected Riemann surface with area form ω. A Hermitian metric h gives the unique unitary connection compatible with the holomorphic structure. Its curvature F satisfies the vortex equation when iF = (τ − \|φ\|²)ω/2, with real parameter τ and norm from h.

**Problem.** A vortex with nonzero section must satisfy 4π deg L &lt; τ times the area. If equality holds, a constant-curvature connection with the zero section solves the equations.

**How the definition helps.** In our own proof, a nonzero section makes the integral of its squared norm strictly positive. The curvature formula gives ∫iF = 2π deg L, where deg L is the first Chern number. Integrating the vortex equation now gives the strict bound. At equality a constant-curvature metric solves the equation with the zero section.

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

**Remember:** Ignore scalar curvature only after passing to projective frames.

*True by definition.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** On a Riemann surface with area form ω, a unitary connection is Hermite–Einstein if F = iλω Id for some real constant λ. It is projectively flat if the induced connection on orthonormal frames modulo common phase has zero curvature.

**Problem.** Every Hermite–Einstein connection on a Hermitian bundle over a compact Riemann surface is projectively flat. A positive-degree line bundle shows why one cannot conclude ordinary flatness.

**How the definition helps.** In our own proof, passage to projective frames kills every imaginary scalar multiple of the identity. Thus the Hermite–Einstein equation on a curve forces projective curvature to vanish. For ordinary flatness the scalar itself must vanish. On a positive-degree line bundle its integral is nonzero by the curvature formula for the degree.

**nLab:** [projectively flat connection](https://ncatlab.org/nlab/show/projectively+flat+connection). It says: “A connection on a bundle that is flat up to a central term.”

**Sources:**

- [Michael F. Atiyah and Raoul Bott, The Yang-Mills equations over Riemann surfaces](https://doi.org/10.1098/rsta.1983.0017)

### Translation symmetry gives Bogomolny monopoles

**Remember:** The removed direction becomes a field on the space that stays.

*True by definition.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Give ℝ × Y the product metric and time-first orientation for an oriented Riemannian three-manifold Y. A translation-invariant connection on a pulled-back principal bundle is A + φ dt, with A a connection and φ an adjoint bundle section on Y.

**Problem.** The lifted connection A + φ dt is anti-self-dual exactly when Fₐ = ⋆dₐφ on Y. Here ⋆ is the spatial Hodge star.

**How the definition helps.** In our own calculation, translation invariance leaves just two curvature components, Fₐ and dₐφ ∧ dt. The four-dimensional Hodge star exchanges spatial and mixed forms. With the stated orientation, anti-self-duality therefore says Fₐ = ⋆dₐφ. This identifies the three-dimensional monopole equation with a symmetry restriction of the four-dimensional equation.

**nLab:** [Bogomolny equation](https://ncatlab.org/nlab/show/Bogomolny+equation). It says: “The Bogomolny equations are differential equations re-expressing the equations of motion of self-dual Yang-Mills theory”

**Wikipedia:** [Yang–Mills equations](https://en.wikipedia.org/wiki/Yang%E2%80%93Mills_equations). It says: “By requiring the anti-self-duality equations to be invariant under translations in a single direction of ℝ⁴, one obtains the Bogomolny equations”

**Sources:** none listed. No primary source with a working link was found.

### Universal covers classify flat bundles

**Remember:** Trivialize upstairs and record what deck transformations do.

*Makes the theorem clean to state or prove.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** Fix a based connected smooth manifold M, a Lie group G and a homomorphism ρ from π₁(M) to G. The associated flat bundle is the quotient of M̃ × G by γ·(x,g) = (γx,ρ(γ)g), where γ acts on the universal cover M̃ by deck transformations. It carries the descended product connection.

**Problem.** Isomorphism classes of flat principal bundles with connection over a connected smooth manifold correspond to conjugacy classes of fundamental group representations into the structure group.

**How the definition helps.** The quotient construction turns each representation directly into a bundle with connection. For the inverse, pull a flat connection back to the simply connected cover. Flatness makes parallel transport independent of the path there, giving a parallel frame. In our own comparison, changing the initial frame conjugates the representation.

**Paper or page:** [Equivariant gluing theory on regular instanton moduli spaces](https://arxiv.org/abs/2101.09425). It says: “Suppose B is connected, π : P → B is a principal G-bundle and A is a flat connection on P, then there exists a representation π₁(B) → G unique up to conjugation”

**Sources:** none listed. No primary source with a working link was found.

### Character curvatures have integral periods

**Remember:** A cycle has zero boundary, so its curvature integral is zero modulo integers.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** A degree-k differential character is an additive map h from smooth integral (k−1)-cycles to ℝ/ℤ. Its curvature is the k-form ω whose integral over each smooth integral k-chain C equals h(∂C) modulo integers.

**Problem.** The curvature of a differential character integrates to an integer on every smooth integral k-cycle.

**How the definition helps.** The boundary rule turns the integral on a cycle into the character’s value at zero, modulo integers. In the model using forms and cochains, integrality instead follows by comparing curvature with an integral cocycle. Our own comparison uses the theorem identifying the two models.

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

**Definition.** Take a good cover with circle functions gᵢⱼ and imaginary-valued connection forms Aᵢ satisfying gᵢⱼgⱼₖ = gᵢₖ and Aⱼ − Aᵢ = gᵢⱼ⁻¹dgᵢⱼ on overlaps. Deligne addition multiplies corresponding frame changes and adds corresponding forms.

**Problem.** Addition of degree-two smooth Deligne classes corresponds to tensoring Hermitian line bundles with their unitary connections.

**How the definition helps.** The sum already records the frame changes and connection forms of the tensor product (our own). Identifying these local descriptions with geometric bundles uses the classification by gluing (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “This evidently generalizes the familiar Cech cocycle data for traditional line bundles with connection.”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Deligne classes classify line bundles with connection

**Remember:** Transition functions and connection forms fit in one cocycle.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A degree-two smooth Deligne cocycle describes a line with connection on a cover with contractible intersections. It gives circle-valued changes of frame on overlaps and real connection forms on patches. The changes compose on triples, and their normalized logarithmic derivatives give the differences between connection forms.

**Problem.** Degree-two smooth Deligne classes classify Hermitian line bundles with unitary connection up to isomorphism. Such a connection transports vectors while preserving their lengths.

**How the definition helps.** The cocycle equations give exactly the rules for gluing local lines and their connections (our own). Gluing constructs the bundle, while changes of local frame account for equivalent cocycles (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “This evidently generalizes the familiar Cech cocycle data for traditional line bundles with connection.”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Deligne cocycles encode gerbe connections

**Remember:** One cocycle stores the functions, potentials, and curvings.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** Use circle-valued functions as degree zero and take a good cover. A degree-two Deligne cocycle consists of circle functions g on triple overlaps, real one-forms A on double overlaps, and patch two-forms B. With δ the alternating Čech coboundary, require δg = 1, δA = g⁻¹dg/(2πi), and δB = dA.

**Problem.** Degree-two Deligne cocycles modulo changes of local trivialization classify circle bundle gerbes with connection and curving up to stable isomorphism.

**How the definition helps.** One cocycle records all three gluing rules for the gerbe, its connection, and its curving. Our own explanation identifies changes of local frames and patch connections with coboundaries, the changes ignored in cohomology. The classification theorem reconstructs the gerbe from these local data.

**Wikipedia:** [Bundle gerbe](https://en.wikipedia.org/wiki/Bundle_gerbe). It says: “a geometrical model of certain 1-gerbes with connection, or equivalently of a 2-class in Deligne cohomology.”

**Sources:**

- [M. K. Murray and D. Stevenson, Bundle Gerbes: Stable Isomorphism and Local Theory](https://doi.org/10.1112/s0024610700001551)
- [P. Gajer, Geometry of Deligne cohomology](https://doi.org/10.1007/s002220050118)

### Deligne products preserve integral products

**Remember:** The degree zero part multiplies integer cochains.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** On a good cover, integral projection sends a Deligne cocycle to its integer Čech component. For integer components u and v of degrees p and q, the product component on indices i₀,…,iₚ₊q is u(i₀,…,iₚ)v(iₚ,…,iₚ₊q).

**Problem.** The underlying integral class of a Deligne cup product is the ordinary cup product of the underlying integral classes.

**How the definition helps.** Projection retains precisely the integer multiplication rule on overlaps (our own). The comparison between cohomology on a good cover and singular cohomology identifies this rule with the ordinary cup product (our own).

**nLab:** [Beilinson–Deligne cup product](https://ncatlab.org/nlab/show/Beilinson%E2%80%93Deligne+cup+product). It says: “α ∧ β = αβ”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Kiyonori Gomi, Projective unitary representations of smooth Deligne cohomology groups, §2.](https://doi.org/10.1016/j.geomphys.2009.06.012)

### Deligne products wedge curvatures

**Remember:** Differentiate the last product form to wedge the curvatures.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** The Deligne cup product represents multiplication of differential cohomology classes using local forms and overlap data. For positive degrees, its highest local form is α∧dβ, where α and β are the highest forms of the factors. The symbol ∧ denotes the exterior product of forms.

**Problem.** For smooth Deligne classes of positive degrees, the curvature of their cup product equals the exterior product of their curvatures.

**How the definition helps.** Differentiating α∧dβ gives dα∧dβ, and these two derivatives are the factor curvatures (our own). The work lies in constructing a product on classes from this asymmetric local formula (our own).

**nLab:** [Beilinson–Deligne cup product](https://ncatlab.org/nlab/show/Beilinson%E2%80%93Deligne+cup+product). It says: “\\alpha \\wedge d<sub>dR</sub>\\beta”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Kiyonori Gomi, Projective unitary representations of smooth Deligne cohomology groups, §2.](https://doi.org/10.1016/j.geomphys.2009.06.012)
- [Michael J. Hopkins and Isadore M. Singer, Quadratic functions in geometry, topology, and M-theory.](https://doi.org/10.4310/jdg/1143642908)

### Deligne projection recovers Chern classes

**Remember:** Drop the forms and keep the integer cocycle.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** The degree-two smooth Deligne complex is ℤ → C∞(−,ℝ) → Ω¹, with integer inclusion followed by exterior differentiation. Its integral projection acts identically on integers and sends both higher terms to zero.

**Problem.** For a line bundle with unitary connection, this projection sends its Deligne class to the first Chern class, its integral topological invariant.

**How the definition helps.** Projection retains the integer discrepancies between local logarithms of the circle-valued frame changes on triple overlaps (our own). The exponential sequence identifies these discrepancies with the first Chern class computed without a connection (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “a canonical forgetful map”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Flat complexes compute flat classes

**Remember:** Require closed top forms and only locally constant data survive.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** For n ≥ 2, the flat Deligne complex starts with smooth circle-valued functions in degree one. It continues with differential forms through degree n−1, requiring the last forms to be closed. The first map takes normalized logarithmic derivatives, and subsequent maps take exterior derivatives.

**Problem.** On a smooth manifold X, degree-n smooth Deligne classes with zero curvature form the ordinary cohomology group Hⁿ⁻¹(X, ℝ/ℤ) for n ≥ 2.

**How the definition helps.** Requiring closed last forms imposes zero curvature directly on local representatives (our own). Local primitives and local logarithms leave only locally constant circle values in degree one (our own). The exact sequence for curvature identifies the resulting group with the kernel (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “The Deligne cohomology group fits into a short exact sequence (of abelian groups) of the form”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Flat connections lift torsion

**Remember:** Flat connections can keep torsion that real cohomology forgets.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A flat unitary connection has zero curvature and admits local frames that it transports unchanged. In these frames the changes on overlaps take locally constant values in the circle ℝ/ℤ.

**Problem.** On a compact smooth manifold, a Hermitian line bundle admits a flat unitary connection exactly when some positive integer kills its first Chern class.

**How the definition helps.** Flat frame changes define a class in H¹(X, ℝ/ℤ) whose Bockstein is the first Chern class (our own argument). Conversely, each such cocycle glues a flat line bundle, and the first Chern class classifies line bundles. Exactness gives precisely the kernel of passage to real cohomology. Compact smooth manifolds have finitely generated integral cohomology, so this kernel is torsion.

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “the Bockstein homomorphism:”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Flat holonomy factors through homology

**Remember:** Without curvature, adding a boundary changes no phase.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A degree-three differential character assigns a unit complex number to each smooth integral 2-cycle and sends sums to products. On a boundary its value is the exponential of 2πi times the integral of its curvature over the filling. A flat gerbe has zero curvature.

**Problem.** The surface phases of a flat circle gerbe depend only on the integral homology class of the surface.

**How the definition helps.** In our own derivation, zero curvature makes every boundary phase one, so adding a boundary preserves the phase. The comparison theorem identifies gerbe surface phases with a differential character. In our own counterexample, a trivial gerbe on ℝ³ has potential x dy ∧ dz. The boundary of a ball of volume one-half has phase −1.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “this assignment coincides with the integral $\\int\_{\\Sigma<sub>n+1</sub>} \\phi<sup>\*</sup> F$ of the pullback of a curvature $(n+1)$-form”

**Sources:**

- [B. Park, Differential cohomology and gerbes: An introduction to higher differential geometry](https://byungdo.github.io/seminars/IMSRS.pdf)

### Global forms cup with curvature

**Remember:** A global form cups by wedging with curvature.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** Write a(A) for the degree-p Deligne class represented by a single global (p−1)-form A. In the Deligne cup product, a left form multiplies only the highest right form β, giving A∧dβ.

**Problem.** For positive degrees p and q, multiplying a(A) by a degree-q Deligne class with curvature F gives a(A∧F).

**How the definition helps.** Only the derivatives of the highest right forms survive, and these agree everywhere with F (our own). The cochain formula therefore produces the single global form A∧F (our own). The work lies in proving that this product respects changes of representatives (our own).

**nLab:** [Beilinson–Deligne cup product](https://ncatlab.org/nlab/show/Beilinson%E2%80%93Deligne+cup+product). It says: “\\alpha \\wedge d<sub>dR</sub>\\beta”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Kiyonori Gomi, Projective unitary representations of smooth Deligne cohomology groups, §2.](https://doi.org/10.1016/j.geomphys.2009.06.012)
- [Michael J. Hopkins and Isadore M. Singer, Quadratic functions in geometry, topology, and M-theory.](https://doi.org/10.4310/jdg/1143642908)

### Global forms describe trivial topology

**Remember:** Zero topology leaves one global form modulo integral periods.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** For n ≥ 2, the smooth Deligne complex starts with ℤ in degree zero, followed by smooth real functions and forms through degree n−1. Its maps are inclusion and then exterior differentiation. Integral projection keeps degree zero and kills all higher terms.

**Problem.** Degree-n classes with zero underlying integral class form the group of global (n−1)-forms modulo closed forms with integer integrals over cycles.

**How the definition helps.** Deleting the integer term leaves a complex of forms whose cohomology can be computed using global forms (our own). Partitions of unity justify this step (our own). Exactness and the de Rham theorem identify the remaining ambiguity with closed forms having integral periods (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “Hence we get a short exact sequence by dividing out the image”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Last Deligne forms give curvature

**Remember:** Take the exterior derivative where the Deligne complex stops.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** For a degree-n smooth Deligne cocycle on a good cover, let Bᵢ denote the (n−1)-form on patch i, with n ≥ 2. Define its curvature on each patch as dBᵢ.

**Problem.** Differentiating the highest forms of a smooth Deligne cocycle gives a global closed curvature form depending only on its class.

**How the definition helps.** The local derivatives agree because differentiating twice gives zero (our own). Changing the representative also changes its highest forms locally by exact forms (our own). Comparison with geometric connections identifies this global derivative with their curvature (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “the failure of the (n−k+1)-forms to glue on (k+1)-fold intersections of charts is given by the de Rham differential of the (n−k)-forms”

**Paper or page:** [Rigid models for 2-gerbes I: Chern-Simons geometry](https://arxiv.org/abs/2209.05521v4). It says: “Let $\\pi \\colon Y\\to X$ be a surjective submersion. Then for all $p\\geq 0$ the complex \\\[ 0 \\to \\Omega ^p(X)\\xrightarrow {\\pi ^\*} \\Omega ^p(Y) \\xrightarrow {\\delta } \\Omega ^p(Y<sup>\[2\]</sup>) \\xrightarrow {\\delta } \\Omega ^p(Y<sup>\[3\]</sup>) \\xrightarrow {\\delta } \\cdots \\\] is exact”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Lifting gerbes detect obstructions

**Remember:** Multiply lifted transition functions to read the obstruction.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A central circle extension maps one Lie group onto another with a central circle as kernel. For a principal bundle, two points in one fiber differ by a unique group element. The lifting gerbe assigns to that pair the circle of lifts of this element and multiplies lifts using the extended group.

**Problem.** A smooth principal bundle lifts to the extended group exactly when the integral cohomology class of its lifting gerbe vanishes.

**How the definition helps.** The gerbe product records exactly where lifted transition functions fail to multiply on triple overlaps. Our own comparison uses the same circle-valued error in the usual transition-function proof. The exponential sequence identifies its cohomology class with the integral gerbe class. Vanishing means that local circle factors correct the lifts so they glue.

**nLab:** [lifting gerbe](https://ncatlab.org/nlab/show/lifting+gerbe). It says: “arising as the obstruction to the lift of a G-principal bundle”

**Sources:**

- [B. Park, Differential cohomology and gerbes: An introduction to higher differential geometry](https://byungdo.github.io/seminars/IMSRS.pdf)

### Matching real classes admit lifts

**Remember:** The witness exists exactly when the two real cohomology classes agree.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A degree-n differential cocycle consists of an integral n-cocycle c, a closed real n-form ω and a real (n−1)-cochain h on smooth singular chains. For every smooth singular n-chain S, require h(∂S) = ∫ₛ ω − c(S).

**Problem.** An integral degree-n class and a closed n-form on a smooth manifold have a common differential refinement exactly when their real cohomology classes agree.

**How the definition helps.** The required real cochain exists exactly when the difference represents zero in real cohomology (our own). The comparison with smooth Deligne classes uses the de Rham theorem to relate differential forms to real cochains (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “represent real cohomology classes that are in the image of integral cohomology classes.”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)

### Sphere tests miss torus periods

**Remember:** Checking spheres does not check all periods.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** A degree-two differential character assigns values in ℝ/ℤ additively to smooth integral 1-cycles. Its curvature is a 2-form whose integral on each smooth integral 2-chain gives the character’s value on the boundary, modulo integers.

**Problem.** A torus admits a 2-form whose integral over every mapped sphere is zero, although the form cannot be a character curvature.

**How the definition helps.** The boundary rule tests the whole torus, which has zero boundary. In our own example the form has total integral one half. Every map from the sphere to the torus lifts to the plane, where the lifted form has a primitive. Stokes’ theorem therefore gives zero on every sphere.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “a rule that assigns values in the circle group U(1)”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 1.1](https://doi.org/10.1007/BFb0075216)

### Surface holonomy obeys Stokes

**Remember:** Trivialize on the three-manifold and use ordinary Stokes.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A circle gerbe with connection assigns a phase, called holonomy, to each closed oriented surface mapped smoothly into its base. A trivialization over the surface describes the gerbe by a real 2-form b. Define the phase as exp(2πi ∫ b), integrating over the surface.

**Problem.** For a smooth map from a compact oriented three-manifold, the boundary phase equals the exponential of 2πi times the integral of the pulled-back gerbe curvature.

**How the definition helps.** The trivialization formula reduces the boundary phase to ordinary Stokes whenever the trivialization extends over the filling. In our own proof, each connected component with boundary admits a trivialization because its third integral cohomology vanishes. A closed component contributes phase one because the curvature has integral periods. The geometric comparison theorem identifies this formula with the usual sum of local contributions from a triangulation.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “this assignment coincides with the integral $\\int\_{\\Sigma<sub>n+1</sub>} \\phi<sup>\*</sup> F$ of the pullback of a curvature $(n+1)$-form”

**Sources:**

- [J. Fuchs, T. Nikolaus, C. Schweigert and K. Waldorf, Bundle gerbes and surface holonomy](https://doi.org/10.4171/077-1/8)
- [M. K. Murray and D. Stevenson, Bundle Gerbes: Stable Isomorphism and Local Theory](https://doi.org/10.1112/s0024610700001551)

### The Bockstein recovers flat characteristic classes

**Remember:** With no curvature term, the integral class comes from the coboundary alone.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.AT, math.DG. Level 3: graduate.

**Definition.** In the cochain description of a differential character, a real cochain h lifts its cycle values modulo integers. The characteristic class is represented by integrated curvature minus δh, where δ takes the coboundary. A flat character has zero curvature.

**Problem.** The integral characteristic class of a flat character equals minus the Bockstein of its ℝ/ℤ cohomology class.

**How the definition helps.** Setting curvature to zero leaves exactly −δh. The Bockstein takes a circle-valued cocycle, lifts it to real values, and takes its coboundary. Our own comparison with the definition on cycles uses the theorem identifying characters with cochain classes.

**nLab:** [ordinary differential cohomology](https://ncatlab.org/nlab/show/ordinary+differential+cohomology). It says: “The underlying characteristic class”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Corollary 1.2](https://doi.org/10.1007/BFb0075216)

### Truncation preserves exact curvature

**Remember:** An exact curvature can disappear in de Rham cohomology but not in the cutoff complex.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 55N20. arXiv math.DG, math.AT. Level 3: graduate.

**Definition.** The degree-n truncation of the de Rham complex keeps all forms in degrees n and higher with their usual differential. It replaces every lower degree by zero.

**Problem.** On ℝ² there is a differential class with curvature d(x dy) = dx ∧ dy. Using the full form complex would identify this curvature with zero.

**How the definition helps.** The cutoff removes the degree-one forms whose derivatives would otherwise be boundaries in degree two (our own). The one-form x dy defines a topologically trivial differential class with curvature dx ∧ dy (our own). In the full complex, this same two-form represents zero because it is exact (our own).

**nLab:** [differential cohomology diagram](https://ncatlab.org/nlab/show/differential+cohomology+diagram). It says: “the truncated sheaves of de Rham complexes with coefficients in a given chain complex:”

**Sources:**

- [Hopkins and Singer, Quadratic functions in geometry, topology, and M-theory, §4 and Appendix D](https://doi.org/10.4310/jdg/1143642908)
- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BNV.pdf)

### Two-forms describe topologically trivial gerbes

**Remember:** A comparison line changes the curving by its curvature.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 3: graduate.

**Definition.** A trivial gerbe with curving B carries a global 2-form B specifying its surface phases. A comparison between two such gerbes is a line bundle whose connection has normalized curvature B₂ − B₁. Normalization divides unitary curvature by 2πi.

**Problem.** Every topologically trivial circle gerbe with connection and curving has such a global description. Two forms give equivalent descriptions exactly when their difference integrates to an integer on every closed integral 2-cycle and is closed.

**How the definition helps.** The comparison line turns equivalence into a prescribed-curvature problem for an ordinary line bundle. The line bundle curvature theorem gives exactly the stated period condition. In our own explanation, a topological trivialization with compatible connection lets the remaining curving descend to the base.

**nLab:** [ordinary differential cohomology](https://ncatlab.org/nlab/show/ordinary+differential+cohomology). It says: “differ by a globally defined connection (n−1)-form, well defined up to addition of a form with integral periods.”

**Paper or page:** [Geometric T-duality: Buscher rules in general topology](https://arxiv.org/abs/2207.11799). It says: “where the right hand side denotes the category of principal 𝕋-bundles with connection of fixed curvature F = B₂ − B₁.”

**Sources:**

- [M. K. Murray and D. Stevenson, Bundle Gerbes: Stable Isomorphism and Local Theory](https://doi.org/10.1112/s0024610700001551)
- [P. Gajer, Geometry of Deligne cohomology](https://doi.org/10.1007/s002220050118)
- [K. Waldorf, Geometric T-duality: Buscher rules in general topology](https://arxiv.org/abs/2207.11799)

### Synge's theorem needs orientability, which excludes the real projective plane

**Remember:** A nowhere-zero volume form chooses an orientation everywhere.

*Rules out counterexamples.* MSC 53C21 (Methods of global Riemannian geometry, including PDE methods; curvature restrictions). arXiv math.DG. Level 3: graduate.

**Definition.** A smooth manifold is orientable if it admits a smooth top-degree form that vanishes nowhere.

**Problem.** Every connected, compact, orientable, even-dimensional Riemannian manifold without boundary and with positive sectional curvature is simply connected.

**How the definition helps.** Orientability excludes the positively curved real projective plane, whose fundamental group has order two (our own example). In Synge’s proof, parallel transport around a shortest noncontractible closed geodesic preserves orientation on its odd-dimensional normal space. It therefore fixes a unit normal vector. The resulting parallel variation shortens the geodesic by positive curvature, contradicting minimality (our own summary).

**Paper or page:** [The curvature of convex sum of metrics and applications](https://arxiv.org/abs/2106.14781). It says: “Let (M,g) be a compact manifold with positive sectional curvature. Then, If M is even-dimensional and orientable, then it is simply-connected, If M is odd-dimensional, then it is orientable.”

**Sources:**

- [L. F. Cavenaghi and L. D. Sperança, The curvature of convex sum of metrics and applications, arXiv:2106.14781 (2021)](https://arxiv.org/abs/2106.14781)
- [J. L. Synge, On the connectivity of spaces of positive curvature, Quarterly Journal of Mathematics 7 (1936) 316–320](https://doi.org/10.1093/qmath/os-7.1.316)

### Defining Jacobi fields as geodesic variations makes Killing fields Jacobi

**Remember:** Move the geodesic by isometries and differentiate to get a Jacobi field.

*True by definition. Confidence: medium.* MSC 53C22 (Geodesics in global differential geometry), 53B20. arXiv math.DG. Level 3: graduate.

**Definition.** Define a Jacobi field along a geodesic γ as the derivative of a smooth family of geodesics through γ. The usual definition asks for a solution of the Jacobi equation J″ + R(J,γ′)γ′ = 0. Here R is the curvature tensor.

**Problem.** The restriction of a Killing field, a vector field whose flow preserves the metric, to a geodesic is a Jacobi field.

**How the definition helps.** The local flow of a Killing field takes each geodesic segment to a family of geodesics (our own argument). Differentiating this family gives the restriction of the field. The geodesic variation theorem identifies these derivatives locally with solutions of the Jacobi equation.

**Wikipedia:** [Jacobi field](https://en.wikipedia.org/wiki/Jacobi_field). It says: “Take a smooth one parameter family of geodesics”

**Sources:** none listed. No primary source with a working link was found.

### Killing fields give conserved quantities along geodesics

**Remember:** Pair the same velocity twice with an antisymmetric derivative and get zero.

*True by definition. Confidence: medium.* MSC 53C22 (Geodesics in global differential geometry), 53C05, 83C40. arXiv math.DG, gr-qc. Level 3: graduate.

**Definition.** A Killing field K is a vector field whose flow preserves the metric. In the Killing equation, the covariant derivative of the one-form g(K, ·) is antisymmetric.

**Problem.** On an affinely parametrized geodesic, a path whose tangent U is parallel along itself, the metric product g(K, U) stays constant.

**How the definition helps.** The antisymmetric derivative makes the rate of change of g(K, U) vanish because it pairs U with itself. No derivative of U remains because U is parallel along the path (our own). The work is in identifying that antisymmetry with preservation of the metric. A coordinate that does not appear in the metric gives a special case of this construction.

**Wikipedia:** [Killing vector field](https://en.wikipedia.org/wiki/Killing_vector_field). It says: “Each Killing vector corresponds to a quantity which is conserved along geodesics. This conserved quantity is the metric product between the Killing vector and the geodesic tangent vector.”

**Sources:** none listed. No primary source with a working link was found.

### Approximate midpoints let a three-point test detect length spaces

**Remember:** Halve the gaps and let the errors shrink.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C22. arXiv math.MG. Level 3: graduate.

**Definition.** In a length space, the distance between two points is the infimum of the lengths of paths that join them. A point z is an ε-midpoint of x and y if both d(x, z) and d(y, z) are at most d(x, y)/2 + ε.

**Problem.** A complete metric space is a length space exactly when every pair of points has an ε-midpoint for every ε &gt; 0.

**How the definition helps.** Approximate midpoints express the path condition using three points (our own explanation). Halving a path whose length approaches the distance supplies an approximate midpoint. Conversely, repeated midpoint insertion with summable errors gives a Lipschitz map on dyadic times with length arbitrarily close to the distance. Completeness extends this map continuously to the whole interval (our own construction).

**Paper or page:** [A Gentle Introduction to CAT(0) Spaces](https://arxiv.org/abs/2406.09883v1). It says: “X is a length space if and only if it admits ε-midpoints for all ε &gt; 0.”

**Sources:**

- [Søren Poulsen, A Gentle Introduction to CAT(0) Spaces, arXiv:2406.09883v1 (2024)](https://arxiv.org/abs/2406.09883v1)

### Blending distances along an optimal correspondence gives Gromov–Hausdorff geodesics

**Remember:** Blend the two distance functions along a best match.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54E45. arXiv math.MG. Level 3: graduate.

**Definition.** A correspondence R ⊆ X × Y projects onto both spaces. It is optimal if it minimizes the supremum of \|dₓ(x,x′) − dᵧ(y,y′)\| over all (x,y),(x′,y′) in R. For 0 ≤ t ≤ 1, use the weighted distance (1−t)dₓ(x,x′) + tdᵧ(y,y′) on R, identifying pairs at distance zero.

**Problem.** Nonempty compact metric spaces up to isometry form a geodesic space under Gromov–Hausdorff distance. Each closed optimal correspondence gives a shortest path between its endpoints.

**How the definition helps.** Matching each pair to itself bounds the intermediate Gromov–Hausdorff distance by \|s−t\| times half the distortion of R (our own calculation). The correspondence theorem identifies half the optimal distortion with the endpoint distance and guarantees a closed optimizer for compact spaces. The triangle inequality then forces equality throughout the path.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “is a shortest geodesic with the speed dɢʜ(X,Y).”

**Sources:**

- [Alexey A. Tuzhilin, Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry, arXiv:2012.00756v1 (2020)](https://arxiv.org/abs/2012.00756v1)

### Bonnet–Myers for Alexandrov spaces must exclude lines and circles

**Remember:** A line has no fat triangles to fail, so exclude it.

*Rules out counterexamples. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C21. arXiv math.DG, math.MG. Level 3: graduate.

**Definition.** For k &gt; 0, local Alexandrov curvature ≥ k means every point has a neighborhood satisfying spherical triangle comparison. For each sufficiently short geodesic triangle there, distances between side points dominate corresponding distances in the sphere of curvature k. Use triangles of perimeter below 2π/√k and match points by distance along corresponding sides.

**Problem.** A complete length space of dimension at least two with Alexandrov curvature at least k &gt; 0 has diameter at most π/√k.

**How the definition helps.** The real line satisfies local comparison through degenerate triangles but has infinite diameter (our own example). The Alexandrov Bonnet–Myers theorem gives the diameter bound once the dimension assumption excludes these one-dimensional exceptions.

**Paper or page:** [Alexandrov's Patchwork and the Bonnet--Myers Theorem for Lorentzian length spaces](https://arxiv.org/abs/2302.11615), [Alexandrov's Patchwork and the Bonnet--Myers Theorem for Lorentzian length spaces](https://arxiv.org/abs/2302.11615). It says: “Let X be a complete length space with (local) curvature bounded below by some k&gt;0, which is not one of the aforementioned 1-dimensional spaces. Then diam(X) ≤ π/√k.”

**Sources:**

- [T. Beran, L. Napper and F. Rott, Alexandrov's Patchwork and the Bonnet–Myers Theorem for Lorentzian length spaces, arXiv:2302.11615 (2023)](https://arxiv.org/abs/2302.11615)

### Comparison with flat triangles makes geodesics in CAT(0) spaces unique

**Remember:** A triangle with zero width cannot hold two different shortest paths.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 20F67. arXiv math.MG. Level 3: graduate.

**Definition.** A geodesic metric space is CAT(0) if distances between points on every geodesic triangle are at most the corresponding Euclidean comparison distances. The comparison triangle has the same side lengths, possibly degenerately, and corresponding points have the same positions along corresponding sides.

**Problem.** In a CAT(0) space, each pair of points is joined by exactly one geodesic.

**How the definition helps.** Take constant-speed geodesics c and c′ from x to y on \[0,1\]. Use c′ and the two pieces of c meeting at c(t) as triangle sides. Their Euclidean comparison triangle is a segment, where the points corresponding to c(t) and c′(t) coincide. Comparison forces their original distance to vanish for every t (our own proof).

**Paper or page:** [A Gentle Introduction to CAT(0) Spaces](https://arxiv.org/abs/2406.09883v1). It says: “X is uniquely geodesic”

**Sources:**

- [Søren Poulsen, A Gentle Introduction to CAT(0) Spaces, arXiv:2406.09883v1 (2024)](https://arxiv.org/abs/2406.09883v1)

### Fundamental-cycle norms make simplicial volume bound absolute degree times target volume

**Remember:** Pushing a cycle forward never increases the sum of its absolute coefficients.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 57N65. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** A real fundamental cycle of a connected closed oriented manifold represents its orientation in top-dimensional homology. The norm of the cycle is the sum of the absolute values of its coefficients. Simplicial volume is the infimum of that norm over all real fundamental cycles.

**Problem.** For a map f from M to N between connected closed oriented manifolds of the same dimension, ‖M‖ ≥ \|deg f\| · ‖N‖. So a self-map of absolute degree greater than one forces zero simplicial volume.

**How the definition helps.** In our own proof, the cycle norm gives the inequality because pushing a cycle forward can combine coefficients but cannot increase their absolute sum. A fundamental cycle maps to a cycle representing deg(f) times the target's orientation class. Scaling a real class scales its norm by the absolute factor. Taking the infimum gives the result.

**Wikipedia:** [Simplicial volume](https://en.wikipedia.org/wiki/Simplicial_volume). It says: “one defines the simplicial norm by minimizing the sum of the absolute values of the coefficients over all singular chains homologous to a given cycle. The simplicial volume is the simplicial norm of the fundamental class.”

**Sources:**

- [Gromov, M. (1982). Volume and bounded cohomology. Publications Mathématiques de l'IHÉS 56, 5–99.](https://doi.org/10.5802/pmihes.3)

### Gluing spaces along a shared copy gives the Gromov–Hausdorff triangle inequality

**Remember:** Glue the two comparison spaces along their shared middle space.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54E35. arXiv math.MG, math.GN. Level 3: graduate.

**Definition.** The Hausdorff distance between two subsets is the infimum of the r such that each lies within distance r of the other. The Gromov–Hausdorff distance between two metric spaces is the infimum of Hausdorff distances between distance-preserving copies of them in any common metric space.

**Problem.** For metric spaces X, Y and Z, the Gromov–Hausdorff distance d satisfies d(X, Z) ≤ d(X, Y) + d(Y, Z). Distances may be infinite, for example for unbounded spaces.

**How the definition helps.** Glue two comparison spaces along their isometric copies of Y (our own argument). Across the join, take the infimum of distances through a point of Y and identify points at distance zero. The resulting metric preserves distances within each original space. Apply the Hausdorff triangle inequality there and take the infimum over both comparisons.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “The function dɢʜ satisfies the triangle inequality.”

**Sources:**

- [Alexey A. Tuzhilin, Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry, arXiv:2012.00756v1 (2020)](https://arxiv.org/abs/2012.00756v1)

### Gromov–Hausdorff distance zero means isometric when both spaces are compact

**Remember:** On compact spaces, arbitrarily good matches yield an exact match.

*Rules out counterexamples.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54E45. arXiv math.MG. Level 3: graduate.

**Definition.** The Hausdorff distance between two subsets is the infimum of the r such that each lies within distance r of the other. The Gromov–Hausdorff distance between two metric spaces is the infimum of Hausdorff distances between isometric copies of them inside a common metric space. The theorem restricts to nonempty compact spaces.

**Problem.** Two nonempty compact metric spaces have Gromov–Hausdorff distance zero exactly when some distance-preserving bijection joins them.

**How the definition helps.** Compactness turns arbitrarily accurate correspondences into an isometry (our own explanation). In the compact hyperspace of X × Y, closed correspondences of vanishing distortion have a convergent subsequence. Its limit still projects onto both spaces and has zero distortion, so it is the graph of an isometry. The open and closed unit intervals have zero Hausdorff distance but differ in compactness (our own counterexample).

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “For compact metric spaces X and Y, it holds dɢʜ(X,Y) = 0 if and only if X and Y are isometric.”

**Sources:**

- [Alexey A. Tuzhilin, Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry, arXiv:2012.00756v1 (2020)](https://arxiv.org/abs/2012.00756v1)

### In length spaces each closed ball is the open ball's closure

**Remember:** Walk almost the whole way to approach the edge from inside.

*Rules out counterexamples.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C22. arXiv math.MG. Level 3: graduate.

**Definition.** An intrinsic metric measures distance by the infimum of lengths of paths joining two points. An open ball uses distance strictly less than its radius. A closed ball includes points at exactly that radius.

**Problem.** In a space with an intrinsic metric, each closed ball of positive radius is the closure of the matching open ball.

**How the definition helps.** Paths of nearly shortest length let each point at distance r be approached from inside the open ball, in our own explanation. Our own proof stops a little short of distance r along such a path. Our own counterexample is a two-point space with distance one, whose metric is not intrinsic. There the open unit ball is a single point, which is closed, but the closed unit ball has both points.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “Let X be a space with an intrinsic metric. Then Bᵣ(x) = closure of Uᵣ(x).”

**Sources:**

- [Alexey A. Tuzhilin, Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry, arXiv:2012.00756v1 (2020)](https://arxiv.org/abs/2012.00756v1)

### Metric speed makes isometries preserve speed without proving they are smooth

**Remember:** An isometry preserves every distance quotient that defines metric speed.

*True by definition. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 51F99. arXiv math.MG, math.DG. Level 3: graduate.

**Definition.** Define the metric speed of a curve γ at time t as the limit of d(γ(t+h),γ(t))/\|h\| as h tends to 0. On a Riemannian manifold, the usual speed is the norm of the velocity vector.

**Problem.** A distance-preserving map between metric spaces preserves the metric speed of each curve wherever that speed exists. The map needs no smoothness.

**How the definition helps.** A distance-preserving map leaves each defining quotient unchanged, so it also preserves its limit (our own argument). For smooth curves in a Riemannian manifold, the metric speed agrees with the norm of the velocity.

**Wikipedia:** [Metric derivative](https://en.wikipedia.org/wiki/Metric_derivative). It says: “It generalizes the notion of "speed" or "absolute velocity" to spaces which have a notion of distance”

**Sources:** none listed. No primary source with a working link was found.

### The Gromov product definition of hyperbolicity makes equivalence at infinity transitive

**Remember:** Two growing products force the third product to grow.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 20F67. arXiv math.MG. Level 3: graduate.

**Definition.** Fix a base point o in a metric space and write (x\|y) = (d(o,x) + d(o,y) − d(x,y))/2. For δ ≥ 0, require (x\|z) ≥ min((x\|y),(y\|z)) − δ for every triple x,y,z.

**Problem.** In such a hyperbolic space, consider sequences satisfying (xₙ\|xₘ) → ∞ as both indices grow. The relation defined by (xₙ\|yₙ) → ∞ is transitive on these sequences.

**How the definition helps.** The inequality bounds (xₙ\|zₙ) below by the smaller of two growing products minus δ, so it grows too (our own argument). With the thin-triangle definition, one must first prove this inequality for geodesic spaces (our own comparison). The work moves to the theorem that the two definitions agree up to a change of δ.

**Wikipedia:** [Hyperbolic metric space](https://en.wikipedia.org/wiki/Hyperbolic_metric_space). It says: “converging to infinity are considered equivalent when”

**Sources:** none listed. No primary source with a working link was found.

### The midpoint inequality gives each bounded set in CAT(0) a unique center

**Remember:** A midpoint beats both candidate centers unless they are already close.

*True by definition. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C70. arXiv math.MG. Level 3: graduate.

**Definition.** A geodesic metric space is CAT(0) if every midpoint m of every pair x,y satisfies the following inequality for every point z. The bound is d(z,m)² ≤ (d(z,x)² + d(z,y)²)/2 − d(x,y)²/4.

**Problem.** In a complete CAT(0) space, each nonempty bounded set S has a unique circumcenter, a point minimizing the supremum of its distances to S.

**How the definition helps.** Taking the supremum over the set gives the midpoint inequality for the squared radius function (our own argument). So two nearly optimal centers must be close, since their midpoint cannot beat the least radius (our own). Completeness then gives a center, and the same inequality gives uniqueness (our own). The work moves to the theorem that the midpoint inequality follows from triangle comparison.

**Wikipedia:** [Cartan–Hadamard theorem](https://en.wikipedia.org/wiki/Cartan%E2%80%93Hadamard_theorem). It says: “the square distance from the vertex z to the midpoint of the opposite side”

**Sources:** none listed. No primary source with a working link was found.

### The midpoint inequality makes products of CAT(0) spaces CAT(0)

**Remember:** Squared distances add in the product, so the midpoint inequalities add too.

*True by definition. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C70. arXiv math.MG. Level 3: graduate.

**Definition.** A geodesic metric space is CAT(0) if every midpoint m of every pair x,y satisfies the following inequality for every point z. The bound is d(z,m)² ≤ (d(z,x)² + d(z,y)²)/2 − d(x,y)²/4.

**Problem.** A finite product of CAT(0) spaces, with the Euclidean product distance, is CAT(0).

**How the definition helps.** Coordinatewise geodesics are product geodesics, and squared product distances add (our own proof). Equality in the Euclidean triangle inequality forces every product midpoint to be a midpoint in each coordinate. Adding the factor inequalities now gives the product inequality. The Bruhat–Tits midpoint criterion identifies this with CAT(0) triangle comparison.

**Wikipedia:** [CAT(k) space](https://en.wikipedia.org/wiki/CAT%28k%29_space). It says: “The distance between a vertex of a geodesic triangle and the midpoint of the opposite side is always less than the corresponding distance in the comparison triangle in the plane with the same side-lengths.”

**Sources:** none listed. No primary source with a working link was found.

### Using only contractible loops makes flatness equal to trivial holonomy

**Remember:** Shrinkable loops feel curvature; other loops also feel the topology.

*Rules out counterexamples.* MSC 53C29 (Issues of holonomy in differential geometry), 53C05. arXiv math.DG. Level 3: graduate.

**Definition.** For a smooth vector bundle connection, restricted holonomy at x consists of the parallel transports around all piecewise smooth contractible loops based at x.

**Problem.** On a connected base, a connection is flat exactly when its restricted holonomy group at a base point is trivial. Ambrose–Singer identifies the holonomy Lie algebra with the span of curvature values transported back to the base point along all paths.

**How the definition helps.** By Ambrose–Singer, curvature vanishes exactly when the restricted holonomy Lie algebra vanishes. Restricted holonomy is connected, so this means the group is trivial (our own argument). A flat Möbius line bundle can reverse a vector around its central loop because that loop is noncontractible (our own example).

**Wikipedia:** [Holonomy](https://en.wikipedia.org/wiki/Holonomy). It says: “∇ is flat (i.e. has vanishing curvature) if and only if Hol⁰(∇) is trivial. In this case, Hol(∇) may still be nontrivial.”

**Sources:**

- [W. Ambrose and I. M. Singer, A theorem on holonomy, Transactions of the American Mathematical Society 75 (1953) 428–443](https://doi.org/10.1090/S0002-9947-1953-0063739-1)

### Defining local symmetry by geodesic reflections makes the curvature parallel

**Remember:** Reflection keeps the curvature derivative but flips the sign of all five arguments.

*True by definition. Confidence: medium.* MSC 53C35 (Differential geometry of symmetric spaces), 53B20. arXiv math.DG. Level 3: graduate.

**Definition.** Call a Riemannian metric locally symmetric if, near each point, the reflection through that point along geodesics preserves the metric. This reflection sends exp(v) to exp(−v). The other definition asks that the curvature tensor have zero covariant derivative.

**Problem.** On a locally symmetric Riemannian manifold, the curvature tensor is parallel, which means that its covariant derivative is zero.

**How the definition helps.** A geodesic reflection preserves the metric and hence the covariant derivative of its covariant curvature tensor (our own argument). Its differential at the center negates every tangent vector. Changing the sign of all five arguments negates the tensor’s value, so invariance forces it to vanish.

**Wikipedia:** [Symmetric space](https://en.wikipedia.org/wiki/Symmetric_space). It says: “This is equivalent to the vanishing of the covariant derivative of the curvature tensor.”

**Sources:** none listed. No primary source with a working link was found.

### Defining symmetric spaces by point reflections makes geodesic completeness immediate

**Remember:** Reflect the existing part of a geodesic to extend it beyond its endpoint.

*True by definition.* MSC 53C35 (Differential geometry of symmetric spaces), 53C30. arXiv math.DG. Level 3: graduate.

**Definition.** A connected Riemannian manifold is symmetric if every point admits a global isometry fixing it and acting as minus the identity on its tangent space.

**Problem.** A Riemannian symmetric space is geodesically complete, so every geodesic extends for all time.

**How the definition helps.** Reflect the geodesic through a point close to an end of its interval; the image continues the geodesic past that end (our own argument). Uniqueness of geodesics joins the two pieces (our own). The work moves to constructing the global reflections, for example from the quotient description.

**Wikipedia:** [Symmetric space](https://en.wikipedia.org/wiki/Symmetric_space). It says: “Every Riemannian symmetric space M is complete”

**Sources:**

- [Élie Cartan, Sur une classe remarquable d’espaces de Riemann (1926)](https://www.numdam.org/item/BSMF_1926__54__214_0/)

### Calibrations make volume minimization in a homology class a one-line proof

**Remember:** A closed form measures the calibrated volume exactly and bounds every competitor from below.

*True by definition.* MSC 53C38 (Calibrations and calibrated geometries), 49Q15. arXiv math.DG. Level 3: graduate.

**Definition.** A calibration is a closed differential form whose value on each oriented unit tangent plane of the right dimension is at most one. A submanifold is calibrated when the form equals its volume form. Without this, one must compare the submanifold with every competitor directly.

**Problem.** A compact oriented calibrated submanifold without boundary has least volume among compact oriented submanifolds in its homology class.

**How the definition helps.** The form gives the exact volume of the calibrated submanifold and a lower bound for the volume of any competitor. Stokes’ theorem makes the two integrals equal, because the difference of the submanifolds is a boundary. The work moves to finding a closed form with the bound and with equality on the given tangent planes (our own comparison).

**Wikipedia:** [Calibrated geometry](https://en.wikipedia.org/wiki/Calibrated_geometry). It says: “calibrated closed submanifolds minimize volume within their homology class.”

**Sources:**

- [Reese Harvey and H. Blaine Lawson, Calibrated geometries (1982)](https://doi.org/10.1007/BF02392726)

### Defining harmonic maps by energy makes surface harmonicity conformally invariant

**Remember:** On a surface, rescaling the domain metric changes the two energy factors oppositely.

*True by definition. Confidence: medium.* MSC 53C43 (Differential geometric aspects of harmonic maps), 53C18. arXiv math.DG. Level 3: graduate.

**Definition.** Define a harmonic map as a stationary point of the energy under compactly supported variations. The energy is half the integral of the squared differential. Another definition asks that the tension, the trace of the covariant derivative of the differential, be zero.

**Problem.** Take a harmonic map from a surface. Multiply the metric on the surface by a smooth positive function. The map stays harmonic.

**How the definition helps.** In dimension two the energy of every map is unchanged by the rescaling, so the stationary points are unchanged (our own argument). The factor multiplies the area element and its reciprocal multiplies the squared differential. With the tension definition, one must instead compute how the connection changes under rescaling (our own comparison). The work moves to the first variation formula, which shows that energy stationarity means zero tension.

**nLab:** [harmonic map](https://ncatlab.org/nlab/show/harmonic+map). It says: “which is a critical point of the Dirichlet kinetic energy functional”

**Sources:**

- [James Eells and J. H. Sampson, Harmonic Mappings of Riemannian Manifolds (1964)](https://doi.org/10.2307/2373037)

### Harmonic morphisms defined by pulled-back harmonic functions compose at once

**Remember:** Pull a harmonic function back through one map, then through the other.

*True by definition.* MSC 53C43 (Differential geometric aspects of harmonic maps), 31C12. arXiv math.DG. Level 3: graduate.

**Definition.** A smooth map φ between Riemannian manifolds is a harmonic morphism if every harmonic function f on any target open set U pulls back harmonically. Its pullback is f∘φ on φ⁻¹(U).

**Problem.** The composite of two harmonic morphisms is a harmonic morphism.

**How the definition helps.** Pulling a harmonic function back through each map in turn keeps it harmonic, so the composite passes the test (our own argument). With the other test, one must compute the tension of a composite (our own comparison). The work moves to the Fuglede–Ishihara theorem, which proves that the two tests agree.

**Wikipedia:** [Harmonic morphism](https://en.wikipedia.org/wiki/Harmonic_morphism). It says: “pulls back real-valued harmonic functions on the codomain to harmonic functions on the domain.”

**Sources:**

- [Bent Fuglede, Harmonic morphisms between Riemannian manifolds (1978)](https://www.numdam.org/item/AIF_1978__28_2_107_0/)

### Zero tension shows an isometric immersion is harmonic exactly when minimal

**Remember:** An isometric immersion’s tension is its bending summed over tangent directions.

*True by definition.* MSC 53C43 (Differential geometric aspects of harmonic maps), 53C42. arXiv math.DG. Level 3: graduate.

**Definition.** Define a harmonic map by zero tension. The tension is the trace of the covariant derivative of the differential. The variational definition asks that the map be a stationary point of the energy, half the integral of its squared differential.

**Problem.** An isometric immersion, which preserves lengths of tangent vectors, is harmonic exactly when it is minimal. Minimal means that its mean curvature vector vanishes.

**How the definition helps.** For an isometric immersion the covariant derivative of its differential equals the second fundamental form (our own argument). Its trace is the domain dimension times the mean curvature vector. Thus zero tension is equivalent to zero mean curvature.

**nLab:** [harmonic map](https://ncatlab.org/nlab/show/harmonic+map). It says: “is a harmonic map if and only if it has vanishing”

**Sources:**

- [James Eells and J. H. Sampson, Harmonic Mappings of Riemannian Manifolds (1964)](https://doi.org/10.2307/2373037)

### A Cauchy surface makes wave equations well posed on globally hyperbolic spacetimes

**Remember:** There is one moment of time that every observer passes through exactly once.

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

**Definition.** A future causal curve has tangent in the chosen future light cone or its interior. The diamond from p to q consists of points on such curves from p to q, including the endpoints when a curve exists. Global hyperbolicity requires compact diamonds and forbids closed causal curves.

**Problem.** Every smooth globally hyperbolic spacetime admits a Cauchy surface, which every causal curve without past or future endpoint crosses exactly once. Compact diamonds alone do not ensure this.

**How the definition helps.** Causality excludes a flat torus with periodic time and space (our own counterexample). Winding around time makes every event timelike reachable from every other, so all diamonds equal the compact torus. An indefinitely repeated timelike loop either misses a proposed surface or visits it repeatedly. The Cauchy surface theorem supplies existence under the full hypotheses.

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

**Definition.** A Cauchy surface meets every timelike curve that cannot be extended at either end exactly once. A timelike curve can describe a slower-than-light observer. A spacelike surface alone does not require a meeting.

**Problem.** A spacetime with a Cauchy surface splits into the surface, its timelike past, and its timelike future. These three sets are disjoint.

**How the definition helps.** Extend a timelike curve through any event in both directions and locate its unique crossing (our own proof). The event lies before, on, or after the surface. Overlap between these sets would produce a timelike curve visiting the surface twice, contrary to the crossing rule.

**nLab:** [Cauchy surface](https://ncatlab.org/nlab/show/Cauchy+surface). It says: “intersects Σ precisely in one point.”

**Paper or page:** [Limit curve theorems for incomplete metric spaces and the null distance on Lorentzian manifolds](https://arxiv.org/abs/2511.05847v1). It says: “M is the disjoint union M = I⁺(S) ∪ S ∪ I⁻(S).”

**Sources:** none listed. No primary source with a working link was found.

### Compact diamonds yield longest paths

**Remember:** Compact diamonds keep maximizing clock paths from escaping through a hole.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics). arXiv gr-qc. Level 3: graduate.

**Definition.** A causal path moves toward the future at or below light speed. The causal diamond from p to q consists of events on such paths from p to q. A spacetime is globally hyperbolic if it has no closed causal paths and every causal diamond is compact.

**Problem.** In smooth globally hyperbolic spacetime, two events joined by a causal path admit one with the greatest elapsed clock time.

**How the definition helps.** Compact diamonds confine maximizing sequences, and the limit-curve theorem supplies a limiting causal path (our own outline). Upper semicontinuity of elapsed time makes that path maximizing. Remove the midpoint between two stationary-clock events in flat spacetime with a spatial direction (our own counterexample). Detours approach the missing straight path’s elapsed time, but none attains it.

**Wikipedia:** [Globally hyperbolic spacetime](https://en.wikipedia.org/wiki/Globally_hyperbolic_spacetime). It says: “The spacetime is causal, and for every pair of points p and q in M, the subset J⁺(p) ∩ J⁻(q) is compact.”

**Sources:** none listed. No primary source with a working link was found.

### Rescaling preserves light rays

**Remember:** Change the scale, not the light ray.

*True by definition.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83C80. arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** A conformal map between Lorentzian surfaces is a smooth local diffeomorphism whose pullback metric equals the source metric times a smooth positive function. A light ray is a regular null geodesic with its parameter forgotten.

**Problem.** A conformal map between smooth Lorentzian surfaces sends light rays to light rays.

**How the definition helps.** A conformal map preserves regular null curves (our own argument). On a Lorentzian surface a null tangent line equals its perpendicular line. Differentiating the zero squared speed puts the acceleration in that same line. A change of parameter therefore makes the image curve a geodesic.

**Paper or page:** [Causal Classification of Pathological Misner-Type Spacetimes](https://arxiv.org/abs/2501.00841). It says: “Conformal transformations between 2-dimensional Lorentzian manifolds send null hypersurfaces to null hypersurfaces and therefore null geodesics to null geodesics.”

**Sources:** none listed. No primary source with a working link was found.

### Time prevents compact causal confinement

**Remember:** A trapped curve would force time to stand still on a limit curve.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83C99. arXiv gr-qc, math-ph. Level 3: graduate.

**Definition.** A time function on a spacetime is a continuous real function that strictly increases along every nonconstant future causal curve. Such a curve follows the chosen future light cone or its interior.

**Problem.** In a smooth spacetime with a time function, no compact set contains an entire future-inextendible causal curve. Such a curve has no future endpoint in the spacetime.

**How the definition helps.** Along a future-inextendible causal curve confined to a compact set, the time function increases to a finite limit (our own argument). Use arc length for a complete auxiliary Riemannian metric. The limit-curve theorem gives a nonconstant causal limit of late segments of fixed length. Continuity gives that limit segment constant time, contradicting strict increase.

**Paper or page:** [Time functions on Lorentzian length spaces](https://arxiv.org/abs/2108.02693). It says: “If X admits a time function, then X is non-totally imprisoning.”

**Sources:**

- [Time functions on Lorentzian length spaces](https://arxiv.org/abs/2108.02693)

### Unit clock gradients follow free fall

**Remember:** A unit clock gradient has no acceleration.

*True by definition.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83C10. arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** A smooth local clock function f has a gradient, the vector corresponding to its differential under the spacetime metric. Require the gradient to have squared length −1. An ordinary time function only needs to increase along future causal paths, those moving at or below light speed.

**Problem.** Paths following this gradient are unit timelike geodesics. They describe free fall with elapsed proper time as parameter.

**How the definition helps.** Normalizing the gradient makes its squared length constant, which forces its acceleration to vanish. In our own calculation, symmetry of second derivatives makes the acceleration half the gradient of that squared length. Constructing such a clock is separate work. The cited construction uses elapsed proper time along perpendicular geodesics before they cross.

**Paper or page:** [Omniscient foliations and the geometry of cosmological spacetimes](https://arxiv.org/abs/2205.07470v1). It says: “Thus, any integral curve of ∇f is a unit timelike geodesic.”

**Sources:**

- [Omniscient foliations and the geometry of cosmological spacetimes](https://arxiv.org/abs/2205.07470v1)

### Hilbert’s cross-ratio distance adds along straight segments

**Remember:** The same boundary endpoints make cross-ratios multiply and distances add.

*True by definition. Confidence: medium.* MSC 53C60 (Global differential geometry of Finsler spaces and generalizations (areal metrics)), 52A20. arXiv math.MG. Level 3: graduate.

**Definition.** In a bounded open convex set Ω ⊂ ℝⁿ, order two distinct interior points and their line’s boundary intersections as X,A,B,Y. Define d(A,B) = log((\|XB\|·\|AY\|)/(\|XA\|·\|BY\|)) and d(A,A) = 0.

**Problem.** If C lies on the segment from A to B, then d(A, B) = d(A, C) + d(C, B). Thus straight segments are shortest paths in the Hilbert metric.

**How the definition helps.** For interior C between A and B, both subsegments have the same boundary endpoints X,Y (our own proof). Their cross-ratios multiply to the full cross-ratio because the factors \|XC\| and \|CY\| cancel. Taking logarithms gives additivity, so every ordered partition of the segment has length sum d(A,B). The metric triangle inequality bounds every competing path’s length below by d(A,B).

**Wikipedia:** [Hilbert metric](https://en.wikipedia.org/wiki/Hilbert_metric). It says: “Then the Hilbert distance d(A, B) is the logarithm of the cross-ratio of this quadruple of points”

**Sources:**

- [David Hilbert, Ueber die gerade Linie als kürzeste Verbindung zweier Punkte, Mathematische Annalen 46 (1895)](https://doi.org/10.1007/BF02096204)

### Busemann convexity makes geodesic contractions continuous, so CAT(0) spaces are contractible

**Remember:** Convex distance makes sliding points toward a common base point continuous.

*True by definition. Confidence: medium.* MSC 53C70 (Direct methods (\\(G\\)-spaces of Busemann, etc.)), 53C23. arXiv math.MG. Level 3: graduate.

**Definition.** Call a geodesic space Busemann convex if the distance between two constant-speed geodesics on \[0,1\] is a convex function of time. The usual CAT(0) definition compares triangles with Euclidean triangles of the same side lengths.

**Problem.** Every Busemann convex geodesic space is contractible. In particular, every CAT(0) space is contractible.

**How the definition helps.** Two geodesics from a common start are at most t·d(x,y) apart at time t, which gives continuity in the endpoint (our own argument). Convexity also makes geodesics unique, so the contraction along geodesics to the base point is well defined (our own). With triangle comparison, continuity of geodesics in their endpoints must be proved first (our own comparison). The work moves to proving that CAT(0) spaces are Busemann convex.

**Paper or page:** [A Gentle Introduction to CAT(0) Spaces](https://arxiv.org/abs/2406.09883). It says: “X is contractible”

**Sources:** none listed. No primary source with a working link was found.

### A closed symplectic form is exactly one that every Hamiltonian flow preserves

**Remember:** Closed is the price for every energy flow keeping the form.

*True by definition.* MSC 53D05 (Symplectic manifolds (general theory)), 37J06. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** A symplectic form on a manifold is a 2-form ω that is closed (dω = 0) and nondegenerate. Nondegeneracy lets each smooth function H define a Hamiltonian vector field Vₕ by ι(Vₕ)ω = dH.

**Problem.** On a 2n-dimensional manifold with nondegenerate two-form ω, all local Hamiltonian flows preserve ω exactly when dω = 0. In that case they preserve the volume form ωⁿ, as in Liouville’s theorem.

**How the definition helps.** Cartan’s formula gives ℒ(Vₕ)ω = d(dH) + ι(Vₕ)dω = ι(Vₕ)dω. At each point, differentials of smooth functions exhaust all covectors, so nondegeneracy makes Hamiltonian fields attain all tangent vectors there (our own argument). Thus every contraction vanishes exactly when dω vanishes. Preserving ω also preserves its wedge powers.

**Wikipedia:** [Symplectic manifold](https://en.wikipedia.org/wiki/Symplectic_manifold). It says: “the requirement for the vanishing Lie derivative along flows of Vₕ corresponding to arbitrary smooth H is equivalent to the requirement that ω should be closed.”

**Sources:** none listed. No primary source with a working link was found.

### Closedness of the symplectic form leaves no local invariants, by Darboux

**Remember:** Closed and nondegenerate gives local coordinates with the same standard two-form.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D05 (Symplectic manifolds (general theory)), 37J06. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** A symplectic manifold is a manifold with a closed, nondegenerate 2-form ω. Darboux coordinates are local coordinates x₁, …, xₙ, y₁, …, yₙ in which ω = dx₁∧dy₁ + … + dxₙ∧dyₙ.

**Problem.** Darboux's theorem: near every point of a 2n-dimensional symplectic manifold there are coordinates in which ω takes the standard form. So any two symplectic manifolds of the same dimension are locally the same.

**How the definition helps.** Darboux coordinates express every symplectic form of a given dimension by the same formula (our own explanation). Darboux’s theorem supplies those coordinates. In Moser’s proof, closedness gives local primitives for the deformation, and nondegeneracy turns them into a vector field.

**Wikipedia:** [Darboux's theorem](https://en.wikipedia.org/wiki/Darboux%27s_theorem). It says: “Darboux's theorem for symplectic manifolds implies that there are no local invariants in symplectic geometry”

**Sources:**

- [G. Darboux, Sur le problème de Pfaff, Bulletin des Sciences Mathématiques 6 (1882) 14–36, 49–68](http://gallica.bnf.fr/ark:/12148/bpt6k68005v)

### Constant rank gives a closed two-form a Darboux normal form

**Remember:** Fix the rank, and every closed two-form looks standard near each point.

*Rules out counterexamples.* MSC 53D05 (Symplectic manifolds (general theory)), 58A10. arXiv math.DG, math.SG. Level 3: graduate.

**Definition.** A pre-symplectic form is a closed two-form ω whose rank is the same at every point. The rank is the rank of ω as an antisymmetric matrix. Its kernel at each point is the set of vectors v with ω(v, w) = 0 for all w.

**Problem.** Near each point, a closed two-form of constant rank 2r has coordinates q, p and z in which ω = dq¹∧dp₁ + … + dqʳ∧dpᵣ. In these coordinates the kernel is spanned by the fields ∂/∂zᴬ.

**How the definition helps.** Constant rank makes the kernel a smooth subbundle, and closedness makes the form descend to a local transverse slice (our own argument). Darboux coordinates on that symplectic slice combine with leaf coordinates to give the stated form. The closed form x dx∧dy on ℝ² drops rank at x = 0, which rules out a constant coordinate form there (our own example).

**Paper or page:** [A zoo of coisotropic embeddings](https://arxiv.org/abs/2509.19039). It says: “Let (M, ω) be a d-dimensional pre-symplectic manifold, with ω ∈ Ω²(M) a closed 2-form of constant rank 2r &lt; d. Then, for every point m ∈ M, there exists a coordinate chart (U, φ) around m”

**Sources:**

- [R. Izquierdo-López, M. de León, L. Schiavone and P. Soto, A zoo of coisotropic embeddings, arXiv:2509.19039 (2025)](https://arxiv.org/abs/2509.19039)

### Exactness excludes torus translations

**Remember:** Preserving the form is local, but having a global Hamiltonian is not.

*Rules out counterexamples.* MSC 53D05 (Symplectic manifolds (general theory)), 37J06. arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic field preserves a symplectic form ω, a closed nondegenerate alternating two-form. Inserting the field into the first slot gives a one-form. A Hamiltonian field requires that one-form to be exact, meaning it equals the derivative of a globally defined function.

**Problem.** The one-form of a Hamiltonian field integrates to zero around every closed curve. On the unit-period torus, horizontal translation preserves the standard area form but has no global Hamiltonian.

**How the definition helps.** Exactness makes every closed-curve integral zero by the fundamental theorem of calculus (our own). Inserting the unit horizontal field into dx ∧ dy gives dy, whose integral around the upward vertical circle is one (our own). Translation preserves the area form, so preservation alone allows this counterexample (our own).

**nLab:** [symplectic vector field](https://ncatlab.org/nlab/show/symplectic+vector+field). It says: “If this contraction even is an exact differential form in that there is a function h ∈ C∞(X) such that”

**Sources:** none listed. No primary source with a working link was found.

### Fixed cohomology lets Moser straighten forms

**Remember:** An exact time derivative gives the vector field that cancels it.

*Rules out counterexamples.* MSC 53D05 (Symplectic manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic form is a closed nondegenerate alternating two-form. A smooth path of such forms has fixed de Rham cohomology when every difference between two forms is the exterior derivative of a one-form.

**Problem.** On a compact manifold without boundary, a smooth path of cohomologous symplectic forms admits a smooth family of coordinate changes starting at the identity. Each change pulls the corresponding form back to the initial form.

**How the definition helps.** Fixed cohomology gives smoothly varying primitives αₜ with dαₜ = ∂ₜωₜ (our own outline). By Cartan’s formula, the flow of the field solving ι(Vₜ)ωₜ = −αₜ keeps the pullback constant and exists throughout by compactness. On two area-one tori, scaling their respective area forms by t and 1/t preserves product volume (our own example). Their sum changes its period over the first torus, which an isotopy from the identity must preserve.

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “Then there exists an isotopy ρ ⦂ M × ℝ → M such that”

**Sources:** none listed. No primary source with a working link was found.

### Quotienting null directions removes degeneracy

**Remember:** Remove precisely the directions that pair to zero.

*Makes the theorem clean to state or prove.* MSC 53D05 (Symplectic manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** For a closed two-form ω of constant rank, its null distribution consists of all v satisfying ω(v,w) = 0 for every tangent vector w. Its leaf space identifies points lying on the same connected integral leaf of this distribution.

**Problem.** Assume the form has constant rank and its space of leaves is a smooth manifold. If the quotient projection has surjective derivative everywhere, the form descends to a unique closed nondegenerate two-form.

**How the definition helps.** Cartan’s formula shows that the form is invariant along null fields because both its contraction and its exterior derivative vanish there (our own proof). These properties give descent along the submersion with connected fibres. Surjectivity of its differential gives uniqueness and closedness downstairs. Quotienting each tangent space by precisely the kernel gives nondegeneracy.

**nLab:** [presymplectic structure](https://ncatlab.org/nlab/show/presymplectic+structure). It says: “the quotient of X by the flow of the vector fields in the kernel of ω is, if it exists in a reasonable way, a symplectic manifold.”

**Sources:** none listed. No primary source with a working link was found.

### The coordinate-free tautological form makes cotangent lifts preserve the symplectic form

**Remember:** The lift keeps θ, so it keeps dθ.

*True by definition. Confidence: medium.* MSC 53D05 (Symplectic manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** Write π for the cotangent bundle projection. At a covector α, the tautological one-form satisfies θ(v) = α(dπ(v)) for every tangent vector v to the cotangent bundle at α. Use dθ as the canonical symplectic form.

**Problem.** Let f be a diffeomorphism from M to N. Its cotangent lift sends a covector α at x to α ∘ (df)⁻¹ at f(x). This lift pulls the canonical symplectic form of T\*N back to that of T\*M.

**How the definition helps.** The cotangent lift preserves θ because the inverse derivative acting on covectors cancels the derivative acting on projected tangent vectors (our own check). Pullback commutes with exterior differentiation, so the lift preserves dθ.

**nLab:** [cotangent bundle](https://ncatlab.org/nlab/show/cotangent+bundle). It says: “The de Rham differential ω ≔ dθ is a symplectic form.”

**Sources:** none listed. No primary source with a working link was found.

### Contact maps lift by rescaling covectors

**Remember:** Lift the covectors and their evaluation rule stays the same.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** For a contact hyperplane field ξ on M, its symplectization consists of all nonzero covectors annihilating ξ. Its symplectic form is dθ, where θ evaluates each covector on the projection of a tangent vector to M.

**Problem.** A diffeomorphism preserving contact planes lifts canonically to a diffeomorphism preserving the symplectic form on the symplectization.

**How the definition helps.** The inverse diffeomorphism pulls each annihilating covector to another such covector because the original map preserves the contact planes (our own proof). This lift preserves evaluation on projected tangent vectors, hence preserves θ and dθ.

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “This construction does not depend on the choice of contact form.”

**Sources:** none listed. No primary source with a working link was found.

### Defining coorientability by a trivial quotient line makes hyperplane fields kernels

**Remember:** A trivial quotient line gives one global equation for the hyperplanes.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)), 58A30. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** A hyperplane field ξ on M picks a codimension-one subspace of each tangent space, varying smoothly. Call ξ coorientable when the quotient line bundle TM/ξ is trivial. The geometric definition asks for a continuous choice of one side of each hyperplane.

**Problem.** A hyperplane field ξ is coorientable exactly when ξ is the kernel of a smooth one-form that is nowhere zero.

**How the definition helps.** Composing the quotient map with a trivialization gives a nowhere-zero one-form with kernel ξ. Conversely, any such form induces a fibrewise isomorphism from TM/ξ to the trivial real line bundle.

**Paper or page:** [On the Canonical Contact Structure of the Space of Null Geodesics of a Spacetime](https://arxiv.org/abs/2109.03656v1). It says: “it is possible to write ξ = ker α globally if and only if ξ is coorientable, that is, the quotient bundle TM/ξ is trivial.”

**Sources:**

- [Hansjörg Geiges, An Introduction to Contact Topology (2008), Lemma 1.1.1](https://doi.org/10.1017/CBO9780511611438)

### Transverse Liouville fields give contact forms

**Remember:** A transverse Liouville field gives the contact form and normalizes the motion.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** On a symplectic manifold with form ω, a Liouville field V satisfies dλ = ω for λ = ω(V,·). A hypersurface has contact type if such a field exists near it and is everywhere transverse to it.

**Problem.** On a hypersurface of contact type, the restriction of λ is a contact form α. On a regular energy surface, its Reeb field follows the Hamiltonian trajectories up to a change of speed.

**How the definition helps.** Transversality makes the contraction of the volume form ωⁿ with V a volume form on the hypersurface (our own proof). This contraction restricts to nα ∧ (dα)ⁿ⁻¹, proving the contact condition. On a regular energy level, the Hamiltonian field spans the kernel of dα on the hypersurface. The Reeb field spans the same line with normalization α(R) = 1.

**Paper or page:** [A note on the geometry of the two-body problem on S²](https://arxiv.org/abs/2310.02659v2). It says: “is a (positive) time reparametrisation of the Hamiltonian vector field”

**Sources:**

- [A note on the geometry of the two-body problem on S², Theorem 4.2](https://arxiv.org/abs/2310.02659v2)

### Conormal bundles are Lagrangian

**Remember:** A conormal covector kills every allowed base direction.

*True by definition.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** The conormal bundle of a smooth submanifold S consists of all ambient covectors based on S that vanish on every tangent to S. The canonical one-form evaluates each covector on the base projection of a tangent vector to the cotangent bundle.

**Problem.** The conormal bundle of a smooth submanifold is Lagrangian in the ambient cotangent bundle. That means the symplectic form vanishes on it and it has half the ambient dimension.

**How the definition helps.** The canonical one-form vanishes on the conormal bundle because all its base directions lie along the submanifold (our own). Its restriction therefore has zero exterior derivative, giving zero for the restricted symplectic form without a coordinate calculation (our own). For a k-dimensional submanifold of an n-dimensional space, each conormal fiber contributes n − k dimensions, giving n altogether (our own).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “For any submanifold S ⊂ X, the conormal bundle N\*S is a Lagrangian submanifold of T\*X.”

**Sources:** none listed. No primary source with a working link was found.

### Exact Lagrangians exclude holomorphic disks

**Remember:** Exact boundary data leave a holomorphic disk with zero energy.

*Rules out counterexamples.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** Let ω = dλ be a symplectic form, a closed nondegenerate two-form with a chosen primitive λ. A Lagrangian is a half-dimensional submanifold on which ω restricts to zero. It is exact if λ restricts to the differential of a function.

**Problem.** Let J be an ω-compatible almost complex structure, so g(v,w) = ω(v,Jw) defines a Riemannian metric. Every J-holomorphic disk with boundary on an exact Lagrangian is constant.

**How the definition helps.** Exactness makes the boundary integral of λ vanish, forcing the disk to have zero area. In our own proof, Stokes’ theorem identifies that integral with the integral of ω over the disk. The quoted energy identity then forces the disk to be constant. Without exactness, the ordinary unit disk in the complex plane gives a counterexample with boundary on the unit circle.

**Paper or page:** [A proof of Gromov's non-squeezing theorem](https://arxiv.org/abs/2412.18462v1). It says: “the equality holds if and only if u is constant.”

**Sources:** none listed. No primary source with a working link was found.

### Exact Lagrangians lift to Legendrians

**Remember:** Use the primitive as the height of the Legendrian lift.

*Rules out counterexamples. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** Write θ for the tautological one-form on T∗Q. A Lagrangian L is exact if θ restricts to df on L for some globally defined smooth function f. A Legendrian in T∗Q × ℝ has dimension dim Q and is tangent to the kernel of dz − θ.

**Problem.** Every exact Lagrangian in a cotangent bundle lifts to a Legendrian for the contact form dz − θ.

**How the definition helps.** Exactness supplies a single height function for the lift. In our own proof, setting z = f makes dz − θ vanish on the graph. Conversely, any height defining such a graph satisfies df = θ there. Over a circle, the graph of a one-form with nonzero integral gives a Lagrangian without a single-valued height.

**Paper or page:** [Normal invariant of nearby Lagrangians via twisted derivative](https://arxiv.org/abs/2505.12515v2). It says: “(any Legendrian lift of) L”

**Sources:**

- [Normal invariant of nearby Lagrangians via twisted derivative, Corollary 3.34](https://arxiv.org/abs/2505.12515v2)

### Loop classes make the Maslov index invariant under deformation

**Remember:** A loop keeps its class as it deforms, and joining loops adds classes.

*True by definition.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** Fix a positive-dimensional real symplectic vector space and its Grassmannian of half-dimensional subspaces on which the symplectic form vanishes. Choose the Maslov generator of its fundamental group as positive. The Maslov index of a loop is its integer under the resulting isomorphism with ℤ.

**Problem.** The Maslov index of a loop of Lagrangian subspaces does not change when the loop deforms. Joining two loops with a common starting point adds their indices.

**How the definition helps.** A based homotopy preserves the loop class, and moving the base point only conjugates it (our own argument). Conjugation acts trivially in ℤ. Concatenation gives the fundamental group operation, which becomes addition under the chosen isomorphism.

**Wikipedia:** [Maslov index](https://en.wikipedia.org/wiki/Maslov_index). It says: “This definition makes the Maslov index a topological invariant of loops of Lagrangian subspaces.”

**Sources:**

- [Robbin, J.; Salamon, D. (1993). The Maslov index for paths. Topology 32(4), 827–844.](https://doi.org/10.1016/0040-9383(93)90052-W)

### The tautological 1-form makes graphs of closed 1-forms Lagrangian

**Remember:** On the graph of β, the tautological form becomes β.

*True by definition.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 53D05. arXiv math.SG. Level 3: graduate.

**Definition.** The cotangent bundle T∗Q collects the linear functionals on tangent spaces of Q. Define the tautological 1-form θ by requiring its restriction along the graph of each 1-form β to equal β on Q. In coordinates, θ is the sum of p dq over the position coordinates q and their conjugate momenta p.

**Problem.** The graph of β is Lagrangian exactly when β is closed, meaning dβ = 0. Lagrangian means half-dimensional with zero restriction of the symplectic form dθ.

**How the definition helps.** The defining property makes the restriction of dθ to the graph equal to dβ, because exterior differentiation commutes with restriction (our own). The graph has half the dimension of the cotangent bundle. The work moves into constructing θ and checking that dθ is symplectic (our own).

**nLab:** [Liouville-Poincaré 1-form](https://ncatlab.org/nlab/show/Liouville-Poincar%C3%A9+1-form). It says: “for every smooth section σ ∈ Γ(T\* X) the identification σ\* θ = j(σ) between the pullback of θ along σ and the 1-form corresponding to σ under j.”

**Wikipedia:** [Tautological one-form](https://en.wikipedia.org/wiki/Tautological_one-form), [Symplectic manifold](https://en.wikipedia.org/wiki/Symplectic_manifold). It says: “The graph of a closed 1-form on M is a Lagrangian submanifold of T∗M. In particular, the graph of df is Lagrangian.”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing first cohomology forces Lagrangian intersections

**Remember:** A global primitive reaches extrema, where the nearby graph meets the original.

*Rules out counterexamples.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** A Lagrangian submanifold has half the ambient dimension, and the symplectic form vanishes on its tangent spaces. Its first real cohomology vanishes if every closed one-form on it is the derivative of a global function.

**Problem.** Let X be a compact connected Lagrangian submanifold without boundary and of positive dimension, with vanishing first real cohomology. Every sufficiently C¹-close Lagrangian deformation meets X in at least two points. Here closeness controls both positions and first derivatives.

**How the definition helps.** Vanishing cohomology makes the closed one-form describing a nearby deformation the derivative of a single function (our own). The Lagrangian neighborhood theorem supplies the graph description, with intersections exactly at zeros of that derivative (our own). A nonconstant function has distinct maximum and minimum points, while a constant function gives intersection everywhere (our own). On a torus, a small nonzero constant one-form has a graph disjoint from the zero section in its cotangent bundle (our own).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “every Lagrangian submanifold of M which is C¹-close to X intersects X in at least two points.”

**Sources:** none listed. No primary source with a working link was found.

### Defining first integrals by the Poisson bracket gives Poisson’s theorem

**Remember:** A first integral has zero bracket with the Hamiltonian.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 37J37, 70H33. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** For a Hamiltonian H, a smooth function F is a first integral if its Poisson bracket {H,F} vanishes everywhere. This condition says that F stays constant along each trajectory of H.

**Problem.** If F and G are first integrals of H, then their bracket {F, G} is also a first integral of H.

**How the definition helps.** Jacobi expresses {H,{F,G}} as {{H,F},G} + {F,{H,G}} (our own calculation). Both terms vanish because F and G are first integrals.

**Wikipedia:** [Hamiltonian vector field](https://en.wikipedia.org/wiki/Hamiltonian_vector_field). It says: “which means that the vector space of differentiable functions on M, endowed with the Poisson bracket, has the structure of a Lie algebra over ℝ”

**Sources:** none listed. No primary source with a working link was found.

### Defining Poisson bivectors by \[π,π\] = 0 makes \[π,−\] square to zero

**Remember:** The double bracket is half the bracket with \[π,π\].

*True by definition. Confidence: medium.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** A Poisson bivector is a smooth section π of the second exterior power of the tangent bundle satisfying \[π,π\] = 0. Here the Schouten–Nijenhuis bracket extends the Lie bracket of vector fields to multivector fields.

**Problem.** On a Poisson manifold, the operator \[π,−\] on multivector fields squares to zero. Its cohomology is called Poisson cohomology.

**How the definition helps.** With the \[π,π\] = 0 definition, the square of \[π,−\] is a multiple of the bracket with \[π,π\], which is zero. In our own step, the graded Jacobi identity gives \[π,\[π,X\]\] = ½\[\[π,π\],X\]. In our own comparison, the Jacobi identity for functions must first be turned into \[π,π\] = 0 by a calculation in coordinates. In our own account, the work moves to the graded Jacobi identity for the Schouten–Nijenhuis bracket.

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “the condition d\_π ∘ d\_π = 0 is equivalent to \[π,π\]=0”

**Sources:**

- [André Lichnerowicz, Les variétés de Poisson et leurs algèbres de Lie associées, Journal of Differential Geometry 12 (1977), 253–300](https://doi.org/10.4310/jdg/1214433987)

### Invariant functions give Poisson quotients

**Remember:** Bracket invariant functions upstairs to get the bracket downstairs.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** A Poisson bracket is a Lie bracket on smooth functions that satisfies the product rule in each argument. A Poisson map preserves this bracket when functions are pulled back. On a smooth orbit space, functions correspond by pullback to smooth functions constant on each orbit.

**Problem.** Suppose a Lie group acts smoothly by Poisson maps, freely and properly. Then its orbit space has a unique Poisson bracket making the projection a Poisson map.

**How the definition helps.** Using invariant functions gives the quotient bracket without constructing a tensor in quotient coordinates. In our own proof, the group preserves brackets, so the bracket of two invariant functions stays invariant. The bracket identities pass to the quotient because pullback identifies its functions with these invariant functions. The smooth quotient theorem for free and proper actions supplies the manifold structure.

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “inherits a Poisson structure”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicativity makes inversion antisymplectic

**Remember:** Composing an arrow with its inverse adds their forms to zero.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** A Lie groupoid has smooth spaces of objects and invertible arrows, with smooth composition and inversion. Give its arrows a symplectic form, a closed nondegenerate alternating two-form. Multiplicativity means that on composable pairs, the form pulled back by composition equals the sum pulled back from the two arrows.

**Problem.** Inversion in a symplectic groupoid sends the symplectic form to its negative.

**How the definition helps.** Pull back multiplicativity along the pair of identity arrows at each object (our own proof). The unit pullback of ω equals twice itself and therefore vanishes. Pull back again along the pair consisting of each arrow and its inverse. Their product is a unit, so ω plus its pullback by inversion vanishes.

**nLab:** [symplectic groupoid](https://ncatlab.org/nlab/show/symplectic+groupoid). It says: “the alternating sum of its canonical pullbacks to the space X₂ of composable morphisms vanishes”

**Sources:** none listed. No primary source with a working link was found.

### Poisson maps have coisotropic graphs

**Remember:** Subtract the domain bracket and test on functions vanishing along the graph.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** A Poisson bracket is a Lie bracket on functions that satisfies the product rule. A Poisson map preserves brackets when functions are pulled back. Call a submanifold coisotropic if the bracket of any two local functions vanishing there also vanishes there.

**Problem.** A smooth map is Poisson exactly when its graph is coisotropic in the product using the target bracket and the negative domain bracket.

**How the definition helps.** Coordinate differences generate the graph’s local vanishing ideal by Hadamard’s lemma (our own proof). Their product brackets on the graph equal pulled-back target brackets minus domain brackets of the pullbacks. The product rule extends this coordinate test to every pair of local functions.

**Paper or page:** [Lie groups of Poisson diffeomorphisms](https://arxiv.org/abs/2108.11490v2). It says: “A map $f:M\\to N$ is a Poisson map if and only if the graph of $f$ is coisotropic in $(N\\times M, \\pi<sub>N</sub>\\times (-\\pi<sub>M</sub>))$.”

**Sources:**

- [Lie groups of Poisson diffeomorphisms, Proposition 1.2](https://arxiv.org/abs/2108.11490v2)

### Curvature is the moment map, so flat connections form a symplectic quotient

**Remember:** Flat means zero moment map, so flat moduli are symplectic quotients.

*Makes the theorem clean to state or prove.* MSC 53D20 (Momentum maps; symplectic reduction), 53D30. arXiv math.DG, math.SG. Level 3: graduate.

**Definition.** For a Hamiltonian group action with equivariant moment map μ, the Hamiltonian reduction at zero is μ⁻¹(0) modulo the group action.

**Problem.** Take connections on a principal compact Lie group bundle over a closed oriented surface, with an invariant inner product on its Lie algebra. For the Atiyah–Bott form, curvature is a moment map for the gauge group. The flat moduli space is therefore the Hamiltonian reduction at zero, with its reduced symplectic form on the smooth symplectic strata.

**How the definition helps.** Atiyah and Bott identify the moment map with curvature. Its zero set consists exactly of flat connections. Dividing by gauge transformations gives their moduli space, and symplectic reduction supplies the form on each smooth stratum (our own explanation).

**Paper or page:** [Higher Complex Structures and Higher Teichmüller Theory](https://arxiv.org/abs/2007.00382), [A Gentle Introduction to the Non-Abelian Hodge Correspondence](https://arxiv.org/abs/2208.05940). It says: “The action of gauge transforms on the space of connections is a Hamiltonian action and the moment map is the curvature. Thus, the Hamiltonian reduction 𝒜⫽𝒢 gives the moduli space of flat connections.”

**Sources:**

- [A. Thomas, Higher Complex Structures and Higher Teichmüller Theory, arXiv:2007.00382 (2020)](https://arxiv.org/abs/2007.00382)
- [A. Thomas, A Gentle Introduction to the Non-Abelian Hodge Correspondence, arXiv:2208.05940 (2022)](https://arxiv.org/abs/2208.05940)
- [M. F. Atiyah and R. Bott, The Yang–Mills equations over Riemann surfaces, Philosophical Transactions of the Royal Society A 308 (1983) 523–615](https://doi.org/10.1098/rsta.1983.0017)

### Equivariant momentum maps preserve brackets

**Remember:** Move the point, and its momentum moves by the coadjoint action.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction), 70H33. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** For a Hamiltonian G-action on (M,ω), a momentum map μ into the dual Lie algebra satisfies d⟨μ,ξ⟩ = ι(ξ<sub>M</sub>)ω for every infinitesimal generator ξ<sub>M</sub>. It is equivariant if μ(gx) = Ad\*(g)μ(x) for every g and x, where Ad\* denotes the coadjoint action.

**Problem.** For a connected Hamiltonian symmetry group, an equivariant momentum map preserves brackets when functions on the dual Lie algebra are composed with μ. Use the Lie–Poisson bracket, which on linear functions gives their Lie algebra bracket, with matching sign conventions.

**How the definition helps.** Differentiating equivariance makes the generating functions reproduce the brackets of infinitesimal symmetries (our own). Linear functions supply every possible differential on the dual Lie algebra, and brackets at a point depend only on those differentials (our own). Translations of the plane commute, but their generators y and −x have bracket one in the standard convention (our own). Adding constants cannot repair that mismatch (our own).

**nLab:** [momentum map](https://ncatlab.org/nlab/show/momentum+map). It says: “its dual μ is a Poisson manifold homomorphism with respect to the Lie-Poisson structure”

**Sources:** none listed. No primary source with a working link was found.

### Free actions give smooth symplectic quotients

**Remember:** Free symmetry removes the fixed points that can make a quotient singular.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction), 70H33. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** A compact Lie group acts freely on the zero set of an equivariant momentum map if every point there has trivial stabilizer. The reduced space is the set of group orbits on that level.

**Problem.** For a compact Lie group acting freely on the zero level, the reduced space is smooth and inherits a symplectic form.

**How the definition helps.** Freeness excludes the fixed origin for opposite circle rotations on ℂ² (our own example). Independent infinitesimal motions make the momentum derivative surjective, so the zero level is smooth. The free, proper quotient theorem gives smooth quotient charts. The restricted form has precisely the orbit directions as its kernel and descends to a symplectic form (our own argument).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “Assume that G acts freely on μ⁻¹(0).”

**Sources:**

- [Jerrold Marsden and Alan Weinstein, Reduction of symplectic manifolds with symmetry (1974)](https://doi.org/10.1016/0034-4877(74)90021-4)

### Free reduction avoids quotient singularities

**Remember:** Remove point stabilizers before taking the smooth symplectic quotient.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction). arXiv math.SG. Level 3: graduate.

**Definition.** For an equivariant moment map μ and value a, the reduced space is μ⁻¹(a) modulo the coadjoint stabilizer of a. That stabilizer acts freely if only its identity fixes any point of μ⁻¹(a).

**Problem.** Take a regular value of the moment map, one where its derivative is onto throughout the level. If the group fixing the value acts freely and properly on the level, the quotient is a smooth symplectic manifold.

**How the definition helps.** Freeness excludes finite stabilizers such as those in the circle action on ℂ² with weights one and two (our own example). On positive momentum levels a half-turn fixes points with first coordinate zero and negates the transverse coordinate. The free, proper quotient theorem gives smooth charts, and the symplectic reduction theorem supplies the form (our own explanation).

**Paper or page:** [From Symplectic to Poisson. A Study of Reduction and a Proposal Towards Implosion](https://arxiv.org/abs/2202.05783v1). It says: “Then there is a unique symplectic structure”

**Sources:**

- [Jerrold Marsden and Alan Weinstein, Reduction of symplectic manifolds with symmetry (1974)](https://doi.org/10.1016/0034-4877(74)90021-4)

### Reduced forms carry Hamiltonian flows

**Remember:** Pull back the form and energy to see that their flows agree.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction). arXiv math.SG. Level 3: graduate.

**Definition.** Let i include a regular moment level in a symplectic manifold (M,ω), and let π project it onto its smooth reduced space. The reduced form Ω is the unique two-form satisfying π\*Ω = i\*ω.

**Problem.** Choose a moment map respecting the group actions and a level where its derivative is onto. Suppose the group fixing that value acts freely and properly on the level. Then the flow of any invariant energy projects to the flow of the induced energy on the quotient.

**How the definition helps.** The pullback identity transfers Hamilton’s equation directly to the quotient (our own argument). Noether’s theorem keeps the invariant Hamiltonian’s flow on the level, and invariance lets its vector field project. Since the reduced energy pulls back to the restricted energy, the projected field satisfies the reduced Hamilton equation. Nondegeneracy identifies it uniquely.

**Paper or page:** [From Symplectic to Poisson. A Study of Reduction and a Proposal Towards Implosion](https://arxiv.org/abs/2202.05783v1). It says: “In particular, $X<sub>H</sub>$ and $X<sub>h</sub>$ are $\\pi$-related.”

**Sources:**

- [Jerrold Marsden and Alan Weinstein, Reduction of symplectic manifolds with symmetry (1974)](https://doi.org/10.1016/0034-4877(74)90021-4)

### With Hamiltonian actions, Noether's theorem takes one line

**Remember:** Each symmetry has a generating function, and its bracket with energy measures conservation.

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

**Definition.** Let λ be a one-form whose derivative dλ is symplectic, meaning closed and nondegenerate. A diffeomorphism is exact symplectic if it pulls λ back to λ + dF for a single function F. Adding a real height z gives a contact form dz − λ.

**Problem.** Every exact symplectic map lifts to a map of the contactization preserving dz − λ exactly.

**How the definition helps.** Exactness supplies the global height correction (our own calculation). The lift (x,z) ↦ (φ(x),z + F(x)) pulls dz − λ back to dz + dF − φ\*λ = dz − λ. Translating momentum by a nonzero constant on the cotangent bundle of a circle changes λ by a form with nonzero period. That form has no global primitive.

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “and it lifts to a contact transformation”

**Sources:** none listed. No primary source with a working link was found.

### Symplectic maps have Lagrangian graphs

**Remember:** On a graph, the difference of the forms tests preservation.

*True by definition.* MSC 53D22 (Canonical transformations in symplectic and contact geometry). arXiv math.SG. Level 3: graduate.

**Definition.** A Lagrangian submanifold has half the ambient dimension and zero restricted symplectic form. On a product, use the target symplectic form minus the source form.

**Problem.** A diffeomorphism preserves the symplectic form exactly when its graph is Lagrangian for the difference form.

**How the definition helps.** Using the difference form on the product turns preservation of two forms into vanishing of one form on the graph. In our own calculation, restriction to the graph gives the pulled-back target form minus the source form. The graph has half the product dimension since the map is a diffeomorphism. These two facts also prove the converse.

**nLab:** [Lagrangian correspondence](https://ncatlab.org/nlab/show/Lagrangian+correspondence). It says: “The graph of any symplectomorphism induces a Lagrangian correspondence.”

**Sources:** none listed. No primary source with a working link was found.

### Symplectomorphisms carry Hamiltonian motion to Hamiltonian motion

**Remember:** Preserve the symplectic form and the transformed Hamiltonian determines the transported motion.

*True by definition.* MSC 53D22 (Canonical transformations in symplectic and contact geometry), 70H15. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** Define a canonical transformation φ as a symplectomorphism, a smooth invertible map that preserves the symplectic form ω. This form is a closed, nondegenerate alternating pairing on tangent vectors. The classical definition instead asks that Hamilton’s position and momentum equations keep their form after a change of coordinates.

**Problem.** A time-independent canonical transformation φ carries motion for H to motion for H ∘ φ⁻¹. It also carries the Poisson bracket, the operation that gives the rate of change under Hamiltonian motion, to the new coordinates.

**How the definition helps.** A symplectomorphism preserves Hamilton’s equations because it preserves the pairing used to determine the motion from the derivative of H (our own). The defining equation therefore carries the original velocity field to the one for H ∘ φ⁻¹ (our own). The same pairing gives the Poisson bracket, so the bracket is preserved too (our own). The work moves into proving that the classical condition on Hamilton’s equations, for all H, is equivalent to preserving ω (our own).

**nLab:** [canonical transformation](https://ncatlab.org/nlab/show/canonical+transformation). It says: “Since phase spaces are mathematically identified with symplectic manifolds, canonical transformations are symplectomorphisms.”

**Wikipedia:** [Canonical transformation](https://en.wikipedia.org/wiki/Canonical_transformation). It says: “Modern mathematical descriptions of canonical transformations are considered under the broader topic of symplectomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Capacity normalization gives non-squeezing

**Remember:** Volume misses the narrow cylinder, but a normalized capacity sees it.

*True by definition.* MSC 53D35 (Global theory of symplectic and contact manifolds). arXiv math.SG. Level 3: graduate.

**Definition.** A normalized symplectic capacity takes values in \[0,∞\] and satisfies c(M) ≤ c(N) whenever M embeds symplectically into N. Scaling the symplectic form by a positive factor scales the capacity equally. In standard symplectic space it assigns πr² to the radius-r ball and the cylinder over a radius-r conjugate coordinate disk.

**Problem.** In standard symplectic space, a ball cannot embed symplectically into a cylinder of smaller radius over a conjugate coordinate plane.

**How the definition helps.** Any symplectic embedding from the ball into the cylinder requires πr² ≤ πR² by monotonicity and normalization. The substantive input is the existence of a normalized capacity (our own explanation).

**Wikipedia:** [Non-squeezing theorem](https://en.wikipedia.org/wiki/Non-squeezing_theorem). It says: “Given such a capacity, one can verify the non-squeezing theorem”

**Sources:** none listed. No primary source with a working link was found.

### Zero area recovers cup multiplication

**Remember:** Discard positive area to recover the cup product.

*True by definition.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds), 14N35. arXiv math.SG. Level 3: graduate.

**Definition.** Work over rational Novikov series with nonnegative exponents on a closed symplectic manifold. Pairing the small quantum product a ⋆ b with c gives the sum of genus-zero three-point Gromov–Witten invariants with insertions a,b,c. Each curve class A contributes with weight T raised to its symplectic area.

**Problem.** For a closed symplectic manifold, quotienting its small quantum cohomology ring by all series with zero constant term recovers its rational cohomology ring.

**How the definition helps.** Weighting by area lets one extract ordinary multiplication by taking the constant coefficient (our own). Only constant curves have zero area, and all three evaluations of such a curve return the same point (our own). So the zero-area count pairs the ordinary cup product with the third class (our own). Associativity of the full product requires a separate theorem (our own).

**Wikipedia:** [Quantum cohomology](https://en.wikipedia.org/wiki/Quantum_cohomology). It says: “The only pseudoholomorphic curves in class A = 0 are constant maps, whose images are points.”

**Sources:** none listed. No primary source with a working link was found.

### Berezin quantization is positive, Weyl quantization is not

**Remember:** Averaging projections with positive weights can only give positive operators.

*Rules out counterexamples.* MSC 53D50 (Geometric quantization), 53D55, 81S10. arXiv math.SG. Level 3: graduate.

**Definition.** Let q assign rank-one orthogonal projections measurably to points of a positive measure space (M,μ), with weak integral ∫q dμ = I. Berezin quantization sends f to Q(f) = ∫f q dμ whenever the weak integral defines a bounded operator.

**Problem.** If f ≥ 0, then Q(f) is a positive operator, and if also ∫ f dμ = 1, then Q(f) is a density operator. Weyl quantization lacks this property: some nonnegative functions on ℝ² give operators with a negative expectation value.

**How the definition helps.** For f ≥ 0, each quadratic form value of Q(f) integrates a nonnegative function. Rank-one projections have trace one, so for integrable f ≥ 0 the trace equals ∫f dμ (our own calculation). Weyl expectations instead integrate f against a Wigner function. A nonzero nonnegative bump near the first excited oscillator state’s negative Wigner value at the origin gives a negative expectation (our own example).

**nLab:** [Berezin quantization](https://ncatlab.org/nlab/show/Berezin+quantization). It says: “That is, if f ≥ 0 and ∫<sub>M</sub> f dμ = 1 then Q<sub>f</sub> ≥ 0 and Tr(Q<sub>f</sub>) = 1”

**Wikipedia:** [Wigner quasiprobability distribution](https://en.wikipedia.org/wiki/Wigner_quasiprobability_distribution). It says: “the Wigner distribution can and normally does take on negative values for states which have no classical model”

**Sources:**

- [F. A. Berezin, Quantization, Mathematics of the USSR-Izvestiya 8 (1974) 1109–1165](https://doi.org/10.1070/IM1974v008n05ABEH002140)

### Prequantum curvature turns Poisson brackets into operator commutators

**Remember:** Curvature supplies the term that makes the commutator agree with the bracket.

*True by definition. Confidence: medium.* MSC 53D50 (Geometric quantization), 81S10. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** A prequantum line bundle over (M,ω) is a Hermitian line bundle with a unitary connection ∇ of curvature iω/ħ in this convention. For smooth f, define X(f) by ι(X(f))ω = df and set Q(f) = −iħ∇ along X(f) plus multiplication by f.

**Problem.** On smooth sections, \[Q(f), Q(g)\] = iħQ({f, g}) for smooth f and g. Here \[A, B\] means AB − BA and {f, g} = ω(X(f), X(g)).

**How the definition helps.** Curvature corrects the multiplication term in the commutator (our own calculation). Since \[X(f),X(g)\] = −X({f,g}), commuting derivatives gives the required derivative part. The two cross terms contribute 2iħ{f,g}, while curvature contributes −iħ{f,g}. Together these give iħQ({f,g}).

**Wikipedia:** [Geometric quantization](https://en.wikipedia.org/wiki/Geometric_quantization). It says: “Prequantization produces a natural Hilbert space together with a quantization procedure for observables that exactly transforms Poisson brackets on the classical side into commutators on the quantum side.”

**Sources:** none listed. No primary source with a working link was found.

### Enveloping algebras give Gutt star products

**Remember:** Borrow the product of the enveloping algebra; associativity comes free.

*True by definition.* MSC 53D55 (Deformation quantization, star products), 17B35, 17B63. arXiv math.QA. Level 3: graduate.

**Definition.** For a finite-dimensional real Lie algebra 𝔤, form its formal enveloping algebra with relations xy − yx = ħ\[x,y\]. Let σ send each polynomial monomial on 𝔤\* to the average of all orderings of its factors, extending coefficientwise in ħ. The Gutt product is f ⋆ g = σ⁻¹(σ(f)σ(g)).

**Problem.** The Gutt star product is an associative deformation quantization of the Lie–Poisson structure on 𝔤\*. It is given by bidifferential operators, so it extends to all smooth functions on 𝔤\*.

**How the definition helps.** Transport through σ preserves associativity (our own explanation). The Poincaré–Birkhoff–Witt theorem makes σ invertible, and the defining relations give the Lie–Poisson bracket to first order. Gutt’s bidifferential formula extends each coefficient to smooth functions.

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “the universal enveloping algebra of a Lie algebra provides a deformation quantization of the corresponding Lie-Poisson structure”

**Wikipedia:** [Moyal product](https://en.wikipedia.org/wiki/Moyal_product). It says: “It is a special case of the ★-product of the "algebra of symbols" of a universal enveloping algebra.”

**Sources:**

- [Simone Gutt, An explicit \*-product on the cotangent bundle of a Lie group, Letters in Mathematical Physics 7 (1983) 249–258](https://doi.org/10.1007/bf00400441)

### First-order Dirac rule evades Groenewold–van Hove

**Remember:** Exact Dirac quantization fails; Dirac's rule up to higher order works.

*Rules out counterexamples.* MSC 53D55 (Deformation quantization, star products), 81S10. arXiv math.SG, math.QA. Level 3: graduate.

**Definition.** A differential star product on complex smooth functions is a unital associative formal product f ⋆ g = fg + ∑ₖ≥₁ ħᵏBₖ(f,g) with bidifferential coefficients. It quantizes a Poisson bracket when B₁(f,g) − B₁(g,f) = i{f,g} for all f,g.

**Problem.** Under the standard Groenewold–van Hove hypotheses with the Schrödinger position and momentum operators, no quantization satisfies the exact Dirac rule on all polynomial observables. The Moyal product formally quantizes all smooth functions on standard symplectic ℝ²ⁿ.

**How the definition helps.** The first-order rule allows the higher commutator terms excluded by the exact Dirac rule (our own explanation). Groenewold’s incompatible bracket calculations for quartic observables obstruct exact quantization. The Moyal product is associative and its first commutator coefficient is i times the canonical Poisson bracket.

**Wikipedia:** [Moyal bracket](https://en.wikipedia.org/wiki/Moyal_bracket). It says: “Its algebraic isomorphism to the algebra of commutators bypasses the negative result of the Groenewold–van Hove theorem, which precludes such an isomorphism for the Poisson bracket”

**Sources:**

- [H. J. Groenewold, On the principles of elementary quantum mechanics, Physica 12 (1946) 405–460](https://doi.org/10.1016/S0031-8914(46)80059-4)

### Hochschild–Kostant–Rosenberg makes first-order terms bivector fields

**Remember:** Differential cochains represent first-order products, and antisymmetrization remembers their cohomology classes.

*Makes the theorem clean to state or prove.* MSC 53D55 (Deformation quantization, star products), 16E40. arXiv math.QA. Level 3: graduate.

**Definition.** A differential Hochschild p-cochain on C∞(M) is a p-linear map from smooth functions to smooth functions that acts by a multidifferential operator.

**Problem.** Every differential star product quantizing {·,·} with first commutator coefficient {·,·} is differentially equivalent to one with antisymmetric first coefficient B₁. The antisymmetric part of B₁ equals half the Poisson bracket and is invariant under equivalence.

**How the definition helps.** Differential Hochschild cohomology identifies the class of a two-cocycle with its antisymmetrization by the Hochschild–Kostant–Rosenberg theorem. Associativity makes B₁ a cocycle. A differential equivalence changes B₁ by a coboundary, which is symmetric. The theorem makes its symmetric part a coboundary, so an equivalence removes that part (our own summary).

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “Note that Cᵖ(C∞(M),C∞(M)) should be interpreted as Hom<sub>diff</sub>(C∞(M), C∞(M)).”

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662). It says: “For any equivalence class of star products, there is a representative whose first term B₁ in the ħ-expansion is skew-symmetric.”

**Sources:**

- [G. Hochschild, B. Kostant, A. Rosenberg, Differential forms on regular affine algebras, Transactions of the AMS 102 (1962) 383–408](https://doi.org/10.1090/s0002-9947-1962-0142598-8)

### Star-product commutators give Poisson brackets

**Remember:** The leading term of a commutator inherits every commutator identity.

*True by definition.* MSC 53D55 (Deformation quantization, star products), 17B63. arXiv math.QA, math.SG. Level 3: graduate.

**Definition.** A star product on a manifold M is an associative product on formal power series C∞(M)\[\[ħ\]\]. It has the form f ⋆ g = fg + ħB₁(f,g) + ħ²B₂(f,g) + ⋯ with bilinear maps Bₖ. Its first-order bracket is {f,g} = B₁(f,g) − B₁(g,f).

**Problem.** For every star product, the first-order bracket is a Poisson bracket. It is antisymmetric, it is a derivation in each argument, and it satisfies the Jacobi identity.

**How the definition helps.** The first-order bracket is the constant term of the star commutator divided by ħ. Skew-symmetry follows immediately. The commutator product rule at order ħ gives the ordinary Leibniz rule. Its Jacobi identity at order ħ² gives Jacobi for the bracket (our own summary).

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “A (formal) deformation quantization of M is a star product on A = C∞(M) such that the Poisson bracket {a,b} = B₁(a,b) − B₁(b,a) for a,b ∈ A”

**Sources:**

- [F. Bayen, M. Flato, C. Fronsdal, A. Lichnerowicz, D. Sternheimer, Deformation theory and quantization I, Annals of Physics 111 (1978) 61–110](https://doi.org/10.1016/0003-4916(78)90224-5)

### Symmetric shifts make Wick and Moyal products equivalent

**Remember:** Symmetric parts change only the gauge, never the algebra.

*True by definition.* MSC 53D55 (Deformation quantization, star products), 81S30. arXiv math.QA, math.SG. Level 3: graduate.

**Definition.** For a constant tensor π on a vector space, define f ⋆π g = m exp(ħπⁱʲ∂ᵢ ⊗ ∂ⱼ)(f ⊗ g) on formal smooth functions. Here m multiplies functions pointwise, and repeated indices are summed. The antisymmetric tensor gives Moyal ordering, while Wick ordering uses a complex tensor with an additional symmetric part.

**Problem.** If α is a symmetric constant tensor, then f ↦ exp(½ħ αⁱʲ ∂ᵢ∂ⱼ) f is an algebra isomorphism from ⋆π to ⋆(π+α). Hence every Wick product is isomorphic to the Moyal product of the antisymmetric part of its tensor.

**How the definition helps.** Putting all constant tensors into one family turns a change of symmetric part into one exponential operator D = exp(½ħ αⁱʲ∂ᵢ∂ⱼ). Because α is symmetric, the product rule gives D(fg) = prod ∘ exp(ħ αⁱʲ ∂ᵢ ⊗ ∂ⱼ)(Df ⊗ Dg). Constant-coefficient exponentials commute and multiply, so D(f ⋆π g) = Df ⋆(π+α) Dg follows in one line (our own computation). Taken separately, the Wick and Moyal formulas look unrelated and need a term-by-term comparison.

**nLab:** [star product](https://ncatlab.org/nlab/show/star+product). It says: “Indeed every star product induced from a constant rank-2 tensor on a vector space is isomorphic to a Moyal star product”

**Sources:**

- [Michael Dütsch, Deformation quantization of the free theory, chapter 2 of From Classical Field Theory to Perturbative Quantum Field Theory, Progress in Mathematical Physics 74, Birkhäuser (2019) 45–69](https://doi.org/10.1007/978-3-030-04738-2_2)

### Weierstrass data make symmetry an integral test

**Remember:** Match the derivative everywhere and the position at one point.

*Makes the theorem clean to state or prove.* MSC 53A10 (Minimal surfaces in differential geometry, surfaces with prescribed mean curvature), 58E12. arXiv math.DG. Level 4: research.

**Definition.** Consider a finite group acting holomorphically on a connected open complex curve and orthogonally on Euclidean space. Weierstrass data form a nowhere-zero vector of holomorphic differentials whose squares sum to zero and whose real integrals vanish around loops. The data respect the actions when pulling them back by each group element gives its orthogonal transformation of the vector.

**Problem.** Integrating the real parts gives a conformal minimal immersion F. For data respecting the actions, equality F(gx) = gF(x) everywhere reduces to testing every group element g at one chosen point x.

**How the definition helps.** The symmetry of the data gives the two sides equal derivatives everywhere (our own explanation). On a connected surface their difference is constant, so equality at the chosen point decides equality everywhere. The Weierstrass representation supplies the immersion.

**Paper or page:** [Minimal surfaces with symmetries](https://arxiv.org/abs/2308.12637v5). It says: “is G-equivariant if and only if the map f : X → Y is G-equivariant and”

**Sources:**

- [Franc Forstnerič, Minimal surfaces with symmetries](https://arxiv.org/abs/2308.12637v5)

### Holonomy determines connection symmetries

**Remember:** One fiber value extends exactly when it commutes with every loop.

*True by definition.* MSC 53C05 (Connections (general theory)), 58D05. arXiv math.DG. Level 4: research.

**Definition.** A connection specifies parallel transport, a rule for moving points of a bundle fiber along a path. Its holonomy group consists of transports around loops at one base point. A gauge symmetry preserves the connection when it commutes with transport along every path.

**Problem.** On a principal bundle over a connected manifold, restriction identifies the gauge symmetry group with the fiber automorphisms commuting with all holonomy. Fiber automorphisms here respect the structure group action.

**How the definition helps.** The transport description determines a symmetry everywhere from its value on one fiber. In our own proof, transport that value along any path to the desired fiber. Commutation with loop transport makes the result independent of the path, and local smooth families of paths give smoothness. The description uses the equivalence between preserving horizontal tangent spaces and preserving their path transports.

**Paper or page:** [The local moduli space of the Einstein-Yang-Mills system](https://arxiv.org/abs/2311.07572). It says: “the centralizer of the holonomy of A at m ∈ M inside the automorphism group”

**Sources:**

- [The local moduli space of the Einstein-Yang-Mills system](https://arxiv.org/abs/2311.07572)

### Thin homotopy makes parallel transport a functor on paths

**Remember:** Paths that differ by sweeping no area give the same transport.

*Makes the theorem clean to state or prove.* MSC 53C05 (Connections (general theory)), 58H05. arXiv math.DG, math.CT. Level 4: research.

**Definition.** The path groupoid of X has points as objects and smooth paths constant near both endpoints as representatives of arrows. Two paths represent the same arrow if a smooth endpoint-preserving homotopy between them has differential of rank at most one everywhere. Composition concatenates paths.

**Problem.** Parallel transport on a principal G-bundle with connection defines a smooth functor from the path groupoid to G-torsors. Schreiber and Waldorf identify principal G-bundles with connection with such smooth transport functors up to categorical equivalence.

**How the definition helps.** Parallel transport does not change under thin homotopy, so it gives a well-defined functor on the path groupoid. With sitting instants, composition of paths is smooth, and it is associative after the quotient. Schreiber and Waldorf prove that the functor determines the connection, and that equivalence is the real theorem. The functor factors through the fundamental groupoid exactly when the connection is flat.

**nLab:** [parallel transport](https://ncatlab.org/nlab/show/parallel+transport). It says: “noticed that the most elegant way to (re)state the maximal equivalence relation on paths which is respected by parallel transport is in terms of thin homotopy.”

**Sources:**

- [Urs Schreiber, Konrad Waldorf, Parallel Transport and Functors, J. Homotopy Relat. Struct. 4 (2009) 187–244, arXiv:0705.0452](https://arxiv.org/abs/0705.0452)
- [A. Caetano, Roger Picken, An axiomatic definition of holonomy, Int. J. Math. 5 (1994) 835–848](https://doi.org/10.1142/S0129167X94000425)

### Closed Spin(7) forms ensure Yang–Mills

**Remember:** Close the four-form and the Bianchi identity takes over.

*Rules out counterexamples.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 4: research.

**Definition.** A Spin(7) structure is a four-form Φ pointwise equivalent to the Cayley form on an eight-manifold. With the induced Hodge star ⋆, a connection is a Spin(7) instanton if its curvature F satisfies Φ ∧ F = −⋆F.

**Problem.** A Spin(7) instanton for a closed defining four-form satisfies the ordinary Yang–Mills equation. Without closedness, the same instanton equation need not imply the Yang–Mills equation.

**How the definition helps.** For closed Φ, differentiating the instanton equation gives dₐ⋆F = 0 by the Bianchi identity (our own proof). On Euclidean eight-space take nonzero constant abelian instanton curvature F and choose linear u with du ∧ ⋆F nonzero. Scaling lengths by exp(u) multiplies Φ and ⋆F by exp(4u), preserving the instanton equation. The rescaled ⋆F has nonzero derivative (our own counterexample).

**nLab:** [Spin(7)-instanton](https://ncatlab.org/nlab/show/Spin%287%29-instanton). It says: “On a Spin(7) manifold the differential 2-forms decompose into two irreducible representations, Λ₇ and Λ₂₁ under the action of Spin(7)”

**Sources:** none listed. No primary source with a working link was found.

### Ideal instantons retain lost charge

**Remember:** Keep the missing charge at the points where curvature concentrates.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 4: research.

**Definition.** On an oriented Riemannian four-manifold, an ideal SU(2) instanton of charge k pairs an anti-self-dual connection with finitely many distinct points of positive integer weight. Its curvature satisfies ⋆F = −F, and its second Chern number plus the sum of the weights equals k.

**Problem.** On a closed base, every sequence of smooth anti-self-dual connections of charge k has a subsequence converging to an ideal instanton. After changes of frame, the connections converge smoothly on compact sets away from the marked points. In units of one instanton, the energy measures converge weakly to the limiting energy measure plus the weighted point masses.

**How the definition helps.** In our own account, the marked points give concentrated curvature energy a place in the limit. Uhlenbeck compactness gives convergence away from those points. Removal of singularities extends the limiting connection, and energy quantization gives the integer weights.

**nLab:** [Donaldson invariant](https://ncatlab.org/nlab/show/Donaldson+invariant). It says: “corresponding to the positions of the instantons when shrinking their scale down and considering the limit”

**Paper or page:** [4-Manifold Topology, Donaldson-Witten Theory, Floer Homology and Higher Gauge Theory Methods in the BV-BFV Formalism](https://arxiv.org/abs/2107.00304). It says: “the connection A extends to a smooth anti self-dual connection Ã in B⁴.”

**Sources:** none listed. No primary source with a working link was found.

### Laurent coefficients test flatness

**Remember:** Put each equation in its own power of the parameter.

*Makes the theorem clean to state or prove.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 4: research.

**Definition.** On a complex vector bundle, take a connection D and two one-forms φ and ψ with values in bundle endomorphisms. Define D(ε) = D + ε⁻¹φ + εψ for every nonzero complex number ε. In wedge products, multiply the endomorphisms by composition.

**Problem.** Every D(ε) is flat exactly when φ∧φ, ψ∧ψ, dᴰφ, dᴰψ and Fᴰ + φ∧ψ + ψ∧φ all vanish. Here Fᴰ is the curvature and dᴰ is the exterior derivative induced by D.

**How the definition helps.** In our own calculation, the family puts each of the five equations in a separate power of ε. Expanding curvature gives powers from −2 through 2. A Laurent polynomial vanishes for every nonzero parameter exactly when each coefficient vanishes.

**Paper or page:** [Nilpotent Higgs bundles and families of flat connections](https://arxiv.org/abs/2207.09581). It says: “Then flatness for all ε ∈ ℂ× is equivalent to the following set of equations:”

**Sources:**

- [Sebastian Schulz, Nilpotent Higgs bundles and families of flat connections](https://arxiv.org/abs/2207.09581)

### Odd degree excludes reducible projectively flat connections

**Remember:** Two parallel lines of equal degree cannot have odd total degree.

*Rules out counterexamples. Confidence: medium.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 4: research.

**Definition.** Fix a rank-two unitary bundle over a connected closed oriented three-manifold. It is admissible if its determinant has odd first Chern number on some embedded closed oriented surface. A connection with fixed determinant connection is projectively flat if its curvature is scalar at every point.

**Problem.** Every projectively flat connection on such a bundle is irreducible for determinant-one gauge transformations, meaning its stabilizer is just the center. A product bundle with the product connection shows what can fail without admissibility.

**How the definition helps.** Odd determinant degree excludes the parallel line splitting of the trivial product connection (our own argument). Any noncentral parallel determinant-one automorphism has two distinct eigenvalues, so its eigenlines are parallel. Projective flatness gives both lines the same curvature and therefore equal degrees on the chosen surface. Their sum is even.

**Paper or page:** [Equivariant instanton homology](https://arxiv.org/abs/1907.01091). It says: “Suppose E is a nontrivial admissible bundle over a 3-manifold Y.”

**Sources:**

- [Simon K. Donaldson, Floer Homology Groups in Yang-Mills Theory](https://doi.org/10.1017/CBO9780511543098)

### One charge adds eight virtual dimensions

**Remember:** Subtract the cokernel dimension from the kernel dimension of the gauge-fixed curvature operator.

*Makes the theorem clean to state or prove.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)). arXiv math.DG, math-ph. Level 4: research.

**Definition.** At an anti-self-dual connection A, define the virtual dimension as the real Fredholm index of dₐ\* ⊕ dₐ⁺ on adjoint-valued one-forms. The two components impose the gauge condition and linearize self-dual curvature, respectively. The index is kernel dimension minus cokernel dimension.

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

**Definition.** A compactly supported degree-n differential character is a class in the direct limit of relative differential character groups for (X,X∖K) over compact K. In the relative cocycle model, its cochains and curvature vanish on X∖K.

**Problem.** Compactly supported characters form a graded module over ordinary differential characters. Forgetting support commutes with this action.

**How the definition helps.** Each term of the product restricts to zero outside K because it contains a relative factor. Our own comparison with characters defined on cycles uses the relative product theorem, including naturality of the correction comparing wedge and cup products. It gives a product on classes compatible with enlarging K and with forgetting K.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “Cheeger-Simons differential characters with compact support and Pontryagin duality”

**Sources:**

- [Christian Becker, Marco Benini, Alexander Schenkel and Richard J. Szabo, Cheeger–Simons differential characters with compact support and Pontryagin duality (2019), §3.3 and §4.2](https://doi.org/10.4310/CAG.2019.v27.n7.a2)

### Bott connections give secondary Pontryagin classes

**Remember:** Differentiate a normal field along a leaf by taking a bracket modulo leaf directions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 57R30. arXiv math.DG, math.AT. Level 4: research.

**Definition.** For a foliation with tangent bundle L, a Bott connection ∇ on the normal bundle satisfies ∇ₓȲ = \[X,Y\] modulo L for every leafwise X. Here Ȳ denotes the image of any vector field Y in the normal bundle.

**Problem.** If 2i exceeds q, the i-th differential Pontryagin character gives an ℝ/ℤ cohomology class of degree 4i−1 independent of the Bott connection.

**How the definition helps.** The character retains a cohomology class one degree lower when its curvature vanishes. Bott’s vanishing theorem kills the degree-4i curvature form because 4i exceeds 2q. Our own independence argument joins two Bott connections on the cylinder with leaves extended along the interval. The same vanishing theorem there gives equal endpoint classes.

**nLab:** [secondary characteristic class](https://ncatlab.org/nlab/show/secondary+characteristic+class). It says: “If that curvature form happens to vanish, the corresponding Chern-Simons form itself becomes closed”

**Paper or page:** [Rigid secondary characteristic classes](https://arxiv.org/abs/2403.09371). It says: “the Chern form $c<sub>J</sub>(\\Omega ({\\nabla ^{{\\mathcal F}}}))$ is identically zero.”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), §7, Proposition 7.3](https://doi.org/10.1007/BFb0075216)
- [Steven Hurder, Rigid secondary characteristic classes (2024), Theorem 3.1](https://arxiv.org/abs/2403.09371)

### Characteristic refinements multiply

**Remember:** Multiply the two prescribed projections and use uniqueness.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 4: research.

**Definition.** For a compact Lie group, pair a conjugation-invariant polynomial P with an integral characteristic class u represented over ℝ by its curvature form. The Cheeger–Simons refinement is the unique natural character assignment with that curvature and integral class. Natural means that pulling back a connection pulls back its character.

**Problem.** The refinement of the product pair (PQ, u ∪ v) equals the product of the refinements of (P,u) and (Q,v).

**How the definition helps.** The product already has the curvature and integral class that specify the natural assignment. Our own argument uses the multiplicativity of both projections. Passing from the construction on cycles to this characterization requires the uniqueness theorem for assignments on all bundles with connection.

**nLab:** [Cheeger-Simons homomorphism](https://ncatlab.org/nlab/show/Cheeger-Simons+homomorphism). It says: “refines this to an assignment of secondary characteristic classes in ordinary differential cohomology to principal connections”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 2.2 and Corollary 2.3](https://doi.org/10.1007/BFb0075216)

### Circle integration computes transgression curvature

**Remember:** Curvature passes through integration along the circle.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A differential cohomology class records an integral class together with curvature and holonomy. To transgress a gerbe class, pull it back along evaluation, which sends a loop and a circle point to the corresponding manifold point. Integrating along the oriented circle gives a degree-two class representing a line bundle with connection.

**Problem.** The normalized curvature of this line bundle is the integral along the same oriented circle of the pulled-back gerbe curvature.

**How the definition helps.** Integration of differential cohomology classes commutes with taking curvature, giving the formula in one step. Our own comparison uses this rule in place of computing parallel transport in the geometric line of trivializations along each loop. Identifying the two line bundles with connection requires a comparison theorem.

**nLab:** [fiber integration in ordinary differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+ordinary+differential+cohomology). It says: “is a differential cohomology class on X of degree k less.”

**Sources:**

- [K. Waldorf, Transgression to loop spaces and its inverse, II: Gerbes and fusion bundles with connection](https://doi.org/10.4310/ajm.2016.v20.n1.a4)
- [J. Fuchs, T. Nikolaus, C. Schweigert and K. Waldorf, Bundle gerbes and surface holonomy](https://doi.org/10.4171/077-1/8)

### Circle integration gives line bundles

**Remember:** Integrate a gerbe over the circle to get a line bundle.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** Circle integration takes a differential cohomology class on X × S¹ to a class on X one degree lower. A smooth family of loops in M gives an evaluation map X × S¹ → M. Transgression means pulling a class back along this map and integrating over the oriented circle.

**Problem.** Transgression of a circle gerbe with connection and curving gives each smooth family of loops a line bundle with unitary connection up to isomorphism.

**How the definition helps.** Circle integration takes the degree-three class describing the gerbe to degree two, where classes describe lines with connection (our own). The work lies in constructing integration and proving the geometric classifications in both degrees (our own).

**nLab:** [fiber integration in ordinary differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+ordinary+differential+cohomology). It says: “sends n-connections on Σₖ on U × Σₖ to the (n−k)-connection on U which is their fiber integration over Σₖ.”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Kiyonori Gomi and Yuji Terashima, Higher-dimensional parallel transports.](https://doi.org/10.4310/MRL.2001.v8.n1.a4)

### Closed fibers permit integration

**Remember:** A closed fiber adds no boundary to a product cycle.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A degree-n differential character is a homomorphism from smooth (n−1)-cycles to ℝ/ℤ satisfying h(∂c) = ∫꜀ω modulo integers for every smooth n-chain c. Here ω is its curvature form. For a closed oriented k-manifold F, fiber integration sends h on X × F to z ↦ h(z × u) for any fundamental cycle u.

**Problem.** For n &gt; k, integration over F gives a degree-(n−k) character on X whose curvature is the integral of the original curvature over F.

**How the definition helps.** A closed fiber contributes no boundary term, so the original character gives the required boundary rule on product chains (our own). Changing the fundamental cycle contributes a curvature integral with too many fiber directions, which vanishes (our own). An interval instead contributes its two endpoints by Stokes’ theorem (our own).

**nLab:** [fiber integration in ordinary differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+ordinary+differential+cohomology). It says: “with compact fibers in terms of Deligne complex”

**Paper or page:** [Rigid models for 2-gerbes I: Chern-Simons geometry](https://arxiv.org/abs/2209.05521v4). It says: “Given a k-form ξ on X × \[a,b\] we have d∫\[a,b\] ξ + ∫\[a,b\] dξ = ξ\|X × {b} − ξ\|X × {a}.”

**Sources:**

- [Christian Bär and Christian Becker, Differential Characters and Geometric Chains.](https://doi.org/10.1007/978-3-319-07034-6_1)
- [Kiyonori Gomi and Yuji Terashima, Higher-dimensional parallel transports.](https://doi.org/10.4310/MRL.2001.v8.n1.a4)
- [D. M. Roberts and R. F. Vozzo, Rigid models for 2-gerbes I: Chern–Simons geometry, Proposition 3.9.](https://arxiv.org/abs/2209.05521v4)

### Cochains give differential characters

**Remember:** The real comparison cochain becomes holonomy modulo integers.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A differential cocycle records an integral cocycle c, a closed n-form ω, and a real cochain h of degree n−1. On each smooth n-chain, h evaluates its boundary as the integral of ω minus the value of c.

**Problem.** Evaluating h modulo integers identifies degree-n smooth Deligne classes with differential characters. These characters add on cycles and evaluate boundaries by integrating their curvature modulo integers.

**How the definition helps.** Reducing the cochain equation modulo integers gives the rule for boundaries (our own). Conversely, lifting the character to a real cochain recovers an integral discrepancy c, and different lifts give equivalent cocycles (our own). Identifying these cochain classes with Deligne classes requires the comparison theorem (our own).

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “are equivalent to other models for these structures, notably to Deligne cohomology”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Michael J. Hopkins and Isadore M. Singer, Quadratic functions in geometry, topology, and M-theory.](https://doi.org/10.4310/jdg/1143642908)
- [Christian Bär and Christian Becker, Differential Characters and Geometric Chains.](https://doi.org/10.1007/978-3-319-07034-6_1)

### Cocycle pairing gives surface holonomy

**Remember:** Every oriented triangulation represents the same surface class.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A gerbe with connection defines a homomorphism h from smooth two-cycles to ℝ/ℤ satisfying h(∂c) = ∫꜀H modulo integers for every smooth three-chain c. Here H is its normalized curvature. For a surface map f, its holonomy is the value of f\*h on any fundamental cycle of the closed oriented surface.

**Problem.** For a smooth map from a closed oriented surface, gerbe holonomy is independent of the triangulation and patch labels used in the local formula.

**How the definition helps.** The pulled-back curvature is a three-form on a surface, so the character vanishes on boundaries there (our own). All oriented triangulations represent the same homology class, and character evaluation uses no patch labels (our own). The comparison theorem identifies this evaluation with the local face, edge, and vertex formula (our own).

**nLab:** [connection on a bundle gerbe](https://ncatlab.org/nlab/show/connection+on+a+bundle+gerbe), [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “assigns the exponentiated integrals of the 2-form over faces, of the connection 1-form over edges, and assigns the isomorphism μᵢⱼₖ to vertices.”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Kiyonori Gomi and Yuji Terashima, Higher-dimensional parallel transports.](https://doi.org/10.4310/MRL.2001.v8.n1.a4)

### Compact support requires relative periods

**Remember:** An interval with both ends outside the support can detect a missing period.

*Rules out counterexamples. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.AT, math.DG. Level 4: research.

**Definition.** A compactly supported degree-n character has a representative homomorphism h from relative (n−1)-cycles for (X,X∖K) to ℝ/ℤ for some compact K. Its curvature ω vanishes off K and satisfies h(∂c) = ∫꜀ω modulo integers for every relative n-chain c. Representatives agree if they agree after enlarging K.

**Problem.** The curvature integrates to an integer on every relative cycle of its degree. A compactly supported 1-form on ℝ with integral one half cannot occur.

**How the definition helps.** Every relative cycle has zero relative boundary, so its curvature integral must vanish modulo integers. In our own example an interval containing K in its interior detects the half-integer. Absolute cycles miss it because every 1-form on the line has a primitive.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “Cheeger-Simons differential characters with compact support and Pontryagin duality”

**Sources:**

- [Christian Becker, Marco Benini, Alexander Schenkel and Richard J. Szabo, Cheeger–Simons differential characters with compact support and Pontryagin duality (2019), Definition 3.1 and Theorem 4.2](https://doi.org/10.4310/CAG.2019.v27.n7.a2)

### Compact support retains data at infinity

**Remember:** Trivializations at infinity can differ even when the absolute character vanishes.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.AT, math.DG. Level 4: research.

**Definition.** Compactly supported degree-two characters are the direct limit over compact K of degree-two differential characters relative to X∖K. Each relative character maps relative one-cycles additively to ℝ/ℤ and evaluates boundaries by integrating its curvature modulo integers.

**Problem.** On the real line, compactly supported degree-two characters form the group ℝ/ℤ. Every such character becomes zero on forgetting compact support.

**How the definition helps.** Relative cycles include paths joining the two ends of the line, which absolute cycles miss. In our own calculation we take K to be a closed interval. There are no curvature 2-forms, so characters are homomorphisms on relative first homology, generated by a crossing path. Enlarging the interval preserves this generator, whereas absolute first homology vanishes.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “Cheeger-Simons differential characters with compact support and Pontryagin duality”

**Sources:**

- [Christian Becker, Marco Benini, Alexander Schenkel and Richard J. Szabo, Cheeger–Simons differential characters with compact support and Pontryagin duality (2019), Theorem 4.2 and Remark 4.5](https://doi.org/10.4310/CAG.2019.v27.n7.a2)

### Curving adjusts the Chern character

**Remember:** The exponential of the curving cancels the extra line curvature.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A finite-rank gerbe module has local vector bundles that differ on overlaps by tensoring with lines, with connections respecting these identifications. Choose local 2-forms B whose differences equal the intervening line curvatures divided by 2πi. The adjusted Chern character multiplies the usual curvature form ch(E) = tr exp(F∕2πi) by exp(−B), where F is the module curvature.

**Problem.** The adjusted forms agree on overlaps and give a global even form α satisfying dα + H ∧ α = 0, where H = dB.

**How the definition helps.** The exponential correction cancels the factor that tensoring with a line contributes to the ordinary Chern character. In our own calculation the factors cancel on each overlap, so the local forms glue. Differentiating the correction gives −H, since the ordinary character is closed. Proving independence of the resulting cohomology class from the module connection requires a separate comparison of connections.

**Wikipedia:** [Bundle gerbe](https://en.wikipedia.org/wiki/Bundle_gerbe). It says: “The twisted Chern character is a differential form that represents a class in the twisted cohomology”

**Sources:**

- [P. Bouwknegt, A. L. Carey, V. Mathai, M. K. Murray and D. Stevenson, Twisted K-Theory and K-Theory of Bundle Gerbes](https://doi.org/10.1007/s002200200646)
- [V. Mathai and D. Stevenson, Chern Character in Twisted K-Theory: Equivariant and Holomorphic Cases](https://doi.org/10.1007/s00220-003-0807-7)

### Deligne squares define Chern–Simons

**Remember:** Square the differential class, then evaluate on the fundamental cycle.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A line bundle with unitary connection defines a degree-two differential class. Its Deligne square multiplies this class by itself and gives a degree-four character, an additive circle-valued function on three-cycles.

**Problem.** On a closed oriented three-manifold, evaluating the Deligne square on the orientation class gives the abelian Chern–Simons action in ℝ/ℤ with this normalization. For a trivial bundle with real normalized connection form A, the action is ∫ A∧dA modulo integers.

**How the definition helps.** The square gives a global character even when the local connection forms do not glue to one form (our own). Its curvature vanishes in dimension three, so evaluation depends only on the homology class (our own). On a trivial bundle the Deligne product reduces to A∧dA (our own).

**nLab:** [Beilinson–Deligne cup product](https://ncatlab.org/nlab/show/Beilinson%E2%80%93Deligne+cup+product). It says: “The action functional of abelian higher dimensional Chern-Simons theory is given by the fiber integration in ordinary differential cohomology over the BD cup product of differential cocycles”

**Sources:**

- [Domenico Fiorenza, Hisham Sati and Urs Schreiber, Extended higher cup-product Chern–Simons theories.](https://doi.org/10.1016/j.geomphys.2013.07.011)
- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Kiyonori Gomi, Projective unitary representations of smooth Deligne cohomology groups, §2.](https://doi.org/10.1016/j.geomphys.2009.06.012)

### Fake flatness permits surface transport

**Remember:** A surface label must account for the change along its edges.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 18N10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** Present the strict Lie 2-group by a crossed module H → G. The local one-form A and two-form B take values in the Lie algebras of G and H respectively. The pair is fake flat when the differential of H → G sends B to dA + ½\[A,A\].

**Problem.** On a trivialized patch, the pair defines smooth strict transport along paths and bigons precisely when it is fake flat. Transport factors through the thin path 2-groupoid.

**How the definition helps.** Fake flatness makes the boundary of each surface label agree with transport along its two edges. The integration theorem constructs transport from the forms and recovers the forms by differentiation. In our own counterexample, take the identity boundary map for the circle, zero A and a nonzero B on the plane.

**nLab:** [higher parallel transport](https://ncatlab.org/nlab/show/higher+parallel+transport). It says: “A 2-connection therefore admits parallel transport only if its 2-form curvature is constrained to vanish.”

**Sources:**

- [Schreiber and Waldorf, Smooth functors vs. differential forms](https://doi.org/10.4310/hha.2011.v13.n1.a7)

### Finite holonomy determines the secondary class

**Remember:** On a finite holonomy group, the Bockstein has an inverse.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.AT, math.DG. Level 4: research.

**Definition.** Parallel transport in a flat bundle gives a group H of transformations around loops, called its holonomy group. A positive-degree integral characteristic class u compatible with an invariant polynomial has a flat differential refinement. Its secondary class is the corresponding cohomology class with ℝ/ℤ coefficients, one degree lower.

**Problem.** For finite H and u of degree at least two, the secondary class pulls back from the unique class on BH with Bockstein −u\|BH. Here BH classifies principal H-bundles, and the Bockstein connects ℝ/ℤ cohomology to integral cohomology.

**How the definition helps.** The secondary class records exactly a lift of the negative integral class through the Bockstein. Our own explanation uses naturality of the universal flat class and vanishing of positive-degree real cohomology of a finite group. The coefficient exact sequence then makes that lift unique on BH.

**nLab:** [secondary characteristic class](https://ncatlab.org/nlab/show/secondary+characteristic+class). It says: “The refined Chern-Weil homomorphism takes values in such "secondary characteristic classes".”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Proposition 2.10](https://doi.org/10.1007/BFb0075216)

### Flat gerbes measure differential string choices

**Remember:** Two paths to zero differ by a loop at zero.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 57R15. arXiv math.CT, math.DG. Level 4: research.

**Definition.** Fix a spin bundle with connection. An untwisted differential string structure is a trivialization of its differential half-Pontryagin class to the zero cocycle, including the connection data. Equivalently, it is a path from the cocycle to zero in the space classifying circle 2-gerbes with connection.

**Problem.** Choosing one such trivialization identifies the space of all such choices with the space of flat circle gerbes, including their isomorphisms and higher symmetries.

**How the definition helps.** Paths with common endpoints can be compared by reversing the chosen path and composing. Our own argument thereby identifies the choices with loops at zero. In the complex of local connection forms, these loops are circle gerbes with closed local 2-forms, precisely the flat gerbes. The path description replaces a direct comparison of local trivializations.

**nLab:** [differential string structure](https://ncatlab.org/nlab/show/differential+string+structure), [circle n-bundle with connection](https://ncatlab.org/nlab/show/circle+n-bundle+with+connection). It says: “is the homotopy fiber of ½ p̂₁(X) over the trivial differential cocycle.”

**Sources:**

- [Fiorenza, Schreiber and Stasheff, Čech cocycles for differential characteristic classes](https://doi.org/10.4310/atmp.2012.v16.n1.a5)

### Form multiplication forces cup products

**Remember:** Two products could differ only by a flat operation on integral classes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 4: research.

**Definition.** In ordinary differential cohomology, a form α determines a class a(α) one degree higher, and each class x has a closed curvature form R(x). A compatible product multiplies curvatures by wedge product and satisfies a(α)x = a(α ∧ R(x)).

**Problem.** On an ordinary character functor, the diagram model of ordinary differential cohomology, at most one natural graded-commutative ring product satisfies these rules.

**How the definition helps.** The form rule makes the difference of two products depend only on the underlying integral classes (our own). The curvature rule makes that difference flat, so it takes values in circle-valued cohomology one degree lower (our own). Simons and Sullivan prove that no such natural bilinear cohomology operation exists (our own).

**nLab:** [ordinary differential cohomology](https://ncatlab.org/nlab/show/ordinary+differential+cohomology). It says: “both these sequences interlock to form the hexagonal differential cohomology diagram of ordinary differential cohomology.”

**Sources:**

- [Simons and Sullivan, Axiomatic characterization of ordinary differential cohomology](https://doi.org/10.1112/jtopol/jtm006)

### Fusion recovers lost gerbes

**Remember:** Fusion remembers how three paths fit together.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A fusion circle bundle on loop space has smooth circle-equivariant tensor isomorphisms L(a,b) ⊗ L(b,c) → L(a,c) for every triple of paths sharing endpoints. Here L(a,b) is the fiber over a followed by reversed b, and the isomorphisms associate for every quadruple. A compatible connection preserves these products and interchanges the factors under half-rotation transport.

**Problem.** On a connected smooth manifold, transgression identifies circle gerbes with connection, up to isomorphism, with fusion circle bundles having superficial connections, up to isomorphism. Superficial connections give phase one on tori of rank at most one and preserve phases during homotopies of rank at most two.

**How the definition helps.** Fusion retains the multiplication needed to reconstruct a gerbe from its loop bundle. Waldorf proves the reconstruction theorem. In our own example, a closed oriented surface of genus two carries a flat gerbe whose phase on the surface differs from one. Every torus map to this surface has degree zero, so the loop connection alone has trivial holonomy.

**nLab:** [transgression of bundle gerbes](https://ncatlab.org/nlab/show/transgression+of+bundle+gerbes). It says: “Lifted transgression L̃ is an equivalence of categories”

**Sources:**

- [K. Waldorf, Transgression to loop spaces and its inverse, II: Gerbes and fusion bundles with connection](https://doi.org/10.4310/ajm.2016.v20.n1.a4)

### Geometric string structures give Pontryagin primitives

**Remember:** Trivialize the 2-gerbe with connection and keep its global three-form.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 57R15. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A geometric string structure for a spin connection is a connection-preserving trivialization of its Chern–Simons 2-gerbe to a trivial 2-gerbe with global 3-curving C.

**Problem.** The derivative of C equals the half-Pontryagin form of the spin connection, with the normalization used for the Chern–Simons 2-gerbe.

**How the definition helps.** The trivial 2-gerbe with curving C has curvature dC. A connection-preserving trivialization identifies this with the Chern–Simons 2-gerbe’s normalized half-Pontryagin form (our own explanation).

**nLab:** [differential string structure](https://ncatlab.org/nlab/show/differential+string+structure). It says: “on a trivial circle n-bundle every connection may be represented by a globally defined n-form.”

**Sources:**

- [Waldorf, String connections and Chern–Simons theory](https://doi.org/10.1090/s0002-9947-2013-05816-3)

### Gerbe automorphisms are flat line bundles

**Remember:** A change that fixes the curving has flat line data.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** In a local Deligne description, a connection-preserving gerbe automorphism consists of closed real one-forms aᵢ and circle-valued functions gᵢⱼ on overlaps. In normalized units they satisfy aⱼ − aᵢ = gᵢⱼ⁻¹dgᵢⱼ/(2πi) and gᵢⱼgⱼₖ = gᵢₖ. Isomorphisms are changes of local unitary frames.

**Problem.** Up to isomorphism, symmetries preserving a gerbe’s connection and local two-forms form the group of flat unitary line bundles under tensor product.

**How the definition helps.** Fixing the patch two-forms forces the change one-forms to be closed, so they define flat local connections (our own). The remaining equations glue them into a line bundle, and equivalent changes give isomorphic bundles (our own). The geometric interpretation requires the comparison between gerbe symmetries and cocycle changes (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “the collection of Deligne cocycles with coefficients in the Deligne complex that defines it, is considerably richer than other models”

**Sources:**

- [Jean-Luc Brylinski, Loop Spaces, Characteristic Classes and Geometric Quantization.](https://doi.org/10.1007/978-0-8176-4731-5)
- [Paweł Gajer, Geometry of Deligne cohomology.](https://doi.org/10.1007/s002220050118)

### Gerbe multiplication builds a bundle 2-gerbe

**Remember:** The group difference on triples turns multiplication into gluing.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 18N10. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A circle gerbe is a higher circle bundle. A multiplicative gerbe on a group identifies the tensor product of its values at g and h with its value at gh. A chosen isomorphism compares the two triple products, and the pentagon identity makes these comparisons agree for four factors.

**Problem.** Every principal G-bundle and multiplicative gerbe on G determine a bundle 2-gerbe on the base, with gerbes as its transition data.

**How the definition helps.** Two points in one bundle fiber determine the unique group element carrying the first to the second. On triples these elements multiply, so gerbe multiplication gives the required transition isomorphism. On quadruples the comparison of triple products gives its associator, and the pentagon supplies the last gluing law. This replaces a separate construction of coherence maps on the overlaps.

**nLab:** [universal Chern-Simons line 3-bundle](https://ncatlab.org/nlab/show/universal+Chern-Simons+line+3-bundle). It says: “the pullback of the multiplicative structure on 𝒢 induces the structure of a bundle 2-gerbe”

**Sources:**

- [Carey, Johnson, Murray, Stevenson and Wang, Bundle gerbes for Chern-Simons and Wess-Zumino-Witten theories](https://doi.org/10.1007/s00220-005-1376-8)

### Higher refined classes stay constant along flat paths

**Remember:** Two time differentials wedge to zero.

*Rules out counterexamples. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 4: research.

**Definition.** A Cheeger–Simons character refines an integral characteristic class whose real image comes from a conjugation-invariant polynomial P. It evaluates cycles modulo integers and integrates P of the connection curvature on boundaries. A flat connection has zero curvature.

**Problem.** Along a smooth path of flat connections on a fixed principal bundle, the refined class stays constant if P has degree at least two. The differential first Chern class can vary.

**How the definition helps.** On the cylinder, every curvature term contains the time differential because each time slice is flat. Two such terms wedge to zero, so the boundary rule gives equal values on the two ends of every swept cycle. In our own example, the connections d + 2πit dx on the trivial line over ℝ/ℤ give different parallel transports around the circle.

**nLab:** [Chern-Simons form](https://ncatlab.org/nlab/show/Chern-Simons+form). It says: “is a form that trivializes the difference between the two curvature characteristic forms”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Proposition 2.9 and §4](https://doi.org/10.1007/BFb0075216)

### Jandl structures allow unoriented holonomy

**Remember:** Reverse the orientation and dualize the gerbe.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** For an involution k, a Jandl structure equips a gerbe 𝒢 with a connection-preserving isomorphism A from k\*𝒢 to its dual. It includes a 2-isomorphism identifying the twice-applied duality with the identity, coherently under a third application.

**Problem.** A Jandl gerbe assigns a phase to a closed unoriented surface mapped from its orientation double cover into the base. The map must intertwine the exchange of sheets with the involution on the base.

**How the definition helps.** In our own explanation, duality compensates for the inversion of the phase when a local orientation changes. The holonomy theorem proves independence from all choices of local orientations. In our own example, use the identity involution on the sphere and a trivial gerbe whose 2-form integrates to one-third. Its phase exp(2πi/3) differs from its inverse, so this gerbe admits no Jandl structure.

**nLab:** [connection on a bundle gerbe](https://ncatlab.org/nlab/show/connection+on+a+bundle+gerbe). It says: “The generalization ("Jandl gerbes") to unoriented surfaces”

**Sources:**

- [U. Schreiber, C. Schweigert and K. Waldorf, Unoriented WZW Models and Holonomy of Bundle Gerbes](https://doi.org/10.1007/s00220-007-0271-x)

### Locally constant coefficients classify flat gerbes

**Remember:** At zero curvature, only locally constant transition data survive.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 18F20. arXiv math.DG, math.CT. Level 4: research.

**Definition.** A flat circle gerbe is a higher circle bundle with connection and zero 3-curvature. Its local description uses circle functions, 1-forms and 2-forms on overlapping patches. Flatness requires the 2-forms to be closed.

**Problem.** On a smooth manifold X, flat circle gerbes, their isomorphisms and the maps between isomorphisms form the mapping space from X to K(ℝ/ℤ, 2). This target has just one nonzero homotopy group, the discrete circle group in degree two.

**How the definition helps.** Closed 2-forms have local primitives, so the Poincaré lemma removes the form data locally and leaves locally constant circle coefficients. The comparison with geometric gerbes identifies the resulting cocycles and all their symmetries.

**nLab:** [circle n-bundle with connection](https://ncatlab.org/nlab/show/circle+n-bundle+with+connection). It says: “by the Poincare lemma applied to each Cartesian space”

**Sources:**

- [Bunke, Nikolaus and Völkl, Differential cohomology theories as sheaves of spectra](https://doi.org/10.1007/s40062-014-0092-5)

### Loop transport computes torus holonomy

**Remember:** A loop of loops sweeps the torus seen by the gerbe.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A circle gerbe with connection assigns a circle value, its holonomy, to each closed oriented surface mapped into the base. Transgression gives a circle bundle with connection on the free loop space. It pulls the gerbe’s differential class back by evaluation and integrates over the loop parameter.

**Problem.** Transport around a closed curve in free loop space has the same holonomy as the gerbe on the torus it traces. Orient the torus in the order used for integration.

**How the definition helps.** Integration over the loop parameter turns evaluation on a curve of loops into evaluation on the swept torus. In our own derivation, this is the evaluation rule for integration of differential characters, which assign circle values to cycles. The comparison theorem identifies the integrated class with the bundle built from gerbe trivializations.

**nLab:** [fiber integration in ordinary differential cohomology](https://ncatlab.org/nlab/show/fiber+integration+in+ordinary+differential+cohomology). It says: “the partial higher holonomy operation for circle n-bundles with connection”

**Sources:**

- [Waldorf, Transgression to loop spaces and its inverse, II](https://doi.org/10.4310/ajm.2016.v20.n1.a4)

### Multiplicative gerbes give product holonomy

**Remember:** The correction gerbe contributes the exponential of its curving integral.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A multiplicative circle gerbe with connection on a Lie group compares its pullback by multiplication with the tensor product of its two pullbacks by projection. The tensor product includes a trivial gerbe with a real 2-form ρ on the group square. The comparison preserves connections and satisfies associativity up to compatible isomorphism.

**Problem.** For smooth maps f and g from a closed oriented surface into the group, their surface phases satisfy h(fg) = h(f)h(g) exp(2πi ∫ (f,g)⁎ρ).

**How the definition helps.** The multiplicative comparison expresses the product phase as three phases, one for each tensor factor. The trivial factor contributes the exponential of its 2-form integral. Our own derivation replaces a local calculation of the product phase with this comparison. Constructing a multiplicative structure with connection is the separate geometric step.

**nLab:** [basic gerbe](https://ncatlab.org/nlab/show/basic+gerbe). It says: “the basic bundle gerbe itself has a multiplicative structure covering that on G”

**Sources:**

- [K. Waldorf, Multiplicative bundle gerbes with connection](https://doi.org/10.1016/j.difgeo.2009.10.006)
- [J. Fuchs, T. Nikolaus, C. Schweigert and K. Waldorf, Bundle gerbes and surface holonomy](https://doi.org/10.4171/077-1/8)

### Rational coefficients kill flat cross terms

**Remember:** The rational refinement discards torsion cross terms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 4: research.

**Definition.** The degree-2r differential Chern character is the r-th Newton polynomial in rationalized differential Chern classes divided by r!. For a flat unitary connection and r ≥ 1, its curvature vanishes, defining its secondary character in degree 2r−1 with coefficients ℝ/ℚ.

**Problem.** In degree 2r−1, the secondary Chern character equals the secondary r-th Chern class multiplied by (−1)ʳ⁻¹/(r−1)!, after passage to ℝ/ℚ coefficients.

**How the definition helps.** The polynomial definition leaves only its linear term because products of two positive-degree flat factors vanish here. Our own explanation uses the flat product formula, which pairs one factor with the rational characteristic class of the other. Flatness kills that rational class by the curvature formula. The Newton identities give the stated coefficient.

**nLab:** [secondary characteristic class](https://ncatlab.org/nlab/show/secondary+characteristic+class). It says: “The refined Chern-Weil homomorphism takes values in such "secondary characteristic classes".”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 8.22](https://doi.org/10.1007/BFb0075216)

### Rigid connections give one curvature class

**Remember:** Different 2-curvings change curvature by a derivative.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.CT. Level 4: research.

**Definition.** For a rigid bundle 2-gerbe with connection, the 2-curving C is a three-form on its cover. Its four-curvature is the unique base form Ω satisfying π\*Ω = dC for the cover projection π.

**Problem.** Any two rigid connections on the same rigid bundle 2-gerbe give 4-curvatures that differ by an exact form.

**How the definition helps.** The four-curvature represents the real characteristic class of the underlying 2-gerbe by the curvature comparison theorem (our own explanation). Both connections therefore give the same de Rham class, so their curvature difference is exact.

**Paper or page:** [Rigid models for 2-gerbes I: Chern-Simons geometry](https://arxiv.org/abs/2209.05521v4). It says: “Hence the de Rham class associated to a rigid bundle 2-gerbe is independent of the choice of rigid connective structure.”

**Sources:**

- [Roberts and Vozzo, Rigid models for 2-gerbes I: Chern-Simons geometry](https://arxiv.org/abs/2209.05521v4)

### Secondary Chern characters satisfy fiber transfer

**Remember:** Take the real secondary class in each degree and alternate signs.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 4: research.

**Definition.** For a flat complex bundle, take the real part of its Cheeger–Chern–Simons class using the coefficient map ℂ/ℚ → ℝ/ℚ. For a finite graded flat bundle, its real secondary character is the sum of these classes with sign (−1)ʲ in degree j.

**Problem.** A flat complex bundle on a smooth family of closed oriented manifolds over a compact base gives flat cohomology bundles on the base. Their alternating real secondary character equals the fiber integral of the original real secondary character times the Euler class of the vertical tangent bundle.

**How the definition helps.** The secondary character puts both sides in the same odd cohomology group, even though ordinary real Chern classes of flat bundles vanish in positive degrees. In our own reading, the alternating sum accounts for the degrees of fiber cohomology. Ho’s local index theorem proves the equality. The vertical tangent bundle consists of the tangent spaces along the fibers.

**Paper or page:** [Local index theory and the Riemann-Roch-Grothendieck theorem for complex flat vector bundles II](https://arxiv.org/abs/2310.06616). It says: “\\operatorname{Re}(\\operatorname{CCS}(H(Z, F\|<sub>Z</sub>), \\nabla <sup>H(Z, F\|<sub>Z</sub>)</sup>))=\\int <sub>X/B</sub>e(T<sup>VX</sup>)\\cup \\operatorname{Re}(\\operatorname{CCS}(F, \\nabla ^F))”

**Sources:**

- [Man-Ho Ho, Local index theory and the Riemann-Roch-Grothendieck theorem for complex flat vector bundles II (2023), real Riemann–Roch–Grothendieck formula](https://arxiv.org/abs/2310.06616)

### Smooth duals exclude point evaluations

**Remember:** The dual must pair with forms by integration, not by sampling.

*Rules out counterexamples. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.AT, math.DG. Level 4: research.

**Definition.** On a closed oriented n-manifold, a degree-k integration character integrates a (k−1)-form over cycles modulo integers. A homomorphism from characters to ℝ/ℤ is smooth if on integration characters it integrates that form wedged with a fixed smooth (n−k+1)-form.

**Problem.** For 1 ≤ k ≤ n, every smooth homomorphism on degree-k characters pairs with a unique degree-(n−k+1) character by multiplication and evaluation on the manifold.

**How the definition helps.** Character multiplication pairs form inputs with a smooth curvature form, which explains the smoothness requirement. Our own counterexample evaluates a circle-valued function at one point of the circle. A smooth density representing this functional would vanish away from that point by testing real functions supported elsewhere, hence vanish everywhere. Existence and uniqueness use the smooth duality theorem.

**nLab:** [Cheeger-Simons differential character](https://ncatlab.org/nlab/show/Cheeger-Simons+differential+character). It says: “Cheeger-Simons differential characters with compact support and Pontryagin duality”

**Sources:**

- [Christian Becker, Marco Benini, Alexander Schenkel and Richard J. Szabo, Cheeger–Simons differential characters with compact support and Pontryagin duality (2019), Definition 5.2 and Theorem 5.4](https://doi.org/10.4310/CAG.2019.v27.n7.a2)

### Thin loops constrain transgression connections

**Remember:** Collapsed tori cannot carry a gerbe phase.

*Rules out counterexamples.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** A loop of loops traces a torus in the base manifold. A connection on a circle bundle over loop space is superficial if transport around every torus of differential rank at most one gives phase one. It must also give equal phases for tori joined by a homotopy of differential rank at most two.

**Problem.** Every circle gerbe with connection induces a superficial connection on its bundle over free loops.

**How the definition helps.** Superficiality records the two rank bounds under which gerbe surface transport loses dependence on the surface. In our own derivation, the surface holonomy formula gives the first condition, and its curvature formula on a homotopy gives the second. In our own counterexample, evaluate loops in a circle at one parameter and pull back a flat connection with nontrivial phase. The circle of constant loops retains that phase although its torus map has rank one.

**nLab:** [transgression of bundle gerbes](https://ncatlab.org/nlab/show/transgression+of+bundle+gerbes). It says: “if φ ∈ LLX, φ̃ : S¹ × S¹ → X has rank one, then”

**Sources:**

- [K. Waldorf, Transgression to loop spaces and its inverse, II: Gerbes and fusion bundles with connection](https://doi.org/10.4310/ajm.2016.v20.n1.a4)

### Transgression lines hold boundary holonomy

**Remember:** Each boundary frame turns the holonomy vector into a phase.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG. Level 4: research.

**Definition.** The transgression line of a circle gerbe with connection assigns a complex line to each smooth loop. Its unit vectors are the ways to identify the gerbe on that loop with the trivial gerbe with zero curving, up to connection-preserving isomorphism.

**Problem.** A smooth map from a compact oriented surface with one parametrized outgoing boundary gives a canonical unit vector in the line of its boundary loop.

**How the definition helps.** The line records how the boundary phase changes when the chosen trivialization changes. In our own explanation, a surface trivialization supplies both a boundary frame and a phase obtained by integrating its 2-form. Changing the trivialization multiplies them by inverse factors, by Stokes for the comparison line bundle. Their product therefore gives the same vector.

**nLab:** [transgression of bundle gerbes](https://ncatlab.org/nlab/show/transgression+of+bundle+gerbes). It says: “for β ∈ LX and where I₀ denotes the trivial gerbe on the circle.”

**Sources:**

- [K. Waldorf, Transgression to loop spaces and its inverse, II: Gerbes and fusion bundles with connection](https://doi.org/10.4310/ajm.2016.v20.n1.a4)
- [J. Fuchs, T. Nikolaus, C. Schweigert and K. Waldorf, Bundle gerbes and surface holonomy](https://doi.org/10.4171/077-1/8)
- [S. Bunk and K. Waldorf, Smooth functorial field theories from B-fields and D-branes](https://link.springer.com/article/10.1007/s40062-020-00272-2)

### Translation symmetries of a gerbe model String

**Remember:** The basic gerbe remembers the extension that makes String.

*Makes the theorem clean to state or prove.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters), 18N10. arXiv math.CT, math.DG. Level 4: research.

**Definition.** A basic circle gerbe on G is a higher circle bundle whose class generates H³(G; ℤ). Its translation symmetries identify the gerbe with its translates and include the isomorphisms between these identifications. Composition gives a smooth 2-group, a group with isomorphisms between its elements.

**Problem.** For compact, simple, simply connected G, this symmetry 2-group models String(G), the cover that also kills the third homotopy group.

**How the definition helps.** Composition of gerbe symmetries supplies the multiplication in the proposed String model. The work in Theorem 1.4 is identifying the homotopy type of this extension.

**Paper or page:** [Smooth 2-Group Extensions and Symmetries of Bundle Gerbes](https://arxiv.org/abs/2004.13395v2). It says: “Then both Symɢ(𝒢) and Desₗ are smooth 2-group models for the string group of G.”

**Sources:**

- [Bunk, Müller and Szabo, Smooth 2-Group Extensions and Symmetries of Bundle Gerbes, Theorem 1.4](https://arxiv.org/abs/2004.13395v2)

### Universal differential classes commute with pullback

**Remember:** Pull back one differential class to every bundle with connection.

*True by definition.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.CT. Level 4: research.

**Definition.** For a compact Lie group, a universal differential characteristic class is a map from the stack of bundles with connection to differential cohomology. A stack records families and their isomorphisms. The map refines an even positive degree integral class by recording its characteristic curvature form.

**Problem.** Pulling back a bundle with connection pulls back its differential characteristic class along the same smooth map.

**How the definition helps.** A bundle receives its differential class by composition with the universal map. In our own comparison, computing a class separately from each connection would require checking naturality. Here composition gives naturality once the universal map with the prescribed curvature has been constructed.

**Paper or page:** [Bordism for the 2-group symmetries of the heterotic and CHL strings](https://arxiv.org/abs/2304.14764v1). It says: “there is a map č : B∇G → Bᵏ⁻¹∇𝕋 natural in (G, c)”

**Sources:**

- [Debray, Bordism for the 2-group symmetries of the heterotic and CHL strings, Theorem 22](https://arxiv.org/abs/2304.14764v1)

### Whitney sums multiply differential Chern classes

**Remember:** Compare both projections where both bundles are universal.

*True by definition. Confidence: medium.* MSC 53C08 (Differential geometric aspects of gerbes and differential characters). arXiv math.DG, math.AT. Level 4: research.

**Definition.** The differential Chern classes are natural character assignments for Hermitian bundles with unitary connection. Their curvatures are the Chern forms computed from the connection, and their integral classes are the ordinary Chern classes. The total class is their sum, including the degree-zero unit.

**Problem.** For a direct sum with its block sum connection, the total differential Chern class equals the product of the total classes of the summands.

**How the definition helps.** Characterizing the assignment by naturality and its two projections reduces the formula to the ordinary sum formulas for classes and curvature forms. Our own comparison treats a pair of bundles as one bundle for the product of their unitary groups. The uniqueness theorem there replaces a direct calculation on cycles.

**nLab:** [Cheeger-Simons homomorphism](https://ncatlab.org/nlab/show/Cheeger-Simons+homomorphism). It says: “refines this to an assignment of secondary characteristic classes in ordinary differential cohomology to principal connections”

**Sources:**

- [Jeff Cheeger and James Simons, Differential characters and geometric invariants (1985), Theorem 4.6](https://doi.org/10.1007/BFb0075216)

### Singular foliations as modules of vector fields always have holonomy groupoids

**Remember:** Remember the vector fields, not only the leaves.

*Makes the theorem clean to state or prove.* MSC 53C12 (Foliations (differential geometric aspects)), 58H05. arXiv math.DG. Level 4: research.

**Definition.** A singular foliation on a smooth manifold M is a locally finitely generated C∞(M)-submodule of compactly supported smooth vector fields closed under the Lie bracket.

**Problem.** Every singular foliation in this sense has a holonomy groupoid H(F). It is minimal in the sense that every source-connected Lie groupoid integrating F maps onto H(F).

**How the definition helps.** The module specifies the vector fields used to build local flow charts, including near leaves of changing dimension. The Androulidakis–Skandalis holonomy groupoid theorem constructs H(F) from these charts and proves its minimality (our own summary).

**Paper or page:** [The Holonomy Groupoids of Singularly Foliated Bundles](https://arxiv.org/abs/2006.14271). It says: “Let M be a manifold with a singular foliation F. Then there exists a topological groupoid H(F) for which the following hold. H(F) integrates the foliation F, in the sense that its orbits are the leaves of F.”

**Sources:**

- [L. E. MacDonald, The Holonomy Groupoids of Singularly Foliated Bundles, SIGMA 17 (2021), 043](https://arxiv.org/abs/2006.14271)
- [I. Androulidakis and G. Skandalis, The holonomy groupoid of a singular foliation, Journal für die reine und angewandte Mathematik 626 (2009) 1–37](https://doi.org/10.1515/crelle.2009.001)

### Distributional Ricci curvature lets the splitting theorem hold for C¹ metrics

**Remember:** Curvature tested against bump functions keeps its sign for C¹ metrics.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C21 (Methods of global Riemannian geometry, including PDE methods; curvature restrictions), 53C23. arXiv math.DG, math.MG. Level 4: research.

**Definition.** For a C¹ Riemannian metric, take Ricci curvature in the sense of distributions. It is nonnegative if Ric(X,X) evaluates nonnegatively on every nonnegative smooth compactly supported test density for every smooth compactly supported vector field X.

**Problem.** A complete connected C¹ Riemannian manifold with distributionally nonnegative Ricci curvature and a line splits C¹-isometrically as a product with ℝ. A line is a unit-speed geodesic defined on ℝ that minimizes length between every pair of its points.

**How the definition helps.** Testing against densities gives the Ricci hypothesis a meaning at C¹ regularity. The low-regularity Cheeger–Gromoll splitting theorem supplies the product by weak estimates (our own explanation).

**Paper or page:** [Ricci curvature bounds and rigidity for non-smooth Riemannian and semi-Riemannian metrics](https://arxiv.org/abs/2406.06762). It says: “Let (M,g) be a complete, connected Riemannian manifold with metric of regularity C¹. Let Ric≥0 in the distributional sense”

**Sources:**

- [M. Kunzinger, A. Ohanyan and A. Vardabasso, Ricci curvature bounds and rigidity for non-smooth Riemannian and semi-Riemannian metrics, arXiv:2406.06762 (2024)](https://arxiv.org/abs/2406.06762)
- [J. Cheeger and D. Gromoll, The splitting theorem for manifolds of nonnegative Ricci curvature, Journal of Differential Geometry 6 (1971) 119–128](https://doi.org/10.4310/jdg/1214430220)

### Enlargeability makes the torus obstruction to positive scalar curvature immediate

**Remember:** Big covers that shrink onto a sphere forbid positive scalar curvature.

*Makes the theorem clean to state or prove.* MSC 53C21 (Methods of global Riemannian geometry, including PDE methods; curvature restrictions), 58J22. arXiv math.DG, math.KT. Level 4: research.

**Definition.** Fix a closed oriented Riemannian n-manifold. It is enlargeable if for every ε &gt; 0 some spin Riemannian cover admits a smooth ε-Lipschitz map to the unit n-sphere. The map must have nonzero degree and be constant outside a compact set.

**Problem.** No enlargeable closed spin manifold carries a metric of positive scalar curvature (Gromov–Lawson). In particular the n-torus carries no such metric.

**How the definition helps.** The torus is enlargeable at a glance, since its large covers are big tori that map onto the sphere with little stretching (our own). The definition supplies what the index argument needs, a pulled-back bundle that is almost flat but has non-zero twisted Dirac index (our own). Positive scalar curvature would kill that index through the Lichnerowicz formula, because the bundle's curvature is small. For infinite covers, the work went into the relative index theorem on non-compact manifolds.

**Wikipedia:** [Scalar curvature](https://en.wikipedia.org/wiki/Scalar_curvature). It says: “introduces the homotopy-theoretic notion of enlargeability and says that an enlargeable spin manifold cannot have a Riemannian metric of positive scalar curvature.”

**Paper or page:** [The Gromov-Lawson index and the Baum-Connes assembly map](https://arxiv.org/abs/2103.03495v1). It says: “An enlargeable spin closed manifold cannot hold a PSC metric.”

**Sources:**

- [M. Gromov and H. B. Lawson, Positive scalar curvature and the Dirac operator on complete Riemannian manifolds, Publications Mathématiques de l'IHÉS (1983)](https://doi.org/10.1007/BF02953774)

### A four-point definition of nonnegative curvature makes it survive Gromov–Hausdorff limits

**Remember:** Three times the sum of squared radii bounds the sum of squared sides.

*True by definition. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 51F99. arXiv math.MG. Level 4: research.

**Definition.** A complete length space has nonnegative Alexandrov curvature if every quadruple p,x,y,z satisfies 3(\|px\|² + \|py\|² + \|pz\|²) ≥ \|xy\|² + \|yz\|² + \|zx\|². Here \|ab\| denotes the distance between a and b.

**Problem.** A compact limit of compact Alexandrov spaces with curvature at least zero also has curvature at least zero. The limit is in Gromov–Hausdorff distance, which compares metric spaces by near-isometric matchings.

**How the definition helps.** A matching of vanishing distortion approximates all six distances at once, so the inequality passes to the limit (our own argument). Compact Gromov–Hausdorff limits of compact length spaces remain length spaces. Lebedeva and Petrunin identify this four-point test with triangle comparison.

**Paper or page:** [Curvature bounded below: a definition a la Berg--Nikolaev](https://arxiv.org/abs/1008.3318). It says: “Let X be a complete space with intrinsic metric. Then X is an Alexandrov space with curvature ≥ 0 if and only if any quadruple p,x,y,z ∈ X satisfies the following inequality”

**Sources:**

- [Yuri Burago, Mikhail Gromov, and Grigori Perelman, A.D. Alexandrov spaces with curvature bounded below (1992)](https://doi.org/10.1070/RM1992v047n02ABEH000877)

### Encoding comparisons by graphs shows each nontrivial one implies an Alexandrov comparison

**Remember:** Edges shorten and nonedges lengthen in the comparison space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54E35. arXiv math.MG. Level 4: research.

**Definition.** A metric space X satisfies comparison for a finite graph Γ if every placement of its vertices in X admits a placement in Hilbert space. Edge distances must weakly decrease and all other pairwise distances must weakly increase.

**Problem.** Every finite graph comparison either holds in every metric space or implies comparison for the four-cycle C₄ or the three-legged star T₃.

**How the definition helps.** The graph specifies all inequality directions, so implication becomes a relation between graphs (our own explanation). The graph-comparison classification proves that every nontrivial comparison implies the four-cycle or tripod comparison.

**Paper or page:** [Graph comparison meets Alexandrov](https://arxiv.org/abs/2212.08016v2). It says: “We show that any nontrivial graph comparison implies one of Alexandrov's comparisons.”

**Sources:**

- [Nina Lebedeva, Anton Petrunin, Graph comparison meets Alexandrov, Siberian Mathematical Journal 64 (2023), 624–628; arXiv:2212.08016](https://arxiv.org/abs/2212.08016v2)

### Optimal transport defines Ricci bounds that survive Gromov–Hausdorff limits

**Remember:** Impose curvature-dimension convexity on entropy and the parallelogram law on energy.

*Makes the theorem clean to state or prove.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C21, 49Q22. arXiv math.DG, math.MG. Level 4: research.

**Definition.** Use the curvature-dimension condition CD(K,N) of Lott, Sturm and Villani on a complete separable geodesic metric measure space. The Riemannian condition additionally requires Ch(f+g) + Ch(f−g) = 2Ch(f) + 2Ch(g) for every f,g of finite Cheeger energy Ch.

**Problem.** Normalized pointed RCD(K,N) spaces are closed under pointed measured Gromov–Hausdorff convergence. This includes such limits of complete Riemannian manifolds with Ricci curvature at least K and dimension at most N.

**How the definition helps.** The entropic characterization formulates the bound using distance, measure, and energy on the limit space. The RCD stability theorem preserves both the entropy condition and quadratic energy under this convergence (our own explanation).

**Paper or page:** [On perimeter minimizing sets in manifolds with quadratic volume growth](https://arxiv.org/abs/2504.10413), [On the equivalence of distributional and synthetic Ricci curvature lower bounds](https://arxiv.org/abs/2402.06486). It says: “The class of pointed RCD(K,N) spaces with normalized measures is sequentially compact with respect to pointed measured Gromov-Hausdorff convergence.”

**Sources:**

- [A. Cucinotta and M. Magnabosco, On perimeter minimizing sets in manifolds with quadratic volume growth, arXiv:2504.10413 (2025)](https://arxiv.org/abs/2504.10413)
- [A. Mondino and V. Ryborz, On the equivalence of distributional and synthetic Ricci curvature lower bounds, arXiv:2402.06486 (2024)](https://arxiv.org/abs/2402.06486)
- [J. Lott and C. Villani, Ricci curvature for metric-measure spaces via optimal transport, Annals of Mathematics 169 (2009) 903–991](https://doi.org/10.4007/annals.2009.169.903)
- [K.-T. Sturm, On the geometry of metric measure spaces, Acta Mathematica 196 (2006) 65–131](https://doi.org/10.1007/s11511-006-0002-8)

### Projections onto geodesics give Hadamard spaces a weak convergence with compactness

**Remember:** Without functionals, project onto geodesics instead.

*Makes the theorem clean to state or prove.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54A20. arXiv math.FA, math.MG. Level 4: research.

**Definition.** In a complete CAT(0) space, a bounded sequence converges weakly to x if for each geodesic segment starting at x its projections converge to x.

**Problem.** In a Hadamard space, every bounded sequence has a weakly convergent subsequence. Bounded closed convex sets are weakly sequentially compact.

**How the definition helps.** Geodesic segments test convergence using only the metric (our own explanation). The Δ-compactness theorem gives every bounded sequence a Δ-convergent subsequence, and projection convergence agrees with Δ-convergence. Closed convex sets contain the asymptotic centers of their bounded sequences, so they contain the subsequential limits.

**Paper or page:** [On a weak topology for Hadamard spaces and its applications](https://arxiv.org/abs/2204.01461v4), [On a weak topology for Hadamard spaces and its applications](https://arxiv.org/abs/2204.01461v4), [A product of strongly quasi-nonexpansive mappings in Hadamard spaces](https://arxiv.org/abs/2504.21402v1). It says: “Any bounded closed convex set K in a Hadamard space is weakly sequentially compact and therefore τw-sequentially compact.”

**Sources:**

- [Arian Bërdëllima, On a weak topology for Hadamard spaces and its applications, arXiv:2204.01461 (2022), Sbornik Math. 214(10) (2023)](https://arxiv.org/abs/2204.01461v4)
- [W. A. Kirk, B. Panyanak, A concept of convergence in geodesic spaces, Nonlinear Anal. 68 (2008) 3689–3696](https://doi.org/10.1016/j.na.2007.04.011)

### The four-point curvature test passes nonnegative curvature down through submetries

**Remember:** Lift points at their original radii, then use that projection shrinks the sides.

*True by definition. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 51F99. arXiv math.MG, math.DG. Level 4: research.

**Definition.** A submetry maps each closed ball onto the closed ball of the same radius around the image of its center. Here use the four-point test for nonnegative curvature: \|px\|² + \|py\|² + \|pz\|² ≥ (\|xy\|² + \|yz\|² + \|zx\|²)/3. The usual definition compares triangles.

**Problem.** Let a submetry map a complete, locally compact length space onto another. If the source has nonnegative Alexandrov curvature, so does the target.

**How the definition helps.** Lift the center of four points, then lift the other three at the same distances, as the ball property allows (our own argument). The left side of the test is unchanged and the right side can only shrink in the target (our own). With triangle comparison, one must lift geodesics instead (our own comparison). The work moves to the theorem that the four-point test is equivalent to triangle comparison.

**Wikipedia:** [Glossary of Riemannian and metric geometry](https://en.wikipedia.org/wiki/Glossary_of_Riemannian_and_metric_geometry). It says: “the image of metric r-ball is an r-ball”

**Sources:**

- [Barrett O’Neill, The fundamental equations of a submersion (1966)](https://doi.org/10.1307/mmj/1028999604)

### Curvature as a measure lets any total 2πχ be realized

**Remember:** Let curvature be a measure, and cone points join smooth surfaces.

*Makes the theorem clean to state or prove.* MSC 53C45 (Global surface theory (convex surfaces à la A. D. Aleksandrov)), 53C23. arXiv math.DG, math.MG. Level 4: research.

**Definition.** Fix an intrinsic metric on a closed surface. It has bounded integral curvature if it is a uniform limit of smooth Riemannian distances with uniformly bounded total absolute Gaussian curvature. Its curvature measure is the weak limit of their Gaussian curvature measures.

**Problem.** Fix a conformal structure on a closed connected surface S. Every signed Radon measure ω with total mass 2πχ(S) and ω({x}) &lt; 2π at every x occurs as curvature in that conformal class.

**How the definition helps.** Curvature measures express Gauss–Bonnet as a total mass condition for both smooth and singular metrics. The prescribed-curvature theorem for surfaces of bounded integral curvature constructs the conformal metric under the stated atom bound (our own explanation).

**Paper or page:** [On Alexandrov's Surfaces with Bounded Integral Curvature](https://arxiv.org/abs/2201.03354), [On Alexandrov's Surfaces with Bounded Integral Curvature](https://arxiv.org/abs/2201.03354). It says: “For any conformal structure on a closed surface S and any signed Radon measure dω on S such that ∫ₛ dω = 2πχ(S) and ω({x}) &lt; 2π for any point x ∈ S, there exists an Alexandrov metric”

**Sources:**

- [M. Troyanov, On Alexandrov's Surfaces with Bounded Integral Curvature, arXiv:2201.03354 (2022)](https://arxiv.org/abs/2201.03354)

### Averaged volume functions are time functions exactly in causally continuous spaces

**Remember:** Average the size of causal pasts and futures to build clocks.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 53C23. arXiv gr-qc, math.MG. Level 4: research.

**Definition.** Fix a finite full-support measure on the underlying metric space. For each point, average the measures of its chronological past’s open r-neighborhoods over 0 &lt; r &lt; 1. Use the same average with a minus sign for its chronological future.

**Problem.** In a second countable, locally compact Lorentzian length space, the averaged volume functions are time functions exactly when the space is causally continuous. Causal continuity requires both that causal pasts and futures distinguish points and that past and future comparisons agree.

**How the definition helps.** The averaged functions use only metric neighborhoods, chronology, and measure (our own explanation). The averaged-volume characterization of causal continuity proves continuity and strict increase in both time directions with the stated signs.

**Paper or page:** [Time functions on Lorentzian length spaces](https://arxiv.org/abs/2108.02693v3). It says: “Let X be a second countable, locally compact Lorentzian length space. Then X causally continuous if and only if the averaged volume functions on X are time functions.”

**Sources:**

- [Annegret Burtscher, Leonardo García-Heveling, Time functions on Lorentzian length spaces, arXiv:2108.02693v3 (2024), Ann. Henri Poincaré 26, 1533--1572 (2025)](https://arxiv.org/abs/2108.02693v3)

### Bubble-free metrics restore timelike approximation

**Remember:** Without causal bubbles, timelike paths can approach lightlike reach.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83C99. arXiv gr-qc. Level 4: research.

**Definition.** At each point p, use sufficiently small cylindrical neighborhoods U and let Ĩ⁺(p,U) unite the timelike futures for smooth metrics with strictly narrower cones. Causal plainness requires the boundaries in U of Ĩ⁺(p,U) and the causal future J⁺(p,U) to agree, with the same requirement for pasts.

**Problem.** In sufficiently small such neighborhoods of a causally plain spacetime, timelike paths reach points arbitrarily close to each causally reachable endpoint. A timelike path stays inside the cones.

**How the definition helps.** Boundary agreement excludes a causal bubble, an open reachable region outside the closure of the timelike future (our own explanation). The two local future boundaries are graphs. The narrower-cone future fills the region above its graph, so it approaches every point on the common graph.

**Paper or page:** [Causal bubbles in globally hyperbolic spacetimes](https://arxiv.org/abs/2207.01392). It says: “consists of points in $J<sup>+</sup>(0)\\setminus \\overline{I<sup>+</sup>(0)}$.”

**Sources:**

- [Causal bubbles in globally hyperbolic spacetimes](https://arxiv.org/abs/2207.01392)

### Globally hyperbolic spacetimes are exactly those properly conformally embeddable in Minkowski space

**Remember:** A closed image prevents causal curves from escaping through a missing point.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 53C42. arXiv gr-qc, math.DG. Level 4: research.

**Definition.** A proper conformal embedding of a spacetime (M,g) into Minkowski space is a smooth embedding f satisfying f\*η = Ω²g with Ω smooth and positive. The preimage of every compact set must be compact.

**Problem.** A smooth spacetime admits a proper conformal embedding into some Minkowski space exactly when it is globally hyperbolic.

**How the definition helps.** Properness excludes finite missing limit points, as the punctured Minkowski example shows (our own explanation). Its inclusion preserves cones, but a causal diamond crossing the puncture can fail to be compact. The proper conformal embedding theorem proves the equivalence, including existence of the embedding for globally hyperbolic spacetimes.

**Paper or page:** [Lorentzian manifolds properly isometrically embeddable in Minkowski spacetime](https://arxiv.org/abs/2303.05941v1). It says: “Moreover, I prove that the Lorentzian manifolds that can be properly conformally embedded in Minkowski spacetime coincide with the globally hyperbolic spacetimes.”

**Sources:**

- [E. Minguzzi, Lorentzian manifolds properly isometrically embeddable in Minkowski spacetime, arXiv:2303.05941v1 (2023), Letters in Mathematical Physics 113, 67 (2023)](https://arxiv.org/abs/2303.05941v1)

### Nearly timelike paths restore semicontinuity

**Remember:** Keep causal paths whose segments can be approached by timelike signals.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics). arXiv gr-qc. Level 4: research.

**Definition.** A future-directed causal path γ is nearly timelike if γ(t) lies in the closure of I⁺(γ(s)) whenever s &lt; t. Also γ(s) must lie in the closure of I⁻(γ(t)) for every such pair. Time separation is the supremum of lengths of nearly timelike paths joining the endpoints, or zero when none exist.

**Problem.** For a continuous spacetime metric, nearby endpoint pairs have time separation above any strict lower bound for the original pair. For a smooth metric, this definition gives the usual time separation.

**How the definition helps.** The closure tests exclude causal bubbles that timelike signals cannot approach (our own explanation). The lower semicontinuity theorem uses those tests to perturb endpoints while losing arbitrarily little positive length. For smooth metrics the push-up property gives the closure tests for every causal path.

**Paper or page:** [A lower semicontinuous time separation function for C⁰ spacetimes](https://arxiv.org/abs/2308.10182v3). It says: “τ is lower semicontinuous.”

**Sources:**

- [Eric Ling, A lower semicontinuous time separation function for C⁰ spacetimes](https://arxiv.org/abs/2308.10182v3)

### Null distance straightens causal curves

**Remember:** One causal segment costs exactly its clock change.

*True by definition.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics). arXiv gr-qc, math.DG. Level 4: research.

**Definition.** A time function is a continuous clock reading that increases along every future path moving at or below light speed. To define null distance, join two events by such paths, allowing reversals between pieces. Take the infimum of the sums of absolute clock changes.

**Problem.** On a causal curve, null distance between any two points equals their absolute clock difference. Where null distance is a metric, clock time makes the curve an isometric copy of an interval.

**How the definition helps.** Adding absolute clock changes makes a path without reversals as cheap as possible. In our own proof, the triangle inequality bounds every sum below by the endpoint difference. A single causal segment attains that bound, even for light, whose ordinary proper time vanishes. Proving that null distance separates arbitrary events needs further assumptions on the clock.

**Paper or page:** [Limit curve theorems for incomplete metric spaces and the null distance on Lorentzian manifolds](https://arxiv.org/abs/2511.05847v1). It says: “d(γ ∘ s(t₁), γ ∘ s(t₂); f) = \|t₁−t₂\|”

**Sources:**

- [Limit curve theorems for incomplete metric spaces and the null distance on Lorentzian manifolds](https://arxiv.org/abs/2511.05847v1)

### Shortest spatial paths settle lightlike reachability

**Remember:** A trip with exactly enough time needs an actual shortest path.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83F05. arXiv gr-qc, math.DG. Level 4: research.

**Definition.** Let spatial lengths at time t equal their fixed reference lengths multiplied by a positive continuous scale factor. The reference metric is geodesic if each pair of points has a shortest path. A length metric only requires paths whose lengths approach the distance.

**Problem.** Available conformal time is the integral of the reciprocal scale factor between two event times. For a geodesic reference metric, a signal reaches the later event exactly when the reference distance is at most the available conformal time.

**How the definition helps.** A shortest spatial path attains the distance bound when traversed at constant speed in conformal time (our own argument). Conversely, the causal speed limit bounds reference length by elapsed conformal time. In the punctured Euclidean plane, detours between opposite points approach their straight-line distance without attaining it (our own example).

**Paper or page:** [Bonnet-Myers rigidity theorem for globally hyperbolic Lorentzian length spaces](https://arxiv.org/abs/2401.17017v3). It says: “if Y is strictly intrinsic the causal relation agrees”

**Sources:**

- [Bonnet-Myers rigidity theorem for globally hyperbolic Lorentzian length spaces](https://arxiv.org/abs/2401.17017v3)

### Timelike convergence rules out de Sitter

**Remember:** Light can miss the curvature that makes timelike lines fail to split spacetime.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83C20. arXiv gr-qc, math.DG. Level 4: research.

**Definition.** A spacetime satisfies timelike convergence if Ric(v,v) ≥ 0 for every timelike tangent vector v at every point.

**Problem.** Suppose a globally hyperbolic spacetime satisfies timelike convergence and contains a complete timelike line. Such a line maximizes elapsed proper time between any two of its points and extends indefinitely in both directions. The spacetime then splits into time and space with metric −dt² + h, where the spatial metric h is independent of time.

**How the definition helps.** Timelike convergence excludes de Sitter spacetime, whose Ricci tensor is a positive multiple of its metric (our own example). Null vectors give zero, but timelike vectors give negative values. Constant spatial positions trace complete maximizing lines, while a static product would have zero Ricci curvature along time. Galloway’s Lorentzian splitting theorem gives the conclusion under timelike convergence.

**Paper or page:** [An elliptic proof of the splitting theorems from Lorentzian geometry](https://arxiv.org/abs/2410.12632v1). It says: “R(v,v) ≥ 0 for all timelike vectors”

**Sources:**

- [Gregory J. Galloway (1989), The Lorentzian splitting theorem without the completeness assumption](https://doi.org/10.4310/jdg/1214442881)

### Weak metrics make the Funk metric the length metric of a domain

**Remember:** Drop symmetry, and every convex domain measures itself.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C60 (Global differential geometry of Finsler spaces and generalizations (areal metrics)), 51F30. arXiv math.DG, math.MG. Level 4: research.

**Definition.** For an open convex Euclidean domain Ω, the tautological weak Finsler norm is F(x,v) = inf{t &gt; 0 : x + v/t ∈ Ω}. Its length distance takes the infimum of ∫F(γ,γ′) over piecewise smooth paths between the given endpoints.

**Problem.** On a convex domain Ω, the length metric of the tautological weak Finsler structure is exactly the Funk metric. Euclidean segments are shortest paths for it.

**How the definition helps.** The Funk distance formula identifies the integral along the straight segment with the logarithmic boundary-distance ratio. Supporting hyperplanes give that ratio as a lower bound for every competing path, proving minimality (our own explanation). If the forward ray never meets the boundary, the segment costs zero.

**Paper or page:** [Weak Finsler Strutures and the Funk Metric](https://arxiv.org/abs/0804.0705), [Weak Finsler Strutures and the Funk Metric](https://arxiv.org/abs/0804.0705). It says: “We compute distances in the tautological weak Finsler structure of a domain and we show that these are given by the so-called Funk weak metric.”

**Sources:**

- [A. Papadopoulos and M. Troyanov, Weak Finsler structures and the Funk metric, arXiv:0804.0705 (2008)](https://arxiv.org/abs/0804.0705)

### Defining Zoll by a loop index makes Zoll bodies closed under limits

**Remember:** Test whether the circle index of the shortest characteristics reaches half the ambient dimension.

*Makes the theorem clean to state or prove.* MSC 53D05 (Symplectic manifolds (general theory)), 37J46, 52A20. arXiv math.SG. Level 4: research.

**Definition.** Take the space of action-minimizing generalized closed characteristics on a convex body in ℝ²ⁿ, with circle action by shifts of starting time. The body is generalized Zoll if the Fadell–Rabinowitz index of this systole space is at least n.

**Problem.** Generalized Zoll convex bodies form a Hausdorff-closed set. With the origin in the interior and smooth boundary, this condition is equivalent to all Reeb trajectories being closed with the same least period for the standard boundary contact form.

**How the definition helps.** Upper semicontinuity of the systolic index preserves the threshold n under Hausdorff limits. The cited paper proves upper semicontinuity and identifies this threshold with the classical Zoll condition for smooth boundaries (our own summary).

**Paper or page:** [Systolic S¹-index and characterization of non-smooth Zoll convex bodies](https://arxiv.org/abs/2501.13856v3). It says: “The space of generalized Zoll convex bodies is closed in the space of all convex bodies with respect to the Hausdorff distance topology.”

**Sources:**

- [Stefan Matijević, Systolic S¹-index and characterization of non-smooth Zoll convex bodies, arXiv:2501.13856v3 (2025)](https://arxiv.org/abs/2501.13856v3)

### Loose charts make formal isotopy sufficient

**Remember:** A loose chart lets formal tangent data classify actual embeddings.

*Makes the theorem clean to state or prove.* MSC 53D10 (Contact manifolds (general theory)). arXiv math.SG. Level 4: research.

**Definition.** A formal Legendrian embedding consists of an embedding and a homotopy of injective tangent bundle maps over it, starting at its derivative. The final map takes each tangent space onto a Lagrangian subspace of the contact plane. A Legendrian embedding is loose if a contact chart identifies it locally with Murphy’s loose chart.

**Problem.** In contact dimension at least five, every formal Legendrian isotopy class of closed connected knots has a loose representative, unique up to ambient contact isotopy.

**How the definition helps.** The loose chart singles out the knots that formal tangent data can classify. Here isotopy means continuous deformation through the relevant embeddings, and ambient contact isotopy moves the surrounding space while preserving its contact planes. In our own explanation, the chart provides room for the local changes in Murphy’s proof. Her deformation theorem supplies existence and uniqueness.

**Paper or page:** [Loose Legendrian embeddings in high dimensional contact manifolds](https://arxiv.org/abs/1201.2245v5). It says: “Then for each formal Legendrian isotopy class there is a loose Legendrian knot in that class, unique up to ambient contact isotopy.”

**Sources:**

- [Loose Legendrian embeddings in high dimensional contact manifolds, Theorem 1.2](https://arxiv.org/abs/1201.2245v5)

### Higher crossing forms compute the Maslov index at degenerate crossings

**Remember:** At a flat crossing, use the first derivative that does not vanish.

*Makes the theorem clean to state or prove.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 37K45. arXiv math.AP, math.SG. Level 4: research.

**Definition.** Near an isolated Maslov crossing, represent the moving Lagrangian as a symmetric graph over the reference plane using a common Lagrangian complement. Eliminate a nonsingular block by Schur complement to obtain a symmetric form S(t) on the crossing kernel, with S(t₀) = 0. When its lower derivatives vanish, the order-j crossing form is S⁽ʲ⁾(t₀) in the positive spectral-flow convention.

**Problem.** Take an isolated crossing inside the interval where the forms of orders 1 to j − 1 vanish and the order j form is nondegenerate. The crossing contributes zero to the Maslov index if j is even. It contributes the signature of the order j form if j is odd.

**How the definition helps.** The leading form determines the small eigenvalues’ signs on both sides of the crossing (our own explanation). An even power leaves their signs unchanged, while an odd power reverses them. The local spectral-flow formula counts these changes with sign, giving the stated signature.

**Paper or page:** [The Maslov index, degenerate crossings and the stability of pulse solutions to the Swift-Hohenberg equation](https://arxiv.org/abs/2403.04003v4). It says: “We extend their formulation of the Maslov index to degenerate crossings of general order in the case where the intersection is fully degenerate”

**Sources:**

- [Margaret Beck, Jonathan Jaquette, Hannah Pieper, The Maslov index, degenerate crossings and the stability of pulse solutions to the Swift-Hohenberg equation, arXiv:2403.04003 (2025)](https://arxiv.org/abs/2403.04003v4)

### Monotonicity excludes Maslov-zero disk bubbles

**Remember:** Positive area forces positive Maslov index.

*Rules out counterexamples.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 53D40. arXiv math.SG. Level 4: research.

**Definition.** A Lagrangian L in (X,ω) is monotone if some λ &gt; 0 satisfies ∫ᵦω = λμ(β) for every relative disk class β in π₂(X,L). Here μ is the Maslov index of its boundary tangent data.

**Problem.** Fix an almost complex structure compatible with the symplectic form and a compact orientable monotone Lagrangian. Every nonconstant holomorphic disk with boundary on it has Maslov index at least two. A stable holomorphic disk of total index two has at most one nonconstant disk component.

**How the definition helps.** Monotonicity converts positive area into positive index, and orientability makes that index even (our own). Every nonconstant sphere bubble also contributes positive index because its area obeys the same relation in relative homotopy (our own). The indices add, so two nonconstant disk components would contribute at least four (our own). Auroux’s Lemma 5.4 gives a torus bounding a nonconstant index-zero disk when the defining loop passes through zero (our own example choice).

**Paper or page:** [Cluster algebras and monotone Lagrangian tori](https://arxiv.org/abs/2401.00252v2). It says: “Suppose that L is a monotone Lagrangian submanifold of (X,ω).”

**Sources:**

- [Cluster algebras and monotone Lagrangian tori](https://arxiv.org/abs/2401.00252v2)
- [Auroux, Mirror symmetry and T-duality in the complement of an anticanonical divisor](https://people.math.harvard.edu/~auroux/papers/slagmirror.pdf)

### Dual maps detect Lie algebroid morphisms

**Remember:** The Poisson bracket reads the original bracket and anchor from linear functions.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 4: research.

**Definition.** On the dual of a Lie algebroid with anchor ρ, write ℓₛ for evaluation on section s and identify base functions with their pullbacks. The linear Poisson bracket satisfies {ℓₛ,ℓₜ} = ℓ\_\[s,t\], {ℓₛ,f} = ρ(s)f, and {f,g} = 0 for all sections and base functions.

**Problem.** Fix a vector bundle map between two Lie algebroids over the identity of their common base. It preserves the section bracket and anchor exactly when its dual preserves Poisson brackets by pullback.

**How the definition helps.** The linear Poisson bracket records the section bracket and the anchor in its two potentially nonzero generator brackets (our own proof). Pullback along the dual carries each section function to the function of its image and fixes base functions. These functions supply local coordinates, so checking their brackets suffices.

**Paper or page:** [Comomentum sections and Poisson maps in Hamiltonian Lie algebroids](https://arxiv.org/abs/2405.03533v2). It says: “the dual map ψ: A₂∗ → A₁∗ is a Poisson map.”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicative forms reverse under inversion

**Remember:** An arrow and its inverse multiply to a unit, where the form vanishes.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 4: research.

**Definition.** A symplectic groupoid has a symplectic form ω on its arrow manifold satisfying m\*ω = pr₁\*ω + pr₂\*ω on composable pairs. Here m multiplies the arrows and the two projections select the factors.

**Problem.** Inversion in a symplectic groupoid pulls back the symplectic form to its negative.

**How the definition helps.** Pulling the multiplicativity identity back along a pair of identical units shows that the unit pullback equals twice itself, hence vanishes (our own proof). Pair each arrow with its inverse. Their product is a unit, so ω plus its pullback under inversion vanishes.

**nLab:** [symplectic groupoid](https://ncatlab.org/nlab/show/symplectic+groupoid). It says: “multiplicative in that the alternating sum of its canonical pullbacks to the space X₂ of composable morphisms vanishes”

**Sources:** none listed. No primary source with a working link was found.

### Vanishing ideals give Poisson reduction

**Remember:** Use only functions whose brackets preserve vanishing on the submanifold.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction). arXiv math.SG. Level 4: research.

**Definition.** A Poisson bracket is a Lie bracket on functions that satisfies the product rule. Let I consist of smooth functions vanishing on a closed embedded submanifold S. Call S coisotropic if bracketing any two members of I gives another member of I.

**Problem.** Let N consist of functions f such that bracketing f with any member of I gives a member of I. For coisotropic S, multiplication and the bracket are well defined on N modulo I.

**How the definition helps.** Defining coisotropy by vanishing functions gives exactly the inclusion I ⊆ N needed to take the quotient. In our own proof, the Jacobi identity closes N under brackets, and the product rule closes it under multiplication. Adding a member of I to a representative changes either result only by a member of I. The geometric work lies in the quoted equivalence with the tangent-space test for coisotropy.

**nLab:** [coisotropic submanifold](https://ncatlab.org/nlab/show/coisotropic+submanifold). It says: “S ↪︎ X is coisotropic if the subalgebra of C∞(X) consisting of functions vanishing on S is closed under the Poisson bracket.”

**Sources:** none listed. No primary source with a working link was found.

### Scalar curvature permits Floer differentials

**Remember:** Scalar curvature commutes with every Floer cochain.

*True by definition.* MSC 53D40 (Symplectic aspects of Floer homology and cohomology), 53D37. arXiv math.SG. Level 4: research.

**Definition.** Fix a complete filtered strictly unital Fukaya algebra. A weak bounding cochain is a positive-filtration degree-one element b satisfying ∑ₖ≥₀ mₖ(b,…,b) = W·1 for some scalar W. Here 1 is the strict unit and the k = 0 term is the original curvature.

**Problem.** In a complete filtered, strictly unital Fukaya algebra, twisting by a weak bounding cochain makes the one-input operation square to zero.

**How the definition helps.** Scalar curvature removes the obstruction to squaring to zero (our own). The one-input algebra relation expresses the square as the signed difference of left and right multiplication by curvature (our own). For a scalar unit these terms cancel (our own). Constructing the disk operations and proving their relations requires separate work (our own).

**Paper or page:** [Curved Fukaya algebras and the Dubrovin spectrum](https://arxiv.org/abs/2401.13603v1). It says: “if $D\\in \\operatorname{MC} ^B(L)$ then $(m<sup>1<sub>B</sup>,D</sub>)<sup>2=0$</sup>”

**Sources:**

- [Curved Fukaya algebras and the Dubrovin spectrum](https://arxiv.org/abs/2401.13603v1)

### Hypertight forms exclude holomorphic planes

**Remember:** A plane would cap its orbit, so a hypertight form rules it out.

*Rules out counterexamples. Confidence: medium.* MSC 53D42 (Symplectic field theory; contact homology). arXiv math.SG. Level 4: research.

**Definition.** A contact form α determines a vector field R by α(R) = 1 and dα(R, ·) = 0. A Reeb orbit is a closed trajectory of R. A contact form is hypertight if no such orbit bounds a continuous disk.

**Problem.** Add a positive coordinate r to the contact manifold and use the symplectic form d(rα) on the product. For a hypertight form, this space contains no holomorphic plane approaching a single Reeb orbit at infinity.

**How the definition helps.** Hypertightness forbids a contractible Reeb orbit, which such a plane would produce (our own proof). Project a sufficiently large circle in the plane to the contact manifold. Asymptotic convergence makes the projected loop homotopic to the orbit, and the projected interior fills the loop.

**Paper or page:** [A contact homotopy type](https://arxiv.org/abs/2511.01821v1). It says: “Suppose (Y, λ) has no contractible Reeb orbits.”

**Sources:**

- [A contact homotopy type, Corollary 1.5](https://arxiv.org/abs/2511.01821v1)

### Minimum spherical area rules out splitting

**Remember:** Two positive areas cannot share a total equal to the least positive area.

*Rules out counterexamples.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds). arXiv math.SG. Level 4: research.

**Definition.** A spherical homology class is the class represented by a map from a sphere. Choose one whose area, the integral of the symplectic form, is least among all positive spherical areas.

**Problem.** Fix a compact symplectic manifold without boundary and a compatible complex structure on its tangent spaces. A limit of holomorphic spheres in a class of least positive spherical area has exactly one nonconstant sphere component.

**How the definition helps.** Every nonconstant component has positive spherical area, hence at least the chosen minimum (our own proof). Areas add to the original positive minimum, so exactly one component is nonconstant. At larger area the maps z ↦ z + t/z illustrate splitting as t tends to zero. Away from zero they approach z, while the scale z = tw gives a second component w ↦ 1/w (our own example).

**Paper or page:** [A proof of Gromov's non-squeezing theorem](https://arxiv.org/abs/2412.18462v1). It says: “Let A ∈ Z be a homology class of the minimal positive symplectic area in Z”

**Sources:**

- [Shah Faisal, A proof of Gromov's non-squeezing theorem, Theorem 3.2](https://arxiv.org/abs/2412.18462v1)

### Stable maps keep colliding marks distinct

**Remember:** Put colliding marks on a constant sphere instead of identifying them.

*Makes the theorem clean to state or prove.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds). arXiv math.SG. Level 4: research.

**Definition.** A stable holomorphic map is a holomorphic map from a marked connected nodal curve, with distinct smooth marked points and a finite automorphism group. Its automorphisms preserve the map and fix each labeled mark. A constant sphere component therefore needs at least three special points, counting marks and node branches.

**Problem.** Fix a compact symplectic target without boundary and a compatible complex structure on its tangent spaces. Stable holomorphic maps of fixed genus, homology class, and number of marks form a compact space up to changes of domain coordinates.

**How the definition helps.** Stable domains accommodate collisions of marked points (our own example). When two marks collide on a nonconstant sphere, a constant sphere can carry both marks and the attaching node. Those three points stabilize the new component. Gromov compactness gives subsequential convergence allowing such nodal domains.

**Wikipedia:** [Stable map](https://en.wikipedia.org/wiki/Stable_map). It says: “we attach a copy of ℙ¹ (a sphere), called a bubble, to the domain curve at the problematic point.”

**Sources:** none listed. No primary source with a working link was found.

### Spinᶜ quantization builds in the metaplectic correction

**Remember:** Quantum states are the index of a Dirac operator.

*True by definition. Confidence: medium.* MSC 53D50 (Geometric quantization), 58J20, 19L10. arXiv math.SG, math-ph. Level 4: research.

**Definition.** Fix a spinᶜ structure on a compact prequantized manifold. Its quantization is the index of the associated spinᶜ Dirac operator twisted by the prequantum line L. The index is the formal difference between the positive and negative harmonic spinor spaces.

**Problem.** On a compact Kähler manifold, choose the spinᶜ structure induced by a spin structure √K and use the compatible holomorphic prequantum line L. Quantization then equals the alternating sum of holomorphic cohomology groups of L ⊗ √K, including the metaplectic correction.

**How the definition helps.** For the spin-induced structure, spinors are antiholomorphic forms with coefficients in √K. The twisted Dirac operator is the Dolbeault–Dirac operator for L ⊗ √K. Dolbeault–Hodge theory identifies its graded index with the alternating cohomology sum (our own explanation).

**nLab:** [geometric quantization](https://ncatlab.org/nlab/show/geometric+quantization), [geometric quantization by push-forward](https://ncatlab.org/nlab/show/geometric+quantization+by+push-forward). It says: “while from the point of view of the Dirac operator it is just twisting by Lω, since tensoring with the square root line bundle √Ωⁿ,⁰ induces the isomorphism between the antiholomorphic differential form bundle and the actual spinor bundle”

**Sources:**

- [Eckhard Meinrenken, Symplectic surgery and the Spinᶜ-Dirac operator, Advances in Mathematics 134 (1998) 240–277](https://doi.org/10.1006/aima.1997.1701)

### Spinᶜ quantization lets 'quantization commutes with reduction' be stated in general

**Remember:** Twist the Dirac operator by the prequantum line and take its equivariant index.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D50 (Geometric quantization), 58J20, 19L10. arXiv math.SG, math-ph. Level 4: research.

**Definition.** For a compact Hamiltonian G-manifold with equivariant prequantum line L, choose an invariant compatible almost complex structure. Its spinᶜ quantization is the equivariant index of the associated spinᶜ Dirac operator twisted by L, a virtual representation of G.

**Problem.** Let a compact connected Lie group act on a compact prequantized Hamiltonian manifold with compatible equivariant prequantum data. If zero is regular and the action there is free, the invariant quantization equals the quantization of the reduced manifold.

**How the definition helps.** The equivariant index defines both quantizations without a Kähler polarization (our own explanation). Taking the multiplicity of the trivial representation gives the invariant part. Meinrenken’s quantization-commutes-with-reduction theorem identifies it with the reduced index.

**nLab:** [Guillemin-Sternberg geometric quantization conjecture](https://ncatlab.org/nlab/show/Guillemin-Sternberg+geometric+quantization+conjecture), [geometric quantization by push-forward](https://ncatlab.org/nlab/show/geometric+quantization+by+push-forward). It says: “For the more powerful and more flexible geometric quantization by push-forward, the corresponding statement is widely known as the Guillemin-Sternberg conjecture.”

**Sources:**

- [Victor Guillemin, Shlomo Sternberg, Geometric quantization and multiplicities of group representations, Inventiones Mathematicae 67 (1982) 515–538](https://doi.org/10.1007/BF01398934)
- [Eckhard Meinrenken, Symplectic surgery and the Spinᶜ–Dirac operator, Advances in Mathematics 134 (1998) 240–277](https://doi.org/10.1006/aima.1997.1701)

### Enveloping algebras quantize polynomial Poisson algebras to order three

**Remember:** Associativity is free; only injectivity of symmetrization needs checking.

*Makes the theorem clean to state or prove.* MSC 53D55 (Deformation quantization, star products), 17B63. arXiv math.QA. Level 4: research.

**Definition.** For a polynomial Poisson algebra Sym(V) in characteristic zero, symmetrization σ averages all tensor orderings of each monomial. Its formal enveloping algebra is the completed tensor algebra modulo the closed ideal generated by xy − yx − ħσ({x,y}) for all x,y ∈ V. Symmetrization followed by the quotient gives the comparison map τ.

**Problem.** For every polynomial Poisson algebra, the universal enveloping algebra gives a deformation quantization up to order 3 in ħ (Penkava–Vanhaecke). For linear brackets, and brackets with linear and constant terms, it works to all orders.

**How the definition helps.** The product of U is associative by construction, so the only question is whether τ stays injective. That injectivity is a Poincaré–Birkhoff–Witt type statement, and it always holds to order 3. For linear and affine brackets it holds to all orders, which recovers the Gutt and Moyal products. The work moves into proving the injectivity, which uses the Jacobi identity of the bracket (our own remark).

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “Moreover, this is always the case for n = 3, hence for every polynomial Poisson algebra its universal enveloping algebra always provides a deformation quantization of order 3 in ħ.”

**Sources:**

- [Michael Penkava, Pol Vanhaecke, Deformation quantization of polynomial Poisson algebras, Journal of Algebra 227 (2000) 365–393](https://doi.org/10.1006/jabr.1999.8239)

### Fedosov's class classifies symplectic star products

**Remember:** Pick any closed series of 2-forms; its class names the star product.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D55 (Deformation quantization, star products). arXiv math.SG, math.QA. Level 4: research.

**Definition.** Fedosov's construction takes a symplectic connection and a formal series Ω = ω + ħΩ₁ + ħ²Ω₂ + ⋯ of closed 2-forms. It builds a flat connection on the bundle of fibrewise Moyal algebras whose Weyl curvature is Ω, and its flat sections give a star product. The Fedosov class of this star product is \[Ω\]/ħ, an element of \[ω\]/ħ + H²(M)\[\[ħ\]\].

**Problem.** Every differential star product on a symplectic manifold is equivalent to a Fedosov product. Two Fedosov products are equivalent exactly when their classes agree, giving the parameter space \[ω\]/ħ + H²(M)\[\[ħ\]\] in the stated convention.

**How the definition helps.** Fedosov's construction takes Ω as free input, so every class in \[ω\]/ħ + H²(M)\[\[ħ\]\] comes from some star product. Fedosov showed that cohomologous choices of Ω give equivalent star products. The hard direction is the converse, together with the claim that every star product is equivalent to a Fedosov one. Nest–Tsygan, Deligne and Bertelson–Cahen–Gutt proved these (the classification statement is our own summary).

**nLab:** [Fedosov's deformation quantization](https://ncatlab.org/nlab/show/Fedosov%27s+deformation+quantization). It says: “Such ∇<sub>Fed</sub> exists, (non-uniquely), it is called a Fedosov connection.”

**Sources:**

- [Boris Fedosov, A simple geometrical construction of deformation quantization, Journal of Differential Geometry 40 (1994) 213–238](https://doi.org/10.4310/jdg/1214455536)
- [Mélanie Bertelson, Michel Cahen, Simone Gutt, Equivalence of star products, Classical and Quantum Gravity 14 (1997) A93–A107](https://doi.org/10.1088/0264-9381/14/1a/008)
- [Ryszard Nest, Boris Tsygan, Algebraic index theorem, Communications in Mathematical Physics 172 (1995) 223–262](https://doi.org/10.1007/bf02099427)

### Flat Weyl lifts give associativity

**Remember:** Lift, multiply, and project without losing associativity.

*True by definition.* MSC 53D55 (Deformation quantization, star products), 81S10. arXiv math-ph. Level 4: research.

**Definition.** Fix a Fedosov connection on the formal Weyl algebra bundle of a symplectic manifold. Lift each formal smooth function uniquely to a flat section with that function as its value at fiber zero. Its Fedosov product with another function is the value at fiber zero of the fiberwise Moyal product of their lifts.

**Problem.** The Fedosov product on formal series of smooth functions on a symplectic manifold is associative.

**How the definition helps.** In our own proof, lifting the result recovers the product of the lifts, so associativity follows from pointwise multiplication. This avoids comparing coefficients in the two possible triple products. The work lies in constructing a connection that preserves multiplication and proving existence and uniqueness of lifts.

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “Then one can define a global star product”

**Sources:**

- [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1)

### Formality gives associative star products

**Remember:** Jacobi and associativity each become the Maurer–Cartan equation in the corresponding algebra.

*Makes the theorem clean to state or prove.* MSC 53D55 (Deformation quantization, star products), 17B55. arXiv math.QA, math-ph. Level 4: research.

**Definition.** A Maurer–Cartan element of a differential graded Lie algebra is a degree-one element B satisfying dB + ½\[B,B\] = 0. For shifted polydifferential operators, the bracket is the Gerstenhaber bracket and d brackets with ordinary multiplication. Formal corrections B start at order ħ.

**Problem.** Every finite-dimensional smooth real Poisson manifold admits a star product whose commutator to first order is ħ times its Poisson bracket.

**How the definition helps.** The same equation expresses Jacobi for ħπ and associativity for B, so a map preserving solutions transports the required identity (our own). Kontsevich’s formality theorem supplies such a map, with higher multilinear components correcting ordinary bracket preservation. Applying its Taylor series to ħπ gives B, and its linear component gives the prescribed first-order commutator (our own).

**nLab:** [Kontsevich formality](https://ncatlab.org/nlab/show/Kontsevich+formality). It says: “there is an L-∞-algebra quasi-isomorphism from the dg-Lie algebra of polyvector fields”

**Wikipedia:** [Kontsevich quantization formula](https://en.wikipedia.org/wiki/Kontsevich_quantization_formula). It says: “describes how to construct a generalized ★-product operator algebra from a given arbitrary finite-dimensional Poisson manifold.”

**Sources:**

- [Maxim Kontsevich, Deformation Quantization of Poisson Manifolds](https://doi.org/10.1023/B:MATH.0000027508.00421.bf)

### L∞ quasi-isomorphisms make Kontsevich formality give deformation quantization

**Remember:** Matching Maurer–Cartan solutions match Poisson structures with star products.

*Makes the theorem clean to state or prove.* MSC 53D55 (Deformation quantization, star products), 16E40, 17B55. arXiv math.QA, math.KT. Level 4: research.

**Definition.** An L∞ morphism between differential graded Lie algebras is a morphism of their reduced symmetric coalgebras on the shifted spaces commuting with their codifferentials. It is a quasi-isomorphism if its linear component induces an isomorphism on cohomology.

**Problem.** On ℝᵈ, every Poisson structure has a deformation quantization, that is, an associative star product on power series of functions that deforms the usual product. Formal Poisson structures up to equivalence correspond to star products up to equivalence.

**How the definition helps.** After ħ-adic completion, an L∞ quasi-isomorphism identifies Maurer–Cartan solutions modulo gauge (our own explanation). In polyvector fields these encode formal Poisson tensors, while in shifted polydifferential operators they encode differential star products. Kontsevich constructs the required quasi-isomorphism, whose linear term gives the prescribed first-order bracket.

**nLab:** [Kontsevich formality](https://ncatlab.org/nlab/show/Kontsevich+formality). It says: “The formality theorem (Kontsevich 97) states that there is an L-∞-algebra quasi-isomorphism from the dg-Lie algebra of polyvector fields (with zero differential and Schouten-Nijenhuis bracket) to the dg-Lie algebra of the shifted Hochschild cochain complex”

**Sources:**

- [M. Kontsevich, Deformation quantization of Poisson manifolds, Letters in Mathematical Physics 66 (2003)](https://doi.org/10.1023/b:math.0000027508.00421.bf)

### Maurer–Cartan moduli classify star products

**Remember:** Equivalent algebras have the same Maurer–Cartan moduli, so quantizations match Poisson structures.

*Makes the theorem clean to state or prove.* MSC 53D55 (Deformation quantization, star products), 17B55. arXiv math.QA. Level 4: research.

**Definition.** In a differential graded Lie algebra completed in positive powers of ħ, a Maurer–Cartan element is a degree-one x satisfying dx + ½\[x,x\] = 0. Its moduli set consists of solutions modulo the gauge action of exponentials of degree-zero elements in positive powers of ħ.

**Problem.** On every smooth real manifold, differential star products up to differential equivalence correspond bijectively to formal Poisson structures modulo formal diffeomorphisms starting with the identity.

**How the definition helps.** Both classifications become sets of Maurer–Cartan solutions modulo gauge (our own explanation). For shifted polydifferential operators these solutions are associative deformations, and for polyvector fields they are formal Poisson tensors. Kontsevich’s formality theorem and invariance of Maurer–Cartan moduli under filtered quasi-isomorphisms give the bijection.

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “If L₁ is quasi-isomorphic to L₂ then there is a solution to the M-C equation in L₁ iff there is a solution to the M-C equation in L₂.”

**Sources:**

- [Maxim Kontsevich, Deformation quantization of Poisson manifolds, Letters in Mathematical Physics 66 (2003) 157–216](https://doi.org/10.1023/B:MATH.0000027508.00421.bf)

### Mixed resolutions quantize Poisson deformations of varieties

**Remember:** Resolve first, then the local formality map glues.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D55 (Deformation quantization, star products), 14D15, 14A22. arXiv math.AG, math.QA. Level 4: research.

**Definition.** Choose an affine cover of a smooth variety. The mixed resolution of a quasi-coherent sheaf is the Thom–Sullivan totalization of its Čech cosimplicial jet de Rham resolution. The jet resolution uses principal parts with their Grothendieck connection.

**Problem.** If H¹(X, 𝒪X) and H²(X, 𝒪X) vanish, there is a canonical bijection between isomorphism classes of Poisson deformations of 𝒪X and of associative deformations of 𝒪X. The bijection preserves first-order brackets.

**How the definition helps.** Mixed resolutions encode overlap data while retaining the differential graded Lie structures needed for global formality (our own explanation). Yekutieli’s twisted quantization theorem identifies the two twisted deformation classifications and preserves first-order brackets. The stated cohomology vanishings identify their classes with ordinary deformation classes.

**nLab:** [formal deformation quantization](https://ncatlab.org/nlab/show/formal+deformation+quantization). It says: “Trying to replicate the global formality theorem of Kontsevich, one would like to upgrade this to an L∞ quasi-isomorphism. However, it seems that in general this cannot be done directly, but only after a suitable resolution.”

**Sources:**

- [Amnon Yekutieli, Deformation quantization in algebraic geometry, Advances in Mathematics 198 (2005) 383–432 (affine case, Theorem 0.1)](https://doi.org/10.1016/j.aim.2005.06.009)
- [Amnon Yekutieli, Corrigendum to 'Deformation quantization in algebraic geometry', Advances in Mathematics 217 (2008) 2897–2906](https://doi.org/10.1016/j.aim.2007.09.012)
- [Amnon Yekutieli, Twisted deformation quantization of algebraic varieties, Advances in Mathematics 268 (2015) 241–305 (general case, Corollary 11.2)](https://doi.org/10.1016/j.aim.2014.09.003)

### Tangential products descend to constraints

**Remember:** Two-sided vanishing ideals make extensions irrelevant.

*Rules out counterexamples.* MSC 53D55 (Deformation quantization, star products). arXiv math.QA. Level 4: research.

**Definition.** A star product is an associative formal deformation of ordinary multiplication of smooth functions. It is tangential to a submanifold when formal series vanishing there form a two-sided ideal. Thus multiplying such a series on either side still gives a series vanishing there.

**Problem.** A tangential star product induces an associative product on the quotient by the vanishing ideal. For a closed embedded submanifold this quotient consists of formal smooth functions on that submanifold.

**How the definition helps.** The ideal condition makes restriction independent of the extensions chosen for both factors, so associativity passes to the quotient (our own). The cited lemma proves this condition for a particular Gutt star product. On the symplectic plane, the Moyal product satisfies q ⋆ p − p ⋆ q = iħ (our own). Restricting to q = 0 kills q but preserves iħ, so this product cannot descend (our own).

**Paper or page:** [Characteristic (Fedosov-)class of a twist constructed by Drinfel'd](https://arxiv.org/abs/1903.06416v1). It says: “The Gutt-star product of 𝔥 is tangential”

**Sources:**

- [Jonas Schnitzer, Characteristic (Fedosov-)class of a twist constructed by Drinfel'd](https://arxiv.org/abs/1903.06416v1)

### Toeplitz asymptotics make star products associative

**Remember:** Operators compose associatively, so their asymptotic symbols multiply associatively.

*True by definition.* MSC 53D55 (Deformation quantization, star products), 53D50. arXiv math.SG. Level 4: research.

**Definition.** On a compact prequantized Kähler manifold, Tₖ(f) multiplies holomorphic sections of the kth line bundle power by f, then projects orthogonally back. For smooth f,g, the coefficients Cⱼ satisfy ‖Tₖ(f)Tₖ(g) − ∑₀≤ⱼ&lt;ᴺ k⁻ʲTₖ(Cⱼ(f,g))‖ = O(k⁻ᴺ) as k → ∞ for every integer N ≥ 1.

**Problem.** The coefficients Cⱼ are unique, and the formal product they define is associative (Bordemann–Meinrenken–Schlichenmaier, Schlichenmaier).

**How the definition helps.** Operator associativity gives two expansions of the same triple product (our own). Since ‖Tₖ(f)‖ tends to ‖f‖∞, the first differing coefficient would have positive limiting norm after rescaling (our own). Thus coefficients are unique and the two formal triple products agree (our own). The Berezin–Toeplitz expansion theorem supplies the expansion (our own).

**Paper or page:** [Strict Quantization for Compact Pseudo-Kähler Manifolds and Group Actions](https://arxiv.org/abs/2410.03322), [Strict Quantization for Compact Pseudo-Kähler Manifolds and Group Actions](https://arxiv.org/abs/2410.03322). It says: “There exists a unique formal star-product of Wick type f⋆g := Σ νʲ Cⱼ(f, g), Cⱼ(f, g) lies in C∞(M<sub>G</sub>)”

**Sources:**

- [Martin Bordemann, Eckhard Meinrenken, Martin Schlichenmaier, Toeplitz quantization of Kähler manifolds and gl(N), N → ∞ limits, Communications in Mathematical Physics 165 (1994) 281–296](https://doi.org/10.1007/BF02099772)

### Twist identities give associative products

**Remember:** A twist compares the two ways to multiply three inputs.

*True by definition.* MSC 53D55 (Deformation quantization, star products). arXiv math.QA, math-ph. Level 4: research.

**Definition.** Let A be a unital H-module algebra for a bialgebra H with coproduct Δ and counit ε. A normalized twist is invertible F ∈ H⊗H satisfying (Δ⊗id)(F)(F⊗1) = (id⊗Δ)(F)(1⊗F) and (ε⊗id)(F) = (id⊗ε)(F) = 1. For a,b ∈ A, define a ⋆ b by applying F to a⊗b and multiplying.

**Problem.** For any such action and twist, ⋆ is associative and has the original unit of A.

**How the definition helps.** The twist equation identifies both triple products before evaluating them on individual algebra elements (our own). The counit equations preserve the unit (our own). Finding a twist for a prescribed product is a separate problem (our own).

**Paper or page:** [Hopf Algebroid Twists for Deformation Quantization of Linear Poisson Structures](https://arxiv.org/abs/1605.01376v4). It says: “defines an associative 𝐤-algebra A⋆ = (A, ⋆) structure on A with the same unit”

**Sources:**

- [Zoran Škoda, Stjepan Meljanac, Hopf Algebroid Twists for Deformation Quantization of Linear Poisson Structures](https://arxiv.org/abs/1605.01376v4)

### Wick products simplify holomorphic multiplication

**Remember:** Put a holomorphic factor second to kill every correction.

*Makes the theorem clean to state or prove.* MSC 53D55 (Deformation quantization, star products). arXiv math-ph. Level 4: research.

**Definition.** A Sasakian manifold has a distinguished flow, called the Reeb flow, with complex coordinate directions transverse to it. In the cited construction, a quantum observable is a formal function killed by its operator Δ. Wick separation means each positive-order correction differentiates the first factor in holomorphic directions and the second in antiholomorphic directions.

**Problem.** On any open domain, a Reeb-invariant transversely holomorphic function a is a quantum observable. Every quantum observable c satisfies c ⋆ a = ca. For a Reeb-invariant transversely antiholomorphic function a, the same theorem gives a ⋆ c = ac.

**How the definition helps.** Wick separation kills every correction when the second factor is transversely holomorphic or the first is transversely antiholomorphic (our own). The cited Sasakian Wick theorem also supplies the separate assertion that Δ annihilates the indicated Reeb-invariant functions (our own).

**Paper or page:** [Wick-type deformation quantization of contact metric manifolds](https://arxiv.org/abs/2311.12767v1). It says: “Moreover, the Wick property holds”

**Sources:**

- [Boris M. Elfimov, Alexey A. Sharapov, Wick-type deformation quantization of contact metric manifolds](https://arxiv.org/abs/2311.12767v1)

### Outer-minimizing starts make the weak flow's area grow exactly like eᵗ

**Remember:** Start at least area outside, and the area grows exactly like eᵗ.

*Rules out counterexamples.* MSC 53E10 (Flows related to mean curvature), 49Q20. arXiv math.DG, math.AP. Level 4: research.

**Definition.** A closed hypersurface bounding a region is outer-minimizing if every enclosing competitor has at least its area.

**Problem.** In hyperbolic space ℍⁿ, weak inverse mean curvature flow from an outer-minimizing initial surface satisfies \|Σₜ\| = eᵗ\|Σ₀\|.

**How the definition helps.** Outer minimization makes the initial region and its minimizing hull have equal perimeter (our own). The Huisken–Ilmanen weak area growth formula then gives eᵗ times that initial perimeter (our own). A surface with a smaller enclosing competitor loses perimeter on passage to its minimizing hull (our own).

**Paper or page:** [On weak inverse mean curvature flow and Minkowski-type inequalities in hyperbolic space](https://arxiv.org/abs/2404.08410). It says: “If Σ₀ is outer-minimizing, then the area of Σₜ is given by \|Σₜ\|=eᵗ\|Σ₀\|.”

**Sources:**

- [B. Harvie, On weak inverse mean curvature flow and Minkowski-type inequalities in hyperbolic space, arXiv:2404.08410 (2024)](https://arxiv.org/abs/2404.08410)
- [G. Huisken and T. Ilmanen, The inverse mean curvature flow and the Riemannian Penrose inequality, Journal of Differential Geometry 59 (2001) 353–437](https://doi.org/10.4310/jdg/1090349447)
