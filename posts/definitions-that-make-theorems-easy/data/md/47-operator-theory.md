### Rank one projectors show numerical range convexity

**Remember:** Two vectors reduce numerical range convexity to a filled ellipse.

*True by definition.* MSC 47A12 (Numerical range, numerical radius). arXiv math.FA. Level 2: later undergraduate.

**Definition.** The numerical range of a complex square matrix A consists of x\*Ax for all unit column vectors x. Equivalently, it consists of trace(AP) for all orthogonal projections P onto lines, since P = xx\*.

**Problem.** The numerical range of a complex square matrix is convex.

**How the definition helps.** The projection formula turns the two-dimensional numerical range into a linear image of a sphere (our own). The rank-one projections in two dimensions form a sphere inside the three-dimensional real affine space of trace-one Hermitian matrices (our own). Its image in the plane is a filled ellipse, a segment, or a point (our own). Any two unit vectors span a space of dimension at most two (our own). Projecting A back onto that space preserves x\*Ax there, so the segment joining the two values lies in the numerical range (our own).

**Wikipedia:** [Numerical range](https://en.wikipedia.org/wiki/Numerical_range). It says: “The image of a 2-sphere under a linear projection is a filled ellipse.”

**Sources:** none listed. No primary source with a working link was found.

### Normal pseudospectra are spectral neighborhoods

**Remember:** For normal matrices, resolvent size measures distance to the closest eigenvalue.

*True by definition.* MSC 47A55 (Perturbation theory of linear operators). arXiv math.SP, math.FA. Level 2: later undergraduate.

**Definition.** Fix ε &gt; 0 and a complex square matrix A. Its ε-pseudospectrum contains its eigenvalues and exactly those other numbers z with ‖(A − zI)⁻¹‖ ≥ 1/ε. The norm uses Euclidean lengths. Equivalently, collect all eigenvalues of A + E for matrices E with ‖E‖ ≤ ε.

**Problem.** If A is normal, meaning AA\* = A\*A, its ε-pseudospectrum consists exactly of numbers at distance at most ε from an eigenvalue.

**How the definition helps.** The inverse-norm definition reduces the neighborhood formula to reading diagonal entries in an orthonormal eigenbasis (our own). The spectral theorem supplies that basis for normal matrices (our own). The inverse norm is the largest reciprocal distance from z to an eigenvalue (our own). For the two-by-two matrix with only an upper-right 1, the only eigenvalue is zero (our own). At z = 1/2 the inverse has an entry of magnitude 4, so ε = 1/3 disproves the neighborhood formula there (our own).

**Wikipedia:** [Pseudospectrum](https://en.wikipedia.org/wiki/Pseudospectrum). It says: “The ε-pseudospectrum of a matrix A consists of all eigenvalues of matrices which are ε-close to A:”

**Paper or page:** [Stability Analysis of a Simple Discretization Method for a Class of Strongly Singular Integral Equations](https://arxiv.org/abs/2302.13159v3). It says: “‖(λ𝕀 − AΩ)⁻¹‖ = dist(λ, 𝒞)⁻¹.”

**Sources:** none listed. No primary source with a working link was found.

### A dense domain makes the adjoint of an operator well defined

**Remember:** Only a dense domain pins down the vector that represents the functional.

*Makes the theorem clean to state or prove.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)), 47B25. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** An operator T is densely defined when its domain is a dense subspace. Its adjoint T\* is defined at y when x ↦ ⟨Tx, y⟩ is continuous on the domain. Then T\*y is the vector z with ⟨Tx, y⟩ = ⟨x, z⟩ for all x in the domain.

**Problem.** Self-adjointness, symmetry and the spectral theorem for unbounded operators all use the adjoint T\*. So T\* must be a well-defined operator.

**How the definition helps.** A continuous functional on a dense subspace has exactly one continuous extension, so the vector z is unique. On a domain that is not dense, many vectors z represent the same functional, and T\* would be a multivalued relation. The page shows the adjoint is always closed, so every self-adjoint operator is closed. What stays hard is the domain of T\*: it can be the zero subspace even when T is densely defined. Von Neumann's graph method handles this by viewing T\* through the orthogonal complement of a rotated graph.

**Wikipedia:** [Unbounded operator](https://en.wikipedia.org/wiki/Unbounded_operator). It says: “The denseness of the domain is necessary and sufficient for the existence of the adjoint (if X and Y are Hilbert spaces) and the transpose; see the sections below.”

**Sources:**

- [J. von Neumann, Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren, Mathematische Annalen 102 (1930), 49–131](https://doi.org/10.1007/BF01782338)

### Closability gives densely defined adjoints

**Remember:** Without a vertical limit in the graph, the adjoint has dense domain.

*Rules out counterexamples.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)), 46C05. arXiv math.FA. Level 3: graduate.

**Definition.** A densely defined operator acts on a dense linear subspace of a Hilbert space. It is closable if the closure of its graph still assigns at most one output to each input. Its adjoint is defined at y when the functional x ↦ ⟨Tx,y⟩ is bounded on the domain.

**Problem.** A densely defined linear operator on a complex Hilbert space has a densely defined adjoint if and only if it is closable.

**How the definition helps.** In our own proof, closability excludes a limit (0,y) of graph points with y nonzero. Taking the orthogonal complement of the graph twice identifies these vertical limits with vectors y perpendicular to the adjoint domain. Only y = 0 qualifies exactly when that domain is dense. Our own counterexample sends a polynomial in L²\[0,1\] to the constant function equal to its value at zero. The polynomials (1 − x)ⁿ converge to zero in norm, but their images all equal one.

**Paper or page:** [Densely-Defined Linear Operator is Closable iff Adjoint is Densely-Defined](https://proofwiki.org/wiki/Densely-Defined_Linear_Operator_is_Closable_iff_Adjoint_is_Densely-Defined). It says: “A densely-defined linear operator on a complex Hilbert space is closable if and only if its adjoint is also densely-defined.”

**Sources:** none listed. No primary source with a working link was found.

### Closed densely defined operators are exactly those equal to their double adjoint

**Remember:** Closed plus dense is the class where taking adjoints twice gives back T.

*Makes the theorem clean to state or prove.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)), 47B25. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** An operator is closed when its graph is closed. It is densely defined when its domain is dense. For such an operator the adjoint T\* is again densely defined, so T\*\* exists.

**Problem.** Von Neumann's theorem says that T\*T and TT\* are self-adjoint for every closed densely defined T. Also I + T\*T has a bounded inverse, and the kernel of T is the orthogonal complement of the range of T\*.

**How the definition helps.** In the class of closed densely defined operators, the adjoint is an involution, so facts about T and T\* can be traded back and forth. The proof sees the graph of T\* as the orthogonal complement of the rotated graph of T. Taking the complement twice gives the closure of the graph, which is the graph itself exactly when T is closed. With this, I + T\*T and the polar decomposition of unbounded operators become available (our own remark). Outside the class, T\*\* may not exist, or it is only the closure of T.

