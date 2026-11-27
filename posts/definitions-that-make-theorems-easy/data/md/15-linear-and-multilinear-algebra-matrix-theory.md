### Images bound product rank

**Remember:** A composition cannot gain independent outputs from either factor.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define the rank of a matrix as the dimension of its image, the space of all its outputs. One can instead use the largest size of a square submatrix with nonzero determinant.

**Problem.** For matrices A and B over the same field with AB defined, rank(AB) ≤ min(rank(A), rank(B)).

**How the definition helps.** The outputs of AB lie in the image of A and come from applying A to the image of B (our own). A linear map cannot increase the dimension of a subspace (our own). The work moves to proving that image dimension equals the largest size detected by determinants (our own).

**Wikipedia:** [Rank (linear algebra)](https://en.wikipedia.org/wiki/Rank_%28linear_algebra%29). It says: “rank(AB) ≤ min(rank(A), rank(B)).”

**Sources:** none listed. No primary source with a working link was found.

### Linear independence of families, not sets, matches the determinant test

**Remember:** Two equal columns make a dependent family, even as one set.

*Rules out counterexamples.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 15A15. arXiv math.RA. Level 1: early undergraduate.

**Definition.** An indexed family of vectors, such as the columns of a matrix, is independent if no member is a combination of finitely many other members. A family with the same vector twice is therefore dependent. A set of vectors is independent if it is independent as a family indexed by itself.

**Problem.** An n × n matrix is invertible if and only if its columns, as a family, are linearly independent. Equivalently, its determinant is nonzero.

**How the definition helps.** Treating the columns as a family counts a repeated column twice, so the independence test agrees with the determinant. Take the 2 × 2 matrix with both columns equal to v ≠ 0 (our own). Its determinant is 0. The set of its columns is {v}, which is independent, so a set-based statement would be false. The family (v, v) is dependent, as the page explains, so the family-based statement holds. What stays to prove is the link between independence and a nonzero determinant.

**Wikipedia:** [Linear independence](https://en.wikipedia.org/wiki/Linear_independence). It says: “These two notions are not equivalent: the difference being that in a family we allow repeated elements, while in a set we do not.”

**Sources:** none listed. No primary source with a working link was found.

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

### The empty set is independent, so the zero space has a basis

**Remember:** The zero space has the empty basis and dimension 0.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A set of vectors is linearly independent if no nontrivial finite linear combination of them is zero. The empty set satisfies this vacuously, because it has no nontrivial linear combinations. The empty set also spans the zero space.

**Problem.** Every vector space has a basis. Also, inside any spanning set, every independent set extends to a basis.

**How the definition helps.** Because the empty set is independent, the zero space {0} is not an exception. Its basis is the empty set, and its dimension is 0. The same fact starts the proof with Zorn's lemma. That proof needs the collection of independent sets to be nonempty, and the empty set is in it. The theorem for infinite-dimensional spaces still needs the axiom of choice.

**Wikipedia:** [Basis (linear algebra)](https://en.wikipedia.org/wiki/Basis_%28linear_algebra%29), [Dimension (vector space)](https://en.wikipedia.org/wiki/Dimension_%28vector_space%29). It says: “The set X is nonempty since the empty set is an independent subset of V”

**Sources:** none listed. No primary source with a working link was found.

### Homogeneity is needed in defining linear maps

**Remember:** Additive is enough over ℚ or 𝔽ₚ, and nowhere else.

*Rules out counterexamples.* MSC 15A04 (Linear transformations, semilinear transformations). arXiv math.RA. Level 1: early undergraduate.

**Definition.** A linear map between vector spaces over a field F satisfies f(u+v) = f(u) + f(v). It also satisfies f(cu) = c f(u) for every scalar c. The first condition is additivity, the second is homogeneity. The prime subfield is the smallest subfield, ℚ or 𝔽ₚ.

**Problem.** Can one drop homogeneity from the definition of a linear map? The paper answers this for every field.

**How the definition helps.** Homogeneity rules out additive maps that ignore the scalars, so a linear map is fixed by its values on a basis (our own example). Over a prime field, additivity alone gives homogeneity. Our own reason is that every scalar there is built from 1 by sums, differences and quotients. Over any larger field, Theorem 2.1 gives vector spaces and an additive map that is not linear. A familiar example of our own is complex conjugation on ℂ, which is additive but not ℂ-linear. For fields that are not prime, the abstract says homogeneity does not imply additivity either, so neither condition can be dropped.

**Paper or page:** [On the independence of conditions in the linear mapping definition (revised)](https://arxiv.org/abs/2208.12648v3). It says: “If F=k, then every additive mapping U→V with vector F-spaces U, V, is F-homogeneous (and therefore F-linear). If F≠k, then there exist vector F-spaces U and V and additive mapping U→V, which is not F-homogeneous.”

**Sources:**

- [Aslanbek Naziev, On the independence of conditions in the linear mapping definition (revised), arXiv:2208.12648 (2022)](https://arxiv.org/abs/2208.12648v3)

### Affine spaces include translated solution sets

**Remember:** Subtract one solution to turn all the rest into solutions with zero right side.

*Makes the theorem clean to state or prove.* MSC 15A06 (Linear equations (linear algebraic aspects)). arXiv math.RA. Level 1: early undergraduate.

**Definition.** An affine subspace is a translate of a linear subspace. Unlike a linear subspace, it need not contain the origin.

**Problem.** The solution set of a consistent linear system Ax = b is an affine subspace.

**How the definition helps.** Choosing one solution p makes the full solution set a translate of the kernel (our own). Indeed, x solves Ax = b exactly when A(x − p) = 0 (our own). The line x + y = 1 translates the line x + y = 0 and omits the origin (our own).

**nLab:** [affine space](https://ncatlab.org/nlab/show/affine+space). It says: “An affine space or affine linear space is a vector space that has forgotten its origin.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the determinant by its properties makes the product rule easy

**Remember:** Signed volume is linear in each side and zero when two sides coincide.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The determinant is the unique function of the columns of a square matrix with three properties. It is linear in each column, it is 0 when two columns are equal, and it is 1 on the identity matrix. A function with the first two properties is called alternating multilinear. You can also define the determinant as the unique function with det(AB) = det(A)det(B) that gives the product of the diagonal entries on triangular matrices.

**Problem.** The determinant is multiplicative: det(AB) = det(A)·det(B). Also, a matrix over a commutative ring is invertible exactly when its determinant is invertible.

**How the definition helps.** With the alternating-multilinear definition, the product rule follows from uniqueness. Our own summary of the standard argument: fix A and look at the function B ↦ det(AB). This function is alternating multilinear in the columns of B, so by uniqueness it equals det(A)·det(B). With the Leibniz formula (a sum over all permutations), the product rule needs a long computation (our own remark). Wikipedia uses the multiplicative definition as its primary one. Under that definition the product rule is true by definition. The work then moves to showing that such a function exists and is unique.

**Wikipedia:** [Determinant](https://en.wikipedia.org/wiki/Determinant). It says: “The determinant can be also defined as the unique alternating multilinear form of the columns (or the rows) that takes the value 1 on the identity matrix.”

**Sources:**

- [S. Lang, Linear Algebra, 3rd ed., Springer (1987); Wikipedia cites the 2nd ed., Addison-Wesley (1971)](https://doi.org/10.1007/978-1-4757-1949-9)

### Defining the determinant of an operator needs one basis-change lemma

**Remember:** Similar matrices have equal determinants, so the operator has one.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** The determinant of a linear operator A on a finite-dimensional space is the determinant of its matrix in some basis. A change of basis replaces the matrix M by P⁻¹MP for an invertible matrix P.

**Problem.** For a linear operator A on a nontrivial finite-dimensional vector space over a field, det A does not depend on the basis.

**How the definition helps.** Once det A is known not to depend on the basis, facts about operators come straight from the matrix case. An example is det(AB) = det A · det B. In our own proof, the lemma follows from det(P⁻¹MP) = det(P)⁻¹ det(M) det(P) = det M. So the work moves into the product rule for matrix determinants. The page asks for a nontrivial space, so the zero space is left out of this definition.

**Paper or page:** [Determinant of Linear Operator is Well Defined](https://proofwiki.org/wiki/Determinant_of_Linear_Operator_is_Well_Defined). It says: “Then the determinant det A of A is well defined, that is, does not depend on the choice of a basis of V.”

**Sources:**

- [ProofWiki, Determinant of Linear Operator is Well Defined](https://proofwiki.org/wiki/Determinant_of_Linear_Operator_is_Well_Defined)

### Defining the Vandermonde polynomial as a determinant makes swaps flip its sign

**Remember:** Swapping two variables swaps two rows, so the sign flips.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define the Vandermonde polynomial of x₁, …, xₙ as the determinant of the matrix whose ith row is 1, xᵢ, xᵢ², …, xᵢⁿ⁻¹. The product definition multiplies the differences xⱼ − xᵢ over all pairs i &lt; j.

**Problem.** Swapping two variables multiplies the product of the differences xⱼ − xᵢ, over all pairs i &lt; j, by −1.

**How the definition helps.** With this definition, swapping two variables swaps two rows, and a determinant changes sign when two rows swap. The nLab gives this argument. With only the product, one must count the factors that change sign under the swap. That count is odd, but the variables between the two swapped ones need care. The work moves into the Vandermonde factorization, which says that the determinant equals the product of differences.

**nLab:** [Vandermonde determinant](https://ncatlab.org/nlab/show/Vandermonde+determinant). It says: “because this corresponds to swapping the corresponding rows of the Vandermonde matrix”

**Sources:** none listed. No primary source with a working link was found.

### Giving the empty matrix determinant 1 removes an exception from matrix inversion

**Remember:** No rows, no columns, determinant one.

*Makes the theorem clean to state or prove.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A09. arXiv math.RA. Level 1: early undergraduate.

**Definition.** The determinant of the 0 × 0 matrix, which has no entries, is 1. This follows from the conventions for the empty set and the empty product. The Leibniz formula has one term, for the empty permutation, and that term is an empty product.

**Problem.** For every n ≥ 1, an n × n matrix A with nonzero determinant d has inverse (1/d) · adj(A). The entries of adj(A) are signed determinants of (n − 1) × (n − 1) submatrices.

**How the definition helps.** With the empty determinant equal to 1, the adjugate of a 1 × 1 matrix \[d\] is \[1\]. So the general formula gives the inverse \[1/d\]. Any other value would make the formula wrong for n = 1, so that case would need its own rule. The page calls this an example of the coherency of the conventions. The same value makes the expansion of a determinant along a row work for 1 × 1 matrices (our own). Nothing hard is left here: this is a convention that removes an exception. The real content is the general identity A · adj(A) = det(A) · I.

**Wikipedia:** [Determinant](https://en.wikipedia.org/wiki/Determinant). It says: “In the case n=1, the single entry of the adjugate matrix is the determinant of the empty matrix, which equals 1.”

**Sources:** none listed. No primary source with a working link was found.

### The adjugate works over any commutative ring, which proves Cayley–Hamilton

**Remember:** Adjugate times matrix is determinant times identity, in every commutative ring.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A24. arXiv math.RA. Level 1: early undergraduate.

**Definition.** The adjugate adj(M) of a square matrix M is the transpose of its matrix of cofactors. Each entry is a signed determinant of a smaller submatrix. It satisfies M · adj(M) = adj(M) · M = det(M) · I.

**Problem.** Every square matrix A over a commutative ring satisfies its own characteristic polynomial p(t) = det(tI − A). That is, p(A) = 0.

**How the definition helps.** The adjugate is defined by polynomials in the entries, with no division, so its basic identity holds over every commutative ring. In particular it holds for matrices of polynomials such as tI − A. Then (tI − A) · adj(tI − A) = p(t) · I is an identity of matrices with polynomial entries. Write both sides as polynomials in t with matrix coefficients. Putting t = A respects products only when A commutes with all the coefficients. Here the coefficients commute with A, and one can check this, or compare coefficients directly. The inverse formula adj(M)/det(M) is the special case where det(M) is a unit.

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

### Changing coordinates preserves eigenspace dimensions

**Remember:** The basis changes, but the vectors scaled by the map do not.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA. Level 1: early undergraduate.

**Definition.** Define similar matrices as matrices of the same linear map in different bases. The algebraic definition says B = S⁻¹AS for an invertible matrix S.

**Problem.** Similar matrices have the same eigenvalues and the same eigenspace dimension for each eigenvalue.

**How the definition helps.** Changing coordinates leaves the underlying map and its eigenspaces unchanged (our own). Coordinates in either basis therefore give each eigenspace the same dimension (our own). The work moves to deriving the formula B = S⁻¹AS for a change of basis (our own).

**Wikipedia:** [Change of basis](https://en.wikipedia.org/wiki/Change_of_basis). It says: “two matrices are similar if and only if they represent the same endomorphism on two different bases.”

**Sources:** none listed. No primary source with a working link was found.

### Eigenvectors must be nonzero, so eigenvalues are roots of the characteristic polynomial

**Remember:** Zero is fixed by every scale factor, so zero is never an eigenvector.

*Rules out counterexamples.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors). arXiv math.RA, math.SP. Level 1: early undergraduate.

**Definition.** An eigenvector of a linear map T is a nonzero vector v with T(v) = λv for some scalar λ. The scalar λ is then an eigenvalue. The eigenspace of λ is the set of its eigenvectors together with the zero vector.

**Problem.** A scalar λ is an eigenvalue of a square matrix A if and only if det(A − λI) = 0. So an n × n matrix has at most n eigenvalues.

**How the definition helps.** The zero vector satisfies T(0) = λ · 0 for every scalar λ, so allowing it would make every scalar an eigenvalue (our own). Asking for a nonzero v turns the eigenvalue question into the question whether A − λI has a nontrivial kernel. That is exactly the vanishing of a determinant, a polynomial of degree n in λ. The exclusion also makes the eigenspace notion work: the page adds the zero vector back by hand to get a subspace. Other facts need it too, such as that eigenvectors for distinct eigenvalues are linearly independent (our own). What stays hard is finding the roots, which may not exist in the base field.

**Wikipedia:** [Eigenvalues and eigenvectors](https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors). It says: “Equation (2) has a nonzero solution v if and only if the determinant of the matrix (A − λI) is zero.”

**Sources:** none listed. No primary source with a working link was found.

### Generalized eigenvectors give a Jordan basis when eigenvectors are too few

**Remember:** An eigenvector is killed by A − λI once; a generalized eigenvector by some power.

*Makes the theorem clean to state or prove.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A20. arXiv math.RA. Level 1: early undergraduate.

**Definition.** Let λ be an eigenvalue of a square matrix A. A generalized eigenvector of rank m for λ is a vector x with (A − λI)ᵐx = 0 but (A − λI)ᵐ⁻¹x ≠ 0. In words, the m-th power of A − λI sends x to 0, and no lower power does. Rank 1 gives an ordinary eigenvector.

**Problem.** Every square matrix whose eigenvalues lie in the field is similar to a Jordan normal form; every complex matrix is an example. A Jordan normal form is a block diagonal matrix of Jordan blocks. A Jordan block has one eigenvalue λ on the diagonal, 1 just above the diagonal, and 0 elsewhere.

**How the definition helps.** Generalized eigenvectors supply the basis vectors that ordinary eigenvectors cannot. Some matrices are not diagonalizable. Our own example is the 2 × 2 matrix with rows (0, 1) and (0, 0). Its eigenvalue 0 has algebraic multiplicity 2 (it is a double root of the characteristic polynomial), but it has only one independent eigenvector. The generalized eigenspace of each eigenvalue has dimension equal to the algebraic multiplicity, and Jordan chains give a basis of the whole space. A Jordan chain is a sequence x, (A − λI)x, (A − λI)²x, … whose last nonzero vector is an eigenvector. So the theorem is one statement with no exceptions for defective eigenvalues (eigenvalues with too few eigenvectors). It still needs the eigenvalues to lie in the field, which is automatic when the field is algebraically closed.

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

**Problem.** Every matrix is row equivalent to exactly one matrix in reduced row echelon form. So two matrices of the same size have the same reduced form exactly when they are row equivalent. Row equivalent matrices are those with the same row space.

**How the definition helps.** The two extra rules remove the freedoms that echelon forms still have. The page names these freedoms: multiplying a row by a nonzero scalar, and adding a multiple of a row to a row above it. Both keep a matrix in echelon form, so echelon form alone is not unique. Making each pivot 1 removes the first freedom, and clearing the entries above each pivot removes the second (our own). What the definition leaves to prove is that row equivalent reduced matrices are equal. A short proof compares the solution sets of the two homogeneous systems (our own).

**Wikipedia:** [Row echelon form](https://en.wikipedia.org/wiki/Row_echelon_form). It says: “While a matrix may have several echelon forms, its reduced echelon form is unique.”

**Sources:** none listed. No primary source with a working link was found.

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

**How the definition helps.** The matrix definition makes the result a consequence of multiplicativity of determinants. Take the nonnegative square root of det(AB) = det(A) det(B). The usual pair representation gives the same result by expanding a two-square identity. Our own comparison moves the work into checking that these matrices are closed under multiplication and that their product gives the pair rule. The determinant a² + b² identifies the matrix absolute value with the usual one.

**Wikipedia:** [Complex number](https://en.wikipedia.org/wiki/Complex_number). It says: “This isomorphism associates the square of the absolute value of a complex number with the determinant of the corresponding matrix, and the conjugate of a complex number with the transpose of the matrix.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the matrix product as composition makes associativity automatic

**Remember:** Multiply matrices by composing maps, and brackets stop mattering.

*True by definition.* MSC 15A30 (Algebraic systems of matrices), 15A04. arXiv math.RA. Level 1: early undergraduate.

**Definition.** Binet defined the product of matrices so that it represents the composition of the linear maps they represent. If A is the matrix of a map f and B is the matrix of g, then BA is the matrix of g after f. The usual row-by-column formula follows from this.

**Problem.** For matrices of matching sizes, (AB)C = A(BC). With distributivity, this makes the n × n matrices a ring with the identity matrix as unit.

**How the definition helps.** Composition of functions is associative for every kind of function, so the product that represents composition is associative too. The page says that a direct proof with the row-by-column formula needs straightforward but complicated manipulations of sums. With the composition view, the only work is to check that the row-by-column formula gives the matrix of the composite (our own). The same view explains why the product is not commutative: composition of maps is not commutative (our own). It also explains rotation matrices, whose product is the rotation by the sum of the angles (our own).

**Wikipedia:** [Matrix multiplication](https://en.wikipedia.org/wiki/Matrix_multiplication). It says: “This result also follows from the fact that matrices represent linear maps. Therefore, the associative property of matrices is simply a specific case of the associative property of function composition.”

**Sources:**

- [Cayley, A. (1858). A memoir on the theory of matrices. Philosophical Transactions of the Royal Society of London 148.](https://doi.org/10.1098/rstl.1858.0002)

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

### Quadratic forms make sums of positive definite matrices positive definite

**Remember:** At each nonzero vector, the form of the sum adds two positive numbers.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products), 15A18. arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a real symmetric matrix M, the quadratic form of M is the function x ↦ xᵀMx. The matrix is positive definite if this value is positive at every nonzero vector x. An equivalent definition requires every eigenvalue of M to be positive.

**Problem.** The sum of two real symmetric positive definite matrices of the same size is positive definite.

**How the definition helps.** The quadratic form definition makes the sum positive by adding two positive numbers at each nonzero vector. The eigenvalue test does not give that proof, because the eigenvalues of the sum need not be sums of corresponding eigenvalues. The work is in the spectral theorem, which gives an orthonormal basis of eigenvectors for each real symmetric matrix. In that basis the form is a sum of squares weighted by the eigenvalues. This account of the comparison is our own.

**Wikipedia:** [Definite matrix](https://en.wikipedia.org/wiki/Definite_matrix). It says: “If M and N are positive-definite, then the sum M + N is also positive-definite.”

**Sources:** none listed. No primary source with a working link was found.

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

**How the definition helps.** The coordinate definition gives distributivity by applying the real-number distributive law to each term. With the geometric definition, fix a nonzero u and project v onto the line through u. The dot product is \|u\| times that projection’s signed length. Distributivity then needs a proof that signed projections add (our own comparison). The work also moves into proving that the two definitions agree. One proof uses the geometric law of cosines to express the squared distance in terms of the angle (our own).

**Wikipedia:** [Dot product](https://en.wikipedia.org/wiki/Dot_product). It says: “The dot product may be defined algebraically or geometrically. The geometric definition is based on the notions of angle and distance (magnitude) of vectors. The equivalence of these two definitions relies on having a Cartesian coordinate system for Euclidean space.”

**Sources:** none listed. No primary source with a working link was found.

### The determinant definition makes the cross product orthogonal to both inputs

**Remember:** A repeated row makes the determinant zero.

*True by definition. Confidence: medium.* MSC 15A72 (Vector and tensor algebra, theory of invariants), 15A15. arXiv math.RA. Level 1: early undergraduate.

**Definition.** For a and b in ℝ³, define a × b as the unique v with v · c = det(a, b, c) for every c. The determinant uses a, b and c as rows, in that order. An alternative definition uses the three coordinates of a × b directly.

**Problem.** For all a and b in ℝ³, the cross product a × b is orthogonal to both a and b.

**How the definition helps.** The determinant definition turns each orthogonality check into a determinant with a repeated row. Set c = a or c = b to get zero. A coordinate proof multiplies out and cancels terms (our own). The work is in showing that the linear function c ↦ det(a, b, c) is the dot product with a unique vector. Its values on the three standard basis vectors give the usual coordinate formula (our own).

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

**Problem.** The spectral theorem: a matrix has an orthonormal basis of eigenvectors if and only if it is normal.

**How the definition helps.** The definition takes an easy necessary condition, and the theorem says that it is also sufficient. The condition is necessary because a diagonal matrix commutes with its conjugate transpose, and a unitary change of basis keeps that property. The article's proof of sufficiency is short. By the Schur decomposition, A is unitarily similar to an upper triangular matrix. A normal upper triangular matrix must be diagonal. The article then reads off two more facts. A normal matrix is Hermitian exactly when its eigenvalues are real, and unitary exactly when its eigenvalues lie on the unit circle.

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

### Defining rank by fewest rank-one summands bounds ranks of entrywise products

**Remember:** Each pair of rank-one summands gives one rank-one summand.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 15A69. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define the rank of a matrix as the least number of rank-one matrices, each a column times a row, that sum to it. The usual definition takes the dimension of the column space.

**Problem.** For two matrices A and B of the same size over a field, rank(A ∘ B) ≤ rank(A) · rank(B). Here A ∘ B is the entrywise product.

**How the definition helps.** With this definition, the bound comes from expanding a product of two sums. Write A as a sum of r terms xᵢyᵢᵀ and B as a sum of s terms uⱼvⱼᵀ. The entrywise product of xyᵀ and uvᵀ is (x ∘ u)(y ∘ v)ᵀ, which has rank at most one. So A ∘ B is a sum of rs rank-one terms. The usual proof sees A ∘ B as a submatrix of the Kronecker product, the block matrix of all products of entries. The work moves into the theorem that the two definitions of rank agree. The cited paper states the bound, and the proof steps are our own.

**Paper or page:** [Computational Resolution of Hadamard Product Factorization for 4 × 4 Matrices](https://arxiv.org/abs/2508.14901). It says: “rank(A ∘ B) ≤ rank(A) · rank(B).”

**Sources:** none listed. No primary source with a working link was found.

### Defining the double dual map by evaluation makes it natural

**Remember:** A vector reaches its double dual by evaluation, which needs no basis.

*True by definition.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 15A04. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Send a vector v to the functional on the dual space that evaluates each linear functional at v. This uses no basis. A basis-based identification instead sends each basis vector to the dual of its dual basis vector.

**Problem.** Let f: V → W be any linear map. Applying f and then evaluation gives the same result as applying evaluation and then the double transpose of f. For finite-dimensional spaces, evaluation is an isomorphism.

**How the definition helps.** With this definition, both routes send v to the functional ψ ↦ ψ(f(v)), so naturality is immediate. The basis-based identification fails this test for most maps, because it changes when the basis changes. The work moves into proving that evaluation is an isomorphism in finite dimension. A dual basis shows that it is injective, and both spaces have the same dimension. The nLab states that evaluation is a natural transformation. The proof steps are our own.

**nLab:** [dual vector space](https://ncatlab.org/nlab/show/dual+vector+space). It says: “There is a natural transformation from V to its double dual:”

**Sources:** none listed. No primary source with a working link was found.

### Defining the pseudoinverse geometrically makes it give the shortest least-squares solution

**Remember:** Project for the best fit, then invert away from the kernel.

*True by definition.* MSC 15A09 (Theory of matrix inversion and generalized inverses), 15A10. arXiv math.NA, math.RA. Level 2: later undergraduate.

**Definition.** For a matrix A, define A⁺b in two steps. First project b orthogonally onto the range of A. Then take the unique preimage of that projection that is perpendicular to the kernel of A. The algebraic definition is the unique matrix X that satisfies the four Penrose equations, such as AXA = A and XAX = X.

**Problem.** For every vector b, the vector A⁺b minimizes ‖Ax − b‖. Among all minimizers, it is the unique one of least length.

**How the definition helps.** With this definition, both claims follow from the two steps of the construction. By Pythagoras, the minimizers of ‖Ax − b‖ are the x for which Ax is the projection of b. These minimizers are A⁺b plus the vectors of the kernel of A. Since A⁺b is perpendicular to the kernel, Pythagoras again makes it the shortest. The work moves into the orthogonal splitting of the space into the kernel and its complement, and into checking the Penrose equations. The geometric proof here is our own.

**Wikipedia:** [Moore–Penrose inverse](https://en.wikipedia.org/wiki/Moore%E2%80%93Penrose_inverse). It says: “to compute a "best fit" (least squares) approximate solution to a system of linear equations that lacks an exact solution”

**Sources:**

- [Roger Penrose, On best approximate solutions of linear matrix equations (1956)](https://doi.org/10.1017/S0305004100030929)

### The four Penrose conditions make the pseudoinverse exist and be unique

**Remember:** Two conditions give a partial inverse; two symmetry conditions make it unique.

*Makes the theorem clean to state or prove.* MSC 15A09 (Theory of matrix inversion and generalized inverses), 15A10. arXiv math.RA, math.NA. Level 2: later undergraduate.

**Definition.** A pseudoinverse of an m × n matrix A is an n × m matrix A⁺ that meets four conditions. The first two are AA⁺A = A and A⁺AA⁺ = A⁺. The last two say that AA⁺ and A⁺A are both Hermitian (equal to their own conjugate transpose).

**Problem.** Every real or complex matrix, of any shape and rank, has exactly one pseudoinverse. Also, A⁺b is the least-squares solution of Ax = b with the smallest norm.

**How the definition helps.** The two symmetry conditions remove all freedom, so every matrix has exactly one pseudoinverse. An ordinary inverse exists only for square invertible matrices. A matrix that meets only AA⁺A = A is a generalized inverse. Generalized inverses always exist, but they are not unique. With the two symmetry conditions added, every matrix has one and only one, so singular and rectangular matrices are no exception. The price is that the map A ↦ A⁺ is not continuous. It is continuous only along sequences of matrices with constant rank.

**Wikipedia:** [Moore–Penrose inverse](https://en.wikipedia.org/wiki/Moore%E2%80%93Penrose_inverse). It says: “Generalized inverses always exist but are not in general unique. Uniqueness is a consequence of the last two conditions.”

**Sources:**

- [Moore, E. H. (1920). On the reciprocal of the general algebraic matrix. Abstract in: The fourteenth western meeting of the American Mathematical Society, Bulletin of the American Mathematical Society 26(9), 385–397 (abstract on pp. 394–395).](https://doi.org/10.1090/S0002-9904-1920-03322-7)
- [Penrose, R. (1955). A generalized inverse for matrices. Proceedings of the Cambridge Philosophical Society 51(3), 406–413.](https://doi.org/10.1017/S0305004100030401)

### Defining κ(A) as ‖A‖‖A⁻¹‖ makes κ(AB) ≤ κ(A)κ(B) immediate

**Remember:** Bound the matrices and their inverses separately, then multiply.

*True by definition. Confidence: medium.* MSC 15A12 (Conditioning of matrices), 65F35. arXiv math.NA. Level 2: later undergraduate.

**Definition.** For an invertible matrix A and an induced matrix norm, define the condition number κ(A) = ‖A‖ ‖A⁻¹‖. The sensitivity definition takes the largest ratio of the relative error in the solution x of Ax = b to the relative error in b. The largest ratio is taken over all b and all errors in b. A standard theorem shows that the two definitions agree.

**Problem.** For invertible matrices A and B of the same size, κ(AB) ≤ κ(A)κ(B).

**How the definition helps.** With the norm-product definition, the inequality is two uses of the bound ‖XY‖ ≤ ‖X‖ ‖Y‖. One use bounds ‖AB‖. The other bounds ‖(AB)⁻¹‖ = ‖B⁻¹A⁻¹‖. From the sensitivity definition, a direct proof would have to follow errors through two solves. The work goes into the theorem that the sensitivity definition equals ‖A‖ ‖A⁻¹‖. Wikipedia gives the sensitivity definition. The argument is our own.

**Wikipedia:** [Condition number](https://en.wikipedia.org/wiki/Condition_number). It says: “The condition number is defined more precisely to be the maximum ratio of the relative error in x to the relative error in b.”

**Sources:** none listed. No primary source with a working link was found.

### Defining characteristic coefficients as exterior-power traces makes them principal minor sums

**Remember:** Each characteristic coefficient is the trace on one wedge degree.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Let A act on the kth exterior power, the space of wedge products of k vectors. Define the kth characteristic coefficient of A as the trace of that action. The usual definition takes (−1)ᵏ times the coefficient of tⁿ⁻ᵏ in det(tI − A).

**Problem.** Let A be an n × n matrix. The coefficient of tⁿ⁻ᵏ in det(tI − A) is (−1)ᵏ times the sum of all k × k principal minors of A. A principal minor uses the same index set for its rows and its columns.

**How the definition helps.** With this definition, the theorem only reads off a trace. The diagonal entries of the matrix of the kth exterior power are exactly the k × k principal minors. The work moves into showing that these traces are the coefficients of det(tI − A). For that, expand the action of tI − A on the top wedge and choose the k slots where A acts. Wikipedia states both facts. The proof steps are our own.

**nLab:** [determinant](https://ncatlab.org/nlab/show/determinant). It says: “It is called the jth alternating power (of V).”

**Wikipedia:** [Characteristic polynomial](https://en.wikipedia.org/wiki/Characteristic_polynomial). It says: “This trace may be computed as the sum of all principal minors of A of size k.”

**Sources:** none listed. No primary source with a working link was found.

### Defining compound matrices by exterior powers makes Cauchy–Binet a composition rule

**Remember:** Composing maps composes their exterior powers, so compound matrices multiply.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define the rth compound matrix of A as the matrix of the map that A induces on the rth exterior power. That power is spanned by wedge products of r vectors, which change sign when two vectors swap. Its basis is the ordered wedges of r basis vectors. The usual definition lists the r × r minors, the determinants of square submatrices, in a fixed order.

**Problem.** Let A and B be matrices that can be multiplied. Each r × r minor of AB is a sum over the r-element index sets K. Each term is the minor of A with columns K times the minor of B with rows K.

**How the definition helps.** With this definition, the compound matrix of AB belongs to a composite map, so it is the product of the two compound matrices. One entry of that product is the formula. The work moves into one lemma, that the matrix of the exterior power has the minors as entries. That lemma comes from expanding the image of a basis wedge and collecting signs. Wikipedia states the product rule and its link to Cauchy–Binet. The proof steps are our own.

**Wikipedia:** [Compound matrix](https://en.wikipedia.org/wiki/Compound_matrix). It says: “It is closely related to, and is a strengthening of, the Cauchy–Binet formula.”

**Paper or page:** [Cauchy-Binet Formula](https://proofwiki.org/wiki/Cauchy-Binet_Formula). It says: “Let A be an m × n matrix. Let B be an n × m matrix.”

**Sources:** none listed. No primary source with a working link was found.

### Defining determinants on the top exterior power makes block triangular determinants multiply

**Remember:** The top wedge of the whole space splits into subspace and quotient parts.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a space V of dimension n, the top exterior power is the line spanned by the wedge product of any basis. Define the determinant of a linear map as the scalar by which it acts on this line. The usual definition is a signed sum over permutations of products of matrix entries.

**Problem.** Let a linear map A on V preserve a subspace W. Then det A is the determinant on W times the determinant of the induced map on V/W. In matrix terms, a block triangular matrix has determinant equal to the product of the determinants of its diagonal blocks.

**How the definition helps.** With this definition, the theorem reduces to one natural isomorphism of lines that A respects. The isomorphism joins a wedge of a basis of W with a wedge of lifts of a basis of V/W. Different lifts only add terms with too many vectors from W, and those terms are zero. So the line for V is the tensor product of the lines for W and V/W, and A acts on each factor. One must also show that this determinant equals the permutation formula. The nLab gives only the determinant line. These steps are our own.

**nLab:** [determinant line](https://ncatlab.org/nlab/show/determinant+line). It says: “its determinant line is the 1-dimensional vector space”

**Sources:** none listed. No primary source with a working link was found.

### Defining the adjugate through the wedge pairing makes adj(AB) equal adj(B) adj(A)

**Remember:** Exterior powers keep the order of composition, and composing on the right reverses it.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 2: later undergraduate.

**Definition.** On an n-dimensional space V, wedging pairs V with the (n − 1)th exterior power, the space of alternating products of n − 1 vectors. The result lies in a line, the top exterior power, so V becomes the maps from the (n − 1)th power to it. Define the adjugate of T through this identification, by composing such maps with the (n − 1)th exterior power of T. The usual definition is the transpose of the matrix of cofactors, which are signed minors.

**Problem.** For n × n matrices A and B over a commutative ring, with n ≥ 1, adj(AB) = adj(B) adj(A).

**How the definition helps.** With this definition, the order reversal is the usual rule for composing on the right. Exterior powers compose in the same order as the maps, and composing on the right reverses that order. The usual proof checks the identity first for invertible matrices and then extends it by a density or polynomial argument. The work moves into checking that the abstract adjugate has the cofactor matrix. Wikipedia does that check on basis wedges. The step from the definition to the product rule is our own.

**Wikipedia:** [Adjugate matrix](https://en.wikipedia.org/wiki/Adjugate_matrix). It says: “The adjugate can be viewed in abstract terms using exterior algebras.”

**Sources:** none listed. No primary source with a working link was found.

### Defining trace as the derivative of det at I gives Jacobi's formula

**Remember:** Move the derivative to the identity, where it becomes the trace.

*True by definition. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions). arXiv math.RA. Level 2: later undergraduate.

**Definition.** Define the trace of a square matrix X as the derivative of det(I + tX) at t = 0. This is the first-order change of the determinant at the identity matrix. The usual definition adds the diagonal entries.

**Problem.** For a differentiable path A(t) of invertible real matrices, (det A)′ = det A · tr(A⁻¹A′).

**How the definition helps.** With this definition, the formula needs only the product rule for determinants. Write A(t + h) as A(t)(I + hA⁻¹A′) plus terms of order smaller than h. Take determinants and read off the first-order term. The usual proof instead expands by cofactors and uses the adjugate. The work moves into showing that the derivative at the identity is the diagonal sum. In the permutation formula for det(I + tX), only the identity permutation gives a term of degree one in t. Wikipedia states that the differential at the identity is the trace, and the proof steps are our own.

**Wikipedia:** [Jacobi's formula](https://en.wikipedia.org/wiki/Jacobi%27s_formula). It says: “the differential of det, evaluated at the identity matrix, is equal to the trace.”

**Sources:** none listed. No primary source with a working link was found.

### Companion maps defined as multiplication by x have minimal polynomial p

**Remember:** A polynomial in the companion map multiplies by that polynomial.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A21. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a monic polynomial p of degree n ≥ 1, let C be multiplication by x on F\[x\]/(p), the polynomials modulo p. The usual definition is the companion matrix. It has ones just below the diagonal, the negated lower coefficients of p in the last column, and zeros elsewhere. That matrix is the matrix of C in the basis 1, x, …, xⁿ⁻¹.

**Problem.** The minimal polynomial of the companion matrix of p is p itself.

**How the definition helps.** With this definition, q(C) is multiplication by q, because C is multiplication by x. Multiplication by q is zero exactly when it sends the class of 1 to zero. That happens exactly when p divides q. So the polynomials that kill C are the multiples of p. With only the matrix, one must instead show that e₁, Ce₁, …, Cⁿ⁻¹e₁ are independent. The work moves into checking that the matrix of C is the companion matrix. Wikipedia states the result, and the proof steps are our own.

**Wikipedia:** [Companion matrix](https://en.wikipedia.org/wiki/Companion_matrix). It says: “the minimal polynomial of C(p) are equal to p(x).”

**Sources:** none listed. No primary source with a working link was found.

### Defined by power growth, spectral radius is submultiplicative for commuting matrices

**Remember:** Powers of a commuting product split, so their growth rates multiply.

*True by definition. Confidence: medium.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A42. arXiv math.RA, math.NA. Level 2: later undergraduate.

**Definition.** Fix an induced matrix norm. Define the spectral radius ρ(A) of a square complex matrix as the limit of the kth root of ‖Aᵏ‖ as k grows. The usual definition is the largest absolute value of an eigenvalue. Gelfand's formula says that they agree.

**Problem.** If two complex square matrices A and B commute, then ρ(AB) ≤ ρ(A)ρ(B).

**How the definition helps.** With the growth definition, the inequality follows from one identity and one norm bound. Because AB = BA, (AB)ᵏ = AᵏBᵏ, so ‖(AB)ᵏ‖ ≤ ‖Aᵏ‖ ‖Bᵏ‖. Take kth roots and let k grow. With the eigenvalue definition, one needs a common triangular form of A and B instead. Without commuting the bound fails: two nilpotent 2 × 2 matrices can have a product with spectral radius 1. The work goes into Gelfand's formula, which the ProofWiki entry states. The rest of the argument is our own.

**Paper or page:** [Gelfand's Spectral Radius Formula/Bounded Linear Operator](https://proofwiki.org/wiki/Gelfand's_Spectral_Radius_Formula/Bounded_Linear_Operator). It says: “\|σ(T)\| = lim<sub>n → ∞</sub> (‖Tⁿ‖<sub>B(X)</sub>)<sup>1/n</sup>”

**Sources:** none listed. No primary source with a working link was found.

### Defining singular values as distances to lower-rank matrices makes them Lipschitz

**Remember:** Distance to a fixed set changes by at most the distance moved.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A42, 15A60. arXiv math.NA, math.FA. Level 2: later undergraduate.

**Definition.** Define the kth singular value σₖ(A) as the distance, in operator norm, from A to the matrices of rank less than k. The operator norm of a matrix is the largest factor by which it stretches a unit vector. The usual definition takes the kth largest square root of an eigenvalue of A\*A, where A\* is the conjugate transpose.

**Problem.** For matrices A and B of the same size, \|σₖ(A) − σₖ(B)\| is at most the operator norm of A − B, for every k.

**How the definition helps.** With this definition, the theorem is a general fact about the distance from a point to a fixed set. By the triangle inequality, that distance changes by at most how far the point moves. The work moves into the Eckart–Young–Mirsky theorem, which says that this distance is the usual singular value. The cited paper states that theorem. The short argument here is our own.

**Paper or page:** [Generalizing the SVD of a matrix under non-standard inner product and its applications to linear ill-posed problems](https://arxiv.org/abs/2312.10403). It says: “‖A − Âₖ‖₂ = σ̂ₖ₊₁.”

**Sources:**

- [L. Mirsky, Symmetric gauge functions and unitarily invariant norms (1960)](https://doi.org/10.1093/qmath/11.1.50)

### Letting matrices act on matrices makes the Cayley–Hamilton substitution legitimate

**Remember:** Let coefficients act on the left and the variable on the right.

*True by definition.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A15. arXiv math.RA. Level 2: later undergraduate.

**Definition.** Fix a square matrix A over a commutative ring with identity. Let matrix coefficients act by left multiplication on matrices. Let the polynomial variable act by right multiplication by A. These two actions commute, so they define a polynomial action.

**Problem.** Every square matrix over a commutative ring with identity satisfies its characteristic polynomial. The method also proves a version for commuting matrices a₁, …, aₙ and matrices f₁, …, fₙ with f₁a₁ + … + fₙaₙ = 0. Then det(f₁X₁ + … + fₙXₙ) vanishes at (a₁, …, aₙ).

**How the definition helps.** The action makes it legal to substitute A for X, although the matrix coefficients need not commute with A. Under the action, XI − A sends the identity matrix to A − A = 0, in our own calculation. The adjugate identity adj(XI − A)·(XI − A) = χ(X)·I holds for matrices over the polynomial ring R\[X\]. Applying both sides to the identity matrix gives χ(A) = 0, by our own step. The remaining work is the adjugate identity over a commutative ring.

**Paper or page:** [Proof of Cayley-Hamilton theorem using polynomials over the algebra of module endomorphisms](https://arxiv.org/abs/2105.09285v2), [Proof of Cayley-Hamilton theorem using polynomials over the algebra of module endomorphisms](https://arxiv.org/abs/2105.09285v2). It says: “These structures provide a very short proof of the Cayley-Hamilton theorem, which may be viewed as a reformulation of the proof in Algebra by Serge Lang.”

**Sources:**

- [Alexey Muranov, Proof of Cayley-Hamilton theorem using polynomials over the algebra of module endomorphisms, Linear Algebra and its Applications 645 (2022), 165–169](https://arxiv.org/abs/2105.09285v2)

### Minimal polynomials as ideal generators give least common multiples for direct sums

**Remember:** A polynomial kills a direct sum exactly when it kills both parts.

*True by definition. Confidence: medium.* MSC 15A18 (Eigenvalues, singular values, and eigenvectors), 15A21. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The polynomials p with p(A) = 0 form an ideal in F\[t\], and each nonzero ideal there has one monic generator. Define the minimal polynomial of A as that generator. The usual definition takes the monic polynomial of least degree that kills A.

**Problem.** Let A act on V and B act on W, both finite-dimensional. The minimal polynomial of A ⊕ B on V ⊕ W is the least common multiple of the minimal polynomials of A and B.

**How the definition helps.** With this definition, the theorem becomes a statement about ideals. A polynomial kills A ⊕ B exactly when it kills both A and B. So the ideal for A ⊕ B is the intersection of the two ideals. In F\[t\], the least common multiple of two generators generates the intersection of their ideals. The work moves into showing that the generator is the least-degree monic annihilator, by polynomial division. Wikipedia gives the ideal definition. The proof steps are our own.

**Wikipedia:** [Minimal polynomial (linear algebra)](https://en.wikipedia.org/wiki/Minimal_polynomial_%28linear_algebra%29). It says: “any ideal is generated by a single polynomial, which is unique up to a unit in F\[t\].”

**Sources:** none listed. No primary source with a working link was found.

### Defining projectors by the Chinese remainder theorem splits generalized eigenspaces

**Remember:** A residue projector keeps one factor and kills the others.

*True by definition.* MSC 15A20 (Diagonalization, Jordan forms), 15A18. arXiv math.RA, math.AC. Level 2: later undergraduate.

**Definition.** Let the minimal polynomial of A be the product of the factors (t − λᵢ) to the powers mᵢ, with the λᵢ distinct. The Chinese remainder theorem gives polynomials eᵢ that are 1 modulo the ith factor and 0 modulo the others. Define the ith projector as Pᵢ = eᵢ(A). The basis definition takes a Jordan basis, which puts A in block form, keeps the blocks for λᵢ and kills the others.

**Problem.** The projectors sum to the identity, each satisfies Pᵢ² = Pᵢ, and PᵢPⱼ = 0 when i ≠ j. The range of Pᵢ is the generalized eigenspace for λᵢ, the kernel of (A − λᵢI) to the power mᵢ.

**How the definition helps.** With this definition, the projector identities already hold among polynomials, so they need no basis. The ring F\[t\] modulo the minimal polynomial is the product of the rings modulo each factor. In that product the eᵢ are the unit vectors, so they sum to 1, square to themselves and multiply to 0 in pairs. Substituting A carries these identities to the projectors. Divisibility shows that Pᵢ maps into the kernel of (A − λᵢI) to the power mᵢ and is the identity there. The cited paper states the Chinese remainder theorem, which does the work. The application to projectors is our own.

**Paper or page:** [Interplay between the Chinese Remainder Theorem and the Lagrange Interpolation Formula](https://arxiv.org/abs/2408.07360). It says: “Let R be a commutative, unital ring. Suppose that A₁, …, Aₙ are pairwise coprime ideals in R”

**Sources:** none listed. No primary source with a working link was found.

### Potentially diagonalizable parts give the Jordan–Chevalley decomposition over perfect fields

**Remember:** Ask for diagonalizable after a field extension, not before.

*Makes the theorem clean to state or prove.* MSC 15A20 (Diagonalization, Jordan forms). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A linear map is potentially diagonalizable if it becomes diagonalizable after extending the field. This holds when its minimal polynomial is separable, with no repeated roots in an algebraic closure. A Jordan–Chevalley decomposition writes x = s + n with s potentially diagonalizable, n nilpotent and sn = ns.

**Problem.** A linear map x has a Jordan–Chevalley decomposition if and only if its minimal polynomial is a product of separable polynomials. Then the decomposition is unique, and s and n are polynomials in x. Over a perfect field, such as ℚ or a finite field, every x has one.

**How the definition helps.** Asking that s be diagonalizable only over an extension lets the theorem hold over fields that do not contain the eigenvalues. A rotation by 90 degrees of ℝ² is potentially diagonalizable, though not diagonalizable over ℝ (our own). Asking for diagonalizable s over the base field would fail for it. Over fields that are not perfect, the decomposition can still fail. The page gives V = k\[X\]/((Xᵖ − a)²) over k = 𝔽ₚ(t), with a not a p-th power, and x multiplication by X. The page's proof is a Newton-type iteration. It needs q′ to be invertible modulo q, which holds because a separable q has no common factor with its derivative.

**Wikipedia:** [Jordan–Chevalley decomposition](https://en.wikipedia.org/wiki/Jordan%E2%80%93Chevalley_decomposition). It says: “Then x admits a Jordan-Chevalley decomposition if and only if the minimal polynomial of x is a product of separable polynomials.”

**Sources:** none listed. No primary source with a working link was found.

### Divisibility and no trivial factors make invariant factors unique

**Remember:** Each factor divides the next, and no factor is 1.

*Rules out counterexamples.* MSC 15A21 (Canonical forms, reductions, classification), 13C05. arXiv math.RA. Level 2: later undergraduate.

**Definition.** A linear map A on a finite-dimensional space V makes V a module over the polynomial ring F\[X\]. Split V into cyclic subspaces, each spanned by the images of one vector under A. The invariant factors are the minimal polynomials of these pieces when each divides the next and none equals 1.

**Problem.** Two square matrices over a field are similar if and only if they have the same invariant factors. Equivalently, they have the same rational canonical form, the block matrix of companion matrices of the invariant factors.

**How the definition helps.** The divisibility rule picks one decomposition out of many, so it can be compared between matrices. Without it, the page notes, cyclic pieces can split further by the Chinese remainder theorem. For example, F\[X\]/(X(X−1)) and F\[X\]/(X) ⊕ F\[X\]/(X−1) are the same module, so one matrix has two different lists (our own). Forbidding the factor 1 removes zero-dimensional pieces that could be added freely. The uniqueness then comes from the structure theorem for finitely generated modules over a principal ideal domain. That theorem is the remaining work.

**Wikipedia:** [Frobenius normal form](https://en.wikipedia.org/wiki/Frobenius_normal_form). It says: “in the list of associated minimal polynomials each one must divide the next (and the constant polynomial 1 is forbidden to exclude trivial cyclic subspaces).”

**Sources:** none listed. No primary source with a working link was found.

### The minimal polynomial as ideal generator divides every annihilating polynomial

**Remember:** A generator divides every element of its ideal.

*True by definition. Confidence: medium.* MSC 15A21 (Canonical forms, reductions, classification), 15A18. arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a linear map T on a finite-dimensional vector space over a field, the polynomials p with p(T) = 0 form an ideal. The minimal polynomial is its monic generator, so the ideal consists of its multiples. An alternative definition takes the monic polynomial of least degree with p(T) = 0.

**Problem.** If p(T) = 0, the minimal polynomial of T divides p. In particular, it divides the characteristic polynomial.

**How the definition helps.** The generator definition makes divisibility immediate because every member of the ideal is a multiple of its generator. With the least-degree definition, divide p by the minimal polynomial and show that the remainder also evaluates to zero at T. Minimality forces that remainder to vanish, which is our own account of the comparison. That same division step proves that any ideal of the polynomial ring has a single generator. The claim about the characteristic polynomial still needs Cayley–Hamilton to put it in the ideal.

**Wikipedia:** [Minimal polynomial (linear algebra)](https://en.wikipedia.org/wiki/Minimal_polynomial_%28linear_algebra%29). It says: “The minimal polynomial is thus defined to be the monic polynomial that generates I<sub>T</sub>.”

**Sources:** none listed. No primary source with a working link was found.

### The rational canonical form makes similarity independent of the field

**Remember:** No factoring needed, so no field extension can change it.

*Makes the theorem clean to state or prove.* MSC 15A21 (Canonical forms, reductions, classification), 13C05. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The rational canonical form of a square matrix A is a block diagonal matrix. Its blocks are companion matrices of the invariant factors of A. A companion matrix of a monic polynomial is the matrix of multiplication by X on F\[X\] modulo that polynomial.

**Problem.** Let F be a subfield of L, and let A and B have entries in F. If A and B are similar over L, then they are already similar over F.

**How the definition helps.** The rational canonical form uses no roots of polynomials, so the form computed over F is also the form over any larger field L. Two matrices similar over L therefore have the same form over L, hence over F, hence they are similar over F (our own). The Jordan form cannot give this, because it lives only over a field where the characteristic polynomial splits. A diagonal matrix with distinct entries has, as its Frobenius form, the companion matrix of its characteristic polynomial. What stays hard is the uniqueness of the invariant factors, from the structure theorem for modules over F\[X\].

**Wikipedia:** [Frobenius normal form](https://en.wikipedia.org/wiki/Frobenius_normal_form). It says: “The Frobenius normal form does not reflect any form of factorization of the characteristic polynomial, even if it does exist over the ground field F. This implies that it is invariant when F is replaced by a different field”

**Sources:** none listed. No primary source with a working link was found.

### Variational eigenvalues make Hermitian eigenvalues increase under positive semidefinite perturbations

**Remember:** Pointwise order survives a minimum and then a maximum.

*True by definition.* MSC 15A42 (Inequalities involving eigenvalues and eigenvectors), 15B57. arXiv math.RA, math.SP. Level 2: later undergraduate.

**Definition.** For an n × n Hermitian matrix A, define λₖ(A) as a max-min. Take the maximum over k-dimensional subspaces U of the minimum of ⟨Ax, x⟩ over unit vectors x in U. The usual definition lists the eigenvalues, the roots of the characteristic polynomial, in decreasing order.

**Problem.** Let A and B be Hermitian matrices of the same size, with B − A positive semidefinite. Then λₖ(B) ≥ λₖ(A) for every k.

**How the definition helps.** With this definition, the theorem needs only that minima and maxima keep inequalities. Since B − A is positive semidefinite, ⟨Bx, x⟩ ≥ ⟨Ax, x⟩ for every unit vector x. Taking the minimum over U, and then the maximum over U, keeps the inequality. The work moves into the Courant–Fischer theorem, which says that the max-min is the kth largest eigenvalue. Wikipedia states that theorem. This application is our own.

**Wikipedia:** [Min-max theorem](https://en.wikipedia.org/wiki/Min-max_theorem). It says: “a result that gives a variational characterization of eigenvalues of compact Hermitian operators on Hilbert spaces.”

**Sources:** none listed. No primary source with a working link was found.

### Defining inertia indices as maximal definite dimensions proves Sylvester's law of inertia

**Remember:** Coordinate changes carry definite subspaces to definite subspaces of the same dimension.

*True by definition.* MSC 15A63 (Quadratic and bilinear forms, inner products). arXiv math.RA. Level 2: later undergraduate.

**Definition.** For a real quadratic form q, define the positive index as the largest dimension of a subspace on which q is positive definite. Define the negative index the same way for −q. The usual definition counts the positive and negative entries after q is diagonalized.

**Problem.** In every basis that diagonalizes q, the numbers of positive and of negative diagonal entries are the same. This is Sylvester's law of inertia.

**How the definition helps.** With this definition, the indices clearly do not depend on any basis. The work moves into showing that the positive index equals the count p of positive entries in a diagonalizing basis. The basis vectors with positive entries span a positive definite subspace of dimension p. Any subspace of larger dimension meets the span of the other basis vectors, where q ≤ 0. So no positive definite subspace has dimension more than p. The negative count follows by the same argument for −q. Wikipedia states the geometric form, and the proof steps are our own.

**Wikipedia:** [Sylvester's law of inertia](https://en.wikipedia.org/wiki/Sylvester%27s_law_of_inertia). It says: “These dimensions are the positive and negative indices of inertia of q.”

**Sources:** none listed. No primary source with a working link was found.

### Defining tensor products by a universal property makes basic facts automatic

**Remember:** A linear map out of V ⊗ W is a bilinear map out of V × W.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus). arXiv math.RA. Level 2: later undergraduate.

**Definition.** A tensor product of vector spaces V and W is a vector space V ⊗ W with a bilinear map from V × W to V ⊗ W. It must have a universal property: every bilinear map from V × W to any vector space factors through it by a unique linear map. In words, every bilinear map out of V × W is the given map followed by exactly one linear map out of V ⊗ W.

**Problem.** We want the basic facts about tensor products. Examples are V ⊗ W ≅ W ⊗ V, ℝ ⊗ ℝ ≅ ℝ, and the fact that the tensor product does not depend on a choice of basis.

**How the definition helps.** Any two spaces with the universal property are isomorphic by a unique compatible isomorphism, so basis independence is automatic. A construction with bases gives a different space for each pair of bases, and the article notes this limitation. With the universal property, to build a linear map out of V ⊗ W, one only gives a bilinear map out of V × W. The article uses this to prove ℝ ⊗ ℝ ≅ ℝ, where a direct proof of injectivity would be awkward. Existence still needs a construction, such as a quotient of a free vector space.

**Wikipedia:** [Tensor product](https://en.wikipedia.org/wiki/Tensor_product). It says: “A consequence of this approach is that every property of the tensor product can be deduced from the universal property, and that, in practice, one may forget the method that has been used to prove its existence.”

**Sources:** none listed. No primary source with a working link was found.

### A wedge product is zero exactly when the vectors are dependent

**Remember:** Independent vectors have a nonzero wedge; dependent ones give zero.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras), 15A03. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The exterior algebra of a vector space V is the associative algebra generated by V with one rule, v ∧ v = 0. Formally it is the tensor algebra of V divided by the ideal that the elements v ⊗ v generate.

**Problem.** Vectors x₁, …, xₖ are linearly dependent if and only if x₁ ∧ ⋯ ∧ xₖ = 0.

**How the definition helps.** The rule v ∧ v = 0 makes the wedge product alternating, so one direction is a two-line calculation. If one vector is a combination of the others, expand and every term repeats a vector, so it is zero. The other direction moves the work to a different theorem. It says that the wedges of basis vectors with increasing indices form a basis of the k-th exterior power. Extend independent vectors to a basis, and their wedge is one of these basis elements, so it is not zero (our own). The same idea gives the determinant as the scaling factor on the top exterior power.

**Wikipedia:** [Exterior algebra](https://en.wikipedia.org/wiki/Exterior_algebra). It says: “a necessary and sufficient condition for {x₁, x₂, …, xₖ} to be a linearly dependent set of vectors is that x₁ ∧ x₂ ∧ ⋯ ∧ xₖ = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Alternating, not antisymmetric, wedges give the right exterior powers in characteristic 2

**Remember:** Ask that v ∧ v vanish, not only that wedges anticommute.

*Rules out counterexamples.* MSC 15A75 (Exterior algebra, Grassmann algebras), 15A03. arXiv math.RA. Level 2: later undergraduate.

**Definition.** The exterior algebra imposes v ∧ v = 0 for every vector v. This is the alternating rule. The weaker antisymmetric rule says only v ∧ w = −w ∧ v.

**Problem.** For a vector space V of dimension n over any field, the k-th exterior power has dimension equal to the binomial coefficient n choose k. So the whole exterior algebra has dimension 2ⁿ and the top power is one-dimensional.

**How the definition helps.** The alternating rule implies antisymmetry in every field, but the converse needs division by 2, so the alternating rule is the one that works everywhere. In characteristic 2, −1 = 1, so the antisymmetric rule only says that wedges commute (our own). Imposing only it would give the symmetric algebra, where v ∧ v is not zero and the algebra is infinite dimensional (our own). Then there would be no top power and no determinant from it. With v ∧ v = 0, the count of basis elements gives the binomial dimensions in all characteristics. The identification of the exterior algebra with antisymmetric tensors still needs characteristic not 2, as the Wikipedia page notes.

**nLab:** [exterior algebra](https://ncatlab.org/nlab/show/exterior+algebra). It says: “If we can divide by 2, then the relations … imply …, while the converse holds in any characteristic.”

**Sources:** none listed. No primary source with a working link was found.

### Min-plus matrix powers give the cheapest walks of each length

**Remember:** Add along a walk and minimize over walks.

*True by definition. Confidence: medium.* MSC 15A80 (Max-plus and related algebras), 05C38. arXiv math.CO, cs.DS. Level 2: later undergraduate.

**Definition.** In the min-plus semiring, the sum is the minimum and the product is ordinary addition, with ∞ as zero. For a finite directed graph, put the cheapest edge cost from i to j in entry (i, j). Put ∞ where there is no edge.

**Problem.** Take the kth min-plus power of this matrix. Its entry (i, j) is the least cost of a walk from i to j with exactly k edges.

**How the definition helps.** In this semiring, a matrix product extends a walk by one edge and then takes the cheapest choice. Our own induction on k gives the result. Wikipedia says only that the Floyd–Warshall shortest-path algorithm is a computation over this algebra. Distributivity of + over minimum lets the matrix product work, and the rest of the argument is our own.

**Wikipedia:** [Semiring](https://en.wikipedia.org/wiki/Semiring). It says: “The Floyd–Warshall algorithm for shortest paths can thus be reformulated as a computation over a (min, +) algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Boolean semiring matrices compose relations by ordinary matrix multiplication

**Remember:** AND joins steps and OR chooses a witness.

*True by definition.* MSC 15B34 (Boolean and Hadamard matrices), 16Y60. arXiv math.RA, math.CO. Level 2: later undergraduate.

**Definition.** Record a relation between finite sets by a matrix of truth values. Use the Boolean semiring, which adds with OR and multiplies with AND, so 1 + 1 = 1.

**Problem.** The Boolean product of the matrices of two relations is the matrix of their composite. The Boolean sum is the matrix of their union.

**How the definition helps.** The rule 1 + 1 = 1 makes each entry say only whether a witness exists, which is what composition asks. Wikipedia states both facts for the Boolean semiring. In our own check, entry (i, k) of the product is the OR over j of (i R j AND j S k). With integer arithmetic, the entry counts witnesses, and one must round positive counts to one.

**Wikipedia:** [Semiring](https://en.wikipedia.org/wiki/Semiring). It says: “matrix addition corresponds to union of relations, and matrix multiplication corresponds to composition of relations.”

**Sources:** none listed. No primary source with a working link was found.

### Defining positive semidefinite matrices as Gram matrices proves the Schur product theorem

**Remember:** The entrywise product pairs the tensor products of the Gram vectors.

*True by definition.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A63. arXiv math.RA, math.FA. Level 2: later undergraduate.

**Definition.** Call a matrix positive semidefinite if it is a Gram matrix. A Gram matrix has entries ⟨vᵢ, vⱼ⟩ for some vectors v₁, …, vₙ in an inner product space. The usual definition requires the quadratic form of a Hermitian matrix to be nonnegative on every vector.

**Problem.** The entrywise product of two positive semidefinite matrices of the same size is positive semidefinite. This entrywise product is also called the Hadamard or Schur product.

**How the definition helps.** With this definition, the theorem is one line about tensor products. If M has entries ⟨vᵢ, vⱼ⟩ and N has entries ⟨wᵢ, wⱼ⟩, then ⟨vᵢ ⊗ wᵢ, vⱼ ⊗ wⱼ⟩ is the product of those entries. So the entrywise product is the Gram matrix of the vectors vᵢ ⊗ wᵢ. The usual proof writes each matrix as a sum of rank-one terms from its eigenvectors. The work moves into the theorem that the two definitions agree, which Wikipedia states. The tensor product step is our own.

**Wikipedia:** [Gram matrix](https://en.wikipedia.org/wiki/Gram_matrix). It says: “The Gram matrix is positive semidefinite, and every positive semidefinite matrix is the Gramian matrix for some set of vectors.”

**Sources:**

- [Issai Schur, Bemerkungen zur Theorie der beschränkten Bilinearformen mit unendlich vielen Veränderlichen (1911)](https://doi.org/10.1515/crll.1911.140.1)

### Irreducible nonnegative matrices have a simple positive Perron eigenvalue

**Remember:** A strongly connected graph gives a simple Perron root and a positive eigenvector.

*Rules out counterexamples.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A18. arXiv math.SP, math.RA. Level 2: later undergraduate.

**Definition.** A nonnegative n × n matrix A is irreducible if its directed graph is strongly connected. Take n ≥ 2, to leave out the 1 × 1 zero matrix (our own). The graph has an edge from i to j when the entry in row i and column j is nonzero. Strongly connected means that every vertex can reach every other vertex.

**Problem.** If A is nonnegative and irreducible, its spectral radius r, the largest absolute value of an eigenvalue, is itself a positive eigenvalue. It is a simple root of the characteristic polynomial, and it has an eigenvector with all entries strictly positive.

**How the definition helps.** Irreducibility stops the matrix from splitting into blocks that do not talk to each other, so one eigenvector must be positive everywhere. For a general nonnegative matrix only a nonnegative eigenvector exists. The page's counterexample is the matrix with rows (0, 1) and (0, 0). Its largest eigenvalue is 0, which is a double root, and its eigenvector (1, 0) is not positive. This matrix is reducible, so the definition excludes it. What irreducibility does not give is a unique eigenvalue of largest absolute value: that needs the period to be 1.

**Wikipedia:** [Perron–Frobenius theorem](https://en.wikipedia.org/wiki/Perron%E2%80%93Frobenius_theorem). It says: “However, Frobenius found a special subclass of non-negative matrices — irreducible matrices — for which a non-trivial generalization is possible.”

**Sources:**

- [Perron, O. (1907). Zur Theorie der Matrices. Mathematische Annalen 64.](https://doi.org/10.1007/BF01449896)

### Primitive matrices make the Perron eigenvalue strictly dominant

**Remember:** Some power positive means one eigenvalue beats all the others.

*Rules out counterexamples.* MSC 15B48 (Positive matrices and their generalizations; cones of matrices), 15A18. arXiv math.SP, math.RA. Level 2: later undergraduate.

**Definition.** A nonnegative matrix A is primitive if some power of A has all entries strictly positive. Primitive matrices are the same as irreducible matrices of period 1. The period is the greatest common divisor of the lengths of the closed paths in the graph of A.

**Problem.** If A is primitive, its Perron eigenvalue r is strictly larger in absolute value than every other eigenvalue. So the powers of A, divided by rᵏ, settle down to a fixed limit.

**How the definition helps.** Asking that one power be positive lets the proof for positive matrices run unchanged on that power. The page notes that an irreducible matrix of period h has h eigenvalues of largest absolute value. The matrix with rows (0, 1) and (1, 0) is irreducible with period 2. Its eigenvalues 1 and −1 have the same absolute value, so its powers alternate and do not converge (our own). Primitivity excludes exactly this case. For Markov chains, this is the step from irreducible to irreducible and aperiodic (our own).

**Wikipedia:** [Perron–Frobenius theorem](https://en.wikipedia.org/wiki/Perron%E2%80%93Frobenius_theorem). It says: “All statements of the Perron–Frobenius theorem for positive matrices remain true for primitive matrices.”

**Sources:**

- [Perron, O. (1907). Zur Theorie der Matrices. Mathematische Annalen 64.](https://doi.org/10.1007/BF01449896)

### Preserving the symplectic form forces determinant one

**Remember:** A symplectic matrix preserves the volume made from its symplectic form.

*True by definition.* MSC 15B99 (Special matrices), 53D05, 15A15. arXiv math.SG, math.RA. Level 2: later undergraduate.

**Definition.** A symplectic matrix preserves a nondegenerate alternating form ω, a bilinear pairing with ω(v,v) = 0 and no unpaired direction. In matrix terms, MᵀΩM = Ω. In dimension 2n over the reals or complexes, the wedge product of n copies of ω is a nonzero volume form.

**Problem.** Every real or complex symplectic matrix has determinant one.

**How the definition helps.** Preserving ω forces preservation of its top wedge power, an alternating form that measures volume (our own). A matrix scales any volume form by its determinant, so its determinant is one (our own). Taking determinants in the matrix equation alone gives only det(M)² = 1. The work is in showing the wedge power is nonzero, which follows by writing ω in a basis of paired vectors (our own).

**Wikipedia:** [Symplectic matrix](https://en.wikipedia.org/wiki/Symplectic_matrix). It says: “It follows easily from the definition that the determinant of any symplectic matrix is ±1. Actually, it turns out that the determinant is always +1 for any field.”

**Sources:**

- [Donsub Rim, An elementary proof that symplectic matrices have determinant one, Advances in Dynamical Systems and Applications 12 (2017) 15–20](https://doi.org/10.37622/ADSA/12.1.2017.15-20)

### McCoy rank makes linear dependence a rank condition over any commutative ring

**Remember:** Rank is the biggest minor size whose minors no nonzero element kills.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 15A03 (Vector spaces, linear dependence, rank, lineability), 13C40. arXiv math.AC, math.RA. Level 3: graduate.

**Definition.** Let A be an n × m matrix over a commutative ring R. Its McCoy rank is the largest t such that the ideal generated by the t × t minors of A has zero annihilator. The ideal of 0 × 0 minors is taken to be R. Over a field this is the usual rank.

**Problem.** Over a field, Ax = 0 has a nonzero solution exactly when the rank of A is less than the number of columns. One wants the same test over any commutative ring, including rings with zero divisors.

**How the definition helps.** Using annihilators of minor ideals, instead of asking for a nonzero minor, accounts for zero divisors, so the field theorem keeps its form. For example (our own), over ℤ/6 the 1 × 1 matrix (2) has a nonzero minor. Yet 3 · 2 = 0 gives a nonzero solution. Its McCoy rank is 0, because 3 kills the minor. The definition of McCoy rank given here is our own statement; the quoted theorem only uses it. The next corollary in the source derives two facts from it. More variables than equations always give a nonzero solution, and Rᵐ ≅ Rⁿ forces m = n.

**Paper or page:** [The CRing Project, Various, Theorem 2.7 (McCoy)](https://math.uchicago.edu/~amathew/CRing.pdf), [The CRing Project, Various, Corollary 2.8](https://math.uchicago.edu/~amathew/CRing.pdf). It says: “If R is not the zero ring, the following are equivalent: (1) The columns α₁, …, αₘ are linearly dependent. (2) Equation … has a nontrivial solution. (3) rk(A) &lt; m.”

**Sources:**

- [The CRing Project, Various, Theorem 2.7 (McCoy) and Corollary 2.8](https://math.uchicago.edu/~amathew/CRing.pdf)

### Defining minors through the wedge pairing gives Jacobi's complementary minor theorem

**Remember:** Wedge products pair complementary degrees into the single line of volumes.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 3: graduate.

**Definition.** On a space of dimension n, k-fold wedges are alternating products of k vectors. The wedge product pairs k-fold wedges with (n − k)-fold wedges, with values in the top exterior power. This pairing turns the action of A on (n − k)-fold wedges into a map on k-fold wedges. In a basis, its entries are signed complementary minors, and the usual definition writes down this array of signed minors directly.

**Problem.** Let A be an invertible n × n matrix, with k-element row set I, column set J, and complements I′ and J′. The minor of A⁻¹ on rows I and columns J equals ± the minor of A on rows J′ and columns I′, over det A. The sign is −1 raised to the sum of all indices in I and J.

**How the definition helps.** With this definition, the theorem becomes the fact that A scales the wedge pairing by det A. Applying A to every factor of a wedge of n vectors multiplies it by det A. So moving the action of A from one side of the pairing to the other gives det A times the action of A⁻¹. The work moves into two computations. Complementary basis wedges pair to the sign of their joined index list, and the exterior power has minors as entries. Wikipedia gives a wedge-product proof of this kind and works out the sign. The pairing form of the argument is our own.

**nLab:** [determinant](https://ncatlab.org/nlab/show/determinant). It says: “The determinant is the (essentially unique) universal alternating multilinear map.”

**Wikipedia:** [Minor (linear algebra)](https://en.wikipedia.org/wiki/Minor_%28linear_algebra%29). It says: “denote the ordered sequences of indices (the indices are in natural order of magnitude, as above) complementary to I, J”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Pfaffian by a wedge power makes pf(BABᵀ) equal det(B) pf(A)

**Remember:** The Pfaffian is the coefficient of a wedge power in the top wedge.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15A75. arXiv math.RA. Level 3: graduate.

**Definition.** Work over a field of characteristic zero. For a 2n × 2n skew-symmetric A, let ω be the sum over i &lt; j of aᵢⱼ eᵢ ∧ eⱼ, with ∧ the alternating wedge. Define pf(A) by the rule that ωⁿ divided by n! equals pf(A) e₁ ∧ ⋯ ∧ e₂ₙ. The usual formula is a signed sum over the ways to split the indices into pairs.

**Problem.** For a 2n × 2n skew-symmetric matrix A and any 2n × 2n matrix B, pf(BABᵀ) = det(B) pf(A).

**How the definition helps.** With this definition, the identity reduces to how B acts on wedges. Replacing A by BABᵀ is the same as replacing each eₖ in ω by the kth column fₖ of B. So ωⁿ becomes the same expression in the fₖ. Then f₁ ∧ ⋯ ∧ f₂ₙ = det(B) e₁ ∧ ⋯ ∧ e₂ₙ finishes the proof. Wikipedia gives this proof. The work moves into showing that the wedge definition agrees with the pairing formula. Each pairing appears n! times in ωⁿ, with the right sign.

**Wikipedia:** [Pfaffian](https://en.wikipedia.org/wiki/Pfaffian). It says: “where ωⁿ denotes the wedge product of n copies of ω.”

**Sources:** none listed. No primary source with a working link was found.

### Defining trace by evaluation makes it survive extension of scalars

**Remember:** Evaluation gives the same scalar before and after extending scalars.

*True by definition.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 13C10. arXiv math.AC. Level 3: graduate.

**Definition.** Let P be a finite projective module over a commutative ring R, a direct summand of a finite free module. Each endomorphism of P is a sum of maps x ↦ φ(x)p, with p in P and φ in the dual module P\*. Define the trace by sending each such term to φ(p). Where P has a basis, the usual definition adds the diagonal entries.

**Problem.** Let R → S be a map of commutative rings, and let f be an endomorphism of P. Then the trace of the extended map f ⊗ S on P ⊗ S is the image in S of the trace of f.

**How the definition helps.** With this definition, both traces are the same evaluation, and evaluation commutes with any ring map. The usual definition needs local bases, so one would have to compare traces on many local pieces. The work moves into two facts about finite projective modules. First, P ⊗ P\* is isomorphic to the module of endomorphisms of P. Second, the dual of P ⊗ S is P\* ⊗ S. One must also check that evaluation gives the diagonal sum where a basis exists. The nLab describes contraction by evaluation, and this application is our own.

**nLab:** [tensor contraction](https://ncatlab.org/nlab/show/tensor+contraction). It says: “by pairing by the evaluation map”

**Sources:** none listed. No primary source with a working link was found.

### The Dieudonné determinant lets us define SL(n) over the quaternions

**Remember:** Over a noncommutative field, the determinant can only be known up to commutators.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 19B99. arXiv math.RA, math.KT. Level 3: graduate.

**Definition.** Let K be a division ring and K\* its group of nonzero elements. The Dieudonné determinant is a group homomorphism from GL(n, K) to the abelianization K\*/\[K\*, K\*\], which is K\* divided by its commutator subgroup. Two rules fix it. Scaling a row by a multiplies the value by the class of a, and adding a multiple of one row to another does not change the value.

**Problem.** We want a determinant for matrices over a noncommutative division ring K, such as the quaternions ℍ. It should be a multiplicative map on GL(n, K) that the row rules fix. With it, we can define the special linear group SL(n, K) as the matrices of determinant 1.

**How the definition helps.** Taking values in the abelianization of K\*, not in K itself, is what lets the theorem be stated at all. Dieudonné's theorem says that a homomorphism GL(n, K) → K\*/\[K\*, K\*\] with these row rules exists and is unique. For ℍ the commutator subgroup is Sp(1), the unit quaternions, so the target is the positive reals. Then SL(n, ℍ) is the set of matrices whose Dieudonné determinant is 1. Equivalently, it is the set of matrices whose Study determinant is 1. The existence of the homomorphism is the real theorem in Dieudonné's paper.

**nLab:** [Dieudonné determinant](https://ncatlab.org/nlab/show/Dieudonn%C3%A9+determinant). It says: “It is crucial for making sense of the notion of "special linear group" over such coefficients, such as the group SL(2,H) over the quaternions.”

**Sources:**

- [Jean Dieudonné, Les déterminants sur un corps non commutatif, Bulletin de la Société Mathématique de France 71 (1943) 27–45](https://doi.org/10.24033/bsmf.1345)

### Clifford matrices make free Dirac solutions satisfy Klein–Gordon

**Remember:** The Clifford relations make the square of the gamma-matrix derivative the wave operator.

*True by definition.* MSC 15A66 (Clifford algebras, spinors), 35Q41, 81Q05. arXiv math-ph, hep-th. Level 3: graduate.

**Definition.** Use four gamma matrices that anticommute in pairs, meaning that reversing the order of a distinct pair negates its product. The time matrix squares to the identity, and each space matrix squares to minus the identity. These are the Clifford relations for the flat spacetime metric with positive time sign. The free Dirac operator uses i times these matrices as derivative coefficients and subtracts the mass.

**Problem.** Each component of a solution to the free Dirac equation satisfies the Klein–Gordon wave equation with the same mass.

**How the definition helps.** The Clifford definition makes the square of the gamma-matrix derivative equal to the wave operator (our own). Mixed derivatives cancel in pairs, and the squares supply the time and space signs (our own). Multiplying the Dirac operator by its partner with the opposite mass sign gives the negative of the Klein–Gordon operator (our own). The older equation imposes the second-order wave operator directly on each component. The work lies in finding matrices with the required relations to build the first-order factorization.

**Wikipedia:** [Dirac equation](https://en.wikipedia.org/wiki/Dirac_equation). It says: “As a result, any solution to the Dirac equation is also automatically a solution to the Klein–Gordon equation.”

**Sources:**

- [P. A. M. Dirac, The quantum theory of the electron, Proceedings of the Royal Society of London A (1928)](https://doi.org/10.1098/rspa.1928.0023)

### The Clifford algebra universal property gives the parity automorphism

**Remember:** Negating a generator preserves its square, so negation extends uniquely to the algebra.

*True by definition.* MSC 15A66 (Clifford algebras, spinors), 16S10. arXiv math.RA. Level 3: graduate.

**Definition.** Start with a vector space V and a quadratic form Q on it. The Clifford algebra has a linear map i from V such that i(v)² = Q(v)1. Every linear map f from V into a unital algebra satisfying f(v)² = Q(v)1 extends uniquely to a unital algebra map from the Clifford algebra. The concrete construction instead divides the tensor algebra of words in V by the relations v² = Q(v)1.

**Problem.** The Clifford algebra has an automorphism α sending i(v) to −i(v) and satisfying α² = 1. Over a field of characteristic other than two, its two eigenspaces give its even and odd parts.

**How the definition helps.** The universal property gives α as soon as we see that negation preserves the square relation. Applying α twice fixes each i(v), so uniqueness says that α² is the identity. In characteristic other than two, any element is the sum of its parts fixed and negated by α. Since α preserves multiplication, a product has the parity given by multiplying the two signs. The work moves into constructing the algebra and proving the quotient has the universal property.

**Wikipedia:** [Clifford algebra](https://en.wikipedia.org/wiki/Clifford_algebra). It says: “the linear map on V defined by v ↦ −v (reflection through the origin) preserves the quadratic form Q and so by the universal property of Clifford algebras extends to an algebra automorphism”

**Sources:** none listed. No primary source with a working link was found.

### Defining divided powers as symmetric tensors makes them duals of symmetric powers

**Remember:** The dual of a quotient by permutations is the space of invariant tensors.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus), 15A78. arXiv math.RA, math.AC. Level 3: graduate.

**Definition.** Define the nth symmetric power of V as the quotient of the n-fold tensor power that identifies tensors differing by a permutation of factors. Define the nth divided power of V as the subspace of n-fold tensors fixed by every permutation. In characteristic zero, averaging over permutations identifies the two. That fails when n! is zero in the field.

**Problem.** Over any field, the dual of the nth symmetric power of a finite-dimensional space V is the nth divided power of the dual space V\*.

**How the definition helps.** With these definitions, the theorem is the fact that a functional on a quotient is a functional unchanged by the identifications. So a functional on the symmetric power is a functional on the tensor power that every permutation fixes. In finite dimension, the dual of the n-fold tensor power of V is the n-fold tensor power of V\*. Under that identification, the fixed functionals are the symmetric tensors in V\*. The nLab gives the invariant description of divided powers and states this duality. The steps are our own.

**nLab:** [divided power algebra](https://ncatlab.org/nlab/show/divided+power+algebra). It says: “We then have the relation (Sₙ(A\*))\* = Γₙ(A)”

**Sources:** none listed. No primary source with a working link was found.

### Universal-property tensor products make tensoring preserve quotients

**Remember:** Factoring through a quotient amounts to vanishing on its relations.

*True by definition.* MSC 15A69 (Multilinear algebra, tensor calculus), 13C05. arXiv math.AC. Level 3: graduate.

**Definition.** Over a commutative ring, the tensor product M ⊗ N is defined by a universal property. Linear maps out of it match bilinear maps out of M × N, which are linear in each input. A construction divides the free module on pairs by the bilinearity relations.

**Problem.** Let U be a submodule of M. Then (M/U) ⊗ N is the quotient of M ⊗ N by the image of U ⊗ N. This is the right exactness of tensoring with N.

**How the definition helps.** With the universal property, the claim becomes a statement about bilinear maps, where it is clear. A bilinear map on (M/U) × N is a bilinear map on M × N that vanishes when the first input is in U. So both sides have the same universal property and are isomorphic. The Stacks Project proves right exactness in general. This argument is our own, and the existence of the tensor product still needs the construction.

**Paper or page:** [Stacks Project, Algebra, Lemma 10.12.10](https://stacks.math.columbia.edu/tag/00DF). It says: “In other words, the functor − ⊗ᵣ N is right exact, in the sense that tensoring each term in the original right exact sequence preserves the exactness.”

**Sources:**

- [Stacks Project, Algebra, Lemma 10.12.10](https://stacks.math.columbia.edu/tag/00DF)

### Defining exterior algebras by a universal property splits exterior powers of sums

**Remember:** Wedges from the two summands keep separate degrees and anticommute.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 3: graduate.

**Definition.** Define the exterior algebra of V as the algebra generated by V with v ∧ v = 0 for every v. Equivalently, every linear map from V into an algebra in which each image squares to zero extends uniquely to an algebra map. The coordinate construction uses ordered wedges of basis vectors, with signs for reordering.

**Problem.** Let V and W be vector spaces. The nth exterior power of V ⊕ W is a direct sum over i + j = n. Each summand is the ith exterior power of V tensored with the jth exterior power of W.

**How the definition helps.** With this definition, it is enough to give the signed tensor product of the two exterior algebras the same extension property. There, two elements of odd degree change sign when they pass each other, so v ⊗ 1 + 1 ⊗ w squares to zero. This rule therefore extends to an algebra map out of the exterior algebra of V ⊕ W. Multiplication gives a map back, and both composites fix the generators, so they are inverse. With coordinates, one would instead match basis wedges and their signs by hand. The work moves into constructing the signed tensor product and checking that it is an algebra. These steps are our own.

**nLab:** [exterior algebra](https://ncatlab.org/nlab/show/exterior+algebra). It says: “the identity v ∧ v = 0 for all v ∈ V.”

**Sources:** none listed. No primary source with a working link was found.

### Universal property of exterior algebras gives Λ(V/W) as ΛV modulo W

**Remember:** Killing the subspace kills every wedge that contains one of its vectors.

*True by definition.* MSC 15A75 (Exterior algebra, Grassmann algebras). arXiv math.RA. Level 3: graduate.

**Definition.** Define the exterior algebra ΛV as the algebra generated by V with v ∧ v = 0 for every v. Equivalently, every linear map from V into an algebra in which each image squares to zero extends uniquely to an algebra map. The coordinate construction uses ordered wedges of basis vectors and signs.

**Problem.** For a subspace W of V, the exterior algebra of V/W is the quotient of ΛV by the two-sided ideal generated by W.

**How the definition helps.** With this definition, both algebras have the same extension property, so they are isomorphic. An algebra map out of ΛV modulo W is an algebra map out of ΛV that kills W. That is a linear map out of V that kills W and whose images square to zero. Such a map is the same as one out of V/W. With coordinates, one must instead extend a basis of W to V and track the basis wedges. The work moves into showing that the algebra with the extension property exists and has the usual basis. These steps are our own.

**nLab:** [exterior algebra](https://ncatlab.org/nlab/show/exterior+algebra). It says: “Then the exterior algebra ΛV is generated by the elements of V using these operations:”

**Sources:** none listed. No primary source with a working link was found.

### Defining symmetric algebras as free commutative algebras makes the coproduct coassociative

**Remember:** Check coassociativity on generators, where both sides add three copies.

*True by definition.* MSC 15A78 (Other algebras built from modules), 16T05. arXiv math.QA, math.RA. Level 3: graduate.

**Definition.** Define the symmetric algebra SV as the free commutative algebra on V. So every linear map from V to a commutative algebra extends to exactly one algebra map from SV. The coordinate construction uses polynomials in the basis vectors.

**Problem.** The rule v ↦ v ⊗ 1 + 1 ⊗ v extends to an algebra map Δ from SV to SV ⊗ SV. This map is coassociative. Applying Δ again to the first tensor factor, or to the second, gives the same map into SV ⊗ SV ⊗ SV.

**How the definition helps.** With this definition, two algebra maps out of SV are equal as soon as they agree on V. Both ways of applying Δ twice are algebra maps. Both send v to v ⊗ 1 ⊗ 1 + 1 ⊗ v ⊗ 1 + 1 ⊗ 1 ⊗ v, so they are equal. With polynomials, one would instead expand powers by the binomial theorem and compare coefficients. The work moves into proving that the polynomial algebra has the extension property. These steps are our own.

**nLab:** [symmetric algebra](https://ncatlab.org/nlab/show/symmetric+algebra). It says: “The symmetric algebra SV of a vector space is the free commutative algebra over V.”

**Sources:** none listed. No primary source with a working link was found.

### The pseudoinverse lets Wedderburn rank reduction work for singular blocks

**Remember:** Subtract only the directions that Y\*AX actually sees.

*Makes the theorem clean to state or prove.* MSC 15A09 (Theory of matrix inversion and generalized inverses), 15A03, 65F55. arXiv math.NA, math.RA. Level 4: research.

**Definition.** The Moore–Penrose pseudoinverse M⁺ undoes M from its column space back to its row space. It sends the orthogonal complement of the column space to zero. Wedderburn's formula forms A − AX(Y\*AX)⁻¹Y\*A when Y\*AX is invertible, and the generalized formula uses (Y\*AX)⁺ instead.

**Problem.** Theorem 5.1 says that rank(A − AX(Y\*AX)⁺Y\*A) = rank A − k, where k is the rank of Y\*AX. Here Y\*AX may be singular or even rectangular. The paper says that Nyström and CUR decompositions, two standard low-rank approximations, follow directly.

**How the definition helps.** The pseudoinverse exists for every matrix, so the formula and the rank statement need no invertibility assumption. The abstract says that this removes the non-singularity of a certain matrix from the assumptions. Directions that Y\*AX sends to zero add nothing to the correction (our own). The proof that the rank falls by exactly k still takes work. The paper also computes the range and null space of the projection A(BA)⁺B (our own link to the rank proof).

**Paper or page:** [Generalized Wedderburn Rank Reduction](https://arxiv.org/abs/2406.03992v1). It says: “We generalize the Wedderburn rank reduction formula by replacing the inverse with the Moore–Penrose pseudoinverse.”

**Sources:**

- [Oskar Kędzierski, Generalized Wedderburn Rank Reduction, arXiv:2406.03992v1 (2024)](https://arxiv.org/abs/2406.03992v1)
- [R. Penrose, A generalized inverse for matrices (1955)](https://doi.org/10.1017/s0305004100030401)

### Quasideterminants give matrix inversion over noncommutative rings

**Remember:** A quasideterminant is a determinant over a minor, written without commuting anything.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 15A15 (Determinants, permanents, traces, other special matrix functions), 15B33, 15A09. arXiv math.RA. Level 4: research.

**Definition.** Let A = (aᵢⱼ) be an n × n matrix over a noncommutative ring, and B the matrix A without row i and column j. The (i,j) quasideterminant, when B is invertible, is \|A\|ᵢⱼ = aᵢⱼ − Σ aᵢₗ (B⁻¹)ₗₖ aₖⱼ, summed over l ≠ j and k ≠ i. In words, it is the entry aᵢⱼ minus a correction term that uses the inverse of B. It is a rational function of the entries, not a polynomial.

**Problem.** Give inverse-matrix and Cramer-type formulas for matrices over noncommutative rings, where determinants do not work.

**How the definition helps.** Quasideterminants are defined so that they give the entries of the inverse matrix directly. Classical determinant formulas disagree with each other over noncommutative rings, so there is no useful determinant. When all n² quasideterminants exist and are invertible, the (i,j) entry of A⁻¹ is (\|A\|ⱼᵢ)⁻¹. This gives noncommutative Cramer rules. Ordinary, super-, quantum and Dieudonné determinants become products of quasideterminants.

**nLab:** [quasideterminant](https://ncatlab.org/nlab/show/quasideterminant). It says: “If all the n² quasideterminants \|A\|ᵢⱼ exist and are invertible then the inverse matrix A⁻¹ of A exists in Mₙ(R) and (\|A\|ⱼᵢ)⁻¹ = (A⁻¹)ⁱⱼ.”

**Sources:**

- [I. M. Gel'fand, V. S. Retakh, Determinants of matrices over noncommutative rings, Functional Analysis and Its Applications 25 (1991) 91–102](https://doi.org/10.1007/BF01079588)
- [I. Gelfand, V. Retakh, Quasideterminants, I, Selecta Mathematica 3 (1997) 517–546, arXiv:q-alg/9705026](https://arxiv.org/abs/q-alg/9705026)

### Strongly minimal linearizations exist for every rational matrix and keep its symmetry

**Remember:** Check the coupling blocks at infinity as well as at finite points.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 15A22 (Matrix pencils), 15A54, 65H17. arXiv math.NA, math.RA. Level 4: research.

**Definition.** A linearization represents a rational matrix by a larger matrix pencil A + λB, which is linear in λ. It must keep the original’s poles and zeros. It is strongly minimal if its coupling block rows and columns have full rank at every finite point and at infinity.

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

**How the definition helps.** Each solvent X gives solutions exp(Xt)a, and invertibility of X − Z lets exp(Xt)a + exp(Zt)b match any initial position and velocity (our own). The matching equations are a + b = x(0) and Xa + Zb = x′(0), so (X − Z)a = x′(0) − Zx(0) (our own). The paper writes the solution operator as (exp(Xt) − exp(Zt))(X − Z)⁻¹. For the scalar equation x″ = 0, the only solvent is 0, so no complete pair exists (our own). Its solution x(0) + t x′(0) is not a sum of exponential solutions (our own). Choosing a pair with small rounding errors is a separate problem.

**Paper or page:** [A complete pair of solvents of a quadratic matrix pencil](https://arxiv.org/abs/2405.07210v1). It says: “Knowing a complete pair of solvents X and Z allows us to reduce the solution of the initial value problem to the calculation of two matrix exponentials”

**Sources:**

- [V. G. Kurbatov, I. V. Kurbatova, A complete pair of solvents of a quadratic matrix pencil, arXiv:2405.07210v1 (2024)](https://arxiv.org/abs/2405.07210v1)

### Optimizing over a joint numerical range removes false local minima

**Remember:** Optimize the three numbers the objective actually reads.

*Makes the theorem clean to state or prove.* MSC 15A60 (Norms of matrices, numerical range, applications of functional analysis to matrix theory), 90C26, 47A12. arXiv math.NA, math.OC. Level 4: research.

**Definition.** For Hermitian matrices A₁, A₂, A₃, the joint numerical range is the set of triples (x\*A₁x, x\*A₂x, x\*A₃x) over unit vectors x. The sum of two generalized Rayleigh quotients depends on x only through this triple. The paper minimizes a rational function over these triples instead of over unit vectors.

**Problem.** A unit vector minimizes the sum globally exactly when its triple minimizes globally over the joint numerical range. Every local minimizer on the range lifts to local minimizers on the sphere. The converse fails, so the new form removes some false local minima.

**How the definition helps.** The objective factors through the map from unit vectors to triples, and the range is exactly its image, so global minima match (our own). A local minimum on the range lifts because the map is continuous (our own). Some local minima on the sphere do not come from local minima on the range, and these disappear. The paper also uses convexity of the range to describe the optimum by a nonlinear eigenvalue problem.

**Paper or page:** [Eigenvalue backward errors of Rosenbrock systems and optimization of sums of Rayleigh quotient](https://arxiv.org/abs/2407.03784v1). It says: “This reformulation eliminates certain local minimizers of the original SRQ2 minimization and allows for convenient visualization of the solution.”

**Sources:**

- [Ding Lu, Anshul Prajapati, Punit Sharma, Shreemayee Bora, Eigenvalue backward errors of Rosenbrock systems and optimization of sums of Rayleigh quotient, arXiv:2407.03784v1 (2024)](https://arxiv.org/abs/2407.03784v1)

### Quadratic forms and twisted conjugation build Pin and Spin in every characteristic

**Remember:** Use the quadratic form, not its bilinear form, and twist the conjugation by the grading.

*Rules out counterexamples. Confidence: medium.* MSC 15A66 (Clifford algebras, spinors), 20G15. arXiv math.RA, math.GR. Level 4: research.

**Definition.** The Clifford algebra Cl(M, q) of a module M with a quadratic form q is the tensor algebra of M modulo the relations v·v = q(v). Let α be the automorphism of the Clifford algebra that −1 on M induces. The Clifford group is the group of invertible elements x whose twisted conjugation y ↦ x y α(x)⁻¹ maps M to M.

**Problem.** Construct the Pin and Spin groups as double covers of the orthogonal and special orthogonal groups. Do this for any quadratic module, including in characteristic 2.

**How the definition helps.** Using the quadratic form and twisted conjugation removes two failures of the naive construction. If the Clifford algebra is defined from a bilinear form, the construction gives wrong or trivial objects when 2 is not invertible. The reason is that a quadratic form is then not determined by its bilinear form. If the Clifford group uses ordinary conjugation, its map to the orthogonal group may fail to be surjective, and vectors act by negative reflections. With twisted conjugation, each vector v with q(v) invertible acts as the reflection in v, so the map onto the orthogonal group works. In characteristic 2 one must also replace the determinant by the Dickson invariant to define the special orthogonal group.

**nLab:** [Clifford algebra](https://ncatlab.org/nlab/show/Clifford+algebra). It says: “The Clifford group is sometimes defined without the twist in the conjugation, and this means the map to the orthogonal group may not be a surjection”

**Sources:**

- [H. Blaine Lawson, Marie-Louise Michelsohn, Spin geometry, Princeton Mathematical Series 38, Princeton University Press (1989)](https://doi.org/10.1515/9781400883912)
- [William Kingdon Clifford, Applications of Grassmann's extensive algebra, American Journal of Mathematics 1 (1878) 350–358](https://doi.org/10.2307/2369379)
