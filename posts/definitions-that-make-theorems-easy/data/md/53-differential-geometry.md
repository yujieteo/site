### Polygons with corners on the curve define arc length correctly

**Remember:** Put the corners on the curve, or the staircase will lie to you.

*Rules out counterexamples. Confidence: medium.* MSC 53A04 (Curves in Euclidean and related spaces), 51M25. arXiv math.DG, math.CA. Level 1: early undergraduate.

**Definition.** The length of a curve is the supremum of the lengths of polygonal chains whose vertices lie on the curve. A polygonal chain is a path made of straight segments.

**Problem.** Arc length is well defined, and inscribed polygons approximate it.

**How the definition helps.** Putting the vertices on the curve rules out approximations that converge to the curve but have the wrong length. If the vertices only need to be near the curve, the staircase paradox appears. Staircases of total length 2 converge to a diagonal of length √2. Requiring the vertices to lie on the curve excludes this. The same idea fails for surfaces. Schwarz's lantern, a surface of inscribed triangles, converges to a cylinder, while its area can tend to any larger value or to infinity. It refuted Serret's 1868 definition of surface area, so surface area needs another definition.

**Wikipedia:** [Schwarz lantern](https://en.wikipedia.org/wiki/Schwarz_lantern). It says: “However, for this to work correctly, the vertices of the polygonal chains must lie on the given curve, rather than merely near it.”

**Sources:** none listed. No primary source with a working link was found.

### Turning angles as curvature make Fenchel's theorem hold for polygons

**Remember:** A polygon's curvature is how far it turns at each corner.

*Makes the theorem clean to state or prove.* MSC 53A04 (Curves in Euclidean and related spaces). arXiv math.DG, math.MG. Level 2: later undergraduate.

**Definition.** The curvature κᵢ of a polygon at vertex i is its turning angle there. This is the angle between the direction of the incoming edge and the direction of the outgoing edge. The tangent indicatrix is the curve of unit tangent directions on the sphere.

**Problem.** Fenchel's theorem says that a closed space curve has total curvature at least 2π, with equality only for plane convex curves.

**How the definition helps.** With turning angles as curvature, the total curvature is the length of the tangent indicatrix, so Fenchel becomes a statement about spherical curves. The paper states this length fact as Lemma 1.4. For a polygon the indicatrix is a chain of great-circle arcs of lengths κᵢ (our own). Lemma 1.5 says the indicatrix of a closed curve lies in no open hemisphere. A closed curve on the sphere that lies in no open hemisphere has length at least 2π (our own). The same proof works for smooth and polygonal curves at once.

**Paper or page:** [Discrete curvature](https://arxiv.org/abs/2502.09353), [Discrete curvature](https://arxiv.org/abs/2502.09353). It says: “The total curvature of a closed space curve is bigger or equal 2π: ∫ₐᵇ κ dt ≥ 2π, respectively ∑ᵢ₌₁ⁿ κᵢ ≥ 2π. The equality takes place if and only if the curve is planar and convex.”

**Sources:**

- [I. Izmestiev, Discrete curvature, Internationale Mathematische Nachrichten 250 (2022) 1–23, arXiv:2502.09353](https://arxiv.org/abs/2502.09353)
- [W. Fenchel, Über Krümmung und Windung geschlossener Raumkurven, Mathematische Annalen 101 (1929) 238–252](https://doi.org/10.1007/bf01454836)

### Defining the normal as a distance gradient makes its derivative symmetric

**Remember:** A normal defined as a gradient has a symmetric derivative.

*True by definition.* MSC 53A05 (Surfaces in Euclidean and related spaces), 26B05. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Signed distance measures distance from a surface with opposite signs on its two sides. In a smooth neighborhood of the surface, define the extended unit normal as the gradient of signed distance.

**Problem.** The derivative of the extended unit normal to a smooth surface is symmetric wherever the signed distance is smooth.

**How the definition helps.** The normal is a gradient, so its derivative is a Hessian. Equality of mixed partial derivatives gives symmetry. In our own words, this gives the symmetry of the shape operator, the derivative of the normal along the surface. The geometry goes into proving that signed distance is smooth near the surface and that its gradient is the unit normal.

**Paper or page:** [Orthogonal signed-distance coordinates and vector calculus near evolving curves and surfaces](https://arxiv.org/abs/2302.02891v2). It says: “The gradient of the normal is the Hessian of the signed-distance function, which is a necessarily symmetric 2-tensor,”

**Sources:**

- [Eric W. Hester, Geoffrey M. Vasil, Orthogonal signed-distance coordinates and vector calculus near evolving curves and surfaces, arXiv:2302.02891v2 (2023), Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences 479, no. 2277 (2023): 20230080](https://arxiv.org/abs/2302.02891v2)

### Gaussian curvature as the Gauss map Jacobian makes total curvature a degree

**Remember:** Integrating the normal map’s signed area change counts its degree.

*True by definition. Confidence: medium.* MSC 53A05 (Surfaces in Euclidean and related spaces), 55M25. arXiv math.DG. Level 2: later undergraduate.

**Definition.** For an oriented surface in ℝ³, define the Gaussian curvature as the signed area Jacobian of its unit normal map to the sphere. The other definition multiplies the two principal curvatures, the largest and smallest normal bending rates.

**Problem.** A closed oriented surface immersed in ℝ³ has total Gaussian curvature equal to 4π times the degree of its unit normal map.

**How the definition helps.** With this definition, total curvature is the integral of the pulled-back sphere area form, which is 4π times the degree. The real work is in the degree formula for integrals of pulled-back forms (our own comparison). It also moves to the theorem that the derivative of the normal map is minus the shape operator (our own). The determinant of the shape operator is the product of the principal curvatures.

**Wikipedia:** [Gauss map](https://en.wikipedia.org/wiki/Gauss_map). It says: “The Jacobian determinant of the Gauss map is equal to Gaussian curvature”

**Sources:** none listed. No primary source with a working link was found.

### The angular defect at the vertices is the curvature of a polyhedron

**Remember:** Flat paper has no defect; a cone's defect is the wedge you cut out.

*Makes the theorem clean to state or prove.* MSC 53A70 (Discrete differential geometry), 51M20. arXiv math.DG, math.MG. Level 2: later undergraduate.

**Definition.** The defect at a vertex of a polyhedron is 2π minus the sum of the face angles at that vertex. The defect is treated as the Gaussian curvature of the surface, all concentrated at that vertex.

**Problem.** Descartes's theorem: the defects of a polyhedron that is topologically a sphere add up to 4π. In general they add up to 2π times the Euler characteristic.

**How the definition helps.** With curvature defined as defect, faces and edges have zero curvature, so the total curvature is just the sum of the defects. Descartes's theorem then becomes a discrete case of the Gauss–Bonnet theorem. It holds for nonconvex polyhedra too, where some defects are negative. A polyhedron shaped like a torus has total defect zero, because its Euler characteristic is 0. Alexandrov's theorem, a hard converse, says this. Take a surface that is flat except at finitely many points of positive defect, adding to 4π. Then it is the surface of a unique convex polyhedron.

**Wikipedia:** [Angular defect](https://en.wikipedia.org/wiki/Angular_defect). It says: “the integral of curvature at a vertex is equal to the defect there (by definition).”

**Sources:** none listed. No primary source with a working link was found.

### Asking for zero torsion and a preserved metric gives exactly one connection

**Remember:** Keep lengths, twist nothing, and the connection is forced.

*Makes the theorem clean to state or prove.* MSC 53B05 (Linear and affine connections), 53B20. arXiv math.DG. Level 2: later undergraduate.

**Definition.** An affine connection ∇ is a rule for differentiating vector fields along vector fields. It is metric-compatible if parallel transport keeps lengths and angles. In formulas, X(g(Y, Z)) = g(∇ₓY, Z) + g(Y, ∇ₓZ), where ∇ₓ means the derivative along X. It is torsion-free if the derivative of Y along X, minus the derivative of X along Y, is the Lie bracket \[X, Y\].

**Problem.** A manifold carries many connections, so 'the' covariant derivative, 'the' geodesics and 'the' curvature of a metric need a canonical choice. One wants the choice to be fixed by the metric alone.

**How the definition helps.** The two conditions are exactly strong enough to pin the connection down. In our own words, two connections differ by a tensor with three slots. Torsion-freeness makes this tensor symmetric in one pair of slots, and metric compatibility makes it skew in another pair. A tensor with both symmetries is zero. Adding the conditions for three vector fields gives the Koszul formula, which determines ∇ from g. So the Christoffel symbols, the geodesic equation and the Riemann curvature are all functions of the metric. Levi-Civita introduced the connection in 1917 to give parallel transport a geometric meaning.

**Wikipedia:** [Fundamental theorem of Riemannian geometry](https://en.wikipedia.org/wiki/Fundamental_theorem_of_Riemannian_geometry), [Levi-Civita connection](https://en.wikipedia.org/wiki/Levi-Civita_connection). It says: “on any Riemannian manifold (or pseudo-Riemannian manifold) there is a unique affine connection that is torsion-free and metric-compatible, called the Levi-Civita connection”

**Sources:**

- [T. Levi-Civita, Nozione di parallelismo in una varietà qualunque e conseguente specificazione geometrica della curvatura riemanniana, Rendiconti del Circolo Matematico di Palermo 42 (1917) 173–204](https://doi.org/10.1007/BF03014898)

### Counting corner turns as curvature extends Gauss–Bonnet to polygons

**Remember:** A corner is just a curve that turns all at once.

*Makes the theorem clean to state or prove.* MSC 53B20 (Local Riemannian geometry), 53C21. arXiv math.DG. Level 2: later undergraduate.

**Definition.** Geodesic curvature measures how much a curve bends inside the surface. For a region with a piecewise smooth boundary, the total geodesic curvature of the boundary has two parts. One part is the integral along the smooth pieces. The other part is the sum of the turning angles at the corners.

**Problem.** Let M be a compact surface with boundary. The integral of its Gaussian curvature, plus the total geodesic curvature of the boundary, equals 2π times the Euler characteristic of M. For a geodesic triangle, the angle sum is π plus the total curvature inside.

**How the definition helps.** Treating each corner as a concentrated bend lets one formula cover smooth regions and polygons alike. With this convention, one theorem gives all three angle sums. A flat triangle has angle sum π, a spherical one more than π, and a hyperbolic one less than π. The page checks it on a sphere octant: total curvature π/2 plus three right-angle turns of π/2 gives 2π. The theorem still needs compactness. The open unit disc is flat and has Euler characteristic 1, but it has no boundary to give the missing 2π. The proof itself still rests on the theorem of turning tangents.

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

**Definition.** A connected Riemannian manifold is complete if it is a complete metric space under its distance function. One equivalent form says that closed bounded sets are compact. Another says that every geodesic can be extended for all time. A geodesic is a curve that is locally the shortest path, travelled at constant speed.

**Problem.** Many global theorems of Riemannian geometry need the manifold to be 'complete'. Without one agreed meaning, each theorem would need its own hypothesis. Under completeness, any two points are joined by a shortest geodesic.

**How the definition helps.** Once the three conditions are known to agree, 'complete' is one hypothesis that every theorem can share. The title of the 1931 paper is literally 'On the concept of the complete differential-geometric surface'. Our own example of the bad case is the punctured plane. There a geodesic runs into the hole, and two points on opposite sides of the hole have no shortest path. The work moves into the equivalence proof, which uses the exponential map. The theorem fails for infinite-dimensional manifolds, as Atkin showed. It also fails for Lorentzian manifolds, since the Clifton–Pohl torus is compact but not geodesically complete.

**Wikipedia:** [Hopf–Rinow theorem](https://en.wikipedia.org/wiki/Hopf%E2%80%93Rinow_theorem). It says: “Let (M, g) be a connected and smooth Riemannian manifold without boundary. Then the following statements are equivalent”

**Sources:**

- [H. Hopf and W. Rinow, Ueber den Begriff der vollständigen differentialgeometrischen Fläche, Commentarii Mathematici Helvetici 3 (1931) 209–225](https://doi.org/10.1007/BF01601813)
- [C. J. Atkin, The Hopf–Rinow theorem is false in infinite dimensions, Bulletin of the London Mathematical Society 7 (1975) 261–266](https://doi.org/10.1112/blms/7.3.261)

### Minimizing energy instead of length picks out constant-speed geodesics

**Remember:** Length forgives any pace; energy insists on a steady one.

*Makes the theorem clean to state or prove.* MSC 53C22 (Geodesics in global differential geometry), 58E10. arXiv math.DG. Level 2: later undergraduate.

**Definition.** The energy of a curve γ on \[a, b\] is E(γ) = ½ ∫ g(γ′, γ′) dt. Its length is L(γ) = ∫ √g(γ′, γ′) dt. A geodesic can be defined as a critical point of the energy.

**Problem.** Find curves of shortest length and write a differential equation for them. Length does not change under reparametrization, so its minimizers form huge families and are not regular as maps.

**How the definition helps.** Energy breaks the reparametrization freedom, so its minimizers are single curves at constant speed. By the Cauchy–Schwarz inequality, L² ≤ 2(b − a)E, with equality exactly at constant speed. So every energy minimizer also minimizes length. The page calls the energy problem more robust, close to convex, so existence and regularity can be expected. Its Euler–Lagrange equation is the geodesic equation, with the Christoffel symbols, the coefficients of the connection in coordinates. Global existence of a minimizer still needs completeness, as in the Hopf–Rinow theorem.

**Wikipedia:** [Geodesic](https://en.wikipedia.org/wiki/Geodesic). It says: “paths that are minima of L can be arbitrarily re-parameterized (without changing their length), while minima of E cannot.”

**Sources:** none listed. No primary source with a working link was found.

### Minimal surfaces as real parts of null curves give isometric associate families

**Remember:** Complex phase changes keep the derivative null and preserve its squared size.

*True by definition. Confidence: medium.* MSC 53A10 (Minimal surfaces in differential geometry, surfaces with prescribed mean curvature), 58E12. arXiv math.DG. Level 3: graduate.

**Definition.** Describe a conformal minimal surface in ℝ³ as the real part of a holomorphic curve F with a nonzero null derivative. Null means that the squares of the three components of F′ sum to zero. The usual definition asks for zero mean curvature.

**Problem.** A conformal minimal immersion of a simply connected domain into ℝ³ has a one-parameter family of minimal immersions with the same induced metric. This associate family bends the catenoid into the helicoid.

**How the definition helps.** Multiply F by a complex number of modulus one; the derivative stays null and keeps its length, which fixes the metric (our own argument). With the mean curvature definition, one must construct the new surfaces by solving for conjugate harmonic functions (our own comparison). The work moves to the Weierstrass representation, which shows that real parts of null curves are exactly the conformal minimal immersions. Simple connectivity lets one integrate the derivative globally.

**Paper or page:** [Loop Weierstrass Representation](https://arxiv.org/abs/2411.04626). It says: “is a conformal, minimal immersion into Euclidean space.”

**Sources:** none listed. No primary source with a working link was found.

### Defining divergence by the Lie derivative of volume gives div\[X,Y\] directly

**Remember:** Commute two flow derivatives to find the divergence of their bracket.

*True by definition. Confidence: medium.* MSC 53A45 (Differential geometric aspects in vector and tensor analysis), 58A10. arXiv math.DG. Level 3: graduate.

**Definition.** Fix a volume form μ, a form of top degree that is nowhere zero. The divergence of a vector field X is the function div X with ℒ(X)μ = (div X)μ. Here ℒ(X)μ, the Lie derivative, measures how μ changes along the flow of X. In coordinates with μ = ρ dx¹∧…∧dxⁿ, one instead writes div X = (1/ρ) Σ ∂ᵢ(ρXⁱ).

**Problem.** For a fixed volume form and vector fields X and Y, div\[X,Y\] = X(div Y) − Y(div X).

**How the definition helps.** With the Lie-derivative definition, the formula follows from ℒ(\[X,Y\]) = ℒ(X)ℒ(Y) − ℒ(Y)ℒ(X). In our own calculation, ℒ(X) applied to (div Y)μ gives X(div Y)μ + (div Y)(div X)μ by the product rule. In our own calculation, subtracting the same expression with X and Y swapped cancels the product of the divergences. In our own comparison, the coordinate proof needs the second derivatives of the components to cancel. In our own account, the work moves to the commutator identity for Lie derivatives.

**Wikipedia:** [Divergence](https://en.wikipedia.org/wiki/Divergence). It says: “The divergence can be defined in terms of the Lie derivative as”

**Sources:** none listed. No primary source with a working link was found.

### Defining torsion as Dθ makes the first Bianchi identity one differentiation

**Remember:** Differentiate zero torsion to get curvature applied to the identity.

*True by definition. Confidence: medium.* MSC 53B05 (Linear and affine connections), 53C05. arXiv math.DG. Level 3: graduate.

**Definition.** View the identity map of the tangent bundle as a one-form θ with values in tangent vectors, called the solder form. Let D be the exterior covariant derivative, which extends a connection, a rule for differentiating vector fields, to such vector-valued forms. Define the torsion as Θ = Dθ. The directional definition takes the derivative of Y along X, minus that of X along Y, minus \[X,Y\].

**Problem.** Let R be the curvature of a connection on the tangent bundle, which measures how covariant derivatives fail to commute. If the torsion is zero, then R(X,Y)Z + R(Y,Z)X + R(Z,X)Y = 0 for all vector fields X, Y and Z.

**How the definition helps.** With the form definition, the first Bianchi identity is the derivative of the torsion. Wikipedia states that DΘ = Ω ∧ θ and Θ = Dθ, where Ω is the curvature form. If Θ = 0, then Ω ∧ θ = 0. In our own step, evaluating this three-form on X, Y and Z gives the cyclic sum. In our own comparison, the directional definition requires expanding the covariant derivatives and using the Jacobi identity for brackets. In our own account, the work moves to proving DΘ = Ω ∧ θ, which rests on D² acting by curvature.

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

**Definition.** A connection on a vector bundle is a rule for differentiating its sections along vector fields. The Levi-Civita connection of a Riemannian manifold is the unique connection on the tangent bundle that preserves the metric and has zero torsion. Zero torsion means that the derivative of Y along X minus that of X along Y equals the bracket \[X,Y\]. Another approach defines it in coordinates by the Christoffel symbols, formulas in the first derivatives of the metric.

**Problem.** Let f be an isometry between Riemannian manifolds. Then f carries the Levi-Civita connection of the source to that of the target.

**How the definition helps.** With the characterization, one only checks that the transported connection has the two defining properties. In our own steps, it preserves the metric because f is an isometry, and it has zero torsion because f preserves brackets. Uniqueness then says it is the Levi-Civita connection. In our own comparison, Christoffel symbols would require tracking how these coefficients change under f. In our own account, the work moves to the existence and uniqueness theorem, which the Koszul formula proves.

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

### Connections as horizontal subbundles make zero curvature mean integrability

**Remember:** Flat means the horizontal planes fit together into sheets.

*True by definition.* MSC 53C05 (Connections (general theory)), 58A30. arXiv math.DG. Level 3: graduate.

**Definition.** Let E → M be a fibre bundle. The vertical subspace at a point of E holds the vectors tangent to the fibre. An Ehresmann connection chooses a complementary horizontal subspace at each point of E. Its curvature takes two horizontal vector fields to the vertical part of their Lie bracket.

**Problem.** A connection is flat if there is a local horizontal section through every point. One wants a clean test for flatness on any fibre bundle, not only on vector bundles.

**How the definition helps.** With the connection given as a distribution of planes, flatness is the Frobenius theorem applied to that distribution. The curvature is exactly the obstruction to the horizontal planes being closed under Lie bracket. So curvature zero means the horizontal planes are tangent to local leaves, which are local horizontal sections. Ehresmann introduced the definition in 1950, and it works on any fibre bundle. The Frobenius theorem itself carries the analytic work. Global parallel transport may still fail unless the connection is complete.

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

**Definition.** Away from magnetic charges, the electromagnetic field is defined as a connection on a principal U(1)-bundle. In other words, it is a cocycle of degree 2 in ordinary differential cohomology. Its curvature is the field strength F. Its first Chern class is the magnetic charge.

**Problem.** Prove Dirac charge quantization: magnetic charge comes in integer units, relative to the electric charge.

**How the definition helps.** If the field is a U(1)-connection, quantization holds by definition. Take a sphere around a monopole, and use units where the electric charge is 1. The magnetic flux through the sphere, divided by 2π, is the first Chern number of the bundle, and that number is an integer. In our reading, the physical content moves into the reason to use a connection. Charged quantum particles need a well-defined phase (the holonomy of the connection), and this is Dirac's argument. The same idea extends to higher gauge fields, such as the B-field, the C-field and the RR-fields, when you choose a differential cohomology theory. The choice of theory is then the real physical hypothesis.

**nLab:** [Dirac charge quantization](https://ncatlab.org/nlab/show/Dirac+charge+quantization), [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology). It says: “Equivalently this means that the electromagnetic field is a cocycle in ordinary differential cohomology of degree 2.”

**Sources:**

- [P. A. M. Dirac, Quantised Singularities in the Electromagnetic Field, Proc. Roy. Soc. A 133 (1931) 60–72](https://doi.org/10.1098/rspa.1931.0130)
- [Daniel S. Freed, Dirac Charge Quantization and Generalized Differential Cohomology, Surveys in Differential Geometry 7 (2000) 129–194, arXiv:hep-th/0011220](https://arxiv.org/abs/hep-th/0011220)

### Polystability is exactly the condition for a Hermite–Einstein metric

**Remember:** Sums of stable bundles of equal slope carry Hermite–Einstein metrics.

*Rules out counterexamples.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)), 32L05. arXiv math.DG, math.AG. Level 3: graduate.

**Definition.** The slope of a holomorphic bundle is its degree divided by its rank. A bundle is stable if every proper subsheaf of lower rank has smaller slope. It is polystable if it is a direct sum of stable bundles of the same slope.

**Problem.** A Hermite–Einstein metric is a Hermitian metric whose curvature, contracted with the Kähler form, is a constant times the identity. One wants an algebraic test for which holomorphic bundles over a compact Kähler manifold have one.

**How the definition helps.** A Hermite–Einstein metric splits off any subbundle of equal slope as an orthogonal summand, so the bundle must be polystable, not merely semistable (our own). On an elliptic curve, take the non-split extension of the trivial line bundle by itself (our own). It is semistable but not polystable, and it has no such metric (our own). Stability alone would wrongly exclude direct sums such as the trivial bundle of rank two (our own). With polystability the theorem is an exact equivalence, the Kobayashi–Hitchin correspondence. The hard direction, from polystable to a metric, is the theorem of Donaldson and of Uhlenbeck and Yau.

**Paper or page:** [Blowing-up Hermitian Yang--Mills connections](https://arxiv.org/abs/2301.00525), [Semi-stability and local wall-crossing for hermitian Yang-Mills connections](https://arxiv.org/abs/2304.05245). It says: “There exists a Hermite–Einstein metric on E with respect to ω if and only if E is polystable with respect to L”

**Sources:**

- [A. Clarke and C. Tipler, Blowing-up Hermitian Yang–Mills connections, arXiv:2301.00525 (2023)](https://arxiv.org/abs/2301.00525)
- [K. Uhlenbeck and S.-T. Yau, On the existence of hermitian-yang-mills connections in stable vector bundles, Communications on Pure and Applied Mathematics 39 (1986) S257–S293](https://doi.org/10.1002/cpa.3160390714)

### Putting instantons on S⁴ instead of ℝ⁴ makes the instanton number statable

**Remember:** Add the point at infinity, and the bundle has room to twist.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C07 (Special connections and metrics on vector bundles (Hermite-Einstein, Yang-Mills)), 55R40, 81T13. arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** A field strength (the curvature of a connection) on ℝ⁴ vanishes at infinity if it extends continuously to the one-point compactification ℝ⁴ ∪ {∞}, which is the sphere S⁴. So an SU(2)-instanton is a principal SU(2)-bundle with a self-dual connection on S⁴, not on ℝ⁴. Self-dual means that the curvature equals its own Hodge dual.

**Problem.** Instantons fall into topological sectors labelled by an integer, the instanton number. This integer equals the second Chern class c₂ of the bundle.

**How the definition helps.** Every bundle on ℝ⁴ is trivial, but bundles on S⁴ can twist, so there is an integer to measure. ℝ⁴ is contractible, so no principal bundle on it can carry a topological charge. On S⁴ the isomorphism classes of SU(2)-bundles are π₄(BSU(2)) ≅ ℤ, and in dimension 4 only c₂ can be non-zero, so c₂ is the instanton number. By the clutching construction, you cover S⁴ by two hemispheres, so a bundle is one transition function S³ → SU(2) on the equator; physics books call it the 'large gauge transformation'. The real content is the classification of bundles and Chern–Weil theory. Our own remark: that a finite-action instanton on ℝ⁴ really extends to S⁴ is Uhlenbeck's removable singularity theorem. The existence of a self-dual connection in each sector (ADHM) is a separate hard theorem.

**nLab:** [SU2-instantons from the correct maths to the traditional physics story](https://ncatlab.org/nlab/show/SU2-instantons+from+the+correct+maths+to+the+traditional+physics+story), [Yang-Mills instanton](https://ncatlab.org/nlab/show/Yang-Mills+instanton). It says: “It is this passage from ℝ⁴ to S⁴ which takes care of the subtleties that often tend to be glossed over.”

**Sources:**

- [A. A. Belavin, A. M. Polyakov, A. S. Schwartz, Yu. S. Tyupkin, Pseudoparticle solutions of the Yang-Mills equations, Physics Letters B 59 (1975) 85–87](https://doi.org/10.1016/0370-2693(75)90163-X)

### Synge's theorem needs orientability, which excludes the real projective plane

**Remember:** Positive curvature plus even dimension plus orientable gives no loops.

*Rules out counterexamples.* MSC 53C21 (Methods of global Riemannian geometry, including PDE methods; curvature restrictions). arXiv math.DG. Level 3: graduate.

**Definition.** A manifold is orientable when one can choose a consistent sense of rotation at every point. It is simply connected when every loop can shrink to a point. Sectional curvature measures whether geodesics that start in a two-dimensional direction spread apart or come together; positive means they come together.

**Problem.** Find the topology that positive curvature forces on a compact manifold.

**How the definition helps.** The orientability condition removes the case that breaks the theorem, so the conclusion holds without exceptions. The real projective plane, the round sphere with opposite points identified, has positive curvature and is even-dimensional (our own). It is not simply connected and not orientable, so the condition must exclude it (our own). In the proof, one moves a vector around the shortest loop in a nontrivial loop class (our own). Orientation makes this motion a rotation of an odd-dimensional space, so some vector returns unchanged (our own). Positive curvature then shortens the loop, which is a contradiction (our own).

**Paper or page:** [The curvature of convex sum of metrics and applications](https://arxiv.org/abs/2106.14781). It says: “Let (M,g) be a compact manifold with positive sectional curvature. Then, If M is even-dimensional and orientable, then it is simply-connected, If M is odd-dimensional, then it is orientable.”

**Sources:**

- [L. F. Cavenaghi and L. D. Sperança, The curvature of convex sum of metrics and applications, arXiv:2106.14781 (2021)](https://arxiv.org/abs/2106.14781)
- [J. L. Synge, On the connectivity of spaces of positive curvature, Quarterly Journal of Mathematics 7 (1936) 316–320](https://doi.org/10.1093/qmath/os-7.1.316)

### Defining Jacobi fields as geodesic variations makes Killing fields Jacobi

**Remember:** Move the geodesic by isometries and differentiate to get a Jacobi field.

*True by definition. Confidence: medium.* MSC 53C22 (Geodesics in global differential geometry), 53B20. arXiv math.DG. Level 3: graduate.

**Definition.** Define a Jacobi field along a geodesic γ as the derivative of a smooth family of geodesics through γ. The usual definition asks for a solution of the Jacobi equation J″ + R(J,γ′)γ′ = 0. Here R is the curvature tensor.

**Problem.** Restrict a Killing field to a geodesic segment. A Killing field is a vector field whose flow preserves the metric. The restriction is a Jacobi field.

**How the definition helps.** The flow of a Killing field moves geodesics to geodesics, so it gives a family of geodesics at once (our own argument). The derivative of this family is the Killing field along the segment. With the equation definition, one must instead prove a second-order identity for Killing fields (our own comparison). The work moves to the theorem that the two definitions agree. Differentiating the geodesic equation gives the Jacobi equation, and smooth dependence on initial data gives the converse (our own).

**Wikipedia:** [Jacobi field](https://en.wikipedia.org/wiki/Jacobi_field). It says: “Take a smooth one parameter family of geodesics”

**Sources:** none listed. No primary source with a working link was found.

### Killing fields give conserved quantities along geodesics

**Remember:** Pair the same velocity twice with an antisymmetric derivative and get zero.

*True by definition. Confidence: medium.* MSC 53C22 (Geodesics in global differential geometry), 53C05, 83C40. arXiv math.DG, gr-qc. Level 3: graduate.

**Definition.** Use the metric to turn a vector field K into a linear functional on each tangent space. In the Killing equation, the covariant derivative of that functional is antisymmetric. The covariant derivative compares quantities at nearby points using the metric. The geometric definition instead says that the motion generated by K preserves the metric.

**Problem.** On an affinely parametrized geodesic, a path whose tangent U is parallel along itself, the metric product g(K, U) stays constant.

**How the definition helps.** The antisymmetric derivative makes the rate of change of g(K, U) vanish because it pairs U with itself. No derivative of U remains because U is parallel along the path (our own). The work is in identifying that antisymmetry with preservation of the metric. A coordinate that does not appear in the metric gives a special case of this construction.

**Wikipedia:** [Killing vector field](https://en.wikipedia.org/wiki/Killing_vector_field). It says: “Each Killing vector corresponds to a quantity which is conserved along geodesics. This conserved quantity is the metric product between the Killing vector and the geodesic tangent vector.”

**Sources:** none listed. No primary source with a working link was found.

### Approximate midpoints let a three-point test detect length spaces

**Remember:** Halve the gaps and let the errors shrink.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C22. arXiv math.MG. Level 3: graduate.

**Definition.** In a length space, the distance between two points is the infimum of the lengths of paths that join them. A point z is an ε-midpoint of x and y if both d(x, z) and d(y, z) are at most d(x, y)/2 + ε.

**Problem.** A complete metric space is a length space exactly when every pair of points has an ε-midpoint for every ε &gt; 0.

**How the definition helps.** By our own explanation, the midpoint test replaces a statement about paths with one about three points at a time. For the converse, our own construction inserts midpoints again and again, with errors chosen so the added length stays small. Completeness then lets this map from the dyadic rationals extend to a path. The rational line shows that completeness is needed: it has exact midpoints but no paths between distinct points. By our own remark, the three-point test survives small changes of distances. So it makes it easy to show that a complete Gromov–Hausdorff limit of length spaces is a length space.

**Paper or page:** [A Gentle Introduction to CAT(0) Spaces](https://arxiv.org/abs/2406.09883v1). It says: “X is a length space if and only if it admits ε-midpoints for all ε &gt; 0.”

**Sources:**

- [Søren Poulsen, A Gentle Introduction to CAT(0) Spaces, arXiv:2406.09883v1 (2024)](https://arxiv.org/abs/2406.09883v1)

### Blending distances along an optimal correspondence gives Gromov–Hausdorff geodesics

**Remember:** Blend the two distance functions along a best match.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54E45. arXiv math.MG. Level 3: graduate.

**Definition.** A correspondence between two metric spaces is a set of pairs that uses every point of each space at least once. Its distortion is the supremum of \|d(x,x′) − d(y,y′)\| over pairs (x,y) and (x′,y′) in it. An optimal correspondence has the least distortion. At time t, give the set of pairs the distance (1 − t)·d(x,x′) + t·d(y,y′).

**Problem.** Nonempty compact metric spaces up to isometry form a geodesic space under Gromov–Hausdorff distance. Each closed optimal correspondence gives a shortest path between its endpoints.

**How the definition helps.** All the intermediate spaces use the same set of pairs, so only the weights on the two distances change, in our own explanation. Match each pair to itself. This shows that the spaces at times s and t are at distance at most \|t − s\|·d(X,Y), by our own bound. The triangle inequality then forces equality, in our own argument. What stays hard is that an optimal closed correspondence exists and that half its distortion equals the Gromov–Hausdorff distance.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “is a shortest geodesic with the speed dɢʜ(X,Y).”

**Sources:**

- [Alexey A. Tuzhilin, Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry, arXiv:2012.00756v1 (2020)](https://arxiv.org/abs/2012.00756v1)

### Bonnet–Myers for Alexandrov spaces must exclude lines and circles

**Remember:** A line has no fat triangles to fail, so exclude it.

*Rules out counterexamples. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C21. arXiv math.DG, math.MG. Level 3: graduate.

**Definition.** A length space has curvature at least k if small triangles are at least as fat as comparison triangles on the sphere of curvature k. This is Alexandrov's definition. It uses only distances.

**Problem.** Bonnet–Myers says that a complete manifold with Ricci curvature at least (n−1)k, k&gt;0, has diameter at most π/√k. The metric version asks the same for complete length spaces with curvature at least k.

**How the definition helps.** The theorem excludes the one-dimensional spaces by name, because they satisfy the definition but break the bound. In the real line every triangle is degenerate, so it is no thinner than any comparison triangle (our own). So the line has curvature at least k for every k, but it has infinite diameter (our own). In dimension two and higher, real triangles exist and the comparison forces the diameter bound. The paper proves a Lorentzian version for spaces with a global timelike curvature bound. There the exclusion becomes a condition: any two timelike related points span a non-degenerate timelike triangle. The step from local to global comparison stays the hard part.

**Paper or page:** [Alexandrov's Patchwork and the Bonnet--Myers Theorem for Lorentzian length spaces](https://arxiv.org/abs/2302.11615), [Alexandrov's Patchwork and the Bonnet--Myers Theorem for Lorentzian length spaces](https://arxiv.org/abs/2302.11615). It says: “Let X be a complete length space with (local) curvature bounded below by some k&gt;0, which is not one of the aforementioned 1-dimensional spaces. Then diam(X) ≤ π/√k.”

**Sources:**

- [T. Beran, L. Napper and F. Rott, Alexandrov's Patchwork and the Bonnet–Myers Theorem for Lorentzian length spaces, arXiv:2302.11615 (2023)](https://arxiv.org/abs/2302.11615)

### Comparison with flat triangles makes geodesics in CAT(0) spaces unique

**Remember:** A triangle with zero width cannot hold two different shortest paths.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 20F67. arXiv math.MG. Level 3: graduate.

**Definition.** A geodesic is a shortest path, parametrized proportionally to length. A CAT(0) space is a geodesic metric space in which each geodesic triangle is as thin as a Euclidean triangle with equal sides, or thinner. This means distances between points on the triangle are at most the distances between the matching Euclidean points. Degenerate comparison triangles, which lie on a line, are allowed.

**Problem.** In a CAT(0) space, each pair of points is joined by exactly one geodesic.

**How the definition helps.** The comparison inequality, applied to a degenerate triangle, forces two points to coincide, in our own proof. Take two geodesics c and c′ from x to y, and a time t. Form the triangle whose sides are c′ and the two pieces of c that meet at c(t). Its comparison triangle is a segment, because the two pieces have total length d(x,y). The comparison points of c(t) and c′(t) coincide, so d(c(t), c′(t)) = 0. What stays hard is checking the comparison inequality for a particular space.

**Paper or page:** [A Gentle Introduction to CAT(0) Spaces](https://arxiv.org/abs/2406.09883v1). It says: “X is uniquely geodesic”

**Sources:**

- [Søren Poulsen, A Gentle Introduction to CAT(0) Spaces, arXiv:2406.09883v1 (2024)](https://arxiv.org/abs/2406.09883v1)

### Fundamental-cycle norms make simplicial volume bound absolute degree times target volume

**Remember:** Pushing a cycle forward never increases the sum of its absolute coefficients.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 57N65. arXiv math.GT, math.DG. Level 3: graduate.

**Definition.** A real fundamental cycle of a connected closed oriented manifold represents its orientation in top-dimensional homology. The norm of the cycle is the sum of the absolute values of its coefficients. Simplicial volume is the infimum of that norm over all real fundamental cycles.

**Problem.** For a map f between connected closed oriented manifolds of the same dimension, show that ‖M‖ ≥ \|deg f\| · ‖N‖. Deduce that a self-map of absolute degree greater than one forces zero simplicial volume.

**How the definition helps.** In our own proof, the cycle norm gives the inequality because pushing a cycle forward can combine coefficients but cannot increase their absolute sum. A fundamental cycle maps to a cycle representing deg(f) times the target's orientation class. Scaling a real class scales its norm by the absolute factor. Taking the infimum gives the result.

**Wikipedia:** [Simplicial volume](https://en.wikipedia.org/wiki/Simplicial_volume). It says: “one defines the simplicial norm by minimizing the sum of the absolute values of the coefficients over all singular chains homologous to a given cycle. The simplicial volume is the simplicial norm of the fundamental class.”

**Sources:**

- [Gromov, M. (1982). Volume and bounded cohomology. Publications Mathématiques de l'IHÉS 56, 5–99.](https://doi.org/10.5802/pmihes.3)

### Gluing spaces along a shared copy gives the Gromov–Hausdorff triangle inequality

**Remember:** Glue the two comparison spaces along their shared middle space.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54E35. arXiv math.MG, math.GN. Level 3: graduate.

**Definition.** The Hausdorff distance between two subsets is the infimum of the r such that each lies within distance r of the other. The Gromov–Hausdorff distance between two metric spaces is the infimum of Hausdorff distances between distance-preserving copies of them in any common metric space.

**Problem.** For metric spaces X, Y and Z, the Gromov–Hausdorff distance d satisfies d(X, Z) ≤ d(X, Y) + d(Y, Z). Distances may be infinite, for example for unbounded spaces.

**How the definition helps.** By our own explanation, the definition allows any common space, so two comparison spaces can be glued into a third. Take a space that contains copies of X and Y, and another that contains copies of Y and Z. Glue the two along their copies of Y. Across the join, the distance is the infimum of sums of distances through a point of Y, after identifying points at distance zero. Both original copies stay distance-preserving, and the Hausdorff triangle inequality in the glued space gives the bound. The harder fact in the same lectures is that distance zero forces an isometry for compact spaces.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “The function dɢʜ satisfies the triangle inequality.”

**Sources:**

- [Alexey A. Tuzhilin, Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry, arXiv:2012.00756v1 (2020)](https://arxiv.org/abs/2012.00756v1)

### Gromov–Hausdorff distance zero means isometric when both spaces are compact

**Remember:** On compact spaces, arbitrarily good matches yield an exact match.

*Rules out counterexamples.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54E45. arXiv math.MG. Level 3: graduate.

**Definition.** The Hausdorff distance between two subsets is the infimum of the r such that each lies within distance r of the other. The Gromov–Hausdorff distance between two metric spaces is the infimum of Hausdorff distances between isometric copies of them inside a common metric space. The theorem restricts to nonempty compact spaces.

**Problem.** Two nonempty compact metric spaces have Gromov–Hausdorff distance zero exactly when some distance-preserving bijection joins them.

**How the definition helps.** Compactness lets matches with smaller and smaller error converge to an exact match without losing points, in our own explanation. Our own counterexample is the open and the closed unit intervals in the real line. Their Hausdorff distance there is zero, so their Gromov–Hausdorff distance is zero. They are not isometric, because only the closed interval is compact. The lecture notes also give a counterexample with boundedly compact spaces.

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

**How the definition helps.** An isometry leaves each distance quotient unchanged, so the limit is unchanged (our own argument). With the velocity definition, one would first need the Myers–Steenrod theorem that distance-preserving maps of Riemannian manifolds are smooth (our own). The work moves to proving that metric speed equals the norm of the velocity for smooth curves.

**Wikipedia:** [Metric derivative](https://en.wikipedia.org/wiki/Metric_derivative). It says: “It generalizes the notion of "speed" or "absolute velocity" to spaces which have a notion of distance”

**Sources:** none listed. No primary source with a working link was found.

### The Gromov product definition of hyperbolicity makes equivalence at infinity transitive

**Remember:** Two growing products force the third product to grow.

*True by definition.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 20F67. arXiv math.MG. Level 3: graduate.

**Definition.** Write (x\|y) = (d(o,x) + d(o,y) − d(x,y))/2 for a fixed base point o. This Gromov product measures how long paths from o to x and to y stay together. Define δ-hyperbolicity by (x\|z) ≥ min((x\|y),(y\|z)) − δ. The other definition asks that each side of a geodesic triangle stay within δ of the other two sides.

**Problem.** Take sequences that converge at infinity, meaning that (xₙ\|xₘ) → ∞ as n and m grow. Call two such sequences equivalent when (xₙ\|yₙ) → ∞. This relation is transitive.

**How the definition helps.** The inequality bounds (xₙ\|zₙ) below by the smaller of two growing products minus δ, so it grows too (our own argument). With the thin-triangle definition, one must first prove this inequality for geodesic spaces (our own comparison). The work moves to the theorem that the two definitions agree up to a change of δ.

**Wikipedia:** [Hyperbolic metric space](https://en.wikipedia.org/wiki/Hyperbolic_metric_space). It says: “converging to infinity are considered equivalent when”

**Sources:** none listed. No primary source with a working link was found.

### The midpoint inequality gives each bounded set in CAT(0) a unique center

**Remember:** A midpoint beats both candidate centers unless they are already close.

*True by definition. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C70. arXiv math.MG. Level 3: graduate.

**Definition.** Define nonpositive curvature of a geodesic metric space by the midpoint inequality. Take any point z and the midpoint m of x and y. Then d(z,m)² is at most the average of d(z,x)² and d(z,y)², minus d(x,y)²/4. The usual definition compares whole triangles with Euclidean triangles of the same side lengths.

**Problem.** In a complete CAT(0) space, each nonempty bounded set has a unique point that minimizes the largest distance to the set. This point is its circumcenter.

**How the definition helps.** Taking the supremum over the set gives the midpoint inequality for the squared radius function (our own argument). So two nearly optimal centers must be close, since their midpoint cannot beat the least radius (our own). Completeness then gives a center, and the same inequality gives uniqueness (our own). The work moves to the theorem that the midpoint inequality follows from triangle comparison.

**Wikipedia:** [Cartan–Hadamard theorem](https://en.wikipedia.org/wiki/Cartan%E2%80%93Hadamard_theorem). It says: “the square distance from the vertex z to the midpoint of the opposite side”

**Sources:** none listed. No primary source with a working link was found.

### The midpoint inequality makes products of CAT(0) spaces CAT(0)

**Remember:** Squared distances add in the product, so the midpoint inequalities add too.

*True by definition. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C70. arXiv math.MG. Level 3: graduate.

**Definition.** A CAT(0) space is a geodesic metric space that is nonpositively curved in a triangle sense. Here define it by the midpoint inequality d(z,m)² ≤ (d(z,x)² + d(z,y)²)/2 − d(x,y)²/4, for the midpoint m of x and y. The usual definition compares whole triangles with Euclidean triangles of the same side lengths.

**Problem.** A finite product of CAT(0) spaces, with the Euclidean product distance, is CAT(0).

**How the definition helps.** Squared product distances are sums of squared factor distances, so the factor inequalities add to the product inequality (our own argument). The pair of factor midpoints is a midpoint in the product (our own). The work moves to the theorem that the midpoint inequality is equivalent to full triangle comparison. This is the Bruhat–Tits inequality.

**Wikipedia:** [CAT(k) space](https://en.wikipedia.org/wiki/CAT%28k%29_space). It says: “The distance between a vertex of a geodesic triangle and the midpoint of the opposite side is always less than the corresponding distance in the comparison triangle in the plane with the same side-lengths.”

**Sources:** none listed. No primary source with a working link was found.

### Using only contractible loops makes flatness equal to trivial holonomy

**Remember:** Shrinkable loops feel curvature; other loops also feel the topology.

*Rules out counterexamples.* MSC 53C29 (Issues of holonomy in differential geometry), 53C05. arXiv math.DG. Level 3: graduate.

**Definition.** A connection is a rule for moving vectors along curves, called parallel transport. The holonomy group of a connection at a point x is the group of linear maps given by parallel transport around loops based at x. The restricted holonomy group uses only contractible loops, those that can be shrunk to a point.

**Problem.** Relate holonomy to curvature: a connection should have zero curvature exactly when parallel transport around loops does nothing. The Ambrose–Singer theorem should give the Lie algebra of holonomy from curvature.

**How the definition helps.** Restricting to contractible loops removes the topological part of holonomy, so what is left is controlled by curvature alone. The full holonomy can be nontrivial for a flat connection. For example, the flat cone or the flat Möbius band turns vectors around a loop that cannot be shrunk; this example is our own. The restricted group is always a connected Lie subgroup, and on a simply connected manifold the two groups agree. The Ambrose–Singer theorem (1953) then says the Lie algebra of the holonomy is spanned by curvature values transported back to the base point.

**Wikipedia:** [Holonomy](https://en.wikipedia.org/wiki/Holonomy). It says: “∇ is flat (i.e. has vanishing curvature) if and only if Hol⁰(∇) is trivial. In this case, Hol(∇) may still be nontrivial.”

**Sources:**

- [W. Ambrose and I. M. Singer, A theorem on holonomy, Transactions of the American Mathematical Society 75 (1953) 428–443](https://doi.org/10.1090/S0002-9947-1953-0063739-1)

### Defining local symmetry by geodesic reflections makes the curvature parallel

**Remember:** Reflection keeps the curvature derivative but flips the sign of all five arguments.

*True by definition. Confidence: medium.* MSC 53C35 (Differential geometry of symmetric spaces), 53B20. arXiv math.DG. Level 3: graduate.

**Definition.** Call a Riemannian metric locally symmetric if, near each point, the reflection through that point along geodesics preserves the metric. This reflection sends exp(v) to exp(−v). The other definition asks that the curvature tensor have zero covariant derivative.

**Problem.** On a locally symmetric Riemannian manifold, the curvature tensor is parallel, which means that its covariant derivative is zero.

**How the definition helps.** The reflection preserves the metric, so it preserves the covariant derivative of the curvature (our own argument). Its differential at the center is minus the identity. This tensor has five vector arguments, so it equals its own negative at the center (our own). The work moves to the converse, that parallel curvature makes the local reflections isometries (our own). That converse is the Cartan–Ambrose–Hicks theorem.

**Wikipedia:** [Symmetric space](https://en.wikipedia.org/wiki/Symmetric_space). It says: “This is equivalent to the vanishing of the covariant derivative of the curvature tensor.”

**Sources:** none listed. No primary source with a working link was found.

### Defining symmetric spaces by point reflections makes geodesic completeness immediate

**Remember:** Reflect the existing part of a geodesic to extend it beyond its endpoint.

*True by definition.* MSC 53C35 (Differential geometry of symmetric spaces), 53C30. arXiv math.DG. Level 3: graduate.

**Definition.** Define a Riemannian symmetric space as a connected Riemannian manifold with an isometry at each point that fixes the point and reverses tangent vectors there. Another description is a quotient G/K of a Lie group by a subgroup fixed by an automorphism of order two.

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

**Definition.** Define a harmonic morphism as a smooth map φ that pulls back harmonic functions. That is, f∘φ is harmonic whenever f is harmonic on an open set of the target. A harmonic function solves the Laplace equation. The other test asks for a harmonic map whose differential is zero or scales lengths evenly off its kernel.

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

**How the definition helps.** For an isometric immersion, the tension is the trace of the second fundamental form, so the claim is one line. The second fundamental form measures how the image bends in normal directions. This trace is the dimension times the mean curvature vector (our own). With the energy definition, one must compare the first variations of energy and volume instead (our own). The work moves to the theorem that zero tension is the same as energy stationarity.

**nLab:** [harmonic map](https://ncatlab.org/nlab/show/harmonic+map). It says: “is a harmonic map if and only if it has vanishing”

**Sources:**

- [James Eells and J. H. Sampson, Harmonic Mappings of Riemannian Manifolds (1964)](https://doi.org/10.2307/2373037)

### A Cauchy surface makes wave equations well posed on globally hyperbolic spacetimes

**Remember:** There is one moment of time that every observer passes through exactly once.

*Rules out counterexamples. Confidence: medium.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 35L20, 83C05. arXiv math.DG, math-ph. Level 3: graduate.

**Definition.** A Lorentzian manifold is a manifold with a metric that has one time direction, as in relativity. It is globally hyperbolic if it contains a Cauchy surface. A Cauchy surface is an embedded submanifold Σ with this property: every timelike curve (the path of an observer slower than light) can be extended to a timelike curve that meets Σ in exactly one point.

**Problem.** Wave equations such as the Klein–Gordon equation should have unique advanced and retarded Green functions. These are the solutions for a point source that are zero in the future of the source, or in its past. Then fields evolve uniquely from initial data.

**How the definition helps.** Global hyperbolicity is the hypothesis that makes the theorem true in general; it does not make the analysis easy. On a globally hyperbolic spacetime, the Klein–Gordon operator is Green hyperbolic: its advanced and retarded Green functions exist and are unique (Bär–Ginoux–Pfäffle). The condition excludes spacetimes that are not globally hyperbolic, such as anti de Sitter space and the inner regions of Kerr and Reissner–Nordström. Geroch's theorem adds that the spacetime is then homeomorphic to ℝ × Σ, with each slice a Cauchy surface.

**nLab:** [globally hyperbolic Lorentzian manifold](https://ncatlab.org/nlab/show/globally+hyperbolic+Lorentzian+manifold), [Cauchy surface](https://ncatlab.org/nlab/show/Cauchy+surface), [Green hyperbolic partial differential equation](https://ncatlab.org/nlab/show/Green+hyperbolic+partial+differential+equation), [smooth Lorentzian space](https://ncatlab.org/nlab/show/smooth+Lorentzian+space). It says: “A Lorentzian manifold is called globally hyperbolic if it admits a well-defined time evolution from initial data of physical fields on it.”

**Sources:**

- [Christian Bär, Nicolas Ginoux, Frank Pfäffle, Wave equations on Lorentzian manifolds and quantization, EMS (2007), arXiv:0806.1036](https://arxiv.org/abs/0806.1036)
- [Robert Geroch, Domain of dependence, J. Math. Phys. 11 (1970) 437–449](https://doi.org/10.1063/1.1665157)

### Cauchy surfaces separate past and future

**Remember:** Every observer crosses once, so every event lies before, on, or after.

*True by definition.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics). arXiv gr-qc, math.DG. Level 3: graduate.

**Definition.** A Cauchy surface meets every timelike curve that cannot be extended at either end exactly once. A timelike curve can describe a slower-than-light observer. A spacelike surface alone does not require a meeting.

**Problem.** A spacetime with a Cauchy surface splits into the surface, its timelike past, and its timelike future. These three sets are disjoint.

**How the definition helps.** The crossing rule puts every event on the surface or on one side of it in time. In our own proof, extend a timelike path through the event in both directions and locate its unique crossing. Any timelike connection between surface points would give a path crossing twice, so the three sets are disjoint. A spacelike surface alone need not meet every path. A separate theorem identifies spacetimes admitting Cauchy surfaces with globally hyperbolic spacetimes.

**nLab:** [Cauchy surface](https://ncatlab.org/nlab/show/Cauchy+surface). It says: “intersects Σ precisely in one point.”

**Paper or page:** [Limit curve theorems for incomplete metric spaces and the null distance on Lorentzian manifolds](https://arxiv.org/abs/2511.05847v1). It says: “M is the disjoint union M = I⁺(S) ∪ S ∪ I⁻(S).”

**Sources:** none listed. No primary source with a working link was found.

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

**Definition.** Let Ω be a bounded open convex set in ℝⁿ. For distinct points A and B in Ω, let X and Y be the boundary points in the order X, A, B, Y. Set d(A, B) to the logarithm of (\|XB\|·\|AY\|)/(\|XA\|·\|BY\|), a cross-ratio of these four points. Set d(A, A) = 0.

**Problem.** If C lies on the segment from A to B, then d(A, B) = d(A, C) + d(C, B). Thus straight segments are shortest paths in the Hilbert metric.

**How the definition helps.** Our own proof uses the fixed endpoints X and Y to make the two cross-ratios multiply to the third. The factors \|XC\| and \|CY\| cancel, so taking logarithms gives the sum. Another description measures path length by integrating a direction-dependent length for each tangent vector. In that description the shortest-path claim also requires ruling out shorter curved paths. With the cross-ratio definition, that work is in the triangle inequality, which uses convexity.

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

**Problem.** In classical mechanics, the flow of any Hamiltonian H should preserve the phase-space structure. This gives Liouville's theorem that phase-space volume is conserved.

**How the definition helps.** With closedness in the definition, preservation of ω by every Hamiltonian flow is a one-line computation. Cartan's formula gives L(Vₕ) ω = d(ι(Vₕ) ω) + ι(Vₕ) dω = d(dH) + ι(Vₕ) dω = ι(Vₕ) dω. This vanishes for every H exactly when dω = 0. Liouville's theorem follows, because ω to the power n is then a preserved volume form. In dimension 2, every 2-form is closed, so any area form is symplectic. The nondegeneracy condition is what makes Vₕ exist at all.

**Wikipedia:** [Symplectic manifold](https://en.wikipedia.org/wiki/Symplectic_manifold). It says: “the requirement for the vanishing Lie derivative along flows of Vₕ corresponding to arbitrary smooth H is equivalent to the requirement that ω should be closed.”

**Sources:** none listed. No primary source with a working link was found.

### Closedness of the symplectic form leaves no local invariants, by Darboux

**Remember:** Symplectic manifolds all look alike up close.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D05 (Symplectic manifolds (general theory)), 37J06. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** A symplectic manifold is a manifold with a closed, nondegenerate 2-form ω. Darboux coordinates are local coordinates x₁, …, xₙ, y₁, …, yₙ in which ω = dx₁∧dy₁ + … + dxₙ∧dyₙ.

**Problem.** Darboux's theorem: near every point of a 2n-dimensional symplectic manifold there are coordinates in which ω takes the standard form. So any two symplectic manifolds of the same dimension are locally the same.

**How the definition helps.** Closedness is what lets Moser's trick deform any symplectic form into the standard one near a point. Moser's trick joins the two forms by a path and follows a flow along it. So symplectic geometry has no local invariants and is purely global. In Riemannian geometry, by contrast, curvature is a local invariant that stops most metrics from being flat near a point. Our own point: for a nondegenerate form that is not closed, dω is itself a local invariant. Darboux proved the theorem in 1882 as a solution of Pfaff's problem. The difficulty moves to global questions, such as Gromov's non-squeezing theorem.

**Wikipedia:** [Darboux's theorem](https://en.wikipedia.org/wiki/Darboux%27s_theorem). It says: “Darboux's theorem for symplectic manifolds implies that there are no local invariants in symplectic geometry”

**Sources:**

- [G. Darboux, Sur le problème de Pfaff, Bulletin des Sciences Mathématiques 6 (1882) 14–36, 49–68](http://gallica.bnf.fr/ark:/12148/bpt6k68005v)

### Constant rank gives a closed two-form a Darboux normal form

**Remember:** Fix the rank, and every closed two-form looks standard near each point.

*Rules out counterexamples.* MSC 53D05 (Symplectic manifolds (general theory)), 58A10. arXiv math.DG, math.SG. Level 3: graduate.

**Definition.** A pre-symplectic form is a closed two-form ω whose rank is the same at every point. The rank is the rank of ω as an antisymmetric matrix. Its kernel at each point is the set of vectors v with ω(v, w) = 0 for all w.

**Problem.** Darboux coordinates write ω locally as dq¹∧dp₁ + … + dqʳ∧dpᵣ. One wants such coordinates for a closed two-form that is degenerate.

**How the definition helps.** Constant rank makes the kernel a smooth subbundle that one can divide out, so the symplectic Darboux theorem applies to what remains (our own). Closedness of ω makes the kernel integrable (our own). The theorem says the kernel is spanned by the coordinate fields ∂/∂zᴬ. The form x dx∧dy on ℝ² is closed, but its rank drops from 2 to 0 on the line x = 0 (our own). No coordinates near the origin give it a standard form, so the condition must exclude it (our own). Forms whose rank changes need separate local models (our own).

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

**How the definition helps.** Fixed cohomology makes the time derivative an exterior derivative, supplying the one-form needed to cancel the change (our own). The proof chooses these one-forms smoothly and uses nondegeneracy to convert them into a vector field (our own). Compactness lets its flow run for the whole time interval (our own). On a product of two area-one tori, multiply the first area form by t and the second by 1/t (our own). Their sum keeps the same volume as t grows from one to two, but its integral over the first torus doubles (our own). A smooth deformation of the identity preserves this integral (our own).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “Then there exists an isotopy ρ ⦂ M × ℝ → M such that”

**Sources:** none listed. No primary source with a working link was found.

### Quotienting null directions removes degeneracy

**Remember:** Remove precisely the directions that pair to zero.

*Makes the theorem clean to state or prove.* MSC 53D05 (Symplectic manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** A presymplectic form is a closed two-form that may have a kernel. Its null directions are the tangent vectors that pair to zero with every vector. Take the quotient by the connected leaves tangent to these directions.

**Problem.** Assume the form has constant rank and its space of leaves is a smooth manifold. If the quotient projection has surjective derivative everywhere, the form descends to a unique closed nondegenerate two-form.

**How the definition helps.** Identifying points along null directions specifies a quotient where the descended form can be nondegenerate. In our own proof, constant rank and closedness make the null directions tangent to connected submanifolds called leaves. The form vanishes when one argument is tangent to a leaf. Cartan’s formula and closedness show that motion along a leaf also preserves the form. These facts give descent through the smooth projection, and removing precisely the kernel gives nondegeneracy. Existence of the smooth quotient is a separate hypothesis.

**nLab:** [presymplectic structure](https://ncatlab.org/nlab/show/presymplectic+structure). It says: “the quotient of X by the flow of the vector fields in the kernel of ω is, if it exists in a reasonable way, a symplectic manifold.”

**Sources:** none listed. No primary source with a working link was found.

### The coordinate-free tautological form makes cotangent lifts preserve the symplectic form

**Remember:** The lift keeps θ, so it keeps dθ.

*True by definition. Confidence: medium.* MSC 53D05 (Symplectic manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** A covector at a point x is a linear map from the tangent space at x to the real numbers. The cotangent bundle T\*M collects all covectors of M. At a covector α, the tautological one-form θ projects a tangent vector of T\*M to the base and applies α to it. The canonical symplectic form is dθ, which in coordinates is Σ dpᵢ ∧ dqᵢ, where θ = Σ pᵢ dqᵢ.

**Problem.** Let f be a diffeomorphism from M to N. Its cotangent lift sends a covector α at x to α ∘ (df)⁻¹ at f(x). This lift pulls the canonical symplectic form of T\*N back to that of T\*M.

**How the definition helps.** With the coordinate-free definition, the lift preserves θ itself, so it also preserves dθ. In our own check, the inverse derivative in the lift cancels the derivative of f inside θ. Pullback commutes with the exterior derivative, so dθ is preserved too. In our own comparison, the coordinate formula would require tracking how the coordinates pᵢ and qᵢ change under f. In our own account, the work moves to showing that θ is smooth, gives the coordinate formula, and has nondegenerate dθ.

**nLab:** [cotangent bundle](https://ncatlab.org/nlab/show/cotangent+bundle). It says: “The de Rham differential ω ≔ dθ is a symplectic form.”

**Sources:** none listed. No primary source with a working link was found.

### Contact maps lift by rescaling covectors

**Remember:** Lift the covectors and their evaluation rule stays the same.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** A contact structure specifies tangent hyperplanes locally given by the kernel of a contact form α. Define its symplectization using all nonzero covectors that vanish on these planes. The tautological one-form evaluates each covector on the projection of a tangent vector to the base. Its exterior derivative is the symplectic form.

**Problem.** A diffeomorphism preserving contact planes lifts canonically to a diffeomorphism preserving the symplectic form on the symplectization.

**How the definition helps.** Defining the space by covectors makes the lift the usual change of covectors under a diffeomorphism. In our own proof, pull each covector back by the inverse map. It still vanishes on the contact planes, and its evaluation on a projected tangent vector stays unchanged. The lift therefore preserves the tautological form and its derivative. Using a chosen contact form instead requires tracking its rescaling. Locally every such covector is rα for a contact form α and a nonzero scalar r. The contact condition makes d(rα) nondegenerate.

**Wikipedia:** [Contact geometry](https://en.wikipedia.org/wiki/Contact_geometry). It says: “This construction does not depend on the choice of contact form.”

**Sources:** none listed. No primary source with a working link was found.

### Defining coorientability by a trivial quotient line makes hyperplane fields kernels

**Remember:** A trivial quotient line gives one global equation for the hyperplanes.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)), 58A30. arXiv math.SG, math.DG. Level 3: graduate.

**Definition.** A hyperplane field ξ on M picks a codimension-one subspace of each tangent space, varying smoothly. Call ξ coorientable when the quotient line bundle TM/ξ is trivial. The geometric definition asks for a continuous choice of one side of each hyperplane.

**Problem.** A hyperplane field ξ is coorientable exactly when ξ is the kernel of a smooth one-form that is nowhere zero.

**How the definition helps.** With the quotient definition, the one-form is just the quotient map followed by a trivialization. The map α: TM → TM/ξ ≅ M × ℝ has kernel ξ. Conversely, a nowhere-zero form with kernel ξ maps TM/ξ isomorphically onto M × ℝ. The work goes into matching the geometric definition, since a choice of side orients the line bundle TM/ξ. In our own account, an oriented line bundle is trivial by a partition of unity argument.

**Paper or page:** [On the Canonical Contact Structure of the Space of Null Geodesics of a Spacetime](https://arxiv.org/abs/2109.03656v1). It says: “it is possible to write ξ = ker α globally if and only if ξ is coorientable, that is, the quotient bundle TM/ξ is trivial.”

**Sources:**

- [Hansjörg Geiges, An Introduction to Contact Topology (2008), Lemma 1.1.1](https://doi.org/10.1017/CBO9780511611438)

### Transverse Liouville fields give contact forms

**Remember:** A transverse Liouville field gives the contact form and normalizes the motion.

*True by definition.* MSC 53D10 (Contact manifolds (general theory)). arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic form ω is a closed nondegenerate two-form. A Liouville field V gives a one-form λ = ω(V, ·) satisfying dλ = ω. A hypersurface has contact type if such a field crosses it everywhere. On a hypersurface of dimension 2n − 1, a contact form α satisfies α ∧ (dα)ⁿ⁻¹ ≠ 0 everywhere.

**Problem.** On a hypersurface of contact type, the restriction of λ is a contact form α. On a regular energy surface, its Reeb field follows the Hamiltonian trajectories up to a change of speed.

**How the definition helps.** The crossing condition replaces a separate contact-volume test with a test for a nonzero normal component. In our own proof, inserting V into the ambient volume ωⁿ gives nλ ∧ ωⁿ⁻¹. This restricts to a volume form exactly where V crosses the surface. The Reeb field spans the kernel of the restricted dα and satisfies α(R) = 1. On a level where the energy differential never vanishes, the Hamiltonian field spans that same kernel.

**Paper or page:** [A note on the geometry of the two-body problem on S²](https://arxiv.org/abs/2310.02659v2). It says: “is a (positive) time reparametrisation of the Hamiltonian vector field”

**Sources:**

- [A note on the geometry of the two-body problem on S², Theorem 4.2](https://arxiv.org/abs/2310.02659v2)

### Conormal bundles are Lagrangian

**Remember:** A conormal covector kills every allowed base direction.

*True by definition.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** At each point of a smooth submanifold, take all linear functionals that vanish on its tangent space. Together they form the conormal bundle. The canonical one-form on the cotangent bundle evaluates each functional on the base component of a tangent vector.

**Problem.** The conormal bundle of a smooth submanifold is Lagrangian in the ambient cotangent bundle. That means the symplectic form vanishes on it and it has half the ambient dimension.

**How the definition helps.** The canonical one-form vanishes on the conormal bundle because all its base directions lie along the submanifold (our own). Its restriction therefore has zero exterior derivative, giving zero for the restricted symplectic form without a coordinate calculation (our own). For a k-dimensional submanifold of an n-dimensional space, each conormal fiber contributes n − k dimensions, giving n altogether (our own).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “For any submanifold S ⊂ X, the conormal bundle N\*S is a Lagrangian submanifold of T\*X.”

**Sources:** none listed. No primary source with a working link was found.

### Exact Lagrangians exclude holomorphic disks

**Remember:** Exact boundary data leave a holomorphic disk with zero energy.

*Rules out counterexamples.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** Let ω = dλ be a symplectic form, a closed nondegenerate two-form with a chosen primitive λ. A Lagrangian is a half-dimensional submanifold on which ω restricts to zero. It is exact if λ restricts to the differential of a function.

**Problem.** Choose a compatible complex structure on each tangent space so that ω(v, Jv) is positive for every nonzero vector v. A map from the usual complex disk whose derivative respects the complex structures must be constant if its boundary lies on an exact Lagrangian.

**How the definition helps.** Exactness makes the boundary integral of λ vanish, forcing the disk to have zero area. In our own proof, Stokes’ theorem identifies that integral with the integral of ω over the disk. The quoted energy identity then forces the disk to be constant. Without exactness, the ordinary unit disk in the complex plane gives a counterexample with boundary on the unit circle.

**Paper or page:** [A proof of Gromov's non-squeezing theorem](https://arxiv.org/abs/2412.18462v1). It says: “the equality holds if and only if u is constant.”

**Sources:** none listed. No primary source with a working link was found.

### Exact Lagrangians lift to Legendrians

**Remember:** Use the primitive as the height of the Legendrian lift.

*Rules out counterexamples. Confidence: medium.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** The cotangent bundle carries a one-form θ that evaluates each covector on motion in the base. A Lagrangian is a half-dimensional submanifold on which dθ vanishes. It is exact when θ restricts to df for a single function f. In the bundle with an extra height z, a Legendrian has the same dimension and lies tangent to the kernel of dz − θ.

**Problem.** Every exact Lagrangian in a cotangent bundle lifts to a Legendrian for the contact form dz − θ.

**How the definition helps.** Exactness supplies a single height function for the lift. In our own proof, setting z = f makes dz − θ vanish on the graph. Conversely, any height defining such a graph satisfies df = θ there. Over a circle, the graph of a one-form with nonzero integral gives a Lagrangian without a single-valued height.

**Paper or page:** [Normal invariant of nearby Lagrangians via twisted derivative](https://arxiv.org/abs/2505.12515v2). It says: “(any Legendrian lift of) L”

**Sources:**

- [Normal invariant of nearby Lagrangians via twisted derivative, Corollary 3.34](https://arxiv.org/abs/2505.12515v2)

### Loop classes make the Maslov index invariant under deformation

**Remember:** A loop keeps its class as it deforms, and joining loops adds classes.

*True by definition.* MSC 53D12 (Lagrangian submanifolds; Maslov index). arXiv math.SG. Level 3: graduate.

**Definition.** A symplectic vector space has a skew-symmetric bilinear form that pairs every nonzero vector nontrivially with some vector. A Lagrangian is a half-dimensional subspace on which that form is zero. The space of Lagrangians in positive dimension has fundamental group ℤ, and the Maslov index is the integer of a loop class. Another definition counts signed crossings with subspaces that share a nonzero vector with a fixed Lagrangian.

**Problem.** Show that the Maslov index stays fixed as a loop deforms. Show that joining two loops with a common starting point adds their indices.

**How the definition helps.** The loop-class definition gives invariance because deforming a loop does not change its class. Even a moving starting point only conjugates the class, which has no effect in the abelian group ℤ. Joining loops is the group operation, so their integers add. In our own comparison, the crossing definition needs a proof that signed counts survive a deformation. The work shifts to computing the fundamental group, fixing a sign convention and matching the loop class with the crossing count.

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

**Remember:** The bracket of two conserved quantities is another conserved quantity.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids), 37J37, 70H33. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** A first integral of an energy function H is a smooth function that stays constant along the Hamiltonian flow generated by H. Equivalently, it is a function F with {H, F} = 0, since the Poisson bracket {H, F} measures the rate of change of F. This bracket satisfies the Jacobi identity, the rule that {{F, G}, H} + {{G, H}, F} + {{H, F}, G} = 0.

**Problem.** If F and G are first integrals of H, then their bracket {F, G} is also a first integral of H.

**How the definition helps.** Defining first integrals by the vanishing bracket makes Poisson’s theorem a direct use of the Jacobi identity (our own). The last two terms in that identity vanish by the hypotheses, so the first vanishes as well. Antisymmetry gives {H, {F, G}} = 0, as required. The trajectory definition instead asks about the behavior of a new function along each solution. The work goes into identifying the bracket with a derivative along the flow and proving the Jacobi identity from the symplectic form.

**Wikipedia:** [Hamiltonian vector field](https://en.wikipedia.org/wiki/Hamiltonian_vector_field). It says: “which means that the vector space of differentiable functions on M, endowed with the Poisson bracket, has the structure of a Lie algebra over ℝ”

**Sources:** none listed. No primary source with a working link was found.

### Defining Poisson bivectors by \[π,π\] = 0 makes \[π,−\] square to zero

**Remember:** The double bracket is half the bracket with \[π,π\].

*True by definition. Confidence: medium.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** A multivector field of degree k is a section of the k-th exterior power of the tangent bundle, so a bivector field has degree 2. A Poisson structure is a bivector field π with \[π,π\] = 0. Here \[−,−\] is the Schouten–Nijenhuis bracket, which extends the Lie bracket of vector fields to multivector fields. The classical definition instead asks that the bracket of functions {f,g} = π(df,dg) satisfy the Jacobi identity.

**Problem.** On a Poisson manifold, the operator \[π,−\] on multivector fields squares to zero. Its cohomology is called Poisson cohomology.

**How the definition helps.** With the \[π,π\] = 0 definition, the square of \[π,−\] is a multiple of the bracket with \[π,π\], which is zero. In our own step, the graded Jacobi identity, the Jacobi identity with signs set by the degrees, gives \[π,\[π,X\]\] = ½\[\[π,π\],X\]. Wikipedia states that \[π,−\] squares to zero exactly when \[π,π\] = 0. In our own comparison, the Jacobi identity for functions must first be turned into \[π,π\] = 0 by a calculation in coordinates. Wikipedia says Lichnerowicz introduced Poisson cohomology in 1977. In our own account, the work moves to the graded Jacobi identity for the Schouten–Nijenhuis bracket.

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “the condition d\_π ∘ d\_π = 0 is equivalent to \[π,π\]=0”

**Sources:**

- [André Lichnerowicz, Les variétés de Poisson et leurs algèbres de Lie associées, Journal of Differential Geometry 12 (1977), 253–300](https://doi.org/10.4310/jdg/1214433987)

### Invariant functions give Poisson quotients

**Remember:** Bracket invariant functions upstairs to get the bracket downstairs.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** A Poisson bracket is a Lie bracket on smooth functions that satisfies the product rule in each argument. A Poisson map preserves this bracket when functions are pulled back. On a smooth orbit space, functions correspond by pullback to smooth functions constant on each orbit.

**Problem.** Suppose a Lie group acts smoothly by Poisson maps, freely and properly. Then its orbit space has a unique Poisson bracket making the projection a Poisson map.

**How the definition helps.** Using invariant functions gives the quotient bracket without constructing a tensor in quotient coordinates. In our own proof, the group preserves brackets, so the bracket of two invariant functions stays invariant. The bracket identities pass to the quotient because pullback identifies its functions with these invariant functions. The smooth quotient theorem supplies the manifold structure. Freeness means point stabilizers are trivial. Properness means the map sending (g, x) to (gx, x) has compact preimages of compact sets.

**Wikipedia:** [Poisson manifold](https://en.wikipedia.org/wiki/Poisson_manifold). It says: “inherits a Poisson structure”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicativity makes inversion antisymplectic

**Remember:** Composing an arrow with its inverse adds their forms to zero.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** A Lie groupoid has smooth spaces of objects and invertible arrows, with smooth composition and inversion. Give its arrows a symplectic form, a closed nondegenerate alternating two-form. Multiplicativity means that on composable pairs, the form pulled back by composition equals the sum pulled back from the two arrows.

**Problem.** Inversion in a symplectic groupoid sends the symplectic form to its negative.

**How the definition helps.** Multiplicativity lets us insert an arrow and its inverse directly into an addition formula for forms (our own). Two identity arrows compose to themselves, so the form restricted to identity arrows equals twice itself and vanishes (our own). Composing with the inverse thus gives zero for the sum, proving the sign reversal (our own). The equivalent graph definition requires the composition graph to be Lagrangian in a product with one sign reversed (our own). Restricting that product form to the graph gives the addition formula (our own).

**nLab:** [symplectic groupoid](https://ncatlab.org/nlab/show/symplectic+groupoid). It says: “the alternating sum of its canonical pullbacks to the space X₂ of composable morphisms vanishes”

**Sources:** none listed. No primary source with a working link was found.

### Poisson maps have coisotropic graphs

**Remember:** Subtract the domain bracket and test on functions vanishing along the graph.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 3: graduate.

**Definition.** A Poisson bracket is a Lie bracket on functions that satisfies the product rule. A Poisson map preserves brackets when functions are pulled back. Call a submanifold coisotropic if the bracket of any two local functions vanishing there also vanishes there.

**Problem.** A smooth map is Poisson exactly when its graph is coisotropic in the product using the target bracket and the negative domain bracket.

**How the definition helps.** The vanishing-function definition turns the geometric tangent-space test into a calculation with coordinate differences. In our own proof, each target coordinate g gives a function g(y) − g(f(x)) that vanishes on the graph. These differences generate all local functions vanishing there, by integrating their first derivatives along coordinate segments. Their product brackets restrict to the target brackets pulled back by f minus the corresponding domain brackets. The product rule extends the test to all vanishing functions.

**Paper or page:** [Lie groups of Poisson diffeomorphisms](https://arxiv.org/abs/2108.11490v2). It says: “A map $f:M\\to N$ is a Poisson map if and only if the graph of $f$ is coisotropic in $(N\\times M, \\pi<sub>N</sub>\\times (-\\pi<sub>M</sub>))$.”

**Sources:**

- [Lie groups of Poisson diffeomorphisms, Proposition 1.2](https://arxiv.org/abs/2108.11490v2)

### Curvature is the moment map, so flat connections form a symplectic quotient

**Remember:** Flat means zero moment map, so flat moduli are symplectic quotients.

*Makes the theorem clean to state or prove.* MSC 53D20 (Momentum maps; symplectic reduction), 53D30. arXiv math.DG, math.SG. Level 3: graduate.

**Definition.** Let 𝒜 be the space of connections on a bundle over a closed surface. A gauge transformation is a change of frame at each point, and the gauge group 𝒢 acts on 𝒜. A moment map for an action that preserves a symplectic form is a map whose components generate the action as Hamiltonian flows. The Hamiltonian reduction of 𝒜 by 𝒢 is the zero set of the moment map, divided by 𝒢.

**Problem.** One wants a geometric structure on the moduli space of flat connections on a surface. A flat connection is a connection with zero curvature.

**How the definition helps.** Once the curvature is the moment map, flat connections are exactly its zero set, so their moduli space is a symplectic quotient by definition. General facts about such quotients then apply directly (our own). For example, the quotient inherits a symplectic form where it is smooth. The second source derives Goldman's symplectic structure in this way, through the Atiyah–Bott reduction. Atiyah and Bott used this picture to compare the flat moduli space with stable holomorphic bundles (our own). The hard work stays in infinite dimensions: the analysis of the gauge action on spaces of connections (our own).

**Paper or page:** [Higher Complex Structures and Higher Teichmüller Theory](https://arxiv.org/abs/2007.00382), [A Gentle Introduction to the Non-Abelian Hodge Correspondence](https://arxiv.org/abs/2208.05940). It says: “The action of gauge transforms on the space of connections is a Hamiltonian action and the moment map is the curvature. Thus, the Hamiltonian reduction 𝒜⫽𝒢 gives the moduli space of flat connections.”

**Sources:**

- [A. Thomas, Higher Complex Structures and Higher Teichmüller Theory, arXiv:2007.00382 (2020)](https://arxiv.org/abs/2007.00382)
- [A. Thomas, A Gentle Introduction to the Non-Abelian Hodge Correspondence, arXiv:2208.05940 (2022)](https://arxiv.org/abs/2208.05940)
- [M. F. Atiyah and R. Bott, The Yang–Mills equations over Riemann surfaces, Philosophical Transactions of the Royal Society A 308 (1983) 523–615](https://doi.org/10.1098/rsta.1983.0017)

### Equivariant momentum maps preserve brackets

**Remember:** Generating each motion is not enough if the brackets do not match.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction), 70H33. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** A momentum map μ assigns each phase point a linear functional on the Lie algebra, the space of infinitesimal symmetries. Evaluation on a symmetry gives a function generating its motion. Equivariance means that moving the phase point transforms this functional by the induced action on linear functionals.

**Problem.** For a connected Hamiltonian symmetry group, an equivariant momentum map preserves brackets when functions on the dual Lie algebra are composed with μ. Use the Lie–Poisson bracket, which on linear functions gives their Lie algebra bracket, with matching sign conventions.

**How the definition helps.** Differentiating equivariance makes the generating functions reproduce the brackets of infinitesimal symmetries (our own). Linear functions supply every possible differential on the dual Lie algebra, and brackets at a point depend only on those differentials (our own). Translations of the plane commute, but their generators y and −x have bracket one in the standard convention (our own). Adding constants cannot repair that mismatch (our own).

**nLab:** [momentum map](https://ncatlab.org/nlab/show/momentum+map). It says: “its dual μ is a Poisson manifold homomorphism with respect to the Lie-Poisson structure”

**Sources:** none listed. No primary source with a working link was found.

### Free actions give smooth symplectic quotients

**Remember:** Free symmetry removes the fixed points that can make a quotient singular.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction), 70H33. arXiv math.SG, math.DS. Level 3: graduate.

**Definition.** For a Hamiltonian symmetry action, the momentum map collects the functions generating the infinitesimal symmetries. Assume it respects the group action. On its zero level, call the action free if only the identity fixes any point. The reduced space identifies points on the same orbit.

**Problem.** For a compact Lie group acting freely on the zero level, the reduced space is smooth and inherits a symplectic form.

**How the definition helps.** Freeness makes the symmetry directions independent, so the momentum derivative has full rank and the zero level is smooth (our own). Compactness and freeness give a smooth orbit space by the quotient theorem (our own). The restricted form has exactly the orbit directions as its kernel, so it induces a nondegenerate form there (our own). For opposite circle rotations on two complex coordinates, the zero level contains the fixed origin (our own). Reduction gives a single point there with a two-dimensional symplectic piece around it (our own).

**Paper or page:** [Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory](https://arxiv.org/abs/2012.14662v1). It says: “Assume that G acts freely on μ⁻¹(0).”

**Sources:**

- [Jerrold Marsden and Alan Weinstein, Reduction of symplectic manifolds with symmetry (1974)](https://doi.org/10.1016/0034-4877(74)90021-4)

### Free reduction avoids quotient singularities

**Remember:** Remove point stabilizers before taking the smooth symplectic quotient.

*Rules out counterexamples.* MSC 53D20 (Momentum maps; symplectic reduction). arXiv math.SG. Level 3: graduate.

**Definition.** A moment map collects the energy functions generating a Lie group’s infinitesimal motions. Assume it respects the group action and the induced action on the dual Lie algebra. On a level of this map, identify points related by group elements fixing its value. An action is free when only the identity fixes a point.

**Problem.** Choose a regular value, meaning that the moment map derivative is onto throughout its level. Properness means the map sending (g, x) to (gx, x) has compact preimages of compact sets. If the group fixing the value acts freely and properly there, the quotient is a smooth symplectic manifold.

**How the definition helps.** Freeness rules out leftover point symmetries in local quotient charts. In our own example, a circle rotates the two coordinates of ℂ² at speeds one and two. Use momentum (\|z\|² + 2\|w\|²)/2. On each positive level, a half-turn fixes points with z = 0 and negates their transverse coordinate. The local quotient thus retains an order-two symmetry. The free and proper action theorem supplies smooth quotient charts. The reduction theorem supplies their symplectic form.

**Paper or page:** [From Symplectic to Poisson. A Study of Reduction and a Proposal Towards Implosion](https://arxiv.org/abs/2202.05783v1). It says: “Then there is a unique symplectic structure”

**Sources:**

- [Jerrold Marsden and Alan Weinstein, Reduction of symplectic manifolds with symmetry (1974)](https://doi.org/10.1016/0034-4877(74)90021-4)

### Reduced forms carry Hamiltonian flows

**Remember:** Pull back the form and energy to see that their flows agree.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction). arXiv math.SG. Level 3: graduate.

**Definition.** A Hamiltonian is an energy function whose differential determines motion through a symplectic form, a closed nondegenerate two-form. A moment map collects the Hamiltonians for infinitesimal group motions. On a level of this map, identify points related by group elements fixing its value. Define the reduced form by requiring its pullback to equal the original form on the level.

**Problem.** Choose a moment map respecting the group actions and a level where its derivative is onto. Suppose the group fixing that value acts freely and properly on the level. Then the flow of any invariant energy projects to the flow of the induced energy on the quotient.

**How the definition helps.** Defining the reduced form by pullback lets us check the equation of motion on the original level without choosing quotient coordinates. In our own explanation, pulling back the reduced energy gives the original energy on the level. Noether’s theorem keeps the flow on that level. The reduction theorem supplies a smooth quotient and proves that its form is nondegenerate.

**Paper or page:** [From Symplectic to Poisson. A Study of Reduction and a Proposal Towards Implosion](https://arxiv.org/abs/2202.05783v1). It says: “In particular, $X<sub>H</sub>$ and $X<sub>h</sub>$ are $\\pi$-related.”

**Sources:**

- [Jerrold Marsden and Alan Weinstein, Reduction of symplectic manifolds with symmetry (1974)](https://doi.org/10.1016/0034-4877(74)90021-4)

### With Hamiltonian actions, Noether's theorem takes one line

**Remember:** In phase space, a symmetry is a function, and so is its charge.

*True by definition.* MSC 53D20 (Momentum maps; symplectic reduction), 70H33. arXiv math.SG, math.MP. Level 3: graduate.

**Definition.** Let (X, ω) be a symplectic manifold and 𝔤 a Lie algebra. A Hamiltonian action of 𝔤 on X is a Lie algebra map ξ ↦ Φ(ξ) from 𝔤 to the smooth functions on X, with the Poisson bracket as the bracket on functions. Each ξ acts by the Hamiltonian flow of Φ(ξ), and Φ, seen as a map X → 𝔤\*, is the moment map. Time evolution is the Hamiltonian flow of a function H.

**Problem.** Noether's theorem says that every continuous symmetry of a physical system gives a conserved quantity.

**How the definition helps.** In this setting the conserved quantity, or charge, is the moment map itself, so the proof is one line. Suppose the symmetry is a Hamiltonian action that preserves H, so {Φ(ξ), H} = 0: H does not change along the flow of Φ(ξ). The time derivative of Φ(ξ) is {H, Φ(ξ)}. The Poisson bracket is skew-symmetric, so this derivative is also zero. The nLab says the theorem is almost a tautology in this setting. In our reading, the real work is in the Lagrangian version (variational bicomplex, covariant phase space). That version is what turns a symmetry of a Lagrangian into a Hamiltonian action in the first place.

**nLab:** [Noether's theorem](https://ncatlab.org/nlab/show/Noether%27s+theorem). It says: “Hence the "Hamiltonian Noether theorem" is all captured already by the very notion of Hamiltonian action and the statement that the Poisson bracket is skew-symmetric (is a Lie algebra bracket).”

**Sources:**

- [Emmy Noether, Invariante Variationsprobleme, Nachr. Ges. Wiss. Göttingen, Math.-Phys. Kl. (1918) 235–257; English translation by M. A. Tavel, Invariant Variation Problems, arXiv:physics/0503066](https://arxiv.org/abs/physics/0503066)

### Exact symplectic maps lift to contact maps

**Remember:** Add the primitive difference to height to cancel the error.

*Rules out counterexamples.* MSC 53D22 (Canonical transformations in symplectic and contact geometry). arXiv math.SG. Level 3: graduate.

**Definition.** Let λ be a one-form whose derivative dλ is symplectic, meaning closed and nondegenerate. A diffeomorphism is exact symplectic if it pulls λ back to λ + dF for a single function F. Adding a real height z gives a contact form dz − λ.

**Problem.** Every exact symplectic map lifts to a map of the contactization preserving dz − λ exactly.

**How the definition helps.** Exactness supplies the single height correction needed to preserve dz − λ. In our own calculation, sending z to z + F adds dF to dz and cancels the change in λ. Conversely, any height translation preserving the form must supply such a primitive. Translating momentum by a nonzero constant over a circle changes λ by a one-form with nonzero integral. No global height correction exists in that example.

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

**Definition.** A symplectic embedding preserves the symplectic form, a closed nondegenerate two-form. A capacity assigns a nonnegative number, possibly infinite, that cannot decrease when one space embeds symplectically into another. Multiplying the symplectic form by a positive constant multiplies the capacity by that constant. In standard symplectic space, normalization assigns πr² to both the radius-r ball and the cylinder over a radius-r disk in one conjugate coordinate plane.

**Problem.** In standard symplectic space, a ball cannot embed symplectically into a cylinder of smaller radius over a conjugate coordinate plane.

**How the definition helps.** Normalization gives the ball and cylinder the same size scale, so monotonicity compares their radii directly. An embedding of a radius-r ball into a radius-R cylinder would require πr² ≤ πR². In our own comparison, volume gives no such obstruction because the cylinder has infinite volume in dimension four or higher. The work moves into proving that a normalized capacity exists. Conversely, non-squeezing normalizes the Gromov width, the supremum of πr² over all balls admitting a symplectic embedding into the space.

**Wikipedia:** [Non-squeezing theorem](https://en.wikipedia.org/wiki/Non-squeezing_theorem). It says: “Given such a capacity, one can verify the non-squeezing theorem”

**Sources:** none listed. No primary source with a working link was found.

### Prequantum curvature turns Poisson brackets into operator commutators

**Remember:** Curvature supplies the term that makes the commutator agree with the bracket.

*True by definition. Confidence: medium.* MSC 53D50 (Geometric quantization), 81S10. arXiv math.SG, math-ph. Level 3: graduate.

**Definition.** A prequantum line bundle places a complex line at each point of phase space. Its connection differentiates sections, and its curvature, the extra term from commuting two such derivatives, is iω/ħ. Here ω is the closed nondegenerate alternating pairing on tangent vectors, and ħ is the reduced Planck constant. Define X(f) by ω(X(f), ·) = df, and Q(f) by adding multiplication by f to −iħ times covariant differentiation along X(f).

**Problem.** On smooth sections, \[Q(f), Q(g)\] = iħQ({f, g}) for smooth f and g. Here \[A, B\] means AB − BA and {f, g} = ω(X(f), X(g)).

**How the definition helps.** The chosen curvature supplies exactly the missing term when one expands the commutator (our own). The vector field commutator gives the derivative part, and the two cross terms with multiplication give twice the required multiplication part (our own). Curvature subtracts the extra copy (our own). Plain directional differentiation would miss that correction (our own). The work lies in constructing the bundle (our own). This requires ω/(2πħ) to have integer integrals over closed oriented surfaces mapped into phase space.

**Wikipedia:** [Geometric quantization](https://en.wikipedia.org/wiki/Geometric_quantization). It says: “Prequantization produces a natural Hilbert space together with a quantization procedure for observables that exactly transforms Poisson brackets on the classical side into commutators on the quantum side.”

**Sources:** none listed. No primary source with a working link was found.

### Thin homotopy makes parallel transport a functor on paths

**Remember:** Paths that differ by sweeping no area give the same transport.

*Makes the theorem clean to state or prove.* MSC 53C05 (Connections (general theory)), 58H05. arXiv math.DG, math.CT. Level 4: research.

**Definition.** The path groupoid P₁(X) of a manifold X has the points of X as objects. Its morphisms are thin-homotopy classes of smooth paths with sitting instants, that is, paths that are constant near their end points. A thin homotopy is a homotopy of rank at most 1, so it sweeps out no area.

**Problem.** A connection on a principal G-bundle (a bundle whose fibres are copies of the group G) should be the same thing as its parallel transport. Transport should respect composition of paths.

**How the definition helps.** Parallel transport does not change under thin homotopy, so it gives a well-defined functor on the path groupoid. With sitting instants, composition of paths is smooth, and it is associative after the quotient. So parallel transport becomes a smooth functor P₁(X) → At(P), or an anafunctor into BG, and this functor determines the connection uniquely. Here At(P) is the Atiyah groupoid of the bundle P, BG is the groupoid with one object and the elements of G as arrows, and an anafunctor is a generalized functor defined through a cover. Schreiber and Waldorf prove that smooth functors on the path groupoid are equivalent to bundles with connection; that equivalence is the real theorem. The functor factors through the fundamental groupoid exactly when the connection is flat.

**nLab:** [parallel transport](https://ncatlab.org/nlab/show/parallel+transport). It says: “noticed that the most elegant way to (re)state the maximal equivalence relation on paths which is respected by parallel transport is in terms of thin homotopy.”

**Sources:**

- [Urs Schreiber, Konrad Waldorf, Parallel Transport and Functors, J. Homotopy Relat. Struct. 4 (2009) 187–244, arXiv:0705.0452](https://arxiv.org/abs/0705.0452)
- [A. Caetano, Roger Picken, An axiomatic definition of holonomy, Int. J. Math. 5 (1994) 835–848](https://doi.org/10.1142/S0129167X94000425)

### Singular foliations as modules of vector fields always have holonomy groupoids

**Remember:** Remember the vector fields, not only the leaves.

*Makes the theorem clean to state or prove.* MSC 53C12 (Foliations (differential geometric aspects)), 58H05. arXiv math.DG. Level 4: research.

**Definition.** In the sense of Androulidakis and Skandalis, a singular foliation is a module of compactly supported vector fields. The module must be locally finitely generated and closed under the Lie bracket. The module, not the set of leaves, is the data. Two modules can give the same leaves.

**Problem.** For a regular foliation, the holonomy groupoid records how leaves wind around each other. For singular foliations, such as orbits of a Lie group action, leaves change dimension, and the classical construction fails.

**How the definition helps.** The module keeps enough data near singular leaves to build holonomy, so a holonomy groupoid exists for every singular foliation. On the real line, the modules generated by x∂ₓ and by x²∂ₓ have the same three leaves but differ near 0 (our own). The quoted theorem also says that H(F) is minimal among groupoids that integrate F. What stays hard is smoothness: H(F) is in general only a topological groupoid, and it is often not Hausdorff (our own).

**Paper or page:** [The Holonomy Groupoids of Singularly Foliated Bundles](https://arxiv.org/abs/2006.14271). It says: “Let M be a manifold with a singular foliation F. Then there exists a topological groupoid H(F) for which the following hold. H(F) integrates the foliation F, in the sense that its orbits are the leaves of F.”

**Sources:**

- [L. E. MacDonald, The Holonomy Groupoids of Singularly Foliated Bundles, SIGMA 17 (2021), 043](https://arxiv.org/abs/2006.14271)
- [I. Androulidakis and G. Skandalis, The holonomy groupoid of a singular foliation, Journal für die reine und angewandte Mathematik 626 (2009) 1–37](https://doi.org/10.1515/crelle.2009.001)

### Distributional Ricci curvature lets the splitting theorem hold for C¹ metrics

**Remember:** Curvature tested against bump functions keeps its sign for C¹ metrics.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C21 (Methods of global Riemannian geometry, including PDE methods; curvature restrictions), 53C23. arXiv math.DG, math.MG. Level 4: research.

**Definition.** For a metric with only one continuous derivative, the Ricci curvature has no pointwise values. It still exists as a distribution, a generalized function that one integrates against smooth test functions. Take any smooth vector field X with compact support. Ric ≥ 0 in this sense means that Ric(X,X) gives a nonnegative number against every nonnegative test function.

**Problem.** The Cheeger–Gromoll theorem says that a complete manifold with Ric ≥ 0 that contains a line splits as a product with ℝ. A line is a geodesic that minimizes length between any two of its points. One wants this for metrics that are only C¹.

**How the definition helps.** The distributional definition gives a C¹ metric a Ricci curvature with a sign, so the hypothesis of the theorem makes sense at all. The conclusion is a C¹ isometry to a product of a C¹ manifold with ℝ. The factor again has Ric ≥ 0 in the distributional sense, so the statement can repeat. The smooth proof uses second derivatives of distance functions (our own). The hard part is to replace these with weak estimates that survive the low regularity (our own).

**Paper or page:** [Ricci curvature bounds and rigidity for non-smooth Riemannian and semi-Riemannian metrics](https://arxiv.org/abs/2406.06762). It says: “Let (M,g) be a complete, connected Riemannian manifold with metric of regularity C¹. Let Ric≥0 in the distributional sense”

**Sources:**

- [M. Kunzinger, A. Ohanyan and A. Vardabasso, Ricci curvature bounds and rigidity for non-smooth Riemannian and semi-Riemannian metrics, arXiv:2406.06762 (2024)](https://arxiv.org/abs/2406.06762)
- [J. Cheeger and D. Gromoll, The splitting theorem for manifolds of nonnegative Ricci curvature, Journal of Differential Geometry 6 (1971) 119–128](https://doi.org/10.4310/jdg/1214430220)

### A four-point definition of nonnegative curvature makes it survive Gromov–Hausdorff limits

**Remember:** Four points and six distances are enough to pass the inequality to a limit.

*True by definition. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 51F99. arXiv math.MG. Level 4: research.

**Definition.** Define nonnegative Alexandrov curvature of a complete length space by a test on four points p, x, y, z. It asks that \|px\|² + \|py\|² + \|pz\|² ≥ (\|xy\|² + \|yz\|² + \|zx\|²)/3. The usual definition compares geodesic triangles with Euclidean triangles.

**Problem.** A compact limit of compact Alexandrov spaces with curvature at least zero also has curvature at least zero. The limit is in Gromov–Hausdorff distance, which compares metric spaces by near-isometric matchings.

**How the definition helps.** The test is a closed condition on six distances, so it passes to limits by approximating the four points (our own argument). Triangle comparison needs geodesics and points on them, which are harder to pass to a limit (our own comparison). The work moves to the Lebedeva–Petrunin theorem that the four-point test is equivalent to the usual definition. One must also check that the limit is a length space (our own).

**Paper or page:** [Curvature bounded below: a definition a la Berg--Nikolaev](https://arxiv.org/abs/1008.3318). It says: “Let X be a complete space with intrinsic metric. Then X is an Alexandrov space with curvature ≥ 0 if and only if any quadruple p,x,y,z ∈ X satisfies the following inequality”

**Sources:**

- [Yuri Burago, Mikhail Gromov, and Grigori Perelman, A.D. Alexandrov spaces with curvature bounded below (1992)](https://doi.org/10.1070/RM1992v047n02ABEH000877)

### Encoding comparisons by graphs shows each nontrivial one implies an Alexandrov comparison

**Remember:** Edges shorten and nonedges lengthen in the comparison space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54E35. arXiv math.MG. Level 4: research.

**Definition.** Let Γ be a finite graph. A metric space X satisfies the Γ-comparison if every placement of the vertices at points of X has a matching placement in a Hilbert space. In the matching placement, distances between vertices joined by an edge do not increase. Distances between vertices not joined by an edge do not decrease.

**Problem.** For every finite graph Γ, either the Γ-comparison holds in every metric space, or it implies the C₄-comparison or the T₃-comparison. Here C₄ is the cycle with four vertices, and T₃ is another small graph in the paper. The paper also describes exactly which connected graphs give comparisons that hold in every space.

**How the definition helps.** The graph records the direction of each distance inequality in one finite object, so whole families of conditions can be classified at once. The paper uses a relation between graphs under which one comparison implies another. The main step is a lemma: a connected graph that contains neither C₄ nor T₃ in this sense is a 'multipath'. The paper then finds which of these give comparisons that hold in every space. They are paths with a complete graph attached at each end.

**Paper or page:** [Graph comparison meets Alexandrov](https://arxiv.org/abs/2212.08016v2). It says: “We show that any nontrivial graph comparison implies one of Alexandrov's comparisons.”

**Sources:**

- [Nina Lebedeva, Anton Petrunin, Graph comparison meets Alexandrov, Siberian Mathematical Journal 64 (2023), 624–628; arXiv:2212.08016](https://arxiv.org/abs/2212.08016v2)

### Optimal transport defines Ricci bounds that survive Gromov–Hausdorff limits

**Remember:** Measure how mass spreads, and Ricci bounds pass to limits.

*Makes the theorem clean to state or prove.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 53C21, 49Q22. arXiv math.DG, math.MG. Level 4: research.

**Definition.** A metric space with a measure satisfies CD(K,N) if the entropy of mass is suitably convex along shortest paths of optimal transport. On a smooth manifold this convexity holds exactly when Ricci curvature is at least K and dimension is at most N. RCD(K,N) adds the condition that the energy of functions is a quadratic form, as it is in Riemannian geometry.

**Problem.** Limits of manifolds with Ricci curvature at least K and dimension at most N are usually not manifolds. The classical Ricci tensor is not defined on them. One wants a class of spaces that contains all these limits and is closed under limits.

**How the definition helps.** The definition uses only distances and measures, and its convexity inequalities pass to limits, so the class is closed under limits. Measured Gromov–Hausdorff convergence means that the spaces and their measures come closer after a best possible matching of points. Gromov's precompactness theorem then gives the quoted compactness (our own). The quadratic-energy condition excludes normed spaces that are not Riemannian, which satisfy CD but not RCD (our own). The work moves into showing that the new bound agrees with the old one where both make sense. The second paper proves this for continuous metrics whose Christoffel symbols are locally square-integrable. There CD(K,N) holds exactly when a distributional Bakry–Émery Ricci tensor is at least K and the volume grows at most exponentially.

**Paper or page:** [On perimeter minimizing sets in manifolds with quadratic volume growth](https://arxiv.org/abs/2504.10413), [On the equivalence of distributional and synthetic Ricci curvature lower bounds](https://arxiv.org/abs/2402.06486). It says: “The class of pointed RCD(K,N) spaces with normalized measures is sequentially compact with respect to pointed measured Gromov-Hausdorff convergence.”

**Sources:**

- [A. Cucinotta and M. Magnabosco, On perimeter minimizing sets in manifolds with quadratic volume growth, arXiv:2504.10413 (2025)](https://arxiv.org/abs/2504.10413)
- [A. Mondino and V. Ryborz, On the equivalence of distributional and synthetic Ricci curvature lower bounds, arXiv:2402.06486 (2024)](https://arxiv.org/abs/2402.06486)
- [J. Lott and C. Villani, Ricci curvature for metric-measure spaces via optimal transport, Annals of Mathematics 169 (2009) 903–991](https://doi.org/10.4007/annals.2009.169.903)
- [K.-T. Sturm, On the geometry of metric measure spaces, Acta Mathematica 196 (2006) 65–131](https://doi.org/10.1007/s11511-006-0002-8)

### Projections onto geodesics give Hadamard spaces a weak convergence with compactness

**Remember:** Without functionals, project onto geodesics instead.

*Makes the theorem clean to state or prove.* MSC 53C23 (Global geometric and topological methods (à la Gromov); differential geometric analysis on metric spaces), 54A20. arXiv math.FA, math.MG. Level 4: research.

**Definition.** A Hadamard space is a complete metric space with nonpositive curvature. Its geodesic triangles are at least as thin as flat triangles with the same side lengths. A sequence xₙ converges weakly to x if, for every geodesic through x, the nearest-point projections of xₙ onto that geodesic converge to x. For bounded sequences it agrees with Kirk and Panyanak's Δ-convergence, which the second paper uses (our own remark).

**Problem.** In a Hilbert space, xₙ → x weakly means that ⟨xₙ, y⟩ → ⟨x, y⟩ for every y. A metric space has no inner product, so this weak convergence does not exist. With this definition, bounded sequences have weakly convergent subsequences and bounded closed convex sets are weakly sequentially compact, as minimizer proofs need.

**How the definition helps.** Projections onto geodesics play the role of linear functionals, so the compactness statement can be made at all. Nonpositive curvature makes these projections exist and be unique (our own remark). The paper checks that in a Hilbert space this notion is the usual weak convergence. What stays hard is whether this convergence comes from a topology, and the paper answers this only for weakly proper spaces.

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

**Definition.** An Alexandrov surface with bounded integral curvature has an intrinsic metric that is a limit of smooth metrics with bounded total absolute curvature. Its curvature is a signed measure, not a function. A Radon measure is a measure that is finite on compact sets. A cone point carries a point mass equal to its angle defect.

**Problem.** Smooth surfaces and polyhedral surfaces both satisfy Gauss–Bonnet, but in different forms. One wants one class of surfaces that contains both, is closed under limits, and has a uniformization theorem.

**How the definition helps.** When curvature is a measure, Gauss–Bonnet becomes the single condition that the total mass is 2πχ(S). So the prescribed curvature theorem can be stated for all such surfaces at once. A smooth metric gives the measure K dA, and a polyhedral metric gives point masses at the vertices (our own). The condition ω({x}) &lt; 2π keeps every point at finite distance. Reshetnyak's Theorem 7.1 shows that a point with mass above 2π is at infinite distance, and a point with mass exactly 2π may be. The analysis stays in potential theory: the metric is exp(2u) times a smooth metric, where u is a difference of subharmonic functions (our own).

**Paper or page:** [On Alexandrov's Surfaces with Bounded Integral Curvature](https://arxiv.org/abs/2201.03354), [On Alexandrov's Surfaces with Bounded Integral Curvature](https://arxiv.org/abs/2201.03354). It says: “For any conformal structure on a closed surface S and any signed Radon measure dω on S such that ∫ₛ dω = 2πχ(S) and ω({x}) &lt; 2π for any point x ∈ S, there exists an Alexandrov metric”

**Sources:**

- [M. Troyanov, On Alexandrov's Surfaces with Bounded Integral Curvature, arXiv:2201.03354 (2022)](https://arxiv.org/abs/2201.03354)

### Averaged volume functions are time functions exactly in causally continuous spaces

**Remember:** Average the size of causal pasts and futures to build clocks.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 53C23. arXiv gr-qc, math.MG. Level 4: research.

**Definition.** A Lorentzian length space includes causal order and time separation without requiring a smooth manifold. A time function increases strictly along future-directed causal curves. Averaged volume functions measure metric neighborhoods of chronological pasts and futures and average over the neighborhood radius.

**Problem.** In a second countable, locally compact Lorentzian length space, the averaged volume functions are time functions exactly when the space is causally continuous. Causal continuity requires both that causal pasts and futures distinguish points and that past and future comparisons agree.

**How the definition helps.** The volume definition uses causal sets and a measure, so it does not need smooth coordinates. In our own words, inclusion of causal pasts makes volume increase weakly toward the future. The work is to show that averaging handles continuity and that the right causal conditions give strict increase.

**Paper or page:** [Time functions on Lorentzian length spaces](https://arxiv.org/abs/2108.02693v3). It says: “Let X be a second countable, locally compact Lorentzian length space. Then X causally continuous if and only if the averaged volume functions on X are time functions.”

**Sources:**

- [Annegret Burtscher, Leonardo García-Heveling, Time functions on Lorentzian length spaces, arXiv:2108.02693v3 (2024), Ann. Henri Poincaré 26, 1533--1572 (2025)](https://arxiv.org/abs/2108.02693v3)

### Globally hyperbolic spacetimes are exactly those properly conformally embeddable in Minkowski space

**Remember:** A closed image prevents causal curves from escaping through a missing point.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 53C42. arXiv gr-qc, math.DG. Level 4: research.

**Definition.** A conformal embedding into Minkowski spacetime preserves light cones, not necessarily lengths. It is proper if preimages of compact sets are compact. For such an embedding, this is equivalent to having closed image.

**Problem.** For the regularity classes in the theorem, a spacetime admits a proper conformal embedding into some Minkowski spacetime exactly when it is globally hyperbolic. Global hyperbolicity includes compactness of the causal regions between two events.

**How the definition helps.** Properness rules out missing finite limit points, which can destroy compactness of causal regions. In our own example, remove a point from Minkowski spacetime. The inclusion is still conformal, but a causal region around the puncture can fail to be compact. The converse still requires constructing a proper embedding.

**Paper or page:** [Lorentzian manifolds properly isometrically embeddable in Minkowski spacetime](https://arxiv.org/abs/2303.05941v1). It says: “Moreover, I prove that the Lorentzian manifolds that can be properly conformally embedded in Minkowski spacetime coincide with the globally hyperbolic spacetimes.”

**Sources:**

- [E. Minguzzi, Lorentzian manifolds properly isometrically embeddable in Minkowski spacetime, arXiv:2303.05941v1 (2023), Letters in Mathematical Physics 113, 67 (2023)](https://arxiv.org/abs/2303.05941v1)

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

**How the definition helps.** A shortest path lets a light signal attain the limiting distance, including equality. In our own proof, traverse that path at constant speed in conformal time. Conversely, the speed limit bounds the length of every signal path. In our own example, remove the origin from the Euclidean plane. Between opposite points, detours approach the straight distance but never attain it. Establishing existence of shortest paths is a separate geometric problem.

**Paper or page:** [Bonnet-Myers rigidity theorem for globally hyperbolic Lorentzian length spaces](https://arxiv.org/abs/2401.17017v3). It says: “if Y is strictly intrinsic the causal relation agrees”

**Sources:**

- [Bonnet-Myers rigidity theorem for globally hyperbolic Lorentzian length spaces](https://arxiv.org/abs/2401.17017v3)

### Timelike convergence rules out de Sitter

**Remember:** Light can miss the curvature that makes timelike lines fail to split spacetime.

*Rules out counterexamples.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 83C20. arXiv gr-qc, math.DG. Level 4: research.

**Definition.** Timelike convergence requires nonnegative Ricci curvature on every timelike vector, a direction available to a massive observer. Ricci curvature is a trace of the curvature tensor. Null convergence tests only lightlike directions. A globally hyperbolic spacetime admits a surface that every inextendible timelike path crosses once.

**Problem.** Suppose a globally hyperbolic spacetime satisfies timelike convergence and contains a complete timelike line. Such a line maximizes elapsed proper time between any two of its points and extends indefinitely in both directions. The spacetime then splits into time and space with metric −dt² + h, where the spatial metric h is independent of time.

**How the definition helps.** Testing timelike directions excludes de Sitter spacetime, which passes every lightlike test and violates the product conclusion. In our own example, de Sitter curvature gives a Ricci tensor equal to a positive multiple of the metric with negative time sign. It therefore vanishes on lightlike vectors and is negative on timelike vectors. Fixed spatial positions in global coordinates give complete maximizing lines because spatial motion reduces elapsed proper time. A product would have zero Ricci curvature in its time direction. Galloway’s splitting theorem supplies the difficult implication under timelike convergence.

**Paper or page:** [An elliptic proof of the splitting theorems from Lorentzian geometry](https://arxiv.org/abs/2410.12632v1). It says: “R(v,v) ≥ 0 for all timelike vectors”

**Sources:**

- [Gregory J. Galloway (1989), The Lorentzian splitting theorem without the completeness assumption](https://doi.org/10.4310/jdg/1214442881)

### Triangle comparison gives timelike curvature bounds that pass to limits

**Remember:** Compare timelike triangles, and curvature makes sense without a smooth metric.

*Makes the theorem clean to state or prove.* MSC 53C50 (Global differential geometry of Lorentz manifolds, manifolds with indefinite metrics), 53C23. arXiv math.DG, math.MG. Level 4: research.

**Definition.** A Lorentzian length space is a space with a causal order and a time separation function, the analogue of a spacetime with no smooth metric. The time separation of two points is the largest length of a causal curve between them. The space has timelike curvature bounded below by K if its timelike triangles compare correctly with triangles in the model space of curvature K. The definition needs no derivatives of a metric.

**Problem.** A curvature bound defined by the Riemann tensor needs two derivatives of the metric. So it cannot be stated for limits of spacetimes or for spacetimes with low regularity. One wants curvature bounds that survive limits.

**How the definition helps.** Triangle comparison is a closed condition on distances, so it passes to limits. The quoted stability theorem shows this for causal diamonds, the sets of points between a past point and a future point. The work moves into showing that the synthetic bound agrees with the smooth one. Beran, Kunzinger, Ohanyan and Rott prove this equivalence for timelike planes on strongly causal spacetimes. Our own remark: the smooth and synthetic settings use different sign conventions, so the direction of each bound needs care. The step from local to global comparison stays hard and needs global hyperbolicity.

**Paper or page:** [A Toponogov globalisation result for Lorentzian length spaces](https://arxiv.org/abs/2309.12733), [The equivalence of smooth and synthetic notions of timelike sectional curvature bounds](https://arxiv.org/abs/2403.18077). It says: “If the sequence Jᵢ ∖ Sᵢ converges in the sense of Minguzzi–Suhr to some J, then J is a bounded Lorentzian length space with sectional curvature bounded below by K in the sense of Minguzzi–Suhr.”

**Sources:**

- [T. Beran, J. Harvey, L. Napper and F. Rott, A Toponogov globalisation result for Lorentzian length spaces, Mathematische Annalen (2025), arXiv:2309.12733](https://arxiv.org/abs/2309.12733)
- [T. Beran, M. Kunzinger, A. Ohanyan, F. Rott, The equivalence of smooth and synthetic notions of timelike sectional curvature bounds, arXiv:2403.18077 (2024)](https://arxiv.org/abs/2403.18077)
- [M. Kunzinger and C. Sämann, Lorentzian length spaces, Annals of Global Analysis and Geometry 54 (2018) 399–447](https://doi.org/10.1007/s10455-018-9633-1)

### Weak metrics make the Funk metric the length metric of a domain

**Remember:** Drop symmetry, and every convex domain measures itself.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53C60 (Global differential geometry of Finsler spaces and generalizations (areal metrics)), 51F30. arXiv math.DG, math.MG. Level 4: research.

**Definition.** A weak metric keeps the triangle inequality but drops symmetry and allows distance zero between distinct points. A weak Finsler structure gives each tangent space a convex unit ball that contains the origin and need not be bounded or symmetric. The tautological structure on a convex domain Ω uses Ω itself, centred at the point, as the unit ball.

**Problem.** The Funk metric of a convex domain is not symmetric, and on an unbounded domain it can vanish between distinct points. So it is not a metric in the usual sense. One wants it to arise as the length metric of a natural infinitesimal structure.

**How the definition helps.** With the weak definitions, the domain itself is the unit ball, and the theorem says its length metric is exactly the Funk metric. Euclidean segments are then shortest paths. The usual definitions would exclude this structure, since the unit balls are not symmetric and may be unbounded. The Hilbert metric of projective geometry is the symmetrization of the Funk metric, so it enters the same frame (our own). Our own remark: other shortest paths exist when the boundary contains segments.

**Paper or page:** [Weak Finsler Strutures and the Funk Metric](https://arxiv.org/abs/0804.0705), [Weak Finsler Strutures and the Funk Metric](https://arxiv.org/abs/0804.0705). It says: “We compute distances in the tautological weak Finsler structure of a domain and we show that these are given by the so-called Funk weak metric.”

**Sources:**

- [A. Papadopoulos and M. Troyanov, Weak Finsler structures and the Funk metric, arXiv:0804.0705 (2008)](https://arxiv.org/abs/0804.0705)

### Defining Zoll by a loop index makes Zoll bodies closed under limits

**Remember:** Measure the space of shortest loops instead of asking for a smooth periodic flow.

*Makes the theorem clean to state or prove.* MSC 53D05 (Symplectic manifolds (general theory)), 37J46, 52A20. arXiv math.SG. Level 4: research.

**Definition.** On the boundary of a convex body in ℝ²ⁿ, characteristic loops follow the direction picked out by the symplectic form, weakened at corners. A generalized systole is such a closed loop of least action, which here is the enclosed symplectic area. The systolic index is the Fadell–Rabinowitz index of the space of these loops, a topological size that respects shifts of the starting time. The body is generalized Zoll when this index is at least n.

**Problem.** The generalized Zoll bodies form a closed set among convex bodies, for the Hausdorff distance. For a body with smooth boundary, generalized Zoll is the same as Zoll. Zoll means every characteristic loop is closed, with one common least period.

**How the definition helps.** The index condition makes sense for every convex body, so the closedness question can be stated at all. The classical Zoll condition needs a smooth boundary, and a limit of smooth bodies can have corners. The paper proves that the index is upper semicontinuous, so an index of at least n survives in a limit (Proposition 4.3.1). It also proves that generalized Zoll means equality of the first and n-th Gutt–Hutchings capacities, which measure symplectic size. The substantive steps are these results and the agreement with the smooth Zoll condition.

**Paper or page:** [Systolic S¹-index and characterization of non-smooth Zoll convex bodies](https://arxiv.org/abs/2501.13856v3). It says: “The space of generalized Zoll convex bodies is closed in the space of all convex bodies with respect to the Hausdorff distance topology.”

**Sources:**

- [Stefan Matijević, Systolic S¹-index and characterization of non-smooth Zoll convex bodies, arXiv:2501.13856v3 (2025)](https://arxiv.org/abs/2501.13856v3)

### Loose charts make formal isotopy sufficient

**Remember:** A loose chart lets formal tangent data classify actual embeddings.

*Makes the theorem clean to state or prove.* MSC 53D10 (Contact manifolds (general theory)). arXiv math.SG. Level 4: research.

**Definition.** A contact structure gives a maximally nonintegrable field of tangent hyperplanes, called contact planes. A Legendrian embedding is tangent to these planes and has half their dimension. A loose embedding contains Murphy’s prescribed local model, a zigzag arc thickened in transverse directions with a specified size bound. A formal Legendrian embedding includes a deformation of its derivative through injective linear maps to tangent data satisfying the Legendrian condition.

**Problem.** In contact dimension at least five, every formal Legendrian isotopy class of closed connected knots has a loose representative, unique up to ambient contact isotopy.

**How the definition helps.** The loose chart singles out the knots that formal tangent data can classify. Here isotopy means continuous deformation through the relevant embeddings, and ambient contact isotopy moves the surrounding space while preserving its contact planes. In our own explanation, the chart provides room for the local changes in Murphy’s proof. Her deformation theorem supplies existence and uniqueness.

**Paper or page:** [Loose Legendrian embeddings in high dimensional contact manifolds](https://arxiv.org/abs/1201.2245v5). It says: “Then for each formal Legendrian isotopy class there is a loose Legendrian knot in that class, unique up to ambient contact isotopy.”

**Sources:**

- [Loose Legendrian embeddings in high dimensional contact manifolds, Theorem 1.2](https://arxiv.org/abs/1201.2245v5)

### Higher crossing forms compute the Maslov index at degenerate crossings

**Remember:** At a flat crossing, use the first derivative that does not vanish.

*Makes the theorem clean to state or prove.* MSC 53D12 (Lagrangian submanifolds; Maslov index), 37K45. arXiv math.AP, math.SG. Level 4: research.

**Definition.** A Lagrangian plane is a maximal subspace on which the symplectic form vanishes. The Maslov index of a path of Lagrangian planes is a signed count of its intersections with a fixed Lagrangian plane. At an intersection, the crossing form of order j is a quadratic form built from the j-th derivative of the path.

**Problem.** Take an isolated crossing inside the interval where the forms of orders 1 to j − 1 vanish and the order j form is nondegenerate. The crossing contributes zero to the Maslov index if j is even. It contributes the signature of the order j form if j is odd.

**How the definition helps.** The higher forms replace the first-order form when it vanishes, so the local contribution of the crossing can still be read off. In our own example, t³ changes sign at zero but t² does not, although both have zero first derivative there. At an endpoint the paper counts half of the signature.

**Paper or page:** [The Maslov index, degenerate crossings and the stability of pulse solutions to the Swift-Hohenberg equation](https://arxiv.org/abs/2403.04003v4). It says: “We extend their formulation of the Maslov index to degenerate crossings of general order in the case where the intersection is fully degenerate”

**Sources:**

- [Margaret Beck, Jonathan Jaquette, Hannah Pieper, The Maslov index, degenerate crossings and the stability of pulse solutions to the Swift-Hohenberg equation, arXiv:2403.04003 (2025)](https://arxiv.org/abs/2403.04003v4)

### Dual maps detect Lie algebroid morphisms

**Remember:** The Poisson bracket reads the original bracket and anchor from linear functions.

*Makes the theorem clean to state or prove.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 4: research.

**Definition.** A Lie algebroid is a vector bundle with a Lie bracket on sections. Its anchor maps sections to vector fields and gives the derivative term in the bracket’s product rule. Each section defines a linear function on every dual fiber by evaluation. The dual bundle carries a Poisson bracket, a Lie bracket of functions satisfying the product rule.

**Problem.** Fix a vector bundle map between two Lie algebroids over the identity of their common base. It preserves the section bracket and anchor exactly when its dual preserves Poisson brackets by pullback.

**How the definition helps.** The dual bracket expresses both conditions for a morphism as one requirement on functions. Bracketing two section functions gives the function for their section bracket. Bracketing a section function with a base function differentiates the latter along the anchor. Two base functions have zero bracket. In our own proof, these functions supply local coordinates, so their brackets determine the whole bracket. The Lie algebroid identities ensure that this construction defines a Poisson bracket.

**Paper or page:** [Comomentum sections and Poisson maps in Hamiltonian Lie algebroids](https://arxiv.org/abs/2405.03533v2). It says: “the dual map ψ: A₂∗ → A₁∗ is a Poisson map.”

**Sources:** none listed. No primary source with a working link was found.

### Multiplicative forms reverse under inversion

**Remember:** An arrow and its inverse multiply to a unit, where the form vanishes.

*True by definition.* MSC 53D17 (Poisson manifolds; Poisson groupoids and algebroids). arXiv math.SG. Level 4: research.

**Definition.** A Lie groupoid has smooth spaces of objects and arrows, and every arrow has an inverse. A symplectic form on its arrows is multiplicative if pulling back by multiplication adds the two arrow forms.

**Problem.** Inversion in a symplectic groupoid pulls back the symplectic form to its negative.

**How the definition helps.** The additive definition of multiplicativity lets us substitute inverse arrows directly into one identity of forms. The usual graph definition requires the graph of multiplication to be Lagrangian, meaning half-dimensional with zero restricted difference form. Restricting the product form to this graph gives the additive identity. In our own proof, multiplying each identity arrow by itself shows that the form on identity arrows equals twice itself. It therefore vanishes there. Multiplying each arrow by its inverse now shows that inversion negates the form.

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

### Hypertight forms exclude holomorphic planes

**Remember:** A plane would cap its orbit, so a hypertight form rules it out.

*Rules out counterexamples. Confidence: medium.* MSC 53D42 (Symplectic field theory; contact homology). arXiv math.SG. Level 4: research.

**Definition.** A contact form α determines a vector field R by α(R) = 1 and dα(R, ·) = 0. A Reeb orbit is a closed trajectory of R. A contact form is hypertight if no such orbit bounds a continuous disk.

**Problem.** Add a positive coordinate r to the contact manifold and use the symplectic form d(rα) on the product. For a hypertight form, this space contains no holomorphic plane approaching a single Reeb orbit at infinity.

**How the definition helps.** Hypertightness excludes exactly the disk that the end of such a plane would supply. In our own proof, project a large circle in the plane to the contact manifold. Convergence at infinity makes this loop homotopic to the orbit. The projected interior of the circle fills the loop, so the orbit also bounds a disk. This obstruction uses only the topology of the plane and its end.

**Paper or page:** [A contact homotopy type](https://arxiv.org/abs/2511.01821v1). It says: “Suppose (Y, λ) has no contractible Reeb orbits.”

**Sources:**

- [A contact homotopy type, Corollary 1.5](https://arxiv.org/abs/2511.01821v1)

### Minimum spherical area rules out splitting

**Remember:** Two positive areas cannot share a total equal to the least positive area.

*Rules out counterexamples.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds). arXiv math.SG. Level 4: research.

**Definition.** A spherical homology class is the class represented by a map from a sphere. Choose one whose area, the integral of the symplectic form, is least among all positive spherical areas.

**Problem.** Fix a compact symplectic manifold without boundary and a compatible complex structure on its tangent spaces. A limit of holomorphic spheres in a class of least positive spherical area has exactly one nonconstant sphere component.

**How the definition helps.** The minimum gives each nonconstant component a lower area bound equal to the entire area available. In our own proof, component areas add to the original area, and each nonconstant holomorphic sphere has positive area. At larger area, the sphere maps z ↦ z + t/z split as t tends to zero through positive values. Away from zero they tend to z, while rescaling z = tw gives the second sphere map w ↦ 1/w. The compactness theorem supplies the limit. The area bound controls its components.

**Paper or page:** [A proof of Gromov's non-squeezing theorem](https://arxiv.org/abs/2412.18462v1). It says: “Let A ∈ Z be a homology class of the minimal positive symplectic area in Z”

**Sources:**

- [Shah Faisal, A proof of Gromov's non-squeezing theorem, Theorem 3.2](https://arxiv.org/abs/2412.18462v1)

### Stable maps keep colliding marks distinct

**Remember:** Put colliding marks on a constant sphere instead of identifying them.

*Makes the theorem clean to state or prove.* MSC 53D45 (Gromov-Witten invariants, quantum cohomology, Frobenius manifolds). arXiv math.SG. Level 4: research.

**Definition.** A stable map allows smooth pieces of a domain curve to meet in pairs at points called nodes. Its labeled marks are distinct smooth points away from nodes. Only finitely many changes of domain coordinates may preserve the map and every mark. A sphere mapped to a point therefore needs at least three marks or node branches in total.

**Problem.** Fix a compact symplectic target without boundary and a compatible complex structure on its tangent spaces. Stable holomorphic maps of fixed genus, homology class, and number of marks form a compact space up to changes of domain coordinates.

**How the definition helps.** Allowing a constant sphere gives colliding marks separate places in the limiting domain. In our own example, two marks approach the same point on a fixed nonconstant sphere. A new sphere carries the two marks and meets the original sphere at one node. Its three distinguished points rule out any nonidentity change of sphere coordinates fixing them. Gromov compactness proves that a subsequence converges in the space of stable maps.

**Wikipedia:** [Stable map](https://en.wikipedia.org/wiki/Stable_map). It says: “we attach a copy of ℙ¹ (a sphere), called a bubble, to the domain curve at the problematic point.”

**Sources:** none listed. No primary source with a working link was found.

### Spinᶜ quantization builds in the metaplectic correction

**Remember:** Quantum states are the index of a Dirac operator.

*True by definition. Confidence: medium.* MSC 53D50 (Geometric quantization), 58J20, 19L10. arXiv math.SG, math-ph. Level 4: research.

**Definition.** Spinᶜ quantization is also called quantization by push-forward. Take a compact symplectic manifold with a prequantum line bundle L (a line bundle whose curvature is given by the symplectic form). Its space of quantum states is the index of the spinᶜ Dirac operator twisted by L. This index is the push-forward of L to a point in K-theory, so it is a formal difference of two vector spaces.

**Problem.** Geometric quantization with a Kähler polarization needs an extra choice to give correct results. This choice is the metaplectic correction, a square root of the canonical bundle. One wants a natural construction that includes it.

**How the definition helps.** On a Kähler manifold the spinors already contain the square root of the canonical bundle, so the correction is built in and not added by hand. Let K be the canonical bundle. A spin structure is a square root √K, and the spinor bundle is the bundle of antiholomorphic forms tensored with √K. So the Dirac operator twisted by L is the Dolbeault operator twisted by the corrected bundle L ⊗ √K. The index is the alternating sum of the holomorphic cohomology groups of L ⊗ √K. It agrees with the space of polarized sections when the higher cohomology groups vanish, for example when the corrected bundle is positive. In general, the construction still needs a choice of spinᶜ structure.

**nLab:** [geometric quantization](https://ncatlab.org/nlab/show/geometric+quantization), [geometric quantization by push-forward](https://ncatlab.org/nlab/show/geometric+quantization+by+push-forward). It says: “while from the point of view of the Dirac operator it is just twisting by Lω, since tensoring with the square root line bundle √Ωⁿ,⁰ induces the isomorphism between the antiholomorphic differential form bundle and the actual spinor bundle”

**Sources:**

- [Eckhard Meinrenken, Symplectic surgery and the Spinᶜ-Dirac operator, Advances in Mathematics 134 (1998) 240–277](https://doi.org/10.1006/aima.1997.1701)

### Spinᶜ quantization lets 'quantization commutes with reduction' be stated in general

**Remember:** No polarization needed: take an index.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 53D50 (Geometric quantization), 58J20, 19L10. arXiv math.SG, math-ph. Level 4: research.

**Definition.** A prequantized symplectic manifold carries a prequantum line bundle, a line bundle whose curvature is given by the symplectic form. Spinᶜ quantization takes the space of quantum states of a compact prequantized symplectic manifold to be the index of the spinᶜ Dirac operator twisted by this line bundle. The index is a formal difference of two vector spaces. When a group acts, it is a virtual representation (a formal difference of two representations).

**Problem.** Guillemin and Sternberg stated that quantization commutes with reduction. Let a compact Lie group G act on a symplectic manifold in a Hamiltonian way. Then the G-invariant part of the quantization equals the quantization of the symplectic reduction.

**How the definition helps.** Spinᶜ quantization needs no polarization, so the statement makes sense on every compact prequantized symplectic manifold. Guillemin and Sternberg proved the statement for compact Lie groups acting on compact Kähler manifolds, with Kähler polarization (a compatible complex structure, used to pick holomorphic sections as the quantum states). Our own reading: a general symplectic manifold may have no invariant Kähler polarization, so the statement could not be made there in that form. Spinᶜ quantization, also called quantization by push-forward, is defined for every compact prequantized symplectic manifold. The nLab says that the first proof in this setting, for compact groups and compact manifolds, is Meinrenken's. The proof needs real work, by symplectic surgery and index theory.

**nLab:** [Guillemin-Sternberg geometric quantization conjecture](https://ncatlab.org/nlab/show/Guillemin-Sternberg+geometric+quantization+conjecture), [geometric quantization by push-forward](https://ncatlab.org/nlab/show/geometric+quantization+by+push-forward). It says: “For the more powerful and more flexible geometric quantization by push-forward, the corresponding statement is widely known as the Guillemin-Sternberg conjecture.”

**Sources:**

- [Victor Guillemin, Shlomo Sternberg, Geometric quantization and multiplicities of group representations, Inventiones Mathematicae 67 (1982) 515–538](https://doi.org/10.1007/BF01398934)
- [Eckhard Meinrenken, Symplectic surgery and the Spinᶜ–Dirac operator, Advances in Mathematics 134 (1998) 240–277](https://doi.org/10.1006/aima.1997.1701)

### Outer-minimizing starts make the weak flow's area grow exactly like eᵗ

**Remember:** Start at least area outside, and the area grows exactly like eᵗ.

*Rules out counterexamples.* MSC 53E10 (Flows related to mean curvature), 49Q20. arXiv math.DG, math.AP. Level 4: research.

**Definition.** Inverse mean curvature flow moves a surface outward with speed 1/H, where the mean curvature H is the sum of the principal curvatures. Huisken and Ilmanen defined a weak version by a function u whose level sets are the surfaces Σₜ. These surfaces minimize a certain energy. A surface is outer-minimizing when no surface that encloses it has smaller area.

**Problem.** The smooth flow can break down, but the weak flow exists for all time. One wants the weak flow to keep the exact area growth of the smooth flow, for use in geometric inequalities. The paper works in hyperbolic space ℍⁿ.

**How the definition helps.** The weak flow jumps to a surface of least enclosing area, so an outer-minimizing start makes no jump (our own). For the smooth flow, the area grows like eᵗ because the speed is one over the mean curvature (our own). Otherwise the surface jumps at once to an enclosing surface of smaller area, so the formula fails (our own). The condition excludes exactly this case. The regularity of the surfaces Σₜ stays hard, and it holds only for n &lt; 8 or away from a small singular set.

**Paper or page:** [On weak inverse mean curvature flow and Minkowski-type inequalities in hyperbolic space](https://arxiv.org/abs/2404.08410). It says: “If Σ₀ is outer-minimizing, then the area of Σₜ is given by \|Σₜ\|=eᵗ\|Σ₀\|.”

**Sources:**

- [B. Harvie, On weak inverse mean curvature flow and Minkowski-type inequalities in hyperbolic space, arXiv:2404.08410 (2024)](https://arxiv.org/abs/2404.08410)
- [G. Huisken and T. Ilmanen, The inverse mean curvature flow and the Riemannian Penrose inequality, Journal of Differential Geometry 59 (2001) 353–437](https://doi.org/10.4310/jdg/1090349447)
