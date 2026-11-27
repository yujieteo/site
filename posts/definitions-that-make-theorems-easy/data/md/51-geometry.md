### Inversion preserves unsigned angles

**Remember:** Inversion reflects and scales tangent directions without changing the size of their angles.

*True by definition.* MSC 51B10 (Möbius geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** In the Euclidean plane, inversion in the unit circle sends each nonzero vector x to x/‖x‖². Geometrically, its image lies on the same ray at the reciprocal distance from the origin.

**Problem.** When two differentiable plane curves meet away from the origin with nonzero velocities, inversion preserves their unsigned angle and reverses their oriented angle.

**How the definition helps.** Inversion has derivative equal to a reflection times a positive scalar, which preserves angle size and reverses orientation (our own). Differentiating the formula reverses the radial component, preserves the perpendicular component and scales both by 1/‖x‖² (our own).

**Wikipedia:** [Inversive geometry](https://en.wikipedia.org/wiki/Inversive_geometry). It says: “The circle inversion map is anticonformal, which means that at every point it preserves angles and reverses orientation”

**Sources:** none listed. No primary source with a working link was found.

### Parallel glides square to a translation of twice the distance

**Remember:** Reflect twice and the slides add.

*Rules out counterexamples.* MSC 51F15 (Reflection groups, reflection geometries). arXiv math.MG, math.GR. Level 1: early undergraduate.

**Definition.** A glide reflection reflects the plane across a line and then shifts it by a nonzero vector parallel to that line.

**Problem.** A glide reflection squared is a translation by twice its glide vector. In particular, a glide reflection has infinite order.

**How the definition helps.** Reflection leaves the parallel shift vector unchanged, so repeating the motion adds the vector twice (our own). Every even positive power is a nonzero translation, so no positive power gives the identity (our own). A perpendicular shift instead reverses under reflection and cancels when the motion is repeated (our own).

**Wikipedia:** [Glide reflection](https://en.wikipedia.org/wiki/Glide_reflection). It says: “two applications of the same glide reflection result in a double translation”

**Sources:** none listed. No primary source with a working link was found.

### Squared distances give the affine form of every Euclidean isometry

**Remember:** Three squared distances already specify the dot product.

*True by definition. Confidence: medium.* MSC 51F20 (Congruence and orthogonality in metric geometry), 20H15. arXiv math.GR, math.MG. Level 1: early undergraduate.

**Definition.** Define the dot product of vectors u and v as half the sum of their squared lengths minus half their squared distance. This replaces the sum of coordinate products with a distance formula.

**Problem.** Every distance-preserving map from a finite-dimensional Euclidean space to itself is an orthogonal linear map followed by a translation.

**How the definition helps.** The distance formula makes any distance-preserving map fixing the origin preserve dot products (our own). Subtract the image of the origin to obtain such a map (our own). The images of the coordinate unit vectors form a perpendicular unit basis, and dot products with them recover each original coordinate (our own). Expanding a squared distance proves that this definition agrees with the usual coordinate formula (our own).

**nLab:** [orthogonal group](https://ncatlab.org/nlab/show/orthogonal+group). It says: “This is isomorphic to the group of n × n orthogonal matrices.”

**Sources:** none listed. No primary source with a working link was found.

### Cyclic order fixes Ptolemy’s diagonals

**Remember:** Walk around the circle before you name the diagonals.

*Rules out counterexamples.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** A cyclic quadrilateral has four distinct vertices on a circle. Name them in order around the circle so that AC and BD join opposite vertices.

**Problem.** For cyclic order A, B, C, D, the lengths obey AC × BD = AB × CD + BC × DA.

**How the definition helps.** Cyclic order identifies the diagonals in Ptolemy’s equality, whose usual proof uses similar triangles. For a unit square, put A and B at the bottom, with C above A and D above B (our own). This order gives AC × BD = 1 while AB × CD + BC × DA = 3 (our own).

**Paper or page:** [Some Polynomial Conditions of Cyclic Quadrilaterals, Tilted Kites and Other Quadrilaterals](https://arxiv.org/abs/2302.10071v1). It says: “Let A, B, C, D be four points lying in counterclockwise or clockwise order on a circle, then P = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Defining angles by the dot product makes the law of cosines algebra

**Remember:** Expand the square of a difference, and the cosine term appears.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 15A63. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** The dot product u·v is the sum of the products of matching coordinates, and \|u\| = √(u·u) is the length of u. For nonzero u and v, define θ between 0 and π by cos θ = u·v / (\|u\|\|v\|). The Cauchy–Schwarz inequality \|u·v\| ≤ \|u\|\|v\| puts the quotient in the range of cosine on that interval.

**Problem.** In a triangle with sides a, b and c, let C be the angle between the sides of lengths a and b. Then c² = a² + b² − 2ab cos C.

**How the definition helps.** Expanding the squared distance between the endpoints gives the cosine term (our own). For side vectors u and v from their common vertex, the opposite side has squared length \|u\|² + \|v\|² − 2u·v (our own). Substitute u·v = \|u\|\|v\| cos C (our own). The geometric interpretation uses the agreement between the dot-product angle and the triangle angle (our own).

**Wikipedia:** [Dot product](https://en.wikipedia.org/wiki/Dot_product), [Law of cosines](https://en.wikipedia.org/wiki/Law_of_cosines). It says: “In such a presentation, the notions of length and angle are defined by means of the dot product.”

**Paper or page:** [Law of Cosines](https://proofwiki.org/wiki/Law_of_Cosines). It says: “Then: c² = a² + b² − 2 a b cos C”

**Sources:** none listed. No primary source with a working link was found.

### Equiangularity makes regular polygons cyclic

**Remember:** Equal edges and equal turns close on a circle.

*Rules out counterexamples.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Define a regular convex polygon to have equal sides and equal angles. Equal side lengths alone define an equilateral polygon.

**Problem.** The vertices of a regular convex polygon lie on a single circle.

**How the definition helps.** Equal turns and lengths make a single rotation carry each vertex to the next (our own). Choose the rotation through the exterior angle taking the first vertex to the second: it sends every edge vector to its successor (our own). Thus every vertex lies at the same distance from the rotation center (our own). A rhombus with opposite angles of 60° violates the cyclic requirement that opposite angles sum to 180° (our own).

**Wikipedia:** [Regular polygon](https://en.wikipedia.org/wiki/Regular_polygon). It says: “All vertices of a regular polygon lie on a common circle”

**Paper or page:** [Regular Polygon is Cyclic](https://proofwiki.org/wiki/Regular_Polygon_is_Cyclic). It says: “Then P is a cyclic polygon.”

**Sources:** none listed. No primary source with a working link was found.

### Equidistance defines perpendicular bisectors and makes them meet at the circumcentre

**Remember:** A point equally far from each pair of vertices lies on all three bisectors.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** Define the perpendicular bisector of a segment AB as the set of points P with PA = PB. The construction definition is the line through the midpoint of AB at right angles to AB.

**Problem.** The perpendicular bisectors of the three sides of a nondegenerate triangle meet at one point. That point is the centre of a circle through the vertices.

**How the definition helps.** The equidistance definition makes membership in the third bisector follow from PA = PB and PB = PC. In our own comparison, the work lies in proving that the equidistance set is the line from the construction definition. This follows by subtracting the squared distance equations in coordinates. Two such lines meet once because their respective triangle sides are not parallel.

**Wikipedia:** [Circumcircle](https://en.wikipedia.org/wiki/Circumcircle). It says: “Therefore any point which is simultaneously on two of the perpendicular bisectors must be equidistant from all three vertices.”

**Sources:** none listed. No primary source with a working link was found.

### Equidistance makes angle bisectors meet

**Remember:** Two equalities give the third.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** The internal angle bisector consists of the vertex and the interior points equally distant from the two side lines. The usual definition splits the angle into two equal angles.

**Problem.** The three internal angle bisectors of a nondegenerate triangle meet at one point.

**How the definition helps.** At the intersection of two internal bisectors, equality of distances to the side lines gives the third equality (our own). The point therefore lies on the third internal bisector (our own). Congruent right triangles give the equal-distance test (our own). One also needs the fact that the first two internal bisectors meet inside the triangle (our own).

**Paper or page:** [Angle Bisectors are Locus of Points Equidistant from Lines](https://proofwiki.org/wiki/Angle_Bisectors_are_Locus_of_Points_Equidistant_from_Lines). It says: “The locus of points which are equidistant from ℒ₁ and ℒ₂ are the angle bisectors of ℒ₁ and ℒ₂.”

**Sources:**

- [Euclid, Elements, Book IV, Proposition 4](https://mathcs.clarku.edu/~djoyce/java/elements/bookIV/propIV4.html)

### Midpoint averages give Varignon’s parallelogram

**Remember:** The two midpoint diagonals have the same midpoint.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 51N10. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Take the average of two endpoint position vectors as their midpoint. The geometric definition asks for the point halfway along the segment.

**Problem.** The successive side midpoints of a convex quadrilateral with no three collinear vertices form a parallelogram.

**How the definition helps.** Both diagonals between side midpoints have the same midpoint, the average of the four original vertices (our own). The work sits in identifying the vector average with the geometric midpoint and proving that bisecting diagonals characterize parallelograms (our own).

**Wikipedia:** [Varignon's theorem](https://en.wikipedia.org/wiki/Varignon%27s_theorem). It says: “the midpoints of the sides of an arbitrary quadrilateral form a parallelogram”

**Sources:** none listed. No primary source with a working link was found.

### Signed lengths make the converse of Menelaus's theorem true

**Remember:** Measure forward positively and backward negatively before multiplying the three ratios.

*Makes the theorem clean to state or prove.* MSC 51M04 (Elementary problems in Euclidean geometries), 51A20. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Fix an orientation on a line and use a unit coordinate increasing in that direction. The signed length AB is the coordinate of B minus the coordinate of A.

**Problem.** Let D, E, F lie on the side lines BC, CA, AB of triangle ABC, away from the vertices. They are collinear if and only if (AF/FB)(BD/DC)(CE/EA) = −1, with signed lengths.

**How the definition helps.** Signed ratios distinguish collinearity from concurrence. Menelaus’s theorem gives product −1 exactly for collinear points, while Ceva’s theorem gives +1 for concurrent cevians (our own comparison). Taking absolute values loses this distinction, so the unsigned converse fails.

**Wikipedia:** [Menelaus's theorem](https://en.wikipedia.org/wiki/Menelaus%27s_theorem). It says: “Note that the converse of the weaker, unsigned statement is not necessarily true.”

**Sources:**

- [J. Benítez, A unified proof of Ceva and Menelaus' theorems using projective geometry, Journal for Geometry and Graphics 11 (2007) 39–44](https://www.heldermann-verlag.de/jgg/jgg11/j11h1beni.pdf)

### The signed power of a point unifies secants and chords

**Remember:** Square the distance to the center and subtract the squared radius.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** For a circle with center O and radius r, the power of P is Π(P) = \|PO\|² − r². It is positive outside, zero on the circle and negative inside.

**Problem.** Take any line through P that meets the circle at S₁ and S₂. Then \|PS₁\|·\|PS₂\| = \|Π(P)\|, so the product does not depend on the line.

**How the definition helps.** One number gives both the intersecting secants theorem and the intersecting chords theorem. The product is Π(P) when P is outside the circle and −Π(P) when P is inside. The tangent-secant theorem is the case S₁ = S₂. With signed distances along the line, the two cases become one formula, PS₁ · PS₂ = Π(P) (our own remark).

**Wikipedia:** [Power of a point](https://en.wikipedia.org/wiki/Power_of_a_point). It says: “For the intersecting secants theorem and chord theorem the power of a point plays the role of an invariant”

**Sources:**

- [J. Steiner, Einige geometrische Betrachtungen, Journal für die reine und angewandte Mathematik 1 (1826), 161–184](https://doi.org/10.1515/crll.1826.1.161)
- [J. Steiner, Einige geometrische Betrachtungen, reprinted in Gesammelte Werke, vol. 1 (1881)](https://doi.org/10.1515/9783111506609.17)

### The vertex-average centroid makes the triangle medians meet

**Remember:** The average of three vertices is two thirds of the way to each opposite midpoint.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 51N10. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** Define the centroid G of a triangle ABC as the average (A + B + C)/3 of its vertices. The traditional geometric definition takes G as the intersection of the three medians, the segments from vertices to the opposite side midpoints.

**Problem.** The three medians of a triangle meet at one point. That point divides each median in the ratio 2 to 1 from the vertex.

**How the definition helps.** Grouping the vertex average gives G = ⅓A + ⅔·(B + C)/2 (our own). This places G two thirds along the median from A, and cyclic regrouping gives the same point on every median (our own). Two distinct median lines meet only once (our own).

**Wikipedia:** [Centroid](https://en.wikipedia.org/wiki/Centroid). It says: “The centroid divides each of the medians in the ratio 2:1, which is to say it is located ⅓ of the distance from each side to the opposite vertex”

**Paper or page:** [Medians of Triangle Meet at Centroid](https://proofwiki.org/wiki/Medians_of_Triangle_Meet_at_Centroid). It says: “Then the medians of △ABC meet at a single point.”

**Sources:** none listed. No primary source with a working link was found.

### Triangle weights cancel in Ceva’s theorem

**Remember:** Multiply around the triangle and every weight cancels.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 51N10. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Fix a nondegenerate triangle ABC and an interior point P. Its barycentric coordinates are the unique positive weights a,b,c satisfying a+b+c = 1 and P = aA+bB+cC.

**Problem.** Join each vertex of a triangle to a point inside its opposite side. The three lines meet exactly when the three ratios of side segments, taken in cyclic order, multiply to one.

**How the definition helps.** The three side ratios are cyclic quotients of vertex weights, so their product is one (our own). Normalizing b and c on BC gives BL/LC = c/b for the line from A through the common point (our own). Conversely, two ratios determine positive weights up to scale, and product one forces the third ratio (our own). Normalizing all three weights gives the common point (our own).

**Paper or page:** [Ceva's Theorem](https://proofwiki.org/wiki/Ceva's_Theorem). It says: “BL/LC × CM/MA × AN/NB = 1”

**Sources:** none listed. No primary source with a working link was found.

### Vector sums fix Euler’s ratio

**Remember:** The orthocenter is the vertex sum, and the centroid is its third.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Place the origin at the circumcenter, the point equally distant from the three vertices. Define the orthocenter by the sum of the three vertex vectors. Its usual definition uses the intersection of the three altitudes.

**Problem.** In a nonequilateral triangle, the centroid is a third of the way from the circumcenter to the orthocenter.

**How the definition helps.** The centroid is the vertex average, one third of the proposed orthocenter vector (our own). With vertex vectors a,b,c, the displacement from a to their sum is b + c (our own). Its dot product with b − c vanishes because b and c have equal lengths (our own). Cycling the vertices puts the sum on all three altitudes (our own).

**Paper or page:** [Position of Centroid on Euler Line](https://proofwiki.org/wiki/Position_of_Centroid_on_Euler_Line). It says: “OG : GH = 1 : 2”

**Sources:** none listed. No primary source with a working link was found.

### Congruence by isometries preserves corresponding measurements

**Remember:** A motion that keeps distances keeps everything built from distances.

*True by definition.* MSC 51M05 (Euclidean geometries (general) and generalizations), 97G40. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** Two labelled triangles are congruent if a distance-preserving map of the plane, called an isometry, takes each vertex to its matching vertex. Another definition lists equality of all corresponding sides and angles.

**Problem.** Congruent triangles have equal corresponding side lengths, median lengths, and angles. They also have equal perimeters and areas.

**How the definition helps.** An isometry preserves corresponding side lengths, hence their sum, the perimeter. It also preserves midpoints, so corresponding medians have equal lengths (our own). Plane isometries are compositions of translations, rotations and reflections, each preserving angle sizes and area (our own).

**Wikipedia:** [Congruence (geometry)](https://en.wikipedia.org/wiki/Congruence_%28geometry%29). It says: “In this sense, the sentence "two plane figures are congruent" implies that their corresponding characteristics are congruent (or equal) including not just their corresponding sides and angles, but also their corresponding diagonals, perimeters, and areas.”

**Sources:** none listed. No primary source with a working link was found.

### Exactly five convex solids have equal regular faces and equal corners

**Remember:** Same faces, same corners, no dents.

*Rules out counterexamples.* MSC 51M20 (Polyhedra and polytopes; regular figures, division of spaces), 52B15. arXiv math.MG. Level 1: early undergraduate.

**Definition.** In the Greek sense, a regular polyhedron is a convex solid with two more properties. Its faces are congruent regular polygons. The same number of faces meet at every vertex, arranged in the same way.

**Problem.** Up to similarity, there are exactly five regular convex polyhedra, the Platonic solids.

**How the definition helps.** Congruent faces exclude the square pyramid, and equal vertex counts exclude the triangular bipyramid. Convexity requires the q regular p-gons meeting at each vertex to have total angle below 2π (our own). For p,q ≥ 3 this gives only (3,3), (3,4), (3,5), (4,3) and (5,3) (our own). The classical classification realizes each pair uniquely up to similarity (our own).

**Wikipedia:** [Regular polyhedron](https://en.wikipedia.org/wiki/Regular_polyhedron). It says: “This definition rules out, for example, the square pyramid (since although all the faces are regular, the square base is not congruent to the triangular sides), or the shape formed by joining two tetrahedra together”

**Sources:** none listed. No primary source with a working link was found.

### Simple polygons have angle sum 2π and n − 2 triangles

**Remember:** A simple polygon turns around exactly once.

*Rules out counterexamples. Confidence: medium.* MSC 51M20 (Polyhedra and polytopes; regular figures, division of spaces), 51M04. arXiv math.MG, cs.CG. Level 1: early undergraduate.

**Definition.** A simple polygon is a closed chain of finitely many line segments that does not cross or touch itself. In other words, it is a Jordan curve made of line segments.

**Problem.** The signed exterior angles of a counterclockwise simple n-gon sum to 2π. Some n − 3 of its diagonals divide it into n − 2 triangles.

**How the definition helps.** Simplicity excludes the pentagram, whose signed turns sum to 4π in one orientation (our own). The two ears theorem lets us remove one triangular ear at a time until one triangle remains. Summing triangle angles gives interior angle sum (n − 2)π, hence signed exterior angle sum 2π (our own).

**Wikipedia:** [Simple polygon](https://en.wikipedia.org/wiki/Simple_polygon). It says: “The sum of external angles of a simple polygon is 2π. Every simple polygon with n sides can be triangulated by n−3 of its diagonals”

**Sources:**

- [G. H. Meisters, Polygons have ears, American Mathematical Monthly 82 (1975) 648–651](https://doi.org/10.1080/00029890.1975.11993898)

### Affine maps defined by weighted combinations preserve midpoints and centroids

**Remember:** Midpoints and centroids are weighted combinations that affine maps preserve.

*True by definition.* MSC 51N10 (Affine analytic geometry), 15A04. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Define an affine map of real affine spaces as a map that preserves weighted combinations with weights summing to 1. The weights may be negative. In coordinates, another definition is a map of the form x ↦ Ax + b.

**Problem.** Affine maps preserve midpoints and centroids, where a centroid is the average of the vertices.

**How the definition helps.** The definition covers the equal weights that give midpoints and centroids. Our own comparison puts the work into matching this definition with the coordinate rule. Subtracting f(0) from a map that preserves weighted combinations leaves a map that respects scalar multiplication and addition. Conversely, the weights sum to 1, so the translation b enters a weighted combination only once.

**Wikipedia:** [Affine transformation](https://en.wikipedia.org/wiki/Affine_transformation). It says: “In other words, f preserves barycenters.”

**Sources:** none listed. No primary source with a working link was found.

### Parallelogram diagonals share a midpoint

**Remember:** Add half of each edge to reach the middle of either diagonal.

*True by definition.* MSC 51N10 (Affine analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Define a parallelogram by a vertex p and independent edge vectors u and v. Its vertices are p, p + u, p + v and p + u + v. The geometric definition asks for two pairs of parallel opposite sides.

**Problem.** The diagonals of a parallelogram bisect each other. A quadrilateral whose diagonals bisect each other is a parallelogram.

**How the definition helps.** Both diagonals have the same endpoint sum, 2p + u + v, so their midpoints agree (our own). The converse rearranges that equality to recover the fourth vertex (our own). The work moves to showing that the vector description matches the opposite-side condition (our own).

**Paper or page:** [Condition for Points in Complex Plane to form Parallelogram](https://proofwiki.org/wiki/Condition_for_Points_in_Complex_Plane_to_form_Parallelogram), [Quadrilateral with Bisecting Diagonals is Parallelogram](https://proofwiki.org/wiki/Quadrilateral_with_Bisecting_Diagonals_is_Parallelogram). It says: “Let the diagonals of ABCD bisect each other.”

**Sources:** none listed. No primary source with a working link was found.

### Positive weights locate triangle interiors

**Remember:** Inside a triangle, all three vertex weights are positive.

*True by definition.* MSC 51N10 (Affine analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** For a nondegenerate triangle ABC, the weight of P at A is the signed area of PBC divided by that of ABC. Cycle A,B,C to obtain the other two weights. Signed area is positive for counterclockwise order, negative for clockwise order and zero for collinear vertices.

**Problem.** A point is strictly inside a nondegenerate triangle exactly when all three of its barycentric coordinates are positive.

**How the definition helps.** In our own proof, a positive weight at A puts P on the same side of BC as A. The three weights therefore test the three open half-planes whose intersection is the triangle’s interior. To identify these ratios with the usual barycentric coordinates, observe that each ratio is an affine function of P. It equals one at its own vertex and zero at the others, so it returns the corresponding weight in a weighted average.

**Wikipedia:** [Barycentric coordinate system](https://en.wikipedia.org/wiki/Barycentric_coordinate_system). It says: “they are all positive if and only if the point is strictly inside the simplex.”

**Paper or page:** [Barycentric Coordinates of Point inside Triangle](https://proofwiki.org/wiki/Barycentric_Coordinates_of_Point_inside_Triangle). It says: “Let p be an arbitrary point inside T.”

**Sources:** none listed. No primary source with a working link was found.

### A curved bisector is parabolic

**Remember:** A radius shifts the tangent into a directrix.

*True by definition.* MSC 51N20 (Euclidean analytic geometry), 51M04. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Take a circle and a tangent line. Work outside the open disk, in the closed half-plane containing the center. Define their bisector as the points equally distant from the circle and the line.

**Problem.** The distance bisector is a parabola with the circle center as its focus. Its directrix is the tangent line shifted by one radius away from the center.

**How the definition helps.** On the chosen side, shifting the tangent outward adds one radius to every distance from the tangent (our own). Outside the open disk, distance to the circle equals distance to the center minus the radius (our own). Equating the two distances gives the focus and directrix test for a parabola (our own). Conversely, every point of the parabola lies on the chosen side and outside the open disk (our own).

**Paper or page:** [Bisecting horn angles](https://arxiv.org/abs/2206.09499v1). It says: “The metric bisector of a horn angle formed by a circle and a tangent is the parabola with focus at the center of the circle, focal distance equal to the circle’s radius, and directrix parallel to the tangent.”

**Sources:**

- [Sergiy Koshkin, Bisecting horn angles, Theorem 1](https://arxiv.org/abs/2206.09499v1)

### Circle equations bound intersections

**Remember:** Subtract two circle equations to get a line.

*True by definition.* MSC 51N20 (Euclidean analytic geometry), 97G70. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** A circle consists of the points at a fixed positive distance from its center. In rectangular coordinates, define it instead by (x − a)² + (y − b)² = r², with center (a, b) and radius r.

**Problem.** Two distinct circles in the Euclidean plane share at most two points.

**How the definition helps.** Subtracting the two circle equations cancels their common quadratic terms. Distinct concentric circles have different radii and share no points (our own). Otherwise the difference defines a line, and restricting either equation to that line gives a quadratic with at most two roots (our own). The Pythagorean theorem identifies the coordinate and distance definitions.

**Paper or page:** [An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406). It says: “Distinct circles have at most two points in common.”

**Sources:**

- [Peter M Johnson, An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406)

### Focal distances explain parabolic reflection

**Remember:** Equal distances give a mirror line.

*Makes the theorem clean to state or prove.* MSC 51N20 (Euclidean analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Define a parabola as the points equidistant from a fixed focus and a fixed line called the directrix. The focus must not be on the line. Another definition cuts a cone with a plane parallel to a side of the cone.

**Problem.** A ray travelling parallel to the axis toward a parabola from its open side reflects through the focus.

**How the definition helps.** The focus and the directrix foot H of the contact point P are mirror images across their perpendicular bisector (our own). Every parabola point is at least as close to the focus as to H, with equality only at P (our own). The bisector thus supports the parabola at P and is its tangent (our own). Reflection sends the incoming direction toward H to the direction toward the focus (our own).

**Paper or page:** [Focal Property of Parabola](https://proofwiki.org/wiki/Focal_Property_of_Parabola). It says: “The tangent to 𝒦 at P bisects the angle between the straight line PF and the straight line through P perpendicular to D.”

**Sources:** none listed. No primary source with a working link was found.

### Focal sums make ellipses convex

**Remember:** Each focal distance obeys the triangle inequality.

*True by definition.* MSC 51N20 (Euclidean analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Define a filled ellipse by an upper bound on the sum of its distances to two fixed points. The bound must exceed the distance between the two points. Another description uses a quadratic inequality in coordinates.

**Problem.** The segment between any two points of a filled ellipse stays in the filled ellipse (our own).

**How the definition helps.** The triangle inequality bounds each focal distance along a segment by the weighted average of the endpoint distances (our own). Adding the bounds gives the defining inequality along the segment (our own). The work moves to identifying the region bounded by that focal sum with the quadratic region (our own).

**nLab:** [convex set](https://ncatlab.org/nlab/show/convex+set). It says: “the straight line segment connecting x with y in X is also contained in S.”

**Wikipedia:** [Ellipse](https://en.wikipedia.org/wiki/Ellipse). It says: “the ellipse is the set of points P such that the sum of the distances \|PF₁\|, \|PF₂\| is equal to 2a”

**Sources:** none listed. No primary source with a working link was found.

### Orthonormal frames determine rigid motions

**Remember:** Move the origin and carry both coordinate directions with it.

*True by definition.* MSC 51N20 (Euclidean analytic geometry), 97G70. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** Use a point and two perpendicular unit vectors as a coordinate frame. Define a rigid motion as a map preserving distances, instead of relying on physical transport.

**Problem.** Any match between two orthonormal frames in the Euclidean plane extends to a unique rigid motion.

**How the definition helps.** A frame assigns each point unique coordinates, so match points with equal coordinates in the two frames (our own). The distance formula makes this map an isometry (our own). Any extension agrees on the origin and both unit endpoints, and distances to these three points determine both coordinates (our own).

**Paper or page:** [An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406). It says: “Any map as above between systems of axes (l, m) and (l′, m′) extends uniquely to a rigid motion of the plane.”

**Sources:**

- [Peter M Johnson, An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406)

### Projection pairs rational points

**Remember:** Project from the pole to trade rational pairs for rational numbers.

*True by definition.* MSC 51N20 (Euclidean analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Project a point of the unit circle other than (0, 1) along a straight line through (0, 1) to the horizontal axis. Trigonometric coordinates instead use the sine and cosine of an angle.

**Problem.** This projection gives a bijection between rational coordinate pairs on the circle other than (0, 1) and rational numbers on the axis.

**How the definition helps.** Projection uses only rational operations in both directions (our own). The point (x, y) goes to t = x/(1 − y), and t comes back to (2t/(1 + t²), (t² − 1)/(1 + t²)). Angle coordinates would instead need to know when sine and cosine are both rational.

**Wikipedia:** [Stereographic projection](https://en.wikipedia.org/wiki/Stereographic_projection). It says: “The rational points on a circle correspond, under stereographic projection, to the rational points of the line.”

**Sources:** none listed. No primary source with a working link was found.

### Signed areas give the shoelace formula

**Remember:** Interior edges cancel when you keep the signs.

*True by definition.* MSC 51N20 (Euclidean analytic geometry), 51M04. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Give a triangle positive area in counterclockwise order, negative area in clockwise order, and zero area when its vertices are collinear. Reversing the order reverses the sign.

**Problem.** A simple polygon listed counterclockwise has area equal to the sum of signed triangle areas from the origin to each successive edge. Each term is half the determinant of the two endpoint vectors.

**How the definition helps.** Signed area lets the contributions from each internal edge cancel, because adjacent triangles traverse it in opposite directions (our own). For each counterclockwise triangle, expand its area as half the sum of determinants of successive vertex vectors (our own). Add over a triangulation of the polygon to leave only the boundary edges (our own). This uses the determinant formula for triangle area and the existence of a triangulation (our own).

**Wikipedia:** [Shoelace formula](https://en.wikipedia.org/wiki/Shoelace_formula). It says: “The triangle formula sums up the oriented areas Aᵢ of triangles OPᵢPᵢ₊₁”

**Sources:** none listed. No primary source with a working link was found.

### Two point reflections give a translation

**Remember:** Two sign changes leave a shift.

*True by definition.* MSC 51N20 (Euclidean analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Write reflection of x in a point p as x ↦ 2p − x. The geometric definition requires p to be the midpoint of x and its image.

**Problem.** Reflection in p followed by reflection in q translates each point by twice the vector from p to q.

**How the definition helps.** Substituting the first formula into the second gives x + 2(q − p) (our own). The work moves to solving the midpoint equation for the image (our own).

**Wikipedia:** [Point reflection](https://en.wikipedia.org/wiki/Point_reflection). It says: “The composition of two point reflections is a translation.”

**Sources:** none listed. No primary source with a working link was found.

### Unequal distance ratios give circles

**Remember:** Ratio one gives a line, not an Apollonius circle.

*Rules out counterexamples.* MSC 51N20 (Euclidean analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** An Apollonius circle uses a fixed positive ratio other than one between distances to two distinct fixed points. The usual circle definition fixes a distance from a single center.

**Problem.** In the Euclidean plane, take distinct points A and B and a positive number k ≠ 1. The points P satisfying PA = k·PB form a circle.

**How the definition helps.** Our own calculation excludes ratio one so the squared-distance terms do not cancel. Our own counterexample at ratio one is the perpendicular bisector, not a circle. Our own calculation squares the equation and completes the square after dividing by 1 − k². Our own check gives radius k·AB divided by the absolute value of 1 − k², so the radius is positive.

**Wikipedia:** [Circles of Apollonius](https://en.wikipedia.org/wiki/Circles_of_Apollonius). It says: “a circle could be defined as the set of points P that have a given ratio of distances”

**Sources:** none listed. No primary source with a working link was found.

### Desargues's theorem needs no special cases in the projective plane

**Remember:** Parallel lines meet at infinity, so the three meeting points always exist.

*Makes the theorem clean to state or prove.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51A20, 51N15. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Complete the Euclidean plane by adding one point for each direction of parallel lines. Extend each line through its direction point and put all direction points on one new line, the line at infinity.

**Problem.** Take two nondegenerate triangles in the real projective plane with six distinct vertices and distinct corresponding sides. If their three corresponding vertex joins are concurrent, the three corresponding side intersections are collinear.

**How the definition helps.** Every two distinct projective lines meet, so Desargues’s theorem includes parallel sides without a separate statement (our own). Parallel sides meet at their shared direction point.

**Wikipedia:** [Desargues's theorem](https://en.wikipedia.org/wiki/Desargues%27s_theorem). It says: “Commonly, to remove these exceptions, mathematicians "complete" the Euclidean plane by adding points at infinity, following Jean-Victor Poncelet.”

**Sources:** none listed. No primary source with a working link was found.

### In the projective plane, Pascal's theorem needs no special cases

**Remember:** On the projective plane, the Pascal line always exists, even if it is at infinity.

*Makes the theorem clean to state or prove.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51A20, 14H50. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** The real projective plane extends the Euclidean plane by one point for each direction of parallel lines. Each original line contains its direction point, and a new line contains all direction points.

**Problem.** Join six distinct points on a nondegenerate conic in the real projective plane in cyclic sequence to form a hexagon. The intersections of the three pairs of opposite sides lie on one line, the Pascal line.

**How the definition helps.** In the projective plane, opposite sides always meet, so one statement covers every case. In the Euclidean plane, if one pair of opposite sides is parallel, the Pascal line must be stated as parallel to them. If two pairs are parallel, the third pair is too, and the Pascal line is the line at infinity. If the conic may be a pair of lines, Pappus's hexagon theorem becomes a special case.

**Wikipedia:** [Pascal's theorem](https://en.wikipedia.org/wiki/Pascal%27s_theorem). It says: “The most natural setting for Pascal's theorem is in a projective plane since any two lines meet and no exceptions need to be made for parallel lines.”

**Sources:** none listed. No primary source with a working link was found.

### Point and line duality turns Pascal into Brianchon

**Remember:** The line of Pascal becomes the point of Brianchon.

*True by definition.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51N15. arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the dual projective plane, each line represents a point and each point represents a line. Lines through one point become points on one line. The tangent lines to a nondegenerate conic represent points on a second conic, called its dual.

**Problem.** Let the six sides of a real projective hexagon touch a nondegenerate conic at six distinct points. The three lines joining opposite vertices pass through one point.

**How the definition helps.** The tangent sides become vertices on the dual conic, so they form the inscribed hexagon of Pascal’s theorem (our own). Pascal puts the three intersections of opposite sides on one line. In the original plane these intersections represent the three diagonals, and their common line represents a common point. This proof uses Pascal and the theorem that the tangents form a dual conic.

**Wikipedia:** [Brianchon's theorem](https://en.wikipedia.org/wiki/Brianchon%27s_theorem). It says: “The polar reciprocal and projective dual of this theorem give Pascal's theorem.”

**Sources:**

- [C.-J. Brianchon, Mémoire sur les lignes du second ordre (1817), § XXXVI.](https://www.e-rara.ch/zut/download/pdf/15345060)

### Projective planes make the duality of points and lines a theorem

**Remember:** Points and lines obey the same rules, so you can swap the words.

*True by definition.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51A10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A projective plane has points, lines and an incidence relation. Every two distinct points lie on exactly one common line, and every two distinct lines meet at exactly one point. There exist four points with no three on one line.

**Problem.** If an incidence statement holds in every projective plane, its dual also holds in every projective plane. The dual exchanges points with lines and reverses incidence.

**How the definition helps.** The axioms treat points and lines the same way, so exchanging the words turns a proof into a proof. The second axiom is the dual of the first, and the dual of the third axiom is a theorem. So the dual of any projective plane is again a projective plane. The duality is between a plane and its dual, and some non-Desarguesian planes are not isomorphic to their duals.

**Wikipedia:** [Projective plane](https://en.wikipedia.org/wiki/Projective_plane). It says: “Thus any two distinct lines in a projective plane intersect at exactly one point.”

**Sources:** none listed. No primary source with a working link was found.

### Ruling out degenerate projective planes gives every line the same size

**Remember:** Four points, no three on a line, rule out the lopsided planes.

*Rules out counterexamples. Confidence: medium.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51E15. arXiv math.MG, math.CO. Level 2: later undergraduate.

**Definition.** A projective plane has points and lines such that every two distinct points determine one line and every two distinct lines meet in one point. Four points must exist with no three on one line.

**Problem.** In a projective plane, every line has the same number s + 1 of points, and every point lies on s + 1 lines. The number s is the order of the plane. A finite plane has s² + s + 1 points.

**How the definition helps.** The four-point axiom excludes a near-pencil, where one long line and one external point give all other lines only two points (our own). It guarantees a point outside any two lines, and projection from that point bijects their point sets (our own). For any point, an external line similarly counts its incident lines (our own). In finite order s, counting one point and s others on each of its s + 1 lines gives s² + s + 1 (our own).

**Wikipedia:** [Projective plane](https://en.wikipedia.org/wiki/Projective_plane). It says: “The last condition excludes the so-called degenerate cases”

**Sources:** none listed. No primary source with a working link was found.

### Swapping points and lines gives the converse of Desargues

**Remember:** Swap points and lines to reverse Desargues.

*True by definition.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the dual projective plane, each original line represents a point and each original point represents a line. An original point lies on an original line exactly when the corresponding dual line contains the corresponding dual point.

**Problem.** Take two triangles in the real projective plane with six distinct vertices and distinct corresponding sides. If the corresponding sides meet at three distinct points on one line, the lines joining corresponding vertices pass through one point.

**How the definition helps.** The dual plane turns the converse into the forward theorem (our own). There, corresponding vertex joins meet at one point, so Desargues puts the three corresponding side intersections on one line. Back in the original plane, this gives the required common point. The argument uses Desargues and the fact that the dual of the real projective plane is another real projective plane (our own).

**Paper or page:** [Desargues' Theorem/Converse](https://proofwiki.org/wiki/Desargues'_Theorem/Converse). It says: “Then the lines AA′, BB′ and CC′ intersect in the point O.”

**Sources:**

- [C.-J. Brianchon, Mémoire sur les lignes du second ordre (1817), § XIII, note.](https://www.e-rara.ch/zut/download/pdf/15345060)

### The quadrangle definition makes collineations preserve harmonic quadruples

**Remember:** Any map that keeps lines and their intersections also keeps a quadrangle construction.

*True by definition.* MSC 51A20 (Configuration theorems in linear incidence geometry), 51A30, 51N15. arXiv math.MG. Level 2: later undergraduate.

**Definition.** In a projective plane over a field of characteristic different from two, a complete quadrangle consists of four points with no three collinear. Call four distinct collinear points A,B,C,D harmonic if a complete quadrangle witnesses the following incidences. Two opposite side pairs meet at A and B respectively, and the sides of the third pair meet AB at C and D respectively.

**Problem.** A collineation is a bijection of the plane that maps lines to lines. Every collineation preserves harmonic quadruples.

**How the definition helps.** The quadrangle definition uses only joins and intersections, so a collineation carries each witnessing quadrangle to another one (our own). The work is showing that A, B and C give the same D for every allowed quadrangle. In coordinates this also matches the fourth point with cross-ratio −1.

**Wikipedia:** [Projective harmonic conjugate](https://en.wikipedia.org/wiki/Projective_harmonic_conjugate). It says: “The point D does not depend on what point L is taken initially, nor upon what line through C is used to find M and N. This fact follows from Desargues theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Counting lines as circles removes the exceptions in inversion

**Remember:** Complete each line with infinity and count it as a circle.

*Makes the theorem clean to state or prove.* MSC 51B10 (Möbius geometries), 30C20. arXiv math.MG, math.CV. Level 2: later undergraduate.

**Definition.** Add one point at infinity to the plane, and let every line pass through it. A generalised circle is then a circle or a straight line in this extended plane.

**Problem.** Inversions and Möbius transformations map generalised circles to generalised circles. Any three distinct points lie on exactly one generalised circle.

**How the definition helps.** With generalised circles, both statements hold without exceptions. Inversion maps some circles to lines and some lines to circles, so the statement for ordinary circles has exceptions. Three collinear points have no ordinary circle through them, but they lie on a line. Under stereographic projection, all generalised circles become ordinary circles on the sphere.

**Wikipedia:** [Generalised circle](https://en.wikipedia.org/wiki/Generalised_circle). It says: “Given any three distinct points in the extended plane, there exists precisely one generalised circle passing through all three.”

**Sources:** none listed. No primary source with a working link was found.

### Four points share a Möbius-image circle exactly when their cross-ratio is real

**Remember:** A generalized circle becomes the real line after normalizing three of its points.

*True by definition.* MSC 51B10 (Möbius geometries), 30C20. arXiv math.CV, math.MG. Level 2: later undergraduate.

**Definition.** Define a generalized circle on the Riemann sphere as a Möbius image of ℝ ∪ {∞}. The Euclidean description uses ordinary circles and straight lines completed by ∞. To get the cross-ratio, send three points to 0, 1 and ∞ by a Möbius map and read the fourth image.

**Problem.** Four distinct points lie on a generalized circle exactly when their cross-ratio is real.

**How the definition helps.** Normalizing the first three points sends their generalized circle to the extended real line. Indeed, any three distinct extended real points admit a real Möbius normalization, and the complex normalization is unique (our own). Thus the fourth point belongs to that circle exactly when its normalized image is real, since that image differs from ∞ (our own).

**nLab:** [Moebius transformation](https://ncatlab.org/nlab/show/Moebius+transformation). It says: “it turns out that the cross-ratio of a 4-tuple is a real number if and only if the four points lie on a circle (or a line which is a circle passing through ∞).”

**Wikipedia:** [Cross-ratio](https://en.wikipedia.org/wiki/Cross-ratio). It says: “Being on a circle means the four points are the image of four real points under a Möbius transformation, and hence the cross ratio is a real number.”

**Sources:** none listed. No primary source with a working link was found.

### Normalizing three points makes the cross-ratio Möbius invariant

**Remember:** Normalize three points, then read off the fourth.

*True by definition.* MSC 51B10 (Möbius geometries), 30C20. arXiv math.CV, math.MG. Level 2: later undergraduate.

**Definition.** Send three distinct points to 0, 1 and ∞ by the unique Möbius map that does this. Define their cross-ratio with a fourth distinct point as the image of the fourth point. The formula definition instead uses a quotient of products of differences.

**Problem.** Möbius maps preserve the cross-ratio.

**How the definition helps.** Uniqueness gives the normalization after applying any Möbius map M (our own). Compose the original normalization with M⁻¹ to send the transformed triple to 0, 1 and ∞ (our own). The transformed fourth point then has the same normalized image (our own).

**nLab:** [Moebius transformation](https://ncatlab.org/nlab/show/Moebius+transformation). It says: “This motivates the following definition: given a 4-tuple (a, b, c, d) of distinct points in ℙ¹(k), its cross-ratio is”

**Wikipedia:** [Cross-ratio](https://en.wikipedia.org/wiki/Cross-ratio). It says: “The action of the Möbius group is simply transitive on the set of triples of distinct points of the Riemann sphere”

**Sources:** none listed. No primary source with a working link was found.

### Absolute geometry proves once what holds in Euclidean and hyperbolic planes

**Remember:** Drop the parallel postulate, and prove things for both worlds at once.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51F05 (Absolute planes in metric geometry), 51M05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** In Hilbert’s formulation, absolute geometry uses the incidence, order, congruence and continuity axioms for the plane. It leaves the parallel axiom open.

**Problem.** Every theorem of absolute geometry holds in both Euclidean and hyperbolic geometry. Examples include the exterior angle theorem and the Saccheri–Legendre bound of π on a triangle’s angle sum.

**How the definition helps.** Euclidean and hyperbolic planes satisfy the stated axioms, so every consequence holds in both (our own). The continuity assumptions here include the Archimedean axiom used for the angle-sum bound (our own).

**Wikipedia:** [Absolute geometry](https://en.wikipedia.org/wiki/Absolute_geometry). It says: “The theorems of absolute geometry hold in hyperbolic geometry, which is a non-Euclidean geometry, as well as in Euclidean geometry.”

**Sources:** none listed. No primary source with a working link was found.

### Conjugation gives the product of two plane reflections

**Remember:** Two reflections cancel the bars and leave a turn or a shift.

*True by definition.* MSC 51F15 (Reflection groups, reflection geometries). arXiv math.MG, math.GR. Level 2: later undergraduate.

**Definition.** Let a mirror line pass through p at angle α to the real axis. Its complex reflection formula sends z to p + (cos 2α + i sin 2α)·w̄, where w = z − p. The bar changes the sign of the imaginary part.

**Problem.** Two reflections in intersecting lines give a rotation about the intersection through twice the directed angle between the lines. Two reflections in parallel lines give a perpendicular translation by twice the displacement from the first line to the second.

**How the definition helps.** Two conjugations cancel, and conjugation reverses the angle in the first complex multiplier (our own). Use the intersection as origin to read the resulting doubled angle (our own). For parallel lines, turn the axes so each mirror is horizontal and adds twice its signed height in the imaginary direction (our own). The work goes into deriving the complex reflection formula by rotating and shifting the real axis (our own).

**Wikipedia:** [Dihedral group](https://en.wikipedia.org/wiki/Dihedral_group). It says: “Reflecting in one axis of symmetry followed by reflecting in another axis of symmetry produces a rotation through twice the angle between the axes.”

**Sources:** none listed. No primary source with a working link was found.

### The moved subspace gives the shortest orthogonal reflection factorization

**Remember:** Each reflection can eliminate one moved direction.

*Makes the theorem clean to state or prove.* MSC 51F15 (Reflection groups, reflection geometries). arXiv math.MG, math.GR. Level 2: later undergraduate.

**Definition.** For an orthogonal linear map A on finite-dimensional Euclidean space, its moved subspace consists of all differences x − Ax. A linear reflection fixes a hyperplane through the origin and reverses its perpendicular direction.

**Problem.** The least number of linear reflections giving A equals the dimension of its moved subspace.

**How the definition helps.** A reflection changes each displacement along one direction, so the moved dimension changes by at most one (our own). For Ax ≠ x, the perpendicular bisector of x and Ax contains the origin and every vector fixed by A (our own). Reflecting Ax back to x therefore increases the fixed dimension by one (our own). The moved dimension drops by one each time, giving a factorization that attains the bound (our own).

**Wikipedia:** [Cartan–Dieudonné theorem](https://en.wikipedia.org/wiki/Cartan%E2%80%93Dieudonn%C3%A9_theorem). It says: “is a composition of at most n reflections.”

**Sources:**

- [Noel Brady and Jon McCammond, Factoring Euclidean Isometries, 2015, Theorem 5.7](https://web.math.ucsb.edu/~jon.mccammond/papers/euclid-isom.pdf)

### Orthogonal determinant-one matrices make compositions of rotations into rotations

**Remember:** Products of orthogonal matrices with determinant one still satisfy both conditions.

*True by definition.* MSC 51F25 (Orthogonal and unitary groups in metric geometry), 20G20. arXiv math.MG, math.RA. Level 2: later undergraduate.

**Definition.** Represent a rotation about the origin in ℝ³ by a matrix A with AᵀA = I and det A = 1. The first condition preserves lengths and angles, and the second preserves orientation. The geometric definition is a turn through some angle about a line through the origin.

**Problem.** The composite of two rotations about axes through the same point is again a rotation about some axis through that point.

**How the definition helps.** The matrix definition makes closure a direct check because products preserve both orthogonality and determinant one. Our own comparison puts the work into Euler’s rotation theorem, which identifies these matrices with turns about axes. In dimension three, the determinant condition forces an orthogonal matrix to have an eigenvalue of 1. The matrix fixes that axis and acts on the perpendicular plane as an ordinary plane rotation.

**Wikipedia:** [Euler's rotation theorem](https://en.wikipedia.org/wiki/Euler%27s_rotation_theorem). It says: “It also means that the composition of two rotations is also a rotation.”

**Sources:** none listed. No primary source with a working link was found.

### Proper orthogonal maps in three dimensions must fix an axis

**Remember:** In three dimensions a proper orthogonal map fixes a line.

*Rules out counterexamples.* MSC 51F25 (Orthogonal and unitary groups in metric geometry), 20H15. arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** Define a proper orthogonal map by a matrix A that preserves dot products and has determinant +1. Allowing determinant −1 would also admit maps that reverse handedness.

**Problem.** Every nonidentity proper orthogonal map in three dimensions is a rotation about a unique axis through the origin.

**How the definition helps.** Determinant one forces a fixed direction because nonreal eigenvalues come in conjugate pairs and all eigenvalues have absolute value one (our own). On the perpendicular plane the map is a rotation, which fixes no other direction unless the entire map is the identity (our own). Without the determinant condition, the map x ↦ −x fixes only the origin (our own).

**Wikipedia:** [Euler's rotation theorem](https://en.wikipedia.org/wiki/Euler%27s_rotation_theorem). It says: “The eigenvector corresponding to this eigenvalue is the axis of rotation connecting the two systems.”

**Sources:**

- [Leonhard Euler, Formulae generales pro translatione quacunque corporum rigidorum, 1776](https://www.17centurymaths.com/contents/euler/e478tr.pdf)

### Quaternion conjugation represents each rotation by exactly two signs

**Remember:** Opposite unit quaternions always give the same rotation.

*True by definition.* MSC 51F25 (Orthogonal and unitary groups in metric geometry), 20H15. arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** Represent a spatial vector by a quaternion v with zero real part. Let a unit quaternion q act on v by conjugation, the map v ↦ qv q⁻¹.

**Problem.** Each rotation of three-dimensional space about the origin is represented by exactly two unit quaternions, q and −q.

**How the definition helps.** Conjugation makes the signs cancel, so q and −q act alike (our own). Two representatives differ by a unit quaternion commuting with all spatial vectors (our own). Commuting with the quaternion units i and j forces this factor to be real, hence 1 or −1 (our own). For unit axis u and angle θ, the axis-angle formula gives the representative cos(θ/2) + u sin(θ/2) (our own).

**Wikipedia:** [Quaternions and spatial rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation). It says: “conjugation by q and by −q must produce the same rotational transformation”

**Sources:** none listed. No primary source with a working link was found.

### Unit quaternion multiplication gives the axis of a composed rotation

**Remember:** Multiply the two quaternions and read the axis from the vector part.

*True by definition.* MSC 51F25 (Orthogonal and unitary groups in metric geometry), 20G20. arXiv math.MG, math.RA. Level 2: later undergraduate.

**Definition.** A unit quaternion q rotates a vector v by qvq⁻¹, treating v as a quaternion with zero real part. For unit axis u and angle θ, the representing quaternion is cos(θ/2) + u sin(θ/2).

**Problem.** For two rotations given by unit quaternions q and p, the product pq represents the rotation that applies q first. Unless it is the identity, the product’s vector part points along its axis.

**How the definition helps.** The quaternion definition makes composition multiplication because (pq)v(pq)⁻¹ = p(qvq⁻¹)p⁻¹. The scalar part is the cosine of half the angle, and the vector part gives the axis after normalization. Our own comparison notes that composing matrices first would then require finding a fixed direction of the product. The work is proving the action formula for unit quaternions and that only the identity rotation has representatives with zero vector part.

**Wikipedia:** [Quaternions and spatial rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation). It says: “It follows that conjugation by the product of two quaternions is the composition of conjugations by these quaternions”

**Sources:** none listed. No primary source with a working link was found.

### Directed line angles give one test for four points on a circle

**Remember:** Count line angles modulo a straight angle, and the two cases merge.

*Makes the theorem clean to state or prove.* MSC 51M04 (Elementary problems in Euclidean geometries), 97G40. arXiv math.MG, math.HO. Level 2: later undergraduate.

**Definition.** The directed angle from one line to another measures the signed turn from the first line to the second, with counterclockwise turns positive. Count turns that differ by a multiple of 180° as equal. Reversing a direction chosen along either line changes the turn by 180° and gives the same line angle.

**Problem.** Take four distinct points P₁, P₂, P₃, P₄ with no three on a line. They lie on one circle exactly when the directed angle from P₃P₁ to P₃P₂ equals the directed angle from P₄P₁ to P₄P₂.

**How the definition helps.** Directed angles merge the two ordinary-angle cases into one equality (our own explanation). On the same side of P₁P₂, the ordinary angles must agree. On opposite sides, they must sum to 180°, so their signed turns agree modulo 180°. The inscribed-angle theorem and its converse give the criterion.

**Wikipedia:** [Ellipse](https://en.wikipedia.org/wiki/Ellipse), [Inscribed angle](https://en.wikipedia.org/wiki/Inscribed_angle). It says: “The four points are on a circle, if and only if the angles at P₃ and P₄ are equal.”

**Sources:**

- [R. A. Johnson, Directed angles in elementary geometry, American Mathematical Monthly 24 (1917) 101–105](https://doi.org/10.1080/00029890.1917.11998288)

### Equal powers define radical axes and make them meet

**Remember:** Equal power for two pairs of circles gives equal power for the third pair.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 51M15. arXiv math.MG, math.HO. Level 2: later undergraduate.

**Definition.** The power of a point P for a circle with centre M and radius r is \|PM\|² − r². Define the radical axis of two circles with different centres as the set where both powers are equal. For circles that meet at two points, the geometric construction joins those points.

**Problem.** If the centres of three circles do not lie on one line, the three radical axes meet at one point, called the radical centre.

**How the definition helps.** Any intersection of two axes has equal power for all three circles, so it lies on the third axis (our own). Subtracting the squared distances cancels the quadratic terms and gives a line perpendicular to the line of centres. Two axes meet because the centres are not collinear, so the axes are not parallel. The power definition also covers disjoint circles, where the construction through intersection points does not apply.

**Wikipedia:** [Radical axis](https://en.wikipedia.org/wiki/Radical_axis). It says: “If the centers of these circles are not collinear, their radical axes intersect in a common point R, the radical center of the three circles.”

**Sources:** none listed. No primary source with a working link was found.

### Eudoxus’s ratio definition proves Euclid’s triangle area theorem

**Remember:** Equal ratios are those that every comparison of multiples cannot tell apart.

*True by definition. Confidence: medium.* MSC 51M04 (Elementary problems in Euclidean geometries), 01A20. arXiv math.HO, math.MG. Level 2: later undergraduate.

**Definition.** Take four positive magnitudes a, b, c, d, with a comparable to b and c comparable to d. Their ratios agree if every pair of positive integers m, n gives the same comparison for ma versus nb and mc versus nd. Each comparison gives &lt;, = or &gt;.

**Problem.** Triangles with the same height have areas in the same ratio as their bases. This is Book VI, Proposition 1 of Euclid’s Elements.

**How the definition helps.** Whole-number comparisons suffice by Eudoxus’s definition (our own reading). At fixed height, placing m equal bases end to end multiplies the triangle’s area by m, by additivity and equal-base equality. Thus each comparison of multiplied bases gives the same comparison of multiplied areas.

**Wikipedia:** [Eudoxus of Cnidus](https://en.wikipedia.org/wiki/Eudoxus_of_Cnidus). It says: “This means that a/b = c/d if and only if the ratios n/m that are larger than a/b are the same as the ones that are larger than c/d, and likewise for "equal" and "smaller".”

**Paper or page:** [Areas of Triangles and Parallelograms Proportional to Base](https://proofwiki.org/wiki/Areas_of_Triangles_and_Parallelograms_Proportional_to_Base). It says: “Then: AC : CD = △ABC : △ACD = □EC : □CF”

**Sources:** none listed. No primary source with a working link was found.

### Halving from the orthocenter puts nine points on one circle

**Remember:** Halve the circumcircle toward the orthocenter to find all nine points.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 2: later undergraduate.

**Definition.** Let H be the orthocenter, where the three altitudes of a triangle meet. Its circumcircle is the circle through its vertices. Define the nine-point circle by taking the midpoint of HP for every point P on the circumcircle.

**Problem.** The nine-point circle contains the side midpoints, the altitude feet, and the midpoints from H to the vertices.

**How the definition helps.** Taking midpoints gives one circle immediately, since the construction halves all distances (our own). The three vertices give the three midpoints next to H. The points opposite the vertices across the circle give the side midpoints, by the vector formula for H (our own). Reflecting H across each side gives a circumcircle point by the inscribed-angle theorem, so its midpoint gives the altitude foot (our own).

**Paper or page:** [Nine Point Circle Theorem](https://proofwiki.org/wiki/Nine_Point_Circle_Theorem). It says: “The nine points consisting of the feet of the altitudes, the midpoints of the sides, and the midpoints of the segments from the vertices to the orthocenter all lie on a single circle.”

**Sources:** none listed. No primary source with a working link was found.

### Inverting at a vertex makes Ptolemy a triangle inequality

**Remember:** Invert at one vertex and apply the triangle inequality to the other three.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 51B10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Unit inversion about A sends each point X other than A to a point X′ on ray AX with AX × AX′ = 1.

**Problem.** For four distinct plane points, AC × BD ≤ AB × CD + AD × BC. Equality holds exactly when C′ lies between B′ and D′.

**How the definition helps.** Inversion turns Ptolemy’s inequality into B′D′ ≤ B′C′ + C′D′, the ordinary triangle inequality. Similar triangles give X′Y′ = XY/(AX × AY) when A, X and Y form a triangle (our own). On a line through A, the same formula follows by taking differences of signed reciprocals. Multiplying the triangle inequality by AB × AC × AD gives the result, with equality precisely when C′ lies between B′ and D′.

**Wikipedia:** [Ptolemy's inequality](https://en.wikipedia.org/wiki/Ptolemy%27s_inequality). It says: “the triangle equality for these three points (from which Ptolemy's inequality may be derived) also becomes an equality.”

**Paper or page:** [Ptolemy's Theorem](https://proofwiki.org/wiki/Ptolemy's_Theorem). It says: “AB × CD + AD × BC = AC × BD”

**Sources:** none listed. No primary source with a working link was found.

### A continuity axiom is needed so Euclid's two circles meet

**Remember:** No gaps in the line, so circles cannot slip past each other.

*Rules out counterexamples.* MSC 51M05 (Euclidean geometries (general) and generalizations), 51F05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A line is Dedekind complete if every nonempty set of its coordinates with an upper bound has a least upper bound.

**Problem.** In a Euclidean plane with complete coordinate lines, the two circles in Euclid’s first proposition meet. An equilateral triangle exists on every nonzero segment.

**How the definition helps.** Completeness gives the positive square root of 3, which the rational line lacks (our own example). Choose coordinates making the segment endpoints (0, 0) and (1, 0). The point (1/2, √3/2) then has distance 1 from both endpoints.

**Wikipedia:** [Euclidean geometry](https://en.wikipedia.org/wiki/Euclidean_geometry), [Hilbert's axioms](https://en.wikipedia.org/wiki/Hilbert%27s_axioms). It says: “His axioms, however, do not guarantee that the circles actually intersect, because they do not assert the geometrical property of continuity, which in Cartesian terms is equivalent to the completeness property of the real numbers.”

**Sources:**

- [D. Hilbert, Grundlagen der Geometrie, Teubner, Leipzig (1899); English translation The Foundations of Geometry by E. J. Townsend (1902)](https://archive.org/details/abr1237.0180.001.umich.edu)

### Allowing ideal vertices lets hyperbolic triangles reach the maximal area π

**Remember:** Push all three corners to infinity, and the area is exactly π.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries), 51M25. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An ideal vertex of a hyperbolic triangle is a point at infinity where two sides are limiting parallel: they get arbitrarily close but never meet. The angle at an ideal vertex is defined to be zero.

**Problem.** In the hyperbolic plane of curvature −1, the area of a triangle with angles A,B,C is π−A−B−C, including triangles with ideal vertices. Three ideal vertices give the maximum area π.

**How the definition helps.** Counting vertices at infinity, with angle zero, makes the bound π an attained maximum (our own explanation). Without them, every angle is positive. The area formula comes from Gauss–Bonnet.

**Wikipedia:** [Hyperbolic triangle](https://en.wikipedia.org/wiki/Hyperbolic_triangle). It says: “The definition of a triangle can be generalized, permitting vertices on the ideal boundary of the plane while keeping the sides within the plane.”

**Sources:** none listed. No primary source with a working link was found.

### Horizontal horocycles show why all horocycles are congruent

**Remember:** Send the center to infinity, then scale the height.

*True by definition.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries). arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the upper half-plane, a horocycle based at a finite boundary point is a Euclidean circle inside the closed half-plane tangent there. Remove the point of contact. A horocycle based at infinity is a horizontal line.

**Problem.** Any two horocycles in the hyperbolic plane are congruent, meaning an isometry takes one to the other.

**How the definition helps.** Moving its boundary point to infinity turns a horocycle into a horizontal line (our own). A dilation then matches any two such lines. This uses the fact that real fractional linear maps with positive determinant preserve hyperbolic length and take circles through their pole to lines (our own).

**Wikipedia:** [Horocycle](https://en.wikipedia.org/wiki/Horocycle). It says: “Any two horocycles are congruent, and can be superimposed by an isometry”

**Sources:** none listed. No primary source with a working link was found.

### Klein chord lines give infinitely many parallels through a point

**Remember:** Open chords through a point can miss a given chord in infinitely many directions.

*True by definition.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries), 51M10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the Beltrami–Klein model, points are the interior points of a Euclidean disk. Lines are the open chords joining distinct boundary points.

**Problem.** Through a point off a given line, infinitely many lines miss the given line in the hyperbolic plane.

**How the definition helps.** Our own proof uses the chord definition to turn the claim into a statement about straight lines in a disk. The Euclidean parallel through the point misses even the closed chord. Lines through the point in sufficiently close directions also miss the closed chord because it is compact. The hard part is showing that the chord model gives hyperbolic geometry, including that its chords are shortest paths for its metric.

**Wikipedia:** [Beltrami–Klein model](https://en.wikipedia.org/wiki/Beltrami%E2%80%93Klein_model). It says: “Many hyperbolic lines through point P not intersecting line a in the Beltrami–Klein model”

**Sources:**

- [Eugenio Beltrami, Teoria fondamentale degli spazii di curvatura costante, Annali di Matematica Pura ed Applicata 2 (1868)](https://doi.org/10.1007/BF02419615)

### Moving a boundary endpoint to infinity straightens hyperbolic geodesics

**Remember:** Generalized circles include lines, so perpendicular boundary arcs include vertical geodesics.

*Makes the theorem clean to state or prove.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries), 51B10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A generalized circle is either a Euclidean circle or a Euclidean line together with the point at infinity. In the upper half-plane, consider arcs of generalized circles meeting the boundary at right angles.

**Problem.** The shortest paths in the Poincaré half-plane are segments of these arcs. They lie on semicircles centered on the boundary or on vertical lines.

**How the definition helps.** Moving one boundary endpoint to infinity turns an orthogonal arc into a vertical line (our own). A real fractional linear map with positive determinant makes this change while preserving lengths and angles. On a vertical line the segment uniquely minimizes length because all paths cost at least the absolute change in log height. The proof also needs length preservation and the unique orthogonal arc through each pair of distinct points (our own).

**Wikipedia:** [Poincaré half-plane model](https://en.wikipedia.org/wiki/Poincar%C3%A9_half-plane_model). It says: “Euclidean half-circles whose origin is on the x-axis”

**Sources:** none listed. No primary source with a working link was found.

### Proper spherical triangles keep sides and angles below π for polar duality

**Remember:** Choose short arcs, small angles, and poles facing the opposite vertices.

*Rules out counterexamples. Confidence: medium.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries), 51M10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** On the unit sphere, a proper triangle joins three vertices off a common great circle by shorter great-circle arcs and takes interior angles below π. Its polar vertices are the poles of the side circles on the same side as the respective opposite vertices.

**Problem.** For a proper spherical triangle, the perimeter lies strictly between 0 and 2π, and the angle sum lies strictly between π and 3π. Its polar is proper, with angles π−a, π−b, π−c and opposite sides π−A, π−B, π−C.

**How the definition helps.** The convention picks one triangle out of the several regions that three great circles cut out. Then the bounds hold and the polar triangle is again proper. So any identity for one triangle gives a dual identity by replacing A with π − a and a with π − A. Without the convention, the same three points bound triangles with a side longer than π, and the formulas need case changes (our own point).

**Wikipedia:** [Spherical trigonometry](https://en.wikipedia.org/wiki/Spherical_trigonometry). It says: “By convention, the sides of proper spherical triangles are less than π radians”

**Sources:**

- [I. Todhunter, Spherical Trigonometry, for the Use of Colleges and Schools, Macmillan (1878 edition)](https://archive.org/details/sphericaltrigon06todhgoog)

### Scaling every direction equally preserves angles in the Poincaré disk

**Remember:** Changing the scale at a point does not change its angles.

*True by definition.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The Poincaré disk multiplies the Euclidean length of each tangent vector at z by 2/(1 − \|z\|²). This length rule also fixes the inner product used to measure angles.

**Problem.** Two smooth curves meeting with nonzero tangent vectors in the Poincaré disk have the same hyperbolic and Euclidean angle.

**How the definition helps.** At each point the disk rescales every direction equally, so the scale cancels from the angle formula (our own). Using this disk presents angle preservation directly, while the Klein model represents lines by straight chords. The work is proving that the disk’s length rule models the hyperbolic plane (our own).

**Wikipedia:** [Beltrami–Klein model](https://en.wikipedia.org/wiki/Beltrami%E2%80%93Klein_model). It says: “This is in contrast to the Poincaré disk model, which is conformal.”

**Sources:** none listed. No primary source with a working link was found.

### The disk boundary gives exactly two limiting parallels

**Remember:** Each endpoint gives one limiting parallel through the given point inside the disk.

*True by definition.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries). arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the Klein model, a line is an open straight chord of a disk. Its two boundary endpoints are ideal points, and distinct lines are limiting parallel if they share one.

**Problem.** Through a point off a hyperbolic line there are exactly two lines limiting parallel to it.

**How the definition helps.** Join the given point to each of the line’s two boundary endpoints (our own). Each join gives a distinct chord, and any limiting parallel must use one of the endpoints (our own). The work is verifying the chord model and its agreement with the intrinsic notion of limiting parallelism (our own).

**Wikipedia:** [Beltrami–Klein model](https://en.wikipedia.org/wiki/Beltrami%E2%80%93Klein_model). It says: “Chords that meet on the boundary circle are limiting parallel lines.”

**Sources:** none listed. No primary source with a working link was found.

### The half-plane length rule makes vertical segments shortest

**Remember:** Changing height costs at least the change in its logarithm.

*True by definition.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries). arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the upper half-plane y &gt; 0, measure a piecewise smooth path by integrating its Euclidean arc length divided by its height y. Distance is the greatest lower bound of these path lengths between two points.

**Problem.** Between two points on a vertical line, the vertical segment is the unique shortest path, up to its parametrization. Its length is the absolute difference of the logarithms of their heights.

**How the definition helps.** The half-plane length rule bounds each path’s length below by the total change in log height, taken in absolute value (our own). This follows because Euclidean arc length dominates absolute vertical change. The vertical segment attains the bound, and equality forces a constant horizontal coordinate and monotone height. The work in using this model is identifying its length rule with hyperbolic distance (our own).

**Wikipedia:** [Poincaré half-plane model](https://en.wikipedia.org/wiki/Poincar%C3%A9_half-plane_model). It says: “straight Euclidean vertical rays”

**Sources:** none listed. No primary source with a working link was found.

### Identifying antipodal points makes two points determine one line

**Remember:** Glue opposite points, and great circles behave like lines.

*Makes the theorem clean to state or prove.* MSC 51M10 (Hyperbolic and elliptic geometries (general) and generalizations), 51M09. arXiv math.MG. Level 2: later undergraduate.

**Definition.** The elliptic plane is the sphere with each pair of antipodal (opposite) points made into one point. Its lines are the great circles, each counted once. Distance is the smaller angle between the corresponding lines through the centre.

**Problem.** In the elliptic plane, any two distinct points lie on exactly one line, and any two distinct lines meet in exactly one point.

**How the definition helps.** Each elliptic point represents a line through the sphere’s centre, and each elliptic line represents a plane through the centre (our own explanation). Two distinct such lines span exactly one plane. Two distinct such planes intersect in exactly one line.

**Wikipedia:** [Elliptic geometry](https://en.wikipedia.org/wiki/Elliptic_geometry). It says: “For example, the first and fourth of Euclid's postulates, that there is a unique line between any two points and that all right angles are equal, hold in elliptic geometry.”

**Sources:** none listed. No primary source with a working link was found.

### Archimedean solids need vertex-transitive symmetry to number thirteen

**Remember:** Alike corners are not enough: a symmetry must carry each corner to every other.

*Rules out counterexamples.* MSC 51M20 (Polyhedra and polytopes; regular figures, division of spaces), 52B15. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An Archimedean solid is a convex polyhedron with regular faces whose symmetry group maps every vertex to every other vertex. This property is called vertex-transitive. The definition leaves out the Platonic solids, prisms and antiprisms.

**Problem.** Up to similarity, there are exactly thirteen Archimedean solids.

**How the definition helps.** The global symmetry condition leaves out a solid that only looks the same at every vertex. The elongated square gyrobicupola has one triangle and three squares at every vertex, like the rhombicuboctahedron, but it is not vertex-transitive. Grünbaum showed that many authors gave the local definition but listed only thirteen solids.

**Wikipedia:** [Archimedean solid](https://en.wikipedia.org/wiki/Archimedean_solid), [Elongated square gyrobicupola](https://en.wikipedia.org/wiki/Elongated_square_gyrobicupola). It says: “If only thirteen polyhedra are to be listed, the definition must use global symmetries of the polyhedron rather than local neighborhoods.”

**Sources:**

- [B. Grünbaum, An enduring error, Elemente der Mathematik 64 (2009) 89–101](https://doi.org/10.4171/EM/120)

### Affine combination operations make barycentres independent of an origin

**Remember:** Weighted combinations are given as operations, so they need no chosen origin.

*True by definition.* MSC 51N10 (Affine analytic geometry), 08B99. arXiv math.MG, math.CT. Level 2: later undergraduate.

**Definition.** An affine space over a field is a nonempty set with an operation Cᵣ for every finite nonempty weight list r summing to one. A unit weight vector selects its indexed point. For every list x and compatible weight lists, Cᵣ(Cₛ₁(x), …, Cₛₙ(x)) equals Cₜ(x), where tⱼ = ∑ᵢ rᵢsᵢⱼ.

**Problem.** For any finite list of points and weights summing to 1, their weighted combination, or barycentre, is unique and needs no choice of origin.

**How the definition helps.** The operation for the given weights already returns the barycentre. In the translation definition, we can choose a point o and use o + ∑λᵢ(pᵢ − o). The weights sum to 1, so changing o cancels out of this expression in our own comparison. The work in the operation definition is recovering the vector space of translations and its action from the rules for combinations.

**nLab:** [affine space](https://ncatlab.org/nlab/show/affine+space). It says: “An affine space over the field k is an inhabited set A together with, for every natural number n ≥ 0 and every (n+1)-tuple (r₀,…,rₙ) of elements of k such that r₀ + ⋯ + rₙ = 1, a function”

**Paper or page:** [Barycenter Exists and is Well Defined](https://proofwiki.org/wiki/Barycenter_Exists_and_is_Well_Defined). It says: “Then the barycentre of p₁, …, pₙ with weights λ₁, …, λₙ exists and is unique.”

**Sources:** none listed. No primary source with a working link was found.

### Affine spaces as level sets give unique linear extensions

**Remember:** An affine map becomes linear when one extra coordinate carries the translation.

*True by definition.* MSC 51N10 (Affine analytic geometry), 15A04. arXiv math.MG, math.CT. Level 2: later undergraduate.

**Definition.** Take a vector space with a linear map onto its field k. Its level set where the map equals 1 defines an affine space. Maps between these spaces come from linear maps that preserve the value in k. In ordinary affine coordinates a map takes the form x ↦ Ax + b.

**Problem.** Every affine map from kⁿ to kᵐ extends uniquely to a linear map from kⁿ⁺¹ to kᵐ⁺¹ that preserves the last coordinate. Composition then uses ordinary matrix multiplication.

**How the definition helps.** The level-set definition makes composition ordinary composition of linear maps. Our own coordinate calculation sends (x, t) to (Ax + tb, t), giving existence. The level set t = 1 spans the larger vector space, so its values determine the extension. More generally, the work is constructing the larger vector space from an affine space without choosing an origin and matching its maps.

**nLab:** [affine space](https://ncatlab.org/nlab/show/affine+space). It says: “Note that this definition embeds the category Aff of (inhabited) affine spaces fully-faithfully in the slice category Vect/k.”

**Sources:** none listed. No primary source with a working link was found.

### Ellipses as affine circle images align parallel chord midpoints

**Remember:** An affine map carries the circle’s chord midpoints and their line to the ellipse.

*True by definition.* MSC 51N10 (Affine analytic geometry), 51M04. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An ellipse is the image of the unit circle under an invertible affine map x ↦ Ax + b.

**Problem.** The midpoints of all parallel chords in a given direction in an ellipse lie on a line through its centre.

**How the definition helps.** The affine-image definition transfers the circle result because affine maps preserve midpoints, lines and parallelism. On a circle, reflection across the perpendicular diameter swaps the two ends of every chord in the chosen direction. The harder step, in our own comparison, is showing that the affine images are exactly the ellipses from the two-point distance definition.

**Wikipedia:** [Ellipse](https://en.wikipedia.org/wiki/Ellipse). It says: “The midpoints of parallel chords lie on a diameter.”

**Paper or page:** [Locus of Midpoints of Parallel Chords of Central Conic passes through Center](https://proofwiki.org/wiki/Locus_of_Midpoints_of_Parallel_Chords_of_Central_Conic_passes_through_Center). It says: “Let 𝒟 be the locus of the midpoints of a system of parallel chords of 𝒦. Then 𝒟 passes through the center of 𝒦.”

**Sources:** none listed. No primary source with a working link was found.

### Ellipses as affine circle images give tangent parallelograms equal areas

**Remember:** Each tangent square of the unit circle has the same area before stretching.

*True by definition.* MSC 51N10 (Affine analytic geometry), 51M25. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An ellipse is the image of the unit circle under an invertible affine map x ↦ Ax + b. The usual equation is x²/a² + y²/b² = 1 in axes through its centre. Two diameters are conjugate when each bisects all chords parallel to the other.

**Problem.** The four tangents at the ends of any two conjugate diameters of an ellipse bound a parallelogram of area 4ab. Here a and b are the semi-axis lengths.

**How the definition helps.** Stretching the unit circle along its axes by a and b multiplies every area by ab (our own calculation). The stretch and its inverse preserve tangents, midpoints and parallelism, so conjugate diameters correspond exactly to perpendicular circle diameters. Their four tangents bound a square of area 4 before the stretch and a parallelogram of area 4ab afterward.

**Wikipedia:** [Ellipse](https://en.wikipedia.org/wiki/Ellipse). It says: “The parallelogram of tangents adjacent to the given conjugate diameters has the Area₁₂ = 4ab.”

**Sources:** none listed. No primary source with a working link was found.

### Three noncollinear points determine an affine transformation

**Remember:** The first point sets the origin, and the other two set the directions.

*Rules out counterexamples.* MSC 51N10 (Affine analytic geometry). arXiv math.MG. Level 2: later undergraduate.

**Definition.** An affine transformation of the real plane has the form x ↦ Mx + b, with M an invertible linear map. An affine frame is an ordered triple of noncollinear points.

**Problem.** Exactly one affine transformation sends any given affine frame to any other affine frame.

**How the definition helps.** Noncollinearity makes the two differences from the first point a basis of the plane (our own). Matching that basis to the target basis determines one invertible linear map. Matching the first points then determines the translation. If the points lie on the horizontal axis, every map (x,y) ↦ (x,ky) with k ≠ 0 fixes them (our own).

**Wikipedia:** [Affine transformation](https://en.wikipedia.org/wiki/Affine_transformation). It says: “the composition of a linear transformation of X (viewed as a vector space) and a translation of X.”

**Sources:** none listed. No primary source with a working link was found.

### A basis and its sum determine a projective map

**Remember:** The sum fixes the relative scales of the three basis vectors.

*True by definition.* MSC 51N15 (Projective analytic geometry), 51A05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the real projective plane, proportional nonzero vectors represent the same point. An ordered projective frame consists of the points represented by three basis vectors followed by their sum. An invertible linear map on vectors induces a projective map on points.

**Problem.** Exactly one projective map takes one ordered frame to another. Equivalently, two ordered sets of four points with no three collinear determine one such map.

**How the definition helps.** The linear map taking one chosen basis to the other also sends the first sum to the second (our own). A map fixing three basis points can scale their vectors independently, but fixing their sum forces all three scales to agree. A common scale fixes every projective point. When no three points lie on one line, the fourth has three nonzero coefficients, which can be absorbed into the basis vectors (our own).

**nLab:** [projective frame](https://ncatlab.org/nlab/show/projective+frame). It says: “and such that p₀ = p(e₁+…+eₙ₊₁).”

**Sources:** none listed. No primary source with a working link was found.

### An invertible conic matrix gives each point one tangent

**Remember:** An invertible matrix gives a nonzero tangent equation at each conic point.

*Rules out counterexamples.* MSC 51N15 (Projective analytic geometry), 51N35. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A real projective conic has equation pᵀQp = 0 in homogeneous coordinates, with Q symmetric. It is nondegenerate when Q is invertible. A tangent at a point gives a double root when we restrict the equation to that line.

**Problem.** Every point p of a nondegenerate real projective conic has just one tangent, given by pᵀQx = 0.

**How the definition helps.** Invertibility makes Qp nonzero, so pᵀQx = 0 defines exactly one line (our own). Along a line through p in direction v, the linear term is 2pᵀQv. It vanishes exactly for the stated line, where the root is double because a nondegenerate conic contains no line. For the conic xy = 0, every noncomponent line through the crossing gives a double root there (our own).

**nLab:** [conic section](https://ncatlab.org/nlab/show/conic+section). It says: “the projective dual of p on C is its tangent line”

**Sources:** none listed. No primary source with a working link was found.

### In the projective plane, ellipse, parabola and hyperbola are one curve

**Remember:** An ellipse misses the line at infinity, a parabola touches it, a hyperbola crosses it.

*Makes the theorem clean to state or prove.* MSC 51N15 (Projective analytic geometry), 14H50. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** A real nondegenerate conic with real points consists of all projective points \[x\] satisfying xᵀQx = 0 for some fixed invertible symmetric real matrix Q. Its point set must be nonempty.

**Problem.** A projective transformation carries any non-degenerate conic in the real projective plane to any other. Once a line at infinity is chosen, the conic is an ellipse, parabola or hyperbola as it misses, touches or crosses that line.

**How the definition helps.** One homogeneous equation describes all three affine types (our own explanation). Sylvester’s law of inertia reduces each indefinite Q, up to overall sign, to the same diagonal form. Choosing the line at infinity distinguishes the types by its intersections with the conic.

**Wikipedia:** [Conic section](https://en.wikipedia.org/wiki/Conic_section). It says: “By extending the Euclidean plane to include a line at infinity, obtaining a projective plane, the apparent difference vanishes”

**Sources:** none listed. No primary source with a working link was found.

### Preserving the line at infinity characterizes affine transformations

**Remember:** Preserve the line at infinity and the remaining coordinates transform affinely.

*True by definition.* MSC 51N15 (Projective analytic geometry), 51N10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Real projective points have nonzero coordinate triples, with proportional triples representing the same point. The affine plane consists of the points \[x:y:1\], and the line at infinity consists of the points \[x:y:0\]. An invertible matrix on triples gives a projective transformation.

**Problem.** A real projective transformation preserves the line at infinity exactly when it restricts to an invertible affine map on the remaining points. Every invertible affine map arises this way.

**How the definition helps.** Preserving the line at infinity forces the last row of the matrix to be (0,0,c) with c ≠ 0 (our own). Divide by c to get a linear map plus a translation in the slice with last coordinate 1 (our own). Conversely, that same block matrix extends any invertible affine map (our own).

**Wikipedia:** [Affine transformation](https://en.wikipedia.org/wiki/Affine_transformation). It says: “the projective transformations of that projective space that leave the hyperplane at infinity invariant”

**Sources:** none listed. No primary source with a working link was found.

### Projective lines defined by subspaces always meet in a plane

**Remember:** Two distinct planes through the origin of k³ share exactly one line.

*True by definition.* MSC 51N15 (Projective analytic geometry), 51A05. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** In the projective plane over a field k, points are the one-dimensional subspaces of k³. Each two-dimensional subspace defines a line consisting of all points it contains.

**Problem.** Any two distinct lines of a projective plane over a field meet in exactly one point.

**How the definition helps.** Intersecting two projective lines amounts to intersecting their two-dimensional subspaces (our own proof). Distinct such subspaces span k³, so their intersection has dimension 2 + 2 − 3 = 1. This is exactly one projective point.

**Wikipedia:** [Projective space](https://en.wikipedia.org/wiki/Projective_space). It says: “For example, in affine geometry, two distinct lines in a plane intersect in at most one point, while, in projective geometry, they intersect in exactly one point.”

**Sources:** none listed. No primary source with a working link was found.

### Symmetric matrix polars make La Hire’s theorem a symmetry

**Remember:** Switching the two vectors does not change the symmetric form.

*True by definition.* MSC 51N15 (Projective analytic geometry), 51A50. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** Represent each real projective point by a nonzero vector up to scaling. For a conic xᵀMx = 0 with M symmetric and invertible, the polar of \[p\] is the line pᵀMx = 0.

**Problem.** La Hire’s theorem says that P lies on the polar of Q exactly when Q lies on the polar of P.

**How the definition helps.** Our own proof reduces both incidence tests to qᵀMp = pᵀMq, which holds because M is symmetric. The work is to match the matrix definition with the geometric construction. The tangent at a conic point t has equation tᵀMx = 0. Thus a tangent at t passes through p exactly when t lies on the matrix polar of p.

**Wikipedia:** [Pole and polar](https://en.wikipedia.org/wiki/Pole_and_polar). It says: “If a point P lies on the polar of a point Q, then Q lies on the polar of P. (La Hire's theorem)”

**Paper or page:** [Reciprocal Property of Pole and Polar](https://proofwiki.org/wiki/Reciprocal_Property_of_Pole_and_Polar). It says: “if P lies on the polar of Q, then Q lies on the polar of P”

**Sources:** none listed. No primary source with a working link was found.

### The cross-ratio classifies four points on a projective line

**Remember:** Fix three points and read off the fourth.

*True by definition.* MSC 51N15 (Projective analytic geometry). arXiv math.MG. Level 2: later undergraduate.

**Definition.** On a real projective line, use the unique projective map that takes the first three of four distinct points to ∞, 0, and 1. The cross-ratio of the four points in that order is the new coordinate of the fourth.

**Problem.** Two ordered quadruples of distinct points have equal cross-ratios exactly when a projective map matches them point for point.

**How the definition helps.** Two quadruples with the same cross-ratio become identical after their first three points move to ∞, 0 and 1 (our own). Follow the first map by the inverse of the second to match the quadruples. Conversely, uniqueness of the three-point map forces matching quadruples to have the same fourth coordinate. The work lies in proving that uniqueness and existence and recovering the usual formula from signed differences (our own).

**Wikipedia:** [Projective frame](https://en.wikipedia.org/wiki/Projective_frame). It says: “In the case of a projective line, a frame consists of three distinct points.”

**Sources:** none listed. No primary source with a working link was found.

### The inverse conic matrix describes all its tangents

**Remember:** Read a line’s coefficients as the coordinates of its dual point.

*Makes the theorem clean to state or prove.* MSC 51N15 (Projective analytic geometry), 51N35. arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the dual projective plane, a line with equation ℓᵀx = 0 becomes the point represented by its coefficient column ℓ. Multiplying ℓ by a nonzero number represents the same line.

**Problem.** For a real conic pᵀQp = 0 with Q symmetric and invertible, its tangent lines form the dual conic ℓᵀQ⁻¹ℓ = 0.

**How the definition helps.** The dual coordinates turn the tangent at p into the point represented by Qp (our own). Substituting p = Q⁻¹ℓ into the original equation gives the dual equation. Conversely, each solution ℓ gives a point Q⁻¹ℓ whose tangent has coefficients ℓ. The work is deriving the tangent formula by expanding the quadratic along a line through p (our own).

**Wikipedia:** [Conic section](https://en.wikipedia.org/wiki/Conic_section). It says: “Such an envelope is called a line conic (or dual conic).”

**Sources:** none listed. No primary source with a working link was found.

### The tangent completes projection from a point on a conic

**Remember:** Count the tangent as the secant whose two points coincide.

*Makes the theorem clean to state or prove.* MSC 51N15 (Projective analytic geometry). arXiv math.MG. Level 2: later undergraduate.

**Definition.** On a nondegenerate real projective conic, choose a point P. Give every other point Q the line PQ as its parameter, and give P itself the tangent at P.

**Problem.** This projection is a bijection from the conic to the lines through P.

**How the definition helps.** Every line through P has a second intersection, counting P twice for the tangent (our own). The work is restricting the quadratic to that line, where one root is known (our own). A nondegenerate conic contains no whole line, so the restricted equation is not identically zero (our own). Without the tangent parameter, the projection leaves out one line (our own).

**nLab:** [conic section](https://ncatlab.org/nlab/show/conic+section). It says: “the unique line L(p, q) incident to p and q intersects L in exactly one point”

**Sources:** none listed. No primary source with a working link was found.

### When do the three diagonal points lie on one line?

**Remember:** Pair the four points and intersect the two joining lines to get a diagonal point.

*True by definition.* MSC 51N15 (Projective analytic geometry), 51A05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Take four points in a projective plane over a field, with no three on a line. Each way of pairing the points gives two joining lines. Their intersection is a diagonal point of the four points.

**Problem.** The three diagonal points lie on one line exactly when 1 + 1 = 0 in the field.

**How the definition helps.** In coordinates adapted to the four points, the determinant testing the diagonal points for collinearity is −2 (our own). Choose three coordinate unit vectors and their sum to represent the four points. The three pairings give (1,1,0), (1,0,1) and (0,1,1). Their determinant vanishes exactly when two equals zero, as it does in the seven-point Fano plane (our own).

**nLab:** [projective plane](https://ncatlab.org/nlab/show/projective+plane). It says: “It satisfies Fano's axiom iff the characteristic of F is ≠ 2.”

**Sources:** none listed. No primary source with a working link was found.

### Quadratic equations put any five points on a projective conic

**Remember:** Five linear conditions on six coefficients leave a nonzero solution.

*True by definition.* MSC 51N35 (Questions of classical algebraic geometry), 51N15, 14N05. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** Define a projective conic by a nonzero homogeneous quadratic equation in three coordinates. Homogeneous means that every term has degree two, so rescaling the coordinates does not change the zero set. The definition allows degenerate conics, such as pairs of lines, unlike definitions that require a smooth conic.

**Problem.** Any five distinct points of the real projective plane lie on a conic. When no three are collinear, the conic is unique and nonsingular.

**How the definition helps.** Five point conditions give five homogeneous linear equations in six coefficients, so a nonzero solution exists (our own). When no three points are collinear, pair four points and multiply the equations of their two joining lines. The product vanishes at those four but misses the fifth, so each condition is independent and the solution is unique up to scale. A singular real conic lies in at most two lines, which cannot cover all five points.

**Wikipedia:** [Five points determine a conic](https://en.wikipedia.org/wiki/Five_points_determine_a_conic). It says: “Indeed, given any five points there is a conic passing through them, but if three of the points are collinear the conic will be degenerate (reducible, because it contains a line), and may not be unique”

**Sources:** none listed. No primary source with a working link was found.

### Holomorphicity excludes projective field twists

**Remember:** Holomorphic maps cannot conjugate the coordinate of a projective line.

*Rules out counterexamples.* MSC 51A10 (Homomorphism, automorphism and dualities in linear incidence geometry). arXiv math.CV. Level 3: graduate.

**Definition.** A collineation is a bijection that sends projective lines to projective lines. On complex projective space, a holomorphic collineation is also complex differentiable in local coordinates. A homography comes from an invertible complex-linear map.

**Problem.** Every holomorphic collineation of complex projective space of dimension at least two is a homography.

**How the definition helps.** Holomorphicity forces the field automorphism in the fundamental theorem of projective geometry to be the identity (our own proof). That theorem writes the map as a homography composed with a coordinatewise field automorphism. On a coordinate line the automorphism is holomorphic and fixes the rationals, so the identity theorem makes it the identity. Coordinatewise complex conjugation is the counterexample without holomorphicity (our own).

**Wikipedia:** [Homography](https://en.wikipedia.org/wiki/Homography). It says: “the composition of an automorphic collineation and a homography”

**Sources:** none listed. No primary source with a working link was found.

### Hermitian forms make Möbius maps preserve generalized circles

**Remember:** A Möbius map changes the matrix of the form and preserves its determinant sign.

*True by definition.* MSC 51B10 (Möbius geometries), 30C20. arXiv math.CV, math.MG. Level 3: graduate.

**Definition.** Represent each point of the Riemann sphere by a nonzero vector w in ℂ² up to scaling. A generalized circle is the zero set of w\*Hw for a Hermitian matrix H with negative determinant. The star denotes conjugate transpose, and Hermitian means H\* = H.

**Problem.** A Möbius map sends every generalized circle to a generalized circle.

**How the definition helps.** Substituting the inverse Möbius matrix G gives another Hermitian matrix G\*HG (our own calculation). Its determinant equals \|det G\|² det H, so it remains negative. Completing the square identifies these zero sets with circles and with lines completed by ∞.

**Wikipedia:** [Generalised circle](https://en.wikipedia.org/wiki/Generalised_circle). It says: “apply the inverse of the Möbius transformation 𝔊 = ℌ⁻¹ to the vector z in the implicit equation”

**Sources:** none listed. No primary source with a working link was found.

### Thickness excludes finite generalized pentagons

**Remember:** Thickness requires at least three neighbors at every point and every line.

*Rules out counterexamples.* MSC 51E12 (Generalized quadrangles and generalized polygons in finite geometry). arXiv math.CO. Level 3: graduate.

**Definition.** The incidence graph joins a point to a line exactly when the point lies on it. A generalized n-gon has an incidence graph of diameter n and shortest cycle length 2n. It is thick if every point lies on at least three lines and every line contains at least three points.

**Problem.** A finite thick generalized n-gon can exist only for n equal to 2, 3, 4, 6 or 8.

**How the definition helps.** Thickness rules out ordinary polygons, which would otherwise supply examples for every n ≥ 3. In our own example, the five vertices and five edges of a pentagon form an incidence cycle of length ten. Each node has only two neighbors. The restriction for thick finite polygons comes from Feit and Higman’s analysis of eigenvalues.

**Wikipedia:** [Generalized polygon](https://en.wikipedia.org/wiki/Generalized_polygon). It says: “s ≥ 2, t ≥ 2 can exist only for the following values of n: 2, 3, 4, 6 or 8.”

**Sources:**

- [Walter Feit and Graham Higman, The nonexistence of certain generalized polygons (1964)](https://doi.org/10.1016/0021-8693(64)90028-6)

### Weyl distances measure shortest galleries

**Remember:** Minimal chamber walks spell shortest reflection words.

*True by definition.* MSC 51E24 (Buildings and the geometry of diagrams). arXiv math.GR. Level 3: graduate.

**Definition.** For chambers A,B write w = δ(A,B) in a Coxeter system (W,S) with word length ℓ, requiring w = 1 exactly when A = B. For s ∈ S, each s-neighbor C of A satisfies δ(C,B) ∈ {w,sw}, necessarily sw if ℓ(sw)&gt;ℓ(w). For every A,B,s some s-neighbor C satisfies δ(C,B)=sw, where s-neighbors have Weyl distance s.

**Problem.** The shortest gallery length is the word length of the Weyl distance. Every reduced expression, meaning a shortest generator word, is realized by a gallery.

**How the definition helps.** Each gallery step changes word length by at most one, so reaching the target requires at least ℓ(w) steps (our own proof). For any reduced expression of w, the existence axiom supplies a step removing its first generator. Repeat until the distance is 1 and the target chamber is reached.

**nLab:** [building](https://ncatlab.org/nlab/show/building). It says: “If in addition l<sub>S</sub>(sw) = l<sub>S</sub>(w) + 1, then δ(C, B) = sw.”

**Sources:**

- [Jacques Tits, Twin buildings and groups of Kac-Moody type (1992)](https://doi.org/10.1017/cbo9780511629259.023)

### Cone order makes maps nonexpansive

**Remember:** A positive map preserves every comparison between scaled vectors.

*True by definition.* MSC 51F30 (Lipschitz and coarse geometry of metric spaces). arXiv math.MG. Level 3: graduate.

**Definition.** Take a closed convex cone K with nonempty interior in a finite-dimensional real vector space. Pointed means that K and its negative meet only at zero. Write v ≤ w when w − v belongs to K. For interior rays represented by v and w, Hilbert distance is log(M/m), using the least M and greatest m satisfying mw ≤ v ≤ Mw.

**Problem.** A linear map between such pointed cones cannot increase Hilbert distance if it sends the first cone into the second and interior to interior.

**How the definition helps.** In our own proof, a cone-preserving linear map preserves both scaling inequalities. The greatest lower scale can only increase, and the least upper scale can only decrease. The geometric work identifies this formula with the distance obtained from four collinear points on a bounded section of the cone.

**Wikipedia:** [Hilbert metric](https://en.wikipedia.org/wiki/Hilbert_metric). It says: “M(v/w) = inf{λ : v ≤ₖ λw}, m(v/w) = sup{μ : μw ≤ₖ v}.”

**Sources:** none listed. No primary source with a working link was found.

### Defining tight spans by minimal functions makes self-maps fixing X the identity

**Remember:** No new distance can shrink while the original distances remain fixed.

*True by definition. Confidence: medium.* MSC 51F30 (Lipschitz and coarse geometry of metric spaces), 54E35. arXiv math.MG. Level 3: graduate.

**Definition.** For a metric space (X,d), consider real functions on X satisfying f(x) + f(y) ≥ d(x,y) for every x,y. Its tight span consists of the pointwise minimal such functions, with supremum distance. Each x embeds as the function d(x,·).

**Problem.** A short map, one that does not increase distances, from the tight span to itself that fixes each point of X is the identity.

**How the definition helps.** The distance from a function f to the embedded point x is f(x) (our own argument). So a short map fixing X can only lower each value of f. Pointwise minimality then forces the image to equal f (our own). The work moves to proving this distance formula and the extension property of the function space (our own comparison).

**Wikipedia:** [Tight span](https://en.wikipedia.org/wiki/Tight_span). It says: “none of these distances can be reduced without violating the triangle inequality.”

**Sources:** none listed. No primary source with a working link was found.

### Quasi-isometry lets a group be compared with the space it acts on

**Remember:** From far away, a group looks like the space it tiles.

*Makes the theorem clean to state or prove.* MSC 51F30 (Lipschitz and coarse geometry of metric spaces), 20F65. arXiv math.MG, math.GR. Level 3: graduate.

**Definition.** A map f between metric spaces is a quasi-isometry if some constants A ≥ 1 and B ≥ 0 satisfy two conditions. For all x,y in the domain, d(x,y)/A − B ≤ d(f(x),f(y)) ≤ A·d(x,y) + B. Every target point lies within B of some image point.

**Problem.** Švarc–Milnor lemma: let G act by isometries on a proper geodesic space X, properly discontinuously and with compact quotient. Then G is finitely generated and quasi-isometric to X.

**How the definition helps.** The bounded error lets the orbit map compare a word metric on G with distance in X (our own explanation). Compact quotient puts every point within bounded distance of an orbit. The Švarc–Milnor lemma supplies finite generation and the two distance bounds.

**Wikipedia:** [Quasi-isometry](https://en.wikipedia.org/wiki/Quasi-isometry), [Hyperbolic group](https://en.wikipedia.org/wiki/Hyperbolic_group). It says: “More generally, the Švarc–Milnor lemma states that if a group G acts properly discontinuously with compact quotient on a proper geodesic space X then G is quasi-isometric to X (meaning that any Cayley graph for G is).”

**Sources:**

- [J. Milnor, A note on curvature and fundamental group, Journal of Differential Geometry 2 (1968) 1–7](https://doi.org/10.4310/jdg/1214501132)

### Flat comparisons force inner products

**Remember:** Euclidean midpoint comparison leaves no room for a non-Euclidean norm.

*Makes the theorem clean to state or prove.* MSC 51F99 (Metric geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A geodesic metric space is CAT(0) if every geodesic triangle satisfies Euclidean comparison. Distances between any two side points cannot exceed distances between their counterparts in the Euclidean triangle with matching side lengths. Corresponding points have the same distances along corresponding sides from matching endpoints.

**Problem.** If a real normed vector space with its norm distance is CAT(0), its norm comes from an inner product.

**How the definition helps.** Euclidean comparison at the midpoint of \[x,y\], with third vertex 0, gives ‖x+y‖² + ‖x−y‖² ≤ 2‖x‖² + 2‖y‖² (our own proof). Substituting x+y and x−y gives the reverse inequality. The resulting parallelogram identity gives an inner product by the Jordan–von Neumann theorem.

**Wikipedia:** [CAT(k) space](https://en.wikipedia.org/wiki/CAT%28k%29_space). It says: “if a real normed vector space is a CAT(k) space for some real k, then it is an inner product space.”

**Sources:**

- [P. Jordan and J. von Neumann, On Inner Products in Linear, Metric Spaces (1935)](https://doi.org/10.2307/1968653)

### Hyperconvexity aligns Čech and Rips

**Remember:** Hyperconvexity turns pairwise distance bounds into a common point.

*Rules out counterexamples.* MSC 51F99 (Metric geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A metric space is hyperconvex if every family of closed balls has a common point whenever d(xᵢ,xⱼ) ≤ rᵢ + rⱼ for every pair. Here xᵢ and rᵢ denote centers and radii. At scale r, Rips faces require pairwise distances ≤ r, while Čech faces require a common point in the ambient closed balls of radius r/2.

**Problem.** At every scale r ≥ 0, any finite set of sites in a hyperconvex space has identical Rips and Čech complexes.

**How the definition helps.** Hyperconvexity turns the pairwise bounds for a Rips face into the common point required for a Čech face. Our own reverse argument uses the triangle inequality through that common point. Without hyperconvexity, the three vertices of a Euclidean equilateral triangle of side r &gt; 0 give a Rips face. Their closed balls of radius r/2 have no common point.

**Paper or page:** [Geometry of Data](https://arxiv.org/abs/2203.07208v1). It says: “In a hyperconvex space, all simplices that are filled in the Vietoris-Rips complex are also filled in the Čech complex.”

**Sources:**

- [Geometry of Data, Lemma 5.1](https://arxiv.org/abs/2203.07208v1)
- [N. Aronszajn and P. Panitchpakdi, Extension of uniformly continuous transformations and hyperconvex metric spaces (1956)](https://doi.org/10.2140/pjm.1956.6.405)

### Local compactness saves shortest paths

**Remember:** Compactness keeps a minimizing sequence from escaping.

*Rules out counterexamples.* MSC 51F99 (Metric geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A length space measures distance by the infimum of lengths of paths joining two points. A space is locally compact if each point has a compact neighborhood.

**Problem.** Every pair of points in a complete, locally compact length space has a shortest path.

**How the definition helps.** Local compactness traps paths that approach the minimum length in a compact ball, so a limit path exists (our own explanation). Metric Hopf–Rinow supplies compact closed balls and shortest paths. Without local compactness, join two vertices by edges of lengths 1 + 1/n for every positive integer n (our own example). This space is complete, the vertices are at distance one, and every joining path is longer.

**Paper or page:** [A Gentle Introduction to CAT(0) Spaces](https://arxiv.org/abs/2406.09883v1). It says: “If (X,d) is complete and locally compact, then”

**Sources:** none listed. No primary source with a working link was found.

### Simple connectedness excludes flat cylinders

**Remember:** Contract every loop so comparison on the universal cover holds downstairs.

*Rules out counterexamples.* MSC 51F99 (Metric geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A CAT(0) space has shortest paths between all pairs of points. Distances between points on triangle sides never exceed corresponding distances in a Euclidean triangle with the same side lengths. Locally CAT(0) means that this comparison holds in a neighborhood of every point. A simply connected space is path connected and every loop contracts to a point.

**Problem.** A complete, simply connected, locally CAT(0) length space is CAT(0) everywhere.

**How the definition helps.** Simple connectedness identifies the space with its universal cover, where the metric Cartan–Hadamard theorem gives global comparison. On a flat cylinder, opposite points on a circular cross section admit two shortest paths (our own example). CAT(0) comparison requires uniqueness, so the cylinder fails global comparison.

**Paper or page:** [A Gentle Introduction to CAT(0) Spaces](https://arxiv.org/abs/2406.09883v1). It says: “then (X̃,d̃) is a (globally) CAT(0) space.”

**Sources:** none listed. No primary source with a working link was found.

### Correspondences control diameters

**Remember:** Matching distances cannot change the largest distance by more than the matching error.

*True by definition.* MSC 51K05 (General theory of distance geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A correspondence R between nonempty compact metric spaces X,Y is a subset of X × Y projecting onto both spaces. Its distortion is the supremum of \|d(x,x′) − d(y,y′)\| over all (x,y),(x′,y′) in R. Their Gromov–Hausdorff distance is half the infimum of distortion over all correspondences.

**Problem.** The diameters of two nonempty compact metric spaces differ by at most twice their Gromov–Hausdorff distance.

**How the definition helps.** In our own proof, a correspondence compares every distance in either space with a distance in the other. Taking suprema shows that the diameters differ by at most the distortion. Taking the infimum gives twice the Gromov–Hausdorff distance. The correspondence formula supplies the link to the definition using embeddings.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “in fact, diam Xₖ → diam Y”

**Sources:** none listed. No primary source with a working link was found.

### Uniform covers give convergent subsequences

**Remember:** Bound every diameter and bound the number of covering balls at each radius.

*Rules out counterexamples.* MSC 51K05 (General theory of distance geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A family of metric spaces is uniformly totally bounded if its diameters have a common finite bound and the following covering condition holds. For every ε &gt; 0 there is a finite N such that each member admits a cover by at most N balls of radius ε.

**Problem.** A uniformly totally bounded family of nonempty compact metric spaces has compact closure for Gromov–Hausdorff distance.

**How the definition helps.** At each radius, the centers approximate each member by a set of uniformly bounded size (our own explanation). Gromov’s compactness theorem gives total boundedness, and completeness gives compact closure. Finite spaces with all distinct points distance one have bounded diameter but no convergent subsequence as their sizes increase (our own example).

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “There is a number D ≥ 0 and a function N : (0,∞) → ℕ such that for all X ∈ 𝒞 we have diam X ≤ D and cov(X,ε) ≤ N(ε).”

**Sources:** none listed. No primary source with a working link was found.

### Stating geometry in first-order logic makes it decidable

**Remember:** Quantify over points and use only betweenness and equal distances.

*Makes the theorem clean to state or prove.* MSC 51M05 (Euclidean geometries (general) and generalizations), 03C10, 03B25. arXiv math.LO, math.MG. Level 3: graduate.

**Definition.** Tarski defined elementary Euclidean geometry as what can be said in first-order logic about points, with only betweenness and equal distance as basic relations. Continuity is an axiom schema about first-order definable sets, not about all sets.

**Problem.** Tarski's elementary Euclidean geometry is consistent, complete and decidable. An algorithm decides, for every statement, whether it is provable or refutable.

**How the definition helps.** Coordinates translate first-order betweenness and equal distance into ordered field formulas (our own explanation). The real plane supplies a model, giving consistency. Tarski’s coordinatization and quantifier elimination for real closed fields give completeness and a decision procedure.

**Wikipedia:** [Tarski's axioms](https://en.wikipedia.org/wiki/Tarski%27s_axioms). It says: “Using his axiom system, Tarski was able to show that the first-order theory of Euclidean geometry is consistent, complete and decidable”

**Sources:**

- [A. Tarski and S. Givant, Tarski's system of geometry, Bulletin of Symbolic Logic 5 (1999) 175–214](https://doi.org/10.2307/421089)

### Defining distance by the Minkowski form makes Lorentz maps isometries

**Remember:** Any map that preserves the Minkowski form preserves the distance it defines.

*True by definition.* MSC 51M10 (Hyperbolic and elliptic geometries (general) and generalizations), 22E43. arXiv math.MG, math.DG. Level 3: graduate.

**Definition.** On ℝⁿ⁺¹ use the Minkowski form B(u, v) = −u₀v₀ + u₁v₁ + ⋯ + uₙvₙ. Use the sheet B(x, x) = −1 with x₀ &gt; 0 as hyperbolic space. Define d(u, v) = arcosh(−B(u, v)), where arcosh is the inverse hyperbolic cosine.

**Problem.** Every linear map that preserves B and the chosen sheet preserves all hyperbolic distances on that sheet.

**How the definition helps.** The distance depends only on B, which these linear maps preserve. Another definition measures the shortest path using the restriction of B to tangent vectors, which is positive definite. Our own comparison puts the work into proving the distance formula from that path definition. One must also identify the resulting metric as the standard metric of curvature −1.

**Wikipedia:** [Hyperboloid model](https://en.wikipedia.org/wiki/Hyperboloid_model). It says: “which acts on S⁺ by linear automorphisms and preserves the hyperbolic distance.”

**Sources:** none listed. No primary source with a working link was found.

### Buekenhout's projective lines take the central collineations as given data

**Remember:** A line has no incidence structure, so give it its symmetries as data.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51M35. arXiv math.MG. Level 4: research.

**Definition.** Fix a projective line ℓ in Buekenhout’s sense, with its prescribed permutation groups Λ(p,q). It is Desarguesian if, for each pair (p,q), every two points outside {p,q} are related by some element of Λ(p,q).

**Problem.** Every Desarguesian projective line in Buekenhout's sense comes from a division ring. So it embeds in a Desarguesian projective plane.

**How the definition helps.** The given permutation groups let transitivity express the Desarguesian condition on the line alone (our own explanation). Buekenhout’s coordinatization theorem supplies the division ring and hence the embedding.

**nLab:** [projective line](https://ncatlab.org/nlab/show/projective+line). It says: “Conversely, every Desarguesian projective line arises from a division ring in this way.”

**Sources:**

- [Francis Buekenhout, Foundations of one dimensional projective geometry based on perspectivities, Abh. Math. Sem. Univ. Hamburg 43 (1975) 21–29](https://doi.org/10.1007/BF02995931)

### Coarse amenability at infinity of box spaces characterizes coarsely amenable groups

**Remember:** Ask box spaces only for local estimates far out.

*Makes the theorem clean to state or prove.* MSC 51F30 (Lipschitz and coarse geometry of metric spaces), 20F69, 20E26. arXiv math.GR, math.MG. Level 4: research.

**Definition.** Coarse amenability at infinity requires, for every R,ε &gt; 0, some S &gt; 0 such that every diameter bound L &gt; 0 admits a finite exceptional set K. Each finite subset outside K of diameter ≤ L must admit probability measures μₓ on that subset, one for each member x. Each μₓ is supported within S of x, and ‖μₓ−μᵧ‖₁ ≤ ε whenever d(x,y) ≤ R.

**Problem.** Let G be finitely generated and residually finite, meaning its finite quotients separate its elements. Then G is coarsely amenable exactly when one box space, or equivalently every box space, is coarsely amenable at infinity.

**How the definition helps.** Each bounded region sufficiently far out in a box space lifts isometrically to the group (our own explanation). The order of the quantifiers allows the finite exceptions to depend on the region’s diameter. The box-space characterization theorem transfers the uniform estimates in both directions.

**Paper or page:** [Coarse amenability at infinity](https://arxiv.org/abs/1812.11745v1). It says: “All (or equivalently one) box spaces of G are coarsely amenable at infinity.”

**Sources:**

- [Thibault Pillon, Coarse amenability at infinity, arXiv:1812.11745v1 (2018)](https://arxiv.org/abs/1812.11745v1)

### Equilateral comparisons detect diameter partitions

**Remember:** Points matched to one vertex must fit into one small piece.

*Makes the theorem clean to state or prove.* MSC 51K05 (General theory of distance geometry), 52A37. arXiv math.MG. Level 4: research.

**Definition.** A correspondence pairs points of two spaces so every point has a partner. Its distortion is the supremum of the absolute changes in pairwise distance. Gromov–Hausdorff distance is half the infimum of these distortions. An equilateral space has the same distance λ between any two distinct points.

**Problem.** Let X have finite diameter D and at least m points, with m an integer ≥ 2 and 0 &lt; λ &lt; D. Write E for the m-point equilateral space of distance λ. Then X partitions into m pieces of diameter below D exactly when its Gromov–Hausdorff distance to E is below D/2.

**How the definition helps.** Distortion below D makes each label’s fiber have diameter below D, since within-fiber distances are bounded by the distortion (our own proof). Assign each point one of its labels, discard empty pieces, and split pieces until there are m, possible since \|X\| ≥ m. Conversely, label a partition by its pieces. Within-piece errors have maximum below D, and between-piece errors are at most max(λ, D − λ) &lt; D.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “then X can be partitioned into m subsets having strictly smaller diameters if and only if”

**Sources:** none listed. No primary source with a working link was found.

### Densities make Euler's formula hold for star polyhedra

**Remember:** Count each pentagram twice, because it goes around twice.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51M20 (Polyhedra and polytopes; regular figures, division of spaces), 55M25. arXiv math.MG. Level 4: research.

**Definition.** For a regular polyhedron, the density of a face or vertex figure is its unsigned winding number about its center. The solid’s density counts sheets above a generic point of its circumscribed sphere under radial projection, counting overlapping face regions with multiplicity.

**Problem.** Cayley's formula d<sub>v</sub>·V − E + d<sub>f</sub>·F = 2D holds for all nine regular polyhedra, convex and star. Here d<sub>v</sub> is the vertex-figure density and d<sub>f</sub> is the face density.

**How the definition helps.** Cayley’s generalized Euler formula weights faces and vertices by winding number and uses the covering multiplicity on the right. For the small stellated dodecahedron this gives 12 − 30 + 2·12 = 6 = 2·3 (our own check). For convex regular polyhedra all densities equal one, giving Euler’s formula.

**Wikipedia:** [Kepler–Poinsot polyhedron](https://en.wikipedia.org/wiki/Kepler%E2%80%93Poinsot_polyhedron), [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “This version holds both for convex polyhedra (where the densities are all 1) and the non-convex Kepler–Poinsot polyhedra.”

**Sources:**

- [A. Cayley, On Poinsot's four new regular solids, Philosophical Magazine 17 (1859) 123–128](https://doi.org/10.1080/14786445908642635)
