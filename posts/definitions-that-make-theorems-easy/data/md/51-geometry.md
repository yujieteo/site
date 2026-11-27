### Inversion preserves unsigned angles

**Remember:** Inversion reflects and scales tangent directions without changing the size of their angles.

*True by definition.* MSC 51B10 (Möbius geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** In the Euclidean plane, inversion in the unit circle sends each nonzero vector x to x/‖x‖². Geometrically, its image lies on the same ray at the reciprocal distance from the origin.

**Problem.** When two differentiable plane curves meet away from the origin with nonzero velocities, inversion preserves their unsigned angle and reverses their oriented angle.

**How the definition helps.** The derivative of inversion is a positive stretch times a reflection, so it keeps angle sizes and reverses orientation (our own calculation). Differentiating x/‖x‖² shows that it negates the radial part of a tangent vector and keeps the perpendicular part, then scales both by 1/‖x‖² (our own). This replaces a geometric angle chase by a derivative check (our own comparison).

**Wikipedia:** [Inversive geometry](https://en.wikipedia.org/wiki/Inversive_geometry). It says: “The circle inversion map is anticonformal, which means that at every point it preserves angles and reverses orientation”

**Sources:** none listed. No primary source with a working link was found.

### Cyclic order fixes Ptolemy’s diagonals

**Remember:** Walk around the circle before you name the diagonals.

*Rules out counterexamples.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** A cyclic quadrilateral has four distinct vertices on a circle. Name them in order around the circle so that AC and BD join opposite vertices.

**Problem.** For cyclic order A, B, C, D, the lengths obey AC × BD = AB × CD + BC × DA.

**How the definition helps.** Cyclic order tells us which product belongs alone in Ptolemy’s equality. In our own counterexample, put A and B at the lower corners of a unit square. Put C directly above A and D directly above B. Then AC × BD is 1, but AB × CD + BC × DA is 3. The usual proof for vertices in cyclic order uses similar triangles.

**Paper or page:** [Some Polynomial Conditions of Cyclic Quadrilaterals, Tilted Kites and Other Quadrilaterals](https://arxiv.org/abs/2302.10071v1). It says: “Let A, B, C, D be four points lying in counterclockwise or clockwise order on a circle, then P = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Defining angles by the dot product makes the law of cosines algebra

**Remember:** Expand the square of a difference, and the cosine term appears.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 15A63. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** The dot product u·v is the sum of the products of matching coordinates, and \|u\| = √(u·u) is the length of u. For nonzero u and v, define θ between 0 and π by cos θ = u·v / (\|u\|\|v\|). The Cauchy–Schwarz inequality \|u·v\| ≤ \|u\|\|v\| puts the quotient in the range of cosine on that interval.

**Problem.** In a triangle with sides a, b and c, let C be the angle between the sides of lengths a and b. Then c² = a² + b² − 2ab cos C.

**How the definition helps.** The dot-product definition makes the cosine term appear when you expand the square of the third side. If u and v are the two sides from the same vertex, the third side has squared length (u − v)·(u − v). Expanding gives \|u\|² + \|v\|² − 2u·v, and substituting u·v = \|u\|\|v\| cos C gives the law. The classical angle gives a different starting point, and one proof drops a perpendicular and uses the Pythagorean theorem (our own comparison). The work moves into the Cauchy–Schwarz inequality and showing that the dot-product angle matches the geometric angle.

**Wikipedia:** [Dot product](https://en.wikipedia.org/wiki/Dot_product), [Law of cosines](https://en.wikipedia.org/wiki/Law_of_cosines). It says: “In such a presentation, the notions of length and angle are defined by means of the dot product.”

**Paper or page:** [Law of Cosines](https://proofwiki.org/wiki/Law_of_Cosines). It says: “Then: c² = a² + b² − 2 a b cos C”

**Sources:** none listed. No primary source with a working link was found.

### Equiangularity makes regular polygons cyclic

**Remember:** Equal edges and equal turns close on a circle.

*Rules out counterexamples.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Define a regular convex polygon to have equal sides and equal angles. Equal side lengths alone define an equilateral polygon.

**Problem.** The vertices of a regular convex polygon lie on a single circle.

**How the definition helps.** Equal angles give equal turns, so one rotation carries every edge to the next in our own proof. Choose the rotation through the exterior angle that takes the first vertex to the second. Equal turns give the next edge direction, and equal lengths give its endpoint. Repeating this argument puts every vertex at the same distance from the rotation center. A rhombus with opposite angles of 60° has equal sides but cannot be cyclic because those angles do not sum to 180°.

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

**Remember:** With signs, Menelaus gives −1 and Ceva gives +1.

*Makes the theorem clean to state or prove.* MSC 51M04 (Elementary problems in Euclidean geometries), 51A20. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Fix a direction on a line. A signed length between two points on the line is positive when it goes in that direction, and negative when it goes the other way.

**Problem.** Let D, E, F lie on the side lines BC, CA, AB of triangle ABC, away from the vertices. They are collinear if and only if (AF/FB)(BD/DC)(CE/EA) = −1, with signed lengths.

**How the definition helps.** Signs separate the Menelaus case from the Ceva case, so the converse becomes true. With unsigned lengths the product is 1, but the converse is false: some non-collinear points also give product 1. With signs, collinear points give −1. Points whose lines to the opposite vertices meet in one point give +1, which is Ceva's theorem. The article adds that, when you write the two theorems with cross-ratios, they are projective duals.

**Wikipedia:** [Menelaus's theorem](https://en.wikipedia.org/wiki/Menelaus%27s_theorem). It says: “Note that the converse of the weaker, unsigned statement is not necessarily true.”

**Sources:**

- [J. Benítez, A unified proof of Ceva and Menelaus' theorems using projective geometry, Journal for Geometry and Graphics 11 (2007) 39–44](https://www.heldermann-verlag.de/jgg/jgg11/j11h1beni.pdf)

### The signed power of a point unifies secants and chords

**Remember:** Outside, the power is the squared tangent length; inside, it is negative.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Let a circle have centre O and radius r. The power of a point P with respect to the circle is Π(P) = \|PO\|² − r², the squared distance to the centre minus the squared radius. It is positive outside the circle, zero on it and negative inside.

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

**How the definition helps.** Our own proof groups the vertex average into the formula G = ⅓A + ⅔·(B + C)/2. Thus G lies two thirds of the way along the median from A. The same grouping works for the other two medians. The average does not depend on the chosen origin because its weights sum to 1. Unlike the intersection definition, the vertex average gives a point before we prove that the medians meet.

**Wikipedia:** [Centroid](https://en.wikipedia.org/wiki/Centroid). It says: “The centroid divides each of the medians in the ratio 2:1, which is to say it is located ⅓ of the distance from each side to the opposite vertex”

**Paper or page:** [Medians of Triangle Meet at Centroid](https://proofwiki.org/wiki/Medians_of_Triangle_Meet_at_Centroid). It says: “Then the medians of △ABC meet at a single point.”

**Sources:** none listed. No primary source with a working link was found.

### Triangle weights cancel in Ceva’s theorem

**Remember:** Multiply around the triangle and every weight cancels.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries), 51N10. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Write an interior point as a weighted average of the three vertices with positive weights summing to one. These are barycentric coordinates. Ordinary Cartesian coordinates do not single out the triangle's sides.

**Problem.** Join each vertex of a triangle to a point inside its opposite side. The three lines meet exactly when the three ratios of side segments, taken in cyclic order, multiply to one.

**How the definition helps.** In barycentric coordinates, each side ratio is a quotient of vertex weights, so the cyclic product cancels (our own). For weights a, b, c at vertices A, B, C, the line from A meets BC at L with BL/LC = c/b (our own). This follows by normalizing the weights b and c to sum to one on BC (our own). Conversely, two prescribed ratios determine positive weights up to scale, and product one forces the third ratio (our own). Normalizing the weights gives the common point (our own).

**Paper or page:** [Ceva's Theorem](https://proofwiki.org/wiki/Ceva's_Theorem). It says: “BL/LC × CM/MA × AN/NB = 1”

**Sources:** none listed. No primary source with a working link was found.

### Vector sums fix Euler’s ratio

**Remember:** The orthocenter is the vertex sum, and the centroid is its third.

*True by definition.* MSC 51M04 (Elementary problems in Euclidean geometries). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Place the origin at the circumcenter, the point equally distant from the three vertices. Define the orthocenter by the sum of the three vertex vectors. Its usual definition uses the intersection of the three altitudes.

**Problem.** In a nonequilateral triangle, the centroid is a third of the way from the circumcenter to the orthocenter.

**How the definition helps.** In our own proof, the centroid is the vertex average, exactly one third of the vertex sum. To verify the orthocenter formula, call the vertex vectors a, b and c. The displacement from a to the sum is b + c. Its dot product with b − c vanishes because b and c have equal length. Thus the sum lies on the altitude from a, and the same argument works at the other vertices.

**Paper or page:** [Position of Centroid on Euler Line](https://proofwiki.org/wiki/Position_of_Centroid_on_Euler_Line). It says: “OG : GH = 1 : 2”

**Sources:** none listed. No primary source with a working link was found.

### Congruence by isometries preserves corresponding measurements

**Remember:** A motion that keeps distances keeps everything built from distances.

*True by definition.* MSC 51M05 (Euclidean geometries (general) and generalizations), 97G40. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** Two labelled triangles are congruent if a distance-preserving map of the plane, called an isometry, takes each vertex to its matching vertex. Another definition lists equality of all corresponding sides and angles.

**Problem.** Congruent triangles have equal corresponding side lengths, median lengths, and angles. They also have equal perimeters and areas.

**How the definition helps.** The isometry definition gives all corresponding distances at once, not just the sides named in the usual definition. Isometries preserve midpoints, so they carry each median to its matching median (our own explanation). Perimeters are sums of the side lengths. Angles and areas are also preserved because plane isometries are compositions of translations, rotations, and reflections. The work moves into proving those preservation facts and proving that equality of corresponding sides is enough to build an isometry (our own comparison).

**Wikipedia:** [Congruence (geometry)](https://en.wikipedia.org/wiki/Congruence_%28geometry%29). It says: “In this sense, the sentence "two plane figures are congruent" implies that their corresponding characteristics are congruent (or equal) including not just their corresponding sides and angles, but also their corresponding diagonals, perimeters, and areas.”

**Sources:** none listed. No primary source with a working link was found.

### Exactly five convex solids have equal regular faces and equal corners

**Remember:** Same faces, same corners, no dents.

*Rules out counterexamples.* MSC 51M20 (Polyhedra and polytopes; regular figures, division of spaces), 52B15. arXiv math.MG. Level 1: early undergraduate.

**Definition.** In the Greek sense, a regular polyhedron is a convex solid with two more properties. Its faces are congruent regular polygons. The same number of faces meet at every vertex, arranged in the same way.

**Problem.** There are exactly five regular polyhedra, the Platonic solids.

**How the definition helps.** Each condition in the definition removes solids that would change the count, and what is left is a short argument about angles. The condition on faces rules out the square pyramid. The condition on vertices rules out the triangular bipyramid, whose faces are all equal triangles. Convexity rules out the four Kepler–Poinsot star polyhedra, which meet the other conditions; with them the count is nine. Our own summary of the classical proof: with the full definition, at least three faces meet at each vertex, and their angles must add up to less than 360°. This leaves only five choices of face and number of faces at a vertex.

**Wikipedia:** [Regular polyhedron](https://en.wikipedia.org/wiki/Regular_polyhedron). It says: “This definition rules out, for example, the square pyramid (since although all the faces are regular, the square base is not congruent to the triangular sides), or the shape formed by joining two tetrahedra together”

**Sources:** none listed. No primary source with a working link was found.

### Simple polygons have angle sum 2π and n − 2 triangles

**Remember:** A simple polygon turns around exactly once.

*Rules out counterexamples. Confidence: medium.* MSC 51M20 (Polyhedra and polytopes; regular figures, division of spaces), 51M04. arXiv math.MG, cs.CG. Level 1: early undergraduate.

**Definition.** A simple polygon is a closed chain of finitely many line segments that does not cross or touch itself. In other words, it is a Jordan curve made of line segments.

**Problem.** The external angles of a simple n-gon add up to 2π. Its n − 3 diagonals can cut it into n − 2 triangles.

**How the definition helps.** The definition excludes polygons that cross themselves, and these break both statements. A pentagram turns around twice, so its external angles add up to 4π (our own example). For simple polygons, the two ears theorem gives the triangulation: cut off one ear, a triangle of three consecutive vertices inside the polygon, at a time.

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

**Definition.** For a point P and a nondegenerate triangle ABC, define the weight at A as the signed area of PBC divided by the signed area of ABC. Define the other two weights by cycling the letters. Signed area is positive for counterclockwise order and negative for clockwise order.

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

**How the definition helps.** The coordinate definition gives every circle the same quadratic terms, so subtracting two circle equations cancels them. Distinct circles with the same center have different radii and cannot meet (our own). Otherwise the difference is a line containing all the common points, and on that line a circle equation is a quadratic with at most two roots (our own). The Pythagorean theorem matches the coordinate definition with the distance definition.

**Paper or page:** [An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406). It says: “Distinct circles have at most two points in common.”

**Sources:**

- [Peter M Johnson, An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406)

### Focal distances explain parabolic reflection

**Remember:** Equal distances give a mirror line.

*Makes the theorem clean to state or prove.* MSC 51N20 (Euclidean analytic geometry). arXiv math.MG. Level 1: early undergraduate.

**Definition.** Define a parabola as the points equidistant from a fixed focus and a fixed line called the directrix. The focus must not be on the line. Another definition cuts a cone with a plane parallel to a side of the cone.

**Problem.** A ray travelling parallel to the axis toward a parabola from its open side reflects through the focus.

**How the definition helps.** Equal distances to the focus and the directrix give the mirror line (our own). Let H be the foot of the perpendicular from the contact point to the directrix. Every point of the parabola is at least as close to the focus as to H, with equality only at the contact point, so the perpendicular bisector of H and the focus is the tangent (our own). Reflection in this tangent exchanges the directions toward H and toward the focus (our own).

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

**How the definition helps.** A frame gives every point one coordinate pair, so matching frames gives a candidate motion: send each point to the point with the same coordinates in the other frame (our own). The distance formula shows that this map preserves distances. Any other motion must agree on the origin and the two unit endpoints, and distances to these three points fix both coordinates. This replaces physical superposition with the Pythagorean distance formula.

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

**Definition.** The theorem is stated in the real projective plane. This is the Euclidean plane with one point at infinity added for each direction of lines. Parallel lines meet at the point at infinity for their direction.

**Problem.** Desargues's theorem: if the three lines joining corresponding corners of two triangles meet in one point, then the three pairs of corresponding sides meet in three points on one line.

**How the definition helps.** In the projective plane every pair of lines meets, so one statement covers all cases. In the Euclidean plane, corresponding sides may be parallel, and the statement needs a list of special cases. The theorem does not hold in every abstract projective plane; it fails in the Moulton plane (our own example).

**Wikipedia:** [Desargues's theorem](https://en.wikipedia.org/wiki/Desargues%27s_theorem). It says: “Commonly, to remove these exceptions, mathematicians "complete" the Euclidean plane by adding points at infinity, following Jean-Victor Poncelet.”

**Sources:** none listed. No primary source with a working link was found.

### In the projective plane, Pascal's theorem needs no special cases

**Remember:** On the projective plane, the Pascal line always exists, even if it is at infinity.

*Makes the theorem clean to state or prove.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51A20, 14H50. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** State the theorem in the projective plane: the plane with a line at infinity added, so that any two lines meet. Parallel lines meet at infinity.

**Problem.** Pascal's theorem: take six points on a conic and join them into a hexagon. The three points where opposite sides meet lie on one line, the Pascal line.

**How the definition helps.** In the projective plane, opposite sides always meet, so one statement covers every case. In the Euclidean plane, if one pair of opposite sides is parallel, the Pascal line must be stated as parallel to them. If two pairs are parallel, the third pair is too, and the Pascal line is the line at infinity. If the conic may be a pair of lines, Pappus's hexagon theorem becomes a special case.

**Wikipedia:** [Pascal's theorem](https://en.wikipedia.org/wiki/Pascal%27s_theorem). It says: “The most natural setting for Pascal's theorem is in a projective plane since any two lines meet and no exceptions need to be made for parallel lines.”

**Sources:** none listed. No primary source with a working link was found.

### Projective planes make the duality of points and lines a theorem

**Remember:** Points and lines obey the same rules, so you can swap the words.

*True by definition.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51A10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A projective plane is a set of points and lines with three axioms. Any two distinct points lie on exactly one line. Any two distinct lines meet in exactly one point. Some four points have no three on one line.

**Problem.** The principle of duality: suppose a statement about points, lines and incidence holds in every projective plane. Then the statement with the words 'point' and 'line' exchanged also holds.

**How the definition helps.** The axioms treat points and lines the same way, so exchanging the words turns a proof into a proof. The second axiom is the dual of the first, and the dual of the third axiom is a theorem. So the dual of any projective plane is again a projective plane. The duality is between a plane and its dual, and some non-Desarguesian planes are not isomorphic to their duals.

**Wikipedia:** [Projective plane](https://en.wikipedia.org/wiki/Projective_plane). It says: “Thus any two distinct lines in a projective plane intersect at exactly one point.”

**Sources:** none listed. No primary source with a working link was found.

### Ruling out degenerate projective planes gives every line the same size

**Remember:** Four points, no three on a line, rule out the lopsided planes.

*Rules out counterexamples. Confidence: medium.* MSC 51A05 (General theory of linear incidence geometry and projective geometries), 51E15. arXiv math.MG, math.CO. Level 2: later undergraduate.

**Definition.** A projective plane is a set of points and lines with three axioms. Any two distinct points lie on exactly one line. Any two distinct lines meet in exactly one point. There are four points, no three of which lie on one line.

**Problem.** In a projective plane, every line has the same number s + 1 of points, and every point lies on s + 1 lines. The number s is the order of the plane. A finite plane has s² + s + 1 points.

**How the definition helps.** The four-point axiom removes the degenerate planes, where lines can have different sizes. One of these is the near-pencil: a point P off a line m, with lines through P to the points of m. There m can have many points while the other lines have two, so there is no single order (our own reading). With the four-point axiom, a short argument shows that all lines have the same size.

**Wikipedia:** [Projective plane](https://en.wikipedia.org/wiki/Projective_plane). It says: “The last condition excludes the so-called degenerate cases”

**Sources:** none listed. No primary source with a working link was found.

### The quadrangle definition makes collineations preserve harmonic quadruples

**Remember:** Any map that keeps lines and their intersections also keeps a quadrangle construction.

*True by definition.* MSC 51A20 (Configuration theorems in linear incidence geometry), 51A30, 51N15. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Work in a projective plane over a field with 1 + 1 ≠ 0. Call (A, B, C, D) harmonic if some complete quadrangle has two pairs of opposite sides meeting at A and B, and its last pair meeting line AB at C and D. The other definition asks for cross-ratio −1.

**Problem.** A collineation is a bijection of the plane that maps lines to lines. Every collineation preserves harmonic quadruples.

**How the definition helps.** The quadrangle definition uses only joins and intersections, so a collineation carries each witnessing quadrangle to another one (our own). The work is showing that A, B and C give the same D for every allowed quadrangle. In coordinates this also matches the fourth point with cross-ratio −1.

**Wikipedia:** [Projective harmonic conjugate](https://en.wikipedia.org/wiki/Projective_harmonic_conjugate). It says: “The point D does not depend on what point L is taken initially, nor upon what line through C is used to find M and N. This fact follows from Desargues theorem.”

**Sources:** none listed. No primary source with a working link was found.

### Counting lines as circles removes the exceptions in inversion

**Remember:** A line is a circle of infinite radius that passes through infinity.

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

**How the definition helps.** The Möbius-image definition reduces the test to membership in the extended real line. Three points determine a unique generalized circle, since a real Möbius map can send any three distinct extended real points to 0, 1 and ∞. Thus the normalizing map sends that circle to the extended real line. The fourth image is not ∞ and is the cross-ratio. Our own proof uses the equivalence between the Möbius-image definition and the description by circles and lines.

**nLab:** [Moebius transformation](https://ncatlab.org/nlab/show/Moebius+transformation). It says: “it turns out that the cross-ratio of a 4-tuple is a real number if and only if the four points lie on a circle (or a line which is a circle passing through ∞).”

**Wikipedia:** [Cross-ratio](https://en.wikipedia.org/wiki/Cross-ratio). It says: “Being on a circle means the four points are the image of four real points under a Möbius transformation, and hence the cross ratio is a real number.”

**Sources:** none listed. No primary source with a working link was found.

### Normalizing three points makes the cross-ratio Möbius invariant

**Remember:** Normalize three points, then read off the fourth.

*True by definition.* MSC 51B10 (Möbius geometries), 30C20. arXiv math.CV, math.MG. Level 2: later undergraduate.

**Definition.** Send three distinct points to 0, 1 and ∞ by the unique Möbius map that does this. Define their cross-ratio with a fourth distinct point as the image of the fourth point. The formula definition instead uses a quotient of products of differences.

**Problem.** Möbius maps preserve the cross-ratio.

**How the definition helps.** The normalization definition makes invariance a consequence of uniqueness. After applying a Möbius map M, precompose the original normalization with M⁻¹. The fourth point then has the same image. This is our own argument. The work is in proving that three-point normalization exists and is unique and that it gives the usual formula.

**nLab:** [Moebius transformation](https://ncatlab.org/nlab/show/Moebius+transformation). It says: “This motivates the following definition: given a 4-tuple (a, b, c, d) of distinct points in ℙ¹(k), its cross-ratio is”

**Wikipedia:** [Cross-ratio](https://en.wikipedia.org/wiki/Cross-ratio). It says: “The action of the Möbius group is simply transitive on the set of triples of distinct points of the Riemann sphere”

**Sources:** none listed. No primary source with a working link was found.

### Absolute geometry proves once what holds in Euclidean and hyperbolic planes

**Remember:** Drop the parallel postulate, and prove things for both worlds at once.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51F05 (Absolute planes in metric geometry), 51M05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Absolute (or neutral) geometry is Euclidean geometry with the parallel postulate and all its alternatives removed. Traditionally it uses only Euclid's first four postulates, or modern equivalents such as Hilbert's axioms without the parallel axiom.

**Problem.** Every theorem of absolute geometry holds in both Euclidean and hyperbolic geometry. Examples are the exterior angle theorem and the Saccheri–Legendre theorem: the angle sum of a triangle is at most π.

**How the definition helps.** Naming the common part of the two geometries lets each of its theorems be proved once for both. Euclid's first 28 propositions and Proposition 31 avoid the parallel postulate, so they belong here. The bound π is the sharpest one possible without choosing a side, since Euclidean triangles reach it and hyperbolic triangles fall short (our own point).

**Wikipedia:** [Absolute geometry](https://en.wikipedia.org/wiki/Absolute_geometry). It says: “The theorems of absolute geometry hold in hyperbolic geometry, which is a non-Euclidean geometry, as well as in Euclidean geometry.”

**Sources:** none listed. No primary source with a working link was found.

### Pasch's axiom supplies the order facts that Euclid used without stating

**Remember:** A line that enters a triangle must also leave it.

*Rules out counterexamples.* MSC 51F05 (Absolute planes in metric geometry), 51M05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Let A, B, C be three points not on one line, and let a line a in their plane miss all three. Pasch's axiom says that if a meets the segment AB, then it also meets BC or AC.

**Problem.** Pasch's axiom cannot be derived from Euclid's postulates. With it, the order facts that Euclid read off his figures, such as which side of a line a point lies on, become deductions.

**How the definition helps.** Making the axiom explicit turns Euclid's diagram-based steps into real deductions. Pasch found its essential role in 1882 and brought order (betweenness) into the axioms. Hilbert put it into his group of order axioms; other systems derive it from a plane separation axiom.

**Wikipedia:** [Pasch's axiom](https://en.wikipedia.org/wiki/Pasch%27s_axiom). It says: “In geometry, Pasch's axiom is a statement in plane geometry, used implicitly by Euclid, which cannot be derived from the postulates as Euclid gave them.”

**Sources:**

- [M. Pasch, Vorlesungen über neuere Geometrie, Teubner, Leipzig (1882; 2nd edition 1912)](http://quod.lib.umich.edu/cgi/t/text/text-idx?c=umhistmath;idno=ABV7607)
- [V. Pambuccian, Why did Euclid not need the Pasch axiom?, Journal of Geometry 115 (2024)](https://doi.org/10.1007/s00022-024-00712-x)

### Orthogonal determinant-one matrices make compositions of rotations into rotations

**Remember:** Products of orthogonal matrices with determinant one still satisfy both conditions.

*True by definition.* MSC 51F25 (Orthogonal and unitary groups in metric geometry), 20G20. arXiv math.MG, math.RA. Level 2: later undergraduate.

**Definition.** Represent a rotation about the origin in ℝ³ by a matrix A with AᵀA = I and det A = 1. The first condition preserves lengths and angles, and the second preserves orientation. The geometric definition is a turn through some angle about a line through the origin.

**Problem.** The composite of two rotations about axes through the same point is again a rotation about some axis through that point.

**How the definition helps.** The matrix definition makes closure a direct check because products preserve both orthogonality and determinant one. Our own comparison puts the work into Euler’s rotation theorem, which identifies these matrices with turns about axes. In dimension three, the determinant condition forces an orthogonal matrix to have an eigenvalue of 1. The matrix fixes that axis and acts on the perpendicular plane as an ordinary plane rotation.

**Wikipedia:** [Euler's rotation theorem](https://en.wikipedia.org/wiki/Euler%27s_rotation_theorem). It says: “It also means that the composition of two rotations is also a rotation.”

**Sources:** none listed. No primary source with a working link was found.

### Unit quaternion multiplication gives the axis of a composed rotation

**Remember:** Multiply the two quaternions and read the axis from the vector part.

*True by definition.* MSC 51F25 (Orthogonal and unitary groups in metric geometry), 20G20. arXiv math.MG, math.RA. Level 2: later undergraduate.

**Definition.** A quaternion has a real part and a three-dimensional vector part. A unit quaternion q acts on a vector v by qvq⁻¹, treating v as a quaternion with real part zero. For q = cos(θ/2) + sin(θ/2)u with unit vector u, this action turns through angle θ about u. Another representation uses orthogonal matrices with determinant one.

**Problem.** For two rotations given by unit quaternions q and p, the product pq represents the rotation that applies q first. Unless it is the identity, the product’s vector part points along its axis.

**How the definition helps.** The quaternion definition makes composition multiplication because (pq)v(pq)⁻¹ = p(qvq⁻¹)p⁻¹. The scalar part is the cosine of half the angle, and the vector part gives the axis after normalization. Our own comparison notes that composing matrices first would then require finding a fixed direction of the product. The work is proving the action formula for unit quaternions and that only the identity rotation has representatives with zero vector part.

**Wikipedia:** [Quaternions and spatial rotation](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation). It says: “It follows that conjugation by the product of two quaternions is the composition of conjugations by these quaternions”

**Sources:** none listed. No primary source with a working link was found.

### Directed line angles give one test for four points on a circle

**Remember:** Count line angles modulo a straight angle, and the two cases merge.

*Makes the theorem clean to state or prove.* MSC 51M04 (Elementary problems in Euclidean geometries), 97G40. arXiv math.MG, math.HO. Level 2: later undergraduate.

**Definition.** The directed angle from one line to another measures the signed turn from the first line to the second, with counterclockwise turns positive. Count turns that differ by a multiple of 180° as equal. Reversing a direction chosen along either line changes the turn by 180° and gives the same line angle.

**Problem.** Take four distinct points P₁, P₂, P₃, P₄ with no three on a line. They lie on one circle exactly when the directed angle from P₃P₁ to P₃P₂ equals the directed angle from P₄P₁ to P₄P₂.

**How the definition helps.** Directed angles merge the two ordinary-angle cases into one equality. With ordinary angles, the angles at P₃ and P₄ must be equal if the points lie on the same side of line P₁P₂, and must add to 180° if they lie on opposite sides. In the second case the directed turns differ by 180°, so counting modulo 180° makes them equal (our own explanation). The geometric work stays in the inscribed-angle theorem and its converse.

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

**Definition.** For positive magnitudes a, b, c and d, Eudoxus defines a : b = c : d to mean that, for all positive integers m and n, ma compares with nb in the same way as mc with nd. The comparison is less than, equal to or greater than. Unlike a definition by a common measuring unit, this works for magnitudes with no common unit.

**Problem.** Triangles with the same height have areas in the same ratio as their bases. This is Book VI, Proposition 1 of Euclid’s Elements.

**How the definition helps.** Eudoxus's definition reduces the ratio claim to comparing whole-number multiples of bases and areas. Triangles on m copies and n copies of the two bases, with the same height, have m and n times the original areas. The longer base gives the larger area and equal bases give equal areas, which is exactly the definition of equal ratios (our own reading of Euclid's proof). A proof by common measuring units would not cover all pairs of bases.

**Wikipedia:** [Eudoxus of Cnidus](https://en.wikipedia.org/wiki/Eudoxus_of_Cnidus). It says: “This means that a/b = c/d if and only if the ratios n/m that are larger than a/b are the same as the ones that are larger than c/d, and likewise for "equal" and "smaller".”

**Paper or page:** [Areas of Triangles and Parallelograms Proportional to Base](https://proofwiki.org/wiki/Areas_of_Triangles_and_Parallelograms_Proportional_to_Base). It says: “Then: AC : CD = △ABC : △ACD = □EC : □CF”

**Sources:** none listed. No primary source with a working link was found.

### A continuity axiom is needed so Euclid's two circles meet

**Remember:** No gaps in the line, so circles cannot slip past each other.

*Rules out counterexamples.* MSC 51M05 (Euclidean geometries (general) and generalizations), 51F05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Hilbert's axiom groups for plane geometry include incidence, order, congruence, parallels, and continuity. The continuity group holds Archimedes' axiom and an axiom of line completeness. Together they say a line has no gaps, like the real numbers.

**Problem.** With the continuity axioms, the two circles in Euclid's first proposition meet. So an equilateral triangle can be built on any segment.

**How the definition helps.** An axiom of continuity makes the circle-circle intersection a theorem, not a hidden assumption. The plane of rational points satisfies the incidence and order axioms, but in it the unit circles about (0, 0) and (1, 0) do not meet (our own example). Their meeting points would need the coordinate √3/2, which is not rational.

**Wikipedia:** [Euclidean geometry](https://en.wikipedia.org/wiki/Euclidean_geometry), [Hilbert's axioms](https://en.wikipedia.org/wiki/Hilbert%27s_axioms). It says: “His axioms, however, do not guarantee that the circles actually intersect, because they do not assert the geometrical property of continuity, which in Cartesian terms is equivalent to the completeness property of the real numbers.”

**Sources:**

- [D. Hilbert, Grundlagen der Geometrie, Teubner, Leipzig (1899); English translation The Foundations of Geometry by E. J. Townsend (1902)](https://archive.org/details/abr1237.0180.001.umich.edu)

### Allowing ideal vertices lets hyperbolic triangles reach the maximal area π

**Remember:** Push all three corners to infinity, and the area is exactly π.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries), 51M25. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An ideal vertex of a hyperbolic triangle is a point at infinity where two sides are limiting parallel: they get arbitrarily close but never meet. The angle at an ideal vertex is defined to be zero.

**Problem.** In the hyperbolic plane of curvature −1, a triangle with angles A, B, C, ideal vertices allowed, has area π − A − B − C. So the ideal triangle, with three zero angles, has the maximal area π.

**How the definition helps.** Counting vertices at infinity, with angle zero, makes the bound π an attained maximum. Without them, area is bounded by π but no triangle reaches it. The area formula comes from Gauss–Bonnet or from Lambert's original argument.

**Wikipedia:** [Hyperbolic triangle](https://en.wikipedia.org/wiki/Hyperbolic_triangle). It says: “The definition of a triangle can be generalized, permitting vertices on the ideal boundary of the plane while keeping the sides within the plane.”

**Sources:** none listed. No primary source with a working link was found.

### Klein chord lines give infinitely many parallels through a point

**Remember:** Open chords through a point can miss a given chord in infinitely many directions.

*True by definition.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries), 51M10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** In the Beltrami–Klein disk model, points lie inside a disk and lines are its open chords. Distance comes from a ratio of distances to the boundary along each chord. In the Poincaré disk model, most lines are circular arcs that meet the boundary at right angles.

**Problem.** Through a point off a given line, infinitely many lines miss the given line in the hyperbolic plane.

**How the definition helps.** Our own proof uses the chord definition to turn the claim into a statement about straight lines in a disk. The Euclidean parallel through the point misses even the closed chord. Lines through the point in sufficiently close directions also miss the closed chord because it is compact. The hard part is showing that the chord model gives hyperbolic geometry, including that its chords are shortest paths for its metric.

**Wikipedia:** [Beltrami–Klein model](https://en.wikipedia.org/wiki/Beltrami%E2%80%93Klein_model). It says: “Many hyperbolic lines through point P not intersecting line a in the Beltrami–Klein model”

**Sources:**

- [Eugenio Beltrami, Teoria fondamentale degli spazii di curvatura costante, Annali di Matematica Pura ed Applicata 2 (1868)](https://doi.org/10.1007/BF02419615)

### Proper spherical triangles keep sides and angles below π for polar duality

**Remember:** Short sides, small angles, and every spherical rule applies.

*Rules out counterexamples. Confidence: medium.* MSC 51M09 (Elementary problems in hyperbolic and elliptic geometries), 51M10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A proper spherical triangle has three vertices on the sphere joined by great-circle arcs, with every side and every angle less than π. Its polar triangle has as vertices the poles of the three side circles, on the same side as the opposite vertex.

**Problem.** For a proper spherical triangle, 0 &lt; a + b + c &lt; 2π and π &lt; A + B + C &lt; 3π. Its polar triangle is again proper, with angles π − a, π − b, π − c and sides π − A, π − B, π − C.

**How the definition helps.** The convention picks one triangle out of the several regions that three great circles cut out. Then the bounds hold and the polar triangle is again proper. So any identity for one triangle gives a dual identity by replacing A with π − a and a with π − A. Without the convention, the same three points bound triangles with a side longer than π, and the formulas need case changes (our own point).

**Wikipedia:** [Spherical trigonometry](https://en.wikipedia.org/wiki/Spherical_trigonometry). It says: “By convention, the sides of proper spherical triangles are less than π radians”

**Sources:**

- [I. Todhunter, Spherical Trigonometry, for the Use of Colleges and Schools, Macmillan (1878 edition)](https://archive.org/details/sphericaltrigon06todhgoog)

### Identifying antipodal points makes two points determine one line

**Remember:** Glue opposite points, and great circles behave like lines.

*Makes the theorem clean to state or prove.* MSC 51M10 (Hyperbolic and elliptic geometries (general) and generalizations), 51M09. arXiv math.MG. Level 2: later undergraduate.

**Definition.** The elliptic plane is the sphere with each pair of antipodal (opposite) points made into one point. Its lines are the great circles, each counted once. Distance is the smaller angle between the corresponding lines through the centre.

**Problem.** In the elliptic plane, any two distinct points lie on exactly one line, and any two lines meet in exactly one point.

**How the definition helps.** Gluing antipodal points removes the only pairs of points that lie on many great circles. On the sphere, two antipodal points lie on infinitely many great circles, so Euclid's first postulate fails there. The elliptic plane has no parallel lines, so it is a model where the parallel postulate fails. It is the real projective plane, so it is not orientable.

**Wikipedia:** [Elliptic geometry](https://en.wikipedia.org/wiki/Elliptic_geometry). It says: “For example, the first and fourth of Euclid's postulates, that there is a unique line between any two points and that all right angles are equal, hold in elliptic geometry.”

**Sources:** none listed. No primary source with a working link was found.

### Archimedean solids need vertex-transitive symmetry to number thirteen

**Remember:** Alike corners are not enough: a symmetry must carry each corner to every other.

*Rules out counterexamples.* MSC 51M20 (Polyhedra and polytopes; regular figures, division of spaces), 52B15. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An Archimedean solid is a convex polyhedron with regular faces whose symmetry group maps every vertex to every other vertex. This property is called vertex-transitive. The definition leaves out the Platonic solids, prisms and antiprisms.

**Problem.** There are exactly thirteen Archimedean solids.

**How the definition helps.** The global symmetry condition leaves out a solid that only looks the same at every vertex. The elongated square gyrobicupola has one triangle and three squares at every vertex, like the rhombicuboctahedron, but it is not vertex-transitive. Grünbaum showed that many authors gave the local definition but listed only thirteen solids.

**Wikipedia:** [Archimedean solid](https://en.wikipedia.org/wiki/Archimedean_solid), [Elongated square gyrobicupola](https://en.wikipedia.org/wiki/Elongated_square_gyrobicupola). It says: “If only thirteen polyhedra are to be listed, the definition must use global symmetries of the polyhedron rather than local neighborhoods.”

**Sources:**

- [B. Grünbaum, An enduring error, Elemente der Mathematik 64 (2009) 89–101](https://doi.org/10.4171/EM/120)

### Affine combination operations make barycentres independent of an origin

**Remember:** Weighted combinations are given as operations, so they need no chosen origin.

*True by definition.* MSC 51N10 (Affine analytic geometry), 08B99. arXiv math.MG, math.CT. Level 2: later undergraduate.

**Definition.** One definition of an affine space gives, for each list of field elements summing to 1, an operation that combines a matching list of points. A weight of 1 on one point selects that point, and combinations of combinations multiply out. The other definition has a vector space acting by translations, with exactly one translation sending any point to any other.

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

**Definition.** Define an ellipse as the image of the unit circle under an invertible affine map x ↦ Ax + b. Alternatively, define it by requiring the sum of distances to two fixed points to stay constant.

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

**How the definition helps.** The affine-image definition sends each unit-circle tangent square, of area 4, to a parallelogram of area 4ab, since the stretch by factors a and b multiplies areas by ab (our own calculation). Affine maps preserve parallel chords, midpoints and tangent lines. So they carry perpendicular circle diameters to conjugate ellipse diameters, and the inverse map gives the converse. The work lies in matching the descriptions of ellipses and conjugate diameters.

**Wikipedia:** [Ellipse](https://en.wikipedia.org/wiki/Ellipse). It says: “The parallelogram of tangents adjacent to the given conjugate diameters has the Area₁₂ = 4ab.”

**Sources:** none listed. No primary source with a working link was found.

### In the projective plane, ellipse, parabola and hyperbola are one curve

**Remember:** An ellipse misses the line at infinity, a parabola touches it, a hyperbola crosses it.

*Makes the theorem clean to state or prove.* MSC 51N15 (Projective analytic geometry), 14H50. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** A non-degenerate conic is a set of points of the real projective plane. Their homogeneous coordinates satisfy a quadratic equation with an invertible symmetric matrix. The set must also have at least one real point.

**Problem.** A projective transformation carries any non-degenerate conic in the real projective plane to any other. Once a line at infinity is chosen, the conic is an ellipse, parabola or hyperbola as it misses, touches or crosses that line.

**How the definition helps.** In the projective plane, the differences between the three types disappear. The two branches of a hyperbola join through two points at infinity, and a parabola closes up by touching the line at infinity. So one can speak of a conic without a type, and the type returns only when one line is chosen as the line at infinity.

**Wikipedia:** [Conic section](https://en.wikipedia.org/wiki/Conic_section). It says: “By extending the Euclidean plane to include a line at infinity, obtaining a projective plane, the apparent difference vanishes”

**Sources:** none listed. No primary source with a working link was found.

### Projective lines defined by subspaces always meet in a plane

**Remember:** Two distinct planes through the origin of k³ share exactly one line.

*True by definition.* MSC 51N15 (Projective analytic geometry), 51A05. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** A projective point is a one-dimensional subspace of a vector space. In the projective plane from k³, a projective line consists of the points inside a two-dimensional subspace. Another construction adds one point at infinity for each direction in the affine plane.

**Problem.** Any two distinct lines of a projective plane over a field meet in exactly one point.

**How the definition helps.** Our own proof reads the intersection of projective lines from the intersection of two vector subspaces. Two distinct two-dimensional subspaces span k³, so their intersection has dimension 2 + 2 − 3 = 1. This is one projective point. The work lies in the dimension formula and in identifying the subspace model with the plane built using points at infinity. The points-at-infinity construction instead has separate cases for crossing lines, parallel lines and the line at infinity.

**Wikipedia:** [Projective space](https://en.wikipedia.org/wiki/Projective_space). It says: “For example, in affine geometry, two distinct lines in a plane intersect in at most one point, while, in projective geometry, they intersect in exactly one point.”

**Sources:** none listed. No primary source with a working link was found.

### Symmetric matrix polars make La Hire’s theorem a symmetry

**Remember:** Switching the two vectors does not change the symmetric form.

*True by definition.* MSC 51N15 (Projective analytic geometry), 51A50. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** Represent a point of the real projective plane by a nonzero vector up to scaling. Write a nonsingular conic with real points as xᵀMx = 0, with M symmetric and invertible. The polar of a point represented by p is the line pᵀMx = 0. A geometric construction uses the contact points of tangents from an exterior point.

**Problem.** La Hire’s theorem says that P lies on the polar of Q exactly when Q lies on the polar of P.

**How the definition helps.** Our own proof reduces both incidence tests to qᵀMp = pᵀMq, which holds because M is symmetric. The work is to match the matrix definition with the geometric construction. The tangent at a conic point t has equation tᵀMx = 0. Thus a tangent at t passes through p exactly when t lies on the matrix polar of p.

**Wikipedia:** [Pole and polar](https://en.wikipedia.org/wiki/Pole_and_polar). It says: “If a point P lies on the polar of a point Q, then Q lies on the polar of P. (La Hire's theorem)”

**Paper or page:** [Reciprocal Property of Pole and Polar](https://proofwiki.org/wiki/Reciprocal_Property_of_Pole_and_Polar). It says: “if P lies on the polar of Q, then Q lies on the polar of P”

**Sources:** none listed. No primary source with a working link was found.

### Quadratic equations put any five points on a projective conic

**Remember:** Five linear conditions on six coefficients leave a nonzero solution.

*True by definition.* MSC 51N35 (Questions of classical algebraic geometry), 51N15, 14N05. arXiv math.MG, math.AG. Level 2: later undergraduate.

**Definition.** Define a projective conic by a nonzero homogeneous quadratic equation in three coordinates. Homogeneous means that every term has degree two, so rescaling the coordinates does not change the zero set. The definition allows degenerate conics, such as pairs of lines, unlike definitions that require a smooth conic.

**Problem.** Any five distinct points of the real projective plane lie on a conic. When no three are collinear, the conic is unique and nonsingular.

**How the definition helps.** Each point gives one homogeneous linear condition on the six coefficients, so five conditions leave a nonzero solution (our own). For uniqueness, the product of two lines through four of the points vanishes there but not at the fifth, and this shows the five conditions are independent. A singular real conic lies in at most two real lines, which cannot contain five points with no three collinear.

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

### Projective spaces of dimension three or more come from skew fields

**Remember:** From three dimensions up, the axioms force coordinates from a skew field.

*Rules out counterexamples.* MSC 51A30 (Desarguesian and Pappian geometries), 51A25, 12K05. arXiv math.CO, math.RA. Level 3: graduate.

**Definition.** A projective space is a set of points with lines, where two points lie on exactly one line. Every line has at least three points, and two lines in a common plane meet. Its dimension is one less than the least number of points that span it. A skew field is a ring in which every nonzero element has an inverse, but multiplication need not commute.

**Problem.** Veblen–Young theorem: every projective space of dimension at least 3 is the space of lines through the origin of a vector space over a skew field.

**How the definition helps.** The condition on dimension removes the only bad cases, so the axioms alone give coordinates. In dimension 2 there are planes that come from no skew field, such as the Moulton plane, where Desargues's theorem fails. In dimension 3 and higher, Desargues's theorem follows from the axioms by using a point outside the plane (our own summary). The hard work is to build the skew field from the points and lines.

**Wikipedia:** [https://en.wikipedia.org/wiki/Non-Desarguesian<sub>plane</sub>](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Non-Desarguesian_plane). It says: “The theorem of Desargues is true in all projective spaces of dimension not 2; in other words, the only projective spaces of dimension not equal to 2 are the classical projective geometries over a field (or division ring).”

**Paper or page:** [Interaction between skew-representability, tensor products, extension properties, and rank inequalities](https://arxiv.org/abs/2507.10709). It says: “Any projective space of dimension at least 3 is isomorphic to a projective space defined over a skew field.”

**Sources:**

- [Kristóf Bérczi, Boglárka Gehér, András Imolay, László Lovász, Carles Padró, Tamás Schwarcz, Interaction between skew-representability, tensor products, extension properties, and rank inequalities, arXiv:2507.10709 (2025)](https://arxiv.org/abs/2507.10709)

### Hermitian forms make Möbius maps preserve generalized circles

**Remember:** A Möbius map changes the matrix of the form and preserves its determinant sign.

*True by definition.* MSC 51B10 (Möbius geometries), 30C20. arXiv math.CV, math.MG. Level 3: graduate.

**Definition.** Represent a point of the Riemann sphere by a nonzero vector w in ℂ², up to scaling. A generalized circle is the set where w\*Hw = 0, for a two-by-two Hermitian matrix H with det H &lt; 0. Here w\* is the conjugate transpose, and Hermitian means H\* = H. The usual definition lists ordinary circles and straight lines completed by ∞.

**Problem.** A Möbius map sends every generalized circle to a generalized circle.

**How the definition helps.** The form definition makes the image another zero set of the same kind. Let G be an invertible matrix for the inverse map. Substitution gives the Hermitian matrix G\*HG, whose determinant is \|det G\|² det H and remains negative. This determinant check is our own calculation. Completing the square in an ordinary coordinate shows why the zero sets are exactly circles and lines completed by ∞.

**Wikipedia:** [Generalised circle](https://en.wikipedia.org/wiki/Generalised_circle). It says: “apply the inverse of the Möbius transformation 𝔊 = ℌ⁻¹ to the vector z in the implicit equation”

**Sources:** none listed. No primary source with a working link was found.

### Thickness excludes finite generalized pentagons

**Remember:** Ordinary pentagons are too thin for the finite classification.

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

**Definition.** A building consists of chambers, its basic pieces, with specified types of adjacency. Its Weyl distance labels each ordered chamber pair by an element of a group generated by reflections. A gallery walks between adjacent chambers and records one generator per step. Word length counts the fewest generators needed to express a group element.

**Problem.** The shortest gallery length is the word length of the Weyl distance. Every reduced expression, meaning a shortest generator word, is realized by a gallery.

**How the definition helps.** In our own proof, the distance axioms turn each chamber step into a change of word length by at most one. This bounds gallery length from below. The existence axiom supplies a step removing the first generator of any shortest expression. Repeating reaches the destination in exactly the required number of steps. The equivalence with the geometric definition using overlapping copies of a reflection arrangement carries the work.

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

**Definition.** The tight span of a metric space X consists of the pointwise minimal functions f with f(x) + f(y) ≥ d(x,y) for all x, y. It has the supremum distance, and each point x embeds as the function d(x,·). The other definition is the injective hull, the smallest space containing X in which short maps always extend.

**Problem.** A short map, one that does not increase distances, from the tight span to itself that fixes each point of X is the identity.

**How the definition helps.** The distance from a function f to the embedded point x is f(x) (our own argument). So a short map fixing X can only lower each value of f. Pointwise minimality then forces the image to equal f (our own). The work moves to proving this distance formula and the extension property of the function space (our own comparison).

**Wikipedia:** [Tight span](https://en.wikipedia.org/wiki/Tight_span). It says: “none of these distances can be reduced without violating the triangle inequality.”

**Sources:** none listed. No primary source with a working link was found.

### Quasi-isometry lets a group be compared with the space it acts on

**Remember:** From far away, a group looks like the space it tiles.

*Makes the theorem clean to state or prove.* MSC 51F30 (Lipschitz and coarse geometry of metric spaces), 20F65. arXiv math.MG, math.GR. Level 3: graduate.

**Definition.** A quasi-isometry is a map f between metric spaces that distorts distances by at most a factor A ≥ 1 plus B ≥ 0. In symbols, d(x,y)/A − B ≤ d(f(x),f(y)) ≤ A·d(x,y) + B. Also, every point of the target must lie within B of the image. The definition ignores all detail at bounded scale.

**Problem.** Švarc–Milnor lemma: let G act by isometries on a proper geodesic space X, properly discontinuously and with compact quotient. Then G is finitely generated and quasi-isometric to X.

**How the definition helps.** Quasi-isometry ignores the gap between a discrete group and a continuous space, so the comparison has a short proof. Take a bounded set whose translates cover X (our own). The group elements that move it to a translate meeting it generate G, and word length then matches distance in X up to constants (our own). For example, the fundamental group of a closed hyperbolic surface is quasi-isometric to the hyperbolic plane.

**Wikipedia:** [Quasi-isometry](https://en.wikipedia.org/wiki/Quasi-isometry), [Hyperbolic group](https://en.wikipedia.org/wiki/Hyperbolic_group). It says: “More generally, the Švarc–Milnor lemma states that if a group G acts properly discontinuously with compact quotient on a proper geodesic space X then G is quasi-isometric to X (meaning that any Cayley graph for G is).”

**Sources:**

- [J. Milnor, A note on curvature and fundamental group, Journal of Differential Geometry 2 (1968) 1–7](https://doi.org/10.4310/jdg/1214501132)

### Flat comparisons force inner products

**Remember:** Euclidean midpoint comparison leaves no room for a non-Euclidean norm.

*Makes the theorem clean to state or prove.* MSC 51F99 (Metric geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A geodesic space has shortest paths between every pair of points. It is CAT(0) if each shortest-path triangle has internal distances no greater than those in a Euclidean triangle with matching side lengths. This defines nonpositive curvature using distances instead of derivatives.

**Problem.** If a real normed vector space with its norm distance is CAT(0), its norm comes from an inner product.

**How the definition helps.** In our own proof, triangle comparison turns a geometric curvature condition into an inequality for lengths of sums and differences. Apply comparison at the midpoint of the segment joining two vectors, using zero as the third vertex. This gives one direction of the parallelogram identity. Applying the same inequality to the sum and difference gives the reverse direction. The Jordan–von Neumann theorem recovers the inner product from that identity.

**Wikipedia:** [CAT(k) space](https://en.wikipedia.org/wiki/CAT%28k%29_space). It says: “if a real normed vector space is a CAT(k) space for some real k, then it is an inner product space.”

**Sources:**

- [P. Jordan and J. von Neumann, On Inner Products in Linear, Metric Spaces (1935)](https://doi.org/10.2307/1968653)

### Hyperconvexity aligns Čech and Rips

**Remember:** Hyperconvexity turns pairwise distance bounds into a common point.

*Rules out counterexamples.* MSC 51F99 (Metric geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A metric space is hyperconvex if every family of closed balls satisfying the following pairwise bound has a common point. Each center distance must be at most the sum of the corresponding radii. A Rips face at scale r is a group of sites with all pairwise distances at most r. A Čech face requires their closed balls of radius r/2 in the ambient space to share a point.

**Problem.** For any finite set of sites in a hyperconvex space and any r ≥ 0, the Rips complex and the Čech complex at scale r are equal.

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

**Remember:** Local flatness cannot see a loop around a cylinder.

*Rules out counterexamples.* MSC 51F99 (Metric geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A CAT(0) space has shortest paths between all pairs of points. Distances between points on triangle sides never exceed corresponding distances in a Euclidean triangle with the same side lengths. Locally CAT(0) means that this comparison holds in a neighborhood of every point. A simply connected space is path connected and every loop contracts to a point.

**Problem.** A complete, simply connected, locally CAT(0) length space is CAT(0) everywhere.

**How the definition helps.** Simple connectedness lets the global comparison theorem for the universal cover apply to the space itself. The universal cover is the simply connected space that locally copies the original space. The metric Cartan–Hadamard theorem proves triangle comparison on this cover. In our own example, opposite points on a circle around a flat cylinder have two shortest paths. CAT(0) comparison forces shortest paths to be unique.

**Paper or page:** [A Gentle Introduction to CAT(0) Spaces](https://arxiv.org/abs/2406.09883v1). It says: “then (X̃,d̃) is a (globally) CAT(0) space.”

**Sources:** none listed. No primary source with a working link was found.

### Correspondences control diameters

**Remember:** Matching distances cannot change the largest distance by more than the matching error.

*True by definition.* MSC 51K05 (General theory of distance geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A correspondence pairs points of two spaces so that every point has a partner. Its distortion is the supremum of the absolute changes in pairwise distance. Gromov–Hausdorff distance is half the infimum of these distortions. Equivalently, embed both spaces without changing distances and minimize how far their points lie from the other space, taking an infimum.

**Problem.** The diameters of two nonempty compact metric spaces differ by at most twice their Gromov–Hausdorff distance.

**How the definition helps.** In our own proof, a correspondence compares every distance in either space with a distance in the other. Taking suprema shows that the diameters differ by at most the distortion. Taking the infimum gives twice the Gromov–Hausdorff distance. The correspondence formula supplies the link to the definition using embeddings.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “in fact, diam Xₖ → diam Y”

**Sources:** none listed. No primary source with a working link was found.

### Uniform covers give convergent subsequences

**Remember:** A bound on size is not a bound on crowding.

*Rules out counterexamples.* MSC 51K05 (General theory of distance geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A family is uniformly totally bounded if it meets two conditions. Its diameters have a common bound. At each positive radius, one finite number bounds how many balls suffice to cover any member. Gromov–Hausdorff distance measures how closely spaces can fit together inside a common metric space without changing their distances.

**Problem.** A uniformly totally bounded family of nonempty compact metric spaces has compact closure for Gromov–Hausdorff distance.

**How the definition helps.** The ball centers approximate each space by a finite set of uniformly bounded size at each scale (our own explanation). Gromov's theorem gives total boundedness of the family, and completeness of the space of compact metric spaces gives compact closure. A bound on diameters alone is not enough: finite spaces with all distances one have bounded diameter but no convergent subsequence as their size grows (our own counterexample).

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “There is a number D ≥ 0 and a function N : (0,∞) → ℕ such that for all X ∈ 𝒞 we have diam X ≤ D and cov(X,ε) ≤ N(ε).”

**Sources:** none listed. No primary source with a working link was found.

### Stating geometry in first-order logic makes it decidable

**Remember:** Speak only of points, and a machine can settle every claim.

*Makes the theorem clean to state or prove.* MSC 51M05 (Euclidean geometries (general) and generalizations), 03C10, 03B25. arXiv math.LO, math.MG. Level 3: graduate.

**Definition.** Tarski defined elementary Euclidean geometry as what can be said in first-order logic about points, with only betweenness and equal distance as basic relations. Continuity is an axiom schema about first-order definable sets, not about all sets.

**Problem.** Tarski's elementary Euclidean geometry is consistent, complete and decidable. An algorithm decides, for every statement, whether it is provable or refutable.

**How the definition helps.** Restricting the language to first order lets geometry be translated into the theory of real closed fields. Tarski's quantifier elimination for that theory then gives completeness and decidability. Every theorem in Book I of Euclid's Elements falls within this language. The cost is that statements about arbitrary sets of points, or about the natural numbers, cannot be made.

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

**Definition.** A projective line in Buekenhout's sense is a set ℓ with at least 3 points, with a group Λ(p,q) of central collineations given for each pair of points p, q. These groups satisfy a few axioms. The line is Desarguesian if each Λ(p,q) acts transitively on ℓ ∖ {p,q}.

**Problem.** Every Desarguesian projective line in Buekenhout's sense comes from a division ring. So it embeds in a Desarguesian projective plane.

**How the definition helps.** Buekenhout takes the central collineations as given data, so the theorem can be stated in dimension 1. In a projective plane, a central collineation fixes every point of one line and every line through one point. On a line there is no incidence structure to define them from. The coordinatization of the line still needs work.

**nLab:** [projective line](https://ncatlab.org/nlab/show/projective+line). It says: “Conversely, every Desarguesian projective line arises from a division ring in this way.”

**Sources:**

- [Francis Buekenhout, Foundations of one dimensional projective geometry based on perspectivities, Abh. Math. Sem. Univ. Hamburg 43 (1975) 21–29](https://doi.org/10.1007/BF02995931)

### Coarse amenability at infinity of box spaces characterizes coarsely amenable groups

**Remember:** Ask box spaces only for local estimates far out.

*Makes the theorem clean to state or prove.* MSC 51F30 (Lipschitz and coarse geometry of metric spaces), 20F69, 20E26. arXiv math.GR, math.MG. Level 4: research.

**Definition.** Coarse amenability, also called Yu's property A, is a large-scale form of amenability for metric spaces. A box space of a group G is a disjoint union of finite quotients G/Nₖ, placed far apart. Here the Nₖ form a decreasing chain of finite-index normal subgroups with trivial intersection. Coarse amenability at infinity asks for the property A estimates only outside finite sets, not on the whole space.

**Problem.** Let G be finitely generated and residually finite, meaning its finite quotients separate its elements. Then G is coarsely amenable exactly when one box space, or equivalently every box space, is coarsely amenable at infinity.

**How the definition helps.** The weaker definition asks only for local estimates, which the box space can supply whenever the group itself is coarsely amenable. Full coarse amenability is too strong, because a box space has it only when G is amenable (a known result, our own addition). For example, free groups are coarsely amenable, but their box spaces are not. The paper's work is to transfer the local estimates between the finite quotients and the group.

**Paper or page:** [Coarse amenability at infinity](https://arxiv.org/abs/1812.11745v1). It says: “All (or equivalently one) box spaces of G are coarsely amenable at infinity.”

**Sources:**

- [Thibault Pillon, Coarse amenability at infinity, arXiv:1812.11745v1 (2018)](https://arxiv.org/abs/1812.11745v1)

### Coarse cohomological dimension of metric spaces is invariant under coarse equivalence

**Remember:** Measure dimension with resolutions that move data only boundedly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51F30 (Lipschitz and coarse geometry of metric spaces), 18G20, 20J06. arXiv math.GR, math.MG. Level 4: research.

**Definition.** A coarse embedding is a map between metric spaces that controls large distances in both directions, uniformly. A coarse equivalence is a coarse embedding whose image is within bounded distance of every point. Group cohomological dimension is the length of the shortest projective resolution of the trivial module. The paper defines coarse cohomological dimension of a metric space using projective resolutions over the space whose maps move data a bounded distance.

**Problem.** Coarse cohomological dimension is monotone under coarse embeddings, so coarsely equivalent spaces have the same value. For a countable group, it equals the ordinary cohomological dimension whenever that is finite.

**How the definition helps.** The definition uses only the metric, so a coarse embedding can act on the resolutions that compute it (our own explanation). This makes coarse invariance a statement about all metric spaces, not only groups. The paper still has to prove monotonicity, and to show that the metric definition gives the ordinary dimension for countable groups.

**Paper or page:** [Coarse homological invariants of metric spaces](https://arxiv.org/abs/2411.04745v1). It says: “it is shown that coarse cohomological dimension is monotone under coarse embeddings, and hence is invariant under coarse equivalence.”

**Sources:**

- [Alexander Margolis, Coarse homological invariants of metric spaces, arXiv:2411.04745v1 (2024)](https://arxiv.org/abs/2411.04745v1)

### Equilateral comparisons detect diameter partitions

**Remember:** Points matched to one vertex must fit into one small piece.

*Makes the theorem clean to state or prove.* MSC 51K05 (General theory of distance geometry), 52A37. arXiv math.MG. Level 4: research.

**Definition.** A correspondence pairs points of two spaces so every point has a partner. Its distortion is the supremum of the absolute changes in pairwise distance. Gromov–Hausdorff distance is half the infimum of these distortions. An equilateral space has the same distance λ between any two distinct points.

**Problem.** Let X be a bounded metric space of diameter D with at least m points, where m ≥ 2, and fix 0 &lt; λ &lt; D. Then X splits into m pieces of diameter below D exactly when its Gromov–Hausdorff distance to the m-point equilateral space with distance λ is below D/2.

**How the definition helps.** The equilateral points serve as labels for pieces, so one distance bound tests a whole partition (our own proof). With distortion below D, the points matched to one label form a piece of diameter below D. Conversely, match each piece to its label. The error is below D within pieces, since there are finitely many, and at most max(λ, D − λ) between pieces.

**Paper or page:** [Lectures on Hausdorff and Gromov-Hausdorff Distance Geometry](https://arxiv.org/abs/2012.00756v1). It says: “then X can be partitioned into m subsets having strictly smaller diameters if and only if”

**Sources:** none listed. No primary source with a working link was found.

### Densities make Euler's formula hold for star polyhedra

**Remember:** Count each pentagram twice, because it goes around twice.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 51M20 (Polyhedra and polytopes; regular figures, division of spaces), 55M25. arXiv math.MG. Level 4: research.

**Definition.** Each face and each vertex figure of a polyhedron gets a density: the number of times it winds around its centre. This is 2 for a pentagram and 1 for a convex polygon. The polyhedron has a density D, the number of times it covers its circumscribed sphere.

**Problem.** Cayley's formula d<sub>v</sub>·V − E + d<sub>f</sub>·F = 2D holds for all nine regular polyhedra, convex and star. Here d<sub>v</sub> is the vertex-figure density and d<sub>f</sub> is the face density.

**How the definition helps.** Weighting each count by its density makes the formula measure how often the surface covers the sphere. The plain formula V − E + F = 2 fails for the small stellated dodecahedron and the great dodecahedron, which both give 12 − 30 + 12 = −6. For the small stellated dodecahedron, Cayley's form gives 12 − 30 + 2·12 = 6 = 2·3 (our own check). For convex polyhedra all densities are 1, so Euler's formula is a special case.

**Wikipedia:** [Kepler–Poinsot polyhedron](https://en.wikipedia.org/wiki/Kepler%E2%80%93Poinsot_polyhedron), [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “This version holds both for convex polyhedra (where the densities are all 1) and the non-convex Kepler–Poinsot polyhedra.”

**Sources:**

- [A. Cayley, On Poinsot's four new regular solids, Philosophical Magazine 17 (1859) 123–128](https://doi.org/10.1080/14786445908642635)
