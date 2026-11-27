### An invariant inner product makes complete reducibility immediate

**Remember:** An invariant subspace has an invariant orthogonal complement.

*True by definition.* MSC 22D10 (Unitary representations of locally compact groups), 20C15. arXiv math.RT. Level 2: later undergraduate.

**Definition.** Represent a compact group on a finite-dimensional complex vector space with an inner product that the action preserves. This is called a unitary representation. Unlike the ordinary definition of a representation, this model builds a choice of invariant inner product into the data.

**Problem.** Every continuous finite-dimensional complex representation of a compact group is a direct sum of irreducible representations, which have no proper nonzero invariant subspaces.

**How the definition helps.** The unitary model supplies the invariant complement at once, namely the orthogonal complement (our own). Each group operator and its inverse preserve the subspace, so they also preserve its orthogonal complement (our own). Induction on dimension then gives the direct sum (our own). The work moves to averaging an inner product with Haar probability measure, the translation-invariant measure of total mass one on the group (our own). The ordinary proof averages each projection onto an invariant subspace separately (our own).

**Wikipedia:** [Unitary representation](https://en.wikipedia.org/wiki/Unitary_representation). It says: “A unitary representation is completely reducible, in the sense that for any closed invariant subspace, the orthogonal complement is again a closed invariant subspace.”

**Sources:** none listed. No primary source with a working link was found.

### Lorentz transformations as isometries are closed under composition and inversion

**Remember:** Maps that preserve the same interval still preserve it when composed.

*True by definition. Confidence: medium.* MSC 22E43 (Structure and representation of the Lorentz group), 83A05. arXiv math-ph, gr-qc. Level 2: later undergraduate.

**Definition.** Define a Lorentz transformation as a linear map that preserves the Minkowski quadratic form, the squared spacetime interval. For transformations that preserve orientation and the direction of time, one can instead start with spatial rotations and boosts. A boost changes the relative velocity of inertial frames.

**Problem.** Composites and inverses of Lorentz transformations preserve the spacetime interval. Two boosts in different directions can compose to a transformation that is not a pure boost.

**How the definition helps.** The interval definition makes closure immediate because applying two interval-preserving maps in turn still preserves the interval. Nondegeneracy of the form makes each map invertible, and its inverse preserves the same interval (our own). A proof with explicit boost and rotation matrices instead has to identify the rotation in the product. The work moves into showing how an isometry that preserves orientation and the direction of time splits into a boost and a rotation (our own).

**Wikipedia:** [Lorentz group](https://en.wikipedia.org/wiki/Lorentz_group). It says: “Mathematically, the Lorentz group may be described as the indefinite orthogonal group O(1, 3), the matrix Lie group that preserves the quadratic form”

**Sources:** none listed. No primary source with a working link was found.

### Left group uniformities make continuous homomorphisms uniformly continuous

**Remember:** Closeness throughout the group comes from closeness to the identity.

*True by definition.* MSC 22A05 (Structure of general topological groups), 54E15, 54H11. arXiv math.GN, math.GR. Level 3: graduate.

**Definition.** A uniformity is a system of relations that describe closeness without a metric. The left uniformity of a topological group uses x⁻¹y ∈ U, where U ranges over neighbourhoods of the identity. A map is uniformly continuous when one input relation works for all pairs at each desired output relation.

**Problem.** A group homomorphism continuous at one point is uniformly continuous for the left uniformities.

**How the definition helps.** The left uniformity reduces uniform continuity to continuity at the identity. If f is continuous at g, choose U with f(gU) ⊆ f(g)V for each identity neighbourhood V in the target. Cancel f(g) to get f(U) ⊆ V. Thus x⁻¹y ∈ U implies f(x)⁻¹f(y) ∈ V, as required. The usual metric definition uses a single δ for all pairs and requires a metric. For groups without a metric, the work is to verify that the left relations form a uniformity and recover the group topology (our own).

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “Since f is a homomorphism, it follows immediately from cancellation that f(U) ⊆ V.”

**Sources:** none listed. No primary source with a working link was found.

### Analytically integral weights match representations of a compact group

**Remember:** Integral for the algebra is not enough; the group decides which weights live.

*Makes the theorem clean to state or prove.* MSC 22C05 (Compact groups), 17B10. arXiv math.RT. Level 3: graduate.

**Definition.** Let K be a connected compact Lie group with maximal torus T. A weight λ is analytically integral if ⟨λ,H⟩ is an integer whenever e to the 2πH is the identity of K. This depends on the group K, not only on its Lie algebra. A weight is integral in the Lie algebra sense if 2⟨λ,α⟩/⟨α,α⟩ is an integer for each root α.

**Problem.** The irreducible representations of a connected compact Lie group K match its dominant analytically integral weights. If K is simply connected, the two notions of integral agree.

**How the definition helps.** Integrality defined through the group's exponential map records which Lie algebra representations integrate to the group. So the theorem for K has the same form as for the Lie algebra. The page notes that every analytically integral weight is integral, but not conversely. For example, SO(3) and SU(2) have the same Lie algebra, but the two-dimensional spin representation of SU(2) does not come from SO(3) (our own). Its highest weight is integral but not analytically integral for SO(3) (our own). What stays hard is the existence of a representation for each such weight. A standard proof uses the Weyl character formula and the Peter–Weyl theorem.

**Wikipedia:** [Theorem of the highest weight](https://en.wikipedia.org/wiki/Theorem_of_the_highest_weight). It says: “This distinction reflects the fact that if K is not simply connected, there may be representations of 𝔤 that do not come from representations of K.”

**Sources:**

- [H. Weyl, Theorie der Darstellung kontinuierlicher halb-einfacher Gruppen durch lineare Transformationen. I, Math. Z. 23 (1925) 271–309](https://doi.org/10.1007/BF01506234)

### Coincident group uniformities give compact groups conjugation-invariant neighbourhoods

**Remember:** When left and right closeness agree, conjugation preserves suitably small neighbourhoods.

*True by definition.* MSC 22C05 (Compact groups), 54E15. arXiv math.GN, math.GR. Level 3: graduate.

**Definition.** The left uniformity of a topological group tests x⁻¹y ∈ U, and the right uniformity tests xy⁻¹ ∈ U. Here U varies over the neighbourhoods of the identity. A uniformity describes closeness by a family of such relations. A compact Hausdorff space admits only one uniformity that gives its topology.

**Problem.** In a compact Hausdorff group, every neighbourhood of the identity contains an open neighbourhood invariant under conjugation by every group element.

**How the definition helps.** Equality of the two group uniformities turns left closeness into right closeness. They agree because both induce the group topology, which comes from only one uniformity when the group is compact Hausdorff. For each U, take a symmetric open identity neighbourhood V such that x⁻¹y ∈ V implies xy⁻¹ ∈ U (our own). Put y = xv⁻¹ to get xvx⁻¹ ∈ U for every v in V and every x in G (our own). The union of all conjugates of V is open, lies in U and is invariant under conjugation (our own). The work lies in the uniqueness theorem for the uniformity, which replaces a direct compactness argument on the conjugation map (our own).

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “They also coincide if G is compact Hausdorff, since in that case there is only one uniformity whose uniform topology reproduces the given topology.”

**Sources:** none listed. No primary source with a working link was found.

### The normalizer shows why Weyl symmetry preserves weight multiplicities

**Remember:** Conjugating the torus transports its common eigenspaces.

*True by definition. Confidence: medium.* MSC 22C05 (Compact groups), 17B10. arXiv math.RT. Level 3: graduate.

**Definition.** Let T be a maximal torus, a maximal connected abelian subgroup of a compact connected Lie group G. Its normalizer N(T) consists of the elements n with nTn⁻¹ = T. Define the Weyl group as N(T)/T, rather than by the reflections associated with the roots. A weight μ is a homomorphism T → ℂ× with a nonzero common eigenspace on which each t acts as μ(t).

**Problem.** The Weyl group permutes the weights of a continuous finite-dimensional complex representation of G and preserves the dimensions of their weight spaces.

**How the definition helps.** The quotient definition lets a representative n carry the weight space for μ to the one for t ↦ μ(n⁻¹tn) (our own). Multiplicities agree because n acts invertibly (our own). Elements of T act trivially on the characters of T because T is abelian (our own). A reflection-based proof instead checks the symmetry for each root using the corresponding three-dimensional Lie algebra of trace-zero 2 × 2 matrices (our own). The work moves to identifying the normalizer quotient with the reflection group (our own).

**nLab:** [Weyl group](https://ncatlab.org/nlab/show/Weyl+group). It says: “The Weyl group of a compact Lie group G is equivalently the quotient group of the normalizer of any maximal torus T by that torus.”

**Wikipedia:** [Semisimple Lie algebra](https://en.wikipedia.org/wiki/Semisimple_Lie_algebra). It says: “The Weyl group is an important symmetry of the problem; for example, the weights of any finite-dimensional representation of 𝔤 are invariant under the Weyl group.”

**Sources:** none listed. No primary source with a working link was found.

### No small subgroups makes a locally compact group a Lie group

**Remember:** No tiny subgroups near the identity, then a smooth Lie group.

*Rules out counterexamples.* MSC 22D05 (General properties and structure of locally compact groups), 22E15. arXiv math.GR, math.GN. Level 3: graduate.

**Definition.** A topological group has no small subgroups if some neighbourhood of the identity contains no subgroup other than the trivial one. The circle group has this property. The additive group of p-adic integers does not, since pᵏℤₚ lies in any neighbourhood of 0 for large k.

**Problem.** Hilbert's fifth problem asks which topological groups are Lie groups, that is, admit a compatible smooth structure. The answer should be a purely topological condition.

**How the definition helps.** The condition rules out exactly the groups that have arbitrarily small subgroups, which cannot sit inside a smooth manifold near the identity. The p-adic integers are the standard example: they are compact, but not a Lie group. Gleason and Montgomery–Zippin (1952) together showed that locally Euclidean groups are Lie groups. That settled Hilbert's question, and the no-small-subgroups condition was the key step. Yamabe then showed that a locally compact connected group is a Lie group exactly when it has no small subgroups. He also showed that every such group is a projective limit (an inverse limit) of Lie groups. The proofs remain long and hard.

**Wikipedia:** [Hilbert's fifth problem](https://en.wikipedia.org/wiki/Hilbert%27s_fifth_problem). It says: “Every locally compact connected group is the projective limit of a sequence of Lie groups. Further, it is a Lie group if it has no small subgroups.”

**Sources:**

- [A. M. Gleason, Groups without small subgroups, Annals of Mathematics 56 (1952) 193](https://doi.org/10.2307/1969795)
- [D. Montgomery and L. Zippin, Small subgroups of finite-dimensional groups, Annals of Mathematics 56 (1952) 213](https://doi.org/10.2307/1969796)
- [J. von Neumann, Die Einführung analytischer Parameter in topologischen Gruppen, Annals of Mathematics 34 (1933) 170–190](https://doi.org/10.2307/1968347)

### Direct integrals make the Plancherel theorem statable

**Remember:** When you cannot sum the irreducible pieces, integrate them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 22D10 (Unitary representations of locally compact groups), 43A30, 46C05. arXiv math.RT, math.FA. Level 3: graduate.

**Definition.** A direct integral of Hilbert spaces is a continuous analogue of a direct sum, taken over a measure space. The unitary dual Ĝ is the set of irreducible unitary representations of G, up to equivalence. The Plancherel measure μ on Ĝ is the unique measure for which L²(G) ≅ ∫ π ⊗ π\* dμ(π) is an isometric isomorphism: L²(G) is the integral of the pieces π ⊗ π\* against μ. Equivalently, ‖f‖₂² is the integral over μ of the squared Hilbert–Schmidt norm of π(f).

**Problem.** Decompose the regular representation L²(G) of a locally compact group into irreducible representations, as in Fourier analysis.

**How the definition helps.** When L²(G) is not a sum of irreducibles, it is still an integral of them. L²(G) is often not a direct sum of irreducibles; this already fails for G = ℤ. In our own words, the characters of ℤ are not in L²(ℤ). But L²(G) is always a direct integral of irreducibles. For unimodular groups (left and right Haar measures agree) of type I (a technical condition that makes the representation theory well behaved), the decomposition L²(G) ≅ ∫ π ⊗ π\* dμ(π) is unique and defines the Plancherel measure. The page also discusses second countability. For groups that are not type I, the decomposition is not unique, so the theorem still needs the type I hypothesis.

**nLab:** [Plancherel measure](https://ncatlab.org/nlab/show/Plancherel+measure). It says: “while it's not always possible to decompose L²(G) as a direct sum of irreducible reprenentations (this already fails for G=ℤ), it is always possible to decompose it as a direct integral of irreducible representations”

**Sources:**

- [I. E. Segal, An extension of Plancherel's formula to separable unimodular groups, Annals of Mathematics 52 (1950) 272–292](https://doi.org/10.2307/1969470)

### The strong operator topology makes regular representations continuous

**Remember:** Translation changes each fixed function a little, but not every function uniformly.

*Makes the theorem clean to state or prove.* MSC 22D10 (Unitary representations of locally compact groups), 22D05. arXiv math.RT, math.FA. Level 3: graduate.

**Definition.** A unitary representation is a homomorphism to the unitary operators on a Hilbert space that is continuous in the strong operator topology. This topology tests convergence on each vector separately. The operator norm instead tests convergence uniformly over all unit vectors.

**Problem.** For a locally compact Hausdorff group G, the left regular action on L²(G) is a unitary representation. It sends f(x) to f(g⁻¹x) and uses left Haar measure, a measure unchanged by left translations.

**How the definition helps.** The strong topology makes continuity a statement about each fixed square integrable function. Left Haar invariance gives norm preservation (our own). For continuous functions of compact support, small translations converge uniformly and their supports stay in one compact set (our own). This gives convergence in L² and extends by density and norm preservation (our own). The norm topology is too strong, even for translations of ℝ (our own). For any nonzero shift, choose a unit vector supported on an interval shorter than the shift (our own). The supports before and after translation are disjoint, so their distance is √2 however small the shift (our own).

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “The reason that in the definition of a unitary representation, the strong operator topology on 𝒰(ℋ) is used and not the norm topology, is that only few homomorphisms turn out to be continuous in the norm topology.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the full group C\*-algebra by all representations makes every representation extend

**Remember:** The supremum bounds every representation at once.

*True by definition.* MSC 22D25 (\\(C<sup>\*\\</sup>)-algebras and \\(W<sup>\*\\</sup>)-algebras in relation to group representations), 46L05. arXiv math.OA. Level 3: graduate.

**Definition.** Let G be a discrete group and ℂ\[G\] its group algebra of finite formal sums. The full group C\*-algebra C\*(G) is the completion of ℂ\[G\] in the norm ‖x‖ = sup ‖π(x)‖ over all unitary representations π of G. The reduced C\*-algebra instead uses only the left regular representation, the action of G on ℓ²(G) by translation.

**Problem.** Every unitary representation of a discrete group G extends uniquely to a representation of C\*(G) that preserves adjoints.

**How the definition helps.** By definition, ‖π(x)‖ ≤ ‖x‖ for every unitary representation π and every x in ℂ\[G\], so π extends by continuity. The work is to show that the supremum is a norm. It is finite because ‖x‖ is at most the sum of the absolute values of the coefficients of x. It is nonzero for nonzero x because the left regular representation is faithful on ℂ\[G\]. The reduced algebra lacks the property. For the free group on two generators, the trivial representation does not extend to the reduced algebra. Wikipedia says the universal property follows from the definition; the rest is our own account.

**Wikipedia:** [Group algebra of a locally compact group](https://en.wikipedia.org/wiki/Group_algebra_of_a_locally_compact_group). It says: “It follows from the definition that, when G is a discrete group, C\*(G) has the following universal property”

**Sources:** none listed. No primary source with a working link was found.

### Kazhdan's property (T) makes lattices in higher-rank Lie groups finitely generated

**Remember:** Almost fixed means fixed, and lattices come out finitely generated.

*Makes the theorem clean to state or prove.* MSC 22D55 (Kazhdan's property (T), the Haagerup property, and generalizations), 22E40. arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** A locally compact group G has property (T) if every unitary representation with almost invariant vectors has a nonzero invariant vector. Almost invariant means: for each compact K and ε &gt; 0, some unit vector moves less than ε under all of K. A lattice is a discrete subgroup Γ such that G/Γ has finite invariant volume.

**Problem.** For n ≥ 3, every lattice in SL(n, ℝ) is finitely generated and has finite abelianization.

**How the definition helps.** The property passes from a Lie group to its lattices, and then gives finite generation in a few lines. Kazhdan showed that a lattice has (T) exactly when the ambient group has (T), and that SL(n, ℝ) for n ≥ 3 has (T). A countable discrete group with (T) is finitely generated, and its abelianization is compact, hence finite. For finite generation, write the group as an increasing union of finitely generated subgroups Hₖ (our own). The sum of the representations on the spaces ℓ²(G/Hₖ) has almost invariant vectors, so one of them has an invariant vector (our own). This forces that Hₖ to have finite index, so G is finitely generated (our own). The hard part is to prove (T) for the Lie group; lattices in SO(n,1) and SU(n,1) lack (T) and need other methods.

**Wikipedia:** [Kazhdan's property (T)](https://en.wikipedia.org/wiki/Kazhdan%27s_property_%28T%29), [Lattice (discrete subgroup)](https://en.wikipedia.org/wiki/Lattice_%28discrete_subgroup%29). It says: “The property known as (T) was introduced by Kazhdan to study the algebraic structure lattices in certain Lie groups when the classical, more geometric methods failed or at least were not as efficient.”

**Sources:**

- [D. Kazhdan, Connection of the dual space of a group with the structure of its closed subgroups, Functional Analysis and Its Applications 1 (1967) 63–65](https://doi.org/10.1007/BF01075866)

### Allowing immersed Lie subgroups makes every Lie subalgebra come from a subgroup

**Remember:** Let subgroups wind densely, and every subalgebra gets its subgroup.

*Makes the theorem clean to state or prove.* MSC 22E15 (General properties and structure of real Lie groups), 22E60. arXiv math.GR, math.DG. Level 3: graduate.

**Definition.** A Lie subgroup of G is a subgroup that is a Lie group in its own topology. Its inclusion map must be one-to-one, and its derivative must be one-to-one at every point. Its topology may be finer than the one it gets from G, and it need not be closed.

**Problem.** Connected Lie subgroups of G correspond one-to-one with Lie subalgebras of its Lie algebra. The correspondence should have no exceptions.

**How the definition helps.** With the wider definition, the correspondence between subalgebras and connected subgroups is a bijection. If only closed (embedded) subgroups were allowed, it would fail. In the 2-torus, a line of irrational slope in the Lie algebra ℝ² is a subalgebra. Its subgroup is the irrational winding, which is dense in the torus and not closed. Taking H with its own line topology makes it a Lie subgroup, so the subalgebra has its subgroup. What stays hard is the existence proof, which uses the Frobenius theorem on integrable distributions; this last point is our own.

**Wikipedia:** [Lie group–Lie algebra correspondence](https://en.wikipedia.org/wiki/Lie_group%E2%80%93Lie_algebra_correspondence), [Closed-subgroup theorem](https://en.wikipedia.org/wiki/Closed-subgroup_theorem). It says: “If G is a Lie group and 𝔥 is a Lie subalgebra of Lie(G), then there is a unique connected Lie subgroup (not necessarily closed) H of G with Lie algebra 𝔥.”

**Sources:** none listed. No primary source with a working link was found.

### Defining exp by one-parameter subgroups makes homomorphisms commute with it

**Remember:** A homomorphism sends a one-parameter subgroup to another.

*True by definition. Confidence: medium.* MSC 22E15 (General properties and structure of real Lie groups). arXiv math.DG, math.GR. Level 3: graduate.

**Definition.** A one-parameter subgroup of a Lie group G is a smooth homomorphism from the additive real numbers to G. The Lie algebra of G is its tangent space at the identity, with its bracket. For X in the Lie algebra, exp X is the value at time 1 of the one-parameter subgroup with initial velocity X. For matrix groups, another definition uses the power series of the matrix exponential.

**Problem.** Let φ be a smooth homomorphism of Lie groups, with derivative dφ at the identity. Then φ(exp X) = exp(dφ(X)) for every X in the Lie algebra.

**How the definition helps.** With the subgroup definition, both sides are values of one-parameter subgroups with the same initial velocity. In our own step, the curve t ↦ φ(exp tX) is a one-parameter subgroup with velocity dφ(X). Wikipedia states that such a subgroup is unique, which gives equality at t = 1. In our own comparison, the power series gives no direct route, because φ need not be linear or polynomial. In our own account, the work moves to building one-parameter subgroups as flows of left-invariant vector fields and proving uniqueness.

**Wikipedia:** [Exponential map (Lie theory)](https://en.wikipedia.org/wiki/Exponential_map_%28Lie_theory%29). It says: “is the unique one-parameter subgroup of G whose tangent vector at the identity is equal to X.”

**Sources:** none listed. No primary source with a working link was found.

### Simply connected Lie groups are determined by their Lie algebras

**Remember:** Simply connected groups are the ones that the Lie algebra fully determines.

*Rules out counterexamples.* MSC 22E15 (General properties and structure of real Lie groups), 22E60. arXiv math.GR, math.DG. Level 3: graduate.

**Definition.** A Lie group is simply connected if it is connected and every loop in it can be contracted to a point.

**Problem.** Describe Lie groups by their Lie algebras. That is, make the passage from Lie groups to Lie algebras an equivalence of categories.

**How the definition helps.** Restricting to simply connected groups removes the counterexamples, so the Lie algebra determines the group and its maps. Without this restriction, different Lie groups can have the same Lie algebra, for example SU(2) and SO(3). Also, a map of Lie algebras need not come from a map of groups: the isomorphism of Lie algebras so(3) → su(2) comes from no group map SO(3) → SU(2). Lie's second theorem says that every Lie algebra map out of the Lie algebra of a simply connected group comes from a unique group map. Lie's third theorem (the Cartan–Lie theorem) says that every finite-dimensional real Lie algebra is the Lie algebra of a simply connected Lie group. So the Lie functor becomes an equivalence of categories (for Lie groupoids, source-simply-connected groupoids play the same role). The global existence in Lie's third theorem, due to Cartan, is still a real theorem.

**nLab:** [Lie's three theorems](https://ncatlab.org/nlab/show/Lie%27s+three+theorems), [Lie group](https://ncatlab.org/nlab/show/Lie+group), [Lie integration](https://ncatlab.org/nlab/show/Lie+integration). It says: “The category of local Lie groups is equivalent to the category of connected and simply connected Lie groups.”

**Sources:**

- [Jean-Pierre Serre, Lie Algebras and Lie Groups, 1964 lectures at Harvard, Lecture Notes in Math. 1500 (1992)](https://doi.org/10.1007/978-3-540-70634-2)
- [Hans Duistermaat, Johan A. C. Kolk, Lie groups, Springer (2000), Chapter 1](https://doi.org/10.1007/978-3-642-56936-4)

### The determinant formula makes connected nilpotent Lie groups unimodular

**Remember:** Conjugation preserves volume because its derivative has determinant of modulus one.

*True by definition.* MSC 22E15 (General properties and structure of real Lie groups), 28C10. arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** The modular function measures how translation scales Haar measure, an invariant volume measure on a group. For a Lie group, compute it as \|det Ad(g)\|, where Ad(g) is the derivative of conjugation by g at the identity. Some conventions take the reciprocal instead. A group is unimodular if this function is identically 1.

**Problem.** Every connected nilpotent Lie group is unimodular. Nilpotence means that sufficiently long iterated commutators are trivial.

**How the definition helps.** The determinant formula turns unimodularity into a linear algebra calculation. For a tangent vector X at the identity, Ad(exp X) is the matrix exponential of ad X, the map Y ↦ \[X, Y\] (our own). This map is nilpotent because sufficiently long brackets vanish (our own). Its exponential has determinant 1, since a nilpotent map has only zero eigenvalues (our own). Exponentials generate a connected Lie group, so all elements have determinant of modulus 1 (our own). The work lies in deriving the determinant formula from the change of a left invariant volume form under conjugation.

**Wikipedia:** [Haar measure](https://en.wikipedia.org/wiki/Haar_measure). It says: “This means also that the modular function can be computed, as the absolute value of the determinant of the adjoint representation.”

**Sources:** none listed. No primary source with a working link was found.

### Universal complexification extends complex representations uniquely

**Remember:** The target of a complex representation is already a complex Lie group.

*True by definition.* MSC 22E15 (General properties and structure of real Lie groups), 22E46. arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** For a real Lie group G, take a continuous homomorphism j from G to a complex Lie group H. This is a universal complexification if each continuous homomorphism from G to a complex Lie group factors uniquely through j by a holomorphic homomorphism. In concrete examples one can start with a candidate matrix group instead.

**Problem.** Each continuous finite-dimensional complex representation of a real Lie group extends uniquely to a holomorphic representation of its universal complexification.

**How the definition helps.** The universal property is exactly the extension statement when the target is GL(V), the group of invertible complex linear maps on V (our own). A concrete model, such as SL(n,ℂ) for SU(n), does not by itself prove this extension statement (our own). The work moves into proving that the universal complexification exists and that a given concrete model has its universal property.

**Wikipedia:** [Complexification (Lie group)](https://en.wikipedia.org/wiki/Complexification_%28Lie_group%29). It says: “every continuous homomorphism of the original group into another complex Lie group extends compatibly to a complex analytic homomorphism between the complex Lie groups”

**Sources:** none listed. No primary source with a working link was found.

### Defining a subgroup's Lie algebra by one-parameter subgroups proves Cartan's theorem

**Remember:** A subgroup's tangent directions are the lines it contains through the identity.

*Makes the theorem clean to state or prove.* MSC 22E60 (Lie algebras of Lie groups), 22E15. arXiv math.GR, math.DG. Level 3: graduate.

**Definition.** Let H be any subgroup of a Lie group G. Its Lie algebra is the set of X in the Lie algebra of G with exp(tX) in H for every real t. This makes sense with no smoothness assumption on H.

**Problem.** Cartan's closed-subgroup theorem: every closed subgroup of a Lie group is an embedded Lie subgroup. So, for example, every closed subgroup of GL(n, ℝ) is automatically a Lie group.

**How the definition helps.** The definition gives a candidate tangent space before anyone knows that H is a manifold. When H is closed, it is not hard to show that this set is a Lie subalgebra. The key lemma then shows that, near the identity, H is exactly the image of this subspace under exp, so H is a submanifold. Closedness is needed: the irrational winding of a torus is a dense subgroup, and the lemma fails for it. Von Neumann first proved the linear case in 1929, and Cartan gave the general theorem in 1930.

**Wikipedia:** [Closed-subgroup theorem](https://en.wikipedia.org/wiki/Closed-subgroup_theorem). It says: “The challenge is that H is not assumed to have any smoothness and therefore it is not clear how one may define its tangent space.”

**Sources:**

- [J. von Neumann, Über die analytischen Eigenschaften von Gruppen linearer Transformationen und ihrer Darstellungen, Mathematische Zeitschrift 30 (1929) 3–42](https://doi.org/10.1007/BF01187749)

### Defining the bracket by differentiating conjugation makes ad the derivative of Ad

**Remember:** Differentiate conjugation once in h and once in g.

*True by definition. Confidence: medium.* MSC 22E60 (Lie algebras of Lie groups), 22E15. arXiv math.DG, math.RT. Level 3: graduate.

**Definition.** For a Lie group G, conjugation by g fixes the identity, so its derivative there is a linear map Ad(g) on the Lie algebra. Define the bracket \[X, Y\] as the derivative of Ad(exp tX)Y at t = 0. The other definition takes the commutator of left invariant vector fields, which are fields fixed by left translations and so determined by one tangent vector.

**Problem.** The derivative of Ad at the identity is ad, the map sending X to the operator Y ↦ \[X, Y\].

**How the definition helps.** With this definition, the theorem is the definition read in one line. The nLab supports this order, obtaining the adjoint action of the Lie algebra by differentiating the group action a second time. In our own account, the work moves to the theorem that this bracket equals the commutator of left invariant vector fields. That proof uses the flow formula for a bracket of vector fields. The flow of a left invariant field is right translation by exp tX, which turns that formula into the derivative of conjugation.

**nLab:** [adjoint action](https://ncatlab.org/nlab/show/adjoint+action). It says: “Differentiating the above example also in the second argument, yields the adjoint action of a Lie algebra on itself”

**Sources:** none listed. No primary source with a working link was found.

### Left-invariant vector fields make the Jacobi identity free for Lie groups

**Remember:** Commutators of operators satisfy the Jacobi identity.

*True by definition.* MSC 22E60 (Lie algebras of Lie groups), 17B66. arXiv math.DG, math.RT. Level 3: graduate.

**Definition.** Define the Lie algebra of a Lie group G using the vector fields that left multiplication carries to themselves. A vector field acts on smooth functions by differentiation, so it obeys the product rule. Take the bracket of fields X and Y to be the commutator XY − YX of these operators.

**Problem.** The bracket of left-invariant vector fields satisfies the Jacobi identity.

**How the definition helps.** The commutator definition gives Jacobi by the operator identity already used for all vector fields (our own). Left translations preserve the bracket, so restricting to invariant fields does not change that identity.

**Wikipedia:** [Lie group](https://en.wikipedia.org/wiki/Lie_group). It says: “Vector fields on any smooth manifold M can be thought of as derivations X of the ring of smooth functions on the manifold”

**Sources:** none listed. No primary source with a working link was found.

### Bornological convolution algebras make groupoid convolution work for all differentiable stacks

**Remember:** Change the target category, and the restrictions on maps disappear.

*Rules out counterexamples. Confidence: medium.* MSC 22A22 (Topological groupoids (including differentiable and Lie groupoids)), 46H05, 46A17. arXiv math.DG, math.OA. Level 4: research.

**Definition.** A Lie groupoid is a groupoid whose objects and arrows form smooth manifolds, with smooth structure maps. Its convolution algebra consists of compactly supported functions (more exactly, half-densities) on its arrows. The product combines values on pairs of composable arrows, as in the convolution of functions on a group. Complete bornological convolution treats this as a complete bornological algebra instead of completing it to a C\*-algebra. A bornology is a choice of which subsets count as bounded.

**Problem.** Groupoid convolution should be a functor from differentiable stacks, with all their maps, to algebras and bimodules. A differentiable stack is a Lie groupoid up to Morita equivalence.

**How the definition helps.** Changing the target from C\*-algebras to complete bornological algebras removes the conditions on maps. With C\*-algebras as the target, Nuiten proved functoriality only for bibundles (the maps between differentiable stacks) that are proper and submersive. This excludes, for example, the stacky group structures of noncommutative tori and the Lie 2-group model of the string group. It also excludes the points of the stack. With complete bornological algebras as the target, both conditions drop away. Convolution then becomes a monoidal (2,1)-functor on all differentiable stacks (Aretz and Blohmann). The proof of this theorem is long; the new target only makes the statement possible.

**nLab:** [category algebra](https://ncatlab.org/nlab/show/category+algebra). It says: “Both conditions can be dropped for complete bornological convolution, which is a monoidal (2,1)-functor from the category of differentiable stacks to the Morita 2-category of complete bornological algebras”

**Sources:**

- [David Aretz, Christian Blohmann, Functoriality of bornological groupoid convolution, 2025, arXiv:2508.11005](https://arxiv.org/abs/2508.11005)

### Uniform upper density makes difference sets syndetic in locally compact abelian groups

**Remember:** Disjoint translates of a dense set run out, so differences cover everything.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 22B05 (General properties and structure of LCA groups), 11B13. arXiv math.CA, math.CO. Level 4: research.

**Definition.** In ℝᵈ, the asymptotic uniform upper density of a set S looks at balls of radius r with any centre. It is the limit superior, as r grows, of the largest share of such a ball that S fills. In a locally compact abelian (LCA) group, Haar measure plays the role of volume. A set S is syndetic when S + C is the whole group for some compact set C.

**Problem.** If a set S in an LCA group G has positive asymptotic uniform upper density, then S − S is syndetic. For ℤ this is a lemma in Fürstenberg's book.

**How the definition helps.** Because the density does not change under translation, disjoint translates of S each fill a fixed share of space; this summary is our own. So only about 1/density of them fit. A maximal disjoint family of translates S + b has finitely many shifts b, and the sets (S − S) + b cover G. Both of these steps are our own. So, in our own reading, the proof needs a density that is translation invariant. The abstract says that a reasonable such notion for general LCA groups was not known for long. Once it existed, several classical results of the Euclidean setting became accessible.

**Paper or page:** [Kahane's upper density and syndetic sets in LCA groups](https://arxiv.org/abs/2309.06088v2). It says: “Let G be a LCA group and S ⊂ G a set with positive asymptotic uniform upper density: D̄(S) &gt; 0. Then the difference set S − S is a syndetic set.”

**Sources:**

- [Szilárd Gy. Révész, Kahane's upper density and syndetic sets in LCA groups, arXiv:2309.06088 (2023)](https://arxiv.org/abs/2309.06088v2)

### Translation-like actions make a Burnside-type theorem true for locally compact groups

**Remember:** Ask for bounded integer steps, not an element of infinite order.

*Makes the theorem clean to state or prove.* MSC 22D05 (General properties and structure of locally compact groups), 20F65. arXiv math.GR. Level 4: research.

**Definition.** A translation-like action of ℤ on a group G is a free action in which each integer moves every point only a bounded amount. For a locally compact group, this means each integer moves x to xk with k in a fixed compact set. The Borel and clopen versions ask that the action be made of such translations on Borel, or closed-and-open, pieces.

**Problem.** Let G be a locally compact group generated by a compact set. G is noncompact exactly when it admits a Borel, or equivalently clopen, translation-like action of ℤ.

**How the definition helps.** The definition asks only for a free bounded-step action of ℤ, not for an element of infinite order, so torsion groups stop being obstacles. Burnside asked whether every infinite finitely generated group has an element of infinite order, and Golod showed it need not (our own context). So the naive statement fails even for discrete groups. Seward proved that a finitely generated group is infinite exactly when it admits a translation-like action of ℤ. Extending this to all compactly generated locally compact groups is the paper's work.

**Paper or page:** [The Burnside problem for locally compact groups](https://arxiv.org/abs/1812.11743v1). It says: “G is non-compact. G admits a Borel (or equivalently clopen) translation-like action by ℤ.”

**Sources:**

- [Thibaut Dumont, Thibault Pillon, The Burnside problem for locally compact groups, arXiv:1812.11743v1 (2018)](https://arxiv.org/abs/1812.11743v1)

### Infinite multiples extend Stone–von Neumann uniqueness to general locally compact rings

**Remember:** Repeat each representation countably often so finite multiplicities no longer matter.

*Rules out counterexamples.* MSC 22D10 (Unitary representations of locally compact groups), 81S05. arXiv math.RT, math.OA. Level 4: research.

**Definition.** The inflation of a pair of unitary representations is the direct sum of countably many copies of the pair. The canonical commutation relation says that exchanging the order of two action operators multiplies the result by a prescribed scalar.

**Problem.** Take a unital second-countable locally compact ring and an additive character that satisfies the paper's symmetry and isomorphism conditions. Every pair that satisfies the canonical commutation relations on a separable Hilbert space then has inflation equivalent to that of the Schrödinger pair.

**How the definition helps.** Taking countably many copies prevents unequal finite multiplicities from contradicting uniqueness of the inflated pair. In our own example, one and two copies of an irreducible Schrödinger pair are not equivalent before inflation. The work is proving that the pairing hypotheses give equivalence after inflation.

**Paper or page:** [Canonical Commutation Relations: A quick proof of the Stone-von Neumann theorem and an extension to general rings](https://arxiv.org/abs/2502.00387v1), [Canonical Commutation Relations: A quick proof of the Stone-von Neumann theorem and an extension to general rings](https://arxiv.org/abs/2502.00387v1). It says: “define the inflation U⁽∞⁾ of U as the (countably) infinite multiple of U”

**Sources:**

- [Bachir Bekka, Canonical Commutation Relations: A quick proof of the Stone-von Neumann theorem and an extension to general rings, arXiv:2502.00387 (2025)](https://arxiv.org/abs/2502.00387v1)

### Synthetic Maurer–Cartan forms make flatness the identity x⁻¹y·y⁻¹z = x⁻¹z

**Remember:** Group differences cancel at the middle point.

*True by definition. Confidence: medium.* MSC 22E15 (General properties and structure of real Lie groups), 58A03. arXiv math.DG. Level 4: research.

**Definition.** Synthetic differential geometry treats infinitesimally close points as actual objects. There, the left Maurer–Cartan form θ of a Lie group sends close points x and y to θ(x,y). This is the unique group element with y = x·θ(x,y), so θ(x,y) = x⁻¹y. The usual one-form moves each tangent vector at g to the identity, by left multiplication by g⁻¹.

**Problem.** The left Maurer–Cartan form θ of a Lie group satisfies the Maurer–Cartan equation dθ + ½\[θ,θ\] = 0. This equation says that θ has zero curvature when viewed as a connection, a rule for comparing nearby fibers.

**How the definition helps.** In the synthetic definition, flatness is the identity θ(x,y)θ(y,z) = θ(x,z) for close points x, y and z. This holds because x⁻¹y · y⁻¹z = x⁻¹z in any group. The nLab says that this identity analytically becomes the statement of vanishing curvature. In our own comparison, the usual proof instead evaluates dθ on left-invariant vector fields. In our own account, the work moves into the synthetic framework, which must match the triangle identity with the Maurer–Cartan equation.

**nLab:** [Maurer-Cartan form](https://ncatlab.org/nlab/show/Maurer-Cartan+form). It says: “θ(x,y) θ(y,z) = θ(x,z). This is what analytically becomes the statement of vanishing curvature.”

**Sources:** none listed. No primary source with a working link was found.

### Locally smooth cochains let Lie group cohomology see all central extensions

**Remember:** Use cochains that are smooth only on the pieces of a cover.

*Rules out counterexamples.* MSC 22E41 (Continuous cohomology of Lie groups), 20J06. arXiv math.GR, math.AT. Level 4: research.

**Definition.** Let G be a Lie group and A an abelian Lie group. The differentiable cohomology Hⁿ(G, A) is computed by a Čech double complex. Its cochains are smooth functions on the pieces of good open covers of the products G × ⋯ × G, and the covers fit together as a simplicial system. (In a good open cover, all finite intersections of pieces are contractible.) This cohomology agrees with Segal's earlier definition of cohomology of topological groups.

**Problem.** Classify all central extensions A → Ĝ → G of Lie groups by a second cohomology group. For discrete coefficients, the cohomology should also agree with that of the classifying space BG.

**How the definition helps.** Cochains that are smooth only locally can describe extensions whose bundle is nontrivial, and globally smooth cochains cannot. The naive cohomology uses globally smooth maps G × ⋯ × G → A, with n factors. It only sees central extensions whose underlying principal A-bundle is trivial. (A principal A-bundle is a space over G with a free action of A whose fibers are copies of A.) For example, the double cover ℤ/2 → SU(2) → SO(3) is a central extension with a nontrivial bundle, so the naive H² misses it (this example is ours). The differentiable cohomology classifies all central extensions that are locally trivial principal A-bundles, and for discrete A it equals the cohomology of the classifying space BG. For A a topological vector space, it agrees with the naive version, so nothing is lost there.

**nLab:** [Lie group cohomology](https://ncatlab.org/nlab/show/Lie+group+cohomology), [group cohomology](https://ncatlab.org/nlab/show/group+cohomology), [group extension](https://ncatlab.org/nlab/show/group+extension). It says: “But this does \*\*not\*\* in general give the right answer for structured groups”

**Sources:**

- [Jean-Luc Brylinski, Differentiable Cohomology of Gauge Groups (2000), arXiv:math/0011069](https://arxiv.org/abs/math/0011069)
- [Christopher Schommer-Pries, Central extensions of smooth 2-groups and a finite-dimensional string 2-group, Geom. Topol. 15 (2011), arXiv:0911.2483](https://arxiv.org/abs/0911.2483)

### A distribution defines characters when operators have no trace

**Remember:** Average the operators before taking their trace.

*Makes the theorem clean to state or prove.* MSC 22E46 (Semisimple Lie groups and their representations), 22E30. arXiv math.RT. Level 4: research.

**Definition.** Let π be an irreducible continuous unitary representation of a connected real semisimple Lie group G with finite centre. On an infinite-dimensional Hilbert space the individual unitary operators have no well-defined trace. For a smooth function f of compact support, integrate f(g)π(g) using Haar measure, the translation-invariant measure on G. Define the character by taking the trace of this operator, giving a distribution, a continuous linear functional on test functions f.

**Problem.** This character exists and is invariant under conjugation. Harish-Chandra’s regularity theorem says it is given by a locally integrable function, one that is integrable on every compact subset.

**How the definition helps.** The distribution definition makes a trace character possible even when the individual operators have no trace. The work starts with showing that the averaged operators are trace class, so the trace exists, and proving continuity in f. Conjugating the test function conjugates the averaged operator, leaving its trace unchanged (our own). The separate regularity theorem identifies the distribution with integration against a function. That theorem is not a consequence of the definition (our own).

**Wikipedia:** [Harish-Chandra character](https://en.wikipedia.org/wiki/Harish-Chandra_character). It says: “is a distribution on the group G that is analogous to the character of a finite-dimensional representation of a compact group.”

**Sources:**

- [Harish-Chandra, Representations of Semisimple Lie Groups. III. Characters, in Collected Papers, Springer (1984) 370–373](https://doi.org/10.1007/978-1-4899-7407-5_23)
- [Harish-Chandra, Invariant Eigendistributions on a Semisimple Lie Group, in Collected Papers, Springer (1984) 1457–1508](https://doi.org/10.1007/978-1-4899-7407-5_63)
