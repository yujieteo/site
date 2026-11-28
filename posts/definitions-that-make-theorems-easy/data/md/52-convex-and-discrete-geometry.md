### The intersection definition makes the convex hull the smallest convex set

**Remember:** Intersect every convex set containing X; the result sits inside each.

*True by definition.* MSC 52A05 (Convex sets without dimension restrictions (aspects of convex geometry)), 52A20. arXiv math.MG. Level 1: early undergraduate.

**Definition.** The convex hull of a set X is the intersection of all convex sets that contain X.

**Problem.** The convex hull of X is the unique smallest convex set containing X.

**How the definition helps.** The intersection contains X and lies inside every convex set containing X, by construction. It is convex because a segment between two of its points lies in every set being intersected. The weighted-average definition would need a proof that it gives the same set (our own comparison).

**Wikipedia:** [Convex hull](https://en.wikipedia.org/wiki/Convex_hull). It says: “However, the second definition, the intersection of all convex sets containing X, is well-defined.”

**Paper or page:** [Convex Hull is Smallest Convex Set containing Set](https://proofwiki.org/wiki/Convex_Hull_is_Smallest_Convex_Set_containing_Set). It says: “conv U is convex and if K ⊆ X is a convex subset with U ⊆ K, we have that conv U ⊆ K.”

**Sources:** none listed. No primary source with a working link was found.

### A nondecreasing outer function keeps convex compositions convex

**Remember:** An order-keeping outer function passes the inner chord bound outward.

*Rules out counterexamples.* MSC 52A41 (Convex functions and convex programs in convex geometry). arXiv math.OC. Level 1: early undergraduate.

**Definition.** A nondecreasing convex function g has its graph on or below each chord, and larger inputs never give smaller outputs. So an upper bound on the input of g gives an upper bound on its output.

**Problem.** Let f be convex and take values in an interval. If g is convex and nondecreasing on that interval, then g composed with f is convex.

**How the definition helps.** With f convex, f(λx + (1−λ)y) ≤ λf(x) + (1−λ)f(y), and applying the nondecreasing g keeps this bound. Convexity of g then bounds the result by λg(f(x)) + (1−λ)g(f(y)). Without monotonicity it fails: g(t) = 1/t and f(x) = 1 + x² give 1/(1 + x²), which is 1 at 0 but has chord value 1/2 there (our own counterexample).

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “However, if f : I → ℝ is both monotone increasing and convex, then for any convex function g : D → I, the composite f ∘ g : D → ℝ is convex”

**Paper or page:** [Convex Real Function Composed with Increasing Convex Real Function is Convex](https://proofwiki.org/wiki/Convex_Real_Function_Composed_with_Increasing_Convex_Real_Function_is_Convex). It says: “Then g ∘ f : I → ℝ is a convex function.”

**Sources:** none listed. No primary source with a working link was found.

### Epigraphs turn Jensen’s inequality into closure under averages

**Remember:** Average points on the graph and stay above it.

*True by definition.* MSC 52A41 (Convex functions and convex programs in convex geometry). arXiv math.OC. Level 1: early undergraduate.

**Definition.** The epigraph of a real function f on a subset D of a real vector space is the region on or above its graph, the pairs (x,t) with x ∈ D and t ≥ f(x). The function is convex if its epigraph contains the segment between any two of its points.

**Problem.** For any finite list of domain points of a convex function, its value at their weighted average is at most their weighted average value. The weights are nonnegative and sum to one.

**How the definition helps.** A convex set contains every finite weighted average of its points, by repeatedly taking points on segments. Averaging the graph points (xᵢ, f(xᵢ)) gives (∑λᵢxᵢ, ∑λᵢf(xᵢ)) in the epigraph, so f(∑λᵢxᵢ) ≤ ∑λᵢf(xᵢ) (our own proof).

**nLab:** [convex function](https://ncatlab.org/nlab/show/convex+function). It says: “A function f : D → ℝ is convex if the set {(x, z) ∈ D × ℝ: z ≥ f(x)} is a convex subspace of D × ℝ.”

**Paper or page:** [Jensen's Inequality (Real Analysis)](https://proofwiki.org/wiki/Jensen's_Inequality_(Real_Analysis)). It says: “Let λ₁, λ₂, …, λₙ ≥ 0 be real numbers, at least one of which is non-zero.”

**Sources:** none listed. No primary source with a working link was found.

### Triangular faces make Euler’s edge bound an equality

**Remember:** Three sides per face turn Euler’s bound into an exact count.

*True by definition.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 52B10. arXiv math.MG. Level 1: early undergraduate.

**Definition.** A three-dimensional convex polytope, the convex hull of finitely many points, is simplicial if every face is a triangle.

**Problem.** A three-dimensional convex polytope with V vertices has exactly 3V − 6 edges if and only if it is simplicial.

**How the definition helps.** Each edge lies in two faces, so counting face sides gives 2E ≥ 3F, with equality exactly when all faces are triangles (our own). Euler's formula V − E + F = 2 turns this into E ≤ 3V − 6, with equality exactly in the simplicial case (our own).

**Wikipedia:** [Simplicial polytope](https://en.wikipedia.org/wiki/Simplicial_polytope). It says: “the polytope contains only triangular faces of any type.”

**Sources:** none listed. No primary source with a working link was found.

### Inclusive trapezoids simplify prismatoid faces

**Remember:** A parallelogram still has a pair of parallel sides.

*Makes the theorem clean to state or prove.* MSC 52B10 (Three-dimensional polytopes), 97G40. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** Under the inclusive definition, a trapezoid is a convex quadrilateral with at least one pair of parallel sides, so parallelograms count as trapezoids.

**Problem.** Suppose all vertices of a bounded, three-dimensional convex polyhedron lie in two parallel planes. Each polygonal face that lies in neither plane is a triangle or a trapezoid.

**How the definition helps.** Each side face meets the two planes in parallel lines, so a four-sided side face has a pair of parallel sides and is a trapezoid in the inclusive sense (our own proof). Each line holds at most two vertices of the face, since a vertex cannot lie between two others, so a side face has three or four vertices. The exclusive definition would need a separate case for parallelograms.

**Wikipedia:** [Trapezoid](https://en.wikipedia.org/wiki/Trapezoid). It says: “Under an inclusive definition, a trapezoid is any quadrilateral with at least one pair of parallel sides.”

**Paper or page:** [Lateral Face of Prismatoid is Triangle, Trapezium or Parallelogram](https://proofwiki.org/wiki/Lateral_Face_of_Prismatoid_is_Triangle,_Trapezium_or_Parallelogram). It says: “Then F is one of the following:
a triangle
a trapezium
a parallelogram.”

**Sources:** none listed. No primary source with a working link was found.

### A regular tetrahedron realizes every permutation of four vertices

**Remember:** Permute coordinates to permute the tetrahedron’s vertices.

*True by definition.* MSC 52B15 (Symmetry properties of polytopes), 20H15. arXiv math.GR, math.MG. Level 1: early undergraduate.

**Definition.** Model the regular tetrahedron by the four coordinate unit vectors of ℝ⁴, which lie in the three-dimensional space where the coordinates sum to one. Every two of them are at distance √2 (our own), and permuting the coordinates permutes them.

**Problem.** The full symmetry group of a regular tetrahedron is the group of all permutations of four vertices.

**How the definition helps.** Permuting coordinates is an isometry that gives any desired permutation of the four vertices (our own). A symmetry is determined by where it sends the vertices, since the distances to the four vertices fix each point of their space (our own). So the symmetries are exactly the 24 permutations.

**nLab:** [Coxeter group](https://ncatlab.org/nlab/show/Coxeter+group). It says: “Aₙ is the isometry group of a regular n-simplex, and is identified with the symmetric group Sₙ₊₁”

**Sources:** none listed. No primary source with a working link was found.

### Signed coordinate permutations give all cube symmetries

**Remember:** Permute the three axes, then choose their signs.

*True by definition.* MSC 52B15 (Symmetry properties of polytopes), 20H15. arXiv math.GR, math.MG. Level 1: early undergraduate.

**Definition.** The coordinate cube is \[−1, 1\]³, the points whose three coordinates all lie between −1 and 1, and its six face centers are ±e₁, ±e₂, ±e₃. A signed coordinate permutation reorders the coordinates and changes the sign of any of them.

**Problem.** The full cube symmetry group consists of the 48 signed coordinate permutations. Exactly 24 of them preserve orientation.

**How the definition helps.** A symmetry fixes the center, so it is an orthogonal map that permutes the face centers ±eᵢ, which makes it a signed coordinate permutation (our own). Conversely, each signed permutation keeps the bounds −1 ≤ xᵢ ≤ 1. There are 6 orders and 8 sign choices, and one sign change reverses orientation, so 24 of the 48 preserve it (our own).

**nLab:** [Coxeter group](https://ncatlab.org/nlab/show/Coxeter+group). It says: “Bₙ = Cₙ is the isometry group of a regular n-cube {−1, 1}ⁿ”

**Sources:** none listed. No primary source with a working link was found.

### Pick's formula needs simple polygons, since each hole adds one

**Remember:** One boundary, no holes: area is i + b/2 − 1.

*Rules out counterexamples.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)), 51M25. arXiv math.MG, math.CO. Level 1: early undergraduate.

**Definition.** A simple lattice polygon is the region bounded by one closed polygonal path with integer vertices that never crosses or touches itself, so it has no holes.

**Problem.** Pick's theorem: a simple lattice polygon with i lattice points inside and b on its boundary has area i + b/2 − 1.

**How the definition helps.** With one boundary and no holes, the area depends only on the interior and boundary counts. With h holes, each bounded by a disjoint simple lattice loop, the area becomes i + b/2 + h − 1. In the proof by lattice triangles, Euler's formula produces this correction for holes (our own reading).

**Wikipedia:** [Pick's theorem](https://en.wikipedia.org/wiki/Pick%27s_theorem). It says: “Generalizations to Pick's theorem to non-simple polygons are more complicated and require more information than just the number of interior and boundary vertices.”

**Sources:**

- [J. E. Reeve, On the volume of lattice polyhedra, Proceedings of the London Mathematical Society 7 (1957) 378–395](https://doi.org/10.1112/plms/s3-7.1.378)

### Centering slices preserves area without increasing perimeter

**Remember:** Slide slices to preserve area, then average edges to save length.

*Makes the theorem clean to state or prove.* MSC 52A10 (Convex sets in 2 dimensions (including convex curves)), 52A40. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Steiner symmetrization about a line replaces each slice of a convex polygon perpendicular to the line by a segment of the same length centered on the line.

**Problem.** Steiner symmetrization of a convex polygon preserves area and does not increase perimeter.

**How the definition helps.** Every slice keeps its length, so the area, the integral of slice lengths, is unchanged (our own). Between changes of boundary slope, each new upper edge vector is the average of the old upper edge vector and the reflected old lower one, so it is no longer than their average length (our own). The new lower edge is its mirror image, and the end slices keep their lengths (our own).

**Wikipedia:** [Symmetrization methods](https://en.wikipedia.org/wiki/Symmetrization_methods). It says: “by replacing each Ω ∩ Lₓ by a line centered at H and with length \|Ω ∩ Lₓ\|”

**Sources:**

- [Jakob Steiner, Einfache Beweise der isoperimetrischen Hauptsätze (1838).](https://www.e-rara.ch/zut/content/titleinfo/1368571)

### Support-function width gives perimeter π times the constant width

**Remember:** Opposite support values add to the same width in every direction.

*True by definition.* MSC 52A10 (Convex sets in 2 dimensions (including convex curves)), 52A38. arXiv math.MG. Level 2: later undergraduate.

**Definition.** The width of a planar convex body K in a direction u is the distance h(u) + h(−u) between its two support lines perpendicular to u, where h(u) = max{x·u ∣ x ∈ K}. K has constant width w if this width is w in every direction.

**Problem.** A planar convex body of constant width w has perimeter πw.

**How the definition helps.** Cauchy's formula gives the perimeter as the integral of the width over directions through half a turn (our own calculation). Constant width makes the integrand w on an interval of length π, so the perimeter is πw. Equivalently, K plus its 180° rotation is a disk of radius w, whose perimeter 2πw is twice that of K.

**Wikipedia:** [Barbier's theorem](https://en.wikipedia.org/wiki/Barbier%27s_theorem). It says: “the Minkowski sum of K and its 180° rotation is a disk with radius w and perimeter 2πw.”

**Sources:** none listed. No primary source with a working link was found.

### A nearest point supplies a strict separating hyperplane

**Remember:** The line to the nearest point gives the separating normal.

*True by definition.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)), 90C25. arXiv math.OC. Level 2: later undergraduate.

**Definition.** The normal cone of a convex set C at a point p consists of the vectors v with v·(z − p) ≤ 0 for all z ∈ C. So each such v gives a linear function z ↦ v·z that is largest on C at p.

**Problem.** A point x outside a nonempty closed convex set in Euclidean space is strictly separated from it by a hyperplane. There is a positive gap between the value of the separating linear function at x and its values on the set.

**How the definition helps.** Let p be the nearest point of C to x; the projection theorem says that x − p lies in the normal cone at p. So z ↦ (x − p)·z is at most (x − p)·p on C, while its value at x is larger by ‖x − p‖² &gt; 0 (our own calculation).

**Paper or page:** [Strong Separation Theorem](https://proofwiki.org/wiki/Strong_Separation_Theorem). It says: “Then C and D can be strongly separated.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing zero weights makes compact convex hulls compact

**Remember:** Zero weights let every average use the same compact space.

*Makes the theorem clean to state or prove.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The convex hull of X ⊆ ℝᵈ is the set of finite weighted averages ∑ᵢλᵢxᵢ of points xᵢ ∈ X, with weights λᵢ ≥ 0 summing to one; zero weights are allowed.

**Problem.** The convex hull of a compact subset of Euclidean space is compact.

**How the definition helps.** By Carathéodory's theorem d + 1 points suffice, and zero weights pad shorter averages to exactly d + 1 terms (our own). So the hull is the image of the product of d + 1 copies of X with the compact simplex of weights under the continuous averaging map, hence compact (our own).

**Wikipedia:** [Convex hull](https://en.wikipedia.org/wiki/Convex_hull). It says: “convex hulls of compact sets are compact.”

**Paper or page:** [Carathéodory's Theorem (Convex Analysis)](https://proofwiki.org/wiki/Carathéodory's_Theorem_(Convex_Analysis)). It says: “In particular, x is a convex combination of at most l + 1 points of E.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness keeps disjoint convex sets strictly apart

**Remember:** A compact set cannot approach a disjoint closed set at infinity.

*Rules out counterexamples.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)), 90C25. arXiv math.OC. Level 2: later undergraduate.

**Definition.** A linear function separates two sets with a gap if its values on one set exceed its values on the other by at least a fixed positive amount. The gap must be uniform, so two sets that come arbitrarily close cannot be separated this way.

**Problem.** Two nonempty disjoint closed convex sets in Euclidean space admit strict separation with a gap if one is compact.

**How the definition helps.** Compactness makes the distance from the compact set to the disjoint closed set a positive minimum, attained at a pair of closest points. In our own proof, the direction between these closest points separates the sets with a gap, by the nearest-point inequality. Without compactness, the disjoint closed convex sets y ≥ eˣ and y ≤ 0 come arbitrarily close as x → −∞.

**Paper or page:** [Hahn-Banach Separation Theorem/Normed Vector Space/Real Case/Compact Convex Set and Closed Convex Set](https://proofwiki.org/wiki/Hahn-Banach_Separation_Theorem/Normed_Vector_Space/Real_Case/Compact_Convex_Set_and_Closed_Convex_Set). It says: “Let A be a compact convex set. Let B be a closed convex set disjoint from A.”

**Sources:** none listed. No primary source with a working link was found.

### Directions at infinity detect exactly when convex sets are unbounded

**Remember:** A direction you can travel forever from every point.

*Makes the theorem clean to state or prove.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The recession cone of a convex set C consists of the directions in which one can travel forever from every point: the vectors v with x + sv ∈ C for all x ∈ C and s ≥ 0.

**Problem.** A nonempty closed convex set in Euclidean space is bounded exactly when its recession cone contains only zero.

**How the definition helps.** A bounded set contains no ray, so its recession cone is zero (our own). If C is unbounded, distant points xₖ scaled to unit length have a subsequence converging to a unit vector v, and segments from a fixed point a to xₖ converge to the ray from a along v (our own). For closed convex sets, a ray from one point gives parallel rays from every point, so v is a recession direction (our own).

**Paper or page:** [Conic optimization techniques yield sufficient conditions for set-completely positive matrix completion under arrowhead specification pattern](https://arxiv.org/abs/2509.19348v1). It says: “A nonempty closed convex set 𝒞 ⊆ ℝⁿ is bounded if and only if 𝒞∞ = {o}.”

**Sources:** none listed. No primary source with a working link was found.

### Keeping the origin makes taking polars twice recover a set

**Remember:** A second polar recovers the closed hull with zero included.

*Rules out counterexamples.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The one-sided polar of a set A in Euclidean space is the set of vectors y with x·y ≤ 1 for every x in A. It is an intersection of closed half-spaces that all contain the origin.

**Problem.** Taking the one-sided polar twice gives the smallest closed convex set containing both A and zero. Thus it recovers any closed convex set containing zero.

**How the definition helps.** The double polar contains A and is an intersection of closed half-spaces containing the origin, so it contains the closed convex hull of A and zero (our own). Conversely, strict separation from that hull gives a linear bound that, scaled to 1 after a small increase if it is zero, excludes any outside point (our own). So the double polar of {1} on the real line is \[0, 1\], not {1} (our own).

**Paper or page:** [Bipolar Theorem/One-Sided Polar](https://proofwiki.org/wiki/Bipolar_Theorem/One-Sided_Polar). It says: “\\paren {A<sup>\\odot}\_\\odot</sup> = \\map {\\cl\_\\sigma} {\\map {\\operatorname {conv} } {A \\cup \\set { {\\mathbf 0}<sub>X</sub>} } }”

**Sources:** none listed. No primary source with a working link was found.

### Polarity ignores convex combinations

**Remember:** An upper bound on generators is the same bound on their averages.

*True by definition.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The one-sided polar of a Euclidean set A consists of all y satisfying x·y ≤ 1 for every x ∈ A.

**Problem.** The one-sided polar of a set equals the one-sided polar of its convex hull.

**How the definition helps.** A linear bound on A holds on every convex combination of its points because the weights are nonnegative and sum to one (our own proof). Conversely, a bound on the convex hull holds on A because the hull contains A.

**Paper or page:** [One-Sided Polar of Convex Hull is One-Sided Polar of Original Set](https://proofwiki.org/wiki/One-Sided_Polar_of_Convex_Hull_is_One-Sided_Polar_of_Original_Set). It says: “(conv A)⊙ = A⊙”

**Sources:** none listed. No primary source with a working link was found.

### Polarity swaps closed convex hulls of unions with intersections

**Remember:** A union pools the inequalities, so the polar intersects their solution sets.

*Makes the theorem clean to state or prove.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The one-sided polar of A is the set of vectors y with x·y ≤ 1 for all x in A. Each point of A adds one inequality, so the polar of a union is the intersection of the polars (our own).

**Problem.** The polar of the intersection of any nonempty family of closed convex sets containing zero equals the closed convex hull of their polars’ union.

**How the definition helps.** Applied to the polars of the given sets, the union rule says that the polar of their union is the intersection of their double polars, which are the original sets by the bipolar theorem (our own). Taking polars once more, the bipolar theorem turns the left side into the closed convex hull of the union of the polars, since that union contains zero (our own).

**Paper or page:** [Intersection of One-Sided Polars is One-Sided Polar of Union](https://proofwiki.org/wiki/Intersection_of_One-Sided_Polars_is_One-Sided_Polar_of_Union). It says: “⋂₍A ∈ ℱ₎ A⊙ = (⋃₍A ∈ ℱ₎ A)⊙”

**Sources:** none listed. No primary source with a working link was found.

### Radial projection identifies convex boundaries with spheres

**Remember:** Every ray from inside meets the boundary once.

*Makes the theorem clean to state or prove.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** Radial projection from an interior point p of a convex set sends each boundary point x to the unit vector (x − p)/‖x − p‖, its direction from p.

**Problem.** Radial projection maps the boundary of a compact convex set with nonempty interior in ℝᵈ onto the unit sphere for d ≥ 1. The map and its inverse are continuous.

**How the definition helps.** Compactness gives a last point of the set on each ray from p, so the map is onto (our own). Convexity joins that point to a ball around p, so all earlier points on the ray are interior and the map is one-to-one (our own). A continuous bijection from a compact space to the Hausdorff sphere has a continuous inverse (our own).

**Paper or page:** [Boundary of Compact Convex Set with Nonempty Interior is Homeomorphic to Sphere](https://proofwiki.org/wiki/Boundary_of_Compact_Convex_Set_with_Nonempty_Interior_is_Homeomorphic_to_Sphere). It says: “Then, the boundary ∂C is homeomorphic to Sⁿ⁻¹, the unit n − 1-sphere.”

**Sources:** none listed. No primary source with a working link was found.

### Relative interior gives every nonempty convex set an inside

**Remember:** Look for an inside in the space the set actually spans.

*Rules out counterexamples.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The relative interior of a set consists of its points that have a neighborhood, within the set's affine hull, lying entirely in the set. The affine hull is the smallest flat, a translated subspace, that contains the set.

**Problem.** Every nonempty convex subset of Euclidean space has nonempty relative interior.

**How the definition helps.** Pick a point x₀ and points x₁, …, x<sub>k</sub> of the set whose differences from x₀ form a basis of the directions of the affine hull (our own). Their convex hull is a k-simplex inside the set, and its center has a neighborhood in the affine hull inside the simplex, also when k = 0 (our own). Ordinary interior fails: a segment in the plane has none.

**Wikipedia:** [Relative interior](https://en.wikipedia.org/wiki/Relative_interior). It says: “The interior of a line segment in an at least two-dimensional ambient space is empty”

**Sources:** none listed. No primary source with a working link was found.

### Support values determine a closed convex set

**Remember:** One support bound per direction recovers the whole closed set.

*Makes the theorem clean to state or prove.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The support function of a set C gives, in each direction u, the least upper bound h(u) of u·x over x in C, possibly +∞. Each finite value gives a half-space u·x ≤ h(u) that contains C.

**Problem.** A nonempty closed convex set in Euclidean space is the intersection of the half-spaces given by its finite support bounds. In particular, its support function determines it uniquely.

**How the definition helps.** Each finite support half-space contains the set, so the set lies in their intersection (our own). A point outside a nonempty closed convex set is strictly separated from it by some direction u, so it violates the bound u·x ≤ h(u) (our own).

**Paper or page:** [Closed Convex Set in terms of Bounded Linear Functionals](https://proofwiki.org/wiki/Closed_Convex_Set_in_terms_of_Bounded_Linear_Functionals). It says: “C = ⋂₍f ∈ X⋆₎ {x ∈ X : f(x) ≤ sup₍c ∈ C₎ f(c)}”

**Sources:** none listed. No primary source with a working link was found.

### The intersection definition makes the convex hull smallest

**Remember:** The intersection of all candidates lies inside each candidate.

*True by definition.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)), 52A05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** The convex hull of a nonempty set X is the intersection of all convex sets that contain X.

**Problem.** The convex hull is convex, contains X, and lies inside every convex set that contains X. So a smallest convex set containing X exists.

**How the definition helps.** The intersection lies inside each convex set containing X, because that set is one of those intersected. It contains X, and it is convex because a segment between two of its points lies in every set intersected. The weighted-average definition would instead need proofs that its averages form a convex set and that convex sets contain all such averages (our own comparison).

**Wikipedia:** [Convex hull](https://en.wikipedia.org/wiki/Convex_hull). It says: “It is a subset of every other convex set Y that contains X, because Y is included among the sets being intersected.”

**Paper or page:** [Convex Hull is Smallest Convex Set containing Set](https://proofwiki.org/wiki/Convex_Hull_is_Smallest_Convex_Set_containing_Set). It says: “Then conv(U) is the smallest convex subset of X containing U”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970)](https://doi.org/10.1515/9781400873173)

### The segment definition makes faces of faces faces

**Remember:** A face swallows any segment it touches inside; apply that twice.

*True by definition.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)). arXiv math.MG, math.OC. Level 2: later undergraduate.

**Definition.** A face of a convex set C is a convex subset F that swallows segments: if a point strictly inside a segment of C lies in F, both endpoints lie in F. An exposed face is the set where some linear function attains its maximum on C.

**Problem.** A face of a face of a convex set is a face of the whole set. The same statement fails for exposed faces.

**How the definition helps.** If G is a face of F and F is a face of C, a segment of C with an inner point in G has both endpoints in F by the rule for F, then in G by the rule for G (our own proof). For exposed faces, take a stadium, a segment thickened by distance 1: an endpoint of its flat top is exposed in the top but not in the stadium. The top line is the only supporting line there, and it exposes the whole top.

**Wikipedia:** [Face (geometry)](https://en.wikipedia.org/wiki/Face_%28geometry%29). It says: “Therefore, not every face of a convex set is an exposed face.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970), §18](https://doi.org/10.1515/9781400873173)

### Scaling an origin-symmetric convex body gives a norm

**Remember:** The gauge measures how far you must enlarge the unit body.

*Rules out counterexamples.* MSC 52A21 (Convexity and finite-dimensional Banach spaces (including special norms, zonoids, etc.) (aspects of convex geometry)), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** For a compact convex set K with 0 in its interior, the gauge of x is the smallest t ≥ 0 with x ∈ tK, where 0K = {0}. It measures how far K must be enlarged to reach x.

**Problem.** The gauge of every origin-symmetric convex body is a norm with K as its closed unit ball.

**How the definition helps.** Scaling gives homogeneity, symmetry gives opposite vectors the same gauge, and closedness makes K exactly the points of gauge at most one (our own). Convexity puts a sum of points of aK and bK in (a + b)K, which gives the triangle inequality, and boundedness makes the gauge of a nonzero vector positive (our own). Without symmetry, K = \[−1, 2\] gives −1 and 1 the different gauges 1 and 1/2 (our own).

**Paper or page:** [Minkowski Functional of Symmetric Convex Absorbing Set in Real Vector Space is Seminorm](https://proofwiki.org/wiki/Minkowski_Functional_of_Symmetric_Convex_Absorbing_Set_in_Real_Vector_Space_is_Seminorm). It says: “Then μA is a seminorm.”

**Sources:** none listed. No primary source with a working link was found.

### Ball bodies survive double polarity

**Remember:** Apply ball polarity twice to recover the ball hull.

*Rules out counterexamples.* MSC 52A30 (Variants of convex sets (star-shaped, (m, n)-convex, etc.)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The radius-r polar of a set consists of the centers of all closed radius-r balls that contain the set. A radius-r ball body is an intersection of closed radius-r balls.

**Problem.** In Euclidean dimension d &gt; 1, taking the radius-r polar twice fixes each radius-r ball body for r &gt; 0.

**How the definition helps.** Taking the polar twice gives the intersection of all closed radius-r balls containing the set (our own proof). For a ball body every defining ball is among them, so the intersection is the body itself. Two points less than 2r apart are not a ball body: every radius-r ball containing them also contains their segment, so the double polar adds points.

**Paper or page:** [Selected topics from the theory of intersections of balls](https://arxiv.org/abs/2411.10302v2). It says: “(Aʳ)ʳ = A”

**Sources:**

- [Selected topics from the theory of intersections of balls, Proposition 3.2](https://arxiv.org/abs/2411.10302v2)

### Half-planes make guard kernels convex

**Remember:** A guard must stay on the inward side of every edge.

*True by definition.* MSC 52A30 (Variants of convex sets (star-shaped, (m, n)-convex, etc.)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** The kernel of a simple polygon is the set of points that see the whole polygon, where two points see each other if the segment between them stays in the closed polygon. Equivalently, it is the intersection of the closed half-planes to the left of the edges, traversed counterclockwise.

**Problem.** For a simple polygon, the set of points that can each see the whole polygon is convex, possibly empty.

**How the definition helps.** An intersection of half-planes is convex, so the kernel is convex. The work is in the kernel theorem, which replaces visibility tests along whole segments (our own comparison) with one half-plane per edge.

**Wikipedia:** [Star-shaped polygon](https://en.wikipedia.org/wiki/Star-shaped_polygon). It says: “The kernel of a polygon is the intersection of all its interior half-planes.”

**Sources:**

- [D. T. Lee and F. P. Preparata, An Optimal Algorithm for Finding the Kernel of a Polygon (1979)](https://doi.org/10.1145/322139.322142)

### A compact member keeps infinite Helly intersections from escaping

**Remember:** One compact member gives all the intersections a place to stay.

*Rules out counterexamples.* MSC 52A35 (Helly-type theorems and geometric transversal theory), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** Infinite Helly asks that a family of closed convex sets in ℝᵈ have a compact member K, one that is closed and bounded. Then the intersections of the other sets with K are closed subsets of one fixed compact set.

**Problem.** A family of closed convex sets in ℝᵈ has a common point under two conditions. One member is compact and every subfamily of at most d + 1 sets meets.

**How the definition helps.** By finite Helly, every finite subfamily together with K has a common point (our own). So the intersections with K are closed subsets of K with the finite intersection property, and compactness gives a point common to all (our own). Without a compact member, the rays \[n, ∞) on the line meet in every finite selection but have no common point (our own).

**Wikipedia:** [Helly's theorem](https://en.wikipedia.org/wiki/Helly%27s_theorem). It says: “the intersection of all others with it are closed subsets of a fixed compact space”

**Sources:** none listed. No primary source with a working link was found.

### Minimal empty families turn Helly’s theorem into one Radon step

**Remember:** Delete each set once, then let Radon join the witnesses.

*Makes the theorem clean to state or prove.* MSC 52A35 (Helly-type theorems and geometric transversal theory), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A family of sets is a minimal empty-intersection family if the sets have no common point but removing any one set leaves a common point. So each set has a witness point that lies in all the other sets but not in it (our own).

**Problem.** In ℝᵈ, a finite minimal empty-intersection family of convex sets has at most d + 1 members.

**How the definition helps.** Suppose there are at least d + 2 sets and pick d + 2 of their witnesses (our own). Radon's theorem splits these witnesses into two groups whose convex hulls meet (our own). Each set misses at most its own witness, so it contains one whole group and hence the meeting point, which contradicts the empty intersection (our own).

**Wikipedia:** [Helly's theorem](https://en.wikipedia.org/wiki/Helly%27s_theorem). It says: “We prove the finite version, using Radon's theorem”

**Sources:**

- [Johann Radon, Mengen konvexer Körper, die einen gemeinsamen Punkt enthalten, Mathematische Annalen 83, 113–115 (1921).](https://link.springer.com/article/10.1007/BF01464231)

### Zero weights show why Helly needs d plus one sets

**Remember:** Any missing zero leaves a coordinate free to be one.

*Makes the theorem clean to state or prove.* MSC 52A35 (Helly-type theorems and geometric transversal theory), 52B05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** The standard d-simplex is the set of points with d + 1 nonnegative coordinates summing to one. Each facet is the part where one chosen coordinate is zero.

**Problem.** For every d ≥ 1, any d facets of the standard d-simplex share a point, but all d + 1 share none.

**How the definition helps.** Any d facets set d coordinates to zero, and the point with the remaining coordinate equal to one lies on all of them (our own). All d + 1 facets would make every coordinate zero, but the sum must be one (our own). So checking only d convex sets at a time cannot guarantee a common point in dimension d (our own).

**nLab:** [simplex](https://ncatlab.org/nlab/show/simplex). It says: “which omits the kth coordinate”

**Sources:** none listed. No primary source with a working link was found.

### Fewest nonzero weights give Carathéodory’s bound

**Remember:** Choose the fewest weights, then use a dependence to drop one.

*Makes the theorem clean to state or prove.* MSC 52A37 (Other problems of combinatorial convexity), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** The convex hull of a set is the set of finite weighted averages of its points, with nonnegative weights summing to one. So each point of the hull has an expression with the fewest positive weights.

**Problem.** Every point in the convex hull of a set in ℝᵈ is a weighted average of at most d + 1 points from that set.

**How the definition helps.** Take an expression of the point with the fewest positive weights (our own). If it uses more than d + 1 points, they are affinely dependent: some coefficients, not all zero, have sum zero and give the zero vector (our own). Adding a suitable multiple of these coefficients keeps the point and the weight sum, makes one weight zero and keeps the rest nonnegative, which contradicts minimality (our own).

**Paper or page:** [Carathéodory's Theorem (Convex Analysis)](https://proofwiki.org/wiki/Carathéodory's_Theorem_(Convex_Analysis)). It says: “In particular, x is a convex combination of at most l + 1 points of E.”

**Sources:** none listed. No primary source with a working link was found.

### General position makes Radon partitions unique

**Remember:** One line of dependences gives one sign pattern, so one split.

*Rules out counterexamples.* MSC 52A37 (Other problems of combinatorial convexity), 52C35. arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Points in ℝᵈ are in general position here when no d+1 of them have an affine dependence. Such a dependence is a list of weights, not all zero, with zero sum and zero weighted sum. So every nonzero dependence of d+2 such points uses all of them, and these dependences form one line (our own).

**Problem.** A set of d+2 points in general position in ℝᵈ has exactly one Radon partition up to swapping its parts. A Radon partition splits the points into two parts whose convex hulls meet.

**How the definition helps.** The dependences form one line, so their sign pattern is fixed up to a global flip (our own proof). The positive and negative weights give the two parts, and every Radon partition gives such a dependence. For four collinear plane points A, B, C, D in order, both AC against BD and AD against BC work (our own counterexample).

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

**Definition.** A two-distance set is a finite set of points with exactly two distances between distinct points. Its graph joins points at the shorter distance, so a subset has smaller diameter exactly when it is a clique (our own).

**Problem.** The Borsuk number of a two-distance set is the fewest parts of smaller diameter that it splits into. It equals the fewest cliques that cover the vertices of its graph.

**How the definition helps.** A part has smaller diameter exactly when it has no pair at the longer distance, the diameter of the whole set (our own explanation). A cover by cliques becomes a partition by keeping each vertex in one clique, because subsets of cliques are cliques. The paper uses this to restate Borsuk's question for two-distance sets in terms of graphs.

**Paper or page:** [Borsuk's conjecture for two-distance sets and its equivalent formulation for graphs](https://arxiv.org/abs/2511.03668v2), [Borsuk's conjecture for two-distance sets and its equivalent formulation for graphs](https://arxiv.org/abs/2511.03668v2). It says: “Every graph G can be embedded in a Euclidean space as a two-distance set. This allows us to reformulate the analogue of Borsuk's conjecture for two-distance sets in terms of graphs.”

**Sources:**

- [Oleg R. Musin, Borsuk's conjecture for two-distance sets and its equivalent formulation for graphs, arXiv:2511.03668 (2025)](https://arxiv.org/abs/2511.03668v2)

### Signed affine weights give Radon’s partition

**Remember:** Move the negative weights across to get two equal averages.

*Makes the theorem clean to state or prove.* MSC 52A37 (Other problems of combinatorial convexity), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An affine dependence of points is a list of weights, not all zero, with zero sum and zero weighted sum of the points. Because the weights sum to zero, the positive weights and the negative weights have the same total (our own).

**Problem.** Any d + 2 points in ℝᵈ can be split into two groups whose convex hulls meet.

**How the definition helps.** Dividing by that common total turns the two sides into two averages at the same point, so the two groups have meeting hulls (our own). Unused points can join either group (our own). A dependence exists because appending a coordinate one gives d + 2 vectors in ℝᵈ⁺¹, which are linearly dependent (our own).

**Wikipedia:** [Radon's theorem](https://en.wikipedia.org/wiki/Radon%27s_theorem). It says: “the sum of the multipliers to be zero”

**Sources:**

- [Johann Radon, Mengen konvexer Körper, die einen gemeinsamen Punkt enthalten, Mathematische Annalen 83, 113–115 (1921).](https://link.springer.com/article/10.1007/BF01464231)

### Signed face projections cancel

**Remember:** Front shadows and back shadows have equal area and opposite signs.

*True by definition.* MSC 52A38 (Length, area, volume and convex sets (aspects of convex geometry)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The vector area of a face is its area times its outward unit normal. Its component along a unit direction is the signed area of the face's shadow on the perpendicular plane. The sign is positive for faces that look forward and negative for faces that look back.

**Problem.** The outward vector areas of all faces of a bounded three-dimensional convex polyhedron sum to zero.

**How the definition helps.** In any direction, almost every line through the solid enters and leaves once, so front and back shadows coincide (our own proof). They cancel, so each coordinate of the vector sum is zero.

**Paper or page:** [Total Vector Area of Polyhedron is Zero](https://proofwiki.org/wiki/Total_Vector_Area_of_Polyhedron_is_Zero). It says: “the total vector area of all the faces of P”

**Sources:** none listed. No primary source with a working link was found.

### Strong convexity is ordinary convexity after subtracting a quadratic

**Remember:** Subtract the required curvature and test what remains.

*True by definition.* MSC 52A41 (Convex functions and convex programs in convex geometry), 90C25. arXiv math.OC. Level 2: later undergraduate.

**Definition.** A function f on a convex Euclidean domain is m-strongly convex (m&gt;0) if it sags below each chord at least as much as (m/2)‖x‖². That is, f(θx+(1−θ)y) ≤ θf(x)+(1−θ)f(y)−(m/2)θ(1−θ)‖x−y‖² for all x, y in the domain and θ ∈ \[0,1\].

**Problem.** On a convex subset of Euclidean space, f is m-strongly convex exactly when f(x) − (m/2)‖x‖² is convex. For differentiable f, it is also equivalent to f(y) ≥ f(x) + ∇f(x)·(y−x) + (m/2)‖y−x‖², and to (∇f(x)−∇f(y))·(x−y) ≥ m‖x−y‖².

**How the definition helps.** The first equivalence is a direct expansion, because ‖θx + (1−θ)y‖² = θ‖x‖² + (1−θ)‖y‖² − θ(1−θ)‖x−y‖². The other two follow from the usual first-order tests for convexity applied to the remainder (our own).

**Paper or page:** [Formalization of Complexity Analysis of the First-order Algorithms for Convex Optimization](https://arxiv.org/abs/2403.11437v3). It says: “The function g(x) = f(x) − (m/2)‖x‖² is convex on s.”

**Sources:**

- [Chenyi Li, Ziyu Wang, Wanyi He, Yuxuan Wu, Shengyang Xu, Zaiwen Wen, Formalization of Complexity Analysis of the First-order Algorithms for Convex Optimization, arXiv:2403.11437v3 (2024)](https://arxiv.org/abs/2403.11437v3)

### Counting the empty face and the whole polytope makes faces a lattice

**Remember:** Count the empty set and the whole; every pair meets and joins.

*Rules out counterexamples.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 06A07. arXiv math.MG, math.CO. Level 2: later undergraduate.

**Definition.** A nonempty face of a convex polytope P is where some linear function reaches its maximum on P, and the zero function gives P itself. The empty set also counts as a face, so any two faces have a common face below and a common face above.

**Problem.** The faces of a convex polytope form a lattice: every two faces have a greatest common lower face and a least common upper face. This lattice determines the combinatorial type of the polytope.

**How the definition helps.** Faces are closed under intersection, so the meet is the intersection and the join is the intersection of all faces containing both. Combinatorial type is defined by this lattice, and a nonempty intersection of faces maximizes the sum of their functions (our own argument). Without the two extra faces, two vertices have no common lower face and opposite cube facets have no common upper face (our own examples).

**Wikipedia:** [Convex polytope](https://en.wikipedia.org/wiki/Convex_polytope). It says: “The definition of a face given above allows both the polytope itself and the empty set to be considered as faces, ensuring that every pair of faces has a join and a meet in the face lattice.”

**Sources:**

- [G. M. Ziegler, Lectures on Polytopes, Graduate Texts in Mathematics 152, Springer (1995)](https://doi.org/10.1007/978-1-4613-8431-1)
- [B. Grünbaum, Convex Polytopes, Graduate Texts in Mathematics 221, Springer (2003)](https://doi.org/10.1007/978-1-4613-0019-9)

### Diamond rules exclude branching edges

**Remember:** Skip one rank and exactly two faces fill the gap.

*Rules out counterexamples.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** An abstract polyhedron ranks its faces: vertices 0, edges 1, polygons 2, and the whole polyhedron 3. The diamond rule says that exactly two faces lie between any two comparable faces whose ranks differ by two.

**Problem.** In an abstract polyhedron, every edge lies on exactly two polygon faces.

**How the definition helps.** An edge and the whole polyhedron differ in rank by two, so the diamond rule puts exactly two polygons between them. Without the rule, three triangles glued along one common edge give an edge on three polygons (our own example).

**nLab:** [abstract polytope](https://ncatlab.org/nlab/show/abstract+polytope). It says: “every line segment and polyhedron share two polygons”

**Sources:** none listed. No primary source with a working link was found.

### Extreme points give a polytope its unique minimal generating set

**Remember:** A true corner cannot be averaged away.

*Makes the theorem clean to state or prove.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A polytope is the convex hull of finitely many points. Its vertices are its extreme points, the points that lie strictly between no two distinct points of the polytope.

**Problem.** The vertices of a nonempty polytope form its unique smallest set of convex hull generators.

**How the definition helps.** Every generating set contains each vertex, because an average of other points would place the vertex strictly between two points (our own). Conversely, a nonextreme generator lies strictly between two points, whose expansions as averages of generators give it a weight below one in itself (our own). Rearranging writes it by the other generators, so it can be removed (our own).

**nLab:** [extreme point](https://ncatlab.org/nlab/show/extreme+point). It says: “those not in between any pair of points of the set.”

**Paper or page:** [Extreme Point of Convex Set not contained in Convex Hull of Subset not containing Point](https://proofwiki.org/wiki/Extreme_Point_of_Convex_Set_not_contained_in_Convex_Hull_of_Subset_not_containing_Point). It says: “Then x ∉ conv C.”

**Sources:** none listed. No primary source with a working link was found.

### Reversing face inclusion swaps simple and simplicial polytopes

**Remember:** A vertex with d facets becomes a facet with d vertices.

*True by definition.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 52B11. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A d-dimensional polytope is simple if exactly d facets, faces of dimension d − 1, pass through each vertex. It is simplicial if each facet has exactly d vertices, the same count with vertices and facets swapped.

**Problem.** The polar of a full-dimensional polytope with the origin inside is simplicial exactly when the original polytope is simple.

**How the definition helps.** Polarity reverses face inclusion, so each vertex becomes a facet of the polar whose vertices match the facets through that vertex (our own). Thus d facets at every vertex become d vertices on every facet (our own). This uses the face-duality theorem for polars (our own).

**Wikipedia:** [Simplicial polytope](https://en.wikipedia.org/wiki/Simplicial_polytope). It says: “It is topologically dual to simple polytopes.”

**Sources:** none listed. No primary source with a working link was found.

### The moment curve exposes small vertex sets as faces

**Remember:** On the moment curve, polynomials of degree d are affine functions.

*Makes the theorem clean to state or prove.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 52B11. arXiv math.MG. Level 2: later undergraduate.

**Definition.** For d ≥ 2, a cyclic d-polytope is the convex hull of at least d+1 distinct points (t, t², …, tᵈ) of the moment curve. On these points, every polynomial in t of degree at most d is an affine function of the coordinates (our own).

**Problem.** Any nonempty subset of at most d/2 vertices of a cyclic d-polytope spans a face.

**How the definition helps.** Take the product of (t − s)² over the chosen vertex parameters s, a polynomial of degree at most d (our own). It vanishes at the chosen vertices and is positive at all others (our own). So its affine function reaches its minimum on the polytope exactly on the hull of the chosen vertices, which is therefore a face (our own).

**Wikipedia:** [Cyclic polytope](https://en.wikipedia.org/wiki/Cyclic_polytope). It says: “every set of at most d/2 vertices forms a face.”

**Sources:** none listed. No primary source with a working link was found.

### Cauchy's rigidity theorem needs the polyhedra to be convex

**Remember:** A convex polyhedron cannot have a dent that pops in and out.

*Rules out counterexamples.* MSC 52B10 (Three-dimensional polytopes), 52C25. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A convex polyhedron contains the whole segment between any two of its points, so it has no inward dents. Two polyhedra are combinatorially equivalent if a bijection between their faces of all dimensions preserves inclusion in both directions.

**Problem.** Two combinatorially equivalent bounded convex polyhedra in three dimensions with congruent corresponding faces are congruent. Thus a convex polyhedron made of rigid plates joined by hinges cannot flex.

**How the definition helps.** Convexity excludes dents: reflecting one vertex cap of a regular icosahedron through its base plane keeps face shapes and incidences but changes the solid. Bricard’s octahedra and Connelly’s flexible sphere are also nonconvex. For convex polyhedra, Cauchy’s rigidity theorem supplies the proof.

**Wikipedia:** [Cauchy's theorem (geometry)](https://en.wikipedia.org/wiki/Cauchy%27s_theorem_%28geometry%29). It says: “To see that convexity is necessary, consider a regular icosahedron. One can "push in" a vertex to create a nonconvex polyhedron that is still combinatorially equivalent to the regular icosahedron”

**Sources:**

- [R. Connelly, A counterexample to the rigidity conjecture for polyhedra, Publ. Math. IHÉS 47 (1977) 333–338](https://doi.org/10.1007/BF02684342)

### Projection through one facet draws polytope graphs without crossings

**Remember:** Look through one face and draw what lies behind it.

*Makes the theorem clean to state or prove.* MSC 52B10 (Three-dimensional polytopes), 52B35, 52B05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A Schlegel diagram projects a convex polytope's boundary onto one facet from a point just beyond it, strictly inside the half-spaces of all other facets. Each ray from there through the facet's interior then meets the rest of the boundary exactly once (our own).

**Problem.** Every three-dimensional convex polytope has a Schlegel diagram that draws its vertices and edges in the plane without crossings.

**How the definition helps.** So the projection is one-to-one away from the chosen facet and draws each edge as a straight segment, and distinct edges cannot cross (our own). The single meeting holds because convexity makes each ray meet the polytope in one interval (our own).

**Wikipedia:** [Schlegel diagram](https://en.wikipedia.org/wiki/Schlegel_diagram). It says: “through a point just outside one of its facets.”

**Sources:** none listed. No primary source with a working link was found.

### Boundedness makes finite half-space intersections finite convex hulls

**Remember:** A finite convex hull cannot contain an infinite ray.

*Rules out counterexamples.* MSC 52B11 (n-dimensional polytopes), 52B05. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A polytope is a bounded intersection of finitely many closed half-spaces, so, unlike a general polyhedron, it contains no infinite ray.

**Problem.** Nonempty polytopes are exactly the convex hulls of nonempty finite sets of points.

**How the definition helps.** Minkowski–Weyl writes a nonempty polyhedron as a finite convex hull plus a finitely generated cone, and boundedness removes the cone (our own). Any nonzero cone generator would give an unbounded ray, as in \[0, ∞). Conversely, every finite convex hull is bounded and has a finite inequality description by the same theorem.

**Wikipedia:** [Convex polytope](https://en.wikipedia.org/wiki/Convex_polytope). It says: “By requiring that the intersection of half-spaces results in a bounded set, the definition becomes equivalent to the vertex-representation.”

**Sources:** none listed. No primary source with a working link was found.

### Finite convex hulls make affine images of polytopes polytopes

**Remember:** Affine maps send hulls of points to hulls of their images.

*True by definition.* MSC 52B11 (n-dimensional polytopes), 52B55. arXiv math.CO, math.MG. Level 2: later undergraduate.

**Definition.** Here a polytope is the convex hull of finitely many points, the set of their weighted averages with nonnegative weights that sum to 1.

**Problem.** The image of a convex polytope under an affine map is a convex polytope. The sum of two convex polytopes is also a convex polytope, where the sum contains every sum of one point from each.

**How the definition helps.** Affine maps preserve weighted averages, so the image is the hull of the images of the points (our own proof). Multiplying weights from the two hulls writes each sum as an average of pairwise sums of points. Conversely, such an average splits into one point from each hull, so the sum is the hull of the pairwise sums.

**Wikipedia:** [Convex polytope](https://en.wikipedia.org/wiki/Convex_polytope). It says: “This is equivalent to defining a bounded convex polytope as the convex hull of a finite set of points”

**Sources:** none listed. No primary source with a working link was found.

### Half-space intersections make polytope intersections and slices polytopes

**Remember:** Intersecting polytopes just pools their lists of inequalities.

*True by definition.* MSC 52B11 (n-dimensional polytopes), 52B55. arXiv math.CO, math.MG. Level 2: later undergraduate.

**Definition.** Here a polytope is a nonempty bounded intersection of finitely many closed half-spaces, each given by a weak linear inequality.

**Problem.** A nonempty intersection of two polytopes is a polytope. A nonempty intersection of a polytope and an affine subspace is also a polytope.

**How the definition helps.** Intersecting two polytopes pools their two lists of inequalities, and the result stays bounded (our own argument). An affine subspace also has a finite list, because each linear equation counts as two inequalities. The real work lies in Minkowski–Weyl, which shows that these sets are the hulls of finite point sets.

**Wikipedia:** [Convex polytope](https://en.wikipedia.org/wiki/Convex_polytope). It says: “A convex polytope may be defined as an intersection of a finite number of half-spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Vertex and inequality descriptions give short checks for polytope membership

**Remember:** A weighted combination proves membership, and one failed inequality proves nonmembership.

*True by definition.* MSC 52B11 (n-dimensional polytopes), 90C05. arXiv math.OC, math.CO. Level 2: later undergraduate.

**Definition.** By Minkowski–Weyl, a convex polytope is both the hull of finitely many vertices and the bounded solution set of finitely many weak linear inequalities. So a point lies in it exactly when it is a weighted average of vertices, and outside it exactly when it breaks a listed inequality.

**Problem.** For a point in a d-dimensional polytope, at most d + 1 vertices with weights prove membership. For a point outside it, one inequality from the given list proves nonmembership.

**How the definition helps.** A weighted average of vertices certifies membership, and a violated listed inequality certifies nonmembership, and each check is direct arithmetic. Carathéodory’s theorem bounds the needed vertices by d + 1 (our own count).

**Wikipedia:** [Convex polytope](https://en.wikipedia.org/wiki/Convex_polytope). It says: “to show that it is not in the polytope, it is sufficient to present a single defining inequality that it violates”

**Sources:** none listed. No primary source with a working link was found.

### Zonohedra defined as segment sums are closed under addition

**Remember:** To add zonohedra, put all their generating segments in one sum.

*True by definition.* MSC 52B12 (Special polytopes (linear programming, centrally symmetric, etc.)), 52B11. arXiv math.MG, math.CO. Level 2: later undergraduate.

**Definition.** A zonohedron is a three-dimensional Minkowski sum of finitely many line segments, the set of all sums of one point from each segment.

**Problem.** The sum of two zonohedra is a zonohedron. Each zonohedron is symmetric about a point.

**How the definition helps.** Putting the two lists of segments together gives a single sum of segments, so the sum is a zonohedron. Reflecting each chosen point in its segment's midpoint reflects the whole sum in the sum of the midpoints, which gives central symmetry (our own argument). With the face definition instead, the work would be proving that centrally symmetric faces force a sum of segments.

**Wikipedia:** [Zonohedron](https://en.wikipedia.org/wiki/Zonohedron). It says: “The Minkowski sum of any two zonohedra is another zonohedron, generated by the union of the generators of the two given zonohedra.”

**Sources:** none listed. No primary source with a working link was found.

### Flags count the symmetries of every Platonic solid

**Remember:** Each edge belongs to four flags, and each flag names one symmetry.

*True by definition.* MSC 52B15 (Symmetry properties of polytopes), 20H15. arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** A flag is a vertex, an edge through it and a face containing that edge, so each edge lies in four flags (our own). The solid is flag-transitive if, for any two flags, some symmetry carries the first to the second.

**Problem.** A Platonic solid with E edges has 4E symmetries, including orientation-reversing ones.

**How the definition helps.** So the symmetries match the flags one to one, giving 4E of them (our own). A symmetry fixing a flag fixes its vertex, edge midpoint, face centre and solid centre, four noncoplanar points, so it is the identity (our own). The geometric input is that each Platonic solid is flag-transitive (our own).

**Wikipedia:** [Regular polytope](https://en.wikipedia.org/wiki/Regular_polytope). It says: “whose symmetry group acts transitively on its flags”

**Paper or page:** [Tessellations of surfaces](https://arxiv.org/abs/2303.17263). It says: “Each Platonic solid admits a triangulation into right-angle triangles determined by barycentric subdivisions of its faces.”

**Sources:** none listed. No primary source with a working link was found.

### Regularity by flag symmetry makes dual polytopes regular

**Remember:** Regularity moves any flag to any other, and polarity reverses each flag.

*True by definition.* MSC 52B15 (Symmetry properties of polytopes), 51M20. arXiv math.MG, math.CO. Level 2: later undergraduate.

**Definition.** A flag is a chain of nested faces with one face of each dimension. A full-dimensional convex polytope is regular if its symmetries carry any flag to any other. The polar dual reverses face inclusion, so it turns each flag into a flag in reverse order.

**Problem.** The polar dual of a regular convex polytope centered at its vertex average is regular.

**How the definition helps.** Duality turns flags into flags, so flag transitivity passes to the dual (our own proof). Centred at its vertex average, every symmetry is orthogonal, so it also acts on the polar and respects the face correspondence. The work is this face correspondence, not a check of the dual's faces one by one.

**Wikipedia:** [Regular polytope](https://en.wikipedia.org/wiki/Regular_polytope). It says: “The dual of a regular polytope is also a regular polytope.”

**Sources:** none listed. No primary source with a working link was found.

### Taking the polar leaves a centered polyhedron’s symmetry group unchanged

**Remember:** A polar is built from dot products, which rotations and reflections keep.

*True by definition.* MSC 52B15 (Symmetry properties of polytopes), 20H15. arXiv math.GR, math.MG. Level 2: later undergraduate.

**Definition.** The polar of a convex polyhedron with the origin inside is the set of vectors y with x·y ≤ 1 for all its points x. It is defined by dot products alone, which orthogonal maps preserve (our own).

**Problem.** A convex polyhedron and its polar have exactly the same orthogonal symmetries. For example, a centered cube and its polar octahedron have the same symmetries.

**How the definition helps.** An orthogonal symmetry of the polyhedron preserves every dot product, so it maps the polar onto itself (our own). The polar of the polar is the original polyhedron, so the same argument gives the converse (our own).

**Wikipedia:** [Dual polyhedron](https://en.wikipedia.org/wiki/Dual_polyhedron). It says: “Duality preserves the symmetries of a polyhedron.”

**Sources:** none listed. No primary source with a working link was found.

### Empty lattice triangles give the smallest possible area

**Remember:** An empty triangle is half a parallelogram with no extra points.

*True by definition.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)), 52A10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An empty lattice triangle has three noncollinear vertices in ℤ² and no other points of ℤ², even on its edges. It is unimodular if its two edge vectors at one vertex form a basis of ℤ². Equivalently, their half-open parallelogram contains no lattice point except that vertex (our own).

**Problem.** An empty lattice triangle is unimodular and has area one half.

**How the definition helps.** The edge parallelogram is the triangle plus its point reflection through the third edge's midpoint, so it has no extra lattice points (our own). So the half-open parallelogram contains only the corner, and the edge vectors form a basis (our own). That parallelogram then has area one, and the triangle has half of it (our own).

**Wikipedia:** [Pick's theorem](https://en.wikipedia.org/wiki/Pick%27s_theorem). It says: “a triangle with three integer vertices and no other integer points has area exactly ½”

**Sources:** none listed. No primary source with a working link was found.

### Lattice edge lengths make the planar lattice count quadratic

**Remember:** The gcd of an edge’s coordinate changes counts its lattice steps.

*Makes the theorem clean to state or prove.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)), 52A10. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A lattice polygon has integer vertices. An edge's lattice length is the gcd of its coordinate changes \|a\| and \|b\|, the number of lattice steps along it (our own).

**Problem.** A convex lattice polygon has area A and total lattice edge length B. Its dilation by a positive integer n contains An² + Bn/2 + 1 lattice points.

**How the definition helps.** Lattice length counts an edge's integer points minus its starting vertex, so B counts the boundary points (our own). Dilation by n multiplies B by n and the area by n² (our own). Pick’s theorem, points = area + boundary/2 + 1, then gives the formula (our own).

**Wikipedia:** [Pick's theorem](https://en.wikipedia.org/wiki/Pick%27s_theorem). It says: “the number of integer points on its boundary”

**Sources:** none listed. No primary source with a working link was found.

### Order volumes count linear extensions

**Remember:** Sort the coordinates and each valid order gets one equal piece.

*True by definition.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 2: later undergraduate.

**Definition.** The order polytope of a finite poset P is the set of functions f: P → \[0,1\] with f(a) ≤ f(b) whenever a ≤ b. A linear extension is a total order on P that keeps every comparison. Each one gives the region of the cube where the coordinates increase in that order.

**Problem.** For a partial order on n elements, n! times the order polytope’s volume counts its linear extensions.

**How the definition helps.** Each strict ordering of the coordinates gives a cube region wholly inside or wholly outside the polytope, and the inside ones are the linear extensions. Permuting coordinates gives all n! regions volume 1/n!, and ties have volume zero (our own calculation).

**Wikipedia:** [Order polytope](https://en.wikipedia.org/wiki/Order_polytope). It says: “an order polytope can be partitioned into order simplices in a canonical way”

**Sources:**

- [R. P. Stanley, Two poset polytopes (1986)](https://doi.org/10.1007/BF02187680)

### Unimodular pieces count lattice volume

**Remember:** Edges forming a lattice basis give one unit of normalized volume.

*True by definition.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 2: later undergraduate.

**Definition.** A lattice simplex is unimodular if its edge vectors at one vertex form a basis of the lattice in their linear span. Normalize volume so a full-dimensional unimodular simplex has volume one.

**Problem.** The normalized volume of a full-dimensional lattice polytope with a unimodular triangulation counts its top-dimensional simplices.

**How the definition helps.** Each full-dimensional simplex in this triangulation has normalized volume one (our own). Their interiors are disjoint, so adding their volumes counts them (our own).

**Paper or page:** [Flow polytopes for extensions of bipartite graphs](https://arxiv.org/abs/2509.26445v2). It says: “is equal to the number of maximal simplices”

**Sources:**

- [Flow polytopes for extensions of bipartite graphs, Theorem 2.14](https://arxiv.org/abs/2509.26445v2)

### Valuing the Dehn invariant in a tensor product makes dissection invariance automatic

**Remember:** Length times angle, forgetting rational multiples of π.

*Makes the theorem clean to state or prove.* MSC 52B45 (Dissections and valuations (Hilbert's third problem, etc.)), 51M20. arXiv math.MG, math.CO. Level 2: later undergraduate.

**Definition.** The Dehn invariant of a polyhedron adds (edge length) ⊗ (dihedral angle) over its edges, in the tensor product ℝ ⊗ (ℝ/2πℚ) over the integers. It is additive in lengths and in angles, and angles that are rational multiples of π count as zero.

**Problem.** A cube and a regular tetrahedron of equal volume cannot be cut into finitely many polyhedral pieces and reassembled into each other.

**How the definition helps.** Cutting and regluing leaves the sum unchanged by additivity, because new edges have angles totalling π or 2π (our own). The cube's right angles give zero (our own). Niven’s theorem puts the tetrahedron's angle arccos(1/3) outside πℚ, and its six equal tensors are nonzero since both factors are rational vector spaces (our own).

**Wikipedia:** [Dehn invariant](https://en.wikipedia.org/wiki/Dehn_invariant). It says: “in either case this rational multiple of π does not contribute to the Dehn invariant.”

**Sources:**

- [M. Dehn, Ueber den Rauminhalt, Mathematische Annalen 55 (1901) 465–478](https://doi.org/10.1007/BF01448001)
- [B. Jessen, The algebra of polyhedra and the Dehn–Sydler theorem, Mathematica Scandinavica 22 (1968) 241](https://doi.org/10.7146/math.scand.a-10888)

### Defining polyhedra as spheres with disk faces saves Euler's formula

**Remember:** Euler's formula counts spheres built from polygons, not every flat-faced solid.

*Rules out counterexamples.* MSC 52B70 (Polyhedral manifolds), 52B05. arXiv math.MG, math.GT. Level 2: later undergraduate.

**Definition.** Here a polyhedron has a finite polygonal surface homeomorphic to a sphere, and its vertices, edges and disk faces form a cell decomposition.

**Problem.** Every such polyhedron satisfies V − E + F = 2. Here V, E and F count its vertices, edges and faces.

**How the definition helps.** Cauchy’s proof applies to this decomposition of a sphere (our own). A toroidal polyhedron has Euler characteristic zero, and the sphere condition excludes it (our own).

**Wikipedia:** [Proofs and Refutations](https://en.wikipedia.org/wiki/Proofs_and_Refutations), [Imre Lakatos](https://en.wikipedia.org/wiki/Imre_Lakatos), [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “Lakatos termed the polyhedral counterexamples to Euler's formula monsters and distinguished three ways of handling these objects: Firstly, monster-barring, by which means the theorem in question could not be applied to such objects.”

**Sources:**

- [I. Lakatos, Proofs and Refutations: The Logic of Mathematical Discovery, Cambridge University Press (1976)](https://doi.org/10.1017/cbo9781139171472)

### Closed bodies keep Minkowski’s lattice point at equality

**Remember:** At the volume threshold, the lattice point may sit on the boundary.

*Rules out counterexamples.* MSC 52C07 (Lattices and convex bodies in n dimensions (aspects of discrete geometry)), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A convex body is a compact convex set with nonempty interior. Being closed, it contains its boundary, where a limiting lattice point can sit (our own).

**Problem.** A convex body symmetric about zero contains a nonzero lattice point when its volume equals 2ᵈ times the volume of a lattice cell.

**How the definition helps.** Enlarge the body by factors 1 + 1/n and apply the strict volume theorem to each copy (our own). Boundedness leaves finitely many candidate lattice points, so one nonzero point lies in every copy and hence, by closedness, in the body (our own). The open cube (−1, 1)ᵈ attains the threshold but contains no nonzero integer point (our own).

**Paper or page:** [Theorem 5.1. (Minkowski)](https://venhance.github.io/napkin/Napkin.pdf). It says: “The volume of S equals 2ⁿ d and S is compact”

**Sources:** none listed. No primary source with a working link was found.

### Half-open parallelepipeds make lattice translates tile space without overlaps

**Remember:** Each coordinate splits into an integer and a remainder in \[0,1).

*True by definition. Confidence: medium.* MSC 52C07 (Lattices and convex bodies in n dimensions (aspects of discrete geometry)), 11H06. arXiv math.MG, math.NT. Level 2: later undergraduate.

**Definition.** For a lattice basis b₁, …, bₙ of ℝⁿ, the half-open parallelepiped is the set of points c₁b₁+⋯+cₙbₙ with each cᵢ in \[0, 1). Leaving out 1 stops neighbouring copies from sharing boundary faces.

**Problem.** The translates of the half-open parallelepiped by the lattice vectors are disjoint and cover ℝⁿ.

**How the definition helps.** In basis coordinates, each coordinate of a point splits uniquely into its floor and a remainder in \[0, 1) (our own). The floors pick the lattice translate and the remainders pick the point in it, which proves both cover and disjointness.

**Wikipedia:** [Lattice (group)](https://en.wikipedia.org/wiki/Lattice_%28group%29). It says: “A lattice fills the whole of ℝⁿ with equal tiles, copies of the n-dimensional parallelepiped spanned by the basis vectors”

**Sources:** none listed. No primary source with a working link was found.

### Origin symmetry turns lattice differences into points of the body

**Remember:** A symmetric convex body contains the differences of its half-size copy.

*Rules out counterexamples.* MSC 52C07 (Lattices and convex bodies in n dimensions (aspects of discrete geometry)), 52A20. arXiv math.MG. Level 2: later undergraduate.

**Definition.** An origin-symmetric convex body is a compact convex set with nonempty interior that contains −x whenever it contains x. Symmetry and convexity put u − v in the body whenever u and v lie in the half-size body (our own).

**Problem.** An origin-symmetric convex body in ℝᵈ contains a nonzero lattice point if its volume exceeds 2ᵈ times that of a basis parallelepiped of the lattice. Here the lattice is all integer combinations of a basis of ℝᵈ.

**How the definition helps.** The half-size body has volume above one lattice cell, so Blichfeldt’s theorem gives two points in it differing by a nonzero lattice vector (our own). That difference lies in the body (our own). Without symmetry, the rectangle \[0.1, 0.9\] × \[−3, 3\] has area above four but misses every integer point (our own).

**Paper or page:** [Theorem 5.1. (Minkowski)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Let S ⊆ ℝⁿ be a convex set containing 0 which is centrally symmetric (meaning that x ∈ S ⇔ −x ∈ S).”

**Sources:** none listed. No primary source with a working link was found.

### Hole-free triangulations have tree duals

**Remember:** Every diagonal cuts the polygon in two, so no cycles.

*Rules out counterexamples.* MSC 52C20 (Tilings in 2 dimensions (aspects of discrete geometry)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Triangulate a simple polygon, one bounded by a single closed chain with no crossings, without adding vertices. Every interior edge is then a diagonal that cuts the polygon into two pieces (our own). The dual graph joins two triangles when they share an interior edge.

**Problem.** The adjacency graph of triangles in any such triangulation is a tree.

**How the definition helps.** The graph is connected, and removing any edge splits it along a diagonal, so it is a tree (our own proof). Between two concentric aligned squares, triangulating the four trapezoids gives a cycle. Joining an interior point of a triangle to its corners also gives a cycle.

**Wikipedia:** [Art gallery problem](https://en.wikipedia.org/wiki/Art_gallery_problem). It says: “the weak dual graph to the triangulation (the undirected graph having one vertex per triangle and one edge per pair of adjacent triangles) is a tree”

**Sources:** none listed. No primary source with a working link was found.

### Power diagrams are Voronoi slices

**Remember:** One added height turns each weight into a squared distance.

*True by definition.* MSC 52C22 (Tilings in n dimensions (aspects of discrete geometry)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** The power diagram of weighted sites gives each point x the sites p that minimize ‖x−p‖² − wₚ, a squared distance minus a weight. Lifting each p to height √(K − wₚ), with K at least every weight, turns this into an ordinary squared distance minus K (our own).

**Problem.** Every power diagram of finitely many Euclidean sites is a flat slice of an ordinary Voronoi diagram in one higher dimension.

**How the definition helps.** At height zero, the squared distance to the lifted site is ‖x−p‖² + K − wₚ (our own). The common constant K keeps every minimizer, including ties, so the power diagram is the height-zero slice of the lifted Voronoi diagram.

**Wikipedia:** [Power diagram](https://en.wikipedia.org/wiki/Power_diagram). It says: “interpreted as a planar cross-section of an unweighted three-dimensional Voronoi diagram”

**Sources:**

- [F. Aurenhammer, Power Diagrams: Properties, Algorithms and Applications (1987)](https://doi.org/10.1137/0216006)

### Power weights preserve flat boundaries

**Remember:** Power is a squared distance minus a weight, so ‖x‖² cancels.

*True by definition.* MSC 52C22 (Tilings in n dimensions (aspects of discrete geometry)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Give each of finitely many distinct Euclidean sites p a real weight w. Its power cell holds the points x where ‖x−p‖² − w is smallest among the sites, and all these values share the term ‖x‖².

**Problem.** Each power cell for finitely many sites is a convex polyhedron, possibly empty or unbounded.

**How the definition helps.** Expanding the squares cancels ‖x‖², so each pairwise comparison is a linear inequality in x (our own). It gives a closed half-space because the sites are distinct, and finitely many half-spaces meet in a convex polyhedron.

**Wikipedia:** [Power diagram](https://en.wikipedia.org/wiki/Power_diagram). It says: “the intersection of the halfspaces bounded by the radical axes”

**Sources:**

- [F. Aurenhammer, Power Diagrams: Properties, Algorithms and Applications (1987)](https://doi.org/10.1137/0216006)

### Voronoi cells as half-space intersections are convex polyhedra by definition

**Remember:** Each other site contributes one linear inequality.

*True by definition.* MSC 52C22 (Tilings in n dimensions (aspects of discrete geometry)), 52B11. arXiv math.MG, cs.CG. Level 2: later undergraduate.

**Definition.** The Voronoi cell of a site p, among finitely many distinct Euclidean sites, is an intersection of closed half-spaces. Each other site q gives the half-space on p's side of the perpendicular bisector of p and q.

**Problem.** Each Voronoi cell of a finite set of distinct sites is a convex polyhedron. The cell may be unbounded.

**How the definition helps.** Each half-space is cut out by one linear inequality, so their finite intersection is a convex polyhedron by definition. The only check is that \|x − p\|² ≤ \|x − q\|² is linear in x, because the \|x\|² terms cancel (our own step).

**Wikipedia:** [Voronoi diagram](https://en.wikipedia.org/wiki/Voronoi_diagram). It says: “For one other site pⱼ, the points that are closer to pₖ than to pⱼ, or equally distant, form a closed half-space”

**Sources:** none listed. No primary source with a working link was found.

### Closed disks prevent Gabriel crossings

**Remember:** Count points on the rim to stop crossings.

*Rules out counterexamples.* MSC 52C45 (Combinatorial complexity of geometric structures). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** The closed-disk Gabriel graph joins two sites if the closed disk with their segment as diameter contains no other site, even on its rim. By Thales, a site lies in that closed disk exactly when it sees the segment at an angle of at least 90° (our own).

**Problem.** For any finite set of distinct plane sites, the closed-disk Gabriel graph has no crossing edges.

**How the definition helps.** Crossing edges span a convex quadrilateral with some angle ≥ 90°, whose vertex lies in the closed disk on the opposite diagonal (our own). That blocks the diagonal. The open-disk rule would admit both diagonals of a square, whose angles are exactly 90°.

**Wikipedia:** [Gabriel graph](https://en.wikipedia.org/wiki/Gabriel_graph). It says: “The Gabriel graph is a subgraph of the Delaunay triangulation.”

**Sources:**

- [K. R. Gabriel and R. R. Sokal, A New Statistical Approach to Geographic Variation Analysis (1969)](https://doi.org/10.2307/2412323)

### Neighborhood graphs contain minimum trees

**Remember:** A third site closer to both ends gives a cheaper link.

*Rules out counterexamples.* MSC 52C45 (Combinatorial complexity of geometric structures). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** The relative neighborhood graph joins two sites unless some third site is strictly closer to both of them than they are to each other.

**Problem.** For finitely many distinct plane sites, every spanning tree of least total length lies in the relative neighborhood graph.

**How the definition helps.** A third site strictly closer to both ends of a minimum-tree edge would let a cheaper link replace that edge (our own). Deleting the edge splits the tree in two, and the third site links to the endpoint in the other part. Rejecting ties instead would delete every edge of an equilateral triangle.

**Wikipedia:** [Relative neighborhood graph](https://en.wikipedia.org/wiki/Relative_neighborhood_graph). It says: “the Euclidean minimum spanning tree is a subgraph of it”

**Sources:**

- [G. T. Toussaint, The relative neighbourhood graph of a finite planar set (1980)](https://doi.org/10.1016/0031-3203(80)90066-7)

### Anti-exchange gives unique generators

**Remember:** If two outside points cannot trade places, the smallest generator is unique.

*Rules out counterexamples.* MSC 52A01 (Axiomatic and generalized convexity). arXiv math.CO. Level 3: graduate.

**Definition.** A convex geometry is a closure operator cl on a finite set, enlarging, inclusion-preserving and idempotent, with cl(∅) = ∅. It has anti-exchange: for distinct x, y outside a closed set C, y ∈ cl(C ∪ {x}) implies x ∉ cl(C ∪ {y}).

**Problem.** In a finite convex geometry, each closed set has a unique inclusion-minimal generator. Its closure is the given set, and no proper subset has that closure.

**How the definition helps.** For minimal generators A≠B of a closed set and x ∈ A∖B, add elements of B to A∖{x} until x enters the closure (our own). Just before the last added y, the closure C misses x and y, yet y ∈ cl(C ∪ {x}) because C ∪ {x} contains A. Anti-exchange forbids x ∈ cl(C ∪ {y}), a contradiction.

**Paper or page:** [Cospanning characterizations of antimatroids and convex geometries](https://arxiv.org/abs/2107.08556v1). It says: “is uniquely generated if and only if the operator φ satisfies the anti-exchange property.”

**Sources:**

- [Cospanning characterizations of antimatroids and convex geometries, Theorem 2.8](https://arxiv.org/abs/2107.08556v1)

### Nondegenerate equilibria satisfy Euler’s formula

**Remember:** Nondegenerate means no flat direction at any equilibrium.

*Rules out counterexamples.* MSC 52A15 (Convex sets in 3 dimensions (including convex surfaces)). arXiv math.MG. Level 3: graduate.

**Definition.** Equilibria of a smooth convex body about an interior point c are the critical points on the boundary of the squared distance from c. One is nondegenerate if its second-derivative matrix in local surface coordinates has no zero eigenvalue, making it an isolated minimum (stable), maximum (unstable) or saddle.

**Problem.** For a smooth convex body in three dimensions with only nondegenerate equilibria, stable plus unstable equilibria minus saddles equals two.

**How the definition helps.** Morse theory counts nondegenerate critical points with signs, plus for minima and maxima, minus for saddles (our own account), and the total is the sphere's Euler characteristic, two. Without nondegeneracy, every point of a round sphere is an equilibrium relative to its center (our own counterexample).

**Paper or page:** [Centroids and equilibrium points of convex bodies](https://arxiv.org/abs/2407.19177v2). It says: “S−H+U=2.”

**Sources:**

- [Centroids and equilibrium points of convex bodies (Theorem 3.4)](https://arxiv.org/abs/2407.19177v2)

### Recession directions guard closed sums

**Remember:** Summands escape to infinity only along opposite recession directions.

*Rules out counterexamples.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)), 49J53. arXiv math.OC. Level 3: graduate.

**Definition.** A recession direction d of a set keeps x + td in the set for every member x and every t ≥ 0. For a nonempty closed convex set, one such ray is enough.

**Problem.** Two nonempty closed convex sets in Euclidean space have a closed sum if they have no opposite nonzero recession directions.

**How the definition helps.** If sums aₖ+bₖ converge with aₖ unbounded, rescaling by ‖aₖ‖ along a subsequence gives opposite unit recession directions, by convexity and closedness (our own). So the hypothesis keeps the summands bounded, and a convergent subsequence realizes the limit in the sum. Without it, the horizontal axis plus the region y ≥ exp(x) gives the open upper half-plane (our own).

**Wikipedia:** [Recession cone](https://en.wikipedia.org/wiki/Recession_cone). It says: “Let nonempty closed convex sets A,B ⊂ ℝᵈ such that for any y ∈ recc(A) ∖ {0} then −y ∉ recc(B), then A + B is closed.”

**Sources:** none listed. No primary source with a working link was found.

### Support functions turn set addition into ordinary addition

**Remember:** Add sets by adding their support values in each direction.

*True by definition.* MSC 52A20 (Convex sets in n dimensions (including convex hypersurfaces)), 52A41. arXiv math.MG. Level 3: graduate.

**Definition.** For nonempty A ⊆ ℝⁿ, the support function h(A,x) is the supremum of ⟨x,a⟩ over a in A, its farthest reach in direction x. A supremum over sums a + b splits into two suprema, so support functions add over Minkowski sums A + B.

**Problem.** For nonempty A and B, h(A + B, x) equals h(A, x) + h(B, x). If A and B are also closed and convex, then A + C = B + C implies A = B for nonempty bounded C.

**How the definition helps.** Bounded C has finite support values, which cancel direction by direction, so A and B get equal support functions (our own proof). The separation theorem then recovers each closed convex set from its support function.

**Wikipedia:** [Support function](https://en.wikipedia.org/wiki/Support_function). It says: “Furthermore, the support function, as a function of the set A, is compatible with many natural geometric operations, like scaling, translation, rotation and Minkowski addition.”

**Sources:** none listed. No primary source with a working link was found.

### Support functions give Blaschke selection

**Remember:** Hausdorff distance is the largest gap between support functions.

*Makes the theorem clean to state or prove.* MSC 52A27 (Approximation by convex sets). arXiv math.MG. Level 3: graduate.

**Definition.** The support function of a nonempty compact convex set gives its largest dot product with each unit direction. Hausdorff distance, the least radius for which each set lies within that distance of the other, equals the largest gap between the two support functions.

**Problem.** Within a fixed Euclidean ball, every sequence of nonempty compact convex sets has a subsequence converging in Hausdorff distance. Its limit is again nonempty, compact and convex.

**How the definition helps.** Inside an origin-centred ball of radius R, support functions are bounded by R and R-Lipschitz on the unit sphere, so Arzelà–Ascoli applies (our own). A subsequence converges uniformly, and its sublinear limit is the support function of a nonempty compact convex set. The distance identity turns uniform convergence into Hausdorff convergence.

**Wikipedia:** [Support function](https://en.wikipedia.org/wiki/Support_function). It says: “The mapping τ is an isometry between this cone, endowed with the Hausdorff metric, and a subcone of the family of continuous functions on Sⁿ⁻¹ with the uniform norm.”

**Sources:** none listed. No primary source with a working link was found.

### Separation rules out flat transversals

**Remember:** A flat meeting every hull makes the hulls of two groups meet.

*Makes the theorem clean to state or prove.* MSC 52A35 (Helly-type theorems and geometric transversal theory). arXiv cs.CG, math.MG. Level 3: graduate.

**Definition.** Call k nonempty compact sets in ℝᵈ well-separated if, for every split into two nonempty groups, a hyperplane puts the groups on opposite open sides. For compact sets this means the convex hulls of the two groups never meet (our own).

**Problem.** For 2≤k≤d+1, k nonempty compact sets in ℝᵈ are well-separated exactly when no affine subspace of dimension k−2 meets all their convex hulls.

**How the definition helps.** A (k−2)-dimensional subspace through one point per hull makes them affinely dependent, so splitting by sign makes two group hulls meet (our own). Conversely, meeting group hulls give an affine dependence among one point per hull, choosing any point for an unused set. These k dependent points lie in an affine subspace of dimension k−2.

**Paper or page:** [Well-Separation and Hyperplane Transversals in High Dimensions](https://arxiv.org/abs/2209.02319v1). It says: “are well-separated if and only if their convex hulls have no (k − 2)-transversal.”

**Sources:**

- [Well-Separation and Hyperplane Transversals in High Dimensions, Lemma 2.1](https://arxiv.org/abs/2209.02319v1)

### Polynomial coefficients make mixed volume linear under Minkowski addition

**Remember:** Mixed volume is the coefficient that uses each body's weight once.

*True by definition.* MSC 52A39 (Mixed volumes and related topics in convex geometry). arXiv math.MG. Level 3: graduate.

**Definition.** For convex bodies K₁, …, Kₙ in ℝⁿ, the volume of t₁K₁ + ⋯ + tₙKₙ is a polynomial in the nonnegative weights. Their mixed volume is the coefficient of t₁⋯tₙ divided by n!, the part using each weight once.

**Problem.** Mixed volume is symmetric and additive under Minkowski addition in each argument. Scaling any one argument by a positive factor scales the mixed volume by the same factor.

**How the definition helps.** Both rules become coefficient checks in the volume polynomial (our own proof). For a first argument αA + βB, give A and B their own weights and substitute αt₁ and βt₁. The coefficient then collects α and β times the two mixed volumes, and renaming weights gives symmetry.

**Wikipedia:** [Mixed volume](https://en.wikipedia.org/wiki/Mixed_volume). It says: “One can show that f is a homogeneous polynomial of degree n, so can be written as”

**Sources:** none listed. No primary source with a working link was found.

### Polytope projection bodies are zonotopes

**Remember:** Each facet contributes the support function of one segment.

*True by definition.* MSC 52A39 (Mixed volumes and related topics in convex geometry). arXiv math.MG. Level 3: graduate.

**Definition.** The projection body of a convex body in ℝᵈ is determined by its support values, its largest dot products with unit vectors. In each unit direction u, its support value is the (d−1)-volume of the body's shadow on the hyperplane perpendicular to u. For a polytope, Cauchy’s formula makes that volume half the sum over facets of area times \|u·v\|, with v the facet's unit normal (our own).

**Problem.** For a full-dimensional convex polytope, the projection body is a zonotope, a Minkowski sum of finitely many segments.

**How the definition helps.** Each term a\|u · v\|/2 is the support function of the segment from −av/2 to av/2 (our own). Support functions add under Minkowski sums and determine compact convex sets, so the projection body is the sum of these segments.

**Wikipedia:** [Projection body](https://en.wikipedia.org/wiki/Projection_body). It says: “the support function of ΠK in the direction u is the (n – 1)-dimensional volume of the projection of K”

**Sources:**

- [J. Bourgain and J. Lindenstrauss, Projection bodies (1988)](https://doi.org/10.1007/BFb0081746)

### Steiner coefficients give quermassintegrals their scaling law and rigid-motion invariance

**Remember:** The volume of a thickened body determines every coefficient.

*True by definition.* MSC 52A39 (Mixed volumes and related topics in convex geometry), 52A22. arXiv math.MG. Level 3: graduate.

**Definition.** For a convex body K in ℝⁿ, Steiner’s formula expresses the volume within distance t ≥ 0 of K as a polynomial in t. For 0 ≤ j ≤ n, the quermassintegral Wⱼ(K) is the coefficient of tʲ divided by the binomial coefficient n choose j.

**Problem.** Rigid motions leave each Wⱼ unchanged. Scaling the body by s &gt; 0 multiplies Wⱼ by sⁿ⁻ʲ.

**How the definition helps.** The coefficients depend only on thickened volumes, which rigid motions preserve (our own). The t-thickening of sK is s times the (t/s)-thickening of K, so its volume is sⁿ times a polynomial in t/s. So the coefficient of tʲ gains the factor sⁿ⁻ʲ.

**Wikipedia:** [Hadwiger's theorem](https://en.wikipedia.org/wiki/Hadwiger%27s_theorem). It says: “The quermassintegrals Wⱼ : 𝕂ⁿ → ℝ are defined via Steiner's formula”

**Sources:** none listed. No primary source with a working link was found.

### John’s contacts bound symmetric bodies

**Remember:** Weighted contact directions measure every squared length.

*True by definition.* MSC 52A40 (Inequalities and extremum problems involving convexity in convex geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A convex body symmetric about zero is in John’s position if its largest inscribed ellipsoid is the unit ball. Equivalently, it contains the unit ball, and some unit contact vectors uᵢ on both boundaries with positive weights cᵢ satisfy ∑ cᵢ uᵢuᵢᵀ = I. Thus ‖x‖² = ∑ cᵢ (x · uᵢ)² for every x.

**Problem.** In dimension n, a convex body symmetric about zero and in John’s position lies inside the concentric ball of radius √n.

**How the definition helps.** For x in the body, the supporting hyperplanes at ±uᵢ give \|x · uᵢ\| ≤ 1, so ‖x‖² ≤ ∑ cᵢ (our own proof). The trace of the identity gives ∑ cᵢ = n. The work is John’s theorem, which turns maximal volume into this decomposition.

**Wikipedia:** [John ellipsoid](https://en.wikipedia.org/wiki/John_ellipsoid). It says: “x = ∑ᵐᵢ₌₁ cᵢ (x · uᵢ) uᵢ.”

**Sources:**

- [Fritz John, Extremum Problems with Inequalities as Subsidiary Conditions (1948, reprinted)](https://doi.org/10.1007/978-1-4612-5412-6_25)

### Surface area as an outer volume derivative gives the isoperimetric inequality

**Remember:** The change in volume under thickening measures surface area.

*True by definition.* MSC 52A40 (Inequalities and extremum problems involving convexity in convex geometry), 52A38. arXiv math.MG. Level 3: graduate.

**Definition.** For a convex body K, let V(t) be the volume of the points within distance t of K. Its surface area is the right derivative V′(0), the rate at which volume grows as the body thickens.

**Problem.** Among compact convex sets with interior and a given volume in ℝⁿ, a ball has the least surface area.

**How the definition helps.** Brunn–Minkowski gives V(t)¹⁄ⁿ ≥ V(0)¹⁄ⁿ + t·vol(B)¹⁄ⁿ for the unit ball B, with equality at t = 0 (our own). Differentiating at zero bounds V′(0) below by a quantity that depends only on V(0), and balls attain it. The Minkowski–Steiner formula identifies V′(0) with boundary area.

**Wikipedia:** [Brunn–Minkowski theorem](https://en.wikipedia.org/wiki/Brunn%E2%80%93Minkowski_theorem). It says: “This agrees with the usual meaning of surface area by the Minkowski-Steiner formula.”

**Sources:**

- [Hermann Minkowski, Volumen und Oberfläche, Mathematische Annalen 57 (1903)](https://doi.org/10.1007/BF01445180)

### A function is μ-strongly convex exactly when its conjugate has 1/μ-Lipschitz gradient

**Remember:** A stronger bend gives a slower change in the conjugate gradient.

*True by definition. Confidence: medium.* MSC 52A41 (Convex functions and convex programs in convex geometry), 90C25, 90C46. arXiv math.OC. Level 3: graduate.

**Definition.** For μ &gt; 0, a function f on Euclidean space is μ-strongly convex if f(x) − μ‖x‖²/2 is convex. Then its subgradients are strongly monotone: ⟨g−h, x−y⟩ ≥ μ‖x−y‖² for g at x and h at y (our own). Its Fenchel conjugate is f⋆(s) = supₓ(⟨s, x⟩ − f(x)).

**Problem.** Let f be proper, closed and convex on Euclidean space. Then f is μ-strongly convex exactly when f⋆ is differentiable with a 1/μ-Lipschitz gradient.

**How the definition helps.** The subgradient map of f⋆ inverts that of f, so strong monotonicity makes it single-valued and 1/μ-Lipschitz (our own). Strong convexity and closedness give a unique maximizer for every slope, so f⋆ is differentiable everywhere. Conversely, the Baillon–Haddad theorem for f⋆ gives strong monotonicity of the inverse map, hence strong convexity of f by biconjugacy (our own).

**Paper or page:** [On the Fenchel Duality between Strong Convexity and Lipschitz Continuous Gradient](https://arxiv.org/abs/1803.06573v1). It says: “If f is closed and strong convex with parameter μ, then f⋆ has a Lipschitz continuous gradient with parameter 1/μ.”

**Sources:**

- [Xingyu Zhou, On the Fenchel Duality between Strong Convexity and Lipschitz Continuous Gradient, arXiv:1803.06573v1 (2018)](https://arxiv.org/abs/1803.06573v1)

### Strict epigraph sums turn infimal convolution into conjugate addition

**Remember:** Add the strict epigraphs, and their support values add too.

*True by definition. Confidence: medium.* MSC 52A41 (Convex functions and convex programs in convex geometry), 49N15. arXiv math.OC. Level 3: graduate.

**Definition.** For functions f and g on ℝⁿ, never −∞ and each finite somewhere, the infimal convolution is h(x) = infᵧ(f(x − y) + g(y)). Assume h is never −∞. Its strict epigraph, the pairs (x, t) with t &gt; h(x), is the Minkowski sum of the strict epigraphs of f and g.

**Problem.** The conjugate of the infimal convolution is the sum of the two conjugates. Convexity is not required.

**How the definition helps.** The conjugate at p is the supremum of ⟨p, x⟩ − t over the strict epigraph, a support value (our own). Support values add over Minkowski sums, so the conjugate of h is the sum of the two conjugates.

**Wikipedia:** [Convex conjugate](https://en.wikipedia.org/wiki/Convex_conjugate). It says: “The (strict) epigraph of the infimal convolution of two functions is the Minkowski sum of the (strict) epigraphs of those functions.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970)](https://doi.org/10.1515/9781400873173)

### The supremum formula makes the convex conjugate convex and closed

**Remember:** A supremum of continuous affine functions is convex and closed.

*True by definition.* MSC 52A41 (Convex functions and convex programs in convex geometry), 26B25, 49N15. arXiv math.OC, math.FA. Level 3: graduate.

**Definition.** The convex conjugate f⁎(p) is the supremum of ⟨p,x⟩ − f(x) over all x where f is finite. Here f on ℝⁿ is finite somewhere and never −∞. So f⁎ is a supremum of affine functions of p, one for each such x.

**Problem.** The conjugate is convex, and its epigraph, the set of points on or above its graph, is closed. This holds even when f itself is not convex.

**How the definition helps.** The epigraph of a supremum of affine functions is the intersection of their closed upper half-spaces. An intersection of closed convex sets is closed and convex, whatever f is.

**Wikipedia:** [Convex conjugate](https://en.wikipedia.org/wiki/Convex_conjugate). It says: “The convex conjugate of a function is always lower semi-continuous.”

**Sources:** none listed. No primary source with a working link was found.

### Connected sections exclude pinches

**Remember:** Every interval stays connected, so flags change one face at a time.

*Rules out counterexamples.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)). arXiv math.CO. Level 3: graduate.

**Definition.** An abstract polytope is a partially ordered set with a least and a greatest face whose maximal chains all have the same finite length. Each interval two ranks apart holds exactly two middle faces. In each longer interval, any two middle faces are linked by a sequence of middle faces, each comparable to the next.

**Problem.** In an abstract polytope, any two flags, maximal chains of faces, can be joined by single-face changes that keep their common faces fixed.

**How the definition helps.** Connectivity of each interval lets a flag change one face at a time while its bounding faces stay fixed (our own proof). Induction then connects flags through each fixed face, working separately above and below it. Two pyramids meeting only at their apex fail, because the faces strictly between the apex and the top split by pyramid.

**nLab:** [abstract polytope](https://ncatlab.org/nlab/show/abstract+polytope). It says: “The next definition disallows constructions such as two pyramids kissing on a single vertex:”

**Sources:** none listed. No primary source with a working link was found.

### Setting f₋₁ = 1 for the empty face makes Dehn–Sommerville a symmetry

**Remember:** Count the empty face, and Euler's relations fold into a mirror.

*Makes the theorem clean to state or prove.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 52B11. arXiv math.CO, math.MG. Level 3: graduate.

**Definition.** The h-vector of a d-dimensional simplicial polytope repackages its face numbers fⱼ, counting the empty face as f₋₁ = 1: ∑ᵢ₌₀ᵈ hᵢ t<sup>(d−i)</sup> = ∑ᵢ₌₀ᵈ f\_(i−1)(t−1)<sup>(d−i)</sup>. Counting the empty face lets Euler's relation join the other linear face relations as one family.

**Problem.** The h-vector of a d-dimensional simplicial polytope satisfies hₖ = h\_(d−k) for every integer k from 0 to d.

**How the definition helps.** In h-coordinates, the linear relations among face numbers, Euler's relation included, become exactly hₖ = h\_(d−k). Without the empty face, Euler's relation needs a separate constant term. The proof applies Euler's relation to the link of every face (our own remark).

**Wikipedia:** [Dehn–Sommerville equations](https://en.wikipedia.org/wiki/Dehn%E2%80%93Sommerville_equations). It says: “When k = −1, it expresses the fact that Euler characteristic of a (d − 1)-dimensional simplicial sphere is equal to 1 + (−1)ᵈ⁻¹.”

**Sources:**

- [D. M. Y. Sommerville, The relations connecting the angle-sums and volume of a polytope in space of n dimensions, Proceedings of the Royal Society A 115 (1927) 103–119](https://doi.org/10.1098/rspa.1927.0078)

### Polars as hulls of facet normals turn facets into vertices

**Remember:** Each facet plane becomes one corner of the polar.

*True by definition. Confidence: medium.* MSC 52B11 (n-dimensional polytopes), 52A20. arXiv math.MG. Level 3: graduate.

**Definition.** Let P be a full-dimensional polytope with 0 in its interior. Then each facet lies on a unique plane a · x = 1, with P on the side a · x ≤ 1. The polar of P is the convex hull of these facet vectors a, one for each facet.

**Problem.** The facets of P correspond one to one with the vertices of its polar.

**How the definition helps.** Each facet vector is a vertex of the polar because its facet inequality is not implied by the others (our own). The separating hyperplane theorem shows that this hull is the set of all y with y · x ≤ 1 on P (our own).

**Wikipedia:** [Dual polyhedron](https://en.wikipedia.org/wiki/Dual_polyhedron). It says: “The vertices of one polytope correspond to the (n−1)-dimensional elements, or facets, of the other”

**Sources:** none listed. No primary source with a working link was found.

### Polytope sums refine normal fans

**Remember:** Maximize on the sum by maximizing on each summand.

*Makes the theorem clean to state or prove.* MSC 52B11 (n-dimensional polytopes). arXiv cs.CG, math.MG. Level 3: graduate.

**Definition.** The normal cone of a face F of a polytope is the set of directions whose dot product is maximized on all of F, and these cones form the normal fan. In each direction, the top face of a Minkowski sum P + Q is the sum of the top faces of P and Q (our own).

**Problem.** The normal fan of a Minkowski sum is the common refinement of the two normal fans. Its cones are intersections of cones from the two fans.

**How the definition helps.** A direction is maximized on a face F + G of the sum exactly when it is maximized on F and on G (our own). So the cones of the sum are intersections of cones from the two fans. The face correspondence for polytopes matches all these intersections with cones of the normal fan of the sum.

**Wikipedia:** [Normal fan](https://en.wikipedia.org/wiki/Normal_fan). It says: “the set of linear functionals w such that the set of points x in P that maximize w(x) contains F”

**Sources:** none listed. No primary source with a working link was found.

### Zonotopes as cube images make every face a zonotope

**Remember:** A face of a cube's image is a cube face's image.

*True by definition.* MSC 52B12 (Special polytopes (linear programming, centrally symmetric, etc.)). arXiv math.MG, math.CO. Level 3: graduate.

**Definition.** A zonotope is the image of a cube \[0, 1\]ⁿ under an affine map A. Each face of the zonotope, where a linear function ℓ is largest, is the image of the cube face where ℓ ∘ A is largest. Faces of a cube are cubes.

**Problem.** Every nonempty face of a zonotope is a zonotope. In particular, each facet, a face of one lower dimension, is a zonotope.

**How the definition helps.** Pull a linear function ℓ on the zonotope back to ℓ ∘ A on the cube (our own). Its maximizers on the cube form a face, which is a lower-dimensional cube. The map A sends that cube onto the maximizers of ℓ on the zonotope, so the face is a zonotope.

**Wikipedia:** [Zonotope](https://en.wikipedia.org/wiki/Zonotope). It says: “The facets of any zonotope are themselves zonotopes of one lower dimension.”

**Sources:** none listed. No primary source with a working link was found.

### Counting lattice points at dilation zero makes the Ehrhart constant 1

**Remember:** Shrinking a polytope to the origin leaves one lattice point.

*True by definition. Confidence: medium.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)), 05A15. arXiv math.CO, math.MG. Level 3: graduate.

**Definition.** For a lattice polytope P, one whose vertices have integer coordinates, L(P, t) counts the integer points in the dilation tP for each integer t ≥ 0. At t = 0 the dilation of a nonempty P is the single point 0, so L(P, 0) = 1.

**Problem.** The Ehrhart polynomial of a nonempty lattice polytope has constant term 1.

**How the definition helps.** Ehrhart's theorem says that L(P, t) agrees with a polynomial for every integer t ≥ 0, including t = 0 (our own). Evaluating that polynomial at 0 gives its constant term, so the constant term is L(P, 0) = 1.

**Wikipedia:** [Ehrhart polynomial](https://en.wikipedia.org/wiki/Ehrhart_polynomial). It says: “When P is a closed convex polytope, L₀(P)=1.”

**Sources:** none listed. No primary source with a working link was found.

### Half-open pieces count Ehrhart coefficients

**Remember:** Each missing facet delays a piece's lattice count by one.

*True by definition.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 3: graduate.

**Definition.** Cut a d-dimensional lattice polytope into unimodular simplices, whose edge vectors from one vertex form a lattice basis. Fix an interior point q off every facet plane, and remove from each simplex the facets whose planes separate it from q. These half-open pieces partition the polytope, and a piece missing i facets has lattice-count series zⁱ/(1 − z)<sup>(d+1)</sup> (our own).

**Problem.** The coefficient h\*ᵢ of the Ehrhart h\*-polynomial of the polytope equals the number of half-open pieces with i removed facets.

**How the definition helps.** Adding the series of the pieces gives the Ehrhart series, so its numerator ∑ h\*ᵢ zⁱ counts pieces by removed facets. In a unimodular simplex, the points of the t-th dilation are nonnegative integer vertex weights summing to t (our own). Removing a facet forces the weight of its opposite vertex to be at least one, which multiplies the series by z.

**Paper or page:** [Ehrhart theory of cosmological polytopes](https://arxiv.org/abs/2412.01602v2). It says: “h⁎ᵢ(P) = \|{j ∈ \[m\] : \|vis<sub>q</sub>(Δⱼ)\| = i}\|”

**Sources:**

- [Ehrhart theory of cosmological polytopes, Theorem 2.1](https://arxiv.org/abs/2412.01602v2)

### Reflexive polytopes have palindromic numerators

**Remember:** Integer facet normals make the interior one dilation smaller.

*Rules out counterexamples.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 3: graduate.

**Definition.** A full-dimensional rational polytope P in ℝᵈ with 0 inside is rational reflexive if its facet inequalities a · x ≤ 1 have integer vectors a, the vertices of its polar. Then a lattice point lies strictly inside mP exactly when it lies in (m − 1)P (our own). The Ehrhart numerator is the lattice-count series times (1 − z<sup>q</sup>)<sup>(d+1)</sup>, with q the least positive integer making qP integral.

**Problem.** The Ehrhart numerator of a rational reflexive polytope is palindromic. Its coefficients read the same in either direction.

**How the definition helps.** Ehrhart reciprocity relates the series of interior counts to the original series with z replaced by 1/z. The shift from mP to (m − 1)P then makes the numerator's coefficients read the same both ways (our own proof). The interval \[−1, 2\] has the non-integral polar vertex 1/2 and numerator 1 + 2z (our own counterexample).

**Paper or page:** [Boundary h\*-polynomials of rational polytopes](https://arxiv.org/abs/2206.04175v3). It says: “If P is a rational reflexive polytope, then h\*ₚ(z) is palindromic.”

**Sources:**

- [Esme Bajo and Matthias Beck, Boundary h\*-polynomials of rational polytopes (Theorem 5.1)](https://arxiv.org/abs/2206.04175v3)

### Support functions make Newton polytopes of products add as Minkowski sums

**Remember:** In each direction, the top terms multiply without cancelling.

*True by definition. Confidence: medium.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)), 14M25. arXiv math.AG, math.CO. Level 3: graduate.

**Definition.** The Newton polytope of a nonzero polynomial is the convex hull of its exponent vectors. Its support function records, for each direction u, the largest value of u · e over the exponents e, and this function determines the polytope.

**Problem.** Let f and g be nonzero polynomials over a field. The Newton polytope of fg is the Minkowski sum of the Newton polytopes of f and g, the set of sums of one point from each.

**How the definition helps.** Support functions of Minkowski sums add, so it suffices that the top u-weight of fg is the sum of the top u-weights of f and g (our own). The top-weight parts of f and g have a nonzero product over a field, and every other product of terms has smaller weight. So the top-weight terms of fg cannot cancel.

**Wikipedia:** [Newton polytope](https://en.wikipedia.org/wiki/Newton_polytope). It says: “Newt(fg) = Newt(f) + Newt(g)”

**Sources:** none listed. No primary source with a working link was found.

### Unimodular triangulations reveal Ehrhart coefficients

**Remember:** A lattice basis turns lattice points into integer vertex weights.

*Rules out counterexamples.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 3: graduate.

**Definition.** A unimodular triangulation cuts a lattice d-polytope into simplices whose edge vectors at a vertex form a basis of the lattice. Its h-polynomial is ∑ tʲ(1 − t)<sup>(d+1−j)</sup> over all faces, the empty one included, where j counts the face's vertices. The h\*-polynomial of the polytope is (1 − t)<sup>(d+1)</sup> times ∑ₘ L(P, m)tᵐ, the series counting lattice points in its dilations.

**Problem.** For a unimodular triangulation, the h-polynomial of the triangulation equals the h\*-polynomial of the lattice polytope.

**How the definition helps.** A lattice basis makes the lattice points of a dilated open face with j vertices into positive integer vertex weights, with series (t/(1 − t))ʲ (our own proof). Summing over all faces and multiplying by (1 − t)<sup>(d+1)</sup> gives the h-polynomial. The segment \[0, 2\] without subdivision has h-polynomial 1 but h\*-polynomial 1 + t (our own counterexample).

**Paper or page:** [Equatorial Flow Triangulations of Gorenstein Flow Polytopes](https://arxiv.org/abs/2408.05320v2). It says: “Given a unimodular triangulation T of a lattice polytope P, the h-vector of T is equal to the h\*-vector of P.”

**Sources:** none listed. No primary source with a working link was found.

### Unimodularity prevents Reeve’s missing sums

**Remember:** A lattice basis gives integer weights; emptiness alone does not.

*Rules out counterexamples.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO, math.MG. Level 3: graduate.

**Definition.** A unimodular triangulation divides a lattice polytope into simplices whose edge vectors from one vertex form a basis of the lattice. In such a simplex, a lattice point of the m-th dilation has nonnegative integer vertex weights summing to m (our own).

**Problem.** Suppose a lattice polytope has a unimodular triangulation. Then every lattice point in its dilation by a positive integer m is a sum of m original lattice points.

**How the definition helps.** Put x/m in a simplex of the triangulation; its integer weights write x as a sum of m vertices, with repetition (our own). An empty simplex, with no lattice points besides its vertices, is not enough. Reeve’s tetrahedron with vertices 0, (1,0,0), (0,1,0), (1,1,2) is empty, yet (1,1,1) in its double is no sum of two vertices (our own).

**Wikipedia:** [Reeve tetrahedra](https://en.wikipedia.org/wiki/Reeve_tetrahedra). It says: “No other lattice points lie on the surface or in the interior of the tetrahedron.”

**Sources:**

- [J. E. Reeve, On the Volume of Lattice Polyhedra (1957)](https://doi.org/10.1112/plms/s3-7.1.378)

### Gale complements detect faces

**Remember:** A face leaves a positive dependence on its complement.

*True by definition.* MSC 52B35 (Gale and other diagrams). arXiv math.CO, math.MG. Level 3: graduate.

**Definition.** The Gale vectors g₁,…,gₙ of the vertices are the rows of a matrix whose columns form a basis of the affine dependencies among the vertices. Then weights λᵢ satisfy ∑ λᵢgᵢ = 0 exactly when they are the values of one affine function at the vertices (our own).

**Problem.** A proper nonempty vertex subset spans a face exactly when its complementary Gale vectors have a weighted sum of zero with every weight positive.

**How the definition helps.** A vertex set spans a face exactly when some affine function is zero on it and positive on the other vertices. By the definition, such values are weights with ∑ λᵢgᵢ = 0 that vanish on the face and are positive on its complement. So the face condition is a positive dependence among the complementary Gale vectors (our own).

**Paper or page:** [Eigenpolytope Universality and Graphical Designs](https://arxiv.org/abs/2209.06349v2). It says: “if and only if I is the support of a positive dependence (circuit) of 𝒱.”

**Sources:**

- [David Gale, Neighborly and cyclic polytopes (1963)](https://doi.org/10.1090/pspum/007/0152944)

### Truncation regularizes ideal edge lengths

**Remember:** Moving one horosphere shifts three lengths by the same amount.

*True by definition.* MSC 52B45 (Dissections and valuations (Hilbert's third problem, etc.)), 51M10. arXiv math.GT. Level 3: graduate.

**Definition.** Cut off each vertex of a hyperbolic ideal tetrahedron with a small horosphere, a surface perpendicular to all geodesics ending at that vertex. Sum each remaining edge length tensored with its dihedral angle, the angle between its two faces, in ℝ ⊗ (ℝ/πℚ). Moving one horosphere changes the three lengths at its vertex by the same amount, and those three angles sum to π (our own).

**Problem.** With disjoint truncations, each cutting off just one vertex, the resulting tensor in ℝ ⊗ (ℝ/πℚ) is independent of the horospheres.

**How the definition helps.** Moving one horosphere adds the same amount c to the three incident lengths, so the sum changes by c ⊗ π, which is zero modulo πℚ. The three angles sum to π because they are the angles of the Euclidean triangle cut by the horosphere (our own).

**Wikipedia:** [Dehn invariant](https://en.wikipedia.org/wiki/Dehn_invariant). It says: “The result does not depend on the choice of horospheres for the truncation, as long as each one cuts off only a single vertex of the given polyhedron.”

**Sources:**

- [David Coulson, Oliver A. Goodman, Craig D. Hodgson and Walter D. Neumann, Computing arithmetic invariants of 3-manifolds (2000)](https://doi.org/10.1080/10586458.2000.10504641)
- [Alexander Goncharov, Volumes of hyperbolic manifolds and mixed Tate motives (1999)](https://doi.org/10.1090/S0894-0347-99-00293-3)

### Lifted energy selects Delaunay triangulations

**Remember:** The lowest lifted surface gives the least energy.

*True by definition.* MSC 52B55 (Computational aspects related to convexity). arXiv cs.CG. Level 3: graduate.

**Definition.** Lift each site p to height ‖p‖² on the paraboloid, and extend the heights linearly over each simplex of a triangulation of the sites. Its energy is the integral, over the convex hull, of this surface's height above the paraboloid. Every such surface lies on or above the lower convex hull of the lifted sites (our own).

**Problem.** Take finitely many sites spanning ℝᵈ, with every d + 1 affinely independent and no d + 2 on one sphere. Among triangulations using precisely those sites, the Delaunay triangulation uniquely minimizes the energy.

**How the definition helps.** Energy is least when the surface equals the lower hull everywhere, and the lifting theorem projects the lower hull's faces to the Delaunay cells. General position makes these cells simplices, so the Delaunay triangulation attains the lower hull. Any other triangulation lies strictly higher on an open set, so its energy is larger.

**Paper or page:** [Delaunay-like Triangulation of Smooth Orientable Submanifolds by L1-Norm Minimization](https://arxiv.org/abs/2203.06008v3). It says: “the triangulation of P that minimizes the Delaunay energy is unique and is the Delaunay complex of P.”

**Sources:**

- [Delaunay-like Triangulation of Smooth Orientable Submanifolds by L1-Norm Minimization, Theorem 2](https://arxiv.org/abs/2203.06008v3)

### Clipped cells preserve ball-union topology

**Remember:** Clip each ball to its own cell; the union stays the same.

*Makes the theorem clean to state or prove.* MSC 52C22 (Tilings in n dimensions (aspects of discrete geometry)). arXiv cs.CG. Level 3: graduate.

**Definition.** Take finitely many sites in Euclidean space and a radius r ≥ 0. Clip each closed ball of radius r to its site's Voronoi cell, the points at least as close to that site as to any other, and the clipped balls still cover the union (our own). The alpha complex has a simplex for each group of clipped balls with a common point.

**Problem.** The alpha complex and the union of the original balls have the same homotopy type.

**How the definition helps.** The nerve theorem says that the nerve of finitely many closed convex sets has the homotopy type of their union. The clipped balls are closed and convex with the same union as the balls, and their nerve is the alpha complex.

**Wikipedia:** [Alpha shape](https://en.wikipedia.org/wiki/Alpha_shape). It says: “the radius of the smallest empty circle containing the edge or triangle”

**Paper or page:** [Good Coverings of Proximal Alexandrov Spaces. Homotopic Cycles in Jordan Curve Theorem Extension](https://arxiv.org/abs/2108.10113v1). It says: “Let F be a finite collection of closed, convex sets in Euclidean space. Then the nerve of F and union of the sets in F have the same homotopy type.”

**Sources:**

- [H. Edelsbrunner, The union of balls and its dual shape (1995)](https://doi.org/10.1007/bf02574053)
- [J. F. Peters and T. Vergili, Good Coverings of Proximal Alexandrov Spaces. Homotopic Cycles in Jordan Curve Theorem Extension, Theorem 4](https://arxiv.org/abs/2108.10113v1)

### Generic rigidity makes Laman's edge count an exact test

**Remember:** Away from special positions, rigidity is just edge counting.

*Rules out counterexamples.* MSC 52C25 (Rigidity and flexibility of structures (aspects of discrete geometry)), 05C10. arXiv math.CO, math.MG. Level 3: graduate.

**Definition.** A placement of a graph's vertices in the plane is rigid if every continuous motion keeping all edge lengths keeps the placement congruent to the start. A graph is generically minimally rigid if almost every placement is rigid but deleting any edge destroys this.

**Problem.** For a simple graph with n ≥ 2 vertices, generic minimal rigidity in the plane requires exactly 2n − 3 edges. Together with that count, the condition that every k ≥ 2 vertices span at most 2k − 3 edges is necessary and sufficient.

**How the definition helps.** Ignoring special placements makes rigidity depend on the graph alone, so edge counts can decide it (our own). Laman’s theorem proves that the counts are sufficient. K₃,₃ satisfies the counts but flexes when its two vertex classes lie on perpendicular lines (our own).

**Wikipedia:** [https://en.wikipedia.org/wiki/Laman<sub>graph</sub>](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Laman_graph). It says: “if one places the vertices of a Laman graph in the Euclidean plane, in general position, there will in general be no simultaneous continuous motion of all the points, other than Euclidean congruences, that preserves the lengths of all the graph edges.”

**Paper or page:** [Combinatorial Resultants in the Algebraic Rigidity Matroid](https://arxiv.org/abs/2103.08432). It says: “A bar-and-joint framework is generically minimally rigid in 2D iff its underlying graph G=(V,E) has exactly \|E\|=2\|V\|−3 edges, and any proper subset V′⊂V of vertices spans at most 2\|V′\|−3 edges.”

**Sources:**

- [Goran Malić, Ileana Streinu, Combinatorial Resultants in the Algebraic Rigidity Matroid, arXiv:2103.08432 (2021)](https://arxiv.org/abs/2103.08432)

### Chambers index zonotope vertices

**Remember:** Choose the winning endpoint of each segment to find a vertex.

*True by definition.* MSC 52C35 (Arrangements of points, flats, hyperplanes (aspects of discrete geometry)). arXiv cs.CG, math.MG. Level 3: graduate.

**Definition.** A zonotope is the sum of segments \[0, vᵢ\] for finitely many nonzero vectors vᵢ. A chamber is a connected region left after removing the hyperplanes through 0 perpendicular to the vᵢ, so inside it each u · vᵢ has a fixed nonzero sign.

**Problem.** Chambers of this arrangement correspond bijectively to vertices of the zonotope.

**How the definition helps.** A direction u in a chamber picks the endpoint vᵢ when u · vᵢ &gt; 0 and 0 otherwise, so the sum of these choices is its unique maximizer (our own). Another chamber flips some choice, so its sum scores strictly lower for u. Every vertex uniquely maximizes some direction, which can be moved off all hyperplanes into a chamber.

**Wikipedia:** [Zonotope](https://en.wikipedia.org/wiki/Zonotope). It says: “The Minkowski sum of a finite set of line segments in ℝᵈ forms a type of convex polytope called a zonotope.”

**Sources:** none listed. No primary source with a working link was found.

### Affine images preserve algebraic interiors

**Remember:** Affine maps carry extensions of segments to extensions of segments.

*True by definition.* MSC 52A05 (Convex sets without dimension restrictions (aspects of convex geometry)). arXiv math.MG. Level 4: research.

**Definition.** A point x of a convex set K is in its relative algebraic interior if every segment from another point of K to x extends a little beyond x inside K. Affine maps send segments and their extensions to segments and their extensions.

**Problem.** If the relative algebraic interior of a convex set is nonempty, an affine map sends it onto the relative algebraic interior of the image.

**How the definition helps.** Affine maps carry extensions of segments to extensions, so interior points go to interior points (our own). For the reverse, fix an interior point a, and take an interior point y of the image other than the image of a. Extend the segment from the image of a beyond y, lift its far end to some b, and the matching point strictly between a and b maps to y.

**Paper or page:** [A note on faces of convex sets](https://arxiv.org/abs/2404.00832v3). It says: “Then rai(α(K)) = α(rai(K)).”

**Sources:**

- [A note on faces of convex sets (Theorem 6.5)](https://arxiv.org/abs/2404.00832v3)

### Segments make minimal faces intersect

**Remember:** Extend past x in both sets, and keep the shorter extension.

*True by definition.* MSC 52A05 (Convex sets without dimension restrictions (aspects of convex geometry)). arXiv math.MG. Level 4: research.

**Definition.** For a point x of a convex set K, the smallest face of K through x consists of x and every y in K for which the segment from y to x extends beyond x inside K.

**Problem.** For convex sets K and L containing x, the smallest face of their intersection through x equals the intersection of their smallest faces through x.

**How the definition helps.** Both smallest faces are given by the same segment test (our own proof). If \[y, x\] extends beyond x in K and in L, the shorter extension lies in both, hence in K ∩ L. Conversely, an extension inside K ∩ L works in each set.

**Paper or page:** [A note on faces of convex sets](https://arxiv.org/abs/2404.00832v3). It says: “Let K,L ⊆ V be convex sets and let x ∈ K ∩ L.”

**Sources:** none listed. No primary source with a working link was found.

### Vertex multiplicities give an optimal colored Tverberg theorem for prime powers

**Remember:** At prime powers, let vertices be reused up to a fixed budget.

*Makes the theorem clean to state or prove.* MSC 52A37 (Other problems of combinatorial convexity), 55M35. arXiv math.CO, math.AT. Level 4: research.

**Definition.** A rainbow face of a colored simplex uses at most one vertex of each color, and a vertex of multiplicity m may lie in up to m of the chosen faces. For a prime p and k ≥ 1, take d + 1 colors, each with p − 1 vertices of multiplicity pʲ for every 0 ≤ j &lt; k. Add one more color with a single vertex of multiplicity one.

**Problem.** Let r = pᵏ and N = k(p − 1)(d + 1). Every continuous map from this N-dimensional simplex to ℝᵈ sends some r rainbow faces, respecting multiplicities, to sets with a common point.

**How the definition helps.** Multiplicities let faces share vertices in a controlled way, which allows a smaller simplex than disjoint faces need (our own). For k = 1 every multiplicity is one, so the faces are disjoint, and for k &gt; 1 the dimension is below (r − 1)(d + 1). The proof uses multiple chessboard complexes and equivariant degree theory (our own).

**Paper or page:** [Optimal colored Tverberg theorems for prime powers](https://arxiv.org/abs/2005.11913v3). It says: “to compensate for this reduction by allowing vertices to repeatedly appear a controlled number of times in different rainbow simplices.”

**Sources:**

- [Duško Jojić, Gaiane Panina, Rade T. Živaljević, Optimal colored Tverberg theorems for prime powers, arXiv:2005.11913v3 (2021)](https://arxiv.org/abs/2005.11913v3)

### Complete sets of diameter D are intersections of D-balls around their points

**Remember:** A point fits exactly when it lies within range of every point.

*True by definition.* MSC 52A55 (Spherical and hyperbolic convexity), 52A30. arXiv math.MG. Level 4: research.

**Definition.** A set K of diameter D, the supremum of distances between its points, is complete if adding any point outside K raises the diameter. A point can join K without raising the diameter exactly when it lies within D of every point of K.

**Problem.** Let K be a convex body of diameter D &gt; 0 in hyperbolic space. K is complete exactly when it equals the intersection of the closed balls of radius D centred at its points.

**How the definition helps.** The intersection of the closed balls of radius D around the points of K is exactly the set of points that can join K (our own explanation). So completeness says that this intersection equals K. This step works in any metric space (our own check).

**Paper or page:** [Hyperbolic width functions and characterizations of bodies of constant width in the hyperbolic space](https://arxiv.org/abs/2303.16814v2). It says: “K is complete; K = ⋂ₓ∈K B(x,D);”

**Sources:**

- [Károly J. Böröczky, András Csépai, Ádám Sagmeister, Hyperbolic width functions and characterizations of bodies of constant width in the hyperbolic space, arXiv:2303.16814v2 (2024)](https://arxiv.org/abs/2303.16814v2)

### Wide disk domains give an elementary proof of the spherical Blaschke–Leichtweiss theorem

**Remember:** Intersect equal disks but keep every center inside.

*Makes the theorem clean to state or prove.* MSC 52A55 (Spherical and hyperbolic convexity), 52A40. arXiv math.MG. Level 4: research.

**Definition.** On the unit sphere, a wide r-disk domain is an intersection of closed disks of radius r whose centers all lie in the intersection itself. The spherical Reuleaux triangle is one: the intersection of the three disks of radius r centered at the vertices of an equilateral triangle of side r.

**Problem.** For 0 &lt; r ≤ π/2, the spherical Reuleaux triangle has the least area among wide r-disk domains on the unit sphere.

**How the definition helps.** Every spherical body of constant width r is a wide r-disk domain, so a bound for the wider class gives the Blaschke–Leichtweiss bound (our own). The center condition replaces the constant-width hypothesis and is easy to check for intersections of disks (our own). The paper proves the least-area bound for this class.

**Paper or page:** [On a strengthening of the Blaschke-Leichtweiss theorem](https://arxiv.org/abs/2101.00538v2). It says: “In this paper we extend this result to the family of wide r-disk domains of 𝕊², where 0 &lt; r ≤ π/2.”

**Sources:**

- [Károly Bezdek, On a strengthening of the Blaschke-Leichtweiss theorem, Journal of Geometry 114 (2023), no. 1, paper no. 2](https://arxiv.org/abs/2101.00538v2)

### For abstract polyhedra, the dual is the same order turned upside down

**Remember:** Turn the partial order upside down and you have the dual.

*True by definition. Confidence: medium.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 06A11. arXiv math.MG, math.CO. Level 4: research.

**Definition.** An abstract polyhedron is a ranked poset with a least and a greatest element, whose maximal chains, the flags, have five elements. Between two elements two ranks apart lie exactly two elements, and in every interval any two flags are joined by changing one element at a time. Each condition stays true when the order is reversed (our own).

**Problem.** Reversing the order of any abstract polyhedron gives its dual and preserves orientability. For finite abstract polyhedra it also preserves the Euler characteristic V − E + F.

**How the definition helps.** Reversing the order keeps all three conditions and the flags, so it gives an abstract polyhedron, the dual (our own). It swaps vertices with faces and keeps edges, so V − E + F is unchanged. It also keeps which flags differ in one element, and orientability means that this flag graph is bipartite (our own).

**Wikipedia:** [Polyhedron](https://en.wikipedia.org/wiki/Polyhedron). It says: “Abstract polyhedra also have duals, obtained by reversing the partial order defining the polyhedron to obtain its dual or opposite order.”

**Sources:**

- [B. Grünbaum, Are your polyhedra the same as my polyhedra?, in Discrete and Computational Geometry, Algorithms and Combinatorics 25, Springer (2003) 461–488](https://doi.org/10.1007/978-3-642-55566-4_21)

### Cobar signs cancel repeated Dehn maps

**Remember:** Splitting twice gives the same face flag with opposite signs.

*True by definition.* MSC 52B45 (Dissections and valuations (Hilbert's third problem, etc.)), 19E99. arXiv math.KT, math.GT. Level 4: research.

**Definition.** The reduced Dehn map Δ splits a simplex into a sum of tensors, each a proper face tensored with its spherical link. On a tensor of one hyperbolic factor followed by spherical factors, the cobar differential applies Δ to each factor in turn, with sign (−1)<sup>(i−1)</sup> at position i.

**Problem.** In Goncharov’s hyperbolic Dehn complex, applying two successive differentials gives zero.

**How the definition helps.** Two differentials split either one factor twice or two different factors once each. Coassociativity pairs the first kind by their common nested face, splits of different factors commute, and each pair has opposite signs, so all terms cancel (our own). Goncharov identifies the Dehn complex with this cobar construction (our own).

**Wikipedia:** [Dehn invariant](https://en.wikipedia.org/wiki/Dehn_invariant). It says: “This algebraic view of the Dehn invariant can be extended to higher dimensions”

**Sources:**

- [Alexander Goncharov, Volumes of hyperbolic manifolds and mixed Tate motives (1999)](https://doi.org/10.1090/S0894-0347-99-00293-3)

### Polytope logarithms linearize dilation

**Remember:** The logarithm turns dilation by n into multiplication by n.

*True by definition.* MSC 52B45 (Dissections and valuations (Hilbert's third problem, etc.)). arXiv math.CO. Level 4: research.

**Definition.** In the rational polytope algebra, a polytope's class ignores translation, the empty set is zero, and the product of classes is the class of the Minkowski sum. For polytopes with convex union, \[P ∪ Q\] + \[P ∩ Q\] = \[P\] + \[Q\]. The logarithm of the class a of a nonempty polytope is p = ∑ⱼ₌₁ᵈ (−1)<sup>(j+1)</sup>(a − 1)ʲ/j, with d the ambient dimension.

**Problem.** For nonnegative integer n, the class of nP is the finite exponential of np. Its dependence on n is polynomial of degree at most the ambient dimension.

**How the definition helps.** The product rule gives \[nP\] = aⁿ (our own). McMullen’s theorem (a − 1)<sup>(d+1)</sup> = 0 makes the logarithm and exponential finite inverse sums, so aⁿ = exp(np). Since p<sup>(d+1)</sup> = 0, exp(np) is a polynomial in n of degree at most d.

**Paper or page:** [A pithy look at the Polytope Algebra](https://arxiv.org/abs/2111.02820v1). It says: “⟦P⟧ⁿ = ⟦nP⟧”

**Sources:**

- [A pithy look at the Polytope Algebra, Theorem 4.13](https://arxiv.org/abs/2111.02820v1)
- [P. McMullen, The polytope algebra (1989)](https://doi.org/10.1016/0001-8708(89)90029-7)

### Spherical links cancel Dehn invariants

**Remember:** The links around an interior face assemble to a sphere.

*True by definition.* MSC 52B45 (Dissections and valuations (Hilbert's third problem, etc.)), 51M10. arXiv math.GT. Level 4: research.

**Definition.** Goncharov’s generalized Dehn invariant of a hyperbolic n-simplex sums, over its faces of dimension 1 to n − 2, each face tensored with its link. The link is the spherical polyhedron of inward unit directions perpendicular to the face, taken up to cutting and reassembly, with a whole sphere counted as zero.

**Problem.** For a closed oriented hyperbolic manifold of odd dimension, the sum of the simplex classes in a geodesic triangulation has zero generalized Dehn invariant.

**How the definition helps.** Group the terms by faces of the triangulation (our own). The manifold has no boundary, so the links around each face fill the whole sphere of normal directions, which counts as zero. Goncharov’s construction makes this sum compatible with cutting and reassembly (our own).

**Wikipedia:** [Dehn invariant](https://en.wikipedia.org/wiki/Dehn_invariant). It says: “This algebraic view of the Dehn invariant can be extended to higher dimensions”

**Sources:**

- [Alexander Goncharov, Volumes of hyperbolic manifolds and mixed Tate motives (1999)](https://doi.org/10.1090/S0894-0347-99-00293-3)

### Polarity swaps lattice extremal directions

**Remember:** A narrow span becomes a long central chord in the polar.

*Makes the theorem clean to state or prove.* MSC 52C07 (Lattices and convex bodies in n dimensions (aspects of discrete geometry)). arXiv math.MG. Level 4: research.

**Definition.** The lattice width of a convex body is its least span, the range of y · x over the body, over nonzero y in the dual lattice. The lattice diameter is its greatest chord length, counted in primitive lattice steps along the chord. In the polar of an origin-symmetric body, a span of 2h in direction y becomes a central chord of 2/h steps of y (our own).

**Problem.** For a full-dimensional origin-symmetric polytope, the lattice width directions are the polar polytope’s lattice diameter directions in the dual lattice.

**How the definition helps.** So the polar's chords along dual lattice directions are longest exactly where the body's spans are smallest (our own proof). A shortest dual vector on its line is a primitive step, and symmetry makes the span twice the largest value of y · x. Any chord is no longer than the parallel central chord, found by averaging the chord with its reflection.

**Paper or page:** [Lattice Reduced and Complete Convex Bodies](https://arxiv.org/abs/2307.09429v2). It says: “The width directions of C with respect to Λ are the diameter directions of C⋆ with respect to Λ⋆.”

**Sources:**

- [Lattice Reduced and Complete Convex Bodies (Theorem 3.8)](https://arxiv.org/abs/2307.09429v2)

### Stationarity turns coverage into intensity

**Remember:** A point is covered exactly when its radius ball contains a center.

*True by definition.* MSC 52C17 (Packing and covering in n dimensions (aspects of discrete geometry)). arXiv math.MG. Level 4: research.

**Definition.** A stationary packing by equal open balls of radius r in a homogeneous space is random, with a law unchanged by every isometry. Its density is the chance that a fixed point is covered, and its center intensity is the expected number of centers per unit of invariant volume. A point x is covered exactly when the ball of radius r around x contains a center, and then exactly one (our own).

**Problem.** For a stationary packing by equal open balls in a homogeneous space with invariant volume, density equals center intensity times one ball’s volume.

**How the definition helps.** So density is the expected number of centers in a ball of radius r around a fixed point. Stationarity makes this expected count an invariant measure, and invariant volume is unique up to scale, so it is the intensity times the volume (our own).

**Paper or page:** [Linear programming bounds in homogeneous spaces, I: Optimal packing density](https://arxiv.org/abs/2505.23572v1). It says: “D(Λ) = 𝔼\[Λ(B(x,r))\] = i(Λ)m<sub>X</sub>(B(x₀,r)).”

**Sources:**

- [Linear programming bounds in homogeneous spaces, I: Optimal packing density (Proposition 4.10)](https://arxiv.org/abs/2505.23572v1)

### Strict convexity separates Voronoi interiors

**Remember:** A round unit ball lets every move break a tie.

*Rules out counterexamples.* MSC 52C22 (Tilings in n dimensions (aspects of discrete geometry)). arXiv math.MG. Level 4: research.

**Definition.** In a normed plane, each site p has a weight wₚ and claims the points x where ‖x − p‖ − wₚ is least, and it is nondegenerate if it wins strictly at p. A norm is strictly convex if its unit circle contains no segment. Then ‖a + b‖ &lt; ‖a‖ + ‖b‖ unless a and b point the same way.

**Problem.** In a plane with a strictly convex norm, the interior of either cell of two distinct nondegenerate sites misses the other cell.

**How the definition helps.** At a tie off the line through the two sites, a small move toward either site favors that site, by the strict triangle inequality (our own). On the line, nondegeneracy puts any tie between the sites, where a move changes the two distances in opposite directions. In the maximum norm, sites (−1,0) and (1,0) with zero weights tie on the whole open region y &gt; \|x\| + 1 (our own).

**Paper or page:** [Non-Euclidean Erdős-Anning Theorems](https://arxiv.org/abs/2401.06328v3). It says: “the interior of Vᵢ is disjoint from Vⱼ, and vice versa.”

**Sources:**

- [Non-Euclidean Erdős-Anning Theorems (Lemma 7)](https://arxiv.org/abs/2401.06328v3)
