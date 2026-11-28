### Basis coordinate maps classify spaces by dimension

**Remember:** Coordinates turn every n-dimensional space into lists of n numbers.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The coordinate map of an ordered basis sends each vector to its list of coefficients in that basis. It is a linear bijection onto Fⁿ, where the dimension n is the number of basis vectors.

**Problem.** Two finite-dimensional vector spaces over the same field are isomorphic, meaning related by a linear map with a linear inverse, exactly when their dimensions agree.

**How the definition helps.** Equal dimensions give both spaces coordinate maps onto the same Fⁿ, so one coordinate map followed by the inverse of the other is an isomorphism (our own). Conversely, an isomorphism takes a basis to a basis of the same size.

**Paper or page:** [Same Dimensional Vector Spaces are Isomorphic](https://proofwiki.org/wiki/Same_Dimensional_Vector_Spaces_are_Isomorphic). It says: “That is, V and W are isomorphic.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.70](https://linear.axler.net/LADR4e.pdf)

### Direct sums rule out ambiguous projections onto summands

**Remember:** Zero splits only as zeros, so every vector splits one way.

*Rules out counterexamples.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A finite sum of subspaces is direct if the only way to write zero as a sum of one vector from each subspace uses zero from every subspace. Then each vector has only one such decomposition, since two decompositions differ by a decomposition of zero.

**Problem.** In a finite direct sum, each vector has a unique component in each subspace. Keeping just that component gives a linear map called a projection.

**How the definition helps.** Uniqueness lets the projection pick a component with no choice, and adding or scaling decompositions adds or scales components, so it is linear. Pairwise zero intersections are not enough: in the plane, the two axes and the diagonal meet pairwise only at zero, yet (1, 1) has two decompositions (our own).

**nLab:** [internal direct sum](https://ncatlab.org/nlab/show/internal+direct+sum). It says: “there is a unique I-tuple (nᵢ ∈ Nᵢ)”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 1.41–1.46](https://linear.axler.net/LADR4e.pdf)

### Finite linear combinations give the smallest containing subspace

**Remember:** The span is what all subspaces containing S share.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The span of S is the intersection of all subspaces that contain S.

**Problem.** The span of S is the smallest subspace containing S.

**How the definition helps.** An intersection of subspaces is a subspace, it contains S, and it lies inside each subspace that contains S, so it is the smallest one. Its elements are the finite linear combinations of S, since those form a subspace containing S and lie in every such subspace (our own).

**Paper or page:** [Intersection of Set of Submodules containing Subset is Smallest Submodule](https://proofwiki.org/wiki/Intersection_of_Set_of_Submodules_containing_Subset_is_Smallest_Submodule). It says: “Then the intersection ⋂T is the smallest submodule of M containing S.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 2.6](https://linear.axler.net/LADR4e.pdf)

### Images bound product rank

**Remember:** Outputs of AB are outputs of A made from outputs of B.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The rank of a matrix is the dimension of its image, the space of all its outputs.

**Problem.** For matrices A and B over the same field with AB defined, rank(AB) ≤ min(rank(A), rank(B)).

**How the definition helps.** The image of AB is A applied to the image of B, and it lies inside the image of A, so its dimension is at most rank A (our own). It is also at most rank B, because a linear map cannot raise the dimension of a subspace (our own).

**Wikipedia:** [Rank (linear algebra)](https://en.wikipedia.org/wiki/Rank_%28linear_algebra%29). It says: “rank(AB) ≤ min(rank(A), rank(B)).”

**Sources:** none listed. No primary source with a working link was found.

### Independent columns make the least-squares coefficients unique

**Remember:** Independent columns give each fitted vector only one recipe.

*Rules out counterexamples.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 15A63. arXiv math.RA. Level 1: early undergraduate.

**Definition.** A matrix A has full column rank if its columns are linearly independent, so that Ax = 0 forces x = 0. Then each vector in the column space equals Ax for only one x (our own).

**Problem.** For a real matrix A, the least-squares coefficients, the x that minimize ‖Ax − b‖, are unique for every b exactly when A has full column rank.

**How the definition helps.** Each b has a unique closest vector in the column space, and full column rank gives that vector one coefficient list x (our own). With dependent columns, some nonzero h has Ah = 0, so x and x + h fit equally well (our own).

**Wikipedia:** [Ordinary least squares](https://en.wikipedia.org/wiki/Ordinary_least_squares). It says: “the p columns of the matrix X are linearly independent”

**Sources:** none listed. No primary source with a working link was found.

### Linear independence of families, not sets, matches the determinant test

**Remember:** Repeated columns count twice, so they make the family dependent.

*Rules out counterexamples.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 15A15. arXiv math.RA. Level 1: early undergraduate.

**Definition.** An indexed family of vectors, such as the columns of a matrix, is independent if no member is a combination of finitely many other members, so a family with a repeated vector is dependent. A set is independent when it is independent as a family indexed by itself.

**Problem.** A square matrix over a field is invertible exactly when its indexed columns are linearly independent. Equivalently, its determinant is nonzero.

**How the definition helps.** Indexing keeps repeated columns, and a matrix with two equal columns is singular, so the family notion is the one the test needs. As a set, two copies of a nonzero plane vector collapse to one independent vector, though their matrix is singular (our own). The determinant criterion for a basis gives the equivalence (our own).

**Wikipedia:** [Linear independence](https://en.wikipedia.org/wiki/Linear_independence). It says: “These two notions are not equivalent: the difference being that in a family we allow repeated elements, while in a set we do not.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal independent sets give bases inside finite spanning sets

**Remember:** Add spanning vectors outside the span; stop when none remain.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A basis is an independent set that spans the space. A vector can join an independent set and keep it independent exactly when it lies outside the set's span.

**Problem.** If a finite spanning set contains an independent set, it contains a basis that extends that independent set.

**How the definition helps.** Add vectors of the finite spanning set to the independent set one at a time while they lie outside the current span (our own). The process stops because the spanning set is finite. Then every spanning vector lies in the span, so the span is the whole space.

**Paper or page:** [Vector Space has Basis Between Linearly Independent Set and Finite Spanning Set](https://proofwiki.org/wiki/Vector_Space_has_Basis_Between_Linearly_Independent_Set_and_Finite_Spanning_Set). It says: “Then there is a basis B for G such that H ⊆ B ⊆ F.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 2.30–2.32](https://linear.axler.net/LADR4e.pdf)

### Minors show transposes preserve rank

**Remember:** Rank is the largest nonvanishing minor, and transposing keeps every minor.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The determinantal rank of a matrix over a field is the largest size of a square submatrix with nonzero determinant, or zero if there is none.

**Problem.** A matrix and its transpose have the same rank. In particular, its row space and its column space have the same dimension.

**How the definition helps.** The square submatrices of the transpose are the transposes of those of the original, with the same determinants, so the largest size stays the same (our own). The work is in the theorem that this size equals the column rank, the dimension of the column span (our own).

**Wikipedia:** [Rank (linear algebra)](https://en.wikipedia.org/wiki/Rank_%28linear_algebra%29). It says: “The rank of A is the largest order of any non-zero minor in A.”

**Paper or page:** [Column Rank of Matrix equals Row Rank](https://proofwiki.org/wiki/Column_Rank_of_Matrix_equals_Row_Rank). It says: “The column rank of A is equal to the row rank of A.”

**Sources:**

- [William P. Wardlaw, Row Rank Equals Column Rank, Mathematics Magazine 78 (2005), 316–318.](https://doi.org/10.1080/0025570X.2005.11953349)

### Separate coordinate blocks make dimensions add in direct sums

**Remember:** Each space gets its own block, so the bases simply stack.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The external direct sum of finitely many spaces is the space of tuples with one entry from each space, added and scaled entry by entry. Each space fills its own block of the tuple, and the blocks do not interact.

**Problem.** The dimension of a direct sum of finitely many finite-dimensional spaces equals the sum of their dimensions.

**How the definition helps.** Put each basis vector of each space in its block, with zeros in the other blocks; these vectors form a basis because each tuple expands uniquely (our own). For a direct sum of subspaces, unique decomposition identifies the sum with this tuple space.

**Paper or page:** [Dimension of Direct Product of Vector Spaces](https://proofwiki.org/wiki/Dimension_of_Direct_Product_of_Vector_Spaces). It says: “dim X = ∑ⱼ₌₁ⁿ dim Xⱼ”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.87–3.93](https://linear.axler.net/LADR4e.pdf)

### Subspace sums include the mixed vectors that unions miss

**Remember:** Join subspaces by adding their vectors, not by collecting them.

*Rules out counterexamples.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The sum U + W of subspaces is the set of all vectors u + w with u in U and w in W. Unlike the union, it contains these mixed sums.

**Problem.** The sum of two subspaces is the smallest subspace that contains both.

**How the definition helps.** Any subspace containing U and W must contain every u + w, and these sums are closed under addition and scaling. The union can fail to be a subspace: the two axes in the plane contain (1, 0) and (0, 1) but not (1, 1) (our own).

**Wikipedia:** [Linear subspace](https://en.wikipedia.org/wiki/Linear_subspace). It says: “U + W = {u + w : u ∈ U, w ∈ W}.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 1.36 and 1.40](https://linear.axler.net/LADR4e.pdf)

### The addition map turns the dimension of a sum into rank–nullity

**Remember:** Count all pairs and subtract the pairs that cancel.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The sum U + W is the image of the addition map that sends a pair (u, w) in U × W to u + w. Its kernel, the pairs that cancel, consists of the pairs (x, −x) with x in U ∩ W.

**Problem.** For finite-dimensional subspaces U and W of one vector space, dim(U + W) + dim(U ∩ W) = dim U + dim W.

**How the definition helps.** Rank–nullity for the addition map gives dim(U + W) + dim(U ∩ W) = dim(U × W) = dim U + dim W (our own).

**Paper or page:** [Rank Plus Nullity Theorem](https://proofwiki.org/wiki/Rank_Plus_Nullity_Theorem). It says: “dim Img φ + dim ker φ = dim G”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 2.43 and 3.21](https://linear.axler.net/LADR4e.pdf)

### The empty set is independent, so the zero space has a basis

**Remember:** The zero space has the empty basis and dimension 0.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A set of vectors is linearly independent if no nontrivial finite linear combination of them is zero. The empty set passes vacuously and spans the zero space, so it is a basis of dimension 0.

**Problem.** Assume the axiom of choice. Every vector space has a basis, and any independent subset of a spanning set extends to a basis inside that spanning set.

**How the definition helps.** Because the empty set is independent, the zero space needs no exception and the family of independent extensions is never empty. Ordered by inclusion, unions of chains stay independent, so Zorn’s lemma gives a maximal extension inside the spanning set (our own). It spans, since a generator outside its span could still be added (our own).

**Wikipedia:** [Basis (linear algebra)](https://en.wikipedia.org/wiki/Basis_%28linear_algebra%29), [Dimension (vector space)](https://en.wikipedia.org/wiki/Dimension_%28vector_space%29). It says: “The set X is nonempty since the empty set is an independent subset of V”

**Sources:** none listed. No primary source with a working link was found.

### Unique basis coordinates count vectors over finite fields

**Remember:** Each vector is one list of n coordinates, each with q choices.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** An ordered basis b<sub>1</sub>, …, b<sub>n</sub> matches vectors with coefficient lists: each list (c<sub>1</sub>, …, c<sub>n</sub>) gives the vector c<sub>1b</sub><sub>1</sub> + … + c<sub>nb</sub><sub>n</sub>, and each vector comes from exactly one list.

**Problem.** A vector space of finite dimension n over a field with q elements has exactly qⁿ vectors.

**How the definition helps.** So the vectors correspond to lists of n entries from the field, and there are qⁿ such lists. Spanning gives every vector a list, and independence makes the list unique (our own).

**Paper or page:** [Cardinality of Finite Vector Space](https://proofwiki.org/wiki/Cardinality_of_Finite_Vector_Space). It says: “\|V\| = \|K\|ᵈⁱᵐ ⱽ”

**Sources:** none listed. No primary source with a working link was found.

### A two-sided inverse requires exactly one input per output

**Remember:** An inverse must undo the map in both orders.

*Rules out counterexamples.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A linear map T from V to W is invertible if some linear map S from W to V undoes it on both sides: ST = id<sub>V</sub> and TS = id<sub>W</sub>.

**Problem.** A linear map has a two-sided linear inverse exactly when it is bijective, meaning one-to-one and onto.

**How the definition helps.** ST = id<sub>V</sub> forces T to be one-to-one, and TS = id<sub>W</sub> forces it to be onto. One side is not enough: x ↦ (x, 0) from ℝ to ℝ² has a left inverse, taking the first coordinate, but it is not onto (our own). Conversely, the inverse function of a bijective linear map preserves addition and scaling, because each output has one input.

**Paper or page:** [Inverse of Linear Transformation is Linear Transformation](https://proofwiki.org/wiki/Inverse_of_Linear_Transformation_is_Linear_Transformation). It says: “Then A⁻¹ is a linear transformation.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.59, 3.63 and 3.68](https://linear.axler.net/LADR4e.pdf)

### Finite linear combinations let linear maps carry spans to spans

**Remember:** A linear map sends each combination to the same combination of the images.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The span of S is the set of all finite linear combinations a<sub>1s</sub><sub>1</sub> + … + a<sub>ks</sub><sub>k</sub> of vectors in S, including the empty sum, zero.

**Problem.** For a linear map T, the image of the span of S equals the span of the images of vectors in S.

**How the definition helps.** A linear map sends each such combination to the same combination of the images, so T maps the span of S into the span of T(S) (our own). Every combination of images arises this way, so the two sets are equal (our own).

**Paper or page:** [Image of Generating Set of Vector Space under Linear Transformation is Generating Set of Image](https://proofwiki.org/wiki/Image_of_Generating_Set_of_Vector_Space_under_Linear_Transformation_is_Generating_Set_of_Image). It says: “Then T\[G\] be a generating set for T\[X\].”

**Sources:** none listed. No primary source with a working link was found.

### Homogeneity is needed in defining linear maps

**Remember:** Additivity gives the prime field's scalars for free, but no others.

*Rules out counterexamples.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A map f between F-vector spaces is linear if it is additive, f(u + v) = f(u) + f(v), and homogeneous, f(cu) = cf(u) for every scalar c in F.

**Problem.** Over a prime field, ℚ or 𝔽ₚ, every additive map between vector spaces is linear. Over every other field, some additive map between vector spaces is not linear (Theorem 2.1).

**How the definition helps.** Additivity alone gives homogeneity for integer scalars, hence for every scalar of the prime field (our own). Otherwise view F over its prime field and take a basis containing 1 and some a outside the prime field (our own). Projection onto the 1-coordinate is additive but sends a = a·1 to zero, not to a (our own).

**Paper or page:** [On the independence of conditions in the linear mapping definition (revised)](https://arxiv.org/abs/2208.12648v3). It says: “If F=k, then every additive mapping U→V with vector F-spaces U, V, is F-homogeneous (and therefore F-linear). If F≠k, then there exist vector F-spaces U and V and additive mapping U→V, which is not F-homogeneous.”

**Sources:**

- [Aslanbek Naziev, On the independence of conditions in the linear mapping definition (revised), arXiv:2208.12648 (2022)](https://arxiv.org/abs/2208.12648v3)

### Idempotent projections split spaces

**Remember:** Project once to keep one part and subtract to get the other.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A projection is a linear map P from a space to itself with P² = P. Applying it twice does nothing new, so P fixes every vector in its image (our own).

**Problem.** For a projection P, every vector is, in exactly one way, a vector in the image of P plus a vector in the kernel of P.

**How the definition helps.** Write v = Pv + (v − Pv); the first term is in the image, and P(v − Pv) = Pv − P²v = 0 (our own). A vector in both the image and the kernel is fixed by P and sent to zero, so it is zero, and the decomposition is unique (our own).

**nLab:** [idempotent](https://ncatlab.org/nlab/show/idempotent). It says: “it is an endomorphism e : X → X of some object X that "squares to itself”

**Paper or page:** [Range of Idempotent is Kernel of Complementary Idempotent](https://proofwiki.org/wiki/Range_of_Idempotent_is_Kernel_of_Complementary_Idempotent). It says: “Rng A = ker(I − A)”

**Sources:** none listed. No primary source with a working link was found.

### Identity maps between coordinate systems give the change-of-basis formula

**Remember:** Convert to old coordinates, apply the map, then convert back.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The change-of-basis matrix P is the matrix of the identity map, with new coordinates on input and old coordinates on output. Its columns are the new basis vectors written in old coordinates.

**Problem.** If A represents a linear operator in the old basis, then P⁻¹AP represents the same operator in the new basis.

**How the definition helps.** Read right to left, P⁻¹AP converts new coordinates to old, applies the operator, and converts back. Matrix products represent composites of maps, so this is the operator in the new basis (our own).

**Paper or page:** [Change of Basis Matrix under Linear Transformation/Corollary](https://proofwiki.org/wiki/Change_of_Basis_Matrix_under_Linear_Transformation/Corollary). It says: “B = P⁻¹ A P”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.81–3.84](https://linear.axler.net/LADR4e.pdf)

### Matrix entries count the dimension of the space of linear maps

**Remember:** Each input basis vector contributes one column of independent choices.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** With bases fixed for the domain and target, the matrix of a linear map has one column per input basis vector, listing the coordinates of its image. Every m × n matrix comes from exactly one linear map, because a map may take any values on a basis.

**Problem.** Over one field, the space of linear maps from an n-dimensional domain to an m-dimensional target has dimension mn.

**How the definition helps.** Taking matrices is then a linear bijection from maps onto m × n matrices, which have mn free entries. The matrices with a single entry 1 and all others 0 give a basis (our own).

**Paper or page:** [Dimension of Set of Linear Transformations](https://proofwiki.org/wiki/Dimension_of_Set_of_Linear_Transformations). It says: “dim ℒR(G, H) = n m”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.71–3.72](https://linear.axler.net/LADR4e.pdf)

### Pointwise operations make linear maps a vector space

**Remember:** Do the vector arithmetic separately at each input.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Add linear maps and scale them at each input separately: (T + S)(x) = T(x) + S(x) and (aT)(x) = aT(x).

**Problem.** The linear maps between two vector spaces over the same field form a vector space with these operations.

**How the definition helps.** Each vector-space law for maps reduces, at every input, to the same law in the target space. The one remaining check is that sums and scalar multiples of linear maps are again linear (our own).

**Paper or page:** [Linear Mappings between Vector Spaces form Vector Space](https://proofwiki.org/wiki/Linear_Mappings_between_Vector_Spaces_form_Vector_Space). It says: “∀x ∈ X: (T + S)(x) ≔ T(x) + S(x)”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.5–3.6](https://linear.axler.net/LADR4e.pdf)

### Affine spaces include translated solution sets

**Remember:** An affine subspace is a subspace slid off the origin.

*Makes the theorem clean to state or prove.* MSC 15A06 (Linear equations (linear algebraic aspects)). arXiv math.RA. Level 1: early undergraduate.

**Definition.** An affine subspace is a translate p + U of a linear subspace U, the set of all p + u with u in U. Unlike U, it need not contain the origin.

**Problem.** The solution set of a consistent linear system Ax = b is an affine subspace.

**How the definition helps.** If p is one solution, x solves Ax = b exactly when x − p is in the kernel, so the solution set is p plus the kernel (our own). For example, the line x + y = 1 translates the line x + y = 0 and misses the origin (our own).

**nLab:** [affine space](https://ncatlab.org/nlab/show/affine+space). It says: “An affine space or affine linear space is a vector space that has forgotten its origin.”

**Sources:** none listed. No primary source with a working link was found.

### Invertible row operations preserve solutions

**Remember:** Undo the row operation to recover the old equations.

*True by definition.* MSC 15A06 (Linear equations (linear algebraic aspects)). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Two augmented matrices are row equivalent if one is E times the other for some invertible matrix E. Each elementary row operation is such a multiplication (our own).

**Problem.** Row-equivalent augmented matrices describe systems with exactly the same solutions.

**How the definition helps.** If x solves Ax = b, then EAx = Eb, and applying E⁻¹ reverses this, so no solution is gained or lost (our own proof).

**Paper or page:** [Elementary Row Operation on Augmented Matrix leads to Equivalent System of Simultaneous Linear Equations](https://proofwiki.org/wiki/Elementary_Row_Operation_on_Augmented_Matrix_leads_to_Equivalent_System_of_Simultaneous_Linear_Equations). It says: “Then S and S′ are equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Alternating multilinearity gives the determinant rules for row operations

**Remember:** Linear in each row, zero on repeated rows, one on the identity.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The determinant of n × n matrices is the unique function that is linear in each row separately, is zero when two rows are equal, and is one on the identity.

**Problem.** Scaling a row scales the determinant, and swapping two rows negates it. Adding a multiple of one row to another leaves it unchanged.

**How the definition helps.** Linearity in one row gives the scaling rule, and it splits row addition into the original determinant plus one with a repeated row, which is zero (our own). For a swap, put u + v in both rows (our own). Expanding gives zero as the sum of the two determinants with u and v in opposite orders (our own).

**Paper or page:** [Effect of Elementary Row Operations on Determinant](https://proofwiki.org/wiki/Effect_of_Elementary_Row_Operations_on_Determinant). It says: “Applying ERO 2 has no effect on det A.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the determinant by its properties makes the product rule easy

**Remember:** Every column-linear form vanishing on repeats is a multiple of det.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Over a commutative ring, the determinant of n × n matrices is the unique function that is linear in each column, zero when two columns are equal, and one on the identity. Any function with the first two properties is its value at the identity times det (our own).

**Problem.** Over a commutative ring, det(AB) = det(A)·det(B). A square matrix is invertible exactly when its determinant is invertible.

**How the definition helps.** For fixed A, B ↦ det(AB) is linear in each column of B and zero on repeated columns, with value det(A) at I, so it equals det(A)·det(B) (our own). Then an inverse of A gives an inverse of det A (our own). Conversely, A⁻¹ = det(A)⁻¹ adj(A) when det A is a unit (our own).

**Wikipedia:** [Determinant](https://en.wikipedia.org/wiki/Determinant). It says: “The determinant can be also defined as the unique alternating multilinear form of the columns (or the rows) that takes the value 1 on the identity matrix.”

**Sources:**

- [S. Lang, Linear Algebra, 3rd ed., Springer (1987); Wikipedia cites the 2nd ed., Addison-Wesley (1971)](https://doi.org/10.1007/978-1-4757-1949-9)

### Defining the determinant of an operator needs one basis-change lemma

**Remember:** Similar matrices have equal determinants, so the operator has one.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The determinant of a linear operator on a finite-dimensional space is the determinant of its matrix in any basis. Changing basis replaces that matrix M by P⁻¹MP, with P invertible.

**Problem.** For a linear operator A on a nontrivial finite-dimensional vector space over a field, det A does not depend on the basis.

**How the definition helps.** The product rule gives det(P⁻¹MP) = det(P)⁻¹ det(M) det(P) = det(M), so every basis gives the same value (our own).

**Paper or page:** [Determinant of Linear Operator is Well Defined](https://proofwiki.org/wiki/Determinant_of_Linear_Operator_is_Well_Defined). It says: “Then the determinant det A of A is well defined, that is, does not depend on the choice of a basis of V.”

**Sources:**

- [ProofWiki, Determinant of Linear Operator is Well Defined](https://proofwiki.org/wiki/Determinant_of_Linear_Operator_is_Well_Defined)

### Defining the Vandermonde polynomial as a determinant makes swaps flip its sign

**Remember:** Swapping two variables swaps two rows, so the sign flips.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The Vandermonde polynomial of x₁, …, xₙ is the determinant of the matrix whose ith row is 1, xᵢ, xᵢ², …, xᵢⁿ⁻¹. Each variable occupies its own row.

**Problem.** Swapping two variables multiplies the product of the differences xⱼ − xᵢ, over all pairs i &lt; j, by −1.

**How the definition helps.** Swapping two variables swaps their rows, and swapping two rows negates a determinant. The Vandermonde factorization shows that this determinant equals the product of the differences (our own).

**nLab:** [Vandermonde determinant](https://ncatlab.org/nlab/show/Vandermonde+determinant). It says: “because this corresponds to swapping the corresponding rows of the Vandermonde matrix”

**Sources:** none listed. No primary source with a working link was found.

### Giving the empty matrix determinant 1 removes an exception from matrix inversion

**Remember:** No rows, no columns, determinant one.

*Makes the theorem clean to state or prove.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A09. arXiv math.RA. Level 1: early undergraduate.

**Definition.** The determinant of the 0 × 0 matrix is 1, an empty product: the Leibniz formula has one term, for the empty permutation.

**Problem.** Over a field, every n × n matrix A with n ≥ 1 and nonzero determinant has inverse det(A)⁻¹ adj(A), where adj(A) has as entries the signed determinants left after deleting one row and one column.

**How the definition helps.** For n = 1 the deleted submatrix is empty, so adj(\[d\]) = \[1\] and the formula gives \[d⁻¹\] with no special case. In every positive size, the identity A adj(A) = det(A)I gives the inverse (our own).

**Wikipedia:** [Determinant](https://en.wikipedia.org/wiki/Determinant). It says: “In the case n=1, the single entry of the adjugate matrix is the determinant of the empty matrix, which equals 1.”

**Sources:** none listed. No primary source with a working link was found.

### Linearity in each column gives Cramer’s rule

**Remember:** The replaced column contributes only its coefficient on the missing column.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The determinant of n × n matrices is the unique function that is linear in each column separately, is zero when two columns are equal, and is one on the identity.

**Problem.** If A is invertible and Ax = b, the ith entry of x is det Aᵢ divided by det A. Here Aᵢ is A with column i replaced by b.

**How the definition helps.** Write b as x₁a₁ + … + xₙaₙ, the columns aⱼ of A weighted by x, and expand det Aᵢ by linearity in column i. Every term except the one with aᵢ repeats a column and vanishes, so det Aᵢ = xᵢ det A.

**nLab:** [determinant](https://ncatlab.org/nlab/show/determinant). It says: “This follows straightforwardly from properties 1 and 2 above.”

**Paper or page:** [Cramer's Rule](https://proofwiki.org/wiki/Cramer's_Rule). It says: “xᵢ = det Aᵢ / det A”

**Sources:** none listed. No primary source with a working link was found.

### Rectangular products have equal traces

**Remember:** Both traces add the same pairs of entries.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The trace of a square matrix is the sum of its diagonal entries. For a product, tr(AB) is therefore the sum of aᵢⱼbⱼᵢ over all i and j (our own).

**Problem.** For a real m × n matrix A and an n × m matrix B, tr(AB) = tr(BA), even when m ≠ n.

**How the definition helps.** tr(BA) is the sum of bⱼᵢaᵢⱼ over the same pairs, so the two sums agree after commuting each pair of factors (our own calculation).

**Paper or page:** [Trace of Product of Matrices](https://proofwiki.org/wiki/Trace_of_Product_of_Matrices). It says: “tr(AB) = tr(BA)”

**Sources:** none listed. No primary source with a working link was found.

### The adjugate works over any commutative ring, which proves Cayley–Hamilton

**Remember:** No division in the adjugate, so its identity works over polynomial rings.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A24. arXiv math.RA. Level 1: early undergraduate.

**Definition.** For an n × n matrix M with n ≥ 1, the adjugate adj(M) has (i, j) entry (−1)ⁱ⁺ʲ times the determinant of M with row j and column i deleted. Its entries are polynomials in the entries of M, with no division, so M·adj(M) = det(M)·I holds over every commutative ring.

**Problem.** Every square matrix A over a commutative ring satisfies its own characteristic polynomial p(t) = det(tI − A). That is, p(A) = 0.

**How the definition helps.** Over the polynomial ring, apply the identity to tI − A to get (tI − A)·adj(tI − A) = p(t)·I. Write adj(tI − A) as a polynomial in t with matrix coefficients and compare the coefficients of each power of t. Multiply the equation for tᵏ on the left by Aᵏ and add: the left side telescopes to 0 and the right side is p(A).

**Wikipedia:** [Cayley–Hamilton theorem](https://en.wikipedia.org/wiki/Cayley%E2%80%93Hamilton_theorem), [Adjugate matrix](https://en.wikipedia.org/wiki/Adjugate_matrix). It says: “Being a consequence of just algebraic expression manipulation, these relations are valid for matrices with entries in any commutative ring (commutativity must be assumed for determinants to be defined in the first place).”

**Sources:**

- [Cayley, A. (1858). A memoir on the theory of matrices. Philosophical Transactions of the Royal Society of London 148.](https://doi.org/10.1098/rstl.1858.0002)

### The characteristic polynomial gives the trace as an eigenvalue sum

**Remember:** The coefficient below the leading term records the sum of the roots.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a complex n × n matrix A with n ≥ 1, define the trace as minus the coefficient of tⁿ⁻¹ in the characteristic polynomial det(tI − A).

**Problem.** The trace of a complex square matrix is the sum of its eigenvalues, counted with their multiplicities as roots.

**How the definition helps.** Factoring det(tI − A) into factors t − λ over its roots shows that this coefficient is minus their sum, counted with multiplicity (our own). Expanding the determinant shows that it is also minus the sum of the diagonal entries, so it agrees with the usual trace (our own).

**Wikipedia:** [Trace (linear algebra)](https://en.wikipedia.org/wiki/Trace_%28linear_algebra%29). It says: “the trace of a matrix is equal to the sum of its eigenvalues (counted with algebraic multiplicities)”

**Sources:** none listed. No primary source with a working link was found.

### The permutation sum expands determinants along any row or column

**Remember:** Group the products by the entry they use in one row or column.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The determinant of a square matrix is the sum, over all ways to pick one entry from each row and each column, of the product of those entries times a sign. The sign is plus for an even permutation of the columns and minus for an odd one.

**Problem.** Along any row or column, the determinant equals the sum of each entry times its cofactor. The cofactor is the determinant left after deleting that entry's row and column, negated when the two indices have odd sum.

**How the definition helps.** Group the products by the entry they use in the chosen row: those using one entry form that entry times a smaller signed sum (our own). Moving that row and column to the front accounts for the cofactor sign (our own).

**Paper or page:** [Laplace Expansion Theorem for Determinants](https://proofwiki.org/wiki/Laplace_Expansion_Theorem_for_Determinants). It says: “Thus the value of a determinant can be found either by: multiplying all the elements in a row by their cofactors and adding up the products”

**Sources:** none listed. No primary source with a working link was found.

### The signed permutation sum makes transposition preserve determinants

**Remember:** Transposing reverses each permutation but leaves its sign alone.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The determinant of a square matrix is the sum, over all ways to pick one entry from each row and each column, of the product of those entries times a sign. The sign is plus for an even permutation of the columns and minus for an odd one.

**Problem.** Exchanging rows with columns to form the transpose of a square matrix preserves its determinant.

**How the definition helps.** Transposing turns the choice of entries for a permutation σ into the choice for its inverse σ⁻¹, with the same product and the same sign, so the sum is unchanged (our own).

**Paper or page:** [Determinant of Transpose](https://proofwiki.org/wiki/Determinant_of_Transpose). It says: “det A = det Aᵀ”

**Sources:** none listed. No primary source with a working link was found.

### Matrix exponentials solve linear systems

**Remember:** Start at the identity and evolve by multiplying on the left by A.

*True by definition.* MSC 15A16 (Matrix exponential and similar functions of matrices). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a real square matrix A, exp(tA) is the unique matrix function Y(t) with Y′ = AY and Y(0) = I. It agrees with the series I + tA + t²A²/2 + ….

**Problem.** For each initial vector v, the solution of x′ = Ax with x(0) = v is x(t) = exp(tA)v.

**How the definition helps.** Multiplying Y′ = AY on the right by v shows that x(t) = Y(t)v satisfies x′ = Ax and x(0) = v. Uniqueness for linear differential equations makes it the solution. Differentiating the series term by term and applying uniqueness shows that the series gives the same matrix.

**Wikipedia:** [Matrix exponential](https://en.wikipedia.org/wiki/Matrix_exponential). It says: “matrix defined by the power series”

**Paper or page:** [Derivative of Matrix Exponential](https://proofwiki.org/wiki/Derivative_of_Matrix_Exponential). It says: “d/dt eᴬᵗ = A eᴬᵗ”

**Sources:** none listed. No primary source with a working link was found.

### Changing coordinates preserves eigenspace dimensions

**Remember:** The basis changes, but the vectors scaled by the map do not.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Two matrices are similar if they are the matrices of one linear map in two bases. Algebraically, B = S⁻¹AS for an invertible matrix S.

**Problem.** Similar matrices have the same eigenvalues and the same eigenspace dimension for each eigenvalue.

**How the definition helps.** Eigenvalues and eigenspaces belong to the map, not to the basis, so both matrices see the same ones (our own). Coordinates in either basis give each eigenspace the same dimension, and B = S⁻¹AS is the change-of-basis formula (our own).

**Wikipedia:** [Change of basis](https://en.wikipedia.org/wiki/Change_of_basis). It says: “two matrices are similar if and only if they represent the same endomorphism on two different bases.”

**Sources:** none listed. No primary source with a working link was found.

### Characteristic roots give odd real matrices an eigenvalue

**Remember:** A real polynomial of odd degree must cross zero.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The real eigenvalues of a real n × n matrix A are the real roots of its characteristic polynomial det(tI − A), which has degree n and leading coefficient 1.

**Problem.** Every real square matrix with an odd number of rows has a real eigenvalue.

**How the definition helps.** For odd n this polynomial is negative for very negative t and positive for very large t, so the intermediate value theorem gives a real root (our own). The determinant test for invertibility makes that root an eigenvalue with a nonzero real eigenvector (our own).

**Wikipedia:** [Eigenvalues and eigenvectors](https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors). It says: “Therefore, any real matrix with odd order has at least one real eigenvalue”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., §5B](https://linear.axler.net/LADR4e.pdf)

### Diagonal forms simplify powers

**Remember:** Change coordinates once, then raise each diagonal entry to a power.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A square matrix A is diagonalizable if A = SDS⁻¹ for an invertible matrix S and a diagonal matrix D. In the basis of eigenvectors given by the columns of S, A only scales each coordinate.

**Problem.** If A = SDS⁻¹ with D diagonal and S invertible, then Aⁿ = SDⁿS⁻¹ for every integer n ≥ 0.

**How the definition helps.** In the product of n copies of SDS⁻¹, each inner S⁻¹S cancels, leaving SDⁿS⁻¹ (our own). The power Dⁿ just raises each diagonal entry to the nth power (our own).

**Paper or page:** [Powers of Diagonalizable Matrix](https://proofwiki.org/wiki/Powers_of_Diagonalizable_Matrix). It says: “Aⁿ = XDⁿX⁻¹”

**Sources:** none listed. No primary source with a working link was found.

### Eigenvectors must be nonzero, so eigenvalues are roots of the characteristic polynomial

**Remember:** Zero is fixed by every scale factor, so zero is never an eigenvector.

*Rules out counterexamples.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA, math.SP. Level 1: early undergraduate.

**Definition.** An eigenvector of a linear map T is a nonzero vector v with T(v) = λv for some scalar λ, which is then an eigenvalue. So λ is an eigenvalue exactly when T − λI sends some nonzero vector to zero.

**Problem.** A scalar λ is an eigenvalue of a square matrix A if and only if det(A − λI) = 0. So an n × n matrix has at most n eigenvalues.

**How the definition helps.** Allowing v = 0 would make every scalar an eigenvalue, since A0 = λ0 (our own). A − λI has a nonzero kernel exactly when det(A − λI) = 0, a polynomial of degree n in λ with at most n roots (our own).

**Wikipedia:** [Eigenvalues and eigenvectors](https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors). It says: “Equation (2) has a nonzero solution v if and only if the determinant of the matrix (A − λI) is zero.”

**Sources:** none listed. No primary source with a working link was found.

### Generalized eigenvectors give a Jordan basis when eigenvectors are too few

**Remember:** Some power of A − λI kills a generalized eigenvector.

*Makes the theorem clean to state or prove.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A20. arXiv math.RA. Level 1: early undergraduate.

**Definition.** For an eigenvalue λ of a square matrix A, a generalized eigenvector of rank m is a nonzero x with (A − λI)ᵐx = 0, where m is the least such positive integer. For m ≥ 2, applying A − λI gives one of rank m − 1, so each one heads a chain that ends at an eigenvector (our own).

**Problem.** Every square matrix whose characteristic polynomial splits over the field, such as every complex square matrix, is similar to a Jordan normal form. Each block of that form has one eigenvalue on its diagonal, ones just above it, and zeros elsewhere.

**How the definition helps.** In a basis made of chains, A − λI sends each chain vector to the next lower one and the eigenvector to zero, which is exactly a Jordan block (our own). The Jordan chain decomposition theorem gives such a basis when the characteristic polynomial splits (our own).

**Wikipedia:** [Generalized eigenvector](https://en.wikipedia.org/wiki/Generalized_eigenvector), [Jordan normal form](https://en.wikipedia.org/wiki/Jordan_normal_form). It says: “Using generalized eigenvectors, a set of linearly independent eigenvectors of A can be extended, if necessary, to a complete basis for V.”

**Sources:** none listed. No primary source with a working link was found.

### Squaring restricts projection eigenvalues

**Remember:** A projection has the same effect once or twice.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A projection is a linear map P with P² = P: applying it twice is the same as applying it once.

**Problem.** Every eigenvalue of a projection is zero or one.

**How the definition helps.** If Pv = λv with v nonzero, then λ²v = P²v = Pv = λv, so λ² = λ and λ is 0 or 1 (our own).

**nLab:** [idempotent](https://ncatlab.org/nlab/show/idempotent). It says: “e ∘ e = e.”

**Wikipedia:** [Projection (linear algebra)](https://en.wikipedia.org/wiki/Projection_%28linear_algebra%29). It says: “The eigenvalues of a projection matrix must be 0 or 1.”

**Sources:** none listed. No primary source with a working link was found.

### Leading ones alone in their columns make reduced echelon form unique

**Remember:** Leading ones with zeros above and below leave no choices.

*Rules out counterexamples.* MSC 15A21 (Canonical forms, reductions, classification), 15A06. arXiv math.RA. Level 1: early undergraduate.

**Definition.** A matrix is in reduced row echelon form if zero rows are at the bottom, each nonzero row starts with a leading 1 further right than the row above, and each leading 1 is the only nonzero entry in its column.

**Problem.** Over a field, every matrix is row equivalent to exactly one reduced row echelon matrix. Two matrices of the same size are row equivalent exactly when their reduced forms agree.

**How the definition helps.** The extra conditions remove the freedom, allowed in plain echelon form, to scale a pivot row or add a lower row to it (our own). Gaussian elimination gives existence (our own). In the row space, which row operations preserve, the pivots are exactly the possible leading positions, and each reduced row is fixed by its values at the pivots (our own).

**Wikipedia:** [Row echelon form](https://en.wikipedia.org/wiki/Row_echelon_form). It says: “While a matrix may have several echelon forms, its reduced echelon form is unique.”

**Sources:** none listed. No primary source with a working link was found.

### Positive QR diagonals ensure uniqueness

**Remember:** Positive pivots stop the two factors from trading minus signs.

*Rules out counterexamples.* MSC 15A23 (Factorization of matrices). arXiv math.NA. Level 1: early undergraduate.

**Definition.** A reduced QR factorization writes A = QR, where Q has perpendicular unit columns and R is square with zeros below its diagonal. For a real A with independent columns, require R to have positive diagonal entries.

**Problem.** A real matrix with independent columns has exactly one reduced QR factorization with positive diagonal entries in R.

**How the definition helps.** Positive diagonals remove the sign choices, which otherwise allow I = I·I = (−I)(−I). If QR = US are two such factorizations, SR⁻¹ is orthogonal and upper triangular, hence diagonal with entries ±1, and positivity makes them 1. Gram–Schmidt gives existence (our own proof).

**Wikipedia:** [QR decomposition](https://en.wikipedia.org/wiki/QR_decomposition). It says: “we require that the diagonal elements of R₁ are positive then R₁ and Q₁ are unique”

**Paper or page:** [On the Column and Row Ranks of a Matrix](https://arxiv.org/abs/2112.06638v1). It says: “Q is m × n with orthonormal columns and R is an n × n upper triangular matrix”

**Sources:** none listed. No primary source with a working link was found.

### The image gives the smallest space through which a matrix factors

**Remember:** Factor through the image and there is no wasted dimension.

*True by definition.* MSC 15A23 (Factorization of matrices), 15A03. arXiv math.RA. Level 1: early undergraduate.

**Definition.** The rank r of a matrix is the dimension of its image, the span of its columns. So every column is a combination of r basis vectors of the image.

**Problem.** Over a field, every m-by-n matrix of rank r factors as an m-by-r matrix times an r-by-n matrix. No such factorization has a smaller middle dimension.

**How the definition helps.** Put a basis of the image as the columns of the first factor, and let the second factor list each original column's coordinates in that basis. If A = CD with C having k columns, the image of A lies in the span of those k columns, so k ≥ r (our own).

**Wikipedia:** [Rank factorization](https://en.wikipedia.org/wiki/Rank_factorization). It says: “Every finite-dimensional matrix has a rank decomposition”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.56–3.58](https://linear.axler.net/LADR4e.pdf)

### Dot products reverse transpose order

**Remember:** Move A across first, then B, so Bᵀ comes first.

*True by definition.* MSC 15A24 (Matrix equations and identities), 15A63. arXiv math.RA. Level 1: early undergraduate.

**Definition.** The transpose Aᵀ is the matrix that moves A across a dot product: (Ax) · y = x · (Aᵀy) for all compatible vectors x and y.

**Problem.** For real matrices A and B that can be multiplied, (AB)ᵀ = BᵀAᵀ.

**How the definition helps.** (ABx) · y = (Bx) · (Aᵀy) = x · (BᵀAᵀy), so BᵀAᵀ has the defining property of (AB)ᵀ (our own). Testing on coordinate vectors shows that this property fixes the matrix and gives the usual swapped entries (our own).

**nLab:** [adjoint operator](https://ncatlab.org/nlab/show/adjoint+operator). It says: “⟨T a, b⟩ = ⟨a, T∗ b⟩”

**Paper or page:** [Transpose of Matrix Product](https://proofwiki.org/wiki/Transpose_of_Matrix_Product). It says: “(AB)ᵀ = BᵀAᵀ”

**Sources:** none listed. No primary source with a working link was found.

### Complex numbers as matrices make their absolute values multiply

**Remember:** The determinant of a complex-number matrix is its squared absolute value.

*True by definition.* MSC 15A30 (Algebraic systems of matrices), 15A15. arXiv math.RA, math.CV. Level 1: early undergraduate.

**Definition.** Represent a + ib by the real matrix with rows (a, −b) and (b, a), so that matrix multiplication is complex multiplication. Its determinant is a² + b² (our own), and \|a + ib\| is the square root of that determinant.

**Problem.** For any complex z and w, \|zw\| = \|z\|\|w\|.

**How the definition helps.** The product rule det(AB) = det(A)det(B) gives \|zw\|² = \|z\|²\|w\|², and taking nonnegative square roots gives the identity.

**Wikipedia:** [Complex number](https://en.wikipedia.org/wiki/Complex_number). It says: “This isomorphism associates the square of the absolute value of a complex number with the determinant of the corresponding matrix, and the conjugate of a complex number with the transpose of the matrix.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the matrix product as composition makes associativity automatic

**Remember:** Multiply matrices by composing maps, and brackets stop mattering.

*True by definition.* MSC 15A30 (Algebraic systems of matrices), 15A04. arXiv math.RA. Level 1: early undergraduate.

**Definition.** The matrix product is defined so that it represents composition: if A is the matrix of a map f and B the matrix of g, then BA is the matrix of g after f. The row-by-column formula follows from this.

**Problem.** For matrices of matching sizes, (AB)C = A(BC). With distributivity, this makes the n × n matrices a ring with the identity matrix as unit.

**How the definition helps.** Composition of maps is associative, so (AB)C and A(BC) represent the same map. The identity map gives the unit, and linearity gives both distributive laws (our own).

**Wikipedia:** [Matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication). It says: “This result also follows from the fact that matrices represent linear maps. Therefore, the associative property of matrices is simply a specific case of the associative property of function composition.”

**Sources:**

- [Cayley, A. (1858). A memoir on the theory of matrices. Philosophical Transactions of the Royal Society of London 148.](https://doi.org/10.1098/rstl.1858.0002)

### Operator norms bound products

**Remember:** Two stretches in a row stretch at most their product.

*True by definition.* MSC 15A60 (Norms of matrices, numerical range, applications of functional analysis to matrix theory). arXiv math.FA. Level 1: early undergraduate.

**Definition.** The operator norm ‖A‖ of a matrix is its greatest stretch, the largest length of Ax over unit vectors x. So ‖Ay‖ ≤ ‖A‖‖y‖ for every vector y.

**Problem.** For compatible real matrices A and B of positive dimensions, their Euclidean operator norms satisfy ‖AB‖ ≤ ‖A‖‖B‖.

**How the definition helps.** For a unit vector x, ‖ABx‖ ≤ ‖A‖‖Bx‖ ≤ ‖A‖‖B‖, and taking the largest value over x gives the bound (our own).

**Paper or page:** [Supremum Operator Norm on Continuous Linear Transformation Space is Submultiplicative](https://proofwiki.org/wiki/Supremum_Operator_Norm_on_Continuous_Linear_Transformation_Space_is_Submultiplicative). It says: “‖A ∘ B‖ ≤ ‖A‖ · ‖B‖”

**Sources:** none listed. No primary source with a working link was found.

### Trace proves Frobenius norm invariance

**Remember:** Orthogonal factors cancel inside the trace.

*True by definition.* MSC 15A60 (Norms of matrices, numerical range, applications of functional analysis to matrix theory). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The squared Frobenius norm of a real matrix A is tr(AᵀA), the sum of the diagonal entries of AᵀA. It equals the sum of the squares of all entries of A.

**Problem.** Multiplying a real matrix on either side by an orthogonal matrix of matching size leaves its Frobenius norm unchanged.

**How the definition helps.** For orthogonal Q, (QA)ᵀ(QA) = AᵀQᵀQA = AᵀA (our own). For AQ, cycling the trace gives tr(QᵀAᵀAQ) = tr(AᵀAQQᵀ) = tr(AᵀA) (our own).

**Wikipedia:** [Matrix norm](https://en.wikipedia.org/wiki/Matrix_norm). It says: “This property follows from the cyclic nature of the trace”

**Sources:** none listed. No primary source with a working link was found.

### Gram matrices detect independent columns

**Remember:** The Gram quadratic form measures the squared length of a column combination.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products), 15A03. arXiv math.RA. Level 1: early undergraduate.

**Definition.** The Gram matrix of the columns of a real matrix V is VᵀV, whose entries are the dot products of pairs of columns. Its quadratic form is xᵀ(VᵀV)x = ‖Vx‖², the squared length of the column combination Vx (our own).

**Problem.** The Gram matrix is positive definite exactly when the columns are linearly independent. Positive definite means its quadratic form is positive on every nonzero vector.

**How the definition helps.** ‖Vx‖² is positive for every nonzero x exactly when Vx = 0 only for x = 0, which says the columns are linearly independent (our own).

**Wikipedia:** [Gram matrix](https://en.wikipedia.org/wiki/Gram_matrix). It says: “the Gramian matrix is positive definite if and only if the vectors vᵢ are linearly independent”

**Sources:** none listed. No primary source with a working link was found.

### Orthogonal projection finds the closest point

**Remember:** Moving away from the perpendicular foot adds a square to the distance.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The orthogonal projection of x onto a subspace is the point p of the subspace such that x − p is perpendicular to the whole subspace.

**Problem.** In a finite-dimensional real inner product space, the orthogonal projection of x is the unique nearest point in the subspace.

**How the definition helps.** For q in the subspace, x − p is perpendicular to p − q, so Pythagoras gives ‖x − q‖² = ‖x − p‖² + ‖p − q‖², which exceeds ‖x − p‖² unless q = p (our own). In finite dimension such p exists, as the sum of the components of x along an orthonormal basis (our own).

**Wikipedia:** [Projection (linear algebra)](https://en.wikipedia.org/wiki/Projection_%28linear_algebra%29). It says: “⟨Px, y − Py⟩ = ⟨x, (P − P²)y⟩ = 0”

**Sources:** none listed. No primary source with a working link was found.

### Orthogonal residuals turn least squares into linear equations

**Remember:** The best fit leaves an error perpendicular to each column.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A least-squares fit is the vector Ax closest to b, which is the orthogonal projection of b onto the column space of A. So the error b − Ax is perpendicular to every column of A.

**Problem.** For a real matrix A, x minimizes ‖Ax − b‖ exactly when AᵀAx = Aᵀb, even if the columns are dependent.

**How the definition helps.** Perpendicular to every column means Aᵀ(b − Ax) = 0, which is exactly AᵀAx = Aᵀb (our own). The closest-point theorem for orthogonal projections shows that the closest vector is the one with perpendicular error (our own).

**Wikipedia:** [Ordinary least squares](https://en.wikipedia.org/wiki/Ordinary_least_squares). It says: “projected orthogonally onto the linear subspace spanned by the columns of X”

**Sources:** none listed. No primary source with a working link was found.

### Orthonormal coordinates preserve dot products

**Remember:** Perpendicular unit axes let you multiply matching coordinates and add.

*Rules out counterexamples.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.FA. Level 1: early undergraduate.

**Definition.** An orthonormal basis is a basis of unit vectors that are pairwise perpendicular, so ⟨eᵢ,eⱼ⟩ is 1 when i = j and 0 otherwise.

**Problem.** In an orthonormal basis of a finite-dimensional real inner product space, the inner product equals the dot product of the coordinate lists.

**How the definition helps.** Expanding ⟨∑xᵢeᵢ, ∑yⱼeⱼ⟩ leaves ∑xᵢyᵢ, because perpendicularity kills mixed terms and unit length gives each matching term coefficient one (our own). Without unit length, the basis vector 2 of ℝ has coordinate 1 but squared length 4 (our own).

**Wikipedia:** [Orthonormal basis](https://en.wikipedia.org/wiki/Orthonormal_basis). It says: “Under these coordinates, the inner product becomes a dot product of vectors.”

**Paper or page:** [Dot Product of Orthonormal Basis Vectors](https://proofwiki.org/wiki/Dot_Product_of_Orthonormal_Basis_Vectors). It says: “eᵢ · eⱼ = δᵢⱼ”

**Sources:** none listed. No primary source with a working link was found.

### Projecting onto a line gives Cauchy–Schwarz

**Remember:** A shadow cannot be longer than its vector.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The projection of x onto the line through a unit vector e is p = ⟨x,e⟩e, the point of the line whose remainder x − p is perpendicular to e (our own). Here ⟨x,e⟩ is linear in x.

**Problem.** In a real or complex inner product space, \|⟨x,y⟩\| ≤ ‖x‖‖y‖. Equality holds exactly when one vector is a scalar multiple of the other.

**How the definition helps.** Pythagoras gives ‖x‖² = \|⟨x,e⟩\|² + ‖x − p‖² ≥ \|⟨x,e⟩\|², with equality exactly when x = p (our own). For nonzero y, put e = y/‖y‖ and multiply by ‖y‖²; if y is zero, both sides vanish (our own).

**Paper or page:** [Cauchy-Bunyakovsky-Schwarz Inequality/Inner Product Spaces](https://proofwiki.org/wiki/Cauchy-Bunyakovsky-Schwarz_Inequality/Inner_Product_Spaces). It says: “\|⟨x,y⟩\|² ≤ ⟨x,x⟩⟨y,y⟩”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 6.13–6.14](https://linear.axler.net/LADR4e.pdf)

### Quadratic forms make sums of positive definite matrices positive definite

**Remember:** At each nonzero vector, the form of the sum adds two positive numbers.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products), 15A18. arXiv math.RA. Level 1: early undergraduate.

**Definition.** A real symmetric matrix M is positive definite when its quadratic form xᵀMx is positive at every nonzero vector x.

**Problem.** The sum of two real symmetric positive definite matrices of the same size is positive definite.

**How the definition helps.** At a nonzero x, xᵀ(M + N)x = xᵀMx + xᵀNx is a sum of two positive numbers. The eigenvalue test does not show this directly, because eigenvalues of a sum are not sums of eigenvalues. The spectral theorem shows the two tests agree (our own).

**Wikipedia:** [Definite matrix](https://en.wikipedia.org/wiki/Definite_matrix). It says: “If M and N are positive-definite, then the sum M + N is also positive-definite.”

**Sources:** none listed. No primary source with a working link was found.

### Strict positivity makes inner product length a norm

**Remember:** A nonzero vector must have positive length.

*Rules out counterexamples.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A real inner product is a pairing that is symmetric, linear in each input, and strictly positive: ⟨x,x⟩ &gt; 0 for every nonzero x.

**Problem.** The length √⟨x,x⟩ from a real inner product is a norm. In particular, it vanishes only at zero.

**How the definition helps.** Strict positivity gives every nonzero vector positive length, and bilinearity gives ‖cx‖ = \|c\|‖x‖ (our own). Expanding ‖x + y‖² with the Cauchy–Schwarz inequality gives the triangle inequality (our own). Without strictness, the pairing x₁y₁ on ℝ² gives (0,1) length zero (our own).

**nLab:** [inner product space](https://ncatlab.org/nlab/show/inner+product+space). It says: “The inner product is positive definite if it is both positive and definite, in other words if ‖x‖² &gt; 0 whenever x ≠ 0.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 6.7–6.18](https://linear.axler.net/LADR4e.pdf)

### Symmetry makes quadratic form matrices unique

**Remember:** Symmetry divides each mixed coefficient equally between two matrix entries.

*Rules out counterexamples.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Represent a real quadratic form q, a homogeneous polynomial of degree two, by a symmetric matrix S with q(x) = xᵀSx, so each mixed coefficient splits equally between sᵢⱼ and sⱼᵢ.

**Problem.** Every real quadratic form has exactly one symmetric matrix representation in fixed coordinates.

**How the definition helps.** Comparing coefficients forces sᵢᵢ to be the coefficient of xᵢ² and sᵢⱼ = sⱼᵢ to be half the coefficient of xᵢxⱼ, which gives existence and uniqueness (our own). Without symmetry, the nonzero matrix sending (x, y) to (y, −x) represents the zero form (our own).

**Wikipedia:** [Quadratic form](https://en.wikipedia.org/wiki/Quadratic_form). It says: “there is a one-to-one correspondence between quadratic forms and symmetric matrices that determine them.”

**Sources:** none listed. No primary source with a working link was found.

### The coordinate dot product is distributive by definition

**Remember:** In coordinates, the dot product inherits distributivity from ordinary multiplication.

*True by definition. Confidence: medium.* MSC 15A63 (Quadratic and bilinear forms, inner products), 97G70. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** Define the dot product of real vectors in coordinates as u·v = u₁v₁ + u₂v₂ + ⋯ + uₙvₙ, a sum of ordinary products.

**Problem.** For all vectors u, v and w in ℝⁿ, u·(v + w) = u·v + u·w.

**How the definition helps.** Each term satisfies uᵢ(vᵢ + wᵢ) = uᵢvᵢ + uᵢwᵢ, and summing over i proves the identity (our own). The law of cosines shows that this agrees with the geometric definition \|u\|\|v\| cos θ (our own).

**Wikipedia:** [Dot product](https://en.wikipedia.org/wiki/Dot_product). It says: “The dot product may be defined algebraically or geometrically. The geometric definition is based on the notions of angle and distance (magnitude) of vectors. The equivalence of these two definitions relies on having a Cartesian coordinate system for Euclidean space.”

**Sources:** none listed. No primary source with a working link was found.

### The orthogonal residual gives the complementary projection

**Remember:** The part you subtract is the other projection.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The orthogonal projection P onto a subspace W splits each x as Px + (x − Px), with Px in W and the remainder x − Px perpendicular to W.

**Problem.** In finite dimensions, I − P is the orthogonal projection onto W⊥, where I is the identity map.

**How the definition helps.** Read the same split the other way: x − Px lies in W⊥, and the remainder Px lies in W, which is perpendicular to W⊥ (our own). The orthogonal decomposition theorem makes such a split unique in finite dimensions, so I − P is the projection onto W⊥ (our own).

**Paper or page:** [Orthogonal Projection onto Orthocomplement](https://proofwiki.org/wiki/Orthogonal_Projection_onto_Orthocomplement). It says: “Then: P₍A⊥₎ = I − Pₐ”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 6.55–6.57](https://linear.axler.net/LADR4e.pdf)

### The determinant definition makes the cross product orthogonal to both inputs

**Remember:** A repeated row makes the determinant zero.

*True by definition. Confidence: medium.* MSC 15A72 (Vector and tensor algebra, theory of invariants), 15A15. arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a and b in ℝ³, a × b is the unique vector v with v · c = det(a, b, c) for every c, where a, b and c are the rows.

**Problem.** For all a and b in ℝ³, the cross product a × b is orthogonal to both a and b.

**How the definition helps.** Taking c = a or c = b gives a determinant with a repeated row, so both dot products vanish (our own). Such v exists and is unique, because its coordinates are the values of det(a, b, c) at the standard basis vectors (our own).

**Wikipedia:** [Cross product](https://en.wikipedia.org/wiki/Cross_product), [Triple product](https://en.wikipedia.org/wiki/Triple_product). It says: “The cross product is always orthogonal to both vectors, and has magnitude zero when the vectors are parallel”

**Sources:** none listed. No primary source with a working link was found.

### The determinant definition makes the scalar triple product cyclic

**Remember:** A cyclic shift of three rows is an even permutation.

*True by definition.* MSC 15A72 (Vector and tensor algebra, theory of invariants), 15A15. arXiv math.RA. Level 1: early undergraduate.

**Definition.** The scalar triple product of three vectors in ℝ³ is the determinant of the matrix with those vectors as rows.

**Problem.** Cyclically shifting three vectors leaves their scalar triple product unchanged. Swapping any two vectors changes its sign.

**How the definition helps.** A row swap changes the sign of a determinant, and a cyclic shift of three rows is two swaps, so the sign changes twice. Expanding along the first row shows that the determinant equals a · (b × c).

**Wikipedia:** [Triple product](https://en.wikipedia.org/wiki/Triple_product). It says: “The scalar triple product can also be understood as the determinant of the 3 × 3 matrix that has the three vectors either as its rows or its columns”

**Sources:** none listed. No primary source with a working link was found.

### The volume definition gives cross products a reflection sign

**Remember:** Reflections reverse signed volume, so cross products flip sign.

*True by definition.* MSC 15A72 (Vector and tensor algebra, theory of invariants). arXiv math.RA. Level 1: early undergraduate.

**Definition.** In oriented Euclidean three-space, u × v is the vector whose dot product with each w is the signed volume det(u,v,w), taken in a positive orthonormal basis.

**Problem.** For every orthogonal map Q, (Qu) × (Qv) = det(Q) Q(u × v). In particular, reflections add a minus sign to the ordinary vector transformation rule.

**How the definition helps.** Testing against Qw gives ((Qu) × (Qv)) · Qw = det(Qu,Qv,Qw) = det(Q) det(u,v,w) (our own). Since Q preserves dot products, det(Q) Q(u × v) · Qw has the same value, and Qw ranges over all vectors (our own).

**nLab:** [pseudovector representation](https://ncatlab.org/nlab/show/pseudovector+representation). It says: “the tensor product of representations of the vector representation V with the pseudoscalar representation”

**Wikipedia:** [Cross product](https://en.wikipedia.org/wiki/Cross_product). It says: “is changed into its opposite by an odd permutation of the basis vectors.”

**Sources:** none listed. No primary source with a working link was found.

### Distance-preserving maps compose and invert

**Remember:** Composing or reversing distance-preserving maps still preserves distance.

*True by definition.* MSC 15B10 (Orthogonal matrices). arXiv math.RA. Level 1: early undergraduate.

**Definition.** An orthogonal matrix is a real square matrix whose linear map preserves all distances.

**Problem.** The product of two orthogonal matrices of the same size is orthogonal. The inverse of each orthogonal matrix is orthogonal.

**How the definition helps.** A composite of two distance-preserving maps preserves distances at each step (our own). A distance-preserving square matrix is injective, hence invertible, and its inverse also preserves distances (our own). Recovering dot products from lengths shows that this agrees with the column test (our own).

**nLab:** [orthogonal group](https://ncatlab.org/nlab/show/orthogonal+group). It says: “This is isomorphic to the group of n × n orthogonal matrices.”

**Paper or page:** [Inverse of Orthogonal Matrix is Orthogonal](https://proofwiki.org/wiki/Inverse_of_Orthogonal_Matrix_is_Orthogonal). It says: “Then its inverse A⁻¹ is also orthogonal.”

**Sources:** none listed. No primary source with a working link was found.

### Normal matrices are exactly the ones the spectral theorem diagonalizes

**Remember:** Normal means commuting with your adjoint, as every diagonal matrix does.

*Makes the theorem clean to state or prove.* MSC 15B57 (Hermitian, skew-Hermitian, and related matrices), 15A20. arXiv math.RA. Level 1: early undergraduate.

**Definition.** A complex square matrix A is normal when it commutes with its conjugate transpose: A\*A = AA\*.

**Problem.** The spectral theorem: a complex square matrix has an orthonormal basis of eigenvectors if and only if it is normal.

**How the definition helps.** Normality is necessary because a diagonal matrix commutes with its conjugate transpose, and a unitary change of basis keeps that property. It is sufficient because the Schur decomposition makes A unitarily similar to an upper triangular matrix, and a normal upper triangular matrix is diagonal.

**Wikipedia:** [Normal matrix](https://en.wikipedia.org/wiki/Normal_matrix). It says: “The concept of normality is important because normal matrices are precisely those to which the spectral theorem applies:”

**Sources:** none listed. No primary source with a working link was found.

### Self-adjointness makes distinct eigenspaces orthogonal

**Remember:** Different eigenvalues cannot scale the same nonzero dot product equally.

*True by definition.* MSC 15B57 (Hermitian, skew-Hermitian, and related matrices), 15A18. arXiv math.RA. Level 1: early undergraduate.

**Definition.** A real square matrix A is self-adjoint if it moves across the dot product: (Ax) · y = x · (Ay) for all vectors x and y.

**Problem.** Eigenvectors of a real symmetric matrix for distinct eigenvalues have dot product zero.

**How the definition helps.** For eigenvectors x and y with eigenvalues λ and μ, moving A across gives λ(x · y) = μ(x · y), so x · y = 0 when λ ≠ μ (our own). Since (Ax) · y = x · (Aᵀy), this condition is the same as Aᵀ = A (our own).

**Paper or page:** [Eigenvectors of Symmetric Matrix are Orthogonal](https://proofwiki.org/wiki/Eigenvectors_of_Symmetric_Matrix_are_Orthogonal). It says: “Then v₁ and v₂ are orthogonal with respect to ⟨·, ·⟩.”

**Sources:** none listed. No primary source with a working link was found.

### Coset coordinates show how many dimensions a quotient removes

**Remember:** A quotient drops the coordinates along the subspace.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Extend a basis of U to a basis of V. Then a coset of U, a class of vectors whose differences lie in U, is fixed by its coefficients on the added basis vectors.

**Problem.** If V is finite-dimensional and U is a subspace, then dim(V/U) = dim V − dim U.

**How the definition helps.** So V/U has one free coordinate for each added vector, which gives dim V − dim U (our own). Two vectors share these coefficients exactly when their difference lies in U, every list occurs, and the operations act coordinate by coordinate (our own).

**Paper or page:** [Dimension of Quotient Vector Space](https://proofwiki.org/wiki/Dimension_of_Quotient_Vector_Space). It says: “dim Y + dim X/Y = dim X”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 2.32 and 3.105](https://linear.axler.net/LADR4e.pdf)

### Defining rank by fewest rank-one summands bounds ranks of entrywise products

**Remember:** Each pair of rank-one summands contributes at most one rank-one term.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 15A69. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define the rank of a matrix as the least number of rank-one matrices, each a column times a row, that sum to it.

**Problem.** For two matrices A and B of the same size over a field, rank(A ∘ B) ≤ rank(A) · rank(B). Here A ∘ B is the entrywise product.

**How the definition helps.** The entrywise product of xyᵀ and uvᵀ is the single rank-one term (x ∘ u)(y ∘ v)ᵀ, so expanding minimal decompositions of A and B writes A ∘ B with at most rank(A) · rank(B) such terms (our own). The rank factorization theorem shows that this count equals the usual column rank (our own).

**Paper or page:** [Computational Resolution of Hadamard Product Factorization for 4 × 4 Matrices](https://arxiv.org/abs/2508.14901). It says: “rank(A ∘ B) ≤ rank(A) · rank(B).”

**Sources:** none listed. No primary source with a working link was found.

### Defining the double dual map by evaluation makes it natural

**Remember:** A vector reaches its double dual by evaluation, which needs no basis.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 15A04. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For each vector space V, evaluation sends v ∈ V to the functional φ ↦ φ(v) on V\*, a rule that uses no basis.

**Problem.** Let f: V → W be any linear map. Applying f and then evaluation gives the same result as applying evaluation and then the double transpose of f. For finite-dimensional spaces, evaluation is an isomorphism.

**How the definition helps.** Both routes send v to the functional ψ ↦ ψ(f(v)) on W\*, so they agree (our own). In finite dimensions, a nonzero vector has a nonzero coordinate functional, so evaluation is injective, and equal dimensions give surjectivity (our own).

**nLab:** [dual vector space](https://ncatlab.org/nlab/show/dual+vector+space). It says: “There is a natural transformation from V to its double dual:”

**Sources:** none listed. No primary source with a working link was found.

### Duals of quotients count the dimensions of annihilators

**Remember:** Functionals blind to a subspace read only the quotient.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The annihilator of U is the set of linear functionals on V that vanish on U, which are exactly the functionals on the quotient V/U.

**Problem.** In an n-dimensional vector space, the annihilator of an m-dimensional subspace has dimension n − m.

**How the definition helps.** So the annihilator is the dual space of V/U, which has dimension n − m (our own). A functional vanishing on U takes one value on each class, and each functional on V/U pulls back to such a map (our own).

**Paper or page:** [Dimension of Annihilator on Algebraic Dual](https://proofwiki.org/wiki/Dimension_of_Annihilator_on_Algebraic_Dual). It says: “M° is an (n − m)-dimensional subspace of G∗.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.105, 3.111 and 3.125](https://linear.axler.net/LADR4e.pdf)

### Finite bases give a basis of coordinate functionals

**Remember:** Finite bases need only finitely many coordinate readings.

*Rules out counterexamples.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The coordinate functionals of a basis read off one coefficient each, and their finite combinations are exactly the functionals that are nonzero on only finitely many basis vectors.

**Problem.** For a finite basis, its coordinate functionals form a basis of the dual space. For an infinite basis, they remain independent but do not span the full dual.

**How the definition helps.** For a finite basis every functional f qualifies and equals ∑ f(eᵢ)eᵢ\*, and testing a combination on each basis vector proves independence. For an infinite basis, the functional that is one on every basis vector is not such a combination (our own).

**nLab:** [dual vector space](https://ncatlab.org/nlab/show/dual+vector+space). It says: “However, if V has finite dimension, then B∗ is a basis of V∗.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.4 and 3.112–3.116](https://linear.axler.net/LADR4e.pdf)

### Finite support lets summand bases combine into one basis

**Remember:** Finite support lets finite linear combinations reach every tuple.

*Rules out counterexamples. Confidence: medium.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The direct sum of a family of spaces is the set of tuples with only finitely many nonzero entries.

**Problem.** If each space in a family has a chosen basis, the corresponding vectors in separate coordinates form a basis of the direct sum.

**How the definition helps.** A finitely supported tuple expands through finitely many entries, each a finite combination of basis vectors, so the vectors span. Checking a zero combination entry by entry gives independence (our own). In the product of infinitely many real lines, the all-ones tuple is not a finite sum of these vectors.

**nLab:** [direct sum](https://ncatlab.org/nlab/show/direct+sum). It says: “This makes it clear that the direct sum equals the direct product when there are only finitely many objects involved.”

**Sources:** none listed. No primary source with a working link was found.

### Quotient classes identify every complement with the same space

**Remember:** Every class has exactly one representative in any given complement.

*True by definition. Confidence: medium.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The quotient V/U groups vectors whose difference lies in U, and a complement W of U meets each such class in exactly one vector.

**Problem.** For any complement W of U in V, the quotient map restricts to an isomorphism from W onto V/U.

**How the definition helps.** The quotient map restricted to W is linear, and it is bijective because each class has exactly one representative in W (our own).

**Wikipedia:** [Quotient space (linear algebra)](https://en.wikipedia.org/wiki/Quotient_space_%28linear_algebra%29). It says: “The mapping that associates to v ∈ V the equivalence class \[v\] is known as the quotient map.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 2.32 and 3.99–3.104](https://linear.axler.net/LADR4e.pdf)

### Requiring a nonzero functional removes the whole space from hyperplanes

**Remember:** One nonzero scalar equation removes exactly one dimension.

*Rules out counterexamples.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A linear hyperplane is the kernel of a nonzero linear functional, a linear map to the scalar field.

**Problem.** A subspace H of V is a linear hyperplane exactly when V/H has dimension one.

**How the definition helps.** A nonzero functional is onto the scalar field, so the quotient by its kernel is a line. Conversely, identify a one-dimensional V/H with the scalar field and compose with the quotient map (our own). The zero functional is excluded because its kernel is all of V.

**Paper or page:** [Kernel of Non-Zero Linear Functional has Codimension 1](https://proofwiki.org/wiki/Kernel_of_Non-Zero_Linear_Functional_has_Codimension_1). It says: “Then ker f has codimension 1.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.104–3.108](https://linear.axler.net/LADR4e.pdf)

### Separate summand coordinates split every functional on a direct sum

**Remember:** A functional on a finite direct sum adds its values on the components.

*True by definition. Confidence: medium.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A direct sum gives each vector a unique decomposition into summand components, so a functional on it is the sum of its values on the components.

**Problem.** The dual of a finite direct sum is canonically isomorphic to the direct sum of the dual spaces of its summands. The isomorphism takes a functional to its restrictions to the summands.

**How the definition helps.** So a functional is fixed by its restrictions to the summands. Conversely, adding the values of one functional per summand defines a linear functional, because components add and scale separately (our own).

**nLab:** [internal direct sum](https://ncatlab.org/nlab/show/internal+direct+sum). It says: “there is a unique I-tuple (nᵢ ∈ Nᵢ)”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 1.41, 3.93 and 3.108](https://linear.axler.net/LADR4e.pdf)

### Composing functionals with a map reveals the kernel of its dual

**Remember:** A functional vanishes after composition exactly when it vanishes on the image.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The dual map of T sends a functional f on the target, a linear map to the scalars, to the composite f ∘ T.

**Problem.** For a linear map T between finite-dimensional spaces, the kernel of its dual map is the annihilator of its image.

**How the definition helps.** The composite f ∘ T is zero exactly when f vanishes at every output of T, that is, on the image of T. The transpose matrix gives the same result in coordinates (our own).

**Paper or page:** [Kernel of Transpose of Linear Transformation is Annihilator of Image](https://proofwiki.org/wiki/Kernel_of_Transpose_of_Linear_Transformation_is_Annihilator_of_Image). It says: “is the annihilator of the image of u”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.118 and 3.128–3.132](https://linear.axler.net/LADR4e.pdf)

### Counting dimensions after quotienting by the kernel gives rank–nullity

**Remember:** Rank counts dimensions left after collapsing the kernel.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define the rank of a linear map as the dimension of its domain modulo its kernel, where inputs that differ by a kernel vector form one class.

**Problem.** For a linear map from a finite-dimensional space, its rank plus its nullity, the dimension of its kernel, equals the dimension of its domain.

**How the definition helps.** Extend a kernel basis to a domain basis; the added vectors give a basis of the quotient, so rank equals dim V minus nullity (our own). The first isomorphism theorem identifies the quotient with the image, so this rank is the usual one.

**Paper or page:** [Rank Plus Nullity Theorem](https://proofwiki.org/wiki/Rank_Plus_Nullity_Theorem). It says: “dim Img φ + dim ker φ = dim G”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.21 and 3.104–3.107](https://linear.axler.net/LADR4e.pdf)

### Functionals on the quotient explain the image of a dual map

**Remember:** A functional comes from the target exactly when it ignores the kernel.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The dual map of T sends a functional f on the target to f ∘ T. A functional on the domain that vanishes on the kernel of T is the same as a functional on the image of T.

**Problem.** For a linear map T between finite-dimensional spaces, the image of its dual map is the annihilator of its kernel.

**How the definition helps.** Every f ∘ T vanishes on the kernel. Conversely, read a functional that vanishes on the kernel as a functional on the image of T, and extend it to the target by zero on added basis vectors (our own).

**Paper or page:** [Image of Transpose of Linear Transformation is Annihilator of Kernel](https://proofwiki.org/wiki/Image_of_Transpose_of_Linear_Transformation_is_Annihilator_of_Kernel). It says: “The image of uᵀ is the annihilator of ker u.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.107 and 3.130](https://linear.axler.net/LADR4e.pdf)

### Quotient maps group vectors that any map killing the subspace identifies

**Remember:** A map that kills the subspace cannot tell its coset representatives apart.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A quotient of V by a subspace M is a linear map Q from V that sends M to zero and through which every such map passes. Each linear T from V with T(M) = 0 equals L ∘ Q for exactly one linear L.

**Problem.** The space V/M of classes of vectors differing by elements of M satisfies this quotient property.

**How the definition helps.** T is constant on each class v + M, so sending the class of v to T(v) is well defined (our own). The rule is linear because classes inherit the operations from V, and unique because every class has a representative (our own).

**Paper or page:** [Condition for Mapping from Quotient Vector Space to be Well-Defined](https://proofwiki.org/wiki/Condition_for_Mapping_from_Quotient_Vector_Space_to_be_Well-Defined). It says: “M ⊆ ker T”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.99–3.107](https://linear.axler.net/LADR4e.pdf)

### Defining the pseudoinverse geometrically makes it give the shortest least-squares solution

**Remember:** Project for the best fit, then invert away from the kernel.

*True by definition.* MSC 15A09 (Theory of matrix inversion and generalized inverses), 15A10. arXiv math.NA, math.RA. Level 2: later undergraduate.

**Definition.** For a real or complex matrix A and target b, find A⁺b in two steps: project b orthogonally onto the range of A, then take the unique preimage of that projection that is perpendicular to the kernel of A.

**Problem.** For every vector b, the vector A⁺b minimizes ‖Ax − b‖. Among all minimizers, it is the unique one of least length.

**How the definition helps.** By Pythagoras, the minimizers of ‖Ax − b‖ are the preimages of the projection, which are A⁺b plus kernel vectors. Since A⁺b is perpendicular to the kernel, Pythagoras again makes it the unique shortest (our own).

**Wikipedia:** [Moore–Penrose inverse](https://en.wikipedia.org/wiki/Moore%E2%80%93Penrose_inverse). It says: “to compute a "best fit" (least squares) approximate solution to a system of linear equations that lacks an exact solution”

**Sources:**

- [Roger Penrose, On best approximate solutions of linear matrix equations (1956)](https://doi.org/10.1017/S0305004100030929)

### The four Penrose conditions make the pseudoinverse exist and be unique

**Remember:** Two conditions give a partial inverse; two symmetry conditions make it unique.

*Makes the theorem clean to state or prove.* MSC 15A09 (Theory of matrix inversion and generalized inverses), 15A10. arXiv math.RA, math.NA. Level 2: later undergraduate.

**Definition.** A pseudoinverse of an m × n matrix A is an n × m matrix A⁺ that meets four conditions. The first two are AA⁺A = A and A⁺AA⁺ = A⁺. The last two say that AA⁺ and A⁺A are both Hermitian (equal to their own conjugate transpose).

**Problem.** Every real or complex matrix, of any shape and rank, has exactly one pseudoinverse. Also, A⁺b is the least-squares solution of Ax = b with the smallest norm.

**How the definition helps.** In a singular value decomposition, the four conditions force reciprocals on the positive singular values and zero elsewhere, so the pseudoinverse exists and is unique (our own). In those coordinates, least squares fixes the components on positive singular values, and minimum norm sets the free components to zero (our own).

**Wikipedia:** [Moore–Penrose inverse](https://en.wikipedia.org/wiki/Moore%E2%80%93Penrose_inverse). It says: “Generalized inverses always exist but are not in general unique. Uniqueness is a consequence of the last two conditions.”

**Sources:**

- [Moore, E. H. (1920). On the reciprocal of the general algebraic matrix. Abstract in: The fourteenth western meeting of the American Mathematical Society, Bulletin of the American Mathematical Society 26(9), 385–397 (abstract on pp. 394–395).](https://doi.org/10.1090/S0002-9904-1920-03322-7)
- [Penrose, R. (1955). A generalized inverse for matrices. Proceedings of the Cambridge Philosophical Society 51(3), 406–413.](https://doi.org/10.1017/S0305004100030401)

### Defining κ(A) as ‖A‖‖A⁻¹‖ makes κ(AB) ≤ κ(A)κ(B) immediate

**Remember:** Bound the matrices and their inverses separately, then multiply.

*True by definition. Confidence: medium.* MSC 15A12 (Conditioning of matrices), 65F35. arXiv math.NA. Level 2: later undergraduate.

**Definition.** For an invertible matrix A and an induced matrix norm, which is submultiplicative, the condition number is κ(A) = ‖A‖ ‖A⁻¹‖.

**Problem.** For invertible matrices A and B of the same size, κ(AB) ≤ κ(A)κ(B).

**How the definition helps.** Submultiplicativity gives ‖AB‖ ≤ ‖A‖ ‖B‖ and ‖(AB)⁻¹‖ = ‖B⁻¹A⁻¹‖ ≤ ‖B⁻¹‖ ‖A⁻¹‖, and multiplying gives the inequality (our own). This product also equals the worst ratio of relative error in x to relative error in b.

**Wikipedia:** [Condition number](https://en.wikipedia.org/wiki/Condition_number). It says: “The condition number is defined more precisely to be the maximum ratio of the relative error in x to the relative error in b.”

**Sources:** none listed. No primary source with a working link was found.

### Alternating rows give the factors of the Vandermonde determinant

**Remember:** Two equal inputs make equal rows, so their difference is a factor.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The Vandermonde determinant has ith row 1, xᵢ, xᵢ², …, xᵢⁿ⁻¹, so it is a polynomial in the xᵢ that vanishes whenever two inputs are equal.

**Problem.** The Vandermonde determinant is the product of xⱼ − xᵢ over all pairs i &lt; j.

**How the definition helps.** Equal inputs give equal rows, so each xⱼ − xᵢ divides the polynomial, and these factors already have its total degree n(n − 1)/2 (our own). The diagonal term x₂x₃²⋯xₙⁿ⁻¹ has coefficient one on both sides, which fixes the constant (our own).

**nLab:** [Vandermonde determinant](https://ncatlab.org/nlab/show/Vandermonde+determinant). It says: “since each of those values makes two rows equal (hence with zero determinant).”

**Sources:** none listed. No primary source with a working link was found.

### Defining characteristic coefficients as exterior-power traces makes them principal minor sums

**Remember:** Each characteristic coefficient is the trace on one wedge degree.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For an endomorphism A of an n-dimensional space, its kth characteristic coefficient is the trace of ∧ᵏA, the map that applies A to every factor of a wedge of k vectors.

**Problem.** Let A be an n × n matrix. The coefficient of tⁿ⁻ᵏ in det(tI − A) is (−1)ᵏ times the sum of all k × k principal minors of A. A principal minor uses the same index set for its rows and its columns.

**How the definition helps.** In the wedge basis, each diagonal entry of ∧ᵏA is the principal minor on the same index set, so the trace is their sum. Expanding the top wedge of tI − A and choosing k slots for −A gives (−1)ᵏ tr(∧ᵏA) as the coefficient of tⁿ⁻ᵏ (our own).

**nLab:** [determinant](https://ncatlab.org/nlab/show/determinant). It says: “It is called the jth alternating power (of V).”

**Wikipedia:** [Characteristic polynomial](https://en.wikipedia.org/wiki/Characteristic_polynomial). It says: “This trace may be computed as the sum of all principal minors of A of size k.”

**Sources:** none listed. No primary source with a working link was found.

### Defining compound matrices by exterior powers makes Cauchy–Binet a composition rule

**Remember:** Composing maps composes their exterior powers, so compound matrices multiply.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The rth compound matrix of A is the matrix of ∧ʳA, which applies A to each factor of a wedge of r vectors, in the increasing-index wedge bases. Its entries are the r × r minors of A.

**Problem.** Let A and B be matrices that can be multiplied. Each r × r minor of AB is a sum over the r-element index sets K. Each term is the minor of A with columns K times the minor of B with rows K.

**How the definition helps.** Applying B and then A to each factor gives ∧ʳ(AB) = (∧ʳA)(∧ʳB). Reading off one entry of this matrix product gives the stated sum of products of minors (argument our own).

**Wikipedia:** [Compound matrix](https://en.wikipedia.org/wiki/Compound_matrix). It says: “It is closely related to, and is a strengthening of, the Cauchy–Binet formula.”

**Paper or page:** [Cauchy-Binet Formula](https://proofwiki.org/wiki/Cauchy-Binet_Formula). It says: “Let A be an m × n matrix. Let B be an n × m matrix.”

**Sources:** none listed. No primary source with a working link was found.

### Defining determinants on the top exterior power makes block triangular determinants multiply

**Remember:** The top wedge of the whole space splits into subspace and quotient parts.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The determinant of a linear map on an n-dimensional space V is the scalar by which it multiplies the top exterior power, the line spanned by the wedge of any basis.

**Problem.** Let a linear map A on V preserve a subspace W. Then det A is the determinant on W times the determinant of the induced map on V/W. In matrix terms, a block triangular matrix has determinant equal to the product of the determinants of its diagonal blocks.

**How the definition helps.** Take a basis of W followed by lifts of a basis of V/W. Applying A multiplies the wedge of the W-part by the determinant on W, and the W-components of the images of the lifts then vanish against that full wedge. What remains is the wedge of the quotient images, scaled by the determinant on V/W (our own).

**nLab:** [determinant line](https://ncatlab.org/nlab/show/determinant+line). It says: “its determinant line is the 1-dimensional vector space”

**Sources:** none listed. No primary source with a working link was found.

### Defining the adjugate through the wedge pairing makes adj(AB) equal adj(B) adj(A)

**Remember:** The adjugate acts through the pairing's right side, reversing composition order.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Let V be free of finite rank n ≥ 1 over a commutative ring with identity. For an endomorphism T, its adjugate sends v to the unique w satisfying w ∧ u = v ∧ (∧ⁿ⁻¹T)(u) for every u ∈ ∧ⁿ⁻¹V.

**Problem.** For n × n matrices A and B over a commutative ring, with n ≥ 1, adj(AB) = adj(B) adj(A).

**How the definition helps.** Since ∧ⁿ⁻¹(ST) = (∧ⁿ⁻¹S)(∧ⁿ⁻¹T) and the definition applies ∧ⁿ⁻¹T on the right side of the pairing, unwinding gives adj(ST) = adj(T) adj(S) (our own). The remaining work is to check that this adjugate has the cofactor matrix.

**Wikipedia:** [Adjugate matrix](https://en.wikipedia.org/wiki/Adjugate_matrix). It says: “The adjugate can be viewed in abstract terms using exterior algebras.”

**Sources:** none listed. No primary source with a working link was found.

### Defining trace as the derivative of det at I gives Jacobi's formula

**Remember:** Move the derivative to the identity, where it becomes the trace.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define the trace of a square matrix X as the derivative of det(I + tX) at t = 0, the first-order change of the determinant at the identity.

**Problem.** For a differentiable path A(t) of invertible real matrices, (det A)′ = det A · tr(A⁻¹A′).

**How the definition helps.** Write det A(t + h) = det A(t) · det(A(t)⁻¹A(t + h)), where A(t)⁻¹A(t + h) = I + hA(t)⁻¹A′(t) + o(h) (our own). By the definition, the second factor has derivative tr(A⁻¹A′) at h = 0. In the permutation expansion, the linear term of det(I + tX) is the diagonal sum, so this is the usual trace (our own).

**Wikipedia:** [Jacobi's formula](https://en.wikipedia.org/wiki/Jacobi%27s_formula). It says: “the differential of det, evaluated at the identity matrix, is equal to the trace.”

**Sources:** none listed. No primary source with a working link was found.

### The exponential series gives the determinant from the trace

**Remember:** Exponentiate the diagonal entries, then multiply them.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A16. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The matrix exponential is the power series exp(A) = ∑ Aᵏ/k! over k ≥ 0, so on a triangular matrix it exponentiates each diagonal entry.

**Problem.** For a real or complex square matrix A, det(exp(A)) = exp(tr(A)), where tr(A) is the sum of the diagonal entries.

**How the definition helps.** Triangularize A over ℂ; then exp(A) is triangular with diagonal entries exp(λᵢ), so its determinant is ∏ exp(λᵢ) = exp(∑λᵢ) = exp(tr A) (our own). The series respects the change of basis, since exp(PAP⁻¹) = P exp(A) P⁻¹ (our own).

**nLab:** [relation between determinant and trace](https://ncatlab.org/nlab/show/relation+between+determinant+and+trace). It says: “the determinant of its exponential equals the exponential of its trace”

**Sources:** none listed. No primary source with a working link was found.

### Unit determinants detect invertibility even over rings

**Remember:** The adjugate yields an inverse only when the determinant can be divided out.

*Rules out counterexamples.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A unit of a ring is an element with a multiplicative inverse; over a field this means nonzero, but in ℤ only 1 and −1 are units.

**Problem.** A square matrix over a commutative ring with identity is invertible exactly when its determinant is a unit.

**How the definition helps.** If det A is a unit, dividing the adjugate identity A·adj(A) = det(A)·I by det A gives the inverse (our own). If A is invertible, det(A) det(A⁻¹) = det(I) = 1 makes det A a unit (our own). Over ℤ, the matrix \[2\] has nonzero determinant but no integer inverse (our own).

**nLab:** [characteristic polynomial](https://ncatlab.org/nlab/show/characteristic+polynomial). It says: “Then there exists an n × n matrix Ã with entries in R, called the adjugate of A, such that AÃ = ÃA = det(A) · Iₙ.”

**Sources:** none listed. No primary source with a working link was found.

### Companion maps defined as multiplication by x have minimal polynomial p

**Remember:** A polynomial in the companion map multiplies by that polynomial.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A21. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a monic polynomial p of degree n ≥ 1 over a field F, the companion map C is multiplication by x on F\[x\]/(p), the polynomials modulo p. The companion matrix of p is the matrix of C in the basis 1, x, …, xⁿ⁻¹.

**Problem.** The minimal polynomial of the companion matrix of p is p itself.

**How the definition helps.** For any polynomial q, q(C) is multiplication by q modulo p (our own). It is zero exactly when it sends the class of 1 to zero, that is, when p divides q. So the polynomials that kill C are the multiples of p, and the monic one of least degree is p.

**Wikipedia:** [Companion matrix](https://en.wikipedia.org/wiki/Companion_matrix). It says: “the minimal polynomial of C(p) are equal to p(x).”

**Sources:** none listed. No primary source with a working link was found.

### Defined by power growth, spectral radius is submultiplicative for commuting matrices

**Remember:** Spectral radius is how fast the norms of powers grow.

*True by definition. Confidence: medium.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A42. arXiv math.RA, math.NA. Level 2: later undergraduate.

**Definition.** The spectral radius of a square complex matrix A is the growth rate of its powers, ρ(A) = limₖ→∞ ‖Aᵏ‖¹/ᵏ in any induced matrix norm.

**Problem.** If two complex square matrices A and B commute, then ρ(AB) ≤ ρ(A)ρ(B).

**How the definition helps.** Because AB = BA, (AB)ᵏ = AᵏBᵏ, so ‖(AB)ᵏ‖ ≤ ‖Aᵏ‖ ‖Bᵏ‖; take kth roots and let k grow (our own). Gelfand's formula shows that this limit is the largest absolute value of an eigenvalue. Without commuting, two nilpotent 2 × 2 matrices can have a product with spectral radius 1 (our own).

**Paper or page:** [Gelfand's Spectral Radius Formula/Bounded Linear Operator](https://proofwiki.org/wiki/Gelfand's_Spectral_Radius_Formula/Bounded_Linear_Operator). It says: “\|σ(T)\| = lim<sub>n → ∞</sub> (‖Tⁿ‖<sub>B(X)</sub>)<sup>1/n</sup>”

**Sources:** none listed. No primary source with a working link was found.

### Defining singular values as distances to lower-rank matrices makes them Lipschitz

**Remember:** Distance to a fixed set changes by at most the distance moved.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A42, 15A60. arXiv math.NA, math.FA. Level 2: later undergraduate.

**Definition.** Define the kth singular value σₖ(A) as the operator-norm distance from A to the set of matrices of rank less than k. The operator norm is the largest factor by which a matrix stretches a unit vector.

**Problem.** For real or complex m × n matrices A and B, \|σₖ(A) − σₖ(B)\| ≤ ‖A − B‖ in operator norm whenever 1 ≤ k ≤ min(m,n).

**How the definition helps.** By the triangle inequality, the distance to a fixed nonempty set changes by at most the distance between the two points (our own). The Eckart–Young–Mirsky theorem shows that this distance equals the usual kth singular value.

**Paper or page:** [Generalizing the SVD of a matrix under non-standard inner product and its applications to linear ill-posed problems](https://arxiv.org/abs/2312.10403). It says: “‖A − Âₖ‖₂ = σ̂ₖ₊₁.”

**Sources:**

- [L. Mirsky, Symmetric gauge functions and unitarily invariant norms (1960)](https://doi.org/10.1093/qmath/11.1.50)

### Defining unitary maps by length puts their eigenvalues on the circle

**Remember:** A unitary map can turn an eigenvector but cannot stretch it.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A linear map on a finite-dimensional complex inner product space is unitary if it preserves the length of every vector.

**Problem.** Every eigenvalue of a unitary map has absolute value 1.

**How the definition helps.** An eigenvector v with eigenvalue λ has ‖Uv‖ = \|λ\| ‖v‖, so preserving length forces \|λ\| = 1 (our own). Polarization shows that this agrees with the matrix test UᴴU = I, where Uᴴ is the conjugate transpose (our own).

**nLab:** [unitary operator](https://ncatlab.org/nlab/show/unitary+operator). It says: “U preserves the inner product ⟨·,·⟩ on the Hilbert space.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.49 and 7.53–7.54](https://linear.axler.net/LADR4e.pdf)

### Equal lengths make normal eigenspaces reduce the operator

**Remember:** Normal means A and its adjoint stretch every vector equally.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A complex square matrix A is normal if A and its conjugate transpose Aᴴ stretch every vector equally: ‖Ax‖ = ‖Aᴴx‖ for all x.

**Problem.** For a normal complex matrix, each eigenspace and its orthogonal complement are mapped into themselves.

**How the definition helps.** A − λI is again normal, so it and Aᴴ − λ̄I kill the same vectors, and Aᴴ acts by λ̄ on the λ-eigenspace (our own). So A and Aᴴ both map the eigenspace into itself, and then A maps the orthogonal complement into itself (our own). Polarization shows that the length test agrees with AAᴴ = AᴴA (our own).

**Paper or page:** [Eigenspace for Normal Operator is Reducing Subspace](https://proofwiki.org/wiki/Eigenspace_for_Normal_Operator_is_Reducing_Subspace). It says: “Then ker(A − λ) is a reducing subspace for A.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.20–7.22](https://linear.axler.net/LADR4e.pdf)

### Generalized eigenspace dimensions bound ordinary eigenspace dimensions

**Remember:** The ordinary eigenspace sits inside the generalized one.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The algebraic multiplicity of an eigenvalue λ of a complex square matrix A is the dimension of its generalized eigenspace, the vectors killed by some positive power of A − λI.

**Problem.** The geometric multiplicity of an eigenvalue, the dimension of its ordinary eigenspace, cannot exceed its algebraic multiplicity.

**How the definition helps.** Every vector killed by A − λI lies in the generalized eigenspace, so the ordinary eigenspace has no larger dimension (our own). The Jordan form shows that this dimension equals the multiplicity of λ as a root of det(tI − A) (our own).

**Wikipedia:** [Eigenvalues and eigenvectors](https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors). It says: “an eigenvalue's geometric multiplicity cannot exceed its algebraic multiplicity.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., §8B and Theorem 9.62](https://linear.axler.net/LADR4e.pdf)

### Letting matrices act on matrices makes the Cayley–Hamilton substitution legitimate

**Remember:** Let coefficients act on the left and the variable on the right.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A15. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Fix a square matrix A over a commutative ring with identity. Let a matrix polynomial ∑ CⱼXʲ act on a matrix M by M ↦ ∑ CⱼMAʲ, so coefficients act on the left and X acts as A on the right.

**Problem.** Every square matrix over a commutative ring with identity satisfies its characteristic polynomial.

**How the definition helps.** The action substitutes A for X even though the coefficients need not commute with A, and XI − A sends the identity matrix to A − A = 0 (our own). Applying both sides of adj(XI − A)·(XI − A) = χ(X)·I to the identity matrix then gives 0 = χ(A) (our own). The remaining work is the adjugate identity over a commutative ring.

**Paper or page:** [Proof of Cayley-Hamilton theorem using polynomials over the algebra of module endomorphisms](https://arxiv.org/abs/2105.09285v2), [Proof of Cayley-Hamilton theorem using polynomials over the algebra of module endomorphisms](https://arxiv.org/abs/2105.09285v2). It says: “These structures provide a very short proof of the Cayley-Hamilton theorem, which may be viewed as a reformulation of the proof in Algebra by Serge Lang.”

**Sources:**

- [Alexey Muranov, Proof of Cayley-Hamilton theorem using polynomials over the algebra of module endomorphisms, Linear Algebra and its Applications 645 (2022), 165–169](https://arxiv.org/abs/2105.09285v2)

### Minimal polynomials as ideal generators give least common multiples for direct sums

**Remember:** A polynomial kills a direct sum exactly when it kills both parts.

*True by definition. Confidence: medium.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A21. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The polynomials that kill A form an ideal in F\[t\], and the minimal polynomial of A is the monic generator of that ideal.

**Problem.** Let A act on V and B act on W, both finite-dimensional. The minimal polynomial of A ⊕ B on V ⊕ W is the least common multiple of the minimal polynomials of A and B.

**How the definition helps.** A polynomial kills A ⊕ B exactly when it kills both A and B, since evaluation acts on the two summands separately. So the ideal for A ⊕ B is the intersection of the two ideals, and its monic generator is the least common multiple (our own).

**Wikipedia:** [Minimal polynomial (linear algebra)](https://en.wikipedia.org/wiki/Minimal_polynomial_%28linear_algebra%29). It says: “any ideal is generated by a single polynomial, which is unique up to a unit in F\[t\].”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative eigenvalues select one matrix square root

**Remember:** Choose the nonnegative root on every eigenspace.

*Rules out counterexamples.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A real symmetric matrix is positive semidefinite if all its eigenvalues are nonnegative. A positive semidefinite square root of A is a real symmetric positive semidefinite matrix B with B² = A.

**Problem.** Every real symmetric positive semidefinite matrix has exactly one real symmetric positive semidefinite square root.

**How the definition helps.** The spectral theorem gives a root: replace each eigenvalue of A by its nonnegative square root (our own). Any such root B commutes with A, so it preserves each eigenspace of A, where its eigenvalues must be the nonnegative root of that eigenvalue (our own). Without the sign condition, \[1\] and \[−1\] both square to \[1\] (our own).

**Wikipedia:** [Square root of a matrix](https://en.wikipedia.org/wiki/Square_root_of_a_matrix). It says: “there is exactly one positive semidefinite and symmetric matrix B such that A = BB”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.39](https://linear.axler.net/LADR4e.pdf)

### Nonzero singular values count the rank

**Remember:** Count the directions that are not sent to zero.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The singular value decomposition writes a real or complex matrix, in suitable orthonormal bases, as a rectangular diagonal matrix whose nonnegative diagonal entries are its singular values.

**Problem.** The rank of A is the number of positive singular values, with repeats counted.

**How the definition helps.** Unitary changes of basis do not change rank, and a diagonal matrix has rank equal to its number of nonzero entries (our own).

**Wikipedia:** [Singular value decomposition](https://en.wikipedia.org/wiki/Singular_value_decomposition). It says: “equals the number of non-zero singular values”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.68–7.70](https://linear.axler.net/LADR4e.pdf)

### Normal eigenvalues give singular values by absolute value

**Remember:** Normal eigenvalues encode stretching in their absolute values.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A complex square matrix A is normal if it commutes with its conjugate transpose Aᴴ. By the spectral theorem, this means it has an orthonormal eigenbasis (our own). Its singular values are the nonnegative square roots of the eigenvalues of AᴴA.

**Problem.** For a normal complex matrix, the singular values are the absolute values of its eigenvalues, counting repeats.

**How the definition helps.** In an orthonormal eigenbasis with eigenvalues λᵢ, AᴴA is diagonal with entries \|λᵢ\|², so its singular values are the \|λᵢ\| (our own).

**Wikipedia:** [Singular value](https://en.wikipedia.org/wiki/Singular_value). It says: “its singular values are the absolute values of its eigenvalues”

**Sources:** none listed. No primary source with a working link was found.

### Singular values show the largest stretch

**Remember:** The most stretched direction is a singular vector.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The singular value decomposition puts a matrix, in orthonormal bases, into diagonal form with nonnegative entries, its singular values. So the matrix stretches each new coordinate axis by one singular value (our own).

**Problem.** For a matrix with at least one row and one column, the largest singular value equals its operator norm, the largest length of Ax over unit vectors x.

**How the definition helps.** Changes of orthonormal basis preserve length, so the matrix and its diagonal form have the same largest stretch (our own). A diagonal matrix stretches no unit vector by more than its largest entry, and it attains that along that entry's axis (our own).

**Wikipedia:** [Singular value](https://en.wikipedia.org/wiki/Singular_value). It says: “is equal to the operator norm of T”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.82–7.88](https://linear.axler.net/LADR4e.pdf)

### Spectral projectors separate eigenvectors with different eigenvalues

**Remember:** A polynomial can keep one eigenspace and kill all the others.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a finite set S of distinct eigenvalues of T and λ in S, the λ-projector is the product of (T − μI)/(λ − μ) over all μ in S other than λ. It fixes every λ-eigenvector and sends every eigenvector for the other eigenvalues in S to zero (our own).

**Problem.** Nonzero eigenvectors for distinct eigenvalues of a linear map are linearly independent.

**How the definition helps.** Apply the λ-projector to a linear relation among the eigenvectors: only the λ-term survives, so its coefficient is zero (our own). Each factor (T − μI)/(λ − μ) kills μ-eigenvectors and fixes λ-eigenvectors, which gives the two properties (our own).

**Paper or page:** [Eigenvectors Corresponding to Distinct Eigenvalues of Linear Operator are Linearly Independent](https://proofwiki.org/wiki/Eigenvectors_Corresponding_to_Distinct_Eigenvalues_of_Linear_Operator_are_Linearly_Independent). It says: “Then {x₁, …, xₙ} is a linearly independent set.”

**Sources:** none listed. No primary source with a working link was found.

### The adjoint swaps singular directions without changing singular values

**Remember:** Swap the two orthonormal bases and keep the same stretches.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The singular values of a matrix A are the diagonal entries of D in a factorization A = UDV\*, where U and V are unitary and D is a rectangular diagonal matrix with nonnegative entries. Taking the adjoint gives A\* = VDᵀU\*, a factorization of the same kind.

**Problem.** A matrix and its adjoint have the same singular values, counting repeats and using the smaller matrix dimension for the list length.

**How the definition helps.** A\* = VDᵀU\* has the same form with the two unitary bases swapped (our own). The transpose Dᵀ has the same diagonal entries as D, so the singular values agree (our own).

**nLab:** [adjoint operator](https://ncatlab.org/nlab/show/adjoint+operator). It says: “given by passage to the complex conjugate transpose matrix”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.75](https://linear.axler.net/LADR4e.pdf)

### Defining projectors by the Chinese remainder theorem splits generalized eigenspaces

**Remember:** A residue projector keeps one factor and kills the others.

*True by definition.* MSC 15A20 (Diagonalization, Jordan forms), 15A18. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** Factor the minimal polynomial of A into coprime powers (t − λᵢ)<sup>mᵢ</sup> with distinct λᵢ. The ith projector is Pᵢ = eᵢ(A), where eᵢ is a polynomial that is 1 modulo the ith power and 0 modulo every other power, as the Chinese remainder theorem provides.

**Problem.** The projectors sum to the identity, each satisfies Pᵢ² = Pᵢ, and PᵢPⱼ = 0 when i ≠ j. The range of Pᵢ is the generalized eigenspace for λᵢ, the kernel of (A − λᵢI) to the power mᵢ.

**How the definition helps.** The identities ∑eᵢ = 1, eᵢ² = eᵢ and eᵢeⱼ = 0 hold modulo every power, hence modulo the minimal polynomial, so they hold at A (our own). (A − λᵢI)<sup>mᵢ</sup> kills the range of Pᵢ, because (t − λᵢ)<sup>mᵢ</sup> eᵢ is a multiple of the minimal polynomial. Pᵢ fixes that kernel, because eᵢ − 1 is divisible by (t − λᵢ)<sup>mᵢ</sup>.

**Paper or page:** [Interplay between the Chinese Remainder Theorem and the Lagrange Interpolation Formula](https://arxiv.org/abs/2408.07360). It says: “Let R be a commutative, unital ring. Suppose that A₁, …, Aₙ are pairwise coprime ideals in R”

**Sources:** none listed. No primary source with a working link was found.

### Potentially diagonalizable parts give the Jordan–Chevalley decomposition over perfect fields

**Remember:** Ask for diagonalizable after a field extension, not before.

*Makes the theorem clean to state or prove.* MSC 15A20 (Diagonalization, Jordan forms). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A Jordan–Chevalley decomposition writes x = s + n, where s and n commute, n is nilpotent, and s is potentially diagonalizable, meaning diagonalizable after some field extension.

**Problem.** A finite-dimensional linear map x has a Jordan–Chevalley decomposition exactly when its minimal polynomial is a product of separable polynomials, and then it is unique with s and n polynomials in x. Over a perfect field, such as ℚ or a finite field, every x has one.

**How the definition helps.** Asking for diagonalizability only after extension lets the eigenvalues of s lie outside the field, while s and n still act over the original field. A real quarter-turn is such an s: it has no real eigenvector but is diagonalizable over ℂ (our own). The Jordan–Chevalley theorem gives the criterion and uniqueness, building s as a polynomial in x by using separability.

**Wikipedia:** [Jordan–Chevalley decomposition](https://en.wikipedia.org/wiki/Jordan%E2%80%93Chevalley_decomposition). It says: “Then x admits a Jordan-Chevalley decomposition if and only if the minimal polynomial of x is a product of separable polynomials.”

**Sources:** none listed. No primary source with a working link was found.

### A common invariant flag triangularizes commuting matrices together

**Remember:** One nested chain of subspaces, each preserved by every matrix.

*Makes the theorem clean to state or prove.* MSC 15A21 (Canonical forms, reductions, classification), 15A18. arXiv math.RA. Level 2: later undergraduate.

**Definition.** A common full invariant flag is a nested chain of subspaces, one of each dimension, that every matrix in the family maps into itself. A basis whose first k vectors span the k-dimensional subspace makes every matrix upper triangular (our own).

**Problem.** Pairwise commuting complex square matrices of the same size have a common full invariant flag. A basis built along this flag makes every matrix upper triangular.

**How the definition helps.** Commuting matrices have a common eigenvector, because each matrix preserves every eigenspace of the others (our own). Its line is the first step of the flag, and the matrices still commute on the quotient by that line (our own). Induction on dimension then builds the rest of the flag (our own).

**Wikipedia:** [Triangular matrix](https://en.wikipedia.org/wiki/Triangular_matrix). It says: “This can be proven by first showing that commuting matrices have a common eigenvector, and then inducting on dimension as before.”

**Sources:**

- [Kenneth Hoffman and Ray Kunze, Linear Algebra, 2nd ed., §6.5](https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf)

### A full invariant flag makes triangularization an induction

**Remember:** One preserved subspace of each dimension, all nested.

*Makes the theorem clean to state or prove.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A full invariant flag of a map is a nested chain of subspaces, one of each dimension, that the map sends into themselves. A basis whose first k vectors span the k-dimensional subspace is exactly a basis that makes the matrix upper triangular (our own).

**Problem.** A square matrix has a full invariant flag over its field exactly when its characteristic polynomial splits into linear factors there. In a basis built along this flag, the matrix is upper triangular.

**How the definition helps.** An eigenline starts the flag, and the induced map on the quotient has the characteristic polynomial with that linear factor removed, so it still splits (our own). Induction gives a flag in the quotient, and inverse images lift it (our own). Conversely, the diagonal of a triangular matrix gives the linear factors of the characteristic polynomial (our own).

**Wikipedia:** [Triangular matrix](https://en.wikipedia.org/wiki/Triangular_matrix). It says: “by taking the quotient space by the eigenvector and inducting to show that A stabilizes a flag”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., §5C](https://linear.axler.net/LADR4e.pdf)

### A split square-free minimal polynomial forces diagonalizability

**Remember:** Diagonalizable means every cyclic piece is a single eigenline.

*Rules out counterexamples.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Let T be an operator on a finite-dimensional space over a field F, with x acting as T. Its elementary divisors are the powers p(x)ᵏ of irreducible polynomials p for which the space splits into cyclic pieces F\[x\]/(p(x)ᵏ). A piece F\[x\]/(x − λ) is a single line on which T acts as λ (our own).

**Problem.** The operator is diagonalizable exactly when every elementary divisor is linear. Equivalently, its minimal polynomial is a product of distinct linear factors.

**How the definition helps.** If every elementary divisor is linear, the pieces are eigenlines and give an eigenbasis; conversely an eigenbasis gives such pieces, and the elementary divisors are unique. The minimal polynomial is the least common multiple of the elementary divisors, so it has distinct linear factors exactly when all are linear. On the piece F\[x\]/(x²), T is nonzero with T² = 0, so it is not diagonalizable.

**Wikipedia:** [Jordan normal form](https://en.wikipedia.org/wiki/Jordan_normal_form). It says: “the Jordan normal form is concerned with representing M in terms of blocks associated to the elementary divisors.”

**Sources:** none listed. No primary source with a working link was found.

### Distinct irreducible factors make semisimplicity pass to restrictions and quotients

**Remember:** A divisor cannot pick up a repeated factor.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** An operator on a finite-dimensional space is semisimple if its minimal polynomial, the monic polynomial of least degree that kills it, has no repeated irreducible factor.

**Problem.** A semisimple operator remains semisimple on each invariant subspace and on the quotient by that subspace.

**How the definition helps.** The minimal polynomial of the operator kills its restriction and its quotient, so their minimal polynomials divide it (our own). A divisor of a polynomial with no repeated irreducible factor has no repeated factor either (our own).

**Wikipedia:** [Semisimple operator](https://en.wikipedia.org/wiki/Semisimple_operator). It says: “a linear operator is semisimple if its minimal polynomial is a product of distinct irreducible polynomials.”

**Sources:**

- [Kenneth Hoffman and Ray Kunze, Linear Algebra, 2nd ed., §7.5](https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf)

### Divisibility and no trivial factors make invariant factors unique

**Remember:** Each factor divides the next, and no factor is 1.

*Rules out counterexamples.* MSC 15A21 (Canonical forms, reductions, classification), 13C05. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The invariant factors of a matrix A over F are the monic nonconstant polynomials f₁, …, fₖ, each dividing the next, for which the space, with X acting as A, splits as the direct sum of the cyclic modules F\[X\]/(fᵢ).

**Problem.** Two square matrices over a field are similar if and only if they have the same invariant factors. Equivalently, they have the same rational canonical form, the block matrix of companion matrices of the invariant factors.

**How the definition helps.** The structure theorem makes this divisibility-ordered list unique, and the list fixes the module up to isomorphism. A module isomorphism is exactly an invertible matrix that turns one matrix into the other (our own). Without divisibility, F\[X\]/(X(X − 1)) would also have the list X, X − 1 (our own), and allowing 1 would add trivial summands.

**Wikipedia:** [Frobenius normal form](https://en.wikipedia.org/wiki/Frobenius_normal_form). It says: “in the list of associated minimal polynomials each one must divide the next (and the constant polynomial 1 is forbidden to exclude trivial cyclic subspaces).”

**Sources:** none listed. No primary source with a working link was found.

### Invariant factors detect a cyclic vector

**Remember:** The largest factor equals their product only for a single block.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The invariant factors of T are the nonconstant monic polynomials f₁, …, fₖ, each dividing the next, for which the space splits into cyclic pieces F\[x\]/(fᵢ), with x acting as T. The last factor is the minimal polynomial, and their product is the characteristic polynomial.

**Problem.** A linear operator on a nonzero finite-dimensional space has a cyclic vector exactly when its minimal and characteristic polynomials agree. A cyclic vector and its iterates under the operator span the space.

**How the definition helps.** Each factor has positive degree, so the last factor equals the product exactly when there is only one factor. A single piece F\[x\]/(f) has the class of 1 as a cyclic vector, and a cyclic vector makes the space one such piece (our own).

**Wikipedia:** [Frobenius normal form](https://en.wikipedia.org/wiki/Frobenius_normal_form). It says: “When the minimal polynomial is identical to the characteristic polynomial (the case k = 1), the Frobenius normal form is the companion matrix of the characteristic polynomial.”

**Sources:** none listed. No primary source with a working link was found.

### Invariant factors give both matrix polynomials without determinant expansion

**Remember:** Multiply the factors for the characteristic polynomial and keep the last for the minimal polynomial.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification), 15A15. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Split the space into nonzero invariant pieces, each spanned by the iterates of one vector, with minimal polynomials f₁, …, fₖ each dividing the next. These fᵢ are the invariant factors. On each piece, the characteristic and minimal polynomials both equal fᵢ (our own).

**Problem.** For a nonempty matrix, the characteristic polynomial is the product of the invariant factors. The minimal polynomial is the last invariant factor.

**How the definition helps.** The characteristic polynomial of a block diagonal matrix is the product of the block polynomials (our own). A polynomial kills the matrix exactly when every fᵢ divides it, and fₖ is a multiple of all the others, so fₖ is the minimal polynomial (our own). The cyclic decomposition theorem supplies such pieces and makes the factors unique (our own).

**Wikipedia:** [Frobenius normal form](https://en.wikipedia.org/wiki/Frobenius_normal_form). It says: “the product of the invariant factors gives the characteristic polynomial.”

**Sources:**

- [Kenneth Hoffman and Ray Kunze, Linear Algebra, 2nd ed., §7.2](https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf)

### Jordan chains make block sizes readable from kernel dimensions

**Remember:** Each chain adds one new kernel vector at each step until it ends.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification), 15A18. arXiv math.RA. Level 2: later undergraduate.

**Definition.** A Jordan chain for λ of length ℓ is a list of ℓ nonzero vectors that A − λI moves one step back, sending the first vector to zero. In a Jordan basis each chain spans one block, and on that block the kernel of (A − λI)ʲ is spanned by its first min(j, ℓ) vectors (our own).

**Problem.** When the characteristic polynomial splits, the increase in kernel dimension from power j − 1 to j counts the λ-blocks of size at least j. These counts for all eigenvalues and all positive j determine the Jordan form up to block order.

**How the definition helps.** So each λ-chain of length at least j adds exactly one dimension when the power rises from j − 1 to j (our own). Blocks for other eigenvalues add nothing, because A − λI is invertible on them (our own). Subtracting consecutive counts gives the number of blocks of each exact size, and the Jordan basis theorem supplies the chains (our own).

**Wikipedia:** [Jordan normal form](https://en.wikipedia.org/wiki/Jordan_normal_form). It says: “The number of Jordan blocks corresponding to λᵢ of size at least j is dim ker(A − λᵢI)ʲ − dim ker(A − λᵢI)ʲ⁻¹.”

**Sources:** none listed. No primary source with a working link was found.

### Nilpotent powers make each Jordan block exponential a finite sum

**Remember:** The scalar part gives exp(λ); the shift gives a finite sum.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification), 15A16. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Write a Jordan block of size m as λI + N, where the shift N sends each basis vector to its predecessor and the first to zero, so Nᵐ = 0 (our own). The matrix exponential is the series exp(A) = ∑ Aᵏ/k! over k ≥ 0.

**Problem.** The exponential of a Jordan block of size m at λ is exp(λ) times the first m terms of the exponential series for N.

**How the definition helps.** λI commutes with N, so exp(λI + N) = exp(λ) exp(N) (our own). Since Nᵐ = 0, the series for exp(N) stops after its first m terms (our own).

**Wikipedia:** [Matrix exponential](https://en.wikipedia.org/wiki/Matrix_exponential). It says: “the series terminates after a finite number of terms”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial scalar action gives rational canonical form

**Remember:** Decompose the polynomial module, then read off its companion blocks.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Make the space an F\[x\]-module by letting x act as the operator T. The companion matrix of a monic polynomial f of degree d is the matrix of multiplication by x on F\[x\]/(f) in the basis 1, x, …, xᵈ⁻¹.

**Problem.** Every linear operator on a finite-dimensional space over a field has a rational canonical form over that field. Its blocks are companions of nonconstant monic polynomials, each dividing the next.

**How the definition helps.** The polynomial action turns the search for a good basis into a decomposition of the module. The structure theorem over F\[x\] splits it into cyclic pieces F\[x\]/(fᵢ) with each fᵢ dividing the next, and no free piece occurs because F\[x\] has infinite dimension over F (our own). The power bases of the pieces give the companion blocks.

**Wikipedia:** [Frobenius normal form](https://en.wikipedia.org/wiki/Frobenius_normal_form). It says: “Apply the structure theorem for finitely generated modules over a principal ideal domain to V, viewing it as an F\[X\]-module.”

**Sources:** none listed. No primary source with a working link was found.

### Preserved eigenspaces give commuting diagonalizable matrices a common basis

**Remember:** A commuting matrix acts inside each eigenspace, not across them.

*Rules out counterexamples.* MSC 15A21 (Canonical forms, reductions, classification), 15A18. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Matrices commute in pairs when AB = BA for every two of them. Then each maps every eigenspace of another into itself, since Bv = μv gives B(Av) = μAv (our own). A common eigenbasis is one basis of eigenvectors for every matrix in the family.

**Problem.** A finite family of diagonalizable matrices of the same size over one field has a common eigenbasis exactly when its matrices commute in pairs.

**How the definition helps.** On an eigenspace of one matrix, each other matrix stays diagonalizable, because its minimal polynomial divides the original one (our own). So splitting eigenspaces matrix by matrix gives a common eigenbasis, and conversely diagonal matrices commute (our own). The diagonalizable projections (x,y) ↦ (x,0) and (x,y) ↦ (x + y,0) do not commute and share no eigenbasis (our own).

**Wikipedia:** [Diagonalizable matrix](https://en.wikipedia.org/wiki/Diagonalizable_matrix). It says: “A set of diagonalizable matrices commutes if and only if the set is simultaneously diagonalizable.”

**Sources:**

- [Kenneth Hoffman and Ray Kunze, Linear Algebra, 2nd ed., §6.5](https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf)

### Real Jordan blocks combine conjugate chains into one real block

**Remember:** One real block records both members of a conjugate pair.

*Makes the theorem clean to state or prove.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A real Jordan block for a nonreal eigenvalue a + bi is its complex Jordan block with each entry replaced by its real 2 × 2 matrix of multiplication on ℂ, so a + bi becomes the matrix with rows (a, −b) and (b, a). It records the eigenvalue and its conjugate in one real block, and a real eigenvalue keeps its ordinary Jordan block.

**Problem.** Every real square matrix has a real basis in which it is a direct sum of these real Jordan blocks.

**How the definition helps.** A nonreal chain and its conjugate chain span a space with a real basis: the real parts and the negatives of the imaginary parts of the chain vectors (our own). In that basis the matrix acts exactly as the real block (our own). Complex Jordan form supplies the chains, which for a real matrix can be chosen in conjugate pairs (our own).

**Wikipedia:** [Jordan normal form](https://en.wikipedia.org/wiki/Jordan_normal_form). It says: “For a real matrix the nonreal eigenvectors and generalized eigenvectors can always be chosen to form complex conjugate pairs.”

**Sources:** none listed. No primary source with a working link was found.

### Smith normal form separates the cyclic factors

**Remember:** One diagonal relation per generator gives one cyclic factor.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification), 20K25. arXiv math.GR. Level 2: later undergraduate.

**Definition.** Write the group as generators modulo integer relations, recorded in a relation matrix. Invertible integer row and column operations bring this matrix to Smith normal form, with diagonal entries d₁, d₂, … ≥ 0, each dividing the next, so each relation now says that dᵢ times one new generator is zero.

**Problem.** Every finitely generated abelian group is a finite direct sum of infinite cyclic groups and finite cyclic groups. The finite orders can be chosen so that each divides the next.

**How the definition helps.** With diagonal relations, the group is the direct sum of the cyclic groups ℤ/dᵢ, with ℤ for dᵢ = 0 and for generators that no relation touches (our own explanation). Entries dᵢ = 1 give trivial summands, which drop out. The work lies in finding a finite presentation and applying the Smith theorem, which changes the two integer bases.

**Paper or page:** [Theorem 7.1. (Smith normal form)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then we can select a pair of new bases for M and N such that T has only diagonal entries”

**Sources:**

- [H. J. S. Smith, On systems of linear indeterminate equations and congruences (1861)](https://doi.org/10.1098/rstl.1861.0016)

### Stable kernels and images split a map at zero

**Remember:** Once both chains stop changing, one part dies, one stays invertible.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For an operator T on a finite-dimensional space, the kernels of Tⁿ grow and the images shrink until both stop changing at some power N (our own). The stable kernel ker(Tᴺ) is where T is nilpotent (our own), and the stable image im(Tᴺ) is mapped by T onto itself (our own).

**Problem.** Every finite-dimensional linear operator splits into a nilpotent restriction on its stable kernel and an invertible restriction on its stable image.

**How the definition helps.** T maps the stable image onto itself, so it is invertible there and the two spaces meet only at zero (our own). Rank plus nullity for Tᴺ makes their dimensions add up to the whole space (our own).

**Wikipedia:** [Fitting lemma](https://en.wikipedia.org/wiki/Fitting_lemma). It says: “To prove Fitting's lemma, we take an endomorphism f of M and consider the following two chains of submodules:”

**Sources:** none listed. No primary source with a working link was found.

### The minimal polynomial as ideal generator divides every annihilating polynomial

**Remember:** A generator divides every element of its ideal.

*True by definition. Confidence: medium.* MSC 15A21 (Canonical forms, reductions, classification), 15A18. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a linear map T on a finite-dimensional space over a field, the polynomials p with p(T) = 0 form an ideal. The minimal polynomial is its monic generator, so this ideal is exactly the set of its multiples.

**Problem.** If p(T) = 0, the minimal polynomial of T divides p. In particular, it divides the characteristic polynomial.

**How the definition helps.** By the definition, every polynomial that kills T is a multiple of the generator. Cayley–Hamilton puts the characteristic polynomial in that ideal. Polynomial division shows that the generator is also the monic polynomial of least degree that kills T (our own).

**Wikipedia:** [Minimal polynomial (linear algebra)](https://en.wikipedia.org/wiki/Minimal_polynomial_%28linear_algebra%29). It says: “The minimal polynomial is thus defined to be the monic polynomial that generates I<sub>T</sub>.”

**Sources:** none listed. No primary source with a working link was found.

### The rational canonical form makes similarity independent of the field

**Remember:** No factoring needed, so no field extension can change it.

*Makes the theorem clean to state or prove.* MSC 15A21 (Canonical forms, reductions, classification), 13C05. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The rational canonical form of A over F is the block diagonal matrix of companion matrices of its invariant factors, monic polynomials each dividing the next. Its shape needs no factoring, so a matrix of this shape over F is also one over every larger field L.

**Problem.** Let F be a subfield of L, and let A and B have entries in F. If A and B are similar over L, then they are already similar over F.

**How the definition helps.** The form of A over F is a matrix over L of the same shape, so uniqueness makes it the form over L as well. Matrices similar over L share that form, so A and B have the same form over F and are similar over F (our own).

**Wikipedia:** [Frobenius normal form](https://en.wikipedia.org/wiki/Frobenius_normal_form). It says: “The Frobenius normal form does not reflect any form of factorization of the characteristic polynomial, even if it does exist over the ground field F. This implies that it is invariant when F is replaced by a different field”

**Sources:** none listed. No primary source with a working link was found.

### Preserving initial spans gives Schur’s unitary triangularization

**Remember:** Gram–Schmidt changes the basis without changing its initial spans.

*True by definition.* MSC 15A23 (Factorization of matrices). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A matrix is upper triangular in a basis exactly when it maps the span of the first k basis vectors into itself, for every k.

**Problem.** Every complex square matrix is upper triangular in some orthonormal basis.

**How the definition helps.** Gram–Schmidt turns a basis into an orthonormal one with the same initial spans, so triangularity survives (our own). Ordinary triangularization over ℂ supplies the first basis, because every complex characteristic polynomial splits (our own).

**Wikipedia:** [Schur decomposition](https://en.wikipedia.org/wiki/Schur_decomposition). It says: “unitarily similar to an upper triangular matrix”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 6.32 and 6.37–6.38](https://linear.axler.net/LADR4e.pdf)

### Strict leading minor signs make the triangular positivity test work

**Remember:** Each pivot is the ratio of two consecutive leading determinants.

*Rules out counterexamples.* MSC 15A23 (Factorization of matrices). arXiv math.RA. Level 2: later undergraduate.

**Definition.** When the leading principal minors of a real symmetric matrix A are nonzero, elimination writes A = LDLᵀ. Here L is lower triangular with ones on its diagonal, and D is diagonal. The pivots, the entries of D, are ratios of consecutive leading minors, and xᵀAx = (Lᵀx)ᵀD(Lᵀx) (our own).

**Problem.** A real symmetric matrix is positive definite exactly when every leading principal minor is positive. These minors are the determinants of its upper left square blocks.

**How the definition helps.** The sum of squares shows that A is positive definite exactly when every pivot is positive, which holds exactly when every leading minor is positive (our own). If A is positive definite, each leading block is positive definite, so its minor is nonzero and the factorization exists (our own). Weak inequalities fail: the diagonal matrix with entries 0 and −1 has leading minors 0 and 0 but is not positive definite (our own).

**Wikipedia:** [Sylvester's criterion](https://en.wikipedia.org/wiki/Sylvester%27s_criterion). It says: “the leading principal minors are positive: det Mₖ &gt; 0”

**Sources:**

- [George T. Gilbert, Positive Definite Matrices and Sylvester’s Criterion (1991)](https://doi.org/10.1080/00029890.1991.11995702)

### Compression makes eigenvalue interlacing a restriction of subspaces

**Remember:** A compression tests the same form on fewer subspaces.

*True by definition.* MSC 15A42 (Inequalities involving eigenvalues and eigenvectors), 15A18. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The compression of a real symmetric matrix A to a subspace W sends x in W to the orthogonal projection of Ax onto W. It is the symmetric operator on W with the same quadratic form xᵀAx, so its min–max tests use only the subspaces that lie in W (our own).

**Problem.** List the eigenvalues of A and its compression in increasing order, counting repeats. If their sizes are n and m, compressed eigenvalue k lies between original eigenvalues k and k + n − m.

**How the definition helps.** By the min–max theorem, each eigenvalue is an extreme value of the quadratic form over a family of subspaces, and the compression uses only those inside W (our own). A minimum over fewer k-dimensional subspaces is larger, so compressed eigenvalue k is at least eigenvalue k of A (our own). A maximum over fewer subspaces of dimension m − k + 1 is smaller, so it is at most eigenvalue k + n − m (our own).

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “When n − m = 1, we have αⱼ ≤ βⱼ ≤ αⱼ₊₁”

**Sources:**

- [Suk-Geun Hwang, Cauchy’s Interlace Theorem for Eigenvalues of Hermitian Matrices (2004)](https://doi.org/10.1080/00029890.2004.11920060)

### Variational eigenvalues make Hermitian eigenvalues increase under positive semidefinite perturbations

**Remember:** Pointwise order survives a minimum and then a maximum.

*True by definition.* MSC 15A42 (Inequalities involving eigenvalues and eigenvectors), 15B57. arXiv math.RA, math.SP. Level 2: later undergraduate.

**Definition.** For an n × n Hermitian matrix A, λₖ(A) is the maximum, over k-dimensional subspaces U, of the minimum of ⟨Ax,x⟩ over unit vectors x in U. By the Courant–Fischer theorem this is the kth largest eigenvalue.

**Problem.** Let A and B be Hermitian matrices of the same size, with B − A positive semidefinite. Then λₖ(B) ≥ λₖ(A) for every k.

**How the definition helps.** B − A positive semidefinite gives ⟨Bx,x⟩ ≥ ⟨Ax,x⟩ for every unit vector x. Taking the minimum over each U and then the maximum over all U keeps this inequality (application our own).

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “a result that gives a variational characterization of eigenvalues of compact Hermitian operators on Hilbert spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Perpendicular heights give Hadamard’s determinant bound

**Remember:** Each perpendicular height is at most the full column length.

*True by definition.* MSC 15A45 (Miscellaneous inequalities involving matrices), 26D15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The absolute determinant of a real square matrix is the volume of the slanted box (parallelepiped) spanned by its columns. This volume is the product of heights: the first column's length, then each column's distance from the span of the earlier columns.

**Problem.** The absolute determinant is at most the product of the column lengths. If no column is zero, equality holds exactly when the columns are pairwise perpendicular.

**How the definition helps.** Each height is the length of a column's part perpendicular to the earlier columns, so by Pythagoras it is at most the column's length (our own). For nonzero columns, equality needs every column perpendicular to all earlier ones (our own). The work is to match this volume with the usual determinant, for example by Gram–Schmidt (our own).

**Paper or page:** [Exterior powers and pointwise creation operators](https://arxiv.org/abs/2004.11993). It says: “\|det(A)\| ≤ ∏ⱼ₌₁ⁿ (∑ᵢ₌₁ⁿ \|aᵢⱼ\|²)¹⁄²”

**Sources:** none listed. No primary source with a working link was found.

### Alternating forms have even rank over every field

**Remember:** An alternating form pairs every vector with itself to give zero.

*Rules out counterexamples.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A bilinear form b is alternating if b(x,x) = 0 for every x, so every vector pairs to zero with itself. This is stronger than skew symmetry, b(x,y) = −b(y,x), when 2 = 0 in the field.

**Problem.** Every alternating bilinear form on a finite-dimensional vector space has even rank.

**How the definition helps.** If b(x,y) = c ≠ 0, the zero diagonal makes the matrix of b on the span of x and y equal to rows (0, c) and (−c, 0), which has rank two (our own). That plane splits off by its orthogonal complement, and induction gives even rank (our own). Over the field with two elements, the skew-symmetric matrix \[1\] has rank one (our own).

**nLab:** [bilinear form](https://ncatlab.org/nlab/show/bilinear+form). It says: “It is called alternating if ⟨x,x⟩ = 0 for all x ∈ V.”

**Sources:** none listed. No primary source with a working link was found.

### Complex polarization detects self-adjointness from diagonal values

**Remember:** Over the complex numbers, the diagonal remembers every pair.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The quadratic form of a complex square matrix A is q(x) = xᴴAx, where ᴴ means conjugate transpose. Over ℂ, polarization recovers every pairing xᴴAy from q, so two matrices with the same quadratic form are equal.

**Problem.** A complex matrix is self-adjoint exactly when xᴴAx is real for every x.

**How the definition helps.** The quadratic form of Aᴴ is the complex conjugate of that of A (our own). If q is real, A and Aᴴ have the same quadratic form, so polarization gives A = Aᴴ; the converse is immediate (our own). Polarization uses q at x ± y and x ± iy, which is why it needs complex scalars (our own).

**Paper or page:** [Operator is Hermitian iff Numerical Range is Real](https://proofwiki.org/wiki/Operator_is_Hermitian_iff_Numerical_Range_is_Real). It says: “∀ h ∈ ℋ: ⟨Ah,h⟩ℋ ∈ ℝ”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.13–7.14](https://linear.axler.net/LADR4e.pdf)

### Defining inertia indices as maximal definite dimensions proves Sylvester's law of inertia

**Remember:** Coordinate changes carry definite subspaces to definite subspaces of the same dimension.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The positive index of a real quadratic form q is the largest dimension of a subspace on which q is positive definite, and the negative index is the same for −q. This uses no basis, so it cannot depend on the chosen diagonalization.

**Problem.** In every basis that diagonalizes q, the numbers of positive and of negative diagonal entries are the same. This is Sylvester's law of inertia.

**How the definition helps.** In a diagonal basis, the p positive directions span a positive definite subspace. Any larger subspace meets the span of the other directions in a nonzero vector, where q ≤ 0, so it is not positive definite. The same argument for −q gives the negative count (our own).

**Wikipedia:** [Sylvester's law of inertia](https://en.wikipedia.org/wiki/Sylvester%27s_law_of_inertia). It says: “These dimensions are the positive and negative indices of inertia of q.”

**Sources:** none listed. No primary source with a working link was found.

### Nondegeneracy gives the dimension of an orthogonal complement

**Remember:** A nondegenerate form represents every linear functional exactly once.

*Rules out counterexamples.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A symmetric bilinear form b on V is nondegenerate if only the zero vector pairs to zero with every vector. For a subspace W, W⊥ is the set of v with b(v,w) = 0 for every w in W. For finite-dimensional V, v ↦ b(v,·) maps V isomorphically onto its dual, carrying W⊥ onto the functionals vanishing on W (our own).

**Problem.** For a nondegenerate symmetric bilinear form on a finite-dimensional space V, the dimension of W⊥ is the dimension of V minus the dimension of W.

**How the definition helps.** The functionals that vanish on W form the kernel of restriction to W, which is onto because a basis of W extends to V (our own). So that space has dimension dim V − dim W (our own). For the pairing x₁y₁ on a plane, the second axis has the whole plane as its complement (our own).

**nLab:** [bilinear form](https://ncatlab.org/nlab/show/bilinear+form). It says: “It is called nondegenerate if the mate V → V∗ = hom(V, k) is injective”

**Sources:** none listed. No primary source with a working link was found.

### Polarization turns length preservation into inner product preservation

**Remember:** Knowing the lengths of the sum and difference recovers the inner product.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A linear isometry is a linear map that preserves lengths. In a real inner product space, the inner product is a combination of two lengths: ⟨x,y⟩ = (‖x + y‖² − ‖x − y‖²)/4.

**Problem.** A linear isometry between real inner product spaces preserves all inner products.

**How the definition helps.** A linear map T sends x ± y to Tx ± Ty, so it preserves both lengths in the formula and hence ⟨x,y⟩ (our own). Expanding the two squared lengths proves the formula (our own).

**Paper or page:** [Polarization Identity/Real Vector Space](https://proofwiki.org/wiki/Polarization_Identity/Real_Vector_Space). It says: “4⟨x,y⟩ = ‖x + y‖² − ‖x − y‖²”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.49](https://linear.axler.net/LADR4e.pdf)

### Positive definiteness makes every subspace split off orthogonally

**Remember:** Positivity means no nonzero vector is perpendicular to itself.

*Rules out counterexamples.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** An inner product is positive definite if ⟨x,x⟩ &gt; 0 for every nonzero x, so no nonzero vector is perpendicular to itself. The orthogonal complement W⊥ consists of the vectors perpendicular to every vector in W.

**Problem.** Let W be a subspace of a finite-dimensional real inner product space. Each vector has a unique expression w + z with w ∈ W and z ∈ W⊥.

**How the definition helps.** A vector in both W and W⊥ is perpendicular to itself, so it is zero (our own). The dimension formula for orthogonal complements makes W + W⊥ the whole space (our own). For the indefinite pairing x₁y₁ − x₂y₂, the line spanned by (1,1) is its own complement (our own).

**nLab:** [inner product space](https://ncatlab.org/nlab/show/inner+product+space). It says: “if ‖x‖² &gt; 0 whenever x ≠ 0”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 6.46–6.52](https://linear.axler.net/LADR4e.pdf)

### Pulling back both inputs gives matrix congruence

**Remember:** A basis change must enter on both sides of the form.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A bilinear form takes two vectors and returns a scalar, linearly in each. Its matrix A in a basis is the unique matrix that gives the value as xᵀAy, where x and y are the coordinate columns of the two vectors.

**Problem.** If the columns of S are the new basis vectors in old coordinates, the new matrix of the form is SᵀAS.

**How the definition helps.** The old coordinates are Sx and Sy, so the value is (Sx)ᵀA(Sy) = xᵀ(SᵀAS)y (our own). Uniqueness of the matrix then makes SᵀAS the new matrix (our own).

**Paper or page:** [Matrix of Bilinear Form Under Change of Basis](https://proofwiki.org/wiki/Matrix_of_Bilinear_Form_Under_Change_of_Basis). It says: “Then its matrix relative to 𝓑 equals:
M₍f,𝓑₎ = M₍𝓐,𝓑₎ᵀ M₍f,𝓐₎ M₍𝓐,𝓑₎”

**Sources:** none listed. No primary source with a working link was found.

### Self-adjoint projections are exactly orthogonal projections

**Remember:** A projection is orthogonal when it can switch sides in the inner product.

*True by definition. Confidence: medium.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A projection is a linear map P with P² = P. It is orthogonal if everything in its image is perpendicular to everything in its kernel, and self-adjoint if ⟨Px,y⟩ = ⟨x,Py⟩ for all x and y.

**Problem.** A projection on a finite-dimensional inner product space is orthogonal exactly when it is self-adjoint.

**How the definition helps.** If P is self-adjoint and Py = 0, then ⟨Px,y⟩ = ⟨x,Py⟩ = 0 (our own). Conversely, x − Px lies in the kernel, so orthogonality makes ⟨Px,y⟩ and ⟨x,Py⟩ both equal ⟨Px,Py⟩ (our own).

**nLab:** [orthogonal projection](https://ncatlab.org/nlab/show/orthogonal+projection). It says: “An orthogonal projection is a projection operator onto an orthogonal linear subspace in an inner product space.”

**Sources:** none listed. No primary source with a working link was found.

### The quadratic test detects positive eigenvalues

**Remember:** Test the quadratic form along each eigenvector.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products), 15A18. arXiv math.RA. Level 2: later undergraduate.

**Definition.** A real symmetric matrix A is positive definite when xᵀAx &gt; 0 for every nonzero x. On an eigenvector this value is the eigenvalue times the squared length (our own).

**Problem.** A real symmetric matrix is positive definite exactly when every eigenvalue is positive.

**How the definition helps.** Testing an eigenvector shows that every eigenvalue is positive (our own). Conversely, an orthonormal eigenbasis from the real spectral theorem writes xᵀAx as a sum of eigenvalues times squared coordinates, which is positive for x ≠ 0 (our own).

**Paper or page:** [Real Symmetric Positive Definite Matrix has Positive Eigenvalues](https://proofwiki.org/wiki/Real_Symmetric_Positive_Definite_Matrix_has_Positive_Eigenvalues). It says: “Then λ is real with λ &gt; 0.”

**Sources:** none listed. No primary source with a working link was found.

### The quadratic test keeps inverses positive definite

**Remember:** Test the inverse by feeding its output back into the original form.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A real symmetric matrix A is positive definite when xᵀAx &gt; 0 for every nonzero x. With x = Ay, the value xᵀA⁻¹x becomes yᵀAy, so the test for A⁻¹ is the test for A (our own).

**Problem.** A real symmetric positive definite matrix is invertible, and its inverse is positive definite.

**How the definition helps.** A nonzero kernel vector x would give xᵀAx = 0, so A is invertible (our own). A⁻¹ is symmetric, and for nonzero x the vector y = A⁻¹x is nonzero with xᵀA⁻¹x = yᵀAy &gt; 0 (our own).

**Wikipedia:** [Definite matrix](https://en.wikipedia.org/wiki/Definite_matrix). It says: “Every positive definite matrix is invertible and its inverse is also positive definite.”

**Sources:** none listed. No primary source with a working link was found.

### A basis of pairs makes tensor dimensions multiply

**Remember:** One basis vector per pair makes the dimensions multiply.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Given bases of V and W, model V ⊗ W as the scalar functions on pairs of basis vectors that are nonzero at only finitely many pairs. The tensor of two basis vectors is the function that is one at their pair and zero elsewhere, so these tensors form a basis with one element per pair (our own).

**Problem.** If V and W have dimensions m and n, then V ⊗ W has dimension mn. Its basis consists of the tensors of all pairs of basis vectors.

**How the definition helps.** There are mn pairs of basis vectors, so the dimension is mn (our own). The work is to show that this model is a tensor product: any values on basis pairs extend uniquely to a bilinear map (our own).

**Wikipedia:** [Tensor product](https://en.wikipedia.org/wiki/Tensor_product). It says: “is the product of the dimensions of V and W.”

**Paper or page:** [Tensor Product of Free Modules is Free](https://proofwiki.org/wiki/Tensor_Product_of_Free_Modules_is_Free). It says: “is a free A-module.”

**Sources:**

- [Sergei Winitzki, Linear Algebra via Exterior Products, version 1.3 (2020), §1.7.3](https://raw.githubusercontent.com/winitzki/linear-algebra-book/master/linalg.pdf)

### Bilinearity lets tensor products distribute over direct sums

**Remember:** A bilinear map out of a sum splits into two bilinear maps.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A tensor product V ⊗ W comes with a map (v,w) ↦ v ⊗ w, linear in each input, through which every such bilinear map factors by exactly one linear map.

**Problem.** The tensor product (U ⊕ V) ⊗ W is naturally isomorphic to (U ⊗ W) ⊕ (V ⊗ W).

**How the definition helps.** A bilinear map out of (U ⊕ V) × W is exactly a pair of bilinear maps out of U × W and V × W (our own). So both sides have naturally the same linear maps to every target, and the universal property gives the isomorphism without building an inverse on formal sums (our own).

**Paper or page:** [Lemma 10.12.3.](https://stacks.math.columbia.edu/tag/00CY). It says: “induce unique isomorphisms”

**Sources:**

- [Sergei Winitzki, Linear Algebra via Exterior Products, version 1.3 (2020), §1.7.5](https://raw.githubusercontent.com/winitzki/linear-algebra-book/master/linalg.pdf)

### Concatenation lets linear maps extend to algebra maps

**Remember:** Send each factor to its image, then multiply in order.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The tensor algebra of V is the direct sum of all tensor powers of V, with the scalars in degree zero. Its product joins tensors end to end, so v₁ ⊗ ⋯ ⊗ vₖ is the product of the vectors v₁, …, vₖ.

**Problem.** Every linear map from V to an associative algebra with identity extends uniquely to an identity-preserving algebra map from the tensor algebra. Both algebras use the same scalar field.

**How the definition helps.** An algebra map extending f must send v₁ ⊗ ⋯ ⊗ vₖ to f(v₁)⋯f(vₖ), and these tensors span each degree, which gives uniqueness (our own). That product is multilinear, so the tensor product property makes it a linear map in each degree, which gives existence (our own).

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “This monoid object is called the tensor algebra of V.”

**Wikipedia:** [Tensor algebra](https://en.wikipedia.org/wiki/Tensor_algebra). It says: “can be uniquely extended to an algebra homomorphism from T(V) to A”

**Paper or page:** [Lemma 10.12.4.](https://stacks.math.columbia.edu/tag/00CZ). It says: “there exists a unique R-module homomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Contracting each factor makes tensor product traces multiply

**Remember:** The two pairs of slots contract separately.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a finite-dimensional space V, identify w ⊗ λ in V ⊗ V∗ with the rank-one operator v ↦ λ(v)w. The trace is the linear map that sends each w ⊗ λ to λ(w).

**Problem.** For linear maps A and B from finite-dimensional spaces to themselves, tr(A ⊗ B) = tr(A) tr(B).

**How the definition helps.** For rank-one maps w ⊗ λ and w′ ⊗ λ′, the trace of their tensor product is λ(w)λ′(w′), the product of the two traces (our own). Both sides are bilinear in A and B, and every operator in finite dimension is a sum of rank-one maps, so the equality holds for all A and B (our own).

**Wikipedia:** [Kronecker product](https://en.wikipedia.org/wiki/Kronecker_product). It says: “tr(A⊗B) = tr A tr B”

**Paper or page:** [Trace in Terms of Dual Basis](https://proofwiki.org/wiki/Trace_in_Terms_of_Dual_Basis). It says: “tr f = ∑ᵢ₌₁ⁿ eᵢ∗(f(eᵢ))”

**Sources:** none listed. No primary source with a working link was found.

### Contraction gives the same trace in every basis

**Remember:** Evaluate the dual factor to get the trace without a basis.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** On a finite-dimensional space V, identify w ⊗ λ with the map v ↦ λ(v)w. The trace is the linear extension of w ⊗ λ ↦ λ(w), so it is defined before any basis is chosen (our own).

**Problem.** For a linear map from V to itself, the sum of its matrix diagonal entries equals its contraction trace in every basis.

**How the definition helps.** In a basis, the tensor of A is the sum of Aeᵢ ⊗ eᵢ∗ (our own). Its trace is the sum of eᵢ∗(Aeᵢ), the diagonal entries (our own).

**nLab:** [tensor contraction](https://ncatlab.org/nlab/show/tensor+contraction). It says: “The simplest case is the trace of a (1,1)-tensor”

**Paper or page:** [Trace in Terms of Dual Basis](https://proofwiki.org/wiki/Trace_in_Terms_of_Dual_Basis). It says: “tr f = ∑ᵢ₌₁ⁿ eᵢ∗(f(eᵢ))”

**Sources:** none listed. No primary source with a working link was found.

### Defining tensor products by a universal property makes basic facts automatic

**Remember:** Bilinear maps on pairs factor uniquely through linear maps on tensors.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A tensor product of V and W is a space T with a bilinear map b: V × W → T through which every bilinear map f out of V × W factors uniquely, as f = g ∘ b for exactly one linear map g.

**Problem.** The tensor product is unique up to a unique compatible isomorphism, independent of basis. Also V ⊗ W ≅ W ⊗ V, and over ℝ we have ℝ ⊗ ℝ ≅ ℝ.

**How the definition helps.** Universality gives compatible maps between any two tensor products in both directions, and uniqueness makes both composites identities. Swapping the inputs gives maps between V ⊗ W and W ⊗ V whose composites are identities in the same way. Over ℝ, multiplication ℝ ⊗ ℝ → ℝ has inverse r ↦ r ⊗ 1, because a ⊗ b = ab ⊗ 1 (arguments our own).

**Wikipedia:** [Tensor product](https://en.wikipedia.org/wiki/Tensor_product). It says: “A consequence of this approach is that every property of the tensor product can be deduced from the universal property, and that, in practice, one may forget the method that has been used to prove its existence.”

**Sources:** none listed. No primary source with a working link was found.

### Dividing by the factorial makes diagonal evaluation reversible

**Remember:** The diagonal counts each ordering once, so divide by the factorial.

*Rules out counterexamples.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Over a field where k! is invertible, the polarization of a formal homogeneous polynomial P of degree k ≥ 1 is the symmetric k-linear form whose value at v₁, …, vₖ is the coefficient of t₁⋯tₖ in P(t₁v₁ + ⋯ + tₖvₖ), divided by k!. The factor k! counts the orderings of the k slots that the diagonal mixes together.

**Problem.** Substituting the same vector of formal coordinates in every slot identifies symmetric k-linear forms with homogeneous polynomials of degree k. Polarization gives the inverse.

**How the definition helps.** For a symmetric form, that coefficient equals k! times the form, so dividing by k! recovers it (our own). Conversely, setting all inputs equal multiplies P by k! by the multinomial theorem, so the division returns P (our own). Over the field with two elements, B(v,w) = v₁w₂ + v₂w₁ is nonzero but vanishes on the diagonal (our own).

**Wikipedia:** [Polarization of an algebraic form](https://en.wikipedia.org/wiki/Polarization_of_an_algebraic_form). It says: “polarization produces a unique symmetric multilinear form from which the original polynomial can be recovered by evaluating along a certain diagonal.”

**Sources:** none listed. No primary source with a working link was found.

### Dual factors give the mixed tensor change of coordinates

**Remember:** Change each vector coordinate by the inverse and each dual coordinate by the transpose.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A mixed tensor is an element of a tensor product of copies of a space V and its dual V∗, the scalar-valued linear functions on V. A basis change acts on each factor separately, so the coordinates change factor by factor.

**Problem.** For a mixed tensor on one finite-dimensional space, let P list the new basis vectors as columns in old coordinates. Each vector coordinate column transforms by P⁻¹ and each dual coordinate column by Pᵀ.

**How the definition helps.** A vector's coordinate column changes by P⁻¹, because the new basis vectors are the old ones combined by P (our own). A functional's new coordinates are its values on the new basis vectors, so its column changes by Pᵀ (our own). The factor rules combine into the whole rule because products of basis vectors and dual basis functions form a basis (our own).

**Wikipedia:** [Covariance and contravariance of vectors](https://en.wikipedia.org/wiki/Covariance_and_contravariance_of_vectors). It says: “the matrix that transforms the vector components must be the inverse of the matrix that transforms the basis vectors.”

**Sources:** none listed. No primary source with a working link was found.

### Evaluating a paired slot makes contraction basis free

**Remember:** Evaluate the paired slots and keep the others.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** To contract a V∗ slot with a V slot, evaluate the functional in the first on the vector in the second and scale the rest of the tensor by that number. Set this on simple tensors and extend linearly, with an empty remainder meaning the scalar 1.

**Problem.** Contraction is independent of the basis used for the tensor. In coordinates it sums over the shared index of a vector slot and its dual slot.

**How the definition helps.** Evaluation uses no basis, so the contraction map is the same for all bases (our own). The tensor product property extends the rule linearly (our own). In a dual basis eⱼ∗(eᵢ) is 1 when i = j and 0 otherwise, so contraction sums over the shared index (our own).

**nLab:** [tensor contraction](https://ncatlab.org/nlab/show/tensor+contraction). It says: “by pairing by the evaluation map”

**Sources:** none listed. No primary source with a working link was found.

### Evaluating dual factors turns tensors into finite rank maps

**Remember:** Evaluate the functional, then scale the vector.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For λ in V∗ and w in W, let w ⊗ λ be the rank-one map v ↦ λ(v)w, and extend linearly to all of W ⊗ V∗. A finite sum of such terms has its image inside the span of the finitely many vectors w that it uses (our own).

**Problem.** For vector spaces V and W over one field, W ⊗ V∗ identifies naturally with the linear maps V → W of finite rank.

**How the definition helps.** So each tensor gives a finite-rank map, and a finite-rank map gives a tensor through its coordinates in a basis of its image (our own). Write a tensor with independent output vectors; if its map is zero, independence forces every coefficient functional to be zero, so the identification is one-to-one (our own).

**Wikipedia:** [Tensor product](https://en.wikipedia.org/wiki/Tensor_product). It says: “(f⊗v)(u) = f(u)v.”

**Sources:** none listed. No primary source with a working link was found.

### Finite dimension makes all bilinear forms sums of separated terms

**Remember:** One finite basis splits a bilinear form into finitely many products.

*Rules out counterexamples. Confidence: medium.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A separated bilinear form has the shape B(v,w) = λ(v)μ(w), with λ and μ linear functionals, and evaluation sends each tensor λ ⊗ μ to this form. If V has a finite basis eᵢ, every bilinear form splits as B(v,w) = ∑ eᵢ∗(v) B(eᵢ,w), one separated term per basis vector (our own).

**Problem.** If either input space is finite-dimensional, evaluation identifies V∗ ⊗ W∗ with all bilinear forms on V × W.

**How the definition helps.** That sum shows that every bilinear form comes from a tensor, and the dual basis makes the tensor unique (our own). For two spaces of finitely supported sequences, the dot product is no finite separated sum (our own). Its maps w ↦ v·w span an infinite-dimensional space, while a finite separated sum gives only a finite-dimensional span (our own).

**Paper or page:** [Lemma 10.12.8.](https://stacks.math.columbia.edu/tag/00DE). It says: “Homᵣ(M ⊗ᵣ N, P) ≅ Homᵣ(M, Homᵣ(N, P))”

**Sources:** none listed. No primary source with a working link was found.

### Tensor products turn bilinear maps into maps that return maps

**Remember:** Fixing one input gives a linear map in the other input.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A tensor product of U and V is a space T with a bilinear map b: U × V → T such that every bilinear map B out of U × V equals L ∘ b for exactly one linear map L.

**Problem.** Linear maps U ⊗ V → W correspond naturally to linear maps U → Hom(V,W). Here Hom(V,W) is the space of linear maps V → W.

**How the definition helps.** The universal property identifies linear maps U ⊗ V → W with bilinear maps U × V → W (our own). A bilinear B gives u ↦ B(u, ·), a linear map U → Hom(V,W), and evaluation reverses this step (our own).

**Paper or page:** [Lemma 10.12.8.](https://stacks.math.columbia.edu/tag/00DE). It says: “Homᵣ(M ⊗ᵣ N, P) ≅ Homᵣ(M, Homᵣ(N, P))”

**Sources:** none listed. No primary source with a working link was found.

### Tensoring images makes Kronecker ranks multiply

**Remember:** The image of a tensor product is the tensor product of the images.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A ⊗ B is the matrix, in the tensor product bases, of the map sending v ⊗ w to Av ⊗ Bw. Its image is therefore spanned by tensors of image vectors, so it is the tensor product of the two images (our own).

**Problem.** For matrices A and B over the same field, rank(A ⊗ B) = rank(A) rank(B).

**How the definition helps.** The image of A ⊗ B is spanned by tensors of basis vectors of im A and im B, so its dimension is at most rank(A) rank(B) (our own). Extending those image bases to bases of the targets makes these tensors part of a tensor basis, so they are independent (our own).

**Wikipedia:** [Kronecker product](https://en.wikipedia.org/wiki/Kronecker_product). It says: “rank(A⊗B) = rank A rank B.”

**Paper or page:** [Tensor Product of Free Modules is Free](https://proofwiki.org/wiki/Tensor_Product_of_Free_Modules_is_Free). It says: “is a free A-module.”

**Sources:** none listed. No primary source with a working link was found.

### Tensoring maps gives the Kronecker mixed product rule

**Remember:** Each factor composes with its own partner.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A ⊗ B is the matrix, in the tensor product bases, of the map sending v ⊗ w to Av ⊗ Bw, so each factor acts on its own slot. The usual array replaces each entry of A by that entry times B.

**Problem.** For matrices of compatible sizes, (A ⊗ B)(C ⊗ D) = (AC) ⊗ (BD).

**How the definition helps.** Both sides send v ⊗ w to ACv ⊗ BDw, and these tensors span the input space, so the maps agree (our own). The work is to check that the map definition gives the usual block array (our own).

**Wikipedia:** [Kronecker product](https://en.wikipedia.org/wiki/Kronecker_product). It says: “(A⊗B)(C⊗D) = (AC)⊗(BD).”

**Sources:** none listed. No primary source with a working link was found.

### Tensoring split sums preserves injections

**Remember:** A tensor product keeps each summand in its own place.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A short exact sequence 0 → U → V → W → 0 splits when V can be identified with U ⊕ W so that its maps become inclusion and projection. Over a field every such sequence splits, because a basis of W lifts to V (our own).

**Problem.** Tensoring an exact sequence 0 → U → V → W → 0 with a vector space preserves exactness. Here exactness means that the image at each step equals the next kernel.

**How the definition helps.** Tensoring a split sequence with X gives inclusion and projection between U ⊗ X, (U ⊗ X) ⊕ (W ⊗ X) and W ⊗ X, because tensor products distribute over direct sums (our own). An inclusion followed by the matching projection is exact, so no direct kernel check is needed (our own).

**Wikipedia:** [Tensor product](https://en.wikipedia.org/wiki/Tensor_product). It says: “every exact sequence is mapped to an exact sequence”

**Paper or page:** [Lemma 10.12.3.](https://stacks.math.columbia.edu/tag/00CY). It says: “induce unique isomorphisms”

**Sources:** none listed. No primary source with a working link was found.

### Tensoring triangular maps gives the Kronecker eigenvalues

**Remember:** Triangular times triangular stays triangular, and the diagonals multiply pairwise.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A ⊗ B is the matrix of the map v ⊗ w ↦ Av ⊗ Bw in the basis of pairs eᵢ ⊗ fⱼ. If A and B are triangular, then A ⊗ B is triangular in the lexicographic order of pairs, with diagonal entries aᵢᵢbⱼⱼ (our own).

**Problem.** For square matrices A and B over an algebraically closed field, eigenvalues of A⊗B are the pairwise products, counted with multiplicity. If A is m × m and B is n × n, then det(A⊗B) = (det A)ⁿ(det B)ᵐ over any field.

**How the definition helps.** Over an algebraically closed field, choose bases that make A and B triangular, with eigenvalues λᵢ and μⱼ on their diagonals (our own). Then A ⊗ B is triangular with diagonal entries λᵢμⱼ, so these are its eigenvalues (our own). Multiplying them gives the determinant, and extending the field does not change determinants (our own).

**Wikipedia:** [Kronecker product](https://en.wikipedia.org/wiki/Kronecker_product). It says: “λᵢ μⱼ”

**Sources:** none listed. No primary source with a working link was found.

### Trilinear maps identify the two groupings of three tensor factors

**Remember:** Both groupings are the one home of trilinear maps.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The tensor product U ⊗ V is the space that turns bilinear maps into linear maps. Every bilinear map out of U × V factors uniquely through (u, v) ↦ u ⊗ v by a linear map.

**Problem.** Exactly one linear isomorphism from (U⊗V)⊗W to U⊗(V⊗W) sends every (u⊗v)⊗w to u⊗(v⊗w).

**How the definition helps.** Using the rule twice, linear maps out of either grouping are exactly the trilinear maps out of U × V × W (our own). So the trilinear map (u, v, w) ↦ u ⊗ (v ⊗ w) gives a linear map one way, and the reverse rule gives one back (our own). Both composites fix every u ⊗ v ⊗ w, and these span, so the maps are inverse (our own).

**Paper or page:** [Lemma 10.12.5.](https://stacks.math.columbia.edu/tag/00D0). It says: “are well-defined and are isomorphisms.”

**Sources:** none listed. No primary source with a working link was found.

### A wedge product is zero exactly when the vectors are dependent

**Remember:** A wedge dies exactly when some vector repeats in disguise.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras), 15A03. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The exterior algebra of V is the algebra generated by V with the single rule v ∧ v = 0, so any wedge with a repeated vector is zero. Formally it is the tensor algebra of V modulo the ideal generated by all v ⊗ v.

**Problem.** Vectors x₁, …, xₖ are linearly dependent if and only if x₁ ∧ ⋯ ∧ xₖ = 0.

**How the definition helps.** If one vector is a combination of the others, expanding the wedge gives terms that each repeat a vector, so the wedge is zero. For the converse, extend the independent vectors to a basis. Their wedge is then one of the increasing basis wedges, which form a basis of the k-th exterior power, so it is not zero (our own).

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “a necessary and sufficient condition for {x₁, x₂, …, xₖ} to be a linearly dependent set of vectors is that x₁ ∧ x₂ ∧ ⋯ ∧ xₖ = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Alternating, not antisymmetric, wedges give the right exterior powers in characteristic 2

**Remember:** Ask that v ∧ v vanish, not only that wedges anticommute.

*Rules out counterexamples.* MSC 15A75 (Exterior algebra, Grassmann algebras), 15A03. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The exterior algebra of V is its tensor algebra modulo the ideal generated by v ⊗ v for every v ∈ V, so every vector squares to zero. In characteristic 2 this is stronger than asking that wedges anticommute. Its k-th exterior power is the part of degree k.

**Problem.** For a vector space V of dimension n over any field, the k-th exterior power has dimension equal to the binomial coefficient n choose k. So the whole exterior algebra has dimension 2ⁿ and the top power is one-dimensional.

**How the definition helps.** With v ∧ v = 0, the increasing wedges of k basis vectors form a basis, which gives n choose k (our own). Summing over k gives 2ⁿ, and only one subset uses all n indices. In characteristic 2, antisymmetry alone lets a line generate a polynomial algebra in one variable, which is infinite-dimensional (our own).

**nLab:** [exterior algebra](https://ncatlab.org/nlab/show/exterior+algebra). It says: “If we can divide by 2, then the relations … imply …, while the converse holds in any characteristic.”

**Sources:** none listed. No primary source with a working link was found.

### Complementary wedges give the dual basis functionals

**Remember:** Swap in the input vector and read the volume coefficient.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For an ordered basis e₁, …, eₙ with top wedge Ω = e₁ ∧ ⋯ ∧ eₙ, the i-th functional sends v to the coefficient of Ω in the wedge with eᵢ replaced by v.

**Problem.** The functionals given by these wedge coefficients form the dual basis. Each takes value one on its own basis vector and zero on the others.

**How the definition helps.** Putting eⱼ with j ≠ i in place of eᵢ repeats a factor, so the wedge is zero (our own). Putting eᵢ back gives Ω itself, so the value is one (our own). The exterior basis theorem makes Ω a nonzero basis of the top power, so the coefficient is well defined (our own).

**nLab:** [dual vector space](https://ncatlab.org/nlab/show/dual+vector+space). It says: “bⁱ(bⱼ) = δⁱⱼ”

**Sources:**

- [Sergei Winitzki, Linear Algebra via Exterior Products, version 1.3 (2020), §2.3.3](https://raw.githubusercontent.com/winitzki/linear-algebra-book/master/linalg.pdf)

### Complementary wedges reveal the sign of the squared Hodge star

**Remember:** Taking the complement twice swaps two blocks of basis vectors.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** In an oriented Euclidean space of dimension n, the Hodge star is the linear map that sends each wedge of k vectors from a positive orthonormal basis to the wedge of the other n − k vectors. Its sign is chosen so that the wedge followed by its image is the unit volume element.

**Problem.** On the kth exterior power, applying the Hodge star twice multiplies by −1 if k and n − k are both odd. Otherwise it gives the identity.

**How the definition helps.** Applying the star twice returns the same k vectors, with the sign of moving the block of k vectors past the block of n − k vectors (our own). That move has k(n − k) crossings, each giving −1, so the sign is −1 exactly when k and n − k are both odd (our own).

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “scalar multiple of the identity”

**Sources:**

- [Sergei Winitzki, Linear Algebra via Exterior Products, version 1.3 (2020), §5.4.3](https://raw.githubusercontent.com/winitzki/linear-algebra-book/master/linalg.pdf)

### Determinant pairing gives dual bases for exterior powers

**Remember:** Pair wedges by the determinant of all evaluations.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Pair a wedge of k functionals φᵢ with a wedge of k vectors vⱼ by det(φᵢ(vⱼ)), the determinant of all their evaluations. A repeated row or column gives zero, so this pairing is well defined on both exterior powers.

**Problem.** For V of finite dimension, the kth exterior power of its dual is naturally the dual of the kth exterior power of V.

**How the definition helps.** For a basis and its dual basis, the pairing of two increasing wedges is 1 when the index lists match and 0 otherwise (our own). So the dual basis wedges form the dual basis of the basis wedges, which gives the isomorphism (our own). The exterior basis theorem supplies both bases (our own).

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “If V is finite-dimensional, then the latter is naturally isomorphic to ⋀ᵏ(V∗).”

**Sources:** none listed. No primary source with a working link was found.

### Exterior powers turn alternating forms into linear functionals

**Remember:** Alternating forms already ignore what the exterior power throws away.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The k-th exterior power is the k-th tensor power divided by the span of tensors with two equal factors. An alternating form is a k-linear scalar function that is zero whenever two inputs agree, so it is zero on that whole span (our own).

**Problem.** Alternating k-linear forms on V correspond exactly to linear functionals on its kth exterior power.

**How the definition helps.** A k-linear form is a linear functional on the tensor power, and it is alternating exactly when it is zero on the span divided out (our own). So it passes uniquely to the quotient, and every functional on the quotient gives back an alternating form (our own).

**nLab:** [exterior algebra](https://ncatlab.org/nlab/show/exterior+algebra). It says: “the identity v ∧ v = 0 for all v ∈ V.”

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “most general" alternating operator”

**Sources:** none listed. No primary source with a working link was found.

### Inserting into alternating forms makes contractions anticommute

**Remember:** Insertions fill adjacent slots, so swapping them flips the sign.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For finite-dimensional V, view the k-th exterior power of the dual as the alternating k-forms. The interior product with v puts v into the first slot of a form, and it gives zero on forms of degree zero.

**Problem.** Two interior products with the same vector give zero. For vectors v and w, performing their interior products in opposite orders changes the sign.

**How the definition helps.** Two interior products fill the first two slots, with v and w in one order or the other (our own). Alternation makes swapping them change the sign, and makes inserting v twice give zero (our own).

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “\\iota\_\\alpha\\circ \\iota\_\\alpha = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Orthogonal wedge coordinates add squared projection volumes

**Remember:** Wedge coordinates are projected volumes, so Pythagoras adds their squares.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** In a real inner product space with an orthonormal basis, give the k-th exterior power the inner product that makes the increasing basis wedges orthonormal. The coordinates of v₁ ∧ ⋯ ∧ vₖ are then k × k minors, each the signed volume of the projection onto one coordinate plane (our own).

**Problem.** The squared k-dimensional volume of a parallelepiped equals a sum over all k-dimensional coordinate planes. Each term is the squared volume of its orthogonal projection onto that plane.

**How the definition helps.** The squared length of the wedge is the sum of its squared coordinates, so it is the sum of the squared projected volumes (our own). The Cauchy–Binet formula shows that this squared length is the Gram determinant det(AAᵀ), the squared volume (our own).

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “magnitude of a k-blade”

**Paper or page:** [Cauchy-Binet Formula/Example/Matrix by Transpose](https://proofwiki.org/wiki/Cauchy-Binet_Formula/Example/Matrix_by_Transpose). It says: “det(AAᵀ)”

**Sources:**

- [Sergei Winitzki, Linear Algebra via Exterior Products, version 1.3 (2020), §5.5.2](https://raw.githubusercontent.com/winitzki/linear-algebra-book/master/linalg.pdf)

### The last nonzero exterior power detects rank

**Remember:** The last surviving wedge counts independent output vectors.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The k-th exterior power of a linear map A sends v₁ ∧ ⋯ ∧ vₖ to Av₁ ∧ ⋯ ∧ Avₖ. That wedge is nonzero exactly when Av₁, …, Avₖ are linearly independent.

**Problem.** For a linear map between finite-dimensional spaces, its rank is the largest k for which its kth exterior power is nonzero. Its zeroth exterior power acts as the identity on scalars.

**How the definition helps.** So the k-th power is nonzero exactly when the image contains k independent vectors, that is, when k ≤ rank A (our own). Independent image vectors have preimages, so such a wedge occurs (our own). The dependence test comes from the exterior basis theorem (our own).

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “lesser exterior powers”

**Sources:**

- [Sergei Winitzki, Linear Algebra via Exterior Products, version 1.3 (2020), §2.3.5](https://raw.githubusercontent.com/winitzki/linear-algebra-book/master/linalg.pdf)

### Commuting free generators give a monomial basis for symmetric powers

**Remember:** Free commutative means polynomials in the basis vectors.

*True by definition.* MSC 15A78 (Other algebras built from modules). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The symmetric algebra of V is the free commutative unital algebra on V, so every linear map from V to a commutative unital algebra extends uniquely to a unital algebra map. Its k-th symmetric power is its part of total degree k.

**Problem.** For n ≥ 1 basis vectors and k ≥ 0, their degree k monomials form a basis of the kth symmetric power. Its dimension is the binomial coefficient (n + k − 1 choose k).

**How the definition helps.** Polynomials in the basis vectors have the same extension property, by substitution, so the symmetric algebra is that polynomial ring (our own). The degree-k monomials then form a basis of the k-th power, and there are (n + k − 1 choose k) of them.

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “of a vector space is the free commutative algebra over V.”

**Wikipedia:** [Symmetric algebra](https://en.wikipedia.org/wiki/Symmetric_algebra). It says: “This binomial coefficient is the number of n-variable monomials of degree k.”

**Paper or page:** [Lemma 10.13.1.](https://stacks.math.columbia.edu/tag/00DN). It says: “If M is a free R-module, so is each symmetric and exterior power.”

**Sources:** none listed. No primary source with a working link was found.

### Min-plus matrix powers give the cheapest walks of each length

**Remember:** Add along a walk and minimize over walks.

*True by definition. Confidence: medium.* MSC 15A80 (Max-plus and related algebras), 05C38. arXiv math.CO, cs.DS. Level 2: later undergraduate.

**Definition.** In the min-plus semiring, sum means minimum and product means ordinary addition, with ∞ as zero. A finite directed graph gives the matrix whose (i, j) entry is the cheapest edge cost from i to j, or ∞ if there is no edge. So entry (i, j) of a product is the cheapest cost to a middle vertex plus the cost from it (our own).

**Problem.** Fix an integer k ≥ 0. Entry (i,j) of the kth min-plus power gives the minimum cost of a k-edge walk from i to j. An empty set of walks has minimum cost ∞.

**How the definition helps.** Each multiplication adds one more edge and minimizes over the vertex where it starts, so induction on k gives the claim (our own). The zeroth power has 0 on the diagonal and ∞ elsewhere, which matches walks of length zero.

**Wikipedia:** [Semiring](https://en.wikipedia.org/wiki/Semiring). It says: “The Floyd–Warshall algorithm for shortest paths can thus be reformulated as a computation over a (min, +) algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Boolean semiring matrices compose relations by ordinary matrix multiplication

**Remember:** AND joins steps and OR chooses a witness.

*True by definition.* MSC 15B34 (Boolean and Hadamard matrices), 16Y60. arXiv math.RA, math.CO. Level 2: later undergraduate.

**Definition.** Record a relation R between finite sets by its matrix of truth values, with 1 where i R j. Compute in the Boolean semiring, where sum is OR and product is AND, so 1 + 1 = 1.

**Problem.** For relations with matching intermediate sets, the Boolean product of their matrices represents composition. For relations on the same pair of sets, the Boolean sum represents union.

**How the definition helps.** Entry (i, k) of the product is the OR over j of (i R j AND j S k), which says whether some j links i to k (our own). The entrywise OR of two matrices marks the pairs in either relation. Integer arithmetic would count the witnesses instead.

**Wikipedia:** [Semiring](https://en.wikipedia.org/wiki/Semiring). It says: “matrix addition corresponds to union of relations, and matrix multiplication corresponds to composition of relations.”

**Sources:** none listed. No primary source with a working link was found.

### Defining positive semidefinite matrices as Gram matrices proves the Schur product theorem

**Remember:** Positive semidefinite means Gram, and tensoring vectors multiplies Gram matrices.

*True by definition.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A63. arXiv math.RA, math.FA. Level 2: later undergraduate.

**Definition.** Call a matrix positive semidefinite when it is a Gram matrix, with entries ⟨vᵢ, vⱼ⟩ for some vectors v₁, …, vₙ in an inner product space. This agrees with the usual definition, a Hermitian matrix with nonnegative quadratic form.

**Problem.** The entrywise product of two positive semidefinite matrices of the same size is positive semidefinite. This entrywise product is also called the Hadamard or Schur product.

**How the definition helps.** The inner product on a tensor product multiplies factors: ⟨vᵢ ⊗ wᵢ, vⱼ ⊗ wⱼ⟩ = ⟨vᵢ, vⱼ⟩⟨wᵢ, wⱼ⟩. So the entrywise product is the Gram matrix of the vectors vᵢ ⊗ wᵢ (our own).

**Wikipedia:** [Gram matrix](https://en.wikipedia.org/wiki/Gram_matrix). It says: “The Gram matrix is positive semidefinite, and every positive semidefinite matrix is the Gramian matrix for some set of vectors.”

**Sources:**

- [Issai Schur, Bemerkungen zur Theorie der beschränkten Bilinearformen mit unendlich vielen Veränderlichen (1911)](https://doi.org/10.1515/crll.1911.140.1)

### Irreducible nonnegative matrices have a simple positive Perron eigenvalue

**Remember:** Every index reaches every other through positive entries.

*Rules out counterexamples.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A18. arXiv math.SP, math.RA. Level 2: later undergraduate.

**Definition.** For a nonnegative square matrix A, draw an edge i → j whenever Aᵢⱼ &gt; 0. A is irreducible if this graph is strongly connected, so every vertex reaches every other by a directed path.

**Problem.** For an irreducible nonnegative matrix of size n ≥ 2, the spectral radius is a positive eigenvalue (size restriction our own). It is a simple root of the characteristic polynomial and has an eigenvector with all entries strictly positive.

**How the definition helps.** Strong connectivity is the hypothesis of the Perron–Frobenius theorem for irreducible matrices, which gives positivity and simplicity. The matrix with rows (0,1) and (0,0) has no path from the second vertex to the first. Its spectral radius 0 is a double root, and no eigenvector is positive (our own).

**Wikipedia:** [Perron–Frobenius theorem](https://en.wikipedia.org/wiki/Perron%E2%80%93Frobenius_theorem). It says: “However, Frobenius found a special subclass of non-negative matrices — irreducible matrices — for which a non-trivial generalization is possible.”

**Sources:**

- [Perron, O. (1907). Zur Theorie der Matrices. Mathematische Annalen 64.](https://doi.org/10.1007/BF01449896)

### Primitive matrices make the Perron eigenvalue strictly dominant

**Remember:** Some power positive means one eigenvalue beats all the others.

*Rules out counterexamples.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A18. arXiv math.SP, math.RA. Level 2: later undergraduate.

**Definition.** A nonnegative square matrix A is primitive if some power Aᵐ with m ≥ 1 has every entry strictly positive.

**Problem.** If A is primitive, its Perron eigenvalue r is strictly larger in absolute value than every other eigenvalue. So the powers of A, divided by rᵏ, settle down to a fixed limit.

**How the definition helps.** Perron–Frobenius for positive matrices applies to Aᵐ, so r is simple and every other eigenvalue is smaller in absolute value. After division by rᵏ, the other Jordan blocks tend to zero (our own). The matrix that swaps two coordinates has eigenvalues 1 and −1, no positive power, and alternating powers (our own).

**Wikipedia:** [Perron–Frobenius theorem](https://en.wikipedia.org/wiki/Perron%E2%80%93Frobenius_theorem). It says: “All statements of the Perron–Frobenius theorem for positive matrices remain true for primitive matrices.”

**Sources:**

- [Perron, O. (1907). Zur Theorie der Matrices. Mathematische Annalen 64.](https://doi.org/10.1007/BF01449896)

### Preserving the symplectic form forces determinant one

**Remember:** Preserve ω and you preserve its top wedge power, the volume.

*True by definition.* MSC 15B99 (Special matrices), 53D05, 15A15. arXiv math.SG, math.RA. Level 2: later undergraduate.

**Definition.** A matrix M is symplectic for a nondegenerate alternating form ω on a real or complex space of dimension 2n if ω(Mv, Mw) = ω(v, w) for all v, w. Nondegenerate means each nonzero v has some w with ω(v, w) ≠ 0. Then M also preserves ωⁿ, the n-th wedge power of ω, which is a nonzero volume form (our own).

**Problem.** Every real or complex symplectic matrix has determinant one.

**How the definition helps.** A matrix multiplies every volume form by its determinant, so det M = 1 (our own). The form ωⁿ is nonzero because ω has the standard paired form in a suitable basis (our own). Taking determinants of the matrix equation alone gives only det(M)² = 1.

**Wikipedia:** [Symplectic matrix](https://en.wikipedia.org/wiki/Symplectic_matrix). It says: “It follows easily from the definition that the determinant of any symplectic matrix is ±1. Actually, it turns out that the determinant is always +1 for any field.”

**Sources:**

- [Donsub Rim, An elementary proof that symplectic matrices have determinant one, Advances in Dynamical Systems and Applications 12 (2017) 15–20](https://doi.org/10.37622/ADSA/12.1.2017.15-20)

### McCoy rank makes linear dependence a rank condition over any commutative ring

**Remember:** Rank is the largest minor size no nonzero scalar kills.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 13C40. arXiv math.AC, math.RA. Level 3: graduate.

**Definition.** The McCoy rank of a matrix over a nonzero commutative ring is the largest t such that no nonzero scalar multiplies all t × t minors to zero. The empty 0 × 0 minor counts as 1 (formulation our own).

**Problem.** Let R be a nonzero commutative ring and A an n × m matrix over R. Then Ax = 0 has a nonzero solution exactly when the McCoy rank of A is less than m.

**How the definition helps.** McCoy's theorem says that Ax = 0 has a nonzero solution exactly when some nonzero scalar kills all m × m minors, with no such minors counting as all zero. That is the statement rank &lt; m, and it holds with zero divisors. Over ℤ/6, the matrix \[2\] has rank zero because 3 kills 2, and it sends 3 to 0 (our own).

**Paper or page:** [The CRing Project, Various, Theorem 2.7 (McCoy)](https://math.uchicago.edu/~amathew/CRing.pdf), [The CRing Project, Various, Corollary 2.8](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “If R is not the zero ring, the following are equivalent: (1) The columns α₁, …, αₘ are linearly dependent. (2) Equation … has a nontrivial solution. (3) rk(A) &lt; m.”

**Sources:**

- [The CRing Project, Various, Theorem 2.7 (McCoy) and Corollary 2.8](https://math.uchicago.edu/~amathew/CRing.pdf)

### Drazin inversion respects commuting maps

**Remember:** Invert on the stable image and set the nilpotent part to zero.

*True by definition.* MSC 15A09 (Theory of matrix inversion and generalized inverses), 15A27. arXiv math.RA. Level 3: graduate.

**Definition.** Take k so large that the image and kernel of Aᵏ stop changing, so the space splits as that image plus that kernel. The Drazin inverse D inverts A on the image of Aᵏ and is zero on the kernel of Aᵏ.

**Problem.** Every matrix that commutes with A also commutes with its Drazin inverse.

**How the definition helps.** A matrix C that commutes with A maps the image and the kernel of Aᵏ into themselves (our own). On the image, C commutes with A and so with its inverse there, and on the kernel it commutes with zero (our own). So C commutes with D.

**Wikipedia:** [Drazin inverse](https://en.wikipedia.org/wiki/Drazin_inverse). It says: “The Drazin inverse is then the operation that maps invertible Jordan blocks to their inverses, and nilpotent Jordan blocks to zero.”

**Sources:** none listed. No primary source with a working link was found.

### Matching kernels make pseudoinverses reverse order

**Remember:** Invert on the shared range and leave the shared kernel at zero.

*Rules out counterexamples.* MSC 15A09 (Theory of matrix inversion and generalized inverses), 15A39. arXiv math.FA. Level 3: graduate.

**Definition.** For a positive semidefinite matrix, its pseudoinverse inverts the matrix on its range and acts as zero on its kernel. Write C ≤ D when D − C is positive semidefinite.

**Problem.** Let 0 ≤ C ≤ D. Then the pseudoinverses satisfy D⁺ ≤ C⁺ exactly when C and D have the same kernel.

**How the definition helps.** On the shared range both matrices are positive definite, and inversion reverses order there, while both pseudoinverses are zero on the shared kernel. Conversely, the two inequalities force opposite kernel inclusions (our own). With C = 0 and D = I, D⁺ = I is not below C⁺ = 0 (our own).

**Paper or page:** [Matrix monotonicity and concavity of the principal pivot transform](https://arxiv.org/abs/2302.04293v2). It says: “if 0 ≤ C ≤ D then D⁺ ≤ C⁺ if and only if ker C = ker D.”

**Sources:**

- [Kenneth Beard, Aaron Welters, Matrix monotonicity and concavity of the principal pivot transform](https://arxiv.org/abs/2302.04293v2)

### Defining minors through the wedge pairing gives Jacobi's complementary minor theorem

**Remember:** Complementary wedges pair into volumes, which A scales by det A.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 3: graduate.

**Definition.** For V of dimension n, the wedge pairing sends u in the k-th exterior power and v in the (n − k)-th to u ∧ v in the top power, a line. In the increasing wedge bases, the exterior powers of a matrix A have the minors of A as entries.

**Problem.** Let A be an invertible n × n matrix, with k-element row set I, column set J and complements I′ and J′. The minor of A⁻¹ on rows I and columns J equals (−1)<sup>(ΣI + ΣJ)</sup> times the minor of A on rows J′ and columns I′, divided by det A.

**How the definition helps.** Since Au ∧ Av = det A · (u ∧ v), the pairing turns the (n − k)-th power of A into det A times the transpose of the k-th power of A⁻¹ (our own argument). Comparing entries in the wedge bases gives minors on both sides, and pairing complementary basis wedges supplies the sign.

**nLab:** [determinant](https://ncatlab.org/nlab/show/determinant). It says: “The determinant is the (essentially unique) universal alternating multilinear map.”

**Wikipedia:** [Minor (linear algebra)](https://en.wikipedia.org/wiki/Minor_%28linear_algebra%29). It says: “denote the ordered sequences of indices (the indices are in natural order of magnitude, as above) complementary to I, J”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Pfaffian by a wedge power makes pf(BABᵀ) equal det(B) pf(A)

**Remember:** The Pfaffian is the coefficient of a wedge power in the top wedge.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 3: graduate.

**Definition.** For a skew-symmetric 2n × 2n matrix A over a field of characteristic zero, form the bivector ω = ∑ᵢ&lt;ⱼ aᵢⱼ eᵢ ∧ eⱼ. Then pf(A) is the coefficient of e₁ ∧ ⋯ ∧ e₂ₙ in ωⁿ/n!, a number read off in the top exterior power.

**Problem.** For a 2n × 2n skew-symmetric matrix A and any 2n × 2n matrix B, pf(BABᵀ) = det(B) pf(A).

**How the definition helps.** The bivector of BABᵀ is ω with B applied to each vector (our own). So its n-th wedge power is ωⁿ with B applied, and B acts on the top exterior power by det B. Comparing coefficients gives the identity.

**Wikipedia:** [Pfaffian](https://en.wikipedia.org/wiki/Pfaffian). It says: “where ωⁿ denotes the wedge product of n copies of ω.”

**Sources:** none listed. No primary source with a working link was found.

### Defining trace by evaluation makes it survive extension of scalars

**Remember:** Evaluate each dual factor on its paired vector and add.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 13C10. arXiv math.AC. Level 3: graduate.

**Definition.** For a finitely generated projective module P over a commutative ring R, every endomorphism is a sum of maps x ↦ φ(x)p, because P ⊗ P\* is identified with Endᵣ(P). The trace sends each such term p ⊗ φ to the scalar φ(p).

**Problem.** Let R → S be a map of commutative rings, and let f be an endomorphism of P. Then the trace of the extended map f ⊗ S on P ⊗ S is the image in S of the trace of f.

**How the definition helps.** Extending scalars to S sends each term p ⊗ φ to the extended term, and its evaluation φ(p) to the image of φ(p) in S (our own argument). Adding over the terms of f gives the claim.

**nLab:** [tensor contraction](https://ncatlab.org/nlab/show/tensor+contraction). It says: “by pairing by the evaluation map”

**Sources:** none listed. No primary source with a working link was found.

### Schur complements explain bordered minors

**Remember:** Bordered minors are entries of a single scaled Schur complement.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A24. arXiv math.CO, math.RA. Level 3: graduate.

**Definition.** Write A in block rows (P, C) and (D, E), with P square and invertible, and let S = E − DP⁻¹C be the Schur complement of P. Let Bᵢⱼ be the determinant of P bordered by the i-th extra row and j-th extra column of A. Block elimination shows Bᵢⱼ = det P · Sᵢⱼ (our own).

**Problem.** For ℓ ≥ 1, an ℓ × ℓ minor of B equals det Q times (det P)<sup>(ℓ−1)</sup>. Here Q is P bordered by the corresponding ℓ rows and ℓ columns of A.

**How the definition helps.** So B = (det P)S, and an ℓ × ℓ minor of B is (det P)ˡ times the matching minor of S (our own argument). Block elimination on Q gives det Q as det P times that minor of S. Dividing gives the stated factor (det P)<sup>(ℓ−1)</sup>.

**Paper or page:** [Sufficient conditions for total positivity, compounds, and Dodgson condensation](https://arxiv.org/abs/2405.06069v1). It says: “det B\[δ, γ\] = (det A\[α\])ˡ⁻¹ det A\[α ∪ δ, α ∪ γ\].”

**Sources:**

- [Shaun Fallat, Himanshu Gupta, Charles R. Johnson, Sufficient conditions for total positivity, compounds, and Dodgson condensation](https://arxiv.org/abs/2405.06069v1)

### Symmetrization turns permanents into inner products

**Remember:** Symmetrize both lists, and every matching of factors counts once.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A69. arXiv math.RA, math.CO. Level 3: graduate.

**Definition.** The symmetrized tensor of m vectors is the sum of their tensor products in all m! orders, divided by √(m!). The permanent is the determinant without signs, the sum over permutations σ of ∏ᵢ aᵢσ(i).

**Problem.** The inner product of the two symmetrized tensors is the permanent of the matrix of pairwise inner products.

**How the definition helps.** Pairing one order of the first list with one order of the second gives ∏ᵢ⟨uᵢ, w\_π(i)⟩ for their relative permutation π (our own). Each π arises from m! pairs of orders, and this cancels the factor 1/m!.

**Paper or page:** [Separable symmetric tensors and separable anti-symmetric tensors](https://arxiv.org/abs/2202.12792v3). It says: “⟨𝒜ₛ, ℬₛ⟩ = perm(A) where perm(A) denotes the permanent of matrix A.”

**Sources:**

- [Changqing Xu, Separable symmetric tensors and separable anti-symmetric tensors](https://arxiv.org/abs/2202.12792v3)

### The Dieudonné determinant lets us define SL(n) over the quaternions

**Remember:** Over a noncommutative field, determinants live modulo commutators.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 19B99. arXiv math.RA, math.KT. Level 3: graduate.

**Definition.** For a division ring K, the Dieudonné determinant is a homomorphism from GL(n, K) to K\*/\[K\*, K\*\], the multiplicative group made commutative. Adding a left multiple of one row to another keeps its value, and left-scaling a row by a multiplies it by the class of a.

**Problem.** Over a division ring K, there is a unique homomorphism from GL(n, K) to K\*/\[K\*, K\*\] that obeys the two row rules. So SL(n, K), the matrices of determinant 1, is defined, for example over the quaternions ℍ.

**How the definition helps.** Taking values in K\*/\[K\*, K\*\] rather than in K is what lets such a determinant exist. For ℍ the commutator subgroup is the unit quaternions, so the target is the positive reals and SL(n, ℍ) is the kernel. Existence and uniqueness are Dieudonné's theorem.

**nLab:** [Dieudonné determinant](https://ncatlab.org/nlab/show/Dieudonn%C3%A9+determinant). It says: “It is crucial for making sense of the notion of "special linear group" over such coefficients, such as the group SL(2,H) over the quaternions.”

**Sources:**

- [Jean Dieudonné, Les déterminants sur un corps non commutatif, Bulletin de la Société Mathématique de France 71 (1943) 27–45](https://doi.org/10.24033/bsmf.1345)

### Ideal classes classify matrix similarity

**Remember:** An ideal's basis turns multiplication by θ into a matrix.

*Makes the theorem clean to state or prove.* MSC 15A21 (Canonical forms, reductions, classification), 15B33. arXiv math.RA, math.NT. Level 3: graduate.

**Definition.** Let θ be a root of a monic polynomial f of degree n over a principal ideal domain A, irreducible over the fraction field K. An ideal class is a nonzero finitely generated A\[θ\]-submodule of K(θ), up to multiplication by a nonzero element of K(θ). Each such ideal is free of rank n over A, and multiplication by θ in an A-basis is a matrix with characteristic polynomial f.

**Problem.** For n equal to the degree of f, these ideal classes classify n-by-n matrices over A with characteristic polynomial f up to similarity.

**How the definition helps.** Changing the A-basis conjugates the matrix, and rescaling the ideal does not change it, so each class gives one similarity class. Conversely, a matrix M makes Aⁿ an A\[θ\]-module with θ acting as M (our own). Since Kⁿ is one-dimensional over K(θ), this module embeds in K(θ) as an ideal, unique up to scaling (our own).

**Paper or page:** [Representatives of similarity classes of matrices over PIDs corresponding to ideal classes](https://arxiv.org/abs/2205.02094v2). It says: “There is a canonical bijection between the similarity classes of matrices in Mₙ(A) with characteristic polynomial f(x) and ideal classes in A\[θ\].”

**Sources:**

- [Lucy Knight, Alexander Stasinski, Representatives of similarity classes of matrices over PIDs corresponding to ideal classes](https://arxiv.org/abs/2205.02094v2)

### Minor ideals recover Smith factors

**Remember:** The first k diagonal factors generate the kth minor ideal through their product.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification), 15A15. arXiv math.RA. Level 3: graduate.

**Definition.** The k-th minor ideal of a matrix is generated by all its k × k minors, and invertible row and column changes do not change it. In Smith normal form, a diagonal d₁, d₂, … with each entry dividing the next, this ideal is generated by d₁⋯dₖ.

**Problem.** Over a principal ideal domain, where every ideal has one generator, these ideals determine the nonzero Smith entries up to invertible factors.

**How the definition helps.** In Smith form, d₁⋯dₖ is a minor and divides every k × k minor, so it generates the k-th ideal (our own). Successive quotients of these generators give the diagonal entries up to invertible factors. The invariance under row and column changes follows from the Cauchy–Binet formula.

**Paper or page:** [On integral Ext² between certain Weyl modules of GLn](https://arxiv.org/abs/2411.00675v1). It says: “Let δᵢ be a g.c.d of the determinants of the i × i submatrices of A.”

**Sources:**

- [H. J. Stephen Smith, On systems of linear indeterminate equations and congruences](https://doi.org/10.1098/rstl.1861.0016)

### Kernel compatibility makes singular elimination valid

**Remember:** Elimination cannot cancel a coupling to a direction with no quadratic term.

*Rules out counterexamples.* MSC 15A39 (Linear inequalities of matrices), 15A09. arXiv math.FA. Level 3: graduate.

**Definition.** Write a Hermitian matrix in block rows (A, B) and (B∗, D), and let D⁺ be the pseudoinverse of D. The generalized Schur complement is A − BD⁺B∗. Kernel compatibility asks that Bv = 0 whenever Dv = 0, so that D⁺ can still eliminate B.

**Problem.** The whole matrix is positive semidefinite exactly when three conditions hold. Both D and the generalized Schur complement must be positive semidefinite. Also, B must vanish on the kernel of D.

**How the definition helps.** Under kernel compatibility, elimination with D⁺ is a congruence to the block-diagonal matrix with blocks A − BD⁺B∗ and D, so positivity splits (our own). Without it, a coupling to a kernel vector of D makes the quadratic form negative. The matrix with zero diagonal and off-diagonal ones passes both diagonal tests but has eigenvalue −1.

**Paper or page:** [Matrix monotonicity and concavity of the principal pivot transform](https://arxiv.org/abs/2302.04293v2). It says: “then 0 ≤ A if and only if 0 ≤ A₂₂, ker A₂₂ ⊆ ker A₁₂, and 0 ≤ A/A₂₂.”

**Sources:**

- [Kenneth Beard, Aaron Welters, Matrix monotonicity and concavity of the principal pivot transform](https://arxiv.org/abs/2302.04293v2)

### Minimization makes Schur complements concave

**Remember:** Complements are minima, and the minimum of an average beats averaged minima.

*True by definition.* MSC 15A39 (Linear inequalities of matrices), 15A45. arXiv math.FA. Level 3: graduate.

**Definition.** For a positive semidefinite Hermitian matrix M in two fixed blocks, write q(x,y) for its quadratic form. Its Schur complement onto the first block is the Hermitian matrix S satisfying x∗Sx = minᵧ q(x,y) for every x.

**Problem.** On positive semidefinite matrices split into fixed blocks, the Schur complement is concave. In other words, the complement of an average is at least the average of the complements in the positive semidefinite order.

**How the definition helps.** For fixed x, the minimum over y of an average of quadratic forms is at least the average of their minima (our own). So the complement of an average dominates the average of the complements, one x at a time (our own). The minimization formula itself, also when the second block is singular, is the main lemma.

**Paper or page:** [Matrix monotonicity and concavity of the principal pivot transform](https://arxiv.org/abs/2302.04293v2). It says: “is the unique self-adjoint matrix satisfying the minimization principle”

**Sources:**

- [Kenneth Beard, Aaron Welters, Matrix monotonicity and concavity of the principal pivot transform](https://arxiv.org/abs/2302.04293v2)

### Harmonic mixtures preserve matrix order

**Remember:** Two inversions reverse order twice, and positive mixtures keep it.

*True by definition.* MSC 15A45 (Miscellaneous inequalities involving matrices), 15A39. arXiv math.FA, math.OA. Level 3: graduate.

**Definition.** Build f as a positive mixture f(t) = ∫ hλ(t) dμ(λ) of the functions hλ(t) = 1/((1 − λ) + λ/t), with μ a finite positive measure on \[0, 1\]. Apply f to a positive definite matrix through its eigenvalues. So hλ(A) = ((1 − λ)I + λA⁻¹)⁻¹ uses two matrix inversions.

**Problem.** The resulting function is operator monotone on positive definite matrices of every size. This means that if B − A is positive semidefinite, then so is f(B) − f(A).

**How the definition helps.** Inversion reverses order on positive definite matrices, so the two inversions in hλ preserve it (our own). Integration against a positive measure keeps the inequality (our own).

**Paper or page:** [On a comprehensive review of a proof of Löwner's theorem](https://arxiv.org/abs/2510.00121v2). It says: “Conversely, any function given in this form is operator monotone.”

**Sources:**

- [Karl Löwner, Über monotone Matrixfunktionen](https://doi.org/10.1007/BF01170633)

### Clifford matrices make free Dirac solutions satisfy Klein–Gordon

**Remember:** Gamma matrices square the Dirac derivative to the wave operator.

*True by definition.* MSC 15A66 (Clifford algebras, spinors), 35Q41, 81Q05. arXiv math-ph, hep-th. Level 3: graduate.

**Definition.** Gamma matrices are four matrices with γμγν = −γνγμ for μ ≠ ν, γ₀² = I and γⱼ² = −I for j = 1, 2, 3. These rules make (∑μ γμ∂μ)² equal to the wave operator □ = ∂₀² − ∂₁² − ∂₂² − ∂₃² (our own). The free Dirac operator with mass m is i∑μ γμ∂μ − mI.

**Problem.** Each component of a solution to the free Dirac equation satisfies the Klein–Gordon wave equation with the same mass.

**How the definition helps.** Multiplying the Dirac operator by its partner with the opposite mass sign gives −(□ + m²), because mixed terms cancel in pairs (our own). So every solution satisfies the Klein–Gordon equation (□ + m²)ψ = 0 in each component (our own).

**Wikipedia:** [Dirac equation](https://en.wikipedia.org/wiki/Dirac_equation). It says: “As a result, any solution to the Dirac equation is also automatically a solution to the Klein–Gordon equation.”

**Sources:**

- [P. A. M. Dirac, The quantum theory of the electron, Proceedings of the Royal Society of London A (1928)](https://doi.org/10.1098/rspa.1928.0023)

### The Clifford algebra universal property gives the parity automorphism

**Remember:** Negating a generator keeps its square, so negation extends.

*True by definition.* MSC 15A66 (Clifford algebras, spinors), 16S10. arXiv math.RA. Level 3: graduate.

**Definition.** The Clifford algebra of a quadratic form Q on V is the unital algebra generated by V with v² = Q(v)1. It is universal for this rule, so every linear map f into a unital algebra with f(v)² = Q(v)1 extends uniquely to a unital algebra map.

**Problem.** The Clifford algebra has an automorphism α sending i(v) to −i(v) and satisfying α² = 1. Over a field of characteristic other than two, its two eigenspaces give its even and odd parts.

**How the definition helps.** The map v ↦ −v satisfies the same rule, since (−v)² = v², so it extends to α. Then α² fixes every generator, so it is the identity by uniqueness. Outside characteristic two, (x + α(x))/2 and (x − α(x))/2 give the even and odd parts (our own calculation).

**Wikipedia:** [Clifford algebra](https://en.wikipedia.org/wiki/Clifford_algebra). It says: “the linear map on V defined by v ↦ −v (reflection through the origin) preserves the quadratic form Q and so by the universal property of Clifford algebras extends to an algebra automorphism”

**Sources:** none listed. No primary source with a working link was found.

### Border rank restores best approximations

**Remember:** Close the rank set so minimizing sequences cannot escape.

*Rules out counterexamples.* MSC 15A69 (Multilinear algebra, tensor calculus), 15A60. arXiv math.NA. Level 3: graduate.

**Definition.** The rank of a tensor in a finite-dimensional real tensor product is the fewest products of vectors that sum to it. Its border rank is the least r such that it is a limit of tensors of rank at most r, so the tensors of border rank at most r form a closed set.

**Problem.** For any norm and any r ≥ 0, every tensor has a nearest tensor of border rank at most r. For rank at most r, a nearest tensor can fail to exist.

**How the definition helps.** A minimizing sequence in a closed set is bounded, so a subsequence converges to a nearest point (our own proof). In ℝ² ⊗ ℝ² ⊗ ℝ², the tensor e₂⊗e₁⊗e₁ + e₁⊗e₂⊗e₁ + e₁⊗e₁⊗e₂ has rank three and border rank two. Its distance to rank at most two is zero, but no tensor of that rank attains it.

**Wikipedia:** [Tensor rank decomposition](https://en.wikipedia.org/wiki/Tensor_rank_decomposition). It says: “Therefore, its border rank is 2, which is strictly less than its rank.”

**Sources:**

- [Vin de Silva and Lek-Heng Lim, Tensor Rank and the Ill-Posedness of the Best Low-Rank Approximation Problem](https://doi.org/10.1137/06066518X)

### Defining divided powers as symmetric tensors makes them duals of symmetric powers

**Remember:** The dual of a quotient by permutations is the space of invariant tensors.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus), 15A78. arXiv math.RA, math.AC. Level 3: graduate.

**Definition.** Define the nth symmetric power of V as the quotient of the n-fold tensor power that identifies tensors differing by a permutation of factors. Define the nth divided power of V as the subspace of n-fold tensors fixed by every permutation.

**Problem.** Over any field, the dual of the nth symmetric power of a finite-dimensional space V is the nth divided power of the dual space V\*.

**How the definition helps.** A functional descends to the symmetric quotient exactly when every permutation fixes it (our own argument). Finite-dimensional tensor duality identifies these functionals with the invariant tensors in the tensor power of V\*. Those tensors form the divided power.

**nLab:** [divided power algebra](https://ncatlab.org/nlab/show/divided+power+algebra). It says: “We then have the relation (Sₙ(A\*))\* = Γₙ(A)”

**Sources:** none listed. No primary source with a working link was found.

### Derivative matrices bound symmetric border rank

**Remember:** A power of one linear form contributes at most one derivative direction.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus), 15A03. arXiv math.AG. Level 3: graduate.

**Definition.** The order-k catalecticant of a homogeneous complex polynomial is the matrix whose columns are the coefficient vectors of its partial derivatives of order k. Symmetric border rank is the least r such that the polynomial is a coefficientwise limit of sums of r powers of linear forms.

**Problem.** Every catalecticant rank bounds symmetric border rank from below. For the sth power of a sum of n variable squares, the order-s matrix gives the bound (s+n−1 choose s).

**How the definition helps.** Every order-k derivative of a power ℓᵈ of a linear form is a multiple of ℓᵈ⁻ᵏ, so its catalecticant has rank at most one (our own argument). Sums of r powers have rank at most r, and this survives limits because vanishing minors stay zero. For the s-th power of x₁² + ⋯ + xₙ², a separate calculation shows the order-s catalecticant has full rank (s + n − 1 choose s).

**Paper or page:** [Upper bounds for the rank of powers of quadrics](https://arxiv.org/abs/2305.06470v3). It says: “rk(qₙˢ) ≥ brk(qₙˢ) ≥ rk(Catˢ(qₙˢ))”

**Sources:**

- [Cosimo Flavi, Upper bounds for the rank of powers of quadrics](https://arxiv.org/abs/2305.06470v3)

### Universal-property tensor products make tensoring preserve quotients

**Remember:** Factoring through a quotient amounts to vanishing on its relations.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus), 13C05. arXiv math.AC. Level 3: graduate.

**Definition.** The tensor product M ⊗ N of modules over a commutative ring is the module through which every bilinear map out of M × N factors uniquely as a linear map. So linear maps out of M ⊗ N are the same as bilinear maps out of M × N.

**Problem.** Let U be a submodule of M. Then (M/U) ⊗ N is the quotient of M ⊗ N by the image of U ⊗ N. This is the right exactness of tensoring with N.

**How the definition helps.** Linear maps out of (M/U) ⊗ N are bilinear maps on M × N that vanish on U × N (our own argument). Linear maps out of the quotient of M ⊗ N by the image of U ⊗ N are the same maps. So the universal property identifies the two modules.

**Paper or page:** [Stacks Project, Algebra, Lemma 10.12.10](https://stacks.math.columbia.edu/tag/00DF). It says: “In other words, the functor − ⊗ᵣ N is right exact, in the sense that tensoring each term in the original right exact sequence preserves the exactness.”

**Sources:**

- [Stacks Project, Algebra, Lemma 10.12.10](https://stacks.math.columbia.edu/tag/00DF)

### Defining exterior algebras by a universal property splits exterior powers of sums

**Remember:** Wedges from the two summands keep separate degrees and anticommute.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 3: graduate.

**Definition.** The exterior algebra of V is the algebra generated by V with v ∧ v = 0 for every v. Every linear map from V into an algebra in which each image squares to zero extends uniquely to an algebra map.

**Problem.** For vector spaces V and W, the n-th exterior power of V ⊕ W is the direct sum over i + j = n of the i-th exterior power of V tensored with the j-th exterior power of W.

**How the definition helps.** In the graded tensor product of the two exterior algebras, elements of V and W anticommute, so (v + w)² = 0 (our own argument). So this algebra has the extension property for V ⊕ W and equals its exterior algebra. Taking degree n gives the direct sum.

**nLab:** [exterior algebra](https://ncatlab.org/nlab/show/exterior+algebra). It says: “the identity v ∧ v = 0 for all v ∈ V.”

**Sources:** none listed. No primary source with a working link was found.

### Universal property of exterior algebras gives Λ(V/W) as ΛV modulo W

**Remember:** Killing the subspace kills every wedge that contains one of its vectors.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 3: graduate.

**Definition.** The exterior algebra ΛV is the algebra generated by V with v ∧ v = 0 for every v. Every linear map from V into an algebra in which each image squares to zero extends uniquely to an algebra map.

**Problem.** For a subspace W of V, the exterior algebra of V/W is the quotient of ΛV by the two-sided ideal generated by W.

**How the definition helps.** An algebra map out of ΛV modulo W is a map on V with square-zero images that vanishes on W (our own argument). That is the same as such a map on V/W. So both algebras have the same universal property.

**nLab:** [exterior algebra](https://ncatlab.org/nlab/show/exterior+algebra). It says: “Then the exterior algebra ΛV is generated by the elements of V using these operations:”

**Sources:** none listed. No primary source with a working link was found.

### Defining symmetric algebras as free commutative algebras makes the coproduct coassociative

**Remember:** Check coassociativity on generators, where both sides add three copies.

*True by definition.* MSC 15A78 (Other algebras built from modules), 16T05. arXiv math.QA, math.RA. Level 3: graduate.

**Definition.** The symmetric algebra SV is the free commutative algebra on V. Every linear map from V into a commutative algebra extends to exactly one algebra map from SV.

**Problem.** The rule v ↦ v ⊗ 1 + 1 ⊗ v extends to an algebra map Δ from SV to SV ⊗ SV. This map is coassociative, which means (Δ ⊗ id)Δ = (id ⊗ Δ)Δ.

**How the definition helps.** SV ⊗ SV is commutative, so the rule extends uniquely (our own argument). Both iterates are algebra maps that send v to v ⊗ 1 ⊗ 1 + 1 ⊗ v ⊗ 1 + 1 ⊗ 1 ⊗ v. So uniqueness makes them equal.

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “The symmetric algebra SV of a vector space is the free commutative algebra over V.”

**Sources:** none listed. No primary source with a working link was found.

### Trace matrices encode field multiplication

**Remember:** Twist the trace form by a, and nonzero a stays invertible.

*True by definition.* MSC 15B33 (Matrices over special rings (quaternions, finite fields, etc.)), 15A63. arXiv math.RA, math.NT. Level 3: graduate.

**Definition.** For a degree-n extension L of a finite field k with basis e₁, …, eₙ, each a ∈ L gives the symmetric matrix with entries Tr(aeᵢeⱼ). It is the matrix of the form (x, y) ↦ Tr(axy), which is nondegenerate when a ≠ 0, so the matrix is invertible.

**Problem.** For every n, there is an n-dimensional space of n-by-n symmetric matrices over a given finite field whose nonzero members are invertible.

**How the definition helps.** The trace form (x, y) ↦ Tr(xy) is nondegenerate because finite field extensions are separable, and multiplication by a ≠ 0 is invertible, so Tr(axy) is nondegenerate too (our own). The map from a to its matrix is linear and injective, so its image is the required n-dimensional space.

**Paper or page:** [Properties of determinantal polynomials of subspaces of matrices over a finite field](https://arxiv.org/abs/2112.07293v1). It says: “For any positive integer n, there exists an n-dimensional subspace of symmetric matrices”

**Sources:**

- [Rod Gow, Properties of determinantal polynomials of subspaces of matrices over a finite field](https://arxiv.org/abs/2112.07293v1)

### Choi rank counts Kraus terms

**Remember:** Each Kraus term contributes one outer product to the Choi matrix.

*True by definition.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A03. arXiv math.OA, quant-ph. Level 3: graduate.

**Definition.** The Choi matrix of a linear map Φ between complex matrix algebras is the block matrix whose (i, j) block is Φ(Eᵢⱼ), where Eᵢⱼ has a single 1 and zeros elsewhere. A Kraus term X ↦ VXV∗ has Choi matrix vv∗, of rank at most one, where v stacks the columns of V (our own).

**Problem.** For a completely positive map between complex matrix algebras, the fewest Kraus terms needed to represent it equals the rank of its Choi matrix.

**How the definition helps.** So a sum of r Kraus terms has a Choi matrix of rank at most r (our own). Conversely, Choi's theorem makes the Choi matrix positive, and writing it as a sum of rank-many outer products vv∗ gives that many Kraus terms.

**Wikipedia:** [Choi's theorem on completely positive maps](https://en.wikipedia.org/wiki/Choi%27s_theorem_on_completely_positive_maps). It says: “any "square root" factorization of the Choi matrix CΦ = B∗B gives a set of Kraus operators.”

**Sources:**

- [Man-Duen Choi, Completely positive linear maps on complex matrices](https://doi.org/10.1016/0024-3795(75)90075-0)

### Path sums prove total positivity

**Remember:** Minors count disjoint path families, all with plus signs.

*True by definition. Confidence: medium.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices). arXiv math.RA, math.CO. Level 3: graduate.

**Definition.** Take a finite acyclic directed planar network with weighted edges, and sources and sinks on two boundary arcs, ordered so that disjoint path families always connect them in order. The path matrix has as (i, j) entry the sum, over paths from source i to sink j, of the product of edge weights.

**Problem.** A matrix is totally positive if every square submatrix has positive determinant. With positive edge weights, this holds exactly when every equally sized choice of sources and sinks admits vertex-disjoint connecting paths.

**How the definition helps.** The Lindström–Gessel–Viennot lemma makes each minor a sum over vertex-disjoint path families, with a sign from how they match. The boundary order makes every sign positive, so the minor is positive exactly when such a family exists (our own deduction).

**Paper or page:** [Scaffoldings of Totally Positive Matrices and Line Insertion](https://arxiv.org/abs/2109.06369v1). It says: “where the sum is over all vertex-disjoint path systems from I to J”

**Sources:**

- [Karel Casteels, Scaffoldings of Totally Positive Matrices and Line Insertion](https://arxiv.org/abs/2109.06369v1)

### Positive exterior powers order eigenvalues

**Remember:** The dominant eigenvalue of each exterior power reveals the next eigenvalue.

*True by definition.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A18. arXiv math.RA. Level 3: graduate.

**Definition.** A real n × n matrix is totally positive when every minor is strictly positive. Equivalently, every exterior power of it has strictly positive entries in the increasing wedge basis, so Perron–Frobenius applies to each one.

**Problem.** A totally positive real square matrix has distinct positive eigenvalues.

**How the definition helps.** Order the eigenvalues λ₁, λ₂, … by decreasing modulus, so the k-th exterior power has dominant eigenvalue λ₁⋯λₖ (our own proof). Perron–Frobenius makes each such product positive and strictly larger in modulus than the others, so \|λₖ\| &gt; \|λₖ₊₁\|. Successive quotients of these positive products show each λₖ is positive.

**nLab:** [totally positive matrix](https://ncatlab.org/nlab/show/totally+positive+matrix). It says: “Total positivity implies a number of remarkable properties; for example all eigenvalues are distinct and positive.”

**Sources:** none listed. No primary source with a working link was found.

### Positive limits keep eigenvalues nonnegative

**Remember:** Limits of positive eigenvalues can only stay positive or reach zero.

*True by definition.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A18. arXiv math.RA. Level 3: graduate.

**Definition.** Call a matrix totally nonnegative when it is a limit of strictly totally positive matrices, those with all square minors positive. The usual definition, that all minors are nonnegative, is equivalent by an approximation theorem.

**Problem.** Every totally nonnegative real square matrix has only real, nonnegative eigenvalues.

**How the definition helps.** Strictly totally positive matrices have positive eigenvalues, and eigenvalues depend continuously on the matrix, so limits have real nonnegative ones (our own argument). The quoted density theorem shows that this matches the usual definition.

**Paper or page:** [Characterizing total positivity: single vector tests via Linear Complementarity, sign non-reversal, and variation diminution](https://arxiv.org/abs/2103.05624v4). It says: “the set of m × n TPₖ matrices is dense in the set of m × n TNₖ matrices.”

**Sources:**

- [Projesh Nath Choudhury, Characterizing total positivity: single vector tests via Linear Complementarity, sign non-reversal, and variation diminution](https://arxiv.org/abs/2103.05624v4)

### Spectral bounds keep M-matrix inverses nonnegative

**Remember:** The strict spectral bound makes the geometric series converge.

*Rules out counterexamples.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A09. arXiv math.RA. Level 3: graduate.

**Definition.** A nonsingular M-matrix is sI − B with B entrywise nonnegative and s larger than the spectral radius of B, the largest modulus of its eigenvalues. So B/s has spectral radius below one, and its geometric series converges.

**Problem.** A nonsingular M-matrix has an entrywise nonnegative inverse.

**How the definition helps.** Then (sI − B)⁻¹ = (1/s)∑ₖ≥₀ (B/s)ᵏ, and every term is entrywise nonnegative (our own proof). If s only equals the spectral radius, the matrix can be singular: with B the 2 × 2 matrix of ones and s = 2, it sends (1, 1) to zero.

**Wikipedia:** [M-matrix](https://en.wikipedia.org/wiki/M-matrix). It says: “A is inverse-positive. That is, A⁻¹ exists and A⁻¹ ≥ 0.”

**Sources:**

- [Miroslav Fiedler and Vlastimil Pták, On matrices with non-positive off-diagonal elements and positive principal minors](https://doi.org/10.21136/CMJ.1962.100526)

### The pseudoinverse lets Wedderburn rank reduction work for singular blocks

**Remember:** Subtract only the directions that Y\*AX actually sees.

*Makes the theorem clean to state or prove.* MSC 15A09 (Theory of matrix inversion and generalized inverses), 15A03, 65F55. arXiv math.NA, math.RA. Level 4: research.

**Definition.** The pseudoinverse M⁺ of any matrix M undoes M from its column space back to its row space, and sends the orthogonal complement of the column space to zero. The generalized Wedderburn formula is A − AX(Y\*AX)⁺Y\*A, the usual formula with (Y\*AX)⁻¹ replaced by (Y\*AX)⁺.

**Problem.** For matrices A, X and Y of compatible sizes, rank(A − AX(Y\*AX)⁺Y\*A) = rank A − rank(Y\*AX). Here Y\*AX may be singular or even rectangular.

**How the definition helps.** With M = Y\*AX, the map P = AXM⁺Y\* is a projection because M⁺MM⁺ = M⁺ (our own argument). Its image on the range of A has dimension rank M, since AX is injective on the row space of M. So subtracting PA lowers the rank by exactly rank M.

**Paper or page:** [Generalized Wedderburn Rank Reduction](https://arxiv.org/abs/2406.03992v1). It says: “We generalize the Wedderburn rank reduction formula by replacing the inverse with the Moore–Penrose pseudoinverse.”

**Sources:**

- [Oskar Kędzierski, Generalized Wedderburn Rank Reduction, arXiv:2406.03992v1 (2024)](https://arxiv.org/abs/2406.03992v1)
- [R. Penrose, A generalized inverse for matrices (1955)](https://doi.org/10.1017/s0305004100030401)

### Quasideterminants give matrix inversion over noncommutative rings

**Remember:** Quasideterminants are Schur complements, and their inverses are entries of A⁻¹.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15B33, 15A09. arXiv math.RA. Level 4: research.

**Definition.** For a square matrix A over a unital ring, delete row i and column j to get B, and let r and c be the rest of row i and column j. When B is invertible, the quasideterminant is \|A\|ᵢⱼ = aᵢⱼ − rB⁻¹c, the Schur complement of B.

**Problem.** If all n² quasideterminants of A exist and are invertible, then A is invertible, and the (i, j) entry of A⁻¹ is (\|A\|ⱼᵢ)⁻¹.

**How the definition helps.** Move row i and column j to the end (our own argument). Block inversion with B and its Schur complement invertible shows A is invertible, with the inverse of \|A\|ᵢⱼ as the last diagonal entry of A⁻¹. Moving back puts it at position (j, i).

**nLab:** [quasideterminant](https://ncatlab.org/nlab/show/quasideterminant). It says: “If all the n² quasideterminants \|A\|ᵢⱼ exist and are invertible then the inverse matrix A⁻¹ of A exists in Mₙ(R) and (\|A\|ⱼᵢ)⁻¹ = (A⁻¹)ⁱⱼ.”

**Sources:**

- [I. M. Gel'fand, V. S. Retakh, Determinants of matrices over noncommutative rings, Functional Analysis and Its Applications 25 (1991) 91–102](https://doi.org/10.1007/BF01079588)
- [I. Gelfand, V. Retakh, Quasideterminants, I, Selecta Mathematica 3 (1997) 517–546, arXiv:q-alg/9705026](https://arxiv.org/abs/q-alg/9705026)

### Congruence classifies pairs with invertible pivots

**Remember:** Cancel the left changes and keep only congruence on the right.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification), 15A30. arXiv math.RA. Level 4: research.

**Definition.** Two pairs (E, Q) of complex square matrices are equivalent when one is (UEV, U⁻ᵀQV) for the other and some invertible U and V, where U⁻ᵀ is the transpose of the inverse. The product EᵀQ then becomes VᵀEᵀQV, so the left change cancels and the right change acts by congruence.

**Problem.** Take two pairs whose first matrices are both invertible. They are equivalent exactly when their products EᵀQ are congruent, meaning one equals VᵀSV for the other product S and some invertible V.

**How the definition helps.** So equivalent pairs have congruent products. Conversely, U = E⁻¹ and V = I reduce each pair to (I, EᵀQ), and on such pairs U = V⁻¹ realizes any congruence while keeping I (our own proof).

**Paper or page:** [Canonical forms for pairs of matrices associated with Lagrangian and Dirac subspaces](https://arxiv.org/abs/2510.25631v1). It says: “EᵀQ (respectively, E∗Q) is ᵀ-congruent (respectively, ∗-congruent) to E₁ᵀQ₁ (respectively, E₁∗Q₁).”

**Sources:**

- [Sweta Das, Andrii Dmytryshyn, Volker Mehrmann, Canonical forms for pairs of matrices associated with Lagrangian and Dirac subspaces](https://arxiv.org/abs/2510.25631v1)

### Strongly minimal linearizations exist for every rational matrix and keep its symmetry

**Remember:** Full rank at every point, infinity included, so nothing hides.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 15A22 (Matrix pencils), 15A54, 65H17. arXiv math.NA, math.RA. Level 4: research.

**Definition.** A linear system matrix with blocks (A, B) and (−C, D), with A(λ) regular, linearizes a rational matrix when its transfer matrix D + CA⁻¹B equals that matrix. It is strongly minimal when \[A B\] has full row rank and the stacked A, C have full column rank at every finite point. At infinity the same rank tests apply to the coefficients of λ.

**Problem.** Every rational matrix has a strongly minimal linearization, built from its Laurent expansion at infinity. If the matrix is Hermitian, skew-Hermitian, para-Hermitian or para-skew-Hermitian, the linearization can keep that structure.

**How the definition helps.** Strong minimality is the condition that every rational matrix can meet, through a pencil built from its Laurent expansion at infinity. Earlier structure-preserving linearizations did not work for every structured rational or polynomial matrix. The rank conditions at infinity let the pencil carry the matrix's structure at infinity as well (our own).

**Paper or page:** [Strongly minimal self-conjugate linearizations for polynomial and rational matrices](https://arxiv.org/abs/2110.12470v1). It says: “The fact that they are valid for any rational matrix is an improvement on any other previous approach for constructing other classes of structure preserving linearizations”

**Sources:**

- [Froilán M. Dopico, María C. Quintana, Paul Van Dooren, Strongly minimal self-conjugate linearizations for polynomial and rational matrices, arXiv:2110.12470v1 (2021)](https://arxiv.org/abs/2110.12470v1)
- [Froilán M. Dopico, María C. Quintana, Paul Van Dooren, Strongly Minimal Self-Conjugate Linearizations for Polynomial and Rational Matrices, SIAM Journal on Matrix Analysis and Applications 43 (2022) 1354–1381](https://doi.org/10.1137/21m1453542)

### Two matrix solvents with invertible difference solve second-order linear systems

**Remember:** Two solvents cover all initial data when their difference is invertible.

*Rules out counterexamples.* MSC 15A24 (Matrix equations and identities), 15A22, 34A30. arXiv math.NA. Level 4: research.

**Definition.** For square complex matrices B and C, a solvent is a matrix X with X² + BX + C = 0. Two solvents X and Z form a complete pair when X − Z is invertible, so their exponentials can match any initial position and velocity.

**Problem.** Consider x″ + Bx′ + Cx = f. A complete pair X, Z reduces the initial value problem to computing the matrix exponentials exp(Xt) and exp(Zt).

**How the definition helps.** The solution exp(Xt)a + exp(Zt)b matches any initial data: solve (X − Z)a = x′(0) − Zx(0) and set b = x(0) − a (our own argument). Convolving the forcing with (exp(Xt) − exp(Zt))(X − Z)⁻¹ adds the solution with zero initial data (our own). For the scalar equation x″ = 0 the only solvent is zero, and exponentials miss the solution x = t (our own example).

**Paper or page:** [A complete pair of solvents of a quadratic matrix pencil](https://arxiv.org/abs/2405.07210v1). It says: “Knowing a complete pair of solvents X and Z allows us to reduce the solution of the initial value problem to the calculation of two matrix exponentials”

**Sources:**

- [V. G. Kurbatov, I. V. Kurbatova, A complete pair of solvents of a quadratic matrix pencil, arXiv:2405.07210v1 (2024)](https://arxiv.org/abs/2405.07210v1)

### Optimizing over a joint numerical range removes false local minima

**Remember:** Optimize over the image of the sphere, not the sphere.

*Makes the theorem clean to state or prove.* MSC 15A60 (Norms of matrices, numerical range, applications of functional analysis to matrix theory), 90C26, 47A12. arXiv math.NA, math.OC. Level 4: research.

**Definition.** For three Hermitian matrices A₁, A₂, A₃ of the same size, the joint numerical range is the image of the unit sphere under x ↦ (x\*A₁x, x\*A₂x, x\*A₃x).

**Problem.** Suppose a sum of generalized Rayleigh quotients depends on a unit vector only through this triple. Its global minimizers on the sphere are the vectors whose triple globally minimizes the induced objective on the range, and local minima on the range lift to the sphere, but not conversely.

**How the definition helps.** The range is exactly the image of the sphere and the objective is a function on it, so global minima correspond (our own). Continuity of the map lifts local minima from the range, while some local minima on the sphere have no counterpart there and so disappear (our own). The paper also uses convexity of the range to describe the optimum by a nonlinear eigenvalue problem.

**Paper or page:** [Eigenvalue backward errors of Rosenbrock systems and optimization of sums of Rayleigh quotient](https://arxiv.org/abs/2407.03784v1). It says: “This reformulation eliminates certain local minimizers of the original SRQ2 minimization and allows for convenient visualization of the solution.”

**Sources:**

- [Ding Lu, Anshul Prajapati, Punit Sharma, Shreemayee Bora, Eigenvalue backward errors of Rosenbrock systems and optimization of sums of Rayleigh quotient, arXiv:2407.03784v1 (2024)](https://arxiv.org/abs/2407.03784v1)

### Gradient zeros make geometric rank additive

**Remember:** Separate variables make the gradient zero set a product.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.AG. Level 4: research.

**Definition.** View a complex symmetric tensor of degree at least two as a homogeneous polynomial. Its symmetric geometric rank is the codimension of the set where all its first partial derivatives vanish, that is, the number of variables minus that set's dimension.

**Problem.** Symmetric geometric rank adds when two symmetric tensors of the same degree use disjoint variable sets.

**How the definition helps.** In disjoint variables the gradient of the sum splits into the two gradients, so its zero set is the product of the two zero sets (our own proof). Dimensions of products of algebraic sets add, and so do the numbers of variables, so the codimensions add (our own account).

**Paper or page:** [The symmetric geometric rank of symmetric tensors](https://arxiv.org/abs/2303.17537v1). It says: “SGR(T₁ ⊕ T₂) = SGR(T₁) + SGR(T₂).”

**Sources:**

- [Julia Lindberg, Pierpaola Santarsiero, The symmetric geometric rank of symmetric tensors](https://arxiv.org/abs/2303.17537v1)

### Positive scaffoldings extend totally positive matrices

**Remember:** Positive weights on a grid give positive minors through disjoint paths.

*True by definition.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices). arXiv math.RA. Level 4: research.

**Definition.** Orient the edges of a rectangular grid left and down, give each edge a positive weight, and put row entrances on the right and column exits below. The path matrix has entry (i, j) equal to the weighted sum of directed paths from entrance i to exit j. By Lindström's lemma, each minor is a sum of positive weights of disjoint path families.

**Problem.** Every totally positive matrix can gain a top row while keeping all minors positive.

**How the definition helps.** Every totally positive matrix is the path matrix of such a grid, by the positive grid parametrization theorem. Adding a top row of positively weighted edges adds a new matrix row and leaves old paths alone, since paths cannot climb. Every minor of the larger grid has a disjoint path family (our own argument), so Lindström's lemma makes it positive.

**Paper or page:** [Scaffoldings of Totally Positive Matrices and Line Insertion](https://arxiv.org/abs/2109.06369v1). It says: “the matrix X′ obtained from X by adding \[x₀₁ x₀₂ ⋯ x₀ₙ\] above the first row is totally positive.”

**Sources:**

- [Karel Casteels, Scaffoldings of Totally Positive Matrices and Line Insertion](https://arxiv.org/abs/2109.06369v1)
