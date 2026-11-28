### Closed normal subgroups give Hausdorff quotients

**Remember:** Closedness separates the identity coset, and translation does the rest.

*Rules out counterexamples. Confidence: medium.* MSC 22A05 (Structure of general topological groups). arXiv math.GR. Level 2: later undergraduate.

**Definition.** For a normal subgroup N of a topological group G, give G/N the quotient topology, where a set is open exactly when its preimage in G is open. The identity point of G/N has preimage N, so it is a closed point exactly when N is closed.

**Problem.** The quotient of a Hausdorff topological group by a normal subgroup is Hausdorff exactly when the subgroup is closed.

**How the definition helps.** G/N is a topological group, and such a group is Hausdorff once its points are closed; translation makes every point as closed as the identity point (our own argument). Conversely, a Hausdorff quotient has closed points, so N is closed. For example, ℝ/ℚ has only two open sets because ℚ is dense.

**nLab:** [closed subgroup](https://ncatlab.org/nlab/show/closed+subgroup). It says: “A common condition on subgroups of a topological group is that they be closed.”

**Sources:** none listed. No primary source with a working link was found.

### An invariant inner product makes complete reducibility immediate

**Remember:** An invariant subspace has an invariant orthogonal complement.

*True by definition.* MSC 22D10 (Unitary representations of locally compact groups), 20C15. arXiv math.RT. Level 2: later undergraduate.

**Definition.** A finite-dimensional unitary representation of a compact group G is a continuous linear action preserving a positive definite Hermitian inner product. Then the orthogonal complement of an invariant subspace is again invariant.

**Problem.** Every continuous finite-dimensional complex representation of a compact group is a direct sum of irreducible representations, which have no proper nonzero invariant subspaces.

**How the definition helps.** Every continuous finite-dimensional representation of a compact group is unitary for some inner product, because averaging any inner product over G with Haar probability measure gives an invariant one (our own). So invariant subspaces have invariant complements, and induction on dimension gives a direct sum of irreducibles (our own).

**Wikipedia:** [Unitary representation](https://en.wikipedia.org/wiki/Unitary_representation). It says: “A unitary representation is completely reducible, in the sense that for any closed invariant subspace, the orthogonal complement is again a closed invariant subspace.”

**Sources:** none listed. No primary source with a working link was found.

### Lorentz transformations as isometries are closed under composition and inversion

**Remember:** Maps that preserve the same interval still preserve it when composed.

*True by definition. Confidence: medium.* MSC 22E43 (Structure and representation of the Lorentz group), 83A05. arXiv math-ph, gr-qc. Level 2: later undergraduate.

**Definition.** A Lorentz transformation is a linear map L of ℝ⁴ that preserves the spacetime interval Q(x) = x₀² − x₁² − x₂² − x₃², so Q(Lx) = Q(x) for every x.

**Problem.** The Lorentz transformations form a group: composites and inverses of them preserve the spacetime interval.

**How the definition helps.** Composition and the identity preserve Q. Polarization shows that L preserves the associated nondegenerate bilinear form, so L has zero kernel and is invertible. Substituting x = L⁻¹y gives Q(L⁻¹y) = Q(y) (our own).

**Wikipedia:** [Lorentz group](https://en.wikipedia.org/wiki/Lorentz_group). It says: “Mathematically, the Lorentz group may be described as the indefinite orthogonal group O(1, 3), the matrix Lie group that preserves the quadratic form”

**Sources:** none listed. No primary source with a working link was found.

### Left group uniformities make continuous homomorphisms uniformly continuous

**Remember:** Closeness throughout the group comes from closeness to the identity.

*True by definition.* MSC 22A05 (Structure of general topological groups), 54E15, 54H11. arXiv math.GN, math.GR. Level 3: graduate.

**Definition.** The left uniformity on a topological group G calls x and y close when x⁻¹y lies in a small identity neighbourhood U. Its members are the subsets of G² containing {(x,y) ∣ x⁻¹y ∈ U} for some U.

**Problem.** A group homomorphism continuous at one point is uniformly continuous for the left uniformities.

**How the definition helps.** A homomorphism sends x⁻¹y to f(x)⁻¹f(y), so it suffices that f maps some U into each target identity neighbourhood V. Continuity at g gives U with f(gU) ⊆ f(g)V, and cancellation gives f(U) ⊆ V (our own).

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “Since f is a homomorphism, it follows immediately from cancellation that f(U) ⊆ V.”

**Sources:** none listed. No primary source with a working link was found.

### Analytically integral weights match representations of a compact group

**Remember:** Integral on the torus periods means a genuine torus character.

*Makes the theorem clean to state or prove.* MSC 22C05 (Compact groups), 17B10. arXiv math.RT. Level 3: graduate.

**Definition.** Let T be a maximal torus of a connected compact Lie group K, with Lie algebra 𝔱. A real linear functional λ on 𝔱 is analytically integral if λ(H) ∈ ℤ whenever exp(2πH) = 1, so that λ comes from a character of T. Lie algebra integrality only requires 2⟨λ,α⟩/⟨α,α⟩ ∈ ℤ for every root α.

**Problem.** The irreducible representations of a connected compact Lie group K match its dominant analytically integral weights. If K is simply connected, the two notions of integral agree.

**How the definition helps.** The highest weight theorem classifies irreducible representations of K by dominant weights that are characters of T, and analytic integrality picks out exactly those (our own). For simply connected K, the coroots generate the scaled period lattice, so the two integrality tests agree (our own).

**Wikipedia:** [Theorem of the highest weight](https://en.wikipedia.org/wiki/Theorem_of_the_highest_weight). It says: “This distinction reflects the fact that if K is not simply connected, there may be representations of 𝔤 that do not come from representations of K.”

**Sources:**

- [H. Weyl, Theorie der Darstellung kontinuierlicher halb-einfacher Gruppen durch lineare Transformationen. I, Math. Z. 23 (1925) 271–309](https://doi.org/10.1007/BF01506234)

### Averaged matrix coefficients give characters

**Remember:** Average out the choice of basis, leaving only the trace.

*True by definition. Confidence: medium.* MSC 22C05 (Compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** For a compact Hausdorff group G with Haar probability measure dh, the conjugation average of a continuous function f is Af(g) = ∫ f(hgh⁻¹) dh, a class function that equals f when f already is one. Apply it to a matrix coefficient g ↦ ⟨π(g)v,w⟩ of a unitary representation π.

**Problem.** For a continuous irreducible unitary representation, averaging a matrix coefficient gives a multiple of its character, the trace function. Finite linear combinations of these characters approximate every continuous complex class function uniformly.

**How the definition helps.** Averaging π(g) over conjugation gives an operator commuting with π(G), so Schur's lemma makes it the scalar χ(g)/dim π (our own). Hence A sends matrix coefficients to multiples of the character. A fixes class functions and does not increase uniform error, so it turns Peter–Weyl approximations by matrix coefficients into approximations by characters (our own).

**Wikipedia:** [Class function](https://en.wikipedia.org/wiki/Class_function). It says: “the irreducible characters form a Hilbert basis of the Hilbert space of square-integrable class functions”

**Sources:** none listed. No primary source with a working link was found.

### Coincident group uniformities give compact groups conjugation-invariant neighbourhoods

**Remember:** When left and right closeness agree, conjugation preserves suitably small neighbourhoods.

*True by definition.* MSC 22C05 (Compact groups), 54E15. arXiv math.GN, math.GR. Level 3: graduate.

**Definition.** In a topological group G, the left uniformity consists of relations containing {(x,y) ∈ G² ∣ x⁻¹y ∈ U} for some identity neighbourhood U, and the right uniformity uses xy⁻¹ ∈ U instead. On a compact Hausdorff group they coincide, since such a space carries only one compatible uniformity.

**Problem.** In a compact Hausdorff group, every neighbourhood of the identity contains an open neighbourhood invariant under conjugation by every group element.

**How the definition helps.** Because the uniformities agree, each identity neighbourhood U has an open symmetric identity neighbourhood V such that x⁻¹y ∈ V implies xy⁻¹ ∈ U. Taking y = xv⁻¹ puts xvx⁻¹ in U for every x ∈ G and v ∈ V. So the union of all conjugates of V is an open conjugation-invariant neighbourhood inside U (our own).

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “They also coincide if G is compact Hausdorff, since in that case there is only one uniformity whose uniform topology reproduces the given topology.”

**Sources:** none listed. No primary source with a working link was found.

### Distinct eigenvalues give covering sheets

**Remember:** With distinct eigenvalues, only their order remains to choose.

*Rules out counterexamples.* MSC 22C05 (Compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** In U(n), a matrix is regular if its eigenvalues are distinct, so its eigenlines are determined and only their order is free. The quotient G/T by the diagonal unitary matrices parametrizes ordered lists of n mutually orthogonal complex lines.

**Problem.** Send an ordered list of orthogonal lines and a diagonal unitary matrix with distinct entries to the unitary matrix with those eigenlines and eigenvalues. Onto the regular matrices, this map is a covering with n! sheets.

**How the definition helps.** Distinct eigenvalues fix the eigenlines, so a regular matrix has exactly n! preimages, one for each ordering. Near a regular matrix, disjoint disks around the eigenvalues give continuously varying spectral projections, so each ordering gives one sheet (our own). The identity in U(2) instead has infinitely many orthogonal decompositions into lines (our own).

**Wikipedia:** [Weyl integration formula](https://en.wikipedia.org/wiki/Weyl_integration_formula). It says: “is a smooth covering with fiber W when it is restricted to regular points”

**Sources:** none listed. No primary source with a working link was found.

### Haar measure gives invariant orbit measures

**Remember:** Sample a group element and move one point to sample the orbit.

*True by definition.* MSC 22C05 (Compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** Let a compact Hausdorff group G act continuously and transitively on a compact Hausdorff space X, and fix a point x. Give a Borel set B the Haar probability of the set of group elements g with gx ∈ B.

**Problem.** This prescription gives the unique invariant regular probability measure on the space, independently of the chosen point.

**How the definition helps.** Translating B by k left-translates that set of group elements, so invariance of Haar measure makes the measure invariant (our own). Changing x right-translates the set, which Haar probability on a compact group also ignores, and the continuous orbit map keeps regularity. By Fubini, any invariant probability integrates each continuous function to its constant orbit average, which fixes the regular measure (our own).

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “There exists a G-invariant measure on Oλ.”

**Sources:**

- [Alfréd Haar, Der Massbegriff in der Theorie der Kontinuierlichen Gruppen (1933), for existence of Haar measure](https://doi.org/10.2307/1968346)

### Matrix coefficients form dense algebras

**Remember:** The product of two coefficients is a coefficient of their tensor product.

*Makes the theorem clean to state or prove.* MSC 22C05 (Compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** The matrix coefficients of a finite-dimensional continuous complex representation π on V are the functions g ↦ ℓ(π(g)v), for v ∈ V and linear functionals ℓ on V. A product of two of them is a coefficient of the tensor product representation.

**Problem.** The matrix coefficients of a compact Hausdorff group span an algebra dense in the continuous functions in the uniform norm.

**How the definition helps.** Tensor products multiply coefficients, the trivial representation gives constants, and conjugate representations give complex conjugates, so the span is a unital algebra closed under conjugation (our own). Peter–Weyl gives enough finite-dimensional representations to separate points. Stone–Weierstrass then gives uniform density (our own).

**nLab:** [Peter-Weyl theorem](https://ncatlab.org/nlab/show/Peter-Weyl+theorem). It says: “Representative functions on a compact topological group form a dense subspace of the space of all continuous functions.”

**Sources:** none listed. No primary source with a working link was found.

### Profinite matrix representations factor finitely

**Remember:** Small open subgroups must die in a group with no small subgroups.

*True by definition.* MSC 22C05 (Compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** A profinite group is a topological group isomorphic to an inverse limit of finite discrete groups. So the kernels of its maps to those finite groups are arbitrarily small open subgroups (our own).

**Problem.** Every continuous finite-dimensional unitary representation of a profinite group factors through a finite quotient.

**How the definition helps.** A unitary group has an identity neighbourhood containing no nontrivial subgroup, and its preimage contains one of these kernels, which the representation must kill (our own). So the representation factors through the finite image of that projection (our own).

**nLab:** [profinite group](https://ncatlab.org/nlab/show/profinite+group). It says: “A profinite group is an inverse limit of a system of finite groups.”

**Paper or page:** [Stationary random subgroups in negative curvature](https://arxiv.org/abs/2303.04237v4). It says: “For example, Lie groups as well as discrete groups have no small subgroups.”

**Sources:** none listed. No primary source with a working link was found.

### The normalizer shows why Weyl symmetry preserves weight multiplicities

**Remember:** Conjugating the torus transports its common eigenspaces.

*True by definition. Confidence: medium.* MSC 22C05 (Compact groups), 17B10. arXiv math.RT. Level 3: graduate.

**Definition.** For a maximal torus T in a compact connected Lie group G, the normalizer N(T) consists of the elements n with nTn⁻¹ = T, and the Weyl group is N(T)/T. Each such n maps T to itself, so π(n) carries each weight space of T onto another weight space.

**Problem.** The Weyl group permutes the weights of a continuous finite-dimensional complex representation of G and preserves the dimensions of their weight spaces.

**How the definition helps.** If v has weight μ, then π(n)v has weight t ↦ μ(n⁻¹tn), and π(n)⁻¹ carries it back, so the dimensions agree (our own). Since T is abelian, changing n by an element of T does not change this weight (our own).

**nLab:** [Weyl group](https://ncatlab.org/nlab/show/Weyl+group). It says: “The Weyl group of a compact Lie group G is equivalently the quotient group of the normalizer of any maximal torus T by that torus.”

**Wikipedia:** [Semisimple Lie algebra](https://en.wikipedia.org/wiki/Semisimple_Lie_algebra). It says: “The Weyl group is an important symmetry of the problem; for example, the weights of any finite-dimensional representation of 𝔤 are invariant under the Weyl group.”

**Sources:** none listed. No primary source with a working link was found.

### Weyl orbits classify conjugacy

**Remember:** Move to one torus, then test a finite orbit.

*Makes the theorem clean to state or prove.* MSC 22C05 (Compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** Fix a maximal torus T in a compact connected Lie group G, a maximal subgroup isomorphic to a product of circles. The Weyl group is the group of elements whose conjugation maps T to itself, divided by T, and it acts on T by conjugation.

**Problem.** Every conjugacy class in G meets T, and its intersection with T is exactly one Weyl group orbit.

**How the definition helps.** The maximal torus theorem conjugates every element into T, and Weyl group elements act by conjugation, so each Weyl orbit lies in one class. If gtg⁻¹ = t′ in T, then T and gTg⁻¹ are maximal tori in the identity component of the centralizer of t′ (our own). Conjugating them together by some c there makes cg normalize T, and cg still sends t to t′ (our own).

**nLab:** [maximal torus](https://ncatlab.org/nlab/show/maximal+torus). It says: “Any two elements of a maximal torus T ↪︎ G are conjugate in G precisely if they are conjugate via the Weyl group.”

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “The following map between the set of Weyl orbits in T and the set of conjugacy classes of T in G is a bijection.”

**Sources:** none listed. No primary source with a working link was found.

### Bohr compactification preserves quotients

**Remember:** Kill the subgroup, and continuity kills its closure too.

*True by definition.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** The Bohr compactification of G consists of a compact Hausdorff group bG and a continuous homomorphism i from G with dense image in bG. Every continuous homomorphism f from G to a compact Hausdorff group factors uniquely as f = h ∘ i through a continuous homomorphism h.

**Problem.** Let N be a closed normal subgroup of a locally compact group G. The Bohr compactification of G/N is the Bohr compactification of G divided by the closure of the image of N.

**How the definition helps.** bG divided by the closure of i(N) has the universal property for G/N, so it is the Bohr compactification of G/N (our own). A continuous homomorphism from G/N to a compact Hausdorff group is one from G that kills N, and its extension to bG kills the closure of i(N) by continuity. So it factors uniquely through the quotient, where G/N has dense image (our own).

**nLab:** [Bohr compactification](https://ncatlab.org/nlab/show/Bohr+compactification). It says: “The Bohr compactification exists for any topological group G.”

**Paper or page:** [On Bohr compactifications and profinite completions of group extensions](https://arxiv.org/abs/2305.04803v1). It says: “Bohr(p) is surjective and its kernel is $\\overline{\\beta \_G(N)}$.”

**Sources:** none listed. No primary source with a working link was found.

### Closed subgroups make Chabauty compact

**Remember:** Closed subgroup limits may stop being discrete.

*Rules out counterexamples. Confidence: medium.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** The Chabauty space of a locally compact Hausdorff group G is the set of all its closed subgroups, discrete or not. Represent each H by the compact set H ∪ {∞} in the one-point compactification. Use the topology in which basic conditions ask a set to meet given open sets and miss given closed sets.

**Problem.** The space of closed subgroups is compact. The discrete subgroups alone need not form a compact space.

**How the definition helps.** Limits of closed subgroups are closed subgroups, so they form a closed subset of a compact space (our own argument). In the compact space of closed sets containing ∞, a limit of subgroups contains the identity and is closed under quotients by continuity of division. Discreteness is not preserved, since (1/n)ℤ converges to ℝ.

**Paper or page:** [Computably locally compact groups and their closed subgroups](https://arxiv.org/abs/2407.19440). It says: “For a computably locally compact group G, the Chabauty space 𝒮(G) is Π⁰₁ (effectively closed) in the computably compact hyperspace 𝒦(G\*)”

**Sources:**

- [Computably locally compact groups and their closed subgroups, Proposition 4.2](https://arxiv.org/abs/2407.19440)
- [Claude Chabauty, Limite d’ensembles et géométrie des nombres (1950)](https://doi.org/10.24033/bsmf.1412)

### Coset counts give rational modular values

**Remember:** Measure the two subgroups in units of their intersection.

*True by definition.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** For a totally disconnected locally compact group G with left Haar measure μ, set Δ(g) = μ(U)/μ(g⁻¹Ug) for a compact open subgroup U. Both U and g⁻¹Ug are compact open subgroups, so each is a finite union of cosets of their intersection.

**Problem.** The modular function of a totally disconnected locally compact group takes values in the positive rational numbers.

**How the definition helps.** Cosets of the open intersection all have equal Haar measure, so the ratio is a ratio of two finite indices (our own). Uniqueness of Haar measure makes Δ independent of U, and van Dantzig's theorem provides U (our own).

**Paper or page:** [Cayley--Abels graphs and invariants of totally disconnected, locally compact groups](https://arxiv.org/abs/2105.12630v1). It says: “the image of the modular function is a subgroup of the multiplicative group of positive rational numbers.”

**Sources:** none listed. No primary source with a working link was found.

### Finite stabilizer orbits give compactness

**Remember:** A stabilizer with finite orbits sits in a product of finite groups.

*Rules out counterexamples.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** Give the permutations of a countable set the topology of pointwise convergence, and take a closed transitive group of them. Require each point stabilizer to have only finite orbits, so it lies inside a product of finite permutation groups.

**Problem.** Each point stabilizer is compact and open. The group is therefore locally compact.

**How the definition helps.** Finite orbits put a point stabilizer inside a compact product of finite permutation groups, one per orbit, and closedness makes it compact (our own argument). Fixing one point is an open condition, so the stabilizer is open. In the full permutation group of a countably infinite set, every finite-set stabilizer has an infinite orbit, so no basic neighbourhood is compact.

**Paper or page:** [Cayley--Abels graphs and invariants of totally disconnected, locally compact groups](https://arxiv.org/abs/2105.12630). It says: “Assume G is closed in the permutation topology. Assume also that all suborbits are finite.”

**Sources:** none listed. No primary source with a working link was found.

### Lattices force ambient unimodularity

**Remember:** A finite invariant quotient cannot sustain a nontrivial volume scaling.

*Rules out counterexamples.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 3: graduate.

**Definition.** A lattice in a locally compact Hausdorff group G is a discrete subgroup Γ such that G/Γ admits a nonzero finite G-invariant Radon measure.

**Problem.** A locally compact Hausdorff group with a lattice is unimodular.

**How the definition helps.** A G-invariant quotient measure forces Δ<sub>G</sub> to agree with Δ\_Γ = 1 on Γ, so log Δ<sub>G</sub> descends to G/Γ (our own). Its pushforward is a probability on ℝ invariant under translation by each log Δ<sub>G</sub>(g), and only the zero translation preserves a probability. Integer translations in the real affine group show that discreteness alone does not suffice (our own).

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

**Definition.** A direct integral of a measurable field of Hilbert spaces over (X,μ) consists of measurable sections s with ∫ ‖s(x)‖² dμ(x) finite, up to equality almost everywhere, with the integrated inner product. It is a direct sum with the sum replaced by an integral, so no single piece need be a subspace.

**Problem.** For a second countable unimodular locally compact group G of type I with fixed Haar measure, the two-sided regular representation on L²(G) decomposes as ∫ π ⊗ π\* dμ(π) over the unitary dual. The unique Plancherel measure μ satisfies ‖f‖₂² = ∫ ‖π(f)‖²<sub>HS</sub> dμ(π) for f ∈ L¹(G) ∩ L²(G).

**How the definition helps.** A direct integral lets irreducible pieces appear with a continuous distribution, none of them a subspace. For ℤ, no character lies in ℓ²(ℤ), so no direct sum of character spaces works. The type I Plancherel theorem supplies the measure and the norm identity (our own).

**nLab:** [Plancherel measure](https://ncatlab.org/nlab/show/Plancherel+measure). It says: “while it's not always possible to decompose L²(G) as a direct sum of irreducible reprenentations (this already fails for G=ℤ), it is always possible to decompose it as a direct integral of irreducible representations”

**Sources:**

- [I. E. Segal, An extension of Plancherel's formula to separable unimodular groups, Annals of Mathematics 52 (1950) 272–292](https://doi.org/10.2307/1969470)

### The strong operator topology makes regular representations continuous

**Remember:** Translation changes each fixed function a little, but not every function uniformly.

*Makes the theorem clean to state or prove.* MSC 22D10 (Unitary representations of locally compact groups), 22D05. arXiv math.RT, math.FA. Level 3: graduate.

**Definition.** A unitary representation is a homomorphism into the unitary operators on a Hilbert space that is strongly continuous: g ↦ π(g)v is norm-continuous for each fixed vector v. Uniform continuity over all unit vectors is not required.

**Problem.** For a locally compact Hausdorff group G, the left regular action on L²(G) is a unitary representation. It sends f(x) to f(g⁻¹x) and uses left Haar measure, a measure unchanged by left translations.

**How the definition helps.** Strong continuity asks only that each fixed function move continuously under translation. Haar invariance makes translations unitary, and small translations move a compactly supported continuous function little in L², which extends to L²(G) by density (our own). On ℝ, unit vectors supported on intervals shorter than the shift move distance √2, so operator norm continuity fails (our own).

**nLab:** [topological group](https://ncatlab.org/nlab/show/topological+group). It says: “The reason that in the definition of a unitary representation, the strong operator topology on 𝒰(ℋ) is used and not the norm topology, is that only few homomorphisms turn out to be continuous in the norm topology.”

**Sources:** none listed. No primary source with a working link was found.

### Admissibility gives smooth biduality

**Remember:** Double-dualize each finite fixed space, then take the union.

*Rules out counterexamples. Confidence: medium.* MSC 22D12 (Other representations of locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** For a totally disconnected locally compact group, a complex representation is smooth if every vector has an open stabilizer, so it is the union of its spaces fixed by compact open subgroups. It is admissible if each such fixed space is finite-dimensional, and its smooth dual keeps the linear functionals with open stabilizers.

**Problem.** The evaluation map from a smooth admissible representation to its double smooth dual is an isomorphism.

**How the definition helps.** Averaging over a compact open subgroup K projects onto the K-fixed space, so the K-fixed smooth functionals are exactly the dual of that space (our own argument). Applying this twice, evaluation is an isomorphism on each finite-dimensional K-fixed space, and these spaces exhaust the representation. For the trivial group, an infinite-dimensional space fails algebraic double duality.

**Wikipedia:** [Admissible representation](https://en.wikipedia.org/wiki/Admissible_representation). It says: “the space of vectors fixed by any compact open subgroup is finite dimensional”

**Sources:** none listed. No primary source with a working link was found.

### Admissibility makes character traces finite

**Remember:** Average first, then trace on a finite space.

*Rules out counterexamples. Confidence: medium.* MSC 22D12 (Other representations of locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** Let G be a totally disconnected locally compact Hausdorff group. A complex representation is smooth if every vector has an open stabilizer. It is admissible if the vectors fixed by each compact open subgroup form a finite-dimensional space.

**Problem.** Every compactly supported locally constant test function defines a finite-rank operator in an admissible smooth complex representation.

**How the definition helps.** Compact support and local constancy give a compact open subgroup K fixing the test function under left translation (our own). Left invariance of Haar measure then puts the operator's image in the K-fixed space, which admissibility makes finite-dimensional. On infinitely many trivial summands, a function of integral one acts as the identity, of infinite rank (our own).

**Wikipedia:** [Admissible representation](https://en.wikipedia.org/wiki/Admissible_representation). It says: “the space of vectors fixed by any compact open subgroup is finite dimensional”

**Sources:** none listed. No primary source with a working link was found.

### Compact open subgroups give smoothness

**Remember:** Matrix groups have no small subgroups, so a compact open one dies.

*True by definition. Confidence: medium.* MSC 22D12 (Other representations of locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** A locally profinite group is a Hausdorff topological group in which every identity neighbourhood contains a compact open subgroup. A representation is smooth if every vector has an open stabilizer.

**Problem.** Every finite-dimensional continuous complex representation of a locally profinite group has open kernel and is smooth.

**How the definition helps.** A continuous matrix representation pulls back an identity neighbourhood with no nontrivial subgroup, and that preimage contains a compact open subgroup, which must map to the identity (our own). So the kernel contains an open subgroup, and every vector stabilizer contains the kernel (our own).

**Wikipedia:** [Locally profinite group](https://en.wikipedia.org/wiki/Locally_profinite_group). It says: “every neighborhood of the identity element contains a compact open subgroup.”

**Sources:** none listed. No primary source with a working link was found.

### Double cosets turn reversal into commutativity

**Remember:** A reversal that fixes the functions forces convolution to commute.

*True by definition.* MSC 22D15 (Group algebras of locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** A closed subgroup K of a compact Hausdorff group G forms a Gelfand pair when convolution is commutative on continuous complex functions constant on each double coset KgK. Here (f ∗ h)(x) = ∫ f(y)h(y⁻¹x) dy for Haar probability dy.

**Problem.** Suppose a continuous involution σ of G preserves each double coset and satisfies σ(xy) = σ(y)σ(x) for all x,y ∈ G. Then (G,K) is a Gelfand pair.

**How the definition helps.** Composing with σ fixes every function constant on double cosets, and it reverses the order of convolution (our own). So f ∗ h = (f ∗ h)∘σ = (h∘σ) ∗ (f∘σ) = h ∗ f. The reversal uses that σ preserves the Haar probability measure (our own).

**Wikipedia:** [Gelfand pair](https://en.wikipedia.org/wiki/Gelfand_pair). It says: “Suppose that there exists an involutive anti-automorphism σ of G such that any (K, K) double coset is σ-invariant.”

**Sources:** none listed. No primary source with a working link was found.

### Defining the full group C\*-algebra by all representations makes every representation extend

**Remember:** Take the largest norm any representation sees, so every one stays bounded.

*True by definition.* MSC 22D25 (\\(C<sup>\*\\</sup>)-algebras and \\(W<sup>\*\\</sup>)-algebras in relation to group representations), 46L05. arXiv math.OA. Level 3: graduate.

**Definition.** The full group C\*-algebra C\*(G) of a discrete group G completes its complex group algebra ℂ\[G\] in the largest norm any representation sees: ‖x‖ = sup ‖π(x)‖ over all unitary representations π, extended linearly. So every π satisfies ‖π(x)‖ ≤ ‖x‖ by construction.

**Problem.** Every unitary representation of a discrete group G extends uniquely to a representation of C\*(G) that preserves adjoints.

**How the definition helps.** Every π is bounded by the norm, so it extends uniquely by continuity from the dense group algebra, and multiplication and adjoints pass to limits (our own). The supremum is finite because the sum of the absolute values of the coefficients bounds it. It is a norm because the left regular representation is faithful on ℂ\[G\] (our own).

**Wikipedia:** [Group algebra of a locally compact group](https://en.wikipedia.org/wiki/Group_algebra_of_a_locally_compact_group). It says: “It follows from the definition that, when G is a discrete group, C\*(G) has the following universal property”

**Sources:** none listed. No primary source with a working link was found.

### Compact induction preserves exactness

**Remember:** Each coset contributes one copy, and direct sums preserve exactness.

*True by definition. Confidence: medium.* MSC 22D30 (Induced representations for locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** Compact induction from an open subgroup H of a locally profinite group G takes a smooth H-representation V to the functions f from G to V with f(hg) = hf(g) that vanish outside finitely many cosets Hg, with G acting by right translation. Such a function is fixed by its values at one representative per coset, so as a vector space it is a direct sum of copies of V.

**Problem.** Compact induction from H is exact on smooth representations over a field, those where each vector is fixed by an open subgroup.

**How the definition helps.** Evaluation at one representative per coset identifies compact induction of V with a direct sum of copies of V, and maps act coordinatewise (our own). Direct sums preserve exactness. Every finitely supported assignment is allowed, because the finite intersection of conjugates of its values’ open stabilizers fixes it (our own).

**Wikipedia:** [Induced representation](https://en.wikipedia.org/wiki/Induced_representation). It says: “φ has compact support mod H”

**Sources:** none listed. No primary source with a working link was found.

### Equivariant functions describe bundle sections

**Remember:** Changing the coset representative changes the coordinate by the inverse character.

*True by definition.* MSC 22D30 (Induced representations for locally compact groups). arXiv math.RT. Level 3: graduate.

**Definition.** The line bundle over G/H attached to a smooth homomorphism χ from a closed subgroup H to nonzero complex numbers has, over each coset gH, the pairs (g, z) with (gh, z) identified with (g, χ(h)z). So a point on the line over gH is a number attached to a chosen representative, and changing g to gh multiplies that number by χ(h)⁻¹. A section chooses one point on each line.

**Problem.** Smooth sections of this line bundle correspond to smooth functions f on G with f(gh) = χ(h)⁻¹f(g). The correspondence respects the G-actions.

**How the definition helps.** Writing the section’s point over gH as \[g, f(g)\] defines f, and the rule for changing representatives forces f(gh) = χ(h)⁻¹f(g) (our own). Smooth local coset representatives match smoothness on both sides. Left translation moves g on both sides, so the correspondence respects the G-actions (our own).

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “f ↦ (gH ↦ \[g, f(g)\]) is G-equivariant bijection.”

**Sources:** none listed. No primary source with a working link was found.

### Allowing immersed Lie subgroups makes every Lie subalgebra come from a subgroup

**Remember:** Let subgroups wind densely, and every subalgebra gets its subgroup.

*Makes the theorem clean to state or prove.* MSC 22E15 (General properties and structure of real Lie groups), 22E60. arXiv math.GR, math.DG. Level 3: graduate.

**Definition.** An immersed Lie subgroup of G is a subgroup with its own Lie group structure, possibly finer than the subspace topology, for which the inclusion into G is a smooth immersion. So a line of irrational slope wound densely in the two-torus counts.

**Problem.** Connected immersed Lie subgroups of G correspond one-to-one with Lie subalgebras of its Lie algebra.

**How the definition helps.** Each Lie subalgebra gives a left-invariant distribution, and the Frobenius theorem integrates it to a unique connected leaf through the identity, which is an immersed subgroup (our own). Closed subgroups alone would not suffice. The irrational-slope line in the Lie algebra of the two-torus integrates to a dense leaf, not a closed subgroup.

**Wikipedia:** [Lie group–Lie algebra correspondence](https://en.wikipedia.org/wiki/Lie_group%E2%80%93Lie_algebra_correspondence), [Closed-subgroup theorem](https://en.wikipedia.org/wiki/Closed-subgroup_theorem). It says: “If G is a Lie group and 𝔥 is a Lie subalgebra of Lie(G), then there is a unique connected Lie subgroup (not necessarily closed) H of G with Lie algebra 𝔥.”

**Sources:** none listed. No primary source with a working link was found.

### Bi-invariant metrics give subgroup geodesics

**Remember:** Both symmetries make ∇ₓX vanish, so subgroups run straight.

*Rules out counterexamples.* MSC 22E15 (General properties and structure of real Lie groups). arXiv math.GR. Level 3: graduate.

**Definition.** A bi-invariant Riemannian metric on a Lie group is one that both left and right translations preserve. For such a metric the Levi-Civita connection on left-invariant fields is ∇ₓY = ½\[X,Y\], so ∇ₓX = 0.

**Problem.** For a bi-invariant metric, the geodesics through the identity are exactly the one-parameter subgroups t ↦ exp(tX), with their usual parameter.

**How the definition helps.** Since ∇ₓX = ½\[X,X\] = 0, the one-parameter subgroup of X, the integral curve of X through the identity, has zero acceleration (our own). Uniqueness of a geodesic for each initial velocity gives all geodesics through the identity. A left-invariant metric is not enough: on the real affine group with orthonormal A, B and \[A,B\] = B, the Koszul formula gives ⟨∇ᵦB,A⟩ = 1, so exp(tB) is not a geodesic (our own).

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

**Definition.** A discrete central subgroup D of a Lie group G consists of elements that commute with every element of G, and some identity neighbourhood meets D only at the identity. Quotienting by such a D is a covering map, a local isomorphism, so it leaves the Lie algebra unchanged (our own).

**Problem.** Every connected Lie group with a given finite-dimensional real Lie algebra is a quotient of its simply connected integrating group by a discrete central subgroup. Conversely, each such quotient has that Lie algebra.

**How the definition helps.** A covering homomorphism is a local isomorphism, so it induces an isomorphism of Lie algebras (our own). Conversely, a connected group is the quotient of its universal covering group by a discrete normal kernel, which is central because conjugation by a connected group cannot move a point of a discrete set. A non-discrete kernel fails: ℝ² modulo a line has a smaller Lie algebra (our own).

**Wikipedia:** [Lie group–Lie algebra correspondence](https://en.wikipedia.org/wiki/Lie_group%E2%80%93Lie_algebra_correspondence). It says: “there is a one-to-one correspondence between quotients of G̃ by discrete central subgroups and connected Lie groups having Lie algebra 𝔤”

**Sources:** none listed. No primary source with a working link was found.

### Positive roots give complex flags

**Remember:** Positive root directions stay on the same side under brackets.

*Makes the theorem clean to state or prove.* MSC 22E15 (General properties and structure of real Lie groups), 22C05. arXiv math.RT. Level 3: graduate.

**Definition.** Let G be a compact connected Lie group with maximal torus T, whose roots are the nonzero weights of T on the complexified Lie algebra. Choose a real linear functional ℓ that is nonzero on every root, and call α positive when ℓ(α) &gt; 0. Since ℓ is additive, a sum of two positive roots, when it is a root, is again positive.

**Problem.** Use the positive root spaces as the +i eigenspace on the complexified tangent space of G/T at the identity coset. Translating this choice gives an invariant complex structure on G/T.

**How the definition helps.** The bracket of the root spaces for α and β lies in the root space for α + β, which is positive when both are (our own). So the positive root spaces, together with the complexified torus algebra, are closed under bracket. By the integrability criterion, this closure makes the translated eigenspaces an integrable complex structure (our own).

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “Then J is integrable if and only if P is closed under the Lie bracket.”

**Sources:** none listed. No primary source with a working link was found.

### Simply connected Lie groups are determined by their Lie algebras

**Remember:** Every loop contracts, so Lie algebra maps integrate without obstruction.

*Rules out counterexamples.* MSC 22E15 (General properties and structure of real Lie groups), 22E60. arXiv math.GR, math.DG. Level 3: graduate.

**Definition.** A Lie group is simply connected if it is connected and every loop in it contracts to a point. So continuing a map defined near the identity along paths never depends on the path chosen (our own).

**Problem.** Passing to the Lie algebra is an equivalence from the category of simply connected Lie groups to the category of finite-dimensional real Lie algebras.

**How the definition helps.** Lie’s second theorem uses simple connectivity to integrate each Lie algebra homomorphism to a unique group homomorphism, so the functor is fully faithful. Lie’s third theorem and the universal cover give a simply connected group for each finite-dimensional real Lie algebra (our own). Without simple connectivity it fails: the inverse of the differential of SU(2) → SO(3) does not integrate to a homomorphism SO(3) → SU(2).

**nLab:** [Lie's three theorems](https://ncatlab.org/nlab/show/Lie%27s+three+theorems), [Lie group](https://ncatlab.org/nlab/show/Lie+group), [Lie integration](https://ncatlab.org/nlab/show/Lie+integration). It says: “The category of local Lie groups is equivalent to the category of connected and simply connected Lie groups.”

**Sources:**

- [Jean-Pierre Serre, Lie Algebras and Lie Groups, 1964 lectures at Harvard, Lecture Notes in Math. 1500 (1992)](https://doi.org/10.1007/978-3-540-70634-2)
- [Hans Duistermaat, Johan A. C. Kolk, Lie groups, Springer (2000), Chapter 1](https://doi.org/10.1007/978-3-642-56936-4)

### The determinant formula makes connected nilpotent Lie groups unimodular

**Remember:** Conjugation preserves volume because its derivative has determinant of modulus one.

*True by definition.* MSC 22E15 (General properties and structure of real Lie groups), 28C10. arXiv math.GR, math.RT. Level 3: graduate.

**Definition.** A Lie group is unimodular when conjugation by every element preserves Haar volume. This happens exactly when \|det Ad(g)\| = 1 for every g, where Ad(g) is the derivative of conjugation by g at the identity.

**Problem.** Every connected nilpotent Lie group is unimodular, where nilpotent means that sufficiently long iterated commutators are trivial.

**How the definition helps.** For X in the Lie algebra, Ad(exp X) is the exponential of the nilpotent map ad X, so its determinant is e to the trace of ad X, which is 1 (our own). Exponentials generate a connected Lie group, so every element has \|det Ad(g)\| = 1 (our own). The determinant formula itself comes from how conjugation changes a left-invariant volume form.

**Wikipedia:** [Haar measure](https://en.wikipedia.org/wiki/Haar_measure). It says: “This means also that the modular function can be computed, as the absolute value of the determinant of the adjoint representation.”

**Sources:** none listed. No primary source with a working link was found.

### Universal complexification extends complex representations uniquely

**Remember:** Every map to a complex group passes holomorphically through one group.

*True by definition.* MSC 22E15 (General properties and structure of real Lie groups), 22E46. arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** A universal complexification of a real Lie group G is a continuous homomorphism j from G to a complex Lie group through which every continuous homomorphism from G to a complex Lie group factors uniquely by a holomorphic homomorphism.

**Problem.** Each continuous finite-dimensional complex representation of a real Lie group extends uniquely to a holomorphic representation of its universal complexification.

**How the definition helps.** A finite-dimensional complex representation is a continuous homomorphism to GL(V), a complex Lie group, so the universal property is exactly the extension statement (our own). The real work is proving that the universal complexification exists, or that a model such as SL(n,ℂ) for SU(n) has the property (our own).

**Wikipedia:** [Complexification (Lie group)](https://en.wikipedia.org/wiki/Complexification_%28Lie_group%29). It says: “every continuous homomorphism of the original group into another complex Lie group extends compatibly to a complex analytic homomorphism between the complex Lie groups”

**Sources:** none listed. No primary source with a working link was found.

### Positive gradings give group dilations

**Remember:** Weights add under brackets, so their scale factors multiply.

*True by definition.* MSC 22E25 (Nilpotent and solvable Lie groups). arXiv math.GR. Level 3: graduate.

**Definition.** A positive grading splits a Lie algebra into spaces of positive integer weight, so that the bracket of weights i and j lies in weight i + j. The dilation with factor r &gt; 0 multiplies weight-j vectors by rʲ, and it preserves brackets because rⁱrʲ = rⁱ⁺ʲ.

**Problem.** Every positively graded finite-dimensional real Lie algebra gives a family of group automorphisms on its simply connected Lie group. Applying two of these multiplies their dilation factors.

**How the definition helps.** Each dilation is a Lie algebra automorphism with inverse the dilation by 1/r, and the dilations by r and s compose to the dilation by rs (our own). Lie’s integration theorem lifts each dilation to a unique automorphism of the simply connected group. Uniqueness carries composition along (our own).

**Paper or page:** [Characteristically nilpotent Lie groups with flat coadjoint orbits](https://arxiv.org/abs/2408.10660v2). It says: “𝔤 admits a family of dilations.”

**Sources:** none listed. No primary source with a working link was found.

### Heisenberg coefficients integrate modulo the center

**Remember:** Remove the center before integrating a coefficient whose size ignores it.

*Rules out counterexamples. Confidence: medium.* MSC 22E27 (Representations of nilpotent and solvable Lie groups (special orbital integrals, non-type I representations, etc.)). arXiv math.RT. Level 3: graduate.

**Definition.** An irreducible unitary representation π of G is square integrable modulo its center Z if some nonzero coefficient g ↦ ⟨π(g)v,w⟩ has absolute value in L²(G/Z). This makes sense because central elements act by unit scalars, so the absolute value is constant along each coset of Z.

**Problem.** The Schrödinger representation of the real Heisenberg group is square integrable modulo its center, but not square integrable on the full group.

**How the definition helps.** On the Heisenberg group the coefficient’s absolute value is constant along the real center, so its square integral over G is infinite, while over G/Z it can be finite (our own). The Schrödinger representation acts on L²(ℝ) by translations and multiplications by phases. Parseval’s identity makes the integral over G/Z proportional to the product of the squared norms of v and w.

**Paper or page:** [Characteristically nilpotent Lie groups with flat coadjoint orbits](https://arxiv.org/abs/2408.10660v2). It says: “π is square-integrable modulo Z”

**Sources:** none listed. No primary source with a working link was found.

### Brackets give coadjoint symplectic forms

**Remember:** Pair the point of the orbit with the bracket of two directions.

*Makes the theorem clean to state or prove.* MSC 22E60 (Lie algebras of Lie groups). arXiv math.RT. Level 3: graduate.

**Definition.** On a coadjoint orbit, pair two tangent directions at a point ξ by applying ξ to the bracket of the Lie algebra elements X, Y that generate them: ω\_ξ(X♯,Y♯) = ξ(\[X,Y\]). The generated tangent vector X♯ is zero exactly when ξ(\[X,Y\]) = 0 for all Y, so the formula is well defined and nondegenerate.

**Problem.** This formula gives each coadjoint orbit a symplectic form, an alternating pairing with zero kernel and zero exterior derivative.

**How the definition helps.** The directions that pair to zero with everything are exactly those with X♯ = 0, so the form has zero kernel on the orbit (our own). Closedness holds because dω expands into a sum of three nested brackets, which vanishes by the Jacobi identity.

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

**Definition.** Each tangent vector X at the identity of a Lie group translates to a left-invariant vector field, and the Lie bracket is the commutator of these fields as differential operators on smooth functions. Because a homomorphism φ carries left translations to left translations, the fields of X and dφ(X) are φ-related: X(f∘φ) = (dφ(X)f)∘φ for every smooth f (our own).

**Problem.** The derivative at the identity of a smooth Lie group homomorphism preserves the Lie bracket.

**How the definition helps.** So pullback by φ turns the field of dφ(X) into the field of X, and hence turns commutators into commutators (our own). Evaluating at the identity gives dφ\[X,Y\] = \[dφ(X), dφ(Y)\] (our own).

**Paper or page:** [The Orbit Method for Compact Connected Lie Groups](https://arxiv.org/abs/0906.4915v1). It says: “Then by taking the derivative of φ at e we obtain a homomorphism of Lie algebras”

**Sources:** none listed. No primary source with a working link was found.

### Left-invariant vector fields make the Jacobi identity free for Lie groups

**Remember:** Commutators of operators satisfy the Jacobi identity.

*True by definition.* MSC 22E60 (Lie algebras of Lie groups), 17B66. arXiv math.DG, math.RT. Level 3: graduate.

**Definition.** The Lie algebra of a Lie group G consists of its left-invariant vector fields, viewed as differential operators on smooth functions, with bracket the commutator XY − YX.

**Problem.** The bracket of left-invariant vector fields satisfies the Jacobi identity.

**How the definition helps.** Commutators of linear operators always satisfy the Jacobi identity, as expanding the twelve terms shows (our own). The commutator of two left-invariant fields is again left-invariant, so the bracket stays inside the Lie algebra.

**Wikipedia:** [Lie group](https://en.wikipedia.org/wiki/Lie_group). It says: “Vector fields on any smooth manifold M can be thought of as derivations X of the ring of smooth functions on the manifold”

**Sources:** none listed. No primary source with a working link was found.

### Compact generation connects coset graphs

**Remember:** A finite list of moves connects the graph only if it generates.

*Rules out counterexamples.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 4: research.

**Definition.** A group is compactly generated if some compact subset generates it as an abstract group. A Cayley–Abels graph of G is a connected graph of finite valency on which G acts transitively on vertices with compact open vertex stabilizers.

**Problem.** A locally compact group whose connected components are singletons admits a Cayley–Abels graph exactly when it is compactly generated.

**How the definition helps.** Take a compact open subgroup U from van Dantzig’s theorem and finitely many double cosets UsU covering the compact generating set; they give edges on G/U and a connected graph of finite valency (our own). Conversely, connectivity makes U and finitely many neighbour representatives generate G, and that set is compact. An infinite discrete direct sum of two-element groups is not compactly generated and has no such graph (our own).

**Paper or page:** [Discretisable quasi-actions I: Topological completions and hyperbolicity](https://arxiv.org/abs/2207.04401v2). It says: “Let G be a compactly generated locally compact group containing a compact open subgroup. Then G acts geometrically on its Cayley–Abels graph.”

**Sources:** none listed. No primary source with a working link was found.

### Lie quotients detect dense powers

**Remember:** Test density in each quotient, where open sets can see it.

*True by definition.* MSC 22D05 (General properties and structure of locally compact groups). arXiv math.GR. Level 4: research.

**Definition.** A connected locally compact Hausdorff group G carries the inverse limit topology of its directed family of Lie quotients G/K, with K compact and normal, by the Gleason–Yamabe theorem. So every nonempty open set of G contains the preimage of a nonempty open set of one Lie quotient.

**Problem.** Fix a connected locally compact Hausdorff group G and a positive integer k. The kth powers are dense in G exactly when they are dense in every Lie quotient G/K with K compact and normal.

**How the definition helps.** Basic open sets come from one Lie quotient, so density of kth powers can be tested quotient by quotient. If xᵏK lies in an open set V of G/K, then xᵏ lies in the preimage of V (our own). Conversely, each quotient map sends dense sets onto dense sets and kth powers to kth powers (our own).

**Paper or page:** [Cartan subgroups in connected locally compact groups](https://arxiv.org/abs/2310.15564v1). It says: “Then Pₖ(G) is dense in G if and only if Pₖ(Gα) is dense in Gα for every α.”

**Sources:**

- [Arunava Mandal and Riddhi Shah, Cartan subgroups in connected locally compact groups (2023), Lemma 8.1](https://arxiv.org/abs/2310.15564v1)

### Translation-like actions make a Burnside-type theorem true for locally compact groups

**Remember:** Ask for bounded integer steps, not an element of infinite order.

*Makes the theorem clean to state or prove.* MSC 22D05 (General properties and structure of locally compact groups), 20F65. arXiv math.GR. Level 4: research.

**Definition.** A translation-like action of ℤ on G is free, and each integer acts by right translations on the pieces of a finite partition of G. In the Borel version the pieces are Borel and some Borel set meets each orbit exactly once. The clopen version is a Borel version whose pieces are also open and closed.

**Problem.** Let G be a locally compact group generated by a compact set. G is noncompact exactly when it admits a Borel, or equivalently clopen, translation-like action of ℤ.

**How the definition helps.** Piecewise translations give free integer steps even in groups with no element of infinite order (our own). They preserve right Haar measure, so the disjoint translates of a set meeting each orbit once would give a compact G zero or infinite total measure. The locally compact geometric Burnside theorem supplies a clopen action for every noncompact compactly generated G (our own).

**Paper or page:** [The Burnside problem for locally compact groups](https://arxiv.org/abs/1812.11743v1). It says: “G is non-compact. G admits a Borel (or equivalently clopen) translation-like action by ℤ.”

**Sources:**

- [Thibaut Dumont, Thibault Pillon, The Burnside problem for locally compact groups, arXiv:1812.11743v1 (2018)](https://arxiv.org/abs/1812.11743v1)

### Compact normal quotients preserve scale

**Remember:** The same coset action gives the same scale.

*True by definition.* MSC 22D45 (Automorphism groups of locally compact groups). arXiv math.GR. Level 4: research.

**Definition.** The scale of an element g of a totally disconnected locally compact group measures how fast g spreads a compact open subgroup U. It is the limit of the nth roots of the number of right cosets in the U-orbit of Ugⁿ, and it equals the minimum of \[U : U ∩ g⁻¹Ug\] for every choice of U.

**Problem.** Quotienting a totally disconnected locally compact group by a compact normal subgroup does not change the scale of any element.

**How the definition helps.** The scale counts cosets, and the quotient map by a compact normal subgroup matches these counts exactly (our own). The preimage of a compact open subgroup of the quotient is compact open, because the quotient map is proper. Projection identifies the coset spaces and their orbits, so the limits agree (our own).

**Paper or page:** [Cayley--Abels graphs and invariants of totally disconnected, locally compact groups](https://arxiv.org/abs/2105.12630), [Cayley--Abels graphs and invariants of totally disconnected, locally compact groups](https://arxiv.org/abs/2105.12630). It says: “If g ∈ G, then s₍G⁄K₎(gK) = s(g).”

**Sources:** none listed. No primary source with a working link was found.

### Growth makes scale exponentiate

**Remember:** Passing to a power takes a subsequence of the same growth rate.

*True by definition.* MSC 22D45 (Automorphism groups of locally compact groups). arXiv math.GR. Level 4: research.

**Definition.** The scale of g measures how fast the orbits of a compact open subgroup U on cosets grow. Fix U in a totally disconnected locally compact Hausdorff group G, and take the limit as n → ∞ of the nth root of \|{Ugⁿu ∣ u ∈ U}\|.

**Problem.** For every positive integer m, the scale of gᵐ is the mth power of the scale of g.

**How the definition helps.** For gᵐ, the nth orbit count is the (mn)th orbit count for g, so its nth root is the mth power of the (mn)th root, which tends to s(g)ᵐ (our own). The real work is the orbit growth theorem: the limit exists and does not depend on U.

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

**Definition.** A smooth real function f on a connected Lie group has Leibman degree at most d if every composition of d + 1 differences Δₕf(x) = f(xh) − f(x) vanishes. Equivalently, every composition of d + 1 left-invariant vector fields annihilates f, so the degree counts the derivatives f survives.

**Problem.** The product of two smooth functions of Leibman degrees at most d and e has degree at most d + e.

**How the definition helps.** By the derivative test, the product rule writes d + e + 1 derivatives of fg as a sum of terms, each splitting the derivatives between the two factors (our own). Every term puts more than d derivatives on f or more than e on g, so it vanishes. The equivalence with differences transfers the result to Leibman degree.

**Paper or page:** [Polynomial and horizontally polynomial functions on Lie groups](https://arxiv.org/abs/2011.13665v1). It says: “Then φ is a polynomial with degree at most d à la Leibman”

**Sources:**

- [Gioacchino Antonelli and Enrico Le Donne, Polynomial and horizontally polynomial functions on Lie groups (2020), Proposition 5.1](https://arxiv.org/abs/2011.13665v1)

### Locally smooth cochains let Lie group cohomology see all central extensions

**Remember:** Use cochains that are smooth only on the pieces of a cover.

*Makes the theorem clean to state or prove.* MSC 22E41 (Continuous cohomology of Lie groups), 20J06. arXiv math.GR, math.AT. Level 4: research.

**Definition.** Smooth Lie group cohomology Hⁿ(G,A) uses cochains that are smooth only locally. It is the hypercohomology of the nerve of G, whose degree-p manifold is Gᵖ, with coefficients in the sheaves of smooth A-valued functions, for an abelian Lie group A with trivial G-action.

**Problem.** The group H²(G, A) classifies all central extensions A → Ĝ → G that are locally trivial principal A-bundles. For discrete A, Hⁿ(G, A) equals the cohomology of the classifying space BG.

**How the definition helps.** Locally smooth cochains let one degree-two cocycle record both the bundle’s transition functions and the local multiplication law, so nontrivial bundles are allowed (our own). Globally smooth cochains miss the double cover SU(2) → SO(3), which has no global smooth section. For discrete A the sheaves are locally constant, and a comparison theorem identifies the result with Hⁿ(BG,A) (our own).

**nLab:** [Lie group cohomology](https://ncatlab.org/nlab/show/Lie+group+cohomology), [group cohomology](https://ncatlab.org/nlab/show/group+cohomology), [group extension](https://ncatlab.org/nlab/show/group+extension). It says: “But this does \*\*not\*\* in general give the right answer for structured groups”

**Sources:**

- [Jean-Luc Brylinski, Differentiable Cohomology of Gauge Groups (2000), arXiv:math/0011069](https://arxiv.org/abs/math/0011069)
- [Christopher Schommer-Pries, Central extensions of smooth 2-groups and a finite-dimensional string 2-group, Geom. Topol. 15 (2011), arXiv:0911.2483](https://arxiv.org/abs/0911.2483)

### A distribution defines characters when operators have no trace

**Remember:** Average the operators before taking their trace.

*Makes the theorem clean to state or prove.* MSC 22E46 (Semisimple Lie groups and their representations), 22E30. arXiv math.RT. Level 4: research.

**Definition.** The distribution character of an irreducible unitary representation π of a connected real semisimple Lie group G with finite centre averages the operators before taking a trace. It sends each smooth compactly supported test function f to tr(∫ f(g)π(g) dg), for a fixed Haar measure dg.

**Problem.** This character exists and is invariant under conjugation. Harish-Chandra’s regularity theorem says it is given by a locally integrable function, one that is integrable on every compact subset.

**How the definition helps.** In infinite dimensions π(g) has no trace, but Harish-Chandra’s trace-class theorem makes the averaged operator trace class, so the formula defines a distribution. Conjugating the test function conjugates the averaged operator and keeps its trace (our own). Harish-Chandra’s regularity theorem represents this distribution by a locally integrable function (our own).

**Wikipedia:** [Harish-Chandra character](https://en.wikipedia.org/wiki/Harish-Chandra_character). It says: “is a distribution on the group G that is analogous to the character of a finite-dimensional representation of a compact group.”

**Sources:**

- [Harish-Chandra, Representations of Semisimple Lie Groups. III. Characters, in Collected Papers, Springer (1984) 370–373](https://doi.org/10.1007/978-1-4899-7407-5_23)
- [Harish-Chandra, Invariant Eigendistributions on a Semisimple Lie Group, in Collected Papers, Springer (1984) 1457–1508](https://doi.org/10.1007/978-1-4899-7407-5_63)

### Normalized induction preserves smooth duals

**Remember:** Two half factors supply the one volume factor needed for pairing.

*Makes the theorem clean to state or prove.* MSC 22E50 (Representations of Lie and linear algebraic groups over local fields). arXiv math.RT. Level 4: research.

**Definition.** For G = SL₂(F) over a nonarchimedean local field, with B upper triangular and χ a smooth diagonal character, normalized induction acts by right translation on locally constant f from G to ℂ with f(bg) = \|a\|χ(diag(a,a⁻¹))f(g), where a is the first diagonal entry of b. The factor \|a\| is the square root of the modular character \|a\|² of B. So the product of a function for χ and one for χ⁻¹ transforms by exactly the factor that integration over the cosets of B in G needs.

**Problem.** For a character χ with open kernel, the smooth dual of normalized induction from χ is normalized induction from χ⁻¹. The smooth dual consists of linear functionals with open stabilizer.

**How the definition helps.** The product of functions induced from χ and χ⁻¹ picks up \|a\|², which makes its integral over a maximal compact subgroup a G-invariant pairing (our own explanation). Identifying every smooth functional through this pairing takes a separate duality theorem.

**Wikipedia:** [Induced representation](https://en.wikipedia.org/wiki/Induced_representation). It says: “With the addition of the normalizing factors this induction functor takes unitary representations to unitary representations.”

**Paper or page:** [Representations of SL₂(F)](https://arxiv.org/abs/2404.11188). It says: “The smooth dual of iᴳ′₍B′₎(χ) is iᴳ′₍B′₎(χ⁻¹).”

**Sources:** none listed. No primary source with a working link was found.

### Order selects Langlands quotients

**Remember:** Order the exponents before taking the quotient.

*Rules out counterexamples.* MSC 22E50 (Representations of Lie and linear algebraic groups over local fields), 11F70. arXiv math.RT, math.NT. Level 4: research.

**Definition.** A standard module for GLₙ over a p-adic field is normalized parabolic induction, from the upper block triangular subgroup, of irreducible tempered complex representations σ₁,…,σᵣ on the diagonal blocks. Each σᵢ is twisted by \|det\| raised to a real exponent sᵢ, with s₁ &gt; ⋯ &gt; sᵣ. The decreasing order is what picks out one irreducible quotient (our own).

**Problem.** Each standard module has a unique irreducible quotient. Every irreducible smooth complex representation of GLₙ, one where every vector has an open stabilizer, occurs this way with ordered data unique up to isomorphism.

**How the definition helps.** The order of the exponents decides which irreducible piece is the quotient (our own). For two trivial one-dimensional blocks with exponents ½ and −½, this order gives the trivial representation, while the reverse order gives the Steinberg representation (our own). The Langlands classification proves existence and uniqueness for the ordered data.

**Paper or page:** [The local Langlands conjecture](https://arxiv.org/abs/2510.00632v1). It says: “admits a unique irreducible quotient J(P,σ,ν).”

**Sources:** none listed. No primary source with a working link was found.
