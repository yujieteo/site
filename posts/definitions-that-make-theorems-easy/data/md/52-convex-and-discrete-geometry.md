### The intersection definition makes the convex hull the smallest convex set

**Remember:** An intersection of convex sets is convex and lies inside each of them.

*True by definition.* MSC 52A05 (Convex sets without dimension restrictions (aspects of convex geometry)), 52A20. arXiv math.MG. Level 1: early undergraduate.

**Definition.** Define the convex hull of a set X as the intersection of all convex sets that contain X. Another definition uses finite weighted combinations of points of X with nonnegative weights that sum to 1.

**Problem.** The convex hull of X is the unique smallest convex set containing X.

**How the definition helps.** The intersection contains X and lies inside each convex set containing X by construction. It is convex because the line segment between two common points belongs to every set in the intersection. Our own comparison puts the work into showing that this equals the set of finite weighted combinations. That set is convex and every convex set containing X contains every such combination.

**Wikipedia:** [Convex hull](https://en.wikipedia.org/wiki/Convex_hull). It says: “However, the second definition, the intersection of all convex sets containing X, is well-defined.”

**Paper or page:** [Convex Hull is Smallest Convex Set containing Set](https://proofwiki.org/wiki/Convex_Hull_is_Smallest_Convex_Set_containing_Set). It says: “conv U is convex and if K ⊆ X is a convex subset with U ⊆ K, we have that conv U ⊆ K.”

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

### Pick's formula needs simple polygons, since each hole adds one

**Remember:** One boundary, no holes, and area is i plus b over two minus one.

*Rules out counterexamples.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)), 51M25. arXiv math.MG, math.CO. Level 1: early undergraduate.

**Definition.** A simple polygon is a region bounded by one closed polygonal curve that does not cross itself. So it has one boundary piece and no holes. A lattice polygon has all its vertices at integer points.

**Problem.** Pick's theorem (1899) is about a simple lattice polygon. Let it have i integer points inside and b integer points on its boundary. Then its area is i + b/2 − 1.

**How the definition helps.** Restricting to simple polygons makes area a function of i and b alone. Suppose a polygon has h holes, bounded by disjoint simple lattice polygons. Its area is i + b/2 + h − 1, so each hole breaks the simple formula by one. The proof cuts the polygon into lattice triangles with no other lattice points, each of area ½, and then counts with Euler's formula. The Euler characteristic of the region is what changes with holes; this link is our own reading. The formula has no analogue in three dimensions: the Reeve tetrahedra have four lattice vertices and no other lattice points, but different volumes.

