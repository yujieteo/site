### Marks defined as hom-set sizes make the mark map a ring homomorphism

**Remember:** A pair is fixed exactly when both entries are fixed.

*True by definition.* MSC 19A22 (Frobenius induction, Burnside and representation rings), 20C15. arXiv math.RT, math.GR. Level 3: graduate.

**Definition.** For a finite group G, the Burnside ring is built from finite G-sets, with disjoint union as sum and Cartesian product as product. The H-mark of a G-set X is the number of points that the subgroup H fixes. Write it as the number of G-maps from G/H to X.

**Problem.** For each subgroup H, the H-mark gives a ring homomorphism from the Burnside ring to ℤ.

**How the definition helps.** Evaluation at the identity coset identifies G-maps from G/H with H-fixed points. Maps into a product are pairs of maps, and transitivity forces each map into a disjoint union to land in one summand. The one-point set has mark one, so the count extends to a unital ring map on formal differences (our own explanation).

**nLab:** [table of marks](https://ncatlab.org/nlab/show/table+of+marks). It says: “all other steps use that the mark homomorphism is a ring homomorphism, which we made manifest by expressing the marks via hom-sets”

**Sources:** none listed. No primary source with a working link was found.

### Length classifies Artinian local G₀

**Remember:** Every simple factor contributes one copy of the residue field.

*Rules out counterexamples.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 13D15. arXiv math.KT. Level 3: graduate.

**Definition.** G₀ has one generator \[M\] for each isomorphism class of finitely generated modules. For every finitely generated submodule N impose \[M\] = \[N\] + \[M/N\]. The split group uses only direct sum relations.

**Problem.** Let R be a commutative Artinian local ring. It has one maximal ideal, and descending chains of ideals stabilize. Module length counts the simple factors in a composition series and identifies G₀(R) with ℤ.

**How the definition helps.** The defining relations express each module class as its composition length times the residue-field class (our own proof). Every simple module is the residue field, and length is additive in short exact sequences. Length therefore gives the inverse to the map sending 1 to the residue-field class.

**Paper or page:** [Algebra](https://stacks.math.columbia.edu/tag/00JI). It says: “The map lengthᵣ : K′₀(R) → ℤ”

**Sources:** none listed. No primary source with a working link was found.

### Perfect complexes multiply in K₀

**Remember:** Bounded projective complexes keep tensor products bounded and exact on triangles.

*Rules out counterexamples.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 18F25. arXiv math.KT. Level 3: graduate.

**Definition.** A complex over a commutative ring is perfect if it is quasi-isomorphic to a bounded complex of finitely generated projective modules.

**Problem.** For every commutative ring, derived tensor product gives a ring structure on K₀ of perfect complexes.

**How the definition helps.** Tensoring bounded projective models produces another bounded projective model and preserves mapping cones in each variable (our own proof). Thus tensor product respects the triangle relations defining K₀ in each variable. The ring in degree zero supplies the unit, and the tensor identities give associativity and commutativity.

**Paper or page:** [Derived](https://stacks.math.columbia.edu/tag/0FCT). It says: “Then ⊗ induces a bilinear map K₀(𝒟) × K₀(𝒟′) → K₀(𝒟″) which sends (\[X\], \[X′\]) to \[X ⊗ X′\].”

**Sources:** none listed. No primary source with a working link was found.

### Projectives separate product-ring K₀

**Remember:** Each factor of a product ring gets its own projective summand.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings). arXiv math.KT. Level 3: graduate.

**Definition.** A finitely generated projective module is a direct summand of a finite free module. Define K₀ by taking isomorphism classes of these modules under direct sum and adjoining formal differences.

**Problem.** For unital rings R and S, K₀(R × S) is the direct sum of K₀(R) and K₀(S).

**How the definition helps.** The complementary central idempotents (1,0) and (0,1) split each module into its two components. A module is finitely generated projective precisely when both components are, by the finite free summand test. This correspondence preserves direct sums, so adjoining formal differences gives the claimed isomorphism (our own proof).

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “The functor K₀ takes a ring A to the Grothendieck group of the set of isomorphism classes of its finitely generated projective modules”

**Sources:** none listed. No primary source with a working link was found.

### Quillen’s construction remembers nonsplit sequences

**Remember:** Choosing more exact sequences can change the group for the same modules.

*Rules out counterexamples.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 19D06. arXiv math.KT. Level 3: graduate.

**Definition.** For an exact category, K₀ has one generator \[M\] for each isomorphism class of objects. Impose \[M\] = \[L\] + \[N\] for every chosen exact sequence L ↪︎ M ↠ N. The split exact structure uses only split short exact sequences.

**Problem.** For finite modules over ℤ/4ℤ, all short exact sequences give K₀ ≅ ℤ. Using only split sequences gives K₀ ≅ ℤ².

**How the definition helps.** Every finite ℤ/4ℤ-module decomposes uniquely up to isomorphism and order into cyclic modules of orders two and four. Their multiplicities give the split group ℤ² (our own calculation). The nonsplit extension of ℤ/2ℤ by itself identifies the order-four module class with twice the order-two class. Composition length respects all exact sequences and sends the order-two class to one.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “the Q-construction works directly with short exact sequences.”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Rank classifies local projective K₀

**Remember:** Over a local ring, projective means free and rank counts the generators.

*Rules out counterexamples.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 13C10. arXiv math.KT. Level 3: graduate.

**Definition.** Define K₀ as the group of formal differences of finite projective modules, with direct sum as addition. A finite projective module is a direct summand of a finite free module.

**Problem.** Rank identifies K₀ of a commutative local ring, a ring with one maximal ideal, with ℤ.

**How the definition helps.** Every finitely generated projective module over a commutative local ring is free (our own explanation using the local freeness theorem). Rank classifies finite free modules and adds under direct sum. Adjoining formal differences therefore takes the nonnegative ranks to ℤ.

**Paper or page:** [Algebra](https://stacks.math.columbia.edu/tag/00JJ). It says: “Every finite projective R-module is finite free.”

**Sources:** none listed. No primary source with a working link was found.

### Exact sequences cancel Euler boundaries

**Remember:** Boundaries appear twice with opposite signs.

*True by definition.* MSC 19A99 (Grothendieck groups and \\(K<sub>0</sub>\\)), 18F30. arXiv math.KT. Level 3: graduate.

**Definition.** For an abelian category, define its Grothendieck group using one generator \[B\] per isomorphism class of objects. Impose \[B\] = \[A\] + \[B/A\] for every subobject A of B.

**Problem.** Take a bounded complex in an abelian category, where kernels and quotients behave as they do for modules. Its alternating sum of classes equals that of its homology.

**How the definition helps.** The cycles in each term contain the incoming boundaries, with homology as quotient. The term modulo cycles gives the outgoing boundaries. Thus each term contributes its homology and two boundary classes, and each boundary cancels across adjacent degrees (our own proof).

**Paper or page:** [Grothendieck's proof of Hirzebruch-Riemann-Roch theorem](https://arxiv.org/abs/2511.06880v2). It says: “Then we have the following equality in K₀(𝒞) ∑ (−1)ⁱ\[Xᵢ\] = ∑ (−1)ⁱ\[Hᵢ(X•)\].”

**Sources:** none listed. No primary source with a working link was found.

### Finitely generated projectives keep K₀ from collapsing under the Eilenberg swindle

**Remember:** An infinite sum absorbs one more copy of its summand.

*Rules out counterexamples.* MSC 19A99 (Grothendieck groups and \\(K<sub>0</sub>\\)), 18F25. arXiv math.KT. Level 3: graduate.

**Definition.** The split Grothendieck group of an additive category has generators \[A\] for object isomorphism classes and relations \[A ⊕ B\] = \[A\] + \[B\]. Ring K₀ uses the category of finitely generated projective modules.

**Problem.** Let an additive category have countable direct sums. Then its Grothendieck group, built from direct sums alone, is zero. An additive category is one where maps can be added and finite direct sums exist.

**How the definition helps.** For any A, the countable sum S of copies of A satisfies A ⊕ S ≅ S. The direct sum relation gives \[A\] + \[S\] = \[S\], so every generator vanishes. Restricting to finitely generated projectives excludes this countable sum for nonzero finite free ℤ-modules (our own example).

**nLab:** [Eilenberg swindle](https://ncatlab.org/nlab/show/Eilenberg+swindle). It says: “This is the reason that, for instance, one has to restrict oneself to categories of finitely generated (projective) modules (which lack infinite direct sums)”

**Sources:** none listed. No primary source with a working link was found.

### Residue fields compute torsion Euler characteristics

**Remember:** Send each residue field to its prime and shifts to inverses.

*True by definition.* MSC 19A99 (Grothendieck groups and \\(K<sub>0</sub>\\)). arXiv math.KT. Level 3: graduate.

**Definition.** Consider bounded complexes of finite free abelian groups with finite cohomology, up to quasi-isomorphism. Their K₀ imposes additivity for exact triangles. Define their multiplicative Euler characteristic as the homomorphism K₀ → ℚ₊ˣ sending \[ℤ/p\] to p for every prime p.

**Problem.** The characteristic of a complex equals the product of the orders of its even cohomology groups divided by the corresponding product in odd degrees.

**How the definition helps.** Hyslop’s lemma makes the prime classes a free basis of K₀, so their values determine the homomorphism. A composition series expresses each finite cohomology group as prime factors, whose orders multiply to its order. Cohomology truncations express the complex as the alternating sum of those group classes, giving the ratio (our own explanation).

**Paper or page:** [Special Values without Semi-Simplicity Via K-Theory](https://arxiv.org/abs/2404.18367). It says: “with 𝔽ₚ generating the p-indexed copy of ℤ”

**Sources:**

- [Logan Hyslop, Special Values without Semi-Simplicity Via K-Theory (2024 preprint)](https://arxiv.org/abs/2404.18367)

### Spectral sequence pages preserve Euler classes

**Remember:** Along each differential, the same image enters twice with opposite signs.

*True by definition.* MSC 19A99 (Grothendieck groups and \\(K<sub>0</sub>\\)), 18G40. arXiv math.KT. Level 3: graduate.

**Definition.** Use the group of object classes with \[B\] = \[A\] + \[B/A\] for every subobject A. A spectral sequence is a sequence of arrays in which each new page is the homology of the preceding page. Sign each entry by the parity of its total degree, the sum of its two indices.

**Problem.** If one page has finitely many nonzero entries, every later page has the same alternating class sum. For a bounded complex with a finite filtration, this sum equals the alternating sum of its cohomology classes.

**How the definition helps.** In our own proof, the quotient relations cancel each differential’s image between adjacent total degrees. Direct sum relations alone would require the corresponding short exact sequences to split. Convergence identifies the final entries as successive quotients of cohomology, and the same relations add these quotients back together.

**Paper or page:** [Homology](https://stacks.math.columbia.edu/tag/0BDW). It says: “Then only a finite number of Hⁿ(K•) are nonzero and we have ∑ (−1)ⁿ\[Hⁿ(K•)\] = ∑ (−1)ᵖ⁺ᑫ\[Eᵣ(p, q)\]”

**Sources:** none listed. No primary source with a working link was found.

### Stable matrices remove an extra sign

**Remember:** An extra row gives shear matrices an extra index.

*Rules out counterexamples.* MSC 19B14 (Stability for linear groups). arXiv math.KT. Level 3: graduate.

**Definition.** Start with invertible matrices over a ring with identity. Identify each matrix with the larger matrix obtained by adding an identity block along the diagonal. Define K₁ by imposing commutativity on the resulting group.

**Problem.** Every elementary row addition is trivial in K₁. At size two this assertion can fail in the abelianization.

**How the definition helps.** Adding a spare index lets one express each row addition as the commutator of two row additions (our own). The Whitehead lemma proves the full equality between the stable elementary subgroup and the stable commutator subgroup (our own). Without the spare index, the row addition over 𝔽₂ swaps two of the three nonzero vectors (our own). Its permutation sign survives in the abelianization of the two-by-two group (our own).

**nLab:** [Steinberg group](https://ncatlab.org/nlab/show/Steinberg+group). It says: “By the above Whitehead lemma this is also Gℓ(R)/E(R).”

**Sources:** none listed. No primary source with a working link was found.

### Defining K₁ as an abelianization makes every homomorphism to abelian groups factor

**Remember:** Abelianize the stable matrix group to factor every abelian-valued homomorphism.

*True by definition.* MSC 19B99 (Whitehead groups and \\(K<sub>1</sub>\\)). arXiv math.KT. Level 3: graduate.

**Definition.** For a unital ring R, form GL(R) as the union of GLₙ(R) under A ↦ diag(A,1). Define K₁(R) as GL(R) modulo its commutator subgroup.

**Problem.** Every group homomorphism from GL(R) to an abelian group factors uniquely through K₁(R). The determinant over a commutative ring is one example.

**How the definition helps.** A homomorphism to an abelian group kills all commutators, so it factors through the abelianization (our own). With the quotient by E(R), one must first know that E(R) is the commutator subgroup. That fact is Whitehead's lemma, which Wikipedia states, and the work goes there.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “K₁(A) is the abelianization of the infinite general linear group”

**Sources:** none listed. No primary source with a working link was found.

### The Bloch complex exposes K₂

**Remember:** The differential lists exactly the relations for rational K₂.

*True by definition.* MSC 19C20 (Symbols, presentations and stability of \\(K<sub>2</sub>\\)), 19E15. arXiv math.KT. Level 3: graduate.

**Definition.** Put V = F× ⊗ ℚ for a field F. The rational Bloch–Suslin complex maps rational symbols \[x\], x ∈ F ∖ {0,1}, in degree one to x ∧ (1−x) in ∧²V in degree two. For distinct x,y outside {0,1}, impose \[x\]−\[y\]+\[y/x\]−\[(1−1/x)/(1−1/y)\]+\[(1−x)/(1−y)\] = 0.

**Problem.** For a field F, the second cohomology of this complex is K₂(F) ⊗ ℚ, where K₂ is Quillen’s second K-group.

**How the definition helps.** Second cohomology here means taking the target modulo the image, so each x ∧ (1−x) becomes zero (our own). These are precisely the Steinberg relations in the rational symbol presentation of K₂. Matsumoto’s theorem identifies that presentation with Quillen’s group.

**Wikipedia:** [Bloch group](https://en.wikipedia.org/wiki/Bloch_group). It says: “This assertion is due to the Matsumoto theorem on K₂ for fields.”

**Sources:**

- [Hideya Matsumoto, Sur les sous-groupes arithmétiques des groupes semi-simples déployés (1969)](https://numdam.org/articles/10.24033/asens.1174/)

### Finite resolutions identify K-theory with G-theory

**Remember:** Finite projective resolutions let projectives compute the module theory.

*Makes the theorem clean to state or prove.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a right noetherian ring R, define G(R) as the connective K-theory of finitely generated right modules with their short exact sequences. Define K(R) by the same construction on finitely generated projective right modules.

**Problem.** Suppose every finitely generated right module has a finite exact resolution by finitely generated projectives. Then inclusion induces an equivalence K(R) → G(R).

**How the definition helps.** In our own explanation, using the same construction on both categories turns the comparison into the map induced by inclusion. Quillen’s resolution theorem proves that this map is an equivalence. Projectives are closed under extensions and under kernels of surjections between projectives. The assumed resolutions supply the theorem’s remaining condition.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “This new definition began with an exact category”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Perfect kernels protect first homology

**Remember:** Kill a perfect kernel without changing first homology.

*Rules out counterexamples.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** A perfect group is one generated by its commutators. For a connected cell complex X, choose a perfect normal subgroup P of its fundamental group. A plus map induces the quotient by P and preserves homology with every system of coefficients on the target. Such coefficients can change by transport around loops.

**Problem.** Every perfect normal subgroup of π₁X occurs as the kernel of a plus map. Quotienting the circle’s fundamental group by the whole group cannot preserve integral first homology.

**How the definition helps.** In our own explanation, every commutator vanishes in first homology, so killing P preserves the abelianized fundamental group. Killing the whole fundamental group of the circle would instead change its first homology from ℤ to zero. Quillen’s theorem constructs a map that preserves homology in every degree with the stated coefficients.

**nLab:** [Quillen plus construction](https://ncatlab.org/nlab/show/Quillen+plus+construction). It says: “The plus construction doesn't change the homology of the space but 'kills' a perfect normal subgroup of G within the classifying space BG.”

**Sources:**

- [George Raptis, Some characterizations of acyclic maps (2019)](https://doi.org/10.1007/s40062-019-00231-6)

### Reversing exact sequences preserves K-theory

**Remember:** Reverse the arrows and exchange the two ends of each span.

*True by definition.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a small exact category E, an arrow X → Y in Q(E) is an isomorphism class of spans X ↞ U ↪︎ Y. The arrows of the span are an admissible epimorphism and an admissible monomorphism, respectively. Compose spans by pullback and take the based loop space ΩBQ(E) at zero for connective K-theory.

**Problem.** For every small exact category E, its opposite exact category has naturally equivalent connective K-theory spaces.

**How the definition helps.** An admissible subquotient X of Y has a presentation as a quotient of a subobject or a subobject of a quotient. From U ↠ X with U ↪︎ Y, embed X into Y/ker(U → X). Conversely, pull back X along the quotient of Y. These inverse correspondences respect span composition and identify the Q-categories, hence their K-theory spaces (our own argument).

**nLab:** [Quillen Q-construction](https://ncatlab.org/nlab/show/Quillen+Q-construction). It says: “is a tool for producing the algebraic K-theory of a Quillen exact category 𝒞.”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Simple modules compute finite-length K-theory

**Remember:** Simple layers compute K-theory without tracking their extensions.

*Makes the theorem clean to state or prove.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT. Level 3: graduate.

**Definition.** A module has finite length if it has a finite filtration with simple quotients. A simple module is nonzero and has no proper nonzero submodule. A finite-length module is semisimple if it is a direct sum of simple modules.

**Problem.** Over any unital ring, including the semisimple modules of finite length into all finite-length modules induces an equivalence of connective K-theory spaces.

**How the definition helps.** In our own explanation, finite length supplies exactly the filtration needed to reduce the calculation to simple layers. Submodules, quotients and finite sums of semisimple modules remain semisimple. Quillen’s dévissage theorem turns these closure properties and the finite filtrations into the claimed equivalence.

**Paper or page:** [Dévissage Hermitian Theory](https://arxiv.org/abs/2408.09633). It says: “the induced map K(𝒝) → K(𝒜) is a homotopy equivalence of spaces.”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)
- [Satya Mandal, Dévissage Hermitian Theory](https://arxiv.org/abs/2408.09633)

### The plus construction defines all higher K-groups as homotopy groups

**Remember:** Make π₁ of BGL(R) abelian, keep the homology, and read off K-groups.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a unital ring R, stabilize invertible matrices by A ↦ diag(A,1) to form GL(R). Apply the plus construction to BGL(R) at the perfect subgroup E(R) generated by elementary matrices. Define Kₙ(R) = πₙ(BGL(R)⁺) for n ≥ 1.

**Problem.** The groups Kₙ(R) = πₙ(BGL(R)⁺), for n ≥ 1, are homotopy groups of one space. They agree with the classical K₁(R) = GL(R)/E(R) and with Milnor's K₂(R).

**How the definition helps.** The plus construction gives π₁ = GL(R)/E(R) by construction. The universal central extension of E(R) by the stable Steinberg group identifies π₂ with Milnor’s classical Steinberg kernel (our own explanation).

**nLab:** [Quillen plus construction](https://ncatlab.org/nlab/show/Quillen+plus+construction), [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Steinberg group](https://ncatlab.org/nlab/show/Steinberg+group). It says: “The plus construction doesn't change the homology of the space but 'kills' a perfect normal subgroup of G within the classifying space BG.”

**Sources:**

- [Charles Weibel, The K-book: An introduction to algebraic K-theory, Graduate Studies in Mathematics 145, AMS (2013), Section IV.1](https://sites.math.rutgers.edu/~weibel/Kbook.html)
- [Marc Hoyois, On Quillen's plus construction (2019)](https://hoyois.app.uni-regensburg.de/papers/acyclic.pdf)

### Leading coefficients recover constants

**Remember:** At infinity, leading coefficients recover every constant unchanged.

*True by definition. Confidence: medium.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** On F(t), let the leading coefficient of a fraction be the leading coefficient of its numerator divided by that of its denominator. Specialize a Milnor symbol by taking the leading coefficient in every slot.

**Problem.** In every degree, inclusion of F into F(t) gives a split injection on Milnor K-groups, with leading-coefficient specialization as a retraction.

**How the definition helps.** Leading coefficients multiply and fix constants, so it suffices to check Steinberg pairs (our own proof). If f has a zero at infinity, then 1−f has leading coefficient one. At a pole the coefficients are u and −u, and {u,−u} vanishes. Otherwise the first coefficient is one or the two coefficients themselves form a Steinberg pair.

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “0 → Kᴹₙ(F) → Kᴹₙ(F(t))”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)

### Milnor K-theory's Steinberg relation is exactly what the Galois symbol needs

**Remember:** Once the Steinberg relation holds, cup products give a map on symbols.

*True by definition.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory), 12G05. arXiv math.KT, math.NT. Level 3: graduate.

**Definition.** For a field F, define Kₙᴹ(F) by symbols {a₁,…,aₙ} with entries in F×. Multiplying entries in any one slot adds symbols. Impose zero on each symbol with adjacent entries a and 1−a.

**Problem.** Let m be invertible in F, and let μₘ be the group of m-th roots of unity. Cup products of Kummer classes give a homomorphism from Kₙᴹ(F)/m to Galois cohomology with coefficients in the n-fold tensor power of μₘ. The Kummer class of a records how the Galois group moves the m-th roots of a.

**How the definition helps.** Kummer classes turn products into sums, so their cup products respect multilinearity. For a ≠ 0,1, the étale algebra F\[t\]/(tᵐ−a) splits the Kummer class of a. The norm of 1−t equals 1−a, so the projection formula makes the Steinberg cup product vanish (our own argument). The coefficients are killed by m, giving the map modulo m.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “satisfying the defining relations of the Milnor K-group”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970).](https://doi.org/10.1007/BF01425486)

### One uniformizer splits reduction

**Remember:** Modulo an invertible integer, only the leading units and uniformizer matter.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** For a complete discretely valued field F with residue field k, choose a uniformizer π and normalize v(π) = 1. Specialization replaces each entry a by the residue of aπ⁻ᵛ⁽ᵃ⁾. Tame residue kills all-unit symbols and sends {π,u₂,…,uₙ} to the reduced unit symbol.

**Problem.** For every positive integer m invertible in k and every n ≥ 1, specialization and tame residue give an isomorphism. They identify degree n Milnor K-theory of F modulo m with the sum of degrees n and n − 1 over k modulo m.

**How the definition helps.** Hensel’s lemma makes principal units m-th powers, so residue units lift uniquely modulo m-th powers. Lift Steinberg pairs as u and 1−u to preserve their relation. Multilinearity and {π,π} = {π,−1} express every symbol using unit symbols and symbols beginning with a single π. Specialization and residue recover these two lifted components separately (our own proof).

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “∂(l(π)l(u₂)⋯l(uₙ)) = l(ū₂)⋯l(ūₙ)”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)

### Steinberg pairings factor uniquely

**Remember:** Check bilinearity and one relation, and the universal symbol supplies the map.

*True by definition.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** For a field F, take the tensor square of the multiplicative group F× over ℤ. Divide by the subgroup generated by a ⊗ (1 − a) for a ≠ 0, 1. Write {a,b} for the image of a ⊗ b in this quotient, the second Milnor K-group.

**Problem.** Suppose a pairing on F× takes values in an abelian group and is additive under multiplication in each argument. If it sends every pair (a,1 − a) to zero, it induces a unique homomorphism from the second Milnor K-group.

**How the definition helps.** The tensor product gives a unique homomorphism for each such pairing, and the quotient imposes exactly the stated vanishing condition. Our own explanation uses Matsumoto’s theorem to compare this presentation with the matrix definition of algebraic K₂. That definition takes the kernel of the map from the stable Steinberg group to the elementary matrix group.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “K₂(k) = k× ⊗ℤ k×/⟨a⊗(1−a) ∣ a≠0,1⟩”

**Sources:**

- [Hideya Matsumoto, Sur les sous-groupes arithmétiques des groupes semi-simples déployés (1969)](https://doi.org/10.24033/asens.1174)

### Steinberg symbols need not alternate

**Remember:** Opposite entries cancel, but equal entries need not.

*Rules out counterexamples.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** Let F be a field. Write {a,b} for the product of two generators in the Milnor K-ring of F. This ring starts with the tensor algebra on F× and sets {a,1 − a} equal to zero for a ≠ 0, 1.

**Problem.** In the second Milnor K-group, {a,a} = {a,−1} for all a ∈ F×. Over ℝ, {−1,−1} is nonzero.

**How the definition helps.** For a ≠ 1, the relations for a and a⁻¹ give {a,1−a} = {a,1−a⁻¹} = 0. Dividing second entries gives {a,−a} = 0, also true for a = 1. Bilinearity and 2{a,−1} = 0 give the identity. Over ℝ the product of sign characters in ℤ/2 is bilinear, kills Steinberg pairs, and detects {−1,−1} (our own calculation).

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “l(a)² = l(a)l(−1)”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)

### Adams operations compute finite-field K-groups

**Remember:** Subtract the identity from the Adams operation and take its fiber.

*True by definition.* MSC 19D50 (Computations of higher \\(K\\)-theory of rings). arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a finite field of order q, use the homotopy fiber of ψᵠ−1 on BU as Quillen’s model for its positive K-groups. Here ψᵠ is the Adams operation taking each line bundle to its qth tensor power.

**Problem.** For i ≥ 1, the K-group in degree 2i vanishes. In degree 2i − 1, the group is cyclic of order qⁱ − 1.

**How the definition helps.** Quillen’s comparison identifies positive K-groups with the homotopy groups of the fiber (our own summary). By Bott periodicity, BU has one copy of ℤ in every positive even degree and zero in odd degrees. In degree 2i the map multiplies by qⁱ−1. Its kernel is zero and its cokernel is ℤ/(qⁱ−1), giving the two groups by the fiber sequence.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “to the homotopy fiber of ψᵠ − 1”

**Sources:**

- [Daniel Quillen, On the cohomology and K-theory of the general linear groups over a finite field (1972)](https://doi.org/10.2307/1970825)

### Column shifts give Connes’s sequence

**Remember:** Multiplying by u drops the first column and leaves Hochschild chains as its kernel.

*True by definition. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 3: graduate.

**Definition.** A mixed complex has a boundary b lowering degree and an operator B raising degree, each by one. They satisfy b² = B² = bB + Bb = 0. Form polynomials in u⁻¹ with chain coefficients and differential b + uB. Here u lowers degree by two and kills the constant term.

**Problem.** For the mixed complex of a unital algebra, the constant column computes Hochschild homology, and the whole complex computes cyclic homology. Connes’s exact sequence relates these groups through a shift of two cyclic degrees.

**How the definition helps.** Multiplication by u drops the constant column and maps onto the shifted complex (our own). Its kernel has differential b, so the long exact sequence in homology gives Connes’s maps (our own). Kassel’s comparison with the cyclic bicomplex justifies using the polynomial model (our own).

**nLab:** [mixed complex](https://ncatlab.org/nlab/show/mixed+complex). It says: “A mixed complex is both a chain complex and a cochain complex in a compatible way.”

**Sources:**

- [Christian Kassel, Cyclic homology, comodules, and mixed complexes](https://doi.org/10.1016/0021-8693(87)90086-x)
- [Jean-Louis Loday, Cyclic Homology of Algebras](https://doi.org/10.1007/978-3-662-11389-9_2)

### Cyclic coinvariants lose even classes

**Remember:** Identifying rotations can erase every positive even class in characteristic two.

*Rules out counterexamples.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 3: graduate.

**Definition.** For a unital algebra A over a field, put Cₙ = A⊗⁽ⁿ⁺¹⁾ with its Hochschild boundary. The Connes quotient in degree n divides Cₙ by all differences c−tₙc. Here tₙ moves the last tensor factor to the front and multiplies by (−1)ⁿ.

**Problem.** For the two-element field as an algebra over itself, cyclic homology equals the field in every nonnegative even degree and vanishes in odd degrees. The Connes quotient loses every positive even class.

**How the definition helps.** The bicomplex keeps a degree-zero chain in each even column (our own). Normalizing removes tensors with a unit after the first entry, leaving only those chains (our own). In the unnormalized quotient, every rotation acts trivially (our own). The boundary alternates between the identity in positive even degrees and zero in odd degrees (our own).

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “If the field k contains the rational numbers, the definition in terms of the Connes complex calculates the same homology.”

**Sources:**

- [Jean-Louis Loday, Cyclic Homology of Algebras](https://doi.org/10.1007/978-3-662-11389-9_2)
- [Christian Kassel, Cyclic homology, comodules, and mixed complexes](https://doi.org/10.1016/0021-8693(87)90086-x)

### Four-point faces give five terms

**Remember:** Deleting each of five points gives the five terms.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 3: graduate.

**Definition.** Over an infinite field F, take the free abelian group on ordered quadruples of distinct projective-line points modulo fractional linear transformations. For every ordered quintuple of distinct points, impose the alternating sum of its five ordered faces as a relation.

**Problem.** For an infinite field F, this gives the pre-Bloch group. For distinct x, y outside {0,1}, the relation is \[x\] − \[y\] + \[y/x\] − \[(1−1/x)/(1−1/y)\] + \[(1−x)/(1−y)\] = 0.

**How the definition helps.** A unique fractional linear transformation sends the first three points to 0, ∞, 1, leaving the fourth as the label. Normalize a quintuple to (0,∞,1,x,y). Deleting its points from last to first and labeling each face gives the five displayed symbols in order, with alternating signs (our own calculation).

**Wikipedia:** [Bloch group](https://en.wikipedia.org/wiki/Bloch_group). It says: “The Bloch-Suslin complex is defined as the following cochain complex, concentrated in degrees one and two”

**Sources:**

- [Kevin Hutchinson, A Bloch–Wigner complex for SL₂ (2013)](https://doi.org/10.1017/is013003031jkt13222)

### Inverting u gives periodic homology

**Remember:** Power series give negative cyclic homology, and Laurent series give periodic cyclic homology.

*True by definition. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 3: graduate.

**Definition.** A mixed complex has two square-zero operators, b lowering degree and B raising degree, that satisfy bB + Bb = 0. Negative cyclic chains are power series in u with chain coefficients and differential b + uB, where u has degree −2. Periodic cyclic chains also allow finitely many negative powers.

**Problem.** For a mixed complex concentrated in nonnegative degrees over a commutative ring, inverting u in negative cyclic homology gives periodic cyclic homology.

**How the definition helps.** The series model makes periodic chains the localization of negative chains at u (our own). Localization preserves exact sequences, so taking homology commutes with this change (our own). The comparison with the product totalizations of the cyclic bicomplex justifies the series models (our own).

**nLab:** [mixed complex](https://ncatlab.org/nlab/show/mixed+complex). It says: “A mixed complex is both a chain complex and a cochain complex in a compatible way.”

**Sources:**

- [Christian Kassel, Cyclic homology, comodules, and mixed complexes](https://doi.org/10.1016/0021-8693(87)90086-x)

### Tensoring with the circle gives Jones' free loop space theorem

**Remember:** Functions on loops are Hochschild chains of functions.

*True by definition. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 55P35, 16E40. arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For an E∞-algebra A over a field k, define derived Hochschild chains by the tensor S¹ ⊗ A. This tensor is the colimit of the constant diagram at A indexed by the circle in the ∞-category of E∞-algebras over k.

**Problem.** Let X be a simply connected CW complex of finite type and take cochains over a field k. Jones’ theorem identifies the Hochschild homology of C•(X;k) with the cohomology of the free loop space Map(S¹,X) over k.

**How the definition helps.** The circle indexes both the Hochschild tensor and the free loop mapping space. Jones’ comparison uses Eilenberg–Moore convergence to identify the tensor of cochains with cochains on that mapping space (our own explanation). Taking homology gives the statement.

**nLab:** [Hochschild cohomology](https://ncatlab.org/nlab/show/Hochschild+cohomology). It says: “This result, which follows directly from the general abstract desciption of Hichschild homology is known as Jones' theorem.”

**Sources:**

- [John D. S. Jones, Cyclic homology and equivariant homology, Invent. Math. 87 (1987)](https://doi.org/10.1007/bf01389424)

### The cotangent complex extends the HKR theorem to every algebra

**Remember:** Replace forms by exterior powers of the cotangent complex, and HKR always holds.

*Rules out counterexamples.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 13D03, 16E40. arXiv math.KT, math.AG. Level 3: graduate.

**Definition.** Choose a simplicial polynomial k-algebra resolution P• → A of a commutative k-algebra A. Its cotangent complex L is the normalized chain complex obtained by extending Ω¹(P•/k) to A in each degree.

**Problem.** Derived Hochschild homology HH(A/k) has a natural descending filtration for every commutative k-algebra A. Its ith graded piece is the ith derived exterior power of L shifted up by i. For smooth A this gives HHₙ(A/k) ≅ Ωⁿ(A/k).

**How the definition helps.** Replacing forms by ∧ⁱL removes the singular counterexamples to the classical statement. For k\[x\]/(x²), HHₙ is nonzero in every degree, but Ωⁿ vanishes for n ≥ 2 (our own). Here the cotangent complex has a piece in degree 1, and its derived exterior powers fill these degrees (our own). The work moves into the facts that both sides commute with sifted colimits and agree on polynomial algebras (our own).

**nLab:** [Hochschild-Kostant-Rosenberg theorem](https://ncatlab.org/nlab/show/Hochschild-Kostant-Rosenberg+theorem). It says: “If the k-algebra R is sufficiently well-behaved, then this morphism is an isomorphism that identifies the Hochschild homology of R in degree n with Ωⁿ(R/k) for all n”

**Wikipedia:** [Hochschild homology](https://en.wikipedia.org/wiki/Hochschild_homology). It says: “If the algebra A/k isn't smooth, or even flat, then there is an analogous theorem using the cotangent complex.”

**Sources:**

- [G. Hochschild, Bertram Kostant and Alex Rosenberg, Differential forms on regular affine algebras, Trans. Amer. Math. Soc. 102 (1962)](https://doi.org/10.1090/s0002-9947-1962-0142598-8)

### The periodicity sequence turns Hochschild isomorphisms into cyclic isomorphisms

**Remember:** Same Hochschild homology, same cyclic homology, by the five lemma.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 16E40. arXiv math.KT. Level 3: graduate.

**Definition.** A nonnegative mixed complex has operators b and B of degrees −1 and +1 satisfying b² = B² = bB + Bb = 0. Hochschild homology is the homology of (C,b). Cyclic homology uses C\[u⁻¹\] with differential b+uB, where u has degree −2 and kills the constant column.

**Problem.** A map of mixed complexes that is an isomorphism on HH is also an isomorphism on HC. For example, the trace map gives HCₙ(Mₘ(A)) ≅ HCₙ(A).

**How the definition helps.** Connes’s natural periodicity sequence relates HHₙ, HCₙ and HCₙ₋₂. Ordinary cyclic homology vanishes below degree zero, so induction and the five lemma give the isomorphism (our own proof). The generalized matrix trace respects both operators and induces the Hochschild isomorphism by Morita invariance.

**nLab:** [mixed complex](https://ncatlab.org/nlab/show/mixed+complex). It says: “Equivalently, it is a dg-module over the dg-algebra k\[B\]/(B²), where k is the base ring, B is of degree −1, and dB = 0.”

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “One of the striking features of cyclic homology is the existence of a long exact sequence connecting Hochschild and cyclic homology. This long exact sequence is referred to as the periodicity sequence.”

**Sources:**

- [C. Kassel, Cyclic homology, comodules, and mixed complexes, J. Algebra 107 (1987) 195–216](https://doi.org/10.1016/0021-8693(87)90086-x)

### Defining relative K-theory as a homotopy fiber builds in exactness

**Remember:** A homotopy fiber remembers how a class becomes zero.

*True by definition.* MSC 19D99 (Higher algebraic \\(K\\)-theory), 19D06. arXiv math.KT. Level 3: graduate.

**Definition.** Let R be a ring with an ideal I. Quillen's K-theory gives a space K(R) whose homotopy groups are the K-groups of R. Define relative K-theory K(R, I) as the homotopy fiber of K(R) → K(R/I). Its points are points of K(R) together with a path from their image to the base point.

**Problem.** The relative K-groups fit into a long exact sequence ⋯ → Kₙ(R, I) → Kₙ(R) → Kₙ(R/I) → Kₙ₋₁(R, I) → ⋯.

**How the definition helps.** Every map of spaces gives a long exact sequence of homotopy groups for its homotopy fiber, so this sequence holds by definition. Wikipedia states that the program sought definitions for which the sequence arises in this way. Older algebraic definitions of relative K₀ and K₁ gave only the low-degree part, checked by hand (our own). The work moves to constructing K(R) as a space and comparing the fiber with those older groups (our own).

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “the long exact sequence for relative K-groups arises as the long exact homotopy sequence of a fibration”

**Sources:** none listed. No primary source with a working link was found.

### Moore coefficients retain adjacent torsion

**Remember:** Take coefficients before homotopy groups to retain the preceding torsion.

*True by definition. Confidence: medium.* MSC 19D99 (Higher algebraic \\(K\\)-theory), 55P42. arXiv math.KT, math.AT. Level 3: graduate.

**Definition.** For a ring R and m ≥ 2, take the cofiber of multiplication by m on the K-theory spectrum K(R). Its homotopy groups Kₙ(R; ℤ/m) are the K-groups of R with coefficients modulo m.

**Problem.** For n ≥ 1 there is a short exact sequence 0 → Kₙ(R)/m → Kₙ(R; ℤ/m) → Kₙ₋₁(R)\[m\] → 0. Here Kₙ₋₁(R)\[m\] denotes the subgroup killed by m.

**How the definition helps.** Taking the cofiber before taking groups keeps the m-torsion of the previous degree, which plain reduction modulo m loses (our own). The long exact sequence of the cofiber gives the subgroup and the quotient at once. This cofiber is the smash product of K(R) with the Moore spectrum, the cofiber of m on the sphere spectrum.

**nLab:** [Moore spectrum](https://ncatlab.org/nlab/show/Moore+spectrum). It says: “the Moore spectrum SG (often MG) of G”

**Sources:** none listed. No primary source with a working link was found.

### Polynomial simplices enforce homotopy invariance

**Remember:** Polynomial simplices turn polynomial homotopies into actual homotopies.

*True by definition.* MSC 19D99 (Higher algebraic \\(K\\)-theory), 19D25. arXiv math.KT. Level 3: graduate.

**Definition.** In simplicial degree d ≥ 0, take nonconnective K-theory of R\[t₀,…,t<sub>d</sub>\]/(t₀+⋯+t<sub>d</sub>−1). Define KH(R) as the geometric realization of these spectra with the usual polynomial simplex maps.

**Problem.** Adjoining a polynomial variable induces an equivalence KH(R) → KH(R\[t\]). For a regular commutative Noetherian ring R, ordinary K-theory already agrees with KH.

**How the definition helps.** Realization turns polynomial homotopies into homotopies (our own explanation). Substitution t ↦ st connects the identity on R\[t\] to evaluation at zero followed by inclusion. Thus evaluation and inclusion give inverse equivalences on KH. For regular commutative Noetherian R, Quillen’s polynomial invariance and vanishing of negative K-groups identify K(R) with KH(R).

**nLab:** [algebraic K-theory spectrum](https://ncatlab.org/nlab/show/algebraic+K-theory+spectrum). It says: “it represents Weibel's homotopy invariant version of algebraic K-theory”

**Sources:**

- [Charles Weibel, Homotopy algebraic K-theory (1989)](https://doi.org/10.1090/conm/083/991991)

### Defining G₀ pushforward by derived direct images makes pushforwards compose

**Remember:** Compose the derived maps before taking their classes.

*True by definition. Confidence: medium.* MSC 19E08 (\\(K\\)-theory of schemes), 14F06. arXiv math.AG, math.KT. Level 3: graduate.

**Definition.** Let G₀ of a Noetherian scheme be the Grothendieck group of coherent sheaves. For a proper map f, define pushforward by the class of the derived direct image Rf∗, a single complex with coherent cohomology. The sheaf definition sends a sheaf F to the alternating sum of its higher direct images Rⁱf∗F.

**Problem.** Let f : X → Y and g : Y → Z be proper maps of Noetherian schemes. On G₀, pushing forward along g ∘ f equals pushing forward along f and then along g.

**How the definition helps.** Derived direct images compose up to natural isomorphism, so the corresponding classes agree. Proper direct image preserves bounded coherent cohomology. The class of a bounded complex equals the alternating sum of its cohomology classes, giving the stated pushforward on G₀ (our own explanation).

**Paper or page:** [Cohomology](https://stacks.math.columbia.edu/tag/0D5T). It says: “Then Rg∗ ∘ Rf∗ = R(g ∘ f)∗ as functors”

**Sources:** none listed. No primary source with a working link was found.

### Series extend virtual exterior powers

**Remember:** Exterior powers of a difference come from dividing the two series.

*Rules out counterexamples.* MSC 19E08 (\\(K\\)-theory of schemes), 19A99. arXiv math.KT. Level 3: graduate.

**Definition.** For a vector bundle E on a scheme, put λₜ(E) = ∑ᵢ\[∧ⁱE\]tⁱ in K₀\[\[t\]\], summing over i ≥ 0. For a virtual class \[E\]−\[F\], put λₜ(\[E\]−\[F\]) = λₜ(E)/λₜ(F).

**Problem.** On a scheme, a space locally described by commutative rings, exterior powers extend to formal differences of vector bundles. Their series carries addition to multiplication.

**How the definition helps.** The exterior power filtration for a short exact sequence gives λₜ(E) = λₜ(E′)λₜ(E″) for middle bundle E and ends E′, E″. Every series has constant coefficient one and hence an inverse. The defining relations of K₀ therefore give a homomorphism from addition to multiplication (our own explanation).

**Paper or page:** [Weil](https://stacks.math.columbia.edu/tag/0FIC). It says: “Let X be a scheme. There are maps λʳ : K₀(Vect(X)) → K₀(Vect(X))”

**Sources:** none listed. No primary source with a working link was found.

### Gersten boundaries give rational equivalence

**Remember:** At codimension q, the incoming boundary is the divisor map.

*Makes the theorem clean to state or prove.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 19E20. arXiv math.KT. Level 3: graduate.

**Definition.** For a smooth variety X over a field, let 𝒦<sub>q</sub> be its Zariski sheaf of algebraic K-groups in degree q. The Gersten complex has a direct sum of K\_(q−c)(k(x)) over codimension-c points x in degree c. Its differential sums the localization boundaries for successive codimensions.

**Problem.** For q ≥ 0, the cohomology group H<sup>q</sup>(X, 𝒦<sub>q</sub>) is the Chow group CH<sup>q</sup>(X) of codimension-q cycles modulo rational equivalence.

**How the definition helps.** The Gersten complex ends with the divisor map into the cycle group, so its last cohomology group is the Chow group (our own). Quillen proved that the complex resolves the sheaf 𝒦<sub>q</sub> and computes its cohomology. In degree q it has one copy of ℤ per codimension-q point, and the next term vanishes. The term before is the sum of the multiplicative groups k(x)<sup>×</sup> over codimension-(q − 1) points, and the boundary takes divisors.

**Wikipedia:** [Bloch's formula](https://en.wikipedia.org/wiki/Bloch%27s_formula). It says: “The general case is due to Quillen.”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Todd-corrected pushforwards compose

**Remember:** Insert the relative Todd class and composition uses the projection formula.

*True by definition.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT. Level 3: graduate.

**Definition.** Consider a projective map f between smooth quasi-projective varieties X and Y over a field. Its relative tangent class is T<sub>f</sub> = T<sub>X</sub> − f\*(T<sub>Y</sub>). Define corrected pushforward on rational Chow groups by x ↦ f∗(td(T<sub>f</sub>) · x), using the Todd class td.

**Problem.** Corrected pushforwards compose. The Chern character takes the K₀ pushforward to the corrected pushforward, so ch(f∗α) = f∗(td(T<sub>f</sub>) · ch(α)).

**How the definition helps.** The correction absorbs the Todd factor that otherwise appears at every use of Riemann–Roch (our own). Relative tangent classes add under composition, after the second is pulled back. So their Todd classes multiply, and the projection formula moves the pulled-back factor through the first pushforward. Grothendieck–Riemann–Roch gives the comparison with the K₀ pushforward.

**Paper or page:** [The Riemann-Roch theorem for the Adams operations](https://arxiv.org/abs/2211.10178). It says: “endowed with the modified direct images”

**Sources:**

- [A. Navarro and J. Navarro, The Riemann-Roch theorem for the Adams operations (2022 preprint)](https://arxiv.org/abs/2211.10178)

### Tame residues detect integral classes

**Remember:** A class is integral exactly when every finite tame value is 1.

*Makes the theorem clean to state or prove.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 3: graduate.

**Definition.** For a number field F, a finite place is a valuation associated with a prime ideal in its ring of integers. Each such place gives a tame symbol from algebraic K₂ of F to the multiplicative group of the residue field. The tame kernel consists of the classes that all these symbols send to 1.

**Problem.** The map from K₂ of the ring of integers of F to K₂ of F identifies the former with the tame kernel.

**How the definition helps.** The common kernel describes exactly which field classes come from the ring of integers. In our own explanation, Quillen’s localization theorem identifies the integral image with the kernel of its boundary map. The boundary components are the tame symbols. The preceding term vanishes because finite fields have trivial K₂, so the integral map is injective.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792v2). It says: “$K<sub>2</sub>(O<sub>F</sub>)$ is finite abelian, and is the kernel of the map”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Tame residues detect integral K₂

**Remember:** Integral classes are exactly the classes with no tame residue.

*Makes the theorem clean to state or prove.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)), 19D50. arXiv math.KT. Level 3: graduate.

**Definition.** Let A be the ring of integers of a number field F, and fix a nonzero prime ideal. Write a = πʳu and b = πˢw in F× using a local uniformizer π and local units u,w. The tame residue sends {a,b} to the reduction of (−1)ʳˢuˢ/wʳ at that prime.

**Problem.** K₂(A) embeds into K₂(F). Its image consists exactly of classes with residue one at every nonzero prime.

**How the definition helps.** The residue formula turns membership in K₂(A) into explicit tests at primes, in our own explanation. Symbols generate K₂(F), and their residues give the boundary in Quillen’s localization sequence, up to the choice of sign convention. Each finite residue field has zero K₂, which gives injectivity. Exactness then identifies the image with the common kernel.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “then there is a long exact sequence”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)
- [Daniel Quillen, On the cohomology and K-theory of the general linear groups over a finite field (1972)](https://doi.org/10.2307/1970825)
- [Hyman Bass and John Tate, The Milnor ring of a global field (1973)](https://doi.org/10.1007/BFb0073733)

### Tame symbols handle common poles

**Remember:** Cancel the orders locally before taking the global product.

*Rules out counterexamples.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 3: graduate.

**Definition.** Let f and g be nonzero rational functions on a smooth projective curve. At a point P, let m and n be their orders, counting poles negatively. The ratio fⁿ/gᵐ has order zero, so it has a nonzero value at P. The tame symbol is this value with its sign reversed when mn is odd.

**Problem.** On a smooth projective integral curve over an algebraically closed field, the product of the tame symbols over all closed points is 1.

**How the definition helps.** The signed ratio has order zero, even when neither separate evaluation is defined. In our own example, f = g = t on the projective line makes direct evaluation at their common pole undefined. The new factors there and at the common zero are both −1 in characteristic different from two. Weil reciprocity still carries the global work of proving that all the factors cancel.

**nLab:** [Weil reciprocity law](https://ncatlab.org/nlab/show/Weil+reciprocity+law). It says: “a theorem of André Weil about the function field K(C) of an algebraic curve C over an algebraically closed field K.”

**Wikipedia:** [Weil reciprocity law](https://en.wikipedia.org/wiki/Weil_reciprocity_law). It says: “there must be the side-condition, that the divisors of f and g have disjoint support”

**Sources:** none listed. No primary source with a working link was found.

### Tame symbols pick the finite K₂

**Remember:** Keep only symbols unramified at every finite prime.

*Rules out counterexamples.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 3: graduate.

**Definition.** For a number field F, the tame kernel consists of classes in K₂(F) with tame symbol one at every finite prime. At a prime of valuation v, the symbol of {x,y} is the residue of (−1)ᵛ⁽ˣ⁾ᵛ⁽ʸ⁾xᵛ⁽ʸ⁾/yᵛ⁽ˣ⁾.

**Problem.** The common kernel is the finite group K₂ of the ring of integers. The symbol {2,3} does not belong to this kernel over ℚ.

**How the definition helps.** The local conditions exclude field symbols that cannot come from the integers, in our own explanation. At 3, the symbol {2,3} gives 2 modulo 3. The localization theorem identifies the common kernel with integral K₂. Finiteness of integral K₂ is a separate theorem.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792). It says: “If i is even then Kᵢ(OＦ) is finite, but Kᵢ(F) is an infinite torsion group, satisfying the exact sequence”

**Sources:** none listed. No primary source with a working link was found.

### The tame sign ensures cancellation

**Remember:** Keep the sign when both arguments have poles.

*Rules out counterexamples.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 3: graduate.

**Definition.** Let v be a discrete valuation on F with residue field k. For f,g ∈ F× with orders m,n, define their tame symbol as the reduction of the unit (−1)ᵐⁿfⁿ/gᵐ in k×.

**Problem.** For f ≠ 0, 1, the tame symbol of (f,1 − f) is 1. It therefore defines a map from K₂ of F to k×.

**How the definition helps.** At a common pole the orders agree and (1−f)/f reduces to −1, so the sign cancels the ratio’s sign. For f = 1/t at t = 0, omitting the sign gives −1 in characteristic different from two (our own example). If either entry has positive order, the other reduces to one, and two order-zero entries give one directly. Multiplicativity in both entries and Matsumoto’s presentation now give the map on K₂.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792v2). It says: “{a,b} ↦ (−1)<sup>(v(a)v(b))</sup> a<sup>(v(b))</sup> b<sup>(−v(a))</sup> mod v”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)
- [Hideya Matsumoto, Sur les sous-groupes arithmétiques des groupes semi-simples déployés (1969)](https://doi.org/10.24033/asens.1174)

### Conjugation counts regulator coordinates

**Remember:** A real place contributes only when its quotient line has positive sign.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11R70. arXiv math.NT, math.KT. Level 3: graduate.

**Definition.** For a number field F and integer n ≥ 2, model the real regulator target by one real line ℂ/(2πi)ⁿℝ per embedding into ℂ. Keep tuples whose coordinates at conjugate embeddings are complex conjugates.

**Problem.** Let r₁ count real embeddings and r₂ count pairs of nonreal conjugate embeddings. The regulator target has real dimension r₂ for even n and r₁ + r₂ for odd n. Borel’s theorem gives the same rank for the algebraic K-group of the integers of F in degree 2n−1.

**How the definition helps.** The tuple model turns the dimension calculation into a count of fixed coordinates. Our own count uses one free real value per nonreal pair. On a real embedding’s quotient line, conjugation acts by (−1)ⁿ⁻¹, so a free coordinate survives exactly for odd n. Borel’s regulator theorem identifies the real span of the K-group with this target.

**Paper or page:** [Borel's rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044v2). It says: “Denote by r₁ and r₂ the numbers of real and conjugate pairs of complex places of F, respectively.”

**Sources:**

- [J. I. Burgos Gil, The Regulators of Beilinson and Borel, CRM Monograph Series 15](https://doi.org/10.1090/crmm/015)

### Flat bundles give curve regulator characters

**Remember:** On a curve, a holomorphic connection is flat and has monodromy.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 14F43. arXiv math.KT, math.AG. Level 3: graduate.

**Definition.** On a smooth complex curve X, represent degree-two, weight-two Deligne classes by holomorphic line bundles with holomorphic connection, up to connection-preserving isomorphism. For nowhere-zero holomorphic functions f and g, their regulator is the class of their Deligne cup product.

**Problem.** The regulator of two units gives a character on loops. This means that each loop gives a nonzero complex number, and joining loops multiplies their values.

**How the definition helps.** The connection has zero curvature because a complex curve has no holomorphic two-forms. Its parallel transport therefore depends only on the based homotopy class of a loop. Concatenation composes the resulting line automorphisms, so their scalars form a character (our own explanation).

**nLab:** [Higher regulators and values of L-functions](https://ncatlab.org/nlab/show/Higher+regulators+and+values+of+L-functions). It says: “Since dim(X) = 1, all connections are integrable”

**Sources:**

- [A. A. Beilinson, Higher regulators and values of L-functions (1985)](https://doi.org/10.1007/BF02105861)

### Nondegenerate forms have Witt inverses

**Remember:** Reverse the form to get its inverse.

*Rules out counterexamples.* MSC 19G12 (Witt groups of rings). arXiv math.KT. Level 3: graduate.

**Definition.** Use finite-dimensional symmetric bilinear forms over a field of characteristic other than two. Require nondegeneracy, meaning that only zero pairs to zero with every vector. Two forms represent the same Witt class if adding hyperbolic planes to each makes them isometric. A hyperbolic plane has two basis vectors that each pair to zero with themselves and to one with each other.

**Problem.** Every form has an additive inverse for orthogonal sum in the Witt group. The inverse is the form with its signs reversed.

**How the definition helps.** Nondegeneracy lets the diagonal in the sum of a form and its negative supply half of a hyperbolic basis (our own). The diagonal pairs to zero with itself and has half the total dimension (our own). The splitting theorem for such subspaces proves the sum is hyperbolic (our own). A zero form on a line leaves a vector pairing to zero with everything, however many nonsingular planes we add (our own).

**Wikipedia:** [Witt group](https://en.wikipedia.org/wiki/Witt_group). It says: “zero or more copies of a hyperbolic plane, the non-degenerate two-dimensional symmetric bilinear form with a norm 0 vector.”

**Sources:** none listed. No primary source with a working link was found.

### Real Witt classes equal signatures

**Remember:** Cancel positive and negative squares in pairs to leave the signature.

*Rules out counterexamples.* MSC 19G12 (Witt groups of rings), 11E81. arXiv math.KT. Level 3: graduate.

**Definition.** Start with nonsingular symmetric bilinear forms on finite-dimensional real vector spaces, up to change of basis. The Witt ring identifies forms after adding any number of hyperbolic planes on either side. Each such plane has one positive and one negative square. Addition uses direct sum and multiplication uses tensor product.

**Problem.** Signature identifies the real Witt ring with ℤ as a ring.

**How the definition helps.** Sylvester’s law gives well-defined positive and negative square counts. Removing hyperbolic planes cancels opposite squares, leaving a definite form determined by the difference of the counts (our own proof). Every integer occurs, orthogonal sums add signatures, and tensor products multiply them.

**Wikipedia:** [Witt group](https://en.wikipedia.org/wiki/Witt_group). It says: “Sylvester's law of inertia holds for quadratic forms over k and the signature defines a ring homomorphism”

**Sources:** none listed. No primary source with a working link was found.

### Dividing K₁ by group elements makes Whitehead torsion independent of cell lifts

**Remember:** Changing a cell lift multiplies by a group element that the quotient kills.

*True by definition. Confidence: medium.* MSC 19J10 (Whitehead (and related) torsion), 57Q10. arXiv math.GT, math.KT. Level 3: graduate.

**Definition.** For a group G, define Wh(G) as K₁(ℤ\[G\]) modulo the subgroup generated by the unit classes \[±g\] for every g ∈ G.

**Problem.** Whitehead torsion of a homotopy equivalence of finite connected CW complexes does not depend on the choices of cell lifts and orientations.

**How the definition helps.** Changing one lift or orientation multiplies a basis vector by ±g, and the quotient kills that factor (our own). Wikipedia gives the quotient by elementary matrices, elements of G and ±1. The remaining work is to show independence from the other choices in the construction (our own).

**Wikipedia:** [Whitehead torsion](https://en.wikipedia.org/wiki/Whitehead_torsion). It says: “the quotient of GL(ℤ\[G\]) by the subgroup generated by elementary matrices, elements of G and ±1”

**Sources:**

- [John Milnor, Whitehead torsion (1966).](https://doi.org/10.1090/S0002-9904-1966-11484-2)

### Unit classes distinguish matrix sizes

**Remember:** A minimal projection counts one, while the identity counts the matrix size.

*Rules out counterexamples.* MSC 19K14 (\\(K<sub>0</sub>\\) as an ordered group, traces), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a unital complex matrix algebra A, consider projections p = p² = p\* in matrices over A. Identify projections that become unitarily conjugate after adding zero blocks, and form K₀ by adjoining formal differences under block sum. The positive cone consists of projection classes, and the marked class is \[1<sub>A</sub>\].

**Problem.** For complex square matrix algebras, the ordered K₀ group with its marked identity determines the matrix size. Forgetting the mark gives the same ordered group for every size.

**How the definition helps.** Stable unitary equivalence classifies complex projections by rank, so rank identifies the ordered group with ℤ in every matrix size. Its only order automorphism fixes its least positive element and hence every integer. The identity in size n has rank n, so its mark determines n (our own calculation).

**Paper or page:** [A review of the Elliott program of classification of simple amenable C\*-algebras](https://arxiv.org/abs/2311.14238v1). It says: “Then A ≅ B if and only if (K₀(A), K₀(A)₊, \[1ₐ\], K₁(A)) ≅ (K₀(B), K₀(B)₊, \[1ᵦ\], K₁(B)).”

**Sources:** none listed. No primary source with a working link was found.

### An imprimitivity bimodule is a Kasparov module, so Morita equivalence gives KK-equivalence

**Remember:** With F equal to zero, Morita's condition is Kasparov's condition.

*True by definition.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 46L08. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** An A–B imprimitivity bimodule is a full Hilbert B-module E whose left action identifies A with the compact operators on E. Fullness means the inner products have dense linear span in B. A bounded Kasparov cycle requires \[F,a\], (F−F\*)a and (F²−1)a to be compact for every a ∈ A, with F odd on the graded module.

**Problem.** Let A and B be separable and strongly Morita equivalent through E. Then (E, 0) is a Kasparov module whose class in KK(A,B) is invertible. So A and B are KK-equivalent, and every functor that factors through KK is a Morita invariant.

**How the definition helps.** Grade E entirely in even degree and set F = 0. The commutators and adjoint defects vanish, and (F²−1)a = −a acts compactly by imprimitivity. The conjugate bimodule gives the inverse because the two interior tensor products are the respective identity bimodules and represent the Kasparov products (our own explanation).

**Paper or page:** [Notes on C\*-algebras](https://arxiv.org/abs/2505.17456). It says: “There exists a full Hilbert B-module and a faithful representation φ : A → 𝓛B(E) such that φ(A) = 𝒦B(E).”

**Sources:**

- [Marc A. Rieffel, Induced representations of C\*-algebras, Advances in Mathematics 13 (1974) 176–257](https://doi.org/10.1016/0001-8708(74)90068-1)
- [Gennadi G. Kasparov, The operator K-functor and extensions of C\*-algebras, Mathematics of the USSR-Izvestiya 16 (1981) 513–572](https://doi.org/10.1070/IM1981v016n03ABEH001320)

### Defining the Fredholm index by a K-theory boundary map makes indices add

**Remember:** The boundary map sends multiplication of invertible classes to addition of indices.

*True by definition. Confidence: medium.* MSC 19K56 (Index theory), 47A53, 46L80. arXiv math.OA, math.FA. Level 3: graduate.

**Definition.** For a bounded Fredholm operator T on a complex Hilbert space, its image modulo compact operators is invertible. Define ind(T) as the image of that invertible class under the Calkin extension boundary K₁ → K₀(compacts) ≅ ℤ.

**Problem.** For Fredholm operators S and T, the index of ST is the index of S plus the index of T.

**How the definition helps.** Multiplication of invertibles gives addition in K₁, and the boundary map is a group homomorphism. Applying it to the product gives ind(ST) = ind(S) + ind(T). Atkinson’s theorem gives invertibility modulo compacts, and the index theorem for the Calkin boundary identifies this integer with the kernel-minus-cokernel formula (our own summary).

**Wikipedia:** [Operator K-theory](https://en.wikipedia.org/wiki/Operator_K-theory). It says: “The Fredholm index map appears in the 6-term exact sequence given by the Calkin algebra.”

**Sources:** none listed. No primary source with a working link was found.

### Fredholm modules pair with projections to give integer indices

**Remember:** Commutators compact means compressions are Fredholm.

*True by definition. Confidence: medium.* MSC 19K56 (Index theory), 19K33. arXiv math.KT, math.OA. Level 3: graduate.

**Definition.** An even bounded Fredholm module has a graded Hilbert space with an even representation of A and an odd self-adjoint bounded operator F. For every a ∈ A, require \[F,a\] and (F²−1)a to be compact.

**Problem.** For a projection p in A, let G be the part of F from H₊ to H₋. Then pGp, from pH₊ to pH₋, is Fredholm, and its index depends only on the classes of p in K₀(A) and of F in K⁰(A).

**How the definition helps.** The compression of G\* gives an inverse to pGp modulo compacts, since \[F,p\] and (F²−1)p are compact (our own argument). Atkinson’s theorem gives Fredholmness. The Fredholm index is additive and homotopy invariant, and the Kasparov index pairing identifies it as a function of the two classes.

**nLab:** [Fredholm module](https://ncatlab.org/nlab/show/Fredholm+module). It says: “A Fredholm module defines a class in K-homology, hence in KK-theory.”

**Wikipedia:** [Fredholm module](https://en.wikipedia.org/wiki/Fredholm_module), [K-homology](https://en.wikipedia.org/wiki/K-homology). It says: “a Fredholm module over A consists of an involutive representation of A on a Hilbert space H, together with a self-adjoint operator F, of square 1 and such that the commutator \[F, a\] is a compact operator”

**Sources:**

- [G. G. Kasparov, Topological invariants of elliptic operators. I: K-homology, Mathematics of the USSR-Izvestiya 9 (1975) 751–792](https://doi.org/10.1070/im1975v009n04abeh001497)

### Stabilization handles jumping Fredholm kernels

**Remember:** Enlarge the allowed target values so the inverse images form a bundle.

*Makes the theorem clean to state or prove.* MSC 19K56 (Index theory). arXiv math.KT. Level 3: graduate.

**Definition.** Consider a norm-continuous family of bounded operators between two fixed complex Hilbert spaces. Each operator is Fredholm, meaning its range is closed and its kernel and cokernel have finite dimension. Choose one finite-dimensional target subspace V whose sum with every range is the whole target. Define the family index as the bundle of inverse images of V minus the constant bundle with fiber V.

**Problem.** A continuous Fredholm family over a compact Hausdorff space has a K-theory index whose rank gives each ordinary index. The definition does not require constant kernel dimension.

**How the definition helps.** Compactness gives a finite-dimensional V spanning each target modulo the range. The induced maps to the target modulo V are surjective, so their kernels form a vector bundle (our own explanation). Its fiber dimension minus dim V equals the ordinary index, and enlarging V adds the same trivial summand to both classes. Multiplication by t on a single complex coordinate illustrates the kernel jump at t = 0.

**nLab:** [Atiyah-Jänich theorem](https://ncatlab.org/nlab/show/Atiyah-J%C3%A4nich+theorem). It says: “forms the index bundle, an X-parameterized enhancement of the Fredholm index”

**Sources:**

- [Klaus Jänich, Vektorraumbündel und der Raum der Fredholm-Operatoren (1965)](https://doi.org/10.1007/BF01360851)

### Cone boundaries give suspension isomorphisms

**Remember:** A cone has no K-groups, so its boundary map is an isomorphism.

*True by definition.* MSC 19K99 (\\(K\\)-theory and operator algebras), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a complex C\*-algebra A, a norm-closed algebra of operators closed under adjoints, its cone consists of continuous A-valued paths vanishing at zero. The suspension consists of cone paths also vanishing at one. It is therefore the kernel of evaluation at one.

**Problem.** The boundary maps identify K₀(A) with K₁ of its suspension and K₁(A) with K₀ of its suspension.

**How the definition helps.** The suspension is the kernel of evaluation, so it sits in an exact sequence with the cone and A (our own). Shrinking the path parameter contracts the cone, so its K-groups vanish. In the six-term exact sequence, zeros then lie on both sides of each boundary map. Exactness makes both boundary maps isomorphisms.

**Paper or page:** [Notes on C★-algebras](https://arxiv.org/abs/2505.17456v1), [Notes on C★-algebras](https://arxiv.org/abs/2505.17456v1). It says: “The cone CA is contractible. Hence K₀(CA) = 0 and K₁(CA) = 0.”

**Sources:** none listed. No primary source with a working link was found.

### Paths kill scalar operator K₁

**Remember:** A complex unitary can rotate all its eigenvalues back to one.

*Rules out counterexamples. Confidence: medium.* MSC 19K99 (\\(K\\)-theory and operator algebras), 19B99. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For operator K₁ of ℂ, use unitary matrices, whose conjugate transposes are their inverses. Enlarge matrices by adjoining identity blocks and identify matrices joined by continuous paths. Algebraic K₁ instead uses invertible matrices under enlargement and takes the quotient that makes multiplication commutative.

**Problem.** Operator K₁ of ℂ is zero, while algebraic K₁ of ℂ is the nonzero multiplicative group of complex numbers.

**How the definition helps.** In our own calculation, paths identify every complex unitary matrix with the identity. Diagonalize the matrix and rotate each eigenvalue along the unit circle to one. For algebraic K₁ of a field, the determinant identifies the group with its nonzero scalars. In particular, the matrix −1 survives there.

**Wikipedia:** [Operator K-theory](https://en.wikipedia.org/wiki/Operator_K-theory), [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “K₁(A) is the abelianization of the infinite general linear group”

**Sources:** none listed. No primary source with a working link was found.

### The circle unitary represents operator K₁

**Remember:** Send the circle coordinate to the unitary that represents the class.

*True by definition.* MSC 19K99 (\\(K\\)-theory and operator algebras), 46L80. arXiv math.OA, math.KT. Level 3: graduate.

**Definition.** For a unital complex C\*-algebra A, an algebra of bounded operators closed under adjoints and norm limits, use unitary matrices to define K₁(A). A unitary has its adjoint as inverse. Identify matrices joined by a continuous path after enlargement by identity blocks.

**Problem.** Every class in K₁(A) comes from the circle coordinate \[z\] ∈ K₁(C(𝕋)). A unital \*-homomorphism C(𝕋) → Mₙ(A) induces the map, using K₁(Mₙ(A)) ≅ K₁(A).

**How the definition helps.** In our own proof, a unitary representative specifies exactly where the circle coordinate must go. The theorem on continuous functions of a unitary extends this assignment to the entire algebra of continuous functions on the circle. Matrix enlargement identifies the resulting K₁ class with the original one. Starting with invertible matrices would first require deforming the representative to a unitary.

**Paper or page:** [Notes on C★-algebras](https://arxiv.org/abs/2505.17456v1). It says: “The algebra of continuous functions on the circle 𝕋 denoted C(𝕋) is the universal C★-algebra generated by u such that u\*u = uu\* = 1.”

**Sources:** none listed. No primary source with a working link was found.

### Rational Chern characters kill precisely torsion

**Remember:** Rationalization forgets precisely the classes killed by some nonzero integer.

*True by definition. Confidence: medium.* MSC 19L10 (Riemann-Roch theorems, Chern characters), 55N15. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** For an abelian group G, rationalization is the map G → G ⊗ ℚ sending g to g ⊗ 1. For finite CW complexes the rational Chern character identifies K⁰(X) ⊗ ℚ with even rational cohomology.

**Problem.** On a finite cell complex, the kernel of the Chern character on K⁰ consists exactly of classes killed by some nonzero integer.

**How the definition helps.** In our own proof, allowing rational coefficients kills exactly those elements annihilated by a nonzero integer. For finite cell complexes, the comparison theorem identifies this rationalized group with even-degree rational cohomology. It also identifies the composite with the usual Chern character defined by characteristic classes of vector bundles. The cited page describes the corresponding localization over the real numbers.

**nLab:** [Chern character](https://ncatlab.org/nlab/show/Chern+character). It says: “there is a canonical localization map”

**Sources:** none listed. No primary source with a working link was found.

### Characterizing Adams operations by line bundles makes them compose multiplicatively

**Remember:** An m-th tensor power of an n-th power is an mn-th power.

*True by definition.* MSC 19L20 (\\(J\\)-homomorphism, Adams operations), 55S25. arXiv math.AT. Level 3: graduate.

**Definition.** For each positive integer k, define ψᵏ on complex K⁰ as the unique natural ring endomorphism sending every line bundle class \[L\] to \[L⊗ᵏ\].

**Problem.** On complex K-theory of finite CW complexes, ψᵐ ∘ ψⁿ = ψᵐⁿ.

**How the definition helps.** The composite ψᵐ ∘ ψⁿ is a natural ring map that sends \[L\] to \[L⊗ᵐⁿ\], so uniqueness makes it ψᵐⁿ (our own). With Newton polynomials, one would have to compose two polynomials in exterior powers (our own). The nLab states the line-bundle property and the uniqueness of the operation. The work moves to existence, given by the Newton formulas, and to the splitting principle behind uniqueness (our own).

**nLab:** [Adams operation](https://ncatlab.org/nlab/show/Adams+operation). It says: “applied to a class x ≔ \[L\] represented by a line bundle L, ψᵏ is the kth tensor power”

**Sources:**

- [J. F. Adams, Vector Fields on Spheres (1962).](https://doi.org/10.2307/1970213)

### Circle completion gives power series

**Remember:** Complete the circle’s Laurent polynomials at the trivial character.

*Makes the theorem clean to state or prove.* MSC 19L47 (Equivariant \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** The circle’s representation ring records formal differences of finite-dimensional continuous complex representations. Let I consist of differences of dimension zero. Completion records compatible residues modulo all positive powers of I.

**Problem.** The degree-zero complex K-ring of the classifying space BS¹ = ℂP<sup>∞</sup> is the I-adic completion of the representation ring of the circle. This completion is the power series ring ℤ\[\[c\]\], where c is the universal line bundle minus the trivial line.

**How the definition helps.** The circle’s character decomposition gives R(S¹) = ℤ\[x,x⁻¹\], and the dimension ideal is (x−1). Put c = x−1. Modulo cⁿ, the finite geometric series in −c inverts 1+c, so the inverse limit is ℤ\[\[c\]\] (our own calculation). The Atiyah–Segal completion theorem identifies this limit with K⁰(BS¹), carrying x to the universal line class.

**nLab:** [Atiyah-Segal completion theorem](https://ncatlab.org/nlab/show/Atiyah-Segal+completion+theorem). It says: “the augmentation ideal is clearly generated by c ≔ x − 1.”

**Sources:**

- [Michael Atiyah and Graeme Segal, Equivariant K-theory and completion (1969)](https://doi.org/10.4310/jdg/1214428815)

### Defining equivariant K-theory by G-bundles gives the representation ring at a point

**Remember:** A bundle with a group action over one point is a representation.

*True by definition.* MSC 19L47 (Equivariant \\(K\\)-theory), 19A22. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** For a compact Lie group G acting on X, a complex G-bundle is a finite-rank complex vector bundle with continuous G-action covering that on X. Each g acts by linear isomorphisms between fibers. Define K⁰<sub>G</sub>(X) by formal differences under direct sum, with tensor product as multiplication.

**Problem.** For a compact Lie group G, equivariant K-theory of a point is the complex representation ring R(G). R(G) consists of formal differences of finite-dimensional complex representations.

**How the definition helps.** Over one point a G-bundle is a single vector space with a linear G-action, that is, a representation. The nLab says that this isomorphism follows immediately from the elementary definition. In the operator model, the same group is K₀ of the group C\*-algebra of G (our own). Identifying that with R(G) needs the Green–Julg theorem or the Peter–Weyl decomposition (our own).

**nLab:** [equivariant K-theory](https://ncatlab.org/nlab/show/equivariant+K-theory). It says: “a G-equivariant vector bundle over the point is manifestly just a linear representation of G on a complex vector space”

**Sources:**

- [Graeme Segal, Equivariant K-theory (1968).](https://www.numdam.org/item/PMIHES%5F1968%5F%5F34%5F%5F129%5F0/)

### Free actions allow equivariant descent

**Remember:** A free orbit carries no extra representation on its fibers.

*Rules out counterexamples.* MSC 19L47 (Equivariant \\(K\\)-theory), 55N91. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** An equivariant complex vector bundle carries a group action by linear maps between fibers, compatible with the action on its base. Form equivariant K⁰ by taking formal differences under direct sum. A free action means that only the identity fixes any given point.

**Problem.** For a finite group acting freely on a compact Hausdorff space, equivariant K⁰ equals ordinary K⁰ of the orbit space.

**How the definition helps.** Freeness gives each point a bundle-trivializing neighborhood disjoint from all its nonidentity translates. The quotient bundle is therefore locally trivial, and pullback recovers the original equivariant bundle. Quotient and pullback respect direct sums, giving Segal’s isomorphism (our own explanation). At a fixed point the trivial and sign lines for the order-two group have isomorphic underlying lines.

**nLab:** [equivariant K-theory](https://ncatlab.org/nlab/show/equivariant+K-theory). It says: “equivariant K-theory is given by equivalence classes of virtual equivariant bundles”

**Sources:**

- [Graeme Segal, Equivariant K-theory (1968), Proposition 2.1](https://www.numdam.org/item/PMIHES_1968__34__129_0.pdf)

### Stabilizer representations classify coset bundles

**Remember:** One fiber determines the bundle when the group moves between all base points.

*Makes the theorem clean to state or prove.* MSC 19L47 (Equivariant \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** For a compact Lie group G, a G-equivariant complex vector bundle carries a G-action that acts linearly between fibers. Degree-zero equivariant K-theory takes formal differences of such bundles. On G∕H, the subgroup H acts on the fiber over the identity coset.

**Problem.** For a closed subgroup H, the G-equivariant K-ring of G∕H is the complex representation ring of H.

**How the definition helps.** Equivariance makes one fiber with its H-action determine the whole bundle (our own explanation). The G-action carries the identity fiber to every other fiber. Conversely, an H-representation V gives the bundle G ×<sub>H</sub> V, the quotient of G × V by (gh, v) \~ (g, hv). These constructions are inverse and respect direct sums and tensor products, which gives the ring isomorphism.

**nLab:** [equivariant K-theory](https://ncatlab.org/nlab/show/equivariant+K-theory). It says: “The G-equivariant K-theory of a coset space G/H, for H ⊂ G a closed subgroup, is isomorphic to the H-equivariant K-theory of the point”

**Sources:**

- [Graeme Segal, Equivariant K-theory (1968), example (ii)](https://www.numdam.org/item/PMIHES_1968__34__129_0/)

### Classifying maps survive homotopy

**Remember:** Homotopic pullbacks give the same classifying map class.

*True by definition.* MSC 19L99 (Topological \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** For a connected pointed finite CW complex X, define reduced complex K-theory as based homotopy classes of based maps X → BU. Here BU classifies stable complex vector bundles.

**Problem.** Based homotopic maps between connected pointed finite cell complexes induce the same pullback on reduced complex K-theory.

**How the definition helps.** In the map definition, pulling back a bundle class just means composing its classifying map with the given map (our own). Composing with a deformation gives a deformation of the composites (our own). The bundle classification theorem supplies the equivalence and its compatibility with pullback.

**Paper or page:** [Topological K-Theory of Complex Projective Spaces](https://arxiv.org/abs/1303.3959). It says: “For any finite CW complex X, K̃(X) is equal to the set of homotopic maps from X to BU.”

**Sources:** none listed. No primary source with a working link was found.

### Clutching classifies sphere bundles stably

**Remember:** The determinant of the equator loop counts the stable class.

*Makes the theorem clean to state or prove.* MSC 19L99 (Topological \\(K\\)-theory), 55R50. arXiv math.AT, math.KT. Level 3: graduate.

**Definition.** Glue two trivial complex vector bundles over the hemispheres by a loop of unitary matrices along the equator. This loop is the transition function, which changes coordinates between the two trivializations. Adding a trivial bundle adds an identity block to each matrix.

**Problem.** The reduced group of virtual complex bundles of rank zero on the two-sphere is ℤ. A Hopf line, the bundle of lines over the complex projective line, minus a trivial line generates it.

**How the definition helps.** Clutching identifies stable classes with homotopy classes of stabilized equatorial unitary loops. The determinant induces an isomorphism on fundamental groups, so its winding number classifies these loops (our own calculation). Block sum multiplies determinants and adds winding numbers. A Hopf line has winding number ±1 according to orientation, so its reduced class generates.

**nLab:** [clutching construction](https://ncatlab.org/nlab/show/clutching+construction). It says: “and one single transition function on that equator Sⁿ⁻¹ → G.”

**Paper or page:** [Topological K-Theory of Complex Projective Spaces](https://arxiv.org/abs/1303.3959v1). It says: “where γ = ζ − 1̃, ζ is the Hopf bundle”

**Sources:** none listed. No primary source with a working link was found.

### Collapsing the subspace gives excision

**Remember:** Deleting points already collapsed does not change the quotient.

*True by definition.* MSC 19L99 (Topological \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** Let X be compact Hausdorff, and let A be a nonempty closed subset. Define relative complex K-theory as reduced K-theory of X/A, the space obtained by identifying A to one point. Reduced K-theory records formal differences of bundles whose ranks agree at that point. A different description uses pairs of bundles on X with an isomorphism over A after adding trivial summands.

**Problem.** Removing an open subset of X contained in A leaves relative K-theory unchanged, provided some of A remains.

**How the definition helps.** Collapsing what remains of A gives the same pointed space (our own). The natural map of quotients is a continuous bijection from a compact space to a Hausdorff space (our own). Comparing quotient classes with bundle pairs and stable identifications is the work in the bundle model (our own).

**nLab:** [topological K-theory](https://ncatlab.org/nlab/show/topological+K-theory). It says: “K(X,A) ≔ K̃(X/A).”

**Sources:** none listed. No primary source with a working link was found.

### Variable ranks capture projective modules

**Remember:** Fiber dimensions may differ between components.

*Rules out counterexamples.* MSC 19L99 (Topological \\(K\\)-theory). arXiv math.KT. Level 3: graduate.

**Definition.** Over a compact Hausdorff space X, allow complex vector bundles whose fiber dimension is locally constant. Form their K-group by taking formal differences under direct sum. Write C(X) for the ring of continuous complex-valued functions. Its algebraic K₀ records formal differences of finitely generated projective modules, the direct summands of finite free modules.

**Problem.** Taking sections identifies bundle K-theory with the algebraic K₀ of the complex continuous functions on a compact Hausdorff space.

**How the definition helps.** Allowing different ranks on different components captures the images of all continuous projection matrices (our own). On two points, the function with values one and zero acts on C(X) by projection onto the first coordinate (our own). Its image has ranks one and zero, which no difference of globally constant ranks can produce (our own). The Serre–Swan theorem identifies bundles with finitely generated projective modules by taking their sections.

**Wikipedia:** [Serre–Swan theorem](https://en.wikipedia.org/wiki/Serre%E2%80%93Swan_theorem). It says: “the category of real finite-rank vector bundles on X is equivalent to the category of finitely generated projective modules over C(X).”

**Sources:**

- [Richard G. Swan, Vector bundles and projective modules](https://doi.org/10.1090/s0002-9947-1962-0143225-6)

### Idempotents lift K₀ across nilpotent ideals

**Remember:** Idempotents lift across nilpotent ideals, and their image modules lift with them.

*True by definition.* MSC 19A49 (\\(K<sub>0</sub>\\) of other rings), 13C10. arXiv math.KT. Level 4: research.

**Definition.** A finite projective module is a direct summand of a finite free module. Equivalently, it is the image of an idempotent matrix, a matrix e satisfying e² = e. Take formal differences of these module classes under direct sum to form K₀.

**Problem.** Let I be an ideal in a commutative ring R such that some power of I is zero. Reduction gives K₀(R) ≅ K₀(R/I).

**How the definition helps.** The matrix description turns lifting a module into lifting one idempotent, which the idempotent lifting theorem supplies (our own proof). To compare two lifts, projectivity lifts an isomorphism and its inverse. Each composite differs from the identity by a map into I times the module, which is nilpotent, so each composite is invertible. So reduction is a bijection on module classes and hence on K₀.

**Paper or page:** [Algebra](https://stacks.math.columbia.edu/tag/0D47). It says: “Then there exists a finite projective R-module P such that P/IP ≅ P̄.”

**Sources:** none listed. No primary source with a working link was found.

### Steinberg kernels give second homology

**Remember:** Read second homology in the universal extension kernel.

*True by definition.* MSC 19C09 (Central extensions and Schur multipliers). arXiv math.KT. Level 4: research.

**Definition.** For a unital ring, let E be the group generated by elementary matrices after stabilization by identity blocks. Define the stable Steinberg group as the source of the universal central extension of E. Its map onto E has central kernel and admits a unique map over E to every central extension of E.

**Problem.** The kernel of the stable Steinberg extension of a unital ring is the second integral homology of its stable elementary matrix group.

**How the definition helps.** The universal description identifies the kernel by a general theorem about groups, without calculating cycles from matrix relations (our own). The theorem says that for a group generated by commutators, its universal central extension has second integral homology as kernel (our own). The ring-specific work proves that the usual Steinberg generators and relations present this universal extension (our own).

**nLab:** [Steinberg group](https://ncatlab.org/nlab/show/Steinberg+group), [Schur multiplier](https://ncatlab.org/nlab/show/Schur+multiplier). It says: “This is a universal central extension and its kernel is Milnor's K2.”

**Wikipedia:** [Steinberg group (K-theory)](https://en.wikipedia.org/wiki/Steinberg_group_%28K-theory%29). It says: “Equivalently, it is the Schur multiplier of the group of elementary matrices, so it is also a homology group”

**Sources:** none listed. No primary source with a working link was found.

### An acyclic map to an E₁-group is a plus construction

**Remember:** Into a group-like space, any acyclic map is already the plus construction.

*True by definition. Confidence: medium.* MSC 19D06 (\\(Q\\)- and plus-constructions), 55P48. arXiv math.AT, math.KT. Level 4: research.

**Definition.** A map is acyclic when its homotopy fibers have the integral homology of a point. The plus construction X → X⁺ is the acyclic map that kills the largest perfect subgroup of the fundamental group of X. An E₁-group is a space with a multiplication that is associative up to coherent homotopy and has inverses up to homotopy.

**Problem.** If X → Y is an acyclic map and Y is an E₁-group, then Y is a model for the plus construction X⁺.

**How the definition helps.** An acyclic map is onto on fundamental groups, and its kernel is perfect, that is, equal to its own commutator subgroup. An E₁-group has abelian fundamental group, so the largest perfect subgroup of π₁(X) goes to zero. So the kernel is exactly that subgroup, and Y is X⁺ (our own argument). The paper uses this to compare its group completion with other constructions.

**Paper or page:** [Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118). It says: “Let X → Y be an acyclic map with Y an E₁-group. Then Y is a model for the plus construction of X.”

**Sources:**

- [Georg Lehner, Group completion via the action ∞-category, arXiv:2405.12118 (2024)](https://arxiv.org/abs/2405.12118)

### Plus construction commutes with products

**Remember:** Products preserve both local targets and acyclic fibers.

*True by definition.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A map is acyclic if every homotopy fiber has the integral homology of a point. A space is local if mapping into it turns acyclic maps into equivalences of mapping spaces. Define the full plus construction as the universal map X → X⁺ to a local space.

**Problem.** For connected cell complexes X and Y, the canonical map (X × Y)⁺ → X⁺ × Y⁺ is a homotopy equivalence.

**How the definition helps.** The product of the two plus maps has local target because mapping into a product gives pairs of maps. Its homotopy fibers are products of acyclic fibers and are acyclic by the integral Künneth theorem. An acyclic map to a local target exhibits localization, giving the canonical equivalence (our own proof).

**Paper or page:** [Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118). It says: “It is the Bousfield localization with respect to the class of acyclic maps.”

**Sources:**

- [George Raptis, Some characterizations of acyclic maps (2019)](https://doi.org/10.1007/s40062-019-00231-6)
- [Georg Lehner, Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118)

### Plus construction is idempotent

**Remember:** Localizing a space twice changes nothing the second time.

*True by definition.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Call a map acyclic if each homotopy fiber has the integral homology of a point. A local space turns acyclic maps into equivalences when one takes spaces of maps into it. Define X⁺ by the universal map from X to a local space.

**Problem.** For a connected cell complex X, the plus map from X⁺ to (X⁺)⁺ is a homotopy equivalence.

**How the definition helps.** In our own argument, X⁺ already satisfies the target condition, so its identity map has the same universal property. The comparison theorem identifies this localization with Quillen’s construction by attaching cells.

**Paper or page:** [Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118). It says: “It is the Bousfield localization with respect to the class of acyclic maps.”

**Sources:**

- [George Raptis, Some characterizations of acyclic maps (2019)](https://doi.org/10.1007/s40062-019-00231-6)
- [Georg Lehner, Group completion via the action ∞-category](https://arxiv.org/abs/2405.12118)

### Plus covers compute second homotopy

**Remember:** Pass to the simply connected cover, then use Hurewicz.

*True by definition.* MSC 19D06 (\\(Q\\)- and plus-constructions). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Let BG be a connected space with fundamental group G and contractible universal cover. Choose a perfect normal subgroup P, meaning that its commutators generate P. The relative plus map BG → BG⁺ induces the quotient G/P and preserves homology with every coefficient module over ℤ\[G/P\]. Such modules allow loops to act on coefficients.

**Problem.** The universal cover of BG⁺ has the integral homology of BP. In particular, π₂(BG⁺) ≅ H₂(P, ℤ).

**How the definition helps.** Use the regular coefficient module ℤ\[G/P\] in the defining homology isomorphism (our own calculation). On BG it computes the homology of the P-cover BP, and on BG⁺ it computes the homology of the universal cover. Covering preserves π₂, and Hurewicz identifies π₂ of the simply connected cover with its H₂.

**Paper or page:** [Quillen's Plus Construction and the D(2) problem](https://arxiv.org/abs/2308.12541). It says: “induces the quotient map E → E/K on fundamental groups and H∗(𝒦ε⁺, 𝒦ε; M) = 0 for all left modules M over ℤ\[E/K\].”

**Sources:**

- [Wajid Mannan, Quillen's Plus Construction and the D(2) problem](https://arxiv.org/abs/2308.12541)
- [George Raptis, Some characterizations of acyclic maps (2019)](https://doi.org/10.1007/s40062-019-00231-6)

### A-theory identifies Wall’s obstruction

**Remember:** Reduce the sphere class to test whether domination comes from finiteness.

*Makes the theorem clean to state or prove.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces), 19J05. arXiv math.KT, math.AT. Level 4: research.

**Definition.** Let X be connected and finitely dominated, meaning a homotopy retract of a finite cell complex. A local system transports stable homotopy types along paths. The constant sphere system assigns the sphere spectrum everywhere with identity transport. Finite domination makes this system compact, so it represents a class in π₀A(X).

**Problem.** Under π₀A(X) ≅ K₀(ℤ\[π₁X\]), the constant sphere class lifts Wall’s finiteness obstruction. Its image modulo the rank-one free module vanishes exactly when X has the homotopy type of a finite cell complex.

**How the definition helps.** The constant sphere defines a compact local system by finite domination (our own explanation). Linearization sends its class to the universal-cover chains, represented by a finite projective complex over ℤ\[π₁X\]. The alternating sum of its projective classes modulo the free class is Wall’s obstruction. Wall’s finiteness theorem gives the vanishing criterion.

**nLab:** [Wall's finiteness obstruction](https://ncatlab.org/nlab/show/Wall%27s+finiteness+obstruction). It says: “the vanishing of Wall's finiteness obstruction is a necessary and sufficient condition for this to happen.”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)

### A-theory pushes forward along every map

**Remember:** Left adjoints carry compact objects when pullback preserves filtered colimits.

*True by definition.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Define A(X) as the algebraic K-theory of compact objects in Fun(X,Sp), the category of spectrum-valued local systems. A system L is compact if Map(L,−) preserves filtered colimits. For f ∶ X → Y, define pushforward by left Kan extension along f.

**Problem.** Every map f induces a covariant map A(X) → A(Y). Composable maps induce the composite map up to the natural coherent homotopies.

**How the definition helps.** Left Kan extension is left adjoint to restriction, which preserves filtered colimits pointwise. The adjunction then shows that pushforward preserves compact objects. Left Kan extensions compose coherently, so taking algebraic K-theory gives the asserted maps (our own proof).

**nLab:** [A-theory](https://ncatlab.org/nlab/show/A-theory). It says: “hence is the K-theory of the parametrized spectra over X”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### A-theory splits over finite disjoint unions

**Remember:** Separate components give independent compact local systems.

*True by definition.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A local system of spectra on X is a functor X → Sp from its fundamental ∞-groupoid. Call L compact if Map(L,−) preserves filtered colimits. Define A(X) as the algebraic K-theory of compact local systems on X.

**Problem.** For a finite disjoint union of spaces, A-theory is the product of the A-theory spectra of the parts.

**How the definition helps.** A system on a disjoint union is a tuple of systems, and its mapping spaces are products. Finite products commute with filtered colimits, so a finite tuple of compact systems is compact. Testing with systems supported on each individual part gives the converse. Algebraic K-theory preserves finite products, giving the splitting (our own proof).

**nLab:** [A-theory](https://ncatlab.org/nlab/show/A-theory). It says: “hence is the K-theory of the parametrized spectra over X”

**Sources:**

- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)
- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)

### A-theory transfer obeys change of base

**Remember:** Pull back a cover and the same fibers compute pushforward.

*True by definition. Confidence: medium.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Define A(X) as the K-theory of spectrum-valued local systems L on X for which Map(L,−) preserves filtered colimits. Transfer along a finite cover is restriction. Pushforward along a map takes the colimit over each homotopy fiber.

**Problem.** Pull a finite cover back along any map of spaces. Transferring along the new cover and then pushing forward gives the same A-theory map, up to homotopy, as pushing forward and then transferring.

**How the definition helps.** Both composites take colimits of the same systems over equivalent homotopy fibers, naturally in the target point (our own proof). Pushforward preserves compactness because restriction preserves filtered colimits. Restriction along a finite cover also preserves compactness, since its right adjoint uses finite products that commute with filtered colimits.

**nLab:** [retractive space](https://ncatlab.org/nlab/show/retractive+space). It says: “retractive spaces serve as a basis on which to construct parameterized spectra.”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### Assembly recovers the classical Whitehead group

**Remember:** The assembly cofiber removes signs and group elements from K₁.

*True by definition.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Assembly maps the generalized homology of X with coefficients in A(∗), the A-theory of a point, to A(X). Define the piecewise linear Whitehead spectrum as its cofiber, the stable homotopy quotient formed by collapsing the source along this map.

**Problem.** Let X be connected with fundamental group G. The first homotopy group of this cofiber is K₁(ℤ\[G\]) modulo the classes of the units ±g. This is the classical Whitehead group.

**How the definition helps.** The assembly cofiber sequence identifies π₁ of the cofiber with the cokernel on π₁ because assembly is split injective on π₀. Augmentation of the group ring gives the splitting on π₀. Under linearization, assembly on π₁ sends the coefficient sign and the loops in X to the unit classes \[−1\] and \[g\]. These generate its image, giving the stated quotient (our own explanation).

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “The Whitehead group was later discovered to be a quotient of K₁(ℤπ)”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### Based loops supply the A-theory ring

**Remember:** The basepoint generator has based loops as its endomorphisms.

*Makes the theorem clean to state or prove.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a connected based space X, let A(X) be the K-theory of compact spectrum-valued local systems. Compactness of L means that Map(L,−) preserves filtered colimits. Extend the sphere from the basepoint by left Kan extension to obtain the system of suspension spectra of based path spaces with disjoint basepoints.

**Problem.** A(X) is the algebraic K-theory of the ring spectrum Σ∞₊ΩX. The subscript plus adjoins a disjoint basepoint before suspension, and loop concatenation supplies multiplication.

**How the definition helps.** Maps from the extended sphere compute evaluation at the basepoint, which preserves filtered colimits and detects equivalences since X is connected. Thus the system is a compact generator. Its endomorphism spectrum is Σ∞₊ΩX with loop multiplication, up to the opposite convention exchanged by reversal. The compact generator theorem identifies its compact systems with perfect modules, yielding the claimed K-theory (our own explanation).

**nLab:** [A-theory](https://ncatlab.org/nlab/show/A-theory). It says: “is the algebraic K-theory of the suspension spectrum Σ∞₊(ΩX) of the loop space ΩX”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)
- [Kathryn Hess and Brooke Shipley, Waldhausen K-theory of spaces via comodules (2016)](https://doi.org/10.1016/j.aim.2015.12.019)

### Excisive A-theory turns gluing into exactness

**Remember:** Apply a homology theory to glue spaces by exact sequences.

*True by definition.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Let A(∗) be Waldhausen’s algebraic K-theory spectrum of a point. Define excisive A-theory as generalized homology with coefficients in A(∗). Its value on X is the smash product of A(∗) with the suspension spectrum of X with a disjoint basepoint. The smash product is the tensor product for stable homotopy types.

**Problem.** Gluing spaces by a homotopy pushout gives a homotopy pushout in excisive A-theory. The homotopy groups fit into the long exact sequence for the two pieces, their overlap and their union.

**How the definition helps.** Both steps of the formula, taking the suspension spectrum and smashing with A(∗), preserve homotopy pushouts (our own proof). Passing to homotopy groups gives the Mayer–Vietoris exact sequence. A separate comparison theorem matches this with the geometric source of assembly, built from constructible sheaves on finite polyhedra.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “Consideration of these questions led Waldhausen to introduce his algebraic K-theory of spaces.”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Jacob Lurie, The Assembly Map II, Lecture 25 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture25-Assembly2.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### Finite fibers alone do not give compactness

**Remember:** A finite value at each point does not ensure compactness.

*Rules out counterexamples.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A spectrum-valued local system L is compact if Map(L,−) preserves all filtered colimits of local systems. A finite spectrum is a retract of a finite cell spectrum.

**Problem.** The constant sphere local system on the classifying space of the group C₂ of order two is not compact. Its value at every point is a finite spectrum.

**How the definition helps.** Colimit preserves compact systems because its right adjoint, the constant-system functor, preserves filtered colimits (our own argument). The colimit of the constant sphere over BC₂ is Σ∞₊BC₂. Since BC₂ is infinite real projective space, its mod-two homology is nonzero in arbitrarily high degrees. A compact spectrum has bounded homology, ruling out compactness of the system.

**nLab:** [A-theory](https://ncatlab.org/nlab/show/A-theory). It says: “hence is the K-theory of the parametrized spectra over X”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### Linearization preserves the first two A-groups

**Remember:** Discard higher loop data without changing degrees zero and one.

*Makes the theorem clean to state or prove.* MSC 19D10 (Algebraic \\(K\\)-theory of spaces). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a connected based space X, let R = Σ∞₊ΩX with multiplication by loop concatenation. Its degree-zero homotopy ring is ℤ\[π₁X\]. Linearization applies K-theory to the canonical truncation R → Hℤ\[π₁X\], where the target denotes the Eilenberg–Mac Lane ring of the group ring.

**Problem.** For A-theory defined using all compact modules over R, linearization identifies π₀A(X) with K₀(ℤ\[π₁X\]) and π₁A(X) with K₁(ℤ\[π₁X\]).

**How the definition helps.** In our own explanation, the loop ring description turns linearization into the familiar operation of retaining only degree zero. R is connective, meaning its negative homotopy groups vanish. The low-degree K-theory theorem for connective rings proves that retaining degree zero preserves K₀ and K₁. Comparison with Waldhausen’s space construction identifies the two groups on the source with the stated A-theory groups.

**nLab:** [A-theory](https://ncatlab.org/nlab/show/A-theory). It says: “hence is the K-theory of the parametrized spectra over X”

**Sources:**

- [Jacob Lurie, The Algebraic K-Theory of Spaces, Lecture 21 (2014)](https://people.math.harvard.edu/~lurie/281notes/Lecture21-ATheory.pdf)
- [Friedhelm Waldhausen, Algebraic K-theory of spaces (1985)](https://doi.org/10.1007/BFb0074449)

### Nonconnective K-theory gives Bass–Heller–Swan without idempotent completeness

**Remember:** Nonconnective K-theory cannot see idempotent completion, so idempotent completeness is not needed.

*Makes the theorem clean to state or prove.* MSC 19D35 (Negative \\(K\\)-theory, NK and Nil), 18F25. arXiv math.KT, math.AT. Level 4: research.

**Definition.** For an additive category 𝒜 with automorphism Φ, use the nonconnective K-theory functor obtained by Bass delooping. Its invariance under idempotent completion identifies its values on 𝒜 and on the category obtained by adjoining images of all idempotents.

**Problem.** For every additive category 𝒜, the nonconnective K-theory K∞ of a twisted Laurent extension of 𝒜 splits as a mapping torus term plus two Nil-terms. No idempotent completeness is needed, unlike the connective version.

**How the definition helps.** Cofinality removes the need to assume idempotent completeness, since adjoining all idempotent images is a cofinal inclusion. The nonconnective twisted Bass–Heller–Swan theorem supplies the mapping torus and both Nil-terms. Cofinality explains the scope of that statement (our own interpretation).

**Paper or page:** [Vanishing of Nil-terms and negative K-theory for additive categories](https://arxiv.org/abs/2002.03412), [Vanishing of Nil-terms and negative K-theory for additive categories](https://arxiv.org/abs/2002.03412), [Vanishing of Nil-terms and negative K-theory for additive categories](https://arxiv.org/abs/2002.03412). It says: “Let I : 𝒜 → 𝒜′ be the inclusion of a full cofinal additive subcategory. … The induced map K∞(I) : K∞(𝒜) → K∞(𝒜′) is a weak homotopy equivalence.”

**Sources:**

- [Arthur Bartels, Wolfgang Lueck, Vanishing of Nil-terms and negative K-theory for additive categories, Proc. Roy. Soc. Edinburgh Sect. A 154 (2024) 1945–2023, arXiv:2002.03412](https://doi.org/10.1017/prm.2024.103)

### Regular coherent additive categories have no negative K-groups or Nil-terms

**Remember:** Finitely presented modules stay closed under kernels and admit finite projective resolutions.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D35 (Negative \\(K\\)-theory, NK and Nil), 18F25. arXiv math.KT, math.AT. Level 4: research.

**Definition.** A right module over an additive category 𝒜 is an additive functor from its opposite category to abelian groups. Call 𝒜 regular coherent if its finitely presented right modules form an abelian subcategory and each admits a finite resolution by finitely generated projectives.

**Problem.** Suppose 𝒜 and every polynomial extension 𝒜\[t₁,…,tₘ\] are regular coherent additive categories. Then all negative K-groups and all twisted Nil-groups of 𝒜 vanish.

**How the definition helps.** Regular coherence supplies the finite resolutions used in the twisted Nil vanishing theorem (our own explanation). Theorem 11.1 gives negative K-group vanishing under regular coherence of all polynomial extensions. The polynomial hypothesis matters because adjoining variables need not preserve coherence.

**Paper or page:** [Vanishing of Nil-terms and negative K-theory for additive categories](https://arxiv.org/abs/2002.03412). It says: “For instance the negative K-groups and all twisted Nil-groups vanish for an additive category if it is regular coherent.”

**Sources:**

- [Arthur Bartels, Wolfgang Lueck, Vanishing of Nil-terms and negative K-theory for additive categories, Proc. Roy. Soc. Edinburgh Sect. A 154 (2024) 1945–2023, arXiv:2002.03412](https://doi.org/10.1017/prm.2024.103)

### An equalizer restores injectivity

**Remember:** Enlarge the residue field, then keep the classes independent of the new variable.

*Rules out counterexamples.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** For a commutative local ring A, form A(t) and A(t₁,t₂) by inverting polynomials whose coefficients generate the unit ideal. Define improved Kₙᴹ(A) as the equalizer of the two maps Kₙᴹ(A(t)) → Kₙᴹ(A(t₁,t₂)) substituting t₁ and t₂ for t.

**Problem.** If A is a complete discrete valuation ring with finite residue field, improved Milnor K-theory injects into Milnor K-theory of its fraction field.

**How the definition helps.** Dahlhausen’s injectivity theorem rules out ordinary symbols that vanish over the fraction field, such as 2{5,5} over the 2-adic integers (our own example). No unit there has a unit complement, so ordinary K₂ᴹ is the tensor square of the units. A cyclic order-four quotient sending 5 to a generator detects twice its tensor square. Antisymmetry kills this doubled symbol over the fraction field, so its image in the improved group vanishes.

**Paper or page:** [Ramified class field theory and duality over finite fields](https://arxiv.org/abs/2104.03029v1). It says: “These two maps are isomorphisms if A is either a field or a local ring with infinite residue field.”

**Sources:**

- [Moritz Kerz, Milnor K-theory of local rings with finite residue fields (2010)](https://doi.org/10.1090/S1056-3911-09-00514-1)
- [Christian Dahlhausen, Milnor K-theory of complete discrete valuation rings with finite residue fields (2018)](https://doi.org/10.1016/j.jpaa.2017.07.002)

### Differential dimension bounds Milnor degrees

**Remember:** A wedge of length greater than the differential dimension vanishes.

*True by definition.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** In a field F of prime characteristic p, a logarithmic differential is da/a for a nonzero element a. Represent a degree n Milnor symbol modulo p by the alternating product of the logarithmic differentials of its entries.

**Problem.** If F is of degree pᵈ over its subfield of p-th powers, its Milnor groups modulo p vanish in degrees greater than d. The group in degree d is nonzero.

**How the definition helps.** In the differential description, an alternating product vanishes as soon as its length exceeds the dimension of the one-forms. Our own argument chooses a p-basis b₁, …, b<sub>d</sub> of F, so that db₁, …, db<sub>d</sub> form a basis of the one-forms. Then all forms of degree above d vanish, and the product of the db<sub>i</sub>/b<sub>i</sub> is nonzero in degree d. The Bloch–Gabber–Kato theorem identifies this differential description with Milnor K-theory modulo p.

**Paper or page:** [Brauer p-dimension of henselian discretely valued fields over characteristic p &gt; 0](https://arxiv.org/abs/2410.02938v1). It says: “\\phi ^n<sub>F</sub>:K<sup>M<sub>n</sub></sup>(F)/p\\rightarrow H<sup>n</sup>(F,\\mathbb {Z}/p(n))\\cong \\Omega ^n<sub>F,\\log </sub>”

**Sources:**

- [Spencer Bloch and Kazuya Kato, p-adic etale cohomology (1986)](https://pmihes.centre-mersenne.org/articles/10.1007/BF02831624/)

### Inverting eta gives periodic Witt theory

**Remember:** After inversion, every degree is a copy of degree zero.

*Makes the theorem clean to state or prove.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** For a field F of characteristic different from two, localize its graded Milnor–Witt ring at the powers of its central degree-minus-one element η. The localized ring is universal among graded rings under the Milnor–Witt ring in which η is invertible.

**Problem.** The resulting graded ring is W(F)\[t,t⁻¹\], with t in degree one and η mapping to t⁻¹. The Witt ring W(F) identifies nonsingular symmetric forms up to adding hyperbolic planes.

**How the definition helps.** After localization, powers of η identify all degrees with degree zero. Morel’s calculation identifies the negative degrees with W(F), compatibly with multiplication and the transition maps given by η. Their stable value gives the localized degree-zero ring, and t = η⁻¹ generates the remaining degrees (our own explanation).

**Paper or page:** [Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2). It says: “Let W(K)\[t,t⁻¹\] be the t-periodic ℤ-graded algebra with t a formal variable in degree 1.”

**Sources:**

- [Frédéric Déglise, Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2)
- [Fabien Morel, A¹-Algebraic Topology over a Field (2012)](https://link.springer.com/book/10.1007/978-3-642-29514-0)

### Killing eta restores Milnor symbols

**Remember:** Kill eta, and the product rule becomes ordinary additivity.

*True by definition.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** Over a field F, take the graded unital associative ring on degree-one generators \[a\] for a ∈ F× and a central degree-minus-one generator η. Impose \[ab\] = \[a\] + \[b\] + η\[a\]\[b\] for all a,b ∈ F×. Impose \[a\]\[1−a\] = 0 for a ∉ {0,1} and η(2 + η\[−1\]) = 0.

**Problem.** The quotient of the Milnor–Witt ring by η is the Milnor K-ring, with \[a\] mapping to {a}.

**How the definition helps.** Setting η to zero leaves \[ab\] = \[a\] + \[b\] and \[a\]\[1−a\] = 0. These are exactly the Milnor K-ring relations, so the two presentations identify corresponding generators (our own argument).

**Paper or page:** [Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2). It says: “\\operatorname K<sup>MW</sup><sub>\*</sub>(K) \\xrightarrow {\\gamma \_\\eta } \\operatorname K<sup>MW</sup><sub>\*</sub>(K) \\xrightarrow F \\operatorname K<sup>M<sub>\*</sub></sup>(K) \\rightarrow 0”

**Sources:**

- [Frédéric Déglise, Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2)
- [Fabien Morel, A¹-Algebraic Topology over a Field (2012)](https://link.springer.com/book/10.1007/978-3-642-29514-0)

### Logarithmic forms capture symbols

**Remember:** Logarithmic wedges generate the target by addition.

*Makes the theorem clean to state or prove.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** Let F have prime characteristic p. A logarithmic differential is da/a for a nonzero field element a, where d denotes the formal derivative over the prime field. In degree n ≥ 1 take the additive subgroup generated by alternating products, called wedges, of n logarithmic differentials.

**Problem.** Sending a Milnor symbol to the wedge of the logarithmic differentials of its entries identifies degree n modulo p with this logarithmic subgroup.

**How the definition helps.** The target consists precisely of sums of images of symbols (our own). The differential product rule gives multilinearity, and da ∧ d(1−a) = 0 gives the Steinberg relation. Characteristic p kills multiples of p, and the Bloch–Gabber–Kato theorem gives injectivity modulo p.

**Paper or page:** [Brauer p-dimension of henselian discretely valued fields over characteristic p &gt; 0](https://arxiv.org/abs/2410.02938v1). It says: “\\phi ^n<sub>F</sub>:K<sup>M<sub>n</sub></sup>(F)/p\\rightarrow H<sup>n</sup>(F,\\mathbb {Z}/p(n))\\cong \\Omega ^n<sub>F,\\log </sub>”

**Sources:**

- [Spencer Bloch and Kazuya Kato, p-adic etale cohomology (1986)](https://pmihes.centre-mersenne.org/articles/10.1007/BF02831624/)

### Normal lines remove uniformizer dependence

**Remember:** The basis change and the square-class factor cancel.

*Rules out counterexamples.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** For a discrete valuation with maximal ideal 𝔪 and residue field k, put L = (𝔪/𝔪²)∨. Index coefficient copies by nonzero ℓ ∈ L and identify x ⊗ uℓ with ⟨u⟩x ⊗ ℓ for every u ∈ k×. A uniformizer π supplies the basis dual to its class in 𝔪/𝔪².

**Problem.** The Milnor–Witt residue with this target is independent of the uniformizer. On a symbol starting with the uniformizer and followed by units, it gives the reduced unit symbol tensored with that dual basis.

**How the definition helps.** Over ℝ((t)), the untwisted residues of \[t\] for t and −t are ⟨1⟩ and ⟨−1⟩ (our own example). Replacing π by uπ multiplies the residue by ⟨ū⟩ and its dual basis by ū⁻¹, where ū denotes reduction. The twist cancels these factors by its defining relation (our own). The residue formula for a uniformizer followed by units gives the stated symbol.

**Paper or page:** [Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2). It says: “\\partial \_v:\\operatorname K<sup>MW</sup><sub>n</sub>(K) \\rightarrow \\operatorname K<sup>MW</sup><sub>n-1</sub>(\\kappa \_v,\\omega \_v)”

**Sources:**

- [Frédéric Déglise, Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2)
- [Fabien Morel, A¹-Algebraic Topology over a Field (2012)](https://link.springer.com/book/10.1007/978-3-642-29514-0)

### Witt quotients make symbols multilinear

**Remember:** Products of binary forms become multilinear after passing to successive quotients.

*Makes the theorem clean to state or prove.* MSC 19D45 (Higher symbols, Milnor \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** In the Witt ring W of a field F of characteristic different from two, let I denote the ideal of even-dimensional classes. Its associated graded ring has degree-n part Iⁿ/Iⁿ⁺¹ for every n ≥ 0, with I⁰ = W. Multiplication takes representatives, multiplies them in W, and reduces modulo the next ideal power.

**Problem.** Multiplying the binary classes gives a graded surjection from the Milnor K-ring modulo two onto the graded Witt ring. This map is an isomorphism.

**How the definition helps.** Passing to the next quotient removes exactly the product term that spoils additivity in a symbol entry (our own). With b(a) = 1 − ⟨a⟩, one has b(ac) = b(a) + b(c) − b(a)b(c), and the last term lies in I². The form b(a)b(1 − a) is hyperbolic and 2 lies in I, so the map is defined on Milnor K modulo two. Binary classes generate I, which gives surjectivity, and the theorem of Orlov, Vishik and Voevodsky gives injectivity.

**Paper or page:** [Notes on Milnor-Witt K-theory](https://arxiv.org/abs/2305.18609v2). It says: “the map K× → I(K), u ↦ ⟨⟨u⟩⟩ induces a ring morphism”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)
- [Dmitri Orlov, Alexander Vishik and Vladimir Voevodsky, An exact sequence for Kᴹ/2 with applications to quadratic forms (2007)](https://doi.org/10.4007/annals.2007.165.1)

### Finite coefficients make K-theory invariant under extensions of algebraically closed fields

**Remember:** Take the cofiber of multiplication by n to get finite coefficients.

*Rules out counterexamples.* MSC 19D50 (Computations of higher \\(K\\)-theory of rings), 19E08. arXiv math.KT, math.AG. Level 4: research.

**Definition.** For n ≥ 2, the mod-n K-groups of coherent sheaves on X are the homotopy groups of the cofiber of multiplication by n on G(X). Here G(X) is the K-theory spectrum of coherent sheaves on X.

**Problem.** Let E/F be an extension of algebraically closed fields, X a variety over F, and n ≥ 2 invertible in F. Base change to E induces isomorphisms on all mod-n K-groups of coherent sheaves on X.

**How the definition helps.** The cofiber removes the integral degree-one obstruction for ℚ̄ ⊂ ℂ (our own). Their unit groups have different cardinalities, but every unit has an nth root and neither K₀ has n-torsion. Suslin rigidity gives the comparison for varieties in every degree.

**Wikipedia:** [Rigidity (K-theory)](https://en.wikipedia.org/wiki/Rigidity_%28K-theory%29). It says: “Suslin rigidity, named after Andrei Suslin, refers to the invariance of mod-n algebraic K-theory under the base change between two algebraically closed fields”

**Sources:**

- [A. Suslin, On the K-theory of algebraically closed fields, Inventiones Mathematicae 73 (1983) 241–245](https://doi.org/10.1007/BF01394024)

### Invertible coefficients give Henselian rigidity

**Remember:** Use orders prime to the residue characteristic when reducing.

*Rules out counterexamples.* MSC 19D50 (Computations of higher \\(K\\)-theory of rings). arXiv math.KT. Level 4: research.

**Definition.** A commutative local ring has one maximal ideal, and its quotient by that ideal is the residue field. Call the ring Henselian if every coprime monic factorization of a reduced monic polynomial lifts to a monic factorization of the original. Take coefficients modulo an integer m ≥ 2 that is a unit in the ring.

**Problem.** Let R be Henselian local with residue field k, and let m ≥ 2 be invertible in R. Reduction identifies Kₙ(R; ℤ/m) with Kₙ(k; ℤ/m) for every n ≥ 0. For the p-adic integers with m = p odd, reduction in degree one fails to be injective.

**How the definition helps.** The invertibility condition lets Hensel lifting extract mth roots of units congruent to one, in our own explanation. Without it, 1 + p need not have a pth root. In our own example, such a root would equal one modulo p, so its pth power would equal one modulo p². Gabber’s rigidity theorem supplies the result in all degrees.

**nLab:** [Henselian pair](https://ncatlab.org/nlab/show/Henselian+pair). It says: “for any monic polynomial f ∈ R\[T\] and factorization”

**Sources:**

- [Ofer Gabber, K-theory of Henselian local rings and Henselian pairs (1992)](https://doi.org/10.1090/conm/126/00509)

### Reduction removes the constant defect

**Remember:** Kill the constant before treating complementary symbols as negatives.

*Rules out counterexamples.* MSC 19D50 (Computations of higher \\(K\\)-theory of rings). arXiv math.KT. Level 4: research.

**Definition.** In the five-term pre-Bloch group of a number field F, put c = \[x\] + \[1−x\] for any x ∈ F ∖ {0,1}. The reduced presentation is the quotient by the subgroup generated by c.

**Problem.** In the reduced presentation, complementary pre-Bloch symbols satisfy \[1 − x\] = −\[x\]. This fails in the unreduced presentation over ℚ, where c is nonzero.

**How the definition helps.** Killing c turns the complementary-symbol identity into a defining relation (our own). Suslin proves that the sum is independent of x. Over ℚ it has order six, so the unreduced group retains a genuine obstruction (our own).

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792v2). It says: “B̄(F) is exactly B(F)/⟨cꜰ⟩.”

**Sources:**

- [Andrei A. Suslin, K₃ of a field and the Bloch group (1990), §1](https://www.maths.dur.ac.uk/users/herbert.gangl/Suslin_K3_Bloch_group.pdf)
- [Wenhuan Huang, A full-rank subgroup of Bloch Groups of CM Fields (2025), Lemma 1 and Theorem 2](https://arxiv.org/abs/2507.05792v2)

### Coinvariants restore ordinary pre-Bloch groups

**Remember:** Forget square classes and keep the same deletion rule.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 4: research.

**Definition.** Over an infinite field F, generate an abelian group by ordered quadruples of distinct points of the projective line modulo determinant-one projective transformations. For every ordered quintuple of distinct points, impose the alternating sum of its four-point faces as a relation. This is the refined pre-Bloch presentation.

**Problem.** Determinants modulo nonzero squares act on this group through projective transformations. Taking coinvariants, which identify every element with all its translates, gives the ordinary pre-Bloch group.

**How the definition helps.** Taking coinvariants identifies exactly the extra quadruples related by arbitrary projective transformations (our own). A projective matrix can be rescaled to determinant one precisely when its determinant is a square. The five-point relations therefore pass to the same alternating boundaries on projective orbits. A cross-ratio, the fourth coordinate after moving the first three points to 0, ∞, 1, labels each such quadruple orbit (our own).

**Paper or page:** [The third homology of SL₂ of real quadratically closed fields](https://arxiv.org/abs/2107.13915v1). It says: “denote the set of ordered n-tuples \[z₁, …, zₙ\] of distinct points of F× ∖ {1}.”

**Sources:**

- [Kevin Hutchinson, A Bloch–Wigner complex for SL₂ (2013)](https://doi.org/10.1017/is013003031jkt13222)

### Completed tensor products make cyclic homology of smooth functions de Rham theory

**Remember:** Complete the tensor products, and smooth functions recover smooth forms.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 58B34, 58A12. arXiv math.KT, math.OA. Level 4: research.

**Definition.** For a compact smooth manifold M, give A = C∞(M) the topology of uniform convergence of all derivatives. The continuous Hochschild and cyclic complexes use the completed projective tensor power of A in each chain group of the cyclic bar construction.

**Problem.** For a compact manifold M, continuous Hochschild homology HHₙ of C∞(M) is the space Ωⁿ(M) of smooth n-forms (Connes). Continuous periodic cyclic homology HP₀ and HP₁ are the even and odd de Rham cohomology of M.

**How the definition helps.** With completed tensor powers, Hochschild chains are smooth functions on powers of M, so the diagonal in M × M can be used. Connes uses it to build a continuous resolution and get the smooth forms. The periodic result then follows as for smooth algebras, with B matching d (our own summary). The algebraic Kähler differentials of C∞(M) are much larger than smooth 1-forms, so the algebraic definition gives the wrong HH₁ (our own).

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology), [Noncommutative geometry](https://en.wikipedia.org/wiki/Noncommutative_geometry). It says: “Cyclic homology and cyclic cohomology provide noncommutative analogues of de Rham homology and cohomology.”

**Sources:**

- [A. Connes, Non-commutative differential geometry, Publ. Math. IHÉS 62 (1985) 41–144](https://doi.org/10.1007/BF02698807)

### Connes' operator B becomes the de Rham differential on smooth algebras

**Remember:** Hochschild becomes forms, B becomes d, cyclic becomes de Rham.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 14F40, 16E40. arXiv math.KT, math.AG. Level 4: research.

**Definition.** A mixed complex has graded operators b and B of degrees −1 and 1 satisfying b² = B² = bB+Bb = 0. The Hochschild chains of an algebra form a mixed complex with Hochschild boundary b and Connes’ operator B.

**Problem.** Let A be a smooth commutative algebra over a field of characteristic 0, with algebraic de Rham cohomology groups Hⁱ. Then HCₙ(A) ≅ Ωⁿ/dΩⁿ⁻¹ ⊕ Hⁿ⁻² ⊕ Hⁿ⁻⁴ ⊕ ⋯, and HPᵢ(A) is the product of the groups Hⁱ⁺²ᵐ.

**How the definition helps.** The normalized forms map sends a₀ ⊗ ⋯ ⊗ aₙ to a₀da₁⋯daₙ/n! and intertwines B with d (our own summary). Hochschild–Kostant–Rosenberg identifies its b-homology, so it induces cyclic and periodic cyclic isomorphisms. In the forms complex the boundary b vanishes, leaving columns joined only by d, which gives the stated groups.

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “In particular, if the variety V=Spec A is smooth, cyclic cohomology of A are expressed in terms of the de Rham cohomology of V as follows”

**Sources:**

- [J.-L. Loday, D. Quillen, Cyclic homology and the Lie algebra homology of matrices, Comment. Math. Helv. 59 (1984) 565–591](https://doi.org/10.1007/bf02566367)

### Cyclic cohomology as Ext over the cyclic category makes periodicity a product

**Remember:** Cyclic cohomology is a module over the cohomology of the infinite complex projective space.

*True by definition. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 18G90. arXiv math.KT, math.CT. Level 4: research.

**Definition.** For a unital k-algebra A, its cyclic module A♯ has degree-n term A⊗⁽ⁿ⁺¹⁾, with multiplication faces, unit degeneracies, and cyclic rotation. Define HCⁿ(A) as Extⁿ(A♯, k♯) in cyclic k-modules, where k♯ is constant with value k.

**Problem.** Over a field k, the Ext ring of k♯ with itself is the polynomial ring k\[u\] with u in degree 2. So every HC\*(A) is a graded k\[u\]-module, and Connes' periodicity operator S is multiplication by u.

**How the definition helps.** Composition of extensions makes HC\*(A) a module over Ext\*(k♯, k♯) (our own summary). That ring is H\*(BΛ;k) = H\*(BS¹;k) = k\[u\]. Connes’ comparison identifies composition with u as the periodicity operator S.

**nLab:** [cyclic homology](https://ncatlab.org/nlab/show/cyclic+homology). It says: “Connes gave another definition by associating to A a cyclic vector space A♯, and showing that the cyclic homology of A may be computed as via Ext-groups Ext\*(A♯, k♯).”

**Wikipedia:** [Cyclic category](https://en.wikipedia.org/wiki/Cyclic_category). It says: “The classifying space BΛ of the cyclic category is a classifying space BS¹ of the circle group S¹.”

**Sources:**

- [A. Connes, Cohomologie cyclique et foncteurs Extⁿ, C. R. Acad. Sci. Paris Sér. I 296 (1983) 953–958](https://alainconnes.org/wp-content/uploads/n83.pdf)

### Cyclic homology of dg categories makes it an invariant of perfect complexes

**Remember:** Cyclic homology belongs to the category of perfect complexes, not the scheme.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 18G80, 14F40. arXiv math.KT, math.AG. Level 4: research.

**Definition.** A dg category has chain complexes of morphisms, and Keller defines its cyclic homology through a mixed complex built from chains of composable morphisms. For a scheme X, Perf(X) is the dg category of perfect complexes, those locally equivalent to bounded complexes of vector bundles. Weibel's earlier definition of the cyclic homology of X glues the cyclic complexes of affine pieces by hypercohomology.

**Problem.** For a quasi-compact separated scheme X over a field, Weibel's cyclic homology of X is canonically isomorphic to that of Perf(X) (Keller). So schemes with equivalent dg categories of perfect complexes have the same cyclic homology.

**How the definition helps.** Defined on dg categories, cyclic homology is invariant under equivalences of dg categories (our own summary). Keller's theorem moves the scheme definition into this setting, so the invariance follows at once. The work went into Keller's localization theorem, which turns exact sequences of dg categories into exact sequences in cyclic homology.

**nLab:** [cyclic homology](https://ncatlab.org/nlab/show/cyclic+homology). It says: “he showed that the cyclic homology of the dg-category of perfect complexes on a (nice) scheme X coincides with the cyclic homology of X in the sense of Weibel.”

**Paper or page:** [On a theorem of Keller over a base ring](https://arxiv.org/abs/2511.09264). It says: “Keller proved a theorem stating that the cyclic homology of X is canonically isomorphic to the cyclic homology of the dg category Perf(X) consisting of perfect complexes over X. This theorem shows the categorical nature of the cyclic homology.”

**Sources:**

- [B. Keller, On the cyclic homology of ringed spaces and schemes, Doc. Math. 3 (1998) 231–259](https://doi.org/10.4171/dm/42)

### Cyclic interchange changes coefficient rings

**Remember:** One cyclic order multiplies over S, and the other retains the tensor over R.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For associative ring spectra R and S, let M be an R–S bimodule and N an S–R bimodule. Cyclic symmetry of a shadow gives a natural equivalence between its values on M ⊗ₛ N over R and N ⊗ᵣ M over S. Both tensors are derived.

**Problem.** Let R → S be a map of associative ring spectra. Topological Hochschild homology of R with coefficients S agrees with that of S with coefficients S ⊗ᵣ S. The tensor over R is derived, so it retains homotopy information.

**How the definition helps.** The shadow rule swaps the two copies of S viewed as bimodules in opposite directions (our own). In one order the tensor is over S and gives S (our own). In the other it is over R and gives the displayed coefficients (our own). The comparison with the usual cyclic bar model requires proving that topological Hochschild homology has this symmetry (our own).

**Paper or page:** [Whitehead Filtrations for Computations in Topological Hochschild Homology](https://arxiv.org/abs/2311.06717v4). It says: “we have an equivalence THH(R,S) ≃ THH(S, S ⊗ᵣ S).”

**Sources:**

- [Logan Hyslop, Whitehead filtrations for computations in topological Hochschild homology](https://doi.org/10.2140/agt.2026.26.2443)

### Cyclic invariance makes cocycles pair with K-theory

**Remember:** A cyclic cocycle acts like a trace, so it sees only K-theory classes.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 46L80, 58B34. arXiv math.KT, math.OA. Level 4: research.

**Definition.** A cyclic n-cocycle on A is an (n+1)-linear form φ with bφ = 0, where b is the Hochschild coboundary. Rotating its arguments changes φ only by the sign (−1)ⁿ. In degree 0 it is a trace, with φ(ab) = φ(ba).

**Problem.** Let A be a unital complex algebra and φ a cyclic 2m-cocycle on A, extended to matrices by the generalized trace. For every idempotent matrix e, φ(e, …, e) depends only on \[φ\] in HC²ᵐ(A) and \[e\] in K₀(A).

**How the definition helps.** Cyclic invariance lets a cocycle act like a trace, so φ(e, …, e) makes sense for idempotent matrices (our own summary). A coboundary bψ gives zero on (e, …, e), because e² = e and the cyclic sign forces ψ(e, …, e) = 0 (our own). Inner automorphisms act trivially on cyclic cohomology, so conjugate idempotents give the same number. The work went into Connes' proof of that triviality.

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “Cyclic cohomology is in fact endowed with a pairing with K-theory, and one hopes this pairing to be non-degenerate.”

**Paper or page:** [A combinatorial integration on the Cantor dust](https://arxiv.org/abs/2209.03537). It says: “the Connes’ pairing of the cyclic 2-cocycle \[φ\] with \[p\] is expressed as follows”

**Sources:**

- [A. Connes, Non-commutative differential geometry, Publ. Math. IHÉS 62 (1985) 41–144](https://doi.org/10.1007/BF02698807)

### Cyclotomic sphere maps give equalizers

**Remember:** A map from the cyclotomic sphere must commute with every Frobenius.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A cyclotomic spectrum is a spectrum X with a circle action and, for each prime p, an equivariant map X → Xᵗᶜᵖ. The target is the Cₚ-Tate construction with residual circle action transported along S¹ ≅ S¹/Cₚ. Topological cyclic homology is the mapping spectrum from the cyclotomic sphere to X.

**Problem.** For bounded-below cyclotomic X, TC(X) is the homotopy equalizer of two maps from X<sup>(hS¹)</sup> to ∏ₚ (X<sup>(tCₚ)</sup>)<sup>(hS¹)</sup>. The maps come from the Frobenius maps and the canonical comparison, respectively.

**How the definition helps.** A map from the sphere gives a circle homotopy fixed point together with a homotopy of compatibility for every Frobenius (our own). These data define the stated homotopy equalizer. Nikolaus and Scholze compare this mapping spectrum with classical TC for bounded-below spectra.

**nLab:** [cyclotomic spectrum](https://ncatlab.org/nlab/show/cyclotomic+spectrum). It says: “where the circle action on the Tate spectrum comes from the canonical identification S¹/Cₚ ≃ S¹.”

**Sources:**

- [Thomas Nikolaus and Peter Scholze, On topological cyclic homology](https://people.mpim-bonn.mpg.de/scholze/CyclotomicSpectra.pdf)

### Fontaine's map is the initial complete thickening

**Remember:** Every complete thickening of a perfectoid ring receives a unique map from Ainf.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 14G45, 14F30. arXiv math.KT, math.AG. Level 4: research.

**Definition.** For a perfectoid ring R, the tilt R♭ is the inverse limit of R/p along Frobenius, a perfect ring of characteristic p. Fontaine's map θ goes from Ainf(R) = W(R♭), the Witt vectors of the tilt, onto R. It is initial among surjections D → R where D is complete both p-adically and for the kernel of the surjection.

**Problem.** For a perfectoid ring R, the ring π₀TC⁻(R;ℤp) is naturally isomorphic to Ainf(R) = W(R♭). Under this isomorphism the map to π₀THH(R;ℤp) = R is Fontaine's map θ.

**How the definition helps.** The universal property gives the comparison map without any choices, so the isomorphism can be stated. The map from π₀TC⁻(R;ℤp) to π₀THH(R;ℤp) = R is a surjection from a ring complete in both senses (our own). So the universal property gives a unique ring map from W(R♭) to π₀TC⁻ over R. The work that remains is to show that this map is an isomorphism, which Bhatt, Morrow and Scholze do with Bökstedt periodicity (our own summary).

**Paper or page:** [Perfectoid rings as Thom spectra](https://arxiv.org/abs/2003.08697). It says: “Let R be a perfectoid ring. Then Fontaine’s map θ : W(R♭) → R is initial among surjections θ<sub>D</sub> : D → R of rings such that the ring D is both p-adically complete and ker θ<sub>D</sub>-adically complete.”

**Sources:**

- [Zhouhang Mao, Perfectoid rings as Thom spectra, arXiv:2003.08697 (2021)](https://arxiv.org/abs/2003.08697)
- [Bhargav Bhatt, Matthew Morrow and Peter Scholze, Topological Hochschild homology and integral p-adic Hodge theory, Publ. Math. IHÉS 129 (2019)](https://doi.org/10.1007/s10240-019-00106-9)

### Groups need no logarithmic correction

**Remember:** Group completion leaves a group unchanged, so the bar correction is the identity.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a commutative monoid M, its cyclic bar Bᶜʸ(M) has n-simplices Mⁿ⁺¹ and augmentation given by multiplication. Its replete bar is the homotopy pullback of Bᶜʸ(Mᵍᵖ) → Mᵍᵖ along M → Mᵍᵖ, where Mᵍᵖ is the group completion.

**Problem.** Suppose an abelian group M maps multiplicatively to a commutative ring A. The canonical map from ordinary topological Hochschild homology of A to its log version for (A, M) is an equivalence.

**How the definition helps.** Group completion acts as the identity on M, so pulling back recovers its original cyclic bar (our own). Extending scalars along this equivalence leaves ordinary topological Hochschild homology unchanged (our own). The cited proposition identifies the logarithmic theory with this change of scalars.

**Paper or page:** [Logarithmic Prismatic Cohomology via Logarithmic THH](https://arxiv.org/abs/2306.01368v2). It says: “There is a natural equivalence THH(A, M) ≃ THH(A) ⊗₍𝕊\[Bᶜʸᶜ(M)\]₎ 𝕊\[M ×₍Mᵍᵖ₎ Bᶜʸᶜ(Mᵍᵖ)\] of E∞-ring spectra.”

**Sources:**

- [Federico Binda, Tommy Lundemo, Doosung Park and Paul Arne Østvær, Logarithmic Prismatic Cohomology via Logarithmic THH](https://arxiv.org/abs/2306.01368v2)

### H-unitality is exactly the condition for excision in cyclic homology

**Remember:** An acyclic bar complex is a unit good enough for homology.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 16E40. arXiv math.KT, math.OA. Level 4: research.

**Definition.** An associative algebra I over a field is H-unital if its reduced bar complex has zero homology in every degree. In degree n ≥ 1 this complex has term I⊗ⁿ and differential the alternating sum of adjacent multiplications.

**Problem.** Over a field of characteristic 0, an algebra I has excision for Hochschild and cyclic homology exactly when I is H-unital (Wodzicki). For example, smooth compactly supported functions on a Lie groupoid form an H-unital convolution algebra, so excision holds for them.

**How the definition helps.** H-unitality is exactly the property that the proof of excision uses (our own). An acyclic bar complex stands in for a unit when one compares the complex of I with the relative complex (our own summary). Checking excision then means checking that one complex is acyclic, as in the groupoid example. The work went into Wodzicki's comparison of the two complexes.

**Paper or page:** [H-Unitality of Smooth Groupoid Algebras](https://arxiv.org/abs/2307.00232). It says: “Let A be an associative algebra over ℂ. Then, the following are equivalent: A has the excision property for Hochschild homology. A has the excision property for cyclic homology. A is H-unital.”

**Sources:**

- [M. Wodzicki, Excision in cyclic homology and in rational algebraic K-theory, Ann. of Math. 129 (1989) 591–639](https://doi.org/10.2307/1971518)

### Linearization preserves the logarithmic correction

**Remember:** The pushout that changes the monoid bar survives the change of base ring.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a commutative pre-log ring (A,M), put B = Bᶜʸ(M) and let C be the homotopy pullback of Bᶜʸ(Mᵍᵖ) → Mᵍᵖ along M → Mᵍᵖ. Derived log Hochschild homology tensors HH(A) with ℤ\[C\] over ℤ\[B\] in the derived sense, using M → A and repletion B → C.

**Problem.** For an ordinary pre-log ring, write THH for topological Hochschild homology, the version built from spectra. Extending scalars in log THH from THH(ℤ) to ℤ gives derived log Hochschild homology over ℤ.

**How the definition helps.** Writing the log correction as a pushout lets extension of scalars pass through it (our own). Both operations use derived tensor products, which preserve the homotopy information in this gluing (our own). The ordinary comparison identifies the underlying topological and algebraic constructions after this scalar extension (our own).

**Paper or page:** [Logarithmic Prismatic Cohomology via Logarithmic THH](https://arxiv.org/abs/2306.01368v2). It says: “There is a natural equivalence HH(A, M) ≃ ℤ ⊗₍THH(ℤ)₎ THH(A, M) of E∞-rings.”

**Sources:**

- [Federico Binda, Tommy Lundemo, Doosung Park and Paul Arne Østvær, Logarithmic Prismatic Cohomology via Logarithmic THH](https://arxiv.org/abs/2306.01368v2)

### Periodic cyclic homology ignores positive gradings, unlike cyclic homology

**Remember:** Allow Laurent series in u so the periodicity variable becomes invertible.

*Rules out counterexamples. Confidence: low.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 16E40. arXiv math.KT. Level 4: research.

**Definition.** For the Hochschild mixed complex (C,b,B) over k, give u degree −2. Periodic cyclic homology is the homology of the Laurent series complex C((u)) with differential b + uB.

**Problem.** Let A = A₀ ⊕ A₁ ⊕ A₂ ⊕ ⋯ be a graded algebra over a field of characteristic 0. Then HP\*(A) ≅ HP\*(A₀), so HP\*(A\[t\]) ≅ HP\*(A), while HC₀(k\[t\]) = k\[t\] differs from HC₀(k) = k (Goodwillie).

**How the definition helps.** Goodwillie shows that S composed with the action of a derivation on HC is zero, so derivations act as zero on HP (our own summary). The Euler derivation, which multiplies the weight-n part by n, then kills every positive weight in HP in characteristic 0 (our own summary). HC keeps these weights, as the polynomial ring shows. The work went into Goodwillie's homotopy formula for derivations on the cyclic complex.

**Paper or page:** [Equivariant periodic cyclic homology for ample groupoids](https://arxiv.org/abs/2506.06503). It says: “In analogy to the group case, we show that the theory satisfies homotopy invariance, stability, and excision in both variables.”

**Sources:**

- [T. G. Goodwillie, Cyclic homology, derivations, and the free loopspace, Topology 24 (1985) 187–215](https://doi.org/10.1016/0040-9383(85)90055-2)

### Periodic cyclic homology is unchanged by nilpotent extensions

**Remember:** Periodic chains allow infinite power series and finitely many negative powers of u.

*Rules out counterexamples. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 19D50. arXiv math.KT. Level 4: research.

**Definition.** For the Hochschild mixed complex (C,b,B) over k, give u degree −2. Periodic cyclic homology is the homology of the Laurent series complex C((u)) with differential b + uB.

**Problem.** Let I be a nilpotent ideal in an algebra A over a characteristic-zero field k. Goodwillie’s theorem identifies HP\*(A) with HP\*(A/I) by reduction. For k\[ε\]/(ε²), ordinary HC₀ has dimension two, while HC₀(k) has dimension one.

**How the definition helps.** The nilpotent class ε survives in ordinary HC₀ of the dual numbers (our own example). Goodwillie’s nilinvariance theorem removes this obstruction after passage to periodic chains. The quoted theorem also treats connective differential graded algebras.

**Paper or page:** [Nilpotent invariance of semi-topological K-theory of dg-algebras and the lattice conjecture](https://arxiv.org/abs/2102.01566). It says: “Let k be a field of characteristic 0 and v: B → A be a nilpotent extension of connective k-dg-algebras. Then the induced map HP(B/k) → HP(A/k) is an equivalence.”

**Sources:**

- [T. G. Goodwillie, Cyclic homology, derivations, and the free loopspace, Topology 24 (1985) 187–215](https://doi.org/10.1016/0040-9383(85)90055-2)

### Periodic cyclic homology satisfies excision for every ideal

**Remember:** Periodize the mixed complex by allowing Laurent series in u.

*Rules out counterexamples. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 16E40. arXiv math.KT. Level 4: research.

**Definition.** For the Hochschild mixed complex (C,b,B) over k, give u degree −2. Periodic cyclic homology is the homology of the Laurent series complex C((u)) with differential b + uB. Relative HP(A,I) uses the fiber of the quotient map on periodic complexes, and HP(I) uses the fiber of the augmentation of the unitization.

**Problem.** Over a characteristic-zero field k, periodic cyclic homology satisfies excision for every algebra extension, by the Cuntz–Quillen theorem. For upper triangular 2×2 matrices A and I = k·e₁₂, ordinary HC₀(I) = k but HC₀(A,I) = 0.

**How the definition helps.** Passing to the periodic theory removes the defect that breaks excision for HC (our own summary of Cuntz–Quillen). In the example, I² = 0, so HC₀(I) = I/\[I, I\] = I (our own computation). But e₁₁e₁₂ − e₁₂e₁₁ = e₁₂, so all of I is a boundary in the relative complex (our own computation). Cuntz and Quillen prove the theorem by describing HP through quasi-free algebras, the noncommutative analogue of smooth ones, and the work went there.

**Wikipedia:** [Joachim Cuntz](https://en.wikipedia.org/wiki/Joachim_Cuntz). It says: “In collaboration with Daniel Quillen, he developed a new approach to cyclic cohomology and proved the excision property of periodic cyclic theory.”

**Sources:**

- [J. Cuntz, D. Quillen, Excision in bivariant periodic cyclic cohomology, Invent. Math. 127 (1997) 67–98](https://doi.org/10.1007/s002220050115)

### Pointed bars separate coefficients from monomials

**Remember:** The coefficients and the monomials have separate cyclic bar factors.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a monoid M with absorbing zero, its pointed cyclic bar has degree-q simplices the lists of q+1 elements, with all lists containing zero collapsed. Faces multiply cyclic neighbors, degeneracies insert the unit, and cyclic operators rotate lists.

**Problem.** Let A be a unital ring and n ≥ 1. Let M be the pointed monoid of monomials 1 through xⁿ⁻¹, with xⁿ = 0. Then THH(A\[x\]/(xⁿ)) is rotation-equivariantly equivalent to THH(A) smashed with the pointed cyclic bar of M.

**How the definition helps.** The pointed presentation separates each cyclic list into coefficient factors and monomial labels (our own). Multiplying neighbors and rotating lists respects this separation (our own). Hesselholt and Madsen identify the resulting spectrum with the smash product of the coefficient spectrum and the pointed cyclic bar (our own). Here smashing means tensoring with the based space after suspension, and the equivalence respects rotation (our own).

**Paper or page:** [From manifolds to invariants of Eₙ-algebras](https://arxiv.org/abs/1210.7909v1). It says: “Both maps in the zig-zag are weak equivalences if the unit map of A, S → A, is a cofibration in Sp.”

**Sources:**

- [Lars Hesselholt and Ib Madsen, Cyclic polytopes and the K-theory of truncated polynomial algebras](https://www.math.nagoya-u.ac.jp/~larsh/papers/007/polytope.pdf)

### Polynomial evaluation breaks Goodwillie’s comparison

**Remember:** A nilpotent extension kills an ideal whose sufficiently long products all vanish.

*Rules out counterexamples.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 4: research.

**Definition.** A nilpotent extension is a surjective ring map whose kernel has some power equal to zero. Relative groups measure the change across the map by taking its homotopy fiber.

**Problem.** Consider a nilpotent extension of rational algebras and n ≥ 1. Goodwillie identifies degree-n rational relative K-theory with relative cyclic homology one degree lower. Evaluation at zero from ℚ\[t\] to ℚ fails this comparison in degree one.

**How the definition helps.** Evaluation kills tℚ\[t\], whose powers never vanish, so Goodwillie’s nilpotent comparison excludes this map (our own). Evaluation splits, so the relative groups are kernels. Both unit groups compute K₁ here and equal ℚ×, giving zero relative K₁. Ordinary HC₀ recovers each commutative algebra, giving relative HC₀ equal to tℚ\[t\].

**Wikipedia:** [Cyclic homology](https://en.wikipedia.org/wiki/Cyclic_homology). It says: “nilpotent two-sided ideal I”

**Sources:**

- [Thomas G. Goodwillie, Relative Algebraic K-Theory and Cyclic Homology](https://doi.org/10.2307/1971283)

### Positive weights give relative topological Hochschild homology

**Remember:** Weight zero survives evaluation, and positive weights form its fiber.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a unital ring A and n ≥ 1, represent monomials of A\[x\]/(xⁿ) by the powers of x below degree n and an absorbing zero. The pointed cyclic bar consists of circular lists of these monomials, with lists containing zero collapsed to a base point. The weight of any other list is its total exponent.

**Problem.** Let A be a unital ring and n ≥ 1. Evaluation at zero induces THH(A\[x\]/(xⁿ)) → THH(A). Its fiber is the sum over positive weights of THH(A) smashed with the corresponding pointed cyclic bar summand.

**How the definition helps.** Each bar face preserves weight or lands at the basepoint, and rotation preserves weight (our own). The bar therefore splits as a wedge by weight. Evaluation projects onto weight zero with section given by constants, leaving the positive weights as its fiber. Hesselholt and Madsen identify this pointed bar model with the ring construction.

**Paper or page:** [From manifolds to invariants of Eₙ-algebras](https://arxiv.org/abs/1210.7909v1). It says: “Both maps in the zig-zag are weak equivalences if the unit map of A, S → A, is a cofibration in Sp.”

**Sources:**

- [Lars Hesselholt and Ib Madsen, Cyclic polytopes and the K-theory of truncated polynomial algebras](https://www.math.nagoya-u.ac.jp/~larsh/papers/007/polytope.pdf)

### Quotient cubes compare relative traces

**Remember:** Take the trace along one coordinate, then take fibers along the rest.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a commutative ring A and positive exponents nᵢ, impose the relations xᵢ<sup>nᵢ</sup> = 0 on A\[x₁,…,xᵣ\] for all i. Setting each subset of variables to zero gives a cube of quotient rings. Multi-relative K-theory or topological cyclic homology takes the iterated homotopy fiber after applying the respective functor to this cube.

**Problem.** The cyclotomic trace is the natural comparison from algebraic K-theory to topological cyclic homology. For this cube it identifies their multi-relative spectra after completion at any prime.

**How the definition helps.** Taking one direction first reduces the comparison to parallel quotient maps (our own). Each map kills one variable, so its kernel has a power equal to zero (our own). McCarthy’s relative trace theorem identifies the two fibers after prime completion (our own). Completion preserves finite fibers, and taking the remaining fibers preserves equivalences (our own).

**Paper or page:** [Nilpotent invariance of semi-topological K-theory of dg-algebras and the lattice conjecture](https://arxiv.org/abs/2102.01566v1). It says: “Let v: B → A be a nilpotent extension of connective ring spectra.”

**Sources:**

- [Vigleik Angeltveit, Teena Gerhardt, Michael A. Hill and Ayelet Lindenstrauss, On the algebraic K-theory of truncated polynomial algebras in several variables](https://doi.org/10.1017/is013010011jkt243)
- [Randy McCarthy, Relative algebraic K-theory and topological cyclic homology](https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/6552-11511_2006_Article_BF02392743.pdf)

### Real topological Hochschild homology of perfectoid rings is free

**Remember:** Compactify the complex line with conjugation to remember the action on the degree-two generator.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 55P91. arXiv math.KT, math.AT. Level 4: research.

**Definition.** Let σ be the real sign representation of the two-element group. The representation sphere S¹⁺σ is the one-point compactification of ℝ ⊕ σ, equivalently of ℂ with complex conjugation.

**Problem.** For a perfectoid ring R, the p-completed spectrum THR(R;ℤp) is the free associative algebra over HR on the representation sphere S¹⁺σ. Forgetting the ℤ/2 action, this gives THH(R;ℤp) ≃ HR\[u\] with u in degree 2.

**How the definition helps.** Suspension by the representation sphere S¹⁺σ lets the equivariant answer take the same shape as Bökstedt periodicity. The underlying sphere of S¹⁺σ is S², so forgetting the action gives the ordinary result (our own). The work moves into real analogues of the Bhatt–Morrow–Scholze arguments, which the paper carries out.

**Paper or page:** [Real Topological Hochschild Homology of Perfectoid Rings](https://arxiv.org/abs/2310.11183), [Real Topological Hochschild Homology of Perfectoid Rings](https://arxiv.org/abs/2310.11183). It says: “Then there is a natural equivalence of normed ℤ/2-spectra THR(R;ℤp) ≃ T<sub>HR</sub>(S<sup>1+σ</sup>) := ⊕ₙ Σ<sup>n+σn</sup> HR, where T<sub>HR</sub>(S<sup>1+σ</sup>) denotes the free associative HR-algebra on S<sup>1+σ</sup>.”

**Sources:**

- [Jens Hornbostel and Doosung Park, Real Topological Hochschild Homology of Perfectoid Rings, arXiv:2310.11183 (2025)](https://arxiv.org/abs/2310.11183)

### TC⁻ over 𝕊\[z\] gives Breuil–Kisin modules

**Remember:** Pull back by Frobenius, then invert the uniformizer’s Eisenstein polynomial to recover the module.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 14F30. arXiv math.KT, math.AG. Level 4: research.

**Definition.** For a finite extension K of ℚₚ, choose a uniformizer ϖ and write k for the residue field. Set 𝔖 = W(k)\[\[z\]\], with Frobenius φ extending Witt Frobenius by z ↦ zᵖ. A Breuil–Kisin module is a finite 𝔖-module M equipped with an isomorphism (φ\*M)\[1/E\] ≅ M\[1/E\], where E is the Eisenstein polynomial of ϖ.

**Problem.** For a smooth proper 𝒪K-linear stable ∞-category 𝒯, the groups πᵢTC⁻(𝒯/𝕊\[z\];ℤp) are Breuil–Kisin modules for all large i. The Frobenius comes from the cyclotomic Frobenius.

**How the definition helps.** Sending z to ϖ makes relative TC⁻ a module theory over 𝔖 by the coefficient calculation of Liu and Wang (our own summary). The cyclotomic Frobenius supplies the comparison after inverting E. The smooth proper finiteness theorem gives the required finite modules in high degrees.

**Paper or page:** [Towards the p-adic Hodge theory for non-commutative algebraic varieties](https://arxiv.org/abs/2305.00292). It says: “Then there is a natural number n such that the homotopy groupy group π<sub>i</sub> TC⁻(𝒯/𝕊\[z\];ℤp) is a Breuil-Kisin module for any i≥n, where Frobenius comes from cyclotomic Frobenius map.”

**Sources:**

- [Towards the p-adic Hodge theory for non-commutative algebraic varieties, arXiv:2305.00292](https://arxiv.org/abs/2305.00292)

### The fiber of the cyclotomic trace is rigid for every henselian pair

**Remember:** Take the fiber of the trace before reducing modulo n.

*Rules out counterexamples.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 19D50. arXiv math.KT, math.AG. Level 4: research.

**Definition.** For a commutative ring A, define Kⁱⁿᵛ(A) as the homotopy fiber of the cyclotomic trace K(A) → TC(A). Finite coefficients mean taking the cofiber of multiplication by n on this spectrum.

**Problem.** For every henselian pair (A, I) and every n ≥ 1, the map Kⁱⁿᵛ(A; ℤ/n) → Kⁱⁿᵛ(A/I; ℤ/n) is an equivalence. No condition that n be invertible in A is needed.

**How the definition helps.** Clausen–Mathew–Morrow rigidity identifies the trace fibers with finite coefficients across henselian reduction. For odd p, K₁(ℤₚ; ℤ/p) ≅ ℤ/p while K₁(𝔽ₚ; ℤ/p) = 0 (our own example). The trace-fiber comparison removes this obstruction for every coefficient modulus.

**Wikipedia:** [Rigidity (K-theory)](https://en.wikipedia.org/wiki/Rigidity_%28K-theory%29). It says: “If n is not invertible in A, the result as above still holds, provided that K-theory is replaced by the fiber of the cyclotomic trace map between K-theory and topological cyclic homology.”

**Sources:**

- [D. Clausen, A. Mathew and M. Morrow, K-theory and topological cyclic homology of henselian pairs, Journal of the American Mathematical Society 34 (2021) 411–473](https://doi.org/10.1090/jams/961)

### The Laurent quotient shifts degrees

**Remember:** Once relative periodic homology vanishes, the connecting map shifts cyclic homology by one.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT. Level 4: research.

**Definition.** Hochschild chains have a boundary b and a second operator B that raises degree. Negative cyclic chains use power series in u of degree −2, with differential b + uB. Periodic chains also allow finitely many negative powers. Their quotient retains only strictly negative powers.

**Problem.** Let B → A be a surjective map of rational algebras whose kernel has some power equal to zero. Relative homology measures the change across this map. The boundary identifies relative cyclic homology in degree n − 1 with relative negative cyclic homology in degree n.

**How the definition helps.** Using series in place of the cyclic double complex displays the quotient as ordinary cyclic chains shifted up by two degrees (our own). Multiplication by u gives the identification with ordinary cyclic chains, where u kills constants (our own). Goodwillie’s nilpotent invariance gives zero relative periodic homology. Exactness therefore makes the boundary an isomorphism from quotient degree n + 1 to negative cyclic degree n (our own).

**Paper or page:** [Nilpotent invariance of semi-topological K-theory of dg-algebras and the lattice conjecture](https://arxiv.org/abs/2102.01566v1). It says: “the induced map HP(B/k) → HP(A/k) is an equivalence.”

**Sources:**

- [Thomas G. Goodwillie, Relative algebraic K-theory and cyclic homology](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/goodwillie-cyclic.pdf)

### The May filtration gives fpqc descent for THH

**Remember:** Filter by the Whitehead tower, and descent reduces to discrete graded rings.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 55P43. arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a connective commutative ring spectrum A, filter A by connective covers. In simplicial degree q, filter A⊗⁽ᑫ⁺¹⁾ by the tensor product filtration, adding the filtration indices of its factors. Realizing this filtered cyclic bar gives the May filtration on THH(A).

**Problem.** THH, its homotopy fixed points for the circle and for Cₚ, its homotopy orbits and Tate construction for Cₚ, and TC all satisfy fpqc descent. This holds as functors from connective commutative ring spectra to spectra.

**How the definition helps.** The May filtration turns descent for a ring spectrum into descent for its graded ring of homotopy groups. A faithfully flat map gives a faithfully flat map of these graded rings (our own). For such rings, descent follows from flat descent of THH for ordinary rings, which Bhatt, Morrow and Scholze prove (our own summary). Completeness of the filtration then passes descent back to THH and to the other functors (our own summary).

**Paper or page:** [The May filtration on THH and faithfully flat descent](https://arxiv.org/abs/2004.12600), [The May filtration on THH and faithfully flat descent](https://arxiv.org/abs/2004.12600). It says: “Then F satisfies descent for the fpqc topology on CAlg≥0.”

**Sources:**

- [Liam Keenan, The May filtration on THH and faithfully flat descent, arXiv:2004.12600 (2020)](https://arxiv.org/abs/2004.12600)

### The sphere unit determines Dennis trace

**Remember:** Evaluate at the sphere to read the trace off its unit.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** An additive invariant ignores equivalences of module categories, preserves filtered colimits, and sends split exact sequences to direct sums. Its universal category of motives represents these operations. There, connective algebraic K-theory is the spectrum of maps from the motive of finite spectra.

**Problem.** Natural transformations from connective K-theory to topological Hochschild homology have homotopy classes indexed by ℤ. Topological Hochschild homology is the stable version of the chain theory built by multiplying cyclically adjacent factors. The topological Dennis trace corresponds to 1.

**How the definition helps.** Representing K-theory by maps makes evaluation at the representing object determine each transformation, by the Yoneda lemma (our own). At finite spectra the target evaluates to the sphere spectrum, whose degree-zero homotopy group is ℤ (our own). Blumberg, Gepner and Tabuada prove the representation theorem and identify the classical trace with the unit (our own).

**nLab:** [Dennis trace](https://ncatlab.org/nlab/show/Dennis+trace). It says: “The Dennis trace is a natural morphism from algebraic K-theory of rings to Hochschild homology”

**Sources:**

- [Andrew J. Blumberg, David Gepner and Gonçalo Tabuada, A universal characterization of higher algebraic K-theory](https://msp.org/gt/2013/17-2/gt-v17-n2-p03-p.pdf)

### Topological André–Quillen homology gives HKR for ring spectra

**Remember:** For smooth ring spectra, THH is free on shifted differentials.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology), 55P43. arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a commutative ring spectrum A, TAQ(A) is the A-module representing derivations over the sphere. For every A-module M, maps TAQ(A) → M correspond naturally to sections of the square-zero extension A ⊕ M → A as commutative ring spectra.

**Problem.** For a connective E∞ ring A smooth over the sphere in the sense of McCarthy and Minasian, THH(A) is free commutative over A on ΣTAQ(A). This gives the spectral analogue of the Hochschild homology description by differential forms.

**How the definition helps.** With TAQ in the place of differentials, the HKR theorem keeps its classical shape over the sphere spectrum. The derivative map from THH(A) to ΣTAQ(A) always exists. For smooth A it has a section, and the section extends to an equivalence from the free algebra. The work moves into McCarthy and Minasian's proof of this for their notion of smooth algebra.

**nLab:** [Hochschild-Kostant-Rosenberg theorem](https://ncatlab.org/nlab/show/Hochschild-Kostant-Rosenberg+theorem). It says: “For a connective smooth E-∞ ring A, the (natural) derivative map THH(A) → Σ TAQ(A) from topological Hochschild homology to topological André-Quillen homology has a section”

**Sources:**

- [Randy McCarthy and Vahagn Minasian, HKR theorem for smooth S-algebras, J. Pure Appl. Algebra 185 (2003)](https://doi.org/10.1016/s0022-4049(03)00089-6)

### Topological cyclic homology preserves fibers

**Remember:** Maps out of the cyclotomic sphere preserve fibers.

*True by definition.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** A cyclotomic spectrum has a circle action and compatible maps to the Tate constructions for groups of prime-order rotations. These constructions measure the difference between homotopy orbits and homotopy fixed points. Define topological cyclic homology as the spectrum of maps preserving this structure from the cyclotomic sphere.

**Problem.** A fiber records the part of a map that becomes zero, including a chosen homotopy to zero. Topological cyclic homology carries fiber sequences of cyclotomic spectra to fiber sequences of spectra.

**How the definition helps.** Maps from a fixed sphere preserve fibers because the mapping spectrum preserves limits in its target (our own). This argument applies directly in the category of cyclotomic spectra (our own). Nikolaus and Scholze identify this definition with the older fixed-point construction for spectra whose homotopy groups vanish in sufficiently negative degrees (our own).

**nLab:** [cyclotomic spectrum](https://ncatlab.org/nlab/show/cyclotomic+spectrum). It says: “where the circle action on the Tate spectrum comes from the canonical identification S¹/Cₚ ≃ S¹.”

**Sources:**

- [Thomas Nikolaus and Peter Scholze, On topological cyclic homology](https://people.mpim-bonn.mpg.de/scholze/CyclotomicSpectra.pdf)

### Trace fibers simplify nilpotent comparisons

**Remember:** An unchanged trace fiber makes the relative trace an equivalence.

*Makes the theorem clean to state or prove.* MSC 19D55 (\\(K\\)-theory and homology; cyclic homology and cohomology). arXiv math.KT, math.AT. Level 4: research.

**Definition.** For a ring R, the cyclotomic trace maps algebraic K-theory to a more computable theory called topological cyclic homology. Define the trace fiber to measure what this map loses, including the choices of paths to zero. For either theory, its relative version is the fiber of the reduction map from R to R/I.

**Problem.** Suppose some power of the ideal I is zero. For every prime p, the trace identifies the two relative theories after p-completion, which assembles information modulo successive powers of p.

**How the definition helps.** The trace fiber turns the relative comparison into one invariance statement, in our own explanation. The Dundas–Goodwillie–McCarthy theorem says that reduction by I preserves the completed trace fiber. Taking fibers first along the trace maps or first along the reduction maps gives the same result. Thus the relative trace has zero fiber and is an equivalence.

**nLab:** [topological cyclic homology](https://ncatlab.org/nlab/show/topological+cyclic+homology). It says: “the difference between them and K(R) is "locally constant”

**Sources:**

- [Bjørn Dundas, Thomas Goodwillie and Randy McCarthy, The Local Structure of Algebraic K-Theory](https://doi.org/10.1007/978-1-4471-4393-2)

### Scaling erases split square-zero ideals

**Remember:** Scale the square-zero part down to zero along the affine line.

*True by definition.* MSC 19D99 (Higher algebraic \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** For a complex algebra A and an A-bimodule I, the split square-zero extension has underlying vector space A ⊕ I. Its multiplication is (a,i)(b,j) = (ab,aj+ib).

**Problem.** For a complex algebra A and an A-bimodule I, the split square-zero extension A ⊕ I has the same semi-topological K-theory as A.

**How the definition helps.** Topological realization turns a polynomial contraction into a continuous homotopy (our own argument). The maps (a,i) ↦ (a,ti) preserve multiplication because I² = 0. As t moves from one to zero they connect the identity to projection followed by inclusion. Projection and inclusion therefore induce inverse equivalences on semi-topological K-theory.

**Paper or page:** [Nilpotent invariance of semi-topological K-theory of dg-algebras and the lattice conjecture](https://arxiv.org/abs/2102.01566). It says: “Then the induced map Kˢᵗ(B) → Kˢᵗ(A) is an equivalence.”

**Sources:**

- [Nilpotent invariance of semi-topological K-theory of dg-algebras and the lattice conjecture, Theorem 1.2](https://arxiv.org/abs/2102.01566)

### Coherent sheaves give singular localization

**Remember:** Coherent sheaves allow the pieces supported on a closed subset.

*Makes the theorem clean to state or prove.* MSC 19E08 (\\(K\\)-theory of schemes). arXiv math.KT. Level 4: research.

**Definition.** On a Noetherian scheme, a coherent sheaf is locally a module with finitely many generators and relations. G-theory applies algebraic K-theory to these sheaves with their short exact sequences. Ordinary scheme K-theory uses perfect complexes, which locally have bounded models made of finite-rank vector bundles.

**Problem.** For a Noetherian scheme, a closed subscheme, the whole scheme, and the open complement fit into a long exact sequence in G-theory.

**How the definition helps.** Coherent sheaves allow both restriction to the open set and extension from the closed subscheme (our own explanation). Restriction kills exactly the sheaves supported on the closed subset, and Quillen's localization theorem gives a long exact sequence with these supported sheaves. Filtering a supported sheaf by powers of the ideal gives layers that are sheaves on the closed subscheme. So Quillen's filtration theorem identifies the supported term with the G-theory of that subscheme.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “He was, however, able to prove its existence for a related theory called G-theory”

**Sources:**

- [Daniel Quillen, Higher algebraic K-theory I (1973)](https://doi.org/10.1007/BFb0067053)

### Derived tensor gives the projection formula

**Remember:** A perfect factor pulled back from the target comes back out of pushforward.

*True by definition.* MSC 19E08 (\\(K\\)-theory of schemes), 14C35. arXiv math.KT. Level 4: research.

**Definition.** For a Noetherian scheme X, define G₀(X) using bounded complexes with coherent cohomology and K₀(X) using perfect complexes. Both groups use derived isomorphism classes with \[B\] = \[A\] + \[C\] for each exact triangle A → B → C → A\[1\]. The action of a perfect complex on G₀ is derived tensor product.

**Problem.** Let f be a proper map of Noetherian schemes, meaning it is separated, of finite type and closed after every base change. Multiplying a source G₀ class by a pulled-back target K₀ class commutes with pushing the result forward.

**How the definition helps.** The derived projection formula identifies Rf\*(M ⊗ᴸ Lf\*P) with Rf\*(M) ⊗ᴸ P for perfect P (our own explanation). Properness preserves coherent cohomology, so taking G₀ classes gives the identity.

**Paper or page:** [Perfect](https://stacks.math.columbia.edu/tag/0FDM). It says: “Then we have f∗(α ⋅ f⁎β) = f∗α ⋅ β for α ∈ K′₀(X) and β ∈ K₀(Y).”

**Sources:** none listed. No primary source with a working link was found.

### Perfect complexes instead of vector bundles let K-theory glue along open covers

**Remember:** Use perfect complexes, not vector bundles, and K-theory glues along open covers.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19E08 (\\(K\\)-theory of schemes), 18F25. arXiv math.KT, math.AG. Level 4: research.

**Definition.** A perfect complex on a scheme is locally quasi-isomorphic to a bounded complex of finite-rank vector bundles. Thomason–Trobaugh nonconnective K-theory uses perfect complexes with quasi-isomorphisms as weak equivalences.

**Problem.** On a quasi-compact quasi-separated scheme, nonconnective K-theory of perfect complexes satisfies localization for quasi-compact open immersions and Mayer–Vietoris for quasi-compact open covers.

**How the definition helps.** Perfect complexes can be defined by restriction to open sets, including on schemes with few global vector bundles (our own explanation). The Thomason–Trobaugh localization and descent theorems give the stated sequences, with the localization fiber computed by perfect complexes supported on the complement.

**nLab:** [algebraic K-theory](https://ncatlab.org/nlab/show/algebraic+K-theory), [Waldhausen S-construction](https://ncatlab.org/nlab/show/Waldhausen+S-construction). It says: “Thomason-Trobaugh K-theory coincides with Quillen K-theory for schemes that admit an ample family of line bundles, but has the advantage of better global descent properties.”

**Sources:**

- [R. W. Thomason, Thomas Trobaugh, Higher algebraic K-theory of schemes and of derived categories, The Grothendieck Festschrift vol. III, Progress in Math. 88 (1990) 247–435](https://doi.org/10.1007/978-0-8176-4576-2_10)

### Bott periodicity shifts K-theory slices

**Remember:** Calculate one slice and use Bott periodicity to shift it.

*Makes the theorem clean to state or prove.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 14F42. arXiv math.KT, math.AG. Level 4: research.

**Definition.** The weight-i effective cover of E is the universal map to E from the i-fold Tate suspension of the effective subcategory. The ith slice is the cofiber of the natural map from cover i+1 to cover i.

**Problem.** Over a perfect field admitting resolution of singularities, slice zero of logarithmic K-theory is the integral logarithmic motivic cohomology spectrum. Slice i is its i-fold Tate suspension, using inverse suspension for negative i.

**How the definition helps.** Defining the covers by weight makes suspension carry each layer to the next layer of the suspended spectrum. Bott periodicity identifies logarithmic K-theory with its own suspension by the pointed projective line. Our own deduction therefore obtains every layer from layer zero. Binda, Park and Østvær identify that layer with integral logarithmic motivic cohomology.

**Paper or page:** [On the logarithmic slice filtration](https://arxiv.org/abs/2403.03056). It says: “\\mathrm{s}<sub>i</sub> \\mathbf{KGL}\\simeq \\widetilde{\\mathrm{s}}<sub>i</sub> \\mathbf{KGL}\\simeq \\mathbf{M}\\mathbb {Z}(i)\[2i\]”

**Sources:**

- [Federico Binda, Doosung Park and Paul Arne Østvær, On the logarithmic slice filtration (2025)](https://arxiv.org/abs/2403.03056)

### Complex volume becomes a motivic period

**Remember:** Keep ℚ(2) as the subobject and ℚ(0) as the quotient of one extension.

*Makes the theorem clean to state or prove.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 57K32, 19F27. arXiv math.KT, math.GT. Level 4: research.

**Definition.** Work in mixed Tate motives over a number field k. An extension of ℚ(0) by ℚ(2) is an exact sequence 0 → ℚ(2) → M → ℚ(0) → 0. Two extensions represent the same class if an isomorphism induces the identity on both end terms.

**Problem.** Let M be a complete oriented finite-volume hyperbolic three-manifold with invariant trace field k contained in the algebraic numbers. Its normalized projective Chern–Simons invariant is the Beilinson regulator of a mixed Tate extension over k, modulo π²ℚ.

**How the definition helps.** The extension puts the geometric invariant in the domain of a single regulator, a map assigning a complex period to its class (our own). Lee constructs the extension and identifies its period with the normalized invariant. The comparison uses the dilogarithm formula for the regulator on shape symbols (our own).

**Paper or page:** [Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties](https://arxiv.org/abs/2502.11950v1). It says: “equals the normalized PSL₂(ℂ)-Chern-Simons invariant”

**Sources:**

- [Dong Uk Lee, Chern-Simons invariants of hyperbolic three-manifolds, mixed Tate motives, and motivic path torsor of augmented character varieties, Theorem 4.2.4 (2025)](https://arxiv.org/abs/2502.11950v1)

### Real unit regulators are logarithms

**Remember:** The real projection forgets the argument of a unit.

*True by definition.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 14F43. arXiv math.KT, math.AG. Level 4: research.

**Definition.** An algebraic unit is a regular function with a regular inverse. Its weight one regulator class uses local logarithms, whose differences are integral multiples of 2πi. The real Deligne model projects their values modulo the imaginary line 2πiℝ.

**Problem.** For a smooth complex quasi-projective variety, the real Beilinson regulator sends an algebraic unit f to the real function log\|f\|.

**How the definition helps.** Projection takes the real part, which equals log\|f\| for every branch (our own). This replaces gluing branch choices by a single global function (our own). The comparison with Deligne–Beilinson cohomology uses the logarithmic pole condition on df/f at the boundary (our own).

**nLab:** [Deligne cohomology](https://ncatlab.org/nlab/show/Deligne+cohomology). It says: “designed to be a target for the Beilinson regulator from motivic cohomology”

**Sources:**

- [Hélène Esnault and Eckart Viehweg, Deligne–Beilinson cohomology, Proposition 2.12 and sections 2.15–2.17](https://archive.mpim-bonn.mpg.de/2980/1/preprint_1987_2.pdf)

### Reduced ranks give twisted coefficients

**Remember:** Use the ranks the twisted modules actually have as coefficients.

*Makes the theorem clean to state or prove.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 19E20. arXiv math.KT. Level 4: research.

**Definition.** For an Azumaya algebra A on X, the reduced rank of a projective A-module is its ordinary rank under local Morita equivalence with vector bundles. Take the image of reduced rank from K₀(A) to integer-valued ranks on each Nisnevich open. Nisnevich sheafification of this image defines the coefficient sheaf.

**Problem.** For a smooth variety X over a field of characteristic zero, this sheaf supplies the coefficients for the spectral sequence computing A-twisted K-theory. Its second page at (p,q) gives motivic cohomology, a theory graded by both degree and weight, in degree p − q and weight −q. It converges to the K-group of A-modules in degree −p − q.

**How the definition helps.** The rank sheaf encodes which ranks occur, so one coefficient formula also covers algebras that do not split, in our own explanation. Over a field with a division algebra of dimension d², these ranks are exactly the multiples of d. The theorem identifies successive layers of twisted K-theory with motivic cohomology using this sheaf.

**Paper or page:** [Twisted K-theory in motivic homotopy theory](https://arxiv.org/abs/2110.09203). It says: “Then there is a strongly convergent spectral sequence”

**Sources:**

- [Elden Elmanto, Denis Nardin and Maria Yakerson, Twisted K-theory in motivic homotopy theory (2021 preprint)](https://arxiv.org/abs/2110.09203)

### Thickened blow-up covers retain nilpotents

**Remember:** To recover algebraic K-theory, keep the whole tower of thickenings.

*Rules out counterexamples.* MSC 19E15 (Algebraic cycles and motivic cohomology (\\(K\\)-theoretic aspects)), 14F42. arXiv math.KT, math.AG. Level 4: research.

**Definition.** Extend the weight-n motivic complex from smooth schemes over a prime field by left Kan extension, then apply procdh sheafification. The procdh topology uses Nisnevich covers and families comprising a proper modification and all infinitesimal thickenings of its closed center. The modification must be an isomorphism outside that center.

**Problem.** For every finite-dimensional Noetherian scheme X over a prime field, algebraic K-theory has a complete multiplicative filtration. Its quotient in weight n is the procdh motivic complex of weight n shifted by 2n degrees.

**How the definition helps.** The tower retains nilpotent information needed by K-theory (our own). For ℚ\[ε\]/(ε²), reduction kills the units 1+aε for every a ∈ ℚ. Gluing that identifies a scheme with its reduction would lose those K₁ classes. Kelly and Saito prove the filtration and identify its quotients.

**Paper or page:** [A procdh topology](https://arxiv.org/abs/2401.02699). It says: “there exists a complete multiplicative decreasing ℕ-indexed filtration”

**Sources:**

- [Shane Kelly and Shuji Saito, A procdh topology](https://arxiv.org/abs/2401.02699)

### Bott inversion gives periodicity

**Remember:** After Bott inversion, a shift by two changes nothing.

*True by definition.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Let ℓ ≥ 5 be an invertible prime in a commutative ring R containing a primitive ℓth root of unity. Choose a Bott class β in K₂(R; ℤ/ℓ) with that root as boundary. In degree n, the Bott-inverted group is the direct limit of Kₙ₊₂ⱼ(R; ℤ/ℓ) over j ≥ 0 under multiplication by β.

**Problem.** Multiplication by β identifies each Bott-inverted group with the group two degrees higher.

**How the definition helps.** In the direct limit, a two-degree shift just discards the first term, in our own proof. Discarding that term preserves the limit. Ordinary finite-coefficient K-groups need not have this periodicity. Thomason’s comparison with étale cohomology, computed from algebraic local covers, supplies the substantive geometric theorem.

**nLab:** [Snaith theorem](https://ncatlab.org/nlab/show/Snaith+theorem). It says: “The localization of E at β is the homotopy colimit over the iterated multiplication with β”

**Sources:**

- [Robert Thomason, Algebraic K-theory and étale cohomology (1985)](https://doi.org/10.24033/asens.1495)

### Conormal sums correct Adams pushforwards

**Remember:** The power sum is the factor between the old and new Euler classes.

*Makes the theorem clean to state or prove.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT. Level 4: research.

**Definition.** Let E be a line bundle on a smooth quasi-projective variety and i its zero section. For the conormal line L = E∨ and each integer j ≥ 1, define θʲ(L) = ∑₀≤ₖ&lt;ⱼ \[L\]ᵏ in K₀.

**Problem.** For the Adams operation ψʲ, which raises line bundles to their jth powers, ψʲ(i∗x) = i∗(θʲ(L) · ψʲ(x)) for every class x in K₀.

**How the definition helps.** The finite sum packages the exact correction to the pushforward, in our own explanation. Pulling the pushforward back along i multiplies by 1 − \[L\], by the two-term resolution of the zero section. Applying ψʲ changes this factor to 1 − \[L\]ʲ, which equals (1 − \[L\])θʲ(L). Pullback along the zero section is an isomorphism by homotopy invariance.

**Paper or page:** [The Riemann-Roch theorem for the Adams operations](https://arxiv.org/abs/2211.10178). It says: “is the conormal bundle”

**Sources:**

- [A. Navarro and J. Navarro, The Riemann-Roch theorem for the Adams operations (2022 preprint)](https://arxiv.org/abs/2211.10178)

### Higher Chow groups split rational K-theory into weight pieces

**Remember:** Take cycles meeting all faces properly, alternate their restrictions, and take homology.

*Makes the theorem clean to state or prove.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories), 19E15, 14C25. arXiv math.KT, math.AG. Level 4: research.

**Definition.** In degree r ≥ 0, Bloch’s codimension-p cycle complex is free abelian on integral codimension-p subvarieties of X × Δʳ meeting every face properly. The differential is the alternating sum of face restrictions. Its nth homology is CHᵖ(X,n).

**Problem.** For X smooth and quasi-projective over a field, Kₙ(X) ⊗ ℚ ≅ ⊕ₚ CHᵖ(X, n) ⊗ ℚ. The summand of weight p is the p-th graded piece of the γ-filtration on Kₙ(X) ⊗ ℚ.

**How the definition helps.** Higher Chow groups give each weight piece of rational K-theory a direct definition by algebraic cycles. Before them, the weight pieces were only eigenspaces of Adams operations, which are natural operations on K-theory (our own). Bloch proved the comparison from a localization sequence for his groups, which rests on his moving lemma (our own summary). A later motivic spectral sequence converges to K-theory and, as the quoted text says, degenerates after tensoring with ℚ.

**nLab:** [motivic cohomology](https://ncatlab.org/nlab/show/motivic+cohomology). It says: “With rational coefficients, the motivic cohomology groups of X are the associated graded of the γ-filtration on the rational algebraic K-theory groups of X (at least if X is regular).”

**Wikipedia:** [Motivic cohomology](https://en.wikipedia.org/wiki/Motivic_cohomology), [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “As in topology, the spectral sequence degenerates after tensoring with the rationals.”

**Sources:**

- [S. Bloch, Algebraic cycles and higher K-theory, Advances in Mathematics 61 (1986) 267–304](https://doi.org/10.1016/0001-8708(86)90081-2)

### Motivic Bott shifts preserve K-theory

**Remember:** Invert the projective-line class to shift degree and weight together.

*True by definition.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Give the suspension spectrum of infinite projective space with disjoint basepoint its multiplication from tensor product of line bundles. Its Bott class is the reduced class of the inclusion of the projective line. Bott localization makes multiplication by this class, of bidegree (2,1), invertible.

**Problem.** For a smooth variety X over a field, motivic K-cohomology in degree p and weight q equals algebraic K-theory in degree 2q − p. Shifting the two indices by (2,1) preserves this group.

**How the definition helps.** Inverting the Bott class gives an inverse to the simultaneous shift, in our own explanation. The motivic Snaith theorem identifies this construction with KGL, the spectrum representing algebraic K-theory. That comparison supplies the link to the usual K-groups of vector bundles.

**nLab:** [algebraic K-theory spectrum](https://ncatlab.org/nlab/show/algebraic+K-theory+spectrum). It says: “In particular, KGL-cohomology is (2,1)-periodic”

**Sources:**

- [David Gepner and Victor Snaith, On the motivic spectra representing algebraic cobordism and algebraic K-theory (2009)](https://doi.org/10.4171/DM/276)

### Étale K-theory of a complex variety is topological K-theory

**Remember:** Feed the étale homotopy type to topological K-theory.

*True by definition. Confidence: medium.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories), 14F35. arXiv math.KT, math.AG. Level 4: research.

**Definition.** For a scheme X with ℓ invertible, take ℓ prime and v ≥ 1. Dwyer–Friedlander étale K-theory with ℤ/ℓᵛ coefficients evaluates finite-coefficient ℓ-adic topological K-theory on the étale homotopy type of X.

**Problem.** For a complex variety X, étale K-theory of X with ℤ/ℓᵛ coefficients is isomorphic to topological K-theory with ℤ/ℓᵛ coefficients of the space X(ℂ).

**How the definition helps.** Artin–Mazur comparison identifies the completed étale homotopy type with the completed homotopy type of X(ℂ) (our own explanation). Topological K-theory with ℤ/ℓᵛ coefficients gives the same groups after this completion. Applying it to the comparison gives the result.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “For varieties defined over the complex numbers, étale K-theory is isomorphic to topological K-theory.”

**Sources:**

- [W. G. Dwyer and E. M. Friedlander, Algebraic and étale K-theory, Transactions of the American Mathematical Society 292 (1985) 247–280](https://doi.org/10.1090/S0002-9947-1985-0805962-2)

### Étale Postnikov layers yield descent

**Remember:** Filter the sheaf by homotopy degree to expose ordinary étale cohomology.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19E20 (Relations of \\(K\\)-theory with cohomology theories). arXiv math.KT, math.AT. Level 4: research.

**Definition.** Fix an odd prime ℓ invertible on X. In this connective construction, étale K-theory modulo ℓ is the spectrum of global sections of the étale hypersheafification of connective K-theory modulo ℓ.

**Problem.** Let X be regular Noetherian with finite étale ℓ-cohomological dimension. For j ≥ 0 the descent spectral sequence has E₂ terms Hˢₑₜ(X, μℓ⊗ʲ) in rows 2j and zero in odd rows. It converges in total degree 2j−s to étale K-theory modulo ℓ.

**How the definition helps.** Defining the theory by gluing lets each homotopy degree contribute one row of ordinary sheaf cohomology, in our own explanation. Rigidity and the calculation at separably closed fields identify those rows. The resulting spectral sequence calculates the global groups in degree 2j − s. Comparing them with ordinary algebraic K-groups in high degrees requires the proved Quillen–Lichtenbaum theorem.

**Wikipedia:** [Quillen–Lichtenbaum conjecture](https://en.wikipedia.org/wiki/Quillen%E2%80%93Lichtenbaum_conjecture). It says: “there is a spectral sequence analogous to the Atiyah–Hirzebruch spectral sequence”

**Sources:**

- [Robert Thomason, Algebraic K-theory and étale cohomology (1985)](https://doi.org/10.24033/asens.1495)

### Dividing out divisible elements separates Kₙ

**Remember:** Divisible elements are invisible to Galois groups, so divide them out first.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19F05 (Generalized class field theory (\\(K\\)-theoretic aspects)), 11S70. arXiv math.NT, math.KT. Level 4: research.

**Definition.** An element of an abelian group is divisible if it is an m-th multiple for every positive integer m. For a higher local field F, divide Kₙ(F) by the subgroup of its divisible elements. Call the result the topological Milnor K-group.

**Problem.** By Fesenko's theorem, Kₙ(F) modulo its divisible elements is the largest separated topological quotient of Kₙ(F) for a suitable higher-dimensional topology. Higher local reciprocity is defined on this quotient.

**How the definition helps.** Any homomorphism to a profinite group kills divisible elements, since every finite quotient kills them (our own). Fesenko identifies this subgroup with the closure of zero for the higher Milnor K-topology. Quotienting by that closure gives the largest separated quotient.

**Wikipedia:** [Higher local field](https://en.wikipedia.org/wiki/Higher_local_field). It says: “this quotient can also be viewed as the maximal separated topological quotient of the K-group endowed with appropriate higher dimensional topology.”

**Sources:**

- [Ivan Fesenko, Topological Milnor K-groups of higher local fields, in Invitation to Higher Local Fields (2000)](https://doi.org/10.2140/gtm.2000.3.61)

### Iterated residues give Frobenius exponents

**Remember:** Each residue drops one degree until only a Frobenius exponent remains.

*Makes the theorem clean to state or prove.* MSC 19F05 (Generalized class field theory (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** An n-dimensional local field has n successive complete integer-valued valuation stages, each on the preceding residue field, ending in a finite field. At each stage the tame residue lowers the Milnor degree by one. It kills symbols of units and removes an initial element of order one before reducing the remaining units.

**Problem.** Use the convention that a local parameter maps to arithmetic Frobenius on the residue field. After projection to the final finite field, reciprocity sends a degree n class to Frobenius raised to its iterated residue.

**How the definition helps.** Each residue lowers degree by one, so n residues produce an integer in Milnor degree zero. The compatibility of higher reciprocity with residue and projection lets us iterate the cited square n times (our own). Over the final finite field, reciprocity sends 1 to arithmetic Frobenius, giving the stated exponent.

**Paper or page:** [Reciprocity for Kato-Saito idele class group with modulus](https://arxiv.org/abs/2008.05719v4). It says: “the left vertical arrow is the residue map and the right vertical arrow is the canonical surjection”

**Sources:**

- [Kazuya Kato, A generalization of local class field theory by using K-groups II](https://doi.org/10.3792/pjaa.54.250)

### Locally compact vector spaces turn Moore's reciprocity sequence into a localization sequence

**Remember:** Give F the discrete topology and require locally compact vector spaces with continuous operations.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19F05 (Generalized class field theory (\\(K\\)-theoretic aspects)), 19F15. arXiv math.KT, math.NT. Level 4: research.

**Definition.** Give the number field F its discrete topology. Objects of LCA(F) are Hausdorff locally compact abelian groups with continuous F-vector space operations, and morphisms are continuous F-linear maps. Exact sequences use closed embeddings and open quotient maps.

**Problem.** For a number field F, K₂(LCA(F)) has profinite completion μ(F), the roots of unity of F. Modulo divisible elements, the K₂ part of the localization sequence is Moore's sequence K₂(F) → ⊕ μ(Fᵥ) → μ(F) → 0. The sum runs over the noncomplex places v.

**How the definition helps.** The localization theorem for adelic blocks places the global and local K-groups in one exact sequence (our own summary). Moore’s theorem and class field theory identify its degree-two maps modulo divisible elements. Their composite vanishes by exactness, giving the Hilbert-symbol product formula under that identification.

**Paper or page:** [A non-commutative analogue of Clausen's view on the idèle class group](https://arxiv.org/abs/2109.04331), [A non-commutative analogue of Clausen's view on the idèle class group](https://arxiv.org/abs/2109.04331). It says: “If A is commutative (i.e. a number field), K₂(LCA<sub>A</sub>)<sup>∧</sup> ≅ μ(A), where μ(−) denotes the group of roots of unity.”

**Sources:**

- [O. Braunling, R. Henrard and A.-C. van Roosmalen, A non-commutative analogue of Clausen's view on the idèle class group, arXiv:2109.04331 (2021)](https://arxiv.org/abs/2109.04331)
- [C. C. Moore, Group extensions of p-adic and adelic linear groups, Publications Mathématiques de l'IHÉS 35 (1968) 5–70](https://doi.org/10.1007/BF02698923)

### Milnor K-groups state higher local class field theory

**Remember:** Dimension n needs n entries, so the multiplicative group becomes Kₙ.

*Makes the theorem clean to state or prove.* MSC 19F05 (Generalized class field theory (\\(K\\)-theoretic aspects)), 11S70, 19D45. arXiv math.NT, math.KT. Level 4: research.

**Definition.** An n-dimensional local field is a complete discretely valued field whose residue field is an (n − 1)-dimensional local field, ending at a finite field. Its Milnor K-group Kₙ(F) is generated by symbols {a₁, …, aₙ} of nonzero elements. The symbols are multiplicative in each entry and vanish when two adjacent entries sum to 1.

**Problem.** For an n-dimensional local field F, there is a reciprocity map from Kₙ(F) to the Galois group of the maximal abelian extension of F. For each finite abelian extension L of F, it gives an isomorphism from Kₙ(F) modulo norms from Kₙ(L) onto Gal(L/F).

**How the definition helps.** An n-fold Milnor symbol supplies one entry for each residue step (our own). For n = 1, the source is F× as in ordinary local class field theory. Kato’s higher local reciprocity theorem constructs the map and identifies the norm quotients.

**Wikipedia:** [Higher local field](https://en.wikipedia.org/wiki/Higher_local_field). It says: “The appropriate replacement for the multiplicative group becomes the nth Milnor K-group, where n is the dimension of the field”

**Sources:**

- [Ivan Fesenko and Masato Kurihara (eds.), Invitation to Higher Local Fields, Geometry and Topology Monographs 3 (2000)](https://doi.org/10.2140/gtm.2000.3)
- [Kazuya Kato, Existence theorem for higher local fields, in Invitation to Higher Local Fields (2000)](https://doi.org/10.2140/gtm.2000.3.165)

### Milnor norms pass constant factors

**Remember:** Keep a constant factor on the right through both residues.

*True by definition. Confidence: medium.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** Let E = F\[t\]/(P) for a monic irreducible P over a field F. For x ∈ Kₙᴹ(E), choose a lift in Kₙ₊₁ᴹ(F(t)) with residue x at P and zero at every other finite point. Its norm is minus the residue of that lift at infinity.

**Problem.** Let x be a Milnor class over E and y a Milnor class over F. The norm of x · res(y) is N(x) · y, where res denotes restriction and N denotes the norm.

**How the definition helps.** Multiply a lift of x on the right by the constant class y (our own). Residues commute with constant right factors, so the product lifts x · res(y) and has zero residues elsewhere. Its negative residue at infinity is N(x) · y. Bass–Tate exactness guarantees existence of lifts and independence of their negative residues at infinity.

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “0 \\to K<sub>n</sub><sup>M</sup>(F) \\to K<sub>n</sub><sup>M</sup>(F(t)) \\xrightarrow{\\partial\_\\pi} \\bigoplus\_{(\\pi) \\in \\text{Spec}(F\[t\])} K<sub>n-1</sub>F\[t\]/(\\pi) \\to 0”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)
- [Hyman Bass and John Tate, The Milnor ring of a global field (1973)](https://doi.org/10.1007/BFb0073733)

### Norms give higher reciprocity

**Remember:** Each finite residue contributes its negative residue at infinity.

*True by definition. Confidence: medium.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** At each irreducible polynomial P, the residue map takes a Milnor class over F(t) to a class one degree lower over F\[t\]/(P). Lift a class over F\[t\]/(P) to one whose only possible nonzero finite residue occurs at P and equals that class. Define its norm as minus the residue of the lift at infinity.

**Problem.** For a Milnor class of positive degree on F(t), the sum of its finite residues after applying their norms equals minus its residue at infinity.

**How the definition helps.** Each norm is minus the residue at infinity of a lift with just one prescribed finite residue (our own). Bass–Tate exactness gives such lifts for the finitely many nonzero residues. Subtracting their sum leaves a constant class, whose residue at infinity vanishes. Additivity of the residue gives the claimed sum.

**Wikipedia:** [Milnor K-theory](https://en.wikipedia.org/wiki/Milnor_K-theory). It says: “0 \\to K<sub>n</sub><sup>M</sup>(F) \\to K<sub>n</sub><sup>M</sup>(F(t)) \\xrightarrow{\\partial\_\\pi} \\bigoplus\_{(\\pi) \\in \\text{Spec}(F\[t\])} K<sub>n-1</sub>F\[t\]/(\\pi) \\to 0”

**Sources:**

- [John Milnor, Algebraic K-theory and quadratic forms (1970)](https://doi.org/10.1007/BF01425486)
- [Hyman Bass and John Tate, The Milnor ring of a global field (1973)](https://doi.org/10.1007/BFb0073733)

### Symbols generate Brauer torsion

**Remember:** A pure degree-two symbol becomes one cyclic algebra.

*Makes the theorem clean to state or prove.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** Let F contain a primitive ℓth root ζ for a prime ℓ invertible in F. For a,b ∈ F×, the symbol algebra is the associative F-algebra on x,y with x<sup>ℓ</sup> = a, y<sup>ℓ</sup> = b and yx = ζxy.

**Problem.** Every Brauer class killed by ℓ has a representative that is a tensor product of symbol algebras.

**How the definition helps.** The Merkurjev–Suslin theorem identifies degree-two Milnor K-theory modulo ℓ with ℓ-torsion in the Brauer group after choosing ζ. Each Milnor symbol maps to its symbol algebra (our own explanation). Every Milnor class is a sum of symbols, and addition of Brauer classes corresponds to tensor product.

**Wikipedia:** [Norm residue isomorphism theorem](https://en.wikipedia.org/wiki/Norm_residue_isomorphism_theorem). It says: “the case n = 2 is the Merkurjev–Suslin theorem.”

**Sources:**

- [Alexander Merkurjev and Andrei Suslin, K-cohomology of Severi–Brauer varieties and the norm residue homomorphism (1983 English translation)](https://doi.org/10.1070/IM1983v021n02ABEH001793)

### The Hilbert symbol computes K₂ of a local field modulo divisible elements

**Remember:** Apply reciprocity to an mth root and divide by that root.

*Makes the theorem clean to state or prove.* MSC 19F15 (Symbols and arithmetic (\\(K\\)-theoretic aspects)), 11S70. arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a local field F with finite group μ(F) of order m, choose a,b ∈ F× and β with βᵐ = b. The order-m Hilbert symbol is Art(a)(β)/β, using local reciprocity on the abelian extension F(β)/F.

**Problem.** For a non-Archimedean local field F, and for F = ℝ, the Hilbert symbol K₂(F) → μ(F) is onto and its kernel is uniquely divisible. So K₂(F) is μ(F) plus a vector space over ℚ.

**How the definition helps.** The Hilbert symbol is bilinear and kills Steinberg pairs, so Matsumoto’s presentation gives a map on K₂ (our own). The local Hilbert-symbol theorem gives a surjection with uniquely divisible kernel. That kernel is a rational vector space and splits off because divisible abelian groups are injective (our own).

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory). It says: “For non-Archimedean local fields, the group K₂(F) is the direct sum of a finite cyclic group of order m, say, and a divisible group K₂(F)ᵐ.”

**Paper or page:** [A non-commutative analogue of Clausen's view on the idèle class group](https://arxiv.org/abs/2109.04331). It says: “the maps hᵥ: K₂(Fᵥ) → μ(Fᵥ) are epimorphisms with uniquely divisible kernels”

**Sources:**

- [C. C. Moore, Group extensions of p-adic and adelic linear groups, Publications Mathématiques de l'IHÉS 35 (1968) 5–70](https://doi.org/10.1007/BF02698923)
- [A. S. Merkurjev, On the torsion in K₂ of local fields, Annals of Mathematics 118 (1983) 375–381](https://doi.org/10.2307/2007033)
- [O. Braunling, R. Henrard and A.-C. van Roosmalen, A non-commutative analogue of Clausen's view on the idèle class group, arXiv:2109.04331 (2021)](https://arxiv.org/abs/2109.04331)

### Absolute values forget unitary monodromy

**Remember:** Taking the absolute value forgets the phase acquired around a loop.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19D45. arXiv math.KT. Level 4: research.

**Definition.** The complex regulator of a pair of meromorphic functions on a smooth complex curve assigns nonzero complex numbers to loops avoiding their zeros and poles. Compose this character with the logarithm of the absolute value to obtain its real version.

**Problem.** The real character extends across a puncture exactly when the complex character has absolute value one around a small loop there. At zero, the pair (z,−1) gives a real character that extends and a complex character that fails to extend.

**How the definition helps.** Taking the logarithm of the absolute value kills every local factor of absolute value one. Filling the puncture kills its loop, so an additive character extends exactly when it vanishes there. Our own example uses Deligne’s local formula, which gives the loop value −1 for (z,−1).

**nLab:** [Higher regulators and values of L-functions](https://ncatlab.org/nlab/show/Higher+regulators+and+values+of+L-functions). It says: “from the second algebraic K-theory group to the first Betti cohomology group with coefficients in ℂ\*”

**Sources:**

- [P. Deligne, Le symbole modéré (1991)](https://doi.org/10.1007/BF02699258)

### Anderson duality turns Tate–Poitou duality into a fiber sequence of K-theory spectra

**Remember:** Map into the dualizing spectrum built from ℚₚ and ℚₚ/ℤₚ.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11R34, 55P42. arXiv math.KT, math.NT. Level 4: research.

**Definition.** For an injective abelian group J, let I<sub>J</sub> represent X ↦ Hom(π₀X,J). Define Iℤₚ as the fiber of I\_ℚₚ → I\_(ℚₚ/ℤₚ) induced by the quotient. The ℤₚ-Anderson dual of X is the function spectrum from X to Iℤₚ.

**Problem.** Let F be totally real, p odd prime, and L(R) the K(1)-local K-theory of R. The fiber of L(𝒪F\[1/p\]) → ∏ᵥ∣ₚ L(Fᵥ) is the loop spectrum of the ℤₚ-Anderson dual of L(𝒪F\[1/p\]).

**How the definition helps.** Anderson duality dualizes homotopy groups at the level of spectra, so one fiber sequence records the whole Tate–Poitou duality at once. On homotopy groups it gives the duality between global and local Galois cohomology with Tate-twisted coefficients (our own). The work is Blumberg and Mandell's identification of the fiber, which uses Tate–Poitou duality and the Quillen–Lichtenbaum theorem.

**Paper or page:** [Homotopy groups of spectra and p-adic L-functions over totally real number fields](https://arxiv.org/abs/2206.14783). It says: “The homotopy fiber fib(κ) of the completion map κ : L<sub>K</sub>(1)K(𝒪<sub>F</sub>\[1/p\]) → ∏<sub>v∈Σ</sub> L<sub>K</sub>(1)K(F<sub>v</sub>) in K(1)-local algebraic K-theory is weakly equivalent to ΩI\_ℤₚ L<sub>K</sub>(1)K(𝒪<sub>F</sub>\[1/p\])”

**Sources:**

- [A. J. Blumberg and M. A. Mandell, K-theoretic Tate–Poitou duality and the fiber of the cyclotomic trace, Inventiones Mathematicae 221 (2020) 397–419](https://doi.org/10.1007/s00222-020-00952-z)
- [G. Sala Fernandez, Homotopy groups of spectra and p-adic L-functions over totally real number fields, arXiv:2206.14783 (2022)](https://arxiv.org/abs/2206.14783)

### Bloch symbols give regulator coordinates

**Remember:** Bloch symbols turn regulator evaluations into dilogarithm evaluations.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a number field F, generate a rational vector space by symbols \[x\] for x ∈ F ∖ {0,1}. For every ordered quintuple of distinct projective points, kill the alternating sum of cross-ratio symbols obtained by deleting each point. The rational Bloch group is the kernel of \[x\] ↦ x ∧ (1−x) in the rationalized exterior square of F×.

**Problem.** After extending coefficients to ℚ, the Bloch group identifies with K₃(F), the third algebraic K-group with the same coefficients. Each embedding σ of F into ℂ gives one real coordinate of Borel’s regulator.

**How the definition helps.** Evaluate each symbol \[x\] by D(σ(x)), using the real Bloch–Wigner dilogarithm (our own description). Its five-term identity makes the sum independent of the representative. Suslin’s comparison gives rational K₃ for number fields, and the regulator comparison gives Borel’s coordinate up to a fixed nonzero normalization.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792). It says: “is induced by mapping \[x\] in F♭ to iD(σ(x)).”

**Sources:** none listed. No primary source with a working link was found.

### Borel covolumes absorb basis choices

**Remember:** The lattice is fixed even when its generators change.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** Fix a number field F, an integer i ≥ 2, and the usual normalization of the regulator on K₂ᵢ₋₁(F). Use one real coordinate per conjugate pair of nonreal embeddings, plus one per real embedding for odd i. The regulator covolume is the Euclidean volume of a fundamental parallelepiped of the image lattice in these coordinates.

**Problem.** Borel’s theorem expresses the first nonzero Taylor coefficient of the Dedekind zeta function at 1−i as a nonzero rational multiple of this volume.

**How the definition helps.** Covolume states the formula without choosing generators, in our own explanation. The usual determinant formula uses the regulator images of an integral basis of the degree 2i−1 K-group modulo its finite-order elements. Its absolute determinant measures the same parallelepiped volume. Borel proves that the image is a full lattice and relates that volume to the zeta coefficient.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792). It says: “Let Rᵢ(F) be the covolume of the image of regᵢ,ꜰ.”

**Sources:**

- [Armand Borel, Cohomologie de SLₙ et valeurs de fonctions zêta aux points entiers (1977)](https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0/)

### Bott inversion makes étale K-theory periodic

**Remember:** Invert the Bott class and every degree can shift by two.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** Let a number field F contain a primitive pth root of unity for an odd prime p, and set R = 𝒪F\[1/p\]. For the corresponding degree-two Bott class β, define the localized degree-n group as the direct limit of Kₙ₊₂ⱼ(R; ℤ/p) under multiplication by β.

**Problem.** Étale K-theory computes groups using covers that are locally unramified. For this ring and these coefficients, multiplication by β identifies its groups two degrees apart.

**How the definition helps.** Formal inversion supplies the inverse to the degree shift, in our own explanation. In ordinary algebraic K-theory the construction gives a class, with no inverse specified. Thomason’s comparison theorem identifies the theory obtained by inversion with periodic étale K-theory.

**nLab:** [Bott element](https://ncatlab.org/nlab/show/Bott+element). It says: “A Bott element is an element in a periodic cohomology theory, multiplication by which is invertible.”

**Sources:**

- [Robert Thomason, Algebraic K-theory and etale cohomology (1985)](https://www.numdam.org/articles/10.24033/asens.1495/)

### Cohomological dimension two collapses Quillen's spectral sequence for number rings

**Remember:** Three columns and even rows leave no room for differentials.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11R70, 11R34. arXiv math.KT, math.NT. Level 4: research.

**Definition.** A scheme has étale ℓ-cohomological dimension at most two if Hʳₑₜ(X,M) vanishes for every ℓ-primary torsion sheaf M and every r &gt; 2. For i ≥ 1 the Tate twist ℤℓ(i) is the inverse limit of the ith tensor powers of the sheaves of ℓᵛth roots of unity.

**Problem.** Let F be a number field, ℓ an odd prime and i ≥ 2. Then K₂ᵢ₋₁(𝒪F) ⊗ ℤℓ ≅ H¹(𝒪F\[1/ℓ\], ℤℓ(i)) and K₂ᵢ₋₂(𝒪F) ⊗ ℤℓ ≅ H²(𝒪F\[1/ℓ\], ℤℓ(i)).

**How the definition helps.** The descent sequence has only columns zero through two and only even rows for these number rings (our own). A second differential meets an odd row, and every longer differential crosses at least three columns. Nontrivial twists have zero H⁰ here, leaving one graded piece in each stated degree. Quillen–Lichtenbaum comparison and localization identify the abutment with the displayed K-groups.

**Wikipedia:** [Algebraic K-theory](https://en.wikipedia.org/wiki/Algebraic_K-theory), [Quillen–Lichtenbaum conjecture](https://en.wikipedia.org/wiki/Quillen%E2%80%93Lichtenbaum_conjecture). It says: “In the case studied by Lichtenbaum, the spectral sequence would degenerate, yielding Lichtenbaum's conjecture.”

**Sources:**

- [C. Weibel, Algebraic K-theory of rings of integers in local and global fields, in Handbook of K-Theory, Springer (2005) 139–190](https://doi.org/10.1007/978-3-540-27855-9_5)

### Compatible pairs lift to differential K-theory

**Remember:** A class and a closed form lift when their regulator classes agree.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19E20. arXiv math.KT. Level 4: research.

**Definition.** In degree zero, a differential algebraic K-class combines an ordinary K-class with a closed cochain, called its curvature. The Beilinson regulator takes the K-class to a real cohomology class. The homotopy pullback construction also records a path comparing the regulator and curvature in their common target.

**Problem.** An ordinary K-class and a closed cochain occur together as the underlying class and curvature exactly when their classes agree in the regulator target.

**How the definition helps.** Recording the comparison path makes equality of target classes the precise condition for a lift. Our own argument uses the fact that two points represent the same component exactly when a path joins them. The construction requires a regulator defined on spaces of representatives, beyond the classical map on groups.

**nLab:** [differential algebraic K-theory](https://ncatlab.org/nlab/show/differential+algebraic+K-theory). It says: “of the inclusion of the non-negative degree truncation of the de Rham resolution of the absolute Hodge complex”

**Sources:**

- [U. Bunke and G. Tamme, Multiplicative differential algebraic K-theory and applications (2016)](https://doi.org/10.2140/akt.2016.1.227)

### Conjugation explains the regulator rank

**Remember:** Complex pairs always count, but real places count only in odd weight.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** Let F be a number field and n ≥ 2 an integer. Give each embedding of F into ℂ a real coordinate. Require complex conjugation to preserve its coordinate for odd n and reverse its sign for even n.

**Problem.** For n ≥ 2, let r₁ count real embeddings of F and r₂ count conjugate pairs of nonreal embeddings. The rank of K₂ₙ₋₁(𝒪F) is r₁ + r₂ for odd n and r₂ for even n.

**How the definition helps.** The sign rule reduces the rank formula to counting coordinates, in our own explanation. Borel’s regulator identifies the K-group, after extending scalars to ℝ, with this coordinate space. Each pair of nonreal embeddings contributes one dimension. A real embedding contributes one for odd n and zero for even n.

**nLab:** [higher regulator](https://ncatlab.org/nlab/show/higher+regulator). It says: “a higher regulator, or just regulator for short, is a homomorphism from algebraic K-theory to a suitable ordinary cohomology theory.”

**Paper or page:** [Borel's rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044). It says: “Denote by r₁ and r₂ the numbers of real and conjugate pairs of complex places of 𝔽, respectively.”

**Sources:**

- [Armand Borel, Cohomologie de SLₙ et valeurs de fonctions zêta aux points entiers (1977)](https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0/)

### Direct limits give function-field regulators

**Remember:** Shrink to a common open subset to compare regulator classes.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 14F43. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Let F be the field of rational functions on a smooth integral variety X over ℚ. For each nonempty algebraic open subset, take real Deligne cohomology after extending scalars to ℝ. Define the group for F by identifying two classes whenever their restrictions agree on a common smaller open subset.

**Problem.** Regulator classes represented on open subsets have a common target depending only on F. Choosing another smooth integral variety with the same function field gives canonically isomorphic target groups for the specified field identification.

**How the definition helps.** The definition permits shrinking past any closed subset where a representative is undefined. Our own argument uses the fact that a field identification gives isomorphic dense open subsets of the two varieties. Shrinking inside either subset therefore computes the same group. Constructing the regulator maps into that group is the separate result cited by Trieu.

**Paper or page:** [The Mahler measure of exact polynomials and special L-values of K3 surfaces](https://arxiv.org/abs/2412.00893v3). It says: “where $H<sup>i\_\\mathcal{D}</sup>(F, \\mathbb {R}(n)) := \\varinjlim \_{U \\subset X \\text{ open }} H<sup>i\_\\mathcal{D}</sup>(U\_\\mathbb {R}, \\mathbb {R}(n))$”

**Sources:**

- [Thu Ha Trieu, The Mahler measure of exact polynomials and special L-values of K3 surfaces](https://arxiv.org/abs/2412.00893v3)

### Embedding coordinates give Galois equivariance

**Remember:** A field automorphism permutes the regulator coordinates.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11R70. arXiv math.KT, math.NT. Level 4: research.

**Definition.** Let F be a finite Galois extension of ℚ. For each embedding σ of F into ℂ, apply σ to a K-theory class and evaluate the same complex Borel regulator. Keep the full tuple of real values, including both embeddings in each conjugate pair.

**Problem.** For n ≥ 2, consider algebraic K-theory in degree 2n−1 of the ring of integers of F. A field automorphism g sends a class to one whose coordinate at σ equals the original coordinate at σ ∘ g.

**How the definition helps.** Keeping all embeddings makes the Galois action a permutation of coordinates without choosing representatives for conjugate pairs. Our own calculation composes g with σ before evaluating the complex regulator. Zhang’s theorem identifies the resulting map with the Borel regulator.

**Paper or page:** [Borel's rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044v2). It says: “Then there is a G-equivariant map of spectra”

**Sources:**

- [Ningchuan Zhang, Borel’s rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044v2)

### Five-term relations give dilogarithm regulators

**Remember:** The regulator only needs to respect the five-term relations.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11G55. arXiv math.NT, math.AG. Level 4: research.

**Definition.** The rational pre-Bloch group of ℂ has one rational generator \[z\] for each z ∈ ℂ ∖ {0,1}. For each ordered quintuple of distinct projective points, impose the alternating sum of cross-ratio symbols of its four-point faces as a relation.

**Problem.** The Bloch–Wigner dilogarithm D, a real single-valued version of the dilogarithm, gives a linear map \[z\] ↦ D(z) on this quotient. Restricting it to the kernel of \[z\] ↦ z ∧ (1 − z) gives the Bloch dilogarithm regulator.

**How the definition helps.** Abel’s five-term identity says exactly that D vanishes on every defining relation (our own explanation). Linear evaluation on the generators therefore descends to the quotient. Restriction to the stated kernel gives the Bloch regulator.

**Wikipedia:** [Bloch group](https://en.wikipedia.org/wiki/Bloch_group). It says: “Abel's functional equation implies that D₂ vanishes on the subgroup D(K) of Z(K)”

**Paper or page:** [Cluster Polylogarithms I: Quadrangular Polylogarithms](https://arxiv.org/abs/2208.01564). It says: “All relations between them follow from the 5-term relation”

**Sources:**

- [Cluster Polylogarithms I: Quadrangular Polylogarithms](https://arxiv.org/abs/2208.01564)
- [A. B. Goncharov, Polylogarithms, regulators, and Arakelov motivic complexes](https://doi.org/10.1090/s0894-0347-04-00472-2)

### Fixed vectors give Artin vanishing orders

**Remember:** Keep the Galois action to count the Artin multiplicity.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11R42. arXiv math.NT, math.KT. Level 4: research.

**Definition.** Let F/K be a finite Galois extension of number fields with group G, and let V be a finite-dimensional complex representation of G. Tensor the algebraic K-group of the integers of F in degree 2n−1 with V over ℤ. Take the complex dimension of the subspace fixed by the simultaneous action of G on both factors.

**Problem.** For n ≥ 2 this dimension equals the order of vanishing at 1−n of the Artin L-function attached to V.

**How the definition helps.** The equivariant regulator identifies the complexified K-group with embedding coordinates carrying the conjugation sign (−1)ⁿ⁻¹. Taking diagonal invariants counts one copy of V per complex place of K (our own). A real place contributes the eigenspace of conjugation with eigenvalue (−1)ⁿ⁻¹. The Artin functional equation and nonvanishing at n identify this count with the vanishing order.

**Paper or page:** [Borel's rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044v2). It says: “\\mathrm  {ord}<sub>s=1-n</sub>L(s,\\rho )= \\qopname  \\relax o{dim}\_ \\mathbb  {L}\\left \[K<sub>2n-1</sub>( \\mathcal  {O}\_ \\mathbb  {F})\\otimes \_ \\mathbb  {Z} \\underline  {\\rho }\\right \]<sup>G</sup>.”

**Sources:**

- [Ningchuan Zhang, Borel’s rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044v2)

### Monodromy gives tame reciprocity

**Remember:** The small loops sum to zero, so their monodromies multiply to one.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19D45. arXiv math.KT. Level 4: research.

**Definition.** For nonzero meromorphic f,g on a compact connected Riemann surface, remove their zeros and poles. Their Deligne cup product gives a flat line bundle on the complement. Its monodromy character assigns each loop the scalar by which parallel transport acts on its fiber.

**Problem.** At a point with local coordinate t, write f = tᵐu and g = tⁿv with u and v nonvanishing there. The tame symbol is the value of (−1)ᵐⁿvᵐ/uⁿ there. The product of these symbols over all points equals one.

**How the definition helps.** Using transport turns the usual product of local function values into evaluation on the sum of puncture loops. Deligne’s local formula identifies each factor, up to simultaneous inversion, with the monodromy of its loop. Our own topological argument uses the surface left after removing small disks. Its boundary gives a relation saying the sum of the loops is zero in homology.

**nLab:** [Deligne line bundle](https://ncatlab.org/nlab/show/Deligne+line+bundle). It says: “is a holomorphic line bundle with connection, hence a degree-2 cocycle in Deligne cohomology”

**Sources:**

- [P. Deligne, Le symbole modéré (1991)](https://doi.org/10.1007/BF02699258)

### Norm residue needs twisted coefficients

**Remember:** Keep the Galois action on roots of unity in the coefficients.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** Let F be a field and ℓ a prime invertible in F. For a ∈ F×, the Kummer class κ(a) is represented by σ ↦ σ(α)/α for any α satisfying α<sup>ℓ</sup> = a in a separable closure. The norm-residue map takes {a₁,…,aₙ} to the cup product of their Kummer classes with coefficients in μℓ⊗ⁿ, using the unit for n = 0.

**Problem.** For each n ≥ 0, this map identifies degree n Milnor K-theory modulo ℓ with degree n Galois cohomology with those coefficients.

**How the definition helps.** The tensor power records how field automorphisms act on the roots in all n slots. Our own example takes F = 𝔽₂ and ℓ = 3, where the multiplicative group is trivial, so Milnor K₁ modulo 3 vanishes. With constant coefficients ℤ/3, the Frobenius can map to any element, so the degree-one group is ℤ/3 and the map fails. Kummer theory proves the degree-one case, and the norm-residue theorem proves the higher degrees.

**nLab:** [Milnor K-theory](https://ncatlab.org/nlab/show/Milnor+K-theory). It says: “the sheaf of lth roots of unity to the n (i.e. tensored with itself n times).”

**Paper or page:** [Brauer p-dimension of henselian discretely valued fields over characteristic p &gt; 0](https://arxiv.org/abs/2410.02938v1). It says: “Hⁿ(K,(ℤ/p)(n)) ≅ Kᴹₙ(K)/p”

**Sources:**

- [Vladimir Voevodsky, On motivic cohomology with ℤ/ℓ-coefficients (2011)](https://doi.org/10.4007/annals.2011.174.1.11)

### Picard–Fuchs operators remove period choices

**Remember:** Differentiate with an operator that kills every period ambiguity.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 14C15. arXiv math.AG, math.KT. Level 4: research.

**Definition.** In Sato’s family of Kummer surfaces, evaluate the regulator of a higher algebraic cycle on the family’s holomorphic two-form. This gives local functions up to addition of periods, the integrals of the form over continuously transported integral cycles. A Picard–Fuchs operator is a differential operator that kills all these periods.

**Problem.** Each of Sato’s two Picard–Fuchs operators takes the local regulator functions to a single holomorphic function on the parameter space.

**How the definition helps.** Taking functions modulo periods makes either operator independent of the choice of integration chain. Two local representatives differ by a period, which the operator kills. Their derivatives under that operator therefore agree on overlaps. The work lies in proving Sato’s explicit operators kill all periods and in constructing holomorphic local regulator functions.

**Paper or page:** [Higher Chow cycles on a family of Kummer surfaces](https://arxiv.org/abs/2211.16109v4). It says: “In particular, 𝒟 factors the sheaf 𝒬ω.”

**Sources:**

- [K. Sato, Higher Chow cycles on a family of Kummer surfaces (2026)](https://doi.org/10.4153/S0008414X24000415)

### Residue K-groups give deleted Euler factors

**Remember:** Deleting a prime adds one finite residue K-group.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** Let S be a finite set of finite primes of a number field F. Its ring of S-integers consists of elements integral at every prime outside S. Its zeta function omits the Euler factors at primes in S.

**Problem.** Fix an integer n ≥ 2. Passing to S-integers multiplies the order of the algebraic K-group in degree 2n−2 by the product of qⁿ⁻¹−1 over S. Here q counts elements of each residue field, the field obtained by reducing at the prime.

**How the definition helps.** The localization sequence compares the two rings by adding one residue-field term for each deleted prime (our own). The finite-field even K-groups vanish in positive degrees, and number-field localization gives surjectivity onto the residue terms here. Thus the new order equals the old order times the product of the residue-group orders. Quillen’s finite-field calculation gives qⁿ⁻¹−1 for each factor.

**Paper or page:** [A full-rank subgroup of Bloch Groups of CM Fields](https://arxiv.org/abs/2507.05792). It says: “K₂ᵢ₋₁(𝔽q) ≃ ℤ/(qⁱ−1), K₂ᵢ(𝔽q)=0.”

**Sources:**

- [Daniel Quillen, On the cohomology and K-theory of the general linear groups over a finite field (1972)](https://doi.org/10.2307/1970825)

### Ring spectra preserve regulator products

**Remember:** A ring spectrum map commutes with multiplication before taking homotopy groups.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19E20. arXiv math.KT. Level 4: research.

**Definition.** A map of commutative ring spectra preserves the unit and multiplication together with their coherence data. In particular, composing multiplication with the map agrees up to homotopy with first applying the map to both factors and then multiplying.

**Problem.** The Beilinson regulator sends a product of algebraic K-theory classes to the product of their regulator classes. Multiplication adds the weights, the indices of the target’s components.

**How the definition helps.** A map of ring spectra preserves products before one takes the individual groups. Our own deduction applies this fact to the refined regulator and then takes homotopy groups. The work lies in constructing the map and identifying its components with the classical regulator maps defined separately in each degree.

**nLab:** [differential algebraic K-theory](https://ncatlab.org/nlab/show/differential+algebraic+K-theory). It says: “As a homomorphism of E-∞ ring objects, this is”

**Sources:**

- [U. Bunke, T. Nikolaus and G. Tamme, The Beilinson regulator is a map of ring spectra (2018)](https://doi.org/10.1016/j.aim.2018.05.027)
- [U. Bunke and G. Tamme, Multiplicative differential algebraic K-theory and applications (2016)](https://doi.org/10.2140/akt.2016.1.227)

### Steinberg relations present diagonal cohomology

**Remember:** All relations come from products of complementary Kummer classes.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.NT, math.KT. Level 4: research.

**Definition.** For a field F and a prime ℓ invertible in F, let μℓ be the ℓth roots of unity in a separable closure. The diagonal cohomology ring has degree-n term Hⁿ(F,μℓ⊗ⁿ) for n ≥ 0, with zeroth tensor power ℤ/ℓ. Multiplication is the cup product with the natural identification of coefficient tensor powers.

**Problem.** This ring has degree-one generators given by F× modulo ℓ-th powers, with multiplication in F× corresponding to addition of generators. Its only additional relations say that the product of the generators for a and 1 − a vanishes whenever both are nonzero.

**How the definition helps.** Matching the coefficient power to the degree collects the cohomology groups into one ring with a presentation in degrees one and two. Our own explanation uses the norm-residue theorem to identify this ring with the Milnor ring modulo ℓ. The Milnor ring starts with the tensor algebra on the degree-one generators and imposes exactly the stated pair relations. Kummer theory identifies the generators, while the full comparison excludes additional relations.

**Wikipedia:** [Norm residue isomorphism theorem](https://en.wikipedia.org/wiki/Norm_residue_isomorphism_theorem). It says: “This is the defining relation of Milnor K-theory.”

**Sources:**

- [Vladimir Voevodsky, On motivic cohomology with ℤ/ℓ-coefficients (2011)](https://doi.org/10.4007/annals.2011.174.1.11)

### Tame symbols decide where regulators extend

**Remember:** A tame symbol records what a loop around a missing point sees.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19D45. arXiv math.KT. Level 4: research.

**Definition.** At a point x of a smooth complex curve, write f = tᵐu and g = tⁿv with t a uniformizer and u,v units. The tame symbol sends {f,g} to (−1)ᵐⁿv(x)ᵐ/u(x)ⁿ and extends multiplicatively to K₂ of the function field. A class is unramified at x if its symbol equals one.

**Problem.** The regulator assigns a multiplicative character to loops away from the zeros and poles. It extends across x exactly when the class is unramified there. For the pair (z,2), the tame symbol at zero is 2.

**How the definition helps.** The unramified condition makes the regulator equal one on the loop that disappears when we fill the puncture. Deligne’s local formula identifies the value on that loop with the tame symbol or its inverse, depending on orientation. Our own example follows by setting t = z, m = 1 and n = 0.

**nLab:** [Higher regulators and values of L-functions](https://ncatlab.org/nlab/show/Higher+regulators+and+values+of+L-functions). It says: “To extend it to all of X, one uses the commutative diagram of localization exact sequences”

**Sources:**

- [P. Deligne, Le symbole modéré (1991)](https://doi.org/10.1007/BF02699258)
- [A. A. Beilinson, Higher regulators and values of L-functions (1985)](https://doi.org/10.1007/BF02105861)

### Tame symbols detect puncture periods

**Remember:** The modulus of the tame symbol measures the period around a puncture.

*Rules out counterexamples. Confidence: medium.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11G55. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Near a point P of a smooth complex curve, write two nonzero rational functions as f = tᵐa and g = tⁿb. Here t is a local coordinate vanishing at P, and a and b are regular and nonzero there. Their tame symbol is the number s = (−1)ᵐⁿa(P)ⁿ/b(P)ᵐ.

**Problem.** Set η = log\|f\| d arg g − log\|g\| d arg f, where d arg measures angular change. Its integral around a small counterclockwise circle about P equals 2π log\|s\|. If every tame symbol has modulus one, these integrals define periods on the complete curve.

**How the definition helps.** In our own calculation, the tame symbol records exactly the terms that survive integration around the missing point. The log\|t\| terms cancel, and the rest give 2π log\|s\|. The form is closed away from zeros and poles, and filling the punctures kills their circles in homology. Our own example f = t and g = 2 gives the nonzero integral −2π log 2.

**Paper or page:** [A shifted Mahler measure identity for Boyd's family](https://arxiv.org/abs/2202.09974). It says: “Let f,g ∈ ℚ(E) and {f,g} ∈ K₂(E).”

**Sources:**

- [A shifted Mahler measure identity for Boyd's family, Lemma 2.1](https://arxiv.org/abs/2202.09974)
- [Yang, Liu and Tang, A Mahler Measure Identity Involving a Genus 2 Family, Section 1](https://ccj.pku.edu.cn/Article/DownLoad?id=364490499&type=ArticleFile)

### Tate twists repeat K-group p-ranks

**Remember:** The action on pth roots sets the period.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a number field F and odd prime p, let μₚ be the pth roots of unity in an algebraic closure. The mod-p Tate twist of weight j ≥ 0 is its jth tensor power over 𝔽ₚ with diagonal Galois action.

**Problem.** For a finite abelian group A, its p-rank is the dimension of A/pA over the field with p elements. For positive k, the p-rank of the degree 2k algebraic K-group of the integers of F repeats with period \[F(ζₚ)∶F\]. Here ζₚ is a primitive pth root of unity.

**How the definition helps.** Tensor powers make the period visible in the action on roots of unity, by our own calculation. The multipliers on the original line form a group of order \[F(ζₚ)∶F\]. Raising them to the power k+1 therefore gives the same action after one period. The comparison between K-theory and étale cohomology identifies the p-rank with a cohomology dimension for this twist.

**Paper or page:** [On the p-divisibility of even K-groups of the ring of integers of a cyclotomic field](https://arxiv.org/abs/2308.04099). It says: “In particular, one has p ∣ \# K₂ₖ(𝒪Ｆ) if and only if p ∣ \# K₂ₖ′(𝒪Ｆ).”

**Sources:**

- [Meng Fai Lim, On the p-divisibility of even K-groups of the ring of integers of a cyclotomic field](https://arxiv.org/abs/2308.04099)

### Tate-twisted roots give the Birch–Tate factor

**Remember:** The squared action fixes more than the ordinary roots.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a number field F, w₂(F) is the largest positive integer m passing the following test. For every F-automorphism of F(ζₘ), its exponent a on a primitive mth root ζₘ satisfies a² ≡ 1 modulo m.

**Problem.** Let F be a totally real abelian extension of ℚ. Its second algebraic K-group of integers has order w₂(F) times the absolute value of its Dedekind zeta function at −1.

**How the definition helps.** The squared action gives the correction factor that ordinary roots of unity miss, in our own comparison. Over ℚ all invertible residues modulo m have square one exactly when m divides 24. Thus w₂(ℚ) is 24, although ℚ contains only two roots of unity. The Birch–Tate theorem for totally real abelian fields supplies the special-value identity.

**Wikipedia:** [Birch–Tate conjecture](https://en.wikipedia.org/wiki/Birch%E2%80%93Tate_conjecture). It says: “the largest positive integer such that the extension of F by the N-th root of unity has an elementary abelian 2-group as its Galois group”

**Paper or page:** [On the p-divisibility of even K-groups of the ring of integers of a cyclotomic field](https://arxiv.org/abs/2308.04099). It says: “Let F be a totally real abelian number field of degree r.”

**Sources:** none listed. No primary source with a working link was found.

### Telescopic localization states Quillen–Lichtenbaum as a claim about connective covers

**Remember:** Invert every map that becomes an equivalence after smashing with the periodic telescope.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19D50, 55P42. arXiv math.KT, math.AT. Level 4: research.

**Definition.** At a prime p, let T(1) be the telescope of a v₁-periodic self-map of a mod-p Moore spectrum. Localization at T(1) universally inverts maps that become equivalences after smashing with T(1).

**Problem.** Let S = ℤ\[1/p\], or S = 𝔽ℓ with ℓ ≠ p. Then the p-completed K-theory spectrum of S is the connective cover of the telescopic localization of K(S).

**How the definition helps.** The localized spectrum packages the whole étale side into one object, so the comparison becomes one statement about a map of spectra. Its homotopy comes from étale cohomology of S with Tate-twisted coefficients (our own). The work is the norm residue isomorphism theorem of Voevodsky and Rost, with the 2-primary work of Rognes and Weibel, as the source cites.

**Paper or page:** [The spectrum of units of algebraic K-theory](https://arxiv.org/abs/2410.10126). It says: “For S = ℤ\[1/p\] or 𝔽ℓ with ℓ ≠ p, the map K(S)ₚ → L<sub>T</sub>(1)K(S) induces an isomorphism K(S)ₚ ≃ L<sub>T</sub>(1)K(S)\[0,∞)”

**Sources:**

- [S. Carmeli and K. Luecke, The spectrum of units of algebraic K-theory, arXiv:2410.10126 (2024)](https://arxiv.org/abs/2410.10126)

### Tetralogarithm cycles factor Borel’s regulator

**Remember:** A tetralogarithm cycle has zero sum after replacing each \[z\]₄ by \[z\]₃ ⊗ z.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 11G55. arXiv math.NT, math.AG. Level 4: research.

**Definition.** Write Bⱼ(ℂ) for the rational weight-j polylogarithm group with symbols \[z\]ⱼ for z outside {0,1}. In weight four, the first differential sends \[z\]₄ to \[z\]₃ ⊗ z in B₃(ℂ) ⊗ ℂ×. A cycle is a rational symbol sum whose image under this linear map vanishes.

**Problem.** Goncharov and Rudenko map the seventh algebraic K-group of ℂ to the vector space of these cycles. Evaluation gives a nonzero rational multiple of Borel’s regulator, a real-valued homomorphism on that K-group.

**How the definition helps.** In our own explanation, the cycle definition supplies an explicit list of arguments and coefficients for numerical evaluation. The original definition of the K-group supplies no such list. The substantive theorem constructs the map to cycles and compares the resulting evaluation with the regulator.

**Wikipedia:** [Goncharov conjecture](https://en.wikipedia.org/wiki/Goncharov_conjecture). It says: “Goncharov defined the following complex called Γ(F,n) placed in degrees \[1,n\]”

**Sources:**

- [A. B. Goncharov and D. Rudenko, Motivic correlators, cluster varieties and Zagier’s conjecture on ζ of F at 4](https://annals.math.princeton.edu/articles/22927)

### Three tame symbols prove the Steinberg relation

**Remember:** Check three small loops for the universal Steinberg pair.

*True by definition.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 19D45. arXiv math.KT. Level 4: research.

**Definition.** For two nowhere-zero holomorphic functions on a smooth complex curve, their Deligne cup product gives a line bundle with a flat connection. Parallel transport around a loop then multiplies its fiber by a scalar. These scalars define the regulator character.

**Problem.** If f and 1−f are both nowhere zero, the regulator character of (f,1−f) equals one on every loop. This is the Steinberg relation for the regulator.

**How the definition helps.** By pullback along f, the bundle construction reduces every such pair to (z, 1 − z) on the sphere punctured at zero, one and infinity. Our own proof checks the tame symbols, which are the local factors in Deligne's formula for transport around each puncture. They equal one at zero and at one, and at infinity the sign cancels the limiting ratio −1. The puncture loops generate first homology, so the character is trivial.

**nLab:** [Higher regulators and values of L-functions](https://ncatlab.org/nlab/show/Higher+regulators+and+values+of+L-functions). It says: “one has the Steinberg identity t ∪ (1−t) = 0”

**Sources:**

- [P. Deligne, Le symbole modéré (1991)](https://doi.org/10.1007/BF02699258)
- [A. A. Beilinson, Higher regulators and values of L-functions (1985)](https://doi.org/10.1007/BF02105861)

### Transcendental regulators kill decomposable cycles

**Remember:** Holomorphic two-forms ignore the regulator terms supported on curves.

*Rules out counterexamples.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)), 14C15. arXiv math.AG, math.KT. Level 4: research.

**Definition.** On a smooth projective complex surface, a higher Chow cycle of type (2,1) uses curves carrying rational functions whose divisors sum to zero. Its transcendental regulator evaluates the Deligne regulator only on holomorphic two-forms. Values are functionals modulo periods, the functionals obtained by integrating those forms over closed integral two-cycles.

**Problem.** Products of divisors with nonzero constants have zero transcendental regulator. A nonzero value therefore detects an indecomposable class, one outside the subgroup generated by these products.

**How the definition helps.** Restricting the regulator to holomorphic two-forms removes the contributions from divisors. In the product formula a divisor contributes by integration over its curves. Our own explanation uses the fact that a holomorphic two-form restricts to zero on a complex curve. Sato’s proposition gives the resulting test for indecomposability.

**Paper or page:** [Higher Chow cycles on a family of Kummer surfaces](https://arxiv.org/abs/2211.16109v4). It says: “In other words, the transcendental regulator map factors through CH²(X,1)ᵢₙᵈ.”

**Sources:**

- [K. Sato, Higher Chow cycles on a family of Kummer surfaces (2026)](https://doi.org/10.4153/S0008414X24000415)

### Twisted K-theory reads Artin vanishing orders

**Remember:** A twist selects the K-theory that the character can see.

*Makes the theorem clean to state or prove.* MSC 19F27 (Étale cohomology, higher regulators, zeta and \\(L\\)-functions (\\(K\\)-theoretic aspects)). arXiv math.KT, math.NT. Level 4: research.

**Definition.** For a finite Galois extension F/K of number fields, write G = Gal(F/K). For n ≥ 1 and a finite-dimensional complex G-representation V, form K₂ₙ₋₁(𝒪F) ⊗ℤ V. Its fixed space consists of the tensors unchanged by every g ∈ G acting diagonally.

**Problem.** The Artin L-function encodes the action of primes on V. Its order of vanishing at 1−n equals the complex dimension of this fixed space.

**How the definition helps.** Taking fixed vectors selects exactly the part that pairs with V, in our own explanation. For n &gt; 1, Borel’s regulator describes the K-group with its G-action. For n = 1, Dirichlet’s unit theorem gives the corresponding description. The functional equation for the L-function gives the same count from the infinite places.

**Paper or page:** [Borel's rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044). It says: “Then ordₛ₌₁₋ₙ L(s,ρ) = dim𝕃 \[K₂ₙ₋₁(𝒪𝔽) ⊗ℤ ρ̲\]ᴳ.”

**Sources:**

- [Ningchuan Zhang, Borel's rank theorem for Artin L-functions](https://arxiv.org/abs/2209.10044)
- [Armand Borel, Cohomologie de SLₙ et valeurs de fonctions zêta aux points entiers (1977)](https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0/)

### Larger residue fields preserve Witt presentations

**Remember:** The two-element residue field can hide a relation.

*Rules out counterexamples.* MSC 19G38 (Hermitian \\(K\\)-theory, relations with \\(K\\)-theory of rings). arXiv math.KT. Level 4: research.

**Definition.** A commutative local ring has a unique maximal ideal. Its residue field is the quotient by that ideal. Require the residue field to have more than two elements.

**Problem.** The natural map from degree-zero Milnor–Witt K-theory to the Grothendieck–Witt ring is an isomorphism for these rings. The first ring uses formal symbols for units and relations among them. The second uses formal differences of nondegenerate symmetric bilinear forms, with addition by orthogonal sum and multiplication by tensor product.

**How the definition helps.** The residue field condition excludes a ring where two different symbol classes give the same form class (our own). For the polynomial ring over the two-element field modulo x⁴, the map is onto with kernel of order two. The comparison theorem proves that the symbol relations suffice under the stated hypothesis (our own).

**Paper or page:** [On the presentation of the Grothendieck-Witt group of symmetric bilinear forms over local rings](https://arxiv.org/abs/2311.03962), [On the presentation of the Grothendieck-Witt group of symmetric bilinear forms over local rings](https://arxiv.org/abs/2311.03962). It says: “In fact, we have isomorphisms of abelian groups GW(R) ≅ ℤ ⊕ (ℤ/2)² and K₀ᴹᵂ(R) ≅ ℤ ⊕ (ℤ/2)³.”

**Sources:**

- [On the presentation of the Grothendieck-Witt group of symmetric bilinear forms over local rings](https://arxiv.org/abs/2311.03962)

### Reduced K₀ removes free-cell contributions

**Remember:** Free cells should not count against having a finite cell model.

*Rules out counterexamples.* MSC 19J05 (Finiteness and other obstructions in \\(K<sub>0</sub>\\)), 57Q12. arXiv math.AT, math.KT. Level 4: research.

**Definition.** For a connected finitely dominated cell complex X, put R = ℤ\[π₁X\]. Choose a bounded complex P of finitely generated projective R-modules chain equivalent to the cellular chains of its universal cover. Wall’s obstruction is the alternating sum of the classes \[Pᵢ\] in K₀(R)/⟨\[R\]⟩.

**Problem.** Suppose X is a homotopy retract of a finite cell complex, so the composite through that complex is homotopic to the identity. Wall’s obstruction vanishes exactly when X is homotopy equivalent to a finite cell complex.

**How the definition helps.** In our own argument, reduced K₀ makes every cell in a finite model contribute zero. Choosing one lift per cell gives a basis for the cellular chains over the group ring. At a point the ordinary K₀ class is one, although the point already has a finite model. Wall constructs the finite projective model, proves independence of the choices and establishes the converse.

**nLab:** [Wall's finiteness obstruction](https://ncatlab.org/nlab/show/Wall%27s+finiteness+obstruction). It says: “the vanishing of Wall's finiteness obstruction is a necessary and sufficient condition for this to happen.”

**Sources:**

- [C. T. C. Wall, Finiteness Conditions for CW-Complexes (1965)](https://doi.org/10.2307/1970382)

### Restricting to invertible extensions makes Ext a group equal to KK¹

**Remember:** Keep only the extensions you can cancel, and Ext becomes KK¹.

*Rules out counterexamples. Confidence: medium.* MSC 19K33 (Ext and \\(K\\)-homology), 19K35. arXiv math.OA, math.KT. Level 4: research.

**Definition.** For C\*-algebras A,B, consider extensions of A by B ⊗ 𝒦, where 𝒦 denotes the compact operators. Their stable unitary equivalence classes form a semigroup under direct sum, with split extensions representing zero. An extension class is invertible if some extension class adds to it to give zero.

**Problem.** The invertible extensions form a group Ext⁻¹(A,B), and Kasparov showed that Ext⁻¹(A,B) ≅ KK¹(A,B) for separable A and σ-unital B. When A is nuclear, every extension is invertible, so Ext(A,B) is itself a group.

**How the definition helps.** Asking for an inverse, or a completely positive lift, removes the extensions that cannot be cancelled. Such extensions exist: Anderson constructed a C\*-algebra A for which Ext(A) is not a group. For an invertible extension, a Stinespring-type dilation turns the lift into a Kasparov module, which gives the isomorphism with KK¹ (our own). The work goes into Kasparov's theorem and, for nuclear A, into the Choi–Effros lifting theorem (our own).

**nLab:** [KK-theory](https://ncatlab.org/nlab/show/KK-theory). It says: “There is an isomorphism KK(A,B) ≃ Ext¹(A,B) to a suitable group of suitable extensions of A by B.”

**Sources:**

- [Joel Anderson, A C\*-algebra A for which Ext(A) is not a group, Annals of Mathematics 107 (1978) 455–458](https://doi.org/10.2307/1971124)
- [Gennadi G. Kasparov, The operator K-functor and extensions of C\*-algebras, Mathematics of the USSR-Izvestiya 16 (1981) 513–572](https://doi.org/10.1070/IM1981v016n03ABEH001320)

### Asymptotic morphisms give E-theory long exact sequences for every extension

**Remember:** Require continuous families to preserve each algebra operation up to errors tending to zero.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)). arXiv math.OA, math.KT. Level 4: research.

**Definition.** An asymptotic morphism A → B consists of maps φₜ for t ≥ 1 with bounded continuous paths t ↦ φₜ(a) for every a. For every pair a,b and scalar λ, the defects in addition, scalar multiplication, multiplication, and preservation of adjoints tend to zero in norm. E(A,B) uses homotopy classes of such families between the suspensions of A and B stabilized by compact operators.

**Problem.** Let 0 → J → A → B → 0 be any short exact sequence of separable C\*-algebras, and let D be separable. Then the groups E(D, –) and E(–, D) form six-term exact sequences. No splitting condition on the extension is needed.

**How the definition helps.** The Connes–Higson construction associates an asymptotic morphism ΣB → J to every separable extension (our own summary). A quasicentral approximate unit in J allows a lift of B to define this class without a multiplicative section. Composition gives the boundary maps, and E-theory excision with Bott periodicity gives the six-term sequences.

**nLab:** [E-theory](https://ncatlab.org/nlab/show/E-theory). It says: “This construction may be understood as the universal improvement of KK-theory under excision”

**Sources:**

- [Nigel Higson, Categories of fractions and excision in KK-theory, Journal of Pure and Applied Algebra 65 (1990) 119–138](https://doi.org/10.1016/0022-4049(90)90114-W)

### Cuntz's picture of KK-theory makes the Kasparov product a composition

**Remember:** In Cuntz's picture, multiplying KK classes is just composing homomorphisms.

*True by definition.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)). arXiv math.OA, math.KT. Level 4: research.

**Definition.** For a separable C\*-algebra A, let qA be the kernel of the fold map A∗A → A from the full nonunital free product. Cuntz’s picture represents KK(A,B) by homotopy classes of \*-homomorphisms qA → 𝒦 ⊗ B, where 𝒦 denotes the compact operators.

**Problem.** The Kasparov product KK(A,B) × KK(B,C) → KK(A,C) is well defined and associative. So separable C\*-algebras, with KK-groups as morphisms, form a category.

**How the definition helps.** The source and target of successive representatives differ, so Cuntz’s product construction uses stabilization and the canonical KK-equivalences involving qA (our own explanation). In the resulting category, the product agrees with composition and identity morphisms give units. Cuntz’s comparison theorem identifies this composition with the Kasparov product and supplies its well-definedness and associativity.

**Wikipedia:** [KK-theory](https://en.wikipedia.org/wiki/KK-theory). It says: “The product can be defined much more easily in the Cuntz picture given that there are natural maps from QA to A, and from B to K(H) ⊗ B that induce KK-equivalences.”

**Paper or page:** [Equivariant KK-theory and model categories](https://arxiv.org/abs/2506.16238). It says: “there is a natural isomorphism KKᴳ(A,B) ≅ \[q(A ⊗ 𝒦G) ⊗ 𝒦G, B ⊗ 𝒦G\], where q denotes the kernel of the fold map A∗A → A”

**Sources:**

- [Joachim Cuntz, A new look at KK-theory, K-Theory 1 (1987) 31–51](https://doi.org/10.1007/BF00533986)

### Defining KK and E-theory by universal properties gives the comparison functor

**Remember:** A rule that respects all extensions respects split extensions.

*True by definition.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** The canonical functor from separable C\*-algebras to KK is universal among homotopy-invariant, stable, split-exact functors to additive categories. Stability inverts corner embeddings into compact-operator stabilizations, and split exactness sends split extensions to direct sums. Universality means each such functor factors through KK uniquely up to natural isomorphism.

**Problem.** There is a canonical functor from Kasparov's KK category to E-theory that is compatible with the maps from C\*-algebras.

**How the definition helps.** E-theory is homotopy invariant and stable, and its exact sequences split on split extensions. Its functor therefore factors through KK by this universal property, giving the claimed comparison. Higson’s characterization identifies the universal category with analytic KK (our own).

**nLab:** [E-theory](https://ncatlab.org/nlab/show/E-theory). It says: “since every split exact sequence is in particular exact, there is a universal functor”

**Sources:**

- [Nigel Higson, A characterization of KK-theory (1987).](https://doi.org/10.2140/pjm.1987.126.253)
- [Nigel Higson, Categories of fractions and excision in KK-theory (1990).](https://doi.org/10.1016/0022-4049(90)90114-w)

### Generating the bootstrap class from ℂ makes K-theory detect KK-equivalences

**Remember:** Whatever ℂ cannot see is invisible to the whole bootstrap class.

*True by definition.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 18G80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** The bootstrap class is the smallest class of separable C\*-algebras that contains ℂ and is closed under KK-equivalence, suspension, mapping cones and countable direct sums. In the language of triangulated categories, it is the localizing subcategory of KK generated by ℂ.

**Problem.** Let f be a KK-morphism between algebras in the bootstrap class. If f induces isomorphisms on K₀ and K₁, then f is a KK-equivalence. In particular, an algebra in the class with zero K-theory is KK-equivalent to 0.

**How the definition helps.** Let C be the cone of f, which lies in the bootstrap class and has zero K-theory (our own). Since K-theory is represented by ℂ and its suspension, KK(Σⁿℂ,C) vanishes for all n. The objects X with KK(ΣⁿX,C) = 0 for every n form a localizing subcategory containing ℂ, hence containing C. Thus the identity of C vanishes, making C zero and f invertible.

**Paper or page:** [A survey on operator K-theory via homotopical algebra](https://arxiv.org/abs/2311.17191). It says: “That is, UCTsep is the smallest stable subcategory which is closed under countable colimits and contains kksep(ℂ).”

**Sources:**

- [Jonathan Rosenberg and Claude Schochet, The Künneth theorem and the universal coefficient theorem for Kasparov's generalized K-functor, Duke Mathematical Journal 55 (1987) 431–474](https://doi.org/10.1215/S0012-7094-87-05524-4)

### Kasparov equivalences preserve operator K-theory

**Remember:** Compose with an invertible correspondence and then compose with its inverse.

*True by definition.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** A KK-equivalence between separable complex C\*-algebras A and B is a class x ∈ KK(A,B) admitting a class y ∈ KK(B,A). Their Kasparov products in both orders must be the respective identity classes.

**Problem.** A KK-equivalence between separable complex C\*-algebras induces isomorphisms on both operator K-groups.

**How the definition helps.** In our own proof, composing maps from ℂ with the equivalence gives the desired map in each degree. Composing with its inverse gives the inverse on each group. The comparison theorem identifies these groups with the usual definitions using projections and unitaries. Those definitions alone supply no algebra homomorphism representing the equivalence.

**nLab:** [KK-theory](https://ncatlab.org/nlab/show/KK-theory). It says: “KK(ℂ, A) ≃ K₀(A)”

**Sources:** none listed. No primary source with a working link was found.

### Mapping cone triangles give KK exact sequences for every homomorphism

**Remember:** Cones always have completely positive sections, so cone triangles are always exact.

*Makes the theorem clean to state or prove.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 18G80. arXiv math.KT, math.OA. Level 4: research.

**Definition.** For a \*-homomorphism f from A to B, its cone consists of pairs (a,g) with a ∈ A and g a continuous B-valued path. Require g(0) = f(a) and g(1) = 0, and use pointwise algebra operations. Its Puppe triangle is ΣB → cone(f) → A → B.

**Problem.** Let f from A to B be any \*-homomorphism of separable C\*-algebras, and let D be separable. Then ⋯ → KK(D, ΣB) → KK(D, cone(f)) → KK(D, A) → KK(D, B) is exact, and so is the dual sequence for KK(–, D).

**How the definition helps.** Every cone extension cone(f) → A has a completely positive contractive section a ↦ (a,t ↦ (1−t)f(a)) (our own). Its kernel is ΣB. The Puppe triangle is distinguished in KK, so applying either representable functor gives the stated exact sequence.

**Paper or page:** [A survey on operator K-theory via homotopical algebra](https://arxiv.org/abs/2311.17191). It says: “The category KK⁰sep has a triangulated structure with shift operator S(−) and whose distinguished triangles are generated by the images of the Puppe sequences for maps f under kk⁰sep.”

**Sources:**

- [Ralf Meyer and Ryszard Nest, The Baum–Connes conjecture via localisation of categories, Topology 45 (2006) 209–259](https://doi.org/10.1016/j.top.2005.07.001)

### Module spectra express the operator Künneth formula

**Remember:** Tensor the spectra so torsion is not lost in the product formula.

*Makes the theorem clean to state or prove.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** Operator K-theory K(A) is a module spectrum over KU = K(ℂ) through the external product. For two such modules M,N, their tensor product over KU is the geometric realization of the two-sided bar with terms M ⊗ KU⊗ⁿ ⊗ N.

**Problem.** Let A lie in the UCT class, the smallest stable subcategory of KK that contains ℂ and is closed under colimits. Then for every B in KK, the canonical map K(A) ⊗<sub>KU</sub> K(B) → K(A ⊗ B) is an equivalence.

**How the definition helps.** In our own formulation, the tensor product of modules over KU packages the entire product formula into one map. An equivalence means the map induces isomorphisms on homotopy groups in every degree. The cited theorem proves this comparison for the stated category. Tensoring only the graded abelian groups can miss contributions from torsion.

**Paper or page:** [A survey on operator K-theory via homotopical algebra](https://arxiv.org/abs/2311.17191v1), [A survey on operator K-theory via homotopical algebra](https://arxiv.org/abs/2311.17191v1). It says: “For A in UCT and B in 𝐊𝐊, the canonical map K(A) ⊗<sub>KU</sub> K(B) → K(A ⊗ B) is an equivalence.”

**Sources:**

- [Ulrich Bunke, Markus Land and Ulrich Pennig, A survey on operator K-theory via homotopical algebra, Corollary 5.17](https://arxiv.org/abs/2311.17191v1)

### Relative projective resolutions of length one give universal coefficient sequences

**Remember:** Projective sources admit no nonzero maps that the functor kills.

*Makes the theorem clean to state or prove.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 18G25, 18G80. arXiv math.KT, math.OA. Level 4: research.

**Definition.** A homological ideal 𝔍 consists of all maps that a given stable homological functor sends to zero. An object P is 𝔍-projective if every map in 𝔍 with source P is zero.

**Problem.** Suppose A has a length-one 𝔍-projective resolution and belongs to the localizing subcategory generated by 𝔍-projectives. Each cohomological F gives a natural exact sequence 0 → ℝ¹F(ΣA) → F(A) → ℝ⁰F(A) → 0. For the K-theory ideal and KK(–,B), this gives 0 → Ext¹(K∗₊₁(A),K∗(B)) → KK∗(A,B) → Hom(K∗(A),K∗(B)) → 0 with graded groups.

**How the definition helps.** A length-one resolution leaves only two derived functors in the Meyer–Nest universal coefficient theorem. For the K-theory ideal, those functors give graded Hom and Ext on K-groups (our own).

**Paper or page:** [Relative homological algebra for bivariant K-theory](https://arxiv.org/abs/2303.01281). It says: “Let 𝔍 be a homological ideal in a triangulated category 𝔗. Let A ∈ 𝔗 have an 𝔍-projective resolution of length one. Suppose also that A ∈ ⟨𝔓𝔍⟩.”

**Sources:**

- [Ralf Meyer and Ryszard Nest, Homological algebra in bivariant K-theory and other triangulated categories. I, in Triangulated Categories, LMS Lecture Note Series 375, Cambridge University Press (2010)](https://doi.org/10.1017/cbo9781139107075.006)
- [George Nadareishvili, Relative homological algebra for bivariant K-theory, arXiv:2303.01281 (2023)](https://arxiv.org/abs/2303.01281)

### The universal property of KK-theory gives every split-exact stable functor Bott periodicity

**Remember:** A functor that factors through KK inherits its periodicity.

*True by definition.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 46L80. arXiv math.KT, math.OA. Level 4: research.

**Definition.** Let J denote the canonical functor from separable C\*-algebras to KK. Its universal property requires unique factorization F = H ∘ J, with H additive, for every homotopy-invariant, stable, split-exact functor F to abelian groups.

**Problem.** Every additive, homotopy-invariant, stable, split-exact functor F to abelian groups satisfies F(S²A) ≅ F(A), naturally in A. Here SA = C₀(ℝ) ⊗ A.

**How the definition helps.** H sends the KK Bott isomorphism S²A ≅ A to the required natural isomorphism (our own). Higson proved the factorization theorem, and Kasparov proved Bott periodicity in KK.

**Wikipedia:** [KK-theory](https://en.wikipedia.org/wiki/KK-theory). It says: “Any such theory satisfies Bott periodicity in the appropriate sense”

**Sources:**

- [Gennady Kasparov, The operator K-functor and extensions of C\*-algebras (1981, English translation)](https://doi.org/10.1070/IM1981v016n03ABEH001320)
- [Nigel Higson, A characterization of KK-theory (1987)](https://doi.org/10.2140/pjm.1987.126.253)

### Unbounded Kasparov modules make the external product an explicit Dirac operator

**Remember:** Even coefficients preserve grading, while the odd Dirac operator has bounded commutators.

*Makes the theorem clean to state or prove.* MSC 19K35 (Kasparov theory (\\(KK\\)-theory)), 58B34. arXiv math.OA, math.KT. Level 4: research.

**Definition.** An even spectral triple represents a dense star subalgebra 𝒜 of a unital C\*-algebra by even operators on a graded Hilbert space. Its odd self-adjoint operator D has compact resolvent. Every a ∈ 𝒜 preserves the domain of D, and \[D,a\] extends to a bounded operator.

**Problem.** Take even spectral triples (𝒜,H₁,D₁) and (ℬ,H₂,D₂) on A and B, with grading γ₁ on H₁. The closure of D₁ ⊗ 1 + γ₁ ⊗ D₂ defines a spectral triple for 𝒜 ⊙ ℬ on A ⊗min B. Its class is the external Kasparov product of the two classes.

**How the definition helps.** The grading makes the two summands anticommute, so their squared sum separates into D₁² ⊗ 1 + 1 ⊗ D₂² (our own). The unbounded external product theorem identifies the resulting bounded-transform class with the Kasparov product (our own). The quote gives the odd-by-odd version.

**Paper or page:** [Real Spectral Triples on Crossed Products](https://arxiv.org/abs/2012.15698). It says: “The triple (𝒜 ⊙ ℬ, H ⊕ H, D) is an even spectral triple on A ⊗min B and represents the external Kasparov product of \[(𝒜, H<sub>A</sub>, D<sub>A</sub>)\] ∈ KK₁(A, ℂ) with \[(ℬ, H<sub>B</sub>, D<sub>B</sub>)\] ∈ KK₁(B, ℂ).”

**Sources:**

- [Alessandro Rubin and Ludwik Dabrowski, Real spectral triples on crossed products, arXiv:2012.15698](https://arxiv.org/abs/2012.15698)

### A gamma element factoring through proper algebras makes assembly injective

**Remember:** Factor through a proper algebra and restrict to one on compact subgroups.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19K56 (Index theory), 19K35. arXiv math.KT, math.OA. Level 4: research.

**Definition.** A gamma element γ ∈ KKᴳ(ℂ,ℂ) restricts to the unit for every compact subgroup of G. It factors as η ⊗ₚ D through some proper G-algebra P, with η ∈ KKᴳ(ℂ,P) and D ∈ KKᴳ(P,ℂ).

**Problem.** If G has a gamma element, its Baum–Connes assembly map is split injective, with any coefficients. Kasparov built one for every discrete subgroup of a connected Lie group, so the Novikov conjecture holds for these groups.

**How the definition helps.** The compact-subgroup condition makes γ act as the identity on the topological side of assembly (our own). Assembly for proper coefficients is invertible, so the factorization gives a left inverse (our own). Kasparov constructs the required elements for discrete subgroups of connected Lie groups.

**Wikipedia:** [Baum–Connes conjecture](https://en.wikipedia.org/wiki/Baum%E2%80%93Connes_conjecture). It says: “Injectivity is known for a much larger class of groups thanks to the Dirac-dual-Dirac method. This goes back to ideas of Michael Atiyah and was developed in great generality by Gennadi Kasparov in 1987.”

**Paper or page:** [Crossed product approach to equivariant localization algebras](https://arxiv.org/abs/2108.11235v2). It says: “If there is an X-G-localized element x∈R(G) such that x=1ₖ in R(K) for any compact subgroup K, the Baum–Connes assembly map μᵣᴮ,ᴳ is split-injective for any B”

**Sources:**

- [G. G. Kasparov, Equivariant KK-theory and the Novikov conjecture, Inventiones Mathematicae 91 (1988)](https://doi.org/10.1007/BF01404917)

### Coarse embeddability into Hilbert space excludes expanders and gives coarse Baum–Connes

**Remember:** Control distances above at every scale and force distant points apart.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19K56 (Index theory), 51F30. arXiv math.OA, math.MG. Level 4: research.

**Definition.** A coarse embedding of X into Hilbert space H is a map f admitting nondecreasing functions ρ₋,ρ₊ from \[0,∞) to \[0,∞). For every x,y ∈ X, one has ρ₋(d(x,y)) ≤ ‖f(x)−f(y)‖ ≤ ρ₊(d(x,y)), and ρ₋ tends to infinity.

**Problem.** A uniformly discrete bounded-geometry space that coarsely embeds into Hilbert space has an isomorphic coarse assembly map (Yu). Coarse disjoint unions of bounded-degree expanders admit no such embedding. Some have nonsurjective coarse assembly maps (Higson, Lafforgue and Skandalis).

**How the definition helps.** Yu’s coarse Baum–Connes theorem uses precisely these distance bounds (our own). The quoted obstruction excludes coarse disjoint unions of expanders, including known counterexamples to surjectivity (our own).

**Wikipedia:** [Asymptotic dimension](https://en.wikipedia.org/wiki/Asymptotic_dimension). It says: “If X is a metric space with asdim(X)&lt;∞ then X admits a coarse (uniform) embedding into a Hilbert space.”

**Paper or page:** [Coarse embeddings at infinity and generalized expanders at infinity](https://arxiv.org/abs/2206.11151v2). It says: “Let {Xₙ}ₙ∈ℕ be a family of connected finite graphs. If {Xₙ}ₙ∈ℕ contains an expander at infinity, then the coarse disjoint union X=⊔ₙ∈ℕ Xₙ does not coarsely embed at infinity into Hilbert space.”

**Sources:**

- [G. Yu, The coarse Baum–Connes conjecture for spaces which admit a uniform embedding into Hilbert space, Inventiones Mathematicae 139 (2000) 201–240](https://doi.org/10.1007/s002229900032)
- [N. Higson, V. Lafforgue and G. Skandalis, Counterexamples to the Baum–Connes conjecture, Geometric and Functional Analysis (2002)](https://doi.org/10.1007/s00039-002-8249-5)

### Defining structure groups as K-theory makes Baum–Connes their vanishing

**Remember:** Take K-theory of the pseudolocal algebra to measure the obstruction to assembly.

*True by definition. Confidence: medium.* MSC 19K56 (Index theory), 19K33, 57R67. arXiv math.KT, math.OA. Level 4: research.

**Definition.** For a free proper cocompact Γ-space X, D\* is the norm closure of equivariant finite-propagation pseudolocal operators on an ample equivariant X-module. Pseudolocal means that commutators with all multiplication operators from C₀(X) are compact. For general EΓ, take the direct limit of these structure K-groups over Γ-compact subspaces, with the conventional degree shift.

**Problem.** The Roe extension gives the analytic surgery exact sequence, with quotient term Kᵢ₊₁(D\*/C\*) identified with Kᵢ(X/Γ) on Γ-compact pieces. For torsion-free Γ and X = EΓ, assembly is an isomorphism precisely when all analytic structure groups vanish.

**How the definition helps.** The six-term K-theory sequence of the Roe ideal stays exact under direct limits (our own). Paschke duality identifies the quotient term, and the boundary map for EΓ identifies with assembly (our own). Exactness makes both boundary maps isomorphisms precisely when both structure groups vanish (our own).

**Paper or page:** [Admissible Higson-Roe sequences for transformation groupoids](https://arxiv.org/abs/2411.00182v2). It says: “The group Γ satisfies the rectified Baum-Connes conjecture with coefficients in C(X) if and only if the structure groups 𝒮ᴮᴳᵂᵢ(X⋊Γ) are trivial.”

**Sources:**

- [N. Higson and J. Roe, Mapping surgery to analysis I. Analytic signatures, K-Theory (2004)](https://doi.org/10.1007/s10977-005-1561-8)

### Finite asymptotic dimension cuts a group into pieces and proves Novikov

**Remember:** Bounded overlap at every scale lets coarse K-theory be computed piece by piece.

*Makes the theorem clean to state or prove.* MSC 19K56 (Index theory), 20F69. arXiv math.KT, math.GR. Level 4: research.

**Definition.** A metric space has asymptotic dimension at most n if, for every r &gt; 0, it has a suitable cover by uniformly bounded sets. The condition is that each ball of radius r meets at most n + 1 of the sets. It is a large-scale form of covering dimension.

**Problem.** Let G be a finitely generated group of finite asymptotic dimension whose classifying space BG has the homotopy type of a finite CW-complex. Then G satisfies the Novikov conjecture: its higher signatures are homotopy invariants (Yu, 1998).

**How the definition helps.** Bounded overlap gives Yu’s controlled K-theory argument a uniform dimension bound at every scale (our own). Yu’s finite-asymptotic-dimension theorem gives the stated homotopy invariance.

**Wikipedia:** [Asymptotic dimension](https://en.wikipedia.org/wiki/Asymptotic_dimension). It says: “which proved that if G is a finitely generated group of finite homotopy type (that is with a classifying space of the homotopy type of a finite CW-complex) such that asdim(G)&lt;∞, then G satisfies the Novikov conjecture.”

**Sources:**

- [G. Yu, The Novikov conjecture for groups with finite asymptotic dimension, Annals of Mathematics 147 (1998) 325–355](https://doi.org/10.2307/121011)

### Localization algebras turn the assembly map into forgetting control

**Remember:** Shrink propagation along a path and evaluate at its starting point.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19K56 (Index theory), 19K33. arXiv math.KT, math.OA. Level 4: research.

**Definition.** For a proper metric space X, use bounded uniformly norm-continuous paths T from \[0,∞) into its Roe algebra. Require uniformly bounded propagation and propagation tending to zero as t tends to infinity. Their closure in the supremum norm is the localization algebra.

**Problem.** For a locally finite, finite-dimensional simplicial complex, localization-algebra K-theory computes locally finite K-homology. Evaluation at zero induces coarse assembly after passing to the limit over Rips complexes. For second-countable locally compact groups and separable equivariant coefficients, the equivariant forget-control map likewise gives Baum–Connes assembly.

**How the definition helps.** Evaluation at zero sends each controlled path to one Roe operator (our own). Yu identifies this map on K-theory with assembly after passing to Rips complexes for coarse K-homology (our own). Nishikawa identifies the equivariant forget-control map with Baum–Connes assembly.

**Paper or page:** [Crossed product approach to equivariant localization algebras](https://arxiv.org/abs/2108.11235v2). It says: “Let G be a locally compact group, X be a proper G-space and B be a separable G-C\*-algebra. The forget-control map ℱ: 𝔻∗ᴮ,ᴳ(X) → K∗(B⋊ᵣG) is naturally equivalent to the Baum–Connes assembly map”

**Sources:**

- [G. Yu, Localization algebras and the coarse Baum–Connes conjecture, K-Theory (1997)](https://doi.org/10.1023/a:1007766031161)
- [S. Nishikawa, Crossed product approach to equivariant localization algebras, arXiv:2108.11235](https://arxiv.org/abs/2108.11235v2)

### Rips complexes let coarse K-homology see a group's large-scale shape

**Remember:** Fill in simplices at every scale, and the integers become the real line.

*Rules out counterexamples. Confidence: medium.* MSC 19K56 (Index theory), 51F30. arXiv math.KT, math.MG. Level 4: research.

**Definition.** The Rips complex of a discrete metric space X at scale d has as simplices the finite sets of points with all distances at most d. Coarse K-homology is the limit, as d grows, of the K-homology of these complexes. It replaces the K-homology of X itself as the source of the coarse assembly map, whose target is the K-theory of the Roe algebra.

**Problem.** For X = ℤⁿ with n ≥ 1, coarse assembly is an isomorphism. The corresponding map from locally finite K-homology of the discrete lattice is not injective.

**How the definition helps.** The Rips limit identifies neighboring point classes that discrete K-homology distinguishes (our own). An edge joins neighboring lattice points at scale one, so their difference maps to zero (our own). Yu’s finite-asymptotic-dimension theorem gives the isomorphism for the coarse source (our own).

**Paper or page:** [A Bott periodicity theorem for ℓᵖ-spaces and the coarse Novikov conjecture at infinity](https://arxiv.org/abs/2207.04193v2). It says: “If X admits a fibred coarse embedding into an ℓᵖ-space for some p∈\[1,∞), then the coarse Novikov conjecture holds for X, i.e. the coarse assembly map μ : lim d→∞ K∗(P<sub>d</sub>(X)) → K∗(C\*(X)) is injective.”

**Sources:**

- [N. Higson and J. Roe, On the coarse Baum–Connes conjecture, in Novikov Conjectures, Index Theorems, and Rigidity, Cambridge University Press (1995)](https://doi.org/10.1017/cbo9780511629365.008)

### Shift defects compute Toeplitz boundaries

**Remember:** Subtract the missing-range projection from the kernel projection.

*True by definition.* MSC 19K56 (Index theory), 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** A partial isometry v preserves lengths on the orthogonal complement of its kernel and vanishes on the kernel. If v lifts a quotient unitary u, compute the boundary of \[u\] as \[1 − v\*v\] − \[1 − vv\*\]. Here v\* denotes the adjoint, and the brackets denote projection classes in K₀ of the kernel ideal.

**Problem.** For the algebra generated by the unilateral shift and its adjoint, quotienting by compact operators gives the continuous functions on the circle. The boundary sends the circle coordinate to minus the rank-one projection class.

**How the definition helps.** The Toeplitz extension identifies the shift modulo compact operators with the circle coordinate. The shift has zero kernel and misses exactly the first basis vector (our own). Its two defects therefore give minus the rank-one projection class (our own).

**Wikipedia:** [Toeplitz algebra](https://en.wikipedia.org/wiki/Toeplitz_algebra). It says: “So the Toeplitz algebra can be viewed as the C\*-algebra extension of continuous functions on the circle by the compact operators.”

**Paper or page:** [Notes on C★-algebras](https://arxiv.org/abs/2505.17456v1). It says: “Then ∂(\[u\])=\[1ₙ−v\*v\]−\[1ₙ−vv\*\].”

**Sources:** none listed. No primary source with a working link was found.

### The proper classifying space lets the assembly map work for finite groups

**Remember:** Finite subgroups fix contractible spaces, and infinite subgroups fix nothing.

*Rules out counterexamples.* MSC 19K56 (Index theory), 19K33. arXiv math.KT, math.OA. Level 4: research.

**Definition.** For a discrete group Γ, a model of E̲Γ is a Γ-CW complex whose H-fixed set is contractible for every finite subgroup H. Every infinite subgroup has empty fixed set.

**Problem.** For a finite group G, the space E̲G is a point, so the Baum–Connes assembly map of G is an isomorphism. Both sides are the representation ring R(G), the group of formal differences of representations of G.

**How the definition helps.** For finite G a point passes the fixed-set test (our own). Assembly there is the Green–Julg isomorphism, identifying representation classes with K₀(C\*ᵣG) and giving zero in odd degree (our own). Using the free space instead gives a rank mismatch for every nontrivial finite group (our own).

**Wikipedia:** [Baum–Connes conjecture](https://en.wikipedia.org/wiki/Baum%E2%80%93Connes_conjecture). It says: “In case Γ is discrete and torsion-free, the left hand side reduces to the non-equivariant K-homology with compact supports of the ordinary classifying space BΓ of Γ.”

**Sources:**

- [P. Baum, A. Connes and N. Higson, Classifying space for proper actions and K-theory of group C\*-algebras, Contemporary Mathematics 167 (1994)](https://doi.org/10.1090/conm/167/1292018)

### The Rosenberg index lets positive scalar curvature kill higher Â-genera

**Remember:** Twist the spin Dirac operator by the flat group-algebra bundle and take its index.

*Makes the theorem clean to state or prove.* MSC 19K56 (Index theory), 53C21, 58J22. arXiv math.KT, math.DG. Level 4: research.

**Definition.** For a closed spin manifold M with f:M → BΓ, pull back the flat Mishchenko bundle EΓ ×Γ C\*Γ along f. The Rosenberg index α(M,f) is the index of the spin Dirac operator twisted by this bundle.

**Problem.** If M has a metric of positive scalar curvature, then α(M,f) = 0. If also the rational assembly map of Γ is injective, then every higher Â-genus ⟨Â(M) ∪ f\*x, \[M\]⟩, with x in H\*(BΓ;ℚ), is zero.

**How the definition helps.** Flatness gives D² = ∇\*∇ + κ/4, so positive scalar curvature κ makes D invertible (our own). Its index therefore vanishes. Assembly sends f∗\[D\] to that index, so rational injectivity forces f∗\[D\] to vanish rationally (our own). The homological Chern character then gives the vanishing of all stated pairings (our own).

**Paper or page:** [Positive scalar curvature -- constructions and obstructions](https://arxiv.org/abs/2202.05904v1), [Positive Scalar Curvature due to the Cokernel of the Classifying Map](https://arxiv.org/abs/2006.15965v2). It says: “(Rosenberg) If M carries a positive scalar curvature metric, then α(M,f) vanishes.”

**Sources:**

- [J. Rosenberg, C\*-algebras, positive scalar curvature, and the Novikov conjecture, Publications Mathématiques de l'IHÉS (1983)](https://doi.org/10.1007/BF02953775)

### Using the reduced group C\*-algebra avoids the Kazhdan projection obstruction

**Remember:** Complete the group ring in its left translation action.

*Rules out counterexamples. Confidence: medium.* MSC 19K56 (Index theory), 22D55, 46L80. arXiv math.OA, math.KT. Level 4: research.

**Definition.** For a discrete group Γ, C\*ᵣ(Γ) is the operator-norm closure of its complex group ring acting by left translation on ℓ²(Γ).

**Problem.** For every hyperbolic group, reduced assembly is an isomorphism. For infinite hyperbolic groups with property (T), including cocompact lattices in Sp(n,1) for n ≥ 2, maximal assembly is not surjective.

**How the definition helps.** For infinite Γ, left translation has no invariant vectors, so the reduced quotient kills the Kazhdan projection p (our own). The trivial representation detects \[p\] in maximal K-theory (our own). If maximal assembly hit \[p\], its preimage would contradict injectivity of reduced assembly (our own). Lafforgue proves reduced assembly is an isomorphism for hyperbolic groups.

**Wikipedia:** [Baum–Connes conjecture](https://en.wikipedia.org/wiki/Baum%E2%80%93Connes_conjecture). It says: “It was a long-standing problem since the first days of the conjecture to expose a single infinite property T-group that satisfies it.”

**Paper or page:** [K-theory of relative group C\*-algebras and the relative Novikov conjecture](https://arxiv.org/abs/2110.10859v4). It says: “Let G be a hyperbolic group and A any G-C\*-algebra. Then the Baum–Connes conjecture with coefficients in A holds for G”

**Sources:**

- [V. Lafforgue, La conjecture de Baum–Connes à coefficients pour les groupes hyperboliques, Journal of Noncommutative Geometry 6 (2012) 1–197](https://doi.org/10.4171/jncg/89)

### Essential positivity contracts Fredholm components

**Remember:** Join positive quotient operators by straight lines.

*Makes the theorem clean to state or prove.* MSC 19K99 (\\(K\\)-theory and operator algebras), 47A53. arXiv math.KT. Level 4: research.

**Definition.** A bounded operator is Fredholm if its range is closed and its kernel and cokernel are finite-dimensional. Identify operators whose difference is compact, meaning a norm limit of finite-rank operators. Call a self-adjoint Fredholm operator essentially positive if its image in this quotient has nonnegative spectrum.

**Problem.** On an infinite-dimensional separable complex Hilbert space, the essentially positive operators form one whole component of the self-adjoint Fredholm operators in the operator norm. This component contracts continuously to the identity.

**How the definition helps.** Positivity in the quotient describes the whole component while allowing finitely many negative eigenvalues before taking the quotient (our own). Fredholm’s condition is equivalent to invertibility in the quotient by Atkinson’s theorem (our own). Straight lines from positive invertible elements to the identity stay positive and invertible, so straight lines contract the original operators (our own). Along any continuous self-adjoint Fredholm path, the quotient spectrum cannot acquire negative values without crossing zero (our own).

**Paper or page:** [Chern character and Fermi point](https://arxiv.org/abs/2505.06704). It says: “consisting of self-adjoint Fredholm operators that are positive in the Calkin algebra, forms a path-connected component of Fredₛₐ and is contractible.”

**Sources:** none listed. No primary source with a working link was found.

### Spectral maps expose the kernel fiber

**Remember:** Maps over zero land in the kernel.

*True by definition.* MSC 19K99 (\\(K\\)-theory and operator algebras). arXiv math.KT. Level 4: research.

**Definition.** For a graded C\*-algebra A, stabilize A by graded tensor product with the compacts on a graded Hilbert space with both parity summands infinite-dimensional. Its K-theory space consists of graded star homomorphisms from C₀(ℝ), graded by reflection, to that stabilization. Give this space the topology of norm convergence on each input.

**Problem.** A surjective grading-preserving star homomorphism induces a map of K-theory spaces. Its homotopy fiber over zero, which allows images equipped with a path to zero, is equivalent to the kernel’s K-theory space.

**How the definition helps.** In the map model, a representative maps to zero exactly when its values lie in the stabilized kernel (our own). This identifies the ordinary fiber directly, without computing a boundary map in the usual exact sequence (our own). The cited lifting theorem lets the ordinary fiber compute the homotopy fiber (our own).

**Paper or page:** [The spectral model of (Real) K-theory](https://arxiv.org/abs/2410.21606). It says: “Then, 𝕂(A,H) → 𝕂(B,H) is a Serre fibration, with fiber 𝕂(J).”

**Sources:**

- [The spectral model of (Real) K-theory](https://arxiv.org/abs/2410.21606)

### Spectral products associate on representatives

**Remember:** Split the input, then tensor the maps.

*True by definition.* MSC 19K99 (\\(K\\)-theory and operator algebras). arXiv math.KT. Level 4: research.

**Definition.** Put S = C₀(ℝ), graded by reflection, and use graded tensor products throughout. The coproduct Δ sends the coordinate multiplier x to x ⊗ 1 + 1 ⊗ x by functional calculus. The external product of graded star homomorphisms f,g from S into stabilized algebras is (f ⊗ g) ∘ Δ.

**Problem.** At the level of maps, the external product is associative after the canonical identification of the two tensor products. Swapping the inputs gives the same result after the graded swap, which introduces a minus sign when both factors are odd.

**How the definition helps.** The two ways to split the input three ways give the same map, so both products agree before taking classes (our own). The splitting also respects the graded swap (our own). The work lies in constructing this splitting and comparing map classes with the usual groups defined from projections in the ungraded case (our own).

**Paper or page:** [The spectral model of (Real) K-theory](https://arxiv.org/abs/2410.21606). It says: “Products are commutative and associative, in the sense that the following diagrams commute strictly”

**Sources:**

- [The spectral model of (Real) K-theory](https://arxiv.org/abs/2410.21606)

### Superconnection Chern forms are closed

**Remember:** The square commutes with its root, and a graded trace kills commutators.

*True by definition.* MSC 19L10 (Riemann-Roch theorems, Chern characters), 58J20. arXiv math.DG, math-ph. Level 4: research.

**Definition.** On forms valued in a graded complex vector bundle, a superconnection A is an odd linear operator satisfying the graded Leibniz rule. For each scalar k-form α and bundle-valued form s, this means A(αs) = dα·s + (−1)ᵏαA(s). Its Chern form is the even trace minus the odd trace of exp(−A²).

**Problem.** The Chern character form of a finite-rank superconnection is closed.

**How the definition helps.** Our own calculation reduces closedness to the identity that A commutes with every power of its square. The graded product rule identifies the exterior derivative of the Chern form with the graded trace of that commutator. The transgression formula shows this definition gives the same cohomology class as the ordinary connection formula, with matching normalization.

**Paper or page:** [The families analytic index for 1∣1-dimensional Euclidean field theories](https://arxiv.org/abs/2303.09207v1). It says: “When it exists, the Chern form of a Clₙ-linear superconnection 𝔸 is closed and has total degree n.”

**Sources:**

- [Daniel Quillen, Superconnections and the Chern character (1985)](https://doi.org/10.1016/0040-9383(85)90047-3)

### Connective K-theory modulo Bott gives integers

**Remember:** Removing positive powers of Bott from connective K-theory leaves only the integers.

*Rules out counterexamples.* MSC 19L41 (Connective \\(K\\)-theory, cobordism), 55N20. arXiv math.AT, math.KT. Level 4: research.

**Definition.** The connective cover ku comes with a map to periodic complex K-theory KU inducing isomorphisms on every nonnegative homotopy group. All negative homotopy groups of ku vanish. Its Bott element β lifts the periodicity generator in degree two.

**Problem.** The cofiber of multiplication by β on ku represents ordinary integral cohomology. Here the cofiber is the homotopy version of the quotient by a map.

**How the definition helps.** Removing the negative groups leaves the homotopy ring of ku as the polynomial ring ℤ\[β\], by Bott periodicity (our own calculation). Multiplication by β is injective there, with cokernel ℤ in degree zero, so the cofiber has only ℤ in degree zero. A spectrum with only ℤ in degree zero represents ordinary integral cohomology. In periodic K-theory β is invertible, so the cofiber vanishes instead.

**nLab:** [ku](https://ncatlab.org/nlab/show/ku), [Bott periodicity](https://ncatlab.org/nlab/show/Bott+periodicity). It says: “The ring spectrum commonly denoted ku is the connective cover of the spectrum KU, which represents complex topological K-theory.”

**Sources:** none listed. No primary source with a working link was found.

### Character averaging gives nondegenerate pairings

**Remember:** Multiply character values, average over the group and reduce modulo integers.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 19L47, 57R18. arXiv math.KT. Level 4: research.

**Definition.** For finite G, pair a virtual character χ with a class function f modulo virtual characters. Take the residue modulo ℤ of the average of χ(g)f(g) over all g ∈ G.

**Problem.** This intersection pairing takes values in ℂ/ℤ and detects every nonzero class on either side.

**How the definition helps.** Averaging pairs each irreducible character with its dual with value one and all others with zero (our own). Thus an odd representative pairs integrally with every even class exactly when all its character coefficients are integers (our own). Any nonzero even coefficient can likewise be detected by scaling the dual character (our own). The calculation uses the identification of differential classes with these character groups (our own).

**nLab:** [delocalized equivariant cohomology](https://ncatlab.org/nlab/show/delocalized+equivariant+cohomology). It says: “the disjoint union of fixed loci”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Differential orbifold K-theory (2013)](https://doi.org/10.4171/JNCG/143)

### Chern–Simons relations cancel stabilization changes

**Remember:** Changing a finite index bundle changes its eta form by the compensating transgression.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 58J28. arXiv math.KT, math.DG. Level 4: research.

**Definition.** A differential K-cycle consists of a Hermitian bundle with unitary connection and an odd form φ modulo exact forms. Two cycles agree if adding the same auxiliary bundle with connection permits a unitary identification and φ₁−φ₂ = CS(∇₁,∇₂) modulo exact forms. Here the stabilized connections use that identification, with dCS = ch(∇₂)−ch(∇₁).

**Problem.** Consider a family of closed even-dimensional Spinᶜ fibers with metrics and compatible connections defining its Dirac operators. Any two finite bundle additions making the positive operators surjective give the same differential analytic index.

**How the definition helps.** Comparing the corrected cycles instead of their kernel bundles lets the change in the spectral correction cancel the connection change (our own). Ho proves that the stabilized kernel bundles are isomorphic and that their eta forms differ by precisely the required Chern–Simons form modulo exact forms.

**Paper or page:** [Local index theory and ℤ/kℤ K-theory](https://arxiv.org/abs/2410.16399). It says: “Then there exists a ℤ₂-graded morphism”

**Sources:**

- [Man-Ho Ho, Local index theory and ℤ/kℤ K-theory, Proposition 5.1](https://arxiv.org/abs/2410.16399)

### Circle integration excludes exotic addition

**Remember:** Circle integration ties the odd-degree addition to the even-degree theory.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 55N20. arXiv math.AT. Level 4: research.

**Definition.** For a smooth K-extension with underlying class I, curvature R and form map a, circle integration is a natural additive map K̂ʲ(S¹×M) → K̂ʲ⁻¹(M). It commutes with I, R and a using their respective circle integrations. It kills pullbacks from M and changes sign under circle reversal.

**Problem.** Any two such extensions on smooth manifolds admit a unique natural isomorphism preserving the structure maps and circle integration. Without circle integration, nonisomorphic extensions exist.

**How the definition helps.** Circle integration recovers odd classes from even classes on the circle product, forcing the comparison in odd degrees (our own). Bunke and Schick prove uniqueness in even degrees using approximations by smooth manifolds (our own). They also construct a different addition in odd degree when integration is omitted (our own).

**nLab:** [differential cohomology](https://ncatlab.org/nlab/show/differential+cohomology). It says: “If we don't require compatibility with S¹-integration, then there are "exotic" abelian group structures on K̂¹.”

**Sources:**

- [Bunke and Schick, Uniqueness of smooth extensions of generalized cohomology theories, Theorems 3.3 and 6.2](https://doi.org/10.1112/jtopol/jtq002)

### Connections absorb odd form corrections

**Remember:** A connection on a trivial bundle can store an odd form correction.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** A structured bundle carries a connection up to changes whose Chern–Simons form is exact. This odd form measures how the characteristic forms of two connections differ. The structured bundle model represents differential K-classes by formal differences of these bundles.

**Problem.** On a compact smooth manifold, every degree-zero differential K-class with complex connections and complex forms admits a representative with zero auxiliary form.

**How the definition helps.** Using connection differences in place of auxiliary forms builds form corrections into the representatives (our own). The substantive step is the Simons–Sullivan realization theorem. It realizes each odd form, modulo exact forms and odd Chern characters, by connections on a trivial bundle.

**nLab:** [Simons-Sullivan structured bundle](https://ncatlab.org/nlab/show/Simons-Sullivan+structured+bundle). It says: “such that the corresponding Grothendieck group is a model for differential K-theory.”

**Sources:**

- [James Simons and Dennis Sullivan, Structured vector bundles define differential K-theory, Proposition 2.6](https://www.claymath.org/library/proceedings/cmip011c.pdf)

### Curvature distinguishes orbifold representations

**Remember:** A character records the trace of every symmetry.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 19L47, 57R18. arXiv math.KT, hep-th. Level 4: research.

**Definition.** For a finite group acting on a point, orbifold K-curvature records one number per conjugacy class of group elements. For a virtual representation, a formal difference of representations, this number is the difference of their traces.

**Problem.** Orbifold curvature distinguishes all even differential K-classes of a point with finite symmetry.

**How the definition helps.** Recording every trace gives the full character, which determines a virtual representation (our own). For the group of order two, the sign and trivial representations have equal dimension and opposite traces at the nonidentity element (our own). The differential K-theory exact sequence identifies the even group with virtual representations (our own).

**nLab:** [delocalized equivariant cohomology](https://ncatlab.org/nlab/show/delocalized+equivariant+cohomology). It says: “of the disjoint union of fixed loci”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Differential orbifold K-theory (2013)](https://doi.org/10.4171/JNCG/143)
- [Richard J. Szabo and Alessandro Valentino, Ramond-Ramond Fields, Fractional Branes and Orbifold Differential K-Theory (2010)](https://doi.org/10.1007/s00220-009-0975-1)

### Determinants retain form corrections

**Remember:** Correct the top exterior power connection by subtracting 2πi times the one-form.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** A degree-zero Freed–Lott representative combines a Hermitian bundle with unitary connection and an odd differential form modulo exact forms. Its differential determinant takes the top exterior power and subtracts 2πi times the one-form component from the induced connection.

**Problem.** The differential determinant sends sums of differential K-classes to tensor products of lines with connection. Its value up to connection-preserving isomorphism depends only on the class.

**How the definition helps.** Correcting the ordinary determinant connection cancels the change allowed in the representative (our own). The degree-one Chern–Simons form measures this change by the trace of the connection difference. Changing the correction by an exact form gives an isomorphic connection.

**nLab:** [determinant line bundle](https://ncatlab.org/nlab/show/determinant+line+bundle). It says: “line bundle with connection that refines the first Chern-class to ordinary differential cohomology.”

**Sources:**

- [Daniel S. Freed and John Lott, An index theorem in differential K-theory (2010), Section 8.1](https://math.berkeley.edu/~lott/gt-2010-14-021p.pdf)

### Differential Todd classes package Riemann–Roch

**Remember:** Put the Todd correction into integration before comparing Chern characters.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 19L10. arXiv math.KT, math.DG. Level 4: research.

**Definition.** For a smooth K-orientation with Spinᶜ connection ∇ and odd correction σ, define its differential Todd class by T̂ = τ̂(∇) − a(σ). Here τ̂(∇) denotes the differential Spinᶜ Todd characteristic class, and a sends forms modulo exact forms to differential cohomology. Todd-corrected integration sends y to the fiber integral of T̂ ∪ y.

**Problem.** For a smoothly K-oriented proper submersion of compact manifolds, the differential Chern character carries the K-theory pushforward to Todd-corrected integration in rational differential cohomology. This character expresses differential K-classes in cohomology with rational coefficients.

**How the definition helps.** The corrected integral packages the orientation terms into a single map for the Riemann–Roch formula (our own). The ordinary and local index theorems identify the underlying class and curvature. Bunke and Schick still have to show the remaining zero-curvature difference vanishes.

**nLab:** [fiber integration in differential K-theory](https://ncatlab.org/nlab/show/fiber+integration+in+differential+K-theory). It says: “The special case of fiber integration in differential cohomology for the case of differential K-theory.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Smooth K-theory (2009), Lemma 6.17 and Theorem 6.19](https://www.numdam.org/item/AST_2009__328__45_0.pdf)

### Eta corrections restore index curvature

**Remember:** The derivative of the eta form supplies the missing curvature.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 58J28. arXiv math.KT, math.DG. Level 4: research.

**Definition.** For a geometric family with smooth graded kernel bundle, the differential analytic index uses the virtual kernel bundle with its projected connection. For input correction φ, its form component is the Bismut–Cheeger eta form plus the fiber integral of Todd(∇) ∧ φ.

**Problem.** Consider closed even-dimensional fibers with a metric and a Spinᶜ connection, the geometry defining the Dirac operators. If their kernels form bundles, index curvature equals input curvature integrated over each fiber with its Todd characteristic form.

**How the definition helps.** Adding the eta form supplies exactly the term missing from the kernel formula (our own). The local families index theorem computes its derivative. Taking the exterior derivative of the integrated input correction supplies the remaining term.

**nLab:** [fiber integration in differential K-theory](https://ncatlab.org/nlab/show/fiber+integration+in+differential+K-theory). It says: “The special case of fiber integration in differential cohomology for the case of differential K-theory.”

**Sources:**

- [Daniel S. Freed and John Lott, An index theorem in differential K-theory (2010), Definition 3.12 and Lemma 3.14](https://math.berkeley.edu/~lott/gt-2010-14-021p.pdf)

### Exact connection changes preserve curvature

**Remember:** An exact change contributes zero after differentiation.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** Two connections on a smooth complex bundle define the same structured connection exactly when their Chern–Simons difference form is exact.

**Problem.** Taking the difference of Chern character forms gives a well-defined curvature map on formal differences of these structured bundles.

**How the definition helps.** Exactness kills the derivative of the comparison form, so equivalent connections give identical character forms (our own). Forgetting the connection altogether would retain only the cohomology class, which identifies forms differing by an exact form (our own). The transgression formula supplies the work by identifying the difference of character forms with the exterior derivative of the comparison form (our own). Additivity under direct sum gives the map on formal differences (our own).

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “the equivalence relation that identifies two connections ∇ and ∇′ if their Chern-Simons form CS(∇,∇′) is exact.”

**Sources:** none listed. No primary source with a working link was found.

### Exact transgression distinguishes flat connections

**Remember:** Equal curvature does not imply exact transgression.

*Rules out counterexamples. Confidence: medium.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 53C05. arXiv math.DG, math.AT. Level 4: research.

**Definition.** A structured bundle is a complex vector bundle with a connection considered up to a specific equivalence. Two connections on the same bundle are equivalent when their Chern–Simons difference form is exact. One obtains this form by integrating the Chern character along a path of connections.

**Problem.** On the trivial line over a circle, flat unitary connections with different holonomy give distinct structured bundles. Holonomy is the phase acquired by transporting a vector once around the circle.

**How the definition helps.** Exactness forces the integral of the normalized difference form around the circle to vanish (our own). Modulo integers, this integral measures the ratio of the two holonomies as an angle in ℝ/ℤ (our own). Changing the trivialization can shift the integral only by an integer (our own). Simons and Sullivan show that changing the path changes the difference form only by an exact form (our own).

**nLab:** [Simons-Sullivan structured bundle](https://ncatlab.org/nlab/show/Simons-Sullivan+structured+bundle). It says: “The equivalence relation divided out is relation by a concordance such that the corresponding Chern-Simons form is exact.”

**Sources:**

- [Simons and Sullivan, Structured vector bundles define differential K-theory](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/Simons-Sullivan.pdf)

### Fiber pairing prevents zero transforms

**Remember:** The matching line must pair the two fibers.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 81T30. arXiv math.KT, hep-th. Level 4: research.

**Definition.** A T-duality correspondence of dual principal torus bundles identifies their pulled-back twists on the fiber product over the base. After fiberwise trivialization, the mixed first Chern class of this identification must equal the canonical evaluation pairing of the two lattices.

**Problem.** For a geometric T-duality correspondence, pulling back, matching twists, and integrating over the other projection gives an isomorphism of twisted K-groups.

**How the definition helps.** The required fiber pairing rules out a matching that kills the unit (our own). On two untwisted circles, the identity matching integrates the unit to zero (our own). Proving invertibility for the prescribed pairing uses the topological T-duality theorem (our own).

**Paper or page:** [Geometric T-duality: Buscher rules in general topology](https://arxiv.org/abs/2207.11799). It says: “of twisted K-theory groups is an isomorphism.”

**Sources:**

- [Konrad Waldorf, Geometric T-duality: Buscher rules in general topology](https://doi.org/10.1007/s00023-023-01295-0)

### Flat lines change twist identifications

**Remember:** A symmetry of the zero twist is a flat line acting by tensor product.

*Rules out counterexamples. Confidence: medium.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 53C08. arXiv math.KT. Level 4: research.

**Definition.** A connection-preserving automorphism of the trivial gerbe with zero curving is represented by a line bundle with flat connection. Two representatives agree when a connection-preserving line isomorphism identifies them.

**Problem.** A symmetry of the zero twist can act nontrivially on differential K-theory of the circle.

**How the definition helps.** Remembering twist isomorphisms retains their action by tensor product (our own). A flat line whose parallel transport around the circle equals −1 sends the unit to a line with different holonomy (our own). Passing only to the degree-three class of the twist loses this action (our own).

**nLab:** [twisted differential K-theory](https://ncatlab.org/nlab/show/twisted+differential+K-theory). It says: “the combination of differential K-theory and twisted K-theory.”

**Sources:**

- [Fabio Ferrari Ruffino and Juan Carlos Rocha Barriga, Twisted differential K-characters and D-branes (2020)](https://doi.org/10.1016/j.nuclphysb.2020.115169)
- [Byungdo Park, Geometric models of twisted differential K-theory I (2018)](https://doi.org/10.1007/s40062-017-0177-z)

### Flat pushforwards forget refinements

**Remember:** Flat classes keep the topological orientation and forget its differential choices.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 58J20, 57R18. arXiv math.KT. Level 4: research.

**Definition.** A differential K-class is flat if its curvature form vanishes.

**Problem.** On a closed manifold with a finite group action, the equivariant integral of a flat differential K-class depends only on the underlying equivariant K-orientation.

**How the definition helps.** Zero curvature makes the change in the integral along a path of refinements vanish (our own). Bunke and Schick obtain independence from the homotopy formula for differential integration. General classes can retain the geometric choices (our own).

**nLab:** [flat K-theory](https://ncatlab.org/nlab/show/flat+K-theory). It says: “the restriction (namely the homotopy pullback) of differential K-theory (any version of it) to vanishing generalized-curvature.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Differential orbifold K-theory (2013)](https://doi.org/10.4171/JNCG/143)

### Fredholm sections allow nontorsion twists

**Remember:** Finite rank forces torsion, while a Fredholm bundle can carry any twist.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT. Level 4: research.

**Definition.** For a finite CW complex X and twist h ∈ H³(X;ℤ), choose a principal projective unitary bundle P of class h. Use the norm topology on operators on an infinite-dimensional separable complex Hilbert space H. Define Kʰ⁰(X) as homotopy classes of sections of P ×PU(H) Fred(H), using conjugation.

**Problem.** On a finite cell complex, the Fredholm model defines twisted K-theory for every degree-three integral class. Twisted bundles of finite positive rank exist only when the class has finite order.

**How the definition helps.** Scalar phases cancel in conjugation, so the Fredholm construction works for every twist (our own explanation). For a twisted bundle of constant rank r, taking determinants raises each phase to its rth power, so r times the twisting class is zero. On the three-sphere, a generator of degree-three cohomology has infinite order, so no positive rank works.

**nLab:** [twisted K-theory](https://ncatlab.org/nlab/show/twisted+K-theory). It says: “then the corresponding χ-twisted cohomology spectrum is that consisting of the spaces of sections”

**Sources:**

- [Michael Atiyah and Graeme Segal, Twisted K-theory and cohomology (2006)](https://doi.org/10.1142/9789812772688_0002)

### Global sections recover differential K-theory

**Remember:** Taking sections carries the connection and its transgression together.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** For C∞(X;ℂ), a cycle consists of a finite projective module, a connection ∇ and an odd complex form φ modulo exact forms. After common stabilization and identification, cycles agree when φ₁−φ₂ equals CS(∇₁,∇₂) modulo exact forms, with dCS = ch(∇₂)−ch(∇₁).

**Problem.** For a compact smooth manifold X, taking sections identifies degree-zero differential K-theory of complex bundles with the module group of smooth complex functions on X. Both models use complex connections and complex differential forms.

**How the definition helps.** Sections carry parallel transport data and the Chern–Simons relation to their module counterparts (our own). Differential Serre–Swan identifies the bundles and connections, and matching Chern character normalizations identifies the transgressions (our own).

**Paper or page:** [Noncommutative Differential K-theory](https://arxiv.org/abs/2106.12073). It says: “which is an isomorphism of abelian groups natural in X.”

**Sources:**

- [Byungdo Park, Arthur J. Parzygnat, Corbett Redden and Augusto Stoffel, Noncommutative Differential K-theory, Theorem 4.31](https://arxiv.org/abs/2106.12073)

### Invariant curvature removes T-duality kernels

**Remember:** Invariant curvature survives averaging along the torus.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** A twisted differential K-class on a torus bundle is geometrically invariant when translations along the fibers preserve its curvature form. T-duality exchanges a torus bundle with its dual by pulling classes to their common fiber product, changing the twist and integrating over the original torus.

**Problem.** For a differential T-duality pair of principal torus bundles, T-duality identifies the geometrically invariant subgroups, shifting degree by the fiber dimension. On the full groups it can have a kernel.

**How the definition helps.** Requiring invariant curvature excludes variations that fiber integration averages away (our own). On the standard dual circle pair, a nonconstant function of mean zero gives a class with nonzero curvature but zero transform (our own). The general isomorphism uses topological T-duality and the corresponding isomorphism on invariant forms.

**nLab:** [T-Duality and Differential K-Theory](https://ncatlab.org/nlab/show/T-Duality+and+Differential+K-Theory). It says: “this setup naturally induces the T-duality operation as an isomorphism on twisted differential K-theory.”

**Sources:**

- [Alexander Kahle and Alessandro Valentino, T-Duality and Differential K-Theory (2014)](https://doi.org/10.1142/S0219199713500144)

### Odd classes are character quotients

**Remember:** A point with symmetry contributes one function value per conjugacy class.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 19L47, 57R18. arXiv math.KT. Level 4: research.

**Definition.** For a finite group G acting on a point, the inertia orbifold is G modulo the conjugation action, with stabilizers retained. Its complex-valued functions are precisely the class functions on G.

**Problem.** The odd differential K-group of this point is the additive group of these functions modulo virtual characters, the integer combinations of representation traces.

**How the definition helps.** Using the inertia orbifold supplies one coordinate per conjugacy class (our own). In the differential K-theory exact sequence, odd topological K-theory vanishes and the even character map sends representations to their traces (our own). This computes the quotient without comparing geometric cycles individually (our own).

**nLab:** [delocalized equivariant cohomology](https://ncatlab.org/nlab/show/delocalized+equivariant+cohomology). It says: “is the ordinary cohomology of the quotient space”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Differential orbifold K-theory (2013)](https://doi.org/10.4171/JNCG/143)

### Orientation twists permit K-theory pushforwards

**Remember:** The normal bundle supplies the twist needed for integration.

*Makes the theorem clean to state or prove. Confidence: medium.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 81T30. arXiv math.KT, hep-th. Level 4: research.

**Definition.** For an oriented real vector bundle N, its K-theory orientation twist is W₃(N) = β(w₂(N)). Here β is the integral Bockstein for reduction modulo two, and w₂ is the second Stiefel–Whitney class.

**Problem.** For a smooth embedding of closed manifolds with oriented normal bundle, the twisted K-theory pushforward accepts the restricted target twist plus W₃(N). Its degree shift is the codimension modulo two.

**How the definition helps.** The orientation twist supplies the coefficients required by the Thom class, which implements integration across normal fibers (our own). The twisted Thom isomorphism is the substantive theorem (our own). Extending from the normal neighborhood then gives the pushforward (our own).

**nLab:** [Freed-Witten anomaly](https://ncatlab.org/nlab/show/Freed-Witten+anomaly). It says: “Postcomposition with this map in KK-theory now yields a map from the i⁎χ ⊗ W₃(NQ)-twisted K-theory of Q to the χ-twisted K-theory of X”

**Sources:**

- [Alan L. Carey and Bai-Ling Wang, Thom isomorphism and push-forward map in twisted K-theory (2008)](https://doi.org/10.1017/is007011015jkt011)

### Pulled-back orientations give base change

**Remember:** Pull back the geometry before or after forming the index family.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** On a pullback of a smoothly K-oriented submersion, pull back the vertical Spinᶜ structure, metric, connection and correction form. Lift tangent vectors horizontally using the original horizontal lift of their images on the original base. These data represent the pulled-back smooth K-orientation.

**Problem.** For a smoothly K-oriented proper submersion with closed fibers between compact manifolds, forming the differential K-theory pushforward commutes with smooth pullback between compact bases.

**How the definition helps.** Pulling back the full orientation gives the same geometry and form over each new base point (our own). Fiber integration commutes with pullback. The work lies in defining the corrected index on classes, where different families can represent the same class.

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “a differential-geometric cocycle model of differential K-theory where cocycles are given by smooth families of Dirac operators.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Smooth K-theory (2009), Lemmas 3.10 and 3.20](https://www.numdam.org/item/AST_2009__328__45_0.pdf)

### Sign transport kills constant curvature

**Remember:** A constant carried around the circle must return with the opposite sign.

*Rules out counterexamples. Confidence: medium.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 55N20. arXiv math.KT. Level 4: research.

**Definition.** For the nontrivial degree-one twist of real K-theory on the circle, curvature takes values in a flat real line. Its parallel transport around the circle multiplies every value by −1.

**Problem.** The degree-zero curvature component of every degree-zero differential real K-class with this twist vanishes.

**How the definition helps.** A closed zero-form with these coefficients must return to its starting value after parallel transport (our own). Only zero equals its negative (our own). Ordinary real coefficients would allow the constant curvature component of the untwisted unit (our own). The input from twisted real K-theory is the identification of the coefficient line (our own).

**nLab:** [twisted differential K-theory](https://ncatlab.org/nlab/show/twisted+differential+K-theory). It says: “More detailed discussion of twisted differential K-theory for KU/KO and its application to K-theory classification of D-brane charge”

**Sources:**

- [Daniel Grady and Hisham Sati, Twisted differential KO-theory (2026)](https://doi.org/10.2140/tunis.2026.8.265)

### Smooth orientations fix pushforward curvature

**Remember:** The correction cancels the change in the Todd form.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** A smooth K-orientation refines a vertical Spinᶜ structure by a vertical metric, horizontal distribution, compatible Spinᶜ connection and odd form σ modulo exact forms. Equivalent refinements change σ by the Todd transgression from the old connection to the new one, modulo exact forms.

**Problem.** For a smoothly K-oriented proper family of closed fibers, T − dσ depends only on the orientation. Integrating input curvature against this weight gives the curvature of the differential K-theory pushforward, the index on the base.

**How the definition helps.** The correction to the geometric Todd form cancels its dependence on the chosen connection (our own). The transgression formula computes the change in T. The local families index formula gives the asserted curvature.

**nLab:** [fiber integration in differential K-theory](https://ncatlab.org/nlab/show/fiber+integration+in+differential+K-theory). It says: “The special case of fiber integration in differential cohomology for the case of differential K-theory.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Smooth K-theory (2009), Definition 3.5 and Lemmas 3.16–3.17](https://www.numdam.org/item/AST_2009__328__45_0.pdf)

### Spectra glue twisted classes

**Remember:** Glue the spectra first, then take classes.

*True by definition. Confidence: medium.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 55N20. arXiv math.KT. Level 4: research.

**Definition.** For a cover U ∪ V, spectral descent identifies its spectrum with the homotopy pullback of the restrictions to U ∩ V. A point there consists of local points and a path between their restrictions.

**Problem.** On a smooth manifold covered by two open sets, twisted differential K-classes agreeing on the intersection extend to a class on the union.

**How the definition helps.** The sheaf description turns global data into two local representatives and a homotopy identifying their restrictions (our own). Equality of the restricted classes supplies such a homotopy, although its choice can affect the extension (our own). Compared with gluing geometric cycles, the work lies in proving the spectrum satisfies this gluing rule (our own).

**nLab:** [twisted differential cohomology](https://ncatlab.org/nlab/show/twisted+differential+cohomology). It says: “may be understood as sheaves of parametrized spectra”

**Sources:**

- [Ulrich Bunke and Thomas Nikolaus, Twisted differential cohomology (2019)](https://doi.org/10.2140/agt.2019.19.1631)

### Stabilization handles jumping kernels

**Remember:** Stabilize the operator family instead of trying to bundle its kernels.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** A finite-dimensional reduction splits both graded spaces of sections into a smooth finite-rank subbundle and a complementary Hilbert bundle. The positive Dirac family preserves the splittings and restricts to an isomorphism between the complements.

**Problem.** For a smooth family of closed even-dimensional Spinᶜ manifolds over a compact base, the differential analytic index exists even when kernel dimensions jump. The family carries metrics and compatible connections defining its Dirac operators.

**How the definition helps.** The finite bundles vary smoothly even where the kernel dimension changes (our own). Freed and Lott prove these bundles exist and that the resulting class is independent of the choice. When the kernels form bundles, their formula recovers the kernel index.

**Paper or page:** [An extended variational formula for the Bismut-Cheeger eta form and its applications](https://arxiv.org/abs/2209.00502). It says: “is a well defined group homomorphism.”

**Sources:**

- [Daniel S. Freed and John Lott, An index theorem in differential K-theory (2010), Lemma 7.13, Definition 7.27 and Corollary 7.36](https://math.berkeley.edu/~lott/gt-2010-14-021p.pdf)
- [Man-Ho Ho, An extended variational formula for the Bismut-Cheeger eta form and its applications, Proposition 1.2](https://arxiv.org/abs/2209.00502)

### Structured bundles give tensor multiplication

**Remember:** Tensoring multiplies a connection difference by a closed Chern character form.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 55N15. arXiv math.AT. Level 4: research.

**Definition.** A structured bundle identifies connections on a complex bundle when their Chern–Simons difference form is exact. This form integrates the Chern character along a path of connections. The Simons–Sullivan group consists of formal differences of structured bundles under direct sum.

**Problem.** Tensor product induces a multiplication on the Simons–Sullivan group, making it a model of the differential K-theory ring in degree zero.

**How the definition helps.** Tensoring a connection path with a fixed bundle multiplies its difference form by the fixed connection’s closed Chern character form (our own). Multiplying an exact form by a closed form preserves exactness, so the product respects the equivalence relation (our own). Distributivity then extends multiplication to formal differences (our own).

**nLab:** [differential K-theory](https://ncatlab.org/nlab/show/differential+K-theory). It says: “Under direct sum and tensor product of vector bundles, this becomes a commutatve rig.”

**Sources:**

- [Simons and Sullivan, Structured vector bundles define differential K-theory](https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/Simons-Sullivan.pdf)

### Suspension transfers the index theorem

**Remember:** Suspend and desuspend in the same way for both indices.

*True by definition.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** For an odd differential K-class x, suspend by taking its external product with the differential circle generator normalized to integrate to one. Define its odd index by applying the even index over the circle product and integrating the result over the circle.

**Problem.** For a proper smooth family of closed even-dimensional fibers, the odd analytic and topological indices agree. The fibers carry metrics and Spinᶜ connections defining the family of Dirac operators.

**How the definition helps.** Defining both odd indices through the same circle operations reduces their comparison to the even index theorem (our own). Freed and Lott prove equality in even degree and construct the two circle operations.

**nLab:** [fiber integration in differential K-theory](https://ncatlab.org/nlab/show/fiber+integration+in+differential+K-theory). It says: “The special case of fiber integration in differential cohomology for the case of differential K-theory.”

**Sources:**

- [Daniel S. Freed and John Lott, An index theorem in differential K-theory (2010), Section 9.25](https://math.berkeley.edu/~lott/gt-2010-14-021p.pdf)

### Tensor products add twists

**Remember:** Multiply the classes by tensoring the twists.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 55N20. arXiv math.KT. Level 4: research.

**Definition.** Represent degree-three differential twists by circle gerbes with connection and curving. Their sum is the tensor product gerbe, whose transition phases multiply and whose local connection forms and curvings add.

**Problem.** For degree-three differential twists, multiplication of differential K-classes lands in the sum of their twists. The curvature of their product is the wedge product of their curvatures.

**How the definition helps.** Tensor product combines the two comparisons, so the product of the forms represents the product of the underlying classes (our own). This identifies the target even when a single twisted group has no internal multiplication (our own). Constructing the compatible product maps is the substantive step in the spectrum model (our own).

**nLab:** [twisted differential K-theory](https://ncatlab.org/nlab/show/twisted+differential+K-theory). It says: “the combination of differential K-theory and twisted K-theory.”

**Wikipedia:** [Twisted K-theory](https://en.wikipedia.org/wiki/Twisted_K-theory). It says: “the product of an element of K-theory with twist H with an element of K-theory with twist H′ is an element of K-theory twisted by H+H′.”

**Sources:**

- [Ulrich Bunke and Thomas Nikolaus, Twisted differential cohomology (2019)](https://doi.org/10.2140/agt.2019.19.1631)

### Topological indices determine analytic determinants

**Remember:** Divide determinant lines and shift their connection by the degree-one correction.

*Makes the theorem clean to state or prove.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory), 58J28. arXiv math.KT, math.DG. Level 4: research.

**Definition.** The differential determinant of a virtual bundle takes the quotient of its two determinant lines. It uses the induced connection shifted by the degree-one part of the differential K-class’s form correction, with factor −2πi.

**Problem.** For a compact geometric family of twisted Spinᶜ Dirac operators on closed even-dimensional fibers, the differential topological index determines the analytic determinant line. After periodicity shifts the index to degree zero, its differential determinant is the dual of the Bismut–Freed line with connection.

**How the definition helps.** Using the differential determinant preserves the connection when the analytic index is replaced by the topological index (our own). The families index theorem identifies the two differential K-classes. Freed and Lott also identify the analytic index determinant with the dual spectral line.

**nLab:** [determinant line bundle](https://ncatlab.org/nlab/show/determinant+line+bundle). It says: “line bundle with connection that refines the first Chern-class to ordinary differential cohomology.”

**Sources:**

- [Daniel S. Freed and John Lott, An index theorem in differential K-theory (2010), Theorem 7.42 and Proposition 8.3](https://math.berkeley.edu/~lott/gt-2010-14-021p.pdf)

### Topological orientations miss differential indices

**Remember:** The odd form in an orientation can change the index without changing its topology.

*Rules out counterexamples.* MSC 19L50 (Twisted \\(K\\)-theory; differential \\(K\\)-theory). arXiv math.KT, math.DG. Level 4: research.

**Definition.** With vertical metric, horizontal distribution and compatible Spinᶜ connection fixed, the form datum of a smooth K-orientation is an odd form σ modulo exact forms.

**Problem.** On an oriented circle over a point, keep the metric, Spinᶜ structure and connection fixed. Two orientation forms differing by a one-form of integral ½ give different pushforwards of the unit class.

**How the definition helps.** The orientation retains σ, whose integral contributes directly to the index of the unit (our own). The curvature of the unit is 1, so increasing the integral of σ by ½ changes the index by −½ in ℝ/ℤ. This uses the pushforward formula and the calculation of odd differential K-theory on a point.

**nLab:** [fiber integration in differential K-theory](https://ncatlab.org/nlab/show/fiber+integration+in+differential+K-theory). It says: “The special case of fiber integration in differential cohomology for the case of differential K-theory.”

**Sources:**

- [Ulrich Bunke and Thomas Schick, Smooth K-theory (2009), Sections 3.1.10 and 3.2.2 and Lemma 5.1](https://www.numdam.org/item/AST_2009__328__45_0.pdf)
