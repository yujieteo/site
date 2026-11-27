### Basis coordinate maps classify spaces by dimension

**Remember:** Equal dimensions give identical coordinate spaces.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Fix an ordered basis of a finite-dimensional space. Its coordinate map sends each vector to the list of coefficients that expresses it in that basis. Dimension counts the basis vectors.

**Problem.** Two finite-dimensional vector spaces over the same field are isomorphic exactly when their dimensions agree. An isomorphism is a linear map with a linear inverse.

**How the definition helps.** Equal dimensions give both spaces the same space of coordinate lists. Our own proof matches vectors with identical lists. The usual spanning and independence conditions ensure that each list gives exactly one vector and that these maps preserve addition and scaling. Conversely, an isomorphism takes a basis to a basis of the same size.

**Paper or page:** [Same Dimensional Vector Spaces are Isomorphic](https://proofwiki.org/wiki/Same_Dimensional_Vector_Spaces_are_Isomorphic). It says: “That is, V and W are isomorphic.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.70](https://linear.axler.net/LADR4e.pdf)

### Direct sums rule out ambiguous projections onto summands

**Remember:** Unique summand components make projection possible.

*Rules out counterexamples.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A finite sum of subspaces is direct if the only way to obtain zero uses the zero vector from each subspace.

**Problem.** In a finite direct sum, each vector has a unique component in each subspace. Keeping just that component gives a linear map called a projection.

**How the definition helps.** Subtract two decompositions of the same vector and their components sum to zero, so the components agree. Adding or scaling decompositions adds or scales each component. Our own example uses the two axes and the diagonal in the plane. Each pair meets only at zero, yet (1, 1) is both a diagonal vector and the sum of the two unit axis vectors.

**nLab:** [internal direct sum](https://ncatlab.org/nlab/show/internal+direct+sum). It says: “there is a unique I-tuple (nᵢ ∈ Nᵢ)”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 1.41–1.46](https://linear.axler.net/LADR4e.pdf)

### Finite linear combinations give the smallest containing subspace

**Remember:** Intersect every subspace containing the generators to get the smallest one.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The span of S is the intersection of all subspaces containing S. A subspace contains zero and stays closed under addition and scalar multiplication.

**Problem.** The span of S is the smallest subspace containing S.

**How the definition helps.** The intersection lies inside every subspace containing S and still contains S. Our own comparison uses the usual description by finite sums of scalar multiples from S. Those sums form a subspace, including zero as the empty sum. Every subspace containing S contains all those sums.

**Paper or page:** [Intersection of Set of Submodules containing Subset is Smallest Submodule](https://proofwiki.org/wiki/Intersection_of_Set_of_Submodules_containing_Subset_is_Smallest_Submodule). It says: “Then the intersection ⋂T is the smallest submodule of M containing S.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 2.6](https://linear.axler.net/LADR4e.pdf)

### Images bound product rank

**Remember:** A composition cannot gain independent outputs from either factor.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define the rank of a matrix as the dimension of its image, the space of all its outputs. One can instead use the largest size of a square submatrix with nonzero determinant.

**Problem.** For matrices A and B over the same field with AB defined, rank(AB) ≤ min(rank(A), rank(B)).

**How the definition helps.** The outputs of AB lie in the image of A and come from applying A to the image of B (our own). A linear map cannot increase the dimension of a subspace (our own). The work moves to proving that image dimension equals the largest size detected by determinants (our own).

**Wikipedia:** [Rank (linear algebra)](https://en.wikipedia.org/wiki/Rank_%28linear_algebra%29). It says: “rank(AB) ≤ min(rank(A), rank(B)).”

**Sources:** none listed. No primary source with a working link was found.

### Independent columns make the least-squares coefficients unique

**Remember:** Unique coefficients need independent columns, even when the fitted vector is unique.

*Rules out counterexamples.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 15A63. arXiv math.RA. Level 1: early undergraduate.

**Definition.** A matrix A has full column rank if its columns are linearly independent. In other words, Ax = 0 forces x = 0.

**Problem.** For a real matrix A, every b has unique least-squares coefficients exactly when A has full column rank. These coefficients x minimize ‖Ax − b‖.

**How the definition helps.** Independent columns give each fitted vector Ax only one set of coefficients (our own). The closest-point theorem supplies a unique closest vector in the column space for each b (our own). With dependent columns, some nonzero h satisfies Ah = 0, so x and x + h give the same fit (our own).

**Wikipedia:** [Ordinary least squares](https://en.wikipedia.org/wiki/Ordinary_least_squares). It says: “the p columns of the matrix X are linearly independent”

**Sources:** none listed. No primary source with a working link was found.

### Linear independence of families, not sets, matches the determinant test

**Remember:** Two equal columns make a dependent family, even as one set.

*Rules out counterexamples.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 15A15. arXiv math.RA. Level 1: early undergraduate.

**Definition.** An indexed family of vectors, such as the columns of a matrix, is independent if no member is a combination of finitely many other members. A family with the same vector twice is therefore dependent. A set of vectors is independent if it is independent as a family indexed by itself.

**Problem.** A square matrix over a field is invertible exactly when its indexed columns are linearly independent. Equivalently, its determinant is nonzero.

**How the definition helps.** Indexing the columns retains repetitions, as the determinant test requires. Two copies of a nonzero plane vector give a singular matrix, although the singleton containing that vector is independent (our own). The determinant criterion for a basis supplies the equivalence (our own).

**Wikipedia:** [Linear independence](https://en.wikipedia.org/wiki/Linear_independence). It says: “These two notions are not equivalent: the difference being that in a family we allow repeated elements, while in a set we do not.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal independent sets give bases inside finite spanning sets

**Remember:** Keep adding independent vectors until none remain.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Vectors are independent if only zero coefficients give a sum of zero. A basis is an independent set to which no further vector of the space can be added while preserving independence. Equivalently, its linear combinations give every vector in the space.

**Problem.** If a finite spanning set contains an independent set, it contains a basis that extends that independent set.

**How the definition helps.** Our own proof adds vectors from the finite spanning set while they preserve independence. A vector can be added exactly when it lies outside the span of the vectors already chosen. At the stopping point the span contains the entire spanning set, so it contains the whole space.

**Paper or page:** [Vector Space has Basis Between Linearly Independent Set and Finite Spanning Set](https://proofwiki.org/wiki/Vector_Space_has_Basis_Between_Linearly_Independent_Set_and_Finite_Spanning_Set). It says: “Then there is a basis B for G such that H ⊆ B ⊆ F.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 2.30–2.32](https://linear.axler.net/LADR4e.pdf)

### Minors show transposes preserve rank

**Remember:** Transposing turns each square submatrix into one with the same determinant.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a matrix over a field, define rank as the largest size of a square submatrix with nonzero determinant. Use zero if none exists. The column rank is the dimension of the span of the columns.

**Problem.** A matrix and its transpose have the same rank. In particular, the span of its rows and the span of its columns have the same dimension.

**How the definition helps.** Each square submatrix of the transpose is the transpose of a square submatrix of the original matrix (our own). A determinant equals the determinant of its transpose, so the largest qualifying size stays the same (our own). The remaining work is to prove that this size equals the column rank (our own).

**Wikipedia:** [Rank (linear algebra)](https://en.wikipedia.org/wiki/Rank_%28linear_algebra%29). It says: “The rank of A is the largest order of any non-zero minor in A.”

**Paper or page:** [Column Rank of Matrix equals Row Rank](https://proofwiki.org/wiki/Column_Rank_of_Matrix_equals_Row_Rank). It says: “The column rank of A is equal to the row rank of A.”

**Sources:**

- [William P. Wardlaw, Row Rank Equals Column Rank, Mathematics Magazine 78 (2005), 316–318.](https://doi.org/10.1080/0025570X.2005.11953349)

### Separate coordinate blocks make dimensions add in direct sums

**Remember:** Put each basis in its own block and count all the vectors.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define the external direct sum of finitely many spaces as tuples with one entry from each space. Add and scale in each entry separately.

**Problem.** The dimension of a direct sum of finitely many finite-dimensional spaces equals the sum of their dimensions.

**How the definition helps.** Each tuple has one independent block of coordinates for each space. Our own proof places each basis vector in its block and fills the other blocks with zeros. The resulting vectors form a basis because each tuple has a unique expansion. For a direct sum of subspaces, unique decomposition identifies their sum with this tuple space.

**Paper or page:** [Dimension of Direct Product of Vector Spaces](https://proofwiki.org/wiki/Dimension_of_Direct_Product_of_Vector_Spaces). It says: “dim X = ∑ⱼ₌₁ⁿ dim Xⱼ”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.87–3.93](https://linear.axler.net/LADR4e.pdf)

### Subspace sums include the mixed vectors that unions miss

**Remember:** To join subspaces, take sums rather than just collecting vectors.

*Rules out counterexamples.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The sum of subspaces U and W consists of all vectors u + w with u in U and w in W.

**Problem.** The sum of two subspaces is the smallest subspace that contains both.

**How the definition helps.** Any subspace containing U and W must contain every sum u + w. These sums form a subspace because addition and scaling keep them in the same set. Our own counterexample uses the two axes in the plane. Their union contains (1, 0) and (0, 1) but omits their sum.

**Wikipedia:** [Linear subspace](https://en.wikipedia.org/wiki/Linear_subspace). It says: “U + W = {u + w : u ∈ U, w ∈ W}.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 1.36 and 1.40](https://linear.axler.net/LADR4e.pdf)

### The addition map turns the dimension of a sum into rank–nullity

**Remember:** Count all pairs and subtract the pairs that cancel.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define U + W as the image of the addition map (u, w) ↦ u + w. The input space consists of pairs in U × W. Equivalently, the sum is the smallest subspace containing U and W.

**Problem.** For finite-dimensional subspaces U and W of one vector space, dim(U + W) + dim(U ∩ W) = dim U + dim W.

**How the definition helps.** Our own proof defines the sum as the image of addition, so rank–nullity counts its dimension. The pairs giving zero are exactly (x, −x) with x in both subspaces. They form a copy of the intersection. The domain of addition has dimension dim U + dim W.

**Paper or page:** [Rank Plus Nullity Theorem](https://proofwiki.org/wiki/Rank_Plus_Nullity_Theorem). It says: “dim Img φ + dim ker φ = dim G”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 2.43 and 3.21](https://linear.axler.net/LADR4e.pdf)

### The empty set is independent, so the zero space has a basis

**Remember:** The zero space has the empty basis and dimension 0.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A set of vectors is linearly independent if no nontrivial finite linear combination of them is zero. The empty set satisfies this vacuously, because it has no nontrivial linear combinations. The empty set also spans the zero space.

**Problem.** Assume the axiom of choice. Every vector space has a basis. Any independent subset of a spanning set extends to a basis within that spanning set.

**How the definition helps.** The empty set is independent and spans the zero space, so the theorem includes that space. Order the independent extensions inside the spanning set by inclusion (our own). Unions of chains remain independent, so Zorn’s lemma gives a maximal extension (our own). It spans because any generator outside its span could still be added (our own).

**Wikipedia:** [Basis (linear algebra)](https://en.wikipedia.org/wiki/Basis_%28linear_algebra%29), [Dimension (vector space)](https://en.wikipedia.org/wiki/Dimension_%28vector_space%29). It says: “The set X is nonempty since the empty set is an independent subset of V”

**Sources:** none listed. No primary source with a working link was found.

### Unique basis coordinates count vectors over finite fields

**Remember:** Multiply the number of choices for each coordinate.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** An ordered basis gives each vector exactly one list of coefficients. Every such list gives a vector by summing the corresponding multiples of basis vectors.

**Problem.** A vector space of finite dimension n over a field with q elements has exactly qⁿ vectors.

**How the definition helps.** Each of the n coordinates can take any of the q values, independently of the others. Our own comparison starts from the usual basis definition. Spanning gives a list for every vector, and independence makes that list unique.

**Paper or page:** [Cardinality of Finite Vector Space](https://proofwiki.org/wiki/Cardinality_of_Finite_Vector_Space). It says: “\|V\| = \|K\|ᵈⁱᵐ ⱽ”

**Sources:** none listed. No primary source with a working link was found.

### A two-sided inverse requires exactly one input per output

**Remember:** An inverse must undo the map in both orders.

*Rules out counterexamples.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Let T map V linearly to W. It is invertible if some linear map S from W to V satisfies ST = id<sub>V</sub> and TS = id<sub>W</sub>.

**Problem.** A linear map has a two-sided linear inverse exactly when it is bijective, meaning one-to-one and onto.

**How the definition helps.** One inverse equation forces different inputs to have different outputs, and the other forces every output to occur. Our own example sends x to (x, 0). Taking the first coordinate undoes this inclusion, but reversing the order sends (0, 1) to zero. For a bijective linear map, uniqueness of each input makes the inverse preserve addition and scaling.

**Paper or page:** [Inverse of Linear Transformation is Linear Transformation](https://proofwiki.org/wiki/Inverse_of_Linear_Transformation_is_Linear_Transformation). It says: “Then A⁻¹ is a linear transformation.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.59, 3.63 and 3.68](https://linear.axler.net/LADR4e.pdf)

### Finite linear combinations let linear maps carry spans to spans

**Remember:** A linear map sends each combination to the same combination of the images.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The span of S consists of all finite sums of scalar multiples of vectors in S, including the empty sum, zero.

**Problem.** For a linear map T, the image of the span of S equals the span of the images of vectors in S.

**How the definition helps.** Our own proof uses the same coefficients on both sides. Applying T to a sum gives the corresponding sum of images, and every such sum arises this way. Defining span as the smallest containing subspace requires first proving its finite-sum description.

**Paper or page:** [Image of Generating Set of Vector Space under Linear Transformation is Generating Set of Image](https://proofwiki.org/wiki/Image_of_Generating_Set_of_Vector_Space_under_Linear_Transformation_is_Generating_Set_of_Image). It says: “Then T\[G\] be a generating set for T\[X\].”

**Sources:** none listed. No primary source with a working link was found.

### Homogeneity is needed in defining linear maps

**Remember:** A linear map preserves vector sums and multiplication by every scalar.

*Rules out counterexamples.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A map f between F-vector spaces is linear if f(u+v) = f(u)+f(v) and f(cu) = cf(u) for all vectors u,v and scalars c. These conditions are additivity and homogeneity, respectively.

**Problem.** Over a prime field, ℚ or 𝔽ₚ, every additive map between vector spaces is linear. Over every other field, some additive map between vector spaces is not linear (Theorem 2.1).

**How the definition helps.** An additive map preserves multiplication by integers and hence by every scalar in the prime field (our own). Otherwise choose a basis of F over its prime field containing 1 and some a outside that field (our own). Projection onto the 1-coordinate is additive, yet sends a to zero and 1 to one, violating F-homogeneity (our own).

**Paper or page:** [On the independence of conditions in the linear mapping definition (revised)](https://arxiv.org/abs/2208.12648v3). It says: “If F=k, then every additive mapping U→V with vector F-spaces U, V, is F-homogeneous (and therefore F-linear). If F≠k, then there exist vector F-spaces U and V and additive mapping U→V, which is not F-homogeneous.”

**Sources:**

- [Aslanbek Naziev, On the independence of conditions in the linear mapping definition (revised), arXiv:2208.12648 (2022)](https://arxiv.org/abs/2208.12648v3)

### Idempotent projections split spaces

**Remember:** Project once to keep one part and subtract to get the other.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A projection is a linear map P from a vector space to itself with P² = P. Geometrically, a projection keeps one component in a direct sum and discards the other.

**Problem.** Every vector has a unique sum of a vector in the image of P and a vector in its kernel.

**How the definition helps.** Idempotence gives v = Pv + (v − Pv), with the first term in the image and the second in the kernel (our own). Every image vector is fixed by P, so the image meets the kernel only at zero (our own). Subtracting two decompositions now gives equality of their corresponding terms (our own).

**nLab:** [idempotent](https://ncatlab.org/nlab/show/idempotent). It says: “it is an endomorphism e : X → X of some object X that "squares to itself”

**Paper or page:** [Range of Idempotent is Kernel of Complementary Idempotent](https://proofwiki.org/wiki/Range_of_Idempotent_is_Kernel_of_Complementary_Idempotent). It says: “Rng A = ker(I − A)”

**Sources:** none listed. No primary source with a working link was found.

### Identity maps between coordinate systems give the change-of-basis formula

**Remember:** Convert to old coordinates, apply the map, then convert back.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** For two ordered bases of a finite-dimensional space, the change-of-basis matrix P converts new coordinates to old coordinates. It represents the identity map between these coordinate systems. Its columns give the new basis vectors in old coordinates.

**Problem.** If A represents a linear operator in the old basis, then P⁻¹AP represents the same operator in the new basis.

**How the definition helps.** Reading P⁻¹AP from right to left gives the three maps in order. Our own explanation replaces an entry-by-entry calculation with composition. Matrix multiplication represents composition when the intermediate coordinates use the same basis.

**Paper or page:** [Change of Basis Matrix under Linear Transformation/Corollary](https://proofwiki.org/wiki/Change_of_Basis_Matrix_under_Linear_Transformation/Corollary). It says: “B = P⁻¹ A P”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.81–3.84](https://linear.axler.net/LADR4e.pdf)

### Matrix entries count the dimension of the space of linear maps

**Remember:** Each input basis vector contributes one column of independent choices.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Fix bases for the domain and target. Define the matrix of a linear map to have one column per input basis vector, listing the coordinates of its image.

**Problem.** Over one field, the space of linear maps from an n-dimensional domain to an m-dimensional target has dimension mn.

**How the definition helps.** Our own count uses matrices with a single entry equal to one and all other entries zero. These matrices give one basis vector per entry. Passing from maps to matrices preserves addition and scaling. A map can take arbitrary values on a basis, and these values determine the map uniquely.

**Paper or page:** [Dimension of Set of Linear Transformations](https://proofwiki.org/wiki/Dimension_of_Set_of_Linear_Transformations). It says: “dim ℒR(G, H) = n m”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.71–3.72](https://linear.axler.net/LADR4e.pdf)

### Pointwise operations make linear maps a vector space

**Remember:** Do the vector arithmetic separately at each input.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define the sum of linear maps T and S by (T + S)(x) = T(x) + S(x) at each input. Define scalar multiplication by (aT)(x) = aT(x). These definitions work without choosing matrix coordinates.

**Problem.** The linear maps between two vector spaces over the same field form a vector space with these operations.

**How the definition helps.** With operations at each input, every vector-space identity follows from the same identity for output vectors. Our own proof checks that sums and scalar multiples of linear maps still preserve linear combinations. A proof using matrix coordinates would also require choosing bases in finite dimensions.

**Paper or page:** [Linear Mappings between Vector Spaces form Vector Space](https://proofwiki.org/wiki/Linear_Mappings_between_Vector_Spaces_form_Vector_Space). It says: “∀x ∈ X: (T + S)(x) ≔ T(x) + S(x)”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.5–3.6](https://linear.axler.net/LADR4e.pdf)

### Affine spaces include translated solution sets

**Remember:** Subtract one solution to turn all the rest into solutions with zero right side.

*Makes the theorem clean to state or prove.* MSC 15A06 (Linear equations (linear algebraic aspects)). arXiv math.RA. Level 1: early undergraduate.

**Definition.** An affine subspace is a translate of a linear subspace. Unlike a linear subspace, it need not contain the origin.

**Problem.** The solution set of a consistent linear system Ax = b is an affine subspace.

**How the definition helps.** Choosing one solution p makes the full solution set a translate of the kernel (our own). Indeed, x solves Ax = b exactly when A(x − p) = 0 (our own). The line x + y = 1 translates the line x + y = 0 and omits the origin (our own).

**nLab:** [affine space](https://ncatlab.org/nlab/show/affine+space). It says: “An affine space or affine linear space is a vector space that has forgotten its origin.”

**Sources:** none listed. No primary source with a working link was found.

### Invertible row operations preserve solutions

**Remember:** Undo the row operation to recover the old equations.

*True by definition.* MSC 15A06 (Linear equations (linear algebraic aspects)). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define row equivalence of augmented matrices by left multiplication by an invertible matrix. In the usual description, apply a sequence of elementary row operations to the whole matrix, including the right-hand side.

**Problem.** Row-equivalent augmented matrices describe systems with exactly the same solutions.

**How the definition helps.** An invertible left factor can be cancelled, so no solution is gained or lost (our own proof). The new system is EAx = Eb, and applying E⁻¹ gives back Ax = b. Each elementary row operation is left multiplication by an invertible elementary matrix, so the usual description is a special case (our own).

**Paper or page:** [Elementary Row Operation on Augmented Matrix leads to Equivalent System of Simultaneous Linear Equations](https://proofwiki.org/wiki/Elementary_Row_Operation_on_Augmented_Matrix_leads_to_Equivalent_System_of_Simultaneous_Linear_Equations). It says: “Then S and S′ are equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Alternating multilinearity gives the determinant rules for row operations

**Remember:** Repeated rows kill the extra term.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** For square matrices of a fixed size, the determinant is the unique function with three properties. It is linear in each row separately, vanishes when two rows agree, and equals one on the identity matrix.

**Problem.** Scaling a row scales the determinant, and swapping two rows negates it. Adding a multiple of one row to another leaves it unchanged.

**How the definition helps.** Linearity gives the scaling rule and splits row addition into the original determinant and a term with repeated rows (our own). For the swap rule, put the same sum u + v in both row positions (our own). Expansion gives zero as the sum of the two determinants with u and v in opposite orders (our own). The signed permutation formula proves existence, and expanding each row in coordinate vectors proves uniqueness (our own).

**Paper or page:** [Effect of Elementary Row Operations on Determinant](https://proofwiki.org/wiki/Effect_of_Elementary_Row_Operations_on_Determinant). It says: “Applying ERO 2 has no effect on det A.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the determinant by its properties makes the product rule easy

**Remember:** Signed volume is linear in each side and zero when two sides coincide.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Fix a matrix size and a commutative ring with identity. The determinant is the unique function linear in each column, zero on repeated columns, and one at the identity matrix.

**Problem.** The determinant is multiplicative: det(AB) = det(A)·det(B). Also, a matrix over a commutative ring is invertible exactly when its determinant is invertible.

**How the definition helps.** For fixed A, the function B ↦ det(AB) is alternating and multilinear in the columns of B (our own). Expansion in coordinate vectors gives det(AB) = det(A)det(B), since its value at I is det(A) (our own). An inverse for A therefore gives an inverse for det(A) (our own). Conversely, the adjugate identity gives A⁻¹ = det(A)⁻¹ adj(A) whenever det(A) is a unit (our own).

**Wikipedia:** [Determinant](https://en.wikipedia.org/wiki/Determinant). It says: “The determinant can be also defined as the unique alternating multilinear form of the columns (or the rows) that takes the value 1 on the identity matrix.”

**Sources:**

- [S. Lang, Linear Algebra, 3rd ed., Springer (1987); Wikipedia cites the 2nd ed., Addison-Wesley (1971)](https://doi.org/10.1007/978-1-4757-1949-9)

### Defining the determinant of an operator needs one basis-change lemma

**Remember:** Similar matrices have equal determinants, so the operator has one.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The determinant of a linear operator A on a finite-dimensional space is the determinant of its matrix in some basis. A change of basis replaces the matrix M by P⁻¹MP for an invertible matrix P.

**Problem.** For a linear operator A on a nontrivial finite-dimensional vector space over a field, det A does not depend on the basis.

**How the definition helps.** Basis change replaces M by P⁻¹MP, whose determinant equals det(P)⁻¹ det(M) det(P) = det(M) (our own). The product rule for matrix determinants gives the equality (our own).

**Paper or page:** [Determinant of Linear Operator is Well Defined](https://proofwiki.org/wiki/Determinant_of_Linear_Operator_is_Well_Defined). It says: “Then the determinant det A of A is well defined, that is, does not depend on the choice of a basis of V.”

**Sources:**

- [ProofWiki, Determinant of Linear Operator is Well Defined](https://proofwiki.org/wiki/Determinant_of_Linear_Operator_is_Well_Defined)

### Defining the Vandermonde polynomial as a determinant makes swaps flip its sign

**Remember:** Swapping two variables swaps two rows, so the sign flips.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define the Vandermonde polynomial of x₁, …, xₙ as the determinant of the matrix whose ith row is 1, xᵢ, xᵢ², …, xᵢⁿ⁻¹. The product definition multiplies the differences xⱼ − xᵢ over all pairs i &lt; j.

**Problem.** Swapping two variables multiplies the product of the differences xⱼ − xᵢ, over all pairs i &lt; j, by −1.

**How the definition helps.** Swapping two variables swaps the corresponding rows, so alternation negates the determinant. The Vandermonde factorization identifies this determinant with the stated product of differences (our own).

**nLab:** [Vandermonde determinant](https://ncatlab.org/nlab/show/Vandermonde+determinant). It says: “because this corresponds to swapping the corresponding rows of the Vandermonde matrix”

**Sources:** none listed. No primary source with a working link was found.

### Giving the empty matrix determinant 1 removes an exception from matrix inversion

**Remember:** No rows, no columns, determinant one.

*Makes the theorem clean to state or prove.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A09. arXiv math.RA. Level 1: early undergraduate.

**Definition.** The determinant of the 0 × 0 matrix, which has no entries, is 1. This follows from the conventions for the empty set and the empty product. The Leibniz formula has one term, for the empty permutation, and that term is an empty product.

**Problem.** Over a field, every n × n matrix A with n ≥ 1 and nonzero determinant d has inverse d⁻¹ adj(A). The adjugate entries are signed determinants of submatrices obtained by deleting one row and one column.

**How the definition helps.** The empty determinant gives adj(\[d\]) = \[1\], so the same formula yields \[d⁻¹\] when n = 1. The adjugate identity A adj(A) = det(A)I gives the inverse formula in every positive size (our own).

**Wikipedia:** [Determinant](https://en.wikipedia.org/wiki/Determinant). It says: “In the case n=1, the single entry of the adjugate matrix is the determinant of the empty matrix, which equals 1.”

**Sources:** none listed. No primary source with a working link was found.

### Linearity in each column gives Cramer’s rule

**Remember:** The replaced column contributes only its coefficient on the missing column.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** For square matrices of a fixed size, the determinant is the unique function with three properties. It is linear in each column separately, vanishes on repeated columns, and equals one on the identity matrix.

**Problem.** If A is invertible and Ax = b, the ith entry of x is det Aᵢ divided by det A. Here Aᵢ is A with column i replaced by b.

**How the definition helps.** Expanding the replacement column b as a weighted sum of the original columns gives one determinant per column. Only column i avoids a repetition, so det Aᵢ equals xᵢ times det A. Starting from the signed permutation formula requires proving these column rules (our own).

**nLab:** [determinant](https://ncatlab.org/nlab/show/determinant). It says: “This follows straightforwardly from properties 1 and 2 above.”

**Paper or page:** [Cramer's Rule](https://proofwiki.org/wiki/Cramer's_Rule). It says: “xᵢ = det Aᵢ / det A”

**Sources:** none listed. No primary source with a working link was found.

### Rectangular products have equal traces

**Remember:** Both traces add the same pairs of entries.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The trace of a square matrix is the sum of its diagonal entries. For a real matrix, another formula sums its complex eigenvalues with algebraic multiplicity.

**Problem.** For a real m × n matrix A and an n × m matrix B, tr(AB) = tr(BA), even when m ≠ n.

**How the definition helps.** Both diagonal sums add the same products aᵢⱼbⱼᵢ over all i and j, with the factors in opposite orders (our own calculation). Exchanging the sums and commuting the factors gives the equality. With the eigenvalue formula, the work moves into showing that the diagonal sum equals the eigenvalue sum (our own).

**Paper or page:** [Trace of Product of Matrices](https://proofwiki.org/wiki/Trace_of_Product_of_Matrices). It says: “tr(AB) = tr(BA)”

**Sources:** none listed. No primary source with a working link was found.

### The adjugate works over any commutative ring, which proves Cayley–Hamilton

**Remember:** Delete the row and column, sign the minor, then transpose.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A24. arXiv math.RA. Level 1: early undergraduate.

**Definition.** For an n × n matrix M with n ≥ 1, adj(M) has entry (i,j) equal to (−1)ⁱ⁺ʲ times a minor. Take that minor by deleting row j and column i and taking the determinant, using one for the empty determinant.

**Problem.** Every square matrix A over a commutative ring satisfies its own characteristic polynomial p(t) = det(tI − A). That is, p(A) = 0.

**How the definition helps.** The adjugate is defined by polynomials in the entries, with no division, so its basic identity holds over every commutative ring. In particular it holds for tI − A, which gives (tI − A) · adj(tI − A) = p(t) · I. Write adj(tI − A) as a polynomial in t with matrix coefficients and compare the coefficients of each power of t. Multiplying the k-th equation by Aᵏ and adding, the left side telescopes to 0 and the right side is p(A).

**Wikipedia:** [Cayley–Hamilton theorem](https://en.wikipedia.org/wiki/Cayley%E2%80%93Hamilton_theorem), [Adjugate matrix](https://en.wikipedia.org/wiki/Adjugate_matrix). It says: “Being a consequence of just algebraic expression manipulation, these relations are valid for matrices with entries in any commutative ring (commutativity must be assumed for determinants to be defined in the first place).”

**Sources:**

- [Cayley, A. (1858). A memoir on the theory of matrices. Philosophical Transactions of the Royal Society of London 148.](https://doi.org/10.1098/rstl.1858.0002)

### The characteristic polynomial gives the trace as an eigenvalue sum

**Remember:** The coefficient below the leading term records the sum of the roots.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Let A be a complex square matrix of size n ≥ 1, and let I be the identity matrix. Define its trace as minus the coefficient of degree n − 1 in det(tI − A). The usual definition adds the diagonal entries.

**Problem.** The trace of a complex square matrix is the sum of its eigenvalues, counted with their multiplicities as roots.

**How the definition helps.** Factoring det(tI − A) shows that its coefficient of degree n − 1 is minus the sum of its roots, counted with multiplicity (our own). Expanding the determinant gives the same coefficient as minus the sum of the diagonal entries (our own).

**Wikipedia:** [Trace (linear algebra)](https://en.wikipedia.org/wiki/Trace_%28linear_algebra%29). It says: “the trace of a matrix is equal to the sum of its eigenvalues (counted with algebraic multiplicities)”

**Sources:** none listed. No primary source with a working link was found.

### The permutation sum expands determinants along any row or column

**Remember:** Group the products by the entry they use in one row or column.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a square matrix, select one entry per row and column and multiply the entries. Sum these products with a sign for each column order. An even number of swaps from the original order gives plus, and an odd number gives minus.

**Problem.** Along any row or column, the determinant equals the sum of each entry times its cofactor. Delete the entry’s row and column for the smaller determinant, then negate it if the two indices sum to an odd number.

**How the definition helps.** Group the products by their entry in one row or column to recover a smaller signed sum for each entry (our own). Moving that row and column to the front accounts for the cofactor sign (our own). Starting instead with first-row expansion requires induction to obtain the permutation formula (our own).

**Paper or page:** [Laplace Expansion Theorem for Determinants](https://proofwiki.org/wiki/Laplace_Expansion_Theorem_for_Determinants). It says: “Thus the value of a determinant can be found either by: multiplying all the elements in a row by their cofactors and adding up the products”

**Sources:** none listed. No primary source with a working link was found.

### The signed permutation sum makes transposition preserve determinants

**Remember:** Transposing reverses each permutation but leaves its sign alone.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a square matrix, select one entry per row and column and multiply the entries. Sum these products with a sign for each column order. An even number of swaps from the original order gives plus, and an odd number gives minus.

**Problem.** Exchanging rows with columns to form the transpose of a square matrix preserves its determinant.

**How the definition helps.** Transposition turns each choice of columns into the inverse rearrangement, with the same sign and product (our own). With a row-based definition, the work is to show that this signed sum gives the same determinant (our own).

**Paper or page:** [Determinant of Transpose](https://proofwiki.org/wiki/Determinant_of_Transpose). It says: “det A = det Aᵀ”

**Sources:** none listed. No primary source with a working link was found.

### Matrix exponentials solve linear systems

**Remember:** Start at the identity and evolve by multiplying on the left by A.

*True by definition.* MSC 15A16 (Matrix exponential and similar functions of matrices). arXiv math.CA. Level 1: early undergraduate.

**Definition.** For a fixed real square matrix A, define exp(tA) as the unique matrix solution of Y′ = AY with Y(0) = I. The usual series starts with I + tA + t²A²/2.

**Problem.** For each initial vector v, the solution of x′ = Ax with x(0) = v is x(t) = exp(tA)v.

**How the definition helps.** The defining differential equation gives the vector equation immediately in our own proof. Multiplying Y′ = AY on the right by v gives x′ = Ax, and Y(0)v = v. Existence and uniqueness come from the theorem for linear differential equations. To recover the series formula, differentiate its convergent power series term by term and apply uniqueness.

**Wikipedia:** [Matrix exponential](https://en.wikipedia.org/wiki/Matrix_exponential). It says: “matrix defined by the power series”

**Paper or page:** [Derivative of Matrix Exponential](https://proofwiki.org/wiki/Derivative_of_Matrix_Exponential). It says: “d/dt eᴬᵗ = A eᴬᵗ”

**Sources:** none listed. No primary source with a working link was found.

### Changing coordinates preserves eigenspace dimensions

**Remember:** The basis changes, but the vectors scaled by the map do not.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define similar matrices as matrices of the same linear map in different bases. The algebraic definition says B = S⁻¹AS for an invertible matrix S.

**Problem.** Similar matrices have the same eigenvalues and the same eigenspace dimension for each eigenvalue.

**How the definition helps.** Changing coordinates leaves the underlying map and its eigenspaces unchanged (our own). Coordinates in either basis therefore give each eigenspace the same dimension (our own). The work moves to deriving the formula B = S⁻¹AS for a change of basis (our own).

**Wikipedia:** [Change of basis](https://en.wikipedia.org/wiki/Change_of_basis). It says: “two matrices are similar if and only if they represent the same endomorphism on two different bases.”

**Sources:** none listed. No primary source with a working link was found.

### Characteristic roots give odd real matrices an eigenvalue

**Remember:** A real polynomial of odd degree must cross zero.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a real square matrix A, define its real eigenvalues as the real roots of det(tI − A), its characteristic polynomial. Equivalently, λ is a real eigenvalue if some nonzero real vector v satisfies Av = λv.

**Problem.** Every real square matrix with an odd number of rows has a real eigenvalue.

**How the definition helps.** The characteristic polynomial has odd degree, so its values have opposite signs far to the left and right (our own). The intermediate value theorem then gives a real root (our own). The work goes into showing that the polynomial has degree equal to the matrix order (our own). The determinant test for invertibility identifies its roots with eigenvalues in the vector sense (our own).

**Wikipedia:** [Eigenvalues and eigenvectors](https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors). It says: “Therefore, any real matrix with odd order has at least one real eigenvalue”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., §5B](https://linear.axler.net/LADR4e.pdf)

### Diagonal forms simplify powers

**Remember:** Change coordinates once, then raise each diagonal entry to a power.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A square matrix A is diagonalizable if A = SDS⁻¹ for an invertible matrix S and a diagonal matrix D. Equivalently, A has a basis of eigenvectors.

**Problem.** If A = SDS⁻¹ with D diagonal and S invertible, then Aⁿ = SDⁿS⁻¹ for every integer n ≥ 0.

**How the definition helps.** Our own calculation cancels each adjacent S⁻¹ and S, leaving only powers of the diagonal entries. Our own comparison puts the work into finding an eigenvector basis and checking that its columns give S.

**Paper or page:** [Powers of Diagonalizable Matrix](https://proofwiki.org/wiki/Powers_of_Diagonalizable_Matrix). It says: “Aⁿ = XDⁿX⁻¹”

**Sources:** none listed. No primary source with a working link was found.

### Eigenvectors must be nonzero, so eigenvalues are roots of the characteristic polynomial

**Remember:** Zero is fixed by every scale factor, so zero is never an eigenvector.

*Rules out counterexamples.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA, math.SP. Level 1: early undergraduate.

**Definition.** An eigenvector of a linear map T is a nonzero vector v with T(v) = λv for some scalar λ. The scalar λ is then an eigenvalue. The eigenspace of λ is the set of its eigenvectors together with the zero vector.

**Problem.** A scalar λ is an eigenvalue of a square matrix A if and only if det(A − λI) = 0. So an n × n matrix has at most n eigenvalues.

**How the definition helps.** Allowing the zero vector would make every scalar an eigenvalue because A0 = λ0 for every λ (our own). A nonzero eigenvector exists precisely when A − λI has nonzero kernel, equivalently zero determinant. This determinant is a degree-n polynomial in λ, so it has at most n distinct roots (our own).

**Wikipedia:** [Eigenvalues and eigenvectors](https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors). It says: “Equation (2) has a nonzero solution v if and only if the determinant of the matrix (A − λI) is zero.”

**Sources:** none listed. No primary source with a working link was found.

### Generalized eigenvectors give a Jordan basis when eigenvectors are too few

**Remember:** An eigenvector is killed by A − λI once; a generalized eigenvector by some power.

*Makes the theorem clean to state or prove.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A20. arXiv math.RA. Level 1: early undergraduate.

**Definition.** Fix an eigenvalue λ of a square matrix A. A nonzero vector x is a generalized eigenvector of rank m if m is the least positive integer satisfying (A − λI)ᵐx = 0.

**Problem.** Every square matrix whose characteristic polynomial splits over the field is similar to a Jordan normal form. This includes every complex square matrix. Each diagonal block has one eigenvalue along its diagonal, ones just above it, and zeros elsewhere.

**How the definition helps.** Generalized eigenvectors form chains even when ordinary eigenvectors fail to span (our own). On the generalized λ-eigenspace, A − λI maps each chain vector to its predecessor and the first to zero (our own). The Jordan chain decomposition theorem supplies a basis of such chains when the characteristic polynomial splits (our own).

**Wikipedia:** [Generalized eigenvector](https://en.wikipedia.org/wiki/Generalized_eigenvector), [Jordan normal form](https://en.wikipedia.org/wiki/Jordan_normal_form). It says: “Using generalized eigenvectors, a set of linearly independent eigenvectors of A can be extended, if necessary, to a complete basis for V.”

**Sources:** none listed. No primary source with a working link was found.

### Squaring restricts projection eigenvalues

**Remember:** A projection has the same effect once or twice.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A projection is a linear map P with P² = P. The geometric definition sends u + v to u for a chosen pair of complementary subspaces. Complementary means every vector has exactly one such decomposition.

**Problem.** Every eigenvalue of a projection is zero or one.

**How the definition helps.** On an eigenvector, P² = P becomes λ² = λ (our own). The work moves to showing that P² = P gives the geometric decomposition (our own). Each x splits as Px plus x − Px, the first fixed and the second sent to zero (our own).

**nLab:** [idempotent](https://ncatlab.org/nlab/show/idempotent). It says: “e ∘ e = e.”

**Wikipedia:** [Projection (linear algebra)](https://en.wikipedia.org/wiki/Projection_%28linear_algebra%29). It says: “The eigenvalues of a projection matrix must be 0 or 1.”

**Sources:** none listed. No primary source with a working link was found.

### Leading ones alone in their columns make reduced echelon form unique

**Remember:** Leading ones with zeros above and below leave no choices.

*Rules out counterexamples.* MSC 15A21 (Canonical forms, reductions, classification), 15A06. arXiv math.RA. Level 1: early undergraduate.

**Definition.** A matrix is in row echelon form if each nonzero row starts further right than the row above, and zero rows are at the bottom. It is in reduced row echelon form if, also, each leading entry is 1 and is the only nonzero entry in its column.

**Problem.** Over a field, every matrix is row equivalent to exactly one reduced row echelon matrix. Two matrices of the same size are row equivalent exactly when their reduced forms agree.

**How the definition helps.** Scaling a pivot row or adding a later row to it can preserve echelon form while violating the reduced conditions (our own). Gaussian elimination gives existence (our own). In the common row space, possible leading positions of nonzero vectors are exactly the pivots (our own). Each reduced row is uniquely determined by its pivot coordinates, since their values are its coefficients in the reduced basis (our own).

**Wikipedia:** [Row echelon form](https://en.wikipedia.org/wiki/Row_echelon_form). It says: “While a matrix may have several echelon forms, its reduced echelon form is unique.”

**Sources:** none listed. No primary source with a working link was found.

### Positive QR diagonals ensure uniqueness

**Remember:** Positive pivots stop the two factors from trading minus signs.

*Rules out counterexamples.* MSC 15A23 (Factorization of matrices). arXiv math.NA. Level 1: early undergraduate.

**Definition.** In a reduced factorization A = QR, the columns of Q are perpendicular unit vectors. The square matrix R has zeros below its diagonal. For a real matrix with independent columns, require positive diagonal entries of R.

**Problem.** A real matrix with independent columns has exactly one reduced QR factorization with positive diagonal entries in R.

**How the definition helps.** Positive diagonal entries remove the sign choices in a reduced QR factorization; without them, I = I·I = (−I)(−I). Gram–Schmidt gives existence, since each new column has positive length after removing earlier components (our own proof). If QR = US, then SR⁻¹ is orthogonal and upper triangular, so it is diagonal. Its diagonal entries are positive and of absolute value one, so they all equal one.

**Wikipedia:** [QR decomposition](https://en.wikipedia.org/wiki/QR_decomposition). It says: “we require that the diagonal elements of R₁ are positive then R₁ and Q₁ are unique”

**Paper or page:** [On the Column and Row Ranks of a Matrix](https://arxiv.org/abs/2112.06638v1). It says: “Q is m × n with orthonormal columns and R is an n × n upper triangular matrix”

**Sources:** none listed. No primary source with a working link was found.

### The image gives the smallest space through which a matrix factors

**Remember:** Factor through the image and there is no wasted dimension.

*True by definition.* MSC 15A23 (Factorization of matrices), 15A03. arXiv math.RA. Level 1: early undergraduate.

**Definition.** The rank of a matrix is the dimension of its image, the space spanned by its columns. Another description counts nonzero rows after row reduction.

**Problem.** Over a field, every m-by-n matrix of rank r factors as an m-by-r matrix times an r-by-n matrix. No such factorization has a smaller middle dimension.

**How the definition helps.** A basis of the image supplies the columns of the first factor. The second factor lists the coordinates of each original column in that basis. Our own lower bound follows because the first factor must have enough columns to span the original image.

**Wikipedia:** [Rank factorization](https://en.wikipedia.org/wiki/Rank_factorization). It says: “Every finite-dimensional matrix has a rank decomposition”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.56–3.58](https://linear.axler.net/LADR4e.pdf)

### Dot products reverse transpose order

**Remember:** Move the left factor first, then the right factor.

*True by definition.* MSC 15A24 (Matrix equations and identities), 15A63. arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define the transpose Aᵀ by requiring (Ax) · y = x · (Aᵀy) for every pair of compatible vectors. The usual entry definition swaps rows and columns.

**Problem.** For real matrices A and B that can be multiplied, (AB)ᵀ = BᵀAᵀ.

**How the definition helps.** Moving A across the dot product and then moving B puts Bᵀ before Aᵀ (our own). The work moves to showing that testing the dot product on coordinate vectors gives the usual transposed entries (our own).

**nLab:** [adjoint operator](https://ncatlab.org/nlab/show/adjoint+operator). It says: “⟨T a, b⟩ = ⟨a, T∗ b⟩”

**Paper or page:** [Transpose of Matrix Product](https://proofwiki.org/wiki/Transpose_of_Matrix_Product). It says: “(AB)ᵀ = BᵀAᵀ”

**Sources:** none listed. No primary source with a working link was found.

### Complex numbers as matrices make their absolute values multiply

**Remember:** The determinant of a complex-number matrix is its squared absolute value.

*True by definition.* MSC 15A30 (Algebraic systems of matrices), 15A15. arXiv math.RA, math.CV. Level 1: early undergraduate.

**Definition.** Define a + ib as the real matrix with rows (a, −b) and (b, a), with ordinary matrix addition and multiplication. Its absolute value is the nonnegative square root of the determinant. The alternative uses pairs (a, b) and the rule (a, b)(c, d) = (ac − bd, ad + bc).

**Problem.** For any complex z and w, \|zw\| = \|z\|\|w\|.

**How the definition helps.** Matrix multiplication represents complex multiplication, so det(AB) = det(A)det(B) gives the identity after taking nonnegative square roots. The determinant of the matrix for a + ib equals a² + b², the usual squared modulus (our own).

**Wikipedia:** [Complex number](https://en.wikipedia.org/wiki/Complex_number). It says: “This isomorphism associates the square of the absolute value of a complex number with the determinant of the corresponding matrix, and the conjugate of a complex number with the transpose of the matrix.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the matrix product as composition makes associativity automatic

**Remember:** Multiply matrices by composing maps, and brackets stop mattering.

*True by definition.* MSC 15A30 (Algebraic systems of matrices), 15A04. arXiv math.RA. Level 1: early undergraduate.

**Definition.** Binet defined the product of matrices so that it represents the composition of the linear maps they represent. If A is the matrix of a map f and B is the matrix of g, then BA is the matrix of g after f. The usual row-by-column formula follows from this.

**Problem.** For matrices of matching sizes, (AB)C = A(BC). With distributivity, this makes the n × n matrices a ring with the identity matrix as unit.

**How the definition helps.** Composition is associative, so either grouping represents the same composite map. The identity map supplies the unit, and linearity gives both distributive laws for pointwise addition (our own).

**Wikipedia:** [Matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication). It says: “This result also follows from the fact that matrices represent linear maps. Therefore, the associative property of matrices is simply a specific case of the associative property of function composition.”

**Sources:**

- [Cayley, A. (1858). A memoir on the theory of matrices. Philosophical Transactions of the Royal Society of London 148.](https://doi.org/10.1098/rstl.1858.0002)

### Operator norms bound products

**Remember:** The greatest stretch of a product cannot exceed the product of the greatest stretches.

*True by definition.* MSC 15A60 (Norms of matrices, numerical range, applications of functional analysis to matrix theory). arXiv math.FA. Level 1: early undergraduate.

**Definition.** Define the operator norm of a matrix as the largest length of Ax for a unit vector x. Another formula uses the largest singular value. That is the square root of the largest eigenvalue of AᵀA.

**Problem.** For compatible real matrices A and B of positive dimensions, their Euclidean operator norms satisfy ‖AB‖ ≤ ‖A‖‖B‖.

**How the definition helps.** Each of the two successive stretches is at most its largest stretch. Apply ‖Ay‖ ≤ ‖A‖‖y‖ to y = Bx, then maximize over unit x (our own). With the singular-value formula, the work moves to showing that it equals the largest stretch (our own).

**Paper or page:** [Supremum Operator Norm on Continuous Linear Transformation Space is Submultiplicative](https://proofwiki.org/wiki/Supremum_Operator_Norm_on_Continuous_Linear_Transformation_Space_is_Submultiplicative). It says: “‖A ∘ B‖ ≤ ‖A‖ · ‖B‖”

**Sources:** none listed. No primary source with a working link was found.

### Trace proves Frobenius norm invariance

**Remember:** Orthogonal factors cancel inside the trace.

*True by definition.* MSC 15A60 (Norms of matrices, numerical range, applications of functional analysis to matrix theory). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define the squared Frobenius norm of a real matrix A as tr(AᵀA). Here the trace, written tr, adds diagonal entries. Another definition adds the squares of all entries of A.

**Problem.** Multiplying a real matrix on either side by an orthogonal matrix of matching size leaves its Frobenius norm unchanged.

**How the definition helps.** Inside the trace, an orthogonal factor cancels its transpose, after cycling the factors if needed (our own). The work moves to proving that trace is unchanged by cycling compatible factors and that tr(AᵀA) sums the squared entries (our own).

**Wikipedia:** [Matrix norm](https://en.wikipedia.org/wiki/Matrix_norm). It says: “This property follows from the cyclic nature of the trace”

**Sources:** none listed. No primary source with a working link was found.

### Gram matrices detect independent columns

**Remember:** The Gram quadratic form measures the squared length of a column combination.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products), 15A03. arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a real matrix V, define the Gram matrix of its columns as VᵀV. Equivalently, each entry is the dot product of the corresponding pair of columns.

**Problem.** The Gram matrix is positive definite exactly when the columns are linearly independent. Positive definite means its quadratic form is positive on every nonzero vector.

**How the definition helps.** The product definition gives xᵀ(VᵀV)x = ‖Vx‖², which vanishes exactly when Vx = 0 (our own). The work moves to checking that VᵀV contains the pairwise dot products (our own).

**Wikipedia:** [Gram matrix](https://en.wikipedia.org/wiki/Gram_matrix). It says: “the Gramian matrix is positive definite if and only if the vectors vᵢ are linearly independent”

**Sources:** none listed. No primary source with a working link was found.

### Orthogonal projection finds the closest point

**Remember:** Moving away from the perpendicular foot adds a square to the distance.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The orthogonal projection of x onto a subspace is the point p in it such that x − p is perpendicular to the subspace. Equivalently, sum the components of x along an orthonormal basis of the subspace.

**Problem.** In a finite-dimensional real inner product space, the orthogonal projection of x is the unique nearest point in the subspace.

**How the definition helps.** For any point q in the subspace, the vectors x − p and p − q are perpendicular (our own). Pythagoras shows that the squared distance to q exceeds the squared distance to p unless q = p (our own). The work moves to showing that the basis formula produces a perpendicular residual (our own).

**Wikipedia:** [Projection (linear algebra)](https://en.wikipedia.org/wiki/Projection_%28linear_algebra%29). It says: “⟨Px, y − Py⟩ = ⟨x, (P − P²)y⟩ = 0”

**Sources:** none listed. No primary source with a working link was found.

### Orthogonal residuals turn least squares into linear equations

**Remember:** The best fit leaves an error perpendicular to each column.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A least-squares fit is the vector Ax closest to b. Equivalently, it is the orthogonal projection of b onto the span of the columns of A. The error b − Ax is then perpendicular to each column.

**Problem.** For a real matrix A, x minimizes ‖Ax − b‖ exactly when AᵀAx = Aᵀb, even if the columns are dependent.

**How the definition helps.** The normal equations just collect the dot products of the error with all the columns (our own). The work moves to the closest-point theorem for orthogonal projections, which justifies this description (our own).

**Wikipedia:** [Ordinary least squares](https://en.wikipedia.org/wiki/Ordinary_least_squares). It says: “projected orthogonally onto the linear subspace spanned by the columns of X”

**Sources:** none listed. No primary source with a working link was found.

### Orthonormal coordinates preserve dot products

**Remember:** Perpendicular unit axes let you multiply matching coordinates and add.

*Rules out counterexamples.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.FA. Level 1: early undergraduate.

**Definition.** An orthonormal basis is a spanning family of unit vectors in which vectors with different indices are perpendicular.

**Problem.** In an orthonormal basis of a finite-dimensional real inner product space, the inner product equals the dot product of the coordinate lists.

**How the definition helps.** Perpendicularity removes mixed terms, and unit length gives each matching term coefficient one (our own). For a counterexample, take the single basis vector 2 on the real line. Its coordinate is 1, but its squared length is 4. For two unit basis vectors that are not perpendicular, their coordinate lists have dot product zero, but their inner product is not zero.

**Wikipedia:** [Orthonormal basis](https://en.wikipedia.org/wiki/Orthonormal_basis). It says: “Under these coordinates, the inner product becomes a dot product of vectors.”

**Paper or page:** [Dot Product of Orthonormal Basis Vectors](https://proofwiki.org/wiki/Dot_Product_of_Orthonormal_Basis_Vectors). It says: “eᵢ · eⱼ = δᵢⱼ”

**Sources:** none listed. No primary source with a working link was found.

### Projecting onto a line gives Cauchy–Schwarz

**Remember:** A shadow cannot be longer than its vector.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define the projection of x onto the line through a unit vector e as p = ⟨x,e⟩e. Here the inner product ⟨x,e⟩ is linear in x.

**Problem.** In a real or complex inner product space, \|⟨x,y⟩\| ≤ ‖x‖‖y‖. Equality holds exactly when one vector is a scalar multiple of the other.

**How the definition helps.** The projection turns the inequality into a comparison between two lengths (our own). For nonzero y, take e = y/‖y‖ and check that x − p is perpendicular to e (our own). Pythagoras gives ‖x‖² = \|⟨x,e⟩\|² + ‖x − p‖², with equality in the bound exactly when x = p (our own). If y is zero, both sides vanish (our own).

**Paper or page:** [Cauchy-Bunyakovsky-Schwarz Inequality/Inner Product Spaces](https://proofwiki.org/wiki/Cauchy-Bunyakovsky-Schwarz_Inequality/Inner_Product_Spaces). It says: “\|⟨x,y⟩\|² ≤ ⟨x,x⟩⟨y,y⟩”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 6.13–6.14](https://linear.axler.net/LADR4e.pdf)

### Quadratic forms make sums of positive definite matrices positive definite

**Remember:** At each nonzero vector, the form of the sum adds two positive numbers.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products), 15A18. arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a real symmetric matrix M, the quadratic form of M is the function x ↦ xᵀMx. The matrix is positive definite if this value is positive at every nonzero vector x. An equivalent definition requires every eigenvalue of M to be positive.

**Problem.** The sum of two real symmetric positive definite matrices of the same size is positive definite.

**How the definition helps.** With the quadratic form definition, the form of the sum at a nonzero vector is a sum of two positive numbers. The eigenvalue test does not give this, because eigenvalues of a sum are not sums of eigenvalues. The work is in the spectral theorem, which writes the form as a sum of squares weighted by the eigenvalues (our own).

**Wikipedia:** [Definite matrix](https://en.wikipedia.org/wiki/Definite_matrix). It says: “If M and N are positive-definite, then the sum M + N is also positive-definite.”

**Sources:** none listed. No primary source with a working link was found.

### Strict positivity makes inner product length a norm

**Remember:** A nonzero vector must have positive length.

*Rules out counterexamples.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A real inner product is a symmetric bilinear pairing with ⟨x,x⟩ &gt; 0 for every nonzero x. Symmetry means swapping the inputs gives the same number. Bilinearity means each input enters linearly.

**Problem.** The length √⟨x,x⟩ from a real inner product is a norm. In particular, it vanishes only at zero.

**How the definition helps.** Strict positivity gives positive length to every nonzero vector (our own). Measuring only the first coordinate would give (0,1) length zero (our own). Bilinearity makes length scale by the absolute value of a scalar (our own). The Cauchy–Schwarz inequality gives the triangle inequality when we expand ‖x + y‖² (our own).

**nLab:** [inner product space](https://ncatlab.org/nlab/show/inner+product+space). It says: “The inner product is positive definite if it is both positive and definite, in other words if ‖x‖² &gt; 0 whenever x ≠ 0.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 6.7–6.18](https://linear.axler.net/LADR4e.pdf)

### Symmetry makes quadratic form matrices unique

**Remember:** Symmetry divides each mixed coefficient equally between two matrix entries.

*Rules out counterexamples.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Represent a real quadratic form q, a homogeneous polynomial of degree two, by a symmetric matrix S with q(x) = xᵀSx. Allowing any square matrix also gives representations, but they need not be unique.

**Problem.** Every real quadratic form has exactly one symmetric matrix representation in fixed coordinates.

**How the definition helps.** Symmetry forces each off-diagonal entry to be half the corresponding mixed coefficient (our own). Each diagonal entry equals the coefficient of one squared variable (our own). Comparing coefficients now proves existence and uniqueness (our own). Without symmetry, even the nonzero matrix sending (x, y) to (y, −x) represents the zero form (our own).

**Wikipedia:** [Quadratic form](https://en.wikipedia.org/wiki/Quadratic_form). It says: “there is a one-to-one correspondence between quadratic forms and symmetric matrices that determine them.”

**Sources:** none listed. No primary source with a working link was found.

### The coordinate dot product is distributive by definition

**Remember:** In coordinates, the dot product inherits distributivity from ordinary multiplication.

*True by definition. Confidence: medium.* MSC 15A63 (Quadratic and bilinear forms, inner products), 97G70. arXiv math.MG, math.HO. Level 1: early undergraduate.

**Definition.** For real vectors, define u·v = u₁v₁ + u₂v₂ + ⋯ + uₙvₙ. The geometric definition uses u·v = \|u\|\|v\| cos θ, where θ is the angle between nonzero vectors u and v. It gives zero if either vector is zero.

**Problem.** For all vectors u, v and w, u·(v + w) = u·v + u·w.

**How the definition helps.** Distributivity of real multiplication gives uᵢ(vᵢ + wᵢ) = uᵢvᵢ + uᵢwᵢ for every coordinate (our own). Summing over i proves the identity (our own). The law of cosines connects the coordinate and geometric definitions (our own).

**Wikipedia:** [Dot product](https://en.wikipedia.org/wiki/Dot_product). It says: “The dot product may be defined algebraically or geometrically. The geometric definition is based on the notions of angle and distance (magnitude) of vectors. The equivalence of these two definitions relies on having a Cartesian coordinate system for Euclidean space.”

**Sources:** none listed. No primary source with a working link was found.

### The orthogonal residual gives the complementary projection

**Remember:** The part you subtract is the other projection.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a subspace W, define its orthogonal complement W⊥ as all vectors perpendicular to W. Define the orthogonal projection P onto W by Px ∈ W and x − Px ∈ W⊥.

**Problem.** In finite dimensions, I − P is the orthogonal projection onto W⊥, where I is the identity map.

**How the definition helps.** Defining projection by the perpendicular remainder gives both projections from one split (our own). The candidate x − Px belongs to W⊥ and leaves remainder Px, which is perpendicular to W⊥ (our own). The orthogonal decomposition theorem guarantees that these conditions pick exactly one vector, without a second basis calculation (our own).

**Paper or page:** [Orthogonal Projection onto Orthocomplement](https://proofwiki.org/wiki/Orthogonal_Projection_onto_Orthocomplement). It says: “Then: P₍A⊥₎ = I − Pₐ”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 6.55–6.57](https://linear.axler.net/LADR4e.pdf)

### The determinant definition makes the cross product orthogonal to both inputs

**Remember:** A repeated row makes the determinant zero.

*True by definition. Confidence: medium.* MSC 15A72 (Vector and tensor algebra, theory of invariants), 15A15. arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a and b in ℝ³, define a × b as the unique v with v · c = det(a, b, c) for every c. The determinant uses a, b and c as rows, in that order. An alternative definition uses the three coordinates of a × b directly.

**Problem.** For all a and b in ℝ³, the cross product a × b is orthogonal to both a and b.

**How the definition helps.** Setting c = a or c = b gives a repeated row, so both dot products vanish (our own). Existence and uniqueness follow because the values of c ↦ det(a,b,c) on the standard basis determine the three coordinates (our own).

**Wikipedia:** [Cross product](https://en.wikipedia.org/wiki/Cross_product), [Triple product](https://en.wikipedia.org/wiki/Triple_product). It says: “The cross product is always orthogonal to both vectors, and has magnitude zero when the vectors are parallel”

**Sources:** none listed. No primary source with a working link was found.

### The determinant definition makes the scalar triple product cyclic

**Remember:** A cyclic shift of three rows is an even permutation.

*True by definition.* MSC 15A72 (Vector and tensor algebra, theory of invariants), 15A15. arXiv math.RA. Level 1: early undergraduate.

**Definition.** The scalar triple product of three vectors in ℝ³ is the determinant of the matrix with those vectors as rows. Another definition uses the dot and cross products, a · (b × c), with b × c given by its three coordinates.

**Problem.** Cyclically shifting three vectors leaves their scalar triple product unchanged. Swapping any two vectors changes its sign.

**How the definition helps.** The determinant definition gives both rules directly from the sign change for a row swap. A cyclic shift of three rows is two swaps, so the sign changes twice. Starting with the coordinate formula instead, one can check the same rules by comparing six terms (our own). Expanding the determinant along its first row proves that the two definitions agree.

**Wikipedia:** [Triple product](https://en.wikipedia.org/wiki/Triple_product). It says: “The scalar triple product can also be understood as the determinant of the 3 × 3 matrix that has the three vectors either as its rows or its columns”

**Sources:** none listed. No primary source with a working link was found.

### The volume definition gives cross products a reflection sign

**Remember:** A reflection reverses the oriented volume, so the cross product picks up a sign.

*True by definition.* MSC 15A72 (Vector and tensor algebra, theory of invariants). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define the cross product in oriented Euclidean three-space by (u × v) · w = det(u,v,w) in a positive orthonormal basis. The dot product determines the vector from these values.

**Problem.** For every orthogonal map Q, (Qu) × (Qv) = det(Q) Q(u × v). In particular, reflections add a minus sign to the ordinary vector transformation rule.

**How the definition helps.** Testing against Qw turns the left side into a signed volume, which Q scales by det(Q) (our own). An orthogonal map preserves dot products, so the right side gives the same result for every Qw (our own). The work moves to checking that the volume definition gives the usual coordinate cross product (our own).

**nLab:** [pseudovector representation](https://ncatlab.org/nlab/show/pseudovector+representation). It says: “the tensor product of representations of the vector representation V with the pseudoscalar representation”

**Wikipedia:** [Cross product](https://en.wikipedia.org/wiki/Cross_product). It says: “is changed into its opposite by an odd permutation of the basis vectors.”

**Sources:** none listed. No primary source with a working link was found.

### Distance-preserving maps compose and invert

**Remember:** Composing or reversing distance-preserving maps still preserves distance.

*True by definition.* MSC 15B10 (Orthogonal matrices). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define an orthogonal real square matrix by asking its linear map to preserve all distances. An equivalent entry test asks for columns of length one with pairwise zero dot products.

**Problem.** The product of two orthogonal matrices of the same size is orthogonal. The inverse of each orthogonal matrix is orthogonal.

**How the definition helps.** A composition preserves distances at each step, and reversing a distance-preserving bijection preserves them too (our own). A distance-preserving square matrix is injective and therefore invertible (our own). The work moves to recovering dot products from lengths and checking them on coordinate vectors (our own).

**nLab:** [orthogonal group](https://ncatlab.org/nlab/show/orthogonal+group). It says: “This is isomorphic to the group of n × n orthogonal matrices.”

**Paper or page:** [Inverse of Orthogonal Matrix is Orthogonal](https://proofwiki.org/wiki/Inverse_of_Orthogonal_Matrix_is_Orthogonal). It says: “Then its inverse A⁻¹ is also orthogonal.”

**Sources:** none listed. No primary source with a working link was found.

### Normal matrices are exactly the ones the spectral theorem diagonalizes

**Remember:** Diagonal matrices commute with their adjoints, and unitary changes of basis keep that.

*Makes the theorem clean to state or prove.* MSC 15B57 (Hermitian, skew-Hermitian, and related matrices), 15A20. arXiv math.RA. Level 1: early undergraduate.

**Definition.** A complex square matrix A is normal when it commutes with its conjugate transpose A\*. In symbols, A\*A = AA\*.

**Problem.** The spectral theorem: a complex square matrix has an orthonormal basis of eigenvectors if and only if it is normal.

**How the definition helps.** The definition is an easy necessary condition, and the theorem says that it is also sufficient. It is necessary because a diagonal matrix commutes with its conjugate transpose, and a unitary change of basis keeps that property. For sufficiency, the Schur decomposition makes A unitarily similar to an upper triangular matrix, and a normal upper triangular matrix is diagonal.

**Wikipedia:** [Normal matrix](https://en.wikipedia.org/wiki/Normal_matrix). It says: “The concept of normality is important because normal matrices are precisely those to which the spectral theorem applies:”

**Sources:** none listed. No primary source with a working link was found.

### Self-adjointness makes distinct eigenspaces orthogonal

**Remember:** Different eigenvalues cannot scale the same nonzero dot product equally.

*True by definition.* MSC 15B57 (Hermitian, skew-Hermitian, and related matrices), 15A18. arXiv math.RA. Level 1: early undergraduate.

**Definition.** A real square matrix A is self-adjoint if (Ax) · y = x · (Ay) for all vectors x and y. The entry definition calls A symmetric if it equals its transpose.

**Problem.** Eigenvectors of a real symmetric matrix for distinct eigenvalues have dot product zero.

**How the definition helps.** Moving A across the dot product gives λ(x · y) = μ(x · y) for eigenvectors with eigenvalues λ and μ (our own). If λ and μ differ, the dot product must be zero (our own). The work moves to checking that the dot product definition is equivalent to symmetry of the entries (our own).

**Paper or page:** [Eigenvectors of Symmetric Matrix are Orthogonal](https://proofwiki.org/wiki/Eigenvectors_of_Symmetric_Matrix_are_Orthogonal). It says: “Then v₁ and v₂ are orthogonal with respect to ⟨·, ·⟩.”

**Sources:** none listed. No primary source with a working link was found.

### Coset coordinates show how many dimensions a quotient removes

**Remember:** A quotient drops the coordinates along the subspace.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A coset of U groups together vectors whose differences lie in U. Extend a basis of U to a basis of V. A coset then has coordinates given by the coefficients on the added basis vectors.

**Problem.** If V is finite-dimensional and U is a subspace, then dim(V/U) = dim V − dim U.

**How the definition helps.** Our own proof counts one free coordinate for each added basis vector. Two vectors have the same added coordinates exactly when their difference belongs to U. Every list occurs, and addition and scaling act on these lists coordinate by coordinate. The basis extension theorem supplies the required basis.

**Paper or page:** [Dimension of Quotient Vector Space](https://proofwiki.org/wiki/Dimension_of_Quotient_Vector_Space). It says: “dim Y + dim X/Y = dim X”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 2.32 and 3.105](https://linear.axler.net/LADR4e.pdf)

### Defining rank by fewest rank-one summands bounds ranks of entrywise products

**Remember:** Each pair of rank-one summands contributes at most one rank-one term.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 15A69. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define the rank of a matrix as the least number of rank-one matrices, each a column times a row, that sum to it. The usual definition takes the dimension of the column space.

**Problem.** For two matrices A and B of the same size over a field, rank(A ∘ B) ≤ rank(A) · rank(B). Here A ∘ B is the entrywise product.

**How the definition helps.** Expand the entrywise product using rank-one decompositions of A and B (our own). Each pair xyᵀ and uvᵀ contributes the outer product (x ∘ u)(y ∘ v)ᵀ (our own). Discarding zero products leaves at most rank(A) · rank(B) rank-one terms (our own). The rank factorization theorem identifies the minimum summand count with column rank (our own).

**Paper or page:** [Computational Resolution of Hadamard Product Factorization for 4 × 4 Matrices](https://arxiv.org/abs/2508.14901). It says: “rank(A ∘ B) ≤ rank(A) · rank(B).”

**Sources:** none listed. No primary source with a working link was found.

### Defining the double dual map by evaluation makes it natural

**Remember:** A vector reaches its double dual by evaluation, which needs no basis.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 15A04. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For each vector space V, evaluation sends v ∈ V to the functional on V\* given by φ ↦ φ(v).

**Problem.** Let f: V → W be any linear map. Applying f and then evaluation gives the same result as applying evaluation and then the double transpose of f. For finite-dimensional spaces, evaluation is an isomorphism.

**How the definition helps.** For each ψ ∈ W\*, both routes evaluate at ψ to give ψ(f(v)) (our own). In finite dimensions, a nonzero vector has some nonzero basis coordinate, so evaluation is injective (our own). The double dual has the same dimension as V, giving surjectivity (our own).

**nLab:** [dual vector space](https://ncatlab.org/nlab/show/dual+vector+space). It says: “There is a natural transformation from V to its double dual:”

**Sources:** none listed. No primary source with a working link was found.

### Duals of quotients count the dimensions of annihilators

**Remember:** Functionals blind to a subspace read only the quotient.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The annihilator of U consists of all linear maps from V to its scalar field that vanish on U. Equivalently, these maps read only the class of their input in V/U.

**Problem.** In an n-dimensional vector space, the annihilator of an m-dimensional subspace has dimension n − m.

**How the definition helps.** Our own proof counts the annihilator as the dual space of V/U. A functional vanishing on U has one value on each class, and every functional on the quotient gives such a map. The quotient has dimension n − m, and a finite-dimensional space and its dual have equal dimensions.

**Paper or page:** [Dimension of Annihilator on Algebraic Dual](https://proofwiki.org/wiki/Dimension_of_Annihilator_on_Algebraic_Dual). It says: “M° is an (n − m)-dimensional subspace of G∗.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.105, 3.111 and 3.125](https://linear.axler.net/LADR4e.pdf)

### Finite bases give a basis of coordinate functionals

**Remember:** Finite bases need only finitely many coordinate readings.

*Rules out counterexamples.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The dual space consists of all linear maps to the scalar field. For each basis vector, its coordinate functional reads the coefficient of that vector.

**Problem.** For a finite basis, its coordinate functionals form a basis of the dual space. For an infinite basis, they remain independent but do not span the full dual.

**How the definition helps.** With finitely many coordinates, every functional is the sum of the coordinate functionals weighted by its values on the basis. Testing a combination on each basis vector proves independence. Our own counterexample assigns one to every vector of an infinite basis and extends linearly. Every finite combination of coordinate functionals vanishes on some basis vector.

**nLab:** [dual vector space](https://ncatlab.org/nlab/show/dual+vector+space). It says: “However, if V has finite dimension, then B∗ is a basis of V∗.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.4 and 3.112–3.116](https://linear.axler.net/LADR4e.pdf)

### Finite support lets summand bases combine into one basis

**Remember:** Finite support lets finite linear combinations reach every tuple.

*Rules out counterexamples. Confidence: medium.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define the direct sum of a family of spaces as tuples with only finitely many nonzero entries. The direct product, by contrast, allows any tuple.

**Problem.** If each space in a family has a chosen basis, the corresponding vectors in separate coordinates form a basis of the direct sum.

**How the definition helps.** Only finitely many entries need expansion, and each uses finitely many basis vectors. Our own proof of independence checks each entry of a zero combination separately. In a product of infinitely many real lines, the all-ones tuple cannot be a finite sum of coordinate vectors.

**nLab:** [direct sum](https://ncatlab.org/nlab/show/direct+sum). It says: “This makes it clear that the direct sum equals the direct product when there are only finitely many objects involved.”

**Sources:** none listed. No primary source with a working link was found.

### Quotient classes identify every complement with the same space

**Remember:** Every class has exactly one representative in any given complement.

*True by definition. Confidence: medium.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The quotient V/U groups together vectors whose difference belongs to the subspace U. A complement W gives each vector exactly one expression u + w, with u in U and w in W.

**Problem.** For any complement W of U in V, the quotient map restricts to an isomorphism from W onto V/U.

**How the definition helps.** Our own proof uses w as the unique representative of its class in W. Thus the quotient map gives a linear bijection from W to the classes. Describing the quotient using a complement requires choosing one, which basis extension permits in finite dimensions.

**Wikipedia:** [Quotient space (linear algebra)](https://en.wikipedia.org/wiki/Quotient_space_%28linear_algebra%29). It says: “The mapping that associates to v ∈ V the equivalence class \[v\] is known as the quotient map.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 2.32 and 3.99–3.104](https://linear.axler.net/LADR4e.pdf)

### Requiring a nonzero functional removes the whole space from hyperplanes

**Remember:** One nonzero scalar equation removes exactly one dimension.

*Rules out counterexamples.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define a linear hyperplane as the kernel of a nonzero linear functional, a linear map to the scalar field. Another definition uses codimension one, meaning the quotient has dimension one.

**Problem.** A subspace H of V is a linear hyperplane exactly when V/H has dimension one.

**How the definition helps.** A nonzero functional reaches the whole scalar field, so the quotient by its kernel is a line. Our own converse identifies the one-dimensional quotient with the scalar field and composes that identification with the quotient map. The zero functional shows why the restriction matters. Its kernel is all of V.

**Paper or page:** [Kernel of Non-Zero Linear Functional has Codimension 1](https://proofwiki.org/wiki/Kernel_of_Non-Zero_Linear_Functional_has_Codimension_1). It says: “Then ker f has codimension 1.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.104–3.108](https://linear.axler.net/LADR4e.pdf)

### Separate summand coordinates split every functional on a direct sum

**Remember:** A functional on a finite direct sum adds its values on the components.

*True by definition. Confidence: medium.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define a direct sum by requiring a unique decomposition of each vector into its summand components. Its dual consists of the linear maps from the sum to the scalar field.

**Problem.** The dual of a finite direct sum is canonically isomorphic to the direct sum of the dual spaces of its summands. The isomorphism takes a functional to its restrictions to the summands.

**How the definition helps.** Unique decomposition lets us recover a functional by adding its values on the components. Our own comparison uses the usual zero-sum test for directness, which gives unique decomposition by subtracting two expressions for a vector. Given one functional per subspace, adding their values defines a linear functional because components add and scale separately.

**nLab:** [internal direct sum](https://ncatlab.org/nlab/show/internal+direct+sum). It says: “there is a unique I-tuple (nᵢ ∈ Nᵢ)”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 1.41, 3.93 and 3.108](https://linear.axler.net/LADR4e.pdf)

### Composing functionals with a map reveals the kernel of its dual

**Remember:** A functional vanishes after composition exactly when it vanishes on the image.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A functional is a linear map to the scalar field. The dual map of T sends a functional f on the target to f ∘ T. The annihilator of a subspace consists of the functionals that vanish on it.

**Problem.** For a linear map T between finite-dimensional spaces, the kernel of its dual map is the annihilator of its image.

**How the definition helps.** The composite f ∘ T is zero exactly when f vanishes at every output of T. Our own comparison starts with the transpose matrix, formed by interchanging rows and columns. Showing that this matrix represents composition with T in the dual bases gives the same result in coordinates.

**Paper or page:** [Kernel of Transpose of Linear Transformation is Annihilator of Image](https://proofwiki.org/wiki/Kernel_of_Transpose_of_Linear_Transformation_is_Annihilator_of_Image). It says: “is the annihilator of the image of u”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.118 and 3.128–3.132](https://linear.axler.net/LADR4e.pdf)

### Counting dimensions after quotienting by the kernel gives rank–nullity

**Remember:** Rank counts dimensions left after collapsing the kernel.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The kernel consists of the inputs a linear map sends to zero. Its dimension is the nullity. Define rank as the dimension of the quotient by the kernel, where inputs differing by a kernel vector form one class.

**Problem.** For a linear map from a finite-dimensional space, its rank plus its nullity equals the dimension of its domain.

**How the definition helps.** Our own proof now counts the dimensions removed and retained by the quotient. Extending a kernel basis to a domain basis shows that the added vectors give a basis of the quotient after taking classes. The first isomorphism theorem identifies the quotient with the image, whose dimension usually defines rank.

**Paper or page:** [Rank Plus Nullity Theorem](https://proofwiki.org/wiki/Rank_Plus_Nullity_Theorem). It says: “dim Img φ + dim ker φ = dim G”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.21 and 3.104–3.107](https://linear.axler.net/LADR4e.pdf)

### Functionals on the quotient explain the image of a dual map

**Remember:** A functional comes from the target exactly when it ignores the kernel.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A functional is a linear map to the scalar field. The annihilator of the kernel consists of the functionals that vanish on all inputs T sends to zero. The dual map sends a functional f on the target to f ∘ T.

**Problem.** For a linear map T between finite-dimensional spaces, the image of its dual map is the annihilator of its kernel.

**How the definition helps.** Our own proof views a functional vanishing on the kernel as a functional on the quotient. The quotient identifies with the image of T, so the functional already has values there. Extend a basis of the image to the target and assign zero to the added vectors. Conversely, composing any target functional with T gives zero on the kernel.

**Paper or page:** [Image of Transpose of Linear Transformation is Annihilator of Kernel](https://proofwiki.org/wiki/Image_of_Transpose_of_Linear_Transformation_is_Annihilator_of_Kernel). It says: “The image of uᵀ is the annihilator of ker u.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.107 and 3.130](https://linear.axler.net/LADR4e.pdf)

### Quotient maps group vectors that any map killing the subspace identifies

**Remember:** A map that kills the subspace cannot tell its coset representatives apart.

*True by definition.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A quotient of V by a subspace M comes with a linear map Q that sends M to zero. Every linear map T from V sending M to zero must have exactly one expression T = L ∘ Q with L linear.

**Problem.** The space V/M of classes of vectors differing by elements of M satisfies this quotient property.

**How the definition helps.** Our own proof uses the fact that T takes the same value on every vector in a class. Send the class of v to T(v). This rule preserves addition and scaling because classes inherit both operations from V. Every class has a representative, so the rule determines L uniquely.

**Paper or page:** [Condition for Mapping from Quotient Vector Space to be Well-Defined](https://proofwiki.org/wiki/Condition_for_Mapping_from_Quotient_Vector_Space_to_be_Well-Defined). It says: “M ⊆ ker T”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 3.99–3.107](https://linear.axler.net/LADR4e.pdf)

### Defining the pseudoinverse geometrically makes it give the shortest least-squares solution

**Remember:** Project for the best fit, then invert away from the kernel.

*True by definition.* MSC 15A09 (Theory of matrix inversion and generalized inverses), 15A10. arXiv math.NA, math.RA. Level 2: later undergraduate.

**Definition.** For a real or complex matrix A and target vector b, project b orthogonally onto the range of A. Define A⁺b as the unique preimage of this projection perpendicular to the kernel of A.

**Problem.** For every vector b, the vector A⁺b minimizes ‖Ax − b‖. Among all minimizers, it is the unique one of least length.

**How the definition helps.** Both claims follow from the two steps of the construction. By Pythagoras, the minimizers of ‖Ax − b‖ are A⁺b plus vectors of the kernel of A. Since A⁺b is perpendicular to the kernel, Pythagoras again makes it the shortest. The work moves into the orthogonal splitting of the space and into checking the Penrose equations (our own).

**Wikipedia:** [Moore–Penrose inverse](https://en.wikipedia.org/wiki/Moore%E2%80%93Penrose_inverse). It says: “to compute a "best fit" (least squares) approximate solution to a system of linear equations that lacks an exact solution”

**Sources:**

- [Roger Penrose, On best approximate solutions of linear matrix equations (1956)](https://doi.org/10.1017/S0305004100030929)

### The four Penrose conditions make the pseudoinverse exist and be unique

**Remember:** Two conditions give a partial inverse; two symmetry conditions make it unique.

*Makes the theorem clean to state or prove.* MSC 15A09 (Theory of matrix inversion and generalized inverses), 15A10. arXiv math.RA, math.NA. Level 2: later undergraduate.

**Definition.** A pseudoinverse of an m × n matrix A is an n × m matrix A⁺ that meets four conditions. The first two are AA⁺A = A and A⁺AA⁺ = A⁺. The last two say that AA⁺ and A⁺A are both Hermitian (equal to their own conjugate transpose).

**Problem.** Every real or complex matrix, of any shape and rank, has exactly one pseudoinverse. Also, A⁺b is the least-squares solution of Ax = b with the smallest norm.

**How the definition helps.** The four Penrose equations apply to every matrix shape and rank. In a singular value decomposition, they uniquely prescribe reciprocals on positive singular values and zero on the remaining directions (our own). In those coordinates, least squares fixes the positive-singular-value components, and minimum norm sets every free component to zero (our own).

**Wikipedia:** [Moore–Penrose inverse](https://en.wikipedia.org/wiki/Moore%E2%80%93Penrose_inverse). It says: “Generalized inverses always exist but are not in general unique. Uniqueness is a consequence of the last two conditions.”

**Sources:**

- [Moore, E. H. (1920). On the reciprocal of the general algebraic matrix. Abstract in: The fourteenth western meeting of the American Mathematical Society, Bulletin of the American Mathematical Society 26(9), 385–397 (abstract on pp. 394–395).](https://doi.org/10.1090/S0002-9904-1920-03322-7)
- [Penrose, R. (1955). A generalized inverse for matrices. Proceedings of the Cambridge Philosophical Society 51(3), 406–413.](https://doi.org/10.1017/S0305004100030401)

### Defining κ(A) as ‖A‖‖A⁻¹‖ makes κ(AB) ≤ κ(A)κ(B) immediate

**Remember:** Bound the matrices and their inverses separately, then multiply.

*True by definition. Confidence: medium.* MSC 15A12 (Conditioning of matrices), 65F35. arXiv math.NA. Level 2: later undergraduate.

**Definition.** For an invertible matrix A with an induced matrix norm, define its condition number by κ(A) = ‖A‖ ‖A⁻¹‖.

**Problem.** For invertible matrices A and B of the same size, κ(AB) ≤ κ(A)κ(B).

**How the definition helps.** Submultiplicativity bounds ‖AB‖ by ‖A‖ ‖B‖ and ‖(AB)⁻¹‖ by ‖B⁻¹‖ ‖A⁻¹‖. Multiplying gives the inequality (our own). The condition number also equals the worst relative amplification of perturbations in the right-hand side over all nonzero right-hand sides.

**Wikipedia:** [Condition number](https://en.wikipedia.org/wiki/Condition_number). It says: “The condition number is defined more precisely to be the maximum ratio of the relative error in x to the relative error in b.”

**Sources:** none listed. No primary source with a working link was found.

### Alternating rows give the factors of the Vandermonde determinant

**Remember:** Two equal inputs make equal rows, so their difference is a factor.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define the Vandermonde polynomial as the determinant whose ith row lists the powers of xᵢ from degree zero to n − 1. Use the determinant as a function linear in each row and zero on repeated rows.

**Problem.** The Vandermonde determinant is the product of xⱼ − xᵢ over all pairs i &lt; j.

**How the definition helps.** Equal inputs give equal rows and a zero determinant, so each difference divides the polynomial. These distinct factors together have the full degree of the determinant (our own). The term selecting the diagonal has coefficient one and fixes the overall sign and constant (our own). This avoids evaluating the whole signed permutation sum, though that formula still supplies the degree and coefficient (our own).

**nLab:** [Vandermonde determinant](https://ncatlab.org/nlab/show/Vandermonde+determinant). It says: “since each of those values makes two rows equal (hence with zero determinant).”

**Sources:** none listed. No primary source with a working link was found.

### Defining characteristic coefficients as exterior-power traces makes them principal minor sums

**Remember:** Each characteristic coefficient is the trace on one wedge degree.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For an endomorphism A of an n-dimensional vector space and 0 ≤ k ≤ n, define its kth characteristic coefficient as tr(∧ᵏA). The induced map ∧ᵏA applies A to every factor of a basis wedge and extends linearly.

**Problem.** Let A be an n × n matrix. The coefficient of tⁿ⁻ᵏ in det(tI − A) is (−1)ᵏ times the sum of all k × k principal minors of A. A principal minor uses the same index set for its rows and its columns.

**How the definition helps.** In the wedge basis, each diagonal entry of ∧ᵏA is the corresponding principal minor. Their sum gives the trace. Expanding the top wedge of tI − A selects k slots for −A and gives this trace times (−1)ᵏ at degree n − k (our own).

**nLab:** [determinant](https://ncatlab.org/nlab/show/determinant). It says: “It is called the jth alternating power (of V).”

**Wikipedia:** [Characteristic polynomial](https://en.wikipedia.org/wiki/Characteristic_polynomial). It says: “This trace may be computed as the sum of all principal minors of A of size k.”

**Sources:** none listed. No primary source with a working link was found.

### Defining compound matrices by exterior powers makes Cauchy–Binet a composition rule

**Remember:** Composing maps composes their exterior powers, so compound matrices multiply.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a matrix A in standard bases, its rth compound matrix represents ∧ʳA in the increasing-index wedge bases. The map ∧ʳA applies A to each factor of a basis wedge and extends linearly.

**Problem.** Let A and B be matrices that can be multiplied. Each r × r minor of AB is a sum over the r-element index sets K. Each term is the minor of A with columns K times the minor of B with rows K.

**How the definition helps.** Applying B and then A to each wedge factor gives ∧ʳ(AB) = (∧ʳA)(∧ʳB). Expanding a basis wedge shows that each matrix entry is the minor with the corresponding row and column sets. Ordinary matrix multiplication now gives the stated sum (argument our own).

**Wikipedia:** [Compound matrix](https://en.wikipedia.org/wiki/Compound_matrix). It says: “It is closely related to, and is a strengthening of, the Cauchy–Binet formula.”

**Paper or page:** [Cauchy-Binet Formula](https://proofwiki.org/wiki/Cauchy-Binet_Formula). It says: “Let A be an m × n matrix. Let B be an n × m matrix.”

**Sources:** none listed. No primary source with a working link was found.

### Defining determinants on the top exterior power makes block triangular determinants multiply

**Remember:** The top wedge of the whole space splits into subspace and quotient parts.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a space V of dimension n, the top exterior power is the line spanned by the wedge product of any basis. Define the determinant of a linear map as the scalar by which it acts on this line. The usual definition is a signed sum over permutations of products of matrix entries.

**Problem.** Let a linear map A on V preserve a subspace W. Then det A is the determinant on W times the determinant of the induced map on V/W. In matrix terms, a block triangular matrix has determinant equal to the product of the determinants of its diagonal blocks.

**How the definition helps.** Choose a basis of W followed by lifts of a basis of V/W. Wedging the images multiplies the first block by the determinant on W. Components in W from the lifted block vanish against that full wedge of W. The remaining quotient components contribute the determinant on V/W (our own).

**nLab:** [determinant line](https://ncatlab.org/nlab/show/determinant+line). It says: “its determinant line is the 1-dimensional vector space”

**Sources:** none listed. No primary source with a working link was found.

### Defining the adjugate through the wedge pairing makes adj(AB) equal adj(B) adj(A)

**Remember:** Exterior powers keep the order of composition, and composing on the right reverses it.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Let V be free of finite rank n ≥ 1 over a commutative ring with identity. For an endomorphism T, its adjugate sends v to the unique w satisfying w ∧ u = v ∧ (∧ⁿ⁻¹T)(u) for every u ∈ ∧ⁿ⁻¹V.

**Problem.** For n × n matrices A and B over a commutative ring, with n ≥ 1, adj(AB) = adj(B) adj(A).

**How the definition helps.** With this definition, the order reversal is the usual rule for composing on the right. Exterior powers compose in the same order as the maps, and composing on the right reverses that order. The usual proof checks invertible matrices first and then extends by a density or polynomial argument. The work moves into checking that the abstract adjugate has the cofactor matrix (step to the product rule our own).

**Wikipedia:** [Adjugate matrix](https://en.wikipedia.org/wiki/Adjugate_matrix). It says: “The adjugate can be viewed in abstract terms using exterior algebras.”

**Sources:** none listed. No primary source with a working link was found.

### Defining trace as the derivative of det at I gives Jacobi's formula

**Remember:** Move the derivative to the identity, where it becomes the trace.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define the trace of a square matrix X as the derivative of det(I + tX) at t = 0. This is the first-order change of the determinant at the identity matrix. The usual definition adds the diagonal entries.

**Problem.** For a differentiable path A(t) of invertible real matrices, (det A)′ = det A · tr(A⁻¹A′).

**How the definition helps.** Factor out A(t) before differentiating the determinant (our own). The derivative of A(t)⁻¹A(t + h) at h = 0 is A(t)⁻¹A′(t). Determinant multiplicativity and the trace definition give the formula. In the permutation expansion at the identity, the linear term is the diagonal sum (our own).

**Wikipedia:** [Jacobi's formula](https://en.wikipedia.org/wiki/Jacobi%27s_formula). It says: “the differential of det, evaluated at the identity matrix, is equal to the trace.”

**Sources:** none listed. No primary source with a working link was found.

### The exponential series gives the determinant from the trace

**Remember:** Exponentiate the diagonal entries, then multiply them.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A16. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define the matrix exponential by the power series with terms Aᵏ/k! starting at k = 0. Unlike a definition by differential equations, this one computes each diagonal entry of a triangular matrix directly.

**Problem.** For a real or complex square matrix A, det(exp(A)) = exp(tr(A)), where tr(A) is the sum of the diagonal entries.

**How the definition helps.** In a complex triangular basis, each power raises the diagonal entries to that power, so the series exponentiates those entries (our own). Their product is the exponential of their sum (our own). The work goes into triangularization and showing the convergent series respects a change of basis (our own).

**nLab:** [relation between determinant and trace](https://ncatlab.org/nlab/show/relation+between+determinant+and+trace). It says: “the determinant of its exponential equals the exponential of its trace”

**Sources:** none listed. No primary source with a working link was found.

### Unit determinants detect invertibility even over rings

**Remember:** The adjugate yields an inverse only when the determinant can be divided out.

*Rules out counterexamples.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A unit is an element with a multiplicative inverse in its ring. Over a field this means nonzero, but over a ring a nonzero element need not be a unit.

**Problem.** A square matrix over a commutative ring with identity is invertible exactly when its determinant is a unit.

**How the definition helps.** A unit determinant lets us divide the adjugate by the determinant to get the inverse (our own). The adjugate is the transpose of the matrix of cofactors, the signed smaller determinants (our own). The work goes into the adjugate identity and the determinant product rule, which also shows invertibility forces a unit determinant (our own). The matrix with sole entry 2 has nonzero determinant over the integers but no integer inverse (our own).

**nLab:** [characteristic polynomial](https://ncatlab.org/nlab/show/characteristic+polynomial). It says: “Then there exists an n × n matrix Ã with entries in R, called the adjugate of A, such that AÃ = ÃA = det(A) · Iₙ.”

**Sources:** none listed. No primary source with a working link was found.

### Companion maps defined as multiplication by x have minimal polynomial p

**Remember:** A polynomial in the companion map multiplies by that polynomial.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A21. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a monic polynomial p of degree n ≥ 1, let C be multiplication by x on F\[x\]/(p), the polynomials modulo p. The companion matrix of p is the matrix of C in the basis 1, x, …, xⁿ⁻¹.

**Problem.** The minimal polynomial of the companion matrix of p is p itself.

**How the definition helps.** The map q(C) multiplies by q modulo p, so it vanishes exactly when q is zero modulo p (our own). Testing on the class of 1 gives necessity. The monic polynomial of least degree among the nonzero multiples of p is p itself.

**Wikipedia:** [Companion matrix](https://en.wikipedia.org/wiki/Companion_matrix). It says: “the minimal polynomial of C(p) are equal to p(x).”

**Sources:** none listed. No primary source with a working link was found.

### Defined by power growth, spectral radius is submultiplicative for commuting matrices

**Remember:** For commuting matrices, the growth rate of product powers is at most multiplicative.

*True by definition. Confidence: medium.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A42. arXiv math.RA, math.NA. Level 2: later undergraduate.

**Definition.** For a square complex matrix A, define its spectral radius as limₖ→∞ ‖Aᵏ‖¹/ᵏ in any induced matrix norm. Gelfand’s formula identifies this limit with the largest absolute value of an eigenvalue.

**Problem.** If two complex square matrices A and B commute, then ρ(AB) ≤ ρ(A)ρ(B).

**How the definition helps.** With the growth definition, the inequality follows from one identity and one norm bound. Because AB = BA, (AB)ᵏ = AᵏBᵏ, so ‖(AB)ᵏ‖ ≤ ‖Aᵏ‖ ‖Bᵏ‖; take kth roots and let k grow. Without commuting the bound fails: two nilpotent 2 × 2 matrices can have a product with spectral radius 1. The work goes into Gelfand's formula (rest of the argument our own).

**Paper or page:** [Gelfand's Spectral Radius Formula/Bounded Linear Operator](https://proofwiki.org/wiki/Gelfand's_Spectral_Radius_Formula/Bounded_Linear_Operator). It says: “\|σ(T)\| = lim<sub>n → ∞</sub> (‖Tⁿ‖<sub>B(X)</sub>)<sup>1/n</sup>”

**Sources:** none listed. No primary source with a working link was found.

### Defining singular values as distances to lower-rank matrices makes them Lipschitz

**Remember:** Distance to a fixed set changes by at most the distance moved.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A42, 15A60. arXiv math.NA, math.FA. Level 2: later undergraduate.

**Definition.** Define the kth singular value σₖ(A) as the distance, in operator norm, from A to the matrices of rank less than k. The operator norm of a matrix is the largest factor by which it stretches a unit vector. The usual definition takes the kth largest square root of an eigenvalue of A\*A, where A\* is the conjugate transpose.

**Problem.** For real or complex m × n matrices A and B, \|σₖ(A) − σₖ(B)\| ≤ ‖A − B‖ in operator norm whenever 1 ≤ k ≤ min(m,n).

**How the definition helps.** The triangle inequality bounds the change in distance to any fixed nonempty set by the distance between the two points (our own). Apply this to the set of matrices of rank less than k. The Eckart–Young–Mirsky theorem identifies the distance with the usual singular value.

**Paper or page:** [Generalizing the SVD of a matrix under non-standard inner product and its applications to linear ill-posed problems](https://arxiv.org/abs/2312.10403). It says: “‖A − Âₖ‖₂ = σ̂ₖ₊₁.”

**Sources:**

- [L. Mirsky, Symmetric gauge functions and unitarily invariant norms (1960)](https://doi.org/10.1093/qmath/11.1.50)

### Defining unitary maps by length puts their eigenvalues on the circle

**Remember:** A unitary map can turn an eigenvector but cannot stretch it.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Call a linear map from a finite-dimensional complex inner product space to itself unitary if it preserves length. The equivalent matrix definition says UᴴU = I, where Uᴴ is the conjugate transpose.

**Problem.** Every eigenvalue of a unitary map has absolute value 1.

**How the definition helps.** An eigenvector is stretched by the absolute value of its eigenvalue, and the definition forbids a change of length (our own). The work moves to showing that the length test and the matrix test agree (our own).

**nLab:** [unitary operator](https://ncatlab.org/nlab/show/unitary+operator). It says: “U preserves the inner product ⟨·,·⟩ on the Hilbert space.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.49 and 7.53–7.54](https://linear.axler.net/LADR4e.pdf)

### Equal lengths make normal eigenspaces reduce the operator

**Remember:** Normality makes a zero residual stay zero for the adjoint.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A complex square matrix A is normal if ‖Ax‖ = ‖Aᴴx‖ for every x. Here Aᴴ is the conjugate transpose. The usual matrix test asks whether AAᴴ = AᴴA.

**Problem.** For a normal complex matrix, each eigenspace and its orthogonal complement are mapped into themselves.

**How the definition helps.** The length test makes a normal matrix and its adjoint send exactly the same vectors to zero (our own). The matrix test shows that A − λI is also normal, where I is the identity (our own). Thus Aᴴ acts by the conjugate of λ on the λ-eigenspace of A, so A preserves the perpendicular complement (our own). Polarization proves the two normality tests agree (our own).

**Paper or page:** [Eigenspace for Normal Operator is Reducing Subspace](https://proofwiki.org/wiki/Eigenspace_for_Normal_Operator_is_Reducing_Subspace). It says: “Then ker(A − λ) is a reducing subspace for A.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.20–7.22](https://linear.axler.net/LADR4e.pdf)

### Generalized eigenspace dimensions bound ordinary eigenspace dimensions

**Remember:** The ordinary eigenspace sits inside the generalized one.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a complex square matrix A, the generalized eigenspace for λ consists of vectors killed by some positive power of A − λI. Define the algebraic multiplicity of λ as the dimension of this space. The usual definition counts its repetitions as a root of det(tI − A).

**Problem.** The geometric multiplicity of an eigenvalue, the dimension of its ordinary eigenspace, cannot exceed its algebraic multiplicity.

**How the definition helps.** Every vector killed by A − λI is killed by a positive power of A − λI (our own). The work goes into showing that the generalized eigenspace dimension equals the root multiplicity, using the Jordan form (our own).

**Wikipedia:** [Eigenvalues and eigenvectors](https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors). It says: “an eigenvalue's geometric multiplicity cannot exceed its algebraic multiplicity.”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., §8B and Theorem 9.62](https://linear.axler.net/LADR4e.pdf)

### Letting matrices act on matrices makes the Cayley–Hamilton substitution legitimate

**Remember:** Let coefficients act on the left and the variable on the right.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A15. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Fix a square matrix A over a commutative ring with identity. Define the action of a matrix polynomial ∑ CⱼXʲ on a matrix M of the same size by M ↦ ∑ CⱼMAʲ.

**Problem.** Every square matrix over a commutative ring with identity satisfies its characteristic polynomial.

**How the definition helps.** The action makes it legal to substitute A for X, although the matrix coefficients need not commute with A. Under the action, XI − A sends the identity matrix to A − A = 0 (our own). Applying both sides of adj(XI − A)·(XI − A) = χ(X)·I to the identity matrix gives χ(A) = 0 (our own). The remaining work is the adjugate identity over a commutative ring.

**Paper or page:** [Proof of Cayley-Hamilton theorem using polynomials over the algebra of module endomorphisms](https://arxiv.org/abs/2105.09285v2), [Proof of Cayley-Hamilton theorem using polynomials over the algebra of module endomorphisms](https://arxiv.org/abs/2105.09285v2). It says: “These structures provide a very short proof of the Cayley-Hamilton theorem, which may be viewed as a reformulation of the proof in Algebra by Serge Lang.”

**Sources:**

- [Alexey Muranov, Proof of Cayley-Hamilton theorem using polynomials over the algebra of module endomorphisms, Linear Algebra and its Applications 645 (2022), 165–169](https://arxiv.org/abs/2105.09285v2)

### Minimal polynomials as ideal generators give least common multiples for direct sums

**Remember:** A polynomial kills a direct sum exactly when it kills both parts.

*True by definition. Confidence: medium.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A21. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The polynomials p with p(A) = 0 form an ideal in F\[t\], and each nonzero ideal there has one monic generator. Define the minimal polynomial of A as that generator. The usual definition takes the monic polynomial of least degree that kills A.

**Problem.** Let A act on V and B act on W, both finite-dimensional. The minimal polynomial of A ⊕ B on V ⊕ W is the least common multiple of the minimal polynomials of A and B.

**How the definition helps.** The annihilator ideal of A ⊕ B is the intersection of the annihilator ideals of A and B. Indeed, polynomial evaluation acts separately on the two summands. Their monic least common multiple generates the intersection (our own).

**Wikipedia:** [Minimal polynomial (linear algebra)](https://en.wikipedia.org/wiki/Minimal_polynomial_%28linear_algebra%29). It says: “any ideal is generated by a single polynomial, which is unique up to a unit in F\[t\].”

**Sources:** none listed. No primary source with a working link was found.

### Nonnegative eigenvalues select one matrix square root

**Remember:** Choose the nonnegative root on every eigenspace.

*Rules out counterexamples.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A real symmetric matrix is positive semidefinite if all its eigenvalues are nonnegative. A positive semidefinite square root of A is a real symmetric positive semidefinite matrix B with B² = A.

**Problem.** Every real symmetric positive semidefinite matrix has exactly one real symmetric positive semidefinite square root.

**How the definition helps.** Nonnegativity forces the same scalar square root on each eigenspace of A (our own). The spectral theorem constructs a root by replacing every eigenvalue with its nonnegative square root (our own). Any candidate commutes with A, and diagonalizing its restriction to each eigenspace forces exactly those values (our own). Without the sign condition, \[1\] and \[−1\] both square to \[1\] (our own).

**Wikipedia:** [Square root of a matrix](https://en.wikipedia.org/wiki/Square_root_of_a_matrix). It says: “there is exactly one positive semidefinite and symmetric matrix B such that A = BB”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.39](https://linear.axler.net/LADR4e.pdf)

### Nonzero singular values count the rank

**Remember:** Count the directions that are not sent to zero.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** In orthonormal bases, a real or complex matrix has a rectangular diagonal form with nonnegative diagonal entries. These entries are its singular values. Rank is the dimension of the image.

**Problem.** The rank of A is the number of positive singular values, with repeats counted.

**How the definition helps.** The diagonal form displays one independent image direction for each positive entry (our own). A zero entry contributes none (our own). The singular value decomposition justifies counting diagonal entries instead of computing the eigenvalues of AᴴA, where Aᴴ is the conjugate transpose (our own).

**Wikipedia:** [Singular value decomposition](https://en.wikipedia.org/wiki/Singular_value_decomposition). It says: “equals the number of non-zero singular values”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.68–7.70](https://linear.axler.net/LADR4e.pdf)

### Normal eigenvalues give singular values by absolute value

**Remember:** Normal eigenvalues encode stretching in their absolute values.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A complex square matrix A is normal if it commutes with its conjugate transpose Aᴴ. Its singular values are the nonnegative square roots of the eigenvalues of AᴴA.

**Problem.** For a normal complex matrix, the singular values are the absolute values of its eigenvalues, counting repeats.

**How the definition helps.** An orthonormal eigenbasis turns the product AᴴA into a diagonal matrix whose entries are the squared absolute values of the eigenvalues (our own). The spectral theorem supplies this basis for normal A, avoiding a second eigenvalue problem for AᴴA (our own).

**Wikipedia:** [Singular value](https://en.wikipedia.org/wiki/Singular_value). It says: “its singular values are the absolute values of its eigenvalues”

**Sources:** none listed. No primary source with a working link was found.

### Singular values show the largest stretch

**Remember:** The most stretched direction is a singular vector.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Singular values are the diagonal entries of the nonnegative diagonal form of a real or complex matrix in orthonormal bases. The operator norm is the largest Euclidean length of Ax over all unit vectors x.

**Problem.** For a matrix with at least one row and one column, the largest singular value equals its operator norm.

**How the definition helps.** In diagonal coordinates, each singular value scales one coordinate, and the changes of basis preserve length (our own). The largest value bounds every stretch and attains that bound along its coordinate axis (our own). The singular value decomposition supplies these coordinates in place of maximizing over all directions (our own).

**Wikipedia:** [Singular value](https://en.wikipedia.org/wiki/Singular_value). It says: “is equal to the operator norm of T”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.82–7.88](https://linear.axler.net/LADR4e.pdf)

### Spectral projectors separate eigenvectors with different eigenvalues

**Remember:** A polynomial can keep one eigenspace and kill all the others.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Fix a finite set S of distinct eigenvalues of T and choose λ ∈ S. On the span of their eigenspaces, define the λ-projector by multiplying (T − μI)/(λ − μ) over all μ ∈ S except λ.

**Problem.** Nonzero eigenvectors for distinct eigenvalues of a linear map are linearly independent.

**How the definition helps.** The product fixes each λ-eigenvector and sends each of the other chosen eigenvectors to zero (our own). Applying it to a linear relation isolates the coefficient of the λ-eigenvector, which must vanish (our own). Defining the projector by coordinates would already require the independence this polynomial construction proves (our own).

**Paper or page:** [Eigenvectors Corresponding to Distinct Eigenvalues of Linear Operator are Linearly Independent](https://proofwiki.org/wiki/Eigenvectors_Corresponding_to_Distinct_Eigenvalues_of_Linear_Operator_are_Linearly_Independent). It says: “Then {x₁, …, xₙ} is a linearly independent set.”

**Sources:** none listed. No primary source with a working link was found.

### The adjoint swaps singular directions without changing singular values

**Remember:** Swap the two orthonormal bases and keep the same stretches.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define a matrix’s singular values as the diagonal entries of its nonnegative diagonal form in orthonormal bases. The adjoint swaps the source and target of the map.

**Problem.** A matrix and its adjoint have the same singular values, counting repeats and using the smaller matrix dimension for the list length.

**How the definition helps.** In singular value coordinates, taking the adjoint simply transposes the real diagonal matrix and swaps the two bases (our own). The singular value decomposition supplies these coordinates, avoiding separate eigenvalue calculations for the two matrices (our own).

**nLab:** [adjoint operator](https://ncatlab.org/nlab/show/adjoint+operator). It says: “given by passage to the complex conjugate transpose matrix”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.75](https://linear.axler.net/LADR4e.pdf)

### Defining projectors by the Chinese remainder theorem splits generalized eigenspaces

**Remember:** A residue projector keeps one factor and kills the others.

*True by definition.* MSC 15A20 (Diagonalization, Jordan forms), 15A18. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** Let the minimal polynomial of A be the product of the (t − λᵢ)<sup>mᵢ</sup>, with the λᵢ distinct. The Chinese remainder theorem gives polynomials eᵢ that are 1 modulo the ith factor and 0 modulo the others. Define the ith projector as Pᵢ = eᵢ(A).

**Problem.** The projectors sum to the identity, each satisfies Pᵢ² = Pᵢ, and PᵢPⱼ = 0 when i ≠ j. The range of Pᵢ is the generalized eigenspace for λᵢ, the kernel of (A − λᵢI) to the power mᵢ.

**How the definition helps.** The residue conditions give the projector identities modulo the minimal polynomial, so evaluation at A preserves them (our own). Multiplying eᵢ by the ith factor gives a multiple of the minimal polynomial, so that factor kills the range. Since eᵢ − 1 is divisible by the ith factor, Pᵢ fixes its kernel.

**Paper or page:** [Interplay between the Chinese Remainder Theorem and the Lagrange Interpolation Formula](https://arxiv.org/abs/2408.07360). It says: “Let R be a commutative, unital ring. Suppose that A₁, …, Aₙ are pairwise coprime ideals in R”

**Sources:** none listed. No primary source with a working link was found.

### Potentially diagonalizable parts give the Jordan–Chevalley decomposition over perfect fields

**Remember:** Ask for diagonalizable after a field extension, not before.

*Makes the theorem clean to state or prove.* MSC 15A20 (Diagonalization, Jordan forms). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A linear map is potentially diagonalizable if it becomes diagonalizable after extending the field. This holds when its minimal polynomial is separable, with no repeated roots in an algebraic closure. A Jordan–Chevalley decomposition writes x = s + n with s potentially diagonalizable, n nilpotent and sn = ns.

**Problem.** A finite-dimensional linear map x has a Jordan–Chevalley decomposition exactly when its minimal polynomial is a product of separable polynomials. Then the decomposition is unique, and s and n are polynomials in x. Over a perfect field, such as ℚ or a finite field, every x has one.

**How the definition helps.** Potential diagonalizability lets the eigenvalues lie in an extension while both summands act over the original field. A real quarter-turn illustrates this distinction (our own). The Jordan–Chevalley theorem gives the criterion and uniqueness, using separability in the polynomial construction.

**Wikipedia:** [Jordan–Chevalley decomposition](https://en.wikipedia.org/wiki/Jordan%E2%80%93Chevalley_decomposition). It says: “Then x admits a Jordan-Chevalley decomposition if and only if the minimal polynomial of x is a product of separable polynomials.”

**Sources:** none listed. No primary source with a working link was found.

### A common invariant flag triangularizes commuting matrices together

**Remember:** Every matrix preserves every step of the same complete chain of subspaces.

*Makes the theorem clean to state or prove.* MSC 15A21 (Canonical forms, reductions, classification), 15A18. arXiv math.RA. Level 2: later undergraduate.

**Definition.** A common full invariant flag is a chain of subspaces, one of each dimension, that every matrix preserves. This describes simultaneous triangularization without choosing coordinates.

**Problem.** Pairwise commuting complex square matrices of the same size have a common full invariant flag. A basis built along this flag makes every matrix upper triangular.

**How the definition helps.** A common flag gives a triangular basis for all the matrices by extending a basis at each step (our own). To start the flag, choose one eigenspace at a time inside the previously chosen space, which the remaining matrices preserve (our own). The work goes into finding an eigenvalue at each restriction and checking that commutation passes to the quotient (our own). Induction on the quotient by the common eigenline then supplies the rest of the flag (our own).

**Wikipedia:** [Triangular matrix](https://en.wikipedia.org/wiki/Triangular_matrix). It says: “This can be proven by first showing that commuting matrices have a common eigenvector, and then inducting on dimension as before.”

**Sources:**

- [Kenneth Hoffman and Ray Kunze, Linear Algebra, 2nd ed., §6.5](https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf)

### A full invariant flag makes triangularization an induction

**Remember:** An invariant flag has one preserved subspace of each dimension, all nested.

*Makes the theorem clean to state or prove.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A full invariant flag is a chain of subspaces, one of each dimension, that the map sends into themselves. Use the flag to describe triangularizability instead of looking for a change-of-basis matrix.

**Problem.** A square matrix has a full invariant flag over its field exactly when its characteristic polynomial splits into linear factors there. In a basis built along this flag, the matrix is upper triangular.

**How the definition helps.** A triangular basis is exactly a basis whose successive initial spans form a full invariant flag (our own). Take an eigenline and apply induction to the induced map on the quotient, whose characteristic polynomial has one fewer factor (our own). Lift the flag by taking inverse images under the quotient map (our own). The work is to prove the characteristic polynomial factors across the invariant line and the quotient (our own).

**Wikipedia:** [Triangular matrix](https://en.wikipedia.org/wiki/Triangular_matrix). It says: “by taking the quotient space by the eigenvector and inducting to show that A stabilizes a flag”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., §5C](https://linear.axler.net/LADR4e.pdf)

### A split square-free minimal polynomial forces diagonalizability

**Remember:** Diagonalizability requires every cyclic summand to have a linear elementary divisor.

*Rules out counterexamples.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a linear operator T on a finite-dimensional space over a field F, let x act as T. The elementary divisors are the powers of irreducible polynomials defining the cyclic summands of this F\[x\]-module.

**Problem.** The operator is diagonalizable exactly when every elementary divisor is linear. Equivalently, its minimal polynomial is a product of distinct linear factors.

**How the definition helps.** Linear elementary divisors exclude both repeated powers and irreducible factors of higher degree. Our own check observes that each quotient by x − λ has dimension one and supplies an eigenvector. Conversely, an eigenbasis gives precisely these summands, and the minimal polynomial is the least common multiple of their defining powers. On F\[x\]/(x²), multiplication by x is nonzero and squares to zero, so it cannot be diagonal.

**Wikipedia:** [Jordan normal form](https://en.wikipedia.org/wiki/Jordan_normal_form). It says: “the Jordan normal form is concerned with representing M in terms of blocks associated to the elementary divisors.”

**Sources:** none listed. No primary source with a working link was found.

### Distinct irreducible factors make semisimplicity pass to restrictions and quotients

**Remember:** A divisor cannot pick up a repeated factor.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The minimal polynomial of a finite-dimensional operator is the polynomial of least degree with leading coefficient one that vanishes at the operator. Call the operator semisimple if this polynomial has no repeated irreducible factor. An irreducible factor cannot split into two factors of positive degree over the field.

**Problem.** A semisimple operator remains semisimple on each invariant subspace and on the quotient by that subspace.

**How the definition helps.** The original minimal polynomial vanishes on the restriction and the quotient, so both minimal polynomials divide it (our own). Neither divisor can acquire a repeated irreducible factor (our own). The equivalent definition requires every invariant subspace to have an invariant complement. Proving equivalence uses the decomposition into kernels associated with the irreducible factors (our own).

**Wikipedia:** [Semisimple operator](https://en.wikipedia.org/wiki/Semisimple_operator). It says: “a linear operator is semisimple if its minimal polynomial is a product of distinct irreducible polynomials.”

**Sources:**

- [Kenneth Hoffman and Ray Kunze, Linear Algebra, 2nd ed., §7.5](https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf)

### Divisibility and no trivial factors make invariant factors unique

**Remember:** Each factor divides the next, and no factor is 1.

*Rules out counterexamples.* MSC 15A21 (Canonical forms, reductions, classification), 13C05. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Let A act as X on a finite-dimensional vector space over F. Write its F\[X\]-module as a direct sum of cyclic modules F\[X\]/(fᵢ), with each fᵢ monic and nonconstant. The invariant factors are the fᵢ in an ordering where each divides the next.

**Problem.** Two square matrices over a field are similar if and only if they have the same invariant factors. Equivalently, they have the same rational canonical form, the block matrix of companion matrices of the invariant factors.

**How the definition helps.** The module structure theorem gives a unique ordered list of factors, which determines the module up to isomorphism. A module isomorphism is exactly a change of basis intertwining the two matrices (our own). Without divisibility, F\[X\]/(X(X−1)) could also give the list X, X−1 (our own). Allowing 1 would add arbitrary zero summands.

**Wikipedia:** [Frobenius normal form](https://en.wikipedia.org/wiki/Frobenius_normal_form). It says: “in the list of associated minimal polynomials each one must divide the next (and the constant polynomial 1 is forbidden to exclude trivial cyclic subspaces).”

**Sources:** none listed. No primary source with a working link was found.

### Invariant factors detect a cyclic vector

**Remember:** The largest factor equals their product only for a single block.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a linear operator T, the invariant factors are the nonconstant monic polynomials defining its cyclic F\[x\]-module summands. Order them so that each divides the next.

**Problem.** A linear operator on a nonzero finite-dimensional space has a cyclic vector exactly when its minimal and characteristic polynomials agree. A cyclic vector and its iterates under the operator span the space.

**How the definition helps.** The invariant factors express both polynomials in one list, avoiding a separate search for a spanning vector. The structure theorem gives the last factor as the minimal polynomial, and the companion blocks give their product as the characteristic polynomial. Since each factor has positive degree, these agree exactly when the list has one entry. Our own check uses the class of 1 as a cyclic vector in that single block.

**Wikipedia:** [Frobenius normal form](https://en.wikipedia.org/wiki/Frobenius_normal_form). It says: “When the minimal polynomial is identical to the characteristic polynomial (the case k = 1), the Frobenius normal form is the companion matrix of the characteristic polynomial.”

**Sources:** none listed. No primary source with a working link was found.

### Invariant factors give both matrix polynomials without determinant expansion

**Remember:** Multiply the factors for the characteristic polynomial and keep the last for the minimal polynomial.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification), 15A15. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Split the space into nonzero invariant subspaces, each spanned by the iterates of one vector. Choose a decomposition whose minimal polynomials form a list in which each divides the next. These polynomials are the invariant factors.

**Problem.** For a nonempty matrix, the characteristic polynomial is the product of the invariant factors. The minimal polynomial is the last invariant factor.

**How the definition helps.** The basis of iterates makes each block’s characteristic polynomial equal its minimal polynomial (our own). The characteristic polynomial of a block diagonal matrix is the product of those block polynomials (our own). A polynomial kills the matrix exactly when each block polynomial divides it, which makes the last factor the minimal polynomial (our own). The cyclic decomposition theorem supplies the ordered blocks and proves their factors unique (our own).

**Wikipedia:** [Frobenius normal form](https://en.wikipedia.org/wiki/Frobenius_normal_form). It says: “the product of the invariant factors gives the characteristic polynomial.”

**Sources:**

- [Kenneth Hoffman and Ray Kunze, Linear Algebra, 2nd ed., §7.2](https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf)

### Jordan chains make block sizes readable from kernel dimensions

**Remember:** Each chain adds one new kernel vector at each step until it ends.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification), 15A18. arXiv math.RA. Level 2: later undergraduate.

**Definition.** A Jordan chain for λ is a nonempty sequence of nonzero vectors. The map A − λI sends the first vector to zero and each later vector to its predecessor. In a Jordan basis each chain gives one block of its length.

**Problem.** When the characteristic polynomial splits, the increase in kernel dimension from power j − 1 to j counts the λ-blocks of size at least j. These counts for all eigenvalues and all positive j determine the Jordan form up to block order.

**How the definition helps.** Each chain contributes one new kernel dimension per power until the power reaches its length (our own). Blocks for other eigenvalues contribute nothing because the shifted map is invertible there (our own). Subtracting consecutive counts gives the number of blocks of each exact size (our own). The Jordan basis theorem supplies the chains (our own).

**Wikipedia:** [Jordan normal form](https://en.wikipedia.org/wiki/Jordan_normal_form). It says: “The number of Jordan blocks corresponding to λᵢ of size at least j is dim ker(A − λᵢI)ʲ − dim ker(A − λᵢI)ʲ⁻¹.”

**Sources:** none listed. No primary source with a working link was found.

### Nilpotent powers make each Jordan block exponential a finite sum

**Remember:** The scalar part gives a scalar exponential and the shift gives a finite sum.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification), 15A16. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a real or complex square matrix A, define exp(A) by the series with terms Aᵏ/k! starting at k = 0. Write a Jordan block as λI + N, where N sends each basis vector to its predecessor and the first to zero.

**Problem.** The exponential of a Jordan block of size m at λ is exp(λ) times the first m terms of the exponential series for N.

**How the definition helps.** The chain shift satisfies Nᵐ = 0, so only the first m terms of its exponential can survive (our own). The scalar matrix λI commutes with N, allowing their exponentials to multiply (our own). This series calculation replaces solving a chain of differential equations and uses the product rule for commuting matrix exponentials (our own).

**Wikipedia:** [Matrix exponential](https://en.wikipedia.org/wiki/Matrix_exponential). It says: “the series terminates after a finite number of terms”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial scalar action gives rational canonical form

**Remember:** Decompose the polynomial module, then read off its companion blocks.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Let T be a linear operator on a finite-dimensional space over a field F. Make the space an F\[x\]-module by letting x act as T. For monic f of degree d, the companion matrix represents multiplication by x on F\[x\]/(f) in the basis 1, x, …, xᵈ⁻¹.

**Problem.** Every linear operator on a finite-dimensional space over a field has a rational canonical form over that field. Its blocks are companions of nonconstant monic polynomials, each dividing the next.

**How the definition helps.** The polynomial action turns the search for a matrix basis into decomposition of a module. The structure theorem over F\[x\] gives cyclic quotients with successive defining polynomials dividing one another. Our own dimension check excludes a free summand because F\[x\] has infinite dimension over F. The power bases of the quotients then give the companion blocks.

**Wikipedia:** [Frobenius normal form](https://en.wikipedia.org/wiki/Frobenius_normal_form). It says: “Apply the structure theorem for finitely generated modules over a principal ideal domain to V, viewing it as an F\[X\]-module.”

**Sources:** none listed. No primary source with a working link was found.

### Preserved eigenspaces give commuting diagonalizable matrices a common basis

**Remember:** A commuting matrix acts inside each eigenspace, not across them.

*Rules out counterexamples.* MSC 15A21 (Canonical forms, reductions, classification), 15A18. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Matrices commute in pairs when AB = BA for each pair A and B. An eigenbasis consists of eigenvectors, and a common eigenbasis works for every matrix in the family. A matrix is diagonalizable over its field when it has an eigenbasis over that field.

**Problem.** A finite family of diagonalizable matrices of the same size over one field has a common eigenbasis exactly when its matrices commute in pairs.

**How the definition helps.** Commutation keeps each eigenspace of one matrix invariant under all the others (our own). Each restriction stays diagonalizable because its minimal polynomial divides the original one, so successive eigenspace decompositions give a common eigenbasis (our own). Conversely, diagonal matrices commute (our own). The projections (x,y) ↦ (x,0) and (x,y) ↦ (x + y,0) are diagonalizable but fail to commute (our own).

**Wikipedia:** [Diagonalizable matrix](https://en.wikipedia.org/wiki/Diagonalizable_matrix). It says: “A set of diagonalizable matrices commutes if and only if the set is simultaneously diagonalizable.”

**Sources:**

- [Kenneth Hoffman and Ray Kunze, Linear Algebra, 2nd ed., §6.5](https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf)

### Real Jordan blocks combine conjugate chains into one real block

**Remember:** One real block records both members of a conjugate pair.

*Makes the theorem clean to state or prove.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a nonreal eigenvalue, form a real Jordan block by replacing each entry with its matrix of multiplication on the complex plane. For a + bi, this matrix has rows (a, −b) and (b, a). For a real eigenvalue, keep the ordinary Jordan block.

**Problem.** Every real square matrix has a real basis in which it is a direct sum of these real Jordan blocks.

**How the definition helps.** Each nonreal chain and its conjugate give a real basis from the real parts and the negatives of the imaginary parts (our own). In that basis the action is exactly the real block action (our own). The work goes into complex Jordan form and choosing real chains on the real-eigenvalue spaces (our own).

**Wikipedia:** [Jordan normal form](https://en.wikipedia.org/wiki/Jordan_normal_form). It says: “For a real matrix the nonreal eigenvectors and generalized eigenvectors can always be chosen to form complex conjugate pairs.”

**Sources:** none listed. No primary source with a working link was found.

### Smith normal form separates the cyclic factors

**Remember:** One diagonal relation per generator gives one cyclic factor.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification), 20K25. arXiv math.GR. Level 2: later undergraduate.

**Definition.** An integer relation matrix records one generator per row and the coefficients of one defining relation per column. Its Smith normal form is a diagonal matrix obtained by invertible integer row and column operations. Its nonzero diagonal entries are positive, precede all zeros, and each divides the next.

**Problem.** Every finitely generated abelian group is a finite direct sum of infinite cyclic groups and finite cyclic groups. The finite orders can be chosen so that each divides the next.

**How the definition helps.** Each diagonal relation restricts just one generator, so the group splits into cyclic factors (our own explanation). A positive diagonal entry gives the order of its generator, and an unrestricted generator has infinite order. A general relation matrix mixes generators. The work lies in finding a finite presentation and applying the Smith theorem to change its two integer bases.

**Paper or page:** [Theorem 7.1. (Smith normal form)](https://venhance.github.io/napkin/Napkin.pdf). It says: “Then we can select a pair of new bases for M and N such that T has only diagonal entries”

**Sources:**

- [H. J. S. Smith, On systems of linear indeterminate equations and congruences (1861)](https://doi.org/10.1098/rstl.1861.0016)

### Stable kernels and images split a map at zero

**Remember:** Once both spaces stop changing, one part dies and the other stays invertible.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a finite-dimensional endomorphism T, choose N such that ker(Tⁿ) and im(Tⁿ) are constant for all n ≥ N. The stable kernel is ker(Tᴺ), and the stable image is im(Tᴺ).

**Problem.** Every finite-dimensional linear operator splits into a nilpotent restriction on its stable kernel and an invertible restriction on its stable image.

**How the definition helps.** The operator maps its stable image onto itself, so finite dimension makes this restriction invertible (our own). Every vector in the stable kernel dies under one fixed power, so the two spaces intersect only at zero (our own). Finite dimension makes both chains stabilize, and rank plus nullity gives the full dimension for their sum (our own).

**Wikipedia:** [Fitting lemma](https://en.wikipedia.org/wiki/Fitting_lemma). It says: “To prove Fitting's lemma, we take an endomorphism f of M and consider the following two chains of submodules:”

**Sources:** none listed. No primary source with a working link was found.

### The minimal polynomial as ideal generator divides every annihilating polynomial

**Remember:** A generator divides every element of its ideal.

*True by definition. Confidence: medium.* MSC 15A21 (Canonical forms, reductions, classification), 15A18. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a linear map T on a finite-dimensional vector space over a field, the polynomials p with p(T) = 0 form an ideal. The minimal polynomial is its monic generator, so the ideal consists of its multiples. An alternative definition takes the monic polynomial of least degree with p(T) = 0.

**Problem.** If p(T) = 0, the minimal polynomial of T divides p. In particular, it divides the characteristic polynomial.

**How the definition helps.** Every annihilating polynomial is a multiple of the monic generator by definition. Cayley–Hamilton says the characteristic polynomial belongs to that same ideal. Polynomial division identifies its monic generator with the least-degree monic annihilator (our own).

**Wikipedia:** [Minimal polynomial (linear algebra)](https://en.wikipedia.org/wiki/Minimal_polynomial_%28linear_algebra%29). It says: “The minimal polynomial is thus defined to be the monic polynomial that generates I<sub>T</sub>.”

**Sources:** none listed. No primary source with a working link was found.

### The rational canonical form makes similarity independent of the field

**Remember:** No factoring needed, so no field extension can change it.

*Makes the theorem clean to state or prove.* MSC 15A21 (Canonical forms, reductions, classification), 13C05. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The rational canonical form of A over F is the block diagonal matrix of companion blocks for its invariant factors in divisibility order. For monic f of degree d, the companion block represents multiplication by X on F\[X\]/(f) in the basis 1, X, …, Xᵈ⁻¹.

**Problem.** Let F be a subfield of L, and let A and B have entries in F. If A and B are similar over L, then they are already similar over F.

**How the definition helps.** A basis giving the form over F remains a basis over L. The same monic block polynomials still divide one another, so uniqueness of rational canonical form identifies this as the form over L. Similarity over L therefore gives identical forms and hence similarity over F (our own).

**Wikipedia:** [Frobenius normal form](https://en.wikipedia.org/wiki/Frobenius_normal_form). It says: “The Frobenius normal form does not reflect any form of factorization of the characteristic polynomial, even if it does exist over the ground field F. This implies that it is invariant when F is replaced by a different field”

**Sources:** none listed. No primary source with a working link was found.

### Preserving initial spans gives Schur’s unitary triangularization

**Remember:** Gram–Schmidt changes the basis without changing its initial spans.

*True by definition.* MSC 15A23 (Factorization of matrices). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Read an upper triangular matrix as preserving the span of the first k basis vectors for every k. This description replaces the test of looking for zeros below the diagonal.

**Problem.** Every complex square matrix is upper triangular in some orthonormal basis.

**How the definition helps.** The span definition shows that Gram–Schmidt keeps triangularity when it makes the original basis orthonormal (our own). The work moves to ordinary triangularization over the complex numbers and to the span property of Gram–Schmidt (our own).

**Wikipedia:** [Schur decomposition](https://en.wikipedia.org/wiki/Schur_decomposition). It says: “unitarily similar to an upper triangular matrix”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 6.32 and 6.37–6.38](https://linear.axler.net/LADR4e.pdf)

### Strict leading minor signs make the triangular positivity test work

**Remember:** Each pivot is the ratio of two consecutive leading determinants.

*Rules out counterexamples.* MSC 15A23 (Factorization of matrices). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a real symmetric matrix A, the triangular test for positive definiteness asks for A = LDLᵀ. Here L is lower triangular with ones on its diagonal, and D is diagonal with positive entries.

**Problem.** A real symmetric matrix is positive definite exactly when every leading principal minor is positive. These minors are the determinants of its upper left square blocks.

**How the definition helps.** In triangular form each leading determinant is the product of the corresponding initial entries of D (our own). Their consecutive ratios therefore give those entries, starting with the empty determinant 1 (our own). Elimination supplies the factorization when every leading determinant is nonzero, and xᵀAx = (Lᵀx)ᵀD(Lᵀx) gives the quadratic test (our own). Weak inequalities fail for the diagonal matrix with entries 0 and −1, whose leading determinants both vanish (our own).

**Wikipedia:** [Sylvester's criterion](https://en.wikipedia.org/wiki/Sylvester%27s_criterion). It says: “the leading principal minors are positive: det Mₖ &gt; 0”

**Sources:**

- [George T. Gilbert, Positive Definite Matrices and Sylvester’s Criterion (1991)](https://doi.org/10.1080/00029890.1991.11995702)

### Compression makes eigenvalue interlacing a restriction of subspaces

**Remember:** Compression shrinks the collection of subspaces used to test eigenvalues.

*True by definition.* MSC 15A42 (Inequalities involving eigenvalues and eigenvectors), 15A18. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The compression of a real symmetric matrix A to W sends x in W to the orthogonal projection of Ax onto W. Equivalently, it is the symmetric operator on W with quadratic form x ↦ xᵀAx.

**Problem.** List the eigenvalues of A and its compression in increasing order, counting repeats. If their sizes are n and m, compressed eigenvalue k lies between original eigenvalues k and k + n − m.

**How the definition helps.** The quadratic form description lets the compression reuse exactly the same test values on W (our own). Minimizing over fewer k-dimensional subspaces gives the lower bound (our own). Maximizing over fewer subspaces of dimension m − k + 1 gives the upper bound (our own). The min–max theorem identifies these two bounds with the indicated eigenvalues of A (our own).

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “When n − m = 1, we have αⱼ ≤ βⱼ ≤ αⱼ₊₁”

**Sources:**

- [Suk-Geun Hwang, Cauchy’s Interlace Theorem for Eigenvalues of Hermitian Matrices (2004)](https://doi.org/10.1080/00029890.2004.11920060)

### Variational eigenvalues make Hermitian eigenvalues increase under positive semidefinite perturbations

**Remember:** Pointwise order survives a minimum and then a maximum.

*True by definition.* MSC 15A42 (Inequalities involving eigenvalues and eigenvectors), 15B57. arXiv math.RA, math.SP. Level 2: later undergraduate.

**Definition.** For an n × n Hermitian matrix A, define λₖ(A) as a max-min. Take the maximum over k-dimensional subspaces U of the minimum of ⟨Ax, x⟩ over unit vectors x in U. The usual definition lists the eigenvalues, the roots of the characteristic polynomial, in decreasing order.

**Problem.** Let A and B be Hermitian matrices of the same size, with B − A positive semidefinite. Then λₖ(B) ≥ λₖ(A) for every k.

**How the definition helps.** Positive semidefiniteness gives ⟨Bx,x⟩ ≥ ⟨Ax,x⟩ for every unit vector x. On each k-dimensional subspace, taking minima over its unit vectors preserves this inequality. Taking maxima over those subspaces preserves it again (application our own). The Courant–Fischer theorem identifies each result with the kth largest eigenvalue.

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “a result that gives a variational characterization of eigenvalues of compact Hermitian operators on Hilbert spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Perpendicular heights give Hadamard’s determinant bound

**Remember:** Each perpendicular height is at most the full column length.

*True by definition.* MSC 15A45 (Miscellaneous inequalities involving matrices), 26D15. arXiv math.CA. Level 2: later undergraduate.

**Definition.** The columns of a real square matrix form the edges of a solid called a parallelepiped. Define the absolute determinant as its volume. Compute the volume by multiplying each column’s perpendicular distance from the space spanned by earlier columns, starting with the first column’s length.

**Problem.** The absolute determinant is at most the product of the column lengths. If no column is zero, equality holds exactly when the columns are pairwise perpendicular.

**How the definition helps.** The Pythagorean theorem bounds each perpendicular height by its column’s length (our own). Equality for a nonzero column requires it to be perpendicular to all preceding columns (our own). The work goes into matching the volume definition with the alternating-sum formula, for example by orthogonalizing the columns (our own).

**Paper or page:** [Exterior powers and pointwise creation operators](https://arxiv.org/abs/2004.11993). It says: “\|det(A)\| ≤ ∏ⱼ₌₁ⁿ (∑ᵢ₌₁ⁿ \|aᵢⱼ\|²)¹⁄²”

**Sources:** none listed. No primary source with a working link was found.

### Alternating forms have even rank over every field

**Remember:** An alternating form pairs every vector with itself to give zero.

*Rules out counterexamples.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A bilinear form b is alternating if b(x,x) = 0 for every x. Skew symmetry only asks that b(x,y) = −b(y,x).

**Problem.** Every alternating bilinear form on a finite-dimensional vector space has even rank.

**How the definition helps.** The zero diagonal forces any pair with b(x,y) ≠ 0 to span a plane of rank two (our own). The work moves to splitting off that plane by its orthogonal complement and applying induction (our own). In the field with two elements, the skew-symmetric matrix \[1\] instead has rank one (our own).

**nLab:** [bilinear form](https://ncatlab.org/nlab/show/bilinear+form). It says: “It is called alternating if ⟨x,x⟩ = 0 for all x ∈ V.”

**Sources:** none listed. No primary source with a working link was found.

### Complex polarization detects self-adjointness from diagonal values

**Remember:** Over the complex numbers, the diagonal remembers every pair.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a complex square matrix A, its quadratic form is q(x) = xᴴAx, where ᴴ means conjugate transpose. Polarization expresses the full pairing xᴴAy in terms of q. A is self-adjoint if A = Aᴴ.

**Problem.** A complex matrix is self-adjoint exactly when xᴴAx is real for every x.

**How the definition helps.** The diagonal pairing of Aᴴ is the complex conjugate of the diagonal pairing of A (our own). If the values are real, the two diagonal pairings agree, so polarization gives A = Aᴴ (our own). The work moves to the polarization identity, which uses the diagonal at x ± y and x ± iy (our own).

**Paper or page:** [Operator is Hermitian iff Numerical Range is Real](https://proofwiki.org/wiki/Operator_is_Hermitian_iff_Numerical_Range_is_Real). It says: “∀ h ∈ ℋ: ⟨Ah,h⟩ℋ ∈ ℝ”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.13–7.14](https://linear.axler.net/LADR4e.pdf)

### Defining inertia indices as maximal definite dimensions proves Sylvester's law of inertia

**Remember:** Coordinate changes carry definite subspaces to definite subspaces of the same dimension.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a real quadratic form q, define the positive index as the largest dimension of a subspace on which q is positive definite. Define the negative index the same way for −q. The usual definition counts the positive and negative entries after q is diagonalized.

**Problem.** In every basis that diagonalizes q, the numbers of positive and of negative diagonal entries are the same. This is Sylvester's law of inertia.

**How the definition helps.** The largest dimension of a positive definite subspace is independent of coordinates. In diagonal coordinates, the p positive directions span such a subspace. Every larger subspace meets the span of the remaining directions nontrivially, where q ≤ 0. Applying the same argument to −q gives the negative count (our own).

**Wikipedia:** [Sylvester's law of inertia](https://en.wikipedia.org/wiki/Sylvester%27s_law_of_inertia). It says: “These dimensions are the positive and negative indices of inertia of q.”

**Sources:** none listed. No primary source with a working link was found.

### Nondegeneracy gives the dimension of an orthogonal complement

**Remember:** A nondegenerate form represents every linear functional exactly once.

*Rules out counterexamples.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A symmetric bilinear form b on V is nondegenerate if only the zero vector pairs to zero with every vector. For a subspace W, its orthogonal complement W⊥ consists of all v satisfying b(v,w) = 0 for every w in W.

**Problem.** For a nondegenerate symmetric bilinear form on a finite-dimensional space V, the dimension of W⊥ is the dimension of V minus the dimension of W.

**How the definition helps.** The form identifies V with its space of linear functionals, so W⊥ corresponds to functionals vanishing on W (our own). The work moves to the fact that a functional on W extends to V, which follows by extending a basis (our own). For the pairing x₁y₁ on a plane, the second coordinate axis has the whole plane as its complement (our own).

**nLab:** [bilinear form](https://ncatlab.org/nlab/show/bilinear+form). It says: “It is called nondegenerate if the mate V → V∗ = hom(V, k) is injective”

**Sources:** none listed. No primary source with a working link was found.

### Polarization turns length preservation into inner product preservation

**Remember:** Knowing the lengths of the sum and difference recovers the inner product.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** In a real inner product space, the polarization formula recovers ⟨x,y⟩ as (‖x + y‖² − ‖x − y‖²)/4. A linear isometry is a linear map that preserves lengths.

**Problem.** A linear isometry between real inner product spaces preserves all inner products.

**How the definition helps.** The polarization formula expresses an inner product using only two lengths that the map preserves (our own). The work moves to deriving that formula by expanding the two squared lengths (our own).

**Paper or page:** [Polarization Identity/Real Vector Space](https://proofwiki.org/wiki/Polarization_Identity/Real_Vector_Space). It says: “4⟨x,y⟩ = ‖x + y‖² − ‖x − y‖²”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 7.49](https://linear.axler.net/LADR4e.pdf)

### Positive definiteness makes every subspace split off orthogonally

**Remember:** No nonzero vector can belong to both halves of an orthogonal split.

*Rules out counterexamples.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Use a positive definite inner product, so each nonzero vector x has ⟨x,x⟩ &gt; 0. The orthogonal complement W⊥ consists of vectors perpendicular to every vector in W.

**Problem.** Let W be a subspace of a finite-dimensional real inner product space. Each vector has a unique expression w + z with w ∈ W and z ∈ W⊥.

**How the definition helps.** Strict positivity forces the two subspaces to meet only at zero (our own). The dimension formula for orthogonal complements then makes their sum the whole space (our own). For the indefinite pairing x₁y₁ − x₂y₂, the line spanned by (1,1) is its own complement (our own).

**nLab:** [inner product space](https://ncatlab.org/nlab/show/inner+product+space). It says: “if ‖x‖² &gt; 0 whenever x ≠ 0”

**Sources:**

- [Sheldon Axler, Linear Algebra Done Right, 4th ed., 6.46–6.52](https://linear.axler.net/LADR4e.pdf)

### Pulling back both inputs gives matrix congruence

**Remember:** A basis change must enter on both sides of the form.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A bilinear form takes two vectors and returns a scalar, linearly in each vector. Its matrix A in a basis is the unique matrix giving the value xᵀAy from the coordinate columns x and y.

**Problem.** If the columns of S are the new basis vectors in old coordinates, the new matrix of the form is SᵀAS.

**How the definition helps.** The coordinate definition changes both inputs at once, giving (Sx)ᵀA(Sy) = xᵀ(SᵀAS)y (our own). Expanding in the basis proves that this description agrees with filling the matrix one pair of basis vectors at a time (our own).

**Paper or page:** [Matrix of Bilinear Form Under Change of Basis](https://proofwiki.org/wiki/Matrix_of_Bilinear_Form_Under_Change_of_Basis). It says: “Then its matrix relative to 𝓑 equals:
M₍f,𝓑₎ = M₍𝓐,𝓑₎ᵀ M₍f,𝓐₎ M₍𝓐,𝓑₎”

**Sources:** none listed. No primary source with a working link was found.

### Self-adjoint projections are exactly orthogonal projections

**Remember:** A projection is orthogonal when it can switch sides in the inner product.

*True by definition. Confidence: medium.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A projection is a linear map P with P² = P. It is orthogonal if every output is perpendicular to every vector it sends to zero. It is self-adjoint if ⟨Px,y⟩ = ⟨x,Py⟩ for all x and y.

**Problem.** A projection on a finite-dimensional inner product space is orthogonal exactly when it is self-adjoint.

**How the definition helps.** The adjoint identity makes every vector in the image perpendicular to every vector sent to zero (our own). Conversely, the perpendicular splitting makes ⟨Px,y⟩ and ⟨x,Py⟩ both equal ⟨Px,Py⟩ (our own). The work moves to the direct sum of the image and kernel for an arbitrary projection (our own).

**nLab:** [orthogonal projection](https://ncatlab.org/nlab/show/orthogonal+projection). It says: “An orthogonal projection is a projection operator onto an orthogonal linear subspace in an inner product space.”

**Sources:** none listed. No primary source with a working link was found.

### The quadratic test detects positive eigenvalues

**Remember:** Test the quadratic form along each eigenvector.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products), 15A18. arXiv math.RA. Level 2: later undergraduate.

**Definition.** A real symmetric matrix A is positive definite when xᵀAx &gt; 0 for every nonzero x. This quadratic test replaces checking leading determinants.

**Problem.** A real symmetric matrix is positive definite exactly when every eigenvalue is positive.

**How the definition helps.** Testing an eigenvector makes the quadratic form its eigenvalue times its squared length (our own). Conversely, an orthonormal eigenbasis writes the form as a sum of squares weighted by eigenvalues (our own). The work moves to the real spectral theorem (our own).

**Paper or page:** [Real Symmetric Positive Definite Matrix has Positive Eigenvalues](https://proofwiki.org/wiki/Real_Symmetric_Positive_Definite_Matrix_has_Positive_Eigenvalues). It says: “Then λ is real with λ &gt; 0.”

**Sources:** none listed. No primary source with a working link was found.

### The quadratic test keeps inverses positive definite

**Remember:** Test the inverse by feeding its output back into the original form.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a real symmetric matrix A, define positive definite by xᵀAx &gt; 0 for every nonzero x. This replaces tests on eigenvalues or determinants.

**Problem.** A real symmetric positive definite matrix is invertible, and its inverse is positive definite.

**How the definition helps.** The quadratic test for the inverse becomes the original test at y = A⁻¹x (our own). First, positivity rules out any nonzero vector in the kernel, so A is invertible (our own). Its inverse is symmetric, and for nonzero x we have xᵀA⁻¹x = yᵀAy &gt; 0 (our own). This substitution avoids finding the eigenvalues of the inverse (our own).

**Wikipedia:** [Definite matrix](https://en.wikipedia.org/wiki/Definite_matrix). It says: “Every positive definite matrix is invertible and its inverse is also positive definite.”

**Sources:** none listed. No primary source with a working link was found.

### A basis of pairs makes tensor dimensions multiply

**Remember:** One basis vector per pair makes the dimensions multiply.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Choose bases for V and W. Model their tensor product by scalar functions on basis pairs that vanish except at finitely many pairs. The tensor of two basis vectors takes value one at their pair and zero elsewhere.

**Problem.** If V and W have dimensions m and n, then V ⊗ W has dimension mn. Its basis consists of the tensors of all pairs of basis vectors.

**How the definition helps.** The function equal to one at a single pair and zero elsewhere gives one basis vector for that pair (our own). The work moves to proving that bilinear maps extend uniquely from this coordinate construction (our own). This proof uses the unique extension of any values on pairs of basis vectors to a bilinear map (our own).

**Wikipedia:** [Tensor product](https://en.wikipedia.org/wiki/Tensor_product). It says: “is the product of the dimensions of V and W.”

**Paper or page:** [Tensor Product of Free Modules is Free](https://proofwiki.org/wiki/Tensor_Product_of_Free_Modules_is_Free). It says: “is a free A-module.”

**Sources:**

- [Sergei Winitzki, Linear Algebra via Exterior Products, version 1.3 (2020), §1.7.3](https://raw.githubusercontent.com/winitzki/linear-algebra-book/master/linalg.pdf)

### Bilinearity lets tensor products distribute over direct sums

**Remember:** A bilinear map out of a sum splits into two bilinear maps.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A tensor product V ⊗ W comes with a map (v,w) ↦ v ⊗ w, linear in each input. Every map linear in each input extends uniquely to a linear map from this tensor product.

**Problem.** The tensor product (U ⊕ V) ⊗ W is naturally isomorphic to (U ⊗ W) ⊕ (V ⊗ W).

**How the definition helps.** A bilinear map on a direct sum splits into its two restrictions (our own). Conversely, adding any two such maps gives a bilinear map on the sum (our own). The tensor extension rule gives the displayed isomorphism without constructing an inverse on formal sums (our own).

**Paper or page:** [Lemma 10.12.3.](https://stacks.math.columbia.edu/tag/00CY). It says: “induce unique isomorphisms”

**Sources:**

- [Sergei Winitzki, Linear Algebra via Exterior Products, version 1.3 (2020), §1.7.5](https://raw.githubusercontent.com/winitzki/linear-algebra-book/master/linalg.pdf)

### Concatenation lets linear maps extend to algebra maps

**Remember:** Send each factor to its image, then multiply in order.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define the tensor algebra as the direct sum of all tensor powers of V, starting with the scalar field in degree zero. Multiply tensors by concatenating their ordered lists of factors.

**Problem.** Every linear map from V to an associative algebra with identity extends uniquely to an identity-preserving algebra map from the tensor algebra. Both algebras use the same scalar field.

**How the definition helps.** Concatenation lets the extension send each tensor of vectors to the product of their images (our own). The tensor product theorem turns that multilinear product into a linear map in each degree (our own). Any extension must take these values, because products of vectors span each degree (our own).

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “This monoid object is called the tensor algebra of V.”

**Wikipedia:** [Tensor algebra](https://en.wikipedia.org/wiki/Tensor_algebra). It says: “can be uniquely extended to an algebra homomorphism from T(V) to A”

**Paper or page:** [Lemma 10.12.4.](https://stacks.math.columbia.edu/tag/00CZ). It says: “there exists a unique R-module homomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Contracting each factor makes tensor product traces multiply

**Remember:** The two pairs of slots contract separately.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a finite-dimensional vector space V, identify w ⊗ λ ∈ V ⊗ V∗ with the operator v ↦ λ(v)w. Define trace as the linear functional on operator tensors sending each w ⊗ λ to λ(w).

**Problem.** For linear maps A and B from finite-dimensional spaces to themselves, tr(A ⊗ B) = tr(A) tr(B).

**How the definition helps.** On rank-one maps the trace of the tensor product evaluates each functional on its own vector (our own). The two evaluations multiply, and bilinearity extends this equality to sums (our own). This replaces summing diagonal entries with the theorem that every operator in finite dimension is a sum of rank-one maps (our own).

**Wikipedia:** [Kronecker product](https://en.wikipedia.org/wiki/Kronecker_product). It says: “tr(A⊗B) = tr A tr B”

**Paper or page:** [Trace in Terms of Dual Basis](https://proofwiki.org/wiki/Trace_in_Terms_of_Dual_Basis). It says: “tr f = ∑ᵢ₌₁ⁿ eᵢ∗(f(eᵢ))”

**Sources:** none listed. No primary source with a working link was found.

### Contraction gives the same trace in every basis

**Remember:** Evaluate the dual factor to get the trace without a basis.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** On a finite-dimensional space V, identify w ⊗ λ with the map v ↦ λ(v)w. Define trace by the linear extension of w ⊗ λ ↦ λ(w).

**Problem.** For a linear map from V to itself, the sum of its matrix diagonal entries equals its contraction trace in every basis.

**How the definition helps.** Evaluation defines the trace before any basis is chosen (our own). The work moves to identifying linear maps with tensors (our own). In a basis the tensor of A is the sum of Aeᵢ ⊗ eᵢ∗, so evaluation adds the diagonal entries (our own).

**nLab:** [tensor contraction](https://ncatlab.org/nlab/show/tensor+contraction). It says: “The simplest case is the trace of a (1,1)-tensor”

**Paper or page:** [Trace in Terms of Dual Basis](https://proofwiki.org/wiki/Trace_in_Terms_of_Dual_Basis). It says: “tr f = ∑ᵢ₌₁ⁿ eᵢ∗(f(eᵢ))”

**Sources:** none listed. No primary source with a working link was found.

### Defining tensor products by a universal property makes basic facts automatic

**Remember:** Bilinear maps on pairs factor uniquely through linear maps on tensors.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A tensor product of V and W is a space T with a bilinear map b from V × W to T. For every space Z and bilinear map f from V × W to Z, exactly one linear map g satisfies f = g ∘ b.

**Problem.** The tensor product is unique up to a unique compatible isomorphism, independent of basis. Also V ⊗ W ≅ W ⊗ V, and over ℝ we have ℝ ⊗ ℝ ≅ ℝ.

**How the definition helps.** Universality gives compatible maps between any two tensor products in both directions. Their composites fix simple tensors, so uniqueness makes both composites identities. Swapping inputs twice likewise gives the identity. Over ℝ, multiplication has inverse r ↦ r ⊗ 1 because a ⊗ b = ab ⊗ 1 (arguments our own).

**Wikipedia:** [Tensor product](https://en.wikipedia.org/wiki/Tensor_product). It says: “A consequence of this approach is that every property of the tensor product can be deduced from the universal property, and that, in practice, one may forget the method that has been used to prove its existence.”

**Sources:** none listed. No primary source with a working link was found.

### Dividing by the factorial makes diagonal evaluation reversible

**Remember:** The diagonal counts each ordering once, so divide by the factorial.

*Rules out counterexamples.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Choose coordinates on a finite-dimensional space over a field where k! has an inverse. To polarize a formal homogeneous polynomial P of degree k ≥ 1, expand P(t₁v₁ + ⋯ + tₖvₖ) in formal variables. Divide the coefficient of t₁ ⋯ tₖ by k!.

**Problem.** Substituting the same vector of formal coordinates in every slot identifies symmetric k-linear forms with homogeneous polynomials of degree k. Polarization gives the inverse.

**How the definition helps.** For a symmetric form, the extracted coefficient equals k! times that form (our own). In the other direction, setting all inputs equal gives the same factor by the multinomial theorem (our own). Without invertibility, the nonzero symmetric form B(v,w) = v₁w₂ + v₂w₁ has zero diagonal over the field with two elements (our own).

**Wikipedia:** [Polarization of an algebraic form](https://en.wikipedia.org/wiki/Polarization_of_an_algebraic_form). It says: “polarization produces a unique symmetric multilinear form from which the original polynomial can be recovered by evaluating along a certain diagonal.”

**Sources:** none listed. No primary source with a working link was found.

### Dual factors give the mixed tensor change of coordinates

**Remember:** Change each vector coordinate by the inverse and each dual coordinate by the transpose.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define a mixed tensor as an element of a tensor product of vector spaces and their duals. A dual factor is a space of scalar-valued linear functions.

**Problem.** For a mixed tensor on one finite-dimensional space, let P list the new basis vectors as columns in old coordinates. Each vector coordinate column transforms by P⁻¹ and each dual coordinate column by Pᵀ.

**How the definition helps.** Each factor changes by its own coordinate map, so the tensor product gives the whole rule (our own). The dual coordinates of a functional are its values on the new basis (our own). The work moves to proving that products of basis vectors and dual basis functions form a tensor basis (our own).

**Wikipedia:** [Covariance and contravariance of vectors](https://en.wikipedia.org/wiki/Covariance_and_contravariance_of_vectors). It says: “the matrix that transforms the vector components must be the inverse of the matrix that transforms the basis vectors.”

**Sources:** none listed. No primary source with a working link was found.

### Evaluating a paired slot makes contraction basis free

**Remember:** Evaluate the paired slots and keep the others.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** On a simple tensor, contract a V∗ factor with a V factor by multiplying the remaining tensor by the functional’s value on the vector. Extend this rule linearly, interpreting the empty product as the scalar 1.

**Problem.** Contraction is independent of the basis used for the tensor. In coordinates it sums over the shared index of a vector slot and its dual slot.

**How the definition helps.** Evaluation needs no basis, so it defines one contraction map for all bases (our own). The work moves to showing that the rule extends linearly by the tensor product property (our own). Dual basis evaluation kills terms with unequal indices and gives one on the matching terms (our own).

**nLab:** [tensor contraction](https://ncatlab.org/nlab/show/tensor+contraction). It says: “by pairing by the evaluation map”

**Sources:** none listed. No primary source with a working link was found.

### Evaluating dual factors turns tensors into finite rank maps

**Remember:** Evaluate the functional, then scale the vector.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A linear functional sends vectors to scalars by a linear rule. For λ in the dual space V∗ and w in W, let w ⊗ λ act on v by λ(v)w. This bilinear rule extends linearly to tensors.

**Problem.** For vector spaces V and W over one field, W ⊗ V∗ identifies naturally with the linear maps V → W of finite rank.

**How the definition helps.** A finite tensor sum produces outputs in the span of its listed vectors (our own). Conversely, the coordinates of a finite-rank map in an image basis give its tensor (our own). Write any tensor using independent output vectors by expanding in a basis of their span (our own). If its map vanishes, independence forces every coefficient functional to vanish (our own).

**Wikipedia:** [Tensor product](https://en.wikipedia.org/wiki/Tensor_product). It says: “(f⊗v)(u) = f(u)v.”

**Sources:** none listed. No primary source with a working link was found.

### Finite dimension makes all bilinear forms sums of separated terms

**Remember:** One finite basis splits a bilinear form into finitely many products.

*Rules out counterexamples. Confidence: medium.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A separated bilinear form has the shape B(v,w) = λ(v)μ(w), where λ and μ are scalar-valued linear maps. Evaluation sends each tensor λ ⊗ μ to this form.

**Problem.** If either input space is finite-dimensional, evaluation identifies V∗ ⊗ W∗ with all bilinear forms on V × W.

**How the definition helps.** A finite basis in one input gives one separated term per basis vector (our own). Its dual basis reads off the coefficients uniquely (our own). For two spaces of finitely supported sequences, the dot product pairs each unit vector with a different coordinate functional (our own). These functionals are independent, whereas a finite separated sum produces only a finite-dimensional span (our own).

**Paper or page:** [Lemma 10.12.8.](https://stacks.math.columbia.edu/tag/00DE). It says: “Homᵣ(M ⊗ᵣ N, P) ≅ Homᵣ(M, Homᵣ(N, P))”

**Sources:** none listed. No primary source with a working link was found.

### Tensor products turn bilinear maps into maps that return maps

**Remember:** Fixing one input gives a linear map in the other input.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A tensor product of U and V is a space T with a bilinear map b from U × V to T. For every space W and bilinear map B from U × V to W, exactly one linear map L satisfies B = L ∘ b.

**Problem.** Linear maps U ⊗ V → W correspond naturally to linear maps U → Hom(V,W). Here Hom(V,W) is the space of linear maps V → W.

**How the definition helps.** The extension rule lets us replace a map on U ⊗ V by a bilinear map B (our own). Send u to the map v ↦ B(u,v), and evaluate to reverse this step (our own). The work moves to proving the extension rule for the space of formal tensor sums (our own).

**Paper or page:** [Lemma 10.12.8.](https://stacks.math.columbia.edu/tag/00DE). It says: “Homᵣ(M ⊗ᵣ N, P) ≅ Homᵣ(M, Homᵣ(N, P))”

**Sources:** none listed. No primary source with a working link was found.

### Tensoring images makes Kronecker ranks multiply

**Remember:** The image of a tensor product is the tensor product of the images.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define A ⊗ B to represent the linear map that sends v ⊗ w to Av ⊗ Bw in the tensor product bases. The rank of a map is the dimension of its image.

**Problem.** For matrices A and B over the same field, rank(A ⊗ B) = rank(A) rank(B).

**How the definition helps.** The tensor map sends each input pair to a pair of image vectors, so these pairs span its image (our own). Every pair of image basis vectors has a pair of preimages (our own). Extending the image bases to target bases makes those pairs part of a tensor basis (our own). This uses the tensor basis theorem in place of row reduction on the block matrix (our own).

**Wikipedia:** [Kronecker product](https://en.wikipedia.org/wiki/Kronecker_product). It says: “rank(A⊗B) = rank A rank B.”

**Paper or page:** [Tensor Product of Free Modules is Free](https://proofwiki.org/wiki/Tensor_Product_of_Free_Modules_is_Free). It says: “is a free A-module.”

**Sources:** none listed. No primary source with a working link was found.

### Tensoring maps gives the Kronecker mixed product rule

**Remember:** Each factor composes with its own partner.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define A ⊗ B as the matrix of the map v ⊗ w ↦ Av ⊗ Bw in the tensor product bases. The usual array definition replaces each entry of A with that entry times B.

**Problem.** For matrices of compatible sizes, (A ⊗ B)(C ⊗ D) = (AC) ⊗ (BD).

**How the definition helps.** Both maps send v ⊗ w to ACv ⊗ BDw, and these tensors span the input space (our own). The work moves to showing that the map on pairs extends linearly and gives the usual block array (our own).

**Wikipedia:** [Kronecker product](https://en.wikipedia.org/wiki/Kronecker_product). It says: “(A⊗B)(C⊗D) = (AC)⊗(BD).”

**Sources:** none listed. No primary source with a working link was found.

### Tensoring split sums preserves injections

**Remember:** A tensor product keeps each summand in its own place.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A short exact sequence consists of an inclusion U → V followed by a surjection V → W whose kernel is U. It splits if V can be identified with U ⊕ W so those maps become inclusion and projection.

**Problem.** Tensoring an exact sequence 0 → U → V → W → 0 with a vector space preserves exactness. Here exactness means that the image at each step equals the next kernel.

**How the definition helps.** In a split sequence, tensoring preserves the inclusion and projection because tensor products distribute over direct sums (our own). Every short exact sequence of vector spaces splits by lifting a basis of W to V (our own). The splitting and distributivity replace a direct check of the kernel (our own).

**Wikipedia:** [Tensor product](https://en.wikipedia.org/wiki/Tensor_product). It says: “every exact sequence is mapped to an exact sequence”

**Paper or page:** [Lemma 10.12.3.](https://stacks.math.columbia.edu/tag/00CY). It says: “induce unique isomorphisms”

**Sources:** none listed. No primary source with a working link was found.

### Tensoring triangular maps gives the Kronecker eigenvalues

**Remember:** Tensor a triangular basis with another to multiply the diagonal entries.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define A ⊗ B as the matrix of the linear map that applies A and B to their own factors. Use paired basis vectors as the matrix basis.

**Problem.** For square matrices A and B over an algebraically closed field, eigenvalues of A⊗B are the pairwise products, counted with multiplicity. If A is m × m and B is n × n, then det(A⊗B) = (det A)ⁿ(det B)ᵐ over any field.

**How the definition helps.** List the pairs from two triangular bases in lexicographic order, comparing the first index first (our own). The tensor map is triangular in that basis, with pairwise products on its diagonal (our own). This replaces a characteristic polynomial calculation on the block matrix (our own). Triangular bases exist over an algebraic closure, and extending the field preserves determinants (our own).

**Wikipedia:** [Kronecker product](https://en.wikipedia.org/wiki/Kronecker_product). It says: “λᵢ μⱼ”

**Sources:** none listed. No primary source with a working link was found.

### Trilinear maps identify the two groupings of three tensor factors

**Remember:** Three inputs give one tensor product whichever pair you group first.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A tensor product of vector spaces comes with a multilinear map from their Cartesian product. Every multilinear map from that product to any vector space factors uniquely through this map by a linear map.

**Problem.** Exactly one linear isomorphism from (U⊗V)⊗W to U⊗(V⊗W) sends every (u⊗v)⊗w to u⊗(v⊗w).

**How the definition helps.** Both groupings turn trilinear maps into linear maps by applying the extension rule twice (our own). The identity on triples therefore gives inverse maps between the groupings (our own). A construction from formal sums still needs a proof of the extension rule (our own).

**Paper or page:** [Lemma 10.12.5.](https://stacks.math.columbia.edu/tag/00D0). It says: “are well-defined and are isomorphisms.”

**Sources:** none listed. No primary source with a working link was found.

### A wedge product is zero exactly when the vectors are dependent

**Remember:** Repeating any vector factor makes a wedge vanish.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras), 15A03. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The exterior algebra of a vector space V is the associative algebra generated by V with one rule, v ∧ v = 0. Formally it is the tensor algebra of V divided by the ideal that the elements v ⊗ v generate.

**Problem.** Vectors x₁, …, xₖ are linearly dependent if and only if x₁ ∧ ⋯ ∧ xₖ = 0.

**How the definition helps.** The rule v ∧ v = 0 makes the wedge product alternating, so one direction is a short calculation. If one vector is a combination of the others, expand, and every term repeats a vector, so it is zero. The other direction moves the work to the theorem that increasing wedges of basis vectors form a basis of the k-th exterior power. Extend independent vectors to a basis, and their wedge is one of these basis elements, so it is not zero (our own).

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “a necessary and sufficient condition for {x₁, x₂, …, xₖ} to be a linearly dependent set of vectors is that x₁ ∧ x₂ ∧ ⋯ ∧ xₖ = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Alternating, not antisymmetric, wedges give the right exterior powers in characteristic 2

**Remember:** Ask that v ∧ v vanish, not only that wedges anticommute.

*Rules out counterexamples.* MSC 15A75 (Exterior algebra, Grassmann algebras), 15A03. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The exterior algebra of V is its tensor algebra modulo the ideal generated by v ⊗ v for every v ∈ V. Its kth exterior power is the part of degree k.

**Problem.** For a vector space V of dimension n over any field, the k-th exterior power has dimension equal to the binomial coefficient n choose k. So the whole exterior algebra has dimension 2ⁿ and the top power is one-dimensional.

**How the definition helps.** The exterior basis theorem gives one basis wedge per increasing k-element index set, yielding the binomial count (our own). Summing over k counts all subsets, and only one uses all n indices. In characteristic two, antisymmetry alone allows arbitrary powers of one generator, yielding a polynomial algebra in dimension one (our own).

**nLab:** [exterior algebra](https://ncatlab.org/nlab/show/exterior+algebra). It says: “If we can divide by 2, then the relations … imply …, while the converse holds in any characteristic.”

**Sources:** none listed. No primary source with a working link was found.

### Complementary wedges give the dual basis functionals

**Remember:** Replace one factor to read just its coordinate.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For an ordered basis, let Ω be its top wedge. For position i, define a linear functional as the coefficient of Ω after replacing the ith factor with the input vector.

**Problem.** The functionals given by these wedge coefficients form the dual basis. Each takes value one on its own basis vector and zero on the others.

**How the definition helps.** Inserting another basis vector repeats a factor, so the wedge vanishes (our own). Inserting the original basis vector gives Ω (our own). Thus the wedge coefficient reads off the desired coordinate without solving a linear system (our own). The exterior basis theorem ensures that Ω spans the top power and is nonzero (our own).

**nLab:** [dual vector space](https://ncatlab.org/nlab/show/dual+vector+space). It says: “bⁱ(bⱼ) = δⁱⱼ”

**Sources:**

- [Sergei Winitzki, Linear Algebra via Exterior Products, version 1.3 (2020), §2.3.3](https://raw.githubusercontent.com/winitzki/linear-algebra-book/master/linalg.pdf)

### Complementary wedges reveal the sign of the squared Hodge star

**Remember:** Taking the complement twice swaps two blocks of basis vectors.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Fix an oriented Euclidean space of dimension n with positive unit volume element vol. Define the Hodge star linearly by sending each increasing orthonormal basis wedge to its signed complement in a positive orthonormal basis. Choose the sign so the wedge followed by its complement gives vol.

**Problem.** On the kth exterior power, applying the Hodge star twice multiplies by −1 if k and n − k are both odd. Otherwise it gives the identity.

**How the definition helps.** Taking the complement twice swaps a block of k vectors past the other n − k vectors (our own). Each crossing contributes a minus sign (our own). The remaining work shows that the signed complement rule gives the unique map satisfying α ∧ ⋆β = ⟨α,β⟩ vol (our own).

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “scalar multiple of the identity”

**Sources:**

- [Sergei Winitzki, Linear Algebra via Exterior Products, version 1.3 (2020), §5.4.3](https://raw.githubusercontent.com/winitzki/linear-algebra-book/master/linalg.pdf)

### Determinant pairing gives dual bases for exterior powers

**Remember:** Wedges of dual basis elements select just the matching basis wedges.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Pair a wedge of k linear functionals with a wedge of k vectors using the determinant of their evaluation matrix. A repeated row or column makes the determinant zero, so the pairing extends linearly to exterior powers.

**Problem.** For V of finite dimension, the kth exterior power of its dual is naturally the dual of the kth exterior power of V.

**How the definition helps.** For increasing index lists, the evaluation determinant equals one when the lists match and zero otherwise (our own). Thus each wedge of dual basis vectors selects the corresponding basis wedge (our own). The exterior basis theorem supplies both bases (our own).

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “If V is finite-dimensional, then the latter is naturally isomorphic to ⋀ᵏ(V∗).”

**Sources:** none listed. No primary source with a working link was found.

### Exterior powers turn alternating forms into linear functionals

**Remember:** Repeated vectors vanish before an alternating form sees them.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** An alternating form is scalar-valued, linear in each input, and zero whenever two inputs agree. Form the kth exterior power by dividing the kth tensor power by the span of tensors with a repeated vector factor.

**Problem.** Alternating k-linear forms on V correspond exactly to linear functionals on its kth exterior power.

**How the definition helps.** Alternation kills every relation imposed in forming the quotient (our own). The tensor extension rule therefore gives a unique linear functional on the exterior power (our own). Conversely, evaluating any such functional on wedges gives an alternating form (our own). This avoids solving for the coefficients of a form in a basis (our own).

**nLab:** [exterior algebra](https://ncatlab.org/nlab/show/exterior+algebra). It says: “the identity v ∧ v = 0 for all v ∈ V.”

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “most general" alternating operator”

**Sources:** none listed. No primary source with a working link was found.

### Inserting into alternating forms makes contractions anticommute

**Remember:** Repeated insertions vanish and swapping two insertions changes the sign.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The exterior powers of the dual are spaces of alternating forms when the original space is finite-dimensional. Define the interior product by inserting a vector in the first slot of a form. On forms of degree zero, it gives zero.

**Problem.** Two interior products with the same vector give zero. For vectors v and w, performing their interior products in opposite orders changes the sign.

**How the definition helps.** Two insertions occupy adjacent slots, so alternation gives both identities (our own). The alternative definition extends insertion from degree one by a signed product rule on wedges (our own). The work moves to identifying that operation with insertion on alternating forms (our own).

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “\\iota\_\\alpha\\circ \\iota\_\\alpha = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Orthogonal wedge coordinates add squared projection volumes

**Remember:** Wedge coordinates are signed projection volumes, so apply Pythagoras.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Choose an orthonormal basis in a real inner product space. Define the inner product on the kth exterior power by making its increasing wedges an orthonormal basis.

**Problem.** The squared k-dimensional volume of a parallelepiped equals a sum over all k-dimensional coordinate planes. Each term is the squared volume of its orthogonal projection onto that plane.

**How the definition helps.** Each wedge coordinate is a minor giving the signed volume of one coordinate projection (our own). Orthonormality makes the squared wedge length the sum of these squared coordinates (our own). Identifying squared wedge length with ordinary squared volume uses the Gram determinant formula for the edge vectors (our own).

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “magnitude of a k-blade”

**Paper or page:** [Cauchy-Binet Formula/Example/Matrix by Transpose](https://proofwiki.org/wiki/Cauchy-Binet_Formula/Example/Matrix_by_Transpose). It says: “det(AAᵀ)”

**Sources:**

- [Sergei Winitzki, Linear Algebra via Exterior Products, version 1.3 (2020), §5.5.2](https://raw.githubusercontent.com/winitzki/linear-algebra-book/master/linalg.pdf)

### The last nonzero exterior power detects rank

**Remember:** The last surviving wedge counts independent output vectors.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The kth exterior power of a linear map A applies A to each factor of a wedge of k vectors. A wedge is zero exactly when its vectors are dependent.

**Problem.** For a linear map between finite-dimensional spaces, its rank is the largest k for which its kth exterior power is nonzero. Its zeroth exterior power acts as the identity on scalars.

**How the definition helps.** A wedge of k outputs survives exactly when those outputs are independent (our own). Every list of independent image vectors has preimages (our own). This replaces checking minors individually with the wedge dependence test, which follows from the exterior basis theorem (our own).

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “lesser exterior powers”

**Sources:**

- [Sergei Winitzki, Linear Algebra via Exterior Products, version 1.3 (2020), §2.3.5](https://raw.githubusercontent.com/winitzki/linear-algebra-book/master/linalg.pdf)

### Commuting free generators give a monomial basis for symmetric powers

**Remember:** Basis vectors serve as indeterminates, and total degree counts their factors.

*True by definition.* MSC 15A78 (Other algebras built from modules). arXiv math.RA. Level 2: later undergraduate.

**Definition.** The symmetric algebra of V is the commutative algebra with identity freely generated by V. This means that linear maps from V into such algebras extend uniquely to algebra maps preserving the identity. Its kth symmetric power is the part of total degree k.

**Problem.** For n ≥ 1 basis vectors and k ≥ 0, their degree k monomials form a basis of the kth symmetric power. Its dimension is the binomial coefficient (n + k − 1 choose k).

**How the definition helps.** The extension rule is the same as substitution into a polynomial ring with the chosen basis as variables (our own). The dimension is then the number of degree k monomials. The work moves to proving the extension rule for the tensor algebra with commutation imposed (our own).

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “of a vector space is the free commutative algebra over V.”

**Wikipedia:** [Symmetric algebra](https://en.wikipedia.org/wiki/Symmetric_algebra). It says: “This binomial coefficient is the number of n-variable monomials of degree k.”

**Paper or page:** [Lemma 10.13.1.](https://stacks.math.columbia.edu/tag/00DN). It says: “If M is a free R-module, so is each symmetric and exterior power.”

**Sources:** none listed. No primary source with a working link was found.

### Min-plus matrix powers give the cheapest walks of each length

**Remember:** Add along a walk and minimize over walks.

*True by definition. Confidence: medium.* MSC 15A80 (Max-plus and related algebras), 05C38. arXiv math.CO, cs.DS. Level 2: later undergraduate.

**Definition.** The min-plus semiring uses real numbers and ∞, with minimum as addition and ordinary addition as multiplication. For each ordered vertex pair of a finite directed graph, record the minimum edge cost, using ∞ for an empty set.

**Problem.** Fix an integer k ≥ 0. Entry (i,j) of the kth min-plus power gives the minimum cost of a k-edge walk from i to j. An empty set of walks has minimum cost ∞.

**How the definition helps.** Multiplication adds the cost of the last edge and minimizes over its starting vertex (our own). The zeroth power costs zero for staying at a vertex and ∞ for changing vertices. Induction gives the stated minimum (our own).

**Wikipedia:** [Semiring](https://en.wikipedia.org/wiki/Semiring). It says: “The Floyd–Warshall algorithm for shortest paths can thus be reformulated as a computation over a (min, +) algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Boolean semiring matrices compose relations by ordinary matrix multiplication

**Remember:** AND joins steps and OR chooses a witness.

*True by definition.* MSC 15B34 (Boolean and Hadamard matrices), 16Y60. arXiv math.RA, math.CO. Level 2: later undergraduate.

**Definition.** Record a relation between finite sets by a matrix of truth values. Use the Boolean semiring, which adds with OR and multiplies with AND, so 1 + 1 = 1.

**Problem.** For relations with matching intermediate sets, the Boolean product of their matrices represents composition. For relations on the same pair of sets, the Boolean sum represents union.

**How the definition helps.** The rule 1 + 1 = 1 makes each entry say only whether a witness exists, which is what composition asks. Wikipedia states both facts for the Boolean semiring. In our own check, entry (i, k) of the product is the OR over j of (i R j AND j S k). With integer arithmetic, the entry counts witnesses, and one must round positive counts to one.

**Wikipedia:** [Semiring](https://en.wikipedia.org/wiki/Semiring). It says: “matrix addition corresponds to union of relations, and matrix multiplication corresponds to composition of relations.”

**Sources:** none listed. No primary source with a working link was found.

### Defining positive semidefinite matrices as Gram matrices proves the Schur product theorem

**Remember:** The entrywise product pairs the tensor products of the Gram vectors.

*True by definition.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A63. arXiv math.RA, math.FA. Level 2: later undergraduate.

**Definition.** Call a matrix positive semidefinite if it is a Gram matrix. A Gram matrix has entries ⟨vᵢ, vⱼ⟩ for some vectors v₁, …, vₙ in an inner product space. The usual definition requires the quadratic form of a Hermitian matrix to be nonnegative on every vector.

**Problem.** The entrywise product of two positive semidefinite matrices of the same size is positive semidefinite. This entrywise product is also called the Hadamard or Schur product.

**How the definition helps.** The tensor product inner product multiplies the inner products of corresponding factors. Thus the Gram matrix of the vectors vᵢ ⊗ wᵢ is the entrywise product (our own). The equivalence of Gram matrices and positive semidefinite matrices completes the argument.

**Wikipedia:** [Gram matrix](https://en.wikipedia.org/wiki/Gram_matrix). It says: “The Gram matrix is positive semidefinite, and every positive semidefinite matrix is the Gramian matrix for some set of vectors.”

**Sources:**

- [Issai Schur, Bemerkungen zur Theorie der beschränkten Bilinearformen mit unendlich vielen Veränderlichen (1911)](https://doi.org/10.1515/crll.1911.140.1)

### Irreducible nonnegative matrices have a simple positive Perron eigenvalue

**Remember:** Irreducibility means positive entries give a directed path between every ordered vertex pair.

*Rules out counterexamples.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A18. arXiv math.SP, math.RA. Level 2: later undergraduate.

**Definition.** For a nonnegative square matrix A, draw an edge i → j whenever Aᵢⱼ &gt; 0. The matrix is irreducible if every vertex can reach every other vertex by a directed path.

**Problem.** For an irreducible nonnegative matrix of size n ≥ 2, the spectral radius is a positive eigenvalue (size restriction our own). It is a simple root of the characteristic polynomial and has an eigenvector with all entries strictly positive.

**How the definition helps.** Strong connectivity lets the irreducible Perron–Frobenius theorem give positivity and simplicity. The matrix with rows (0,1) and (0,0) has no path from the second vertex to the first. Its spectral radius is zero with multiplicity two, and its eigenvectors have zero second coordinate (our own).

**Wikipedia:** [Perron–Frobenius theorem](https://en.wikipedia.org/wiki/Perron%E2%80%93Frobenius_theorem). It says: “However, Frobenius found a special subclass of non-negative matrices — irreducible matrices — for which a non-trivial generalization is possible.”

**Sources:**

- [Perron, O. (1907). Zur Theorie der Matrices. Mathematische Annalen 64.](https://doi.org/10.1007/BF01449896)

### Primitive matrices make the Perron eigenvalue strictly dominant

**Remember:** Some power positive means one eigenvalue beats all the others.

*Rules out counterexamples.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A18. arXiv math.SP, math.RA. Level 2: later undergraduate.

**Definition.** A nonnegative square matrix A is primitive if there is an integer m ≥ 1 such that every entry of Aᵐ is strictly positive.

**Problem.** If A is primitive, its Perron eigenvalue r is strictly larger in absolute value than every other eigenvalue. So the powers of A, divided by rᵏ, settle down to a fixed limit.

**How the definition helps.** Perron–Frobenius applies to primitive matrices, giving a simple Perron eigenvalue and strictly smaller moduli for all others. After division by rᵏ, the other Jordan blocks tend to zero and the Perron block stays fixed (our own). The matrix swapping two coordinates has eigenvalues 1 and −1, and its powers alternate (our own). No power is strictly positive.

**Wikipedia:** [Perron–Frobenius theorem](https://en.wikipedia.org/wiki/Perron%E2%80%93Frobenius_theorem). It says: “All statements of the Perron–Frobenius theorem for positive matrices remain true for primitive matrices.”

**Sources:**

- [Perron, O. (1907). Zur Theorie der Matrices. Mathematische Annalen 64.](https://doi.org/10.1007/BF01449896)

### Preserving the symplectic form forces determinant one

**Remember:** A symplectic matrix preserves the volume made from its symplectic form.

*True by definition.* MSC 15B99 (Special matrices), 53D05, 15A15. arXiv math.SG, math.RA. Level 2: later undergraduate.

**Definition.** Fix a nondegenerate alternating bilinear form ω on a real or complex vector space of dimension 2n. Nondegeneracy means that each nonzero v has some w with ω(v,w) ≠ 0. A matrix M is symplectic for ω if ω(Mv,Mw) = ω(v,w) for all v,w.

**Problem.** Every real or complex symplectic matrix has determinant one.

**How the definition helps.** Preserving ω forces preservation of its top wedge power, an alternating form that measures volume (our own). A matrix scales any volume form by its determinant, so its determinant is one (our own). Taking determinants in the matrix equation alone gives only det(M)² = 1. The work is in showing the wedge power is nonzero, which follows by writing ω in a basis of paired vectors (our own).

**Wikipedia:** [Symplectic matrix](https://en.wikipedia.org/wiki/Symplectic_matrix). It says: “It follows easily from the definition that the determinant of any symplectic matrix is ±1. Actually, it turns out that the determinant is always +1 for any field.”

**Sources:**

- [Donsub Rim, An elementary proof that symplectic matrices have determinant one, Advances in Dynamical Systems and Applications 12 (2017) 15–20](https://doi.org/10.37622/ADSA/12.1.2017.15-20)

### McCoy rank makes linear dependence a rank condition over any commutative ring

**Remember:** Rank is the biggest minor size whose minors no nonzero element kills.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 13C40. arXiv math.AC, math.RA. Level 3: graduate.

**Definition.** For a matrix over a nonzero commutative ring with identity, its McCoy rank is the largest minor size t satisfying the following condition. For each nonzero scalar, at least one t × t minor has nonzero product with that scalar. The empty minor equals 1 (formulation our own).

**Problem.** Let R be a nonzero commutative ring and A an n × m matrix over R. Then Ax = 0 has a nonzero solution exactly when the McCoy rank of A is less than m.

**How the definition helps.** McCoy’s theorem characterizes column dependence by a nonzero common annihilator of the maximal column-size minors, taking missing minors as zero. This gives the rank criterion even over rings with zero divisors. Over ℤ/6, the nonzero entry 2 has annihilator containing 3, so the matrix \[2\] has rank zero and kills \[3\] (our own).

**Paper or page:** [The CRing Project, Various, Theorem 2.7 (McCoy)](https://math.uchicago.edu/~amathew/CRing.pdf), [The CRing Project, Various, Corollary 2.8](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “If R is not the zero ring, the following are equivalent: (1) The columns α₁, …, αₘ are linearly dependent. (2) Equation … has a nontrivial solution. (3) rk(A) &lt; m.”

**Sources:**

- [The CRing Project, Various, Theorem 2.7 (McCoy) and Corollary 2.8](https://math.uchicago.edu/~amathew/CRing.pdf)

### Drazin inversion respects commuting maps

**Remember:** Invert on the stable image and set the nilpotent part to zero.

*True by definition.* MSC 15A09 (Theory of matrix inversion and generalized inverses), 15A27. arXiv math.RA. Level 3: graduate.

**Definition.** For a square matrix A, take k large enough that Aᵏ and Aᵏ⁺¹ have the same rank. Define the Drazin inverse D by inverting A on the image of Aᵏ and setting D to zero on the kernel of Aᵏ. The equivalent equation definition asks for AD = DA, DAD = D and Aᵏ⁺¹D = Aᵏ.

**Problem.** Every matrix that commutes with A also commutes with its Drazin inverse.

**How the definition helps.** Our own proof uses the fact that a matrix commuting with A preserves the image and kernel of every power. It therefore commutes with the ordinary inverse on the stable image and with zero on the stable kernel. The work moves to proving that the two spaces split the domain and that this inverse satisfies the defining equations.

**Wikipedia:** [Drazin inverse](https://en.wikipedia.org/wiki/Drazin_inverse). It says: “The Drazin inverse is then the operation that maps invertible Jordan blocks to their inverses, and nilpotent Jordan blocks to zero.”

**Sources:** none listed. No primary source with a working link was found.

### Matching kernels make pseudoinverses reverse order

**Remember:** Invert on the shared range and leave the shared kernel at zero.

*Rules out counterexamples.* MSC 15A09 (Theory of matrix inversion and generalized inverses), 15A39. arXiv math.FA. Level 3: graduate.

**Definition.** For a positive semidefinite matrix, its pseudoinverse inverts the matrix on its range and acts as zero on its kernel. Write C ≤ D when D − C is positive semidefinite.

**Problem.** If 0 ≤ C ≤ D and the kernels match, then D⁺ ≤ C⁺. Here the superscript plus denotes the pseudoinverse. The kernel condition is also necessary.

**How the definition helps.** On the common range, both matrices are positive definite and inversion reverses order. Both pseudoinverses vanish on the common kernel. Under 0 ≤ C ≤ D, the two order inequalities imply opposite kernel inclusions because pseudoinversion preserves each kernel (our own). For C = 0 and D = I, the reversed inequality fails (our own).

**Paper or page:** [Matrix monotonicity and concavity of the principal pivot transform](https://arxiv.org/abs/2302.04293v2). It says: “if 0 ≤ C ≤ D then D⁺ ≤ C⁺ if and only if ker C = ker D.”

**Sources:**

- [Kenneth Beard, Aaron Welters, Matrix monotonicity and concavity of the principal pivot transform](https://arxiv.org/abs/2302.04293v2)

### Defining minors through the wedge pairing gives Jacobi's complementary minor theorem

**Remember:** Wedge products pair complementary degrees into the single line of volumes.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 3: graduate.

**Definition.** Let V have dimension n, with 0 ≤ k ≤ n. The complementary wedge pairing sends (u,v) in ΛᵏV × Λⁿ⁻ᵏV to u ∧ v in ΛⁿV.

**Problem.** Let A be an invertible n × n matrix, with k-element row set I, column set J, and complements I′ and J′. The minor of A⁻¹ on rows I and columns J equals ± the minor of A on rows J′ and columns I′, over det A. The sign is −1 raised to the sum of all indices in I and J.

**How the definition helps.** Applying A to both arguments multiplies their wedge by det A (our own argument). Thus pairing u with Λⁿ⁻ᵏA(v) equals det A times pairing Λᵏ(A⁻¹)(u) with v. In the ordered wedge basis, exterior powers have minors as entries. Pairing complementary basis wedges gives the stated sign.

**nLab:** [determinant](https://ncatlab.org/nlab/show/determinant). It says: “The determinant is the (essentially unique) universal alternating multilinear map.”

**Wikipedia:** [Minor (linear algebra)](https://en.wikipedia.org/wiki/Minor_%28linear_algebra%29). It says: “denote the ordered sequences of indices (the indices are in natural order of magnitude, as above) complementary to I, J”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Pfaffian by a wedge power makes pf(BABᵀ) equal det(B) pf(A)

**Remember:** The Pfaffian is the coefficient of a wedge power in the top wedge.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 3: graduate.

**Definition.** For a skew-symmetric 2n × 2n matrix A over a characteristic-zero field, put ω = ∑ᵢ&lt;ⱼ aᵢⱼ eᵢ ∧ eⱼ in the standard basis. Define pf(A) as the coefficient of e₁ ∧ ⋯ ∧ e₂ₙ in the wedge power ωⁿ/n!.

**Problem.** For a 2n × 2n skew-symmetric matrix A and any 2n × 2n matrix B, pf(BABᵀ) = det(B) pf(A).

**How the definition helps.** Applying B to each factor of ω gives the bivector for BABᵀ. On its nth wedge power, B acts on the top exterior power by det(B). Comparing coefficients proves the identity.

**Wikipedia:** [Pfaffian](https://en.wikipedia.org/wiki/Pfaffian). It says: “where ωⁿ denotes the wedge product of n copies of ω.”

**Sources:** none listed. No primary source with a working link was found.

### Defining trace by evaluation makes it survive extension of scalars

**Remember:** Evaluate each dual factor on its paired vector and add.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 13C10. arXiv math.AC. Level 3: graduate.

**Definition.** Let P be a finitely generated projective module over a commutative ring R. Identify P ⊗ P\* with Endᵣ(P) by sending p ⊗ φ to the map x ↦ φ(x)p. The trace is the linear map sending each p ⊗ φ to φ(p).

**Problem.** Let R → S be a map of commutative rings, and let f be an endomorphism of P. Then the trace of the extended map f ⊗ S on P ⊗ S is the image in S of the trace of f.

**How the definition helps.** After scalar extension, each evaluation φ(p) becomes its image in S (our own argument). Adding these images gives the extended trace.

**nLab:** [tensor contraction](https://ncatlab.org/nlab/show/tensor+contraction). It says: “by pairing by the evaluation map”

**Sources:** none listed. No primary source with a working link was found.

### Schur complements explain bordered minors

**Remember:** Bordered minors are entries of a single scaled Schur complement.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A24. arXiv math.CO, math.RA. Level 3: graduate.

**Definition.** Write A in block rows (P,C) and (D,E), with P square and invertible. The Schur complement of P is S = E − DP⁻¹C. Let Bᵢⱼ be the determinant of P bordered by the corresponding extra row i and column j of A.

**Problem.** For ℓ ≥ 1, an ℓ × ℓ minor of B equals det Q times (det P)<sup>(ℓ−1)</sup>. Here Q is P bordered by the corresponding ℓ rows and ℓ columns of A.

**How the definition helps.** Block elimination on each single border gives Bᵢⱼ = det(P) Sᵢⱼ (our own argument). On the selected ℓ borders, it gives det Q as det(P) times the corresponding minor of S. Scaling S by det(P) multiplies that minor by (det P)ˡ.

**Paper or page:** [Sufficient conditions for total positivity, compounds, and Dodgson condensation](https://arxiv.org/abs/2405.06069v1). It says: “det B\[δ, γ\] = (det A\[α\])ˡ⁻¹ det A\[α ∪ δ, α ∪ γ\].”

**Sources:**

- [Shaun Fallat, Himanshu Gupta, Charles R. Johnson, Sufficient conditions for total positivity, compounds, and Dodgson condensation](https://arxiv.org/abs/2405.06069v1)

### Symmetrization turns permanents into inner products

**Remember:** Sum all tensor orders and divide by the square root of their number.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A69. arXiv math.RA, math.CO. Level 3: graduate.

**Definition.** For m vectors in a real inner product space, form their tensor product in each of the m! possible orders. Sum these products and divide by √(m!). The permanent sums matrix entry products over all permutations pairing rows with columns, with coefficient one each time.

**Problem.** The inner product of the two symmetrized tensors is the permanent of the matrix of pairwise inner products.

**How the definition helps.** In our own explanation, products of vector inner products combine according to the relative permutation of the two lists. Each permutation occurs m! times before normalization, so the inner product gives the permanent. The work in our own account moves to constructing the tensor inner product with the desired product rule.

**Paper or page:** [Separable symmetric tensors and separable anti-symmetric tensors](https://arxiv.org/abs/2202.12792v3). It says: “⟨𝒜ₛ, ℬₛ⟩ = perm(A) where perm(A) denotes the permanent of matrix A.”

**Sources:**

- [Changqing Xu, Separable symmetric tensors and separable anti-symmetric tensors](https://arxiv.org/abs/2202.12792v3)

### The Dieudonné determinant lets us define SL(n) over the quaternions

**Remember:** Over a noncommutative field, the determinant can only be known up to commutators.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 19B99. arXiv math.RA, math.KT. Level 3: graduate.

**Definition.** For a division ring K, the Dieudonné determinant maps GL(n,K) homomorphically to the multiplicative group K\* modulo its commutator subgroup. Adding a left multiple of one row to another preserves its value. Left-scaling a row by any a ∈ K\* multiplies its value by the class of a.

**Problem.** Over a division ring K, there is a unique homomorphism from GL(n, K) to K\*/\[K\*, K\*\] that obeys the two row rules. So SL(n, K), the matrices of determinant 1, is defined, for example over the quaternions ℍ.

**How the definition helps.** Taking values in the abelianization of K\*, not in K itself, is what lets the theorem be stated at all. For ℍ the commutator subgroup is Sp(1), the unit quaternions, so the target is the positive reals. Then SL(n, ℍ) is the set of matrices whose Dieudonné determinant is 1. The existence of the homomorphism is the real theorem in Dieudonné's paper.

**nLab:** [Dieudonné determinant](https://ncatlab.org/nlab/show/Dieudonn%C3%A9+determinant). It says: “It is crucial for making sense of the notion of "special linear group" over such coefficients, such as the group SL(2,H) over the quaternions.”

**Sources:**

- [Jean Dieudonné, Les déterminants sur un corps non commutatif, Bulletin de la Société Mathématique de France 71 (1943) 27–45](https://doi.org/10.24033/bsmf.1345)

### Ideal classes classify matrix similarity

**Remember:** Changing an ideal basis changes the multiplication matrix by similarity.

*Makes the theorem clean to state or prove.* MSC 15A21 (Canonical forms, reductions, classification), 15B33. arXiv math.RA, math.NT. Level 3: graduate.

**Definition.** Let θ satisfy a monic polynomial f over a principal ideal domain A, irreducible over the fraction field K. A fractional ideal is a nonzero finitely generated A\[θ\]-submodule of K(θ). Two ideals represent the same class when one is a nonzero scalar multiple of the other in K(θ).

**Problem.** For n equal to the degree of f, these ideal classes classify n-by-n matrices over A with characteristic polynomial f up to similarity.

**How the definition helps.** Ideal classes give a basis-independent way to describe multiplication by θ. Our own account lets θ act on column vectors through the given matrix. Over K the resulting space has dimension one over K(θ), so changing its identification with K(θ) only rescales the ideal. Conversely, each ideal has an A-basis because it is finitely generated and torsion-free over a principal ideal domain.

**Paper or page:** [Representatives of similarity classes of matrices over PIDs corresponding to ideal classes](https://arxiv.org/abs/2205.02094v2). It says: “There is a canonical bijection between the similarity classes of matrices in Mₙ(A) with characteristic polynomial f(x) and ideal classes in A\[θ\].”

**Sources:**

- [Lucy Knight, Alexander Stasinski, Representatives of similarity classes of matrices over PIDs corresponding to ideal classes](https://arxiv.org/abs/2205.02094v2)

### Minor ideals recover Smith factors

**Remember:** The first k diagonal factors generate the kth minor ideal through their product.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification), 15A15. arXiv math.RA. Level 3: graduate.

**Definition.** For each size k, form the ideal generated by the determinants of all k-by-k submatrices. Smith normal form uses invertible row and column changes to reach a diagonal where each entry divides the next.

**Problem.** Over a principal ideal domain, where every ideal has one generator, these ideals determine the nonzero Smith entries up to invertible factors.

**How the definition helps.** In Smith form, our own calculation reads the generator of each nonzero minor ideal directly from the diagonal. The product of the first k entries is a minor and divides every minor of size k. Successive generators therefore give the diagonal entries by division, up to invertible factors. The work lies in obtaining Smith form and proving that invertible row and column changes preserve the ideals.

**Paper or page:** [On integral Ext² between certain Weyl modules of GLn](https://arxiv.org/abs/2411.00675v1). It says: “Let δᵢ be a g.c.d of the determinants of the i × i submatrices of A.”

**Sources:**

- [H. J. Stephen Smith, On systems of linear indeterminate equations and congruences](https://doi.org/10.1098/rstl.1861.0016)

### Kernel compatibility makes singular elimination valid

**Remember:** Elimination cannot cancel a coupling to a direction with no quadratic term.

*Rules out counterexamples.* MSC 15A39 (Linear inequalities of matrices), 15A09. arXiv math.FA. Level 3: graduate.

**Definition.** Write a Hermitian matrix in block rows (A,B) and (B∗,D). Kernel compatibility means Bv = 0 for every v with Dv = 0. The generalized Schur complement is A − BD⁺B∗, where D⁺ inverts D on its range and vanishes on its kernel.

**Problem.** The whole matrix is positive semidefinite exactly when three conditions hold. Both D and the generalized Schur complement must be positive semidefinite. Also, B must vanish on the kernel of D.

**How the definition helps.** In our own proof, the kernel condition allows elimination with D⁺, leaving the two diagonal blocks D and A − BD⁺B∗. Positivity forces the condition because a nonzero coupling to a kernel vector lets the quadratic form take negative values. For example, take zero diagonal entries and both off-diagonal entries equal to one. Both diagonal tests give zero, yet the original matrix has eigenvalue −1.

**Paper or page:** [Matrix monotonicity and concavity of the principal pivot transform](https://arxiv.org/abs/2302.04293v2). It says: “then 0 ≤ A if and only if 0 ≤ A₂₂, ker A₂₂ ⊆ ker A₁₂, and 0 ≤ A/A₂₂.”

**Sources:**

- [Kenneth Beard, Aaron Welters, Matrix monotonicity and concavity of the principal pivot transform](https://arxiv.org/abs/2302.04293v2)

### Minimization makes Schur complements concave

**Remember:** Fix the first block and minimize the quadratic form over the second.

*True by definition.* MSC 15A39 (Linear inequalities of matrices), 15A45. arXiv math.FA. Level 3: graduate.

**Definition.** For a positive semidefinite Hermitian matrix M in two fixed blocks, write q(x,y) for its quadratic form. Its Schur complement onto the first block is the Hermitian matrix S satisfying x∗Sx = minᵧ q(x,y) for every x.

**Problem.** On positive semidefinite matrices split into fixed blocks, the Schur complement is concave. In other words, the complement of an average is at least the average of the complements in the positive semidefinite order.

**How the definition helps.** In our own proof, the minimum of an average is no smaller than the average of the minima. Our own argument works pointwise in the first group, even when the two eliminated blocks have different kernels. The work moves to proving the minimization principle when the eliminated block is singular.

**Paper or page:** [Matrix monotonicity and concavity of the principal pivot transform](https://arxiv.org/abs/2302.04293v2). It says: “is the unique self-adjoint matrix satisfying the minimization principle”

**Sources:**

- [Kenneth Beard, Aaron Welters, Matrix monotonicity and concavity of the principal pivot transform](https://arxiv.org/abs/2302.04293v2)

### Harmonic mixtures preserve matrix order

**Remember:** Two inversions reverse order twice, and positive mixtures keep it.

*True by definition.* MSC 15A45 (Miscellaneous inequalities involving matrices), 15A39. arXiv math.FA, math.OA. Level 3: graduate.

**Definition.** For t &gt; 0 and 0 ≤ λ ≤ 1, set hλ(t) = 1/((1 − λ) + λ/t). For a finite positive measure μ on \[0,1\], define f(t) = ∫ hλ(t) dμ(λ). Apply f to positive definite matrices by applying it to their eigenvalues in an orthonormal eigenbasis.

**Problem.** The resulting function is operator monotone on positive definite matrices of every size. This means that if B − A is positive semidefinite, then so is f(B) − f(A).

**How the definition helps.** In our own proof, each harmonic function preserves order because taking positive definite inverses reverses order twice. Our own integration step preserves the inequality because the measure is positive. The work moves to showing that every positive operator monotone function has this representation.

**Paper or page:** [On a comprehensive review of a proof of Löwner's theorem](https://arxiv.org/abs/2510.00121v2). It says: “Conversely, any function given in this form is operator monotone.”

**Sources:**

- [Karl Löwner, Über monotone Matrixfunktionen](https://doi.org/10.1007/BF01170633)

### Clifford matrices make free Dirac solutions satisfy Klein–Gordon

**Remember:** The Clifford relations make the square of the gamma-matrix derivative the wave operator.

*True by definition.* MSC 15A66 (Clifford algebras, spinors), 35Q41, 81Q05. arXiv math-ph, hep-th. Level 3: graduate.

**Definition.** For flat spacetime, choose four gamma matrices such that γμγν = −γνγμ for distinct indices. Require γ₀² = I and γⱼ² = −I for j = 1, 2, 3. The free Dirac operator with constant mass m is i∑μ γμ∂μ − mI.

**Problem.** Each component of a solution to the free Dirac equation satisfies the Klein–Gordon wave equation with the same mass.

**How the definition helps.** The Clifford definition makes the square of the gamma-matrix derivative equal to the wave operator (our own). Mixed derivatives cancel in pairs, and the squares supply the time and space signs (our own). Multiplying the Dirac operator by its partner with the opposite mass sign gives the negative of the Klein–Gordon operator (our own).

**Wikipedia:** [Dirac equation](https://en.wikipedia.org/wiki/Dirac_equation). It says: “As a result, any solution to the Dirac equation is also automatically a solution to the Klein–Gordon equation.”

**Sources:**

- [P. A. M. Dirac, The quantum theory of the electron, Proceedings of the Royal Society of London A (1928)](https://doi.org/10.1098/rspa.1928.0023)

### The Clifford algebra universal property gives the parity automorphism

**Remember:** Negating a generator preserves its square, so negation extends uniquely to the algebra.

*True by definition.* MSC 15A66 (Clifford algebras, spinors), 16S10. arXiv math.RA. Level 3: graduate.

**Definition.** For a quadratic form Q on a vector space V, its Clifford algebra has a linear map i satisfying i(v)² = Q(v)1 for every v. Every linear map from V into a unital algebra satisfying the same relation factors uniquely through i by a unital algebra homomorphism.

**Problem.** The Clifford algebra has an automorphism α sending i(v) to −i(v) and satisfying α² = 1. Over a field of characteristic other than two, its two eigenspaces give its even and odd parts.

**How the definition helps.** Negation preserves the square relation, so the universal property extends it to α. The square of α fixes every generator, hence equals the identity by uniqueness. Outside characteristic two, (x + α(x))/2 and (x − α(x))/2 give the even and odd components (our own calculation).

**Wikipedia:** [Clifford algebra](https://en.wikipedia.org/wiki/Clifford_algebra). It says: “the linear map on V defined by v ↦ −v (reflection through the origin) preserves the quadratic form Q and so by the universal property of Clifford algebras extends to an algebra automorphism”

**Sources:** none listed. No primary source with a working link was found.

### Border rank restores best approximations

**Remember:** Include rank limits so a minimizing sequence cannot leave the allowed set.

*Rules out counterexamples.* MSC 15A69 (Multilinear algebra, tensor calculus), 15A60. arXiv math.NA. Level 3: graduate.

**Definition.** In a finite-dimensional real tensor product, rank counts the fewest products of vectors that sum to a tensor. Border rank is the least r for which a sequence of tensors of rank at most r converges to the tensor.

**Problem.** For any norm and any nonnegative integer r, every tensor has a nearest tensor of border rank at most r. Ordinary rank can fail this test.

**How the definition helps.** The border-rank bound defines a closed set, so a bounded minimizing sequence has a subsequence converging to a minimizer (our own proof). In the standard basis of ℝ², e₂⊗e₁⊗e₁ + e₁⊗e₂⊗e₁ + e₁⊗e₁⊗e₂ has rank three and border rank two. Its distance to rank at most two is zero, but no tensor of that rank attains it.

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

**Definition.** For a homogeneous complex polynomial, collect all partial derivatives of a fixed order k, from zero through its degree. Their coefficient vectors form the columns of a matrix called a catalecticant. Symmetric border rank is the least r allowing approximation by sums of r powers of linear forms, with convergence of every coefficient.

**Problem.** Every catalecticant rank bounds symmetric border rank from below. For the sth power of a sum of n variable squares, the order-s matrix gives the bound (s+n−1 choose s).

**How the definition helps.** Every order-k derivative of a power of one linear form is proportional to its remaining power (our own argument). Summing r powers gives catalecticant rank at most r. Larger minors still vanish in coefficientwise limits. For the stated power of the quadratic form, the separate full-rank calculation gives the displayed bound.

**Paper or page:** [Upper bounds for the rank of powers of quadrics](https://arxiv.org/abs/2305.06470v3). It says: “rk(qₙˢ) ≥ brk(qₙˢ) ≥ rk(Catˢ(qₙˢ))”

**Sources:**

- [Cosimo Flavi, Upper bounds for the rank of powers of quadrics](https://arxiv.org/abs/2305.06470v3)

### Universal-property tensor products make tensoring preserve quotients

**Remember:** Factoring through a quotient amounts to vanishing on its relations.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus), 13C05. arXiv math.AC. Level 3: graduate.

**Definition.** For modules M and N over a commutative ring, their tensor product carries a bilinear map from M × N. Every bilinear map from M × N into any module factors uniquely through it by a linear map.

**Problem.** Let U be a submodule of M. Then (M/U) ⊗ N is the quotient of M ⊗ N by the image of U ⊗ N. This is the right exactness of tensoring with N.

**How the definition helps.** Both quotients represent bilinear maps on M × N that vanish on U × N (our own argument). Such maps descend uniquely in their first input to M/U. The universal property therefore identifies the two modules.

**Paper or page:** [Stacks Project, Algebra, Lemma 10.12.10](https://stacks.math.columbia.edu/tag/00DF). It says: “In other words, the functor − ⊗ᵣ N is right exact, in the sense that tensoring each term in the original right exact sequence preserves the exactness.”

**Sources:**

- [Stacks Project, Algebra, Lemma 10.12.10](https://stacks.math.columbia.edu/tag/00DF)

### Defining exterior algebras by a universal property splits exterior powers of sums

**Remember:** Wedges from the two summands keep separate degrees and anticommute.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 3: graduate.

**Definition.** Define the exterior algebra of V as the algebra generated by V with v ∧ v = 0 for every v. Equivalently, every linear map from V into an algebra in which each image squares to zero extends uniquely to an algebra map. The coordinate construction uses ordered wedges of basis vectors, with signs for reordering.

**Problem.** Let V and W be vector spaces. The nth exterior power of V ⊕ W is a direct sum over i + j = n. Each summand is the ith exterior power of V tensored with the jth exterior power of W.

**How the definition helps.** The graded tensor product of the exterior algebras has the extension property for V ⊕ W (our own argument). Its two generator families anticommute, so the sum of their images squares to zero. Wedge multiplication gives the inverse map because both composites fix every generator. Taking degree n gives the stated direct sum.

**nLab:** [exterior algebra](https://ncatlab.org/nlab/show/exterior+algebra). It says: “the identity v ∧ v = 0 for all v ∈ V.”

**Sources:** none listed. No primary source with a working link was found.

### Universal property of exterior algebras gives Λ(V/W) as ΛV modulo W

**Remember:** Killing the subspace kills every wedge that contains one of its vectors.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 3: graduate.

**Definition.** Define the exterior algebra ΛV as the algebra generated by V with v ∧ v = 0 for every v. Equivalently, every linear map from V into an algebra in which each image squares to zero extends uniquely to an algebra map. The coordinate construction uses ordered wedges of basis vectors and signs.

**Problem.** For a subspace W of V, the exterior algebra of V/W is the quotient of ΛV by the two-sided ideal generated by W.

**How the definition helps.** Both algebras have the same universal property (our own argument). Maps from the algebra quotient correspond to linear maps on V that vanish on W and have square-zero images. These factor uniquely through linear maps on V/W with square-zero images.

**nLab:** [exterior algebra](https://ncatlab.org/nlab/show/exterior+algebra). It says: “Then the exterior algebra ΛV is generated by the elements of V using these operations:”

**Sources:** none listed. No primary source with a working link was found.

### Defining symmetric algebras as free commutative algebras makes the coproduct coassociative

**Remember:** Check coassociativity on generators, where both sides add three copies.

*True by definition.* MSC 15A78 (Other algebras built from modules), 16T05. arXiv math.QA, math.RA. Level 3: graduate.

**Definition.** Define the symmetric algebra SV as the free commutative algebra on V. So every linear map from V to a commutative algebra extends to exactly one algebra map from SV. The coordinate construction uses polynomials in the basis vectors.

**Problem.** The rule v ↦ v ⊗ 1 + 1 ⊗ v extends to an algebra map Δ from SV to SV ⊗ SV. This map is coassociative. Applying Δ again to the first tensor factor, or to the second, gives the same map into SV ⊗ SV ⊗ SV.

**How the definition helps.** The generator rule is linear and its target is commutative, so it extends uniquely (our own argument). Both iterates are algebra maps. Each sends v to v ⊗ 1 ⊗ 1 + 1 ⊗ v ⊗ 1 + 1 ⊗ 1 ⊗ v. Uniqueness makes them equal.

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “The symmetric algebra SV of a vector space is the free commutative algebra over V.”

**Sources:** none listed. No primary source with a working link was found.

### Trace matrices encode field multiplication

**Remember:** An invertible multiplier gives another nondegenerate trace form.

*True by definition.* MSC 15B33 (Matrices over special rings (quaternions, finite fields, etc.)), 15A63. arXiv math.RA, math.NT. Level 3: graduate.

**Definition.** Fix a basis for a degree-n extension L of a finite field k, with n ≥ 1. For each a ∈ L, define the matrix with entries Trᴸₖ(aeᵢeⱼ), where eᵢ and eⱼ are basis vectors.

**Problem.** For every n, there is an n-dimensional space of n-by-n symmetric matrices over a given finite field whose nonzero members are invertible.

**How the definition helps.** Our own proof places multiplication by a inside a symmetric pairing, so each matrix is automatically symmetric. The field trace pairing is nondegenerate, meaning each nonzero x pairs nontrivially with some y. Multiplication by nonzero a is invertible, so inserting it preserves nondegeneracy. Linearity in a then gives an injective map from the extension field to the space of symmetric matrices.

**Paper or page:** [Properties of determinantal polynomials of subspaces of matrices over a finite field](https://arxiv.org/abs/2112.07293v1). It says: “For any positive integer n, there exists an n-dimensional subspace of symmetric matrices”

**Sources:**

- [Rod Gow, Properties of determinantal polynomials of subspaces of matrices over a finite field](https://arxiv.org/abs/2112.07293v1)

### Choi rank counts Kraus terms

**Remember:** Each Kraus term contributes one outer product to the Choi matrix.

*True by definition.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A03. arXiv math.OA, quant-ph. Level 3: graduate.

**Definition.** For a linear map between complex matrix algebras, the Choi matrix is the block matrix of the images of the matrix units. A matrix unit has a single one and is otherwise zero. A Kraus term is the map X ↦ VXV∗ for a fixed V, where the star is the conjugate transpose.

**Problem.** For a completely positive map between complex matrix algebras, the fewest Kraus terms needed to represent it equals the rank of its Choi matrix.

**How the definition helps.** Our own explanation is that each Kraus term gives a rank-at-most-one outer product after stacking the columns of V into a vector. Conversely, each term in an eigenvector factorization of the positive Choi matrix gives one Kraus term. The work moves to Choi's theorem, which identifies complete positivity with positivity of the Choi matrix.

**Wikipedia:** [Choi's theorem on completely positive maps](https://en.wikipedia.org/wiki/Choi%27s_theorem_on_completely_positive_maps). It says: “any "square root" factorization of the Choi matrix CΦ = B∗B gives a set of Kraus operators.”

**Sources:**

- [Man-Duen Choi, Completely positive linear maps on complex matrices](https://doi.org/10.1016/0024-3795(75)90075-0)

### Path sums prove total positivity

**Remember:** Positive paths give positive minors when disjoint paths exist.

*True by definition. Confidence: medium.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices). arXiv math.RA, math.CO. Level 3: graduate.

**Definition.** Take a finite acyclic directed planar network with weighted edges and sources and sinks on two boundary arcs. Order each list so every vertex-disjoint family matches its selected sources and sinks in order. Matrix entry (i,j) sums the products of edge weights along all paths from source i to sink j.

**Problem.** A matrix is totally positive if every square submatrix has positive determinant. With positive edge weights, this holds exactly when every equally sized choice of sources and sinks admits vertex-disjoint connecting paths.

**How the definition helps.** Path sums replace a determinant with cancellation by a sum of positive terms. The Lindström–Gessel–Viennot identity cancels families that meet at a vertex. Our own deduction uses the boundary order to give every surviving family a positive sign. The sum is positive exactly when a family survives.

**Paper or page:** [Scaffoldings of Totally Positive Matrices and Line Insertion](https://arxiv.org/abs/2109.06369v1). It says: “where the sum is over all vertex-disjoint path systems from I to J”

**Sources:**

- [Karel Casteels, Scaffoldings of Totally Positive Matrices and Line Insertion](https://arxiv.org/abs/2109.06369v1)

### Positive exterior powers order eigenvalues

**Remember:** The dominant eigenvalue of each exterior power reveals the next eigenvalue.

*True by definition.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A18. arXiv math.RA. Level 3: graduate.

**Definition.** A real n × n matrix is totally positive when every minor of every positive size is strictly positive. Equivalently, each exterior power from order one through n has strictly positive entries in the increasing-index wedge basis.

**Problem.** A totally positive real square matrix has distinct positive eigenvalues.

**How the definition helps.** Order the eigenvalues by decreasing modulus, counting multiplicity (our own proof). The kth exterior power has eigenvalues given by products over k distinct indices. Perron–Frobenius gives a unique simple dominant positive eigenvalue for each exterior power, ruling out ties at consecutive indices. Each leading product is positive, so successive quotients give positive eigenvalues.

**nLab:** [totally positive matrix](https://ncatlab.org/nlab/show/totally+positive+matrix). It says: “Total positivity implies a number of remarkable properties; for example all eigenvalues are distinct and positive.”

**Sources:** none listed. No primary source with a working link was found.

### Positive limits keep eigenvalues nonnegative

**Remember:** Limits of positive eigenvalues can only stay positive or reach zero.

*True by definition.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A18. arXiv math.RA. Level 3: graduate.

**Definition.** Define total nonnegativity as being a limit of strictly totally positive matrices. A strictly totally positive matrix has all square minors positive. The usual definition of total nonnegativity asks that those minors be nonnegative.

**Problem.** Every totally nonnegative real square matrix has only real, nonnegative eigenvalues.

**How the definition helps.** In our own argument, the limit definition lets eigenvalue continuity pass positivity to nonnegativity. The work moves to the approximation theorem, which shows that matrices with nonnegative minors really are such limits. Our own argument also uses the positive spectrum theorem for strictly totally positive matrices.

**Paper or page:** [Characterizing total positivity: single vector tests via Linear Complementarity, sign non-reversal, and variation diminution](https://arxiv.org/abs/2103.05624v4). It says: “the set of m × n TPₖ matrices is dense in the set of m × n TNₖ matrices.”

**Sources:**

- [Projesh Nath Choudhury, Characterizing total positivity: single vector tests via Linear Complementarity, sign non-reversal, and variation diminution](https://arxiv.org/abs/2103.05624v4)

### Spectral bounds keep M-matrix inverses nonnegative

**Remember:** The strict spectral bound makes the geometric series converge.

*Rules out counterexamples.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A09. arXiv math.RA. Level 3: graduate.

**Definition.** Write a real matrix as sI − B with B entrywise nonnegative. A nonsingular M-matrix requires s to exceed the spectral radius of B, the largest modulus of its eigenvalues. The M-matrix definition without nonsingularity also allows equality.

**Problem.** A nonsingular M-matrix has an entrywise nonnegative inverse.

**How the definition helps.** The strict inequality makes (sI − B)⁻¹ the sum of the convergent series ∑ₖ≥₀ (B/s)ᵏ/s (our own proof). Every term is entrywise nonnegative. At equality, taking B as the two-by-two matrix of ones and s = 2 gives a kernel containing (1,1).

**Wikipedia:** [M-matrix](https://en.wikipedia.org/wiki/M-matrix). It says: “A is inverse-positive. That is, A⁻¹ exists and A⁻¹ ≥ 0.”

**Sources:**

- [Miroslav Fiedler and Vlastimil Pták, On matrices with non-positive off-diagonal elements and positive principal minors](https://doi.org/10.21136/CMJ.1962.100526)

### The pseudoinverse lets Wedderburn rank reduction work for singular blocks

**Remember:** Subtract only the directions that Y\*AX actually sees.

*Makes the theorem clean to state or prove.* MSC 15A09 (Theory of matrix inversion and generalized inverses), 15A03, 65F55. arXiv math.NA, math.RA. Level 4: research.

**Definition.** The Moore–Penrose pseudoinverse M⁺ undoes M from its column space back to its row space. It sends the orthogonal complement of the column space to zero. Wedderburn's formula forms A − AX(Y\*AX)⁻¹Y\*A when Y\*AX is invertible, and the generalized formula uses (Y\*AX)⁺ instead.

**Problem.** For matrices A, X and Y of compatible sizes, rank(A − AX(Y\*AX)⁺Y\*A) = rank A − rank(Y\*AX). Here Y\*AX may be singular or even rectangular.

**How the definition helps.** The pseudoinverse exists for every matrix, making the correction meaningful at every rank. Put M = Y\*AX and P = AXM⁺Y\*. On the range of A, P is a projection onto AX(range M\*) because M⁺MM⁺ = M⁺ (our own argument). This image has dimension rank M since AX is injective on range M\*, giving the stated rank loss.

**Paper or page:** [Generalized Wedderburn Rank Reduction](https://arxiv.org/abs/2406.03992v1). It says: “We generalize the Wedderburn rank reduction formula by replacing the inverse with the Moore–Penrose pseudoinverse.”

**Sources:**

- [Oskar Kędzierski, Generalized Wedderburn Rank Reduction, arXiv:2406.03992v1 (2024)](https://arxiv.org/abs/2406.03992v1)
- [R. Penrose, A generalized inverse for matrices (1955)](https://doi.org/10.1017/s0305004100030401)

### Quasideterminants give matrix inversion over noncommutative rings

**Remember:** Subtract the ordered row–inverse–column product from the corner entry.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15B33, 15A09. arXiv math.RA. Level 4: research.

**Definition.** Delete row i and column j of a square matrix A over a unital ring to obtain B. Let r and c be the remaining portions of row i and column j, respectively. When B is invertible, define the quasideterminant \|A\|ᵢⱼ = aᵢⱼ − rB⁻¹c.

**Problem.** If all n² quasideterminants of A exist and are invertible, then A is invertible, and the (i, j) entry of A⁻¹ is (\|A\|ⱼᵢ)⁻¹.

**How the definition helps.** Permute row i and column j to the last positions (our own argument). Block elimination leaves B and the quasideterminant as invertible diagonal blocks. Back substitution gives the reciprocal quasideterminant as the last diagonal entry of the inverse. Undoing the permutations puts it in position (j,i).

**nLab:** [quasideterminant](https://ncatlab.org/nlab/show/quasideterminant). It says: “If all the n² quasideterminants \|A\|ᵢⱼ exist and are invertible then the inverse matrix A⁻¹ of A exists in Mₙ(R) and (\|A\|ⱼᵢ)⁻¹ = (A⁻¹)ⁱⱼ.”

**Sources:**

- [I. M. Gel'fand, V. S. Retakh, Determinants of matrices over noncommutative rings, Functional Analysis and Its Applications 25 (1991) 91–102](https://doi.org/10.1007/BF01079588)
- [I. Gelfand, V. Retakh, Quasideterminants, I, Selecta Mathematica 3 (1997) 517–546, arXiv:q-alg/9705026](https://arxiv.org/abs/q-alg/9705026)

### Congruence classifies pairs with invertible pivots

**Remember:** Cancel the left changes and keep only congruence on the right.

*True by definition.* MSC 15A21 (Canonical forms, reductions, classification), 15A30. arXiv math.RA. Level 4: research.

**Definition.** For complex square matrices E and Q, change the pair to (UEV, U⁻ᵀQV) with U and V invertible. Here U⁻ᵀ means the transpose of the inverse. Use EᵀQ as the matrix of the bilinear form associated to the pair.

**Problem.** Take two pairs whose first matrices are both invertible. They are equivalent exactly when their products EᵀQ are congruent, meaning one equals VᵀSV for the other product S and some invertible V.

**How the definition helps.** The product EᵀQ cancels the left changes of basis and records the right change by congruence. In our own proof, choosing U = E⁻¹ and V = I reduces each pair to (I,EᵀQ). On a reduced pair, choosing U = V⁻¹ realizes any congruence while preserving I. The classification of individual congruence classes remains a separate problem.

**Paper or page:** [Canonical forms for pairs of matrices associated with Lagrangian and Dirac subspaces](https://arxiv.org/abs/2510.25631v1). It says: “EᵀQ (respectively, E∗Q) is ᵀ-congruent (respectively, ∗-congruent) to E₁ᵀQ₁ (respectively, E₁∗Q₁).”

**Sources:**

- [Sweta Das, Andrii Dmytryshyn, Volker Mehrmann, Canonical forms for pairs of matrices associated with Lagrangian and Dirac subspaces](https://arxiv.org/abs/2510.25631v1)

### Strongly minimal linearizations exist for every rational matrix and keep its symmetry

**Remember:** Check the coupling blocks at infinity as well as at finite points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 15A22 (Matrix pencils), 15A54, 65H17. arXiv math.NA, math.RA. Level 4: research.

**Definition.** Write a system pencil in block rows (A,B) and (−C,D), with A square and regular and transfer matrix D + CA⁻¹B. Strong minimality requires \[A B\] to have full row rank and the stacked blocks A,C to have full column rank at every finite point. At infinity apply the same tests to the coefficients of λ.

**Problem.** Every rational matrix has a strongly minimal linearization, built from its Laurent expansion at infinity. If the matrix is Hermitian, skew-Hermitian, para-Hermitian or para-skew-Hermitian, the linearization can keep that structure.

**How the definition helps.** The paper names strong minimality as the key to covering every rational matrix. Earlier structure-preserving linearizations did not work for every structured rational or polynomial matrix. The rank conditions at infinity make the pencil also carry the matrix’s structure at infinity (our own). Building the blocks from the Laurent expansion and keeping the symmetry still takes work.

**Paper or page:** [Strongly minimal self-conjugate linearizations for polynomial and rational matrices](https://arxiv.org/abs/2110.12470v1). It says: “The fact that they are valid for any rational matrix is an improvement on any other previous approach for constructing other classes of structure preserving linearizations”

**Sources:**

- [Froilán M. Dopico, María C. Quintana, Paul Van Dooren, Strongly minimal self-conjugate linearizations for polynomial and rational matrices, arXiv:2110.12470v1 (2021)](https://arxiv.org/abs/2110.12470v1)
- [Froilán M. Dopico, María C. Quintana, Paul Van Dooren, Strongly Minimal Self-Conjugate Linearizations for Polynomial and Rational Matrices, SIAM Journal on Matrix Analysis and Applications 43 (2022) 1354–1381](https://doi.org/10.1137/21m1453542)

### Two matrix solvents with invertible difference solve second-order linear systems

**Remember:** Two solvents cover all initial data when their difference is invertible.

*Rules out counterexamples.* MSC 15A24 (Matrix equations and identities), 15A22, 34A30. arXiv math.NA. Level 4: research.

**Definition.** For square complex matrices B and C, a solvent is a matrix X with X² + BX + C = 0. Two solvents X and Z form a complete pair if X − Z is invertible.

**Problem.** Consider x″ + Bx′ + Cx = f. A complete pair X, Z reduces the initial value problem to computing the matrix exponentials exp(Xt) and exp(Zt).

**How the definition helps.** The homogeneous solution exp(Xt)a + exp(Zt)b matches any initial data because (X − Z)a = x′(0) − Zx(0) (our own argument). Set b = x(0) − a. Convolving the forcing with (exp(Xt) − exp(Zt))(X − Z)⁻¹ adds the solution with zero initial data. For x″ = 0, the sole solvent is zero and exponentials alone miss nonconstant linear solutions (our own example).

**Paper or page:** [A complete pair of solvents of a quadratic matrix pencil](https://arxiv.org/abs/2405.07210v1). It says: “Knowing a complete pair of solvents X and Z allows us to reduce the solution of the initial value problem to the calculation of two matrix exponentials”

**Sources:**

- [V. G. Kurbatov, I. V. Kurbatova, A complete pair of solvents of a quadratic matrix pencil, arXiv:2405.07210v1 (2024)](https://arxiv.org/abs/2405.07210v1)

### Optimizing over a joint numerical range removes false local minima

**Remember:** Optimize the three numbers the objective actually reads.

*Makes the theorem clean to state or prove.* MSC 15A60 (Norms of matrices, numerical range, applications of functional analysis to matrix theory), 90C26, 47A12. arXiv math.NA, math.OC. Level 4: research.

**Definition.** For three Hermitian matrices A₁, A₂, A₃ of the same size, their joint numerical range consists of all triples (x\*A₁x,x\*A₂x,x\*A₃x) with x\*x = 1.

**Problem.** Suppose the sum of generalized Rayleigh quotients is defined on the unit sphere and factors through this triple. A unit vector minimizes the sum globally exactly when its triple minimizes the induced objective globally. Every local minimum on the range lifts to local minima on the sphere, but the converse can fail.

**How the definition helps.** The objective factors through the map from unit vectors to triples, and the range is exactly its image, so global minima match (our own). A local minimum on the range lifts because the map is continuous (our own). Some local minima on the sphere do not come from local minima on the range, and these disappear. The paper also uses convexity of the range to describe the optimum by a nonlinear eigenvalue problem.

**Paper or page:** [Eigenvalue backward errors of Rosenbrock systems and optimization of sums of Rayleigh quotient](https://arxiv.org/abs/2407.03784v1). It says: “This reformulation eliminates certain local minimizers of the original SRQ2 minimization and allows for convenient visualization of the solution.”

**Sources:**

- [Ding Lu, Anshul Prajapati, Punit Sharma, Shreemayee Bora, Eigenvalue backward errors of Rosenbrock systems and optimization of sums of Rayleigh quotient, arXiv:2407.03784v1 (2024)](https://arxiv.org/abs/2407.03784v1)

### Gradient zeros make geometric rank additive

**Remember:** Separate variables make the gradient zero set a product.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.AG. Level 4: research.

**Definition.** View a complex symmetric tensor of degree at least two as a homogeneous polynomial. Its symmetric geometric rank is the number of variables minus the dimension of the set where every first derivative vanishes. This difference in dimensions is called codimension.

**Problem.** Symmetric geometric rank adds when two symmetric tensors of the same degree use disjoint variable sets.

**How the definition helps.** In our own proof, the sum has two independent gradients, so its zero set is the product of their zero sets. The work in our own account moves to the dimension theorem for products of algebraic sets. The codimensions add because the dimensions of the ambient spaces also add.

**Paper or page:** [The symmetric geometric rank of symmetric tensors](https://arxiv.org/abs/2303.17537v1). It says: “SGR(T₁ ⊕ T₂) = SGR(T₁) + SGR(T₂).”

**Sources:**

- [Julia Lindberg, Pierpaola Santarsiero, The symmetric geometric rank of symmetric tensors](https://arxiv.org/abs/2303.17537v1)

### Positive scaffoldings extend totally positive matrices

**Remember:** Add weights above the grid and read the new row from paths.

*True by definition.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices). arXiv math.RA. Level 4: research.

**Definition.** In a rectangular grid, orient edges left and down, with each row entrance on the right and each column exit below. Assign a positive weight to every edge. Each entry of the path matrix sums the products of weights along directed paths from its row entrance to its column exit.

**Problem.** Every totally positive matrix can gain a top row while keeping all minors positive.

**How the definition helps.** The positive grid parametrization theorem realizes every totally positive matrix as a path matrix of this grid. Add a top row with positive weights. Old paths cannot climb, and every minor of the larger grid admits disjoint paths (our own argument). The path determinant identity therefore makes every minor positive.

**Paper or page:** [Scaffoldings of Totally Positive Matrices and Line Insertion](https://arxiv.org/abs/2109.06369v1). It says: “the matrix X′ obtained from X by adding \[x₀₁ x₀₂ ⋯ x₀ₙ\] above the first row is totally positive.”

**Sources:**

- [Karel Casteels, Scaffoldings of Totally Positive Matrices and Line Insertion](https://arxiv.org/abs/2109.06369v1)
