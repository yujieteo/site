### Amenability gives invariant measures through its fixed-point definition

**Remember:** An invariant measure is a fixed point for the action on probability measures.

*True by definition.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 37A15. arXiv math.GR, math.DS. Level 3: graduate.

**Definition.** A locally compact group G is amenable if it admits a left-invariant mean on bounded right uniformly continuous functions. These are functions for which small left translations make uniformly small changes. The mean is a positive linear functional that sends the constant one to one and is unchanged by left translation. Equivalently, every continuous action preserving convex combinations on a nonempty compact convex subset of a locally convex space has a fixed point.

**Problem.** If an amenable group acts continuously on a nonempty compact metric space X, then X has an invariant Borel probability measure.

**How the definition helps.** The fixed-point definition gives an invariant measure by making measures the points of a convex set (our own). Probability measures are compact in the topology of convergence of integrals against continuous functions, by the Riesz representation and Banach–Alaoglu theorems. The group acts continuously by transporting measures along its maps on X, and it preserves convex combinations. A fixed point of this action is an invariant measure. The work goes into Day’s theorem, which turns a left-invariant mean into the fixed-point property.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “Fixed-point property. Any action of the group by continuous affine transformations on a compact convex subset of a (separable) locally convex topological vector space has a fixed point.”

**Sources:**