**Wikipedia:** [Unbounded operator](https://en.wikipedia.org/wiki/Unbounded_operator). It says: “An operator T is closed and densely defined if and only if T\*\* = T.”

**Sources:**

- [J. von Neumann, Über adjungierte Funktionaloperatoren, Annals of Mathematics 33 (1932), 294–310](https://doi.org/10.2307/1968331)

### Closed graphs give complete domains

**Remember:** A Cauchy sequence in graph norm controls both input and output.

*True by definition.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** Give the domain of T the graph norm ‖x‖ + ‖Tx‖, not just ‖x‖. It measures both the input and the output. The graph is the set of pairs (x, Tx).

**Problem.** For a linear operator between Banach spaces, the domain is complete in graph norm exactly when the operator has a closed graph.

**How the definition helps.** The graph norm makes x ↦ (x, Tx) preserve distances when the product space uses the sum norm (our own). The graph is complete exactly when it is closed in the complete product space (our own). For a particular operator, one still has to prove its graph is closed (our own).

**Wikipedia:** [Unbounded operator](https://en.wikipedia.org/wiki/Unbounded_operator). It says: “An operator T is said to be closed if its graph Γ(T) is a closed set.”

**Paper or page:** [The spectral theorem for normal operators on a Clifford module](https://arxiv.org/abs/2112.05201v1). It says: “is a complete normed right module over ℝₙ.”

**Sources:** none listed. No primary source with a working link was found.

### Partial isometries give every bounded operator a polar decomposition

**Remember:** Shifts are not unitary times positive, but they are partial isometry times positive.

*Rules out counterexamples.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)), 47A68. arXiv math.FA. Level 3: graduate.

**Definition.** A partial isometry is an operator that preserves length on the orthogonal complement of its kernel. Its initial space is that complement. The absolute value of an operator A is \|A\|, the positive square root of A\*A.

**Problem.** Every bounded operator A between complex Hilbert spaces should factor as A = UP with P ≥ 0. This copies how a complex number is a unit number times its absolute value. One also wants this factorization to be unique.

**How the definition helps.** Asking only for a partial isometry leaves room for operators whose kernel and cokernel have different sizes. For the one-sided shift S, \|S\| is the identity, so S = U\|S\| forces U = S, which is not unitary. So no unitary polar decomposition exists for S. With partial isometries, A = U\|A\| always exists. It is unique when the initial space of U is the closure of the range of \|A\|. The square root of a positive operator still needs the continuous functional calculus or the spectral theorem (our own).

**Wikipedia:** [Polar decomposition](https://en.wikipedia.org/wiki/Polar_decomposition). It says: “The operator U must be weakened to a partial isometry, rather than unitary, because of the following issues.”

**Sources:** none listed. No primary source with a working link was found.

### The weak operator topology makes taking adjoints continuous, unlike the strong one

**Remember:** The adjoint only swaps the two vectors in each test.

*True by definition.* MSC 47A05 (General (adjoints, conjugates, products, inverses, domains, ranges, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** On bounded operators on a Hilbert space, the weak operator topology is the weakest topology that makes each map T ↦ ⟨Tx, y⟩ continuous. The strong operator topology instead makes each map T ↦ Tx continuous for the norm of the Hilbert space.

**Problem.** Taking the adjoint T ↦ T\* is continuous for the weak operator topology. It is not continuous for the strong operator topology.

**How the definition helps.** The weak tests are symmetric under the adjoint, because ⟨T\*x, y⟩ is the complex conjugate of ⟨Ty, x⟩. So T ↦ T\* turns each test into the conjugate of another test, and it is continuous. The strong topology has no such symmetry. The powers Bⁿ of the backward shift tend strongly to zero, but their adjoints are isometries and do not. Wikipedia says the continuity is an immediate consequence of the definition; the counterexample is our own.

**Wikipedia:** [Weak operator topology](https://en.wikipedia.org/wiki/Weak_operator_topology). It says: “The adjoint operation T → T\*, as an immediate consequence of its definition, is continuous in WOT.”

**Sources:** none listed. No primary source with a working link was found.

### An operator that is not closed has the whole plane as spectrum

**Remember:** Spectral theory of unbounded operators starts with closed operators, or nothing survives.

*Rules out counterexamples.* MSC 47A10 (Spectrum, resolvent), 47A05. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** An operator T defined on a subspace of a Banach space is closed when its graph is a closed set. A complex number λ is in the spectrum of T when T − λ has no bounded inverse defined on the whole space.

**Problem.** For bounded operators, the spectrum is a compact set, and λ is in it exactly when T − λ is not a bijection. One wants the same theory for unbounded operators such as derivatives.

**How the definition helps.** If T − λ has a bounded inverse defined everywhere, the graph of that inverse is closed, so T is closed (our own short proof). So an operator that is not closed has every λ in its spectrum, and the spectrum tells us nothing. For a closed operator, the closed graph theorem makes the inverse bounded as soon as it exists. Then λ is in the spectrum exactly when T − λ is not a bijection from its domain, as for bounded operators. The page says the spectrum of an unbounded operator is a closed set and can be empty. For a closed operator it can also be all of ℂ (our own).

**Wikipedia:** [Spectrum (functional analysis)](https://en.wikipedia.org/wiki/Spectrum_%28functional_analysis%29), [Closed linear operator](https://en.wikipedia.org/wiki/Closed_linear_operator). It says: “If the operator T is not closed, then σ(T)=ℂ.”

**Sources:** none listed. No primary source with a working link was found.

### Compact resolvents give discrete spectra

**Remember:** Study the bounded inverse to find the unbounded spectrum.

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

**How the definition helps.** The invertibility definition puts more numbers in the spectrum than the eigenvalues, so the theorem becomes true. If the spectrum meant only the eigenvalues, the theorem would be false: the right shift on ℓ² has no eigenvalues. The number 0 is still in its spectrum, because the inverse of the shift is defined only on a non-dense subspace. Suppose the spectrum were empty. Then the resolvent (T − λI)⁻¹ would be holomorphic and bounded on all of ℂ and zero at infinity. By the vector-valued Liouville theorem it would be zero everywhere, which is impossible. The proof needs complex scalars, and the article notes that for unbounded operators the spectrum can be empty.

**Wikipedia:** [Spectrum (functional analysis)](https://en.wikipedia.org/wiki/Spectrum_%28functional_analysis%29). It says: “In fact every bounded linear operator on a complex Banach space must have a non-empty spectrum.”

**Sources:** none listed. No primary source with a working link was found.

### Graph norms test resolvent compactness

**Remember:** Compactness of the domain inclusion is compactness of the inverse in disguise.

*True by definition. Confidence: medium.* MSC 47A10 (Spectrum, resolvent). arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Let A be a closed linear operator on a Banach space. Give its domain the graph norm ‖u‖ + ‖Au‖.

**Problem.** Suppose a closed operator has a bounded shifted inverse. It has compact resolvent exactly when its graph norm unit ball has compact closure in the original space.

**How the definition helps.** With the graph norm, A − zI gives a bounded bijection from the domain onto the space whenever z lies outside the spectrum (our own). Its inverse is bounded by the bounded inverse theorem (our own). Composing that inverse with the domain inclusion gives the usual shifted inverse (our own). Thus the usual inverse is compact exactly when the inclusion sends the domain unit ball to a set with compact closure (our own).

**Paper or page:** [Conditions for sectoriality and compactness of the resolvent for a non-self-adjoint Sturm--Liouville operator with singular distributional potential](https://arxiv.org/abs/2503.16172v1). It says: “‖L₀y‖ + ‖y‖ ≤ 1”

**Sources:** none listed. No primary source with a working link was found.

### The essential spectrum is defined to survive compact perturbations

**Remember:** What no compact perturbation can remove is, by definition, essential.

*True by definition.* MSC 47A10 (Spectrum, resolvent), 47A55. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** One definition takes the essential spectrum of T to be the intersection of the spectra of T + B over all compact operators B. A compact operator maps bounded sets to sets with compact closure. For a self-adjoint T, the essential spectrum is the spectrum with the isolated eigenvalues of finite multiplicity removed.

**Problem.** Weyl's theorem says that adding a compact self-adjoint operator does not change the essential spectrum of a self-adjoint operator.

**How the definition helps.** With the intersection definition, invariance under compact perturbation is true at once, because B ranges over all compact operators. The work moves to the theorem that the definitions agree. For self-adjoint operators, Weyl's criterion describes the same set by sequences of unit vectors that tend weakly to zero with (T − λ)ψ → 0. The page lists five definitions, and four of them are invariant under compact perturbation. For example, the momentum operator has the whole real line as essential spectrum.

**Wikipedia:** [Essential spectrum](https://en.wikipedia.org/wiki/Essential_spectrum). It says: “This explains why it is called the essential spectrum: Weyl (1910) originally defined the essential spectrum of a certain differential operator to be the spectrum independent of boundary conditions.”

**Sources:**

- [H. Weyl, Über gewöhnliche Differentialgleichungen mit Singularitäten und die zugehörigen Entwicklungen willkürlicher Funktionen, Mathematische Annalen 68 (1910), 220–269](https://doi.org/10.1007/BF01474161)

### Averaging over a finite group is orthogonal projection onto invariant functions

**Remember:** Average over the whole group to keep exactly the invariant part.

*True by definition.* MSC 47A15 (Invariant subspaces of linear operators), 60J05, 20C05. arXiv math.PR, math.FA. Level 3: graduate.

**Definition.** Let a finite group G act on a space X, and let π be a probability measure on X that every group element preserves. The orbit average sends a function f to Qf(x) = (1/\|G\|) Σ f(gx), the sum over g in G. A function is invariant if f(gx) = f(x) for all g and x.

**Problem.** In L²(π), the space of square-integrable functions, Q is the orthogonal projection onto the invariant functions. As a Markov kernel, Q is also reversible with respect to π.

**How the definition helps.** The definition is an average over the group, so the projection properties follow from reindexing the sum. Our own proof follows. Replacing x by hx permutes the terms of the sum, so Qf is invariant. An invariant f satisfies Qf = f, so Q² = Q. Because π is invariant, ∫ f(gx)h(x) dπ = ∫ f(x)h(g⁻¹x) dπ, so Q is self-adjoint. The paper's harder results use such averages to improve mixing of Markov chains.

**Paper or page:** [Group-averaged Markov chains: mixing improvement](https://arxiv.org/abs/2509.02996v2). It says: “Q is the projection operator onto V”

**Sources:**

- [Michael C. H. Choi, Youjia Wang, Group-averaged Markov chains: mixing improvement, arXiv:2509.02996 (2025)](https://arxiv.org/abs/2509.02996v2)

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

**Definition.** For bounded Hilbert space operators, the Fredholm definition asks for closed range and finite-dimensional kernels for T and T\*. It is not enough to count the two kernels without checking the range.

**Problem.** A bounded Fredholm operator has finite-dimensional quotient by its range. The dimension of this quotient equals the dimension of the kernel of the adjoint.

**How the definition helps.** Closed range lets each quotient class have exactly one representative orthogonal to the range (our own). These representatives form the kernel of the adjoint (our own). On the space of square-summable sequences, the diagonal operator with entries 1/n has both kernels zero (our own). Its range contains every finite sequence but omits the square-summable sequence (1/n), whose preimage would be the constant sequence (our own). Thus its range is dense and its quotient is nonzero (our own).

**Paper or page:** [Perturbations of APS Boundary Conditions for Lorentzian Dirac Operators](https://arxiv.org/abs/2408.16696v3). It says: “Ker(T) and Ker(T\*) are finite dimensional and T has closed range”

**Sources:** none listed. No primary source with a working link was found.

### Fredholm as invertible modulo compacts makes compact perturbations harmless

**Remember:** Compact operators vanish in the Calkin algebra, so they cannot spoil invertibility there.

*True by definition.* MSC 47A53 ((Semi-) Fredholm operators; index theories), 47L20. arXiv math.FA. Level 3: graduate.

**Definition.** An operator is Fredholm when its kernel and cokernel are finite-dimensional and its range is closed. The Calkin algebra is the algebra of bounded operators divided by the ideal of compact operators. Atkinson's theorem says that T is Fredholm exactly when its image in the Calkin algebra is invertible.

**Problem.** If T is Fredholm and K is compact, then T + K is Fredholm with the same index. The index is the dimension of the kernel minus the dimension of the cokernel.

**How the definition helps.** In the Calkin algebra, T and T + K have the same image, so if one is invertible, the other is too. Thus T + K is Fredholm with no further work. The work moves into Atkinson's theorem, which shows that the algebraic definition agrees with the classical one. Equality of the index still needs the fact that the index is locally constant. The page uses the path T + sK for s in \[0, 1\] for this. The Calkin picture also gives the index through K-theory.

**Wikipedia:** [Atkinson's theorem](https://en.wikipedia.org/wiki/Atkinson%27s_theorem), [Calkin algebra](https://en.wikipedia.org/wiki/Calkin_algebra), [Fredholm operator](https://en.wikipedia.org/wiki/Fredholm_operator). It says: “In other words, an operator T ∈ L(H) is Fredholm, in the classical sense, if and only if its projection in the Calkin algebra is invertible.”

**Sources:**

- [J. W. Calkin, Two-sided ideals and congruences in the ring of bounded operators in Hilbert space, Annals of Mathematics 42 (1941), 839–873](https://doi.org/10.2307/1968771)
- [F. V. Atkinson, The normal solvability of linear equations in normed spaces, Matematicheskii Sbornik 28(70) (1951), 3–14](https://zbmath.org/?q=an:0042.12001)

### The Fredholm index gives the Fredholm alternative

**Remember:** Fredholm means invertible up to finite-dimensional errors; the index counts those errors.

*Makes the theorem clean to state or prove.* MSC 47A53 ((Semi-) Fredholm operators; index theories), 47B07. arXiv math.FA. Level 3: graduate.

**Definition.** A Fredholm operator is a bounded operator T between Banach spaces whose kernel and cokernel are finite-dimensional. The cokernel is the target space divided by the range of T. The index of T is dim ker T − dim coker T.

**Problem.** The Fredholm alternative for equations λφ − Kφ = f, with K compact (it maps bounded sets to sets with compact closure) and λ ≠ 0. Also the stability of solvability under small or compact changes to the operator.

**How the definition helps.** The index is an integer that small and compact changes cannot move, and index 0 makes injective and surjective the same. The index is an integer because the kernel and cokernel are finite-dimensional. The article states that the index is locally constant on the open set of Fredholm operators, so small or compact perturbations do not change it. After you divide by λ, the operator I − K is a compact perturbation of the identity, so it has index 0. So it is injective exactly when it is surjective: this is the Fredholm alternative, the infinite-dimensional form of the rank–nullity theorem. The article also states that the Fredholm operators are exactly the operators that are invertible modulo compact operators. Our own remark: to compute the index of a particular operator, as in the Atiyah–Singer index theorem, is still hard.

**Wikipedia:** [Fredholm operator](https://en.wikipedia.org/wiki/Fredholm_operator), [Fredholm alternative](https://en.wikipedia.org/wiki/Fredholm_alternative). It says: “If a Fredholm operator is modified slightly, it stays Fredholm and its index remains the same.”

**Sources:**

- [Fredholm, E. I. (1903). Sur une classe d'équations fonctionnelles. Acta Mathematica 27, 365–390.](https://doi.org/10.1007/BF02421317)

### Norm resolvents block spectral pollution

**Remember:** Uniform control of shifted inverses prevents false spectral limits.

*Rules out counterexamples.* MSC 47A55 (Perturbation theory of linear operators). arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** For self-adjoint operators on one complex Hilbert space, compare their shifted inverses (A − iI)⁻¹. Norm resolvent convergence requires these inverses to converge in operator norm. Strong resolvent convergence requires convergence on each fixed vector.

**Problem.** If self-adjoint operators converge in norm resolvent, a finite limit of their spectral points belongs to the limit spectrum. Strong resolvent convergence does not suffice.

**How the definition helps.** Norm convergence keeps every sufficiently late term invertible whenever the limit is invertible (our own). A number λ is outside the spectrum exactly when I − (λ − i)(A − iI)⁻¹ is invertible (our own). This bounded test still works when λ varies with the operator (our own). Projections onto successive basis vectors converge strongly to zero while all have the eigenvalue 1 (our own). The shifted inverses also converge strongly because each is a fixed linear combination of the identity and its projection (our own).

**Paper or page:** [Diverging eigenvalues in domain truncations of Schrödinger operators with complex potentials](https://arxiv.org/abs/2107.10557v1). It says: “converge to T∞ in the norm resolvent sense (hence there is no spectral pollution)”

**Sources:** none listed. No primary source with a working link was found.

### Defining the continuous functional calculus by uniqueness makes composition automatic

**Remember:** A calculus is fixed once you know where the coordinate goes.

*True by definition.* MSC 47A60 (Functional calculus for linear operators), 46L05. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** Let a be a normal element of a unital C\*-algebra, so a commutes with its adjoint a\*. Let σ(a) be its spectrum. The continuous functional calculus of a is the unique unital homomorphism from C(σ(a)) that preserves adjoints and sends the coordinate z to a. Another definition sets f(a) as a limit of polynomials in a and a\*, chosen to approximate f by polynomials in z and z̄.

**Problem.** Let f be continuous on σ(a) and let g be continuous on σ(f(a)). Then (g ∘ f)(a) = g(f(a)).

**How the definition helps.** Uniqueness does the work, because the map g ↦ (g ∘ f)(a) is a unital homomorphism that preserves adjoints. It sends the coordinate function to f(a), so it is the calculus of f(a). This needs σ(f(a)) = f(σ(a)), so that g ∘ f is defined on σ(a). That fact is the spectral mapping theorem. The remaining work is existence, by the Gelfand representation of commutative C\*-algebras, and uniqueness, by the Stone–Weierstrass theorem. The nLab proves existence and uniqueness; the composition argument is our own.

**nLab:** [functional calculus](https://ncatlab.org/nlab/show/functional+calculus). It says: “To see uniqueness, notice that any other morphism with these properties coincides with φ on all polynomials in ι and ῑ.”

**Sources:** none listed. No primary source with a working link was found.

### Square roots become ordinary functions

**Remember:** Apply the scalar square root on the spectrum.

*Rules out counterexamples.* MSC 47A60 (Functional calculus for linear operators). arXiv math.FA. Level 3: graduate.

**Definition.** A bounded self-adjoint operator T is positive if ⟨Tx,x⟩ ≥ 0 for every x. The spectral theorem lets us apply continuous functions to T by evaluating them on its spectrum. Applying t ↦ √t defines the positive square root.

**Problem.** Every bounded positive operator on a Hilbert space has a unique positive square root.

**How the definition helps.** Requiring a positive root removes the sign ambiguity even for the identity, which also has the square root −I (our own). The functional calculus preserves products and positivity, so applying the scalar square root gives a positive square root (our own). If B is any positive square root, applying √t to B² gives B by composition (our own). The spectral theorem supplies the functional calculus (our own).

**Paper or page:** [The spectral theorem for normal operators on a Clifford module](https://arxiv.org/abs/2112.05201v1). It says: “Then there exists a unique positive operator A ∈ ℬ(ℋₙ) such that A² = T.”

**Sources:** none listed. No primary source with a working link was found.

### Rigged Hilbert spaces hold Dirac's eigenvectors as generalized vectors

**Remember:** Fewer test vectors, more functionals: the missing eigenvectors live in the dual.

*Makes the theorem clean to state or prove.* MSC 47A70 ((Generalized) eigenfunction expansions of linear operators; rigged Hilbert spaces), 46A11. arXiv math.FA, math-ph. Level 3: graduate.

**Definition.** A rigged Hilbert space (or Gelfand triple) is a chain Φ ⊂ ℋ ⊂ Φ′. Here Φ is a dense subspace of the Hilbert space ℋ with a finer topology, usually nuclear (such as Schwartz space), and Φ′ is the space of continuous antilinear functionals on Φ. A generalized eigenvector of an operator A is an F in Φ′ with A′F = λF. Here A′ is the extension of A to Φ′ by duality.

**Problem.** The position and momentum operators on L²(ℝ) have no eigenvectors in L²(ℝ). Yet physicists expand states in eigenstates \|x⟩ and \|p⟩, with ⟨x\|x′⟩ = δ(x − x′) and ∫\|λ⟩⟨λ\| dμ(λ) = id. The second formula says that the eigenstates add up to the identity.

**How the definition helps.** The larger space Φ′ contains the eigenvectors that ℋ lacks, so the physicists' statement becomes true there. In ℋ the statement 'every self-adjoint operator has a complete set of eigenvectors' is false. For example, X ψ = ξψ forces ψ = 0 almost everywhere, and eⁱᵏˣ is not square-integrable. In Φ′ the delta distributions and plane waves are honest generalized eigenvectors. The real content is the nuclear spectral theorem of Gel'fand–Kostyuchenko and Maurin, which needs Φ to be nuclear. The answer also depends on the choice of Φ. A test space that is too small gives spurious eigenvalues, and one that is too coarse loses the eigenvectors.

**nLab:** [rigged Hilbert space](https://ncatlab.org/nlab/show/rigged+Hilbert+space). It says: “by enlarging the given Hilbert space ℋ to a space of generalized vectors in which the missing eigenvectors do exist”

**Sources:**

- [I. M. Gel'fand, N. Ya. Vilenkin, Generalized Functions, Vol. 4: Applications of Harmonic Analysis (1961; AMS Chelsea reprint 2016)](https://doi.org/10.1090/chel/380)
- [John E. Roberts, Rigged Hilbert spaces in quantum mechanics, Communications in Mathematical Physics 3 (1966) 98–119](https://doi.org/10.1007/BF01645448)

### Defining singular values by low-rank approximation makes them shrink under multiplication

**Remember:** Multiplying cannot raise the rank of an approximation.

*True by definition.* MSC 47B06 (Riesz operators; eigenvalue distributions; approximation numbers, \\(s\\)-numbers, Kolmogorov numbers, entropy numbers, etc. of operators), 47B10. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** For a compact operator T between Hilbert spaces, let sₙ(T) be the operator-norm distance from T to the operators of rank less than n. The spectral definition takes the nth largest eigenvalue of \|T\|, the positive square root of T\*T, with zeros added when needed.

**Problem.** Let T be compact and let A and B be bounded, with the product ATB defined. Then sₙ(ATB) ≤ ‖A‖ sₙ(T) ‖B‖ for every n.

**How the definition helps.** If L has rank less than n, so does ALB, and ‖ATB − ALB‖ ≤ ‖A‖ ‖T − L‖ ‖B‖. Taking the infimum over L gives the bound. The work moves to the theorem that the two definitions agree. It says that the best approximation of rank less than n cuts off the singular value expansion of T. For matrices this is the Eckart–Young theorem. With the spectral definition, the bound needs a minimax argument for eigenvalues. Wikipedia gives the infimum formula, and the comparison is our own.

**Wikipedia:** [Singular value](https://en.wikipedia.org/wiki/Singular_value). It says: “σₙ(T) = inf { ‖T−L‖ : L is an operator of finite rank &lt; n }.”

**Sources:** none listed. No primary source with a working link was found.

### Weak limits reveal compact operators

**Remember:** An orthonormal sequence tends weakly to zero while each vector keeps norm one.

*Rules out counterexamples.* MSC 47B07 (Linear operators defined by compactness properties). arXiv math.FA. Level 3: graduate.

**Definition.** One can define compactness for a bounded linear operator from a Hilbert space by requiring weakly convergent sequences to have norm-convergent images. Weak convergence tests against each fixed vector by inner product. The usual definition requires bounded sets to have images with compact closure.

**Problem.** On an infinite-dimensional Hilbert space the identity is weakly compact but not compact. Weak compactness asks only for weakly compact closure of the image of the unit ball.

**How the definition helps.** The sequence test detects failure of compactness using any infinite orthonormal sequence (our own). That sequence tends weakly to zero but stays at norm one (our own). Every bounded sequence in a Hilbert space has a weakly convergent subsequence (our own). This fact gives the reverse implication from the sequence test to compactness and explains weak compactness of the unit ball (our own).

**nLab:** [compact operator](https://ncatlab.org/nlab/show/compact+operator). It says: “For Hilbert spaces and more generally for reflexive Banach spaces, the two notions are equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### Adjoints preserve Hilbert–Schmidt norms

**Remember:** Taking the adjoint swaps rows and columns and preserves absolute values.

*True by definition.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** For a bounded operator between separable Hilbert spaces, sum the squared absolute values of its matrix entries in orthonormal bases. If the sum is finite, its square root is the Hilbert–Schmidt norm. An equivalent definition sums the squared singular values, the eigenvalues of √(T\*T), before taking the square root.

**Problem.** The adjoint of a Hilbert–Schmidt operator is Hilbert–Schmidt with the same norm.

**How the definition helps.** Taking the adjoint swaps matrix entries and takes their complex conjugates (our own). The sum of their squared absolute values is unchanged (our own). Parseval’s identity justifies the matrix formula in any basis (our own).

**Wikipedia:** [Hilbert–Schmidt operator](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Schmidt_operator). It says: “The Hilbert–Schmidt norm does not depend on the choice of orthonormal basis.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the Fredholm determinant by eigenvalues makes its zeros detect non-invertibility

**Remember:** A convergent product of nonzero factors cannot be zero.

*True by definition. Confidence: medium.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)), 45B05. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** Let T be a trace-class operator on a Hilbert space, so the sum of its singular values is finite. Define det(I + T) as the product of 1 + λ over the nonzero eigenvalues λ of T, repeated by algebraic multiplicity. Fredholm's definition for integral operators instead uses a series of integrals of determinants built from the kernel.

**Problem.** For a trace-class operator T, det(I + T) = 0 exactly when I + T has no bounded inverse.

**How the definition helps.** With the eigenvalue definition the proof is short. Weyl's inequality bounds Σ\|λ\| by the sum of the singular values, so the product converges. It is then zero only if some factor 1 + λ is zero. Because T is compact, I + T fails to be invertible exactly when −1 is an eigenvalue of T. The hard work moves to Lidskii's theorem, which shows that the eigenvalue product agrees with the other definitions, such as Fredholm's series. The nLab states the result in Fredholm's setting; the comparison of definitions is our own.

**nLab:** [Fredholm determinant](https://ncatlab.org/nlab/show/Fredholm+determinant). It says: “and d is an entire function of λ such that d(λ) ≠ 0 iff the integral equation has a unique solution.”

**Sources:**

- [Ivar Fredholm, Sur une classe d’équations fonctionnelles (1903)](https://doi.org/10.1007/BF02421317)
- [Folkmar Bornemann, On the numerical evaluation of Fredholm determinants (2010)](https://doi.org/10.1090/S0025-5718-09-02280-7)

### Defining trace class by completing finite-rank operators makes the trace cyclic

**Remember:** Cyclicity on finite rank passes to the limit.

*True by definition. Confidence: medium.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** On a Hilbert space, the trace norm of a finite-rank operator is the sum of its singular values. Define the trace-class operators as the completion of the finite-rank operators in this norm, and extend the finite-rank trace by continuity. The usual definition takes all compact operators whose singular values have a finite sum, with the trace Σ⟨Teᵢ, eᵢ⟩ over an orthonormal basis.

**Problem.** For a trace-class operator T and a bounded operator B on a Hilbert space, tr(TB) = tr(BT).

**How the definition helps.** For finite-rank T, write T as a finite sum of maps v ↦ fᵢ(v)xᵢ, and then both traces equal Σ fᵢ(Bxᵢ). Both sides are continuous in T for the trace norm, because ‖TB‖₁ and ‖BT‖₁ are at most ‖T‖₁‖B‖. Finite-rank operators are dense by definition, so the identity holds for all trace-class T. The work moves to the theorem that the completion equals the usual trace class, with the same trace. With the usual definition, the proof uses the polar decomposition or a computation with two bases. Wikipedia states the density; the rest is our own account.

**Wikipedia:** [Trace class](https://en.wikipedia.org/wiki/Trace_class). It says: “the space of all finite-rank operators is a dense subspace”

**Sources:** none listed. No primary source with a working link was found.

### Trace norm preserves determinant multiplication

**Remember:** Approximate both factors and multiply before taking limits.

*True by definition.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)), 45B05. arXiv math.FA. Level 3: graduate.

**Definition.** For operators on a Hilbert space, the trace norm sums the singular values, the eigenvalues of √(A∗A). Define det(I + A) by continuous extension from finite-rank operators in this norm. A kernel-based definition instead integrates a series of determinants.

**Problem.** If A and B have finite trace norm, the Fredholm determinant of (I + A)(I + B) is the product of their determinants.

**How the definition helps.** Finite-rank approximations to A and B have ranges inside one finite-dimensional space, where determinants multiply (our own). Their products converge in trace norm, so continuity passes the identity to the limit (our own). The work lies in proving the continuous extension exists and agrees with the kernel series where both apply (our own).

**Wikipedia:** [Fredholm determinant](https://en.wikipedia.org/wiki/Fredholm_determinant). It says: “The function det defines a homomorphism of type G → ℂ×”

**Sources:**

- [Barry Simon, Notes on infinite determinants of Hilbert space operators (1977)](https://doi.org/10.1016/0001-8708(77)90057-3)

### Trace-class operators have a trace that does not depend on the basis

**Remember:** If \|T\| has finite trace, the trace of T converges absolutely.

*True by definition. Confidence: medium.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)), 47B06. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** Let T be a bounded operator on a separable Hilbert space, and let \|T\| = √(T\*T) be its absolute value. T is trace class if Σₖ ⟨\|T\|eₖ, eₖ⟩ is finite for an orthonormal basis (eₖ). In words, the diagonal entries of \|T\| have a finite sum.

**Problem.** The trace Σₖ ⟨Teₖ, eₖ⟩ is the sum of the diagonal entries of T. It should be a finite number that does not depend on the orthonormal basis. By Lidskii's theorem, it equals the sum of the eigenvalues, counted with algebraic multiplicity.

**How the definition helps.** The class is chosen so that the trace is well defined. The article defines trace-class operators as the ones for which a trace exists that is finite and independent of the basis. Our own remark: for a general bounded operator, the diagonal sum can diverge, or it can change when the basis is reordered or rotated. So the trace must be restricted to such a class. Lidskii's theorem, that the trace equals the sum of the eigenvalues, is the hard part, and the definition does not give it.

**Wikipedia:** [Trace class](https://en.wikipedia.org/wiki/Trace_class). It says: “a trace-class operator is a linear operator for which a trace may be defined, such that the trace is a finite number independent of the choice of basis used to compute the trace.”

**Sources:** none listed. No primary source with a working link was found.

### Two Hilbert–Schmidt factors give trace class

**Remember:** Two square sums give one absolute sum.

*Rules out counterexamples.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)). arXiv math.FA. Level 3: graduate.

**Definition.** A Hilbert–Schmidt operator is a compact operator on a Hilbert space whose singular values have a finite sum of squares. These are the eigenvalues of the positive square root of its adjoint times itself, counted with multiplicity. Compact operators need only have singular values tending to zero.

**Problem.** The product of two Hilbert–Schmidt operators is trace class, meaning its singular values are summable.

**How the definition helps.** In our own proof, the Hilbert–Schmidt condition bounds the sum of the trace norms of rank-one terms for the product AB. Insert an orthonormal basis between the factors. Each basis vector e contributes one term with trace norm ‖Ae‖ ‖B∗e‖, where B∗ is the adjoint. Both sequences of norms are square summable, so Cauchy–Schwarz gives a finite sum. Our own counterexample is the compact diagonal operator with entries 1/√n. Its square has entries 1/n, whose sum diverges.

**Wikipedia:** [Hilbert–Schmidt operator](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Schmidt_operator). It says: “The product of two Hilbert–Schmidt operators has finite trace-class norm”

**Sources:** none listed. No primary source with a working link was found.

### The functional calculus definition makes Riesz projections of normal operators orthogonal

**Remember:** The indicator χ squares to itself and equals its own conjugate.

*True by definition.* MSC 47B15 (Hermitian and normal operators (spectral measures, functional calculus, etc.)), 47A60. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Let A be a bounded normal operator on a Hilbert space, so A commutes with its adjoint. Let σ₀ be a part of its spectrum that is both open and closed in the spectrum. Define the projection as χ(A), where χ is 1 on σ₀ and 0 on the rest of the spectrum. The Riesz definition instead integrates (z − A)⁻¹/(2πi) around a contour that encloses σ₀ and no other part of the spectrum.

**Problem.** For a bounded normal operator, the Riesz projection onto an isolated part of the spectrum is an orthogonal projection.

**How the definition helps.** The continuous functional calculus preserves products and adjoints, and χ² = χ = χ̄, so χ(A) is a self-adjoint idempotent. A self-adjoint idempotent is an orthogonal projection. The work is to show that the contour integral equals χ(A). This holds because the holomorphic and continuous functional calculi agree on functions that are holomorphic near the spectrum. For an operator that is not normal, the contour integral is still idempotent but need not be self-adjoint. The nLab states the result; the argument is our own.

**nLab:** [Riesz projection](https://ncatlab.org/nlab/show/Riesz+projection). It says: “is an orthogonal projection, and it coincides with the spectral projection”

**Sources:** none listed. No primary source with a working link was found.

### Essential self-adjointness gives a quantum Hamiltonian a unique time evolution

**Remember:** Essentially self-adjoint: take the closure, and no boundary conditions are left to choose.

*True by definition.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 81Q10, 47D03. arXiv math.FA, math-ph. Level 3: graduate.

**Definition.** A symmetric operator H on a Hilbert space satisfies ⟨Hx, y⟩ = ⟨x, Hy⟩ for all x and y in its domain, which is a dense subspace. H is essentially self-adjoint if its closure is self-adjoint. Equivalently, H has exactly one self-adjoint extension.

**Problem.** A quantum Hamiltonian H is often written down only on nice functions. The question is when H then determines a unique time evolution exp(−itH).

**How the definition helps.** By Stone's theorem, a unique time evolution corresponds to a unique self-adjoint extension, and that is the definition of essential self-adjointness. Stone's theorem gives a one-to-one correspondence between self-adjoint operators and strongly continuous one-parameter unitary groups (families U(t) of unitary operators with U(s + t) = U(s)U(t), continuous in t). Von Neumann's criterion makes the condition checkable. It uses the two deficiency indices of H, the dimensions of the kernels of H\* − i and H\* + i, where H\* is the adjoint of H. A symmetric operator has self-adjoint extensions if and only if its two deficiency indices are equal, and a unique one if and only if both are zero. The hard part is to check the criterion for a given operator. The article notes that P²/2m − X⁴ (P is momentum and X is position) on smooth rapidly decaying functions is not essentially self-adjoint; this matches a classical particle that escapes to infinity in finite time.

**Wikipedia:** [Self-adjoint operator](https://en.wikipedia.org/wiki/Self-adjoint_operator), [Extensions of symmetric operators](https://en.wikipedia.org/wiki/Extensions_of_symmetric_operators), [Stone's theorem on one-parameter unitary groups](https://en.wikipedia.org/wiki/Stone%27s_theorem_on_one-parameter_unitary_groups). It says: “A symmetric operator A is said to be essentially self-adjoint if the closure of A is self-adjoint. Equivalently, A is essentially self-adjoint if it has a unique self-adjoint extension.”

**Sources:**

- [von Neumann, J. (1930). Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren. Mathematische Annalen 102, 49–131.](https://doi.org/10.1007/BF01782338)
- [Stone, M. H. (1932). On one-parameter unitary groups in Hilbert space. Annals of Mathematics 33(3), 643–648.](https://doi.org/10.2307/1968538)

### Quadratic forms give every nonnegative symmetric operator a self-adjoint extension

**Remember:** Complete the energy form, and the self-adjoint operator falls out by Riesz.

*Makes the theorem clean to state or prove.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A20, 47A07. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** A symmetric operator T is nonnegative when ⟨ξ, Tξ⟩ ≥ 0 on its domain. The form Q(ξ, η) = ⟨ξ, Tη⟩ + ⟨ξ, η⟩ is then an inner product on the domain. Its completion is a Hilbert space H₁.

**Problem.** The Friedrichs extension theorem says that every nonnegative densely defined symmetric operator has a nonnegative self-adjoint extension. It exists even when the deficiency indices are not zero.

**How the definition helps.** The completed form space H₁ turns the extension problem into the Riesz representation theorem on a Hilbert space. The hard step is to show that the inclusion of the domain into the Hilbert space extends to an injective map on H₁. Then H₁ can be seen as a subspace. The Riesz theorem then defines a self-adjoint operator A whose form is Q, and A − I extends T. For the Laplacian on a bounded domain this gives the Dirichlet boundary condition (our own example).

**Wikipedia:** [Friedrichs extension](https://en.wikipedia.org/wiki/Friedrichs_extension). It says: “This extension is particularly useful in situations where an operator may fail to be essentially self-adjoint or whose essential self-adjointness is difficult to show.”

**Sources:**

- [K. Friedrichs, Spektraltheorie halbbeschränkter Operatoren und Anwendung auf die Spektralzerlegung von Differentialoperatoren, Mathematische Annalen 109 (1934), 465–487](https://doi.org/10.1007/BF01449150)

### Spectral measures replace eigenbases in the spectral theorem

**Remember:** Diagonalize with a measure of projections, not with a basis of eigenvectors.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A60. arXiv math.FA, math.SP. Level 3: graduate.

**Definition.** A spectral measure, also called a resolution of the identity, is a map E from Borel subsets of the real line to orthogonal projections on a Hilbert space. It is countably additive. A self-adjoint operator is then written as A = ∫ λ E(dλ): A is an integral of the values λ, each weighted by a projection.

**Problem.** Generalize the diagonalization of Hermitian matrices to all bounded and unbounded self-adjoint operators on Hilbert space.

**How the definition helps.** Spectral measures do not need eigenvectors, so the theorem can cover operators that have none. In infinite dimensions a self-adjoint operator need not have a basis of eigenvectors. For example, multiplication by x on L²\[0,1\] has no eigenvectors. So the finite-dimensional statement is false there. With spectral measures in place of eigenbases, the statement is clean: self-adjoint operators correspond one to one with spectral measures. The proof is still real work, and the page sketches one route through the Gelfand representation.

**nLab:** [spectral theorem](https://ncatlab.org/nlab/show/spectral+theorem). It says: “theorem: there is a one to one correspondence of (bounded or unbounded) selfadjoint operators A and spectral measures E such that A = ∫ λ E(dλ)”

**Sources:**

- [J. von Neumann, Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren, Mathematische Annalen 102 (1930) 49–131](https://doi.org/10.1007/BF01782338)

### The Cayley transform turns self-adjoint extensions into unitary extensions

**Remember:** Self-adjoint extensions exist exactly when the two missing dimensions match.

*Makes the theorem clean to state or prove.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A20. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Let A be a closed, densely defined symmetric operator. Its Cayley transform is W(A) = (A − i)(A + i)⁻¹, defined on the range of A + i. It is an isometry on its closed domain. The deficiency indices are the dimensions of the orthogonal complements of its domain and its range.

**Problem.** Von Neumann's theorem says that a densely defined symmetric operator has a self-adjoint extension exactly when its two deficiency indices are equal. It has exactly one when both are zero.

**How the definition helps.** The transform replaces an unbounded problem with a problem about isometries, which is plain geometry. An isometry with a closed domain extends to a unitary operator exactly when the complements of its domain and range have the same dimension. A is self-adjoint exactly when W(A) is unitary, and symmetric extensions of A match isometric extensions of W(A). So the extension question becomes a count of dimensions. What stays hard is to compute the deficiency indices for a given differential operator (our own). This needs a study of the solutions of A\*u = ±iu (our own).

**Wikipedia:** [Extensions of symmetric operators](https://en.wikipedia.org/wiki/Extensions_of_symmetric_operators), [Cayley transform](https://en.wikipedia.org/wiki/Cayley_transform). It says: “finding self-adjoint extensions, with various requirements, of symmetric operators is equivalent to finding unitary extensions of suitable partial isometries.”

**Sources:**

- [J. von Neumann, Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren, Mathematische Annalen 102 (1930), 49–131](https://doi.org/10.1007/BF01782338)

### The spectral theorem needs self-adjoint operators, not only symmetric ones

**Remember:** Symmetric means A is contained in A\*; self-adjoint means the domains match too.

*Rules out counterexamples.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A60. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Let A be a densely defined operator on a Hilbert space, with adjoint A\*. A is symmetric if ⟨Ax, y⟩ = ⟨x, Ay⟩ for all x and y in its domain; this means A ⊆ A\*. A is self-adjoint if also A = A\*, which includes equality of the domains.

**Problem.** The spectral theorem: the operator is unitarily equivalent to multiplication by a real function. So it has a real spectrum and a functional calculus (a way to apply functions to the operator).

**How the definition helps.** Requiring A = A\* excludes the bad choices of domain, and it is exactly the hypothesis that the spectral theorem needs. By the Hellinger–Toeplitz theorem, a symmetric operator defined on the whole space is bounded. So unbounded observables, such as energy, must have a smaller domain, and the domain becomes part of the definition. The article's example is A = −i d/dx on L²\[0, 1\]. With the boundary condition f(0) = f(1) = 0, A is symmetric but not essentially self-adjoint (its closure is not self-adjoint), and it has no eigenvectors. With no boundary condition, every complex number is an eigenvalue. With the periodic condition f(0) = f(1), A is essentially self-adjoint, and the functions exp(2πinx) form an orthonormal basis of eigenvectors.

**Wikipedia:** [Self-adjoint operator](https://en.wikipedia.org/wiki/Self-adjoint_operator), [Hellinger–Toeplitz theorem](https://en.wikipedia.org/wiki/Hellinger%E2%80%93Toeplitz_theorem). It says: “Although the distinction between a symmetric operator and a (essentially) self-adjoint operator is subtle, it is important since self-adjointness is the hypothesis in the spectral theorem.”

**Sources:**

- [von Neumann, J. (1930). Allgemeine Eigenwerttheorie Hermitescher Funktionaloperatoren. Mathematische Annalen 102, 49–131.](https://doi.org/10.1007/BF01782338)

### Unbounded operators commute when their spectral projections commute (Nelson's example)

**Remember:** Unbounded operators commute when their exponentials do.

*Rules out counterexamples. Confidence: medium.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A60. arXiv math.SP, math.FA. Level 3: graduate.

**Definition.** Two self-adjoint operators A and B, possibly unbounded, commute if all their spectral projections commute. The spectral projections are the projections that the spectral theorem gives for the Borel subsets of the spectrum. Equivalently, their resolvents (the inverses (A − z)⁻¹ for non-real z) commute. Also equivalently, their unitary groups exp(itA) and exp(isB) commute for all real t and s.

**Problem.** Commuting observables should have commuting functions (through the spectral calculus) and commuting unitary flows, as in the bounded case.

**How the definition helps.** The definition asks the spectral projections to commute, and this excludes Nelson's counterexample to the naive definition. The naive definition asks that AB x = BA x on a common dense domain on which both operators are essentially self-adjoint (have exactly one self-adjoint extension). This is not enough. Nelson's example on the two-sheeted Riemann surface of √z gives A = −i∂ₓ and B = −i∂ᵧ that commute on such a domain, while exp(itA) and exp(isB) do not commute. With commuting spectral projections, the spectral theorem makes all bounded Borel functions of A and B commute. The nLab gives the theorem that commuting spectral projections, commuting resolvents and commuting unitary groups are equivalent.

**nLab:** [unbounded operator](https://ncatlab.org/nlab/show/unbounded+operator). It says: “Nelson's example shows that the rather involved definition of commutativity of two unbounded operators is well motivated, because a more naive one will have unwanted consequences.”

**Sources:**

- [Edward Nelson, Analytic vectors, Annals of Mathematics 70 (1959) 572–615](https://doi.org/10.2307/1970331)

### Square integrable kernels give Hilbert–Schmidt operators

**Remember:** Sum the squared matrix entries to recover the squared kernel norm.

*True by definition.* MSC 47B34 (Kernel operators). arXiv math.FA. Level 3: graduate.

**Definition.** A kernel k defines an integral operator on the unit interval by (Kf)(x) = ∫₀¹ k(x,y)f(y) dy. Sum ‖Ke‖² over an orthonormal basis of square integrable functions. If the sum is finite, its square root is the Hilbert–Schmidt norm.

**Problem.** Every square integrable kernel on the unit square defines a Hilbert–Schmidt operator. Its Hilbert–Schmidt norm equals the L² norm of the kernel.

**How the definition helps.** Using the basis sum turns the Hilbert–Schmidt norm calculation into Parseval’s identity for the kernel (our own). For each x, sum the squared coefficients of k(x,·) in the conjugate basis (our own). Integrating this sum over x gives the squared L² norm of k (our own). Tonelli’s theorem permits the exchange of sum and integral because the terms are nonnegative (our own). This avoids finding the singular values, whose squared sum also gives the squared Hilbert–Schmidt norm (our own).

**Wikipedia:** [Hilbert–Schmidt operator](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Schmidt_operator). It says: “with kernel k is a Hilbert–Schmidt operator and ‖K‖HS = ‖k‖₂.”

**Sources:** none listed. No primary source with a working link was found.

### Dissipative operators make semigroup generation easy to check

**Remember:** Check one energy inequality and one range condition, and the semigroup exists.

*Makes the theorem clean to state or prove.* MSC 47B44 (Linear accretive operators, dissipative operators, etc.), 47D06. arXiv math.FA. Level 3: graduate.

**Definition.** An operator A on a Banach space is dissipative if ‖(λ − A)x‖ ≥ λ‖x‖ for all λ &gt; 0 and x in its domain. In a Hilbert space this means that the real part of ⟨Ax, x⟩ is at most 0. A is maximally dissipative if, also, λ₀ − A is onto for some λ₀ &gt; 0.

**Problem.** When does A generate a contraction semigroup, so that u′ = Au is well posed with ‖u(t)‖ ≤ ‖u(0)‖? The Lumer–Phillips theorem says this holds exactly when A is densely defined and maximally dissipative.

**How the definition helps.** Dissipativity is an energy estimate on A itself, and it is often one integration by parts. For the Laplacian with zero boundary values, ⟨Δu, u⟩ = −‖∇u‖² ≤ 0 (our own). The definition is built so that the resolvent bound of the Hille–Yosida theorem follows at once, once λ − A is onto (our own). So one checks an inequality for A, not estimates for its inverse. The remaining work is the range condition, which is usually an existence problem for an elliptic equation (our own).

**Wikipedia:** [Lumer–Phillips theorem](https://en.wikipedia.org/wiki/Lumer%E2%80%93Phillips_theorem), [C0-semigroup](https://en.wikipedia.org/wiki/C0-semigroup). It says: “Of more practical importance are however the much easier to verify conditions given by the Lumer–Phillips theorem.”

**Sources:**

- [G. Lumer, R. S. Phillips, Dissipative operators in a Banach space, Pacific Journal of Mathematics 11 (1961) 679–698](https://doi.org/10.2140/pjm.1961.11.679)

### Resolvent powers are time moments

**Remember:** Compose the operators by adding their times.

*True by definition.* MSC 47D03 (Groups and semigroups of linear operators), 44A10. arXiv math.FA. Level 3: graduate.

**Definition.** Let T(t), for t ≥ 0, be bounded operators on a complex Banach space, continuous in operator norm. Assume T(0) = I and T(t)T(u) = T(t + u). The generator A is the right derivative at zero. Represent the inverse of λI − A by integrating exp(−λt)T(t) over t ≥ 0.

**Problem.** Suppose ‖T(t)‖ ≤ M exp(ωt) and Re λ &gt; ω. For each integer n ≥ 1, the nth power of the inverse uses the same integral with extra weight tⁿ⁻¹/(n − 1)!.

**How the definition helps.** Multiplying two time integrals adds the times in their operator factors (our own). For n factors, repeated integration at fixed total time t gives the weight tⁿ⁻¹/(n − 1)! (our own). The growth bound permits the integrations, and the Laplace representation identifies the integral with the inverse (our own).

**Paper or page:** [On the Properties of the Semigroup Generated by the RL Fractional Integral](https://arxiv.org/abs/2405.05265v1). It says: “Let T be a uniformly continuous semigroup of type (M,ω) with the infinitesimal generator A.”

**Sources:** none listed. No primary source with a working link was found.

### Mild solutions make well-posedness the same as generating a semigroup

**Remember:** Integrate once, and the solution makes sense for every starting point.

*Makes the theorem clean to state or prove.* MSC 47D06 (One-parameter semigroups and linear evolution equations). arXiv math.FA. Level 3: graduate.

**Definition.** Take a closed operator A on a Banach space X and the problem u′ = Au, u(0) = x. A continuous function u is a mild solution if each integral of u from 0 to t lies in the domain of A. Also, A applied to that integral must equal u(t) − x. A classical solution must be differentiable and stay in the domain of A.

**Problem.** Theorem: let A be a closed operator. Every starting point x in X has a unique mild solution exactly when A generates a strongly continuous semigroup T(t). The solution is then u(t) = T(t)x.

**How the definition helps.** The mild solution integrates the equation once, so it asks nothing of the starting point and makes sense for every x. Then the solution map x ↦ u(t) is defined on the whole space, and it is the semigroup T(t). Classical solutions exist only for x in the domain of A. So the classical version needs an extra condition, that the resolvent set of A is not empty. This is the set of λ for which λ − A has a bounded inverse. The hard work moves to generation theorems, such as the Hille–Yosida theorem, which say when A generates a semigroup.

**Wikipedia:** [C0-semigroup](https://en.wikipedia.org/wiki/C0-semigroup). It says: “Any classical solution is a mild solution. A mild solution is a classical solution if and only if it is continuously differentiable.”

**Sources:**

- [W. Arendt, C. Batty, M. Hieber, F. Neubrander, Vector-valued Laplace Transforms and Cauchy Problems, 2nd ed., Birkhäuser (2011)](https://doi.org/10.1007/978-3-0348-0087-7)

### Strong continuity lets semigroups have unbounded generators, as Hille–Yosida needs

**Remember:** Ask continuity vector by vector, and the heat equation becomes a semigroup.

*Makes the theorem clean to state or prove.* MSC 47D06 (One-parameter semigroups and linear evolution equations). arXiv math.FA. Level 3: graduate.

**Definition.** A one-parameter semigroup is a family of bounded operators T(t), t ≥ 0, with T(0) = I and T(s + t) = T(s)T(t). It is strongly continuous when t ↦ T(t)x is continuous for each vector x. Its generator A is the derivative of T(t)x at t = 0, where this exists.

**Problem.** The Hille–Yosida theorem says which closed densely defined operators A generate strongly continuous semigroups. The condition is a bound on the powers of the resolvent (λ − A)⁻¹ for large real λ.

**How the definition helps.** Continuity in the operator norm is too strong, because the page says a uniformly continuous semigroup has a bounded generator. The heat equation and the wave equation have unbounded generators, so they need the weaker, vector-by-vector continuity (our own examples). With strong continuity, the generator is closed and densely defined. The resolvent is then the Laplace transform of the semigroup (our own). These facts let one state the theorem as a condition on the resolvent alone. What stays hard is to build the semigroup from A, which uses the Yosida approximation by bounded operators (our own).

**Wikipedia:** [C0-semigroup](https://en.wikipedia.org/wiki/C0-semigroup), [Hille–Yosida theorem](https://en.wikipedia.org/wiki/Hille%E2%80%93Yosida_theorem). It says: “The infinitesimal generator of a strongly continuous one-parameter semigroup is a closed linear operator defined on a dense linear subspace of X.”

**Sources:**

- [K. Yosida, On the differentiability and the representation of one-parameter semi-group of linear operators, Journal of the Mathematical Society of Japan 1 (1948), 15–21](https://doi.org/10.2969/jmsj/00110015)

### Commutators make differential operator order subadditive under composition

**Remember:** A commutator with multiplication lowers the order by one.

*True by definition.* MSC 47F05 (General theory of partial differential operators), 13N10. arXiv math.AP, math.AC. Level 3: graduate.

**Definition.** Let P be a linear map on smooth scalar functions. The commutator \[P, f\] with multiplication by a smooth f acts on u as P(fu) − fP(u). Say P has order at most k if every sequence of k + 1 such commutators gives zero. The usual definition writes P locally as a sum of partial derivatives of order at most k multiplied by smooth coefficients.

**Problem.** If P has order at most k and Q has order at most l, then PQ has order at most k + l.

**How the definition helps.** The commutator definition reduces the composition bound to the product rule for one commutator, in our own proof. The identity \[PQ, f\] = \[P, f\]Q + P\[Q, f\] puts each additional commutator on one factor. After k + l + 1 steps, every term applies too many commutators to P or to Q, so it vanishes. Our own comparison is with the coordinate proof, which expands each partial derivative of a product. The work moves into showing that the commutator and coordinate definitions identify the same operators.

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

**Definition.** A map T on a Hilbert space is λ-averaged when T = (1 − λ)I + λN for some λ in (0,1) and nonexpansive N. A map N is nonexpansive when ‖Nx − Ny‖ ≤ ‖x − y‖.

**Problem.** A finite composition of averaged maps on a Hilbert space is averaged. If the maps have a common fixed point, the fixed points of the composition are exactly the common fixed points.

**How the definition helps.** Averaging forces a strict loss of distance to any common fixed point whenever a step moves, so a cycle must stand still at every step. The squared-distance identity for averaged maps gives this loss, by our own calculation. A composition that returns to its starting point therefore never moved, by our own argument. Nonexpansive maps alone fail: a reflection R composed with itself fixes every point, but R fixes only a hyperplane.

**Paper or page:** [Unrestricted Douglas-Rachford algorithms for solving convex feasibility problems in Hilbert space](https://arxiv.org/abs/2204.00275v2). It says: “then Fix(T) = ⋂ᵢ₌₁ⁿ Fix(Tᵢ).”

**Sources:**

- [Kay Barshad, Aviv Gibali, Simeon Reich, Unrestricted Douglas-Rachford algorithms for solving convex feasibility problems in Hilbert space, arXiv:2204.00275v2 (2022)](https://arxiv.org/abs/2204.00275v2)

### Firmly nonexpansive maps are exactly averages of identity and nonexpansive maps

**Remember:** Double the map and subtract the identity to test firmness.

*True by definition.* MSC 47H09 (Contraction-type mappings, nonexpansive mappings, \\(A\\)-proper mappings, etc.), 47H10. arXiv math.OC, math.FA. Level 3: graduate.

**Definition.** A map T on a Hilbert space is firmly nonexpansive if ‖Tx − Ty‖² ≤ ⟨Tx − Ty, x − y⟩ always. A map is nonexpansive if it never increases the distance between two points.

**Problem.** On a Hilbert space, T is firmly nonexpansive exactly when T = ½(Id + N) for some nonexpansive map N.

**How the definition helps.** Put N = 2T − Id and expand ‖Nx − Ny‖²; the firm inequality is exactly the statement that N is nonexpansive (our own calculation). So the equivalence is one line from the inner-product form of the definition. The result lets algorithms built from such maps use facts about averages of nonexpansive maps.

**Paper or page:** [Unrestricted Douglas-Rachford algorithms for solving convex feasibility problems in Hilbert space](https://arxiv.org/abs/2204.00275v2). It says: “There exists a nonexpansive operator N: ℋ → ℋ such that T = ½(Id + N).”

**Sources:**

- [Kay Barshad, Aviv Gibali, Simeon Reich, Unrestricted Douglas-Rachford algorithms for solving convex feasibility problems in Hilbert space, arXiv:2204.00275v2 (2022)](https://arxiv.org/abs/2204.00275v2)

### Relations admit infinite operator limits

**Remember:** An infinite multiple of the identity becomes a vertical graph.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 47A06 (Linear relations (multivalued linear operators)). arXiv math.SP, math.FA. Level 4: research.

**Definition.** A linear relation on a Hilbert space H is a linear subspace of H × H. It can pair one input with several outputs. Its inverse swaps the two coordinates. Convergence in norm resolvent means that the inverses after shifting by i converge in operator norm.

**Problem.** On a nonzero complex Hilbert space, the operators nI converge in norm resolvent to the self-adjoint relation consisting of all pairs (0,y).

**How the definition helps.** The vertical relation accepts zero input with every output, so its inverse sends every input to zero (our own). The relation is self-adjoint because it is the inverse of the self-adjoint zero operator (our own). Subtracting any scalar times the input leaves this relation unchanged (our own). The resolvents of nI are (n − z)⁻¹I and converge to zero (our own). No ordinary operator on a nonzero space has the zero operator as its resolvent (our own).

**Paper or page:** [Sequences of operators, monotone in the sense of contractive domination](https://arxiv.org/abs/2401.00312v1). It says: “In fact, Hₙ → H∞ in the strong resolvent sense or, equivalently, in the strong graph sense.”

**Sources:** none listed. No primary source with a working link was found.

### Minimal dilations are unique

**Remember:** Keep only the translates of the original space.

*Rules out counterexamples.* MSC 47A20 (Dilations, extensions, compressions of linear operators). arXiv math.FA. Level 4: research.

**Definition.** Let V(t), for t ≥ 0, be isometries on a Hilbert space H with V(0) = I and V(s+t) = V(s)V(t). A unitary dilation is a unitary group U(t) on a larger Hilbert space that agrees with V(t) on H for t ≥ 0. It is minimal if the vectors U(t)x, for real t and x in H, span a dense subspace.

**Problem.** Any two minimal unitary dilations of the same isometric semigroup are unitarily equivalent by a map that fixes the original space.

**How the definition helps.** Minimality excludes extra orthogonal summands on which the unitary group could act freely (our own). For s ≤ t, the inner product of U(s)x and U(t)y equals that of x and V(t−s)y (our own). Thus matching corresponding translates preserves inner products and extends by density to the required unitary map (our own).

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456v1). It says: “Moreover, any two minimal unitary dilations of V are unitarily equivalent.”

**Sources:** none listed. No primary source with a working link was found.

### A shifted inverse detects eigenvectors

**Remember:** Move the free inverse between the two square roots.

*True by definition. Confidence: medium.* MSC 47A75 (Eigenvalue problems for linear operators). arXiv math.SP. Level 4: research.

**Definition.** Let A be self-adjoint on a Hilbert space, and let V be bounded and nonnegative, meaning ⟨Vu,u⟩ ≥ 0 for every u. For λ outside the spectrum of A, define the Birman–Schwinger operator K(λ) = √V (A − λI)⁻¹ √V. Here √V is the positive square root of V.

**Problem.** For self-adjoint A, λ outside its spectrum is an eigenvalue of A − V exactly when 1 is an eigenvalue of K(λ). The eigenspace dimensions agree.

**How the definition helps.** The shifted inverse lets the eigenvalue equation turn directly into a fixed vector equation (our own). Send u to √V u and send a fixed vector f back to (A − λI)⁻¹ √V f (our own). The maps are inverse on the two eigenspaces (our own). The work in applications is defining and controlling K when the perturbation is not bounded (our own).

**Paper or page:** [Keller and Lieb-Thirring estimates of the eigenvalues in the gap of Dirac operators](https://arxiv.org/abs/2210.03091v2). It says: “λ is an eigenvalue of 𝒟̸ₘ − V if and only if 1 is an eigenvalue of Kᵥ(λ).”

**Sources:** none listed. No primary source with a working link was found.

### Regularized determinants handle square-integrable kernels

**Remember:** Remove the linear term so squared singular values suffice.

*Rules out counterexamples.* MSC 47B10 (Linear operators belonging to operator ideals (nuclear, \\(p\\)-summing, in the Schatten-von Neumann classes, etc.)), 45P05. arXiv math.FA. Level 4: research.

**Definition.** For an integral operator K with square-integrable kernel, set D(λ) equal to the Fredholm determinant of (I + λK)exp(−λK). The Fredholm determinant extends ordinary determinants to identity plus an operator with summable singular values. Singular values are the eigenvalues of √(K∗K).

**Problem.** D is analytic for every complex λ. Without the exponential correction, the product of one plus λ times each eigenvalue can diverge.

**How the definition helps.** The correction cancels the linear term, so the difference from the identity starts with K² (our own). The singular values of K are square-summable, which makes those of K² summable (our own). Controlling the higher terms in the same norm gives analyticity through the ordinary Fredholm determinant (our own). On \[0,1\], diagonal coefficients 1/n in an orthonormal basis define a square-integrable kernel (our own). Its uncorrected product at λ = 1 has partial products N + 1 (our own).

**Wikipedia:** [Hilbert–Schmidt integral operator](https://en.wikipedia.org/wiki/Hilbert%E2%80%93Schmidt_integral_operator). It says: “Hilbert–Schmidt integral operators are both continuous and compact.”

**Sources:**

- [Folkmar Bornemann, On the numerical evaluation of Fredholm determinants (2010)](https://doi.org/10.1090/s0025-5718-09-02280-7)

### Abstract Friedrichs operators split into skew-symmetric and bounded positive parts

**Remember:** Half the sum is the positive part; half the difference is skew.

*True by definition.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A05, 35F45. arXiv math.AP, math.FA. Level 4: research.

**Definition.** An abstract Friedrichs pair is two densely defined operators T₀ and T̃₀ on a Hilbert space with a common domain. They are formal adjoints of each other: ⟨T₀φ, ψ⟩ = ⟨φ, T̃₀ψ⟩ for φ, ψ in that domain. Their sum T₀ + T̃₀ is bounded there. Its quadratic form is at least 2μ‖φ‖² for some μ &gt; 0.

**Problem.** Every such pair is T₀ = L₀ + S and T̃₀ = −L₀ + S in exactly one way. Here L₀ is skew-symmetric, so −L₀ is contained in its adjoint. S is bounded, self-adjoint and satisfies ⟨Su, u⟩ ≥ μ‖u‖².

**How the definition helps.** The defining conditions make the decomposition almost a calculation: take S as half the sum and L₀ as half the difference. Formal adjointness makes half the sum symmetric and half the difference skew-symmetric. Boundedness and density let half the sum extend to a bounded self-adjoint operator on the whole space. The positivity condition gives the lower bound μ for S. This short proof is our own reading of Theorem 3.1 of the paper. The paper's main work is a separate result, the classification of closed realisations in the style of von Neumann extension theory.

**Paper or page:** [The von Neumann extension theory for abstract Friedrichs operators](https://arxiv.org/abs/2312.09618v2). It says: “we show that every abstract Friedrichs operator can be written as the sum of a skew-symmetric operator and a bounded self-adjoint strictly positive operator.”

**Sources:**

- [Marko Erceg, Sandeep Kumar Soni, The von Neumann extension theory for abstract Friedrichs operators, arXiv:2312.09618v2 (2024)](https://arxiv.org/abs/2312.09618v2)

### Boundary data classify self-adjoint extensions

**Remember:** Equal deficiency indices let boundary values pair up.

*Makes the theorem clean to state or prove.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 81Q10. arXiv math-ph. Level 4: research.

**Definition.** Start with a densely defined closed symmetric operator S. A boundary triple consists of a Hilbert space and two boundary maps on the domain of S\*. Together the maps attain every pair of boundary values and express the difference of the two inner products in the adjoint identity.

**Problem.** A boundary triple exists exactly when the eigenspaces of S\* at i and −i have equal dimension. For such a triple, prescribing the second boundary value as a self-adjoint operator of the first defines a self-adjoint extension.

**How the definition helps.** In our own explanation, the boundary maps turn the adjoint calculation into an identity involving only the two boundary values. Surjectivity lets the two values vary independently in this identity. Taking the adjoint of an extension defined by a closed densely defined boundary operator then replaces that boundary operator by its adjoint. Constructing the triple uses the equal dimensions of the two eigenspaces.

**Paper or page:** [Fundamental solutions and Hadamard states for a scalar field with arbitrary boundary conditions on an asymptotically AdS spacetimes](https://arxiv.org/abs/2101.10290v1). It says: “Then an associated boundary triple (𝖍, γ₀, γ₁) exists if and only if S∗ has equal deficiency indices.”

**Sources:**

- [Fundamental solutions and Hadamard states for a scalar field with arbitrary boundary conditions on an asymptotically AdS spacetimes](https://arxiv.org/abs/2101.10290v1)

### Boundary triplets reduce eigenvalues of extensions to a boundary equation

**Remember:** Self-adjoint extensions become self-adjoint relations on the boundary space.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 47B25 (Linear symmetric and selfadjoint operators (unbounded)), 47A20, 47A75. arXiv math.SP, math.FA. Level 4: research.

**Definition.** Let S be a closed symmetric operator with adjoint S\*. A boundary triplet is a Hilbert space 𝒢 with linear maps Υ₀, Υ₁ from the domain of S\* to 𝒢, jointly onto 𝒢 × 𝒢. They satisfy the abstract Green formula ⟨S\*f, g⟩ − ⟨f, S\*g⟩ = ⟨Υ₁f, Υ₀g⟩ − ⟨Υ₀f, Υ₁g⟩. For solutions f of S\*f = λf, the γ-field γ(λ) maps Υ₀f to f, and the Weyl function M(λ) maps Υ₀f to Υ₁f.

**Problem.** A symmetric differential operator on an interval has many self-adjoint realizations, one for each admissible boundary condition. One wants to list them all and find their eigenvalues.

**How the definition helps.** The triplet matches each self-adjoint extension AΘ with a self-adjoint linear relation Θ in the small space 𝒢, so eigenvalues become a boundary equation. A linear relation is a subspace of 𝒢 × 𝒢, so it is a multivalued operator. Let A₀ be S\* restricted to ker Υ₀, which comes from the relation Θ = {0} × 𝒢 (our own). Theorem 2.7 says that for λ outside the spectrum of A₀, λ is an eigenvalue of AΘ exactly when Θ − M(λ) is not injective. For the classical Laplacian on an interval, Υ₀ and Υ₁ give boundary values and derivatives, and 𝒢 = ℂ² (our own example). The paper builds such a triplet for the restricted fractional Laplacian, using weighted Dirichlet and Neumann traces. The hard part is to build the trace maps and prove the Green formula for the operator at hand (our own).

**Paper or page:** [On Spectral Properties of Restricted Fractional Laplacians with Self-adjoint Boundary Conditions on a Finite Interval](https://arxiv.org/abs/2505.00094), [On Spectral Properties of Restricted Fractional Laplacians with Self-adjoint Boundary Conditions on a Finite Interval](https://arxiv.org/abs/2505.00094). It says: “λ ∈ σp(AΘ) if and only if 0 ∈ σp(Θ − M(λ)), and in this case ker(AΘ − λ) = γ(λ) ker(Θ − M(λ))”

**Sources:**

- [Jussi Behrndt, Markus Holzmann, Delio Mugnolo, On Spectral Properties of Restricted Fractional Laplacians with Self-adjoint Boundary Conditions on a Finite Interval, arXiv:2505.00094 (2025)](https://arxiv.org/abs/2505.00094)
- [V. A. Derkach, M. M. Malamud, Generalized resolvents and the boundary value problems for Hermitian operators with gaps, J. Funct. Anal. 95 (1991), 1–95](https://doi.org/10.1016/0022-1236(91)90024-y)

### Canonical factors invert Wiener–Hopf equations

**Remember:** Invert the two factors in reverse order.

*Rules out counterexamples.* MSC 47B35 (Toeplitz operators, Hankel operators, Wiener-Hopf operators), 45E10. arXiv math.FA. Level 4: research.

**Definition.** On the unit circle, factor a bounded function G as an outside factor times an inside factor. Each factor and its reciprocal extend analytically and boundedly to their side, including infinity for the outside factor. Such a factorization is canonical because it has no intervening power of z.

**Problem.** Take square-integrable functions on the circle whose negative Fourier coefficients vanish. Multiply by G and discard negative frequencies to define its Toeplitz operator. A canonical factorization gives an inverse by applying the projected reciprocal factors in reverse product order.

**How the definition helps.** The inside factor preserves nonnegative modes, and the outside factor preserves strictly negative modes (our own). These facts let the projection split the product and make both factor inverses valid after projection (our own). The symbol z has a power between its factors, and its projected multiplication misses constants (our own). The work lies in proving a given symbol has canonical factors (our own).

**Paper or page:** [A new systems theory perspective on canonical Wiener-Hopf factorization on the unit circle](https://arxiv.org/abs/2409.17324v3). It says: “G(z) = V₋(z) V₊(z)”

**Sources:**

- [A new systems theory perspective on canonical Wiener-Hopf factorization on the unit circle](https://arxiv.org/abs/2409.17324v3)

### A boundary tuple matches dissipative Maxwell boundary conditions with boundary contractions

**Remember:** Put both boundary traces in one Hilbert space, then use a contraction.

*Makes the theorem clean to state or prove.* MSC 47B44 (Linear accretive operators, dissipative operators, etc.), 47B25, 35Q61. arXiv math.AP, math.FA. Level 4: research.

**Definition.** A boundary triple describes the extensions of a symmetric operator through two boundary maps into one Hilbert space. For Maxwell's equations, the tangential traces of E and H lie in two different trace spaces that are dual to each other. The authors' boundary tuple uses a fixed isomorphism V and its adjoint to move both traces into L²ₜ(∂Ω), the square-integrable tangential fields on the boundary.

**Problem.** Let Ω be a Lipschitz domain. An extension is m-dissipative exactly when its boundary condition is (I + K)V⁻¹(tangential H) + (I − K)V\#(tangential E) = 0 for a contraction K. This correspondence is one-to-one, and the extension is self-adjoint exactly when K is unitary.

**How the definition helps.** Once both traces live in one Hilbert space, the abstract theory of boundary triples applies. That theory matches dissipative extensions with contractions. Here m-dissipative means that the operator generates a time evolution that does not increase energy. The paper must construct the identification V, using Riesz bases in the trace spaces. It then applies the result to impedance and Leontovich boundary conditions.

**Paper or page:** [M-dissipative boundary conditions and boundary tuples for Maxwell operators](https://arxiv.org/abs/2110.04586v1). It says: “we construct Riesz bases in the trace spaces associated with the curl-operator and introduce a modified version of boundary triple adapted for the specifics of Maxwell equations, namely, to the mixed-order duality of the related trace spaces.”

**Sources:**

- [Matthias Eller, Illya M. Karabash, M-dissipative boundary conditions and boundary tuples for Maxwell operators, arXiv:2110.04586 (2021), Journal of Differential Equations 325 (2022), 82-118](https://arxiv.org/abs/2110.04586v1)

### Weyl–Hörmander symbol classes are intersections of geometrically adapted modulation spaces

**Remember:** Fit the window to the local metric before measuring the symbol.

*Makes the theorem clean to state or prove.* MSC 47G30 (Pseudodifferential operators), 35S05, 42C15. arXiv math.AP, math.FA. Level 4: research.

**Definition.** A Weyl–Hörmander class S(M, g) contains the symbols whose derivatives are bounded by a weight M. Sizes are measured in a metric g on position and frequency space. A short-time Fourier transform pairs a function with a window shifted in position and frequency. The geometric version adapts the window to g at each point, and a modulation space bounds these coefficients in a weighted norm.

**Problem.** Each class S(M, g) is an intersection of the new modulation spaces. Equivalently, a symbol is in S(M, g) exactly when its operator acts with controlled growth on the shifted windows.

**How the definition helps.** The adapted windows turn the derivative bounds into a test on coefficient sizes, so the theorem can be stated as an equality of function spaces. Our own observation is that a window of fixed shape cannot follow a metric that changes from point to point. The paper still has to prove both inclusions.

**Paper or page:** [Characterisation of the Weyl-Hörmander classes by time-frequency shifts](https://arxiv.org/abs/2112.14461v2). It says: “We define new modulation spaces and achieve the characterisation of the Weyl-Hörmander classes by showing that they are intersections of such modulation spaces suitable for the time-frequency characterisation.”

**Sources:**

- [Stevan Pilipović, Bojan Prangoski, Characterisation of the Weyl-Hörmander classes by time-frequency shifts, arXiv:2112.14461 (2022)](https://arxiv.org/abs/2112.14461v2)

### Viewing PDHG and ADMM as proximal point steps gives one rate proof

**Remember:** Change the weight, keep the same proof.

*Makes the theorem clean to state or prove.* MSC 47J25 (Iterative procedures involving nonlinear operators), 90C33, 90C47. arXiv math.OC. Level 4: research.

**Definition.** A saddle problem asks for min over x and max over λ of a convex-concave function L. A generic update picks the next point z so that the monotone operator of L at z balances P times the step to z. Here P is a fixed positive semidefinite matrix. The proximal point method uses P = I/η, and PDHG and ADMM use other choices of P.

**Problem.** The proximal point method (PPM), primal-dual hybrid gradient (PDHG) and the alternating direction method of multipliers (ADMM) share one bound. For the average of the first k iterates, the saddle gap is at most the squared P-distance from the start, divided by 2k.

**How the definition helps.** Once each method is written as the same generic update with its own matrix P, one short proof covers all three. Monotonicity bounds each step's gap by a difference of consecutive squared P-distances, by our own explanation. Summed over k steps, these differences cancel except at the ends. Showing that each algorithm is an instance of the generic update is the remaining work, and the paper does it in separate lemmas.

**Paper or page:** [On a Unified and Simplified Proof for the Ergodic Convergence Rates of PPM, PDHG and ADMM](https://arxiv.org/abs/2305.02165v2), [On a Unified and Simplified Proof for the Ergodic Convergence Rates of PPM, PDHG and ADMM](https://arxiv.org/abs/2305.02165v2), [On a Unified and Simplified Proof for the Ergodic Convergence Rates of PPM, PDHG and ADMM](https://arxiv.org/abs/2305.02165v2). It says: “This viewpoint shows the equivalence of these three algorithms upto a norm change, and it leads to a four-line simple proof of their 𝒪(1/k) ergodic rates.”

**Sources:**

- [Haihao Lu, Jinwen Yang, On a Unified and Simplified Proof for the Ergodic Convergence Rates of PPM, PDHG and ADMM, arXiv:2305.02165v2 (2023)](https://arxiv.org/abs/2305.02165v2)

### An operator-space spectral radius detects joint similarity to strict contractions

**Remember:** Choose the norm from the operator space, and Rota's theorem holds jointly.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 47L25 (Operator spaces (= matricially normed spaces)), 47A13, 46L07. arXiv math.OA, math.FA. Level 4: research.

**Definition.** An operator space structure ℰ on ℂᵈ chooses a norm on d-tuples of n × n matrices for every n, in a compatible way. Shalit and Shamovich attach to ℰ a spectral radius ρℰ of a d-tuple X. Corollary 2.13 shows that ρℰ(X) is the infimum of ‖S⁻¹XS‖ over all invertible matrices S. For the minimal structure, the norm of a tuple is the largest norm of its entries.

**Problem.** Rota's theorem says a matrix is similar to a strict contraction, a map of norm below 1, exactly when its spectral radius is below 1. For several matrices X₁,…,Xd, one asks when one invertible S makes every S⁻¹XⱼS a strict contraction. The Rota–Strang joint spectral radius does not answer this exactly.

**How the definition helps.** The new spectral radius is tied to the norm of ℰ, so the condition ρℰ(X) &lt; 1 matches the similarity question exactly. The abstract names the Rota–Strang joint spectral radius as the one that differs and lacks this property. For the row operator space, the result recovers the known condition for similarity to a strict row contraction. The work is in proving that ρℰ(X) &lt; 1 forces a similarity, and the infimum is attained for irreducible X.

**Paper or page:** [A spectral radius for matrices over an operator space](https://arxiv.org/abs/2501.01325), [A spectral radius for matrices over an operator space](https://arxiv.org/abs/2501.01325). It says: “related to the joint spectral radius considered by Rota and Strang but differs from it and has the advantage that ρℰ(X) &lt; 1 if and only if X is simultaneously similar to a tuple of strict contractions.”

**Sources:**

- [Orr Shalit, Eli Shamovich, A spectral radius for matrices over an operator space, arXiv:2501.01325 (2025)](https://arxiv.org/abs/2501.01325)
