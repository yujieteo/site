### Counting residues gives Hermite’s floor identity

**Remember:** Split the integers into residue classes before counting.

*True by definition.* MSC 97F40 (Integers, rational numbers (educational aspects)), 11A07. arXiv math.HO. Level 1: early undergraduate.

**Definition.** For x ≥ 0, view the floor of x as the number of positive integers at most x. The usual presentation calls it the greatest integer at most x.

**Problem.** Let x ≥ 0 and let n be a positive integer. Then ⌊x⌋ + ⌊x + 1/n⌋ + ⋯ + ⌊x + (n − 1)/n⌋ = ⌊nx⌋.

**How the definition helps.** Counting integers makes the terms on the left count disjoint parts of the set on the right (our own proof). Every positive integer has a unique form nk − j with k ≥ 1 and 0 ≤ j &lt; n. For a fixed j, the inequality nk − j ≤ nx becomes k ≤ x + j/n. The floor counts precisely these choices of k. Uniqueness comes from division with remainder.

**Paper or page:** [Hermite's identity and the quadratic reciprocity law](https://arxiv.org/abs/2206.01170v1). It says: “For all real values x ≥ 0 and all natural numbers n ≥ 1 we have ⌊x⌋ + ⌊x + 1/n⌋ + … + ⌊x + (n−1)/n⌋ = ⌊nx⌋.”

**Sources:**

- [Franz Lemmermeyer, Hermite's identity and the quadratic reciprocity law](https://arxiv.org/abs/2206.01170v1)

### Mediants minimize the denominator

**Remember:** Add the two fraction vectors.

*True by definition.* MSC 97F40 (Integers, rational numbers (educational aspects)), 11B57. arXiv math.HO. Level 1: early undergraduate.

**Definition.** For fractions a/b and c/d in lowest terms with positive denominators, call (a + c)/(b + d) their mediant. Think of the fractions as vectors (b, a) and (d, c), not just points on the number line.

**Problem.** If a/b &lt; c/d and bc − ad = 1, the mediant is the unique fraction between them with smallest positive denominator.

**How the definition helps.** Adding the two vectors gives the smallest possible denominator once they form an integer basis (our own proof). Their determinant is one, so the inverse matrix has integer entries. Every intermediate reduced fraction has a vector with positive coordinates in this basis because its slope lies strictly between the endpoint slopes. Its denominator is therefore mb + nd with positive integers m and n. Equality with b + d requires m = n = 1. The resulting vector is reduced because its coordinates in the integer basis are both one.

**Wikipedia:** [Mediant (mathematics)](https://en.wikipedia.org/wiki/Mediant_%28mathematics%29). It says: “The vertex of the parallelogram opposite to the origin of coordinates is the point (b+d,a+c), which is the mediant of a/b and c/d.”

**Sources:** none listed. No primary source with a working link was found.

### Powers of ten detect terminating decimals

**Remember:** A reduced denominator must divide a power of ten.

*True by definition.* MSC 97F40 (Integers, rational numbers (educational aspects)), 11A63. arXiv math.HO. Level 1: early undergraduate.

**Definition.** A number has a terminating decimal if it admits a representation as an integer divided by 10ᵏ for some nonnegative integer k. Reading the k decimal places as powers of ten gives this test without performing long division.

**Problem.** A reduced fraction terminates in base ten exactly when its positive denominator has no prime factors other than 2 and 5.

**How the definition helps.** The fraction form reduces termination to whether the denominator divides some power of ten (our own). In our own proof, reducing cancels only factors already in the power of ten. Conversely, the denominator can be multiplied by enough twos and fives to reach a power of ten (our own). The work is connecting positional decimal notation to the denominator 10ᵏ (our own).

**Wikipedia:** [Repeating decimal](https://en.wikipedia.org/wiki/Repeating_decimal). It says: “if all the prime factors of the denominator of the fully reduced fractional form are also factors of the base.”

**Paper or page:** [Length of Reciprocal of Product of Powers of 2 and 5](https://proofwiki.org/wiki/Length_of_Reciprocal_of_Product_of_Powers_of_2_and_5). It says: “when expressed as a decimal expansion, terminate after m digits.”

**Sources:** none listed. No primary source with a working link was found.

### Angles make roots of unity cyclic

**Remember:** The nth roots divide the circle into n equal arcs.

*True by definition.* MSC 97F50 (Real numbers, complex numbers (educational aspects)), 12D05. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Describe a point on the unit circle by its counterclockwise angle from 1, measured in turns. Two real numbers represent the same point when they differ by an integer. Cartesian coordinates use the real and imaginary parts instead.

**Problem.** Under multiplication, the complex nth roots of 1 form a group isomorphic to the integers modulo n under addition, for n positive.

**How the definition helps.** In turn coordinates, raising to the nth power multiplies the angle by n (our own). In our own description, the solutions are the n multiples of 1/n modulo one turn, so their indices add modulo n. The work is proving that angles add when unit complex numbers multiply, by Euler’s formula (our own).

**Paper or page:** [Isomorphism between Roots of Unity under Multiplication and Integers under Modulo Addition](https://proofwiki.org/wiki/Isomorphism_between_Roots_of_Unity_under_Multiplication_and_Integers_under_Modulo_Addition). It says: “Then (Rₙ, ×) and (ℤₙ, +ₙ) are isomorphic algebraic structures.”

**Sources:** none listed. No primary source with a working link was found.

### Signed triangles add to polygon area

**Remember:** Signed pieces cancel where unsigned pieces overcount.

*Makes the theorem clean to state or prove.* MSC 97G30 (Area and volume (educational aspects)), 51N20, 01A50. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Use half the determinant of the vectors from the first vertex to the second and third, in that order. This gives a signed triangle area that reverses sign when the vertex order reverses.

**Problem.** For a simple polygon traced counterclockwise, sum the signed triangle areas from any fixed point to successive edges to get its area.

**How the definition helps.** Signed areas cancel along shared edges, so the reference point can lie anywhere (our own proof). Split the polygon into counterclockwise triangles. For each triangle, expanding determinants shows that its three edge contributions sum to its area. Each internal edge occurs twice in opposite directions, leaving exactly the boundary terms. The proof uses the fact that every simple polygon admits such a triangulation.

**Wikipedia:** [Shoelace formula](https://en.wikipedia.org/wiki/Shoelace_formula). It says: “The triangle formula sums up the oriented areas Aᵢ of triangles OPᵢPᵢ₊₁:”

**Sources:** none listed. No primary source with a working link was found.

### Equilateral triangles have no unique Euler line

**Remember:** A single center cannot pick out a line.

*Rules out counterexamples.* MSC 97G40 (Plane and solid geometry (educational aspects)), 01A50, 51M04. arXiv math.HO. Level 1: early undergraduate.

**Definition.** For a triangle with three noncollinear vertices, its circumcenter is the center of the circle through those vertices. Its centroid is the average of their position vectors. Unless the triangle is equilateral, the line through these centers is its Euler line.

**Problem.** Every nonequilateral triangle determines a unique Euler line, which also contains the orthocenter, where the altitudes meet.

**How the definition helps.** Excluding equilateral triangles gives two distinct centers, which determine one line. In an equilateral triangle the centers coincide, so every line through that point contains both. Our own explanation separates two facts that need proof. Coincidence forces the triangle to be equilateral, and the orthocenter lies on the line in every other case.

**Wikipedia:** [Euler line](https://en.wikipedia.org/wiki/Euler_line). It says: “In equilateral triangles, these four points coincide, but in any other triangle they are all distinct from each other”

**Sources:** none listed. No primary source with a working link was found.

### Rhombi include squares for the diagonal test

**Remember:** The diagonal test does not check for right angles.

*Makes the theorem clean to state or prove.* MSC 97G40 (Plane and solid geometry (educational aspects)), 01A20, 51M04. arXiv math.HO. Level 1: early undergraduate.

**Definition.** A rhombus is a simple plane quadrilateral with four equal sides. Here the quadrilateral has positive area and four distinct vertices. Euclid’s definition excluded squares.

**Problem.** A simple quadrilateral is a rhombus exactly when its diagonals bisect each other at right angles.

**How the definition helps.** Including squares makes perpendicular diagonals that bisect each other an exact test for a rhombus. In our own proof, each pair of opposite vertices lies on the perpendicular bisector of the other pair. Conversely, the four right triangles at the intersection have equal corresponding legs, so their hypotenuses are equal.

**Wikipedia:** [Rhombus](https://en.wikipedia.org/wiki/Rhombus). It says: “Euclid's original definition and some English dictionaries' definition of rhombus excludes squares, but modern mathematicians prefer the inclusive definition.”

**Paper or page:** [An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406v3). It says: “In every rhombus the diagonals intersect at their midpoints and are mutually perpendicular.”

**Sources:**

- [Peter M Johnson, An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406v3)

### Congruent shapes make similarity reflexive

**Remember:** Allow scale one so each shape resembles itself.

*Rules out counterexamples.* MSC 97G50 (Transformation geometry (educational aspects)), 51M05. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Define similarity by a rigid motion and a positive scale factor, allowing scale factor 1. The narrower classroom convention insists that similar shapes have different sizes.

**Problem.** Similarity is an equivalence relation on plane figures.

**How the definition helps.** Allowing scale factor one makes each figure similar to itself (our own explanation). Inverses have reciprocal scale factors, and composing two similarities multiplies their factors. An enlargement followed by its inverse illustrates why excluding factor one also breaks the composition rule.

**Wikipedia:** [Similarity (geometry)](https://en.wikipedia.org/wiki/Similarity_%28geometry%29). It says: “Two congruent shapes are similar, with a scale factor of 1.”

**Sources:** none listed. No primary source with a working link was found.

### Center planes determine great circles

**Remember:** Two independent radius vectors span one plane.

*True by definition.* MSC 97G60 (Plane and spherical trigonometry (educational aspects)), 51M09. arXiv math.HO. Level 1: early undergraduate.

**Definition.** A great circle is the intersection of a sphere with a plane through its center. Antipodal points lie at opposite ends of a diameter.

**Problem.** Two distinct nonantipodal points determine exactly one great circle.

**How the definition helps.** Defining great circles by center planes reduces uniqueness to the plane spanned by two independent radius vectors (our own explanation). Opposite poles give dependent vectors and lie on infinitely many great circles. Starting instead from locally shortest spherical paths requires proving that these paths trace arcs of great circles.

**Wikipedia:** [Great circle](https://en.wikipedia.org/wiki/Great_circle). It says: “For any pair of distinct non-antipodal points on the sphere, there is a unique great circle passing through both.”

**Sources:** none listed. No primary source with a working link was found.

### Directed angles add without cases

**Remember:** Subtract directions, then cancel the middle one.

*True by definition. Confidence: medium.* MSC 97G60 (Plane and spherical trigonometry (educational aspects)), 51M04. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Measure the directions of rays counterclockwise from one fixed ray at their common vertex. Their directed angle is the second direction minus the first, modulo 360°. The ordinary smaller angle forgets the turn direction.

**Problem.** The directed angle from ray A to B plus that from B to C equals that from A to C modulo 360°.

**How the definition helps.** Subtracting directions makes the middle direction cancel (our own). In our own counterexample, directions 0°, 90°, and 0° give two smaller angles of 90° but an overall angle of 0°. The geometric work is showing that differences of direction agree with ordinary angles on counterclockwise turns of at most 180° (our own).

**Wikipedia:** [Angle](https://en.wikipedia.org/wiki/Angle). It says: “the amount of rotation about the vertex of one ray to the other.”

**Sources:** none listed. No primary source with a working link was found.

### Dot products handle vertical perpendiculars

**Remember:** No division is needed to test a right angle.

*True by definition.* MSC 97G70 (Analytic geometry, vector algebra (educational aspects)), 51N20. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Describe each line by any nonzero vector parallel to it. Define two line directions to be perpendicular when their dot product is zero. Slopes use a quotient that is undefined for vertical lines.

**Problem.** In orthonormal plane coordinates, directions (a, b) and (c, d) are perpendicular exactly when ac + bd = 0. Both direction vectors must be nonzero.

**How the definition helps.** The zero dot product works for every direction vector because it never divides by a horizontal component (our own). In our own comparison, the negative reciprocal slope test cannot handle the vertical direction. The work is to prove the dot product formula in terms of the cosine of the angle (our own).

**Wikipedia:** [Dot product](https://en.wikipedia.org/wiki/Dot_product). It says: “the cosine of the (non oriented) angle between two vectors of length one is defined as their dot product.”

**Sources:** none listed. No primary source with a working link was found.

### Factoring makes rank symmetric

**Remember:** Transpose both factors and reverse their order.

*True by definition.* MSC 97H60 (Linear algebra (educational aspects)), 15A03. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Define rank as the smallest k for which A = BC, where B has k columns and C has k rows. Allow k = 0 for the zero matrix. The usual definition counts independent columns.

**Problem.** Every real matrix has row and column spaces of equal dimension.

**How the definition helps.** Transposing a product reverses its factors without changing their shared dimension (our own proof). Applying this twice shows that a matrix and its transpose have the same least shared dimension. If A = BC, the columns of B span all columns of A. Conversely, take a basis of the column space for B and put the coordinates of each column of A in C. Thus the least shared dimension equals column rank. Applying that equality to the transpose gives row rank.

**Paper or page:** [On the Column and Row Ranks of a Matrix](https://arxiv.org/abs/2112.06638v1). It says: “is equal to the dimension of its row space, i.e., the row rank and the column rank of a matrix A are equal.”

**Sources:**

- [Jun Lu, On the Column and Row Ranks of a Matrix](https://arxiv.org/abs/2112.06638v1)

### Odd parts become Fibonacci tilings

**Remember:** End each odd part with one square.

*True by definition.* MSC 97K20 (Combinatorics (educational aspects)), 11B39. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Represent each positive odd part of an ordered sum by a row of dominoes followed by one single square. An ordinary ordered sum records only the part sizes.

**Problem.** For n ≥ 1, ordered sums of n into positive odd parts are counted by the nth Fibonacci number, starting with 1, 1.

**How the definition helps.** Marking each part with a final square turns a sum into a tiling whose last tile can be removed. In our own description, a part of size 2k + 1 gives k dominoes and one square. Removing the final square leaves an unrestricted tiling of length n − 1. To reverse the process, append a square and cut after every square. Splitting tilings by their first tile gives the Fibonacci recurrence.

**Paper or page:** [Classical Fibonacci compositions](https://arxiv.org/abs/2509.04493v1). It says: “the number of compositions of n with only odd parts is the nth Fibonacci number”

**Sources:**

- [Brian Hopkins, Classical Fibonacci compositions](https://arxiv.org/abs/2509.04493v1)

### Parent edges count tree vertices

**Remember:** Every vertex except the root owns one edge.

*True by definition.* MSC 97K30 (Graph theory (educational aspects)), 05C05. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Choose a root vertex of a tree. For every other vertex, call the first edge on the unique path to the root its parent edge. The unrooted definition has no such assignment.

**Problem.** A finite tree with n vertices has n − 1 edges.

**How the definition helps.** Orienting edges toward the root pairs every nonroot vertex with exactly one outgoing edge. In our own explanation, removing an edge leaves two components. Its endpoint in the component without the root must use that edge first to reach the root. The work is proving that a connected graph without cycles has a unique path between any two vertices.

**nLab:** [tree](https://ncatlab.org/nlab/show/tree). It says: “for every vertex x in G there is exactly one directed path from x to the root.”

**Paper or page:** [Comportamientos extraños del infinito: Gráficas Infinitas](https://arxiv.org/abs/2501.17870v1). It says: “Entonces existe una biyección φ: V ∖ {v₀} ⟶ E”

**Sources:**

- [David J. Fernández-Bretón, Jesús A. Flores Hinostrosa, V. Adrián Meza-Campa, and L. Gerardo Núñez Olmedo, Comportamientos extraños del infinito: Gráficas Infinitas](https://arxiv.org/abs/2501.17870v1)

### Inner products give the parallelogram law

**Remember:** Square the sum and difference, then cancel the mixed terms.

*True by definition.* MSC 97H60 (Linear algebra (educational aspects)), 46C05. arXiv math.HO. Level 2: later undergraduate.

**Definition.** Define squared length as the inner product of a vector with itself. A geometric proof can instead start from two triangles and the law of cosines.

**Problem.** The sum of the squared diagonal lengths equals the sum of the squared side lengths of a parallelogram.

**How the definition helps.** The inner product makes the two mixed terms cancel when the diagonal squares are added (our own). In our own comparison, the geometric work moves to showing that the coordinate inner product recovers ordinary Euclidean length. The historical converse is harder and reconstructs an inner product from a norm satisfying this law.

**Wikipedia:** [Parallelogram law](https://en.wikipedia.org/wiki/Parallelogram_law). It says: “in an inner product space the parallelogram law is an algebraic identity, readily established using the properties of the inner product:”

**Paper or page:** [An Elementary Expository Study: From Metric Spaces to Hilbert Spaces](https://arxiv.org/abs/2510.24997v1). It says: “Let x and y be elements of an inner product space H. Then the following identity holds: ‖x + y‖² + ‖x − y‖² = 2(‖x‖² + ‖y‖²).”

**Sources:**

- [Pascual Jordan and John von Neumann, On Inner Products in Linear, Metric Spaces (1935)](https://doi.org/10.2307/1968653)

### Row swaps rescue triangular factorization

**Remember:** Swap a nonzero pivot into place.

*Makes the theorem clean to state or prove.* MSC 97H60 (Linear algebra (educational aspects)), 15A23. arXiv math.HO. Level 2: later undergraduate.

**Definition.** Allow a row permutation P in the factorization PA = LU. Here L is lower triangular with ones on its diagonal and U is upper triangular. The narrower factorization insists on A = LU.

**Problem.** For every invertible real square matrix A, some row permutation P gives PA = LU.

**How the definition helps.** Allowing row swaps lets elimination use a nonzero entry below a zero diagonal entry. In our own example, the matrix with rows (0, 1) and (1, 0) has no factorization of the stated kind without a swap. Its first row forces the first diagonal entry of U to vanish, making U singular. After each elimination step, the remaining square block is invertible, so its first column contains a nonzero entry (our own explanation).

**Wikipedia:** [LU decomposition](https://en.wikipedia.org/wiki/LU_decomposition). It says: “Without a proper ordering or permutations in the matrix, the factorization may fail to materialize.”

**Paper or page:** [Numerical Matrix Decomposition](https://arxiv.org/abs/2107.02579v7). It says: “to compute a full LU decomposition of an n × n nonsingular matrix.”

**Sources:**

- [Jun Lu, Numerical Matrix Decomposition](https://arxiv.org/abs/2107.02579v7)

### Darboux bounds absorb bad endpoints

**Remember:** Make the endpoint intervals short and the middle intervals fine.

*True by definition.* MSC 97I50 (Integral calculus (educational aspects)), 26A42. arXiv math.HO. Level 2: later undergraduate.

**Definition.** For a bounded function on a closed interval, choose a partition into subintervals. Multiply each width by the supremum on that subinterval and add to get the upper sum. Using infima gives the lower sum. Darboux integrability means for each positive tolerance, some partition makes the gap smaller than that tolerance.

**Problem.** A real function bounded on a closed interval and continuous at every interior point is Darboux integrable.

**How the definition helps.** Upper and lower sums bound the entire contribution of the endpoint intervals to their gap (our own proof). That bound is twice the maximum allowed absolute value times the total endpoint width. Choose short endpoint intervals first. Uniform continuity on the closed middle interval then gives a partition with a small gap there too. Passing to the definition using sampled Riemann sums requires the theorem equating the two integrals.

**Paper or page:** [Bounded Function Continuous on Open Interval is Darboux Integrable](https://proofwiki.org/wiki/Bounded_Function_Continuous_on_Open_Interval_is_Darboux_Integrable). It says: “Let f be continuous on (a, b). Let f be bounded on \[a, b\]. Then f is Darboux integrable on \[a, b\].”

**Sources:** none listed. No primary source with a working link was found.
