### Inversion preserves unsigned angles

**Remember:** Up close, inversion is a mirror times a zoom.

*True by definition.* MSC 51B10 (Möbius geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Inversion in the unit circle sends each nonzero point x of the plane to x/‖x‖², the point on the same ray at the reciprocal distance. Its derivative at x reverses the radial direction, keeps the perpendicular direction, and scales both by 1/‖x‖² (our own).

**Problem.** When two differentiable plane curves meet away from the origin with nonzero velocities, inversion preserves their unsigned angle and reverses their oriented angle.

**How the definition helps.** So the derivative is a reflection times a positive scalar, which keeps the size of every angle and reverses its orientation (our own). The derivative carries the velocities of the two curves to the velocities of their images (our own).

**Wikipedia:** [Inversive geometry](https://en.wikipedia.org/wiki/Inversive_geometry). It says: “The circle inversion map is anticonformal, which means that at every point it preserves angles and reverses orientation”

**Sources:** none listed. No primary source with a working link was found.

### Parallel glides square to a translation of twice the distance

**Remember:** Reflect twice and the slides add.

*Rules out counterexamples.* MSC 51F15 (Reflection groups, reflection geometries). arXiv math.MG, math.GR. Level 1: early undergraduate.

**Definition.** A glide reflection reflects the plane across a line and then shifts it by a nonzero vector parallel to that line. The reflection leaves this parallel vector unchanged.

**Problem.** A glide reflection squared is a translation by twice its glide vector. In particular, a glide reflection has infinite order.

**How the definition helps.** So the second application does not undo the shift, and the square is translation by twice the vector (our own). Even powers are nonzero translations and odd powers reverse orientation, so no positive power is the identity (our own). A perpendicular shift would instead reverse under the reflection and cancel (our own).

**Wikipedia:** [Glide reflection](https://en.wikipedia.org/wiki/Glide_reflection). It says: “two applications of the same glide reflection result in a double translation”

**Sources:** none listed. No primary source with a working link was found.

### Squared distances give the affine form of every Euclidean isometry

**Remember:** Three squared distances already specify the dot product.

*True by definition. Confidence: medium.* MSC 51F20 (Congruence and orthogonality in metric geometry), 20H15. arXiv math.GR, math.MG. Level 1: early undergraduate.

**Definition.** Define the dot product from distances by u·v = ½(\|u\|² + \|v\|² − \|u − v\|²). Then any map that preserves distances and fixes the origin also preserves dot products (our own).

**Problem.** Every distance-preserving map from a finite-dimensional Euclidean space to itself is an orthogonal linear map followed by a translation.

**How the definition helps.** Subtracting the image of the origin gives a distance-preserving map that fixes the origin, so it preserves dot products (our own). It sends the unit coordinate vectors to a perpendicular unit basis, and dot products with that basis recover every coordinate, so the map is orthogonal and linear (our own). Expanding \|u − v\|² shows that the formula agrees with the coordinate dot product (our own).

**nLab:** [orthogonal group](https://ncatlab.org/nlab/show/orthogonal+group). It says: “This is isomorphic to the group of n × n orthogonal matrices.”

**Sources:** none listed. No primary source with a working link was found.

### Cyclic order fixes Ptolemy’s diagonals

**Remember:** Walk around the circle before you name the diagonals.

*Rules out counterexamples.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** A cyclic quadrilateral ABCD has four distinct points on a circle, named in their order around the circle. This order makes AC and BD join opposite vertices, so they are the diagonals.

**Problem.** For cyclic order A, B, C, D, the lengths obey AC × BD = AB × CD + BC × DA.

**How the definition helps.** Ptolemy’s equality concerns the diagonals, and the cyclic order is what makes AC and BD the diagonals; the usual proof then uses similar triangles. For a unit square with A, B at the bottom, C above A and D above B, AC × BD = 1 but AB × CD + BC × DA = 3 (our own).

**Paper or page:** [Some Polynomial Conditions of Cyclic Quadrilaterals, Tilted Kites and Other Quadrilaterals](https://arxiv.org/abs/2302.10071v1). It says: “Let A, B, C, D be four points lying in counterclockwise or clockwise order on a circle, then P = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Defining angles by the dot product makes the law of cosines algebra

**Remember:** Expand the square of a difference, and the cosine term appears.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 15A63. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** For nonzero vectors u and v, define the angle θ in \[0,π\] between them by cos θ = u·v/(\|u\|\|v\|), where u·v sums the products of matching coordinates and \|u\| = √(u·u). The Cauchy–Schwarz inequality puts this quotient in \[−1,1\], so θ exists.

**Problem.** In a triangle with sides a, b and c, let C be the angle between the sides of lengths a and b. Then c² = a² + b² − 2ab cos C.

**How the definition helps.** With side vectors u and v from the vertex of C, the third side is u − v, and expanding gives \|u − v\|² = \|u\|² + \|v\|² − 2u·v (our own). Substituting u·v = ab cos C gives the law (our own). That this angle matches the triangle’s angle is the geometric content of the definition (our own).

**Wikipedia:** [Dot product](https://en.wikipedia.org/wiki/Dot_product), [Law of cosines](https://en.wikipedia.org/wiki/Law_of_cosines). It says: “In such a presentation, the notions of length and angle are defined by means of the dot product.”

**Paper or page:** [Law of Cosines](https://proofwiki.org/wiki/Law_of_Cosines). It says: “Then: c² = a² + b² − 2 a b cos C”

**Sources:** none listed. No primary source with a working link was found.

### Equiangularity makes regular polygons cyclic

**Remember:** Equal edges and equal turns close on a circle.

*Rules out counterexamples.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** A regular convex polygon has equal sides and equal angles, so walking around it takes equal steps and the same turn at every vertex. Equal sides alone give only an equilateral polygon.

**Problem.** The vertices of a regular convex polygon lie on a single circle.

**How the definition helps.** So one rotation through the exterior angle carries each edge to the next and each vertex to the next (our own). Every vertex is then equally far from the centre of that rotation (our own). A rhombus with a 60° angle is equilateral but not cyclic, since its opposite angles do not sum to 180° (our own).

**Wikipedia:** [Regular polygon](https://en.wikipedia.org/wiki/Regular_polygon). It says: “All vertices of a regular polygon lie on a common circle”

**Paper or page:** [Regular Polygon is Cyclic](https://proofwiki.org/wiki/Regular_Polygon_is_Cyclic). It says: “Then P is a cyclic polygon.”

**Sources:** none listed. No primary source with a working link was found.

### Equidistance defines perpendicular bisectors and makes them meet at the circumcentre

**Remember:** A point equally far from each pair of vertices lies on all three bisectors.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** Define the perpendicular bisector of a segment AB as the set of points P with PA = PB. Subtracting the squared-distance equations in coordinates shows that this set is the line through the midpoint of AB at right angles to AB.

**Problem.** The perpendicular bisectors of the three sides of a nondegenerate triangle meet at one point. That point is the centre of a circle through the vertices.

**How the definition helps.** A point on the bisectors of AB and BC has PA = PB = PC, so it lies on the bisector of CA, and the circle centred there with radius PA passes through all three vertices. Two of the bisectors meet at exactly one point because the sides AB and BC are not parallel (our own).

**Wikipedia:** [Circumcircle](https://en.wikipedia.org/wiki/Circumcircle). It says: “Therefore any point which is simultaneously on two of the perpendicular bisectors must be equidistant from all three vertices.”

**Sources:** none listed. No primary source with a working link was found.

### Equidistance makes angle bisectors meet

**Remember:** Equal distances to two pairs of sides give the third pair.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Define the internal angle bisector at a vertex as the vertex together with the interior points of the angle that are equally distant from its two side lines. Congruent right triangles show that this agrees with splitting the angle into two equal angles (our own).

**Problem.** The three internal angle bisectors of a nondegenerate triangle meet at one point.

**How the definition helps.** Where the bisectors at A and B meet, the distance to AB equals the distances to AC and to BC, so the point is equally distant from AC and BC (our own). It lies inside the triangle, hence inside the angle at C, so it is on the third bisector (our own).

**Paper or page:** [Angle Bisectors are Locus of Points Equidistant from Lines](https://proofwiki.org/wiki/Angle_Bisectors_are_Locus_of_Points_Equidistant_from_Lines). It says: “The locus of points which are equidistant from ℒ₁ and ℒ₂ are the angle bisectors of ℒ₁ and ℒ₂.”

**Sources:**

- [Euclid, Elements, Book IV, Proposition 4](https://mathcs.clarku.edu/~djoyce/java/elements/bookIV/propIV4.html)

### Midpoint averages give Varignon’s parallelogram

**Remember:** The two midpoint diagonals have the same midpoint.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 51N10. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Define the midpoint of a segment as the average (P + Q)/2 of its endpoint position vectors. Then both segments joining midpoints of opposite sides of ABCD have the same midpoint, (A + B + C + D)/4.

**Problem.** The successive side midpoints of a convex quadrilateral with no three collinear vertices form a parallelogram.

**How the definition helps.** A quadrilateral whose diagonals bisect each other is a parallelogram, so the midpoint quadrilateral is one (our own). The remaining work is checking that the vector average is the geometric halfway point (our own).

**Wikipedia:** [Varignon's theorem](https://en.wikipedia.org/wiki/Varignon%27s_theorem). It says: “the midpoints of the sides of an arbitrary quadrilateral form a parallelogram”

**Sources:** none listed. No primary source with a working link was found.

### Signed lengths make the converse of Menelaus's theorem true

**Remember:** Measure forward positively and backward negatively before multiplying the three ratios.

*Makes the theorem clean to state or prove.* MSC 51M04 (Elementary problems in Euclidean geometries), 51A20. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Choose a direction on a line and a unit coordinate increasing in it; the signed length AB is the coordinate of B minus that of A. So a ratio such as AF/FB is positive when F lies between A and B and negative when F lies outside.

**Problem.** Let D, E, F lie on the side lines BC, CA, AB of triangle ABC, away from the vertices. They are collinear if and only if (AF/FB)(BD/DC)(CE/EA) = −1, with signed lengths.

**How the definition helps.** With signed lengths the product is −1 exactly for collinear points, while Ceva’s theorem gives +1 for concurrent lines (our own comparison). Absolute values merge these two cases, so the unsigned converse fails.

**Wikipedia:** [Menelaus's theorem](https://en.wikipedia.org/wiki/Menelaus%27s_theorem). It says: “Note that the converse of the weaker, unsigned statement is not necessarily true.”

**Sources:**

- [J. Benítez, A unified proof of Ceva and Menelaus' theorems using projective geometry, Journal for Geometry and Graphics 11 (2007) 39–44](https://www.heldermann-verlag.de/jgg/jgg11/j11h1beni.pdf)

### The signed power of a point unifies secants and chords

**Remember:** Square the distance to the center and subtract the squared radius.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** For a circle with center O and radius r, the power of P is Π(P) = \|PO\|² − r². It is positive outside, zero on the circle and negative inside.

**Problem.** Take any line through P that meets the circle at S₁ and S₂. Then \|PS₁\|·\|PS₂\| = \|Π(P)\|, so the product does not depend on the line.

**How the definition helps.** With M the midpoint of the chord, \|PS₁\|·\|PS₂\| = \|PM² − MS₁²\|, and Pythagoras gives PM² − MS₁² = PO² − r² (our own). So one number gives both the intersecting secants theorem and the intersecting chords theorem, with the tangent case S₁ = S₂. With signed distances along the line, both cases become PS₁ · PS₂ = Π(P) (our own remark).

**Wikipedia:** [Power of a point](https://en.wikipedia.org/wiki/Power_of_a_point). It says: “For the intersecting secants theorem and chord theorem the power of a point plays the role of an invariant”

**Sources:**

- [J. Steiner, Einige geometrische Betrachtungen, Journal für die reine und angewandte Mathematik 1 (1826), 161–184](https://doi.org/10.1515/crll.1826.1.161)
- [J. Steiner, Einige geometrische Betrachtungen, reprinted in Gesammelte Werke, vol. 1 (1881)](https://doi.org/10.1515/9783111506609.17)

### The vertex-average centroid makes the triangle medians meet

**Remember:** The average of three vertices is two thirds of the way to each opposite midpoint.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 51N10. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** Define the centroid G of triangle ABC as the vertex average (A + B + C)/3. Regrouped, G = ⅓A + ⅔·(B + C)/2, the point two thirds of the way from A to the midpoint of BC (our own).

**Problem.** The three medians of a triangle meet at one point. That point divides each median in the ratio 2 to 1 from the vertex.

**How the definition helps.** The same regrouping at B and at C puts G two thirds along every median, so the medians meet at G and G divides each in the ratio 2 to 1 (our own).

**Wikipedia:** [Centroid](https://en.wikipedia.org/wiki/Centroid). It says: “The centroid divides each of the medians in the ratio 2:1, which is to say it is located ⅓ of the distance from each side to the opposite vertex”

**Paper or page:** [Medians of Triangle Meet at Centroid](https://proofwiki.org/wiki/Medians_of_Triangle_Meet_at_Centroid). It says: “Then the medians of △ABC meet at a single point.”

**Sources:** none listed. No primary source with a working link was found.

### Triangle weights cancel in Ceva’s theorem

**Remember:** Multiply around the triangle and every weight cancels.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 51N10. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Give the vertices of a nondegenerate triangle ABC positive weights a, b, c; every interior point is the weighted average P = (aA + bB + cC)/(a + b + c) for weights unique up to scale. The line from A through P meets BC at the point L with BL/LC = c/b (our own).

**Problem.** Join each vertex of a triangle to a point inside its opposite side. The three lines meet exactly when the three ratios of side segments, taken in cyclic order, multiply to one.

**How the definition helps.** So the three ratios are c/b, a/c and b/a, and their product is one (our own). Conversely, two ratios fix the weights up to scale, so product one forces the third ratio to match, and the third line passes through the same point (our own).

**Paper or page:** [Ceva's Theorem](https://proofwiki.org/wiki/Ceva's_Theorem). It says: “BL/LC × CM/MA × AN/NB = 1”

**Sources:** none listed. No primary source with a working link was found.

### Vector sums fix Euler’s ratio

**Remember:** The orthocenter is the vertex sum, and the centroid is its third.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Put the origin at the circumcenter, so the vertex vectors a, b, c have equal lengths. Then the point h = a + b + c lies on every altitude, because h − a = b + c is perpendicular to b − c, so h is the orthocenter (our own).

**Problem.** In a nonequilateral triangle, the centroid is a third of the way from the circumcenter to the orthocenter.

**How the definition helps.** The centroid (a + b + c)/3 is h/3, a third of the way from the circumcenter to the orthocenter (our own). The perpendicularity holds because (b + c)·(b − c) = \|b\|² − \|c\|² = 0 (our own).

**Paper or page:** [Position of Centroid on Euler Line](https://proofwiki.org/wiki/Position_of_Centroid_on_Euler_Line). It says: “OG : GH = 1 : 2”

**Sources:** none listed. No primary source with a working link was found.

### Congruence by isometries preserves corresponding measurements

**Remember:** A motion that keeps distances keeps everything built from distances.

*True by definition.* MSC 51M05 (Euclidean geometries (general) and generalizations), 97G40. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** Two labelled triangles are congruent if an isometry, a map of the plane that preserves all distances, takes each vertex to its matching vertex.

**Problem.** Congruent triangles have equal corresponding side lengths, median lengths, and angles. They also have equal perimeters and areas.

**How the definition helps.** An isometry preserves side lengths and hence perimeters, and it preserves midpoints, so it preserves median lengths (our own). Plane isometries are compositions of translations, rotations and reflections, each of which keeps angle sizes and areas (our own).

**Wikipedia:** [Congruence (geometry)](https://en.wikipedia.org/wiki/Congruence_%28geometry%29). It says: “In this sense, the sentence "two plane figures are congruent" implies that their corresponding characteristics are congruent (or equal) including not just their corresponding sides and angles, but also their corresponding diagonals, perimeters, and areas.”

**Sources:** none listed. No primary source with a working link was found.

### Exactly five convex solids have equal regular faces and equal corners

**Remember:** Same faces, same corners, no dents.

*Rules out counterexamples.* MSC 51M20 (Polyhedra and polytopes; regular figures, division of spaces), 52B15. arXiv math.MG. Level 1: early undergraduate.

**Definition.** A regular polyhedron, in the Greek sense, is a convex solid whose faces are congruent regular polygons, with the same number of faces meeting in the same way at every vertex. Convexity forces the face angles at each vertex to sum to less than 2π (our own).

**Problem.** Up to similarity, there are exactly five regular convex polyhedra, the Platonic solids.

**How the definition helps.** If q regular p-gons meet at each vertex, then q(1 − 2/p)π &lt; 2π with p, q ≥ 3 leaves only (3,3), (3,4), (3,5), (4,3) and (5,3) (our own). The classical classification realizes each pair by one solid up to similarity (our own). Congruent faces exclude the square pyramid, and equal vertex counts exclude the triangular bipyramid.

**Wikipedia:** [Regular polyhedron](https://en.wikipedia.org/wiki/Regular_polyhedron). It says: “This definition rules out, for example, the square pyramid (since although all the faces are regular, the square base is not congruent to the triangular sides), or the shape formed by joining two tetrahedra together”

**Sources:** none listed. No primary source with a working link was found.

### Simple polygons have angle sum 2π and n − 2 triangles

**Remember:** A simple polygon turns around exactly once.

*Rules out counterexamples. Confidence: medium.* MSC 51M20 (Polyhedra and polytopes; regular figures, division of spaces), 51M04. arXiv math.MG, cs.CG. Level 1: early undergraduate.

**Definition.** A simple polygon is a closed chain of finitely many line segments that does not cross or touch itself, that is, a Jordan curve made of segments. So it has one inside, and when it has more than three sides some diagonal cuts off a triangle and leaves a smaller simple polygon (our own).

**Problem.** The signed exterior angles of a counterclockwise simple n-gon sum to 2π. Some n − 3 of its diagonals divide it into n − 2 triangles.

**How the definition helps.** Cutting off such ears one at a time, as the two ears theorem allows, uses n − 3 diagonals and leaves n − 2 triangles. Their angles give interior angle sum (n − 2)π, so the signed exterior angles sum to 2π (our own). The pentagram crosses itself, and its signed turns sum to 4π in one orientation (our own).

**Wikipedia:** [Simple polygon](https://en.wikipedia.org/wiki/Simple_polygon). It says: “The sum of external angles of a simple polygon is 2π. Every simple polygon with n sides can be triangulated by n−3 of its diagonals”

**Sources:**

- [G. H. Meisters, Polygons have ears, American Mathematical Monthly 82 (1975) 648–651](https://doi.org/10.1080/00029890.1975.11993898)

### Affine maps defined by weighted combinations preserve midpoints and centroids

**Remember:** Midpoints and centroids are weighted combinations that affine maps preserve.

*True by definition.* MSC 51N10 (Affine analytic geometry), 15A04. arXiv math.MG. Level 1: early undergraduate.

**Definition.** An affine map of real affine spaces is a map f with f(∑wᵢPᵢ) = ∑wᵢf(Pᵢ) whenever the weights wᵢ sum to 1, negative weights allowed. In coordinates these are exactly the maps x ↦ Ax + b.

**Problem.** Affine maps preserve midpoints and centroids, where a centroid is the average of the vertices.

**How the definition helps.** A midpoint has weights ½ and ½ and a centroid has equal weights, so f preserves both directly. The coordinate form follows since subtracting f(0) leaves a map that respects sums and scalar multiples, and conversely b enters a weighted combination once because the weights sum to 1 (our own).

**Wikipedia:** [Affine transformation](https://en.wikipedia.org/wiki/Affine_transformation). It says: “In other words, f preserves barycenters.”

**Sources:** none listed. No primary source with a working link was found.

### Parallelogram diagonals share a midpoint

**Remember:** Add half of each edge to reach the middle of either diagonal.

*True by definition.* MSC 51N10 (Affine analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Define a parallelogram by a vertex p and independent edge vectors u and v, with vertices p, p + u, p + u + v and p + v in order. Its opposite sides are then parallel, two copies of u and two of v (our own).

**Problem.** The diagonals of a parallelogram bisect each other. A quadrilateral whose diagonals bisect each other is a parallelogram.

**How the definition helps.** Both diagonals have endpoint sum 2p + u + v, so they share the midpoint p + (u + v)/2 (our own). Conversely, if the diagonals of ABCD share a midpoint, then A + C = B + D, so D − A = C − B and the quadrilateral has this form (our own).

**Paper or page:** [Condition for Points in Complex Plane to form Parallelogram](https://proofwiki.org/wiki/Condition_for_Points_in_Complex_Plane_to_form_Parallelogram), [Quadrilateral with Bisecting Diagonals is Parallelogram](https://proofwiki.org/wiki/Quadrilateral_with_Bisecting_Diagonals_is_Parallelogram). It says: “Let the diagonals of ABCD bisect each other.”

**Sources:** none listed. No primary source with a working link was found.

### Positive weights locate triangle interiors

**Remember:** Inside a triangle, all three vertex weights are positive.

*True by definition.* MSC 51N10 (Affine analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** For a nondegenerate triangle ABC, the weight of P at A is the signed area of PBC divided by the signed area of ABC, and cycling A, B, C gives the other two. Signed area is positive for counterclockwise order, negative for clockwise order and zero for collinear points, so the weight at A is positive exactly when P is on A’s side of BC (our own).

**Problem.** A point is strictly inside a nondegenerate triangle exactly when all three of its barycentric coordinates are positive.

**How the definition helps.** The three weights therefore test the three open half-planes whose intersection is the interior of the triangle (our own). These ratios are the usual barycentric coordinates, since each is affine in P, equal to one at its own vertex and zero at the others.

**Wikipedia:** [Barycentric coordinate system](https://en.wikipedia.org/wiki/Barycentric_coordinate_system). It says: “they are all positive if and only if the point is strictly inside the simplex.”

**Paper or page:** [Barycentric Coordinates of Point inside Triangle](https://proofwiki.org/wiki/Barycentric_Coordinates_of_Point_inside_Triangle). It says: “Let p be an arbitrary point inside T.”

**Sources:** none listed. No primary source with a working link was found.

### A curved bisector is parabolic

**Remember:** A radius shifts the tangent into a directrix.

*True by definition.* MSC 51N20 (Euclidean analytic geometry), 51M04. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Take a circle with centre O and radius r and a line tangent to it. Their bisector is the set of points outside the open disk, in the closed half-plane of the line that contains O, equally distant from the circle and the line; there the distance to the circle is the distance to O minus r (our own).

**Problem.** The distance bisector is a parabola with the circle center as its focus. Its directrix is the tangent line shifted by one radius away from the center.

**How the definition helps.** On that side, distance to the line plus r is distance to the line moved r further from O (our own). So the condition says distance to O equals distance to the shifted line, which is the focus and directrix test for a parabola (our own). Conversely, every point of that parabola lies on the chosen side and outside the open disk (our own).

**Paper or page:** [Bisecting horn angles](https://arxiv.org/abs/2206.09499v1). It says: “The metric bisector of a horn angle formed by a circle and a tangent is the parabola with focus at the center of the circle, focal distance equal to the circle’s radius, and directrix parallel to the tangent.”

**Sources:**

- [Sergiy Koshkin, Bisecting horn angles, Theorem 1](https://arxiv.org/abs/2206.09499v1)

### Circle equations bound intersections

**Remember:** Subtract two circle equations to get a line.

*True by definition.* MSC 51N20 (Euclidean analytic geometry), 97G70. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** In coordinates, a circle with centre (a,b) and radius r &gt; 0 is the set where (x − a)² + (y − b)² = r², the distance definition rewritten by the Pythagorean theorem. Every such equation has the same quadratic part x² + y², so the difference of two of them is linear.

**Problem.** Two distinct circles in the Euclidean plane share at most two points.

**How the definition helps.** Distinct concentric circles have different radii and share no points (our own). Otherwise the difference of the two equations defines a line, and on that line either equation becomes a quadratic with at most two roots (our own).

**Paper or page:** [An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406). It says: “Distinct circles have at most two points in common.”

**Sources:**

- [Peter M Johnson, An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406)

### Focal distances explain parabolic reflection

**Remember:** Equal distances give a mirror line.

*Makes the theorem clean to state or prove.* MSC 51N20 (Euclidean analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** A parabola is the set of points equally distant from a focus F and a line, the directrix, that does not pass through F. So for a point P with foot H on the directrix, PF = PH, and P lies on the perpendicular bisector of FH (our own).

**Problem.** A ray travelling parallel to the axis toward a parabola from its open side reflects through the focus.

**How the definition helps.** Every other point of the parabola is closer to F than to H, so this bisector touches the parabola only at P and is its tangent (our own). Reflection in it swaps the directions toward H and toward F, so a ray arriving parallel to the axis leaves through the focus (our own).

**Paper or page:** [Focal Property of Parabola](https://proofwiki.org/wiki/Focal_Property_of_Parabola). It says: “The tangent to 𝒦 at P bisects the angle between the straight line PF and the straight line through P perpendicular to D.”

**Sources:** none listed. No primary source with a working link was found.

### Focal sums make ellipses convex

**Remember:** Each focal distance obeys the triangle inequality.

*True by definition.* MSC 51N20 (Euclidean analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** A filled ellipse is the set of points whose distances to two fixed foci sum to at most a bound larger than the distance between the foci. Each distance to a focus is a convex function of the point, by the triangle inequality (our own).

**Problem.** The segment between any two points of a filled ellipse stays in the filled ellipse (our own).

**How the definition helps.** So along a segment each focal distance is at most the weighted average of its endpoint values, and adding the two bounds keeps the sum within the bound (our own). The remaining work is identifying this region with the usual quadratic region (our own).

**nLab:** [convex set](https://ncatlab.org/nlab/show/convex+set). It says: “the straight line segment connecting x with y in X is also contained in S.”

**Wikipedia:** [Ellipse](https://en.wikipedia.org/wiki/Ellipse). It says: “the ellipse is the set of points P such that the sum of the distances \|PF₁\|, \|PF₂\| is equal to 2a”

**Sources:** none listed. No primary source with a working link was found.

### Orthonormal frames determine rigid motions

**Remember:** Move the origin and carry both coordinate directions with it.

*True by definition.* MSC 51N20 (Euclidean analytic geometry), 97G70. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** An orthonormal frame is a point with two perpendicular unit vectors, and it gives each point of the plane unique coordinates (our own). A rigid motion is a map of the plane that preserves distances.

**Problem.** Any match between two orthonormal frames in the Euclidean plane extends to a unique rigid motion.

**How the definition helps.** Send each point to the point with the same coordinates in the second frame; the distance formula in coordinates makes this an isometry (our own). Any rigid motion with the given match fixes where the origin and both unit endpoints go, and distances to these three points determine both coordinates, so it is unique (our own).

**Paper or page:** [An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406). It says: “Any map as above between systems of axes (l, m) and (l′, m′) extends uniquely to a rigid motion of the plane.”

**Sources:**

- [Peter M Johnson, An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406)

### Projection pairs rational points

**Remember:** Project from the pole to trade rational pairs for rational numbers.

*True by definition.* MSC 51N20 (Euclidean analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Project each point of the unit circle other than (0, 1) to the horizontal axis along the line through (0, 1). The point (x, y) goes to t = x/(1 − y), and t comes back to (2t/(1 + t²), (t² − 1)/(1 + t²)), both by rational operations.

**Problem.** This projection gives a bijection between rational coordinate pairs on the circle other than (0, 1) and rational numbers on the axis.

**How the definition helps.** Rational operations take rational points to rational numbers and back, so the projection gives the bijection (our own). Angle coordinates would instead need to know when sine and cosine are both rational.

**Wikipedia:** [Stereographic projection](https://en.wikipedia.org/wiki/Stereographic_projection). It says: “The rational points on a circle correspond, under stereographic projection, to the rational points of the line.”

**Sources:** none listed. No primary source with a working link was found.

### Signed areas give the shoelace formula

**Remember:** Keep the sign, and edges walked both ways cancel.

*True by definition.* MSC 51N20 (Euclidean analytic geometry), 51M04. arXiv math.MG. Level 1: early undergraduate.

**Definition.** The signed area of a triangle is its area with a sign: positive when its vertices run counterclockwise, negative when clockwise, and zero when they are collinear. Swapping two vertices flips the sign, so a segment walked once each way contributes nothing (our own).

**Problem.** A simple polygon listed counterclockwise has area equal to the sum of signed triangle areas from the origin to each successive edge. Each term is half the determinant of the two endpoint vectors.

**How the definition helps.** Signed areas make each interior edge of a triangulation cancel, because its two neighbouring triangles traverse it in opposite directions (our own). For one counterclockwise triangle ABC and any origin O, the area equals \[OAB\] + \[OBC\] + \[OCA\], where \[OPQ\] is half the determinant of P and Q (our own). Adding over a triangulation of the polygon leaves only the boundary edges (our own).

**Wikipedia:** [Shoelace formula](https://en.wikipedia.org/wiki/Shoelace_formula). It says: “The triangle formula sums up the oriented areas Aᵢ of triangles OPᵢPᵢ₊₁”

**Sources:** none listed. No primary source with a working link was found.

### Two point reflections give a translation

**Remember:** Two minus signs cancel and leave the shift 2(q − p).

*True by definition.* MSC 51N20 (Euclidean analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Reflection in a point p sends x to 2p − x, the point that makes p the midpoint of x and its image.

**Problem.** Reflection in p followed by reflection in q translates each point by twice the vector from p to q.

**How the definition helps.** The composite sends x to 2q − (2p − x) = x + 2(q − p), so the two minus signs cancel (our own). The shift 2(q − p) does not depend on x, so the composite is a translation.

**Wikipedia:** [Point reflection](https://en.wikipedia.org/wiki/Point_reflection). It says: “The composition of two point reflections is a translation.”

**Sources:** none listed. No primary source with a working link was found.

### Unequal distance ratios give circles

**Remember:** Unequal pull toward two points traces a circle; equal pull, a line.

*Rules out counterexamples.* MSC 51N20 (Euclidean analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** An Apollonius circle is the set of points P with PA = k·PB, for two distinct fixed points A and B and a fixed positive ratio k ≠ 1. The ratio must differ from one, because equal distances give the perpendicular bisector, a line (our own).

**Problem.** In the Euclidean plane, take distinct points A and B and a positive number k ≠ 1. The points P satisfying PA = k·PB form a circle.

**How the definition helps.** Squaring PA² = k²·PB² leaves the squared terms with coefficient 1 − k², which is nonzero, so dividing by it and completing the square gives a circle (our own). Its radius is k·AB/\|1 − k²\|, which is positive (our own). At k = 1 the squared terms cancel and only the perpendicular bisector of AB remains (our own).

**Wikipedia:** [Circles of Apollonius](https://en.wikipedia.org/wiki/Circles_of_Apollonius). It says: “a circle could be defined as the set of points P that have a given ratio of distances”

**Sources:** none listed. No primary source with a working link was found.

### Desargues's theorem needs no special cases in the projective plane

**Remember:** Parallel lines meet at infinity, so every meeting point exists.

*Makes the theorem clean to state or prove.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51A20, 51N15. arXiv math.MG. Level 2: later undergraduate.

**Definition.** The real projective plane is the Euclidean plane with one extra point for each direction of parallel lines, where all lines of that direction meet. The extra points form one new line, the line at infinity, so any two distinct lines meet in exactly one point.

**Problem.** Take two nondegenerate triangles in the real projective plane with six distinct vertices and distinct corresponding sides. If their three corresponding vertex joins are concurrent, the three corresponding side intersections are collinear.

**How the definition helps.** Every two distinct lines meet, so the three side intersections always exist and one statement covers every case (our own). If two corresponding sides are parallel, they meet at their shared direction point on the line at infinity.

**Wikipedia:** [Desargues's theorem](https://en.wikipedia.org/wiki/Desargues%27s_theorem). It says: “Commonly, to remove these exceptions, mathematicians "complete" the Euclidean plane by adding points at infinity, following Jean-Victor Poncelet.”

**Sources:** none listed. No primary source with a working link was found.

### In the projective plane, Pascal's theorem needs no special cases

**Remember:** Parallel sides meet at infinity, so the Pascal line always exists.

*Makes the theorem clean to state or prove.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51A20, 14H50. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** The real projective plane is the Euclidean plane with one extra point for each direction of parallel lines, where all lines of that direction meet. The extra points form one new line, the line at infinity, so any two distinct lines meet in exactly one point.

**Problem.** Join six distinct points on a nondegenerate conic in the real projective plane in cyclic sequence to form a hexagon. The intersections of the three pairs of opposite sides lie on one line, the Pascal line.

**How the definition helps.** In the projective plane opposite sides always meet, so one statement covers every case. In the Euclidean plane, a parallel pair of opposite sides would need a separate statement that the Pascal line is parallel to them.

**Wikipedia:** [Pascal's theorem](https://en.wikipedia.org/wiki/Pascal%27s_theorem). It says: “The most natural setting for Pascal's theorem is in a projective plane since any two lines meet and no exceptions need to be made for parallel lines.”

**Sources:** none listed. No primary source with a working link was found.

### Point and line duality turns Pascal into Brianchon

**Remember:** Swap points and lines: Pascal's line becomes Brianchon's point.

*True by definition.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51N15. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Projective duality swaps points and lines: each line becomes a point, each point becomes a line, and lines through one point become points on one line. The tangent lines of a nondegenerate conic become the points of another conic, its dual.

**Problem.** Let the six sides of a real projective hexagon touch a nondegenerate conic at six distinct points. The three lines joining opposite vertices pass through one point.

**How the definition helps.** Under duality the six tangent sides become six points on the dual conic, an inscribed hexagon, so Pascal’s theorem applies (our own). Pascal puts the three meeting points of opposite sides on one line. Back in the original plane, those meeting points are the three diagonals, and their common line is a common point.

**Wikipedia:** [Brianchon's theorem](https://en.wikipedia.org/wiki/Brianchon%27s_theorem). It says: “The polar reciprocal and projective dual of this theorem give Pascal's theorem.”

**Sources:**

- [C.-J. Brianchon, Mémoire sur les lignes du second ordre (1817), § XXXVI.](https://www.e-rara.ch/zut/download/pdf/15345060)

### Projective planes make the duality of points and lines a theorem

**Remember:** Points and lines obey the same rules, so swap the words.

*True by definition.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51A10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A projective plane is a set of points and lines with an incidence relation: every two distinct points lie on exactly one line, and every two distinct lines meet in exactly one point. Also, some four points have no three on one line. The first two axioms turn into each other when points and lines are exchanged.

**Problem.** If an incidence statement holds in every projective plane, its dual also holds in every projective plane. The dual exchanges points with lines and reverses incidence.

**How the definition helps.** The axioms are symmetric in points and lines, so the dual of a projective plane is again a projective plane, and a proof dualizes step by step. The one check is that the dual of the four-point axiom, four lines with no three through one point, is a theorem.

**Wikipedia:** [Projective plane](https://en.wikipedia.org/wiki/Projective_plane). It says: “Thus any two distinct lines in a projective plane intersect at exactly one point.”

**Sources:** none listed. No primary source with a working link was found.

### Ruling out degenerate projective planes gives every line the same size

**Remember:** Four points, no three on a line, rule out the lopsided planes.

*Rules out counterexamples. Confidence: medium.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51E15. arXiv math.MG, math.CO. Level 2: later undergraduate.

**Definition.** A projective plane has points and lines in which every two distinct points lie on exactly one line and every two distinct lines meet in exactly one point. It must contain four points with no three on one line, which gives any two lines a point off both (our own).

**Problem.** In a projective plane, every line has the same number s + 1 of points and every point lies on s + 1 lines, where s is the order of the plane. A finite plane has s² + s + 1 points.

**How the definition helps.** Projecting from a point off two given lines is a bijection between their point sets, so all lines have the same size (our own). The four-point axiom supplies that point; without it, a near-pencil has one long line and all other lines of size two (our own). Counting the s + 1 lines through one point, each with s further points, gives s² + s + 1 (our own).

**Wikipedia:** [Projective plane](https://en.wikipedia.org/wiki/Projective_plane). It says: “The last condition excludes the so-called degenerate cases”

**Sources:** none listed. No primary source with a working link was found.

### Swapping points and lines gives the converse of Desargues

**Remember:** Swap points and lines, and Desargues runs backwards.

*True by definition.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Projective duality swaps points and lines and keeps incidence: a point lies on a line exactly when the dual line passes through the dual point. So collinear points become concurrent lines, and the reverse.

**Problem.** Take two triangles in the real projective plane with six distinct vertices and distinct corresponding sides. If the corresponding sides meet at three distinct points on one line, the lines joining corresponding vertices pass through one point.

**How the definition helps.** Dualizing turns the converse into Desargues’s theorem itself, because the dual of the real projective plane is again a real projective plane (our own). In the dual plane, the three collinear side meetings become three concurrent vertex joins, so Desargues makes the new side meetings collinear. Back in the original plane, that line is the common point of the original vertex joins.

**Paper or page:** [Desargues' Theorem/Converse](https://proofwiki.org/wiki/Desargues'_Theorem/Converse). It says: “Then the lines AA′, BB′ and CC′ intersect in the point O.”

**Sources:**

- [C.-J. Brianchon, Mémoire sur les lignes du second ordre (1817), § XIII, note.](https://www.e-rara.ch/zut/download/pdf/15345060)

### The quadrangle definition makes collineations preserve harmonic quadruples

**Remember:** Harmonic means a quadrangle draws it, and collineations carry quadrangles.

*True by definition.* MSC 51A20 (Configuration theorems in linear incidence geometry), 51A30, 51N15. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Over a field of characteristic not two, four distinct collinear points A, B, C, D are harmonic when a complete quadrangle draws them. That is, four points with no three collinear have two pairs of opposite sides meeting at A and at B, and the third pair meeting line AB at C and D.

**Problem.** A collineation is a bijection of the plane that maps lines to lines. Every collineation preserves harmonic quadruples.

**How the definition helps.** The definition uses only joins of points and meets of lines, so a collineation carries a witnessing quadrangle to a witnessing quadrangle (our own). That D does not depend on the chosen quadrangle follows from Desargues’s theorem. In coordinates, D is the fourth point with cross-ratio −1.

**Wikipedia:** [Projective harmonic conjugate](https://en.wikipedia.org/wiki/Projective_harmonic_conjugate). It says: “The point D does not depend on what point L is taken initially, nor upon what line through C is used to find M and N. This fact follows from Desargues theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Counting lines as circles removes the exceptions in inversion

**Remember:** A line is a circle through the point at infinity.

*Makes the theorem clean to state or prove.* MSC 51B10 (Möbius geometries), 30C20. arXiv math.MG, math.CV. Level 2: later undergraduate.

**Definition.** Add one point at infinity to the plane and let every line pass through it. A generalised circle is a circle or a line in this extended plane, so a line counts as a circle through infinity.

**Problem.** Inversions and Möbius transformations map generalised circles to generalised circles. Any three distinct points lie on exactly one generalised circle.

**How the definition helps.** Counting lines as circles absorbs both exceptions: inversion sends some circles to lines, and three collinear points lie on a line but on no circle. Under stereographic projection all generalised circles become ordinary circles on the sphere.

**Wikipedia:** [Generalised circle](https://en.wikipedia.org/wiki/Generalised_circle). It says: “Given any three distinct points in the extended plane, there exists precisely one generalised circle passing through all three.”

**Sources:** none listed. No primary source with a working link was found.

### Four points share a Möbius-image circle exactly when their cross-ratio is real

**Remember:** Normalize three points, and their circle becomes the real line.

*True by definition.* MSC 51B10 (Möbius geometries), 30C20. arXiv math.CV, math.MG. Level 2: later undergraduate.

**Definition.** A generalized circle on the Riemann sphere is a Möbius image of the extended real line ℝ ∪ {∞}; these are the circles and the lines with ∞ added. The cross-ratio of four distinct points is the image of the fourth under the Möbius map sending the first three to 0, 1 and ∞.

**Problem.** Four distinct points lie on a generalized circle exactly when their cross-ratio is real.

**How the definition helps.** The normalizing map sends the circle through the first three points onto ℝ ∪ {∞}, since a real Möbius map already sends three real points to 0, 1 and ∞, and the map is unique (our own). So the fourth point lies on that circle exactly when its image, which is not ∞, is real (our own).

**nLab:** [Moebius transformation](https://ncatlab.org/nlab/show/Moebius+transformation). It says: “it turns out that the cross-ratio of a 4-tuple is a real number if and only if the four points lie on a circle (or a line which is a circle passing through ∞).”

**Wikipedia:** [Cross-ratio](https://en.wikipedia.org/wiki/Cross-ratio). It says: “Being on a circle means the four points are the image of four real points under a Möbius transformation, and hence the cross ratio is a real number.”

**Sources:** none listed. No primary source with a working link was found.

### Normalizing three points makes the cross-ratio Möbius invariant

**Remember:** Normalize three points, then read off where the fourth lands.

*True by definition.* MSC 51B10 (Möbius geometries), 30C20. arXiv math.CV, math.MG. Level 2: later undergraduate.

**Definition.** The cross-ratio of four distinct points on the Riemann sphere is the image of the fourth under the unique Möbius map sending the first three to 0, 1 and ∞.

**Problem.** Möbius maps preserve the cross-ratio.

**How the definition helps.** If N normalizes the original triple and M is any Möbius map, then N∘M⁻¹ sends the transformed triple to 0, 1 and ∞, so by uniqueness it is the normalizing map (our own). It sends M(d) to N(d), so the cross-ratio does not change (our own).

**nLab:** [Moebius transformation](https://ncatlab.org/nlab/show/Moebius+transformation). It says: “This motivates the following definition: given a 4-tuple (a, b, c, d) of distinct points in ℙ¹(k), its cross-ratio is”

**Wikipedia:** [Cross-ratio](https://en.wikipedia.org/wiki/Cross-ratio). It says: “The action of the Möbius group is simply transitive on the set of triples of distinct points of the Riemann sphere”

**Sources:** none listed. No primary source with a working link was found.

### Absolute geometry proves once what holds in Euclidean and hyperbolic planes

**Remember:** Drop the parallel postulate and prove theorems for both worlds.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51F05 (Absolute planes in metric geometry), 51M05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Absolute geometry is plane geometry from Hilbert’s incidence, order, congruence and continuity axioms, with no parallel axiom. Both the Euclidean and the hyperbolic plane satisfy all of these axioms.

**Problem.** Every theorem of absolute geometry holds in both Euclidean and hyperbolic geometry. Examples include the exterior angle theorem and the Saccheri–Legendre bound of π on a triangle’s angle sum.

**How the definition helps.** A theorem proved from the axioms holds in every model of them, and both planes are models (our own). The continuity axioms include the Archimedean axiom, which the Saccheri–Legendre bound needs (our own).

**Wikipedia:** [Absolute geometry](https://en.wikipedia.org/wiki/Absolute_geometry). It says: “The theorems of absolute geometry hold in hyperbolic geometry, which is a non-Euclidean geometry, as well as in Euclidean geometry.”

**Sources:** none listed. No primary source with a working link was found.

### Conjugation gives the product of two plane reflections

**Remember:** Two reflections cancel the bars and leave a turn or a shift.

*True by definition.* MSC 51F15 (Reflection groups, reflection geometries). arXiv math.MG, math.GR. Level 2: later undergraduate.

**Definition.** In complex coordinates, reflection in the line through p at angle α to the real axis sends z to p + (cos 2α + i sin 2α)·w̄, where w = z − p and the bar is complex conjugation. Composing two reflections conjugates twice, so the bars cancel and only a turn or a shift remains (our own).

**Problem.** Two reflections in intersecting lines give a rotation about the intersection through twice the directed angle between the lines. Two reflections in parallel lines give a perpendicular translation by twice the displacement from the first line to the second.

**How the definition helps.** Two conjugations cancel, so the composite has the form z ↦ uz + c with \|u\| = 1 (our own). For mirrors through 0 at angles α then β, the composite multiplies by cos 2(β − α) + i sin 2(β − α), a rotation through twice the angle (our own). For horizontal mirrors at heights a then b, the composite adds 2i(b − a), a perpendicular translation (our own).

**Wikipedia:** [Dihedral group](https://en.wikipedia.org/wiki/Dihedral_group). It says: “Reflecting in one axis of symmetry followed by reflecting in another axis of symmetry produces a rotation through twice the angle between the axes.”

**Sources:** none listed. No primary source with a working link was found.

### The moved subspace gives the shortest orthogonal reflection factorization

**Remember:** Each reflection can remove at most one moved direction.

*Makes the theorem clean to state or prove.* MSC 51F15 (Reflection groups, reflection geometries). arXiv math.MG, math.GR. Level 2: later undergraduate.

**Definition.** The moved subspace of an orthogonal linear map A on finite-dimensional Euclidean space is the set of all displacements x − Ax. A reflection in a hyperplane through the origin moves only its normal direction, so composing with it changes the moved dimension by at most one (our own).

**Problem.** The least number of linear reflections giving A equals the dimension of its moved subspace.

**How the definition helps.** Each reflection changes the moved dimension by at most one, which gives the lower bound (our own). For Ax ≠ x, the reflection in the perpendicular bisector of x and Ax fixes every vector that A fixes and sends Ax back to x, so the fixed space grows by one (our own). Repeating this reaches the identity after exactly as many steps as the moved dimension (our own).

**Wikipedia:** [Cartan–Dieudonné theorem](https://en.wikipedia.org/wiki/Cartan%E2%80%93Dieudonn%C3%A9_theorem). It says: “is a composition of at most n reflections.”

**Sources:**

- [Noel Brady and Jon McCammond, Factoring Euclidean Isometries, 2015, Theorem 5.7](https://web.math.ucsb.edu/~jon.mccammond/papers/euclid-isom.pdf)

### Orthogonal determinant-one matrices make compositions of rotations into rotations

**Remember:** Rotation means orthogonal with determinant one, and products keep both.

*True by definition.* MSC 51F25 (Orthogonal and unitary groups in metric geometry), 20G20. arXiv math.MG, math.RA. Level 2: later undergraduate.

**Definition.** Represent a rotation of ℝ³ about the origin by a matrix A with AᵀA = I, which keeps lengths, and det A = 1, which keeps orientation. Both conditions survive multiplication, since (AB)ᵀ(AB) = I and det(AB) = 1.

**Problem.** The composite of two rotations about axes through the same point is again a rotation about some axis through that point.

**How the definition helps.** With the matrix definition, closure is a two-line check, since products keep both conditions. Euler’s rotation theorem turns the product back into a turn about an axis (our own): in three dimensions, determinant one forces an eigenvalue 1, whose eigenvector is the axis.

**Wikipedia:** [Euler's rotation theorem](https://en.wikipedia.org/wiki/Euler%27s_rotation_theorem). It says: “It also means that the composition of two rotations is also a rotation.”

**Sources:** none listed. No primary source with a working link was found.

### Proper orthogonal maps in three dimensions must fix an axis

**Remember:** In three dimensions a proper orthogonal map fixes a line.

*Rules out counterexamples.* MSC 51F25 (Orthogonal and unitary groups in metric geometry), 20H15. arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** A proper orthogonal map is a linear map A that preserves dot products and has determinant +1, so it keeps lengths and handedness.

**Problem.** Every nonidentity proper orthogonal map in three dimensions is a rotation about a unique axis through the origin.

**How the definition helps.** In three dimensions all eigenvalues have absolute value 1, nonreal ones come in conjugate pairs, and their product is +1, so 1 is an eigenvalue and A fixes a line (our own). On the perpendicular plane A is a plane rotation, which fixes no other direction unless A is the identity (our own). Without the determinant condition, x ↦ −x fixes only the origin (our own).

**Wikipedia:** [Euler's rotation theorem](https://en.wikipedia.org/wiki/Euler%27s_rotation_theorem). It says: “The eigenvector corresponding to this eigenvalue is the axis of rotation connecting the two systems.”

**Sources:**

- [Leonhard Euler, Formulae generales pro translatione quacunque corporum rigidorum, 1776](https://www.17centurymaths.com/contents/euler/e478tr.pdf)

### Quaternion conjugation represents each rotation by exactly two signs

**Remember:** Opposite unit quaternions always give the same rotation.

*True by definition.* MSC 51F25 (Orthogonal and unitary groups in metric geometry), 20H15. arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** Treat a vector of ℝ³ as a quaternion with zero real part, and let a unit quaternion q rotate it by conjugation, v ↦ qvq⁻¹. The sign of q appears twice in this formula and cancels (our own).

**Problem.** Each rotation of three-dimensional space about the origin is represented by exactly two unit quaternions, q and −q.

**How the definition helps.** The two signs cancel, so q and −q give the same rotation (our own). Conversely, if q and r give the same rotation, then r⁻¹q commutes with every pure quaternion, in particular with i and j, so it is real and equal to 1 or −1 (our own). Every rotation arises, from cos(θ/2) + u sin(θ/2) for unit axis u and angle θ (our own).

**Wikipedia:** [Quaternions and spatial rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation). It says: “conjugation by q and by −q must produce the same rotational transformation”

**Sources:** none listed. No primary source with a working link was found.

### Unit quaternion multiplication gives the axis of a composed rotation

**Remember:** Multiply the two quaternions and read the axis from the vector part.

*True by definition.* MSC 51F25 (Orthogonal and unitary groups in metric geometry), 20G20. arXiv math.MG, math.RA. Level 2: later undergraduate.

**Definition.** A unit quaternion q rotates a vector v, written as a quaternion with zero real part, by v ↦ qvq⁻¹. The rotation about unit axis u through angle θ comes from cos(θ/2) + u sin(θ/2), so the vector part points along the axis.

**Problem.** For two rotations given by unit quaternions q and p, the product pq represents the rotation that applies q first. Unless it is the identity, the product’s vector part points along its axis.

**How the definition helps.** Conjugation turns composition into multiplication, since (pq)v(pq)⁻¹ = p(qvq⁻¹)p⁻¹. The product pq is again a unit quaternion cos(φ/2) + w sin(φ/2), so its vector part points along the axis w. The vector part is zero only for the identity rotation (our own).

**Wikipedia:** [Quaternions and spatial rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation). It says: “It follows that conjugation by the product of two quaternions is the composition of conjugations by these quaternions”

**Sources:** none listed. No primary source with a working link was found.

### Directed line angles give one test for four points on a circle

**Remember:** Count line angles modulo a straight angle, and the two cases merge.

*Makes the theorem clean to state or prove.* MSC 51M04 (Elementary problems in Euclidean geometries), 97G40. arXiv math.MG, math.HO. Level 2: later undergraduate.

**Definition.** The directed angle from line ℓ to line m is the counterclockwise turn that carries ℓ onto m, counted modulo 180°. Turns that differ by 180° count as equal, since a line has no preferred direction.

**Problem.** Take four distinct points P₁, P₂, P₃, P₄ with no three on a line. They lie on one circle exactly when the directed angle from P₃P₁ to P₃P₂ equals the directed angle from P₄P₁ to P₄P₂.

**How the definition helps.** Directed angles merge the two cases of the inscribed-angle theorem into one equality (our own explanation). For P₃ and P₄ on the same side of P₁P₂ the ordinary angles agree; on opposite sides they sum to 180°, and their signed turns then agree modulo 180°. The inscribed-angle theorem and its converse give the criterion.

**Wikipedia:** [Ellipse](https://en.wikipedia.org/wiki/Ellipse), [Inscribed angle](https://en.wikipedia.org/wiki/Inscribed_angle). It says: “The four points are on a circle, if and only if the angles at P₃ and P₄ are equal.”

**Sources:**

- [R. A. Johnson, Directed angles in elementary geometry, American Mathematical Monthly 24 (1917) 101–105](https://doi.org/10.1080/00029890.1917.11998288)

### Equal powers define radical axes and make them meet

**Remember:** Equal power for two pairs forces equal power for the third.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 51M15. arXiv math.MG, math.HO. Level 2: later undergraduate.

**Definition.** The power of a point P for a circle with centre M and radius r is \|PM\|² − r². The radical axis of two circles with different centres is the set of points with equal power for both; it is a line perpendicular to the line of centres.

**Problem.** If the centres of three circles do not lie on one line, the three radical axes meet at one point, called the radical centre.

**How the definition helps.** A point on two radical axes has the same power for all three circles, so it lies on the third axis (our own). Two axes meet because they are perpendicular to two nonparallel lines of centres. Subtracting the two powers cancels the quadratic terms, which is why each axis is a line.

**Wikipedia:** [Radical axis](https://en.wikipedia.org/wiki/Radical_axis). It says: “If the centers of these circles are not collinear, their radical axes intersect in a common point R, the radical center of the three circles.”

**Sources:** none listed. No primary source with a working link was found.

### Eudoxus’s ratio definition proves Euclid’s triangle area theorem

**Remember:** Equal ratios mean every test with multiples gives the same answer.

*True by definition. Confidence: medium.* MSC 51M04 (Elementary problems in Euclidean geometries), 01A20. arXiv math.HO, math.MG. Level 2: later undergraduate.

**Definition.** Take positive magnitudes a, b of one kind and c, d of one kind. The ratios a : b and c : d are equal when, for all positive integers m and n, ma compares with nb exactly as mc compares with nd: less, equal or greater.

**Problem.** Triangles with the same height have areas in the same ratio as their bases. This is Book VI, Proposition 1 of Euclid’s Elements.

**How the definition helps.** By the definition it suffices to compare whole-number multiples (our own reading). At a fixed height, m copies of a base placed end to end give m times the triangle’s area. Equal bases at the same height give equal areas and a longer base gives a larger area, so each comparison of base multiples matches the comparison of area multiples.

**Wikipedia:** [Eudoxus of Cnidus](https://en.wikipedia.org/wiki/Eudoxus_of_Cnidus). It says: “This means that a/b = c/d if and only if the ratios n/m that are larger than a/b are the same as the ones that are larger than c/d, and likewise for "equal" and "smaller".”

**Paper or page:** [Areas of Triangles and Parallelograms Proportional to Base](https://proofwiki.org/wiki/Areas_of_Triangles_and_Parallelograms_Proportional_to_Base). It says: “Then: AC : CD = △ABC : △ACD = □EC : □CF”

**Sources:** none listed. No primary source with a working link was found.

### Halving from the orthocenter puts nine points on one circle

**Remember:** Halve the circumcircle toward the orthocenter to find all nine points.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 2: later undergraduate.

**Definition.** Let H be the orthocenter of a triangle, where its altitudes meet. The nine-point circle is the circumcircle shrunk by half toward H: the set of midpoints of HP for P on the circumcircle.

**Problem.** The nine-point circle contains the side midpoints, the altitude feet, and the midpoints from H to the vertices.

**How the definition helps.** Shrinking by half toward H maps the circumcircle to a circle, so each of the nine points needs only a matching circumcircle point (our own). The vertices give the midpoints from H; with the circumcentre at 0 and H = A + B + C, the point −A gives the midpoint of BC (our own). The reflection of H in each side lies on the circumcircle, and its midpoint with H is the altitude foot (our own).

**Paper or page:** [Nine Point Circle Theorem](https://proofwiki.org/wiki/Nine_Point_Circle_Theorem). It says: “The nine points consisting of the feet of the altitudes, the midpoints of the sides, and the midpoints of the segments from the vertices to the orthocenter all lie on a single circle.”

**Sources:** none listed. No primary source with a working link was found.

### Inverting at a vertex makes Ptolemy a triangle inequality

**Remember:** Invert at one vertex; the other three obey the triangle inequality.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 51B10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Inversion in the unit circle about A sends each point X ≠ A to the point X′ on ray AX with AX·AX′ = 1. It rescales distances by X′Y′ = XY/(AX·AY) (our own).

**Problem.** For four distinct plane points, AC × BD ≤ AB × CD + AD × BC. Equality holds exactly when C′ lies between B′ and D′.

**How the definition helps.** With this rescaling, the triangle inequality B′D′ ≤ B′C′ + C′D′ becomes Ptolemy’s inequality after multiplying by AB·AC·AD. The rescaling formula follows from similar triangles, or from signed reciprocals when X and Y lie on one line through A (our own). Equality holds exactly when C′ lies between B′ and D′.

**Wikipedia:** [Ptolemy's inequality](https://en.wikipedia.org/wiki/Ptolemy%27s_inequality). It says: “the triangle equality for these three points (from which Ptolemy's inequality may be derived) also becomes an equality.”

**Paper or page:** [Ptolemy's Theorem](https://proofwiki.org/wiki/Ptolemy's_Theorem). It says: “AB × CD + AD × BC = AC × BD”

**Sources:** none listed. No primary source with a working link was found.

### A continuity axiom is needed so Euclid's two circles meet

**Remember:** No gaps in the line, so circles cannot slip past each other.

*Rules out counterexamples.* MSC 51M05 (Euclidean geometries (general) and generalizations), 51F05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A line is Dedekind complete when every nonempty set of its coordinates that is bounded above has a least upper bound. Completeness fills gaps such as √3, where circles over the rational line could pass through each other without meeting (our own).

**Problem.** In a Euclidean plane with complete coordinate lines, the two circles in Euclid’s first proposition meet. An equilateral triangle exists on every nonzero segment.

**How the definition helps.** Completeness supplies √3, which the rational line lacks (our own example). With segment endpoints (0, 0) and (1, 0), the point (1/2, √3/2) lies at distance 1 from both, so the two circles meet there.

**Wikipedia:** [Euclidean geometry](https://en.wikipedia.org/wiki/Euclidean_geometry), [Hilbert's axioms](https://en.wikipedia.org/wiki/Hilbert%27s_axioms). It says: “His axioms, however, do not guarantee that the circles actually intersect, because they do not assert the geometrical property of continuity, which in Cartesian terms is equivalent to the completeness property of the real numbers.”

**Sources:**

- [D. Hilbert, Grundlagen der Geometrie, Teubner, Leipzig (1899); English translation The Foundations of Geometry by E. J. Townsend (1902)](https://archive.org/details/abr1237.0180.001.umich.edu)

### Allowing ideal vertices lets hyperbolic triangles reach the maximal area π

**Remember:** Push all three corners to infinity, and the area is exactly π.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries), 51M25. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Allow a vertex of a hyperbolic triangle to be an ideal point at infinity, where two sides are limiting parallel: they approach each other but never meet. The angle at an ideal vertex counts as zero.

**Problem.** In the hyperbolic plane of curvature −1, the area of a triangle with angles A,B,C is π−A−B−C, including triangles with ideal vertices. Three ideal vertices give the maximum area π.

**How the definition helps.** With zero angles allowed, the area π − A − B − C reaches its bound π when all three vertices are ideal (our own explanation). Ordinary triangles have positive angles, so their area stays below π. The area formula comes from the Gauss–Bonnet theorem.

**Wikipedia:** [Hyperbolic triangle](https://en.wikipedia.org/wiki/Hyperbolic_triangle). It says: “The definition of a triangle can be generalized, permitting vertices on the ideal boundary of the plane while keeping the sides within the plane.”

**Sources:** none listed. No primary source with a working link was found.

### Horizontal horocycles show why all horocycles are congruent

**Remember:** Send the base point to infinity, then scale the height.

*True by definition.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries). arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the upper half-plane, a horocycle based at a real boundary point is a Euclidean circle in the half-plane tangent to the real axis there, with the point of contact removed. A horocycle based at ∞ is a horizontal line.

**Problem.** Any two horocycles in the hyperbolic plane are congruent, meaning an isometry takes one to the other.

**How the definition helps.** An isometry that moves the base point to ∞ turns a horocycle into a horizontal line (our own). A dilation z ↦ λz with λ &gt; 0 then carries any horizontal line to any other. Both maps are real fractional linear maps with positive determinant, which are hyperbolic isometries (our own).

**Wikipedia:** [Horocycle](https://en.wikipedia.org/wiki/Horocycle). It says: “Any two horocycles are congruent, and can be superimposed by an isometry”

**Sources:** none listed. No primary source with a working link was found.

### Klein chord lines give infinitely many parallels through a point

**Remember:** Many chords through a point miss a given chord.

*True by definition.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries), 51M10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the Beltrami–Klein model, the points are the interior points of a Euclidean disk, and the lines are open chords, straight segments between two distinct boundary points. Two lines are parallel when their chords do not cross inside the disk.

**Problem.** Through a point off a given line, infinitely many lines miss the given line in the hyperbolic plane.

**How the definition helps.** In this model the claim is about straight segments in a disk (our own proof). The Euclidean parallel through the point misses the closed chord, and because the closed chord is compact, every nearby direction misses it too. The hard part is proving that the chord model is the hyperbolic plane.

**Wikipedia:** [Beltrami–Klein model](https://en.wikipedia.org/wiki/Beltrami%E2%80%93Klein_model). It says: “Many hyperbolic lines through point P not intersecting line a in the Beltrami–Klein model”

**Sources:**

- [Eugenio Beltrami, Teoria fondamentale degli spazii di curvatura costante, Annali di Matematica Pura ed Applicata 2 (1868)](https://doi.org/10.1007/BF02419615)

### Moving a boundary endpoint to infinity straightens hyperbolic geodesics

**Remember:** Send one end to infinity, and the arc becomes vertical.

*Makes the theorem clean to state or prove.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries), 51B10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the upper half-plane, take the arcs of generalized circles, meaning Euclidean circles or lines with ∞ added, that meet the boundary at right angles. An isometry that moves one endpoint to ∞ turns such an arc into a vertical line (our own).

**Problem.** The shortest paths in the Poincaré half-plane are segments of these arcs. They lie on semicircles centered on the boundary or on vertical lines.

**How the definition helps.** Real fractional linear maps with positive determinant preserve lengths and angles, so they reduce the claim to a vertical segment (our own). On a vertical line the segment is the unique shortest path, because every path costs at least the change in log height. Through two distinct points there is exactly one orthogonal arc, which finishes the proof (our own).

**Wikipedia:** [Poincaré half-plane model](https://en.wikipedia.org/wiki/Poincar%C3%A9_half-plane_model). It says: “Euclidean half-circles whose origin is on the x-axis”

**Sources:** none listed. No primary source with a working link was found.

### Proper spherical triangles keep sides and angles below π for polar duality

**Remember:** Choose short arcs, small angles, and poles facing the opposite vertices.

*Rules out counterexamples. Confidence: medium.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries), 51M10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** On the unit sphere, a proper triangle has three vertices not on one great circle, sides that are the shorter great-circle arcs, and interior angles below π. Its polar triangle has as vertices the poles of the three side circles, each on the same side as the opposite vertex.

**Problem.** For a proper spherical triangle, the perimeter lies strictly between 0 and 2π, and the angle sum lies strictly between π and 3π. Its polar is proper, with angles π−a, π−b, π−c and opposite sides π−A, π−B, π−C.

**How the definition helps.** The convention picks one triangle from the regions that three great circles cut out; for it the bounds hold, and its polar is again proper. So each identity for proper triangles gives a dual one by replacing A with π − a and a with π − A. Without the convention, the same three points bound triangles with a side longer than π, and the formulas need case changes (our own point).

**Wikipedia:** [Spherical trigonometry](https://en.wikipedia.org/wiki/Spherical_trigonometry). It says: “By convention, the sides of proper spherical triangles are less than π radians”

**Sources:**

- [I. Todhunter, Spherical Trigonometry, for the Use of Colleges and Schools, Macmillan (1878 edition)](https://archive.org/details/sphericaltrigon06todhgoog)

### Scaling every direction equally preserves angles in the Poincaré disk

**Remember:** The same stretch in every direction leaves angles unchanged.

*True by definition.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The Poincaré disk measures a tangent vector at z by its Euclidean length times 2/(1 − \|z\|²). The factor is the same in every direction at z, so it cancels from the angle between two vectors.

**Problem.** Two smooth curves meeting with nonzero tangent vectors in the Poincaré disk have the same hyperbolic and Euclidean angle.

**How the definition helps.** The hyperbolic inner product at z is the Euclidean one times a positive number, and that number cancels in the cosine formula for angles (our own). The work lies in proving that this disk models the hyperbolic plane (our own).

**Wikipedia:** [Beltrami–Klein model](https://en.wikipedia.org/wiki/Beltrami%E2%80%93Klein_model). It says: “This is in contrast to the Poincaré disk model, which is conformal.”

**Sources:** none listed. No primary source with a working link was found.

### The disk boundary gives exactly two limiting parallels

**Remember:** A chord has two ends, so a point has two limiting parallels.

*True by definition.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries). arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the Klein model, a line is an open chord of a disk, and its two boundary endpoints are ideal points. Two distinct lines are limiting parallel when they share an ideal endpoint.

**Problem.** Through a point off a hyperbolic line there are exactly two lines limiting parallel to it.

**How the definition helps.** A limiting parallel through the point must end at one of the line’s two endpoints, and joining the point to each endpoint gives exactly one chord (our own). The two chords are distinct because the point is off the line (our own). The work is checking that the chord model matches the intrinsic notion of limiting parallels (our own).

**Wikipedia:** [Beltrami–Klein model](https://en.wikipedia.org/wiki/Beltrami%E2%80%93Klein_model). It says: “Chords that meet on the boundary circle are limiting parallel lines.”

**Sources:** none listed. No primary source with a working link was found.

### The half-plane length rule makes vertical segments shortest

**Remember:** Changing height costs at least the change in its logarithm.

*True by definition.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries). arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the upper half-plane y &gt; 0, the length of a piecewise smooth path is the integral of its Euclidean arc length divided by its height, ∫\|dz\|/y. Since \|dz\| ≥ \|dy\|, every path is at least as long as the change of ln y along it (our own).

**Problem.** Between two points on a vertical line, the vertical segment is the unique shortest path, up to its parametrization. Its length is the absolute difference of the logarithms of their heights.

**How the definition helps.** The bound \|dz\| ≥ \|dy\| makes each path at least as long as the absolute change of ln y between its ends (our own). The vertical segment attains this bound. Equality forces a constant horizontal coordinate and monotone height, which gives uniqueness.

**Wikipedia:** [Poincaré half-plane model](https://en.wikipedia.org/wiki/Poincar%C3%A9_half-plane_model). It says: “straight Euclidean vertical rays”

**Sources:** none listed. No primary source with a working link was found.

### Identifying antipodal points makes two points determine one line

**Remember:** Glue opposite points, and great circles behave like lines.

*Makes the theorem clean to state or prove.* MSC 51M10 (Hyperbolic and elliptic geometries (general) and generalizations), 51M09. arXiv math.MG. Level 2: later undergraduate.

**Definition.** The elliptic plane is the sphere with each pair of antipodal (opposite) points glued into one point, and its lines are the great circles. Equivalently, its points are the lines through the sphere’s centre and its lines are the planes through the centre.

**Problem.** In the elliptic plane, any two distinct points lie on exactly one line, and any two distinct lines meet in exactly one point.

**How the definition helps.** Two distinct lines through the centre span exactly one plane, and two distinct planes through the centre meet in exactly one line (our own explanation). These are the two incidence statements.

**Wikipedia:** [Elliptic geometry](https://en.wikipedia.org/wiki/Elliptic_geometry). It says: “For example, the first and fourth of Euclid's postulates, that there is a unique line between any two points and that all right angles are equal, hold in elliptic geometry.”

**Sources:** none listed. No primary source with a working link was found.

### Archimedean solids need vertex-transitive symmetry to number thirteen

**Remember:** Corners must be swapped by symmetries, not merely look alike.

*Rules out counterexamples.* MSC 51M20 (Polyhedra and polytopes; regular figures, division of spaces), 52B15. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An Archimedean solid is a convex polyhedron with regular faces, other than the Platonic solids, prisms and antiprisms, whose symmetries carry any vertex to any other vertex (vertex-transitive). The same arrangement of faces at every vertex is not enough.

**Problem.** Up to similarity, there are exactly thirteen Archimedean solids.

**How the definition helps.** The global symmetry condition removes the elongated square gyrobicupola, which has one triangle and three squares at every vertex but is not vertex-transitive. With only the local condition, it would be a fourteenth solid. Grünbaum noted that many authors gave the local definition but listed only thirteen.

**Wikipedia:** [Archimedean solid](https://en.wikipedia.org/wiki/Archimedean_solid), [Elongated square gyrobicupola](https://en.wikipedia.org/wiki/Elongated_square_gyrobicupola). It says: “If only thirteen polyhedra are to be listed, the definition must use global symmetries of the polyhedron rather than local neighborhoods.”

**Sources:**

- [B. Grünbaum, An enduring error, Elemente der Mathematik 64 (2009) 89–101](https://doi.org/10.4171/EM/120)

### Affine combination operations make barycentres independent of an origin

**Remember:** Weighted combinations are basic operations, so no origin is ever chosen.

*True by definition.* MSC 51N10 (Affine analytic geometry), 08B99. arXiv math.MG, math.CT. Level 2: later undergraduate.

**Definition.** An affine space over a field is a nonempty set with an operation Cᵣ, the weighted combination of n points, for every list r of n ≥ 1 weights summing to 1. A unit weight vector returns its indexed point, and Cᵣ(Cₛ₁(x), …, Cₛₙ(x)) = Cₜ(x) with tⱼ = ∑ᵢ rᵢsᵢⱼ.

**Problem.** For any finite list of points and weights summing to 1, their weighted combination, or barycentre, is unique and needs no choice of origin.

**How the definition helps.** The barycentre is the value of the operation for the given weights, so no origin appears. In the definition by translations, o + ∑λᵢ(pᵢ − o) does not depend on o because the weights sum to 1 (our own comparison). The work in this definition is recovering the vector space of translations from the rules.

**nLab:** [affine space](https://ncatlab.org/nlab/show/affine+space). It says: “An affine space over the field k is an inhabited set A together with, for every natural number n ≥ 0 and every (n+1)-tuple (r₀,…,rₙ) of elements of k such that r₀ + ⋯ + rₙ = 1, a function”

**Paper or page:** [Barycenter Exists and is Well Defined](https://proofwiki.org/wiki/Barycenter_Exists_and_is_Well_Defined). It says: “Then the barycentre of p₁, …, pₙ with weights λ₁, …, λₙ exists and is unique.”

**Sources:** none listed. No primary source with a working link was found.

### Affine spaces as level sets give unique linear extensions

**Remember:** An affine map becomes linear when one extra coordinate carries the translation.

*True by definition.* MSC 51N10 (Affine analytic geometry), 15A04. arXiv math.MG, math.CT. Level 2: later undergraduate.

**Definition.** Take a vector space with a linear map onto its field k; the level set where this map equals 1 is an affine space. Affine maps are the restrictions of linear maps that preserve the value in k. For kⁿ, the space is kⁿ⁺¹ with the last coordinate, and kⁿ is the slice t = 1.

**Problem.** Every affine map from kⁿ to kᵐ extends uniquely to a linear map from kⁿ⁺¹ to kᵐ⁺¹ that preserves the last coordinate. Composition then uses ordinary matrix multiplication.

**How the definition helps.** The map (x, t) ↦ (Ax + tb, t) is linear, preserves the last coordinate and agrees with x ↦ Ax + b on t = 1 (our own). The slice t = 1 spans kⁿ⁺¹, so its values determine the extension. Composition of affine maps then becomes composition of linear maps, that is, matrix multiplication.

**nLab:** [affine space](https://ncatlab.org/nlab/show/affine+space). It says: “Note that this definition embeds the category Aff of (inhabited) affine spaces fully-faithfully in the slice category Vect/k.”

**Sources:** none listed. No primary source with a working link was found.

### Ellipses as affine circle images align parallel chord midpoints

**Remember:** Stretch the circle, and its diameter of midpoints stretches with it.

*True by definition.* MSC 51N10 (Affine analytic geometry), 51M04. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An ellipse is the image of the unit circle under an invertible affine map x ↦ Ax + b. Such maps preserve midpoints, lines and parallel directions.

**Problem.** The midpoints of all parallel chords in a given direction in an ellipse lie on a line through its centre.

**How the definition helps.** Affine maps preserve midpoints, lines and parallelism, so the circle result transfers to the ellipse. On a circle, reflection in the diameter perpendicular to the chords swaps the two ends of each chord, so their midpoints lie on that diameter. The harder step is showing that affine images of the circle are exactly the ellipses of the two-focus definition (our own comparison).

**Wikipedia:** [Ellipse](https://en.wikipedia.org/wiki/Ellipse). It says: “The midpoints of parallel chords lie on a diameter.”

**Paper or page:** [Locus of Midpoints of Parallel Chords of Central Conic passes through Center](https://proofwiki.org/wiki/Locus_of_Midpoints_of_Parallel_Chords_of_Central_Conic_passes_through_Center). It says: “Let 𝒟 be the locus of the midpoints of a system of parallel chords of 𝒦. Then 𝒟 passes through the center of 𝒦.”

**Sources:** none listed. No primary source with a working link was found.

### Ellipses as affine circle images give tangent parallelograms equal areas

**Remember:** Every tangent square of the circle stretches to area 4ab.

*True by definition.* MSC 51N10 (Affine analytic geometry), 51M25. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An ellipse with semi-axes a and b is the image of the unit circle under the stretch (x, y) ↦ (ax, by), up to a rigid motion. Two diameters are conjugate when each bisects the chords parallel to the other; they are the images of perpendicular diameters of the circle (our own).

**Problem.** The four tangents at the ends of any two conjugate diameters of an ellipse bound a parallelogram of area 4ab. Here a and b are the semi-axis lengths.

**How the definition helps.** The stretch multiplies all areas by ab (our own calculation). It preserves tangents, midpoints and parallelism, so conjugate diameters come from perpendicular circle diameters. Their four tangents bound a square of area 4, which becomes a parallelogram of area 4ab.

**Wikipedia:** [Ellipse](https://en.wikipedia.org/wiki/Ellipse). It says: “The parallelogram of tangents adjacent to the given conjugate diameters has the Area₁₂ = 4ab.”

**Sources:** none listed. No primary source with a working link was found.

### Three noncollinear points determine an affine transformation

**Remember:** The first point sets the origin, and the other two set the directions.

*Rules out counterexamples.* MSC 51N10 (Affine analytic geometry). arXiv math.MG. Level 2: later undergraduate.

**Definition.** An affine transformation of the real plane is a map x ↦ Mx + b with M an invertible linear map. An affine frame is an ordered triple of noncollinear points, so the two differences from its first point form a basis.

**Problem.** Exactly one affine transformation sends any given affine frame to any other affine frame.

**How the definition helps.** The first point fixes the translation and the two differences fix M on a basis, so the map exists and is unique (our own). If the points were collinear, every map (x, y) ↦ (x, ky) with k ≠ 0 would fix three points on the horizontal axis (our own).

**Wikipedia:** [Affine transformation](https://en.wikipedia.org/wiki/Affine_transformation). It says: “the composition of a linear transformation of X (viewed as a vector space) and a translation of X.”

**Sources:** none listed. No primary source with a working link was found.

### A basis and its sum determine a projective map

**Remember:** The sum fixes the relative scales of the three basis vectors.

*True by definition.* MSC 51N15 (Projective analytic geometry), 51A05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the real projective plane, a point is a nonzero vector up to scaling, and an invertible linear map induces a projective map. An ordered projective frame is the points of three basis vectors followed by the point of their sum. The sum fixes the relative scales of the three basis vectors.

**Problem.** Exactly one projective map takes one ordered frame to another. Equivalently, two ordered sets of four points with no three collinear determine one such map.

**How the definition helps.** The linear map sending one basis to the other also sends sum to sum, which gives existence (our own). A map fixing the three basis points can rescale each basis vector, but fixing their sum forces one common scale, which fixes every point. For four points with no three collinear, the fourth has three nonzero coefficients, which can be absorbed into the basis vectors (our own).

**nLab:** [projective frame](https://ncatlab.org/nlab/show/projective+frame). It says: “and such that p₀ = p(e₁+…+eₙ₊₁).”

**Sources:** none listed. No primary source with a working link was found.

### An invertible conic matrix gives each point one tangent

**Remember:** Invertible Q makes Qp nonzero, so the tangent is one line.

*Rules out counterexamples.* MSC 51N15 (Projective analytic geometry), 51N35. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A real projective conic is pᵀQp = 0 in homogeneous coordinates with Q symmetric, and it is nondegenerate when Q is invertible. A tangent at a conic point p is a line through p on which the restricted equation has a double root at p.

**Problem.** Every point p of a nondegenerate real projective conic has just one tangent, given by pᵀQx = 0.

**How the definition helps.** On the line through p in direction v, the equation becomes 2t·pᵀQv + t²·vᵀQv = 0, so t = 0 is a double root exactly when pᵀQv = 0, and the equation is not identically zero since a nondegenerate conic contains no line (our own). Invertibility makes Qp nonzero, so pᵀQx = 0 is exactly one line. For the degenerate conic xy = 0, every line through the crossing point gives a double root there (our own).

**nLab:** [conic section](https://ncatlab.org/nlab/show/conic+section). It says: “the projective dual of p on C is its tangent line”

**Sources:** none listed. No primary source with a working link was found.

### In the projective plane, ellipse, parabola and hyperbola are one curve

**Remember:** Ellipse misses infinity, parabola touches it, hyperbola crosses it.

*Makes the theorem clean to state or prove.* MSC 51N15 (Projective analytic geometry), 14H50. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** A real nondegenerate conic is the set of projective points \[x\] with xᵀQx = 0, for a fixed invertible symmetric real matrix Q, provided this set is nonempty. Then Q has two eigenvalues of one sign and one of the other (our own).

**Problem.** A projective transformation carries any non-degenerate conic in the real projective plane to any other. Once a line at infinity is chosen, the conic is an ellipse, parabola or hyperbola as it misses, touches or crosses that line.

**How the definition helps.** Sylvester’s law of inertia brings every such Q, up to sign, to diag(1, 1, −1), so a projective map carries any of these conics to any other. The affine type then depends only on whether the conic misses, touches or crosses the chosen line at infinity (our own explanation).

**Wikipedia:** [Conic section](https://en.wikipedia.org/wiki/Conic_section). It says: “By extending the Euclidean plane to include a line at infinity, obtaining a projective plane, the apparent difference vanishes”

**Sources:** none listed. No primary source with a working link was found.

### Preserving the line at infinity characterizes affine transformations

**Remember:** Preserve the line at infinity and the remaining coordinates transform affinely.

*True by definition.* MSC 51N15 (Projective analytic geometry), 51N10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Real projective points are nonzero triples up to scaling; the affine plane is the points \[x:y:1\] and the line at infinity is the points \[x:y:0\]. A projective transformation is given by an invertible 3 × 3 matrix.

**Problem.** A real projective transformation preserves the line at infinity exactly when it restricts to an invertible affine map on the remaining points. Every invertible affine map arises this way.

**How the definition helps.** A matrix preserves the line at infinity exactly when its last row is (0, 0, c) with c ≠ 0 (our own). Dividing by c, it sends \[x:y:1\] to \[Ax + b : 1\], an invertible affine map (our own). Conversely, the block matrix with rows (A \| b) and (0 0 1) extends any invertible affine map (our own).

**Wikipedia:** [Affine transformation](https://en.wikipedia.org/wiki/Affine_transformation). It says: “the projective transformations of that projective space that leave the hyperplane at infinity invariant”

**Sources:** none listed. No primary source with a working link was found.

### Projective lines defined by subspaces always meet in a plane

**Remember:** Two distinct planes through the origin of k³ share exactly one line.

*True by definition.* MSC 51N15 (Projective analytic geometry), 51A05. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** In the projective plane over a field k, points are the one-dimensional subspaces of k³ and lines are the two-dimensional subspaces, and a point lies on a line when it is contained in it.

**Problem.** Any two distinct lines of a projective plane over a field meet in exactly one point.

**How the definition helps.** Two distinct two-dimensional subspaces span k³, so by the dimension formula their intersection has dimension 2 + 2 − 3 = 1 (our own proof). That intersection is exactly one projective point.

**Wikipedia:** [Projective space](https://en.wikipedia.org/wiki/Projective_space). It says: “For example, in affine geometry, two distinct lines in a plane intersect in at most one point, while, in projective geometry, they intersect in exactly one point.”

**Sources:** none listed. No primary source with a working link was found.

### Symmetric matrix polars make La Hire’s theorem a symmetry

**Remember:** Switching the two vectors does not change the symmetric form.

*True by definition.* MSC 51N15 (Projective analytic geometry), 51A50. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** Represent each real projective point by a nonzero vector up to scaling. For a conic xᵀMx = 0 with M symmetric and invertible, the polar of \[p\] is the line of points \[x\] with pᵀMx = 0.

**Problem.** La Hire’s theorem says that P lies on the polar of Q exactly when Q lies on the polar of P.

**How the definition helps.** The two incidences say qᵀMp = 0 and pᵀMq = 0, which are the same equation because M is symmetric (our own proof). The work is matching this polar with the tangent construction: the tangent at a conic point t is tᵀMx = 0, so it passes through p exactly when t lies on the polar of p.

**Wikipedia:** [Pole and polar](https://en.wikipedia.org/wiki/Pole_and_polar). It says: “If a point P lies on the polar of a point Q, then Q lies on the polar of P. (La Hire's theorem)”

**Paper or page:** [Reciprocal Property of Pole and Polar](https://proofwiki.org/wiki/Reciprocal_Property_of_Pole_and_Polar). It says: “if P lies on the polar of Q, then Q lies on the polar of P”

**Sources:** none listed. No primary source with a working link was found.

### The cross-ratio classifies four points on a projective line

**Remember:** Fix three points and read off the fourth.

*True by definition.* MSC 51N15 (Projective analytic geometry). arXiv math.MG. Level 2: later undergraduate.

**Definition.** On a real projective line, send the first three of four distinct points to ∞, 0 and 1 by the unique projective map that does so. The cross-ratio is the point where the fourth lands.

**Problem.** Two ordered quadruples of distinct points have equal cross-ratios exactly when a projective map matches them point for point.

**How the definition helps.** If two quadruples have the same cross-ratio, the first normalizing map followed by the inverse of the second matches them point for point (our own). Conversely, if a projective map M matches them, the second normalizing map composed with M normalizes the first quadruple, so by uniqueness both fourth points land at the same place. The work lies in proving that the three-point map exists and is unique (our own).

**Wikipedia:** [Projective frame](https://en.wikipedia.org/wiki/Projective_frame). It says: “In the case of a projective line, a frame consists of three distinct points.”

**Sources:** none listed. No primary source with a working link was found.

### The inverse conic matrix describes all its tangents

**Remember:** Read a line’s coefficients as the coordinates of its dual point.

*Makes the theorem clean to state or prove.* MSC 51N15 (Projective analytic geometry), 51N35. arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the dual projective plane, the line ℓᵀx = 0 is the point represented by its coefficient vector ℓ, up to a nonzero scalar. For a conic pᵀQp = 0, the tangent at p has coefficient vector Qp (our own).

**Problem.** For a real conic pᵀQp = 0 with Q symmetric and invertible, its tangent lines form the dual conic ℓᵀQ⁻¹ℓ = 0.

**How the definition helps.** Writing ℓ = Qp gives p = Q⁻¹ℓ, and pᵀQp = 0 becomes ℓᵀQ⁻¹ℓ = 0 (our own). Conversely, each solution ℓ gives the conic point Q⁻¹ℓ, whose tangent has coefficients ℓ. The tangent formula comes from expanding the quadratic along a line through p (our own).

**Wikipedia:** [Conic section](https://en.wikipedia.org/wiki/Conic_section). It says: “Such an envelope is called a line conic (or dual conic).”

**Sources:** none listed. No primary source with a working link was found.

### The tangent completes projection from a point on a conic

**Remember:** Count the tangent as the secant whose two points coincide.

*Makes the theorem clean to state or prove.* MSC 51N15 (Projective analytic geometry). arXiv math.MG. Level 2: later undergraduate.

**Definition.** On a nondegenerate real projective conic, fix a point P. Send each other point Q to the line PQ, and send P to the tangent at P, the line that meets the conic at P twice.

**Problem.** This projection is a bijection from the conic to the lines through P.

**How the definition helps.** Each line through P meets the conic in one further point, counted as P itself for the tangent, so the map is a bijection (our own). On such a line the conic’s equation is a quadratic with the known root P, not identically zero because a nondegenerate conic contains no line, so it has exactly one other root (our own). Without the tangent, the projection would miss one line (our own).

**nLab:** [conic section](https://ncatlab.org/nlab/show/conic+section). It says: “the unique line L(p, q) incident to p and q intersects L in exactly one point”

**Sources:** none listed. No primary source with a working link was found.

### When do the three diagonal points lie on one line?

**Remember:** Pair up four points; the two joining lines cross diagonally.

*True by definition.* MSC 51N15 (Projective analytic geometry), 51A05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Take four points in a projective plane over a field, no three on a line, split them into two pairs, and join each pair by a line; the two lines meet at a diagonal point. With the points placed at (1,0,0), (0,1,0), (0,0,1) and (1,1,1), the three diagonal points are (1,1,0), (1,0,1) and (0,1,1) (our own).

**Problem.** The three diagonal points lie on one line exactly when 1 + 1 = 0 in the field.

**How the definition helps.** The three diagonal points lie on one line exactly when the determinant of (1,1,0), (1,0,1) and (0,1,1) vanishes, and that determinant is −2 (our own). A projective transformation moves any four points with no three on a line to these coordinates (our own). So collinearity happens exactly when 2 = 0, as in the seven-point Fano plane.

**nLab:** [projective plane](https://ncatlab.org/nlab/show/projective+plane). It says: “It satisfies Fano's axiom iff the characteristic of F is ≠ 2.”

**Sources:** none listed. No primary source with a working link was found.

### Quadratic equations put any five points on a projective conic

**Remember:** Six coefficients up to scale, five points, one conic.

*True by definition.* MSC 51N35 (Questions of classical algebraic geometry), 51N15, 14N05. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** A projective conic is the zero set of a nonzero homogeneous quadratic ax² + by² + cz² + dxy + exz + fyz, so it has six coefficients up to scale. Degenerate conics, such as pairs of lines, are allowed.

**Problem.** Any five distinct points of the real projective plane lie on a conic. When no three are collinear, the conic is unique and nonsingular.

**How the definition helps.** Each point on the conic gives one linear equation in the six coefficients, so five points leave a nonzero solution (our own). When no three points are collinear, for each point a pair of lines through the other four misses it, so the five conditions are independent and the conic is unique up to scale. A singular real conic lies in at most two lines, which cannot hold five points with no three collinear.

**Wikipedia:** [Five points determine a conic](https://en.wikipedia.org/wiki/Five_points_determine_a_conic). It says: “Indeed, given any five points there is a conic passing through them, but if three of the points are collinear the conic will be degenerate (reducible, because it contains a line), and may not be unique”

**Sources:** none listed. No primary source with a working link was found.

### Holomorphicity excludes projective field twists

**Remember:** Holomorphic maps cannot conjugate coordinates, so only the linear part remains.

*Rules out counterexamples.* MSC 51A10 (Homomorphism, automorphism and dualities in linear incidence geometry). arXiv math.CV. Level 3: graduate.

**Definition.** A holomorphic collineation of complex projective space is a bijection that sends lines to lines and is complex differentiable in local coordinates, as complex conjugation is not. A homography is a map induced by an invertible complex-linear map.

**Problem.** Every holomorphic collineation of complex projective space of dimension at least two is a homography.

**How the definition helps.** The fundamental theorem of projective geometry writes a collineation, in dimension at least two, as a homography composed with a field automorphism applied to each coordinate. Holomorphicity makes that automorphism a holomorphic function on a coordinate line that fixes the rationals, so the identity theorem makes it the identity (our own proof). Complex conjugation of coordinates is a collineation that is not a homography (our own).

**Wikipedia:** [Homography](https://en.wikipedia.org/wiki/Homography). It says: “the composition of an automorphic collineation and a homography”

**Sources:** none listed. No primary source with a working link was found.

### Hermitian forms make Möbius maps preserve generalized circles

**Remember:** A circle is a Hermitian form with negative determinant.

*True by definition.* MSC 51B10 (Möbius geometries), 30C20. arXiv math.CV, math.MG. Level 3: graduate.

**Definition.** Write points of the Riemann sphere as nonzero vectors w in ℂ² up to scaling, on which Möbius maps act by invertible 2×2 matrices. A generalized circle is the set where w\*Hw = 0, for a Hermitian matrix H, one equal to its conjugate transpose H\*, with det H &lt; 0.

**Problem.** A Möbius map sends every generalized circle to a generalized circle.

**How the definition helps.** Substituting w = Gv, with G the inverse Möbius matrix, gives v\*(G\*HG)v = 0, and G\*HG is again Hermitian (our own calculation). Its determinant is \|det G\|² det H, so it stays negative. Completing the square shows that these zero sets are exactly the circles and the lines completed by ∞.

**Wikipedia:** [Generalised circle](https://en.wikipedia.org/wiki/Generalised_circle). It says: “apply the inverse of the Möbius transformation 𝔊 = ℌ⁻¹ to the vector z in the implicit equation”

**Sources:** none listed. No primary source with a working link was found.

### Thickness excludes finite generalized pentagons

**Remember:** Three lines on every point, three points on every line.

*Rules out counterexamples.* MSC 51E12 (Generalized quadrangles and generalized polygons in finite geometry). arXiv math.CO. Level 3: graduate.

**Definition.** A generalized n-gon is a geometry of points and lines whose incidence graph, joining each point to the lines through it, has diameter n and shortest cycle length 2n. It is thick if every point lies on at least three lines and every line has at least three points.

**Problem.** A finite thick generalized n-gon can exist only for n equal to 2, 3, 4, 6 or 8.

**How the definition helps.** Thickness removes the ordinary n-gons, which are generalized n-gons for every n ≥ 3 with two lines on each point and two points on each line (our own example). For thick finite ones, the Feit–Higman theorem, an eigenvalue argument on the incidence graph, leaves only n = 2, 3, 4, 6 or 8.

**Wikipedia:** [Generalized polygon](https://en.wikipedia.org/wiki/Generalized_polygon). It says: “s ≥ 2, t ≥ 2 can exist only for the following values of n: 2, 3, 4, 6 or 8.”

**Sources:**

- [Walter Feit and Graham Higman, The nonexistence of certain generalized polygons (1964)](https://doi.org/10.1016/0021-8693(64)90028-6)

### Weyl distances measure shortest galleries

**Remember:** Each gallery step changes the Weyl distance by one generator at most.

*True by definition.* MSC 51E24 (Buildings and the geometry of diagrams). arXiv math.GR. Level 3: graduate.

**Definition.** A Weyl distance gives each pair of chambers A, B an element δ(A,B) of a Coxeter group (W,S) with word length ℓ, equal to 1 exactly when A = B. Stepping from A to an s-neighbor C, one with δ(A,C) = s, turns w = δ(A,B) into δ(C,B) = w or sw, and into sw if ℓ(sw) &gt; ℓ(w). For all A, B and s ∈ S, some s-neighbor C of A has δ(C,B) = sw.

**Problem.** The shortest gallery length is the word length of the Weyl distance. Every reduced expression, meaning a shortest generator word, is realized by a gallery.

**How the definition helps.** One step changes δ by at most one generator, so its word length changes by at most one and a gallery from A to B needs at least ℓ(δ(A,B)) steps (our own proof). For a reduced word w = s₁⋯s<sub>k</sub>, the existence axiom gives an s₁-neighbor C with δ(C,B) = s₁w = s₂⋯s<sub>k</sub>. Repeating until the distance is 1 reaches B along a gallery of type s₁⋯s<sub>k</sub>.

**nLab:** [building](https://ncatlab.org/nlab/show/building). It says: “If in addition l<sub>S</sub>(sw) = l<sub>S</sub>(w) + 1, then δ(C, B) = sw.”

**Sources:**

- [Jacques Tits, Twin buildings and groups of Kac-Moody type (1992)](https://doi.org/10.1017/cbo9780511629259.023)

### Cone order makes maps nonexpansive

**Remember:** Squeeze v between two multiples of w; their ratio's log is distance.

*True by definition.* MSC 51F30 (Lipschitz and coarse geometry of metric spaces). arXiv math.MG. Level 3: graduate.

**Definition.** Let K be a closed convex cone with nonempty interior in a finite-dimensional real space, pointed so that K and −K meet only at zero, and write v ≤ w when w − v ∈ K. For interior vectors v, w, the Hilbert distance is log(M/m), where M is the least and m the greatest number with mw ≤ v ≤ Mw.

**Problem.** A linear map that sends one such cone into another, and interior to interior, does not increase Hilbert distance.

**How the definition helps.** A linear map T with T(K) ⊆ K′ keeps every inequality, so mw ≤ v ≤ Mw gives mTw ≤ Tv ≤ MTw (our own proof). The best constants for Tv and Tw are therefore at least as tight, and log(M/m) can only shrink. The geometric work is identifying this formula with the cross-ratio distance on a bounded slice of the cone.

**Wikipedia:** [Hilbert metric](https://en.wikipedia.org/wiki/Hilbert_metric). It says: “M(v/w) = inf{λ : v ≤ₖ λw}, m(v/w) = sup{μ : μw ≤ₖ v}.”

**Sources:** none listed. No primary source with a working link was found.

### Defining tight spans by minimal functions makes self-maps fixing X the identity

**Remember:** Every value is as small as the triangle inequality allows.

*True by definition. Confidence: medium.* MSC 51F30 (Lipschitz and coarse geometry of metric spaces), 54E35. arXiv math.MG. Level 3: graduate.

**Definition.** The tight span of a metric space (X,d) consists of the pointwise minimal functions f on X with f(x) + f(y) ≥ d(x,y) for all x, y, so no value can be lowered without breaking an inequality. It carries the supremum distance, and each x ∈ X embeds as the function d(x,·).

**Problem.** A short map, one that does not increase distances, from the tight span to itself that fixes each point of X is the identity.

**How the definition helps.** The distance from f to the embedded point x is f(x) (our own argument). So a short map that fixes X sends f to a function g in the tight span with g(x) ≤ f(x) for every x. Minimality of f forces g = f (our own).

**Wikipedia:** [Tight span](https://en.wikipedia.org/wiki/Tight_span). It says: “none of these distances can be reduced without violating the triangle inequality.”

**Sources:** none listed. No primary source with a working link was found.

### Quasi-isometry lets a group be compared with the space it acts on

**Remember:** From far away, a group looks like the space it tiles.

*Makes the theorem clean to state or prove.* MSC 51F30 (Lipschitz and coarse geometry of metric spaces), 20F65. arXiv math.MG, math.GR. Level 3: graduate.

**Definition.** A quasi-isometry is a map f between metric spaces that keeps distances within a fixed factor A ≥ 1 and additive error B ≥ 0: d(x,y)/A − B ≤ d(f(x),f(y)) ≤ A·d(x,y) + B. Also every target point lies within B of the image.

**Problem.** Švarc–Milnor lemma: let G act by isometries on a proper geodesic space X, properly discontinuously and with compact quotient. Then G is finitely generated and quasi-isometric to X.

**How the definition helps.** Because only bounded errors are allowed, the orbit map g ↦ g·x₀ can match a word metric on G with distances in X (our own). Compact quotient puts every point of X within bounded distance of the orbit. The Švarc–Milnor lemma supplies finite generation and both distance bounds.

**Wikipedia:** [Quasi-isometry](https://en.wikipedia.org/wiki/Quasi-isometry), [Hyperbolic group](https://en.wikipedia.org/wiki/Hyperbolic_group). It says: “More generally, the Švarc–Milnor lemma states that if a group G acts properly discontinuously with compact quotient on a proper geodesic space X then G is quasi-isometric to X (meaning that any Cayley graph for G is).”

**Sources:**

- [J. Milnor, A note on curvature and fundamental group, Journal of Differential Geometry 2 (1968) 1–7](https://doi.org/10.4310/jdg/1214501132)

### Flat comparisons force inner products

**Remember:** Triangles no fatter than flat ones force the parallelogram law.

*Makes the theorem clean to state or prove.* MSC 51F99 (Metric geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A geodesic metric space is CAT(0) if its triangles are no fatter than Euclidean ones. For any two points on the sides of a geodesic triangle, their distance is at most that between the matching points of a Euclidean triangle with the same side lengths.

**Problem.** If a real normed vector space with its norm distance is CAT(0), its norm comes from an inner product.

**How the definition helps.** Comparing the midpoint of \[x, y\] with the vertex 0 gives ‖x+y‖² + ‖x−y‖² ≤ 2‖x‖² + 2‖y‖² (our own proof). Applying this to x+y and x−y gives the reverse inequality. The resulting parallelogram law gives an inner product by the Jordan–von Neumann theorem.

**Wikipedia:** [CAT(k) space](https://en.wikipedia.org/wiki/CAT%28k%29_space). It says: “if a real normed vector space is a CAT(k) space for some real k, then it is an inner product space.”

**Sources:**

- [P. Jordan and J. von Neumann, On Inner Products in Linear, Metric Spaces (1935)](https://doi.org/10.2307/1968653)

### Hyperconvexity aligns Čech and Rips

**Remember:** Balls close enough in pairs share one common point.

*Rules out counterexamples.* MSC 51F99 (Metric geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A metric space is hyperconvex if any family of closed balls has a common point whenever their centers and radii satisfy d(xᵢ,xⱼ) ≤ rᵢ + rⱼ for every pair. At scale r, sites span a Rips face if their pairwise distances are at most r, and a Čech face if their closed balls of radius r/2 share a point.

**Problem.** At every scale r ≥ 0, any finite set of sites in a hyperconvex space has identical Rips and Čech complexes.

**How the definition helps.** For a Rips face the balls of radius r/2 satisfy the pairwise condition, so hyperconvexity gives a common point and a Čech face. Conversely, a common point lies within r/2 of each site, so the triangle inequality bounds pairwise distances by r (our own). In the Euclidean plane an equilateral triangle of side r &gt; 0 spans a Rips face but no Čech face.

**Paper or page:** [Geometry of Data](https://arxiv.org/abs/2203.07208v1). It says: “In a hyperconvex space, all simplices that are filled in the Vietoris-Rips complex are also filled in the Čech complex.”

**Sources:**

- [Geometry of Data, Lemma 5.1](https://arxiv.org/abs/2203.07208v1)
- [N. Aronszajn and P. Panitchpakdi, Extension of uniformly continuous transformations and hyperconvex metric spaces (1956)](https://doi.org/10.2140/pjm.1956.6.405)

### Local compactness saves shortest paths

**Remember:** Compactness keeps a minimizing sequence from escaping.

*Rules out counterexamples.* MSC 51F99 (Metric geometry). arXiv math.MG. Level 3: graduate.

**Definition.** In a length space, the distance between two points is the infimum of the lengths of paths joining them. It is locally compact if each point has a compact neighborhood, which together with completeness makes closed balls compact, by the metric Hopf–Rinow theorem.

**Problem.** Every pair of points in a complete, locally compact length space has a shortest path.

**How the definition helps.** Nearly shortest paths between two points stay in a compact closed ball, so by Arzelà–Ascoli a subsequence converges to a path of minimal length (our own explanation). Without local compactness, join two points by edges of lengths 1 + 1/n for every n ≥ 1 (our own example). This space is complete and the points are at distance 1, but every joining path is longer.

**Paper or page:** [A Gentle Introduction to CAT(0) Spaces](https://arxiv.org/abs/2406.09883v1). It says: “If (X,d) is complete and locally compact, then”

**Sources:** none listed. No primary source with a working link was found.

### Simple connectedness excludes flat cylinders

**Remember:** With no loops to wrap around, local comparison becomes global.

*Rules out counterexamples.* MSC 51F99 (Metric geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A CAT(0) space is a geodesic space whose triangles are no fatter than Euclidean triangles with the same side lengths. It is locally CAT(0) if this comparison holds in a neighborhood of each point, and simply connected if it is path connected and every loop contracts to a point.

**Problem.** A complete, simply connected, locally CAT(0) length space is CAT(0) everywhere.

**How the definition helps.** Simple connectedness makes the space its own universal cover, which is CAT(0) by the metric Cartan–Hadamard theorem. A flat cylinder is locally CAT(0) but opposite points on a circular cross section have two shortest paths (our own example). CAT(0) spaces have unique shortest paths, so the cylinder is not CAT(0).

**Paper or page:** [A Gentle Introduction to CAT(0) Spaces](https://arxiv.org/abs/2406.09883v1). It says: “then (X̃,d̃) is a (globally) CAT(0) space.”

**Sources:** none listed. No primary source with a working link was found.

### Correspondences control diameters

**Remember:** Paired distances differ little, so the largest ones do too.

*True by definition.* MSC 51K05 (General theory of distance geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A correspondence between compact metric spaces X and Y pairs every point of each space with at least one point of the other. Its distortion is the supremum of \|d(x,x′) − d(y,y′)\| over paired couples (x,y) and (x′,y′). The Gromov–Hausdorff distance is half the infimum of distortions.

**Problem.** The diameters of two nonempty compact metric spaces differ by at most twice their Gromov–Hausdorff distance.

**How the definition helps.** Each distance in one space is paired with a distance in the other that differs by at most the distortion, so the diameters differ by at most the distortion (our own proof). Taking the infimum over correspondences gives twice the Gromov–Hausdorff distance. This uses the standard fact that the correspondence formula agrees with the definition by embeddings.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “in fact, diam Xₖ → diam Y”

**Sources:** none listed. No primary source with a working link was found.

### Uniform covers give convergent subsequences

**Remember:** One diameter bound and one ball count serve every member.

*Rules out counterexamples.* MSC 51K05 (General theory of distance geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A family of metric spaces is uniformly totally bounded if all their diameters are at most one number D and, for each ε &gt; 0, one number N(ε) of ε-balls suffices to cover every member.

**Problem.** A uniformly totally bounded family of nonempty compact metric spaces has compact closure for Gromov–Hausdorff distance.

**How the definition helps.** The ball centers approximate every member within ε by at most N(ε) points, so the family is totally bounded for Gromov–Hausdorff distance (our own explanation). That space is complete, so the closure is compact, which is Gromov's compactness theorem. Without a uniform count, finite spaces with all distances one have bounded diameter but no convergent subsequence as their sizes grow (our own example).

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “There is a number D ≥ 0 and a function N : (0,∞) → ℕ such that for all X ∈ 𝒞 we have diam X ≤ D and cov(X,ε) ≤ N(ε).”

**Sources:** none listed. No primary source with a working link was found.

### Stating geometry in first-order logic makes it decidable

**Remember:** Quantify over points and use only betweenness and equal distances.

*Makes the theorem clean to state or prove.* MSC 51M05 (Euclidean geometries (general) and generalizations), 03C10, 03B25. arXiv math.LO, math.MG. Level 3: graduate.

**Definition.** Tarski's elementary Euclidean geometry is the first-order theory of points with only two basic relations, betweenness and equal distance. Its continuity axiom is a schema about first-order definable sets only, so each statement becomes a first-order statement about an ordered field (our own).

**Problem.** Tarski's elementary Euclidean geometry is consistent, complete and decidable. An algorithm decides, for every statement, whether it is provable or refutable.

**How the definition helps.** Coordinates turn each statement into a first-order statement about real closed fields, which quantifier elimination decides (our own explanation). The real plane is a model, which gives consistency. Tarski's coordinatization shows that every model is a plane over a real closed field, which gives completeness.

**Wikipedia:** [Tarski's axioms](https://en.wikipedia.org/wiki/Tarski%27s_axioms). It says: “Using his axiom system, Tarski was able to show that the first-order theory of Euclidean geometry is consistent, complete and decidable”

**Sources:**

- [A. Tarski and S. Givant, Tarski's system of geometry, Bulletin of Symbolic Logic 5 (1999) 175–214](https://doi.org/10.2307/421089)

### Defining distance by the Minkowski form makes Lorentz maps isometries

**Remember:** Any map that preserves the Minkowski form preserves the distance it defines.

*True by definition.* MSC 51M10 (Hyperbolic and elliptic geometries (general) and generalizations), 22E43. arXiv math.MG, math.DG. Level 3: graduate.

**Definition.** Hyperbolic space is the sheet B(x,x) = −1 with x₀ &gt; 0, for the Minkowski form B(u,v) = −u₀v₀ + u₁v₁ + ⋯ + uₙvₙ on ℝⁿ⁺¹. Its distance is d(u,v) = arcosh(−B(u,v)), so it is computed from B alone.

**Problem.** Every linear map that preserves B and the chosen sheet preserves all hyperbolic distances on that sheet.

**How the definition helps.** A linear map that preserves B and the sheet preserves −B(u,v), and hence its arcosh. Defining distance by shortest paths would instead require proving this formula and identifying the metric as the one of curvature −1 (our own comparison).

**Wikipedia:** [Hyperboloid model](https://en.wikipedia.org/wiki/Hyperboloid_model). It says: “which acts on S⁺ by linear automorphisms and preserves the hyperbolic distance.”

**Sources:** none listed. No primary source with a working link was found.

### Buekenhout's projective lines take the central collineations as given data

**Remember:** A bare line has no structure, so its symmetries are data.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51M35. arXiv math.MG. Level 4: research.

**Definition.** A projective line in Buekenhout's sense is a set ℓ with a given permutation group Λ(p,q) of ℓ for each pair of points p, q. It is Desarguesian if each Λ(p,q) is transitive on the points other than p and q.

**Problem.** Every Desarguesian projective line in Buekenhout's sense comes from a division ring. So it embeds in a Desarguesian projective plane.

**How the definition helps.** Because the symmetries are given as data, the Desarguesian condition is a transitivity statement on the line itself (our own explanation). Buekenhout's coordinatization theorem builds the division ring from these groups. The line over a division ring embeds in the projective plane over it.

**nLab:** [projective line](https://ncatlab.org/nlab/show/projective+line). It says: “Conversely, every Desarguesian projective line arises from a division ring in this way.”

**Sources:**

- [Francis Buekenhout, Foundations of one dimensional projective geometry based on perspectivities, Abh. Math. Sem. Univ. Hamburg 43 (1975) 21–29](https://doi.org/10.1007/BF02995931)

### Coarse amenability at infinity of box spaces characterizes coarsely amenable groups

**Remember:** Far out, every bounded patch carries slowly varying local averages.

*Makes the theorem clean to state or prove.* MSC 51F30 (Lipschitz and coarse geometry of metric spaces), 20F69, 20E26. arXiv math.GR, math.MG. Level 4: research.

**Definition.** A space is coarsely amenable at infinity if, far out, every bounded region carries slowly varying local probability measures. Precisely, for all R, ε &gt; 0 there is S &gt; 0 such that, for each L &gt; 0, there is a finite set K for which every finite subset outside K of diameter ≤ L carries probability measures μₓ on it, one per point x. Each μₓ is supported within S of x, and ‖μₓ − μᵧ‖₁ ≤ ε whenever d(x,y) ≤ R.

**Problem.** Let G be finitely generated and residually finite, meaning its finite quotients separate its elements. Then G is coarsely amenable exactly when one box space, or equivalently every box space, is coarsely amenable at infinity.

**How the definition helps.** Far out in a box space, each bounded region is isometric to a region of the group, so local estimates move between them (our own explanation). The finite exceptional set may depend on L, which absorbs the small quotients where this fails. The box-space characterization theorem carries the estimates in both directions.

**Paper or page:** [Coarse amenability at infinity](https://arxiv.org/abs/1812.11745v1). It says: “All (or equivalently one) box spaces of G are coarsely amenable at infinity.”

**Sources:**

- [Thibault Pillon, Coarse amenability at infinity, arXiv:1812.11745v1 (2018)](https://arxiv.org/abs/1812.11745v1)

### Equilateral comparisons detect diameter partitions

**Remember:** Points sharing a label must fit in one small piece.

*Makes the theorem clean to state or prove.* MSC 51K05 (General theory of distance geometry), 52A37. arXiv math.MG. Level 4: research.

**Definition.** A correspondence pairs points of two spaces so that every point has a partner, its distortion is the largest change in pairwise distance, and Gromov–Hausdorff distance is half the least distortion. Let E be the m-point space with all distances equal to λ. A correspondence between X and E labels each point of X with one or more of m labels and uses every label.

**Problem.** Let X have finite diameter D and at least m points, with m ≥ 2 and 0 &lt; λ &lt; D, and let E be the m-point space with all distances λ. Then X partitions into m pieces of diameter below D exactly when its Gromov–Hausdorff distance to E is below D/2.

**How the definition helps.** Two points with a common label have distance at most the distortion, so distortion below D gives each label's set of points diameter below D (our own proof). Give each point one label, discard empty pieces, and split pieces until there are m, which \|X\| ≥ m allows; conversely, label each point by its piece. Errors within a piece stay below D, and errors between pieces are at most max(λ, D − λ) &lt; D.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “then X can be partitioned into m subsets having strictly smaller diameters if and only if”

**Sources:** none listed. No primary source with a working link was found.

### Densities make Euler's formula hold for star polyhedra

**Remember:** Count each pentagram twice, because it winds around twice.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51M20 (Polyhedra and polytopes; regular figures, division of spaces), 55M25. arXiv math.MG. Level 4: research.

**Definition.** The density of a face or vertex figure of a regular polyhedron is how many times it winds around its center; a pentagram has density 2. The density of the polyhedron is how many times its faces, projected radially onto the circumscribed sphere, cover a generic point.

**Problem.** Cayley's formula d<sub>v</sub>·V − E + d<sub>f</sub>·F = 2D holds for all nine regular polyhedra, convex and star. Here d<sub>v</sub> is the vertex-figure density and d<sub>f</sub> is the face density.

**How the definition helps.** Cayley's generalized Euler formula weights each vertex and face by its winding number, and twice the covering count D replaces the usual 2 on the right. For the small stellated dodecahedron, with pentagram faces and density 3, it reads 12 − 30 + 2·12 = 6 = 2·3 (our own check). For convex polyhedra all densities are one, which gives Euler's formula.

**Wikipedia:** [Kepler–Poinsot polyhedron](https://en.wikipedia.org/wiki/Kepler%E2%80%93Poinsot_polyhedron), [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “This version holds both for convex polyhedra (where the densities are all 1) and the non-convex Kepler–Poinsot polyhedra.”

**Sources:**

- [A. Cayley, On Poinsot's four new regular solids, Philosophical Magazine 17 (1859) 123–128](https://doi.org/10.1080/14786445908642635)