- [M. M. Day, Fixed-point theorems for compact convex sets, Illinois J. Math. 5 (1961) 585–590](https://doi.org/10.1215/ijm/1255631582)

### Amenable groups explain why Banach–Tarski needs three dimensions

**Remember:** A group with an invariant mean cannot double a ball.

*Makes the theorem clean to state or prove.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 20F65. arXiv math.GR, math.FA. Level 3: graduate.

**Definition.** A discrete group G is amenable if there is a finitely additive probability measure on all subsets of G that is invariant under left translation. Von Neumann introduced the idea in 1929 in response to the Banach–Tarski paradox. Day named it amenable in 1949.

**Problem.** Banach–Tarski: a ball in ℝ³ can be cut into finitely many pieces and moved by rigid motions into two copies of itself. No such paradox exists for a disc in the plane or an interval on the line.

**How the definition helps.** The definition names the property of the group of motions that blocks paradoxes, so the difference between dimensions becomes a statement about groups. The rotation group SO(3) contains a free group on two generators, which is not amenable. The groups of rigid motions of the line and the plane are solvable, so they are amenable (our own). An invariant mean then rules out a paradoxical decomposition (our own). Tarski later proved that an action has a paradoxical decomposition exactly when no invariant finitely additive measure exists (our own). What stays hard: the converse guess of von Neumann, that every nonamenable group contains a free subgroup, is false, as Olshanskii showed in 1980.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group), [Paradoxical set](https://en.wikipedia.org/wiki/Paradoxical_set). It says: “The critical step in the Banach–Tarski paradox construction is to find inside the rotation group SO(3) a free subgroup on two generators. Amenable groups cannot contain such groups, and do not allow this kind of paradoxical construction.”

**Sources:**

- [J. von Neumann, Zur allgemeinen Theorie des Masses, Fundamenta Mathematicae 13 (1929) 73–116](https://doi.org/10.4064/fm-13-1-73-116)

### Invariant means make quotients of amenable groups amenable

**Remember:** Pull back functions from the quotient to reuse the invariant mean.

*True by definition. Confidence: medium.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups). arXiv math.GR. Level 3: graduate.

**Definition.** A locally compact Hausdorff group is amenable if it admits a left translation invariant mean on its bounded right uniformly continuous real functions. Here right uniform continuity means that f(gx) approaches f(x) as g approaches the identity, uniformly in x. A mean is a positive linear functional that sends the constant 1 to 1.

**Problem.** Let G be amenable and N a closed normal subgroup. Then the quotient G/N is amenable.

**How the definition helps.** The mean definition lets us use the same functional on functions pulled back from the quotient (our own). Pullback preserves right uniform continuity and commutes with left translations (our own). The composite functional is therefore again a translation invariant mean (our own). For discrete groups, the alternative Følner definition uses finite sets nearly invariant under translations (our own). Their images in a quotient may have unequal fibre sizes, so the same direct argument does not apply to those sets (our own). The work lies in the equivalence of the mean and Følner definitions.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “Every quotient of an amenable group is amenable.”

**Sources:**

- [M. M. Day, Amenable semigroups, Illinois Journal of Mathematics 1 (1957)](https://doi.org/10.1215/ijm/1255380675)

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

**How the definition helps.** The Følner definition reduces amenability to finding finite sets with small changes under shifts. In ℤ, shifting {1, …, n} by g changes at most 2\|g\| elements, so the relative change tends to zero (our own). In a group of subexponential growth, a suitable subsequence of balls works. For each fixed k, there are arbitrarily large radii r at which the ball of radius r + k is barely larger (our own). Otherwise the sizes would grow exponentially in steps of length k (our own). A shift of length at most k puts the ball in the larger one, making the change at most twice the size difference (our own). The work lies in Følner’s equivalence with invariant means, which a direct proof for ℤ instead constructs by Hahn–Banach.

**Wikipedia:** [Amenable group](https://en.wikipedia.org/wiki/Amenable_group). It says: “The group of integers is amenable (a sequence of intervals of length tending to infinity is a Følner sequence).”

**Sources:** none listed. No primary source with a working link was found.

### The Gelfand transform makes Fourier transforms vanish at infinity

**Remember:** Identify the two transforms and inherit vanishing at infinity.

*True by definition.* MSC 43A25 (Fourier and Fourier-Stieltjes transforms on locally compact and other abelian groups), 46J05. arXiv math.FA. Level 3: graduate.

**Definition.** The spectrum of a commutative complex Banach algebra is the set of its nonzero multiplicative linear functionals, with convergence tested separately at each algebra element. The Gelfand transform of an element evaluates each functional at that element. The Fourier transform of an integrable function uses its integral against the conjugate of each character, a continuous homomorphism to the circle.

**Problem.** For a locally compact Hausdorff abelian group G, the Fourier transform of each integrable function is continuous on the character group and vanishes at infinity. This means that for every ε &gt; 0, the set where its modulus is at least ε is compact. Its modulus is bounded by the integral of the original function’s modulus.

**How the definition helps.** The Gelfand description gives continuity and vanishing at infinity from one theorem for commutative Banach algebras (our own). The same theorem also bounds each transformed value by the norm of the algebra element (our own). Form the group algebra of integrable functions with convolution, which multiplies functions by averaging their translates against one another. Its nonzero multiplicative functionals are exactly the integrals against conjugate characters. The work lies in proving that correspondence and showing that the spectrum topology agrees with uniform convergence on compact subsets of G (our own). The usual integral proof instead establishes decay by direct estimates and approximation (our own).

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality). It says: “This means the Fourier transform is a special case of the Gelfand transform.”

**Sources:** none listed. No primary source with a working link was found.

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

**How the definition helps.** For compact G, the compact-open topology lets one test closeness on the whole group at once. The characters whose values stay within distance 1 of 1 form an open set. No nontrivial subgroup lies in that arc, since a suitable power of any point other than 1 leaves it (our own). Thus the constant character 1 is isolated, and multiplication by other characters isolates them too (our own). Pointwise convergence does not isolate the constant character on the circle group (our own). On any finite set of circle points, some nonzero power is arbitrarily close to 1 simultaneously, by the pigeonhole principle (our own). The work is in the arc argument and the description of the compact-open topology as uniform convergence on compact sets (our own).

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality). It says: “That G being compact implies Ĝ is discrete or that G being discrete implies that Ĝ is compact is an elementary consequence of the definition of the compact-open topology on Ĝ and does not need Pontryagin duality.”

**Sources:**

- [L. Pontrjagin, The theory of topological commutative groups, Annals of Mathematics 35 (1934)](https://doi.org/10.2307/1968438)

### The compact-open topology makes duals of discrete abelian groups compact

**Remember:** Characters of a discrete group form a closed subset of a compact product.

*True by definition.* MSC 43A40 (Character groups and dual objects), 22B05, 54D30. arXiv math.FA, math.GR. Level 3: graduate.

**Definition.** A character of a discrete abelian group G is a homomorphism to the circle group T of complex numbers of modulus 1. The dual Ĝ is the group of characters with the compact-open topology, which tests uniform closeness on compact sets. Compact subsets of G are finite, so this is the topology of pointwise convergence.

**Problem.** Every discrete abelian group has a compact dual.

**How the definition helps.** The compact-open topology identifies Ĝ with a closed subspace of a compact product. The product has one copy of T for each element of G and is compact by Tychonoff’s theorem. Each equation χ(x + y) = χ(x)χ(y) is a closed condition on three coordinates (our own). These equations give precisely the characters, so the dual is compact (our own). Uniform convergence on all of G would isolate every character by the circle arc argument, so an infinite dual would not be compact (our own). The work in this proof lies in Tychonoff’s theorem, not the duality theorem (our own).

**Wikipedia:** [Pontryagin duality](https://en.wikipedia.org/wiki/Pontryagin_duality). It says: “That G being compact implies Ĝ is discrete or that G being discrete implies that Ĝ is compact is an elementary consequence of the definition of the compact-open topology on Ĝ and does not need Pontryagin duality.”

**Sources:**

- [L. Pontrjagin, The theory of topological commutative groups, Annals of Mathematics 35 (1934)](https://doi.org/10.2307/1968438)

### Leptin densities give a geometric proof of the model set density formula

**Remember:** Measure density with compact enlargements, then squeeze between interior and closure.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 43A07 (Means on groups, semigroups, etc.; amenable groups), 52C23. arXiv math.GR, math.DS. Level 4: research.

**Definition.** A model set comes from a lattice L in a product G × H of locally compact groups. It keeps the G-coordinates of the lattice points whose H-coordinate lies in a set W, called the window. Leptin densities measure mass per unit of Haar measure. They compare a measure on enlarged sets KA with the volume of A, for compact K and A.

**Problem.** Let G be amenable and let the window W be regular, meaning its boundary has Haar measure zero. Then the model set has density equal to the Haar measure of W divided by the covolume of L. The covolume is the volume of a fundamental domain of L.

**How the definition helps.** In our own reading, Leptin densities need no averaging sequence of sets, so the proof can work directly with fundamental domains of the lattice. The paper bounds both Leptin densities between the Haar measures of the interior and closure of W, divided by the covolume. For a regular window these bounds agree, which gives the formula. On unimodular amenable groups, where left and right Haar measures agree, Leptin densities equal the classical Beurling densities.

**Paper or page:** [Leptin densities in amenable groups](https://arxiv.org/abs/2107.04760v2), [Leptin densities in amenable groups](https://arxiv.org/abs/2107.04760v2). It says: “We use Leptin densities for a geometric proof of the model set density formula, which expresses the density of a uniform regular model set in terms of the volume of its window”

**Sources:**

- [Felix Pogorzelski, Christoph Richard, Nicolae Strungaru, Leptin densities in amenable groups, arXiv:2107.04760v2 (2021)](https://arxiv.org/abs/2107.04760v2)
