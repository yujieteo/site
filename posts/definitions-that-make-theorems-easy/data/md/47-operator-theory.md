### Surjectivity makes an isometry’s adjoint its inverse

**Remember:** Isometry gives a left inverse; onto makes it two-sided.

*Rules out counterexamples.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A unitary map is a linear isometry between Hilbert spaces that is also onto. Preserving norms gives U∗U = I, and being onto turns this left inverse into a two-sided one.

**Problem.** The adjoint of a unitary map is its inverse.

**How the definition helps.** Polarization recovers inner products from norms, so ⟨Ux,Uy⟩ = ⟨x,y⟩ and U∗U = I (our own). A left inverse of a bijection is its inverse, so U∗ = U⁻¹ (our own). The right shift on ℓ² is an isometry that is not onto, and its adjoint is only a left inverse.

**Paper or page:** [Linear Transformation is Isomorphism iff Inverse Equals Adjoint](https://proofwiki.org/wiki/Linear_Transformation_is_Isomorphism_iff_Inverse_Equals_Adjoint). It says: “U is invertible and U⁻¹ = U∗, where U∗ denotes the adjoint of U.”

**Sources:** none listed. No primary source with a working link was found.

### Taking adjoints preserves the operator norm

**Remember:** Swap the two unit vectors to see the same norm.

*True by definition.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** On Hilbert spaces, the operator norm of T is the supremum of \|⟨Tx,y⟩\| over unit vectors x and y. The adjoint is defined by ⟨Tx,y⟩ = ⟨x,T∗y⟩, so it gives the same numbers, up to conjugation, with x and y swapped.

**Problem.** A bounded operator between Hilbert spaces and its adjoint have the same operator norm.

**How the definition helps.** The two-vector formula for T∗ runs over the same absolute values as for T, so the suprema agree (our own). This formula equals the usual supremum of ‖Tx‖, since Cauchy–Schwarz bounds \|⟨Tx,y⟩\| by ‖Tx‖ and y along Tx attains it (our own).

**Paper or page:** [Norm of Adjoint](https://proofwiki.org/wiki/Norm_of_Adjoint). It says: “\\norm A\_{\\map B {H, K} }<sup>2</sup> = \\norm {A<sup>\*}\_{\\map</sup> B {K, H} }<sup>2</sup>”

**Sources:** none listed. No primary source with a working link was found.

### The adjoint turns a kernel into an orthogonal complement

**Remember:** Moving across the inner product turns zero into perpendicular to the range.

*True by definition.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The adjoint T∗ is defined by ⟨Tx,y⟩ = ⟨x,T∗y⟩ for all x and y. So x is perpendicular to every output T∗y exactly when Tx is perpendicular to every y.

**Problem.** For a bounded linear map T between Hilbert spaces, Tx = 0 exactly when x is perpendicular to every output of the adjoint.

**How the definition helps.** A vector perpendicular to every y, including itself, is zero, so Tx = 0 (our own). Conversely, Tx = 0 makes every ⟨x,T∗y⟩ vanish (our own).

**Paper or page:** [Kernel of Linear Transformation is Orthocomplement of Image of Adjoint](https://proofwiki.org/wiki/Kernel_of_Linear_Transformation_is_Orthocomplement_of_Image_of_Adjoint). It says: “ker A = (im A∗)⊥”

**Sources:** none listed. No primary source with a working link was found.

### The inner product definition turns adjoint existence into Riesz representation

**Remember:** Move the map across the inner product, one test vector at a time.

*True by definition.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The adjoint T∗ is defined, with no basis, by ⟨Tx,y⟩ = ⟨x,T∗y⟩ for all x and y. For each fixed y, this asks for the vector that represents the bounded functional x ↦ ⟨Tx,y⟩.

**Problem.** Every bounded linear map between Hilbert spaces has a unique bounded adjoint.

**How the definition helps.** Riesz representation gives exactly one such vector T∗y, with norm at most ‖T‖‖y‖ (our own). Uniqueness then makes T∗ linear in y, with the inner product linear in its first variable (our own).

**Paper or page:** [Existence and Uniqueness of Adjoint](https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Adjoint). It says: “each bounded linear transformation between Hilbert spaces has a unique adjoint.”

**Sources:** none listed. No primary source with a working link was found.

### Invertibility makes polynomial spectral mapping a factorization

**Remember:** Factor the polynomial and check the shifted operators one at a time.

*Makes the theorem clean to state or prove.* MSC 47A10 (Spectrum, resolvent). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The spectrum σ(T) of a bounded operator is the set of scalars λ for which T − λI has no bounded inverse. Invertibility of a product of commuting operators can be tested factor by factor (our own).

**Problem.** For a bounded operator T on a nonzero complex Banach space and a polynomial p, σ(p(T)) = p(σ(T)).

**How the definition helps.** Factor p(z) − μ = c(z − λ₁)⋯(z − λₙ) over ℂ, so p(T) − μI is a product of the commuting factors T − λᵢI (our own). Such a product is invertible exactly when each factor is, so μ ∈ σ(p(T)) exactly when some root λᵢ lies in σ(T) (our own). For constant p = c both sides are {c}, since the spectrum is never empty (our own).

**Paper or page:** [Spectral Mapping Theorem for Polynomials](https://proofwiki.org/wiki/Spectral_Mapping_Theorem_for_Polynomials). It says: “\\map {\\sigma<sub>A</sub>} {\\map p x} = p \\sqbrk {\\map {\\sigma<sub>A</sub>} x}”

**Sources:** none listed. No primary source with a working link was found.

### The continuous spectrum sees failures of surjectivity missed by eigenvalues

**Remember:** Nothing dies, outputs come near everything, yet something is missed.

*Makes the theorem clean to state or prove.* MSC 47A10 (Spectrum, resolvent). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A scalar λ lies in the continuous spectrum of a bounded operator T when T − λI is one-to-one and its range is dense but not the whole space. So no nonzero vector goes to zero, yet some vector is missed.

**Problem.** On ℓ², the space of square-summable sequences, the operator that divides coordinate n by n has zero in its continuous spectrum. Zero is not an eigenvalue.

**How the definition helps.** Dividing coordinate n by n is one-to-one, and its range contains every finitely supported sequence, so it is dense (our own). The sequence (1/n) is missed, since its only preimage is (1, 1, 1, …), which is not square-summable (our own).

**Wikipedia:** [Spectrum (functional analysis)](https://en.wikipedia.org/wiki/Spectrum_%28functional_analysis%29). It says: “is injective and has dense range, but is not surjective”

**Sources:** none listed. No primary source with a working link was found.

### Rank one projectors show numerical range convexity

**Remember:** Two vectors reduce numerical range convexity to a filled ellipse.

*True by definition.* MSC 47A12 (Numerical range, numerical radius). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The numerical range of a complex square matrix A is the set of values x\*Ax for unit vectors x. Equivalently, it is the set of trace(AP) over rank-one orthogonal projections P = xx\*, a linear function of P.

**Problem.** The numerical range of a complex square matrix is convex.

**How the definition helps.** Compressing A to the span of two unit vectors keeps both values, so it suffices to treat 2×2 matrices (our own). There the rank-one projections form a 2-sphere, and the linear map P ↦ trace(AP) sends it onto a filled ellipse, a segment or a point (our own). Each of these is convex, so it contains the segment between the two values (our own).

**Wikipedia:** [Numerical range](https://en.wikipedia.org/wiki/Numerical_range). It says: “The image of a 2-sphere under a linear projection is a filled ellipse.”

**Sources:** none listed. No primary source with a working link was found.

### Normal pseudospectra are spectral neighborhoods

**Remember:** For normal matrices, resolvent size measures distance to the closest eigenvalue.

*True by definition.* MSC 47A55 (Perturbation theory of linear operators). arXiv math.SP, math.FA. Level 2: later undergraduate.

**Definition.** The ε-pseudospectrum of a complex square matrix A is the set of eigenvalues of all matrices A + E with ‖E‖ ≤ ε, in the Euclidean operator norm. Equivalently, it is the eigenvalues of A together with the z where ‖(A − zI)⁻¹‖ ≥ 1/ε.

**Problem.** If A is normal, meaning AA\* = A\*A, its ε-pseudospectrum consists exactly of numbers at distance at most ε from an eigenvalue.

**How the definition helps.** For normal A the spectral theorem gives ‖(A − zI)⁻¹‖ = 1/dist(z, σ(A)) off the spectrum (our own). This is at least 1/ε exactly when z is within ε of an eigenvalue (our own).

**Wikipedia:** [Pseudospectrum](https://en.wikipedia.org/wiki/Pseudospectrum). It says: “The ε-pseudospectrum of a matrix A consists of all eigenvalues of matrices which are ε-close to A:”

**Paper or page:** [Stability Analysis of a Simple Discretization Method for a Class of Strongly Singular Integral Equations](https://arxiv.org/abs/2302.13159v3). It says: “‖(λ𝕀 − AΩ)⁻¹‖ = dist(λ, 𝒞)⁻¹.”

**Sources:** none listed. No primary source with a working link was found.

### Compact operators cannot have bounded inverses in infinite dimension

**Remember:** If a compact map were invertible, the identity would be compact too.

*Rules out counterexamples.* MSC 47B07 (Linear operators defined by compactness properties). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A compact operator sends bounded sets to sets with compact closure. The spectrum of T is the set of scalars λ for which T − λI has no bounded inverse, so 0 outside the spectrum would make T itself invertible.

**Problem.** Zero belongs to the spectrum of every compact operator on an infinite-dimensional complex Banach space.

**How the definition helps.** If T had a bounded inverse, the identity I = T⁻¹T would be compact, so the closed unit ball would be compact (our own). Riesz's lemma rules out a compact unit ball in infinite dimension. Without compactness, the identity is its own bounded inverse.

**Paper or page:** [Spectrum of Compact Linear Operator on Infinite-Dimensional Banach Space contains Zero](https://proofwiki.org/wiki/Spectrum_of_Compact_Linear_Operator_on_Infinite-Dimensional_Banach_Space_contains_Zero). It says: “That is, T is not invertible as a bounded linear operator.”

**Sources:** none listed. No primary source with a working link was found.

### Compact self-adjoint operators have orthonormal eigenbases

**Remember:** Compactness yields an eigenvector, and self-adjointness preserves its perpendicular space.

*Rules out counterexamples.* MSC 47B07 (Linear operators defined by compactness properties). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A compact self-adjoint operator T, one with ⟨Tx,y⟩ = ⟨x,Ty⟩, takes bounded sequences to sequences with norm-convergent subsequences. If T ≠ 0, compactness together with self-adjointness gives an eigenvector with nonzero eigenvalue, and self-adjointness keeps the space perpendicular to any eigenvectors invariant (our own).

**Problem.** Every compact self-adjoint operator on a Hilbert space has an orthonormal basis of eigenvectors with real eigenvalues.

**How the definition helps.** Take a maximal orthonormal family of eigenvectors, so T maps the space perpendicular to it into itself (our own). There T is compact and self-adjoint with no eigenvector of nonzero eigenvalue, so it is zero, and a basis of that space completes the eigenbasis (our own). Eigenvalues are real because ⟨Tx,x⟩ is real, and multiplication by t on L²\[0,1\] has no eigenvectors at all.

**Wikipedia:** [Spectral theorem](https://en.wikipedia.org/wiki/Spectral_theorem). It says: “Then there is an orthonormal basis of V consisting of eigenvectors of A. Each eigenvalue is real.”

**Sources:** none listed. No primary source with a working link was found.

### Compactness limits the dimension of nonzero eigenspaces

**Remember:** Scaling by a nonzero eigenvalue cannot make an infinite unit ball compact.

*Rules out counterexamples.* MSC 47B07 (Linear operators defined by compactness properties). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A compact operator sends bounded sets to sets with compact closure. On an eigenspace for λ ≠ 0 it acts as multiplication by λ, so it would make the unit ball of that eigenspace compact.

**Problem.** For a compact operator on a Hilbert space, every eigenspace for a nonzero eigenvalue is finite-dimensional.

**How the definition helps.** The eigenspace is closed, and its closed unit ball is λ⁻¹ times a closed part of the image of a bounded set, so it is compact (our own). Riesz's lemma says a closed unit ball is compact only in finite dimension. The identity on ℓ² is bounded but not compact, and its eigenspace at 1 is infinite-dimensional.

**Paper or page:** [Nonzero Eigenvalue of Compact Operator has Finite Dimensional Eigenspace](https://proofwiki.org/wiki/Nonzero_Eigenvalue_of_Compact_Operator_has_Finite_Dimensional_Eigenspace). It says: “Then the eigenspace for λ has finite dimension.”

**Sources:** none listed. No primary source with a working link was found.

### Finite covers make operator norm limits of compact maps compact

**Remember:** A uniform perturbation only enlarges the covering balls.

*True by definition.* MSC 47B07 (Linear operators defined by compactness properties). arXiv math.FA. Level 2: later undergraduate.

**Definition.** An operator into a Banach space is compact when, for every r &gt; 0, finitely many balls of radius r cover the image of its unit ball. Because the target is complete, this is the same as the image having compact closure.

**Problem.** An operator norm limit of compact operators into a Banach space is compact.

**How the definition helps.** Pick a compact operator within r/2 of the limit in operator norm, and cover its unit ball image by finitely many balls of radius r/2 (our own). The same centers with radius r then cover the image under the limit (our own).

**Paper or page:** [Space of Compact Linear Transformations is Banach Space](https://proofwiki.org/wiki/Space_of_Compact_Linear_Transformations_is_Banach_Space). It says: “is a Banach space with respect to this norm.”

**Sources:** none listed. No primary source with a working link was found.

### Relatively compact images survive composition on either side

**Remember:** A bounded map preserves bounded input sets and compact output closures.

*True by definition.* MSC 47B07 (Linear operators defined by compactness properties). arXiv math.FA. Level 2: later undergraduate.

**Definition.** A linear map between normed spaces is compact if it sends every bounded set to a set with compact closure. A bounded map sends bounded sets to bounded sets, and a continuous map sends compact sets to compact sets.

**Problem.** Composing a compact operator with a bounded linear operator on either side gives a compact operator whenever the spaces match.

**How the definition helps.** With the bounded map first, the set stays bounded, and the compact map then gives compact closure (our own). With the compact map first, the bounded map sends the compact closure to a compact set that contains the final image (our own).

**nLab:** [compact operator](https://ncatlab.org/nlab/show/compact+operator). It says: “A linear operator is compact if it sends bounded subsets to relatively compact subsets.”

**Sources:** none listed. No primary source with a working link was found.

### Commuting with the adjoint makes the two kernels agree

**Remember:** A normal operator commutes with its adjoint, so their output lengths agree.

*Rules out counterexamples.* MSC 47B15 (Hermitian and normal operators (spectral measures, functional calculus, etc.)), 47A05. arXiv math.FA. Level 2: later undergraduate.

**Definition.** A bounded operator T on a Hilbert space is normal if it commutes with its adjoint, T∗T = TT∗. Then ‖Tx‖² = ⟨T∗Tx,x⟩ = ⟨TT∗x,x⟩ = ‖T∗x‖² for every x.

**Problem.** A bounded normal operator and its adjoint have the same kernel, the set of vectors they send to zero.

**How the definition helps.** Since ‖Tx‖ = ‖T∗x‖ for every x, one is zero exactly when the other is (our own). Without commutation, (a,b) ↦ (b,0) has the first axis as kernel, but its adjoint (a,b) ↦ (0,a) has the second axis.

**Paper or page:** [Kernel of Normal Operator is Kernel of Adjoint](https://proofwiki.org/wiki/Kernel_of_Normal_Operator_is_Kernel_of_Adjoint). It says: “ker A = ker A∗”

**Sources:** none listed. No primary source with a working link was found.

### Self-adjointness gives real spectrum beyond eigenvalues

**Remember:** Self-adjoint means ⟨Tx,x⟩ is real, so nonreal shifts are invertible.

*Rules out counterexamples.* MSC 47B15 (Hermitian and normal operators (spectral measures, functional calculus, etc.)), 47A10. arXiv math.FA. Level 2: later undergraduate.

**Definition.** A bounded operator T on a complex Hilbert space is self-adjoint if ⟨Tx,y⟩ = ⟨x,Ty⟩ for all x and y. Then ⟨Tx,x⟩ is real for every x, so a nonreal shift T − λI moves every such value off the real line.

**Problem.** The spectrum of a bounded self-adjoint operator on a complex Hilbert space is real.

**How the definition helps.** Taking imaginary parts of ⟨(T − λI)x,x⟩ and using Cauchy–Schwarz gives ‖(T − λI)x‖ ≥ \|Im λ\|‖x‖ (our own). This bound gives closed range, and the same bound for the adjoint gives dense range, so T − λI has a bounded inverse (our own). Multiplication by i is not self-adjoint and has spectrum {i}.

**Paper or page:** [Spectrum of Self-Adjoint Bounded Linear Operator is Real](https://proofwiki.org/wiki/Spectrum_of_Self-Adjoint_Bounded_Linear_Operator_is_Real). It says: “σ(T) ⊆ ℝ”

**Sources:** none listed. No primary source with a working link was found.

### A dense domain makes the adjoint of an operator well defined

**Remember:** Only a dense domain pins down the vector that represents the functional.

*Makes the theorem clean to state or prove.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)), 47B25. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** The adjoint sends y to the vector z with ⟨Tx,y⟩ = ⟨x,z⟩ for all x in the domain of T, when x ↦ ⟨Tx,y⟩ is continuous. Such a z is unique exactly when the domain is dense, since only zero is perpendicular to a dense subspace.

**Problem.** The adjoint T\* of a linear operator T on a Hilbert space is a well-defined, single-valued operator exactly when T is densely defined.

**How the definition helps.** Density gives the functional a unique continuous extension to the whole space, and Riesz representation gives its unique vector (our own). Without density, adding any nonzero vector perpendicular to the domain gives a second z.

**Wikipedia:** [Unbounded operator](https://en.wikipedia.org/wiki/Unbounded_operator). It says: “The denseness of the domain is necessary and sufficient for the existence of the adjoint (if X and Y are Hilbert spaces) and the transpose; see the sections below.”

**Sources:**

- [J. von Neumann, Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren, Mathematische Annalen 102 (1930), 49–131](https://doi.org/10.1007/BF01782338)

### Closability gives densely defined adjoints

**Remember:** Without a vertical limit in the graph, the adjoint has dense domain.

*Rules out counterexamples.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)), 46C05. arXiv math.FA. Level 3: graduate.

**Definition.** A densely defined operator T is closable if the closure of its graph is still a graph, so it contains no vertical pair (0,y) with y ≠ 0. Its adjoint is defined at y when x ↦ ⟨Tx,y⟩ is bounded on the domain.

**Problem.** A densely defined linear operator on a complex Hilbert space has a densely defined adjoint if and only if it is closable.

**How the definition helps.** The vectors y with (0,y) in the closed graph form exactly the orthogonal complement of the adjoint domain (our own). So the adjoint domain is dense exactly when no nonzero such y exists, which is closability (our own). Evaluation f ↦ f(0)·1 on polynomials in L²\[0,1\] is not closable: (1−x)ⁿ tends to zero while its outputs stay 1.

**Paper or page:** [Densely-Defined Linear Operator is Closable iff Adjoint is Densely-Defined](https://proofwiki.org/wiki/Densely-Defined_Linear_Operator_is_Closable_iff_Adjoint_is_Densely-Defined). It says: “A densely-defined linear operator on a complex Hilbert space is closable if and only if its adjoint is also densely-defined.”

**Sources:** none listed. No primary source with a working link was found.

### Closed densely defined operators are exactly those equal to their double adjoint

**Remember:** Complement the graph twice and you get its closure back.

*Makes the theorem clean to state or prove.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)), 47B25. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** A linear operator T on a Hilbert space H is closed if its graph is closed in H × H, and densely defined if its domain is dense. When T is densely defined, the graph of T∗ is the orthogonal complement of the graph of T turned by (x,y) ↦ (−y,x) (our own).

**Problem.** An operator T on a Hilbert space is closed and densely defined if and only if T\*\* = T.

**How the definition helps.** For closed densely defined T, the adjoint domain is dense, and taking the turned complement twice gives back the closed graph, so T∗∗ = T (our own). Conversely, T∗∗ exists only if T is densely defined, and every adjoint has a closed graph (our own).

**Wikipedia:** [Unbounded operator](https://en.wikipedia.org/wiki/Unbounded_operator). It says: “An operator T is closed and densely defined if and only if T\*\* = T.”

**Sources:**

- [J. von Neumann, Über adjungierte Funktionaloperatoren, Annals of Mathematics 33 (1932), 294–310](https://doi.org/10.2307/1968331)

### Closed graphs give complete domains

**Remember:** The graph norm makes the domain a copy of the graph.

*True by definition.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** The graph norm of a linear operator T between normed spaces is ‖x‖ + ‖Tx‖ on its domain. It is the norm that x ↦ (x,Tx) carries over to the graph in X × Y with the sum norm, so the domain becomes a copy of the graph (our own).

**Problem.** For a linear operator between Banach spaces, the domain is complete in graph norm exactly when the operator has a closed graph.

**How the definition helps.** So the domain is complete exactly when the graph is complete (our own). A subspace of the complete space X × Y is complete exactly when it is closed (our own).

**Wikipedia:** [Unbounded operator](https://en.wikipedia.org/wiki/Unbounded_operator). It says: “An operator T is said to be closed if its graph Γ(T) is a closed set.”

**Paper or page:** [The spectral theorem for normal operators on a Clifford module](https://arxiv.org/abs/2112.05201v1). It says: “is a complete normed right module over ℝₙ.”

**Sources:** none listed. No primary source with a working link was found.

### Partial isometries give every bounded operator a polar decomposition

**Remember:** Preserve lengths perpendicular to the kernel.

*Rules out counterexamples.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)), 47A68. arXiv math.FA. Level 3: graduate.

**Definition.** A partial isometry preserves lengths on the orthogonal complement of its kernel, called its initial space. The absolute value \|A\| = √(A∗A) satisfies ‖\|A\|x‖ = ‖Ax‖, so a length-preserving map carries \|A\|x to Ax.

**Problem.** Every bounded operator A between complex Hilbert spaces factors as A = U\|A\|, with U a partial isometry. The factorization is unique when the initial space of U is the closure of the range of \|A\|.

**How the definition helps.** Since ‖\|A\|x‖ = ‖Ax‖, the map \|A\|x ↦ Ax is well defined and preserves lengths (our own). Extending it to the closure of the range of \|A\| and setting it to zero on the complement forces uniqueness (our own). For the unilateral shift \|A\| = I, so U is the shift itself, which is not onto, so U cannot always be unitary.

**Wikipedia:** [Polar decomposition](https://en.wikipedia.org/wiki/Polar_decomposition). It says: “The operator U must be weakened to a partial isometry, rather than unitary, because of the following issues.”

**Sources:** none listed. No primary source with a working link was found.

### The weak operator topology makes taking adjoints continuous, unlike the strong one

**Remember:** The adjoint only swaps the two vectors in each test.

*True by definition.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** The weak operator topology is the weakest topology on bounded operators that makes each test T ↦ ⟨Tx,y⟩ continuous, while the strong one makes each T ↦ Tx continuous. Since ⟨T∗x,y⟩ is the conjugate of ⟨Ty,x⟩, taking adjoints only permutes the weak tests.

**Problem.** On an infinite-dimensional Hilbert space, taking adjoints is continuous in the weak operator topology and discontinuous in the strong operator topology.

**How the definition helps.** Each weak test of T∗ is the conjugate of a weak test of T, so taking adjoints is continuous. For our own strong counterexample, let B be the backward shift on a copy of ℓ² inside the space and zero elsewhere. Then Bⁿ tends strongly to zero, but its adjoint preserves lengths on that copy.

**Wikipedia:** [Weak operator topology](https://en.wikipedia.org/wiki/Weak_operator_topology). It says: “The adjoint operation T → T\*, as an immediate consequence of its definition, is continuous in WOT.”

**Sources:** none listed. No primary source with a working link was found.

### Closability rules out energy at zero

**Remember:** A zero limit must carry zero energy.

*Rules out counterexamples.* MSC 47A07 (Forms (bilinear, sesquilinear, multilinear)). arXiv math.FA. Level 3: graduate.

**Definition.** A nonnegative quadratic form q on a subspace D of a Hilbert space is closed if D is complete in the norm √(‖x‖² + q(x)). It is closable if no energy sits at zero: whenever xₙ → 0 and q(xₙ − xₘ) → 0, also q(xₙ) → 0.

**Problem.** Let T be a densely defined linear operator between Hilbert spaces and put q(x)=‖Tx‖² on dom T. Then q has a closed extension exactly when the closure of the graph of T is single-valued.

**How the definition helps.** With q(x) = ‖Tx‖², the test says that if xₙ → 0 and Txₙ converges, its limit is 0, which is exactly a single-valued graph closure (our own). A closed extension forces the test by completeness, and the closure of T gives the closed extension x ↦ ‖T̄x‖² (our own). Midpoint evaluation on smooth L² functions fails both, by shrinking bumps of height one.

**Paper or page:** [A generalized Birman-Schwinger principle and applications to one-dimensional Schrödinger operators with distributional potentials](https://arxiv.org/abs/2507.02251v2). It says: “Then the form 𝔞ₜ is closed (resp., closable) in ℋ₁ if and only if T is closed (resp., closable).”

**Sources:** none listed. No primary source with a working link was found.

### Closed graph forms make adjoint products self-adjoint

**Remember:** Closed graph means closed energy form, hence a self-adjoint T∗T.

*True by definition.* MSC 47A07 (Forms (bilinear, sesquilinear, multilinear)). arXiv math.FA. Level 3: graduate.

**Definition.** For a closed, densely defined operator T between Hilbert spaces, the energy form is a(u,v) = ⟨Tu,Tv⟩ on the domain of T. Its form norm √(‖u‖² + ‖Tu‖²) is the graph norm, so the closed graph makes the form closed, with complete domain.

**Problem.** The product T\*T is nonnegative and self-adjoint, with its usual product domain.

**How the definition helps.** The representation theorem for closed nonnegative forms gives a nonnegative self-adjoint operator for this form. In our own argument, its domain is the set of u with v ↦ ⟨Tv,Tu⟩ bounded, that is Tu in the adjoint domain, and it acts as T∗T.

**Paper or page:** [A generalized Birman-Schwinger principle and applications to one-dimensional Schrödinger operators with distributional potentials](https://arxiv.org/abs/2507.02251v2). It says: “If T is closed, the unique nonnegative self-adjoint operator associated with 𝔞ₜ in ℋ₁ equals T\*T ≥ 0.”

**Sources:** none listed. No primary source with a working link was found.

### An operator that is not closed has the whole plane as spectrum

**Remember:** A closed graph stays closed when you shift and interchange its coordinates.

*Rules out counterexamples.* MSC 47A10 (Spectrum, resolvent), 47A05. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** A linear operator T on a complex Banach space X is closed if its graph is closed in X × X. Its spectrum is the set of λ ∈ ℂ for which T − λI has no bounded inverse defined on all of X. Such an inverse always has a closed graph.

**Problem.** If an operator T on a Banach space is not closed, then its spectrum is all of ℂ. If T is closed, λ is in the spectrum exactly when T − λ is not a bijection from its domain onto the space.

**How the definition helps.** If T − λI has such an inverse, its graph is closed, and swapping coordinates and shifting by λ shows that T is closed (our own short proof). So an operator that is not closed has every λ in its spectrum. For a closed operator, the closed graph theorem makes an inverse bounded as soon as it exists.

**Wikipedia:** [Spectrum (functional analysis)](https://en.wikipedia.org/wiki/Spectrum_%28functional_analysis%29), [Closed linear operator](https://en.wikipedia.org/wiki/Closed_linear_operator). It says: “If the operator T is not closed, then σ(T)=ℂ.”

**Sources:** none listed. No primary source with a working link was found.

### Compact resolvents give discrete spectra

**Remember:** One compact inverse gives A a compact operator's spectrum, turned inside out.

*Makes the theorem clean to state or prove.* MSC 47A10 (Spectrum, resolvent). arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** A closed operator A has compact resolvent if, for some z, A − zI has a bounded inverse on the whole space that is compact. A compact inverse sends bounded sets to sets with compact closure.

**Problem.** Let A be a closed operator with compact resolvent on a complex Banach space. Every spectral point is an isolated eigenvalue with a finite-dimensional space of generalized eigenvectors. The spectrum has no finite accumulation point.

**How the definition helps.** The map λ ↦ 1/(λ − z) sends the spectrum of A onto the nonzero spectrum of the compact inverse (our own). A compact operator has only eigenvalues of finite multiplicity away from 0, accumulating only at 0, so A has isolated eigenvalues accumulating only at infinity (our own).

**Wikipedia:** [Resolvent formalism](https://en.wikipedia.org/wiki/Resolvent_formalism). It says: “The spectrum σ(A) of such A is a discrete subset of ℂ.”

**Paper or page:** [Spectral properties of Schrödinger operator with translations and Neumann boundary conditions](https://arxiv.org/abs/2506.23645v1). It says: “its spectrum consists of a countably many eigenvalues with the only accumulation point at infinity”

**Sources:** none listed. No primary source with a working link was found.

### Defined by invertibility, the spectrum of an operator is never empty

**Remember:** The spectrum is where T − λI fails to be invertible, not only injective.

*Rules out counterexamples.* MSC 47A10 (Spectrum, resolvent), 47B01. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** The spectrum of a bounded operator T on a complex Banach space is the set of λ ∈ ℂ for which T − λI has no bounded inverse. Off the spectrum, the inverse (T − λI)⁻¹ exists and depends holomorphically on λ.

**Problem.** Every bounded operator on a nonzero complex Banach space has nonempty spectrum. This generalizes the fact that every complex square matrix has an eigenvalue.

**How the definition helps.** If the spectrum were empty, (T − λI)⁻¹ would be an entire function of λ that tends to zero at infinity by the Neumann series (our own). Liouville's theorem would make it zero, which is impossible for an inverse. Invertibility matters here: the right shift on ℓ² has no eigenvalues but is not invertible at zero (our own).

**Wikipedia:** [Spectrum (functional analysis)](https://en.wikipedia.org/wiki/Spectrum_%28functional_analysis%29). It says: “In fact every bounded linear operator on a complex Banach space must have a non-empty spectrum.”

**Sources:** none listed. No primary source with a working link was found.

### Graph norms test resolvent compactness

**Remember:** Compactness of the domain inclusion is compactness of the inverse in disguise.

*True by definition. Confidence: medium.* MSC 47A10 (Spectrum, resolvent). arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Give the domain of a closed operator A the graph norm ‖u‖ + ‖Au‖, which makes it a Banach space. At a resolvent point z, A − zI is then a bounded isomorphism from this domain onto the whole space, and its inverse is the resolvent.

**Problem.** Let A be closed with a bounded, everywhere-defined shifted inverse. A has compact resolvent exactly when the unit ball of its domain in the graph norm has compact closure in the ambient space.

**How the definition helps.** The resolvent is the domain inclusion composed with this isomorphism's inverse, and the inclusion is the resolvent composed with A − zI (our own). Composing with a bounded map keeps compactness, so one map is compact exactly when the other is (our own).

**Paper or page:** [Conditions for sectoriality and compactness of the resolvent for a non-self-adjoint Sturm--Liouville operator with singular distributional potential](https://arxiv.org/abs/2503.16172v1). It says: “‖L₀y‖ + ‖y‖ ≤ 1”

**Sources:** none listed. No primary source with a working link was found.

### Self-adjoint spectra admit approximate eigenvectors

**Remember:** For self-adjoint operators, approximate eigenvectors see the whole spectrum.

*Rules out counterexamples.* MSC 47A10 (Spectrum, resolvent). arXiv math.SP. Level 3: graduate.

**Definition.** A scalar λ is an approximate eigenvalue of T if some unit vectors x in the domain make (T − λI)x as small as we like. Otherwise T − λI is bounded below, so for closed T it is one-to-one with closed range.

**Problem.** Every spectral point of a self-adjoint operator is an approximate eigenvalue.

**How the definition helps.** For self-adjoint T the spectrum is real, and at real λ the orthogonal complement of the range of T − λI is its kernel, which is zero (our own). So a bounded-below T − λI is onto and has a bounded inverse, and λ is not in the spectrum. The right shift on ℓ² is bounded below at zero but not onto.

**Paper or page:** [Element of Spectrum of Densely-Defined Linear Operator not in Residual Spectrum is Approximate Eigenvalue/Corollary](https://proofwiki.org/wiki/Element_of_Spectrum_of_Densely-Defined_Linear_Operator_not_in_Residual_Spectrum_is_Approximate_Eigenvalue/Corollary). It says: “Then λ is an approximate eigenvalue of (D(T), T).”

**Sources:** none listed. No primary source with a working link was found.

### Singular sequences miss isolated finite eigenspaces

**Remember:** A singular sequence must escape every fixed finite-dimensional space.

*Rules out counterexamples.* MSC 47A10 (Spectrum, resolvent). arXiv math.SP. Level 3: graduate.

**Definition.** A singular sequence for λ is a sequence of unit vectors xₙ in the domain of T with (T − λI)xₙ → 0 in norm and xₙ → 0 weakly. Weak convergence to zero makes the sequence escape every fixed finite-dimensional subspace, so it cannot just repeat an eigenvector.

**Problem.** For a self-adjoint operator, the essential spectrum excludes isolated eigenvalues with finite-dimensional eigenspaces. Weyl’s criterion says that λ belongs to this spectrum exactly when λ has a singular sequence.

**How the definition helps.** At an isolated eigenvalue of finite multiplicity, weak convergence makes the eigenspace component of xₙ tend to zero in norm (our own). On the rest, the spectral gap bounds the norm by a constant times the residual, which tends to zero, contradicting unit norm (our own). Weyl's criterion supplies the converse.

**Wikipedia:** [Essential spectrum](https://en.wikipedia.org/wiki/Essential_spectrum). It says: “A number λ is in σₑₛₛ(T) if and only if there exists a sequence of unit vectors”

**Sources:** none listed. No primary source with a working link was found.

### The essential spectrum is defined to survive compact perturbations

**Remember:** What no compact perturbation can remove is, by definition, essential.

*True by definition.* MSC 47A10 (Spectrum, resolvent), 47A55. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** The essential spectrum of T is the intersection of the spectra of T + B over all compact operators B, the part of the spectrum that no compact perturbation removes.

**Problem.** Adding a compact self-adjoint operator to a self-adjoint operator does not change its essential spectrum (Weyl's theorem).

**How the definition helps.** With this definition the theorem holds at once, because T + K + B runs over the same operators as T + B. The work moves to showing that, for self-adjoint T, this set is the spectrum minus the isolated eigenvalues of finite multiplicity (our own).

**Wikipedia:** [Essential spectrum](https://en.wikipedia.org/wiki/Essential_spectrum). It says: “This explains why it is called the essential spectrum: Weyl (1910) originally defined the essential spectrum of a certain differential operator to be the spectrum independent of boundary conditions.”

**Sources:**

- [H. Weyl, Über gewöhnliche Differentialgleichungen mit Singularitäten und die zugehörigen Entwicklungen willkürlicher Funktionen, Mathematische Annalen 68 (1910), 220–269](https://doi.org/10.1007/BF01474161)

### Two-sided power bounds force scalars

**Remember:** One bound controls every power, forward and backward.

*Rules out counterexamples.* MSC 47A10 (Spectrum, resolvent). arXiv math.SP. Level 3: graduate.

**Definition.** An invertible bounded operator on a complex Banach space is doubly power bounded if one constant bounds ‖Tⁿ‖ for all integers n, positive and negative.

**Problem.** An invertible bounded operator with bounded powers in both directions and singleton spectrum must be a scalar operator.

**How the definition helps.** Gelfand's theorem says that a doubly power bounded operator with spectrum {λ} equals λI. One direction is not enough: for the Volterra operator V on L²(0,1), exp(−V) is a contraction with spectrum {1} (our own). Its inverse powers exp(nV) send the constant 1 to functions at least 1 + nx, so they are unbounded (our own).

**Paper or page:** [Spectral decomposition of power-bounded operators: The finite spectrum case](https://arxiv.org/abs/2501.02769v1). It says: “Suppose further that the spectrum σ(a) = {λ} is a singleton. Then a = λe.”

**Sources:** none listed. No primary source with a working link was found.

### Averaging over a finite group is orthogonal projection onto invariant functions

**Remember:** Average over the whole group to keep exactly the invariant part.

*True by definition.* MSC 47A15 (Invariant subspaces of linear operators), 60J05, 20C05. arXiv math.PR, math.FA. Level 3: graduate.

**Definition.** For a finite group G acting measurably and preserving a probability measure π, the averaging operator is Qf(x) = ∑<sub>g∈G</sub> f(gx)/\|G\|, the mean of f over the orbit of x. The mean is invariant, f(gx) = f(x) almost everywhere for each g, and invariant functions are left unchanged.

**Problem.** In L²(π), the space of square-integrable functions, Q is the orthogonal projection onto the invariant functions. As a Markov kernel, Q is also reversible with respect to π.

**How the definition helps.** So Q is a projection onto the invariant functions, since replacing x by hx only permutes the summands (our own). Invariance of π and reindexing by g ↦ g⁻¹ give ⟨Qf,h⟩ = ⟨f,Qh⟩, so the projection is orthogonal (our own). Testing on indicator functions turns this symmetry into detailed balance, which is reversibility.

**Paper or page:** [Group-averaged Markov chains: mixing improvement](https://arxiv.org/abs/2509.02996v2). It says: “Q is the projection operator onto V”

**Sources:**

- [Michael C. H. Choi, Youjia Wang, Group-averaged Markov chains: mixing improvement, arXiv:2509.02996 (2025)](https://arxiv.org/abs/2509.02996v2)

### Unitary dilations bound operator polynomials

**Remember:** Lift to a unitary, bound there, then compress.

*True by definition.* MSC 47A20 (Dilations, extensions, compressions of linear operators). arXiv math.FA. Level 3: graduate.

**Definition.** A unitary power dilation of T is a unitary U on a larger Hilbert space with Tⁿ = PUⁿ on the original space for all n ≥ 0. Here P is the orthogonal projection back onto the original space.

**Problem.** Let T have operator norm at most one. For every complex polynomial p, the norm of p(T) is at most the maximum of \|p\| on the closed unit disk.

**How the definition helps.** Applying the dilation to each term gives p(T) = P p(U) on the original space, and a projection cannot increase the norm (our own). The spectral theorem for U bounds ‖p(U)‖ by the maximum of \|p\| on the unit circle, which is at most that on the disk. Sz.-Nagy's theorem supplies the dilation for every contraction.

**Wikipedia:** [Von Neumann's inequality](https://en.wikipedia.org/wiki/Von_Neumann%27s_inequality). It says: “The inequality can be proved by considering the unitary dilation of T, for which the inequality is obvious.”

**Sources:**

- [Béla Sz.-Nagy, Hari Bercovici, Ciprian Foias, and László Kérchy, Contractions and Their Dilations (2010).](https://doi.org/10.1007/978-1-4419-6094-8_1)

### Adjoints preserve the Fredholm property

**Remember:** Take adjoints of both inverse identities and keep the compact errors.

*True by definition.* MSC 47A53 ((Semi-) Fredholm operators; index theories). arXiv math.FA. Level 3: graduate.

**Definition.** A bounded operator T on a Hilbert space is Fredholm if it is invertible up to compact errors: some bounded S makes ST − I and TS − I compact. By Atkinson's theorem this agrees with the usual definition by closed range and finite-dimensional kernel and cokernel (our own).

**Problem.** The adjoint of a bounded operator on a Hilbert space is Fredholm exactly when the operator is Fredholm.

**How the definition helps.** Taking adjoints gives T∗S∗ − I and S∗T∗ − I, which are compact because adjoints of compact operators are compact (our own). So T∗ is Fredholm, and applying this to T∗ gives the converse (our own).

**Paper or page:** [Perturbations of APS Boundary Conditions for Lorentzian Dirac Operators](https://arxiv.org/abs/2408.16696v3). It says: “T\* is Fredholm if and only if T is Fredholm.”

**Sources:** none listed. No primary source with a working link was found.

### Closed range matters for Fredholmness

**Remember:** Closed range is exactly the orthogonal complement of the adjoint kernel.

*Rules out counterexamples.* MSC 47A53 ((Semi-) Fredholm operators; index theories). arXiv math.FA. Level 3: graduate.

**Definition.** A bounded operator T on a Hilbert space is Fredholm when its range is closed and the kernels of T and T\* are finite-dimensional. Closed range makes the range exactly the orthogonal complement of the kernel of T\* (our own).

**Problem.** A bounded Fredholm operator has finite-dimensional quotient by its range. The dimension of this quotient equals the dimension of the kernel of the adjoint.

**How the definition helps.** The quotient by a closed range is isomorphic to its orthogonal complement, which is the kernel of T\* (our own). Without closed range this fails: on ℓ² the diagonal operator with entries 1/n has both kernels zero, but its dense range misses (1/n).

**Paper or page:** [Perturbations of APS Boundary Conditions for Lorentzian Dirac Operators](https://arxiv.org/abs/2408.16696v3). It says: “Ker(T) and Ker(T\*) are finite dimensional and T has closed range”

**Sources:** none listed. No primary source with a working link was found.

### Fredholm as invertible modulo compacts makes compact perturbations harmless

**Remember:** Fredholm means invertible once compact operators count as zero.

*True by definition.* MSC 47A53 ((Semi-) Fredholm operators; index theories), 47L20. arXiv math.FA. Level 3: graduate.

**Definition.** A bounded operator on a Hilbert space is Fredholm exactly when it is invertible after we ignore compact operators, that is, when its image in the Calkin algebra (bounded modulo compact operators) is invertible. This is Atkinson’s theorem.

**Problem.** If T is Fredholm and K is compact, then T + K is Fredholm with the same index. The index is the dimension of the kernel minus the dimension of the cokernel.

**How the definition helps.** Adding a compact K does not change the image in the Calkin algebra, so T + K is Fredholm. The same holds for every T + sK with 0 ≤ s ≤ 1, and the index is locally constant, so it is equal at both ends (our own).

**Wikipedia:** [Atkinson's theorem](https://en.wikipedia.org/wiki/Atkinson%27s_theorem), [Calkin algebra](https://en.wikipedia.org/wiki/Calkin_algebra), [Fredholm operator](https://en.wikipedia.org/wiki/Fredholm_operator). It says: “In other words, an operator T ∈ L(H) is Fredholm, in the classical sense, if and only if its projection in the Calkin algebra is invertible.”

**Sources:**

- [J. W. Calkin, Two-sided ideals and congruences in the ring of bounded operators in Hilbert space, Annals of Mathematics 42 (1941), 839–873](https://doi.org/10.2307/1968771)
- [F. V. Atkinson, The normal solvability of linear equations in normed spaces, Matematicheskii Sbornik 28(70) (1951), 3–14](https://zbmath.org/?q=an:0042.12001)

### Parametrices make Fredholm operators compose

**Remember:** Fredholm means invertible up to a compact error.

*True by definition.* MSC 47A53 ((Semi-) Fredholm operators; index theories). arXiv math.FA. Level 3: graduate.

**Definition.** A parametrix for a bounded linear map F is an inverse up to compact errors: a bounded map P with PF − I and FP − I compact. By Atkinson’s theorem, F is Fredholm exactly when it has a parametrix.

**Problem.** The composite of two Fredholm maps between Banach spaces is Fredholm.

**How the definition helps.** If P₁ and P₂ are parametrices of F₁ and F₂, then P₁P₂ is a parametrix of F₂ ∘ F₁ (our own). Multiplying out leaves only compact errors, because compact operators stay compact when composed with bounded ones.

**nLab:** [Fredholm operator](https://ncatlab.org/nlab/show/Fredholm+operator). It says: “the composite F₂ ∘ F₁ : B₁ ⟶ B₃ is Fredholm”

**Sources:** none listed. No primary source with a working link was found.

### The Fredholm index gives the Fredholm alternative

**Remember:** Fredholm means invertible up to finite-dimensional errors; the index counts those errors.

*Makes the theorem clean to state or prove.* MSC 47A53 ((Semi-) Fredholm operators; index theories), 47B07. arXiv math.FA. Level 3: graduate.

**Definition.** A bounded operator between Banach spaces is Fredholm if its range is closed and its kernel and cokernel (the target modulo the range) are finite-dimensional. Its index is the kernel dimension minus the cokernel dimension.

**Problem.** Small or compact changes to a Fredholm operator keep it Fredholm with the same index. In particular, for K compact and λ ≠ 0, λI − K is injective exactly when it is surjective.

**How the definition helps.** Fredholm operators form an open set, the index is locally constant on it, and compact perturbations keep an operator Fredholm. So the index of T + sK is constant for 0 ≤ s ≤ 1, and λI − K has the index zero of λI (our own). Index zero makes the kernel and cokernel dimensions equal, so one is zero exactly when the other is.

**Wikipedia:** [Fredholm operator](https://en.wikipedia.org/wiki/Fredholm_operator), [Fredholm alternative](https://en.wikipedia.org/wiki/Fredholm_alternative). It says: “If a Fredholm operator is modified slightly, it stays Fredholm and its index remains the same.”

**Sources:**

- [Fredholm, E. I. (1903). Sur une classe d'équations fonctionnelles. Acta Mathematica 27, 365–390.](https://doi.org/10.1007/BF02421317)

### Norm resolvents block spectral pollution

**Remember:** Uniform control of shifted inverses prevents false spectral limits.

*Rules out counterexamples.* MSC 47A55 (Perturbation theory of linear operators). arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Self-adjoint operators Aₙ converge to A in norm resolvent sense when (Aₙ − iI)⁻¹ converges to (A − iI)⁻¹ in operator norm. Then a norm limit of non-invertible operators built from these resolvents stays non-invertible (our own). Strong resolvent convergence asks only for convergence on each fixed vector.

**Problem.** If self-adjoint operators converge in norm resolvent, a finite limit of their spectral points belongs to the limit spectrum. Strong resolvent convergence does not suffice.

**How the definition helps.** λ lies in the spectrum of A exactly when I − (λ − i)(A − iI)⁻¹ is not invertible, and non-invertible operators form a norm-closed set (our own). So spectral points λₙ of Aₙ with λₙ → λ give λ in the spectrum of A. The projections onto the nth coordinate of ℓ² all have eigenvalue one but converge in strong resolvent sense to zero, whose spectrum is {0} (our own).

**Paper or page:** [Diverging eigenvalues in domain truncations of Schrödinger operators with complex potentials](https://arxiv.org/abs/2107.10557v1). It says: “converge to T∞ in the norm resolvent sense (hence there is no spectral pollution)”

**Sources:** none listed. No primary source with a working link was found.

### Defining the continuous functional calculus by uniqueness makes composition automatic

**Remember:** A calculus is fixed once you know where the coordinate goes.

*True by definition.* MSC 47A60 (Functional calculus for linear operators), 46L05. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** For a normal element a of a unital C\*-algebra A, the continuous functional calculus is the only unital \*-homomorphism C(σ(a)) → A that sends the coordinate function to a. It is unique because such a map is fixed on polynomials in the coordinate and its conjugate, which are dense.

**Problem.** Let f be continuous on σ(a) and let g be continuous on σ(f(a)). Then (g ∘ f)(a) = g(f(a)).

**How the definition helps.** The map g ↦ (g ∘ f)(a) is a unital \*-homomorphism on C(σ(f(a))) sending the coordinate to f(a), so uniqueness makes it the calculus of f(a) (our own). It is defined because spectral mapping gives σ(f(a)) = f(σ(a)).

**nLab:** [functional calculus](https://ncatlab.org/nlab/show/functional+calculus). It says: “To see uniqueness, notice that any other morphism with these properties coincides with φ on all polynomials in ι and ῑ.”

**Sources:** none listed. No primary source with a working link was found.

### Spectral projections pull back

**Remember:** In multiplier form, a function of A composes with the multiplier.

*True by definition.* MSC 47A60 (Functional calculus for linear operators). arXiv math.SP. Level 3: graduate.

**Definition.** By the spectral theorem, a self-adjoint operator A acts as multiplication by a real function a on some L² space. For a real Borel function f, f(A) is multiplication by f ∘ a, and the spectral projection of A for a Borel set B is multiplication by the indicator of B composed with a.

**Problem.** The spectral projection of f(A) for a Borel set B equals the spectral projection of A for the inverse image of B under f.

**How the definition helps.** The spectral projection of f(A) for B is multiplication by 𝟙<sub>B</sub> ∘ f ∘ a. Since 𝟙<sub>B</sub> ∘ f is the indicator of the inverse image of B under f, this is the spectral projection of A for that inverse image (our own).

**Wikipedia:** [Borel functional calculus](https://en.wikipedia.org/wiki/Borel_functional_calculus). It says: “this is multiplication by the composition of h with f.”

**Sources:** none listed. No primary source with a working link was found.

### Square roots become ordinary functions

**Remember:** Apply the scalar square root on the spectrum.

*Rules out counterexamples.* MSC 47A60 (Functional calculus for linear operators). arXiv math.FA. Level 3: graduate.

**Definition.** A bounded self-adjoint operator T is positive if ⟨Tx, x⟩ ≥ 0 for every x, which puts its spectrum in \[0, ∞). Its positive square root √T is the scalar function √t applied to T on its spectrum by the continuous functional calculus.

**Problem.** Every bounded positive operator on a Hilbert space has a unique positive square root.

**How the definition helps.** The functional calculus preserves products and positivity, so √T is positive and squares to T (our own). If B is any positive square root, applying √t to B² = T gives back B, so B = √T (our own). Asking for a positive root removes other roots such as −I for the identity (our own).

**Paper or page:** [The spectral theorem for normal operators on a Clifford module](https://arxiv.org/abs/2112.05201v1). It says: “Then there exists a unique positive operator A ∈ ℬ(ℋₙ) such that A² = T.”

**Sources:** none listed. No primary source with a working link was found.

### The half-plane test orders fractional powers

**Remember:** Operator monotone means its extension keeps the upper half-plane up.

*True by definition.* MSC 47A63 (Linear operator inequalities). arXiv math.FA. Level 3: graduate.

**Definition.** A function f on an interval is operator monotone if B − A positive semidefinite implies the same for f(B) − f(A). This must hold for Hermitian matrices of every size with eigenvalues in the interval. By Löwner’s theorem, it holds exactly when f extends holomorphically through the interval into the upper half-plane with nonnegative imaginary part.

**Problem.** Suppose A and B are positive definite matrices with A ≤ B. Raising both matrices to any real power α with 0 &lt; α ≤ 1 preserves their order.

**How the definition helps.** On (0, ∞), the principal branch extends the power tᵅ to the upper half-plane and multiplies arguments by α (our own). For 0 &lt; α ≤ 1, arguments in (0, π) stay in (0, π), so the imaginary part stays nonnegative (our own). Löwner’s theorem then makes the power tᵅ operator monotone.

**Wikipedia:** [Operator monotone function](https://en.wikipedia.org/wiki/Operator_monotone_function). It says: “states that a function f is operator monotone if and only if it allows an analytic continuation to the upper half-plane with non-negative imaginary part.”

**Sources:**

- [Karl Löwner, Über monotone Matrixfunktionen (1934).](https://doi.org/10.1007/bf01170633)

### Rigged Hilbert spaces hold Dirac's eigenvectors as generalized vectors

**Remember:** Fewer test vectors, more functionals: the missing eigenvectors live in the dual.

*Makes the theorem clean to state or prove.* MSC 47A70 ((Generalized) eigenfunction expansions of linear operators; rigged Hilbert spaces), 46A11. arXiv math.FA, math-ph. Level 3: graduate.

**Definition.** A rigged Hilbert space is a chain Φ ⊂ H ⊂ Φ′ of test vectors, ordinary vectors and generalized vectors. Φ is a locally convex space densely and continuously embedded in H, and Φ′ is its continuous antilinear dual. A generalized eigenvector of a symmetric operator A acting continuously on Φ is a nonzero F in Φ′ with F(Aφ) = λF(φ) for every φ in Φ.

**Problem.** In the rigged space of Schwartz functions in L²(ℝ), position and momentum have complete systems of generalized eigenvectors, point masses and plane waves, with delta normalization and a resolution of the identity. Neither operator has an eigenvector in L²(ℝ).

**How the definition helps.** The dual of Schwartz space contains point evaluations and integration against plane waves, which satisfy the eigenvalue equations for position and momentum (our own). Point evaluation and Fourier inversion give the normalization and the resolution of the identity, as the nuclear spectral theorem does in general. No L² eigenvector exists, since it would be supported on one point or have constant modulus (our own).

**nLab:** [rigged Hilbert space](https://ncatlab.org/nlab/show/rigged+Hilbert+space). It says: “by enlarging the given Hilbert space ℋ to a space of generalized vectors in which the missing eigenvectors do exist”

**Sources:**

- [I. M. Gel'fand, N. Ya. Vilenkin, Generalized Functions, Vol. 4: Applications of Harmonic Analysis (1961; AMS Chelsea reprint 2016)](https://doi.org/10.1090/chel/380)
- [John E. Roberts, Rigged Hilbert spaces in quantum mechanics, Communications in Mathematical Physics 3 (1966) 98–119](https://doi.org/10.1007/BF01645448)

### Defining singular values by low-rank approximation makes them shrink under multiplication

**Remember:** The nth singular value: distance to operators of rank below n.

*True by definition.* MSC 47B06 (Riesz operators; eigenvalue distributions; approximation numbers, s-numbers, Kolmogorov numbers, entropy numbers, etc. of operators), 47B10. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** For a compact operator T between Hilbert spaces, the nth singular value sₙ(T) is the operator-norm distance from T to the operators of rank less than n.

**Problem.** Let T be compact and let A and B be bounded, with the product ATB defined. Then sₙ(ATB) ≤ ‖A‖ sₙ(T) ‖B‖ for every n.

**How the definition helps.** If L has rank below n, so does ALB, and ‖ATB − ALB‖ ≤ ‖A‖ ‖T − L‖ ‖B‖; taking the infimum over L gives the bound (our own). This distance equals the nth eigenvalue of \|T\| = √(T\*T), counted with multiplicity, by truncating the singular value expansion.

**Wikipedia:** [Singular value](https://en.wikipedia.org/wiki/Singular_value). It says: “σₙ(T) = inf { ‖T−L‖ : L is an operator of finite rank &lt; n }.”

**Sources:** none listed. No primary source with a working link was found.

### Weak limits reveal compact operators

**Remember:** Compact operators turn weak convergence into norm convergence.

*Rules out counterexamples.* MSC 47B07 (Linear operators defined by compactness properties). arXiv math.FA. Level 3: graduate.

**Definition.** A bounded operator on a Hilbert space is compact if the image of every bounded set has compact closure. It is completely continuous if it turns weakly convergent sequences into norm-convergent ones.

**Problem.** A bounded operator on a Hilbert space is compact exactly when it sends weakly convergent sequences to norm-convergent ones. So the identity on an infinite-dimensional Hilbert space is not compact.

**How the definition helps.** Every bounded Hilbert space sequence has a weakly convergent subsequence, so a completely continuous operator maps bounded sets to sets with compact closure. Conversely, if T is compact and xₙ → x weakly, every subsequence of (Txₙ) has a norm-convergent subsequence whose limit must be Tx, so Txₙ → Tx (our own). The identity is not compact, because an orthonormal sequence tends weakly to zero but keeps norm one.

**nLab:** [compact operator](https://ncatlab.org/nlab/show/compact+operator). It says: “For Hilbert spaces and more generally for reflexive Banach spaces, the two notions are equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Adjoints preserve Hilbert–Schmidt norms

**Remember:** Taking the adjoint swaps rows and columns and preserves absolute values.

*True by definition.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, p-summing, in the Schatten-von Neumann classes, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** A bounded operator between separable Hilbert spaces is Hilbert–Schmidt if the squared absolute values of its matrix entries in orthonormal bases have a finite sum. The square root of this sum is the Hilbert–Schmidt norm.

**Problem.** The adjoint of a Hilbert–Schmidt operator is Hilbert–Schmidt with the same norm.

**How the definition helps.** The matrix of the adjoint is the conjugate transpose, which has the same entries up to position and conjugation, so the sum of squares does not change (our own). Parseval’s identity makes the sum independent of the bases (our own).

**Wikipedia:** [Hilbert–Schmidt operator](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Schmidt_operator). It says: “The Hilbert–Schmidt norm does not depend on the choice of orthonormal basis.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Fredholm determinant by eigenvalues makes its zeros detect non-invertibility

**Remember:** Multiply 1 + λ over eigenvalues; zero exactly when some factor is.

*True by definition. Confidence: medium.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, p-summing, in the Schatten-von Neumann classes, etc.)), 45B05. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** A trace-class operator T on a Hilbert space is one whose singular values have a finite sum. Its determinant det(I + T) is the product of 1 + λ over the nonzero eigenvalues λ of T, repeated by algebraic multiplicity.

**Problem.** For a trace-class operator T, det(I + T) = 0 exactly when I + T has no bounded inverse.

**How the definition helps.** The eigenvalues are absolutely summable by Weyl’s inequality ∑\|λ\| ≤ ‖T‖₁, so the product is zero only when some factor 1 + λ is zero (our own). Since T is compact, I + T fails to be invertible exactly when −1 is an eigenvalue.

**nLab:** [Fredholm determinant](https://ncatlab.org/nlab/show/Fredholm+determinant). It says: “and d is an entire function of λ such that d(λ) ≠ 0 iff the integral equation has a unique solution.”

**Sources:**

- [Ivar Fredholm, Sur une classe d’équations fonctionnelles (1903)](https://doi.org/10.1007/BF02421317)
- [Folkmar Bornemann, On the numerical evaluation of Fredholm determinants (2010)](https://doi.org/10.1090/S0025-5718-09-02280-7)

### Defining trace class by completing finite-rank operators makes the trace cyclic

**Remember:** Trace class: limits of finite-rank operators in the trace norm.

*True by definition. Confidence: medium.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, p-summing, in the Schatten-von Neumann classes, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** Define the trace-class operators on a Hilbert space as the completion of the finite-rank operators in the trace norm, the sum of the singular values. Define the trace by extending the finite-rank trace continuously.

**Problem.** For a trace-class operator T and a bounded operator B on a Hilbert space, tr(TB) = tr(BT).

**How the definition helps.** Cyclicity holds for finite-rank operators by linear algebra, and both tr(TB) and tr(BT) are continuous in T for the trace norm, since ‖TB‖₁ and ‖BT‖₁ are at most ‖B‖ ‖T‖₁ (our own). Density of the finite-rank operators extends tr(TB) = tr(BT) to all trace-class T.

**Wikipedia:** [Trace class](https://en.wikipedia.org/wiki/Trace_class). It says: “the space of all finite-rank operators is a dense subspace”

**Sources:** none listed. No primary source with a working link was found.

### Exterior powers give entire determinants

**Remember:** Coefficient n is the trace of K on the nth exterior power.

*True by definition.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, p-summing, in the Schatten-von Neumann classes, etc.)), 45B05. arXiv math.FA. Level 3: graduate.

**Definition.** For a trace-class operator K on a separable Hilbert space, det(I + zK) is the power series ∑ zⁿ tr(ΛⁿK) with constant term one. Here ΛⁿK is K acting on each factor of the nth exterior power.

**Problem.** The Fredholm determinant of I + zK is complex differentiable on the whole plane.

**How the definition helps.** Each coefficient is at most ‖K‖₁ⁿ/(n!) in absolute value, so the series converges on all of ℂ like exp(\|z\| ‖K‖₁) (our own). The bound holds because \|tr(ΛⁿK)\| is at most the sum of products of n distinct singular values. Each such product occurs at least n factorial times in the expansion of ‖K‖₁ⁿ.

**nLab:** [Fredholm determinant](https://ncatlab.org/nlab/show/Fredholm+determinant). It says: “This is often considered as an analytic function of a perturbation parameter λ.”

**Paper or page:** [Numerical Fredholm determinants for matrix-valued kernels on the real line](https://arxiv.org/abs/2507.22875v1). It says: “converges uniformly and absolutely to an entire function of z”

**Sources:** none listed. No primary source with a working link was found.

### Fredholm determinants isolate noninvertible points

**Remember:** A nonzero analytic determinant can vanish only at isolated points.

*True by definition.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, p-summing, in the Schatten-von Neumann classes, etc.)), 47A53. arXiv math.FA. Level 3: graduate.

**Definition.** A trace-class operator A is one whose singular values have a finite sum. Its Fredholm determinant det(I − A) is the product of 1 − λ over the nonzero eigenvalues λ of A, with algebraic multiplicity. It is zero exactly when I − A is not invertible (our own).

**Problem.** Let A(z) be a trace-class operator on a separable complex Hilbert space, depending holomorphically in trace norm on one complex variable. Suppose its parameter domain is open and connected. If I − A(z) is invertible at one point, its points of noninvertibility are isolated.

**How the definition helps.** The determinant turns invertibility of I − A(z) into nonvanishing of one scalar function, which is holomorphic in z (our own). It is nonzero at one point, so the identity theorem makes its zeros isolated on the connected domain. The analytic Fredholm theorem gives the same conclusion for compact families, where no determinant need exist.

**Paper or page:** [A generalized Birman-Schwinger principle and applications to one-dimensional Schrödinger operators with distributional potentials](https://arxiv.org/abs/2507.02251v2). It says: “There is a discrete set 𝒟 ⊂ Ω such that \[Iℋ − A(·)\]⁻¹ exists and is analytic on Ω ∖ 𝒟 with poles at the discrete points of 𝒟.”

**Sources:** none listed. No primary source with a working link was found.

### Trace norm preserves determinant multiplication

**Remember:** The determinant is the trace-norm limit of finite-dimensional determinants.

*True by definition.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, p-summing, in the Schatten-von Neumann classes, etc.)), 45B05. arXiv math.FA. Level 3: graduate.

**Definition.** For a finite-rank operator A on a Hilbert space, det(I + A) is the ordinary determinant on any finite-dimensional subspace containing the range of A. For a compact A of finite trace norm (summable singular values), det(I + A) is the extension of this function that is continuous in trace norm.

**Problem.** If A and B have finite trace norm, the Fredholm determinant of (I + A)(I + B) is the product of their determinants.

**How the definition helps.** For finite-rank A and B, (I + A)(I + B) = I + A + B + AB acts on one finite-dimensional space, where determinants multiply (our own). Products of finite-rank approximations converge in trace norm, so continuity carries the identity to the limit (our own).

**Wikipedia:** [Fredholm determinant](https://en.wikipedia.org/wiki/Fredholm_determinant). It says: “The function det defines a homomorphism of type G → ℂ×”

**Sources:**

- [Barry Simon, Notes on infinite determinants of Hilbert space operators (1977)](https://doi.org/10.1016/0001-8708(77)90057-3)

### Trace-class operators have a trace that does not depend on the basis

**Remember:** If \|T\| has finite trace, the trace of T converges absolutely.

*True by definition. Confidence: medium.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, p-summing, in the Schatten-von Neumann classes, etc.)), 47B06. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** A bounded operator T on a separable Hilbert space is trace class if, in some orthonormal basis (eₖ), the diagonal entries ⟨\|T\|eₖ, eₖ⟩ of its absolute value \|T\| = √(T\*T) have a finite sum.

**Problem.** For a trace-class operator T, the sum Σₖ ⟨Teₖ, eₖ⟩ converges absolutely to a number that does not depend on the orthonormal basis (eₖ).

**How the definition helps.** With S = √\|T\| and U from the polar decomposition, T = (US)S, and the defining sum says S is Hilbert–Schmidt (our own). Then ⟨Teₖ, eₖ⟩ = ⟨Seₖ, SU\*eₖ⟩, so Cauchy–Schwarz gives absolute convergence. The sum is the Hilbert–Schmidt inner product of S and SU\*, which Parseval’s identity makes independent of the basis.

**Wikipedia:** [Trace class](https://en.wikipedia.org/wiki/Trace_class). It says: “a trace-class operator is a linear operator for which a trace may be defined, such that the trace is a finite number independent of the choice of basis used to compute the trace.”

**Sources:** none listed. No primary source with a working link was found.

### Two Hilbert–Schmidt factors give trace class

**Remember:** Two square sums give one absolute sum.

*Rules out counterexamples.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, p-summing, in the Schatten-von Neumann classes, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** A Hilbert–Schmidt operator is a compact operator on a Hilbert space whose singular values (the eigenvalues of √(A\*A)) have a finite sum of squares. Trace class asks for a finite sum, and compactness only for singular values tending to zero.

**Problem.** The product of two Hilbert–Schmidt operators is trace class, meaning its singular values are summable.

**How the definition helps.** Expanding AB through an orthonormal basis between the factors writes it as a sum of rank-one operators with trace norms ‖Ae‖ ‖B\*e‖ (our own). Cauchy–Schwarz bounds their sum by the product of the two Hilbert–Schmidt norms. Compactness is not enough: the diagonal operator with entries 1/√n has a square with trace norm ∑ 1/n = ∞.

**Wikipedia:** [Hilbert–Schmidt operator](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Schmidt_operator). It says: “The product of two Hilbert–Schmidt operators has finite trace-class norm”

**Sources:** none listed. No primary source with a working link was found.

### Projection measures multiply spectral integrals

**Remember:** Multiplying indicators becomes multiplying projections.

*True by definition.* MSC 47B15 (Hermitian and normal operators (spectral measures, functional calculus, etc.)), 28B05. arXiv math.FA. Level 3: graduate.

**Definition.** A projection-valued measure P assigns an orthogonal projection on a Hilbert space to each measurable set, with P of the whole space equal to I. It is countably additive on each vector and turns intersections into products: P(A ∩ B) = P(A)P(B). Its spectral integral replaces each indicator in a simple function by its projection, and extends to bounded measurable functions by uniform limits.

**Problem.** For a projection-valued measure on a Hilbert space, the spectral integrals of bounded measurable functions multiply to the spectral integral of their product.

**How the definition helps.** The product of the indicators of A and B is the indicator of A ∩ B, and P(A ∩ B) = P(A)P(B), so the integral is multiplicative on simple functions (our own). The integral of a simple function has norm at most its supremum, so uniform approximation carries the product rule to bounded measurable functions (our own).

**nLab:** [projection measure](https://ncatlab.org/nlab/show/projection+measure). It says: “P(A₁ ∩ A₂) = P(A₁) P(A₂) for all A₁,A₂ ∈ B where the product is the composition of the operators”

**Sources:** none listed. No primary source with a working link was found.

### Spectral measures express resolvent entries

**Remember:** A spectral measure turns the operator reciprocal into an ordinary reciprocal.

*True by definition. Confidence: medium.* MSC 47B15 (Hermitian and normal operators (spectral measures, functional calculus, etc.)), 44A15. arXiv math.FA. Level 3: graduate.

**Definition.** Let A be a bounded self-adjoint operator on a complex Hilbert space, with spectral projection E(B) for each Borel set B. The spectral measure of a unit vector v is μ(B) = ‖E(B)v‖². It satisfies ⟨f(A)v, v⟩ = ∫ f dμ for every bounded Borel function f (our own).

**Problem.** Use an inner product linear in its first argument. For nonreal z, ⟨(A−zI)⁻¹v,v⟩ equals the integral of 1/(λ−z) against μ.

**How the definition helps.** Apply ⟨f(A)v, v⟩ = ∫ f dμ to the bounded continuous function f(λ) = 1/(λ − z) on the real spectrum, for which f(A) = (A − zI)⁻¹ (our own). For a matrix, μ puts the squared length of the projection of v onto each eigenspace at its eigenvalue (our own).

**Paper or page:** [Spectral analysis of Jacobi operators and asymptotic behavior of orthogonal polynomials](https://arxiv.org/abs/2202.02087v1). It says: “For all z ∈ ℂ with Im z ≠ 0, we have”

**Sources:**

- [Spectral analysis of Jacobi operators and asymptotic behavior of orthogonal polynomials](https://arxiv.org/abs/2202.02087v1)

### The functional calculus definition makes Riesz projections of normal operators orthogonal

**Remember:** The indicator χ squares to itself and equals its own conjugate.

*True by definition.* MSC 47B15 (Hermitian and normal operators (spectral measures, functional calculus, etc.)), 47A60. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Let A be a bounded normal operator, one that commutes with its adjoint, and let σ₀ be a part of its spectrum that is open and closed in the spectrum. Define the projection χ(A) by the continuous functional calculus, where χ is 1 on σ₀ and 0 on the rest of the spectrum.

**Problem.** For a bounded normal operator, the Riesz projection onto an isolated part σ₀ of the spectrum, the integral of (z − A)⁻¹/(2πi) around σ₀ alone, is an orthogonal projection.

**How the definition helps.** χ² = χ and χ̄ = χ, so χ(A) is a self-adjoint idempotent, which is an orthogonal projection (our own). The holomorphic and continuous calculi agree on functions holomorphic near the spectrum, and χ extends by constants near each part, so χ(A) is the Riesz projection.

**nLab:** [Riesz projection](https://ncatlab.org/nlab/show/Riesz+projection). It says: “is an orthogonal projection, and it coincides with the spectral projection”

**Sources:** none listed. No primary source with a working link was found.

### Essential self-adjointness gives a quantum Hamiltonian a unique time evolution

**Remember:** One self-adjoint extension: no boundary conditions left to choose.

*True by definition.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 81Q10, 47D03. arXiv math.FA, math-ph. Level 3: graduate.

**Definition.** A densely defined symmetric operator H on a complex Hilbert space, one with ⟨Hx, y⟩ = ⟨x, Hy⟩ on its domain, is essentially self-adjoint if it has exactly one self-adjoint extension. Equivalently, its closure is self-adjoint.

**Problem.** A densely defined symmetric Hamiltonian H has exactly one strongly continuous unitary evolution exp(−itĤ) with Ĥ extending H exactly when H is essentially self-adjoint.

**How the definition helps.** Stone’s theorem matches strongly continuous unitary groups one to one with self-adjoint generators, so unitary evolutions extending H match self-adjoint extensions of H (our own). Hence the evolution is unique exactly when the self-adjoint extension is.

**Wikipedia:** [Self-adjoint operator](https://en.wikipedia.org/wiki/Self-adjoint_operator), [Extensions of symmetric operators](https://en.wikipedia.org/wiki/Extensions_of_symmetric_operators), [Stone's theorem on one-parameter unitary groups](https://en.wikipedia.org/wiki/Stone%27s_theorem_on_one-parameter_unitary_groups). It says: “A symmetric operator A is said to be essentially self-adjoint if the closure of A is self-adjoint. Equivalently, A is essentially self-adjoint if it has a unique self-adjoint extension.”

**Sources:**

- [von Neumann, J. (1930). Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren. Mathematische Annalen 102, 49–131.](https://doi.org/10.1007/BF01782338)
- [Stone, M. H. (1932). On one-parameter unitary groups in Hilbert space. Annals of Mathematics 33(3), 643–648.](https://doi.org/10.2307/1968538)

### Quadratic forms give every nonnegative symmetric operator a self-adjoint extension

**Remember:** Complete the energy form, and the self-adjoint operator falls out by Riesz.

*Makes the theorem clean to state or prove.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A20, 47A07. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** For a densely defined symmetric operator T that is nonnegative (⟨ξ, Tξ⟩ ≥ 0), the energy form Q(ξ, η) = ⟨ξ, Tη⟩ + ⟨ξ, η⟩ is an inner product on its domain. Completing the domain in this inner product gives a Hilbert space H₁ that sits inside H.

**Problem.** Every nonnegative densely defined symmetric operator has a nonnegative self-adjoint extension, the Friedrichs extension. It exists even when the deficiency indices are not zero.

**How the definition helps.** The Riesz representation theorem on H₁ turns the closed form Q into a self-adjoint operator at least I, and subtracting I gives a nonnegative self-adjoint extension of T (our own). The one real step is that H₁ maps injectively into H, which follows from closability of the form of a nonnegative symmetric operator.

**Wikipedia:** [Friedrichs extension](https://en.wikipedia.org/wiki/Friedrichs_extension). It says: “This extension is particularly useful in situations where an operator may fail to be essentially self-adjoint or whose essential self-adjointness is difficult to show.”

**Sources:**

- [K. Friedrichs, Spektraltheorie halbbeschränkter Operatoren und Anwendung auf die Spektralzerlegung von Differentialoperatoren, Mathematische Annalen 109 (1934), 465–487](https://doi.org/10.1007/BF01449150)

### Spectral measures replace eigenbases in the spectral theorem

**Remember:** Diagonalize with a measure of projections, not with a basis of eigenvectors.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A60. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** A spectral measure on ℝ assigns an orthogonal projection E(B) to each Borel set B, with E(ℝ) = I. It is countably additive on each vector: for disjoint Bₙ, ∑ E(Bₙ)x converges in norm to E(⋃ Bₙ)x. E(B) picks out the part of the space where the spectral value lies in B, so no eigenvectors are needed.

**Problem.** Self-adjoint operators on a complex Hilbert space correspond bijectively to spectral measures on ℝ through A=∫λ E(dλ). This includes bounded and unbounded operators.

**How the definition helps.** Spectral measures need no eigenvectors, so the theorem covers operators that have none, such as multiplication by x on L²\[0,1\]. The proof is still real work; one route goes through the Gelfand representation.

**nLab:** [spectral theorem](https://ncatlab.org/nlab/show/spectral+theorem). It says: “theorem: there is a one to one correspondence of (bounded or unbounded) selfadjoint operators A and spectral measures E such that A = ∫ λ E(dλ)”

**Sources:**

- [J. von Neumann, Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren, Mathematische Annalen 102 (1930) 49–131](https://doi.org/10.1007/BF01782338)

### The Cayley transform turns self-adjoint extensions into unitary extensions

**Remember:** Cayley turns self-adjoint into unitary; missing dimensions must match.

*Makes the theorem clean to state or prove.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A20. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** For a densely defined symmetric operator with closure S on a complex Hilbert space, the Cayley transform (S − iI)(S + iI)⁻¹ maps ran(S + iI) isometrically onto ran(S − iI). Self-adjoint extensions correspond to unitary extensions of this isometry. The deficiency indices are the dimensions of the orthogonal complements of the two ranges.

**Problem.** Von Neumann's theorem says that a densely defined symmetric operator has a self-adjoint extension exactly when its two deficiency indices are equal. It has exactly one when both are zero.

**How the definition helps.** A unitary extension of the isometry must map the complement of its domain unitarily onto the complement of its range (our own). Such a map exists exactly when these dimensions agree, and it is unique exactly when both complements are zero.

**Wikipedia:** [Extensions of symmetric operators](https://en.wikipedia.org/wiki/Extensions_of_symmetric_operators), [Cayley transform](https://en.wikipedia.org/wiki/Cayley_transform). It says: “finding self-adjoint extensions, with various requirements, of symmetric operators is equivalent to finding unitary extensions of suitable partial isometries.”

**Sources:**

- [J. von Neumann, Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren, Mathematische Annalen 102 (1930), 49–131](https://doi.org/10.1007/BF01782338)

### The spectral theorem needs self-adjoint operators, not only symmetric ones

**Remember:** Self-adjoint: symmetric, and the adjoint’s domain is no bigger.

*Rules out counterexamples.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A60. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** A densely defined operator A on a Hilbert space is symmetric if ⟨Ax, y⟩ = ⟨x, Ay⟩ on its domain, that is A ⊆ A\*. It is self-adjoint if A = A\*, so the adjoint has no larger domain.

**Problem.** Every self-adjoint operator on a Hilbert space is unitarily equivalent to multiplication by a real function on an L² space. So it has real spectrum and a functional calculus.

**How the definition helps.** Multiplication by a real function equals its own adjoint, domains included, so only self-adjoint operators can have the form the spectral theorem gives (our own). For −i d/dx on L²\[0,1\] with domain H¹₀(0,1), the adjoint acts on all of H¹(0,1), so this symmetric operator is not self-adjoint. In our own comparison, the periodic domain of f in H¹(0,1) with f(0) = f(1) gives a self-adjoint operator.

**Wikipedia:** [Self-adjoint operator](https://en.wikipedia.org/wiki/Self-adjoint_operator), [Hellinger–Toeplitz theorem](https://en.wikipedia.org/wiki/Hellinger%E2%80%93Toeplitz_theorem). It says: “Although the distinction between a symmetric operator and a (essentially) self-adjoint operator is subtle, it is important since self-adjointness is the hypothesis in the spectral theorem.”

**Sources:**

- [von Neumann, J. (1930). Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren. Mathematische Annalen 102, 49–131.](https://doi.org/10.1007/BF01782338)

### Unbounded operators commute when their spectral projections commute (Nelson's example)

**Remember:** Unbounded operators commute when their exponentials do.

*Rules out counterexamples. Confidence: medium.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A60. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Two self-adjoint operators A and B, possibly unbounded, commute if all their spectral projections commute. Equivalently, their resolvents commute, or their unitary groups exp(itA) and exp(isB) commute for all real t and s.

**Problem.** If two self-adjoint operators commute in this sense, all bounded Borel functions of them commute, and so do their unitary groups.

**How the definition helps.** Bounded Borel functions are uniform limits of finite linear combinations of spectral projections, so they commute when the projections do, and the unitary groups are among them. Nelson’s differential operators commute on a common invariant core, yet their unitary groups do not commute. The definition excludes this example.

**nLab:** [unbounded operator](https://ncatlab.org/nlab/show/unbounded+operator). It says: “Nelson's example shows that the rather involved definition of commutativity of two unbounded operators is well motivated, because a more naive one will have unwanted consequences.”

**Sources:**

- [Edward Nelson, Analytic vectors, Annals of Mathematics 70 (1959) 572–615](https://doi.org/10.2307/1970331)

### Unitary changes preserve extremal extensions

**Remember:** Least and greatest by energy, and unitaries preserve energy.

*True by definition.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)). arXiv math.SP. Level 3: graduate.

**Definition.** Order nonnegative self-adjoint operators by energy: A ≤ B if the domain of √B lies in that of √A and ‖√A x‖² ≤ ‖√B x‖² there. The Krein–von Neumann and Friedrichs extensions of S are the least and the greatest nonnegative self-adjoint extensions in this order.

**Problem.** Let S be a densely defined closed nonnegative symmetric operator, and let U be unitary. The Friedrichs and Krein–von Neumann extensions of USU\* are U times those of S times U\*.

**How the definition helps.** Conjugation by U preserves norms, so it preserves the energy order and maps the nonnegative self-adjoint extensions of S onto those of USU\* (our own). It therefore maps the least and greatest extensions to the least and greatest ones. Krein’s theorem gives their existence and identifies them with the named extensions.

**Paper or page:** [Some Remarks On Krein--von Neumann Extensions](https://arxiv.org/abs/2504.11718v2). It says: “among all non-negative self-adjoint extensions of S, there exist two distinguished ones”

**Sources:** none listed. No primary source with a working link was found.

### Square integrable kernels give Hilbert–Schmidt operators

**Remember:** Sum the squared matrix entries to recover the squared kernel norm.

*True by definition.* MSC 47B34 (Kernel operators). arXiv math.FA. Level 3: graduate.

**Definition.** An operator K on L²\[0,1\] is Hilbert–Schmidt if ∑ ‖Ke‖² over an orthonormal basis is finite, and the square root of this sum is its Hilbert–Schmidt norm. For an integral operator with kernel k, (Ke)(x) = ∫₀¹ k(x,y)e(y) dy is the coefficient of k(x,·) against the conjugate of e.

**Problem.** Every square integrable kernel on the unit square defines a Hilbert–Schmidt operator. Its Hilbert–Schmidt norm equals the L² norm of the kernel.

**How the definition helps.** Parseval’s identity in y gives ∑ₑ \|(Ke)(x)\|² = ∫₀¹ \|k(x,y)\|² dy for almost every x, since the conjugate basis is also orthonormal (our own). Integrating in x, with Tonelli’s theorem to exchange sum and integral, gives ‖K‖²<sub>HS</sub> = ‖k‖₂².

**Wikipedia:** [Hilbert–Schmidt operator](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Schmidt_operator). It says: “with kernel k is a Hilbert–Schmidt operator and ‖K‖HS = ‖k‖₂.”

**Sources:** none listed. No primary source with a working link was found.

### Essential range discards invisible values

**Remember:** A value counts only if every neighborhood has positive mass.

*Rules out counterexamples.* MSC 47B38 (Linear operators on function spaces (general)), 47A10. arXiv math.SP. Level 3: graduate.

**Definition.** The essential range of a measurable function f is the set of values λ that f comes close to on a set of positive measure. That is, every neighborhood of λ has an inverse image of positive measure, so values taken only on null sets do not count.

**Problem.** Suppose the measure space is a countable union of sets of finite measure. For bounded measurable f, the spectrum of multiplication by f on L² equals its essential range.

**How the definition helps.** Outside the essential range, \|f − λ\| is bounded below almost everywhere, so multiplication by 1/(f − λ) is a bounded inverse (our own). Inside it, normalized indicators of finite positive-measure sets where f is near λ show that f − λ has no bounded inverse (our own). A function equal to one at a single point and zero elsewhere acts as zero on Lebesgue L², so the value one is not spectral (our own).

**Wikipedia:** [Multiplication operator](https://en.wikipedia.org/wiki/Multiplication_operator). It says: “is the essential range of f”

**Sources:** none listed. No primary source with a working link was found.

### Dissipative operators make semigroup generation easy to check

**Remember:** Check one energy inequality and one range condition, and the semigroup exists.

*Makes the theorem clean to state or prove.* MSC 47B44 (Linear accretive operators, dissipative operators, etc.), 47D06. arXiv math.FA. Level 3: graduate.

**Definition.** An operator A on a Banach space is dissipative if ‖(λ − A)x‖ ≥ λ‖x‖ for all λ &gt; 0 and x in its domain. So any inverse of λ − A has norm at most 1/λ; in a Hilbert space the condition means Re⟨Ax, x⟩ ≤ 0. A is maximally dissipative if, also, λ₀ − A is onto for some λ₀ &gt; 0.

**Problem.** A linear operator A on a Banach space generates a strongly continuous contraction semigroup exactly when it is densely defined and maximally dissipative. The evolution u′=Au then has a unique mild solution for each initial vector, with ‖u(t)‖ ≤ ‖u(0)‖.

**How the definition helps.** Dissipativity gives ‖(λ − A)⁻¹‖ ≤ 1/λ, which is the Hille–Yosida resolvent bound for contraction semigroups (our own). The Lumer–Phillips theorem turns this bound and surjectivity at one λ₀ into generation of a contraction semigroup, whose orbits are the mild solutions with ‖u(t)‖ ≤ ‖u(0)‖.

**Wikipedia:** [Lumer–Phillips theorem](https://en.wikipedia.org/wiki/Lumer%E2%80%93Phillips_theorem), [C0-semigroup](https://en.wikipedia.org/wiki/C0-semigroup). It says: “Of more practical importance are however the much easier to verify conditions given by the Lumer–Phillips theorem.”

**Sources:**

- [G. Lumer, R. S. Phillips, Dissipative operators in a Banach space, Pacific Journal of Mathematics 11 (1961) 679–698](https://doi.org/10.2140/pjm.1961.11.679)

### Resolvent powers are time moments

**Remember:** Times add when semigroup operators compose.

*True by definition.* MSC 47D03 (Groups and semigroups of linear operators), 44A10. arXiv math.FA. Level 3: graduate.

**Definition.** A uniformly continuous semigroup on a complex Banach space is a family of bounded operators T(t), t ≥ 0, with T(0) = I and T(s + t) = T(s)T(t), where T(t) → I in norm as t ↓ 0. Its generator A is the norm limit of (T(t) − I)/t. For Re λ &gt; ω its resolvent is the Laplace transform (λI − A)⁻¹ = ∫₀<sup>∞</sup> exp(−λt)T(t) dt (our own).

**Problem.** Suppose ‖T(t)‖ ≤ M exp(ωt) and Re λ &gt; ω. Then for each integer n ≥ 1, (λI − A)⁻ⁿ = ∫₀<sup>∞</sup> tⁿ⁻¹/(n − 1)! · exp(−λt)T(t) dt.

**How the definition helps.** Multiplying n copies of the Laplace integral gives the operator T(t₁ + ⋯ + tₙ) by the semigroup law (our own). Grouping by the total time t, the times with sum t fill a simplex of volume tⁿ⁻¹/(n − 1)!, which gives the weight (our own). The growth bound makes all integrals converge absolutely (our own).

**Paper or page:** [On the Properties of the Semigroup Generated by the RL Fractional Integral](https://arxiv.org/abs/2405.05265v1). It says: “Let T be a uniformly continuous semigroup of type (M,ω) with the infinitesimal generator A.”

**Sources:** none listed. No primary source with a working link was found.

### Convolving time laws composes averages

**Remember:** Adding independent times composes their averaged operators.

*True by definition.* MSC 47D06 (One-parameter semigroups and linear evolution equations). arXiv math.FA. Level 3: graduate.

**Definition.** Let μₜ, t ≥ 0, be subprobability measures on \[0, ∞) with μ₀ the unit mass at zero and μₛ₊ₜ = μₛ ∗ μₜ, where ∗ is convolution. The subordinate operators average the semigroup S over random times: Sμ(t)x = ∫ S(r)x dμₜ(r).

**Problem.** Let S be a uniformly bounded, strongly continuous semigroup on a Banach space. Suppose μₜ converges to unit mass at zero against continuous compactly supported functions as t↓0. Then the operators Sμ(t) form a uniformly bounded, strongly continuous semigroup.

**How the definition helps.** Composing two averages gives a double integral of S(r + s)x, and convolution of the measures is exactly this addition of times, so the semigroup law holds (our own). Total mass at most one keeps the uniform bound. As t ↓ 0 the measures concentrate at zero, where S(r)x → x, which gives strong continuity.

**Paper or page:** [Final State Observability in Banach spaces with applications to Subordination and Semigroups induced by L{é}vy processes](https://arxiv.org/abs/2202.05835v2). It says: “is again a bounded C₀-semigroup on X.”

**Sources:** none listed. No primary source with a working link was found.

### Mild solutions make well-posedness the same as generating a semigroup

**Remember:** Integrate once, and the solution makes sense for every starting point.

*Makes the theorem clean to state or prove.* MSC 47D06 (One-parameter semigroups and linear evolution equations). arXiv math.FA. Level 3: graduate.

**Definition.** For a closed operator A on a Banach space X, a mild solution with initial vector x is a continuous map u: \[0, ∞) → X. Its integral v(t) = ∫₀ᵗ u(s) ds must lie in the domain of A and satisfy Av(t) = u(t) − x for all t ≥ 0. Only the integral, not u itself, must lie in the domain.

**Problem.** Let A be a closed operator. Every starting point x in X has a unique mild solution exactly when A generates a strongly continuous semigroup T(t). The solution is then u(t) = T(t)x.

**How the definition helps.** Because only v(t) must lie in the domain of A, the equation makes sense for every initial vector. In our own account, the well-posedness theorem for semigroups says these solutions exist uniquely for all x exactly when A generates a strongly continuous semigroup. If A generates T, then A applied to ∫₀ᵗ T(s)x ds gives T(t)x − x, so u(t) = T(t)x.

**Wikipedia:** [C0-semigroup](https://en.wikipedia.org/wiki/C0-semigroup). It says: “Any classical solution is a mild solution. A mild solution is a classical solution if and only if it is continuously differentiable.”

**Sources:**

- [W. Arendt, C. Batty, M. Hieber, F. Neubrander, Vector-valued Laplace Transforms and Cauchy Problems, 2nd ed., Birkhäuser (2011)](https://doi.org/10.1007/978-3-0348-0087-7)

### Strong continuity lets semigroups have unbounded generators, as Hille–Yosida needs

**Remember:** Ask continuity vector by vector, and the heat equation becomes a semigroup.

*Makes the theorem clean to state or prove.* MSC 47D06 (One-parameter semigroups and linear evolution equations). arXiv math.FA. Level 3: graduate.

**Definition.** A one-parameter semigroup is a family of bounded operators T(t), t ≥ 0, with T(0) = I and T(s + t) = T(s)T(t). It is strongly continuous if t ↦ T(t)x is continuous for each vector x. This allows an unbounded generator A, the derivative of T(t)x at t = 0 where it exists (our own).

**Problem.** Let A be closed and densely defined on a Banach space, with M≥1 and ω real. It generates a strongly continuous semigroup bounded by M exp(ωt) exactly when the following resolvent conditions hold. Every real λ&gt;ω lies in the resolvent set, and ‖(λI−A)⁻ⁿ‖ ≤ M/(λ−ω)ⁿ for every integer n≥1.

**How the definition helps.** Norm continuity would force a bounded generator, which the heat and wave equations do not have, so continuity is asked vector by vector (our own examples). Strong continuity makes the generator closed and densely defined, and the resolvent is the Laplace transform of the semigroup, which gives the resolvent bounds (our own). The converse builds the semigroup from A by the Yosida approximation with bounded operators (our own).

**Wikipedia:** [C0-semigroup](https://en.wikipedia.org/wiki/C0-semigroup), [Hille–Yosida theorem](https://en.wikipedia.org/wiki/Hille%E2%80%93Yosida_theorem). It says: “The infinitesimal generator of a strongly continuous one-parameter semigroup is a closed linear operator defined on a dense linear subspace of X.”

**Sources:**

- [K. Yosida, On the differentiability and the representation of one-parameter semi-group of linear operators, Journal of the Mathematical Society of Japan 1 (1948), 15–21](https://doi.org/10.2969/jmsj/00110015)

### Commutators make differential operator order subadditive under composition

**Remember:** A commutator with multiplication lowers the order by one.

*True by definition.* MSC 47F05 (General theory of partial differential operators), 13N10. arXiv math.AP, math.AC. Level 3: graduate.

**Definition.** The commutator \[P, f\] of a linear map P on smooth functions with multiplication by a smooth f acts on u as P(fu) − fP(u). P has order at most k if any k + 1 nested commutators of this kind give zero.

**Problem.** If P has order at most k and Q has order at most l, then PQ has order at most k + l.

**How the definition helps.** The rule \[PQ, f\] = \[P, f\]Q + P\[Q, f\] sends each commutator to one factor (our own). After k + l + 1 commutators, each term has more than k on P or more than l on Q, so it vanishes. This order agrees with the usual one, the highest derivative in local coordinates.

**Wikipedia:** [Differential operator](https://en.wikipedia.org/wiki/Differential_operator). It says: “This characterization of linear differential operators shows that they are particular mappings between modules over a commutative algebra, allowing the concept to be seen as a part of commutative algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Maximal monotone graphs retain limits

**Remember:** If a limit fits every graph pair, maximality puts it inside.

*Rules out counterexamples.* MSC 47H05 (Monotone operators and generalizations). arXiv math.FA. Level 3: graduate.

**Definition.** A graph, a set of pairs in a real Hilbert space, is monotone if ⟨x − y, u − v⟩ ≥ 0 for any two pairs (x, u) and (y, v). It is maximal monotone if every pair that satisfies this inequality against all graph pairs already belongs to the graph.

**Problem.** On a real Hilbert space, let pairs (xₙ, uₙ) of a maximal monotone graph have xₙ → x weakly and uₙ → u in norm. Then (x, u) belongs to the graph.

**How the definition helps.** For each graph pair (y, v), the inequality ⟨xₙ − y, uₙ − v⟩ ≥ 0 passes to the limit, because a weakly convergent sequence is bounded (our own). So (x, u) satisfies the inequality against every pair, and maximality puts it in the graph (our own). Without maximality this fails: the zero operator on the positive reals has pairs (1/n, 0) whose limit (0, 0) is missing (our own).

**Paper or page:** [A strongly convergent inertial inexact proximal-point algorithm for monotone inclusions with applications to variational inequalities](https://arxiv.org/abs/2407.03485v2). It says: “T is maximal monotone if and only if T = T⁰.”

**Sources:**

- [George J. Minty, Monotone (nonlinear) operators in Hilbert space (1962)](https://doi.org/10.1215/S0012-7094-62-02933-2)

### Composed averaged maps fix exactly the points that every factor fixes

**Remember:** Each averaged step loses distance unless it stays put.

*True by definition.* MSC 47H09 (Contraction-type mappings, nonexpansive mappings, A-proper mappings, etc.), 47H10. arXiv math.OC, math.FA. Level 3: graduate.

**Definition.** For 0 &lt; λ &lt; 1, a map T on a Hilbert space is λ-averaged if T = (1 − λ)I + λN for some nonexpansive N, one with ‖Nx − Ny‖ ≤ ‖x − y‖. Such a step moves closer to every fixed point p unless it stays put (our own). Precisely, ‖Tx − p‖² ≤ ‖x − p‖² − ((1 − λ)/λ)‖Tx − x‖².

**Problem.** A finite composition of averaged maps on a Hilbert space is averaged. If the maps have a common fixed point, the fixed points of the composition are exactly the common fixed points.

**How the definition helps.** Expanding the composition gives a convex combination of nonexpansive maps with identity weight ∏(1 − λᵢ) &gt; 0, so it is averaged (our own). If the composition fixes x and p is a common fixed point, the distance to p cannot drop at any step. The inequality then forces every step to fix x, so x is fixed by every factor.

**Paper or page:** [Unrestricted Douglas-Rachford algorithms for solving convex feasibility problems in Hilbert space](https://arxiv.org/abs/2204.00275v2). It says: “then Fix(T) = ⋂ᵢ₌₁ⁿ Fix(Tᵢ).”

**Sources:**

- [Kay Barshad, Aviv Gibali, Simeon Reich, Unrestricted Douglas-Rachford algorithms for solving convex feasibility problems in Hilbert space, arXiv:2204.00275v2 (2022)](https://arxiv.org/abs/2204.00275v2)

### Firmly nonexpansive maps are exactly averages of identity and nonexpansive maps

**Remember:** Double the map and subtract the identity to test firmness.

*True by definition.* MSC 47H09 (Contraction-type mappings, nonexpansive mappings, A-proper mappings, etc.), 47H10. arXiv math.OC, math.FA. Level 3: graduate.

**Definition.** A map T on a Hilbert space is firmly nonexpansive if ‖Tx − Ty‖² ≤ Re⟨Tx − Ty, x − y⟩ for all x and y.

**Problem.** On a Hilbert space, T is firmly nonexpansive exactly when T = ½(Id + N) for some nonexpansive map N, one with ‖Nx − Ny‖ ≤ ‖x − y‖.

**How the definition helps.** With N = 2T − Id, expanding gives ‖Nx − Ny‖² = ‖x − y‖² − 4(Re⟨Tx − Ty, x − y⟩ − ‖Tx − Ty‖²) (our own calculation). So the firm inequality holds exactly when N is nonexpansive, and then T = ½(Id + N).

**Paper or page:** [Unrestricted Douglas-Rachford algorithms for solving convex feasibility problems in Hilbert space](https://arxiv.org/abs/2204.00275v2). It says: “There exists a nonexpansive operator N: ℋ → ℋ such that T = ½(Id + N).”

**Sources:**

- [Kay Barshad, Aviv Gibali, Simeon Reich, Unrestricted Douglas-Rachford algorithms for solving convex feasibility problems in Hilbert space, arXiv:2204.00275v2 (2022)](https://arxiv.org/abs/2204.00275v2)

### Linear relations realize pseudo-resolvents

**Remember:** A relation is a graph, so any inverse exists as one.

*Makes the theorem clean to state or prove.* MSC 47A06 (Linear relations (multivalued linear operators)). arXiv math.FA. Level 4: research.

**Definition.** A linear relation on a Banach space X is a linear subspace of X × X, a multivalued operator given by its graph. A pseudo-resolvent on a set Ω of scalars is a family of bounded maps R(λ) on X satisfying the resolvent identity R(λ) − R(μ) = (λ − μ)R(λ)R(μ).

**Problem.** On any nonempty parameter set, each pseudo-resolvent R comes from a unique closed linear relation L. At every λ, R(λ) is the inverse of L − λI.

**How the definition helps.** Let L be the pairs (R(λ)x, x + λR(λ)x): this is the graph of R(λ) flipped and shifted by λ, so it is closed and the inverse of L − λI is R(λ) (our own). The resolvent identity gives R(μ)(x + (λ − μ)R(λ)x) = R(λ)x, so the same pairs arise at every μ. Uniqueness holds because R(λ) determines L − λI and hence L (our own).

**Paper or page:** [A pseudo-resolvent approach to abstract differential-algebraic equations](https://arxiv.org/abs/2312.02303v1). It says: “is closed and independent of the particular choice of λ”

**Sources:**

- [Hannes Gernandt and Timo Reis, A pseudo-resolvent approach to abstract differential-algebraic equations (2025).](https://doi.org/10.1007/s00028-025-01106-5)

### Relations admit infinite operator limits

**Remember:** An infinite multiple of the identity becomes a vertical graph.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 47A06 (Linear relations (multivalued linear operators)). arXiv math.SP, math.FA. Level 4: research.

**Definition.** A linear relation on a Hilbert space H is a linear subspace of H × H, a graph that may pair one input with several outputs. Relations L converge in norm resolvent when their shifted inverses (L − iI)⁻¹, with the two coordinates swapped, converge in operator norm.

**Problem.** On a nonzero complex Hilbert space, the operators nI converge in norm resolvent to the self-adjoint relation consisting of all pairs (0,y).

**How the definition helps.** Shifting the vertical relation of all pairs (0, y) by i leaves it unchanged, and its inverse is the zero operator, so its resolvent at i is zero (our own). The resolvent of nI at i is (n − i)⁻¹I, whose norm tends to zero. The vertical relation is self-adjoint because its inverse, zero, is self-adjoint (our own).

**Paper or page:** [Sequences of operators, monotone in the sense of contractive domination](https://arxiv.org/abs/2401.00312v1). It says: “In fact, Hₙ → H∞ in the strong resolvent sense or, equivalently, in the strong graph sense.”

**Sources:** none listed. No primary source with a working link was found.

### Koszul Laplacians test joint spectra

**Remember:** Replace exactness at each stage with one positive inverse test.

*Makes the theorem clean to state or prove.* MSC 47A13 (Several-variable operator theory (spectral, Fredholm, etc.)). arXiv math.SP. Level 4: research.

**Definition.** For commuting bounded operators T₁, …, Tₙ on H and λ in ℂⁿ, the Koszul complex has spaces H ⊗ Λᵏℂⁿ and differential ∑ⱼ (Tⱼ − λⱼI) ⊗ ιⱼ. Here ιⱼ is the contraction by the jth coordinate vector. The point λ is outside the Taylor spectrum when this complex is exact, with zero maps at the ends.

**Problem.** A point lies outside the Taylor spectrum exactly when at every stage the Laplacian BB\*+C\*C has a bounded inverse. Here B is the incoming differential and C the outgoing differential.

**How the definition helps.** Exactness splits each space orthogonally into ran B and (ker C)⊥, and the closed range theorem bounds the Laplacian energy ‖B\*x‖² + ‖Cx‖² below on each part (our own). Conversely, if the Laplacian is invertible, it maps ker C into itself because CB = 0, and equals BB\* there, so ker C lies in ran B. Thus invertibility at every stage is exactness.

**Paper or page:** [Spectral mapping theorem and the Taylor spectrum](https://arxiv.org/abs/2404.17907v1). It says: “if and only if Dₖ\*Dₖ + Dₖ₊₁Dₖ₊₁\* is invertible for all k.”

**Sources:**

- [Joseph L. Taylor, A joint spectrum for several commuting operators (1970).](https://doi.org/10.1016/0022-1236(70)90055-8)

### Equal power ranges preserve Wold parts

**Remember:** Preserve every power range and you preserve their intersection.

*True by definition.* MSC 47A15 (Invariant subspaces of linear operators). arXiv math.FA. Level 4: research.

**Definition.** The unitary part of an isometry V on a Hilbert space is the largest subspace where V acts unitarily; by the Wold decomposition it is the intersection of the ranges of all powers Vⁿ. The shift part is its orthogonal complement. A subspace reduces W if both W and W\* map it into itself.

**Problem.** Let V and W be isometries on the same Hilbert space. For each positive integer n, suppose WVⁿ and VⁿW have equal ranges, as do W\*Vⁿ and VⁿW\*. Then both Wold parts of V reduce W.

**How the definition helps.** The range equalities give W(ran Vⁿ) = ran WVⁿ = ran VⁿW ⊆ ran Vⁿ, and the same for W\*, so each power range is invariant under W and W\* (our own). Hence so is their intersection, the unitary part, and its orthogonal complement then reduces W too (our own).

**Paper or page:** [Wold decomposition for isometries with equal range](https://arxiv.org/abs/2309.04445v2). It says: “then both the subspaces ℋᵤ and ℋₛ reduce W.”

**Sources:**

- [Satyabrata Majee, Wold decomposition for isometries with equal range (2026).](https://doi.org/10.7900/jot.2023sep07.2501)

### Minimal dilations are unique

**Remember:** Keep only the translates of the original space.

*Rules out counterexamples.* MSC 47A20 (Dilations, extensions, compressions of linear operators). arXiv math.FA. Level 4: research.

**Definition.** Let V(t), t ≥ 0, be isometries on H with V(0) = I and V(s + t) = V(s)V(t). A unitary dilation is a unitary group U(t) on a larger Hilbert space that agrees with V(t) on H for t ≥ 0. It is minimal if the translates U(t)x, for real t and x in H, span a dense subspace.

**Problem.** Any two minimal unitary dilations of the same isometric semigroup are unitarily equivalent by a map that fixes the original space.

**How the definition helps.** Inner products of translates are fixed by V: for s ≤ t, ⟨U(s)x, U(t)y⟩ = ⟨x, V(t − s)y⟩ (our own). So sending each translate in one dilation to the matching translate in the other preserves inner products, and minimality extends this by density to a unitary map fixing H (our own).

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456v1). It says: “Moreover, any two minimal unitary dilations of V are unitarily equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Unitary moments give positive Toeplitz matrices

**Remember:** Unitary moments turn Toeplitz matrices into matrices of inner products.

*True by definition.* MSC 47A20 (Dilations, extensions, compressions of linear operators). arXiv math.FA. Level 4: research.

**Definition.** Take operators Aₙ on a Hilbert space H, with A₀ = I and A₋ₙ = Aₙ\*. They have a unitary moment dilation if some unitary U on a larger space compresses to them: Aₙ is Uⁿ followed by orthogonal projection onto H. Their Toeplitz block matrices have the entry A\_(j−i) in row i and column j.

**Problem.** A sequence has a unitary moment dilation exactly when all its finite Toeplitz block matrices are positive semidefinite.

**How the definition helps.** If each Aₙ is the compression of Uⁿ, the Toeplitz form at (xⱼ) equals ‖∑ⱼ Uʲxⱼ‖² ≥ 0 (our own). Conversely, take the Toeplitz form as an inner product on finitely supported sequences indexed by ℤ, divide out null vectors and complete, so that shifting the index is unitary. H sits at index zero, and compressing powers of the shift recovers the Aₙ.

**Paper or page:** [Operator moment dilations as block operators](https://arxiv.org/abs/2302.13873v2). It says: “Then the following are equivalent: (i) {Aₙ}ₙ≥₀ admits a unitary/isometric dilation.”

**Sources:**

- [B. V. Rajarama Bhat, Anindya Ghatak, and Santhosh Kumar Pamula, Block decompositions of operator moment dilations (2025).](https://doi.org/10.1007/s43037-025-00411-y)

### Inessential perturbations preserve Fredholmness

**Remember:** Inessential means I − SK stays Fredholm for every S.

*True by definition.* MSC 47A53 ((Semi-) Fredholm operators; index theories). arXiv math.FA. Level 4: research.

**Definition.** A bounded operator K on a Banach space is inessential if I − SK is Fredholm for every bounded S on that space. By Atkinson’s theorem, this says 1 − sk is invertible in the Calkin algebra (bounded modulo compact operators) for the images s of every S and k of K.

**Problem.** Adding an inessential operator to a Fredholm operator preserves Fredholmness.

**How the definition helps.** If F is Fredholm, its image f in the Calkin algebra is invertible, and F + K has image f(1 + f⁻¹k) (our own). Taking S to represent −f⁻¹, inessentiality makes 1 + f⁻¹k invertible, so F + K is Fredholm by Atkinson’s theorem.

**Wikipedia:** [Strictly singular operator](https://en.wikipedia.org/wiki/Strictly_singular_operator). It says: “is called inessential whenever Idₓ − ST is a Fredholm operator”

**Sources:** none listed. No primary source with a working link was found.

### Odd symmetry preserves kernel parity

**Remember:** Odd symmetry makes the ordinary index zero but leaves kernel parity.

*Makes the theorem clean to state or prove.* MSC 47A53 ((Semi-) Fredholm operators; index theories), 58J20. arXiv math.DG. Level 4: research.

**Definition.** Fix a conjugate-linear isometry τ with τ² = −1 on a complex Hilbert space. A bounded operator D with closed range and finite-dimensional kernel and cokernel is odd symmetric if τDτ⁻¹ = D\*, its adjoint, and its parity index is dim ker D modulo two.

**Problem.** The parity index is constant under compact perturbations that preserve odd symmetry.

**How the definition helps.** Odd symmetry maps ker D onto ker D\*, so the ordinary index is zero and only the kernel parity carries information (our own). The mod-two index theorem makes this parity locally constant among odd symmetric Fredholm operators. A compact symmetry-preserving K keeps every D + tK, 0 ≤ t ≤ 1, Fredholm and odd symmetric, so the parity is equal at both ends.

**Paper or page:** [On the Z<sub>2</sub>-valued index of elliptic odd symmetric operators on non-compact manifolds](https://arxiv.org/abs/2403.13999v3). It says: “indτ(D + K) = indτ D.”

**Sources:**

- [Maxim Braverman and Ahmad Reza Haj Saeedi Sadegh, On the ℤ₂-valued index of elliptic odd symmetric operators on non-compact manifolds (2024)](https://doi.org/10.1007/s40316-024-00228-5)

### A shifted inverse detects eigenvectors

**Remember:** Move the free inverse between the two square roots.

*True by definition. Confidence: medium.* MSC 47A75 (Eigenvalue problems for linear operators). arXiv math.SP. Level 4: research.

**Definition.** For self-adjoint A, bounded nonnegative V (⟨Vu, u⟩ ≥ 0) and λ outside the spectrum of A, the Birman–Schwinger operator is K(λ) = √V (A − λI)⁻¹ √V. Here √V is the positive square root. It turns the eigenvalue equation (A − V)u = λu, that is u = (A − λI)⁻¹Vu, into the fixed vector equation f = K(λ)f with f = √V u (our own).

**Problem.** For self-adjoint A, λ outside its spectrum is an eigenvalue of A − V exactly when 1 is an eigenvalue of K(λ). The eigenspace dimensions agree.

**How the definition helps.** The map u ↦ √V u sends eigenvectors of A − V at λ to fixed vectors of K(λ), and f ↦ (A − λI)⁻¹√V f sends them back (our own). The two maps are inverse to each other on these eigenspaces, so the dimensions agree (our own).

**Paper or page:** [Keller and Lieb-Thirring estimates of the eigenvalues in the gap of Dirac operators](https://arxiv.org/abs/2210.03091v2). It says: “λ is an eigenvalue of 𝒟̸ₘ − V if and only if 1 is an eigenvalue of Kᵥ(λ).”

**Sources:** none listed. No primary source with a working link was found.

### Resolvent square roots preserve eigenspace dimension

**Remember:** Split the free resolvent into two square roots around V.

*True by definition.* MSC 47A75 (Eigenvalue problems for linear operators). arXiv math.SP. Level 4: research.

**Definition.** For λ &lt; 0, the Birman–Schwinger operator B places the potential V between two copies of R, the inverse square root of H₀ − λI, where H₀ = −d²/dx² on L²(ℝ) with domain H²(ℝ). Precisely, ⟨f,Bg⟩ = −V((Rf)̅·Rg) for all f,g ∈ L²(ℝ), where V is a real distribution acting continuously on H¹(ℝ). So B = −RVR, and the eigenvalue equation (H₀ − λ)ψ = −Vψ becomes Bφ = φ for φ = R⁻¹ψ.

**Problem.** Let H be the Schrödinger operator H₀ + V, defined through its energy form. Its eigenspace at λ and the eigenspace of B at 1 have equal dimension.

**How the definition helps.** In our own account, ψ ↦ R⁻¹ψ maps the eigenspace of H at λ bijectively onto the fixed vectors of B, with inverse φ ↦ Rφ. The remaining work is checking operator domains through the energy form.

**Paper or page:** [A generalized Birman-Schwinger principle and applications to one-dimensional Schrödinger operators with distributional potentials](https://arxiv.org/abs/2507.02251v2). It says: “the geometric multiplicity of λ₀ as an eigenvalue of H coincides with the geometric multiplicity of the eigenvalue 1 of Aᵥ(λ₀).”

**Sources:**

- [Fritz Gesztesy and Roger Nichols, A generalized Birman-Schwinger principle and applications to one-dimensional Schrödinger operators with distributional potentials, Theorem 2.10 (2025).](https://arxiv.org/abs/2507.02251v2)
- [Fritz Gesztesy and Roger Nichols, A Generalized Birman–Schwinger Principle and Applications to One-Dimensional Schrödinger Operators with Distributional Potentials (2025).](https://doi.org/10.1134/s1234567825030024)

### Regularized determinants handle square-integrable kernels

**Remember:** Cancel the linear term so square-summable singular values suffice.

*Rules out counterexamples.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, p-summing, in the Schatten-von Neumann classes, etc.)), 45P05. arXiv math.FA. Level 4: research.

**Definition.** For an integral operator K with square-integrable kernel, the regularized determinant D(λ) is the Fredholm determinant of (I + λK)exp(−λK). The exponential cancels the linear term, so this operator is the identity plus K² times a bounded factor. The singular values of K are square-summable, so those of K² are summable and the Fredholm determinant applies.

**Problem.** D is an entire function of λ. Without the exponential correction, the product of 1 + λμ over the eigenvalues μ of K can diverge.

**How the definition helps.** The operator inside the determinant is the identity plus a trace-class operator that is entire in λ in trace norm, so D is entire (our own). For divergence, take K diagonal with entries 1/n in an orthonormal basis (our own). At λ = 1 the uncorrected partial products equal N + 1.

**Wikipedia:** [Hilbert–Schmidt integral operator](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Schmidt_integral_operator). It says: “Hilbert–Schmidt integral operators are both continuous and compact.”

**Sources:**

- [Folkmar Bornemann, On the numerical evaluation of Fredholm determinants (2010)](https://doi.org/10.1090/s0025-5718-09-02280-7)

### Abstract Friedrichs operators split into skew-symmetric and bounded positive parts

**Remember:** Half the sum is the positive part; half the difference is skew.

*True by definition.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A05, 35F45. arXiv math.AP, math.FA. Level 4: research.

**Definition.** An abstract Friedrichs pair is two densely defined operators T₀ and T̃₀ on a Hilbert space with a common domain, which are formal adjoints there: ⟨T₀φ, ψ⟩ = ⟨φ, T̃₀ψ⟩. Their sum is bounded on that domain, with ⟨(T₀ + T̃₀)φ, φ⟩ ≥ 2μ‖φ‖² for some μ &gt; 0. So half their sum is a bounded positive symmetric part, and half their difference is skew.

**Problem.** Every such pair splits in exactly one way as T₀ = L₀ + S and T̃₀ = −L₀ + S. Here L₀ is skew-symmetric (−L₀ ⊆ L₀\*), and S is bounded and self-adjoint with ⟨Su, u⟩ ≥ μ‖u‖².

**How the definition helps.** Adding and subtracting the two equations force S = (T₀ + T̃₀)/2 and L₀ = (T₀ − T̃₀)/2 on the common domain (our own). Formal adjointness makes S symmetric and L₀ skew-symmetric. Boundedness and density extend S uniquely to a bounded self-adjoint operator, and its lower bound passes to the extension by continuity (our own).

**Paper or page:** [The von Neumann extension theory for abstract Friedrichs operators](https://arxiv.org/abs/2312.09618v2). It says: “we show that every abstract Friedrichs operator can be written as the sum of a skew-symmetric operator and a bounded self-adjoint strictly positive operator.”

**Sources:**

- [Marko Erceg, Sandeep Kumar Soni, The von Neumann extension theory for abstract Friedrichs operators, arXiv:2312.09618v2 (2024)](https://arxiv.org/abs/2312.09618v2)

### Boundary data classify self-adjoint extensions

**Remember:** Two boundary maps turn the adjoint's defect into a boundary pairing.

*Makes the theorem clean to state or prove.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 81Q10. arXiv math-ph. Level 4: research.

**Definition.** A boundary triple for a closed, densely defined symmetric operator S on a complex Hilbert space is a Hilbert space G with linear boundary maps Γ₀, Γ₁ from dom S\* to G that are jointly onto G × G. They turn Green's identity into a pairing of boundary values: ⟨S\*f,g⟩ − ⟨f,S\*g⟩ = ⟨Γ₁f,Γ₀g⟩ − ⟨Γ₀f,Γ₁g⟩ for all f,g ∈ dom S\*.

**Problem.** A boundary triple exists exactly when the eigenspaces of S\* at i and −i have equal dimension. For such a triple and a self-adjoint operator Θ in G, the condition Γ₁f = ΘΓ₀f defines a self-adjoint extension.

**How the definition helps.** By the boundary identity, the adjoint of the extension Γ₁f = ΘΓ₀f is the extension given by Θ\*, since surjectivity lets both boundary values vary independently (our own). So Θ = Θ\* gives a self-adjoint extension. Building a triple uses the equal dimensions of the two eigenspaces.

**Paper or page:** [Fundamental solutions and Hadamard states for a scalar field with arbitrary boundary conditions on an asymptotically AdS spacetimes](https://arxiv.org/abs/2101.10290v1). It says: “Then an associated boundary triple (𝖍, γ₀, γ₁) exists if and only if S∗ has equal deficiency indices.”

**Sources:**

- [Fundamental solutions and Hadamard states for a scalar field with arbitrary boundary conditions on an asymptotically AdS spacetimes](https://arxiv.org/abs/2101.10290v1)

### Boundary parameters carry extension kernels

**Remember:** The output splits into three orthogonal pieces.

*True by definition.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)). arXiv math.SP. Level 4: research.

**Definition.** Fix a boundedly invertible self-adjoint extension A of a closed densely defined symmetric operator S, and let N = ker S\*. A Birman parameter T is a self-adjoint operator on a closed subspace M ⊆ N. Its extension S<sub>T</sub> is S\* on dom S ⊕ {v + A⁻¹(Tv + w) : v ∈ dom T, w ∈ N ⊖ M}, and it sends u + v + A⁻¹(Tv + w) to Su + Tv + w, a sum of pieces in N⊥, M and N ⊖ M.

**Problem.** The extension S<sub>T</sub> and its Birman parameter T have the same kernel, as subspaces of the Hilbert space.

**How the definition helps.** The three pieces of the output are orthogonal, so a zero output forces Su = 0, Tv = 0 and w = 0 (our own). Since A is invertible and extends S, Su = Au = 0 gives u = 0, so the kernel is exactly ker T. The Krein–Vishik–Birman theorem supplies the domain formula.

**Paper or page:** [On creating new essential spectrum by self-adjoint extension of gapped operators](https://arxiv.org/abs/2304.02579v3). It says: “ker Sₜ = ker T, and therefore Sₜ is injective ⇔ T is injective;”

**Sources:**

- [Alessandro Michelangeli, On creating new essential spectrum by self-adjoint extension of gapped operators (2024).](https://doi.org/10.1007/s43034-024-00319-y)

### Boundary triplets reduce eigenvalues of extensions to a boundary equation

**Remember:** A solution with first trace h has second trace M(λ)h.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A20, 47A75. arXiv math.SP, math.FA. Level 4: research.

**Definition.** A boundary triplet for a closed densely defined symmetric S is a Hilbert space G with linear traces Υ₀, Υ₁ from dom S\* jointly onto G × G, satisfying ⟨S\*f,g⟩ − ⟨f,S\*g⟩ = ⟨Υ₁f,Υ₀g⟩ − ⟨Υ₀f,Υ₁g⟩. Off the spectrum of A₀ = S\* on ker Υ₀, each h ∈ G has exactly one solution γ(λ)h of S\*f = λf with Υ₀f = h. The Weyl function M(λ) = Υ₁γ(λ) reads off its second trace.

**Problem.** Self-adjoint extensions AΘ of S correspond to self-adjoint linear relations Θ in G through (Υ₀f, Υ₁f) ∈ Θ. Outside the spectrum of A₀, ker(AΘ − λI) = γ(λ) ker(Θ − M(λ)), so λ is an eigenvalue exactly when ker(Θ − M(λ)) is nonzero.

**How the definition helps.** Every solution of S\*f = λf is γ(λ)h for a unique h, and its boundary pair (h, M(λ)h) lies in Θ exactly when h ∈ ker(Θ − M(λ)) (our own). The boundary triplet theorem supplies the correspondence between extensions and relations.

**Paper or page:** [On Spectral Properties of Restricted Fractional Laplacians with Self-adjoint Boundary Conditions on a Finite Interval](https://arxiv.org/abs/2505.00094), [On Spectral Properties of Restricted Fractional Laplacians with Self-adjoint Boundary Conditions on a Finite Interval](https://arxiv.org/abs/2505.00094). It says: “λ ∈ σp(AΘ) if and only if 0 ∈ σp(Θ − M(λ)), and in this case ker(AΘ − λ) = γ(λ) ker(Θ − M(λ))”

**Sources:**

- [Jussi Behrndt, Markus Holzmann, Delio Mugnolo, On Spectral Properties of Restricted Fractional Laplacians with Self-adjoint Boundary Conditions on a Finite Interval, arXiv:2505.00094 (2025)](https://arxiv.org/abs/2505.00094)
- [V. A. Derkach, M. M. Malamud, Generalized resolvents and the boundary value problems for Hermitian operators with gaps, J. Funct. Anal. 95 (1991), 1–95](https://doi.org/10.1016/0022-1236(91)90024-y)

### Removing the Krein kernel recovers the inverse

**Remember:** Drop the zero modes, then take any extension's inverse and project.

*True by definition.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)). arXiv math.SP. Level 4: research.

**Definition.** Let S be closed, densely defined, symmetric and bounded below by a positive constant. Its Krein–von Neumann extension S<sub>K</sub> extends S by zero on ker S\*, and its reduced operator is S<sub>K</sub> restricted to the orthogonal complement of ker S\*, which is ran S.

**Problem.** Let y ∈ ran S, and let S̃ be any boundedly invertible self-adjoint extension of S. The orthogonal projection of S̃⁻¹y onto ran S equals the inverse of the reduced operator at y.

**How the definition helps.** Write y = Sx; every extension sends x to y, so S̃⁻¹y = x (our own). Projecting x onto ran S subtracts a vector of ker S\*, where S<sub>K</sub> vanishes, so the projection still maps to y. It lies in ran S, so it is the reduced operator's unique preimage of y (our own).

**Paper or page:** [Some Remarks On Krein--von Neumann Extensions](https://arxiv.org/abs/2504.11718v2). It says: “let S̃ be any self-adjoint extension S such that 0 ∈ ρ(S̃).”

**Sources:** none listed. No primary source with a working link was found.

### Canonical factors invert Wiener–Hopf equations

**Remember:** Outside times inside, each with a bounded analytic inverse.

*Rules out counterexamples.* MSC 47B35 (Toeplitz operators, Hankel operators, Wiener-Hopf operators), 45E10. arXiv math.FA. Level 4: research.

**Definition.** A canonical factorization writes a bounded function G on the unit circle as G = V₋V₊, with no power of z between the factors. V₊ and 1/V₊ extend boundedly and analytically inside the disk, so they keep functions with only nonnegative Fourier modes. V₋ and 1/V₋ extend boundedly and analytically outside, including at infinity, so they keep functions with only negative modes.

**Problem.** If a bounded function G on the unit circle has a canonical factorization G = V₋V₊, its Toeplitz operator on the Hardy space H² is invertible. The inverse is T(1/V₊)T(1/V₋), where H² holds the square-integrable functions with no negative Fourier coefficients.

**How the definition helps.** Because each factor keeps its half of the modes, T(G) = T(V₋)T(V₊), and each factor's Toeplitz operator is inverted by that of its reciprocal (our own). For the symbol z, a power sits between the factors, and T(z) misses the constants (our own). The hard part is proving that a given symbol has canonical factors (our own).

**Paper or page:** [A new systems theory perspective on canonical Wiener-Hopf factorization on the unit circle](https://arxiv.org/abs/2409.17324v3). It says: “G(z) = V₋(z) V₊(z)”

**Sources:**

- [A new systems theory perspective on canonical Wiener-Hopf factorization on the unit circle](https://arxiv.org/abs/2409.17324v3)

### Evolution semigroups put dichotomies in spectra

**Remember:** Put the time shift into the operator before looking at its spectrum.

*Makes the theorem clean to state or prove.* MSC 47D06 (One-parameter semigroups and linear evolution equations). arXiv math.FA. Level 4: research.

**Definition.** The evolution semigroup of a strongly continuous evolution family V(t,s) on X shifts whole trajectories: on C₀(ℝ,X) it acts by (S(h)f)(t) = V(t,t−h)f(t−h) for h ≥ 0. An exponential dichotomy splits X at each time by uniformly bounded projections P(t) with V(t,s)P(s) = P(t)V(t,s), where V(t,s) maps ker P(s) bijectively onto ker P(t). For some C, α &gt; 0 and all s ≤ t, both V(t,s) on ran P(s) and the inverse of V(t,s) on ker P(t) have norm at most C exp(−α(t−s)).

**Problem.** Let V(t,s) be a strongly continuous evolution family on a complex Banach space with ‖V(t,s)‖ ≤ M exp(ω(t−s)) for s ≤ t. It has an exponential dichotomy exactly when the generator of its evolution semigroup has no spectrum on the imaginary axis.

**How the definition helps.** The semigroup turns a two-time family into one operator with a spectrum, so a dichotomy becomes invertibility of the generator minus iξ for real ξ (our own). Given a dichotomy, integrating the stable part forward and the unstable part backward gives that inverse (our own). The converse, recovering the splitting from the spectrum, is the evolution semigroup theorem (our own).

**Paper or page:** [Generalized Evolution Semigroups and $h-$Dichotomies for Evolution Families on Banach Spaces](https://arxiv.org/abs/2511.11670v1). It says: “σ(A) ∩ iℝ = ∅.”

**Sources:** none listed. No primary source with a working link was found.

### Viewing PDHG and ADMM as proximal point steps gives one rate proof

**Remember:** The weighted step equals a saddle subgradient at the new point.

*Makes the theorem clean to state or prove.* MSC 47J25 (Iterative procedures involving nonlinear operators), 90C33, 90C47. arXiv math.OC. Level 4: research.

**Definition.** Each iteration is a proximal point step in the metric of a fixed positive semidefinite matrix P: the weighted step P(zᵢ₋₁ − zᵢ) is a saddle subgradient at the new point zᵢ = (xᵢ,λᵢ). Here the saddle subgradient of a convex–concave L is F(x,λ) = ∂ₓL(x,λ) × ∂λ(−L)(x,λ), and ‖u‖²<sub>P</sub> = ⟨u,Pu⟩.

**Problem.** Write proximal point, primal–dual hybrid gradient and alternating direction method of multipliers iterations in this form, and let (x̄,λ̄) average the first k updated pairs. For every feasible z = (x,λ), the saddle gap L(x̄,λ) − L(x,λ̄) is at most ‖z₀ − z‖²<sub>P</sub>/(2k).

**How the definition helps.** The subgradient inequalities bound each step's gap by ⟨P(zᵢ₋₁ − zᵢ), zᵢ − z⟩, which is half of ‖zᵢ₋₁ − z‖²<sub>P</sub> − ‖zᵢ − z‖²<sub>P</sub> − ‖zᵢ − zᵢ₋₁‖²<sub>P</sub> (our own). Summing telescopes, and convexity–concavity bounds the averaged gap by the mean gap. The paper supplies the update and metric for each method.

**Paper or page:** [On a Unified and Simplified Proof for the Ergodic Convergence Rates of PPM, PDHG and ADMM](https://arxiv.org/abs/2305.02165v2), [On a Unified and Simplified Proof for the Ergodic Convergence Rates of PPM, PDHG and ADMM](https://arxiv.org/abs/2305.02165v2), [On a Unified and Simplified Proof for the Ergodic Convergence Rates of PPM, PDHG and ADMM](https://arxiv.org/abs/2305.02165v2). It says: “This viewpoint shows the equivalence of these three algorithms upto a norm change, and it leads to a four-line simple proof of their 𝒪(1/k) ergodic rates.”

**Sources:**

- [Haihao Lu, Jinwen Yang, On a Unified and Simplified Proof for the Ergodic Convergence Rates of PPM, PDHG and ADMM, arXiv:2305.02165v2 (2023)](https://arxiv.org/abs/2305.02165v2)

### An operator-space spectral radius detects joint similarity to strict contractions

**Remember:** Conjugate all entries by one matrix, then minimize the norm.

*True by definition. Confidence: medium.* MSC 47L25 (Operator spaces (= matricially normed spaces)), 47A13, 46L07. arXiv math.OA, math.FA. Level 4: research.

**Definition.** For a d-tuple X = (X₁,…,X<sub>d</sub>) of matrices and an operator space norm ℰ, ρℰ(X) is the smallest ℰ-norm that one simultaneous similarity can reach: the infimum of ‖(S⁻¹X₁S,…,S⁻¹X<sub>dS</sub>)‖ℰ over invertible matrices S of the entries' size.

**Problem.** A d-tuple X of matrices is jointly similar to a tuple of strict contractions in the norm of ℰ exactly when ρℰ(X) &lt; 1. This extends Rota's theorem, which says that one matrix is similar to a strict contraction exactly when its spectral radius is below 1.

**How the definition helps.** If the infimum is below 1, some simultaneous conjugate has norm below 1; conversely, such a conjugate bounds the infimum by its norm (our own). Corollary 2.13 of the paper identifies this similarity infimum with the authors' spectral radius.

**Paper or page:** [A spectral radius for matrices over an operator space](https://arxiv.org/abs/2501.01325), [A spectral radius for matrices over an operator space](https://arxiv.org/abs/2501.01325). It says: “related to the joint spectral radius considered by Rota and Strang but differs from it and has the advantage that ρℰ(X) &lt; 1 if and only if X is simultaneously similar to a tuple of strict contractions.”

**Sources:**

- [Orr Shalit, Eli Shamovich, A spectral radius for matrices over an operator space, arXiv:2501.01325 (2025)](https://arxiv.org/abs/2501.01325)
