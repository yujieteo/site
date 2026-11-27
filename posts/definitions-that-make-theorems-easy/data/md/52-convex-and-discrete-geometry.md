### The intersection definition makes the convex hull the smallest convex set

**Remember:** An intersection of convex sets is convex and lies inside each of them.

*True by definition.* MSC 52A05 (Convex sets without dimension restrictions (aspects of convex geometry)), 52A20. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Define the convex hull of a set X as the intersection of all convex sets that contain X. Another definition uses finite weighted combinations of points of X with nonnegative weights that sum to 1.

**Problem.** The convex hull of X is the unique smallest convex set containing X.

**How the definition helps.** The intersection contains X and lies inside each convex set containing X by construction. It is convex because the line segment between two common points belongs to every set in the intersection. Our own comparison puts the work into showing that this equals the set of finite weighted combinations. That set is convex and every convex set containing X contains every such combination.

**Wikipedia:** [Convex hull](https://en.wikipedia.org/wiki/Convex_hull). It says: “However, the second definition, the intersection of all convex sets containing X, is well-defined.”

**Paper or page:** [Convex Hull is Smallest Convex Set containing Set](https://proofwiki.org/wiki/Convex_Hull_is_Smallest_Convex_Set_containing_Set). It says: “conv U is convex and if K ⊆ X is a convex subset with U ⊆ K, we have that conv U ⊆ K.”

**Sources:** none listed. No primary source with a working link was found.

### A nondecreasing outer function keeps convex compositions convex

**Remember:** Preserving order lets the outer function preserve the inner bound.

*Rules out counterexamples.* MSC 52A41 (Convex functions and convex programs in convex geometry). arXiv math.OC. Level 1: early undergraduate.

**Definition.** A convex function is nondecreasing when larger inputs never give smaller outputs. Convexity alone only says that the graph lies at or below each chord between two graph points.

**Problem.** Let f be convex and take values in an interval. If g is convex and nondecreasing on that interval, then g composed with f is convex.

**How the definition helps.** A nondecreasing outer function preserves the upper bound from the inner chord. Convexity of the outer function then bounds the result by the outer chord. In our own counterexample, take g(t) = 1/t for t &gt; 0 and f(x) = 1 + x². Their composition peaks at zero, above the chord joining its values at −1 and 1.

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “However, if f : I → ℝ is both monotone increasing and convex, then for any convex function g : D → I, the composite f ∘ g : D → ℝ is convex”

**Paper or page:** [Convex Real Function Composed with Increasing Convex Real Function is Convex](https://proofwiki.org/wiki/Convex_Real_Function_Composed_with_Increasing_Convex_Real_Function_is_Convex). It says: “Then g ∘ f : I → ℝ is a convex function.”

**Sources:** none listed. No primary source with a working link was found.

### Epigraphs turn Jensen’s inequality into closure under averages

**Remember:** Average points on the graph and stay above it.

*True by definition.* MSC 52A41 (Convex functions and convex programs in convex geometry). arXiv math.OC. Level 1: early undergraduate.

**Definition.** The epigraph of a function f contains all pairs (x, t) with x in its domain and t ≥ f(x). Define f to be convex when this set contains the segment between any two of its points.

**Problem.** For a convex function, its value at a weighted average is at most the weighted average of its values. The weights are nonnegative and total one.

**How the definition helps.** The epigraph turns the weighted sum in Jensen’s inequality into the height of one point. Repeatedly taking points on segments shows that every finite weighted average of graph points stays in the epigraph. In our own proof, reading off its height gives the usual numerical inequality.

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “A function f : D → ℝ is convex if the set {(x, z) ∈ D × ℝ: z ≥ f(x)} is a convex subspace of D × ℝ.”

**Paper or page:** [Jensen's Inequality (Real Analysis)](https://proofwiki.org/wiki/Jensen's_Inequality_(Real_Analysis)). It says: “Let λ₁, λ₂, …, λₙ ≥ 0 be real numbers, at least one of which is non-zero.”

**Sources:** none listed. No primary source with a working link was found.

### Triangular faces make Euler’s edge bound an equality

**Remember:** Three sides per face turn Euler’s bound into an exact count.

*Rules out counterexamples.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 52B10. arXiv math.MG. Level 1: early undergraduate.

**Definition.** A three-dimensional convex polytope is a solid formed as the convex hull of finitely many points. It is simplicial if every face of dimension two is a triangle.

**Problem.** A three-dimensional convex polytope with V vertices has exactly 3V − 6 edges if and only if it is simplicial.

**How the definition helps.** Triangular faces give 3F = 2E because every edge belongs to two faces, where F counts faces and E counts edges (our own). Euler’s formula V − E + F = 2 then gives E = 3V − 6 (our own). A face with more sides makes 3F smaller than 2E, so the same formula gives fewer edges (our own).

**Wikipedia:** [Simplicial polytope](https://en.wikipedia.org/wiki/Simplicial_polytope). It says: “the polytope contains only triangular faces of any type.”

**Sources:** none listed. No primary source with a working link was found.

### Inclusive trapezoids simplify prismatoid faces

**Remember:** A parallelogram still has a pair of parallel sides.

*Makes the theorem clean to state or prove.* MSC 52B10 (Three-dimensional polytopes), 97G40. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** A trapezoid is a convex quadrilateral with at least one pair of parallel sides. The exclusive definition requires exactly one pair and keeps parallelograms separate.

**Problem.** Suppose all vertices of a bounded, three-dimensional convex polyhedron lie in two parallel planes. Each polygonal face that lies in neither plane is a triangle or a trapezoid.

**How the definition helps.** Including parallelograms among trapezoids lets one word cover all four-sided lateral faces. In our own proof, the plane of such a face cuts the two given planes in parallel lines. Each line contains at most two vertices because any point between two others cannot be a vertex. A four-sided face therefore has two vertices on each line, giving parallel opposite sides.

**Wikipedia:** [Trapezoid](https://en.wikipedia.org/wiki/Trapezoid). It says: “Under an inclusive definition, a trapezoid is any quadrilateral with at least one pair of parallel sides.”

**Paper or page:** [Lateral Face of Prismatoid is Triangle, Trapezium or Parallelogram](https://proofwiki.org/wiki/Lateral_Face_of_Prismatoid_is_Triangle,_Trapezium_or_Parallelogram). It says: “Then F is one of the following:
a triangle
a trapezium
a parallelogram.”

**Sources:** none listed. No primary source with a working link was found.

### A regular tetrahedron realizes every permutation of four vertices

**Remember:** Permute coordinates to permute the tetrahedron’s vertices.

*True by definition.* MSC 52B15 (Symmetry properties of polytopes), 20H15. arXiv math.GR, math.MG. Level 1: early undergraduate.

**Definition.** In the coordinate model, a regular tetrahedron has the four coordinate unit vectors in four dimensions as vertices. They lie in the three-dimensional space where the coordinates sum to one.

**Problem.** The full symmetry group of a regular tetrahedron is the group of all permutations of four vertices.

**How the definition helps.** Permuting coordinates preserves distances and gives any desired permutation of the four vertices (our own). Distances to the four vertices determine each point in their three-dimensional space, so the symmetry is unique (our own). The model represents a regular tetrahedron because every pair of vertices has the same distance (our own).

**nLab:** [Coxeter group](https://ncatlab.org/nlab/show/Coxeter+group). It says: “Aₙ is the isometry group of a regular n-simplex, and is identified with the symmetric group Sₙ₊₁”

**Sources:** none listed. No primary source with a working link was found.

### Signed coordinate permutations give all cube symmetries

**Remember:** Permute the three axes, then choose their signs.

*True by definition.* MSC 52B15 (Symmetry properties of polytopes), 20H15. arXiv math.GR, math.MG. Level 1: early undergraduate.

**Definition.** The coordinate cube consists of all points whose three coordinates lie between −1 and 1, including the endpoints. A signed coordinate permutation reorders the coordinates and independently changes any of their signs.

**Problem.** The full cube symmetry group consists of the 48 signed coordinate permutations. Exactly 24 of them preserve orientation.

**How the definition helps.** The six face centers are the positive and negative coordinate unit vectors, so a symmetry must permute the axes with signs (our own). Conversely, each signed permutation preserves the coordinate bounds (our own). There are six orders and eight sign choices, and changing one sign exchanges the two orientations (our own). This uses the fact that every cube symmetry fixes the center and therefore acts by an orthogonal matrix (our own).

**nLab:** [Coxeter group](https://ncatlab.org/nlab/show/Coxeter+group). It says: “Bₙ = Cₙ is the isometry group of a regular n-cube {−1, 1}ⁿ”

**Sources:** none listed. No primary source with a working link was found.

### Pick's formula needs simple polygons, since each hole adds one

**Remember:** One boundary, no holes, and area is i plus b over two minus one.

*Rules out counterexamples.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)), 51M25. arXiv math.MG, math.CO. Level 1: early undergraduate.

**Definition.** A simple polygon is a region bounded by one closed polygonal curve that does not cross itself. So it has one boundary piece and no holes. A lattice polygon has all its vertices at integer points.

**Problem.** Pick's theorem: a simple lattice polygon with i lattice points inside and b on its boundary has area i + b/2 − 1.

**How the definition helps.** Restricting to simple polygons makes area a function of i and b alone. A polygon with h holes, bounded by disjoint simple lattice polygons, has area i + b/2 + h − 1, so each hole adds one. The proof cuts the polygon into lattice triangles of area ½ and counts with Euler's formula, and the Euler characteristic is what changes with holes (our own reading).

**Wikipedia:** [Pick's theorem](https://en.wikipedia.org/wiki/Pick%27s_theorem). It says: “Generalizations to Pick's theorem to non-simple polygons are more complicated and require more information than just the number of interior and boundary vertices.”

**Sources:**

- [J. E. Reeve, On the volume of lattice polyhedra, Proceedings of the London Mathematical Society 7 (1957) 378–395](https://doi.org/10.1112/plms/s3-7.1.378)

### Centering slices preserves area without increasing perimeter

**Remember:** Slide slices to preserve area, then average edges to save length.

*Makes the theorem clean to state or prove.* MSC 52A10 (Convex sets in \\(2\\) dimensions (including convex curves)), 52A40. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Steiner symmetrization slides each slice perpendicular to a fixed line until its midpoint lies on that line. It keeps the slice length unchanged.

**Problem.** Steiner symmetrization of a convex polygon preserves area and does not increase perimeter.

**How the definition helps.** Centering keeps every slice length, so integration gives the same area (our own). Split the polygon into strips at every change of boundary slope (our own). Each new upper edge vector averages the old upper vector and the reflected lower vector, so its length cannot exceed their average length (our own). The new lower edge has the same length, and the two end slices retain theirs (our own).

**Wikipedia:** [Symmetrization methods](https://en.wikipedia.org/wiki/Symmetrization_methods). It says: “by replacing each Ω ∩ Lₓ by a line centered at H and with length \|Ω ∩ Lₓ\|”

**Sources:**

- [Jakob Steiner, Einfache Beweise der isoperimetrischen Hauptsätze (1838).](https://www.e-rara.ch/zut/content/titleinfo/1368571)

### Support-function width gives perimeter π times the constant width

**Remember:** Adding a body to its half-turn makes a disk with twice its perimeter.

*True by definition.* MSC 52A10 (Convex sets in \\(2\\) dimensions (including convex curves)), 52A38. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A convex body is a compact convex set with interior. Its support function h(u) is the largest dot product u · x for points x in the body. Define its width in a unit direction u as h(u) + h(−u), the gap between its two supporting lines perpendicular to u. The body has constant width w if that gap is always w.

**Problem.** A planar convex body of constant width w has perimeter πw.

**How the definition helps.** Our own support-function calculation turns constant width into the statement that the sum with the reflected body is a disk. The sum consists of differences x − y of points of the body, so its largest dot product with u is h(u) + h(−u). That value is always w, which determines the disk of radius w. The work is in Cauchy’s perimeter formula, which gives perimeter by integrating the support function over all unit directions. The formula makes perimeter additive under these sums, so the body has half the disk’s perimeter.

**Wikipedia:** [Barbier's theorem](https://en.wikipedia.org/wiki/Barbier%27s_theorem). It says: “the Minkowski sum of K and its 180° rotation is a disk with radius w and perimeter 2πw.”

**Sources:** none listed. No primary source with a working link was found.

### A nearest point supplies a strict separating hyperplane

**Remember:** The line to the nearest point gives the separating normal.

*True by definition.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)), 90C25. arXiv math.OC. Level 2: later undergraduate.

**Definition.** For p in a convex set C, its normal cone contains the vectors v satisfying v·(z − p) ≤ 0 for all z in C. For nonempty closed convex C in Euclidean space, the nearest point to x is the unique p whose cone contains x − p.

**Problem.** A point x outside a nonempty closed convex set in Euclidean space is strictly separated from it by a hyperplane. There is a positive gap between the value of the separating linear function at x and its values on the set.

**How the definition helps.** The normal inequality supplies a linear function bounded above on C without searching for a hyperplane. In our own calculation, z ↦ (x − p)·z attains its maximum over C at p. Its value at x exceeds that maximum by ‖x − p‖². The projection theorem identifies the nearest point with the point satisfying the normal inequality.

**Paper or page:** [Strong Separation Theorem](https://proofwiki.org/wiki/Strong_Separation_Theorem). It says: “Then C and D can be strongly separated.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing zero weights makes compact convex hulls compact

**Remember:** Zero weights let every average use the same compact space.

*Makes the theorem clean to state or prove.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** Represent hull points by weighted averages with nonnegative weights that sum to one. A weight of zero lets a shorter average fill a list of exactly d + 1 terms in ℝᵈ.

**Problem.** The convex hull of a compact subset of Euclidean space is compact.

**How the definition helps.** With zero weights allowed, one continuous averaging map covers the whole hull (our own). Its domain is the product of d + 1 copies of the compact set and the compact simplex of weights (our own). The work moves to Carathéodory’s theorem, which bounds the number of points needed before padding with zeros (our own).

**Wikipedia:** [Convex hull](https://en.wikipedia.org/wiki/Convex_hull). It says: “convex hulls of compact sets are compact.”

**Paper or page:** [Carathéodory's Theorem (Convex Analysis)](https://proofwiki.org/wiki/Carathéodory's_Theorem_(Convex_Analysis)). It says: “In particular, x is a convex combination of at most l + 1 points of E.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness keeps disjoint convex sets strictly apart

**Remember:** A compact set cannot approach a disjoint closed set at infinity.

*Rules out counterexamples.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)), 90C25. arXiv math.OC. Level 2: later undergraduate.

**Definition.** In Euclidean space a compact set is one that is closed and bounded. Two sets have a separating gap if some linear function has values uniformly higher on one than on the other by a positive amount.

**Problem.** Two nonempty disjoint closed convex sets in Euclidean space admit strict separation with a gap if one is compact.

**How the definition helps.** Compactness makes the distance to the other closed set attain a positive minimum. In our own proof, the segment between closest points gives a separating direction by the nearest point inequality. Without compactness, the closed convex regions y ≥ exp(x) and y ≤ 0 approach each other as x tends to −∞.

**Paper or page:** [Hahn-Banach Separation Theorem/Normed Vector Space/Real Case/Compact Convex Set and Closed Convex Set](https://proofwiki.org/wiki/Hahn-Banach_Separation_Theorem/Normed_Vector_Space/Real_Case/Compact_Convex_Set_and_Closed_Convex_Set). It says: “Let A be a compact convex set. Let B be a closed convex set disjoint from A.”

**Sources:** none listed. No primary source with a working link was found.

### Directions at infinity detect exactly when convex sets are unbounded

**Remember:** Shrink distant points to unit length to see a direction at infinity.

*Makes the theorem clean to state or prove.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** A recession direction v lets every point x in C move along x + sv for all s ≥ 0 without leaving C. These directions form the recession cone. The asymptotic cone consists of limits of points tₖxₖ with xₖ in C and positive tₖ tending to zero.

**Problem.** A nonempty closed convex set in Euclidean space is bounded exactly when its recession cone contains only zero.

**How the definition helps.** The limit definition makes boundedness force every scaled limit to be zero (our own). For an unbounded set, divide distant points by their lengths and take a convergent subsequence on the unit sphere (our own). The work moves to showing that the limit cone equals the recession cone for closed convex sets (our own).

**Paper or page:** [Conic optimization techniques yield sufficient conditions for set-completely positive matrix completion under arrowhead specification pattern](https://arxiv.org/abs/2509.19348v1). It says: “A nonempty closed convex set 𝒞 ⊆ ℝⁿ is bounded if and only if 𝒞∞ = {o}.”

**Sources:** none listed. No primary source with a working link was found.

### Keeping the origin makes taking polars twice recover a set

**Remember:** A second polar recovers the closed hull with zero included.

*Rules out counterexamples.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** In Euclidean space, the one-sided polar of A consists of vectors y satisfying x · y ≤ 1 for every x in A.

**Problem.** Taking the one-sided polar twice gives the smallest closed convex set containing both A and zero. Thus it recovers any closed convex set containing zero.

**How the definition helps.** Every defining inequality contains the origin, so a second polar cannot recover a set that leaves it out (our own). For example, the double polar of {1} on the real line is \[0, 1\] (our own). The work for the reverse inclusion is strict separation from the closed hull containing zero (our own). A positive separating bound can be scaled to one, and a zero bound can first be increased slightly (our own).

**Paper or page:** [Bipolar Theorem/One-Sided Polar](https://proofwiki.org/wiki/Bipolar_Theorem/One-Sided_Polar). It says: “\\paren {A<sup>\\odot}\_\\odot</sup> = \\map {\\cl\_\\sigma} {\\map {\\operatorname {conv} } {A \\cup \\set { {\\mathbf 0}<sub>X</sub>} } }”

**Sources:** none listed. No primary source with a working link was found.

### Polarity ignores convex combinations

**Remember:** An upper bound on generators is the same bound on their averages.

*True by definition.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The one-sided polar of a nonempty Euclidean set A consists of y such that x · y ≤ 1 for every x in A. For a polytope containing the origin inside, an equivalent description builds the dual polytope from rescaled facet normals.

**Problem.** The one-sided polar of a set equals the one-sided polar of its convex hull.

**How the definition helps.** The inequality definition lets one check a linear bound on generators alone. In our own proof, every convex combination preserves the upper bound of one. Conversely, a bound on the hull holds on the original set. For a full-dimensional polytope containing zero in its interior, one can also construct the polar from rescaled facet normals. That approach requires proving these normals generate precisely the set of valid inequalities.

**Paper or page:** [One-Sided Polar of Convex Hull is One-Sided Polar of Original Set](https://proofwiki.org/wiki/One-Sided_Polar_of_Convex_Hull_is_One-Sided_Polar_of_Original_Set). It says: “(conv A)⊙ = A⊙”

**Sources:** none listed. No primary source with a working link was found.

### Polarity swaps closed convex hulls of unions with intersections

**Remember:** A union pools the inequalities, so the polar intersects their solution sets.

*Makes the theorem clean to state or prove.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The one-sided polar of A consists of vectors y obeying x · y ≤ 1 for all x in A. Each point of A provides one inequality rather than one candidate vertex.

**Problem.** The polar of the intersection of any nonempty family of closed convex sets containing zero equals the closed convex hull of their polars’ union.

**How the definition helps.** The polar turns a union into an intersection because each point in the union contributes its own inequality (our own). Apply this rule to the union of the polars of the given sets (our own). Taking polars again gives the result by the bipolar theorem, since each original set is closed, convex and contains zero (our own).

**Paper or page:** [Intersection of One-Sided Polars is One-Sided Polar of Union](https://proofwiki.org/wiki/Intersection_of_One-Sided_Polars_is_One-Sided_Polar_of_Union). It says: “⋂₍A ∈ ℱ₎ A⊙ = (⋃₍A ∈ ℱ₎ A)⊙”

**Sources:** none listed. No primary source with a working link was found.

### Radial projection identifies convex boundaries with spheres

**Remember:** Every ray from inside meets the boundary once.

*Makes the theorem clean to state or prove.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** Radial projection from an interior point p sends each boundary point x to the unit vector along x − p. It describes the boundary by directions instead of by a surface equation.

**Problem.** Radial projection maps the boundary of a compact convex set with nonempty interior in ℝᵈ onto the unit sphere for d ≥ 1. The map and its inverse are continuous.

**How the definition helps.** Radial projection labels each boundary point by its direction from p (our own). Compactness gives a last point on each ray inside the set (our own). Convexity joins that point to a ball around p, putting all earlier points inside the interior (our own). The resulting continuous bijection has a continuous inverse because the boundary is compact and the sphere is Hausdorff (our own).

**Paper or page:** [Boundary of Compact Convex Set with Nonempty Interior is Homeomorphic to Sphere](https://proofwiki.org/wiki/Boundary_of_Compact_Convex_Set_with_Nonempty_Interior_is_Homeomorphic_to_Sphere). It says: “Then, the boundary ∂C is homeomorphic to Sⁿ⁻¹, the unit n − 1-sphere.”

**Sources:** none listed. No primary source with a working link was found.

### Relative interior gives every nonempty convex set an inside

**Remember:** Look for an inside in the space the set actually spans.

*Rules out counterexamples.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The affine hull is the smallest translate of a vector subspace that contains the set. The relative interior consists of points with a neighborhood in that flat space lying entirely in the set.

**Problem.** Every nonempty convex subset of Euclidean space has nonempty relative interior.

**How the definition helps.** The affine hull has exactly the dimension spanned by differences of points in the set (our own). Choose a point and enough other points for their differences from it to form a basis (our own). Their convex hull is a simplex containing a relative neighborhood of its center, even in dimension zero (our own). In the plane, a segment has empty ordinary interior.

**Wikipedia:** [Relative interior](https://en.wikipedia.org/wiki/Relative_interior). It says: “The interior of a line segment in an at least two-dimensional ambient space is empty”

**Sources:** none listed. No primary source with a working link was found.

### Support values determine a closed convex set

**Remember:** One support bound per direction recovers the whole closed set.

*Makes the theorem clean to state or prove.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The support function gives, in each direction u, the least upper bound of u · x over the set. It may give +∞ if there is no finite bound.

**Problem.** A nonempty closed convex set in Euclidean space is the intersection of the half-spaces given by its finite support bounds. In particular, its support function determines it uniquely.

**How the definition helps.** Each finite support bound is an inequality satisfied by every point of the set (our own). An outside point violates one bound, by strict separation of a point from a closed convex set (our own). That separation theorem carries the work that the support function saves here (our own).

**Paper or page:** [Closed Convex Set in terms of Bounded Linear Functionals](https://proofwiki.org/wiki/Closed_Convex_Set_in_terms_of_Bounded_Linear_Functionals). It says: “C = ⋂₍f ∈ X⋆₎ {x ∈ X : f(x) ≤ sup₍c ∈ C₎ f(c)}”

**Sources:** none listed. No primary source with a working link was found.

### The intersection definition makes the convex hull smallest

**Remember:** The intersection of all candidates lies inside each candidate.

*True by definition.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)), 52A05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** The convex hull of a nonempty set X is the intersection of all convex sets containing X. An equivalent definition uses all finite weighted averages of points of X with nonnegative weights that sum to one.

**Problem.** The convex hull is convex, contains X, and lies inside every convex set that contains X. So a smallest convex set containing X exists.

**How the definition helps.** The intersection definition gives minimality immediately because the intersection lies inside each convex set that contains X. It also contains X and is convex, since segments between its points stay in every set in the intersection. Our own comparison is that the weighted-average definition requires checking that its averages form a convex set. The equivalence also needs the fact that a convex set contains every finite weighted average of its points.

**Wikipedia:** [Convex hull](https://en.wikipedia.org/wiki/Convex_hull). It says: “It is a subset of every other convex set Y that contains X, because Y is included among the sets being intersected.”

**Paper or page:** [Convex Hull is Smallest Convex Set containing Set](https://proofwiki.org/wiki/Convex_Hull_is_Smallest_Convex_Set_containing_Set). It says: “Then conv(U) is the smallest convex subset of X containing U”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970)](https://doi.org/10.1515/9781400873173)

### The segment definition makes faces of faces faces

**Remember:** Apply the segment rule twice to put both endpoints in the smaller face.

*True by definition.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)). arXiv math.MG, math.OC. Level 2: later undergraduate.

**Definition.** A face F of a convex set C is a convex subset with a segment rule. If a point strictly between two points of C lies in F, both endpoints lie in F. An exposed face consists of all points where a linear function attains its maximum on C.

**Problem.** A face of a face of a convex set is a face of the whole set. The same statement fails for exposed faces.

**How the definition helps.** Apply the segment rule once to put both endpoints in the larger face, then again to put them in the smaller face (our own proof). For exposed faces, take a stadium, a line segment thickened to distance 1. Its flat top is an exposed face, and each endpoint of the top is exposed within the top. But the top line is the only supporting line at that endpoint, so no linear function exposes the endpoint alone in the stadium.

**Wikipedia:** [Face (geometry)](https://en.wikipedia.org/wiki/Face_%28geometry%29). It says: “Therefore, not every face of a convex set is an exposed face.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970), §18](https://doi.org/10.1515/9781400873173)

### Scaling an origin-symmetric convex body gives a norm

**Remember:** The gauge measures how far you must enlarge the unit body.

*Rules out counterexamples.* MSC 52A21 (Convexity and finite-dimensional Banach spaces (including special norms, zonoids, etc.) (aspects of convex geometry)), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Let K be a compact convex set containing zero in its interior. The gauge of x is the smallest t ≥ 0 for which x belongs to tK. Here 0K means the singleton containing zero.

**Problem.** The gauge of every origin-symmetric convex body is a norm with K as its closed unit ball.

**How the definition helps.** Scaling gives homogeneity, and symmetry gives equal lengths to opposite vectors (our own). Convexity puts the sum of vectors from aK and bK in (a + b)K, which gives the triangle inequality (our own). Compactness gives attainment away from zero and boundedness excludes zero gauge for a nonzero vector (our own). The interval \[−1, 2\] gives different gauges for −1 and 1 (our own).

**Paper or page:** [Minkowski Functional of Symmetric Convex Absorbing Set in Real Vector Space is Seminorm](https://proofwiki.org/wiki/Minkowski_Functional_of_Symmetric_Convex_Absorbing_Set_in_Real_Vector_Space_is_Seminorm). It says: “Then μA is a seminorm.”

**Sources:** none listed. No primary source with a working link was found.

### Ball bodies survive double polarity

**Remember:** Apply ball polarity twice to recover the ball hull.

*Rules out counterexamples.* MSC 52A30 (Variants of convex sets (star-shaped, (\\(m, n\\))-convex, etc.)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The radius-r polar of a set consists of centers of closed radius-r balls that contain the set. A radius-r ball body is an intersection of closed balls of that radius.

**Problem.** In Euclidean dimension d &gt; 1, taking the radius-r polar twice fixes each radius-r ball body for r &gt; 0.

**How the definition helps.** An intersection of balls already contains exactly what its defining balls force. In our own proof, taking the polar twice intersects every radius-r ball containing the set. These balls include every defining ball, so their intersection recovers the body. For two distinct points less than 2r apart, every containing ball also contains their segment. The double polar therefore adds points.

**Paper or page:** [Selected topics from the theory of intersections of balls](https://arxiv.org/abs/2411.10302v2). It says: “(Aʳ)ʳ = A”

**Sources:**

- [Selected topics from the theory of intersections of balls, Proposition 3.2](https://arxiv.org/abs/2411.10302v2)

### Half-planes make guard kernels convex

**Remember:** A guard must stay on the inward side of every edge.

*True by definition.* MSC 52A30 (Variants of convex sets (star-shaped, (\\(m, n\\))-convex, etc.)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** The kernel of a simple polygon consists of the points that see the whole polygon. Two points see each other when the segment joining them stays in the closed polygon. Equivalently, traverse the boundary counterclockwise and intersect the closed half-planes to the left of its edges.

**Problem.** For a simple polygon, the set of points that can each see the whole polygon is convex, possibly empty.

**How the definition helps.** The half-plane description makes the kernel convex because intersections preserve convexity. Our own comparison starts from visibility, which requires checking an entire segment for every point of the polygon. The kernel theorem does the geometric work by replacing all those tests with one half-plane per edge.

**Wikipedia:** [Star-shaped polygon](https://en.wikipedia.org/wiki/Star-shaped_polygon). It says: “The kernel of a polygon is the intersection of all its interior half-planes.”

**Sources:**

- [D. T. Lee and F. P. Preparata, An Optimal Algorithm for Finding the Kernel of a Polygon (1979)](https://doi.org/10.1145/322139.322142)

### A compact member keeps infinite Helly intersections from escaping

**Remember:** One compact member gives all the intersections a place to stay.

*Rules out counterexamples.* MSC 52A35 (Helly-type theorems and geometric transversal theory), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A compact set in Euclidean space is closed and bounded. For infinite Helly, take a family of closed convex sets with at least one compact member.

**Problem.** A family of closed convex sets in ℝᵈ has a common point under two conditions. One member is compact and every subfamily of at most d + 1 sets meets.

**How the definition helps.** The compact member gives a fixed place to intersect all the other sets (our own). Finite Helly says every finite selection meets, even after adding the compact member (our own). Inside that member, compactness gives a point in all these closed intersections (our own). Without compactness, the rays \[n, ∞) meet in every finite selection but have no common point (our own).

**Wikipedia:** [Helly's theorem](https://en.wikipedia.org/wiki/Helly%27s_theorem). It says: “the intersection of all others with it are closed subsets of a fixed compact space”

**Sources:** none listed. No primary source with a working link was found.

### Minimal empty families turn Helly’s theorem into one Radon step

**Remember:** Delete each set once, then let Radon join the witnesses.

*Makes the theorem clean to state or prove.* MSC 52A35 (Helly-type theorems and geometric transversal theory), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A minimal empty-intersection family has no common point, but deleting any one set leaves a common point. This is smaller under inclusion, not necessarily smallest among all possible examples.

**Problem.** In ℝᵈ, a finite minimal empty-intersection family of convex sets has at most d + 1 members.

**How the definition helps.** For each set, minimality gives a witness in every other set but outside that one (our own). Given d + 2 witnesses, Radon’s theorem splits them into two groups whose convex hulls meet (our own). Each set contains one whole group and hence contains the meeting point, a contradiction (our own).

**Wikipedia:** [Helly's theorem](https://en.wikipedia.org/wiki/Helly%27s_theorem). It says: “We prove the finite version, using Radon's theorem”

**Sources:**

- [Johann Radon, Mengen konvexer Körper, die einen gemeinsamen Punkt enthalten, Mathematische Annalen 83, 113–115 (1921).](https://link.springer.com/article/10.1007/BF01464231)

### Zero weights show why Helly needs d plus one sets

**Remember:** Any missing zero leaves a coordinate free to be one.

*Makes the theorem clean to state or prove.* MSC 52A35 (Helly-type theorems and geometric transversal theory), 52B05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** The standard d-simplex consists of d + 1 nonnegative coordinates that sum to one. Its facets, the faces of dimension d − 1, each set one coordinate to zero.

**Problem.** For every d ≥ 1, any d facets of the standard d-simplex share a point, but all d + 1 share none.

**How the definition helps.** Setting a coordinate to zero makes each facet impose a different constraint (our own). Any d facets leave one coordinate free to equal one (our own). All d + 1 would force every coordinate to vanish, although their sum must equal one (our own). Thus checking only d convex sets at a time cannot guarantee a common point in dimension d (our own).

**nLab:** [simplex](https://ncatlab.org/nlab/show/simplex). It says: “which omits the kth coordinate”

**Sources:** none listed. No primary source with a working link was found.

### Fewest nonzero weights give Carathéodory’s bound

**Remember:** Choose the fewest weights, then use a dependence to drop one.

*Makes the theorem clean to state or prove.* MSC 52A37 (Other problems of combinatorial convexity), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Define the convex hull by finite weighted averages with nonnegative weights that sum to one. The equivalent definition intersects all convex sets that contain the original set.

**Problem.** Every point in the convex hull of a set in ℝᵈ is a weighted average of at most d + 1 points from that set.

**How the definition helps.** The average formula lets us choose an expression with the fewest positive weights (our own). More than d + 1 points admit nonzero coefficients whose sum and weighted sum of points both vanish (our own). Add a multiple of these coefficients to the weights until one reaches zero (our own). This preserves the point and contradicts minimality (our own).

**Paper or page:** [Carathéodory's Theorem (Convex Analysis)](https://proofwiki.org/wiki/Carathéodory's_Theorem_(Convex_Analysis)). It says: “In particular, x is a convex combination of at most l + 1 points of E.”

**Sources:** none listed. No primary source with a working link was found.

### General position makes Radon partitions unique

**Remember:** One dependence with no zeros gives one split by signs.

*Rules out counterexamples.* MSC 52A37 (Other problems of combinatorial convexity), 52C35. arXiv cs.CG. Level 2: later undergraduate.

**Definition.** A Radon partition splits points into two groups whose convex hulls intersect. An affine dependence assigns weights, not all zero, whose sum and weighted sum of the points both vanish. General position here means that no d+1 points in ℝᵈ admit an affine dependence.

**Problem.** A set of d+2 points in general position in ℝᵈ has exactly one Radon partition up to exchanging its two parts.

**How the definition helps.** General position gives an affine dependence that is unique up to scaling and has no zero weight (our own proof). Splitting its positive and negative weights gives the partition. Conversely, any Radon partition gives a dependence, so its signs fix the partition. Without general position, four collinear points A, B, C, D in order in the plane allow both AC against BD and AD against BC (our own counterexample).

**Wikipedia:** [Radon's theorem](https://en.wikipedia.org/wiki/Radon%27s_theorem). It says: “Then I and J form the required partition of the points into two subsets with intersecting convex hulls.”

**Paper or page:** [Radon Partitions of Random Gaussian Polytopes](https://arxiv.org/abs/2507.05449). It says: “Then the following are equivalent:\\begin{enumerate} \\item $(A,B)$ is a Radon partition for $x<sub>1</sub>,\\ldots ,x<sub>N</sub>$, 

\\item $F(A,B)\\cap V\\neq \\emptyset $, 

\\item $C(A,B)\\cap V\\neq \\left\\{ 0\\right\\}  $. 

\\end{enumerate}”

**Sources:**

- [Radon Partitions of Random Gaussian Polytopes](https://arxiv.org/abs/2507.05449)

### In a two-distance set, smaller-diameter pieces are exactly cliques

**Remember:** Short distances are edges, and smaller pieces are cliques.

*True by definition.* MSC 52A37 (Other problems of combinatorial convexity), 05C69. arXiv math.CO, math.MG. Level 2: later undergraduate.

**Definition.** A two-distance set is a finite set of points with exactly two distinct distances between distinct points. Its graph joins two points when their distance is the shorter one.

**Problem.** The Borsuk number of a two-distance set is the fewest parts of smaller diameter that it splits into. It equals the fewest cliques needed to cover the vertices of its graph. A clique is a set of pairwise adjacent vertices.

**How the definition helps.** The diameter of the set is the longer distance, so a part has smaller diameter exactly when it contains no long pair. That means the part is a clique (our own explanation). A cover by cliques becomes a partition by keeping each vertex in only one clique. The paper uses this to restate Borsuk's question for two-distance sets in terms of graphs.

**Paper or page:** [Borsuk's conjecture for two-distance sets and its equivalent formulation for graphs](https://arxiv.org/abs/2511.03668v2), [Borsuk's conjecture for two-distance sets and its equivalent formulation for graphs](https://arxiv.org/abs/2511.03668v2). It says: “Every graph G can be embedded in a Euclidean space as a two-distance set. This allows us to reformulate the analogue of Borsuk's conjecture for two-distance sets in terms of graphs.”

**Sources:**

- [Oleg R. Musin, Borsuk's conjecture for two-distance sets and its equivalent formulation for graphs, arXiv:2511.03668 (2025)](https://arxiv.org/abs/2511.03668v2)

### Signed affine weights give Radon’s partition

**Remember:** Move the negative weights across to get two equal averages.

*Makes the theorem clean to state or prove.* MSC 52A37 (Other problems of combinatorial convexity), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An affine dependence is a nonzero list of weights that sum to zero and give a zero weighted sum of the points. Unlike an ordinary linear dependence, it treats every choice of origin alike.

**Problem.** Any d + 2 points in ℝᵈ can be split into two groups whose convex hulls meet.

**How the definition helps.** The zero sum of the coefficients makes the positive and negative sides have equal total weight (our own). Dividing by that weight gives two averages at the same point, and unused points can join either group (our own). Such coefficients exist because appending a one gives d + 2 vectors in only d + 1 dimensions (our own).

**Wikipedia:** [Radon's theorem](https://en.wikipedia.org/wiki/Radon%27s_theorem). It says: “the sum of the multipliers to be zero”

**Sources:**

- [Johann Radon, Mengen konvexer Körper, die einen gemeinsamen Punkt enthalten, Mathematische Annalen 83, 113–115 (1921).](https://link.springer.com/article/10.1007/BF01464231)

### Signed face projections cancel

**Remember:** Project all faces with signs and each edge cancels.

*True by definition.* MSC 52A38 (Length, area, volume and convex sets (aspects of convex geometry)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** Multiply each face area by its outward unit normal to get its vector area. Equivalently, its component along an axis is the signed area projected onto the plane perpendicular to that axis.

**Problem.** The outward vector areas of all faces of a bounded three-dimensional convex polyhedron sum to zero.

**How the definition helps.** Signed projection makes the two sides of a solid contribute equal areas with opposite signs. Project the boundary along a unit direction onto its perpendicular plane (our own proof). Almost every line through the solid enters once and leaves once, so the projected areas cancel. Doing this in three coordinate directions shows the vector sum vanishes.

**Paper or page:** [Total Vector Area of Polyhedron is Zero](https://proofwiki.org/wiki/Total_Vector_Area_of_Polyhedron_is_Zero). It says: “the total vector area of all the faces of P”

**Sources:** none listed. No primary source with a working link was found.

### Strong convexity is ordinary convexity after subtracting a quadratic

**Remember:** Subtract the required curvature and test what remains.

*True by definition.* MSC 52A41 (Convex functions and convex programs in convex geometry), 90C25. arXiv math.OC. Level 2: later undergraduate.

**Definition.** Call f m-strongly convex when f(θx + (1−θ)y) ≤ θf(x) + (1−θ)f(y) − (m/2)θ(1−θ)‖x − y‖² for all θ in \[0,1\].

**Problem.** On a convex subset of Euclidean space, f is m-strongly convex exactly when f(x) − (m/2)‖x‖² is convex. For differentiable f this is also equivalent to f(y) ≥ f(x) + ∇f(x)·(y − x) + (m/2)‖y − x‖². It is also equivalent to (∇f(x) − ∇f(y))·(x − y) ≥ m‖x − y‖².

**How the definition helps.** The first equivalence is a direct expansion, because ‖θx + (1−θ)y‖² = θ‖x‖² + (1−θ)‖y‖² − θ(1−θ)‖x − y‖². The other two then follow from the usual first-order tests for convexity applied to the remainder, by our own account.

**Paper or page:** [Formalization of Complexity Analysis of the First-order Algorithms for Convex Optimization](https://arxiv.org/abs/2403.11437v3). It says: “The function g(x) = f(x) − (m/2)‖x‖² is convex on s.”

**Sources:**

- [Chenyi Li, Ziyu Wang, Wanyi He, Yuxuan Wu, Shengyang Xu, Zaiwen Wen, Formalization of Complexity Analysis of the First-order Algorithms for Convex Optimization, arXiv:2403.11437v3 (2024)](https://arxiv.org/abs/2403.11437v3)

### Counting the empty face and the whole polytope makes faces a lattice

**Remember:** Add the empty face and the whole, and every two faces meet and join.

*Rules out counterexamples.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 06A07. arXiv math.MG, math.CO. Level 2: later undergraduate.

**Definition.** A face of a convex polytope is its intersection with a closed half-space whose boundary plane misses its interior. This definition includes the empty set, as a face of dimension −1, and the polytope itself. The faces ordered by inclusion form the face lattice.

**Problem.** The faces of a convex polytope form a lattice: every two faces have a greatest common lower face and a least common upper face. This lattice determines the combinatorial type of the polytope.

**How the definition helps.** The empty face and the whole polytope act as the least and greatest elements that a lattice needs. Without the empty face, two vertices of a polytope would have no common lower face. Without the whole polytope, two opposite facets of a cube would have no common upper face (our own example). With both, the meet of two faces is their intersection, which is again a face. Two polytopes then count as the same type when their face lattices are isomorphic. Which lattices arise from polytopes is still a hard question (our own remark).

**Wikipedia:** [Convex polytope](https://en.wikipedia.org/wiki/Convex_polytope). It says: “The definition of a face given above allows both the polytope itself and the empty set to be considered as faces, ensuring that every pair of faces has a join and a meet in the face lattice.”

**Sources:**

- [G. M. Ziegler, Lectures on Polytopes, Graduate Texts in Mathematics 152, Springer (1995)](https://doi.org/10.1007/978-1-4613-8431-1)
- [B. Grünbaum, Convex Polytopes, Graduate Texts in Mathematics 221, Springer (2003)](https://doi.org/10.1007/978-1-4613-0019-9)

### Diamond rules exclude branching edges

**Remember:** Skip one rank and exactly two faces fill the gap.

*Rules out counterexamples.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** An abstract polyhedron orders its faces by inclusion, with a least face of rank −1 and a greatest face of rank 3. Each immediate step increases rank by one. Between faces three or more ranks apart, the intermediate faces must connect by chains of comparable faces. The diamond rule requires exactly two intermediate faces between comparable faces two ranks apart.

**Problem.** In an abstract polyhedron, every edge lies on exactly two polygon faces.

**How the definition helps.** The diamond rule fixes the number of faces between an edge and the whole polyhedron. Their ranks differ by two, so precisely two polygon faces intervene. Our own example without this rule glues three triangles along one common edge. Three polygon faces then intervene.

**nLab:** [abstract polytope](https://ncatlab.org/nlab/show/abstract+polytope). It says: “every line segment and polyhedron share two polygons”

**Sources:** none listed. No primary source with a working link was found.

### Extreme points give a polytope its unique minimal generating set

**Remember:** A true corner cannot be averaged away.

*Makes the theorem clean to state or prove.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A polytope is the convex hull of finitely many points. A vertex is an extreme point, a point that lies strictly between no two distinct points of the polytope.

**Problem.** The vertices of a nonempty polytope form its unique smallest set of convex hull generators.

**How the definition helps.** The segment test forces every generating set to contain each vertex (our own). An average of other points would place that vertex strictly between one point and the average of the rest (our own). For a nonextreme generator, expand both endpoints of its segment as averages of generators (our own). Its resulting weight is below one, so rearranging expresses it using the others and allows its removal (our own).

**nLab:** [extreme point](https://ncatlab.org/nlab/show/extreme+point). It says: “those not in between any pair of points of the set.”

**Paper or page:** [Extreme Point of Convex Set not contained in Convex Hull of Subset not containing Point](https://proofwiki.org/wiki/Extreme_Point_of_Convex_Set_not_contained_in_Convex_Hull_of_Subset_not_containing_Point). It says: “Then x ∉ conv C.”

**Sources:** none listed. No primary source with a working link was found.

### Reversing face inclusion swaps simple and simplicial polytopes

**Remember:** A vertex with d facets becomes a facet with d vertices.

*True by definition.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 52B11. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A facet of a d-dimensional polytope is a face of dimension d − 1. A simple polytope has exactly d facets through each vertex. A simplicial polytope has exactly d vertices on each facet.

**Problem.** The polar of a full-dimensional polytope with the origin inside is simplicial exactly when the original polytope is simple.

**How the definition helps.** These two incidence counts exchange roles when face inclusion reverses (our own). For the polar, each vertex becomes a facet whose vertices correspond to the facets through the original vertex (our own). This correspondence uses the face-duality theorem for polars (our own). The usual simplex definition agrees because a facet needs d affinely independent vertices to span its affine space (our own).

**Wikipedia:** [Simplicial polytope](https://en.wikipedia.org/wiki/Simplicial_polytope). It says: “It is topologically dual to simple polytopes.”

**Sources:** none listed. No primary source with a working link was found.

### The moment curve exposes small vertex sets as faces

**Remember:** Put a double root at each vertex you want to expose.

*Makes the theorem clean to state or prove.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 52B11. arXiv math.MG. Level 2: later undergraduate.

**Definition.** The moment curve sends t to (t, t², …, tᵈ). For d ≥ 2, the hull of at least d + 1 distinct points on this curve is a cyclic d-polytope.

**Problem.** Any nonempty subset of at most d/2 vertices of a cyclic d-polytope spans a face.

**How the definition helps.** On the moment curve, each polynomial of degree at most d is a constant plus a linear function of the coordinates (our own). Multiply the factors (t − s)² over the selected vertex parameters s (our own). The product vanishes there and is positive at all other vertices (our own). Its associated affine function therefore reaches its minimum exactly on the hull of the chosen vertices, making that hull a face (our own).

**Wikipedia:** [Cyclic polytope](https://en.wikipedia.org/wiki/Cyclic_polytope). It says: “every set of at most d/2 vertices forms a face.”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy's rigidity theorem needs the polyhedra to be convex

**Remember:** A convex polyhedron cannot have a dent that pops in and out.

*Rules out counterexamples.* MSC 52B10 (Three-dimensional polytopes), 52C25. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Cauchy's theorem is stated only for convex polyhedra in three dimensions. Two polyhedra are combinatorially equivalent when they have the same face lattice, the pattern of how their vertices, edges and faces are glued.

**Problem.** Cauchy's rigidity theorem: two combinatorially equivalent convex polyhedra with congruent corresponding faces are congruent. So a convex polyhedron made of rigid plates joined by hinges cannot flex.

**How the definition helps.** Convexity excludes counterexamples to both uniqueness and rigidity. Push in one vertex of a regular icosahedron, reflecting its pyramid of five faces inward, to get a different polyhedron with the same faces and gluing. Bricard's octahedra and Connelly's 1977 sphere are nonconvex polyhedra that flex while every face stays rigid.

**Wikipedia:** [Cauchy's theorem (geometry)](https://en.wikipedia.org/wiki/Cauchy%27s_theorem_%28geometry%29). It says: “To see that convexity is necessary, consider a regular icosahedron. One can "push in" a vertex to create a nonconvex polyhedron that is still combinatorially equivalent to the regular icosahedron”

**Sources:**

- [R. Connelly, A counterexample to the rigidity conjecture for polyhedra, Publ. Math. IHÉS 47 (1977) 333–338](https://doi.org/10.1007/BF02684342)

### Projection through one facet draws polytope graphs without crossings

**Remember:** Look through one face and draw what lies behind it.

*Makes the theorem clean to state or prove.* MSC 52B10 (Three-dimensional polytopes), 52B35, 52B05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A Schlegel diagram projects the boundary of a convex polytope onto the plane of one face, omitting that face’s interior. The viewpoint lies just beyond that face and strictly inside the half-spaces of every other face.

**Problem.** Every three-dimensional convex polytope has a Schlegel diagram that draws its vertices and edges in the plane without crossings.

**How the definition helps.** Projection draws each edge as a straight segment and separates it from nonincident edges (our own). The geometric work moves to choosing a viewpoint and showing each ray through the facet interior has just one far boundary point (our own). Convexity makes the part of each ray inside the polytope a single interval (our own).

**Wikipedia:** [Schlegel diagram](https://en.wikipedia.org/wiki/Schlegel_diagram). It says: “through a point just outside one of its facets.”

**Sources:** none listed. No primary source with a working link was found.

### Boundedness makes finite half-space intersections finite convex hulls

**Remember:** A finite convex hull cannot contain an infinite ray.

*Rules out counterexamples.* MSC 52B11 (\\(n\\)-dimensional polytopes), 52B05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A polytope is a bounded intersection of finitely many closed half-spaces, each given by a weak linear inequality. A polyhedron may use the same inequalities without the boundedness condition.

**Problem.** Nonempty polytopes are exactly the convex hulls of nonempty finite sets of points.

**How the definition helps.** Boundedness excludes the half-line \[0, ∞), which extends farther than any finite list of generators (our own). The polytope representation theorem supplies both directions (our own). In particular, listing the finitely many corners still requires proving that their hull fills the bounded intersection (our own).

**Wikipedia:** [Convex polytope](https://en.wikipedia.org/wiki/Convex_polytope). It says: “By requiring that the intersection of half-spaces results in a bounded set, the definition becomes equivalent to the vertex-representation.”

**Sources:** none listed. No primary source with a working link was found.

### Finite convex hulls make affine images of polytopes polytopes

**Remember:** An affine map sends the hull of points to the hull of their images.

*True by definition.* MSC 52B11 (\\(n\\)-dimensional polytopes), 52B55. arXiv math.CO, math.MG. Level 2: later undergraduate.

**Definition.** Define a polytope as the convex hull of finitely many points. The convex hull consists of their weighted combinations with nonnegative weights that sum to 1. The inequality definition uses a nonempty bounded solution set of finitely many weak linear inequalities.

**Problem.** The image of a convex polytope under an affine map is a convex polytope. The sum of two convex polytopes is also a convex polytope, where the sum contains every sum of one point from each.

**How the definition helps.** Our own proof uses the hull definition because affine maps preserve the weighted combinations that form the hull. For sums, multiply the weights from the two hulls to express each sum as a convex combination of pairwise sums of generating points. The converse follows by splitting each pairwise sum. With the inequality definition, a projection requires eliminating variables. The work that lets us switch descriptions is the Minkowski–Weyl theorem, which says that both define the same sets.

**Wikipedia:** [Convex polytope](https://en.wikipedia.org/wiki/Convex_polytope). It says: “This is equivalent to defining a bounded convex polytope as the convex hull of a finite set of points”

**Sources:** none listed. No primary source with a working link was found.

### Half-space intersections make polytope intersections and slices polytopes

**Remember:** Intersecting polytopes just pools their lists of inequalities.

*True by definition.* MSC 52B11 (\\(n\\)-dimensional polytopes), 52B55. arXiv math.CO, math.MG. Level 2: later undergraduate.

**Definition.** Define a polytope as a nonempty bounded intersection of finitely many closed half-spaces, each given by a weak linear inequality. Another definition takes the convex hull of finitely many points.

**Problem.** A nonempty intersection of two polytopes is a polytope. A nonempty intersection of a polytope and an affine subspace is also a polytope.

**How the definition helps.** Our own argument pools the two lists of inequalities, leaving a bounded solution set. An affine subspace also has a finite list because each linear equality counts as two inequalities. The work lies in proving that bounded sets given by inequalities agree with hulls of finite point sets.

**Wikipedia:** [Convex polytope](https://en.wikipedia.org/wiki/Convex_polytope). It says: “A convex polytope may be defined as an intersection of a finite number of half-spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Vertex and inequality descriptions give short checks for polytope membership

**Remember:** A weighted combination proves membership, and one failed inequality proves nonmembership.

*True by definition.* MSC 52B11 (\\(n\\)-dimensional polytopes), 90C05. arXiv math.OC, math.CO. Level 2: later undergraduate.

**Definition.** A convex polytope is the convex hull of finitely many vertices, its corner points. It is also the bounded solution set of a finite list of weak linear inequalities. The Minkowski–Weyl theorem is what makes the two descriptions equivalent.

**Problem.** For a point in a d-dimensional polytope, at most d + 1 vertices with weights prove membership. For a point outside it, one inequality from the given list proves nonmembership.

**How the definition helps.** The two descriptions give different short proofs depending on where the point lies. For a point inside, check that the weights are nonnegative, sum to 1 and reproduce the point. For a point outside, check that it breaks the stated inequality. Our own count uses Carathéodory’s theorem, which limits how many vertices a convex combination needs in dimension d. The two checks need both descriptions to be available.

**Wikipedia:** [Convex polytope](https://en.wikipedia.org/wiki/Convex_polytope). It says: “to show that it is not in the polytope, it is sufficient to present a single defining inequality that it violates”

**Sources:** none listed. No primary source with a working link was found.

### Zonohedra defined as segment sums are closed under addition

**Remember:** To add zonohedra, put all their generating segments in one sum.

*True by definition.* MSC 52B12 (Special polytopes (linear programming, centrally symmetric, etc.)), 52B11. arXiv math.MG, math.CO. Level 2: later undergraduate.

**Definition.** A zonohedron is a three-dimensional sum of finitely many line segments. The sum consists of all sums of one point from each segment. The geometric definition instead requires a convex polyhedron whose polygonal faces are each symmetric about their centre.

**Problem.** The sum of two zonohedra is a zonohedron. Each zonohedron is symmetric about a point.

**How the definition helps.** The segment definition makes the sum a single longer sum of segments. In our own argument, central symmetry follows by reflecting each chosen point in the midpoint of its segment. The centre of the whole sum is the sum of those midpoints. Starting from the face definition, the main work is proving that a polyhedron with centrally symmetric faces is a sum of segments.

**Wikipedia:** [Zonohedron](https://en.wikipedia.org/wiki/Zonohedron). It says: “The Minkowski sum of any two zonohedra is another zonohedron, generated by the union of the generators of the two given zonohedra.”

**Sources:** none listed. No primary source with a working link was found.

### Flags count the symmetries of every Platonic solid

**Remember:** Each edge belongs to four flags, and each flag names one symmetry.

*True by definition.* MSC 52B15 (Symmetry properties of polytopes), 20H15. arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** A flag consists of a vertex, an edge containing that vertex, and a face containing that edge. Define geometric regularity by the ability to carry any flag to any other by a symmetry.

**Problem.** A Platonic solid with E edges has 4E symmetries, including orientation-reversing ones.

**How the definition helps.** Flag transitivity makes every flag the image of one chosen flag (our own). A symmetry fixing that flag fixes its vertex, edge midpoint, face center and solid center (our own). These four points are noncoplanar, so only the identity fixes them all, giving one symmetry per flag and four flags per edge (our own). The geometric input is that each Platonic solid satisfies this flag definition of regularity (our own).

**Wikipedia:** [Regular polytope](https://en.wikipedia.org/wiki/Regular_polytope). It says: “whose symmetry group acts transitively on its flags”

**Paper or page:** [Tessellations of surfaces](https://arxiv.org/abs/2303.17263). It says: “Each Platonic solid admits a triangulation into right-angle triangles determined by barycentric subdivisions of its faces.”

**Sources:** none listed. No primary source with a working link was found.

### Regularity by flag symmetry makes dual polytopes regular

**Remember:** Reversing the order of faces gives matching flags in the dual.

*True by definition.* MSC 52B15 (Symmetry properties of polytopes), 51M20. arXiv math.MG, math.CO. Level 2: later undergraduate.

**Definition.** A flag is a chain of nested faces with one face of each dimension. A full-dimensional convex polytope is regular if a symmetry can send any flag to any other flag. The dual reverses face inclusion, so vertices become largest proper faces and the reverse.

**Problem.** The dual of a regular convex polytope is regular.

**How the definition helps.** Flag symmetry transfers directly, because duality sends flags to flags in reverse order (our own proof). Centre the polytope at the average of its vertices, so every symmetry is orthogonal and fixes the origin. Then the symmetries act on the polar dual and preserve the face correspondence. The work is proving this face correspondence, instead of testing the faces and vertex slices of the dual one by one.

**Wikipedia:** [Regular polytope](https://en.wikipedia.org/wiki/Regular_polytope). It says: “The dual of a regular polytope is also a regular polytope.”

**Sources:** none listed. No primary source with a working link was found.

### Taking the polar leaves a centered polyhedron’s symmetry group unchanged

**Remember:** A polar trades faces for vertices without losing orthogonal symmetries.

*True by definition.* MSC 52B15 (Symmetry properties of polytopes), 20H15. arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** Place the origin inside a convex polyhedron. Its polar consists of all vectors y such that x · y ≤ 1 for every point x in the polyhedron. The dot denotes the dot product.

**Problem.** A convex polyhedron and its polar have exactly the same orthogonal symmetries. For example, a centered cube and its polar octahedron have the same symmetries.

**How the definition helps.** The dot-product definition makes every orthogonal symmetry preserve the polar (our own). Applying this argument twice gives the converse because the polar of the polar is the original polyhedron (our own). This last theorem supplies the geometric step missing from a description that only exchanges vertices and faces (our own).

**Wikipedia:** [Dual polyhedron](https://en.wikipedia.org/wiki/Dual_polyhedron). It says: “Duality preserves the symmetries of a polyhedron.”

**Sources:** none listed. No primary source with a working link was found.

### Empty lattice triangles give the smallest possible area

**Remember:** Every extra lattice class would put a fourth point in the triangle.

*Makes the theorem clean to state or prove.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)), 52A10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An empty lattice triangle has three noncollinear integer vertices and no other integer points, even on its edges. A unimodular triangle has edge vectors at one vertex that form a basis of the integer lattice.

**Problem.** An empty lattice triangle is unimodular and has area one half.

**How the definition helps.** Emptiness rules out extra integer points in the entire parallelogram spanned by the triangle’s two edges (our own). The diagonal opposite their shared vertex divides it into two triangles exchanged by reflection through its midpoint (our own). The half-open parallelogram therefore contains only the origin after translating the shared vertex there (our own). It represents every lattice class modulo the edge vectors, so they form a basis and their triangle has area one half (our own).

**Wikipedia:** [Pick's theorem](https://en.wikipedia.org/wiki/Pick%27s_theorem). It says: “a triangle with three integer vertices and no other integer points has area exactly ½”

**Sources:** none listed. No primary source with a working link was found.

### Lattice edge lengths make the planar lattice count quadratic

**Remember:** Area scales quadratically and lattice boundary length scales linearly.

*Makes the theorem clean to state or prove.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)), 52A10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A lattice polygon has vertices with integer coordinates. An edge with coordinate differences a and b has lattice length equal to the greatest common divisor of \|a\| and \|b\|.

**Problem.** A convex lattice polygon has area A and total lattice edge length B. Its dilation by a positive integer n contains An² + Bn/2 + 1 lattice points.

**How the definition helps.** Lattice length counts the integer points on an edge when its starting vertex is omitted (our own). Going around the polygon counts every boundary point once, and dilation by n multiplies each edge length by n (our own). Pick’s theorem gives the total point count as area plus half the boundary count plus one (our own). Dilation multiplies the area by n² (our own).

**Wikipedia:** [Pick's theorem](https://en.wikipedia.org/wiki/Pick%27s_theorem). It says: “the number of integer points on its boundary”

**Sources:** none listed. No primary source with a working link was found.

### Order volumes count linear extensions

**Remember:** Sort the coordinates and each valid order gets one equal piece.

*True by definition.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 2: later undergraduate.

**Definition.** The order polytope of a finite partially ordered set has one coordinate in \[0, 1\] for each element. Require the coordinates to respect all comparisons in the order. A linear extension is a total order that keeps those comparisons.

**Problem.** For a partial order on n elements, n! times the order polytope’s volume counts its linear extensions.

**How the definition helps.** Coordinate inequalities make each strict ordering of the coordinates either entirely allowed or entirely excluded. Coordinate permutations give all n! such regions of the unit cube equal volume, and ties have volume zero (our own calculation). The allowed regions correspond exactly to linear extensions.

**Wikipedia:** [Order polytope](https://en.wikipedia.org/wiki/Order_polytope). It says: “an order polytope can be partitioned into order simplices in a canonical way”

**Sources:**

- [R. P. Stanley, Two poset polytopes (1986)](https://doi.org/10.1007/BF02187680)

### Unimodular pieces count lattice volume

**Remember:** Each unimodular piece counts once.

*True by definition.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A lattice simplex is unimodular if its edge vectors at one vertex form a basis of the lattice in their linear span. Normalize volume so a full-dimensional unimodular simplex has volume one.

**Problem.** The normalized volume of a full-dimensional lattice polytope with a unimodular triangulation counts its top-dimensional simplices.

**How the definition helps.** Normalized volume assigns one unit to each full-dimensional simplex in the triangulation. In our own calculation, ordinary volume requires dividing the absolute edge determinant by d! in dimension d, using lattice coordinates. The basis condition makes that determinant one in absolute value. Multiplying ordinary volume by d! removes the denominator, and additivity counts the pieces. Finding such a triangulation is a separate problem.

**Paper or page:** [Flow polytopes for extensions of bipartite graphs](https://arxiv.org/abs/2509.26445v2). It says: “is equal to the number of maximal simplices”

**Sources:**

- [Flow polytopes for extensions of bipartite graphs, Theorem 2.14](https://arxiv.org/abs/2509.26445v2)

### Valuing the Dehn invariant in a tensor product makes dissection invariance automatic

**Remember:** Length times angle, forgetting rational multiples of π.

*Makes the theorem clean to state or prove.* MSC 52B45 (Dissections and valuations (Hilbert's third problem, etc.)), 51M20. arXiv math.MG, math.CO. Level 2: later undergraduate.

**Definition.** The Dehn invariant of a polyhedron is the sum over its edges of (edge length) ⊗ (dihedral angle). The sum lives in the tensor product ℝ ⊗ (ℝ / 2πℚ) over the integers. So angles count only modulo rational multiples of π, and the expression is additive in each factor.

**Problem.** Dehn's theorem, answering Hilbert's third problem: a cube and a regular tetrahedron of equal volume cannot be cut into finitely many polyhedral pieces and reassembled into each other.

**How the definition helps.** The tensor product is built so that each step of a dissection leaves the sum unchanged. A new edge inside the solid has angles summing to 2π, and one on a face has angles summing to π, so both give zero; splitting an edge or angle is handled by additivity. The cube's dihedral angle π/2 gives invariant zero, while the tetrahedron's angle arccos(1/3) is not a rational multiple of π.

**Wikipedia:** [Dehn invariant](https://en.wikipedia.org/wiki/Dehn_invariant). It says: “in either case this rational multiple of π does not contribute to the Dehn invariant.”

**Sources:**

- [M. Dehn, Ueber den Rauminhalt, Mathematische Annalen 55 (1901) 465–478](https://doi.org/10.1007/BF01448001)
- [B. Jessen, The algebra of polyhedra and the Dehn–Sydler theorem, Mathematica Scandinavica 22 (1968) 241](https://doi.org/10.7146/math.scand.a-10888)

### Defining polyhedra as spheres with disk faces saves Euler's formula

**Remember:** Euler's formula is about spheres made of polygons, not every solid with flat faces.

*Rules out counterexamples.* MSC 52B70 (Polyhedral manifolds), 52B05. arXiv math.MG, math.GT. Level 2: later undergraduate.

**Definition.** A polyhedron is taken to be a solid whose surface is topologically a sphere and whose faces are topologically disks. Every convex polyhedron is of this kind.

**Problem.** Every polyhedron in this sense satisfies Euler's formula V − E + F = 2, where V, E and F count its vertices, edges and faces.

**How the definition helps.** Cauchy's proof works for any surface that is a sphere made of disk faces, so with this definition the formula holds. The shapes it bars break the formula: V − E + F is 1 for the tetrahemihexahedron, −6 for the small stellated dodecahedron and 0 for toroidal polyhedra. Lakatos called this refusal to apply the theorem monster-barring. He preferred to read the hidden condition off the proof and build it into the theorem.

**Wikipedia:** [Proofs and Refutations](https://en.wikipedia.org/wiki/Proofs_and_Refutations), [Imre Lakatos](https://en.wikipedia.org/wiki/Imre_Lakatos), [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “Lakatos termed the polyhedral counterexamples to Euler's formula monsters and distinguished three ways of handling these objects: Firstly, monster-barring, by which means the theorem in question could not be applied to such objects.”

**Sources:**

- [I. Lakatos, Proofs and Refutations: The Logic of Mathematical Discovery, Cambridge University Press (1976)](https://doi.org/10.1017/cbo9781139171472)

### Closed bodies keep Minkowski’s lattice point at equality

**Remember:** At the volume threshold, the lattice point may sit on the boundary.

*Rules out counterexamples.* MSC 52C07 (Lattices and convex bodies in \\(n\\) dimensions (aspects of discrete geometry)), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A convex body is a compact convex set with nonempty interior. In particular, it contains its boundary, unlike an open convex region.

**Problem.** A convex body symmetric about zero contains a nonzero lattice point when its volume equals 2ᵈ times the volume of a lattice cell.

**How the definition helps.** Closedness keeps a limiting lattice point on the boundary (our own). Enlarge the body by factors 1 + 1/n and apply the strict volume theorem to each copy (our own). Boundedness leaves finitely many lattice points, so one nonzero point recurs and its rescaled copies converge to it inside the original body (our own). The open cube (−1, 1)ᵈ attains the threshold but contains no nonzero integer point (our own).

**Paper or page:** [Theorem 5.1. (Minkowski)](https://venhance.github.io/napkin/Napkin.pdf). It says: “The volume of S equals 2ⁿ d and S is compact”

**Sources:** none listed. No primary source with a working link was found.

### Half-open parallelepipeds make lattice translates tile space without overlaps

**Remember:** Each coordinate splits into an integer part and a remainder in \[0, 1).

*True by definition. Confidence: medium.* MSC 52C07 (Lattices and convex bodies in \\(n\\) dimensions (aspects of discrete geometry)), 11H06. arXiv math.MG, math.NT. Level 2: later undergraduate.

**Definition.** Let b₁, …, bₙ be a basis of a lattice in ℝⁿ. The half-open parallelepiped is the set of points c₁b₁ + ⋯ + cₙbₙ with each cᵢ in \[0, 1). The closed parallelepiped, with each cᵢ in \[0, 1\], has neighboring copies that overlap on their boundaries.

**Problem.** The translates of the half-open parallelepiped by the lattice vectors are disjoint and cover ℝⁿ.

**How the definition helps.** The half-open choice puts each point in exactly one translate, because each real number has one integer part and one remainder in \[0, 1). A point x₁b₁ + ⋯ + xₙbₙ lies in the translate indexed by the integer parts of x₁, …, xₙ, and in no other (our own proof). Closed parallelepipeds cover ℝⁿ but overlap on their boundaries.

**Wikipedia:** [Lattice (group)](https://en.wikipedia.org/wiki/Lattice_%28group%29). It says: “A lattice fills the whole of ℝⁿ with equal tiles, copies of the n-dimensional parallelepiped spanned by the basis vectors”

**Sources:** none listed. No primary source with a working link was found.

### Origin symmetry turns lattice differences into points of the body

**Remember:** Halve the body, then subtract two points that match modulo the lattice.

*Rules out counterexamples.* MSC 52C07 (Lattices and convex bodies in \\(n\\) dimensions (aspects of discrete geometry)), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A convex body is a compact convex set with nonempty interior. It is symmetric about the origin if it contains −x whenever it contains x.

**Problem.** Let a lattice consist of all integer combinations of a basis of ℝᵈ. An origin-symmetric convex body contains a nonzero lattice point if its volume exceeds 2ᵈ times the volume of the basis parallelepiped.

**How the definition helps.** For u and v in the halved body, symmetry puts both 2u and −2v in the body (our own). Blichfeldt’s volume theorem gives two distinct such points whose difference belongs to the lattice (our own). Convexity puts their difference, the midpoint of 2u and −2v, in the body (our own). Without origin symmetry, the rectangle \[0.1, 0.9\] × \[−3, 3\] has area above four but misses every integer point (our own).

**Paper or page:** [Theorem 5.1. (Minkowski)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let S ⊆ ℝⁿ be a convex set containing 0 which is centrally symmetric (meaning that x ∈ S ⇔ −x ∈ S).”

**Sources:** none listed. No primary source with a working link was found.

### Hole-free triangulations have tree duals

**Remember:** One boundary leaves no cycle in the graph of triangles.

*Rules out counterexamples.* MSC 52C20 (Tilings in \\(2\\) dimensions (aspects of discrete geometry)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Use a simple polygon, whose boundary is one closed chain with no crossings. Triangulate it without adding vertices. Join two triangles in a graph when they share an interior edge.

**Problem.** The adjacency graph of triangles in any such triangulation is a tree.

**How the definition helps.** With no holes or added vertices, the triangles have exactly enough shared edges to connect them in a tree. Euler's formula for a disk gives one fewer interior edge than triangles, and paths inside the polygon show the graph is connected (our own proof). Between two concentric aligned squares, triangulating the four trapezoids gives a cycle. Joining an interior point of a triangle to its corners also gives a cycle.

**Wikipedia:** [Art gallery problem](https://en.wikipedia.org/wiki/Art_gallery_problem). It says: “the weak dual graph to the triangulation (the undirected graph having one vertex per triangle and one edge per pair of adjacent triangles) is a tree”

**Sources:** none listed. No primary source with a working link was found.

### Power diagrams are Voronoi slices

**Remember:** One added height turns each weight into a squared distance.

*True by definition.* MSC 52C22 (Tilings in \\(n\\) dimensions (aspects of discrete geometry)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** In a power diagram, compare squared distance to each site minus its weight. In a Voronoi diagram, compare ordinary distances to the sites.

**Problem.** Every power diagram of finitely many Euclidean sites is a flat slice of an ordinary Voronoi diagram in one higher dimension.

**How the definition helps.** Encoding weights as heights turns the weighted comparison into an ordinary nearest-site test. In our own construction, choose K at least as large as every weight. Place the site of weight w at height √(K − w) above its original position. By Pythagoras, its squared distance from a point at height zero equals its power there plus K. Adding the same constant preserves all minimizers, including ties.

**Wikipedia:** [Power diagram](https://en.wikipedia.org/wiki/Power_diagram). It says: “interpreted as a planar cross-section of an unweighted three-dimensional Voronoi diagram”

**Sources:**

- [F. Aurenhammer, Power Diagrams: Properties, Algorithms and Applications (1987)](https://doi.org/10.1137/0216006)

### Power weights preserve flat boundaries

**Remember:** Squaring first lets the same quadratic term cancel.

*True by definition.* MSC 52C22 (Tilings in \\(n\\) dimensions (aspects of discrete geometry)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Assign each of finitely many distinct Euclidean sites p a real weight w. Its power cell contains every point x where ‖x − p‖² − w attains the smallest value among the sites.

**Problem.** Each power cell for finitely many sites is a convex polyhedron, possibly empty or unbounded.

**How the definition helps.** Subtracting weights after squaring makes every pairwise comparison linear in the unknown point. In our own calculation, expanding both squares cancels the common term ‖x‖². Each inequality therefore describes a closed half-space for distinct sites. Their intersection is a convex polyhedron. Subtracting weights from unsquared distances can give curved boundaries.

**Wikipedia:** [Power diagram](https://en.wikipedia.org/wiki/Power_diagram). It says: “the intersection of the halfspaces bounded by the radical axes”

**Sources:**

- [F. Aurenhammer, Power Diagrams: Properties, Algorithms and Applications (1987)](https://doi.org/10.1137/0216006)

### Voronoi cells as half-space intersections are convex polyhedra by definition

**Remember:** Each other site contributes one linear inequality.

*True by definition.* MSC 52C22 (Tilings in \\(n\\) dimensions (aspects of discrete geometry)), 52B11. arXiv math.MG, cs.CG. Level 2: later undergraduate.

**Definition.** Take a finite set of distinct points, called sites, in Euclidean space. For each other site, take the closed half-space on this site's side of their perpendicular bisector. Define the Voronoi cell of the site as the intersection of these half-spaces. The usual definition is the set of points at least as close to this site as to any other.

**Problem.** Each Voronoi cell of a finite set of distinct sites is a convex polyhedron. The cell may be unbounded.

**How the definition helps.** Written as an intersection of half-spaces, each cell is a convex polyhedron by the definition of a polyhedron. The work goes into one comparison of two distances. The condition \|x − p\|² ≤ \|x − q\|² is linear in x, because the \|x\|² terms cancel (our own step).

**Wikipedia:** [Voronoi diagram](https://en.wikipedia.org/wiki/Voronoi_diagram). It says: “For one other site pⱼ, the points that are closer to pₖ than to pⱼ, or equally distant, form a closed half-space”

**Sources:** none listed. No primary source with a working link was found.

### Closed disks prevent Gabriel crossings

**Remember:** Count points on the rim to stop crossings.

*Rules out counterexamples.* MSC 52C45 (Combinatorial complexity of geometric structures). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Join two sites if the closed disk with their segment as diameter contains no other site. An alternative rule tests only the open disk.

**Problem.** For any finite set of distinct plane sites, the closed-disk Gabriel graph has no crossing edges.

**How the definition helps.** Counting boundary points blocks even a crossing with a right angle. In our own proof, two crossing segments are diagonals of a convex quadrilateral. Its angles sum to 360°, so some angle is at least 90°. Its vertex lies in the closed disk whose diameter joins its two neighbors. The open-disk rule admits both diagonals of a square.

**Wikipedia:** [Gabriel graph](https://en.wikipedia.org/wiki/Gabriel_graph). It says: “The Gabriel graph is a subgraph of the Delaunay triangulation.”

**Sources:**

- [K. R. Gabriel and R. R. Sokal, A New Statistical Approach to Geographic Variation Analysis (1969)](https://doi.org/10.2307/2412323)

### Neighborhood graphs contain minimum trees

**Remember:** A third site closer to both ends gives a cheaper link.

*Rules out counterexamples.* MSC 52C45 (Combinatorial complexity of geometric structures). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Join two sites if no third site is strictly closer to both than they are to each other.

**Problem.** For finitely many distinct plane sites, every spanning tree of least total length lies in the relative neighborhood graph.

**How the definition helps.** Strict comparison rules out only edges that admit a cheaper replacement. In our own proof, removing a tree edge splits the tree into two parts. A third site closer to both ends gives a shorter edge between the parts. That replacement contradicts minimality. Allowing equal distances in the rejection test would delete every edge of an equilateral triangle.

**Wikipedia:** [Relative neighborhood graph](https://en.wikipedia.org/wiki/Relative_neighborhood_graph). It says: “the Euclidean minimum spanning tree is a subgraph of it”

**Sources:**

- [G. T. Toussaint, The relative neighbourhood graph of a finite planar set (1980)](https://doi.org/10.1016/0031-3203(80)90066-7)

### Anti-exchange gives unique generators

**Remember:** If two outside points cannot trade places, the smallest generator is unique.

*Rules out counterexamples.* MSC 52A01 (Axiomatic and generalized convexity). arXiv math.CO. Level 3: graduate.

**Definition.** A closure operation enlarges sets, preserves inclusions, and gives the same result when applied twice. A finite convex geometry has such an operation, with the empty set closed, and the anti-exchange rule. The rule says that for distinct x and y outside a closed set C, if y is in the closure of C plus x, then x is not in the closure of C plus y.

**Problem.** In a finite convex geometry, each closed set has a unique inclusion-minimal generator: a subset whose closure is that set and whose proper subsets do not generate it.

**How the definition helps.** Anti-exchange prevents one missing generator from being replaced by other points. Compare two minimal generators, remove a point x of the first that the second omits, and add points of the second until x enters the closure (our own proof). Just before that step, the next point and x would trade places, which anti-exchange forbids. Without the rule, take linear span on two parallel nonzero vectors: each one alone is a minimal generator of the pair.

**Paper or page:** [Cospanning characterizations of antimatroids and convex geometries](https://arxiv.org/abs/2107.08556v1). It says: “is uniquely generated if and only if the operator φ satisfies the anti-exchange property.”

**Sources:**

- [Cospanning characterizations of antimatroids and convex geometries, Theorem 2.8](https://arxiv.org/abs/2107.08556v1)

### Nondegenerate equilibria satisfy Euler’s formula

**Remember:** A sphere has no isolated equilibria about its center.

*Rules out counterexamples.* MSC 52A15 (Convex sets in \\(3\\) dimensions (including convex surfaces)). arXiv math.MG. Level 3: graduate.

**Definition.** For a smooth convex body and an interior point c, equilibria are critical points of squared distance from c on the boundary. Minima are stable, maxima are unstable, and saddles have both increasing and decreasing directions. An equilibrium is nondegenerate if the matrix of second derivatives in local surface coordinates has no zero eigenvalue.

**Problem.** For a smooth convex body in three dimensions with only nondegenerate equilibria, stable plus unstable equilibria minus saddles equals two.

**How the definition helps.** Nondegeneracy lets each equilibrium contribute a sign set by its second derivatives (our own account). Morse theory then identifies the signed count with the Euler characteristic of the boundary sphere. Without nondegeneracy, every point of a round sphere is an equilibrium relative to its center (our own counterexample).

**Paper or page:** [Centroids and equilibrium points of convex bodies](https://arxiv.org/abs/2407.19177v2). It says: “S−H+U=2.”

**Sources:**

- [Centroids and equilibrium points of convex bodies (Theorem 3.4)](https://arxiv.org/abs/2407.19177v2)

### Recession directions guard closed sums

**Remember:** Escaping summands with a convergent sum leave opposite rays inside the two sets.

*Rules out counterexamples.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)), 49J53. arXiv math.OC. Level 3: graduate.

**Definition.** A recession direction d keeps x + td in the set for every member x and every t ≥ 0. For a nonempty closed convex set, one ray in direction d suffices.

**Problem.** Two nonempty closed convex sets in Euclidean space have a closed sum if they have no opposite nonzero recession directions.

**How the definition helps.** Opposite recession directions are the only way summands can escape while their sums converge. In our own proof, divide escaping summands by the norm of the first and take a convergent subsequence of directions. Convexity and closedness give rays in both limiting directions. Without escape, a convergent subsequence of summands realizes the limiting sum. In our own counterexample, adding the horizontal axis to the region y ≥ exp(x) gives the open upper half-plane.

**Wikipedia:** [Recession cone](https://en.wikipedia.org/wiki/Recession_cone). It says: “Let nonempty closed convex sets A,B ⊂ ℝᵈ such that for any y ∈ recc(A) ∖ {0} then −y ∉ recc(B), then A + B is closed.”

**Sources:** none listed. No primary source with a working link was found.

### Support functions turn set addition into ordinary addition

**Remember:** Add sets by adding their support values in each direction.

*True by definition.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)), 52A41. arXiv math.MG. Level 3: graduate.

**Definition.** For a nonempty set A in ℝⁿ, its support function h(A, x) is the supremum of ⟨x, a⟩ over a in A. The Minkowski sum A + B is the set of all sums a + b, with a in A and b in B.

**Problem.** For nonempty A and B, h(A + B, x) equals h(A, x) + h(B, x). If A and B are also closed and convex, then A + C = B + C implies A = B for nonempty bounded C.

**How the definition helps.** The largest projection of a sum splits into the two separate suprema, so addition is immediate. For cancellation, the support values of bounded C are finite and can be subtracted direction by direction (our own proof). This gives equal support functions for A and B, and the separation theorem for closed convex sets recovers each set from its support function.

**Wikipedia:** [Support function](https://en.wikipedia.org/wiki/Support_function). It says: “Furthermore, the support function, as a function of the set A, is compatible with many natural geometric operations, like scaling, translation, rotation and Minkowski addition.”

**Sources:** none listed. No primary source with a working link was found.

### Support functions give Blaschke selection

**Remember:** Bound the sets to bound how fast their support functions can change.

*Makes the theorem clean to state or prove.* MSC 52A27 (Approximation by convex sets). arXiv math.MG. Level 3: graduate.

**Definition.** A nonempty compact convex set has a support function giving its largest dot product with each unit direction. The Hausdorff distance is the least radius for which each set lies within that distance of the other. It equals the largest absolute difference of the two support functions.

**Problem.** Within a fixed Euclidean ball, every sequence of nonempty compact convex sets has a subsequence converging in Hausdorff distance. Its limit is again nonempty, compact and convex.

**How the definition helps.** Support functions turn the selection problem into compactness of a family of functions on the unit sphere. If all sets lie in a ball of radius R about the origin, the support values are bounded by R and change by at most Rδ when the direction moves by δ (our own proof). Arzelà–Ascoli gives a uniformly convergent subsequence, and its limit is again a support function. The distance identity turns uniform convergence into Hausdorff convergence.

**Wikipedia:** [Support function](https://en.wikipedia.org/wiki/Support_function). It says: “The mapping τ is an isometry between this cone, endowed with the Hausdorff metric, and a subcone of the family of continuous functions on Sⁿ⁻¹ with the uniform norm.”

**Sources:** none listed. No primary source with a working link was found.

### Separation rules out flat transversals

**Remember:** A flat meeting every hull makes the hulls of two groups meet.

*Makes the theorem clean to state or prove.* MSC 52A35 (Helly-type theorems and geometric transversal theory). arXiv cs.CG, math.MG. Level 3: graduate.

**Definition.** Call k nonempty compact Euclidean sets well-separated if every split into two nonempty groups admits a hyperplane with the groups on opposite open sides. A transversal is an affine subspace meeting each set under consideration.

**Problem.** For 2 ≤ k ≤ d + 1 in ℝᵈ, well-separated sets have no transversal of dimension k − 2 to their convex hulls. The converse also holds.

**How the definition helps.** Strict separation turns a question about a flat meeting many hulls into a test on two groups at a time. Points chosen from k hulls on one (k − 2)-dimensional flat are affinely dependent, and splitting the dependence by sign breaks strict separation for some split (our own proof). Conversely, if some split has no strict separator, the two compact hulls meet. Writing the common point as a convex combination on each side gives k dependent representatives, which lie on a (k − 2)-dimensional flat.

**Paper or page:** [Well-Separation and Hyperplane Transversals in High Dimensions](https://arxiv.org/abs/2209.02319v1). It says: “are well-separated if and only if their convex hulls have no (k − 2)-transversal.”

**Sources:**

- [Well-Separation and Hyperplane Transversals in High Dimensions, Lemma 2.1](https://arxiv.org/abs/2209.02319v1)

### Polynomial coefficients make mixed volume linear under Minkowski addition

**Remember:** Expand the volume polynomial and compare the coefficient using each weight once.

*True by definition.* MSC 52A39 (Mixed volumes and related topics in convex geometry). arXiv math.MG. Level 3: graduate.

**Definition.** The volume of a weighted Minkowski sum t₁K₁ + ⋯ + tₙKₙ of n convex bodies in ℝⁿ is a polynomial in the nonnegative weights. Define their mixed volume as the coefficient of t₁⋯tₙ divided by n!. Another formula uses an alternating sum of volumes of Minkowski sums over subsets of the bodies.

**Problem.** Mixed volume is symmetric and additive under Minkowski addition in each argument. Scaling any one argument by a positive factor scales the mixed volume by the same factor.

**How the definition helps.** Both rules become a coefficient check in the volume polynomial (our own proof). For the first argument αA + βB, give A and B separate weights and then substitute αt and βt. Only terms linear in one of those two weights contribute, which gives α and β times the two mixed volumes. Symmetry follows by renaming the weights.

**Wikipedia:** [Mixed volume](https://en.wikipedia.org/wiki/Mixed_volume). It says: “One can show that f is a homogeneous polynomial of degree n, so can be written as”

**Sources:** none listed. No primary source with a working link was found.

### Polytope projection bodies are zonotopes

**Remember:** Each facet contributes the support function of one segment.

*True by definition.* MSC 52A39 (Mixed volumes and related topics in convex geometry). arXiv math.MG. Level 3: graduate.

**Definition.** The support function of a compact convex body gives its largest dot product with each unit direction u. In dimension d, project the body orthogonally onto the hyperplane perpendicular to u. The projection body has support value equal to the (d − 1)-dimensional volume of that projection.

**Problem.** For a full-dimensional convex polytope, the projection body is a zonotope. This means it consists of all sums obtained by choosing one point from each of finitely many segments.

**How the definition helps.** Support functions turn Cauchy's projection formula into a sum of contributions from individual segments. In our own calculation, a facet of area a and outward unit normal v contributes a\|u · v\|/2 in direction u. This is the largest dot product with u on the segment joining −av/2 to av/2. Adding segments adds their support functions. Cauchy's formula and the fact that support functions determine convex bodies give the result.

**Wikipedia:** [Projection body](https://en.wikipedia.org/wiki/Projection_body). It says: “the support function of ΠK in the direction u is the (n – 1)-dimensional volume of the projection of K”

**Sources:**

- [J. Bourgain and J. Lindenstrauss, Projection bodies (1988)](https://doi.org/10.1007/BFb0081746)

### Steiner coefficients give quermassintegrals their scaling law and rigid-motion invariance

**Remember:** The volume of a thickened body determines every coefficient.

*True by definition.* MSC 52A39 (Mixed volumes and related topics in convex geometry), 52A22. arXiv math.MG. Level 3: graduate.

**Definition.** For a compact convex set K with interior in ℝⁿ, thicken K to distance t ≥ 0 and measure the volume. Steiner’s formula says this volume is a polynomial in t of degree n. Define the quermassintegral Wⱼ(K) as its coefficient of tʲ divided by the number of ways to choose j objects out of n. This gives one family that includes volume and a constant multiple of surface area.

**Problem.** Rigid motions leave each Wⱼ unchanged. Scaling the body by s &gt; 0 multiplies Wⱼ by sⁿ⁻ʲ.

**How the definition helps.** Both rules come from comparing coefficients of the thickened volumes (our own proof). Rigid motions preserve volume and carry each thickened set to the thickened image. Thickening sK by t equals thickening K by t/s and scaling by s, which multiplies volume by sⁿ, so the coefficient of tʲ gains the factor sⁿ⁻ʲ. The work is Steiner's theorem that the volume is a polynomial.

**Wikipedia:** [Hadwiger's theorem](https://en.wikipedia.org/wiki/Hadwiger%27s_theorem). It says: “The quermassintegrals Wⱼ : 𝕂ⁿ → ℝ are defined via Steiner's formula”

**Sources:** none listed. No primary source with a working link was found.

### John’s contacts bound symmetric bodies

**Remember:** Weighted contact directions measure every squared length.

*True by definition.* MSC 52A40 (Inequalities and extremum problems involving convexity in convex geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A convex body symmetric about zero is in John’s position if its largest-volume inscribed ellipsoid is the Euclidean unit ball. Equivalently, it contains that ball and admits unit contact vectors where the two boundaries meet. Positive weights on those vectors express the identity matrix as a sum of their weighted outer products.

**Problem.** In dimension n, a convex body symmetric about zero and in John’s position lies inside the concentric ball of radius √n.

**How the definition helps.** The contact decomposition writes each squared norm ‖x‖² as a weighted sum of the squares (x · uᵢ)² (our own proof). For x in the body, the supporting hyperplanes at ±uᵢ bound each \|x · uᵢ\| by one. Taking the trace of the identity shows that the weights sum to n, so ‖x‖² ≤ n. The work is John's theorem, which gives the contact decomposition from maximal volume.

**Wikipedia:** [John ellipsoid](https://en.wikipedia.org/wiki/John_ellipsoid). It says: “x = ∑ᵐᵢ₌₁ cᵢ (x · uᵢ) uᵢ.”

**Sources:**

- [Fritz John, Extremum Problems with Inequalities as Subsidiary Conditions (1948, reprinted)](https://doi.org/10.1007/978-1-4612-5412-6_25)

### Surface area as an outer volume derivative gives the isoperimetric inequality

**Remember:** The change in volume under thickening measures surface area.

*True by definition.* MSC 52A40 (Inequalities and extremum problems involving convexity in convex geometry), 52A38. arXiv math.MG. Level 3: graduate.

**Definition.** For a convex body K, let V(t) be the volume of the points at distance at most t from K. Define its surface area as the right derivative of V at t = 0. The usual definition measures the boundary itself.

**Problem.** Among compact convex sets with interior and a given volume in ℝⁿ, a ball has the least surface area.

**How the definition helps.** The derivative definition turns the Brunn–Minkowski inequality for volumes directly into a bound on surface area. Brunn–Minkowski says V(t)¹⁄ⁿ ≥ V(0)¹⁄ⁿ + t·vol(B)¹⁄ⁿ, where B is the unit ball. The two sides agree at zero, so the right derivative of V(t)¹⁄ⁿ at zero is at least vol(B)¹⁄ⁿ. For a ball the inequality for volumes is an equality at every t, so it attains the bound. The work lies in Brunn–Minkowski and in the Minkowski–Steiner formula, which matches the derivative to ordinary boundary area.

**Wikipedia:** [Brunn–Minkowski theorem](https://en.wikipedia.org/wiki/Brunn%E2%80%93Minkowski_theorem). It says: “This agrees with the usual meaning of surface area by the Minkowski-Steiner formula.”

**Sources:**

- [Hermann Minkowski, Volumen und Oberfläche, Mathematische Annalen 57 (1903)](https://doi.org/10.1007/BF01445180)

### A function is μ-strongly convex exactly when its conjugate has 1/μ-Lipschitz gradient

**Remember:** A stronger bend gives a slower change in the conjugate gradient.

*True by definition. Confidence: medium.* MSC 52A41 (Convex functions and convex programs in convex geometry), 90C25, 90C46. arXiv math.OC. Level 3: graduate.

**Definition.** The Fenchel conjugate f⋆ takes a slope s to the supremum of ⟨s, x⟩ − f(x) over x. A function is μ-strongly convex if subtracting μ‖x‖²/2 leaves a convex function. A gradient is L-Lipschitz if it changes by at most L times the distance moved.

**Problem.** Let f be proper, closed and convex on Euclidean space. Then f is μ-strongly convex exactly when f⋆ is differentiable with a 1/μ-Lipschitz gradient.

**How the definition helps.** Defining strong convexity by subtracting a quadratic lets every equivalent condition for convexity give one for strong convexity, as the abstract says. The conjugate swaps each slope with the point where that slope touches f (our own explanation). Adding the two strong convexity inequalities at two touching points bounds how far the points move when the slope changes (our own argument). The converse direction uses the paper's part (ii) and the fact that f equals its biconjugate.

**Paper or page:** [On the Fenchel Duality between Strong Convexity and Lipschitz Continuous Gradient](https://arxiv.org/abs/1803.06573v1). It says: “If f is closed and strong convex with parameter μ, then f⋆ has a Lipschitz continuous gradient with parameter 1/μ.”

**Sources:**

- [Xingyu Zhou, On the Fenchel Duality between Strong Convexity and Lipschitz Continuous Gradient, arXiv:1803.06573v1 (2018)](https://arxiv.org/abs/1803.06573v1)

### Strict epigraph sums turn infimal convolution into conjugate addition

**Remember:** Add the strict epigraphs, and their support values add too.

*True by definition. Confidence: medium.* MSC 52A41 (Convex functions and convex programs in convex geometry), 49N15. arXiv math.OC. Level 3: graduate.

**Definition.** Take functions f and g that never equal −∞ and are finite somewhere. The infimal convolution at x is the infimum of f(x − y) + g(y) over y. Assume that the infimum never equals −∞. Its strict epigraph, the set of points above its graph, is the set of all sums of points from the two strict epigraphs.

**Problem.** The conjugate of the infimal convolution is the sum of the two conjugates. Convexity is not required.

**How the definition helps.** The strict-epigraph definition makes the identity a sum rule for support functions. In our own proof, the conjugate at p is the supremum of ⟨p, x⟩ − t over the strict epigraph. On a sum of sets, this supremum splits into the two separate suprema. Compared with the formula that takes an infimum over y, the set formula puts the addition in the definition. The work in relating the definitions is to check that every height strictly above the infimum admits a split into two strict heights.

**Wikipedia:** [Convex conjugate](https://en.wikipedia.org/wiki/Convex_conjugate). It says: “The (strict) epigraph of the infimal convolution of two functions is the Minkowski sum of the (strict) epigraphs of those functions.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970)](https://doi.org/10.1515/9781400873173)

### The supremum formula makes the convex conjugate convex and closed

**Remember:** A supremum of continuous affine functions is convex and closed.

*True by definition.* MSC 52A41 (Convex functions and convex programs in convex geometry), 26B25, 49N15. arXiv math.OC, math.FA. Level 3: graduate.

**Definition.** For a function f on ℝⁿ, its convex conjugate f⁎(p) is the supremum of ⟨p, x⟩ − f(x) over x where f is finite. Assume f is finite somewhere and never −∞. For a smooth convex f, the classical Legendre formula evaluates this expression at a point where the gradient of f equals p.

**Problem.** The conjugate is convex and has a closed epigraph, the set of points on or above its graph. This holds even when f itself is not convex.

**How the definition helps.** The supremum formula gives convexity and closedness because its epigraph is an intersection of closed half-spaces, one for each x where f is finite. The classical formula needs a point with gradient p and says nothing when p is outside the gradient's range (our own comparison). The supporting-plane inequality shows that the two formulas agree wherever the classical one applies.

**Wikipedia:** [Convex conjugate](https://en.wikipedia.org/wiki/Convex_conjugate). It says: “The convex conjugate of a function is always lower semi-continuous.”

**Sources:** none listed. No primary source with a working link was found.

### Connected sections exclude pinches

**Remember:** Meeting at one vertex is not enough for flag connectivity.

*Rules out counterexamples.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)). arXiv math.CO. Level 3: graduate.

**Definition.** An abstract polytope orders faces by containment, with a least face, a greatest face, and ranks increasing by one at each immediate inclusion. Between two faces two ranks apart there must be exactly two intermediate faces. For larger rank gaps, any two intermediate faces must be linked by a sequence of intermediate faces with consecutive faces comparable.

**Problem.** In an abstract polytope, a flag is a maximal chain of faces. Any two flags can be joined by single-face changes that keep their common faces fixed.

**How the definition helps.** In our own proof, connectivity between bounding faces lets us change a flag one face at a time while keeping the bounds fixed. Each consecutive comparable pair belongs to some flag. Induction connects flags through each fixed face by working separately above and below it. In the example of two pyramids meeting only at their apex, the faces strictly above the apex and below the common top split by pyramid.

**nLab:** [abstract polytope](https://ncatlab.org/nlab/show/abstract+polytope). It says: “The next definition disallows constructions such as two pyramids kissing on a single vertex:”

**Sources:** none listed. No primary source with a working link was found.

### Setting f₋₁ = 1 for the empty face makes Dehn–Sommerville a symmetry

**Remember:** Count the empty face once, and the h-numbers read the same backwards.

*Makes the theorem clean to state or prove.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 52B11. arXiv math.CO, math.MG. Level 3: graduate.

**Definition.** For a d-dimensional simplicial polytope, fᵢ is the number of faces of dimension i, and one sets f₋₁ = 1 for the empty face. The h-vector is a fixed linear change of the f-vector that starts with h₀ = f₋₁.

**Problem.** Dehn–Sommerville equations: the h-vector of a d-dimensional simplicial polytope satisfies hₖ = h\_(d−k) for every k.

**How the definition helps.** With the empty face counted, Euler's relation and the other linear relations among face numbers become one family with one formula. Euler's formula alone would otherwise need a separate constant term. The h-vector turns the whole family into a single symmetry. Proving the symmetry still needs work, for example Euler's relation applied to every face figure (our own remark).

**Wikipedia:** [Dehn–Sommerville equations](https://en.wikipedia.org/wiki/Dehn%E2%80%93Sommerville_equations). It says: “When k = −1, it expresses the fact that Euler characteristic of a (d − 1)-dimensional simplicial sphere is equal to 1 + (−1)ᵈ⁻¹.”

**Sources:**

- [D. M. Y. Sommerville, The relations connecting the angle-sums and volume of a polytope in space of n dimensions, Proceedings of the Royal Society A 115 (1927) 103–119](https://doi.org/10.1098/rspa.1927.0078)

### Polars as hulls of facet normals turn facets into vertices

**Remember:** Each facet inequality gives one vertex of the polar.

*True by definition. Confidence: medium.* MSC 52B11 (\\(n\\)-dimensional polytopes), 52A20. arXiv math.MG. Level 3: graduate.

**Definition.** Let P be a polytope of full dimension with 0 in its interior. Each facet, a face of one lower dimension, has an inequality a · x ≤ 1 with one vector a. Define the polar as the convex hull of these vectors. The usual definition is the set of all y with y · x ≤ 1 for every x in P.

**Problem.** The facets of P correspond one to one with the vertices of its polar.

**How the definition helps.** With the hull definition, the polar is the hull of one vector per facet, so its vertices come from facets. Each vector is a vertex, because a facet inequality is never implied by the others. The work goes into proving that this hull equals the usual polar, using the facet description of P and the separating hyperplane theorem (our own route).

**Wikipedia:** [Dual polyhedron](https://en.wikipedia.org/wiki/Dual_polyhedron). It says: “The vertices of one polytope correspond to the (n−1)-dimensional elements, or facets, of the other”

**Sources:** none listed. No primary source with a working link was found.

### Polytope sums refine normal fans

**Remember:** Maximize over the two summands separately, then add the maximizing faces.

*Makes the theorem clean to state or prove.* MSC 52B11 (\\(n\\)-dimensional polytopes). arXiv cs.CG, math.MG. Level 3: graduate.

**Definition.** The normal cone of a nonempty face consists of directions that maximize the dot product at every point on that face. The collection of these cones is the normal fan. A Minkowski sum consists of all sums of one point from each polytope.

**Problem.** The normal fan of a Minkowski sum is the common refinement of the two normal fans. Its cones are intersections of cones from the two fans.

**How the definition helps.** Grouping directions by their maximizing faces lets us describe all faces of a sum in one statement. In our own proof, a direction maximizes on the sum exactly at sums of maximizers on the two polytopes. Directions choosing a given pair of faces therefore satisfy both sets of constraints. Intersecting the two normal cones records those simultaneous constraints. The face correspondence for polytopes identifies the resulting collection with the normal fan of the sum.

**Wikipedia:** [Normal fan](https://en.wikipedia.org/wiki/Normal_fan). It says: “the set of linear functionals w such that the set of points x in P that maximize w(x) contains F”

**Sources:** none listed. No primary source with a working link was found.

### Zonotopes as cube images make every face a zonotope

**Remember:** Maximize on the cube first, then take the image.

*True by definition.* MSC 52B12 (Special polytopes (linear programming, centrally symmetric, etc.)). arXiv math.MG, math.CO. Level 3: graduate.

**Definition.** A zonotope is the image of a cube \[0, 1\]ⁿ under an affine map. A nonempty face of a polytope is the set of its points where some linear function reaches its maximum. Every nonempty face of a cube is again a cube, possibly of lower dimension.

**Problem.** Every nonempty face of a zonotope is a zonotope. In particular, each facet, a face of one lower dimension, is a zonotope.

**How the definition helps.** With the cube-image definition, each face is the image of a face of the cube, which is again a cube. If ℓ is largest on the zonotope A(\[0, 1\]ⁿ) along a face, then A maps the face of the cube where ℓ ∘ A is largest onto that face (our own proof). The definition as a sum of segments would first need a description of the faces of such sums.

**Wikipedia:** [Zonotope](https://en.wikipedia.org/wiki/Zonotope). It says: “The facets of any zonotope are themselves zonotopes of one lower dimension.”

**Sources:** none listed. No primary source with a working link was found.

### Counting lattice points at dilation zero makes the Ehrhart constant 1

**Remember:** Shrinking a polytope to the origin leaves one lattice point.

*True by definition. Confidence: medium.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)), 05A15. arXiv math.CO, math.MG. Level 3: graduate.

**Definition.** A lattice polytope is a convex polytope whose vertices have integer coordinates. For each integer t ≥ 0, let L(P, t) be the number of integer points in the dilation tP. At t = 0 the dilation is the single point 0, so L(P, 0) = 1.

**Problem.** The Ehrhart polynomial of a nonempty lattice polytope has constant term 1.

**How the definition helps.** If Ehrhart's theorem covers t = 0, the constant term is the value at t = 0, and counting gives 1. Ehrhart's theorem says that L(P, t) agrees with a polynomial in t, but many statements prove this only for t ≥ 1. So the work goes into proving that the polynomial also agrees at t = 0, for example through the generating function of L(P, t) (our own comparison).

**Wikipedia:** [Ehrhart polynomial](https://en.wikipedia.org/wiki/Ehrhart_polynomial). It says: “When P is a closed convex polytope, L₀(P)=1.”

**Sources:** none listed. No primary source with a working link was found.

### Half-open pieces count Ehrhart coefficients

**Remember:** Each omitted facet adds one required unit in the lattice count.

*True by definition.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 3: graduate.

**Definition.** Triangulate a d-dimensional lattice polytope into unimodular simplices, whose edge vectors from one vertex form a lattice basis. Fix an interior point q off every facet plane. From each simplex remove the facets whose planes separate q from the simplex; these half-open pieces partition the polytope.

**Problem.** The coefficient h\*ᵢ of the Ehrhart h\*-polynomial of the polytope equals the number of half-open pieces with i removed facets.

**How the definition helps.** Removing selected facets replaces inclusion-exclusion on boundaries with a count of independent integer coefficients. In a dilated unimodular piece, lattice points have nonnegative integer vertex coefficients summing to the dilation factor (our own proof). Each removed facet forces one coefficient to be positive, which shifts that piece's counting series by one degree. Summing the disjoint pieces gives the numerator.

**Paper or page:** [Ehrhart theory of cosmological polytopes](https://arxiv.org/abs/2412.01602v2). It says: “h⁎ᵢ(P) = \|{j ∈ \[m\] : \|vis<sub>q</sub>(Δⱼ)\| = i}\|”

**Sources:**

- [Ehrhart theory of cosmological polytopes, Theorem 2.1](https://arxiv.org/abs/2412.01602v2)

### Reflexive polytopes have palindromic numerators

**Remember:** Integral facet normals turn strict inequalities into a shift by one.

*Rules out counterexamples.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 3: graduate.

**Definition.** A full-dimensional rational polytope with zero in its interior is rational reflexive if its polar has integer vertices. The polar is the set of vectors whose dot product with every point of the polytope is at most one. Its Ehrhart numerator is the lattice-count series times (1 − z<sup>q</sup>)<sup>(d+1)</sup>, where q is the least integer making the vertices integral.

**Problem.** The Ehrhart numerator of a rational reflexive polytope is palindromic. Its coefficients read the same in either direction.

**How the definition helps.** Integer polar vertices turn strict inequalities at scale m into closed inequalities at scale m − 1 (our own proof). Ehrhart reciprocity relates the series of interior counts to the original series with the variable inverted. The shift by one then forces the coefficients to read the same in both directions. The interval \[−1, 2\] has no integral polar and numerator 1 + 2z (our own counterexample).

**Paper or page:** [Boundary h\*-polynomials of rational polytopes](https://arxiv.org/abs/2206.04175v3). It says: “If P is a rational reflexive polytope, then h\*ₚ(z) is palindromic.”

**Sources:**

- [Esme Bajo and Matthias Beck, Boundary h\*-polynomials of rational polytopes (Theorem 5.1)](https://arxiv.org/abs/2206.04175v3)

### Support functions make Newton polytopes of products add as Minkowski sums

**Remember:** In each direction, the top parts of f and g multiply without cancelling.

*True by definition. Confidence: medium.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)), 14M25. arXiv math.AG, math.CO. Level 3: graduate.

**Definition.** The Newton polytope of a nonzero polynomial is the convex hull of the exponent vectors of its terms. Its support function gives, for each direction u, the largest value of u · e over those exponent vectors e. A compact convex set is determined by its support function.

**Problem.** Let f and g be nonzero polynomials over a field. The Newton polytope of fg is the Minkowski sum of their Newton polytopes. A Minkowski sum is the set of all sums of one point from each set.

**How the definition helps.** Support functions turn the claim into one equation per direction u. Fix u, and let the top part of f be the sum of its terms with the largest value of u · e. The top part of fg is the product of the top parts of f and g, which is not zero because a polynomial ring over a field has no zero divisors (our own proof). Support functions add under Minkowski sums and determine compact convex sets, which finishes the proof.

**Wikipedia:** [Newton polytope](https://en.wikipedia.org/wiki/Newton_polytope). It says: “Newt(fg) = Newt(f) + Newt(g)”

**Sources:** none listed. No primary source with a working link was found.

### Unimodular triangulations reveal Ehrhart coefficients

**Remember:** A lattice basis makes counting points inside a simplex count compositions.

*Rules out counterexamples.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 3: graduate.

**Definition.** A unimodular triangulation divides a lattice polytope into simplices whose edges from one vertex form a lattice basis in their span. To obtain the h-polynomial in dimension d, sum one term per face, including the empty face. For j vertices, use t raised to j times (1 − t) raised to d + 1 − j. The h\*-polynomial multiplies the series counting lattice points in integer dilations by the (d + 1)st power of (1 − t).

**Problem.** For a unimodular triangulation, the h-polynomial of the triangulation equals the h\*-polynomial of the lattice polytope.

**How the definition helps.** A lattice basis makes the points inside each dilated open face correspond to positive integer vertex coefficients summing to the dilation factor (our own proof). So a face with j vertices contributes (t/(1 − t))ʲ, and summing over all faces gives the h-polynomial as the numerator. The segment \[0, 2\] with no subdivision has h-polynomial 1 but lattice-count numerator 1 + t (our own counterexample).

**Paper or page:** [Equatorial Flow Triangulations of Gorenstein Flow Polytopes](https://arxiv.org/abs/2408.05320v2). It says: “Given a unimodular triangulation T of a lattice polytope P, the h-vector of T is equal to the h\*-vector of P.”

**Sources:** none listed. No primary source with a working link was found.

### Unimodularity prevents Reeve’s missing sums

**Remember:** A lattice basis gives integer coordinates, not just empty simplices.

*Rules out counterexamples.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO, math.MG. Level 3: graduate.

**Definition.** A lattice polytope has integer vertices. A unimodular triangulation divides it into simplices whose edge vectors from one vertex form a basis of the lattice parallel to each simplex. An empty lattice simplex contains no lattice points besides its vertices.

**Problem.** Suppose a lattice polytope has a unimodular triangulation. Then every lattice point in its dilation by a positive integer m is a sum of m original lattice points.

**How the definition helps.** A lattice basis gives each lattice point of the dilation nonnegative integer vertex coefficients summing to m (our own proof). Emptiness alone is not enough: Reeve's tetrahedron with vertices 0, (1,0,0), (0,1,0) and (1,1,2) has (1,1,1) in its double, but no two vertices sum to it (our own counterexample). The work is constructing the unimodular triangulation.

**Wikipedia:** [Reeve tetrahedra](https://en.wikipedia.org/wiki/Reeve_tetrahedra). It says: “No other lattice points lie on the surface or in the interior of the tetrahedron.”

**Sources:**

- [J. E. Reeve, On the Volume of Lattice Polyhedra (1957)](https://doi.org/10.1112/plms/s3-7.1.378)

### Gale complements detect faces

**Remember:** A face leaves a positive dependence on its complement.

*True by definition.* MSC 52B35 (Gale and other diagrams). arXiv math.CO, math.MG. Level 3: graduate.

**Definition.** Append a one to each vertex coordinate column and form the matrix of these columns. The Gale diagram uses the rows of a matrix whose columns form a basis of that matrix’s kernel. This replaces the vertex coordinates with vectors that encode all their affine dependencies.

**Problem.** A proper nonempty vertex subset spans a face exactly when its complementary Gale vectors have a weighted sum of zero with every weight positive.

**How the definition helps.** In our own proof, the kernel basis turns a supporting affine function into one linear equation among the complementary vectors. A function exposing the face takes value zero on its vertices and positive values elsewhere. Its values form a vector orthogonal to every kernel column, so the positive values give the required weights. Conversely, extend the weights by zeros. Orthogonality puts this vector in the original matrix’s row space, so an affine function realizes those values.

**Paper or page:** [Eigenpolytope Universality and Graphical Designs](https://arxiv.org/abs/2209.06349v2). It says: “if and only if I is the support of a positive dependence (circuit) of 𝒱.”

**Sources:**

- [David Gale, Neighborly and cyclic polytopes (1963)](https://doi.org/10.1090/pspum/007/0152944)

### Truncation regularizes ideal edge lengths

**Remember:** Moving one horosphere shifts three lengths by the same amount.

*True by definition.* MSC 52B45 (Dissections and valuations (Hilbert's third problem, etc.)), 51M10. arXiv math.GT. Level 3: graduate.

**Definition.** An ideal tetrahedron has its vertices at infinity in hyperbolic three-space. Cut off each vertex with a small horosphere, a surface perpendicular to the geodesics ending at that vertex. Sum the remaining length of each original edge tensored with its dihedral angle, the angle between the adjacent faces, modulo πℚ.

**Problem.** With disjoint truncations, each cutting off just one vertex, the resulting tensor in ℝ ⊗ (ℝ/πℚ) is independent of the horospheres.

**How the definition helps.** Truncation replaces the infinite lengths with finite ones whose changes cancel in the angle quotient. Moving one horosphere changes all three adjacent lengths by the same amount. Their angles form a Euclidean triangle on the horosphere and sum to π. The total change therefore vanishes, extending the usual finite-edge formula to ideal vertices.

**Wikipedia:** [Dehn invariant](https://en.wikipedia.org/wiki/Dehn_invariant). It says: “The result does not depend on the choice of horospheres for the truncation, as long as each one cuts off only a single vertex of the given polyhedron.”

**Sources:**

- [David Coulson, Oliver A. Goodman, Craig D. Hodgson and Walter D. Neumann, Computing arithmetic invariants of 3-manifolds (2000)](https://doi.org/10.1080/10586458.2000.10504641)
- [Alexander Goncharov, Volumes of hyperbolic manifolds and mixed Tate motives (1999)](https://doi.org/10.1090/S0894-0347-99-00293-3)

### Lifted energy selects Delaunay triangulations

**Remember:** The lowest lifted surface gives the least energy.

*True by definition.* MSC 52B55 (Computational aspects related to convexity). arXiv cs.CG. Level 3: graduate.

**Definition.** Lift each site p to height ‖p‖². Extend those heights linearly on each simplex of a triangulation. Define the energy as the integral of the height above the paraboloid over the convex hull.

**Problem.** Take finitely many sites spanning ℝᵈ, with every d + 1 affinely independent and no d + 2 on one sphere. Among triangulations using precisely those sites, the Delaunay triangulation uniquely minimizes the energy.

**How the definition helps.** Defining the energy by height makes the lowest possible surface minimize the integral. In our own argument, every interpolated surface lies above the lower boundary of the lifted convex hull. Its lower faces project to the Delaunay triangulation, whose simplices have circumspheres with no sites inside. This lifting theorem supplies the geometric step. General position makes the lower faces simplices, so any different triangulation raises the surface on an open set.

**Paper or page:** [Delaunay-like Triangulation of Smooth Orientable Submanifolds by L1-Norm Minimization](https://arxiv.org/abs/2203.06008v3). It says: “the triangulation of P that minimizes the Delaunay energy is unique and is the Delaunay complex of P.”

**Sources:**

- [Delaunay-like Triangulation of Smooth Orientable Submanifolds by L1-Norm Minimization, Theorem 2](https://arxiv.org/abs/2203.06008v3)

### Clipped cells preserve ball-union topology

**Remember:** Clip each ball to its nearest-site cell without changing the union.

*Makes the theorem clean to state or prove.* MSC 52C22 (Tilings in \\(n\\) dimensions (aspects of discrete geometry)). arXiv cs.CG. Level 3: graduate.

**Definition.** Take finitely many Euclidean sites and a radius r ≥ 0. Clip each closed ball to the points at least as close to its center as to any other site. The alpha complex records a face for each group of clipped balls with a common point.

**Problem.** The alpha complex and the union of the original balls have the same homotopy type.

**How the definition helps.** Clipping gives closed convex sets whose intersections define the complex and whose union still covers all the balls together. In our own argument, every covered point belongs to a nearest site's ball and cell. The nerve theorem identifies the shape of this union with the complex that records which sets meet.

**Wikipedia:** [Alpha shape](https://en.wikipedia.org/wiki/Alpha_shape). It says: “the radius of the smallest empty circle containing the edge or triangle”

**Paper or page:** [Good Coverings of Proximal Alexandrov Spaces. Homotopic Cycles in Jordan Curve Theorem Extension](https://arxiv.org/abs/2108.10113v1). It says: “Let F be a finite collection of closed, convex sets in Euclidean space. Then the nerve of F and union of the sets in F have the same homotopy type.”

**Sources:**

- [H. Edelsbrunner, The union of balls and its dual shape (1995)](https://doi.org/10.1007/bf02574053)
- [J. F. Peters and T. Vergili, Good Coverings of Proximal Alexandrov Spaces. Homotopic Cycles in Jordan Curve Theorem Extension, Theorem 4](https://arxiv.org/abs/2108.10113v1)

### Generic rigidity makes Laman's edge count an exact test

**Remember:** Ignore special positions, and rigidity becomes a pure counting property of the graph.

*Rules out counterexamples.* MSC 52C25 (Rigidity and flexibility of structures (aspects of discrete geometry)), 05C10. arXiv math.CO, math.MG. Level 3: graduate.

**Definition.** A bar-and-joint framework is a graph whose vertices are points in the plane and whose edges are rods of fixed length. It is rigid when the only motions that keep all rod lengths are rigid motions of the whole plane. It is generically rigid when this holds for almost all choices of the points.

**Problem.** Laman's theorem: a graph is generically minimally rigid in the plane exactly when it has 2\|V\| − 3 edges and every set V′ of at least two vertices spans at most 2\|V′\| − 3 edges.

**How the definition helps.** The word generically removes the special point positions, so rigidity depends only on the graph. Without it, the same graph can be rigid in one position and flexible in another. The complete bipartite graph K₃,₃ passes Laman's count and is generically rigid, but it flexes when one side lies on a line and the other on a perpendicular line (our own example). The hard part is the proof that the count is enough for generic positions.

**Wikipedia:** [https://en.wikipedia.org/wiki/Laman<sub>graph</sub>](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Laman_graph). It says: “if one places the vertices of a Laman graph in the Euclidean plane, in general position, there will in general be no simultaneous continuous motion of all the points, other than Euclidean congruences, that preserves the lengths of all the graph edges.”

**Paper or page:** [Combinatorial Resultants in the Algebraic Rigidity Matroid](https://arxiv.org/abs/2103.08432). It says: “A bar-and-joint framework is generically minimally rigid in 2D iff its underlying graph G=(V,E) has exactly \|E\|=2\|V\|−3 edges, and any proper subset V′⊂V of vertices spans at most 2\|V′\|−3 edges.”

**Sources:**

- [Goran Malić, Ileana Streinu, Combinatorial Resultants in the Algebraic Rigidity Matroid, arXiv:2103.08432 (2021)](https://arxiv.org/abs/2103.08432)

### Chambers index zonotope vertices

**Remember:** Choose the winning endpoint of each segment to find a vertex.

*True by definition.* MSC 52C35 (Arrangements of points, flats, hyperplanes (aspects of discrete geometry)). arXiv cs.CG, math.MG. Level 3: graduate.

**Definition.** Define the zonotope as a sum of segments from zero to nonzero generating vectors. For each vector, draw the hyperplane through zero perpendicular to it. A chamber is a connected region off all these hyperplanes.

**Problem.** Chambers of this arrangement correspond bijectively to vertices of the zonotope.

**How the definition helps.** Writing the zonotope as a sum of segments lets each direction choose an endpoint of every segment independently. Within a chamber, the signs of the dot products fix every endpoint, which gives a unique maximizing vertex (our own proof). Different chambers choose different endpoints and so different vertices. Every vertex uniquely maximizes some linear function, and a small perturbation moves it off all the hyperplanes.

**Wikipedia:** [Zonotope](https://en.wikipedia.org/wiki/Zonotope). It says: “The Minkowski sum of a finite set of line segments in ℝᵈ forms a type of convex polytope called a zonotope.”

**Sources:** none listed. No primary source with a working link was found.

### Affine images preserve algebraic interiors

**Remember:** Affine maps carry extensions of segments to extensions of segments.

*True by definition.* MSC 52A05 (Convex sets without dimension restrictions (aspects of convex geometry)). arXiv math.MG. Level 4: research.

**Definition.** The relative algebraic interior singles out points x of a convex set where every direction in its affine span permits a small two-sided move. Equivalently, the segment from any other point of the set to x extends beyond x inside the set.

**Problem.** An affine map sends the relative algebraic interior onto the relative algebraic interior of the image, if the original relative algebraic interior is nonempty.

**How the definition helps.** In our own proof, the equivalent segment test works directly because affine maps preserve segment parameters. For the converse, start from the image of a known algebraic interior point. Extend the segment from this image past the desired image point, unless the two already coincide. Lift the far endpoint to the convex set. The lifted segment stays in the algebraic interior until its far endpoint, so interpolation supplies the desired lift.

**Paper or page:** [A note on faces of convex sets](https://arxiv.org/abs/2404.00832v3). It says: “Then rai(α(K)) = α(rai(K)).”

**Sources:**

- [A note on faces of convex sets (Theorem 6.5)](https://arxiv.org/abs/2404.00832v3)

### Segments make minimal faces intersect

**Remember:** To belong to both smallest faces, shorten both extensions to the same length.

*True by definition.* MSC 52A05 (Convex sets without dimension restrictions (aspects of convex geometry)). arXiv math.MG. Level 4: research.

**Definition.** A face is a convex subset of a convex set. If an interior point of a segment in the set belongs to the face, both endpoints must belong to it. The smallest face containing x consists of x and each point y whose segment to x extends beyond x within the set.

**Problem.** For convex sets K and L containing x, the smallest face of their intersection through x equals the intersection of their smallest faces through x.

**How the definition helps.** In our own proof, the segment test lets both sets use the same extension beyond x. If two extensions work separately, the shorter one lies in both sets by convexity. Conversely, any extension in the intersection works in each set. The underlying result identifies this segment description with the intersection of all faces containing x.

**Paper or page:** [A note on faces of convex sets](https://arxiv.org/abs/2404.00832v3). It says: “Let K,L ⊆ V be convex sets and let x ∈ K ∩ L.”

**Sources:** none listed. No primary source with a working link was found.

### Support values turn minimal convex environmental contours into linear programs

**Remember:** Pick a point for each direction, then take their convex hull.

*Makes the theorem clean to state or prove.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)), 52A40, 90C05. arXiv math.NA, math.OC. Level 4: research.

**Definition.** The support value of a compact convex set B in a unit direction u is the largest value of b·u for b in B. The mean width of B is twice the average support value over all directions. With finitely many directions, the method picks one point per direction and takes their convex hull.

**Problem.** With finitely many sampled directions, the least-mean-width compact convex set whose support value in each direction u is at least C(u) is the solution of a linear program. The sampled solutions converge as the sampled directions fill the sphere.

**How the definition helps.** Support values make both the constraints and the mean-width objective linear in the unknowns (our own). The program has variables for the chosen points and their support values, with linear constraints linking them. The convex hull of the chosen points then has the right support value in each sampled direction. The remaining work bounds the error from checking only finitely many directions.

**Paper or page:** [Minimal Convex Environmental Contours](https://arxiv.org/abs/2308.01753v2). It says: “We solve this problem by reformulating it as a linear programming problem.”

**Sources:**

- [Åsmund Hausken Sande, Johan S. Wind, Minimal Convex Environmental Contours, arXiv:2308.01753v2 (2024)](https://arxiv.org/abs/2308.01753v2)

### Vertex multiplicities give an optimal colored Tverberg theorem for prime powers

**Remember:** At prime powers, let vertices be reused up to a fixed budget.

*Makes the theorem clean to state or prove.* MSC 52A37 (Other problems of combinatorial convexity), 55M35. arXiv math.CO, math.AT. Level 4: research.

**Definition.** Color the vertices of a simplex, and call a face rainbow if it has at most one vertex of each color. Give each vertex a multiplicity, the number of chosen faces allowed to contain it. For r = pᵏ with p prime, each of d + 1 colors has p − 1 vertices of each multiplicity 1, p, …, pᵏ⁻¹, and one extra color has one vertex of multiplicity one.

**Problem.** Let N = k(p − 1)(d + 1). Every continuous map from this N-dimensional simplex to ℝᵈ sends some r rainbow faces to sets with a common point. The faces may share vertices, but no vertex appears more often than its multiplicity.

**How the definition helps.** The multiplicities let the theorem be stated for prime powers, which the disjoint version does not reach. They also shrink the simplex to dimension k(p − 1)(d + 1), below the classical (r − 1)(d + 1). When k = 1 every multiplicity is one, the faces are disjoint, and the result is the theorem of Blagojević, Matschke and Ziegler for primes. The proof still needs multiple chessboard complexes and a degree theory for equivariant maps.

**Paper or page:** [Optimal colored Tverberg theorems for prime powers](https://arxiv.org/abs/2005.11913v3). It says: “to compensate for this reduction by allowing vertices to repeatedly appear a controlled number of times in different rainbow simplices.”

**Sources:**

- [Duško Jojić, Gaiane Panina, Rade T. Živaljević, Optimal colored Tverberg theorems for prime powers, arXiv:2005.11913v3 (2021)](https://arxiv.org/abs/2005.11913v3)

### Complete sets of diameter D are intersections of D-balls around their points

**Remember:** A point fits exactly when it lies within range of every point.

*True by definition.* MSC 52A55 (Spherical and hyperbolic convexity), 52A30. arXiv math.MG. Level 4: research.

**Definition.** A set of diameter D is complete in the sense of diameter if no larger set containing it has diameter D. The diameter is the supremum of distances between points of the set.

**Problem.** Let K be a convex body of diameter D &gt; 0 in hyperbolic space. K is complete exactly when it equals the intersection of the closed balls of radius D centred at its points.

**How the definition helps.** The intersection of the balls is exactly the set of points that could join K without raising its diameter (our own explanation). Completeness says every such point is already in K, so the two conditions match. This step works in any metric space (our own check). The real work of the paper is to show that both conditions agree with several hyperbolic notions of constant width.

**Paper or page:** [Hyperbolic width functions and characterizations of bodies of constant width in the hyperbolic space](https://arxiv.org/abs/2303.16814v2). It says: “K is complete; K = ⋂ₓ∈K B(x,D);”

**Sources:**

- [Károly J. Böröczky, András Csépai, Ádám Sagmeister, Hyperbolic width functions and characterizations of bodies of constant width in the hyperbolic space, arXiv:2303.16814v2 (2024)](https://arxiv.org/abs/2303.16814v2)

### Wide disk domains give an elementary proof of the spherical Blaschke–Leichtweiss theorem

**Remember:** Intersect equal disks but keep every center inside.

*Makes the theorem clean to state or prove.* MSC 52A55 (Spherical and hyperbolic convexity), 52A40. arXiv math.MG. Level 4: research.

**Definition.** On the unit sphere, a wide r-disk domain is an intersection of closed spherical disks of radius r whose centers all lie in the intersection. A spherical Reuleaux triangle is the intersection of three disks of radius r centered at the vertices of an equilateral spherical triangle of side r.

**Problem.** For 0 &lt; r ≤ π/2, the spherical Reuleaux triangle has the least area among wide r-disk domains on the unit sphere.

**How the definition helps.** Each wide r-disk domain comes with explicit disks whose centers lie inside it, which makes the class easier to work with (our own reading). Convex domains of constant width r are wide r-disk domains (our own reading of the abstract). So the bound gives what the abstract calls 'a new and elementary proof of the Blaschke-Leichtweiss theorem' for constant width.

**Paper or page:** [On a strengthening of the Blaschke-Leichtweiss theorem](https://arxiv.org/abs/2101.00538v2). It says: “In this paper we extend this result to the family of wide r-disk domains of 𝕊², where 0 &lt; r ≤ π/2.”

**Sources:**

- [Károly Bezdek, On a strengthening of the Blaschke-Leichtweiss theorem, Journal of Geometry 114 (2023), no. 1, paper no. 2](https://arxiv.org/abs/2101.00538v2)

### For abstract polyhedra, the dual is the same order turned upside down

**Remember:** Turn the partial order upside down and you have the dual.

*True by definition. Confidence: medium.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 06A11. arXiv math.MG, math.CO. Level 4: research.

**Definition.** An abstract polyhedron is a partially ordered set of vertices, edges and faces, ordered by containment. Some local conditions make it look like a polyhedron.

**Problem.** Every abstract polyhedron has a dual: the same set with the order reversed. The dual has the same Euler characteristic V − E + F and the same orientability.

**How the definition helps.** For abstract polyhedra the dual is the same set with the order reversed, so the dual exists at once. For geometric polyhedra, the dual must be constructed, and for some definitions of non-convex polyhedra it cannot be realized as a polyhedron of the same kind. So the hard question moves to realization in space.

**Wikipedia:** [Polyhedron](https://en.wikipedia.org/wiki/Polyhedron). It says: “Abstract polyhedra also have duals, obtained by reversing the partial order defining the polyhedron to obtain its dual or opposite order.”

**Sources:**

- [B. Grünbaum, Are your polyhedra the same as my polyhedra?, in Discrete and Computational Geometry, Algorithms and Combinatorics 25, Springer (2003) 461–488](https://doi.org/10.1007/978-3-642-55566-4_21)

### Cobar signs cancel repeated Dehn maps

**Remember:** Splitting twice gives the same face flag with opposite signs.

*True by definition.* MSC 52B45 (Dissections and valuations (Hilbert's third problem, etc.)), 19E99. arXiv math.KT, math.GT. Level 4: research.

**Definition.** A scissors group records polyhedra subject to cutting and reassembly. The reduced Dehn map splits a simplex into a sum of tensors pairing a proper face with its spherical link of perpendicular directions. Start with a hyperbolic factor followed by spherical factors. Apply the splitting map to each factor in turn and take the alternating sum, called the cobar differential.

**Problem.** In Goncharov’s hyperbolic Dehn complex, applying two successive differentials gives zero.

**How the definition helps.** The alternating signs pair each two-step splitting with an equal term of opposite sign (our own). Splittings of different factors commute. Within one factor, choosing two nested faces gives the same tensor in either order. This identity is coassociativity. Goncharov identifies the geometric Dehn complex with this algebraic cobar construction, which supplies the comparison with the face-by-face calculation.

**Wikipedia:** [Dehn invariant](https://en.wikipedia.org/wiki/Dehn_invariant). It says: “This algebraic view of the Dehn invariant can be extended to higher dimensions”

**Sources:**

- [Alexander Goncharov, Volumes of hyperbolic manifolds and mixed Tate motives (1999)](https://doi.org/10.1090/S0894-0347-99-00293-3)

### Polytope logarithms linearize dilation

**Remember:** Minkowski addition becomes multiplication, so dilation becomes multiplication inside the logarithm.

*True by definition.* MSC 52B45 (Dissections and valuations (Hilbert's third problem, etc.)). arXiv math.CO. Level 4: research.

**Definition.** Work with rational coefficients in the polytope algebra of Euclidean dimension d, where translates have the same class and the empty set represents zero. When two polytopes have convex union, their classes sum to the class of their union plus that of their intersection. Multiplication takes all sums of one point from each polytope. For a nonempty polytope P, let p be the logarithm of its class, using the power series around one.

**Problem.** For nonnegative integer n, the class of nP is the finite exponential of np. Its dependence on n is polynomial of degree at most the ambient dimension.

**How the definition helps.** Using the logarithm replaces repeated multiplication of polytope classes by ordinary multiplication of the logarithm by n. In our own calculation, the class of nP is the nth power of the class of P because multiplication adds polytopes. Subtract one from the class of P. McMullen's theorem says the (d + 1)st power of this difference vanishes. This makes the logarithm and exponential finite sums.

**Paper or page:** [A pithy look at the Polytope Algebra](https://arxiv.org/abs/2111.02820v1). It says: “⟦P⟧ⁿ = ⟦nP⟧”

**Sources:**

- [A pithy look at the Polytope Algebra, Theorem 4.13](https://arxiv.org/abs/2111.02820v1)
- [P. McMullen, The polytope algebra (1989)](https://doi.org/10.1016/0001-8708(89)90029-7)

### Spherical links cancel Dehn invariants

**Remember:** The links around an interior face assemble to a sphere.

*True by definition.* MSC 52B45 (Dissections and valuations (Hilbert's third problem, etc.)), 51M10. arXiv math.GT. Level 4: research.

**Definition.** A scissors group adds polyhedra subject to cutting and reassembly by isometries. For each face of dimension 1 through n−2 in a hyperbolic n-simplex, take the inward unit directions perpendicular to that face. These directions form a spherical polyhedron, the link. Goncharov’s generalized Dehn invariant sums each face tensored with its link, in angular groups where a whole sphere represents zero.

**Problem.** For a closed oriented hyperbolic manifold of odd dimension, the sum of the simplex classes in a geodesic triangulation has zero generalized Dehn invariant.

**How the definition helps.** Grouping terms by face makes the cancellation visible because its links tile a whole sphere. Each simplex incident to that face contributes its sector of normal directions. A closed manifold has no boundary faces, so every such sum vanishes. In dimension three the links record the usual edge angles. Goncharov’s construction shows that the face-and-link sum respects cutting relations.

**Wikipedia:** [Dehn invariant](https://en.wikipedia.org/wiki/Dehn_invariant). It says: “This algebraic view of the Dehn invariant can be extended to higher dimensions”

**Sources:**

- [Alexander Goncharov, Volumes of hyperbolic manifolds and mixed Tate motives (1999)](https://doi.org/10.1090/S0894-0347-99-00293-3)

### Polarity swaps lattice extremal directions

**Remember:** A narrow span becomes a long central chord in the polar.

*Makes the theorem clean to state or prove.* MSC 52C07 (Lattices and convex bodies in \\(n\\) dimensions (aspects of discrete geometry)). arXiv math.MG. Level 4: research.

**Definition.** The dual lattice consists of vectors taking integer dot products with the original lattice. Lattice width minimizes the range of these dot products over nonzero dual vectors. Lattice diameter maximizes chord length measured in steps of the shortest lattice vector along the chord. The polar contains all vectors whose dot product with every point of the body is at most one.

**Problem.** For a full-dimensional origin-symmetric polytope, the lattice width directions are the polar polytope’s lattice diameter directions in the dual lattice.

**How the definition helps.** In our own proof, polarity turns each directional span into the reciprocal length of a chord, so minimizers become maximizers. For a shortest dual lattice vector y on its line, symmetry makes the span twice the largest dot product with y. The polar’s central chord has length two divided by that largest value, in steps of y. Averaging a chord with its reflection, with endpoints reversed, gives a central chord of the same length.

**Paper or page:** [Lattice Reduced and Complete Convex Bodies](https://arxiv.org/abs/2307.09429v2). It says: “The width directions of C with respect to Λ are the diameter directions of C⋆ with respect to Λ⋆.”

**Sources:**

- [Lattice Reduced and Complete Convex Bodies (Theorem 3.8)](https://arxiv.org/abs/2307.09429v2)

### Stationarity turns coverage into intensity

**Remember:** A point is covered exactly when its radius ball contains a center.

*True by definition.* MSC 52C17 (Packing and covering in \\(n\\) dimensions (aspects of discrete geometry)). arXiv math.MG. Level 4: research.

**Definition.** Consider a metric space whose isometries can send any point to any other and whose invariant volume is unique up to scale. A stationary random packing has a probability law unchanged by these isometries. Define its density as the probability that an open packing ball covers a fixed point. Its center intensity is the expected number of centers per unit volume.

**Problem.** For a stationary packing by equal open balls in a homogeneous space with invariant volume, density equals center intensity times one ball’s volume.

**How the definition helps.** In our own explanation, defining density by coverage probability avoids taking limits over expanding regions. Disjoint open balls make the number of centers within radius r of a point either zero or one. Its expectation equals the probability of coverage. Stationarity makes the expected counting measure invariant, so uniqueness makes it a constant multiple of volume.

**Paper or page:** [Linear programming bounds in homogeneous spaces, I: Optimal packing density](https://arxiv.org/abs/2505.23572v1). It says: “D(Λ) = 𝔼\[Λ(B(x,r))\] = i(Λ)m<sub>X</sub>(B(x₀,r)).”

**Sources:**

- [Linear programming bounds in homogeneous spaces, I: Optimal packing density (Proposition 4.10)](https://arxiv.org/abs/2505.23572v1)

### Strict convexity separates Voronoi interiors

**Remember:** A flat unit ball can give a whole region of ties.

*Rules out counterexamples.* MSC 52C22 (Tilings in \\(n\\) dimensions (aspects of discrete geometry)). arXiv math.MG. Level 4: research.

**Definition.** A weighted Voronoi cell contains the points minimizing distance to its site minus the site’s weight. A nondegenerate site strictly wins at its own location. A strictly convex norm has no line segment on the boundary of its unit ball.

**Problem.** In a plane with a strictly convex norm, the interior of either cell of two distinct nondegenerate sites misses the other cell.

**How the definition helps.** In our own proof, strict convexity makes a small move from a tie toward either site favor that site. Off the line of the sites this follows from strict triangle inequality. On the line, nondegeneracy forces a tie to lie between the sites, where the distances change in opposite directions. Our own counterexample uses the maximum norm and unweighted sites (−1,0) and (1,0). Both cells contain the open region y &gt; \|x\| + 1 because both distances equal y.

**Paper or page:** [Non-Euclidean Erdős-Anning Theorems](https://arxiv.org/abs/2401.06328v3). It says: “the interior of Vᵢ is disjoint from Vⱼ, and vice versa.”

**Sources:**

- [Non-Euclidean Erdős-Anning Theorems (Lemma 7)](https://arxiv.org/abs/2401.06328v3)

### Spherical and hyperbolic discrete Laplacians keep the smooth conformal eigenvalue equation

**Remember:** Choose edge weights so the smooth eigenvalue equation survives discretization.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 52C26 (Circle packings and discrete conformal geometry), 53C18. arXiv math.DG, math.MG. Level 4: research.

**Definition.** On a triangulated surface of constant curvature k ∈ {1, −1}, the discrete Laplacian combines differences of vertex values along edges with edge weights. As in the Euclidean case, the weights contain cotangents of angle combinations. They are nonnegative exactly when the triangulation is Delaunay.

**Problem.** On a simply connected triangulated surface of curvature k ∈ {1, −1}, a vertex function u satisfies Δu = −2ku exactly when u is the conformal factor of a discrete conformal vector field. This matches the smooth equation Δf = −2kf.

**How the definition helps.** The weights are chosen so that the discrete operator satisfies the same eigenvalue equation as the smooth one, with no correction terms. A discrete conformal vector field is a vertex motion that changes each edge length at a rate set by u at its ends. The work is to relate these edge-length equations to motions of the vertices.

**Paper or page:** [Discrete Laplacians -- spherical and hyperbolic](https://arxiv.org/abs/2408.04877v2). It says: “We show that the conformal factors of discrete conformal vector fields on a triangulated surface of curvature k ∈ {−1,1} are −2k-eigenfunctions of our discrete Laplacians, exactly as in the smooth setting.”

**Sources:**

- [Ivan Izmestiev, Wai Yeung Lam, Discrete Laplacians -- spherical and hyperbolic, Journal of the London Mathematical Society (2025); arXiv:2408.04877](https://arxiv.org/abs/2408.04877v2)
