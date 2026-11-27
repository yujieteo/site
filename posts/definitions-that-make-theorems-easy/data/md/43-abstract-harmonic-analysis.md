### Logarithms linearize Mellin convolution

**Remember:** Logarithms turn division into subtraction and ratios into lengths.

*True by definition.* MSC 43A32 (Other transforms and operators of Fourier type), 43A70. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define convolution on the positive numbers by integrating f(y)g(x/y) against dy/y. The measure dy/y counts equal ratios equally, unlike ordinary length dy.

**Problem.** Suppose f and g are integrable against dx/x on the positive half-line. Logarithmic coordinates turn their convolution into ordinary convolution. Its Mellin transform on the imaginary axis equals the product of their transforms.

**How the definition helps.** The measure dy/y becomes ordinary length under y = exp(u), so the integral becomes ordinary convolution. In our own proof, the Mellin kernel at imaginary parameter iξ becomes exp(iξu). The Fourier convolution theorem now gives the product formula.

**Wikipedia:** [Mellin transform](https://en.wikipedia.org/wiki/Mellin_transform). It says: “Notice that dx/x is a Haar measure on the multiplicative group ℝ₊× and x ↦ xˢ is a (generally non-unitary) multiplicative character.”

**Sources:** none listed. No primary source with a working link was found.

### Compact kernels let Haar measure descend

**Remember:** Compact fibers make the quotient preimages of compact sets compact.

*Rules out counterexamples.* MSC 43A05 (Measures on groups and semigroups, etc.). arXiv math.FA. Level 3: graduate.

**Definition.** Let π:G→G/N be the quotient by a compact normal subgroup of a second-countable locally compact group. For left Haar measure μ on G, its pushforward assigns μ(π⁻¹(E)) to every Borel set E in G/N.

**Problem.** Pushing Haar measure to the quotient by a compact normal subgroup gives Haar measure. Without compactness the pushforward can be infinite on every nonempty open set.

**How the definition helps.** The quotient map with compact kernel has compact preimages of compact sets, so its pushforward is locally finite (our own). Left invariance passes through π, and every nonempty open set has a nonempty open preimage. Equivalently, Weil’s integration formula normalizes the fiber Haar measure to one. For ℝ modulo ℤ, an open arc lifts to infinitely many disjoint intervals of equal positive length.

**Paper or page:** [Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005), [Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005). It says: “μ(π⁻¹(E)) = λ(N)ν(E)”

**Sources:**

- [M. Anoussis, G. K. Eleftherakis, A. Katavolos, Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005)

### Open images preserve Haar null preimages

**Remember:** An image subgroup is open when it contains an identity neighborhood.

*Rules out counterexamples.* MSC 43A05 (Measures on groups and semigroups, etc.), 43A85. arXiv math.FA. Level 3: graduate.

**Definition.** A continuous homomorphism θ:G→H between second-countable locally compact groups has open image if θ(G) contains a neighborhood of the identity in H.

**Problem.** The preimage of every target Haar-null set is Haar-null exactly when the homomorphism has open image.

**How the definition helps.** Our own argument uses Weil’s formula on the open image, where target Haar measure restricts to Haar measure. Integration along the kernel then preserves null preimages. Conversely, the image is σ-compact and has full preimage, so null-set preservation gives it positive measure and hence openness. For ℤ inside ℝ, the null singleton {0} pulls back to counting measure one.

**Paper or page:** [Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005). It says: “The following are equivalent: (i) θ∗(μ) ≪ ν (ii) θ(G) is an open subgroup of H.”

**Sources:**

- [M. Anoussis, G. K. Eleftherakis, A. Katavolos, Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005)

### Unimodularity makes inversion measure-preserving

**Remember:** Inversion swaps the two sides of Haar invariance.

*True by definition.* MSC 43A05 (Measures on groups and semigroups, etc.). arXiv math.FA. Level 3: graduate.

**Definition.** On a locally compact Hausdorff group, a left Haar measure is a nonzero regular Borel measure, finite on compact sets and invariant under left translations. The group is unimodular if right translations also preserve that measure.

**Problem.** Inversion preserves left Haar measure exactly when the group is unimodular.

**How the definition helps.** Inversion exchanges left and right translations, so it takes a left Haar measure to a right Haar measure (our own). In a unimodular group, uniqueness gives a positive scalar relating these measures (our own). Applying inversion twice squares the scalar and restores the measure, so the scalar is one (our own). Conversely, inversion invariance gives right invariance (our own).

**nLab:** [Haar integral](https://ncatlab.org/nlab/show/Haar+integral). It says: “The left and the right Haar measure may or may not coincide, groups for which they coincide are called unimodular.”

**Sources:** none listed. No primary source with a working link was found.

### Amenability gives invariant measures through its fixed-point definition

**Remember:** An invariant measure is a fixed point for the action on probability measures.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 37A15. arXiv math.GR, math.DS. Level 3: graduate.

**Definition.** Consider every continuous affine action of a locally compact group G on a nonempty compact convex subset of a locally convex Hausdorff space. The fixed-point definition calls G amenable if each such action has a common fixed point.

**Problem.** If an amenable group acts continuously on a nonempty compact metric space X, then X has an invariant Borel probability measure.

**How the definition helps.** In our own proof, probability measures on X form a compact convex set in the weak-star topology by Riesz representation and Banach–Alaoglu. Transport by the group gives a continuous affine action there. Its fixed point is an invariant probability measure. Day’s theorem identifies this fixed-point property with amenability.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “Fixed-point property. Any action of the group by continuous affine transformations on a compact convex subset of a (separable) locally convex topological vector space has a fixed point.”

**Sources:**

- [M. M. Day, Fixed-point theorems for compact convex sets, Illinois J. Math. 5 (1961) 585–590](https://doi.org/10.1215/ijm/1255631582)

### Coset representatives transfer invariant means

**Remember:** Copy a function across cosets before taking the average.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups). arXiv math.FA. Level 3: graduate.

**Definition.** A discrete group G is amenable if bounded real functions on G admit a positive left-translation-invariant linear functional sending 1 to 1. For H ≤ G choose one representative t per right coset Ht, and extend each bounded f on H by E(f)(ht) = f(h).

**Problem.** Every subgroup of an amenable discrete group is amenable.

**How the definition helps.** Our own explanation extends functions across right cosets, so the group mean can average a function defined only on H. The extension respects left shifts by H, preserves positivity and takes the constant one to one. Composing it with the group mean gives the required subgroup mean. Directly restricting an invariant finitely additive probability could give H mass zero.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “Every (closed) subgroup of an amenable group is amenable.”

**Sources:**

- [Mahlon M. Day, Amenable semigroups (1957)](https://doi.org/10.1215/ijm/1255380675)

### Directed unions preserve amenability

**Remember:** Each finite translation test fits inside one subgroup.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups). arXiv math.FA. Level 3: graduate.

**Definition.** A discrete group satisfies the Følner condition if each finite K ⊆ G and ε &gt; 0 admit a nonempty finite F ⊆ G. This witness must satisfy \|gF △ F\| &lt; ε\|F\| for every g ∈ K.

**Problem.** A directed union of amenable discrete subgroups is amenable. Directed means any two subgroups in the family lie in a third.

**How the definition helps.** Our own explanation is that a finite list of translations lies inside one subgroup, whose finite witness also works in the union. The work is Følner’s theorem equating these tests with the invariant mean definition.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “if a group can be written as a directed union of amenable subgroups, then it is amenable.”

**Sources:**

- [Erling Følner, On groups with full Banach mean value (1955)](https://doi.org/10.7146/math.scand.a-10442)

### Fixed points preserve amenable extensions

**Remember:** Fix the normal subgroup first, then let the quotient act.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups). arXiv math.FA. Level 3: graduate.

**Definition.** Consider every separately continuous affine action of a locally compact group on a nonempty compact convex subset of a locally convex Hausdorff space. Day’s fixed-point criterion calls the group amenable if every such action has a common fixed point.

**Problem.** A locally compact group with a closed normal amenable subgroup and an amenable quotient is amenable.

**How the definition helps.** The subgroup’s fixed points form a nonempty compact convex set, so the same test applies again (our own). Normality preserves this set under the whole group, and the subgroup acts trivially there (our own). The resulting quotient action has a fixed point, which the whole group fixes (our own). Day’s theorem connects this argument to the invariant average.

**Paper or page:** [Amenability of group actions on compact spaces and the associated Banach algebras](https://arxiv.org/abs/2504.08357). It says: “then K has a G–fixed point.”

**Sources:**

- [Mahlon M. Day, Fixed-point theorems for compact convex sets (1961)](https://doi.org/10.1215/ijm/1255631582)

### Følner overlaps give positive definite coefficients

**Remember:** The overlap of a set with its translate is a positive definite coefficient.

*True by definition. Confidence: medium.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 43A35. arXiv math.FA. Level 3: graduate.

**Definition.** Given finite K in an amenable discrete group and ε &gt; 0, choose a nonempty finite Følner witness F. It must satisfy \|gF △ F\| &lt; ε\|F\| for every g ∈ K. Define φ(g) = \|F ∩ gF\|/\|F\| throughout the group.

**Problem.** For any finite subset of an amenable discrete group, normalized positive definite functions of finite support approximate one uniformly there. Normalized means φ(e) = 1, and positive definite means each finite matrix with entries φ(x⁻¹y) is positive semidefinite.

**How the definition helps.** Our own proof uses the Følner definition to make approximation by overlap fractions immediate. The fraction is one minus half the relative size of F △ gF, and it vanishes unless g lies in the finite set FF⁻¹. Positive definiteness holds because φ(x⁻¹y) is the inner product of the normalized indicators of xF and yF. Følner's theorem connects this test to the invariant mean definition.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “For every finite (or compact) subset F of G there is a measurable subset U of G with finite positive Haar measure”

**Paper or page:** [Proper cocycles, measure equivalence and Lₚ-Fourier multipliers](https://arxiv.org/abs/2506.18320). It says: “there exists a sequence of unital positive definite functions (mₙ)ₙ≥₀ ⊂ A(G) such that mₙ → 1 uniformly on compact sets”

**Sources:**

- [Erling Følner, On groups with full Banach mean value (1955)](https://doi.org/10.7146/math.scand.a-10442)

### Invariant means make quotients of amenable groups amenable

**Remember:** Pull back functions from the quotient to reuse the invariant mean.

*True by definition. Confidence: medium.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups). arXiv math.GR. Level 3: graduate.

**Definition.** A locally compact Hausdorff group is amenable if it admits a left translation invariant mean on its bounded right uniformly continuous real functions. Here right uniform continuity means that f(gx) approaches f(x) as g approaches the identity, uniformly in x. A mean is a positive linear functional that sends the constant 1 to 1.

**Problem.** Let G be amenable and N a closed normal subgroup. Then the quotient G/N is amenable.

**How the definition helps.** The mean definition lets us apply the same functional to functions pulled back from the quotient (our own). Pullback preserves right uniform continuity and commutes with left translations, so the composite is again an invariant mean (our own). With the Følner definition for discrete groups, images of nearly invariant finite sets may have unequal fibre sizes, so this direct argument fails (our own). The work lies in the equivalence of the mean and Følner definitions.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “Every quotient of an amenable group is amenable.”

**Sources:**

- [M. M. Day, Amenable semigroups, Illinois Journal of Mathematics 1 (1957)](https://doi.org/10.1215/ijm/1255380675)

### Mean averaging makes bounded actions unitary

**Remember:** Average the inner product so every group element preserves it.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 43A65. arXiv math.RT. Level 3: graduate.

**Definition.** Let π be a uniformly bounded strongly continuous representation of an amenable locally compact group G. Choose a right-invariant positive linear functional M on L∞(G) with M(1) = 1. Define \[u,v\] = M(g ↦ ⟨π(g)u,π(g)v⟩) for every pair of vectors.

**Problem.** Every uniformly bounded, strongly continuous Hilbert space representation of a locally compact amenable group is unitary for an equivalent inner product. Strong continuity means that each vector moves continuously.

**How the definition helps.** Our own explanation uses a right-invariant mean to average inner products even when the group has infinite invariant volume. Applying the action to both vectors right-translates the function being averaged and leaves its mean unchanged. Uniform bounds on the operators and their inverses give upper and positive lower bounds for the new norm relative to the original. The invariant mean characterization of amenability supplies the average.

**nLab:** [unitarization](https://ncatlab.org/nlab/show/unitarization). It says: “every bounded strong-operator-continuous representation of a locally compact amenable group on a Hilbert space ℋ is unitarizable.”

**Sources:** none listed. No primary source with a working link was found.

### The fixed-point definition makes locally compact abelian groups amenable

**Remember:** Commuting affine maps on a compact convex set share a fixed point.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 47H10. arXiv math.GR, math.FA. Level 3: graduate.

**Definition.** A locally compact Hausdorff group is amenable if every continuous affine action on a nonempty compact convex set has a common fixed point. The set lies in a locally convex vector space, such as a normed space, and affine maps preserve convex combinations. The other definition uses a mean, a positive normalized linear functional on essentially bounded measurable functions, unchanged by left translation.

**Problem.** Every locally compact Hausdorff abelian group is amenable.

**How the definition helps.** The fixed-point definition lets us apply the Markov–Kakutani theorem directly, because the maps in an abelian group action commute. That theorem gives a common fixed point for commuting continuous affine maps on a nonempty compact convex set. With the mean definition one must instead produce a translation invariant functional. The work shifted to the fixed-point theorem and the theorem equating the fixed-point and mean definitions.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “For locally compact abelian groups, this property is satisfied as a result of the Markov–Kakutani fixed-point theorem.”

**Sources:**

- [S. Kakutani, Two fixed-point theorems concerning bicompact convex sets, Proc. Imp. Acad. Tokyo 14 (1938)](https://doi.org/10.3792/pia/1195579652)

### The Følner definition makes the integers and slow-growing groups amenable

**Remember:** Long intervals change little under any fixed shift.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 20F69. arXiv math.GR. Level 3: graduate.

**Definition.** For a discrete group G, take any finite K ⊆ G and ε &gt; 0. The Følner condition requires a nonempty finite S ⊆ G with \|gS △ S\| &lt; ε\|S\| for every g ∈ K.

**Problem.** The integers are amenable. So are finitely generated groups of subexponential growth, meaning their balls in a finite generating set grow more slowly than every exponential.

**How the definition helps.** Følner’s criterion reduces amenability to finite sets with small relative changes. In ℤ, shifting an interval by g changes at most 2\|g\| elements (our own). For fixed k, subexponential growth gives radii with \|Bᵣ₊ₖ\|/\|Bᵣ\| arbitrarily close to one, since a uniform gap would force exponential growth. For shifts of length at most k, the symmetric difference has size at most 2(\|Bᵣ₊ₖ\|−\|Bᵣ\|) (our own).

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “The group of integers is amenable (a sequence of intervals of length tending to infinity is a Følner sequence).”

**Sources:** none listed. No primary source with a working link was found.

### Weak containment equates group completions

**Remember:** If no representation gives a larger norm, both completions use the same norm.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 22D25. arXiv math.FA. Level 3: graduate.

**Definition.** Let λ denote the left regular representation of a locally compact group G. A continuous unitary representation π is weakly contained in λ if ‖π(f)‖ ≤ ‖λ(f)‖ for every f ∈ L¹(G). Here π(f) integrates π(g) against f(g) times left Haar measure, and λ(f) uses the same construction.

**Problem.** For a locally compact amenable group, the full and reduced group C\*-algebras agree under the canonical map. These algebras complete the convolution algebra of integrable functions using two operator norms.

**How the definition helps.** Hulanicki’s theorem gives weak containment in λ for every continuous unitary representation of an amenable group. In our own argument, taking the supremum yields the full norm bounded by the reduced norm. The supremum includes λ, giving the reverse bound. Completing in identical norms gives the canonical isomorphism.

**Wikipedia:** [Group algebra of a locally compact group](https://en.wikipedia.org/wiki/Group_algebra_of_a_locally_compact_group). It says: “The reduced group C\*-algebra is isomorphic to the non-reduced group C\*-algebra defined above if and only if G is amenable.”

**Sources:**

- [Andrzej Hulanicki, Groups whose regular representation weakly contains all unitary representations (1964)](https://doi.org/10.4064/sm-24-1-27-59)
- [Andrzej Hulanicki, Means and Følner condition on locally compact groups (1966)](https://doi.org/10.4064/sm-27-2-87-104)

### Homomorphisms preserve measure convolution

**Remember:** Multiplying and then mapping agrees with mapping and then multiplying.

*True by definition. Confidence: medium.* MSC 43A10 (Measure algebras on groups, semigroups, etc.). arXiv math.FA. Level 3: graduate.

**Definition.** Take finite positive regular Borel measures on locally compact groups. To convolve them, integrate each continuous compactly supported test function at the product xy against the two measures. This definition extends the integral formula for densities to point masses.

**Problem.** A continuous homomorphism of locally compact groups sends a convolution to the convolution of the image measures.

**How the definition helps.** In our own proof, the product-measure definition makes both routes integrate the same function of two variables. Applying a homomorphism after multiplying gives the same element as multiplying the two images. Integration against each image measure amounts to composing with the homomorphism before integrating.

**Paper or page:** [Homomorphisms of L¹ algebras and Fourier algebras](https://arxiv.org/abs/2302.09573v1). It says: “a homomorphism φ : L¹(F) → M(G) of the form f ↦ θ∗(f)”

**Sources:** none listed. No primary source with a working link was found.

### Nonzero finite translation spaces require compactness

**Remember:** On a noncompact group, translations escape every finite-dimensional space of functions that fade at infinity.

*Rules out counterexamples.* MSC 43A15 (\\(L<sup>p\\</sup>)-spaces and other function spaces on groups, semigroups, etc.), 43A60. arXiv math.FA. Level 3: graduate.

**Definition.** Use continuous functions that vanish at infinity: for every positive threshold the set where the absolute value reaches it is compact. This is stronger than merely requiring the functions to be bounded.

**Problem.** A locally compact group admits a nonzero finite-dimensional translation-invariant space of continuous functions vanishing at infinity exactly when it is compact.

**How the definition helps.** On a noncompact group, translates escaping every compact set converge pointwise to zero while retaining their original norm (our own). In finite dimensions a subnet would converge in norm, necessarily to zero. On compact groups constants provide the required space. Without vanishing at infinity, constants also work on ℝ.

**Paper or page:** [The ideal structure of measure algebras and asymptotic properties of group representations](https://arxiv.org/abs/2106.07526). It says: “contains a non-zero finite-dimensional linear subspace invariant under left translation if and only if G is compact.”

**Sources:**

- [Jared T. White, The ideal structure of measure algebras and asymptotic properties of group representations](https://arxiv.org/abs/2106.07526)

### Haar correction gives convolution adjoints

**Remember:** Invert the measure, not just the value of its density.

*Rules out counterexamples.* MSC 43A20 (\\(L<sup>1\\</sup>)-algebras on groups, semigroups, etc.), 43A05. arXiv math.FA. Level 3: graduate.

**Definition.** For left Haar measure μ and f ∈ L¹(G), define f\* as the density of the conjugate of fμ pushed forward under inversion. Take this density with respect to μ.

**Problem.** On a locally compact group, left convolution by the adjoint density gives the adjoint operator on square-integrable functions.

**How the definition helps.** Inverting the measure accounts for the change from left to right Haar measure. In our own proof, each unitary left translation has adjoint translation by the inverse element. Integrating and conjugating its coefficient gives convolution by f\*. On the positive affine group, inversion changes left Haar measure, so conjugating f(x⁻¹) alone misses the volume factor.

**nLab:** [Haar integral](https://ncatlab.org/nlab/show/Haar+integral). It says: “The left and the right Haar measure may or may not coincide, groups for which they coincide are called unimodular.”

**Wikipedia:** [Group algebra of a locally compact group](https://en.wikipedia.org/wiki/Group_algebra_of_a_locally_compact_group). It says: “where Δ is the modular function on G. With this involution, it is a \*-algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Integrable convolution identities require discreteness

**Remember:** An identity needs a point mass, not just a density.

*Rules out counterexamples.* MSC 43A20 (\\(L<sup>1\\</sup>)-algebras on groups, semigroups, etc.), 43A10. arXiv math.FA. Level 3: graduate.

**Definition.** For left Haar measure μ on a locally compact group G, the group algebra L¹(G,μ) consists of integrable densities. Its product is (f∗g)(x) = ∫ f(y)g(y⁻¹x) dμ(y).

**Problem.** The group algebra of a locally compact group has an identity exactly when the group is discrete.

**How the definition helps.** The identity point mass acts as a convolution identity and has a Haar density on a discrete group. In our own converse, normalized indicators of shrinking relatively compact identity neighborhoods converge weakly against continuous compactly supported tests to that point mass. Convolution with these indicators approximates each integrable density in L¹, so an identity density must represent the point mass. On a nondiscrete group singletons have Haar measure zero, excluding that density.

**Wikipedia:** [Group algebra of a locally compact group](https://en.wikipedia.org/wiki/Group_algebra_of_a_locally_compact_group). It says: “A group algebra has an identity, as opposed to just an approximate identity, if and only if the topology on the group is the discrete topology.”

**Sources:** none listed. No primary source with a working link was found.

### Characters turn convolution into products

**Remember:** The group law splits a character into two factors.

*True by definition.* MSC 43A25 (Fourier and Fourier-Stieltjes transforms on locally compact and other abelian groups), 43A20. arXiv math.FA, math.CA. Level 3: graduate.

**Definition.** On a locally compact abelian group, a character is a continuous homomorphism to the unit circle. The Fourier transform at a character integrates the function times the conjugate of that character. Use Haar measure, which translations preserve.

**Problem.** On a locally compact abelian group, the Fourier transform of a convolution of integrable functions equals the product of their transforms.

**How the definition helps.** Choosing characters as kernels makes the kernel of a product split into two factors. In our own proof, convolution averages translates of one function weighted by the other. Translation invariance and Fubini’s theorem then separate the two integrals. A general integral kernel would leave the variables coupled.

**nLab:** [Fourier transform](https://ncatlab.org/nlab/show/Fourier+transform). It says: “the transform of the convolution of two functions is the product of the transforms of each of the functions separately.”

**Sources:** none listed. No primary source with a working link was found.

### The Gelfand transform makes Fourier transforms vanish at infinity

**Remember:** Identify the two transforms and inherit vanishing at infinity.

*True by definition.* MSC 43A25 (Fourier and Fourier-Stieltjes transforms on locally compact and other abelian groups), 46J05. arXiv math.FA. Level 3: graduate.

**Definition.** The spectrum of a commutative complex Banach algebra is the set of its nonzero multiplicative linear functionals, with convergence tested separately at each algebra element. The Gelfand transform of an element evaluates each functional at that element. The Fourier transform of an integrable function uses its integral against the conjugate of each character, a continuous homomorphism to the circle.

**Problem.** Let G be a locally compact Hausdorff abelian group and f an integrable function on G. Then the Fourier transform of f is continuous on the character group, vanishes at infinity, and has modulus at most ‖f‖₁.

**How the definition helps.** The Gelfand description gives continuity, vanishing at infinity and the norm bound from one theorem for commutative Banach algebras (our own). Apply it to the convolution algebra of integrable functions, whose nonzero multiplicative functionals are exactly the integrals against conjugate characters. The work lies in proving that correspondence and in showing that the spectrum topology agrees with uniform convergence on compact sets (our own). The usual integral proof instead establishes decay by direct estimates and approximation (our own).

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality). It says: “This means the Fourier transform is a special case of the Gelfand transform.”

**Sources:** none listed. No primary source with a working link was found.

### Compact fibers preserve Fourier coefficients

**Remember:** Finite fiber volume keeps lifted vectors square-integrable.

*Rules out counterexamples.* MSC 43A30 (Fourier and Fourier-Stieltjes transforms on nonabelian groups and on semigroups, etc.), 43A22. arXiv math.FA. Level 3: graduate.

**Definition.** The Fourier algebra consists of functions g ↦ ⟨L(g)u,v⟩, where L(g) translates square-integrable functions on the left. Let H be a compact normal subgroup of a locally compact group G. Lift a function on G/H by composing it with the quotient map.

**Problem.** Pulling back a Fourier algebra function from a quotient by a compact normal subgroup gives a Fourier algebra function on the larger group.

**How the definition helps.** Our own explanation is that compact fibers let us lift the two square-integrable vectors as well as their coefficient. Normalize the invariant measure on H to mass one. Weil’s integration formula then shows that lifting preserves inner products, and lifting commutes with left translation. Without compactness, the constant one on ℝ/ℤ lifts to one on ℝ, although every Fourier algebra function on ℝ vanishes at infinity.

**Paper or page:** [Idempotents of large norm and homomorphisms of Fourier algebras](https://arxiv.org/abs/2109.12318). It says: “if H is compact, then j₍π₎(A(G/H)) ⊆ A(G).”

**Sources:**

- [Pierre Eymard, L’algèbre de Fourier d’un groupe localement compact (1964)](https://doi.org/10.24033/bsmf.1607)

### Compactness gives Fourier algebra identities

**Remember:** Constants enter the Fourier algebra when constant vectors are square integrable.

*Rules out counterexamples.* MSC 43A30 (Fourier and Fourier-Stieltjes transforms on nonabelian groups and on semigroups, etc.). arXiv math.FA. Level 3: graduate.

**Definition.** For square-integrable functions u and v on a locally compact group, write λ(g)u for the left translate of u by g. The Fourier algebra consists of the coefficients g ↦ ⟨λ(g)u,v⟩ and uses pointwise multiplication.

**Problem.** The Fourier algebra of a locally compact group has a multiplicative identity exactly when the group is compact.

**How the definition helps.** A normalized constant vector on a compact group gives the coefficient one (our own). At each g a unit vector u paired with λ(g)u gives a coefficient taking value one there, forcing any identity to equal one everywhere. Approximating both vectors by compactly supported vectors gives a uniform approximation by compactly supported coefficients. Thus coefficients vanish at infinity, excluding one on every noncompact group.

**Wikipedia:** [Fourier algebra](https://en.wikipedia.org/wiki/Fourier_algebra). It says: “We define the Fourier algebra A(G) to be the closed subalgebra spanned by the matrix coefficients of the left regular representation of G on L²(G).”

**Sources:**

- [Pierre Eymard, L’algèbre de Fourier d’un groupe localement compact (1964)](https://doi.org/10.24033/bsmf.1607)

### Tensor products multiply Fourier–Stieltjes coefficients

**Remember:** Tensor both actions and both pairs of vectors to multiply coefficients.

*True by definition.* MSC 43A30 (Fourier and Fourier-Stieltjes transforms on nonabelian groups and on semigroups, etc.), 43A65. arXiv math.FA. Level 3: graduate.

**Definition.** For a locally compact group G, the Fourier–Stieltjes algebra consists of all functions g ↦ ⟨π(g)u,v⟩. Here π ranges over strongly continuous unitary representations of G, and u,v range over their Hilbert spaces.

**Problem.** The pointwise product of two Fourier–Stieltjes functions belongs to the Fourier–Stieltjes algebra of the same locally compact group.

**How the definition helps.** The coefficient definition makes a product of two functions a single coefficient of the tensor product action. Inner products of simple tensors multiply. In our own comparison, the measure definition on abelian groups needs the Fourier convolution theorem to prove closure. The representation proof uses the existence and continuity of the tensor product action.

**Wikipedia:** [Fourier algebra](https://en.wikipedia.org/wiki/Fourier_algebra). It says: “B(G) forms an algebra with pointwise addition and multiplication, as for any unitary representations π and ρ of G,”

**Sources:**

- [P. Eymard, L’algèbre de Fourier d’un groupe localement compact (1964)](https://doi.org/10.24033/bsmf.1607)

### Cyclic vectors give unique realizations

**Remember:** Keep only the vectors whose inner products the function actually records.

*Rules out counterexamples.* MSC 43A35 (Positive definite functions on groups, semigroups, etc.), 43A65. arXiv math.RT. Level 3: graduate.

**Definition.** A group function φ is positive definite if each finite matrix with entries φ(x⁻¹y) is positive semidefinite. A realization writes φ(g) = ⟨π(g)v,v⟩ using a continuous group action by unitary operators on a Hilbert space. Call v cyclic when its translates have dense linear span.

**Problem.** Every continuous positive definite function on a locally compact group has a cyclic realization. Any two such realizations admit a unique unitary map matching their chosen vectors and commuting with the group actions.

**How the definition helps.** Cyclicity lets φ determine all inner products on a dense span (our own). Matching corresponding translates therefore extends uniquely to a unitary intertwiner. The Gelfand–Naimark–Segal construction supplies existence by quotienting out zero-length vectors and completing. Without cyclicity, adjoining any nonzero orthogonal representation leaves the chosen coefficient unchanged.

**Wikipedia:** [Positive-definite function on a group](https://en.wikipedia.org/wiki/Positive-definite_function_on_a_group). It says: “The unitary representation is unique, up to Hilbert space isomorphism, provided the following minimality condition holds:”

**Sources:** none listed. No primary source with a working link was found.

### Open subgroups preserve zero extensions

**Remember:** Cosets give positive blocks, and openness keeps the zero extension continuous.

*Rules out counterexamples.* MSC 43A35 (Positive definite functions on groups, semigroups, etc.). arXiv math.FA. Level 3: graduate.

**Definition.** A function on a group is positive definite if every matrix with entries f(xᵢ⁻¹xⱼ) is positive semidefinite. This means each matrix gives a nonnegative quadratic form. Require the subgroup to be open when extending a continuous positive definite function by zero.

**Problem.** A continuous positive definite function on an open subgroup extends by zero to a continuous positive definite function on the group.

**How the definition helps.** Openness makes the subgroup and its complement open, so zero extension preserves continuity (our own). Partition any finite list of group elements by left coset (our own). Entries between different cosets vanish, and each diagonal block is a positive semidefinite matrix from the subgroup (our own). Extending the constant one from {0} to ℝ gives a discontinuous function (our own).

**Paper or page:** [On extremal problems of Delsarte type for positive definite functions on LCA groups](https://arxiv.org/abs/2412.00482). It says: “Let H be an open subgroup of a LCA group G”

**Sources:**

- [On extremal problems of Delsarte type for positive definite functions on LCA groups](https://arxiv.org/abs/2412.00482)

### Positive definite functions peak at identity

**Remember:** A vector cannot meet its own translate with a larger inner product.

*True by definition.* MSC 43A35 (Positive definite functions on groups, semigroups, etc.), 43A65. arXiv math.FA. Level 3: graduate.

**Definition.** Write a continuous positive definite function as φ(g) = ⟨π(g)v, v⟩. Here π is a continuous action by unitary operators on a Hilbert space. The usual definition asks that every finite matrix with entries φ(x⁻¹y) be positive semidefinite.

**Problem.** A continuous positive definite function takes its largest absolute value at the identity.

**How the definition helps.** Our own explanation uses the coefficient formula to turn the peak bound into Cauchy–Schwarz. Both vectors have norm ‖v‖, so the absolute value is at most ‖v‖² = φ(e). The Gelfand–Naimark–Segal construction gives this coefficient formula from the usual matrix test.

**Paper or page:** [Spherical Fourier multipliers related to Gelfand pairs](https://arxiv.org/abs/2407.09225). It says: “∀ x ∈ G, \|φ(x)\| ≤ φ(e).”

**Sources:** none listed. No primary source with a working link was found.

### Evaluation makes biduality natural

**Remember:** Evaluating after precomposition gives the same value as first mapping the point.

*True by definition.* MSC 43A40 (Character groups and dual objects). arXiv math.FA. Level 3: graduate.

**Definition.** The dual of a locally compact abelian group consists of its continuous circle-valued characters, with uniform convergence on compact sets. The dual of a continuous homomorphism acts by precomposition on characters. Evaluation sends x to the character χ ↦ χ(x) on the dual.

**Problem.** The evaluation isomorphisms from locally compact abelian groups to their double duals commute with every continuous group homomorphism.

**How the definition helps.** Choosing evaluation as the identification makes both compositions evaluate the same character at the same point (our own). For a map u and target character χ, both give χ(u(x)) (our own). Choosing unspecified isomorphisms with the double dual would require a separate compatibility proof (our own). Pontryagin duality proves that evaluation is a continuous isomorphism with continuous inverse (our own).

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality). It says: “each group element x is identified to the evaluation character on the dual.”

**Sources:**

- [Lev Pontryagin, The Theory of Topological Commutative Groups (1934)](https://doi.org/10.2307/1968438)

### Inverse limits make profinite group characters have finite order

**Remember:** A small circle arc cannot contain a nontrivial subgroup.

*True by definition. Confidence: medium.* MSC 43A40 (Character groups and dual objects), 20E18. arXiv math.GR. Level 3: graduate.

**Definition.** A profinite group is an inverse limit of finite discrete groups, or equivalently a compact Hausdorff group with no connected subsets larger than one point. In the limit description, the kernels of the projections to the finite quotients form a neighbourhood basis at the identity. A character is a continuous homomorphism to the circle group ℝ/ℤ.

**Problem.** Every character of a profinite group factors through a finite quotient and has finite order under pointwise addition. Thus the character group of an abelian profinite group is a torsion group, meaning every element has finite order.

**How the definition helps.** The inverse limit gives a basis of open normal subgroups at the identity (our own). Continuity puts the image of one such subgroup inside the arc (−¼,¼) modulo one. This arc contains no nontrivial subgroup, so the character factors through the corresponding finite quotient. The quotient’s order annihilates the character.

**nLab:** [Pontryagin duality for torsion abelian groups](https://ncatlab.org/nlab/show/Pontryagin+duality+for+torsion+abelian+groups). It says: “Notice that for G a profinite group then hom(G,ℝ/ℤ) ≃ hom(G,ℚ/ℤ)”

**Sources:** none listed. No primary source with a working link was found.

### The compact-open topology makes duals of compact abelian groups discrete

**Remember:** Uniform closeness to the constant character forces equality on a compact group.

*True by definition.* MSC 43A40 (Character groups and dual objects), 22B05. arXiv math.FA, math.GR. Level 3: graduate.

**Definition.** For a topological abelian group G, its dual consists of continuous homomorphisms G→𝕋 under pointwise multiplication, where 𝕋 is the unit circle. Basic neighborhoods of χ require \|ψ(x)−χ(x)\| &lt; ε for every x in a chosen compact K ⊆ G, with ε &gt; 0.

**Problem.** The dual of a compact Hausdorff abelian group is discrete.

**How the definition helps.** Compactness lets one take K = G (our own). With χ = 1 and ε = 1, every nearby character has image in an arc containing no nontrivial subgroup. Thus the constant character is isolated, and translation isolates every character.

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality). It says: “That G being compact implies Ĝ is discrete or that G being discrete implies that Ĝ is compact is an elementary consequence of the definition of the compact-open topology on Ĝ and does not need Pontryagin duality.”

**Sources:**

- [L. Pontrjagin, The theory of topological commutative groups, Annals of Mathematics 35 (1934)](https://doi.org/10.2307/1968438)

### The compact-open topology makes duals of discrete abelian groups compact

**Remember:** Characters of a discrete group form a closed subset of a compact product.

*True by definition.* MSC 43A40 (Character groups and dual objects), 22B05, 54D30. arXiv math.FA, math.GR. Level 3: graduate.

**Definition.** A character of a discrete abelian group G is a homomorphism to the circle group T of complex numbers of modulus 1. The dual Ĝ is the group of characters with the compact-open topology, which tests uniform closeness on compact sets. Compact subsets of G are finite, so this is the topology of pointwise convergence.

**Problem.** Every discrete abelian group has a compact dual.

**How the definition helps.** For a discrete group the character equations define a closed subset of the compact product 𝕋ᴳ (our own). For every x,y, the equation χ(x+y) = χ(x)χ(y) is closed because evaluation and circle multiplication are continuous. Tychonoff’s theorem gives product compactness, so the closed subset is compact.

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality). It says: “That G being compact implies Ĝ is discrete or that G being discrete implies that Ĝ is compact is an elementary consequence of the definition of the compact-open topology on Ĝ and does not need Pontryagin duality.”

**Sources:**

- [L. Pontrjagin, The theory of topological commutative groups, Annals of Mathematics 35 (1934)](https://doi.org/10.2307/1968438)

### Hilbert coefficients have weakly compact orbits

**Remember:** Translate the coefficient by moving a vector inside a weakly compact ball.

*True by definition.* MSC 43A60 (Almost periodic functions on groups and semigroups and their generalizations (recurrent functions, distal functions, etc.); almost automorphic functions), 43A30. arXiv math.FA. Level 3: graduate.

**Definition.** A bounded continuous group function is weakly almost periodic when the weak closure of its translation orbit is compact. Weak convergence tests all bounded linear functionals on the space of bounded continuous functions. Define the Fourier–Stieltjes algebra of a locally compact group by the coefficients g ↦ ⟨π(g)u,v⟩ of continuous unitary actions on Hilbert spaces.

**Problem.** Every Fourier–Stieltjes function is weakly almost periodic.

**How the definition helps.** Right translation of a coefficient replaces u by π(g)u, which stays in a fixed closed Hilbert ball (our own). That ball is weakly compact. The bounded linear coefficient map takes it to a weakly compact set containing the translation orbit, hence also its weak closure.

**Wikipedia:** [Almost periodic function](https://en.wikipedia.org/wiki/Almost_periodic_function). It says: “A function on a locally compact group is called weakly almost periodic if its orbit is weakly relatively compact in L∞.”

**Paper or page:** [Power boundedness in Fourier and Fourier-Stieltjes algebra of an ultraspherical hypergroup](https://arxiv.org/abs/2309.11074). It says: “Let H be a locally compact hypergroup with a Haar measure. Then B(H) ⊂ wap(H).”

**Sources:**

- [Pierre Eymard, L’algèbre de Fourier d’un groupe localement compact (1964)](https://doi.org/10.24033/bsmf.1607)

### Matching modular functions permits quotient volume

**Remember:** Fiber rescaling must match ambient rescaling to leave quotient volume unchanged.

*Rules out counterexamples.* MSC 43A85 (Harmonic analysis on homogeneous spaces), 43A05. arXiv math.FA. Level 3: graduate.

**Definition.** For left Haar measure μ on G, define Δ<sub>G</sub>(h) by μ(Eh) = Δ<sub>G</sub>(h)μ(E) for every Borel set E. For a closed subgroup H, matching modular functions means Δ<sub>G</sub>(h) = Δ<sub>H</sub>(h) for every h ∈ H, using H’s own Haar measure.

**Problem.** The space of left cosets G/H has a nonzero left-invariant Radon measure exactly when the modular functions agree on H. A Radon measure is locally finite and regular.

**How the definition helps.** The quotient integration theorem identifies equality of the two right-translation factors as necessary and sufficient for invariant quotient volume. In our own example, the positive affine group modulo dilations acts on ℝ by translations and dilations. Translation invariance forces a positive multiple of Lebesgue measure, which dilations rescale.

**Wikipedia:** [Haar measure](https://en.wikipedia.org/wiki/Haar_measure). It says: “an invariant measure on G/H exists if and only if the modular function Δ of G restricted to H is the modular function δ of H.”

**Sources:** none listed. No primary source with a working link was found.

### Conjugate symbols give spherical adjoints

**Remember:** Conjugate the symbol to take the adjoint.

*True by definition.* MSC 43A90 (Harmonic analysis and spherical functions), 43A22. arXiv math.FA. Level 3: graduate.

**Definition.** For a Gelfand pair (G,K), let F denote the spherical Fourier transform on square-integrable K-biinvariant functions. These functions are invariant under left and right translation by each element of K. For each bounded measurable symbol m define Tₘf = F⁻¹(mFf).

**Problem.** On square-integrable functions with this invariance, the adjoint of a spherical multiplier has the conjugate symbol.

**How the definition helps.** Our own explanation uses frequency variables to avoid computing the adjoint from its integral kernel. Multiplication by a bounded function has adjoint multiplication by its complex conjugate. The spherical Plancherel theorem makes the transform unitary, so changing variables preserves adjoints.

**Paper or page:** [Spherical Fourier multipliers related to Gelfand pairs](https://arxiv.org/abs/2407.09225), [Spherical Fourier multipliers related to Gelfand pairs](https://arxiv.org/abs/2407.09225). It says: “defined by Tₘ\* f = Tₘ̄f, where m̄ is the complex conjugate of m.”

**Sources:**

- [Yaogan Mensah, Marie Françoise Ouedraogo, Spherical Fourier multipliers related to Gelfand pairs](https://arxiv.org/abs/2407.09225)

### Coset symmetry makes convolution commute

**Remember:** A symmetry that reverses every product but changes no factor forces commutativity.

*True by definition.* MSC 43A90 (Harmonic analysis and spherical functions), 43A85. arXiv math.RT. Level 3: graduate.

**Definition.** Let K be a compact subgroup of a locally compact group G. Call (G,K) a Gelfand pair when convolution commutes for finite regular measures invariant under left and right translations by K. A double coset KxK consists of all products kxh with k and h in K.

**Problem.** Suppose a continuous map reverses products, squares to the identity and preserves each double coset as a set. Then (G,K) is a Gelfand pair.

**How the definition helps.** Double averaging shows that product reversal fixes every K-biinvariant measure (our own). Indeed, the average at each x is the unique K-biinvariant probability on KxK, which reversal preserves. Convolution preserves biinvariance, so reversal fixes the convolution while exchanging its two factors. Hence their convolutions agree in either order.

**Wikipedia:** [Gelfand pair](https://en.wikipedia.org/wiki/Gelfand_pair). It says: “there exists an involutive anti-automorphism σ of G such that any (K, K) double coset is σ-invariant.”

**Paper or page:** [Weighted Gelfand pairs, weighted spherical Fourier transform and multipliers](https://arxiv.org/abs/2406.03613). It says: “then (G,K, ω) is a weighted Gelfand pair.”

**Sources:**

- [Assèkè Y. Tissinam, Abudulaï Issa, Yaogan Mensah, Weighted Gelfand pairs, weighted spherical Fourier transform and multipliers](https://arxiv.org/abs/2406.03613)

### One fixed line factors spherical averages

**Remember:** Averaging onto one line splits the inner product into two factors.

*True by definition.* MSC 43A90 (Harmonic analysis and spherical functions), 43A65. arXiv math.FA. Level 3: graduate.

**Definition.** Let a locally compact group act continuously on a Hilbert space by operators preserving inner products. Suppose the vectors fixed by a compact subgroup K form a line. Choose a unit vector v on that line and set φ(x) = ⟨xv,v⟩.

**Problem.** The average of φ(xky) over k in K equals φ(x)φ(y), using translation-invariant measure of total mass one.

**How the definition helps.** The fixed-vector definition turns the subgroup average into projection onto the line through v. In our own proof, invariance makes the average of the operators an orthogonal projection onto all fixed vectors. Projection onto one line gives the two inner products in the formula. This avoids solving the equations that characterize spherical functions as common eigenfunctions of convolution operators.

**Paper or page:** [Spherical Fourier multipliers related to Gelfand pairs](https://arxiv.org/abs/2407.09225v3). It says: “\\int<sub>K</sub> \\varphi(xky)dk=\\varphi(x)\\varphi(y).”

**Sources:** none listed. No primary source with a working link was found.

### Leptin densities give a geometric proof of the model set density formula

**Remember:** A null window boundary makes the interior and closure give the same density.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 52C23. arXiv math.GR, math.DS. Level 4: research.

**Definition.** In a cut-and-project scheme, a uniform lattice L ⊂ G×H projects injectively to G and densely to H. A model set selects the G-coordinates of lattice points with H-coordinate in a relatively compact measurable window W. A regular window has boundary of Haar measure zero.

**Problem.** Let G be amenable and W regular in this scheme. The model set has density equal to the Haar measure of W divided by the covolume of L.

**How the definition helps.** Regularity makes the interior and closure of W have equal measure. The paper’s Leptin density estimates bound the lower and upper densities between those measures divided by the lattice covolume. Thus the bounds coincide (our own).

**Paper or page:** [Leptin densities in amenable groups](https://arxiv.org/abs/2107.04760v2), [Leptin densities in amenable groups](https://arxiv.org/abs/2107.04760v2). It says: “We use Leptin densities for a geometric proof of the model set density formula, which expresses the density of a uniform regular model set in terms of the volume of its window”

**Sources:**

- [Felix Pogorzelski, Christoph Richard, Nicolae Strungaru, Leptin densities in amenable groups, arXiv:2107.04760v2 (2021)](https://arxiv.org/abs/2107.04760v2)

### Finite Brascamp–Lieb bounds require properness

**Remember:** Keep joint preimages compact before trying to bound the product integral.

*Rules out counterexamples.* MSC 43A15 (\\(L<sup>p\\</sup>)-spaces and other function spaces on groups, semigroups, etc.), 43A25. arXiv math.FA. Level 4: research.

**Definition.** A Brascamp–Lieb inequality bounds an integral of a product by a product of norms. Each factor is pulled back along a homomorphism of locally compact abelian groups. Require the joint map into the product to be proper, meaning that preimages of compact sets are compact.

**Problem.** A finite Brascamp–Lieb constant requires the joint map to be proper. For instance, the map from ℝ to the circle given by t ↦ exp(it) fails even the one-factor inequality with exponent one.

**How the definition helps.** A nonproper joint map has a compact target set with noncompact preimage (our own argument). This closed preimage contains infinitely many points with disjoint translates of a fixed relatively compact identity neighborhood. Thickening the compact target set by the neighborhood’s image gives compact coordinate bounds containing all those translates’ images. Their indicators have finite norms but an infinite product integral, as with the constant one for ℝ mapping onto the circle.

**Paper or page:** [Brascamp--Lieb inequalities on locally compact abelian groups](https://arxiv.org/abs/2412.11514), [Brascamp--Lieb inequalities on locally compact abelian groups](https://arxiv.org/abs/2412.11514), [Brascamp--Lieb inequalities on locally compact abelian groups](https://arxiv.org/abs/2412.11514). It says: “and assume that $\\boldsymbol {\\sigma }: G \\to \\boldsymbol {G}$ is not proper. Then $\\operatorname {\\mathbf{BL}}(G, \\boldsymbol {\\sigma }, \\boldsymbol {p})$ and $\\operatorname {\\widehat{\\mathbf{BL}}}(G, \\boldsymbol {\\sigma }, \\boldsymbol {p’})$ are infinite.”

**Sources:**

- [Jonathan Bennett, Michael G. Cowling, Brascamp--Lieb inequalities on locally compact abelian groups](https://arxiv.org/abs/2412.11514)

### Open subgroup coefficients extend isometrically

**Remember:** Extend the vectors by zero and their coefficient extends by zero too.

*True by definition.* MSC 43A30 (Fourier and Fourier-Stieltjes transforms on nonabelian groups and on semigroups, etc.). arXiv math.FA. Level 4: research.

**Definition.** On a locally compact group, use Haar measure, the regular measure invariant under left translation. The Fourier algebra consists of functions g ↦ ⟨λ(g)u,v⟩, where λ(g) translates the square-integrable function u on the left. The norm is the infimum of ‖u‖₂‖v‖₂ over all such pairs.

**Problem.** For an open subgroup, zero extension preserves the Fourier algebra norm.

**How the definition helps.** Extending both vectors by zero gives the required coefficient with the same vector norms (our own). Outside the subgroup the translated vector has support disjoint from the other vector (our own). The restriction bound in the quoted lemma gives the opposite norm inequality (our own). Eymard identifies the coefficient norm with the alternative norm from pairing functions with operators generated by translations (our own).

**Paper or page:** [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349). It says: “If H is open, then Aⁿ(H) is completely isometrically isomorphic to (Aⁿ(G))°”

**Sources:**

- [Pierre Eymard, L’algèbre de Fourier d’un groupe localement compact (1964)](https://doi.org/10.24033/bsmf.1607)

### Boundary coherence preserves support constraints

**Remember:** Boundary points cannot carry positive values if outside points approach them.

*Rules out counterexamples.* MSC 43A35 (Positive definite functions on groups, semigroups, etc.). arXiv math.CA. Level 4: research.

**Definition.** A set is boundary coherent if every neighborhood of each boundary point meets the exterior of its closure. The positive set of a real function consists of points where its value exceeds zero. Define the negative set using values below zero.

**Problem.** Let Ω₊ and Ω₋ be boundary-coherent symmetric subsets of a locally compact abelian group, with Ω₊ a neighborhood of zero. For continuous real f, consider {f&gt;0} ⊆ Ω₊ and {f&lt;0} ⊆ Ω₋. These inclusions hold exactly when both hold with the respective closures.

**How the definition helps.** A positive boundary value would force positive values outside the prescribed closure by continuity and boundary coherence (our own). Apply the same argument to the negative of the function for the other sign (our own). Removing ±1 from ℝ leaves its closure unchanged, so a positive Gaussian passes only the closure test (our own).

**Paper or page:** [On extremal problems of Delsarte type for positive definite functions on LCA groups](https://arxiv.org/abs/2412.00482). It says: “Let G be a LCA group and Ω₊, Ω₋ be boundary-coherent symmetric subsets of G with Ω₊ a neighbourhood of 0.”

**Sources:**

- [On extremal problems of Delsarte type for positive definite functions on LCA groups](https://arxiv.org/abs/2412.00482)

### Nonnegative series yield positive spherical kernels

**Remember:** Each power of an inner product is another inner product.

*True by definition.* MSC 43A35 (Positive definite functions on groups, semigroups, etc.), 43A90. arXiv math.CA. Level 4: research.

**Definition.** A continuous function F on \[−1,1\] defines a kernel on each real unit sphere by assigning F(⟨x,y⟩) to each pair of points. Positive definiteness means every matrix of these values on a finite list of points has a nonnegative quadratic form. Schoenberg’s alternative description uses a power series with nonnegative coefficients having finite sum.

**Problem.** A summable nonnegative power series in the inner product is positive definite on every real unit sphere.

**How the definition helps.** Each power of the inner product gives a positive semidefinite matrix (our own). Indeed, multiplying coordinates in ordered tuples gives vectors whose inner products are the required powers (our own). Nonnegative sums preserve nonnegative quadratic forms, and so do limits (our own). Schoenberg proves that continuity and positivity on spheres of every dimension force this series representation.

**Paper or page:** [Positive definite singular kernels on two-point homogeneous spaces](https://arxiv.org/abs/2410.22104). It says: “A function f:\[−1,1\] → ℝ is positive definite on all spheres”

**Sources:**

- [Isaac J. Schoenberg, Positive definite functions on spheres (1942)](https://doi.org/10.1215/s0012-7094-42-00908-6)

### Strict aperiodicity removes rotating phases

**Remember:** Powers decay wherever the modulus is less than one.

*Rules out counterexamples.* MSC 43A35 (Positive definite functions on groups, semigroups, etc.), 43A22. arXiv math.FA. Level 4: research.

**Definition.** A normalized positive definite function φ on a discrete group satisfies φ(e) = 1 and makes every finite matrix \[φ(xᵢ⁻¹xⱼ)\] positive semidefinite. It is strictly aperiodic if \|φ(g)\| &lt; 1 for every g ≠ e.

**Problem.** On a discrete group, multiplication by successive powers of a strictly aperiodic function converges on each Fourier algebra vector in its norm. The limit multiplies by the indicator of the identity.

**How the definition helps.** Strict aperiodicity forces every nonidentity scalar power to decay (our own). Thus the multipliers converge on finitely supported Fourier algebra functions. These functions are norm dense, and normalized positive definite multipliers are contractions, giving convergence on the whole algebra. The sign character on the two-element group takes the value one only at the identity, yet its powers alternate.

**Paper or page:** [Positive definite functions as uniformly ergodic multipliers of the Fourier algebra](https://arxiv.org/abs/2411.12122), [Positive definite functions as uniformly ergodic multipliers of the Fourier algebra](https://arxiv.org/abs/2411.12122). It says: “then φ is strictly aperiodic if, and only if, it is completely mixing.”

**Sources:** none listed. No primary source with a working link was found.

### Closed frequency sets survive weak-star limits

**Remember:** Frequency restrictions survive limits when they are written as vanishing tests.

*True by definition.* MSC 43A45 (Spectral synthesis on groups, semigroups, etc.), 43A25. arXiv math.FA. Level 4: research.

**Definition.** Take an essentially bounded measurable function on a locally compact abelian group. A frequency lies outside its spectrum if convolution with some integrable kernel kills the function and the kernel’s Fourier transform is nonzero there. Equivalently, containment in a closed set A means every kernel with compact Fourier support disjoint from A kills the function.

**Problem.** If every function in a net has spectrum inside the same closed set, so does its weak-star limit. This limit is taken by testing integrals against integrable functions.

**How the definition helps.** Our own explanation uses the same convolution tests for every member of the convergent family. At each group element, convolution pairs the function with an integrable test, so a weak-star limit preserves zero. The equivalence with the frequency-by-frequency definition uses local Fourier cutoffs.

**Paper or page:** [On almost convergence on locally compact abelian groups](https://arxiv.org/abs/2301.01672). It says: “If w\*-limₐ ψₐ = ψ, namely, {ψₐ} converge to ψ in the weak\* sense, then we have sp(ψ) ⊆ A.”

**Sources:**

- [Ryoichi Kunisada, On almost convergence on locally compact abelian groups](https://arxiv.org/abs/2301.01672)

### Consecutive differences transfer spectral synthesis

**Remember:** Consecutive differences record exactly what a common right shift leaves unchanged.

*Makes the theorem clean to state or prove.* MSC 43A45 (Spectral synthesis on groups, semigroups, etc.), 43A30. arXiv math.FA. Level 4: research.

**Definition.** For a closed E ⊆ Gⁿ in a compact group, define its lift by the consecutive difference map. A tuple (x₁,…,xₙ₊₁) belongs to the lift exactly when (x₁x₂⁻¹,…,xₙxₙ₊₁⁻¹) belongs to E.

**Problem.** Spectral synthesis means algebra functions vanishing on the set are norm limits of algebra functions vanishing on neighborhoods of it. E admits spectral synthesis for Aⁿ(G) exactly when its lift does for Aⁿ⁺¹(G).

**How the definition helps.** Our own explanation is that the lift gives both vanishing conditions the same meaning in difference coordinates. The paper proves that composing with the difference map preserves norms and identifies functions unchanged by common right translations. Its transfer theorem handles approximation by functions vanishing on neighborhoods.

**Paper or page:** [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349), [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349), [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349). It says: “The set E is a set of spectral synthesis for Aⁿ(G) if and only if E\* is a set of spectral synthesis for Aⁿ⁺¹(G).”

**Sources:**

- [Kanupriya, N. Shravan Kumar, Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349)

### Discreteness guarantees abelian spectral synthesis

**Remember:** Finite cutoffs leave all required zeros untouched.

*Rules out counterexamples.* MSC 43A45 (Spectral synthesis on groups, semigroups, etc.). arXiv math.FA. Level 4: research.

**Definition.** For a locally compact abelian group G, A(G) consists of Fourier transforms of integrable functions on the dual group, with their L¹ norm. A closed E admits spectral synthesis if every A(G) function vanishing on E admits norm approximation by A(G) functions compactly supported outside E.

**Problem.** Every subset of a discrete abelian group has spectral synthesis. This is not true of all closed sets on the circle.

**How the definition helps.** On a discrete group, multiplying by a finitely supported function preserves every required zero and gives compact support (our own). Leptin’s theorem and density provide such multipliers whose products converge to each function in the algebra norm (our own). The cited equivalence also gives a closed set on the circle where synthesis fails.

**Paper or page:** [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349). It says: “Let G be a locally compact abelian group. Then every closed subset of Gⁿ is a set of spectral synthesis for Aⁿ(G) if and only if G is discrete.”

**Sources:**

- [Paul Malliavin, Impossibilité de la synthèse spectrale sur les groupes abéliens non compacts (1959)](https://doi.org/10.1007/bf02684707)

### Frequency bands reconstruct modulo polynomials

**Remember:** Bands that miss zero cannot see polynomials.

*Rules out counterexamples.* MSC 43A70 (Analysis on specific locally compact and other abelian groups), 42B25. arXiv math.CA, math.FA. Level 4: research.

**Definition.** A tempered distribution on the integers acts continuously on rapidly decreasing test sequences. Treat distributions that differ by a polynomial sequence as the same object.

**Problem.** Use a smooth dyadic partition of unity on positive frequencies of the square root of the discrete Laplacian. The resulting bands of every tempered distribution on ℤ sum to that distribution modulo polynomial sequences.

**How the definition helps.** The partition sums to one away from zero, so any missing Fourier distribution is supported at zero (our own). Such distributions correspond to polynomial sequences, including the constant sequence that every band kills. On smooth periodic tests flat at zero, dyadic truncations converge in every derivative because Taylor estimates dominate the cutoff derivatives. Testing against these functions gives convergence modulo polynomials.

**Paper or page:** [Hardy spaces, Besov spaces and Triebel–Lizorkin spaces associated with a discrete Laplacian and applications](https://arxiv.org/abs/2411.19399v1). It says: “in 𝒮′(ℤ)/𝒫(ℤ).”

**Sources:** none listed. No primary source with a working link was found.
