### Closed normal subgroups give Hausdorff quotients

**Remember:** Closedness separates the identity coset, and translation does the rest.

*Rules out counterexamples. Confidence: medium.* MSC 22A05 (Structure of general topological groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** For a normal subgroup N of a topological group G, give G/N the quotient topology. A subset of G/N is open exactly when its preimage under the coset map G → G/N is open in G.

**Problem.** The quotient of a Hausdorff topological group by a normal subgroup is Hausdorff exactly when the subgroup is closed.

**How the definition helps.** Closedness makes the identity coset a closed point, and translation then makes all points closed (our own argument). The quotient is a topological group, and in a topological group with closed points, distinct points have disjoint neighborhoods. Conversely, if the quotient is Hausdorff, the preimage N of the identity point is closed. For example, ℝ∕ℚ has only two open sets because ℚ is dense.

**nLab:** [closed subgroup](https://ncatlab.org/nlab/show/closed+subgroup). It says: “A common condition on subgroups of a topological group is that they be closed.”

**Sources:** none listed. No primary source with a working link was found.

### An invariant inner product makes complete reducibility immediate

**Remember:** An invariant subspace has an invariant orthogonal complement.

*True by definition.* MSC 22D10 (Unitary representations of locally compact groups), 20C15. arXiv math.RT. Level 2: later undergraduate.

**Definition.** A finite-dimensional unitary representation of a compact group G is a continuous linear action preserving a positive definite Hermitian inner product.

**Problem.** Every continuous finite-dimensional complex representation of a compact group is a direct sum of irreducible representations, which have no proper nonzero invariant subspaces.

**How the definition helps.** Average any positive definite Hermitian inner product over G using Haar probability measure to obtain an invariant one (our own). Every invariant subspace then has an invariant orthogonal complement because the group operators preserve the inner product. Induction on dimension gives a direct sum of irreducibles (our own).

**Wikipedia:** [Unitary representation](https://en.wikipedia.org/wiki/Unitary_representation). It says: “A unitary representation is completely reducible, in the sense that for any closed invariant subspace, the orthogonal complement is again a closed invariant subspace.”

**Sources:** none listed. No primary source with a working link was found.

### Lorentz transformations as isometries are closed under composition and inversion

**Remember:** Maps that preserve the same interval still preserve it when composed.

*True by definition. Confidence: medium.* MSC 22E43 (Structure and representation of the Lorentz group), 83A05. arXiv math-ph, gr-qc. Level 2: later undergraduate.

**Definition.** A Lorentz transformation is a linear map L from ℝ⁴ to itself satisfying Q(Lx) = Q(x) for every x. Here Q(x) = x₀² − x₁² − x₂² − x₃².

**Problem.** The Lorentz transformations form a group: composites and inverses of them preserve the spacetime interval.

**How the definition helps.** Composition and the identity preserve Q. Polarization shows that L preserves the associated nondegenerate bilinear form, so L has zero kernel and is invertible. Substituting x = L⁻¹y gives Q(L⁻¹y) = Q(y) (our own).

**Wikipedia:** [Lorentz group](https://en.wikipedia.org/wiki/Lorentz_group). It says: “Mathematically, the Lorentz group may be described as the indefinite orthogonal group O(1, 3), the matrix Lie group that preserves the quadratic form”

**Sources:** none listed. No primary source with a working link was found.

### Left group uniformities make continuous homomorphisms uniformly continuous

**Remember:** Closeness throughout the group comes from closeness to the identity.

*True by definition.* MSC 22A05 (Structure of general topological groups), 54E15, 54H11. arXiv math.GN, math.GR. Level 3: graduate.

**Definition.** For each identity neighbourhood U in a topological group G, put E(U) = {(x,y) ∈ G² ∣ x⁻¹y ∈ U}. The left uniformity consists of all subsets of G² containing some E(U).

**Problem.** A group homomorphism continuous at one point is uniformly continuous for the left uniformities.

**How the definition helps.** Continuity at g gives an identity neighbourhood U with f(gU) ⊆ f(g)V for each target identity neighbourhood V. Cancellation gives f(U) ⊆ V. Thus x⁻¹y ∈ U implies f(x)⁻¹f(y) ∈ V for every pair x,y (our own).

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “Since f is a homomorphism, it follows immediately from cancellation that f(U) ⊆ V.”

**Sources:** none listed. No primary source with a working link was found.

### Analytically integral weights match representations of a compact group

**Remember:** An analytically integral weight takes integer values on torus periods scaled by 2π.

*Makes the theorem clean to state or prove.* MSC 22C05 (Compact groups), 17B10. arXiv math.RT. Level 3: graduate.

**Definition.** Let T be a maximal torus of a connected compact Lie group K, with Lie algebra 𝔱. A real linear functional λ on 𝔱 is analytically integral if λ(H) ∈ ℤ whenever H ∈ 𝔱 satisfies exp(2πH) = 1. Lie algebra integrality requires 2⟨λ,α⟩/⟨α,α⟩ ∈ ℤ for every root α.

**Problem.** The irreducible representations of a connected compact Lie group K match its dominant analytically integral weights. If K is simply connected, the two notions of integral agree.

**How the definition helps.** Analytic integrality selects exactly the weights that exponentiate to characters of T (our own). The highest weight theorem classifies irreducible complex representations by the dominant characters of T. For simply connected K, the coroots generate the scaled period lattice, so the two integrality tests agree (our own).

**Wikipedia:** [Theorem of the highest weight](https://en.wikipedia.org/wiki/Theorem_of_the_highest_weight). It says: “This distinction reflects the fact that if K is not simply connected, there may be representations of 𝔤 that do not come from representations of K.”

**Sources:**

- [H. Weyl, Theorie der Darstellung kontinuierlicher halb-einfacher Gruppen durch lineare Transformationen. I, Math. Z. 23 (1925) 271–309](https://doi.org/10.1007/BF01506234)

### Averaged matrix coefficients give characters

**Remember:** Average out the choice of basis, leaving only the trace.

*True by definition. Confidence: medium.* MSC 22C05 (Compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** For a compact Hausdorff group G with Haar probability measure dh, define Af(g) = ∫ f(hgh⁻¹) dh for each continuous complex function f. A matrix coefficient of a unitary representation π has the form g ↦ ⟨π(g)v,w⟩ for fixed vectors v,w.

**Problem.** For a continuous irreducible unitary representation, averaging a matrix coefficient gives a multiple of its character, the trace function. Finite linear combinations of these characters approximate every continuous complex class function uniformly.

**How the definition helps.** Averaging fixes class functions and cannot increase uniform error (our own). Schur’s lemma makes the conjugation average of π(g) scalar because it commutes with π(G). Its trace gives the scalar χ(g)/dim π. Applying this average to Peter–Weyl approximations by matrix coefficients gives uniform approximation by characters (our own).

**Wikipedia:** [Class function](https://en.wikipedia.org/wiki/Class_function). It says: “the irreducible characters form a Hilbert basis of the Hilbert space of square-integrable class functions”

**Sources:** none listed. No primary source with a working link was found.

### Coincident group uniformities give compact groups conjugation-invariant neighbourhoods

**Remember:** When left and right closeness agree, conjugation preserves suitably small neighbourhoods.

*True by definition.* MSC 22C05 (Compact groups), 54E15. arXiv math.GN, math.GR. Level 3: graduate.

**Definition.** In a topological group G, the left uniformity consists of relations containing {(x,y) ∈ G² ∣ x⁻¹y ∈ U} for some identity neighbourhood U. The right uniformity uses xy⁻¹ ∈ U instead.

**Problem.** In a compact Hausdorff group, every neighbourhood of the identity contains an open neighbourhood invariant under conjugation by every group element.

**How the definition helps.** The two uniformities agree by uniqueness of the compatible uniformity on a compact Hausdorff space. Given an identity neighbourhood U, choose an open symmetric identity neighbourhood V such that x⁻¹y ∈ V implies xy⁻¹ ∈ U. Taking y = xv⁻¹ puts xvx⁻¹ in U for every x ∈ G and v ∈ V. The union of all conjugates of V is open, invariant and contained in U (our own).

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “They also coincide if G is compact Hausdorff, since in that case there is only one uniformity whose uniform topology reproduces the given topology.”

**Sources:** none listed. No primary source with a working link was found.

### Distinct eigenvalues give covering sheets

**Remember:** With distinct eigenvalues, only their order remains to choose.

*Rules out counterexamples.* MSC 22C05 (Compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** In the unitary group G = U(n), call a matrix regular if all its eigenvalues are distinct. The quotient G/T by the diagonal unitary subgroup parametrizes ordered lists of mutually orthogonal complex lines spanning the space.

**Problem.** Send an ordered list of orthogonal lines and a diagonal unitary matrix with distinct entries to the unitary matrix with those eigenlines and eigenvalues. Onto the regular matrices, this map is a covering with n! sheets.

**How the definition helps.** Distinct eigenvalues determine the eigenlines uniquely up to ordering. Choose disjoint disks around the eigenvalues. Nearby matrices have one eigenvalue in each disk, with continuously varying spectral projections, giving one sheet per ordering (our own). The identity in U(2) instead admits infinitely many orthogonal decompositions into lines (our own).

**Wikipedia:** [Weyl integration formula](https://en.wikipedia.org/wiki/Weyl_integration_formula). It says: “is a smooth covering with fiber W when it is restricted to regular points”

**Sources:** none listed. No primary source with a working link was found.

### Haar measure gives invariant orbit measures

**Remember:** Sample a group element and move one point to sample the orbit.

*True by definition.* MSC 22C05 (Compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** Let a compact Hausdorff group act continuously on a compact Hausdorff space with just one orbit. Its normalized Haar measure is its translation-invariant regular probability measure. Measure a Borel set by the Haar measure of all group elements sending a chosen point into it.

**Problem.** This prescription gives the unique invariant regular probability measure on the space, independently of the chosen point.

**How the definition helps.** Left translation of an orbit set left-translates its inverse image, so the measure is invariant (our own). Changing the chosen point right-translates the inverse image and preserves Haar probability. The continuous orbit map preserves regularity under pushforward. By Fubini, every invariant probability integrates each continuous function to its constant orbit average, which determines the regular measure (our own).

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “There exists a G-invariant measure on Oλ.”

**Sources:**

- [Alfréd Haar, Der Massbegriff in der Theorie der Kontinuierlichen Gruppen (1933), for existence of Haar measure](https://doi.org/10.2307/1968346)

### Matrix coefficients form dense algebras

**Remember:** The product of two coefficients is a coefficient of their tensor product.

*Makes the theorem clean to state or prove.* MSC 22C05 (Compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** Let π be a finite-dimensional continuous complex representation of G on V. Its matrix coefficients are the functions g ↦ ℓ(π(g)v) for v ∈ V and linear functionals ℓ on V.

**Problem.** The matrix coefficients of a compact Hausdorff group span an algebra dense in the continuous functions in the uniform norm.

**How the definition helps.** Tensor products multiply coefficients, so their span forms an algebra (our own). The trivial representation supplies constants, and conjugate representations supply complex conjugates. Peter–Weyl gives separation of points by finite-dimensional representations. Stone–Weierstrass then gives uniform density (our own).

**nLab:** [Peter-Weyl theorem](https://ncatlab.org/nlab/show/Peter-Weyl+theorem). It says: “Representative functions on a compact topological group form a dense subspace of the space of all continuous functions.”

**Sources:** none listed. No primary source with a working link was found.

### Profinite matrix representations factor finitely

**Remember:** Finite coordinate kernels give arbitrarily small open subgroups.

*True by definition.* MSC 22C05 (Compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** A profinite group is a topological group isomorphic to an inverse limit of finite discrete groups.

**Problem.** Every continuous finite-dimensional unitary representation of a profinite group factors through a finite quotient.

**How the definition helps.** The inverse limit has a neighbourhood basis at the identity consisting of kernels of finite projections (our own). A matrix Lie group has an identity neighbourhood containing no nontrivial subgroup. Its inverse image contains a finite projection kernel, which the representation must therefore kill. Hence the representation factors through the finite image of that projection (our own).

**nLab:** [profinite group](https://ncatlab.org/nlab/show/profinite+group). It says: “A profinite group is an inverse limit of a system of finite groups.”

**Paper or page:** [Stationary random subgroups in negative curvature](https://arxiv.org/abs/2303.04237v4). It says: “For example, Lie groups as well as discrete groups have no small subgroups.”

**Sources:** none listed. No primary source with a working link was found.

### The normalizer shows why Weyl symmetry preserves weight multiplicities

**Remember:** Conjugating the torus transports its common eigenspaces.

*True by definition. Confidence: medium.* MSC 22C05 (Compact groups), 17B10. arXiv math.RT. Level 3: graduate.

**Definition.** For a maximal torus T in a compact connected Lie group G, its normalizer is N(T) = {n ∈ G ∣ nTn⁻¹ = T}. The Weyl group is N(T)/T.

**Problem.** The Weyl group permutes the weights of a continuous finite-dimensional complex representation of G and preserves the dimensions of their weight spaces.

**How the definition helps.** A representative n sends a vector of weight μ to one of weight t ↦ μ(n⁻¹tn) (our own). Its inverse carries the new weight space back, so their dimensions agree. Since T is abelian, changing the representative by a torus element preserves the resulting character (our own).

**nLab:** [Weyl group](https://ncatlab.org/nlab/show/Weyl+group). It says: “The Weyl group of a compact Lie group G is equivalently the quotient group of the normalizer of any maximal torus T by that torus.”

**Wikipedia:** [Semisimple Lie algebra](https://en.wikipedia.org/wiki/Semisimple_Lie_algebra). It says: “The Weyl group is an important symmetry of the problem; for example, the weights of any finite-dimensional representation of 𝔤 are invariant under the Weyl group.”

**Sources:** none listed. No primary source with a working link was found.

### Weyl orbits classify conjugacy

**Remember:** Move to one torus, then test a finite orbit.

*Makes the theorem clean to state or prove.* MSC 22C05 (Compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** Choose a maximal torus T in a compact connected Lie group G, a maximal subgroup isomorphic to a product of circles. The elements whose conjugation preserves T form its normalizer. Dividing the normalizer by T gives the Weyl group.

**Problem.** Every conjugacy class in G meets T, and its intersection with T is exactly one Weyl group orbit.

**How the definition helps.** The Weyl group acts on T by conjugation, and the maximal torus theorem puts a conjugate of each element in T. If gtg⁻¹ = t′ with t,t′ ∈ T, both T and gTg⁻¹ are maximal tori of the identity component of the centralizer of t′. Conjugacy of maximal tori there gives c centralizing t′ with cgT(cg)⁻¹ = T. Thus cg still sends t to t′ and represents a Weyl group element (our own).

**nLab:** [maximal torus](https://ncatlab.org/nlab/show/maximal+torus). It says: “Any two elements of a maximal torus T ↪︎ G are conjugate in G precisely if they are conjugate via the Weyl group.”

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “The following map between the set of Weyl orbits in T and the set of conjugacy classes of T in G is a bijection.”

**Sources:** none listed. No primary source with a working link was found.

### Bohr compactification preserves quotients

**Remember:** Kill the subgroup, and continuity kills its closure too.

*True by definition.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** The Bohr compactification of G consists of a compact Hausdorff group bG and a continuous homomorphism i from G with dense image in bG. Every continuous homomorphism f from G to a compact Hausdorff group factors uniquely as f = h ∘ i through a continuous homomorphism h.

**Problem.** Let N be a closed normal subgroup of a locally compact group G. The Bohr compactification of G/N is the Bohr compactification of G divided by the closure of the image of N.

**How the definition helps.** The quotient by the closure of i(N) has the required factorization property (our own). Each continuous homomorphism from G/N to a compact Hausdorff group gives a homomorphism on G killing N. Its unique extension to bG kills the closure of i(N) by continuity. It therefore factors uniquely through the compact quotient, where G/N has dense image (our own).

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

**Definition.** Let G be a totally disconnected locally compact Hausdorff group with left Haar measure μ. For g ∈ G, use the convention Δ(g) = μ(U)/μ(g⁻¹Ug), where U is any compact open subgroup.

**Problem.** The modular function of a totally disconnected locally compact group takes values in the positive rational numbers.

**How the definition helps.** Both subgroups split into finitely many left cosets of their open intersection, all of equal Haar measure (our own). Cancelling that measure gives the ratio of their indices over the intersection. Haar uniqueness makes the scaling factor independent of U, and van Dantzig’s theorem supplies U (our own).

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

**Definition.** A lattice in a locally compact Hausdorff group G is a discrete subgroup Γ such that G/Γ admits a nonzero finite G-invariant Radon measure.

**Problem.** A locally compact Hausdorff group with a lattice is unimodular.

**How the definition helps.** The invariant quotient measure criterion gives Δ<sub>G</sub> = Δ\_Γ = 1 on the discrete subgroup Γ (our own). Thus log Δ<sub>G</sub> descends to G/Γ and sends normalized quotient measure to a probability on ℝ invariant under translations by log Δ<sub>G</sub>(G). No probability on ℝ admits a nonzero translation period, so G is unimodular. Integer translations in the real affine group illustrate why discreteness alone fails (our own).

**Wikipedia:** [Lattice (discrete subgroup)](https://en.wikipedia.org/wiki/Lattice_%28discrete_subgroup%29). It says: “a necessary condition for a group to contain a lattice is that the group must be unimodular.”

**Sources:** none listed. No primary source with a working link was found.

### No small subgroups makes a locally compact group a Lie group

**Remember:** One identity neighbourhood excludes every nontrivial subgroup.

*True by definition.* MSC 22D05 (General properties and structure of locally compact groups), 22E15. arXiv math.GR, math.GN. Level 3: graduate.

**Definition.** A topological group has no small subgroups if some identity neighbourhood contains only one subgroup, the trivial subgroup.

**Problem.** A locally compact connected Hausdorff group is a Lie group exactly when it has no small subgroups. Every such locally compact connected group is an inverse limit of Lie groups.

**How the definition helps.** The Gleason–Yamabe theorem supplies arbitrarily small compact normal subgroups with Lie quotients, giving the inverse limit description (our own). Under the neighbourhood condition, one such kernel must be trivial, so the group itself is Lie. Conversely, the local exponential chart gives every Lie group an identity neighbourhood containing no nontrivial subgroup (our own).

**Wikipedia:** [Hilbert's fifth problem](https://en.wikipedia.org/wiki/Hilbert%27s_fifth_problem). It says: “Every locally compact connected group is the projective limit of a sequence of Lie groups. Further, it is a Lie group if it has no small subgroups.”

**Sources:**

- [A. M. Gleason, Groups without small subgroups, Annals of Mathematics 56 (1952) 193](https://doi.org/10.2307/1969795)
- [D. Montgomery and L. Zippin, Small subgroups of finite-dimensional groups, Annals of Mathematics 56 (1952) 213](https://doi.org/10.2307/1969796)
- [J. von Neumann, Die Einführung analytischer Parameter in topologischen Gruppen, Annals of Mathematics 34 (1933) 170–190](https://doi.org/10.2307/1968347)

### Direct integrals make the Plancherel theorem statable

**Remember:** When you cannot sum the irreducible pieces, integrate them.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 22D10 (Unitary representations of locally compact groups), 43A30, 46C05. arXiv math.RT, math.FA. Level 3: graduate.

**Definition.** For a measurable field of Hilbert spaces over (X,μ), its direct integral consists of measurable sections s with ∫ ‖s(x)‖² dμ(x) finite. Identify sections that agree almost everywhere and integrate their pointwise inner products.

**Problem.** Fix left Haar measure on a second countable unimodular locally compact group G of type I. Its regular action by left and right translations decomposes as ∫ π ⊗ π\* dμ(π) over the unitary dual. The unique Plancherel measure μ satisfies ‖f‖₂² = ∫ ‖π(f)‖²<sub>HS</sub> dμ(π) for f ∈ L¹(G) ∩ L²(G).

**How the definition helps.** A direct integral expresses a continuous distribution of irreducible components in one Hilbert space. For ℤ, individual characters do not belong to ℓ²(ℤ), so a direct sum of character spaces cannot work. The type I Plancherel theorem supplies the measure and the norm identity (our own).

**nLab:** [Plancherel measure](https://ncatlab.org/nlab/show/Plancherel+measure). It says: “while it's not always possible to decompose L²(G) as a direct sum of irreducible reprenentations (this already fails for G=ℤ), it is always possible to decompose it as a direct integral of irreducible representations”

**Sources:**

- [I. E. Segal, An extension of Plancherel's formula to separable unimodular groups, Annals of Mathematics 52 (1950) 272–292](https://doi.org/10.2307/1969470)

### The strong operator topology makes regular representations continuous

**Remember:** Translation changes each fixed function a little, but not every function uniformly.

*Makes the theorem clean to state or prove.* MSC 22D10 (Unitary representations of locally compact groups), 22D05. arXiv math.RT, math.FA. Level 3: graduate.

**Definition.** A unitary representation is a homomorphism to the unitary operators on a Hilbert space that is continuous in the strong operator topology. This topology tests convergence on each vector separately. The operator norm instead tests convergence uniformly over all unit vectors.

**Problem.** For a locally compact Hausdorff group G, the left regular action on L²(G) is a unitary representation. It sends f(x) to f(g⁻¹x) and uses left Haar measure, a measure unchanged by left translations.

**How the definition helps.** Strong continuity requires norm convergence for each fixed function. Haar invariance makes translations unitary, and small translations of a compactly supported continuous function converge uniformly with support in a common compact set. This gives L² convergence and extends by density and unitarity (our own). On ℝ, unit vectors supported on intervals shorter than the shift move distance √2, precluding operator norm continuity (our own).

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

**How the definition helps.** Admissibility puts the image of the operator in a finite-dimensional space (our own). Compact support and local constancy give a compact open subgroup K fixing the test function under left translation. Left invariance of Haar measure then puts the operator’s image in the K-fixed space. On infinitely many trivial summands, a function of integral one gives an identity operator of infinite rank (our own).

**Wikipedia:** [Admissible representation](https://en.wikipedia.org/wiki/Admissible_representation). It says: “the space of vectors fixed by any compact open subgroup is finite dimensional”

**Sources:** none listed. No primary source with a working link was found.

### Compact open subgroups give smoothness

**Remember:** Fit a compact open subgroup inside the preimage of a small matrix neighbourhood.

*True by definition. Confidence: medium.* MSC 22D12 (Other representations of locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** A locally profinite group is a Hausdorff topological group with a compact open subgroup inside each identity neighborhood. A representation is smooth if every vector has an open stabilizer. Continuity of a complex matrix representation uses the usual topology on matrices.

**Problem.** Every finite-dimensional continuous complex representation of a locally profinite group has open kernel and is smooth.

**How the definition helps.** Continuity pulls a matrix identity neighbourhood containing no nontrivial subgroup back to an identity neighbourhood in G (our own). This preimage contains a compact open subgroup, whose image must be trivial. The kernel therefore contains an open subgroup, and every vector stabilizer contains the kernel (our own).

**Wikipedia:** [Locally profinite group](https://en.wikipedia.org/wiki/Locally_profinite_group). It says: “every neighborhood of the identity element contains a compact open subgroup.”

**Sources:** none listed. No primary source with a working link was found.

### Double cosets turn reversal into commutativity

**Remember:** If reversal fixes both factors and their product, the factors commute.

*True by definition.* MSC 22D15 (Group algebras of locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** Let G be a compact Hausdorff group and K a closed subgroup. They form a Gelfand pair if convolution commutes on continuous complex functions constant on each double coset KgK. With Haar probability dy, convolution means (f ∗ h)(x) = ∫ f(y)h(y⁻¹x) dy.

**Problem.** Suppose a continuous involution σ of G preserves each double coset and satisfies σ(xy) = σ(y)σ(x) for all x,y ∈ G. Then (G,K) is a Gelfand pair.

**How the definition helps.** The convolution definition turns the theorem into a symmetry test on functions. In our own proof, composing with σ fixes every double-coset function, including any convolution of two such functions. Changing variables by σ reverses the order of convolution, because σ preserves the invariant probability measure. Both orders therefore agree.

**Wikipedia:** [Gelfand pair](https://en.wikipedia.org/wiki/Gelfand_pair). It says: “Suppose that there exists an involutive anti-automorphism σ of G such that any (K, K) double coset is σ-invariant.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the full group C\*-algebra by all representations makes every representation extend

**Remember:** The supremum bounds every representation at once.

*True by definition.* MSC 22D25 (\\(C<sup>\*\\</sup>)-algebras and \\(W<sup>\*\\</sup>)-algebras in relation to group representations), 46L05. arXiv math.OA. Level 3: graduate.

**Definition.** For a discrete group G, extend each unitary representation π linearly to its complex group algebra ℂ\[G\]. The full group C\*-algebra C\*(G) completes ℂ\[G\] in the norm ‖x‖ = sup\_π ‖π(x)‖.

**Problem.** Every unitary representation of a discrete group G extends uniquely to a representation of C\*(G) that preserves adjoints.

**How the definition helps.** Every π satisfies ‖π(x)‖ ≤ ‖x‖, so it extends uniquely by continuity from the dense group algebra. Multiplication and adjoints pass to limits (our own). The sum of absolute coefficient values bounds the supremum, and the faithful left regular action detects every nonzero algebra element (our own).

**Wikipedia:** [Group algebra of a locally compact group](https://en.wikipedia.org/wiki/Group_algebra_of_a_locally_compact_group). It says: “It follows from the definition that, when G is a discrete group, C\*(G) has the following universal property”

**Sources:** none listed. No primary source with a working link was found.

### Compact induction preserves exactness

**Remember:** Each coset contributes one copy, and direct sums preserve exactness.

*True by definition. Confidence: medium.* MSC 22D30 (Induced representations for locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** Let H be an open subgroup of a locally profinite group G and V a smooth H-representation. Compact induction consists of functions f from G to V satisfying f(hg) = hf(g) for all h ∈ H and g ∈ G. Each function vanishes outside finitely many cosets Hg, and G acts by right translation.

**Problem.** Compact induction from H is exact on smooth representations over a field. Here smooth means each vector is fixed by an open subgroup.

**How the definition helps.** Evaluation at one representative of each coset identifies the underlying space with a direct sum of copies of V (our own). Each finitely supported assignment gives a smooth function because the conjugates of its nonzero values’ open stabilizers have open intersection. Maps act coordinatewise, and direct sums preserve exactness (our own).

**Wikipedia:** [Induced representation](https://en.wikipedia.org/wiki/Induced_representation). It says: “φ has compact support mod H”

**Sources:** none listed. No primary source with a working link was found.

### Equivariant functions describe bundle sections

**Remember:** Changing the coset representative changes the coordinate by the inverse character.

*True by definition.* MSC 22D30 (Induced representations for locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** Let H be a closed subgroup of a Lie group G, and let χ be a smooth homomorphism from H to nonzero complex numbers. Put a complex line over each coset gH by identifying (gh, z) with (g, χ(h)z). A section chooses one point on each line.

**Problem.** Smooth sections of this line bundle correspond to smooth functions f on G with f(gh) = χ(h)⁻¹f(g). The correspondence respects the G-actions.

**How the definition helps.** A section over gH has a unique representative (g,f(g)) for each chosen g (our own). Replacing g by gh describes the same point exactly when f(gh) = χ(h)⁻¹f(g). Smooth local coset representatives identify smoothness on both sides. Left translation gives the stated equivariance (our own).

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “f ↦ (gH ↦ \[g, f(g)\]) is G-equivariant bijection.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing immersed Lie subgroups makes every Lie subalgebra come from a subgroup

**Remember:** Let subgroups wind densely, and every subalgebra gets its subgroup.

*Makes the theorem clean to state or prove.* MSC 22E15 (General properties and structure of real Lie groups), 22E60. arXiv math.GR, math.DG. Level 3: graduate.

**Definition.** An immersed Lie subgroup of G is a subgroup with a Lie group structure for which the inclusion into G is a smooth immersion.

**Problem.** Connected Lie subgroups of G correspond one-to-one with Lie subalgebras of its Lie algebra.

**How the definition helps.** Allowing the subgroup its own topology includes the irrational winding in the two-torus. Its Lie algebra is the line of irrational slope, and its image is dense. The Frobenius theorem integrates each left-invariant distribution from a subalgebra to a unique connected leaf through the identity, giving the subgroup (our own).

**Wikipedia:** [Lie group–Lie algebra correspondence](https://en.wikipedia.org/wiki/Lie_group%E2%80%93Lie_algebra_correspondence), [Closed-subgroup theorem](https://en.wikipedia.org/wiki/Closed-subgroup_theorem). It says: “If G is a Lie group and 𝔥 is a Lie subalgebra of Lie(G), then there is a unique connected Lie subgroup (not necessarily closed) H of G with Lie algebra 𝔥.”

**Sources:** none listed. No primary source with a working link was found.

### Bi-invariant metrics give subgroup geodesics

**Remember:** With both translation symmetries, a constant group velocity gives a geodesic.

*Rules out counterexamples.* MSC 22E15 (General properties and structure of real Lie groups). arXiv math.GR. Level 3: graduate.

**Definition.** A bi-invariant Riemannian metric measures tangent vectors without changing their lengths under left or right translation. A left-invariant metric requires only the first symmetry. A geodesic has zero acceleration for the metric, and a one-parameter subgroup is a smooth homomorphism from additive ℝ.

**Problem.** For a bi-invariant metric, the geodesics through the identity are exactly the one-parameter subgroups, with their usual linear time parameter.

**How the definition helps.** Bi-invariance gives ∇ₓY = ½\[X,Y\] for left-invariant fields, so the integral curve of X through the identity has zero acceleration. Uniqueness for each initial velocity gives all geodesics through the identity (our own). On the real affine group choose orthonormal left-invariant generators A,B with \[A,B\] = B. The Koszul formula gives ⟨∇ᵦB,A⟩ = 1, so the translation subgroup fails to be geodesic (our own).

**Paper or page:** [Dirichlet-Voronoi domain and injectivity radius of flag manifolds -- equivariant cell structure on O(3)/O(1)³](https://arxiv.org/abs/2011.06338v4). It says: “If g is a bi-invariant Riemannian metric on a Lie group G and if ∇ is the associated Levi-Civita connection, then ∀ X,Y ∈ 𝒳ₗ(G), ∇ₓ Y = ½\[X,Y\].”

**Sources:** none listed. No primary source with a working link was found.

### Defining exp by one-parameter subgroups makes homomorphisms commute with it

**Remember:** A homomorphism sends a one-parameter subgroup to another.

*True by definition. Confidence: medium.* MSC 22E15 (General properties and structure of real Lie groups). arXiv math.DG, math.GR. Level 3: graduate.

**Definition.** Given a tangent vector X at the identity, let γ<sub>X</sub> be the unique smooth homomorphism from ℝ to G with initial velocity X. Define exp X = γ<sub>X</sub>(1).

**Problem.** Let φ be a smooth homomorphism of Lie groups, with derivative dφ at the identity. Then φ(exp X) = exp(dφ(X)) for every X in the Lie algebra.

**How the definition helps.** The composite φ ∘ γ<sub>X</sub> is a smooth homomorphism with initial velocity dφ(X) by the chain rule (our own). Uniqueness identifies it with γ<sub>d</sub>φ(X), and evaluation at time one gives the formula.

**Wikipedia:** [Exponential map (Lie theory)](https://en.wikipedia.org/wiki/Exponential_map_%28Lie_theory%29). It says: “is the unique one-parameter subgroup of G whose tangent vector at the identity is equal to X.”

**Sources:** none listed. No primary source with a working link was found.

### Discrete central quotients preserve Lie algebras

**Remember:** A covering kernel is discrete, and connected conjugation cannot move it.

*Rules out counterexamples.* MSC 22E15 (General properties and structure of real Lie groups). arXiv math.GR. Level 3: graduate.

**Definition.** A discrete central subgroup of a Lie group G is a subgroup D whose elements commute with every element of G. Some identity neighbourhood must meet D only at the identity.

**Problem.** Every connected Lie group with a given finite-dimensional real Lie algebra is a quotient of its simply connected integrating group by a discrete central subgroup. Conversely, each such quotient has that Lie algebra.

**How the definition helps.** Quotienting by a discrete central subgroup gives a covering homomorphism, hence an isomorphism on tangent Lie algebras (our own). Conversely, a connected group’s universal covering group has discrete kernel. Connectedness makes each conjugacy orbit in this kernel a singleton, and Lie’s integration theorem identifies the covering group. Quotienting ℝ² by a line instead lowers the Lie algebra dimension (our own).

**Wikipedia:** [Lie group–Lie algebra correspondence](https://en.wikipedia.org/wiki/Lie_group%E2%80%93Lie_algebra_correspondence). It says: “there is a one-to-one correspondence between quotients of G̃ by discrete central subgroups and connected Lie groups having Lie algebra 𝔤”

**Sources:** none listed. No primary source with a working link was found.

### Positive roots give complex flags

**Remember:** Positive root directions stay on the same side under brackets.

*Makes the theorem clean to state or prove.* MSC 22E15 (General properties and structure of real Lie groups), 22C05. arXiv math.RT. Level 3: graduate.

**Definition.** For a compact connected Lie group G with maximal torus T, the roots are the nonzero weights of T on the complexified Lie algebra. A positive root system consists of the roots α satisfying ℓ(α) &gt; 0 for a real linear functional ℓ nonzero on every root.

**Problem.** Use the positive root spaces as the +i eigenspace on the complexified tangent space of G/T at the identity coset. Translating this choice gives an invariant complex structure on G/T.

**How the definition helps.** A sum of positive roots has positive value under ℓ (our own). Thus whenever two positive root spaces have nonzero bracket, the bracket lies in another positive root space. Adjoining the complexified torus algebra preserves bracket closure. The invariant integrability criterion then makes the translated eigenspaces a complex structure (our own).

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “Then J is integrable if and only if P is closed under the Lie bracket.”

**Sources:** none listed. No primary source with a working link was found.

### Simply connected Lie groups are determined by their Lie algebras

**Remember:** Every loop contracts, so integrating a Lie algebra map has no loop obstruction.

*Rules out counterexamples.* MSC 22E15 (General properties and structure of real Lie groups), 22E60. arXiv math.GR, math.DG. Level 3: graduate.

**Definition.** A Lie group is simply connected if it is connected and every loop in it can be contracted to a point.

**Problem.** Passing to the Lie algebra is an equivalence from the category of simply connected Lie groups to the category of finite-dimensional real Lie algebras.

**How the definition helps.** Simple connectivity removes the obstruction to integrating a Lie algebra homomorphism around loops (our own). For example, the inverse differential of SU(2) → SO(3) does not integrate to a homomorphism SO(3) → SU(2). Lie’s second theorem gives a unique integrating homomorphism when the source is simply connected. Lie’s third theorem and passage to the universal cover supply a simply connected group for each real finite-dimensional Lie algebra (our own).

**nLab:** [Lie's three theorems](https://ncatlab.org/nlab/show/Lie%27s+three+theorems), [Lie group](https://ncatlab.org/nlab/show/Lie+group), [Lie integration](https://ncatlab.org/nlab/show/Lie+integration). It says: “The category of local Lie groups is equivalent to the category of connected and simply connected Lie groups.”

**Sources:**

- [Jean-Pierre Serre, Lie Algebras and Lie Groups, 1964 lectures at Harvard, Lecture Notes in Math. 1500 (1992)](https://doi.org/10.1007/978-3-540-70634-2)
- [Hans Duistermaat, Johan A. C. Kolk, Lie groups, Springer (2000), Chapter 1](https://doi.org/10.1007/978-3-642-56936-4)

### The determinant formula makes connected nilpotent Lie groups unimodular

**Remember:** Conjugation preserves volume because its derivative has determinant of modulus one.

*True by definition.* MSC 22E15 (General properties and structure of real Lie groups), 28C10. arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** For a Lie group G, let Ad(g) be the derivative at the identity of conjugation by g. Use the convention Δ(g) = \|det Ad(g)\| for the modular function. The group is unimodular if Δ(g) = 1 for every g ∈ G.

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

**How the definition helps.** Weight addition makes each dilation preserve brackets because rⁱrʲ = rⁱ⁺ʲ (our own). Scaling by 1/r gives its inverse. Lie’s integration theorem extends each dilation uniquely to a group automorphism. Uniqueness carries multiplication of scaling factors to composition of automorphisms (our own).

**Paper or page:** [Characteristically nilpotent Lie groups with flat coadjoint orbits](https://arxiv.org/abs/2408.10660v2). It says: “𝔤 admits a family of dilations.”

**Sources:** none listed. No primary source with a working link was found.

### Heisenberg coefficients integrate modulo the center

**Remember:** Remove the center before integrating a coefficient whose size ignores it.

*Rules out counterexamples. Confidence: medium.* MSC 22E27 (Representations of nilpotent and solvable Lie groups (special orbital integrals, non-type I representations, etc.)). arXiv math.RT. Level 3: graduate.

**Definition.** An irreducible unitary representation π of G is square integrable modulo its center Z if some nonzero coefficient has magnitude in L²(G/Z) for Haar measure. A coefficient has the form g ↦ ⟨π(g)v,w⟩, and its magnitude descends to G/Z because central elements act by unit scalars.

**Problem.** The Schrödinger representation of the real Heisenberg group is square integrable modulo its center, but not square integrable on the full group.

**How the definition helps.** Integrating over cosets removes an infinite central direction along which the absolute value stays constant. In our own example, the Schrödinger representation acts on square-integrable functions on the real line by translations and multiplications by phases. Parseval’s identity makes the integral over G/Z proportional to the product of the vectors’ squared norms. Over the full group, the same integral picks up the infinite measure of the real center.

**Paper or page:** [Characteristically nilpotent Lie groups with flat coadjoint orbits](https://arxiv.org/abs/2408.10660v2). It says: “π is square-integrable modulo Z”

**Sources:** none listed. No primary source with a working link was found.

### Brackets give coadjoint symplectic forms

**Remember:** Pair the point of the orbit with the bracket of two directions.

*Makes the theorem clean to state or prove.* MSC 22E60 (Lie algebras of Lie groups). arXiv math.RT. Level 3: graduate.

**Definition.** At each point ξ of a coadjoint orbit, write X♯ for the tangent vector generated there by X in the Lie algebra. Define the orbit form by ω\_ξ(X♯,Y♯) = ξ(\[X,Y\]) for all X,Y.

**Problem.** This formula gives each coadjoint orbit a symplectic form, an alternating pairing with zero kernel and zero exterior derivative.

**How the definition helps.** The bracket formula makes the kernel exactly the directions that leave the orbit point fixed to first order. In our own proof, these directions represent zero tangent vectors on the orbit. The orbit tangent space therefore inherits a well-defined nondegenerate pairing. Taking its exterior derivative gives a sum of three nested brackets, which vanishes by the Jacobi identity.

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “ω is a symplectic 2-form on Oλ and the coadjoint action is Hamiltonian with Lie algebra homomorphism μ.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the bracket by differentiating conjugation makes ad the derivative of Ad

**Remember:** Differentiate conjugation once in h and once in g.

*True by definition. Confidence: medium.* MSC 22E60 (Lie algebras of Lie groups), 22E15. arXiv math.DG, math.RT. Level 3: graduate.

**Definition.** For g in a Lie group G, let Ad(g) be the derivative at the identity of h ↦ ghg⁻¹. For tangent vectors X,Y at the identity, define \[X,Y\] as the derivative of Ad(exp(tX))Y at t = 0.

**Problem.** The derivative of Ad at the identity is ad, the map sending X to the operator Y ↦ \[X, Y\].

**How the definition helps.** The curve exp(tX) starts at the identity with velocity X, so differentiating Ad along it gives dAd(X). Evaluating on Y gives \[X,Y\] directly. The equivalence with the vector-field bracket follows from the flow formula for left-invariant fields (our own).

**nLab:** [adjoint action](https://ncatlab.org/nlab/show/adjoint+action). It says: “Differentiating the above example also in the second argument, yields the adjoint action of a Lie algebra on itself”

**Sources:** none listed. No primary source with a working link was found.

### Left-invariant fields preserve brackets under differentiation

**Remember:** Differentiate along the group, and commutators pass through the map.

*True by definition.* MSC 22E60 (Lie algebras of Lie groups). arXiv math.GR. Level 3: graduate.

**Definition.** Translate a tangent vector at the identity to obtain a left-invariant vector field. Define the Lie bracket as the commutator of these fields acting as differential operators on smooth functions.

**Problem.** The derivative at the identity of a smooth Lie group homomorphism preserves the Lie bracket.

**How the definition helps.** Pullback along a homomorphism intertwines corresponding left-invariant differential operators by the chain rule (our own). Indeed, φ(gx) = φ(g)φ(x), so differentiating in x transports each identity tangent vector by dφ. Subtracting the two operator compositions shows that pullback also intertwines their brackets. Evaluation at the identity gives the result (our own).

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

### Compact generation connects coset graphs

**Remember:** A finite list of moves connects the graph only if it generates.

*Rules out counterexamples.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 4: research.

**Definition.** A group is compactly generated if a compact subset generates it as an abstract group. A Cayley–Abels graph is connected, with finitely many neighbors per vertex. The group acts transitively on its vertices and each vertex stabilizer is compact and open.

**Problem.** A locally compact group whose connected components are singletons admits a Cayley–Abels graph exactly when it is compactly generated.

**How the definition helps.** By van Dantzig’s theorem, choose a compact open subgroup U whose open double cosets cover the compact generating set with finitely many members. These cosets and their inverses give connected adjacency on G/U, with finite valency because U has finite orbits there (our own). Conversely, connectivity makes U and finitely many neighbour representatives generate G. An infinite discrete direct sum of two-element groups has no compact generating set (our own).

**Paper or page:** [Discretisable quasi-actions I: Topological completions and hyperbolicity](https://arxiv.org/abs/2207.04401v2). It says: “Let G be a compactly generated locally compact group containing a compact open subgroup. Then G acts geometrically on its Cayley–Abels graph.”

**Sources:** none listed. No primary source with a working link was found.

### Lie quotients detect dense powers

**Remember:** Test density in each quotient, where open sets can see it.

*True by definition.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 4: research.

**Definition.** For quotient homomorphisms qᵢ from G forming a directed inverse system, the inverse limit topology has basic open sets qᵢ⁻¹(V) for open V in Gᵢ. Directedness lets one finer quotient test any finite collection of coordinates.

**Problem.** Fix a connected locally compact Hausdorff group G and a positive integer k. The kth powers are dense in G exactly when they are dense in every Lie quotient G/K with K compact and normal.

**How the definition helps.** Every nonempty open set contains the preimage of a nonempty open set in one Lie quotient, by the connected locally compact group structure theorem. If powers are dense there, choose a power in that open set and lift its root to G. The lifted power lies in the original open set. Conversely, each quotient projection sends a dense set of powers onto a dense set of powers (our own).

**Paper or page:** [Cartan subgroups in connected locally compact groups](https://arxiv.org/abs/2310.15564v1). It says: “Then Pₖ(G) is dense in G if and only if Pₖ(Gα) is dense in Gα for every α.”

**Sources:**

- [Arunava Mandal and Riddhi Shah, Cartan subgroups in connected locally compact groups (2023), Lemma 8.1](https://arxiv.org/abs/2310.15564v1)

### Translation-like actions make a Burnside-type theorem true for locally compact groups

**Remember:** Ask for bounded integer steps, not an element of infinite order.

*Makes the theorem clean to state or prove.* MSC 22D05 (General properties and structure of locally compact groups), 20F65. arXiv math.GR. Level 4: research.

**Definition.** A Borel translation-like action of ℤ on G is a free action with a Borel set meeting each orbit exactly once. For each integer, a finite Borel partition of G must exist on whose pieces that integer acts by right translations. The clopen version requires the partition pieces to be both open and closed.

**Problem.** Let G be a locally compact group generated by a compact set. G is noncompact exactly when it admits a Borel, or equivalently clopen, translation-like action of ℤ.

**How the definition helps.** Piecewise translations allow free integer steps even in groups without an element of infinite order (our own). A measurable fundamental domain and its disjoint translates exclude compact G by invariance of right Haar measure. The locally compact geometric Burnside theorem supplies the clopen action for every noncompact compactly generated G (our own).

**Paper or page:** [The Burnside problem for locally compact groups](https://arxiv.org/abs/1812.11743v1). It says: “G is non-compact. G admits a Borel (or equivalently clopen) translation-like action by ℤ.”

**Sources:**

- [Thibaut Dumont, Thibault Pillon, The Burnside problem for locally compact groups, arXiv:1812.11743v1 (2018)](https://arxiv.org/abs/1812.11743v1)

### Compact normal quotients preserve scale

**Remember:** The same coset action gives the same scale.

*True by definition.* MSC 22D45 (Automorphism groups of locally compact groups). arXiv math.GR. Level 4: research.

**Definition.** For a totally disconnected locally compact group, the scale of g is the minimum of \[U : U ∩ g⁻¹Ug\] over compact open subgroups U. Equivalently, fix one such U and let U act on right cosets by right multiplication. Take the limit of the nth roots of the orbit sizes of Ugⁿ.

**Problem.** Quotienting a totally disconnected locally compact group by a compact normal subgroup does not change the scale of any element.

**How the definition helps.** The orbit growth formula lets both groups use identical coset counts (our own). A compact open subgroup of the quotient has compact open preimage because the quotient map is proper. Projection identifies the two coset spaces and their subgroup orbits. Taking the growth limits gives equal scales by Proposition 1.6 (our own).

**Paper or page:** [Cayley--Abels graphs and invariants of totally disconnected, locally compact groups](https://arxiv.org/abs/2105.12630), [Cayley--Abels graphs and invariants of totally disconnected, locally compact groups](https://arxiv.org/abs/2105.12630). It says: “If g ∈ G, then s₍G⁄K₎(gK) = s(g).”

**Sources:** none listed. No primary source with a working link was found.

### Growth makes scale exponentiate

**Remember:** Passing to a power takes a subsequence of the same growth rate.

*True by definition.* MSC 22D45 (Automorphism groups of locally compact groups). arXiv math.GR. Level 4: research.

**Definition.** Fix a compact open subgroup U of a totally disconnected locally compact Hausdorff group G. For each g ∈ G, its scale is the limit as n → ∞ of the nth root of \|{Ugⁿu ∣ u ∈ U}\|.

**Problem.** For every positive integer m, the scale of gᵐ is the mth power of the scale of g.

**How the definition helps.** The growth definition turns powers into a change of index, our own observation. For gᵐ, the nth orbit size is the mnth orbit size for g. Taking its nth root gives the mth power of the corresponding mnth root, by our own calculation. The work is the orbit growth theorem, which identifies the limit with the minimum index for every U.

**Paper or page:** [Cayley--Abels graphs and invariants of totally disconnected, locally compact groups](https://arxiv.org/abs/2105.12630). It says: “If g ∈ G then s(g) = limₙ→∞ \|(αgⁿ)G₍α₎\|¹⁄ⁿ”

**Sources:** none listed. No primary source with a working link was found.

### Synthetic Maurer–Cartan forms make flatness the identity x⁻¹y·y⁻¹z = x⁻¹z

**Remember:** Group differences cancel at the middle point.

*True by definition. Confidence: medium.* MSC 22E15 (General properties and structure of real Lie groups), 58A03. arXiv math.DG. Level 4: research.

**Definition.** In synthetic differential geometry, the left Maurer–Cartan form of a Lie group assigns θ(x,y) = x⁻¹y to every first-order neighbouring pair x,y.

**Problem.** The left Maurer–Cartan form θ of a Lie group satisfies the Maurer–Cartan equation dθ + ½\[θ,θ\] = 0. This equation says that θ has zero curvature when viewed as a connection, a rule for comparing nearby fibers.

**How the definition helps.** For any three pairwise neighbouring points, θ(x,y)θ(y,z) = x⁻¹yy⁻¹z = θ(x,z). The synthetic curvature formula identifies this triangle identity with vanishing curvature, equivalently dθ + ½\[θ,θ\] = 0.

**nLab:** [Maurer-Cartan form](https://ncatlab.org/nlab/show/Maurer-Cartan+form). It says: “θ(x,y) θ(y,z) = θ(x,z). This is what analytically becomes the statement of vanishing curvature.”

**Sources:** none listed. No primary source with a working link was found.

### Differences lower group polynomial degree

**Remember:** A difference uses up one allowed step.

*True by definition.* MSC 22E25 (Nilpotent and solvable Lie groups). arXiv math.GR. Level 4: research.

**Definition.** For a function f from a group G to an abelian group, define Δₕf(x) = f(xh) − f(x). For an integer d ≥ 0, f has Leibman degree at most d if every composition of d + 1 differences vanishes identically.

**Problem.** If f has degree at most d, with d ≥ 1, then every difference Δₕf has degree at most d − 1.

**How the definition helps.** Counting differences makes the degree drop immediate. In our own proof, d differences applied after Δₕ give d + 1 differences of f, hence zero. No computation of translations in coordinates is needed.

**Paper or page:** [Polynomial and horizontally polynomial functions on Lie groups](https://arxiv.org/abs/2011.13665v1). It says: “f is represented by a function that is polynomial in exponential chart”

**Sources:**

- [Gioacchino Antonelli and Enrico Le Donne, Polynomial and horizontally polynomial functions on Lie groups (2020), Corollary 1.4](https://arxiv.org/abs/2011.13665v1)

### Derivatives bound product degrees

**Remember:** Too many derivatives must exhaust the degree of one factor.

*True by definition.* MSC 22E30 (Analysis on real and complex Lie groups). arXiv math.GR. Level 4: research.

**Definition.** For a smooth real function f on a connected Lie group, set Δₕf(x) = f(xh) − f(x) for all group elements x,h. For an integer d ≥ 0, Leibman degree at most d means every composition of d + 1 differences vanishes identically. Equivalently, every composition of d + 1 left-invariant vector fields annihilates f.

**Problem.** Multiplying two such functions of degrees at most d and e gives a function of degree at most d + e.

**How the definition helps.** The derivative test turns the degree bound into a count of derivatives in the product rule. In our own proof, each derivative acts on one factor in each term. After d + e + 1 derivatives, every term exceeds the degree of one factor. The cited equivalence transfers the result to Leibman degree.

**Paper or page:** [Polynomial and horizontally polynomial functions on Lie groups](https://arxiv.org/abs/2011.13665v1). It says: “Then φ is a polynomial with degree at most d à la Leibman”

**Sources:**

- [Gioacchino Antonelli and Enrico Le Donne, Polynomial and horizontally polynomial functions on Lie groups (2020), Proposition 5.1](https://arxiv.org/abs/2011.13665v1)

### Locally smooth cochains let Lie group cohomology see all central extensions

**Remember:** Use cochains that are smooth only on the pieces of a cover.

*Makes the theorem clean to state or prove.* MSC 22E41 (Continuous cohomology of Lie groups), 20J06. arXiv math.GR, math.AT. Level 4: research.

**Definition.** For a Lie group G and an abelian Lie group A with trivial G-action, use the simplicial nerve with degree-p manifold Gᵖ. Define Hⁿ(G,A) as its degree-n hypercohomology with the sheaves of smooth A-valued functions.

**Problem.** The group H²(G, A) classifies all central extensions A → Ĝ → G that are locally trivial principal A-bundles. For discrete A, Hⁿ(G, A) equals the cohomology of the classifying space BG.

**How the definition helps.** Local transition functions and local multiplication laws form one degree-two cocycle, allowing nontrivial underlying bundles (our own). Global smooth cochains alone miss the double cover SU(2) → SO(3), which has no global section. The extension classification identifies local cocycles modulo coboundaries with extension classes. For discrete A, the sheaves are locally constant and the simplicial cohomology comparison identifies the result with Hⁿ(BG,A) (our own).

**nLab:** [Lie group cohomology](https://ncatlab.org/nlab/show/Lie+group+cohomology), [group cohomology](https://ncatlab.org/nlab/show/group+cohomology), [group extension](https://ncatlab.org/nlab/show/group+extension). It says: “But this does \*\*not\*\* in general give the right answer for structured groups”

**Sources:**

- [Jean-Luc Brylinski, Differentiable Cohomology of Gauge Groups (2000), arXiv:math/0011069](https://arxiv.org/abs/math/0011069)
- [Christopher Schommer-Pries, Central extensions of smooth 2-groups and a finite-dimensional string 2-group, Geom. Topol. 15 (2011), arXiv:0911.2483](https://arxiv.org/abs/0911.2483)

### A distribution defines characters when operators have no trace

**Remember:** Average the operators before taking their trace.

*Makes the theorem clean to state or prove.* MSC 22E46 (Semisimple Lie groups and their representations), 22E30. arXiv math.RT. Level 4: research.

**Definition.** Fix Haar measure dg on a connected real semisimple Lie group G with finite centre and an irreducible continuous unitary representation π. Its distribution character assigns tr(∫ f(g)π(g) dg) to each smooth compactly supported complex test function f.

**Problem.** This character exists and is invariant under conjugation. Harish-Chandra’s regularity theorem says it is given by a locally integrable function, one that is integrable on every compact subset.

**How the definition helps.** Averaging before taking the trace gives a character even in infinite dimension. Harish-Chandra’s trace-class theorem ensures the trace exists and defines a distribution. Conjugating the test function conjugates the integrated operator, preserving its trace (our own). Harish-Chandra’s regularity theorem represents this distribution by a locally integrable function (our own).

**Wikipedia:** [Harish-Chandra character](https://en.wikipedia.org/wiki/Harish-Chandra_character). It says: “is a distribution on the group G that is analogous to the character of a finite-dimensional representation of a compact group.”

**Sources:**

- [Harish-Chandra, Representations of Semisimple Lie Groups. III. Characters, in Collected Papers, Springer (1984) 370–373](https://doi.org/10.1007/978-1-4899-7407-5_23)
- [Harish-Chandra, Invariant Eigendistributions on a Semisimple Lie Group, in Collected Papers, Springer (1984) 1457–1508](https://doi.org/10.1007/978-1-4899-7407-5_63)

### Normalized induction preserves smooth duals

**Remember:** Two half factors supply the one volume factor needed for pairing.

*Makes the theorem clean to state or prove.* MSC 22E50 (Representations of Lie and linear algebraic groups over local fields). arXiv math.RT. Level 4: research.

**Definition.** For G = SL₂(F) over a nonarchimedean local field, let B be upper triangular and χ a smooth diagonal character. Normalized induction acts by right translation on locally constant functions f from G to ℂ satisfying f(bg) = \|a\|χ(diag(a,a⁻¹))f(g). This holds for every g ∈ G and b ∈ B with first diagonal entry a.

**Problem.** For a character χ with open kernel, the smooth dual of normalized induction from χ is normalized induction from χ⁻¹. The smooth dual consists of linear functionals with open stabilizer.

**How the definition helps.** Normalization lets the two character factors cancel while their square roots supply the volume change required for integration (our own explanation). Multiply the two functions and integrate their product over a maximal compact subgroup. The integration formula makes this pairing invariant under G. Identifying all smooth functionals through this pairing takes a separate duality theorem.

**Wikipedia:** [Induced representation](https://en.wikipedia.org/wiki/Induced_representation). It says: “With the addition of the normalizing factors this induction functor takes unitary representations to unitary representations.”

**Paper or page:** [Representations of SL₂(F)](https://arxiv.org/abs/2404.11188). It says: “The smooth dual of iᴳ′₍B′₎(χ) is iᴳ′₍B′₎(χ⁻¹).”

**Sources:** none listed. No primary source with a working link was found.

### Order selects Langlands quotients

**Remember:** Order the exponents before taking the quotient.

*Rules out counterexamples.* MSC 22E50 (Representations of Lie and linear algebraic groups over local fields), 11F70. arXiv math.RT, math.NT. Level 4: research.

**Definition.** For GLₙ over a p-adic field, choose positive block sizes summing to n and an irreducible tempered complex representation σᵢ on each block. Choose real exponents s₁ &gt; ⋯ &gt; sᵣ. The standard module is normalized parabolic induction from the upper block triangular subgroup, with diagonal factors σᵢ twisted by \|det\| raised to sᵢ.

**Problem.** Each standard module has a unique irreducible quotient. Every irreducible smooth complex representation of GLₙ occurs this way, with unique ordered data up to isomorphism. Smooth means every vector has an open stabilizer.

**How the definition helps.** The order selects which irreducible piece appears as a quotient (our own). For two one-dimensional trivial blocks with exponents ½ and −½, the standard order gives the trivial quotient (our own). Reversing them gives the Steinberg quotient, realized by locally constant functions on the projective line modulo constants (our own). The Langlands classification proves existence and uniqueness for the ordered data.

**Paper or page:** [The local Langlands conjecture](https://arxiv.org/abs/2510.00632v1). It says: “admits a unique irreducible quotient J(P,σ,ν).”

**Sources:** none listed. No primary source with a working link was found.
