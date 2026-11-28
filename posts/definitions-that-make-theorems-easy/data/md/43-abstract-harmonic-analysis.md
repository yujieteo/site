### Logarithms linearize Mellin convolution

**Remember:** Logarithms turn division into subtraction and ratios into lengths.

*True by definition.* MSC 43A32 (Other transforms and operators of Fourier type), 43A70. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Mellin convolution on the positive numbers is (f ∗ g)(x) = ∫f(y)g(x/y)dy/y, using the scaling-invariant measure dy/y. The substitution y = exp(u) turns dy/y into ordinary length and ratios into differences.

**Problem.** For f and g integrable against dx/x on the positive half-line, logarithmic coordinates turn their Mellin convolution into ordinary convolution. Its Mellin transform on the imaginary axis is the product of their transforms.

**How the definition helps.** Under y = exp(u) the integral becomes ordinary convolution. The Mellin kernel x<sup>(iξ)</sup> becomes exp(iξu), so the Fourier convolution theorem gives the product (our own).

**Wikipedia:** [Mellin transform](https://en.wikipedia.org/wiki/Mellin_transform). It says: “Notice that dx/x is a Haar measure on the multiplicative group ℝ₊× and x ↦ xˢ is a (generally non-unitary) multiplicative character.”

**Sources:** none listed. No primary source with a working link was found.

### Compact kernels let Haar measure descend

**Remember:** Compact fibers make the quotient preimages of compact sets compact.

*Rules out counterexamples.* MSC 43A05 (Measures on groups and semigroups, etc.). arXiv math.FA. Level 3: graduate.

**Definition.** Let N be a compact normal subgroup of a second-countable locally compact group G, with quotient map π: G → G/N. The pushforward of a left Haar measure μ gives each Borel set E ⊂ G/N the mass μ(π⁻¹(E)), which is finite on compact sets because the preimage of a compact set is compact.

**Problem.** Pushing Haar measure to the quotient by a compact normal subgroup gives Haar measure. Without compactness the pushforward can be infinite on every nonempty open set.

**How the definition helps.** The pushforward is finite on compact sets, left invariant because π is a homomorphism, and positive on nonempty open sets, so it is a Haar measure (our own). For ℝ modulo ℤ, an open arc lifts to infinitely many disjoint intervals of equal positive length, so its mass is infinite.

**Paper or page:** [Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005), [Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005). It says: “μ(π⁻¹(E)) = λ(N)ν(E)”

**Sources:**

- [M. Anoussis, G. K. Eleftherakis, A. Katavolos, Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005)

### Open images preserve Haar null preimages

**Remember:** Open image: target Haar measure restricts, so nullness pulls back.

*Rules out counterexamples.* MSC 43A05 (Measures on groups and semigroups, etc.), 43A85. arXiv math.FA. Level 3: graduate.

**Definition.** A continuous homomorphism θ: G → H between second-countable locally compact groups has open image if θ(G) contains a neighborhood of the identity in H. Then the image is an open subgroup, and Haar measure of H restricts to a Haar measure on it.

**Problem.** The preimage of every target Haar-null set is Haar-null exactly when the homomorphism has open image.

**How the definition helps.** On the open image, Weil's integration formula along the kernel shows that preimages of null sets are null (our own). Conversely, the image is σ-compact with full preimage, so preservation of null sets gives it positive measure, and a subgroup of positive measure is open (our own). For ℤ inside ℝ, the null set {0} pulls back to a set of counting measure one.

**Paper or page:** [Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005). It says: “The following are equivalent: (i) θ∗(μ) ≪ ν (ii) θ(G) is an open subgroup of H.”

**Sources:**

- [M. Anoussis, G. K. Eleftherakis, A. Katavolos, Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005)

### Unimodularity makes inversion measure-preserving

**Remember:** Inversion swaps the two sides of Haar invariance.

*True by definition.* MSC 43A05 (Measures on groups and semigroups, etc.). arXiv math.FA. Level 3: graduate.

**Definition.** A left Haar measure on a locally compact Hausdorff group is a nonzero regular Borel measure, finite on compact sets and invariant under left translations. The group is unimodular if that measure is also invariant under right translations. Inversion swaps left and right translations (our own).

**Problem.** Inversion preserves left Haar measure exactly when the group is unimodular.

**How the definition helps.** Inversion turns a left Haar measure into a right one, which in a unimodular group is a left Haar measure and so a positive multiple c of the original (our own). Applying inversion twice gives c² = 1, so c = 1 (our own). Conversely, inversion invariance makes the left measure right invariant (our own).

**nLab:** [Haar integral](https://ncatlab.org/nlab/show/Haar+integral). It says: “The left and the right Haar measure may or may not coincide, groups for which they coincide are called unimodular.”

**Sources:** none listed. No primary source with a working link was found.

### Amenability gives invariant measures through its fixed-point definition

**Remember:** An invariant measure is a fixed point for the action on probability measures.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 37A15. arXiv math.GR, math.DS. Level 3: graduate.

**Definition.** A locally compact group G is amenable, in the fixed-point sense, if every continuous affine action of G on a nonempty compact convex subset of a locally convex Hausdorff space has a common fixed point.

**Problem.** If an amenable group acts continuously on a nonempty compact metric space X, then X has an invariant Borel probability measure.

**How the definition helps.** The Borel probability measures on X form such a compact convex set in the weak-star topology, by Riesz representation and Banach–Alaoglu (our own). G acts on them continuously and affinely by pushforward, so the action has a fixed point, which is an invariant measure (our own).

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “Fixed-point property. Any action of the group by continuous affine transformations on a compact convex subset of a (separable) locally convex topological vector space has a fixed point.”

**Sources:**

- [M. M. Day, Fixed-point theorems for compact convex sets, Illinois J. Math. 5 (1961) 585–590](https://doi.org/10.1215/ijm/1255631582)

### Coset representatives transfer invariant means

**Remember:** Copy the function onto every coset, then let G average.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups). arXiv math.FA. Level 3: graduate.

**Definition.** A discrete group G is amenable if it has an invariant mean: a positive linear functional on bounded real functions that sends 1 to 1 and ignores left translation. A bounded function f on a subgroup H spreads to all of G by copying it onto each right coset Ht through one chosen representative t: E(f)(ht) = f(h).

**Problem.** Every subgroup of an amenable discrete group is amenable.

**How the definition helps.** The extension commutes with left shifts by H, keeps positivity and sends 1 to 1, so the mean of G applied to E(f) is an invariant mean on H (our own). Simply restricting an invariant finitely additive probability to H can fail, because H may get mass zero.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “Every (closed) subgroup of an amenable group is amenable.”

**Sources:**

- [Mahlon M. Day, Amenable semigroups (1957)](https://doi.org/10.1215/ijm/1255380675)

### Directed unions preserve amenability

**Remember:** Every finite translation test lives inside one subgroup.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups). arXiv math.FA. Level 3: graduate.

**Definition.** A discrete group satisfies the Følner condition if each finite set K and ε &gt; 0 admit a nonempty finite set F that barely moves under K. That is, \|gF △ F\| &lt; ε\|F\| for every g ∈ K. Each test uses only the finitely many elements of K.

**Problem.** A directed union of amenable discrete subgroups is amenable. Directed means any two subgroups in the family lie in a third.

**How the definition helps.** In a directed union, any finite K lies in one subgroup, and a Følner set of that subgroup passes the same test in the union (our own). Følner's theorem makes this condition equivalent to having an invariant mean.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “if a group can be written as a directed union of amenable subgroups, then it is amenable.”

**Sources:**

- [Erling Følner, On groups with full Banach mean value (1955)](https://doi.org/10.7146/math.scand.a-10442)

### Fixed points preserve amenable extensions

**Remember:** Fix the normal subgroup first, then let the quotient act.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups). arXiv math.FA. Level 3: graduate.

**Definition.** By Day's criterion, a locally compact group is amenable if each of its affine actions on a compact convex set has a common fixed point. The set is nonempty and lies in a locally convex Hausdorff space, and the action is separately continuous. The points fixed by a subgroup always form a compact convex set, so the test can be run again on that set (our own).

**Problem.** A locally compact group with a closed normal amenable subgroup and an amenable quotient is amenable.

**How the definition helps.** The normal subgroup N fixes a nonempty compact convex set, and normality makes the whole group map this set to itself (our own). N acts trivially there, so the quotient acts, and its fixed point is fixed by the whole group (our own). Day's theorem matches this criterion with the invariant-mean definition.

**Paper or page:** [Amenability of group actions on compact spaces and the associated Banach algebras](https://arxiv.org/abs/2504.08357). It says: “then K has a G–fixed point.”

**Sources:**

- [Mahlon M. Day, Fixed-point theorems for compact convex sets (1961)](https://doi.org/10.1215/ijm/1255631582)

### Følner overlaps give positive definite coefficients

**Remember:** How much a set overlaps its translate is positive definite.

*True by definition. Confidence: medium.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 43A35. arXiv math.FA. Level 3: graduate.

**Definition.** Given finite K in an amenable discrete group and ε &gt; 0, take a Følner set F, a nonempty finite set with \|gF △ F\| &lt; ε\|F\| for every g ∈ K. Its overlap function φ(g) = \|F ∩ gF\|/\|F\| is the inner product of the normalized indicators of F and gF.

**Problem.** For any finite subset of an amenable discrete group, normalized positive definite functions of finite support approximate one uniformly there. Normalized means φ(e) = 1, and positive definite means each finite matrix with entries φ(x⁻¹y) is positive semidefinite.

**How the definition helps.** Since φ(g) = 1 − \|gF △ F\|/(2\|F\|), φ is within ε/2 of one on K, and it vanishes off the finite set FF⁻¹ (our own). It is positive definite because φ(x⁻¹y) is the inner product of the normalized indicators of xF and yF. Følner's theorem links this set condition to the invariant-mean definition.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “For every finite (or compact) subset F of G there is a measurable subset U of G with finite positive Haar measure”

**Paper or page:** [Proper cocycles, measure equivalence and Lₚ-Fourier multipliers](https://arxiv.org/abs/2506.18320). It says: “there exists a sequence of unital positive definite functions (mₙ)ₙ≥₀ ⊂ A(G) such that mₙ → 1 uniformly on compact sets”

**Sources:**

- [Erling Følner, On groups with full Banach mean value (1955)](https://doi.org/10.7146/math.scand.a-10442)

### Invariant means make quotients of amenable groups amenable

**Remember:** Pull functions back from the quotient and reuse the mean.

*True by definition. Confidence: medium.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups). arXiv math.GR. Level 3: graduate.

**Definition.** A locally compact Hausdorff group is amenable if it has an invariant mean, a positive linear functional that sends 1 to 1 and ignores left translation. It acts on bounded right uniformly continuous real functions, those with f(gx) → f(x) uniformly in x as g → e, and this class contains every function pulled back from a quotient (our own).

**Problem.** Let G be amenable and N a closed normal subgroup. Then the quotient G/N is amenable.

**How the definition helps.** Pulling back from G/N keeps right uniform continuity and commutes with left translation, so the mean of G composed with pullback is an invariant mean on G/N (our own). With Følner sets instead, images of nearly invariant sets can have unequal fibre sizes, so this direct argument fails (our own).

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “Every quotient of an amenable group is amenable.”

**Sources:**

- [M. M. Day, Amenable semigroups, Illinois Journal of Mathematics 1 (1957)](https://doi.org/10.1215/ijm/1255380675)

### Mean averaging makes bounded actions unitary

**Remember:** Average the inner product over the group so every element preserves it.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 43A65. arXiv math.RT. Level 3: graduate.

**Definition.** For a uniformly bounded, strongly continuous representation π of an amenable locally compact group G, average the inner product along the group: \[u,v\] = M(g ↦ ⟨π(g)u,π(g)v⟩). Here M is a right-invariant mean, a positive linear functional on L∞(G) with M(1) = 1, so moving both vectors by π(h) only right-translates the averaged function.

**Problem.** Every uniformly bounded, strongly continuous Hilbert space representation of a locally compact amenable group is unitary for an equivalent inner product. Strong continuity means that each vector moves continuously.

**How the definition helps.** Right invariance of M makes every π(h) preserve the new inner product (our own). Uniform bounds on the operators π(g), and so on their inverses π(g⁻¹), give constants 0 &lt; c ≤ C with c‖u‖² ≤ \[u,u\] ≤ C‖u‖², so the new norm is equivalent.

**nLab:** [unitarization](https://ncatlab.org/nlab/show/unitarization). It says: “every bounded strong-operator-continuous representation of a locally compact amenable group on a Hilbert space ℋ is unitarizable.”

**Sources:** none listed. No primary source with a working link was found.

### The fixed-point definition makes locally compact abelian groups amenable

**Remember:** Commuting affine maps on a compact convex set share a fixed point.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 47H10. arXiv math.GR, math.FA. Level 3: graduate.

**Definition.** A locally compact Hausdorff group is amenable if every continuous affine action on a nonempty compact convex subset of a locally convex space has a common fixed point. For an abelian group the acting maps all commute with each other.

**Problem.** Every locally compact Hausdorff abelian group is amenable.

**How the definition helps.** The Markov–Kakutani theorem gives a common fixed point for any family of commuting continuous affine maps on a nonempty compact convex set. The work lies in that theorem and in the theorem equating the fixed-point and invariant-mean definitions.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “For locally compact abelian groups, this property is satisfied as a result of the Markov–Kakutani fixed-point theorem.”

**Sources:**

- [S. Kakutani, Two fixed-point theorems concerning bicompact convex sets, Proc. Imp. Acad. Tokyo 14 (1938)](https://doi.org/10.3792/pia/1195579652)

### The Følner definition makes the integers and slow-growing groups amenable

**Remember:** Long intervals change little under any fixed shift.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 20F69. arXiv math.GR. Level 3: graduate.

**Definition.** A discrete group satisfies the Følner condition if each finite set K and ε &gt; 0 admit a nonempty finite set S that barely changes under shifts from K. That is, \|gS △ S\| &lt; ε\|S\| for every g ∈ K.

**Problem.** The integers are amenable. So are finitely generated groups of subexponential growth, meaning their balls in a finite generating set grow more slowly than every exponential.

**How the definition helps.** In ℤ, shifting an interval by g changes at most 2\|g\| elements, so long intervals pass the test (our own). In a group of subexponential growth, for fixed k some radii r have \|Bᵣ₊ₖ\|/\|Bᵣ\| close to one, since a uniform gap would force exponential growth. A shift of length at most k changes at most 2(\|Bᵣ₊ₖ\| − \|Bᵣ\|) elements of the ball Bᵣ (our own).

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “The group of integers is amenable (a sequence of intervals of length tending to infinity is a Følner sequence).”

**Sources:** none listed. No primary source with a working link was found.

### Weak containment equates group completions

**Remember:** When λ bounds every representation, full and reduced norms coincide.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 22D25. arXiv math.FA. Level 3: graduate.

**Definition.** A unitary representation π of a locally compact group G is weakly contained in the left regular representation λ if ‖π(f)‖ ≤ ‖λ(f)‖ for all f ∈ L¹(G). Here π(f) = ∫ f(g)π(g) dg. The full C\*-norm of f is the supremum of ‖π(f)‖ over all π, and the reduced norm is ‖λ(f)‖.

**Problem.** For a locally compact amenable group, the full and reduced group C\*-algebras agree under the canonical map.

**How the definition helps.** Hulanicki's theorem says that for an amenable group every unitary representation is weakly contained in λ. So the full norm is at most the reduced norm, and the reverse holds because λ is one of the representations (our own). Equal norms give equal completions.

**Wikipedia:** [Group algebra of a locally compact group](https://en.wikipedia.org/wiki/Group_algebra_of_a_locally_compact_group). It says: “The reduced group C\*-algebra is isomorphic to the non-reduced group C\*-algebra defined above if and only if G is amenable.”

**Sources:**

- [Andrzej Hulanicki, Groups whose regular representation weakly contains all unitary representations (1964)](https://doi.org/10.4064/sm-24-1-27-59)
- [Andrzej Hulanicki, Means and Følner condition on locally compact groups (1966)](https://doi.org/10.4064/sm-27-2-87-104)

### Homomorphisms preserve measure convolution

**Remember:** Convolution is the image of a product measure under multiplication.

*True by definition. Confidence: medium.* MSC 43A10 (Measure algebras on groups, semigroups, etc.). arXiv math.FA. Level 3: graduate.

**Definition.** The convolution μ∗ν of finite positive regular Borel measures on a locally compact group is the image of the product measure μ×ν under the multiplication map (x,y) ↦ xy. Concretely, ∫ f d(μ∗ν) = ∫∫ f(xy) dμ(x) dν(y) for each continuous compactly supported f.

**Problem.** A continuous homomorphism of locally compact groups sends a convolution to the convolution of the image measures.

**How the definition helps.** Both sides are images of μ×ν, because applying the homomorphism φ after multiplying equals multiplying after applying φ to each factor (our own). Images of images compose, so φ sends μ∗ν to φ(μ)∗φ(ν).

**Paper or page:** [Homomorphisms of L¹ algebras and Fourier algebras](https://arxiv.org/abs/2302.09573v1). It says: “a homomorphism φ : L¹(F) → M(G) of the form f ↦ θ∗(f)”

**Sources:** none listed. No primary source with a working link was found.

### Nonzero finite translation spaces require compactness

**Remember:** Translates fade pointwise but keep their size, impossible in finite dimensions.

*Rules out counterexamples.* MSC 43A15 (L<sup>p-spaces</sup> and other function spaces on groups, semigroups, etc.), 43A60. arXiv math.FA. Level 3: graduate.

**Definition.** A continuous function f on a locally compact group vanishes at infinity if, for every ε &gt; 0, the set where \|f\| ≥ ε is compact. Its translates by elements that escape to infinity then tend to zero at each point while keeping their supremum norm (our own).

**Problem.** A locally compact group admits a nonzero finite-dimensional translation-invariant space of continuous functions vanishing at infinity exactly when it is compact.

**How the definition helps.** In a finite-dimensional space of functions, pointwise convergence forces norm convergence, so such translates cannot exist; hence a noncompact group has no such nonzero space (our own). On a compact group the constants form such a space. Without vanishing at infinity, the constants also work on ℝ.

**Paper or page:** [The ideal structure of measure algebras and asymptotic properties of group representations](https://arxiv.org/abs/2106.07526). It says: “contains a non-zero finite-dimensional linear subspace invariant under left translation if and only if G is compact.”

**Sources:**

- [Jared T. White, The ideal structure of measure algebras and asymptotic properties of group representations](https://arxiv.org/abs/2106.07526)

### Haar correction gives convolution adjoints

**Remember:** Invert the measure, not just the value of its density.

*Rules out counterexamples.* MSC 43A20 (L<sup>1-algebras</sup> on groups, semigroups, etc.), 43A05. arXiv math.FA. Level 3: graduate.

**Definition.** For left Haar measure μ and f ∈ L¹(G), let f\* be the density with respect to μ of the conjugate of the measure fμ reflected through inversion x ↦ x⁻¹. Reflection turns left Haar measure into right Haar measure, so f\*(x) = Δ(x⁻¹) times the conjugate of f(x⁻¹).

**Problem.** On a locally compact group, left convolution by the adjoint density gives the adjoint operator on square-integrable functions.

**How the definition helps.** Each left translation is unitary on square-integrable functions, with adjoint translation by the inverse element (our own). Convolution by f integrates translations against fμ, so its adjoint integrates against the reflected conjugate measure, which is convolution by f\*. On the positive affine group, conjugating f(x⁻¹) alone misses the factor Δ.

**nLab:** [Haar integral](https://ncatlab.org/nlab/show/Haar+integral). It says: “The left and the right Haar measure may or may not coincide, groups for which they coincide are called unimodular.”

**Wikipedia:** [Group algebra of a locally compact group](https://en.wikipedia.org/wiki/Group_algebra_of_a_locally_compact_group). It says: “where Δ is the modular function on G. With this involution, it is a \*-algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Integrable convolution identities require discreteness

**Remember:** An identity needs a point mass, not just a density.

*Rules out counterexamples.* MSC 43A20 (L<sup>1-algebras</sup> on groups, semigroups, etc.), 43A10. arXiv math.FA. Level 3: graduate.

**Definition.** The group algebra L¹(G) of a locally compact group consists of the integrable functions, as densities against left Haar measure, with convolution (f∗g)(x) = ∫ f(y)g(y⁻¹x) dy. A convolution identity must act like the point mass at the identity element, which has a density only when that point has positive Haar measure (our own).

**Problem.** The group algebra of a locally compact group has an identity exactly when the group is discrete.

**How the definition helps.** On a discrete group, the indicator of the identity divided by its measure is the identity (our own). Conversely, an identity e equals the L¹ limit of e∗u = u over normalized indicators u of shrinking identity neighbourhoods (our own). These u tend weakly to the point mass, so eμ is that point mass, which is impossible when single points have Haar measure zero (our own).

**Wikipedia:** [Group algebra of a locally compact group](https://en.wikipedia.org/wiki/Group_algebra_of_a_locally_compact_group). It says: “A group algebra has an identity, as opposed to just an approximate identity, if and only if the topology on the group is the discrete topology.”

**Sources:** none listed. No primary source with a working link was found.

### Characters turn convolution into products

**Remember:** The group law splits a character into two factors.

*True by definition.* MSC 43A25 (Fourier and Fourier-Stieltjes transforms on locally compact and other abelian groups), 43A20. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** On a locally compact abelian group, a character χ is a continuous homomorphism to the unit circle, so χ(x+y) = χ(x)χ(y). The Fourier transform at χ integrates f against the conjugate of χ using Haar measure.

**Problem.** On a locally compact abelian group, the Fourier transform of a convolution of integrable functions equals the product of their transforms.

**How the definition helps.** The conjugate of χ(x) splits as the conjugate of χ(y) times the conjugate of χ(x−y), so the transform of f∗g splits into the two transforms (our own). Fubini's theorem and translation invariance of Haar measure justify the change of variables.

**nLab:** [Fourier transform](https://ncatlab.org/nlab/show/Fourier+transform). It says: “the transform of the convolution of two functions is the product of the transforms of each of the functions separately.”

**Sources:** none listed. No primary source with a working link was found.

### The Gelfand transform makes Fourier transforms vanish at infinity

**Remember:** Fourier is Gelfand, so it inherits vanishing at infinity.

*True by definition.* MSC 43A25 (Fourier and Fourier-Stieltjes transforms on locally compact and other abelian groups), 46J05. arXiv math.FA. Level 3: graduate.

**Definition.** The Gelfand transform of an element a of a commutative Banach algebra is the function φ ↦ φ(a) on its spectrum, the nonzero multiplicative linear functionals with pointwise convergence. For the convolution algebra of integrable functions these functionals are exactly f ↦ f̂(χ), integration against the conjugate of a character χ, so the Fourier transform is a Gelfand transform.

**Problem.** Let G be a locally compact Hausdorff abelian group and f an integrable function on G. Then the Fourier transform of f is continuous on the character group, vanishes at infinity, and has modulus at most ‖f‖₁.

**How the definition helps.** Gelfand theory shows that every Gelfand transform is continuous, vanishes at infinity on the spectrum and is bounded by the norm (our own). The work lies in identifying the spectrum with the character group, including its topology of uniform convergence on compact sets (our own).

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality). It says: “This means the Fourier transform is a special case of the Gelfand transform.”

**Sources:** none listed. No primary source with a working link was found.

### Compact fibers preserve Fourier coefficients

**Remember:** Finite fiber volume keeps lifted vectors square-integrable.

*Rules out counterexamples.* MSC 43A30 (Fourier and Fourier-Stieltjes transforms on nonabelian groups and on semigroups, etc.), 43A22. arXiv math.FA. Level 3: graduate.

**Definition.** The Fourier algebra of a locally compact group G consists of the coefficients g ↦ ⟨L(g)u,v⟩, where L(g) translates square-integrable functions on the left. For a compact normal subgroup H, a square-integrable function on G/H lifts to a square-integrable function on G, because each fiber has finite measure (our own).

**Problem.** Pulling back a Fourier algebra function from a quotient by a compact normal subgroup gives a Fourier algebra function on the larger group.

**How the definition helps.** Normalize the Haar measure on H to mass one (our own). Weil's integration formula then shows that lifting preserves inner products and commutes with translation, so the lift of a coefficient is the coefficient of the lifted vectors. Without compactness, the constant one on ℝ/ℤ lifts to the constant one on ℝ, which is not in the Fourier algebra, since its functions vanish at infinity.

**Paper or page:** [Idempotents of large norm and homomorphisms of Fourier algebras](https://arxiv.org/abs/2109.12318). It says: “if H is compact, then j₍π₎(A(G/H)) ⊆ A(G).”

**Sources:**

- [Pierre Eymard, L’algèbre de Fourier d’un groupe localement compact (1964)](https://doi.org/10.24033/bsmf.1607)

### Compactness gives Fourier algebra identities

**Remember:** Coefficients fade at infinity, so one belongs only on compact groups.

*Rules out counterexamples.* MSC 43A30 (Fourier and Fourier-Stieltjes transforms on nonabelian groups and on semigroups, etc.). arXiv math.FA. Level 3: graduate.

**Definition.** The Fourier algebra of a locally compact group consists of the coefficients g ↦ ⟨λ(g)u,v⟩ of square-integrable u and v, where λ(g) is left translation, with pointwise multiplication. Every coefficient vanishes at infinity, while on a compact group the constant vector gives the constant coefficient one.

**Problem.** The Fourier algebra of a locally compact group has a multiplicative identity exactly when the group is compact.

**How the definition helps.** Any identity must equal one everywhere, because at each g the coefficient with v = λ(g)u, for a unit vector u, equals one there (our own). On a compact group with Haar probability, the constant vector 1 gives ⟨λ(g)1,1⟩ = 1. Approximating u and v by compactly supported functions shows that coefficients vanish at infinity, so one is absent on a noncompact group.

**Wikipedia:** [Fourier algebra](https://en.wikipedia.org/wiki/Fourier_algebra). It says: “We define the Fourier algebra A(G) to be the closed subalgebra spanned by the matrix coefficients of the left regular representation of G on L²(G).”

**Sources:**

- [Pierre Eymard, L’algèbre de Fourier d’un groupe localement compact (1964)](https://doi.org/10.24033/bsmf.1607)

### Tensor products multiply Fourier–Stieltjes coefficients

**Remember:** Tensor both actions and both pairs of vectors to multiply coefficients.

*True by definition.* MSC 43A30 (Fourier and Fourier-Stieltjes transforms on nonabelian groups and on semigroups, etc.), 43A65. arXiv math.FA. Level 3: graduate.

**Definition.** The Fourier–Stieltjes algebra of a locally compact group consists of all coefficients g ↦ ⟨π(g)u,v⟩, where π is a strongly continuous unitary representation and u, v are vectors in its Hilbert space. Tensoring multiplies coefficients: ⟨(π⊗ρ)(g)(u⊗u′), v⊗v′⟩ = ⟨π(g)u,v⟩⟨ρ(g)u′,v′⟩.

**Problem.** The pointwise product of two Fourier–Stieltjes functions belongs to the Fourier–Stieltjes algebra of the same locally compact group.

**How the definition helps.** The product of two coefficients is one coefficient of the tensor product representation, because inner products of simple tensors multiply. The only check is that π⊗ρ is again strongly continuous and unitary (our own).

**Wikipedia:** [Fourier algebra](https://en.wikipedia.org/wiki/Fourier_algebra). It says: “B(G) forms an algebra with pointwise addition and multiplication, as for any unitary representations π and ρ of G,”

**Sources:**

- [P. Eymard, L’algèbre de Fourier d’un groupe localement compact (1964)](https://doi.org/10.24033/bsmf.1607)

### Cyclic vectors give unique realizations

**Remember:** Keep only the vectors whose inner products the function actually records.

*Rules out counterexamples.* MSC 43A35 (Positive definite functions on groups, semigroups, etc.), 43A65. arXiv math.RT. Level 3: graduate.

**Definition.** A realization of a continuous positive definite function φ, one whose matrices \[φ(xᵢ⁻¹xⱼ)\] are positive semidefinite, writes φ(g) = ⟨π(g)v,v⟩ for a continuous unitary representation π. It is cyclic when the translates π(g)v span a dense subspace, so φ fixes every inner product ⟨π(g)v,π(h)v⟩ = φ(h⁻¹g) on that span.

**Problem.** Every continuous positive definite function on a locally compact group has a cyclic realization. Any two such realizations admit a unique unitary map matching their chosen vectors and commuting with the group actions.

**How the definition helps.** Since φ fixes all inner products on the dense span, matching π(g)v with π′(g)v′ extends to a unique unitary intertwiner (our own). The Gelfand–Naimark–Segal construction gives existence by completing finitely supported functions under the inner product from φ, after removing vectors of length zero. Without cyclicity, adding any orthogonal representation leaves φ unchanged.

**Wikipedia:** [Positive-definite function on a group](https://en.wikipedia.org/wiki/Positive-definite_function_on_a_group). It says: “The unitary representation is unique, up to Hilbert space isomorphism, provided the following minimality condition holds:”

**Sources:** none listed. No primary source with a working link was found.

### Open subgroups preserve zero extensions

**Remember:** Cosets give positive blocks, and openness keeps the zero extension continuous.

*Rules out counterexamples.* MSC 43A35 (Positive definite functions on groups, semigroups, etc.). arXiv math.FA. Level 3: graduate.

**Definition.** A function f on a group is positive definite if every matrix \[f(xᵢ⁻¹xⱼ)\] on a finite list of elements is positive semidefinite. When f on an open subgroup H is extended by zero, entries between different left cosets of H vanish, and openness keeps the extension continuous (our own).

**Problem.** A continuous positive definite function on an open subgroup extends by zero to a continuous positive definite function on the group.

**How the definition helps.** Group any finite list by left coset of H, so the matrix becomes block diagonal with blocks that are matrices of f on H (our own). H and its complement are both open, so the zero extension is continuous (our own). Without openness, extending the constant one from {0} to ℝ gives a discontinuous function (our own).

**Paper or page:** [On extremal problems of Delsarte type for positive definite functions on LCA groups](https://arxiv.org/abs/2412.00482). It says: “Let H be an open subgroup of a LCA group G”

**Sources:**

- [On extremal problems of Delsarte type for positive definite functions on LCA groups](https://arxiv.org/abs/2412.00482)

### Positive definite functions peak at identity

**Remember:** A vector cannot meet its own translate with a larger inner product.

*True by definition.* MSC 43A35 (Positive definite functions on groups, semigroups, etc.), 43A65. arXiv math.FA. Level 3: graduate.

**Definition.** Write a continuous positive definite function as a coefficient φ(g) = ⟨π(g)v,v⟩ of a continuous unitary representation π on a Hilbert space. Then φ(e) = ‖v‖², and every translate π(g)v has the same length as v.

**Problem.** A continuous positive definite function takes its largest absolute value at the identity.

**How the definition helps.** By Cauchy–Schwarz, \|φ(g)\| ≤ ‖π(g)v‖‖v‖ = ‖v‖² = φ(e) (our own). The Gelfand–Naimark–Segal construction gives this coefficient formula for every continuous function whose matrices \[φ(xᵢ⁻¹xⱼ)\] are positive semidefinite.

**Paper or page:** [Spherical Fourier multipliers related to Gelfand pairs](https://arxiv.org/abs/2407.09225). It says: “∀ x ∈ G, \|φ(x)\| ≤ φ(e).”

**Sources:** none listed. No primary source with a working link was found.

### Evaluation makes biduality natural

**Remember:** Precompose then evaluate, or map then evaluate: the same number.

*True by definition.* MSC 43A40 (Character groups and dual objects). arXiv math.FA. Level 3: graduate.

**Definition.** For a locally compact abelian group, the dual consists of continuous homomorphisms to the circle, and a homomorphism u: G → H dualizes by precomposition, χ ↦ χ∘u. Evaluation sends x ∈ G to the character χ ↦ χ(x) of the dual.

**Problem.** The evaluation isomorphisms from locally compact abelian groups to their double duals commute with every continuous group homomorphism.

**How the definition helps.** For x ∈ G and a character χ of H, both routes give χ(u(x)) (our own). Pontryagin duality is needed only to know that evaluation is an isomorphism of topological groups (our own). An unspecified isomorphism with the double dual would need a separate compatibility proof (our own).

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality). It says: “each group element x is identified to the evaluation character on the dual.”

**Sources:**

- [Lev Pontryagin, The Theory of Topological Commutative Groups (1934)](https://doi.org/10.2307/1968438)

### Inverse limits make profinite group characters have finite order

**Remember:** A small circle arc cannot contain a nontrivial subgroup.

*True by definition. Confidence: medium.* MSC 43A40 (Character groups and dual objects), 20E18. arXiv math.GR. Level 3: graduate.

**Definition.** A profinite group is an inverse limit of finite discrete groups, so the open normal subgroups, the kernels of the maps to the finite quotients, form a neighbourhood basis of the identity. A character is a continuous homomorphism to the circle ℝ/ℤ.

**Problem.** Every character of a profinite group factors through a finite quotient and has finite order under pointwise addition. Thus the character group of an abelian profinite group is a torsion group, meaning every element has finite order.

**How the definition helps.** By continuity some open normal subgroup N maps into the arc (−¼,¼), and that arc contains no nontrivial subgroup, so the character kills N. It therefore factors through the finite group G/N, whose order annihilates it.

**nLab:** [Pontryagin duality for torsion abelian groups](https://ncatlab.org/nlab/show/Pontryagin+duality+for+torsion+abelian+groups). It says: “Notice that for G a profinite group then hom(G,ℝ/ℤ) ≃ hom(G,ℚ/ℤ)”

**Sources:** none listed. No primary source with a working link was found.

### The compact-open topology makes duals of compact abelian groups discrete

**Remember:** Uniform closeness to the constant character forces equality on a compact group.

*True by definition.* MSC 43A40 (Character groups and dual objects), 22B05. arXiv math.FA, math.GR. Level 3: graduate.

**Definition.** The dual of a topological abelian group G consists of the continuous homomorphisms to the unit circle 𝕋. Two characters are close when they differ by less than ε at every point of a chosen compact set K, and for compact G one may take K = G.

**Problem.** The dual of a compact Hausdorff abelian group is discrete.

**How the definition helps.** Characters within distance 1 of the constant character 1 on all of G have images in an arc that contains no nontrivial subgroup, so they equal 1 (our own). Thus 1 is isolated, and translation isolates every character.

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality). It says: “That G being compact implies Ĝ is discrete or that G being discrete implies that Ĝ is compact is an elementary consequence of the definition of the compact-open topology on Ĝ and does not need Pontryagin duality.”

**Sources:**

- [L. Pontrjagin, The theory of topological commutative groups, Annals of Mathematics 35 (1934)](https://doi.org/10.2307/1968438)

### The compact-open topology makes duals of discrete abelian groups compact

**Remember:** Characters of a discrete group form a closed subset of a compact product.

*True by definition.* MSC 43A40 (Character groups and dual objects), 22B05, 54D30. arXiv math.FA, math.GR. Level 3: graduate.

**Definition.** A character of a discrete abelian group G is a homomorphism to the circle 𝕋. The compact-open topology on the dual is then pointwise convergence, so the dual sits in the product 𝕋ᴳ as the set cut out by the equations χ(x+y) = χ(x)χ(y).

**Problem.** Every discrete abelian group has a compact dual.

**How the definition helps.** Each equation is closed because evaluation and circle multiplication are continuous, so the dual is a closed subset of 𝕋ᴳ (our own). Tychonoff's theorem makes 𝕋ᴳ compact, so the dual is compact.

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality). It says: “That G being compact implies Ĝ is discrete or that G being discrete implies that Ĝ is compact is an elementary consequence of the definition of the compact-open topology on Ĝ and does not need Pontryagin duality.”

**Sources:**

- [L. Pontrjagin, The theory of topological commutative groups, Annals of Mathematics 35 (1934)](https://doi.org/10.2307/1968438)

### Hilbert coefficients have weakly compact orbits

**Remember:** Translate the coefficient by moving a vector inside a weakly compact ball.

*True by definition.* MSC 43A60 (Almost periodic functions on groups and semigroups and their generalizations (recurrent functions, distal functions, etc.); almost automorphic functions), 43A30. arXiv math.FA. Level 3: graduate.

**Definition.** A bounded continuous function on a group is weakly almost periodic if its translates lie in a weakly compact set, tested against every bounded linear functional on bounded continuous functions. Translating a Fourier–Stieltjes coefficient g ↦ ⟨π(g)u,v⟩ of a continuous unitary representation only moves u or v inside a fixed Hilbert ball.

**Problem.** Every Fourier–Stieltjes function is weakly almost periodic.

**How the definition helps.** A closed Hilbert ball is weakly compact, and the coefficient map is bounded and linear, so it carries the ball onto a weakly compact set (our own). That set contains the orbit, so the orbit's weak closure is compact.

**Wikipedia:** [Almost periodic function](https://en.wikipedia.org/wiki/Almost_periodic_function). It says: “A function on a locally compact group is called weakly almost periodic if its orbit is weakly relatively compact in L∞.”

**Paper or page:** [Power boundedness in Fourier and Fourier-Stieltjes algebra of an ultraspherical hypergroup](https://arxiv.org/abs/2309.11074). It says: “Let H be a locally compact hypergroup with a Haar measure. Then B(H) ⊂ wap(H).”

**Sources:**

- [Pierre Eymard, L’algèbre de Fourier d’un groupe localement compact (1964)](https://doi.org/10.24033/bsmf.1607)

### Matching modular functions permits quotient volume

**Remember:** Fiber rescaling must match ambient rescaling to leave quotient volume unchanged.

*Rules out counterexamples.* MSC 43A85 (Harmonic analysis on homogeneous spaces), 43A05. arXiv math.FA. Level 3: graduate.

**Definition.** The modular function Δ<sub>G</sub> of a locally compact group measures how right translation rescales left Haar measure: μ(Eh) = Δ<sub>G</sub>(h)μ(E) for Borel sets E. For a closed subgroup H, the condition asks each h ∈ H to rescale by the same factor in G and in H: Δ<sub>G</sub>(h) = Δ<sub>H</sub>(h).

**Problem.** The space of left cosets G/H has a nonzero left-invariant Radon measure exactly when the modular functions agree on H. A Radon measure is locally finite and regular.

**How the definition helps.** The quotient integration theorem shows that fiber rescaling matching ambient rescaling is necessary and sufficient for an invariant quotient volume. For the positive affine group modulo dilations, G/H is ℝ acted on by translations and dilations (our own). Translation invariance forces a multiple of Lebesgue measure, which dilations rescale (our own).

**Wikipedia:** [Haar measure](https://en.wikipedia.org/wiki/Haar_measure). It says: “an invariant measure on G/H exists if and only if the modular function Δ of G restricted to H is the modular function δ of H.”

**Sources:** none listed. No primary source with a working link was found.

### Conjugate symbols give spherical adjoints

**Remember:** Conjugate the symbol to take the adjoint.

*True by definition.* MSC 43A90 (Harmonic analysis and spherical functions), 43A22. arXiv math.FA. Level 3: graduate.

**Definition.** For a Gelfand pair (G,K), a spherical multiplier with bounded measurable symbol m acts on square-integrable functions unchanged by left and right translation by K. It is Tₘf = F⁻¹(mFf), where F is the spherical Fourier transform, so Tₘ is multiplication by m in frequency variables.

**Problem.** On square-integrable functions with this invariance, the adjoint of a spherical multiplier has the conjugate symbol.

**How the definition helps.** Multiplication by m has adjoint multiplication by its conjugate. The spherical Plancherel theorem makes F unitary, so conjugating by F preserves adjoints (our own).

**Paper or page:** [Spherical Fourier multipliers related to Gelfand pairs](https://arxiv.org/abs/2407.09225), [Spherical Fourier multipliers related to Gelfand pairs](https://arxiv.org/abs/2407.09225). It says: “defined by Tₘ\* f = Tₘ̄f, where m̄ is the complex conjugate of m.”

**Sources:**

- [Yaogan Mensah, Marie Françoise Ouedraogo, Spherical Fourier multipliers related to Gelfand pairs](https://arxiv.org/abs/2407.09225)

### Coset symmetry makes convolution commute

**Remember:** A symmetry that reverses every product but changes no factor forces commutativity.

*True by definition.* MSC 43A90 (Harmonic analysis and spherical functions), 43A85. arXiv math.RT. Level 3: graduate.

**Definition.** For a compact subgroup K of a locally compact group G, (G,K) is a Gelfand pair when convolution commutes on finite regular measures unchanged by left and right translation by K. Each such measure averages the uniform probabilities on double cosets KxK = {kxh : k, h ∈ K}.

**Problem.** Suppose a continuous map reverses products, squares to the identity and preserves each double coset as a set. Then (G,K) is a Gelfand pair.

**How the definition helps.** An anti-automorphism σ that preserves each double coset fixes each uniform probability on KxK, hence every K-biinvariant measure (our own). Since σ reverses convolution, σ(μ∗ν) = ν∗μ, while σ(μ∗ν) = μ∗ν because μ∗ν is biinvariant. Hence μ∗ν = ν∗μ.

**Wikipedia:** [Gelfand pair](https://en.wikipedia.org/wiki/Gelfand_pair). It says: “there exists an involutive anti-automorphism σ of G such that any (K, K) double coset is σ-invariant.”

**Paper or page:** [Weighted Gelfand pairs, weighted spherical Fourier transform and multipliers](https://arxiv.org/abs/2406.03613). It says: “then (G,K, ω) is a weighted Gelfand pair.”

**Sources:**

- [Assèkè Y. Tissinam, Abudulaï Issa, Yaogan Mensah, Weighted Gelfand pairs, weighted spherical Fourier transform and multipliers](https://arxiv.org/abs/2406.03613)

### One fixed line factors spherical averages

**Remember:** Averaging onto one line splits the inner product into two factors.

*True by definition.* MSC 43A90 (Harmonic analysis and spherical functions), 43A65. arXiv math.FA. Level 3: graduate.

**Definition.** Let a locally compact group act continuously on a Hilbert space by unitary operators, and suppose the vectors fixed by a compact subgroup K form a line spanned by a unit vector v. Averaging the action over K is then orthogonal projection onto that line, and φ(x) = ⟨xv,v⟩.

**Problem.** The average of φ(xky) over k in K equals φ(x)φ(y), using translation-invariant measure of total mass one.

**How the definition helps.** Write φ(xky) = ⟨kyv, x⁻¹v⟩ and average over k to get ⟨⟨yv,v⟩v, x⁻¹v⟩ = φ(y)φ(x) (our own). Here the average of the operators, with Haar probability, is the orthogonal projection onto the K-fixed vectors (our own). This avoids the eigenfunction equations that characterize spherical functions.

**Paper or page:** [Spherical Fourier multipliers related to Gelfand pairs](https://arxiv.org/abs/2407.09225v3). It says: “\\int<sub>K</sub> \\varphi(xky)dk=\\varphi(x)\\varphi(y).”

**Sources:** none listed. No primary source with a working link was found.

### Leptin densities give a geometric proof of the model set density formula

**Remember:** A null window boundary makes the interior and closure give the same density.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 52C23. arXiv math.GR, math.DS. Level 4: research.

**Definition.** In a cut-and-project scheme, a uniform lattice L in G×H projects injectively to G and densely to H. The model set keeps the G-coordinates of lattice points whose H-coordinate lies in a relatively compact window W. W is regular when its boundary has Haar measure zero, so its interior and closure have the same measure.

**Problem.** Let G be amenable and W regular in this scheme. The model set has density equal to the Haar measure of W divided by the covolume of L.

**How the definition helps.** The paper's Leptin density estimates bound the lower and upper densities between the measures of the interior and closure of W, divided by the covolume of L. Regularity makes these bounds equal (our own).

**Paper or page:** [Leptin densities in amenable groups](https://arxiv.org/abs/2107.04760v2), [Leptin densities in amenable groups](https://arxiv.org/abs/2107.04760v2). It says: “We use Leptin densities for a geometric proof of the model set density formula, which expresses the density of a uniform regular model set in terms of the volume of its window”

**Sources:**

- [Felix Pogorzelski, Christoph Richard, Nicolae Strungaru, Leptin densities in amenable groups, arXiv:2107.04760v2 (2021)](https://arxiv.org/abs/2107.04760v2)

### Finite Brascamp–Lieb bounds require properness

**Remember:** Keep joint preimages compact before trying to bound the product integral.

*Rules out counterexamples.* MSC 43A15 (L<sup>p-spaces</sup> and other function spaces on groups, semigroups, etc.), 43A25. arXiv math.FA. Level 4: research.

**Definition.** A Brascamp–Lieb inequality bounds the integral over G of a product ∏ fⱼ(σⱼ(x)) by a constant times the product of the Lᵖʲ norms of the fⱼ. Each σⱼ is a homomorphism of locally compact abelian groups, and the joint map σ = (σ₁,…,σₘ) must be proper, so that compact sets pull back to compact sets.

**Problem.** A finite Brascamp–Lieb constant requires the joint map to be proper. For instance, the map from ℝ to the circle given by t ↦ exp(it) fails even the one-factor inequality with exponent one.

**How the definition helps.** Without properness, indicators of compact sets have finite norms but can make the left side infinite (our own argument). A noncompact preimage of a compact set holds infinitely many points with disjoint translates of a fixed small neighbourhood, and thickened compact sets in each coordinate cover their images. For t ↦ exp(it) from ℝ to the circle, the constant one already does this.

**Paper or page:** [Brascamp--Lieb inequalities on locally compact abelian groups](https://arxiv.org/abs/2412.11514), [Brascamp--Lieb inequalities on locally compact abelian groups](https://arxiv.org/abs/2412.11514), [Brascamp--Lieb inequalities on locally compact abelian groups](https://arxiv.org/abs/2412.11514). It says: “and assume that $\\boldsymbol {\\sigma }: G \\to \\boldsymbol {G}$ is not proper. Then $\\operatorname {\\mathbf{BL}}(G, \\boldsymbol {\\sigma }, \\boldsymbol {p})$ and $\\operatorname {\\widehat{\\mathbf{BL}}}(G, \\boldsymbol {\\sigma }, \\boldsymbol {p’})$ are infinite.”

**Sources:**

- [Jonathan Bennett, Michael G. Cowling, Brascamp--Lieb inequalities on locally compact abelian groups](https://arxiv.org/abs/2412.11514)

### Open subgroup coefficients extend isometrically

**Remember:** Extend the vectors by zero and their coefficient extends by zero too.

*True by definition.* MSC 43A30 (Fourier and Fourier-Stieltjes transforms on nonabelian groups and on semigroups, etc.). arXiv math.FA. Level 4: research.

**Definition.** The Fourier algebra of a locally compact group consists of the coefficients g ↦ ⟨λ(g)u,v⟩ of square-integrable u and v, where λ(g) is left translation. Its norm is the infimum of ‖u‖₂‖v‖₂ over all pairs giving the function, and zero extension from an open subgroup keeps these L² norms (our own).

**Problem.** For an open subgroup, zero extension preserves the Fourier algebra norm.

**How the definition helps.** Extending u and v by zero gives the zero-extended coefficient, since outside the subgroup the translate of u is disjoint from v, so the norm does not grow (our own). The restriction bound in the quoted lemma gives the opposite inequality (our own). Eymard identifies this norm with the dual norm from operators generated by translations (our own).

**Paper or page:** [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349). It says: “If H is open, then Aⁿ(H) is completely isometrically isomorphic to (Aⁿ(G))°”

**Sources:**

- [Pierre Eymard, L’algèbre de Fourier d’un groupe localement compact (1964)](https://doi.org/10.24033/bsmf.1607)

### Boundary coherence preserves support constraints

**Remember:** Boundary points cannot carry positive values if outside points approach them.

*Rules out counterexamples.* MSC 43A35 (Positive definite functions on groups, semigroups, etc.). arXiv math.CA. Level 4: research.

**Definition.** A set is boundary coherent if points outside its closure come arbitrarily near each of its boundary points. A continuous function that is positive at a boundary point is then positive at some point outside the closure.

**Problem.** Let Ω₊ and Ω₋ be boundary-coherent symmetric subsets of a locally compact abelian group, with Ω₊ a neighbourhood of zero. A continuous real f has {f&gt;0} ⊆ Ω₊ and {f&lt;0} ⊆ Ω₋ exactly when both inclusions hold with Ω₊ and Ω₋ replaced by their closures.

**How the definition helps.** If {f&gt;0} lies in the closure of Ω₊, any point of {f&gt;0} outside Ω₊ is a boundary point, which would give a positive value outside the closure (our own). The same argument for −f handles the other sign (our own). Removing ±1 from ℝ leaves its closure unchanged, so a positive Gaussian passes only the closure test (our own).

**Paper or page:** [On extremal problems of Delsarte type for positive definite functions on LCA groups](https://arxiv.org/abs/2412.00482). It says: “Let G be a LCA group and Ω₊, Ω₋ be boundary-coherent symmetric subsets of G with Ω₊ a neighbourhood of 0.”

**Sources:**

- [On extremal problems of Delsarte type for positive definite functions on LCA groups](https://arxiv.org/abs/2412.00482)

### Nonnegative series yield positive spherical kernels

**Remember:** Each power of an inner product is another inner product.

*True by definition.* MSC 43A35 (Positive definite functions on groups, semigroups, etc.), 43A90. arXiv math.CA. Level 4: research.

**Definition.** A continuous F on \[−1,1\] is positive definite on a real unit sphere if every matrix \[F(⟨xᵢ,xⱼ⟩)\] for finitely many points xᵢ on it is positive semidefinite. Each power ⟨x,y⟩ⁿ is itself an inner product, of the tensor powers x⊗ⁿ and y⊗ⁿ (our own).

**Problem.** A summable nonnegative power series in the inner product is positive definite on every real unit sphere.

**How the definition helps.** Each matrix \[⟨xᵢ,xⱼ⟩ⁿ\] is the Gram matrix of the tensor powers, hence positive semidefinite (our own). Nonnegative combinations and uniform limits keep this property, and a finite coefficient sum makes the series converge uniformly on \[−1,1\] (our own). Schoenberg proved the converse: positive definiteness on spheres of every dimension forces such a series.

**Paper or page:** [Positive definite singular kernels on two-point homogeneous spaces](https://arxiv.org/abs/2410.22104). It says: “A function f:\[−1,1\] → ℝ is positive definite on all spheres”

**Sources:**

- [Isaac J. Schoenberg, Positive definite functions on spheres (1942)](https://doi.org/10.1215/s0012-7094-42-00908-6)

### Strict aperiodicity removes rotating phases

**Remember:** Powers decay wherever the modulus is less than one.

*Rules out counterexamples.* MSC 43A35 (Positive definite functions on groups, semigroups, etc.), 43A22. arXiv math.FA. Level 4: research.

**Definition.** A normalized positive definite function φ on a discrete group has φ(e) = 1 and positive semidefinite matrices \[φ(xᵢ⁻¹xⱼ)\], so \|φ\| ≤ 1. It is strictly aperiodic if \|φ(g)\| &lt; 1 for every g ≠ e, so the powers φ(g)ⁿ tend to zero away from the identity.

**Problem.** On a discrete group, multiplication by successive powers of a strictly aperiodic function converges on each Fourier algebra vector in its norm. The limit multiplies by the indicator of the identity.

**How the definition helps.** On finitely supported functions, multiplication by φⁿ therefore converges to multiplication by the indicator of e (our own). Normalized positive definite functions multiply the Fourier algebra with norm at most one, and finitely supported functions are dense, so convergence extends to the whole algebra. The sign character on the two-element group has powers that alternate at the nonidentity element.

**Paper or page:** [Positive definite functions as uniformly ergodic multipliers of the Fourier algebra](https://arxiv.org/abs/2411.12122), [Positive definite functions as uniformly ergodic multipliers of the Fourier algebra](https://arxiv.org/abs/2411.12122). It says: “then φ is strictly aperiodic if, and only if, it is completely mixing.”

**Sources:** none listed. No primary source with a working link was found.

### Closed frequency sets survive weak-star limits

**Remember:** Frequency restrictions survive limits when they are written as vanishing tests.

*True by definition.* MSC 43A45 (Spectral synthesis on groups, semigroups, etc.), 43A25. arXiv math.FA. Level 4: research.

**Definition.** A bounded measurable ψ on a locally compact abelian group has spectrum in a closed set A if every suitable kernel kills it. Suitable means integrable, with Fourier transform of compact support disjoint from A, and killing means ψ∗k = 0. Each such test consists of integrals of ψ against integrable functions.

**Problem.** If every function in a net has spectrum inside the same closed set, so does its weak-star limit. This limit is taken by testing integrals against integrable functions.

**How the definition helps.** Each value ψ∗k(x) integrates ψ against an integrable function, so a weak-star limit of functions passing the test also passes it (our own). The equivalence with the frequency-by-frequency definition of the spectrum uses local Fourier cutoffs.

**Paper or page:** [On almost convergence on locally compact abelian groups](https://arxiv.org/abs/2301.01672). It says: “If w\*-limₐ ψₐ = ψ, namely, {ψₐ} converge to ψ in the weak\* sense, then we have sp(ψ) ⊆ A.”

**Sources:**

- [Ryoichi Kunisada, On almost convergence on locally compact abelian groups](https://arxiv.org/abs/2301.01672)

### Consecutive differences transfer spectral synthesis

**Remember:** Consecutive differences record exactly what a common right shift leaves unchanged.

*Makes the theorem clean to state or prove.* MSC 43A45 (Spectral synthesis on groups, semigroups, etc.), 43A30. arXiv math.FA. Level 4: research.

**Definition.** For a closed set E ⊆ Gⁿ in a compact group, its lift E\* ⊆ Gⁿ⁺¹ is the preimage of E under the consecutive difference map (x₁,…,xₙ₊₁) ↦ (x₁x₂⁻¹,…,xₙxₙ₊₁⁻¹). This map forgets exactly a common right translation of all coordinates.

**Problem.** Spectral synthesis means that algebra functions vanishing on the set are norm limits of algebra functions vanishing on neighbourhoods of it. E admits spectral synthesis for Aⁿ(G) exactly when its lift E\* does for Aⁿ⁺¹(G).

**How the definition helps.** The paper shows that composing with the difference map preserves norms and identifies Aⁿ(G) with the functions in Aⁿ⁺¹(G) unchanged by common right translation. Vanishing on E, or near E, becomes vanishing on E\*, or near E\* (our own). Its transfer theorem handles the approximation.

**Paper or page:** [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349), [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349), [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349). It says: “The set E is a set of spectral synthesis for Aⁿ(G) if and only if E\* is a set of spectral synthesis for Aⁿ⁺¹(G).”

**Sources:**

- [Kanupriya, N. Shravan Kumar, Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349)

### Discreteness guarantees abelian spectral synthesis

**Remember:** Finite cutoffs leave all required zeros untouched.

*Rules out counterexamples.* MSC 43A45 (Spectral synthesis on groups, semigroups, etc.). arXiv math.FA. Level 4: research.

**Definition.** For a locally compact abelian group G, A(G) is the algebra of Fourier transforms of integrable functions on the dual group, with their L¹ norm. A closed set E admits spectral synthesis if every function in A(G) vanishing on E is a norm limit of functions in A(G) with compact support disjoint from E. On a discrete group, compact support means finite support.

**Problem.** Every subset of a discrete abelian group has spectral synthesis. This is not true of all closed sets on the circle.

**How the definition helps.** On a discrete group, multiplying f by a finitely supported function in A(G) keeps every zero of f and gives finite support (our own). Leptin's theorem gives such multipliers whose products with f converge to f in norm (our own). The cited equivalence also gives a closed set on the circle where synthesis fails.

**Paper or page:** [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349). It says: “Let G be a locally compact abelian group. Then every closed subset of Gⁿ is a set of spectral synthesis for Aⁿ(G) if and only if G is discrete.”

**Sources:**

- [Paul Malliavin, Impossibilité de la synthèse spectrale sur les groupes abéliens non compacts (1959)](https://doi.org/10.1007/bf02684707)

### Frequency bands reconstruct modulo polynomials

**Remember:** Bands that miss zero cannot see polynomials.

*Rules out counterexamples.* MSC 43A70 (Analysis on specific locally compact and other abelian groups), 42B25. arXiv math.CA, math.FA. Level 4: research.

**Definition.** A tempered distribution on ℤ is a continuous linear functional on rapidly decreasing sequences. Work modulo polynomial sequences, which are exactly the distributions whose Fourier transform on the circle is supported at frequency zero, the one frequency every band misses.

**Problem.** Use a smooth dyadic partition of unity on positive frequencies of the square root of the discrete Laplacian. The resulting bands of every tempered distribution on ℤ sum to that distribution modulo polynomial sequences.

**How the definition helps.** The bands sum to one away from frequency zero, so what they miss has Fourier support at zero and is a polynomial sequence (our own). The sum converges when tested against smooth periodic functions flat at zero, because Taylor estimates dominate the derivatives of the dyadic cutoffs.

**Paper or page:** [Hardy spaces, Besov spaces and Triebel–Lizorkin spaces associated with a discrete Laplacian and applications](https://arxiv.org/abs/2411.19399v1). It says: “in 𝒮′(ℤ)/𝒫(ℤ).”

**Sources:** none listed. No primary source with a working link was found.
