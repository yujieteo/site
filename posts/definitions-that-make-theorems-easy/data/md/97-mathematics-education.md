### Counting residues gives Hermite’s floor identity

**Remember:** The floor counts positive integers up to the cutoff.

*True by definition.* MSC 97F40 (Integers, rational numbers (educational aspects)), 11A07. arXiv math.HO. Level 1: early undergraduate.

**Definition.** For x ≥ 0, read ⌊x⌋ as the number of positive integers at most x.

**Problem.** Let x ≥ 0 and let n be a positive integer. Then ⌊x⌋ + ⌊x + 1/n⌋ + ⋯ + ⌊x + (n − 1)/n⌋ = ⌊nx⌋.

**How the definition helps.** Count the positive integers at most nx by their residue modulo n (our own proof). Each one is nk − j with k ≥ 1 and 0 ≤ j &lt; n, and nk − j ≤ nx means k ≤ x + j/n. So the class of j contributes ⌊x + j/n⌋, and the classes together give ⌊nx⌋.

**Paper or page:** [Hermite's identity and the quadratic reciprocity law](https://arxiv.org/abs/2206.01170v1). It says: “For all real values x ≥ 0 and all natural numbers n ≥ 1 we have ⌊x⌋ + ⌊x + 1/n⌋ + … + ⌊x + (n−1)/n⌋ = ⌊nx⌋.”

**Sources:**

- [Franz Lemmermeyer, Hermite's identity and the quadratic reciprocity law](https://arxiv.org/abs/2206.01170v1)

### Mediants minimize the denominator

**Remember:** The mediant is the sum of the two fraction vectors.

*True by definition.* MSC 97F40 (Integers, rational numbers (educational aspects)), 11B57. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Treat reduced fractions a/b and c/d with positive denominators as integer vectors (b, a) and (d, c), so that their mediant (a + c)/(b + d) is the vector sum. When bc − ad = 1 these two vectors form a basis of the integer lattice.

**Problem.** If a/b &lt; c/d and bc − ad = 1, the mediant is the unique fraction between them with smallest positive denominator.

**How the definition helps.** Because the vectors form a lattice basis, a fraction strictly between them has a vector m(b, a) + n(d, c) with positive integers m and n (our own proof). Its denominator mb + nd takes its smallest value b + d only when m = n = 1, which gives the mediant.

**Wikipedia:** [Mediant (mathematics)](https://en.wikipedia.org/wiki/Mediant_%28mathematics%29). It says: “The vertex of the parallelogram opposite to the origin of coordinates is the point (b+d,a+c), which is the mediant of a/b and c/d.”

**Sources:** none listed. No primary source with a working link was found.

### Powers of ten detect terminating decimals

**Remember:** A reduced denominator must divide a power of ten.

*True by definition.* MSC 97F40 (Integers, rational numbers (educational aspects)), 11A63. arXiv math.HO. Level 1: early undergraduate.

**Definition.** A number has a terminating decimal exactly when it equals an integer divided by 10ᵏ for some k ≥ 0, since k decimal places count units of 10⁻ᵏ.

**Problem.** A reduced fraction terminates in base ten exactly when its positive denominator has no prime factors other than 2 and 5.

**How the definition helps.** A reduced fraction p/q equals an integer over 10ᵏ exactly when q divides 10ᵏ, because p and q share no factor (our own). The divisors of powers of ten are exactly the numbers 2ᵃ5ᵇ (our own).

**Wikipedia:** [Repeating decimal](https://en.wikipedia.org/wiki/Repeating_decimal). It says: “if all the prime factors of the denominator of the fully reduced fractional form are also factors of the base.”

**Paper or page:** [Length of Reciprocal of Product of Powers of 2 and 5](https://proofwiki.org/wiki/Length_of_Reciprocal_of_Product_of_Powers_of_2_and_5). It says: “when expressed as a decimal expansion, terminate after m digits.”

**Sources:** none listed. No primary source with a working link was found.

### Angles make roots of unity cyclic

**Remember:** The nth roots divide the circle into n equal arcs.

*True by definition.* MSC 97F50 (Real numbers, complex numbers (educational aspects)), 12D05. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Describe a point on the unit circle by its counterclockwise angle from 1, measured in turns and counted modulo one turn. By Euler's formula, multiplying unit complex numbers adds their angles (our own).

**Problem.** For every positive integer n, the complex nth roots of 1 under multiplication form a group isomorphic to the integers modulo n under addition.

**How the definition helps.** Raising to the nth power multiplies the angle by n, so the nth roots of 1 have angles j/n for j = 0, …, n − 1 (our own). Multiplying two roots adds their angles, so their indices j add modulo n (our own).

**Paper or page:** [Isomorphism between Roots of Unity under Multiplication and Integers under Modulo Addition](https://proofwiki.org/wiki/Isomorphism_between_Roots_of_Unity_under_Multiplication_and_Integers_under_Modulo_Addition). It says: “Then (Rₙ, ×) and (ℤₙ, +ₙ) are isomorphic algebraic structures.”

**Sources:** none listed. No primary source with a working link was found.

### Signed triangles add to polygon area

**Remember:** Signed pieces cancel where unsigned pieces overcount.

*Makes the theorem clean to state or prove.* MSC 97G30 (Area and volume (educational aspects)), 51N20, 01A50. arXiv math.HO. Level 1: early undergraduate.

**Definition.** The signed area of a triangle PQR is half the determinant of the vectors Q − P and R − P. It is positive when the vertices run counterclockwise and changes sign when their order reverses.

**Problem.** For a simple polygon P₁…Pₙ traced counterclockwise and any point O, the signed areas of the triangles OPᵢPᵢ₊₁ sum to the area of the polygon.

**How the definition helps.** Triangulate the polygon, orient each triangle counterclockwise, and check that the three signed areas from O to its edges sum to its area. Each internal edge appears in two triangles with opposite directions, so its two contributions cancel and only the boundary edges remain (our own proof).

**Wikipedia:** [Shoelace formula](https://en.wikipedia.org/wiki/Shoelace_formula). It says: “The triangle formula sums up the oriented areas Aᵢ of triangles OPᵢPᵢ₊₁:”

**Sources:** none listed. No primary source with a working link was found.

### Equilateral triangles have no unique Euler line

**Remember:** A single center cannot pick out a line.

*Rules out counterexamples.* MSC 97G40 (Plane and solid geometry (educational aspects)), 01A50, 51M04. arXiv math.HO. Level 1: early undergraduate.

**Definition.** The Euler line of a triangle is the line through its circumcenter, the center of the circle through the three vertices, and its centroid, the average of the vertex position vectors. The two points coincide only in an equilateral triangle, so only there is no line determined.

**Problem.** Every nonequilateral triangle determines a unique Euler line, which also contains the orthocenter, where the altitudes meet.

**How the definition helps.** Put the circumcenter at the origin and write a, b, c for the vertex vectors (our own). Equal radii give (b + c)·(b − c) = 0, so a + b + c lies on the altitude from a, and in the same way on every altitude. So the orthocenter is a + b + c, three times the centroid, on the line through the origin and the centroid.

**Wikipedia:** [Euler line](https://en.wikipedia.org/wiki/Euler_line). It says: “In equilateral triangles, these four points coincide, but in any other triangle they are all distinct from each other”

**Sources:** none listed. No primary source with a working link was found.

### Rhombi include squares for the diagonal test

**Remember:** Four equal sides, square corners allowed.

*Makes the theorem clean to state or prove.* MSC 97G40 (Plane and solid geometry (educational aspects)), 01A20, 51M04. arXiv math.HO. Level 1: early undergraduate.

**Definition.** A rhombus is a simple quadrilateral of positive area with four equal sides, squares included. Each vertex is then equally far from its two neighbours, so both ends of each diagonal lie on the perpendicular bisector of the other diagonal.

**Problem.** A simple quadrilateral is a rhombus exactly when its diagonals bisect each other at right angles.

**How the definition helps.** Opposite vertices lie on the perpendicular bisector of the other diagonal, so the diagonals are perpendicular and bisect each other (our own proof). Conversely, the four right triangles at the crossing have equal legs, so the four sides are equal. Excluding squares, as Euclid did, would break this exact test.

**Wikipedia:** [Rhombus](https://en.wikipedia.org/wiki/Rhombus). It says: “Euclid's original definition and some English dictionaries' definition of rhombus excludes squares, but modern mathematicians prefer the inclusive definition.”

**Paper or page:** [An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406v3). It says: “In every rhombus the diagonals intersect at their midpoints and are mutually perpendicular.”

**Sources:**

- [Peter M Johnson, An analysis of Euclid's geometrical foundations](https://arxiv.org/abs/2501.17406v3)

### Congruent shapes make similarity reflexive

**Remember:** Allow scale one so each shape resembles itself.

*True by definition.* MSC 97G50 (Transformation geometry (educational aspects)), 51M05. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Two plane figures are similar if a dilation by some positive factor, possibly one, followed by a rigid motion maps one onto the other.

**Problem.** Similarity is an equivalence relation on plane figures.

**How the definition helps.** Factor one makes every figure similar to itself (our own explanation). Inverting a similarity inverts its factor and composing similarities multiplies factors, which gives symmetry and transitivity. If factor one were excluded, an enlargement followed by its inverse would break transitivity (our own explanation).

**Wikipedia:** [Similarity (geometry)](https://en.wikipedia.org/wiki/Similarity_%28geometry%29). It says: “Two congruent shapes are similar, with a scale factor of 1.”

**Sources:** none listed. No primary source with a working link was found.

### Center planes determine great circles

**Remember:** Two independent radius vectors span one plane.

*True by definition.* MSC 97G60 (Plane and spherical trigonometry (educational aspects)), 51M09. arXiv math.HO. Level 1: early undergraduate.

**Definition.** A great circle is the intersection of a sphere with a plane through its center. So great circles through two points correspond to planes that contain the center and both points. Antipodal points lie at opposite ends of a diameter.

**Problem.** Two distinct nonantipodal points on a given sphere determine exactly one great circle of that sphere.

**How the definition helps.** Two distinct nonantipodal points have linearly independent radius vectors, which span exactly one plane through the center (our own explanation). Antipodal points have dependent vectors, and every plane containing their diameter gives a great circle through them.

**Wikipedia:** [Great circle](https://en.wikipedia.org/wiki/Great_circle). It says: “For any pair of distinct non-antipodal points on the sphere, there is a unique great circle passing through both.”

**Sources:** none listed. No primary source with a working link was found.

### Directed angles add without cases

**Remember:** Subtract directions, then cancel the middle one.

*True by definition. Confidence: medium.* MSC 97G60 (Plane and spherical trigonometry (educational aspects)), 51M04. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Give each ray from a common vertex a direction, its counterclockwise angle from one fixed ray. The directed angle from ray A to ray B is the direction of B minus the direction of A, modulo 360°.

**Problem.** The directed angle from ray A to B plus that from B to C equals that from A to C modulo 360°.

**How the definition helps.** The middle direction cancels: (B − A) + (C − B) = C − A (our own). The ordinary smaller angle fails, since directions 0°, 90° and 0° give two angles of 90° but a total of 0° (our own counterexample).

**Wikipedia:** [Angle](https://en.wikipedia.org/wiki/Angle). It says: “the amount of rotation about the vertex of one ray to the other.”

**Sources:** none listed. No primary source with a working link was found.

### Dot products handle vertical perpendiculars

**Remember:** No division is needed to test a right angle.

*True by definition.* MSC 97G70 (Analytic geometry, vector algebra (educational aspects)), 51N20. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Describe a line by any nonzero vector along it, and call two lines perpendicular when their direction vectors have dot product zero. Unlike a slope, this test never divides, so vertical lines need no special case (our own).

**Problem.** In orthonormal plane coordinates, directions (a, b) and (c, d) are perpendicular exactly when ac + bd = 0. Both direction vectors must be nonzero.

**How the definition helps.** In orthonormal coordinates, the dot product of nonzero vectors is the product of their lengths and the cosine of their angle (our own). So it vanishes exactly at a right angle. The negative-reciprocal slope test, by contrast, is undefined for a vertical direction (our own comparison).

**Wikipedia:** [Dot product](https://en.wikipedia.org/wiki/Dot_product). It says: “the cosine of the (non oriented) angle between two vectors of length one is defined as their dot product.”

**Sources:** none listed. No primary source with a working link was found.

### Factoring makes rank symmetric

**Remember:** Transpose both factors and reverse their order.

*True by definition.* MSC 97H60 (Linear algebra (educational aspects)), 15A03. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Define the rank of a matrix A as the smallest k with A = BC, where B has k columns and C has k rows. Take k = 0 for the zero matrix. Transposing gives Aᵀ = CᵀBᵀ with the same k, so A and Aᵀ have the same rank (our own proof).

**Problem.** Every real matrix has row and column spaces of equal dimension.

**How the definition helps.** In any factorization A = BC the columns of A lie in the span of the k columns of B, and a basis of the column space as B attains this, so the rank is the column-space dimension (our own proof). Applied to Aᵀ, the same rank is the row-space dimension.

**Paper or page:** [On the Column and Row Ranks of a Matrix](https://arxiv.org/abs/2112.06638v1). It says: “is equal to the dimension of its row space, i.e., the row rank and the column rank of a matrix A are equal.”

**Sources:**

- [Jun Lu, On the Column and Row Ranks of a Matrix](https://arxiv.org/abs/2112.06638v1)

### Odd parts become Fibonacci tilings

**Remember:** End each odd part with one square.

*True by definition.* MSC 97K20 (Combinatorics (educational aspects)), 11B39. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Write each odd part 2k + 1 as k dominoes followed by one square, and join these rows in order. The result is a tiling of length n by squares and dominoes that ends in a square, and cutting after each square recovers the parts.

**Problem.** For n ≥ 1, ordered sums of n into positive odd parts are counted by the nth Fibonacci number, starting with 1, 1.

**How the definition helps.** Removing the final square gives a bijection with all tilings of length n − 1 (our own bijection). Splitting by the first tile shows that tilings obey the Fibonacci recurrence, with one tiling each at lengths zero and one.

**Paper or page:** [Classical Fibonacci compositions](https://arxiv.org/abs/2509.04493v1). It says: “the number of compositions of n with only odd parts is the nth Fibonacci number”

**Sources:**

- [Brian Hopkins, Classical Fibonacci compositions](https://arxiv.org/abs/2509.04493v1)

### Parent edges count tree vertices

**Remember:** Every vertex except the root owns one edge.

*True by definition.* MSC 97K30 (Graph theory (educational aspects)), 05C05. arXiv math.HO. Level 1: early undergraduate.

**Definition.** Pick a root of a tree, and give each other vertex its parent edge, the first edge on its unique path to the root. This pairs each nonroot vertex with one edge.

**Problem.** A finite tree with n vertices has n − 1 edges.

**How the definition helps.** Every edge is the parent edge of exactly one vertex: removing it splits the tree in two, and its endpoint on the side without the root must use it first (our own explanation). So the n − 1 nonroot vertices match the edges one to one.

**nLab:** [tree](https://ncatlab.org/nlab/show/tree). It says: “for every vertex x in G there is exactly one directed path from x to the root.”

**Paper or page:** [Comportamientos extraños del infinito: Gráficas Infinitas](https://arxiv.org/abs/2501.17870v1). It says: “Entonces existe una biyección φ: V ∖ {v₀} ⟶ E”

**Sources:**

- [David J. Fernández-Bretón, Jesús A. Flores Hinostrosa, V. Adrián Meza-Campa, and L. Gerardo Núñez Olmedo, Comportamientos extraños del infinito: Gráficas Infinitas](https://arxiv.org/abs/2501.17870v1)

### Inner products give the parallelogram law

**Remember:** Square the sum and difference, then cancel the mixed terms.

*True by definition.* MSC 97H60 (Linear algebra (educational aspects)), 46C05. arXiv math.HO. Level 2: later undergraduate.

**Definition.** Define the squared length of a vector as its inner product with itself. It expands like a square: ‖x ± y‖² = ‖x‖² + ‖y‖² ± (⟨x, y⟩ + ⟨y, x⟩).

**Problem.** The sum of the squared diagonal lengths equals the sum of the squared side lengths of a parallelogram.

**How the definition helps.** For side vectors x and y the diagonals are x + y and x − y (our own explanation). Adding their expanded squared lengths cancels the mixed terms and leaves 2‖x‖² + 2‖y‖², the sum over the four sides.

**Wikipedia:** [Parallelogram law](https://en.wikipedia.org/wiki/Parallelogram_law). It says: “in an inner product space the parallelogram law is an algebraic identity, readily established using the properties of the inner product:”

**Paper or page:** [An Elementary Expository Study: From Metric Spaces to Hilbert Spaces](https://arxiv.org/abs/2510.24997v1). It says: “Let x and y be elements of an inner product space H. Then the following identity holds: ‖x + y‖² + ‖x − y‖² = 2(‖x‖² + ‖y‖²).”

**Sources:**

- [Pascual Jordan and John von Neumann, On Inner Products in Linear, Metric Spaces (1935)](https://doi.org/10.2307/1968653)

### Row swaps rescue triangular factorization

**Remember:** Swap a nonzero pivot into place.

*Makes the theorem clean to state or prove.* MSC 97H60 (Linear algebra (educational aspects)), 15A23. arXiv math.HO. Level 2: later undergraduate.

**Definition.** Allow a row permutation P before factoring, PA = LU, with L lower triangular with ones on its diagonal and U upper triangular. The permutation lets elimination swap a nonzero entry from lower down into a zero pivot position.

**Problem.** For every invertible real square matrix A, some row permutation P gives PA = LU.

**How the definition helps.** After each elimination step the remaining block is invertible, so its first column has a nonzero entry to swap into the pivot (our own explanation). Without swaps the matrix with rows (0, 1) and (1, 0) fails (our own example). Its first row forces the first diagonal entry of U to be zero, which makes U singular.

**Wikipedia:** [LU decomposition](https://en.wikipedia.org/wiki/LU_decomposition). It says: “Without a proper ordering or permutations in the matrix, the factorization may fail to materialize.”

**Paper or page:** [Numerical Matrix Decomposition](https://arxiv.org/abs/2107.02579v7). It says: “to compute a full LU decomposition of an n × n nonsingular matrix.”

**Sources:**

- [Jun Lu, Numerical Matrix Decomposition](https://arxiv.org/abs/2107.02579v7)

### Darboux bounds absorb bad endpoints

**Remember:** Make the endpoint intervals short and the middle intervals fine.

*True by definition.* MSC 97I50 (Integral calculus (educational aspects)), 26A42. arXiv math.HO. Level 2: later undergraduate.

**Definition.** A bounded function on a closed interval is Darboux integrable if, for every ε &gt; 0, some finite partition makes the sum of width times oscillation, supremum minus infimum, over its subintervals less than ε. So a few short subintervals cost little, however badly the function behaves there.

**Problem.** A real function bounded on a closed interval and continuous at every interior point is Darboux integrable.

**How the definition helps.** Bound \|f\| by some M &gt; 0 and make the two end subintervals so short that their total width is below ε/(4M), so they contribute less than ε/2 (our own proof). On the closed middle interval f is uniformly continuous, so a fine partition makes its contribution less than ε/2 as well.

**Paper or page:** [Bounded Function Continuous on Open Interval is Darboux Integrable](https://proofwiki.org/wiki/Bounded_Function_Continuous_on_Open_Interval_is_Darboux_Integrable). It says: “Let f be continuous on (a, b). Let f be bounded on \[a, b\]. Then f is Darboux integrable on \[a, b\].”

**Sources:** none listed. No primary source with a working link was found.
