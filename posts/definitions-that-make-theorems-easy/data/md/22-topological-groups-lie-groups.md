### Closed normal subgroups give Hausdorff quotients

**Remember:** Closedness separates the identity coset, and translation does the rest.

*Rules out counterexamples. Confidence: medium.* MSC 22A05 (Structure of general topological groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** Give the cosets of a normal subgroup N the quotient topology. For Hausdorff topological groups, restrict this construction to closed normal subgroups if the quotient must stay Hausdorff.

**Problem.** The quotient of a Hausdorff topological group by a normal subgroup is Hausdorff exactly when the subgroup is closed.

**How the definition helps.** Closedness makes the identity coset a closed point, and translation then makes all points closed (our own argument). The quotient is a topological group, and in a topological group with closed points, distinct points have disjoint neighborhoods. Conversely, if the quotient is Hausdorff, the preimage N of the identity point is closed. For example, ℝ∕ℚ has only two open sets because ℚ is dense.

**nLab:** [closed subgroup](https://ncatlab.org/nlab/show/closed+subgroup). It says: “A common condition on subgroups of a topological group is that they be closed.”

**Sources:** none listed. No primary source with a working link was found.

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

**Problem.** The Lorentz transformations form a group: composites and inverses of them preserve the spacetime interval.

**How the definition helps.** The interval definition makes closure immediate because applying two interval-preserving maps in turn still preserves the interval. Nondegeneracy of the form makes each map invertible, and its inverse preserves the same interval (our own). A proof with explicit boost and rotation matrices instead has to identify the rotation in the product. The work moves into showing how an isometry that preserves orientation and the direction of time splits into a boost and a rotation (our own).

**Wikipedia:** [Lorentz group](https://en.wikipedia.org/wiki/Lorentz_group). It says: “Mathematically, the Lorentz group may be described as the indefinite orthogonal group O(1, 3), the matrix Lie group that preserves the quadratic form”

**Sources:** none listed. No primary source with a working link was found.

### Left group uniformities make continuous homomorphisms uniformly continuous

**Remember:** Closeness throughout the group comes from closeness to the identity.

*True by definition.* MSC 22A05 (Structure of general topological groups), 54E15, 54H11. arXiv math.GN, math.GR. Level 3: graduate.

**Definition.** A uniformity is a system of relations that describe closeness without a metric. The left uniformity of a topological group uses x⁻¹y ∈ U, where U ranges over neighbourhoods of the identity. A map is uniformly continuous when one input relation works for all pairs at each desired output relation.

**Problem.** A group homomorphism continuous at one point is uniformly continuous for the left uniformities.

**How the definition helps.** The left uniformity reduces uniform continuity to continuity at the identity. If f is continuous at g, choose U with f(gU) ⊆ f(g)V for each identity neighbourhood V in the target, and cancel f(g) to get f(U) ⊆ V. Thus x⁻¹y ∈ U implies f(x)⁻¹f(y) ∈ V, as required. For groups without a metric, the work is to verify that the left relations form a uniformity and recover the group topology (our own).

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “Since f is a homomorphism, it follows immediately from cancellation that f(U) ⊆ V.”

**Sources:** none listed. No primary source with a working link was found.

### Analytically integral weights match representations of a compact group

**Remember:** Integral for the algebra is not enough; the group decides which weights live.

*Makes the theorem clean to state or prove.* MSC 22C05 (Compact groups), 17B10. arXiv math.RT. Level 3: graduate.

**Definition.** Let K be a connected compact Lie group with maximal torus T. A weight λ is analytically integral if ⟨λ,H⟩ is an integer whenever e to the 2πH is the identity of K. This depends on the group K, not only on its Lie algebra. A weight is integral in the Lie algebra sense if 2⟨λ,α⟩/⟨α,α⟩ is an integer for each root α.

**Problem.** The irreducible representations of a connected compact Lie group K match its dominant analytically integral weights. If K is simply connected, the two notions of integral agree.

**How the definition helps.** Integrality defined through the group's exponential map records which Lie algebra representations integrate to the group, so the theorem for K has the same form as for the Lie algebra. For example, SO(3) and SU(2) have the same Lie algebra, but the two-dimensional spin representation of SU(2) does not come from SO(3) (our own). Its highest weight is integral but not analytically integral for SO(3) (our own). What stays hard is the existence of a representation for each such weight, which a standard proof gets from the Weyl character formula and the Peter–Weyl theorem.

**Wikipedia:** [Theorem of the highest weight](https://en.wikipedia.org/wiki/Theorem_of_the_highest_weight). It says: “This distinction reflects the fact that if K is not simply connected, there may be representations of 𝔤 that do not come from representations of K.”

**Sources:**

- [H. Weyl, Theorie der Darstellung kontinuierlicher halb-einfacher Gruppen durch lineare Transformationen. I, Math. Z. 23 (1925) 271–309](https://doi.org/10.1007/BF01506234)

### Averaged matrix coefficients give characters

**Remember:** Average out the choice of basis, leaving only the trace.

*True by definition. Confidence: medium.* MSC 22C05 (Compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** A class function is constant on each conjugacy class. For a compact Hausdorff group, averaging over all conjugates uses Haar measure, the translation-invariant probability measure. This operation projects continuous functions onto continuous class functions. A matrix coefficient takes the inner product of a translated vector with a fixed vector.

**Problem.** For a continuous irreducible unitary representation, averaging a matrix coefficient gives a multiple of its character, the trace function. Finite linear combinations of these characters approximate every continuous complex class function uniformly.

**How the definition helps.** The averaging projection converts approximation by matrix coefficients into approximation by characters. In our own proof, averaging the conjugates of a representation matrix gives a matrix commuting with the entire representation. Schur’s lemma makes that average scalar, and its trace gives the scalar as the character divided by the dimension. The Peter–Weyl theorem supplies uniform approximation by sums of coefficients. Averaging cannot increase the uniform error and fixes the class function being approximated.

**Wikipedia:** [Class function](https://en.wikipedia.org/wiki/Class_function). It says: “the irreducible characters form a Hilbert basis of the Hilbert space of square-integrable class functions”

**Sources:** none listed. No primary source with a working link was found.

### Coincident group uniformities give compact groups conjugation-invariant neighbourhoods

**Remember:** When left and right closeness agree, conjugation preserves suitably small neighbourhoods.

*True by definition.* MSC 22C05 (Compact groups), 54E15. arXiv math.GN, math.GR. Level 3: graduate.

**Definition.** The left uniformity of a topological group tests x⁻¹y ∈ U, and the right uniformity tests xy⁻¹ ∈ U. Here U varies over the neighbourhoods of the identity. A uniformity describes closeness by a family of such relations. A compact Hausdorff space admits only one uniformity that gives its topology.

**Problem.** In a compact Hausdorff group, every neighbourhood of the identity contains an open neighbourhood invariant under conjugation by every group element.

**How the definition helps.** Equality of the two group uniformities turns left closeness into right closeness; they agree because a compact Hausdorff space has only one uniformity. For each U, take a symmetric open identity neighbourhood V such that x⁻¹y ∈ V implies xy⁻¹ ∈ U, and put y = xv⁻¹ to get xvx⁻¹ ∈ U (our own). The union of all conjugates of V is open, lies in U and is invariant under conjugation (our own). The work lies in the uniqueness theorem for the uniformity, which replaces a direct compactness argument (our own).

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “They also coincide if G is compact Hausdorff, since in that case there is only one uniformity whose uniform topology reproduces the given topology.”

**Sources:** none listed. No primary source with a working link was found.

### Distinct eigenvalues give covering sheets

**Remember:** With distinct eigenvalues, only their order remains to choose.

*Rules out counterexamples.* MSC 22C05 (Compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** In the unitary group G = U(n), call a matrix regular if all its eigenvalues are distinct. The quotient G/T by the diagonal unitary subgroup parametrizes ordered lists of mutually orthogonal complex lines spanning the space.

**Problem.** Send an ordered list of orthogonal lines and a diagonal unitary matrix with distinct entries to the unitary matrix with those eigenlines and eigenvalues. Onto the regular matrices, this map is a covering with n! sheets.

**How the definition helps.** Distinct eigenvalues determine their lines uniquely, leaving only their order to choose. In our own proof, put each eigenvalue in a separate small disk. Nearby unitary matrices have one eigenvalue in each disk, and the corresponding line projections vary smoothly. The n! possible orders therefore give local sheets. In our own counterexample, the identity in U(2) admits every orthogonal pair of lines, so its fiber is infinite.

**Wikipedia:** [Weyl integration formula](https://en.wikipedia.org/wiki/Weyl_integration_formula). It says: “is a smooth covering with fiber W when it is restricted to regular points”

**Sources:** none listed. No primary source with a working link was found.

### Haar measure gives invariant orbit measures

**Remember:** Sample a group element and move one point to sample the orbit.

*True by definition.* MSC 22C05 (Compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** Let a compact Hausdorff group act continuously on a compact Hausdorff space with just one orbit. Its normalized Haar measure is its translation-invariant regular probability measure. Measure a Borel set by the Haar measure of all group elements sending a chosen point into it.

**Problem.** This prescription gives the unique invariant regular probability measure on the space, independently of the chosen point.

**How the definition helps.** Using the orbit map transfers translation invariance directly to the space. In our own proof, translating a set left-translates its inverse image, and changing the chosen point right-translates it, so both preserve its measure. For uniqueness, the average of a continuous function over all translates of a point is constant, and every invariant probability measure integrates the function to that constant (our own). Existence uses Haar's theorem.

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “There exists a G-invariant measure on Oλ.”

**Sources:**

- [Alfréd Haar, Der Massbegriff in der Theorie der Kontinuierlichen Gruppen (1933), for existence of Haar measure](https://doi.org/10.2307/1968346)

### Matrix coefficients form dense algebras

**Remember:** The product of two coefficients is a coefficient of their tensor product.

*Makes the theorem clean to state or prove.* MSC 22C05 (Compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** A matrix coefficient is a function g ↦ ℓ(gv), where v belongs to a finite-dimensional continuous complex representation and ℓ is a linear functional. Take all linear combinations of these functions. Traces alone give only functions constant on conjugacy classes.

**Problem.** The matrix coefficients of a compact Hausdorff group span an algebra dense in the continuous functions in the uniform norm.

**How the definition helps.** Matrix coefficients give a class of functions closed under products that can distinguish points in the same conjugacy class (our own explanation). Tensor the representations to multiply their coefficients. The trivial representation gives constants, and conjugate representations supply complex conjugates. The substantial part of Peter–Weyl shows that finite-dimensional continuous representations separate points of a compact Hausdorff group. Stone–Weierstrass now gives uniform density.

**nLab:** [Peter-Weyl theorem](https://ncatlab.org/nlab/show/Peter-Weyl+theorem). It says: “Representative functions on a compact topological group form a dense subspace of the space of all continuous functions.”

**Sources:** none listed. No primary source with a working link was found.

### Profinite matrix representations factor finitely

**Remember:** A small subgroup in a matrix Lie group must be trivial.

*True by definition.* MSC 22C05 (Compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** A profinite group is a compact Hausdorff group whose connected components are singletons. Equivalently, its elements are compatible tuples in a directed system of finite discrete groups. A continuous finite-dimensional unitary representation is a continuous homomorphism to a group of unitary matrices.

**Problem.** Every continuous finite-dimensional unitary representation of a profinite group factors through a finite quotient.

**How the definition helps.** The tuple description gives an entire subgroup in the kernel once a single finite coordinate is controlled. In our own proof, choose a neighborhood of the identity matrix containing no nontrivial subgroup. Its inverse image contains the kernel of a projection to one sufficiently fine finite group. The representation sends that kernel to a subgroup inside the chosen neighborhood, so it kills the kernel. The cited Lie group fact supplies the neighborhood, and the inverse limit characterization supplies the projection.

**nLab:** [profinite group](https://ncatlab.org/nlab/show/profinite+group). It says: “A profinite group is an inverse limit of a system of finite groups.”

**Paper or page:** [Stationary random subgroups in negative curvature](https://arxiv.org/abs/2303.04237v4). It says: “For example, Lie groups as well as discrete groups have no small subgroups.”

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

### Weyl orbits classify conjugacy

**Remember:** Move to one torus, then test a finite orbit.

*Makes the theorem clean to state or prove.* MSC 22C05 (Compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** Choose a maximal torus T in a compact connected Lie group G, a maximal subgroup isomorphic to a product of circles. The elements whose conjugation preserves T form its normalizer. Dividing the normalizer by T gives the Weyl group.

**Problem.** Every conjugacy class in G meets T, and its intersection with T is exactly one Weyl group orbit.

**How the definition helps.** The Weyl group records precisely the conjugations visible inside the chosen torus. In our own proof, if g carries t to t′, both T and gTg⁻¹ contain t′. Both are maximal tori in the identity component of the subgroup commuting with t′. Conjugacy of maximal tori there lets us adjust g to preserve T without changing t′. The maximal torus theorem also ensures that each conjugacy class meets T.

**nLab:** [maximal torus](https://ncatlab.org/nlab/show/maximal+torus). It says: “Any two elements of a maximal torus T ↪︎ G are conjugate in G precisely if they are conjugate via the Weyl group.”

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “The following map between the set of Weyl orbits in T and the set of conjugacy classes of T in G is a bijection.”

**Sources:** none listed. No primary source with a working link was found.

### Bohr compactification preserves quotients

**Remember:** Kill the subgroup, and continuity kills its closure too.

*True by definition.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** The Bohr compactification is a compact Hausdorff group reached by a continuous homomorphism with dense image. Every continuous homomorphism to a compact Hausdorff group must factor uniquely through it. To pass to a quotient, take the closure of the image of the subgroup being killed.

**Problem.** Let N be a closed normal subgroup of a locally compact group G. The Bohr compactification of G/N is the Bohr compactification of G divided by the closure of the image of N.

**How the definition helps.** The unique factorization property turns the quotient formula into a test of which maps kill N. In our own proof, a continuous map from G/N to a compact Hausdorff group lifts to G and kills N. Its extension to the Bohr compactification kills the closure of the image of N by continuity. It therefore factors uniquely through the compact quotient, which has the required dense image of G/N.

**nLab:** [Bohr compactification](https://ncatlab.org/nlab/show/Bohr+compactification). It says: “The Bohr compactification exists for any topological group G.”

**Paper or page:** [On Bohr compactifications and profinite completions of group extensions](https://arxiv.org/abs/2305.04803v1). It says: “Bohr(p) is surjective and its kernel is $\\overline{\\beta \_G(N)}$.”

**Sources:** none listed. No primary source with a working link was found.

### Closed subgroups make Chabauty compact

**Remember:** Closed subgroup limits may stop being discrete.

*Rules out counterexamples. Confidence: medium.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** Represent a closed subgroup H by H ∪ {∞} in the one-point compactification of a locally compact Hausdorff group. Give these sets the topology on compact subsets, where sets must hit specified open sets and miss specified closed sets. Do not restrict H to discrete subgroups.

**Problem.** The space of closed subgroups is compact. The discrete subgroups alone need not form a compact space.

**How the definition helps.** Allowing every closed subgroup keeps limits that would disappear if we required discreteness (our own argument). In the compact space of closed sets containing ∞, each limit of subgroups contains the identity, and continuity of division keeps it closed under quotients. So the subgroups form a closed subset of a compact space. For example, (1∕n)ℤ converges to ℝ, which is not discrete.

**Paper or page:** [Computably locally compact groups and their closed subgroups](https://arxiv.org/abs/2407.19440). It says: “For a computably locally compact group G, the Chabauty space 𝒮(G) is Π⁰₁ (effectively closed) in the computably compact hyperspace 𝒦(G\*)”

**Sources:**

- [Computably locally compact groups and their closed subgroups, Proposition 4.2](https://arxiv.org/abs/2407.19440)
- [Claude Chabauty, Limite d’ensembles et géométrie des nombres (1950)](https://doi.org/10.24033/bsmf.1412)

### Coset counts give rational modular values

**Remember:** Measure the two subgroups in units of their intersection.

*True by definition.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** A totally disconnected group has only singletons as connected components. Suppose it is locally compact, so the identity has a compact neighborhood. Fix a left Haar measure μ, a nonzero regular measure unchanged by left translations. For a compact open subgroup U, define Δ(g) as μ(U) divided by μ(g⁻¹Ug).

**Problem.** The modular function of a totally disconnected locally compact group takes values in the positive rational numbers.

**How the definition helps.** The coset formula writes the modular function as a ratio of positive integers. In our own derivation, both subgroups split into finitely many cosets of their open intersection. Each coset has the same measure, which cancels in the ratio. Uniqueness of Haar measure up to scale identifies this ratio with the factor for conjugation. Van Dantzig’s theorem supplies U.

**Paper or page:** [Cayley--Abels graphs and invariants of totally disconnected, locally compact groups](https://arxiv.org/abs/2105.12630v1). It says: “the image of the modular function is a subgroup of the multiplicative group of positive rational numbers.”

**Sources:** none listed. No primary source with a working link was found.

### Finite stabilizer orbits give compactness

**Remember:** A stabilizer with finite orbits sits in a product of finite groups.

*Rules out counterexamples.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** Give permutations of a countable set the topology of pointwise convergence on that discrete set. Take a closed transitive group of permutations and require each point stabilizer to have only finite orbits.

**Problem.** Each point stabilizer is compact and open. The group is therefore locally compact.

**How the definition helps.** Finite orbits place a point stabilizer inside a compact product of finite permutation groups, one for each orbit (our own argument). Closedness of the stabilizer then makes it compact, and fixing one point is an open condition. In the full permutation group of a countably infinite set, every stabilizer of a finite set has an infinite orbit. So none of its basic neighborhoods is compact.

**Paper or page:** [Cayley--Abels graphs and invariants of totally disconnected, locally compact groups](https://arxiv.org/abs/2105.12630). It says: “Assume G is closed in the permutation topology. Assume also that all suborbits are finite.”

**Sources:** none listed. No primary source with a working link was found.

### Lattices force ambient unimodularity

**Remember:** A finite invariant quotient cannot sustain a nontrivial volume scaling.

*Rules out counterexamples.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** A lattice is a discrete subgroup Γ whose quotient G∕Γ has a nonzero finite invariant measure. This is stronger than just requiring a discrete subgroup. A group is unimodular when left Haar measure, a volume invariant under left translation, is also right invariant.

**Problem.** A locally compact Hausdorff group with a lattice is unimodular.

**How the definition helps.** Finite invariant volume forces every logarithmic volume change to vanish (our own argument). The modular function is one on the lattice, so its logarithm descends to G∕Γ and pushes the normalized quotient measure to a probability measure on ℝ. This measure is invariant under every logarithmic volume change, and no probability measure on ℝ is invariant under a nonzero translation. Integer translations form a discrete subgroup of the nonunimodular real affine group, so discreteness alone is not enough.

**Wikipedia:** [Lattice (discrete subgroup)](https://en.wikipedia.org/wiki/Lattice_%28discrete_subgroup%29). It says: “a necessary condition for a group to contain a lattice is that the group must be unimodular.”

**Sources:** none listed. No primary source with a working link was found.

### No small subgroups makes a locally compact group a Lie group

**Remember:** No tiny subgroups near the identity, then a smooth Lie group.

*Rules out counterexamples.* MSC 22D05 (General properties and structure of locally compact groups), 22E15. arXiv math.GR, math.GN. Level 3: graduate.

**Definition.** A topological group has no small subgroups if some neighbourhood of the identity contains no subgroup other than the trivial one. The circle group has this property. The additive group of p-adic integers does not, since pᵏℤₚ lies in any neighbourhood of 0 for large k.

**Problem.** Yamabe: a locally compact connected group is a Lie group, that is, admits a compatible smooth structure, exactly when it has no small subgroups. Every locally compact connected group is an inverse limit of Lie groups.

**How the definition helps.** The condition rules out exactly the groups that have arbitrarily small subgroups, which cannot sit inside a smooth manifold near the identity. The p-adic integers are the standard example: they are compact, but not a Lie group. Gleason and Montgomery–Zippin (1952) showed that locally Euclidean groups are Lie groups, which settled Hilbert's fifth problem, and the no-small-subgroups condition was the key step. The proofs remain long and hard.

**Wikipedia:** [Hilbert's fifth problem](https://en.wikipedia.org/wiki/Hilbert%27s_fifth_problem). It says: “Every locally compact connected group is the projective limit of a sequence of Lie groups. Further, it is a Lie group if it has no small subgroups.”

**Sources:**

- [A. M. Gleason, Groups without small subgroups, Annals of Mathematics 56 (1952) 193](https://doi.org/10.2307/1969795)
- [D. Montgomery and L. Zippin, Small subgroups of finite-dimensional groups, Annals of Mathematics 56 (1952) 213](https://doi.org/10.2307/1969796)
- [J. von Neumann, Die Einführung analytischer Parameter in topologischen Gruppen, Annals of Mathematics 34 (1933) 170–190](https://doi.org/10.2307/1968347)

### Direct integrals make the Plancherel theorem statable

**Remember:** When you cannot sum the irreducible pieces, integrate them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 22D10 (Unitary representations of locally compact groups), 43A30, 46C05. arXiv math.RT, math.FA. Level 3: graduate.

**Definition.** A direct integral of Hilbert spaces is a continuous analogue of a direct sum, taken over a measure space. The unitary dual Ĝ is the set of irreducible unitary representations of G, up to equivalence.

**Problem.** Let G be a second countable, unimodular locally compact group of type I. Then L²(G) ≅ ∫ π ⊗ π\* dμ(π) for a unique measure μ on Ĝ, the Plancherel measure. Equivalently, ‖f‖₂² is the integral over μ of the squared Hilbert–Schmidt norm of π(f).

**How the definition helps.** When L²(G) is not a sum of irreducibles, it is still an integral of them. A direct sum already fails for G = ℤ, because the characters of ℤ are not in L²(ℤ) (our own words). Unimodular means that left and right Haar measures agree, and type I is a technical condition that makes the representation theory well behaved. For groups that are not type I, the decomposition is not unique, so the theorem needs the type I hypothesis.

**nLab:** [Plancherel measure](https://ncatlab.org/nlab/show/Plancherel+measure). It says: “while it's not always possible to decompose L²(G) as a direct sum of irreducible reprenentations (this already fails for G=ℤ), it is always possible to decompose it as a direct integral of irreducible representations”

**Sources:**

- [I. E. Segal, An extension of Plancherel's formula to separable unimodular groups, Annals of Mathematics 52 (1950) 272–292](https://doi.org/10.2307/1969470)

### The strong operator topology makes regular representations continuous

**Remember:** Translation changes each fixed function a little, but not every function uniformly.

*Makes the theorem clean to state or prove.* MSC 22D10 (Unitary representations of locally compact groups), 22D05. arXiv math.RT, math.FA. Level 3: graduate.

**Definition.** A unitary representation is a homomorphism to the unitary operators on a Hilbert space that is continuous in the strong operator topology. This topology tests convergence on each vector separately. The operator norm instead tests convergence uniformly over all unit vectors.

**Problem.** For a locally compact Hausdorff group G, the left regular action on L²(G) is a unitary representation. It sends f(x) to f(g⁻¹x) and uses left Haar measure, a measure unchanged by left translations.

**How the definition helps.** The strong topology makes continuity a statement about each fixed square integrable function. Left Haar invariance gives norm preservation, and for continuous functions of compact support small translations converge uniformly inside one compact set (our own). This gives convergence in L², which extends by density (our own). The norm topology is too strong even for ℝ: a unit vector supported on an interval shorter than the shift moves a distance √2 (our own).

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “The reason that in the definition of a unitary representation, the strong operator topology on 𝒰(ℋ) is used and not the norm topology, is that only few homomorphisms turn out to be continuous in the norm topology.”

**Sources:** none listed. No primary source with a working link was found.

### Admissibility gives smooth biduality

**Remember:** Take the double dual of each finite fixed space, then take their union.

*Rules out counterexamples. Confidence: medium.* MSC 22D12 (Other representations of locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** For a totally disconnected locally compact group, a complex representation is smooth if every vector has an open stabilizer. Its smooth dual keeps only linear functionals with open stabilizers. An admissible representation also has finite-dimensional fixed spaces for all compact open subgroups.

**Problem.** The evaluation map from a smooth admissible representation to its double smooth dual is an isomorphism.

**How the definition helps.** Admissibility makes evaluation an isomorphism on each fixed space (our own argument). Averaging over a compact open subgroup projects onto its fixed space, so its fixed functionals are precisely the dual of that space. Apply this twice and use finite-dimensional double duality, since every smooth vector lies in such a fixed space. For the trivial group, an infinite-dimensional vector space fails algebraic double duality.

**Wikipedia:** [Admissible representation](https://en.wikipedia.org/wiki/Admissible_representation). It says: “the space of vectors fixed by any compact open subgroup is finite dimensional”

**Sources:** none listed. No primary source with a working link was found.

### Admissibility makes character traces finite

**Remember:** Average first, then trace on a finite space.

*Rules out counterexamples. Confidence: medium.* MSC 22D12 (Other representations of locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** Let G be a totally disconnected locally compact Hausdorff group. A complex representation is smooth if every vector has an open stabilizer. It is admissible if the vectors fixed by each compact open subgroup form a finite-dimensional space.

**Problem.** Every compactly supported locally constant test function defines a finite-rank operator in an admissible smooth complex representation.

**How the definition helps.** Admissibility gives the integrated operator a finite-dimensional target (our own argument). Compact support and local constancy give one compact open subgroup under whose left translations the test function stays fixed. Left invariance of the integration measure then forces the operator’s image into the subgroup’s fixed space. Its finite rank lets us take its trace. For infinitely many copies of the trivial representation, a function of integral one gives the identity, which has infinite rank.

**Wikipedia:** [Admissible representation](https://en.wikipedia.org/wiki/Admissible_representation). It says: “the space of vectors fixed by any compact open subgroup is finite dimensional”

**Sources:** none listed. No primary source with a working link was found.

### Compact open subgroups give smoothness

**Remember:** A sufficiently small subgroup of complex invertible matrices is trivial.

*True by definition. Confidence: medium.* MSC 22D12 (Other representations of locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** A locally profinite group is a Hausdorff topological group with a compact open subgroup inside each identity neighborhood. A representation is smooth if every vector has an open stabilizer. Continuity of a complex matrix representation uses the usual topology on matrices.

**Problem.** Every finite-dimensional continuous complex representation of a locally profinite group has open kernel and is smooth.

**How the definition helps.** The compact open subgroup definition turns one small matrix neighborhood into an open kernel (our own argument). Complex invertible matrices have an identity neighborhood containing no nontrivial subgroup. Its preimage contains a compact open subgroup, whose image must therefore be trivial. The kernel contains that open subgroup and is open. Van Dantzig’s theorem identifies this neighborhood definition with local compactness and total disconnectedness for Hausdorff groups.

**Wikipedia:** [Locally profinite group](https://en.wikipedia.org/wiki/Locally_profinite_group). It says: “every neighborhood of the identity element contains a compact open subgroup.”

**Sources:** none listed. No primary source with a working link was found.

### Double cosets turn reversal into commutativity

**Remember:** If reversal fixes both factors and their product, the factors commute.

*True by definition.* MSC 22D15 (Group algebras of locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** Let G be compact and K a closed subgroup. A Gelfand pair has a commutative convolution algebra of continuous functions constant on double cosets KgK. Convolution combines f and h by integrating f(y)h(y⁻¹x) over y with the translation-invariant probability measure. A continuous map σ reverses products if σ(xy) = σ(y)σ(x).

**Problem.** If σ reverses products, preserves each double coset and satisfies σ(σ(x)) = x, then G and K form a Gelfand pair.

**How the definition helps.** The convolution definition turns the theorem into a symmetry test on functions. In our own proof, composing with σ fixes every double-coset function, including any convolution of two such functions. Changing variables by σ reverses the order of convolution, because σ preserves the invariant probability measure. Both orders therefore agree.

**Wikipedia:** [Gelfand pair](https://en.wikipedia.org/wiki/Gelfand_pair). It says: “Suppose that there exists an involutive anti-automorphism σ of G such that any (K, K) double coset is σ-invariant.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the full group C\*-algebra by all representations makes every representation extend

**Remember:** The supremum bounds every representation at once.

*True by definition.* MSC 22D25 (\\(C<sup>\*\\</sup>)-algebras and \\(W<sup>\*\\</sup>)-algebras in relation to group representations), 46L05. arXiv math.OA. Level 3: graduate.

**Definition.** Let G be a discrete group and ℂ\[G\] its group algebra of finite formal sums. The full group C\*-algebra C\*(G) is the completion of ℂ\[G\] in the norm ‖x‖ = sup ‖π(x)‖ over all unitary representations π of G. The reduced C\*-algebra instead uses only the left regular representation, the action of G on ℓ²(G) by translation.

**Problem.** Every unitary representation of a discrete group G extends uniquely to a representation of C\*(G) that preserves adjoints.

**How the definition helps.** By definition, ‖π(x)‖ ≤ ‖x‖ for every unitary representation π and every x in ℂ\[G\], so π extends by continuity. The work is to show that the supremum is a norm: it is at most the sum of the absolute values of the coefficients, and the left regular representation makes it nonzero (our own account). The reduced algebra lacks the property. For the free group on two generators, the trivial representation does not extend to the reduced algebra.

**Wikipedia:** [Group algebra of a locally compact group](https://en.wikipedia.org/wiki/Group_algebra_of_a_locally_compact_group). It says: “It follows from the definition that, when G is a discrete group, C\*(G) has the following universal property”

**Sources:** none listed. No primary source with a working link was found.

### Compact induction preserves exactness

**Remember:** Each coset contributes one copy, and direct sums preserve exactness.

*True by definition. Confidence: medium.* MSC 22D30 (Induced representations for locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** Let H be an open subgroup of a locally profinite group G, where compact open subgroups form a neighborhood basis at the identity. For a smooth H-representation V, compact induction uses functions f from G to V satisfying f(hg) = hf(g). They vanish outside finitely many right cosets Hg. Ordinary smooth induction allows support on infinitely many cosets.

**Problem.** Compact induction from H is exact on smooth representations over a field. Here smooth means each vector is fixed by an open subgroup.

**How the definition helps.** Finite coset support makes compact induction a direct sum on the underlying vector spaces (our own argument). Evaluate at one representative per right coset. Each nonzero value has an open stabilizer in H. Intersecting their conjugates gives an open subgroup fixing the function under right translation. Direct sums of exact sequences of vector spaces are exact.

**Wikipedia:** [Induced representation](https://en.wikipedia.org/wiki/Induced_representation). It says: “φ has compact support mod H”

**Sources:** none listed. No primary source with a working link was found.

### Equivariant functions describe bundle sections

**Remember:** Changing the coset representative changes the coordinate by the inverse character.

*True by definition.* MSC 22D30 (Induced representations for locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** Let H be a closed subgroup of a Lie group G, and let χ be a smooth homomorphism from H to nonzero complex numbers. Put a complex line over each coset gH by identifying (gh, z) with (g, χ(h)z). A section chooses one point on each line.

**Problem.** Smooth sections of this line bundle correspond to smooth functions f on G with f(gh) = χ(h)⁻¹f(g). The correspondence respects the G-actions.

**How the definition helps.** The quotient construction turns agreement between two descriptions of a section into one equation for f. In our own proof, the section over gH has representative (g, f(g)). Replacing g by gh gives the same point exactly when f(gh) = χ(h)⁻¹f(g). Smooth local choices of coset representatives give the equivalence of smoothness. Left translation on G gives the stated compatibility with the group actions.

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “f ↦ (gH ↦ \[g, f(g)\]) is G-equivariant bijection.”

**Sources:** none listed. No primary source with a working link was found.

### Kazhdan's property (T) makes lattices in higher-rank Lie groups finitely generated

**Remember:** Almost fixed means fixed, and lattices come out finitely generated.

*Makes the theorem clean to state or prove.* MSC 22D55 (Kazhdan's property (T), the Haagerup property, and generalizations), 22E40. arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** A locally compact group G has property (T) if every unitary representation with almost invariant vectors has a nonzero invariant vector. Almost invariant means: for each compact K and ε &gt; 0, some unit vector moves less than ε under all of K. A lattice is a discrete subgroup Γ such that G/Γ has finite invariant volume.

**Problem.** For n ≥ 3, every lattice in SL(n, ℝ) is finitely generated and has finite abelianization.

**How the definition helps.** The property passes from a Lie group to its lattices, and then gives finite generation in a few lines. Kazhdan showed that a lattice has (T) exactly when the ambient group has (T), and that SL(n, ℝ) for n ≥ 3 has (T). A countable discrete group with (T) is finitely generated and has finite abelianization. The hard part is to prove (T) for the Lie group; lattices in SO(n,1) and SU(n,1) lack (T) and need other methods.

**Wikipedia:** [Kazhdan's property (T)](https://en.wikipedia.org/wiki/Kazhdan%27s_property_%28T%29), [Lattice (discrete subgroup)](https://en.wikipedia.org/wiki/Lattice_%28discrete_subgroup%29). It says: “The property known as (T) was introduced by Kazhdan to study the algebraic structure lattices in certain Lie groups when the classical, more geometric methods failed or at least were not as efficient.”

**Sources:**

- [D. Kazhdan, Connection of the dual space of a group with the structure of its closed subgroups, Functional Analysis and Its Applications 1 (1967) 63–65](https://doi.org/10.1007/BF01075866)

### Allowing immersed Lie subgroups makes every Lie subalgebra come from a subgroup

**Remember:** Let subgroups wind densely, and every subalgebra gets its subgroup.

*Makes the theorem clean to state or prove.* MSC 22E15 (General properties and structure of real Lie groups), 22E60. arXiv math.GR, math.DG. Level 3: graduate.

**Definition.** A Lie subgroup of G is a subgroup that is a Lie group in its own topology. Its inclusion map must be one-to-one, and its derivative must be one-to-one at every point. Its topology may be finer than the one it gets from G, and it need not be closed.

**Problem.** Connected Lie subgroups of G correspond one-to-one with Lie subalgebras of its Lie algebra.

**How the definition helps.** With the wider definition, the correspondence between subalgebras and connected subgroups is a bijection; with only closed subgroups it would fail. In the 2-torus, a line of irrational slope in ℝ² is a subalgebra, and its subgroup is the irrational winding, which is dense and not closed. Taking this subgroup with its own line topology makes it a Lie subgroup. What stays hard is the existence proof, which uses the Frobenius theorem on integrable distributions (our own).

**Wikipedia:** [Lie group–Lie algebra correspondence](https://en.wikipedia.org/wiki/Lie_group%E2%80%93Lie_algebra_correspondence), [Closed-subgroup theorem](https://en.wikipedia.org/wiki/Closed-subgroup_theorem). It says: “If G is a Lie group and 𝔥 is a Lie subalgebra of Lie(G), then there is a unique connected Lie subgroup (not necessarily closed) H of G with Lie algebra 𝔥.”

**Sources:** none listed. No primary source with a working link was found.

### Bi-invariant metrics give subgroup geodesics

**Remember:** With both translation symmetries, a constant group velocity gives a geodesic.

*Rules out counterexamples.* MSC 22E15 (General properties and structure of real Lie groups). arXiv math.GR. Level 3: graduate.

**Definition.** A bi-invariant Riemannian metric measures tangent vectors without changing their lengths under left or right translation. A left-invariant metric requires only the first symmetry. A geodesic has zero acceleration for the metric, and a one-parameter subgroup is a smooth homomorphism from additive ℝ.

**Problem.** For a bi-invariant metric, the geodesics through the identity are exactly the one-parameter subgroups, with their usual linear time parameter.

**How the definition helps.** Right invariance removes the acceleration term that can occur for left-invariant metrics. In our own proof, the cited connection formula gives acceleration ½\[X,X\] = 0 for a path following a left-invariant field X, and geodesics are unique for a given initial velocity. For our own counterexample, give the group of maps t ↦ at + b, with a positive, the left-invariant metric making the generators A and B orthonormal, where \[A,B\] = B. The connection formula then gives the translation subgroup a nonzero acceleration along A.

**Paper or page:** [Dirichlet-Voronoi domain and injectivity radius of flag manifolds -- equivariant cell structure on O(3)/O(1)³](https://arxiv.org/abs/2011.06338v4). It says: “If g is a bi-invariant Riemannian metric on a Lie group G and if ∇ is the associated Levi-Civita connection, then ∀ X,Y ∈ 𝒳ₗ(G), ∇ₓ Y = ½\[X,Y\].”

**Sources:** none listed. No primary source with a working link was found.

### Defining exp by one-parameter subgroups makes homomorphisms commute with it

**Remember:** A homomorphism sends a one-parameter subgroup to another.

*True by definition. Confidence: medium.* MSC 22E15 (General properties and structure of real Lie groups). arXiv math.DG, math.GR. Level 3: graduate.

**Definition.** A one-parameter subgroup of a Lie group G is a smooth homomorphism from the additive real numbers to G. The Lie algebra of G is its tangent space at the identity, with its bracket. For X in the Lie algebra, exp X is the value at time 1 of the one-parameter subgroup with initial velocity X. For matrix groups, another definition uses the power series of the matrix exponential.

**Problem.** Let φ be a smooth homomorphism of Lie groups, with derivative dφ at the identity. Then φ(exp X) = exp(dφ(X)) for every X in the Lie algebra.

**How the definition helps.** With the subgroup definition, both sides are values of one-parameter subgroups with the same initial velocity. In our own step, the curve t ↦ φ(exp tX) is a one-parameter subgroup with velocity dφ(X). Wikipedia states that such a subgroup is unique, which gives equality at t = 1. In our own comparison, the power series gives no direct route, because φ need not be linear or polynomial. In our own account, the work moves to building one-parameter subgroups as flows of left-invariant vector fields and proving uniqueness.

**Wikipedia:** [Exponential map (Lie theory)](https://en.wikipedia.org/wiki/Exponential_map_%28Lie_theory%29). It says: “is the unique one-parameter subgroup of G whose tangent vector at the identity is equal to X.”

**Sources:** none listed. No primary source with a working link was found.

### Discrete central quotients preserve Lie algebras

**Remember:** A covering kernel is discrete, and connected conjugation cannot move it.

*Rules out counterexamples.* MSC 22E15 (General properties and structure of real Lie groups). arXiv math.GR. Level 3: graduate.

**Definition.** Start with the simply connected Lie group for a given finite-dimensional real Lie algebra. Consider quotients by discrete central subgroups, not by arbitrary subgroups of the center.

**Problem.** Every connected Lie group with that Lie algebra is such a quotient. Conversely, dividing by a discrete central subgroup keeps the Lie algebra.

**How the definition helps.** A discrete kernel lets the quotient map preserve local coordinates and hence the tangent Lie algebra. In our own proof, the kernel of the universal covering group is discrete, and conjugation moves each kernel element continuously inside that set, so connectedness makes the kernel central. Lie's integration theorem identifies the covering group from its Lie algebra. In our own counterexample, dividing additive ℝ² by a line reduces the Lie algebra dimension to one.

**Wikipedia:** [Lie group–Lie algebra correspondence](https://en.wikipedia.org/wiki/Lie_group%E2%80%93Lie_algebra_correspondence). It says: “there is a one-to-one correspondence between quotients of G̃ by discrete central subgroups and connected Lie groups having Lie algebra 𝔤”

**Sources:** none listed. No primary source with a working link was found.

### Positive roots give complex flags

**Remember:** Positive root directions stay on the same side under brackets.

*Makes the theorem clean to state or prove.* MSC 22E15 (General properties and structure of real Lie groups), 22C05. arXiv math.RT. Level 3: graduate.

**Definition.** Take a compact connected Lie group G with a maximal torus T, a maximal subgroup that is a product of circles. Conjugation by T splits the complexified Lie algebra into spaces on which T acts by scalars. The nontrivial scalar actions give weights called roots. A real linear functional nonzero on every root selects those with positive value.

**Problem.** Use the positive root spaces as the +i eigenspace on the complexified tangent space of G/T at the identity coset. Translating this choice gives an invariant complex structure on G/T.

**How the definition helps.** Choosing positive roots turns the test for complex coordinates into addition of positive numbers. In our own proof, include the complexified tangent algebra of T with the positive root spaces. Bracketing with that algebra preserves each root space. A nonzero bracket between positive root spaces has weight equal to the sum of their roots, which is still positive. The cited integrability criterion turns this closure into local complex coordinates.

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “Then J is integrable if and only if P is closed under the Lie bracket.”

**Sources:** none listed. No primary source with a working link was found.

### Simply connected Lie groups are determined by their Lie algebras

**Remember:** Simply connected groups are the ones that the Lie algebra fully determines.

*Rules out counterexamples.* MSC 22E15 (General properties and structure of real Lie groups), 22E60. arXiv math.GR, math.DG. Level 3: graduate.

**Definition.** A Lie group is simply connected if it is connected and every loop in it can be contracted to a point.

**Problem.** Passing to the Lie algebra is an equivalence from the category of simply connected Lie groups to the category of finite-dimensional real Lie algebras.

**How the definition helps.** Restricting to simply connected groups removes the counterexamples, so the Lie algebra determines the group and its maps. Without this restriction, SU(2) and SO(3) have the same Lie algebra, and the isomorphism so(3) → su(2) comes from no group map SO(3) → SU(2). Lie's second theorem says that every Lie algebra map out of the Lie algebra of a simply connected group comes from a unique group map. Lie's third theorem, whose global form is due to Cartan, says that every finite-dimensional real Lie algebra comes from a simply connected Lie group.

**nLab:** [Lie's three theorems](https://ncatlab.org/nlab/show/Lie%27s+three+theorems), [Lie group](https://ncatlab.org/nlab/show/Lie+group), [Lie integration](https://ncatlab.org/nlab/show/Lie+integration). It says: “The category of local Lie groups is equivalent to the category of connected and simply connected Lie groups.”

**Sources:**

- [Jean-Pierre Serre, Lie Algebras and Lie Groups, 1964 lectures at Harvard, Lecture Notes in Math. 1500 (1992)](https://doi.org/10.1007/978-3-540-70634-2)
- [Hans Duistermaat, Johan A. C. Kolk, Lie groups, Springer (2000), Chapter 1](https://doi.org/10.1007/978-3-642-56936-4)

### The determinant formula makes connected nilpotent Lie groups unimodular

**Remember:** Conjugation preserves volume because its derivative has determinant of modulus one.

*True by definition.* MSC 22E15 (General properties and structure of real Lie groups), 28C10. arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** The modular function measures how translation scales Haar measure, an invariant volume measure on a group. For a Lie group, compute it as \|det Ad(g)\|, where Ad(g) is the derivative of conjugation by g at the identity. Some conventions take the reciprocal instead. A group is unimodular if this function is identically 1.

**Problem.** Every connected nilpotent Lie group is unimodular. Nilpotence means that sufficiently long iterated commutators are trivial.

**How the definition helps.** The determinant formula turns unimodularity into a linear algebra calculation. For X in the Lie algebra, Ad(exp X) is the exponential of the nilpotent map ad X, so its determinant is 1 (our own). Exponentials generate a connected Lie group, so every element has determinant of modulus 1 (our own). The work lies in deriving the determinant formula from the change of a left invariant volume form under conjugation.

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

### Positive gradings give group dilations

**Remember:** Weights add under brackets, so their scale factors multiply.

*True by definition.* MSC 22E25 (Nilpotent and solvable Lie groups). arXiv math.GR. Level 3: graduate.

**Definition.** A positive grading splits a Lie algebra into spaces of positive integer weights. The bracket of directions of weights i and j has weight i + j, or vanishes. A dilation with factor r &gt; 0 scales each weight-j space by r to the power j.

**Problem.** Every positively graded finite-dimensional real Lie algebra gives a family of group automorphisms on its simply connected Lie group. Applying two of these multiplies their dilation factors.

**How the definition helps.** The grading replaces a check of the group multiplication law with addition of weights. In our own proof, scaling the two inputs multiplies their bracket by exactly the factor assigned to its weight. Each scaling therefore preserves brackets and has an inverse given by the reciprocal scale. Lie’s integration theorem extends it uniquely to the simply connected group. Uniqueness then gives the composition law.

**Paper or page:** [Characteristically nilpotent Lie groups with flat coadjoint orbits](https://arxiv.org/abs/2408.10660v2). It says: “𝔤 admits a family of dilations.”

**Sources:** none listed. No primary source with a working link was found.

### Heisenberg coefficients integrate modulo the center

**Remember:** Remove the center before integrating a coefficient whose size ignores it.

*Rules out counterexamples. Confidence: medium.* MSC 22E27 (Representations of nilpotent and solvable Lie groups (special orbital integrals, non-type I representations, etc.)). arXiv math.RT. Level 3: graduate.

**Definition.** An irreducible unitary representation π is square integrable modulo the center Z if some nonzero matrix coefficient g ↦ ⟨π(g)v, w⟩ has squared absolute value integrable over G/Z. This makes sense because central elements act by scalars of absolute value one, so the absolute value of a coefficient is constant on cosets of Z.

**Problem.** The Schrödinger representation of the real Heisenberg group is square integrable modulo its center, but not square integrable on the full group.

**How the definition helps.** Integrating over cosets removes an infinite central direction along which the absolute value stays constant. In our own example, the Schrödinger representation acts on square-integrable functions on the real line by translations and multiplications by phases. Parseval’s identity makes the integral over G/Z proportional to the product of the vectors’ squared norms. Over the full group, the same integral picks up the infinite measure of the real center.

**Paper or page:** [Characteristically nilpotent Lie groups with flat coadjoint orbits](https://arxiv.org/abs/2408.10660v2). It says: “π is square-integrable modulo Z”

**Sources:** none listed. No primary source with a working link was found.

### Brackets give coadjoint symplectic forms

**Remember:** Pair the point of the orbit with the bracket of two directions.

*Makes the theorem clean to state or prove.* MSC 22E60 (Lie algebras of Lie groups). arXiv math.RT. Level 3: graduate.

**Definition.** A Lie group acts on its tangent algebra at the identity by differentiating conjugation. The resulting action on the dual vector space is the coadjoint action. On the orbit of λ, define a two-form directly by pairing directions generated by X and Y as λ(\[X,Y\]).

**Problem.** This formula gives each coadjoint orbit a symplectic form, an alternating pairing with zero kernel and zero exterior derivative.

**How the definition helps.** The bracket formula makes the kernel exactly the directions that leave the orbit point fixed to first order. In our own proof, these directions represent zero tangent vectors on the orbit. The orbit tangent space therefore inherits a well-defined nondegenerate pairing. Taking its exterior derivative gives a sum of three nested brackets, which vanishes by the Jacobi identity.

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “ω is a symplectic 2-form on Oλ and the coadjoint action is Hamiltonian with Lie algebra homomorphism μ.”

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

### Left-invariant fields preserve brackets under differentiation

**Remember:** Differentiate along the group, and commutators pass through the map.

*True by definition.* MSC 22E60 (Lie algebras of Lie groups). arXiv math.GR. Level 3: graduate.

**Definition.** Translate a tangent vector at the identity to obtain a left-invariant vector field. Define the Lie bracket as the commutator of these fields acting as differential operators on smooth functions.

**Problem.** The derivative at the identity of a smooth Lie group homomorphism preserves the Lie bracket.

**How the definition helps.** Using differential operators lets the chain rule replace a second derivative of a group commutator. In our own proof, left translation commutes with a group homomorphism after translating by the image element. Thus corresponding vector fields give the same derivative on functions pulled back from the target. Subtracting their two compositions gives the same bracket. The identification of identity tangent vectors with left-invariant fields supplies the bracket on the tangent space.

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “Then by taking the derivative of φ at e we obtain a homomorphism of Lie algebras”

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

**Definition.** The convolution algebra of a Lie groupoid consists of compactly supported half-densities on its arrows, multiplied by combining values on composable pairs of arrows. Complete bornological convolution treats this as a complete bornological algebra, instead of completing it to a C\*-algebra.

**Problem.** Complete bornological convolution is a monoidal (2,1)-functor from differentiable stacks, with all their maps, to the Morita 2-category of complete bornological algebras. A differentiable stack is a Lie groupoid up to Morita equivalence.

**How the definition helps.** Changing the target from C\*-algebras to complete bornological algebras removes the conditions on maps. With C\*-algebras, Nuiten proved functoriality only for bibundles that are proper and submersive. This excludes the points of a stack, the stacky group structures of noncommutative tori and the Lie 2-group model of the string group. The proof of the theorem (Aretz and Blohmann) is long; the new target only makes the statement possible.

**nLab:** [category algebra](https://ncatlab.org/nlab/show/category+algebra). It says: “Both conditions can be dropped for complete bornological convolution, which is a monoidal (2,1)-functor from the category of differentiable stacks to the Morita 2-category of complete bornological algebras”

**Sources:**

- [David Aretz, Christian Blohmann, Functoriality of bornological groupoid convolution, 2025, arXiv:2508.11005](https://arxiv.org/abs/2508.11005)

### Uniform upper density makes difference sets syndetic in locally compact abelian groups

**Remember:** Disjoint translates of a dense set run out, so differences cover everything.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 22B05 (General properties and structure of LCA groups), 11B13. arXiv math.CA, math.CO. Level 4: research.

**Definition.** In ℝᵈ, the asymptotic uniform upper density of a set S looks at balls of radius r with any centre. It is the limit superior, as r grows, of the largest share of such a ball that S fills. In a locally compact abelian (LCA) group, Haar measure plays the role of volume. A set S is syndetic when S + C is the whole group for some compact set C.

**Problem.** If a set S in an LCA group G has positive asymptotic uniform upper density, then S − S is syndetic. For ℤ this is a lemma in Fürstenberg's book.

**How the definition helps.** Because the density is translation invariant, disjoint translates of S each fill a fixed share of space, so only about 1/density of them fit (our own summary). A maximal disjoint family of translates S + b is therefore finite, and the sets (S − S) + b cover G (our own steps). The abstract says that a reasonable such density for general LCA groups was long unknown.

**Paper or page:** [Kahane's upper density and syndetic sets in LCA groups](https://arxiv.org/abs/2309.06088v2). It says: “Let G be a LCA group and S ⊂ G a set with positive asymptotic uniform upper density: D̄(S) &gt; 0. Then the difference set S − S is a syndetic set.”

**Sources:**

- [Szilárd Gy. Révész, Kahane's upper density and syndetic sets in LCA groups, arXiv:2309.06088 (2023)](https://arxiv.org/abs/2309.06088v2)

### Compact generation connects coset graphs

**Remember:** A finite list of moves connects the graph only if it generates.

*Rules out counterexamples.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 4: research.

**Definition.** A group is compactly generated if a compact subset generates it as an abstract group. A Cayley–Abels graph is connected, with finitely many neighbors per vertex. The group acts transitively on its vertices and each vertex stabilizer is compact and open.

**Problem.** A locally compact group whose connected components are singletons admits a Cayley–Abels graph exactly when it is compactly generated.

**How the definition helps.** Compact generation supplies finitely many kinds of edges that connect all cosets. In our own construction, take a compact open subgroup U from van Dantzig’s theorem. A compact generating set meets only finitely many double cosets UsU. Join xU to yU when x⁻¹y belongs to these double cosets or their inverses. Each double coset contains finitely many left cosets because U is compact and open. Conversely, paths show that U and finitely many moves to neighbors generate the group. Our own counterexample is an infinite direct sum of discrete two-element groups, whose compact subsets are finite.

**Paper or page:** [Discretisable quasi-actions I: Topological completions and hyperbolicity](https://arxiv.org/abs/2207.04401v2). It says: “Let G be a compactly generated locally compact group containing a compact open subgroup. Then G acts geometrically on its Cayley–Abels graph.”

**Sources:** none listed. No primary source with a working link was found.

### Lie quotients detect dense powers

**Remember:** Test density in each quotient, where open sets can see it.

*True by definition.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 4: research.

**Definition.** A connected locally compact group G is the inverse limit of its Lie quotients G/K, where K runs over compact normal subgroups. So every identity neighborhood in G contains the inverse image of an open set in a single Lie quotient.

**Problem.** For a connected locally compact group G and each positive integer k, the kth powers are dense in G exactly when they are dense in every Lie quotient G/K by a compact normal subgroup.

**How the definition helps.** The inverse limit description replaces an open set in G with a test in one Lie quotient. In our own proof, lift a kth root from that quotient and take its kth power in G. Conversely, the projection of a dense set of kth powers is a dense set of kth powers. The structure theorem for connected locally compact groups supplies the inverse limit description.

**Paper or page:** [Cartan subgroups in connected locally compact groups](https://arxiv.org/abs/2310.15564v1). It says: “Then Pₖ(G) is dense in G if and only if Pₖ(Gα) is dense in Gα for every α.”

**Sources:**

- [Arunava Mandal and Riddhi Shah, Cartan subgroups in connected locally compact groups (2023), Lemma 8.1](https://arxiv.org/abs/2310.15564v1)

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

### Compact normal quotients preserve scale

**Remember:** The same coset action gives the same scale.

*True by definition.* MSC 22D45 (Automorphism groups of locally compact groups). arXiv math.GR. Level 4: research.

**Definition.** For a totally disconnected locally compact group, the scale of g is the minimum of \[U : U ∩ g⁻¹Ug\] over compact open subgroups U. Equivalently, fix one such U and let U act on right cosets by right multiplication. Take the limit of the nth roots of the orbit sizes of Ugⁿ.

**Problem.** Quotienting a totally disconnected locally compact group by a compact normal subgroup does not change the scale of any element.

**How the definition helps.** The growth formula allows the same orbit counts in both groups (our own argument). Choose a compact open subgroup of the quotient. Its inverse image is open and compact because the quotient map has compact kernel and is proper. The quotient map identifies the two right coset spaces and the corresponding subgroup orbits. Their growth rates therefore agree. Proposition 1.6 identifies each rate with the scale defined by minimizing an index.

**Paper or page:** [Cayley--Abels graphs and invariants of totally disconnected, locally compact groups](https://arxiv.org/abs/2105.12630), [Cayley--Abels graphs and invariants of totally disconnected, locally compact groups](https://arxiv.org/abs/2105.12630). It says: “If g ∈ G, then s₍G⁄K₎(gK) = s(g).”

**Sources:** none listed. No primary source with a working link was found.

### Growth makes scale exponentiate

**Remember:** Passing to a power takes a subsequence of the same growth rate.

*True by definition.* MSC 22D45 (Automorphism groups of locally compact groups). arXiv math.GR. Level 4: research.

**Definition.** Let G be a locally compact group whose connected components are single points. The usual scale minimizes an index over compact open subgroups. Instead, fix one compact open subgroup U and count the orbit of Ugⁿ under right multiplication by U. The scale of g is the limit of the nth roots of these orbit sizes.

**Problem.** For every positive integer m, the scale of gᵐ is the mth power of the scale of g.

**How the definition helps.** The growth definition turns powers into a change of index, our own observation. For gᵐ, the nth orbit size is the mnth orbit size for g. Taking its nth root gives the mth power of the corresponding mnth root, by our own calculation. The work is the orbit growth theorem, which identifies the limit with the minimum index for every U.

**Paper or page:** [Cayley--Abels graphs and invariants of totally disconnected, locally compact groups](https://arxiv.org/abs/2105.12630). It says: “If g ∈ G then s(g) = limₙ→∞ \|(αgⁿ)G₍α₎\|¹⁄ⁿ”

**Sources:** none listed. No primary source with a working link was found.

### Synthetic Maurer–Cartan forms make flatness the identity x⁻¹y·y⁻¹z = x⁻¹z

**Remember:** Group differences cancel at the middle point.

*True by definition. Confidence: medium.* MSC 22E15 (General properties and structure of real Lie groups), 58A03. arXiv math.DG. Level 4: research.

**Definition.** Synthetic differential geometry treats infinitesimally close points as actual objects. There, the left Maurer–Cartan form θ of a Lie group sends close points x and y to θ(x,y). This is the unique group element with y = x·θ(x,y), so θ(x,y) = x⁻¹y. The usual one-form moves each tangent vector at g to the identity, by left multiplication by g⁻¹.

**Problem.** The left Maurer–Cartan form θ of a Lie group satisfies the Maurer–Cartan equation dθ + ½\[θ,θ\] = 0. This equation says that θ has zero curvature when viewed as a connection, a rule for comparing nearby fibers.

**How the definition helps.** In the synthetic definition, flatness is the identity θ(x,y)θ(y,z) = θ(x,z) for close points x, y and z. This holds because x⁻¹y · y⁻¹z = x⁻¹z in any group. The nLab says that this identity analytically becomes the statement of vanishing curvature. In our own comparison, the usual proof instead evaluates dθ on left-invariant vector fields. In our own account, the work moves into the synthetic framework, which must match the triangle identity with the Maurer–Cartan equation.

**nLab:** [Maurer-Cartan form](https://ncatlab.org/nlab/show/Maurer-Cartan+form). It says: “θ(x,y) θ(y,z) = θ(x,z). This is what analytically becomes the statement of vanishing curvature.”

**Sources:** none listed. No primary source with a working link was found.

### Differences lower group polynomial degree

**Remember:** A difference uses up one allowed step.

*True by definition.* MSC 22E25 (Nilpotent and solvable Lie groups). arXiv math.GR. Level 4: research.

**Definition.** For a function f on a group, its difference in direction h is Δₕf(x) = f(xh) − f(x). Leibman degree at most d means that every composition of d + 1 differences of f is zero.

**Problem.** If f has degree at most d, with d ≥ 1, then every difference Δₕf has degree at most d − 1.

**How the definition helps.** Counting differences makes the degree drop immediate. In our own proof, d differences applied after Δₕ give d + 1 differences of f, hence zero. No computation of translations in coordinates is needed.

**Paper or page:** [Polynomial and horizontally polynomial functions on Lie groups](https://arxiv.org/abs/2011.13665v1). It says: “f is represented by a function that is polynomial in exponential chart”

**Sources:**

- [Gioacchino Antonelli and Enrico Le Donne, Polynomial and horizontally polynomial functions on Lie groups (2020), Corollary 1.4](https://arxiv.org/abs/2011.13665v1)

### Derivatives bound product degrees

**Remember:** Too many derivatives must exhaust the degree of one factor.

*True by definition.* MSC 22E30 (Analysis on real and complex Lie groups). arXiv math.GR. Level 4: research.

**Definition.** Leibman degree at most d means that every sequence of d + 1 differences gives zero, where a difference subtracts f(x) from f(xh). For smooth real functions on a connected Lie group, one can replace differences by derivatives. Each derivative follows a tangent direction carried from the identity by left translation.

**Problem.** Multiplying two such functions of degrees at most d and e gives a function of degree at most d + e.

**How the definition helps.** The derivative test turns the degree bound into a count of derivatives in the product rule. In our own proof, each derivative acts on one factor in each term. After d + e + 1 derivatives, every term exceeds the degree of one factor. The cited equivalence transfers the result to Leibman degree.

**Paper or page:** [Polynomial and horizontally polynomial functions on Lie groups](https://arxiv.org/abs/2011.13665v1). It says: “Then φ is a polynomial with degree at most d à la Leibman”

**Sources:**

- [Gioacchino Antonelli and Enrico Le Donne, Polynomial and horizontally polynomial functions on Lie groups (2020), Proposition 5.1](https://arxiv.org/abs/2011.13665v1)

### Locally smooth cochains let Lie group cohomology see all central extensions

**Remember:** Use cochains that are smooth only on the pieces of a cover.

*Rules out counterexamples.* MSC 22E41 (Continuous cohomology of Lie groups), 20J06. arXiv math.GR, math.AT. Level 4: research.

**Definition.** The differentiable cohomology Hⁿ(G, A) of a Lie group G, with coefficients in an abelian Lie group A, uses cochains that are smooth only on the pieces of good open covers of the products G × ⋯ × G. These local cochains form a Čech double complex.

**Problem.** The group H²(G, A) classifies all central extensions A → Ĝ → G that are locally trivial principal A-bundles. For discrete A, Hⁿ(G, A) equals the cohomology of the classifying space BG.

**How the definition helps.** Cochains that are smooth only locally can describe extensions whose bundle is nontrivial, and globally smooth cochains cannot. The naive cohomology, with globally smooth maps G × ⋯ × G → A, sees only extensions whose underlying A-bundle is trivial. For example, it misses the double cover ℤ/2 → SU(2) → SO(3) (our own example). For A a topological vector space, the two cohomologies agree.

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

### Normalized induction preserves smooth duals

**Remember:** Two half factors supply the one volume factor needed for pairing.

*Makes the theorem clean to state or prove.* MSC 22E50 (Representations of Lie and linear algebraic groups over local fields). arXiv math.RT. Level 4: research.

**Definition.** Let G = SL₂(F), where F is a nonarchimedean local field, such as the p-adic numbers. Let B be its upper triangular subgroup. Extend a complex character χ of the diagonal subgroup to B by ignoring the off-diagonal entry. Normalized induction multiplies χ by the square root of the volume change under conjugation on upper triangular matrices with ones on the diagonal.

**Problem.** For a character χ with open kernel, the smooth dual of normalized induction from χ is normalized induction from χ⁻¹. The smooth dual consists of linear functionals with open stabilizer.

**How the definition helps.** Normalization lets the two character factors cancel while their square roots supply the volume change required for integration (our own explanation). Multiply the two functions and integrate their product over a maximal compact subgroup. The integration formula makes this pairing invariant under G. Identifying all smooth functionals through this pairing takes a separate duality theorem.

**Wikipedia:** [Induced representation](https://en.wikipedia.org/wiki/Induced_representation). It says: “With the addition of the normalizing factors this induction functor takes unitary representations to unitary representations.”

**Paper or page:** [Representations of SL₂(F)](https://arxiv.org/abs/2404.11188). It says: “The smooth dual of iᴳ′₍B′₎(χ) is iᴳ′₍B′₎(χ⁻¹).”

**Sources:** none listed. No primary source with a working link was found.

### Order selects Langlands quotients

**Remember:** Order the exponents before taking the quotient.

*Rules out counterexamples.* MSC 22E50 (Representations of Lie and linear algebraic groups over local fields), 11F70. arXiv math.RT, math.NT. Level 4: research.

**Definition.** For GLₙ over a p-adic field, choose a subgroup of upper block triangular matrices. On each diagonal block choose an irreducible tempered representation, one satisfying the tempered decay bounds on matrix coefficients. Twist each by a real power of the absolute determinant, ordering the exponents from largest to smallest with no ties. Induce to the whole group with the square-root measure correction, obtaining a standard module.

**Problem.** Each standard module has a unique irreducible quotient. Every irreducible smooth complex representation of GLₙ occurs this way, with unique ordered data up to isomorphism. Smooth means every vector has an open stabilizer.

**How the definition helps.** The order selects which irreducible piece appears as a quotient (our own). For two one-dimensional trivial blocks with exponents ½ and −½, the standard order gives the trivial quotient (our own). Reversing them gives the Steinberg quotient, realized by locally constant functions on the projective line modulo constants (our own). The Langlands classification proves existence and uniqueness for the ordered data.

**Paper or page:** [The local Langlands conjecture](https://arxiv.org/abs/2510.00632v1). It says: “admits a unique irreducible quotient J(P,σ,ν).”

**Sources:** none listed. No primary source with a working link was found.