**Wikipedia:** [Pick's theorem](https://en.wikipedia.org/wiki/Pick%27s_theorem). It says: “Generalizations to Pick's theorem to non-simple polygons are more complicated and require more information than just the number of interior and boundary vertices.”

**Sources:**

- [J. E. Reeve, On the volume of lattice polyhedra, Proceedings of the London Mathematical Society 7 (1957) 378–395](https://doi.org/10.1112/plms/s3-7.1.378)

### Support-function width gives perimeter π times the constant width

**Remember:** Adding a body to its half-turn makes a disk with twice its perimeter.

*True by definition.* MSC 52A10 (Convex sets in \\(2\\) dimensions (including convex curves)), 52A38. arXiv math.MG. Level 2: later undergraduate.

**Definition.** A convex body is a compact convex set with interior. Its support function h(u) is the largest dot product u · x for points x in the body. Define its width in a unit direction u as h(u) + h(−u), the gap between its two supporting lines perpendicular to u. The body has constant width w if that gap is always w.

**Problem.** A planar convex body of constant width w has perimeter πw.

**How the definition helps.** Our own support-function calculation turns constant width into the statement that the sum with the reflected body is a disk. The sum consists of differences x − y of points of the body, so its largest dot product with u is h(u) + h(−u). That value is always w, which determines the disk of radius w. The work is in Cauchy’s perimeter formula, which gives perimeter by integrating the support function over all unit directions. The formula makes perimeter additive under these sums, so the body has half the disk’s perimeter.

**Wikipedia:** [Barbier's theorem](https://en.wikipedia.org/wiki/Barbier%27s_theorem). It says: “the Minkowski sum of K and its 180° rotation is a disk with radius w and perimeter 2πw.”

**Sources:** none listed. No primary source with a working link was found.

### Polarity ignores convex combinations

**Remember:** An upper bound on generators is the same bound on their averages.

*True by definition.* MSC 52A20 (Convex sets in \\(n\\) dimensions (including convex hypersurfaces)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** The one-sided polar of a nonempty Euclidean set A consists of y such that x · y ≤ 1 for every x in A. For a polytope containing the origin inside, an equivalent description builds the dual polytope from rescaled facet normals.

**Problem.** The one-sided polar of a set equals the one-sided polar of its convex hull.

**How the definition helps.** The inequality definition lets one check a linear bound on generators alone. In our own proof, every convex combination preserves the upper bound of one. Conversely, a bound on the hull holds on the original set. For a full-dimensional polytope containing zero in its interior, one can also construct the polar from rescaled facet normals. That approach requires proving these normals generate precisely the set of valid inequalities.

**Paper or page:** [One-Sided Polar of Convex Hull is One-Sided Polar of Original Set](https://proofwiki.org/wiki/One-Sided_Polar_of_Convex_Hull_is_One-Sided_Polar_of_Original_Set). It says: “(conv A)⊙ = A⊙”

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

**How the definition helps.** Our own proof applies the segment rule once to put both endpoints in the larger face, then again to put them in the smaller face. For the counterexample, take a stadium made by thickening a line segment to distance 1. Its flat top is exposed by maximizing height. Each endpoint is exposed within that flat segment. At either endpoint, the top line is the only supporting line because it also supports the round cap there. Thus no linear function exposes just that endpoint in the stadium. For convex polytopes, the extra theorem is that every face is exposed.

**Wikipedia:** [Face (geometry)](https://en.wikipedia.org/wiki/Face_%28geometry%29). It says: “Therefore, not every face of a convex set is an exposed face.”

**Sources:**

- [R. Tyrrell Rockafellar, Convex Analysis, Princeton University Press (1970), §18](https://doi.org/10.1515/9781400873173)

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

### General position makes Radon partitions unique

**Remember:** One dependence with no zeros gives one split by signs.

*Rules out counterexamples.* MSC 52A37 (Other problems of combinatorial convexity), 52C35. arXiv cs.CG. Level 2: later undergraduate.

**Definition.** A Radon partition splits points into two groups whose convex hulls intersect. An affine dependence assigns weights, not all zero, whose sum and weighted sum of the points both vanish. General position here means that no d+1 points in ℝᵈ admit an affine dependence.

**Problem.** A set of d+2 points in general position in ℝᵈ has exactly one Radon partition up to exchanging its two parts.

**How the definition helps.** In our own proof, general position gives a unique dependence up to scaling, with no zero weight. Append a coordinate of one to each point. The resulting d+2 columns have rank d+1, and deleting any one leaves independent columns. Separate the positive and negative weights and normalize each group to obtain the same convex combination on both sides. Conversely, subtracting equal convex combinations gives a dependence, so its signs force the partition. Our own counterexample uses four collinear points A, B, C, D in that order in the plane. The splits AC against BD and AD against BC both work.

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

**How the definition helps.** The diameter of the set is the longer distance, so a part has smaller diameter exactly when it contains no long pair. In our own explanation, that means the part is a clique. A cover by cliques becomes a partition by keeping each vertex in only one clique. The paper uses this to restate Borsuk's question for two-distance sets in terms of graphs. Its Theorem 1 embeds every n-vertex graph G as a two-distance set in dimension n − μ(G) − 1, where μ(G) is the matching number.

**Paper or page:** [Borsuk's conjecture for two-distance sets and its equivalent formulation for graphs](https://arxiv.org/abs/2511.03668v2), [Borsuk's conjecture for two-distance sets and its equivalent formulation for graphs](https://arxiv.org/abs/2511.03668v2). It says: “Every graph G can be embedded in a Euclidean space as a two-distance set. This allows us to reformulate the analogue of Borsuk's conjecture for two-distance sets in terms of graphs.”

**Sources:**

- [Oleg R. Musin, Borsuk's conjecture for two-distance sets and its equivalent formulation for graphs, arXiv:2511.03668 (2025)](https://arxiv.org/abs/2511.03668v2)

### Signed face projections cancel

**Remember:** Project all faces with signs and each edge cancels.

*True by definition.* MSC 52A38 (Length, area, volume and convex sets (aspects of convex geometry)). arXiv math.MG. Level 2: later undergraduate.

**Definition.** Multiply each face area by its outward unit normal to get its vector area. Equivalently, its component along an axis is the signed area projected onto the plane perpendicular to that axis.

**Problem.** The outward vector areas of all faces of a bounded three-dimensional convex polyhedron sum to zero.

**How the definition helps.** Signed projection makes the two sides of a solid contribute equal areas with opposite signs. In our own proof, project the boundary along any unit direction onto its perpendicular plane. Almost every line through the projected solid enters once and leaves once. The two boundary points contribute opposite signs, so the projected areas cancel. The equivalence between signed projected area and the corresponding vector component supplies the geometric step. Applying this argument in three coordinate directions proves the vector sum vanishes.

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

### Cauchy's rigidity theorem needs the polyhedra to be convex

**Remember:** A convex polyhedron cannot have a dent that pops in and out.

*Rules out counterexamples.* MSC 52B10 (Three-dimensional polytopes), 52C25. arXiv math.MG. Level 2: later undergraduate.

**Definition.** The theorem is stated only for convex polytopes in three dimensions. The two polytopes must have the same face lattice, and corresponding faces must be congruent. The face lattice records which vertices, edges and faces lie in which others, that is, how the faces are glued together.

**Problem.** Cauchy's theorem: two such convex polyhedra are congruent. So a convex polyhedron made of rigid plates joined by hinges is rigid.

**How the definition helps.** Convexity excludes two kinds of counterexample, one to uniqueness and one to rigidity. Without convexity, uniqueness fails. Push in one vertex of a regular icosahedron, so that its pyramid of five faces is reflected inward. You get a different polyhedron with the same faces and the same gluing. Rigidity also fails: Bricard's octahedra and Connelly's 1977 sphere are nonconvex polyhedra that flex while every face stays rigid. The proof still needed work: Steinitz, Schoenberg and Aleksandrov later corrected an error in Cauchy's main lemma.

**Wikipedia:** [Cauchy's theorem (geometry)](https://en.wikipedia.org/wiki/Cauchy%27s_theorem_%28geometry%29). It says: “To see that convexity is necessary, consider a regular icosahedron. One can "push in" a vertex to create a nonconvex polyhedron that is still combinatorially equivalent to the regular icosahedron”

**Sources:**

- [R. Connelly, A counterexample to the rigidity conjecture for polyhedra, Publ. Math. IHÉS 47 (1977) 333–338](https://doi.org/10.1007/BF02684342)

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

### Regularity by flag symmetry makes dual polytopes regular

**Remember:** Reversing the order of faces gives matching flags in the dual.

*True by definition.* MSC 52B15 (Symmetry properties of polytopes), 51M20. arXiv math.MG, math.CO. Level 2: later undergraduate.

**Definition.** A flag is a chain of nested faces with one face of each dimension. A full-dimensional convex polytope is regular if a symmetry can send any flag to any other flag. A geometric test instead examines the largest proper faces and the shapes of small slices at vertices. The dual reverses face inclusion, turning vertices into largest proper faces and vice versa.

**Problem.** The dual of a regular convex polytope is regular.

**How the definition helps.** Our own proof uses flag symmetry directly because duality sends flags to flags in reverse order. Centre the polytope at the average of its vertices, so every symmetry fixes the origin. Form the dual from vectors whose dot product with every point of the original polytope is at most 1. Orthogonal symmetries of the original polytope then act on the dual and preserve the face correspondence. The work is proving the correspondence between faces, rather than testing the faces and vertex slices of the dual individually.

**Wikipedia:** [Regular polytope](https://en.wikipedia.org/wiki/Regular_polytope). It says: “The dual of a regular polytope is also a regular polytope.”

**Sources:** none listed. No primary source with a working link was found.

### Order volumes count linear extensions

**Remember:** Sort the coordinates and each valid order gets one equal piece.

*True by definition.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 2: later undergraduate.

**Definition.** The order polytope of a finite partially ordered set has one coordinate in \[0, 1\] for each element. Require the coordinates to respect all comparisons in the order. A linear extension is a total order that keeps those comparisons.

**Problem.** For a partial order on n elements, n! times the order polytope’s volume counts its linear extensions.

**How the definition helps.** Coordinate inequalities make each strict ordering of the coordinates either entirely admissible or entirely inadmissible. Listing the polytope's vertices hides this partition. In our own calculation, coordinate permutations give all n! regions of the unit cube equal volume. Ties lie in hyperplanes of volume zero. The admissible regions correspond exactly to linear extensions.

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

**Problem.** Hilbert's third problem asks whether any two polyhedra of equal volume can be cut into finitely many pieces and reassembled into each other. Dehn showed that a cube and a regular tetrahedron of equal volume cannot.

**How the definition helps.** The tensor product is built so that each step of a dissection leaves the sum unchanged. A new edge inside the solid has angles summing to 2π, and one on a face has angles summing to π. Both are rational multiples of π, so they give zero. Splitting an edge or an angle is handled by additivity in each factor. The cube has dihedral angle π/2, so its invariant is zero, while the tetrahedron's angle arccos(1/3) is not a rational multiple of π. The modern tensor form is due to Jessen (1968). Sydler's converse, that volume and Dehn invariant are the only obstructions, stays hard.

**Wikipedia:** [Dehn invariant](https://en.wikipedia.org/wiki/Dehn_invariant). It says: “in either case this rational multiple of π does not contribute to the Dehn invariant.”

**Sources:**

- [M. Dehn, Ueber den Rauminhalt, Mathematische Annalen 55 (1901) 465–478](https://doi.org/10.1007/BF01448001)
- [B. Jessen, The algebra of polyhedra and the Dehn–Sydler theorem, Mathematica Scandinavica 22 (1968) 241](https://doi.org/10.7146/math.scand.a-10888)

### Defining polyhedra as spheres with disk faces saves Euler's formula

**Remember:** Euler's formula is about spheres made of polygons, not every solid with flat faces.

*Rules out counterexamples.* MSC 52B70 (Polyhedral manifolds), 52B05. arXiv math.MG, math.GT. Level 2: later undergraduate.

**Definition.** A polyhedron is taken to be a solid whose surface is topologically a sphere and whose faces are topologically disks. Every convex polyhedron is of this kind.

**Problem.** Euler's polyhedron formula V − E + F = 2, where V, E and F are the numbers of vertices, edges and faces.

**How the definition helps.** Cauchy's proof works for any polyhedron whose surface is topologically a sphere with disk faces, so with this definition the formula holds. Some shapes that people called polyhedra break the formula. Their Euler characteristic χ = V − E + F is 1 for the tetrahemihexahedron, −6 for the small stellated dodecahedron and 0 for toroidal polyhedra. Lakatos called the refusal to apply the theorem to such counterexamples monster-barring. The method that he prefers reads the hidden condition off the proof and builds it into the theorem; his book calls the result a proof-generated concept. He uses this to argue that definitions are patched up after failed proofs. The barred shapes do not disappear: they get their own formula through the Euler characteristic of their surface.

**Wikipedia:** [Proofs and Refutations](https://en.wikipedia.org/wiki/Proofs_and_Refutations), [Imre Lakatos](https://en.wikipedia.org/wiki/Imre_Lakatos), [Euler characteristic](https://en.wikipedia.org/wiki/Euler_characteristic). It says: “Lakatos termed the polyhedral counterexamples to Euler's formula monsters and distinguished three ways of handling these objects: Firstly, monster-barring, by which means the theorem in question could not be applied to such objects.”

**Sources:**

- [I. Lakatos, Proofs and Refutations: The Logic of Mathematical Discovery, Cambridge University Press (1976)](https://doi.org/10.1017/cbo9781139171472)

### Half-open parallelepipeds make lattice translates tile space without overlaps

**Remember:** Each coordinate splits into an integer part and a remainder in \[0, 1).

*True by definition. Confidence: medium.* MSC 52C07 (Lattices and convex bodies in \\(n\\) dimensions (aspects of discrete geometry)), 11H06. arXiv math.MG, math.NT. Level 2: later undergraduate.

**Definition.** Let b₁, …, bₙ be a basis of a lattice in ℝⁿ. The half-open parallelepiped is the set of points c₁b₁ + ⋯ + cₙbₙ with each cᵢ in \[0, 1). The closed parallelepiped, with each cᵢ in \[0, 1\], has neighboring copies that overlap on their boundaries.

**Problem.** The translates of the half-open parallelepiped by the lattice vectors are disjoint and cover ℝⁿ.

**How the definition helps.** The half-open choice puts each point in exactly one translate, because each real number has one integer part and one remainder in \[0, 1). Write a point as x₁b₁ + ⋯ + xₙbₙ. Its translate is the one indexed by the integer parts of x₁, …, xₙ, and no other translate contains it. With the closed parallelepiped, the translates cover ℝⁿ but overlap, so they tile only up to sets of measure zero. The work goes into the fact that a lattice has a basis, which the definition assumes. The page describes the tiles, and the half-open choice and proof are our own.

**Wikipedia:** [Lattice (group)](https://en.wikipedia.org/wiki/Lattice_%28group%29). It says: “A lattice fills the whole of ℝⁿ with equal tiles, copies of the n-dimensional parallelepiped spanned by the basis vectors”

**Sources:** none listed. No primary source with a working link was found.

### Hole-free triangulations have tree duals

**Remember:** One boundary leaves no cycle in the graph of triangles.

*Rules out counterexamples.* MSC 52C20 (Tilings in \\(2\\) dimensions (aspects of discrete geometry)). arXiv cs.CG. Level 2: later undergraduate.

**Definition.** Use a simple polygon, whose boundary is one closed chain with no crossings. Triangulate it without adding vertices. Join two triangles in a graph when they share an interior edge.

**Problem.** The adjacency graph of triangles in any such triangulation is a tree.

**How the definition helps.** With no holes or added vertices, the triangles have exactly enough shared edges to connect them in a tree. In our own proof, Euler's formula for a disk gives one fewer interior edge than triangles. Paths inside the polygon can avoid vertices and cross one edge at a time, so the graph is connected. Between two concentric, aligned squares, dividing each of the four trapezoids into triangles gives a cycle. Even in a single triangle, joining an interior vertex to its three corners produces a cycle.

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

**How the definition helps.** Written as an intersection of half-spaces, each cell is a convex polyhedron by the definition of a polyhedron. The distance definition does not show this directly. The work goes into one comparison of two distances. The condition \|x − p\|² ≤ \|x − q\|² is a linear inequality in x, because the \|x\|² terms cancel. The page gives this half-space description and concludes that each cell is convex, and the cancellation step is our own.

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

**Definition.** A closure operation enlarges sets, preserves inclusions, and gives the same result when applied twice. A finite convex geometry has such an operation and keeps the empty set closed. Its anti-exchange rule concerns distinct points x and y outside a closed set C. If adding x to C brings y into the closure, adding y to C must leave x outside the closure.

**Problem.** Each closed set has a unique inclusion-minimal generator, a subset whose closure is that set and whose proper subsets cannot generate it.

**How the definition helps.** Anti-exchange prevents one missing generator from being replaced by a sequence of other points. Our own proof compares two minimal generators of the same closed set. Remove a point x from the first generator that the second omits. Add points from the second until x first enters the closure. Just before that step, adding x would already recover the whole closed set, including the point about to enter. This contradicts anti-exchange. Without the rule, either of two parallel nonzero vectors generates both under linear span restricted to that pair.

**Paper or page:** [Cospanning characterizations of antimatroids and convex geometries](https://arxiv.org/abs/2107.08556v1). It says: “is uniquely generated if and only if the operator φ satisfies the anti-exchange property.”

**Sources:**

- [Cospanning characterizations of antimatroids and convex geometries, Theorem 2.8](https://arxiv.org/abs/2107.08556v1)

### Nondegenerate equilibria satisfy Euler’s formula

**Remember:** A sphere has no isolated equilibria about its center.

*Rules out counterexamples.* MSC 52A15 (Convex sets in \\(3\\) dimensions (including convex surfaces)). arXiv math.MG. Level 3: graduate.

**Definition.** For a smooth convex body and an interior point c, equilibria are critical points of squared distance from c on the boundary. Minima are stable, maxima are unstable, and saddles have both increasing and decreasing directions. An equilibrium is nondegenerate if the matrix of second derivatives in local surface coordinates has no zero eigenvalue.

**Problem.** For a smooth convex body in three dimensions with only nondegenerate equilibria, stable plus unstable equilibria minus saddles equals two.

**How the definition helps.** In our own account, nondegeneracy lets each equilibrium contribute a sign determined by its second derivatives. Our own account puts the work in Morse theory, which identifies the signed count with the Euler characteristic of the boundary sphere. In our own counterexample, every point of a round sphere is an equilibrium relative to its center.

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

**How the definition helps.** Support functions make addition immediate because the largest projection of a sum splits into independent suprema for the two sets. Our own cancellation proof uses the finite support values of bounded C to subtract them direction by direction. That gives equal support functions for A and B. A direct proof with points cannot simply cancel C, since the same point can have different decompositions. To recover each set, the work is to show that a plane separates any point outside a closed convex set from the set.

**Wikipedia:** [Support function](https://en.wikipedia.org/wiki/Support_function). It says: “Furthermore, the support function, as a function of the set A, is compatible with many natural geometric operations, like scaling, translation, rotation and Minkowski addition.”

**Sources:** none listed. No primary source with a working link was found.

### Support functions give Blaschke selection

**Remember:** Bound the sets to bound how fast their support functions can change.

*Makes the theorem clean to state or prove.* MSC 52A27 (Approximation by convex sets). arXiv math.MG. Level 3: graduate.

**Definition.** A nonempty compact convex set has a support function giving its largest dot product with each unit direction. The Hausdorff distance is the least radius for which each set lies within that distance of the other. It equals the largest absolute difference of the two support functions.

**Problem.** Within a fixed Euclidean ball, every sequence of nonempty compact convex sets has a subsequence converging in Hausdorff distance. Its limit is again nonempty, compact and convex.

**How the definition helps.** Support functions turn the geometric selection problem into compactness of a family of functions on the unit sphere. In our own proof, an origin-centered ball of radius R containing all sets bounds every support value in absolute value by R. Changing direction by distance δ changes a support value by at most Rδ. The Arzelà–Ascoli theorem then gives a uniformly convergent subsequence. Extend the limit from unit directions by scaling its value by the vector length. Like every function in the sequence, this extension satisfies h(x + y) ≤ h(x) + h(y). The support-function representation theorem gives a nonempty compact convex limit set, and the distance identity gives Hausdorff convergence.

**Wikipedia:** [Support function](https://en.wikipedia.org/wiki/Support_function). It says: “The mapping τ is an isometry between this cone, endowed with the Hausdorff metric, and a subcone of the family of continuous functions on Sⁿ⁻¹ with the uniform norm.”

**Sources:** none listed. No primary source with a working link was found.

### Separation rules out flat transversals

**Remember:** A flat meeting every hull makes the hulls of two groups meet.

*Makes the theorem clean to state or prove.* MSC 52A35 (Helly-type theorems and geometric transversal theory). arXiv cs.CG, math.MG. Level 3: graduate.

**Definition.** Call k nonempty compact Euclidean sets well-separated if every split into two nonempty groups admits a hyperplane with the groups on opposite open sides. A transversal is an affine subspace meeting each set under consideration.

**Problem.** For 2 ≤ k ≤ d + 1 in ℝᵈ, well-separated sets have no transversal of dimension k − 2 to their convex hulls. The converse also holds.

**How the definition helps.** Strict separation turns a question about a flat meeting many hulls into a test on two groups at a time. In our own proof, points chosen on one (k − 2)-dimensional flat from k hulls must be affinely dependent. Splitting a dependence by coefficient sign gives two convex combinations with the same value, so strict separation fails. Conversely, two compact convex hulls without a strict separator meet by the separation theorem. Write their common point as a convex combination on each side and group terms from the same set. The two expressions give dependent representatives, using zero coefficients for unused sets. Their affine span fits inside a flat of dimension k − 2.

**Paper or page:** [Well-Separation and Hyperplane Transversals in High Dimensions](https://arxiv.org/abs/2209.02319v1). It says: “are well-separated if and only if their convex hulls have no (k − 2)-transversal.”

**Sources:**

- [Well-Separation and Hyperplane Transversals in High Dimensions, Lemma 2.1](https://arxiv.org/abs/2209.02319v1)

### Polynomial coefficients make mixed volume linear under Minkowski addition

**Remember:** Expand the volume polynomial and compare the coefficient using each weight once.

*True by definition.* MSC 52A39 (Mixed volumes and related topics in convex geometry). arXiv math.MG. Level 3: graduate.

**Definition.** The Minkowski sum of two sets consists of all sums with one point from each set. The volume of a weighted Minkowski sum of n convex bodies in ℝⁿ is a polynomial in the nonnegative weights. Define their mixed volume as the coefficient of the product of all n weights, divided by n!. Another formula uses an alternating sum of the volumes of Minkowski sums over subsets of the bodies.

**Problem.** Mixed volume is symmetric and additive under Minkowski addition in each argument. Scaling any one argument by a positive factor scales the mixed volume by the same factor.

**How the definition helps.** Our own proof makes both rules a coefficient check in the volume polynomial. For the first argument αA + βB, first give A and B separate weights and then substitute αt and βt for them. Only terms linear in one of those two weights contribute to the coefficient linear in t and in every other weight. This gives the sum of the two mixed volumes weighted by α and β. Symmetry follows by renaming the weights. The work lies in proving that the volume is polynomial and that its coefficients agree with the alternating-sum formula.

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

**How the definition helps.** Our own proof gets both rules by comparing coefficients of the thickened volumes. Rigid motions preserve volume and carry each thickened set to the corresponding thickened image. Thickening sK by t is the same as thickening K by t/s and then scaling by s, which multiplies volume by sⁿ. The coefficient of tʲ therefore gains the factor sⁿ⁻ʲ. Defining volume and surface area separately would require separate checks. The work here is Steiner’s theorem that the volume is a polynomial in the first place.

**Wikipedia:** [Hadwiger's theorem](https://en.wikipedia.org/wiki/Hadwiger%27s_theorem). It says: “The quermassintegrals Wⱼ : 𝕂ⁿ → ℝ are defined via Steiner's formula”

**Sources:** none listed. No primary source with a working link was found.

### John’s contacts bound symmetric bodies

**Remember:** Weighted contact directions measure every squared length.

*True by definition.* MSC 52A40 (Inequalities and extremum problems involving convexity in convex geometry). arXiv math.MG. Level 3: graduate.

**Definition.** A convex body symmetric about zero is in John’s position if its largest-volume inscribed ellipsoid is the Euclidean unit ball. Equivalently, it contains that ball and admits unit contact vectors where the two boundaries meet. Positive weights on those vectors express the identity matrix as a sum of their weighted outer products.

**Problem.** In dimension n, a convex body symmetric about zero and in John’s position lies inside the concentric ball of radius √n.

**How the definition helps.** In our own proof, the contact definition expresses each squared norm as a weighted sum of squared projections. Our own bound uses the two supporting hyperplanes at each pair of opposite contacts to bound each projection by one in magnitude. Our own calculation sums the diagonal entries of the identity to see that the weights sum to n. The work in our own account is John’s theorem, which derives the contact decomposition from maximal volume.

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

**How the definition helps.** The supremum formula gives convexity and closedness because its epigraph is an intersection of closed half-spaces, one for each x where f is finite. Our own comparison is that the classical formula needs a point with gradient p and gives no formula when p is outside the gradient’s range. The supporting-plane inequality proves that the two formulas agree wherever the classical formula applies. The biconjugate theorem uses separation to show when taking the conjugate twice recovers f. It applies when f is convex and its epigraph is closed.

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

**Definition.** For a d-dimensional simplicial polytope, whose faces are all simplices, fᵢ is the number of faces of dimension i. One sets f₋₁ = 1 for the empty face, and also counts the polytope itself as one face of dimension d. The h-vector is a fixed linear change of the f-vector that starts with h₀ = f₋₁.

**Problem.** The Dehn–Sommerville equations are the linear relations among the face numbers of a simplicial polytope. In terms of the h-vector they read hₖ = h of (d − k) for every k.

**How the definition helps.** With the empty face counted, the Euler relation and all the other equations become one family with one formula. The case k = −1 is Euler's formula, which on its own would need a separate constant term. The h-vector, defined from the f-vector including f₋₁, turns the whole family into a single symmetry. This form is what the g-theorem of Stanley, Billera and Lee builds on (our own remark). Proving the symmetry still needs real work, for example Euler's relation applied to every face figure (our own remark).

**Wikipedia:** [Dehn–Sommerville equations](https://en.wikipedia.org/wiki/Dehn%E2%80%93Sommerville_equations). It says: “When k = −1, it expresses the fact that Euler characteristic of a (d − 1)-dimensional simplicial sphere is equal to 1 + (−1)ᵈ⁻¹.”

**Sources:**

- [D. M. Y. Sommerville, The relations connecting the angle-sums and volume of a polytope in space of n dimensions, Proceedings of the Royal Society A 115 (1927) 103–119](https://doi.org/10.1098/rspa.1927.0078)

### Polars as hulls of facet normals turn facets into vertices

**Remember:** Each facet inequality gives one vertex of the polar.

*True by definition. Confidence: medium.* MSC 52B11 (\\(n\\)-dimensional polytopes), 52A20. arXiv math.MG. Level 3: graduate.

**Definition.** Let P be a polytope of full dimension with 0 in its interior. Each facet, a face of one lower dimension, has an inequality a · x ≤ 1 with one vector a. Define the polar as the convex hull of these vectors. The usual definition is the set of all y with y · x ≤ 1 for every x in P.

**Problem.** The facets of P correspond one to one with the vertices of its polar.

**How the definition helps.** With the hull definition, the polar is the convex hull of one vector per facet, so its vertices come from facets by definition. Each vector is a vertex. If one lay in the hull of the others, its inequality would follow from theirs, but a facet inequality is never redundant. The work goes into proving that this hull equals the usual polar defined by dot products. That proof uses the facet description of P and the separating hyperplane theorem, which separates a point from a closed convex set by a plane. The page states the correspondence, and this route is our own.

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

**How the definition helps.** With the cube-image definition, each face is the image of a face of the cube, and that face is again a cube. Let the zonotope be A(\[0, 1\]ⁿ) and let the face be where a linear function ℓ is largest. The composite ℓ ∘ A has the same maximum on the cube. So A maps the face of the cube where ℓ ∘ A is largest onto the given face. With the other definition, as all sums of one point from each of several segments, the proof must first describe the faces of such sums. The page states the result for facets, and the proof is our own.

**Wikipedia:** [Zonotope](https://en.wikipedia.org/wiki/Zonotope). It says: “The facets of any zonotope are themselves zonotopes of one lower dimension.”

**Sources:** none listed. No primary source with a working link was found.

### Counting lattice points at dilation zero makes the Ehrhart constant 1

**Remember:** Shrinking a polytope to the origin leaves one lattice point.

*True by definition. Confidence: medium.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)), 05A15. arXiv math.CO, math.MG. Level 3: graduate.

**Definition.** A lattice polytope is a convex polytope whose vertices have integer coordinates. For each integer t ≥ 0, let L(P, t) be the number of integer points in the dilation tP. At t = 0 the dilation is the single point 0, so L(P, 0) = 1.

**Problem.** The Ehrhart polynomial of a nonempty lattice polytope has constant term 1.

**How the definition helps.** If Ehrhart's theorem covers t = 0, the constant term is the value at t = 0, and counting gives 1. Ehrhart's theorem says that L(P, t) agrees with a polynomial in t. Many statements prove this only for t ≥ 1 and find the constant term separately. The page gives the constant term as the Euler characteristic of P, an alternating count of faces, which is 1 for a convex polytope. So the work goes into proving that the polynomial also agrees at t = 0. One way is through the generating function of L(P, t), our own comparison.

**Wikipedia:** [Ehrhart polynomial](https://en.wikipedia.org/wiki/Ehrhart_polynomial). It says: “When P is a closed convex polytope, L₀(P)=1.”

**Sources:** none listed. No primary source with a working link was found.

### Half-open pieces count Ehrhart coefficients

**Remember:** Each omitted facet adds one required unit in the lattice count.

*True by definition.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 3: graduate.

**Definition.** Triangulate a d-dimensional lattice polytope into simplices whose edge vectors from one vertex form a lattice basis in its span. Choose an interior point q outside every facet plane of the full-dimensional simplices. From each such simplex omit every facet whose plane separates q from its interior. The resulting pieces partition the polytope.

**Problem.** The lattice-point series counts points in each integer dilation, including dilation zero, using the dilation factor as the exponent of z. Multiplying by the (d + 1)st power of (1 − z) gives the Ehrhart numerator. Its coefficient of degree i counts pieces with i omitted facets.

**How the definition helps.** Opening selected facets replaces boundary inclusion-exclusion with a count of independent integer coefficients. In our own proof, moving slightly toward the chosen interior point assigns each boundary point to exactly one piece. At dilation n, the vertex coefficients sum to n and are integers because the simplex is unimodular. Each omitted facet forces its opposite coefficient to be positive. Subtracting one from each required positive coefficient shifts the counting series by one degree per omitted facet. Summing the disjoint contributions gives the numerator.

**Paper or page:** [Ehrhart theory of cosmological polytopes](https://arxiv.org/abs/2412.01602v2). It says: “h⁎ᵢ(P) = \|{j ∈ \[m\] : \|vis<sub>q</sub>(Δⱼ)\| = i}\|”

**Sources:**

- [Ehrhart theory of cosmological polytopes, Theorem 2.1](https://arxiv.org/abs/2412.01602v2)

### Reflexive polytopes have palindromic numerators

**Remember:** Integral facet normals turn strict inequalities into a shift by one.

*Rules out counterexamples.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 3: graduate.

**Definition.** A full-dimensional rational polytope containing zero in its interior is rational reflexive if its polar has integer vertices. The polar contains exactly the vectors whose dot product with every point of the polytope is at most one. Let q be the least positive integer making all vertices integral after scaling, and write u for z raised to q. In dimension d, multiply the lattice-count series by the (d + 1)st power of (1 − u) to obtain the Ehrhart numerator.

**Problem.** The Ehrhart numerator of a rational reflexive polytope is palindromic. Its coefficients read the same in either direction.

**How the definition helps.** In our own proof, integer polar vertices turn strict inequalities at scale m into closed inequalities at scale m − 1 for lattice points. Ehrhart reciprocity relates the series counting interior lattice points to the original series with the variable inverted. The shift then forces the coefficients to read equally in both directions. Our own interval \[−1,2\] lacks an integral polar and has numerator 1 + 2z.

**Paper or page:** [Boundary h\*-polynomials of rational polytopes](https://arxiv.org/abs/2206.04175v3). It says: “If P is a rational reflexive polytope, then h\*ₚ(z) is palindromic.”

**Sources:**

- [Esme Bajo and Matthias Beck, Boundary h\*-polynomials of rational polytopes (Theorem 5.1)](https://arxiv.org/abs/2206.04175v3)

### Support functions make Newton polytopes of products add as Minkowski sums

**Remember:** In each direction, the top parts of f and g multiply without cancelling.

*True by definition. Confidence: medium.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)), 14M25. arXiv math.AG, math.CO. Level 3: graduate.

**Definition.** The Newton polytope of a nonzero polynomial is the convex hull of the exponent vectors of its terms. Its support function gives, for each direction u, the largest value of u · e over those exponent vectors e. A compact convex set is determined by its support function.

**Problem.** Let f and g be nonzero polynomials over a field. The Newton polytope of fg is the Minkowski sum of their Newton polytopes. A Minkowski sum is the set of all sums of one point from each set.

**How the definition helps.** Support functions turn the claim into one equation per direction u. The support value for fg must be the sum of those for f and g. Fix u, and let the top part of f be the sum of its terms with the largest value of u · e. The top part of fg is the product of the top parts of f and g. This product is not zero, because a polynomial ring over a field has no zero divisors. The work goes into two standard facts, that support functions add under Minkowski sums and determine compact convex sets. The page states the result, and this proof is our own.

**Wikipedia:** [Newton polytope](https://en.wikipedia.org/wiki/Newton_polytope). It says: “Newt(fg) = Newt(f) + Newt(g)”

**Sources:** none listed. No primary source with a working link was found.

### Unimodular triangulations reveal Ehrhart coefficients

**Remember:** A lattice basis makes counting points inside a simplex count compositions.

*Rules out counterexamples.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO. Level 3: graduate.

**Definition.** A unimodular triangulation divides a lattice polytope into simplices whose edges from one vertex form a lattice basis in their span. To obtain the h-polynomial in dimension d, sum one term per face, including the empty face. For j vertices, use t raised to j times (1 − t) raised to d + 1 − j. The h\*-polynomial multiplies the series counting lattice points in integer dilations by the (d + 1)st power of (1 − t).

**Problem.** For a unimodular triangulation, the h-polynomial of the triangulation equals the h\*-polynomial of the lattice polytope.

**How the definition helps.** In our own proof, a lattice basis makes the points inside each dilated open face correspond to positive integer vertex coefficients. These coefficients sum to the dilation factor. A face with j vertices therefore contributes the jth power of t/(1 − t). Summing over faces, including the empty face at scale zero, gives the h-polynomial as the numerator. Our own segment \[0,2\] with no subdivision has h-polynomial 1 and lattice-count numerator 1 + t.

**Paper or page:** [Equatorial Flow Triangulations of Gorenstein Flow Polytopes](https://arxiv.org/abs/2408.05320v2). It says: “Given a unimodular triangulation T of a lattice polytope P, the h-vector of T is equal to the h\*-vector of P.”

**Sources:** none listed. No primary source with a working link was found.

### Unimodularity prevents Reeve’s missing sums

**Remember:** A lattice basis gives integer coordinates, not just empty simplices.

*Rules out counterexamples.* MSC 52B20 (Lattice polytopes in convex geometry (including relations with commutative algebra and algebraic geometry)). arXiv math.CO, math.MG. Level 3: graduate.

**Definition.** A lattice polytope has integer vertices. A unimodular triangulation divides it into simplices whose edge vectors from one vertex form a basis of the lattice parallel to each simplex. An empty lattice simplex contains no lattice points besides its vertices.

**Problem.** Suppose a lattice polytope has a unimodular triangulation. Then every lattice point in its dilation by a positive integer m is a sum of m original lattice points.

**How the definition helps.** In our own proof, a lattice basis gives nonnegative integer vertex coefficients summing to the dilation. Our own counterexample to using just emptiness is Reeve’s tetrahedron with vertices 0, (1,0,0), (0,1,0) and (1,1,2). Its double contains (1,1,1), but no two vertices sum to that point in our own example. The work in our own account is constructing the unimodular triangulation.

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

**Problem.** The alpha complex and the union of the original balls have the same homotopy type. This means maps in both directions compose to maps continuously deformable to the identities.

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

**Problem.** Laman's theorem gives a test for generic minimal rigidity in the plane. The graph must have 2\|V\| − 3 edges, and every proper set V′ of vertices must span at most 2\|V′\| − 3 edges.

**How the definition helps.** The word generically removes the special point positions, so rigidity depends only on the graph. Without it, the same graph can be rigid in one position and flexible in another. For example, the complete bipartite graph K₃,₃ passes Laman's count and is generically rigid. If one side lies on a line and the other side on a perpendicular line, it flexes (our own example). So Laman's count fails for such special positions. The hard part is still the proof that the count is enough for generic positions.

**Wikipedia:** [https://en.wikipedia.org/wiki/Laman<sub>graph</sub>](https://en.wikipedia.org/wiki/https%3A//en.wikipedia.org/wiki/Laman_graph). It says: “if one places the vertices of a Laman graph in the Euclidean plane, in general position, there will in general be no simultaneous continuous motion of all the points, other than Euclidean congruences, that preserves the lengths of all the graph edges.”

**Paper or page:** [Combinatorial Resultants in the Algebraic Rigidity Matroid](https://arxiv.org/abs/2103.08432). It says: “A bar-and-joint framework is generically minimally rigid in 2D iff its underlying graph G=(V,E) has exactly \|E\|=2\|V\|−3 edges, and any proper subset V′⊂V of vertices spans at most 2\|V′\|−3 edges.”

**Sources:**

- [Goran Malić, Ileana Streinu, Combinatorial Resultants in the Algebraic Rigidity Matroid, arXiv:2103.08432 (2021)](https://arxiv.org/abs/2103.08432)

### Chambers index zonotope vertices

**Remember:** Choose the winning endpoint of each segment to find a vertex.

*True by definition.* MSC 52C35 (Arrangements of points, flats, hyperplanes (aspects of discrete geometry)). arXiv cs.CG, math.MG. Level 3: graduate.

**Definition.** Define the zonotope as a sum of segments from zero to nonzero generating vectors. For each vector, draw the hyperplane through zero perpendicular to it. A chamber is a connected region off all these hyperplanes.

**Problem.** Chambers of this arrangement correspond bijectively to vertices of the zonotope.

**How the definition helps.** Writing the zonotope as a sum of segments lets each direction choose an endpoint of every segment independently. Our own proof uses this description of the projected cube, with each cube coordinate contributing one segment. Within a chamber, the signs of the dot products fix every endpoint, giving a unique maximizing vertex. Crossing to another chamber changes an endpoint and strictly lowers the original direction's value on the new sum. Every vertex uniquely maximizes some linear function, and a small perturbation avoids all the hyperplanes.

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

**Problem.** Find a compact convex set of least mean width whose support value in each direction u is at least a given C(u). With finitely many sampled directions, this problem becomes a linear program. The paper proves convergence as the sampled directions fill the sphere.

**How the definition helps.** Support values make both the constraints and the mean-width objective linear in the unknowns (our own). The program has variables for the chosen points and their support values Bᵢ, with linear constraints that link them. The convex hull of the chosen points then has support value Bᵢ in each sampled direction, so it is a valid contour. The remaining work bounds the error from checking only finitely many directions.

**Paper or page:** [Minimal Convex Environmental Contours](https://arxiv.org/abs/2308.01753v2). It says: “We solve this problem by reformulating it as a linear programming problem.”

**Sources:**

- [Åsmund Hausken Sande, Johan S. Wind, Minimal Convex Environmental Contours, arXiv:2308.01753v2 (2024)](https://arxiv.org/abs/2308.01753v2)

### Vertex multiplicities give an optimal colored Tverberg theorem for prime powers

**Remember:** At prime powers, let vertices be reused up to a fixed budget.

*Makes the theorem clean to state or prove.* MSC 52A37 (Other problems of combinatorial convexity), 55M35. arXiv math.CO, math.AT. Level 4: research.

**Definition.** Color the vertices of a simplex, and call a face rainbow if it has at most one vertex of each color. Give each vertex a multiplicity, the number of chosen faces allowed to contain it. For r = pᵏ, p prime, each of d + 1 ordinary colors has p − 1 vertices of each multiplicity 1, p, …, pᵏ⁻¹. One extra color has one vertex of multiplicity one.

**Problem.** Let N = k(p − 1)(d + 1). Every continuous map from this N-dimensional simplex to ℝᵈ sends some r rainbow faces to sets with a common point. The faces may share vertices, but no vertex appears more often than its multiplicity.

**How the definition helps.** The multiplicities let the theorem be stated for prime powers, which the disjoint version does not reach. They also shrink the simplex to dimension k(p − 1)(d + 1), below the classical (r − 1)(d + 1). By our own count, the multiplicities in each ordinary color add up to pᵏ − 1 = r − 1. When k = 1, every multiplicity is one, so the faces are disjoint. The result is then the theorem of Blagojević, Matschke and Ziegler for primes. The proof still needs configuration spaces called multiple chessboard complexes and a degree theory for equivariant maps.

**Paper or page:** [Optimal colored Tverberg theorems for prime powers](https://arxiv.org/abs/2005.11913v3). It says: “to compensate for this reduction by allowing vertices to repeatedly appear a controlled number of times in different rainbow simplices.”

**Sources:**

- [Duško Jojić, Gaiane Panina, Rade T. Živaljević, Optimal colored Tverberg theorems for prime powers, arXiv:2005.11913v3 (2021)](https://arxiv.org/abs/2005.11913v3)

### Complete sets of diameter D are intersections of D-balls around their points

**Remember:** A point fits exactly when it lies within range of every point.

*True by definition.* MSC 52A55 (Spherical and hyperbolic convexity), 52A30. arXiv math.MG. Level 4: research.

**Definition.** A set of diameter D is complete in the sense of diameter if no larger set containing it has diameter D. The diameter is the supremum of distances between points of the set.

**Problem.** Let K be a convex body of diameter D &gt; 0 in hyperbolic space. K is complete exactly when it equals the intersection of the closed balls of radius D centred at its points. The paper proves that both conditions are also equivalent to constant width D.

**How the definition helps.** The intersection of the balls is exactly the set of points that could join K without raising its diameter, in our own explanation. Completeness says every such point is already in K, so the two conditions match. This step works in any metric space, by our own check. The real work of the paper is to show that both conditions agree with several hyperbolic notions of constant width.

**Paper or page:** [Hyperbolic width functions and characterizations of bodies of constant width in the hyperbolic space](https://arxiv.org/abs/2303.16814v2). It says: “K is complete; K = ⋂ₓ∈K B(x,D);”

**Sources:**

- [Károly J. Böröczky, András Csépai, Ádám Sagmeister, Hyperbolic width functions and characterizations of bodies of constant width in the hyperbolic space, arXiv:2303.16814v2 (2024)](https://arxiv.org/abs/2303.16814v2)

### Wide disk domains give an elementary proof of the spherical Blaschke–Leichtweiss theorem

**Remember:** Intersect equal disks but keep every center inside.

*Makes the theorem clean to state or prove.* MSC 52A55 (Spherical and hyperbolic convexity), 52A40. arXiv math.MG. Level 4: research.

**Definition.** On the unit sphere, a wide r-disk domain is an intersection of closed spherical disks of radius r whose centers all lie in the intersection. A spherical Reuleaux triangle is the intersection of three disks of radius r centered at the vertices of an equilateral spherical triangle of side r.

**Problem.** For 0 &lt; r ≤ π/2, the spherical Reuleaux triangle has the least area among wide r-disk domains on the unit sphere. Blaschke and Leichtweiss proved this earlier for convex domains of constant width r, which have the same width in every direction. By our own reading of the abstract, those domains are wide r-disk domains.

**How the definition helps.** By our own reading, the larger class is easier to work with because each domain comes with explicit disks whose centers lie inside it. The paper proves the area bound for the whole class. Restricting to constant width then gives what the abstract calls 'a new and elementary proof of the Blaschke-Leichtweiss theorem'. By our own reading, the comparison with the three disks of the Reuleaux triangle is still the main work.

**Paper or page:** [On a strengthening of the Blaschke-Leichtweiss theorem](https://arxiv.org/abs/2101.00538v2). It says: “In this paper we extend this result to the family of wide r-disk domains of 𝕊², where 0 &lt; r ≤ π/2.”

**Sources:**

- [Károly Bezdek, On a strengthening of the Blaschke-Leichtweiss theorem, Journal of Geometry 114 (2023), no. 1, paper no. 2](https://arxiv.org/abs/2101.00538v2)

### For abstract polyhedra, the dual is the same order turned upside down

**Remember:** Turn the partial order upside down and you have the dual.

*True by definition. Confidence: medium.* MSC 52B05 (Combinatorial properties of polytopes and polyhedra (number of faces, shortest paths, etc.)), 06A11. arXiv math.MG, math.CO. Level 4: research.

**Definition.** An abstract polyhedron is a partially ordered set of vertices, edges and faces, ordered by containment. Some local conditions make it look like a polyhedron.

**Problem.** Every abstract polyhedron should have a dual with the same Euler characteristic (V − E + F) and the same orientability.

**How the definition helps.** For abstract polyhedra the dual is the same set with the order reversed, so the dual exists at once. For geometric polyhedra, the dual must be constructed. For some definitions of non-convex polyhedra, the abstract dual cannot be realized as a polyhedron of the same kind. So the hard question moves to realization: which abstract polyhedra and duals can be placed in space without degeneracy. This duality describes only the combinatorial structure, not the shape.

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

**Definition.** Put a number at each vertex of a triangulated surface of constant curvature k, where k = 1 (spherical) or k = −1 (hyperbolic). The discrete Laplacian combines differences of values along edges, using edge weights. As in the Euclidean case, the weights contain cotangents of certain combinations of angles. They are nonnegative exactly when the triangulation is Delaunay, meaning no vertex lies inside the circumcircle of a neighboring triangle.

**Problem.** On a smooth surface of constant curvature k, the conformal factor f of a conformal vector field satisfies Δf = −2kf. A conformal vector field is an infinitesimal motion that preserves angles. On a simply connected triangulated surface, the paper proves the same equation for discrete conformal vector fields and its discrete Laplacians.

**How the definition helps.** The weights are chosen so that the discrete operator satisfies the same eigenvalue equation as the smooth one, with no correction terms. The paper proves an equivalence (Theorems 1.8 and 1.9). A function u is a −2k eigenfunction exactly when some vertex motion changes each edge length at a rate set by u at its ends. Such motions are discrete conformal deformations, which rescale edge lengths by factors at the vertices or keep angles between circumcircles. The same weights give a discrete version of the smooth formula for the area of a convex body from its support function. The work is to relate these edge-length equations to motions of the vertices.

**Paper or page:** [Discrete Laplacians -- spherical and hyperbolic](https://arxiv.org/abs/2408.04877v2). It says: “We show that the conformal factors of discrete conformal vector fields on a triangulated surface of curvature k ∈ {−1,1} are −2k-eigenfunctions of our discrete Laplacians, exactly as in the smooth setting.”

**Sources:**

- [Ivan Izmestiev, Wai Yeung Lam, Discrete Laplacians -- spherical and hyperbolic, Journal of the London Mathematical Society (2025); arXiv:2408.04877](https://arxiv.org/abs/2408.04877v2)
