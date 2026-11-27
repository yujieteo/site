### Logarithms linearize Mellin convolution

**Remember:** Logarithms turn division into subtraction and ratios into lengths.

*True by definition.* MSC 43A32 (Other transforms and operators of Fourier type), 43A70. arXiv math.CA. Level 2: later undergraduate.

**Definition.** Define convolution on the positive numbers by integrating f(y)g(x/y) against dy/y. The measure dy/y counts equal ratios equally, unlike ordinary length dy.

**Problem.** Suppose f and g are integrable against dx/x on the positive half-line. Logarithmic coordinates turn their convolution into ordinary convolution. Its Mellin transform on the imaginary axis equals the product of their transforms.

**How the definition helps.** The measure dy/y becomes ordinary length under y = exp(u), so the integral becomes ordinary convolution. In our own proof, the Mellin kernel at imaginary parameter iξ becomes exp(iξu). The Fourier convolution theorem now gives the product formula.

**Wikipedia:** [Mellin transform](https://en.wikipedia.org/wiki/Mellin_transform). It says: “Notice that dx/x is a Haar measure on the multiplicative group ℝ₊× and x ↦ xˢ is a (generally non-unitary) multiplicative character.”

**Sources:** none listed. No primary source with a working link was found.

### Compact kernels let Haar measure descend

**Remember:** A quotient can inherit volume directly when each fiber has unit volume.

*Rules out counterexamples.* MSC 43A05 (Measures on groups and semigroups, etc.). arXiv math.FA. Level 3: graduate.

**Definition.** Haar measure is a nonzero regular measure invariant under left translations and finite on compact sets. Start with a locally compact group whose topology has a countable base. Form its quotient by a compact normal subgroup N, and normalize Haar measure on N to total mass one.

**Problem.** Pushing Haar measure to the quotient by a compact normal subgroup gives Haar measure. Without compactness the pushforward can be infinite on every nonempty open set.

**How the definition helps.** Our own explanation is that compactness gives each fiber finite volume, while left invariance passes through the quotient map. Weil’s integration formula separates integration along the fibers from integration over the quotient. With fiber mass one, it identifies the measure of a preimage with the quotient measure. For ℝ modulo ℤ, each open arc lifts to infinitely many intervals of equal positive length.

**Paper or page:** [Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005), [Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005). It says: “μ(π⁻¹(E)) = λ(N)ν(E)”

**Sources:**

- [M. Anoussis, G. K. Eleftherakis, A. Katavolos, Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005)

### Open images preserve Haar null preimages

**Remember:** An open image gives the pushed measure room in the target.

*Rules out counterexamples.* MSC 43A05 (Measures on groups and semigroups, etc.), 43A85. arXiv math.FA. Level 3: graduate.

**Definition.** Take a continuous homomorphism between locally compact groups whose topologies have countable bases. Require its image to be open in the target. Haar measure is a nonzero regular measure invariant under left translations and finite on compact sets.

**Problem.** The preimage of every target Haar-null set is Haar-null exactly when the homomorphism has open image.

**How the definition helps.** An open image carries the restriction of target Haar measure, up to a constant, and integration along the kernel then shows that preimages of null sets are null (our own explanation). Conversely, the image is a countable union of compact sets and its preimage is the whole group, so preserving null sets forces the image to have positive measure. A measurable subgroup of positive Haar measure is open. For our own counterexample, the inclusion of ℤ in ℝ pulls the null set {0} back to a set of counting measure one.

**Paper or page:** [Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005). It says: “The following are equivalent: (i) θ∗(μ) ≪ ν (ii) θ(G) is an open subgroup of H.”

**Sources:**

- [M. Anoussis, G. K. Eleftherakis, A. Katavolos, Synthetic properties of locally compact groups: preservation and transference](https://arxiv.org/abs/2111.12005)

### Unimodularity makes inversion measure-preserving

**Remember:** Inversion swaps the two sides of Haar invariance.

*Rules out counterexamples.* MSC 43A05 (Measures on groups and semigroups, etc.). arXiv math.FA. Level 3: graduate.

**Definition.** On a locally compact Hausdorff group, a left Haar measure is a nonzero regular Borel measure, finite on compact sets and invariant under left translations. The group is unimodular if right translations also preserve that measure.

**Problem.** Inversion preserves left Haar measure exactly when the group is unimodular.

**How the definition helps.** Inversion exchanges left and right translations, so it takes a left Haar measure to a right Haar measure (our own). In a unimodular group, uniqueness gives a positive scalar relating these measures (our own). Applying inversion twice squares the scalar and restores the measure, so the scalar is one (our own). Conversely, inversion invariance gives right invariance (our own).

**nLab:** [Haar integral](https://ncatlab.org/nlab/show/Haar+integral). It says: “The left and the right Haar measure may or may not coincide, groups for which they coincide are called unimodular.”

**Sources:** none listed. No primary source with a working link was found.

### Amenability gives invariant measures through its fixed-point definition

**Remember:** An invariant measure is a fixed point for the action on probability measures.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 37A15. arXiv math.GR, math.DS. Level 3: graduate.

**Definition.** A locally compact group G is amenable if every continuous action of G by affine maps on a nonempty compact convex subset of a locally convex space has a fixed point. Day's theorem shows that this is equivalent to the existence of a left-invariant mean on bounded right uniformly continuous functions.

**Problem.** If an amenable group acts continuously on a nonempty compact metric space X, then X has an invariant Borel probability measure.

**How the definition helps.** The fixed-point definition gives an invariant measure by making measures the points of a convex set (our own). Probability measures are compact in the topology of convergence of integrals against continuous functions, by the Riesz representation and Banach–Alaoglu theorems. The group acts continuously by transporting measures along its maps on X, and it preserves convex combinations. A fixed point of this action is an invariant measure. The work goes into Day’s theorem, which turns a left-invariant mean into the fixed-point property.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “Fixed-point property. Any action of the group by continuous affine transformations on a compact convex subset of a (separable) locally convex topological vector space has a fixed point.”

**Sources:**

- [M. M. Day, Fixed-point theorems for compact convex sets, Illinois J. Math. 5 (1961) 585–590](https://doi.org/10.1215/ijm/1255631582)

### Amenable groups explain why Banach–Tarski needs three dimensions

**Remember:** A group with an invariant mean cannot double a ball.

*Makes the theorem clean to state or prove.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 20F65. arXiv math.GR, math.FA. Level 3: graduate.

**Definition.** A discrete group G is amenable if there is a finitely additive probability measure on all subsets of G that is invariant under left translation.

**Problem.** Banach–Tarski: a ball in ℝ³ can be cut into finitely many pieces and moved by rigid motions into two copies of itself. No such paradox exists for a disc in the plane or an interval on the line.

**How the definition helps.** The definition names the property of the group of motions that blocks paradoxes, so the difference between dimensions becomes a statement about groups. The rotation group SO(3) contains a free group on two generators, which is not amenable. The groups of rigid motions of the line and the plane are solvable, hence amenable, and an invariant mean rules out a paradoxical decomposition (our own). Tarski later proved that a paradoxical decomposition exists exactly when no invariant finitely additive measure exists (our own).

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group), [Paradoxical set](https://en.wikipedia.org/wiki/Paradoxical_set). It says: “The critical step in the Banach–Tarski paradox construction is to find inside the rotation group SO(3) a free subgroup on two generators. Amenable groups cannot contain such groups, and do not allow this kind of paradoxical construction.”

**Sources:**

- [J. von Neumann, Zur allgemeinen Theorie des Masses, Fundamenta Mathematicae 13 (1929) 73–116](https://doi.org/10.4064/fm-13-1-73-116)

### Coset representatives transfer invariant means

**Remember:** Copy a function across cosets before taking the average.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups). arXiv math.FA. Level 3: graduate.

**Definition.** For a discrete group, use a left-invariant mean, a positive normalized linear average on all bounded functions. To extend a function from a subgroup H, choose a representative t for each coset Ht and give ht the value at h.

**Problem.** Every subgroup of an amenable discrete group is amenable.

**How the definition helps.** Our own explanation extends functions across right cosets, so the group mean can average a function defined only on H. The extension respects left shifts by H, preserves positivity and takes the constant one to one. Composing it with the group mean gives the required subgroup mean. Directly restricting an invariant finitely additive probability could give H mass zero.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “Every (closed) subgroup of an amenable group is amenable.”

**Sources:**

- [Mahlon M. Day, Amenable semigroups (1957)](https://doi.org/10.1215/ijm/1255380675)

### Directed unions preserve amenability

**Remember:** Each finite translation test fits inside one subgroup.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups). arXiv math.FA. Level 3: graduate.

**Definition.** A discrete group satisfies the Følner condition if, for every finite set of elements g and every ε &gt; 0, some nonempty finite set F has \|gF △ F\| &lt; ε\|F\| for each listed g. Følner's theorem shows that this is equivalent to having a translation-invariant mean.

**Problem.** A directed union of amenable discrete subgroups is amenable. Directed means any two subgroups in the family lie in a third.

**How the definition helps.** Our own explanation is that a finite list of translations lies inside one subgroup, whose finite witness also works in the union. The work is Følner’s theorem equating these tests with the invariant mean definition.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “if a group can be written as a directed union of amenable subgroups, then it is amenable.”

**Sources:**

- [Erling Følner, On groups with full Banach mean value (1955)](https://doi.org/10.7146/math.scand.a-10442)

### Fixed points preserve amenable extensions

**Remember:** Fix the normal subgroup first, then let the quotient act.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups). arXiv math.FA. Level 3: graduate.

**Definition.** Day's fixed-point test says that a locally compact group is amenable when every separately continuous affine action on a nonempty compact convex subset of a locally convex space has a fixed point. Day's theorem shows that this is equivalent to the usual definition by a translation-invariant mean.

**Problem.** A locally compact group with a closed normal amenable subgroup and an amenable quotient is amenable.

**How the definition helps.** The subgroup’s fixed points form a nonempty compact convex set, so the same test applies again (our own). Normality preserves this set under the whole group, and the subgroup acts trivially there (our own). The resulting quotient action has a fixed point, which the whole group fixes (our own). Day’s theorem connects this argument to the invariant average.

**Paper or page:** [Amenability of group actions on compact spaces and the associated Banach algebras](https://arxiv.org/abs/2504.08357). It says: “then K has a G–fixed point.”

**Sources:**

- [Mahlon M. Day, Fixed-point theorems for compact convex sets (1961)](https://doi.org/10.1215/ijm/1255631582)

### Følner overlaps give positive definite coefficients

**Remember:** The overlap of a set with its translate is a positive definite coefficient.

*True by definition. Confidence: medium.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 43A35. arXiv math.FA. Level 3: graduate.

**Definition.** Use the Følner definition of amenability for a discrete group. For any finite list of translations, one can choose a nonempty finite set F with arbitrarily small relative change under each translation. Define φ(g) as the fraction of F contained in gF.

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

**Definition.** Use amenability in the form of a right-invariant mean, a positive normalized linear average unchanged by right shifts. Give two vectors a new inner product by taking the mean of the old inner products of their translates.

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

**Definition.** A discrete group satisfies the Følner condition if every finite set of shifts admits a nonempty finite set changed by arbitrarily small proportions. The change under g is \|gS Δ S\| divided by \|S\|, where Δ collects the elements in exactly one of the two sets. The other definition asks for an invariant mean, a positive normalized linear functional on bounded functions unchanged by translation.

**Problem.** The integers are amenable. So are finitely generated groups of subexponential growth, meaning their balls in a finite generating set grow more slowly than every exponential.

**How the definition helps.** The Følner definition reduces amenability to finding finite sets that change little under shifts. In ℤ, shifting {1, …, n} by g changes at most 2\|g\| elements (our own). In a group of subexponential growth, for each k there are arbitrarily large r at which the ball of radius r + k is barely larger than the ball of radius r, or else sizes would grow exponentially (our own). A shift of length at most k moves the smaller ball into the larger, so its relative change is small (our own).

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “The group of integers is amenable (a sequence of intervals of length tending to infinity is a Følner sequence).”

**Sources:** none listed. No primary source with a working link was found.

### Weak containment equates group completions

**Remember:** If no representation gives a larger norm, both completions use the same norm.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 22D25. arXiv math.FA. Level 3: graduate.

**Definition.** A unitary representation acts on a Hilbert space by inner-product-preserving maps. Integrating the action against an integrable group function gives an operator. One characterization of amenability says that its operator norm never exceeds the corresponding norm for left translation on square-integrable functions. This comparison, for every continuous unitary representation, is called weak containment in left translation.

**Problem.** For a locally compact amenable group, the full and reduced group C\*-algebras agree under the canonical map. These algebras complete the convolution algebra of integrable functions using two operator norms.

**How the definition helps.** Our own explanation is that weak containment gives exactly the missing comparison between the two norms. The full norm takes the supremum over continuous unitary representations. The reduced norm uses only left translation, so it cannot exceed the full norm. Weak containment gives the reverse inequality. Hulanicki’s theorem identifies this comparison with amenability defined by an invariant mean.

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

**How the definition helps.** Our own explanation uses vanishing at infinity to make translates tend pointwise to zero as group elements escape every compact set. All translates of a nonzero function have the same positive supremum norm. In a finite-dimensional space, compactness of the closed norm ball would give a subnet converging in norm, necessarily to zero. On a compact group, constants give the required space. If one allows bounded continuous functions instead, constants also work on ℝ.

**Paper or page:** [The ideal structure of measure algebras and asymptotic properties of group representations](https://arxiv.org/abs/2106.07526). It says: “contains a non-zero finite-dimensional linear subspace invariant under left translation if and only if G is compact.”

**Sources:**

- [Jared T. White, The ideal structure of measure algebras and asymptotic properties of group representations](https://arxiv.org/abs/2106.07526)

### Haar correction gives convolution adjoints

**Remember:** Invert the measure, not just the value of its density.

*Rules out counterexamples.* MSC 43A20 (\\(L<sup>1\\</sup>)-algebras on groups, semigroups, etc.), 43A05. arXiv math.FA. Level 3: graduate.

**Definition.** Left Haar measure is invariant under left translations. To take the adjoint of an integrable density, first invert the group elements and conjugate the associated measure. Express the result as a density for the original left Haar measure.

**Problem.** On a locally compact group, left convolution by the adjoint density gives the adjoint operator on square-integrable functions.

**How the definition helps.** Inverting the whole measure includes the change in volume when inversion exchanges left and right Haar measures. In our own proof, each left translation preserves inner products, so its adjoint translates by the inverse element. Integrating this identity gives the operator formula. On the group of maps x ↦ ax + b with a positive, inversion changes left Haar measure. Simply conjugating the density at the inverse element therefore fails in our own example.

**nLab:** [Haar integral](https://ncatlab.org/nlab/show/Haar+integral). It says: “The left and the right Haar measure may or may not coincide, groups for which they coincide are called unimodular.”

**Wikipedia:** [Group algebra of a locally compact group](https://en.wikipedia.org/wiki/Group_algebra_of_a_locally_compact_group). It says: “where Δ is the modular function on G. With this involution, it is a \*-algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Integrable convolution identities require discreteness

**Remember:** An identity needs a point mass, not just a density.

*Rules out counterexamples.* MSC 43A20 (\\(L<sup>1\\</sup>)-algebras on groups, semigroups, etc.), 43A10. arXiv math.FA. Level 3: graduate.

**Definition.** The group algebra consists of integrable densities for Haar measure, the measure preserved by left translations. The measure algebra also contains point masses. Multiplication in both algebras is convolution, which averages translates.

**Problem.** The group algebra of a locally compact group has an identity exactly when the group is discrete.

**How the definition helps.** Allowing measures makes the point mass at the group identity a convolution identity. In our own proof, normalized densities on shrinking identity neighborhoods converge to that mass when tested against continuous functions of compact support. Convolving those densities with an integrable identity leaves them unchanged and also converges to that identity. Thus an integrable identity must represent the point mass. This mass has a density exactly when a singleton has positive Haar measure, which happens exactly for discrete groups.

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

**How the definition helps.** Compactness makes the constant functions square integrable, and a unit constant vector gives the coefficient one (our own). At any g, choose a unit vector u and set v = λ(g)u to obtain a coefficient equal to one there (our own). Any identity must therefore equal one everywhere (our own). Compactly supported vectors give compactly supported coefficients and approximate every coefficient uniformly (our own). Thus every coefficient vanishes at infinity, excluding the constant one on a noncompact group (our own).

**Wikipedia:** [Fourier algebra](https://en.wikipedia.org/wiki/Fourier_algebra). It says: “We define the Fourier algebra A(G) to be the closed subalgebra spanned by the matrix coefficients of the left regular representation of G on L²(G).”

**Sources:**

- [Pierre Eymard, L’algèbre de Fourier d’un groupe localement compact (1964)](https://doi.org/10.24033/bsmf.1607)

### Tensor products multiply Fourier–Stieltjes coefficients

**Remember:** Tensor both actions and both pairs of vectors to multiply coefficients.

*True by definition.* MSC 43A30 (Fourier and Fourier-Stieltjes transforms on nonabelian groups and on semigroups, etc.), 43A65. arXiv math.FA. Level 3: graduate.

**Definition.** A unitary representation is a continuous group action on a Hilbert space by linear operators preserving inner products. Each coefficient pairs a translated vector with a fixed vector. The Fourier–Stieltjes algebra consists of all such coefficient functions. On abelian groups, an equivalent definition uses Fourier transforms of finite measures on the group of characters.

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

**How the definition helps.** Our own explanation is that cyclicity lets the function determine inner products on a dense span. Matching translates preserves all inner products there and extends uniquely to a unitary map of the whole spaces. The Gelfand–Naimark–Segal construction supplies existence by completing the span after removing vectors of length zero. Without cyclicity, an extra orthogonal summand leaves the function unchanged. For example, the constant one comes from the trivial action on either ℂ or ℂ² with a chosen unit vector.

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

**Definition.** The dual of a locally compact abelian group consists of its continuous homomorphisms to the unit circle, called characters. Give it the topology of uniform convergence on compact sets. The dual of a map sends a character to its composition with that map. Identify a point x with the function χ ↦ χ(x) on the dual.

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

**How the definition helps.** The limit definition supplies small open subgroups directly (our own). By continuity, a character sends one of these subgroups into a small arc about 0 (our own). No nontrivial subgroup of the circle fits inside that arc, so the character vanishes on the subgroup and factors through a finite quotient (our own). With only the compact and disconnected definition, the work is to prove that open normal subgroups form a basis (our own). That is the key step in recovering the inverse limit description (our own).

**nLab:** [Pontryagin duality for torsion abelian groups](https://ncatlab.org/nlab/show/Pontryagin+duality+for+torsion+abelian+groups). It says: “Notice that for G a profinite group then hom(G,ℝ/ℤ) ≃ hom(G,ℚ/ℤ)”

**Sources:** none listed. No primary source with a working link was found.

### The compact-open topology makes duals of compact abelian groups discrete

**Remember:** Uniform closeness to the constant character forces equality on a compact group.

*True by definition.* MSC 43A40 (Character groups and dual objects), 22B05. arXiv math.FA, math.GR. Level 3: graduate.

**Definition.** A character of a topological abelian group G is a continuous homomorphism into the circle group of complex numbers of modulus 1. Its dual Ĝ is the group of characters under pointwise multiplication. The compact-open topology on Ĝ measures uniform closeness on each compact subset of G.

**Problem.** The dual of a compact Hausdorff abelian group is discrete.

**How the definition helps.** For compact G, the compact-open topology tests closeness on the whole group at once, so the characters with all values within distance 1 of 1 form an open set. No nontrivial subgroup of the circle lies in that arc, so the only such character is the constant 1, which is therefore isolated (our own). Multiplication by a character carries this to every other character (our own). Pointwise convergence would not suffice: on the circle group, by the pigeonhole principle, some nonzero power is close to 1 at any finite set of points (our own).

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality). It says: “That G being compact implies Ĝ is discrete or that G being discrete implies that Ĝ is compact is an elementary consequence of the definition of the compact-open topology on Ĝ and does not need Pontryagin duality.”

**Sources:**

- [L. Pontrjagin, The theory of topological commutative groups, Annals of Mathematics 35 (1934)](https://doi.org/10.2307/1968438)

### The compact-open topology makes duals of discrete abelian groups compact

**Remember:** Characters of a discrete group form a closed subset of a compact product.

*True by definition.* MSC 43A40 (Character groups and dual objects), 22B05, 54D30. arXiv math.FA, math.GR. Level 3: graduate.

**Definition.** A character of a discrete abelian group G is a homomorphism to the circle group T of complex numbers of modulus 1. The dual Ĝ is the group of characters with the compact-open topology, which tests uniform closeness on compact sets. Compact subsets of G are finite, so this is the topology of pointwise convergence.

**Problem.** Every discrete abelian group has a compact dual.

**How the definition helps.** The compact-open topology identifies Ĝ with a closed subspace of the product of one circle for each element of G, which is compact by Tychonoff's theorem. Each equation χ(x + y) = χ(x)χ(y) is a closed condition on three coordinates, and these equations cut out exactly the characters (our own). Uniform convergence on all of G would isolate every character by the circle arc argument, so an infinite dual would not be compact (our own). The work lies in Tychonoff's theorem, not in the duality theorem (our own).

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality). It says: “That G being compact implies Ĝ is discrete or that G being discrete implies that Ĝ is compact is an elementary consequence of the definition of the compact-open topology on Ĝ and does not need Pontryagin duality.”

**Sources:**

- [L. Pontrjagin, The theory of topological commutative groups, Annals of Mathematics 35 (1934)](https://doi.org/10.2307/1968438)

### Hilbert coefficients have weakly compact orbits

**Remember:** Translate the coefficient by moving a vector inside a weakly compact ball.

*True by definition.* MSC 43A60 (Almost periodic functions on groups and semigroups and their generalizations (recurrent functions, distal functions, etc.); almost automorphic functions), 43A30. arXiv math.FA. Level 3: graduate.

**Definition.** A bounded continuous group function is weakly almost periodic when the weak closure of its translation orbit is compact. Weak convergence tests all bounded linear functionals on the space of bounded continuous functions. Define the Fourier–Stieltjes algebra of a locally compact group by the coefficients g ↦ ⟨π(g)u,v⟩ of continuous unitary actions on Hilbert spaces.

**Problem.** Every Fourier–Stieltjes function is weakly almost periodic.

**How the definition helps.** Our own explanation uses the coefficient definition to control every right translate by moving just the vector u. Its translates lie in a fixed Hilbert ball because the action preserves norms. The map from a vector to its coefficient is bounded and linear, so it takes weakly compact sets to weakly compact sets. Closed Hilbert balls are weakly compact. Starting from the alternative definition as the dual of the full group C\*-algebra requires the theorem identifying its functionals with coefficients.

**Wikipedia:** [Almost periodic function](https://en.wikipedia.org/wiki/Almost_periodic_function). It says: “A function on a locally compact group is called weakly almost periodic if its orbit is weakly relatively compact in L∞.”

**Paper or page:** [Power boundedness in Fourier and Fourier-Stieltjes algebra of an ultraspherical hypergroup](https://arxiv.org/abs/2309.11074). It says: “Let H be a locally compact hypergroup with a Haar measure. Then B(H) ⊂ wap(H).”

**Sources:**

- [Pierre Eymard, L’algèbre de Fourier d’un groupe localement compact (1964)](https://doi.org/10.24033/bsmf.1607)

### Matching modular functions permits quotient volume

**Remember:** Fiber rescaling must match ambient rescaling to leave quotient volume unchanged.

*Rules out counterexamples.* MSC 43A85 (Harmonic analysis on homogeneous spaces), 43A05. arXiv math.FA. Level 3: graduate.

**Definition.** The modular function of a locally compact group records how right translation rescales its left Haar measure, using one convention for both groups. For a closed subgroup H of G, require the two modular functions to agree on H.

**Problem.** The space of left cosets G/H has a nonzero left-invariant Radon measure exactly when the modular functions agree on H. A Radon measure is locally finite and regular.

**How the definition helps.** Our own explanation is that matching the two volume changes lets integration along a coset agree with integration on the group. The quotient integration theorem proves this condition is sufficient. For our own counterexample, use the group of maps x ↦ ax + b with a &gt; 0. Its quotient by the subgroup of dilations is the real line, via evaluation at zero. Translation invariance forces a nonzero regular volume to be a multiple of Lebesgue measure, which dilations rescale.

**Wikipedia:** [Haar measure](https://en.wikipedia.org/wiki/Haar_measure). It says: “an invariant measure on G/H exists if and only if the modular function Δ of G restricted to H is the modular function δ of H.”

**Sources:** none listed. No primary source with a working link was found.

### Conjugate symbols give spherical adjoints

**Remember:** Conjugate the symbol to take the adjoint.

*True by definition.* MSC 43A90 (Harmonic analysis and spherical functions), 43A22. arXiv math.FA. Level 3: graduate.

**Definition.** A Gelfand pair consists of a locally compact group G and a compact subgroup K with the following property. Convolution commutes for integrable functions unchanged by left and right translations by K. The spherical Fourier transform expresses such functions in frequency variables. A spherical multiplier transforms the function, multiplies by a bounded measurable symbol, then transforms back.

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

**How the definition helps.** Our own explanation uses the measure definition to test commutativity without decomposing representations. Averaging over K on both sides of x gives the unique invariant probability on its double coset. Reversal preserves that probability and therefore fixes every invariant measure by double averaging. Reversal exchanges the two factors of a convolution, but their convolution is itself invariant. The two orders therefore give the same measure.

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

**Remember:** Measure density with compact enlargements, then squeeze between interior and closure.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 52C23. arXiv math.GR, math.DS. Level 4: research.

**Definition.** A model set comes from a lattice L in a product G × H of locally compact groups. It keeps the G-coordinates of the lattice points whose H-coordinate lies in a set W, called the window. Leptin densities measure mass per unit of Haar measure. They compare a measure on enlarged sets KA with the volume of A, for compact K and A.

**Problem.** Let G be amenable and let the window W be regular, meaning its boundary has Haar measure zero. Then the model set has density equal to the Haar measure of W divided by the covolume of L. The covolume is the volume of a fundamental domain of L.

**How the definition helps.** In our own reading, Leptin densities need no averaging sequence of sets, so the proof can work directly with fundamental domains of the lattice. The paper bounds both Leptin densities between the Haar measures of the interior and closure of W, divided by the covolume. For a regular window these bounds agree, which gives the formula. On unimodular amenable groups, where left and right Haar measures agree, Leptin densities equal the classical Beurling densities.

**Paper or page:** [Leptin densities in amenable groups](https://arxiv.org/abs/2107.04760v2), [Leptin densities in amenable groups](https://arxiv.org/abs/2107.04760v2). It says: “We use Leptin densities for a geometric proof of the model set density formula, which expresses the density of a uniform regular model set in terms of the volume of its window”

**Sources:**

- [Felix Pogorzelski, Christoph Richard, Nicolae Strungaru, Leptin densities in amenable groups, arXiv:2107.04760v2 (2021)](https://arxiv.org/abs/2107.04760v2)

### Finite Brascamp–Lieb bounds require properness

**Remember:** Keep joint preimages compact before trying to bound the product integral.

*Rules out counterexamples.* MSC 43A15 (\\(L<sup>p\\</sup>)-spaces and other function spaces on groups, semigroups, etc.), 43A25. arXiv math.FA. Level 4: research.

**Definition.** A Brascamp–Lieb inequality bounds an integral of a product by a product of norms. Each factor is pulled back along a homomorphism of locally compact abelian groups. Require the joint map into the product to be proper, meaning that preimages of compact sets are compact.

**Problem.** A finite Brascamp–Lieb constant requires the joint map to be proper. For instance, the map from ℝ to the circle given by t ↦ exp(it) fails even the one-factor inequality with exponent one.

**How the definition helps.** Our own example shows how a noncompact preimage defeats the bound. The constant function one has finite integral on the circle, but its pullback has infinite integral on ℝ. The cited theorem proves that every nonproper joint map forces an infinite constant.

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

**Problem.** Let Ω₊ and Ω₋ be boundary-coherent symmetric subsets of a locally compact abelian group, with Ω₊ a neighborhood of 0. For a continuous real function, the positive set lies in Ω₊ and the negative set in Ω₋ exactly when they lie in the closures of Ω₊ and Ω₋.

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

**Definition.** A positive definite function gives positive semidefinite matrices with entries φ(x⁻¹y). Assume it is continuous and equals one at the identity. Call it adapted if it equals one nowhere else. Call it strictly aperiodic if its modulus equals one nowhere else.

**Problem.** On a discrete group, multiplication by successive powers of a strictly aperiodic function converges on each Fourier algebra vector in its norm. The limit multiplies by the indicator of the identity.

**How the definition helps.** Our own explanation is that strict aperiodicity forces scalar powers to decay at every point except the identity. The Fourier algebra consists of coefficients of left translation on square-summable functions. The cited theorem upgrades the scalar limit to norm convergence after multiplication by each fixed Fourier algebra function. On the two-element group, the sign character is adapted, but its powers alternate at the nonidentity element.

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

**Definition.** Start with a closed set E of n-tuples in a compact group G. Its lift contains exactly those longer tuples whose list of consecutive differences belongs to E. For neighboring entries x and y, the difference is xy⁻¹. A common right translation leaves every difference unchanged.

**Problem.** A closed set of tuples admits spectral synthesis when every function in the multidimensional Fourier algebra vanishing on it is a norm limit of functions vanishing near it. Then E admits spectral synthesis for Aⁿ(G) exactly when its lift admits spectral synthesis for Aⁿ⁺¹(G).

**How the definition helps.** Our own explanation is that the lift gives both vanishing conditions the same meaning in difference coordinates. The paper proves that composing with the difference map preserves norms and identifies functions unchanged by common right translations. Its transfer theorem handles approximation by functions vanishing on neighborhoods.

**Paper or page:** [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349), [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349), [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349). It says: “The set E is a set of spectral synthesis for Aⁿ(G) if and only if E\* is a set of spectral synthesis for Aⁿ⁺¹(G).”

**Sources:**

- [Kanupriya, N. Shravan Kumar, Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349)

### Discreteness guarantees abelian spectral synthesis

**Remember:** Finite cutoffs leave all required zeros untouched.

*Rules out counterexamples.* MSC 43A45 (Spectral synthesis on groups, semigroups, etc.). arXiv math.FA. Level 4: research.

**Definition.** For an abelian group, the Fourier algebra consists of transforms of integrable functions on its group of continuous circle-valued characters. Use Haar measure, the translation-invariant regular measure, on the character group. The algebra norm is the integral of the absolute value of the function transformed. A closed set admits spectral synthesis if every algebra function vanishing there is a norm limit of functions supported on compact sets disjoint from it.

**Problem.** Every subset of a discrete abelian group has spectral synthesis. This is not true of all closed sets on the circle.

**How the definition helps.** On a discrete group, multiplying by a finitely supported function preserves every required zero and gives compact support (our own). Leptin’s theorem and density provide such multipliers whose products converge to each function in the algebra norm (our own). The cited equivalence also gives a closed set on the circle where synthesis fails.

**Paper or page:** [Spectral synthesis in multidimensional Fourier algebras](https://arxiv.org/abs/2501.04349). It says: “Let G be a locally compact abelian group. Then every closed subset of Gⁿ is a set of spectral synthesis for Aⁿ(G) if and only if G is discrete.”

**Sources:**

- [Paul Malliavin, Impossibilité de la synthèse spectrale sur les groupes abéliens non compacts (1959)](https://doi.org/10.1007/bf02684707)

### Frequency bands reconstruct modulo polynomials

**Remember:** Bands that miss zero cannot see polynomials.

*Rules out counterexamples.* MSC 43A70 (Analysis on specific locally compact and other abelian groups), 42B25. arXiv math.CA, math.FA. Level 4: research.

**Definition.** A tempered distribution on the integers acts continuously on rapidly decreasing test sequences. Treat distributions that differ by a polynomial sequence as the same object.

**Problem.** Split the frequencies of the square root of the discrete Laplacian into smooth bands by powers of two. Then the band pieces of each tempered distribution on ℤ sum to it modulo polynomial sequences.

**How the definition helps.** Identifying polynomial differences removes precisely what every band misses at frequency zero. In our own example, every band sends the constant sequence to zero. The proof still needs convergence against test sequences whose moments all vanish. In our own explanation, the missing distributions have Fourier transforms supported at zero, hence are polynomial sequences.

**Paper or page:** [Hardy spaces, Besov spaces and Triebel–Lizorkin spaces associated with a discrete Laplacian and applications](https://arxiv.org/abs/2411.19399v1). It says: “in 𝒮′(ℤ)/𝒫(ℤ).”

**Sources:** none listed. No primary source with a working link was found.
