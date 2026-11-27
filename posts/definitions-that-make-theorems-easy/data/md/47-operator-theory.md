### Surjectivity makes an isometry’s adjoint its inverse

**Remember:** An isometry can undo its action everywhere only if it reaches everywhere.

*Rules out counterexamples.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A unitary map is a surjective linear isometry between Hilbert spaces. A linear isometry preserves norms, but need not be surjective.

**Problem.** The adjoint of a unitary map is its inverse.

**How the definition helps.** In our own proof, surjectivity turns the left inverse given by the adjoint into a two-sided inverse. The polarization identity recovers inner products from norms, so ⟨Ux,Uy⟩ = ⟨x,y⟩ gives U∗U = I. The right shift on square-summable sequences inserts a zero first coordinate. Its adjoint deletes the first coordinate, so composing in the opposite order erases the original first coordinate.

**Paper or page:** [Linear Transformation is Isomorphism iff Inverse Equals Adjoint](https://proofwiki.org/wiki/Linear_Transformation_is_Isomorphism_iff_Inverse_Equals_Adjoint). It says: “U is invertible and U⁻¹ = U∗, where U∗ denotes the adjoint of U.”

**Sources:** none listed. No primary source with a working link was found.

### Taking adjoints preserves the operator norm

**Remember:** Swap the two unit vectors to see the same norm.

*True by definition.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The operator norm of T is the supremum of ‖Tx‖ over the unit ball. On Hilbert spaces it also equals the supremum of \|⟨Tx,y⟩\| over both unit balls. The adjoint satisfies ⟨Tx,y⟩ = ⟨x,T∗y⟩.

**Problem.** A bounded operator between Hilbert spaces and its adjoint have the same operator norm.

**How the definition helps.** In our own proof, the two-vector formula gives the same supremum for T and its adjoint after exchanging x and y. Cauchy–Schwarz bounds the inner product by ‖Tx‖, and choosing y along a nonzero Tx attains that bound. This proves the two norm formulas agree.

**Paper or page:** [Norm of Adjoint](https://proofwiki.org/wiki/Norm_of_Adjoint). It says: “\\norm A\_{\\map B {H, K} }<sup>2</sup> = \\norm {A<sup>\*}\_{\\map</sup> B {K, H} }<sup>2</sup>”

**Sources:** none listed. No primary source with a working link was found.

### The adjoint turns a kernel into an orthogonal complement

**Remember:** Moving across the inner product turns zero into perpendicular to the range.

*True by definition.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** Define T∗ by ⟨Tx,y⟩ = ⟨x,T∗y⟩ for all x and y, rather than by transposing a matrix. The orthogonal complement of a set consists of all vectors perpendicular to every vector in the set.

**Problem.** For a bounded linear map T between Hilbert spaces, Tx = 0 exactly when x is perpendicular to every output of the adjoint.

**How the definition helps.** In our own proof, the adjoint equation turns perpendicularity to every T∗y into perpendicularity of Tx to every y. Setting y = Tx shows that Tx must be zero. Conversely, Tx = 0 makes every test vanish. Riesz representation supplies the adjoint used in place of a matrix transpose.

**Paper or page:** [Kernel of Linear Transformation is Orthocomplement of Image of Adjoint](https://proofwiki.org/wiki/Kernel_of_Linear_Transformation_is_Orthocomplement_of_Image_of_Adjoint). It says: “ker A = (im A∗)⊥”

**Sources:** none listed. No primary source with a working link was found.

### The inner product definition turns adjoint existence into Riesz representation

**Remember:** Move the map across the inner product, one test vector at a time.

*True by definition.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** Define the adjoint T∗ by ⟨Tx,y⟩ = ⟨x,T∗y⟩ for all x and y. Unlike a conjugate transpose of a matrix, this definition uses no basis.

**Problem.** Every bounded linear map between Hilbert spaces has a unique bounded adjoint.

**How the definition helps.** In our own proof, fixing y turns the adjoint equation into a request to represent the functional x ↦ ⟨Tx,y⟩. Take the inner product linear in its first variable. Riesz representation gives a unique vector T∗y for that functional, with norm at most ‖T‖‖y‖. Uniqueness gives linearity in y.

**Paper or page:** [Existence and Uniqueness of Adjoint](https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Adjoint). It says: “each bounded linear transformation between Hilbert spaces has a unique adjoint.”

**Sources:** none listed. No primary source with a working link was found.

### Invertibility makes polynomial spectral mapping a factorization

**Remember:** Factor the polynomial and check the shifted operators one at a time.

*Makes the theorem clean to state or prove.* MSC 47A10 (Spectrum, resolvent). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The spectrum σ(T) of a bounded operator consists of scalars λ for which T − λI has no bounded inverse. This extends the finite-dimensional description by eigenvalues.

**Problem.** For a bounded operator T on a nonzero complex Banach space and a polynomial p, σ(p(T)) = p(σ(T)).

**How the definition helps.** In our own proof, defining spectrum by invertibility lets us test p(T) − μI through its factors. For nonconstant p, factor p(z) − μ into linear factors over the complex numbers. The corresponding operator factors commute, so their product is invertible exactly when each factor is invertible. For constant p = c, both sides equal {c} because every operator on a nonzero complex Banach space has nonempty spectrum.

**Paper or page:** [Spectral Mapping Theorem for Polynomials](https://proofwiki.org/wiki/Spectral_Mapping_Theorem_for_Polynomials). It says: “\\map {\\sigma<sub>A</sub>} {\\map p x} = p \\sqbrk {\\map {\\sigma<sub>A</sub>} x}”

**Sources:** none listed. No primary source with a working link was found.

### The continuous spectrum sees failures of surjectivity missed by eigenvalues

**Remember:** Every output is approximable, some output is missed, and the kernel is zero.

*Makes the theorem clean to state or prove.* MSC 47A10 (Spectrum, resolvent). arXiv math.FA. Level 2: later undergraduate.

**Definition.** For a bounded operator T, λ lies in the continuous spectrum when T − λI is one-to-one with dense, proper range. Its outputs can approximate every vector, but they miss at least one. Here I denotes the identity.

**Problem.** On ℓ², the space of square-summable sequences, the operator that divides coordinate n by n has zero in its continuous spectrum. Zero is not an eigenvalue.

**How the definition helps.** The continuous spectrum records this failure of surjectivity even though no nonzero vector goes to zero. In our own example, every sequence with finitely many nonzero terms is in the range, so the range is dense. The output with coordinates 1/n has no square-summable preimage, since every input coordinate would have to be 1.

**Wikipedia:** [Spectrum (functional analysis)](https://en.wikipedia.org/wiki/Spectrum_%28functional_analysis%29). It says: “is injective and has dense range, but is not surjective”

**Sources:** none listed. No primary source with a working link was found.

### Rank one projectors show numerical range convexity

**Remember:** Two vectors reduce numerical range convexity to a filled ellipse.

*True by definition.* MSC 47A12 (Numerical range, numerical radius). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The numerical range of a complex square matrix A consists of x\*Ax for all unit column vectors x. Equivalently, it consists of trace(AP) for all orthogonal projections P onto lines, since P = xx\*.

**Problem.** The numerical range of a complex square matrix is convex.

**How the definition helps.** Compress A to the span of the unit vectors giving any two numerical values, preserving both values (our own). In dimension two the rank-one projections form a sphere in the real affine space of trace-one Hermitian matrices (our own). The map P ↦ trace(AP) sends this sphere onto a filled ellipse, segment, or point (our own). Its image therefore contains the joining segment, and dimension one gives a single value (our own).

**Wikipedia:** [Numerical range](https://en.wikipedia.org/wiki/Numerical_range). It says: “The image of a 2-sphere under a linear projection is a filled ellipse.”

**Sources:** none listed. No primary source with a working link was found.

### Normal pseudospectra are spectral neighborhoods

**Remember:** For normal matrices, resolvent size measures distance to the closest eigenvalue.

*True by definition.* MSC 47A55 (Perturbation theory of linear operators). arXiv math.SP, math.FA. Level 2: later undergraduate.

**Definition.** Fix ε &gt; 0 and a complex square matrix A. Its ε-pseudospectrum contains its eigenvalues and exactly those other numbers z with ‖(A − zI)⁻¹‖ ≥ 1/ε. The norm uses Euclidean lengths. Equivalently, collect all eigenvalues of A + E for matrices E with ‖E‖ ≤ ε.

**Problem.** If A is normal, meaning AA\* = A\*A, its ε-pseudospectrum consists exactly of numbers at distance at most ε from an eigenvalue.

**How the definition helps.** The spectral theorem diagonalizes A in an orthonormal basis (our own). Off the spectrum, the resolvent norm is therefore the largest reciprocal distance to an eigenvalue (our own). It is at least 1/ε exactly when the nearest eigenvalue is at distance at most ε, with eigenvalues already included by definition (our own).

**Wikipedia:** [Pseudospectrum](https://en.wikipedia.org/wiki/Pseudospectrum). It says: “The ε-pseudospectrum of a matrix A consists of all eigenvalues of matrices which are ε-close to A:”

**Paper or page:** [Stability Analysis of a Simple Discretization Method for a Class of Strongly Singular Integral Equations](https://arxiv.org/abs/2302.13159v3). It says: “‖(λ𝕀 − AΩ)⁻¹‖ = dist(λ, 𝒞)⁻¹.”

**Sources:** none listed. No primary source with a working link was found.

### Compact operators cannot have bounded inverses in infinite dimension

**Remember:** If a compact map were invertible, the identity would be compact too.

*Rules out counterexamples.* MSC 47B07 (Linear operators defined by compactness properties). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A compact linear operator sends bounded sets to sets with compact closure. The spectrum consists of scalars λ for which T − λI has no bounded two-sided inverse, where I is the identity.

**Problem.** Zero belongs to the spectrum of every compact operator on an infinite-dimensional complex Banach space.

**How the definition helps.** In our own proof, compactness would force a bounded inverse to carry a compact set onto a set containing the closed unit ball. The ball would then be a closed subset of a compact set. Riesz’s lemma rules out a compact unit ball in infinite dimension. Without compactness, the identity is its own bounded inverse.

**Paper or page:** [Spectrum of Compact Linear Operator on Infinite-Dimensional Banach Space contains Zero](https://proofwiki.org/wiki/Spectrum_of_Compact_Linear_Operator_on_Infinite-Dimensional_Banach_Space_contains_Zero). It says: “That is, T is not invertible as a bounded linear operator.”

**Sources:** none listed. No primary source with a working link was found.

### Compact self-adjoint operators have orthonormal eigenbases

**Remember:** Compactness yields an eigenvector, and self-adjointness preserves its perpendicular space.

*Rules out counterexamples.* MSC 47B07 (Linear operators defined by compactness properties). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A compact operator takes every bounded sequence to a sequence with a norm-convergent subsequence. A self-adjoint operator equals its adjoint, meaning ⟨Tx,y⟩ = ⟨x,Ty⟩.

**Problem.** Every compact self-adjoint operator on a Hilbert space has an orthonormal basis of eigenvectors with real eigenvalues.

**How the definition helps.** In our own proof, compactness enters through the fact that every nonzero compact self-adjoint operator has an eigenvector with nonzero eigenvalue. Self-adjointness preserves the perpendicular complement of a maximal orthonormal family of such eigenvectors and makes every eigenvalue real. This fact forces the operator to vanish on that complement, whose orthonormal basis completes the eigenbasis. Without compactness, multiplication by t on square-integrable functions on \[0,1\] has no eigenvectors.

**Wikipedia:** [Spectral theorem](https://en.wikipedia.org/wiki/Spectral_theorem). It says: “Then there is an orthonormal basis of V consisting of eigenvectors of A. Each eigenvalue is real.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness limits the dimension of nonzero eigenspaces

**Remember:** Scaling by a nonzero eigenvalue cannot make an infinite unit ball compact.

*Rules out counterexamples.* MSC 47B07 (Linear operators defined by compactness properties). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A compact operator sends bounded sets to sets with compact closure. This imposes more than a bounded operator, which only sends bounded sets to bounded sets.

**Problem.** For a compact operator on a Hilbert space, every eigenspace for a nonzero eigenvalue is finite-dimensional.

**How the definition helps.** In our own proof, compactness gives the closed unit ball of the eigenspace compact closure, since the operator simply rescales it by a nonzero number. The eigenspace is closed, so its closed unit ball is compact. Riesz’s lemma rules this out in infinite dimension. For the bounded identity on square-summable sequences, every vector belongs to the eigenspace at 1.

**Paper or page:** [Nonzero Eigenvalue of Compact Operator has Finite Dimensional Eigenspace](https://proofwiki.org/wiki/Nonzero_Eigenvalue_of_Compact_Operator_has_Finite_Dimensional_Eigenspace). It says: “Then the eigenspace for λ has finite dimension.”

**Sources:** none listed. No primary source with a working link was found.

### Finite covers make operator norm limits of compact maps compact

**Remember:** A uniform perturbation only enlarges the covering balls.

*True by definition.* MSC 47B07 (Linear operators defined by compactness properties). arXiv math.FA. Level 2: later undergraduate.

**Definition.** Into a Banach space, define a compact operator by requiring its unit ball image to have finite covers by balls of every positive radius. This is equivalent to requiring that the image have compact closure.

**Problem.** An operator norm limit of compact operators into a Banach space is compact.

**How the definition helps.** In our own proof, uniform error less than half the desired radius transfers a finite cover to the limit. Choose a compact operator within that error and cover its unit ball image by finitely many balls of half the desired radius. Doubling those radii covers the limit operator’s image. Completeness of the target makes finite covers at every positive radius equivalent to compact closure.

**Paper or page:** [Space of Compact Linear Transformations is Banach Space](https://proofwiki.org/wiki/Space_of_Compact_Linear_Transformations_is_Banach_Space). It says: “is a Banach space with respect to this norm.”

**Sources:** none listed. No primary source with a working link was found.

### Relatively compact images survive composition on either side

**Remember:** A bounded map preserves bounded input sets and compact output closures.

*True by definition.* MSC 47B07 (Linear operators defined by compactness properties). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A linear map between normed spaces is compact if the image of every bounded set has compact closure. Equivalently, the images of any bounded sequence have a convergent subsequence.

**Problem.** Composing a compact operator with a bounded linear operator on either side gives a compact operator whenever the spaces match.

**How the definition helps.** In our own proof, the bounded-set definition lets us follow one set through both maps. A bounded linear map applied first preserves boundedness. Applied last, it takes the compact closure continuously to a compact set containing the closure of the final image. The equivalence with the sequence definition uses the sequence criterion for compactness in metric spaces.

**nLab:** [compact operator](https://ncatlab.org/nlab/show/compact+operator). It says: “A linear operator is compact if it sends bounded subsets to relatively compact subsets.”

**Sources:** none listed. No primary source with a working link was found.

### Commuting with the adjoint makes the two kernels agree

**Remember:** A normal operator commutes with its adjoint, so their output lengths agree.

*Rules out counterexamples.* MSC 47B15 (Hermitian and normal operators (spectral measures, functional calculus, etc.)), 47A05. arXiv math.FA. Level 2: later undergraduate.

**Definition.** A bounded operator T on a Hilbert space is normal if it commutes with its adjoint, so T∗T = TT∗. This is weaker than self-adjointness, which requires T = T∗.

**Problem.** A bounded normal operator and its adjoint have the same kernel, the set of vectors they send to zero.

**How the definition helps.** In our own proof, commutation gives ‖Tx‖² = ⟨x,T∗Tx⟩ = ⟨x,TT∗x⟩ = ‖T∗x‖². Thus one norm vanishes exactly when the other does. Without commutation, the map (a,b) ↦ (b,0) and its adjoint (a,b) ↦ (0,a) have different coordinate axes as kernels.

**Paper or page:** [Kernel of Normal Operator is Kernel of Adjoint](https://proofwiki.org/wiki/Kernel_of_Normal_Operator_is_Kernel_of_Adjoint). It says: “ker A = ker A∗”

**Sources:** none listed. No primary source with a working link was found.

### Self-adjointness gives real spectrum beyond eigenvalues

**Remember:** A self-adjoint operator can move across the inner product unchanged.

*Rules out counterexamples.* MSC 47B15 (Hermitian and normal operators (spectral measures, functional calculus, etc.)), 47A10. arXiv math.FA. Level 2: later undergraduate.

**Definition.** A bounded operator T on a complex Hilbert space is self-adjoint if ⟨Tx,y⟩ = ⟨x,Ty⟩ for every x and y. Its spectrum consists of the scalars λ for which T − λI has no bounded inverse.

**Problem.** The spectrum of a bounded self-adjoint operator on a complex Hilbert space is real.

**How the definition helps.** In our own proof, self-adjointness makes ⟨Tx,x⟩ real, so a nonreal shift satisfies ‖(T − λI)x‖ ≥ \|Im λ\|‖x‖. This follows by taking the imaginary part of the inner product with x and applying Cauchy–Schwarz. The bound gives closed range by completeness, and the same bound for the adjoint gives dense range because its kernel is zero. Thus the shift has a bounded inverse, whereas multiplication by i alone has spectrum {i}.

**Paper or page:** [Spectrum of Self-Adjoint Bounded Linear Operator is Real](https://proofwiki.org/wiki/Spectrum_of_Self-Adjoint_Bounded_Linear_Operator_is_Real). It says: “σ(T) ⊆ ℝ”

**Sources:** none listed. No primary source with a working link was found.

### A dense domain makes the adjoint of an operator well defined

**Remember:** Only a dense domain pins down the vector that represents the functional.

*Makes the theorem clean to state or prove.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)), 47B25. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** An operator T is densely defined when its domain is a dense subspace. Its adjoint T\* is defined at y when x ↦ ⟨Tx, y⟩ is continuous on the domain. Then T\*y is the vector z with ⟨Tx, y⟩ = ⟨x, z⟩ for all x in the domain.

**Problem.** The adjoint T\* of a linear operator T on a Hilbert space is a well-defined, single-valued operator exactly when T is densely defined.

**How the definition helps.** In our own argument, density gives each bounded functional on the domain a unique continuous extension to the Hilbert space. The Riesz representation theorem gives its unique representing vector. Without density, every vector perpendicular to the domain represents the zero functional.

**Wikipedia:** [Unbounded operator](https://en.wikipedia.org/wiki/Unbounded_operator). It says: “The denseness of the domain is necessary and sufficient for the existence of the adjoint (if X and Y are Hilbert spaces) and the transpose; see the sections below.”

**Sources:**

- [J. von Neumann, Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren, Mathematische Annalen 102 (1930), 49–131](https://doi.org/10.1007/BF01782338)

### Closability gives densely defined adjoints

**Remember:** Without a vertical limit in the graph, the adjoint has dense domain.

*Rules out counterexamples.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)), 46C05. arXiv math.FA. Level 3: graduate.

**Definition.** A densely defined operator acts on a dense linear subspace of a Hilbert space. It is closable if the closure of its graph still assigns at most one output to each input. Its adjoint is defined at y when the functional x ↦ ⟨Tx,y⟩ is bounded on the domain.

**Problem.** A densely defined linear operator on a complex Hilbert space has a densely defined adjoint if and only if it is closable.

**How the definition helps.** In our own proof, closability excludes every nonzero vertical graph limit (0,y). The graph orthogonality identity identifies these y, together with zero, as the orthogonal complement of the adjoint domain. That complement vanishes exactly when the domain is dense. For polynomial evaluation f ↦ f(0)·1 on L²\[0,1\], the inputs (1−x)ⁿ tend to zero while their outputs stay one.

**Paper or page:** [Densely-Defined Linear Operator is Closable iff Adjoint is Densely-Defined](https://proofwiki.org/wiki/Densely-Defined_Linear_Operator_is_Closable_iff_Adjoint_is_Densely-Defined). It says: “A densely-defined linear operator on a complex Hilbert space is closable if and only if its adjoint is also densely-defined.”

**Sources:** none listed. No primary source with a working link was found.

### Closed densely defined operators are exactly those equal to their double adjoint

**Remember:** Closed plus dense is the class where taking adjoints twice gives back T.

*Makes the theorem clean to state or prove.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)), 47B25. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** A linear operator T on a Hilbert space H is closed if its graph is closed in H × H. It is densely defined if its domain is dense in H.

**Problem.** An operator T on a Hilbert space is closed and densely defined if and only if T\*\* = T.

**How the definition helps.** In our own proof, the graph of the adjoint is the orthogonal complement of a rotation of the original graph. For closed densely defined T, the adjoint domain is dense, and taking the complement twice recovers the original graph. Conversely, existence of T\*\* as an operator requires density, and its graph is closed.

**Wikipedia:** [Unbounded operator](https://en.wikipedia.org/wiki/Unbounded_operator). It says: “An operator T is closed and densely defined if and only if T\*\* = T.”

**Sources:**

- [J. von Neumann, Über adjungierte Funktionaloperatoren, Annals of Mathematics 33 (1932), 294–310](https://doi.org/10.2307/1968331)

### Closed graphs give complete domains

**Remember:** A Cauchy sequence in graph norm controls both input and output.

*True by definition.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** For a linear operator T between normed spaces, its graph norm on its domain is ‖x‖ + ‖Tx‖.

**Problem.** For a linear operator between Banach spaces, the domain is complete in graph norm exactly when the operator has a closed graph.

**How the definition helps.** The graph norm makes x ↦ (x, Tx) preserve distances when the product space uses the sum norm (our own). The graph is complete exactly when it is closed in the complete product space (our own). For a particular operator, one still has to prove its graph is closed (our own).

**Wikipedia:** [Unbounded operator](https://en.wikipedia.org/wiki/Unbounded_operator). It says: “An operator T is said to be closed if its graph Γ(T) is a closed set.”

**Paper or page:** [The spectral theorem for normal operators on a Clifford module](https://arxiv.org/abs/2112.05201v1). It says: “is a complete normed right module over ℝₙ.”

**Sources:** none listed. No primary source with a working link was found.

### Partial isometries give every bounded operator a polar decomposition

**Remember:** Preserve lengths perpendicular to the kernel.

*Rules out counterexamples.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)), 47A68. arXiv math.FA. Level 3: graduate.

**Definition.** A partial isometry is an operator that preserves length on the orthogonal complement of its kernel. Its initial space is that complement. The absolute value of an operator A is \|A\|, the positive square root of A\*A.

**Problem.** Every bounded operator A between complex Hilbert spaces factors as A = U\|A\|, with U a partial isometry. The factorization is unique when the initial space of U is the closure of the range of \|A\|.

**How the definition helps.** In our own proof, ‖Ax‖ = ‖\|A\|x‖ makes \|A\|x ↦ Ax a well-defined isometry. Extend it continuously to the range closure and set it to zero on the orthogonal complement. These prescriptions force uniqueness for the stated initial space. The unilateral shift has absolute value I, so its factor must be the shift itself, which is not onto.

**Wikipedia:** [Polar decomposition](https://en.wikipedia.org/wiki/Polar_decomposition). It says: “The operator U must be weakened to a partial isometry, rather than unitary, because of the following issues.”

**Sources:** none listed. No primary source with a working link was found.

### The weak operator topology makes taking adjoints continuous, unlike the strong one

**Remember:** The adjoint only swaps the two vectors in each test.

*True by definition.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** On bounded operators on a Hilbert space, the weak operator topology is the weakest topology that makes each map T ↦ ⟨Tx, y⟩ continuous. The strong operator topology instead makes each map T ↦ Tx continuous for the norm of the Hilbert space.

**Problem.** On an infinite-dimensional Hilbert space, taking adjoints is continuous in the weak operator topology and discontinuous in the strong operator topology.

**How the definition helps.** In the weak operator topology, each test of T\* is the complex conjugate of the test of T with the two vectors exchanged. For our own counterexample, let B act as the backward shift on a copy of ℓ² and as zero on its orthogonal complement. Then Bⁿ tends strongly to zero, while its adjoint preserves lengths on that copy.

**Wikipedia:** [Weak operator topology](https://en.wikipedia.org/wiki/Weak_operator_topology). It says: “The adjoint operation T → T\*, as an immediate consequence of its definition, is continuous in WOT.”

**Sources:** none listed. No primary source with a working link was found.

### Closability rules out energy at zero

**Remember:** A zero limit must carry zero energy.

*Rules out counterexamples.* MSC 47A07 (Forms (bilinear, sesquilinear, multilinear)). arXiv math.FA. Level 3: graduate.

**Definition.** A nonnegative quadratic form q on a linear subspace D of a Hilbert space is closed if D is complete in the norm x↦√(‖x‖²+q(x)). It is closable if every sequence xₙ∈D with xₙ→0 and q(xₙ−xₘ)→0 as n,m→∞ satisfies q(xₙ)→0.

**Problem.** Let T be a densely defined linear operator between Hilbert spaces and put q(x)=‖Tx‖² on dom T. Then q has a closed extension exactly when the closure of the graph of T is single-valued.

**How the definition helps.** In our own proof, a closed form extension forces the closability test by completeness in its form norm. The test excludes precisely the nonzero limits of Txₙ when xₙ→0, since Cauchy output sequences converge. A single-valued graph closure then defines a closed operator whose energy extends q. Midpoint evaluation on smooth L² functions fails the test on shrinking bumps of height one.

**Paper or page:** [A generalized Birman-Schwinger principle and applications to one-dimensional Schrödinger operators with distributional potentials](https://arxiv.org/abs/2507.02251v2). It says: “Then the form 𝔞ₜ is closed (resp., closable) in ℋ₁ if and only if T is closed (resp., closable).”

**Sources:** none listed. No primary source with a working link was found.

### Closed graph forms make adjoint products self-adjoint

**Remember:** The graph norm closes the energy of an adjoint product.

*True by definition.* MSC 47A07 (Forms (bilinear, sesquilinear, multilinear)). arXiv math.FA. Level 3: graduate.

**Definition.** Let T be a closed, densely defined operator between Hilbert spaces. Define its energy form by a(u,v) = ⟨Tu,Tv⟩ on the domain of T. A nonnegative form is closed when its domain is complete in the norm √(‖u‖² + a(u,u)).

**Problem.** The product T\*T is nonnegative and self-adjoint, with its usual product domain.

**How the definition helps.** The form norm equals the graph norm, so the closed graph makes the form closed. In our own argument, u in the form domain represents an operator input exactly when v ↦ ⟨Tv,Tu⟩ is norm-bounded. This says Tu belongs to the adjoint domain, and the representing vector is T\*Tu. The closed form representation theorem gives nonnegativity and self-adjointness.

**Paper or page:** [A generalized Birman-Schwinger principle and applications to one-dimensional Schrödinger operators with distributional potentials](https://arxiv.org/abs/2507.02251v2). It says: “If T is closed, the unique nonnegative self-adjoint operator associated with 𝔞ₜ in ℋ₁ equals T\*T ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### An operator that is not closed has the whole plane as spectrum

**Remember:** A closed graph stays closed when you shift and interchange its coordinates.

*Rules out counterexamples.* MSC 47A10 (Spectrum, resolvent), 47A05. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** A linear operator T on a complex Banach space X is closed if its graph is closed in X × X. Its spectrum consists of all λ∈ℂ for which T−λI has no bounded inverse defined on X.

**Problem.** If an operator T on a Banach space is not closed, then its spectrum is all of ℂ. If T is closed, λ is in the spectrum exactly when T − λ is not a bijection from its domain onto the space.

**How the definition helps.** If T − λ has a bounded inverse defined everywhere, the graph of that inverse is closed, so T is closed (our own short proof). So an operator that is not closed has every λ in its spectrum. For a closed operator, the closed graph theorem makes the inverse bounded as soon as it exists.

**Wikipedia:** [Spectrum (functional analysis)](https://en.wikipedia.org/wiki/Spectrum_%28functional_analysis%29), [Closed linear operator](https://en.wikipedia.org/wiki/Closed_linear_operator). It says: “If the operator T is not closed, then σ(T)=ℂ.”

**Sources:** none listed. No primary source with a working link was found.

### Compact resolvents give discrete spectra

**Remember:** One shifted inverse sends bounded sets into sets with compact closure.

*Makes the theorem clean to state or prove.* MSC 47A10 (Spectrum, resolvent). arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** An operator has compact resolvent if one shift A − zI has a bounded, compact inverse on the whole space. A compact operator sends bounded sets to sets with compact closure.

**Problem.** Let A be a closed operator with compact resolvent on a complex Banach space. Every spectral point is an isolated eigenvalue with a finite-dimensional space of generalized eigenvectors. The spectrum has no finite accumulation point.

**How the definition helps.** The shifted inverse lets us use the spectral theory of compact operators (our own). The map λ ↦ 1/(λ − z) sends finite spectral points to nonzero spectral points of the inverse (our own). The hard work lies in proving the inverse is compact and proving the compact operator theorem (our own).

**Wikipedia:** [Resolvent formalism](https://en.wikipedia.org/wiki/Resolvent_formalism). It says: “The spectrum σ(A) of such A is a discrete subset of ℂ.”

**Paper or page:** [Spectral properties of Schrödinger operator with translations and Neumann boundary conditions](https://arxiv.org/abs/2506.23645v1). It says: “its spectrum consists of a countably many eigenvalues with the only accumulation point at infinity”

**Sources:** none listed. No primary source with a working link was found.

### Defined by invertibility, the spectrum of an operator is never empty

**Remember:** The spectrum is where T − λI fails to be invertible, not only injective.

*Rules out counterexamples.* MSC 47A10 (Spectrum, resolvent), 47B01. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Let T be a bounded operator on a complex Banach space, and let I be the identity operator. The spectrum of T is the set of complex numbers λ for which T − λI has no bounded inverse.

**Problem.** Every bounded operator on a nonzero complex Banach space has nonempty spectrum. This generalizes the fact that every complex square matrix has an eigenvalue.

**How the definition helps.** In our own comparison, the right shift on ℓ² has no eigenvalues but fails surjectivity at zero. An empty spectrum would make the resolvent entire. Its norm tends to zero at infinity by the Neumann series. Liouville’s theorem would force the inverse to vanish everywhere.

**Wikipedia:** [Spectrum (functional analysis)](https://en.wikipedia.org/wiki/Spectrum_%28functional_analysis%29). It says: “In fact every bounded linear operator on a complex Banach space must have a non-empty spectrum.”

**Sources:** none listed. No primary source with a working link was found.

### Graph norms test resolvent compactness

**Remember:** Compactness of the domain inclusion is compactness of the inverse in disguise.

*True by definition. Confidence: medium.* MSC 47A10 (Spectrum, resolvent). arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Let A be a closed linear operator on a Banach space. Give its domain the graph norm ‖u‖ + ‖Au‖, which makes the domain a Banach space on which A − zI is bounded.

**Problem.** Let A be closed with a bounded, everywhere-defined shifted inverse. It has compact resolvent exactly when its graph-norm domain unit ball has compact closure in the ambient space.

**How the definition helps.** In our own proof, A−zI is a bounded isomorphism from the graph-norm domain onto the ambient space at a resolvent point z. Composing its inverse with the domain inclusion gives the shifted inverse on the ambient space. Conversely, composing that shifted inverse with A−zI gives the inclusion. Thus either map is compact exactly when the other is.

**Paper or page:** [Conditions for sectoriality and compactness of the resolvent for a non-self-adjoint Sturm--Liouville operator with singular distributional potential](https://arxiv.org/abs/2503.16172v1). It says: “‖L₀y‖ + ‖y‖ ≤ 1”

**Sources:** none listed. No primary source with a working link was found.

### Self-adjoint spectra admit approximate eigenvectors

**Remember:** For self-adjoint operators, approximate eigenvectors see the whole spectrum.

*Rules out counterexamples.* MSC 47A10 (Spectrum, resolvent). arXiv math.SP. Level 3: graduate.

**Definition.** An approximate eigenvalue λ admits unit vectors in the operator domain with residuals (T − λI)x tending to zero. For a self-adjoint operator, the operator and its adjoint agree, including their domains.

**Problem.** Every spectral point of a self-adjoint operator is an approximate eigenvalue.

**How the definition helps.** Self-adjointness gives real spectrum and rules out a missing range direction at any real λ where T−λI is bounded below. In our own proof, that bound gives a closed range and zero kernel. The range is dense because its orthogonal complement equals that kernel, so the shift has a bounded inverse. The right shift on ℓ² preserves lengths but misses a direction at zero.

**Paper or page:** [Element of Spectrum of Densely-Defined Linear Operator not in Residual Spectrum is Approximate Eigenvalue/Corollary](https://proofwiki.org/wiki/Element_of_Spectrum_of_Densely-Defined_Linear_Operator_not_in_Residual_Spectrum_is_Approximate_Eigenvalue/Corollary). It says: “Then λ is an approximate eigenvalue of (D(T), T).”

**Sources:** none listed. No primary source with a working link was found.

### Singular sequences miss isolated finite eigenspaces

**Remember:** A singular sequence must escape every fixed finite-dimensional space.

*Rules out counterexamples.* MSC 47A10 (Spectrum, resolvent). arXiv math.SP. Level 3: graduate.

**Definition.** A singular sequence for λ consists of unit vectors xₙ in the domain of T such that (T − λI)xₙ tends to zero in norm. It also requires weak convergence to zero, meaning ⟨xₙ,y⟩ tends to zero for each fixed vector y.

**Problem.** For a self-adjoint operator, the essential spectrum excludes isolated eigenvalues with finite-dimensional eigenspaces. Weyl’s criterion says that λ belongs to this spectrum exactly when λ has a singular sequence.

**How the definition helps.** Weak convergence excludes repeating one unit eigenvector, our own example of satisfying only the residual test. At an isolated eigenvalue of finite multiplicity, weak convergence makes the eigenspace projection vanish in norm. The spectral gap bounds the remaining component by a constant times the residual, contradicting unit norm. Weyl’s criterion supplies the converse.

**Wikipedia:** [Essential spectrum](https://en.wikipedia.org/wiki/Essential_spectrum). It says: “A number λ is in σₑₛₛ(T) if and only if there exists a sequence of unit vectors”

**Sources:** none listed. No primary source with a working link was found.

### The essential spectrum is defined to survive compact perturbations

**Remember:** What no compact perturbation can remove is, by definition, essential.

*True by definition.* MSC 47A10 (Spectrum, resolvent), 47A55. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** One definition takes the essential spectrum of T to be the intersection of the spectra of T + B over all compact operators B. For a self-adjoint T, another definition takes the spectrum with the isolated eigenvalues of finite multiplicity removed.

**Problem.** Weyl's theorem says that adding a compact self-adjoint operator does not change the essential spectrum of a self-adjoint operator.

**How the definition helps.** With the intersection definition, invariance under compact perturbation is true at once, because B ranges over all compact operators. The work moves to the theorem that the definitions agree. For self-adjoint operators, Weyl's criterion describes the same set by sequences of unit vectors that tend weakly to zero with (T − λ)ψ → 0.

**Wikipedia:** [Essential spectrum](https://en.wikipedia.org/wiki/Essential_spectrum). It says: “This explains why it is called the essential spectrum: Weyl (1910) originally defined the essential spectrum of a certain differential operator to be the spectrum independent of boundary conditions.”

**Sources:**

- [H. Weyl, Über gewöhnliche Differentialgleichungen mit Singularitäten und die zugehörigen Entwicklungen willkürlicher Funktionen, Mathematische Annalen 68 (1910), 220–269](https://doi.org/10.1007/BF01474161)

### Two-sided power bounds force scalars

**Remember:** One bound controls every power, forward and backward.

*Rules out counterexamples.* MSC 47A10 (Spectrum, resolvent). arXiv math.SP. Level 3: graduate.

**Definition.** An invertible bounded operator on a complex Banach space is doubly power bounded if one constant bounds the norms of all its integer powers. Ordinary power boundedness controls only nonnegative powers.

**Problem.** An invertible bounded operator with bounded powers in both directions and singleton spectrum must be a scalar operator.

**How the definition helps.** In our own example, let V be the Volterra integration operator on L²(0,1). It has spectrum {0}, and exp(−V) is a contraction with spectrum {1}. Applied to the constant function one, exp(nV) dominates 1+nx, so the negative powers are unbounded. Gelfand’s theorem gives the scalar conclusion under both power bounds.

**Paper or page:** [Spectral decomposition of power-bounded operators: The finite spectrum case](https://arxiv.org/abs/2501.02769v1). It says: “Suppose further that the spectrum σ(a) = {λ} is a singleton. Then a = λe.”

**Sources:** none listed. No primary source with a working link was found.

### Averaging over a finite group is orthogonal projection onto invariant functions

**Remember:** Average over the whole group to keep exactly the invariant part.

*True by definition.* MSC 47A15 (Invariant subspaces of linear operators), 60J05, 20C05. arXiv math.PR, math.FA. Level 3: graduate.

**Definition.** For a measurable action of a finite group G preserving a probability measure π, define Qf(x) = ∑<sub>g∈G</sub> f(gx)/\|G\|. In L²(π), f is invariant if for each g∈G the equality f(gx)=f(x) holds almost everywhere.

**Problem.** In L²(π), the space of square-integrable functions, Q is the orthogonal projection onto the invariant functions. As a Markov kernel, Q is also reversible with respect to π.

**How the definition helps.** In our own proof, multiplying by a fixed group element permutes the summands, so Qf is invariant. Since Q fixes every invariant function, it is a projection. Invariance of π and reindexing by g ↦ g⁻¹ give ⟨Qf,h⟩ = ⟨f,Qh⟩. This makes the projection orthogonal and gives detailed balance by testing indicators.

**Paper or page:** [Group-averaged Markov chains: mixing improvement](https://arxiv.org/abs/2509.02996v2). It says: “Q is the projection operator onto V”

**Sources:**

- [Michael C. H. Choi, Youjia Wang, Group-averaged Markov chains: mixing improvement, arXiv:2509.02996 (2025)](https://arxiv.org/abs/2509.02996v2)

### Unitary dilations bound operator polynomials

**Remember:** Lift to a unitary, bound there, then compress.

*True by definition.* MSC 47A20 (Dilations, extensions, compressions of linear operators). arXiv math.FA. Level 3: graduate.

**Definition.** A unitary power dilation represents every nonnegative power of a Hilbert space operator T using powers of one unitary on a larger space. Each power of T acts by applying the corresponding unitary power and projecting orthogonally back.

**Problem.** Let T have operator norm at most one. For every complex polynomial p, the norm of p(T) is at most the maximum of \|p\| on the closed unit disk.

**How the definition helps.** A single dilation represents every term of the polynomial, so the sum is also a compression. In our own account, orthogonal projection cannot increase the norm. The unitary spectral theorem bounds the polynomial on the larger space by its maximum on the unit circle. Sz.-Nagy’s dilation theorem supplies the unitary and avoids estimating powers of T term by term.

**Wikipedia:** [Von Neumann's inequality](https://en.wikipedia.org/wiki/Von_Neumann%27s_inequality). It says: “The inequality can be proved by considering the unitary dilation of T, for which the inequality is obvious.”

**Sources:**

- [Béla Sz.-Nagy, Hari Bercovici, Ciprian Foias, and László Kérchy, Contractions and Their Dilations (2010).](https://doi.org/10.1007/978-1-4419-6094-8_1)

### Adjoints preserve the Fredholm property

**Remember:** Take adjoints of both inverse identities and keep the compact errors.

*True by definition.* MSC 47A53 ((Semi-) Fredholm operators; index theories). arXiv math.FA. Level 3: graduate.

**Definition.** A bounded operator T on a Hilbert space is Fredholm if some bounded S makes ST − I and TS − I compact. A compact operator sends bounded sets to sets with compact closure. The usual definition requires closed range, finite-dimensional kernel, and finite-dimensional quotient by the range.

**Problem.** The adjoint of a bounded operator on a Hilbert space is Fredholm exactly when the operator is Fredholm.

**How the definition helps.** Taking adjoints preserves compact errors and swaps the two inverse identities (our own). Taking the adjoint twice gives the converse (our own). Atkinson’s theorem connects this test to the usual definition (our own).

**Paper or page:** [Perturbations of APS Boundary Conditions for Lorentzian Dirac Operators](https://arxiv.org/abs/2408.16696v3). It says: “T\* is Fredholm if and only if T is Fredholm.”

**Sources:** none listed. No primary source with a working link was found.

### Closed range matters for Fredholmness

**Remember:** An adjoint kernel only sees the closure of the range.

*Rules out counterexamples.* MSC 47A53 ((Semi-) Fredholm operators; index theories). arXiv math.FA. Level 3: graduate.

**Definition.** A bounded operator T on a Hilbert space is Fredholm when its range is closed and the kernels of T and T\* are finite-dimensional. Counting the two kernels is not enough without the closed range.

**Problem.** A bounded Fredholm operator has finite-dimensional quotient by its range. The dimension of this quotient equals the dimension of the kernel of the adjoint.

**How the definition helps.** In our own proof, closed range gives each quotient class a unique representative perpendicular to the range. These representatives form the adjoint kernel, which is finite-dimensional. On ℓ² the diagonal operator with entries 1/n has both kernels zero and dense range. Its range omits (1/n), whose only possible preimage is the constant sequence one.

**Paper or page:** [Perturbations of APS Boundary Conditions for Lorentzian Dirac Operators](https://arxiv.org/abs/2408.16696v3). It says: “Ker(T) and Ker(T\*) are finite dimensional and T has closed range”

**Sources:** none listed. No primary source with a working link was found.

### Fredholm as invertible modulo compacts makes compact perturbations harmless

**Remember:** Compact operators vanish in the Calkin algebra, so they cannot spoil invertibility there.

*True by definition.* MSC 47A53 ((Semi-) Fredholm operators; index theories), 47L20. arXiv math.FA. Level 3: graduate.

**Definition.** On a Hilbert space, the Calkin algebra is the quotient of the bounded operators by the compact operators. By Atkinson’s theorem, a bounded operator is Fredholm exactly when its image in this quotient is invertible.

**Problem.** If T is Fredholm and K is compact, then T + K is Fredholm with the same index. The index is the dimension of the kernel minus the dimension of the cokernel.

**How the definition helps.** In our own proof, T+sK has the same quotient image as T for every s∈\[0,1\]. Atkinson’s theorem therefore makes every operator on the path Fredholm. Local constancy of the Fredholm index makes its endpoint values equal.

**Wikipedia:** [Atkinson's theorem](https://en.wikipedia.org/wiki/Atkinson%27s_theorem), [Calkin algebra](https://en.wikipedia.org/wiki/Calkin_algebra), [Fredholm operator](https://en.wikipedia.org/wiki/Fredholm_operator). It says: “In other words, an operator T ∈ L(H) is Fredholm, in the classical sense, if and only if its projection in the Calkin algebra is invertible.”

**Sources:**

- [J. W. Calkin, Two-sided ideals and congruences in the ring of bounded operators in Hilbert space, Annals of Mathematics 42 (1941), 839–873](https://doi.org/10.2307/1968771)
- [F. V. Atkinson, The normal solvability of linear equations in normed spaces, Matematicheskii Sbornik 28(70) (1951), 3–14](https://zbmath.org/?q=an:0042.12001)

### Parametrices make Fredholm operators compose

**Remember:** Compose the reverse maps in reverse order.

*True by definition.* MSC 47A53 ((Semi-) Fredholm operators; index theories). arXiv math.FA. Level 3: graduate.

**Definition.** A parametrix for a bounded linear map F is a bounded map P such that PF − I and FP − I are compact. Atkinson’s theorem says that F is Fredholm exactly when it has a parametrix.

**Problem.** The composite of two Fredholm maps between Banach spaces is Fredholm.

**How the definition helps.** In our own proof, composing the two parametrices in reverse order gives a parametrix for the composite. Multiplying out leaves only sums of compact errors, since composition with bounded maps preserves compactness.

**nLab:** [Fredholm operator](https://ncatlab.org/nlab/show/Fredholm+operator). It says: “the composite F₂ ∘ F₁ : B₁ ⟶ B₃ is Fredholm”

**Sources:** none listed. No primary source with a working link was found.

### The Fredholm index gives the Fredholm alternative

**Remember:** Fredholm means invertible up to finite-dimensional errors; the index counts those errors.

*Makes the theorem clean to state or prove.* MSC 47A53 ((Semi-) Fredholm operators; index theories), 47B07. arXiv math.FA. Level 3: graduate.

**Definition.** A bounded linear operator between Banach spaces is Fredholm if its range is closed and its kernel and cokernel are finite-dimensional. The cokernel is the target space divided by the range. The index is the kernel dimension minus the cokernel dimension.

**Problem.** Small or compact changes to a Fredholm operator keep it Fredholm with the same index. In particular, for K compact and λ ≠ 0, λI − K is injective exactly when it is surjective.

**How the definition helps.** Index zero equates the kernel and cokernel dimensions, so either vanishes exactly when the other does. Openness of the Fredholm set and local constancy of the index give stability under small norm changes. In our own deduction, Atkinson’s theorem keeps T+sK Fredholm for compact K and 0≤s≤1, so the index stays constant. Taking T=λI and perturbation −K gives the stated alternative.

**Wikipedia:** [Fredholm operator](https://en.wikipedia.org/wiki/Fredholm_operator), [Fredholm alternative](https://en.wikipedia.org/wiki/Fredholm_alternative). It says: “If a Fredholm operator is modified slightly, it stays Fredholm and its index remains the same.”

**Sources:**

- [Fredholm, E. I. (1903). Sur une classe d'équations fonctionnelles. Acta Mathematica 27, 365–390.](https://doi.org/10.1007/BF02421317)

### Norm resolvents block spectral pollution

**Remember:** Uniform control of shifted inverses prevents false spectral limits.

*Rules out counterexamples.* MSC 47A55 (Perturbation theory of linear operators). arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** For self-adjoint operators on one complex Hilbert space, compare their shifted inverses (A − iI)⁻¹. Norm resolvent convergence requires these inverses to converge in operator norm. Strong resolvent convergence requires convergence on each fixed vector.

**Problem.** If self-adjoint operators converge in norm resolvent, a finite limit of their spectral points belongs to the limit spectrum. Strong resolvent convergence does not suffice.

**How the definition helps.** In our own proof, λ is outside the spectrum exactly when I−(λ−i)(A−iI)⁻¹ is invertible. Norm resolvent convergence and λₙ→λ give norm convergence of these tests, and invertibility is open. Successive coordinate projections on ℓ² all have eigenvalue one but converge strongly to zero. Their shifted inverses converge strongly too, since each equals the same scalar identity plus a fixed multiple of its projection.

**Paper or page:** [Diverging eigenvalues in domain truncations of Schrödinger operators with complex potentials](https://arxiv.org/abs/2107.10557v1). It says: “converge to T∞ in the norm resolvent sense (hence there is no spectral pollution)”

**Sources:** none listed. No primary source with a working link was found.

### Defining the continuous functional calculus by uniqueness makes composition automatic

**Remember:** A calculus is fixed once you know where the coordinate goes.

*True by definition.* MSC 47A60 (Functional calculus for linear operators), 46L05. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** Let a be a normal element of a unital C\*-algebra A. Its continuous functional calculus is the unique unital \*-homomorphism C(σ(a)) → A sending the coordinate function to a.

**Problem.** Let f be continuous on σ(a) and let g be continuous on σ(f(a)). Then (g ∘ f)(a) = g(f(a)).

**How the definition helps.** In our own proof, spectral mapping gives σ(f(a)) = f(σ(a)), so composition with f is defined on C(σ(f(a))). The map g ↦ (g ∘ f)(a) is a unital \*-homomorphism sending the coordinate to f(a). Uniqueness identifies it with the calculus of f(a).

**nLab:** [functional calculus](https://ncatlab.org/nlab/show/functional+calculus). It says: “To see uniqueness, notice that any other morphism with these properties coincides with φ on all polynomials in ι and ῑ.”

**Sources:** none listed. No primary source with a working link was found.

### Spectral projections pull back

**Remember:** Pull a set back before taking its spectral projection.

*True by definition.* MSC 47A60 (Functional calculus for linear operators). arXiv math.SP. Level 3: graduate.

**Definition.** Let E be the spectral measure of a self-adjoint operator A. For a real Borel function f, the Borel functional calculus defines f(A) as the spectral integral ∫ f dE. In particular, the spectral projection for B is the operator obtained from its indicator 𝟙<sub>B</sub>.

**Problem.** The spectral projection of f(A) for a Borel set B equals the spectral projection of A for the inverse image of B under f.

**How the definition helps.** In our own deduction, 𝟙<sub>B</sub> ∘ f equals the indicator of the inverse image of B. The spectral theorem represents A by multiplication and evaluates Borel functions by composition. The two indicators therefore give the same projection.

**Wikipedia:** [Borel functional calculus](https://en.wikipedia.org/wiki/Borel_functional_calculus). It says: “this is multiplication by the composition of h with f.”

**Sources:** none listed. No primary source with a working link was found.

### Square roots become ordinary functions

**Remember:** Apply the scalar square root on the spectrum.

*Rules out counterexamples.* MSC 47A60 (Functional calculus for linear operators). arXiv math.FA. Level 3: graduate.

**Definition.** A bounded self-adjoint operator T is positive if ⟨Tx,x⟩ ≥ 0 for every x. The spectral theorem lets us apply continuous functions to T by evaluating them on its spectrum. Applying t ↦ √t defines the positive square root.

**Problem.** Every bounded positive operator on a Hilbert space has a unique positive square root.

**How the definition helps.** Requiring a positive root removes the sign ambiguity even for the identity, which also has the square root −I (our own). The functional calculus preserves products and positivity, so applying the scalar square root gives a positive square root (our own). If B is any positive square root, applying √t to B² gives B by composition (our own). The spectral theorem supplies the functional calculus (our own).

**Paper or page:** [The spectral theorem for normal operators on a Clifford module](https://arxiv.org/abs/2112.05201v1). It says: “Then there exists a unique positive operator A ∈ ℬ(ℋₙ) such that A² = T.”

**Sources:** none listed. No primary source with a working link was found.

### The half-plane test orders fractional powers

**Remember:** A fractional power shrinks angles without leaving the upper half-plane.

*True by definition.* MSC 47A63 (Linear operator inequalities). arXiv math.FA. Level 3: graduate.

**Definition.** For Hermitian matrices, A ≤ B means B − A is positive semidefinite. An operator monotone function preserves this order in every matrix size when the eigenvalues lie in its interval. Löwner’s equivalent test asks for a holomorphic extension through that interval to the upper half-plane, with nonnegative imaginary part there.

**Problem.** Suppose A and B are positive definite matrices with A ≤ B. Raising both matrices to any real power α with 0 &lt; α ≤ 1 preserves their order.

**How the definition helps.** In our own proof, the complex power multiplies arguments by α, so it stays in the upper half-plane. In our own argument, the principal branch extends through the positive axis and agrees with the real power there. Löwner's theorem carries the work of translating this angle check into an inequality for matrix powers.

**Wikipedia:** [Operator monotone function](https://en.wikipedia.org/wiki/Operator_monotone_function). It says: “states that a function f is operator monotone if and only if it allows an analytic continuation to the upper half-plane with non-negative imaginary part.”

**Sources:**

- [Karl Löwner, Über monotone Matrixfunktionen (1934).](https://doi.org/10.1007/bf01170633)

### Rigged Hilbert spaces hold Dirac's eigenvectors as generalized vectors

**Remember:** Fewer test vectors, more functionals: the missing eigenvectors live in the dual.

*Makes the theorem clean to state or prove.* MSC 47A70 ((Generalized) eigenfunction expansions of linear operators; rigged Hilbert spaces), 46A11. arXiv math.FA, math-ph. Level 3: graduate.

**Definition.** A rigged Hilbert space consists of a dense locally convex space Φ continuously embedded in a Hilbert space H, with continuous antilinear dual Φ′. The inner product embeds H in Φ′. For a symmetric operator A acting continuously on Φ, a generalized eigenvector is a nonzero F∈Φ′ satisfying F(Aφ)=λF(φ) for every φ∈Φ.

**Problem.** For the Schwartz test space in L²(ℝ), position and momentum have complete systems of generalized eigenvectors in Φ′. These are point masses and plane waves, respectively, with delta normalization and a resolution of the identity. Neither operator has an eigenvector in L²(ℝ).

**How the definition helps.** The continuous dual contains point evaluation and integration against plane waves. In our own argument, a position eigenfunction would be supported on a singleton, while a momentum eigenfunction would have constant modulus. Neither gives a nonzero L² eigenfunction. The nuclear spectral theorem supplies generalized eigenvector expansions, realized here by point evaluation and Fourier inversion.

**nLab:** [rigged Hilbert space](https://ncatlab.org/nlab/show/rigged+Hilbert+space). It says: “by enlarging the given Hilbert space ℋ to a space of generalized vectors in which the missing eigenvectors do exist”

**Sources:**

- [I. M. Gel'fand, N. Ya. Vilenkin, Generalized Functions, Vol. 4: Applications of Harmonic Analysis (1961; AMS Chelsea reprint 2016)](https://doi.org/10.1090/chel/380)
- [John E. Roberts, Rigged Hilbert spaces in quantum mechanics, Communications in Mathematical Physics 3 (1966) 98–119](https://doi.org/10.1007/BF01645448)

### Defining singular values by low-rank approximation makes them shrink under multiplication

**Remember:** Multiplying cannot raise the rank of an approximation.

*True by definition.* MSC 47B06 (Riesz operators; eigenvalue distributions; approximation numbers, \\(s\\)-numbers, Kolmogorov numbers, entropy numbers, etc. of operators), 47B10. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** For a compact operator T between Hilbert spaces, let sₙ(T) be the operator-norm distance from T to the operators of rank less than n. The spectral definition takes the nth largest eigenvalue of \|T\|, the positive square root of T\*T, with zeros added when needed.

**Problem.** Let T be compact and let A and B be bounded, with the product ATB defined. Then sₙ(ATB) ≤ ‖A‖ sₙ(T) ‖B‖ for every n.

**How the definition helps.** In our own proof, multiplying a rank-less-than-n operator L by A and B leaves its rank below n. The estimate ‖ATB−ALB‖ ≤ ‖A‖‖T−L‖‖B‖ passes to the infimum over L. Truncating the singular value expansion gives the equivalence with the spectral definition.

**Wikipedia:** [Singular value](https://en.wikipedia.org/wiki/Singular_value). It says: “σₙ(T) = inf { ‖T−L‖ : L is an operator of finite rank &lt; n }.”

**Sources:** none listed. No primary source with a working link was found.

### Weak limits reveal compact operators

**Remember:** An orthonormal sequence tends weakly to zero while each vector keeps norm one.

*Rules out counterexamples.* MSC 47B07 (Linear operators defined by compactness properties). arXiv math.FA. Level 3: graduate.

**Definition.** A bounded Hilbert space operator is completely continuous if it sends every weakly convergent sequence to a norm-convergent sequence. It is compact if the image of each bounded set has compact closure.

**Problem.** A bounded operator on a Hilbert space is compact exactly when it sends weakly convergent sequences to norm-convergent ones. So the identity on an infinite-dimensional Hilbert space is not compact.

**How the definition helps.** In our own proof, compactness gives norm-convergent subsequences from every subsequence of the images of a weakly convergent sequence. Each norm limit equals the unique weak limit, so the full image sequence converges in norm. Conversely, every bounded Hilbert space sequence has a weakly convergent subsequence, whose images then converge in norm. The identity fails this test on an infinite orthonormal sequence, which converges weakly to zero.

**nLab:** [compact operator](https://ncatlab.org/nlab/show/compact+operator). It says: “For Hilbert spaces and more generally for reflexive Banach spaces, the two notions are equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Adjoints preserve Hilbert–Schmidt norms

**Remember:** Taking the adjoint swaps rows and columns and preserves absolute values.

*True by definition.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** For a bounded operator between separable Hilbert spaces, sum the squared absolute values of its matrix entries in orthonormal bases. The operator is Hilbert–Schmidt if this sum is finite, and its square root is the Hilbert–Schmidt norm.

**Problem.** The adjoint of a Hilbert–Schmidt operator is Hilbert–Schmidt with the same norm.

**How the definition helps.** Taking the adjoint swaps matrix entries and takes their complex conjugates (our own). The sum of their squared absolute values is unchanged (our own). Parseval’s identity justifies the matrix formula in any basis (our own).

**Wikipedia:** [Hilbert–Schmidt operator](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Schmidt_operator). It says: “The Hilbert–Schmidt norm does not depend on the choice of orthonormal basis.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Fredholm determinant by eigenvalues makes its zeros detect non-invertibility

**Remember:** Multiply one plus each eigenvalue, counting multiplicity.

*True by definition. Confidence: medium.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)), 45B05. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** Let T be a trace-class operator on a Hilbert space, so the sum of its singular values is finite. Define det(I + T) as the product of 1 + λ over the nonzero eigenvalues λ of T, repeated by algebraic multiplicity. Fredholm's definition for integral operators instead uses a series of integrals of determinants built from the kernel.

**Problem.** For a trace-class operator T, det(I + T) = 0 exactly when I + T has no bounded inverse.

**How the definition helps.** In our own proof, Weyl’s inequality gives ∑\|λ\| ≤ ‖T‖₁. Absolute summability makes the product of 1+λ nonzero unless one factor vanishes. By compactness, −1 belongs to the spectrum exactly when it is an eigenvalue. Thus the product detects precisely when I+T fails to be invertible.

**nLab:** [Fredholm determinant](https://ncatlab.org/nlab/show/Fredholm+determinant). It says: “and d is an entire function of λ such that d(λ) ≠ 0 iff the integral equation has a unique solution.”

**Sources:**

- [Ivar Fredholm, Sur une classe d’équations fonctionnelles (1903)](https://doi.org/10.1007/BF02421317)
- [Folkmar Bornemann, On the numerical evaluation of Fredholm determinants (2010)](https://doi.org/10.1090/S0025-5718-09-02280-7)

### Defining trace class by completing finite-rank operators makes the trace cyclic

**Remember:** Cyclicity on finite rank passes to the limit.

*True by definition. Confidence: medium.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** On a Hilbert space, the trace norm of a finite-rank operator is the sum of its singular values. Define the trace-class operators as the completion of the finite-rank operators in this norm, and extend the finite-rank trace by continuity. The usual definition takes all compact operators whose singular values have a finite sum, with the trace Σ⟨Teᵢ, eᵢ⟩ over an orthonormal basis.

**Problem.** For a trace-class operator T and a bounded operator B on a Hilbert space, tr(TB) = tr(BT).

**How the definition helps.** In our own proof, a rank-one map v ↦ f(v)x gives trace f(Bx) in either order. Linearity gives cyclicity for all finite-rank operators. The trace is continuous in trace norm, and multiplication by B on either side has norm at most ‖B‖ in that norm. Density now extends cyclicity to the completion.

**Wikipedia:** [Trace class](https://en.wikipedia.org/wiki/Trace_class). It says: “the space of all finite-rank operators is a dense subspace”

**Sources:** none listed. No primary source with a working link was found.

### Exterior powers give entire determinants

**Remember:** An exterior power contributes one factorially bounded coefficient.

*True by definition.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)), 45B05. arXiv math.FA. Level 3: graduate.

**Definition.** For a trace-class operator K on a separable Hilbert space, define det(I + zK) as the power series ∑ zⁿ tr(ΛⁿK), with constant term one. Here ΛⁿK is the nth exterior power of K, which applies K to each factor of an alternating product.

**Problem.** The Fredholm determinant of I + zK is complex differentiable on the whole plane.

**How the definition helps.** In our own argument, the exterior-power trace is bounded in absolute value by the sum of products of n distinct indexed singular values. In the expansion of ‖K‖₁ⁿ each such product occurs at least n! times, counting ordered index choices. Thus the determinant series converges absolutely on every bounded disk by comparison with exp(\|z\|‖K‖₁).

**nLab:** [Fredholm determinant](https://ncatlab.org/nlab/show/Fredholm+determinant). It says: “This is often considered as an analytic function of a perturbation parameter λ.”

**Paper or page:** [Numerical Fredholm determinants for matrix-valued kernels on the real line](https://arxiv.org/abs/2507.22875v1). It says: “converges uniformly and absolutely to an entire function of z”

**Sources:** none listed. No primary source with a working link was found.

### Fredholm determinants isolate noninvertible points

**Remember:** A nonzero analytic determinant can vanish only at isolated points.

*True by definition.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)), 47A53. arXiv math.FA. Level 3: graduate.

**Definition.** A trace-class operator A has singular values with a finite sum. Its Fredholm determinant det(I − A) is the product of 1 − λ over the nonzero eigenvalues λ of A, counted with algebraic multiplicity.

**Problem.** Let A(z) be a trace-class operator on a separable complex Hilbert space, depending holomorphically in trace norm on one complex variable. Suppose its parameter domain is open and connected. If I − A(z) is invertible at one point, its points of noninvertibility are isolated.

**How the definition helps.** In our own proof for trace-class families, the determinant turns the operator problem into a scalar zero test. Fredholm determinant theory makes the function holomorphic and identifies its zeros with failures of invertibility. Invertibility at one point makes this function nonzero there, so the identity theorem isolates its zeros. The quoted analytic Fredholm theorem gives the conclusion even for compact families, where the ordinary determinant need not exist.

**Paper or page:** [A generalized Birman-Schwinger principle and applications to one-dimensional Schrödinger operators with distributional potentials](https://arxiv.org/abs/2507.02251v2). It says: “There is a discrete set 𝒟 ⊂ Ω such that \[Iℋ − A(·)\]⁻¹ exists and is analytic on Ω ∖ 𝒟 with poles at the discrete points of 𝒟.”

**Sources:** none listed. No primary source with a working link was found.

### Trace norm preserves determinant multiplication

**Remember:** Approximate both factors and multiply before taking limits.

*True by definition.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)), 45B05. arXiv math.FA. Level 3: graduate.

**Definition.** For a compact operator on a Hilbert space, the trace norm is the sum of its singular values, possibly infinite. On operators A of finite trace norm, det(I+A) is the trace-norm continuous extension of the finite-rank determinant. For finite-rank A, compute the determinant on any finite-dimensional subspace containing its range.

**Problem.** If A and B have finite trace norm, the Fredholm determinant of (I + A)(I + B) is the product of their determinants.

**How the definition helps.** Finite-rank approximations to A and B have ranges inside one finite-dimensional space, where determinants multiply (our own). Their products converge in trace norm, so continuity passes the identity to the limit (our own). The work lies in proving the continuous extension exists and agrees with the kernel series where both apply (our own).

**Wikipedia:** [Fredholm determinant](https://en.wikipedia.org/wiki/Fredholm_determinant). It says: “The function det defines a homomorphism of type G → ℂ×”

**Sources:**

- [Barry Simon, Notes on infinite determinants of Hilbert space operators (1977)](https://doi.org/10.1016/0001-8708(77)90057-3)

### Trace-class operators have a trace that does not depend on the basis

**Remember:** If \|T\| has finite trace, the trace of T converges absolutely.

*True by definition. Confidence: medium.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)), 47B06. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** Let T be a bounded operator on a separable Hilbert space, and let \|T\| = √(T\*T) be its absolute value. T is trace class if Σₖ ⟨\|T\|eₖ, eₖ⟩ is finite for an orthonormal basis (eₖ). In words, the diagonal entries of \|T\| have a finite sum.

**Problem.** For a trace-class operator T, the sum Σₖ ⟨Teₖ, eₖ⟩ converges absolutely to a number that does not depend on the orthonormal basis (eₖ).

**How the definition helps.** In our own proof, write T=U\|T\| by polar decomposition and put S=√\|T\|. The defining sum gives ‖S‖²<sub>HS</sub> &lt; ∞, so both S and US are Hilbert–Schmidt. For every orthonormal basis, ⟨Te,e⟩=⟨Se,SU\*e⟩, and Cauchy–Schwarz gives absolute summability since SU\* is also Hilbert–Schmidt. Parseval’s identity makes the resulting Hilbert–Schmidt inner product independent of the basis.

**Wikipedia:** [Trace class](https://en.wikipedia.org/wiki/Trace_class). It says: “a trace-class operator is a linear operator for which a trace may be defined, such that the trace is a finite number independent of the choice of basis used to compute the trace.”

**Sources:** none listed. No primary source with a working link was found.

### Two Hilbert–Schmidt factors give trace class

**Remember:** Two square sums give one absolute sum.

*Rules out counterexamples.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** A Hilbert–Schmidt operator is a compact operator on a Hilbert space whose singular values have a finite sum of squares. These are the eigenvalues of the positive square root of its adjoint times itself, counted with multiplicity. Compact operators need only have singular values tending to zero.

**Problem.** The product of two Hilbert–Schmidt operators is trace class, meaning its singular values are summable.

**How the definition helps.** In our own proof, inserting an orthonormal basis between A and B expands AB into rank-one terms. Their trace norms are ‖Ae‖‖B\*e‖, summable by Cauchy–Schwarz and the two Hilbert–Schmidt bounds. Thus the expansion converges in trace norm. The compact diagonal operator with entries 1/√n fails the square-sum condition, and its square has divergent trace norm ∑1/n.

**Wikipedia:** [Hilbert–Schmidt operator](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Schmidt_operator). It says: “The product of two Hilbert–Schmidt operators has finite trace-class norm”

**Sources:** none listed. No primary source with a working link was found.

### Projection measures multiply spectral integrals

**Remember:** Multiplying indicators becomes multiplying projections.

*True by definition.* MSC 47B15 (Hermitian and normal operators (spectral measures, functional calculus, etc.)), 28B05. arXiv math.FA. Level 3: graduate.

**Definition.** A projection-valued measure P assigns orthogonal projections on a Hilbert space to measurable sets and assigns the identity to the whole space. For disjoint sets, applying their projections to any vector gives a series summing to the projection of the union applied to that vector. Intersections give products of projections. Define the spectral integral of a simple function by replacing each indicator with its projection.

**Problem.** For a projection-valued measure on a Hilbert space, the spectral integrals of bounded measurable functions multiply to the spectral integral of their product.

**How the definition helps.** Defining the integral through projections turns multiplication of indicators directly into operator multiplication. Our own proof expands products of simple functions and then approximates bounded measurable functions uniformly. Orthogonality on disjoint sets bounds the operator norm error by the uniform approximation error. Starting with a normal operator instead requires the spectral theorem to construct its projection-valued measure.

**nLab:** [projection measure](https://ncatlab.org/nlab/show/projection+measure). It says: “P(A₁ ∩ A₂) = P(A₁) P(A₂) for all A₁,A₂ ∈ B where the product is the composition of the operators”

**Sources:** none listed. No primary source with a working link was found.

### Spectral measures express resolvent entries

**Remember:** A spectral measure turns the operator reciprocal into an ordinary reciprocal.

*True by definition. Confidence: medium.* MSC 47B15 (Hermitian and normal operators (spectral measures, functional calculus, etc.)), 44A15. arXiv math.FA. Level 3: graduate.

**Definition.** Let A be a bounded self-adjoint operator on a complex Hilbert space, and let v be a unit vector. The spectral theorem assigns each Borel set B a projection E(B) onto the part of the space with spectral values in B. Define the measure μ by μ(B) = ‖E(B)v‖².

**Problem.** Use an inner product linear in its first argument. For nonreal z, ⟨(A−zI)⁻¹v,v⟩ equals the integral of 1/(λ−z) against μ.

**How the definition helps.** The measure records the weights needed to integrate any function of the spectral variable against v (our own). For a matrix, these are squared lengths of projections onto eigenspaces (our own). The spectral theorem extends that sum to an integral even when eigenvectors do not span the space (our own). Applying it to the reciprocal function gives the stated inverse formula (our own).

**Paper or page:** [Spectral analysis of Jacobi operators and asymptotic behavior of orthogonal polynomials](https://arxiv.org/abs/2202.02087v1). It says: “For all z ∈ ℂ with Im z ≠ 0, we have”

**Sources:**

- [Spectral analysis of Jacobi operators and asymptotic behavior of orthogonal polynomials](https://arxiv.org/abs/2202.02087v1)

### The functional calculus definition makes Riesz projections of normal operators orthogonal

**Remember:** The indicator χ squares to itself and equals its own conjugate.

*True by definition.* MSC 47B15 (Hermitian and normal operators (spectral measures, functional calculus, etc.)), 47A60. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Let A be a bounded normal operator on a Hilbert space, so A commutes with its adjoint. Let σ₀ be a part of its spectrum that is both open and closed in the spectrum. Define the projection as χ(A), where χ is 1 on σ₀ and 0 on the rest of the spectrum. The Riesz definition instead integrates (z − A)⁻¹/(2πi) around a contour that encloses σ₀ and no other part of the spectrum.

**Problem.** For a bounded normal operator, the Riesz projection onto an isolated part of the spectrum is an orthogonal projection.

**How the definition helps.** In our own proof, χ²=χ and χ̄=χ make χ(A) a self-adjoint idempotent, hence an orthogonal projection. The holomorphic calculus agrees with the continuous calculus on functions holomorphic near the spectrum. Extending χ locally by constants therefore identifies χ(A) with the contour projection.

**nLab:** [Riesz projection](https://ncatlab.org/nlab/show/Riesz+projection). It says: “is an orthogonal projection, and it coincides with the spectral projection”

**Sources:** none listed. No primary source with a working link was found.

### Essential self-adjointness gives a quantum Hamiltonian a unique time evolution

**Remember:** Essentially self-adjoint: take the closure, and no boundary conditions are left to choose.

*True by definition.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 81Q10, 47D03. arXiv math.FA, math-ph. Level 3: graduate.

**Definition.** A densely defined operator H on a complex Hilbert space is symmetric if ⟨Hx,y⟩=⟨x,Hy⟩ for every x,y in its domain. It is essentially self-adjoint if its closure is self-adjoint. Equivalently, it has exactly one self-adjoint extension.

**Problem.** A densely defined symmetric Hamiltonian H has exactly one strongly continuous unitary evolution exp(−itĤ) with Ĥ extending H exactly when H is essentially self-adjoint.

**How the definition helps.** In our own argument, Stone’s theorem pairs each strongly continuous unitary group with a unique self-adjoint Hamiltonian. Therefore uniqueness of the evolution is exactly uniqueness of the self-adjoint extension. The deficiency index theorem equates this with self-adjointness of the closure.

**Wikipedia:** [Self-adjoint operator](https://en.wikipedia.org/wiki/Self-adjoint_operator), [Extensions of symmetric operators](https://en.wikipedia.org/wiki/Extensions_of_symmetric_operators), [Stone's theorem on one-parameter unitary groups](https://en.wikipedia.org/wiki/Stone%27s_theorem_on_one-parameter_unitary_groups). It says: “A symmetric operator A is said to be essentially self-adjoint if the closure of A is self-adjoint. Equivalently, A is essentially self-adjoint if it has a unique self-adjoint extension.”

**Sources:**

- [von Neumann, J. (1930). Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren. Mathematische Annalen 102, 49–131.](https://doi.org/10.1007/BF01782338)
- [Stone, M. H. (1932). On one-parameter unitary groups in Hilbert space. Annals of Mathematics 33(3), 643–648.](https://doi.org/10.2307/1968538)

### Quadratic forms give every nonnegative symmetric operator a self-adjoint extension

**Remember:** Complete the energy form, and the self-adjoint operator falls out by Riesz.

*Makes the theorem clean to state or prove.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A20, 47A07. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** A symmetric operator T is nonnegative when ⟨ξ, Tξ⟩ ≥ 0 on its domain. The form Q(ξ, η) = ⟨ξ, Tη⟩ + ⟨ξ, η⟩ is then an inner product on the domain. Its completion is a Hilbert space H₁.

**Problem.** The Friedrichs extension theorem says that every nonnegative densely defined symmetric operator has a nonnegative self-adjoint extension. It exists even when the deficiency indices are not zero.

**How the definition helps.** In our own argument, completing the energy form gives a closed form once its natural map into the original Hilbert space is shown injective. Closability of the nonnegative symmetric operator’s form supplies that step. The closed form representation theorem gives a self-adjoint operator for Q. Subtracting I gives a nonnegative extension of T.

**Wikipedia:** [Friedrichs extension](https://en.wikipedia.org/wiki/Friedrichs_extension). It says: “This extension is particularly useful in situations where an operator may fail to be essentially self-adjoint or whose essential self-adjointness is difficult to show.”

**Sources:**

- [K. Friedrichs, Spektraltheorie halbbeschränkter Operatoren und Anwendung auf die Spektralzerlegung von Differentialoperatoren, Mathematische Annalen 109 (1934), 465–487](https://doi.org/10.1007/BF01449150)

### Spectral measures replace eigenbases in the spectral theorem

**Remember:** Diagonalize with a measure of projections, not with a basis of eigenvectors.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A60. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** A spectral measure on ℝ assigns an orthogonal projection E(B) to each Borel set B, with E(ℝ)=I. For every disjoint sequence Bₙ and vector x, ∑ E(Bₙ)x converges in norm to E(⋃ Bₙ)x.

**Problem.** Self-adjoint operators on a complex Hilbert space correspond bijectively to spectral measures on ℝ through A=∫λ E(dλ). This includes bounded and unbounded operators.

**How the definition helps.** Spectral measures do not need eigenvectors, so the theorem can cover operators that have none. In infinite dimensions, a self-adjoint operator need not have a basis of eigenvectors. For example, multiplication by x on L²\[0,1\] has no eigenvectors. The proof is still real work, and the page sketches one route through the Gelfand representation.

**nLab:** [spectral theorem](https://ncatlab.org/nlab/show/spectral+theorem). It says: “theorem: there is a one to one correspondence of (bounded or unbounded) selfadjoint operators A and spectral measures E such that A = ∫ λ E(dλ)”

**Sources:**

- [J. von Neumann, Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren, Mathematische Annalen 102 (1930) 49–131](https://doi.org/10.1007/BF01782338)

### The Cayley transform turns self-adjoint extensions into unitary extensions

**Remember:** Self-adjoint extensions exist exactly when the two missing dimensions match.

*Makes the theorem clean to state or prove.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A20. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** For a densely defined symmetric operator A on a complex Hilbert space, use its closure S. Its Cayley transform (S−iI)(S+iI)⁻¹ maps ran(S+iI) isometrically onto ran(S−iI). The deficiency indices are the dimensions of the orthogonal complements of these two ranges.

**Problem.** Von Neumann's theorem says that a densely defined symmetric operator has a self-adjoint extension exactly when its two deficiency indices are equal. It has exactly one when both are zero.

**How the definition helps.** In our own argument, the Cayley correspondence turns self-adjoint extensions into unitary extensions of this isometry. Extending it requires a unitary map between the orthogonal complements of its domain and range. Such maps exist exactly when the dimensions match, and the choice is unique exactly when both complements vanish.

**Wikipedia:** [Extensions of symmetric operators](https://en.wikipedia.org/wiki/Extensions_of_symmetric_operators), [Cayley transform](https://en.wikipedia.org/wiki/Cayley_transform). It says: “finding self-adjoint extensions, with various requirements, of symmetric operators is equivalent to finding unitary extensions of suitable partial isometries.”

**Sources:**

- [J. von Neumann, Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren, Mathematische Annalen 102 (1930), 49–131](https://doi.org/10.1007/BF01782338)

### The spectral theorem needs self-adjoint operators, not only symmetric ones

**Remember:** Symmetric means A is contained in A\*; self-adjoint means the domains match too.

*Rules out counterexamples.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A60. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Let A be a densely defined operator on a Hilbert space, with adjoint A\*. A is symmetric if ⟨Ax, y⟩ = ⟨x, Ay⟩ for all x and y in its domain; this means A ⊆ A\*. A is self-adjoint if also A = A\*, which includes equality of the domains.

**Problem.** Every self-adjoint operator on a Hilbert space is unitarily equivalent to multiplication by a real function on an L² space. So it has real spectrum and a functional calculus.

**How the definition helps.** Self-adjointness gives exactly the domain equality required by the multiplication form of the spectral theorem. For −i d/dx on L²\[0,1\], take the Sobolev domain H¹₀(0,1). Its adjoint acts on all of H¹(0,1), so this symmetric operator fails the domain test. In our own comparison, the periodic domain {f∈H¹(0,1) ∣ f(0)=f(1)} does equal its adjoint domain.

**Wikipedia:** [Self-adjoint operator](https://en.wikipedia.org/wiki/Self-adjoint_operator), [Hellinger–Toeplitz theorem](https://en.wikipedia.org/wiki/Hellinger%E2%80%93Toeplitz_theorem). It says: “Although the distinction between a symmetric operator and a (essentially) self-adjoint operator is subtle, it is important since self-adjointness is the hypothesis in the spectral theorem.”

**Sources:**

- [von Neumann, J. (1930). Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren. Mathematische Annalen 102, 49–131.](https://doi.org/10.1007/BF01782338)

### Unbounded operators commute when their spectral projections commute (Nelson's example)

**Remember:** Unbounded operators commute when their exponentials do.

*Rules out counterexamples. Confidence: medium.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A60. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Two self-adjoint operators A and B, possibly unbounded, commute if all their spectral projections commute. Equivalently, their resolvents (A − z)⁻¹ and (B − w)⁻¹ commute for non-real z and w. Also equivalently, exp(itA) and exp(isB) commute for all real t and s.

**Problem.** If two self-adjoint operators commute in this sense, all bounded Borel functions of them commute, and so do their unitary groups.

**How the definition helps.** Commuting spectral projections give commuting simple spectral integrals and, by uniform approximation, commuting bounded Borel functions. This includes the unitary groups. Nelson’s differential operators commute on a common invariant core, yet their unitary groups fail to commute. The spectral projection condition excludes this example.

**nLab:** [unbounded operator](https://ncatlab.org/nlab/show/unbounded+operator). It says: “Nelson's example shows that the rather involved definition of commutativity of two unbounded operators is well motivated, because a more naive one will have unwanted consequences.”

**Sources:**

- [Edward Nelson, Analytic vectors, Annals of Mathematics 70 (1959) 572–615](https://doi.org/10.2307/1970331)

### Unitary changes preserve extremal extensions

**Remember:** Changing coordinates preserves least and greatest extensions.

*True by definition.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)). arXiv math.SP. Level 3: graduate.

**Definition.** The energy of a nonnegative self-adjoint operator A at x is ‖√A x‖² on the domain of √A. Write A ≤ B if A’s energy domain contains B’s and A gives no greater energy on B’s domain. Among nonnegative self-adjoint extensions, the Krein–von Neumann extension is least and the Friedrichs extension greatest.

**Problem.** Let S be a densely defined closed nonnegative symmetric operator, and let U be unitary. The Friedrichs and Krein–von Neumann extensions of USU\* are U times those of S times U\*.

**How the definition helps.** In our own proof, the extremal characterization saves us from constructing either extension domain in the new coordinates. A unitary map preserves inner products and transports energy domains, so conjugation preserves the order in both directions. It therefore transports the least and greatest extensions. Krein’s theorem supplies their existence and identifies them with the named extensions.

**Paper or page:** [Some Remarks On Krein--von Neumann Extensions](https://arxiv.org/abs/2504.11718v2). It says: “among all non-negative self-adjoint extensions of S, there exist two distinguished ones”

**Sources:** none listed. No primary source with a working link was found.

### Square integrable kernels give Hilbert–Schmidt operators

**Remember:** Sum the squared matrix entries to recover the squared kernel norm.

*True by definition.* MSC 47B34 (Kernel operators). arXiv math.FA. Level 3: graduate.

**Definition.** A kernel k defines an integral operator on the unit interval by (Kf)(x) = ∫₀¹ k(x,y)f(y) dy. Sum ‖Ke‖² over an orthonormal basis of square integrable functions. If the sum is finite, its square root is the Hilbert–Schmidt norm.

**Problem.** Every square integrable kernel on the unit square defines a Hilbert–Schmidt operator. Its Hilbert–Schmidt norm equals the L² norm of the kernel.

**How the definition helps.** In our own proof, Parseval’s identity gives ∑ₑ \|(Ke)(x)\|² = ∫₀¹ \|k(x,y)\|² dy for almost every x, using the conjugate basis. Tonelli’s theorem exchanges summation and integration of these nonnegative terms. The result is precisely the equality of the squared norms.

**Wikipedia:** [Hilbert–Schmidt operator](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Schmidt_operator). It says: “with kernel k is a Hilbert–Schmidt operator and ‖K‖HS = ‖k‖₂.”

**Sources:** none listed. No primary source with a working link was found.

### Essential range discards invisible values

**Remember:** A value counts only if every neighborhood has positive mass.

*Rules out counterexamples.* MSC 47B38 (Linear operators on function spaces (general)), 47A10. arXiv math.SP. Level 3: graduate.

**Definition.** The essential range of a measurable multiplier consists of values whose every neighborhood has an inverse image of positive measure. Unlike the pointwise range, this definition ignores changes on sets of measure zero.

**Problem.** Suppose the measure space is a countable union of sets of finite measure. For bounded measurable f, the spectrum of multiplication by f on L² equals its essential range.

**How the definition helps.** In our own proof, only values seen by the measure can obstruct a bounded inverse. Outside the essential range, the inverse is multiplication by the essentially bounded reciprocal of f − λ. In our own proof, normalized indicators of finite positive-measure subsets show why no lower bound holds inside the essential range. In our own counterexample, a multiplier equal to one at a single point and zero elsewhere acts as zero on Lebesgue L².

**Wikipedia:** [Multiplication operator](https://en.wikipedia.org/wiki/Multiplication_operator). It says: “is the essential range of f”

**Sources:** none listed. No primary source with a working link was found.

### Dissipative operators make semigroup generation easy to check

**Remember:** Check one energy inequality and one range condition, and the semigroup exists.

*Makes the theorem clean to state or prove.* MSC 47B44 (Linear accretive operators, dissipative operators, etc.), 47D06. arXiv math.FA. Level 3: graduate.

**Definition.** An operator A on a Banach space is dissipative if ‖(λ − A)x‖ ≥ λ‖x‖ for all λ &gt; 0 and x in its domain. In a Hilbert space this means that the real part of ⟨Ax, x⟩ is at most 0. A is maximally dissipative if, also, λ₀ − A is onto for some λ₀ &gt; 0.

**Problem.** A linear operator A on a Banach space generates a strongly continuous contraction semigroup exactly when it is densely defined and maximally dissipative. The evolution u′=Au then has a unique mild solution for each initial vector, with ‖u(t)‖ ≤ ‖u(0)‖.

**How the definition helps.** In our own argument, dissipativity gives ‖(λI−A)⁻¹‖ ≤ 1/λ whenever λI−A is onto. The Lumer–Phillips theorem turns dissipativity and surjectivity at one positive parameter into generation of a contraction semigroup. Applying that semigroup to the initial vector gives the norm bound.

**Wikipedia:** [Lumer–Phillips theorem](https://en.wikipedia.org/wiki/Lumer%E2%80%93Phillips_theorem), [C0-semigroup](https://en.wikipedia.org/wiki/C0-semigroup). It says: “Of more practical importance are however the much easier to verify conditions given by the Lumer–Phillips theorem.”

**Sources:**

- [G. Lumer, R. S. Phillips, Dissipative operators in a Banach space, Pacific Journal of Mathematics 11 (1961) 679–698](https://doi.org/10.2140/pjm.1961.11.679)

### Resolvent powers are time moments

**Remember:** Compose the operators by adding their times.

*True by definition.* MSC 47D03 (Groups and semigroups of linear operators), 44A10. arXiv math.FA. Level 3: graduate.

**Definition.** A uniformly continuous semigroup on a complex Banach space consists of bounded operators T(t), t≥0, satisfying T(0)=I and T(s+t)=T(s)T(t) for all s,t≥0. It satisfies ‖T(t)−I‖→0 as t↓0. Its generator is the norm limit of (T(t)−I)/t as t↓0.

**Problem.** Suppose ‖T(t)‖ ≤ M exp(ωt) and Re λ &gt; ω. Then for each integer n ≥ 1, (λI − A)⁻ⁿ = ∫₀<sup>∞</sup> tⁿ⁻¹/(n − 1)! · exp(−λt)T(t) dt.

**How the definition helps.** Multiplying two time integrals adds the times in their operator factors (our own). For n factors, repeated integration at fixed total time t gives the weight tⁿ⁻¹/(n − 1)! (our own). The growth bound permits the integrations, and the Laplace representation identifies the integral with the inverse (our own).

**Paper or page:** [On the Properties of the Semigroup Generated by the RL Fractional Integral](https://arxiv.org/abs/2405.05265v1). It says: “Let T be a uniformly continuous semigroup of type (M,ω) with the infinitesimal generator A.”

**Sources:** none listed. No primary source with a working link was found.

### Convolving time laws composes averages

**Remember:** Adding independent times composes their averaged operators.

*True by definition.* MSC 47D06 (One-parameter semigroups and linear evolution equations). arXiv math.FA. Level 3: graduate.

**Definition.** Let S be a semigroup and μₜ subprobability measures on \[0,∞), indexed by t≥0, with μ₀ the unit mass at zero. Require μₛ₊ₜ=μₛ∗μₜ for every s,t≥0, where ∗ denotes convolution. The subordinate operators are Sμ(t)x = ∫ S(r)x dμₜ(r).

**Problem.** Let S be a uniformly bounded, strongly continuous semigroup on a Banach space. Suppose μₜ converges to unit mass at zero against continuous compactly supported functions as t↓0. Then the operators Sμ(t) form a uniformly bounded, strongly continuous semigroup.

**How the definition helps.** In our own proof, composing averages gives a double integral with operator S(r+s), so convolution gives the semigroup law. Total mass at most one preserves the uniform operator bound. Convergence to unit mass at zero concentrates the measures there, where S(r)x tends to x. This gives strong continuity at zero and hence everywhere by the semigroup law.

**Paper or page:** [Final State Observability in Banach spaces with applications to Subordination and Semigroups induced by L{é}vy processes](https://arxiv.org/abs/2202.05835v2). It says: “is again a bounded C₀-semigroup on X.”

**Sources:** none listed. No primary source with a working link was found.

### Mild solutions make well-posedness the same as generating a semigroup

**Remember:** Integrate once, and the solution makes sense for every starting point.

*Makes the theorem clean to state or prove.* MSC 47D06 (One-parameter semigroups and linear evolution equations). arXiv math.FA. Level 3: graduate.

**Definition.** For a closed linear operator A on a Banach space X, a mild solution with initial vector x∈X is a continuous map u:\[0,∞)→X. For every t≥0 its integral v(t)=∫₀ᵗ u(s) ds belongs to the domain of A and satisfies Av(t)=u(t)−x.

**Problem.** Let A be a closed operator. Every starting point x in X has a unique mild solution exactly when A generates a strongly continuous semigroup T(t). The solution is then u(t) = T(t)x.

**How the definition helps.** The integrated equation requires only v(t) to lie in the operator domain, so it accommodates every initial vector. In our own account, the semigroup well-posedness theorem identifies existence and uniqueness of these mild solutions with generation. When A generates T, integration of its orbits gives the defining identity for u(t)=T(t)x.

**Wikipedia:** [C0-semigroup](https://en.wikipedia.org/wiki/C0-semigroup). It says: “Any classical solution is a mild solution. A mild solution is a classical solution if and only if it is continuously differentiable.”

**Sources:**

- [W. Arendt, C. Batty, M. Hieber, F. Neubrander, Vector-valued Laplace Transforms and Cauchy Problems, 2nd ed., Birkhäuser (2011)](https://doi.org/10.1007/978-3-0348-0087-7)

### Strong continuity lets semigroups have unbounded generators, as Hille–Yosida needs

**Remember:** Ask continuity vector by vector, and the heat equation becomes a semigroup.

*Makes the theorem clean to state or prove.* MSC 47D06 (One-parameter semigroups and linear evolution equations). arXiv math.FA. Level 3: graduate.

**Definition.** A one-parameter semigroup is a family of bounded operators T(t), t ≥ 0, with T(0) = I and T(s + t) = T(s)T(t). It is strongly continuous when t ↦ T(t)x is continuous for each vector x. Its generator A is the derivative of T(t)x at t = 0, where this exists.

**Problem.** Let A be closed and densely defined on a Banach space, with M≥1 and ω real. It generates a strongly continuous semigroup bounded by M exp(ωt) exactly when the following resolvent conditions hold. Every real λ&gt;ω lies in the resolvent set, and ‖(λI−A)⁻ⁿ‖ ≤ M/(λ−ω)ⁿ for every integer n≥1.

**How the definition helps.** Continuity in the operator norm is too strong, because a uniformly continuous semigroup has a bounded generator. The heat equation and the wave equation have unbounded generators, so they need the weaker, vector-by-vector continuity (our own examples). With strong continuity, the generator is closed and densely defined, and the resolvent is the Laplace transform of the semigroup (our own). What stays hard is to build the semigroup from A, which uses the Yosida approximation by bounded operators (our own).

**Wikipedia:** [C0-semigroup](https://en.wikipedia.org/wiki/C0-semigroup), [Hille–Yosida theorem](https://en.wikipedia.org/wiki/Hille%E2%80%93Yosida_theorem). It says: “The infinitesimal generator of a strongly continuous one-parameter semigroup is a closed linear operator defined on a dense linear subspace of X.”

**Sources:**

- [K. Yosida, On the differentiability and the representation of one-parameter semi-group of linear operators, Journal of the Mathematical Society of Japan 1 (1948), 15–21](https://doi.org/10.2969/jmsj/00110015)

### Commutators make differential operator order subadditive under composition

**Remember:** A commutator with multiplication lowers the order by one.

*True by definition.* MSC 47F05 (General theory of partial differential operators), 13N10. arXiv math.AP, math.AC. Level 3: graduate.

**Definition.** Let P be a linear map on smooth scalar functions. The commutator \[P, f\] with multiplication by a smooth f acts on u as P(fu) − fP(u). Say P has order at most k if every sequence of k + 1 such commutators gives zero. The usual definition writes P locally as a sum of partial derivatives of order at most k multiplied by smooth coefficients.

**Problem.** If P has order at most k and Q has order at most l, then PQ has order at most k + l.

**How the definition helps.** In our own proof, \[PQ,f\]=\[P,f\]Q+P\[Q,f\] assigns each commutator to one factor. After k+l+1 commutators, every term exceeds the allowed count for P or Q and vanishes. The equivalence with the coordinate definition identifies this bound with the usual differential order.

**Wikipedia:** [Differential operator](https://en.wikipedia.org/wiki/Differential_operator). It says: “This characterization of linear differential operators shows that they are particular mappings between modules over a commutative algebra, allowing the concept to be seen as a part of commutative algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal monotone graphs retain limits

**Remember:** If a limit fits every graph pair, maximality puts it inside.

*Rules out counterexamples.* MSC 47H05 (Monotone operators and generalizations). arXiv math.FA. Level 3: graduate.

**Definition.** A graph is monotone if ⟨x − y, u − v⟩ ≥ 0 for every two pairs (x, u) and (y, v). It is maximal monotone if no new pair can be added without breaking this inequality.

**Problem.** On a real Hilbert space, suppose graph pairs have inputs converging weakly and outputs converging in norm. Weak convergence means convergence of inner products against every fixed vector. If the graph is maximal monotone, the limiting pair belongs to it.

**How the definition helps.** Each limiting pair still satisfies the defining inequality against every graph pair (our own). The input sequence is bounded, so the norm error in the output goes to zero in each inner product (our own). Maximality forces the limiting pair into the graph (our own). The zero operator restricted to positive reals loses the pair (0, 0) (our own).

**Paper or page:** [A strongly convergent inertial inexact proximal-point algorithm for monotone inclusions with applications to variational inequalities](https://arxiv.org/abs/2407.03485v2). It says: “T is maximal monotone if and only if T = T⁰.”

**Sources:**

- [George J. Minty, Monotone (nonlinear) operators in Hilbert space (1962)](https://doi.org/10.1215/S0012-7094-62-02933-2)

### Composed averaged maps fix exactly the points that every factor fixes

**Remember:** Each averaged step loses distance unless it stays put.

*True by definition.* MSC 47H09 (Contraction-type mappings, nonexpansive mappings, \\(A\\)-proper mappings, etc.), 47H10. arXiv math.OC, math.FA. Level 3: graduate.

**Definition.** For 0&lt;λ&lt;1, a map T:H→H on a Hilbert space is λ-averaged if T=(1−λ)I+λN for some nonexpansive map N:H→H. Nonexpansiveness means ‖Nx−Ny‖ ≤ ‖x−y‖ for all x,y∈H.

**Problem.** A finite composition of averaged maps on a Hilbert space is averaged. If the maps have a common fixed point, the fixed points of the composition are exactly the common fixed points.

**How the definition helps.** In our own proof, expand the composition as a convex combination of nonexpansive compositions, with positive identity weight ∏ᵢ(1−λᵢ). Grouping the other terms gives an averaged map. At a common fixed point p, the squared-norm identity gives ‖Tx−p‖² ≤ ‖x−p‖²−((1−λ)/λ)‖Tx−x‖² for each step. Thus a cycle must fix every intermediate point, while common fixed points plainly remain fixed.

**Paper or page:** [Unrestricted Douglas-Rachford algorithms for solving convex feasibility problems in Hilbert space](https://arxiv.org/abs/2204.00275v2). It says: “then Fix(T) = ⋂ᵢ₌₁ⁿ Fix(Tᵢ).”

**Sources:**

- [Kay Barshad, Aviv Gibali, Simeon Reich, Unrestricted Douglas-Rachford algorithms for solving convex feasibility problems in Hilbert space, arXiv:2204.00275v2 (2022)](https://arxiv.org/abs/2204.00275v2)

### Firmly nonexpansive maps are exactly averages of identity and nonexpansive maps

**Remember:** Double the map and subtract the identity to test firmness.

*True by definition.* MSC 47H09 (Contraction-type mappings, nonexpansive mappings, \\(A\\)-proper mappings, etc.), 47H10. arXiv math.OC, math.FA. Level 3: graduate.

**Definition.** A map T:H→H on a Hilbert space is firmly nonexpansive if ‖Tx−Ty‖² ≤ Re⟨Tx−Ty,x−y⟩ for every x,y∈H. A map is nonexpansive if it never increases the distance between two points.

**Problem.** On a Hilbert space, T is firmly nonexpansive exactly when T = ½(Id + N) for some nonexpansive map N.

**How the definition helps.** Put N = 2T − Id and expand ‖Nx − Ny‖²; the firm inequality is exactly the statement that N is nonexpansive (our own calculation). So the equivalence is one line from the inner-product form of the definition. The result lets algorithms built from such maps use facts about averages of nonexpansive maps.

**Paper or page:** [Unrestricted Douglas-Rachford algorithms for solving convex feasibility problems in Hilbert space](https://arxiv.org/abs/2204.00275v2). It says: “There exists a nonexpansive operator N: ℋ → ℋ such that T = ½(Id + N).”

**Sources:**

- [Kay Barshad, Aviv Gibali, Simeon Reich, Unrestricted Douglas-Rachford algorithms for solving convex feasibility problems in Hilbert space, arXiv:2204.00275v2 (2022)](https://arxiv.org/abs/2204.00275v2)

### Linear relations realize pseudo-resolvents

**Remember:** When an inverse has several values, keep all its input and output pairs.

*Makes the theorem clean to state or prove.* MSC 47A06 (Linear relations (multivalued linear operators)). arXiv math.FA. Level 4: research.

**Definition.** A linear relation on a Banach space X is a linear subspace of X × X. A pseudo-resolvent on a scalar set Ω assigns each λ∈Ω a bounded linear map R(λ):X→X. For every λ,μ∈Ω it satisfies R(λ)−R(μ)=(λ−μ)R(λ)R(μ).

**Problem.** On any nonempty parameter set, each pseudo-resolvent R comes from a unique closed linear relation L. At every λ, R(λ) is the inverse of L − λI.

**How the definition helps.** In our own proof, reversing and shifting the graph forces L to consist of the pairs (R(λ)x,x+λR(λ)x) for x∈X. These operations preserve closedness. The resolvent identity gives R(μ)(x+(λ−μ)R(λ)x)=R(λ)x, so every such pair also occurs at μ. Interchanging λ and μ gives equality.

**Paper or page:** [A pseudo-resolvent approach to abstract differential-algebraic equations](https://arxiv.org/abs/2312.02303v1). It says: “is closed and independent of the particular choice of λ”

**Sources:**

- [Hannes Gernandt and Timo Reis, A pseudo-resolvent approach to abstract differential-algebraic equations (2025).](https://doi.org/10.1007/s00028-025-01106-5)

### Relations admit infinite operator limits

**Remember:** An infinite multiple of the identity becomes a vertical graph.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 47A06 (Linear relations (multivalued linear operators)). arXiv math.SP, math.FA. Level 4: research.

**Definition.** A linear relation on a Hilbert space H is a linear subspace of H × H. It can pair one input with several outputs. Its inverse swaps the two coordinates. Convergence in norm resolvent means that the inverses after shifting by i converge in operator norm.

**Problem.** On a nonzero complex Hilbert space, the operators nI converge in norm resolvent to the self-adjoint relation consisting of all pairs (0,y).

**How the definition helps.** In our own proof, reversing the vertical relation gives the zero operator, so the relation is self-adjoint by the adjoint rule for inverses. Shifting the relation leaves every pair (0,y) unchanged. At i its resolvent is therefore zero, while the resolvent of nI is (n−i)⁻¹I, which tends to zero in norm.

**Paper or page:** [Sequences of operators, monotone in the sense of contractive domination](https://arxiv.org/abs/2401.00312v1). It says: “In fact, Hₙ → H∞ in the strong resolvent sense or, equivalently, in the strong graph sense.”

**Sources:** none listed. No primary source with a working link was found.

### Koszul Laplacians test joint spectra

**Remember:** Replace exactness at each stage with one positive inverse test.

*Makes the theorem clean to state or prove.* MSC 47A13 (Several-variable operator theory (spectral, Fredholm, etc.)). arXiv math.SP. Level 4: research.

**Definition.** For commuting bounded operators Tⱼ on H and λ∈ℂⁿ, the Koszul differential on H⊗Λᵏℂⁿ is ∑ⱼ(Tⱼ−λⱼI)⊗ιⱼ. Here ιⱼ contracts with the jth coordinate vector. A point lies outside the Taylor spectrum if each outgoing kernel equals the incoming range, with zero maps at the ends.

**Problem.** A point lies outside the Taylor spectrum exactly when at every stage the Laplacian BB\*+C\*C has a bounded inverse. Here B is the incoming differential and C the outgoing differential.

**How the definition helps.** In our own proof, the energy of the Laplacian at x is ‖B\*x‖²+‖Cx‖². Exactness closes all ranges, and the closed range theorem bounds this energy below on the orthogonal summands ran B and (ker C)⊥. Conversely, ker C reduces the Laplacian because CB=0. Its invertible restriction there equals BB\*, so every vector in ker C belongs to ran B.

**Paper or page:** [Spectral mapping theorem and the Taylor spectrum](https://arxiv.org/abs/2404.17907v1). It says: “if and only if Dₖ\*Dₖ + Dₖ₊₁Dₖ₊₁\* is invertible for all k.”

**Sources:**

- [Joseph L. Taylor, A joint spectrum for several commuting operators (1970).](https://doi.org/10.1016/0022-1236(70)90055-8)

### Equal power ranges preserve Wold parts

**Remember:** Preserve every power range and you preserve their intersection.

*True by definition.* MSC 47A15 (Invariant subspaces of linear operators). arXiv math.FA. Level 4: research.

**Definition.** For a Hilbert space isometry V, its unitary part is the largest closed subspace on which V acts unitarily. The Wold decomposition identifies this subspace with the intersection of the ranges of all powers Vⁿ. Its orthogonal complement is the shift part. A subspace reduces W if both W and W\* preserve it.

**Problem.** Let V and W be isometries on the same Hilbert space. For each positive integer n, suppose WVⁿ and VⁿW have equal ranges, as do W\*Vⁿ and VⁿW\*. Then both Wold parts of V reduce W.

**How the definition helps.** In our own proof, using the intersection reduces the test to invariance of each power range. The range equalities place both images of each power range back inside that range. The intersection reduces W, and so does its orthogonal complement. In our own account, the Wold decomposition theorem identifies these as the unitary and shift parts.

**Paper or page:** [Wold decomposition for isometries with equal range](https://arxiv.org/abs/2309.04445v2). It says: “then both the subspaces ℋᵤ and ℋₛ reduce W.”

**Sources:**

- [Satyabrata Majee, Wold decomposition for isometries with equal range (2026).](https://doi.org/10.7900/jot.2023sep07.2501)

### Minimal dilations are unique

**Remember:** Keep only the translates of the original space.

*Rules out counterexamples.* MSC 47A20 (Dilations, extensions, compressions of linear operators). arXiv math.FA. Level 4: research.

**Definition.** Let V(t), for t ≥ 0, be isometries on a Hilbert space H with V(0) = I and V(s+t) = V(s)V(t). A unitary dilation is a unitary group U(t) on a larger Hilbert space that agrees with V(t) on H for t ≥ 0. It is minimal if the vectors U(t)x, for real t and x in H, span a dense subspace.

**Problem.** Any two minimal unitary dilations of the same isometric semigroup are unitarily equivalent by a map that fixes the original space.

**How the definition helps.** Minimality excludes extra orthogonal summands on which the unitary group could act freely (our own). For s ≤ t, the inner product of U(s)x and U(t)y equals that of x and V(t−s)y (our own). Thus matching corresponding translates preserves inner products and extends by density to the required unitary map (our own).

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456v1). It says: “Moreover, any two minimal unitary dilations of V are unitarily equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Unitary moments give positive Toeplitz matrices

**Remember:** Unitary moments turn Toeplitz matrices into matrices of inner products.

*True by definition.* MSC 47A20 (Dilations, extensions, compressions of linear operators). arXiv math.FA. Level 4: research.

**Definition.** A unitary moment dilation represents a sequence of bounded operators on a Hilbert space using one unitary U on a larger space. To obtain the operator at index n, apply Uⁿ and project orthogonally back to the original space. Set the zeroth operator to the identity and take adjoints for negative indices. A Toeplitz block matrix uses the operator indexed by column minus row in each position.

**Problem.** A sequence has a unitary moment dilation exactly when all its finite Toeplitz block matrices are positive semidefinite.

**How the definition helps.** In our own proof, the Toeplitz quadratic form equals ‖∑ⱼ Uʲxⱼ‖², so it is nonnegative. Conversely, use the Toeplitz form on finitely supported vectors indexed by the integers, quotient by its null space, and complete. Translation preserves the form in both directions and therefore induces a unitary. The copy at index zero embeds isometrically, and the prescribed blocks give its compressed moments.

**Paper or page:** [Operator moment dilations as block operators](https://arxiv.org/abs/2302.13873v2). It says: “Then the following are equivalent: (i) {Aₙ}ₙ≥₀ admits a unitary/isometric dilation.”

**Sources:**

- [B. V. Rajarama Bhat, Anindya Ghatak, and Santhosh Kumar Pamula, Block decompositions of operator moment dilations (2025).](https://doi.org/10.1007/s43037-025-00411-y)

### Inessential perturbations preserve Fredholmness

**Remember:** Ignore the radical without losing invertibility.

*True by definition.* MSC 47A53 ((Semi-) Fredholm operators; index theories). arXiv math.FA. Level 4: research.

**Definition.** A bounded operator is Fredholm if its range is closed and both its kernel and the quotient by its range have finite dimension. A bounded operator K on a Banach space is inessential if I − SK is Fredholm for every bounded S on that space. The Calkin algebra identifies operators whose difference is compact.

**Problem.** Adding an inessential operator to a Fredholm operator preserves Fredholmness.

**How the definition helps.** In our own proof, Atkinson’s theorem makes the quotient image f of the Fredholm operator invertible. Choose a bounded S representing −f⁻¹ and write k for the image of K. Inessentiality and Atkinson’s theorem make 1+f⁻¹k invertible. Multiplication by f gives the invertible image f+k, so F+K is Fredholm.

**Wikipedia:** [Strictly singular operator](https://en.wikipedia.org/wiki/Strictly_singular_operator). It says: “is called inessential whenever Idₓ − ST is a Fredholm operator”

**Sources:** none listed. No primary source with a working link was found.

### Odd symmetry preserves kernel parity

**Remember:** Odd symmetry makes the ordinary index zero but leaves kernel parity.

*Makes the theorem clean to state or prove.* MSC 47A53 ((Semi-) Fredholm operators; index theories), 58J20. arXiv math.DG. Level 4: research.

**Definition.** Let D be a bounded operator on a complex Hilbert space with closed range and finite-dimensional kernel and cokernel. Fix a conjugate-linear isometry τ with τ² = −1. Call D odd symmetric when τDτ⁻¹ = D\*, its adjoint. Define its parity index as dim ker D modulo two.

**Problem.** The parity index is constant under compact perturbations that preserve odd symmetry.

**How the definition helps.** In our own account, the parity index records kernel dimension modulo two because odd symmetry pairs the kernel with the cokernel. The mod-two index theorem gives local constancy for odd symmetric Fredholm operators. For a compact symmetry-preserving perturbation K, every D+tK remains Fredholm and odd symmetric for 0≤t≤1. Local constancy along this path gives the result.

**Paper or page:** [On the Z<sub>2</sub>-valued index of elliptic odd symmetric operators on non-compact manifolds](https://arxiv.org/abs/2403.13999v3). It says: “indτ(D + K) = indτ D.”

**Sources:**

- [Maxim Braverman and Ahmad Reza Haj Saeedi Sadegh, On the ℤ₂-valued index of elliptic odd symmetric operators on non-compact manifolds (2024)](https://doi.org/10.1007/s40316-024-00228-5)

### A shifted inverse detects eigenvectors

**Remember:** Move the free inverse between the two square roots.

*True by definition. Confidence: medium.* MSC 47A75 (Eigenvalue problems for linear operators). arXiv math.SP. Level 4: research.

**Definition.** Let A be self-adjoint on a Hilbert space, and let V be bounded and nonnegative, meaning ⟨Vu,u⟩ ≥ 0 for every u. For λ outside the spectrum of A, define the Birman–Schwinger operator K(λ) = √V (A − λI)⁻¹ √V. Here √V is the positive square root of V.

**Problem.** For self-adjoint A, λ outside its spectrum is an eigenvalue of A − V exactly when 1 is an eigenvalue of K(λ). The eigenspace dimensions agree.

**How the definition helps.** The shifted inverse lets the eigenvalue equation turn directly into a fixed vector equation (our own). Send u to √V u and send a fixed vector f back to (A − λI)⁻¹ √V f (our own). The maps are inverse on the two eigenspaces (our own). The work in applications is defining and controlling K when the perturbation is not bounded (our own).

**Paper or page:** [Keller and Lieb-Thirring estimates of the eigenvalues in the gap of Dirac operators](https://arxiv.org/abs/2210.03091v2). It says: “λ is an eigenvalue of 𝒟̸ₘ − V if and only if 1 is an eigenvalue of Kᵥ(λ).”

**Sources:** none listed. No primary source with a working link was found.

### Resolvent square roots preserve eigenspace dimension

**Remember:** Move the square roots across the eigenvalue equation.

*True by definition.* MSC 47A75 (Eigenvalue problems for linear operators). arXiv math.SP. Level 4: research.

**Definition.** On L²(ℝ), let H₀=−d²/dx² with domain H²(ℝ), and let V be a real distribution acting continuously on H¹(ℝ). For λ&lt;0 let R be the inverse square root of H₀−λI. Define B by ⟨f,Bg⟩=−V((Rf)̅·Rg) for all f,g∈L²(ℝ), conjugating the first factor.

**Problem.** Let H be the Schrödinger operator obtained by adding V to the energy form of H₀. The eigenspaces of H at λ and of B at one have equal dimension.

**How the definition helps.** Placing one inverse square root on each side of V makes the eigenvector correspondence reversible. The square root of H₀ − λI takes an eigenvector of H to a fixed vector of −RVR. Applying R takes that vector back. In our own account, the work lies in defining the sum through its energy form and verifying the operator domains.

**Paper or page:** [A generalized Birman-Schwinger principle and applications to one-dimensional Schrödinger operators with distributional potentials](https://arxiv.org/abs/2507.02251v2). It says: “the geometric multiplicity of λ₀ as an eigenvalue of H coincides with the geometric multiplicity of the eigenvalue 1 of Aᵥ(λ₀).”

**Sources:**

- [Fritz Gesztesy and Roger Nichols, A generalized Birman-Schwinger principle and applications to one-dimensional Schrödinger operators with distributional potentials, Theorem 2.10 (2025).](https://arxiv.org/abs/2507.02251v2)
- [Fritz Gesztesy and Roger Nichols, A Generalized Birman–Schwinger Principle and Applications to One-Dimensional Schrödinger Operators with Distributional Potentials (2025).](https://doi.org/10.1134/s1234567825030024)

### Regularized determinants handle square-integrable kernels

**Remember:** Remove the linear term so squared singular values suffice.

*Rules out counterexamples.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)), 45P05. arXiv math.FA. Level 4: research.

**Definition.** For an integral operator K with square-integrable kernel, define the regularized determinant D(λ) as the Fredholm determinant of (I + λK)exp(−λK). The Fredholm determinant applies to the identity plus an operator with summable singular values.

**Problem.** D is an entire function of λ. Without the exponential correction, the product of 1 + λμ over the eigenvalues μ of K can diverge.

**How the definition helps.** In our own proof, removing the linear term leaves K² times an operator-norm entire factor. Since K is Hilbert–Schmidt, K² is trace class, and the remainder is entire in trace norm. Fredholm determinant analyticity now gives the result. Diagonal coefficients 1/n in an orthonormal basis give a square-integrable kernel whose uncorrected product at λ=1 has partial products N+1.

**Wikipedia:** [Hilbert–Schmidt integral operator](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Schmidt_integral_operator). It says: “Hilbert–Schmidt integral operators are both continuous and compact.”

**Sources:**

- [Folkmar Bornemann, On the numerical evaluation of Fredholm determinants (2010)](https://doi.org/10.1090/s0025-5718-09-02280-7)

### Abstract Friedrichs operators split into skew-symmetric and bounded positive parts

**Remember:** Half the sum is the positive part; half the difference is skew.

*True by definition.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A05, 35F45. arXiv math.AP, math.FA. Level 4: research.

**Definition.** An abstract Friedrichs pair is two densely defined operators T₀ and T̃₀ on a Hilbert space with a common domain. They are formal adjoints of each other: ⟨T₀φ, ψ⟩ = ⟨φ, T̃₀ψ⟩ for φ, ψ in that domain. Their sum T₀ + T̃₀ is bounded there. Its quadratic form is at least 2μ‖φ‖² for some μ &gt; 0.

**Problem.** Every such pair is T₀ = L₀ + S and T̃₀ = −L₀ + S in exactly one way. Here L₀ is skew-symmetric, so −L₀ is contained in its adjoint. S is bounded, self-adjoint and satisfies ⟨Su, u⟩ ≥ μ‖u‖².

**How the definition helps.** In our own proof, addition forces S=(T₀+T̃₀)/2 on the common domain, and subtraction forces L₀=(T₀−T̃₀)/2. Formal adjointness makes S symmetric and L₀ skew-symmetric there. Boundedness and density extend S uniquely to a bounded self-adjoint operator everywhere. Its lower bound passes to the extension by continuity.

**Paper or page:** [The von Neumann extension theory for abstract Friedrichs operators](https://arxiv.org/abs/2312.09618v2). It says: “we show that every abstract Friedrichs operator can be written as the sum of a skew-symmetric operator and a bounded self-adjoint strictly positive operator.”

**Sources:**

- [Marko Erceg, Sandeep Kumar Soni, The von Neumann extension theory for abstract Friedrichs operators, arXiv:2312.09618v2 (2024)](https://arxiv.org/abs/2312.09618v2)

### Boundary data classify self-adjoint extensions

**Remember:** Two jointly onto boundary maps turn the adjoint identity into boundary pairings.

*Makes the theorem clean to state or prove.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 81Q10. arXiv math-ph. Level 4: research.

**Definition.** Let S be closed, densely defined and symmetric on a complex Hilbert space. A boundary triple consists of a Hilbert space G and linear maps Γ₀,Γ₁:dom S\*→G with (Γ₀,Γ₁) onto G×G. For all f,g∈dom S\*, require ⟨S\*f,g⟩−⟨f,S\*g⟩=⟨Γ₁f,Γ₀g⟩−⟨Γ₀f,Γ₁g⟩.

**Problem.** A boundary triple exists exactly when the eigenspaces of S\* at i and −i have equal dimension. For such a triple, prescribing the second boundary value as a self-adjoint operator of the first defines a self-adjoint extension.

**How the definition helps.** In our own explanation, the boundary maps turn the adjoint calculation into an identity involving only the two boundary values. Surjectivity lets the two values vary independently in this identity. Taking the adjoint of an extension defined by a closed densely defined boundary operator then replaces that boundary operator by its adjoint. Constructing the triple uses the equal dimensions of the two eigenspaces.

**Paper or page:** [Fundamental solutions and Hadamard states for a scalar field with arbitrary boundary conditions on an asymptotically AdS spacetimes](https://arxiv.org/abs/2101.10290v1). It says: “Then an associated boundary triple (𝖍, γ₀, γ₁) exists if and only if S∗ has equal deficiency indices.”

**Sources:**

- [Fundamental solutions and Hadamard states for a scalar field with arbitrary boundary conditions on an asymptotically AdS spacetimes](https://arxiv.org/abs/2101.10290v1)

### Boundary parameters carry extension kernels

**Remember:** The extension has a zero mode exactly when its boundary operator does.

*True by definition.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)). arXiv math.SP. Level 4: research.

**Definition.** Fix a boundedly invertible self-adjoint extension A of a closed densely defined symmetric operator S, and set N=ker S\*. Choose a self-adjoint parameter T on a closed subspace M⊆N. Its extension restricts S\* to dom S ⊕ {v+A⁻¹(Tv+w) ∣ v∈dom T, w∈N⊖M}.

**Problem.** The extension and its Birman parameter have the same kernel as subspaces of the original Hilbert space.

**How the definition helps.** In our own proof, S\* sends u+v+A⁻¹(Tv+w) to Su+Tv+w. These three outputs belong respectively to N⊥, M, and N⊖M, so a zero output forces each to vanish. Invertibility of A gives u=0, leaving precisely v∈ker T. The Krein–Vishik–Birman theorem supplies the domain formula.

**Paper or page:** [On creating new essential spectrum by self-adjoint extension of gapped operators](https://arxiv.org/abs/2304.02579v3). It says: “ker Sₜ = ker T, and therefore Sₜ is injective ⇔ T is injective;”

**Sources:**

- [Alessandro Michelangeli, On creating new essential spectrum by self-adjoint extension of gapped operators (2024).](https://doi.org/10.1007/s43034-024-00319-y)

### Boundary triplets reduce eigenvalues of extensions to a boundary equation

**Remember:** Self-adjoint extensions become self-adjoint relations on the boundary space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A20, 47A75. arXiv math.SP, math.FA. Level 4: research.

**Definition.** For closed densely defined symmetric S, a boundary triplet comprises a Hilbert space G and linear traces (Υ₀,Υ₁):dom S\*→G×G jointly onto G×G. For all f,g∈dom S\*, require ⟨S\*f,g⟩−⟨f,S\*g⟩=⟨Υ₁f,Υ₀g⟩−⟨Υ₀f,Υ₁g⟩. Off the spectrum of A₀=S\* restricted to ker Υ₀, γ(λ) inverts Υ₀ on ker(S\*−λI), and M(λ)=Υ₁γ(λ).

**Problem.** Self-adjoint extensions AΘ of S correspond to self-adjoint linear relations Θ in G. Outside the spectrum of A₀, λ is an eigenvalue of AΘ exactly when ker(Θ−M(λ)) is nonzero. Then ker(AΘ−λI)=γ(λ)ker(Θ−M(λ)).

**How the definition helps.** In our own deduction, the boundary triplet theorem gives the extension domain by requiring (Υ₀f,Υ₁f)∈Θ. Every solution of S\*f=λf has the unique form f=γ(λ)h. Its boundary pair is (h,M(λ)h), which lies in Θ exactly when h∈ker(Θ−M(λ)).

**Paper or page:** [On Spectral Properties of Restricted Fractional Laplacians with Self-adjoint Boundary Conditions on a Finite Interval](https://arxiv.org/abs/2505.00094), [On Spectral Properties of Restricted Fractional Laplacians with Self-adjoint Boundary Conditions on a Finite Interval](https://arxiv.org/abs/2505.00094). It says: “λ ∈ σp(AΘ) if and only if 0 ∈ σp(Θ − M(λ)), and in this case ker(AΘ − λ) = γ(λ) ker(Θ − M(λ))”

**Sources:**

- [Jussi Behrndt, Markus Holzmann, Delio Mugnolo, On Spectral Properties of Restricted Fractional Laplacians with Self-adjoint Boundary Conditions on a Finite Interval, arXiv:2505.00094 (2025)](https://arxiv.org/abs/2505.00094)
- [V. A. Derkach, M. M. Malamud, Generalized resolvents and the boundary value problems for Hermitian operators with gaps, J. Funct. Anal. 95 (1991), 1–95](https://doi.org/10.1016/0022-1236(91)90024-y)

### Removing the Krein kernel recovers the inverse

**Remember:** Drop the zero modes, then take any extension's inverse and project.

*True by definition.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)). arXiv math.SP. Level 4: research.

**Definition.** Let S be a closed, densely defined symmetric operator bounded below by a positive constant. Extend S by zero on the kernel of its adjoint S\*. This gives the Krein–von Neumann extension. Its reduced operator is its restriction to the orthogonal complement of that kernel.

**Problem.** Let y belong to the range of S. Apply the inverse of any boundedly invertible self-adjoint extension to y, then project orthogonally onto that range. The result equals the reduced operator’s inverse at y.

**How the definition helps.** In our own proof, closedness and the positive lower bound make ran S closed, with orthogonal complement ker S\*. Write y=Sx, so the inverse of every invertible extension sends y to x. Projecting x onto ran S subtracts a vector of ker S\*, leaving the Krein extension’s output unchanged. The projected vector is therefore the unique reduced solution.

**Paper or page:** [Some Remarks On Krein--von Neumann Extensions](https://arxiv.org/abs/2504.11718v2). It says: “let S̃ be any self-adjoint extension S such that 0 ∈ ρ(S̃).”

**Sources:** none listed. No primary source with a working link was found.

### Canonical factors invert Wiener–Hopf equations

**Remember:** Factor outside times inside, with bounded analytic inverses on both sides.

*Rules out counterexamples.* MSC 47B35 (Toeplitz operators, Hankel operators, Wiener-Hopf operators), 45E10. arXiv math.FA. Level 4: research.

**Definition.** On the unit circle, factor a bounded function G as an outside factor times an inside factor. Each factor and its reciprocal extend analytically and boundedly to their side, including infinity for the outside factor. Such a factorization is canonical because it has no intervening power of z.

**Problem.** Let G be a bounded function on the unit circle with a canonical factorization G = V₋V₊. Then its Toeplitz operator on the Hardy space H² is invertible, with inverse T(1/V₊)T(1/V₋). Here H² holds the square-integrable functions with no negative Fourier coefficients.

**How the definition helps.** The inside factor preserves nonnegative modes, and the outside factor preserves strictly negative modes (our own). These facts let the projection split the product and make both factor inverses valid after projection (our own). The symbol z has a power between its factors, and its projected multiplication misses constants (our own). The work lies in proving a given symbol has canonical factors (our own).

**Paper or page:** [A new systems theory perspective on canonical Wiener-Hopf factorization on the unit circle](https://arxiv.org/abs/2409.17324v3). It says: “G(z) = V₋(z) V₊(z)”

**Sources:**

- [A new systems theory perspective on canonical Wiener-Hopf factorization on the unit circle](https://arxiv.org/abs/2409.17324v3)

### Evolution semigroups put dichotomies in spectra

**Remember:** Put the time shift into the operator before looking at its spectrum.

*Makes the theorem clean to state or prove.* MSC 47D06 (One-parameter semigroups and linear evolution equations). arXiv math.FA. Level 4: research.

**Definition.** For a strongly continuous evolution family V(t,s) on X with real s≤t, the evolution semigroup on C₀(ℝ,X) acts by (S(h)f)(t)=V(t,t−h)f(t−h) for h≥0. An exponential dichotomy uses uniformly bounded projections P(t) satisfying V(t,s)P(s)=P(t)V(t,s), with V(t,s) mapping ker P(s) bijectively onto ker P(t). For some C,α&gt;0, the stable restriction to ran P(s) and the inverse unstable restriction both have norm at most C exp(−α(t−s)) for every s≤t.

**Problem.** Let V(t,s) be a strongly continuous evolution family on a complex Banach space with ‖V(t,s)‖ ≤ M exp(ω(t−s)) for s ≤ t. It has an exponential dichotomy exactly when the generator of its evolution semigroup has no spectrum on the imaginary axis.

**How the definition helps.** In our own account, the trajectory space turns a two-time family into a single generator with a spectrum. The splitting yields an inverse by integrating the stable part forward and the unstable part backward. In our own account, the recovery of the time-dependent splitting is the work of the evolution semigroup theorem.

**Paper or page:** [Generalized Evolution Semigroups and $h-$Dichotomies for Evolution Families on Banach Spaces](https://arxiv.org/abs/2511.11670v1). It says: “σ(A) ∩ iℝ = ∅.”

**Sources:** none listed. No primary source with a working link was found.

### Viewing PDHG and ADMM as proximal point steps gives one rate proof

**Remember:** The weighted step equals a saddle subgradient at the new point.

*Makes the theorem clean to state or prove.* MSC 47J25 (Iterative procedures involving nonlinear operators), 90C33, 90C47. arXiv math.OC. Level 4: research.

**Definition.** For a convex-concave saddle function L, put F(x,λ)=∂ₓL(x,λ) × ∂λ(−L)(x,λ), using convex subdifferentials. Given a fixed positive semidefinite matrix P, choose each iterate zᵢ=(xᵢ,λᵢ) to satisfy P(zᵢ₋₁−zᵢ)∈F(zᵢ). Write ‖u‖²<sub>P</sub>=⟨u,Pu⟩.

**Problem.** Consider proximal point, primal-dual hybrid gradient, and alternating direction method of multipliers iterations in this form. Let (x̄,λ̄) average the first k updated pairs. For every feasible z=(x,λ), the saddle gap L(x̄,λ)−L(x,λ̄) is at most ‖z₀−z‖²<sub>P</sub>/(2k).

**How the definition helps.** The two subgradient inequalities bound each gap by ⟨P(zᵢ₋₁−zᵢ),zᵢ−z⟩. In our own calculation, twice this product is ‖zᵢ₋₁−z‖²<sub>P</sub>−‖zᵢ−z‖²<sub>P</sub>−‖zᵢ−zᵢ₋₁‖²<sub>P</sub>. Summing telescopes, and convexity and concavity bound the averaged gap by the mean gap. The paper identifies the update and metric for each method.

**Paper or page:** [On a Unified and Simplified Proof for the Ergodic Convergence Rates of PPM, PDHG and ADMM](https://arxiv.org/abs/2305.02165v2), [On a Unified and Simplified Proof for the Ergodic Convergence Rates of PPM, PDHG and ADMM](https://arxiv.org/abs/2305.02165v2), [On a Unified and Simplified Proof for the Ergodic Convergence Rates of PPM, PDHG and ADMM](https://arxiv.org/abs/2305.02165v2). It says: “This viewpoint shows the equivalence of these three algorithms upto a norm change, and it leads to a four-line simple proof of their 𝒪(1/k) ergodic rates.”

**Sources:**

- [Haihao Lu, Jinwen Yang, On a Unified and Simplified Proof for the Ergodic Convergence Rates of PPM, PDHG and ADMM, arXiv:2305.02165v2 (2023)](https://arxiv.org/abs/2305.02165v2)

### An operator-space spectral radius detects joint similarity to strict contractions

**Remember:** Use one similarity for every entry and take the infimum of the tuple norms.

*True by definition. Confidence: medium.* MSC 47L25 (Operator spaces (= matricially normed spaces)), 47A13, 46L07. arXiv math.OA, math.FA. Level 4: research.

**Definition.** For a matrix tuple X=(X₁,…,X<sub>d</sub>) with operator space norm ℰ, use the similarity formula ρℰ(X)=inf<sub>S</sub> ‖(S⁻¹X₁S,…,S⁻¹X<sub>dS</sub>)‖ℰ. The infimum ranges over every invertible matrix S of the same size as the entries of X.

**Problem.** A d-tuple X of matrices is jointly similar to a tuple of strict contractions in the norm of ℰ exactly when ρℰ(X) &lt; 1. This extends Rota's theorem, which says that one matrix is similar to a strict contraction exactly when its spectral radius is below 1.

**How the definition helps.** In our own deduction, an infimum below one gives some simultaneous conjugate with norm below one. Conversely, such a conjugate bounds the infimum by its norm. Corollary 2.13 identifies the similarity formula with the authors’ spectral radius.

**Paper or page:** [A spectral radius for matrices over an operator space](https://arxiv.org/abs/2501.01325), [A spectral radius for matrices over an operator space](https://arxiv.org/abs/2501.01325). It says: “related to the joint spectral radius considered by Rota and Strang but differs from it and has the advantage that ρℰ(X) &lt; 1 if and only if X is simultaneously similar to a tuple of strict contractions.”

**Sources:**

- [Orr Shalit, Eli Shamovich, A spectral radius for matrices over an operator space, arXiv:2501.01325 (2025)](https://arxiv.org/abs/2501.01325)
